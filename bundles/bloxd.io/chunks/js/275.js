export const id = 275;
export const ids = [275];
export const modules = {
  40027: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(40031);
    const Wr = [0, 0, 0];
    class ar {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr;
        this.pool = rr, this.origin = Sr, this.count = 0, this.free = []
      }
      take() {
        var rr;
        const Sr = null !== (rr = this.free.pop()) && void 0 !== rr ? rr : this.count++;
        return Sr >= this.pool.sx && this.pool.grow(Math.max(2 * this.pool.sx, Sr + 1)), this.hide(Sr), Sr
      }
      release(rr) {
        this.hide(rr), this.free.push(rr)
      }
      write(rr, Sr, Qr, Wr) {
        const {
          records: ar
        } = this.pool, {
          origin: jr
        } = this, Ir = rr * Zr.b;
        ar[Ir] = Sr - jr[0], ar[Ir + 1] = Qr - jr[1], ar[Ir + 2] = Wr - jr[2], ar[Ir + Zr.c] = 0, this.pool.markDirty(rr)
      }
      hide(rr) {
        this.pool.records[rr * Zr.b + Zr.c] = 1, this.pool.markDirty(rr)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class jr {
      constructor(rr, Sr, Qr) {
        this.api = rr, this.model = Sr, this.initialCapacity = Qr, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(rr) {
        let Sr = this.kinds.get(rr);
        if (void 0 === Sr) {
          const Qr = this.api.createInstancePool({
            ...this.model,
            item: rr
          }, this.initialCapacity);
          null === Qr || void 0 === Qr || Qr.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Sr = Qr && new ar(Qr, this.origin), this.kinds.set(rr, Sr)
        }
        return Sr
      }
      follow(rr) {
        const {
          origin: Sr
        } = this;
        if (Math.abs(rr[0] - Sr[0]) <= 512 && Math.abs(rr[1] - Sr[1]) <= 512 && Math.abs(rr[2] - Sr[2]) <= 512) return !1;
        Sr[0] = Math.floor(rr[0]), Sr[1] = Math.floor(rr[1]), Sr[2] = Math.floor(rr[2]);
        for (const Qr of this.kinds.values()) null === Qr || void 0 === Qr || Qr.pool.setOrigin(Sr[0], Sr[1], Sr[2]);
        return !0
      }
      commit() {
        for (const rr of this.kinds.values()) null === rr || void 0 === rr || rr.commit()
      }
      dispose() {
        for (const rr of this.kinds.values()) null === rr || void 0 === rr || rr.dispose();
        this.kinds.clear()
      }
    }
  },
  40035: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => Ir,
      i: () => fr
    });
    const Zr = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Wr = [0, 1, 2, 0, 2, 3],
      ar = [4, 5];

    function jr(rr, Sr, Qr, Zr, Wr) {
      for (let jr = 0; jr < 6; jr++) ar.includes(jr) === Wr && Er(rr, Sr, Qr, Zr, jr)
    }

    function Ir(rr, Sr, Qr, Zr) {
      for (let Wr = 0; Wr < 6; Wr++) Er(rr, Sr, Qr, Zr, Wr)
    }

    function fr(rr, Sr, Qr, ar, jr) {
      for (let Ir = 0; Ir < 6; Ir++)
        for (const fr of [0, 1]) {
          const [Er, pr, xr] = [fr + 2, fr + 1, (fr + 3) % 4], mr = rr.length / 3;
          for (const [Sr, Wr] of [
              [fr, pr],
              [Er, pr],
              [Er, xr],
              [fr, xr]
            ])
            for (let fr = 0; fr < 3; fr++) {
              const Er = Zr[3 * (4 * Ir + Sr) + fr],
                pr = Zr[3 * (4 * Ir + Wr) + fr];
              rr.push((Er + (pr - Er) * jr) * ar / 2 + Qr[fr])
            }
          for (const rr of Wr) Sr.push(mr + rr)
        }
    }

    function Er(rr, Sr, Qr, ar, jr) {
      let [Ir, fr, Er] = Qr, [pr, xr, mr] = ar;
      const Nr = rr.length / 3;
      for (let Wr = 4 * jr; Wr < 4 * jr + 4; Wr++) rr.push(Zr[3 * Wr] * pr / 2 + Ir, Zr[3 * Wr + 1] * xr / 2 + fr, Zr[3 * Wr + 2] * mr / 2 + Er);
      for (const Zr of Wr) Sr.push(Nr + Zr)
    }
  },
  39989: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => pY
    });
    var Zr = Qr(72);
    const Wr = [{
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
      ar = 10;
    let jr = !0;

    function Ir() {
      return jr
    }

    function fr(rr) {
      jr = rr
    }
    const Er = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function pr() {
      return jr ? Wr.length : ar
    }

    function xr(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = Wr[rr - 1]) || void 0 === Qr ? void 0 : Qr.reactorTier) && void 0 !== Sr ? Sr : 0
    }

    function mr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xr(rr) > 0;
      return Qr && !jr ? "hidden" : rr <= Sr ? "open" : Qr ? Sr < 5 ? "hidden" : Sr < ar ? "teaser" : "locked" : "locked"
    }

    function Nr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Zr,
        n: Wr
      } = hr(rr);
      return {
        key: Sr[Zr],
        params: {
          [Zr]: Qr ? String(Wr) : Wr
        }
      }
    }
    const Ur = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function tr(rr, Sr) {
      return xr(rr) > 0 && Sr < ar
    }

    function hr(rr) {
      const Sr = xr(rr);
      if (Sr > 0) return {
        kind: "atomic",
        n: Sr,
        short: `A${Sr}`
      };
      const Qr = function(rr) {
        return rr >= 6 && rr <= 10 ? rr - 6 + 1 : 0
      }(rr);
      return Qr > 0 ? {
        kind: "stage",
        n: Qr,
        short: `S${Qr}`
      } : {
        kind: "tier",
        n: rr,
        short: String(rr)
      }
    }

    function zr(rr) {
      return Wr[Math.max(1, Math.min(rr, Wr.length)) - 1]
    }

    function Yr(rr, Sr) {
      return rr < Sr ? function(rr) {
        var Sr;
        return null !== (Sr = Wr[rr]) && void 0 !== Sr ? Sr : null
      }(rr) : null
    }
    const nr = "baf2coresubmit",
      er = "baf2corebankpause",
      Kr = "baf2coredeposit",
      yr = "baf2corechargepause";

    function Br(rr) {
      var Sr;
      return null !== (Sr = rr.baf2CoreOpen) && void 0 !== Sr ? Sr : ar
    }
    const Tr = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function vr(rr) {
      return Tr.includes(rr)
    }
    const Or = (rr, Sr) => Sr.map((Sr => [Sr, [rr]])),
      Lr = Object.fromEntries([...Or("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Or("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Or("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Or("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Or("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Or("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Or("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Or("Parts Bench", ["Focus Lens"]), ...Or("Machine Bench", ["Laser", "Collider"]), ...Or("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Or("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Or("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Or("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Or("Tool Bench", ["Mob Cage"]), ...Or("Tool Bench", ["Pocket Terminal"]), ...Or("Tool Bench", ["Comet Beacon"]), ...Or("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function lr(rr) {
      var Sr;
      return null !== (Sr = Lr[rr]) && void 0 !== Sr ? Sr : ["Workbench"]
    }

    function Xr(rr) {
      return lr(rr)[0]
    }
    Wr.slice(1).map(((rr, Sr) => `Core Tier ${Sr+2}`));
    var Pr = Qr(5779);
    const Hr = ["on", "hud", "off"];

    function qr(rr) {
      return "on" === rr
    }
    var Rr = Qr(379);
    const gr = "Mob Farm",
      Cr = {
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
      Mr = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Gr = {
        1: 20,
        2: 60,
        3: 120
      },
      kr = "baf2farmvoid",
      Ar = "Caged ",
      Vr = " Spawner Block";

    function ir(rr) {
      return `lifeform:${(0,Rr.ne)(rr)}`
    }

    function wr(rr) {
      if (!rr) return null;
      if (rr.startsWith(Ar)) {
        const Sr = rr.slice(6);
        return Mr.includes(Sr) ? Sr : null
      }
      if (rr.endsWith(Vr)) {
        const Sr = rr.slice(0, -14);
        return void 0 !== Cr[Sr] ? Sr : null
      }
      return null
    }

    function cr(rr) {
      return !0 === rr.mobFarm
    }

    function Fr(rr, Sr) {
      return Gr[Cr[Sr]] * rr.opMs / 1e3
    }
    const or = new Map;
    const br = "baf2islands",
      Jr = "baf2islandnew";

    function Dr(rr) {
      const Sr = Wr.findIndex((Sr => Sr.unlocks.includes(rr)));
      return Sr < 0 ? 1 : Sr + 1
    }

    function dr(rr) {
      return Math.floor(rr).toLocaleString("en-US")
    }
    var sr = Qr(39920);
    const ur = "baf2terminaltake",
      rS = "baf2terminalput",
      SS = ["one", "stack", "fill"];

    function QS(rr, Sr, Qr) {
      return `${ur} ${rr} ${Sr} ${Qr}`
    }

    function ZS(rr, Sr, Qr) {
      return `${rS} ${rr} ${Sr} ${Qr}`
    }

    function WS(rr) {
      return `${rS} ${rr}`
    }
    const aS = [
      [`${ur} `, "take"],
      [`${rS} `, "put"]
    ];

    function jS(rr) {
      const Sr = aS.find((Sr => {
        let [Qr] = Sr;
        return rr.startsWith(Qr)
      }));
      if (!Sr) return null;
      const [Qr, Zr] = Sr, [Wr, ar, ...jr] = rr.slice(Qr.length).trim().split(" "), Ir = Number(Wr);
      if (!Number.isSafeInteger(Ir) || Ir <= 0) return null;
      if ("put" === Zr && void 0 === ar) return {
        kind: "putAll",
        seq: Ir
      };
      const fr = function(rr) {
        if (SS.includes(rr)) return rr;
        const Sr = Number(rr);
        return /^\d+$/.test(rr) && Number.isSafeInteger(Sr) && Sr > 0 ? Sr : null
      }(null !== ar && void 0 !== ar ? ar : "");
      return null === fr || 0 === jr.length ? null : {
        kind: Zr,
        seq: Ir,
        mode: fr,
        item: jr.join(" ")
      }
    }

    function IS(rr, Sr) {
      const Qr = "number" === typeof rr ? rr : "one" === rr ? 1 : "stack" === rr ? 99 : Sr;
      return Math.min(Sr, Qr)
    }

    function fS(rr, Sr) {
      const Qr = rr => "number" === typeof rr ? rr : "one" === rr ? 1 : 99;
      return "fill" === rr || "fill" === Sr ? "fill" : Qr(rr) + Qr(Sr)
    }

    function ES(rr, Sr) {
      const Qr = jS(rr),
        Zr = jS(Sr),
        Wr = Qr && Zr ? function(rr, Sr) {
          return "take" === rr.kind || "take" === Sr.kind ? "take" === rr.kind && "take" === Sr.kind && rr.item === Sr.item ? {
            ...Sr,
            mode: fS(rr.mode, Sr.mode)
          } : null : "putAll" === rr.kind || "putAll" === Sr.kind ? {
            kind: "putAll",
            seq: Sr.seq
          } : rr.item === Sr.item ? {
            ...Sr,
            mode: fS(rr.mode, Sr.mode)
          } : null
        }(Qr, Zr) : null;
      return Wr ? "putAll" === (ar = Wr).kind ? WS(ar.seq) : "put" === ar.kind ? ZS(ar.seq, ar.mode, ar.item) : QS(ar.seq, ar.mode, ar.item) : null;
      var ar
    }
    const pS = "baf2rx";

    function xS(rr, Sr) {
      for (var Qr = arguments.length, Zr = new Array(Qr > 2 ? Qr - 2 : 0), Wr = 2; Wr < Qr; Wr++) Zr[Wr - 2] = arguments[Wr];
      return [pS, rr[0], rr[1], rr[2], Sr, ...Zr].join(" ")
    }
    const mS = 2,
      NS = 4,
      US = 8,
      tS = 16,
      hS = 32,
      zS = 64,
      YS = 128,
      nS = 256,
      eS = 512,
      KS = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      yS = [{
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
    const BS = "Biomass",
      TS = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function vS(rr) {
      return {
        input: BS,
        inputAmount: 1,
        output: rr,
        outputAmount: 1
      }
    }
    const OS = "baf2synth",
      LS = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      lS = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      XS = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      PS = function(rr, Sr) {
        return {
          input: rr,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: Sr,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      HS = function(rr, Sr) {
        return {
          ...PS(rr, Sr, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      qS = lS.map((rr => HS(rr, "Biomass", 2))),
      RS = {
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
          recipes: [PS("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), PS("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), PS("Raw Gold", "Gold Grit", 2), PS("Messy Stone", "Sand"), PS("Gravel", "Sand"), PS("Raw Voltite", "Voltite Dust", 2), PS("Moonstone", "Moonstone Dust", 4), PS("Wheat Seeds", "Fertiliser"), PS("Raw Uranium", "Uranium Grit", 2), HS("Mossy Messy Stone", "Sand"), ...qS],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [PS("Iron Grit", "Iron Bar"), PS("Copper Grit", "Copper Bar"), PS("Gold Grit", "Gold Bar"), PS("Raw Iron", "Iron Bar"), PS("Raw Copper", "Copper Bar"), PS("Raw Gold", "Gold Bar"), PS("Sand", "Glass"), PS("Messy Stone", "Stone"), ...Rr.Nc.map((rr => PS(rr, "Charcoal", 1, 4))), PS("Wheat", "Bread", 1, 2), ...lS.map(((rr, Sr) => HS(rr, XS[Sr])))],
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
          recipes: [PS("Iron Bar", "Iron Plate"), PS("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [PS("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [PS("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [PS("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), PS("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), PS("Raw Gold", "Gold Grit", 3), PS("Raw Voltite", "Voltite Dust", 3), PS("Messy Stone", "Sand", 2), PS("Gravel", "Sand", 2), PS("Moonstone", "Moonstone Dust", 6), PS("Raw Uranium", "Uranium Grit", 3), HS("Mossy Messy Stone", "Sand", 2), ...qS],
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
          table: KS
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [PS("Coal", "Diamond", 1, 24), PS("Voltite Dust", "Moonstone", 1, 12)],
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
        ...sr.e
      },
      gS = {
        Crusher: [PS("Spent Pellet", "Glow Dust"), PS("Wheat Seeds", "Biomass"), PS("Wheat", "Biomass"), PS("Dead Bush", "Biomass"), PS("Dusk Moss", "Biomass"), PS("Rotten Flesh", "Biomass"), PS("Bone", "Biomass", 2)],
        "Shatter Mill": [PS("Spent Pellet", "Glow Dust"), PS("Wheat Seeds", "Biomass"), PS("Wheat", "Biomass"), PS("Dead Bush", "Biomass"), PS("Dusk Moss", "Biomass"), PS("Rotten Flesh", "Biomass"), PS("Bone", "Biomass", 2), ...Rr.Nc.map((rr => PS(rr, "Biomass")))],
        Smelter: [PS("Biomass", "Fertiliser", 2)],
        Press: [PS("Coal", "Graphite", 1, 4)]
      },
      CS = "Power Coupler",
      MS = "Advanced Coupler",
      GS = "Nova Coupler",
      kS = [{
        item: CS,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: MS,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: GS,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const AS = new Map;

    function VS(rr) {
      var Sr, Qr;
      return null !== (Sr = null !== (Qr = rr.fuelSlot) && void 0 !== Qr ? Qr : rr.couplerSlot) && void 0 !== Sr ? Sr : null
    }

    function iS(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!rr.couplable) throw new Error(`${rr.kind} takes no Power Coupler`);
      let Qr = AS.get(rr);
      Qr || (Qr = [], AS.set(rr, Qr));
      let Zr = Qr[Sr];
      if (!Zr) {
        var Wr;
        const {
          divisor: ar,
          powerPerS: jr
        } = kS[Sr - 1], Ir = rr.opMs / ar, fr = void 0 !== rr.fluidMade || void 0 !== rr.cryoMade ? rr.powerPerOp : jr * Ir / 1e3;
        Zr = {
          ...rr,
          fuelSlot: null,
          couplerSlot: null !== (Wr = VS(rr)) && void 0 !== Wr ? Wr : void 0,
          opMs: Ir,
          powerPerOp: fr,
          coupled: !0
        }, Sr > 1 && (Zr = {
          ...Zr,
          couplerLevel: Sr
        }), Qr[Sr] = Zr
      }
      return Zr
    }
    const wS = new Map;
    const cS = new Map;

    function FS(rr, Sr) {
      if (null === Sr || (Qr = Sr, !TS.includes(Qr))) return rr;
      var Qr;
      let Zr = cS.get(Sr);
      return Zr || (Zr = {
        ...rr,
        recipes: [vS(Sr)]
      }, cS.set(Sr, Zr)), Zr
    }

    function oS(rr) {
      return !0 === rr.synth
    }
    const bS = (rr, Sr, Qr, Zr) => ({
        output: rr,
        outputAmount: Sr,
        tier: Qr,
        inputs: Zr.map((rr => {
          let [Sr, Qr] = rr;
          return {
            item: Sr,
            amount: Qr
          }
        }))
      }),
      JS = Object.fromEntries([bS("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), bS("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), bS("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), bS("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), bS("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), bS("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), bS("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), bS("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), bS("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), bS("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), bS("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), bS("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), bS("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), bS("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), bS("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), bS("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), bS("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), bS("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), bS("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), bS("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), bS("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), bS("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), bS("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), bS("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), bS("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), bS("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), bS("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), bS("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), bS("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), bS("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((rr => [rr.output, rr]))),
      DS = new Map;

    function dS(rr, Sr) {
      let Qr = RS[rr];
      if (Sr.atomic && (Qr = function(rr) {
          const Sr = gS[rr.kind];
          if (!Sr) return rr;
          let Qr = wS.get(rr.kind);
          if (!Qr) {
            const Zr = new Set(Sr.map((rr => rr.input))),
              Wr = rr.recipes.filter((rr => !Zr.has(rr.input)));
            Qr = {
              ...rr,
              recipes: [...Wr, ...Sr]
            }, wS.set(rr.kind, Qr)
          }
          return Qr
        }(Qr)), Qr.synth) return FS(Qr, Sr.taught);
      if (Sr.coupled && Qr.couplable) return iS(Qr, Sr.level);
      const Zr = Qr.inputSlots && null !== Sr.taught ? JS[Sr.taught] : void 0;
      if (!Zr) return Qr;
      const Wr = `${rr}|${Zr.output}`;
      let ar = DS.get(Wr);
      return ar || (ar = {
        ...Qr,
        bench: Zr
      }, DS.set(Wr, ar)), ar
    }
    const sS = ["Diamond", "Moonstone"];

    function uS(rr) {
      return new Set(rr.flatMap((rr => rr.bonus ? [rr.output, rr.bonus.item] : [rr.output])).filter((rr => !sS.includes(rr))))
    }
    const rQ = Object.values(RS).flatMap((rr => rr.recipes));
    uS(rQ.filter((rr => !0 !== rr.nuclear))), uS([...rQ.filter((rr => !0 === rr.nuclear)), ...Object.values(gS).flat()]);

    function SQ(rr) {
      return null === rr.inputSlot && void 0 === rr.inputSlots && void 0 === rr.powerMade && void 0 === rr.fluidMade && !rr.treeCutter && void 0 === rr.table
    }

    function QQ(rr) {
      return !0 === rr.treeCutter
    }
    const ZQ = ["Voltite Cell"];

    function WQ(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = rr.fuels) || void 0 === Qr ? void 0 : Qr.some((rr => ZQ.includes(rr)))) && void 0 !== Sr && Sr
    }
    const aQ = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Rr.Nc.map((rr => [rr, 8e3]))),
        ...Object.fromEntries(Rr.ud.map((rr => [rr, 2e3]))),
        "Voltite Cell": 12e4
      },
      jQ = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      IQ = {
        "Uranium Deposit": 4e3
      };

    function fQ(rr) {
      var Sr;
      return null !== (Sr = Object.keys(jQ).find((Sr => jQ[Sr] === rr))) && void 0 !== Sr ? Sr : null
    }

    function EQ(rr) {
      return LS.includes(rr)
    }

    function pQ(rr) {
      return !0 !== rr.nuclear || Ir()
    }
    var xQ = Qr(360);
    var mQ = Qr(5861),
      NQ = Qr(5790),
      UQ = Qr(5870),
      tQ = Qr(5854);
    const hQ = "Reactor Controller",
      zQ = "Reactor Port",
      YQ = "Battery Cell",
      nQ = ["fuel", "water", "waste"],
      eQ = {
        fuel: zQ,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      KQ = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      yQ = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      BQ = "Reactor Frame",
      TQ = "Reactor Glass",
      vQ = {
        edge: [BQ],
        cap: [TQ, zQ],
        wall: [TQ, zQ],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [hQ]
      },
      OQ = {
        edge: [YQ],
        cap: [YQ],
        wall: [YQ],
        inside: [YQ],
        ctrl: [YQ]
      },
      LQ = ["edge", "cap", "wall", "inside"],
      lQ = ["Reactor Slag"];

    function XQ(rr) {
      return lQ.includes(PQ(rr))
    }

    function PQ(rr) {
      const Sr = rr.indexOf("|");
      return Sr < 0 ? rr : rr.slice(0, Sr)
    }

    function HQ(rr) {
      return PQ(rr) === hQ ? "reactor" : null
    }

    function qQ(rr) {
      return PQ(rr) !== zQ ? null : rr.endsWith("|Water") ? "water" : rr.endsWith("|Waste") ? "waste" : "fuel"
    }

    function RQ(rr) {
      const Sr = qQ(rr);
      return null === Sr ? null : MQ(eQ[nQ[(nQ.indexOf(Sr) + 1) % nQ.length]], function(rr) {
        return rr.includes(gQ)
      }(rr))
    }
    const gQ = "|meta|rot1|Formed",
      CQ = new Set([BQ, TQ, zQ]);

    function MQ(rr, Sr) {
      var Qr;
      const Zr = PQ(rr);
      if (!CQ.has(Zr)) return rr;
      if (Zr !== zQ) return Sr ? Zr + gQ : Zr;
      const Wr = null !== (Qr = qQ(rr)) && void 0 !== Qr ? Qr : "fuel";
      return Sr ? "fuel" === Wr ? Zr + gQ : `${Zr}${gQ}|${"water"===Wr?"Water":"Waste"}` : eQ[Wr]
    }

    function GQ(rr, Sr) {
      const Qr = ZZ(rr, Sr);
      if ("Air" === Qr) return !1;
      const Zr = "reactor" === rr ? vQ : OQ;
      return LQ.some((rr => Zr[rr].includes(Qr))) || "reactor" === rr && lQ.includes(Qr)
    }

    function kQ(rr) {
      return yQ[rr]
    }

    function AQ(rr) {
      var Sr;
      return null !== (Sr = KQ[rr]) && void 0 !== Sr ? Sr : KQ[1]
    }

    function VQ(rr) {
      const [Sr, , Qr] = AQ(rr);
      return [Qr, 0, -Sr]
    }

    function iQ(rr, Sr, Qr, Zr, Wr, ar) {
      return {
        ctrl: [rr[0], rr[1], rr[2]],
        rot: KQ[Sr] ? Sr : 1,
        w: Qr,
        h: Zr,
        d: Wr,
        cu: ar[0],
        cv: ar[1]
      }
    }

    function wQ(rr, Sr) {
      return "reactor" === rr ? [Math.floor((Sr - 1) / 2), 0] : [0, 0]
    }

    function cQ(rr, Sr, Qr, Zr, Wr) {
      let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : rr.rot;
      if (Qr === rr.w && Zr === rr.h && Wr === rr.d && ar === rr.rot) return rr;
      const [jr] = wQ(Sr, rr.w);
      if (rr.cu === jr && rr.cv <= 1) return iQ(rr.ctrl, ar, Qr, Zr, Wr, wQ(Sr, Qr));
      const Ir = (rr, Sr) => Math.max(1, Math.min(Sr, rr));
      return iQ(rr.ctrl, ar, Qr, Zr, Wr, [Ir(rr.cu, Qr - 2), 0 === rr.cv ? 0 : Ir(rr.cv, Zr - 2)])
    }
    const FQ = 11,
      oQ = 2 * FQ + 1;
    new Uint8Array(oQ * oQ * oQ);

    function bQ(rr) {
      return rr.w * rr.h * rr.d
    }

    function JQ(rr) {
      const Sr = VQ(rr.rot);
      return [rr.ctrl[0] - Sr[0] * rr.cu, rr.ctrl[1] - rr.cv, rr.ctrl[2] - Sr[2] * rr.cu]
    }

    function DQ(rr) {
      return rr.cv * rr.d * rr.w + rr.cu
    }

    function dQ(rr, Sr) {
      const Qr = Sr % rr.w,
        Zr = Math.floor(Sr / rr.w) % rr.d;
      return [Qr, Math.floor(Sr / (rr.w * rr.d)), Zr]
    }

    function sQ(rr, Sr) {
      const [Qr, Zr, Wr] = dQ(rr, Sr), ar = JQ(rr), jr = AQ(rr.rot), Ir = VQ(rr.rot);
      return [ar[0] + Ir[0] * Qr - jr[0] * Wr, ar[1] + Zr, ar[2] + Ir[2] * Qr - jr[2] * Wr]
    }

    function uQ(rr, Sr) {
      const Qr = JQ(rr),
        Zr = AQ(rr.rot),
        Wr = VQ(rr.rot),
        ar = Sr[0] - Qr[0],
        jr = Sr[2] - Qr[2],
        Ir = ar * Wr[0] + jr * Wr[2],
        fr = -(ar * Zr[0] + jr * Zr[2]),
        Er = Sr[1] - Qr[1];
      return Ir < 0 || Ir >= rr.w || Er < 0 || Er >= rr.h || fr < 0 || fr >= rr.d ? -1 : (Er * rr.d + fr) * rr.w + Ir
    }

    function rZ(rr, Sr) {
      if (Sr === DQ(rr)) return "ctrl";
      const [Qr, Zr, Wr] = dQ(rr, Sr), ar = 0 === Zr || Zr === rr.h - 1, jr = Number(0 === Qr || Qr === rr.w - 1) + Number(ar) + Number(0 === Wr || Wr === rr.d - 1);
      return jr >= 2 ? "edge" : 1 === jr ? ar ? "cap" : "wall" : "inside"
    }

    function SZ(rr, Sr) {
      const [Qr, Zr, Wr] = dQ(rr, Sr);
      return 0 === Qr || Qr === rr.w - 1 || 0 === Zr || Zr === rr.h - 1 || 0 === Wr || Wr === rr.d - 1 ? -1 : ((Zr - 1) * (rr.d - 2) + (Wr - 1)) * (rr.w - 2) + (Qr - 1)
    }

    function QZ(rr, Sr) {
      const Qr = rr.w - 2,
        Zr = rr.d - 2,
        Wr = Sr % Qr + 1,
        ar = Math.floor(Sr / Qr) % Zr + 1;
      return ((Math.floor(Sr / (Qr * Zr)) + 1) * rr.d + ar) * rr.w + Wr
    }

    function ZZ(rr, Sr) {
      const Qr = PQ(Sr);
      return "reactor" === rr && Qr === hQ ? BQ : Qr
    }

    function WZ(rr, Sr, Qr) {
      const Zr = "ctrl" === Sr ? PQ(Qr) : ZZ(rr, Qr);
      return ("reactor" === rr ? vQ : OQ)[Sr].includes(Zr) ? "ok" : "Air" === Zr ? "missing" : GQ(rr, Qr) ? "wrong" : "blocked"
    }

    function aZ(rr, Sr) {
      return "battery" === rr ? YQ : "inside" === Sr ? null : function(rr, Sr) {
        if ("inside" === Sr || "ctrl" === Sr || "battery" === rr) return null;
        return "edge" === Sr ? BQ : TQ
      }(rr, Sr)
    }
    const jZ = {
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
      IZ = "Collider",
      fZ = "Laser",
      EZ = "Star Alloy",
      pZ = "Glow Dust",
      xZ = [IZ, "_Collider Focus"];

    function mZ(rr) {
      return xZ.indexOf(PQ(rr))
    }

    function NZ(rr) {
      return PQ(rr) === fZ
    }

    function UZ(rr) {
      return [
        [rr[0], rr[1], rr[2]],
        [rr[0], rr[1] + 1, rr[2]]
      ]
    }
    const tZ = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function hZ(rr, Sr, Qr) {
      const Zr = tZ[Sr];
      return [rr[0] + Zr[0] * Qr, rr[1], rr[2] + Zr[2] * Qr]
    }

    function zZ(rr, Sr) {
      if (Sr[1] !== rr[1]) return null;
      const Qr = Sr[0] - rr[0],
        Zr = Sr[2] - rr[2];
      if (0 !== Qr === (0 !== Zr)) return null;
      const Wr = Math.abs(Qr + Zr);
      if (Wr > jZ.LASER_D) return null;
      return {
        dir: Zr < 0 ? 0 : Qr > 0 ? 1 : Zr > 0 ? 2 : 3,
        Oj: Wr
      }
    }

    function YZ(rr, Sr, Qr) {
      const Zr = Sr => Math.abs(rr[0] - Sr[0]) <= 1 && Math.abs(rr[1] - Sr[1]) <= 1;
      return Zr(Sr) || Zr(Qr)
    }

    function nZ(rr, Sr) {
      return function(rr, Sr, Qr, Zr) {
        return [0, 1, 2, 3].map((Wr => {
          for (let ar = 1; ar <= jZ.LASER_D; ar++) {
            const jr = hZ(rr, Wr, ar);
            if (YZ([jr[0], jr[2]], Sr, Qr) || !Zr(jr)) return !1
          }
          return !0
        }))
      }(UZ(rr)[1], Sr.spawnXZ, Sr.coreXZ, (rr => rr[1] >= mQ.r && rr[1] < mQ.r + mQ.s && rr[0] >= Sr.minXZ[0] && rr[0] <= Sr.maxXZ[0] && rr[2] >= Sr.minXZ[1] && rr[2] <= Sr.maxXZ[1]))
    }
    const eZ = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function KZ(rr) {
      return Math.max(48 + 16 * rr, zr(rr).machineAllowance)
    }
    const yZ = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function BZ(rr) {
      const Sr = rr.split("|")[0];
      return yZ.includes(Sr) ? "Solar Panel" : Sr === UQ.d ? "Fluid Pipe" : mZ(Sr) >= 0 ? "Collider" : (Qr = Sr, eZ.includes(Qr) ? Sr : null);
      var Qr
    }
    const TZ = "buildAFactory2Game:solarPanelDescription";
    const vZ = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function OZ(rr, Sr) {
      var Qr;
      return null !== (Qr = vZ.find((Qr => {
        var Zr;
        return (null !== (Zr = rr.level(Qr)) && void 0 !== Zr ? Zr : 0) >= Sr
      }))) && void 0 !== Qr ? Qr : null
    }
    const LZ = "buildAFactory2Game:";
    let lZ = null;
    const XZ = {
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
      PZ = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      HZ = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      qZ = {
        "Loot Chest": `${LZ}lookRuinChestName`
      };

    function RZ(rr, Sr) {
      var Qr, Zr, Wr;
      let ar = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sr;
      if ("Solar Panel" === BZ(Sr)) return {
        name: (0, Rr.te)(rr.displayName("Solar Panel")),
        detail: TZ,
        detailItem: null
      };
      const jr = Sr.endsWith(" Ore"),
        fr = (lZ ??= new Set([...Object.keys((0, NQ.j)()), ...Object.keys((0, UQ.r)())].map((rr => rr.split("|")[0]))), lZ).has(Sr),
        Er = jr || fr ? null : function(rr) {
          var Sr;
          return rr.endsWith(" Log") && !rr.startsWith("Barkless ") ? "lookLog" : rr.endsWith(" Sapling") ? "lookSapling" : rr.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (Sr = XZ[rr]) && void 0 !== Sr ? Sr : null
        }(Sr);
      if (!rr.isBlock(Sr) || !jr && !fr && null === Er) return null;
      const pr = null !== (Qr = qZ[Sr]) && void 0 !== Qr ? Qr : (0, Rr.Pb)(Sr, null !== (Zr = rr.displayName(ar)) && void 0 !== Zr ? Zr : rr.displayName(Sr));
      if (null !== Er) return {
        name: pr,
        detail: `${LZ}${Er}`,
        detailItem: null
      };
      const xr = null !== (Wr = PZ[Sr]) && void 0 !== Wr ? Wr : Ir() ? HZ[Sr] : void 0;
      if (fr && void 0 !== xr) return {
        name: pr,
        detail: `${LZ}${xr}`,
        detailItem: null
      };
      const mr = jQ[Sr];
      if (void 0 !== mr) return {
        name: pr,
        detail: `${LZ}lookDeposit`,
        detailItem: (0, Rr.Pb)(mr, rr.displayName(mr))
      };
      const Nr = rr.harvestLevel(Sr);
      if (jr && "rock" === rr.harvestType(Sr) && 0 !== Nr) {
        const Sr = OZ(rr, null !== Nr && void 0 !== Nr ? Nr : 0);
        if (Sr === vZ[0]) return {
          name: pr,
          detail: `${LZ}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== Sr) return {
          name: pr,
          detail: `${LZ}lookPickaxe`,
          detailItem: (0, Rr.Pb)(Sr, rr.displayName(Sr))
        }
      }
      return {
        name: pr,
        detail: (0, Rr.te)(rr.description(Sr)),
        detailItem: null
      }
    }

    function gZ(rr) {
      return rr < mQ.r - 24
    }
    const CZ = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const MZ = "Wrench",
      GZ = "Nova Wrench";

    function kZ(rr) {
      return rr === MZ || rr === GZ
    }
    const AZ = [...mQ.L, "Belt Lift", "Belt Drop"];
    const VZ = ["Belt Lift", "Belt Drop"],
      iZ = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function wZ(rr) {
      return rr.split("|")[0]
    }

    function cZ(rr) {
      const Sr = /\|rot(\d)/.exec(rr);
      return Sr ? Number(Sr[1]) : 1
    }

    function FZ(rr) {
      return rr % 4 + 1
    }

    function oZ(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === Sr && "" === Qr ? rr : `${rr}|meta|rot${Sr}${Qr}`
    }

    function bZ(rr) {
      return wZ(rr) === mQ.A ? (0, mQ.S)(rr) ? "gateRight" : "gateLeft" : (0, mQ.X)(rr)
    }

    function JZ(rr) {
      const Sr = wZ(rr),
        Qr = cZ(rr);
      if (mQ.L.includes(Sr)) return (0, mQ.P)(Sr, FZ(Qr), null);
      if (Sr === mQ.g) return (0, mQ.ab)(FZ(Qr), (0, mQ.W)(rr));
      if (Sr === mQ.D) {
        const Zr = iZ[(0, mQ.X)(rr)];
        return null === Zr ? oZ(Sr, FZ(Qr)) : oZ(Sr, Qr, mQ.H[Zr])
      }
      return Sr === mQ.A ? (0, mQ.S)(rr) ? oZ(Sr, FZ(Qr)) : oZ(Sr, Qr, mQ.o) : tQ.b.includes(Sr) && !VZ.includes(Sr) || EQ(Sr) ? oZ(Sr, FZ(Qr)) : null
    }

    function DZ(rr) {
      return tQ.b.includes(rr) || EQ(rr) || null !== BZ(rr)
    }

    function dZ(rr) {
      return "Solar Panel" === BZ(rr)
    }
    const sZ = "buildAFactory2Game:",
      uZ = {
        leftFront: `${sZ}lookSplitDetail_leftFront`,
        frontRight: `${sZ}lookSplitDetail_frontRight`,
        gateRight: `${sZ}lookGateDetail_gateRight`
      };

    function rW(rr, Sr) {
      var Qr;
      let Zr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Wr = bZ(rr),
        ar = null === Wr ? null : `${sZ}${Wr.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Wr}`,
        jr = null === Wr ? null : null !== (Qr = uZ[Wr]) && void 0 !== Qr ? Qr : null;
      if (kZ(Sr) && Zr) {
        const Qr = wZ(rr);
        return Sr === GZ && Ir() && function(rr) {
          return AZ.includes(wZ(rr))
        }(rr) ? {
          mode: ar,
          detail: jr,
          next: `${sZ}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: ar,
          detail: jr,
          next: DZ(Qr) && !dZ(Qr) ? `${sZ}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const fr = kZ(Sr) ? JZ(rr) : null;
      if (null === fr) return {
        mode: ar,
        detail: jr,
        next: null,
        nextState: null
      };
      const Er = bZ(fr);
      return null === Er || cZ(fr) !== cZ(rr) ? {
        mode: ar,
        detail: jr,
        next: `${sZ}lookWrenchTurn`,
        nextState: null
      } : {
        mode: ar,
        detail: jr,
        next: `${sZ}lookWrenchNext`,
        nextState: `${sZ}lookWrenchState_${Er}`
      }
    }
    const SW = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const QW = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function ZW(rr) {
      return [0, 1, 2, 3].map((Sr => 0 !== (rr & 1 << Sr)))
    }

    function WW(rr) {
      const Sr = [];
      for (let Qr = 8; Qr + 2 < rr.length; Qr += 3) Sr.push([rr[Qr], rr[Qr + 1], rr[Qr + 2]]);
      return {
        focus: [rr[0], rr[1], rr[2]],
        lasers: ZW(rr[3]),
        open: ZW(rr[4]),
        live: ZW(rr[5]),
        on: 1 === rr[6],
        state: QW[rr[7]],
        blockers: Sr
      }
    }
    const aW = "Arc Caster",
      jW = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      IW = (Object.values(jW), "Jet Chestplate"),
      fW = "Nova Jet Chestplate",
      EW = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      pW = Object.values(EW);

    function xW(rr, Sr, Qr) {
      return Math.min(function(rr) {
        return Ir() && xr(rr) >= 5 ? 20 : 10
      }(Qr), Math.floor(function(rr, Sr) {
        return Math.max(0, rr) + (Ir() ? Math.max(0, Sr) : 0)
      }(rr, Sr) / 5))
    }

    function mW(rr, Sr, Qr) {
      const Zr = xW(Sr, Qr, rr),
        Wr = xr(rr),
        ar = (Wr >= 3 ? 55 : Wr >= 1 ? 50 : rr >= 8 ? 45 : 30) + Zr,
        jr = Math.max(100 + Zr, 2 * ar);
      return {
        arcDamage: ar,
        arcPierce: rr >= 7 ? 2 : 1,
        arcChain: rr >= 10,
        barrierMax: (Wr >= 4 ? 100 : Wr >= 2 ? 90 : rr >= 9 ? 80 : rr >= 6 ? 60 : 40) + 5 * Zr,
        barrierRegenPerS: Wr >= 5 ? 20 : rr >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Zr,
        novaShieldRegenPerS: 32,
        bladeDamage: jr,
        bladePunch: Math.round(.5 * jr),
        forgeRank: Zr
      }
    }
    const NW = {
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
    var UW = Qr(38303),
      tW = Qr(3429),
      hW = Qr(3425),
      zW = Qr(26),
      YW = Qr(1758),
      nW = Qr(1155),
      eW = Qr.n(nW);

    function KW(rr) {
      return !0 === rr.field
    }
    const yW = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function BW(rr) {
      return yW.has(rr) ? `buildAFactory2Game:itemPlural_${(0,Rr.ne)(rr)}` : null
    }
    var TW = Qr(1251),
      vW = Qr(1448),
      OW = Qr(2075),
      LW = Qr(2057),
      lW = Qr(1527),
      XW = Qr(38296),
      PW = Qr(34),
      HW = Qr(38287);
    const qW = "baf2QuestView",
      RW = "baf2PlayerY",
      gW = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class CW {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = rr, this.view = {
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
      set(rr, Sr) {
        var Qr, Zr, Wr, ar, jr, Ir, fr, Er;
        const pr = JSON.stringify(rr.baf2QuestName) === JSON.stringify(this.view.name),
          xr = new Set(this.view.rows.filter((rr => rr.done)).map((rr => rr.id))),
          mr = new Set(this.view.rows.filter((rr => rr.justFinished)).map((rr => rr.id))),
          Nr = rr.baf2QuestSide,
          Ur = null !== Nr && !0 === rr.baf2QuestSideFocus;
        let tr = !1,
          hr = 0;
        const zr = rr.baf2QuestSteps.map((rr => {
            const Sr = cW(rr, gW.has(rr[0]) ? rr[0] : "" + hr++),
              Qr = pr && Sr.done && !xr.has(Sr.id);
            return Sr.justFinished = Qr || pr && Sr.done && mr.has(Sr.id), tr ||= Qr, Sr
          })),
          Yr = wW(zr);
        Yr >= 0 && !Ur && (zr[Yr].current = !0);
        const nr = !pr && null !== rr.baf2QuestName,
          er = JSON.stringify(Nr && [Nr[0], Nr[1]]),
          Kr = er === JSON.stringify(null !== (Qr = null === (Zr = this.view.side) || void 0 === Zr ? void 0 : Zr.name) && void 0 !== Qr ? Qr : null),
          yr = null !== Nr && !this.sidesSeen.has(er);
        yr && this.sidesSeen.add(er), this.serverTutorial = null !== (Wr = rr.baf2QuestTutorial) && void 0 !== Wr ? Wr : "on", (null !== (ar = rr.baf2QuestTutorialSeq) && void 0 !== ar ? ar : 0) >= this.pickSeq && this.endPick();
        const Br = !pr || !Kr || rr.baf2QuestTier !== this.view.tier;
        this.view = {
          name: rr.baf2QuestName,
          rows: zr,
          reward: rr.baf2QuestReward,
          goal: rr.baf2QuestGoal,
          pulse: this.view.pulse + (tr || nr ? 1 : 0),
          itemNames: Sr,
          side: Nr && {
            name: [Nr[0], Nr[1]],
            row: {
              ...cW(Nr[2], "side"),
              current: Ur
            },
            goal: null !== (jr = Nr[3]) && void 0 !== jr ? jr : null
          },
          sideCameUpAt: yr ? Date.now() : this.view.sideCameUpAt,
          tier: rr.baf2QuestTier,
          core: rr.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (Ir = rr.baf2QuestAlso) && void 0 !== Ir ? Ir : [],
          depth: null !== (fr = rr.baf2QuestDepth) && void 0 !== fr ? fr : null,
          tutorial: null !== (Er = this.pickedTutorial) && void 0 !== Er ? Er : this.serverTutorial,
          tutorialKnown: !0
        }, this.Jp(), tr && this.scheduleClear(), Br && this.requestBook()
      }
      setTutorial(rr) {
        return this.endPick(), this.pickedTutorial = rr, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.Jp()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: rr
        }, this.Jp(), this.pickSeq
      }
      onPlayerY(rr) {
        const Sr = Math.floor(rr);
        Sr !== this.playerY && (this.playerY = Sr, this.view.depth && PW.i.Jp(RW, Sr))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(rr) {
        this.view = {
          ...this.view,
          chapters: rr.baf2BookChapters
        }, this.Jp()
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
            rows: this.view.rows.map((rr => rr.justFinished ? {
              ...rr,
              justFinished: !1
            } : rr))
          }, this.Jp()
        }), 2400)
      }
      Jp() {
        PW.i.Jp(qW, this.view, !0)
      }
    }

    function MW(rr, Sr) {
      return rr.sideCameUpAt > 0 && Sr - rr.sideCameUpAt < 2400
    }

    function GW(rr) {
      return (null === rr.name || kW(rr)) && null === rr.side && null !== rr.chapters
    }

    function kW(rr) {
      var Sr;
      return "quest_forgeOngoing" === (null === (Sr = rr.name) || void 0 === Sr ? void 0 : Sr[0])
    }

    function AW(rr) {
      return rr.filter((rr => !gW.has(rr.key)))
    }

    function VW(rr) {
      return rr.key.startsWith("stepCraft")
    }

    function iW(rr, Sr) {
      const Qr = new Set,
        Zr = rr.side ? [...rr.rows, rr.side.row] : rr.rows;
      for (const ar of Zr)
        if (!ar.done) {
          !ar.item || Sr && !VW(ar) || Qr.add(ar.item);
          for (const [rr, Sr, Zr] of null !== (Wr = ar.chips) && void 0 !== Wr ? Wr : []) {
            var Wr;
            Sr < Zr && Qr.add(rr)
          }
        } return Qr
    }

    function wW(rr) {
      const Sr = rr.findIndex((rr => !rr.done && !rr.away));
      return Sr >= 0 ? Sr : rr.findIndex((rr => !rr.done))
    }

    function cW(rr, Sr) {
      let [Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr] = rr;
      return {
        id: Sr,
        key: Qr,
        params: Zr,
        item: Wr,
        amount: ar,
        total: jr,
        done: Ir,
        chips: null !== fr && void 0 !== fr ? fr : null,
        current: !1,
        away: !0 === Er,
        madeFor: null !== pr && void 0 !== pr ? pr : [],
        also: null !== xr && void 0 !== xr ? xr : [],
        justFinished: !1
      }
    }
    const FW = "baf2QuestItems",
      oW = new Set;
    let bW = new Set,
      JW = null;

    function DW(rr) {
      const Sr = qr(rr.tutorial),
        Qr = Sr ? iW(rr, !0) : oW;
      "inventory" === zW.c.get("openInGameMenuName") ? (JW = null, (0, HW.x)(Qr)) : JW = Qr;
      const Zr = Sr ? iW(rr, !1) : oW;
      (0, XW.d)(Zr, bW) || (bW = Zr, PW.i.Jp(FW, bW))
    }

    function dW() {
      return (0, lW.b)(FW, (() => bW))
    }
    var sW = Qr(39995);
    const uW = [{
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

    function ra(rr, Sr) {
      return [`Deposit Seed (${rr})`, {
        item: jQ[`${rr} Deposit`],
        amount: Sr
      }]
    }
    const Sa = Object.fromEntries([ra("Coal", 8), ra("Iron", 8), ra("Copper", 8), ra("Gold", 6), ra("Voltite", 4), ra("Uranium", 4)]),
      Qa = "Relay Coil",
      Za = new Map;

    function Wa(rr) {
      let Sr = Za.get(rr);
      if (!Sr) {
        const Qr = Math.max(1, rr);
        Sr = uW.filter((rr => {
          var Sr;
          return Qr >= rr.fromTier && Qr <= (null !== (Sr = rr.untilTier) && void 0 !== Sr ? Sr : 1 / 0)
        })).map((rr => rr.later && Qr >= rr.later.tier ? {
          ...rr,
          weight: rr.later.weight
        } : rr)), Za.set(rr, Sr)
      }
      return Sr
    }

    function aa(rr) {
      return Wa(rr).some((rr => {
        let {
          item: Sr
        } = rr;
        return Sr === Qa
      }))
    }

    function ja(rr) {
      return rr.startsWith("Deposit Seed (")
    }

    function Ia(rr, Sr) {
      const Qr = Wa(rr);
      return Sr ? Qr.filter((rr => Sr(rr.item))) : Qr
    }

    function fa(rr) {
      return rr.reduce(((rr, Sr) => rr + Sr.weight), 0)
    }

    function Ea(rr, Sr) {
      const Qr = Ia(rr, Sr),
        Zr = fa(Qr);
      return Qr.map((rr => ({
        find: rr,
        chance: rr.weight / Zr
      })))
    }
    const pa = 6e4,
      xa = new Intl.NumberFormat("en-US");

    function ma(rr, Sr) {
      const Qr = rr >= 10 ? Math.round(rr) : Math.round(10 * rr) / 10;
      return 0 === Qr ? "0" : `${Sr}${xa.format(Qr)}`
    }

    function Na(rr) {
      return rr < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? xa.format(rr) : rr < 1e6 ? `${rr<1e5?Math.floor(rr/100)/10:Math.floor(rr/1e3)}k` : Math.floor(rr / 1e5) / 10 + "M"
    }

    function Ua(rr) {
      return rr < 0 ? "\u2212" + -rr : String(rr)
    }

    function ta(rr, Sr) {
      const Qr = Math.max(1, Math.round(Sr));
      if (Qr < 60) return rr("buildAFactory2Game:durationSeconds", {
        seconds: String(Qr)
      });
      const Zr = Math.round(Qr / 60);
      if (Zr < 60) return rr("buildAFactory2Game:durationMinutes", {
        minutes: String(Zr)
      });
      const Wr = String(Math.floor(Zr / 60));
      return Zr % 60 === 0 ? rr("buildAFactory2Game:durationWholeHours", {
        hours: Wr
      }) : rr("buildAFactory2Game:durationHours", {
        hours: Wr,
        minutes: String(Zr % 60)
      })
    }
    var ha = Qr(40004),
      za = Qr(1338);

    function Ya(rr, Sr) {
      return null !== rr && rr > Sr + 1
    }

    function na(rr) {
      const Sr = 100 * rr;
      return String(Sr <= 0 || Sr >= 1 ? Math.round(Sr) : Math.max(.1, Math.round(10 * Sr) / 10))
    }

    function ea(rr) {
      let {
        item: Sr,
        amount: Qr
      } = rr;
      return (0, za.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, za.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, za.jsx)(OW.d, {
            itemName: Sr,
            amount: 0
          })
        }), Qr > 1 && (0, za.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", Qr]
        })]
      })
    }

    function Ka(rr) {
      let {
        label: Sr,
        names: Qr
      } = rr;
      const [Wr, ar] = (0, Zr.useState)(!1), jr = Qr.join(" / ");
      return (0, za.jsxs)(za.Fragment, {
        children: [(0, za.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: jr,
          "aria-expanded": Wr,
          onClick: () => {
            ar(!Wr)
          },
          children: Sr
        }), Wr && (0, za.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: jr
        })]
      })
    }

    function ya(rr) {
      let {
        tier: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)(), {
        key: Zr,
        params: Wr
      } = Nr(Sr, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), ar = Qr(`buildAFactory2Game:${Zr}`, Wr);
      return (0, za.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, za.jsx)(vW.c, {
          name: "lock"
        }), ar]
      })
    }
    const Ba = (0, Zr.createContext)(null);

    function Ta() {
      const {
        t: rr
      } = (0, TW.E)(), Sr = (0, Zr.useContext)(Ba);
      return (0, Zr.useEffect)((() => null === Sr || void 0 === Sr ? void 0 : Sr()), [Sr]), (0, za.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: rr("buildAFactory2Game:recipeForQuest"),
        "aria-label": rr("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function va(rr) {
      let {
        title: Sr,
        count: Qr,
        children: Wr,
        startOpen: ar = !0
      } = rr;
      const {
        t: jr
      } = (0, TW.E)(), [Ir, fr] = (0, Zr.useState)((() => ar && !(0, ha.e)())), [Er, pr] = (0, Zr.useState)(0), xr = (0, Zr.useCallback)((() => (pr((rr => rr + 1)), () => {
        pr((rr => rr - 1))
      })), []);
      return (0, za.jsxs)("div", {
        className: eW()("Baf2Recipes", {
          Open: Ir
        }),
        children: [(0, za.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            fr(!Ir)
          },
          "aria-expanded": Ir,
          children: [jr("buildAFactory2Game:recipesToggle", {
            title: Sr,
            count: String(Qr)
          }), (0, za.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: Ir ? "\u25be" : "\u25b8"
          })]
        }), Ir && (0, za.jsxs)(Ba.Provider, {
          value: xr,
          children: [(0, za.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Wr
          }), Er > 0 && (0, za.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, za.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), jr("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Oa = "buildAFactory2Game:",
      La = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const la = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      Xa = {
        "Uranium Grit": ar,
        "Raw Uranium": ar
      };

    function Pa(rr) {
      var Sr;
      return null !== (Sr = Xa[rr]) && void 0 !== Sr ? Sr : Math.max(Dr(rr), la[rr] ? Dr(la[rr]) : 1, function(rr) {
        const Sr = Wr.findIndex((Sr => Sr.cost.some((Sr => Sr.item === rr))));
        return Sr > ar ? Sr : 1
      }(rr))
    }

    function Ha(rr, Sr) {
      return qa(Sr) ? Pa(Sr) : function(rr) {
        if (La.has(rr)) return 1;
        const Sr = Wr.findIndex((Sr => Sr.newDeposits.some((Sr => {
          let {
            block: Qr
          } = Sr;
          return Qr === rr
        }))));
        return Sr < 0 ? 1 : Sr + 1
      }(rr)
    }

    function qa(rr) {
      return rr in Xa || xr(Pa(rr)) > 0
    }

    function Ra(rr, Sr) {
      return dS(rr, {
        coupled: !1,
        taught: null,
        atomic: Ir() && Sr >= 11
      }).recipes
    }

    function ga(rr, Sr) {
      const Qr = mr(rr, Sr, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xr(rr) > 0);
      return "open" === Qr || "locked" === Qr
    }

    function Ca(rr, Sr) {
      return rr.map(((rr, Qr) => ({
        value: rr,
        idx: Qr,
        tier: Sr(rr)
      }))).sort(((rr, Sr) => rr.tier - Sr.tier || rr.idx - Sr.idx)).map((rr => {
        let {
          value: Sr
        } = rr;
        return Sr
      }))
    }

    function Ma(rr, Sr, Qr) {
      const Zr = mr(rr, Sr);
      if ("hidden" === Zr || "open" === Zr) return null;
      if ("teaser" === Zr) return {
        tag: {
          translationKey: `${Oa}${Qr?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Oa}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Wr = Nr(rr, {
          tier: Qr ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        ar = Nr(rr, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Oa}${Wr.key}`,
          params: Wr.params
        },
        reason: {
          translationKey: `${Oa}${ar.key}`,
          params: ar.params
        }
      }
    }

    function Ga(rr) {
      return !ja(rr)
    }

    function ka(rr) {
      let {
        seconds: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)();
      return (0, za.jsx)(va, {
        title: Qr("buildAFactory2Game:recipesCuts", {
          seconds: Sr
        }),
        count: 1,
        children: (0, za.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, za.jsx)(ea, {
            item: "Maple Sapling",
            amount: 1
          }), (0, za.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, za.jsx)(ea, {
            item: "Maple Log",
            amount: 1
          }), (0, za.jsx)("span", {
            className: "Baf2RecipeName",
            children: Qr("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Aa(rr) {
      let {
        fertilised: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)();
      return (0, za.jsxs)(va, {
        title: Qr("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, za.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, za.jsx)(ea, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, za.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, za.jsx)(ea, {
            item: "Wheat",
            amount: 1
          }), (0, za.jsx)(ea, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, za.jsx)("span", {
            className: "Baf2RecipeName",
            children: Qr("buildAFactory2Game:recipeField")
          })]
        }), (0, za.jsxs)("li", {
          className: eW()("Baf2Recipe", {
            InUse: Sr
          }),
          children: [(0, za.jsx)(ea, {
            item: "Fertiliser",
            amount: 1
          }), (0, za.jsx)("span", {
            className: "Baf2RecipeName",
            children: Qr("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function Va(rr) {
      let {
        tier: Sr,
        seconds: Qr
      } = rr;
      const {
        t: Zr
      } = (0, TW.E)(), Wr = function(rr) {
        return rr >= 5 ? yS : KS
      }(Sr);
      return (0, za.jsx)(va, {
        title: Zr("buildAFactory2Game:recipesBringsUp", {
          seconds: Qr
        }),
        count: Wr.length,
        children: Wr.map((rr => {
          let {
            item: Sr,
            chance: Qr
          } = rr;
          return (0, za.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, za.jsx)(ea, {
              item: Sr,
              amount: 1
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, sW.g)(Zr, Sr)
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Zr("buildAFactory2Game:recipeChance", {
                percent: na(Qr)
              })
            })]
          }, Sr)
        }))
      })
    }

    function ia(rr) {
      let {
        tier: Sr,
        seconds: Qr,
        noSeeds: Zr
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)(), ar = dW(), jr = Ea(Sr, Zr ? Ga : void 0), Ir = Zr && Ea(Sr).length > jr.length, fr = aa(Sr);
      return (0, za.jsxs)(va, {
        title: Wr("buildAFactory2Game:recipesRecycles", {
          seconds: Qr
        }),
        count: jr.length,
        children: [jr.map((rr => {
          let {
            find: Sr,
            chance: Qr
          } = rr;
          return (0, za.jsxs)("li", {
            className: "Baf2Recipe",
            children: [ar.has(Sr.item) && (0, za.jsx)(Ta, {}), (0, za.jsx)(ea, {
              item: Sr.item,
              amount: Sr.amount
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, sW.g)(Wr, Sr.item)
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Wr("buildAFactory2Game:recipeChance", {
                percent: na(Qr)
              })
            })]
          }, Sr.item)
        })), Ir && (0, za.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, za.jsx)("span", {
            className: "Baf2RecipeName",
            children: Wr("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), fr && (0, za.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, za.jsx)("span", {
            className: "Baf2RecipeName",
            children: Wr("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function wa(rr) {
      let {
        tier: Sr,
        seconds: Qr
      } = rr;
      const {
        t: Zr
      } = (0, TW.E)(), Wr = Object.entries(Sa).filter((rr => {
        let [, {
          item: Qr
        }] = rr;
        return ga(Pa(Qr), Sr, qa(Qr))
      }));
      return (0, za.jsx)(va, {
        title: Zr("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: Qr
        }),
        count: Wr.length,
        children: Wr.map((rr => {
          let [Sr, {
            item: Qr,
            amount: Wr
          }] = rr;
          return (0, za.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, za.jsx)(ea, {
              item: Sr,
              amount: 1
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, za.jsx)(ea, {
              item: Qr,
              amount: Wr
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, sW.g)(Zr, Qr)
            })]
          }, Sr)
        }))
      })
    }

    function ca(rr) {
      let {
        tier: Sr,
        seconds: Qr
      } = rr;
      const {
        t: Zr
      } = (0, TW.E)(), Wr = dW(), ar = Ca(Object.entries(jQ).filter((rr => {
        let [Qr, Zr] = rr;
        return ga(Ha(Qr, Zr), Sr, qa(Zr))
      })), (rr => {
        let [Sr, Qr] = rr;
        return Ha(Sr, Qr)
      }));
      return (0, za.jsx)(va, {
        title: Zr("buildAFactory2Game:recipesDigs", {
          seconds: Qr
        }),
        count: ar.length,
        children: ar.map((rr => {
          let [Qr, ar] = rr;
          const jr = Ha(Qr, ar),
            Ir = jr > Sr ? jr : null,
            fr = IQ[Qr],
            Er = null === Ir && Wr.has(ar);
          return (0, za.jsxs)("li", {
            className: eW()("Baf2Recipe", {
              Locked: null !== Ir,
              Far: Ya(Ir, Sr)
            }),
            children: [Er && (0, za.jsx)(Ta, {}), (0, za.jsx)(ea, {
              item: Qr,
              amount: 1
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, za.jsx)(ea, {
              item: ar,
              amount: 1
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, sW.g)(Zr, ar)
            }), void 0 !== fr && (0, za.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Zr("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / fr)
              })
            }), null !== Ir && (0, za.jsx)(ya, {
              tier: Ir
            })]
          }, Qr)
        }))
      })
    }

    function Fa(rr) {
      var Sr;
      let {
        def: Qr,
        seconds: Zr
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)();
      return (0, za.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, za.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (Sr = Qr.fuels) && void 0 !== Sr ? Sr : []).map((rr => (0, za.jsx)(ea, {
            item: rr,
            amount: 1
          }, rr))), (0, za.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, za.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, za.jsx)(vW.c, {
              name: "bolt"
            }), Wr("buildAFactory2Game:recipePower", {
              power: dr(Qr.powerMade),
              seconds: Zr
            })]
          })]
        })
      })
    }

    function oa(rr) {
      let {
        def: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)();
      return (0, za.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, za.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, za.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, za.jsx)(vW.c, {
              name: "bolt"
            }), Qr("buildAFactory2Game:recipeMixer", {
              cryo: ma((0, sr.I)(Sr, Sr.cryoMade), "")
            })]
          })
        })
      })
    }

    function ba(rr) {
      let {
        def: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)();
      return (0, za.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, za.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, za.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, za.jsx)(vW.c, {
              name: "bolt"
            }), Qr("buildAFactory2Game:recipeCondenser", {
              power: ma((0, sr.I)(Sr, Sr.powerPerOp), ""),
              water: ma((0, sr.I)(Sr, Sr.fluidMade), "")
            })]
          })
        })
      })
    }

    function Ja(rr) {
      let {
        kind: Sr,
        def: Qr,
        input: Zr,
        tier: Wr,
        noSeeds: ar = !1
      } = rr;
      const jr = String(Qr.opMs / 1e3);
      return QQ(Qr) ? (0, za.jsx)(ka, {
        seconds: jr
      }) : Qr.field ? (0, za.jsx)(Aa, {
        fertilised: null !== Zr
      }) : Qr.table ? (0, za.jsx)(Va, {
        tier: Wr,
        seconds: jr
      }) : Qr.recycles ? (0, za.jsxs)(za.Fragment, {
        children: [(0, za.jsx)(ia, {
          tier: Wr,
          seconds: jr,
          noSeeds: ar
        }), (0, za.jsx)(wa, {
          tier: Wr,
          seconds: jr
        })]
      }) : SQ(Qr) ? (0, za.jsx)(ca, {
        tier: Wr,
        seconds: jr
      }) : void 0 !== Qr.fluidMade ? (0, za.jsx)(ba, {
        def: Qr
      }) : void 0 !== Qr.cryoMade ? (0, za.jsx)(oa, {
        def: Qr
      }) : void 0 !== Qr.powerMade ? (0, za.jsx)(Fa, {
        def: Qr,
        seconds: jr
      }) : (0, za.jsx)(Da, {
        kind: Sr,
        input: Zr,
        tier: Wr,
        seconds: jr
      })
    }

    function Da(rr) {
      let {
        kind: Sr,
        input: Qr,
        tier: Zr,
        seconds: Wr
      } = rr;
      const {
        t: ar
      } = (0, TW.E)(), jr = dW(), Ir = Ca(function(rr) {
        const Sr = new Map;
        for (const Wr of rr) {
          var Qr, Zr;
          const rr = [Wr.output, Wr.outputAmount, Wr.inputAmount, null === (Qr = Wr.bonus) || void 0 === Qr ? void 0 : Qr.item, null === (Zr = Wr.bonus) || void 0 === Zr ? void 0 : Zr.chance].join("|"),
            ar = Sr.get(rr);
          ar ? ar.inputs.push(Wr.input) : Sr.set(rr, {
            inputs: [Wr.input],
            inputAmount: Wr.inputAmount,
            output: Wr.output,
            outputAmount: Wr.outputAmount,
            bonus: Wr.bonus
          })
        }
        return [...Sr.values()]
      }(Ra(Sr, Zr).filter(pQ)), (rr => Pa(rr.output))).filter((rr => ga(Pa(rr.output), Zr, qa(rr.output))));
      return (0, za.jsx)(va, {
        title: ar("buildAFactory2Game:recipesEach", {
          seconds: Wr
        }),
        count: Ir.length,
        children: Ir.map((rr => {
          const Sr = null !== Qr && rr.inputs.includes(Qr),
            Wr = rr.inputs.length > 3 ? [Sr ? Qr : rr.inputs[0]] : rr.inputs,
            Ir = Pa(rr.output) > Zr ? Pa(rr.output) : null,
            fr = null === Ir && jr.has(rr.output);
          return (0, za.jsxs)("li", {
            className: eW()("Baf2Recipe", {
              InUse: Sr,
              Locked: null !== Ir,
              Far: Ya(Ir, Zr)
            }),
            children: [fr && (0, za.jsx)(Ta, {}), Wr.map(((Sr, Qr) => (0, za.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [Qr > 0 && (0, za.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, za.jsx)(ea, {
                item: Sr,
                amount: rr.inputAmount
              })]
            }, Sr))), Wr.length < rr.inputs.length && (0, za.jsx)(Ka, {
              label: ar("buildAFactory2Game:recipeMore", {
                count: String(rr.inputs.length - Wr.length)
              }),
              names: rr.inputs.filter((rr => !Wr.includes(rr))).map((rr => (0, sW.g)(ar, rr)))
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, za.jsx)(ea, {
              item: rr.output,
              amount: rr.outputAmount
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, sW.g)(ar, rr.output)
            }), rr.bonus && (0, za.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [ar("buildAFactory2Game:recipeBonus", {
                percent: na(rr.bonus.chance)
              }), (0, za.jsx)(ea, {
                item: rr.bonus.item,
                amount: 1
              })]
            }), null !== Ir && (0, za.jsx)(ya, {
              tier: Ir
            })]
          }, `${rr.output}|${rr.inputs[0]}`)
        }))
      })
    }

    function da(rr) {
      let {
        taught: Sr,
        tier: Qr
      } = rr;
      const {
        t: Zr
      } = (0, TW.E)(), Wr = dW(), ar = Ca(Object.values(JS), (rr => rr.tier)).filter((rr => ga(rr.tier, Qr)));
      return (0, za.jsx)(va, {
        title: Zr("buildAFactory2Game:benchCanMake"),
        count: ar.length,
        startOpen: !1,
        children: ar.map((rr => {
          const ar = rr.tier > Qr,
            jr = !ar && Wr.has(rr.output);
          return (0, za.jsxs)("li", {
            className: eW()("Baf2Recipe", {
              InUse: rr.output === Sr,
              Locked: ar,
              Far: Ya(ar ? rr.tier : null, Qr)
            }),
            children: [jr && (0, za.jsx)(Ta, {}), (0, za.jsx)(ea, {
              item: rr.output,
              amount: rr.outputAmount
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, sW.g)(Zr, rr.output)
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), rr.inputs.map((rr => (0, za.jsx)(ea, {
              item: rr.item,
              amount: rr.amount
            }, rr.item))), ar && (0, za.jsx)(ya, {
              tier: rr.tier
            })]
          }, rr.output)
        }))
      })
    }
    var sa, ua, rj, Sj, Qj;
    const Zj = RS.Generator,
      Wj = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      aj = 1e3 * (null !== (sa = Zj.powerMade) && void 0 !== sa ? sa : 0) / Zj.opMs,
      jj = Math.min(...(null !== (ua = Zj.fuels) && void 0 !== ua ? ua : []).map((rr => aQ[rr]))) / 1e3,
      Ij = RS["Volt Engine"],
      fj = 1e3 * (null !== (rj = Ij.powerMade) && void 0 !== rj ? rj : 0) / Ij.opMs,
      Ej = aQ[null !== (Sj = null === (Qj = Ij.fuels) || void 0 === Qj ? void 0 : Qj[0]) && void 0 !== Sj ? Sj : ""] / 1e3;

    function pj(rr) {
      let {
        item: Sr,
        label: Qr,
        value: Zr,
        note: Wr,
        dim: ar
      } = rr;
      return (0, za.jsxs)("li", {
        className: eW()("Baf2PowerRow", {
          Dim: ar
        }),
        children: [(0, za.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, za.jsx)(OW.d, {
            itemName: Sr,
            amount: 0
          })
        }), (0, za.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, za.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: Qr
          }), Wr && (0, za.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Wr
          })]
        }), (0, za.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Zr
        })]
      })
    }

    function xj(rr, Sr, Qr, Zr) {
      var Wr;
      const ar = void 0 === Zr ? RS[rr] : function(rr, Sr) {
          if (null === Sr) return rr;
          let Qr = or.get(Sr);
          return Qr || (Qr = {
            ...rr,
            powerPerOp: Fr(rr, Sr),
            farmMob: Sr
          }, or.set(Sr, Qr)), Qr
        }(RS[rr], Zr),
        jr = Sr && ar.couplable ? iS(ar, Qr) : ar;
      return 1e3 * (null !== (Wr = jr.powerPerOp) && void 0 !== Wr ? Wr : 0) / jr.opMs
    }

    function mj(rr) {
      var Sr, Qr, Zr, Wr, ar, jr, Ir, fr;
      let {
        message: Er
      } = rr;
      const {
        t: pr
      } = (0, TW.E)(), xr = (rr, Sr) => pr("buildAFactory2Game:powerPerSecond", {
        rate: ma(rr, Sr)
      }), [mr, Nr] = Er.baf2PowerGenerators, Ur = Er.baf2PowerGeneratorFuel, tr = Er.baf2PowerSunPanels, hr = null !== (Sr = Er.baf2PowerSunShare) && void 0 !== Sr ? Sr : 1, zr = Er.baf2PowerVaults, Yr = Er.baf2PowerUsers, [nr, er] = null !== (Qr = Er.baf2PowerEngines) && void 0 !== Qr ? Qr : [0, 0], Kr = null !== (Zr = Er.baf2PowerEngineCells) && void 0 !== Zr ? Zr : 0, yr = null !== (Wr = Er.baf2PowerPads) && void 0 !== Wr ? Wr : 0, Br = null !== (ar = Er.baf2PowerCharge) && void 0 !== ar ? ar : 0, [Tr, vr] = null !== (jr = Er.baf2PowerReactors) && void 0 !== jr ? jr : [0, 0], [Or, Lr] = null !== (Ir = Er.baf2PowerBatteries) && void 0 !== Ir ? Ir : [0, 0];
      let lr = pr("buildAFactory2Game:powerEngineCells", {
        amount: String(Kr)
      });
      Kr > 0 && er > 0 && (lr = pr("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(Kr),
        time: ta(pr, Kr * Ej / er)
      }));
      let Xr = pr("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(Ur)
      });
      Ur > 0 && Nr > 0 && (Xr = pr("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(Ur),
        time: ta(pr, Ur * jj / Nr)
      }));
      const Pr = mr + nr + tr + Tr;
      return (0, za.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, za.jsxs)("section", {
          children: [(0, za.jsxs)("h3", {
            children: [pr("buildAFactory2Game:powerMaking"), (0, za.jsx)("span", {
              children: xr(Er.baf2PowerMadePerS, "+")
            })]
          }), (0, za.jsxs)("ul", {
            children: [0 === Pr && (0, za.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: pr("buildAFactory2Game:powerNoMakers")
            }), mr > 0 && (0, za.jsx)(pj, {
              item: "Generator",
              label: `${(0,sW.g)(pr,"Generator")} \xd7${mr}`,
              note: `${pr("buildAFactory2Game:powerRunning",{amount:String(Nr)})} \xb7 ${Xr}`,
              value: xr(Nr * aj, "+"),
              dim: 0 === Nr
            }), nr > 0 && (0, za.jsx)(pj, {
              item: "Volt Engine",
              label: `${(0,sW.g)(pr,"Volt Engine")} \xd7${nr}`,
              note: `${pr("buildAFactory2Game:powerRunning",{amount:String(er)})} \xb7 ${lr}`,
              value: xr(er * fj, "+"),
              dim: 0 === er
            }), tr > 0 && (0, za.jsx)(pj, {
              item: "Solar Panel",
              label: `${(0,sW.g)(pr,"Solar Panel")} \xd7${tr}`,
              note: pr(hr < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: xr(4 * tr * hr, "+")
            }), Tr > 0 && (0, za.jsx)(pj, {
              item: "Reactor Frame",
              label: `${pr("buildAFactory2Game:powerReactors")} \xd7${Tr}`,
              note: pr("buildAFactory2Game:powerRunning", {
                amount: String(vr)
              }),
              value: xr(null !== (fr = Er.baf2PowerReactorPerS) && void 0 !== fr ? fr : 0, "+"),
              dim: 0 === vr
            })]
          })]
        }), (0, za.jsxs)("section", {
          children: [(0, za.jsxs)("h3", {
            children: [pr("buildAFactory2Game:powerStorage"), (0, za.jsx)("span", {
              children: dr(Er.baf2PowerCap)
            })]
          }), (zr > 0 || Or > 0) && (0, za.jsxs)("ul", {
            children: [zr > 0 && (0, za.jsx)(pj, {
              item: "Charge Vault",
              label: `${(0,sW.g)(pr,"Charge Vault")} \xd7${zr}`,
              value: `+${dr(8e3*zr)}`
            }), Or > 0 && (0, za.jsx)(pj, {
              item: "Battery Cell",
              label: `${pr("buildAFactory2Game:powerBatteries")} \xd7${Or}`,
              value: `+${dr(Lr)}`
            })]
          })]
        }), (0, za.jsxs)("section", {
          children: [(0, za.jsxs)("h3", {
            children: [pr("buildAFactory2Game:powerUsing"), (0, za.jsx)("span", {
              children: xr(Er.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, za.jsxs)("ul", {
            children: [0 === Yr.length && 0 === yr && 0 === Br && (0, za.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: pr("buildAFactory2Game:powerNoUsers")
            }), Yr.map((rr => {
              let [Sr, Qr, Zr, Wr, ar = 1, jr] = rr, Ir = Qr ? pr(Wj[ar - 1], {
                name: (0, sW.g)(pr, Sr)
              }) : (0, sW.g)(pr, Sr);
              return void 0 !== jr && (Ir = pr("buildAFactory2Game:powerFarmName", {
                name: Ir,
                mob: pr(ir(jr))
              })), (0, za.jsx)(pj, {
                item: Sr,
                label: `${Ir} \xd7${Zr}`,
                note: pr("buildAFactory2Game:powerRunning", {
                  amount: String(Wr)
                }),
                value: Wr > 0 ? xr(Wr * xj(Sr, Qr, ar, jr), "\u2212") : pr("buildAFactory2Game:powerIdle"),
                dim: 0 === Wr
              }, `${Sr}|${Qr}|${ar}|${jr}`)
            })), yr > 0 && (0, za.jsx)(pj, {
              item: "Charging Pad",
              label: `${(0,sW.g)(pr,"Charging Pad")} \xd7${yr}`,
              value: pr("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), Br > 0 && (0, za.jsx)(pj, {
              item: "Homestead Core",
              label: pr("buildAFactory2Game:powerCharge"),
              value: xr(Br, "\u2212")
            }), Er.baf2PowerStarved > 0 && (0, za.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, za.jsx)(vW.c, {
                name: "triangle-exclamation"
              }), pr("buildAFactory2Game:powerStarved", {
                amount: String(Er.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Nj = Qr(5297),
      Uj = Qr(1576);
    class tj {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(rr) {
        this.message = rr;
        for (const Sr of this.listeners) Sr()
      }
      get() {
        return this.message
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
    }
    class hj extends tj {}

    function zj(rr, Sr) {
      const Qr = () => {
          const Qr = rr.get();
          if (!Qr || !Sr) return Qr;
          const [Zr, Wr, ar] = Qr.baf2PowerAt;
          return Zr === Sr[0] && Wr === Sr[1] && ar === Sr[2] ? Qr : null
        },
        [Wr, ar] = (0, Zr.useState)(Qr);
      return (0, Zr.useEffect)((() => (ar(Qr()), rr.subscribe((() => {
        ar(Qr())
      })))), [rr, ...null !== Sr && void 0 !== Sr ? Sr : []]), Wr
    }

    function Yj(rr) {
      return {
        stored: rr.baf2PowerStored,
        cap: rr.baf2PowerCap,
        madePerS: rr.baf2PowerMadePerS,
        usedPerS: rr.baf2PowerUsedPerS
      }
    }

    function nj(rr) {
      let {
        stored: Sr,
        cap: Qr
      } = rr;
      return (0, za.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, za.jsx)("div", {
          style: {
            width: `${Math.min(100,100*Sr/Math.max(1,Qr))}%`
          }
        })
      })
    }

    function ej(rr) {
      let {
        figures: Sr,
        labelled: Qr = !1
      } = rr;
      const {
        t: Zr
      } = (0, TW.E)(), Wr = Sr.madePerS - Sr.usedPerS, {
        text: ar,
        draining: jr
      } = function(rr, Sr) {
        let {
          stored: Qr,
          cap: Zr,
          madePerS: Wr,
          usedPerS: ar
        } = Sr;
        const jr = Wr - ar;
        return Qr >= Zr ? {
          text: rr("buildAFactory2Game:powerFull"),
          draining: !1
        } : jr > .05 ? {
          text: rr("buildAFactory2Game:powerFullIn", {
            time: ta(rr, (Zr - Qr) / jr)
          }),
          draining: !1
        } : jr < -.05 ? {
          text: rr("buildAFactory2Game:powerEmptyIn", {
            time: ta(rr, Qr / -jr)
          }),
          draining: !0
        } : {
          text: rr("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Zr, Sr);
      return (0, za.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, za.jsx)(nj, {
          stored: Sr.stored,
          cap: Sr.cap
        }), (0, za.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, za.jsx)("span", {
            children: Zr(Qr ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: dr(Sr.stored),
              cap: dr(Sr.cap)
            })
          }), (0, za.jsxs)("span", {
            className: eW()("Baf2PowerNet", {
              Draining: jr
            }),
            children: [Zr("buildAFactory2Game:powerPerSecond", {
              rate: ma(Math.abs(Wr), Wr < 0 ? "\u2212" : "+")
            }), " \xb7 ", ar]
          })]
        })]
      })
    }

    function Kj(rr) {
      let {
        stored: Sr,
        cap: Qr,
        rates: Zr
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)();
      return Zr ? (0, za.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, za.jsx)(ej, {
          figures: {
            stored: Sr,
            cap: Qr,
            madePerS: Zr[0],
            usedPerS: Zr[1]
          },
          labelled: !0
        })
      }) : (0, za.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, za.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, za.jsx)(nj, {
            stored: Sr,
            cap: Qr
          }), (0, za.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, za.jsx)("span", {
              children: Wr("buildAFactory2Game:powerStoredLabelled", {
                stored: dr(Sr),
                cap: dr(Qr)
              })
            })
          })]
        })
      })
    }

    function yj(rr) {
      let {
        store: Sr,
        close: Qr
      } = rr;
      const {
        t: Zr
      } = (0, TW.E)(), Wr = zj(Sr);
      return (0, za.jsx)(Nj.b, {
        close: Qr,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, za.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, za.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, za.jsxs)("div", {
              children: [(0, za.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Zr("buildAFactory2Game:powerTitle")
              }), (0, za.jsx)("p", {
                children: Zr("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, za.jsx)(Uj.l, {
              onClick: Qr
            })]
          }), Wr && (0, za.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, za.jsx)(ej, {
              figures: Yj(Wr)
            }), (0, za.jsx)(mj, {
              message: Wr
            })]
          })]
        })
      })
    }

    function Bj(rr) {
      var Sr;
      let {
        kind: Qr,
        def: Wr,
        cW: ar,
        power: jr,
        stored: Ir,
        cap: fr
      } = rr;
      const {
        t: Er
      } = (0, TW.E)(), pr = zj(jr, ar), [xr, mr] = (0, Zr.useState)(!1);
      return (0, za.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, za.jsx)(Ja, {
          kind: Qr,
          def: Wr,
          input: null,
          tier: null !== (Sr = null === pr || void 0 === pr ? void 0 : pr.baf2PowerTier) && void 0 !== Sr ? Sr : 1
        }), (0, za.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Er("buildAFactory2Game:powerTitle")
        }), pr && (0, za.jsx)(ej, {
          figures: Yj(pr)
        }), !pr && (0, za.jsx)(Kj, {
          stored: Ir,
          cap: fr,
          rates: null
        }), pr && (0, za.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            mr(!xr)
          },
          "aria-expanded": xr,
          children: Er(xr ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), pr && xr && (0, za.jsx)(mj, {
          message: pr
        })]
      })
    }
    const Tj = 2500,
      vj = 17500,
      Oj = `${Kr} `;
    const Lj = ["plan", "throttle"];

    function lj(rr) {
      if (rr.startsWith(`${OS} `)) return rr.slice(0, rr.lastIndexOf(" "));
      const Sr = rr.split(" ");
      return Sr[0] === pS && Lj.includes(Sr[4]) ? Sr.slice(0, 5).join(" ") : null
    }
    class Xj {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = rr, this.now = Sr, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.pjr = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = Sr()
      }
      enqueue(rr) {
        this.queue(rr, this.nextTicket());
        const Sr = this.pjr + this.pending.length;
        return this.flush(), Sr
      }
      track(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Qr = this.nextTicket();
        if (!Sr.urgent) return this.queue(rr, Qr), this.flush(), Qr;
        const {
          supersedes: Zr
        } = Sr;
        for (let ar = this.pending.length - 1; ar >= this.urgent; ar--) {
          const Sr = this.pending[ar];
          (Sr.command === rr || null !== Zr && void 0 !== Zr && Zr(Sr.command)) && (this.pending.splice(ar, 1), this.markLeft(Sr.tickets))
        }
        const Wr = this.pending.findIndex((Sr => {
          let {
            command: Qr
          } = Sr;
          return Qr === rr
        }));
        return -1 !== Wr ? this.pending[Wr].tickets.push(Qr) : (this.pending.splice(this.urgent, 0, {
          command: rr,
          tickets: [Qr]
        }), this.urgent += 1), this.flush(), Qr
      }
      leftAt(rr) {
        const Sr = this.leftTimes.get(rr);
        return void 0 !== Sr ? Sr : this.pending.some((Sr => {
          let {
            tickets: Qr
          } = Sr;
          return Qr.includes(rr)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let rr = !0;
        return () => {
          rr && (rr = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(rr) {
        var Sr;
        return (null === (Sr = this.pending.at(-1)) || void 0 === Sr ? void 0 : Sr.command) === rr
      }
      sent() {
        return this.pjr
      }
      clear() {
        for (const {
            tickets: rr
          }
          of this.pending) this.markLeft(rr);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(rr) {
        const Sr = this.now();
        for (const Qr of rr) this.leftTimes.set(Qr, Sr);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(rr, Sr) {
        const Qr = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === Qr || void 0 === Qr ? void 0 : Qr.command) === rr) return void(! function(rr) {
          return rr === yr || rr.startsWith(`${er} `) || rr.startsWith(`${kr} `)
        }(rr) ? Qr.tickets.push(Sr) : (this.pending.pop(), this.markLeft([...Qr.tickets, Sr])));
        const Zr = void 0 === Qr ? null : ES(Qr.command, rr);
        if (null !== Zr && void 0 !== Qr) return Qr.command = Zr, void Qr.tickets.push(Sr);
        const Wr = lj(rr);
        if (null !== Wr && void 0 !== Qr && lj(Qr.command) === Wr) return Qr.command = rr, void Qr.tickets.push(Sr);
        if (null !== Qr && void 0 !== Qr && Qr.command.startsWith(Oj) && rr.startsWith(Oj)) {
          const Zr = rr.slice(Oj.length);
          if (Qr.command.slice(Oj.length).split(",").includes(Zr)) return void Qr.tickets.push(Sr);
          const Wr = `${Qr.command},${Zr}`;
          if (Wr.length <= 119) return Qr.command = Wr, void Qr.tickets.push(Sr)
        }
        this.pending.push({
          command: rr,
          tickets: [Sr]
        })
      }
      flush() {
        const rr = this.now();
        for (this.tokens = Math.min(5, this.tokens + (rr - this.refilledAt) / Tj), this.refilledAt = rr; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.pjr += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: rr,
            tickets: Sr
          } = this.pending.shift();
          this.markLeft(Sr), this.send(rr)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * Tj)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Pj {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new Xj(rr, Sr)
      }
      send(rr) {
        return this.queue.enqueue(rr)
      }
      sent() {
        return this.queue.sent()
      }
      track(rr, Sr) {
        return this.queue.track(rr, Sr)
      }
      leftAt(rr) {
        return this.queue.leftAt(rr)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(rr) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = Sr, this.send(rr), this.islandEdits.count
      }
      syncIslandEdits(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: Qr
        } = this, Zr = Sr - Qr.lastAtMs < vj;
        Qr.count = Zr ? Math.max(Qr.count, rr) : rr
      }
      clear() {
        this.queue.clear()
      }
    }
    const Hj = (0, Zr.createContext)(null);

    function qj() {
      const rr = (0, Zr.useContext)(Hj);
      if (!rr) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return rr
    }

    function Rj(rr, Sr) {
      return null !== Sr && void 0 !== Sr ? Sr : 1 === rr
    }

    function gj(rr, Sr) {
      return rr.every((rr => {
        var Qr;
        let [Zr, , Wr] = rr;
        return !Rj(Wr, null === (Qr = Sr.get(Zr)) || void 0 === Qr ? void 0 : Qr.sp)
      }))
    }

    function Cj(rr, Sr, Qr) {
      if (0 === rr.size) return rr;
      const Zr = new Map(rr);
      for (const [Wr, ar] of rr) {
        const rr = Sr.find((rr => {
          let [Sr] = rr;
          return Sr === Wr
        }));
        (!rr || ar.sp === (1 === rr[2]) || ar.atMs < Qr) && Zr.delete(Wr)
      }
      return Zr
    }

    function Mj(rr) {
      var Sr;
      let {
        cW: Qr,
        input: Wr,
        drops: ar,
        seconds: jr
      } = rr;
      const {
        t: Ir
      } = (0, TW.E)(), fr = qj(), [Er, pr] = (0, Zr.useState)(new Map);
      (0, Zr.useEffect)((() => {
        ar && pr((rr => Cj(rr, ar, Date.now() - vj)))
      }), [ar]), (0, Zr.useEffect)((() => {
        const rr = function(rr, Sr) {
          let Qr = null;
          for (const {
              atMs: Zr
            }
            of rr.values()) Qr = null === Qr ? Zr : Math.min(Qr, Zr);
          return null === Qr ? null : Qr + Sr
        }(Er, vj);
        if (null === rr || !ar) return;
        const Sr = setTimeout((() => {
          pr((rr => Cj(rr, ar, Date.now() - vj)))
        }), Math.max(0, rr - Date.now()) + 1);
        return () => {
          clearTimeout(Sr)
        }
      }), [Er, ar]);
      const xr = wr(Wr),
        mr = null !== xr && null !== ar && gj(ar, Er),
        Nr = function(rr, Sr, Qr) {
          return null === rr || null === Sr || gj(Sr, Qr) ? 0 : Gr[Cr[rr]]
        }(xr, ar, Er);
      return (0, za.jsxs)(va, {
        title: Ir("buildAFactory2Game:farmDropsTitle", {
          seconds: jr
        }),
        count: null !== (Sr = null === ar || void 0 === ar ? void 0 : ar.length) && void 0 !== Sr ? Sr : 0,
        children: [Nr > 0 && (0, za.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: Ir("buildAFactory2Game:farmDropsPower", {
            power: String(Nr)
          })
        }), (null === xr || !ar) && (0, za.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: Ir("buildAFactory2Game:farmDropsEmpty")
        }), mr && (0, za.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: Ir("buildAFactory2Game:farmDropsAllVoided")
        }), null !== xr && (null === ar || void 0 === ar ? void 0 : ar.map((rr => {
          var Sr;
          let [Zr, Wr, ar] = rr;
          const jr = Wr < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            xr = Rj(ar, null === (Sr = Er.get(Zr)) || void 0 === Sr ? void 0 : Sr.sp);
          return (0, za.jsxs)("li", {
            className: eW()("Baf2Recipe Baf2FarmDrop", {
              Voided: !xr
            }),
            children: [(0, za.jsx)(ea, {
              item: Zr,
              amount: 1
            }), (0, za.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, sW.g)(Ir, Zr)
            }), (0, za.jsx)("span", {
              className: "Baf2FarmRate",
              children: Ir(jr, {
                amount: String(Wr)
              })
            }), (0, za.jsx)("button", {
              type: "button",
              className: eW()("Baf2FarmToggle SmallTextBold", {
                Kept: xr
              }),
              "aria-pressed": xr,
              onClick: () => {
                pr(new Map(Er).set(Zr, {
                  sp: !xr,
                  atMs: Date.now()
                })), fr.send(function(rr, Sr, Qr, Zr) {
                  return `${kr} ${rr} ${Sr} ${Qr} ${Zr}`
                }(Qr[0], Qr[1], Qr[2], Zr))
              },
              children: Ir(xr ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Zr)
        })))]
      })
    }
    var Gj;
    const kj = String(null !== (Gj = RS.Synthesizer.waterPerOp) && void 0 !== Gj ? Gj : 0);

    function Aj(rr) {
      let {
        cW: Sr,
        taught: Qr
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)(), ar = qj(), [jr, Ir] = (0, Zr.useState)(null);
      (0, Zr.useEffect)((() => {
        null !== jr && Qr === jr && Ir(null)
      }), [jr, Qr]);
      const fr = null !== jr && void 0 !== jr ? jr : Qr;
      let Er = Wr("buildAFactory2Game:synthPick");
      return null !== fr && (Er = Wr("buildAFactory2Game:synthGrows", {
        name: (0, sW.g)(Wr, fr),
        input: (0, sW.g)(Wr, BS),
        water: kj
      })), (0, za.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, za.jsx)("div", {
          className: eW()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === fr
          }),
          children: Er
        }), (0, za.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: TS.map(((rr, Qr) => {
            const Zr = (0, sW.g)(Wr, rr),
              jr = rr === fr;
            return (0, za.jsx)("li", {
              children: (0, za.jsx)("button", {
                type: "button",
                className: eW()("Baf2SynthTile", {
                  Selected: jr
                }),
                title: Zr,
                "aria-label": Zr,
                "aria-pressed": jr,
                onClick: () => {
                  jr || (Ir(rr), ar.send(`${OS} ${Sr[0]} ${Sr[1]} ${Sr[2]} ${Qr}`))
                },
                children: (0, za.jsx)(OW.d, {
                  itemName: rr,
                  amount: 0
                })
              })
            }, rr)
          }))
        })]
      })
    }
    const Vj = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function ij(rr) {
      let {
        kind: Sr,
        tier: Qr,
        coupled: Zr,
        level: Wr,
        slot: ar
      } = rr;
      const {
        t: jr
      } = (0, TW.E)(), fr = Dr(CS);
      if (!Zr && null !== Qr && Qr < fr) return (0, za.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, za.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, za.jsx)(vW.c, {
            name: "lock"
          })
        }), (0, za.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: jr("buildAFactory2Game:upgradeLocked")
        }), (0, za.jsx)("span", {
          className: "Baf2TierTag",
          children: jr("buildAFactory2Game:tierTag", {
            tier: String(fr)
          })
        })]
      });
      const Er = function(rr, Sr) {
          if (Ir() && "Crusher" !== rr && null !== Sr) {
            if (wj(GS, Sr)) return {
              item: GS,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (wj(MS, Sr)) return {
              item: MS,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: CS,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(Sr, Qr),
        pr = jr(Zr ? Vj[Wr - 1] : Er.emptyKey),
        xr = null !== Qr ? function(rr, Sr, Qr, Zr) {
          if (!Ir() || !Qr || "Crusher" === rr || Sr < 10) return null;
          const Wr = Dr(GS);
          if (Zr < 3 && Wr > 1 && (2 === Zr || Sr >= Wr)) return {
            tier: Wr,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const ar = Dr(MS);
          if (1 === Zr && ar > 1) return {
            tier: ar,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(Sr, Qr, Zr, Wr) : null;
      return (0, za.jsxs)("div", {
        className: eW()("Baf2UpgradeSocket", {
          Fitted: Zr
        }),
        children: [(0, za.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Zr && ar, !Zr && (0, za.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, za.jsx)(OW.d, {
              itemName: Er.item,
              amount: 0
            })
          })]
        }), (0, za.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, za.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: jr("buildAFactory2Game:upgradeTitle")
          }), (0, za.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: pr
          }), Zr && Wr >= 2 && "Crusher" === Sr && (0, za.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: jr("buildAFactory2Game:couplerCrusherHint")
          }), xr && null !== Qr && Qr < xr.tier && (0, za.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, za.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, za.jsx)(vW.c, {
                name: "lock"
              })
            }), jr(xr.lockedKey), (0, za.jsx)("span", {
              className: "Baf2TierTag",
              children: jr("buildAFactory2Game:tierTag", {
                tier: String(xr.tier)
              })
            })]
          }), xr && null !== Qr && Qr >= xr.tier && (0, za.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: jr(xr.nextKey)
          })]
        })]
      })
    }

    function wj(rr, Sr) {
      const Qr = Dr(rr);
      return Qr > 1 && Sr >= Qr
    }
    var cj = Qr(38509);
    const Fj = (0, sr.I)(RS.Condenser, RS.Condenser.fluidMade),
      oj = .05;
    class bj extends tj {}

    function Jj(rr) {
      return ma(rr, "")
    }

    function Dj(rr, Sr, Qr) {
      return rr(Sr ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: Qr
      })
    }

    function dj(rr, Sr, Qr, Zr) {
      return Qr <= oj && Zr <= oj ? null : Zr <= oj || Qr <= oj ? Dj(rr, Sr, Zr <= oj ? ma(Qr, "+") : ma(Zr, "\u2212")) : rr(Sr ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: Jj(Qr),
        used: Jj(Zr)
      })
    }

    function sj(rr, Sr) {
      return Math.min(100, 100 * rr / Math.max(1, Sr))
    }

    function uj(rr) {
      let {
        stored: Sr,
        cap: Qr,
        netPerS: Zr,
        rates: Wr,
        cryo: ar
      } = rr;
      const {
        t: jr
      } = (0, TW.E)(), Ir = function(rr, Sr, Qr, Zr) {
        return Qr <= 0 ? rr("buildAFactory2Game:waterNoStorage") : Sr >= Qr ? rr("buildAFactory2Game:powerFull") : Zr > oj ? rr("buildAFactory2Game:powerFullIn", {
          time: ta(rr, (Qr - Sr) / Zr)
        }) : Zr < -.05 ? Sr <= 0 ? rr("buildAFactory2Game:waterEmpty") : rr("buildAFactory2Game:powerEmptyIn", {
          time: ta(rr, Sr / -Zr)
        }) : rr("buildAFactory2Game:powerSteady")
      }(jr, Sr, Qr, Zr), fr = Qr > 0 && Sr < Qr && Math.abs(Zr) <= oj, Er = jr(ar ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), pr = null !== Wr ? `${Wr} \xb7 ${Ir}` : fr ? Er : `${Er} \xb7 ${Ir}`;
      return (0, za.jsxs)(za.Fragment, {
        children: [(0, za.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, za.jsx)("div", {
            style: {
              width: `${sj(Sr,Qr)}%`
            }
          })
        }), (0, za.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, za.jsx)("span", {
            children: Qr > 0 && jr("buildAFactory2Game:powerStored", {
              stored: (0, sr.S)(Sr),
              cap: (0, sr.S)(Qr)
            })
          }), (0, za.jsx)("span", {
            className: eW()("Baf2WaterNet", {
              Draining: Zr < -.05
            }),
            children: pr
          })]
        })]
      })
    }

    function rI(rr) {
      let {
        water: Sr,
        at: Qr,
        side: Zr = null
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)(), ar = qj(), [jr, Ir, fr] = Sr;
      return (0, za.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, za.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, za.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Wr(null === Zr ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Zr}`)
          }), (0, za.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              ar.send(`${sr.D} ${Qr[0]} ${Qr[1]} ${Qr[2]}${"cryoOut"===Zr?" cryo":""}`)
            },
            children: Wr("buildAFactory2Game:waterDetails")
          })]
        }), (0, za.jsx)(uj, {
          stored: jr,
          cap: Ir,
          netPerS: fr,
          rates: Dj(Wr, "cryoOut" === Zr, ma(Math.abs(fr), fr < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Zr
        })]
      })
    }

    function SI(rr, Sr) {
      var Qr, Zr, Wr;
      const ar = !0 === Sr.baf2WaterCryo,
        jr = null !== (Qr = null === (Zr = Sr.baf2WaterMakers.find((rr => rr[0] === (ar ? sr.b : "Condenser")))) || void 0 === Zr ? void 0 : Zr[1]) && void 0 !== Qr ? Qr : 0,
        Ir = [],
        fr = (Sr, Qr, Zr) => {
          Sr > 0 && Ir.push(rr(1 === Sr ? Qr : Zr, {
            count: String(Sr)
          }))
        };
      return ar ? fr(jr, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : fr(jr, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), fr(null !== (Wr = Sr.baf2WaterPipes) && void 0 !== Wr ? Wr : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), fr(Sr.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), Ir.join(" \xb7 ")
    }

    function QI(rr, Sr) {
      if (!0 === Sr.baf2WaterCryo) return function(rr, Sr) {
        const Qr = RS[sr.b];
        switch (Sr.baf2WaterThis) {
          case "pipe":
            return {
              text: rr("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: rr("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: rr("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: rr("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: rr("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: rr("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: rr("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var Zr;
            const [Wr, ar] = null !== (Zr = Sr.baf2WaterThisRates) && void 0 !== Zr ? Zr : [(0, sr.I)(Qr, Qr.cryoMade), (0, sr.I)(Qr, Qr.powerPerOp)];
            return !0 === Sr.baf2WaterDriven ? {
              text: rr("buildAFactory2Game:cryoThisMixerDriven", {
                rate: Jj(Wr)
              }),
              bad: !1
            } : {
              text: rr("buildAFactory2Game:cryoThisMixer", {
                rate: Jj(Wr),
                power: Jj(ar)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: rr("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(rr, Sr);
      const Qr = !0 === Sr.baf2WaterDriven,
        Zr = RS.Condenser;
      switch (Sr.baf2WaterThis) {
        case "pipe":
          return {
            text: rr("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: rr("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: rr("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: rr("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: rr("buildAFactory2Game:waterThisTank", {
              tank: (0, sr.S)(sr.t),
              cap: (0, sr.S)(Sr.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Wr;
          const [ar, jr] = null !== (Wr = Sr.baf2WaterThisRates) && void 0 !== Wr ? Wr : [Fj, (0, sr.I)(Zr, Zr.powerPerOp)];
          return Qr ? {
            text: rr("buildAFactory2Game:waterThisCondenserDriven", {
              rate: Jj(ar)
            }),
            bad: !1
          } : {
            text: rr("buildAFactory2Game:waterThisCondenser", {
              rate: Jj(ar),
              power: Jj(jr)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: rr("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function ZI(rr, Sr) {
      const Qr = Sr.baf2WaterMakers.some((rr => !0 === rr[5]));
      if (!0 === Sr.baf2WaterCryo) {
        const Zr = Sr.baf2WaterUsedPerS - Sr.baf2WaterMadePerS,
          Wr = Qr || Zr <= oj ? 0 : (0, sr.G)(Zr);
        return 0 === Wr ? null : Wr > 1 ? rr("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Wr)
        }) : rr("buildAFactory2Game:cryoNextOne")
      }
      const Zr = Qr ? null : function(rr, Sr) {
        const Qr = Sr - rr;
        return Qr <= oj ? null : Math.ceil(Qr / Fj)
      }(Sr.baf2WaterMadePerS, Sr.baf2WaterUsedPerS);
      return null === Zr ? null : Zr > 1 ? rr("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Zr)
      }) : rr("buildAFactory2Game:waterNextOne")
    }

    function WI(rr) {
      let {
        item: Sr,
        label: Qr,
        note: Zr,
        value: Wr,
        dim: ar,
        bad: jr
      } = rr;
      return (0, za.jsxs)("li", {
        className: eW()("Baf2WaterRow", {
          Dim: ar,
          Bad: jr
        }),
        children: [(0, za.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, za.jsx)(OW.d, {
            itemName: Sr,
            amount: 0
          })
        }), (0, za.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, za.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: Qr
          }), Zr && (0, za.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Zr
          })]
        }), (0, za.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Wr
        })]
      })
    }

    function aI(rr) {
      return cj.n[rr] ? rr : "Reactor Port"
    }

    function jI(rr) {
      let {
        message: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)(), Zr = !0 === Sr.baf2WaterCryo, Wr = (rr, Sr) => Dj(Qr, Zr, ma(rr, Sr));
      return (0, za.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, za.jsxs)("section", {
          children: [(0, za.jsxs)("h3", {
            children: [Qr("buildAFactory2Game:waterMakes"), (0, za.jsx)("span", {
              children: Wr(Sr.baf2WaterMadePerS, "+")
            })]
          }), (0, za.jsxs)("ul", {
            children: [0 === Sr.baf2WaterMakers.length && (0, za.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Qr(Zr ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), Sr.baf2WaterMakers.map((rr => {
              let [Sr, Zr, ar, jr, Ir, fr] = rr;
              const Er = Qr("buildAFactory2Game:powerRunning", {
                amount: String(ar)
              });
              let pr = Ir > 0 ? Qr("buildAFactory2Game:waterMakerPower", {
                running: Er,
                power: Jj(Ir)
              }) : Er;
              return fr && (pr = Qr(0 === ar && jr <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, za.jsx)(WI, {
                item: Sr,
                label: `${(0,sW.g)(Qr,Sr)} \xd7${Zr}`,
                note: pr,
                value: ar > 0 || fr && jr > 0 ? Wr(jr, "+") : Qr("buildAFactory2Game:powerIdle"),
                dim: 0 === ar && !fr,
                bad: fr
              }, Sr)
            }))]
          })]
        }), (0, za.jsxs)("section", {
          children: [(0, za.jsxs)("h3", {
            children: [Qr("buildAFactory2Game:waterUses"), (0, za.jsx)("span", {
              children: Wr(Sr.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, za.jsxs)("ul", {
            children: [0 === Sr.baf2WaterUsers.length && (0, za.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Qr(Zr ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), Sr.baf2WaterUsers.map((rr => {
              let [Sr, Zr, ar, jr] = rr;
              const Ir = cj.n[Sr] ? (0, sW.g)(Qr, Sr) : Sr;
              return (0, za.jsx)(WI, {
                item: aI(Sr),
                label: Zr > 1 ? `${Ir} \xd7${Zr}` : Ir,
                note: jr ? Qr("buildAFactory2Game:waterPortFirst") : void 0,
                value: ar > 0 ? Wr(ar, "\u2212") : Qr("buildAFactory2Game:powerIdle"),
                dim: 0 === ar
              }, Sr)
            }))]
          })]
        })]
      })
    }

    function II(rr) {
      var Sr, Qr, Wr, ar, jr;
      let {
        store: Ir,
        close: fr
      } = rr;
      const {
        t: Er
      } = (0, TW.E)(), pr = function(rr) {
        const [Sr, Qr] = (0, Zr.useState)((() => rr.get()));
        return (0, Zr.useEffect)((() => (Qr(rr.get()), rr.subscribe((() => {
          Qr(rr.get())
        })))), [rr]), Sr
      }(Ir), xr = null !== (Sr = null === pr || void 0 === pr ? void 0 : pr.baf2WaterStored) && void 0 !== Sr ? Sr : 0, mr = null !== (Qr = null === pr || void 0 === pr ? void 0 : pr.baf2WaterCap) && void 0 !== Qr ? Qr : 0, Nr = null !== (Wr = null === pr || void 0 === pr ? void 0 : pr.baf2WaterMadePerS) && void 0 !== Wr ? Wr : 0, Ur = null !== (ar = null === pr || void 0 === pr ? void 0 : pr.baf2WaterUsedPerS) && void 0 !== ar ? ar : 0, tr = null !== (jr = null === pr || void 0 === pr ? void 0 : pr.baf2WaterNetPerS) && void 0 !== jr ? jr : Nr - Ur, hr = pr && QI(Er, pr), zr = pr && ZI(Er, pr), Yr = !0 === (null === pr || void 0 === pr ? void 0 : pr.baf2WaterCryo);
      return (0, za.jsx)(Nj.b, {
        close: fr,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, za.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, za.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, za.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== pr && mr <= 0 ? (0, za.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, za.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, za.jsx)(OW.d, {
                  itemName: Yr ? UQ.g : sr.i,
                  amount: 0
                })
              }), (0, za.jsxs)("div", {
                children: [(0, za.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Er(Yr ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), pr && (0, za.jsx)("p", {
                  children: SI(Er, pr)
                })]
              })]
            }), (0, za.jsx)(Uj.l, {
              onClick: fr
            })]
          }), pr && hr && (0, za.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, za.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, za.jsx)(uj, {
                stored: xr,
                cap: mr,
                netPerS: tr,
                cryo: Yr,
                rates: dj(Er, Yr, Nr, Ur)
              })
            }), (0, za.jsx)("div", {
              className: eW()("Baf2WaterThis", {
                Bad: hr.bad
              }),
              children: hr.text
            }), pr.baf2WaterDriven && (0, za.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, za.jsx)(vW.c, {
                name: "bolt"
              }), Er(Yr ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), zr && (0, za.jsx)("p", {
              className: "Baf2WaterNext",
              children: zr
            }), (0, za.jsx)(jI, {
              message: pr
            })]
          })]
        })
      })
    }
    class fI {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(rr, Sr) {
        const Qr = this.get(rr);
        Qr && null === Sr.opLeftMs && null === Sr.fuelLeftMs && Sr.status === Qr.status ? Sr = {
          ...Sr,
          opLeftMs: Qr.opLeftMs,
          fuelLeftMs: Qr.fuelLeftMs,
          burning: Qr.burning
        } : this.updates++, this.pos = rr, this.view = Sr;
        for (const Zr of this.listeners) Zr()
      }
      get(rr) {
        return null !== this.pos && this.pos[0] === rr[0] && this.pos[1] === rr[1] && this.pos[2] === rr[2] ? this.view : null
      }
      forget(rr) {
        null !== this.get(rr) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
    }

    function EI(rr, Sr, Qr, Zr) {
      return "noFuel" === Sr && Zr && !WQ(RS[rr]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === Sr && !0 === (null === Qr || void 0 === Qr ? void 0 : Qr.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === Sr && !0 === (null === Qr || void 0 === Qr ? void 0 : Qr.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === Sr && !0 === (null === Qr || void 0 === Qr ? void 0 : Qr.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === Sr && !0 === (null === Qr || void 0 === Qr ? void 0 : Qr.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : pI(Sr, Qr) ? "buildAFactory2Game:machineStatus_noInputShort" : function(rr, Sr) {
        const Qr = RS[rr];
        if ("noFuel" === Sr && void 0 !== Qr.fuels) return WQ(Qr) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (Qr.mobFarm && ("noInput" === Sr || "badInput" === Sr)) return `buildAFactory2Game:machineStatus_${Sr}MobFarm`;
        if ("outputFull" === Sr && (void 0 !== Qr.table || Qr.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === Sr && oS(Qr)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== Qr.cryoMade && ("noInput" === Sr || "noOutlet" === Sr || "fluidFull" === Sr)) return `buildAFactory2Game:machineStatus_${Sr}Mixer`;
        return `buildAFactory2Game:machineStatus_${Sr}`
      }(rr, Sr)
    }

    function pI(rr, Sr) {
      return "noInput" === rr && null !== Sr && void 0 !== Sr && Sr.input && Sr.inputShort ? {
        input: Sr.input,
        short: Sr.inputShort
      } : null
    }

    function xI(rr) {
      return KW(rr) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== rr.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function mI(rr) {
      const Sr = (0, Rr.ne)(rr);
      return `Baf2Pane Baf2Pane${Sr.charAt(0).toUpperCase()}${Sr.slice(1)}`
    }

    function NI(rr, Sr) {
      const [Qr, Wr] = (0, Zr.useState)((() => rr.get(Sr)));
      return (0, Zr.useEffect)((() => {
        Wr(rr.get(Sr));
        const Qr = rr.subscribe((() => {
          Wr(rr.get(Sr))
        }));
        return () => {
          Qr(), rr.forget(Sr)
        }
      }), [rr, ...Sr]), Qr
    }

    function UI(rr, Sr, Qr, Zr) {
      const Wr = RS[rr],
        ar = Sr && Wr.couplable ? iS(Wr, Qr) : Wr,
        jr = null !== Zr && SQ(ar) ? function(rr, Sr) {
          var Qr;
          return null !== (Qr = null !== Sr && SQ(rr) ? IQ[Sr] : void 0) && void 0 !== Qr ? Qr : rr.opMs
        }(ar, fQ(Zr)) : ar.opMs;
      return jr === ar.opMs ? ar : {
        ...ar,
        opMs: jr
      }
    }

    function tI(rr) {
      let {
        running: Sr,
        opMs: Qr,
        opLeftMs: Zr,
        updateCount: Wr
      } = rr;
      return (0, za.jsx)("div", {
        className: eW()("Baf2MachineProgress", {
          Running: Sr
        }),
        children: (0, za.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: Qr / 1e3 + "s",
            animationDelay: null === Zr ? void 0 : (Zr - Qr) / 1e3 + "s"
          }
        }, Wr)
      })
    }

    function hI(rr) {
      let {
        running: Sr,
        leftMs: Qr,
        periodMs: Zr,
        updateCount: Wr
      } = rr;
      const {
        t: ar
      } = (0, TW.E)(), jr = Math.min(Math.max(null !== Qr && void 0 !== Qr ? Qr : 0, 0), Zr), Ir = Sr && jr > 0, fr = ar("buildAFactory2Game:machineBarFuel");
      return (0, za.jsx)("div", {
        className: eW()("Baf2FuelBurn", {
          Draining: Ir
        }),
        role: "img",
        title: fr,
        "aria-label": fr,
        children: (0, za.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: Ir ? {
            animationDuration: Zr / 1e3 + "s",
            animationDelay: (jr - Zr) / 1e3 + "s"
          } : {
            transform: `scaleY(${jr/Zr})`
          }
        }, Wr)
      })
    }

    function zI(rr, Sr, Qr) {
      let [Zr, Wr] = Qr;
      const ar = 1 !== Zr ? BW(Sr) : null;
      return {
        amount: Zr,
        have: Wr,
        item: rr(ar || (0, sW.d)(Sr))
      }
    }

    function YI(rr) {
      return SQ(rr) ? "buildAFactory2Game:machineBarMining" : QQ(rr) ? "buildAFactory2Game:machineBarCutting" : void 0 !== rr.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function nI(rr) {
      var Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr;
      let {
        kind: er,
        cW: Kr,
        store: yr,
        power: Br,
        renderSlot: Tr
      } = rr;
      const {
        t: vr
      } = (0, TW.E)(), Or = NI(yr, Kr), Lr = RS[er], lr = null !== (Sr = null === Or || void 0 === Or ? void 0 : Or.coupled) && void 0 !== Sr && Sr, Xr = null !== (Qr = null === Or || void 0 === Or ? void 0 : Or.couplerLevel) && void 0 !== Qr ? Qr : 1, Pr = UI(er, lr, Xr, null !== (Zr = null === Or || void 0 === Or || null === (Wr = Or.dug) || void 0 === Wr ? void 0 : Wr.item) && void 0 !== Zr ? Zr : null), Hr = null !== (ar = null === Or || void 0 === Or ? void 0 : Or.status) && void 0 !== ar ? ar : null, qr = null !== (jr = null === Or || void 0 === Or ? void 0 : Or.power) && void 0 !== jr ? jr : null, Rr = null !== (Ir = null === Or || void 0 === Or ? void 0 : Or.opLeftMs) && void 0 !== Ir ? Ir : null, gr = null !== (fr = null === Or || void 0 === Or ? void 0 : Or.dug) && void 0 !== fr ? fr : null, Cr = null !== gr && SQ(Lr) ? IQ[null !== (Er = fQ(gr.item)) && void 0 !== Er ? Er : ""] : void 0, Mr = void 0 === Cr ? null : 6e4 / Cr, Gr = null !== (pr = null === Or || void 0 === Or ? void 0 : Or.powerCap) && void 0 !== pr ? pr : 4e3, kr = null !== (xr = null === Or || void 0 === Or ? void 0 : Or.tier) && void 0 !== xr ? xr : null, Ar = void 0 !== Pr.powerMade, Vr = null !== Lr.fuelSlot ? Tr(Lr.fuelSlot) : null, ir = VS(Lr), wr = !lr && !0 === (null === Or || void 0 === Or ? void 0 : Or.fuelFed), Fr = !lr && !0 === (null === Or || void 0 === Or ? void 0 : Or.fuelFeeds), or = null !== Lr.fuelSlot && !lr, br = null !== (mr = null === Or || void 0 === Or ? void 0 : Or.fuelLeftMs) && void 0 !== mr ? mr : null, Jr = function(rr, Sr, Qr) {
        var Zr;
        const Wr = null === Sr ? void 0 : aQ[Sr];
        return Math.max(null !== (Zr = null !== Wr && void 0 !== Wr ? Wr : Qr) && void 0 !== Zr ? Zr : 0, rr.opMs)
      }(Pr, null !== (Nr = null === Or || void 0 === Or ? void 0 : Or.burning) && void 0 !== Nr ? Nr : null, br), Dr = null !== (Ur = null === Or || void 0 === Or ? void 0 : Or.fuelKeep) && void 0 !== Ur ? Ur : null, dr = null === Hr ? null : EI(er, Hr, Or, wr), sr = null === Hr ? null : pI(Hr, Or);
      return (0, za.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, za.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, za.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: vr((0, sW.d)(er))
          }), gr && (0, za.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [vr("Tree Cutter" === er ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, za.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, za.jsx)(OW.d, {
                itemName: gr.item,
                amount: 0
              })
            }), (0, za.jsx)(LW.c, {
              text: gr.name
            })]
          }), null !== Mr && (0, za.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: vr("buildAFactory2Game:machineDigsFixed", {
              perMin: String(Mr)
            })
          }), (null === Or || void 0 === Or ? void 0 : Or.field) && (0, za.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, za.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, za.jsx)(OW.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), vr("buildAFactory2Game:machineField", {
              planted: String(Or.field[0]),
              ripe: String(Or.field[1])
            })]
          }), (0, za.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, za.jsxs)("div", {
              className: eW()("Baf2MachineColumn", {
                Baf2Burns: or
              }),
              children: [null !== Pr.inputSlot && (0, za.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, za.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: vr(xI(Pr))
                }), Tr(Pr.inputSlot)]
              }), null !== Lr.fuelSlot && !lr && (0, za.jsxs)("div", {
                className: eW()("Baf2MachineSlot", {
                  Baf2FuelFed: wr
                }),
                children: [(0, za.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [wr && (0, za.jsx)(vW.c, {
                    name: "fire"
                  }), vr("buildAFactory2Game:machineFuel")]
                }), (0, za.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, za.jsx)(hI, {
                    running: "running" === Hr,
                    leftMs: br,
                    periodMs: Jr,
                    updateCount: yr.updateCount
                  }), Vr]
                })]
              }), null !== Lr.fuelSlot && lr && (0, za.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, za.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: vr("buildAFactory2Game:machineFuel")
                }), (0, za.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: vr("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": vr("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, za.jsx)(vW.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, za.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, za.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: vr(YI(Pr))
              }), (0, za.jsx)(tI, {
                running: "running" === Hr,
                opMs: Pr.opMs,
                opLeftMs: Rr,
                updateCount: yr.updateCount
              })]
            }), Pr.outputSlots.length > 0 && (0, za.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, za.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: vr("buildAFactory2Game:machineOutput")
              }), (0, za.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Pr.outputSlots.map((rr => (0, za.jsx)("div", {
                  children: Tr(rr)
                }, rr)))
              })]
            }), null !== qr && Ar && (0, za.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, za.jsx)("div", {
                style: {
                  height: 100 * qr / Gr + "%"
                }
              })
            })]
          }), or && null !== Dr && (0, za.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, za.jsx)(vW.c, {
              name: "arrows-rotate"
            }), vr(QQ(Pr) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(Dr)
            })]
          }), (wr || Fr) && (0, za.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, za.jsx)(vW.c, {
              name: "fire"
            }), vr(wr ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Lr.couplable && (0, za.jsx)(ij, {
            kind: er,
            tier: kr,
            coupled: lr,
            level: Xr,
            slot: ir === Lr.fuelSlot ? Vr : null !== ir ? Tr(ir) : null
          }), null !== qr && !Ar && !0 === (null === Or || void 0 === Or ? void 0 : Or.reactorPowered) && (0, za.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: vr("buildAFactory2Game:machineReactorPowered")
          }), null !== qr && !Ar && !0 !== (null === Or || void 0 === Or ? void 0 : Or.reactorPowered) && (0, za.jsx)(Kj, {
            stored: qr,
            cap: Gr,
            rates: null !== (tr = null === Or || void 0 === Or ? void 0 : Or.powerRates) && void 0 !== tr ? tr : null
          }), (null === Or || void 0 === Or ? void 0 : Or.water) && (0, za.jsx)(rI, {
            water: Or.water,
            at: Kr,
            side: Or.cryo ? "waterIn" : null
          }), (null === Or || void 0 === Or ? void 0 : Or.cryo) && (0, za.jsx)(rI, {
            water: Or.cryo,
            at: Kr,
            side: "cryoOut"
          }), null !== Or && void 0 !== Or && Or.inertCoupler ? (0, za.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: vr("buildAFactory2Game:machineStatus_couplerOff", {
              item: (0, sW.g)(vr, Or.inertCoupler)
            })
          }) : null !== dr && (0, za.jsx)("div", {
            className: eW()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Hr
            }),
            children: vr(dr, sr ? zI(vr, sr.input, sr.short) : void 0)
          })]
        }), (0, za.jsxs)("div", {
          className: eW()("Baf2MachineSide", {
            Baf2SynthSide: oS(Lr)
          }),
          children: [oS(Lr) && (0, za.jsx)(Aj, {
            cW: Kr,
            taught: null !== (hr = null === Or || void 0 === Or ? void 0 : Or.taught) && void 0 !== hr ? hr : null
          }, Kr.join(",")), Ar && (0, za.jsx)(Bj, {
            kind: er,
            def: Pr,
            cW: Kr,
            power: Br,
            stored: null !== qr && void 0 !== qr ? qr : 0,
            cap: Gr
          }), cr(Lr) && (0, za.jsx)(Mj, {
            cW: Kr,
            input: null !== (zr = null === Or || void 0 === Or ? void 0 : Or.input) && void 0 !== zr ? zr : null,
            drops: null !== (Yr = null === Or || void 0 === Or ? void 0 : Or.farm) && void 0 !== Yr ? Yr : null,
            seconds: String(Pr.opMs / 1e3)
          }), !Ar && !cr(Lr) && !oS(Lr) && (0, za.jsx)(Ja, {
            kind: er,
            def: Pr,
            input: null !== (nr = null === Or || void 0 === Or ? void 0 : Or.input) && void 0 !== nr ? nr : null,
            tier: null !== kr && void 0 !== kr ? kr : 1,
            noSeeds: !0 === (null === Or || void 0 === Or ? void 0 : Or.noSeeds)
          })]
        })]
      })
    }

    function eI(rr, Sr, Qr, Zr) {
      var Wr;
      const ar = RS[rr],
        jr = [ar.inputSlot, ar.fuelSlot, ...null !== (Wr = ar.inputSlots) && void 0 !== Wr ? Wr : []].filter((rr => null !== rr));
      return {
        render: Wr => {
          let {
            cW: ar,
            renderSlot: jr
          } = Wr;
          return (0, za.jsx)(Hj.Provider, {
            value: Zr,
            children: (0, za.jsx)(nI, {
              kind: rr,
              cW: ar,
              store: Sr,
              power: Qr,
              renderSlot: jr
            })
          })
        },
        quickMoveRange: jr.length > 0 ? [Math.min(...jr), Math.max(...jr) + 1] : [0, 0],
        className: mI(rr)
      }
    }
    const KI = "Assembler";

    function yI(rr) {
      var Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er;
      let {
        cW: pr,
        store: xr,
        renderSlot: mr
      } = rr;
      const {
        t: Nr
      } = (0, TW.E)(), Ur = NI(xr, pr), tr = null !== (Sr = null === Ur || void 0 === Ur ? void 0 : Ur.tier) && void 0 !== Sr ? Sr : 1, hr = null !== (Qr = null === Ur || void 0 === Ur ? void 0 : Ur.taught) && void 0 !== Qr ? Qr : null, zr = dS(KI, {
        coupled: !1,
        taught: hr
      }), Yr = null !== (Zr = zr.bench) && void 0 !== Zr ? Zr : null, nr = null !== (Wr = null === Ur || void 0 === Ur ? void 0 : Ur.status) && void 0 !== Wr ? Wr : null, er = null !== (ar = null === Ur || void 0 === Ur ? void 0 : Ur.power) && void 0 !== ar ? ar : null, Kr = null !== (jr = null === Ur || void 0 === Ur ? void 0 : Ur.powerCap) && void 0 !== jr ? jr : 4e3;
      return (0, za.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, za.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, za.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Nr((0, sW.d)(KI))
          }), Yr && (0, za.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [Nr("buildAFactory2Game:benchMakes"), (0, za.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, za.jsx)(OW.d, {
                itemName: Yr.output,
                amount: 0
              })
            }), (null === Ur || void 0 === Ur ? void 0 : Ur.taughtName) && (0, za.jsx)(LW.c, {
              text: Ur.taughtName
            }), Yr.outputAmount > 1 && (0, za.jsxs)("span", {
              children: ["\xd7", Yr.outputAmount]
            })]
          }), !Yr && (0, za.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: Nr("buildAFactory2Game:benchTeachHint")
          }), (0, za.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, za.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (Ir = zr.inputSlots) && void 0 !== Ir ? Ir : []).map(((rr, Sr) => {
                const Qr = null === Yr || void 0 === Yr ? void 0 : Yr.inputs[Sr];
                return (0, za.jsxs)("div", {
                  className: eW()("Baf2BenchInput", {
                    Spare: !Qr
                  }),
                  children: [(0, za.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [mr(rr), Qr && (0, za.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, za.jsx)(OW.d, {
                        itemName: Qr.item,
                        amount: 0
                      })
                    })]
                  }), (0, za.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: Qr ? `\xd7${Qr.amount}` : "\xa0"
                  })]
                }, rr)
              }))
            }), (0, za.jsx)(tI, {
              running: "running" === nr,
              opMs: zr.opMs,
              opLeftMs: null !== (fr = null === Ur || void 0 === Ur ? void 0 : Ur.opLeftMs) && void 0 !== fr ? fr : null,
              updateCount: xr.updateCount
            }), (0, za.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, za.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Nr("buildAFactory2Game:machineOutput")
              }), (0, za.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: zr.outputSlots.map((rr => (0, za.jsx)("div", {
                  children: mr(rr)
                }, rr)))
              })]
            })]
          }), null !== er && (0, za.jsx)(Kj, {
            stored: er,
            cap: Kr,
            rates: null !== (Er = null === Ur || void 0 === Ur ? void 0 : Ur.powerRates) && void 0 !== Er ? Er : null
          }), null !== nr && (0, za.jsx)("div", {
            className: eW()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== nr
            }),
            children: Nr(EI(KI, nr, Ur, !1))
          }), Yr && Yr.inputs.length > 1 && (0, za.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: Nr("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, za.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, za.jsx)(da, {
            taught: hr,
            tier: tr
          }), Yr && (0, za.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: Nr("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function BI(rr) {
      var Sr;
      const Qr = null !== (Sr = RS[KI].inputSlots) && void 0 !== Sr ? Sr : [];
      return {
        render: Sr => {
          let {
            cW: Qr,
            renderSlot: Zr
          } = Sr;
          return (0, za.jsx)(yI, {
            cW: Qr,
            store: rr,
            renderSlot: Zr
          })
        },
        quickMoveRange: [Math.min(...Qr), Math.max(...Qr) + 1],
        className: mI(KI)
      }
    }
    var TI = Qr(109),
      vI = Qr(1181),
      OI = Qr(2984);
    const LI = 600,
      lI = .5,
      XI = 4,
      PI = 1200,
      HI = 140,
      qI = 100,
      RI = 32,
      gI = 16,
      CI = 100.5,
      MI = 90,
      GI = 1.5,
      kI = 50;

    function AI(rr) {
      switch (PQ(rr)) {
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
    const VI = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function iI(rr) {
      const Sr = Math.ceil(60 * rr / qI);
      return {
        fuel: Math.max(RI, Sr),
        waste: Math.max(gI, Sr)
      }
    }

    function wI(rr, Sr, Qr) {
      const [Zr, Wr, ar] = [rr - 2, Sr - 2, Qr - 2];
      return 2 * (Zr * Wr + Wr * ar + ar * Zr) * HI
    }

    function cI(rr, Sr, Qr) {
      return Math.max(0, rr - 2) * Math.max(0, Sr - 2) * Math.max(0, Qr - 2)
    }

    function FI(rr, Sr) {
      const [Qr, Zr, Wr] = rr, ar = Qr * Zr * Wr, jr = new Float32Array(ar);
      let Ir = 0,
        fr = 0,
        Er = 0,
        pr = 0,
        xr = 0;
      const mr = (rr, ar, jr) => rr < 0 || rr >= Qr || ar < 0 || ar >= Zr || jr < 0 || jr >= Wr ? 0 : Sr[(ar * Wr + jr) * Qr + rr];
      for (let hr = 0; hr < Zr; hr++)
        for (let rr = 0; rr < Wr; rr++)
          for (let Zr = 0; Zr < Qr; Zr++) {
            const ar = (hr * Wr + rr) * Qr + Zr,
              Nr = Sr[ar];
            if (1 === Nr) {
              Ir++;
              let Sr = 0;
              for (const [Qr, Wr, ar] of VI) {
                const jr = mr(Zr + Qr, hr + Wr, rr + ar);
                1 !== jr && 2 !== jr || Sr++
              }
              jr[ar] = LI * (1 + lI * Math.min(Sr, XI)), pr += jr[ar]
            } else if (2 === Nr) fr++;
            else if (3 === Nr) {
              Er++;
              VI.some((Sr => {
                let [Qr, Wr, ar] = Sr;
                return 1 === mr(Zr + Qr, hr + Wr, rr + ar)
              })) && (xr += PI)
            }
          }
      const Nr = wI(Qr + 2, Zr + 2, Wr + 2),
        Ur = Math.min(pr, xr, Nr),
        tr = Ir > 0 ? pr * qI / Ir : 0;
      return {
        rods: Ir,
        graphite: fr,
        channels: Er,
        fuelHeat: pr,
        cooling: xr,
        size: Nr,
        max: Ur,
        vol: ar,
        powerPerUnit: tr,
        pelletsPerMin: tr > 0 ? Ur / tr * 60 : 0,
        waterPerS: Ur * sr.q,
        rodHeat: jr
      }
    }
    const oI = 0,
      bI = 1,
      JI = 6,
      DI = 7,
      dI = 8;

    function sI(rr, Sr) {
      const [Qr, Zr, Wr] = rr, ar = new Uint8Array(Qr * Zr * Wr), jr = (rr, ar, jr) => rr < 0 || rr >= Qr || ar < 0 || ar >= Zr || jr < 0 || jr >= Wr ? 0 : Sr[(ar * Wr + jr) * Qr + rr];
      for (let Ir = 0; Ir < Zr; Ir++)
        for (let rr = 0; rr < Wr; rr++)
          for (let Zr = 0; Zr < Qr; Zr++) {
            const fr = (Ir * Wr + rr) * Qr + Zr,
              Er = Sr[fr];
            if (1 === Er) {
              let Sr = 0;
              for (const [Qr, Wr, ar] of VI) {
                const fr = jr(Zr + Qr, Ir + Wr, rr + ar);
                Sr += 1 === fr || 2 === fr ? 1 : 0
              }
              ar[fr] = bI + Math.min(Sr, XI)
            } else if (3 === Er) {
              const Sr = VI.some((Sr => {
                let [Qr, Wr, ar] = Sr;
                return 1 === jr(Zr + Qr, Ir + Wr, rr + ar)
              }));
              ar[fr] = Sr ? JI : DI
            } else 2 === Er && (ar[fr] = dI)
          }
      return ar
    }

    function uI(rr) {
      return rr.fuelHeat <= rr.cooling && rr.fuelHeat <= rr.size ? "fuel" : rr.cooling <= rr.size ? "cooling" : "size"
    }
    const rf = MI;

    function Sf(rr, Sr, Qr) {
      return Math.round(rr * Sr * Qr * 25e3 * (1 + .25 * (Math.min(rr, Sr, Qr) - 2)))
    }

    function Qf(rr) {
      return Math.max(0, Math.min(sr.d, rr))
    }

    function Zf(rr, Sr, Qr) {
      const Zr = Sr * Qf(Qr);
      return rr <= 0 ? 0 : Zr > 0 ? Math.min(200, 100 * rr / Zr) : 200
    }

    function Wf(rr, Sr) {
      const Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? GI : 1;
      return Math.min(rr.fuelHeat * Qr, rr.cooling * Qf(Sr), rr.size * Qr)
    }

    function af(rr) {
      return 2 + rr / 10
    }
    const jf = "buildAFactory2Game:";

    function If(rr) {
      var Sr;
      return null !== (Sr = rr.baf2RxMood) && void 0 !== Sr ? Sr : function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const Qr = [
          ["calm", 50],
          ["warm", rf],
          ["hot", CI]
        ];
        for (const [Zr, Wr] of Qr)
          if (rr < Wr + (Zr === Sr ? 3 : 0)) return Zr;
        return "alarm"
      }(rr.baf2RxHeat)
    }
    const ff = 120;

    function Ef(rr) {
      const Sr = rr.baf2RxState;
      if ("running" === Sr && rr.baf2RxHeat > CI) return {
        label: `${jf}rxState_tooHot`,
        tone: "bad",
        fix: `${jf}rxFix_tooHot`
      };
      switch (Sr) {
        case "running":
          return {
            label: `${jf}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${jf}rxState_idle`, tone: "off", fix: `${jf}rxFix_idle`
          };
        case "scram":
          return {
            label: `${jf}rxState_scram`, tone: "off", fix: rr.baf2RxHeat < kI ? `${jf}rxFix_scramCool` : `${jf}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${jf}rxState_${Sr}`, tone: "off", fix: `${jf}rxFix_${Sr}`
          };
        case "melted":
          return {
            label: `${jf}rxState_melted`, tone: "bad", fix: `${jf}rxFix_melted`
          };
        default:
          return {
            label: `${jf}rxState_${Sr}`, tone: "warn", fix: `${jf}rxFix_${Sr}`
          }
      }
    }

    function pf(rr) {
      const [Sr, Qr, Zr] = rr.baf2RxStats;
      return {
        fuelHeat: Sr,
        cooling: Qr * (rr.baf2RxCryo ? Math.max(1, Qf(rr.baf2RxWater / 100)) : 1),
        size: Zr
      }
    }

    function xf(rr) {
      var Sr;
      const Qr = "idle" === rr.baf2RxState || "running" === rr.baf2RxState && rr.baf2RxHeat <= CI || "scram" === rr.baf2RxState && rr.baf2RxHeat < kI;
      if (0 === (rr.baf2RxFlags & eS) || !rr.baf2RxFormed || !Qr) return null;
      const {
        fuelHeat: Zr,
        cooling: Wr,
        size: ar
      } = pf(rr), jr = Math.min(Zr, Wr, ar), Ir = uI({
        fuelHeat: Zr,
        cooling: Wr,
        size: ar
      }), fr = "cooling" === Ir && !0 === rr.baf2RxCryoOpen && !rr.baf2RxCryo, Er = null !== (Sr = rr.baf2RxCells) && void 0 !== Sr ? Sr : "", pr = ("fuel" === Ir || "cooling" === Ir && !0 === rr.baf2RxCryo) && Er.length > 0 && !Er.includes(String(0)), xr = fr ? "Cryo" : "scram" === rr.baf2RxState ? "Off" : "";
      return jr < 12e3 ? {
        key: `${jf}rxGrow_${pr?"full":Ir}${xr}`,
        amount: jr
      } : null
    }

    function mf(rr, Sr) {
      return rr[0] === Sr[0] && rr[1] === Sr[1] && rr[2] === Sr[2]
    }

    function Nf(rr) {
      return [...rr].sort(((rr, Sr) => Number(Sr[2] < Sr[1]) - Number(rr[2] < rr[1])))
    }

    function Uf(rr, Sr) {
      return Sr.some((Sr => {
        let [Qr, Zr] = Sr;
        return !(Zr <= 0) && ["edge", "cap", "wall", "inside"].some((Sr => Qr === aZ(rr, Sr)))
      }))
    }

    function tf(rr, Sr, Qr) {
      const Zr = rr.baf2RxFuel - rr.baf2RxPu > 0 ? Qr : 0;
      return {
        full: rr.baf2RxWaste > Sr - 3,
        fullInS: Zr > 0 ? Math.max(0, Sr - rr.baf2RxWaste) / Zr : null
      }
    }
    const hf = {
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

    function zf(rr) {
      return Yf[rr]
    }
    const Yf = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function nf(rr) {
      let [Sr, Qr, Zr] = rr;
      return Math.ceil(wI(Sr, Qr, Zr) * sr.q)
    }

    function ef(rr, Sr) {
      return "battery" === rr ? Sr[0] * Sr[1] * Sr[2] : function(rr) {
        let [Sr, Qr, Zr] = rr;
        return Sr * Qr * Zr - Math.max(0, Sr - 2) * Math.max(0, Qr - 2) * Math.max(0, Zr - 2)
      }(Sr) - 1
    }

    function Kf(rr) {
      const Sr = Math.max(0, rr);
      if (Sr < 10) return String(Math.round(10 * Sr) / 10);
      if (Sr < 1e4) return Math.round(Sr).toLocaleString("en-US");
      if (Sr < 1e6) return `${Sr<1e5?(Math.floor(Sr/100)/10).toFixed(1):Math.floor(Sr/1e3)}k`;
      const Qr = Sr / 1e6;
      return `${Qr<10?(Math.floor(100*Qr)/100).toFixed(2):Qr<100?(Math.floor(10*Qr)/10).toFixed(1):Math.floor(Qr)}M`
    }

    function yf(rr) {
      return rr <= 0 ? "0" : rr >= 10 ? String(Math.round(rr)) : rr.toFixed(rr >= 1 ? 1 : 2)
    }

    function Bf(rr) {
      const Sr = sQ(rr, 0),
        Qr = sQ(rr, bQ(rr) - 1);
      return {
        lo: [Math.min(Sr[0], Qr[0]), Math.min(Sr[1], Qr[1]), Math.min(Sr[2], Qr[2])],
        hi: [Math.max(Sr[0], Qr[0]) + 1, Math.max(Sr[1], Qr[1]) + 1, Math.max(Sr[2], Qr[2]) + 1]
      }
    }

    function Tf(rr, Sr, Qr) {
      const Zr = [Sr[0] - rr[0], Sr[1] - rr[1], Sr[2] - rr[2]],
        Wr = [(rr[0] + Sr[0]) / 2, (rr[1] + Sr[1]) / 2, (rr[2] + Sr[2]) / 2],
        ar = [];
      for (let jr = 0; jr < 3; jr++) {
        const Ir = (jr + 1) % 3,
          fr = (jr + 2) % 3;
        for (const Er of [rr[Ir], Sr[Ir]])
          for (const pr of [rr[fr], Sr[fr]]) {
            const rr = [0, 0, 0],
              Sr = [Qr, Qr, Qr];
            rr[jr] = Wr[jr], Sr[jr] = Zr[jr] + Qr, rr[Ir] = Er, rr[fr] = pr, ar.push([rr, Sr])
          }
      }
      return ar
    }
    const vf = "buildAFactory2Game:",
      Of = [`${vf}colNorth`, `${vf}colEast`, `${vf}colSouth`, `${vf}colWest`];

    function Lf(rr, Sr) {
      const [Qr, Zr, Wr] = rr.baf2ColAt;
      return `baf2col ${Qr} ${Zr} ${Wr} ${Sr}`
    }

    function lf(rr) {
      return function(rr) {
        if (!Number.isFinite(rr)) return "";
        const Sr = Math.max(1, Math.round(rr));
        if (Sr < 60) return `${Sr}s`;
        const Qr = Sr % 60;
        return 0 === Qr ? Sr / 60 + "m" : `${Math.floor(Sr/60)}m ${Qr}s`
      }(function(rr) {
        const Sr = jZ.FOCUS_BY_LASERS[Math.max(0, Math.min(4, rr))];
        return Sr > 0 ? jZ.NOVA_FOCUS / Sr : 1 / 0
      }(rr))
    }

    function Xf(rr) {
      const Sr = Math.abs(Math.round(rr));
      return Sr < 1e3 ? Math.round(rr).toLocaleString("en-US") : Sr < 1e6 ? `${Sr<1e5?(rr/1e3).toFixed(1).replace(/\.0$/,""):Math.round(rr/1e3)}k` : `${(rr/1e6).toFixed(Sr<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function Pf(rr, Sr, Qr) {
      if (mZ(Sr) >= 0) {
        const Sr = function(rr, Sr) {
          return rr.find((rr => {
            let {
              focus: Qr
            } = rr;
            return Qr[0] === Sr[0] && Qr[2] === Sr[2] && (Sr[1] === Qr[1] || Sr[1] === Qr[1] - 1)
          }))
        }(rr, Qr);
        if (!Sr) return null;
        const Wr = function(rr) {
          let Sr = 0,
            Qr = 0;
          for (let Zr = 0; Zr < 4; Zr++) Sr += rr.laser[Zr] ? 1 : 0, Qr += rr.live[Zr] ? 1 : 0;
          return {
            lasers: Sr,
            live: Qr,
            focusPerS: jZ.FOCUS_BY_LASERS[Qr],
            drawPerS: jZ.LASER_DRAW * Qr
          }
        }({
          laser: Sr.lasers,
          live: Sr.live
        });
        if (0 === Wr.lasers || "noLasers" === Sr.state) return {
          key: `${vf}lookColNoLasers`
        };
        if (0 === Wr.live) return {
          key: `${vf}lookColOff_blocked`
        };
        if (!(Sr.on && Wr.live > 0) && ("running" !== (Zr = Sr.state) && "slowed" !== Zr)) return {
          key: `${vf}lookColOff_${Sr.state}`
        };
        if (Wr.live < Wr.lasers) return {
          key: `${vf}lookColLasersSome`,
          params: {
            lasers: String(Wr.lasers),
            live: String(Wr.live)
          }
        };
        const ar = Sr.open.filter(Boolean).length;
        return ar < 4 ? {
          key: `${vf}lookColLasersSpots`,
          params: {
            live: String(Wr.live),
            spots: String(ar),
            time: lf(Wr.live)
          }
        } : {
          key: `${vf}lookColLasers`,
          params: {
            live: String(Wr.live),
            time: lf(Wr.live)
          }
        }
      }
      var Zr;
      if (!NZ(Sr)) return null;
      const Wr = function(rr, Sr) {
        for (const Qr of rr) {
          const rr = zZ(Qr.focus, [Sr[0], Sr[1], Sr[2]]);
          if (rr && rr.Oj === jZ.LASER_D && Qr.lasers[rr.dir]) return {
            entry: Qr,
            dir: rr.dir
          }
        }
        return null
      }(rr, Qr);
      if (!Wr) return {
        key: `${vf}lookLaserNoCollider`
      };
      const {
        entry: ar,
        dir: jr
      } = Wr;
      return ar.open[jr] ? ar.live[jr] ? {
        key: ar.on ? `${vf}lookLaserFiring` : `${vf}lookLaserReady`
      } : {
        key: `${vf}lookLaserBlocked`
      } : {
        key: `${vf}lookLaserClosed`
      }
    }

    function Hf(rr, Sr) {
      const Qr = [];
      for (let Zr = 1; Zr < jZ.LASER_D; Zr++) rr & 1 << Sr * (jZ.LASER_D - 1) + Zr - 1 && Qr.push(Zr);
      return Qr
    }
    const qf = {
      firing: `${vf}colSlotFiring`,
      ready: `${vf}colSlotReady`,
      blocked: `${vf}colSlotBlocked`,
      empty: `${vf}colSlotEmpty`,
      closed: `${vf}colSlotClosed`
    };

    function Rf(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const ar = ZW(rr),
        jr = ZW(Sr),
        Ir = ZW(Qr),
        fr = Ir.filter(Boolean).length,
        Er = ar.filter(Boolean).length,
        pr = [0, 1, 2, 3].map((rr => jr[rr] ? ar[rr] ? Ir[rr] ? Zr ? "firing" : "ready" : "blocked" : (rr => Hf(Wr, rr).length > 0)(rr) ? "blocked" : "empty" : "closed")),
        xr = pr.indexOf("blocked"),
        mr = xr < 0 && Er > 0 ? pr.indexOf("empty") : -1;
      return pr.map(((rr, Sr) => {
        const Qr = Sr === xr ? {
          key: `${vf}colSlotClear`
        } : Sr === mr ? {
          key: `${vf}colSlotAdd`,
          params: {
            time: lf(Math.min(4, fr + 1))
          }
        } : null;
        return {
          dir: Sr,
          tone: rr,
          title: {
            key: "blocked" !== rr || ar[Sr] ? qf[rr] : `${vf}colSlotGap`,
            keys: {
              dir: Of[Sr]
            }
          },
          hint: Qr
        }
      }))
    }

    function gf(rr) {
      var Sr;
      return "noPower" === rr.baf2ColState && rr.baf2ColRxState ? Ef({
        baf2RxState: rr.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (Sr = rr.baf2ColRxHeat) && void 0 !== Sr ? Sr : 0
      }) : null
    }

    function Cf(rr) {
      const Sr = ZW(rr.baf2ColSpots).filter(Boolean).length,
        Qr = ZW(rr.baf2ColLive);
      let Zr = 0,
        Wr = 0;
      return ZW(rr.baf2ColLasers).forEach(((rr, Sr) => {
        rr && (Zr++, Wr += Qr[Sr] ? 0 : 1)
      })), Wr > 0 ? {
        key: `${vf}colSubSome`,
        params: {
          blocked: String(Wr),
          lasers: String(Zr)
        }
      } : Sr < 4 ? {
        key: `${vf}colSubSpots`,
        params: {
          lasers: String(Zr),
          spots: String(Sr)
        }
      } : {
        key: `${vf}colSub`,
        params: {
          lasers: String(Zr)
        }
      }
    }

    function Mf(rr) {
      const Sr = gf(rr);
      if ("idle" === rr.baf2ColRxState && Sr) return {
        key: `${vf}colState_noPowerIdle`
      };
      if (Sr) return {
        key: `${vf}colState_noPowerReactor`,
        keys: {
          state: Sr.label
        }
      };
      if ("noInput" !== rr.baf2ColState) return {
        key: `${vf}colState_${rr.baf2ColState}`
      };
      const Qr = String(Math.max(0, jZ.NOVA_SA - rr.baf2ColSa)),
        Zr = String(Math.max(0, jZ.NOVA_GD - rr.baf2ColGd));
      return "0" !== Qr && "0" !== Zr ? {
        key: `${vf}colState_noInput`,
        params: {
          sa: Qr,
          gd: Zr
        }
      } : "0" !== Qr ? {
        key: `${vf}colState_noStarAlloy`,
        params: {
          sa: Qr
        }
      } : "0" !== Zr ? {
        key: `${vf}colState_noGlowDust`,
        params: {
          gd: Zr
        }
      } : {
        key: `${vf}colState_running`
      }
    }

    function Gf(rr) {
      return rr.baf2ColP < 0 ? `${vf}colNext` : function(rr) {
        const Sr = rr.baf2ColState;
        return rr.baf2ColP >= 0 && ("blocked" === Sr || "noLasers" === Sr || "noPower" === Sr)
      }(rr) ? `${vf}colStalled` : null === kf(rr) ? `${vf}colMaking` : `${vf}colNovaIn`
    }

    function kf(rr) {
      if (rr.baf2ColP < 0 || rr.baf2ColWant <= 0) return null;
      const Sr = rr.baf2ColFocusPerS * Math.min(1, rr.baf2ColDraw / rr.baf2ColWant);
      return Sr > 0 ? Math.max(0, jZ.NOVA_FOCUS - rr.baf2ColP) / Sr : null
    }

    function Af(rr, Sr) {
      const Qr = [];
      for (let Zr = 1; Zr <= 3; Zr++) {
        const Wr = [rr[0], rr[1] - Zr, rr[2]];
        if (!Sr(Wr)) return Qr;
        Qr.push(Wr)
      }
      return []
    }

    function Vf(rr, Sr) {
      const Qr = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Zr = 0; Zr < 4; Zr++) {
        const Wr = Zr,
          ar = hZ(rr.focus, Wr, jZ.LASER_D);
        if (rr.lasers[Zr] || !rr.open[Zr] || !Sr(ar)) continue;
        const jr = [];
        for (let Qr = 1; Qr < jZ.LASER_D; Qr++) {
          const Zr = hZ(rr.focus, Wr, Qr);
          Sr(Zr) || jr.push(Zr)
        }
        Qr.supports.push(...Af(ar, Sr)), 0 === jr.length ? Qr.free.push(ar) : (Qr.blocked.push(ar), Qr.gaps.push(...jr))
      }
      return Qr
    }
    const wf = jZ.LASER_D - .25,
      Ff = 4,
      of = 2,
      bf = 16;
    const Jf = {
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
        blendMode: OI.e.Standard,
        soft: !0
      },
      Df = {
        green: Jf,
        pink: {
          ...Jf,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function df(rr, Sr) {
      const Qr = {
        ...Sr.params
      };
      for (const [Wr, ar] of Object.entries(null !== (Zr = Sr.keys) && void 0 !== Zr ? Zr : {})) {
        var Zr;
        Qr[Wr] = rr(ar)
      }
      return Qr
    }
    const sf = "buildAFactory2Game:",
      uf = 2 * jZ.LASER_D + 1,
      rE = jZ.LASER_D;

    function SE(rr) {
      return rr(`${sf}colFocusTip`, {
        need: Xf(jZ.NOVA_FOCUS)
      })
    }

    function QE(rr, Sr) {
      return rr(Sr.key, df(rr, Sr))
    }

    function ZE(rr) {
      const Sr = rr.getStatus();
      return {
        status: Sr,
        entry: Sr ? rr.entryAtRoot(Sr.baf2ColAt) : void 0
      }
    }

    function WE(rr, Sr) {
      return {
        left: 100 * (rE + rr) / uf + "%",
        top: 100 * (rE + Sr) / uf + "%"
      }
    }

    function aE(rr) {
      let {
        status: Sr,
        entry: Qr
      } = rr;
      const Zr = ZW(Sr.baf2ColLasers),
        Wr = ZW(Sr.baf2ColSpots),
        ar = ZW(Sr.baf2ColLive),
        jr = !0 === (null === Qr || void 0 === Qr ? void 0 : Qr.on),
        Ir = jZ.LASER_D,
        fr = [];
      for (let Nr = 0; Nr < 4; Nr++) {
        const [rr, , Sr] = tZ[Nr];
        if (ar[Nr]) {
          const Qr = 100 * (Ir - 1) / uf,
            Zr = rr + Sr > 0 ? 100 * (rE + 1) / uf : 100 * (rE - (Ir - 1)) / uf,
            Wr = 100 * (rE + .35) / uf,
            ar = 30 / uf,
            Er = 0 !== rr ? {
              left: `${Zr}%`,
              width: `${Qr}%`,
              top: `${Wr}%`,
              height: `${ar}%`
            } : {
              top: `${Zr}%`,
              height: `${Qr}%`,
              left: `${Wr}%`,
              width: `${ar}%`
            };
          fr.push((0, za.jsx)("i", {
            className: eW()("Baf2ColDiagramBeam", {
              Off: !jr
            }),
            style: Er
          }, `beam${Nr}`))
        }
        const Qr = Zr[Nr] ? "Baf2ColDiagramLaser" : Wr[Nr] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        fr.push((0, za.jsx)("i", {
          className: Qr,
          style: WE(rr * Ir, Sr * Ir)
        }, `spot${Nr}`))
      }
      for (let Nr = 0; Nr < 4; Nr++) {
        if (Zr[Nr] || !Wr[Nr]) continue;
        const [rr, , Qr] = tZ[Nr];
        for (const Zr of Hf(null !== (Er = Sr.baf2ColGaps) && void 0 !== Er ? Er : 0, Nr)) {
          var Er;
          fr.push((0, za.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: WE(rr * Zr, Qr * Zr)
          }, `gap${Nr},${Zr}`))
        }
      }
      for (const [Nr, , Ur] of null !== (pr = null === Qr || void 0 === Qr ? void 0 : Qr.blockers) && void 0 !== pr ? pr : []) {
        var pr, xr, mr;
        const rr = Nr - (null !== (xr = null === Qr || void 0 === Qr ? void 0 : Qr.focus[0]) && void 0 !== xr ? xr : 0),
          Sr = Ur - (null !== (mr = null === Qr || void 0 === Qr ? void 0 : Qr.focus[2]) && void 0 !== mr ? mr : 0);
        fr.push((0, za.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: WE(rr, Sr)
        }, `block${rr},${Sr}`))
      }
      return (0, za.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [fr, (0, za.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function jE(rr) {
      let {
        status: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)(), Zr = ZW(Sr.baf2ColLive).filter(Boolean).length;
      return (0, za.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, za.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: SE(Qr),
          children: Qr(`${sf}colLadder`)
        }), (0, za.jsx)("ul", {
          children: [1, 2, 3, 4].map((rr => (0, za.jsx)("li", {
            className: eW()({
              On: rr === Zr
            }),
            children: Qr(`${sf}colLadderChip`, {
              lasers: String(rr),
              time: lf(rr)
            })
          }, rr)))
        })]
      })
    }

    function IE(rr) {
      let {
        item: Sr,
        wI: Qr,
        need: Zr,
        cap: Wr
      } = rr;
      const {
        t: ar
      } = (0, TW.E)(), jr = Math.min(Qr, Zr);
      return (0, za.jsxs)("li", {
        className: eW()("Baf2ColTile", {
          Short: Qr < Zr
        }),
        children: [(0, za.jsx)(fE, {
          item: Sr
        }), (0, za.jsx)("b", {
          className: "Baf2ColTileValue",
          children: ar(`${sf}colOutOf`, {
            amount: String(jr),
            cap: String(Zr)
          })
        }), (0, za.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, za.jsx)("i", {
            style: {
              width: 100 * jr / Zr + "%"
            }
          })
        }), Qr > Zr && (0, za.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: ar(`${sf}colIntakeHeld`, {
            amount: String(Qr),
            cap: String(Wr)
          })
        })]
      })
    }

    function fE(rr) {
      let {
        item: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)();
      return (0, za.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, za.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, za.jsx)(OW.d, {
            itemName: Sr,
            amount: 0
          })
        }), (0, za.jsx)("span", {
          className: "Baf2ColTileName",
          children: (0, sW.g)(Qr, Sr)
        })]
      })
    }

    function EE(rr) {
      switch (rr.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function pE(rr) {
      var Sr, Qr, Wr;
      let {
        store: ar,
        close: jr
      } = rr;
      const {
        t: Ir
      } = (0, TW.E)(), fr = qj(), {
        status: Er,
        entry: pr
      } = function(rr) {
        const [Sr, Qr] = (0, Zr.useState)((() => ZE(rr)));
        return (0, Zr.useEffect)((() => (Qr(ZE(rr)), rr.subscribe((() => {
          Qr(ZE(rr))
        })))), [rr]), Sr
      }(ar), [xr, mr] = (0, Zr.useState)(null), Nr = null === Er || void 0 === Er ? void 0 : Er.baf2ColHold;
      (0, Zr.useEffect)((() => {
        mr(null)
      }), [Nr]);
      const Ur = (0, Zr.useRef)({
          p: -1,
          n: 0
        }),
        tr = null !== (Sr = null === Er || void 0 === Er ? void 0 : Er.baf2ColP) && void 0 !== Sr ? Sr : -1;
      tr < Ur.current.p && Ur.current.n++, Ur.current.p = tr;
      const hr = (0, Zr.useRef)(null),
        [zr] = (0, Zr.useState)((() => {
          return (rr = ar.heldAtOpen()) === EZ || rr === pZ ? {
            key: `${vf}colBeltItIn`,
            item: rr
          } : null;
          var rr
        }));
      if (!Er) return null;
      const Yr = Er.baf2ColMember,
        nr = Er.baf2ColP >= 0,
        er = function(rr, Sr) {
          if (rr.baf2ColP >= 0 && rr.baf2ColDraw > 0) {
            const Sr = rr.baf2ColWant > 0 ? Math.min(1, rr.baf2ColDraw / rr.baf2ColWant) : 0;
            return {
              focus: rr.baf2ColFocusPerS * Sr,
              draw: rr.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === rr.baf2ColState && Sr && Sr.draw > 0 ? {
            ...Sr,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Er, hr.current);
      hr.current = er.draw > 0 ? er : null;
      const Kr = "slowed" === Er.baf2ColState || "noPower" === Er.baf2ColState,
        yr = kf(Er),
        Br = null !== xr && void 0 !== xr ? xr : Er.baf2ColHold,
        Tr = function(rr) {
          var Sr, Qr;
          return "idle" === rr.baf2ColRxState ? null : null !== (Sr = null === (Qr = gf(rr)) || void 0 === Qr ? void 0 : Qr.fix) && void 0 !== Sr ? Sr : null
        }(Er),
        vr = null === Tr && null === zr ? function(rr) {
          var Sr;
          const Qr = rr.baf2ColSentTo;
          if (!Qr) return null;
          const Zr = null !== (Sr = rr.baf2ColSentHeld) && void 0 !== Sr ? Sr : null;
          return {
            key: null === Zr ? `${vf}colNovaSentToMachine` : `${vf}colNovaSentTo`,
            target: Qr,
            wI: Zr
          }
        }(Er) : null,
        Or = nr ? Ir(`${sf}colFocusOf`, {
          focus: Xf(Er.baf2ColP),
          need: Xf(jZ.NOVA_FOCUS)
        }) : null;
      return (0, za.jsx)(Nj.b, {
        close: jr,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, za.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, za.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, za.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, za.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, za.jsx)(OW.d, {
                  itemName: IZ,
                  amount: 0
                })
              }), (0, za.jsxs)("div", {
                children: [(0, za.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: (0, sW.g)(Ir, IZ)
                }), (0, za.jsx)("p", {
                  children: QE(Ir, Cf(Er))
                })]
              })]
            }), (0, za.jsx)(Uj.l, {
              onClick: jr
            })]
          }), (0, za.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, za.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, za.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, za.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: Ir(Gf(Er), {
                    time: null === yr ? "" : ta(Ir, yr)
                  })
                }), (0, za.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, za.jsx)("i", {
                    style: {
                      width: (nr ? 100 * Er.baf2ColP / jZ.NOVA_FOCUS : 0) + "%"
                    }
                  }, Ur.current.n)
                }), (0, za.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, za.jsxs)("span", {
                    title: SE(Ir),
                    children: [(0, za.jsx)("b", {
                      children: Xf(er.focus)
                    }), " ", Ir(`${sf}colFocusPerS`)]
                  }), (0, za.jsxs)("span", {
                    className: eW()("Baf2ColDraw", {
                      Short: Kr
                    }),
                    children: [(0, za.jsx)(vW.c, {
                      name: "bolt"
                    }), Kr ? Ir(`${sf}colDrawOf`, {
                      draw: Xf(Er.baf2ColDraw),
                      want: Xf(Er.baf2ColWant)
                    }) : Ir(`${sf}colPowerPerS`, {
                      rate: Xf(er.draw)
                    })]
                  }), null !== Or && (0, za.jsx)("span", {
                    className: "Soft",
                    children: Or
                  })]
                })]
              }), (0, za.jsx)("p", {
                className: eW()("Baf2ColState", EE(Er)),
                children: QE(Ir, Mf(Er))
              }), null !== Tr && (0, za.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Ir(Tr)
              }), null === Tr && null !== zr && (0, za.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Ir(zr.key, {
                  item: (0, sW.g)(Ir, zr.item)
                })
              }), vr && (0, za.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Ir(vr.key, {
                  target: (0, sW.g)(Ir, vr.target),
                  amount: String(null !== (Qr = vr.wI) && void 0 !== Qr ? Qr : 0)
                })
              }), (0, za.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, za.jsx)(IE, {
                  item: EZ,
                  wI: Er.baf2ColSa,
                  need: jZ.NOVA_SA,
                  cap: jZ.SA_CAP
                }), (0, za.jsx)(IE, {
                  item: pZ,
                  wI: Er.baf2ColGd,
                  need: jZ.NOVA_GD,
                  cap: jZ.GD_CAP
                }), (0, za.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, za.jsx)(fE, {
                    item: "Nova Matter"
                  }), (0, za.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: Ir(`${sf}colNovaHeld`, {
                      amount: String(Er.baf2ColOut),
                      cap: String(jZ.OUT_CAP)
                    })
                  }), Yr && (0, za.jsx)(Uj.p, {
                    className: "Baf2ColTake",
                    disabled: 0 === Er.baf2ColOut,
                    onClick: () => {
                      fr.send(Lf(Er, "take"))
                    },
                    children: Ir(`${sf}colTake`)
                  })]
                })]
              }), Yr && (0, za.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": Br,
                className: eW()("Baf2ColHold", {
                  On: Br
                }),
                onClick: rr => {
                  rr.detail > 0 && rr.currentTarget.blur(), mr(!Br), fr.send(Lf(Er, "hold " + (Br ? 0 : 1)))
                },
                children: [(0, za.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, za.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, za.jsx)("b", {
                    children: Ir(`${sf}colHold`)
                  }), (0, za.jsx)("span", {
                    children: Ir(`${sf}colHoldNote`)
                  })]
                })]
              })]
            }), (0, za.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, za.jsx)(aE, {
                status: Er,
                entry: pr
              }), (0, za.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Rf(Er.baf2ColLasers, Er.baf2ColSpots, Er.baf2ColLive, er.beamsOn, null !== (Wr = Er.baf2ColGaps) && void 0 !== Wr ? Wr : 0).map((rr => (0, za.jsxs)("li", {
                  className: rr.tone,
                  children: [(0, za.jsx)("b", {
                    children: QE(Ir, rr.title)
                  }), null !== rr.hint && (0, za.jsx)("span", {
                    children: QE(Ir, rr.hint)
                  })]
                }, rr.dir)))
              }), (0, za.jsx)(jE, {
                status: Er
              })]
            })]
          })]
        })
      })
    }
    const xE = "buildAFactory2Game:",
      mE = 36e5,
      NE = 864e5;

    function UE(rr, Sr, Qr) {
      return Math.max(0, Math.ceil((rr + Sr - Math.max(Qr, rr)) / 1e3))
    }

    function tE(rr) {
      return rr.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function hE(rr) {
      return "Homestead" === rr
    }

    function zE(rr) {
      return function(rr) {
        let Sr = 0;
        for (const Qr of rr) {
          const rr = /^Island ([1-9]\d{0,5})$/.exec(Qr);
          rr && (Sr = Math.max(Sr, Number(rr[1])))
        }
        return `Island ${Sr+1}`
      }(rr.map((rr => rr.baf2IslandName)))
    }

    function YE(rr, Sr) {
      return function(rr) {
        return `${xE}islandsBlocked${rr[0].toUpperCase()}${rr.slice(1)}`
      }("degraded" === rr && 0 === Sr ? "stuck" : rr)
    }

    function nE(rr) {
      return rr.filter((rr => {
        var Sr;
        return !rr.baf2IslandActive && void 0 === rr.baf2IslandUnreadable && void 0 === (null === (Sr = rr.baf2IslandCoop) || void 0 === Sr ? void 0 : Sr.baf2CoopState)
      })).length
    }

    function eE(rr) {
      return "coopMoving" === rr || "coopUnreachable" === rr
    }

    function KE(rr, Sr) {
      const Qr = Sr > 0;
      return {
        change: null === rr && !Qr,
        switch: (null === rr || "degraded" === rr || eE(rr)) && !Qr,
        rename: "loading" !== rr && "degraded" !== rr && "stuck" !== rr
      }
    }

    function yE(rr, Sr) {
      return void 0 === rr || "corrupt" === rr && Sr
    }
    const BE = vj;

    function TE(rr, Sr, Qr) {
      if (null !== rr && void 0 !== rr && rr.untilGone) {
        var Zr;
        return !("dismiss" === rr.untilGone && void 0 === (null === (Zr = Sr.baf2IslandCoop) || void 0 === Zr ? void 0 : Zr.baf2CoopState)) && Qr - rr.atMs < 32500
      }
      return void 0 !== rr && Qr - rr.atMs < BE && Sr.baf2IslandName === rr.from
    }
    const vE = vj;

    function OE(rr) {
      return "core" === (null === rr || void 0 === rr ? void 0 : rr.kind) ? rr.core : "islands" === (null === rr || void 0 === rr ? void 0 : rr.kind) ? rr.backToCore : void 0
    }

    function LE(rr) {
      return `\0${rr}\0`
    }

    function lE(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Zr = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const ar of Object.keys(Qr)) Zr[ar] = LE(ar);
      let Wr = Object.keys(Zr).length > 0 ? rr(Sr, Zr) : rr(Sr);
      for (const [ar, jr] of Object.entries(Qr)) Wr = Wr.split(LE(ar)).join(jr);
      return Wr
    }

    function XE(rr, Sr) {
      return rr ? Sr ? "enabled" : "disabled" : "hidden"
    }
    const PE = {
      removed: `${xE}islandsCoopRemoved`,
      deleted: `${xE}islandsCoopDeleted`,
      notReady: `${xE}islandsCoopNotReady`,
      gone: `${xE}islandsCoopGone`
    };

    function HE(rr) {
      var Sr;
      return "member" !== (null === (Sr = rr.baf2IslandCoop) || void 0 === Sr ? void 0 : Sr.baf2CoopRole) && "newer" !== rr.baf2IslandUnreadable
    }

    function qE(rr, Sr, Qr, Zr, Wr, ar) {
      const jr = rr.baf2IslandActive,
        Ir = rr.baf2IslandUnreadable,
        fr = rr.baf2IslandCoop,
        Er = function(rr, Sr, Qr) {
          return {
            switch: rr.switch && void 0 === Sr,
            delete: rr.change && yE(Sr, Qr)
          }
        }(Sr, Ir, Zr),
        pr = jr && void 0 !== fr && void 0 === fr.baf2CoopState && "coopUnreachable" === ar,
        xr = {
          switch: XE((!jr || pr) && void 0 === Ir, pr || Er.switch),
          switchLabel: pr ? "tryAgain" : "switch",
          rename: XE(!0, Sr.rename),
          delete: XE(!jr, Er.delete),
          deleteWaits: !jr && yE(Ir, Zr),
          people: XE(void 0 !== rr.baf2IslandInvitable || Wr && jr && void 0 === Ir && void 0 === fr, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        mr = !jr && Er.delete;
      if (void 0 === fr) return Qr ? {
        ...xr,
        delete: XE(!jr, !1),
        deleteWaits: !1,
        note: mr ? {
          key: `${xE}islandsCoopKeepOwn`
        } : null
      } : xr;
      const Nr = fr.baf2CoopState,
        Ur = fr.baf2CoopMembers.length > 1,
        tr = {
          ...xr,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Nr && "member" === fr.baf2CoopRole) return {
        ...tr,
        dismiss: XE(!0, Sr.rename),
        note: {
          key: PE[Nr],
          names: {
            owner: fr.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Nr) {
        let rr = {
          key: `${xE}islandsCoopOwnLost`
        };
        return mr && Ur ? rr = {
          key: `${xE}islandsCoopDeleteMembers`
        } : mr && Qr && (rr = {
          key: `${xE}islandsCoopKeepOwn`
        }), {
          ...tr,
          delete: XE(!jr, Er.delete && !Ur && !Qr),
          deleteWaits: xr.deleteWaits && !Ur && !Qr,
          note: rr
        }
      }
      if ("member" === fr.baf2CoopRole) return {
        ...xr,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: XE(!0, jr ? Sr.switch : Sr.rename)
      };
      const hr = fr.baf2CoopManageHere;
      let zr = null;
      var Yr;
      hr || jr ? mr && Ur ? zr = {
        key: `${xE}islandsCoopDeleteMembers`
      } : mr && Qr && (zr = {
        key: `${xE}islandsCoopKeepOwn`
      }) : zr = {
        key: null !== (Yr = fr.baf2CoopLeft) && void 0 !== Yr && Yr.length ? `${xE}islandsCoopManageThereClaim` : `${xE}islandsCoopManageThere`
      };
      return {
        ...xr,
        rename: XE(!0, Sr.rename && hr),
        delete: XE(!jr, Er.delete && !Ur && !Qr),
        deleteWaits: xr.deleteWaits && !Ur && !Qr,
        people: "enabled",
        peopleLabel: "players",
        unshare: XE(hr && jr && !Ur, Sr.change),
        remove: hr,
        note: zr
      }
    }

    function RE(rr) {
      var Sr;
      const Qr = rr.baf2IslandCoop;
      if ("owner" !== (null === Qr || void 0 === Qr ? void 0 : Qr.baf2CoopRole) || void 0 !== Qr.baf2CoopState || null === (Sr = Qr.baf2CoopLeft) || void 0 === Sr || !Sr.length) return null;
      const Zr = rr.baf2IslandActive && Qr.baf2CoopManageHere;
      return {
        left: Qr.baf2CoopLeft,
        claim: Zr,
        goThere: !Zr && Qr.baf2CoopManageHere
      }
    }

    function gE(rr) {
      return rr.baf2CoopMembers.length >= rr.baf2CoopMax
    }

    function CE(rr, Sr, Qr) {
      return void 0 !== rr && Sr < rr.answer && Qr - rr.atMs < BE
    }
    const ME = "buildAFactory2Game:";

    function GE(rr, Sr) {
      return {
        onKeyDown: Qr => {
          Qr.stopPropagation(), Qr.nativeEvent.isComposing || 229 === Qr.nativeEvent.keyCode || ("Enter" === Qr.key ? (Qr.preventDefault(), rr()) : "Escape" === Qr.key && (Qr.preventDefault(), Sr()))
        }
      }
    }

    function kE(rr) {
      return {
        onKeyDown: Sr => {
          "Escape" !== Sr.key || Sr.nativeEvent.isComposing || (Sr.preventDefault(), Sr.stopPropagation(), rr())
        }
      }
    }

    function AE(rr) {
      rr.currentTarget.select()
    }

    function VE(rr, Sr) {
      (0, Zr.useEffect)((() => {
        var Qr;
        rr && (null === (Qr = Sr.current) || void 0 === Qr || Qr.scrollIntoView({
          block: "nearest"
        }))
      }), [rr, Sr])
    }

    function iE(rr) {
      const [Sr, Qr] = (0, Zr.useState)(null);
      return (0, Zr.useEffect)((() => {
        const Sr = document.querySelector(".UiRequests"),
          Zr = rr.current;
        if (!Sr || !Zr || "undefined" === typeof ResizeObserver) return;
        const Wr = () => {
          const rr = Sr.getBoundingClientRect(),
            Wr = Zr.getBoundingClientRect(),
            ar = Zr.parentElement,
            jr = ar && parseFloat(getComputedStyle(ar).paddingTop) || 0,
            Ir = function(rr, Sr, Qr, Zr) {
              if (!rr || rr.height <= 0 || rr.right <= Sr.left || rr.left >= Sr.right) return null;
              const Wr = Math.max(Zr, rr.bottom + 8);
              return {
                marginTop: Math.round(Wr - Zr),
                maxHeight: Math.max(0, Math.floor(Qr - Wr - Zr))
              }
            }(rr, Wr, window.innerHeight, jr);
          Qr((rr => (null === rr || void 0 === rr ? void 0 : rr.marginTop) === (null === Ir || void 0 === Ir ? void 0 : Ir.marginTop) && (null === rr || void 0 === rr ? void 0 : rr.maxHeight) === (null === Ir || void 0 === Ir ? void 0 : Ir.maxHeight) ? rr : Ir))
        };
        Wr();
        const ar = new ResizeObserver(Wr);
        return ar.observe(Sr), window.addEventListener("resize", Wr), () => {
          ar.disconnect(), window.removeEventListener("resize", Wr)
        }
      }), [rr]), Sr
    }

    function wE() {
      (0, Zr.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function cE(rr) {
      (0, Zr.useEffect)((() => {
        var Sr;
        null === (Sr = rr.current) || void 0 === Sr || Sr.focus()
      }), [rr])
    }

    function FE(rr) {
      const [Sr, Qr] = (0, Zr.useState)(Date.now);
      return (0, Zr.useEffect)((() => {
        const Sr = window.setInterval((() => {
          Qr(Date.now())
        }), rr);
        return () => {
          window.clearInterval(Sr)
        }
      }), [rr]), Sr
    }

    function oE(rr) {
      let {
        tier: Sr,
        t: Qr
      } = rr;
      const {
        kind: Zr,
        short: Wr
      } = hr(Sr), ar = Nr(Sr, Ur), jr = Qr(`${ME}${ar.key}`, {
        ...ar.params,
        name: Qr(`${ME}${zr(Sr).nameKey}`)
      });
      return (0, za.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, za.jsx)("span", {
          className: eW()("Baf2IslandTierPip", {
            Stage: "tier" !== Zr
          }),
          "aria-hidden": "true",
          children: Wr
        }), jr]
      })
    }

    function bE(rr) {
      let {
        note: Sr,
        className: Qr,
        t: Zr
      } = rr;
      return (0, za.jsx)("p", {
        className: eW()("Baf2IslandNote", Qr),
        children: lE(Zr, Sr.key, Sr.names, Sr.params)
      })
    }
    const JE = "buildAFactory2Game:";

    function DE(rr) {
      let {
        message: Sr,
        arrivedAtMs: Qr,
        close: Wr,
        leave: ar
      } = rr;
      const jr = qj(),
        {
          t: Ir
        } = (0, TW.E)(),
        fr = FE(1e3),
        Er = (0, Zr.useRef)(null);
      wE(), (0, Zr.useEffect)((() => {
        var rr;
        null === (rr = Er.current) || void 0 === rr || rr.focus()
      }), []);
      const pr = UE(Qr, Sr.baf2TransferInMs, fr),
        xr = Qr + Sr.baf2TransferInMs - 1e3,
        [mr, Nr] = (0, Zr.useState)(null);
      (0, Zr.useEffect)((() => {
        const rr = window.setTimeout((() => {
          Nr(xr)
        }), Math.max(0, xr - Date.now()));
        return () => {
          window.clearTimeout(rr)
        }
      }), [xr]);
      const Ur = mr === xr || fr >= xr,
        tr = Sr.baf2TransferIsland,
        hr = Sr.baf2TransferOwner;
      return (0, za.jsx)(Nj.b, {
        close: Wr,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, za.jsxs)("section", {
          ref: Er,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, za.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, za.jsxs)("div", {
              children: [(0, za.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === hr ? lE(Ir, `${JE}islandsTransferOwn`, {
                  island: tr
                }) : lE(Ir, `${JE}islandsTransfer`, {
                  island: tr,
                  owner: hr
                })
              }), (0, za.jsx)("p", {
                children: Ur ? Ir(`${JE}islandsTransferNow`) : Ir(`${JE}islandsTransferIn`, {
                  time: ta(Ir, pr)
                })
              })]
            }), (0, za.jsx)(Uj.l, {
              ariaLabel: Ir(`${JE}islandsClose`),
              onClick: Wr
            })]
          }), !Ur && (0, za.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, za.jsx)("p", {
              className: "Baf2TransferNote",
              children: Ir(`${JE}islandsTransferNote`)
            }), (0, za.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, za.jsx)(Uj.h, {
                onClick: () => {
                  jr.send("baf2coopstay"), ar()
                },
                children: Ir(`${JE}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var dE = Qr(1573),
      sE = Qr(1191),
      uE = Qr.n(sE);
    const rp = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const Sp = "buildAFactory2Game:",
      Qp = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function Zp(rr, Sr, Qr) {
      return void 0 === Sr ? Qr : "string" === typeof Sr ? Sr : Array.isArray(Sr) ? Sr.map((Sr => "string" === typeof Sr ? Sr : "translationKey" in Sr ? rr(Sr.translationKey) : "")).join("") : rr(Sr.translationKey)
    }

    function Wp(rr) {
      const Sr = {};
      for (const [Qr, Zr] of Object.entries(null !== rr && void 0 !== rr ? rr : {})) Sr[Qr] = Zr < 0 ? Ua(Zr) : Zr.toLocaleString("en-US");
      return Sr
    }

    function ap(rr, Sr) {
      const Qr = Sr ? "touch" : "mouse";
      return {
        use: rr(`${Sp}lookUse_${Qr}`),
        Use: rr(`${Sp}lookUseStart_${Qr}`)
      }
    }
    const jp = (0, Zr.memo)((function(rr) {
      let {
        item: Sr
      } = rr;
      return (0, za.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, za.jsx)(OW.d, {
          itemName: Sr,
          amount: 0
        })
      })
    }));

    function Ip(rr) {
      let {
        label: Sr,
        percent: Qr,
        progress: Zr
      } = rr;
      return (0, za.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, za.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${Sr}: ${Zr}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Qr,
          children: (0, za.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${Qr}%`
            }
          })
        }), (0, za.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Zr
        })]
      })
    }

    function fp(rr) {
      let {
        chips: Sr
      } = rr;
      return (0, za.jsx)("span", {
        className: "Baf2QuestChips",
        children: Sr.map((rr => {
          let [Sr, Qr, Zr] = rr;
          const Wr = Qr >= Zr;
          return (0, za.jsxs)("span", {
            className: eW()("Baf2QuestChip", {
              Met: Wr
            }),
            children: [(0, za.jsx)(jp, {
              item: Sr
            }), (0, za.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Wr ? `\u2713${Zr}` : `${Qr}/${Zr}`
            })]
          }, Sr)
        }))
      })
    }

    function Ep(rr, Sr) {
      const {
        key: Qr,
        params: Zr
      } = Nr(Sr, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return rr(`${Sp}${Qr}`, {
        ...Zr,
        name: rr(`${Sp}${zr(Sr).nameKey}`)
      })
    }

    function pp(rr) {
      let {
        core: Sr,
        t: Qr
      } = rr;
      const [Zr, Wr] = Sr, ar = Wr > 0 ? Math.floor(100 * Zr / Wr) : 100;
      return (0, za.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": Qr(`${Sp}questCoreLabel`, {
          have: String(Zr),
          need: String(Wr)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": ar,
        children: [(0, za.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: Qr(`${Sp}questCore`, {
            percent: String(ar)
          })
        }), (0, za.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, za.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${ar}%`
            }
          })
        })]
      })
    }

    function xp(rr) {
      let {
        rows: Sr,
        t: Qr
      } = rr;
      const Zr = Sr.filter((rr => rr.done)).length;
      return (0, za.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": Qr(`${Sp}questStepsProgress`, {
          done: String(Zr),
          total: String(Sr.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": Sr.length,
        "aria-valuenow": Zr,
        children: Sr.map((rr => (0, za.jsx)("span", {
          className: eW()("Baf2QuestSegment", {
            Done: rr.done,
            Current: rr.current
          })
        }, rr.id)))
      })
    }
    const mp = (0, Zr.memo)(Up, Np);

    function Np(rr, Sr) {
      const Qr = Qr => rr.view.itemNames[Qr] === Sr.view.itemNames[Qr];
      return rr.t === Sr.t && rr.extra === Sr.extra && (null === rr.row.item || Qr(rr.row.item)) && rr.row.madeFor.every(Qr) && rr.row.also.every(Qr) && uE()(rr.row, Sr.row)
    }

    function Up(rr) {
      let {
        row: Sr,
        view: Qr,
        t: Zr,
        extra: Wr
      } = rr;
      const {
        isTouchScreen: ar
      } = (0, zW.n)(["isTouchScreen"]), jr = Sr.item ? function(rr, Sr, Qr) {
        return 1 !== Qr && rp.has(rr) ? BW(Sr) : null
      }(Sr.key, Sr.item, Sr.total) : null, Ir = jr ? Zr(jr) : Sr.item ? Zp(Zr, Qr.itemNames[Sr.item], Sr.item) : "", fr = Sr.also.map((rr => Zp(Zr, Qr.itemNames[rr], rr))), Er = fr.join(", "), pr = function(rr, Sr) {
        var Qr;
        return Sr.length < 2 ? null !== (Qr = Sr[0]) && void 0 !== Qr ? Qr : "" : rr(`${Sp}listAnd`, {
          rest: Sr.slice(0, -1).join(rr(`${Sp}listComma`)),
          last: Sr[Sr.length - 1]
        })
      }(Zr, [Ir, ...fr]), xr = Zr(`${Sp}${Sr.key}`, {
        ...ap(Zr, ar),
        ...Wp(Sr.params),
        item: Ir,
        also: Er,
        itemList: pr,
        total: String(Sr.total)
      }), [mr, ...Nr] = xr.split("\n"), Ur = Sr.total > 1 && !Sr.done && !Sr.away;
      return (0, za.jsxs)("li", {
        className: eW()("Baf2QuestStep", {
          Done: Sr.done,
          Current: Sr.current,
          JustFinished: Sr.justFinished,
          Away: Sr.away
        }),
        children: [!Sr.done && null !== Sr.item && (0, za.jsx)(jp, {
          item: Sr.item
        }), (Sr.done || null === Sr.item) && (0, za.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: Sr.done ? "\u2713" : "\u25cb"
        }), (0, za.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, za.jsx)("strong", {
            children: mr
          }), Nr.length > 0 && (0, za.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Nr.join(" ")
          }), !Sr.done && Sr.madeFor.length > 0 && (0, za.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Zr("buildAFactory2Game:questRowFor", {
              items: Sr.madeFor.map((rr => Zp(Zr, Qr.itemNames[rr], rr))).join(" \u2192 ")
            })
          }), Ur && (0, za.jsx)(Ip, {
            label: mr,
            percent: Math.round(100 * Sr.amount / Sr.total),
            progress: `${Sr.amount.toLocaleString("en-US")}/${Sr.total.toLocaleString("en-US")}`
          }), !Sr.done && !Sr.away && Sr.chips && Sr.chips.length > 0 && (0, za.jsx)(fp, {
            chips: Sr.chips
          }), Wr]
        })]
      })
    }
    const tp = "buildAFactory2Game:",
      hp = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      zp = {
        on: `${tp}tutorialButtonOn`,
        hud: `${tp}tutorialButtonHud`,
        off: `${tp}tutorialButtonOff`
      },
      Yp = {
        on: `${tp}tutorialPickedOn`,
        hud: `${tp}tutorialPickedHud`,
        off: `${tp}tutorialPickedOff`
      };
    class np {
      constructor(rr, Sr, Qr) {
        this.commands = rr, this.quests = Sr, this.toasts = Qr
      }
      next() {
        const rr = function(rr) {
            return Hr[(Hr.indexOf(rr) + 1) % Hr.length]
          }(this.quests.get().tutorial),
          Sr = this.quests.setTutorial(rr);
        this.commands.send(`baf2tutorial ${rr} ${Sr}`), this.toasts.show({
          baf2ToastText: [(0, Rr.Sd)({
            translationKey: Yp[rr]
          }, Rr.K.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function ep(rr, Sr) {
      let [Qr, Zr] = Sr;
      return rr(`${Sp}${Qr}`, Wp(Zr))
    }

    function Kp(rr) {
      let [Sr, Qr] = rr;
      return Sr + JSON.stringify(Qr)
    }

    function yp(rr) {
      let {
        goal: Sr,
        t: Qr
      } = rr;
      return Sr ? (0, za.jsx)("span", {
        className: "Baf2BookGoal",
        children: Qr(`${Sp}${Sr}`)
      }) : null
    }

    function Bp(rr) {
      let {
        view: Sr,
        t: Qr
      } = rr;
      if (!Sr.name) return null;
      const Zr = AW(Sr.rows);
      return (0, za.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, za.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: Qr(`${Sp}currentQuest`)
        }), (0, za.jsx)("strong", {
          className: "Baf2BookTitle",
          children: ep(Qr, Sr.name)
        }), (0, za.jsx)(yp, {
          goal: Sr.goal,
          t: Qr
        }), Zr.length > 1 && (0, za.jsx)(xp, {
          rows: Zr,
          t: Qr
        }), (0, za.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: Sr.rows.map((rr => (0, za.jsx)(mp, {
            row: rr,
            view: Sr,
            t: Qr
          }, rr.id)))
        }), Sr.reward && (0, za.jsxs)("span", {
          className: "Baf2BookReward",
          children: [Qr(`${Sp}questReward`), (0, za.jsx)(jp, {
            item: Sr.reward
          }), Zp(Qr, Sr.itemNames[Sr.reward], Sr.reward)]
        })]
      })
    }

    function Tp(rr) {
      let {
        quest: Sr,
        upcoming: Qr,
        t: Zr
      } = rr;
      return (0, za.jsxs)("li", {
        className: eW()("Baf2BookQuest", {
          Done: Sr[3],
          Upcoming: Qr
        }),
        children: [(0, za.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: Sr[3] ? "\u2713" : "\u25cb"
        }), (0, za.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, za.jsx)("strong", {
            className: "Baf2BookTitle",
            children: ep(Zr, Sr)
          }), (0, za.jsx)(yp, {
            goal: Sr[2],
            t: Zr
          })]
        })]
      })
    }

    function vp(rr) {
      let {
        done: Sr,
        total: Qr,
        t: Zr
      } = rr;
      const Wr = Qr > 0 ? Math.round(100 * Sr / Qr) : 0,
        ar = Zr(`${Sp}questBookChapterProgress`, {
          done: String(Sr),
          total: String(Qr)
        });
      return (0, za.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, za.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": ar,
          "aria-valuemin": 0,
          "aria-valuemax": Qr,
          "aria-valuenow": Sr,
          children: (0, za.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Wr}%`
            }
          })
        }), (0, za.jsx)("span", {
          className: "Baf2BookProgressText",
          children: ar
        })]
      })
    }

    function Op(rr) {
      let {
        view: Sr,
        tier: Qr,
        quests: Zr,
        t: Wr
      } = rr;
      const ar = Qr === Sr.tier,
        jr = (null !== Zr && void 0 !== Zr ? Zr : []).filter((rr => !rr[4])),
        Ir = (null !== Zr && void 0 !== Zr ? Zr : []).filter((rr => rr[4])),
        fr = jr.filter((rr => rr[3])).length,
        Er = ar && Sr.name ? Kp(Sr.name) : null,
        pr = jr.findIndex((rr => !rr[3] && Kp(rr) === Er));
      return (0, za.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, za.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, za.jsx)("h3", {
            children: Ep(Wr, Qr)
          }), jr.length > 0 && (0, za.jsx)(vp, {
            done: fr,
            total: jr.length,
            t: Wr
          }), ar && Sr.core && (0, za.jsx)(pp, {
            core: Sr.core,
            t: Wr
          })]
        }), (0, za.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Zr && ar && (0, za.jsx)(Bp, {
            view: Sr,
            t: Wr
          }), jr.map(((rr, Qr) => Qr === pr ? (0, za.jsx)(Bp, {
            view: Sr,
            t: Wr
          }, Kp(rr)) : (0, za.jsx)(Tp, {
            quest: rr,
            upcoming: !rr[3],
            t: Wr
          }, Kp(rr))))]
        }), ar && Sr.side && (0, za.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, za.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Wr(`${Sp}questSide`)
          }), (0, za.jsx)("strong", {
            className: "Baf2BookTitle",
            children: ep(Wr, Sr.side.name)
          }), (0, za.jsx)(yp, {
            goal: Sr.side.goal,
            t: Wr
          }), (0, za.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, za.jsx)(mp, {
              row: Sr.side.row,
              view: Sr,
              t: Wr
            })
          })]
        }), Ir.length > 0 && (0, za.jsxs)(za.Fragment, {
          children: [(0, za.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Wr(`${Sp}questBookSidesDone`)
          }), (0, za.jsx)("ol", {
            className: "Baf2BookQuests",
            children: Ir.map((rr => (0, za.jsx)(Tp, {
              quest: rr,
              upcoming: !1,
              t: Wr
            }, Kp(rr))))
          })]
        })]
      })
    }

    function Lp(rr) {
      var Sr, Qr, ar;
      let {
        store: jr,
        tutorial: Ir,
        close: fr
      } = rr;
      const {
        t: Er
      } = (0, TW.E)(), xr = (0, dE.g)(qW, jr.get()), mr = null !== (Sr = xr.tier) && void 0 !== Sr ? Sr : 1, [Nr, Ur] = (0, Zr.useState)(null), zr = (null === Nr || void 0 === Nr ? void 0 : Nr.at) === mr ? Nr.tier : mr, Yr = (0, Zr.useRef)(null), nr = null !== xr.chapters;
      (0, Zr.useEffect)((() => {
        var rr;
        Yr.current && (Yr.current.scrollTop = 0);
        const Sr = null === (rr = Yr.current) || void 0 === rr ? void 0 : rr.querySelector(".Baf2BookQuest.Current");
        if (Yr.current && Sr) {
          const rr = Sr.getBoundingClientRect().bottom - Yr.current.getBoundingClientRect().bottom;
          rr > 0 && (Yr.current.scrollTop += Math.min(rr, Sr.getBoundingClientRect().top - Yr.current.getBoundingClientRect().top))
        }
      }), [zr, nr]);
      const er = null === (Qr = xr.chapters) || void 0 === Qr ? void 0 : Qr.find((rr => {
        let [Sr] = rr;
        return Sr === zr
      }));
      return (0, za.jsx)(Nj.b, {
        close: fr,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, za.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: Qp,
          children: [(0, za.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, za.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: Er(`${Sp}questBookTitle`)
            }), (0, za.jsx)(Uj.p, {
              className: "Baf2BookTutorialButton",
              disabled: !xr.tutorialKnown,
              ariaLabel: Er(zp[xr.tutorial]),
              title: Er(zp[xr.tutorial]),
              onClick: () => {
                Ir.next()
              },
              children: (0, za.jsx)(vW.c, {
                name: hp[xr.tutorial]
              })
            }), (0, za.jsx)(Uj.l, {
              onClick: fr
            })]
          }), (0, za.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": Er(`${Sp}questBookChapters`),
            "data-pad-initial-area": !0,
            children: Wr.slice(0, pr()).map(((rr, Sr) => {
              const Qr = Sr + 1,
                {
                  kind: Zr,
                  short: Wr
                } = hr(Qr),
                ar = tr(Qr, mr),
                jr = ar ? Er(`${Sp}coreAtomicHidden`) : Ep(Er, Qr);
              return (0, za.jsx)("li", {
                children: (0, za.jsx)("button", {
                  type: "button",
                  className: eW()({
                    Stage: "tier" !== Zr,
                    Atomic: "atomic" === Zr,
                    Current: Qr === mr,
                    Selected: Qr === zr
                  }),
                  disabled: Qr > mr,
                  "aria-pressed": Qr === zr,
                  "aria-label": jr,
                  title: ar ? void 0 : jr,
                  onClick: () => {
                    Ur({
                      tier: Qr,
                      at: mr
                    })
                  },
                  children: ar ? "?" : Wr
                })
              }, rr.nameKey)
            }))
          }), (0, za.jsxs)("div", {
            ref: Yr,
            className: "Baf2BookBody",
            children: [GW(xr) && zr === mr && (0, za.jsx)("p", {
              className: "Baf2BookEmpty",
              children: Er(`${Sp}questBookAllDone`)
            }), (0, za.jsx)(Op, {
              view: xr,
              tier: zr,
              quests: null !== (ar = null === er || void 0 === er ? void 0 : er[1]) && void 0 !== ar ? ar : null,
              t: Er
            })]
          })]
        })
      })
    }
    const lp = "buildAFactory2Game:";

    function Xp(rr) {
      let {
        tiers: Sr,
        from: Qr,
        tier: Zr,
        shown: Wr,
        eN: ar
      } = rr;
      const {
        t: jr
      } = (0, TW.E)(), Ir = Sr.map(((rr, Sr) => {
        const Ir = Qr + Sr,
          {
            kind: fr,
            short: Er
          } = hr(Ir),
          pr = tr(Ir, Zr);
        return (0, za.jsx)("li", {
          children: (0, za.jsx)("button", {
            type: "button",
            className: eW()({
              Stage: "tier" !== fr,
              Silhouette: pr,
              Reached: Ir <= Zr,
              Current: Ir === Zr,
              Next: Ir === Zr + 1,
              Selected: Ir === Wr
            }),
            disabled: pr,
            "aria-pressed": Ir === Wr,
            "aria-label": pr ? jr(`${lp}coreAtomicHidden`) : void 0,
            title: pr ? void 0 : jr(`${lp}${rr.nameKey}`),
            onClick: () => {
              ar(Ir)
            },
            children: pr ? "?" : Er
          })
        }, rr.nameKey)
      }));
      return (0, za.jsx)(za.Fragment, {
        children: Ir
      })
    }

    function Pp(rr) {
      let {
        id: Sr,
        label: Qr,
        tiers: Zr,
        from: Wr,
        ...ar
      } = rr;
      return (0, za.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, za.jsx)("span", {
          id: Sr,
          className: "Baf2CoreLadderLabel",
          children: Qr
        }), (0, za.jsx)("ol", {
          "aria-labelledby": Sr,
          children: (0, za.jsx)(Xp, {
            ...ar,
            tiers: Zr,
            from: Wr
          })
        })]
      })
    }

    function Hp(rr) {
      const {
        t: Sr
      } = (0, TW.E)(), Qr = Wr.findIndex((rr => void 0 !== rr.stage)), Zr = Wr.findIndex((rr => void 0 !== rr.reactorTier)), ar = Qr < 0 ? Wr : Wr.slice(0, Qr), jr = Qr < 0 ? [] : Wr.slice(Qr, Zr < 0 ? void 0 : Zr), fr = Zr < 0 || !Ir() ? [] : Wr.slice(Zr);
      return (0, za.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, za.jsx)(Pp, {
          ...rr,
          id: "baf2CoreTiersLabel",
          label: Sr(`${lp}coreTiersLabel`),
          tiers: ar,
          from: 1
        }), jr.length > 0 && (0, za.jsx)(Pp, {
          ...rr,
          id: "baf2CoreStagesLabel",
          label: Sr(`${lp}coreStagesLabel`),
          tiers: jr,
          from: Qr + 1
        }), fr.length > 0 && (0, za.jsx)(Pp, {
          ...rr,
          id: "baf2CoreAtomicLabel",
          label: Sr(`${lp}coreAtomicLabel`),
          tiers: fr,
          from: Zr + 1
        })]
      })
    }
    const qp = "buildAFactory2Game:";

    function Rp(rr) {
      let {
        item: Sr,
        itemNames: Qr,
        children: Zr
      } = rr;
      return (0, za.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, za.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, za.jsx)(OW.d, {
            itemName: Sr,
            amount: 0
          })
        }), (0, za.jsx)(LW.c, {
          text: Qr[Sr]
        }), Zr]
      })
    }

    function gp(rr) {
      const Sr = new Map;
      for (const {
          block: Zr
        }
        of rr.newDeposits) {
        var Qr;
        Sr.set(Zr, (null !== (Qr = Sr.get(Zr)) && void 0 !== Qr ? Qr : 0) + 1)
      }
      return [...Sr]
    }

    function Cp(rr) {
      let {
        value: Sr,
        label: Qr,
        more: Zr
      } = rr;
      return (0, za.jsxs)("li", {
        children: [(0, za.jsx)("strong", {
          children: Sr
        }), (0, za.jsx)("span", {
          children: Qr
        }), Zr > 0 && (0, za.jsxs)("em", {
          children: ["+", Zr]
        })]
      })
    }

    function Mp(rr) {
      let {
        items: Sr,
        itemNames: Qr
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)(), [ar, jr] = (0, Zr.useState)(null), Ir = null !== ar && Sr.includes(ar) ? ar : null;
      return (0, za.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, za.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Wr(`${qp}coreRewardUnlocks`)
        }), (0, za.jsx)("ul", {
          children: Sr.map((rr => (0, za.jsx)("li", {
            children: (0, za.jsx)("button", {
              type: "button",
              className: eW()("Baf2PanelIcon", {
                Picked: rr === Ir
              }),
              title: (0, sW.g)(Wr, rr),
              "aria-label": (0, sW.g)(Wr, rr),
              "aria-pressed": rr === Ir,
              onClick: () => {
                jr(rr === Ir ? null : rr)
              },
              children: (0, za.jsx)(OW.d, {
                itemName: rr,
                amount: 0
              })
            })
          }, rr)))
        }), (0, za.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== Ir && (0, za.jsxs)(za.Fragment, {
            children: [(0, za.jsx)(LW.c, {
              text: Qr[Ir]
            }), " \xb7 ", (0, za.jsx)(LW.c, {
              text: Qr[Xr(Ir)]
            })]
          }), null === Ir && Wr(`${qp}coreRecipeTap`)]
        })]
      })
    }

    function Gp(rr) {
      var Sr, Qr;
      let {
        def: Zr,
        tier: Wr,
        itemNames: ar
      } = rr;
      const {
        t: jr
      } = (0, TW.E)(), Ir = Wr > 1 ? zr(Wr - 1) : void 0, fr = Math.round(2 * Zr.islandRadius), Er = Ir ? Math.round(2 * Ir.islandRadius) : fr, pr = Wr >= 3 ? KZ(Wr) : null;
      return (0, za.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, za.jsxs)("ul", {
          className: eW()("Baf2CoreStats", {
            Four: null !== pr
          }),
          children: [(0, za.jsx)(Cp, {
            value: `${fr}\xd7${fr}`,
            label: jr(`${qp}coreStatIsland`),
            more: fr - Er
          }), (0, za.jsx)(Cp, {
            value: String(Zr.machineAllowance),
            label: jr(`${qp}coreStatMachines`),
            more: Zr.machineAllowance - (null !== (Sr = null === Ir || void 0 === Ir ? void 0 : Ir.machineAllowance) && void 0 !== Sr ? Sr : Zr.machineAllowance)
          }), (0, za.jsx)(Cp, {
            value: String(Zr.beltAllowance),
            label: jr(`${qp}coreStatBelts`),
            more: Zr.beltAllowance - (null !== (Qr = null === Ir || void 0 === Ir ? void 0 : Ir.beltAllowance) && void 0 !== Qr ? Qr : Zr.beltAllowance)
          }), null !== pr && (0, za.jsx)(Cp, {
            value: String(pr),
            label: jr(`${qp}coreStatStorage`),
            more: pr - (Ir ? KZ(Wr - 1) : pr)
          })]
        }), Zr.reward && (0, za.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, za.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: jr(`${qp}coreRewardItem`)
          }), (0, za.jsx)(Rp, {
            item: Zr.reward,
            itemNames: ar
          })]
        }), Zr.newDeposits.length > 0 && (0, za.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, za.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: jr(Zr.newDeposits.length > 1 ? `${qp}coreRewardDeposits` : `${qp}coreRewardDeposit`)
          }), gp(Zr).map((rr => {
            let [Sr, Qr] = rr;
            return (0, za.jsx)(Rp, {
              item: Sr,
              itemNames: ar,
              children: Qr > 1 && ` \xd7${Qr}`
            }, Sr)
          }))]
        }), Zr.unlocks.length > 0 && (0, za.jsx)(Mp, {
          items: Zr.unlocks,
          itemNames: ar
        }), (0, za.jsx)(kp, {
          tier: Wr
        })]
      })
    }

    function kp(rr) {
      let {
        tier: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)(), Zr = NW[Sr];
      if (!Zr) return null;
      const Wr = mW(Sr, 0, 0).barrierMax !== mW(Sr - 1, 0, 0).barrierMax;
      return (0, za.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, za.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, za.jsx)(OW.d, {
            itemName: Wr ? jW.Chestplate : aW,
            amount: 0
          })
        }), Qr(`${qp}gearPerkLine`, {
          perk: Qr(`${qp}${Zr}`)
        })]
      })
    }

    function Ap(rr, Sr) {
      return null === rr ? Sr : rr.value
    }

    function Vp(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === rr || Qr - rr.atMs >= Zr ? null : Wr(rr.value, Sr) ? rr.armed ? null : rr : rr.armed ? rr : {
        ...rr,
        armed: !0
      }
    }

    function ip(rr, Sr) {
      const Qr = Sr.filter((Sr => {
        var Qr;
        return !1 !== (null === (Qr = rr.get(Sr)) || void 0 === Qr ? void 0 : Qr.value)
      }));
      for (const [Zr, Wr] of rr) Wr.value && !Sr.includes(Zr) && Qr.push(Zr);
      return Qr
    }

    function wp(rr, Sr, Qr, Wr) {
      const [ar, jr] = (0, Zr.useState)((() => new Map)), Ir = () => {
        jr((Sr => function(rr, Sr, Qr, Zr) {
          var Wr;
          let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            jr = null;
          for (const [Ir, fr] of rr) {
            const Wr = Vp(fr, Sr(Ir), Qr, Zr, ar);
            Wr !== fr && (jr ??= new Map(rr), null === Wr ? jr.delete(Ir) : jr.set(Ir, Wr))
          }
          return null !== (Wr = jr) && void 0 !== Wr ? Wr : rr
        }(Sr, rr, Date.now(), Qr, Wr)))
      };
      (0, Zr.useEffect)((() => {
        Ir()
      }), [Sr, Qr]), (0, Zr.useEffect)((() => {
        if (0 === ar.size) return;
        const rr = Math.min(...[...ar.values()].map((rr => rr.atMs))),
          Sr = setTimeout(Ir, Math.max(0, rr + Qr - Date.now()) + 1);
        return () => {
          clearTimeout(Sr)
        }
      }), [ar, Sr, Qr]);
      return [ar, (Sr, Qr) => {
        jr((Zr => {
          const ar = new Map(Zr);
          return ar.set(Sr, function(rr, Sr, Qr) {
            return {
              value: rr,
              atMs: Qr,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(rr, Sr)
            }
          }(Qr, rr(Sr), Date.now(), Wr)), ar
        }))
      }]
    }
    const cp = "buildAFactory2Game:";

    function Fp(rr) {
      let {
        message: Sr,
        itemNames: Qr
      } = rr;
      const Wr = qj(),
        {
          t: ar
        } = (0, TW.E)(),
        [jr, Ir] = (0, Zr.useState)(!1),
        [fr, Er] = function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vj;
          const [Qr, Zr] = wp((Sr => rr.includes(Sr)), rr, Sr, Object.is);
          return [ip(Qr, rr), Zr]
        }(Sr.baf2CoreBankPaused),
        pr = new Set(fr),
        xr = [...Sr.baf2CoreBanked];
      for (const Zr of pr) xr.some((rr => {
        let [Sr] = rr;
        return Sr === Zr
      })) || xr.push([Zr, 0]);
      return 0 === xr.length ? null : (0, za.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, za.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": jr,
          onClick: () => {
            Ir(!jr)
          },
          children: [(0, za.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: ar(`${cp}coreBankedLater`)
          }), (0, za.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: xr.map((rr => {
              let [Sr, Qr] = rr;
              const Zr = pr.has(Sr);
              return (0, za.jsxs)("span", {
                className: eW()({
                  Paused: Zr
                }),
                title: Zr ? ar(`${cp}coreBankPausedTag`) : void 0,
                children: [(0, za.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, za.jsx)(OW.d, {
                    itemName: Sr,
                    amount: 0
                  })
                }), Qr, Zr && (0, za.jsx)(vW.c, {
                  name: "pause"
                })]
              }, Sr)
            }))
          }), (0, za.jsx)(vW.c, {
            name: jr ? "angle-up" : "angle-down"
          })]
        }), jr && (0, za.jsxs)(za.Fragment, {
          children: [(0, za.jsx)("ul", {
            children: xr.map((rr => {
              let [Sr, Zr] = rr;
              const jr = pr.has(Sr);
              return (0, za.jsxs)("li", {
                children: [(0, za.jsxs)(Rp, {
                  item: Sr,
                  itemNames: Qr,
                  children: [(0, za.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Zr
                  }), jr && (0, za.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: ar(`${cp}coreBankPausedTag`)
                  })]
                }), (0, za.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, za.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Zr,
                    onClick: () => {
                      Wr.send(`baf2corewithdraw ${Zr} ${Sr}`)
                    },
                    children: ar(`${cp}coreTake`)
                  }), (0, za.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Wr.send(`${er} ${Sr}`), Er(Sr, !jr)
                    },
                    children: ar(jr ? `${cp}coreBankResume` : `${cp}coreBankStop`)
                  })]
                })]
              }, Sr)
            }))
          }), (0, za.jsx)("p", {
            className: "Baf2CoreHint",
            children: ar(`${cp}coreBankNote`)
          })]
        })]
      })
    }
    const op = "buildAFactory2Game:";

    function bp(rr) {
      const Sr = Math.max(0, Math.floor(rr));
      return `${Math.floor(Sr/60)}:${String(Sr%60).padStart(2,"0")}`
    }

    function Jp(rr) {
      let {
        item: Sr
      } = rr;
      return (0, za.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, za.jsx)(OW.d, {
          itemName: Sr,
          amount: 0
        })
      })
    }

    function Dp() {
      return (0, za.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, za.jsx)(vW.c, {
          name: "bolt"
        })
      })
    }

    function dp(rr) {
      let {
        charge: Sr,
        hint: Qr,
        itemNames: Zr
      } = rr;
      const Wr = qj(),
        {
          t: ar
        } = (0, TW.E)(),
        [jr, Ir, fr, Er, pr, xr, mr] = Sr,
        [Nr, Ur] = function(rr) {
          var Sr;
          let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vj,
            Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Wr, ar] = wp((() => rr), rr, Qr, Zr);
          return [Ap(null !== (Sr = Wr.get("")) && void 0 !== Sr ? Sr : null, rr), rr => {
            ar("", rr)
          }]
        }(mr),
        tr = Nr === mr ? xr : !Nr,
        hr = Er >= pr,
        zr = jr.find((rr => {
          let [, Sr, Qr] = rr;
          return Qr < .9 * Sr
        }));
      let Yr = `${op}coreChargeWaiting`,
        nr = {};
      return hr ? Yr = `${op}coreChargeDone` : Nr ? Yr = `${op}coreChargeStopped` : tr && Qr ? (Yr = `${op}${Qr[0]}`, nr = {
        item: (0, sW.g)(ar, Qr[1])
      }) : tr && zr ? (Yr = `${op}coreChargeShort`, nr = {
        item: (0, sW.g)(ar, zr[0])
      }) : tr && Ir > 0 && !fr ? Yr = `${op}coreChargePower` : tr && (Yr = `${op}coreChargeRunning`), (0, za.jsxs)("div", {
        className: eW()("Baf2CoreCharge", {
          Waiting: !tr && !hr,
          Done: hr
        }),
        children: [(0, za.jsxs)("h4", {
          children: [ar(`${op}coreChargeTitle`), (0, za.jsx)("span", {
            children: ar(`${op}coreChargeProgress`, {
              done: bp(Er),
              need: bp(pr)
            })
          })]
        }), (0, za.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, za.jsx)("div", {
            style: {
              width: 100 * Math.min(Er, pr) / pr + "%"
            }
          })
        }), (0, za.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [jr.map((rr => {
            var Sr;
            let [Qr, Wr, jr] = rr;
            const Ir = jr >= .9 * Wr;
            return (0, za.jsxs)("li", {
              className: eW()({
                Done: Ir,
                Short: tr && !Ir
              }),
              children: [(0, za.jsx)(Jp, {
                item: Qr
              }), (0, za.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, za.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, za.jsx)(LW.c, {
                    text: null !== (Sr = Zr[Qr]) && void 0 !== Sr ? Sr : Qr
                  }), (0, za.jsx)("span", {
                    children: ar(`${op}coreChargeItem`, {
                      now: String(jr),
                      need: String(Wr)
                    })
                  })]
                }), (0, za.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, za.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*jr/Wr)}%`
                    }
                  })
                })]
              })]
            }, Qr)
          })), Ir > 0 && (0, za.jsxs)("li", {
            className: eW()("Baf2CoreChargePower", {
              Short: tr && !fr
            }),
            children: [(0, za.jsx)(Dp, {}), (0, za.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, za.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, za.jsx)("span", {
                  children: ar(`${op}coreChargePowerRow`, {
                    power: dr(Ir)
                  })
                })
              })
            })]
          })]
        }), (0, za.jsx)("p", {
          className: "Baf2CoreHint",
          children: ar(Yr, nr)
        }), !hr && (tr || Nr) && (0, za.jsx)("button", {
          type: "button",
          className: eW()("Baf2CoreChargeToggle", {
            Stopped: Nr
          }),
          onClick: () => {
            Wr.send(yr), Ur(!Nr)
          },
          children: ar(Nr ? `${op}coreChargeRestart` : `${op}coreChargeStop`)
        })]
      })
    }

    function sp(rr) {
      let {
        charge: Sr,
        reached: Qr,
        itemNames: Zr
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)();
      return (0, za.jsxs)("div", {
        className: eW()("Baf2CoreCharge", {
          Done: Qr
        }),
        children: [(0, za.jsxs)("h4", {
          children: [Wr(`${op}coreChargeTitle`), (0, za.jsx)("span", {
            children: Wr(`${op}coreChargeSpecTime`, {
              time: bp(Sr.seconds)
            })
          })]
        }), (0, za.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Sr.items.map((rr => {
            var Sr;
            let {
              item: ar,
              amount: jr
            } = rr;
            return (0, za.jsxs)("li", {
              className: eW()({
                Done: Qr
              }),
              children: [(0, za.jsx)(Jp, {
                item: ar
              }), (0, za.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, za.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, za.jsx)(LW.c, {
                    text: null !== (Sr = Zr[ar]) && void 0 !== Sr ? Sr : ar
                  }), (0, za.jsx)("span", {
                    children: Wr(`${op}coreChargeSpecItem`, {
                      need: String(jr)
                    })
                  })]
                })
              })]
            }, ar)
          })), Sr.powerPerS > 0 && (0, za.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, za.jsx)(Dp, {}), (0, za.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, za.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, za.jsx)("span", {
                  children: Wr(`${op}coreChargePowerRow`, {
                    power: dr(Sr.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const rx = "buildAFactory2Game:";

    function Sx(rr) {
      let {
        def: Sr,
        reached: Qr,
        banked: Zr,
        itemNames: Wr
      } = rr;
      const {
        t: ar
      } = (0, TW.E)();
      return (0, za.jsx)("ul", {
        className: "Baf2CoreCost",
        children: Sr.cost.map((rr => {
          let {
            item: Sr,
            amount: jr
          } = rr;
          const Ir = Qr ? 0 : Zr(Sr);
          return (0, za.jsx)("li", {
            children: (0, za.jsx)(Rp, {
              item: Sr,
              itemNames: Wr,
              children: (0, za.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: Ir > 0 ? ar(`${rx}coreBankedFor`, {
                  amount: String(Ir),
                  total: String(jr)
                }) : `\xd7${jr}`
              })
            })
          }, Sr)
        }))
      })
    }

    function Qx(rr, Sr) {
      if (Sr >= pr()) return rr(`${rx}coreMaxTier`);
      const Qr = Er[Sr + 1];
      return Qr && !Qr.startsWith("upgradeCore") ? rr(`${rx}coreGateQuest`, {
        quest: rr(`${rx}quest_${Qr}`)
      }) : rr(`${rx}coreGateClosed`)
    }

    function Zx() {
      const {
        t: rr
      } = (0, TW.E)(), Sr = qj(), Qr = (0, Zr.useRef)(null), Wr = (0, Zr.useRef)(Date.now());
      return VE(!0, Qr), (0, za.jsx)("div", {
        ref: Qr,
        className: "Baf2CoreGrow",
        children: (0, za.jsx)(Uj.p, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Wr.current >= 600 && Sr.send(nr)
          },
          children: rr(`${rx}coreGrow`)
        })
      })
    }

    function Wx(rr) {
      let {
        message: Sr,
        itemNames: Qr,
        next: Zr
      } = rr;
      const Wr = qj(),
        {
          t: ar
        } = (0, TW.E)(),
        jr = Sr.baf2CoreTier,
        Ir = Sr.baf2CoreReady,
        fr = Sr.baf2CoreNeeds.filter((rr => {
          let [, Sr, Qr, Zr] = rr;
          return Zr > 0 && Sr < Qr
        })),
        Er = Sr.baf2CoreNeeds.every((rr => {
          let [, Sr, Qr] = rr;
          return Sr >= Qr
        })),
        pr = Sr.baf2CoreKeep;
      return (0, za.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, za.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [Ir && (0, za.jsx)(Zx, {}), (0, za.jsx)("h3", {
            children: ar(`${rx}coreBring`)
          }), (0, za.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: Sr.baf2CoreNeeds.map((rr => {
              let [Sr, Zr, jr, Ir] = rr;
              return (0, za.jsxs)("li", {
                className: eW()({
                  Done: Zr >= jr
                }),
                children: [(0, za.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, za.jsx)(OW.d, {
                    itemName: Sr,
                    amount: 0
                  })
                }), (0, za.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, za.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, za.jsx)(LW.c, {
                      text: Qr[Sr]
                    }), (0, za.jsxs)("span", {
                      children: [Zr, "/", jr]
                    })]
                  }), (0, za.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, za.jsx)("div", {
                      style: {
                        width: 100 * Zr / jr + "%"
                      }
                    }), Ir > 0 && (0, za.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * Ir / jr + "%"
                      }
                    })]
                  })]
                }), Ir > 0 && Zr < jr && (0, za.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Wr.send(`${Kr} ${Sr}`)
                  },
                  children: ar(`${rx}coreDeposit`, {
                    amount: String(Ir)
                  })
                })]
              }, Sr)
            }))
          }), Sr.baf2CoreCharge && (0, za.jsx)(dp, {
            charge: Sr.baf2CoreCharge,
            hint: Sr.baf2CoreChargeHint,
            itemNames: Qr
          }), !Ir && fr.length > 1 && (0, za.jsx)(Uj.p, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Wr.send(nr)
            },
            children: ar(`${rx}coreHandOver`)
          }), !Ir && void 0 !== pr && (0, za.jsx)("p", {
            className: "Baf2CoreHint",
            children: ar(`${rx}coreKeepRest`, {
              item: (0, sW.g)(ar, pr)
            })
          }), !Ir && !Er && 0 === fr.length && void 0 === pr && (0, za.jsx)("p", {
            className: "Baf2CoreHint",
            children: ar(`${rx}coreNothingHeld`)
          }), (0, za.jsx)(Fp, {
            message: Sr,
            itemNames: Qr
          })]
        }), (0, za.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, za.jsx)("h3", {
            children: ar(`${rx}coreRewards`)
          }), (0, za.jsx)(Gp, {
            def: Zr,
            tier: jr + 1,
            itemNames: Qr
          })]
        })]
      })
    }

    function ax(rr) {
      let {
        message: Sr,
        itemNames: Qr,
        shown: Zr
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)(), ar = Sr.baf2CoreTier, jr = zr(Zr), Ir = Zr <= ar, fr = new Map(Sr.baf2CoreBanked), Er = !Yr(ar, Br(Sr)) && Zr === ar;
      return (0, za.jsxs)("div", {
        className: eW()("Baf2CoreBody", {
          Locked: !Ir
        }),
        children: [(0, za.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, za.jsx)("h3", {
            children: Wr(Ir ? `${rx}coreItTook` : `${rx}coreItNeeds`)
          }), 0 === jr.cost.length && (0, za.jsx)("p", {
            className: "Baf2CoreHint",
            children: Wr(`${rx}coreTierStart`)
          }), jr.cost.length > 0 && (0, za.jsx)(Sx, {
            def: jr,
            reached: Ir,
            banked: rr => {
              var Sr;
              return function(rr, Sr, Qr, Zr) {
                let Wr = rr;
                for (let jr = Sr + 2; jr <= Qr; jr++) {
                  var ar;
                  const rr = zr(jr).cost.find((rr => rr.item === Zr)),
                    Sr = Math.min(Wr, null !== (ar = null === rr || void 0 === rr ? void 0 : rr.amount) && void 0 !== ar ? ar : 0);
                  if (jr === Qr) return Sr;
                  Wr -= Sr
                }
                return 0
              }(null !== (Sr = fr.get(rr)) && void 0 !== Sr ? Sr : 0, ar, Zr, rr)
            },
            itemNames: Qr
          }), jr.charge && (0, za.jsx)(sp, {
            charge: jr.charge,
            reached: Ir,
            itemNames: Qr
          }), Er && (0, za.jsxs)(za.Fragment, {
            children: [(0, za.jsx)("p", {
              className: "Baf2CoreHint",
              children: Qx(Wr, ar)
            }), (0, za.jsx)(Fp, {
              message: Sr,
              itemNames: Qr
            })]
          })]
        }), (0, za.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, za.jsx)("h3", {
            children: Wr(Ir ? `${rx}coreGave` : `${rx}coreLockedRewards`)
          }), (0, za.jsx)(Gp, {
            def: jr,
            tier: Zr,
            itemNames: Qr
          })]
        })]
      })
    }

    function jx(rr, Sr) {
      const {
        key: Qr,
        params: Zr
      } = Nr(Sr - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return rr(`${rx}${Qr}`, Zr)
    }
    const Ix = "buildAFactory2Game:",
      fx = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Ex = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function px(rr) {
      let {
        view: Sr,
        close: Qr,
        askIslands: Wr
      } = rr;
      const {
        t: ar
      } = (0, TW.E)(), [jr, Ir] = (0, Zr.useState)(!1);
      (0, Zr.useEffect)((() => {
        if (!jr) return;
        const rr = window.setTimeout((() => {
          Ir(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(rr)
        }
      }), [jr]);
      const {
        message: fr,
        itemNames: Er
      } = Sr, pr = fr.baf2CoreTier, xr = zr(pr), mr = Yr(pr, Br(fr)), [tr, hr] = fr.baf2CoreMachines, [nr, er] = fr.baf2CoreBelts, Kr = fr.baf2CoreStorage, yr = fr.baf2CoreReady, [Tr, vr] = (0, Zr.useState)(null), Or = (null === Tr || void 0 === Tr ? void 0 : Tr.at) === pr && Tr.ready === yr ? Tr.tier : mr ? pr + 1 : pr;
      let Lr = "coreTierLocked";
      Or <= pr ? Lr = "coreTierReached" : Or === pr + 1 && (Lr = "coreTierNext");
      const lr = ar(`${Ix}${zr(Or).nameKey}`),
        Xr = Or === pr + 1 ? mr : null,
        Pr = Nr(Or, {
          tier: Lr,
          stage: fx[Lr],
          atomic: Ex[Lr]
        }),
        Hr = ar(`${Ix}${Pr.key}`, {
          ...Pr.params,
          name: lr
        }),
        qr = Nr(pr, Ur),
        Rr = ar(`${Ix}${qr.key}`, {
          ...qr.params,
          name: ar(`${Ix}${xr.nameKey}`)
        });
      return (0, za.jsx)(Nj.b, {
        close: Qr,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, za.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, za.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, za.jsxs)("div", {
              children: [(0, za.jsx)("h2", {
                id: "baf2CoreTitle",
                children: ar(`${Ix}coreTitle`)
              }), void 0 !== fr.baf2CoreIslandName && (0, za.jsx)("p", {
                className: "Baf2CoreIsland",
                children: fr.baf2CoreIslandName
              }), (0, za.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, za.jsx)("span", {
                  children: Rr
                }), (0, za.jsx)("span", {
                  className: eW()({
                    Full: tr >= hr
                  }),
                  children: ar(`${Ix}coreMachineCount`, {
                    amount: String(tr),
                    total: String(hr)
                  })
                }), (0, za.jsx)("span", {
                  className: eW()({
                    Full: nr >= er
                  }),
                  children: ar(`${Ix}coreBeltCount`, {
                    amount: String(nr),
                    total: String(er)
                  })
                }), void 0 !== Kr && (0, za.jsx)("span", {
                  className: eW()({
                    Full: Kr[0] >= Kr[1]
                  }),
                  children: ar(`${Ix}coreStorageCount`, {
                    amount: String(Kr[0]),
                    total: String(Kr[1])
                  })
                })]
              })]
            }), (0, za.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [fr.baf2CoreIslands && (0, za.jsx)(Uj.h, {
                className: "Baf2CoreIslandsButton",
                disabled: jr,
                onClick: () => {
                  Ir(!0), Wr()
                },
                children: ar(`${Ix}islandsOpenButton`)
              }), (0, za.jsx)(Uj.l, {
                onClick: Qr
              })]
            })]
          }), (0, za.jsx)(Hp, {
            tier: pr,
            shown: Or,
            eN: rr => {
              vr({
                tier: rr,
                at: pr,
                ready: yr
              })
            }
          }), (0, za.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Hr, Or > pr + 1 && (0, za.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: jx(ar, Or)
            })]
          }), 6 === Or && Or > pr && (0, za.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: ar(`${Ix}coreStagesNote`)
          }), 11 === Or && Or > pr && (0, za.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: ar(`${Ix}coreAtomicNote`)
          }), Xr && (0, za.jsx)(Wx, {
            message: fr,
            itemNames: Er,
            next: Xr
          }), !Xr && (0, za.jsx)(ax, {
            message: fr,
            itemNames: Er,
            shown: Or
          })]
        })
      })
    }
    const xx = {
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
    const mx = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: Qa,
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

    function Nx(rr) {
      return rr.baf2DropCometOreOnly ? "dropCometOre" : rr.baf2DropCometIsotope ? "seed" === rr.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function Ux(rr) {
      let {
        message: Sr,
        quests: Qr,
        close: Wr,
        leave: ar
      } = rr;
      const jr = qj(),
        {
          t: Ir
        } = (0, TW.E)(),
        fr = (0, dE.g)(qW, Qr.get()),
        Er = function(rr) {
          var Sr;
          if (!qr(rr.tutorial)) return null;
          const Qr = rr.rows.find((rr => rr.current)),
            Zr = Qr ? xx[Qr.key] : void 0;
          return null !== (Sr = null !== Zr && void 0 !== Zr ? Zr : rr.side ? xx[rr.side.row.key] : void 0) && void 0 !== Sr ? Sr : null
        }(fr),
        pr = null === fr.tier || aa(fr.tier),
        xr = pr ? mx : mx.filter((rr => {
          let {
            item: Sr
          } = rr;
          return Sr !== Qa
        })),
        [mr, Nr] = (0, Zr.useState)(null),
        Ur = null !== mr && void 0 !== mr ? mr : !Sr.baf2DropFoundSalvage && pr,
        tr = Sr.baf2DropRuinDistance,
        hr = Sr.baf2DropComet,
        zr = Sr.baf2DropOldWorks,
        Yr = Sr.baf2DropGrove,
        nr = function(rr) {
          return 2 + Number(void 0 !== rr.baf2DropComet) + Number(!!rr.baf2DropOwedComet || void 0 !== rr.baf2DropOwedWaitMinutes) + Number(void 0 !== rr.baf2DropDigDistance) + Number(void 0 !== rr.baf2DropOldWorks) + Number(void 0 !== rr.baf2DropGrove)
        }(Sr),
        er = rr => {
          jr.send(function(rr) {
            return `baf2drop ${rr}`
          }(rr)), ar()
        };
      let Kr = Ir("buildAFactory2Game:dropRuinNone");
      if (null !== tr) {
        let rr = Sr.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        Sr.baf2DropRuinOldWorks && (rr = "dropRuinOldWorks");
        const Qr = void 0 === Sr.baf2DropRuinCluster ? Ir("buildAFactory2Game:dropRuinOpen") : Ir("buildAFactory2Game:dropRuinCluster", {
          count: String(Sr.baf2DropRuinCluster)
        });
        Kr = `${Ir(`buildAFactory2Game:${rr}`,{distance:String(tr)})} ${Qr}`
      }
      let yr = Ir("buildAFactory2Game:dropBelowDescription");
      void 0 !== Sr.baf2DropBelowLook && (yr = Ir("buildAFactory2Game:dropBelowLook", {
        look: Ir(Sr.baf2DropBelowLook)
      }));
      const Br = "buildAFactory2Game:wildsRegion_survivorGrove" === Sr.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        Tr = ta(Ir, 60 * function(rr) {
          const [Sr, Qr] = (0, Zr.useState)((() => Date.now())), [Wr, ar] = (0, Zr.useState)(Sr);
          return (0, Zr.useEffect)((() => {
            const rr = Date.now();
            Qr(rr), ar(rr)
          }), [rr]), (0, Zr.useEffect)((() => {
            const rr = window.setInterval((() => {
              ar(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(rr)
            }
          }), []), Math.max(1, rr.baf2DropRenewMinutes - Math.floor((Wr - Sr) / 6e4))
        }(Sr)),
        vr = function(rr, Sr, Qr) {
          return "ruin" === rr && !Qr || "owed" === rr && !Sr.baf2DropOwedComet ? null : rr
        }(Er, Sr, null !== tr),
        Or = function(rr) {
          for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
          return eW()("Baf2DropTile", ...Qr, {
            Wanted: vr === rr
          })
        };
      return (0, za.jsx)(Nj.b, {
        close: Wr,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, za.jsxs)("section", {
          className: eW()("Baf2Panel Baf2DropMap", {
            Many: nr >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, za.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, za.jsxs)("div", {
              children: [(0, za.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: Ir("buildAFactory2Game:dropMapTitle")
              }), (0, za.jsx)("p", {
                children: Ir("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, za.jsx)(Uj.l, {
              onClick: Wr
            })]
          }), (0, za.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== hr && (0, za.jsxs)(Uj.y, {
              className: Or("comet", "Baf2DropComet"),
              onClick: () => {
                er("comet")
              },
              children: [(0, za.jsx)("strong", {
                children: Ir("buildAFactory2Game:dropComet")
              }), (0, za.jsx)("span", {
                children: Ir(`buildAFactory2Game:${Nx(Sr)}`, {
                  distance: String(hr)
                })
              })]
            }), Sr.baf2DropOwedComet && (0, za.jsxs)(Uj.y, {
              className: Or("owed", "Baf2DropComet"),
              onClick: () => {
                er("owed")
              },
              children: [(0, za.jsx)("strong", {
                children: Ir("buildAFactory2Game:dropOwedComet")
              }), (0, za.jsx)("span", {
                children: Sr.baf2DropOwedIsotope ? Ir("buildAFactory2Game:dropOwedIsotopeDescription") : Ir("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== Sr.baf2DropOwedWaitMinutes && (0, za.jsxs)(Uj.y, {
              className: Or("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, za.jsx)("strong", {
                children: Ir("buildAFactory2Game:dropOwedComet")
              }), (0, za.jsx)("span", {
                children: Ir("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(Sr.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, za.jsxs)(Uj.h, {
              className: Or("below"),
              onClick: () => {
                er("below")
              },
              children: [(0, za.jsx)("strong", {
                children: Ir("buildAFactory2Game:dropBelow")
              }), (0, za.jsx)("span", {
                children: yr
              })]
            }), void 0 !== Sr.baf2DropDigDistance && (0, za.jsxs)(Uj.u, {
              className: Or("dig"),
              onClick: () => {
                er("dig")
              },
              children: [(0, za.jsx)("strong", {
                children: Ir("buildAFactory2Game:dropDig")
              }), (0, za.jsx)("span", {
                children: Ir("buildAFactory2Game:dropDigDescription", {
                  distance: String(Sr.baf2DropDigDistance),
                  y: Ua(Sr.baf2DropDigY)
                })
              })]
            }), void 0 !== Yr && (0, za.jsxs)(Uj.u, {
              className: Or("grove", "Baf2DropGrove"),
              onClick: () => {
                er("grove")
              },
              children: [(0, za.jsx)("strong", {
                children: Ir("buildAFactory2Game:dropGrove")
              }), (0, za.jsx)("span", {
                children: Ir(`buildAFactory2Game:${Br}`, {
                  distance: String(Yr)
                })
              })]
            }), (0, za.jsxs)(Uj.p, {
              className: Or("ruin"),
              disabled: null === tr,
              onClick: () => {
                er("ruin")
              },
              children: [(0, za.jsx)("strong", {
                children: Ir("buildAFactory2Game:dropRuin")
              }), (0, za.jsx)("span", {
                children: Kr
              })]
            }), void 0 !== zr && (0, za.jsxs)(Uj.L, {
              className: Or("works"),
              onClick: () => {
                er("works")
              },
              children: [(0, za.jsx)("strong", {
                children: Ir("buildAFactory2Game:dropOldWorks")
              }), (0, za.jsx)("span", {
                children: Ir("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(zr)
                })
              })]
            })]
          }), (0, za.jsx)("p", {
            className: "Baf2DropRenew",
            children: Ir("buildAFactory2Game:dropRenew", {
              time: Tr
            })
          }), (0, za.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: Ur,
            onToggle: rr => {
              rr.currentTarget.open !== Ur && Nr(rr.currentTarget.open)
            },
            children: [(0, za.jsx)("summary", {
              children: Ir("buildAFactory2Game:dropSalvageWhat")
            }), (0, za.jsx)("p", {
              children: Ir("buildAFactory2Game:dropSalvageIntro")
            }), (0, za.jsx)("ul", {
              children: xr.map((rr => {
                let {
                  item: Sr,
                  nameKey: Qr,
                  useKey: Zr,
                  params: Wr
                } = rr;
                return (0, za.jsxs)("li", {
                  children: [(0, za.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, za.jsx)(OW.d, {
                      itemName: Sr,
                      amount: 0
                    })
                  }), (0, za.jsxs)("span", {
                    children: [(0, za.jsx)("strong", {
                      children: Ir(Qr)
                    }), ": ", Ir(Zr, Wr)]
                  })]
                }, Sr)
              }))
            })]
          })]
        })
      })
    }
    const tx = "buildAFactory2Game:";

    function hx(rr, Sr) {
      return rr.sendIslandEdit(`baf2coopleave ${Sr.baf2IslandId}`)
    }

    function zx(rr) {
      let {
        card: Sr,
        canRename: Qr,
        done: Wr,
        t: ar
      } = rr;
      const jr = qj(),
        [Ir, fr] = (0, Zr.useState)(Sr.baf2IslandName),
        Er = tE(Ir),
        pr = "" === Er || hE(Er),
        xr = () => {
          !pr && Qr && (Er !== Sr.baf2IslandName ? Wr(jr.sendIslandEdit(`baf2islandrename ${Sr.baf2IslandId} ${Er}`)) : Wr(null))
        },
        mr = () => {
          Wr(null)
        };
      return (0, za.jsxs)("div", {
        className: "Baf2IslandForm",
        ...kE(mr),
        children: [(0, za.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [ar(`${tx}islandsRenameLabel`), (0, za.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Ir,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: AE,
            onChange: rr => {
              fr(rr.target.value)
            },
            ...GE(xr, mr)
          })]
        }), "" === Er && (0, za.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: ar(`${tx}islandsRenameEmpty`)
        }), hE(Er) && (0, za.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: ar(`${tx}islandsNameReserved`)
        }), (0, za.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, za.jsx)(Uj.u, {
            disabled: pr || !Qr,
            onClick: xr,
            children: ar(`${tx}islandsRenameSave`)
          }), (0, za.jsx)(Uj.h, {
            onClick: mr,
            children: ar(`${tx}islandsCancel`)
          })]
        })]
      })
    }

    function Yx(rr) {
      let {
        card: Sr,
        canDelete: Qr,
        done: Wr,
        t: ar
      } = rr;
      const jr = qj(),
        [Ir, fr] = (0, Zr.useState)(""),
        Er = function(rr, Sr) {
          return tE(rr).toLowerCase() === tE(Sr).toLowerCase()
        }(Ir, Sr.baf2IslandName),
        pr = () => {
          Er && Qr && Wr(jr.sendIslandEdit(`baf2islanddelete ${Sr.baf2IslandId}`))
        },
        xr = () => {
          Wr(null)
        },
        mr = LE("name"),
        [Nr, Ur = ""] = ar(`${tx}islandsDeleteConfirm`, {
          name: mr
        }).split(mr);
      return (0, za.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...kE(xr),
        children: [(0, za.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, za.jsxs)("span", {
            children: [Nr, (0, za.jsx)("strong", {
              children: Sr.baf2IslandName
            }), Ur]
          }), (0, za.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Ir,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: AE,
            onChange: rr => {
              fr(rr.target.value)
            },
            ...GE(pr, xr)
          })]
        }), RE(Sr) && (0, za.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ar(`${tx}islandsDeleteLeftBack`)
        }), (0, za.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, za.jsx)(Uj.L, {
            disabled: !Er || !Qr,
            onClick: pr,
            children: ar(`${tx}islandsDeleteForGood`)
          }), (0, za.jsx)(Uj.h, {
            onClick: xr,
            children: ar(`${tx}islandsCancel`)
          })]
        })]
      })
    }

    function nx(rr) {
      let {
        members: Sr,
        t: Qr
      } = rr;
      const Zr = Sr.length;
      return (0, za.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, za.jsxs)("span", {
          children: [1 === Zr ? Qr(`${tx}islandsPlayersOne`) : Qr(`${tx}islandsPlayers`, {
            count: String(Zr)
          }), " "]
        }), Sr.map(((rr, Sr) => (0, za.jsxs)("span", {
          className: eW()("Baf2IslandMember", {
            Here: rr.baf2MemberHere
          }),
          title: rr.baf2MemberHere ? Qr(`${tx}islandsPlayerHere`) : void 0,
          children: [rr.baf2MemberName, Sr < Zr - 1 ? ", " : ""]
        }, rr.baf2MemberKey)))]
      })
    }

    function ex(rr) {
      let {
        card: Sr,
        answered: Qr,
        nowMs: Wr,
        t: ar
      } = rr;
      const jr = qj(),
        [Ir, fr] = (0, Zr.useState)(new Map),
        Er = RE(Sr);
      if (!Er) return null;
      return (0, za.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, za.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: ar(`${tx}islandsLeftTitle`)
        }), (0, za.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Er.left.map((rr => {
            const Zr = rr.baf2LeftKey,
              pr = CE(Ir.get(Zr), Qr, Wr),
              xr = function(rr) {
                return 1 === rr ? [`${xE}islandsLeftItemsOne`] : [`${xE}islandsLeftItems`, {
                  count: String(rr)
                }]
              }(rr.baf2LeftItems);
            return (0, za.jsx)("li", {
              className: eW()("Baf2IslandPerson", {
                Pending: pr
              }),
              children: (0, za.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, za.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: rr.baf2LeftName
                }), (0, za.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: ar(xr[0], xr[1])
                }), Er.claim && (0, za.jsx)(Uj.u, {
                  className: "Baf2IslandPersonButton",
                  disabled: pr,
                  onClick: () => {
                    (rr => {
                      const Qr = jr.sendIslandEdit(`baf2coopclaim ${Sr.baf2IslandId} ${rr}`);
                      fr((Sr => new Map(Sr).set(rr, {
                        atMs: Date.now(),
                        answer: Qr
                      })))
                    })(Zr)
                  },
                  children: ar(`${tx}islandsClaim`)
                })]
              })
            }, Zr)
          }))
        }), Er.goThere && (0, za.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ar(`${tx}islandsClaimGoThere`)
        })]
      })
    }

    function Kx(rr) {
      let {
        card: Sr,
        view: Qr,
        blocked: Wr,
        maxIslands: ar,
        answered: jr,
        nowMs: Ir,
        done: fr,
        openSocial: Er,
        t: pr
      } = rr;
      const xr = qj(),
        [mr, Nr] = (0, Zr.useState)(new Map),
        [Ur, tr] = (0, Zr.useState)(new Map),
        [hr, zr] = (0, Zr.useState)(null),
        Yr = (0, Zr.useRef)(null);
      cE(Yr);
      const nr = Sr.baf2IslandId,
        er = Sr.baf2IslandCoop,
        Kr = null !== er && void 0 !== er && er.baf2CoopMembers.some((rr => rr.baf2MemberKey === hr)) ? hr : null,
        yr = function(rr, Sr) {
          const Qr = rr.baf2IslandCoop;
          return Qr && gE(Qr) || null !== Sr ? void 0 : rr.baf2IslandInvitable
        }(Sr, Wr),
        Br = function(rr, Sr) {
          const Qr = rr.baf2IslandCoop;
          return Qr && gE(Qr) ? {
            key: `${xE}islandsCoopFull`,
            params: {
              max: String(Qr.baf2CoopMax)
            }
          } : void 0 !== rr.baf2IslandInvitable && null === Sr || Qr && !Qr.baf2CoopManageHere ? null : "degraded" === Sr || "stuck" === Sr ? {
            key: `${xE}islandsInviteNotLoaded`
          } : null === Sr || function(rr) {
            return "notHome" === rr || "wilds" === rr || "visiting" === rr
          }(Sr) || eE(Sr) ? {
            key: `${xE}islandsInviteGoThere`
          } : {
            key: `${xE}islandsInviteBusy`
          }
        }(Sr, Wr),
        Tr = () => {
          var rr;
          zr(null), null === (rr = Yr.current) || void 0 === rr || rr.focus()
        };
      return (0, za.jsxs)("div", {
        ref: Yr,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...kE(null === Kr ? fr : Tr),
        children: [er && (0, za.jsxs)(za.Fragment, {
          children: [(0, za.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: pr(`${tx}islandsPlayersTitle`, {
              count: String(er.baf2CoopMembers.length),
              max: String(er.baf2CoopMax)
            })
          }), (0, za.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: er.baf2CoopMembers.map(((rr, Sr) => {
              const Zr = rr.baf2MemberKey,
                Wr = CE(mr.get(Zr), jr, Ir);
              return (0, za.jsxs)("li", {
                className: eW()("Baf2IslandPerson", {
                  Pending: Wr
                }),
                children: [(0, za.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, za.jsx)("span", {
                    className: eW()("Baf2IslandPersonName", {
                      Here: rr.baf2MemberHere
                    }),
                    children: rr.baf2MemberName
                  }), rr.baf2MemberHere && (0, za.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: pr(`${tx}islandsPlayerHere`)
                  }), 0 === Sr && (0, za.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: pr(`${tx}islandsPlayerOwner`)
                  }), Qr.remove && Sr > 0 && !Wr && Kr !== Zr && (0, za.jsx)(Uj.O, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var rr;
                      zr(Zr), null === (rr = Yr.current) || void 0 === rr || rr.focus()
                    },
                    children: pr(`${tx}islandsRemove`)
                  })]
                }), Kr === Zr && (0, za.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, za.jsx)("p", {
                    children: lE(pr, `${tx}islandsRemoveConfirm`, {
                      player: rr.baf2MemberName
                    })
                  }), (0, za.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, za.jsx)(Uj.L, {
                      onClick: () => {
                        (rr => {
                          const Sr = xr.sendIslandEdit(`baf2coopremove ${nr} ${rr.baf2MemberKey}`);
                          Nr((Qr => new Map(Qr).set(rr.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: Sr
                          }))), Tr()
                        })(rr)
                      },
                      children: pr(`${tx}islandsRemoveYes`)
                    }), (0, za.jsx)(Uj.h, {
                      onClick: Tr,
                      children: pr(`${tx}islandsCancel`)
                    })]
                  })]
                })]
              }, Zr)
            }))
          })]
        }), (void 0 !== yr || null !== Br) && (0, za.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: pr(`${tx}islandsInviteTitle`)
        }), !er && (void 0 !== yr || null !== Br) && (0, za.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: pr(`${tx}islandsInviteShareNote`)
        }), 0 === (null === yr || void 0 === yr ? void 0 : yr.length) && (0, za.jsx)(yx, {
          openSocial: Er,
          t: pr
        }), void 0 !== yr && yr.length > 0 && (0, za.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: yr.map((rr => {
            const Sr = !0 === rr.baf2InvitableSent || CE(Ur.get(rr.baf2InvitableId), jr, Ir);
            return (0, za.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, za.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, za.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: rr.baf2InvitableName
                }), rr.baf2InvitableFull && !Sr && (0, za.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: pr(`${tx}islandsInviteTheirFull`, {
                    max: String(ar)
                  })
                }), (Sr || !rr.baf2InvitableFull) && (0, za.jsx)(Uj.u, {
                  className: "Baf2IslandPersonButton",
                  disabled: Sr,
                  onClick: () => {
                    (rr => {
                      const Sr = xr.sendIslandEdit(`baf2coopinvite ${nr} ${rr}`);
                      tr((Qr => new Map(Qr).set(rr, {
                        atMs: Date.now(),
                        answer: Sr
                      })))
                    })(rr.baf2InvitableId)
                  },
                  children: pr(Sr ? `${tx}islandsInvited` : `${tx}islandsInvite`)
                })]
              })
            }, rr.baf2InvitableId)
          }))
        }), Br && (0, za.jsx)(bE, {
          note: Br,
          t: pr
        }), (0, za.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, za.jsx)(Uj.h, {
            onClick: fr,
            children: pr(`${tx}islandsDone`)
          })
        })]
      })
    }

    function yx(rr) {
      let {
        openSocial: Sr,
        t: Qr
      } = rr;
      return (0, za.jsxs)(za.Fragment, {
        children: [(0, za.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Qr(Sr ? `${tx}islandsInviteNobody` : `${tx}islandsInviteNobodyGuest`)
        }), Sr && (0, za.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, za.jsx)(Uj.h, {
            onClick: Sr,
            children: Qr("socialBar:social")
          })
        })]
      })
    }

    function Bx(rr) {
      let {
        className: Sr,
        text: Qr,
        ConfirmButton: Wr,
        confirmLabel: ar,
        canConfirm: jr,
        send: Ir,
        done: fr,
        t: Er
      } = rr;
      const pr = (0, Zr.useRef)(null);
      cE(pr);
      const xr = () => {
        fr(null)
      };
      return (0, za.jsxs)("div", {
        ref: pr,
        tabIndex: -1,
        className: eW()("Baf2IslandForm", Sr),
        ...kE(xr),
        children: [(0, za.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Qr
        }), (0, za.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, za.jsx)(Wr, {
            disabled: !jr,
            onClick: () => {
              jr && fr(Ir())
            },
            children: ar
          }), (0, za.jsx)(Uj.h, {
            onClick: xr,
            children: Er(`${tx}islandsCancel`)
          })]
        })]
      })
    }

    function Tx(rr) {
      return "hidden" !== rr
    }

    function vx(rr) {
      var Sr, Qr;
      let {
        card: Wr,
        keepOwn: ar,
        blocked: jr,
        maxIslands: Ir,
        serverNowMs: fr,
        nowMs: Er,
        actions: pr,
        full: xr,
        waits: mr,
        answered: Nr,
        mode: Ur,
        setMode: tr,
        pending: hr,
        onSent: zr,
        switchTo: Yr,
        leave: nr,
        coopOn: er,
        openSocial: Kr,
        t: yr
      } = rr;
      const Br = qj(),
        Tr = Wr.baf2IslandActive,
        vr = Tr ? null : function(rr, Sr) {
          if (rr <= 0) return null;
          const Qr = Sr - rr;
          if (Qr < pa) return [`${xE}islandsPlayedJustNow`];
          if (Qr < mE) return [`${xE}islandsPlayedMinutes`, {
            minutes: String(Math.floor(Qr / pa))
          }];
          if (Qr < NE) return [`${xE}islandsPlayedHours`, {
            hours: String(Math.floor(Qr / mE))
          }];
          const Zr = Math.floor(Qr / NE);
          return 1 === Zr ? [`${xE}islandsPlayedDay`] : [`${xE}islandsPlayedDays`, {
            days: String(Zr)
          }]
        }(Wr.baf2IslandLastPlayedMs, fr),
        Or = void 0 === (Lr = Wr.baf2IslandItems) ? null : 0 === Lr ? [`${xE}islandsItemsNone`] : 1 === Lr ? [`${xE}islandsItemsOne`] : [`${xE}islandsItems`, {
          count: String(Lr)
        }];
      var Lr;
      const lr = function(rr) {
          return rr ? 1 === rr ? [`${xE}islandsWaitingOne`] : [`${xE}islandsWaiting`, {
            count: String(rr)
          }] : null
        }(Wr.baf2IslandWaiting),
        Xr = Wr.baf2IslandUnreadable,
        Pr = Wr.baf2IslandCoop,
        Hr = qE(Wr, pr, ar, xr, er, jr),
        qr = (0, Zr.useRef)(null);
      VE(null !== Ur, qr);
      const Rr = () => {
          var rr;
          tr(null), null === (rr = qr.current) || void 0 === rr || rr.focus()
        },
        gr = (rr, Sr) => {
          Rr(), null !== rr && zr(rr, Sr)
        },
        Cr = (rr, Sr) => yr(`${tx}${rr}`, {
          time: ta(yr, Sr)
        });
      return (0, za.jsxs)("li", {
        ref: qr,
        tabIndex: -1,
        className: eW()("Baf2IslandCard", {
          Active: Tr,
          Pending: hr,
          Shared: void 0 !== Pr
        }),
        children: [(0, za.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, za.jsx)("strong", {
            className: "Baf2IslandName",
            children: Wr.baf2IslandName
          }), Tr && (0, za.jsx)("span", {
            className: "Baf2IslandBadge",
            children: yr(`${tx}islandsOnThis`)
          }), Pr && (0, za.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: yr(`${tx}islandsShared`)
          })]
        }), "member" === (null === Pr || void 0 === Pr ? void 0 : Pr.baf2CoopRole) && (0, za.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: lE(yr, `${tx}islandsSharedBy`, {
            owner: Pr.baf2CoopOwner
          })
        }), void 0 !== Xr && (0, za.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: yr("newer" === Xr ? `${tx}islandsUnreadable` : `${tx}islandsDamaged`)
        }), "corrupt" === Xr && xr && (0, za.jsx)("p", {
          className: "Baf2IslandStats",
          children: yr(`${tx}islandsDamagedFull`)
        }), void 0 === Xr && (0, za.jsxs)(za.Fragment, {
          children: [(0, za.jsx)(oE, {
            tier: Wr.baf2IslandTier,
            t: yr
          }), (0, za.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, za.jsx)("span", {
              children: 1 === Wr.baf2IslandQuestsDone ? yr(`${tx}islandsQuestsDoneOne`) : yr(`${tx}islandsQuestsDone`, {
                count: String(Wr.baf2IslandQuestsDone)
              })
            }), (0, za.jsx)("span", {
              children: 1 === Wr.baf2IslandMachines ? yr(`${tx}islandsMachinesOne`) : yr(`${tx}islandsMachines`, {
                count: String(Wr.baf2IslandMachines)
              })
            }), Or && (0, za.jsx)("span", {
              children: yr(Or[0], Or[1])
            }), lr && (0, za.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: yr(lr[0], lr[1])
            }), vr && (0, za.jsx)("span", {
              children: yr(vr[0], vr[1])
            })]
          })]
        }), Pr && void 0 === Pr.baf2CoopState && "people" !== Ur && (0, za.jsx)(nx, {
          members: Pr.baf2CoopMembers,
          t: yr
        }), null === Ur && (0, za.jsx)(ex, {
          card: Wr,
          answered: Nr,
          nowMs: Er,
          t: yr
        }), Hr.note && (0, za.jsx)(bE, {
          note: Hr.note,
          className: eW()({
            Unreachable: void 0 !== (null === Pr || void 0 === Pr ? void 0 : Pr.baf2CoopState)
          }),
          t: yr
        }), "rename" === Ur && (0, za.jsx)(zx, {
          card: Wr,
          canRename: "enabled" === Hr.rename,
          done: gr,
          t: yr
        }), "delete" === Ur && (0, za.jsx)(Yx, {
          card: Wr,
          canDelete: "enabled" === Hr.delete,
          done: rr => {
            gr(rr, Pr ? "delete" : void 0)
          },
          t: yr
        }), "people" === Ur && (0, za.jsx)(Kx, {
          card: Wr,
          view: Hr,
          blocked: jr,
          maxIslands: Ir,
          answered: Nr,
          nowMs: Er,
          done: Rr,
          openSocial: Kr,
          t: yr
        }), "leave" === Ur && (0, za.jsx)(Bx, {
          className: "Leave",
          text: lE(yr, `${tx}islandsLeaveConfirm`, {
            island: Wr.baf2IslandName,
            owner: null !== (Sr = null === (Qr = Wr.baf2IslandCoop) || void 0 === Qr ? void 0 : Qr.baf2CoopOwner) && void 0 !== Sr ? Sr : ""
          }),
          ConfirmButton: Uj.L,
          confirmLabel: yr(`${tx}islandsLeaveYes`),
          canConfirm: "enabled" === Hr.leave,
          send: () => hx(Br, Wr),
          done: rr => {
            gr(rr, "leave"), null !== rr && Tr && nr()
          },
          t: yr
        }), "unshare" === Ur && (0, za.jsx)(Bx, {
          className: "Unshare",
          text: lE(yr, `${tx}islandsStopSharingConfirm`, {
            island: Wr.baf2IslandName
          }),
          ConfirmButton: Uj.u,
          confirmLabel: yr(`${tx}islandsStopSharing`),
          canConfirm: "enabled" === Hr.unshare,
          send: () => Br.sendIslandEdit(`baf2coopunshare ${Wr.baf2IslandId}`),
          done: rr => {
            gr(rr), null !== rr && nr()
          },
          t: yr
        }), null === Ur && !hr && (0, za.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Wr.baf2IslandName,
          children: [Tx(Hr.switch) && (0, za.jsx)(Uj.u, {
            disabled: "enabled" !== Hr.switch,
            onClick: Yr,
            children: "tryAgain" === Hr.switchLabel ? yr(`${tx}islandsTryAgain`) : mr.switch > 0 ? Cr("islandsSwitchIn", mr.switch) : yr(`${tx}islandsSwitch`)
          }), Tx(Hr.rename) && (0, za.jsx)(Uj.h, {
            disabled: "enabled" !== Hr.rename,
            onClick: () => {
              tr("rename")
            },
            children: yr(`${tx}islandsRename`)
          }), Tx(Hr.people) && (0, za.jsx)(Uj.h, {
            disabled: "enabled" !== Hr.people,
            onClick: () => {
              tr("people")
            },
            children: yr("players" === Hr.peopleLabel ? `${tx}islandsPlayersButton` : `${tx}islandsInviteButton`)
          }), Tx(Hr.unshare) && (0, za.jsx)(Uj.h, {
            disabled: "enabled" !== Hr.unshare,
            onClick: () => {
              tr("unshare")
            },
            children: yr(`${tx}islandsStopSharing`)
          }), Tx(Hr.dismiss) && (0, za.jsx)(Uj.h, {
            disabled: "enabled" !== Hr.dismiss,
            onClick: () => {
              zr(hx(Br, Wr), "dismiss"), Tr && nr()
            },
            children: yr(`${tx}islandsDismiss`)
          }), Tx(Hr.leave) && (0, za.jsx)(Uj.O, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Hr.leave,
            onClick: () => {
              tr("leave")
            },
            children: Tr && mr.switch > 0 ? Cr("islandsLeaveIn", mr.switch) : yr(`${tx}islandsLeave`)
          }), Tx(Hr.delete) && (0, za.jsx)(Uj.O, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Hr.delete,
            onClick: () => {
              tr("delete")
            },
            children: mr.change > 0 && Hr.deleteWaits ? Cr("islandsDeleteIn", mr.change) : yr(`${tx}islandsDelete`)
          })]
        })]
      })
    }
    const Ox = "buildAFactory2Game:";

    function Lx(rr) {
      let {
        invite: Sr,
        actions: Qr,
        full: Wr,
        maxIslands: ar,
        waitSeconds: jr,
        focus: Ir,
        focused: fr,
        join: Er,
        decline: pr,
        t: xr
      } = rr;
      const [mr, Nr] = (0, Zr.useState)(!1), Ur = (0, Zr.useRef)(null);
      VE(mr, Ur), (0, Zr.useEffect)((() => {
        var rr;
        Ir && (Nr(!0), null === (rr = Ur.current) || void 0 === rr || rr.focus(), fr())
      }), [Ir, fr]);
      const tr = function(rr, Sr, Qr, Zr, Wr) {
          return Qr ? {
            join: !1,
            note: {
              key: `${xE}islandsJoinTooMany`,
              params: {
                max: String(Zr)
              }
            }
          } : rr.baf2InvitePlayers >= Wr ? {
            join: !1,
            note: {
              key: `${xE}islandsJoinFull`
            }
          } : {
            join: Sr.switch,
            note: null
          }
        }(Sr, Qr, Wr, ar, 10),
        hr = Sr.baf2InviteIsland,
        zr = Sr.baf2InvitePlayers,
        Yr = () => {
          var rr;
          Nr(!1), null === (rr = Ur.current) || void 0 === rr || rr.focus()
        },
        nr = jr > 0 && null === tr.note ? xr(`${Ox}islandsJoinIn`, {
          time: ta(xr, jr)
        }) : xr(`${Ox}islandsJoin`);
      return (0, za.jsxs)("li", {
        ref: Ur,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...mr ? kE(Yr) : {},
        children: [(0, za.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, za.jsx)("strong", {
            className: "Baf2IslandName",
            children: hr
          })
        }), (0, za.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: lE(xr, `${Ox}islandsInvitedBy`, {
            owner: Sr.baf2InviteOwner
          })
        }), (0, za.jsx)(oE, {
          tier: Sr.baf2InviteTier,
          t: xr
        }), (0, za.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, za.jsx)("span", {
            children: 1 === zr ? xr(`${Ox}islandsPlayersCountOne`) : xr(`${Ox}islandsPlayersCount`, {
              count: String(zr)
            })
          })
        }), tr.note && (0, za.jsx)(bE, {
          note: tr.note,
          t: xr
        }), mr && (0, za.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: lE(xr, `${Ox}islandsJoinConfirm`, {
            island: hr
          })
        }), !mr && (0, za.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": hr,
          children: [(0, za.jsx)(Uj.u, {
            disabled: !tr.join,
            onClick: () => {
              var rr;
              Nr(!0), null === (rr = Ur.current) || void 0 === rr || rr.focus()
            },
            children: nr
          }), (0, za.jsx)(Uj.h, {
            onClick: pr,
            children: xr(`${Ox}islandsDecline`)
          })]
        }), mr && (0, za.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, za.jsx)(Uj.u, {
            disabled: !tr.join,
            onClick: Er,
            children: xr(`${Ox}islandsJoinYes`)
          }), (0, za.jsx)(Uj.h, {
            onClick: Yr,
            children: xr(`${Ox}islandsCancel`)
          })]
        })]
      })
    }

    function lx(rr) {
      let {
        invites: Sr,
        actions: Qr,
        full: Zr,
        maxIslands: Wr,
        waitSeconds: ar,
        focus: jr,
        focused: Ir,
        leave: fr,
        declined: Er,
        t: pr
      } = rr;
      const xr = qj();
      return (0, za.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, za.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: pr(`${Ox}islandsInvitesTitle`)
        }), (0, za.jsx)("ul", {
          className: "Baf2IslandCards",
          children: Sr.map((rr => {
            const Sr = rr.baf2InviteId;
            return (0, za.jsx)(Lx, {
              invite: rr,
              actions: Qr,
              full: Zr,
              maxIslands: Wr,
              waitSeconds: ar,
              focus: jr === Sr,
              focused: Ir,
              join: () => {
                xr.send(`baf2coopaccept ${Sr}`), fr()
              },
              decline: () => {
                xr.send(`baf2coopdecline ${Sr}`), Er(Sr)
              },
              t: pr
            }, Sr)
          }))
        })]
      })
    }
    const Xx = "buildAFactory2Game:";

    function Px(rr) {
      let {
        cards: Sr,
        activeName: Qr,
        canStart: Wr,
        waitSeconds: ar,
        leave: jr,
        t: Ir
      } = rr;
      const fr = qj(),
        [Er, pr] = (0, Zr.useState)(!1),
        [xr, mr] = (0, Zr.useState)(""),
        Nr = (0, Zr.useRef)(null);
      VE(Er, Nr), (0, Zr.useEffect)((() => {
        var rr;
        Er && (null === (rr = Nr.current) || void 0 === rr || rr.focus())
      }), [Er]);
      const Ur = zE(Sr),
        tr = tE(xr),
        hr = hE(tr),
        zr = () => {
          Wr && !hr && (fr.send("" === tr || tr === Ur ? Jr : `${Jr} ${tr}`), jr())
        },
        Yr = () => {
          var rr;
          pr(!1), null === (rr = Nr.current) || void 0 === rr || rr.focus()
        };
      return (0, za.jsxs)("li", {
        ref: Nr,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Er ? kE(Yr) : {},
        children: [(0, za.jsx)("strong", {
          className: "Baf2IslandName",
          children: Ir(`${Xx}islandsNewTitle`)
        }), !Er && (0, za.jsx)("p", {
          className: "Baf2IslandStats",
          children: Ir(`${Xx}islandsNewNote`)
        }), Er && (0, za.jsxs)(za.Fragment, {
          children: [(0, za.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: lE(Ir, `${Xx}islandsNewConfirm`, {
              name: Qr
            })
          }), (0, za.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [Ir(`${Xx}islandsNewNameLabel`), (0, za.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: xr,
              placeholder: Ur,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: AE,
              onChange: rr => {
                mr(rr.target.value)
              },
              ...GE(zr, Yr)
            })]
          }), hr && (0, za.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: Ir(`${Xx}islandsNameReserved`)
          })]
        }), (0, za.jsxs)("div", {
          className: eW()("Baf2IslandButtons", {
            Stacked: Er
          }),
          children: [(0, za.jsx)(Uj.u, {
            disabled: !Wr || Er && hr,
            onClick: () => {
              if (!Er) return mr(Ur), void pr(!0);
              zr()
            },
            children: ar > 0 ? Ir(`${Xx}islandsNewIn`, {
              time: ta(Ir, ar)
            }) : Ir(Er ? `${Xx}islandsNewConfirmButton` : `${Xx}islandsNew`)
          }), Er && (0, za.jsx)(Uj.h, {
            onClick: Yr,
            children: Ir(`${Xx}islandsCancel`)
          })]
        })]
      })
    }

    function Hx(rr) {
      var Sr, Qr;
      let {
        message: Wr,
        arrivedAtMs: ar,
        close: jr,
        leave: Ir,
        openSocial: fr
      } = rr;
      const Er = qj(),
        {
          t: pr
        } = (0, TW.E)(),
        xr = FE(1e3),
        [mr, Nr] = (0, Zr.useState)(null),
        [Ur, tr] = (0, Zr.useState)(new Map),
        [hr, zr] = (0, Zr.useState)(new Set),
        Yr = Wr.baf2IslandCards,
        nr = function(rr, Sr, Qr, Zr) {
          return (null !== rr && void 0 !== rr ? rr : []).filter((rr => Sr + rr.baf2InviteLeftMs > Qr && !Zr.has(rr.baf2InviteId)))
        }(Wr.baf2IslandsInvites, ar, xr, hr),
        er = nr.map((rr => rr.baf2InviteId)).join(" "),
        Kr = (0, Zr.useRef)(null),
        yr = iE(Kr);
      wE(), (0, Zr.useEffect)((() => {
        var rr, Sr;
        null !== (rr = Kr.current) && void 0 !== rr && rr.contains(document.activeElement) || (null === (Sr = Kr.current) || void 0 === Sr || Sr.focus())
      }), [Wr, er]), (0, Zr.useEffect)((() => {
        tr((rr => function(rr, Sr, Qr, Zr) {
          const Wr = new Map;
          for (const ar of Sr) {
            const Sr = rr.get(ar.baf2IslandId);
            Sr && (void 0 !== Sr.untilGone || Zr < Sr.answer) && TE(Sr, ar, Qr) && Wr.set(ar.baf2IslandId, Sr)
          }
          return Wr.size === rr.size ? rr : Wr
        }(rr, Wr.baf2IslandCards, Date.now(), Wr.baf2IslandsAnswered)))
      }), [Wr]);
      const Br = UE(ar, Wr.baf2IslandsWaitMs, xr),
        Tr = Wr.baf2IslandsBlocked,
        vr = KE(Tr, Br),
        Or = function(rr, Sr) {
          const Qr = KE(rr, 0);
          return {
            switch: Qr.switch ? Sr : 0,
            change: Qr.change ? Sr : 0
          }
        }(Tr, Br),
        Lr = Yr.length >= Wr.baf2IslandsMax,
        lr = Yr.length > 0,
        Xr = function(rr, Sr, Qr) {
          return rr + Math.max(0, Qr - Sr)
        }(Wr.baf2IslandsNowMs, ar, xr),
        Pr = null !== (Sr = null === (Qr = Yr.find((rr => rr.baf2IslandActive))) || void 0 === Qr ? void 0 : Qr.baf2IslandName) && void 0 !== Sr ? Sr : "",
        Hr = function(rr) {
          const Sr = rr.filter(HE).length;
          return Sr <= 1 && Sr < rr.length
        }(Yr),
        qr = !0 === Wr.baf2IslandsCoop,
        Rr = function(rr, Sr) {
          const Qr = rr.find((rr => rr.baf2IslandActive)),
            Zr = null === Qr || void 0 === Qr ? void 0 : Qr.baf2IslandCoop;
          return Qr && "member" === (null === Zr || void 0 === Zr ? void 0 : Zr.baf2CoopRole) ? {
            key: `${xE}islandsKeepOwnMember`,
            names: {
              owner: Zr.baf2CoopOwner,
              island: Qr.baf2IslandName
            }
          } : {
            key: Sr ? `${xE}islandsKeepOwn` : `${xE}islandsKeepOwnSolo`
          }
        }(Yr, qr),
        [gr, Cr] = (0, Zr.useState)(null);
      (0, Zr.useEffect)((() => {
        void 0 !== Wr.baf2IslandsFocusInvite && Cr(Wr.baf2IslandsFocusInvite)
      }), [Wr]);
      const Mr = (0, Zr.useCallback)((() => {
          Cr(null)
        }), []),
        Gr = mr ? Yr.find((rr => rr.baf2IslandId === mr.id)) : void 0,
        kr = mr && Gr && "hidden" !== qE(Gr, vr, Hr, Lr, qr, Tr)[mr.mode] ? mr : null;
      return (0, za.jsx)(Nj.b, {
        close: jr,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, za.jsxs)("section", {
          ref: Kr,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: yr ? {
            marginTop: `${yr.marginTop}px`,
            maxHeight: `${yr.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, za.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, za.jsxs)("div", {
              children: [(0, za.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: pr(`${Xx}islandsTitle`)
              }), lr && (0, za.jsx)("p", {
                children: pr(`${Xx}islandsSubtitle`, {
                  count: String(Yr.length),
                  max: String(Wr.baf2IslandsMax)
                })
              })]
            }), (0, za.jsx)(Uj.l, {
              ariaLabel: pr(`${Xx}islandsClose`),
              onClick: jr
            })]
          }), (0, za.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== Tr && (0, za.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: lE(pr, YE(Tr, nE(Yr)), {
                island: Pr
              })
            }), lr && nr.length > 0 && (0, za.jsx)(lx, {
              invites: nr,
              actions: vr,
              full: Lr,
              maxIslands: Wr.baf2IslandsMax,
              waitSeconds: Or.switch,
              focus: gr,
              focused: Mr,
              leave: Ir,
              declined: rr => {
                zr((Sr => new Set(Sr).add(rr)))
              },
              t: pr
            }), lr && (0, za.jsxs)(za.Fragment, {
              children: [Lr && (0, za.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: pr(`${Xx}islandsFull`, {
                  max: String(Wr.baf2IslandsMax)
                })
              }), (0, za.jsx)("p", {
                className: "Baf2IslandsNote",
                children: lE(pr, Rr.key, Rr.names)
              }), (0, za.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [Yr.map((rr => {
                  const Sr = rr.baf2IslandId;
                  return (0, za.jsx)(vx, {
                    card: rr,
                    keepOwn: Hr,
                    coopOn: qr,
                    openSocial: fr,
                    blocked: Tr,
                    maxIslands: Wr.baf2IslandsMax,
                    serverNowMs: Xr,
                    nowMs: xr,
                    actions: vr,
                    full: Lr,
                    waits: Or,
                    answered: Wr.baf2IslandsAnswered,
                    mode: (null === kr || void 0 === kr ? void 0 : kr.id) === Sr ? kr.mode : null,
                    setMode: rr => {
                      Nr(null === rr ? null : {
                        id: Sr,
                        mode: rr
                      })
                    },
                    pending: TE(Ur.get(Sr), rr, xr),
                    onSent: (Qr, Zr) => {
                      tr((Wr => {
                        const ar = {
                          atMs: Date.now(),
                          from: rr.baf2IslandName,
                          answer: Qr
                        };
                        return new Map(Wr).set(Sr, Zr ? {
                          ...ar,
                          untilGone: Zr
                        } : ar)
                      }))
                    },
                    leave: Ir,
                    switchTo: () => {
                      Er.send(`baf2islandswitch ${Sr}`), Ir()
                    },
                    t: pr
                  }, Sr)
                })), !Lr && (0, za.jsx)(Px, {
                  cards: Yr,
                  activeName: Pr,
                  canStart: vr.change,
                  waitSeconds: Or.change,
                  leave: Ir,
                  t: pr
                })]
              })]
            })]
          })]
        })
      })
    }
    var qx = Qr(4205);
    const Rx = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        oZ: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      gx = Object.keys(Rx),
      Cx = new Set([...Object.keys(JS), ...[...RS.Press.recipes, ...RS["Wire Mill"].recipes].map((rr => rr.output))]),
      Mx = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      Gx = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      kx = / Bar$|Alloy$/,
      Ax = /Porkchop|Beef|Mutton|Venison|Steak/,
      Vx = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const ix = (0, Zr.memo)((function(rr) {
      let {
        item: Sr,
        name: Qr,
        amount: Zr,
        selected: Wr,
        small: ar,
        onPick: jr
      } = rr;
      return (0, za.jsxs)("button", {
        type: "button",
        className: eW()("Baf2TermTile", {
          On: Wr,
          Small: ar
        }),
        "aria-label": `${Qr}: ${Zr}`,
        "aria-pressed": Wr,
        onClick: () => {
          jr(Sr)
        },
        children: [(0, za.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, za.jsx)(OW.d, {
            itemName: Sr,
            amount: 0
          })
        }), (0, za.jsx)("span", {
          className: "Baf2TermCount",
          children: Na(Zr, 1e4)
        }), !ar && (0, za.jsx)("span", {
          className: "Baf2TermName",
          children: Qr
        })]
      })
    }));

    function wx(rr) {
      let {
        store: Sr,
        close: Qr,
        send: Wr
      } = rr;
      const {
        t: ar
      } = (0, TW.E)(), {
        isTouchScreen: jr
      } = (0, zW.n)(["isTouchScreen"]);
      ! function(rr) {
        const [Sr, Qr] = (0, Zr.useState)(rr.version);
        (0, Zr.useEffect)((() => (Qr(rr.version), rr.subscribe((() => {
          Qr(rr.version)
        })))), [rr])
      }(Sr);
      const [Ir, fr] = (0, Zr.useState)("all"), [Er, pr] = (0, Zr.useState)(!1), [xr, mr] = (0, Zr.useState)(""), [Nr, Ur] = (0, Zr.useState)(""), [tr, hr] = (0, Zr.useState)(null), [zr, Yr] = (0, Zr.useState)(!1), [nr, er, Kr] = function() {
        const rr = (0, Zr.useRef)(null),
          [Sr, Qr] = (0, Zr.useState)(!1),
          Wr = () => {
            const Sr = rr.current;
            Qr(null !== Sr && Sr.scrollLeft + Sr.clientWidth < Sr.scrollWidth - 1)
          };
        return (0, Zr.useEffect)(Wr), (0, Zr.useEffect)((() => {
          const Sr = rr.current;
          if (!Sr) return;
          const Qr = new ResizeObserver(Wr);
          return Qr.observe(Sr), () => {
            Qr.disconnect()
          }
        }), []), [rr, Sr, Wr]
      }(), yr = (0, Zr.useMemo)((() => new Map), [ar]), Br = rr => {
        let Sr = yr.get(rr);
        return void 0 === Sr && (Sr = function(rr, Sr) {
          const Qr = /^(.+) \((.+)\)$/.exec(rr);
          return Qr ? Sr(Qr[2], Qr[1]) : rr
        }((0, sW.g)(ar, rr), ((rr, Sr) => ar("buildAFactory2Game:terminalTileKind", {
          kind: rr,
          base: Sr
        }))), yr.set(rr, Sr)), Sr
      }, Tr = Sr.isReadOnly(), vr = zr && !Tr, Or = Sr.recent(), Lr = Sr.items(), lr = Nr.trim().toLowerCase(), Xr = vr ? Sr.heldItems(tr) : ("recent" === Ir ? Or : Lr).filter((rr => {
        const Sr = Br(rr);
        return ("all" === Ir || "recent" === Ir || function(rr) {
          return ja(rr) ? "farm" : Mx.test(rr) ? "nuclear" : kx.test(rr) ? "bars" : Ax.test(rr) ? "farm" : Gx.test(rr) ? "oZ" : Cx.has(rr) ? "parts" : Vx.test(rr) ? "farm" : "other"
        }(rr) === Ir) && ("" === lr || Sr.toLowerCase().includes(lr)) && ("" === xr || Sr.toUpperCase().startsWith(xr))
      })), Pr = new Set(Lr.map((rr => Br(rr).charAt(0).toUpperCase()))), Hr = rr => vr ? Sr.heldAmount(rr) : Sr.amount(rr), qr = !vr && "recent" !== Ir && Or.length > 0, Rr = function(rr, Sr) {
        return null !== rr && Sr.includes(rr) ? rr : null
      }(tr, qr ? [...Xr, ...Or] : Xr), gr = null === Rr ? 0 : Sr.amount(Rr), Cr = null === Rr ? 0 : Hr(Rr), Mr = (0, Zr.useCallback)((rr => {
        hr((Sr => Sr === rr ? null : rr))
      }), []), Gr = rr => Cr > 0 || vr && null === Rr && "fill" === rr && Xr.length > 0, kr = vr ? [
        ["one", ar("buildAFactory2Game:terminalStoreOne")],
        ["stack", ar("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", ar(null === Rr ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", ar("buildAFactory2Game:terminalTakeOne")],
        ["stack", ar("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", ar("buildAFactory2Game:terminalFill")]
      ], Ar = vr ? ar("buildAFactory2Game:terminalStoreEmpty") : "" !== xr ? ar("buildAFactory2Game:terminalEmptyLetter", {
        letter: xr
      }) : "" !== lr ? ar("buildAFactory2Game:terminalEmptySearch", {
        query: Nr
      }) : ar("buildAFactory2Game:terminalEmpty");
      return (0, za.jsx)(Nj.b, {
        close: Qr,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, za.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, za.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, za.jsxs)("div", {
              children: [(0, za.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: ar(Sr.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, za.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, za.jsx)("span", {
                  className: eW()({
                    Off: vr
                  }),
                  children: ar("buildAFactory2Game:terminalSubtitle", {
                    count: String(Sr.siloCount())
                  })
                }), !Tr && (0, za.jsx)("span", {
                  className: eW()({
                    Off: !vr
                  }),
                  children: ar("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !Tr && (0, za.jsx)(qx.d, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: ar("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: ar("buildAFactory2Game:terminalModeStore")
              }],
              value: vr ? "store" : "take",
              onChange: rr => {
                Yr("store" === rr), hr(null)
              },
              ariaLabel: ar("buildAFactory2Game:terminalModes")
            }), (0, za.jsx)(Uj.l, {
              onClick: Qr
            })]
          }), (0, za.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, za.jsxs)("div", {
              className: eW()("Baf2TermTools", {
                Hidden: vr
              }),
              children: [(0, za.jsx)("div", {
                ref: nr,
                className: eW()("Baf2TermChips", {
                  MoreRight: er
                }),
                onScroll: Kr,
                children: Er ? (0, za.jsxs)(za.Fragment, {
                  children: [(0, za.jsx)("button", {
                    type: "button",
                    "aria-label": ar("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      pr(!1), mr("")
                    },
                    children: "\u2190"
                  }), [...Pr].sort().map((rr => (0, za.jsx)("button", {
                    type: "button",
                    className: eW()({
                      On: xr === rr
                    }),
                    onClick: () => {
                      mr(xr === rr ? "" : rr)
                    },
                    children: rr
                  }, rr)))]
                }) : (0, za.jsxs)(za.Fragment, {
                  children: [(0, za.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      pr(!0)
                    },
                    children: ar("buildAFactory2Game:terminalLetters")
                  }), gx.map((rr => (0, za.jsx)("button", {
                    type: "button",
                    className: eW()({
                      On: Ir === rr
                    }),
                    onClick: () => {
                      fr(rr)
                    },
                    children: ar(Rx[rr])
                  }, rr)))]
                })
              }), !jr && (0, za.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: Nr,
                placeholder: ar("buildAFactory2Game:terminalSearch"),
                "aria-label": ar("buildAFactory2Game:terminalSearch"),
                onChange: rr => {
                  Ur(rr.target.value)
                },
                onKeyDown: rr => {
                  rr.stopPropagation()
                }
              }), (0, za.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": ar("buildAFactory2Game:terminalResort"),
                title: ar("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  Sr.resort()
                },
                children: "\u21c5"
              })]
            }), qr && (0, za.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, za.jsx)("span", {
                children: ar(Rx.recent)
              }), Or.map((rr => (0, za.jsx)(ix, {
                item: rr,
                name: Br(rr),
                amount: Sr.amount(rr),
                selected: Rr === rr,
                small: !0,
                onPick: Mr
              }, rr)))]
            }), (0, za.jsx)("div", {
              className: "Baf2TermTiles",
              children: Xr.length > 0 ? Xr.map((rr => (0, za.jsx)(ix, {
                item: rr,
                name: Br(rr),
                amount: Hr(rr),
                selected: Rr === rr,
                onPick: Mr
              }, rr))) : (0, za.jsx)("p", {
                className: "Baf2TermEmpty",
                children: Ar
              })
            }), (0, za.jsxs)("div", {
              className: eW()("Baf2TermActions", {
                Hidden: vr && 0 === Xr.length
              }),
              children: [(0, za.jsx)("span", {
                className: "Baf2TermPicked",
                children: Tr ? (0, za.jsxs)(za.Fragment, {
                  children: [null !== Rr && gr > 0 ? Br(Rr) : ar("buildAFactory2Game:terminalVisiting"), (0, za.jsx)("small", {
                    children: ar("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Rr ? (0, za.jsxs)(za.Fragment, {
                  children: [Br(Rr), (0, za.jsx)("small", {
                    children: ar("buildAFactory2Game:terminalStored", {
                      amount: gr.toLocaleString()
                    })
                  })]
                }) : ar(vr ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !Tr && kr.map((rr => {
                let [Qr, Zr] = rr;
                const ar = "fill" === Qr ? Uj.p : Uj.h;
                return (0, za.jsx)(ar, {
                  className: "Baf2TermTake",
                  disabled: !Gr(Qr),
                  onClick: () => {
                    (rr => {
                      Gr(rr) && Wr(null === Rr ? Sr.putAll() : vr ? Sr.put(rr, Rr) : Sr.take(rr, Rr))
                    })(Qr)
                  },
                  children: Zr
                }, Qr)
              }))]
            })]
          })]
        })
      })
    }

    function cx(rr) {
      let {
        kind: Sr,
        icon: Qr,
        label: Zr,
        number: Wr,
        preview: ar,
        note: jr,
        tone: Ir = null,
        share: fr,
        onExplain: Er
      } = rr;
      return (0, za.jsxs)("button", {
        type: "button",
        className: eW()("NxLane", Sr, {
          Warn: "warn" === Ir,
          Danger: "danger" === Ir
        }),
        onClick: Er,
        children: [(0, za.jsxs)("span", {
          className: "NxLaneHead",
          children: [Qr, (0, za.jsx)("span", {
            className: "NxLaneLabel",
            children: Zr
          })]
        }), (0, za.jsxs)("span", {
          className: "NxLaneNum",
          children: [Wr, ar && (0, za.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", ar]
          })]
        }), (0, za.jsx)("span", {
          className: "NxLaneNote",
          children: jr
        }), void 0 !== fr && (0, za.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, fr)) + "%"
          }
        })]
      })
    }

    function Fx(rr) {
      let {
        kind: Sr,
        step: Qr,
        short: Zr,
        planned: Wr
      } = rr;
      return (0, za.jsx)("i", {
        className: eW()("NxPipe", Sr, `Step${Qr}`, {
          Short: Zr,
          Planned: Wr
        }),
        "aria-hidden": "true"
      })
    }

    function ox(rr) {
      let {
        max: Sr,
        bands: Qr,
        ticks: Zr,
        now: Wr,
        settle: ar,
        settleTone: jr,
        onExplain: Ir
      } = rr;
      const fr = rr => Math.max(0, Math.min(Sr, rr)) / Sr * 100 + "%";
      let Er = 0;
      return (0, za.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: Ir,
        children: [(0, za.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [Qr.map((rr => {
            const Sr = {
              bottom: fr(Er),
              height: `calc(${fr(rr.upTo)} - ${fr(Er)})`
            };
            return Er = rr.upTo, (0, za.jsx)("i", {
              className: eW()("NxGaugeBand", rr.kind),
              style: Sr
            }, rr.kind)
          })), null !== Wr && (0, za.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: fr(Wr)
            }
          }), void 0 !== ar && null !== ar && (0, za.jsx)("i", {
            className: eW()("NxGaugeSettle", {
              Bad: "bad" === jr
            }),
            style: {
              bottom: fr(ar)
            }
          })]
        }), (0, za.jsx)("span", {
          className: "NxGaugeTicks",
          children: Zr.map((rr => (0, za.jsx)("small", {
            style: {
              bottom: fr(rr)
            },
            children: rr
          }, rr)))
        })]
      })
    }

    function bx(rr) {
      const [Sr, Qr] = (0, Zr.useState)(null), [Wr, ar] = (0, Zr.useState)((() => {
        try {
          return null === window.localStorage.getItem(rr)
        } catch {
          return !1
        }
      })), jr = (0, Zr.useRef)(null);
      (0, Zr.useEffect)((() => () => {
        null !== jr.current && clearTimeout(jr.current)
      }), []);
      const Ir = (0, Zr.useCallback)((Sr => {
          Qr(Sr), ar(!1);
          try {
            window.localStorage.setItem(rr, "1")
          } catch {}
          null !== jr.current && clearTimeout(jr.current), jr.current = setTimeout((() => {
            jr.current = null, Qr(null)
          }), 5e3)
        }), [rr]),
        fr = (0, Zr.useCallback)(((Sr, Qr) => {
          const Zr = `${rr}:${Sr}`;
          try {
            if (null !== window.localStorage.getItem(Zr)) return;
            window.localStorage.setItem(Zr, "1")
          } catch {
            return
          }
          Ir(Qr)
        }), [Ir, rr]);
      return {
        explained: Sr,
        hinting: Wr,
        explain: Ir,
        explainOnce: fr
      }
    }

    function Jx(rr) {
      let {
        text: Sr,
        tone: Qr,
        explained: Zr
      } = rr;
      return (0, za.jsxs)("p", {
        className: eW()("NxStatus", null === Zr ? Qr : "Explain"),
        "aria-live": "polite",
        children: [null !== Zr && (0, za.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Zr && void 0 !== Zr ? Zr : Sr]
      })
    }
    const Dx = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function dx(rr, Sr) {
      const Qr = Number(rr[Sr]);
      return 1 === Qr || 2 === Qr || 3 === Qr ? Qr : 0
    }

    function sx(rr) {
      return !!Uf("reactor", rr.baf2RxNeed) || void 0 !== rr.baf2RxLayout && rr.baf2RxNeed.some((rr => {
        let [Sr, Qr] = rr;
        return Qr > 0 && Dx.includes(Sr)
      }))
    }
    const ux = "buildAFactory2Game:";

    function rm(rr) {
      let {
        status: Sr,
        store: Qr,
        busy: Zr
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)();
      return function(rr) {
        return 0 !== (rr.baf2RxFlags & tS) && (!rr.baf2RxFormed || void 0 !== rr.baf2RxLayout)
      }(Sr) ? (0, za.jsx)(Uj.p, {
        disabled: !sx(Sr) || Zr,
        onClick: () => {
          Qr.tap("fill", (() => {
            Qr.send("fill")
          }))
        },
        children: Wr(void 0 !== Sr.baf2RxLayout ? `${ux}rxFillLayout` : `${ux}rxFill`)
      }) : null
    }

    function Sm(rr) {
      let {
        status: Sr,
        store: Qr,
        readOnly: Wr,
        bare: ar = !1
      } = rr;
      const {
        t: jr
      } = (0, TW.E)(), Ir = Sr.baf2RxLayout, [fr, Er, pr] = Sr.baf2RxDims, xr = (0, Zr.useMemo)((() => {
        if (void 0 === Ir) return 0;
        const rr = Uint8Array.from(Ir, ((rr, Sr) => dx(Ir, Sr)));
        return FI([fr - 2, Er - 2, pr - 2], rr).max
      }), [Ir, fr, Er, pr]);
      return void 0 === Ir ? null : (0, za.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!ar && (0, za.jsx)("span", {
          className: "Baf2RxHint",
          children: jr(`${ux}rxLayoutLine`, {
            amount: Kf(xr)
          })
        }), !Wr && (0, za.jsx)(Uj.h, {
          onClick: () => {
            Qr.send("layout", 0)
          },
          children: jr(`${ux}rxLayoutHide`)
        })]
      })
    }
    const Qm = "buildAFactory2Game:",
      Zm = {
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

    function Wm(rr) {
      let {
        id: Sr,
        title: Qr,
        body: Zr,
        bodyParams: Wr,
        yes: ar,
        cancel: jr,
        confirm: Ir
      } = rr;
      const {
        t: fr
      } = (0, TW.E)();
      return (0, za.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": Sr,
        children: [(0, za.jsx)("h3", {
          id: Sr,
          children: fr(Qr)
        }), (0, za.jsx)("p", {
          children: fr(Zr, Wr)
        }), (0, za.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, za.jsx)(Uj.k, {
            onClick: jr,
            children: fr(`${Qm}rxCancel`)
          }), (0, za.jsx)(Uj.L, {
            onClick: Ir,
            children: fr(ar)
          })]
        })]
      })
    }

    function am(rr) {
      const [Sr, Qr] = (0, Zr.useState)((() => rr.get()));
      return (0, Zr.useEffect)((() => (Qr(rr.get()), rr.subscribe((() => {
        Qr(rr.get())
      })))), [rr]), Sr
    }

    function jm(rr) {
      let {
        kind: Sr,
        cap: Qr,
        busy: Wr = !1,
        whyNot: ar = null,
        apart: jr
      } = rr;
      const {
        t: Ir
      } = (0, TW.E)(), [fr, Er] = (0, Zr.useState)(!1), pr = null !== ar, xr = (0, Zr.useRef)(null);
      if ((0, Zr.useEffect)((() => {
          pr && Er(!1)
        }), [pr]), (0, Zr.useLayoutEffect)((() => {
          var rr;
          const Sr = null === (rr = xr.current) || void 0 === rr ? void 0 : rr.firstElementChild;
          pr ? null === Sr || void 0 === Sr || Sr.setAttribute("aria-disabled", "true") : Wr || null === Sr || void 0 === Sr || Sr.removeAttribute("aria-disabled")
        })), !fr || pr) return (0, za.jsx)("span", {
        ref: xr,
        className: "Baf2RxApartWrap",
        children: (0, za.jsx)(Uj.k, {
          disabled: Wr,
          className: eW()({
            Baf2RxNotYet: pr
          }),
          onClick: () => {
            ar ? ar() : Er(!0)
          },
          children: Ir(`${Qm}rxApart`)
        })
      });
      const mr = "battery" === Sr,
        Nr = void 0 === Qr ? `${Qm}batApartConfirmBodyPlan` : `${Qm}batApartConfirmBody`;
      return (0, za.jsx)(Wm, {
        id: `baf2ApartTitle_${Sr}`,
        title: mr ? `${Qm}batApartConfirmTitle` : `${Qm}rxApartConfirmTitle`,
        body: mr ? Nr : `${Qm}rxApartConfirmBody`,
        bodyParams: void 0 === Qr ? void 0 : {
          cap: Qr
        },
        yes: `${Qm}rxApart`,
        cancel: () => {
          Er(!1)
        },
        confirm: () => {
          Er(!1), jr()
        }
      })
    }

    function Im(rr) {
      let {
        mood: Sr,
        big: Qr
      } = rr;
      const Zr = Zm[Sr],
        Wr = [];
      return Zr.rows.forEach(((rr, Sr) => {
        for (let Qr = 0; Qr < rr.length; Qr++) "." !== rr[Qr] && Wr.push((0, za.jsx)("rect", {
          x: Qr + 1,
          y: Sr + 1,
          width: 1,
          height: 1,
          fill: "w" === rr[Qr] ? "#8fd3ff" : Zr.colour
        }, `${Qr},${Sr}`))
      })), (0, za.jsxs)("svg", {
        className: eW()("Baf2RxFace", {
          Big: Qr,
          Alarm: "alarm" === Sr
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, za.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, za.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Wr]
      })
    }

    function fm(rr) {
      return ma(rr, "+").replace("+", "")
    }

    function Em(rr) {
      let {
        kind: Sr,
        dims: Qr,
        cap: Zr,
        disabled: Wr,
        compact: ar,
        resize: jr
      } = rr;
      const {
        t: Ir
      } = (0, TW.E)(), {
        min: fr,
        max: Er
      } = kQ(Sr), pr = Math.min(Zr, Er), xr = [`${Qm}rxWide`, `${Qm}rxTall`, `${Qm}rxDeep`], mr = {
        w: String(Qr[0]),
        h: String(Qr[1]),
        d: String(Qr[2]),
        blocks: String(ef(Sr, Qr))
      };
      return (0, za.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, za.jsx)("div", {
          className: "Baf2RxSteppers",
          children: Qr.map(((rr, Sr) => {
            const ar = Zr => {
                const Wr = [Qr[0], Qr[1], Qr[2]];
                Wr[Sr] = rr + Zr, jr(Wr)
              },
              mr = rr >= pr;
            return (0, za.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, za.jsx)("button", {
                type: "button",
                "aria-label": Ir(`${Qm}rxSmaller`),
                disabled: Wr || rr <= fr,
                onClick: () => {
                  ar(-1)
                },
                children: "\u2212"
              }), (0, za.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [rr, (0, za.jsx)("small", {
                  children: Ir(xr[Sr])
                })]
              }), (0, za.jsx)("button", {
                type: "button",
                "aria-label": Ir(`${Qm}rxBigger`),
                disabled: Wr || mr,
                onClick: () => {
                  ar(1)
                },
                children: mr && Zr < Er ? "\ud83d\udd12" : "+"
              })]
            }, xr[Sr])
          }))
        }), !ar && (0, za.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === Sr ? Ir(`${Qm}rxSizeLine`, {
            ...mr,
            water: String(nf(Qr))
          }) : Ir(`${Qm}batSizeLine`, mr)
        })]
      })
    }

    function pm(rr) {
      let {
        on: Sr,
        label: Qr,
        disabled: Zr,
        locked: Wr,
        pending: ar,
        toggle: jr
      } = rr;
      return (0, za.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": Sr,
        disabled: Zr,
        "aria-disabled": Wr || void 0,
        className: eW()("Baf2RxSwitch", {
          On: Sr,
          Locked: Wr,
          Pending: ar
        }),
        onClick: jr,
        children: [(0, za.jsx)("span", {
          className: "Baf2RxKnob"
        }), Qr]
      })
    }
    const xm = "buildAFactory2Game:",
      mm = .95;

    function Nm(rr, Sr) {
      return 0 !== (rr.baf2RxFlags & Sr)
    }

    function Um(rr) {
      return "cryo" === rr ? sr.m : sr.q
    }

    function tm(rr) {
      var Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er;
      return rr.baf2RxCryo ? {
        HN: "cryo",
        usePerS: null !== (Wr = rr.baf2RxCryoUse) && void 0 !== Wr ? Wr : 0,
        needPerS: null !== (ar = rr.baf2RxCryoNeed) && void 0 !== ar ? ar : 0,
        inPerS: null !== (jr = rr.baf2RxCryoIn) && void 0 !== jr ? jr : 0,
        stored: null !== (Ir = rr.baf2RxCryoStored) && void 0 !== Ir ? Ir : 0,
        makersShort: null !== (fr = rr.baf2RxMixersShort) && void 0 !== fr ? fr : 0,
        waterBeside: null !== (Er = rr.baf2RxWaterUse) && void 0 !== Er ? Er : 0,
        pct: rr.baf2RxWater
      } : {
        HN: "water",
        usePerS: null !== (Sr = rr.baf2RxWaterUse) && void 0 !== Sr ? Sr : 0,
        needPerS: null !== (Qr = rr.baf2RxWaterNeed) && void 0 !== Qr ? Qr : 0,
        inPerS: rr.baf2RxWaterIn,
        stored: rr.baf2RxWaterStored,
        makersShort: null !== (Zr = rr.baf2RxCondensersShort) && void 0 !== Zr ? Zr : 0,
        waterBeside: 0,
        pct: rr.baf2RxWater
      }
    }

    function hm(rr) {
      const Sr = "running" === rr.baf2RxState || "idle" === rr.baf2RxState;
      return rr.baf2RxFormed && rr.baf2RxTarget !== rr.baf2RxThrottle && Sr ? zm(rr, rr.baf2RxTarget) : null
    }

    function zm(rr, Sr) {
      const [Qr, Zr, Wr, , , , ar, , jr] = rr.baf2RxStats, Ir = Nm(rr, NS), fr = tm(rr), Er = fr.pct / 100, {
        gen: pr,
        out: xr,
        load: mr
      } = function(rr, Sr, Qr, Zr) {
        const Wr = Qr ? GI : 1,
          ar = Math.min(rr.fuelHeat * Wr * Math.max(0, Math.min(1, Sr)), rr.size * Wr);
        return {
          gen: ar,
          out: ar,
          load: Zf(ar, rr.cooling, Zr)
        }
      }({
        fuelHeat: Qr,
        cooling: Zr,
        size: Wr
      }, Sr / 100, Ir, Er), Nr = af(ar || cI(...rr.baf2RxDims)), Ur = rr.baf2RxHeat, tr = Math.abs(mr - Ur), hr = function(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : sr.q;
        const ar = Qr ? GI : 1,
          jr = Math.min(rr.fuelHeat * ar * Sr / 100, rr.size * ar),
          Ir = jr,
          fr = rr.fuelHeat * ar,
          Er = rr.cooling * Qf(Zr.pct / 100),
          pr = fr > 0 && Er < rr.size * ar ? Math.floor(100 * Er / fr) : 100,
          xr = jr * Wr - Zr.inPerS;
        return {
          out: Ir,
          hotAbove: pr >= 100 ? null : Math.max(0, pr),
          waterSecs: Zr.pct >= 100 && xr > 1e-6 ? Math.max(0, Zr.stored) / xr : null
        }
      }({
        fuelHeat: Qr,
        cooling: Zr,
        size: Wr
      }, Sr, Ir, {
        pct: fr.pct,
        inPerS: fr.inPerS,
        stored: fr.stored
      }, Um(fr.HN));
      return {
        pct: Sr,
        out: xr,
        coolPerS: pr * Um(fr.HN),
        pelletsPerMin: jr > 0 ? xr / jr * 60 : 0,
        settle: mr,
        settleS: tr > 2 ? Nr * Math.log(tr / 2) : 0,
        overheatS: mr > 100 && Ur < 100 ? Nr * Math.log((mr - Ur) / (mr - 100)) : null,
        hotAbove: hr.hotAbove,
        coolantSecs: hr.waterSecs
      }
    }

    function Ym(rr) {
      return rr.baf2RxThrottle <= 0 && "running" !== rr.baf2RxState ? 0 : zm(rr, rr.baf2RxTarget).pelletsPerMin / 60
    }

    function nm(rr, Sr) {
      if (rr <= 0 || Sr <= 0) return 0;
      const Qr = rr / Sr;
      return Qr < .25 ? 1 : Qr < .5 ? 2 : Qr < .8 ? 3 : 4
    }

    function em(rr, Sr) {
      const Qr = {};
      for (const [Zr, Wr] of Object.entries(Sr.params)) Qr[Zr] = "time" === Zr ? ta(rr, Wr) : "amount" === Zr ? Kf(Wr) : String(Math.round(Wr));
      return rr(Sr.key, Qr)
    }

    function Km(rr, Sr) {
      return {
        key: `${xm}${rr}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: Sr
      }
    }

    function ym(rr) {
      var Sr;
      const Qr = Nm(rr, NS),
        Zr = "running" === rr.baf2RxState,
        Wr = Ef(rr),
        ar = rr.baf2RxHeat;
      var jr;
      if (Zr && ar > CI) return {
        key: null !== (jr = Wr.fix) && void 0 !== jr ? jr : `${xm}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const Ir = Zr ? zm(rr, rr.baf2RxTarget).coolantSecs : null,
        fr = "cryo" === tm(rr).HN;
      if (null !== Ir && Ir >= 1 && Ir <= 30) return Km(fr ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Er = iI(cI(...rr.baf2RxDims)).waste,
        pr = Zr ? tf(rr, Er, Ym(rr)).fullInS : null;
      if (null !== pr && pr <= 120 && rr.baf2RxWaste >= .5 * Er) return Km("rxWarnWaste", "warn");
      if (null !== Ir && Ir >= 1) return Km(fr ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: Ir
      });
      const xr = "noWater" === rr.baf2RxState && ar > CI;
      if (rr.baf2RxDamage >= 1 && !xr) return Km("rxDamagedHeals", "warn", {
        pct: rr.baf2RxDamage
      });
      if (rr.baf2RxCryoCut) return Km("rxFix_cryoCut", "warn");
      const mr = tm(rr);
      if ("noWater" === rr.baf2RxState && "cryo" === mr.HN) return Km("noWater" === rr.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const Nr = Wr.fix === `${xm}rxFix_scramCool` || "idle" === rr.baf2RxState && rr.baf2RxTarget <= 0;
      if (Nr && rr.baf2RxFuel <= 0) return Km("rxFix_noFuel", "warn");
      if (Nr && rr.baf2RxWaterIn <= 0 && (null !== (Sr = rr.baf2RxCryoIn) && void 0 !== Sr ? Sr : 0) <= 0) return Km("rxFix_noWater", "warn");
      const Ur = Wr.fix === `${xm}rxFix_scramCool` ? xf(rr) : null;
      if (null !== Ur) return {
        key: Ur.key,
        params: {
          amount: Ur.amount
        },
        tone: "info"
      };
      if ("running" !== rr.baf2RxState && "idle" !== rr.baf2RxState && null !== Wr.fix) return {
        key: Wr.fix,
        params: {},
        tone: "scram" === rr.baf2RxState ? "info" : xr ? "bad" : "warn"
      };
      var tr;
      if ("idle" === rr.baf2RxState && rr.baf2RxTarget <= 0) return {
        key: null !== (tr = Wr.fix) && void 0 !== tr ? tr : `${xm}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const hr = rr.baf2RxCryoStarved;
      if ("cryo" === mr.HN && hr && mr.needPerS > 0 && mr.usePerS < mm * mr.needPerS) return Km("noWater" === hr ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const zr = "cryo" === mr.HN,
        Yr = mr.needPerS > 0 && mr.usePerS < mm * mr.needPerS;
      if (zr ? Yr || mr.makersShort > 0 && mr.pct < 100 : mr.pct < 100) {
        const Sr = zr && Yr ? Math.floor(100 * mr.usePerS / mr.needPerS) : Math.min(100, mr.pct);
        if (mr.makersShort > 0) {
          return Km(`${zr?"rxCryoShortLine":"rxWaterShortLine"}${1===mr.makersShort?"One":""}${!zr&&rr.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: Sr,
            count: mr.makersShort
          })
        }
        return Km(zr ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: Sr
        })
      }
      const nr = function(rr) {
        const [Sr, Qr, Zr] = rr.baf2RxStats, Wr = tm(rr), ar = Wf({
          fuelHeat: Sr,
          cooling: Qr,
          size: Zr
        }, "cryo" === Wr.HN ? sr.d : 1, !0);
        return Math.max(0, ar * Um(Wr.HN) - Wr.inPerS)
      }(rr);
      if (Qr && nr > 0) return Km("cryo" === mr.HN ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(nr)
      });
      if (ar >= rf) return Km("rxHotLine", "warn");
      const er = zm(rr, rr.baf2RxTarget);
      var Kr;
      if (null !== er.overheatS) return Km("rxWillOverheat", "bad", {
        pct: rr.baf2RxTarget,
        time: er.overheatS,
        safe: null !== (Kr = er.hotAbove) && void 0 !== Kr ? Kr : 100
      });
      if (Math.abs(er.settle - ar) >= 3) return Km("rxSettling", "info", {
        pct: rr.baf2RxTarget,
        heat: Math.round(er.settle),
        time: er.settleS
      });
      const yr = xf(rr);
      if (null !== yr) return {
        key: yr.key,
        params: {
          amount: yr.amount
        },
        tone: "info"
      };
      const Br = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== Sr && ("running" !== Sr || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === rr.rods ? `${jf}rxLimitNoRods` : `${jf}rxLimit_${uI(rr)}`
      }({
        rods: rr.baf2RxStats[3],
        ...pf(rr)
      }, rr.baf2RxState, rr.baf2RxOut >= mm * rr.baf2RxMaxNow, !1);
      if (Br === `${xm}rxLimit_size`) {
        const [Sr, , Qr, Zr] = rr.baf2RxStats, Wr = Zr > 0 && Sr > 0 ? Math.ceil(Qr / (Sr / Zr) - 1e-9) : Zr, ar = rr.baf2RxDims.every((rr => rr >= kQ("reactor").max));
        if (Wr < Zr) return Km(ar ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Wr,
          have: Zr
        });
        if (ar) return Km("rxLimit_sizeMax", "info")
      }
      return null !== Br ? {
        key: Br,
        params: {},
        tone: "info"
      } : Km("rxSteady", "ok", {
        pct: rr.baf2RxTarget
      })
    }

    function Bm(rr) {
      var Sr;
      if (rr.melted) return Km("rxMeltedBody", "bad");
      if (-1 === rr.bad) return Km("rxFix_noRoom", "warn");
      if (rr.bad > 0) return Km(1 === rr.bad ? "rxBadOne" : "rxBad", "warn", {
        count: rr.bad
      });
      if (rr.left > 0) {
        const Sr = 1 === rr.left ? "One" : "";
        return Km(rr.canFill ? `rxPlanLeft${Sr}` : `rxPlanLeftNoFill${Sr}`, "info", {
          count: rr.left
        })
      }
      if (0 === rr.rods) return Km("rxLimitNoRods", "warn");
      const Qr = null !== (Sr = rr.idle) && void 0 !== Sr ? Sr : 0;
      return Qr > 0 ? Km(1 === Qr ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: Qr
      }) : Km("rxPlanReady", "ok")
    }

    function Tm(rr) {
      return Math.floor(Math.max(0, rr[1] - 1) / 2)
    }

    function Om(rr) {
      if (rr >= bI && rr < JI) {
        const Sr = rr - bI;
        return {
          key: 0 === Sr ? `${xm}rxWhy_rodAlone` : 1 === Sr ? `${xm}rxWhy_rodOne` : `${xm}rxWhy_rod`,
          params: {
            count: String(Sr),
            heat: String(LI * (1 + lI * Sr))
          }
        }
      }
      return rr === JI ? {
        key: `${xm}rxWhy_channel`,
        params: {
          amount: String(PI)
        }
      } : rr === DI ? {
        key: `${xm}rxWhy_deadChannel`,
        params: {}
      } : rr === dI ? {
        key: `${xm}rxWhy_graphite`,
        params: {}
      } : {
        key: `${xm}rxWhy_core`,
        params: {}
      }
    }
    const Lm = "buildAFactory2Game:";

    function lm(rr, Sr) {
      return 0 !== (rr.baf2RxFlags & Sr)
    }

    function Xm(rr) {
      let {
        status: Sr,
        pending: Qr,
        store: Zr,
        explain: Wr
      } = rr;
      const {
        t: ar
      } = (0, TW.E)(), jr = lm(Sr, mS), Ir = Sr.baf2RxTarget, fr = Sr.baf2RxThrottle, Er = function(rr) {
        return {
          press: () => {
            rr.throttlePress()
          },
          drag: Sr => {
            rr.throttleDrag(Sr)
          },
          release: () => {
            rr.throttleRelease()
          }
        }
      }(Zr), pr = null === (xr = zm(Sr, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, xr - 10),
        red: xr
      };
      var xr;
      return (0, za.jsxs)("div", {
        className: eW()("Baf2RxThrottle", {
          Off: jr
        }),
        onClick: () => {
          jr && Wr(`${Lm}rxWhy_startFirst`)
        },
        children: [(0, za.jsx)("span", {
          className: "HideNarrow",
          children: ar(`${Lm}rxThrottle`)
        }), (0, za.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, za.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: Ir,
            disabled: jr,
            style: jr ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": ar(`${Lm}rxThrottle`),
            onPointerDown: () => {
              Er.press();
              const rr = () => {
                window.removeEventListener("pointerup", rr), window.removeEventListener("pointercancel", rr), Er.release()
              };
              window.addEventListener("pointerup", rr), window.addEventListener("pointercancel", rr)
            },
            onKeyUp: Er.release,
            onChange: rr => {
              Er.drag(Number(rr.target.value))
            }
          }), (0, za.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${pr.amber}%, #ffb020 ${pr.amber}% ${pr.red}%, #ff3b30 ${pr.red}%)`
            },
            "aria-hidden": "true"
          }), (0, za.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${fr}% + ${8*(1-fr/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, za.jsxs)("b", {
          children: [`${Ir}%`, (0, za.jsx)("i", {
            className: eW()("Baf2RxPendingDot", {
              On: Qr
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function Pm(rr) {
      let {
        status: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)(), Zr = zm(Sr, Sr.baf2RxTarget), Wr = tm(Sr).HN, ar = Qr("cryo" === Wr ? `${Lm}rxRateCryo` : `${Lm}rxRateWater`, {
        rate: fm(Zr.coolPerS)
      }), jr = Qr(`${Lm}rxChain`, {
        pct: String(Sr.baf2RxTarget),
        out: Kf(Zr.out),
        heat: String(Math.round(Zr.settle)),
        coolant: ar
      }), Ir = null !== Zr.coolantSecs ? Zr.coolantSecs >= 1 ? Qr("cryo" === Wr ? `${Lm}rxThrottleCryoOut` : `${Lm}rxThrottleWaterOut`, {
        time: ta(Qr, Zr.coolantSecs)
      }) : Qr("cryo" === Wr ? `${Lm}rxThrottleCryoDry` : `${Lm}rxThrottleWaterDry`) : null;
      return (0, za.jsxs)("p", {
        className: "Baf2RxChain",
        children: [jr, null !== Ir ? (0, za.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", Ir]
        }) : (0, za.jsxs)("span", {
          children: [" \xb7 ", Qr(`${Lm}rxChainPellets`, {
            amount: yf(Zr.pelletsPerMin)
          })]
        })]
      })
    }

    function Hm(rr) {
      let {
        view: Sr,
        store: Qr,
        explain: Wr,
        explainOnce: ar
      } = rr;
      const {
        t: jr
      } = (0, TW.E)(), {
        status: Ir
      } = Sr, [fr, Er] = (0, Zr.useState)(!1), pr = lm(Ir, mS), mr = lm(Ir, NS), Nr = !lm(Ir, hS), Ur = Ir.baf2RxHeat > 100;
      return (0, za.jsxs)(za.Fragment, {
        children: [(0, za.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, za.jsx)(Xm, {
            status: Ir,
            pending: Sr.throttlePending,
            store: Qr,
            explain: Wr
          }), (0, za.jsx)(pm, {
            on: mr,
            label: mr ? jr(`${Lm}rxOdLeft`, {
              time: ta(jr, Ir.baf2RxOdLeft)
            }) : jr(`${Lm}rxOverdrive`),
            locked: Nr,
            pending: 0 !== (Sr.pendingFlags & NS),
            toggle: () => {
              Nr ? Wr(`${Lm}rxOverdriveTier`, {
                amount: String(xr(13))
              }) : mr ? Qr.setFlag(NS, !1) : Sr.odConfirmed ? Qr.setFlag(NS, !0) : Er(!0)
            }
          }), pr || Sr.startGuard ? (0, za.jsx)(Uj.u, {
            disabled: Sr.busy.has("start") || Sr.startGuard,
            onClick: () => {
              Qr.tap("start", (() => {
                Qr.setFlag(mS, !1)
              }))
            },
            children: jr(Sr.startGuard ? `${Lm}rxStarting` : `${Lm}rxStart`)
          }) : (0, za.jsx)("span", {
            className: eW()("Baf2RxScram", {
              Pulse: Ur
            }),
            children: (0, za.jsx)(Uj.L, {
              onClick: () => {
                Qr.shutDown()
              },
              children: jr(`${Lm}rxScram`)
            })
          })]
        }), (0, za.jsx)(Pm, {
          status: Ir
        }), fr && (0, za.jsx)(Wm, {
          id: "baf2RxOdTitle",
          title: `${Lm}rxOdConfirmTitle`,
          body: `${Lm}rxOdConfirmBody`,
          yes: `${Lm}rxOdConfirm`,
          cancel: () => {
            Er(!1)
          },
          confirm: () => {
            Er(!1), Qr.tap("odConfirm", (() => {
              Qr.confirmOverdrive(), Qr.setFlag(NS, !0)
            })), ar(`${Lm}rxWhy_overdrive`)
          }
        })]
      })
    }

    function qm(rr) {
      let {
        view: Sr,
        store: Qr,
        keepSize: Zr
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)(), {
        status: ar
      } = Sr;
      return (0, za.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, za.jsx)(Em, {
          kind: "reactor",
          dims: Sr.dims,
          cap: ar.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: rr => {
            Qr.resize(rr)
          }
        }), Zr ? (0, za.jsx)(Uj.k, {
          onClick: Zr,
          children: Wr(`${Lm}rxKeepSize`)
        }) : (0, za.jsxs)(za.Fragment, {
          children: [(0, za.jsx)(pm, {
            on: Sr.guide,
            label: Wr(`${Lm}rxGuide`),
            toggle: () => {
              Qr.toggleGuide()
            }
          }), lm(ar, YS) && (0, za.jsx)(pm, {
            on: Sr.starter,
            label: Wr(`${Lm}rxStarter`),
            toggle: () => {
              Qr.toggleStarter()
            }
          }), (0, za.jsx)(rm, {
            status: ar,
            store: Qr,
            busy: Sr.busy.has("fill")
          })]
        })]
      })
    }

    function Rm(rr) {
      let {
        need: Sr,
        kind: Qr = "reactor",
        explain: Zr
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)(), ar = Sr.length <= 3, jr = Sr.reduce(((rr, Sr) => {
        let [, Qr] = Sr;
        return rr + Qr
      }), 0);
      return (0, za.jsxs)("div", {
        className: eW()("Baf2RxParts", {
          Compact: !ar
        }),
        onClick: () => {
          Zr("battery" === Qr ? `${Lm}batWhy_store` : `${Lm}rxShellHint`)
        },
        children: [jr > 0 && (0, za.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === jr ? Wr(`${Lm}rxBlocksOne`) : Wr(`${Lm}rxBlocks`, {
            blocks: String(jr)
          })
        }), 0 === Sr.length ? (0, za.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Wr("battery" === Qr ? `${Lm}batPartsDone` : `${Lm}rxShellDone`)
        }) : Nf(Sr).map((rr => {
          let [Sr, Qr, Zr] = rr;
          const jr = function(rr) {
            const Sr = Yf[rr];
            if (void 0 === Sr) return null;
            const [Qr, Zr, Wr] = hf[Sr].colour.map((rr => Math.round(255 * rr)));
            return `rgb(${Qr}, ${Zr}, ${Wr})`
          }(Sr);
          return (0, za.jsxs)("span", {
            className: "Baf2RxChip",
            title: (0, sW.g)(Wr, Sr),
            children: [(0, za.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === jr ? {
                visibility: "hidden"
              } : {
                background: jr
              },
              title: Wr(`${Lm}rxShopGhost`)
            }), (0, za.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, za.jsx)(OW.d, {
                itemName: Sr,
                amount: 0
              })
            }), (0, za.jsx)("span", {
              className: "Baf2RxChipName",
              children: ar ? `${Qr} ${Ir=(0,sW.g)(Wr,Sr),Ir.replace(/^(Reactor|Battery) (?=\S)/,"")}` : Qr
            }), Zr >= Qr ? (0, za.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, za.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: ar ? Wr(`${Lm}rxShopShort`, {
                count: String(Qr - Zr)
              }) : "\u2212" + (Qr - Zr)
            })]
          }, Sr);
          var Ir
        }))]
      })
    }
    const gm = "buildAFactory2Game:";

    function Cm(rr) {
      var Sr, Qr, Wr, ar, jr, Ir, fr;
      let {
        store: Er,
        close: pr
      } = rr;
      const {
        t: xr
      } = (0, TW.E)(), mr = qj(), Nr = am(Er), {
        explained: Ur,
        explain: tr
      } = bx("baf2RxExplained"), hr = (0, Zr.useCallback)(((rr, Sr) => {
        tr(xr(rr, Sr))
      }), [tr, xr]), zr = null === Nr || void 0 === Nr ? void 0 : Nr.status, Yr = !0 === (null === zr || void 0 === zr ? void 0 : zr.baf2BatReadOnly), nr = rr => {
        zr && mr.send(xS(zr.baf2BatAt, rr))
      }, [er, Kr, yr] = null !== (Sr = null === Nr || void 0 === Nr ? void 0 : Nr.dims) && void 0 !== Sr ? Sr : [0, 0, 0], Br = Kf(null !== (Qr = null === Nr || void 0 === Nr ? void 0 : Nr.sx) && void 0 !== Qr ? Qr : 0), Tr = !0 === (null === zr || void 0 === zr ? void 0 : zr.baf2BatFormed), vr = null !== (Wr = null === zr || void 0 === zr ? void 0 : zr.baf2BatStored) && void 0 !== Wr ? Wr : 0, Or = Math.max(1, null !== (ar = null === zr || void 0 === zr ? void 0 : zr.baf2BatIslandCap) && void 0 !== ar ? ar : 1), Lr = Math.min(100, 100 * vr / Or), lr = null === zr || void 0 === zr ? void 0 : zr.baf2BatNetPerS, Xr = function(rr, Sr, Qr) {
        return Qr > 0 && Sr >= Qr ? "full" : void 0 !== rr && rr >= .05 ? "charging" : void 0 !== rr && rr <= -.05 && Sr > 0 ? "draining" : "steady"
      }(lr, vr, null !== (jr = null === zr || void 0 === zr ? void 0 : zr.baf2BatIslandCap) && void 0 !== jr ? jr : 0), Pr = null !== (Ir = null === zr || void 0 === zr ? void 0 : zr.baf2BatMadePerS) && void 0 !== Ir ? Ir : 0, Hr = null !== (fr = null === zr || void 0 === zr ? void 0 : zr.baf2BatUsedPerS) && void 0 !== fr ? fr : 0;
      let qr, Rr = {},
        gr = "info";
      if (zr)
        if (Tr) "charging" === Xr ? (qr = `${gm}batLine_charging`, Rr = {
          time: ta(xr, (Or - vr) / Math.max(.05, null !== lr && void 0 !== lr ? lr : 0))
        }, gr = "ok") : "draining" === Xr ? (qr = `${gm}batLine_draining`, Rr = {
          time: ta(xr, vr / Math.max(.05, -(null !== lr && void 0 !== lr ? lr : 0)))
        }, gr = "warn") : qr = "full" === Xr ? `${gm}batLine_full` : vr <= 0 && Hr > 0 ? `${gm}batLine_empty` : `${gm}batLine_steady`;
        else {
          var Cr;
          const rr = Bm({
            left: zr.baf2BatNeed.reduce(((rr, Sr) => {
              let [, Qr] = Sr;
              return rr + Qr
            }), 0),
            bad: zr.baf2BatBad,
            rods: 1,
            canFill: !0 === zr.baf2BatCanFill,
            melted: !1
          });
          qr = rr.key, Rr = {
            count: String(null !== (Cr = rr.params.count) && void 0 !== Cr ? Cr : 0)
          }, gr = rr.tone
        }
      else qr = `${gm}batLine_steady`;
      const Mr = Math.max(Pr, Hr, 1);
      return (0, za.jsx)(Nj.b, {
        close: pr,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, za.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, za.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, za.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, za.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, za.jsx)(OW.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, za.jsxs)("div", {
                children: [(0, za.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: xr(`${gm}batTitle`)
                }), zr && (0, za.jsxs)("p", {
                  className: eW()("Baf2RxSubtitle", {
                    good: Tr && "charging" === Xr,
                    warn: Tr && "draining" === Xr
                  }),
                  children: [er, "\xd7", Kr, "\xd7", yr, " \xb7 ", xr(Tr ? `${gm}batState_${Xr}` : `${gm}rxSubPlanShort`)]
                })]
              })]
            }), (0, za.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [zr && !Yr && (0, za.jsx)(jm, {
                kind: "battery",
                cap: Tr ? Br : void 0,
                busy: null === Nr || void 0 === Nr ? void 0 : Nr.busy.has("apart"),
                apart: () => {
                  Er.tap("apart", (() => {
                    nr("apart")
                  }))
                }
              }), (0, za.jsx)(Uj.l, {
                onClick: pr
              })]
            })]
          }), Nr && zr && (0, za.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, za.jsxs)("div", {
              className: eW()("Baf2RxFlow Baf2BatFlow", {
                Plan: !Tr
              }),
              children: [(0, za.jsx)(cx, {
                kind: "Power",
                label: xr(`${gm}batMade`),
                number: Tr ? `\u26a1 ${Kf(Pr)}/s` : "\u2014",
                note: xr(`${gm}batMadeNote`),
                share: Tr ? Pr / Mr : void 0,
                onExplain: () => {
                  hr(`${gm}batWhy_made`)
                }
              }), (0, za.jsx)(Fx, {
                kind: "Power",
                step: Tr ? nm(Pr, Mr) : 0,
                planned: !Tr
              }), (0, za.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  hr(`${gm}batWhy_store`)
                },
                children: [(0, za.jsx)(ox, {
                  max: 100,
                  bands: [{
                    upTo: Tr ? Lr : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, za.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, za.jsx)("b", {
                    className: "Baf2BatStored",
                    children: Tr ? xr(`${gm}batStoredOf`, {
                      amount: Kf(vr),
                      cap: Kf(zr.baf2BatIslandCap)
                    }) : xr(`${gm}batWillHold`, {
                      cap: Br
                    })
                  }), (0, za.jsx)("span", {
                    children: xr(`${gm}batAdds`, {
                      cap: Br
                    })
                  }), Tr && (0, za.jsx)("small", {
                    children: xr(`${gm}batBreakNote`, {
                      cap: Br
                    })
                  })]
                })]
              }), (0, za.jsx)(Fx, {
                kind: "Power",
                step: Tr ? nm(Hr, Mr) : 0,
                planned: !Tr
              }), (0, za.jsx)(cx, {
                kind: "Power",
                label: xr(`${gm}batUsed`),
                number: Tr ? `\u26a1 ${Kf(Hr)}/s` : "\u2014",
                note: xr(`${gm}batUsedNote`),
                share: Tr ? Hr / Mr : void 0,
                onExplain: () => {
                  hr(`${gm}batWhy_used`)
                }
              })]
            }), (0, za.jsx)(Jx, {
              text: xr(qr, Rr),
              tone: gr,
              explained: Ur
            }), Yr ? (0, za.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: xr(`${gm}rxNotYours`)
            }) : !Tr && (0, za.jsxs)(za.Fragment, {
              children: [(0, za.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, za.jsx)(Em, {
                  kind: "battery",
                  dims: Nr.dims,
                  cap: zr.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: rr => {
                    Er.resize(rr)
                  }
                }), (0, za.jsx)(pm, {
                  on: Nr.guide,
                  label: xr(`${gm}rxGuide`),
                  toggle: () => {
                    Er.toggleGuide()
                  }
                }), zr.baf2BatCanFill && (0, za.jsx)(Uj.p, {
                  disabled: !Uf("battery", zr.baf2BatNeed) || Nr.busy.has("fill"),
                  onClick: () => {
                    Er.tap("fill", (() => {
                      nr("fill")
                    }))
                  },
                  children: xr(`${gm}rxFill`)
                })]
              }), (0, za.jsx)(Rm, {
                need: zr.baf2BatNeed,
                kind: "battery",
                explain: hr
              })]
            })]
          })]
        })
      })
    }
    const Mm = "buildAFactory2Game:",
      Gm = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function km(rr, Sr) {
      return rr === oI ? null : Sr ? "#4a4440" : rr < JI ? Gm[rr - bI] : rr === JI ? "#3fd0f0" : rr === DI ? "#2c3e4c" : "#55585e"
    }

    function Am(rr) {
      let {
        inner: Sr,
        looks: Qr,
        layer: Zr,
        setLayer: Wr,
        glow: ar,
        melted: jr,
        explain: Ir
      } = rr;
      const {
        t: fr
      } = (0, TW.E)(), [Er, pr, xr] = Sr, mr = Math.max(0, Math.min(pr - 1, Zr)), Nr = [];
      for (let tr = 0; tr < xr; tr++)
        for (let rr = 0; rr < Er; rr++) {
          var Ur;
          const Sr = null !== (Ur = Qr[(mr * xr + tr) * Er + rr]) && void 0 !== Ur ? Ur : oI,
            Zr = km(Sr, jr),
            Wr = Sr >= bI && Sr < JI;
          Nr.push(null === Zr ? (0, za.jsx)("circle", {
            cx: rr + .5,
            cy: tr + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${rr},${tr}`) : (0, za.jsx)("rect", {
            x: rr + .06,
            y: tr + .06,
            width: .88,
            height: .88,
            fill: Zr,
            opacity: Wr && !jr ? .5 + .5 * ar : 1,
            onClick: rr => {
              rr.stopPropagation();
              const Qr = Om(Sr);
              Ir(Qr.key, Qr.params)
            }
          }, `${rr},${tr}`))
        }
      return (0, za.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, za.jsx)("svg", {
          className: eW()("Baf2RxMapGrid", {
            Melted: jr
          }),
          viewBox: `0 0 ${Math.max(1,Er)} ${Math.max(1,xr)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": fr(`${Mm}rxWhy_core`),
          onClick: () => {
            Ir(`${Mm}rxWhy_core`, {})
          },
          children: Nr
        }), pr > 1 && (0, za.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, za.jsx)("button", {
            type: "button",
            "aria-label": fr(`${Mm}rxLayerDown`),
            disabled: mr <= 0,
            onClick: () => {
              Wr(mr - 1)
            },
            children: "\u25bc"
          }), (0, za.jsxs)("span", {
            children: [(0, za.jsx)("span", {
              className: "HideNarrow",
              children: fr(`${Mm}rxLayer`, {
                n: String(mr + 1),
                of: String(pr)
              })
            }), (0, za.jsx)("span", {
              className: "ShowNarrow",
              children: fr(`${Mm}rxLayerShort`, {
                n: String(mr + 1),
                of: String(pr)
              })
            })]
          }), (0, za.jsx)("button", {
            type: "button",
            "aria-label": fr(`${Mm}rxLayerUp`),
            disabled: mr >= pr - 1,
            onClick: () => {
              Wr(mr + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Vm = "buildAFactory2Game:",
      im = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: MI,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: ff,
        kind: "red"
      }],
      wm = [50, MI, 100];

    function cm(rr) {
      let {
        stats: Sr,
        t: Qr,
        explain: Zr
      } = rr;
      const Wr = uI(Sr),
        ar = Math.max(1, Sr.fuelHeat, Sr.cooling, Sr.size),
        jr = [
          ["fuel", `${Vm}rxBarRods`, Sr.fuelHeat],
          ["cooling", `${Vm}rxBarCooling`, Sr.cooling],
          ["size", `${Vm}rxBarSize`, Sr.size]
        ];
      return (0, za.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Zr(`${Vm}rxWhy_bars`)
        },
        children: [(0, za.jsx)("span", {
          className: "Baf2RxMostLine",
          children: Qr(`${Vm}rxMost`, {
            amount: Kf(Math.min(Sr.fuelHeat, Sr.cooling, Sr.size))
          })
        }), (0, za.jsx)("span", {
          className: "Baf2RxMostBars",
          children: jr.map((rr => {
            let [Sr, Zr, jr] = rr;
            return (0, za.jsxs)("span", {
              className: eW()("Baf2RxMostBar", Sr, {
                Low: Sr === Wr
              }),
              children: [(0, za.jsx)("small", {
                children: Qr(Zr)
              }), (0, za.jsx)("i", {
                children: (0, za.jsx)("b", {
                  style: {
                    width: 100 * jr / ar + "%"
                  }
                })
              })]
            }, Sr)
          }))
        })]
      })
    }

    function Fm(rr) {
      var Sr;
      let {
        view: Qr,
        heat: Wr,
        settle: ar,
        settleLine: jr,
        settleBad: Ir,
        explain: fr
      } = rr;
      const {
        t: Er
      } = (0, TW.E)(), {
        status: pr
      } = Qr, xr = pr.baf2RxAt.join(","), [mr, Nr] = (0, Zr.useState)((() => Tm(Qr.inner)));
      (0, Zr.useEffect)((() => {
        Nr(Tm(Qr.inner))
      }), [xr, Qr.inner[1]]);
      const Ur = null !== (Sr = Qr.plan) && void 0 !== Sr ? Sr : pf(pr),
        tr = Qr.plan ? Qr.plan.powerPerUnit : pr.baf2RxStats[8],
        hr = null === Wr ? null : "alarm" === (zr = If(pr)) ? "red" : "hot" === zr ? "hot" : "warm" === zr ? "warm" : "cold";
      var zr;
      const Yr = !pr.baf2RxFormed && function(rr, Sr) {
          return 0 !== (rr.baf2RxFlags & Sr)
        }(pr, US),
        nr = pr.baf2RxDamage,
        er = pr.baf2RxDamageTrend;
      return (0, za.jsxs)("div", {
        className: eW()("Baf2RxCore", null !== hr && void 0 !== hr ? hr : "plan"),
        children: [(0, za.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, za.jsx)(Am, {
            inner: Qr.inner,
            looks: Qr.looks,
            layer: mr,
            setLayer: Nr,
            glow: pr.baf2RxFormed ? pr.baf2RxThrottle / 100 : 1,
            melted: Yr,
            explain: fr
          }), (0, za.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              fr(`${Vm}rxWhy_heat`)
            },
            children: [null !== Wr ? (0, za.jsxs)(za.Fragment, {
              children: [(0, za.jsx)("b", {
                children: Er(`${Vm}rxHeatPct`, {
                  pct: String(Wr)
                })
              }), (0, za.jsx)("span", {
                className: eW()("Baf2RxBand", hr),
                children: Er(`${Vm}rxBand_${hr}`)
              })]
            }) : (0, za.jsx)("b", {
              children: Er(`${Vm}rxHeat`)
            }), null !== jr && (0, za.jsx)("span", {
              className: eW()("Baf2RxSettle", {
                Bad: Ir
              }),
              children: jr
            }), nr >= 1 && (0, za.jsxs)("span", {
              className: eW()("Baf2RxDamage", er),
              children: [Er(`${Vm}rxDamageLine`, {
                pct: String(nr)
              }), " \xb7 ", Er(`${Vm}rxDamage_${er}`), (0, za.jsx)("i", {
                children: (0, za.jsx)("b", {
                  style: {
                    width: `${Math.min(100,nr)}%`
                  }
                })
              })]
            })]
          }), (0, za.jsx)(ox, {
            max: ff,
            bands: im,
            ticks: wm,
            now: Wr,
            settle: ar,
            settleTone: Ir ? "bad" : null,
            onExplain: () => {
              fr(`${Vm}rxWhy_heat`)
            }
          })]
        }), (0, za.jsx)(cm, {
          stats: Ur,
          t: Er,
          explain: fr
        }), tr > 0 && (0, za.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            fr(`${Vm}rxWhy_perPellet`)
          },
          children: Er(`${Vm}rxPerPellet`, {
            amount: Kf(tr)
          })
        })]
      })
    }

    function om(rr, Sr) {
      var Qr;
      if (!rr.baf2RxStore) return {
        note: Sr(`${Vm}rxUpTo`, {
          amount: Kf(rr.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Zr, Wr] = rr.baf2RxStore, ar = Wr > 0 ? Zr / Wr : 0, jr = String(Math.floor(100 * ar)), Ir = null !== (Qr = rr.baf2RxStoreNetPerS) && void 0 !== Qr ? Qr : 0, fr = function(rr) {
        var Sr, Qr;
        const [Zr, Wr] = null !== (Sr = rr.baf2RxStore) && void 0 !== Sr ? Sr : [0, 0], ar = null !== (Qr = rr.baf2RxStoreNetPerS) && void 0 !== Qr ? Qr : 0;
        return Wr > 0 && Zr >= Wr - 1 ? "running" === rr.baf2RxState ? `${xm}rxStoreFull` : `${xm}rxStoreFullOnly` : ar > .05 ? `${xm}rxStoreLine` : ar < -.05 ? "running" === rr.baf2RxState ? `${xm}rxStoreUsesMore` : `${xm}rxStoreDraining` : `${xm}rxStorePct`
      }(rr);
      return {
        note: Sr(fr, fr === `${Vm}rxStoreLine` ? {
          pct: jr,
          time: ta(Sr, (Wr - Zr) / Ir)
        } : {
          pct: jr
        }),
        share: ar
      }
    }

    function bm(rr) {
      let {
        view: Sr,
        explain: Qr,
        preview: Zr
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)(), {
        status: ar
      } = Sr, jr = iI(cI(...Sr.dims)), Ir = Ym(ar), fr = Math.min(Math.round(ar.baf2RxFuel), jr.fuel), Er = "running" === ar.baf2RxState, pr = Er ? nm(ar.baf2RxOut, ar.baf2RxMaxNow) : 0, xr = function(rr, Sr, Qr) {
        const Zr = tm(rr),
          Wr = "cryo" === Zr.HN,
          ar = Qr ? Qr.coolantSecs : Zr.pct >= 100 && rr.baf2RxOut >= 1 ? zm(rr, rr.baf2RxThrottle).coolantSecs : null;
        let jr, Ir = !1;
        if (Zr.pct < 100) {
          const Qr = 1 === Zr.makersShort,
            ar = !Wr && rr.baf2RxCryoOpen ? "OrCryo" : "";
          jr = Zr.makersShort > 0 ? Sr(Wr ? `${Vm}rxCryoAddMixer${Qr?"":"s"}` : `${Vm}rxWaterAddCondenser${Qr?"":"s"}${ar}`, {
            count: String(Zr.makersShort)
          }) : Sr(`${Vm}rxWaterNeeds`, {
            rate: fm(Zr.needPerS)
          })
        } else if (null !== ar) jr = Sr(`${Vm}rxWaterRunsOut`, {
          time: ta(Sr, ar)
        });
        else if (Zr.waterBeside > 0) jr = Sr(`${Vm}rxCryoPlusWater`, {
          rate: fm(Zr.waterBeside)
        });
        else {
          const rr = function(rr) {
            return rr.inPerS <= 0 ? "rxWaterNoSupply" : rr.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Zr);
          Ir = "rxWaterNoSupply" === rr, jr = Sr(`${Vm}${rr}`, {
            amount: Kf(Zr.stored)
          })
        }
        return {
          kind: Wr ? "Cryo" : "Water",
          label: Sr(Wr ? `${Vm}rxCryo` : `${Vm}rxWater`),
          number: `${fm(Zr.usePerS)}/s`,
          preview: Qr ? `${fm(Qr.coolPerS)}/s` : null,
          note: jr,
          tone: "noWater" === rr.baf2RxState ? "danger" : Ir ? "warn" : (fr = Zr.pct, Er = ar, fr < 100 ? "danger" : null === Er ? null : Er < 300 ? "danger" : "warn"),
          share: Zr.pct / 100,
          why: Wr ? `${Vm}rxWhy_cryo` : `${Vm}rxWhy_water`,
          short: Zr.pct < 100
        };
        var fr, Er
      }(ar, Wr, Zr), mr = tf(ar, jr.waste, Ir), Nr = om(ar, Wr), Ur = zm(ar, ar.baf2RxTarget), tr = Er && Math.abs(Ur.settle - ar.baf2RxHeat) >= 3, hr = Zr ? Zr.pelletsPerMin / 60 : null;
      return (0, za.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, za.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, za.jsx)(cx, {
            kind: "Fuel",
            label: Wr(`${Vm}rxFuel`),
            number: String(fr),
            preview: null !== hr && hr > 0 && ar.baf2RxFuel > 0 ? ta(Wr, ar.baf2RxFuel / hr) : null,
            note: ar.baf2RxFuel <= 0 ? Wr(`${Vm}rxFuelEmpty`) : Ir > 0 ? Wr(`${Vm}rxFuelLeft`, {
              time: ta(Wr, ar.baf2RxFuel / Ir)
            }) : Wr(1 === fr ? `${Vm}rxFuelPellet` : `${Vm}rxFuelPellets`),
            tone: "noFuel" === ar.baf2RxState ? "danger" : ar.baf2RxFuel < 2 ? "warn" : null,
            share: ar.baf2RxFuel / jr.fuel,
            onExplain: () => {
              Qr(`${Vm}rxWhy_fuel`)
            }
          }), (0, za.jsx)(cx, {
            kind: xr.kind,
            label: xr.label,
            number: xr.number,
            preview: xr.preview,
            note: xr.note,
            tone: xr.tone,
            share: xr.share,
            onExplain: () => {
              Qr(xr.why)
            }
          })]
        }), (0, za.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, za.jsx)(Fx, {
            kind: "Fuel",
            step: pr,
            short: "noFuel" === ar.baf2RxState
          }), (0, za.jsx)(Fx, {
            kind: xr.kind,
            step: pr,
            short: xr.short || "noWater" === ar.baf2RxState
          })]
        }), (0, za.jsx)(Fm, {
          view: Sr,
          heat: ar.baf2RxHeat,
          settle: Math.min(ff, Ur.settle),
          settleLine: tr ? Wr(`${Vm}rxHeatSettles`, {
            pct: String(Math.round(Ur.settle)),
            time: ta(Wr, Ur.settleS)
          }) : null,
          settleBad: Ur.settle > 100,
          explain: Qr
        }), (0, za.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, za.jsx)(Fx, {
            kind: "Power",
            step: pr
          }), (0, za.jsx)(Fx, {
            kind: "Waste",
            step: Er && ar.baf2RxFuel - ar.baf2RxPu > 0 ? pr : 0,
            short: mr.full
          })]
        }), (0, za.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, za.jsx)(cx, {
            kind: "Power",
            label: Wr(`${Vm}rxPowerOut`),
            number: `\u26a1 ${Kf(ar.baf2RxOut)}/s`,
            preview: Zr ? Kf(Zr.out) : null,
            note: Nr.note,
            share: Nr.share,
            onExplain: () => {
              Qr(`${Vm}rxWhy_power`)
            }
          }), (0, za.jsx)(cx, {
            kind: "Waste",
            label: Wr(`${Vm}rxWaste`),
            number: `${Math.floor(ar.baf2RxWaste)}/${jr.waste}`,
            note: mr.full ? Wr(`${Vm}rxWasteFull`) : null !== mr.fullInS ? Wr(`${Vm}rxWasteFullIn`, {
              time: ta(Wr, mr.fullInS)
            }) : Wr(`${Vm}rxWasteSpent`),
            tone: "wasteFull" === ar.baf2RxState ? "danger" : mr.full ? "warn" : null,
            share: ar.baf2RxWaste / jr.waste,
            onExplain: () => {
              Qr(`${Vm}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function Jm(rr) {
      let {
        view: Sr,
        explain: Qr
      } = rr;
      const {
        t: Zr
      } = (0, TW.E)(), Wr = Sr.plan;
      if (!Wr) return null;
      const ar = Wr.fuelHeat <= 0 ? null : Wr.cooling > 0 ? Math.min(ff, 100 * Wr.fuelHeat / Wr.cooling) : ff,
        jr = Zr(`${Vm}rxPlanAtFull`);
      return (0, za.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, za.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, za.jsx)(cx, {
            kind: "Fuel",
            label: Zr(`${Vm}rxFuel`),
            number: Zr(`${Vm}rxPlanPerMin`, {
              amount: yf(Wr.pelletsPerMin)
            }),
            note: Zr(`${Vm}rxPlanPellets`),
            onExplain: () => {
              Qr(`${Vm}rxWhy_fuel`)
            }
          }), (0, za.jsx)(cx, {
            kind: "Water",
            label: Zr(`${Vm}rxWater`),
            number: `${fm(Wr.waterPerS)}/s`,
            note: Sr.status.baf2RxCryoOpen && Wr.waterPerS > 0 ? Zr(`${Vm}rxPlanOrCryo`, {
              rate: fm(Wf(Wr, sr.d) * sr.m)
            }) : jr,
            onExplain: () => {
              Qr(`${Vm}rxWhy_water`)
            }
          })]
        }), (0, za.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, za.jsx)(Fx, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, za.jsx)(Fx, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, za.jsx)(Fm, {
          view: Sr,
          heat: null,
          settle: ar,
          settleLine: null === ar ? null : Zr(`${Vm}rxPlanHeat`, {
            pct: String(Math.round(ar))
          }),
          settleBad: null !== ar && ar > 100,
          explain: Qr
        }), (0, za.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, za.jsx)(Fx, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, za.jsx)(Fx, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, za.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, za.jsx)(cx, {
            kind: "Power",
            label: Zr(`${Vm}rxPowerOut`),
            number: `\u26a1 ${Kf(Wr.max)}/s`,
            note: jr,
            onExplain: () => {
              Qr(`${Vm}rxWhy_power`)
            }
          }), (0, za.jsx)(cx, {
            kind: "Waste",
            label: Zr(`${Vm}rxWaste`),
            number: Zr(`${Vm}rxPlanPerMin`, {
              amount: yf(Wr.pelletsPerMin)
            }),
            note: Zr(`${Vm}rxWasteSpent`),
            onExplain: () => {
              Qr(`${Vm}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const Dm = "buildAFactory2Game:",
      dm = {
        key: `${Dm}rxWaiting`,
        params: {},
        tone: "info"
      };

    function sm(rr, Sr) {
      return 0 !== (rr.baf2RxFlags & Sr)
    }

    function um(rr) {
      var Sr, Qr;
      let {
        store: Wr,
        close: ar
      } = rr;
      const {
        t: jr
      } = (0, TW.E)(), Ir = am(Wr), {
        explained: fr,
        hinting: Er,
        explain: pr,
        explainOnce: xr
      } = bx("baf2RxExplained"), mr = (0, Zr.useCallback)(((rr, Sr) => {
        pr(jr(rr, Sr))
      }), [pr, jr]), Nr = (0, Zr.useCallback)(((rr, Sr) => {
        xr(rr, jr(rr, Sr))
      }), [xr, jr]), [Ur, tr] = (0, Zr.useState)(!1), [hr, zr] = (0, Zr.useState)(!1), Yr = null === Ir || void 0 === Ir ? void 0 : Ir.status, nr = null === Yr || void 0 === Yr ? void 0 : Yr.baf2RxAt.join(","), er = !0 === (null === Yr || void 0 === Yr ? void 0 : Yr.baf2RxFormed);
      (0, Zr.useEffect)((() => {
        zr(!1), tr(!1)
      }), [nr, er]), (0, Zr.useEffect)((() => (Wr.opened(), () => {
        Wr.closed()
      })), [Wr]);
      const Kr = void 0 !== Yr && sm(Yr, zS),
        yr = Yr ? er ? If(Yr) : null !== Ir && void 0 !== Ir && Ir.plan ? function(rr, Sr) {
          if (rr <= 0) return "off";
          if (Sr <= 0) return "alarm";
          const Qr = 100 * rr / Sr;
          return Qr < 50 ? "calm" : Qr < rf ? "warm" : Qr <= 100 ? "hot" : "alarm"
        }(Ir.plan.fuelHeat, Ir.plan.cooling) : "off" : "off",
        Br = Yr ? Ef(Yr) : null,
        Tr = Ir ? Ir.waiting ? dm : er ? ym(Ir.status) : function(rr) {
          var Sr, Qr;
          const {
            status: Zr
          } = rr;
          return Bm({
            left: Zr.baf2RxNeed.reduce(((rr, Sr) => {
              let [, Qr] = Sr;
              return rr + Qr
            }), 0),
            bad: Zr.baf2RxBad,
            rods: null !== (Sr = null === (Qr = rr.plan) || void 0 === Qr ? void 0 : Qr.rods) && void 0 !== Sr ? Sr : 0,
            canFill: sm(Zr, tS),
            melted: sm(Zr, US),
            idle: rr.looks.reduce(((rr, Sr) => rr + (Sr === DI ? 1 : 0)), 0)
          })
        }(Ir) : null,
        vr = Er && null !== Tr && ("ok" === Tr.tone || "info" === Tr.tone),
        Or = Yr ? function(rr) {
          const Sr = 0 !== (rr.baf2RxFlags & mS),
            Qr = rr.baf2RxHeat < kI;
          return 0 !== (rr.baf2RxFlags & US) || Qr && (Sr || !rr.baf2RxFormed) ? null : rr.baf2RxFormed && !Sr ? {
            key: `${jf}rxApartScram`,
            params: {}
          } : {
            key: `${jf}rxApartCooling`,
            params: {
              pct: String(kI)
            }
          }
        }(Yr) : null,
        [Lr, lr, Xr] = null !== (Sr = null === Ir || void 0 === Ir ? void 0 : Ir.dims) && void 0 !== Sr ? Sr : [0, 0, 0],
        Pr = `${Lr}\xd7${lr}\xd7${Xr}`;
      return (0, za.jsx)(Nj.b, {
        close: ar,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, za.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, za.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, za.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, za.jsx)(Im, {
                mood: yr
              }), (0, za.jsxs)("div", {
                children: [(0, za.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: jr(`${Dm}rxTitle`)
                }), Ir && (0, za.jsxs)("p", {
                  className: eW()("Baf2RxSubtitle", er && (null === Br || void 0 === Br ? void 0 : Br.tone)),
                  children: [er && !Kr ? (0, za.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": jr(`${Dm}rxChangeSize`),
                    onClick: () => {
                      if (!Yr) return;
                      const rr = sm(Yr, mS);
                      var Sr;
                      (Sr = {
                        scram: rr,
                        heat: Yr.baf2RxHeat
                      }).scram && Sr.heat < kI ? tr(!0) : mr(rr ? `${Dm}rxResizeCooling` : `${Dm}rxResizeHot`, {
                        pct: String(kI)
                      })
                    },
                    children: [Pr, " \u270e"]
                  }) : Pr, " \xb7 ", jr(er ? null !== (Qr = null === Br || void 0 === Br ? void 0 : Br.label) && void 0 !== Qr ? Qr : `${Dm}rxState_running` : `${Dm}rxSubPlanShort`)]
                })]
              })]
            }), (0, za.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Ir && !Kr && (0, za.jsx)(jm, {
                kind: "reactor",
                busy: Ir.busy.has("apart"),
                whyNot: Or ? () => {
                  mr(Or.key, Or.params)
                } : null,
                apart: () => {
                  Wr.tap("apart", (() => {
                    Wr.send("apart")
                  }))
                }
              }), (0, za.jsx)(Uj.l, {
                onClick: ar
              })]
            })]
          }), Ir && Tr && (0, za.jsxs)("div", {
            className: "Baf2RxBody",
            children: [er ? (0, za.jsx)(bm, {
              view: Ir,
              explain: mr,
              preview: hm(Ir.status)
            }) : (0, za.jsx)(Jm, {
              view: Ir,
              explain: mr
            }), (0, za.jsx)(Jx, {
              text: vr ? `${em(jr,Tr)} ${jr(`${Dm}rxTapHint`)}` : em(jr, Tr),
              tone: Tr.tone,
              explained: fr
            }), Kr ? (0, za.jsxs)(za.Fragment, {
              children: [(0, za.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: jr(`${Dm}rxNotYours`)
              }), (0, za.jsx)(Sm, {
                status: Ir.status,
                store: Wr,
                readOnly: !0
              })]
            }) : er && !hr ? (0, za.jsxs)(za.Fragment, {
              children: [(0, za.jsx)(Hm, {
                view: Ir,
                store: Wr,
                explain: mr,
                explainOnce: Nr
              }), void 0 !== Ir.status.baf2RxLayout && sx(Ir.status) && (0, za.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, za.jsx)(Sm, {
                  status: Ir.status,
                  store: Wr,
                  readOnly: !1,
                  bare: !0
                }), (0, za.jsx)(rm, {
                  status: Ir.status,
                  store: Wr,
                  busy: Ir.busy.has("fill")
                })]
              })]
            }) : (0, za.jsxs)(za.Fragment, {
              children: [(0, za.jsx)(qm, {
                view: Ir,
                store: Wr,
                keepSize: er ? () => {
                  zr(!1)
                } : void 0
              }), mf(Ir.dims, Ir.status.baf2RxDims) && (0, za.jsx)(Rm, {
                need: Ir.status.baf2RxNeed,
                explain: mr
              }), (0, za.jsx)(Sm, {
                status: Ir.status,
                store: Wr,
                readOnly: !1
              })]
            }), Ur && (0, za.jsx)(Wm, {
              id: "baf2ResizeTitle",
              title: `${Dm}rxResizeConfirmTitle`,
              body: `${Dm}rxResizeConfirmBody`,
              yes: `${Dm}rxChangeSize`,
              cancel: () => {
                tr(!1)
              },
              confirm: () => {
                tr(!1), zr(!0)
              }
            })]
          })]
        })
      })
    }
    class rN {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(rr) {
        this.view = rr;
        for (const Sr of this.listeners) Sr()
      }
      get() {
        return this.view
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
    }

    function SN(rr) {
      let {
        commands: Sr,
        store: Qr,
        power: Wr,
        water: ar,
        reactor: jr,
        battery: Ir,
        collider: fr,
        terminal: Er,
        quests: pr,
        tutorial: xr,
        close: mr,
        leave: Nr,
        askIslands: Ur,
        showCore: tr,
        openSocial: hr
      } = rr;
      const {
        userContext: zr
      } = (0, vI.c)(), Yr = TI.featureFlags.useSocialFeatures && zr.isLoggedIn(), [nr, er] = (0, Zr.useState)((() => Qr.get()));
      (0, Zr.useEffect)((() => Qr.subscribe((() => {
        er(Qr.get())
      }))), [Qr]);
      const Kr = "islands" === (null === nr || void 0 === nr ? void 0 : nr.kind) ? nr.backToCore : void 0;
      return (0, za.jsxs)(Hj.Provider, {
        value: Sr,
        children: ["core" === (null === nr || void 0 === nr ? void 0 : nr.kind) && (0, za.jsx)(px, {
          view: nr.core,
          close: mr,
          askIslands: Ur
        }), "dropMap" === (null === nr || void 0 === nr ? void 0 : nr.kind) && (0, za.jsx)(Ux, {
          message: nr.dropMap,
          quests: pr,
          close: mr,
          leave: Nr
        }), "islands" === (null === nr || void 0 === nr ? void 0 : nr.kind) && (0, za.jsx)(Hx, {
          message: nr.islands,
          arrivedAtMs: nr.arrivedAtMs,
          close: Kr ? () => {
            tr(Kr)
          } : mr,
          leave: Nr,
          openSocial: Yr ? hr : null
        }), "quests" === (null === nr || void 0 === nr ? void 0 : nr.kind) && (0, za.jsx)(Lp, {
          store: pr,
          tutorial: xr,
          close: mr
        }), "transfer" === (null === nr || void 0 === nr ? void 0 : nr.kind) && (0, za.jsx)(DE, {
          message: nr.transfer,
          arrivedAtMs: nr.arrivedAtMs,
          close: mr,
          leave: Nr
        }), "power" === (null === nr || void 0 === nr ? void 0 : nr.kind) && (0, za.jsx)(yj, {
          store: Wr,
          close: mr
        }), "water" === (null === nr || void 0 === nr ? void 0 : nr.kind) && (0, za.jsx)(II, {
          store: ar,
          close: mr
        }), "reactor" === (null === nr || void 0 === nr ? void 0 : nr.kind) && (0, za.jsx)(um, {
          store: jr,
          close: mr
        }), "battery" === (null === nr || void 0 === nr ? void 0 : nr.kind) && (0, za.jsx)(Cm, {
          store: Ir,
          close: mr
        }), "collider" === (null === nr || void 0 === nr ? void 0 : nr.kind) && (0, za.jsx)(pE, {
          store: fr,
          close: mr
        }), "terminal" === (null === nr || void 0 === nr ? void 0 : nr.kind) && (0, za.jsx)(wx, {
          store: Er,
          close: mr,
          send: rr => {
            Sr.send(rr)
          }
        })]
      })
    }
    var QN = Qr(40013);

    function ZN(rr, Sr) {
      return rr.distSq - Sr.distSq
    }
    class WN {
      constructor() {
        this.list = [], this.pool = []
      }
      add(rr, Sr, Qr, Zr) {
        let Wr = this.pool[this.list.length];
        Wr || (Wr = {
          x: 0,
          y: 0,
          distSq: 0,
          element: Sr,
          liftRem: Qr,
          dot: Zr
        }, this.pool.push(Wr)), Wr.x = rr.x, Wr.y = rr.y, Wr.distSq = rr.distSq, Wr.element = Sr, Wr.liftRem = Qr, Wr.dot = Zr, this.list.push(Wr)
      }
    }
    class aN {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = rr, this.sizes = new WeakMap, this.observer = new ResizeObserver((rr => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const Sr of rr) {
            const rr = Sr.borderBoxSize[0];
            "dot" !== Sr.target.dataset.crowded && 0 !== rr.inlineSize && 0 !== rr.blockSize && this.sizes.set(Sr.target, {
              width: rr.inlineSize,
              height: rr.blockSize
            })
          }
        })), this.remPx = 16, this.sp = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.kY = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.kY)
      }
      observe(rr) {
        this.observer.observe(rr)
      }
      unobserve(rr) {
        this.observer.unobserve(rr)
      }
      run(rr) {
        const Sr = rr.list;
        Sr.sort(ZN);
        const Qr = this.pxPerVw,
          Zr = this.pxPerVh;
        this.sp.length = 0, this.hud && this.sp.push(...this.hud.boxes(performance.now()));
        for (const ar of Sr) {
          var Wr;
          const rr = this.sizes.get(ar.element);
          let Sr = "no";
          if (rr && rr.width > 0) {
            const Wr = ar.x * Qr,
              jr = ar.y * Zr - ar.liftRem * this.remPx;
            this.fit(Wr, jr, rr.width, rr.height) || (Sr = ar.dot && this.fit(Wr, jr, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Wr = ar.element.dataset.crowded) && void 0 !== Wr ? Wr : "no") !== Sr && ("no" === Sr ? delete ar.element.dataset.crowded : ar.element.dataset.crowded = Sr), "hidden" !== Sr && (0, QN.e)(ar.element, ar.x, ar.y)
        }
        Sr.length = 0
      }
      fit(rr, Sr, Qr, Zr) {
        const Wr = rr - Qr / 2,
          ar = rr + Qr / 2,
          jr = Sr - Zr,
          Ir = this.sp;
        for (let fr = 0; fr < Ir.length; fr += 4)
          if (Wr < Ir[fr + 1] - 2 && ar > Ir[fr] + 2 && jr < Ir[fr + 3] - 2 && Sr > Ir[fr + 2] + 2) return !1;
        return Ir.push(Wr, ar, jr, Sr), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.kY)
      }
    }
    const jN = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class IN {
      constructor() {
        this.cards = jN.map((rr => document.getElementsByClassName(rr))), this.watched = jN.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(rr) {
        rr - this.refreshedAt > 1e3 && (this.refreshedAt = rr, this.stale = !0);
        for (let Qr = 0; Qr < this.cards.length; Qr++) {
          var Sr;
          const rr = null !== (Sr = this.cards[Qr][0]) && void 0 !== Sr ? Sr : null;
          rr !== this.watched[Qr] && this.watch(Qr, rr)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let rr = 0; rr < this.watched.length; rr++) this.watch(rr, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const rr = this.list;
        rr.length = 0;
        for (const Sr of this.watched) {
          if (!Sr || Sr.closest(".NoRoom")) continue;
          const Qr = Sr.getBoundingClientRect();
          let Zr = Qr.top,
            Wr = Qr.bottom;
          if (Sr === this.watched[0] && this.hud) {
            const rr = this.hud.getBoundingClientRect();
            Zr = Math.max(Zr, rr.top), Wr = Math.min(Wr, rr.bottom)
          }
          Qr.width > 0 && Wr > Zr && rr.push(Qr.left, Qr.right, Zr, Wr)
        }
      }
      watch(rr, Sr) {
        const Qr = this.watched[rr];
        var Zr, Wr;
        (Qr && this.sizes.unobserve(Qr), this.watched[rr] = Sr, this.stale = !0, Sr && this.sizes.observe(Sr), 0 === rr) && (null === (Zr = this.hud) || void 0 === Zr || Zr.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Wr = null === Sr || void 0 === Sr ? void 0 : Sr.closest(".Baf2QuestHud")) && void 0 !== Wr ? Wr : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var fN = Qr(40020);
    class EN {
      constructor(rr) {
        this.onElement = rr, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(rr) {
        const Sr = [];
        for (let Qr = 0; Qr + 4 < rr.length; Qr += 5) {
          const Zr = [rr[Qr], rr[Qr + 1], rr[Qr + 2]];
          Sr.push({
            key: Zr.join(","),
            pos: Zr,
            status: SW[rr[Qr + 3]],
            kind: LS[rr[Qr + 4]]
          })
        }
        this.markers = Sr, this.keys = new Set(Sr.map((rr => {
          let {
            key: Sr
          } = rr;
          return Sr
        }))), this.notify()
      }
      covers(rr) {
        return this.keys.has(rr)
      }
      get() {
        return this.markers
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      bind(rr) {
        let Sr = this.refs.get(rr);
        return Sr || (Sr = Sr => {
          const Qr = this.elements.get(rr);
          var Zr, Wr;
          Qr && (null === (Zr = this.onElement) || void 0 === Zr || Zr.call(this, Qr, !1));
          Sr ? (this.elements.set(rr, Sr), null === (Wr = this.onElement) || void 0 === Wr || Wr.call(this, Sr, !0)) : (this.elements.delete(rr), this.refs.delete(rr))
        }, this.refs.set(rr, Sr)), Sr
      }
      onAfterRender(rr, Sr, Qr) {
        for (const Zr of this.markers) {
          const Wr = this.elements.get(Zr.key);
          if (!Wr) continue;
          const ar = (0, fN.b)(Wr, rr, Sr, Zr.pos, 1.05, 24);
          ar && Qr.add(ar, Wr, .45, !0)
        }
      }
      notify() {
        for (const rr of this.listeners) rr()
      }
    }
    const pN = {
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
    const xN = (0, Zr.memo)((function(rr) {
        let {
          status: Sr,
          kind: Qr,
          bindRef: Zr
        } = rr;
        const {
          t: Wr
        } = (0, TW.E)(), ar = function(rr, Sr) {
          var Qr;
          if ("noFuel" === rr) {
            var Zr, Wr;
            const rr = null === (Zr = RS[Sr]) || void 0 === Zr || null === (Wr = Zr.fuels) || void 0 === Wr ? void 0 : Wr.find((rr => ZQ.includes(rr)));
            return null !== rr && void 0 !== rr ? rr : pN.noFuel
          }
          return void 0 !== (null === (Qr = RS[Sr]) || void 0 === Qr ? void 0 : Qr.cryoMade) ? "noOutlet" === rr ? "Fluid Pipe" : "noInput" === rr ? "Biomass" : pN[rr] : pN[rr]
        }(Sr, Qr);
        return (0, za.jsxs)("div", {
          className: eW()("Baf2StallMarker", Sr),
          ref: Zr,
          hidden: !0,
          children: [ar && (0, za.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, za.jsx)(OW.d, {
              itemName: ar,
              amount: 0
            })
          }), (0, za.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === Sr ? "?" : "!"
          }), (0, za.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Wr(`buildAFactory2Game:stallTag_${Sr}`)
          })]
        })
      })),
      mN = (0, Zr.memo)((function(rr) {
        let {
          controller: Sr
        } = rr;
        const [Qr, Wr] = (0, Zr.useState)((() => Sr.get()));
        return (0, Zr.useEffect)((() => (Wr(Sr.get()), Sr.subscribe((() => {
          Wr(Sr.get())
        })))), [Sr]), (0, za.jsx)("div", {
          className: "Baf2StallMarkers",
          children: Qr.map((rr => (0, za.jsx)(xN, {
            status: rr.status,
            kind: rr.kind,
            bindRef: Sr.bind(rr.key)
          }, rr.key)))
        })
      })),
      NN = tQ.h + 150;
    class UN {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(rr, Sr) {
        const Qr = Sr - rr;
        null === this.offset || Qr < this.offset ? this.offset = Qr : this.offset = Math.min(Qr, this.offset + .02 * (Sr - this.sampledAt)), this.sampledAt = Sr
      }
      toLocal(rr) {
        var Sr;
        return rr + (null !== (Sr = this.offset) && void 0 !== Sr ? Sr : 0) + NN
      }
    }
    var tN = Qr(40027);
    const hN = 15 * Math.PI / 180,
      zN = Math.SQRT2,
      YN = [4, 2];

    function nN(rr, Sr) {
      const Qr = [1 / 0, 1 / 0, 1 / 0],
        Zr = [-1 / 0, -1 / 0, -1 / 0];
      for (const fr of rr)
        for (let rr = 0; rr < 3; rr++) Qr[rr] = Math.min(Qr[rr], fr[rr]), Zr[rr] = Math.max(Zr[rr], fr[rr]);
      const Wr = (Qr[0] + Zr[0]) / 2,
        ar = (Qr[1] + Zr[1]) / 2,
        jr = (Qr[2] + Zr[2]) / 2;
      let Ir = 0;
      for (const fr of rr) Ir = Math.max(Ir, Math.hypot(fr[0] - Wr, fr[1] - ar, fr[2] - jr));
      return {
        x: Wr,
        y: ar,
        z: jr,
        r: Ir + Sr
      }
    }

    function eN(rr, Sr, Qr) {
      const Zr = Sr.x - rr.x,
        Wr = Sr.y - rr.y,
        ar = Sr.z - rr.z,
        jr = Math.sqrt(Zr * Zr + Wr * Wr + ar * ar);
      if (jr <= Sr.r + 8) return 1;
      const Ir = Sr.r / jr,
        fr = Math.sqrt(1 - Ir * Ir),
        Er = fr < -rr.cosHalf,
        pr = (Zr * rr.dx + Wr * rr.dy + ar * rr.dz) / jr;
      if (!Er && pr < rr.cosHalf * fr - rr.sinHalf * Ir) return 0;
      const xr = Qr * zN * rr.frameMs * rr.pxPerBlock / (jr - Sr.r);
      for (let mr = 0; mr < YN.length; mr++)
        if (xr * YN[mr] <= 1) return YN[mr];
      return 1
    }

    function KN(rr, Sr) {
      return {
        name: rr,
        at: Sr,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const yN = [0, 0, 0];

    function BN(rr, Sr, Qr) {
      let [, Zr, Wr, ar, jr, Ir] = Sr;
      const fr = tQ.d * (null !== jr && void 0 !== jr ? jr : 1),
        Er = [];
      for (let Nr = 0; Nr < Zr.length; Nr += 3) Er.push([Zr[Nr] + .5, Zr[Nr + 1] + .65, Zr[Nr + 2] + .5]);
      const pr = [];
      for (let Nr = 0; Nr < Er.length - 1; Nr++) {
        const [rr, Sr] = [Er[Nr], Er[Nr + 1]];
        pr.push([(rr[0] + Sr[0]) / 2, (rr[1] + Sr[1]) / 2, (rr[2] + Sr[2]) / 2])
      }
      const xr = Er.slice(1, -1),
        mr = new Uint8Array(xr.length);
      for (const Nr of null !== Ir && void 0 !== Ir ? Ir : []) mr[Nr >> 1] |= 1 & Nr ? 2 : 1;
      return {
        island: rr,
        length: xr.length,
        loop: ar,
        cellsPerMs: fr,
        edges: pr,
        Uh: xr,
        bounds: nN([...pr, ...xr], .3),
        changed: !0,
        culled: !1,
        hide: mr,
        items: Wr.map((rr => {
          let [Sr, Zr] = rr;
          return KN(Sr, (0, tQ.y)(Sr, Zr, Qr, fr).at)
        }))
      }
    }

    function TN(rr, Sr) {
      const {
        items: Qr
      } = rr;
      if (0 === Qr.length) return;
      const Zr = rr.length / rr.cellsPerMs,
        Wr = Math.floor((Sr - Qr[0].at) / Zr) - 1;
      if (Wr > 0)
        for (const ar of Qr) ar.at += Wr * Zr
    }

    function vN(rr, Sr) {
      const Qr = Math.min(Math.floor(Sr), rr.length - 1),
        Zr = rr.hide[Qr];
      return 0 !== Zr && 0 !== (Zr & (Sr - Qr < .5 ? 1 : 2))
    }

    function ON(rr, Sr) {
      const Qr = Math.min(Math.floor(Sr), rr.length - 1),
        Zr = Sr - Qr,
        Wr = Zr < .5,
        ar = Wr ? rr.edges[Qr] : rr.Uh[Qr],
        jr = Wr ? rr.Uh[Qr] : rr.edges[Qr + 1],
        Ir = Wr ? 2 * Zr : 2 * Zr - 1;
      yN[0] = ar[0] + (jr[0] - ar[0]) * Ir, yN[1] = ar[1] + (jr[1] - ar[1]) * Ir, yN[2] = ar[2] + (jr[2] - ar[2]) * Ir
    }
    const LN = Math.PI / 4;
    class lN {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new UN, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.kY = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(rr) {
        const Sr = performance.now();
        this.clock.sample(rr.baf2BeltLinesAt, Sr), this.queue(rr.baf2BeltLinesAt, rr, 0, null, null, 0), this.applyDue(Sr)
      }
      onMoves(rr) {
        const Sr = performance.now(),
          Qr = rr.baf2BeltMovesAt;
        this.clock.sample(Qr, Sr);
        for (const [Zr, Wr, ar, jr] of rr.baf2BeltMoveList) null === Wr ? this.queue(Qr - ar, null, Zr, null, null, null !== jr && void 0 !== jr ? jr : 0) : this.queue(Qr - ar, null, Zr, Wr, null !== jr && void 0 !== jr ? jr : null, 0);
        this.applyDue(Sr)
      }
      start(rr) {
        this.pool = new tN.c(rr, {
          scale: .3,
          yaw: LN
        }, 64), this.kY(), window.addEventListener("resize", this.kY)
      }
      onAfterRender(rr) {
        const {
          pool: Sr
        } = this;
        if (!Sr) return;
        const Qr = performance.now(),
          Zr = Qr - this.lastRenderAt;
        this.lastRenderAt = Qr, Zr < 100 && (this.frameMs += .1 * (Zr - this.frameMs));
        const Wr = Qr + this.frameMs;
        this.applyDue(Wr);
        const ar = rr.cameraPosition,
          jr = Sr.follow(ar);
        this.setView(rr, ar);
        const Ir = this.frame++;
        for (let fr = 0; fr < this.shown.length; fr++) {
          const rr = this.shown[fr],
            Qr = eN(this.view, rr.bounds, rr.cellsPerMs),
            Zr = rr.culled && 0 !== Qr;
          if (rr.culled = 0 === Qr, !jr && !rr.changed && !Zr && (0 === Qr || (Ir + fr) % Qr !== 0)) continue;
          rr.changed = !1, rr.loop && (TN(rr, Wr), (0, tQ.s)(rr.items, rr.length, Wr, rr.cellsPerMs));
          let ar = rr.length;
          for (let Ir = 0; Ir < rr.items.length; Ir++) {
            const Qr = rr.items[Ir],
              Zr = (0, tQ.C)(Qr.at, ar, Wr, rr.cellsPerMs);
            if (ar = Zr - tQ.k, vN(rr, Zr)) {
              null === Qr.kind || Qr.hidden || (Qr.kind.hide(Qr.slot), Qr.hidden = !0);
              continue
            }
            let fr = Qr.kind;
            if (null === fr) {
              if (fr = Sr.kindOf(Qr.name), null === fr) continue;
              Qr.kind = fr, Qr.slot = fr.take(), Qr.hidden = !0, Qr.drawn = NaN
            } else if (Zr === Qr.drawn && !Qr.hidden && !jr) continue;
            ON(rr, Zr), fr.write(Qr.slot, yN[0], yN[1], yN[2]), Qr.hidden = !1, Qr.drawn = Zr
          }
        }
        Sr.commit()
      }
      dispose() {
        var rr;
        window.removeEventListener("resize", this.kY), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (rr = this.pool) || void 0 === rr || rr.dispose(), this.pool = null
      }
      setView(rr, Sr) {
        const {
          cameraDir: Qr,
          lastDir: Zr
        } = this, Wr = rr.cameraDirection;
        for (let pr = 0; pr < 3; pr++) Zr[pr] = Qr[pr], Qr[pr] = Wr[pr];
        const ar = Qr[0] * Zr[0] + Qr[1] * Zr[1] + Qr[2] * Zr[2],
          jr = Number.isNaN(ar) ? 0 : Math.acos(Math.min(1, Math.max(-1, ar))),
          {
            width: Ir,
            height: fr
          } = this,
          Er = rr.tanHalfFovX;
        ! function(rr, Sr, Qr, Zr, Wr, ar, jr) {
          let Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          rr.x = Sr[0], rr.y = Sr[1], rr.z = Sr[2], rr.dx = Qr[0], rr.dy = Qr[1], rr.dz = Qr[2];
          const fr = Math.min(Math.PI, Math.atan(Math.sqrt(Zr * Zr + Wr * Wr)) + hN + Ir);
          rr.cosHalf = Math.cos(fr), rr.sinHalf = Math.sin(fr), rr.pxPerBlock = ar / (2 * Wr), rr.frameMs = jr
        }(this.view, Sr, Qr, Er, Er * fr / Ir, fr * window.devicePixelRatio, this.frameMs, jr)
      }
      queue(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = Math.max(this.clock.toLocal(rr), this.lastPendingAt);
        this.lastPendingAt = jr, this.pending.push({
          at: jr,
          lines: Sr,
          line: Qr,
          name: Zr,
          pos: Wr,
          idx: ar
        })
      }
      applyDue(rr) {
        const {
          pending: Sr
        } = this;
        for (; this.pendingHead < Sr.length && Sr[this.pendingHead].at <= rr;) {
          const rr = Sr[this.pendingHead++];
          if (rr.lines) this.applyLines(rr.lines, rr.at), rr.lines = null;
          else {
            const Sr = this.lines.get(rr.line);
            Sr && this.applyMove(Sr, rr, rr.at)
          }
        }
        this.pendingHead === Sr.length ? (Sr.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > Sr.length && (Sr.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(rr, Sr) {
        this.clearIsland(rr.baf2BeltIsland);
        for (const Qr of rr.baf2BeltLineList) this.lines.set(Qr[0], BN(rr.baf2BeltIsland, Qr, Sr));
        this.shown = [...this.lines.values()]
      }
      applyMove(rr, Sr, Qr) {
        let {
          name: Zr,
          pos: Wr,
          idx: ar
        } = Sr;
        rr.changed = !0, rr.loop && (TN(rr, Qr), (0, tQ.s)(rr.items, rr.length, Qr, rr.cellsPerMs)), null !== Zr && null !== Wr ? (0, tQ.w)(rr.items, rr.length, KN(Zr, Qr), Wr, Qr, rr.cellsPerMs) : null !== Zr ? rr.items.push(KN(Zr, Qr)) : rr.items.length > ar && this.release((0, tQ.D)(rr.items, rr.length, Qr, rr.cellsPerMs, ar))
      }
      clearIsland(rr) {
        for (const [Sr, Qr] of this.lines)
          if (Qr.island === rr) {
            for (const rr of Qr.items) this.release(rr);
            this.lines.delete(Sr)
          }
      }
      release(rr) {
        null !== rr.kind && (rr.kind.release(rr.slot), rr.kind = null, rr.slot = -1, rr.hidden = !0, rr.drawn = NaN)
      }
    }
    var XN = Qr(38154),
      PN = Qr(40033);

    function HN(rr) {
      let {
        depth: Sr,
        store: Qr,
        t: Wr
      } = rr;
      const ar = function(rr) {
        const [Sr, Qr] = (0, Zr.useState)(rr.lastPlayerY());
        return (0, dE.c)(RW, Qr), (0, Zr.useEffect)((() => {
          Qr(rr.lastPlayerY())
        }), [rr]), Sr
      }(Qr);
      if (null === ar) return null;
      const [jr, Ir] = Sr, fr = ar > jr ? jr : null !== Ir && ar < Ir ? Ir : null, Er = {
        y: Ua(ar),
        target: null === fr ? "" : Ua(fr)
      };
      return (0, za.jsx)("span", {
        className: eW()("Baf2QuestDepth", {
          Reached: null === fr
        }),
        children: Wr(`${Sp}${null===fr?"questDepthReached":"questDepth"}`, Er)
      })
    }

    function qN(rr) {
      let {
        also: Sr,
        view: Qr,
        t: Zr
      } = rr;
      return (0, za.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, za.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, za.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, za.jsx)("strong", {
            children: Zr(`${Sp}questAlsoDownHere`)
          }), (0, za.jsx)("span", {
            className: "Baf2QuestChips",
            children: Sr.map((rr => {
              let [Sr, Wr, ar, jr] = rr;
              return (0, za.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Zr(`${Sp}questAlsoItem`, {
                  item: Zp(Zr, Qr.itemNames[Sr], Sr),
                  have: String(Wr),
                  need: String(ar)
                }),
                children: [(0, za.jsx)(jp, {
                  item: Sr
                }), (0, za.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Wr}/${ar}`
                }), null !== jr && (0, za.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Zr(`${Sp}questAlsoDepth`, {
                    y: Ua(jr)
                  })
                })]
              }, Sr)
            }))
          })]
        })]
      })
    }
    var RN = Qr(4645);

    function gN(rr) {
      let {
        expanded: Sr,
        inventoryOpen: Qr,
        children: Wr
      } = rr;
      const ar = (0, Zr.useRef)(null);
      return (0, Zr.useEffect)((() => {
        const rr = ar.current,
          Sr = null === rr || void 0 === rr ? void 0 : rr.closest(".RightElements"),
          Zr = null === rr || void 0 === rr ? void 0 : rr.firstElementChild;
        if (!rr || !Sr || !Zr) return;
        return (0, PN.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [Sr, Zr], (() => {
          const Wr = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Wr.length) return;
          const ar = Math.max(...Wr.map((rr => rr.getBoundingClientRect().bottom))),
            jr = Sr.getBoundingClientRect(),
            Ir = Qr ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (Ir) {
            const Sr = parseFloat(getComputedStyle(Zr).marginLeft) + parseFloat(getComputedStyle(Zr).marginRight),
              Qr = jr.right - Ir.getBoundingClientRect().right - 8 - Sr;
            rr.style.setProperty("--baf2-quest-room", `${Qr}px`), rr.classList.toggle("NoRoom", Qr < 150)
          } else rr.style.removeProperty("--baf2-quest-room"), rr.classList.remove("NoRoom");
          const fr = ar - jr.top + 8,
            Er = function(rr, Sr, Qr) {
              const Zr = Sr.getBoundingClientRect(),
                Wr = rr.getBoundingClientRect(),
                ar = (0, RN.i)(Wr.left, Wr.right, Zr.top + Qr);
              if (null !== ar && ar < Zr.bottom) return ar - Zr.top;
              return Zr.height - (parseFloat(getComputedStyle(Sr).paddingBottom) || 0)
            }(rr, Sr, fr) - 8,
            pr = window.innerHeight / 2 - jr.top,
            {
              top: xr,
              maxHeight: mr
            } = function(rr, Sr, Qr, Zr, Wr) {
              const ar = Math.min(Qr, Math.max(0, Sr - rr)),
                jr = Wr ? rr : Math.max(rr, Math.min(Zr - ar / 2, Sr - ar));
              return {
                top: jr,
                maxHeight: Math.max(0, Sr - jr)
              }
            }(fr, Er, function(rr) {
              const Sr = rr.firstElementChild,
                Qr = Sr ? Sr.scrollHeight - Sr.clientHeight : 0;
              return rr.getBoundingClientRect().height + Math.max(0, Qr)
            }(Zr), pr, (0, ha.e)());
          rr.style.top = `${xr}px`, rr.style.maxHeight = `${mr}px`
        }))
      }), [Qr]), (0, za.jsx)("div", {
        ref: ar,
        className: eW()("Baf2QuestHud", {
          Expanded: Sr
        }),
        children: Wr
      })
    }

    function CN(rr) {
      let {
        amount: Sr,
        t: Qr
      } = rr;
      return (0, za.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, za.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, za.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: Qr(`${Sp}questStepsDone`, {
            amount: String(Sr)
          })
        })]
      })
    }

    function MN(rr) {
      let {
        pulse: Sr
      } = rr;
      return 0 === Sr ? null : (0, za.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, Sr)
    }

    function GN(rr) {
      var Sr;
      let {
        store: Qr
      } = rr;
      const Wr = (0, dE.g)(qW, Qr.get()),
        [ar, jr] = (0, Zr.useState)(!1),
        {
          t: Ir
        } = (0, TW.E)(),
        fr = (0, ha.h)(),
        {
          openInGameMenuName: Er,
          openEverythingMenuName: pr
        } = (0, zW.n)(["openInGameMenuName", "openEverythingMenuName"]),
        xr = "inventory" === Er && null === pr,
        mr = null !== Er && !xr || null !== pr;
      if (! function(rr) {
          return null !== rr.name || null !== rr.side
        }(Wr) || mr || "off" === Wr.tutorial) return null;
      const Nr = AW(Wr.rows),
        Ur = Nr.filter((rr => rr.done)).length,
        tr = function(rr, Sr) {
          const Qr = wW(rr);
          let Zr = 0;
          return rr.filter(((rr, Wr) => !!rr.justFinished || !(rr.done || Wr < Qr || Zr > Sr) && (Zr++, !0)))
        }(Wr.rows, fr ? 0 : 2),
        hr = fr ? tr : function(rr, Sr) {
          const Qr = Sr.filter((rr => !rr.justFinished));
          if (Qr.length < 2) return [...Sr];
          const Zr = rr.indexOf(Qr[0]),
            Wr = rr.indexOf(Qr[Qr.length - 1]),
            ar = new Set(AW(rr));
          return rr.filter(((rr, Qr) => Sr.includes(rr) || rr.done && ar.has(rr) && Qr > Zr && Qr < Wr))
        }(Wr.rows, tr),
        zr = ar ? Wr.rows : hr,
        Yr = ar || fr ? [] : function(rr, Sr) {
          const Qr = new Array(Sr.length + 1).fill(0),
            Zr = new Set(AW(rr));
          let Wr = 0;
          for (const ar of rr) Wr < Sr.length && ar === Sr[Wr] ? Wr++ : ar.done && Zr.has(ar) && Qr[Wr]++;
          return Qr
        }(Wr.rows, hr),
        nr = ar || hr.length < Wr.rows.length || null !== Wr.reward,
        er = kW(Wr),
        Kr = er ? Ir(`${Sp}questLineComplete`) : Wr.tier ? Ep(Ir, Wr.tier) : Ir(`${Sp}currentQuest`),
        yr = function(rr) {
          var Sr, Qr;
          if (kW(rr)) return null;
          const Zr = null === (Sr = rr.chapters) || void 0 === Sr ? void 0 : Sr.find((Sr => {
            let [Qr] = Sr;
            return Qr === rr.tier
          }));
          if (!Zr) return null;
          const Wr = Zr[1].filter((rr => !rr[4]));
          if (0 === Wr.length) return null;
          const ar = null === (Qr = rr.name) || void 0 === Qr ? void 0 : Qr[0],
            jr = rr => Wr.findIndex((Sr => Sr[0] === ar && (!rr || !Sr[3]))),
            Ir = jr(!0),
            fr = Ir >= 0 ? Ir : jr(!1);
          if (fr >= 0) return [fr + 1, Wr.length];
          const Er = Wr.filter((rr => rr[3])).length;
          return [Math.min(Er + 1, Wr.length), Wr.length]
        }(Wr);
      return (0, za.jsx)(XN.d, {
        placement: "topRight",
        children: (0, za.jsx)(gN, {
          expanded: ar,
          inventoryOpen: xr,
          children: (0, za.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: Qp,
            children: [null !== Wr.name && (0, za.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, za.jsx)(MN, {
                pulse: Wr.pulse
              }), (0, za.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, za.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [Kr, yr && (0, za.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": Ir(`${Sp}questPlaceLabel`, {
                      n: String(yr[0]),
                      total: String(yr[1])
                    }),
                    children: Ir(`${Sp}questPlace`, {
                      n: String(yr[0]),
                      total: String(yr[1])
                    })
                  }), Wr.tier && Wr.core && !er && (0, za.jsx)(pp, {
                    core: Wr.core,
                    t: Ir
                  })]
                })
              }), (0, za.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Ir(`${Sp}${Wr.name[0]}`, Wp(Wr.name[1]))
              }), (Nr.length > 1 || nr) && (0, za.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [Nr.length > 1 && (0, za.jsx)(xp, {
                  rows: Nr,
                  t: Ir
                }), nr && (0, za.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": ar,
                  onClick: () => {
                    jr(!ar)
                  },
                  children: [(0, za.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: Ir(`${Sp}questStepsToggle`, {
                      done: String(Ur),
                      total: String(Nr.length)
                    })
                  }), (0, za.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: ar ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, za.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [zr.map(((rr, Sr) => {
                  var ar;
                  const jr = rr.current && Wr.depth;
                  return (0, za.jsxs)(Zr.Fragment, {
                    children: [(null !== (ar = Yr[Sr]) && void 0 !== ar ? ar : 0) > 0 && (0, za.jsx)(CN, {
                      amount: Yr[Sr],
                      t: Ir
                    }), (0, za.jsx)(mp, {
                      row: rr,
                      view: Wr,
                      t: Ir,
                      extra: jr && (0, za.jsx)(HN, {
                        depth: jr,
                        store: Qr,
                        t: Ir
                      })
                    })]
                  }, rr.id)
                })), (null !== (Sr = Yr[zr.length]) && void 0 !== Sr ? Sr : 0) > 0 && (0, za.jsx)(CN, {
                  amount: Yr[zr.length],
                  t: Ir
                }), Wr.also.length > 0 && (0, za.jsx)(qN, {
                  also: Wr.also,
                  view: Wr,
                  t: Ir
                })]
              }), ar && Wr.reward && (0, za.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [Ir(`${Sp}questReward`), (0, za.jsx)(jp, {
                  item: Wr.reward
                }), Zp(Ir, Wr.itemNames[Wr.reward], Wr.reward)]
              })]
            }), Wr.side && (0, za.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [MW(Wr, Date.now()) && (0, za.jsx)(MN, {
                pulse: Wr.sideCameUpAt
              }), (0, za.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: Ir(`${Sp}questSide`)
              }), (0, za.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Ir(`${Sp}${Wr.side.name[0]}`, Wp(Wr.side.name[1]))
              }), (0, za.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, za.jsx)(mp, {
                  row: Wr.side.row,
                  view: Wr,
                  t: Ir
                })
              })]
            })]
          })
        })
      })
    }
    const kN = "baf2ToastView";
    class AN {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = rr, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: rr,
          holdMs: Sr
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const rr = this.dropCovered();
          rr && this.show(rr.message, rr.holdMs)
        }), 250));
        const Qr = this.dropCovered();
        null !== Qr && (Qr.holdMs > 0 || "baf2ToastCelebrate" === Qr.message.baf2ToastStyle) && "baf2ToastCelebrate" !== rr.baf2ToastStyle && this.show(Qr.message, Qr.holdMs);
        const Zr = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== rr.baf2ToastStyle && Zr > 0) return this.pending = {
          message: rr,
          holdMs: Sr
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const rr = this.pending;
          this.pending = null, rr && this.present(rr.message, rr.holdMs)
        }), Zr));
        this.present(rr, Sr)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(rr, Sr) {
        this.clearTimers(), this.pending = null;
        const Qr = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: rr.baf2ToastText,
          style: rr.baf2ToastStyle,
          swapped: Qr,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === rr.baf2ToastStyle ? 1500 : Sr), this.Jp();
        const Zr = Math.min(8e3, Math.max(1e3, rr.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Zr)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.Jp(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Jp()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const rr = this.covering;
        return this.covering = null, rr
      }
      Jp() {
        PW.i.Jp(kN, this.view, !0)
      }
    }
    var VN = Qr(92);
    const iN = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function wN(rr) {
      let {
        store: Sr
      } = rr;
      const Qr = (0, dE.g)(kN, Sr.get()),
        {
          openInGameMenuName: Zr,
          openEverythingMenuName: Wr
        } = (0, zW.n)(["openInGameMenuName", "openEverythingMenuName"]),
        ar = Qr && (0, za.jsxs)("div", {
          className: eW()("Baf2Toast", iN[Qr.style], {
            Swapped: Qr.swapped,
            Leaving: Qr.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === Qr.style && (0, za.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, za.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, za.jsx)(LW.c, {
              text: Qr.text
            })
          })]
        }, Qr.id);
      return null !== Zr && null === Wr ? (0, VN.createPortal)((0, za.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: ar
      }), document.body) : (0, za.jsx)(XN.d, {
        children: ar
      })
    }
    const cN = "baf2AreaView";
    class FN {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.wI = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.wI = null
      }
      arrive(rr, Sr) {
        Sr && function(rr) {
          return "home" === rr.baf2AreaPlace && void 0 !== rr.baf2AreaNameText
        }(rr) ? this.wI = rr : this.show(rr)
      }
      release() {
        const rr = this.wI;
        null !== rr && this.show(rr)
      }
      show(rr) {
        this.clearTimer(), this.wI = null;
        const Sr = void 0 === rr.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: rr,
          ms: Sr
        }, this.Jp(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Jp()
        }), Sr)
      }
      dispose() {
        this.clearTimer(), this.wI = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      Jp() {
        PW.i.Jp(cN, this.view, !0)
      }
    }

    function oN(rr) {
      var Sr;
      let {
        store: Qr
      } = rr;
      const {
        t: Zr
      } = (0, TW.E)(), Wr = (0, dE.g)(cN, Qr.get());
      if (!Wr) return null;
      const {
        area: ar
      } = Wr, jr = ar.baf2AreaResetMinutes;
      return (0, za.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": ar.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Wr.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, za.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), ar.baf2AreaHeading && (0, za.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Zr(ar.baf2AreaHeading)
        }), (0, za.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (Sr = ar.baf2AreaNameText) && void 0 !== Sr ? Sr : Zr(ar.baf2AreaName)
        }), ar.baf2AreaNote && (0, za.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Zr(ar.baf2AreaNote)
        }), void 0 !== jr && (0, za.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Zr("buildAFactory2Game:areaWildsReset", {
            time: ta(Zr, 60 * jr)
          })
        })]
      }, Wr.id)
    }
    const bN = "baf2GearGauge";
    class JN {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      rK(rr) {
        var Sr;
        if (this.clearLinger(), null === rr.gearPowerKind) return void this.set(null);
        const Qr = "jetpack" === rr.gearPowerKind && (Zr = rr.gearChargeState, Wr = rr.gearCharge, "flying" === Zr || "charging" === Zr || "outOfCharge" === Zr || "ceiling" === Zr || "offPlot" === Zr || "noPower" === Zr && Wr <= 0);
        var Zr, Wr;
        const ar = !0 === (null === (Sr = this.view) || void 0 === Sr ? void 0 : Sr.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          jr = Qr || "jetpack" === rr.gearPowerKind && ar;
        this.set({
          gauge: rr,
          jetShown: jr
        }), jr && !Qr && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(rr) {
        this.view = rr, PW.i.Jp(bN, rr, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const DN = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function dN(rr) {
      let {
        store: Sr
      } = rr;
      const Qr = (0, dE.g)(bN, Sr.get());
      return Qr ? "jetpack" === Qr.gauge.gearPowerKind ? (0, za.jsx)(sN, {
        view: Qr
      }) : (0, za.jsx)(uN, {
        gauge: Qr.gauge
      }) : null
    }

    function sN(rr) {
      let {
        view: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)(), {
        gauge: Zr
      } = Sr, Wr = Zr.gearChargeMax > 0 ? Math.max(0, Math.min(1, Zr.gearCharge / Zr.gearChargeMax)) : 0, ar = DN[Zr.gearChargeState], jr = ar ? Qr(ar) : null;
      return (0, za.jsxs)("div", {
        className: eW()("Baf2JetArc", {
          Shown: Sr.jetShown,
          Low: Wr < .2,
          Warm: Wr >= .2 && Wr < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Wr)
        },
        "aria-hidden": !Sr.jetShown,
        children: [(0, za.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, za.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: rU,
            pathLength: 100
          }), (0, za.jsx)("path", {
            className: "Baf2JetArcFill",
            d: rU,
            pathLength: 100
          })]
        }), (0, za.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Wr), "%"]
        }), jr && (0, za.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: jr
        })]
      })
    }

    function uN(rr) {
      let {
        gauge: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)(), Zr = function(rr, Sr) {
        switch (Sr.gearPowerKind) {
          case "skyPack":
            return rr("buildAFactory2Game:gearSkyPack", {
              charge: Sr.gearCharge,
              max: Sr.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return rr("buildAFactory2Game:gearIslandDraw", {
              power: dr(Sr.gearIslandPower),
              cost: dr(Sr.gearCostPerUse)
            });
          case "barrier":
            return rr("buildAFactory2Game:gearBarrier", {
              shield: Math.round(Sr.gearCharge),
              max: Sr.gearChargeMax,
              power: dr(Sr.gearIslandPower)
            });
          default:
            return null
        }
      }(Qr, Sr);
      return null === Zr ? null : (0, za.jsx)(XN.d, {
        children: (0, za.jsx)("div", {
          className: eW()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === Sr.gearChargeState || "outOfCharge" === Sr.gearChargeState
          }),
          role: "status",
          children: Zr
        })
      })
    }
    const rU = (() => {
      const rr = rr => {
        const Sr = rr * Math.PI / 180;
        return `${(40*Math.cos(Sr)).toFixed(2)} ${(40*Math.sin(Sr)).toFixed(2)}`
      };
      return `M ${rr(160)} A 40 40 0 1 1 ${rr(380)}`
    })();
    class SU {
      constructor(rr) {
        this.onElement = rr, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      rK(rr) {
        let Sr = rr.baf2LabelsReset || rr.baf2LabelsIsland !== this.island;
        Sr && (this.labels.clear(), this.island = rr.baf2LabelsIsland);
        for (const [Qr, Zr, Wr, ar, jr] of rr.baf2LabelsList) {
          const rr = `${Qr},${Zr},${Wr}`,
            Ir = this.labels.get(rr);
          null === ar ? Sr = this.labels.delete(rr) || Sr : Ir && Ir.item === ar && (Ir.count === jr || Ir.count >= 0 && jr >= 0) ? Ir.count !== jr && (Ir.count = jr, this.writeCount(rr, jr)) : (this.labels.set(rr, {
            key: rr,
            pos: [Qr, Zr, Wr],
            item: ar,
            count: jr
          }), this.writeCount(rr, jr), Sr = !0)
        }
        if (this.changes++, Sr) {
          this.snapshot = [...this.labels.values()];
          for (const rr of this.listeners) rr()
        }
      }
      bindCount(rr) {
        const Sr = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${rr}`;
        let Qr = this.countRefs.get(Sr);
        return Qr || (Qr = Qr => {
          var Zr, Wr;
          Qr ? (this.countElements.set(Sr, Qr), this.writeCount(rr, null !== (Zr = null === (Wr = this.labels.get(rr)) || void 0 === Wr ? void 0 : Wr.count) && void 0 !== Zr ? Zr : -1)) : (this.countElements.delete(Sr), this.countRefs.delete(Sr))
        }, this.countRefs.set(Sr, Qr)), Qr
      }
      setCountWords(rr) {
        this.countWords = rr;
        for (const [Sr, Qr] of this.labels) this.writePart(`words|${Sr}`, rr(Qr.count), Qr.count)
      }
      writeCount(rr, Sr) {
        this.writePart(`bare|${rr}`, Na(Sr), Sr), this.countElements.has(`words|${rr}`) && this.writePart(`words|${rr}`, this.countWords(Sr), Sr)
      }
      writePart(rr, Sr, Qr) {
        const Zr = this.countElements.get(rr);
        if (!Zr || Qr < 0) return;
        const Wr = Zr.firstChild;
        Wr && 3 === Wr.nodeType && !Wr.nextSibling ? Wr.nodeValue !== Sr && (Wr.nodeValue = Sr) : Zr.textContent !== Sr && (Zr.textContent = Sr)
      }
      list() {
        return this.snapshot
      }
      at(rr) {
        return this.labels.get(`${rr[0]},${rr[1]},${rr[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      bind(rr) {
        let Sr = this.refs.get(rr);
        return Sr || (Sr = Sr => {
          const Qr = this.elements.get(rr);
          var Zr, Wr;
          Qr && (null === (Zr = this.onElement) || void 0 === Zr || Zr.call(this, Qr, !1));
          Sr ? (this.elements.set(rr, Sr), null === (Wr = this.onElement) || void 0 === Wr || Wr.call(this, Sr, !0)) : (this.elements.delete(rr), this.refs.delete(rr))
        }, this.refs.set(rr, Sr)), Sr
      }
      onAfterRender(rr, Sr, Qr, Zr) {
        for (const Wr of this.snapshot) {
          const ar = this.elements.get(Wr.key);
          if (!ar) continue;
          if (Zr(Wr.key)) {
            (0, QN.f)(ar, !0);
            continue
          }
          const jr = (0, fN.b)(ar, rr, Sr, Wr.pos, 1.1, 24);
          jr && Qr.add(jr, ar, 0, !1)
        }
      }
    }
    const QU = (0, Zr.memo)((function(rr) {
        let {
          item: Sr
        } = rr;
        return (0, za.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, za.jsx)(OW.d, {
            itemName: Sr,
            amount: 0
          })
        })
      })),
      ZU = (0, Zr.memo)((function(rr) {
        let {
          label: Sr,
          bindRef: Qr,
          countRef: Zr,
          wordsRef: Wr
        } = rr;
        return (0, za.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: Qr,
          hidden: !0,
          children: [(0, za.jsx)(QU, {
            item: Sr.item
          }), Sr.count >= 0 && (0, za.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, za.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Wr
            }), (0, za.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Zr
            })]
          })]
        })
      })),
      WU = (0, Zr.memo)((function(rr) {
        let {
          store: Sr
        } = rr;
        const {
          t: Qr
        } = (0, TW.E)(), [Wr, ar] = (0, Zr.useState)((() => Sr.list()));
        return (0, Zr.useEffect)((() => (ar(Sr.list()), Sr.subscribe((() => {
          ar(Sr.list())
        })))), [Sr]), (0, Zr.useEffect)((() => {
          Sr.setCountWords((rr => Qr("buildAFactory2Game:labelSiloCount", {
            count: Na(rr)
          })))
        }), [Sr, Qr]), (0, za.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Wr.map((rr => -2 === rr.count ? null : (0, za.jsx)(ZU, {
            label: rr,
            bindRef: Sr.bind(rr.key),
            countRef: Sr.bindCount(rr.key),
            wordsRef: Sr.bindCount(rr.key, "words")
          }, rr.key)))
        })
      })),
      aU = {
        read: () => !0,
        write: () => {}
      };

    function jU(rr) {
      return `${rr[0]},${rr[1]},${rr[2]}`
    }

    function IU(rr) {
      let [Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr] = rr;
      const Nr = void 0 === xr || void 0 === mr ? function(rr) {
        return [Math.floor((rr - 1) / 2), 0]
      }(ar) : [xr, mr];
      return {
        kind: 0 === fr ? "reactor" : "battery",
        box: iQ([Sr, Qr, Zr], Wr, ar, jr, Ir, Nr),
        formed: 1 === Er,
        level: pr
      }
    }
    class fU {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aU;
        this.guideSetting = rr, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = rr.read()
      }
      rK(rr) {
        var Sr;
        const Qr = new Map;
        for (const Zr of rr.baf2RxPlanList) {
          const rr = IU(Zr);
          Qr.set(jU(rr.box.ctrl), rr)
        }
        this.plans = Qr, this.layouts = new Map((null !== (Sr = rr.baf2RxLayouts) && void 0 !== Sr ? Sr : []).map((rr => {
          let [Sr, Qr, Zr, Wr] = rr;
          return [jU([Sr, Qr, Zr]), Wr]
        }))), this.predicted.clear(), rr.baf2RxFormedAt && (this.formed = {
          ctrl: rr.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Zr of [...this.startersOff]) {
          const rr = Qr.get(Zr);
          rr && !rr.formed || this.startersOff.delete(Zr)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((rr => this.planByKey(rr)))
      }
      planAt(rr) {
        return this.planByKey(jU(rr))
      }
      predictSize(rr, Sr) {
        this.predicted.set(jU(rr), Sr), this.changed()
      }
      unpredict(rr) {
        this.predicted.delete(jU(rr)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(rr) {
        var Sr;
        const Qr = jU(rr);
        return this.predicted.has(Qr) ? null : null !== (Sr = this.layouts.get(Qr)) && void 0 !== Sr ? Sr : null
      }
      showsStarter(rr) {
        return !this.startersOff.has(jU(rr))
      }
      setStarter(rr, Sr) {
        const Qr = jU(rr);
        Sr ? this.startersOff.delete(Qr) : this.startersOff.add(Qr), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(rr) {
        this.guide = rr, this.guideSetting.write(rr), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(rr) {
        const Sr = this.plans.get(rr);
        if (!Sr) return null;
        const Qr = this.predicted.get(rr);
        return Qr ? {
          ...Sr,
          box: cQ(Sr.box, Sr.kind, Qr[0], Qr[1], Qr[2])
        } : Sr
      }
      changed() {
        this.version++;
        for (const rr of this.listeners) rr()
      }
    }
    var EU = Qr(208);
    const pU = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function xU(rr, Sr, Qr, Zr) {
      const Wr = rr.length / 3;
      for (let ar = 0; ar < pU.length / 3; ar++) rr.push(pU[3 * ar] * Zr[0] / 2 + Qr[0], pU[3 * ar + 1] * Zr[1] / 2 + Qr[1], pU[3 * ar + 2] * Zr[2] / 2 + Qr[2]);
      for (let ar = Wr; ar < Wr + 24; ar += 4) Sr.push(ar, ar + 1, ar + 2, ar, ar + 2, ar + 3)
    }

    function mU(rr, Sr, Qr) {
      const Zr = Sr[0][0],
        Wr = [],
        ar = [];
      for (const [jr, Ir] of Sr) xU(Wr, ar, [jr[0] - Zr[0], jr[1] - Zr[1], jr[2] - Zr[2]], Ir);
      return rr.createGameMesh({
        positions: Wr,
        indices: ar
      }, Qr, Zr)
    }

    function NU(rr, Sr) {
      const Qr = rr.w - 2,
        Zr = rr.d - 2;
      return 1 === function(rr, Sr, Qr, Zr) {
        const [Wr, ar, jr] = rr;
        if (Number(Wr <= 2) + Number(ar <= 2) + Number(jr <= 2) >= 2) return function(rr, Sr, Qr) {
          return (rr + Sr + Qr) % 2 === 0 ? 1 : 3
        }(Sr, Qr, Zr);
        const [Ir, fr] = Wr >= ar && Wr >= jr ? [Qr, Zr] : ar >= jr ? [Sr, Zr] : [Sr, Qr];
        return Ir % 2 === 0 && fr % 2 === 0 ? 1 : 3
      }([Qr, rr.h - 2, Zr], Sr % Qr, Math.floor(Sr / (Qr * Zr)), Math.floor(Sr / Qr) % Zr) ? "rod" : "channel"
    }

    function UU(rr, Sr, Qr) {
      if ("reactor" !== rr.kind || rr.formed || !Sr) return !1;
      const Zr = bQ(rr.box);
      for (let Wr = 0; Wr < Zr; Wr++) {
        const rr = Qr(Wr);
        if (null !== rr && XQ(rr)) return !1
      }
      return !0
    }

    function tU(rr, Sr, Qr, Zr, Wr) {
      var ar;
      let jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const Ir = rZ(rr.box, Sr),
        fr = WZ(rr.kind, Ir, Qr);
      if ("wrong" === fr || "blocked" === fr) return "wrong";
      if (!Wr) return null;
      if ("inside" === Ir && "reactor" === rr.kind && "Air" === PQ(Qr)) {
        if (null !== jr) {
          var Er;
          const Qr = Dx[dx(jr, SZ(rr.box, Sr))];
          return Qr && null !== (Er = zf(Qr)) && void 0 !== Er ? Er : null
        }
        if (Zr) return NU(rr.box, SZ(rr.box, Sr))
      }
      if ("missing" !== fr) return null;
      const pr = aZ(rr.kind, Ir);
      return null === pr ? null : null !== (ar = zf(pr)) && void 0 !== ar ? ar : null
    }
    const hU = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function zU(rr, Sr, Qr) {
      const Zr = Qr => {
        const Zr = Sr(sQ(rr.box, Qr));
        return null !== Zr && function(rr, Sr) {
          return "reactor" !== rr.kind || Sr !== DQ(rr.box) && "inside" !== rZ(rr.box, Sr)
        }(rr, Qr) && "ok" !== WZ(rr.kind, rZ(rr.box, Qr), Zr)
      };
      if (Qr) {
        const ar = uQ(rr.box, [Math.floor(Qr[0]), Math.floor(Qr[1]), Math.floor(Qr[2])]);
        if (ar >= 0 && (Zr(ar) || (Wr = ar, "reactor" === rr.kind && "inside" === rZ(rr.box, Wr) && "Air" === Sr(sQ(rr.box, Wr))))) return ar
      }
      var Wr;
      const ar = bQ(rr.box);
      for (let jr = 0; jr < ar; jr++)
        if (Zr(jr)) return jr;
      return -1
    }

    function YU(rr, Sr) {
      return Math.floor(Sr / (rr.w * rr.d))
    }

    function nU(rr, Sr, Qr) {
      return Qr >= 0 && YU(rr, Sr) > YU(rr, Qr)
    }

    function eU(rr, Sr) {
      return Sr >= 0 && rr.h >= 3 && YU(rr, Sr) === rr.h - 1
    }

    function KU(rr) {
      const Sr = PQ(rr);
      return Sr === YQ || "Collider" === Sr || "Laser" === Sr || Sr.startsWith("_Collider ")
    }

    function yU(rr, Sr, Qr, Zr) {
      if (Zr(rr)) return null;
      if (!hU.every((Sr => {
          let [Zr, Wr, ar] = Sr;
          const jr = Qr([rr[0] + Zr, rr[1] + Wr, rr[2] + ar]);
          return null !== jr && !GQ("reactor", jr) && "reactor" !== HQ(jr)
        }))) return null;
      const Wr = kQ("reactor").min,
        ar = iQ([rr[0], rr[1], rr[2]], function(rr, Sr) {
          const Qr = Sr[0] - (rr[0] + .5),
            Zr = Sr[2] - (rr[2] + .5);
          return Math.abs(Qr) >= Math.abs(Zr) ? Qr >= 0 ? 2 : 4 : Zr >= 0 ? 1 : 3
        }(rr, Sr), Wr, Wr, Wr, wQ("reactor", Wr)),
        jr = DQ(ar);
      let Ir = !0;
      for (let fr = 0; fr < bQ(ar) && Ir; fr++) {
        if (fr === jr) continue;
        const rr = sQ(ar, fr),
          Sr = Qr(rr);
        Ir = !Zr(rr) && (null === Sr || !KU(Sr))
      }
      return {
        box: ar,
        fits: Ir
      }
    }
    const BU = hf,
      TU = "baf2Goal",
      vU = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      OU = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      LU = .4;

    function lU(rr, Sr) {
      let [Qr, Zr, Wr] = rr;
      const ar = Tf([Qr - .02, Zr - .02, Wr - .02], [Qr + 1.02, Zr + 1.02, Wr + 1.02], .07);
      return Sr && (ar.push([
        [Qr + .5, Zr + 1 + .7, Wr + .5],
        [.08, 1.4, .08]
      ]), ar.push([
        [Qr + .5, Zr + 1 + 1.4 + .2, Wr + .5],
        [LU, LU, LU]
      ])), ar
    }

    function XU(rr, Sr) {
      let [Qr, Zr, Wr] = Sr;
      return rr.isBlockInLoadedChunk(Qr, Zr, Wr) ? rr.blockIdToBlockName(rr.getBlockId(Qr, Zr, Wr)) : null
    }
    let PU = null;
    const HU = new Set;
    let qU = null;

    function RU(rr) {
      PU = rr;
      for (const Sr of HU) Sr(rr)
    }
    class gU {
      constructor(rr) {
        var Sr;
        this.plans = rr, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (Sr = rr => {
          var Sr, Qr;
          this.setGoal(null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.goal) && void 0 !== Sr ? Sr : null, null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.startsBattery) && void 0 !== Qr && Qr)
        }, qU ??= [PW.i.subscribe("setDirectionArrow", (rr => {
          let {
            id: Sr,
            position: Qr,
            text: Zr
          } = rr;
          Sr === TU && RU({
            goal: [Math.floor(Qr[0]), Math.floor(Qr[1]), Math.floor(Qr[2])],
            startsBattery: JSON.stringify(null !== Zr && void 0 !== Zr ? Zr : null).includes("arrowStartBattery")
          })
        })), PW.i.subscribe("clearDirectionArrow", (rr => {
          let {
            id: Sr
          } = rr;
          null !== Sr && Sr !== TU || RU(null)
        }))], HU.add(Sr), Sr(PU), () => {
          HU.delete(Sr)
        })
      }
      onAfterRender(rr, Sr) {
        const Qr = performance.now();
        if (this.cues.length > 0) {
          const Sr = .55 + .45 * Math.sin(Qr / 1100 * Math.PI * 2);
          for (const Qr of this.cues) rr.setGameMesh(Qr, {
            visibility: Sr
          })
        }
        if (Qr - this.lastCheckMs < 150) return;
        this.lastCheckMs = Qr;
        const Zr = this.plans.all().filter((rr => {
            const [Qr, Zr, Wr] = rr.box.ctrl;
            return (!rr.formed || null !== this.plans.layoutOf(rr.box.ctrl)) && (Qr - Sr[0]) ** 2 + (Zr - Sr[1]) ** 2 + (Wr - Sr[2]) ** 2 <= 2304
          })),
          Wr = function(rr, Sr) {
            const Qr = EU.i.hx,
              Zr = new Map;
            for (const ar of Sr) {
              const Sr = sQ(ar.box, 0),
                jr = sQ(ar.box, bQ(ar.box) - 1),
                Ir = [Math.min(Sr[0], jr[0]), Math.min(Sr[1], jr[1]), Math.min(Sr[2], jr[2])].map((rr => Math.floor(rr / Qr))),
                fr = [Math.max(Sr[0], jr[0]), Math.max(Sr[1], jr[1]), Math.max(Sr[2], jr[2])].map((rr => Math.floor(rr / Qr)));
              for (let Qr = Ir[0]; Qr <= fr[0]; Qr++)
                for (let Sr = Ir[1]; Sr <= fr[1]; Sr++)
                  for (let ar = Ir[2]; ar <= fr[2]; ar++) {
                    var Wr;
                    Zr.set(`${Qr},${Sr},${ar}`, null !== (Wr = rr.getChunkVersion(Qr, Sr, ar)) && void 0 !== Wr ? Wr : -1)
                  }
            }
            return Zr
          }(rr, Zr);
        this.plans.getVersion() === this.storeVersion && (function(rr, Sr) {
          if (rr.size !== Sr.size) return !1;
          for (const [Qr, Zr] of rr)
            if (Sr.get(Qr) !== Zr) return !1;
          return !0
        }(Wr, this.chunkVersions) || Qr - this.lastRescanMs < 600) || (this.lastRescanMs = Qr, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Wr, this.redraw(rr, Zr))
      }
      dispose(rr) {
        this.unwatch(), PU = null, this.clearMeshes(rr), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(rr, Sr) {
        var Qr;
        (null === rr || void 0 === rr ? void 0 : rr.join()) === (null === (Qr = this.goal) || void 0 === Qr ? void 0 : Qr.join()) && Sr === this.startsBattery || (this.goal = rr, this.startsBattery = Sr, this.storeVersion = -1)
      }
      redraw(rr, Sr) {
        const Qr = Sr => XU(rr, Sr),
          Zr = new Map,
          Wr = [],
          ar = this.plans.guideOn();
        for (const Er of Sr) {
          const rr = ar && UU(Er, this.plans.showsStarter(Er.box.ctrl), (rr => Qr(sQ(Er.box, rr)))),
            Sr = "reactor" === Er.kind ? this.plans.layoutOf(Er.box.ctrl) : null,
            jr = ar && !Er.formed ? zU(Er, Qr, this.goal) : -1;
          jr >= 0 && Wr.push([sQ(Er.box, jr), eU(Er.box, jr)]);
          const Ir = bQ(Er.box);
          for (let Wr = 0; Wr < Ir; Wr++) {
            const Ir = sQ(Er.box, Wr),
              fr = Qr(Ir),
              pr = null === fr ? null : tU(Er, Wr, fr, rr, ar, Sr);
            if (null !== pr) {
              const rr = "wrong" !== pr && nU(Er.box, Wr, jr),
                Sr = rr ? `${pr}Dim` : pr;
              let Qr = Zr.get(Sr);
              Qr || (Qr = {
                draw: {
                  ghost: pr,
                  dim: rr
                },
                list: []
              }, Zr.set(Sr, Qr)), Qr.list.push(Ir)
            }
          }
        }
        if (ar && this.startsBattery && this.goal) {
          const [rr, Sr, Wr] = this.goal, ar = [];
          for (const [Zr, jr, Ir] of vU) {
            const fr = [rr + Zr, Sr + jr, Wr + Ir];
            "Air" === Qr(fr) && ar.push(fr)
          }
          if (ar.length > 0) {
            var jr;
            const rr = null !== (jr = Zr.get("cell")) && void 0 !== jr ? jr : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            rr.list.push(...ar), Zr.set("cell", rr)
          }
        }
        const Ir = [...Zr.keys()].sort(),
          fr = [...Ir.map((rr => `${rr}:${Zr.get(rr).list.join(";")}`)), `cue:${Wr.join(";")}`].join("|");
        if (fr !== this.shownKey) {
          this.shownKey = fr, this.clearMeshes(rr);
          for (const Sr of Ir) {
            const {
              draw: Qr,
              list: Wr
            } = Zr.get(Sr);
            this.meshes.push(this.build(rr, Qr, Wr))
          }
          for (const [Sr, Qr] of Wr) this.cues.push(mU(rr, lU(Sr, Qr), OU))
        }
      }
      build(rr, Sr, Qr) {
        let {
          ghost: Zr,
          dim: Wr
        } = Sr;
        const {
          size: ar,
          colour: jr,
          alpha: Ir
        } = BU[Zr], fr = Qr[0], Er = [], pr = [];
        for (const [xr, mr, Nr] of Qr) xU(Er, pr, [xr - fr[0] + .5, mr - fr[1] + .5, Nr - fr[2] + .5], [ar, ar, ar]);
        return rr.createGameMesh({
          positions: Er,
          indices: pr
        }, {
          rgb: jr,
          alpha: Ir * (Wr ? .3 : 1)
        }, fr)
      }
      clearMeshes(rr) {
        for (const Sr of [...this.meshes, ...this.cues]) rr.disposeGameMesh(Sr);
        this.meshes = [], this.cues = []
      }
    }
    const CU = [.56, .83, 1],
      MU = [1, .3, .25];
    class GU {
      constructor(rr) {
        this.plans = rr, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(rr, Sr, Qr) {
        var Zr;
        const Wr = performance.now();
        if (Wr - this.lastCheckMs < 150) return;
        this.lastCheckMs = Wr;
        const ar = Sr => XU(rr, Sr),
          jr = null === (Zr = rr.XQr(Sr)) || void 0 === Zr ? void 0 : Zr.name,
          Ir = jr && "Reactor Frame" === PQ(jr) ? rr.getTargetedBlock() : null,
          fr = Ir ? [Ir.Kh[0], Ir.Kh[1], Ir.Kh[2]] : null,
          Er = null !== fr && "Air" === ar(fr) && fr.every(((rr, Sr) => Math.abs(rr + .5 - Qr[Sr]) <= 8)) ? yU(fr, Qr, ar, (rr => this.inPlan(rr))) : null,
          pr = Er ? `${Er.box.ctrl.join()}|${Er.box.rot}|${Er.fits}` : "";
        pr !== this.shownKey && this.show(rr, pr, Er)
      }
      dispose(rr) {
        this.clear(rr), this.shownKey = ""
      }
      inPlan(rr) {
        return this.plans.all().some((Sr => uQ(Sr.box, rr) >= 0))
      }
      show(rr, Sr, Qr) {
        if (this.clear(rr), this.shownKey = Sr, !Qr) return;
        const {
          box: Zr,
          fits: Wr
        } = Qr, ar = Wr ? CU : MU, {
          lo: jr,
          hi: Ir
        } = Bf(Zr);
        this.meshes.push(mU(rr, Tf(jr, Ir, .05), {
          rgb: ar,
          alpha: 1
        }));
        const fr = [],
          Er = sQ(Zr, 0)[1];
        for (let pr = 0; pr < Zr.w * Zr.d; pr++) {
          const [rr, , Sr] = sQ(Zr, pr);
          fr.push([
            [rr + .5, Er + .02 + .01, Sr + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(mU(rr, fr, {
          rgb: ar,
          alpha: .25
        }))
      }
      clear(rr) {
        for (const Sr of this.meshes) rr.disposeGameMesh(Sr);
        this.meshes = []
      }
    }
    const kU = "buildAFactory2Game:";

    function AU(rr, Sr, Qr) {
      const Zr = rr => {
          const [Qr, Zr, Wr] = rr.box.ctrl;
          return Qr === Sr[0] && Zr === Sr[1] && Wr === Sr[2]
        },
        Wr = rr.find((rr => Zr(rr) || uQ(rr.box, Sr) >= 0));
      if (!Wr) return null;
      const ar = function(rr, Sr, Qr) {
        const {
          w: Zr,
          h: Wr,
          d: ar
        } = rr.box, jr = "reactor" === rr.kind ? `${kU}rxTitle` : `${kU}batTitle`;
        if (rr.formed) return {
          key: `${kU}lookPlanFormed`,
          kindKey: jr,
          w: Zr,
          h: Wr,
          d: ar,
          count: 0
        };
        let Ir = 0,
          fr = 0;
        for (let pr = 0; pr < bQ(rr.box); pr++) {
          const Sr = Qr(sQ(rr.box, pr)),
            Zr = null === Sr ? "ok" : WZ(rr.kind, rZ(rr.box, pr), Sr);
          Ir += "missing" === Zr ? 1 : 0, fr += "wrong" === Zr || "blocked" === Zr ? 1 : 0
        }
        const Er = function(rr, Sr, Qr) {
          if (Sr < 0 || null === Qr) return;
          const Zr = rZ(rr.box, Sr),
            Wr = WZ(rr.kind, Zr, Qr);
          return "blocked" === Wr ? `${kU}lookWhy_blocked` : "wrong" === Wr ? "ctrl" === Zr ? `${kU}lookWhy_ctrl` : `${kU}lookWhy_reactor_${Zr}` : void 0
        }(rr, uQ(rr.box, Sr), Qr([Sr[0], Sr[1], Sr[2]]));
        if (Ir > 0) return {
          key: `${kU}lookPlanToBuild`,
          kindKey: jr,
          w: Zr,
          h: Wr,
          d: ar,
          count: Ir,
          why: Er
        };
        if (fr > 0) return {
          key: `${kU}lookPlanTakeOut`,
          kindKey: jr,
          w: Zr,
          h: Wr,
          d: ar,
          count: fr,
          why: Er
        };
        return {
          key: "reactor" === rr.kind ? `${kU}lookPlanNoRods` : `${kU}lookPlanDone`,
          kindKey: jr,
          w: Zr,
          h: Wr,
          d: ar,
          count: 0
        }
      }(Wr, Sr, Qr);
      return "reactor" === Wr.kind && Zr(Wr) ? {
        ...ar,
        ctrl: !0
      } : ar
    }

    function VU(rr, Sr) {
      return rr === Sr || null !== rr && null !== Sr && rr.key === Sr.key && rr.kindKey === Sr.kindKey && rr.w === Sr.w && rr.h === Sr.h && rr.d === Sr.d && rr.count === Sr.count && rr.why === Sr.why && rr.ctrl === Sr.ctrl
    }

    function iU() {
      return performance.now()
    }
    class wU {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iU;
        this.ticket = rr, this.sent = Sr, this.backstopMs = Qr, this.now = Zr, this.queuedAt = void 0, this.queuedAt = Zr()
      }
      answered() {
        const rr = this.now(),
          Sr = this.sent.leftAt(this.ticket);
        return null !== Sr && rr - Sr > 4e3 || rr - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class cU {
      constructor() {
        this.echoes = []
      }
      add(rr) {
        this.echoes = this.echoes.filter((rr => !rr.answered())), this.echoes.push(rr)
      }
      answered() {
        var rr, Sr;
        return null === (rr = null === (Sr = this.echoes.at(-1)) || void 0 === Sr ? void 0 : Sr.answered()) || void 0 === rr || rr
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((rr => rr.answered()))
      }
      age() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.echoes.at(-1)) || void 0 === Sr ? void 0 : Sr.age()) && void 0 !== rr ? rr : null
      }
      clear() {
        this.echoes = []
      }
    }
    class FU {
      constructor(rr) {
        this.send = rr, this.value = null, this.sent = null, this.echoes = new cU, this.down = !1, this.timer = null
      }
      shown(rr) {
        return null === this.value ? rr : this.down || this.value !== this.sent ? this.value : rr === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), rr) : this.value
      }
      pendingFor(rr) {
        return null !== this.value && this.value === this.sent && rr !== this.value ? this.echoes.age() : null
      }
      assume(rr, Sr) {
        this.disarm(), this.down = !1, this.value = rr, this.sent = rr, this.echoes.clear(), this.echoes.add(Sr)
      }
      press() {
        this.down = !0
      }
      drag(rr) {
        this.value = rr, this.arm(this.down ? 1e3 : 400)
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
      arm(rr) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), rr)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class oU {
      constructor() {
        this.pending = new Map
      }
      set(rr, Sr, Qr) {
        var Zr;
        const Wr = null !== (Zr = this.pending.get(rr)) && void 0 !== Zr ? Zr : {
          on: Sr,
          echoes: new cU
        };
        Wr.on = Sr, Wr.echoes.add(Qr), this.pending.set(rr, Wr)
      }
      shown(rr) {
        let Sr = rr;
        for (const [Qr, {
            on: Zr,
            echoes: Wr
          }] of this.pending) 0 !== (rr & Qr) === Zr && Wr.agreeCounts() || Wr.answered() ? this.pending.delete(Qr) : Sr = Zr ? Sr | Qr : Sr & ~Qr;
        return Sr
      }
      pendingMask() {
        let rr = 0;
        for (const Sr of this.pending.keys()) rr |= Sr;
        return rr
      }
      pendingFor(rr) {
        let Sr = null;
        for (const [Zr, {
            on: Wr,
            echoes: ar
          }] of this.pending) {
          if (void 0 !== rr && 0 !== (rr & Zr) === Wr) continue;
          const jr = ar.age();
          var Qr;
          if (null !== jr) Sr = Math.max(null !== (Qr = Sr) && void 0 !== Qr ? Qr : 0, jr)
        }
        return Sr
      }
      clear() {
        this.pending.clear()
      }
    }
    class bU {
      constructor() {
        this.dims = null, this.echoes = new cU, this.unmet = null
      }
      shown(rr) {
        var Sr;
        return this.dims && (JU(this.dims, rr) && this.echoes.agreeCounts() || this.echoes.answered()) && (JU(this.dims, rr) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (Sr = this.dims) && void 0 !== Sr ? Sr : rr
      }
      takeUnmet() {
        const rr = this.unmet;
        return this.unmet = null, rr
      }
      set(rr, Sr) {
        this.dims = rr, this.echoes.add(Sr)
      }
      pendingFor(rr) {
        return null === this.dims || rr && JU(this.dims, rr) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function JU(rr, Sr) {
      return rr[0] === Sr[0] && rr[1] === Sr[1] && rr[2] === Sr[2]
    }
    class DU {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iU;
        this.now = rr, this.taps = new Map
      }
      tap(rr, Sr, Qr) {
        return !this.busy(rr) && (this.taps.set(rr, {
          at: this.now(),
          done: Sr
        }), Qr(), !0)
      }
      settle(rr) {
        for (const [Sr, Qr] of [...this.taps]) Qr.done(rr) && this.taps.delete(Sr)
      }
      busy(rr) {
        const Sr = this.taps.get(rr);
        return !!Sr && (!(this.now() - Sr.at >= 3e3) || (this.taps.delete(rr), !1))
      }
      busyIds() {
        const rr = new Set;
        for (const Sr of [...this.taps.keys()]) this.busy(Sr) && rr.add(Sr);
        return rr
      }
      clear() {
        this.taps.clear()
      }
    }

    function dU(rr) {
      return {
        send: Sr => rr.track(Sr),
        sendUrgent: (Sr, Qr) => rr.track(Sr, {
          urgent: !0,
          supersedes: Qr
        }),
        leftAt: Sr => rr.leftAt(Sr),
        holdReserve: () => rr.holdUrgentReserve(),
        answerMs: vj
      }
    }

    function sU() {
      return performance.now()
    }

    function uU(rr) {
      const Sr = rr.baf2RxNeed.map((rr => {
        let [Sr, Qr] = rr;
        return [Sr, Qr]
      }));
      return JSON.stringify([rr.baf2RxFormed, Sr, rr.baf2RxBad, rr.baf2RxCells])
    }

    function rt(rr, Sr) {
      const Qr = 0 !== (Sr & mS),
        Zr = 0 !== (rr.baf2RxFlags & mS);
      return !Qr || Zr || "running" !== rr.baf2RxState && "idle" !== rr.baf2RxState ? !Qr && Zr && "scram" === rr.baf2RxState && rr.baf2RxFuel > 0 ? "idle" : rr.baf2RxState : "scram"
    }

    function St(rr) {
      return JSON.stringify([rr.baf2BatFormed, rr.baf2BatNeed, rr.baf2BatBad])
    }

    function Qt(rr) {
      return rr.join(",")
    }
    class Zt {
      constructor() {
        this.listeners = new Set
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      notify() {
        for (const rr of this.listeners) rr()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class Wt {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(rr, Sr) {
        this.lastAt = rr, this.lastUntil = rr + Sr
      }
      answered(rr) {
        return this.lastAt >= rr || rr < this.lastUntil
      }
    }
    class jt {
      constructor(rr, Sr) {
        this.link = rr, this.now = Sr, this.hold = new bU, this.picked = null, this.notTaken = null
      }
      shown(rr) {
        const Sr = this.hold.shown(rr);
        if (this.hold.takeUnmet() && this.picked) {
          var Qr;
          const {
            plans: Sr,
            ctrl: Zr,
            at: Wr
          } = this.picked;
          this.picked = null, Sr.unpredict(Zr), null === (Qr = this.notTaken) || void 0 === Qr || Qr.call(this, rr, Wr)
        }
        return Sr
      }
      pendingFor(rr) {
        return this.hold.pendingFor(rr)
      }
      eN(rr, Sr, Qr) {
        rr.predictSize(Sr, Qr), this.picked = {
          plans: rr,
          ctrl: Sr,
          at: this.now()
        };
        const Zr = this.link.send(xS(Sr, "plan", ...Qr));
        this.hold.set(Qr, new wU(Zr, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class It {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sU;
        this.plans = rr, this.readInterior = Sr, this.link = Qr, this.now = Zr, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new oU, this.throttle = void 0, this.oneShots = void 0, this.listeners = new Zt, this.redraw = null, this.releaseReserve = null, this.size = new jt(Qr, Zr), this.oneShots = new DU(Zr), this.throttle = new FU((rr => this.echo(this.link.send(this.command("throttle", rr)))))
      }
      set(rr) {
        !rr.baf2RxOpen && this.raw && Qt(this.raw.baf2RxAt) === Qt(rr.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(rr), this.Jp(rr)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(rr) {
        this.size.notTaken = rr
      }
      resize(rr) {
        this.raw && (this.size.eN(this.plans, this.raw.baf2RxAt, rr), this.Jp(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const rr = this.raw.baf2RxAt;
        this.plans.setStarter(rr, !this.plans.showsStarter(rr)), this.Jp(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.Jp(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.Jp(this.raw)
      }
      send(rr) {
        if (this.raw) {
          for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
          this.link.send(this.command(rr, ...Qr))
        }
      }
      tap(rr, Sr) {
        this.raw && this.oneShots.tap(rr, function(rr, Sr) {
          if ("start" === rr) return rr => 0 === (rr.baf2RxFlags & mS);
          if ("odConfirm" === rr) return rr => 0 !== (rr.baf2RxFlags & NS);
          const Qr = uU(Sr);
          return rr => uU(rr) !== Qr
        }(rr, this.raw), Sr) && ("start" === rr && (this.startedAt = this.now()), this.Jp(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(mS, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(rr, Sr) {
        if (!this.raw) return;
        const Qr = rr === mS ? this.command(Sr ? "scram" : "start") : this.command("od", Sr ? 1 : 0),
          Zr = Sr && rr === mS,
          Wr = `${pS} ${this.raw.baf2RxAt.join(" ")} `,
          ar = this.echo(Zr ? this.link.sendUrgent(Qr, (rr => {
            const Sr = rr.startsWith(Wr) ? rr.slice(Wr.length).split(" ")[0] : null;
            return "throttle" === Sr || "start" === Sr
          })) : this.link.send(Qr));
        this.flags.set(rr, Sr, ar), Zr && this.throttle.assume(0, ar), this.Jp(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(rr) {
        this.throttle.drag(rr), this.raw && this.Jp(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.Jp(this.raw)
      }
      subscribe(rr) {
        return this.listeners.subscribe(rr)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var rr;
        this.throttle.release(), null === (rr = this.releaseReserve) || void 0 === rr || rr.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(rr) {
        for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
        return xS(this.raw.baf2RxAt, rr, ...Qr)
      }
      echo(rr) {
        return new wU(rr, this.link, this.link.answerMs, this.now)
      }
      Jp(rr) {
        var Sr;
        this.raw = rr;
        const Qr = this.flags.shown(rr.baf2RxFlags),
          Zr = {
            ...rr,
            baf2RxFlags: Qr,
            baf2RxTarget: this.throttle.shown(rr.baf2RxTarget),
            baf2RxState: rt(rr, Qr)
          },
          Wr = this.size.shown(Zr.baf2RxDims),
          ar = this.throttle.pendingFor(),
          jr = [this.throttle.pendingFor(rr.baf2RxTarget), this.flags.pendingFor(rr.baf2RxFlags), this.size.pendingFor(rr.baf2RxDims)].filter((rr => null !== rr)),
          Ir = jr.length > 0 ? Math.max(...jr) : null,
          fr = this.oneShots.busyIds(),
          Er = Zr.baf2RxAt;
        let pr, xr, mr = null,
          Nr = [Math.max(0, Wr[0] - 2), Math.max(0, Wr[1] - 2), Math.max(0, Wr[2] - 2)];
        if (Zr.baf2RxFormed) {
          const [rr, Sr, Qr] = Zr.baf2RxDims;
          Nr = [Math.max(0, rr - 2), Math.max(0, Sr - 2), Math.max(0, Qr - 2)], pr = Array.from(Zr.baf2RxCells, Number), xr = `${Nr.join(",")}:${Zr.baf2RxCells}`
        } else {
          var Ur;
          const rr = null === (Ur = this.plans.planAt(Er)) || void 0 === Ur ? void 0 : Ur.box,
            Sr = rr ? cQ(rr, "reactor", ...Wr) : iQ(Er, 1, ...Wr, wQ("reactor", Wr[0])),
            Qr = this.readInterior(Sr);
          mr = FI(Nr, Qr), pr = Qr, xr = `${Nr.join(",")}:${Qr.join("")}`
        }(null === (Sr = this.looksOf) || void 0 === Sr ? void 0 : Sr.key) !== xr && (this.looksOf = {
          key: xr,
          looks: sI(Nr, pr)
        }), this.view = {
          status: Zr,
          dims: Wr,
          plan: mr,
          inner: Nr,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Er),
          odConfirmed: this.odConfirmed || 0 !== (Zr.baf2RxFlags & nS),
          guide: this.plans.guideOn(),
          throttlePending: null !== ar,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== Ir && Ir >= 5e3,
          busy: fr,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== Ir || fr.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.Jp(this.raw)
        }), 250))
      }
    }
    class ft {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sU;
        this.plans = rr, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new Zt, this.redraw = null, this.size = new jt(Sr, Qr), this.oneShots = new DU(Qr)
      }
      set(rr) {
        !rr.baf2BatOpen && this.view && Qt(this.view.status.baf2BatAt) === Qt(rr.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(rr), this.Jp(rr)
      }
      tap(rr, Sr) {
        if (!this.view) return;
        const Qr = St(this.view.status);
        this.oneShots.tap(rr, (rr => St(rr) !== Qr), Sr) && this.Jp(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(rr) {
        this.size.notTaken = rr
      }
      resize(rr) {
        this.view && (this.size.eN(this.plans, this.view.status.baf2BatAt, rr), this.Jp(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.Jp(this.view.status)
      }
      subscribe(rr) {
        return this.listeners.subscribe(rr)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      Jp(rr) {
        const Sr = this.size.shown(rr.baf2BatDims),
          Qr = this.oneShots.busyIds();
        this.view = {
          status: rr,
          dims: Sr,
          sx: mf(Sr, rr.baf2BatDims) ? rr.baf2BatCapacity : Sf(...Sr),
          guide: this.plans.guideOn(),
          busy: Qr
        }, this.listeners.notify(), Qr.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.Jp(this.view.status)
        }), 250))
      }
    }
    const Et = "buildAFactory2Game:";

    function pt() {
      var rr;
      const Sr = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!Sr) return null;
      const Qr = Sr.querySelector(".ExitButton");
      return function(rr, Sr) {
        const Qr = Sr ? Sr.left - 8 : rr.right;
        return {
          left: rr.left,
          top: rr.top,
          width: Math.max(0, Qr - rr.left),
          height: rr.height
        }
      }(Sr.getBoundingClientRect(), null !== (rr = null === Qr || void 0 === Qr ? void 0 : Qr.getBoundingClientRect()) && void 0 !== rr ? rr : null)
    }
    const xt = (0, Zr.memo)((function(rr) {
      let {
        store: Sr
      } = rr;
      const {
        t: Qr
      } = (0, TW.E)(), [Wr, ar] = (0, Zr.useState)((() => Sr.get())), [jr, Ir] = (0, Zr.useState)((() => performance.now()));
      (0, Zr.useEffect)((() => (ar(Sr.get()), Sr.subscribe((() => {
        ar(Sr.get()), Ir(performance.now())
      })))), [Sr]);
      const {
        alarm: fr,
        boomAt: Er
      } = Wr, pr = null !== fr && null !== fr.secs, [xr, mr] = (0, Zr.useState)(null);
      (0, Zr.useEffect)((() => {
        if (!pr) return;
        mr(pt());
        const rr = setInterval((() => {
          Ir(performance.now()), mr(pt())
        }), 250);
        return () => {
          clearInterval(rr)
        }
      }), [pr]);
      const [Nr, Ur] = (0, Zr.useState)(!1);
      return (0, Zr.useEffect)((() => {
        if (Er === -1 / 0) return;
        Ur(!0);
        const rr = setTimeout((() => {
          Ur(!1)
        }), 1300);
        return () => {
          clearTimeout(rr)
        }
      }), [Er]), (0, za.jsxs)(za.Fragment, {
        children: [null !== fr && (0, za.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: Qr(fr.hot ? `${Et}rxAlarmSiren` : `${Et}rxAlarmDamaged`, {
            amount: String(fr.damage)
          })
        }), null !== fr && null !== fr.secs && (0, za.jsx)("div", {
          className: xr ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== xr && void 0 !== xr ? xr : void 0,
          "aria-live": "assertive",
          children: Qr(`${Et}rxAlarmCountdown`, {
            amount: String((tr = fr.secs, hr = jr - fr.receivedAt, Math.max(1, Math.ceil(tr - hr / 1e3))))
          })
        }), Nr && (0, za.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var tr, hr
    }));
    class mt {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      rK(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Qr = rr.baf2RxAlarmAt.join(",");
        let Zr = this.snapshot.boomAt;
        if (rr.baf2RxAlarmBoom) this.byReactor.delete(Qr), Zr = Sr;
        else if (rr.baf2RxAlarmDamage <= 0) this.byReactor.delete(Qr);
        else {
          var Wr;
          this.byReactor.set(Qr, {
            damage: rr.baf2RxAlarmDamage,
            secs: null !== (Wr = rr.baf2RxAlarmSecs) && void 0 !== Wr ? Wr : null,
            hot: !0 === rr.baf2RxAlarmHot,
            receivedAt: Sr
          })
        }
        this.Jp(Zr)
      }
      retain(rr) {
        let Sr = !1;
        for (const Qr of [...this.byReactor.keys()]) rr.has(Qr) || (this.byReactor.delete(Qr), Sr = !0);
        Sr && this.Jp(this.snapshot.boomAt)
      }
      has(rr) {
        return this.byReactor.has(rr)
      }
      get() {
        return this.snapshot
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      Jp(rr) {
        let Sr = null;
        for (const Qr of this.byReactor.values())(!Sr || Qr.damage > Sr.damage) && (Sr = Qr);
        this.snapshot = {
          alarm: Sr,
          boomAt: rr
        };
        for (const Qr of this.listeners) Qr()
      }
    }
    const Nt = {
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

    function Ut(rr) {
      return [rr[0], rr[1], rr[2]]
    }

    function tt(rr) {
      return `${rr[0]},${rr[1]},${rr[2]}`
    }
    class ht {
      constructor(rr) {
        if (this.plans = rr, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var rr;
            return {
              active: this.glows.flatMap((rr => {
                let {
                  record: Sr
                } = rr;
                return Sr ? [Sr] : []
              })),
              log: [...null !== (rr = this.devLog) && void 0 !== rr ? rr : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var rr;
        return null !== (rr = this.devLog) && void 0 !== rr ? rr : []
      }
      check(rr, Sr, Qr) {
        const Zr = new Set(Sr.map((rr => tt(rr.box.ctrl))));
        for (const jr of function(rr, Sr) {
            const Qr = [],
              Zr = new Map(rr);
            rr.clear();
            for (const Wr of Sr) {
              const Sr = jU(Wr.box.ctrl),
                ar = Wr.formed ? Wr.level : 0;
              rr.set(Sr, ar), ar > 0 && 0 === Zr.get(Sr) && Qr.push(Wr)
            }
            return Qr
          }(this.levels, this.plans.all())) Zr.has(tt(jr.box.ctrl)) && this.show(rr, jr, "on", Qr);
        const Wr = this.plans.lastFormed();
        if (null === Wr || Wr.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Wr.receivedAt;
        const ar = function(rr, Sr) {
          var Qr;
          const Zr = jU(rr);
          return null !== (Qr = Sr.find((rr => jU(rr.box.ctrl) === Zr))) && void 0 !== Qr ? Qr : null
        }(Wr.ctrl, Sr);
        return ar && this.show(rr, ar, "formed", Qr), ar
      }
      fade(rr, Sr) {
        0 !== this.glows.length && (this.glows = this.glows.filter((Qr => {
          let {
            mesh: Zr,
            glow: Wr,
            startMs: ar,
            record: jr
          } = Qr;
          const Ir = (Sr - ar) / Nt[Wr].ms;
          return Ir >= 1 ? (rr.disposeGameMesh(Zr), jr && (jr.endMs = Sr), !1) : (rr.setGameMesh(Zr, {
            visibility: "formed" === Wr ? 1 - Ir : Math.sin(Math.PI * Ir)
          }), !0)
        })))
      }
      dispose(rr) {
        for (const {
            mesh: Qr
          }
          of this.glows) rr.disposeGameMesh(Qr);
        this.glows = [], this.levels.clear();
        const Sr = "undefined" !== typeof window ? window : null;
        (null === Sr || void 0 === Sr ? void 0 : Sr.baf2Glows) === this.devAccessor && delete Sr.baf2Glows
      }
      show(rr, Sr, Qr, Zr) {
        const {
          lo: Wr,
          hi: ar
        } = Bf(Sr.box);
        let jr = null;
        this.devLog && (jr = {
          glow: Qr,
          ctrl: Ut(Sr.box.ctrl),
          lo: Ut(Wr),
          hi: Ut(ar),
          startMs: Zr,
          endMs: null
        }, this.devLog.push(jr), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(rr, Qr, Tf(Wr, ar, Nt[Qr].thick)),
          glow: Qr,
          startMs: Zr,
          record: jr
        })
      }
      build(rr, Sr, Qr) {
        const Zr = mU(rr, Qr, {
          rgb: Nt[Sr].colour,
          alpha: 1
        });
        return rr.setGameMesh(Zr, {
          visibility: 0
        }), Zr
      }
    }
    const zt = 1 / .6,
      Yt = {
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
        blendMode: OI.e.Standard,
        soft: !0
      },
      nt = {
        ...Yt,
        size: [.25, .4],
        count: 2
      };

    function et(rr) {
      return {
        colours: [rr, rr],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: OI.e.Add,
        soft: !1
      }
    }
    const Kt = et([150, 225, 255]),
      yt = et([185, 145, 255]),
      Bt = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function Tt(rr) {
      const Sr = RS[rr];
      return null === Sr.fuelSlot || WQ(Sr) ? Bt.includes(rr) ? yt : Kt : Yt
    }
    const vt = {
        kind: "smokePuff"
      },
      Ot = [.2, .025, .2];

    function Lt(rr, Sr) {
      const [
        [Qr, Zr, Wr],
        [ar, jr, Ir]
      ] = rr.colours;
      return {
        texture: rr.soft ? vt : "square_particle",
        sx: Sr,
        minLifeTime: rr.life[0] / zt,
        maxLifeTime: rr.life[1] / zt,
        minEmitPower: rr.power[0] * zt,
        maxEmitPower: rr.power[1] * zt,
        minSize: rr.size[0],
        maxSize: rr.size[1],
        emitRate: 0,
        gravity: [0, rr.lift * zt * zt, 0],
        dir1: [-rr.spread, 1, -rr.spread],
        dir2: [rr.spread, 1, rr.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [Qr, Zr, Wr, rr.alpha],
          maxColor: [ar, jr, Ir, rr.alpha]
        }, {
          timeFraction: 1,
          minColor: [Qr, Zr, Wr, 0],
          maxColor: [ar, jr, Ir, 0]
        }],
        blendMode: rr.blendMode
      }
    }
    class lt {
      constructor(rr) {
        this.fixed = rr, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(rr, Sr, Qr) {
        var Zr;
        if (Qr === this.lastFrame) return !1;
        this.lastFrame = Qr;
        const Wr = this.at;
        Wr[0] = Sr[0] + .5, Wr[1] = Sr[1] + 1.025, Wr[2] = Sr[2] + .5;
        const ar = null !== (Zr = this.fixed) && void 0 !== Zr ? Zr : Ir() ? nt : Yt;
        let jr = this.particles.get(ar);
        return jr || (jr = rr.createParticles(function(rr) {
          return Lt(rr, Math.ceil(12 * rr.count * rr.life[1]) + rr.count)
        }(ar), {
          pos: Wr,
          half: Ot
        }), this.particles.set(ar, jr)), jr.moveTo(Wr), jr.emit(ar.count), !0
      }
      dispose() {
        for (const rr of this.particles.values()) rr.stop();
        this.particles.clear()
      }
    }
    class Xt {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(rr) {
        this.indexed = !0;
        for (const Sr of LS) {
          const Qr = Tt(Sr);
          for (let Zr = 1; Zr <= 4; Zr++) {
            const Wr = rr.blockNameToBlockId(`${Sr}|meta|rot${Zr}|Running`, !0);
            if (null === Wr) continue;
            let ar = this.pufferIndexByStyle.get(Qr);
            void 0 === ar && (ar = this.pufferList.push(new lt(Qr === Yt ? null : Qr)) - 1, this.pufferIndexByStyle.set(Qr, ar)), this.pufferIndexById[Wr] = ar + 1
          }
        }
      }
      onAfterRender(rr, Sr) {
        this.indexed || this.index(rr);
        const Qr = performance.now(),
          Zr = 0 === this.lastMs ? 0 : Math.min(Qr - this.lastMs, 250) / 1e3;
        this.lastMs = Qr, this.frame++, rr.particlesEnabled() ? (this.scan(rr, Sr), this.puff(rr, Zr)) : this.sources = []
      }
      dispose() {
        for (const rr of this.pufferList) rr.dispose();
        this.sources = [], this.found = []
      }
      scan(rr, Sr) {
        0 === this.scanRow && (this.origin = [Math.floor(Sr[0]) - 12, Math.floor(Sr[1]) - 6, Math.floor(Sr[2]) - 12]);
        const Qr = Math.min(this.scanRow + 16, 325),
          [Zr, Wr, ar] = this.origin,
          jr = this.hits;
        jr.length = 0;
        for (let Ir = this.scanRow; Ir < Qr; Ir++) {
          const Sr = Zr + Ir % 25,
            Qr = Wr + Math.floor(Ir / 25);
          rr.scanBlocks(Sr, Qr, ar, Sr + 1, Qr + 1, ar + 25, this.pufferIndexById, jr)
        }
        for (let Ir = 0; Ir < jr.length; Ir += 4) {
          const rr = jr[Ir + 3];
          this.found.push({
            pos: [jr[Ir], jr[Ir + 1], jr[Ir + 2]],
            aI: rr,
            puffer: this.pufferList[this.pufferIndexById[rr] - 1]
          })
        }
        this.scanRow = Qr, 325 === Qr && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(rr, Sr) {
        const Qr = this.sources.length;
        if (0 !== Qr) {
          this.budget = Math.min(this.budget + Math.min(Qr / 1.2, 12) * Sr, 2);
          for (let Sr = 0; Sr < Qr && this.budget >= 1; Sr++) {
            const Sr = this.sources[this.cursor % Qr];
            this.cursor = (this.cursor + 1) % Qr, rr.getBlockId(Sr.pos[0], Sr.pos[1], Sr.pos[2]) === Sr.aI && (Sr.puffer.puff(rr, Sr.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Pt = {
        ...et([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      Ht = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function qt(rr) {
      return 0 === rr.spots.length ? 0 : Math.min(1 * rr.level, 4)
    }

    function Rt(rr) {
      return 0 === rr.glass.length ? 0 : Math.min(.75 * rr.level, 3)
    }

    function gt(rr) {
      return `${rr.ctrl.join(",")}:${rr.rot}:${rr.cu},${rr.cv}:${rr.w},${rr.h},${rr.d}`
    }

    function Ct(rr, Sr) {
      const Qr = Sr.w - 2,
        Zr = Sr.h - 2,
        Wr = Sr.d - 2,
        ar = [];
      for (let jr = 0; jr < Qr * Zr * Wr; jr++) {
        const Ir = jr % Qr,
          fr = Math.floor(jr / Qr) % Wr,
          Er = Math.floor(jr / (Qr * Wr));
        if (Ir > 0 && Ir < Qr - 1 && fr > 0 && fr < Wr - 1 && Er > 0 && Er < Zr - 1) continue;
        const pr = sQ(Sr, QZ(Sr, jr)),
          xr = XU(rr, pr);
        if (null !== xr && "Fuel Rod" === PQ(xr))
          for (const Sr of Ht) {
            const Qr = [pr[0] + Sr[0], pr[1] + Sr[1], pr[2] + Sr[2]];
            Gt(rr, Qr) && ar.push(kt(Qr, Sr))
          }
      }
      return ar
    }

    function Mt(rr, Sr) {
      const {
        lo: Qr,
        hi: Zr
      } = Bf(Sr), Wr = [];
      for (let ar = Qr[0]; ar < Zr[0]; ar++)
        for (let Sr = Qr[1]; Sr < Zr[1]; Sr++) {
          const jr = ar === Qr[0] || ar === Zr[0] - 1 || Sr === Qr[1] || Sr === Zr[1] - 1 ? 1 : Math.max(1, Zr[2] - 1 - Qr[2]);
          for (let Ir = Qr[2]; Ir < Zr[2]; Ir += jr) {
            const jr = [ar, Sr, Ir];
            if (!Gt(rr, jr)) continue;
            const fr = ar === Qr[0] ? Ht[1] : ar === Zr[0] - 1 ? Ht[0] : Ir === Qr[2] ? Ht[5] : Ir === Zr[2] - 1 ? Ht[4] : Sr === Qr[1] ? Ht[3] : Ht[2];
            Wr.push(kt(jr, fr))
          }
        }
      return Wr
    }

    function Gt(rr, Sr) {
      const Qr = XU(rr, Sr);
      return null !== Qr && "Reactor Glass" === PQ(Qr)
    }

    function kt(rr, Sr) {
      return [
        [rr[0] + .5 + .55 * Sr[0], rr[1] + .5 + .55 * Sr[1], rr[2] + .5 + .55 * Sr[2]],
        [0 === Sr[0] ? .4 : .02, 0 === Sr[1] ? .4 : .02, 0 === Sr[2] ? .4 : .02]
      ]
    }
    class At {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(rr, Sr, Qr, Zr) {
        const Wr = [],
          ar = new Set;
        for (const Er of Sr) {
          var jr, Ir, fr;
          const {
            box: Sr
          } = Er;
          if ("reactor" !== Er.kind || Er.level <= 0 || (Sr.ctrl[0] - Qr[0]) ** 2 + (Sr.ctrl[1] - Qr[1]) ** 2 + (Sr.ctrl[2] - Qr[2]) ** 2 > 576) continue;
          const pr = gt(Sr);
          ar.add(pr);
          let xr = this.spots.get(pr);
          if ((!xr || Zr - xr.at > 3e3) && (xr = {
              at: Zr,
              spots: Ct(rr, Sr),
              glass: Mt(rr, Sr)
            }, this.spots.set(pr, xr)), 0 === xr.spots.length && 0 === xr.glass.length) continue;
          const mr = this.sparking.find((rr => rr.key === pr));
          Wr.push({
            key: pr,
            level: Er.level,
            spots: xr.spots,
            glass: xr.glass,
            budget: null !== (jr = null === mr || void 0 === mr ? void 0 : mr.budget) && void 0 !== jr ? jr : 0,
            cursor: null !== (Ir = null === mr || void 0 === mr ? void 0 : mr.cursor) && void 0 !== Ir ? Ir : 0,
            glassBudget: null !== (fr = null === mr || void 0 === mr ? void 0 : mr.glassBudget) && void 0 !== fr ? fr : 0
          })
        }
        for (const Er of this.spots.keys()) ar.has(Er) || this.spots.delete(Er);
        this.sparking = Wr
      }
      emit(rr, Sr, Qr) {
        var Zr;
        if (0 === this.sparking.length || !rr.particlesEnabled() || Qr === this.lastFrame) return;
        this.lastFrame = Qr;
        let Wr = 0,
          ar = 0;
        for (const Ur of this.sparking) Wr += qt(Ur), ar += Rt(Ur);
        const jr = Wr > 8 ? 8 / Wr : 1,
          Ir = ar > 6 ? 6 / ar : 1;
        let fr, Er = null,
          pr = null;
        for (const Ur of this.sparking) Ur.budget = Math.min(Ur.budget + qt(Ur) * jr * Sr, 2), Ur.budget >= 1 && (!Er || Ur.budget > Er.budget) && (Er = Ur), Ur.glassBudget = Math.min(Ur.glassBudget + Rt(Ur) * Ir * Sr, 2), Ur.glassBudget >= 1 && (!pr || Ur.glassBudget > pr.glassBudget) && (pr = Ur);
        if (Er) Er.budget--, fr = Er.spots[Er.cursor++ % Er.spots.length];
        else {
          if (!pr) return;
          pr.glassBudget--, fr = pr.glass[Math.floor(Math.random() * pr.glass.length)]
        }
        const [xr, mr] = fr, Nr = null !== (Zr = this.emitter) && void 0 !== Zr ? Zr : this.create(rr, xr, mr);
        Nr.moveTo(xr, mr), Nr.emit(Pt.count)
      }
      dispose() {
        var rr;
        null === (rr = this.emitter) || void 0 === rr || rr.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(rr, Sr, Qr) {
        const Zr = Math.ceil(14 * Pt.count * Pt.life[1]) + Pt.count;
        return this.emitter = rr.createParticles(Lt(Pt, Zr), {
          pos: Sr,
          half: Qr
        }), this.emitter
      }
    }
    const Vt = [2, 3.2],
      it = 1 / 3,
      wt = 1 / .6,
      ct = {
        texture: vt,
        sx: Math.ceil(18 * Vt[1]) + 4,
        minLifeTime: Vt[0] / wt,
        maxLifeTime: Vt[1] / wt,
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
        blendMode: OI.e.Standard
      };
    class Ft {
      constructor(rr) {
        this.plans = rr, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new At, this.frame = 0, this.outline = new ht(rr)
      }
      onAfterRender(rr, Sr, Qr) {
        const Zr = performance.now(),
          Wr = 0 === this.lastMs ? 0 : Math.min(Zr - this.lastMs, 250) / 1e3;
        if (this.lastMs = Zr, this.outline.fade(rr, Zr), this.puff(rr, Wr, Qr), this.sparks.emit(rr, Wr, this.frame++), Zr - this.lastCheckMs < 150) return;
        this.lastCheckMs = Zr;
        const ar = this.plans.all().filter((rr => rr.formed && ot(rr.box.ctrl, Qr) <= 4096));
        this.plumes = ar.filter((rr => "reactor" === rr.kind && rr.level > 0)).map((rr => ({
          box: rr.box,
          level: rr.level
        }))), this.updateHums(rr, Sr, ar, Qr), this.sparks.update(rr, ar, Qr, Zr), this.chimeFormed(rr, Sr, ar, Zr)
      }
      dispose(rr) {
        var Sr;
        this.outline.dispose(rr), null === (Sr = this.steam) || void 0 === Sr || Sr.dispose(), this.steam = null, this.sparks.dispose();
        for (const Qr of this.hums.values()) Qr.stop();
        this.hums.clear()
      }
      chimeFormed(rr, Sr, Qr, Zr) {
        const Wr = this.outline.check(rr, Qr, Zr);
        Wr && rr.playSound(Sr, "exp_levelup", .6, 1, {
          aZ: [Wr.box.ctrl[0] + .5, Wr.box.ctrl[1], Wr.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(rr, Sr, Qr) {
        const Zr = this.plumes;
        if (0 === Zr.length || !rr.particlesEnabled()) return void(this.plumeBudget = 0);
        const Wr = Zr.reduce(((rr, Sr) => rr + 3 * Sr.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Wr * Sr, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let ar = this.plumeCursor % (Wr / 3);
        this.plumeCursor++;
        let jr = Zr[0];
        for (const xr of Zr) {
          if (ar < xr.level) {
            jr = xr;
            break
          }
          ar -= xr.level
        }
        const {
          lo: Ir,
          hi: fr
        } = Bf(jr.box);
        if (function(rr, Sr, Qr) {
            const Zr = Math.max(rr[0] - Qr[0], 0, Qr[0] - Sr[0]),
              Wr = Math.max(rr[2] - Qr[2], 0, Qr[2] - Sr[2]);
            return Math.hypot(Zr, Qr[1] - Sr[1], Wr)
          }(Ir, fr, Qr) < 6 && Math.random() > it) return;
        const Er = [(Ir[0] + fr[0]) / 2, fr[1] + .05, (Ir[2] + fr[2]) / 2],
          pr = [(fr[0] - Ir[0]) / 2 - .5, .05, (fr[2] - Ir[2]) / 2 - .5];
        this.steam ??= rr.createParticles(ct, {
          pos: Er,
          half: pr
        }), this.steam.moveTo(Er, pr), this.steam.emit(1)
      }
      updateHums(rr, Sr, Qr, Zr) {
        const Wr = new Map;
        for (const jr of Qr) "reactor" === jr.kind && jr.level > 0 && ot(jr.box.ctrl, Zr) <= 576 && Wr.set(`${ar=jr.box.ctrl,`${ar[0]},${ar[1]},${ar[2]}`}:${jr.level}`, jr);
        var ar;
        for (const [jr, Ir] of this.hums) Wr.has(jr) || (Ir.stop(), this.hums.delete(jr));
        for (const [jr, Ir] of Wr) {
          if (this.hums.has(jr)) continue;
          const {
            lo: Qr,
            hi: Zr
          } = Bf(Ir.box), Wr = [(Qr[0] + Zr[0]) / 2, Qr[1], (Qr[2] + Zr[2]) / 2], ar = rr.playSound(Sr, "rocketEngineLoop", .08 + .06 * Ir.level, .55, {
            aZ: Wr,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          ar && this.hums.set(jr, ar)
        }
      }
    }

    function ot(rr, Sr) {
      return (rr[0] - Sr[0]) ** 2 + (rr[1] - Sr[1]) ** 2 + (rr[2] - Sr[2]) ** 2
    }
    class bt {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      rK(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Zr = [rr.baf2BombAt[0], rr.baf2BombAt[1], rr.baf2BombAt[2]],
          Wr = rr.baf2BombR;
        if (rr.baf2BombBoom) {
          const rr = Math.hypot(Sr[0] - Zr[0], Sr[1] - Zr[1], Sr[2] - Zr[2]);
          this.Jp({
            fuse: null,
            blast: {
              at: Zr,
              r: Wr,
              receivedAt: Qr,
              distance: rr,
              flash: rr <= 3 * Wr
            }
          })
        } else this.Jp({
          ...this.snapshot,
          fuse: rr.baf2BombMs > 0 ? {
            at: Zr,
            r: Wr,
            endsAt: Qr + rr.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      Jp(rr) {
        this.snapshot = rr;
        for (const Sr of this.listeners) Sr()
      }
    }
    const Jt = (0, Zr.memo)((function(rr) {
      var Sr;
      let {
        store: Qr
      } = rr;
      const {
        t: Wr
      } = (0, TW.E)(), [ar, jr] = (0, Zr.useState)((() => Qr.get())), [Ir, fr] = (0, Zr.useState)((() => performance.now()));
      (0, Zr.useEffect)((() => (jr(Qr.get()), Qr.subscribe((() => {
        jr(Qr.get()), fr(performance.now())
      })))), [Qr]);
      const {
        fuse: Er,
        blast: pr
      } = ar;
      (0, Zr.useEffect)((() => {
        if (!Er) return;
        const rr = setInterval((() => {
          fr(performance.now())
        }), 250);
        return () => {
          clearInterval(rr)
        }
      }), [Er]);
      const [xr, mr] = (0, Zr.useState)(!1);
      (0, Zr.useEffect)((() => {
        if (null === pr || void 0 === pr || !pr.flash) return;
        mr(!0);
        const rr = setTimeout((() => {
          mr(!1)
        }), 2500);
        return () => {
          clearTimeout(rr)
        }
      }), [pr]);
      const Nr = Er ? function(rr, Sr) {
        return rr.endsAt <= Sr ? 0 : Math.ceil((rr.endsAt - Sr) / 1e3)
      }(Er, Ir) : 0;
      return (0, za.jsxs)(za.Fragment, {
        children: [Nr > 0 && (0, za.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Wr("buildAFactory2Game:bombCountdown", {
            amount: String(Nr),
            radius: String(null !== (Sr = null === Er || void 0 === Er ? void 0 : Er.r) && void 0 !== Sr ? Sr : 0)
          })
        }), xr && (0, za.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Dt(rr) {
      const Sr = Math.min(4, Math.max(1, rr / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * rr / 4)),
        capSpread: Math.min(5 * rr / 8, 24 * Sr),
        capThick: 6 * Sr,
        stemHalfWidth: 3 * Sr,
        puffScale: Sr
      }
    }
    class dt {
      constructor() {
        this.wI = !1
      }
      hold(rr) {
        rr.getCameraFar() < 1e3 && (rr.setCameraFar(1e3), this.wI = !0)
      }
      release(rr) {
        this.wI && (this.wI = !1, rr.setCameraFar(null))
      }
    }
    const st = 1 / .6,
      ut = [.2, .1, .2],
      rh = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Sh = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: OI.e.Standard,
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
      Qh = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: OI.e.Standard,
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
      Zh = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: OI.e.Standard,
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
      Wh = {
        texture: vt,
        sx: Math.ceil(120) + 4,
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
        blendMode: OI.e.Add
      };
    class ah {
      constructor(rr) {
        this.store = rr, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new dt, this.timers = []
      }
      onAfterRender(rr, Sr) {
        const Qr = performance.now(),
          Zr = 0 === this.lastMs ? 0 : Math.min(Qr - this.lastMs, 250) / 1e3;
        this.lastMs = Qr;
        const {
          fuse: Wr,
          blast: ar
        } = this.store.get();
        null !== ar && ar !== this.shownBlast && (this.shownBlast = ar, this.startBlast(rr, Sr, ar, Qr));
        const jr = rr.particlesEnabled();
        null !== Wr && Wr.endsAt > Qr && jr ? this.emitBeacon(rr, Wr, Zr, Qr) : this.beaconBudget = 0, null !== this.cloud && (Qr - this.cloud.startMs > 33e3 ? this.disposeCloud(rr) : (this.far.hold(rr), jr && this.emitCloud(rr, Zr, Qr)))
      }
      dispose(rr) {
        var Sr;
        null === (Sr = this.beacon) || void 0 === Sr || Sr.dispose(), this.beacon = null, this.disposeCloud(rr);
        for (const Qr of this.timers) clearTimeout(Qr);
        this.timers.length = 0
      }
      emitBeacon(rr, Sr, Qr, Zr) {
        const Wr = Sr.endsAt - Zr < 5e3 ? 350 : 1e3,
          ar = .5 + .5 * Math.sin(2 * Math.PI * Zr / Wr);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * ar * Qr, 4), this.beaconBudget < 1) return;
        const jr = Math.floor(this.beaconBudget);
        this.beaconBudget -= jr;
        const [Ir, fr, Er] = Sr.at, pr = [Ir + .5, fr + 1.1, Er + .5];
        this.beacon ??= rr.createParticles(Wh, {
          pos: pr,
          half: ut
        }), this.beacon.moveTo(pr), this.beacon.emit(jr)
      }
      startBlast(rr, Sr, Qr, Zr) {
        var Wr;
        null === (Wr = this.beacon) || void 0 === Wr || Wr.dispose(), this.beacon = null, this.disposeCloud(rr);
        const ar = (0, TI.isMobile)() ? .5 : 1;
        this.streams = [Sh, Qh, Zh].map((rr => {
          const Sr = Math.round(rr.count * ar);
          return {
            spec: rr,
            particles: null,
            rate: Sr / ((rr.toMs - rr.fromMs) / 1e3),
            budget: 0,
            left: Sr
          }
        })), this.cloud = {
          blast: Qr,
          startMs: Zr
        };
        const jr = Math.max(.25, 1 - Qr.distance / (6 * Qr.r)),
          Ir = Qr.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [Qr, Zr, Wr] of rh) Ih(rr, Sr, Qr, jr * Zr, Wr)
        }), Ir))
      }
      emitCloud(rr, Sr, Qr) {
        const {
          blast: Zr,
          startMs: Wr
        } = this.cloud, ar = Qr - Wr, [jr, Ir, fr] = Zr.at, Er = Dt(Zr.r);
        for (const pr of this.streams) {
          const {
            spec: Qr
          } = pr;
          if (pr.left <= 0 || ar < Qr.fromMs) continue;
          pr.budget += pr.rate * Sr;
          const Wr = Math.min(Math.floor(pr.budget), pr.left);
          if (Wr < 1) continue;
          pr.budget -= Wr, pr.left -= Wr;
          const xr = pr.particles ??= this.createStream(rr, Qr, Zr);
          if (Qr === Sh) {
            const rr = Er.stemHalfWidth;
            xr.moveTo([jr, Ir + 1, fr], [rr, 1, rr])
          } else if (Qr === Qh) {
            const rr = Er.capSpread * Math.min(1, (ar - Qr.fromMs) / 3e3),
              Sr = Math.sqrt(Math.random()),
              Zr = 2 * Math.random() * Math.PI,
              Wr = Math.cos(Zr) * Sr,
              pr = Math.sin(Zr) * Sr,
              mr = jr + Wr * rr,
              Nr = fr + pr * rr,
              Ur = Er.capThick,
              tr = Ir + Er.capHeight + Ur * (1 - Sr * Sr) * 2;
            xr.setDirections([.7 * Wr, .05, .7 * pr], [Wr, .2, pr]), xr.moveTo([mr, tr, Nr], [Ur, Ur, Ur])
          } else {
            this.ringAngle += 2.39996;
            const rr = Math.cos(this.ringAngle),
              Sr = Math.sin(this.ringAngle);
            xr.setDirections([rr, .05, Sr], [rr, .1, Sr]), xr.moveTo([jr + 2 * rr, Ir + .5, fr + 2 * Sr], [0, .5, 0])
          }
          xr.emit(Wr)
        }
      }
      createStream(rr, Sr, Qr) {
        const {
          r: Zr
        } = Qr, Wr = Math.max(Sr.life[0], Zr / 25), ar = Sr === Zh ? [.9 * Wr, Wr] : Sr.life, jr = Dt(Zr), Ir = Sr === Zh ? 1 : jr.puffScale, fr = {
          texture: vt,
          sx: Sr.count + 4,
          minLifeTime: ar[0] / st,
          maxLifeTime: ar[1] / st,
          minSize: Sr.size[0] * Ir,
          maxSize: Sr.size[1] * Ir,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, Sr.gravity * st * st, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: Sr.from[0],
            maxColor: Sr.from[1]
          }, {
            timeFraction: .6,
            minColor: jh(Sr.from[0], Sr.to[0]),
            maxColor: jh(Sr.from[1], Sr.to[1])
          }, {
            timeFraction: 1,
            minColor: Sr.to[0],
            maxColor: Sr.to[1]
          }],
          blendMode: Sr.blend
        };
        if (Sr === Sh) {
          const rr = jr.capHeight / ((ar[0] + ar[1]) / 2);
          fr.minEmitPower = .9 * rr * st, fr.maxEmitPower = 1.05 * rr * st, fr.dir1 = [-.1, 1, -.1], fr.dir2 = [.1, 1, .1]
        } else Sr === Qh ? (fr.minEmitPower = 1.2, fr.maxEmitPower = 2, fr.dir1 = [-1, .05, -1], fr.dir2 = [1, .2, 1]) : (fr.minEmitPower = 39.583333333333336, fr.maxEmitPower = 41.66666666666667, fr.dir1 = [1, 0, 0], fr.dir2 = [1, 0, 0]);
        return rr.createParticles(fr, {
          pos: Qr.at
        })
      }
      disposeCloud(rr) {
        for (const Qr of this.streams) {
          var Sr;
          null === (Sr = Qr.particles) || void 0 === Sr || Sr.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(rr)
      }
    }

    function jh(rr, Sr) {
      return [(rr[0] + Sr[0]) / 2, (rr[1] + Sr[1]) / 2, (rr[2] + Sr[2]) / 2, .75 * rr[3]]
    }

    function Ih(rr, Sr, Qr, Zr, Wr) {
      try {
        rr.playSound(Sr, Qr, Zr, Wr)
      } catch (ar) {
        console.error(ar)
      }
    }
    const fh = {
        sx: 720,
        perS: 100
      },
      Eh = {
        sx: 320,
        perS: 44
      };
    class ph {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(rr, Sr) {
        this.zone = {
          centre: [...rr.centre],
          r: rr.r,
          band: rr.band ? [rr.band[0], rr.band[1]] : void 0
        }, this.endsAt = Sr
      }
      stop() {
        this.zone = null
      }
      rK(rr, Sr) {
        const {
          baf2FalloutMs: Qr,
          baf2FalloutAt: Zr,
          baf2FalloutR: Wr,
          baf2FalloutY: ar
        } = rr;
        Qr > 0 && Zr && void 0 !== Wr ? this.start({
          centre: Zr,
          r: Wr,
          band: ar
        }, Sr + Qr) : this.stop()
      }
      perS(rr, Sr, Qr) {
        const Zr = this.zone;
        if (!Zr) return 0;
        const Wr = this.endsAt - rr;
        return Wr <= 0 ? (this.zone = null, 0) : Zr.band && (Sr[1] < Zr.band[0] || Sr[1] > Zr.band[1]) || Math.hypot(Sr[0] - Zr.centre[0], Sr[2] - Zr.centre[2]) > Zr.r ? 0 : Qr.perS * Math.min(1, Wr / 5e3)
      }
    }
    const xh = [5, 7],
      mh = [24, 8, 24],
      Nh = .5,
      Uh = 1 / .6,
      th = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class hh {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TI.isMobile)();
        this.state = new ph, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(rr) {
          return rr ? Eh : fh
        }(rr)
      }
      startFallout(rr, Sr) {
        this.state.start(rr, Sr)
      }
      stopFallout() {
        this.state.stop()
      }
      rK(rr) {
        this.state.rK(rr, performance.now())
      }
      onAfterRender(rr, Sr) {
        var Qr;
        const Zr = performance.now(),
          Wr = 0 === this.lastMs ? 0 : Math.min(Zr - this.lastMs, 250) / 1e3;
        this.lastMs = Zr;
        const ar = this.state.perS(Zr, Sr, this.tier);
        if (ar <= 0 || !rr.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + ar * Wr, ar / 4);
        const jr = Math.floor(this.budget);
        if (jr < 1) return;
        this.budget -= jr;
        const Ir = this.at;
        Ir[0] = Sr[0], Ir[1] = Sr[1] + 12, Ir[2] = Sr[2];
        const fr = null !== (Qr = this.systems) && void 0 !== Qr ? Qr : this.create(rr, Ir),
          Er = this.amounts;
        Er[0] = 0, Er[1] = 0;
        for (let pr = 0; pr < jr; pr++) Er[Math.random() < .3 ? 1 : 0]++;
        for (let pr = 0; pr < fr.length; pr++) Er[pr] > 0 && (fr[pr].moveTo(Ir, mh), fr[pr].emit(Er[pr]))
      }
      dispose() {
        for (const Sr of null !== (rr = this.systems) && void 0 !== rr ? rr : []) {
          var rr;
          Sr.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(rr, Sr) {
        return this.systems = th.map((Qr => {
          let {
            rgba: [Zr, Wr, ar, jr],
            share: Ir
          } = Qr;
          const fr = {
            texture: "square_particle",
            sx: Math.ceil(this.tier.sx * Ir),
            minLifeTime: xh[0] / Uh,
            maxLifeTime: xh[1] / Uh,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Nh, -1, Nh],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Zr, Wr, ar, 0]
            }, {
              timeFraction: .15,
              minColor: [Zr, Wr, ar, jr]
            }, {
              timeFraction: .8,
              minColor: [Zr, Wr, ar, jr]
            }, {
              timeFraction: 1,
              minColor: [Zr, Wr, ar, 0]
            }],
            blendMode: OI.e.Standard
          };
          return rr.createParticles(fr, {
            pos: Sr,
            half: mh
          })
        })), this.systems
      }
    }
    const zh = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Yh(rr) {
      const Sr = /\|rot(\d)/.exec(rr);
      return zh[Sr ? Number(Sr[1]) : 1]
    }
    var nh = Qr(683),
      eh = Qr(39969);
    const Kh = new Set(nh.n);

    function yh(rr) {
      if (-2 !== rr.count) return null;
      const Sr = wr(rr.item);
      return null !== Sr && Kh.has(Sr) ? Sr : null
    }

    function Bh(rr) {
      const {
        width: Sr,
        height: Qr
      } = (0, eh.c)(rr).hitBoxDimensions;
      return .55 / Math.max(Sr, Qr)
    }

    function Th(rr, Sr, Qr) {
      if (!Qr) return !1;
      const Zr = rr[0] + .5 - Sr[0],
        Wr = rr[1] + .5 - Sr[1],
        ar = rr[2] + .5 - Sr[2];
      return Zr * Zr + Wr * Wr + ar * ar <= 576
    }

    function vh(rr, Sr) {
      return Math.atan2(rr[0], rr[2]) + Math.PI + Sr
    }

    function Oh(rr, Sr) {
      const Qr = 2 * Math.PI;
      return (rr + Qr * Sr / 1e4) % Qr
    }
    class Lh {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = rr, this.now = Sr, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = rr.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(rr, Sr) {
        if (0 === this.farms.size) return;
        const Qr = this.now(),
          Zr = Number.isNaN(this.frameMs) ? 0 : Math.min(Qr - this.frameMs, 100);
        this.frameMs = Qr, Qr - this.checkedMs >= 1e3 && (this.checkedMs = Qr, this.check(rr, Sr));
        for (const Wr of this.farms.values()) Wr.shown && Wr.running && null !== Wr.model && Zr > 0 && (Wr.spin = Oh(Wr.spin, Zr), Wr.model.setPose(Wr.feet, vh(Wr.front, Wr.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const rr of this.farms.values()) this.drop(rr);
        this.farms.clear()
      }
      sync() {
        const rr = new Set;
        for (const Sr of this.labels.list()) {
          const Qr = yh(Sr);
          if (null === Qr) continue;
          rr.add(Sr.key);
          const Zr = this.farms.get(Sr.key);
          if ((null === Zr || void 0 === Zr ? void 0 : Zr.mob) === Qr) continue;
          Zr && this.drop(Zr);
          const [Wr, ar, jr] = Sr.pos;
          this.farms.set(Sr.key, {
            pos: Sr.pos,
            feet: [Wr + .5, ar + 1, jr + .5],
            mob: Qr,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [Sr, Qr] of this.farms) rr.has(Sr) || (this.drop(Qr), this.farms.delete(Sr));
        this.checkedMs = -1 / 0
      }
      check(rr, Sr) {
        for (const Qr of this.farms.values()) {
          const [Zr, Wr, ar] = Qr.pos, jr = XU(rr, Qr.pos);
          null !== jr && PQ(jr) === gr && Th(Qr.pos, Sr, "Air" === XU(rr, [Zr, Wr + 1, ar])) ? (Qr.running = jr.endsWith("|Running"), Qr.front = Yh(jr), null === Qr.model && (Qr.model = rr.createMobModel(Qr.mob, Bh(Qr.mob)), null === Qr.model) || (Qr.model.setPose(Qr.feet, vh(Qr.front, Qr.spin)), Qr.shown || (Qr.model.setVisible(!0), Qr.shown = !0))) : (Qr.shown && null !== Qr.model && Qr.model.setVisible(!1), Qr.shown = !1)
        }
      }
      drop(rr) {
        var Sr;
        null === (Sr = rr.model) || void 0 === Sr || Sr.dispose(), rr.model = null, rr.shown = !1
      }
    }
    class lh {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(rr) {
        var Sr;
        this.island = rr.baf2ColIsland, this.islandSite = (Sr = rr.baf2ColSite) && 8 === Sr.length ? {
          spawnXZ: [Sr[0], Sr[1]],
          coreXZ: [Sr[2], Sr[3]],
          minXZ: [Sr[4], Sr[5]],
          maxXZ: [Sr[6], Sr[7]]
        } : null, this.views = rr.baf2ColList.map((rr => ({
          entry: WW(rr)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(rr) {
        this.status = rr, this.emit()
      }
      onOpen(rr) {
        this.openHeld = rr
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
        return this.views.map((rr => rr.entry))
      }
      entryAtRoot(rr) {
        var Sr;
        return null === (Sr = this.views.find((Sr => {
          let {
            entry: Qr
          } = Sr;
          return Qr.focus[0] === rr[0] && Qr.focus[1] === rr[1] + 1 && Qr.focus[2] === rr[2]
        }))) || void 0 === Sr ? void 0 : Sr.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(rr, Sr) {
        return Pf(this.entries(), rr, Sr)
      }
      lookSource() {
        return {
          handles: rr => mZ(rr) >= 0 || NZ(rr),
          line: (rr, Sr) => this.lookLine(rr, Sr),
          version: () => this.beamsVersion
        }
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const rr of this.listeners) rr()
      }
    }
    const Xh = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((rr => rr / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((rr => [rr, rr + 1, rr + 2, rr, rr + 2, rr + 3]))
    };

    function Ph(rr, Sr, Qr, Zr, Wr, ar, jr) {
      let Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const fr = Math.cos(Ir),
        Er = Math.sin(Ir),
        pr = rr.positions.length / 3,
        {
          positions: xr,
          indices: mr
        } = Xh;
      for (let Nr = 0; Nr < xr.length; Nr += 3) {
        const Ir = xr[Nr] * Wr,
          pr = xr[Nr + 2] * jr;
        rr.positions.push(Sr + Ir * fr + pr * Er, Qr + xr[Nr + 1] * ar, Zr - Ir * Er + pr * fr)
      }
      for (const Nr of mr) rr.indices.push(pr + Nr)
    }

    function Hh(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return Sr < 1 ? {
        rgb: rr,
        alpha: Sr
      } : {
        rgb: rr,
        alpha: 1,
        opaque: !0
      }
    }
    class qh {
      constructor(rr, Sr) {
        this.style = rr, this.perSource = Sr, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(rr) {
        this.sources = rr, 0 === rr.length && (this.budget = 0)
      }
      lx(rr, Sr, Qr) {
        const Zr = this.sources.length;
        if (0 !== Zr) {
          var Wr, ar;
          this.budget = Math.min(this.budget + (Wr = Zr, ar = this.perSource, Math.min(Wr * ar, bf) * Sr), 2);
          for (let Sr = 0; Sr < Zr && this.budget >= 1; Sr++) {
            const Sr = this.sources[this.cursor % Zr];
            this.cursor = (this.cursor + 1) % Zr;
            if (!(Math.max(Math.abs(Sr.x - Qr[0]), Math.abs(Sr.y - Qr[1]), Math.abs(Sr.z - Qr[2])) > 32)) return this.puff(rr, Sr), void this.budget--
          }
        }
      }
      dispose() {
        var rr;
        null === (rr = this.particles) || void 0 === rr || rr.dispose(), this.particles = null, this.sources = []
      }
      puff(rr, Sr) {
        let {
          x: Qr,
          y: Zr,
          z: Wr,
          h: ar,
          faces: jr
        } = Sr;
        const Ir = function(rr, Sr, Qr, Zr, Wr) {
            const [ar, jr, Ir] = Wr[Math.floor(Math.random() * Wr.length)], fr = .04, Er = (rr, Sr, Qr) => rr > 0 ? Sr + Qr + fr : rr < 0 ? Sr - fr : Sr + .1, pr = (rr, Sr, Qr) => rr > 0 ? Sr + Qr + fr : rr < 0 ? Sr - fr : Sr + Qr - .1, xr = [Er(ar, rr, 1), Er(jr, Sr, Zr), Er(Ir, Qr, 1)], mr = [pr(ar, rr, 1), pr(jr, Sr, Zr), pr(Ir, Qr, 1)];
            return {
              pos: [(xr[0] + mr[0]) / 2, (xr[1] + mr[1]) / 2, (xr[2] + mr[2]) / 2],
              half: [(mr[0] - xr[0]) / 2, (mr[1] - xr[1]) / 2, (mr[2] - xr[2]) / 2],
              out: [ar, jr, Ir]
            }
          }(Qr, Zr, Wr, ar, jr),
          {
            style: fr
          } = this,
          Er = this.particles ??= rr.createParticles(Lt(fr, Math.ceil(fr.count * bf * fr.life[1]) + 4), Ir);
        Er.moveTo(Ir.pos, Ir.half);
        const [pr, xr, mr] = Ir.out, Nr = fr.spread;
        Er.setDirections([pr - Nr, .6 + xr, mr - Nr], [pr + Nr, 1 + xr, mr + Nr]), Er.emit(fr.count)
      }
    }
    const Rh = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class gh {
      constructor() {
        this.green = new qh(Df.green, Ff), this.pink = new qh(Df.pink, of), this.colliders = [], this.lastMs = 0
      }
      setSources(rr) {
        this.colliders = rr;
        const Sr = [],
          Qr = [];
        for (const Zr of rr) {
          const [rr, Wr, ar] = Zr.focus;
          Sr.push({
            x: rr,
            y: Wr - 1,
            z: ar,
            h: 2,
            faces: Rh
          });
          for (let Sr = 0; Sr < 4; Sr++) {
            if (!Zr.live[Sr]) continue;
            const [rr, Wr, ar] = hZ(Zr.focus, Sr, jZ.LASER_D), [jr, , Ir] = tZ[Sr], fr = Rh.filter((rr => rr[0] !== jr || rr[2] !== Ir || 0 !== rr[1]));
            Qr.push({
              x: rr,
              y: Wr,
              z: ar,
              h: 1,
              faces: fr
            })
          }
        }
        this.green.setSources(Sr), this.pink.setSources(Qr)
      }
      onAfterRender(rr) {
        const Sr = performance.now(),
          Qr = 0 === this.lastMs ? 0 : Math.min(Sr - this.lastMs, 250) / 1e3;
        if (this.lastMs = Sr, 0 === this.colliders.length || !rr.particlesEnabled()) return;
        const Zr = rr.getCameraPosition();
        this.green.lx(rr, Qr, Zr), this.pink.lx(rr, Qr, Zr)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Ch = 1.04,
      Mh = Hh([1, 120 / 255, 220 / 255]),
      Gh = Hh([1, .25, .25], .35);
    class kh {
      constructor(rr) {
        this.store = rr, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new gh
      }
      onAfterRender(rr) {
        this.store.version() !== this.builtVersion && this.rebuild(rr);
        const Sr = performance.now();
        for (const Qr of this.beams) {
          const Zr = 1 + .35 * Math.sin(Sr / 700 * Math.PI * 2 + Qr.phase);
          rr.setGameMesh(Qr.mesh, {
            scale: [Qr.alongX ? 1 : Zr, Zr, Qr.alongX ? Zr : 1]
          })
        }
        this.glow.onAfterRender(rr)
      }
      dispose(rr) {
        this.clear(rr), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(rr) {
        this.clear(rr), this.builtVersion = this.store.version();
        const Sr = [];
        for (const {
            entry: Qr
          }
          of this.store.colliders()) Qr.on && Qr.live.some(Boolean) && (this.addBeams(rr, Qr), Sr.push(Qr)), Qr.blockers.length > 0 && this.addMarkers(rr, Qr);
        this.glow.setSources(Sr)
      }
      addBeams(rr, Sr) {
        const [Qr, Zr, Wr] = Sr.focus, ar = wf - .25, jr = (.25 + wf) / 2;
        for (let Ir = 0; Ir < 4; Ir++) {
          if (!Sr.live[Ir]) continue;
          const [fr, , Er] = tZ[Ir], pr = 0 !== fr, xr = {
            positions: [],
            indices: []
          };
          Ph(xr, 0, 0, 0, pr ? ar : .2, .2, pr ? .2 : ar);
          const mr = [Qr + .5 + fr * jr, Zr + .5, Wr + .5 + Er * jr],
            Nr = rr.createGameMesh(xr, Mh, mr);
          this.meshes.push(Nr), this.beams.push({
            mesh: Nr,
            alongX: pr,
            phase: Ir * Math.PI / 2
          })
        }
      }
      addMarkers(rr, Sr) {
        const Qr = Sr.blockers[0],
          Zr = {
            positions: [],
            indices: []
          };
        for (const [Wr, ar, jr] of Sr.blockers) Ph(Zr, Wr - Qr[0] + .5, ar - Qr[1] + .5, jr - Qr[2] + .5, Ch, Ch, Ch);
        this.meshes.push(rr.createGameMesh(Zr, Gh, Qr))
      }
      clear(rr) {
        for (const Sr of this.meshes) rr.disposeGameMesh(Sr);
        this.meshes = [], this.beams = []
      }
    }
    const Ah = [.56, .83, 1],
      Vh = [1, .73, .08],
      ih = [1, .25, .25],
      wh = [.85, .85, .85],
      ch = [.3, .45, .6];

    function Fh(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const jr = Wr / 2,
        Ir = Wr + ar;
      for (const fr of [-jr, jr])
        for (const Wr of [-jr, jr]) Ph(rr, Sr, Qr + fr, Zr + Wr, Ir, ar, ar), Ph(rr, Sr + fr, Qr, Zr + Wr, ar, Ir, ar), Ph(rr, Sr + fr, Qr + Wr, Zr, ar, ar, Ir)
    }

    function oh(rr) {
      return Sr => rr.isBlockInLoadedChunk(Sr[0], Sr[1], Sr[2]) && 0 === rr.getBlockId(Sr[0], Sr[1], Sr[2])
    }

    function bh(rr) {
      return rr.map((rr => {
        let {
          free: Sr,
          blocked: Qr,
          gaps: Zr,
          supports: Wr
        } = rr;
        return `${Sr.join(";")}|${Qr.join(";")}|${Zr.join(";")}|${Wr.join(";")}`
      })).join("/")
    }

    function Jh(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const ar = Sr[0],
        jr = {
          positions: [],
          indices: []
        };
      for (const [Ir, fr, Er] of Sr) Fh(jr, Ir - ar[0] + .5, fr - ar[1] + .5, Er - ar[2] + .5, Zr, Wr);
      return rr.createGameMesh(jr, Qr, ar)
    }
    class Dh {
      constructor(rr) {
        this.store = rr, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(rr, Sr, Qr) {
        var Zr;
        const Wr = null === (Zr = rr.XQr(Sr)) || void 0 === Zr ? void 0 : Zr.name;
        if (Wr !== fZ && Wr !== IZ) return void("" !== this.shownKey && this.show(rr, "", []));
        const ar = performance.now();
        if (ar - this.lastCheckMs >= 200 && (this.lastCheckMs = ar, Wr === fZ ? this.check(rr, Qr) : this.preview(rr, Qr)), this.pulses.length > 0) {
          const Sr = 1 + .12 * Math.sin(ar / 1e3 * 1.25 * Math.PI * 2),
            Qr = [Sr, Sr, Sr];
          for (const Zr of this.pulses) rr.setGameMesh(Zr, {
            scale: Qr
          })
        }
      }
      dispose(rr) {
        this.clear(rr), this.shownKey = ""
      }
      check(rr, Sr) {
        const Qr = oh(rr),
          Zr = [];
        for (const {
            entry: ar
          }
          of this.store.colliders()) {
          ar.focus.every(((rr, Qr) => Math.abs(rr + .5 - Sr[Qr]) <= jZ.GHOST_REACH)) && Zr.push(Vf(ar, Qr))
        }
        const Wr = bh(Zr);
        Wr !== this.shownKey && this.show(rr, Wr, Zr)
      }
      preview(rr, Sr) {
        const Qr = rr.getTargetedBlock(),
          Zr = Qr ? [Qr.Kh[0], Qr.Kh[1], Qr.Kh[2]] : null,
          Wr = null !== Zr && Zr.every(((rr, Qr) => Math.abs(rr + .5 - Sr[Qr]) <= 8)),
          ar = this.store.site(),
          jr = Wr && ar ? function(rr, Sr, Qr) {
            const Zr = UZ(rr);
            if (!Zr.every(Sr)) return null;
            const Wr = nZ(rr, Qr);
            return {
              column: Zr,
              spots: Vf({
                focus: Zr[1],
                lasers: [!1, !1, !1, !1],
                open: Wr,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, Sr),
              fits: Wr.filter(Boolean).length >= jZ.MIN_SPOTS
            }
          }(Zr, oh(rr), ar) : null,
          Ir = jr ? [jr.spots] : [],
          fr = jr ? `preview ${Zr.join(",")}|${jr.fits}|${bh(Ir)}` : "";
        var Er, pr;
        fr !== this.shownKey && this.show(rr, fr, Ir, null !== (Er = null === jr || void 0 === jr ? void 0 : jr.column) && void 0 !== Er ? Er : [], null === (pr = null === jr || void 0 === jr ? void 0 : jr.fits) || void 0 === pr || pr)
      }
      show(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Wr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(rr), this.shownKey = Sr, Zr.length > 0 && this.meshes.push(Jh(rr, Zr, Hh(Wr ? wh : ih)));
        for (const {
            free: ar,
            blocked: jr,
            gaps: Ir,
            supports: fr
          }
          of Qr) {
          for (const [Sr, Qr, Zr] of ar) {
            const Wr = {
              positions: [],
              indices: []
            };
            Fh(Wr, 0, 0, 0);
            const ar = rr.createGameMesh(Wr, Hh(Ah), [Sr + .5, Qr + .5, Zr + .5]);
            this.meshes.push(ar), this.pulses.push(ar)
          }
          jr.length > 0 && this.meshes.push(Jh(rr, jr, Hh(Vh))), Ir.length > 0 && this.meshes.push(Jh(rr, Ir, Hh(ih), 1.06, .07)), fr.length > 0 && this.meshes.push(Jh(rr, fr, Hh(ch)))
        }
      }
      clear(rr) {
        for (const Sr of this.meshes) rr.disposeGameMesh(Sr);
        this.meshes = [], this.pulses = []
      }
    }
    class dh {
      constructor() {
        this.stored = new Map, this.wI = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(rr) {
        if (!rr.baf2TermOpen) return !1;
        rr.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [Sr, Qr] of rr.baf2TermItems) Qr > 0 ? this.stored.set(Sr, Qr) : this.stored.delete(Sr);
        if (rr.baf2TermHeld && (this.wI = new Map(rr.baf2TermHeld)), this.pending = this.pending.filter((Sr => Sr.seq > rr.baf2TermAcked)), this.silos = rr.baf2TermSilos, this.readOnly = rr.baf2TermReadOnly, this.pocket = !0 === rr.baf2TermPocket, rr.baf2TermReset) this.resort();
        else {
          const rr = new Set(this.order);
          for (const Sr of this.stored.keys()) rr.has(Sr) || this.order.push(Sr)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((rr, Sr) => this.amount(Sr) - this.amount(rr) || rr.localeCompare(Sr))), this.changed()
      }
      take(rr, Sr) {
        const Qr = IS(rr, this.amount(Sr));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Sr,
          amount: Qr,
          put: !1
        }), this.recents = [Sr, ...this.recents.filter((rr => rr !== Sr))].slice(0, 6), this.changed(), QS(this.seq, rr, Sr)
      }
      put(rr, Sr) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Sr,
          amount: IS(rr, this.heldAmount(Sr)),
          put: !0
        }), this.changed(), ZS(this.seq, rr, Sr)
      }
      putAll() {
        this.seq++;
        for (const rr of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: rr,
          amount: this.heldAmount(rr),
          put: !0
        });
        return this.changed(), WS(this.seq)
      }
      amount(rr) {
        var Sr;
        let Qr = null !== (Sr = this.stored.get(rr)) && void 0 !== Sr ? Sr : 0;
        for (const Zr of this.pending) Zr.item === rr && (Qr += Zr.put ? Zr.amount : -Zr.amount);
        return Math.max(0, Qr)
      }
      heldAmount(rr) {
        var Sr;
        let Qr = null !== (Sr = this.wI.get(rr)) && void 0 !== Sr ? Sr : 0;
        for (const Zr of this.pending) Zr.put && Zr.item === rr && (Qr -= Zr.amount);
        return Math.max(0, Qr)
      }
      heldItems() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((Sr => Sr === rr || this.heldAmount(Sr) > 0))
      }
      items() {
        return this.order.filter((rr => this.amount(rr) > 0))
      }
      recent() {
        return this.recents.filter((rr => this.amount(rr) > 0))
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
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      changed() {
        this.version++;
        for (const rr of this.listeners) rr()
      }
    }
    var sh = Qr(39914);
    const uh = {
      isBlock: rr => void 0 !== Pr.j[rr],
      harvestType: rr => {
        var Sr;
        return null === (Sr = Pr.j[rr]) || void 0 === Sr ? void 0 : Sr.harvestType
      },
      harvestLevel: rr => {
        var Sr;
        return null === (Sr = Pr.j[rr]) || void 0 === Sr ? void 0 : Sr.harvestLevel
      },
      dropsNothing: rr => {
        var Sr;
        return null === (null === (Sr = Pr.j[rr]) || void 0 === Sr ? void 0 : Sr.drops)
      },
      displayName: rr => {
        var Sr;
        return null === (Sr = cj.n[rr]) || void 0 === Sr ? void 0 : Sr.displayName
      },
      description: rr => {
        var Sr;
        return null === (Sr = cj.n[rr]) || void 0 === Sr ? void 0 : Sr.description
      },
      harvests: rr => {
        var Sr;
        return null === (Sr = cj.n[rr]) || void 0 === Sr ? void 0 : Sr.harvests
      },
      level: rr => {
        var Sr;
        return null === (Sr = cj.n[rr]) || void 0 === Sr ? void 0 : Sr.level
      }
    };

    function rz(rr, Sr, Qr) {
      return function(rr, Sr, Qr, Zr) {
        var Wr, ar;
        const jr = Sr.split("|")[0],
          Ir = rr.isBlock(Sr) ? Sr : rr.isBlock(jr) ? jr : null;
        if (null === Ir || "rock" !== rr.harvestType(Ir) || rr.dropsNothing(Ir) && !CZ.has(jr)) return null;
        const fr = Qr && "rock" === rr.harvests(Qr) ? null !== (Wr = rr.level(Qr)) && void 0 !== Wr ? Wr : 0 : null,
          Er = null !== (ar = null !== Zr && void 0 !== Zr ? Zr : rr.harvestLevel(Ir)) && void 0 !== ar ? ar : 0;
        return (null !== fr ? Er <= fr : 0 === rr.harvestLevel(Ir)) ? null : OZ(rr, Er)
      }(uh, rr, Sr, Qr)
    }

    function Sz(rr, Sr) {
      return function(rr, Sr, Qr) {
        if (Sr === vZ[0]) return [(0, Rr.Sd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Rr.K.whiteUiText)];
        const Zr = Qr.split("|")[0],
          Wr = rr.isBlock(Zr) ? rr.displayName(Zr) : void 0,
          ar = "string" === typeof Wr ? Wr : Wr && "translationKey" in Wr ? `$t(${Wr.translationKey})` : Zr;
        return [(0, Rr.Sd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: ar
          }
        }, Rr.K.whiteUiText), (0, Rr.Sd)({
          translationKey: `item:${(0,Rr.ne)(Sr)}`
        }, Rr.K.yellowUiText)]
      }(uh, rr, Sr)
    }
    const Qz = "buildAFactory2Game:";
    const Zz = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Wz(rr) {
      return rr.endsWith(" Ore")
    }
    const az = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      jz = [],
      Iz = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: az,
        plan: null,
        atomic: jz
      },
      fz = "buildAFactory2Game:",
      Ez = new Set(["Splitter", "Sorting Gate"]),
      pz = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class xz {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = rr, this.planAt = Sr, this.tierOf = Qr, this.aI = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.wI = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Iz, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(rr, Sr, Qr) {
        var Zr, Wr, ar;
        let jr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ir = null !== (Zr = null === (Wr = rr.XQr(Sr)) || void 0 === Wr ? void 0 : Wr.name) && void 0 !== Zr ? Zr : null,
          fr = rr.isPlayerCrouching(Sr),
          Er = 0 === Qr ? null : this.resolve(rr, Qr),
          pr = null !== Er && null !== jr && Ez.has(Er.rootName) && function(rr, Sr) {
            return pz.some((Qr => {
              let [Zr, Wr] = Qr;
              const ar = rr.getBlockId(Sr[0] + Zr, Sr[1], Sr[2] + Wr);
              return 0 !== ar && "Express Belt" === rr.getMetaInfo(ar).rootName
            }))
          }(rr, jr),
          xr = this.updatePlan(0 === Qr ? null : jr),
          mr = this.tierOf(),
          Nr = null === jr ? null : (0, sh.f)(Qr),
          Ur = null !== Nr && null !== jr && (0, sh.h)(function(rr) {
            return (Sr, Qr, Zr) => rr.getBlockId(Sr, Qr, Zr)
          }(rr), jr[0], jr[1], jr[2], Nr),
          tr = this.readAfloat(rr, Qr, jr);
        if (Qr === this.aI && Ur === this.missesMaker && tr === this.afloat && Ir === this.wI && fr === this.crouching && pr === this.express && mr === this.tier && !xr && (!this.targetsLive || !this.liveMoved(jr))) return;
        this.aI = Qr, this.missesMaker = Ur, this.afloat = tr, this.wI = Ir, this.crouching = fr, this.express = pr;
        const hr = pr && Er ? function(rr) {
          if (null === rr.info) return null;
          return rr.express ??= {
            ...rr.info,
            detail: `${fz}lookKeepsUpExpress`,
            detailItem: null
          }, rr.express
        }(Er) : null !== Er && Ur && null !== Nr ? this.besideMaker(Er, Qr, Nr) : null !== Er && tr ? this.hanging(Er) : null !== (ar = null === Er || void 0 === Er ? void 0 : Er.info) && void 0 !== ar ? ar : null;
        this.tier = mr;
        const zr = Er && hr ? function(rr, Sr) {
          var Qr, Zr;
          const Wr = Pr.j[rr];
          if (!rr.endsWith(" Ore") || "rock" !== (null === Wr || void 0 === Wr ? void 0 : Wr.harvestType) || 0 === Wr.harvestLevel) return null;
          const ar = null !== (Qr = Wr.harvestLevel) && void 0 !== Qr ? Qr : 0,
            jr = Sr ? cj.n[Sr] : void 0;
          if ("rock" === (null === jr || void 0 === jr ? void 0 : jr.harvests) && (null !== (Zr = jr.level) && void 0 !== Zr ? Zr : 0) >= ar) return null;
          const Ir = (fr = ar, OZ(uh, fr));
          var fr;
          if (null === Ir) return null;
          const Er = (0, sW.d)(Ir),
            pr = /^[AEIOU]/.test(Ir) ? "An" : "";
          if ("rock" === (null === jr || void 0 === jr ? void 0 : jr.harvests) && Sr) return {
            key: `${fz}lookToolTooWeak${pr}`,
            wI: (0, sW.d)(Sr),
            needed: Er
          };
          return {
            key: Ir === vZ[0] ? `${fz}lookNeedAnyPickaxe` : `${fz}lookNeedPickaxe${pr}`,
            wI: null,
            needed: Er
          }
        }(Er.rootName, Ir) : null;
        this.targetsLive = !0 === (null === Er || void 0 === Er ? void 0 : Er.live) && null !== jr;
        let Yr = null;
        this.targetsLive && Er && jr && this.live && (this.livePos[0] = jr[0], this.livePos[1] = jr[1], this.livePos[2] = jr[2], this.liveVersion = this.live.version(), Yr = this.live.line(Er.rootName, jr));
        const nr = null === hr ? az : function(rr, Sr, Qr) {
            const Zr = function(rr, Sr, Qr) {
              const Zr = qQ(rr);
              if (null === Zr) return null;
              const Wr = `${Qz}lookPortMode_${Zr}`,
                ar = kZ(Sr);
              if (ar && Qr) return {
                mode: null,
                detail: Wr,
                next: `${Qz}lookWrenchPickUp`,
                nextState: null
              };
              const jr = RQ(rr),
                Ir = null === jr ? null : qQ(jr);
              return null === Ir ? {
                mode: null,
                detail: Wr,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Wr,
                next: ar ? `${Qz}lookWrenchNext` : `${Qz}lookPortWrench`,
                nextState: `${Qz}lookPortState_${Ir}`
              }
            }(rr, Sr, Qr);
            if (null !== Zr) return Zr;
            const Wr = rW(rr, Sr, Qr);
            return null === Wr.mode && null === Wr.next ? az : Wr
          }(rr.blockIdToBlockName(Qr), Ir, fr),
          er = this.plan,
          Kr = Er && hr ? this.rowsOf(Er.rootName, mr) : jz,
          yr = this.snapshot;
        if (!(null === hr ? !yr.visible : yr.visible && hr === yr.info && (Br = zr, Tr = yr.tool, Br === Tr || null !== Br && null !== Tr && Br.key === Tr.key && Br.wI === Tr.wI && Br.needed === Tr.needed) && function(rr, Sr) {
            return rr === Sr || null !== rr && null !== Sr && rr.key === Sr.key && JSON.stringify([rr.params, rr.keys]) === JSON.stringify([Sr.params, Sr.keys])
          }(Yr, yr.live) && function(rr, Sr) {
            return rr.mode === Sr.mode && rr.detail === Sr.detail && rr.next === Sr.next && rr.nextState === Sr.nextState
          }(nr, yr.wrench) && VU(er, yr.plan) && Kr === yr.atomic)) {
          var Br, Tr;
          this.snapshot = null === hr ? {
            ...yr,
            visible: !1
          } : {
            info: hr,
            visible: !0,
            tool: zr,
            live: Yr,
            wrench: nr,
            plan: er,
            atomic: Kr
          };
          for (const rr of this.listeners) rr()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Iz, this.aI = 0, this.wI = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(rr, Sr, Qr) {
        if (null === Qr || 0 === Sr || !Ir() || !Wz(this.resolve(rr, Sr).rootName)) return !1;
        const Zr = `${Qr[0]},${Qr[1]},${Qr[2]},${Sr}`,
          Wr = performance.now();
        return Zr === this.afloatKey && Wr - this.afloatAt < mz ? this.afloat : (this.afloatKey = Zr, this.afloatAt = Wr, function(rr, Sr) {
          for (const [Qr, Zr, Wr] of Zz) {
            const ar = Sr(rr[0] + Qr, rr[1] + Zr, rr[2] + Wr);
            if (void 0 === ar || null !== ar && !Wz(ar)) return !1
          }
          return !0
        }(Qr, ((Sr, Qr, Zr) => function(rr, Sr, Qr, Zr) {
          if (!rr.isBlockInLoadedChunk(Sr, Qr, Zr)) return;
          const Wr = rr.getBlockId(Sr, Qr, Zr);
          return 0 === Wr ? null : rr.getMetaInfo(Wr).rootName
        }(rr, Sr, Qr, Zr))))
      }
      liveMoved(rr) {
        var Sr;
        const {
          livePos: Qr
        } = this;
        return null === rr || rr[0] !== Qr[0] || rr[1] !== Qr[1] || rr[2] !== Qr[2] || (null === (Sr = this.live) || void 0 === Sr ? void 0 : Sr.version()) !== this.liveVersion
      }
      updatePlan(rr) {
        const Sr = null === rr ? "" : rr.join(","),
          Qr = performance.now();
        if (Sr === this.planPos && Qr - this.planMs < 250) return !1;
        this.planPos = Sr, this.planMs = Qr;
        const Zr = null === rr ? null : this.planAt([rr[0], rr[1], rr[2]]),
          Wr = !VU(Zr, this.plan);
        return this.plan = Zr, Wr
      }
      besideMaker(rr, Sr, Qr) {
        let {
          info: Zr
        } = rr;
        if (null === Zr) return null;
        let Wr = this.besideMakerById.get(Sr);
        if (void 0 === Wr) {
          const rr = "cryo" === Qr ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Wr = {
            ...Zr,
            detail: `${fz}${rr}`,
            detailItem: null
          }, this.besideMakerById.set(Sr, Wr)
        }
        return Wr
      }
      hanging(rr) {
        let {
          info: Sr,
          rootName: Qr
        } = rr;
        if (null === Sr) return null;
        let Zr = this.afloatByRoot.get(Qr);
        return void 0 === Zr && (Zr = {
          ...Sr,
          detail: `${fz}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(Qr, Zr)), Zr
      }
      rowsOf(rr, Sr) {
        if (null === Sr) return jz;
        const Qr = `${rr}|${Sr}`;
        let Zr = this.rowsByKey.get(Qr);
        if (void 0 === Zr) {
          const Wr = function(rr, Sr) {
            var Qr;
            if (!(rr in RS)) return [];
            const Zr = null !== (Qr = gS[rr]) && void 0 !== Qr ? Qr : [],
              Wr = new Map;
            for (const jr of Ra(rr, Sr))
              if ((Zr.includes(jr) || qa(jr.output) && Pa(jr.output) > Dr(rr)) && Pa(jr.output) <= Sr) {
                var ar;
                const rr = null !== (ar = Wr.get(jr.output)) && void 0 !== ar ? ar : [];
                rr.push(jr.input), Wr.set(jr.output, rr)
              } return Ca([...Wr], (rr => {
              let [Sr] = rr;
              return -Pa(Sr)
            })).map((rr => {
              let [Sr, Qr] = rr;
              return {
                output: Sr,
                inputs: Qr
              }
            }))
          }(rr, Sr);
          Zr = Wr.length > 0 ? Wr : jz, this.rowsByKey.set(Qr, Zr)
        }
        return Zr
      }
      resolve(rr, Sr) {
        const {
          rootId: Qr,
          rootName: Zr
        } = rr.getMetaInfo(Sr), Wr = (0, UQ.k)(Zr) ? Sr : Qr;
        let ar = this.byRootId.get(Wr);
        const jr = Ir();
        if (void 0 === ar || ar.nuclear !== jr) {
          var fr;
          const Qr = function(rr) {
            return RZ(uh, rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr)
          }(Zr, rr.blockIdToBlockName(Sr));
          ar = {
            info: Qr,
            rootName: Zr,
            live: null !== Qr && !0 === (null === (fr = this.live) || void 0 === fr ? void 0 : fr.handles(Zr)),
            nuclear: jr
          }, this.byRootId.set(Wr, ar)
        }
        return ar
      }
    }
    const mz = 500;
    const Nz = (0, Zr.memo)((function(rr) {
      var Sr, Qr;
      let {
        store: Wr
      } = rr;
      const {
        t: ar
      } = (0, TW.E)(), [jr, Ir] = (0, Zr.useState)((() => Wr.get()));
      (0, Zr.useEffect)((() => (Ir(Wr.get()), Wr.subscribe((() => {
        Ir(Wr.get())
      })))), [Wr]);
      const {
        openInGameMenuName: fr,
        openEverythingMenuName: Er,
        isTouchScreen: pr
      } = (0, zW.n)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: xr,
        tool: mr,
        live: Nr,
        wrench: Ur,
        atomic: tr
      } = jr, hr = jr.visible && null === fr && null === Er;
      if (null === xr) return null;
      const zr = null !== Ur.detail ? ar(Ur.detail) : null !== (Sr = jr.plan) && void 0 !== Sr && Sr.ctrl ? ar("buildAFactory2Game:lookPlanCtrl") : null !== xr.detail ? ar(xr.detail, null === xr.detailItem ? void 0 : {
        item: ar(xr.detailItem)
      }) : null;
      return (0, za.jsxs)("div", {
        className: eW()("Baf2LookTarget", {
          Visible: hr
        }),
        "aria-hidden": !hr,
        children: [(0, za.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: ar(xr.name)
        }), null !== jr.plan && (0, za.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ar(jr.plan.key, {
            kind: ar(jr.plan.kindKey),
            w: String(jr.plan.w),
            h: String(jr.plan.h),
            d: String(jr.plan.d),
            count: String(jr.plan.count)
          })
        }), void 0 !== (null === (Qr = jr.plan) || void 0 === Qr ? void 0 : Qr.why) && (0, za.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: ar(jr.plan.why)
        }), null !== Ur.mode && (0, za.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ar(Ur.mode)
        }), null !== mr ? (0, za.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: ar(mr.key, {
            item: ar(mr.needed),
            wI: null === mr.wI ? "" : ar(mr.wI)
          })
        }) : null !== Nr ? (0, za.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ar(Nr.key, df(ar, Nr))
        }) : null !== zr && (0, za.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: zr
        }), tr.length > 0 && (0, za.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ar("buildAFactory2Game:lookAtomicRecipes", {
            list: tr.map((rr => {
              let {
                output: Sr,
                inputs: Qr
              } = rr;
              const Zr = Qr.length > 1 ? ` ${ar("buildAFactory2Game:recipeMore",{count:String(Qr.length-1)})}` : "";
              return `${ar((0,sW.d)(Qr[0]))}${Zr} \u2192 ${ar((0,sW.d)(Sr))}`
            })).join(", ")
          })
        }), null !== Ur.next && (0, za.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: ar(Ur.next, {
            state: null === Ur.nextState ? "" : ar(Ur.nextState),
            use: ar(pr ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Uz = Qr(40035);
    const tz = [],
      hz = [
        [0, -1, 0]
      ];

    function zz(rr) {
      const Sr = [rr];
      for (let Qr = 1; Qr <= 4; Qr++) Qr > 1 && Sr.push(`${rr}|meta|rot${Qr}`), Sr.push(`${rr}|meta|rot${Qr}|Running`);
      return Sr
    }

    function Yz(rr, Sr) {
      return [Math.floor(rr[0] / Sr), Math.floor(rr[1] / Sr), Math.floor(rr[2] / Sr)]
    }

    function nz(rr, Sr, Qr) {
      return `${rr},${Sr},${Qr}`
    }

    function ez(rr) {
      const Sr = rr.split("|")[0];
      if (!EQ(Sr)) return tz;
      const Qr = RS[Sr];
      if (SQ(Qr)) return hz;
      const Zr = Yh(rr);
      return QQ(Qr) ? [
        [-Zr[0], -Zr[1], -Zr[2]]
      ] : KW(Qr) ? function(rr, Sr) {
        const Qr = rr[0] - 2 * Sr[0],
          Zr = rr[2] - 2 * Sr[2],
          Wr = [];
        for (let ar = -1; ar <= 1; ar++)
          for (let Sr = -1; Sr <= 1; Sr++) Wr.push([Qr + ar, rr[1], Zr + Sr]);
        return Wr
      }([0, 0, 0], Zr) : tz
    }
    const Kz = [.5, .5, .5],
      yz = [.2, .8, .3],
      Bz = [.45, 1, .5];
    class Tz {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(rr) {
        this.indexed = !0;
        for (const Sr of LS)
          for (const Qr of zz(Sr)) {
            const Sr = rr.blockNameToBlockId(Qr, !0),
              Zr = ez(Qr);
            null !== Sr && Zr.length > 0 && (this.offsetsList.push(Zr), this.offsetsIndexById[Sr] = this.offsetsList.length)
          }
      }
      onAfterRender(rr, Sr) {
        this.indexed || this.index(rr);
        const Qr = performance.now();
        if (Qr - this.lastCheckMs < 100) return;
        this.lastCheckMs = Qr, this.checks++;
        const Zr = EU.i.hx,
          [Wr, ar, jr] = Yz(Sr, Zr);
        let Ir = !1;
        const fr = [];
        let Er = 0;
        for (let pr = Wr - 2; pr <= Wr + 2; pr++)
          for (let Sr = ar - 1; Sr <= ar + 1; Sr++)
            for (let Wr = jr - 2; Wr <= jr + 2; Wr++) {
              const ar = Er++,
                jr = nz(pr, Sr, Wr),
                xr = rr.getChunkVersion(pr, Sr, Wr);
              let mr = this.chunks.get(jr);
              null !== xr ? (mr || (mr = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(jr, mr)), mr.seenAt = this.checks, mr.checkedVersion !== xr && (mr.checkedVersion = xr, Ir = !0), mr.scannedVersion !== xr && Qr - mr.scannedAt >= 500 && fr.push({
                slot: ar,
                entry: mr,
                origin: [pr * Zr, Sr * Zr, Wr * Zr]
              })) : (Ir ||= void 0 !== mr, this.chunks.delete(jr))
            }
        this.scanDue(rr, fr) && (Ir = !0);
        for (const [pr, xr] of this.chunks) xr.seenAt !== this.checks && (Ir ||= xr.machines.length > 0, this.chunks.delete(pr));
        for (const pr of this.chunks.values())
          for (const [Sr, Qr, Zr] of pr.cellChunks)(Math.abs(Sr - Wr) > 2 || Math.abs(Qr - ar) > 1 || Math.abs(Zr - jr) > 2) && this.watchCellChunk(rr, Sr, Qr, Zr) && (Ir = !0);
        for (const [pr, xr] of this.cellChunks) xr.seenAt !== this.checks && this.cellChunks.delete(pr);
        Ir && this.refresh(rr)
      }
      dispose(rr) {
        this.clearMeshes(rr), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(rr, Sr) {
        const Qr = Math.max(Sr.findIndex((rr => {
          let {
            slot: Sr
          } = rr;
          return Sr >= this.scanFrom
        })), 0);
        let Zr = 96;
        for (let Wr = 0; Wr < Sr.length; Wr++) {
          const {
            slot: ar,
            entry: jr,
            origin: Ir
          } = Sr[(Qr + Wr) % Sr.length];
          if (Zr -= this.scan(rr, jr, Ir), Zr <= 0) {
            this.scanFrom = ar + 1;
            break
          }
        }
        return Sr.length > 0
      }
      scan(rr, Sr, Qr) {
        let [Zr, Wr, ar] = Qr;
        const jr = EU.i.hx,
          Ir = this.hits;
        Ir.length = 0;
        const fr = rr.scanBlocks(Zr, Wr, ar, Zr + jr, Wr + jr, ar + jr, this.offsetsIndexById, Ir),
          Er = [];
        for (let pr = 0; pr < Ir.length; pr += 4) Er.push({
          pos: [Ir[pr], Ir[pr + 1], Ir[pr + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[Ir[pr + 3]] - 1]
        });
        return Sr.machines = Er, Sr.cellChunks = function(rr, Sr) {
          const Qr = new Set,
            Zr = [];
          for (const {
              pos: Wr,
              offsets: ar
            }
            of rr)
            for (const [rr, jr, Ir] of ar) {
              const ar = Yz([Wr[0] + rr, Wr[1] + jr, Wr[2] + Ir], Sr),
                fr = nz(...ar);
              Qr.has(fr) || (Qr.add(fr), Zr.push(ar))
            }
          return Zr
        }(Er, jr), Sr.scannedVersion = Sr.checkedVersion, Sr.scannedAt = performance.now(), Math.max(fr, 1)
      }
      watchCellChunk(rr, Sr, Qr, Zr) {
        const Wr = nz(Sr, Qr, Zr),
          ar = rr.getChunkVersion(Sr, Qr, Zr),
          jr = this.cellChunks.get(Wr);
        return null === ar ? this.cellChunks.delete(Wr) : (null === jr || void 0 === jr ? void 0 : jr.version) === ar ? (jr.seenAt = this.checks, !1) : (this.cellChunks.set(Wr, {
          version: ar,
          seenAt: this.checks
        }), !0)
      }
      refresh(rr) {
        const Sr = function(rr, Sr) {
            const Qr = new Set,
              Zr = [];
            for (const {
                pos: Wr,
                offsets: ar
              }
              of rr)
              for (const [rr, jr, Ir] of ar) {
                const ar = Wr[0] + rr,
                  fr = Wr[1] + jr,
                  Er = Wr[2] + Ir,
                  pr = `${ar},${fr},${Er}`;
                Qr.has(pr) || (Qr.add(pr), Sr(ar, fr, Er) && Zr.push([ar, fr, Er]))
              }
            return Zr
          }([...this.chunks.values()].flatMap((rr => rr.machines)), ((Sr, Qr, Zr) => rr.isBlockInLoadedChunk(Sr, Qr, Zr) && 0 === rr.getBlockId(Sr, Qr, Zr))),
          Qr = Sr.join(";");
        Qr !== this.shownKey && (this.shownKey = Qr, this.clearMeshes(rr), Sr.length > 0 && (this.meshes = [this.build(rr, Sr, !1), this.build(rr, Sr, !0)]))
      }
      build(rr, Sr, Qr) {
        const Zr = Sr[0],
          Wr = [],
          ar = [];
        for (const [jr, Ir, fr] of Sr)(0, Uz.c)(Wr, ar, [jr - Zr[0] + .5, Ir - Zr[1] + .5, fr - Zr[2] + .5], Kz, Qr);
        return rr.createGameMesh({
          positions: Wr,
          indices: ar
        }, {
          rgb: Qr ? Bz : yz,
          alpha: .4
        }, Zr)
      }
      clearMeshes(rr) {
        for (const Sr of this.meshes) rr.disposeGameMesh(Sr);
        this.meshes = []
      }
    }
    const vz = 1 / .6,
      Oz = 200,
      Lz = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      lz = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Xz = 2 * Math.PI / 3;
    class Pz {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lz;
        this.style = rr, this.particles = null, this.points = new Float32Array(800), this.budget = Oz, this.lastMs = 0
      }
      static blade() {
        return new Pz(lz)
      }
      rK(rr, Sr) {
        const Qr = Math.min(Sr.arcStruck, Sr.arcPoints.length);
        this.draw(rr, [Sr.arcFrom, ...Sr.arcPoints], Sr.arcPoints.slice(0, Qr))
      }
      onBlade(rr, Sr) {
        const [Qr, Zr, Wr] = Sr.bladeCentre, [ar, jr] = Sr.bladeFacing, Ir = Qr - 1.5 * ar, fr = Wr - 1.5 * jr, Er = Math.atan2(jr, ar), pr = [];
        for (let xr = 0; xr <= 8; xr++) {
          const rr = Er - Xz / 2 + Xz * xr / 8;
          pr.push([Ir + 2.5 * Math.cos(rr), Zr, fr + 2.5 * Math.sin(rr)])
        }
        this.draw(rr, pr, Sr.bladeStruck)
      }
      dispose() {
        var rr;
        null === (rr = this.particles) || void 0 === rr || rr.stop(), this.particles = null
      }
      draw(rr, Sr, Qr) {
        if (!rr.particlesEnabled() || Sr.length < 2) return;
        const Zr = performance.now();
        this.budget = Math.min(Oz, this.budget + (Zr - this.lastMs) / 1e3 * Oz), this.lastMs = Zr;
        const Wr = [];
        let ar = 0,
          jr = Sr[0];
        for (const zr of Sr.slice(1)) {
          const rr = Math.min(48, Math.round(Math.hypot(zr[0] - jr[0], zr[1] - jr[1], zr[2] - jr[2]) * this.style.perBlock));
          Wr.push([jr, zr, rr]), ar += rr, jr = zr
        }
        const Ir = Qr.length;
        ar += 10 * Ir;
        const fr = ar > this.budget ? this.budget / ar : 1;
        if (0 === ar || fr * ar < 1) return;
        const Er = Sr[0],
          [pr, xr, mr] = Er,
          Nr = this.points;
        let Ur = 0;
        const tr = (rr, Sr, Qr, Zr) => {
          const Wr = 4 * Ur;
          Nr[Wr] = rr - pr, Nr[Wr + 1] = Sr - xr, Nr[Wr + 2] = Qr - mr, Nr[Wr + 3] = Zr, Ur++
        };
        Wr.forEach(((rr, Sr) => {
          let [Qr, Zr, Wr] = rr;
          const ar = Math.min(Math.floor(Wr * fr), Oz - Ur),
            jr = Math.hypot(Zr[0] - Qr[0], Zr[1] - Qr[1], Zr[2] - Qr[2]),
            Ir = 0 === Sr && jr > 0 ? Math.min(.5, .1 * jr) / jr : 0;
          for (let fr = 0; fr < ar; fr++) {
            const rr = Ir + (fr + .5) / ar * (1 - Ir);
            tr(Qr[0] + (Zr[0] - Qr[0]) * rr, Qr[1] + (Zr[1] - Qr[1]) * rr, Qr[2] + (Zr[2] - Qr[2]) * rr, .15)
          }
        }));
        const hr = Math.floor(10 * fr);
        for (let zr = 0; zr < Ir; zr++) {
          const [rr, Sr, Zr] = Qr[zr];
          for (let Qr = 0; Qr < hr && Ur < Oz; Qr++) tr(rr, Sr, Zr, 2.5)
        }
        this.budget -= Ur, this.particles ??= rr.createParticles(function(rr) {
          const [Sr, Qr] = rr.colours;
          return {
            texture: "square_particle",
            sx: 400,
            minLifeTime: rr.life[0] / vz,
            maxLifeTime: rr.life[1] / vz,
            minSize: rr.size[0],
            maxSize: rr.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [Sr[0], Sr[1], Sr[2], 1],
              maxColor: [Qr[0], Qr[1], Qr[2], 1]
            }, {
              timeFraction: 1,
              minColor: [Sr[0], Sr[1], Sr[2], 0],
              maxColor: [Qr[0], Qr[1], Qr[2], 0]
            }],
            blendMode: OI.e.Add
          }
        }(this.style), {
          pos: Er
        }), this.particles.emitPoints(Er, Nr, Ur)
      }
    }
    const Hz = new Set(["Sky Spring"]);

    function qz(rr, Sr, Qr) {
      const Zr = rr.split("|")[0];
      return "Air" !== Sr || Qr || ! function(rr) {
        const Sr = rr.split("|")[0];
        return void 0 !== jQ[Sr] || Hz.has(Sr)
      }(Zr) ? null : rr
    }
    class Rz {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(rr) {
        const Sr = rr - this.lastTapAt >= 300;
        return this.lastTapAt = rr, Sr
      }
    }
    class gz {
      constructor() {
        this.presses = new Rz, this.predicted = null
      }
      tap(rr, Sr) {
        const Qr = this.presses.isNewPress(Sr);
        return Qr && (this.predicted = {
          station: rr,
          at: Sr
        }), Qr
      }
      consumeServerOpen(rr, Sr) {
        const Qr = this.predicted;
        return !(null === Qr || Qr.station !== rr || Sr - Qr.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Cz {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(rr, Sr) {
        return rr && (this.thrustAt = Sr), Sr - this.thrustAt < 200
      }
    }
    const Mz = [.1, .05, .1],
      Gz = {
        texture: "effect_5",
        sx: Math.ceil(48),
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
        blendMode: OI.e.OneOne
      };
    class kz {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Cz, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      rK(rr, Sr) {
        for (const [Qr, Zr] of Sr.baf2JetFlames) rr.isLocalPlayer(Qr) || (Zr ? this.lit.add(Qr) : this.lit.delete(Qr))
      }
      onAfterRender(rr, Sr) {
        const Qr = performance.now(),
          Zr = this.hold.lit(this.selfThrusting(rr, Sr), Qr);
        for (const [Wr, ar] of this.flames)(Wr === Sr ? Zr : this.lit.has(Wr)) || this.setEmitting(ar, !1), Wr === Sr || rr.getPositionView(Wr) ? !ar.emitting && Qr - ar.offAt >= 1300 && (ar.particles.stop(), this.flames.delete(Wr)) : (ar.particles.dispose(), this.flames.delete(Wr), this.lit.delete(Wr));
        Zr && this.draw(rr, Sr, Sr);
        for (const Wr of this.lit) this.draw(rr, Sr, Wr)
      }
      dispose() {
        for (const rr of this.flames.values()) rr.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(rr, Sr) {
        var Qr;
        const Zr = rr.getLocalPlayerMovement();
        return !!Zr && (null !== (Wr = {
          option: null !== (Qr = rr.getClientOption(Sr, "jumpHoldThrust")) && void 0 !== Qr ? Qr : null,
          jumping: Zr.jumpHeld,
          onGround: Zr.onGround,
          alive: rr.isAlive(Sr)
        }).option && Wr.option.maxUpSpeed >= 0 && Wr.jumping && !Wr.onGround && Wr.alive);
        var Wr
      }
      draw(rr, Sr, Qr) {
        var Zr, Wr;
        const ar = this.pos;
        if (!rr.readDrawnPosition(Qr, ar)) return;
        const jr = rr.readDrawnPosition(Sr, this.camera) ? this.camera : ar;
        if (!((ar[0] - jr[0]) ** 2 + (ar[1] - jr[1]) ** 2 + (ar[2] - jr[2]) ** 2 < 1600) || !rr.particlesEnabled()) {
          const rr = this.flames.get(Qr);
          return void(rr && this.setEmitting(rr, !1))
        }
        const Ir = null !== (Zr = this.flames.get(Qr)) && void 0 !== Zr ? Zr : this.create(rr, Qr, ar),
          fr = null !== (Wr = rr.getDrawnHeading(Qr)) && void 0 !== Wr ? Wr : 0,
          Er = this.at;
        Er[0] = ar[0] - .35 * Math.sin(fr), Er[1] = ar[1] + 1.05, Er[2] = ar[2] - .35 * Math.cos(fr), Ir.particles.moveTo(Er), this.setEmitting(Ir, !0)
      }
      setEmitting(rr, Sr) {
        rr.emitting !== Sr && (rr.emitting = Sr, Sr || (rr.offAt = performance.now()), rr.particles.setEmitRate(Sr ? 60 : 0))
      }
      create(rr, Sr, Qr) {
        const Zr = {
          particles: rr.createParticles(Gz, {
            pos: Qr,
            half: Mz
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(Sr, Zr), Zr
      }
    }

    function Az(rr) {
      return "Reactor Frame" === ZZ("reactor", rr)
    }

    function Vz(rr) {
      return GQ("reactor", rr) && !Az(rr) && (rr.startsWith("Reactor Glass") || rr.startsWith("Reactor Port"))
    }
    const iz = "baf2Goal";
    class wz {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [PW.i.subscribe("setDirectionArrow", (rr => {
          let {
            id: Sr,
            position: Qr
          } = rr;
          Sr === iz && (this.goal = Qr, this.checkedAt = -1 / 0)
        })), PW.i.subscribe("clearDirectionArrow", (rr => {
          let {
            id: Sr
          } = rr;
          null !== Sr && Sr !== iz || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const rr of this.subs) PW.i.unsubscribe(rr)
      }
      sideOf(rr, Sr, Qr, Zr) {
        const Wr = this.goal;
        if (!Wr) return 0;
        Qr - this.checkedAt > 1e3 && (this.checkedAt = Qr, this.open = function(rr, Sr) {
          const [Qr, Zr, Wr] = rr.map(Math.floor);
          if (!Vz(Sr(Qr, Zr, Wr))) return null;
          for (const [ar, jr] of [
              [1, 0],
              [0, 1]
            ]) {
            const rr = Sr(Qr + ar, Zr, Wr + jr),
              Ir = Sr(Qr - ar, Zr, Wr - jr);
            if (Az(Ir) && Vz(rr)) return [ar, 0, jr];
            if (Az(rr) && Vz(Ir)) return [0 - ar, 0, 0 - jr]
          }
          return null
        }(Wr, ((Sr, Qr, Zr) => rr.blockIdToBlockName(rr.getBlockId(Sr, Qr, Zr)))));
        const ar = this.open;
        if (!ar) return 0;
        const jr = Zr(Wr);
        if (Math.abs(jr.x - Sr.x) > .05 || Math.abs(jr.y - Sr.y) > .05) return 0;
        const Ir = Zr([Wr[0] + ar[0], Wr[1], Wr[2] + ar[2]]).x - jr.x;
        return Math.abs(Ir) < .3 ? 0 : Ir > 0 ? 1 : -1
      }
    }
    class cz {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new wz, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.vU = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.kY = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((rr => {
          for (const Sr of rr) Sr.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(Sr.target, Sr.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.vU || this.clear()
        }, window.addEventListener("resize", this.kY)
      }
      onAfterRender(rr, Sr) {
        var Qr;
        this.api = rr, this.project = null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.projectWorldPosToScreenPos) && void 0 !== Qr ? Qr : null, this.queued || this.vU || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.vU = !0;
        for (const rr of this.moved.keys()) rr.style.transform = "";
        this.moved.clear();
        for (const rr of this.sideLabels.keys()) rr.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.kY)
      }
      clear() {
        for (const ar of this.moved.keys()) ar.isConnected || this.moved.delete(ar);
        for (const ar of this.sideLabels.keys()) ar.isConnected || this.sideLabels.delete(ar);
        if (0 === this.arrows.length) return;
        const rr = performance.now(),
          Sr = rr - this.refreshedAt > 1e3;
        Sr && (this.refreshedAt = rr, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const Qr = this.trackerBox(),
          Zr = this.barsBox(),
          Wr = this.toastBox(Sr);
        (Qr || Zr || Wr) && Sr && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let ar = 0; ar < this.arrows.length; ar++) {
          const Sr = this.arrows[ar];
          this.labelOffsets.set(Sr, this.runLabelAside(Sr, rr));
          const jr = (Qr ? this.shiftLeftOf(Sr, Qr) : 0) || this.shiftOnScreen(Sr),
            Ir = Math.min(Zr ? this.liftAbove(Sr, Zr, jr) : 0, Wr ? this.liftAbove(Sr, Wr, jr) : 0),
            fr = this.moved.get(Sr);
          if (0 !== jr || 0 !== Ir) {
            const rr = 0 === Ir ? `translateX(${jr}px)` : `translate(${jr}px, ${Ir}px)`;
            fr !== rr && (Sr.style.transform = rr, this.moved.set(Sr, rr))
          } else void 0 !== fr && (Sr.style.transform = "", this.moved.delete(Sr))
        }
      }
      trackerBox() {
        var rr, Sr;
        const Qr = null !== (rr = this.tracker) && void 0 !== rr && rr.isConnected ? this.tracker : null !== (Sr = this.trackers[0]) && void 0 !== Sr ? Sr : null;
        if (Qr !== this.tracker && this.watch(Qr), this.boxStale && Qr) {
          var Zr, Wr, ar;
          this.boxStale = !1;
          const rr = Qr.closest(".NoRoom") ? null : Qr.getBoundingClientRect(),
            Sr = rr && rr.width > 0 ? null === (Zr = this.hud) || void 0 === Zr ? void 0 : Zr.getBoundingClientRect() : void 0,
            jr = rr && Sr ? Math.max(rr.top, Sr.top) : null !== (Wr = null === rr || void 0 === rr ? void 0 : rr.top) && void 0 !== Wr ? Wr : 0,
            Ir = rr && Sr ? Math.min(rr.bottom, Sr.bottom) : null !== (ar = null === rr || void 0 === rr ? void 0 : rr.bottom) && void 0 !== ar ? ar : 0;
          this.box = rr && rr.width > 0 && Ir > jr ? {
            left: rr.left,
            top: jr,
            right: rr.right,
            bottom: Ir
          } : null
        }
        return Qr ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var rr;
          this.barsStale = !1;
          const Sr = null === (rr = this.statBars[0]) || void 0 === rr ? void 0 : rr.getBoundingClientRect();
          this.bars = Sr && Sr.width > 0 && Sr.height > 0 ? {
            left: Sr.left,
            top: Sr.top,
            right: Sr.right,
            bottom: Sr.bottom
          } : null
        }
        return this.bars
      }
      toastBox(rr) {
        var Sr;
        const Qr = null !== (Sr = this.toasts[0]) && void 0 !== Sr ? Sr : null;
        if (Qr !== this.toastEl || rr && Qr) {
          this.toastEl = Qr;
          const rr = null === Qr || void 0 === Qr ? void 0 : Qr.getBoundingClientRect();
          this.toast = rr && rr.width > 0 && rr.height > 0 ? {
            left: rr.left,
            top: rr.top,
            right: rr.right,
            bottom: rr.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(rr, Sr, Qr) {
        var Zr;
        const Wr = this.anchorOf(rr);
        if (!Wr) return 0;
        const ar = Wr.x + Qr + (null !== (Zr = this.labelOffsets.get(rr)) && void 0 !== Zr ? Zr : 0),
          {
            halfWidth: jr,
            labelled: Ir
          } = this.extentOf(rr),
          fr = Wr.y + this.em * (Ir ? 6.2 : 3);
        return fr < Sr.top - 6 || ar + jr < Sr.left - 6 || ar - jr > Sr.right + 6 ? 0 : Sr.top - 6 - fr
      }
      watch(rr) {
        var Sr, Qr;
        this.tracker && this.sizes.unobserve(this.tracker), null === (Sr = this.hud) || void 0 === Sr || Sr.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = rr, this.hud = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.closest(".Baf2QuestHud")) && void 0 !== Qr ? Qr : null, this.box = null, this.boxStale = !0, rr && this.sizes.observe(rr), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(rr, Sr) {
        var Qr;
        const Zr = this.anchorOf(rr);
        if (!Zr) return 0;
        const {
          y: Wr
        } = Zr, ar = Zr.x + (null !== (Qr = this.labelOffsets.get(rr)) && void 0 !== Qr ? Qr : 0), jr = this.em, {
          halfWidth: Ir,
          labelled: fr
        } = this.extentOf(rr), Er = Wr - jr, pr = ar + Ir;
        return Wr + jr * (fr ? 6.2 : 3) < Sr.top || Er > Sr.bottom || pr < Sr.left - 6 || ar - Ir > Sr.right ? 0 : Math.max(Sr.left - 6 - pr, 6 - (ar - Ir))
      }
      shiftOnScreen(rr) {
        var Sr;
        const Qr = this.anchorOf(rr);
        if (!Qr) return 0;
        const {
          halfWidth: Zr
        } = this.extentOf(rr), Wr = Qr.x + (null !== (Sr = this.labelOffsets.get(rr)) && void 0 !== Sr ? Sr : 0), ar = Wr + Zr - (this.innerWidth - 6);
        return ar > 0 ? -ar : Math.max(0, 6 - (Wr - Zr))
      }
      runLabelAside(rr, Sr) {
        var Qr;
        let Zr = null;
        for (let jr = 0; jr < rr.children.length; jr++) rr.children[jr].classList.contains("DirectionArrowLabel") && (Zr = rr.children[jr]);
        if (!Zr) return 0;
        const Wr = rr.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(rr) : null,
          ar = (Wr && this.api ? this.side.sideOf(this.api, {
            x: Wr.x / this.innerWidth * 100,
            y: Wr.y / this.innerHeight * 100
          }, Sr, this.project) : 0) * this.halfWidthOf(Zr);
        return ar !== (null !== (Qr = this.sideLabels.get(Zr)) && void 0 !== Qr ? Qr : 0) && (Zr.style.transform = 0 === ar ? "" : `translateX(-50%) translateX(${ar}px)`, 0 === ar ? this.sideLabels.delete(Zr) : this.sideLabels.set(Zr, ar)), ar
      }
      extentOf(rr) {
        let Sr = this.em,
          Qr = !1;
        for (let Zr = 0; Zr < rr.children.length; Zr++) {
          const Wr = rr.children[Zr],
            ar = Wr.classList.contains("DirectionArrowLabel");
          Qr ||= ar, (ar || Wr.classList.contains("DirectionArrowDistance")) && (Sr = Math.max(Sr, this.halfWidthOf(Wr)))
        }
        return {
          halfWidth: Sr,
          labelled: Qr
        }
      }
      halfWidthOf(rr) {
        let Sr = this.halfWidths.get(rr);
        return void 0 === Sr && (Sr = rr.offsetWidth / 2, this.halfWidths.set(rr, Sr), this.sizes.observe(rr), this.labels.add(rr)), Sr
      }
      forgetGoneLabels() {
        for (const rr of this.labels) rr.isConnected || (this.sizes.unobserve(rr), this.halfWidths.delete(rr), this.labels.delete(rr))
      }
      anchorOf(rr) {
        const Sr = rr.style.translate,
          Qr = this.anchors.get(rr);
        if (Qr && Qr.translate === Sr && Qr.innerWidth === this.innerWidth && Qr.innerHeight === this.innerHeight) return Qr;
        const Zr = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(Sr);
        if (!Zr) return null;
        const Wr = {
          translate: Sr,
          x: parseFloat(Zr[1]) / 100 * this.innerWidth,
          y: parseFloat(Zr[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(rr, Wr), Wr
      }
    }
    const Fz = "Baf2ArrowText";

    function oz(rr, Sr) {
      const Qr = rr.rows.find((rr => rr.current));
      return qr(rr.tutorial) && null !== Qr && void 0 !== Qr && Qr.item && VW(Qr) && lr(Qr.item).includes(Sr) ? Qr.item : null
    }
    const bz = new class {
      constructor(rr) {
        this.select = rr, this.picks = new Map
      }
      open(rr, Sr, Qr) {
        const Zr = oz(Sr, rr);
        null !== Zr && this.eN(rr, Zr, Qr)
      }
      follow(rr, Sr) {
        if (Ir())
          for (const [Qr, {
              item: Zr,
              had: Wr
            }] of this.picks) {
            const ar = oz(rr, Qr);
            ar !== Zr && (null !== ar && Sr(Zr) > Wr ? this.eN(Qr, ar, Sr) : this.picks.delete(Qr))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      eN(rr, Sr, Qr) {
        this.picks.set(rr, {
          item: Sr,
          had: Qr(Sr)
        }), this.select(rr, Sr)
      }
    }(HW.r);

    function Jz(rr) {
      return Sr => {
        let Qr = 0;
        for (const Zr of rr.getInventoryItems())(null === Zr || void 0 === Zr ? void 0 : Zr.name) === Sr && (Qr += null === Zr.amount ? 1 : Math.max(Zr.amount, 0));
        return Qr
      }
    }

    function Dz(rr, Sr, Qr, Zr) {
      rr.getClientOption(Sr, "canCraft") && "inventory" !== zW.c.get("openInGameMenuName") && (bz.open(Qr, Zr.get(), Jz(rr)), PW.i.Jp("toggleMenu", `inventory|${Qr}`))
    }
    let dz = null,
      sz = !1;

    function uz(rr) {
      const Sr = (0, ha.e)();
      rr === dz && Sr === sz || (dz = rr, sz = Sr, (0, HW.u)(function(rr, Sr) {
        const Qr = new Map;
        for (let Zr = rr + 1; Zr <= Wr.length; Zr++) {
          const Wr = Ma(Zr, rr, Sr);
          if (Wr)
            for (const Sr of zr(Zr).unlocks) Qr.set(Sr, {
              ...Wr,
              stepsAway: Zr - rr
            })
        }
        return Qr
      }(rr, Sr)))
    }

    function rY() {
      return (0, HW.A)(Ca(Object.keys(Lr), Pa)), () => {
        (0, HW.A)([])
      }
    }

    function SY(rr, Sr, Qr) {
      var Zr, Wr;
      const ar = rr.getTargetedBlock();
      if (!ar || ! function(rr, Sr, Qr) {
          if ("Chest" !== Sr) return !1;
          const Zr = rr.split("|")[0];
          if (!EQ(Zr) || 0 === RS[Zr].outputSlots.length) return !1;
          const Wr = Yh(rr);
          return Qr[0] === Wr[0] && Qr[1] === Wr[1] && Qr[2] === Wr[2]
        }(Qr, null === (Zr = rr.XQr(Sr)) || void 0 === Zr ? void 0 : Zr.name, ar.normal)) return !1;
      const [jr, Ir, fr] = ar.Kh, Er = rr.getBlockId(jr, Ir, fr);
      return 0 === Er || !0 === (null === (Wr = Pr.j[Er]) || void 0 === Wr ? void 0 : Wr.canBePlacedOver)
    }
    var QY = Qr(37851);
    const ZY = new Set(tQ.b);
    class WY {
      constructor(rr) {
        this.toasts = rr, this.lastAt = -1 / 0
      }
      onAltAction(rr, Sr, Qr) {
        const Zr = rr.getTargetedBlock();
        if (!Zr || function(rr) {
            const Sr = rr.split("|")[0];
            return EQ(Sr) || null !== BZ(Sr) || vr(Sr) || tQ.b.includes(Sr)
          }(Qr) && !ZY.has(Qr.split("|")[0])) return;
        const Wr = rr.XQr(Sr);
        if (!Wr || !ZY.has(Wr.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const ar = Wr.typeObj.id,
          [jr, Ir, fr] = Zr.Kh,
          Er = rr.getBlockId(jr, Ir, fr),
          pr = Pr.j[Er];
        (0 === Er || null !== pr && void 0 !== pr && pr.HN || null !== pr && void 0 !== pr && pr.canBePlacedOver) && rr.isSolidToPlayerBlockId(ar) && rr.canModifyBlockAt(jr, Ir, fr) && rr.dSr(jr, Ir, fr, ar) && !rr.dSr(jr, Ir, fr, ar, Sr) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Rr.Sd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Rr.K.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class aY {
      constructor(rr) {
        this.show = rr, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(rr, Sr, Qr) {
        var Zr;
        if (!Sr) return this.started = null, void this.gatedThisHold.clear();
        if (!rr) return void(this.started = null);
        const Wr = `${rr.x},${rr.y},${rr.z},${rr.wI}`;
        if (Wr === this.started) return;
        this.started = Wr;
        const ar = gZ(rr.y) ? rz(rr.block, rr.wI, rr.level) : null;
        if (null === ar || this.gatedThisHold.has(Wr)) return;
        this.gatedThisHold.add(Wr);
        const jr = rr.block.split("|")[0];
        Qr - (null !== (Zr = this.hintedAt.get(jr)) && void 0 !== Zr ? Zr : -1 / 0) < 5e3 || (this.hintedAt.set(jr, Qr), this.show({
          baf2ToastText: Sz(ar, rr.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var jY = Qr(43);

    function IY(rr, Sr) {
      const Qr = [...rr.baf2CoreBankPaused];
      for (const [Wr] of rr.baf2CoreBanked) Qr.push(Wr);
      for (const jr of Wr) {
        for (const {
            item: rr
          }
          of jr.cost) Qr.push(rr);
        for (const rr of jr.newDeposits) Qr.push(rr.block);
        for (const rr of jr.unlocks) Qr.push(rr, Xr(rr));
        jr.reward && Qr.push(jr.reward);
        for (const {
            item: rr
          }
          of null !== (Zr = null === (ar = jr.charge) || void 0 === ar ? void 0 : ar.items) && void 0 !== Zr ? Zr : []) {
          var Zr, ar;
          Qr.push(rr)
        }
      }
      return {
        message: rr,
        itemNames: Sr([...new Set(Qr)])
      }
    }
    const fY = "baf2MultiblockGuide";
    const EY = new Map;
    const pY = function(rr, Sr, Qr, Wr) {
      let {
        localPlayerId: ar
      } = Wr;
      const jr = new fI,
        Ir = new rN,
        Er = new IN,
        pr = new aN(Er),
        xr = (rr, Sr) => {
          Sr ? pr.observe(rr) : pr.unobserve(rr)
        },
        mr = new WN,
        Nr = new EN(xr),
        Ur = rr => Nr.covers(rr),
        tr = new lN;
      let hr;
      const zr = new Pj((rr => {
          hr.sendCommand(rr)
        })),
        Yr = () => {
          zr.send("baf2questbook")
        },
        nr = rr => function(rr, Sr, Qr) {
          const Zr = {};
          for (const Wr of Qr) {
            let Qr = EY.get(Wr);
            void 0 === Qr && (Qr = rr.getItemStat(Sr, Wr, "displayName"), EY.set(Wr, Qr)), Zr[Wr] = Qr
          }
          return Zr
        }(hr, ar, rr),
        er = new CW(Yr),
        Kr = new AN((() => zW.c.get("loadingOverlayVisible"))),
        yr = new np(zr, er, Kr),
        Br = new FN,
        Tr = new WY(Kr),
        Or = new aY((rr => {
          Kr.show(rr, rr.baf2ToastMs)
        })),
        Lr = new SU(xr),
        lr = new Lh(Lr),
        Xr = new hj,
        Hr = new dh,
        qr = new bj,
        Cr = new fU({
          read: () => !1 !== jY.j.getItem(fY),
          write: rr => {
            jY.j.setItem(fY, rr)
          }
        }),
        Mr = new gU(Cr),
        Gr = new GU(Cr),
        kr = new It(Cr, (rr => function(rr, Sr) {
          const Qr = cI(Sr.w, Sr.h, Sr.d),
            Zr = new Uint8Array(Qr);
          for (let Wr = 0; Wr < Qr; Wr++) {
            const Qr = XU(rr, sQ(Sr, QZ(Sr, Wr)));
            Zr[Wr] = null === Qr ? 0 : AI(Qr)
          }
          return Zr
        }(hr, rr)), dU(zr)),
        Ar = new ft(Cr, dU(zr)),
        Vr = new Wt,
        cr = (rr, Sr) => {
          let [Qr, Zr, Wr] = rr;
          Vr.answered(Sr) || Kr.show({
            baf2ToastText: [(0, Rr.Sd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: Qr,
                h: Zr,
                d: Wr
              }
            }, Rr.K.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      kr.onSizeNotTaken(cr), Ar.onSizeNotTaken(cr);
      const Fr = new mt,
        or = new Ft(Cr),
        Jr = new bt,
        Dr = new ah(Jr),
        dr = new hh,
        ur = new lh,
        rS = new kh(ur),
        SS = new Dh(ur),
        QS = ur.lookSource(),
        ZS = new xz({
          handles: rr => QS.handles(rr) || rr === gr,
          line: (rr, Sr) => rr === gr ? function(rr, Sr, Qr) {
            var Zr;
            const Wr = wr(null === (Zr = Sr.at(Qr)) || void 0 === Zr ? void 0 : Zr.item);
            return null === Wr ? {
              key: `${fz}lookFarmEmpty`
            } : {
              key: rr.blockIdToBlockName(rr.getBlockId(Qr[0], Qr[1], Qr[2])).endsWith("|Running") ? `${fz}lookFarmRunning` : `${fz}lookFarmWaiting`,
              keys: {
                mob: ir(Wr)
              }
            }
          }(hr, Lr, Sr) : QS.line(rr, Sr),
          version: () => QS.version() + Lr.version()
        }, (rr => AU(Cr.all(), rr, (rr => XU(hr, rr)))), (() => er.get().tier)),
        WS = new Xt,
        aS = new Tz,
        jS = new Pz,
        IS = Pz.blade(),
        fS = new kz,
        ES = new JN,
        pS = new cz,
        mS = new gz,
        NS = new Rz;
      let US = -1 / 0,
        tS = 0,
        hS = -1 / 0,
        zS = -1 / 0;
      const YS = () => {
          zr.send("baf2islandsclose"), zS = Date.now()
        },
        nS = [];

      function eS(rr) {
        var Sr, Qr, Zr, Wr, ar, jr, fr;
        "core" === (null === (Sr = Ir.get()) || void 0 === Sr ? void 0 : Sr.kind) && "core" !== (null === rr || void 0 === rr ? void 0 : rr.kind) && zr.send("baf2coreclose"), "power" === (null === (Qr = Ir.get()) || void 0 === Qr ? void 0 : Qr.kind) && "power" !== (null === rr || void 0 === rr ? void 0 : rr.kind) && zr.send("baf2powerclose"), "water" === (null === (Zr = Ir.get()) || void 0 === Zr ? void 0 : Zr.kind) && "water" !== (null === rr || void 0 === rr ? void 0 : rr.kind) && zr.send(sr.w), "terminal" === (null === (Wr = Ir.get()) || void 0 === Wr ? void 0 : Wr.kind) && "terminal" !== (null === rr || void 0 === rr ? void 0 : rr.kind) && zr.send("baf2terminalclose"), "islands" === (null === (ar = Ir.get()) || void 0 === ar ? void 0 : ar.kind) && "islands" !== (null === rr || void 0 === rr ? void 0 : rr.kind) && YS();
        const Er = ur.getStatus();
        "collider" === (null === (jr = Ir.get()) || void 0 === jr ? void 0 : jr.kind) && "collider" !== (null === rr || void 0 === rr ? void 0 : rr.kind) && Er && zr.send(Lf(Er, "close"));
        const pr = rr => "reactor" === rr || "battery" === rr;
        if (pr(null === (fr = Ir.get()) || void 0 === fr ? void 0 : fr.kind) && !pr(null === rr || void 0 === rr ? void 0 : rr.kind)) {
          var xr, mr, Nr;
          const rr = "reactor" === (null === (xr = Ir.get()) || void 0 === xr ? void 0 : xr.kind) ? null === (mr = kr.get()) || void 0 === mr ? void 0 : mr.status.baf2RxAt : null === (Nr = Ar.get()) || void 0 === Nr ? void 0 : Nr.status.baf2BatAt;
          rr && zr.send(xS(rr, "close"))
        }
        "quests" === (null === rr || void 0 === rr ? void 0 : rr.kind) && Yr(), Ir.set(rr), null === rr && Br.release()
      }

      function KS() {
        (0, hW.j)(), eS(null)
      }
      let yS = new Set,
        BS = !1;
      const TS = {
        onCreate: rr => {
          hr = rr, hr.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const Sr of LS) {
            const rr = RS[Sr].inputSlots ? BI(jr) : eI(Sr, jr, Xr, zr);
            nS.push((0, UW.f)(Sr, rr))
          }
          nS.push((0, hW.H)((0, Zr.createElement)(Zr.Fragment, null, (0, Zr.createElement)(mN, {
            controller: Nr
          }), (0, Zr.createElement)(WU, {
            store: Lr
          }), (0, Zr.createElement)(Nz, {
            store: ZS
          }), (0, Zr.createElement)(GN, {
            store: er
          }), (0, Zr.createElement)(wN, {
            store: Kr
          }), (0, Zr.createElement)(oN, {
            store: Br
          }), (0, Zr.createElement)(dN, {
            store: ES
          }), (0, Zr.createElement)(xt, {
            store: Fr
          }), (0, Zr.createElement)(Jt, {
            store: Jr
          })), {
            content: (0, Zr.createElement)(SN, {
              commands: zr,
              store: Ir,
              power: Xr,
              water: qr,
              reactor: kr,
              battery: Ar,
              collider: ur,
              terminal: Hr,
              quests: er,
              tutorial: yr,
              close: hW.m,
              leave: () => {
                Br.dropHeld(), (0, hW.j)()
              },
              askIslands: () => {
                zS = -1 / 0, US = Date.now(), tS = zr.send(br)
              },
              openSocial: () => {
                (0, hW.j)(), zW.c.set({
                  openEverythingMenuName: xQ.q.SOCIAL
                })
              },
              showCore: rr => {
                eS({
                  kind: "core",
                  core: rr
                }), zr.send("baf2corereopen")
              }
            }),
            onClose: () => {
              eS(null)
            }
          })), nS.push((0, tW.t)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              eS({
                kind: "quests"
              }), (0, hW.y)()
            }
          })), nS.push(function(rr, Sr) {
            let Qr = null,
              Zr = () => {};
            const Wr = Sr => {
              var Wr;
              let {
                tutorial: ar,
                tutorialKnown: jr
              } = Sr;
              (null === (Wr = Qr) || void 0 === Wr ? void 0 : Wr.tutorial) === ar && Qr.tutorialKnown === jr || (Qr = {
                tutorial: ar,
                tutorialKnown: jr
              }, Zr = (0, tW.t)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: zp[ar],
                icon: {
                  kind: "icon",
                  name: hp[ar]
                },
                iconOnly: !0,
                disabled: !jr,
                className: "Baf2TutorialButton",
                onClick: () => {
                  rr.next()
                }
              }))
            };
            Wr(Sr.get());
            const ar = PW.i.subscribe(qW, Wr);
            return () => {
              PW.i.unsubscribe(ar), Zr()
            }
          }(yr, er)), BS = !1, nS.push((0, ha.k)((() => {
            null !== dz && uz(dz)
          }))), nS.push(rY()), nS.push(function() {
            const rr = PW.i.subscribe(qW, DW),
              Sr = () => {
                if (JW) {
                  const rr = JW;
                  JW = null, (0, HW.x)(rr)
                }
              },
              Qr = PW.i.subscribe("toggleMenu", (rr => {
                "inventory" === (null === rr || void 0 === rr ? void 0 : rr.split("|")[0]) && Sr()
              })),
              Zr = PW.i.subscribe("appManagerUpdated|openInGameMenuName", (rr => {
                "inventory" === rr && Sr()
              }));
            return () => {
              PW.i.unsubscribe(rr), PW.i.unsubscribe(Qr), PW.i.unsubscribe(Zr)
            }
          }()), nS.push(function(rr) {
            const Sr = Jz(rr),
              Qr = PW.i.subscribe(qW, (rr => {
                bz.follow(rr, Sr)
              }));
            return () => {
              PW.i.unsubscribe(Qr), bz.clear()
            }
          }(hr)), nS.push(function() {
            const rr = document.documentElement,
              Sr = (0, PN.b)(".InvenBodyRight", [], (() => {
                const Sr = document.querySelector(".InvenBodyRight");
                Sr && rr.style.setProperty("--baf2-backpack-width", `${Sr.offsetWidth}px`)
              }));
            return () => {
              Sr(), rr.style.removeProperty("--baf2-backpack-width")
            }
          }()), nS.push(function() {
            const rr = document.documentElement;
            return rr.classList.add(Fz), () => {
              rr.classList.remove(Fz)
            }
          }()), nS.push((() => {
            pr.dispose(), Er.dispose()
          })), tr.start(hr), nS.push((() => {
            tr.dispose(), fS.dispose(), lr.dispose()
          }))
        },
        onClose: () => {
          (0, HW.x)([]), JW = null, bW = new Set, dz = null, (0, HW.u)(new Map), EY.clear();
          for (const rr of nS) rr();
          er.dispose(), ZS.dispose(), Kr.dispose(), Br.dispose(), WS.dispose(), aS.dispose(hr), Mr.dispose(hr), Gr.dispose(hr), or.dispose(hr), Dr.dispose(hr), Jr.dispose(), dr.dispose(), Cr.dispose(), kr.dispose(), Ar.dispose(), Fr.dispose(), jS.dispose(), IS.dispose(), ES.dispose(), rS.dispose(hr), SS.dispose(hr), ur.dispose(), pS.dispose(), zr.clear()
        },
        onAfterRender: (rr, Sr) => {
          var Qr, Zr, Wr;
          try {
            tr.onAfterRender(Sr)
          } catch (Er) {
            console.error("Error drawing BAF2 belt items", Er)
          }
          try {
            fS.onAfterRender(hr, ar)
          } catch (Er) {
            console.error("Error drawing BAF2 jet flames", Er)
          }
          BS || (BS = !0, zr.send("baf2clientready"));
          const jr = hr.getPositionView(ar);
          Nr.onAfterRender(Sr, jr, mr), Lr.onAfterRender(Sr, jr, mr, Ur), pr.run(mr), WS.onAfterRender(hr, jr), aS.onAfterRender(hr, jr), lr.onAfterRender(hr, jr), Mr.onAfterRender(hr, jr), Gr.onAfterRender(hr, ar, jr), or.onAfterRender(hr, ar, jr), Dr.onAfterRender(hr, ar), dr.onAfterRender(hr, jr), er.onPlayerY(jr[1]), rS.onAfterRender(hr), SS.onAfterRender(hr, ar, jr);
          const fr = hr.getTargetedBlock();
          ZS.onAfterRender(hr, ar, null !== (Qr = null === fr || void 0 === fr ? void 0 : fr.e_) && void 0 !== Qr ? Qr : 0, null !== (Zr = null === fr || void 0 === fr ? void 0 : fr.position) && void 0 !== Zr ? Zr : null), pS.onAfterRender(hr, Sr), Or.onMining(function(rr, Sr) {
            var Qr, Zr;
            const Wr = rr.getMiningBlock();
            if (!Wr) return null;
            const ar = (0, Pr.g)(rr.getBlockId(Wr[0], Wr[1], Wr[2])),
              jr = null !== (Qr = null === (Zr = rr.XQr(Sr)) || void 0 === Zr ? void 0 : Zr.name) && void 0 !== Qr ? Qr : null,
              Ir = rr.getItemStat(Sr, ar.split("|")[0], "harvestLevel");
            return {
              block: ar,
              x: Wr[0],
              y: Wr[1],
              z: Wr[2],
              wI: jr,
              level: Ir
            }
          }(hr, ar), hr.isMining(), performance.now()), "dropMap" === (null === (Wr = Ir.get()) || void 0 === Wr ? void 0 : Wr.kind) && gZ(jr[1]) && KS()
        },
        onPlayerChangeBlock: (rr, Sr, Qr, Zr, Wr, jr) => {
          rr === ar && function(rr, Sr, Qr, Zr, Wr, ar, jr) {
            const Ir = qz(ar, jr, rr.isPlayerCrouching(Sr));
            if (null === Ir) return;
            if (rr.fR(Qr, Zr, Wr, Ir), !rr.getClientOption(Sr, "canPickUpItems")) return;
            const fr = jQ[Ir.split("|")[0]];
            var Er, pr, xr;
            void 0 !== fr && (Er = rr.getInventoryItems(), pr = fr, xr = EU.i.maxItemStackSize, rr.getInventoryFreeSlotCount(Sr) > 0 || Er.some((rr => null !== rr && rr.name === pr && null !== rr.amount && rr.amount < xr))) && rr.playSound(Sr, (0, QY.c)("pickUp"), .5, 1)
          }(hr, rr, Sr, Qr, Zr, Wr, jr)
        },
        onPlayerAltAction: (rr, Sr, Qr, Zr, Wr) => {
          var jr, Ir;
          if (!hr.getClientOption(ar, "canPickUpItems")) return;
          const fr = null !== (jr = null === (Ir = hr.XQr(ar)) || void 0 === Ir ? void 0 : Ir.name) && void 0 !== jr ? jr : null,
            Er = function(rr, Sr) {
              const Qr = rr.split("|")[0];
              return vr(Qr) && Sr !== aW && "Sky Pack" !== Sr ? Qr : null
            }(Wr, fr);
          if (null !== Er) return void(mS.tap(Er, performance.now()) && Dz(hr, ar, Er, er));
          if (!kZ(fr)) return;
          const pr = NS.isNewPress(performance.now()),
            xr = function(rr, Sr, Qr) {
              return !kZ(Sr) || Qr ? null : JZ(rr)
            }(Wr, fr, hr.isPlayerCrouching(ar));
          null !== xr && pr && hr.fR(Sr, Qr, Zr, xr)
        },
        onPlayerAttemptAltAction: (rr, Sr, Qr, Zr, Wr) => {
          if (function(rr, Sr, Qr, Zr, Wr) {
              "Workbench" === Zr.split("|")[0] && rr.getClientOption(Qr, "canCraft") && (bz.open("Workbench", Wr.get(), Jz(rr)), Sr.send("baf2station Workbench"))
            }(hr, zr, ar, Wr, er), SY(hr, ar, Wr)) return "preventAction";
          Tr.onAltAction(hr, ar, Wr)
        },
        onReceivedMessageFromServer: (rr, Sr) => {
          if ("baf2MachineStatus" === rr) {
            var Qr, Zr, Wr, Er, pr, xr, mr, Ur, Yr, yr, Tr, vr, Or, lr, Pr, Rr;
            const rr = Sr,
              ar = rr.baf2MachineTaught;
            jr.set(rr.baf2MachinePos, {
              status: rr.baf2MachineStatus,
              power: null !== (Qr = rr.baf2MachinePower) && void 0 !== Qr ? Qr : null,
              opLeftMs: null !== (Zr = rr.baf2MachineOpLeftMs) && void 0 !== Zr ? Zr : null,
              dug: rr.baf2MachineYield ? {
                item: rr.baf2MachineYield,
                name: nr([rr.baf2MachineYield])[rr.baf2MachineYield]
              } : null,
              powerCap: null !== (Wr = rr.baf2MachinePowerCap) && void 0 !== Wr ? Wr : null,
              powerRates: null !== (Er = rr.baf2MachinePowerRates) && void 0 !== Er ? Er : null,
              coupled: !0 === rr.baf2MachineCoupled,
              couplerLevel: null !== (pr = rr.baf2MachineCoupler) && void 0 !== pr ? pr : 1,
              taught: ar,
              taughtName: ar ? nr([ar])[ar] : null,
              tier: null !== (xr = rr.baf2MachineTier) && void 0 !== xr ? xr : null,
              input: null !== (mr = rr.baf2MachineInput) && void 0 !== mr ? mr : null,
              inertCoupler: null !== (Ur = rr.baf2MachineInertCoupler) && void 0 !== Ur ? Ur : null,
              inputShort: null !== (Yr = rr.baf2MachineInputShort) && void 0 !== Yr ? Yr : null,
              field: null !== (yr = rr.baf2MachineField) && void 0 !== yr ? yr : null,
              noSeeds: !0 === rr.baf2MachineNoSeeds,
              fuelFed: !0 === rr.baf2MachineFuelFed,
              fuelFeeds: !0 === rr.baf2MachineFuelFeeds,
              coreFull: !0 === rr.baf2MachineCoreFull,
              waterUnpowered: !0 === rr.baf2MachineWaterUnpowered,
              powerShort: !0 === rr.baf2MachinePowerShort,
              powerWait: !0 === rr.baf2MachinePowerWait,
              reactorPowered: !0 === rr.baf2MachineReactorPowered,
              fuelLeftMs: null !== (Tr = rr.baf2MachineFuelLeftMs) && void 0 !== Tr ? Tr : null,
              burning: null !== (vr = rr.baf2MachineBurning) && void 0 !== vr ? vr : null,
              fuelKeep: null !== (Or = rr.baf2MachineFuelKeep) && void 0 !== Or ? Or : null,
              water: null !== (lr = rr.baf2MachineWater) && void 0 !== lr ? lr : null,
              farm: null !== (Pr = rr.baf2MachineFarm) && void 0 !== Pr ? Pr : null,
              cryo: null !== (Rr = rr.baf2MachineCryo) && void 0 !== Rr ? Rr : null
            })
          } else if ("baf2StationOpen" === rr) {
            const rr = Sr.baf2Station;
            mS.consumeServerOpen(rr, performance.now()) || Dz(hr, ar, rr, er)
          } else if ("baf2Power" === rr) {
            const rr = Sr;
            Xr.set(rr), rr.baf2PowerOpen && (eS({
              kind: "power"
            }), (0, hW.y)())
          } else if (rr === sr.C) {
            const rr = Sr;
            qr.set(rr), rr.baf2WaterOpen && (eS({
              kind: "water"
            }), (0, hW.y)())
          } else if ("baf2RxPlans" === rr) {
            var gr, Mr, Gr;
            const rr = Sr;
            Cr.rK(rr);
            const Qr = new Set(rr.baf2RxPlanList.map((rr => {
              let [Sr, Qr, Zr] = rr;
              return `${Sr},${Qr},${Zr}`
            })));
            Fr.retain(Qr);
            const Zr = null === (gr = Ir.get()) || void 0 === gr ? void 0 : gr.kind,
              Wr = "reactor" === Zr ? null === (Mr = kr.get()) || void 0 === Mr ? void 0 : Mr.status.baf2RxAt : "battery" === Zr ? null === (Gr = Ar.get()) || void 0 === Gr ? void 0 : Gr.status.baf2BatAt : void 0;
            Wr && yS.has(Wr.join(",")) && !Qr.has(Wr.join(",")) && KS(), yS = Qr
          } else if ("baf2RxStatus" === rr) {
            const rr = Sr;
            kr.set(rr), rr.baf2RxOpen && (eS({
              kind: "reactor"
            }), (0, hW.y)())
          } else if ("baf2BatStatus" === rr) {
            const rr = Sr;
            Ar.set(rr), rr.baf2BatOpen && (eS({
              kind: "battery"
            }), (0, hW.y)())
          } else if ("baf2RxAlarm" === rr) Fr.rK(Sr);
          else if ("baf2Bomb" === rr) Jr.rK(Sr, hr.getPositionView(ar));
          else if ("baf2Fallout" === rr) dr.rK(Sr);
          else if ("baf2ColBeams" === rr) ur.onBeams(Sr);
          else if ("baf2ColStatus" === rr) {
            const rr = Sr;
            var ir, wr;
            if (ur.onStatus(rr), rr.baf2ColOpen) ur.onOpen(null !== (ir = null === (wr = hr.XQr(ar)) || void 0 === wr ? void 0 : wr.name) && void 0 !== ir ? ir : null), eS({
              kind: "collider"
            }), (0, hW.y)()
          } else if ("baf2Terminal" === rr) {
            const rr = Sr;
            var cr;
            if (Hr.apply(rr)) rr.baf2TermReset && (eS({
              kind: "terminal"
            }), (0, hW.y)());
            else "terminal" === (null === (cr = Ir.get()) || void 0 === cr ? void 0 : cr.kind) && (Ir.set(null), (0, hW.j)())
          } else if ("baf2Core" === rr) {
            var or;
            const rr = Sr;
            if (fr(!0 === rr.baf2CoreNuclear), function(rr, Sr) {
                return "core" === (null === rr || void 0 === rr ? void 0 : rr.kind) && Sr.baf2CoreTier > rr.core.message.baf2CoreTier
              }(Ir.get(), rr)) return void(0, hW.j)();
            if (rr.baf2CoreRefresh && "core" !== (null === (or = Ir.get()) || void 0 === or ? void 0 : or.kind)) return;
            eS({
              kind: "core",
              core: IY(rr, nr)
            }), rr.baf2CoreRefresh || (0, hW.y)()
          } else if ("baf2WrenchUndo" === rr) {
            const {
              baf2WrenchPos: rr,
              baf2WrenchBlock: Qr
            } = Sr;
            hr.fR(rr[0], rr[1], rr[2], Qr)
          } else if ("baf2Toast" === rr) {
            const rr = Sr;
            Vr.heard(performance.now(), rr.baf2ToastMs), Kr.show(rr)
          } else if ("baf2Area" === rr) Br.arrive(Sr, null !== Ir.get());
          else if ("baf2Quest" === rr) {
            const rr = Sr;
            fr(!0 === rr.baf2QuestNuclear), er.set(rr, function(rr, Sr) {
              var Qr, Zr, Wr, ar, jr;
              const Ir = [];
              for (const [, , pr, , , , , , xr, mr] of rr.baf2QuestSteps) null !== pr && Ir.push(pr), Ir.push(...null !== xr && void 0 !== xr ? xr : [], ...null !== mr && void 0 !== mr ? mr : []);
              rr.baf2QuestReward && Ir.push(rr.baf2QuestReward);
              const fr = null === (Qr = rr.baf2QuestSide) || void 0 === Qr ? void 0 : Qr[2][2];
              fr && Ir.push(fr), Ir.push(...null !== (Zr = null === (Wr = rr.baf2QuestSide) || void 0 === Wr ? void 0 : Wr[2][8]) && void 0 !== Zr ? Zr : [], ...null !== (ar = null === (jr = rr.baf2QuestSide) || void 0 === jr ? void 0 : jr[2][9]) && void 0 !== ar ? ar : []);
              for (const [pr] of null !== (Er = rr.baf2QuestAlso) && void 0 !== Er ? Er : []) {
                var Er;
                Ir.push(pr)
              }
              return Sr(Ir)
            }(rr, nr)), uz(rr.baf2QuestTier)
          } else if ("baf2Route" === rr) ! function(rr, Sr) {
            let {
              baf2RouteCells: Qr,
              baf2RouteInto: Zr
            } = Sr;
            0 !== Qr.length && Zr ? rr.setRouteChevrons({
              cells: Qr.map(((rr, Sr) => {
                const [Wr, , ar] = function(rr, Sr, Qr) {
                  const Zr = Qr + 1 < rr.length ? rr[Qr + 1] : Sr;
                  return [Zr[0] - rr[Qr][0], 0, Zr[2] - rr[Qr][2]]
                }(Qr, Zr, Sr);
                return {
                  pos: rr,
                  way: [Wr, ar]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : rr.setRouteChevrons(null)
          }(hr, Sr);
          else if ("baf2QuestBook" === rr) er.setBook(Sr);
          else if ("baf2Stalls" === rr) Nr.set(Sr.baf2StallCells);
          else if (rr === tQ.i) tr.onMoves(Sr);
          else if (rr === tQ.g) tr.onLines(Sr);
          else if ("baf2Labels" === rr) Lr.rK(Sr);
          else if ("baf2DropMap" === rr) eS({
            kind: "dropMap",
            dropMap: Sr
          }), (0, hW.y)();
          else if ("baf2Islands" === rr) {
            var Dr, rS;
            const rr = Sr;
            if (zr.syncIslandEdits(rr.baf2IslandsAnswered), !rr.baf2IslandsOpen && "islands" !== (null === (Dr = Ir.get()) || void 0 === Dr ? void 0 : Dr.kind)) return;
            if (rr.baf2IslandsOpen) {
              var SS, QS;
              const Sr = zW.c.get("openEverythingMenuName"),
                Qr = zr.sent() >= tS,
                Zr = "other" !== (NS = {
                  askedAtMs: US,
                  askSent: Qr,
                  reaskedAtMs: hS,
                  nowMs: Date.now(),
                  panel: null !== (SS = null === (QS = Ir.get()) || void 0 === QS ? void 0 : QS.kind) && void 0 !== SS ? SS : null,
                  inGameMenu: zW.c.get("openInGameMenuName"),
                  everythingMenu: null === Sr ? null : Sr === xQ.q.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== rr.baf2IslandsFocusInvite
                }).everythingMenu && (!!NS.focusInvite || "islands" === NS.panel && "clientGame" === NS.inGameMenu || !(NS.nowMs - NS.reaskedAtMs < vE) && (NS.askSent && NS.nowMs - NS.askedAtMs < vE ? "core" === NS.panel && "clientGame" === NS.inGameMenu && null === NS.everythingMenu : "shop" === NS.everythingMenu || null === NS.inGameMenu));
              if (Qr && (US = -1 / 0), hS = -1 / 0, !Zr) return void YS()
            }
            const Qr = (WS = rr.baf2IslandsOpen, aS = "islands" === (null === (rS = Ir.get()) || void 0 === rS ? void 0 : rS.kind), pS = zS, xS = Date.now(), WS && !aS && xS - pS < vE);
            eS({
              kind: "islands",
              islands: rr,
              arrivedAtMs: Date.now(),
              backToCore: OE(Ir.get())
            }), Qr && (zS = -1 / 0, hS = Date.now(), zr.send(br)), rr.baf2IslandsOpen && ("clientGame" !== zW.c.get("openInGameMenuName") && (0, YW.e)(), (0, hW.y)())
          } else if ("baf2CoopTransfer" === rr) {
            var ZS;
            const rr = Sr;
            rr.baf2TransferOn ? (eS({
              kind: "transfer",
              transfer: rr,
              arrivedAtMs: Date.now()
            }), (0, hW.y)()) : "transfer" === (null === (ZS = Ir.get()) || void 0 === ZS ? void 0 : ZS.kind) && (0, hW.j)()
          } else "baf2IslandLeft" === rr ? (Br.dropHeld(), null !== Ir.get() && KS(), "inventory" === zW.c.get("openInGameMenuName") && (0, YW.e)()) : "baf2Arc" === rr ? jS.rK(hr, Sr) : "baf2Blade" === rr ? IS.onBlade(hr, Sr) : "baf2JetFlame" === rr ? fS.rK(hr, Sr) : "baf2GearPower" === rr && ES.rK(Sr);
          var WS, aS, pS, xS, NS
        }
      };
      return TS
    }
  },
  39995: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      g: () => Ir
    });
    var Zr = Qr(379),
      Wr = Qr(35472),
      ar = Qr(4489);

    function jr(rr) {
      const Sr = (0, ar.e)(rr);
      return (0, Zr.Pb)(rr, void 0 === Sr ? void 0 : (0, Wr.displayNameOf)(Sr))
    }

    function Ir(rr, Sr) {
      return rr(jr(Sr))
    }
  },
  40033: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr) {
      const Zr = new Set,
        Wr = new ResizeObserver(Qr),
        ar = () => {
          const Sr = new Set(document.querySelectorAll(rr));
          let ar = !1;
          for (const rr of Zr) Sr.has(rr) || (Wr.unobserve(rr), Zr.delete(rr), ar = !0);
          for (const rr of Sr) Zr.has(rr) || (Wr.observe(rr), jr.observe(rr, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Zr.add(rr));
          ar && Qr()
        },
        jr = new MutationObserver((Sr => {
          Sr.some((rr => "attributes" === rr.type)) && Qr(), Sr.some((Sr => function(rr, Sr, Qr) {
            if ("childList" !== rr.type) return !1;
            for (const Zr of rr.addedNodes)
              if (Zr instanceof Element && (Zr.matches(Sr) || Zr.querySelector(Sr))) return !0;
            for (const Zr of rr.removedNodes)
              if (Zr instanceof Element)
                for (const rr of Qr)
                  if (Zr.contains(rr)) return !0;
            return !1
          }(Sr, rr, Zr))) && ar()
        }));
      jr.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Ir of Sr) Wr.observe(Ir);
      return window.addEventListener("resize", Qr), ar(), Qr(), () => {
        Wr.disconnect(), jr.disconnect(), window.removeEventListener("resize", Qr)
      }
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  40020: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir
    });
    var Zr = Qr(40013);
    const Wr = 5,
      ar = [0, 0, 0],
      jr = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Ir(rr, Sr, Qr, Ir, fr, Er) {
      let [pr, xr, mr] = Ir;
      const Nr = (pr + .5 - Qr[0]) ** 2 + (xr - Qr[1]) ** 2 + (mr + .5 - Qr[2]) ** 2;
      let Ur = null;
      Nr <= Er ** 2 && (ar[0] = pr + .5, ar[1] = xr + fr, ar[2] = mr + .5, Ur = Sr.projectWorldPosToViewport(ar));
      const tr = null !== Ur && Ur.x > -Wr && Ur.x < 100 + Wr && Ur.y > -Wr && Ur.y < 100 + Wr;
      return (0, Zr.f)(rr, !tr), tr ? (jr.x = Ur.x, jr.y = Ur.y, jr.distSq = Nr, jr) : null
    }
  },
  40004: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      h: () => Ir,
      k: () => jr
    });
    var Zr = Qr(3511);
    const Wr = "(max-height: 420px), (max-width: 650px)";

    function ar() {
      return (0, Zr.e)(Wr)
    }

    function jr(rr) {
      return (0, Zr.i)(Wr, rr)
    }

    function Ir() {
      return (0, Zr.h)(Wr)
    }
  },
  40013: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      f: () => ar
    });
    const Zr = new WeakMap;

    function Wr(rr) {
      let Sr = Zr.get(rr);
      return Sr || (Sr = {
        hidden: rr.hidden,
        x: NaN,
        y: NaN
      }, Zr.set(rr, Sr)), Sr
    }

    function ar(rr, Sr) {
      const Qr = Wr(rr);
      Qr.hidden !== Sr && (Qr.hidden = Sr, rr.hidden = Sr)
    }

    function jr(rr, Sr, Qr) {
      const Zr = Wr(rr);
      Zr.x === Sr && Zr.y === Qr || (Zr.x = Sr, Zr.y = Qr, rr.style.translate = `${Sr}vw ${Qr}vh`)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);