export const id = 243;
export const ids = [243];
export const modules = {
  38597: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(38606);
    const Am = [0, 0, 0];
    class am {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Am;
        this.pool = mm, this.origin = Tm, this.count = 0, this.free = []
      }
      take() {
        var mm;
        const Tm = null !== (mm = this.free.pop()) && void 0 !== mm ? mm : this.count++;
        return Tm >= this.pool.yp && this.pool.grow(Math.max(2 * this.pool.yp, Tm + 1)), this.hide(Tm), Tm
      }
      release(mm) {
        this.hide(mm), this.free.push(mm)
      }
      write(mm, Tm, fm, Am) {
        const {
          records: am
        } = this.pool, {
          origin: xm
        } = this, wm = mm * hm.b;
        am[wm] = Tm - xm[0], am[wm + 1] = fm - xm[1], am[wm + 2] = Am - xm[2], am[wm + hm.d] = 0, this.pool.markDirty(mm)
      }
      hide(mm) {
        this.pool.records[mm * hm.b + hm.d] = 1, this.pool.markDirty(mm)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class xm {
      constructor(mm, Tm, fm) {
        this.api = mm, this.model = Tm, this.initialCapacity = fm, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(mm) {
        let Tm = this.kinds.get(mm);
        if (void 0 === Tm) {
          const fm = this.api.createInstancePool({
            ...this.model,
            item: mm
          }, this.initialCapacity);
          null === fm || void 0 === fm || fm.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Tm = fm && new am(fm, this.origin), this.kinds.set(mm, Tm)
        }
        return Tm
      }
      follow(mm) {
        const {
          origin: Tm
        } = this;
        if (Math.abs(mm[0] - Tm[0]) <= 512 && Math.abs(mm[1] - Tm[1]) <= 512 && Math.abs(mm[2] - Tm[2]) <= 512) return !1;
        Tm[0] = Math.floor(mm[0]), Tm[1] = Math.floor(mm[1]), Tm[2] = Math.floor(mm[2]);
        for (const fm of this.kinds.values()) null === fm || void 0 === fm || fm.pool.setOrigin(Tm[0], Tm[1], Tm[2]);
        return !0
      }
      commit() {
        for (const mm of this.kinds.values()) null === mm || void 0 === mm || mm.commit()
      }
      dispose() {
        for (const mm of this.kinds.values()) null === mm || void 0 === mm || mm.dispose();
        this.kinds.clear()
      }
    }
  },
  38611: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      e: () => wm,
      h: () => Dm
    });
    const hm = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Am = [0, 1, 2, 0, 2, 3],
      am = [4, 5];

    function xm(mm, Tm, fm, hm, Am) {
      for (let xm = 0; xm < 6; xm++) am.includes(xm) === Am && im(mm, Tm, fm, hm, xm)
    }

    function wm(mm, Tm, fm, hm) {
      for (let Am = 0; Am < 6; Am++) im(mm, Tm, fm, hm, Am)
    }

    function Dm(mm, Tm, fm, am, xm) {
      for (let wm = 0; wm < 6; wm++)
        for (const Dm of [0, 1]) {
          const [im, Rm, pm] = [Dm + 2, Dm + 1, (Dm + 3) % 4], Em = mm.length / 3;
          for (const [Tm, Am] of [
              [Dm, Rm],
              [im, Rm],
              [im, pm],
              [Dm, pm]
            ])
            for (let Dm = 0; Dm < 3; Dm++) {
              const im = hm[3 * (4 * wm + Tm) + Dm],
                Rm = hm[3 * (4 * wm + Am) + Dm];
              mm.push((im + (Rm - im) * xm) * am / 2 + fm[Dm])
            }
          for (const mm of Am) Tm.push(Em + mm)
        }
    }

    function im(mm, Tm, fm, am, xm) {
      let [wm, Dm, im] = fm, [Rm, pm, Em] = am;
      const om = mm.length / 3;
      for (let Am = 4 * xm; Am < 4 * xm + 4; Am++) mm.push(hm[3 * Am] * Rm / 2 + wm, hm[3 * Am + 1] * pm / 2 + Dm, hm[3 * Am + 2] * Em / 2 + im);
      for (const hm of Am) Tm.push(om + hm)
    }
  },
  38580: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => cV
    });
    var hm = fm(59);
    const Am = [{
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
      am = 10;
    let xm = !0;

    function wm() {
      return xm
    }

    function Dm(mm) {
      xm = mm
    }
    const im = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function Rm() {
      return xm ? Am.length : am
    }

    function pm(mm) {
      var Tm, fm;
      return null !== (Tm = null === (fm = Am[mm - 1]) || void 0 === fm ? void 0 : fm.reactorTier) && void 0 !== Tm ? Tm : 0
    }

    function Em(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pm(mm) > 0;
      return fm && !xm ? "hidden" : mm <= Tm ? "open" : fm ? Tm < 5 ? "hidden" : Tm < am ? "teaser" : "locked" : "locked"
    }

    function om(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: hm,
        n: Am
      } = qm(mm);
      return {
        key: Tm[hm],
        params: {
          [hm]: fm ? String(Am) : Am
        }
      }
    }
    const Om = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Ym(mm, Tm) {
      return pm(mm) > 0 && Tm < am
    }

    function qm(mm) {
      const Tm = pm(mm);
      if (Tm > 0) return {
        kind: "atomic",
        n: Tm,
        short: `A${Tm}`
      };
      const fm = function(mm) {
        return mm >= 6 && mm <= 10 ? mm - 6 + 1 : 0
      }(mm);
      return fm > 0 ? {
        kind: "stage",
        n: fm,
        short: `S${fm}`
      } : {
        kind: "tier",
        n: mm,
        short: String(mm)
      }
    }

    function jm(mm) {
      return Am[Math.max(1, Math.min(mm, Am.length)) - 1]
    }

    function Vm(mm, Tm) {
      return mm < Tm ? function(mm) {
        var Tm;
        return null !== (Tm = Am[mm]) && void 0 !== Tm ? Tm : null
      }(mm) : null
    }
    const Im = "baf2coresubmit",
      Km = "baf2corebankpause",
      Qm = "baf2coredeposit",
      nm = "baf2corechargepause";

    function Jm(mm) {
      var Tm;
      return null !== (Tm = mm.baf2CoreOpen) && void 0 !== Tm ? Tm : am
    }
    const cm = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function zm(mm) {
      return cm.includes(mm)
    }
    const Zm = (mm, Tm) => Tm.map((Tm => [Tm, [mm]])),
      km = Object.fromEntries([...Zm("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Zm("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Zm("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Zm("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Zm("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Zm("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Zm("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Zm("Parts Bench", ["Focus Lens"]), ...Zm("Machine Bench", ["Laser", "Collider"]), ...Zm("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Zm("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Zm("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Zm("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Zm("Tool Bench", ["Mob Cage"]), ...Zm("Tool Bench", ["Pocket Terminal"]), ...Zm("Tool Bench", ["Comet Beacon"]), ...Zm("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function bm(mm) {
      var Tm;
      return null !== (Tm = km[mm]) && void 0 !== Tm ? Tm : ["Workbench"]
    }

    function Sm(mm) {
      return bm(mm)[0]
    }
    Am.slice(1).map(((mm, Tm) => `Core Tier ${Tm+2}`));
    var em = fm(9141);
    const Nm = ["on", "hud", "off"];

    function Gm(mm) {
      return "on" === mm
    }
    var Xm = fm(354);
    const Pm = "Mob Farm",
      Hm = {
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
      ym = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Cm = {
        1: 20,
        2: 60,
        3: 120
      },
      rm = "baf2farmvoid",
      sm = "Caged ",
      lm = " Spawner Block";

    function Mm(mm) {
      return `lifeform:${(0,Xm.ue)(mm)}`
    }

    function um(mm) {
      if (!mm) return null;
      if (mm.startsWith(sm)) {
        const Tm = mm.slice(6);
        return ym.includes(Tm) ? Tm : null
      }
      if (mm.endsWith(lm)) {
        const Tm = mm.slice(0, -14);
        return void 0 !== Hm[Tm] ? Tm : null
      }
      return null
    }

    function Bm(mm) {
      return !0 === mm.mobFarm
    }

    function Lm(mm, Tm) {
      return Cm[Hm[Tm]] * mm.opMs / 1e3
    }
    const tm = new Map;
    const Um = "baf2islands",
      dm = "baf2islandnew";

    function gm(mm) {
      const Tm = Am.findIndex((Tm => Tm.unlocks.includes(mm)));
      return Tm < 0 ? 1 : Tm + 1
    }

    function Wm(mm) {
      return Math.floor(mm).toLocaleString("en-US")
    }
    var Fm = fm(38521);
    const mT = "baf2terminaltake",
      TT = "baf2terminalput",
      fT = ["one", "stack", "fill"];

    function hT(mm, Tm, fm) {
      return `${mT} ${mm} ${Tm} ${fm}`
    }

    function AT(mm, Tm, fm) {
      return `${TT} ${mm} ${Tm} ${fm}`
    }

    function aT(mm) {
      return `${TT} ${mm}`
    }
    const xT = [
      [`${mT} `, "take"],
      [`${TT} `, "put"]
    ];

    function wT(mm) {
      const Tm = xT.find((Tm => {
        let [fm] = Tm;
        return mm.startsWith(fm)
      }));
      if (!Tm) return null;
      const [fm, hm] = Tm, [Am, am, ...xm] = mm.slice(fm.length).trim().split(" "), wm = Number(Am);
      if (!Number.isSafeInteger(wm) || wm <= 0) return null;
      if ("put" === hm && void 0 === am) return {
        kind: "putAll",
        seq: wm
      };
      const Dm = function(mm) {
        if (fT.includes(mm)) return mm;
        const Tm = Number(mm);
        return /^\d+$/.test(mm) && Number.isSafeInteger(Tm) && Tm > 0 ? Tm : null
      }(null !== am && void 0 !== am ? am : "");
      return null === Dm || 0 === xm.length ? null : {
        kind: hm,
        seq: wm,
        mode: Dm,
        item: xm.join(" ")
      }
    }

    function DT(mm, Tm) {
      const fm = "number" === typeof mm ? mm : "one" === mm ? 1 : "stack" === mm ? 99 : Tm;
      return Math.min(Tm, fm)
    }

    function iT(mm, Tm) {
      const fm = mm => "number" === typeof mm ? mm : "one" === mm ? 1 : 99;
      return "fill" === mm || "fill" === Tm ? "fill" : fm(mm) + fm(Tm)
    }

    function RT(mm, Tm) {
      const fm = wT(mm),
        hm = wT(Tm),
        Am = fm && hm ? function(mm, Tm) {
          return "take" === mm.kind || "take" === Tm.kind ? "take" === mm.kind && "take" === Tm.kind && mm.item === Tm.item ? {
            ...Tm,
            mode: iT(mm.mode, Tm.mode)
          } : null : "putAll" === mm.kind || "putAll" === Tm.kind ? {
            kind: "putAll",
            seq: Tm.seq
          } : mm.item === Tm.item ? {
            ...Tm,
            mode: iT(mm.mode, Tm.mode)
          } : null
        }(fm, hm) : null;
      return Am ? "putAll" === (am = Am).kind ? aT(am.seq) : "put" === am.kind ? AT(am.seq, am.mode, am.item) : hT(am.seq, am.mode, am.item) : null;
      var am
    }
    const pT = "baf2rx";

    function ET(mm, Tm) {
      for (var fm = arguments.length, hm = new Array(fm > 2 ? fm - 2 : 0), Am = 2; Am < fm; Am++) hm[Am - 2] = arguments[Am];
      return [pT, mm[0], mm[1], mm[2], Tm, ...hm].join(" ")
    }
    const oT = 2,
      OT = 4,
      YT = 8,
      qT = 16,
      jT = 32,
      VT = 64,
      IT = 128,
      KT = 256,
      QT = 512,
      nT = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      JT = [{
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
    const cT = "Biomass",
      zT = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function ZT(mm) {
      return {
        input: cT,
        inputAmount: 1,
        output: mm,
        outputAmount: 1
      }
    }
    const kT = "baf2synth",
      bT = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      ST = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      eT = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      NT = function(mm, Tm) {
        return {
          input: mm,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: Tm,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      GT = function(mm, Tm) {
        return {
          ...NT(mm, Tm, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      XT = ST.map((mm => GT(mm, "Biomass", 2))),
      PT = {
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
          recipes: [NT("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), NT("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), NT("Raw Gold", "Gold Grit", 2), NT("Messy Stone", "Sand"), NT("Gravel", "Sand"), NT("Raw Voltite", "Voltite Dust", 2), NT("Moonstone", "Moonstone Dust", 4), NT("Wheat Seeds", "Fertiliser"), NT("Raw Uranium", "Uranium Grit", 2), GT("Mossy Messy Stone", "Sand"), ...XT],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [NT("Iron Grit", "Iron Bar"), NT("Copper Grit", "Copper Bar"), NT("Gold Grit", "Gold Bar"), NT("Raw Iron", "Iron Bar"), NT("Raw Copper", "Copper Bar"), NT("Raw Gold", "Gold Bar"), NT("Sand", "Glass"), NT("Messy Stone", "Stone"), ...Xm.Nc.map((mm => NT(mm, "Charcoal", 1, 4))), NT("Wheat", "Bread", 1, 2), ...ST.map(((mm, Tm) => GT(mm, eT[Tm])))],
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
          recipes: [NT("Iron Bar", "Iron Plate"), NT("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [NT("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [NT("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [NT("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), NT("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), NT("Raw Gold", "Gold Grit", 3), NT("Raw Voltite", "Voltite Dust", 3), NT("Messy Stone", "Sand", 2), NT("Gravel", "Sand", 2), NT("Moonstone", "Moonstone Dust", 6), NT("Raw Uranium", "Uranium Grit", 3), GT("Mossy Messy Stone", "Sand", 2), ...XT],
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
          table: nT
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [NT("Coal", "Diamond", 1, 24), NT("Voltite Dust", "Moonstone", 1, 12)],
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
        ...Fm.h
      },
      HT = {
        Crusher: [NT("Spent Pellet", "Glow Dust"), NT("Wheat Seeds", "Biomass"), NT("Wheat", "Biomass"), NT("Dead Bush", "Biomass"), NT("Dusk Moss", "Biomass"), NT("Rotten Flesh", "Biomass"), NT("Bone", "Biomass", 2)],
        "Shatter Mill": [NT("Spent Pellet", "Glow Dust"), NT("Wheat Seeds", "Biomass"), NT("Wheat", "Biomass"), NT("Dead Bush", "Biomass"), NT("Dusk Moss", "Biomass"), NT("Rotten Flesh", "Biomass"), NT("Bone", "Biomass", 2), ...Xm.Nc.map((mm => NT(mm, "Biomass")))],
        Smelter: [NT("Biomass", "Fertiliser", 2)],
        Press: [NT("Coal", "Graphite", 1, 4)]
      },
      yT = "Power Coupler",
      CT = "Advanced Coupler",
      rT = "Nova Coupler",
      sT = [{
        item: yT,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: CT,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: rT,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const lT = new Map;

    function MT(mm) {
      var Tm, fm;
      return null !== (Tm = null !== (fm = mm.fuelSlot) && void 0 !== fm ? fm : mm.couplerSlot) && void 0 !== Tm ? Tm : null
    }

    function uT(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!mm.couplable) throw new Error(`${mm.kind} takes no Power Coupler`);
      let fm = lT.get(mm);
      fm || (fm = [], lT.set(mm, fm));
      let hm = fm[Tm];
      if (!hm) {
        var Am;
        const {
          divisor: am,
          powerPerS: xm
        } = sT[Tm - 1], wm = mm.opMs / am, Dm = void 0 !== mm.fluidMade || void 0 !== mm.cryoMade ? mm.powerPerOp : xm * wm / 1e3;
        hm = {
          ...mm,
          fuelSlot: null,
          couplerSlot: null !== (Am = MT(mm)) && void 0 !== Am ? Am : void 0,
          opMs: wm,
          powerPerOp: Dm,
          coupled: !0
        }, Tm > 1 && (hm = {
          ...hm,
          couplerLevel: Tm
        }), fm[Tm] = hm
      }
      return hm
    }
    const BT = new Map;
    const LT = new Map;

    function vT(mm, Tm) {
      if (null === Tm || (fm = Tm, !zT.includes(fm))) return mm;
      var fm;
      let hm = LT.get(Tm);
      return hm || (hm = {
        ...mm,
        recipes: [ZT(Tm)]
      }, LT.set(Tm, hm)), hm
    }

    function tT(mm) {
      return !0 === mm.synth
    }
    const UT = (mm, Tm, fm, hm) => ({
        output: mm,
        outputAmount: Tm,
        tier: fm,
        inputs: hm.map((mm => {
          let [Tm, fm] = mm;
          return {
            item: Tm,
            amount: fm
          }
        }))
      }),
      dT = Object.fromEntries([UT("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), UT("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), UT("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), UT("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), UT("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), UT("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), UT("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), UT("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), UT("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), UT("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), UT("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), UT("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), UT("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), UT("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), UT("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), UT("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), UT("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), UT("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), UT("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), UT("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), UT("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), UT("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), UT("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), UT("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), UT("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), UT("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), UT("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), UT("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), UT("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), UT("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((mm => [mm.output, mm]))),
      gT = new Map;

    function WT(mm, Tm) {
      let fm = PT[mm];
      if (Tm.atomic && (fm = function(mm) {
          const Tm = HT[mm.kind];
          if (!Tm) return mm;
          let fm = BT.get(mm.kind);
          if (!fm) {
            const hm = new Set(Tm.map((mm => mm.input))),
              Am = mm.recipes.filter((mm => !hm.has(mm.input)));
            fm = {
              ...mm,
              recipes: [...Am, ...Tm]
            }, BT.set(mm.kind, fm)
          }
          return fm
        }(fm)), fm.synth) return vT(fm, Tm.taught);
      if (Tm.coupled && fm.couplable) return uT(fm, Tm.level);
      const hm = fm.inputSlots && null !== Tm.taught ? dT[Tm.taught] : void 0;
      if (!hm) return fm;
      const Am = `${mm}|${hm.output}`;
      let am = gT.get(Am);
      return am || (am = {
        ...fm,
        bench: hm
      }, gT.set(Am, am)), am
    }
    const FT = ["Diamond", "Moonstone"];

    function mf(mm) {
      return new Set(mm.flatMap((mm => mm.bonus ? [mm.output, mm.bonus.item] : [mm.output])).filter((mm => !FT.includes(mm))))
    }
    const Tf = Object.values(PT).flatMap((mm => mm.recipes));
    mf(Tf.filter((mm => !0 !== mm.nuclear))), mf([...Tf.filter((mm => !0 === mm.nuclear)), ...Object.values(HT).flat()]);

    function ff(mm) {
      return null === mm.inputSlot && void 0 === mm.inputSlots && void 0 === mm.powerMade && void 0 === mm.fluidMade && !mm.treeCutter && void 0 === mm.table
    }

    function hf(mm) {
      return !0 === mm.treeCutter
    }
    const Af = ["Voltite Cell"];

    function af(mm) {
      var Tm, fm;
      return null !== (Tm = null === (fm = mm.fuels) || void 0 === fm ? void 0 : fm.some((mm => Af.includes(mm)))) && void 0 !== Tm && Tm
    }
    const xf = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Xm.Nc.map((mm => [mm, 8e3]))),
        ...Object.fromEntries(Xm.wd.map((mm => [mm, 2e3]))),
        "Voltite Cell": 12e4
      },
      wf = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Df = {
        "Uranium Deposit": 4e3
      };

    function Rf(mm) {
      var Tm;
      return null !== (Tm = Object.keys(wf).find((Tm => wf[Tm] === mm))) && void 0 !== Tm ? Tm : null
    }

    function pf(mm) {
      return bT.includes(mm)
    }

    function Ef(mm) {
      return !0 !== mm.nuclear || wm()
    }
    var of = fm(339);
    var Of = fm(9222),
      Yf = fm(9152),
      qf = fm(9231),
      jf = fm(9217);
    const Vf = "Reactor Controller",
      If = "Reactor Port",
      Kf = "Battery Cell",
      Qf = ["fuel", "water", "waste"],
      nf = {
        fuel: If,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Jf = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      zf = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Zf = "Reactor Frame",
      kf = "Reactor Glass",
      bf = {
        edge: [Zf],
        cap: [kf, If],
        wall: [kf, If],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [Vf]
      },
      Sf = {
        edge: [Kf],
        cap: [Kf],
        wall: [Kf],
        inside: [Kf],
        ctrl: [Kf]
      },
      ef = ["edge", "cap", "wall", "inside"],
      Nf = ["Reactor Slag"];

    function Gf(mm) {
      return Nf.includes(Xf(mm))
    }

    function Xf(mm) {
      const Tm = mm.indexOf("|");
      return Tm < 0 ? mm : mm.slice(0, Tm)
    }

    function Pf(mm) {
      return Xf(mm) === Vf ? "reactor" : null
    }

    function Hf(mm) {
      return Xf(mm) !== If ? null : mm.endsWith("|Water") ? "water" : mm.endsWith("|Waste") ? "waste" : "fuel"
    }

    function yf(mm) {
      const Tm = Hf(mm);
      return null === Tm ? null : sf(nf[Qf[(Qf.indexOf(Tm) + 1) % Qf.length]], function(mm) {
        return mm.includes(Cf)
      }(mm))
    }
    const Cf = "|meta|rot1|Formed",
      rf = new Set([Zf, kf, If]);

    function sf(mm, Tm) {
      var fm;
      const hm = Xf(mm);
      if (!rf.has(hm)) return mm;
      if (hm !== If) return Tm ? hm + Cf : hm;
      const Am = null !== (fm = Hf(mm)) && void 0 !== fm ? fm : "fuel";
      return Tm ? "fuel" === Am ? hm + Cf : `${hm}${Cf}|${"water"===Am?"Water":"Waste"}` : nf[Am]
    }

    function lf(mm, Tm) {
      const fm = xh(mm, Tm);
      if ("Air" === fm) return !1;
      const hm = "reactor" === mm ? bf : Sf;
      return ef.some((mm => hm[mm].includes(fm))) || "reactor" === mm && Nf.includes(fm)
    }

    function Mf(mm) {
      return zf[mm]
    }

    function uf(mm) {
      var Tm;
      return null !== (Tm = Jf[mm]) && void 0 !== Tm ? Tm : Jf[1]
    }

    function Bf(mm) {
      const [Tm, , fm] = uf(mm);
      return [fm, 0, -Tm]
    }

    function Lf(mm, Tm, fm, hm, Am, am) {
      return {
        ctrl: [mm[0], mm[1], mm[2]],
        rot: Jf[Tm] ? Tm : 1,
        w: fm,
        h: hm,
        d: Am,
        cu: am[0],
        cv: am[1]
      }
    }

    function vf(mm, Tm) {
      return "reactor" === mm ? [Math.floor((Tm - 1) / 2), 0] : [0, 0]
    }

    function tf(mm, Tm, fm, hm, Am) {
      let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mm.rot;
      if (fm === mm.w && hm === mm.h && Am === mm.d && am === mm.rot) return mm;
      const [xm] = vf(Tm, mm.w);
      if (mm.cu === xm && mm.cv <= 1) return Lf(mm.ctrl, am, fm, hm, Am, vf(Tm, fm));
      const wm = (mm, Tm) => Math.max(1, Math.min(Tm, mm));
      return Lf(mm.ctrl, am, fm, hm, Am, [wm(mm.cu, fm - 2), 0 === mm.cv ? 0 : wm(mm.cv, hm - 2)])
    }
    const Uf = 11,
      df = 2 * Uf + 1;
    new Uint8Array(df * df * df);

    function gf(mm) {
      return mm.w * mm.h * mm.d
    }

    function Wf(mm) {
      const Tm = Bf(mm.rot);
      return [mm.ctrl[0] - Tm[0] * mm.cu, mm.ctrl[1] - mm.cv, mm.ctrl[2] - Tm[2] * mm.cu]
    }

    function Ff(mm) {
      return mm.cv * mm.d * mm.w + mm.cu
    }

    function mh(mm, Tm) {
      const fm = Tm % mm.w,
        hm = Math.floor(Tm / mm.w) % mm.d;
      return [fm, Math.floor(Tm / (mm.w * mm.d)), hm]
    }

    function Th(mm, Tm) {
      const [fm, hm, Am] = mh(mm, Tm), am = Wf(mm), xm = uf(mm.rot), wm = Bf(mm.rot);
      return [am[0] + wm[0] * fm - xm[0] * Am, am[1] + hm, am[2] + wm[2] * fm - xm[2] * Am]
    }

    function fh(mm, Tm) {
      const fm = Wf(mm),
        hm = uf(mm.rot),
        Am = Bf(mm.rot),
        am = Tm[0] - fm[0],
        xm = Tm[2] - fm[2],
        wm = am * Am[0] + xm * Am[2],
        Dm = -(am * hm[0] + xm * hm[2]),
        im = Tm[1] - fm[1];
      return wm < 0 || wm >= mm.w || im < 0 || im >= mm.h || Dm < 0 || Dm >= mm.d ? -1 : (im * mm.d + Dm) * mm.w + wm
    }

    function hh(mm, Tm) {
      if (Tm === Ff(mm)) return "ctrl";
      const [fm, hm, Am] = mh(mm, Tm), am = 0 === hm || hm === mm.h - 1, xm = Number(0 === fm || fm === mm.w - 1) + Number(am) + Number(0 === Am || Am === mm.d - 1);
      return xm >= 2 ? "edge" : 1 === xm ? am ? "cap" : "wall" : "inside"
    }

    function Ah(mm, Tm) {
      const [fm, hm, Am] = mh(mm, Tm);
      return 0 === fm || fm === mm.w - 1 || 0 === hm || hm === mm.h - 1 || 0 === Am || Am === mm.d - 1 ? -1 : ((hm - 1) * (mm.d - 2) + (Am - 1)) * (mm.w - 2) + (fm - 1)
    }

    function ah(mm, Tm) {
      const fm = mm.w - 2,
        hm = mm.d - 2,
        Am = Tm % fm + 1,
        am = Math.floor(Tm / fm) % hm + 1;
      return ((Math.floor(Tm / (fm * hm)) + 1) * mm.d + am) * mm.w + Am
    }

    function xh(mm, Tm) {
      const fm = Xf(Tm);
      return "reactor" === mm && fm === Vf ? Zf : fm
    }

    function wh(mm, Tm, fm) {
      const hm = "ctrl" === Tm ? Xf(fm) : xh(mm, fm);
      return ("reactor" === mm ? bf : Sf)[Tm].includes(hm) ? "ok" : "Air" === hm ? "missing" : lf(mm, fm) ? "wrong" : "blocked"
    }

    function Dh(mm, Tm) {
      return "battery" === mm ? Kf : "inside" === Tm ? null : function(mm, Tm) {
        if ("inside" === Tm || "ctrl" === Tm || "battery" === mm) return null;
        return "edge" === Tm ? Zf : kf
      }(mm, Tm)
    }
    const ih = {
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
      Rh = "Collider",
      ph = "Laser",
      Eh = "Star Alloy",
      oh = "Glow Dust",
      Oh = [Rh, "_Collider Focus"];

    function Yh(mm) {
      return Oh.indexOf(Xf(mm))
    }

    function qh(mm) {
      return Xf(mm) === ph
    }

    function jh(mm) {
      return [
        [mm[0], mm[1], mm[2]],
        [mm[0], mm[1] + 1, mm[2]]
      ]
    }
    const Vh = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function Ih(mm, Tm, fm) {
      const hm = Vh[Tm];
      return [mm[0] + hm[0] * fm, mm[1], mm[2] + hm[2] * fm]
    }

    function Kh(mm, Tm) {
      if (Tm[1] !== mm[1]) return null;
      const fm = Tm[0] - mm[0],
        hm = Tm[2] - mm[2];
      if (0 !== fm === (0 !== hm)) return null;
      const Am = Math.abs(fm + hm);
      if (Am > ih.LASER_D) return null;
      return {
        dir: hm < 0 ? 0 : fm > 0 ? 1 : hm > 0 ? 2 : 3,
        Tp: Am
      }
    }

    function Qh(mm, Tm, fm) {
      const hm = Tm => Math.abs(mm[0] - Tm[0]) <= 1 && Math.abs(mm[1] - Tm[1]) <= 1;
      return hm(Tm) || hm(fm)
    }

    function nh(mm, Tm) {
      return function(mm, Tm, fm, hm) {
        return [0, 1, 2, 3].map((Am => {
          for (let am = 1; am <= ih.LASER_D; am++) {
            const xm = Ih(mm, Am, am);
            if (Qh([xm[0], xm[2]], Tm, fm) || !hm(xm)) return !1
          }
          return !0
        }))
      }(jh(mm)[1], Tm.spawnXZ, Tm.coreXZ, (mm => mm[1] >= Of.k && mm[1] < Of.k + Of.o && mm[0] >= Tm.minXZ[0] && mm[0] <= Tm.maxXZ[0] && mm[2] >= Tm.minXZ[1] && mm[2] <= Tm.maxXZ[1]))
    }
    const Jh = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function ch(mm) {
      return Math.max(48 + 16 * mm, jm(mm).machineAllowance)
    }
    const zh = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function Zh(mm) {
      const Tm = mm.split("|")[0];
      return zh.includes(Tm) ? "Solar Panel" : Tm === qf.c ? "Fluid Pipe" : Yh(Tm) >= 0 ? "Collider" : (fm = Tm, Jh.includes(fm) ? Tm : null);
      var fm
    }
    const kh = "buildAFactory2Game:solarPanelDescription";
    const bh = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function Sh(mm, Tm) {
      var fm;
      return null !== (fm = bh.find((fm => {
        var hm;
        return (null !== (hm = mm.level(fm)) && void 0 !== hm ? hm : 0) >= Tm
      }))) && void 0 !== fm ? fm : null
    }
    const eh = "buildAFactory2Game:";
    let Nh = null;
    const Gh = {
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
      Xh = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      Ph = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      Hh = {
        "Loot Chest": `${eh}lookRuinChestName`
      };

    function yh(mm) {
      return "object" === typeof mm && null !== mm && "translationKey" in mm && "string" === typeof mm.translationKey ? mm.translationKey : null
    }

    function Ch(mm, Tm) {
      var fm;
      return null !== (fm = yh(mm.displayName(Tm))) && void 0 !== fm ? fm : `item:${(0,Xm.ue)(Tm)}`
    }

    function rh(mm, Tm) {
      var fm, hm, Am, am;
      let xm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tm;
      if ("Solar Panel" === Zh(Tm)) return {
        name: yh(mm.displayName("Solar Panel")),
        detail: kh,
        detailItem: null
      };
      const Dm = Tm.endsWith(" Ore"),
        im = (Nh ??= new Set([...Object.keys((0, Yf.e)()), ...Object.keys((0, qf.r)())].map((mm => mm.split("|")[0]))), Nh).has(Tm),
        Rm = Dm || im ? null : function(mm) {
          var Tm;
          return mm.endsWith(" Log") && !mm.startsWith("Barkless ") ? "lookLog" : mm.endsWith(" Sapling") ? "lookSapling" : mm.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (Tm = Gh[mm]) && void 0 !== Tm ? Tm : null
        }(Tm);
      if (!mm.isBlock(Tm) || !Dm && !im && null === Rm) return null;
      const pm = null !== (fm = null !== (hm = Hh[Tm]) && void 0 !== hm ? hm : yh(null !== (Am = mm.displayName(xm)) && void 0 !== Am ? Am : mm.displayName(Tm))) && void 0 !== fm ? fm : `item:${(0,Xm.ue)(Tm)}`;
      if (null !== Rm) return {
        name: pm,
        detail: `${eh}${Rm}`,
        detailItem: null
      };
      const Em = null !== (am = Xh[Tm]) && void 0 !== am ? am : wm() ? Ph[Tm] : void 0;
      if (im && void 0 !== Em) return {
        name: pm,
        detail: `${eh}${Em}`,
        detailItem: null
      };
      const om = wf[Tm];
      if (void 0 !== om) return {
        name: pm,
        detail: `${eh}lookDeposit`,
        detailItem: Ch(mm, om)
      };
      const Om = mm.harvestLevel(Tm);
      if (Dm && "rock" === mm.harvestType(Tm) && 0 !== Om) {
        const Tm = Sh(mm, null !== Om && void 0 !== Om ? Om : 0);
        if (Tm === bh[0]) return {
          name: pm,
          detail: `${eh}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== Tm) return {
          name: pm,
          detail: `${eh}lookPickaxe`,
          detailItem: Ch(mm, Tm)
        }
      }
      return {
        name: pm,
        detail: yh(mm.description(Tm)),
        detailItem: null
      }
    }

    function sh(mm) {
      return mm < Of.k - 24
    }
    const lh = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const Mh = "Wrench",
      uh = "Nova Wrench";

    function Bh(mm) {
      return mm === Mh || mm === uh
    }
    const Lh = [...Of.F, "Belt Lift", "Belt Drop"];
    const vh = ["Belt Lift", "Belt Drop"],
      th = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function Uh(mm) {
      return mm.split("|")[0]
    }

    function dh(mm) {
      const Tm = /\|rot(\d)/.exec(mm);
      return Tm ? Number(Tm[1]) : 1
    }

    function gh(mm) {
      return mm % 4 + 1
    }

    function Wh(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === Tm && "" === fm ? mm : `${mm}|meta|rot${Tm}${fm}`
    }

    function Fh(mm) {
      return Uh(mm) === Of.s ? (0, Of.L)(mm) ? "gateRight" : "gateLeft" : (0, Of.N)(mm)
    }

    function mA(mm) {
      const Tm = Uh(mm),
        fm = dh(mm);
      if (Of.F.includes(Tm)) return (0, Of.I)(Tm, gh(fm), null);
      if (Tm === Of.e) return (0, Of.Q)(gh(fm), (0, Of.M)(mm));
      if (Tm === Of.w) {
        const hm = th[(0, Of.N)(mm)];
        return null === hm ? Wh(Tm, gh(fm)) : Wh(Tm, fm, Of.z[hm])
      }
      return Tm === Of.s ? (0, Of.L)(mm) ? Wh(Tm, gh(fm)) : Wh(Tm, fm, Of.j) : jf.d.includes(Tm) && !vh.includes(Tm) || pf(Tm) ? Wh(Tm, gh(fm)) : null
    }

    function TA(mm) {
      return jf.d.includes(mm) || pf(mm) || null !== Zh(mm)
    }

    function fA(mm) {
      return "Solar Panel" === Zh(mm)
    }
    const hA = "buildAFactory2Game:",
      AA = {
        leftFront: `${hA}lookSplitDetail_leftFront`,
        frontRight: `${hA}lookSplitDetail_frontRight`,
        gateRight: `${hA}lookGateDetail_gateRight`
      };

    function aA(mm, Tm) {
      var fm;
      let hm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Am = Fh(mm),
        am = null === Am ? null : `${hA}${Am.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Am}`,
        xm = null === Am ? null : null !== (fm = AA[Am]) && void 0 !== fm ? fm : null;
      if (Bh(Tm) && hm) {
        const fm = Uh(mm);
        return Tm === uh && wm() && function(mm) {
          return Lh.includes(Uh(mm))
        }(mm) ? {
          mode: am,
          detail: xm,
          next: `${hA}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: am,
          detail: xm,
          next: TA(fm) && !fA(fm) ? `${hA}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const Dm = Bh(Tm) ? mA(mm) : null;
      if (null === Dm) return {
        mode: am,
        detail: xm,
        next: null,
        nextState: null
      };
      const im = Fh(Dm);
      return null === im || dh(Dm) !== dh(mm) ? {
        mode: am,
        detail: xm,
        next: `${hA}lookWrenchTurn`,
        nextState: null
      } : {
        mode: am,
        detail: xm,
        next: `${hA}lookWrenchNext`,
        nextState: `${hA}lookWrenchState_${im}`
      }
    }
    const xA = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const wA = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function DA(mm) {
      return [0, 1, 2, 3].map((Tm => 0 !== (mm & 1 << Tm)))
    }

    function iA(mm) {
      const Tm = [];
      for (let fm = 8; fm + 2 < mm.length; fm += 3) Tm.push([mm[fm], mm[fm + 1], mm[fm + 2]]);
      return {
        focus: [mm[0], mm[1], mm[2]],
        lasers: DA(mm[3]),
        open: DA(mm[4]),
        live: DA(mm[5]),
        on: 1 === mm[6],
        state: wA[mm[7]],
        blockers: Tm
      }
    }
    const RA = "Arc Caster",
      pA = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      EA = (Object.values(pA), "Jet Chestplate"),
      oA = "Nova Jet Chestplate",
      OA = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      YA = Object.values(OA);

    function qA(mm, Tm, fm) {
      return Math.min(function(mm) {
        return wm() && pm(mm) >= 5 ? 20 : 10
      }(fm), Math.floor(function(mm, Tm) {
        return Math.max(0, mm) + (wm() ? Math.max(0, Tm) : 0)
      }(mm, Tm) / 5))
    }

    function jA(mm, Tm, fm) {
      const hm = qA(Tm, fm, mm),
        Am = pm(mm),
        am = (Am >= 3 ? 55 : Am >= 1 ? 50 : mm >= 8 ? 45 : 30) + hm,
        xm = Math.max(100 + hm, 2 * am);
      return {
        arcDamage: am,
        arcPierce: mm >= 7 ? 2 : 1,
        arcChain: mm >= 10,
        barrierMax: (Am >= 4 ? 100 : Am >= 2 ? 90 : mm >= 9 ? 80 : mm >= 6 ? 60 : 40) + 5 * hm,
        barrierRegenPerS: Am >= 5 ? 20 : mm >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * hm,
        novaShieldRegenPerS: 32,
        bladeDamage: xm,
        bladePunch: Math.round(.5 * xm),
        forgeRank: hm
      }
    }
    const VA = {
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
    var IA = fm(36930),
      KA = fm(36689),
      QA = fm(36686),
      nA = fm(23),
      JA = fm(1635),
      cA = fm(1080),
      zA = fm.n(cA);

    function ZA(mm) {
      return !0 === mm.field
    }
    const kA = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function bA(mm) {
      return kA.has(mm) ? `buildAFactory2Game:itemPlural_${(0,Xm.ue)(mm)}` : null
    }
    var SA = fm(1208),
      eA = fm(1089),
      NA = fm(1893),
      GA = fm(1884),
      XA = fm(36919),
      PA = fm(36926),
      HA = fm(31),
      yA = fm(36912);
    const CA = "baf2QuestView",
      rA = "baf2PlayerY",
      sA = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class lA {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = mm, this.view = {
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
      set(mm, Tm) {
        var fm, hm, Am, am, xm, wm, Dm, im;
        const Rm = JSON.stringify(mm.baf2QuestName) === JSON.stringify(this.view.name),
          pm = new Set(this.view.rows.filter((mm => mm.done)).map((mm => mm.id))),
          Em = new Set(this.view.rows.filter((mm => mm.justFinished)).map((mm => mm.id))),
          om = mm.baf2QuestSide,
          Om = null !== om && !0 === mm.baf2QuestSideFocus;
        let Ym = !1,
          qm = 0;
        const jm = mm.baf2QuestSteps.map((mm => {
            const Tm = dA(mm, sA.has(mm[0]) ? mm[0] : "" + qm++),
              fm = Rm && Tm.done && !pm.has(Tm.id);
            return Tm.justFinished = fm || Rm && Tm.done && Em.has(Tm.id), Ym ||= fm, Tm
          })),
          Vm = UA(jm);
        Vm >= 0 && !Om && (jm[Vm].current = !0);
        const Im = !Rm && null !== mm.baf2QuestName,
          Km = JSON.stringify(om && [om[0], om[1]]),
          Qm = Km === JSON.stringify(null !== (fm = null === (hm = this.view.side) || void 0 === hm ? void 0 : hm.name) && void 0 !== fm ? fm : null),
          nm = null !== om && !this.sidesSeen.has(Km);
        nm && this.sidesSeen.add(Km), this.serverTutorial = null !== (Am = mm.baf2QuestTutorial) && void 0 !== Am ? Am : "on", (null !== (am = mm.baf2QuestTutorialSeq) && void 0 !== am ? am : 0) >= this.pickSeq && this.endPick();
        const Jm = !Rm || !Qm || mm.baf2QuestTier !== this.view.tier;
        this.view = {
          name: mm.baf2QuestName,
          rows: jm,
          reward: mm.baf2QuestReward,
          goal: mm.baf2QuestGoal,
          pulse: this.view.pulse + (Ym || Im ? 1 : 0),
          itemNames: Tm,
          side: om && {
            name: [om[0], om[1]],
            row: {
              ...dA(om[2], "side"),
              current: Om
            },
            goal: null !== (xm = om[3]) && void 0 !== xm ? xm : null
          },
          sideCameUpAt: nm ? Date.now() : this.view.sideCameUpAt,
          tier: mm.baf2QuestTier,
          core: mm.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (wm = mm.baf2QuestAlso) && void 0 !== wm ? wm : [],
          depth: null !== (Dm = mm.baf2QuestDepth) && void 0 !== Dm ? Dm : null,
          tutorial: null !== (im = this.pickedTutorial) && void 0 !== im ? im : this.serverTutorial,
          tutorialKnown: !0
        }, this.gp(), Ym && this.scheduleClear(), Jm && this.requestBook()
      }
      setTutorial(mm) {
        return this.endPick(), this.pickedTutorial = mm, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.gp()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: mm
        }, this.gp(), this.pickSeq
      }
      onPlayerY(mm) {
        const Tm = Math.floor(mm);
        Tm !== this.playerY && (this.playerY = Tm, this.view.depth && HA.j.gp(rA, Tm))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(mm) {
        this.view = {
          ...this.view,
          chapters: mm.baf2BookChapters
        }, this.gp()
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
            rows: this.view.rows.map((mm => mm.justFinished ? {
              ...mm,
              justFinished: !1
            } : mm))
          }, this.gp()
        }), 2400)
      }
      gp() {
        HA.j.gp(CA, this.view, !0)
      }
    }

    function MA(mm, Tm) {
      return mm.sideCameUpAt > 0 && Tm - mm.sideCameUpAt < 2400
    }

    function uA(mm) {
      return (null === mm.name || BA(mm)) && null === mm.side && null !== mm.chapters
    }

    function BA(mm) {
      var Tm;
      return "quest_forgeOngoing" === (null === (Tm = mm.name) || void 0 === Tm ? void 0 : Tm[0])
    }

    function LA(mm) {
      return mm.filter((mm => !sA.has(mm.key)))
    }

    function vA(mm) {
      return mm.key.startsWith("stepCraft")
    }

    function tA(mm, Tm) {
      const fm = new Set,
        hm = mm.side ? [...mm.rows, mm.side.row] : mm.rows;
      for (const am of hm)
        if (!am.done) {
          !am.item || Tm && !vA(am) || fm.add(am.item);
          for (const [mm, Tm, hm] of null !== (Am = am.chips) && void 0 !== Am ? Am : []) {
            var Am;
            Tm < hm && fm.add(mm)
          }
        } return fm
    }

    function UA(mm) {
      const Tm = mm.findIndex((mm => !mm.done && !mm.away));
      return Tm >= 0 ? Tm : mm.findIndex((mm => !mm.done))
    }

    function dA(mm, Tm) {
      let [fm, hm, Am, am, xm, wm, Dm, im, Rm, pm] = mm;
      return {
        id: Tm,
        key: fm,
        params: hm,
        item: Am,
        amount: am,
        total: xm,
        done: wm,
        chips: null !== Dm && void 0 !== Dm ? Dm : null,
        current: !1,
        away: !0 === im,
        madeFor: null !== Rm && void 0 !== Rm ? Rm : [],
        also: null !== pm && void 0 !== pm ? pm : [],
        justFinished: !1
      }
    }
    const gA = "baf2QuestItems",
      WA = new Set;
    let FA = new Set,
      ma = null;

    function Ta(mm) {
      const Tm = Gm(mm.tutorial),
        fm = Tm ? tA(mm, !0) : WA;
      "inventory" === nA.c.get("openInGameMenuName") ? (ma = null, (0, yA.y)(fm)) : ma = fm;
      const hm = Tm ? tA(mm, !1) : WA;
      (0, PA.d)(hm, FA) || (FA = hm, HA.j.gp(gA, FA))
    }

    function fa() {
      return (0, XA.d)(gA, (() => FA))
    }
    var ha = fm(34308),
      Aa = fm(3301);

    function aa(mm) {
      const Tm = (0, Aa.c)(mm),
        fm = void 0 === Tm ? void 0 : (0, ha.displayNameOf)(Tm);
      return "object" === typeof fm && null !== fm && "translationKey" in fm && "string" === typeof fm.translationKey ? fm.translationKey : `item:${(0,Xm.ue)(mm)}`
    }

    function xa(mm, Tm) {
      return mm(aa(Tm))
    }
    const wa = [{
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

    function Da(mm, Tm) {
      return [`Deposit Seed (${mm})`, {
        item: wf[`${mm} Deposit`],
        amount: Tm
      }]
    }
    const ia = Object.fromEntries([Da("Coal", 8), Da("Iron", 8), Da("Copper", 8), Da("Gold", 6), Da("Voltite", 4), Da("Uranium", 4)]),
      Ra = "Relay Coil",
      pa = new Map;

    function Ea(mm) {
      let Tm = pa.get(mm);
      if (!Tm) {
        const fm = Math.max(1, mm);
        Tm = wa.filter((mm => {
          var Tm;
          return fm >= mm.fromTier && fm <= (null !== (Tm = mm.untilTier) && void 0 !== Tm ? Tm : 1 / 0)
        })).map((mm => mm.later && fm >= mm.later.tier ? {
          ...mm,
          weight: mm.later.weight
        } : mm)), pa.set(mm, Tm)
      }
      return Tm
    }

    function oa(mm) {
      return Ea(mm).some((mm => {
        let {
          item: Tm
        } = mm;
        return Tm === Ra
      }))
    }

    function Oa(mm) {
      return mm.startsWith("Deposit Seed (")
    }

    function Ya(mm, Tm) {
      const fm = Ea(mm);
      return Tm ? fm.filter((mm => Tm(mm.item))) : fm
    }

    function qa(mm) {
      return mm.reduce(((mm, Tm) => mm + Tm.weight), 0)
    }

    function ja(mm, Tm) {
      const fm = Ya(mm, Tm),
        hm = qa(fm);
      return fm.map((mm => ({
        find: mm,
        chance: mm.weight / hm
      })))
    }
    const Va = 6e4,
      Ia = new Intl.NumberFormat("en-US");

    function Ka(mm, Tm) {
      const fm = mm >= 10 ? Math.round(mm) : Math.round(10 * mm) / 10;
      return 0 === fm ? "0" : `${Tm}${Ia.format(fm)}`
    }

    function Qa(mm) {
      return mm < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? Ia.format(mm) : mm < 1e6 ? `${mm<1e5?Math.floor(mm/100)/10:Math.floor(mm/1e3)}k` : Math.floor(mm / 1e5) / 10 + "M"
    }

    function na(mm) {
      return mm < 0 ? "\u2212" + -mm : String(mm)
    }

    function Ja(mm, Tm) {
      const fm = Math.max(1, Math.round(Tm));
      if (fm < 60) return mm("buildAFactory2Game:durationSeconds", {
        seconds: String(fm)
      });
      const hm = Math.round(fm / 60);
      if (hm < 60) return mm("buildAFactory2Game:durationMinutes", {
        minutes: String(hm)
      });
      const Am = String(Math.floor(hm / 60));
      return hm % 60 === 0 ? mm("buildAFactory2Game:durationWholeHours", {
        hours: Am
      }) : mm("buildAFactory2Game:durationHours", {
        hours: Am,
        minutes: String(hm % 60)
      })
    }
    var ca = fm(2457);
    const za = "(max-height: 420px), (max-width: 650px)";

    function Za() {
      return (0, ca.c)(za)
    }
    var ka = fm(1135);

    function ba(mm, Tm) {
      return null !== mm && mm > Tm + 1
    }

    function Sa(mm) {
      const Tm = 100 * mm;
      return String(Tm <= 0 || Tm >= 1 ? Math.round(Tm) : Math.max(.1, Math.round(10 * Tm) / 10))
    }

    function ea(mm) {
      let {
        item: Tm,
        amount: fm
      } = mm;
      return (0, ka.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, ka.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, ka.jsx)(NA.d, {
            itemName: Tm,
            amount: 0
          })
        }), fm > 1 && (0, ka.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", fm]
        })]
      })
    }

    function Na(mm) {
      let {
        label: Tm,
        names: fm
      } = mm;
      const [Am, am] = (0, hm.useState)(!1), xm = fm.join(" / ");
      return (0, ka.jsxs)(ka.Fragment, {
        children: [(0, ka.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: xm,
          "aria-expanded": Am,
          onClick: () => {
            am(!Am)
          },
          children: Tm
        }), Am && (0, ka.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: xm
        })]
      })
    }

    function Ga(mm) {
      let {
        tier: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)(), {
        key: hm,
        params: Am
      } = om(Tm, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), am = fm(`buildAFactory2Game:${hm}`, Am);
      return (0, ka.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, ka.jsx)(eA.c, {
          name: "lock"
        }), am]
      })
    }
    const Xa = (0, hm.createContext)(null);

    function Pa() {
      const {
        t: mm
      } = (0, SA.A)(), Tm = (0, hm.useContext)(Xa);
      return (0, hm.useEffect)((() => null === Tm || void 0 === Tm ? void 0 : Tm()), [Tm]), (0, ka.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: mm("buildAFactory2Game:recipeForQuest"),
        "aria-label": mm("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function Ha(mm) {
      let {
        title: Tm,
        count: fm,
        children: Am,
        startOpen: am = !0
      } = mm;
      const {
        t: xm
      } = (0, SA.A)(), [wm, Dm] = (0, hm.useState)((() => am && !Za())), [im, Rm] = (0, hm.useState)(0), pm = (0, hm.useCallback)((() => (Rm((mm => mm + 1)), () => {
        Rm((mm => mm - 1))
      })), []);
      return (0, ka.jsxs)("div", {
        className: zA()("Baf2Recipes", {
          Open: wm
        }),
        children: [(0, ka.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            Dm(!wm)
          },
          "aria-expanded": wm,
          children: [xm("buildAFactory2Game:recipesToggle", {
            title: Tm,
            count: String(fm)
          }), (0, ka.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: wm ? "\u25be" : "\u25b8"
          })]
        }), wm && (0, ka.jsxs)(Xa.Provider, {
          value: pm,
          children: [(0, ka.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Am
          }), im > 0 && (0, ka.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, ka.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), xm("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const ya = "buildAFactory2Game:",
      Ca = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const ra = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      sa = {
        "Uranium Grit": am,
        "Raw Uranium": am
      };

    function la(mm) {
      var Tm;
      return null !== (Tm = sa[mm]) && void 0 !== Tm ? Tm : Math.max(gm(mm), ra[mm] ? gm(ra[mm]) : 1, function(mm) {
        const Tm = Am.findIndex((Tm => Tm.cost.some((Tm => Tm.item === mm))));
        return Tm > am ? Tm : 1
      }(mm))
    }

    function Ma(mm, Tm) {
      return ua(Tm) ? la(Tm) : function(mm) {
        if (Ca.has(mm)) return 1;
        const Tm = Am.findIndex((Tm => Tm.newDeposits.some((Tm => {
          let {
            block: fm
          } = Tm;
          return fm === mm
        }))));
        return Tm < 0 ? 1 : Tm + 1
      }(mm)
    }

    function ua(mm) {
      return mm in sa || pm(la(mm)) > 0
    }

    function Ba(mm, Tm) {
      return WT(mm, {
        coupled: !1,
        taught: null,
        atomic: wm() && Tm >= 11
      }).recipes
    }

    function La(mm, Tm) {
      const fm = Em(mm, Tm, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pm(mm) > 0);
      return "open" === fm || "locked" === fm
    }

    function va(mm, Tm) {
      return mm.map(((mm, fm) => ({
        value: mm,
        idx: fm,
        tier: Tm(mm)
      }))).sort(((mm, Tm) => mm.tier - Tm.tier || mm.idx - Tm.idx)).map((mm => {
        let {
          value: Tm
        } = mm;
        return Tm
      }))
    }

    function ta(mm, Tm, fm) {
      const hm = Em(mm, Tm);
      if ("hidden" === hm || "open" === hm) return null;
      if ("teaser" === hm) return {
        tag: {
          translationKey: `${ya}${fm?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${ya}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Am = om(mm, {
          tier: fm ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        am = om(mm, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${ya}${Am.key}`,
          params: Am.params
        },
        reason: {
          translationKey: `${ya}${am.key}`,
          params: am.params
        }
      }
    }

    function Ua(mm) {
      return !Oa(mm)
    }

    function da(mm) {
      let {
        seconds: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)();
      return (0, ka.jsx)(Ha, {
        title: fm("buildAFactory2Game:recipesCuts", {
          seconds: Tm
        }),
        count: 1,
        children: (0, ka.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, ka.jsx)(ea, {
            item: "Maple Sapling",
            amount: 1
          }), (0, ka.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, ka.jsx)(ea, {
            item: "Maple Log",
            amount: 1
          }), (0, ka.jsx)("span", {
            className: "Baf2RecipeName",
            children: fm("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function ga(mm) {
      let {
        fertilised: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)();
      return (0, ka.jsxs)(Ha, {
        title: fm("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, ka.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, ka.jsx)(ea, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, ka.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, ka.jsx)(ea, {
            item: "Wheat",
            amount: 1
          }), (0, ka.jsx)(ea, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, ka.jsx)("span", {
            className: "Baf2RecipeName",
            children: fm("buildAFactory2Game:recipeField")
          })]
        }), (0, ka.jsxs)("li", {
          className: zA()("Baf2Recipe", {
            InUse: Tm
          }),
          children: [(0, ka.jsx)(ea, {
            item: "Fertiliser",
            amount: 1
          }), (0, ka.jsx)("span", {
            className: "Baf2RecipeName",
            children: fm("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function Wa(mm) {
      let {
        tier: Tm,
        seconds: fm
      } = mm;
      const {
        t: hm
      } = (0, SA.A)(), Am = function(mm) {
        return mm >= 5 ? JT : nT
      }(Tm);
      return (0, ka.jsx)(Ha, {
        title: hm("buildAFactory2Game:recipesBringsUp", {
          seconds: fm
        }),
        count: Am.length,
        children: Am.map((mm => {
          let {
            item: Tm,
            chance: fm
          } = mm;
          return (0, ka.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, ka.jsx)(ea, {
              item: Tm,
              amount: 1
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeName",
              children: xa(hm, Tm)
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: hm("buildAFactory2Game:recipeChance", {
                percent: Sa(fm)
              })
            })]
          }, Tm)
        }))
      })
    }

    function Fa(mm) {
      let {
        tier: Tm,
        seconds: fm,
        noSeeds: hm
      } = mm;
      const {
        t: Am
      } = (0, SA.A)(), am = fa(), xm = ja(Tm, hm ? Ua : void 0), wm = hm && ja(Tm).length > xm.length, Dm = oa(Tm);
      return (0, ka.jsxs)(Ha, {
        title: Am("buildAFactory2Game:recipesRecycles", {
          seconds: fm
        }),
        count: xm.length,
        children: [xm.map((mm => {
          let {
            find: Tm,
            chance: fm
          } = mm;
          return (0, ka.jsxs)("li", {
            className: "Baf2Recipe",
            children: [am.has(Tm.item) && (0, ka.jsx)(Pa, {}), (0, ka.jsx)(ea, {
              item: Tm.item,
              amount: Tm.amount
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeName",
              children: xa(Am, Tm.item)
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Am("buildAFactory2Game:recipeChance", {
                percent: Sa(fm)
              })
            })]
          }, Tm.item)
        })), wm && (0, ka.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, ka.jsx)("span", {
            className: "Baf2RecipeName",
            children: Am("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), Dm && (0, ka.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, ka.jsx)("span", {
            className: "Baf2RecipeName",
            children: Am("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function mx(mm) {
      let {
        tier: Tm,
        seconds: fm
      } = mm;
      const {
        t: hm
      } = (0, SA.A)(), Am = Object.entries(ia).filter((mm => {
        let [, {
          item: fm
        }] = mm;
        return La(la(fm), Tm, ua(fm))
      }));
      return (0, ka.jsx)(Ha, {
        title: hm("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: fm
        }),
        count: Am.length,
        children: Am.map((mm => {
          let [Tm, {
            item: fm,
            amount: Am
          }] = mm;
          return (0, ka.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, ka.jsx)(ea, {
              item: Tm,
              amount: 1
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, ka.jsx)(ea, {
              item: fm,
              amount: Am
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeName",
              children: xa(hm, fm)
            })]
          }, Tm)
        }))
      })
    }

    function Tx(mm) {
      let {
        tier: Tm,
        seconds: fm
      } = mm;
      const {
        t: hm
      } = (0, SA.A)(), Am = fa(), am = va(Object.entries(wf).filter((mm => {
        let [fm, hm] = mm;
        return La(Ma(fm, hm), Tm, ua(hm))
      })), (mm => {
        let [Tm, fm] = mm;
        return Ma(Tm, fm)
      }));
      return (0, ka.jsx)(Ha, {
        title: hm("buildAFactory2Game:recipesDigs", {
          seconds: fm
        }),
        count: am.length,
        children: am.map((mm => {
          let [fm, am] = mm;
          const xm = Ma(fm, am),
            wm = xm > Tm ? xm : null,
            Dm = Df[fm],
            im = null === wm && Am.has(am);
          return (0, ka.jsxs)("li", {
            className: zA()("Baf2Recipe", {
              Locked: null !== wm,
              Far: ba(wm, Tm)
            }),
            children: [im && (0, ka.jsx)(Pa, {}), (0, ka.jsx)(ea, {
              item: fm,
              amount: 1
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, ka.jsx)(ea, {
              item: am,
              amount: 1
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeName",
              children: xa(hm, am)
            }), void 0 !== Dm && (0, ka.jsx)("span", {
              className: "Baf2RecipeMore",
              children: hm("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / Dm)
              })
            }), null !== wm && (0, ka.jsx)(Ga, {
              tier: wm
            })]
          }, fm)
        }))
      })
    }

    function fx(mm) {
      var Tm;
      let {
        def: fm,
        seconds: hm
      } = mm;
      const {
        t: Am
      } = (0, SA.A)();
      return (0, ka.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, ka.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (Tm = fm.fuels) && void 0 !== Tm ? Tm : []).map((mm => (0, ka.jsx)(ea, {
            item: mm,
            amount: 1
          }, mm))), (0, ka.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, ka.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, ka.jsx)(eA.c, {
              name: "bolt"
            }), Am("buildAFactory2Game:recipePower", {
              power: Wm(fm.powerMade),
              seconds: hm
            })]
          })]
        })
      })
    }

    function hx(mm) {
      let {
        def: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)();
      return (0, ka.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, ka.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, ka.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, ka.jsx)(eA.c, {
              name: "bolt"
            }), fm("buildAFactory2Game:recipeMixer", {
              cryo: Ka((0, Fm.E)(Tm, Tm.cryoMade), "")
            })]
          })
        })
      })
    }

    function Ax(mm) {
      let {
        def: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)();
      return (0, ka.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, ka.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, ka.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, ka.jsx)(eA.c, {
              name: "bolt"
            }), fm("buildAFactory2Game:recipeCondenser", {
              power: Ka((0, Fm.E)(Tm, Tm.powerPerOp), ""),
              water: Ka((0, Fm.E)(Tm, Tm.fluidMade), "")
            })]
          })
        })
      })
    }

    function ax(mm) {
      let {
        kind: Tm,
        def: fm,
        input: hm,
        tier: Am,
        noSeeds: am = !1
      } = mm;
      const xm = String(fm.opMs / 1e3);
      return hf(fm) ? (0, ka.jsx)(da, {
        seconds: xm
      }) : fm.field ? (0, ka.jsx)(ga, {
        fertilised: null !== hm
      }) : fm.table ? (0, ka.jsx)(Wa, {
        tier: Am,
        seconds: xm
      }) : fm.recycles ? (0, ka.jsxs)(ka.Fragment, {
        children: [(0, ka.jsx)(Fa, {
          tier: Am,
          seconds: xm,
          noSeeds: am
        }), (0, ka.jsx)(mx, {
          tier: Am,
          seconds: xm
        })]
      }) : ff(fm) ? (0, ka.jsx)(Tx, {
        tier: Am,
        seconds: xm
      }) : void 0 !== fm.fluidMade ? (0, ka.jsx)(Ax, {
        def: fm
      }) : void 0 !== fm.cryoMade ? (0, ka.jsx)(hx, {
        def: fm
      }) : void 0 !== fm.powerMade ? (0, ka.jsx)(fx, {
        def: fm,
        seconds: xm
      }) : (0, ka.jsx)(xx, {
        kind: Tm,
        input: hm,
        tier: Am,
        seconds: xm
      })
    }

    function xx(mm) {
      let {
        kind: Tm,
        input: fm,
        tier: hm,
        seconds: Am
      } = mm;
      const {
        t: am
      } = (0, SA.A)(), xm = fa(), wm = va(function(mm) {
        const Tm = new Map;
        for (const Am of mm) {
          var fm, hm;
          const mm = [Am.output, Am.outputAmount, Am.inputAmount, null === (fm = Am.bonus) || void 0 === fm ? void 0 : fm.item, null === (hm = Am.bonus) || void 0 === hm ? void 0 : hm.chance].join("|"),
            am = Tm.get(mm);
          am ? am.inputs.push(Am.input) : Tm.set(mm, {
            inputs: [Am.input],
            inputAmount: Am.inputAmount,
            output: Am.output,
            outputAmount: Am.outputAmount,
            bonus: Am.bonus
          })
        }
        return [...Tm.values()]
      }(Ba(Tm, hm).filter(Ef)), (mm => la(mm.output))).filter((mm => La(la(mm.output), hm, ua(mm.output))));
      return (0, ka.jsx)(Ha, {
        title: am("buildAFactory2Game:recipesEach", {
          seconds: Am
        }),
        count: wm.length,
        children: wm.map((mm => {
          const Tm = null !== fm && mm.inputs.includes(fm),
            Am = mm.inputs.length > 3 ? [Tm ? fm : mm.inputs[0]] : mm.inputs,
            wm = la(mm.output) > hm ? la(mm.output) : null,
            Dm = null === wm && xm.has(mm.output);
          return (0, ka.jsxs)("li", {
            className: zA()("Baf2Recipe", {
              InUse: Tm,
              Locked: null !== wm,
              Far: ba(wm, hm)
            }),
            children: [Dm && (0, ka.jsx)(Pa, {}), Am.map(((Tm, fm) => (0, ka.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [fm > 0 && (0, ka.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, ka.jsx)(ea, {
                item: Tm,
                amount: mm.inputAmount
              })]
            }, Tm))), Am.length < mm.inputs.length && (0, ka.jsx)(Na, {
              label: am("buildAFactory2Game:recipeMore", {
                count: String(mm.inputs.length - Am.length)
              }),
              names: mm.inputs.filter((mm => !Am.includes(mm))).map((mm => xa(am, mm)))
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, ka.jsx)(ea, {
              item: mm.output,
              amount: mm.outputAmount
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeName",
              children: xa(am, mm.output)
            }), mm.bonus && (0, ka.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [am("buildAFactory2Game:recipeBonus", {
                percent: Sa(mm.bonus.chance)
              }), (0, ka.jsx)(ea, {
                item: mm.bonus.item,
                amount: 1
              })]
            }), null !== wm && (0, ka.jsx)(Ga, {
              tier: wm
            })]
          }, `${mm.output}|${mm.inputs[0]}`)
        }))
      })
    }

    function wx(mm) {
      let {
        taught: Tm,
        tier: fm
      } = mm;
      const {
        t: hm
      } = (0, SA.A)(), Am = fa(), am = va(Object.values(dT), (mm => mm.tier)).filter((mm => La(mm.tier, fm)));
      return (0, ka.jsx)(Ha, {
        title: hm("buildAFactory2Game:benchCanMake"),
        count: am.length,
        startOpen: !1,
        children: am.map((mm => {
          const am = mm.tier > fm,
            xm = !am && Am.has(mm.output);
          return (0, ka.jsxs)("li", {
            className: zA()("Baf2Recipe", {
              InUse: mm.output === Tm,
              Locked: am,
              Far: ba(am ? mm.tier : null, fm)
            }),
            children: [xm && (0, ka.jsx)(Pa, {}), (0, ka.jsx)(ea, {
              item: mm.output,
              amount: mm.outputAmount
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeName",
              children: xa(hm, mm.output)
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), mm.inputs.map((mm => (0, ka.jsx)(ea, {
              item: mm.item,
              amount: mm.amount
            }, mm.item))), am && (0, ka.jsx)(Ga, {
              tier: mm.tier
            })]
          }, mm.output)
        }))
      })
    }
    var Dx, ix, Rx, px, Ex;
    const ox = PT.Generator,
      Ox = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      Yx = 1e3 * (null !== (Dx = ox.powerMade) && void 0 !== Dx ? Dx : 0) / ox.opMs,
      qx = Math.min(...(null !== (ix = ox.fuels) && void 0 !== ix ? ix : []).map((mm => xf[mm]))) / 1e3,
      jx = PT["Volt Engine"],
      Vx = 1e3 * (null !== (Rx = jx.powerMade) && void 0 !== Rx ? Rx : 0) / jx.opMs,
      Ix = xf[null !== (px = null === (Ex = jx.fuels) || void 0 === Ex ? void 0 : Ex[0]) && void 0 !== px ? px : ""] / 1e3;

    function Kx(mm) {
      let {
        item: Tm,
        label: fm,
        value: hm,
        note: Am,
        dim: am
      } = mm;
      return (0, ka.jsxs)("li", {
        className: zA()("Baf2PowerRow", {
          Dim: am
        }),
        children: [(0, ka.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, ka.jsx)(NA.d, {
            itemName: Tm,
            amount: 0
          })
        }), (0, ka.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, ka.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: fm
          }), Am && (0, ka.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Am
          })]
        }), (0, ka.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: hm
        })]
      })
    }

    function Qx(mm, Tm, fm, hm) {
      var Am;
      const am = void 0 === hm ? PT[mm] : function(mm, Tm) {
          if (null === Tm) return mm;
          let fm = tm.get(Tm);
          return fm || (fm = {
            ...mm,
            powerPerOp: Lm(mm, Tm),
            farmMob: Tm
          }, tm.set(Tm, fm)), fm
        }(PT[mm], hm),
        xm = Tm && am.couplable ? uT(am, fm) : am;
      return 1e3 * (null !== (Am = xm.powerPerOp) && void 0 !== Am ? Am : 0) / xm.opMs
    }

    function nx(mm) {
      var Tm, fm, hm, Am, am, xm, wm, Dm;
      let {
        message: im
      } = mm;
      const {
        t: Rm
      } = (0, SA.A)(), pm = (mm, Tm) => Rm("buildAFactory2Game:powerPerSecond", {
        rate: Ka(mm, Tm)
      }), [Em, om] = im.baf2PowerGenerators, Om = im.baf2PowerGeneratorFuel, Ym = im.baf2PowerSunPanels, qm = null !== (Tm = im.baf2PowerSunShare) && void 0 !== Tm ? Tm : 1, jm = im.baf2PowerVaults, Vm = im.baf2PowerUsers, [Im, Km] = null !== (fm = im.baf2PowerEngines) && void 0 !== fm ? fm : [0, 0], Qm = null !== (hm = im.baf2PowerEngineCells) && void 0 !== hm ? hm : 0, nm = null !== (Am = im.baf2PowerPads) && void 0 !== Am ? Am : 0, Jm = null !== (am = im.baf2PowerCharge) && void 0 !== am ? am : 0, [cm, zm] = null !== (xm = im.baf2PowerReactors) && void 0 !== xm ? xm : [0, 0], [Zm, km] = null !== (wm = im.baf2PowerBatteries) && void 0 !== wm ? wm : [0, 0];
      let bm = Rm("buildAFactory2Game:powerEngineCells", {
        amount: String(Qm)
      });
      Qm > 0 && Km > 0 && (bm = Rm("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(Qm),
        time: Ja(Rm, Qm * Ix / Km)
      }));
      let Sm = Rm("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(Om)
      });
      Om > 0 && om > 0 && (Sm = Rm("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(Om),
        time: Ja(Rm, Om * qx / om)
      }));
      const em = Em + Im + Ym + cm;
      return (0, ka.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, ka.jsxs)("section", {
          children: [(0, ka.jsxs)("h3", {
            children: [Rm("buildAFactory2Game:powerMaking"), (0, ka.jsx)("span", {
              children: pm(im.baf2PowerMadePerS, "+")
            })]
          }), (0, ka.jsxs)("ul", {
            children: [0 === em && (0, ka.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Rm("buildAFactory2Game:powerNoMakers")
            }), Em > 0 && (0, ka.jsx)(Kx, {
              item: "Generator",
              label: `${xa(Rm,"Generator")} \xd7${Em}`,
              note: `${Rm("buildAFactory2Game:powerRunning",{amount:String(om)})} \xb7 ${Sm}`,
              value: pm(om * Yx, "+"),
              dim: 0 === om
            }), Im > 0 && (0, ka.jsx)(Kx, {
              item: "Volt Engine",
              label: `${xa(Rm,"Volt Engine")} \xd7${Im}`,
              note: `${Rm("buildAFactory2Game:powerRunning",{amount:String(Km)})} \xb7 ${bm}`,
              value: pm(Km * Vx, "+"),
              dim: 0 === Km
            }), Ym > 0 && (0, ka.jsx)(Kx, {
              item: "Solar Panel",
              label: `${xa(Rm,"Solar Panel")} \xd7${Ym}`,
              note: Rm(qm < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: pm(4 * Ym * qm, "+")
            }), cm > 0 && (0, ka.jsx)(Kx, {
              item: "Reactor Frame",
              label: `${Rm("buildAFactory2Game:powerReactors")} \xd7${cm}`,
              note: Rm("buildAFactory2Game:powerRunning", {
                amount: String(zm)
              }),
              value: pm(null !== (Dm = im.baf2PowerReactorPerS) && void 0 !== Dm ? Dm : 0, "+"),
              dim: 0 === zm
            })]
          })]
        }), (0, ka.jsxs)("section", {
          children: [(0, ka.jsxs)("h3", {
            children: [Rm("buildAFactory2Game:powerStorage"), (0, ka.jsx)("span", {
              children: Wm(im.baf2PowerCap)
            })]
          }), (jm > 0 || Zm > 0) && (0, ka.jsxs)("ul", {
            children: [jm > 0 && (0, ka.jsx)(Kx, {
              item: "Charge Vault",
              label: `${xa(Rm,"Charge Vault")} \xd7${jm}`,
              value: `+${Wm(8e3*jm)}`
            }), Zm > 0 && (0, ka.jsx)(Kx, {
              item: "Battery Cell",
              label: `${Rm("buildAFactory2Game:powerBatteries")} \xd7${Zm}`,
              value: `+${Wm(km)}`
            })]
          })]
        }), (0, ka.jsxs)("section", {
          children: [(0, ka.jsxs)("h3", {
            children: [Rm("buildAFactory2Game:powerUsing"), (0, ka.jsx)("span", {
              children: pm(im.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, ka.jsxs)("ul", {
            children: [0 === Vm.length && 0 === nm && 0 === Jm && (0, ka.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Rm("buildAFactory2Game:powerNoUsers")
            }), Vm.map((mm => {
              let [Tm, fm, hm, Am, am = 1, xm] = mm, wm = fm ? Rm(Ox[am - 1], {
                name: xa(Rm, Tm)
              }) : xa(Rm, Tm);
              return void 0 !== xm && (wm = Rm("buildAFactory2Game:powerFarmName", {
                name: wm,
                mob: Rm(Mm(xm))
              })), (0, ka.jsx)(Kx, {
                item: Tm,
                label: `${wm} \xd7${hm}`,
                note: Rm("buildAFactory2Game:powerRunning", {
                  amount: String(Am)
                }),
                value: Am > 0 ? pm(Am * Qx(Tm, fm, am, xm), "\u2212") : Rm("buildAFactory2Game:powerIdle"),
                dim: 0 === Am
              }, `${Tm}|${fm}|${am}|${xm}`)
            })), nm > 0 && (0, ka.jsx)(Kx, {
              item: "Charging Pad",
              label: `${xa(Rm,"Charging Pad")} \xd7${nm}`,
              value: Rm("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), Jm > 0 && (0, ka.jsx)(Kx, {
              item: "Homestead Core",
              label: Rm("buildAFactory2Game:powerCharge"),
              value: pm(Jm, "\u2212")
            }), im.baf2PowerStarved > 0 && (0, ka.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, ka.jsx)(eA.c, {
                name: "triangle-exclamation"
              }), Rm("buildAFactory2Game:powerStarved", {
                amount: String(im.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Jx = fm(4471),
      cx = fm(1454);
    class zx {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(mm) {
        this.message = mm;
        for (const Tm of this.listeners) Tm()
      }
      get() {
        return this.message
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
    }
    class Zx extends zx {}

    function kx(mm, Tm) {
      const fm = () => {
          const fm = mm.get();
          if (!fm || !Tm) return fm;
          const [hm, Am, am] = fm.baf2PowerAt;
          return hm === Tm[0] && Am === Tm[1] && am === Tm[2] ? fm : null
        },
        [Am, am] = (0, hm.useState)(fm);
      return (0, hm.useEffect)((() => (am(fm()), mm.subscribe((() => {
        am(fm())
      })))), [mm, ...null !== Tm && void 0 !== Tm ? Tm : []]), Am
    }

    function bx(mm) {
      return {
        stored: mm.baf2PowerStored,
        cap: mm.baf2PowerCap,
        madePerS: mm.baf2PowerMadePerS,
        usedPerS: mm.baf2PowerUsedPerS
      }
    }

    function Sx(mm) {
      let {
        stored: Tm,
        cap: fm
      } = mm;
      return (0, ka.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, ka.jsx)("div", {
          style: {
            width: `${Math.min(100,100*Tm/Math.max(1,fm))}%`
          }
        })
      })
    }

    function ex(mm) {
      let {
        figures: Tm,
        labelled: fm = !1
      } = mm;
      const {
        t: hm
      } = (0, SA.A)(), Am = Tm.madePerS - Tm.usedPerS, {
        text: am,
        draining: xm
      } = function(mm, Tm) {
        let {
          stored: fm,
          cap: hm,
          madePerS: Am,
          usedPerS: am
        } = Tm;
        const xm = Am - am;
        return fm >= hm ? {
          text: mm("buildAFactory2Game:powerFull"),
          draining: !1
        } : xm > .05 ? {
          text: mm("buildAFactory2Game:powerFullIn", {
            time: Ja(mm, (hm - fm) / xm)
          }),
          draining: !1
        } : xm < -.05 ? {
          text: mm("buildAFactory2Game:powerEmptyIn", {
            time: Ja(mm, fm / -xm)
          }),
          draining: !0
        } : {
          text: mm("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(hm, Tm);
      return (0, ka.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, ka.jsx)(Sx, {
          stored: Tm.stored,
          cap: Tm.cap
        }), (0, ka.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, ka.jsx)("span", {
            children: hm(fm ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: Wm(Tm.stored),
              cap: Wm(Tm.cap)
            })
          }), (0, ka.jsxs)("span", {
            className: zA()("Baf2PowerNet", {
              Draining: xm
            }),
            children: [hm("buildAFactory2Game:powerPerSecond", {
              rate: Ka(Math.abs(Am), Am < 0 ? "\u2212" : "+")
            }), " \xb7 ", am]
          })]
        })]
      })
    }

    function Nx(mm) {
      let {
        stored: Tm,
        cap: fm,
        rates: hm
      } = mm;
      const {
        t: Am
      } = (0, SA.A)();
      return hm ? (0, ka.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, ka.jsx)(ex, {
          figures: {
            stored: Tm,
            cap: fm,
            madePerS: hm[0],
            usedPerS: hm[1]
          },
          labelled: !0
        })
      }) : (0, ka.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, ka.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, ka.jsx)(Sx, {
            stored: Tm,
            cap: fm
          }), (0, ka.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, ka.jsx)("span", {
              children: Am("buildAFactory2Game:powerStoredLabelled", {
                stored: Wm(Tm),
                cap: Wm(fm)
              })
            })
          })]
        })
      })
    }

    function Gx(mm) {
      let {
        store: Tm,
        close: fm
      } = mm;
      const {
        t: hm
      } = (0, SA.A)(), Am = kx(Tm);
      return (0, ka.jsx)(Jx.d, {
        close: fm,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, ka.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, ka.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, ka.jsxs)("div", {
              children: [(0, ka.jsx)("h2", {
                id: "baf2PowerTitle",
                children: hm("buildAFactory2Game:powerTitle")
              }), (0, ka.jsx)("p", {
                children: hm("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, ka.jsx)(cx.j, {
              onClick: fm
            })]
          }), Am && (0, ka.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, ka.jsx)(ex, {
              figures: bx(Am)
            }), (0, ka.jsx)(nx, {
              message: Am
            })]
          })]
        })
      })
    }

    function Xx(mm) {
      var Tm;
      let {
        kind: fm,
        def: Am,
        Ph: am,
        power: xm,
        stored: wm,
        cap: Dm
      } = mm;
      const {
        t: im
      } = (0, SA.A)(), Rm = kx(xm, am), [pm, Em] = (0, hm.useState)(!1);
      return (0, ka.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, ka.jsx)(ax, {
          kind: fm,
          def: Am,
          input: null,
          tier: null !== (Tm = null === Rm || void 0 === Rm ? void 0 : Rm.baf2PowerTier) && void 0 !== Tm ? Tm : 1
        }), (0, ka.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: im("buildAFactory2Game:powerTitle")
        }), Rm && (0, ka.jsx)(ex, {
          figures: bx(Rm)
        }), !Rm && (0, ka.jsx)(Nx, {
          stored: wm,
          cap: Dm,
          rates: null
        }), Rm && (0, ka.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            Em(!pm)
          },
          "aria-expanded": pm,
          children: im(pm ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), Rm && pm && (0, ka.jsx)(nx, {
          message: Rm
        })]
      })
    }
    const Px = 2500,
      Hx = 17500,
      yx = `${Qm} `;
    const Cx = ["plan", "throttle"];

    function rx(mm) {
      if (mm.startsWith(`${kT} `)) return mm.slice(0, mm.lastIndexOf(" "));
      const Tm = mm.split(" ");
      return Tm[0] === pT && Cx.includes(Tm[4]) ? Tm.slice(0, 5).join(" ") : null
    }
    class sx {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = mm, this.now = Tm, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.KAm = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = Tm()
      }
      enqueue(mm) {
        this.queue(mm, this.nextTicket());
        const Tm = this.KAm + this.pending.length;
        return this.flush(), Tm
      }
      track(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const fm = this.nextTicket();
        if (!Tm.urgent) return this.queue(mm, fm), this.flush(), fm;
        const {
          supersedes: hm
        } = Tm;
        for (let am = this.pending.length - 1; am >= this.urgent; am--) {
          const Tm = this.pending[am];
          (Tm.command === mm || null !== hm && void 0 !== hm && hm(Tm.command)) && (this.pending.splice(am, 1), this.markLeft(Tm.tickets))
        }
        const Am = this.pending.findIndex((Tm => {
          let {
            command: fm
          } = Tm;
          return fm === mm
        }));
        return -1 !== Am ? this.pending[Am].tickets.push(fm) : (this.pending.splice(this.urgent, 0, {
          command: mm,
          tickets: [fm]
        }), this.urgent += 1), this.flush(), fm
      }
      leftAt(mm) {
        const Tm = this.leftTimes.get(mm);
        return void 0 !== Tm ? Tm : this.pending.some((Tm => {
          let {
            tickets: fm
          } = Tm;
          return fm.includes(mm)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let mm = !0;
        return () => {
          mm && (mm = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(mm) {
        var Tm;
        return (null === (Tm = this.pending.at(-1)) || void 0 === Tm ? void 0 : Tm.command) === mm
      }
      sent() {
        return this.KAm
      }
      clear() {
        for (const {
            tickets: mm
          }
          of this.pending) this.markLeft(mm);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(mm) {
        const Tm = this.now();
        for (const fm of mm) this.leftTimes.set(fm, Tm);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(mm, Tm) {
        const fm = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === fm || void 0 === fm ? void 0 : fm.command) === mm) return void(! function(mm) {
          return mm === nm || mm.startsWith(`${Km} `) || mm.startsWith(`${rm} `)
        }(mm) ? fm.tickets.push(Tm) : (this.pending.pop(), this.markLeft([...fm.tickets, Tm])));
        const hm = void 0 === fm ? null : RT(fm.command, mm);
        if (null !== hm && void 0 !== fm) return fm.command = hm, void fm.tickets.push(Tm);
        const Am = rx(mm);
        if (null !== Am && void 0 !== fm && rx(fm.command) === Am) return fm.command = mm, void fm.tickets.push(Tm);
        if (null !== fm && void 0 !== fm && fm.command.startsWith(yx) && mm.startsWith(yx)) {
          const hm = mm.slice(yx.length);
          if (fm.command.slice(yx.length).split(",").includes(hm)) return void fm.tickets.push(Tm);
          const Am = `${fm.command},${hm}`;
          if (Am.length <= 119) return fm.command = Am, void fm.tickets.push(Tm)
        }
        this.pending.push({
          command: mm,
          tickets: [Tm]
        })
      }
      flush() {
        const mm = this.now();
        for (this.tokens = Math.min(5, this.tokens + (mm - this.refilledAt) / Px), this.refilledAt = mm; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.KAm += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: mm,
            tickets: Tm
          } = this.pending.shift();
          this.markLeft(Tm), this.send(mm)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * Px)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class lx {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new sx(mm, Tm)
      }
      send(mm) {
        return this.queue.enqueue(mm)
      }
      sent() {
        return this.queue.sent()
      }
      track(mm, Tm) {
        return this.queue.track(mm, Tm)
      }
      leftAt(mm) {
        return this.queue.leftAt(mm)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(mm) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = Tm, this.send(mm), this.islandEdits.count
      }
      syncIslandEdits(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: fm
        } = this, hm = Tm - fm.lastAtMs < Hx;
        fm.count = hm ? Math.max(fm.count, mm) : mm
      }
      clear() {
        this.queue.clear()
      }
    }
    const Mx = (0, hm.createContext)(null);

    function ux() {
      const mm = (0, hm.useContext)(Mx);
      if (!mm) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return mm
    }

    function Bx(mm, Tm) {
      return null !== Tm && void 0 !== Tm ? Tm : 1 === mm
    }

    function Lx(mm, Tm) {
      return mm.every((mm => {
        var fm;
        let [hm, , Am] = mm;
        return !Bx(Am, null === (fm = Tm.get(hm)) || void 0 === fm ? void 0 : fm.mO)
      }))
    }

    function vx(mm, Tm, fm) {
      if (0 === mm.size) return mm;
      const hm = new Map(mm);
      for (const [Am, am] of mm) {
        const mm = Tm.find((mm => {
          let [Tm] = mm;
          return Tm === Am
        }));
        (!mm || am.mO === (1 === mm[2]) || am.atMs < fm) && hm.delete(Am)
      }
      return hm
    }

    function tx(mm) {
      var Tm;
      let {
        Ph: fm,
        input: Am,
        drops: am,
        seconds: xm
      } = mm;
      const {
        t: wm
      } = (0, SA.A)(), Dm = ux(), [im, Rm] = (0, hm.useState)(new Map);
      (0, hm.useEffect)((() => {
        am && Rm((mm => vx(mm, am, Date.now() - Hx)))
      }), [am]), (0, hm.useEffect)((() => {
        const mm = function(mm, Tm) {
          let fm = null;
          for (const {
              atMs: hm
            }
            of mm.values()) fm = null === fm ? hm : Math.min(fm, hm);
          return null === fm ? null : fm + Tm
        }(im, Hx);
        if (null === mm || !am) return;
        const Tm = setTimeout((() => {
          Rm((mm => vx(mm, am, Date.now() - Hx)))
        }), Math.max(0, mm - Date.now()) + 1);
        return () => {
          clearTimeout(Tm)
        }
      }), [im, am]);
      const pm = um(Am),
        Em = null !== pm && null !== am && Lx(am, im),
        om = function(mm, Tm, fm) {
          return null === mm || null === Tm || Lx(Tm, fm) ? 0 : Cm[Hm[mm]]
        }(pm, am, im);
      return (0, ka.jsxs)(Ha, {
        title: wm("buildAFactory2Game:farmDropsTitle", {
          seconds: xm
        }),
        count: null !== (Tm = null === am || void 0 === am ? void 0 : am.length) && void 0 !== Tm ? Tm : 0,
        children: [om > 0 && (0, ka.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: wm("buildAFactory2Game:farmDropsPower", {
            power: String(om)
          })
        }), (null === pm || !am) && (0, ka.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: wm("buildAFactory2Game:farmDropsEmpty")
        }), Em && (0, ka.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: wm("buildAFactory2Game:farmDropsAllVoided")
        }), null !== pm && (null === am || void 0 === am ? void 0 : am.map((mm => {
          var Tm;
          let [hm, Am, am] = mm;
          const xm = Am < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            pm = Bx(am, null === (Tm = im.get(hm)) || void 0 === Tm ? void 0 : Tm.mO);
          return (0, ka.jsxs)("li", {
            className: zA()("Baf2Recipe Baf2FarmDrop", {
              Voided: !pm
            }),
            children: [(0, ka.jsx)(ea, {
              item: hm,
              amount: 1
            }), (0, ka.jsx)("span", {
              className: "Baf2RecipeName",
              children: xa(wm, hm)
            }), (0, ka.jsx)("span", {
              className: "Baf2FarmRate",
              children: wm(xm, {
                amount: String(Am)
              })
            }), (0, ka.jsx)("button", {
              type: "button",
              className: zA()("Baf2FarmToggle SmallTextBold", {
                Kept: pm
              }),
              "aria-pressed": pm,
              onClick: () => {
                Rm(new Map(im).set(hm, {
                  mO: !pm,
                  atMs: Date.now()
                })), Dm.send(function(mm, Tm, fm, hm) {
                  return `${rm} ${mm} ${Tm} ${fm} ${hm}`
                }(fm[0], fm[1], fm[2], hm))
              },
              children: wm(pm ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, hm)
        })))]
      })
    }
    var Ux;
    const dx = String(null !== (Ux = PT.Synthesizer.waterPerOp) && void 0 !== Ux ? Ux : 0);

    function gx(mm) {
      let {
        Ph: Tm,
        taught: fm
      } = mm;
      const {
        t: Am
      } = (0, SA.A)(), am = ux(), [xm, wm] = (0, hm.useState)(null);
      (0, hm.useEffect)((() => {
        null !== xm && fm === xm && wm(null)
      }), [xm, fm]);
      const Dm = null !== xm && void 0 !== xm ? xm : fm;
      let im = Am("buildAFactory2Game:synthPick");
      return null !== Dm && (im = Am("buildAFactory2Game:synthGrows", {
        name: xa(Am, Dm),
        input: xa(Am, cT),
        water: dx
      })), (0, ka.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, ka.jsx)("div", {
          className: zA()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === Dm
          }),
          children: im
        }), (0, ka.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: zT.map(((mm, fm) => {
            const hm = xa(Am, mm),
              xm = mm === Dm;
            return (0, ka.jsx)("li", {
              children: (0, ka.jsx)("button", {
                type: "button",
                className: zA()("Baf2SynthTile", {
                  Selected: xm
                }),
                title: hm,
                "aria-label": hm,
                "aria-pressed": xm,
                onClick: () => {
                  xm || (wm(mm), am.send(`${kT} ${Tm[0]} ${Tm[1]} ${Tm[2]} ${fm}`))
                },
                children: (0, ka.jsx)(NA.d, {
                  itemName: mm,
                  amount: 0
                })
              })
            }, mm)
          }))
        })]
      })
    }
    const Wx = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function Fx(mm) {
      let {
        kind: Tm,
        tier: fm,
        coupled: hm,
        level: Am,
        slot: am
      } = mm;
      const {
        t: xm
      } = (0, SA.A)(), Dm = gm(yT);
      if (!hm && null !== fm && fm < Dm) return (0, ka.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, ka.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, ka.jsx)(eA.c, {
            name: "lock"
          })
        }), (0, ka.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: xm("buildAFactory2Game:upgradeLocked")
        }), (0, ka.jsx)("span", {
          className: "Baf2TierTag",
          children: xm("buildAFactory2Game:tierTag", {
            tier: String(Dm)
          })
        })]
      });
      const im = function(mm, Tm) {
          if (wm() && "Crusher" !== mm && null !== Tm) {
            if (mw(rT, Tm)) return {
              item: rT,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (mw(CT, Tm)) return {
              item: CT,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: yT,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(Tm, fm),
        Rm = xm(hm ? Wx[Am - 1] : im.emptyKey),
        pm = null !== fm ? function(mm, Tm, fm, hm) {
          if (!wm() || !fm || "Crusher" === mm || Tm < 10) return null;
          const Am = gm(rT);
          if (hm < 3 && Am > 1 && (2 === hm || Tm >= Am)) return {
            tier: Am,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const am = gm(CT);
          if (1 === hm && am > 1) return {
            tier: am,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(Tm, fm, hm, Am) : null;
      return (0, ka.jsxs)("div", {
        className: zA()("Baf2UpgradeSocket", {
          Fitted: hm
        }),
        children: [(0, ka.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [hm && am, !hm && (0, ka.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, ka.jsx)(NA.d, {
              itemName: im.item,
              amount: 0
            })
          })]
        }), (0, ka.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, ka.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: xm("buildAFactory2Game:upgradeTitle")
          }), (0, ka.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Rm
          }), hm && Am >= 2 && "Crusher" === Tm && (0, ka.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: xm("buildAFactory2Game:couplerCrusherHint")
          }), pm && null !== fm && fm < pm.tier && (0, ka.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, ka.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, ka.jsx)(eA.c, {
                name: "lock"
              })
            }), xm(pm.lockedKey), (0, ka.jsx)("span", {
              className: "Baf2TierTag",
              children: xm("buildAFactory2Game:tierTag", {
                tier: String(pm.tier)
              })
            })]
          }), pm && null !== fm && fm >= pm.tier && (0, ka.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: xm(pm.nextKey)
          })]
        })]
      })
    }

    function mw(mm, Tm) {
      const fm = gm(mm);
      return fm > 1 && Tm >= fm
    }
    var Tw = fm(37131);
    const fw = (0, Fm.E)(PT.Condenser, PT.Condenser.fluidMade),
      hw = .05;
    class Aw extends zx {}

    function aw(mm) {
      return Ka(mm, "")
    }

    function xw(mm, Tm, fm) {
      return mm(Tm ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: fm
      })
    }

    function ww(mm, Tm, fm, hm) {
      return fm <= hw && hm <= hw ? null : hm <= hw || fm <= hw ? xw(mm, Tm, hm <= hw ? Ka(fm, "+") : Ka(hm, "\u2212")) : mm(Tm ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: aw(fm),
        used: aw(hm)
      })
    }

    function Dw(mm, Tm) {
      return Math.min(100, 100 * mm / Math.max(1, Tm))
    }

    function iw(mm) {
      let {
        stored: Tm,
        cap: fm,
        netPerS: hm,
        rates: Am,
        cryo: am
      } = mm;
      const {
        t: xm
      } = (0, SA.A)(), wm = function(mm, Tm, fm, hm) {
        return fm <= 0 ? mm("buildAFactory2Game:waterNoStorage") : Tm >= fm ? mm("buildAFactory2Game:powerFull") : hm > hw ? mm("buildAFactory2Game:powerFullIn", {
          time: Ja(mm, (fm - Tm) / hm)
        }) : hm < -.05 ? Tm <= 0 ? mm("buildAFactory2Game:waterEmpty") : mm("buildAFactory2Game:powerEmptyIn", {
          time: Ja(mm, Tm / -hm)
        }) : mm("buildAFactory2Game:powerSteady")
      }(xm, Tm, fm, hm), Dm = fm > 0 && Tm < fm && Math.abs(hm) <= hw, im = xm(am ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), Rm = null !== Am ? `${Am} \xb7 ${wm}` : Dm ? im : `${im} \xb7 ${wm}`;
      return (0, ka.jsxs)(ka.Fragment, {
        children: [(0, ka.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, ka.jsx)("div", {
            style: {
              width: `${Dw(Tm,fm)}%`
            }
          })
        }), (0, ka.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, ka.jsx)("span", {
            children: fm > 0 && xm("buildAFactory2Game:powerStored", {
              stored: (0, Fm.P)(Tm),
              cap: (0, Fm.P)(fm)
            })
          }), (0, ka.jsx)("span", {
            className: zA()("Baf2WaterNet", {
              Draining: hm < -.05
            }),
            children: Rm
          })]
        })]
      })
    }

    function Rw(mm) {
      let {
        water: Tm,
        at: fm,
        side: hm = null
      } = mm;
      const {
        t: Am
      } = (0, SA.A)(), am = ux(), [xm, wm, Dm] = Tm;
      return (0, ka.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, ka.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, ka.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Am(null === hm ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${hm}`)
          }), (0, ka.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              am.send(`${Fm.B} ${fm[0]} ${fm[1]} ${fm[2]}${"cryoOut"===hm?" cryo":""}`)
            },
            children: Am("buildAFactory2Game:waterDetails")
          })]
        }), (0, ka.jsx)(iw, {
          stored: xm,
          cap: wm,
          netPerS: Dm,
          rates: xw(Am, "cryoOut" === hm, Ka(Math.abs(Dm), Dm < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === hm
        })]
      })
    }

    function pw(mm, Tm) {
      var fm, hm, Am;
      const am = !0 === Tm.baf2WaterCryo,
        xm = null !== (fm = null === (hm = Tm.baf2WaterMakers.find((mm => mm[0] === (am ? Fm.e : "Condenser")))) || void 0 === hm ? void 0 : hm[1]) && void 0 !== fm ? fm : 0,
        wm = [],
        Dm = (Tm, fm, hm) => {
          Tm > 0 && wm.push(mm(1 === Tm ? fm : hm, {
            count: String(Tm)
          }))
        };
      return am ? Dm(xm, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : Dm(xm, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), Dm(null !== (Am = Tm.baf2WaterPipes) && void 0 !== Am ? Am : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), Dm(Tm.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), wm.join(" \xb7 ")
    }

    function Ew(mm, Tm) {
      if (!0 === Tm.baf2WaterCryo) return function(mm, Tm) {
        const fm = PT[Fm.e];
        switch (Tm.baf2WaterThis) {
          case "pipe":
            return {
              text: mm("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: mm("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: mm("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: mm("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: mm("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: mm("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: mm("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var hm;
            const [Am, am] = null !== (hm = Tm.baf2WaterThisRates) && void 0 !== hm ? hm : [(0, Fm.E)(fm, fm.cryoMade), (0, Fm.E)(fm, fm.powerPerOp)];
            return !0 === Tm.baf2WaterDriven ? {
              text: mm("buildAFactory2Game:cryoThisMixerDriven", {
                rate: aw(Am)
              }),
              bad: !1
            } : {
              text: mm("buildAFactory2Game:cryoThisMixer", {
                rate: aw(Am),
                power: aw(am)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: mm("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(mm, Tm);
      const fm = !0 === Tm.baf2WaterDriven,
        hm = PT.Condenser;
      switch (Tm.baf2WaterThis) {
        case "pipe":
          return {
            text: mm("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: mm("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: mm("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: mm("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: mm("buildAFactory2Game:waterThisTank", {
              tank: (0, Fm.P)(Fm.s),
              cap: (0, Fm.P)(Tm.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Am;
          const [am, xm] = null !== (Am = Tm.baf2WaterThisRates) && void 0 !== Am ? Am : [fw, (0, Fm.E)(hm, hm.powerPerOp)];
          return fm ? {
            text: mm("buildAFactory2Game:waterThisCondenserDriven", {
              rate: aw(am)
            }),
            bad: !1
          } : {
            text: mm("buildAFactory2Game:waterThisCondenser", {
              rate: aw(am),
              power: aw(xm)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: mm("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function ow(mm, Tm) {
      const fm = Tm.baf2WaterMakers.some((mm => !0 === mm[5]));
      if (!0 === Tm.baf2WaterCryo) {
        const hm = Tm.baf2WaterUsedPerS - Tm.baf2WaterMadePerS,
          Am = fm || hm <= hw ? 0 : (0, Fm.C)(hm);
        return 0 === Am ? null : Am > 1 ? mm("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Am)
        }) : mm("buildAFactory2Game:cryoNextOne")
      }
      const hm = fm ? null : function(mm, Tm) {
        const fm = Tm - mm;
        return fm <= hw ? null : Math.ceil(fm / fw)
      }(Tm.baf2WaterMadePerS, Tm.baf2WaterUsedPerS);
      return null === hm ? null : hm > 1 ? mm("buildAFactory2Game:waterNextCondensers", {
        condensers: String(hm)
      }) : mm("buildAFactory2Game:waterNextOne")
    }

    function Ow(mm) {
      let {
        item: Tm,
        label: fm,
        note: hm,
        value: Am,
        dim: am,
        bad: xm
      } = mm;
      return (0, ka.jsxs)("li", {
        className: zA()("Baf2WaterRow", {
          Dim: am,
          Bad: xm
        }),
        children: [(0, ka.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, ka.jsx)(NA.d, {
            itemName: Tm,
            amount: 0
          })
        }), (0, ka.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, ka.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: fm
          }), hm && (0, ka.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: hm
          })]
        }), (0, ka.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Am
        })]
      })
    }

    function Yw(mm) {
      return Tw.p[mm] ? mm : "Reactor Port"
    }

    function qw(mm) {
      let {
        message: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)(), hm = !0 === Tm.baf2WaterCryo, Am = (mm, Tm) => xw(fm, hm, Ka(mm, Tm));
      return (0, ka.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, ka.jsxs)("section", {
          children: [(0, ka.jsxs)("h3", {
            children: [fm("buildAFactory2Game:waterMakes"), (0, ka.jsx)("span", {
              children: Am(Tm.baf2WaterMadePerS, "+")
            })]
          }), (0, ka.jsxs)("ul", {
            children: [0 === Tm.baf2WaterMakers.length && (0, ka.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: fm(hm ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), Tm.baf2WaterMakers.map((mm => {
              let [Tm, hm, am, xm, wm, Dm] = mm;
              const im = fm("buildAFactory2Game:powerRunning", {
                amount: String(am)
              });
              let Rm = wm > 0 ? fm("buildAFactory2Game:waterMakerPower", {
                running: im,
                power: aw(wm)
              }) : im;
              return Dm && (Rm = fm(0 === am && xm <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, ka.jsx)(Ow, {
                item: Tm,
                label: `${xa(fm,Tm)} \xd7${hm}`,
                note: Rm,
                value: am > 0 || Dm && xm > 0 ? Am(xm, "+") : fm("buildAFactory2Game:powerIdle"),
                dim: 0 === am && !Dm,
                bad: Dm
              }, Tm)
            }))]
          })]
        }), (0, ka.jsxs)("section", {
          children: [(0, ka.jsxs)("h3", {
            children: [fm("buildAFactory2Game:waterUses"), (0, ka.jsx)("span", {
              children: Am(Tm.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, ka.jsxs)("ul", {
            children: [0 === Tm.baf2WaterUsers.length && (0, ka.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: fm(hm ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), Tm.baf2WaterUsers.map((mm => {
              let [Tm, hm, am, xm] = mm;
              const wm = Tw.p[Tm] ? xa(fm, Tm) : Tm;
              return (0, ka.jsx)(Ow, {
                item: Yw(Tm),
                label: hm > 1 ? `${wm} \xd7${hm}` : wm,
                note: xm ? fm("buildAFactory2Game:waterPortFirst") : void 0,
                value: am > 0 ? Am(am, "\u2212") : fm("buildAFactory2Game:powerIdle"),
                dim: 0 === am
              }, Tm)
            }))]
          })]
        })]
      })
    }

    function jw(mm) {
      var Tm, fm, Am, am, xm;
      let {
        store: wm,
        close: Dm
      } = mm;
      const {
        t: im
      } = (0, SA.A)(), Rm = function(mm) {
        const [Tm, fm] = (0, hm.useState)((() => mm.get()));
        return (0, hm.useEffect)((() => (fm(mm.get()), mm.subscribe((() => {
          fm(mm.get())
        })))), [mm]), Tm
      }(wm), pm = null !== (Tm = null === Rm || void 0 === Rm ? void 0 : Rm.baf2WaterStored) && void 0 !== Tm ? Tm : 0, Em = null !== (fm = null === Rm || void 0 === Rm ? void 0 : Rm.baf2WaterCap) && void 0 !== fm ? fm : 0, om = null !== (Am = null === Rm || void 0 === Rm ? void 0 : Rm.baf2WaterMadePerS) && void 0 !== Am ? Am : 0, Om = null !== (am = null === Rm || void 0 === Rm ? void 0 : Rm.baf2WaterUsedPerS) && void 0 !== am ? am : 0, Ym = null !== (xm = null === Rm || void 0 === Rm ? void 0 : Rm.baf2WaterNetPerS) && void 0 !== xm ? xm : om - Om, qm = Rm && Ew(im, Rm), jm = Rm && ow(im, Rm), Vm = !0 === (null === Rm || void 0 === Rm ? void 0 : Rm.baf2WaterCryo);
      return (0, ka.jsx)(Jx.d, {
        close: Dm,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, ka.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, ka.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, ka.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== Rm && Em <= 0 ? (0, ka.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, ka.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, ka.jsx)(NA.d, {
                  itemName: Vm ? qf.e : Fm.i,
                  amount: 0
                })
              }), (0, ka.jsxs)("div", {
                children: [(0, ka.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: im(Vm ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), Rm && (0, ka.jsx)("p", {
                  children: pw(im, Rm)
                })]
              })]
            }), (0, ka.jsx)(cx.j, {
              onClick: Dm
            })]
          }), Rm && qm && (0, ka.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, ka.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, ka.jsx)(iw, {
                stored: pm,
                cap: Em,
                netPerS: Ym,
                cryo: Vm,
                rates: ww(im, Vm, om, Om)
              })
            }), (0, ka.jsx)("div", {
              className: zA()("Baf2WaterThis", {
                Bad: qm.bad
              }),
              children: qm.text
            }), Rm.baf2WaterDriven && (0, ka.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, ka.jsx)(eA.c, {
                name: "bolt"
              }), im(Vm ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), jm && (0, ka.jsx)("p", {
              className: "Baf2WaterNext",
              children: jm
            }), (0, ka.jsx)(qw, {
              message: Rm
            })]
          })]
        })
      })
    }
    class Vw {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(mm, Tm) {
        const fm = this.get(mm);
        fm && null === Tm.opLeftMs && null === Tm.fuelLeftMs && Tm.status === fm.status ? Tm = {
          ...Tm,
          opLeftMs: fm.opLeftMs,
          fuelLeftMs: fm.fuelLeftMs,
          burning: fm.burning
        } : this.updates++, this.pos = mm, this.view = Tm;
        for (const hm of this.listeners) hm()
      }
      get(mm) {
        return null !== this.pos && this.pos[0] === mm[0] && this.pos[1] === mm[1] && this.pos[2] === mm[2] ? this.view : null
      }
      forget(mm) {
        null !== this.get(mm) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
    }

    function Iw(mm, Tm, fm, hm) {
      return "noFuel" === Tm && hm && !af(PT[mm]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === Tm && !0 === (null === fm || void 0 === fm ? void 0 : fm.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === Tm && !0 === (null === fm || void 0 === fm ? void 0 : fm.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === Tm && !0 === (null === fm || void 0 === fm ? void 0 : fm.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === Tm && !0 === (null === fm || void 0 === fm ? void 0 : fm.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Kw(Tm, fm) ? "buildAFactory2Game:machineStatus_noInputShort" : function(mm, Tm) {
        const fm = PT[mm];
        if ("noFuel" === Tm && void 0 !== fm.fuels) return af(fm) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (fm.mobFarm && ("noInput" === Tm || "badInput" === Tm)) return `buildAFactory2Game:machineStatus_${Tm}MobFarm`;
        if ("outputFull" === Tm && (void 0 !== fm.table || fm.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === Tm && tT(fm)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== fm.cryoMade && ("noInput" === Tm || "noOutlet" === Tm || "fluidFull" === Tm)) return `buildAFactory2Game:machineStatus_${Tm}Mixer`;
        return `buildAFactory2Game:machineStatus_${Tm}`
      }(mm, Tm)
    }

    function Kw(mm, Tm) {
      return "noInput" === mm && null !== Tm && void 0 !== Tm && Tm.input && Tm.inputShort ? {
        input: Tm.input,
        short: Tm.inputShort
      } : null
    }

    function Qw(mm) {
      return ZA(mm) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== mm.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function nw(mm) {
      const Tm = (0, Xm.ue)(mm);
      return `Baf2Pane Baf2Pane${Tm.charAt(0).toUpperCase()}${Tm.slice(1)}`
    }

    function Jw(mm, Tm) {
      const [fm, Am] = (0, hm.useState)((() => mm.get(Tm)));
      return (0, hm.useEffect)((() => {
        Am(mm.get(Tm));
        const fm = mm.subscribe((() => {
          Am(mm.get(Tm))
        }));
        return () => {
          fm(), mm.forget(Tm)
        }
      }), [mm, ...Tm]), fm
    }

    function zw(mm, Tm, fm, hm) {
      const Am = PT[mm],
        am = Tm && Am.couplable ? uT(Am, fm) : Am,
        xm = null !== hm && ff(am) ? function(mm, Tm) {
          var fm;
          return null !== (fm = null !== Tm && ff(mm) ? Df[Tm] : void 0) && void 0 !== fm ? fm : mm.opMs
        }(am, Rf(hm)) : am.opMs;
      return xm === am.opMs ? am : {
        ...am,
        opMs: xm
      }
    }

    function Zw(mm) {
      let {
        running: Tm,
        opMs: fm,
        opLeftMs: hm,
        updateCount: Am
      } = mm;
      return (0, ka.jsx)("div", {
        className: zA()("Baf2MachineProgress", {
          Running: Tm
        }),
        children: (0, ka.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: fm / 1e3 + "s",
            animationDelay: null === hm ? void 0 : (hm - fm) / 1e3 + "s"
          }
        }, Am)
      })
    }

    function kw(mm) {
      let {
        running: Tm,
        leftMs: fm,
        periodMs: hm,
        updateCount: Am
      } = mm;
      const {
        t: am
      } = (0, SA.A)(), xm = Math.min(Math.max(null !== fm && void 0 !== fm ? fm : 0, 0), hm), wm = Tm && xm > 0, Dm = am("buildAFactory2Game:machineBarFuel");
      return (0, ka.jsx)("div", {
        className: zA()("Baf2FuelBurn", {
          Draining: wm
        }),
        role: "img",
        title: Dm,
        "aria-label": Dm,
        children: (0, ka.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: wm ? {
            animationDuration: hm / 1e3 + "s",
            animationDelay: (xm - hm) / 1e3 + "s"
          } : {
            transform: `scaleY(${xm/hm})`
          }
        }, Am)
      })
    }

    function bw(mm, Tm, fm) {
      let [hm, Am] = fm;
      const am = 1 !== hm ? bA(Tm) : null;
      return {
        amount: hm,
        have: Am,
        item: mm(am || aa(Tm))
      }
    }

    function Sw(mm) {
      return ff(mm) ? "buildAFactory2Game:machineBarMining" : hf(mm) ? "buildAFactory2Game:machineBarCutting" : void 0 !== mm.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function ew(mm) {
      var Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm, Vm, Im;
      let {
        kind: Km,
        Ph: Qm,
        store: nm,
        power: Jm,
        renderSlot: cm
      } = mm;
      const {
        t: zm
      } = (0, SA.A)(), Zm = Jw(nm, Qm), km = PT[Km], bm = null !== (Tm = null === Zm || void 0 === Zm ? void 0 : Zm.coupled) && void 0 !== Tm && Tm, Sm = null !== (fm = null === Zm || void 0 === Zm ? void 0 : Zm.couplerLevel) && void 0 !== fm ? fm : 1, em = zw(Km, bm, Sm, null !== (hm = null === Zm || void 0 === Zm || null === (Am = Zm.dug) || void 0 === Am ? void 0 : Am.item) && void 0 !== hm ? hm : null), Nm = null !== (am = null === Zm || void 0 === Zm ? void 0 : Zm.status) && void 0 !== am ? am : null, Gm = null !== (xm = null === Zm || void 0 === Zm ? void 0 : Zm.power) && void 0 !== xm ? xm : null, Xm = null !== (wm = null === Zm || void 0 === Zm ? void 0 : Zm.opLeftMs) && void 0 !== wm ? wm : null, Pm = null !== (Dm = null === Zm || void 0 === Zm ? void 0 : Zm.dug) && void 0 !== Dm ? Dm : null, Hm = null !== Pm && ff(km) ? Df[null !== (im = Rf(Pm.item)) && void 0 !== im ? im : ""] : void 0, ym = void 0 === Hm ? null : 6e4 / Hm, Cm = null !== (Rm = null === Zm || void 0 === Zm ? void 0 : Zm.powerCap) && void 0 !== Rm ? Rm : 4e3, rm = null !== (pm = null === Zm || void 0 === Zm ? void 0 : Zm.tier) && void 0 !== pm ? pm : null, sm = void 0 !== em.powerMade, lm = null !== km.fuelSlot ? cm(km.fuelSlot) : null, Mm = MT(km), um = !bm && !0 === (null === Zm || void 0 === Zm ? void 0 : Zm.fuelFed), Lm = !bm && !0 === (null === Zm || void 0 === Zm ? void 0 : Zm.fuelFeeds), tm = null !== km.fuelSlot && !bm, Um = null !== (Em = null === Zm || void 0 === Zm ? void 0 : Zm.fuelLeftMs) && void 0 !== Em ? Em : null, dm = function(mm, Tm, fm) {
        var hm;
        const Am = null === Tm ? void 0 : xf[Tm];
        return Math.max(null !== (hm = null !== Am && void 0 !== Am ? Am : fm) && void 0 !== hm ? hm : 0, mm.opMs)
      }(em, null !== (om = null === Zm || void 0 === Zm ? void 0 : Zm.burning) && void 0 !== om ? om : null, Um), gm = null !== (Om = null === Zm || void 0 === Zm ? void 0 : Zm.fuelKeep) && void 0 !== Om ? Om : null, Wm = null === Nm ? null : Iw(Km, Nm, Zm, um), Fm = null === Nm ? null : Kw(Nm, Zm);
      return (0, ka.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, ka.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, ka.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: zm(aa(Km))
          }), Pm && (0, ka.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [zm("Tree Cutter" === Km ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, ka.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, ka.jsx)(NA.d, {
                itemName: Pm.item,
                amount: 0
              })
            }), (0, ka.jsx)(GA.b, {
              text: Pm.name
            })]
          }), null !== ym && (0, ka.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: zm("buildAFactory2Game:machineDigsFixed", {
              perMin: String(ym)
            })
          }), (null === Zm || void 0 === Zm ? void 0 : Zm.field) && (0, ka.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, ka.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, ka.jsx)(NA.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), zm("buildAFactory2Game:machineField", {
              planted: String(Zm.field[0]),
              ripe: String(Zm.field[1])
            })]
          }), (0, ka.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, ka.jsxs)("div", {
              className: zA()("Baf2MachineColumn", {
                Baf2Burns: tm
              }),
              children: [null !== em.inputSlot && (0, ka.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, ka.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: zm(Qw(em))
                }), cm(em.inputSlot)]
              }), null !== km.fuelSlot && !bm && (0, ka.jsxs)("div", {
                className: zA()("Baf2MachineSlot", {
                  Baf2FuelFed: um
                }),
                children: [(0, ka.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [um && (0, ka.jsx)(eA.c, {
                    name: "fire"
                  }), zm("buildAFactory2Game:machineFuel")]
                }), (0, ka.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, ka.jsx)(kw, {
                    running: "running" === Nm,
                    leftMs: Um,
                    periodMs: dm,
                    updateCount: nm.updateCount
                  }), lm]
                })]
              }), null !== km.fuelSlot && bm && (0, ka.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, ka.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: zm("buildAFactory2Game:machineFuel")
                }), (0, ka.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: zm("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": zm("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, ka.jsx)(eA.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, ka.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, ka.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: zm(Sw(em))
              }), (0, ka.jsx)(Zw, {
                running: "running" === Nm,
                opMs: em.opMs,
                opLeftMs: Xm,
                updateCount: nm.updateCount
              })]
            }), em.outputSlots.length > 0 && (0, ka.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, ka.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: zm("buildAFactory2Game:machineOutput")
              }), (0, ka.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: em.outputSlots.map((mm => (0, ka.jsx)("div", {
                  children: cm(mm)
                }, mm)))
              })]
            }), null !== Gm && sm && (0, ka.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, ka.jsx)("div", {
                style: {
                  height: 100 * Gm / Cm + "%"
                }
              })
            })]
          }), tm && null !== gm && (0, ka.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, ka.jsx)(eA.c, {
              name: "arrows-rotate"
            }), zm(hf(em) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(gm)
            })]
          }), (um || Lm) && (0, ka.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, ka.jsx)(eA.c, {
              name: "fire"
            }), zm(um ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), km.couplable && (0, ka.jsx)(Fx, {
            kind: Km,
            tier: rm,
            coupled: bm,
            level: Sm,
            slot: Mm === km.fuelSlot ? lm : null !== Mm ? cm(Mm) : null
          }), null !== Gm && !sm && !0 === (null === Zm || void 0 === Zm ? void 0 : Zm.reactorPowered) && (0, ka.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: zm("buildAFactory2Game:machineReactorPowered")
          }), null !== Gm && !sm && !0 !== (null === Zm || void 0 === Zm ? void 0 : Zm.reactorPowered) && (0, ka.jsx)(Nx, {
            stored: Gm,
            cap: Cm,
            rates: null !== (Ym = null === Zm || void 0 === Zm ? void 0 : Zm.powerRates) && void 0 !== Ym ? Ym : null
          }), (null === Zm || void 0 === Zm ? void 0 : Zm.water) && (0, ka.jsx)(Rw, {
            water: Zm.water,
            at: Qm,
            side: Zm.cryo ? "waterIn" : null
          }), (null === Zm || void 0 === Zm ? void 0 : Zm.cryo) && (0, ka.jsx)(Rw, {
            water: Zm.cryo,
            at: Qm,
            side: "cryoOut"
          }), null !== Zm && void 0 !== Zm && Zm.inertCoupler ? (0, ka.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: zm("buildAFactory2Game:machineStatus_couplerOff", {
              item: xa(zm, Zm.inertCoupler)
            })
          }) : null !== Wm && (0, ka.jsx)("div", {
            className: zA()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Nm
            }),
            children: zm(Wm, Fm ? bw(zm, Fm.input, Fm.short) : void 0)
          })]
        }), (0, ka.jsxs)("div", {
          className: zA()("Baf2MachineSide", {
            Baf2SynthSide: tT(km)
          }),
          children: [tT(km) && (0, ka.jsx)(gx, {
            Ph: Qm,
            taught: null !== (qm = null === Zm || void 0 === Zm ? void 0 : Zm.taught) && void 0 !== qm ? qm : null
          }, Qm.join(",")), sm && (0, ka.jsx)(Xx, {
            kind: Km,
            def: em,
            Ph: Qm,
            power: Jm,
            stored: null !== Gm && void 0 !== Gm ? Gm : 0,
            cap: Cm
          }), Bm(km) && (0, ka.jsx)(tx, {
            Ph: Qm,
            input: null !== (jm = null === Zm || void 0 === Zm ? void 0 : Zm.input) && void 0 !== jm ? jm : null,
            drops: null !== (Vm = null === Zm || void 0 === Zm ? void 0 : Zm.farm) && void 0 !== Vm ? Vm : null,
            seconds: String(em.opMs / 1e3)
          }), !sm && !Bm(km) && !tT(km) && (0, ka.jsx)(ax, {
            kind: Km,
            def: em,
            input: null !== (Im = null === Zm || void 0 === Zm ? void 0 : Zm.input) && void 0 !== Im ? Im : null,
            tier: null !== rm && void 0 !== rm ? rm : 1,
            noSeeds: !0 === (null === Zm || void 0 === Zm ? void 0 : Zm.noSeeds)
          })]
        })]
      })
    }

    function Nw(mm, Tm, fm, hm) {
      var Am;
      const am = PT[mm],
        xm = [am.inputSlot, am.fuelSlot, ...null !== (Am = am.inputSlots) && void 0 !== Am ? Am : []].filter((mm => null !== mm));
      return {
        render: Am => {
          let {
            Ph: am,
            renderSlot: xm
          } = Am;
          return (0, ka.jsx)(Mx.Provider, {
            value: hm,
            children: (0, ka.jsx)(ew, {
              kind: mm,
              Ph: am,
              store: Tm,
              power: fm,
              renderSlot: xm
            })
          })
        },
        quickMoveRange: xm.length > 0 ? [Math.min(...xm), Math.max(...xm) + 1] : [0, 0],
        className: nw(mm)
      }
    }
    const Gw = "Assembler";

    function Xw(mm) {
      var Tm, fm, hm, Am, am, xm, wm, Dm, im;
      let {
        Ph: Rm,
        store: pm,
        renderSlot: Em
      } = mm;
      const {
        t: om
      } = (0, SA.A)(), Om = Jw(pm, Rm), Ym = null !== (Tm = null === Om || void 0 === Om ? void 0 : Om.tier) && void 0 !== Tm ? Tm : 1, qm = null !== (fm = null === Om || void 0 === Om ? void 0 : Om.taught) && void 0 !== fm ? fm : null, jm = WT(Gw, {
        coupled: !1,
        taught: qm
      }), Vm = null !== (hm = jm.bench) && void 0 !== hm ? hm : null, Im = null !== (Am = null === Om || void 0 === Om ? void 0 : Om.status) && void 0 !== Am ? Am : null, Km = null !== (am = null === Om || void 0 === Om ? void 0 : Om.power) && void 0 !== am ? am : null, Qm = null !== (xm = null === Om || void 0 === Om ? void 0 : Om.powerCap) && void 0 !== xm ? xm : 4e3;
      return (0, ka.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, ka.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, ka.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: om(aa(Gw))
          }), Vm && (0, ka.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [om("buildAFactory2Game:benchMakes"), (0, ka.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, ka.jsx)(NA.d, {
                itemName: Vm.output,
                amount: 0
              })
            }), (null === Om || void 0 === Om ? void 0 : Om.taughtName) && (0, ka.jsx)(GA.b, {
              text: Om.taughtName
            }), Vm.outputAmount > 1 && (0, ka.jsxs)("span", {
              children: ["\xd7", Vm.outputAmount]
            })]
          }), !Vm && (0, ka.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: om("buildAFactory2Game:benchTeachHint")
          }), (0, ka.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, ka.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (wm = jm.inputSlots) && void 0 !== wm ? wm : []).map(((mm, Tm) => {
                const fm = null === Vm || void 0 === Vm ? void 0 : Vm.inputs[Tm];
                return (0, ka.jsxs)("div", {
                  className: zA()("Baf2BenchInput", {
                    Spare: !fm
                  }),
                  children: [(0, ka.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [Em(mm), fm && (0, ka.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, ka.jsx)(NA.d, {
                        itemName: fm.item,
                        amount: 0
                      })
                    })]
                  }), (0, ka.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: fm ? `\xd7${fm.amount}` : "\xa0"
                  })]
                }, mm)
              }))
            }), (0, ka.jsx)(Zw, {
              running: "running" === Im,
              opMs: jm.opMs,
              opLeftMs: null !== (Dm = null === Om || void 0 === Om ? void 0 : Om.opLeftMs) && void 0 !== Dm ? Dm : null,
              updateCount: pm.updateCount
            }), (0, ka.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, ka.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: om("buildAFactory2Game:machineOutput")
              }), (0, ka.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: jm.outputSlots.map((mm => (0, ka.jsx)("div", {
                  children: Em(mm)
                }, mm)))
              })]
            })]
          }), null !== Km && (0, ka.jsx)(Nx, {
            stored: Km,
            cap: Qm,
            rates: null !== (im = null === Om || void 0 === Om ? void 0 : Om.powerRates) && void 0 !== im ? im : null
          }), null !== Im && (0, ka.jsx)("div", {
            className: zA()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Im
            }),
            children: om(Iw(Gw, Im, Om, !1))
          }), Vm && Vm.inputs.length > 1 && (0, ka.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: om("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, ka.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, ka.jsx)(wx, {
            taught: qm,
            tier: Ym
          }), Vm && (0, ka.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: om("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Pw(mm) {
      var Tm;
      const fm = null !== (Tm = PT[Gw].inputSlots) && void 0 !== Tm ? Tm : [];
      return {
        render: Tm => {
          let {
            Ph: fm,
            renderSlot: hm
          } = Tm;
          return (0, ka.jsx)(Xw, {
            Ph: fm,
            store: mm,
            renderSlot: hm
          })
        },
        quickMoveRange: [Math.min(...fm), Math.max(...fm) + 1],
        className: nw(Gw)
      }
    }
    var Hw = fm(105),
      yw = fm(1160),
      Cw = fm(4171);
    const rw = 600,
      sw = .5,
      lw = 4,
      Mw = 1200,
      uw = 140,
      Bw = 100,
      Lw = 32,
      vw = 16,
      tw = 100.5,
      Uw = 90,
      dw = 1.5,
      gw = 50;

    function Ww(mm) {
      switch (Xf(mm)) {
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
    const Fw = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function mD(mm) {
      const Tm = Math.ceil(60 * mm / Bw);
      return {
        fuel: Math.max(Lw, Tm),
        waste: Math.max(vw, Tm)
      }
    }

    function TD(mm, Tm, fm) {
      const [hm, Am, am] = [mm - 2, Tm - 2, fm - 2];
      return 2 * (hm * Am + Am * am + am * hm) * uw
    }

    function fD(mm, Tm, fm) {
      return Math.max(0, mm - 2) * Math.max(0, Tm - 2) * Math.max(0, fm - 2)
    }

    function hD(mm, Tm) {
      const [fm, hm, Am] = mm, am = fm * hm * Am, xm = new Float32Array(am);
      let wm = 0,
        Dm = 0,
        im = 0,
        Rm = 0,
        pm = 0;
      const Em = (mm, am, xm) => mm < 0 || mm >= fm || am < 0 || am >= hm || xm < 0 || xm >= Am ? 0 : Tm[(am * Am + xm) * fm + mm];
      for (let qm = 0; qm < hm; qm++)
        for (let mm = 0; mm < Am; mm++)
          for (let hm = 0; hm < fm; hm++) {
            const am = (qm * Am + mm) * fm + hm,
              om = Tm[am];
            if (1 === om) {
              wm++;
              let Tm = 0;
              for (const [fm, Am, am] of Fw) {
                const xm = Em(hm + fm, qm + Am, mm + am);
                1 !== xm && 2 !== xm || Tm++
              }
              xm[am] = rw * (1 + sw * Math.min(Tm, lw)), Rm += xm[am]
            } else if (2 === om) Dm++;
            else if (3 === om) {
              im++;
              Fw.some((Tm => {
                let [fm, Am, am] = Tm;
                return 1 === Em(hm + fm, qm + Am, mm + am)
              })) && (pm += Mw)
            }
          }
      const om = TD(fm + 2, hm + 2, Am + 2),
        Om = Math.min(Rm, pm, om),
        Ym = wm > 0 ? Rm * Bw / wm : 0;
      return {
        rods: wm,
        graphite: Dm,
        channels: im,
        fuelHeat: Rm,
        cooling: pm,
        size: om,
        max: Om,
        vol: am,
        powerPerUnit: Ym,
        pelletsPerMin: Ym > 0 ? Om / Ym * 60 : 0,
        waterPerS: Om * Fm.o,
        rodHeat: xm
      }
    }
    const AD = 0,
      aD = 1,
      xD = 6,
      wD = 7,
      DD = 8;

    function iD(mm, Tm) {
      const [fm, hm, Am] = mm, am = new Uint8Array(fm * hm * Am), xm = (mm, am, xm) => mm < 0 || mm >= fm || am < 0 || am >= hm || xm < 0 || xm >= Am ? 0 : Tm[(am * Am + xm) * fm + mm];
      for (let wm = 0; wm < hm; wm++)
        for (let mm = 0; mm < Am; mm++)
          for (let hm = 0; hm < fm; hm++) {
            const Dm = (wm * Am + mm) * fm + hm,
              im = Tm[Dm];
            if (1 === im) {
              let Tm = 0;
              for (const [fm, Am, am] of Fw) {
                const Dm = xm(hm + fm, wm + Am, mm + am);
                Tm += 1 === Dm || 2 === Dm ? 1 : 0
              }
              am[Dm] = aD + Math.min(Tm, lw)
            } else if (3 === im) {
              const Tm = Fw.some((Tm => {
                let [fm, Am, am] = Tm;
                return 1 === xm(hm + fm, wm + Am, mm + am)
              }));
              am[Dm] = Tm ? xD : wD
            } else 2 === im && (am[Dm] = DD)
          }
      return am
    }

    function RD(mm) {
      return mm.fuelHeat <= mm.cooling && mm.fuelHeat <= mm.size ? "fuel" : mm.cooling <= mm.size ? "cooling" : "size"
    }
    const pD = Uw;

    function ED(mm, Tm, fm) {
      return Math.round(mm * Tm * fm * 25e3 * (1 + .25 * (Math.min(mm, Tm, fm) - 2)))
    }

    function oD(mm) {
      return Math.max(0, Math.min(Fm.g, mm))
    }

    function OD(mm, Tm, fm) {
      const hm = Tm * oD(fm);
      return mm <= 0 ? 0 : hm > 0 ? Math.min(200, 100 * mm / hm) : 200
    }

    function YD(mm, Tm) {
      const fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? dw : 1;
      return Math.min(mm.fuelHeat * fm, mm.cooling * oD(Tm), mm.size * fm)
    }

    function qD(mm) {
      return 2 + mm / 10
    }
    const jD = "buildAFactory2Game:";

    function VD(mm) {
      var Tm;
      return null !== (Tm = mm.baf2RxMood) && void 0 !== Tm ? Tm : function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const fm = [
          ["calm", 50],
          ["warm", pD],
          ["hot", tw]
        ];
        for (const [hm, Am] of fm)
          if (mm < Am + (hm === Tm ? 3 : 0)) return hm;
        return "alarm"
      }(mm.baf2RxHeat)
    }
    const ID = 120;

    function KD(mm) {
      const Tm = mm.baf2RxState;
      if ("running" === Tm && mm.baf2RxHeat > tw) return {
        label: `${jD}rxState_tooHot`,
        tone: "bad",
        fix: `${jD}rxFix_tooHot`
      };
      switch (Tm) {
        case "running":
          return {
            label: `${jD}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${jD}rxState_idle`, tone: "off", fix: `${jD}rxFix_idle`
          };
        case "scram":
          return {
            label: `${jD}rxState_scram`, tone: "off", fix: mm.baf2RxHeat < gw ? `${jD}rxFix_scramCool` : `${jD}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${jD}rxState_${Tm}`, tone: "off", fix: `${jD}rxFix_${Tm}`
          };
        case "melted":
          return {
            label: `${jD}rxState_melted`, tone: "bad", fix: `${jD}rxFix_melted`
          };
        default:
          return {
            label: `${jD}rxState_${Tm}`, tone: "warn", fix: `${jD}rxFix_${Tm}`
          }
      }
    }

    function QD(mm) {
      const [Tm, fm, hm] = mm.baf2RxStats;
      return {
        fuelHeat: Tm,
        cooling: fm * (mm.baf2RxCryo ? Math.max(1, oD(mm.baf2RxWater / 100)) : 1),
        size: hm
      }
    }

    function nD(mm) {
      var Tm;
      const fm = "idle" === mm.baf2RxState || "running" === mm.baf2RxState && mm.baf2RxHeat <= tw || "scram" === mm.baf2RxState && mm.baf2RxHeat < gw;
      if (0 === (mm.baf2RxFlags & QT) || !mm.baf2RxFormed || !fm) return null;
      const {
        fuelHeat: hm,
        cooling: Am,
        size: am
      } = QD(mm), xm = Math.min(hm, Am, am), wm = RD({
        fuelHeat: hm,
        cooling: Am,
        size: am
      }), Dm = "cooling" === wm && !0 === mm.baf2RxCryoOpen && !mm.baf2RxCryo, im = null !== (Tm = mm.baf2RxCells) && void 0 !== Tm ? Tm : "", Rm = ("fuel" === wm || "cooling" === wm && !0 === mm.baf2RxCryo) && im.length > 0 && !im.includes(String(0)), pm = Dm ? "Cryo" : "scram" === mm.baf2RxState ? "Off" : "";
      return xm < 12e3 ? {
        key: `${jD}rxGrow_${Rm?"full":wm}${pm}`,
        amount: xm
      } : null
    }

    function JD(mm, Tm) {
      return mm[0] === Tm[0] && mm[1] === Tm[1] && mm[2] === Tm[2]
    }

    function cD(mm) {
      return [...mm].sort(((mm, Tm) => Number(Tm[2] < Tm[1]) - Number(mm[2] < mm[1])))
    }

    function zD(mm, Tm) {
      return Tm.some((Tm => {
        let [fm, hm] = Tm;
        return !(hm <= 0) && ["edge", "cap", "wall", "inside"].some((Tm => fm === Dh(mm, Tm)))
      }))
    }

    function ZD(mm, Tm, fm) {
      const hm = mm.baf2RxFuel - mm.baf2RxPu > 0 ? fm : 0;
      return {
        full: mm.baf2RxWaste > Tm - 3,
        fullInS: hm > 0 ? Math.max(0, Tm - mm.baf2RxWaste) / hm : null
      }
    }
    const kD = {
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

    function bD(mm) {
      return SD[mm]
    }
    const SD = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function eD(mm) {
      let [Tm, fm, hm] = mm;
      return Math.ceil(TD(Tm, fm, hm) * Fm.o)
    }

    function ND(mm, Tm) {
      return "battery" === mm ? Tm[0] * Tm[1] * Tm[2] : function(mm) {
        let [Tm, fm, hm] = mm;
        return Tm * fm * hm - Math.max(0, Tm - 2) * Math.max(0, fm - 2) * Math.max(0, hm - 2)
      }(Tm) - 1
    }

    function GD(mm) {
      const Tm = Math.max(0, mm);
      if (Tm < 10) return String(Math.round(10 * Tm) / 10);
      if (Tm < 1e4) return Math.round(Tm).toLocaleString("en-US");
      if (Tm < 1e6) return `${Tm<1e5?(Math.floor(Tm/100)/10).toFixed(1):Math.floor(Tm/1e3)}k`;
      const fm = Tm / 1e6;
      return `${fm<10?(Math.floor(100*fm)/100).toFixed(2):fm<100?(Math.floor(10*fm)/10).toFixed(1):Math.floor(fm)}M`
    }

    function XD(mm) {
      return mm <= 0 ? "0" : mm >= 10 ? String(Math.round(mm)) : mm.toFixed(mm >= 1 ? 1 : 2)
    }

    function PD(mm) {
      const Tm = Th(mm, 0),
        fm = Th(mm, gf(mm) - 1);
      return {
        lo: [Math.min(Tm[0], fm[0]), Math.min(Tm[1], fm[1]), Math.min(Tm[2], fm[2])],
        hi: [Math.max(Tm[0], fm[0]) + 1, Math.max(Tm[1], fm[1]) + 1, Math.max(Tm[2], fm[2]) + 1]
      }
    }

    function HD(mm, Tm, fm) {
      const hm = [Tm[0] - mm[0], Tm[1] - mm[1], Tm[2] - mm[2]],
        Am = [(mm[0] + Tm[0]) / 2, (mm[1] + Tm[1]) / 2, (mm[2] + Tm[2]) / 2],
        am = [];
      for (let xm = 0; xm < 3; xm++) {
        const wm = (xm + 1) % 3,
          Dm = (xm + 2) % 3;
        for (const im of [mm[wm], Tm[wm]])
          for (const Rm of [mm[Dm], Tm[Dm]]) {
            const mm = [0, 0, 0],
              Tm = [fm, fm, fm];
            mm[xm] = Am[xm], Tm[xm] = hm[xm] + fm, mm[wm] = im, mm[Dm] = Rm, am.push([mm, Tm])
          }
      }
      return am
    }
    const yD = "buildAFactory2Game:",
      CD = [`${yD}colNorth`, `${yD}colEast`, `${yD}colSouth`, `${yD}colWest`];

    function rD(mm, Tm) {
      const [fm, hm, Am] = mm.baf2ColAt;
      return `baf2col ${fm} ${hm} ${Am} ${Tm}`
    }

    function sD(mm) {
      return function(mm) {
        if (!Number.isFinite(mm)) return "";
        const Tm = Math.max(1, Math.round(mm));
        if (Tm < 60) return `${Tm}s`;
        const fm = Tm % 60;
        return 0 === fm ? Tm / 60 + "m" : `${Math.floor(Tm/60)}m ${fm}s`
      }(function(mm) {
        const Tm = ih.FOCUS_BY_LASERS[Math.max(0, Math.min(4, mm))];
        return Tm > 0 ? ih.NOVA_FOCUS / Tm : 1 / 0
      }(mm))
    }

    function lD(mm) {
      const Tm = Math.abs(Math.round(mm));
      return Tm < 1e3 ? Math.round(mm).toLocaleString("en-US") : Tm < 1e6 ? `${Tm<1e5?(mm/1e3).toFixed(1).replace(/\.0$/,""):Math.round(mm/1e3)}k` : `${(mm/1e6).toFixed(Tm<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function MD(mm, Tm, fm) {
      if (Yh(Tm) >= 0) {
        const Tm = function(mm, Tm) {
          return mm.find((mm => {
            let {
              focus: fm
            } = mm;
            return fm[0] === Tm[0] && fm[2] === Tm[2] && (Tm[1] === fm[1] || Tm[1] === fm[1] - 1)
          }))
        }(mm, fm);
        if (!Tm) return null;
        const Am = function(mm) {
          let Tm = 0,
            fm = 0;
          for (let hm = 0; hm < 4; hm++) Tm += mm.laser[hm] ? 1 : 0, fm += mm.live[hm] ? 1 : 0;
          return {
            lasers: Tm,
            live: fm,
            focusPerS: ih.FOCUS_BY_LASERS[fm],
            drawPerS: ih.LASER_DRAW * fm
          }
        }({
          laser: Tm.lasers,
          live: Tm.live
        });
        if (0 === Am.lasers || "noLasers" === Tm.state) return {
          key: `${yD}lookColNoLasers`
        };
        if (0 === Am.live) return {
          key: `${yD}lookColOff_blocked`
        };
        if (!(Tm.on && Am.live > 0) && ("running" !== (hm = Tm.state) && "slowed" !== hm)) return {
          key: `${yD}lookColOff_${Tm.state}`
        };
        if (Am.live < Am.lasers) return {
          key: `${yD}lookColLasersSome`,
          params: {
            lasers: String(Am.lasers),
            live: String(Am.live)
          }
        };
        const am = Tm.open.filter(Boolean).length;
        return am < 4 ? {
          key: `${yD}lookColLasersSpots`,
          params: {
            live: String(Am.live),
            spots: String(am),
            time: sD(Am.live)
          }
        } : {
          key: `${yD}lookColLasers`,
          params: {
            live: String(Am.live),
            time: sD(Am.live)
          }
        }
      }
      var hm;
      if (!qh(Tm)) return null;
      const Am = function(mm, Tm) {
        for (const fm of mm) {
          const mm = Kh(fm.focus, [Tm[0], Tm[1], Tm[2]]);
          if (mm && mm.Tp === ih.LASER_D && fm.lasers[mm.dir]) return {
            entry: fm,
            dir: mm.dir
          }
        }
        return null
      }(mm, fm);
      if (!Am) return {
        key: `${yD}lookLaserNoCollider`
      };
      const {
        entry: am,
        dir: xm
      } = Am;
      return am.open[xm] ? am.live[xm] ? {
        key: am.on ? `${yD}lookLaserFiring` : `${yD}lookLaserReady`
      } : {
        key: `${yD}lookLaserBlocked`
      } : {
        key: `${yD}lookLaserClosed`
      }
    }

    function uD(mm, Tm) {
      const fm = [];
      for (let hm = 1; hm < ih.LASER_D; hm++) mm & 1 << Tm * (ih.LASER_D - 1) + hm - 1 && fm.push(hm);
      return fm
    }
    const BD = {
      firing: `${yD}colSlotFiring`,
      ready: `${yD}colSlotReady`,
      blocked: `${yD}colSlotBlocked`,
      empty: `${yD}colSlotEmpty`,
      closed: `${yD}colSlotClosed`
    };

    function LD(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const am = DA(mm),
        xm = DA(Tm),
        wm = DA(fm),
        Dm = wm.filter(Boolean).length,
        im = am.filter(Boolean).length,
        Rm = [0, 1, 2, 3].map((mm => xm[mm] ? am[mm] ? wm[mm] ? hm ? "firing" : "ready" : "blocked" : (mm => uD(Am, mm).length > 0)(mm) ? "blocked" : "empty" : "closed")),
        pm = Rm.indexOf("blocked"),
        Em = pm < 0 && im > 0 ? Rm.indexOf("empty") : -1;
      return Rm.map(((mm, Tm) => {
        const fm = Tm === pm ? {
          key: `${yD}colSlotClear`
        } : Tm === Em ? {
          key: `${yD}colSlotAdd`,
          params: {
            time: sD(Math.min(4, Dm + 1))
          }
        } : null;
        return {
          dir: Tm,
          tone: mm,
          title: {
            key: "blocked" !== mm || am[Tm] ? BD[mm] : `${yD}colSlotGap`,
            keys: {
              dir: CD[Tm]
            }
          },
          hint: fm
        }
      }))
    }

    function vD(mm) {
      var Tm;
      return "noPower" === mm.baf2ColState && mm.baf2ColRxState ? KD({
        baf2RxState: mm.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (Tm = mm.baf2ColRxHeat) && void 0 !== Tm ? Tm : 0
      }) : null
    }

    function tD(mm) {
      const Tm = DA(mm.baf2ColSpots).filter(Boolean).length,
        fm = DA(mm.baf2ColLive);
      let hm = 0,
        Am = 0;
      return DA(mm.baf2ColLasers).forEach(((mm, Tm) => {
        mm && (hm++, Am += fm[Tm] ? 0 : 1)
      })), Am > 0 ? {
        key: `${yD}colSubSome`,
        params: {
          blocked: String(Am),
          lasers: String(hm)
        }
      } : Tm < 4 ? {
        key: `${yD}colSubSpots`,
        params: {
          lasers: String(hm),
          spots: String(Tm)
        }
      } : {
        key: `${yD}colSub`,
        params: {
          lasers: String(hm)
        }
      }
    }

    function UD(mm) {
      const Tm = vD(mm);
      if ("idle" === mm.baf2ColRxState && Tm) return {
        key: `${yD}colState_noPowerIdle`
      };
      if (Tm) return {
        key: `${yD}colState_noPowerReactor`,
        keys: {
          state: Tm.label
        }
      };
      if ("noInput" !== mm.baf2ColState) return {
        key: `${yD}colState_${mm.baf2ColState}`
      };
      const fm = String(Math.max(0, ih.NOVA_SA - mm.baf2ColSa)),
        hm = String(Math.max(0, ih.NOVA_GD - mm.baf2ColGd));
      return "0" !== fm && "0" !== hm ? {
        key: `${yD}colState_noInput`,
        params: {
          sa: fm,
          gd: hm
        }
      } : "0" !== fm ? {
        key: `${yD}colState_noStarAlloy`,
        params: {
          sa: fm
        }
      } : "0" !== hm ? {
        key: `${yD}colState_noGlowDust`,
        params: {
          gd: hm
        }
      } : {
        key: `${yD}colState_running`
      }
    }

    function dD(mm) {
      return mm.baf2ColP < 0 ? `${yD}colNext` : function(mm) {
        const Tm = mm.baf2ColState;
        return mm.baf2ColP >= 0 && ("blocked" === Tm || "noLasers" === Tm || "noPower" === Tm)
      }(mm) ? `${yD}colStalled` : null === gD(mm) ? `${yD}colMaking` : `${yD}colNovaIn`
    }

    function gD(mm) {
      if (mm.baf2ColP < 0 || mm.baf2ColWant <= 0) return null;
      const Tm = mm.baf2ColFocusPerS * Math.min(1, mm.baf2ColDraw / mm.baf2ColWant);
      return Tm > 0 ? Math.max(0, ih.NOVA_FOCUS - mm.baf2ColP) / Tm : null
    }

    function WD(mm, Tm) {
      const fm = [];
      for (let hm = 1; hm <= 3; hm++) {
        const Am = [mm[0], mm[1] - hm, mm[2]];
        if (!Tm(Am)) return fm;
        fm.push(Am)
      }
      return []
    }

    function FD(mm, Tm) {
      const fm = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let hm = 0; hm < 4; hm++) {
        const Am = hm,
          am = Ih(mm.focus, Am, ih.LASER_D);
        if (mm.lasers[hm] || !mm.open[hm] || !Tm(am)) continue;
        const xm = [];
        for (let fm = 1; fm < ih.LASER_D; fm++) {
          const hm = Ih(mm.focus, Am, fm);
          Tm(hm) || xm.push(hm)
        }
        fm.supports.push(...WD(am, Tm)), 0 === xm.length ? fm.free.push(am) : (fm.blocked.push(am), fm.gaps.push(...xm))
      }
      return fm
    }
    const mi = ih.LASER_D - .25,
      Ti = 4,
      fi = 2,
      Ai = 16;
    const ai = {
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
        blendMode: Cw.g.Standard,
        soft: !0
      },
      xi = {
        green: ai,
        pink: {
          ...ai,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function wi(mm, Tm) {
      const fm = {
        ...Tm.params
      };
      for (const [Am, am] of Object.entries(null !== (hm = Tm.keys) && void 0 !== hm ? hm : {})) {
        var hm;
        fm[Am] = mm(am)
      }
      return fm
    }
    const Di = "buildAFactory2Game:",
      ii = 2 * ih.LASER_D + 1,
      Ri = ih.LASER_D;

    function Ei(mm) {
      return mm(`${Di}colFocusTip`, {
        need: lD(ih.NOVA_FOCUS)
      })
    }

    function oi(mm, Tm) {
      return mm(Tm.key, wi(mm, Tm))
    }

    function Oi(mm) {
      const Tm = mm.getStatus();
      return {
        status: Tm,
        entry: Tm ? mm.entryAtRoot(Tm.baf2ColAt) : void 0
      }
    }

    function Yi(mm, Tm) {
      return {
        left: 100 * (Ri + mm) / ii + "%",
        top: 100 * (Ri + Tm) / ii + "%"
      }
    }

    function qi(mm) {
      let {
        status: Tm,
        entry: fm
      } = mm;
      const hm = DA(Tm.baf2ColLasers),
        Am = DA(Tm.baf2ColSpots),
        am = DA(Tm.baf2ColLive),
        xm = !0 === (null === fm || void 0 === fm ? void 0 : fm.on),
        wm = ih.LASER_D,
        Dm = [];
      for (let om = 0; om < 4; om++) {
        const [mm, , Tm] = Vh[om];
        if (am[om]) {
          const fm = 100 * (wm - 1) / ii,
            hm = mm + Tm > 0 ? 100 * (Ri + 1) / ii : 100 * (Ri - (wm - 1)) / ii,
            Am = 100 * (Ri + .35) / ii,
            am = 30 / ii,
            im = 0 !== mm ? {
              left: `${hm}%`,
              width: `${fm}%`,
              top: `${Am}%`,
              height: `${am}%`
            } : {
              top: `${hm}%`,
              height: `${fm}%`,
              left: `${Am}%`,
              width: `${am}%`
            };
          Dm.push((0, ka.jsx)("i", {
            className: zA()("Baf2ColDiagramBeam", {
              Off: !xm
            }),
            style: im
          }, `beam${om}`))
        }
        const fm = hm[om] ? "Baf2ColDiagramLaser" : Am[om] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        Dm.push((0, ka.jsx)("i", {
          className: fm,
          style: Yi(mm * wm, Tm * wm)
        }, `spot${om}`))
      }
      for (let om = 0; om < 4; om++) {
        if (hm[om] || !Am[om]) continue;
        const [mm, , fm] = Vh[om];
        for (const hm of uD(null !== (im = Tm.baf2ColGaps) && void 0 !== im ? im : 0, om)) {
          var im;
          Dm.push((0, ka.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Yi(mm * hm, fm * hm)
          }, `gap${om},${hm}`))
        }
      }
      for (const [om, , Om] of null !== (Rm = null === fm || void 0 === fm ? void 0 : fm.blockers) && void 0 !== Rm ? Rm : []) {
        var Rm, pm, Em;
        const mm = om - (null !== (pm = null === fm || void 0 === fm ? void 0 : fm.focus[0]) && void 0 !== pm ? pm : 0),
          Tm = Om - (null !== (Em = null === fm || void 0 === fm ? void 0 : fm.focus[2]) && void 0 !== Em ? Em : 0);
        Dm.push((0, ka.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Yi(mm, Tm)
        }, `block${mm},${Tm}`))
      }
      return (0, ka.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [Dm, (0, ka.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function ji(mm) {
      let {
        status: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)(), hm = DA(Tm.baf2ColLive).filter(Boolean).length;
      return (0, ka.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, ka.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: Ei(fm),
          children: fm(`${Di}colLadder`)
        }), (0, ka.jsx)("ul", {
          children: [1, 2, 3, 4].map((mm => (0, ka.jsx)("li", {
            className: zA()({
              On: mm === hm
            }),
            children: fm(`${Di}colLadderChip`, {
              lasers: String(mm),
              time: sD(mm)
            })
          }, mm)))
        })]
      })
    }

    function Vi(mm) {
      let {
        item: Tm,
        ni: fm,
        need: hm,
        cap: Am
      } = mm;
      const {
        t: am
      } = (0, SA.A)(), xm = Math.min(fm, hm);
      return (0, ka.jsxs)("li", {
        className: zA()("Baf2ColTile", {
          Short: fm < hm
        }),
        children: [(0, ka.jsx)(Ii, {
          item: Tm
        }), (0, ka.jsx)("b", {
          className: "Baf2ColTileValue",
          children: am(`${Di}colOutOf`, {
            amount: String(xm),
            cap: String(hm)
          })
        }), (0, ka.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, ka.jsx)("i", {
            style: {
              width: 100 * xm / hm + "%"
            }
          })
        }), fm > hm && (0, ka.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: am(`${Di}colIntakeHeld`, {
            amount: String(fm),
            cap: String(Am)
          })
        })]
      })
    }

    function Ii(mm) {
      let {
        item: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)();
      return (0, ka.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, ka.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, ka.jsx)(NA.d, {
            itemName: Tm,
            amount: 0
          })
        }), (0, ka.jsx)("span", {
          className: "Baf2ColTileName",
          children: xa(fm, Tm)
        })]
      })
    }

    function Ki(mm) {
      switch (mm.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function Qi(mm) {
      var Tm, fm, Am;
      let {
        store: am,
        close: xm
      } = mm;
      const {
        t: wm
      } = (0, SA.A)(), Dm = ux(), {
        status: im,
        entry: Rm
      } = function(mm) {
        const [Tm, fm] = (0, hm.useState)((() => Oi(mm)));
        return (0, hm.useEffect)((() => (fm(Oi(mm)), mm.subscribe((() => {
          fm(Oi(mm))
        })))), [mm]), Tm
      }(am), [pm, Em] = (0, hm.useState)(null), om = null === im || void 0 === im ? void 0 : im.baf2ColHold;
      (0, hm.useEffect)((() => {
        Em(null)
      }), [om]);
      const Om = (0, hm.useRef)({
          p: -1,
          n: 0
        }),
        Ym = null !== (Tm = null === im || void 0 === im ? void 0 : im.baf2ColP) && void 0 !== Tm ? Tm : -1;
      Ym < Om.current.p && Om.current.n++, Om.current.p = Ym;
      const qm = (0, hm.useRef)(null),
        [jm] = (0, hm.useState)((() => {
          return (mm = am.heldAtOpen()) === Eh || mm === oh ? {
            key: `${yD}colBeltItIn`,
            item: mm
          } : null;
          var mm
        }));
      if (!im) return null;
      const Vm = im.baf2ColMember,
        Im = im.baf2ColP >= 0,
        Km = function(mm, Tm) {
          if (mm.baf2ColP >= 0 && mm.baf2ColDraw > 0) {
            const Tm = mm.baf2ColWant > 0 ? Math.min(1, mm.baf2ColDraw / mm.baf2ColWant) : 0;
            return {
              focus: mm.baf2ColFocusPerS * Tm,
              draw: mm.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === mm.baf2ColState && Tm && Tm.draw > 0 ? {
            ...Tm,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(im, qm.current);
      qm.current = Km.draw > 0 ? Km : null;
      const Qm = "slowed" === im.baf2ColState || "noPower" === im.baf2ColState,
        nm = gD(im),
        Jm = null !== pm && void 0 !== pm ? pm : im.baf2ColHold,
        cm = function(mm) {
          var Tm, fm;
          return "idle" === mm.baf2ColRxState ? null : null !== (Tm = null === (fm = vD(mm)) || void 0 === fm ? void 0 : fm.fix) && void 0 !== Tm ? Tm : null
        }(im),
        zm = null === cm && null === jm ? function(mm) {
          var Tm;
          const fm = mm.baf2ColSentTo;
          if (!fm) return null;
          const hm = null !== (Tm = mm.baf2ColSentHeld) && void 0 !== Tm ? Tm : null;
          return {
            key: null === hm ? `${yD}colNovaSentToMachine` : `${yD}colNovaSentTo`,
            target: fm,
            ni: hm
          }
        }(im) : null,
        Zm = Im ? wm(`${Di}colFocusOf`, {
          focus: lD(im.baf2ColP),
          need: lD(ih.NOVA_FOCUS)
        }) : null;
      return (0, ka.jsx)(Jx.d, {
        close: xm,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, ka.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, ka.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, ka.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, ka.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, ka.jsx)(NA.d, {
                  itemName: Rh,
                  amount: 0
                })
              }), (0, ka.jsxs)("div", {
                children: [(0, ka.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: xa(wm, Rh)
                }), (0, ka.jsx)("p", {
                  children: oi(wm, tD(im))
                })]
              })]
            }), (0, ka.jsx)(cx.j, {
              onClick: xm
            })]
          }), (0, ka.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, ka.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, ka.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, ka.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: wm(dD(im), {
                    time: null === nm ? "" : Ja(wm, nm)
                  })
                }), (0, ka.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, ka.jsx)("i", {
                    style: {
                      width: (Im ? 100 * im.baf2ColP / ih.NOVA_FOCUS : 0) + "%"
                    }
                  }, Om.current.n)
                }), (0, ka.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, ka.jsxs)("span", {
                    title: Ei(wm),
                    children: [(0, ka.jsx)("b", {
                      children: lD(Km.focus)
                    }), " ", wm(`${Di}colFocusPerS`)]
                  }), (0, ka.jsxs)("span", {
                    className: zA()("Baf2ColDraw", {
                      Short: Qm
                    }),
                    children: [(0, ka.jsx)(eA.c, {
                      name: "bolt"
                    }), Qm ? wm(`${Di}colDrawOf`, {
                      draw: lD(im.baf2ColDraw),
                      want: lD(im.baf2ColWant)
                    }) : wm(`${Di}colPowerPerS`, {
                      rate: lD(Km.draw)
                    })]
                  }), null !== Zm && (0, ka.jsx)("span", {
                    className: "Soft",
                    children: Zm
                  })]
                })]
              }), (0, ka.jsx)("p", {
                className: zA()("Baf2ColState", Ki(im)),
                children: oi(wm, UD(im))
              }), null !== cm && (0, ka.jsx)("p", {
                className: "Baf2ColStateFix",
                children: wm(cm)
              }), null === cm && null !== jm && (0, ka.jsx)("p", {
                className: "Baf2ColStateFix",
                children: wm(jm.key, {
                  item: xa(wm, jm.item)
                })
              }), zm && (0, ka.jsx)("p", {
                className: "Baf2ColStateFix",
                children: wm(zm.key, {
                  target: xa(wm, zm.target),
                  amount: String(null !== (fm = zm.ni) && void 0 !== fm ? fm : 0)
                })
              }), (0, ka.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, ka.jsx)(Vi, {
                  item: Eh,
                  ni: im.baf2ColSa,
                  need: ih.NOVA_SA,
                  cap: ih.SA_CAP
                }), (0, ka.jsx)(Vi, {
                  item: oh,
                  ni: im.baf2ColGd,
                  need: ih.NOVA_GD,
                  cap: ih.GD_CAP
                }), (0, ka.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, ka.jsx)(Ii, {
                    item: "Nova Matter"
                  }), (0, ka.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: wm(`${Di}colNovaHeld`, {
                      amount: String(im.baf2ColOut),
                      cap: String(ih.OUT_CAP)
                    })
                  }), Vm && (0, ka.jsx)(cx.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === im.baf2ColOut,
                    onClick: () => {
                      Dm.send(rD(im, "take"))
                    },
                    children: wm(`${Di}colTake`)
                  })]
                })]
              }), Vm && (0, ka.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": Jm,
                className: zA()("Baf2ColHold", {
                  On: Jm
                }),
                onClick: mm => {
                  mm.detail > 0 && mm.currentTarget.blur(), Em(!Jm), Dm.send(rD(im, "hold " + (Jm ? 0 : 1)))
                },
                children: [(0, ka.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, ka.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, ka.jsx)("b", {
                    children: wm(`${Di}colHold`)
                  }), (0, ka.jsx)("span", {
                    children: wm(`${Di}colHoldNote`)
                  })]
                })]
              })]
            }), (0, ka.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, ka.jsx)(qi, {
                status: im,
                entry: Rm
              }), (0, ka.jsx)("ul", {
                className: "Baf2ColSlots",
                children: LD(im.baf2ColLasers, im.baf2ColSpots, im.baf2ColLive, Km.beamsOn, null !== (Am = im.baf2ColGaps) && void 0 !== Am ? Am : 0).map((mm => (0, ka.jsxs)("li", {
                  className: mm.tone,
                  children: [(0, ka.jsx)("b", {
                    children: oi(wm, mm.title)
                  }), null !== mm.hint && (0, ka.jsx)("span", {
                    children: oi(wm, mm.hint)
                  })]
                }, mm.dir)))
              }), (0, ka.jsx)(ji, {
                status: im
              })]
            })]
          })]
        })
      })
    }
    const ni = "buildAFactory2Game:",
      Ji = 36e5,
      ci = 864e5;

    function zi(mm, Tm, fm) {
      return Math.max(0, Math.ceil((mm + Tm - Math.max(fm, mm)) / 1e3))
    }

    function Zi(mm) {
      return mm.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function ki(mm) {
      return "Homestead" === mm
    }

    function bi(mm) {
      return function(mm) {
        let Tm = 0;
        for (const fm of mm) {
          const mm = /^Island ([1-9]\d{0,5})$/.exec(fm);
          mm && (Tm = Math.max(Tm, Number(mm[1])))
        }
        return `Island ${Tm+1}`
      }(mm.map((mm => mm.baf2IslandName)))
    }

    function Si(mm, Tm) {
      return function(mm) {
        return `${ni}islandsBlocked${mm[0].toUpperCase()}${mm.slice(1)}`
      }("degraded" === mm && 0 === Tm ? "stuck" : mm)
    }

    function ei(mm) {
      return mm.filter((mm => {
        var Tm;
        return !mm.baf2IslandActive && void 0 === mm.baf2IslandUnreadable && void 0 === (null === (Tm = mm.baf2IslandCoop) || void 0 === Tm ? void 0 : Tm.baf2CoopState)
      })).length
    }

    function Ni(mm) {
      return "coopMoving" === mm || "coopUnreachable" === mm
    }

    function Gi(mm, Tm) {
      const fm = Tm > 0;
      return {
        change: null === mm && !fm,
        switch: (null === mm || "degraded" === mm || Ni(mm)) && !fm,
        rename: "loading" !== mm && "degraded" !== mm && "stuck" !== mm
      }
    }

    function Xi(mm, Tm) {
      return void 0 === mm || "corrupt" === mm && Tm
    }
    const Pi = Hx;

    function Hi(mm, Tm, fm) {
      if (null !== mm && void 0 !== mm && mm.untilGone) {
        var hm;
        return !("dismiss" === mm.untilGone && void 0 === (null === (hm = Tm.baf2IslandCoop) || void 0 === hm ? void 0 : hm.baf2CoopState)) && fm - mm.atMs < 32500
      }
      return void 0 !== mm && fm - mm.atMs < Pi && Tm.baf2IslandName === mm.from
    }
    const yi = Hx;

    function Ci(mm) {
      return "core" === (null === mm || void 0 === mm ? void 0 : mm.kind) ? mm.core : "islands" === (null === mm || void 0 === mm ? void 0 : mm.kind) ? mm.backToCore : void 0
    }

    function ri(mm) {
      return `\0${mm}\0`
    }

    function si(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const hm = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const am of Object.keys(fm)) hm[am] = ri(am);
      let Am = Object.keys(hm).length > 0 ? mm(Tm, hm) : mm(Tm);
      for (const [am, xm] of Object.entries(fm)) Am = Am.split(ri(am)).join(xm);
      return Am
    }

    function li(mm, Tm) {
      return mm ? Tm ? "enabled" : "disabled" : "hidden"
    }
    const Mi = {
      removed: `${ni}islandsCoopRemoved`,
      deleted: `${ni}islandsCoopDeleted`,
      notReady: `${ni}islandsCoopNotReady`,
      gone: `${ni}islandsCoopGone`
    };

    function ui(mm) {
      var Tm;
      return "member" !== (null === (Tm = mm.baf2IslandCoop) || void 0 === Tm ? void 0 : Tm.baf2CoopRole) && "newer" !== mm.baf2IslandUnreadable
    }

    function Bi(mm, Tm, fm, hm, Am, am) {
      const xm = mm.baf2IslandActive,
        wm = mm.baf2IslandUnreadable,
        Dm = mm.baf2IslandCoop,
        im = function(mm, Tm, fm) {
          return {
            switch: mm.switch && void 0 === Tm,
            delete: mm.change && Xi(Tm, fm)
          }
        }(Tm, wm, hm),
        Rm = xm && void 0 !== Dm && void 0 === Dm.baf2CoopState && "coopUnreachable" === am,
        pm = {
          switch: li((!xm || Rm) && void 0 === wm, Rm || im.switch),
          switchLabel: Rm ? "tryAgain" : "switch",
          rename: li(!0, Tm.rename),
          delete: li(!xm, im.delete),
          deleteWaits: !xm && Xi(wm, hm),
          people: li(void 0 !== mm.baf2IslandInvitable || Am && xm && void 0 === wm && void 0 === Dm, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        Em = !xm && im.delete;
      if (void 0 === Dm) return fm ? {
        ...pm,
        delete: li(!xm, !1),
        deleteWaits: !1,
        note: Em ? {
          key: `${ni}islandsCoopKeepOwn`
        } : null
      } : pm;
      const om = Dm.baf2CoopState,
        Om = Dm.baf2CoopMembers.length > 1,
        Ym = {
          ...pm,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== om && "member" === Dm.baf2CoopRole) return {
        ...Ym,
        dismiss: li(!0, Tm.rename),
        note: {
          key: Mi[om],
          names: {
            owner: Dm.baf2CoopOwner
          }
        }
      };
      if (void 0 !== om) {
        let mm = {
          key: `${ni}islandsCoopOwnLost`
        };
        return Em && Om ? mm = {
          key: `${ni}islandsCoopDeleteMembers`
        } : Em && fm && (mm = {
          key: `${ni}islandsCoopKeepOwn`
        }), {
          ...Ym,
          delete: li(!xm, im.delete && !Om && !fm),
          deleteWaits: pm.deleteWaits && !Om && !fm,
          note: mm
        }
      }
      if ("member" === Dm.baf2CoopRole) return {
        ...pm,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: li(!0, xm ? Tm.switch : Tm.rename)
      };
      const qm = Dm.baf2CoopManageHere;
      let jm = null;
      var Vm;
      qm || xm ? Em && Om ? jm = {
        key: `${ni}islandsCoopDeleteMembers`
      } : Em && fm && (jm = {
        key: `${ni}islandsCoopKeepOwn`
      }) : jm = {
        key: null !== (Vm = Dm.baf2CoopLeft) && void 0 !== Vm && Vm.length ? `${ni}islandsCoopManageThereClaim` : `${ni}islandsCoopManageThere`
      };
      return {
        ...pm,
        rename: li(!0, Tm.rename && qm),
        delete: li(!xm, im.delete && !Om && !fm),
        deleteWaits: pm.deleteWaits && !Om && !fm,
        people: "enabled",
        peopleLabel: "players",
        unshare: li(qm && xm && !Om, Tm.change),
        remove: qm,
        note: jm
      }
    }

    function Li(mm) {
      var Tm;
      const fm = mm.baf2IslandCoop;
      if ("owner" !== (null === fm || void 0 === fm ? void 0 : fm.baf2CoopRole) || void 0 !== fm.baf2CoopState || null === (Tm = fm.baf2CoopLeft) || void 0 === Tm || !Tm.length) return null;
      const hm = mm.baf2IslandActive && fm.baf2CoopManageHere;
      return {
        left: fm.baf2CoopLeft,
        claim: hm,
        goThere: !hm && fm.baf2CoopManageHere
      }
    }

    function vi(mm) {
      return mm.baf2CoopMembers.length >= mm.baf2CoopMax
    }

    function ti(mm, Tm, fm) {
      return void 0 !== mm && Tm < mm.answer && fm - mm.atMs < Pi
    }
    const Ui = "buildAFactory2Game:";

    function di(mm, Tm) {
      return {
        onKeyDown: fm => {
          fm.stopPropagation(), fm.nativeEvent.isComposing || 229 === fm.nativeEvent.keyCode || ("Enter" === fm.key ? (fm.preventDefault(), mm()) : "Escape" === fm.key && (fm.preventDefault(), Tm()))
        }
      }
    }

    function gi(mm) {
      return {
        onKeyDown: Tm => {
          "Escape" !== Tm.key || Tm.nativeEvent.isComposing || (Tm.preventDefault(), Tm.stopPropagation(), mm())
        }
      }
    }

    function Wi(mm) {
      mm.currentTarget.select()
    }

    function Fi(mm, Tm) {
      (0, hm.useEffect)((() => {
        var fm;
        mm && (null === (fm = Tm.current) || void 0 === fm || fm.scrollIntoView({
          block: "nearest"
        }))
      }), [mm, Tm])
    }

    function mR(mm) {
      const [Tm, fm] = (0, hm.useState)(null);
      return (0, hm.useEffect)((() => {
        const Tm = document.querySelector(".UiRequests"),
          hm = mm.current;
        if (!Tm || !hm || "undefined" === typeof ResizeObserver) return;
        const Am = () => {
          const mm = Tm.getBoundingClientRect(),
            Am = hm.getBoundingClientRect(),
            am = hm.parentElement,
            xm = am && parseFloat(getComputedStyle(am).paddingTop) || 0,
            wm = function(mm, Tm, fm, hm) {
              if (!mm || mm.height <= 0 || mm.right <= Tm.left || mm.left >= Tm.right) return null;
              const Am = Math.max(hm, mm.bottom + 8);
              return {
                marginTop: Math.round(Am - hm),
                maxHeight: Math.max(0, Math.floor(fm - Am - hm))
              }
            }(mm, Am, window.innerHeight, xm);
          fm((mm => (null === mm || void 0 === mm ? void 0 : mm.marginTop) === (null === wm || void 0 === wm ? void 0 : wm.marginTop) && (null === mm || void 0 === mm ? void 0 : mm.maxHeight) === (null === wm || void 0 === wm ? void 0 : wm.maxHeight) ? mm : wm))
        };
        Am();
        const am = new ResizeObserver(Am);
        return am.observe(Tm), window.addEventListener("resize", Am), () => {
          am.disconnect(), window.removeEventListener("resize", Am)
        }
      }), [mm]), Tm
    }

    function TR() {
      (0, hm.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function fR(mm) {
      (0, hm.useEffect)((() => {
        var Tm;
        null === (Tm = mm.current) || void 0 === Tm || Tm.focus()
      }), [mm])
    }

    function hR(mm) {
      const [Tm, fm] = (0, hm.useState)(Date.now);
      return (0, hm.useEffect)((() => {
        const Tm = window.setInterval((() => {
          fm(Date.now())
        }), mm);
        return () => {
          window.clearInterval(Tm)
        }
      }), [mm]), Tm
    }

    function AR(mm) {
      let {
        tier: Tm,
        t: fm
      } = mm;
      const {
        kind: hm,
        short: Am
      } = qm(Tm), am = om(Tm, Om), xm = fm(`${Ui}${am.key}`, {
        ...am.params,
        name: fm(`${Ui}${jm(Tm).nameKey}`)
      });
      return (0, ka.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, ka.jsx)("span", {
          className: zA()("Baf2IslandTierPip", {
            Stage: "tier" !== hm
          }),
          "aria-hidden": "true",
          children: Am
        }), xm]
      })
    }

    function aR(mm) {
      let {
        note: Tm,
        className: fm,
        t: hm
      } = mm;
      return (0, ka.jsx)("p", {
        className: zA()("Baf2IslandNote", fm),
        children: si(hm, Tm.key, Tm.names, Tm.params)
      })
    }
    const xR = "buildAFactory2Game:";

    function wR(mm) {
      let {
        message: Tm,
        arrivedAtMs: fm,
        close: Am,
        leave: am
      } = mm;
      const xm = ux(),
        {
          t: wm
        } = (0, SA.A)(),
        Dm = hR(1e3),
        im = (0, hm.useRef)(null);
      TR(), (0, hm.useEffect)((() => {
        var mm;
        null === (mm = im.current) || void 0 === mm || mm.focus()
      }), []);
      const Rm = zi(fm, Tm.baf2TransferInMs, Dm),
        pm = fm + Tm.baf2TransferInMs - 1e3,
        [Em, om] = (0, hm.useState)(null);
      (0, hm.useEffect)((() => {
        const mm = window.setTimeout((() => {
          om(pm)
        }), Math.max(0, pm - Date.now()));
        return () => {
          window.clearTimeout(mm)
        }
      }), [pm]);
      const Om = Em === pm || Dm >= pm,
        Ym = Tm.baf2TransferIsland,
        qm = Tm.baf2TransferOwner;
      return (0, ka.jsx)(Jx.d, {
        close: Am,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, ka.jsxs)("section", {
          ref: im,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, ka.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, ka.jsxs)("div", {
              children: [(0, ka.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === qm ? si(wm, `${xR}islandsTransferOwn`, {
                  island: Ym
                }) : si(wm, `${xR}islandsTransfer`, {
                  island: Ym,
                  owner: qm
                })
              }), (0, ka.jsx)("p", {
                children: Om ? wm(`${xR}islandsTransferNow`) : wm(`${xR}islandsTransferIn`, {
                  time: Ja(wm, Rm)
                })
              })]
            }), (0, ka.jsx)(cx.j, {
              ariaLabel: wm(`${xR}islandsClose`),
              onClick: Am
            })]
          }), !Om && (0, ka.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, ka.jsx)("p", {
              className: "Baf2TransferNote",
              children: wm(`${xR}islandsTransferNote`)
            }), (0, ka.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, ka.jsx)(cx.e, {
                onClick: () => {
                  xm.send("baf2coopstay"), am()
                },
                children: wm(`${xR}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var DR = fm(1449),
      iR = fm(1164),
      RR = fm.n(iR);
    const pR = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const ER = "buildAFactory2Game:",
      oR = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function OR(mm, Tm, fm) {
      return void 0 === Tm ? fm : "string" === typeof Tm ? Tm : Array.isArray(Tm) ? Tm.map((Tm => "string" === typeof Tm ? Tm : "translationKey" in Tm ? mm(Tm.translationKey) : "")).join("") : mm(Tm.translationKey)
    }

    function YR(mm) {
      const Tm = {};
      for (const [fm, hm] of Object.entries(null !== mm && void 0 !== mm ? mm : {})) Tm[fm] = hm < 0 ? na(hm) : hm.toLocaleString("en-US");
      return Tm
    }

    function qR(mm, Tm) {
      const fm = Tm ? "touch" : "mouse";
      return {
        use: mm(`${ER}lookUse_${fm}`),
        Use: mm(`${ER}lookUseStart_${fm}`)
      }
    }
    const jR = (0, hm.memo)((function(mm) {
      let {
        item: Tm
      } = mm;
      return (0, ka.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, ka.jsx)(NA.d, {
          itemName: Tm,
          amount: 0
        })
      })
    }));

    function VR(mm) {
      let {
        label: Tm,
        percent: fm,
        progress: hm
      } = mm;
      return (0, ka.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, ka.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${Tm}: ${hm}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": fm,
          children: (0, ka.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${fm}%`
            }
          })
        }), (0, ka.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: hm
        })]
      })
    }

    function IR(mm) {
      let {
        chips: Tm
      } = mm;
      return (0, ka.jsx)("span", {
        className: "Baf2QuestChips",
        children: Tm.map((mm => {
          let [Tm, fm, hm] = mm;
          const Am = fm >= hm;
          return (0, ka.jsxs)("span", {
            className: zA()("Baf2QuestChip", {
              Met: Am
            }),
            children: [(0, ka.jsx)(jR, {
              item: Tm
            }), (0, ka.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Am ? `\u2713${hm}` : `${fm}/${hm}`
            })]
          }, Tm)
        }))
      })
    }

    function KR(mm, Tm) {
      const {
        key: fm,
        params: hm
      } = om(Tm, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return mm(`${ER}${fm}`, {
        ...hm,
        name: mm(`${ER}${jm(Tm).nameKey}`)
      })
    }

    function QR(mm) {
      let {
        core: Tm,
        t: fm
      } = mm;
      const [hm, Am] = Tm, am = Am > 0 ? Math.floor(100 * hm / Am) : 100;
      return (0, ka.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": fm(`${ER}questCoreLabel`, {
          have: String(hm),
          need: String(Am)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": am,
        children: [(0, ka.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: fm(`${ER}questCore`, {
            percent: String(am)
          })
        }), (0, ka.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, ka.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${am}%`
            }
          })
        })]
      })
    }

    function nR(mm) {
      let {
        rows: Tm,
        t: fm
      } = mm;
      const hm = Tm.filter((mm => mm.done)).length;
      return (0, ka.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": fm(`${ER}questStepsProgress`, {
          done: String(hm),
          total: String(Tm.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": Tm.length,
        "aria-valuenow": hm,
        children: Tm.map((mm => (0, ka.jsx)("span", {
          className: zA()("Baf2QuestSegment", {
            Done: mm.done,
            Current: mm.current
          })
        }, mm.id)))
      })
    }
    const JR = (0, hm.memo)(zR, cR);

    function cR(mm, Tm) {
      const fm = fm => mm.view.itemNames[fm] === Tm.view.itemNames[fm];
      return mm.t === Tm.t && mm.extra === Tm.extra && (null === mm.row.item || fm(mm.row.item)) && mm.row.madeFor.every(fm) && mm.row.also.every(fm) && RR()(mm.row, Tm.row)
    }

    function zR(mm) {
      let {
        row: Tm,
        view: fm,
        t: hm,
        extra: Am
      } = mm;
      const {
        isTouchScreen: am
      } = (0, nA.m)(["isTouchScreen"]), xm = Tm.item ? function(mm, Tm, fm) {
        return 1 !== fm && pR.has(mm) ? bA(Tm) : null
      }(Tm.key, Tm.item, Tm.total) : null, wm = xm ? hm(xm) : Tm.item ? OR(hm, fm.itemNames[Tm.item], Tm.item) : "", Dm = Tm.also.map((mm => OR(hm, fm.itemNames[mm], mm))), im = Dm.join(", "), Rm = function(mm, Tm) {
        var fm;
        return Tm.length < 2 ? null !== (fm = Tm[0]) && void 0 !== fm ? fm : "" : mm(`${ER}listAnd`, {
          rest: Tm.slice(0, -1).join(mm(`${ER}listComma`)),
          last: Tm[Tm.length - 1]
        })
      }(hm, [wm, ...Dm]), pm = hm(`${ER}${Tm.key}`, {
        ...qR(hm, am),
        ...YR(Tm.params),
        item: wm,
        also: im,
        itemList: Rm,
        total: String(Tm.total)
      }), [Em, ...om] = pm.split("\n"), Om = Tm.total > 1 && !Tm.done && !Tm.away;
      return (0, ka.jsxs)("li", {
        className: zA()("Baf2QuestStep", {
          Done: Tm.done,
          Current: Tm.current,
          JustFinished: Tm.justFinished,
          Away: Tm.away
        }),
        children: [!Tm.done && null !== Tm.item && (0, ka.jsx)(jR, {
          item: Tm.item
        }), (Tm.done || null === Tm.item) && (0, ka.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: Tm.done ? "\u2713" : "\u25cb"
        }), (0, ka.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, ka.jsx)("strong", {
            children: Em
          }), om.length > 0 && (0, ka.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: om.join(" ")
          }), !Tm.done && Tm.madeFor.length > 0 && (0, ka.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: hm("buildAFactory2Game:questRowFor", {
              items: Tm.madeFor.map((mm => OR(hm, fm.itemNames[mm], mm))).join(" \u2192 ")
            })
          }), Om && (0, ka.jsx)(VR, {
            label: Em,
            percent: Math.round(100 * Tm.amount / Tm.total),
            progress: `${Tm.amount.toLocaleString("en-US")}/${Tm.total.toLocaleString("en-US")}`
          }), !Tm.done && !Tm.away && Tm.chips && Tm.chips.length > 0 && (0, ka.jsx)(IR, {
            chips: Tm.chips
          }), Am]
        })]
      })
    }
    const ZR = "buildAFactory2Game:",
      kR = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      bR = {
        on: `${ZR}tutorialButtonOn`,
        hud: `${ZR}tutorialButtonHud`,
        off: `${ZR}tutorialButtonOff`
      },
      SR = {
        on: `${ZR}tutorialPickedOn`,
        hud: `${ZR}tutorialPickedHud`,
        off: `${ZR}tutorialPickedOff`
      };
    class eR {
      constructor(mm, Tm, fm) {
        this.commands = mm, this.quests = Tm, this.toasts = fm
      }
      next() {
        const mm = function(mm) {
            return Nm[(Nm.indexOf(mm) + 1) % Nm.length]
          }(this.quests.get().tutorial),
          Tm = this.quests.setTutorial(mm);
        this.commands.send(`baf2tutorial ${mm} ${Tm}`), this.toasts.show({
          baf2ToastText: [(0, Xm.Vd)({
            translationKey: SR[mm]
          }, Xm.J.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function NR(mm, Tm) {
      let [fm, hm] = Tm;
      return mm(`${ER}${fm}`, YR(hm))
    }

    function GR(mm) {
      let [Tm, fm] = mm;
      return Tm + JSON.stringify(fm)
    }

    function XR(mm) {
      let {
        goal: Tm,
        t: fm
      } = mm;
      return Tm ? (0, ka.jsx)("span", {
        className: "Baf2BookGoal",
        children: fm(`${ER}${Tm}`)
      }) : null
    }

    function PR(mm) {
      let {
        view: Tm,
        t: fm
      } = mm;
      if (!Tm.name) return null;
      const hm = LA(Tm.rows);
      return (0, ka.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, ka.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: fm(`${ER}currentQuest`)
        }), (0, ka.jsx)("strong", {
          className: "Baf2BookTitle",
          children: NR(fm, Tm.name)
        }), (0, ka.jsx)(XR, {
          goal: Tm.goal,
          t: fm
        }), hm.length > 1 && (0, ka.jsx)(nR, {
          rows: hm,
          t: fm
        }), (0, ka.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: Tm.rows.map((mm => (0, ka.jsx)(JR, {
            row: mm,
            view: Tm,
            t: fm
          }, mm.id)))
        }), Tm.reward && (0, ka.jsxs)("span", {
          className: "Baf2BookReward",
          children: [fm(`${ER}questReward`), (0, ka.jsx)(jR, {
            item: Tm.reward
          }), OR(fm, Tm.itemNames[Tm.reward], Tm.reward)]
        })]
      })
    }

    function HR(mm) {
      let {
        quest: Tm,
        upcoming: fm,
        t: hm
      } = mm;
      return (0, ka.jsxs)("li", {
        className: zA()("Baf2BookQuest", {
          Done: Tm[3],
          Upcoming: fm
        }),
        children: [(0, ka.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: Tm[3] ? "\u2713" : "\u25cb"
        }), (0, ka.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, ka.jsx)("strong", {
            className: "Baf2BookTitle",
            children: NR(hm, Tm)
          }), (0, ka.jsx)(XR, {
            goal: Tm[2],
            t: hm
          })]
        })]
      })
    }

    function yR(mm) {
      let {
        done: Tm,
        total: fm,
        t: hm
      } = mm;
      const Am = fm > 0 ? Math.round(100 * Tm / fm) : 0,
        am = hm(`${ER}questBookChapterProgress`, {
          done: String(Tm),
          total: String(fm)
        });
      return (0, ka.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, ka.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": am,
          "aria-valuemin": 0,
          "aria-valuemax": fm,
          "aria-valuenow": Tm,
          children: (0, ka.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Am}%`
            }
          })
        }), (0, ka.jsx)("span", {
          className: "Baf2BookProgressText",
          children: am
        })]
      })
    }

    function CR(mm) {
      let {
        view: Tm,
        tier: fm,
        quests: hm,
        t: Am
      } = mm;
      const am = fm === Tm.tier,
        xm = (null !== hm && void 0 !== hm ? hm : []).filter((mm => !mm[4])),
        wm = (null !== hm && void 0 !== hm ? hm : []).filter((mm => mm[4])),
        Dm = xm.filter((mm => mm[3])).length,
        im = am && Tm.name ? GR(Tm.name) : null,
        Rm = xm.findIndex((mm => !mm[3] && GR(mm) === im));
      return (0, ka.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, ka.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, ka.jsx)("h3", {
            children: KR(Am, fm)
          }), xm.length > 0 && (0, ka.jsx)(yR, {
            done: Dm,
            total: xm.length,
            t: Am
          }), am && Tm.core && (0, ka.jsx)(QR, {
            core: Tm.core,
            t: Am
          })]
        }), (0, ka.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === hm && am && (0, ka.jsx)(PR, {
            view: Tm,
            t: Am
          }), xm.map(((mm, fm) => fm === Rm ? (0, ka.jsx)(PR, {
            view: Tm,
            t: Am
          }, GR(mm)) : (0, ka.jsx)(HR, {
            quest: mm,
            upcoming: !mm[3],
            t: Am
          }, GR(mm))))]
        }), am && Tm.side && (0, ka.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, ka.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Am(`${ER}questSide`)
          }), (0, ka.jsx)("strong", {
            className: "Baf2BookTitle",
            children: NR(Am, Tm.side.name)
          }), (0, ka.jsx)(XR, {
            goal: Tm.side.goal,
            t: Am
          }), (0, ka.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, ka.jsx)(JR, {
              row: Tm.side.row,
              view: Tm,
              t: Am
            })
          })]
        }), wm.length > 0 && (0, ka.jsxs)(ka.Fragment, {
          children: [(0, ka.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Am(`${ER}questBookSidesDone`)
          }), (0, ka.jsx)("ol", {
            className: "Baf2BookQuests",
            children: wm.map((mm => (0, ka.jsx)(HR, {
              quest: mm,
              upcoming: !1,
              t: Am
            }, GR(mm))))
          })]
        })]
      })
    }

    function rR(mm) {
      var Tm, fm, am;
      let {
        store: xm,
        tutorial: wm,
        close: Dm
      } = mm;
      const {
        t: im
      } = (0, SA.A)(), pm = (0, DR.i)(CA, xm.get()), Em = null !== (Tm = pm.tier) && void 0 !== Tm ? Tm : 1, [om, Om] = (0, hm.useState)(null), jm = (null === om || void 0 === om ? void 0 : om.at) === Em ? om.tier : Em, Vm = (0, hm.useRef)(null), Im = null !== pm.chapters;
      (0, hm.useEffect)((() => {
        var mm;
        Vm.current && (Vm.current.scrollTop = 0);
        const Tm = null === (mm = Vm.current) || void 0 === mm ? void 0 : mm.querySelector(".Baf2BookQuest.Current");
        if (Vm.current && Tm) {
          const mm = Tm.getBoundingClientRect().bottom - Vm.current.getBoundingClientRect().bottom;
          mm > 0 && (Vm.current.scrollTop += Math.min(mm, Tm.getBoundingClientRect().top - Vm.current.getBoundingClientRect().top))
        }
      }), [jm, Im]);
      const Km = null === (fm = pm.chapters) || void 0 === fm ? void 0 : fm.find((mm => {
        let [Tm] = mm;
        return Tm === jm
      }));
      return (0, ka.jsx)(Jx.d, {
        close: Dm,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, ka.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: oR,
          children: [(0, ka.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, ka.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: im(`${ER}questBookTitle`)
            }), (0, ka.jsx)(cx.m, {
              className: "Baf2BookTutorialButton",
              disabled: !pm.tutorialKnown,
              ariaLabel: im(bR[pm.tutorial]),
              title: im(bR[pm.tutorial]),
              onClick: () => {
                wm.next()
              },
              children: (0, ka.jsx)(eA.c, {
                name: kR[pm.tutorial]
              })
            }), (0, ka.jsx)(cx.j, {
              onClick: Dm
            })]
          }), (0, ka.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": im(`${ER}questBookChapters`),
            "data-pad-initial-area": !0,
            children: Am.slice(0, Rm()).map(((mm, Tm) => {
              const fm = Tm + 1,
                {
                  kind: hm,
                  short: Am
                } = qm(fm),
                am = Ym(fm, Em),
                xm = am ? im(`${ER}coreAtomicHidden`) : KR(im, fm);
              return (0, ka.jsx)("li", {
                children: (0, ka.jsx)("button", {
                  type: "button",
                  className: zA()({
                    Stage: "tier" !== hm,
                    Atomic: "atomic" === hm,
                    Current: fm === Em,
                    Selected: fm === jm
                  }),
                  disabled: fm > Em,
                  "aria-pressed": fm === jm,
                  "aria-label": xm,
                  title: am ? void 0 : xm,
                  onClick: () => {
                    Om({
                      tier: fm,
                      at: Em
                    })
                  },
                  children: am ? "?" : Am
                })
              }, mm.nameKey)
            }))
          }), (0, ka.jsxs)("div", {
            ref: Vm,
            className: "Baf2BookBody",
            children: [uA(pm) && jm === Em && (0, ka.jsx)("p", {
              className: "Baf2BookEmpty",
              children: im(`${ER}questBookAllDone`)
            }), (0, ka.jsx)(CR, {
              view: pm,
              tier: jm,
              quests: null !== (am = null === Km || void 0 === Km ? void 0 : Km[1]) && void 0 !== am ? am : null,
              t: im
            })]
          })]
        })
      })
    }
    const sR = "buildAFactory2Game:";

    function lR(mm) {
      let {
        tiers: Tm,
        from: fm,
        tier: hm,
        shown: Am,
        Do: am
      } = mm;
      const {
        t: xm
      } = (0, SA.A)(), wm = Tm.map(((mm, Tm) => {
        const wm = fm + Tm,
          {
            kind: Dm,
            short: im
          } = qm(wm),
          Rm = Ym(wm, hm);
        return (0, ka.jsx)("li", {
          children: (0, ka.jsx)("button", {
            type: "button",
            className: zA()({
              Stage: "tier" !== Dm,
              Silhouette: Rm,
              Reached: wm <= hm,
              Current: wm === hm,
              Next: wm === hm + 1,
              Selected: wm === Am
            }),
            disabled: Rm,
            "aria-pressed": wm === Am,
            "aria-label": Rm ? xm(`${sR}coreAtomicHidden`) : void 0,
            title: Rm ? void 0 : xm(`${sR}${mm.nameKey}`),
            onClick: () => {
              am(wm)
            },
            children: Rm ? "?" : im
          })
        }, mm.nameKey)
      }));
      return (0, ka.jsx)(ka.Fragment, {
        children: wm
      })
    }

    function MR(mm) {
      let {
        id: Tm,
        label: fm,
        tiers: hm,
        from: Am,
        ...am
      } = mm;
      return (0, ka.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, ka.jsx)("span", {
          id: Tm,
          className: "Baf2CoreLadderLabel",
          children: fm
        }), (0, ka.jsx)("ol", {
          "aria-labelledby": Tm,
          children: (0, ka.jsx)(lR, {
            ...am,
            tiers: hm,
            from: Am
          })
        })]
      })
    }

    function uR(mm) {
      const {
        t: Tm
      } = (0, SA.A)(), fm = Am.findIndex((mm => void 0 !== mm.stage)), hm = Am.findIndex((mm => void 0 !== mm.reactorTier)), am = fm < 0 ? Am : Am.slice(0, fm), xm = fm < 0 ? [] : Am.slice(fm, hm < 0 ? void 0 : hm), Dm = hm < 0 || !wm() ? [] : Am.slice(hm);
      return (0, ka.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, ka.jsx)(MR, {
          ...mm,
          id: "baf2CoreTiersLabel",
          label: Tm(`${sR}coreTiersLabel`),
          tiers: am,
          from: 1
        }), xm.length > 0 && (0, ka.jsx)(MR, {
          ...mm,
          id: "baf2CoreStagesLabel",
          label: Tm(`${sR}coreStagesLabel`),
          tiers: xm,
          from: fm + 1
        }), Dm.length > 0 && (0, ka.jsx)(MR, {
          ...mm,
          id: "baf2CoreAtomicLabel",
          label: Tm(`${sR}coreAtomicLabel`),
          tiers: Dm,
          from: hm + 1
        })]
      })
    }
    const BR = "buildAFactory2Game:";

    function LR(mm) {
      let {
        item: Tm,
        itemNames: fm,
        children: hm
      } = mm;
      return (0, ka.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, ka.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, ka.jsx)(NA.d, {
            itemName: Tm,
            amount: 0
          })
        }), (0, ka.jsx)(GA.b, {
          text: fm[Tm]
        }), hm]
      })
    }

    function vR(mm) {
      const Tm = new Map;
      for (const {
          block: hm
        }
        of mm.newDeposits) {
        var fm;
        Tm.set(hm, (null !== (fm = Tm.get(hm)) && void 0 !== fm ? fm : 0) + 1)
      }
      return [...Tm]
    }

    function tR(mm) {
      let {
        value: Tm,
        label: fm,
        more: hm
      } = mm;
      return (0, ka.jsxs)("li", {
        children: [(0, ka.jsx)("strong", {
          children: Tm
        }), (0, ka.jsx)("span", {
          children: fm
        }), hm > 0 && (0, ka.jsxs)("em", {
          children: ["+", hm]
        })]
      })
    }

    function UR(mm) {
      let {
        items: Tm,
        itemNames: fm
      } = mm;
      const {
        t: Am
      } = (0, SA.A)(), [am, xm] = (0, hm.useState)(null), wm = null !== am && Tm.includes(am) ? am : null;
      return (0, ka.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, ka.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Am(`${BR}coreRewardUnlocks`)
        }), (0, ka.jsx)("ul", {
          children: Tm.map((mm => (0, ka.jsx)("li", {
            children: (0, ka.jsx)("button", {
              type: "button",
              className: zA()("Baf2PanelIcon", {
                Picked: mm === wm
              }),
              title: xa(Am, mm),
              "aria-label": xa(Am, mm),
              "aria-pressed": mm === wm,
              onClick: () => {
                xm(mm === wm ? null : mm)
              },
              children: (0, ka.jsx)(NA.d, {
                itemName: mm,
                amount: 0
              })
            })
          }, mm)))
        }), (0, ka.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== wm && (0, ka.jsxs)(ka.Fragment, {
            children: [(0, ka.jsx)(GA.b, {
              text: fm[wm]
            }), " \xb7 ", (0, ka.jsx)(GA.b, {
              text: fm[Sm(wm)]
            })]
          }), null === wm && Am(`${BR}coreRecipeTap`)]
        })]
      })
    }

    function dR(mm) {
      var Tm, fm;
      let {
        def: hm,
        tier: Am,
        itemNames: am
      } = mm;
      const {
        t: xm
      } = (0, SA.A)(), wm = Am > 1 ? jm(Am - 1) : void 0, Dm = Math.round(2 * hm.islandRadius), im = wm ? Math.round(2 * wm.islandRadius) : Dm, Rm = Am >= 3 ? ch(Am) : null;
      return (0, ka.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, ka.jsxs)("ul", {
          className: zA()("Baf2CoreStats", {
            Four: null !== Rm
          }),
          children: [(0, ka.jsx)(tR, {
            value: `${Dm}\xd7${Dm}`,
            label: xm(`${BR}coreStatIsland`),
            more: Dm - im
          }), (0, ka.jsx)(tR, {
            value: String(hm.machineAllowance),
            label: xm(`${BR}coreStatMachines`),
            more: hm.machineAllowance - (null !== (Tm = null === wm || void 0 === wm ? void 0 : wm.machineAllowance) && void 0 !== Tm ? Tm : hm.machineAllowance)
          }), (0, ka.jsx)(tR, {
            value: String(hm.beltAllowance),
            label: xm(`${BR}coreStatBelts`),
            more: hm.beltAllowance - (null !== (fm = null === wm || void 0 === wm ? void 0 : wm.beltAllowance) && void 0 !== fm ? fm : hm.beltAllowance)
          }), null !== Rm && (0, ka.jsx)(tR, {
            value: String(Rm),
            label: xm(`${BR}coreStatStorage`),
            more: Rm - (wm ? ch(Am - 1) : Rm)
          })]
        }), hm.reward && (0, ka.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, ka.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: xm(`${BR}coreRewardItem`)
          }), (0, ka.jsx)(LR, {
            item: hm.reward,
            itemNames: am
          })]
        }), hm.newDeposits.length > 0 && (0, ka.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, ka.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: xm(hm.newDeposits.length > 1 ? `${BR}coreRewardDeposits` : `${BR}coreRewardDeposit`)
          }), vR(hm).map((mm => {
            let [Tm, fm] = mm;
            return (0, ka.jsx)(LR, {
              item: Tm,
              itemNames: am,
              children: fm > 1 && ` \xd7${fm}`
            }, Tm)
          }))]
        }), hm.unlocks.length > 0 && (0, ka.jsx)(UR, {
          items: hm.unlocks,
          itemNames: am
        }), (0, ka.jsx)(gR, {
          tier: Am
        })]
      })
    }

    function gR(mm) {
      let {
        tier: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)(), hm = VA[Tm];
      if (!hm) return null;
      const Am = jA(Tm, 0, 0).barrierMax !== jA(Tm - 1, 0, 0).barrierMax;
      return (0, ka.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, ka.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, ka.jsx)(NA.d, {
            itemName: Am ? pA.Chestplate : RA,
            amount: 0
          })
        }), fm(`${BR}gearPerkLine`, {
          perk: fm(`${BR}${hm}`)
        })]
      })
    }

    function WR(mm, Tm) {
      return null === mm ? Tm : mm.value
    }

    function FR(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === mm || fm - mm.atMs >= hm ? null : Am(mm.value, Tm) ? mm.armed ? null : mm : mm.armed ? mm : {
        ...mm,
        armed: !0
      }
    }

    function mp(mm, Tm) {
      const fm = Tm.filter((Tm => {
        var fm;
        return !1 !== (null === (fm = mm.get(Tm)) || void 0 === fm ? void 0 : fm.value)
      }));
      for (const [hm, Am] of mm) Am.value && !Tm.includes(hm) && fm.push(hm);
      return fm
    }

    function Tp(mm, Tm, fm, Am) {
      const [am, xm] = (0, hm.useState)((() => new Map)), wm = () => {
        xm((Tm => function(mm, Tm, fm, hm) {
          var Am;
          let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            xm = null;
          for (const [wm, Dm] of mm) {
            const Am = FR(Dm, Tm(wm), fm, hm, am);
            Am !== Dm && (xm ??= new Map(mm), null === Am ? xm.delete(wm) : xm.set(wm, Am))
          }
          return null !== (Am = xm) && void 0 !== Am ? Am : mm
        }(Tm, mm, Date.now(), fm, Am)))
      };
      (0, hm.useEffect)((() => {
        wm()
      }), [Tm, fm]), (0, hm.useEffect)((() => {
        if (0 === am.size) return;
        const mm = Math.min(...[...am.values()].map((mm => mm.atMs))),
          Tm = setTimeout(wm, Math.max(0, mm + fm - Date.now()) + 1);
        return () => {
          clearTimeout(Tm)
        }
      }), [am, Tm, fm]);
      return [am, (Tm, fm) => {
        xm((hm => {
          const am = new Map(hm);
          return am.set(Tm, function(mm, Tm, fm) {
            return {
              value: mm,
              atMs: fm,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(mm, Tm)
            }
          }(fm, mm(Tm), Date.now(), Am)), am
        }))
      }]
    }
    const fp = "buildAFactory2Game:";

    function hp(mm) {
      let {
        message: Tm,
        itemNames: fm
      } = mm;
      const Am = ux(),
        {
          t: am
        } = (0, SA.A)(),
        [xm, wm] = (0, hm.useState)(!1),
        [Dm, im] = function(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hx;
          const [fm, hm] = Tp((Tm => mm.includes(Tm)), mm, Tm, Object.is);
          return [mp(fm, mm), hm]
        }(Tm.baf2CoreBankPaused),
        Rm = new Set(Dm),
        pm = [...Tm.baf2CoreBanked];
      for (const hm of Rm) pm.some((mm => {
        let [Tm] = mm;
        return Tm === hm
      })) || pm.push([hm, 0]);
      return 0 === pm.length ? null : (0, ka.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, ka.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": xm,
          onClick: () => {
            wm(!xm)
          },
          children: [(0, ka.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: am(`${fp}coreBankedLater`)
          }), (0, ka.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: pm.map((mm => {
              let [Tm, fm] = mm;
              const hm = Rm.has(Tm);
              return (0, ka.jsxs)("span", {
                className: zA()({
                  Paused: hm
                }),
                title: hm ? am(`${fp}coreBankPausedTag`) : void 0,
                children: [(0, ka.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, ka.jsx)(NA.d, {
                    itemName: Tm,
                    amount: 0
                  })
                }), fm, hm && (0, ka.jsx)(eA.c, {
                  name: "pause"
                })]
              }, Tm)
            }))
          }), (0, ka.jsx)(eA.c, {
            name: xm ? "angle-up" : "angle-down"
          })]
        }), xm && (0, ka.jsxs)(ka.Fragment, {
          children: [(0, ka.jsx)("ul", {
            children: pm.map((mm => {
              let [Tm, hm] = mm;
              const xm = Rm.has(Tm);
              return (0, ka.jsxs)("li", {
                children: [(0, ka.jsxs)(LR, {
                  item: Tm,
                  itemNames: fm,
                  children: [(0, ka.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: hm
                  }), xm && (0, ka.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: am(`${fp}coreBankPausedTag`)
                  })]
                }), (0, ka.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, ka.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === hm,
                    onClick: () => {
                      Am.send(`baf2corewithdraw ${hm} ${Tm}`)
                    },
                    children: am(`${fp}coreTake`)
                  }), (0, ka.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Am.send(`${Km} ${Tm}`), im(Tm, !xm)
                    },
                    children: am(xm ? `${fp}coreBankResume` : `${fp}coreBankStop`)
                  })]
                })]
              }, Tm)
            }))
          }), (0, ka.jsx)("p", {
            className: "Baf2CoreHint",
            children: am(`${fp}coreBankNote`)
          })]
        })]
      })
    }
    const Ap = "buildAFactory2Game:";

    function ap(mm) {
      const Tm = Math.max(0, Math.floor(mm));
      return `${Math.floor(Tm/60)}:${String(Tm%60).padStart(2,"0")}`
    }

    function xp(mm) {
      let {
        item: Tm
      } = mm;
      return (0, ka.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, ka.jsx)(NA.d, {
          itemName: Tm,
          amount: 0
        })
      })
    }

    function wp() {
      return (0, ka.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, ka.jsx)(eA.c, {
          name: "bolt"
        })
      })
    }

    function Dp(mm) {
      let {
        charge: Tm,
        hint: fm,
        itemNames: hm
      } = mm;
      const Am = ux(),
        {
          t: am
        } = (0, SA.A)(),
        [xm, wm, Dm, im, Rm, pm, Em] = Tm,
        [om, Om] = function(mm) {
          var Tm;
          let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hx,
            hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Am, am] = Tp((() => mm), mm, fm, hm);
          return [WR(null !== (Tm = Am.get("")) && void 0 !== Tm ? Tm : null, mm), mm => {
            am("", mm)
          }]
        }(Em),
        Ym = om === Em ? pm : !om,
        qm = im >= Rm,
        jm = xm.find((mm => {
          let [, Tm, fm] = mm;
          return fm < .9 * Tm
        }));
      let Vm = `${Ap}coreChargeWaiting`,
        Im = {};
      return qm ? Vm = `${Ap}coreChargeDone` : om ? Vm = `${Ap}coreChargeStopped` : Ym && fm ? (Vm = `${Ap}${fm[0]}`, Im = {
        item: xa(am, fm[1])
      }) : Ym && jm ? (Vm = `${Ap}coreChargeShort`, Im = {
        item: xa(am, jm[0])
      }) : Ym && wm > 0 && !Dm ? Vm = `${Ap}coreChargePower` : Ym && (Vm = `${Ap}coreChargeRunning`), (0, ka.jsxs)("div", {
        className: zA()("Baf2CoreCharge", {
          Waiting: !Ym && !qm,
          Done: qm
        }),
        children: [(0, ka.jsxs)("h4", {
          children: [am(`${Ap}coreChargeTitle`), (0, ka.jsx)("span", {
            children: am(`${Ap}coreChargeProgress`, {
              done: ap(im),
              need: ap(Rm)
            })
          })]
        }), (0, ka.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, ka.jsx)("div", {
            style: {
              width: 100 * Math.min(im, Rm) / Rm + "%"
            }
          })
        }), (0, ka.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [xm.map((mm => {
            var Tm;
            let [fm, Am, xm] = mm;
            const wm = xm >= .9 * Am;
            return (0, ka.jsxs)("li", {
              className: zA()({
                Done: wm,
                Short: Ym && !wm
              }),
              children: [(0, ka.jsx)(xp, {
                item: fm
              }), (0, ka.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, ka.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, ka.jsx)(GA.b, {
                    text: null !== (Tm = hm[fm]) && void 0 !== Tm ? Tm : fm
                  }), (0, ka.jsx)("span", {
                    children: am(`${Ap}coreChargeItem`, {
                      now: String(xm),
                      need: String(Am)
                    })
                  })]
                }), (0, ka.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, ka.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*xm/Am)}%`
                    }
                  })
                })]
              })]
            }, fm)
          })), wm > 0 && (0, ka.jsxs)("li", {
            className: zA()("Baf2CoreChargePower", {
              Short: Ym && !Dm
            }),
            children: [(0, ka.jsx)(wp, {}), (0, ka.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, ka.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, ka.jsx)("span", {
                  children: am(`${Ap}coreChargePowerRow`, {
                    power: Wm(wm)
                  })
                })
              })
            })]
          })]
        }), (0, ka.jsx)("p", {
          className: "Baf2CoreHint",
          children: am(Vm, Im)
        }), !qm && (Ym || om) && (0, ka.jsx)("button", {
          type: "button",
          className: zA()("Baf2CoreChargeToggle", {
            Stopped: om
          }),
          onClick: () => {
            Am.send(nm), Om(!om)
          },
          children: am(om ? `${Ap}coreChargeRestart` : `${Ap}coreChargeStop`)
        })]
      })
    }

    function ip(mm) {
      let {
        charge: Tm,
        reached: fm,
        itemNames: hm
      } = mm;
      const {
        t: Am
      } = (0, SA.A)();
      return (0, ka.jsxs)("div", {
        className: zA()("Baf2CoreCharge", {
          Done: fm
        }),
        children: [(0, ka.jsxs)("h4", {
          children: [Am(`${Ap}coreChargeTitle`), (0, ka.jsx)("span", {
            children: Am(`${Ap}coreChargeSpecTime`, {
              time: ap(Tm.seconds)
            })
          })]
        }), (0, ka.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Tm.items.map((mm => {
            var Tm;
            let {
              item: am,
              amount: xm
            } = mm;
            return (0, ka.jsxs)("li", {
              className: zA()({
                Done: fm
              }),
              children: [(0, ka.jsx)(xp, {
                item: am
              }), (0, ka.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, ka.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, ka.jsx)(GA.b, {
                    text: null !== (Tm = hm[am]) && void 0 !== Tm ? Tm : am
                  }), (0, ka.jsx)("span", {
                    children: Am(`${Ap}coreChargeSpecItem`, {
                      need: String(xm)
                    })
                  })]
                })
              })]
            }, am)
          })), Tm.powerPerS > 0 && (0, ka.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, ka.jsx)(wp, {}), (0, ka.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, ka.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, ka.jsx)("span", {
                  children: Am(`${Ap}coreChargePowerRow`, {
                    power: Wm(Tm.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const Rp = "buildAFactory2Game:";

    function pp(mm) {
      let {
        def: Tm,
        reached: fm,
        banked: hm,
        itemNames: Am
      } = mm;
      const {
        t: am
      } = (0, SA.A)();
      return (0, ka.jsx)("ul", {
        className: "Baf2CoreCost",
        children: Tm.cost.map((mm => {
          let {
            item: Tm,
            amount: xm
          } = mm;
          const wm = fm ? 0 : hm(Tm);
          return (0, ka.jsx)("li", {
            children: (0, ka.jsx)(LR, {
              item: Tm,
              itemNames: Am,
              children: (0, ka.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: wm > 0 ? am(`${Rp}coreBankedFor`, {
                  amount: String(wm),
                  total: String(xm)
                }) : `\xd7${xm}`
              })
            })
          }, Tm)
        }))
      })
    }

    function Ep(mm, Tm) {
      if (Tm >= Rm()) return mm(`${Rp}coreMaxTier`);
      const fm = im[Tm + 1];
      return fm && !fm.startsWith("upgradeCore") ? mm(`${Rp}coreGateQuest`, {
        quest: mm(`${Rp}quest_${fm}`)
      }) : mm(`${Rp}coreGateClosed`)
    }

    function op() {
      const {
        t: mm
      } = (0, SA.A)(), Tm = ux(), fm = (0, hm.useRef)(null), Am = (0, hm.useRef)(Date.now());
      return Fi(!0, fm), (0, ka.jsx)("div", {
        ref: fm,
        className: "Baf2CoreGrow",
        children: (0, ka.jsx)(cx.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Am.current >= 600 && Tm.send(Im)
          },
          children: mm(`${Rp}coreGrow`)
        })
      })
    }

    function Op(mm) {
      let {
        message: Tm,
        itemNames: fm,
        next: hm
      } = mm;
      const Am = ux(),
        {
          t: am
        } = (0, SA.A)(),
        xm = Tm.baf2CoreTier,
        wm = Tm.baf2CoreReady,
        Dm = Tm.baf2CoreNeeds.filter((mm => {
          let [, Tm, fm, hm] = mm;
          return hm > 0 && Tm < fm
        })),
        im = Tm.baf2CoreNeeds.every((mm => {
          let [, Tm, fm] = mm;
          return Tm >= fm
        })),
        Rm = Tm.baf2CoreKeep;
      return (0, ka.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, ka.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [wm && (0, ka.jsx)(op, {}), (0, ka.jsx)("h3", {
            children: am(`${Rp}coreBring`)
          }), (0, ka.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: Tm.baf2CoreNeeds.map((mm => {
              let [Tm, hm, xm, wm] = mm;
              return (0, ka.jsxs)("li", {
                className: zA()({
                  Done: hm >= xm
                }),
                children: [(0, ka.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, ka.jsx)(NA.d, {
                    itemName: Tm,
                    amount: 0
                  })
                }), (0, ka.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, ka.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, ka.jsx)(GA.b, {
                      text: fm[Tm]
                    }), (0, ka.jsxs)("span", {
                      children: [hm, "/", xm]
                    })]
                  }), (0, ka.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, ka.jsx)("div", {
                      style: {
                        width: 100 * hm / xm + "%"
                      }
                    }), wm > 0 && (0, ka.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * wm / xm + "%"
                      }
                    })]
                  })]
                }), wm > 0 && hm < xm && (0, ka.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Am.send(`${Qm} ${Tm}`)
                  },
                  children: am(`${Rp}coreDeposit`, {
                    amount: String(wm)
                  })
                })]
              }, Tm)
            }))
          }), Tm.baf2CoreCharge && (0, ka.jsx)(Dp, {
            charge: Tm.baf2CoreCharge,
            hint: Tm.baf2CoreChargeHint,
            itemNames: fm
          }), !wm && Dm.length > 1 && (0, ka.jsx)(cx.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Am.send(Im)
            },
            children: am(`${Rp}coreHandOver`)
          }), !wm && void 0 !== Rm && (0, ka.jsx)("p", {
            className: "Baf2CoreHint",
            children: am(`${Rp}coreKeepRest`, {
              item: xa(am, Rm)
            })
          }), !wm && !im && 0 === Dm.length && void 0 === Rm && (0, ka.jsx)("p", {
            className: "Baf2CoreHint",
            children: am(`${Rp}coreNothingHeld`)
          }), (0, ka.jsx)(hp, {
            message: Tm,
            itemNames: fm
          })]
        }), (0, ka.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, ka.jsx)("h3", {
            children: am(`${Rp}coreRewards`)
          }), (0, ka.jsx)(dR, {
            def: hm,
            tier: xm + 1,
            itemNames: fm
          })]
        })]
      })
    }

    function Yp(mm) {
      let {
        message: Tm,
        itemNames: fm,
        shown: hm
      } = mm;
      const {
        t: Am
      } = (0, SA.A)(), am = Tm.baf2CoreTier, xm = jm(hm), wm = hm <= am, Dm = new Map(Tm.baf2CoreBanked), im = !Vm(am, Jm(Tm)) && hm === am;
      return (0, ka.jsxs)("div", {
        className: zA()("Baf2CoreBody", {
          Locked: !wm
        }),
        children: [(0, ka.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, ka.jsx)("h3", {
            children: Am(wm ? `${Rp}coreItTook` : `${Rp}coreItNeeds`)
          }), 0 === xm.cost.length && (0, ka.jsx)("p", {
            className: "Baf2CoreHint",
            children: Am(`${Rp}coreTierStart`)
          }), xm.cost.length > 0 && (0, ka.jsx)(pp, {
            def: xm,
            reached: wm,
            banked: mm => {
              var Tm;
              return function(mm, Tm, fm, hm) {
                let Am = mm;
                for (let xm = Tm + 2; xm <= fm; xm++) {
                  var am;
                  const mm = jm(xm).cost.find((mm => mm.item === hm)),
                    Tm = Math.min(Am, null !== (am = null === mm || void 0 === mm ? void 0 : mm.amount) && void 0 !== am ? am : 0);
                  if (xm === fm) return Tm;
                  Am -= Tm
                }
                return 0
              }(null !== (Tm = Dm.get(mm)) && void 0 !== Tm ? Tm : 0, am, hm, mm)
            },
            itemNames: fm
          }), xm.charge && (0, ka.jsx)(ip, {
            charge: xm.charge,
            reached: wm,
            itemNames: fm
          }), im && (0, ka.jsxs)(ka.Fragment, {
            children: [(0, ka.jsx)("p", {
              className: "Baf2CoreHint",
              children: Ep(Am, am)
            }), (0, ka.jsx)(hp, {
              message: Tm,
              itemNames: fm
            })]
          })]
        }), (0, ka.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, ka.jsx)("h3", {
            children: Am(wm ? `${Rp}coreGave` : `${Rp}coreLockedRewards`)
          }), (0, ka.jsx)(dR, {
            def: xm,
            tier: hm,
            itemNames: fm
          })]
        })]
      })
    }

    function qp(mm, Tm) {
      const {
        key: fm,
        params: hm
      } = om(Tm - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return mm(`${Rp}${fm}`, hm)
    }
    const jp = "buildAFactory2Game:",
      Vp = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Ip = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function Kp(mm) {
      let {
        view: Tm,
        close: fm,
        askIslands: Am
      } = mm;
      const {
        t: am
      } = (0, SA.A)(), [xm, wm] = (0, hm.useState)(!1);
      (0, hm.useEffect)((() => {
        if (!xm) return;
        const mm = window.setTimeout((() => {
          wm(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(mm)
        }
      }), [xm]);
      const {
        message: Dm,
        itemNames: im
      } = Tm, Rm = Dm.baf2CoreTier, pm = jm(Rm), Em = Vm(Rm, Jm(Dm)), [Ym, qm] = Dm.baf2CoreMachines, [Im, Km] = Dm.baf2CoreBelts, Qm = Dm.baf2CoreStorage, nm = Dm.baf2CoreReady, [cm, zm] = (0, hm.useState)(null), Zm = (null === cm || void 0 === cm ? void 0 : cm.at) === Rm && cm.ready === nm ? cm.tier : Em ? Rm + 1 : Rm;
      let km = "coreTierLocked";
      Zm <= Rm ? km = "coreTierReached" : Zm === Rm + 1 && (km = "coreTierNext");
      const bm = am(`${jp}${jm(Zm).nameKey}`),
        Sm = Zm === Rm + 1 ? Em : null,
        em = om(Zm, {
          tier: km,
          stage: Vp[km],
          atomic: Ip[km]
        }),
        Nm = am(`${jp}${em.key}`, {
          ...em.params,
          name: bm
        }),
        Gm = om(Rm, Om),
        Xm = am(`${jp}${Gm.key}`, {
          ...Gm.params,
          name: am(`${jp}${pm.nameKey}`)
        });
      return (0, ka.jsx)(Jx.d, {
        close: fm,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, ka.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, ka.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, ka.jsxs)("div", {
              children: [(0, ka.jsx)("h2", {
                id: "baf2CoreTitle",
                children: am(`${jp}coreTitle`)
              }), void 0 !== Dm.baf2CoreIslandName && (0, ka.jsx)("p", {
                className: "Baf2CoreIsland",
                children: Dm.baf2CoreIslandName
              }), (0, ka.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, ka.jsx)("span", {
                  children: Xm
                }), (0, ka.jsx)("span", {
                  className: zA()({
                    Full: Ym >= qm
                  }),
                  children: am(`${jp}coreMachineCount`, {
                    amount: String(Ym),
                    total: String(qm)
                  })
                }), (0, ka.jsx)("span", {
                  className: zA()({
                    Full: Im >= Km
                  }),
                  children: am(`${jp}coreBeltCount`, {
                    amount: String(Im),
                    total: String(Km)
                  })
                }), void 0 !== Qm && (0, ka.jsx)("span", {
                  className: zA()({
                    Full: Qm[0] >= Qm[1]
                  }),
                  children: am(`${jp}coreStorageCount`, {
                    amount: String(Qm[0]),
                    total: String(Qm[1])
                  })
                })]
              })]
            }), (0, ka.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [Dm.baf2CoreIslands && (0, ka.jsx)(cx.e, {
                className: "Baf2CoreIslandsButton",
                disabled: xm,
                onClick: () => {
                  wm(!0), Am()
                },
                children: am(`${jp}islandsOpenButton`)
              }), (0, ka.jsx)(cx.j, {
                onClick: fm
              })]
            })]
          }), (0, ka.jsx)(uR, {
            tier: Rm,
            shown: Zm,
            Do: mm => {
              zm({
                tier: mm,
                at: Rm,
                ready: nm
              })
            }
          }), (0, ka.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Nm, Zm > Rm + 1 && (0, ka.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: qp(am, Zm)
            })]
          }), 6 === Zm && Zm > Rm && (0, ka.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: am(`${jp}coreStagesNote`)
          }), 11 === Zm && Zm > Rm && (0, ka.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: am(`${jp}coreAtomicNote`)
          }), Sm && (0, ka.jsx)(Op, {
            message: Dm,
            itemNames: im,
            next: Sm
          }), !Sm && (0, ka.jsx)(Yp, {
            message: Dm,
            itemNames: im,
            shown: Zm
          })]
        })
      })
    }
    const Qp = {
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
    const np = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: Ra,
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

    function Jp(mm) {
      return mm.baf2DropCometOreOnly ? "dropCometOre" : mm.baf2DropCometIsotope ? "seed" === mm.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function cp(mm) {
      let {
        message: Tm,
        quests: fm,
        close: Am,
        leave: am
      } = mm;
      const xm = ux(),
        {
          t: wm
        } = (0, SA.A)(),
        Dm = (0, DR.i)(CA, fm.get()),
        im = function(mm) {
          var Tm;
          if (!Gm(mm.tutorial)) return null;
          const fm = mm.rows.find((mm => mm.current)),
            hm = fm ? Qp[fm.key] : void 0;
          return null !== (Tm = null !== hm && void 0 !== hm ? hm : mm.side ? Qp[mm.side.row.key] : void 0) && void 0 !== Tm ? Tm : null
        }(Dm),
        Rm = null === Dm.tier || oa(Dm.tier),
        pm = Rm ? np : np.filter((mm => {
          let {
            item: Tm
          } = mm;
          return Tm !== Ra
        })),
        [Em, om] = (0, hm.useState)(null),
        Om = null !== Em && void 0 !== Em ? Em : !Tm.baf2DropFoundSalvage && Rm,
        Ym = Tm.baf2DropRuinDistance,
        qm = Tm.baf2DropComet,
        jm = Tm.baf2DropOldWorks,
        Vm = Tm.baf2DropGrove,
        Im = function(mm) {
          return 2 + Number(void 0 !== mm.baf2DropComet) + Number(!!mm.baf2DropOwedComet || void 0 !== mm.baf2DropOwedWaitMinutes) + Number(void 0 !== mm.baf2DropDigDistance) + Number(void 0 !== mm.baf2DropOldWorks) + Number(void 0 !== mm.baf2DropGrove)
        }(Tm),
        Km = mm => {
          xm.send(function(mm) {
            return `baf2drop ${mm}`
          }(mm)), am()
        };
      let Qm = wm("buildAFactory2Game:dropRuinNone");
      if (null !== Ym) {
        let mm = Tm.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        Tm.baf2DropRuinOldWorks && (mm = "dropRuinOldWorks");
        const fm = void 0 === Tm.baf2DropRuinCluster ? wm("buildAFactory2Game:dropRuinOpen") : wm("buildAFactory2Game:dropRuinCluster", {
          count: String(Tm.baf2DropRuinCluster)
        });
        Qm = `${wm(`buildAFactory2Game:${mm}`,{distance:String(Ym)})} ${fm}`
      }
      let nm = wm("buildAFactory2Game:dropBelowDescription");
      void 0 !== Tm.baf2DropBelowLook && (nm = wm("buildAFactory2Game:dropBelowLook", {
        look: wm(Tm.baf2DropBelowLook)
      }));
      const Jm = "buildAFactory2Game:wildsRegion_survivorGrove" === Tm.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        cm = Ja(wm, 60 * function(mm) {
          const [Tm, fm] = (0, hm.useState)((() => Date.now())), [Am, am] = (0, hm.useState)(Tm);
          return (0, hm.useEffect)((() => {
            const mm = Date.now();
            fm(mm), am(mm)
          }), [mm]), (0, hm.useEffect)((() => {
            const mm = window.setInterval((() => {
              am(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(mm)
            }
          }), []), Math.max(1, mm.baf2DropRenewMinutes - Math.floor((Am - Tm) / 6e4))
        }(Tm)),
        zm = function(mm, Tm, fm) {
          return "ruin" === mm && !fm || "owed" === mm && !Tm.baf2DropOwedComet ? null : mm
        }(im, Tm, null !== Ym),
        Zm = function(mm) {
          for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
          return zA()("Baf2DropTile", ...fm, {
            Wanted: zm === mm
          })
        };
      return (0, ka.jsx)(Jx.d, {
        close: Am,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, ka.jsxs)("section", {
          className: zA()("Baf2Panel Baf2DropMap", {
            Many: Im >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, ka.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, ka.jsxs)("div", {
              children: [(0, ka.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: wm("buildAFactory2Game:dropMapTitle")
              }), (0, ka.jsx)("p", {
                children: wm("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, ka.jsx)(cx.j, {
              onClick: Am
            })]
          }), (0, ka.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== qm && (0, ka.jsxs)(cx.v, {
              className: Zm("comet", "Baf2DropComet"),
              onClick: () => {
                Km("comet")
              },
              children: [(0, ka.jsx)("strong", {
                children: wm("buildAFactory2Game:dropComet")
              }), (0, ka.jsx)("span", {
                children: wm(`buildAFactory2Game:${Jp(Tm)}`, {
                  distance: String(qm)
                })
              })]
            }), Tm.baf2DropOwedComet && (0, ka.jsxs)(cx.v, {
              className: Zm("owed", "Baf2DropComet"),
              onClick: () => {
                Km("owed")
              },
              children: [(0, ka.jsx)("strong", {
                children: wm("buildAFactory2Game:dropOwedComet")
              }), (0, ka.jsx)("span", {
                children: Tm.baf2DropOwedIsotope ? wm("buildAFactory2Game:dropOwedIsotopeDescription") : wm("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== Tm.baf2DropOwedWaitMinutes && (0, ka.jsxs)(cx.v, {
              className: Zm("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, ka.jsx)("strong", {
                children: wm("buildAFactory2Game:dropOwedComet")
              }), (0, ka.jsx)("span", {
                children: wm("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(Tm.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, ka.jsxs)(cx.e, {
              className: Zm("below"),
              onClick: () => {
                Km("below")
              },
              children: [(0, ka.jsx)("strong", {
                children: wm("buildAFactory2Game:dropBelow")
              }), (0, ka.jsx)("span", {
                children: nm
              })]
            }), void 0 !== Tm.baf2DropDigDistance && (0, ka.jsxs)(cx.q, {
              className: Zm("dig"),
              onClick: () => {
                Km("dig")
              },
              children: [(0, ka.jsx)("strong", {
                children: wm("buildAFactory2Game:dropDig")
              }), (0, ka.jsx)("span", {
                children: wm("buildAFactory2Game:dropDigDescription", {
                  distance: String(Tm.baf2DropDigDistance),
                  y: na(Tm.baf2DropDigY)
                })
              })]
            }), void 0 !== Vm && (0, ka.jsxs)(cx.q, {
              className: Zm("grove", "Baf2DropGrove"),
              onClick: () => {
                Km("grove")
              },
              children: [(0, ka.jsx)("strong", {
                children: wm("buildAFactory2Game:dropGrove")
              }), (0, ka.jsx)("span", {
                children: wm(`buildAFactory2Game:${Jm}`, {
                  distance: String(Vm)
                })
              })]
            }), (0, ka.jsxs)(cx.m, {
              className: Zm("ruin"),
              disabled: null === Ym,
              onClick: () => {
                Km("ruin")
              },
              children: [(0, ka.jsx)("strong", {
                children: wm("buildAFactory2Game:dropRuin")
              }), (0, ka.jsx)("span", {
                children: Qm
              })]
            }), void 0 !== jm && (0, ka.jsxs)(cx.O, {
              className: Zm("works"),
              onClick: () => {
                Km("works")
              },
              children: [(0, ka.jsx)("strong", {
                children: wm("buildAFactory2Game:dropOldWorks")
              }), (0, ka.jsx)("span", {
                children: wm("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(jm)
                })
              })]
            })]
          }), (0, ka.jsx)("p", {
            className: "Baf2DropRenew",
            children: wm("buildAFactory2Game:dropRenew", {
              time: cm
            })
          }), (0, ka.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: Om,
            onToggle: mm => {
              mm.currentTarget.open !== Om && om(mm.currentTarget.open)
            },
            children: [(0, ka.jsx)("summary", {
              children: wm("buildAFactory2Game:dropSalvageWhat")
            }), (0, ka.jsx)("p", {
              children: wm("buildAFactory2Game:dropSalvageIntro")
            }), (0, ka.jsx)("ul", {
              children: pm.map((mm => {
                let {
                  item: Tm,
                  nameKey: fm,
                  useKey: hm,
                  params: Am
                } = mm;
                return (0, ka.jsxs)("li", {
                  children: [(0, ka.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, ka.jsx)(NA.d, {
                      itemName: Tm,
                      amount: 0
                    })
                  }), (0, ka.jsxs)("span", {
                    children: [(0, ka.jsx)("strong", {
                      children: wm(fm)
                    }), ": ", wm(hm, Am)]
                  })]
                }, Tm)
              }))
            })]
          })]
        })
      })
    }
    const zp = "buildAFactory2Game:";

    function Zp(mm, Tm) {
      return mm.sendIslandEdit(`baf2coopleave ${Tm.baf2IslandId}`)
    }

    function kp(mm) {
      let {
        card: Tm,
        canRename: fm,
        done: Am,
        t: am
      } = mm;
      const xm = ux(),
        [wm, Dm] = (0, hm.useState)(Tm.baf2IslandName),
        im = Zi(wm),
        Rm = "" === im || ki(im),
        pm = () => {
          !Rm && fm && (im !== Tm.baf2IslandName ? Am(xm.sendIslandEdit(`baf2islandrename ${Tm.baf2IslandId} ${im}`)) : Am(null))
        },
        Em = () => {
          Am(null)
        };
      return (0, ka.jsxs)("div", {
        className: "Baf2IslandForm",
        ...gi(Em),
        children: [(0, ka.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [am(`${zp}islandsRenameLabel`), (0, ka.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: wm,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Wi,
            onChange: mm => {
              Dm(mm.target.value)
            },
            ...di(pm, Em)
          })]
        }), "" === im && (0, ka.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: am(`${zp}islandsRenameEmpty`)
        }), ki(im) && (0, ka.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: am(`${zp}islandsNameReserved`)
        }), (0, ka.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, ka.jsx)(cx.q, {
            disabled: Rm || !fm,
            onClick: pm,
            children: am(`${zp}islandsRenameSave`)
          }), (0, ka.jsx)(cx.e, {
            onClick: Em,
            children: am(`${zp}islandsCancel`)
          })]
        })]
      })
    }

    function bp(mm) {
      let {
        card: Tm,
        canDelete: fm,
        done: Am,
        t: am
      } = mm;
      const xm = ux(),
        [wm, Dm] = (0, hm.useState)(""),
        im = function(mm, Tm) {
          return Zi(mm).toLowerCase() === Zi(Tm).toLowerCase()
        }(wm, Tm.baf2IslandName),
        Rm = () => {
          im && fm && Am(xm.sendIslandEdit(`baf2islanddelete ${Tm.baf2IslandId}`))
        },
        pm = () => {
          Am(null)
        },
        Em = ri("name"),
        [om, Om = ""] = am(`${zp}islandsDeleteConfirm`, {
          name: Em
        }).split(Em);
      return (0, ka.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...gi(pm),
        children: [(0, ka.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, ka.jsxs)("span", {
            children: [om, (0, ka.jsx)("strong", {
              children: Tm.baf2IslandName
            }), Om]
          }), (0, ka.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: wm,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Wi,
            onChange: mm => {
              Dm(mm.target.value)
            },
            ...di(Rm, pm)
          })]
        }), Li(Tm) && (0, ka.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: am(`${zp}islandsDeleteLeftBack`)
        }), (0, ka.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, ka.jsx)(cx.O, {
            disabled: !im || !fm,
            onClick: Rm,
            children: am(`${zp}islandsDeleteForGood`)
          }), (0, ka.jsx)(cx.e, {
            onClick: pm,
            children: am(`${zp}islandsCancel`)
          })]
        })]
      })
    }

    function Sp(mm) {
      let {
        members: Tm,
        t: fm
      } = mm;
      const hm = Tm.length;
      return (0, ka.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, ka.jsxs)("span", {
          children: [1 === hm ? fm(`${zp}islandsPlayersOne`) : fm(`${zp}islandsPlayers`, {
            count: String(hm)
          }), " "]
        }), Tm.map(((mm, Tm) => (0, ka.jsxs)("span", {
          className: zA()("Baf2IslandMember", {
            Here: mm.baf2MemberHere
          }),
          title: mm.baf2MemberHere ? fm(`${zp}islandsPlayerHere`) : void 0,
          children: [mm.baf2MemberName, Tm < hm - 1 ? ", " : ""]
        }, mm.baf2MemberKey)))]
      })
    }

    function ep(mm) {
      let {
        card: Tm,
        answered: fm,
        nowMs: Am,
        t: am
      } = mm;
      const xm = ux(),
        [wm, Dm] = (0, hm.useState)(new Map),
        im = Li(Tm);
      if (!im) return null;
      return (0, ka.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, ka.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: am(`${zp}islandsLeftTitle`)
        }), (0, ka.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: im.left.map((mm => {
            const hm = mm.baf2LeftKey,
              Rm = ti(wm.get(hm), fm, Am),
              pm = function(mm) {
                return 1 === mm ? [`${ni}islandsLeftItemsOne`] : [`${ni}islandsLeftItems`, {
                  count: String(mm)
                }]
              }(mm.baf2LeftItems);
            return (0, ka.jsx)("li", {
              className: zA()("Baf2IslandPerson", {
                Pending: Rm
              }),
              children: (0, ka.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, ka.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: mm.baf2LeftName
                }), (0, ka.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: am(pm[0], pm[1])
                }), im.claim && (0, ka.jsx)(cx.q, {
                  className: "Baf2IslandPersonButton",
                  disabled: Rm,
                  onClick: () => {
                    (mm => {
                      const fm = xm.sendIslandEdit(`baf2coopclaim ${Tm.baf2IslandId} ${mm}`);
                      Dm((Tm => new Map(Tm).set(mm, {
                        atMs: Date.now(),
                        answer: fm
                      })))
                    })(hm)
                  },
                  children: am(`${zp}islandsClaim`)
                })]
              })
            }, hm)
          }))
        }), im.goThere && (0, ka.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: am(`${zp}islandsClaimGoThere`)
        })]
      })
    }

    function Np(mm) {
      let {
        card: Tm,
        view: fm,
        blocked: Am,
        maxIslands: am,
        answered: xm,
        nowMs: wm,
        done: Dm,
        openSocial: im,
        t: Rm
      } = mm;
      const pm = ux(),
        [Em, om] = (0, hm.useState)(new Map),
        [Om, Ym] = (0, hm.useState)(new Map),
        [qm, jm] = (0, hm.useState)(null),
        Vm = (0, hm.useRef)(null);
      fR(Vm);
      const Im = Tm.baf2IslandId,
        Km = Tm.baf2IslandCoop,
        Qm = null !== Km && void 0 !== Km && Km.baf2CoopMembers.some((mm => mm.baf2MemberKey === qm)) ? qm : null,
        nm = function(mm, Tm) {
          const fm = mm.baf2IslandCoop;
          return fm && vi(fm) || null !== Tm ? void 0 : mm.baf2IslandInvitable
        }(Tm, Am),
        Jm = function(mm, Tm) {
          const fm = mm.baf2IslandCoop;
          return fm && vi(fm) ? {
            key: `${ni}islandsCoopFull`,
            params: {
              max: String(fm.baf2CoopMax)
            }
          } : void 0 !== mm.baf2IslandInvitable && null === Tm || fm && !fm.baf2CoopManageHere ? null : "degraded" === Tm || "stuck" === Tm ? {
            key: `${ni}islandsInviteNotLoaded`
          } : null === Tm || function(mm) {
            return "notHome" === mm || "wilds" === mm || "visiting" === mm
          }(Tm) || Ni(Tm) ? {
            key: `${ni}islandsInviteGoThere`
          } : {
            key: `${ni}islandsInviteBusy`
          }
        }(Tm, Am),
        cm = () => {
          var mm;
          jm(null), null === (mm = Vm.current) || void 0 === mm || mm.focus()
        };
      return (0, ka.jsxs)("div", {
        ref: Vm,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...gi(null === Qm ? Dm : cm),
        children: [Km && (0, ka.jsxs)(ka.Fragment, {
          children: [(0, ka.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: Rm(`${zp}islandsPlayersTitle`, {
              count: String(Km.baf2CoopMembers.length),
              max: String(Km.baf2CoopMax)
            })
          }), (0, ka.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: Km.baf2CoopMembers.map(((mm, Tm) => {
              const hm = mm.baf2MemberKey,
                Am = ti(Em.get(hm), xm, wm);
              return (0, ka.jsxs)("li", {
                className: zA()("Baf2IslandPerson", {
                  Pending: Am
                }),
                children: [(0, ka.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, ka.jsx)("span", {
                    className: zA()("Baf2IslandPersonName", {
                      Here: mm.baf2MemberHere
                    }),
                    children: mm.baf2MemberName
                  }), mm.baf2MemberHere && (0, ka.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: Rm(`${zp}islandsPlayerHere`)
                  }), 0 === Tm && (0, ka.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: Rm(`${zp}islandsPlayerOwner`)
                  }), fm.remove && Tm > 0 && !Am && Qm !== hm && (0, ka.jsx)(cx.P, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var mm;
                      jm(hm), null === (mm = Vm.current) || void 0 === mm || mm.focus()
                    },
                    children: Rm(`${zp}islandsRemove`)
                  })]
                }), Qm === hm && (0, ka.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, ka.jsx)("p", {
                    children: si(Rm, `${zp}islandsRemoveConfirm`, {
                      player: mm.baf2MemberName
                    })
                  }), (0, ka.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, ka.jsx)(cx.O, {
                      onClick: () => {
                        (mm => {
                          const Tm = pm.sendIslandEdit(`baf2coopremove ${Im} ${mm.baf2MemberKey}`);
                          om((fm => new Map(fm).set(mm.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: Tm
                          }))), cm()
                        })(mm)
                      },
                      children: Rm(`${zp}islandsRemoveYes`)
                    }), (0, ka.jsx)(cx.e, {
                      onClick: cm,
                      children: Rm(`${zp}islandsCancel`)
                    })]
                  })]
                })]
              }, hm)
            }))
          })]
        }), (void 0 !== nm || null !== Jm) && (0, ka.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Rm(`${zp}islandsInviteTitle`)
        }), !Km && (void 0 !== nm || null !== Jm) && (0, ka.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Rm(`${zp}islandsInviteShareNote`)
        }), 0 === (null === nm || void 0 === nm ? void 0 : nm.length) && (0, ka.jsx)(Gp, {
          openSocial: im,
          t: Rm
        }), void 0 !== nm && nm.length > 0 && (0, ka.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: nm.map((mm => {
            const Tm = !0 === mm.baf2InvitableSent || ti(Om.get(mm.baf2InvitableId), xm, wm);
            return (0, ka.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, ka.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, ka.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: mm.baf2InvitableName
                }), mm.baf2InvitableFull && !Tm && (0, ka.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Rm(`${zp}islandsInviteTheirFull`, {
                    max: String(am)
                  })
                }), (Tm || !mm.baf2InvitableFull) && (0, ka.jsx)(cx.q, {
                  className: "Baf2IslandPersonButton",
                  disabled: Tm,
                  onClick: () => {
                    (mm => {
                      const Tm = pm.sendIslandEdit(`baf2coopinvite ${Im} ${mm}`);
                      Ym((fm => new Map(fm).set(mm, {
                        atMs: Date.now(),
                        answer: Tm
                      })))
                    })(mm.baf2InvitableId)
                  },
                  children: Rm(Tm ? `${zp}islandsInvited` : `${zp}islandsInvite`)
                })]
              })
            }, mm.baf2InvitableId)
          }))
        }), Jm && (0, ka.jsx)(aR, {
          note: Jm,
          t: Rm
        }), (0, ka.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, ka.jsx)(cx.e, {
            onClick: Dm,
            children: Rm(`${zp}islandsDone`)
          })
        })]
      })
    }

    function Gp(mm) {
      let {
        openSocial: Tm,
        t: fm
      } = mm;
      return (0, ka.jsxs)(ka.Fragment, {
        children: [(0, ka.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: fm(Tm ? `${zp}islandsInviteNobody` : `${zp}islandsInviteNobodyGuest`)
        }), Tm && (0, ka.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, ka.jsx)(cx.e, {
            onClick: Tm,
            children: fm("socialBar:social")
          })
        })]
      })
    }

    function Xp(mm) {
      let {
        className: Tm,
        text: fm,
        ConfirmButton: Am,
        confirmLabel: am,
        canConfirm: xm,
        send: wm,
        done: Dm,
        t: im
      } = mm;
      const Rm = (0, hm.useRef)(null);
      fR(Rm);
      const pm = () => {
        Dm(null)
      };
      return (0, ka.jsxs)("div", {
        ref: Rm,
        tabIndex: -1,
        className: zA()("Baf2IslandForm", Tm),
        ...gi(pm),
        children: [(0, ka.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: fm
        }), (0, ka.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, ka.jsx)(Am, {
            disabled: !xm,
            onClick: () => {
              xm && Dm(wm())
            },
            children: am
          }), (0, ka.jsx)(cx.e, {
            onClick: pm,
            children: im(`${zp}islandsCancel`)
          })]
        })]
      })
    }

    function Pp(mm) {
      return "hidden" !== mm
    }

    function Hp(mm) {
      var Tm, fm;
      let {
        card: Am,
        keepOwn: am,
        blocked: xm,
        maxIslands: wm,
        serverNowMs: Dm,
        nowMs: im,
        actions: Rm,
        full: pm,
        waits: Em,
        answered: om,
        mode: Om,
        setMode: Ym,
        pending: qm,
        onSent: jm,
        switchTo: Vm,
        leave: Im,
        coopOn: Km,
        openSocial: Qm,
        t: nm
      } = mm;
      const Jm = ux(),
        cm = Am.baf2IslandActive,
        zm = cm ? null : function(mm, Tm) {
          if (mm <= 0) return null;
          const fm = Tm - mm;
          if (fm < Va) return [`${ni}islandsPlayedJustNow`];
          if (fm < Ji) return [`${ni}islandsPlayedMinutes`, {
            minutes: String(Math.floor(fm / Va))
          }];
          if (fm < ci) return [`${ni}islandsPlayedHours`, {
            hours: String(Math.floor(fm / Ji))
          }];
          const hm = Math.floor(fm / ci);
          return 1 === hm ? [`${ni}islandsPlayedDay`] : [`${ni}islandsPlayedDays`, {
            days: String(hm)
          }]
        }(Am.baf2IslandLastPlayedMs, Dm),
        Zm = void 0 === (km = Am.baf2IslandItems) ? null : 0 === km ? [`${ni}islandsItemsNone`] : 1 === km ? [`${ni}islandsItemsOne`] : [`${ni}islandsItems`, {
          count: String(km)
        }];
      var km;
      const bm = function(mm) {
          return mm ? 1 === mm ? [`${ni}islandsWaitingOne`] : [`${ni}islandsWaiting`, {
            count: String(mm)
          }] : null
        }(Am.baf2IslandWaiting),
        Sm = Am.baf2IslandUnreadable,
        em = Am.baf2IslandCoop,
        Nm = Bi(Am, Rm, am, pm, Km, xm),
        Gm = (0, hm.useRef)(null);
      Fi(null !== Om, Gm);
      const Xm = () => {
          var mm;
          Ym(null), null === (mm = Gm.current) || void 0 === mm || mm.focus()
        },
        Pm = (mm, Tm) => {
          Xm(), null !== mm && jm(mm, Tm)
        },
        Hm = (mm, Tm) => nm(`${zp}${mm}`, {
          time: Ja(nm, Tm)
        });
      return (0, ka.jsxs)("li", {
        ref: Gm,
        tabIndex: -1,
        className: zA()("Baf2IslandCard", {
          Active: cm,
          Pending: qm,
          Shared: void 0 !== em
        }),
        children: [(0, ka.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, ka.jsx)("strong", {
            className: "Baf2IslandName",
            children: Am.baf2IslandName
          }), cm && (0, ka.jsx)("span", {
            className: "Baf2IslandBadge",
            children: nm(`${zp}islandsOnThis`)
          }), em && (0, ka.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: nm(`${zp}islandsShared`)
          })]
        }), "member" === (null === em || void 0 === em ? void 0 : em.baf2CoopRole) && (0, ka.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: si(nm, `${zp}islandsSharedBy`, {
            owner: em.baf2CoopOwner
          })
        }), void 0 !== Sm && (0, ka.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: nm("newer" === Sm ? `${zp}islandsUnreadable` : `${zp}islandsDamaged`)
        }), "corrupt" === Sm && pm && (0, ka.jsx)("p", {
          className: "Baf2IslandStats",
          children: nm(`${zp}islandsDamagedFull`)
        }), void 0 === Sm && (0, ka.jsxs)(ka.Fragment, {
          children: [(0, ka.jsx)(AR, {
            tier: Am.baf2IslandTier,
            t: nm
          }), (0, ka.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, ka.jsx)("span", {
              children: 1 === Am.baf2IslandQuestsDone ? nm(`${zp}islandsQuestsDoneOne`) : nm(`${zp}islandsQuestsDone`, {
                count: String(Am.baf2IslandQuestsDone)
              })
            }), (0, ka.jsx)("span", {
              children: 1 === Am.baf2IslandMachines ? nm(`${zp}islandsMachinesOne`) : nm(`${zp}islandsMachines`, {
                count: String(Am.baf2IslandMachines)
              })
            }), Zm && (0, ka.jsx)("span", {
              children: nm(Zm[0], Zm[1])
            }), bm && (0, ka.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: nm(bm[0], bm[1])
            }), zm && (0, ka.jsx)("span", {
              children: nm(zm[0], zm[1])
            })]
          })]
        }), em && void 0 === em.baf2CoopState && "people" !== Om && (0, ka.jsx)(Sp, {
          members: em.baf2CoopMembers,
          t: nm
        }), null === Om && (0, ka.jsx)(ep, {
          card: Am,
          answered: om,
          nowMs: im,
          t: nm
        }), Nm.note && (0, ka.jsx)(aR, {
          note: Nm.note,
          className: zA()({
            Unreachable: void 0 !== (null === em || void 0 === em ? void 0 : em.baf2CoopState)
          }),
          t: nm
        }), "rename" === Om && (0, ka.jsx)(kp, {
          card: Am,
          canRename: "enabled" === Nm.rename,
          done: Pm,
          t: nm
        }), "delete" === Om && (0, ka.jsx)(bp, {
          card: Am,
          canDelete: "enabled" === Nm.delete,
          done: mm => {
            Pm(mm, em ? "delete" : void 0)
          },
          t: nm
        }), "people" === Om && (0, ka.jsx)(Np, {
          card: Am,
          view: Nm,
          blocked: xm,
          maxIslands: wm,
          answered: om,
          nowMs: im,
          done: Xm,
          openSocial: Qm,
          t: nm
        }), "leave" === Om && (0, ka.jsx)(Xp, {
          className: "Leave",
          text: si(nm, `${zp}islandsLeaveConfirm`, {
            island: Am.baf2IslandName,
            owner: null !== (Tm = null === (fm = Am.baf2IslandCoop) || void 0 === fm ? void 0 : fm.baf2CoopOwner) && void 0 !== Tm ? Tm : ""
          }),
          ConfirmButton: cx.O,
          confirmLabel: nm(`${zp}islandsLeaveYes`),
          canConfirm: "enabled" === Nm.leave,
          send: () => Zp(Jm, Am),
          done: mm => {
            Pm(mm, "leave"), null !== mm && cm && Im()
          },
          t: nm
        }), "unshare" === Om && (0, ka.jsx)(Xp, {
          className: "Unshare",
          text: si(nm, `${zp}islandsStopSharingConfirm`, {
            island: Am.baf2IslandName
          }),
          ConfirmButton: cx.q,
          confirmLabel: nm(`${zp}islandsStopSharing`),
          canConfirm: "enabled" === Nm.unshare,
          send: () => Jm.sendIslandEdit(`baf2coopunshare ${Am.baf2IslandId}`),
          done: mm => {
            Pm(mm), null !== mm && Im()
          },
          t: nm
        }), null === Om && !qm && (0, ka.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Am.baf2IslandName,
          children: [Pp(Nm.switch) && (0, ka.jsx)(cx.q, {
            disabled: "enabled" !== Nm.switch,
            onClick: Vm,
            children: "tryAgain" === Nm.switchLabel ? nm(`${zp}islandsTryAgain`) : Em.switch > 0 ? Hm("islandsSwitchIn", Em.switch) : nm(`${zp}islandsSwitch`)
          }), Pp(Nm.rename) && (0, ka.jsx)(cx.e, {
            disabled: "enabled" !== Nm.rename,
            onClick: () => {
              Ym("rename")
            },
            children: nm(`${zp}islandsRename`)
          }), Pp(Nm.people) && (0, ka.jsx)(cx.e, {
            disabled: "enabled" !== Nm.people,
            onClick: () => {
              Ym("people")
            },
            children: nm("players" === Nm.peopleLabel ? `${zp}islandsPlayersButton` : `${zp}islandsInviteButton`)
          }), Pp(Nm.unshare) && (0, ka.jsx)(cx.e, {
            disabled: "enabled" !== Nm.unshare,
            onClick: () => {
              Ym("unshare")
            },
            children: nm(`${zp}islandsStopSharing`)
          }), Pp(Nm.dismiss) && (0, ka.jsx)(cx.e, {
            disabled: "enabled" !== Nm.dismiss,
            onClick: () => {
              jm(Zp(Jm, Am), "dismiss"), cm && Im()
            },
            children: nm(`${zp}islandsDismiss`)
          }), Pp(Nm.leave) && (0, ka.jsx)(cx.P, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Nm.leave,
            onClick: () => {
              Ym("leave")
            },
            children: cm && Em.switch > 0 ? Hm("islandsLeaveIn", Em.switch) : nm(`${zp}islandsLeave`)
          }), Pp(Nm.delete) && (0, ka.jsx)(cx.P, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Nm.delete,
            onClick: () => {
              Ym("delete")
            },
            children: Em.change > 0 && Nm.deleteWaits ? Hm("islandsDeleteIn", Em.change) : nm(`${zp}islandsDelete`)
          })]
        })]
      })
    }
    const yp = "buildAFactory2Game:";

    function Cp(mm) {
      let {
        invite: Tm,
        actions: fm,
        full: Am,
        maxIslands: am,
        waitSeconds: xm,
        focus: wm,
        focused: Dm,
        join: im,
        decline: Rm,
        t: pm
      } = mm;
      const [Em, om] = (0, hm.useState)(!1), Om = (0, hm.useRef)(null);
      Fi(Em, Om), (0, hm.useEffect)((() => {
        var mm;
        wm && (om(!0), null === (mm = Om.current) || void 0 === mm || mm.focus(), Dm())
      }), [wm, Dm]);
      const Ym = function(mm, Tm, fm, hm, Am) {
          return fm ? {
            join: !1,
            note: {
              key: `${ni}islandsJoinTooMany`,
              params: {
                max: String(hm)
              }
            }
          } : mm.baf2InvitePlayers >= Am ? {
            join: !1,
            note: {
              key: `${ni}islandsJoinFull`
            }
          } : {
            join: Tm.switch,
            note: null
          }
        }(Tm, fm, Am, am, 10),
        qm = Tm.baf2InviteIsland,
        jm = Tm.baf2InvitePlayers,
        Vm = () => {
          var mm;
          om(!1), null === (mm = Om.current) || void 0 === mm || mm.focus()
        },
        Im = xm > 0 && null === Ym.note ? pm(`${yp}islandsJoinIn`, {
          time: Ja(pm, xm)
        }) : pm(`${yp}islandsJoin`);
      return (0, ka.jsxs)("li", {
        ref: Om,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...Em ? gi(Vm) : {},
        children: [(0, ka.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, ka.jsx)("strong", {
            className: "Baf2IslandName",
            children: qm
          })
        }), (0, ka.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: si(pm, `${yp}islandsInvitedBy`, {
            owner: Tm.baf2InviteOwner
          })
        }), (0, ka.jsx)(AR, {
          tier: Tm.baf2InviteTier,
          t: pm
        }), (0, ka.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, ka.jsx)("span", {
            children: 1 === jm ? pm(`${yp}islandsPlayersCountOne`) : pm(`${yp}islandsPlayersCount`, {
              count: String(jm)
            })
          })
        }), Ym.note && (0, ka.jsx)(aR, {
          note: Ym.note,
          t: pm
        }), Em && (0, ka.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: si(pm, `${yp}islandsJoinConfirm`, {
            island: qm
          })
        }), !Em && (0, ka.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": qm,
          children: [(0, ka.jsx)(cx.q, {
            disabled: !Ym.join,
            onClick: () => {
              var mm;
              om(!0), null === (mm = Om.current) || void 0 === mm || mm.focus()
            },
            children: Im
          }), (0, ka.jsx)(cx.e, {
            onClick: Rm,
            children: pm(`${yp}islandsDecline`)
          })]
        }), Em && (0, ka.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, ka.jsx)(cx.q, {
            disabled: !Ym.join,
            onClick: im,
            children: pm(`${yp}islandsJoinYes`)
          }), (0, ka.jsx)(cx.e, {
            onClick: Vm,
            children: pm(`${yp}islandsCancel`)
          })]
        })]
      })
    }

    function rp(mm) {
      let {
        invites: Tm,
        actions: fm,
        full: hm,
        maxIslands: Am,
        waitSeconds: am,
        focus: xm,
        focused: wm,
        leave: Dm,
        declined: im,
        t: Rm
      } = mm;
      const pm = ux();
      return (0, ka.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, ka.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: Rm(`${yp}islandsInvitesTitle`)
        }), (0, ka.jsx)("ul", {
          className: "Baf2IslandCards",
          children: Tm.map((mm => {
            const Tm = mm.baf2InviteId;
            return (0, ka.jsx)(Cp, {
              invite: mm,
              actions: fm,
              full: hm,
              maxIslands: Am,
              waitSeconds: am,
              focus: xm === Tm,
              focused: wm,
              join: () => {
                pm.send(`baf2coopaccept ${Tm}`), Dm()
              },
              decline: () => {
                pm.send(`baf2coopdecline ${Tm}`), im(Tm)
              },
              t: Rm
            }, Tm)
          }))
        })]
      })
    }
    const sp = "buildAFactory2Game:";

    function lp(mm) {
      let {
        cards: Tm,
        activeName: fm,
        canStart: Am,
        waitSeconds: am,
        leave: xm,
        t: wm
      } = mm;
      const Dm = ux(),
        [im, Rm] = (0, hm.useState)(!1),
        [pm, Em] = (0, hm.useState)(""),
        om = (0, hm.useRef)(null);
      Fi(im, om), (0, hm.useEffect)((() => {
        var mm;
        im && (null === (mm = om.current) || void 0 === mm || mm.focus())
      }), [im]);
      const Om = bi(Tm),
        Ym = Zi(pm),
        qm = ki(Ym),
        jm = () => {
          Am && !qm && (Dm.send("" === Ym || Ym === Om ? dm : `${dm} ${Ym}`), xm())
        },
        Vm = () => {
          var mm;
          Rm(!1), null === (mm = om.current) || void 0 === mm || mm.focus()
        };
      return (0, ka.jsxs)("li", {
        ref: om,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...im ? gi(Vm) : {},
        children: [(0, ka.jsx)("strong", {
          className: "Baf2IslandName",
          children: wm(`${sp}islandsNewTitle`)
        }), !im && (0, ka.jsx)("p", {
          className: "Baf2IslandStats",
          children: wm(`${sp}islandsNewNote`)
        }), im && (0, ka.jsxs)(ka.Fragment, {
          children: [(0, ka.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: si(wm, `${sp}islandsNewConfirm`, {
              name: fm
            })
          }), (0, ka.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [wm(`${sp}islandsNewNameLabel`), (0, ka.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: pm,
              placeholder: Om,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: Wi,
              onChange: mm => {
                Em(mm.target.value)
              },
              ...di(jm, Vm)
            })]
          }), qm && (0, ka.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: wm(`${sp}islandsNameReserved`)
          })]
        }), (0, ka.jsxs)("div", {
          className: zA()("Baf2IslandButtons", {
            Stacked: im
          }),
          children: [(0, ka.jsx)(cx.q, {
            disabled: !Am || im && qm,
            onClick: () => {
              if (!im) return Em(Om), void Rm(!0);
              jm()
            },
            children: am > 0 ? wm(`${sp}islandsNewIn`, {
              time: Ja(wm, am)
            }) : wm(im ? `${sp}islandsNewConfirmButton` : `${sp}islandsNew`)
          }), im && (0, ka.jsx)(cx.e, {
            onClick: Vm,
            children: wm(`${sp}islandsCancel`)
          })]
        })]
      })
    }

    function Mp(mm) {
      var Tm, fm;
      let {
        message: Am,
        arrivedAtMs: am,
        close: xm,
        leave: wm,
        openSocial: Dm
      } = mm;
      const im = ux(),
        {
          t: Rm
        } = (0, SA.A)(),
        pm = hR(1e3),
        [Em, om] = (0, hm.useState)(null),
        [Om, Ym] = (0, hm.useState)(new Map),
        [qm, jm] = (0, hm.useState)(new Set),
        Vm = Am.baf2IslandCards,
        Im = function(mm, Tm, fm, hm) {
          return (null !== mm && void 0 !== mm ? mm : []).filter((mm => Tm + mm.baf2InviteLeftMs > fm && !hm.has(mm.baf2InviteId)))
        }(Am.baf2IslandsInvites, am, pm, qm),
        Km = Im.map((mm => mm.baf2InviteId)).join(" "),
        Qm = (0, hm.useRef)(null),
        nm = mR(Qm);
      TR(), (0, hm.useEffect)((() => {
        var mm, Tm;
        null !== (mm = Qm.current) && void 0 !== mm && mm.contains(document.activeElement) || (null === (Tm = Qm.current) || void 0 === Tm || Tm.focus())
      }), [Am, Km]), (0, hm.useEffect)((() => {
        Ym((mm => function(mm, Tm, fm, hm) {
          const Am = new Map;
          for (const am of Tm) {
            const Tm = mm.get(am.baf2IslandId);
            Tm && (void 0 !== Tm.untilGone || hm < Tm.answer) && Hi(Tm, am, fm) && Am.set(am.baf2IslandId, Tm)
          }
          return Am.size === mm.size ? mm : Am
        }(mm, Am.baf2IslandCards, Date.now(), Am.baf2IslandsAnswered)))
      }), [Am]);
      const Jm = zi(am, Am.baf2IslandsWaitMs, pm),
        cm = Am.baf2IslandsBlocked,
        zm = Gi(cm, Jm),
        Zm = function(mm, Tm) {
          const fm = Gi(mm, 0);
          return {
            switch: fm.switch ? Tm : 0,
            change: fm.change ? Tm : 0
          }
        }(cm, Jm),
        km = Vm.length >= Am.baf2IslandsMax,
        bm = Vm.length > 0,
        Sm = function(mm, Tm, fm) {
          return mm + Math.max(0, fm - Tm)
        }(Am.baf2IslandsNowMs, am, pm),
        em = null !== (Tm = null === (fm = Vm.find((mm => mm.baf2IslandActive))) || void 0 === fm ? void 0 : fm.baf2IslandName) && void 0 !== Tm ? Tm : "",
        Nm = function(mm) {
          const Tm = mm.filter(ui).length;
          return Tm <= 1 && Tm < mm.length
        }(Vm),
        Gm = !0 === Am.baf2IslandsCoop,
        Xm = function(mm, Tm) {
          const fm = mm.find((mm => mm.baf2IslandActive)),
            hm = null === fm || void 0 === fm ? void 0 : fm.baf2IslandCoop;
          return fm && "member" === (null === hm || void 0 === hm ? void 0 : hm.baf2CoopRole) ? {
            key: `${ni}islandsKeepOwnMember`,
            names: {
              owner: hm.baf2CoopOwner,
              island: fm.baf2IslandName
            }
          } : {
            key: Tm ? `${ni}islandsKeepOwn` : `${ni}islandsKeepOwnSolo`
          }
        }(Vm, Gm),
        [Pm, Hm] = (0, hm.useState)(null);
      (0, hm.useEffect)((() => {
        void 0 !== Am.baf2IslandsFocusInvite && Hm(Am.baf2IslandsFocusInvite)
      }), [Am]);
      const ym = (0, hm.useCallback)((() => {
          Hm(null)
        }), []),
        Cm = Em ? Vm.find((mm => mm.baf2IslandId === Em.id)) : void 0,
        rm = Em && Cm && "hidden" !== Bi(Cm, zm, Nm, km, Gm, cm)[Em.mode] ? Em : null;
      return (0, ka.jsx)(Jx.d, {
        close: xm,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, ka.jsxs)("section", {
          ref: Qm,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: nm ? {
            marginTop: `${nm.marginTop}px`,
            maxHeight: `${nm.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, ka.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, ka.jsxs)("div", {
              children: [(0, ka.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: Rm(`${sp}islandsTitle`)
              }), bm && (0, ka.jsx)("p", {
                children: Rm(`${sp}islandsSubtitle`, {
                  count: String(Vm.length),
                  max: String(Am.baf2IslandsMax)
                })
              })]
            }), (0, ka.jsx)(cx.j, {
              ariaLabel: Rm(`${sp}islandsClose`),
              onClick: xm
            })]
          }), (0, ka.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== cm && (0, ka.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: si(Rm, Si(cm, ei(Vm)), {
                island: em
              })
            }), bm && Im.length > 0 && (0, ka.jsx)(rp, {
              invites: Im,
              actions: zm,
              full: km,
              maxIslands: Am.baf2IslandsMax,
              waitSeconds: Zm.switch,
              focus: Pm,
              focused: ym,
              leave: wm,
              declined: mm => {
                jm((Tm => new Set(Tm).add(mm)))
              },
              t: Rm
            }), bm && (0, ka.jsxs)(ka.Fragment, {
              children: [km && (0, ka.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: Rm(`${sp}islandsFull`, {
                  max: String(Am.baf2IslandsMax)
                })
              }), (0, ka.jsx)("p", {
                className: "Baf2IslandsNote",
                children: si(Rm, Xm.key, Xm.names)
              }), (0, ka.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [Vm.map((mm => {
                  const Tm = mm.baf2IslandId;
                  return (0, ka.jsx)(Hp, {
                    card: mm,
                    keepOwn: Nm,
                    coopOn: Gm,
                    openSocial: Dm,
                    blocked: cm,
                    maxIslands: Am.baf2IslandsMax,
                    serverNowMs: Sm,
                    nowMs: pm,
                    actions: zm,
                    full: km,
                    waits: Zm,
                    answered: Am.baf2IslandsAnswered,
                    mode: (null === rm || void 0 === rm ? void 0 : rm.id) === Tm ? rm.mode : null,
                    setMode: mm => {
                      om(null === mm ? null : {
                        id: Tm,
                        mode: mm
                      })
                    },
                    pending: Hi(Om.get(Tm), mm, pm),
                    onSent: (fm, hm) => {
                      Ym((Am => {
                        const am = {
                          atMs: Date.now(),
                          from: mm.baf2IslandName,
                          answer: fm
                        };
                        return new Map(Am).set(Tm, hm ? {
                          ...am,
                          untilGone: hm
                        } : am)
                      }))
                    },
                    leave: wm,
                    switchTo: () => {
                      im.send(`baf2islandswitch ${Tm}`), wm()
                    },
                    t: Rm
                  }, Tm)
                })), !km && (0, ka.jsx)(lp, {
                  cards: Vm,
                  activeName: em,
                  canStart: zm.change,
                  waitSeconds: Zm.change,
                  leave: wm,
                  t: Rm
                })]
              })]
            })]
          })]
        })
      })
    }
    var Bp = fm(4970);
    const Lp = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        ym: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      vp = Object.keys(Lp),
      tp = new Set([...Object.keys(dT), ...[...PT.Press.recipes, ...PT["Wire Mill"].recipes].map((mm => mm.output))]),
      Up = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      dp = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      gp = / Bar$|Alloy$/,
      Wp = /Porkchop|Beef|Mutton|Venison|Steak/,
      Fp = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const mE = (0, hm.memo)((function(mm) {
      let {
        item: Tm,
        name: fm,
        amount: hm,
        selected: Am,
        small: am,
        onPick: xm
      } = mm;
      return (0, ka.jsxs)("button", {
        type: "button",
        className: zA()("Baf2TermTile", {
          On: Am,
          Small: am
        }),
        "aria-label": `${fm}: ${hm}`,
        "aria-pressed": Am,
        onClick: () => {
          xm(Tm)
        },
        children: [(0, ka.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, ka.jsx)(NA.d, {
            itemName: Tm,
            amount: 0
          })
        }), (0, ka.jsx)("span", {
          className: "Baf2TermCount",
          children: Qa(hm, 1e4)
        }), !am && (0, ka.jsx)("span", {
          className: "Baf2TermName",
          children: fm
        })]
      })
    }));

    function TE(mm) {
      let {
        store: Tm,
        close: fm,
        send: Am
      } = mm;
      const {
        t: am
      } = (0, SA.A)(), {
        isTouchScreen: xm
      } = (0, nA.m)(["isTouchScreen"]);
      ! function(mm) {
        const [Tm, fm] = (0, hm.useState)(mm.version);
        (0, hm.useEffect)((() => (fm(mm.version), mm.subscribe((() => {
          fm(mm.version)
        })))), [mm])
      }(Tm);
      const [wm, Dm] = (0, hm.useState)("all"), [im, Rm] = (0, hm.useState)(!1), [pm, Em] = (0, hm.useState)(""), [om, Om] = (0, hm.useState)(""), [Ym, qm] = (0, hm.useState)(null), [jm, Vm] = (0, hm.useState)(!1), [Im, Km, Qm] = function() {
        const mm = (0, hm.useRef)(null),
          [Tm, fm] = (0, hm.useState)(!1),
          Am = () => {
            const Tm = mm.current;
            fm(null !== Tm && Tm.scrollLeft + Tm.clientWidth < Tm.scrollWidth - 1)
          };
        return (0, hm.useEffect)(Am), (0, hm.useEffect)((() => {
          const Tm = mm.current;
          if (!Tm) return;
          const fm = new ResizeObserver(Am);
          return fm.observe(Tm), () => {
            fm.disconnect()
          }
        }), []), [mm, Tm, Am]
      }(), nm = (0, hm.useMemo)((() => new Map), [am]), Jm = mm => {
        let Tm = nm.get(mm);
        return void 0 === Tm && (Tm = function(mm, Tm) {
          const fm = /^(.+) \((.+)\)$/.exec(mm);
          return fm ? Tm(fm[2], fm[1]) : mm
        }(xa(am, mm), ((mm, Tm) => am("buildAFactory2Game:terminalTileKind", {
          kind: mm,
          base: Tm
        }))), nm.set(mm, Tm)), Tm
      }, cm = Tm.isReadOnly(), zm = jm && !cm, Zm = Tm.recent(), km = Tm.items(), bm = om.trim().toLowerCase(), Sm = zm ? Tm.heldItems(Ym) : ("recent" === wm ? Zm : km).filter((mm => {
        const Tm = Jm(mm);
        return ("all" === wm || "recent" === wm || function(mm) {
          return Oa(mm) ? "farm" : Up.test(mm) ? "nuclear" : gp.test(mm) ? "bars" : Wp.test(mm) ? "farm" : dp.test(mm) ? "ym" : tp.has(mm) ? "parts" : Fp.test(mm) ? "farm" : "other"
        }(mm) === wm) && ("" === bm || Tm.toLowerCase().includes(bm)) && ("" === pm || Tm.toUpperCase().startsWith(pm))
      })), em = new Set(km.map((mm => Jm(mm).charAt(0).toUpperCase()))), Nm = mm => zm ? Tm.heldAmount(mm) : Tm.amount(mm), Gm = !zm && "recent" !== wm && Zm.length > 0, Xm = function(mm, Tm) {
        return null !== mm && Tm.includes(mm) ? mm : null
      }(Ym, Gm ? [...Sm, ...Zm] : Sm), Pm = null === Xm ? 0 : Tm.amount(Xm), Hm = null === Xm ? 0 : Nm(Xm), ym = (0, hm.useCallback)((mm => {
        qm((Tm => Tm === mm ? null : mm))
      }), []), Cm = mm => Hm > 0 || zm && null === Xm && "fill" === mm && Sm.length > 0, rm = zm ? [
        ["one", am("buildAFactory2Game:terminalStoreOne")],
        ["stack", am("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", am(null === Xm ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", am("buildAFactory2Game:terminalTakeOne")],
        ["stack", am("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", am("buildAFactory2Game:terminalFill")]
      ], sm = zm ? am("buildAFactory2Game:terminalStoreEmpty") : "" !== pm ? am("buildAFactory2Game:terminalEmptyLetter", {
        letter: pm
      }) : "" !== bm ? am("buildAFactory2Game:terminalEmptySearch", {
        query: om
      }) : am("buildAFactory2Game:terminalEmpty");
      return (0, ka.jsx)(Jx.d, {
        close: fm,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, ka.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, ka.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, ka.jsxs)("div", {
              children: [(0, ka.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: am(Tm.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, ka.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, ka.jsx)("span", {
                  className: zA()({
                    Off: zm
                  }),
                  children: am("buildAFactory2Game:terminalSubtitle", {
                    count: String(Tm.siloCount())
                  })
                }), !cm && (0, ka.jsx)("span", {
                  className: zA()({
                    Off: !zm
                  }),
                  children: am("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !cm && (0, ka.jsx)(Bp.b, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: am("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: am("buildAFactory2Game:terminalModeStore")
              }],
              value: zm ? "store" : "take",
              onChange: mm => {
                Vm("store" === mm), qm(null)
              },
              ariaLabel: am("buildAFactory2Game:terminalModes")
            }), (0, ka.jsx)(cx.j, {
              onClick: fm
            })]
          }), (0, ka.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, ka.jsxs)("div", {
              className: zA()("Baf2TermTools", {
                Hidden: zm
              }),
              children: [(0, ka.jsx)("div", {
                ref: Im,
                className: zA()("Baf2TermChips", {
                  MoreRight: Km
                }),
                onScroll: Qm,
                children: im ? (0, ka.jsxs)(ka.Fragment, {
                  children: [(0, ka.jsx)("button", {
                    type: "button",
                    "aria-label": am("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      Rm(!1), Em("")
                    },
                    children: "\u2190"
                  }), [...em].sort().map((mm => (0, ka.jsx)("button", {
                    type: "button",
                    className: zA()({
                      On: pm === mm
                    }),
                    onClick: () => {
                      Em(pm === mm ? "" : mm)
                    },
                    children: mm
                  }, mm)))]
                }) : (0, ka.jsxs)(ka.Fragment, {
                  children: [(0, ka.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      Rm(!0)
                    },
                    children: am("buildAFactory2Game:terminalLetters")
                  }), vp.map((mm => (0, ka.jsx)("button", {
                    type: "button",
                    className: zA()({
                      On: wm === mm
                    }),
                    onClick: () => {
                      Dm(mm)
                    },
                    children: am(Lp[mm])
                  }, mm)))]
                })
              }), !xm && (0, ka.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: om,
                placeholder: am("buildAFactory2Game:terminalSearch"),
                "aria-label": am("buildAFactory2Game:terminalSearch"),
                onChange: mm => {
                  Om(mm.target.value)
                },
                onKeyDown: mm => {
                  mm.stopPropagation()
                }
              }), (0, ka.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": am("buildAFactory2Game:terminalResort"),
                title: am("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  Tm.resort()
                },
                children: "\u21c5"
              })]
            }), Gm && (0, ka.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, ka.jsx)("span", {
                children: am(Lp.recent)
              }), Zm.map((mm => (0, ka.jsx)(mE, {
                item: mm,
                name: Jm(mm),
                amount: Tm.amount(mm),
                selected: Xm === mm,
                small: !0,
                onPick: ym
              }, mm)))]
            }), (0, ka.jsx)("div", {
              className: "Baf2TermTiles",
              children: Sm.length > 0 ? Sm.map((mm => (0, ka.jsx)(mE, {
                item: mm,
                name: Jm(mm),
                amount: Nm(mm),
                selected: Xm === mm,
                onPick: ym
              }, mm))) : (0, ka.jsx)("p", {
                className: "Baf2TermEmpty",
                children: sm
              })
            }), (0, ka.jsxs)("div", {
              className: zA()("Baf2TermActions", {
                Hidden: zm && 0 === Sm.length
              }),
              children: [(0, ka.jsx)("span", {
                className: "Baf2TermPicked",
                children: cm ? (0, ka.jsxs)(ka.Fragment, {
                  children: [null !== Xm && Pm > 0 ? Jm(Xm) : am("buildAFactory2Game:terminalVisiting"), (0, ka.jsx)("small", {
                    children: am("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Xm ? (0, ka.jsxs)(ka.Fragment, {
                  children: [Jm(Xm), (0, ka.jsx)("small", {
                    children: am("buildAFactory2Game:terminalStored", {
                      amount: Pm.toLocaleString()
                    })
                  })]
                }) : am(zm ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !cm && rm.map((mm => {
                let [fm, hm] = mm;
                const am = "fill" === fm ? cx.m : cx.e;
                return (0, ka.jsx)(am, {
                  className: "Baf2TermTake",
                  disabled: !Cm(fm),
                  onClick: () => {
                    (mm => {
                      Cm(mm) && Am(null === Xm ? Tm.putAll() : zm ? Tm.put(mm, Xm) : Tm.take(mm, Xm))
                    })(fm)
                  },
                  children: hm
                }, fm)
              }))]
            })]
          })]
        })
      })
    }

    function fE(mm) {
      let {
        kind: Tm,
        icon: fm,
        label: hm,
        number: Am,
        preview: am,
        note: xm,
        tone: wm = null,
        share: Dm,
        onExplain: im
      } = mm;
      return (0, ka.jsxs)("button", {
        type: "button",
        className: zA()("NxLane", Tm, {
          Warn: "warn" === wm,
          Danger: "danger" === wm
        }),
        onClick: im,
        children: [(0, ka.jsxs)("span", {
          className: "NxLaneHead",
          children: [fm, (0, ka.jsx)("span", {
            className: "NxLaneLabel",
            children: hm
          })]
        }), (0, ka.jsxs)("span", {
          className: "NxLaneNum",
          children: [Am, am && (0, ka.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", am]
          })]
        }), (0, ka.jsx)("span", {
          className: "NxLaneNote",
          children: xm
        }), void 0 !== Dm && (0, ka.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, Dm)) + "%"
          }
        })]
      })
    }

    function hE(mm) {
      let {
        kind: Tm,
        step: fm,
        short: hm,
        planned: Am
      } = mm;
      return (0, ka.jsx)("i", {
        className: zA()("NxPipe", Tm, `Step${fm}`, {
          Short: hm,
          Planned: Am
        }),
        "aria-hidden": "true"
      })
    }

    function AE(mm) {
      let {
        max: Tm,
        bands: fm,
        ticks: hm,
        now: Am,
        settle: am,
        settleTone: xm,
        onExplain: wm
      } = mm;
      const Dm = mm => Math.max(0, Math.min(Tm, mm)) / Tm * 100 + "%";
      let im = 0;
      return (0, ka.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: wm,
        children: [(0, ka.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [fm.map((mm => {
            const Tm = {
              bottom: Dm(im),
              height: `calc(${Dm(mm.upTo)} - ${Dm(im)})`
            };
            return im = mm.upTo, (0, ka.jsx)("i", {
              className: zA()("NxGaugeBand", mm.kind),
              style: Tm
            }, mm.kind)
          })), null !== Am && (0, ka.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: Dm(Am)
            }
          }), void 0 !== am && null !== am && (0, ka.jsx)("i", {
            className: zA()("NxGaugeSettle", {
              Bad: "bad" === xm
            }),
            style: {
              bottom: Dm(am)
            }
          })]
        }), (0, ka.jsx)("span", {
          className: "NxGaugeTicks",
          children: hm.map((mm => (0, ka.jsx)("small", {
            style: {
              bottom: Dm(mm)
            },
            children: mm
          }, mm)))
        })]
      })
    }

    function aE(mm) {
      const [Tm, fm] = (0, hm.useState)(null), [Am, am] = (0, hm.useState)((() => {
        try {
          return null === window.localStorage.getItem(mm)
        } catch {
          return !1
        }
      })), xm = (0, hm.useRef)(null);
      (0, hm.useEffect)((() => () => {
        null !== xm.current && clearTimeout(xm.current)
      }), []);
      const wm = (0, hm.useCallback)((Tm => {
          fm(Tm), am(!1);
          try {
            window.localStorage.setItem(mm, "1")
          } catch {}
          null !== xm.current && clearTimeout(xm.current), xm.current = setTimeout((() => {
            xm.current = null, fm(null)
          }), 5e3)
        }), [mm]),
        Dm = (0, hm.useCallback)(((Tm, fm) => {
          const hm = `${mm}:${Tm}`;
          try {
            if (null !== window.localStorage.getItem(hm)) return;
            window.localStorage.setItem(hm, "1")
          } catch {
            return
          }
          wm(fm)
        }), [wm, mm]);
      return {
        explained: Tm,
        hinting: Am,
        explain: wm,
        explainOnce: Dm
      }
    }

    function xE(mm) {
      let {
        text: Tm,
        tone: fm,
        explained: hm
      } = mm;
      return (0, ka.jsxs)("p", {
        className: zA()("NxStatus", null === hm ? fm : "Explain"),
        "aria-live": "polite",
        children: [null !== hm && (0, ka.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== hm && void 0 !== hm ? hm : Tm]
      })
    }
    const wE = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function DE(mm, Tm) {
      const fm = Number(mm[Tm]);
      return 1 === fm || 2 === fm || 3 === fm ? fm : 0
    }

    function iE(mm) {
      return !!zD("reactor", mm.baf2RxNeed) || void 0 !== mm.baf2RxLayout && mm.baf2RxNeed.some((mm => {
        let [Tm, fm] = mm;
        return fm > 0 && wE.includes(Tm)
      }))
    }
    const RE = "buildAFactory2Game:";

    function pE(mm) {
      let {
        status: Tm,
        store: fm,
        busy: hm
      } = mm;
      const {
        t: Am
      } = (0, SA.A)();
      return function(mm) {
        return 0 !== (mm.baf2RxFlags & qT) && (!mm.baf2RxFormed || void 0 !== mm.baf2RxLayout)
      }(Tm) ? (0, ka.jsx)(cx.m, {
        disabled: !iE(Tm) || hm,
        onClick: () => {
          fm.tap("fill", (() => {
            fm.send("fill")
          }))
        },
        children: Am(void 0 !== Tm.baf2RxLayout ? `${RE}rxFillLayout` : `${RE}rxFill`)
      }) : null
    }

    function EE(mm) {
      let {
        status: Tm,
        store: fm,
        readOnly: Am,
        bare: am = !1
      } = mm;
      const {
        t: xm
      } = (0, SA.A)(), wm = Tm.baf2RxLayout, [Dm, im, Rm] = Tm.baf2RxDims, pm = (0, hm.useMemo)((() => {
        if (void 0 === wm) return 0;
        const mm = Uint8Array.from(wm, ((mm, Tm) => DE(wm, Tm)));
        return hD([Dm - 2, im - 2, Rm - 2], mm).max
      }), [wm, Dm, im, Rm]);
      return void 0 === wm ? null : (0, ka.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!am && (0, ka.jsx)("span", {
          className: "Baf2RxHint",
          children: xm(`${RE}rxLayoutLine`, {
            amount: GD(pm)
          })
        }), !Am && (0, ka.jsx)(cx.e, {
          onClick: () => {
            fm.send("layout", 0)
          },
          children: xm(`${RE}rxLayoutHide`)
        })]
      })
    }
    const oE = "buildAFactory2Game:",
      OE = {
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

    function YE(mm) {
      let {
        id: Tm,
        title: fm,
        body: hm,
        bodyParams: Am,
        yes: am,
        cancel: xm,
        confirm: wm
      } = mm;
      const {
        t: Dm
      } = (0, SA.A)();
      return (0, ka.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": Tm,
        children: [(0, ka.jsx)("h3", {
          id: Tm,
          children: Dm(fm)
        }), (0, ka.jsx)("p", {
          children: Dm(hm, Am)
        }), (0, ka.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, ka.jsx)(cx.g, {
            onClick: xm,
            children: Dm(`${oE}rxCancel`)
          }), (0, ka.jsx)(cx.O, {
            onClick: wm,
            children: Dm(am)
          })]
        })]
      })
    }

    function qE(mm) {
      const [Tm, fm] = (0, hm.useState)((() => mm.get()));
      return (0, hm.useEffect)((() => (fm(mm.get()), mm.subscribe((() => {
        fm(mm.get())
      })))), [mm]), Tm
    }

    function jE(mm) {
      let {
        kind: Tm,
        cap: fm,
        busy: Am = !1,
        whyNot: am = null,
        apart: xm
      } = mm;
      const {
        t: wm
      } = (0, SA.A)(), [Dm, im] = (0, hm.useState)(!1), Rm = null !== am, pm = (0, hm.useRef)(null);
      if ((0, hm.useEffect)((() => {
          Rm && im(!1)
        }), [Rm]), (0, hm.useLayoutEffect)((() => {
          var mm;
          const Tm = null === (mm = pm.current) || void 0 === mm ? void 0 : mm.firstElementChild;
          Rm ? null === Tm || void 0 === Tm || Tm.setAttribute("aria-disabled", "true") : Am || null === Tm || void 0 === Tm || Tm.removeAttribute("aria-disabled")
        })), !Dm || Rm) return (0, ka.jsx)("span", {
        ref: pm,
        className: "Baf2RxApartWrap",
        children: (0, ka.jsx)(cx.g, {
          disabled: Am,
          className: zA()({
            Baf2RxNotYet: Rm
          }),
          onClick: () => {
            am ? am() : im(!0)
          },
          children: wm(`${oE}rxApart`)
        })
      });
      const Em = "battery" === Tm,
        om = void 0 === fm ? `${oE}batApartConfirmBodyPlan` : `${oE}batApartConfirmBody`;
      return (0, ka.jsx)(YE, {
        id: `baf2ApartTitle_${Tm}`,
        title: Em ? `${oE}batApartConfirmTitle` : `${oE}rxApartConfirmTitle`,
        body: Em ? om : `${oE}rxApartConfirmBody`,
        bodyParams: void 0 === fm ? void 0 : {
          cap: fm
        },
        yes: `${oE}rxApart`,
        cancel: () => {
          im(!1)
        },
        confirm: () => {
          im(!1), xm()
        }
      })
    }

    function VE(mm) {
      let {
        mood: Tm,
        big: fm
      } = mm;
      const hm = OE[Tm],
        Am = [];
      return hm.rows.forEach(((mm, Tm) => {
        for (let fm = 0; fm < mm.length; fm++) "." !== mm[fm] && Am.push((0, ka.jsx)("rect", {
          x: fm + 1,
          y: Tm + 1,
          width: 1,
          height: 1,
          fill: "w" === mm[fm] ? "#8fd3ff" : hm.colour
        }, `${fm},${Tm}`))
      })), (0, ka.jsxs)("svg", {
        className: zA()("Baf2RxFace", {
          Big: fm,
          Alarm: "alarm" === Tm
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, ka.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, ka.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Am]
      })
    }

    function IE(mm) {
      return Ka(mm, "+").replace("+", "")
    }

    function KE(mm) {
      let {
        kind: Tm,
        dims: fm,
        cap: hm,
        disabled: Am,
        compact: am,
        resize: xm
      } = mm;
      const {
        t: wm
      } = (0, SA.A)(), {
        min: Dm,
        max: im
      } = Mf(Tm), Rm = Math.min(hm, im), pm = [`${oE}rxWide`, `${oE}rxTall`, `${oE}rxDeep`], Em = {
        w: String(fm[0]),
        h: String(fm[1]),
        d: String(fm[2]),
        blocks: String(ND(Tm, fm))
      };
      return (0, ka.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, ka.jsx)("div", {
          className: "Baf2RxSteppers",
          children: fm.map(((mm, Tm) => {
            const am = hm => {
                const Am = [fm[0], fm[1], fm[2]];
                Am[Tm] = mm + hm, xm(Am)
              },
              Em = mm >= Rm;
            return (0, ka.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, ka.jsx)("button", {
                type: "button",
                "aria-label": wm(`${oE}rxSmaller`),
                disabled: Am || mm <= Dm,
                onClick: () => {
                  am(-1)
                },
                children: "\u2212"
              }), (0, ka.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [mm, (0, ka.jsx)("small", {
                  children: wm(pm[Tm])
                })]
              }), (0, ka.jsx)("button", {
                type: "button",
                "aria-label": wm(`${oE}rxBigger`),
                disabled: Am || Em,
                onClick: () => {
                  am(1)
                },
                children: Em && hm < im ? "\ud83d\udd12" : "+"
              })]
            }, pm[Tm])
          }))
        }), !am && (0, ka.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === Tm ? wm(`${oE}rxSizeLine`, {
            ...Em,
            water: String(eD(fm))
          }) : wm(`${oE}batSizeLine`, Em)
        })]
      })
    }

    function QE(mm) {
      let {
        on: Tm,
        label: fm,
        disabled: hm,
        locked: Am,
        pending: am,
        toggle: xm
      } = mm;
      return (0, ka.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": Tm,
        disabled: hm,
        "aria-disabled": Am || void 0,
        className: zA()("Baf2RxSwitch", {
          On: Tm,
          Locked: Am,
          Pending: am
        }),
        onClick: xm,
        children: [(0, ka.jsx)("span", {
          className: "Baf2RxKnob"
        }), fm]
      })
    }
    const nE = "buildAFactory2Game:",
      JE = .95;

    function cE(mm, Tm) {
      return 0 !== (mm.baf2RxFlags & Tm)
    }

    function zE(mm) {
      return "cryo" === mm ? Fm.m : Fm.o
    }

    function ZE(mm) {
      var Tm, fm, hm, Am, am, xm, wm, Dm, im;
      return mm.baf2RxCryo ? {
        Qo: "cryo",
        usePerS: null !== (Am = mm.baf2RxCryoUse) && void 0 !== Am ? Am : 0,
        needPerS: null !== (am = mm.baf2RxCryoNeed) && void 0 !== am ? am : 0,
        inPerS: null !== (xm = mm.baf2RxCryoIn) && void 0 !== xm ? xm : 0,
        stored: null !== (wm = mm.baf2RxCryoStored) && void 0 !== wm ? wm : 0,
        makersShort: null !== (Dm = mm.baf2RxMixersShort) && void 0 !== Dm ? Dm : 0,
        waterBeside: null !== (im = mm.baf2RxWaterUse) && void 0 !== im ? im : 0,
        pct: mm.baf2RxWater
      } : {
        Qo: "water",
        usePerS: null !== (Tm = mm.baf2RxWaterUse) && void 0 !== Tm ? Tm : 0,
        needPerS: null !== (fm = mm.baf2RxWaterNeed) && void 0 !== fm ? fm : 0,
        inPerS: mm.baf2RxWaterIn,
        stored: mm.baf2RxWaterStored,
        makersShort: null !== (hm = mm.baf2RxCondensersShort) && void 0 !== hm ? hm : 0,
        waterBeside: 0,
        pct: mm.baf2RxWater
      }
    }

    function kE(mm) {
      const Tm = "running" === mm.baf2RxState || "idle" === mm.baf2RxState;
      return mm.baf2RxFormed && mm.baf2RxTarget !== mm.baf2RxThrottle && Tm ? bE(mm, mm.baf2RxTarget) : null
    }

    function bE(mm, Tm) {
      const [fm, hm, Am, , , , am, , xm] = mm.baf2RxStats, wm = cE(mm, OT), Dm = ZE(mm), im = Dm.pct / 100, {
        gen: Rm,
        out: pm,
        load: Em
      } = function(mm, Tm, fm, hm) {
        const Am = fm ? dw : 1,
          am = Math.min(mm.fuelHeat * Am * Math.max(0, Math.min(1, Tm)), mm.size * Am);
        return {
          gen: am,
          out: am,
          load: OD(am, mm.cooling, hm)
        }
      }({
        fuelHeat: fm,
        cooling: hm,
        size: Am
      }, Tm / 100, wm, im), om = qD(am || fD(...mm.baf2RxDims)), Om = mm.baf2RxHeat, Ym = Math.abs(Em - Om), qm = function(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Fm.o;
        const am = fm ? dw : 1,
          xm = Math.min(mm.fuelHeat * am * Tm / 100, mm.size * am),
          wm = xm,
          Dm = mm.fuelHeat * am,
          im = mm.cooling * oD(hm.pct / 100),
          Rm = Dm > 0 && im < mm.size * am ? Math.floor(100 * im / Dm) : 100,
          pm = xm * Am - hm.inPerS;
        return {
          out: wm,
          hotAbove: Rm >= 100 ? null : Math.max(0, Rm),
          waterSecs: hm.pct >= 100 && pm > 1e-6 ? Math.max(0, hm.stored) / pm : null
        }
      }({
        fuelHeat: fm,
        cooling: hm,
        size: Am
      }, Tm, wm, {
        pct: Dm.pct,
        inPerS: Dm.inPerS,
        stored: Dm.stored
      }, zE(Dm.Qo));
      return {
        pct: Tm,
        out: pm,
        coolPerS: Rm * zE(Dm.Qo),
        pelletsPerMin: xm > 0 ? pm / xm * 60 : 0,
        settle: Em,
        settleS: Ym > 2 ? om * Math.log(Ym / 2) : 0,
        overheatS: Em > 100 && Om < 100 ? om * Math.log((Em - Om) / (Em - 100)) : null,
        hotAbove: qm.hotAbove,
        coolantSecs: qm.waterSecs
      }
    }

    function SE(mm) {
      return mm.baf2RxThrottle <= 0 && "running" !== mm.baf2RxState ? 0 : bE(mm, mm.baf2RxTarget).pelletsPerMin / 60
    }

    function eE(mm, Tm) {
      if (mm <= 0 || Tm <= 0) return 0;
      const fm = mm / Tm;
      return fm < .25 ? 1 : fm < .5 ? 2 : fm < .8 ? 3 : 4
    }

    function NE(mm, Tm) {
      const fm = {};
      for (const [hm, Am] of Object.entries(Tm.params)) fm[hm] = "time" === hm ? Ja(mm, Am) : "amount" === hm ? GD(Am) : String(Math.round(Am));
      return mm(Tm.key, fm)
    }

    function GE(mm, Tm) {
      return {
        key: `${nE}${mm}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: Tm
      }
    }

    function XE(mm) {
      var Tm;
      const fm = cE(mm, OT),
        hm = "running" === mm.baf2RxState,
        Am = KD(mm),
        am = mm.baf2RxHeat;
      var xm;
      if (hm && am > tw) return {
        key: null !== (xm = Am.fix) && void 0 !== xm ? xm : `${nE}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const wm = hm ? bE(mm, mm.baf2RxTarget).coolantSecs : null,
        Dm = "cryo" === ZE(mm).Qo;
      if (null !== wm && wm >= 1 && wm <= 30) return GE(Dm ? "rxWarnCryo" : "rxWarnWater", "bad");
      const im = mD(fD(...mm.baf2RxDims)).waste,
        Rm = hm ? ZD(mm, im, SE(mm)).fullInS : null;
      if (null !== Rm && Rm <= 120 && mm.baf2RxWaste >= .5 * im) return GE("rxWarnWaste", "warn");
      if (null !== wm && wm >= 1) return GE(Dm ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: wm
      });
      const pm = "noWater" === mm.baf2RxState && am > tw;
      if (mm.baf2RxDamage >= 1 && !pm) return GE("rxDamagedHeals", "warn", {
        pct: mm.baf2RxDamage
      });
      if (mm.baf2RxCryoCut) return GE("rxFix_cryoCut", "warn");
      const Em = ZE(mm);
      if ("noWater" === mm.baf2RxState && "cryo" === Em.Qo) return GE("noWater" === mm.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const om = Am.fix === `${nE}rxFix_scramCool` || "idle" === mm.baf2RxState && mm.baf2RxTarget <= 0;
      if (om && mm.baf2RxFuel <= 0) return GE("rxFix_noFuel", "warn");
      if (om && mm.baf2RxWaterIn <= 0 && (null !== (Tm = mm.baf2RxCryoIn) && void 0 !== Tm ? Tm : 0) <= 0) return GE("rxFix_noWater", "warn");
      const Om = Am.fix === `${nE}rxFix_scramCool` ? nD(mm) : null;
      if (null !== Om) return {
        key: Om.key,
        params: {
          amount: Om.amount
        },
        tone: "info"
      };
      if ("running" !== mm.baf2RxState && "idle" !== mm.baf2RxState && null !== Am.fix) return {
        key: Am.fix,
        params: {},
        tone: "scram" === mm.baf2RxState ? "info" : pm ? "bad" : "warn"
      };
      var Ym;
      if ("idle" === mm.baf2RxState && mm.baf2RxTarget <= 0) return {
        key: null !== (Ym = Am.fix) && void 0 !== Ym ? Ym : `${nE}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const qm = mm.baf2RxCryoStarved;
      if ("cryo" === Em.Qo && qm && Em.needPerS > 0 && Em.usePerS < JE * Em.needPerS) return GE("noWater" === qm ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const jm = "cryo" === Em.Qo,
        Vm = Em.needPerS > 0 && Em.usePerS < JE * Em.needPerS;
      if (jm ? Vm || Em.makersShort > 0 && Em.pct < 100 : Em.pct < 100) {
        const Tm = jm && Vm ? Math.floor(100 * Em.usePerS / Em.needPerS) : Math.min(100, Em.pct);
        if (Em.makersShort > 0) {
          return GE(`${jm?"rxCryoShortLine":"rxWaterShortLine"}${1===Em.makersShort?"One":""}${!jm&&mm.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: Tm,
            count: Em.makersShort
          })
        }
        return GE(jm ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: Tm
        })
      }
      const Im = function(mm) {
        const [Tm, fm, hm] = mm.baf2RxStats, Am = ZE(mm), am = YD({
          fuelHeat: Tm,
          cooling: fm,
          size: hm
        }, "cryo" === Am.Qo ? Fm.g : 1, !0);
        return Math.max(0, am * zE(Am.Qo) - Am.inPerS)
      }(mm);
      if (fm && Im > 0) return GE("cryo" === Em.Qo ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Im)
      });
      if (am >= pD) return GE("rxHotLine", "warn");
      const Km = bE(mm, mm.baf2RxTarget);
      var Qm;
      if (null !== Km.overheatS) return GE("rxWillOverheat", "bad", {
        pct: mm.baf2RxTarget,
        time: Km.overheatS,
        safe: null !== (Qm = Km.hotAbove) && void 0 !== Qm ? Qm : 100
      });
      if (Math.abs(Km.settle - am) >= 3) return GE("rxSettling", "info", {
        pct: mm.baf2RxTarget,
        heat: Math.round(Km.settle),
        time: Km.settleS
      });
      const nm = nD(mm);
      if (null !== nm) return {
        key: nm.key,
        params: {
          amount: nm.amount
        },
        tone: "info"
      };
      const Jm = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== Tm && ("running" !== Tm || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === mm.rods ? `${jD}rxLimitNoRods` : `${jD}rxLimit_${RD(mm)}`
      }({
        rods: mm.baf2RxStats[3],
        ...QD(mm)
      }, mm.baf2RxState, mm.baf2RxOut >= JE * mm.baf2RxMaxNow, !1);
      if (Jm === `${nE}rxLimit_size`) {
        const [Tm, , fm, hm] = mm.baf2RxStats, Am = hm > 0 && Tm > 0 ? Math.ceil(fm / (Tm / hm) - 1e-9) : hm, am = mm.baf2RxDims.every((mm => mm >= Mf("reactor").max));
        if (Am < hm) return GE(am ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Am,
          have: hm
        });
        if (am) return GE("rxLimit_sizeMax", "info")
      }
      return null !== Jm ? {
        key: Jm,
        params: {},
        tone: "info"
      } : GE("rxSteady", "ok", {
        pct: mm.baf2RxTarget
      })
    }

    function PE(mm) {
      var Tm;
      if (mm.melted) return GE("rxMeltedBody", "bad");
      if (-1 === mm.bad) return GE("rxFix_noRoom", "warn");
      if (mm.bad > 0) return GE(1 === mm.bad ? "rxBadOne" : "rxBad", "warn", {
        count: mm.bad
      });
      if (mm.left > 0) {
        const Tm = 1 === mm.left ? "One" : "";
        return GE(mm.canFill ? `rxPlanLeft${Tm}` : `rxPlanLeftNoFill${Tm}`, "info", {
          count: mm.left
        })
      }
      if (0 === mm.rods) return GE("rxLimitNoRods", "warn");
      const fm = null !== (Tm = mm.idle) && void 0 !== Tm ? Tm : 0;
      return fm > 0 ? GE(1 === fm ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: fm
      }) : GE("rxPlanReady", "ok")
    }

    function HE(mm) {
      return Math.floor(Math.max(0, mm[1] - 1) / 2)
    }

    function yE(mm) {
      if (mm >= aD && mm < xD) {
        const Tm = mm - aD;
        return {
          key: 0 === Tm ? `${nE}rxWhy_rodAlone` : 1 === Tm ? `${nE}rxWhy_rodOne` : `${nE}rxWhy_rod`,
          params: {
            count: String(Tm),
            heat: String(rw * (1 + sw * Tm))
          }
        }
      }
      return mm === xD ? {
        key: `${nE}rxWhy_channel`,
        params: {
          amount: String(Mw)
        }
      } : mm === wD ? {
        key: `${nE}rxWhy_deadChannel`,
        params: {}
      } : mm === DD ? {
        key: `${nE}rxWhy_graphite`,
        params: {}
      } : {
        key: `${nE}rxWhy_core`,
        params: {}
      }
    }
    const CE = "buildAFactory2Game:";

    function rE(mm, Tm) {
      return 0 !== (mm.baf2RxFlags & Tm)
    }

    function sE(mm) {
      let {
        status: Tm,
        pending: fm,
        store: hm,
        explain: Am
      } = mm;
      const {
        t: am
      } = (0, SA.A)(), xm = rE(Tm, oT), wm = Tm.baf2RxTarget, Dm = Tm.baf2RxThrottle, im = function(mm) {
        return {
          press: () => {
            mm.throttlePress()
          },
          drag: Tm => {
            mm.throttleDrag(Tm)
          },
          release: () => {
            mm.throttleRelease()
          }
        }
      }(hm), Rm = null === (pm = bE(Tm, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, pm - 10),
        red: pm
      };
      var pm;
      return (0, ka.jsxs)("div", {
        className: zA()("Baf2RxThrottle", {
          Off: xm
        }),
        onClick: () => {
          xm && Am(`${CE}rxWhy_startFirst`)
        },
        children: [(0, ka.jsx)("span", {
          className: "HideNarrow",
          children: am(`${CE}rxThrottle`)
        }), (0, ka.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, ka.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: wm,
            disabled: xm,
            style: xm ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": am(`${CE}rxThrottle`),
            onPointerDown: () => {
              im.press();
              const mm = () => {
                window.removeEventListener("pointerup", mm), window.removeEventListener("pointercancel", mm), im.release()
              };
              window.addEventListener("pointerup", mm), window.addEventListener("pointercancel", mm)
            },
            onKeyUp: im.release,
            onChange: mm => {
              im.drag(Number(mm.target.value))
            }
          }), (0, ka.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${Rm.amber}%, #ffb020 ${Rm.amber}% ${Rm.red}%, #ff3b30 ${Rm.red}%)`
            },
            "aria-hidden": "true"
          }), (0, ka.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${Dm}% + ${8*(1-Dm/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, ka.jsxs)("b", {
          children: [`${wm}%`, (0, ka.jsx)("i", {
            className: zA()("Baf2RxPendingDot", {
              On: fm
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function lE(mm) {
      let {
        status: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)(), hm = bE(Tm, Tm.baf2RxTarget), Am = ZE(Tm).Qo, am = fm("cryo" === Am ? `${CE}rxRateCryo` : `${CE}rxRateWater`, {
        rate: IE(hm.coolPerS)
      }), xm = fm(`${CE}rxChain`, {
        pct: String(Tm.baf2RxTarget),
        out: GD(hm.out),
        heat: String(Math.round(hm.settle)),
        coolant: am
      }), wm = null !== hm.coolantSecs ? hm.coolantSecs >= 1 ? fm("cryo" === Am ? `${CE}rxThrottleCryoOut` : `${CE}rxThrottleWaterOut`, {
        time: Ja(fm, hm.coolantSecs)
      }) : fm("cryo" === Am ? `${CE}rxThrottleCryoDry` : `${CE}rxThrottleWaterDry`) : null;
      return (0, ka.jsxs)("p", {
        className: "Baf2RxChain",
        children: [xm, null !== wm ? (0, ka.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", wm]
        }) : (0, ka.jsxs)("span", {
          children: [" \xb7 ", fm(`${CE}rxChainPellets`, {
            amount: XD(hm.pelletsPerMin)
          })]
        })]
      })
    }

    function ME(mm) {
      let {
        view: Tm,
        store: fm,
        explain: Am,
        explainOnce: am
      } = mm;
      const {
        t: xm
      } = (0, SA.A)(), {
        status: wm
      } = Tm, [Dm, im] = (0, hm.useState)(!1), Rm = rE(wm, oT), Em = rE(wm, OT), om = !rE(wm, jT), Om = wm.baf2RxHeat > 100;
      return (0, ka.jsxs)(ka.Fragment, {
        children: [(0, ka.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, ka.jsx)(sE, {
            status: wm,
            pending: Tm.throttlePending,
            store: fm,
            explain: Am
          }), (0, ka.jsx)(QE, {
            on: Em,
            label: Em ? xm(`${CE}rxOdLeft`, {
              time: Ja(xm, wm.baf2RxOdLeft)
            }) : xm(`${CE}rxOverdrive`),
            locked: om,
            pending: 0 !== (Tm.pendingFlags & OT),
            toggle: () => {
              om ? Am(`${CE}rxOverdriveTier`, {
                amount: String(pm(13))
              }) : Em ? fm.setFlag(OT, !1) : Tm.odConfirmed ? fm.setFlag(OT, !0) : im(!0)
            }
          }), Rm || Tm.startGuard ? (0, ka.jsx)(cx.q, {
            disabled: Tm.busy.has("start") || Tm.startGuard,
            onClick: () => {
              fm.tap("start", (() => {
                fm.setFlag(oT, !1)
              }))
            },
            children: xm(Tm.startGuard ? `${CE}rxStarting` : `${CE}rxStart`)
          }) : (0, ka.jsx)("span", {
            className: zA()("Baf2RxScram", {
              Pulse: Om
            }),
            children: (0, ka.jsx)(cx.O, {
              onClick: () => {
                fm.shutDown()
              },
              children: xm(`${CE}rxScram`)
            })
          })]
        }), (0, ka.jsx)(lE, {
          status: wm
        }), Dm && (0, ka.jsx)(YE, {
          id: "baf2RxOdTitle",
          title: `${CE}rxOdConfirmTitle`,
          body: `${CE}rxOdConfirmBody`,
          yes: `${CE}rxOdConfirm`,
          cancel: () => {
            im(!1)
          },
          confirm: () => {
            im(!1), fm.tap("odConfirm", (() => {
              fm.confirmOverdrive(), fm.setFlag(OT, !0)
            })), am(`${CE}rxWhy_overdrive`)
          }
        })]
      })
    }

    function uE(mm) {
      let {
        view: Tm,
        store: fm,
        keepSize: hm
      } = mm;
      const {
        t: Am
      } = (0, SA.A)(), {
        status: am
      } = Tm;
      return (0, ka.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, ka.jsx)(KE, {
          kind: "reactor",
          dims: Tm.dims,
          cap: am.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: mm => {
            fm.resize(mm)
          }
        }), hm ? (0, ka.jsx)(cx.g, {
          onClick: hm,
          children: Am(`${CE}rxKeepSize`)
        }) : (0, ka.jsxs)(ka.Fragment, {
          children: [(0, ka.jsx)(QE, {
            on: Tm.guide,
            label: Am(`${CE}rxGuide`),
            toggle: () => {
              fm.toggleGuide()
            }
          }), rE(am, IT) && (0, ka.jsx)(QE, {
            on: Tm.starter,
            label: Am(`${CE}rxStarter`),
            toggle: () => {
              fm.toggleStarter()
            }
          }), (0, ka.jsx)(pE, {
            status: am,
            store: fm,
            busy: Tm.busy.has("fill")
          })]
        })]
      })
    }

    function BE(mm) {
      let {
        need: Tm,
        kind: fm = "reactor",
        explain: hm
      } = mm;
      const {
        t: Am
      } = (0, SA.A)(), am = Tm.length <= 3, xm = Tm.reduce(((mm, Tm) => {
        let [, fm] = Tm;
        return mm + fm
      }), 0);
      return (0, ka.jsxs)("div", {
        className: zA()("Baf2RxParts", {
          Compact: !am
        }),
        onClick: () => {
          hm("battery" === fm ? `${CE}batWhy_store` : `${CE}rxShellHint`)
        },
        children: [xm > 0 && (0, ka.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === xm ? Am(`${CE}rxBlocksOne`) : Am(`${CE}rxBlocks`, {
            blocks: String(xm)
          })
        }), 0 === Tm.length ? (0, ka.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Am("battery" === fm ? `${CE}batPartsDone` : `${CE}rxShellDone`)
        }) : cD(Tm).map((mm => {
          let [Tm, fm, hm] = mm;
          const xm = function(mm) {
            const Tm = SD[mm];
            if (void 0 === Tm) return null;
            const [fm, hm, Am] = kD[Tm].colour.map((mm => Math.round(255 * mm)));
            return `rgb(${fm}, ${hm}, ${Am})`
          }(Tm);
          return (0, ka.jsxs)("span", {
            className: "Baf2RxChip",
            title: xa(Am, Tm),
            children: [(0, ka.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === xm ? {
                visibility: "hidden"
              } : {
                background: xm
              },
              title: Am(`${CE}rxShopGhost`)
            }), (0, ka.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, ka.jsx)(NA.d, {
                itemName: Tm,
                amount: 0
              })
            }), (0, ka.jsx)("span", {
              className: "Baf2RxChipName",
              children: am ? `${fm} ${wm=xa(Am,Tm),wm.replace(/^(Reactor|Battery) (?=\S)/,"")}` : fm
            }), hm >= fm ? (0, ka.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, ka.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: am ? Am(`${CE}rxShopShort`, {
                count: String(fm - hm)
              }) : "\u2212" + (fm - hm)
            })]
          }, Tm);
          var wm
        }))]
      })
    }
    const LE = "buildAFactory2Game:";

    function vE(mm) {
      var Tm, fm, Am, am, xm, wm, Dm;
      let {
        store: im,
        close: Rm
      } = mm;
      const {
        t: pm
      } = (0, SA.A)(), Em = ux(), om = qE(im), {
        explained: Om,
        explain: Ym
      } = aE("baf2RxExplained"), qm = (0, hm.useCallback)(((mm, Tm) => {
        Ym(pm(mm, Tm))
      }), [Ym, pm]), jm = null === om || void 0 === om ? void 0 : om.status, Vm = !0 === (null === jm || void 0 === jm ? void 0 : jm.baf2BatReadOnly), Im = mm => {
        jm && Em.send(ET(jm.baf2BatAt, mm))
      }, [Km, Qm, nm] = null !== (Tm = null === om || void 0 === om ? void 0 : om.dims) && void 0 !== Tm ? Tm : [0, 0, 0], Jm = GD(null !== (fm = null === om || void 0 === om ? void 0 : om.yp) && void 0 !== fm ? fm : 0), cm = !0 === (null === jm || void 0 === jm ? void 0 : jm.baf2BatFormed), zm = null !== (Am = null === jm || void 0 === jm ? void 0 : jm.baf2BatStored) && void 0 !== Am ? Am : 0, Zm = Math.max(1, null !== (am = null === jm || void 0 === jm ? void 0 : jm.baf2BatIslandCap) && void 0 !== am ? am : 1), km = Math.min(100, 100 * zm / Zm), bm = null === jm || void 0 === jm ? void 0 : jm.baf2BatNetPerS, Sm = function(mm, Tm, fm) {
        return fm > 0 && Tm >= fm ? "full" : void 0 !== mm && mm >= .05 ? "charging" : void 0 !== mm && mm <= -.05 && Tm > 0 ? "draining" : "steady"
      }(bm, zm, null !== (xm = null === jm || void 0 === jm ? void 0 : jm.baf2BatIslandCap) && void 0 !== xm ? xm : 0), em = null !== (wm = null === jm || void 0 === jm ? void 0 : jm.baf2BatMadePerS) && void 0 !== wm ? wm : 0, Nm = null !== (Dm = null === jm || void 0 === jm ? void 0 : jm.baf2BatUsedPerS) && void 0 !== Dm ? Dm : 0;
      let Gm, Xm = {},
        Pm = "info";
      if (jm)
        if (cm) "charging" === Sm ? (Gm = `${LE}batLine_charging`, Xm = {
          time: Ja(pm, (Zm - zm) / Math.max(.05, null !== bm && void 0 !== bm ? bm : 0))
        }, Pm = "ok") : "draining" === Sm ? (Gm = `${LE}batLine_draining`, Xm = {
          time: Ja(pm, zm / Math.max(.05, -(null !== bm && void 0 !== bm ? bm : 0)))
        }, Pm = "warn") : Gm = "full" === Sm ? `${LE}batLine_full` : zm <= 0 && Nm > 0 ? `${LE}batLine_empty` : `${LE}batLine_steady`;
        else {
          var Hm;
          const mm = PE({
            left: jm.baf2BatNeed.reduce(((mm, Tm) => {
              let [, fm] = Tm;
              return mm + fm
            }), 0),
            bad: jm.baf2BatBad,
            rods: 1,
            canFill: !0 === jm.baf2BatCanFill,
            melted: !1
          });
          Gm = mm.key, Xm = {
            count: String(null !== (Hm = mm.params.count) && void 0 !== Hm ? Hm : 0)
          }, Pm = mm.tone
        }
      else Gm = `${LE}batLine_steady`;
      const ym = Math.max(em, Nm, 1);
      return (0, ka.jsx)(Jx.d, {
        close: Rm,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, ka.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, ka.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, ka.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, ka.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, ka.jsx)(NA.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, ka.jsxs)("div", {
                children: [(0, ka.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: pm(`${LE}batTitle`)
                }), jm && (0, ka.jsxs)("p", {
                  className: zA()("Baf2RxSubtitle", {
                    good: cm && "charging" === Sm,
                    warn: cm && "draining" === Sm
                  }),
                  children: [Km, "\xd7", Qm, "\xd7", nm, " \xb7 ", pm(cm ? `${LE}batState_${Sm}` : `${LE}rxSubPlanShort`)]
                })]
              })]
            }), (0, ka.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [jm && !Vm && (0, ka.jsx)(jE, {
                kind: "battery",
                cap: cm ? Jm : void 0,
                busy: null === om || void 0 === om ? void 0 : om.busy.has("apart"),
                apart: () => {
                  im.tap("apart", (() => {
                    Im("apart")
                  }))
                }
              }), (0, ka.jsx)(cx.j, {
                onClick: Rm
              })]
            })]
          }), om && jm && (0, ka.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, ka.jsxs)("div", {
              className: zA()("Baf2RxFlow Baf2BatFlow", {
                Plan: !cm
              }),
              children: [(0, ka.jsx)(fE, {
                kind: "Power",
                label: pm(`${LE}batMade`),
                number: cm ? `\u26a1 ${GD(em)}/s` : "\u2014",
                note: pm(`${LE}batMadeNote`),
                share: cm ? em / ym : void 0,
                onExplain: () => {
                  qm(`${LE}batWhy_made`)
                }
              }), (0, ka.jsx)(hE, {
                kind: "Power",
                step: cm ? eE(em, ym) : 0,
                planned: !cm
              }), (0, ka.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  qm(`${LE}batWhy_store`)
                },
                children: [(0, ka.jsx)(AE, {
                  max: 100,
                  bands: [{
                    upTo: cm ? km : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, ka.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, ka.jsx)("b", {
                    className: "Baf2BatStored",
                    children: cm ? pm(`${LE}batStoredOf`, {
                      amount: GD(zm),
                      cap: GD(jm.baf2BatIslandCap)
                    }) : pm(`${LE}batWillHold`, {
                      cap: Jm
                    })
                  }), (0, ka.jsx)("span", {
                    children: pm(`${LE}batAdds`, {
                      cap: Jm
                    })
                  }), cm && (0, ka.jsx)("small", {
                    children: pm(`${LE}batBreakNote`, {
                      cap: Jm
                    })
                  })]
                })]
              }), (0, ka.jsx)(hE, {
                kind: "Power",
                step: cm ? eE(Nm, ym) : 0,
                planned: !cm
              }), (0, ka.jsx)(fE, {
                kind: "Power",
                label: pm(`${LE}batUsed`),
                number: cm ? `\u26a1 ${GD(Nm)}/s` : "\u2014",
                note: pm(`${LE}batUsedNote`),
                share: cm ? Nm / ym : void 0,
                onExplain: () => {
                  qm(`${LE}batWhy_used`)
                }
              })]
            }), (0, ka.jsx)(xE, {
              text: pm(Gm, Xm),
              tone: Pm,
              explained: Om
            }), Vm ? (0, ka.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: pm(`${LE}rxNotYours`)
            }) : !cm && (0, ka.jsxs)(ka.Fragment, {
              children: [(0, ka.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, ka.jsx)(KE, {
                  kind: "battery",
                  dims: om.dims,
                  cap: jm.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: mm => {
                    im.resize(mm)
                  }
                }), (0, ka.jsx)(QE, {
                  on: om.guide,
                  label: pm(`${LE}rxGuide`),
                  toggle: () => {
                    im.toggleGuide()
                  }
                }), jm.baf2BatCanFill && (0, ka.jsx)(cx.m, {
                  disabled: !zD("battery", jm.baf2BatNeed) || om.busy.has("fill"),
                  onClick: () => {
                    im.tap("fill", (() => {
                      Im("fill")
                    }))
                  },
                  children: pm(`${LE}rxFill`)
                })]
              }), (0, ka.jsx)(BE, {
                need: jm.baf2BatNeed,
                kind: "battery",
                explain: qm
              })]
            })]
          })]
        })
      })
    }
    const tE = "buildAFactory2Game:",
      UE = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function dE(mm, Tm) {
      return mm === AD ? null : Tm ? "#4a4440" : mm < xD ? UE[mm - aD] : mm === xD ? "#3fd0f0" : mm === wD ? "#2c3e4c" : "#55585e"
    }

    function gE(mm) {
      let {
        inner: Tm,
        looks: fm,
        layer: hm,
        setLayer: Am,
        glow: am,
        melted: xm,
        explain: wm
      } = mm;
      const {
        t: Dm
      } = (0, SA.A)(), [im, Rm, pm] = Tm, Em = Math.max(0, Math.min(Rm - 1, hm)), om = [];
      for (let Ym = 0; Ym < pm; Ym++)
        for (let mm = 0; mm < im; mm++) {
          var Om;
          const Tm = null !== (Om = fm[(Em * pm + Ym) * im + mm]) && void 0 !== Om ? Om : AD,
            hm = dE(Tm, xm),
            Am = Tm >= aD && Tm < xD;
          om.push(null === hm ? (0, ka.jsx)("circle", {
            cx: mm + .5,
            cy: Ym + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${mm},${Ym}`) : (0, ka.jsx)("rect", {
            x: mm + .06,
            y: Ym + .06,
            width: .88,
            height: .88,
            fill: hm,
            opacity: Am && !xm ? .5 + .5 * am : 1,
            onClick: mm => {
              mm.stopPropagation();
              const fm = yE(Tm);
              wm(fm.key, fm.params)
            }
          }, `${mm},${Ym}`))
        }
      return (0, ka.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, ka.jsx)("svg", {
          className: zA()("Baf2RxMapGrid", {
            Melted: xm
          }),
          viewBox: `0 0 ${Math.max(1,im)} ${Math.max(1,pm)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": Dm(`${tE}rxWhy_core`),
          onClick: () => {
            wm(`${tE}rxWhy_core`, {})
          },
          children: om
        }), Rm > 1 && (0, ka.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, ka.jsx)("button", {
            type: "button",
            "aria-label": Dm(`${tE}rxLayerDown`),
            disabled: Em <= 0,
            onClick: () => {
              Am(Em - 1)
            },
            children: "\u25bc"
          }), (0, ka.jsxs)("span", {
            children: [(0, ka.jsx)("span", {
              className: "HideNarrow",
              children: Dm(`${tE}rxLayer`, {
                n: String(Em + 1),
                of: String(Rm)
              })
            }), (0, ka.jsx)("span", {
              className: "ShowNarrow",
              children: Dm(`${tE}rxLayerShort`, {
                n: String(Em + 1),
                of: String(Rm)
              })
            })]
          }), (0, ka.jsx)("button", {
            type: "button",
            "aria-label": Dm(`${tE}rxLayerUp`),
            disabled: Em >= Rm - 1,
            onClick: () => {
              Am(Em + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const WE = "buildAFactory2Game:",
      FE = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Uw,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: ID,
        kind: "red"
      }],
      mo = [50, Uw, 100];

    function To(mm) {
      let {
        stats: Tm,
        t: fm,
        explain: hm
      } = mm;
      const Am = RD(Tm),
        am = Math.max(1, Tm.fuelHeat, Tm.cooling, Tm.size),
        xm = [
          ["fuel", `${WE}rxBarRods`, Tm.fuelHeat],
          ["cooling", `${WE}rxBarCooling`, Tm.cooling],
          ["size", `${WE}rxBarSize`, Tm.size]
        ];
      return (0, ka.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          hm(`${WE}rxWhy_bars`)
        },
        children: [(0, ka.jsx)("span", {
          className: "Baf2RxMostLine",
          children: fm(`${WE}rxMost`, {
            amount: GD(Math.min(Tm.fuelHeat, Tm.cooling, Tm.size))
          })
        }), (0, ka.jsx)("span", {
          className: "Baf2RxMostBars",
          children: xm.map((mm => {
            let [Tm, hm, xm] = mm;
            return (0, ka.jsxs)("span", {
              className: zA()("Baf2RxMostBar", Tm, {
                Low: Tm === Am
              }),
              children: [(0, ka.jsx)("small", {
                children: fm(hm)
              }), (0, ka.jsx)("i", {
                children: (0, ka.jsx)("b", {
                  style: {
                    width: 100 * xm / am + "%"
                  }
                })
              })]
            }, Tm)
          }))
        })]
      })
    }

    function fo(mm) {
      var Tm;
      let {
        view: fm,
        heat: Am,
        settle: am,
        settleLine: xm,
        settleBad: wm,
        explain: Dm
      } = mm;
      const {
        t: im
      } = (0, SA.A)(), {
        status: Rm
      } = fm, pm = Rm.baf2RxAt.join(","), [Em, om] = (0, hm.useState)((() => HE(fm.inner)));
      (0, hm.useEffect)((() => {
        om(HE(fm.inner))
      }), [pm, fm.inner[1]]);
      const Om = null !== (Tm = fm.plan) && void 0 !== Tm ? Tm : QD(Rm),
        Ym = fm.plan ? fm.plan.powerPerUnit : Rm.baf2RxStats[8],
        qm = null === Am ? null : "alarm" === (jm = VD(Rm)) ? "red" : "hot" === jm ? "hot" : "warm" === jm ? "warm" : "cold";
      var jm;
      const Vm = !Rm.baf2RxFormed && function(mm, Tm) {
          return 0 !== (mm.baf2RxFlags & Tm)
        }(Rm, YT),
        Im = Rm.baf2RxDamage,
        Km = Rm.baf2RxDamageTrend;
      return (0, ka.jsxs)("div", {
        className: zA()("Baf2RxCore", null !== qm && void 0 !== qm ? qm : "plan"),
        children: [(0, ka.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, ka.jsx)(gE, {
            inner: fm.inner,
            looks: fm.looks,
            layer: Em,
            setLayer: om,
            glow: Rm.baf2RxFormed ? Rm.baf2RxThrottle / 100 : 1,
            melted: Vm,
            explain: Dm
          }), (0, ka.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              Dm(`${WE}rxWhy_heat`)
            },
            children: [null !== Am ? (0, ka.jsxs)(ka.Fragment, {
              children: [(0, ka.jsx)("b", {
                children: im(`${WE}rxHeatPct`, {
                  pct: String(Am)
                })
              }), (0, ka.jsx)("span", {
                className: zA()("Baf2RxBand", qm),
                children: im(`${WE}rxBand_${qm}`)
              })]
            }) : (0, ka.jsx)("b", {
              children: im(`${WE}rxHeat`)
            }), null !== xm && (0, ka.jsx)("span", {
              className: zA()("Baf2RxSettle", {
                Bad: wm
              }),
              children: xm
            }), Im >= 1 && (0, ka.jsxs)("span", {
              className: zA()("Baf2RxDamage", Km),
              children: [im(`${WE}rxDamageLine`, {
                pct: String(Im)
              }), " \xb7 ", im(`${WE}rxDamage_${Km}`), (0, ka.jsx)("i", {
                children: (0, ka.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Im)}%`
                  }
                })
              })]
            })]
          }), (0, ka.jsx)(AE, {
            max: ID,
            bands: FE,
            ticks: mo,
            now: Am,
            settle: am,
            settleTone: wm ? "bad" : null,
            onExplain: () => {
              Dm(`${WE}rxWhy_heat`)
            }
          })]
        }), (0, ka.jsx)(To, {
          stats: Om,
          t: im,
          explain: Dm
        }), Ym > 0 && (0, ka.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            Dm(`${WE}rxWhy_perPellet`)
          },
          children: im(`${WE}rxPerPellet`, {
            amount: GD(Ym)
          })
        })]
      })
    }

    function ho(mm, Tm) {
      var fm;
      if (!mm.baf2RxStore) return {
        note: Tm(`${WE}rxUpTo`, {
          amount: GD(mm.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [hm, Am] = mm.baf2RxStore, am = Am > 0 ? hm / Am : 0, xm = String(Math.floor(100 * am)), wm = null !== (fm = mm.baf2RxStoreNetPerS) && void 0 !== fm ? fm : 0, Dm = function(mm) {
        var Tm, fm;
        const [hm, Am] = null !== (Tm = mm.baf2RxStore) && void 0 !== Tm ? Tm : [0, 0], am = null !== (fm = mm.baf2RxStoreNetPerS) && void 0 !== fm ? fm : 0;
        return Am > 0 && hm >= Am - 1 ? "running" === mm.baf2RxState ? `${nE}rxStoreFull` : `${nE}rxStoreFullOnly` : am > .05 ? `${nE}rxStoreLine` : am < -.05 ? "running" === mm.baf2RxState ? `${nE}rxStoreUsesMore` : `${nE}rxStoreDraining` : `${nE}rxStorePct`
      }(mm);
      return {
        note: Tm(Dm, Dm === `${WE}rxStoreLine` ? {
          pct: xm,
          time: Ja(Tm, (Am - hm) / wm)
        } : {
          pct: xm
        }),
        share: am
      }
    }

    function Ao(mm) {
      let {
        view: Tm,
        explain: fm,
        preview: hm
      } = mm;
      const {
        t: Am
      } = (0, SA.A)(), {
        status: am
      } = Tm, xm = mD(fD(...Tm.dims)), wm = SE(am), Dm = Math.min(Math.round(am.baf2RxFuel), xm.fuel), im = "running" === am.baf2RxState, Rm = im ? eE(am.baf2RxOut, am.baf2RxMaxNow) : 0, pm = function(mm, Tm, fm) {
        const hm = ZE(mm),
          Am = "cryo" === hm.Qo,
          am = fm ? fm.coolantSecs : hm.pct >= 100 && mm.baf2RxOut >= 1 ? bE(mm, mm.baf2RxThrottle).coolantSecs : null;
        let xm, wm = !1;
        if (hm.pct < 100) {
          const fm = 1 === hm.makersShort,
            am = !Am && mm.baf2RxCryoOpen ? "OrCryo" : "";
          xm = hm.makersShort > 0 ? Tm(Am ? `${WE}rxCryoAddMixer${fm?"":"s"}` : `${WE}rxWaterAddCondenser${fm?"":"s"}${am}`, {
            count: String(hm.makersShort)
          }) : Tm(`${WE}rxWaterNeeds`, {
            rate: IE(hm.needPerS)
          })
        } else if (null !== am) xm = Tm(`${WE}rxWaterRunsOut`, {
          time: Ja(Tm, am)
        });
        else if (hm.waterBeside > 0) xm = Tm(`${WE}rxCryoPlusWater`, {
          rate: IE(hm.waterBeside)
        });
        else {
          const mm = function(mm) {
            return mm.inPerS <= 0 ? "rxWaterNoSupply" : mm.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(hm);
          wm = "rxWaterNoSupply" === mm, xm = Tm(`${WE}${mm}`, {
            amount: GD(hm.stored)
          })
        }
        return {
          kind: Am ? "Cryo" : "Water",
          label: Tm(Am ? `${WE}rxCryo` : `${WE}rxWater`),
          number: `${IE(hm.usePerS)}/s`,
          preview: fm ? `${IE(fm.coolPerS)}/s` : null,
          note: xm,
          tone: "noWater" === mm.baf2RxState ? "danger" : wm ? "warn" : (Dm = hm.pct, im = am, Dm < 100 ? "danger" : null === im ? null : im < 300 ? "danger" : "warn"),
          share: hm.pct / 100,
          why: Am ? `${WE}rxWhy_cryo` : `${WE}rxWhy_water`,
          short: hm.pct < 100
        };
        var Dm, im
      }(am, Am, hm), Em = ZD(am, xm.waste, wm), om = ho(am, Am), Om = bE(am, am.baf2RxTarget), Ym = im && Math.abs(Om.settle - am.baf2RxHeat) >= 3, qm = hm ? hm.pelletsPerMin / 60 : null;
      return (0, ka.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, ka.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, ka.jsx)(fE, {
            kind: "Fuel",
            label: Am(`${WE}rxFuel`),
            number: String(Dm),
            preview: null !== qm && qm > 0 && am.baf2RxFuel > 0 ? Ja(Am, am.baf2RxFuel / qm) : null,
            note: am.baf2RxFuel <= 0 ? Am(`${WE}rxFuelEmpty`) : wm > 0 ? Am(`${WE}rxFuelLeft`, {
              time: Ja(Am, am.baf2RxFuel / wm)
            }) : Am(1 === Dm ? `${WE}rxFuelPellet` : `${WE}rxFuelPellets`),
            tone: "noFuel" === am.baf2RxState ? "danger" : am.baf2RxFuel < 2 ? "warn" : null,
            share: am.baf2RxFuel / xm.fuel,
            onExplain: () => {
              fm(`${WE}rxWhy_fuel`)
            }
          }), (0, ka.jsx)(fE, {
            kind: pm.kind,
            label: pm.label,
            number: pm.number,
            preview: pm.preview,
            note: pm.note,
            tone: pm.tone,
            share: pm.share,
            onExplain: () => {
              fm(pm.why)
            }
          })]
        }), (0, ka.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, ka.jsx)(hE, {
            kind: "Fuel",
            step: Rm,
            short: "noFuel" === am.baf2RxState
          }), (0, ka.jsx)(hE, {
            kind: pm.kind,
            step: Rm,
            short: pm.short || "noWater" === am.baf2RxState
          })]
        }), (0, ka.jsx)(fo, {
          view: Tm,
          heat: am.baf2RxHeat,
          settle: Math.min(ID, Om.settle),
          settleLine: Ym ? Am(`${WE}rxHeatSettles`, {
            pct: String(Math.round(Om.settle)),
            time: Ja(Am, Om.settleS)
          }) : null,
          settleBad: Om.settle > 100,
          explain: fm
        }), (0, ka.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, ka.jsx)(hE, {
            kind: "Power",
            step: Rm
          }), (0, ka.jsx)(hE, {
            kind: "Waste",
            step: im && am.baf2RxFuel - am.baf2RxPu > 0 ? Rm : 0,
            short: Em.full
          })]
        }), (0, ka.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, ka.jsx)(fE, {
            kind: "Power",
            label: Am(`${WE}rxPowerOut`),
            number: `\u26a1 ${GD(am.baf2RxOut)}/s`,
            preview: hm ? GD(hm.out) : null,
            note: om.note,
            share: om.share,
            onExplain: () => {
              fm(`${WE}rxWhy_power`)
            }
          }), (0, ka.jsx)(fE, {
            kind: "Waste",
            label: Am(`${WE}rxWaste`),
            number: `${Math.floor(am.baf2RxWaste)}/${xm.waste}`,
            note: Em.full ? Am(`${WE}rxWasteFull`) : null !== Em.fullInS ? Am(`${WE}rxWasteFullIn`, {
              time: Ja(Am, Em.fullInS)
            }) : Am(`${WE}rxWasteSpent`),
            tone: "wasteFull" === am.baf2RxState ? "danger" : Em.full ? "warn" : null,
            share: am.baf2RxWaste / xm.waste,
            onExplain: () => {
              fm(`${WE}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function ao(mm) {
      let {
        view: Tm,
        explain: fm
      } = mm;
      const {
        t: hm
      } = (0, SA.A)(), Am = Tm.plan;
      if (!Am) return null;
      const am = Am.fuelHeat <= 0 ? null : Am.cooling > 0 ? Math.min(ID, 100 * Am.fuelHeat / Am.cooling) : ID,
        xm = hm(`${WE}rxPlanAtFull`);
      return (0, ka.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, ka.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, ka.jsx)(fE, {
            kind: "Fuel",
            label: hm(`${WE}rxFuel`),
            number: hm(`${WE}rxPlanPerMin`, {
              amount: XD(Am.pelletsPerMin)
            }),
            note: hm(`${WE}rxPlanPellets`),
            onExplain: () => {
              fm(`${WE}rxWhy_fuel`)
            }
          }), (0, ka.jsx)(fE, {
            kind: "Water",
            label: hm(`${WE}rxWater`),
            number: `${IE(Am.waterPerS)}/s`,
            note: Tm.status.baf2RxCryoOpen && Am.waterPerS > 0 ? hm(`${WE}rxPlanOrCryo`, {
              rate: IE(YD(Am, Fm.g) * Fm.m)
            }) : xm,
            onExplain: () => {
              fm(`${WE}rxWhy_water`)
            }
          })]
        }), (0, ka.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, ka.jsx)(hE, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, ka.jsx)(hE, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, ka.jsx)(fo, {
          view: Tm,
          heat: null,
          settle: am,
          settleLine: null === am ? null : hm(`${WE}rxPlanHeat`, {
            pct: String(Math.round(am))
          }),
          settleBad: null !== am && am > 100,
          explain: fm
        }), (0, ka.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, ka.jsx)(hE, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, ka.jsx)(hE, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, ka.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, ka.jsx)(fE, {
            kind: "Power",
            label: hm(`${WE}rxPowerOut`),
            number: `\u26a1 ${GD(Am.max)}/s`,
            note: xm,
            onExplain: () => {
              fm(`${WE}rxWhy_power`)
            }
          }), (0, ka.jsx)(fE, {
            kind: "Waste",
            label: hm(`${WE}rxWaste`),
            number: hm(`${WE}rxPlanPerMin`, {
              amount: XD(Am.pelletsPerMin)
            }),
            note: hm(`${WE}rxWasteSpent`),
            onExplain: () => {
              fm(`${WE}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const xo = "buildAFactory2Game:",
      wo = {
        key: `${xo}rxWaiting`,
        params: {},
        tone: "info"
      };

    function Do(mm, Tm) {
      return 0 !== (mm.baf2RxFlags & Tm)
    }

    function io(mm) {
      var Tm, fm;
      let {
        store: Am,
        close: am
      } = mm;
      const {
        t: xm
      } = (0, SA.A)(), wm = qE(Am), {
        explained: Dm,
        hinting: im,
        explain: Rm,
        explainOnce: pm
      } = aE("baf2RxExplained"), Em = (0, hm.useCallback)(((mm, Tm) => {
        Rm(xm(mm, Tm))
      }), [Rm, xm]), om = (0, hm.useCallback)(((mm, Tm) => {
        pm(mm, xm(mm, Tm))
      }), [pm, xm]), [Om, Ym] = (0, hm.useState)(!1), [qm, jm] = (0, hm.useState)(!1), Vm = null === wm || void 0 === wm ? void 0 : wm.status, Im = null === Vm || void 0 === Vm ? void 0 : Vm.baf2RxAt.join(","), Km = !0 === (null === Vm || void 0 === Vm ? void 0 : Vm.baf2RxFormed);
      (0, hm.useEffect)((() => {
        jm(!1), Ym(!1)
      }), [Im, Km]), (0, hm.useEffect)((() => (Am.opened(), () => {
        Am.closed()
      })), [Am]);
      const Qm = void 0 !== Vm && Do(Vm, VT),
        nm = Vm ? Km ? VD(Vm) : null !== wm && void 0 !== wm && wm.plan ? function(mm, Tm) {
          if (mm <= 0) return "off";
          if (Tm <= 0) return "alarm";
          const fm = 100 * mm / Tm;
          return fm < 50 ? "calm" : fm < pD ? "warm" : fm <= 100 ? "hot" : "alarm"
        }(wm.plan.fuelHeat, wm.plan.cooling) : "off" : "off",
        Jm = Vm ? KD(Vm) : null,
        cm = wm ? wm.waiting ? wo : Km ? XE(wm.status) : function(mm) {
          var Tm, fm;
          const {
            status: hm
          } = mm;
          return PE({
            left: hm.baf2RxNeed.reduce(((mm, Tm) => {
              let [, fm] = Tm;
              return mm + fm
            }), 0),
            bad: hm.baf2RxBad,
            rods: null !== (Tm = null === (fm = mm.plan) || void 0 === fm ? void 0 : fm.rods) && void 0 !== Tm ? Tm : 0,
            canFill: Do(hm, qT),
            melted: Do(hm, YT),
            idle: mm.looks.reduce(((mm, Tm) => mm + (Tm === wD ? 1 : 0)), 0)
          })
        }(wm) : null,
        zm = im && null !== cm && ("ok" === cm.tone || "info" === cm.tone),
        Zm = Vm ? function(mm) {
          const Tm = 0 !== (mm.baf2RxFlags & oT),
            fm = mm.baf2RxHeat < gw;
          return 0 !== (mm.baf2RxFlags & YT) || fm && (Tm || !mm.baf2RxFormed) ? null : mm.baf2RxFormed && !Tm ? {
            key: `${jD}rxApartScram`,
            params: {}
          } : {
            key: `${jD}rxApartCooling`,
            params: {
              pct: String(gw)
            }
          }
        }(Vm) : null,
        [km, bm, Sm] = null !== (Tm = null === wm || void 0 === wm ? void 0 : wm.dims) && void 0 !== Tm ? Tm : [0, 0, 0],
        em = `${km}\xd7${bm}\xd7${Sm}`;
      return (0, ka.jsx)(Jx.d, {
        close: am,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, ka.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, ka.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, ka.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, ka.jsx)(VE, {
                mood: nm
              }), (0, ka.jsxs)("div", {
                children: [(0, ka.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: xm(`${xo}rxTitle`)
                }), wm && (0, ka.jsxs)("p", {
                  className: zA()("Baf2RxSubtitle", Km && (null === Jm || void 0 === Jm ? void 0 : Jm.tone)),
                  children: [Km && !Qm ? (0, ka.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": xm(`${xo}rxChangeSize`),
                    onClick: () => {
                      if (!Vm) return;
                      const mm = Do(Vm, oT);
                      var Tm;
                      (Tm = {
                        scram: mm,
                        heat: Vm.baf2RxHeat
                      }).scram && Tm.heat < gw ? Ym(!0) : Em(mm ? `${xo}rxResizeCooling` : `${xo}rxResizeHot`, {
                        pct: String(gw)
                      })
                    },
                    children: [em, " \u270e"]
                  }) : em, " \xb7 ", xm(Km ? null !== (fm = null === Jm || void 0 === Jm ? void 0 : Jm.label) && void 0 !== fm ? fm : `${xo}rxState_running` : `${xo}rxSubPlanShort`)]
                })]
              })]
            }), (0, ka.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [wm && !Qm && (0, ka.jsx)(jE, {
                kind: "reactor",
                busy: wm.busy.has("apart"),
                whyNot: Zm ? () => {
                  Em(Zm.key, Zm.params)
                } : null,
                apart: () => {
                  Am.tap("apart", (() => {
                    Am.send("apart")
                  }))
                }
              }), (0, ka.jsx)(cx.j, {
                onClick: am
              })]
            })]
          }), wm && cm && (0, ka.jsxs)("div", {
            className: "Baf2RxBody",
            children: [Km ? (0, ka.jsx)(Ao, {
              view: wm,
              explain: Em,
              preview: kE(wm.status)
            }) : (0, ka.jsx)(ao, {
              view: wm,
              explain: Em
            }), (0, ka.jsx)(xE, {
              text: zm ? `${NE(xm,cm)} ${xm(`${xo}rxTapHint`)}` : NE(xm, cm),
              tone: cm.tone,
              explained: Dm
            }), Qm ? (0, ka.jsxs)(ka.Fragment, {
              children: [(0, ka.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: xm(`${xo}rxNotYours`)
              }), (0, ka.jsx)(EE, {
                status: wm.status,
                store: Am,
                readOnly: !0
              })]
            }) : Km && !qm ? (0, ka.jsxs)(ka.Fragment, {
              children: [(0, ka.jsx)(ME, {
                view: wm,
                store: Am,
                explain: Em,
                explainOnce: om
              }), void 0 !== wm.status.baf2RxLayout && iE(wm.status) && (0, ka.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, ka.jsx)(EE, {
                  status: wm.status,
                  store: Am,
                  readOnly: !1,
                  bare: !0
                }), (0, ka.jsx)(pE, {
                  status: wm.status,
                  store: Am,
                  busy: wm.busy.has("fill")
                })]
              })]
            }) : (0, ka.jsxs)(ka.Fragment, {
              children: [(0, ka.jsx)(uE, {
                view: wm,
                store: Am,
                keepSize: Km ? () => {
                  jm(!1)
                } : void 0
              }), JD(wm.dims, wm.status.baf2RxDims) && (0, ka.jsx)(BE, {
                need: wm.status.baf2RxNeed,
                explain: Em
              }), (0, ka.jsx)(EE, {
                status: wm.status,
                store: Am,
                readOnly: !1
              })]
            }), Om && (0, ka.jsx)(YE, {
              id: "baf2ResizeTitle",
              title: `${xo}rxResizeConfirmTitle`,
              body: `${xo}rxResizeConfirmBody`,
              yes: `${xo}rxChangeSize`,
              cancel: () => {
                Ym(!1)
              },
              confirm: () => {
                Ym(!1), jm(!0)
              }
            })]
          })]
        })
      })
    }
    class Ro {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(mm) {
        this.view = mm;
        for (const Tm of this.listeners) Tm()
      }
      get() {
        return this.view
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
    }

    function po(mm) {
      let {
        commands: Tm,
        store: fm,
        power: Am,
        water: am,
        reactor: xm,
        battery: wm,
        collider: Dm,
        terminal: im,
        quests: Rm,
        tutorial: pm,
        close: Em,
        leave: om,
        askIslands: Om,
        showCore: Ym,
        openSocial: qm
      } = mm;
      const {
        userContext: jm
      } = (0, yw.e)(), Vm = Hw.featureFlags.useSocialFeatures && jm.isLoggedIn(), [Im, Km] = (0, hm.useState)((() => fm.get()));
      (0, hm.useEffect)((() => fm.subscribe((() => {
        Km(fm.get())
      }))), [fm]);
      const Qm = "islands" === (null === Im || void 0 === Im ? void 0 : Im.kind) ? Im.backToCore : void 0;
      return (0, ka.jsxs)(Mx.Provider, {
        value: Tm,
        children: ["core" === (null === Im || void 0 === Im ? void 0 : Im.kind) && (0, ka.jsx)(Kp, {
          view: Im.core,
          close: Em,
          askIslands: Om
        }), "dropMap" === (null === Im || void 0 === Im ? void 0 : Im.kind) && (0, ka.jsx)(cp, {
          message: Im.dropMap,
          quests: Rm,
          close: Em,
          leave: om
        }), "islands" === (null === Im || void 0 === Im ? void 0 : Im.kind) && (0, ka.jsx)(Mp, {
          message: Im.islands,
          arrivedAtMs: Im.arrivedAtMs,
          close: Qm ? () => {
            Ym(Qm)
          } : Em,
          leave: om,
          openSocial: Vm ? qm : null
        }), "quests" === (null === Im || void 0 === Im ? void 0 : Im.kind) && (0, ka.jsx)(rR, {
          store: Rm,
          tutorial: pm,
          close: Em
        }), "transfer" === (null === Im || void 0 === Im ? void 0 : Im.kind) && (0, ka.jsx)(wR, {
          message: Im.transfer,
          arrivedAtMs: Im.arrivedAtMs,
          close: Em,
          leave: om
        }), "power" === (null === Im || void 0 === Im ? void 0 : Im.kind) && (0, ka.jsx)(Gx, {
          store: Am,
          close: Em
        }), "water" === (null === Im || void 0 === Im ? void 0 : Im.kind) && (0, ka.jsx)(jw, {
          store: am,
          close: Em
        }), "reactor" === (null === Im || void 0 === Im ? void 0 : Im.kind) && (0, ka.jsx)(io, {
          store: xm,
          close: Em
        }), "battery" === (null === Im || void 0 === Im ? void 0 : Im.kind) && (0, ka.jsx)(vE, {
          store: wm,
          close: Em
        }), "collider" === (null === Im || void 0 === Im ? void 0 : Im.kind) && (0, ka.jsx)(Qi, {
          store: Dm,
          close: Em
        }), "terminal" === (null === Im || void 0 === Im ? void 0 : Im.kind) && (0, ka.jsx)(TE, {
          store: im,
          close: Em,
          send: mm => {
            Tm.send(mm)
          }
        })]
      })
    }
    var Eo = fm(38588);

    function oo(mm, Tm) {
      return mm.distSq - Tm.distSq
    }
    class Oo {
      constructor() {
        this.list = [], this.pool = []
      }
      add(mm, Tm, fm, hm) {
        let Am = this.pool[this.list.length];
        Am || (Am = {
          x: 0,
          y: 0,
          distSq: 0,
          element: Tm,
          liftRem: fm,
          dot: hm
        }, this.pool.push(Am)), Am.x = mm.x, Am.y = mm.y, Am.distSq = mm.distSq, Am.element = Tm, Am.liftRem = fm, Am.dot = hm, this.list.push(Am)
      }
    }
    class Yo {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = mm, this.sizes = new WeakMap, this.observer = new ResizeObserver((mm => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const Tm of mm) {
            const mm = Tm.borderBoxSize[0];
            "dot" !== Tm.target.dataset.crowded && 0 !== mm.inlineSize && 0 !== mm.blockSize && this.sizes.set(Tm.target, {
              width: mm.inlineSize,
              height: mm.blockSize
            })
          }
        })), this.remPx = 16, this.mO = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.zV = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.zV)
      }
      observe(mm) {
        this.observer.observe(mm)
      }
      unobserve(mm) {
        this.observer.unobserve(mm)
      }
      run(mm) {
        const Tm = mm.list;
        Tm.sort(oo);
        const fm = this.pxPerVw,
          hm = this.pxPerVh;
        this.mO.length = 0, this.hud && this.mO.push(...this.hud.boxes(performance.now()));
        for (const am of Tm) {
          var Am;
          const mm = this.sizes.get(am.element);
          let Tm = "no";
          if (mm && mm.width > 0) {
            const Am = am.x * fm,
              xm = am.y * hm - am.liftRem * this.remPx;
            this.fit(Am, xm, mm.width, mm.height) || (Tm = am.dot && this.fit(Am, xm, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Am = am.element.dataset.crowded) && void 0 !== Am ? Am : "no") !== Tm && ("no" === Tm ? delete am.element.dataset.crowded : am.element.dataset.crowded = Tm), "hidden" !== Tm && (0, Eo.d)(am.element, am.x, am.y)
        }
        Tm.length = 0
      }
      fit(mm, Tm, fm, hm) {
        const Am = mm - fm / 2,
          am = mm + fm / 2,
          xm = Tm - hm,
          wm = this.mO;
        for (let Dm = 0; Dm < wm.length; Dm += 4)
          if (Am < wm[Dm + 1] - 2 && am > wm[Dm] + 2 && xm < wm[Dm + 3] - 2 && Tm > wm[Dm + 2] + 2) return !1;
        return wm.push(Am, am, xm, Tm), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.zV)
      }
    }
    const qo = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class jo {
      constructor() {
        this.cards = qo.map((mm => document.getElementsByClassName(mm))), this.watched = qo.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(mm) {
        mm - this.refreshedAt > 1e3 && (this.refreshedAt = mm, this.stale = !0);
        for (let fm = 0; fm < this.cards.length; fm++) {
          var Tm;
          const mm = null !== (Tm = this.cards[fm][0]) && void 0 !== Tm ? Tm : null;
          mm !== this.watched[fm] && this.watch(fm, mm)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let mm = 0; mm < this.watched.length; mm++) this.watch(mm, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const mm = this.list;
        mm.length = 0;
        for (const Tm of this.watched) {
          if (!Tm || Tm.closest(".NoRoom")) continue;
          const fm = Tm.getBoundingClientRect();
          let hm = fm.top,
            Am = fm.bottom;
          if (Tm === this.watched[0] && this.hud) {
            const mm = this.hud.getBoundingClientRect();
            hm = Math.max(hm, mm.top), Am = Math.min(Am, mm.bottom)
          }
          fm.width > 0 && Am > hm && mm.push(fm.left, fm.right, hm, Am)
        }
      }
      watch(mm, Tm) {
        const fm = this.watched[mm];
        var hm, Am;
        (fm && this.sizes.unobserve(fm), this.watched[mm] = Tm, this.stale = !0, Tm && this.sizes.observe(Tm), 0 === mm) && (null === (hm = this.hud) || void 0 === hm || hm.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Am = null === Tm || void 0 === Tm ? void 0 : Tm.closest(".Baf2QuestHud")) && void 0 !== Am ? Am : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const Vo = [0, 0, 0],
      Io = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Ko(mm, Tm, fm, hm, Am, am) {
      let [xm, wm, Dm] = hm;
      const im = (xm + .5 - fm[0]) ** 2 + (wm - fm[1]) ** 2 + (Dm + .5 - fm[2]) ** 2;
      let Rm = null;
      im <= am ** 2 && (Vo[0] = xm + .5, Vo[1] = wm + Am, Vo[2] = Dm + .5, Rm = Tm.projectWorldPosToViewport(Vo));
      const pm = null !== Rm && Rm.x > -5 && Rm.x < 105 && Rm.y > -5 && Rm.y < 105;
      return (0, Eo.e)(mm, !pm), pm ? (Io.x = Rm.x, Io.y = Rm.y, Io.distSq = im, Io) : null
    }
    class Qo {
      constructor(mm) {
        this.onElement = mm, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(mm) {
        const Tm = [];
        for (let fm = 0; fm + 4 < mm.length; fm += 5) {
          const hm = [mm[fm], mm[fm + 1], mm[fm + 2]];
          Tm.push({
            key: hm.join(","),
            pos: hm,
            status: xA[mm[fm + 3]],
            kind: bT[mm[fm + 4]]
          })
        }
        this.markers = Tm, this.keys = new Set(Tm.map((mm => {
          let {
            key: Tm
          } = mm;
          return Tm
        }))), this.notify()
      }
      covers(mm) {
        return this.keys.has(mm)
      }
      get() {
        return this.markers
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      bind(mm) {
        let Tm = this.refs.get(mm);
        return Tm || (Tm = Tm => {
          const fm = this.elements.get(mm);
          var hm, Am;
          fm && (null === (hm = this.onElement) || void 0 === hm || hm.call(this, fm, !1));
          Tm ? (this.elements.set(mm, Tm), null === (Am = this.onElement) || void 0 === Am || Am.call(this, Tm, !0)) : (this.elements.delete(mm), this.refs.delete(mm))
        }, this.refs.set(mm, Tm)), Tm
      }
      onAfterRender(mm, Tm, fm) {
        for (const hm of this.markers) {
          const Am = this.elements.get(hm.key);
          if (!Am) continue;
          const am = Ko(Am, mm, Tm, hm.pos, 1.05, 24);
          am && fm.add(am, Am, .45, !0)
        }
      }
      notify() {
        for (const mm of this.listeners) mm()
      }
    }
    const no = {
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
    const Jo = (0, hm.memo)((function(mm) {
        let {
          status: Tm,
          kind: fm,
          bindRef: hm
        } = mm;
        const {
          t: Am
        } = (0, SA.A)(), am = function(mm, Tm) {
          var fm;
          if ("noFuel" === mm) {
            var hm, Am;
            const mm = null === (hm = PT[Tm]) || void 0 === hm || null === (Am = hm.fuels) || void 0 === Am ? void 0 : Am.find((mm => Af.includes(mm)));
            return null !== mm && void 0 !== mm ? mm : no.noFuel
          }
          return void 0 !== (null === (fm = PT[Tm]) || void 0 === fm ? void 0 : fm.cryoMade) ? "noOutlet" === mm ? "Fluid Pipe" : "noInput" === mm ? "Biomass" : no[mm] : no[mm]
        }(Tm, fm);
        return (0, ka.jsxs)("div", {
          className: zA()("Baf2StallMarker", Tm),
          ref: hm,
          hidden: !0,
          children: [am && (0, ka.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, ka.jsx)(NA.d, {
              itemName: am,
              amount: 0
            })
          }), (0, ka.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === Tm ? "?" : "!"
          }), (0, ka.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Am(`buildAFactory2Game:stallTag_${Tm}`)
          })]
        })
      })),
      co = (0, hm.memo)((function(mm) {
        let {
          controller: Tm
        } = mm;
        const [fm, Am] = (0, hm.useState)((() => Tm.get()));
        return (0, hm.useEffect)((() => (Am(Tm.get()), Tm.subscribe((() => {
          Am(Tm.get())
        })))), [Tm]), (0, ka.jsx)("div", {
          className: "Baf2StallMarkers",
          children: fm.map((mm => (0, ka.jsx)(Jo, {
            status: mm.status,
            kind: mm.kind,
            bindRef: Tm.bind(mm.key)
          }, mm.key)))
        })
      })),
      zo = jf.k + 150;
    class Zo {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(mm, Tm) {
        const fm = Tm - mm;
        null === this.offset || fm < this.offset ? this.offset = fm : this.offset = Math.min(fm, this.offset + .02 * (Tm - this.sampledAt)), this.sampledAt = Tm
      }
      toLocal(mm) {
        var Tm;
        return mm + (null !== (Tm = this.offset) && void 0 !== Tm ? Tm : 0) + zo
      }
    }
    var ko = fm(38597);
    const bo = 15 * Math.PI / 180,
      So = Math.SQRT2,
      eo = [4, 2];

    function No(mm, Tm) {
      const fm = [1 / 0, 1 / 0, 1 / 0],
        hm = [-1 / 0, -1 / 0, -1 / 0];
      for (const Dm of mm)
        for (let mm = 0; mm < 3; mm++) fm[mm] = Math.min(fm[mm], Dm[mm]), hm[mm] = Math.max(hm[mm], Dm[mm]);
      const Am = (fm[0] + hm[0]) / 2,
        am = (fm[1] + hm[1]) / 2,
        xm = (fm[2] + hm[2]) / 2;
      let wm = 0;
      for (const Dm of mm) wm = Math.max(wm, Math.hypot(Dm[0] - Am, Dm[1] - am, Dm[2] - xm));
      return {
        x: Am,
        y: am,
        z: xm,
        r: wm + Tm
      }
    }

    function Go(mm, Tm, fm) {
      const hm = Tm.x - mm.x,
        Am = Tm.y - mm.y,
        am = Tm.z - mm.z,
        xm = Math.sqrt(hm * hm + Am * Am + am * am);
      if (xm <= Tm.r + 8) return 1;
      const wm = Tm.r / xm,
        Dm = Math.sqrt(1 - wm * wm),
        im = Dm < -mm.cosHalf,
        Rm = (hm * mm.dx + Am * mm.dy + am * mm.dz) / xm;
      if (!im && Rm < mm.cosHalf * Dm - mm.sinHalf * wm) return 0;
      const pm = fm * So * mm.frameMs * mm.pxPerBlock / (xm - Tm.r);
      for (let Em = 0; Em < eo.length; Em++)
        if (pm * eo[Em] <= 1) return eo[Em];
      return 1
    }

    function Xo(mm, Tm) {
      return {
        name: mm,
        at: Tm,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Po = [0, 0, 0];

    function Ho(mm, Tm, fm) {
      let [, hm, Am, am, xm, wm] = Tm;
      const Dm = jf.f * (null !== xm && void 0 !== xm ? xm : 1),
        im = [];
      for (let om = 0; om < hm.length; om += 3) im.push([hm[om] + .5, hm[om + 1] + .65, hm[om + 2] + .5]);
      const Rm = [];
      for (let om = 0; om < im.length - 1; om++) {
        const [mm, Tm] = [im[om], im[om + 1]];
        Rm.push([(mm[0] + Tm[0]) / 2, (mm[1] + Tm[1]) / 2, (mm[2] + Tm[2]) / 2])
      }
      const pm = im.slice(1, -1),
        Em = new Uint8Array(pm.length);
      for (const om of null !== wm && void 0 !== wm ? wm : []) Em[om >> 1] |= 1 & om ? 2 : 1;
      return {
        island: mm,
        length: pm.length,
        loop: am,
        cellsPerMs: Dm,
        edges: Rm,
        ci: pm,
        bounds: No([...Rm, ...pm], .3),
        changed: !0,
        culled: !1,
        hide: Em,
        items: Am.map((mm => {
          let [Tm, hm] = mm;
          return Xo(Tm, (0, jf.z)(Tm, hm, fm, Dm).at)
        }))
      }
    }

    function yo(mm, Tm) {
      const {
        items: fm
      } = mm;
      if (0 === fm.length) return;
      const hm = mm.length / mm.cellsPerMs,
        Am = Math.floor((Tm - fm[0].at) / hm) - 1;
      if (Am > 0)
        for (const am of fm) am.at += Am * hm
    }

    function Co(mm, Tm) {
      const fm = Math.min(Math.floor(Tm), mm.length - 1),
        hm = mm.hide[fm];
      return 0 !== hm && 0 !== (hm & (Tm - fm < .5 ? 1 : 2))
    }

    function ro(mm, Tm) {
      const fm = Math.min(Math.floor(Tm), mm.length - 1),
        hm = Tm - fm,
        Am = hm < .5,
        am = Am ? mm.edges[fm] : mm.ci[fm],
        xm = Am ? mm.ci[fm] : mm.edges[fm + 1],
        wm = Am ? 2 * hm : 2 * hm - 1;
      Po[0] = am[0] + (xm[0] - am[0]) * wm, Po[1] = am[1] + (xm[1] - am[1]) * wm, Po[2] = am[2] + (xm[2] - am[2]) * wm
    }
    const so = Math.PI / 4;
    class Mo {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Zo, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.zV = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(mm) {
        const Tm = performance.now();
        this.clock.sample(mm.baf2BeltLinesAt, Tm), this.queue(mm.baf2BeltLinesAt, mm, 0, null, null, 0), this.applyDue(Tm)
      }
      onMoves(mm) {
        const Tm = performance.now(),
          fm = mm.baf2BeltMovesAt;
        this.clock.sample(fm, Tm);
        for (const [hm, Am, am, xm] of mm.baf2BeltMoveList) null === Am ? this.queue(fm - am, null, hm, null, null, null !== xm && void 0 !== xm ? xm : 0) : this.queue(fm - am, null, hm, Am, null !== xm && void 0 !== xm ? xm : null, 0);
        this.applyDue(Tm)
      }
      start(mm) {
        this.pool = new ko.c(mm, {
          scale: .3,
          yaw: so
        }, 64), this.zV(), window.addEventListener("resize", this.zV)
      }
      onAfterRender(mm) {
        const {
          pool: Tm
        } = this;
        if (!Tm) return;
        const fm = performance.now(),
          hm = fm - this.lastRenderAt;
        this.lastRenderAt = fm, hm < 100 && (this.frameMs += .1 * (hm - this.frameMs));
        const Am = fm + this.frameMs;
        this.applyDue(Am);
        const am = mm.cameraPosition,
          xm = Tm.follow(am);
        this.setView(mm, am);
        const wm = this.frame++;
        for (let Dm = 0; Dm < this.shown.length; Dm++) {
          const mm = this.shown[Dm],
            fm = Go(this.view, mm.bounds, mm.cellsPerMs),
            hm = mm.culled && 0 !== fm;
          if (mm.culled = 0 === fm, !xm && !mm.changed && !hm && (0 === fm || (wm + Dm) % fm !== 0)) continue;
          mm.changed = !1, mm.loop && (yo(mm, Am), (0, jf.t)(mm.items, mm.length, Am, mm.cellsPerMs));
          let am = mm.length;
          for (let wm = 0; wm < mm.items.length; wm++) {
            const fm = mm.items[wm],
              hm = (0, jf.B)(fm.at, am, Am, mm.cellsPerMs);
            if (am = hm - jf.n, Co(mm, hm)) {
              null === fm.kind || fm.hidden || (fm.kind.hide(fm.slot), fm.hidden = !0);
              continue
            }
            let Dm = fm.kind;
            if (null === Dm) {
              if (Dm = Tm.kindOf(fm.name), null === Dm) continue;
              fm.kind = Dm, fm.slot = Dm.take(), fm.hidden = !0, fm.drawn = NaN
            } else if (hm === fm.drawn && !fm.hidden && !xm) continue;
            ro(mm, hm), Dm.write(fm.slot, Po[0], Po[1], Po[2]), fm.hidden = !1, fm.drawn = hm
          }
        }
        Tm.commit()
      }
      dispose() {
        var mm;
        window.removeEventListener("resize", this.zV), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (mm = this.pool) || void 0 === mm || mm.dispose(), this.pool = null
      }
      setView(mm, Tm) {
        const {
          cameraDir: fm,
          lastDir: hm
        } = this, Am = mm.cameraDirection;
        for (let Rm = 0; Rm < 3; Rm++) hm[Rm] = fm[Rm], fm[Rm] = Am[Rm];
        const am = fm[0] * hm[0] + fm[1] * hm[1] + fm[2] * hm[2],
          xm = Number.isNaN(am) ? 0 : Math.acos(Math.min(1, Math.max(-1, am))),
          {
            width: wm,
            height: Dm
          } = this,
          im = mm.tanHalfFovX;
        ! function(mm, Tm, fm, hm, Am, am, xm) {
          let wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          mm.x = Tm[0], mm.y = Tm[1], mm.z = Tm[2], mm.dx = fm[0], mm.dy = fm[1], mm.dz = fm[2];
          const Dm = Math.min(Math.PI, Math.atan(Math.sqrt(hm * hm + Am * Am)) + bo + wm);
          mm.cosHalf = Math.cos(Dm), mm.sinHalf = Math.sin(Dm), mm.pxPerBlock = am / (2 * Am), mm.frameMs = xm
        }(this.view, Tm, fm, im, im * Dm / wm, Dm * window.devicePixelRatio, this.frameMs, xm)
      }
      queue(mm, Tm, fm, hm, Am, am) {
        const xm = Math.max(this.clock.toLocal(mm), this.lastPendingAt);
        this.lastPendingAt = xm, this.pending.push({
          at: xm,
          lines: Tm,
          line: fm,
          name: hm,
          pos: Am,
          idx: am
        })
      }
      applyDue(mm) {
        const {
          pending: Tm
        } = this;
        for (; this.pendingHead < Tm.length && Tm[this.pendingHead].at <= mm;) {
          const mm = Tm[this.pendingHead++];
          if (mm.lines) this.applyLines(mm.lines, mm.at), mm.lines = null;
          else {
            const Tm = this.lines.get(mm.line);
            Tm && this.applyMove(Tm, mm, mm.at)
          }
        }
        this.pendingHead === Tm.length ? (Tm.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > Tm.length && (Tm.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(mm, Tm) {
        this.clearIsland(mm.baf2BeltIsland);
        for (const fm of mm.baf2BeltLineList) this.lines.set(fm[0], Ho(mm.baf2BeltIsland, fm, Tm));
        this.shown = [...this.lines.values()]
      }
      applyMove(mm, Tm, fm) {
        let {
          name: hm,
          pos: Am,
          idx: am
        } = Tm;
        mm.changed = !0, mm.loop && (yo(mm, fm), (0, jf.t)(mm.items, mm.length, fm, mm.cellsPerMs)), null !== hm && null !== Am ? (0, jf.v)(mm.items, mm.length, Xo(hm, fm), Am, fm, mm.cellsPerMs) : null !== hm ? mm.items.push(Xo(hm, fm)) : mm.items.length > am && this.release((0, jf.E)(mm.items, mm.length, fm, mm.cellsPerMs, am))
      }
      clearIsland(mm) {
        for (const [Tm, fm] of this.lines)
          if (fm.island === mm) {
            for (const mm of fm.items) this.release(mm);
            this.lines.delete(Tm)
          }
      }
      release(mm) {
        null !== mm.kind && (mm.kind.release(mm.slot), mm.kind = null, mm.slot = -1, mm.hidden = !0, mm.drawn = NaN)
      }
    }
    var uo = fm(36681),
      Bo = fm(38609);

    function Lo(mm) {
      let {
        depth: Tm,
        store: fm,
        t: Am
      } = mm;
      const am = function(mm) {
        const [Tm, fm] = (0, hm.useState)(mm.lastPlayerY());
        return (0, DR.g)(rA, fm), (0, hm.useEffect)((() => {
          fm(mm.lastPlayerY())
        }), [mm]), Tm
      }(fm);
      if (null === am) return null;
      const [xm, wm] = Tm, Dm = am > xm ? xm : null !== wm && am < wm ? wm : null, im = {
        y: na(am),
        target: null === Dm ? "" : na(Dm)
      };
      return (0, ka.jsx)("span", {
        className: zA()("Baf2QuestDepth", {
          Reached: null === Dm
        }),
        children: Am(`${ER}${null===Dm?"questDepthReached":"questDepth"}`, im)
      })
    }

    function vo(mm) {
      let {
        also: Tm,
        view: fm,
        t: hm
      } = mm;
      return (0, ka.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, ka.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, ka.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, ka.jsx)("strong", {
            children: hm(`${ER}questAlsoDownHere`)
          }), (0, ka.jsx)("span", {
            className: "Baf2QuestChips",
            children: Tm.map((mm => {
              let [Tm, Am, am, xm] = mm;
              return (0, ka.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": hm(`${ER}questAlsoItem`, {
                  item: OR(hm, fm.itemNames[Tm], Tm),
                  have: String(Am),
                  need: String(am)
                }),
                children: [(0, ka.jsx)(jR, {
                  item: Tm
                }), (0, ka.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Am}/${am}`
                }), null !== xm && (0, ka.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: hm(`${ER}questAlsoDepth`, {
                    y: na(xm)
                  })
                })]
              }, Tm)
            }))
          })]
        })]
      })
    }
    var to = fm(3413);

    function Uo(mm) {
      let {
        expanded: Tm,
        inventoryOpen: fm,
        children: Am
      } = mm;
      const am = (0, hm.useRef)(null);
      return (0, hm.useEffect)((() => {
        const mm = am.current,
          Tm = null === mm || void 0 === mm ? void 0 : mm.closest(".RightElements"),
          hm = null === mm || void 0 === mm ? void 0 : mm.firstElementChild;
        if (!mm || !Tm || !hm) return;
        return (0, Bo.e)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [Tm, hm], (() => {
          const Am = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Am.length) return;
          const am = Math.max(...Am.map((mm => mm.getBoundingClientRect().bottom))),
            xm = Tm.getBoundingClientRect(),
            wm = fm ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (wm) {
            const Tm = parseFloat(getComputedStyle(hm).marginLeft) + parseFloat(getComputedStyle(hm).marginRight),
              fm = xm.right - wm.getBoundingClientRect().right - 8 - Tm;
            mm.style.setProperty("--baf2-quest-room", `${fm}px`), mm.classList.toggle("NoRoom", fm < 150)
          } else mm.style.removeProperty("--baf2-quest-room"), mm.classList.remove("NoRoom");
          const Dm = am - xm.top + 8,
            im = function(mm, Tm, fm) {
              const hm = Tm.getBoundingClientRect(),
                Am = mm.getBoundingClientRect(),
                am = (0, to.f)(Am.left, Am.right, hm.top + fm);
              if (null !== am && am < hm.bottom) return am - hm.top;
              return hm.height - (parseFloat(getComputedStyle(Tm).paddingBottom) || 0)
            }(mm, Tm, Dm) - 8,
            Rm = window.innerHeight / 2 - xm.top,
            {
              top: pm,
              maxHeight: Em
            } = function(mm, Tm, fm, hm, Am) {
              const am = Math.min(fm, Math.max(0, Tm - mm)),
                xm = Am ? mm : Math.max(mm, Math.min(hm - am / 2, Tm - am));
              return {
                top: xm,
                maxHeight: Math.max(0, Tm - xm)
              }
            }(Dm, im, function(mm) {
              const Tm = mm.firstElementChild,
                fm = Tm ? Tm.scrollHeight - Tm.clientHeight : 0;
              return mm.getBoundingClientRect().height + Math.max(0, fm)
            }(hm), Rm, Za());
          mm.style.top = `${pm}px`, mm.style.maxHeight = `${Em}px`
        }))
      }), [fm]), (0, ka.jsx)("div", {
        ref: am,
        className: zA()("Baf2QuestHud", {
          Expanded: Tm
        }),
        children: Am
      })
    }

    function go(mm) {
      let {
        amount: Tm,
        t: fm
      } = mm;
      return (0, ka.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, ka.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, ka.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: fm(`${ER}questStepsDone`, {
            amount: String(Tm)
          })
        })]
      })
    }

    function Wo(mm) {
      let {
        pulse: Tm
      } = mm;
      return 0 === Tm ? null : (0, ka.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, Tm)
    }

    function Fo(mm) {
      var Tm;
      let {
        store: fm
      } = mm;
      const Am = (0, DR.i)(CA, fm.get()),
        [am, xm] = (0, hm.useState)(!1),
        {
          t: wm
        } = (0, SA.A)(),
        Dm = (0, ca.g)(za),
        {
          openInGameMenuName: im,
          openEverythingMenuName: Rm
        } = (0, nA.m)(["openInGameMenuName", "openEverythingMenuName"]),
        pm = "inventory" === im && null === Rm,
        Em = null !== im && !pm || null !== Rm;
      if (! function(mm) {
          return null !== mm.name || null !== mm.side
        }(Am) || Em || "off" === Am.tutorial) return null;
      const om = LA(Am.rows),
        Om = om.filter((mm => mm.done)).length,
        Ym = function(mm, Tm) {
          const fm = UA(mm);
          let hm = 0;
          return mm.filter(((mm, Am) => !!mm.justFinished || !(mm.done || Am < fm || hm > Tm) && (hm++, !0)))
        }(Am.rows, Dm ? 0 : 2),
        qm = Dm ? Ym : function(mm, Tm) {
          const fm = Tm.filter((mm => !mm.justFinished));
          if (fm.length < 2) return [...Tm];
          const hm = mm.indexOf(fm[0]),
            Am = mm.indexOf(fm[fm.length - 1]),
            am = new Set(LA(mm));
          return mm.filter(((mm, fm) => Tm.includes(mm) || mm.done && am.has(mm) && fm > hm && fm < Am))
        }(Am.rows, Ym),
        jm = am ? Am.rows : qm,
        Vm = am || Dm ? [] : function(mm, Tm) {
          const fm = new Array(Tm.length + 1).fill(0),
            hm = new Set(LA(mm));
          let Am = 0;
          for (const am of mm) Am < Tm.length && am === Tm[Am] ? Am++ : am.done && hm.has(am) && fm[Am]++;
          return fm
        }(Am.rows, qm),
        Im = am || qm.length < Am.rows.length || null !== Am.reward,
        Km = BA(Am),
        Qm = Km ? wm(`${ER}questLineComplete`) : Am.tier ? KR(wm, Am.tier) : wm(`${ER}currentQuest`),
        nm = function(mm) {
          var Tm, fm;
          if (BA(mm)) return null;
          const hm = null === (Tm = mm.chapters) || void 0 === Tm ? void 0 : Tm.find((Tm => {
            let [fm] = Tm;
            return fm === mm.tier
          }));
          if (!hm) return null;
          const Am = hm[1].filter((mm => !mm[4]));
          if (0 === Am.length) return null;
          const am = null === (fm = mm.name) || void 0 === fm ? void 0 : fm[0],
            xm = mm => Am.findIndex((Tm => Tm[0] === am && (!mm || !Tm[3]))),
            wm = xm(!0),
            Dm = wm >= 0 ? wm : xm(!1);
          if (Dm >= 0) return [Dm + 1, Am.length];
          const im = Am.filter((mm => mm[3])).length;
          return [Math.min(im + 1, Am.length), Am.length]
        }(Am);
      return (0, ka.jsx)(uo.e, {
        placement: "topRight",
        children: (0, ka.jsx)(Uo, {
          expanded: am,
          inventoryOpen: pm,
          children: (0, ka.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: oR,
            children: [null !== Am.name && (0, ka.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, ka.jsx)(Wo, {
                pulse: Am.pulse
              }), (0, ka.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, ka.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [Qm, nm && (0, ka.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": wm(`${ER}questPlaceLabel`, {
                      n: String(nm[0]),
                      total: String(nm[1])
                    }),
                    children: wm(`${ER}questPlace`, {
                      n: String(nm[0]),
                      total: String(nm[1])
                    })
                  }), Am.tier && Am.core && !Km && (0, ka.jsx)(QR, {
                    core: Am.core,
                    t: wm
                  })]
                })
              }), (0, ka.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: wm(`${ER}${Am.name[0]}`, YR(Am.name[1]))
              }), (om.length > 1 || Im) && (0, ka.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [om.length > 1 && (0, ka.jsx)(nR, {
                  rows: om,
                  t: wm
                }), Im && (0, ka.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": am,
                  onClick: () => {
                    xm(!am)
                  },
                  children: [(0, ka.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: wm(`${ER}questStepsToggle`, {
                      done: String(Om),
                      total: String(om.length)
                    })
                  }), (0, ka.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: am ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, ka.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [jm.map(((mm, Tm) => {
                  var am;
                  const xm = mm.current && Am.depth;
                  return (0, ka.jsxs)(hm.Fragment, {
                    children: [(null !== (am = Vm[Tm]) && void 0 !== am ? am : 0) > 0 && (0, ka.jsx)(go, {
                      amount: Vm[Tm],
                      t: wm
                    }), (0, ka.jsx)(JR, {
                      row: mm,
                      view: Am,
                      t: wm,
                      extra: xm && (0, ka.jsx)(Lo, {
                        depth: xm,
                        store: fm,
                        t: wm
                      })
                    })]
                  }, mm.id)
                })), (null !== (Tm = Vm[jm.length]) && void 0 !== Tm ? Tm : 0) > 0 && (0, ka.jsx)(go, {
                  amount: Vm[jm.length],
                  t: wm
                }), Am.also.length > 0 && (0, ka.jsx)(vo, {
                  also: Am.also,
                  view: Am,
                  t: wm
                })]
              }), am && Am.reward && (0, ka.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [wm(`${ER}questReward`), (0, ka.jsx)(jR, {
                  item: Am.reward
                }), OR(wm, Am.itemNames[Am.reward], Am.reward)]
              })]
            }), Am.side && (0, ka.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [MA(Am, Date.now()) && (0, ka.jsx)(Wo, {
                pulse: Am.sideCameUpAt
              }), (0, ka.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: wm(`${ER}questSide`)
              }), (0, ka.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: wm(`${ER}${Am.side.name[0]}`, YR(Am.side.name[1]))
              }), (0, ka.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, ka.jsx)(JR, {
                  row: Am.side.row,
                  view: Am,
                  t: wm
                })
              })]
            })]
          })
        })
      })
    }
    const mO = "baf2ToastView";
    class TO {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = mm, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: mm,
          holdMs: Tm
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const mm = this.dropCovered();
          mm && this.show(mm.message, mm.holdMs)
        }), 250));
        const fm = this.dropCovered();
        null !== fm && (fm.holdMs > 0 || "baf2ToastCelebrate" === fm.message.baf2ToastStyle) && "baf2ToastCelebrate" !== mm.baf2ToastStyle && this.show(fm.message, fm.holdMs);
        const hm = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== mm.baf2ToastStyle && hm > 0) return this.pending = {
          message: mm,
          holdMs: Tm
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const mm = this.pending;
          this.pending = null, mm && this.present(mm.message, mm.holdMs)
        }), hm));
        this.present(mm, Tm)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(mm, Tm) {
        this.clearTimers(), this.pending = null;
        const fm = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: mm.baf2ToastText,
          style: mm.baf2ToastStyle,
          swapped: fm,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === mm.baf2ToastStyle ? 1500 : Tm), this.gp();
        const hm = Math.min(8e3, Math.max(1e3, mm.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), hm)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.gp(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.gp()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const mm = this.covering;
        return this.covering = null, mm
      }
      gp() {
        HA.j.gp(mO, this.view, !0)
      }
    }
    var fO = fm(77);
    const hO = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function AO(mm) {
      let {
        store: Tm
      } = mm;
      const fm = (0, DR.i)(mO, Tm.get()),
        {
          openInGameMenuName: hm,
          openEverythingMenuName: Am
        } = (0, nA.m)(["openInGameMenuName", "openEverythingMenuName"]),
        am = fm && (0, ka.jsxs)("div", {
          className: zA()("Baf2Toast", hO[fm.style], {
            Swapped: fm.swapped,
            Leaving: fm.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === fm.style && (0, ka.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, ka.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, ka.jsx)(GA.b, {
              text: fm.text
            })
          })]
        }, fm.id);
      return null !== hm && null === Am ? (0, fO.createPortal)((0, ka.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: am
      }), document.body) : (0, ka.jsx)(uo.e, {
        children: am
      })
    }
    const aO = "baf2AreaView";
    class xO {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.ni = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.ni = null
      }
      arrive(mm, Tm) {
        Tm && function(mm) {
          return "home" === mm.baf2AreaPlace && void 0 !== mm.baf2AreaNameText
        }(mm) ? this.ni = mm : this.show(mm)
      }
      release() {
        const mm = this.ni;
        null !== mm && this.show(mm)
      }
      show(mm) {
        this.clearTimer(), this.ni = null;
        const Tm = void 0 === mm.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: mm,
          ms: Tm
        }, this.gp(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.gp()
        }), Tm)
      }
      dispose() {
        this.clearTimer(), this.ni = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      gp() {
        HA.j.gp(aO, this.view, !0)
      }
    }

    function wO(mm) {
      var Tm;
      let {
        store: fm
      } = mm;
      const {
        t: hm
      } = (0, SA.A)(), Am = (0, DR.i)(aO, fm.get());
      if (!Am) return null;
      const {
        area: am
      } = Am, xm = am.baf2AreaResetMinutes;
      return (0, ka.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": am.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Am.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, ka.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), am.baf2AreaHeading && (0, ka.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: hm(am.baf2AreaHeading)
        }), (0, ka.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (Tm = am.baf2AreaNameText) && void 0 !== Tm ? Tm : hm(am.baf2AreaName)
        }), am.baf2AreaNote && (0, ka.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: hm(am.baf2AreaNote)
        }), void 0 !== xm && (0, ka.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: hm("buildAFactory2Game:areaWildsReset", {
            time: Ja(hm, 60 * xm)
          })
        })]
      }, Am.id)
    }
    const DO = "baf2GearGauge";
    class iO {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      lV(mm) {
        var Tm;
        if (this.clearLinger(), null === mm.gearPowerKind) return void this.set(null);
        const fm = "jetpack" === mm.gearPowerKind && (hm = mm.gearChargeState, Am = mm.gearCharge, "flying" === hm || "charging" === hm || "outOfCharge" === hm || "ceiling" === hm || "offPlot" === hm || "noPower" === hm && Am <= 0);
        var hm, Am;
        const am = !0 === (null === (Tm = this.view) || void 0 === Tm ? void 0 : Tm.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          xm = fm || "jetpack" === mm.gearPowerKind && am;
        this.set({
          gauge: mm,
          jetShown: xm
        }), xm && !fm && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(mm) {
        this.view = mm, HA.j.gp(DO, mm, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const RO = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function pO(mm) {
      let {
        store: Tm
      } = mm;
      const fm = (0, DR.i)(DO, Tm.get());
      return fm ? "jetpack" === fm.gauge.gearPowerKind ? (0, ka.jsx)(EO, {
        view: fm
      }) : (0, ka.jsx)(oO, {
        gauge: fm.gauge
      }) : null
    }

    function EO(mm) {
      let {
        view: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)(), {
        gauge: hm
      } = Tm, Am = hm.gearChargeMax > 0 ? Math.max(0, Math.min(1, hm.gearCharge / hm.gearChargeMax)) : 0, am = RO[hm.gearChargeState], xm = am ? fm(am) : null;
      return (0, ka.jsxs)("div", {
        className: zA()("Baf2JetArc", {
          Shown: Tm.jetShown,
          Low: Am < .2,
          Warm: Am >= .2 && Am < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Am)
        },
        "aria-hidden": !Tm.jetShown,
        children: [(0, ka.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, ka.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: OO,
            pathLength: 100
          }), (0, ka.jsx)("path", {
            className: "Baf2JetArcFill",
            d: OO,
            pathLength: 100
          })]
        }), (0, ka.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Am), "%"]
        }), xm && (0, ka.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: xm
        })]
      })
    }

    function oO(mm) {
      let {
        gauge: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)(), hm = function(mm, Tm) {
        switch (Tm.gearPowerKind) {
          case "skyPack":
            return mm("buildAFactory2Game:gearSkyPack", {
              charge: Tm.gearCharge,
              max: Tm.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return mm("buildAFactory2Game:gearIslandDraw", {
              power: Wm(Tm.gearIslandPower),
              cost: Wm(Tm.gearCostPerUse)
            });
          case "barrier":
            return mm("buildAFactory2Game:gearBarrier", {
              shield: Math.round(Tm.gearCharge),
              max: Tm.gearChargeMax,
              power: Wm(Tm.gearIslandPower)
            });
          default:
            return null
        }
      }(fm, Tm);
      return null === hm ? null : (0, ka.jsx)(uo.e, {
        children: (0, ka.jsx)("div", {
          className: zA()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === Tm.gearChargeState || "outOfCharge" === Tm.gearChargeState
          }),
          role: "status",
          children: hm
        })
      })
    }
    const OO = (() => {
      const mm = mm => {
        const Tm = mm * Math.PI / 180;
        return `${(40*Math.cos(Tm)).toFixed(2)} ${(40*Math.sin(Tm)).toFixed(2)}`
      };
      return `M ${mm(160)} A 40 40 0 1 1 ${mm(380)}`
    })();
    class YO {
      constructor(mm) {
        this.onElement = mm, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      lV(mm) {
        let Tm = mm.baf2LabelsReset || mm.baf2LabelsIsland !== this.island;
        Tm && (this.labels.clear(), this.island = mm.baf2LabelsIsland);
        for (const [fm, hm, Am, am, xm] of mm.baf2LabelsList) {
          const mm = `${fm},${hm},${Am}`,
            wm = this.labels.get(mm);
          null === am ? Tm = this.labels.delete(mm) || Tm : wm && wm.item === am && (wm.count === xm || wm.count >= 0 && xm >= 0) ? wm.count !== xm && (wm.count = xm, this.writeCount(mm, xm)) : (this.labels.set(mm, {
            key: mm,
            pos: [fm, hm, Am],
            item: am,
            count: xm
          }), this.writeCount(mm, xm), Tm = !0)
        }
        if (this.changes++, Tm) {
          this.snapshot = [...this.labels.values()];
          for (const mm of this.listeners) mm()
        }
      }
      bindCount(mm) {
        const Tm = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${mm}`;
        let fm = this.countRefs.get(Tm);
        return fm || (fm = fm => {
          var hm, Am;
          fm ? (this.countElements.set(Tm, fm), this.writeCount(mm, null !== (hm = null === (Am = this.labels.get(mm)) || void 0 === Am ? void 0 : Am.count) && void 0 !== hm ? hm : -1)) : (this.countElements.delete(Tm), this.countRefs.delete(Tm))
        }, this.countRefs.set(Tm, fm)), fm
      }
      setCountWords(mm) {
        this.countWords = mm;
        for (const [Tm, fm] of this.labels) this.writePart(`words|${Tm}`, mm(fm.count), fm.count)
      }
      writeCount(mm, Tm) {
        this.writePart(`bare|${mm}`, Qa(Tm), Tm), this.countElements.has(`words|${mm}`) && this.writePart(`words|${mm}`, this.countWords(Tm), Tm)
      }
      writePart(mm, Tm, fm) {
        const hm = this.countElements.get(mm);
        if (!hm || fm < 0) return;
        const Am = hm.firstChild;
        Am && 3 === Am.nodeType && !Am.nextSibling ? Am.nodeValue !== Tm && (Am.nodeValue = Tm) : hm.textContent !== Tm && (hm.textContent = Tm)
      }
      list() {
        return this.snapshot
      }
      at(mm) {
        return this.labels.get(`${mm[0]},${mm[1]},${mm[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      bind(mm) {
        let Tm = this.refs.get(mm);
        return Tm || (Tm = Tm => {
          const fm = this.elements.get(mm);
          var hm, Am;
          fm && (null === (hm = this.onElement) || void 0 === hm || hm.call(this, fm, !1));
          Tm ? (this.elements.set(mm, Tm), null === (Am = this.onElement) || void 0 === Am || Am.call(this, Tm, !0)) : (this.elements.delete(mm), this.refs.delete(mm))
        }, this.refs.set(mm, Tm)), Tm
      }
      onAfterRender(mm, Tm, fm, hm) {
        for (const Am of this.snapshot) {
          const am = this.elements.get(Am.key);
          if (!am) continue;
          if (hm(Am.key)) {
            (0, Eo.e)(am, !0);
            continue
          }
          const xm = Ko(am, mm, Tm, Am.pos, 1.1, 24);
          xm && fm.add(xm, am, 0, !1)
        }
      }
    }
    const qO = (0, hm.memo)((function(mm) {
        let {
          item: Tm
        } = mm;
        return (0, ka.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, ka.jsx)(NA.d, {
            itemName: Tm,
            amount: 0
          })
        })
      })),
      jO = (0, hm.memo)((function(mm) {
        let {
          label: Tm,
          bindRef: fm,
          countRef: hm,
          wordsRef: Am
        } = mm;
        return (0, ka.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: fm,
          hidden: !0,
          children: [(0, ka.jsx)(qO, {
            item: Tm.item
          }), Tm.count >= 0 && (0, ka.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, ka.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Am
            }), (0, ka.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: hm
            })]
          })]
        })
      })),
      VO = (0, hm.memo)((function(mm) {
        let {
          store: Tm
        } = mm;
        const {
          t: fm
        } = (0, SA.A)(), [Am, am] = (0, hm.useState)((() => Tm.list()));
        return (0, hm.useEffect)((() => (am(Tm.list()), Tm.subscribe((() => {
          am(Tm.list())
        })))), [Tm]), (0, hm.useEffect)((() => {
          Tm.setCountWords((mm => fm("buildAFactory2Game:labelSiloCount", {
            count: Qa(mm)
          })))
        }), [Tm, fm]), (0, ka.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Am.map((mm => -2 === mm.count ? null : (0, ka.jsx)(jO, {
            label: mm,
            bindRef: Tm.bind(mm.key),
            countRef: Tm.bindCount(mm.key),
            wordsRef: Tm.bindCount(mm.key, "words")
          }, mm.key)))
        })
      })),
      IO = {
        read: () => !0,
        write: () => {}
      };

    function KO(mm) {
      return `${mm[0]},${mm[1]},${mm[2]}`
    }

    function QO(mm) {
      let [Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em] = mm;
      const om = void 0 === pm || void 0 === Em ? function(mm) {
        return [Math.floor((mm - 1) / 2), 0]
      }(am) : [pm, Em];
      return {
        kind: 0 === Dm ? "reactor" : "battery",
        box: Lf([Tm, fm, hm], Am, am, xm, wm, om),
        formed: 1 === im,
        level: Rm
      }
    }
    class nO {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IO;
        this.guideSetting = mm, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = mm.read()
      }
      lV(mm) {
        var Tm;
        const fm = new Map;
        for (const hm of mm.baf2RxPlanList) {
          const mm = QO(hm);
          fm.set(KO(mm.box.ctrl), mm)
        }
        this.plans = fm, this.layouts = new Map((null !== (Tm = mm.baf2RxLayouts) && void 0 !== Tm ? Tm : []).map((mm => {
          let [Tm, fm, hm, Am] = mm;
          return [KO([Tm, fm, hm]), Am]
        }))), this.predicted.clear(), mm.baf2RxFormedAt && (this.formed = {
          ctrl: mm.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const hm of [...this.startersOff]) {
          const mm = fm.get(hm);
          mm && !mm.formed || this.startersOff.delete(hm)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((mm => this.planByKey(mm)))
      }
      planAt(mm) {
        return this.planByKey(KO(mm))
      }
      predictSize(mm, Tm) {
        this.predicted.set(KO(mm), Tm), this.changed()
      }
      unpredict(mm) {
        this.predicted.delete(KO(mm)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(mm) {
        var Tm;
        const fm = KO(mm);
        return this.predicted.has(fm) ? null : null !== (Tm = this.layouts.get(fm)) && void 0 !== Tm ? Tm : null
      }
      showsStarter(mm) {
        return !this.startersOff.has(KO(mm))
      }
      setStarter(mm, Tm) {
        const fm = KO(mm);
        Tm ? this.startersOff.delete(fm) : this.startersOff.add(fm), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(mm) {
        this.guide = mm, this.guideSetting.write(mm), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(mm) {
        const Tm = this.plans.get(mm);
        if (!Tm) return null;
        const fm = this.predicted.get(mm);
        return fm ? {
          ...Tm,
          box: tf(Tm.box, Tm.kind, fm[0], fm[1], fm[2])
        } : Tm
      }
      changed() {
        this.version++;
        for (const mm of this.listeners) mm()
      }
    }
    var JO = fm(198);
    const cO = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function zO(mm, Tm, fm, hm) {
      const Am = mm.length / 3;
      for (let am = 0; am < cO.length / 3; am++) mm.push(cO[3 * am] * hm[0] / 2 + fm[0], cO[3 * am + 1] * hm[1] / 2 + fm[1], cO[3 * am + 2] * hm[2] / 2 + fm[2]);
      for (let am = Am; am < Am + 24; am += 4) Tm.push(am, am + 1, am + 2, am, am + 2, am + 3)
    }

    function ZO(mm, Tm, fm) {
      const hm = Tm[0][0],
        Am = [],
        am = [];
      for (const [xm, wm] of Tm) zO(Am, am, [xm[0] - hm[0], xm[1] - hm[1], xm[2] - hm[2]], wm);
      return mm.createGameMesh({
        positions: Am,
        indices: am
      }, fm, hm)
    }

    function kO(mm, Tm) {
      const fm = mm.w - 2,
        hm = mm.d - 2;
      return 1 === function(mm, Tm, fm, hm) {
        const [Am, am, xm] = mm;
        if (Number(Am <= 2) + Number(am <= 2) + Number(xm <= 2) >= 2) return function(mm, Tm, fm) {
          return (mm + Tm + fm) % 2 === 0 ? 1 : 3
        }(Tm, fm, hm);
        const [wm, Dm] = Am >= am && Am >= xm ? [fm, hm] : am >= xm ? [Tm, hm] : [Tm, fm];
        return wm % 2 === 0 && Dm % 2 === 0 ? 1 : 3
      }([fm, mm.h - 2, hm], Tm % fm, Math.floor(Tm / (fm * hm)), Math.floor(Tm / fm) % hm) ? "rod" : "channel"
    }

    function bO(mm, Tm, fm) {
      if ("reactor" !== mm.kind || mm.formed || !Tm) return !1;
      const hm = gf(mm.box);
      for (let Am = 0; Am < hm; Am++) {
        const mm = fm(Am);
        if (null !== mm && Gf(mm)) return !1
      }
      return !0
    }

    function SO(mm, Tm, fm, hm, Am) {
      var am;
      let xm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const wm = hh(mm.box, Tm),
        Dm = wh(mm.kind, wm, fm);
      if ("wrong" === Dm || "blocked" === Dm) return "wrong";
      if (!Am) return null;
      if ("inside" === wm && "reactor" === mm.kind && "Air" === Xf(fm)) {
        if (null !== xm) {
          var im;
          const fm = wE[DE(xm, Ah(mm.box, Tm))];
          return fm && null !== (im = bD(fm)) && void 0 !== im ? im : null
        }
        if (hm) return kO(mm.box, Ah(mm.box, Tm))
      }
      if ("missing" !== Dm) return null;
      const Rm = Dh(mm.kind, wm);
      return null === Rm ? null : null !== (am = bD(Rm)) && void 0 !== am ? am : null
    }
    const eO = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function NO(mm, Tm, fm) {
      const hm = fm => {
        const hm = Tm(Th(mm.box, fm));
        return null !== hm && function(mm, Tm) {
          return "reactor" !== mm.kind || Tm !== Ff(mm.box) && "inside" !== hh(mm.box, Tm)
        }(mm, fm) && "ok" !== wh(mm.kind, hh(mm.box, fm), hm)
      };
      if (fm) {
        const am = fh(mm.box, [Math.floor(fm[0]), Math.floor(fm[1]), Math.floor(fm[2])]);
        if (am >= 0 && (hm(am) || (Am = am, "reactor" === mm.kind && "inside" === hh(mm.box, Am) && "Air" === Tm(Th(mm.box, Am))))) return am
      }
      var Am;
      const am = gf(mm.box);
      for (let xm = 0; xm < am; xm++)
        if (hm(xm)) return xm;
      return -1
    }

    function GO(mm, Tm) {
      return Math.floor(Tm / (mm.w * mm.d))
    }

    function XO(mm, Tm, fm) {
      return fm >= 0 && GO(mm, Tm) > GO(mm, fm)
    }

    function PO(mm, Tm) {
      return Tm >= 0 && mm.h >= 3 && GO(mm, Tm) === mm.h - 1
    }

    function HO(mm) {
      const Tm = Xf(mm);
      return Tm === Kf || "Collider" === Tm || "Laser" === Tm || Tm.startsWith("_Collider ")
    }

    function yO(mm, Tm, fm, hm) {
      if (hm(mm)) return null;
      if (!eO.every((Tm => {
          let [hm, Am, am] = Tm;
          const xm = fm([mm[0] + hm, mm[1] + Am, mm[2] + am]);
          return null !== xm && !lf("reactor", xm) && "reactor" !== Pf(xm)
        }))) return null;
      const Am = Mf("reactor").min,
        am = Lf([mm[0], mm[1], mm[2]], function(mm, Tm) {
          const fm = Tm[0] - (mm[0] + .5),
            hm = Tm[2] - (mm[2] + .5);
          return Math.abs(fm) >= Math.abs(hm) ? fm >= 0 ? 2 : 4 : hm >= 0 ? 1 : 3
        }(mm, Tm), Am, Am, Am, vf("reactor", Am)),
        xm = Ff(am);
      let wm = !0;
      for (let Dm = 0; Dm < gf(am) && wm; Dm++) {
        if (Dm === xm) continue;
        const mm = Th(am, Dm),
          Tm = fm(mm);
        wm = !hm(mm) && (null === Tm || !HO(Tm))
      }
      return {
        box: am,
        fits: wm
      }
    }
    const CO = kD,
      rO = "baf2Goal",
      sO = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      lO = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      MO = .4;

    function uO(mm, Tm) {
      let [fm, hm, Am] = mm;
      const am = HD([fm - .02, hm - .02, Am - .02], [fm + 1.02, hm + 1.02, Am + 1.02], .07);
      return Tm && (am.push([
        [fm + .5, hm + 1 + .7, Am + .5],
        [.08, 1.4, .08]
      ]), am.push([
        [fm + .5, hm + 1 + 1.4 + .2, Am + .5],
        [MO, MO, MO]
      ])), am
    }

    function BO(mm, Tm) {
      let [fm, hm, Am] = Tm;
      return mm.isBlockInLoadedChunk(fm, hm, Am) ? mm.blockIdToBlockName(mm.getBlockId(fm, hm, Am)) : null
    }
    let LO = null;
    const vO = new Set;
    let tO = null;

    function UO(mm) {
      LO = mm;
      for (const Tm of vO) Tm(mm)
    }
    class dO {
      constructor(mm) {
        var Tm;
        this.plans = mm, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (Tm = mm => {
          var Tm, fm;
          this.setGoal(null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.goal) && void 0 !== Tm ? Tm : null, null !== (fm = null === mm || void 0 === mm ? void 0 : mm.startsBattery) && void 0 !== fm && fm)
        }, tO ??= [HA.j.subscribe("setDirectionArrow", (mm => {
          let {
            id: Tm,
            position: fm,
            text: hm
          } = mm;
          Tm === rO && UO({
            goal: [Math.floor(fm[0]), Math.floor(fm[1]), Math.floor(fm[2])],
            startsBattery: JSON.stringify(null !== hm && void 0 !== hm ? hm : null).includes("arrowStartBattery")
          })
        })), HA.j.subscribe("clearDirectionArrow", (mm => {
          let {
            id: Tm
          } = mm;
          null !== Tm && Tm !== rO || UO(null)
        }))], vO.add(Tm), Tm(LO), () => {
          vO.delete(Tm)
        })
      }
      onAfterRender(mm, Tm) {
        const fm = performance.now();
        if (this.cues.length > 0) {
          const Tm = .55 + .45 * Math.sin(fm / 1100 * Math.PI * 2);
          for (const fm of this.cues) mm.setGameMesh(fm, {
            visibility: Tm
          })
        }
        if (fm - this.lastCheckMs < 150) return;
        this.lastCheckMs = fm;
        const hm = this.plans.all().filter((mm => {
            const [fm, hm, Am] = mm.box.ctrl;
            return (!mm.formed || null !== this.plans.layoutOf(mm.box.ctrl)) && (fm - Tm[0]) ** 2 + (hm - Tm[1]) ** 2 + (Am - Tm[2]) ** 2 <= 2304
          })),
          Am = function(mm, Tm) {
            const fm = JO.f.MO,
              hm = new Map;
            for (const am of Tm) {
              const Tm = Th(am.box, 0),
                xm = Th(am.box, gf(am.box) - 1),
                wm = [Math.min(Tm[0], xm[0]), Math.min(Tm[1], xm[1]), Math.min(Tm[2], xm[2])].map((mm => Math.floor(mm / fm))),
                Dm = [Math.max(Tm[0], xm[0]), Math.max(Tm[1], xm[1]), Math.max(Tm[2], xm[2])].map((mm => Math.floor(mm / fm)));
              for (let fm = wm[0]; fm <= Dm[0]; fm++)
                for (let Tm = wm[1]; Tm <= Dm[1]; Tm++)
                  for (let am = wm[2]; am <= Dm[2]; am++) {
                    var Am;
                    hm.set(`${fm},${Tm},${am}`, null !== (Am = mm.getChunkVersion(fm, Tm, am)) && void 0 !== Am ? Am : -1)
                  }
            }
            return hm
          }(mm, hm);
        this.plans.getVersion() === this.storeVersion && (function(mm, Tm) {
          if (mm.size !== Tm.size) return !1;
          for (const [fm, hm] of mm)
            if (Tm.get(fm) !== hm) return !1;
          return !0
        }(Am, this.chunkVersions) || fm - this.lastRescanMs < 600) || (this.lastRescanMs = fm, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Am, this.redraw(mm, hm))
      }
      dispose(mm) {
        this.unwatch(), LO = null, this.clearMeshes(mm), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(mm, Tm) {
        var fm;
        (null === mm || void 0 === mm ? void 0 : mm.join()) === (null === (fm = this.goal) || void 0 === fm ? void 0 : fm.join()) && Tm === this.startsBattery || (this.goal = mm, this.startsBattery = Tm, this.storeVersion = -1)
      }
      redraw(mm, Tm) {
        const fm = Tm => BO(mm, Tm),
          hm = new Map,
          Am = [],
          am = this.plans.guideOn();
        for (const im of Tm) {
          const mm = am && bO(im, this.plans.showsStarter(im.box.ctrl), (mm => fm(Th(im.box, mm)))),
            Tm = "reactor" === im.kind ? this.plans.layoutOf(im.box.ctrl) : null,
            xm = am && !im.formed ? NO(im, fm, this.goal) : -1;
          xm >= 0 && Am.push([Th(im.box, xm), PO(im.box, xm)]);
          const wm = gf(im.box);
          for (let Am = 0; Am < wm; Am++) {
            const wm = Th(im.box, Am),
              Dm = fm(wm),
              Rm = null === Dm ? null : SO(im, Am, Dm, mm, am, Tm);
            if (null !== Rm) {
              const mm = "wrong" !== Rm && XO(im.box, Am, xm),
                Tm = mm ? `${Rm}Dim` : Rm;
              let fm = hm.get(Tm);
              fm || (fm = {
                draw: {
                  ghost: Rm,
                  dim: mm
                },
                list: []
              }, hm.set(Tm, fm)), fm.list.push(wm)
            }
          }
        }
        if (am && this.startsBattery && this.goal) {
          const [mm, Tm, Am] = this.goal, am = [];
          for (const [hm, xm, wm] of sO) {
            const Dm = [mm + hm, Tm + xm, Am + wm];
            "Air" === fm(Dm) && am.push(Dm)
          }
          if (am.length > 0) {
            var xm;
            const mm = null !== (xm = hm.get("cell")) && void 0 !== xm ? xm : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            mm.list.push(...am), hm.set("cell", mm)
          }
        }
        const wm = [...hm.keys()].sort(),
          Dm = [...wm.map((mm => `${mm}:${hm.get(mm).list.join(";")}`)), `cue:${Am.join(";")}`].join("|");
        if (Dm !== this.shownKey) {
          this.shownKey = Dm, this.clearMeshes(mm);
          for (const Tm of wm) {
            const {
              draw: fm,
              list: Am
            } = hm.get(Tm);
            this.meshes.push(this.build(mm, fm, Am))
          }
          for (const [Tm, fm] of Am) this.cues.push(ZO(mm, uO(Tm, fm), lO))
        }
      }
      build(mm, Tm, fm) {
        let {
          ghost: hm,
          dim: Am
        } = Tm;
        const {
          size: am,
          colour: xm,
          alpha: wm
        } = CO[hm], Dm = fm[0], im = [], Rm = [];
        for (const [pm, Em, om] of fm) zO(im, Rm, [pm - Dm[0] + .5, Em - Dm[1] + .5, om - Dm[2] + .5], [am, am, am]);
        return mm.createGameMesh({
          positions: im,
          indices: Rm
        }, {
          rgb: xm,
          alpha: wm * (Am ? .3 : 1)
        }, Dm)
      }
      clearMeshes(mm) {
        for (const Tm of [...this.meshes, ...this.cues]) mm.disposeGameMesh(Tm);
        this.meshes = [], this.cues = []
      }
    }
    const gO = [.56, .83, 1],
      WO = [1, .3, .25];
    class FO {
      constructor(mm) {
        this.plans = mm, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(mm, Tm, fm) {
        var hm;
        const Am = performance.now();
        if (Am - this.lastCheckMs < 150) return;
        this.lastCheckMs = Am;
        const am = Tm => BO(mm, Tm),
          xm = null === (hm = mm.MTm(Tm)) || void 0 === hm ? void 0 : hm.name,
          wm = xm && "Reactor Frame" === Xf(xm) ? mm.getTargetedBlock() : null,
          Dm = wm ? [wm.ep[0], wm.ep[1], wm.ep[2]] : null,
          im = null !== Dm && "Air" === am(Dm) && Dm.every(((mm, Tm) => Math.abs(mm + .5 - fm[Tm]) <= 8)) ? yO(Dm, fm, am, (mm => this.inPlan(mm))) : null,
          Rm = im ? `${im.box.ctrl.join()}|${im.box.rot}|${im.fits}` : "";
        Rm !== this.shownKey && this.show(mm, Rm, im)
      }
      dispose(mm) {
        this.clear(mm), this.shownKey = ""
      }
      inPlan(mm) {
        return this.plans.all().some((Tm => fh(Tm.box, mm) >= 0))
      }
      show(mm, Tm, fm) {
        if (this.clear(mm), this.shownKey = Tm, !fm) return;
        const {
          box: hm,
          fits: Am
        } = fm, am = Am ? gO : WO, {
          lo: xm,
          hi: wm
        } = PD(hm);
        this.meshes.push(ZO(mm, HD(xm, wm, .05), {
          rgb: am,
          alpha: 1
        }));
        const Dm = [],
          im = Th(hm, 0)[1];
        for (let Rm = 0; Rm < hm.w * hm.d; Rm++) {
          const [mm, , Tm] = Th(hm, Rm);
          Dm.push([
            [mm + .5, im + .02 + .01, Tm + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(ZO(mm, Dm, {
          rgb: am,
          alpha: .25
        }))
      }
      clear(mm) {
        for (const Tm of this.meshes) mm.disposeGameMesh(Tm);
        this.meshes = []
      }
    }
    const mY = "buildAFactory2Game:";

    function TY(mm, Tm, fm) {
      const hm = mm => {
          const [fm, hm, Am] = mm.box.ctrl;
          return fm === Tm[0] && hm === Tm[1] && Am === Tm[2]
        },
        Am = mm.find((mm => hm(mm) || fh(mm.box, Tm) >= 0));
      if (!Am) return null;
      const am = function(mm, Tm, fm) {
        const {
          w: hm,
          h: Am,
          d: am
        } = mm.box, xm = "reactor" === mm.kind ? `${mY}rxTitle` : `${mY}batTitle`;
        if (mm.formed) return {
          key: `${mY}lookPlanFormed`,
          kindKey: xm,
          w: hm,
          h: Am,
          d: am,
          count: 0
        };
        let wm = 0,
          Dm = 0;
        for (let Rm = 0; Rm < gf(mm.box); Rm++) {
          const Tm = fm(Th(mm.box, Rm)),
            hm = null === Tm ? "ok" : wh(mm.kind, hh(mm.box, Rm), Tm);
          wm += "missing" === hm ? 1 : 0, Dm += "wrong" === hm || "blocked" === hm ? 1 : 0
        }
        const im = function(mm, Tm, fm) {
          if (Tm < 0 || null === fm) return;
          const hm = hh(mm.box, Tm),
            Am = wh(mm.kind, hm, fm);
          return "blocked" === Am ? `${mY}lookWhy_blocked` : "wrong" === Am ? "ctrl" === hm ? `${mY}lookWhy_ctrl` : `${mY}lookWhy_reactor_${hm}` : void 0
        }(mm, fh(mm.box, Tm), fm([Tm[0], Tm[1], Tm[2]]));
        if (wm > 0) return {
          key: `${mY}lookPlanToBuild`,
          kindKey: xm,
          w: hm,
          h: Am,
          d: am,
          count: wm,
          why: im
        };
        if (Dm > 0) return {
          key: `${mY}lookPlanTakeOut`,
          kindKey: xm,
          w: hm,
          h: Am,
          d: am,
          count: Dm,
          why: im
        };
        return {
          key: "reactor" === mm.kind ? `${mY}lookPlanNoRods` : `${mY}lookPlanDone`,
          kindKey: xm,
          w: hm,
          h: Am,
          d: am,
          count: 0
        }
      }(Am, Tm, fm);
      return "reactor" === Am.kind && hm(Am) ? {
        ...am,
        ctrl: !0
      } : am
    }

    function fY(mm, Tm) {
      return mm === Tm || null !== mm && null !== Tm && mm.key === Tm.key && mm.kindKey === Tm.kindKey && mm.w === Tm.w && mm.h === Tm.h && mm.d === Tm.d && mm.count === Tm.count && mm.why === Tm.why && mm.ctrl === Tm.ctrl
    }

    function hY() {
      return performance.now()
    }
    class AY {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hY;
        this.ticket = mm, this.sent = Tm, this.backstopMs = fm, this.now = hm, this.queuedAt = void 0, this.queuedAt = hm()
      }
      answered() {
        const mm = this.now(),
          Tm = this.sent.leftAt(this.ticket);
        return null !== Tm && mm - Tm > 4e3 || mm - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class aY {
      constructor() {
        this.echoes = []
      }
      add(mm) {
        this.echoes = this.echoes.filter((mm => !mm.answered())), this.echoes.push(mm)
      }
      answered() {
        var mm, Tm;
        return null === (mm = null === (Tm = this.echoes.at(-1)) || void 0 === Tm ? void 0 : Tm.answered()) || void 0 === mm || mm
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((mm => mm.answered()))
      }
      age() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.echoes.at(-1)) || void 0 === Tm ? void 0 : Tm.age()) && void 0 !== mm ? mm : null
      }
      clear() {
        this.echoes = []
      }
    }
    class xY {
      constructor(mm) {
        this.send = mm, this.value = null, this.sent = null, this.echoes = new aY, this.down = !1, this.timer = null
      }
      shown(mm) {
        return null === this.value ? mm : this.down || this.value !== this.sent ? this.value : mm === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), mm) : this.value
      }
      pendingFor(mm) {
        return null !== this.value && this.value === this.sent && mm !== this.value ? this.echoes.age() : null
      }
      assume(mm, Tm) {
        this.disarm(), this.down = !1, this.value = mm, this.sent = mm, this.echoes.clear(), this.echoes.add(Tm)
      }
      press() {
        this.down = !0
      }
      drag(mm) {
        this.value = mm, this.arm(this.down ? 1e3 : 400)
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
      arm(mm) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), mm)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class wY {
      constructor() {
        this.pending = new Map
      }
      set(mm, Tm, fm) {
        var hm;
        const Am = null !== (hm = this.pending.get(mm)) && void 0 !== hm ? hm : {
          on: Tm,
          echoes: new aY
        };
        Am.on = Tm, Am.echoes.add(fm), this.pending.set(mm, Am)
      }
      shown(mm) {
        let Tm = mm;
        for (const [fm, {
            on: hm,
            echoes: Am
          }] of this.pending) 0 !== (mm & fm) === hm && Am.agreeCounts() || Am.answered() ? this.pending.delete(fm) : Tm = hm ? Tm | fm : Tm & ~fm;
        return Tm
      }
      pendingMask() {
        let mm = 0;
        for (const Tm of this.pending.keys()) mm |= Tm;
        return mm
      }
      pendingFor(mm) {
        let Tm = null;
        for (const [hm, {
            on: Am,
            echoes: am
          }] of this.pending) {
          if (void 0 !== mm && 0 !== (mm & hm) === Am) continue;
          const xm = am.age();
          var fm;
          if (null !== xm) Tm = Math.max(null !== (fm = Tm) && void 0 !== fm ? fm : 0, xm)
        }
        return Tm
      }
      clear() {
        this.pending.clear()
      }
    }
    class DY {
      constructor() {
        this.dims = null, this.echoes = new aY, this.unmet = null
      }
      shown(mm) {
        var Tm;
        return this.dims && (iY(this.dims, mm) && this.echoes.agreeCounts() || this.echoes.answered()) && (iY(this.dims, mm) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (Tm = this.dims) && void 0 !== Tm ? Tm : mm
      }
      takeUnmet() {
        const mm = this.unmet;
        return this.unmet = null, mm
      }
      set(mm, Tm) {
        this.dims = mm, this.echoes.add(Tm)
      }
      pendingFor(mm) {
        return null === this.dims || mm && iY(this.dims, mm) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function iY(mm, Tm) {
      return mm[0] === Tm[0] && mm[1] === Tm[1] && mm[2] === Tm[2]
    }
    class RY {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hY;
        this.now = mm, this.taps = new Map
      }
      tap(mm, Tm, fm) {
        return !this.busy(mm) && (this.taps.set(mm, {
          at: this.now(),
          done: Tm
        }), fm(), !0)
      }
      settle(mm) {
        for (const [Tm, fm] of [...this.taps]) fm.done(mm) && this.taps.delete(Tm)
      }
      busy(mm) {
        const Tm = this.taps.get(mm);
        return !!Tm && (!(this.now() - Tm.at >= 3e3) || (this.taps.delete(mm), !1))
      }
      busyIds() {
        const mm = new Set;
        for (const Tm of [...this.taps.keys()]) this.busy(Tm) && mm.add(Tm);
        return mm
      }
      clear() {
        this.taps.clear()
      }
    }

    function pY(mm) {
      return {
        send: Tm => mm.track(Tm),
        sendUrgent: (Tm, fm) => mm.track(Tm, {
          urgent: !0,
          supersedes: fm
        }),
        leftAt: Tm => mm.leftAt(Tm),
        holdReserve: () => mm.holdUrgentReserve(),
        answerMs: Hx
      }
    }

    function EY() {
      return performance.now()
    }

    function oY(mm) {
      const Tm = mm.baf2RxNeed.map((mm => {
        let [Tm, fm] = mm;
        return [Tm, fm]
      }));
      return JSON.stringify([mm.baf2RxFormed, Tm, mm.baf2RxBad, mm.baf2RxCells])
    }

    function OY(mm, Tm) {
      const fm = 0 !== (Tm & oT),
        hm = 0 !== (mm.baf2RxFlags & oT);
      return !fm || hm || "running" !== mm.baf2RxState && "idle" !== mm.baf2RxState ? !fm && hm && "scram" === mm.baf2RxState && mm.baf2RxFuel > 0 ? "idle" : mm.baf2RxState : "scram"
    }

    function YY(mm) {
      return JSON.stringify([mm.baf2BatFormed, mm.baf2BatNeed, mm.baf2BatBad])
    }

    function qY(mm) {
      return mm.join(",")
    }
    class jY {
      constructor() {
        this.listeners = new Set
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      notify() {
        for (const mm of this.listeners) mm()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class VY {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(mm, Tm) {
        this.lastAt = mm, this.lastUntil = mm + Tm
      }
      answered(mm) {
        return this.lastAt >= mm || mm < this.lastUntil
      }
    }
    class IY {
      constructor(mm, Tm) {
        this.link = mm, this.now = Tm, this.hold = new DY, this.picked = null, this.notTaken = null
      }
      shown(mm) {
        const Tm = this.hold.shown(mm);
        if (this.hold.takeUnmet() && this.picked) {
          var fm;
          const {
            plans: Tm,
            ctrl: hm,
            at: Am
          } = this.picked;
          this.picked = null, Tm.unpredict(hm), null === (fm = this.notTaken) || void 0 === fm || fm.call(this, mm, Am)
        }
        return Tm
      }
      pendingFor(mm) {
        return this.hold.pendingFor(mm)
      }
      Do(mm, Tm, fm) {
        mm.predictSize(Tm, fm), this.picked = {
          plans: mm,
          ctrl: Tm,
          at: this.now()
        };
        const hm = this.link.send(ET(Tm, "plan", ...fm));
        this.hold.set(fm, new AY(hm, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class KY {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EY;
        this.plans = mm, this.readInterior = Tm, this.link = fm, this.now = hm, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new wY, this.throttle = void 0, this.oneShots = void 0, this.listeners = new jY, this.redraw = null, this.releaseReserve = null, this.size = new IY(fm, hm), this.oneShots = new RY(hm), this.throttle = new xY((mm => this.echo(this.link.send(this.command("throttle", mm)))))
      }
      set(mm) {
        !mm.baf2RxOpen && this.raw && qY(this.raw.baf2RxAt) === qY(mm.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(mm), this.gp(mm)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(mm) {
        this.size.notTaken = mm
      }
      resize(mm) {
        this.raw && (this.size.Do(this.plans, this.raw.baf2RxAt, mm), this.gp(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const mm = this.raw.baf2RxAt;
        this.plans.setStarter(mm, !this.plans.showsStarter(mm)), this.gp(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.gp(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.gp(this.raw)
      }
      send(mm) {
        if (this.raw) {
          for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
          this.link.send(this.command(mm, ...fm))
        }
      }
      tap(mm, Tm) {
        this.raw && this.oneShots.tap(mm, function(mm, Tm) {
          if ("start" === mm) return mm => 0 === (mm.baf2RxFlags & oT);
          if ("odConfirm" === mm) return mm => 0 !== (mm.baf2RxFlags & OT);
          const fm = oY(Tm);
          return mm => oY(mm) !== fm
        }(mm, this.raw), Tm) && ("start" === mm && (this.startedAt = this.now()), this.gp(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(oT, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(mm, Tm) {
        if (!this.raw) return;
        const fm = mm === oT ? this.command(Tm ? "scram" : "start") : this.command("od", Tm ? 1 : 0),
          hm = Tm && mm === oT,
          Am = `${pT} ${this.raw.baf2RxAt.join(" ")} `,
          am = this.echo(hm ? this.link.sendUrgent(fm, (mm => {
            const Tm = mm.startsWith(Am) ? mm.slice(Am.length).split(" ")[0] : null;
            return "throttle" === Tm || "start" === Tm
          })) : this.link.send(fm));
        this.flags.set(mm, Tm, am), hm && this.throttle.assume(0, am), this.gp(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(mm) {
        this.throttle.drag(mm), this.raw && this.gp(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.gp(this.raw)
      }
      subscribe(mm) {
        return this.listeners.subscribe(mm)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var mm;
        this.throttle.release(), null === (mm = this.releaseReserve) || void 0 === mm || mm.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(mm) {
        for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
        return ET(this.raw.baf2RxAt, mm, ...fm)
      }
      echo(mm) {
        return new AY(mm, this.link, this.link.answerMs, this.now)
      }
      gp(mm) {
        var Tm;
        this.raw = mm;
        const fm = this.flags.shown(mm.baf2RxFlags),
          hm = {
            ...mm,
            baf2RxFlags: fm,
            baf2RxTarget: this.throttle.shown(mm.baf2RxTarget),
            baf2RxState: OY(mm, fm)
          },
          Am = this.size.shown(hm.baf2RxDims),
          am = this.throttle.pendingFor(),
          xm = [this.throttle.pendingFor(mm.baf2RxTarget), this.flags.pendingFor(mm.baf2RxFlags), this.size.pendingFor(mm.baf2RxDims)].filter((mm => null !== mm)),
          wm = xm.length > 0 ? Math.max(...xm) : null,
          Dm = this.oneShots.busyIds(),
          im = hm.baf2RxAt;
        let Rm, pm, Em = null,
          om = [Math.max(0, Am[0] - 2), Math.max(0, Am[1] - 2), Math.max(0, Am[2] - 2)];
        if (hm.baf2RxFormed) {
          const [mm, Tm, fm] = hm.baf2RxDims;
          om = [Math.max(0, mm - 2), Math.max(0, Tm - 2), Math.max(0, fm - 2)], Rm = Array.from(hm.baf2RxCells, Number), pm = `${om.join(",")}:${hm.baf2RxCells}`
        } else {
          var Om;
          const mm = null === (Om = this.plans.planAt(im)) || void 0 === Om ? void 0 : Om.box,
            Tm = mm ? tf(mm, "reactor", ...Am) : Lf(im, 1, ...Am, vf("reactor", Am[0])),
            fm = this.readInterior(Tm);
          Em = hD(om, fm), Rm = fm, pm = `${om.join(",")}:${fm.join("")}`
        }(null === (Tm = this.looksOf) || void 0 === Tm ? void 0 : Tm.key) !== pm && (this.looksOf = {
          key: pm,
          looks: iD(om, Rm)
        }), this.view = {
          status: hm,
          dims: Am,
          plan: Em,
          inner: om,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(im),
          odConfirmed: this.odConfirmed || 0 !== (hm.baf2RxFlags & KT),
          guide: this.plans.guideOn(),
          throttlePending: null !== am,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== wm && wm >= 5e3,
          busy: Dm,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== wm || Dm.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.gp(this.raw)
        }), 250))
      }
    }
    class QY {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EY;
        this.plans = mm, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new jY, this.redraw = null, this.size = new IY(Tm, fm), this.oneShots = new RY(fm)
      }
      set(mm) {
        !mm.baf2BatOpen && this.view && qY(this.view.status.baf2BatAt) === qY(mm.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(mm), this.gp(mm)
      }
      tap(mm, Tm) {
        if (!this.view) return;
        const fm = YY(this.view.status);
        this.oneShots.tap(mm, (mm => YY(mm) !== fm), Tm) && this.gp(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(mm) {
        this.size.notTaken = mm
      }
      resize(mm) {
        this.view && (this.size.Do(this.plans, this.view.status.baf2BatAt, mm), this.gp(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.gp(this.view.status)
      }
      subscribe(mm) {
        return this.listeners.subscribe(mm)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      gp(mm) {
        const Tm = this.size.shown(mm.baf2BatDims),
          fm = this.oneShots.busyIds();
        this.view = {
          status: mm,
          dims: Tm,
          yp: JD(Tm, mm.baf2BatDims) ? mm.baf2BatCapacity : ED(...Tm),
          guide: this.plans.guideOn(),
          busy: fm
        }, this.listeners.notify(), fm.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.gp(this.view.status)
        }), 250))
      }
    }
    const nY = "buildAFactory2Game:";

    function JY() {
      var mm;
      const Tm = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!Tm) return null;
      const fm = Tm.querySelector(".ExitButton");
      return function(mm, Tm) {
        const fm = Tm ? Tm.left - 8 : mm.right;
        return {
          left: mm.left,
          top: mm.top,
          width: Math.max(0, fm - mm.left),
          height: mm.height
        }
      }(Tm.getBoundingClientRect(), null !== (mm = null === fm || void 0 === fm ? void 0 : fm.getBoundingClientRect()) && void 0 !== mm ? mm : null)
    }
    const cY = (0, hm.memo)((function(mm) {
      let {
        store: Tm
      } = mm;
      const {
        t: fm
      } = (0, SA.A)(), [Am, am] = (0, hm.useState)((() => Tm.get())), [xm, wm] = (0, hm.useState)((() => performance.now()));
      (0, hm.useEffect)((() => (am(Tm.get()), Tm.subscribe((() => {
        am(Tm.get()), wm(performance.now())
      })))), [Tm]);
      const {
        alarm: Dm,
        boomAt: im
      } = Am, Rm = null !== Dm && null !== Dm.secs, [pm, Em] = (0, hm.useState)(null);
      (0, hm.useEffect)((() => {
        if (!Rm) return;
        Em(JY());
        const mm = setInterval((() => {
          wm(performance.now()), Em(JY())
        }), 250);
        return () => {
          clearInterval(mm)
        }
      }), [Rm]);
      const [om, Om] = (0, hm.useState)(!1);
      return (0, hm.useEffect)((() => {
        if (im === -1 / 0) return;
        Om(!0);
        const mm = setTimeout((() => {
          Om(!1)
        }), 1300);
        return () => {
          clearTimeout(mm)
        }
      }), [im]), (0, ka.jsxs)(ka.Fragment, {
        children: [null !== Dm && (0, ka.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: fm(Dm.hot ? `${nY}rxAlarmSiren` : `${nY}rxAlarmDamaged`, {
            amount: String(Dm.damage)
          })
        }), null !== Dm && null !== Dm.secs && (0, ka.jsx)("div", {
          className: pm ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== pm && void 0 !== pm ? pm : void 0,
          "aria-live": "assertive",
          children: fm(`${nY}rxAlarmCountdown`, {
            amount: String((Ym = Dm.secs, qm = xm - Dm.receivedAt, Math.max(1, Math.ceil(Ym - qm / 1e3))))
          })
        }), om && (0, ka.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Ym, qm
    }));
    class zY {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      lV(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const fm = mm.baf2RxAlarmAt.join(",");
        let hm = this.snapshot.boomAt;
        if (mm.baf2RxAlarmBoom) this.byReactor.delete(fm), hm = Tm;
        else if (mm.baf2RxAlarmDamage <= 0) this.byReactor.delete(fm);
        else {
          var Am;
          this.byReactor.set(fm, {
            damage: mm.baf2RxAlarmDamage,
            secs: null !== (Am = mm.baf2RxAlarmSecs) && void 0 !== Am ? Am : null,
            hot: !0 === mm.baf2RxAlarmHot,
            receivedAt: Tm
          })
        }
        this.gp(hm)
      }
      retain(mm) {
        let Tm = !1;
        for (const fm of [...this.byReactor.keys()]) mm.has(fm) || (this.byReactor.delete(fm), Tm = !0);
        Tm && this.gp(this.snapshot.boomAt)
      }
      has(mm) {
        return this.byReactor.has(mm)
      }
      get() {
        return this.snapshot
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      gp(mm) {
        let Tm = null;
        for (const fm of this.byReactor.values())(!Tm || fm.damage > Tm.damage) && (Tm = fm);
        this.snapshot = {
          alarm: Tm,
          boomAt: mm
        };
        for (const fm of this.listeners) fm()
      }
    }
    const ZY = {
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

    function kY(mm) {
      return [mm[0], mm[1], mm[2]]
    }

    function bY(mm) {
      return `${mm[0]},${mm[1]},${mm[2]}`
    }
    class SY {
      constructor(mm) {
        if (this.plans = mm, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var mm;
            return {
              active: this.glows.flatMap((mm => {
                let {
                  record: Tm
                } = mm;
                return Tm ? [Tm] : []
              })),
              log: [...null !== (mm = this.devLog) && void 0 !== mm ? mm : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var mm;
        return null !== (mm = this.devLog) && void 0 !== mm ? mm : []
      }
      check(mm, Tm, fm) {
        const hm = new Set(Tm.map((mm => bY(mm.box.ctrl))));
        for (const xm of function(mm, Tm) {
            const fm = [],
              hm = new Map(mm);
            mm.clear();
            for (const Am of Tm) {
              const Tm = KO(Am.box.ctrl),
                am = Am.formed ? Am.level : 0;
              mm.set(Tm, am), am > 0 && 0 === hm.get(Tm) && fm.push(Am)
            }
            return fm
          }(this.levels, this.plans.all())) hm.has(bY(xm.box.ctrl)) && this.show(mm, xm, "on", fm);
        const Am = this.plans.lastFormed();
        if (null === Am || Am.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Am.receivedAt;
        const am = function(mm, Tm) {
          var fm;
          const hm = KO(mm);
          return null !== (fm = Tm.find((mm => KO(mm.box.ctrl) === hm))) && void 0 !== fm ? fm : null
        }(Am.ctrl, Tm);
        return am && this.show(mm, am, "formed", fm), am
      }
      fade(mm, Tm) {
        0 !== this.glows.length && (this.glows = this.glows.filter((fm => {
          let {
            mesh: hm,
            glow: Am,
            startMs: am,
            record: xm
          } = fm;
          const wm = (Tm - am) / ZY[Am].ms;
          return wm >= 1 ? (mm.disposeGameMesh(hm), xm && (xm.endMs = Tm), !1) : (mm.setGameMesh(hm, {
            visibility: "formed" === Am ? 1 - wm : Math.sin(Math.PI * wm)
          }), !0)
        })))
      }
      dispose(mm) {
        for (const {
            mesh: fm
          }
          of this.glows) mm.disposeGameMesh(fm);
        this.glows = [], this.levels.clear();
        const Tm = "undefined" !== typeof window ? window : null;
        (null === Tm || void 0 === Tm ? void 0 : Tm.baf2Glows) === this.devAccessor && delete Tm.baf2Glows
      }
      show(mm, Tm, fm, hm) {
        const {
          lo: Am,
          hi: am
        } = PD(Tm.box);
        let xm = null;
        this.devLog && (xm = {
          glow: fm,
          ctrl: kY(Tm.box.ctrl),
          lo: kY(Am),
          hi: kY(am),
          startMs: hm,
          endMs: null
        }, this.devLog.push(xm), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(mm, fm, HD(Am, am, ZY[fm].thick)),
          glow: fm,
          startMs: hm,
          record: xm
        })
      }
      build(mm, Tm, fm) {
        const hm = ZO(mm, fm, {
          rgb: ZY[Tm].colour,
          alpha: 1
        });
        return mm.setGameMesh(hm, {
          visibility: 0
        }), hm
      }
    }
    const eY = 1 / .6,
      NY = {
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
        blendMode: Cw.g.Standard,
        soft: !0
      },
      GY = {
        ...NY,
        size: [.25, .4],
        count: 2
      };

    function XY(mm) {
      return {
        colours: [mm, mm],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Cw.g.Add,
        soft: !1
      }
    }
    const PY = XY([150, 225, 255]),
      HY = XY([185, 145, 255]),
      yY = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function CY(mm) {
      const Tm = PT[mm];
      return null === Tm.fuelSlot || af(Tm) ? yY.includes(mm) ? HY : PY : NY
    }
    const rY = {
        kind: "smokePuff"
      },
      sY = [.2, .025, .2];

    function lY(mm, Tm) {
      const [
        [fm, hm, Am],
        [am, xm, wm]
      ] = mm.colours;
      return {
        texture: mm.soft ? rY : "square_particle",
        yp: Tm,
        minLifeTime: mm.life[0] / eY,
        maxLifeTime: mm.life[1] / eY,
        minEmitPower: mm.power[0] * eY,
        maxEmitPower: mm.power[1] * eY,
        minSize: mm.size[0],
        maxSize: mm.size[1],
        emitRate: 0,
        gravity: [0, mm.lift * eY * eY, 0],
        dir1: [-mm.spread, 1, -mm.spread],
        dir2: [mm.spread, 1, mm.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [fm, hm, Am, mm.alpha],
          maxColor: [am, xm, wm, mm.alpha]
        }, {
          timeFraction: 1,
          minColor: [fm, hm, Am, 0],
          maxColor: [am, xm, wm, 0]
        }],
        blendMode: mm.blendMode
      }
    }
    class MY {
      constructor(mm) {
        this.fixed = mm, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(mm, Tm, fm) {
        var hm;
        if (fm === this.lastFrame) return !1;
        this.lastFrame = fm;
        const Am = this.at;
        Am[0] = Tm[0] + .5, Am[1] = Tm[1] + 1.025, Am[2] = Tm[2] + .5;
        const am = null !== (hm = this.fixed) && void 0 !== hm ? hm : wm() ? GY : NY;
        let xm = this.particles.get(am);
        return xm || (xm = mm.createParticles(function(mm) {
          return lY(mm, Math.ceil(12 * mm.count * mm.life[1]) + mm.count)
        }(am), {
          pos: Am,
          half: sY
        }), this.particles.set(am, xm)), xm.moveTo(Am), xm.emit(am.count), !0
      }
      dispose() {
        for (const mm of this.particles.values()) mm.stop();
        this.particles.clear()
      }
    }
    class uY {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(mm) {
        this.indexed = !0;
        for (const Tm of bT) {
          const fm = CY(Tm);
          for (let hm = 1; hm <= 4; hm++) {
            const Am = mm.blockNameToBlockId(`${Tm}|meta|rot${hm}|Running`, !0);
            if (null === Am) continue;
            let am = this.pufferIndexByStyle.get(fm);
            void 0 === am && (am = this.pufferList.push(new MY(fm === NY ? null : fm)) - 1, this.pufferIndexByStyle.set(fm, am)), this.pufferIndexById[Am] = am + 1
          }
        }
      }
      onAfterRender(mm, Tm) {
        this.indexed || this.index(mm);
        const fm = performance.now(),
          hm = 0 === this.lastMs ? 0 : Math.min(fm - this.lastMs, 250) / 1e3;
        this.lastMs = fm, this.frame++, mm.particlesEnabled() ? (this.scan(mm, Tm), this.puff(mm, hm)) : this.sources = []
      }
      dispose() {
        for (const mm of this.pufferList) mm.dispose();
        this.sources = [], this.found = []
      }
      scan(mm, Tm) {
        0 === this.scanRow && (this.origin = [Math.floor(Tm[0]) - 12, Math.floor(Tm[1]) - 6, Math.floor(Tm[2]) - 12]);
        const fm = Math.min(this.scanRow + 16, 325),
          [hm, Am, am] = this.origin,
          xm = this.hits;
        xm.length = 0;
        for (let wm = this.scanRow; wm < fm; wm++) {
          const Tm = hm + wm % 25,
            fm = Am + Math.floor(wm / 25);
          mm.scanBlocks(Tm, fm, am, Tm + 1, fm + 1, am + 25, this.pufferIndexById, xm)
        }
        for (let wm = 0; wm < xm.length; wm += 4) {
          const mm = xm[wm + 3];
          this.found.push({
            pos: [xm[wm], xm[wm + 1], xm[wm + 2]],
            jR: mm,
            puffer: this.pufferList[this.pufferIndexById[mm] - 1]
          })
        }
        this.scanRow = fm, 325 === fm && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(mm, Tm) {
        const fm = this.sources.length;
        if (0 !== fm) {
          this.budget = Math.min(this.budget + Math.min(fm / 1.2, 12) * Tm, 2);
          for (let Tm = 0; Tm < fm && this.budget >= 1; Tm++) {
            const Tm = this.sources[this.cursor % fm];
            this.cursor = (this.cursor + 1) % fm, mm.getBlockId(Tm.pos[0], Tm.pos[1], Tm.pos[2]) === Tm.jR && (Tm.puffer.puff(mm, Tm.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const BY = {
        ...XY([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      LY = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function vY(mm) {
      return 0 === mm.spots.length ? 0 : Math.min(1 * mm.level, 4)
    }

    function tY(mm) {
      return 0 === mm.glass.length ? 0 : Math.min(.75 * mm.level, 3)
    }

    function UY(mm) {
      return `${mm.ctrl.join(",")}:${mm.rot}:${mm.cu},${mm.cv}:${mm.w},${mm.h},${mm.d}`
    }

    function dY(mm, Tm) {
      const fm = Tm.w - 2,
        hm = Tm.h - 2,
        Am = Tm.d - 2,
        am = [];
      for (let xm = 0; xm < fm * hm * Am; xm++) {
        const wm = xm % fm,
          Dm = Math.floor(xm / fm) % Am,
          im = Math.floor(xm / (fm * Am));
        if (wm > 0 && wm < fm - 1 && Dm > 0 && Dm < Am - 1 && im > 0 && im < hm - 1) continue;
        const Rm = Th(Tm, ah(Tm, xm)),
          pm = BO(mm, Rm);
        if (null !== pm && "Fuel Rod" === Xf(pm))
          for (const Tm of LY) {
            const fm = [Rm[0] + Tm[0], Rm[1] + Tm[1], Rm[2] + Tm[2]];
            WY(mm, fm) && am.push(FY(fm, Tm))
          }
      }
      return am
    }

    function gY(mm, Tm) {
      const {
        lo: fm,
        hi: hm
      } = PD(Tm), Am = [];
      for (let am = fm[0]; am < hm[0]; am++)
        for (let Tm = fm[1]; Tm < hm[1]; Tm++) {
          const xm = am === fm[0] || am === hm[0] - 1 || Tm === fm[1] || Tm === hm[1] - 1 ? 1 : Math.max(1, hm[2] - 1 - fm[2]);
          for (let wm = fm[2]; wm < hm[2]; wm += xm) {
            const xm = [am, Tm, wm];
            if (!WY(mm, xm)) continue;
            const Dm = am === fm[0] ? LY[1] : am === hm[0] - 1 ? LY[0] : wm === fm[2] ? LY[5] : wm === hm[2] - 1 ? LY[4] : Tm === fm[1] ? LY[3] : LY[2];
            Am.push(FY(xm, Dm))
          }
        }
      return Am
    }

    function WY(mm, Tm) {
      const fm = BO(mm, Tm);
      return null !== fm && "Reactor Glass" === Xf(fm)
    }

    function FY(mm, Tm) {
      return [
        [mm[0] + .5 + .55 * Tm[0], mm[1] + .5 + .55 * Tm[1], mm[2] + .5 + .55 * Tm[2]],
        [0 === Tm[0] ? .4 : .02, 0 === Tm[1] ? .4 : .02, 0 === Tm[2] ? .4 : .02]
      ]
    }
    class mq {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(mm, Tm, fm, hm) {
        const Am = [],
          am = new Set;
        for (const im of Tm) {
          var xm, wm, Dm;
          const {
            box: Tm
          } = im;
          if ("reactor" !== im.kind || im.level <= 0 || (Tm.ctrl[0] - fm[0]) ** 2 + (Tm.ctrl[1] - fm[1]) ** 2 + (Tm.ctrl[2] - fm[2]) ** 2 > 576) continue;
          const Rm = UY(Tm);
          am.add(Rm);
          let pm = this.spots.get(Rm);
          if ((!pm || hm - pm.at > 3e3) && (pm = {
              at: hm,
              spots: dY(mm, Tm),
              glass: gY(mm, Tm)
            }, this.spots.set(Rm, pm)), 0 === pm.spots.length && 0 === pm.glass.length) continue;
          const Em = this.sparking.find((mm => mm.key === Rm));
          Am.push({
            key: Rm,
            level: im.level,
            spots: pm.spots,
            glass: pm.glass,
            budget: null !== (xm = null === Em || void 0 === Em ? void 0 : Em.budget) && void 0 !== xm ? xm : 0,
            cursor: null !== (wm = null === Em || void 0 === Em ? void 0 : Em.cursor) && void 0 !== wm ? wm : 0,
            glassBudget: null !== (Dm = null === Em || void 0 === Em ? void 0 : Em.glassBudget) && void 0 !== Dm ? Dm : 0
          })
        }
        for (const im of this.spots.keys()) am.has(im) || this.spots.delete(im);
        this.sparking = Am
      }
      emit(mm, Tm, fm) {
        var hm;
        if (0 === this.sparking.length || !mm.particlesEnabled() || fm === this.lastFrame) return;
        this.lastFrame = fm;
        let Am = 0,
          am = 0;
        for (const Om of this.sparking) Am += vY(Om), am += tY(Om);
        const xm = Am > 8 ? 8 / Am : 1,
          wm = am > 6 ? 6 / am : 1;
        let Dm, im = null,
          Rm = null;
        for (const Om of this.sparking) Om.budget = Math.min(Om.budget + vY(Om) * xm * Tm, 2), Om.budget >= 1 && (!im || Om.budget > im.budget) && (im = Om), Om.glassBudget = Math.min(Om.glassBudget + tY(Om) * wm * Tm, 2), Om.glassBudget >= 1 && (!Rm || Om.glassBudget > Rm.glassBudget) && (Rm = Om);
        if (im) im.budget--, Dm = im.spots[im.cursor++ % im.spots.length];
        else {
          if (!Rm) return;
          Rm.glassBudget--, Dm = Rm.glass[Math.floor(Math.random() * Rm.glass.length)]
        }
        const [pm, Em] = Dm, om = null !== (hm = this.emitter) && void 0 !== hm ? hm : this.create(mm, pm, Em);
        om.moveTo(pm, Em), om.emit(BY.count)
      }
      dispose() {
        var mm;
        null === (mm = this.emitter) || void 0 === mm || mm.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(mm, Tm, fm) {
        const hm = Math.ceil(14 * BY.count * BY.life[1]) + BY.count;
        return this.emitter = mm.createParticles(lY(BY, hm), {
          pos: Tm,
          half: fm
        }), this.emitter
      }
    }
    const Tq = [2, 3.2],
      fq = 1 / 3,
      hq = 1 / .6,
      Aq = {
        texture: rY,
        yp: Math.ceil(18 * Tq[1]) + 4,
        minLifeTime: Tq[0] / hq,
        maxLifeTime: Tq[1] / hq,
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
        blendMode: Cw.g.Standard
      };
    class aq {
      constructor(mm) {
        this.plans = mm, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new mq, this.frame = 0, this.outline = new SY(mm)
      }
      onAfterRender(mm, Tm, fm) {
        const hm = performance.now(),
          Am = 0 === this.lastMs ? 0 : Math.min(hm - this.lastMs, 250) / 1e3;
        if (this.lastMs = hm, this.outline.fade(mm, hm), this.puff(mm, Am, fm), this.sparks.emit(mm, Am, this.frame++), hm - this.lastCheckMs < 150) return;
        this.lastCheckMs = hm;
        const am = this.plans.all().filter((mm => mm.formed && xq(mm.box.ctrl, fm) <= 4096));
        this.plumes = am.filter((mm => "reactor" === mm.kind && mm.level > 0)).map((mm => ({
          box: mm.box,
          level: mm.level
        }))), this.updateHums(mm, Tm, am, fm), this.sparks.update(mm, am, fm, hm), this.chimeFormed(mm, Tm, am, hm)
      }
      dispose(mm) {
        var Tm;
        this.outline.dispose(mm), null === (Tm = this.steam) || void 0 === Tm || Tm.dispose(), this.steam = null, this.sparks.dispose();
        for (const fm of this.hums.values()) fm.stop();
        this.hums.clear()
      }
      chimeFormed(mm, Tm, fm, hm) {
        const Am = this.outline.check(mm, fm, hm);
        Am && mm.playSound(Tm, "exp_levelup", .6, 1, {
          aA: [Am.box.ctrl[0] + .5, Am.box.ctrl[1], Am.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(mm, Tm, fm) {
        const hm = this.plumes;
        if (0 === hm.length || !mm.particlesEnabled()) return void(this.plumeBudget = 0);
        const Am = hm.reduce(((mm, Tm) => mm + 3 * Tm.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Am * Tm, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let am = this.plumeCursor % (Am / 3);
        this.plumeCursor++;
        let xm = hm[0];
        for (const pm of hm) {
          if (am < pm.level) {
            xm = pm;
            break
          }
          am -= pm.level
        }
        const {
          lo: wm,
          hi: Dm
        } = PD(xm.box);
        if (function(mm, Tm, fm) {
            const hm = Math.max(mm[0] - fm[0], 0, fm[0] - Tm[0]),
              Am = Math.max(mm[2] - fm[2], 0, fm[2] - Tm[2]);
            return Math.hypot(hm, fm[1] - Tm[1], Am)
          }(wm, Dm, fm) < 6 && Math.random() > fq) return;
        const im = [(wm[0] + Dm[0]) / 2, Dm[1] + .05, (wm[2] + Dm[2]) / 2],
          Rm = [(Dm[0] - wm[0]) / 2 - .5, .05, (Dm[2] - wm[2]) / 2 - .5];
        this.steam ??= mm.createParticles(Aq, {
          pos: im,
          half: Rm
        }), this.steam.moveTo(im, Rm), this.steam.emit(1)
      }
      updateHums(mm, Tm, fm, hm) {
        const Am = new Map;
        for (const xm of fm) "reactor" === xm.kind && xm.level > 0 && xq(xm.box.ctrl, hm) <= 576 && Am.set(`${am=xm.box.ctrl,`${am[0]},${am[1]},${am[2]}`}:${xm.level}`, xm);
        var am;
        for (const [xm, wm] of this.hums) Am.has(xm) || (wm.stop(), this.hums.delete(xm));
        for (const [xm, wm] of Am) {
          if (this.hums.has(xm)) continue;
          const {
            lo: fm,
            hi: hm
          } = PD(wm.box), Am = [(fm[0] + hm[0]) / 2, fm[1], (fm[2] + hm[2]) / 2], am = mm.playSound(Tm, "rocketEngineLoop", .08 + .06 * wm.level, .55, {
            aA: Am,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          am && this.hums.set(xm, am)
        }
      }
    }

    function xq(mm, Tm) {
      return (mm[0] - Tm[0]) ** 2 + (mm[1] - Tm[1]) ** 2 + (mm[2] - Tm[2]) ** 2
    }
    class wq {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      lV(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const hm = [mm.baf2BombAt[0], mm.baf2BombAt[1], mm.baf2BombAt[2]],
          Am = mm.baf2BombR;
        if (mm.baf2BombBoom) {
          const mm = Math.hypot(Tm[0] - hm[0], Tm[1] - hm[1], Tm[2] - hm[2]);
          this.gp({
            fuse: null,
            blast: {
              at: hm,
              r: Am,
              receivedAt: fm,
              distance: mm,
              flash: mm <= 3 * Am
            }
          })
        } else this.gp({
          ...this.snapshot,
          fuse: mm.baf2BombMs > 0 ? {
            at: hm,
            r: Am,
            endsAt: fm + mm.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      gp(mm) {
        this.snapshot = mm;
        for (const Tm of this.listeners) Tm()
      }
    }
    const Dq = (0, hm.memo)((function(mm) {
      var Tm;
      let {
        store: fm
      } = mm;
      const {
        t: Am
      } = (0, SA.A)(), [am, xm] = (0, hm.useState)((() => fm.get())), [wm, Dm] = (0, hm.useState)((() => performance.now()));
      (0, hm.useEffect)((() => (xm(fm.get()), fm.subscribe((() => {
        xm(fm.get()), Dm(performance.now())
      })))), [fm]);
      const {
        fuse: im,
        blast: Rm
      } = am;
      (0, hm.useEffect)((() => {
        if (!im) return;
        const mm = setInterval((() => {
          Dm(performance.now())
        }), 250);
        return () => {
          clearInterval(mm)
        }
      }), [im]);
      const [pm, Em] = (0, hm.useState)(!1);
      (0, hm.useEffect)((() => {
        if (null === Rm || void 0 === Rm || !Rm.flash) return;
        Em(!0);
        const mm = setTimeout((() => {
          Em(!1)
        }), 2500);
        return () => {
          clearTimeout(mm)
        }
      }), [Rm]);
      const om = im ? function(mm, Tm) {
        return mm.endsAt <= Tm ? 0 : Math.ceil((mm.endsAt - Tm) / 1e3)
      }(im, wm) : 0;
      return (0, ka.jsxs)(ka.Fragment, {
        children: [om > 0 && (0, ka.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Am("buildAFactory2Game:bombCountdown", {
            amount: String(om),
            radius: String(null !== (Tm = null === im || void 0 === im ? void 0 : im.r) && void 0 !== Tm ? Tm : 0)
          })
        }), pm && (0, ka.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function iq(mm) {
      const Tm = Math.min(4, Math.max(1, mm / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * mm / 4)),
        capSpread: Math.min(5 * mm / 8, 24 * Tm),
        capThick: 6 * Tm,
        stemHalfWidth: 3 * Tm,
        puffScale: Tm
      }
    }
    class Rq {
      constructor() {
        this.ni = !1
      }
      hold(mm) {
        mm.getCameraFar() < 1e3 && (mm.setCameraFar(1e3), this.ni = !0)
      }
      release(mm) {
        this.ni && (this.ni = !1, mm.setCameraFar(null))
      }
    }
    const pq = 1 / .6,
      Eq = [.2, .1, .2],
      oq = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Oq = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Cw.g.Standard,
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
      Yq = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: Cw.g.Standard,
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
      qq = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Cw.g.Standard,
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
      jq = {
        texture: rY,
        yp: Math.ceil(120) + 4,
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
        blendMode: Cw.g.Add
      };
    class Vq {
      constructor(mm) {
        this.store = mm, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Rq, this.timers = []
      }
      onAfterRender(mm, Tm) {
        const fm = performance.now(),
          hm = 0 === this.lastMs ? 0 : Math.min(fm - this.lastMs, 250) / 1e3;
        this.lastMs = fm;
        const {
          fuse: Am,
          blast: am
        } = this.store.get();
        null !== am && am !== this.shownBlast && (this.shownBlast = am, this.startBlast(mm, Tm, am, fm));
        const xm = mm.particlesEnabled();
        null !== Am && Am.endsAt > fm && xm ? this.emitBeacon(mm, Am, hm, fm) : this.beaconBudget = 0, null !== this.cloud && (fm - this.cloud.startMs > 33e3 ? this.disposeCloud(mm) : (this.far.hold(mm), xm && this.emitCloud(mm, hm, fm)))
      }
      dispose(mm) {
        var Tm;
        null === (Tm = this.beacon) || void 0 === Tm || Tm.dispose(), this.beacon = null, this.disposeCloud(mm);
        for (const fm of this.timers) clearTimeout(fm);
        this.timers.length = 0
      }
      emitBeacon(mm, Tm, fm, hm) {
        const Am = Tm.endsAt - hm < 5e3 ? 350 : 1e3,
          am = .5 + .5 * Math.sin(2 * Math.PI * hm / Am);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * am * fm, 4), this.beaconBudget < 1) return;
        const xm = Math.floor(this.beaconBudget);
        this.beaconBudget -= xm;
        const [wm, Dm, im] = Tm.at, Rm = [wm + .5, Dm + 1.1, im + .5];
        this.beacon ??= mm.createParticles(jq, {
          pos: Rm,
          half: Eq
        }), this.beacon.moveTo(Rm), this.beacon.emit(xm)
      }
      startBlast(mm, Tm, fm, hm) {
        var Am;
        null === (Am = this.beacon) || void 0 === Am || Am.dispose(), this.beacon = null, this.disposeCloud(mm);
        const am = (0, Hw.isMobile)() ? .5 : 1;
        this.streams = [Oq, Yq, qq].map((mm => {
          const Tm = Math.round(mm.count * am);
          return {
            spec: mm,
            particles: null,
            rate: Tm / ((mm.toMs - mm.fromMs) / 1e3),
            budget: 0,
            left: Tm
          }
        })), this.cloud = {
          blast: fm,
          startMs: hm
        };
        const xm = Math.max(.25, 1 - fm.distance / (6 * fm.r)),
          wm = fm.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [fm, hm, Am] of oq) Kq(mm, Tm, fm, xm * hm, Am)
        }), wm))
      }
      emitCloud(mm, Tm, fm) {
        const {
          blast: hm,
          startMs: Am
        } = this.cloud, am = fm - Am, [xm, wm, Dm] = hm.at, im = iq(hm.r);
        for (const Rm of this.streams) {
          const {
            spec: fm
          } = Rm;
          if (Rm.left <= 0 || am < fm.fromMs) continue;
          Rm.budget += Rm.rate * Tm;
          const Am = Math.min(Math.floor(Rm.budget), Rm.left);
          if (Am < 1) continue;
          Rm.budget -= Am, Rm.left -= Am;
          const pm = Rm.particles ??= this.createStream(mm, fm, hm);
          if (fm === Oq) {
            const mm = im.stemHalfWidth;
            pm.moveTo([xm, wm + 1, Dm], [mm, 1, mm])
          } else if (fm === Yq) {
            const mm = im.capSpread * Math.min(1, (am - fm.fromMs) / 3e3),
              Tm = Math.sqrt(Math.random()),
              hm = 2 * Math.random() * Math.PI,
              Am = Math.cos(hm) * Tm,
              Rm = Math.sin(hm) * Tm,
              Em = xm + Am * mm,
              om = Dm + Rm * mm,
              Om = im.capThick,
              Ym = wm + im.capHeight + Om * (1 - Tm * Tm) * 2;
            pm.setDirections([.7 * Am, .05, .7 * Rm], [Am, .2, Rm]), pm.moveTo([Em, Ym, om], [Om, Om, Om])
          } else {
            this.ringAngle += 2.39996;
            const mm = Math.cos(this.ringAngle),
              Tm = Math.sin(this.ringAngle);
            pm.setDirections([mm, .05, Tm], [mm, .1, Tm]), pm.moveTo([xm + 2 * mm, wm + .5, Dm + 2 * Tm], [0, .5, 0])
          }
          pm.emit(Am)
        }
      }
      createStream(mm, Tm, fm) {
        const {
          r: hm
        } = fm, Am = Math.max(Tm.life[0], hm / 25), am = Tm === qq ? [.9 * Am, Am] : Tm.life, xm = iq(hm), wm = Tm === qq ? 1 : xm.puffScale, Dm = {
          texture: rY,
          yp: Tm.count + 4,
          minLifeTime: am[0] / pq,
          maxLifeTime: am[1] / pq,
          minSize: Tm.size[0] * wm,
          maxSize: Tm.size[1] * wm,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, Tm.gravity * pq * pq, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: Tm.from[0],
            maxColor: Tm.from[1]
          }, {
            timeFraction: .6,
            minColor: Iq(Tm.from[0], Tm.to[0]),
            maxColor: Iq(Tm.from[1], Tm.to[1])
          }, {
            timeFraction: 1,
            minColor: Tm.to[0],
            maxColor: Tm.to[1]
          }],
          blendMode: Tm.blend
        };
        if (Tm === Oq) {
          const mm = xm.capHeight / ((am[0] + am[1]) / 2);
          Dm.minEmitPower = .9 * mm * pq, Dm.maxEmitPower = 1.05 * mm * pq, Dm.dir1 = [-.1, 1, -.1], Dm.dir2 = [.1, 1, .1]
        } else Tm === Yq ? (Dm.minEmitPower = 1.2, Dm.maxEmitPower = 2, Dm.dir1 = [-1, .05, -1], Dm.dir2 = [1, .2, 1]) : (Dm.minEmitPower = 39.583333333333336, Dm.maxEmitPower = 41.66666666666667, Dm.dir1 = [1, 0, 0], Dm.dir2 = [1, 0, 0]);
        return mm.createParticles(Dm, {
          pos: fm.at
        })
      }
      disposeCloud(mm) {
        for (const fm of this.streams) {
          var Tm;
          null === (Tm = fm.particles) || void 0 === Tm || Tm.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(mm)
      }
    }

    function Iq(mm, Tm) {
      return [(mm[0] + Tm[0]) / 2, (mm[1] + Tm[1]) / 2, (mm[2] + Tm[2]) / 2, .75 * mm[3]]
    }

    function Kq(mm, Tm, fm, hm, Am) {
      try {
        mm.playSound(Tm, fm, hm, Am)
      } catch (am) {
        console.error(am)
      }
    }
    const Qq = {
        yp: 720,
        perS: 100
      },
      nq = {
        yp: 320,
        perS: 44
      };
    class Jq {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(mm, Tm) {
        this.zone = {
          centre: [...mm.centre],
          r: mm.r,
          band: mm.band ? [mm.band[0], mm.band[1]] : void 0
        }, this.endsAt = Tm
      }
      stop() {
        this.zone = null
      }
      lV(mm, Tm) {
        const {
          baf2FalloutMs: fm,
          baf2FalloutAt: hm,
          baf2FalloutR: Am,
          baf2FalloutY: am
        } = mm;
        fm > 0 && hm && void 0 !== Am ? this.start({
          centre: hm,
          r: Am,
          band: am
        }, Tm + fm) : this.stop()
      }
      perS(mm, Tm, fm) {
        const hm = this.zone;
        if (!hm) return 0;
        const Am = this.endsAt - mm;
        return Am <= 0 ? (this.zone = null, 0) : hm.band && (Tm[1] < hm.band[0] || Tm[1] > hm.band[1]) || Math.hypot(Tm[0] - hm.centre[0], Tm[2] - hm.centre[2]) > hm.r ? 0 : fm.perS * Math.min(1, Am / 5e3)
      }
    }
    const cq = [5, 7],
      zq = [24, 8, 24],
      Zq = .5,
      kq = 1 / .6,
      bq = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class Sq {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Hw.isMobile)();
        this.state = new Jq, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(mm) {
          return mm ? nq : Qq
        }(mm)
      }
      startFallout(mm, Tm) {
        this.state.start(mm, Tm)
      }
      stopFallout() {
        this.state.stop()
      }
      lV(mm) {
        this.state.lV(mm, performance.now())
      }
      onAfterRender(mm, Tm) {
        var fm;
        const hm = performance.now(),
          Am = 0 === this.lastMs ? 0 : Math.min(hm - this.lastMs, 250) / 1e3;
        this.lastMs = hm;
        const am = this.state.perS(hm, Tm, this.tier);
        if (am <= 0 || !mm.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + am * Am, am / 4);
        const xm = Math.floor(this.budget);
        if (xm < 1) return;
        this.budget -= xm;
        const wm = this.at;
        wm[0] = Tm[0], wm[1] = Tm[1] + 12, wm[2] = Tm[2];
        const Dm = null !== (fm = this.systems) && void 0 !== fm ? fm : this.create(mm, wm),
          im = this.amounts;
        im[0] = 0, im[1] = 0;
        for (let Rm = 0; Rm < xm; Rm++) im[Math.random() < .3 ? 1 : 0]++;
        for (let Rm = 0; Rm < Dm.length; Rm++) im[Rm] > 0 && (Dm[Rm].moveTo(wm, zq), Dm[Rm].emit(im[Rm]))
      }
      dispose() {
        for (const Tm of null !== (mm = this.systems) && void 0 !== mm ? mm : []) {
          var mm;
          Tm.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(mm, Tm) {
        return this.systems = bq.map((fm => {
          let {
            rgba: [hm, Am, am, xm],
            share: wm
          } = fm;
          const Dm = {
            texture: "square_particle",
            yp: Math.ceil(this.tier.yp * wm),
            minLifeTime: cq[0] / kq,
            maxLifeTime: cq[1] / kq,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Zq, -1, Zq],
            colorGradients: [{
              timeFraction: 0,
              minColor: [hm, Am, am, 0]
            }, {
              timeFraction: .15,
              minColor: [hm, Am, am, xm]
            }, {
              timeFraction: .8,
              minColor: [hm, Am, am, xm]
            }, {
              timeFraction: 1,
              minColor: [hm, Am, am, 0]
            }],
            blendMode: Cw.g.Standard
          };
          return mm.createParticles(Dm, {
            pos: Tm,
            half: zq
          })
        })), this.systems
      }
    }
    const eq = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Nq(mm) {
      const Tm = /\|rot(\d)/.exec(mm);
      return eq[Tm ? Number(Tm[1]) : 1]
    }
    var Gq = fm(649),
      Xq = fm(38570);
    const Pq = new Set(Gq.o);

    function Hq(mm) {
      if (-2 !== mm.count) return null;
      const Tm = um(mm.item);
      return null !== Tm && Pq.has(Tm) ? Tm : null
    }

    function yq(mm) {
      const {
        width: Tm,
        height: fm
      } = (0, Xq.b)(mm).hitBoxDimensions;
      return .55 / Math.max(Tm, fm)
    }

    function Cq(mm, Tm, fm) {
      if (!fm) return !1;
      const hm = mm[0] + .5 - Tm[0],
        Am = mm[1] + .5 - Tm[1],
        am = mm[2] + .5 - Tm[2];
      return hm * hm + Am * Am + am * am <= 576
    }

    function rq(mm, Tm) {
      return Math.atan2(mm[0], mm[2]) + Math.PI + Tm
    }

    function sq(mm, Tm) {
      const fm = 2 * Math.PI;
      return (mm + fm * Tm / 1e4) % fm
    }
    class lq {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = mm, this.now = Tm, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = mm.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(mm, Tm) {
        if (0 === this.farms.size) return;
        const fm = this.now(),
          hm = Number.isNaN(this.frameMs) ? 0 : Math.min(fm - this.frameMs, 100);
        this.frameMs = fm, fm - this.checkedMs >= 1e3 && (this.checkedMs = fm, this.check(mm, Tm));
        for (const Am of this.farms.values()) Am.shown && Am.running && null !== Am.model && hm > 0 && (Am.spin = sq(Am.spin, hm), Am.model.setPose(Am.feet, rq(Am.front, Am.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const mm of this.farms.values()) this.drop(mm);
        this.farms.clear()
      }
      sync() {
        const mm = new Set;
        for (const Tm of this.labels.list()) {
          const fm = Hq(Tm);
          if (null === fm) continue;
          mm.add(Tm.key);
          const hm = this.farms.get(Tm.key);
          if ((null === hm || void 0 === hm ? void 0 : hm.mob) === fm) continue;
          hm && this.drop(hm);
          const [Am, am, xm] = Tm.pos;
          this.farms.set(Tm.key, {
            pos: Tm.pos,
            feet: [Am + .5, am + 1, xm + .5],
            mob: fm,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [Tm, fm] of this.farms) mm.has(Tm) || (this.drop(fm), this.farms.delete(Tm));
        this.checkedMs = -1 / 0
      }
      check(mm, Tm) {
        for (const fm of this.farms.values()) {
          const [hm, Am, am] = fm.pos, xm = BO(mm, fm.pos);
          null !== xm && Xf(xm) === Pm && Cq(fm.pos, Tm, "Air" === BO(mm, [hm, Am + 1, am])) ? (fm.running = xm.endsWith("|Running"), fm.front = Nq(xm), null === fm.model && (fm.model = mm.createMobModel(fm.mob, yq(fm.mob)), null === fm.model) || (fm.model.setPose(fm.feet, rq(fm.front, fm.spin)), fm.shown || (fm.model.setVisible(!0), fm.shown = !0))) : (fm.shown && null !== fm.model && fm.model.setVisible(!1), fm.shown = !1)
        }
      }
      drop(mm) {
        var Tm;
        null === (Tm = mm.model) || void 0 === Tm || Tm.dispose(), mm.model = null, mm.shown = !1
      }
    }
    class Mq {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(mm) {
        var Tm;
        this.island = mm.baf2ColIsland, this.islandSite = (Tm = mm.baf2ColSite) && 8 === Tm.length ? {
          spawnXZ: [Tm[0], Tm[1]],
          coreXZ: [Tm[2], Tm[3]],
          minXZ: [Tm[4], Tm[5]],
          maxXZ: [Tm[6], Tm[7]]
        } : null, this.views = mm.baf2ColList.map((mm => ({
          entry: iA(mm)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(mm) {
        this.status = mm, this.emit()
      }
      onOpen(mm) {
        this.openHeld = mm
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
        return this.views.map((mm => mm.entry))
      }
      entryAtRoot(mm) {
        var Tm;
        return null === (Tm = this.views.find((Tm => {
          let {
            entry: fm
          } = Tm;
          return fm.focus[0] === mm[0] && fm.focus[1] === mm[1] + 1 && fm.focus[2] === mm[2]
        }))) || void 0 === Tm ? void 0 : Tm.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(mm, Tm) {
        return MD(this.entries(), mm, Tm)
      }
      lookSource() {
        return {
          handles: mm => Yh(mm) >= 0 || qh(mm),
          line: (mm, Tm) => this.lookLine(mm, Tm),
          version: () => this.beamsVersion
        }
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const mm of this.listeners) mm()
      }
    }
    const uq = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((mm => mm / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((mm => [mm, mm + 1, mm + 2, mm, mm + 2, mm + 3]))
    };

    function Bq(mm, Tm, fm, hm, Am, am, xm) {
      let wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const Dm = Math.cos(wm),
        im = Math.sin(wm),
        Rm = mm.positions.length / 3,
        {
          positions: pm,
          indices: Em
        } = uq;
      for (let om = 0; om < pm.length; om += 3) {
        const wm = pm[om] * Am,
          Rm = pm[om + 2] * xm;
        mm.positions.push(Tm + wm * Dm + Rm * im, fm + pm[om + 1] * am, hm - wm * im + Rm * Dm)
      }
      for (const om of Em) mm.indices.push(Rm + om)
    }

    function Lq(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return Tm < 1 ? {
        rgb: mm,
        alpha: Tm
      } : {
        rgb: mm,
        alpha: 1,
        opaque: !0
      }
    }
    class vq {
      constructor(mm, Tm) {
        this.style = mm, this.perSource = Tm, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(mm) {
        this.sources = mm, 0 === mm.length && (this.budget = 0)
      }
      DE(mm, Tm, fm) {
        const hm = this.sources.length;
        if (0 !== hm) {
          var Am, am;
          this.budget = Math.min(this.budget + (Am = hm, am = this.perSource, Math.min(Am * am, Ai) * Tm), 2);
          for (let Tm = 0; Tm < hm && this.budget >= 1; Tm++) {
            const Tm = this.sources[this.cursor % hm];
            this.cursor = (this.cursor + 1) % hm;
            if (!(Math.max(Math.abs(Tm.x - fm[0]), Math.abs(Tm.y - fm[1]), Math.abs(Tm.z - fm[2])) > 32)) return this.puff(mm, Tm), void this.budget--
          }
        }
      }
      dispose() {
        var mm;
        null === (mm = this.particles) || void 0 === mm || mm.dispose(), this.particles = null, this.sources = []
      }
      puff(mm, Tm) {
        let {
          x: fm,
          y: hm,
          z: Am,
          h: am,
          faces: xm
        } = Tm;
        const wm = function(mm, Tm, fm, hm, Am) {
            const [am, xm, wm] = Am[Math.floor(Math.random() * Am.length)], Dm = .04, im = (mm, Tm, fm) => mm > 0 ? Tm + fm + Dm : mm < 0 ? Tm - Dm : Tm + .1, Rm = (mm, Tm, fm) => mm > 0 ? Tm + fm + Dm : mm < 0 ? Tm - Dm : Tm + fm - .1, pm = [im(am, mm, 1), im(xm, Tm, hm), im(wm, fm, 1)], Em = [Rm(am, mm, 1), Rm(xm, Tm, hm), Rm(wm, fm, 1)];
            return {
              pos: [(pm[0] + Em[0]) / 2, (pm[1] + Em[1]) / 2, (pm[2] + Em[2]) / 2],
              half: [(Em[0] - pm[0]) / 2, (Em[1] - pm[1]) / 2, (Em[2] - pm[2]) / 2],
              out: [am, xm, wm]
            }
          }(fm, hm, Am, am, xm),
          {
            style: Dm
          } = this,
          im = this.particles ??= mm.createParticles(lY(Dm, Math.ceil(Dm.count * Ai * Dm.life[1]) + 4), wm);
        im.moveTo(wm.pos, wm.half);
        const [Rm, pm, Em] = wm.out, om = Dm.spread;
        im.setDirections([Rm - om, .6 + pm, Em - om], [Rm + om, 1 + pm, Em + om]), im.emit(Dm.count)
      }
    }
    const tq = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Uq {
      constructor() {
        this.green = new vq(xi.green, Ti), this.pink = new vq(xi.pink, fi), this.colliders = [], this.lastMs = 0
      }
      setSources(mm) {
        this.colliders = mm;
        const Tm = [],
          fm = [];
        for (const hm of mm) {
          const [mm, Am, am] = hm.focus;
          Tm.push({
            x: mm,
            y: Am - 1,
            z: am,
            h: 2,
            faces: tq
          });
          for (let Tm = 0; Tm < 4; Tm++) {
            if (!hm.live[Tm]) continue;
            const [mm, Am, am] = Ih(hm.focus, Tm, ih.LASER_D), [xm, , wm] = Vh[Tm], Dm = tq.filter((mm => mm[0] !== xm || mm[2] !== wm || 0 !== mm[1]));
            fm.push({
              x: mm,
              y: Am,
              z: am,
              h: 1,
              faces: Dm
            })
          }
        }
        this.green.setSources(Tm), this.pink.setSources(fm)
      }
      onAfterRender(mm) {
        const Tm = performance.now(),
          fm = 0 === this.lastMs ? 0 : Math.min(Tm - this.lastMs, 250) / 1e3;
        if (this.lastMs = Tm, 0 === this.colliders.length || !mm.particlesEnabled()) return;
        const hm = mm.getCameraPosition();
        this.green.DE(mm, fm, hm), this.pink.DE(mm, fm, hm)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const dq = 1.04,
      gq = Lq([1, 120 / 255, 220 / 255]),
      Wq = Lq([1, .25, .25], .35);
    class Fq {
      constructor(mm) {
        this.store = mm, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Uq
      }
      onAfterRender(mm) {
        this.store.version() !== this.builtVersion && this.rebuild(mm);
        const Tm = performance.now();
        for (const fm of this.beams) {
          const hm = 1 + .35 * Math.sin(Tm / 700 * Math.PI * 2 + fm.phase);
          mm.setGameMesh(fm.mesh, {
            scale: [fm.alongX ? 1 : hm, hm, fm.alongX ? hm : 1]
          })
        }
        this.glow.onAfterRender(mm)
      }
      dispose(mm) {
        this.clear(mm), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(mm) {
        this.clear(mm), this.builtVersion = this.store.version();
        const Tm = [];
        for (const {
            entry: fm
          }
          of this.store.colliders()) fm.on && fm.live.some(Boolean) && (this.addBeams(mm, fm), Tm.push(fm)), fm.blockers.length > 0 && this.addMarkers(mm, fm);
        this.glow.setSources(Tm)
      }
      addBeams(mm, Tm) {
        const [fm, hm, Am] = Tm.focus, am = mi - .25, xm = (.25 + mi) / 2;
        for (let wm = 0; wm < 4; wm++) {
          if (!Tm.live[wm]) continue;
          const [Dm, , im] = Vh[wm], Rm = 0 !== Dm, pm = {
            positions: [],
            indices: []
          };
          Bq(pm, 0, 0, 0, Rm ? am : .2, .2, Rm ? .2 : am);
          const Em = [fm + .5 + Dm * xm, hm + .5, Am + .5 + im * xm],
            om = mm.createGameMesh(pm, gq, Em);
          this.meshes.push(om), this.beams.push({
            mesh: om,
            alongX: Rm,
            phase: wm * Math.PI / 2
          })
        }
      }
      addMarkers(mm, Tm) {
        const fm = Tm.blockers[0],
          hm = {
            positions: [],
            indices: []
          };
        for (const [Am, am, xm] of Tm.blockers) Bq(hm, Am - fm[0] + .5, am - fm[1] + .5, xm - fm[2] + .5, dq, dq, dq);
        this.meshes.push(mm.createGameMesh(hm, Wq, fm))
      }
      clear(mm) {
        for (const Tm of this.meshes) mm.disposeGameMesh(Tm);
        this.meshes = [], this.beams = []
      }
    }
    const mj = [.56, .83, 1],
      Tj = [1, .73, .08],
      fj = [1, .25, .25],
      hj = [.85, .85, .85],
      Aj = [.3, .45, .6];

    function aj(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const xm = Am / 2,
        wm = Am + am;
      for (const Dm of [-xm, xm])
        for (const Am of [-xm, xm]) Bq(mm, Tm, fm + Dm, hm + Am, wm, am, am), Bq(mm, Tm + Dm, fm, hm + Am, am, wm, am), Bq(mm, Tm + Dm, fm + Am, hm, am, am, wm)
    }

    function xj(mm) {
      return Tm => mm.isBlockInLoadedChunk(Tm[0], Tm[1], Tm[2]) && 0 === mm.getBlockId(Tm[0], Tm[1], Tm[2])
    }

    function wj(mm) {
      return mm.map((mm => {
        let {
          free: Tm,
          blocked: fm,
          gaps: hm,
          supports: Am
        } = mm;
        return `${Tm.join(";")}|${fm.join(";")}|${hm.join(";")}|${Am.join(";")}`
      })).join("/")
    }

    function Dj(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const am = Tm[0],
        xm = {
          positions: [],
          indices: []
        };
      for (const [wm, Dm, im] of Tm) aj(xm, wm - am[0] + .5, Dm - am[1] + .5, im - am[2] + .5, hm, Am);
      return mm.createGameMesh(xm, fm, am)
    }
    class ij {
      constructor(mm) {
        this.store = mm, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(mm, Tm, fm) {
        var hm;
        const Am = null === (hm = mm.MTm(Tm)) || void 0 === hm ? void 0 : hm.name;
        if (Am !== ph && Am !== Rh) return void("" !== this.shownKey && this.show(mm, "", []));
        const am = performance.now();
        if (am - this.lastCheckMs >= 200 && (this.lastCheckMs = am, Am === ph ? this.check(mm, fm) : this.preview(mm, fm)), this.pulses.length > 0) {
          const Tm = 1 + .12 * Math.sin(am / 1e3 * 1.25 * Math.PI * 2),
            fm = [Tm, Tm, Tm];
          for (const hm of this.pulses) mm.setGameMesh(hm, {
            scale: fm
          })
        }
      }
      dispose(mm) {
        this.clear(mm), this.shownKey = ""
      }
      check(mm, Tm) {
        const fm = xj(mm),
          hm = [];
        for (const {
            entry: am
          }
          of this.store.colliders()) {
          am.focus.every(((mm, fm) => Math.abs(mm + .5 - Tm[fm]) <= ih.GHOST_REACH)) && hm.push(FD(am, fm))
        }
        const Am = wj(hm);
        Am !== this.shownKey && this.show(mm, Am, hm)
      }
      preview(mm, Tm) {
        const fm = mm.getTargetedBlock(),
          hm = fm ? [fm.ep[0], fm.ep[1], fm.ep[2]] : null,
          Am = null !== hm && hm.every(((mm, fm) => Math.abs(mm + .5 - Tm[fm]) <= 8)),
          am = this.store.site(),
          xm = Am && am ? function(mm, Tm, fm) {
            const hm = jh(mm);
            if (!hm.every(Tm)) return null;
            const Am = nh(mm, fm);
            return {
              column: hm,
              spots: FD({
                focus: hm[1],
                lasers: [!1, !1, !1, !1],
                open: Am,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, Tm),
              fits: Am.filter(Boolean).length >= ih.MIN_SPOTS
            }
          }(hm, xj(mm), am) : null,
          wm = xm ? [xm.spots] : [],
          Dm = xm ? `preview ${hm.join(",")}|${xm.fits}|${wj(wm)}` : "";
        var im, Rm;
        Dm !== this.shownKey && this.show(mm, Dm, wm, null !== (im = null === xm || void 0 === xm ? void 0 : xm.column) && void 0 !== im ? im : [], null === (Rm = null === xm || void 0 === xm ? void 0 : xm.fits) || void 0 === Rm || Rm)
      }
      show(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(mm), this.shownKey = Tm, hm.length > 0 && this.meshes.push(Dj(mm, hm, Lq(Am ? hj : fj)));
        for (const {
            free: am,
            blocked: xm,
            gaps: wm,
            supports: Dm
          }
          of fm) {
          for (const [Tm, fm, hm] of am) {
            const Am = {
              positions: [],
              indices: []
            };
            aj(Am, 0, 0, 0);
            const am = mm.createGameMesh(Am, Lq(mj), [Tm + .5, fm + .5, hm + .5]);
            this.meshes.push(am), this.pulses.push(am)
          }
          xm.length > 0 && this.meshes.push(Dj(mm, xm, Lq(Tj))), wm.length > 0 && this.meshes.push(Dj(mm, wm, Lq(fj), 1.06, .07)), Dm.length > 0 && this.meshes.push(Dj(mm, Dm, Lq(Aj)))
        }
      }
      clear(mm) {
        for (const Tm of this.meshes) mm.disposeGameMesh(Tm);
        this.meshes = [], this.pulses = []
      }
    }
    class Rj {
      constructor() {
        this.stored = new Map, this.ni = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(mm) {
        if (!mm.baf2TermOpen) return !1;
        mm.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [Tm, fm] of mm.baf2TermItems) fm > 0 ? this.stored.set(Tm, fm) : this.stored.delete(Tm);
        if (mm.baf2TermHeld && (this.ni = new Map(mm.baf2TermHeld)), this.pending = this.pending.filter((Tm => Tm.seq > mm.baf2TermAcked)), this.silos = mm.baf2TermSilos, this.readOnly = mm.baf2TermReadOnly, this.pocket = !0 === mm.baf2TermPocket, mm.baf2TermReset) this.resort();
        else {
          const mm = new Set(this.order);
          for (const Tm of this.stored.keys()) mm.has(Tm) || this.order.push(Tm)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((mm, Tm) => this.amount(Tm) - this.amount(mm) || mm.localeCompare(Tm))), this.changed()
      }
      take(mm, Tm) {
        const fm = DT(mm, this.amount(Tm));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Tm,
          amount: fm,
          put: !1
        }), this.recents = [Tm, ...this.recents.filter((mm => mm !== Tm))].slice(0, 6), this.changed(), hT(this.seq, mm, Tm)
      }
      put(mm, Tm) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Tm,
          amount: DT(mm, this.heldAmount(Tm)),
          put: !0
        }), this.changed(), AT(this.seq, mm, Tm)
      }
      putAll() {
        this.seq++;
        for (const mm of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: mm,
          amount: this.heldAmount(mm),
          put: !0
        });
        return this.changed(), aT(this.seq)
      }
      amount(mm) {
        var Tm;
        let fm = null !== (Tm = this.stored.get(mm)) && void 0 !== Tm ? Tm : 0;
        for (const hm of this.pending) hm.item === mm && (fm += hm.put ? hm.amount : -hm.amount);
        return Math.max(0, fm)
      }
      heldAmount(mm) {
        var Tm;
        let fm = null !== (Tm = this.ni.get(mm)) && void 0 !== Tm ? Tm : 0;
        for (const hm of this.pending) hm.put && hm.item === mm && (fm -= hm.amount);
        return Math.max(0, fm)
      }
      heldItems() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((Tm => Tm === mm || this.heldAmount(Tm) > 0))
      }
      items() {
        return this.order.filter((mm => this.amount(mm) > 0))
      }
      recent() {
        return this.recents.filter((mm => this.amount(mm) > 0))
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
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      changed() {
        this.version++;
        for (const mm of this.listeners) mm()
      }
    }
    var pj = fm(38518);
    const Ej = {
      isBlock: mm => void 0 !== em.i[mm],
      harvestType: mm => {
        var Tm;
        return null === (Tm = em.i[mm]) || void 0 === Tm ? void 0 : Tm.harvestType
      },
      harvestLevel: mm => {
        var Tm;
        return null === (Tm = em.i[mm]) || void 0 === Tm ? void 0 : Tm.harvestLevel
      },
      dropsNothing: mm => {
        var Tm;
        return null === (null === (Tm = em.i[mm]) || void 0 === Tm ? void 0 : Tm.drops)
      },
      displayName: mm => {
        var Tm;
        return null === (Tm = Tw.p[mm]) || void 0 === Tm ? void 0 : Tm.displayName
      },
      description: mm => {
        var Tm;
        return null === (Tm = Tw.p[mm]) || void 0 === Tm ? void 0 : Tm.description
      },
      harvests: mm => {
        var Tm;
        return null === (Tm = Tw.p[mm]) || void 0 === Tm ? void 0 : Tm.harvests
      },
      level: mm => {
        var Tm;
        return null === (Tm = Tw.p[mm]) || void 0 === Tm ? void 0 : Tm.level
      }
    };

    function oj(mm, Tm, fm) {
      return function(mm, Tm, fm, hm) {
        var Am, am;
        const xm = Tm.split("|")[0],
          wm = mm.isBlock(Tm) ? Tm : mm.isBlock(xm) ? xm : null;
        if (null === wm || "rock" !== mm.harvestType(wm) || mm.dropsNothing(wm) && !lh.has(xm)) return null;
        const Dm = fm && "rock" === mm.harvests(fm) ? null !== (Am = mm.level(fm)) && void 0 !== Am ? Am : 0 : null,
          im = null !== (am = null !== hm && void 0 !== hm ? hm : mm.harvestLevel(wm)) && void 0 !== am ? am : 0;
        return (null !== Dm ? im <= Dm : 0 === mm.harvestLevel(wm)) ? null : Sh(mm, im)
      }(Ej, mm, Tm, fm)
    }

    function Oj(mm, Tm) {
      return function(mm, Tm, fm) {
        if (Tm === bh[0]) return [(0, Xm.Vd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Xm.J.whiteUiText)];
        const hm = fm.split("|")[0],
          Am = mm.isBlock(hm) ? mm.displayName(hm) : void 0,
          am = "string" === typeof Am ? Am : Am && "translationKey" in Am ? `$t(${Am.translationKey})` : hm;
        return [(0, Xm.Vd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: am
          }
        }, Xm.J.whiteUiText), (0, Xm.Vd)({
          translationKey: `item:${(0,Xm.ue)(Tm)}`
        }, Xm.J.yellowUiText)]
      }(Ej, mm, Tm)
    }
    const Yj = "buildAFactory2Game:";
    const qj = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function jj(mm) {
      return mm.endsWith(" Ore")
    }
    const Vj = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Ij = [],
      Kj = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Vj,
        plan: null,
        atomic: Ij
      },
      Qj = "buildAFactory2Game:",
      nj = new Set(["Splitter", "Sorting Gate"]),
      Jj = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class cj {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = mm, this.planAt = Tm, this.tierOf = fm, this.jR = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.ni = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Kj, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(mm, Tm, fm) {
        var hm, Am, am;
        let xm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const wm = null !== (hm = null === (Am = mm.MTm(Tm)) || void 0 === Am ? void 0 : Am.name) && void 0 !== hm ? hm : null,
          Dm = mm.isPlayerCrouching(Tm),
          im = 0 === fm ? null : this.resolve(mm, fm),
          Rm = null !== im && null !== xm && nj.has(im.rootName) && function(mm, Tm) {
            return Jj.some((fm => {
              let [hm, Am] = fm;
              const am = mm.getBlockId(Tm[0] + hm, Tm[1], Tm[2] + Am);
              return 0 !== am && "Express Belt" === mm.getMetaInfo(am).rootName
            }))
          }(mm, xm),
          pm = this.updatePlan(0 === fm ? null : xm),
          Em = this.tierOf(),
          om = null === xm ? null : (0, pj.f)(fm),
          Om = null !== om && null !== xm && (0, pj.i)(function(mm) {
            return (Tm, fm, hm) => mm.getBlockId(Tm, fm, hm)
          }(mm), xm[0], xm[1], xm[2], om),
          Ym = this.readAfloat(mm, fm, xm);
        if (fm === this.jR && Om === this.missesMaker && Ym === this.afloat && wm === this.ni && Dm === this.crouching && Rm === this.express && Em === this.tier && !pm && (!this.targetsLive || !this.liveMoved(xm))) return;
        this.jR = fm, this.missesMaker = Om, this.afloat = Ym, this.ni = wm, this.crouching = Dm, this.express = Rm;
        const qm = Rm && im ? function(mm) {
          if (null === mm.info) return null;
          return mm.express ??= {
            ...mm.info,
            detail: `${Qj}lookKeepsUpExpress`,
            detailItem: null
          }, mm.express
        }(im) : null !== im && Om && null !== om ? this.besideMaker(im, fm, om) : null !== im && Ym ? this.hanging(im) : null !== (am = null === im || void 0 === im ? void 0 : im.info) && void 0 !== am ? am : null;
        this.tier = Em;
        const jm = im && qm ? function(mm, Tm) {
          var fm, hm;
          const Am = em.i[mm];
          if (!mm.endsWith(" Ore") || "rock" !== (null === Am || void 0 === Am ? void 0 : Am.harvestType) || 0 === Am.harvestLevel) return null;
          const am = null !== (fm = Am.harvestLevel) && void 0 !== fm ? fm : 0,
            xm = Tm ? Tw.p[Tm] : void 0;
          if ("rock" === (null === xm || void 0 === xm ? void 0 : xm.harvests) && (null !== (hm = xm.level) && void 0 !== hm ? hm : 0) >= am) return null;
          const wm = (Dm = am, Sh(Ej, Dm));
          var Dm;
          if (null === wm) return null;
          const im = aa(wm),
            Rm = /^[AEIOU]/.test(wm) ? "An" : "";
          if ("rock" === (null === xm || void 0 === xm ? void 0 : xm.harvests) && Tm) return {
            key: `${Qj}lookToolTooWeak${Rm}`,
            ni: aa(Tm),
            needed: im
          };
          return {
            key: wm === bh[0] ? `${Qj}lookNeedAnyPickaxe` : `${Qj}lookNeedPickaxe${Rm}`,
            ni: null,
            needed: im
          }
        }(im.rootName, wm) : null;
        this.targetsLive = !0 === (null === im || void 0 === im ? void 0 : im.live) && null !== xm;
        let Vm = null;
        this.targetsLive && im && xm && this.live && (this.livePos[0] = xm[0], this.livePos[1] = xm[1], this.livePos[2] = xm[2], this.liveVersion = this.live.version(), Vm = this.live.line(im.rootName, xm));
        const Im = null === qm ? Vj : function(mm, Tm, fm) {
            const hm = function(mm, Tm, fm) {
              const hm = Hf(mm);
              if (null === hm) return null;
              const Am = `${Yj}lookPortMode_${hm}`,
                am = Bh(Tm);
              if (am && fm) return {
                mode: null,
                detail: Am,
                next: `${Yj}lookWrenchPickUp`,
                nextState: null
              };
              const xm = yf(mm),
                wm = null === xm ? null : Hf(xm);
              return null === wm ? {
                mode: null,
                detail: Am,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Am,
                next: am ? `${Yj}lookWrenchNext` : `${Yj}lookPortWrench`,
                nextState: `${Yj}lookPortState_${wm}`
              }
            }(mm, Tm, fm);
            if (null !== hm) return hm;
            const Am = aA(mm, Tm, fm);
            return null === Am.mode && null === Am.next ? Vj : Am
          }(mm.blockIdToBlockName(fm), wm, Dm),
          Km = this.plan,
          Qm = im && qm ? this.rowsOf(im.rootName, Em) : Ij,
          nm = this.snapshot;
        if (!(null === qm ? !nm.visible : nm.visible && qm === nm.info && (Jm = jm, cm = nm.tool, Jm === cm || null !== Jm && null !== cm && Jm.key === cm.key && Jm.ni === cm.ni && Jm.needed === cm.needed) && function(mm, Tm) {
            return mm === Tm || null !== mm && null !== Tm && mm.key === Tm.key && JSON.stringify([mm.params, mm.keys]) === JSON.stringify([Tm.params, Tm.keys])
          }(Vm, nm.live) && function(mm, Tm) {
            return mm.mode === Tm.mode && mm.detail === Tm.detail && mm.next === Tm.next && mm.nextState === Tm.nextState
          }(Im, nm.wrench) && fY(Km, nm.plan) && Qm === nm.atomic)) {
          var Jm, cm;
          this.snapshot = null === qm ? {
            ...nm,
            visible: !1
          } : {
            info: qm,
            visible: !0,
            tool: jm,
            live: Vm,
            wrench: Im,
            plan: Km,
            atomic: Qm
          };
          for (const mm of this.listeners) mm()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Kj, this.jR = 0, this.ni = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(mm, Tm, fm) {
        if (null === fm || 0 === Tm || !wm() || !jj(this.resolve(mm, Tm).rootName)) return !1;
        const hm = `${fm[0]},${fm[1]},${fm[2]},${Tm}`,
          Am = performance.now();
        return hm === this.afloatKey && Am - this.afloatAt < zj ? this.afloat : (this.afloatKey = hm, this.afloatAt = Am, function(mm, Tm) {
          for (const [fm, hm, Am] of qj) {
            const am = Tm(mm[0] + fm, mm[1] + hm, mm[2] + Am);
            if (void 0 === am || null !== am && !jj(am)) return !1
          }
          return !0
        }(fm, ((Tm, fm, hm) => function(mm, Tm, fm, hm) {
          if (!mm.isBlockInLoadedChunk(Tm, fm, hm)) return;
          const Am = mm.getBlockId(Tm, fm, hm);
          return 0 === Am ? null : mm.getMetaInfo(Am).rootName
        }(mm, Tm, fm, hm))))
      }
      liveMoved(mm) {
        var Tm;
        const {
          livePos: fm
        } = this;
        return null === mm || mm[0] !== fm[0] || mm[1] !== fm[1] || mm[2] !== fm[2] || (null === (Tm = this.live) || void 0 === Tm ? void 0 : Tm.version()) !== this.liveVersion
      }
      updatePlan(mm) {
        const Tm = null === mm ? "" : mm.join(","),
          fm = performance.now();
        if (Tm === this.planPos && fm - this.planMs < 250) return !1;
        this.planPos = Tm, this.planMs = fm;
        const hm = null === mm ? null : this.planAt([mm[0], mm[1], mm[2]]),
          Am = !fY(hm, this.plan);
        return this.plan = hm, Am
      }
      besideMaker(mm, Tm, fm) {
        let {
          info: hm
        } = mm;
        if (null === hm) return null;
        let Am = this.besideMakerById.get(Tm);
        if (void 0 === Am) {
          const mm = "cryo" === fm ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Am = {
            ...hm,
            detail: `${Qj}${mm}`,
            detailItem: null
          }, this.besideMakerById.set(Tm, Am)
        }
        return Am
      }
      hanging(mm) {
        let {
          info: Tm,
          rootName: fm
        } = mm;
        if (null === Tm) return null;
        let hm = this.afloatByRoot.get(fm);
        return void 0 === hm && (hm = {
          ...Tm,
          detail: `${Qj}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(fm, hm)), hm
      }
      rowsOf(mm, Tm) {
        if (null === Tm) return Ij;
        const fm = `${mm}|${Tm}`;
        let hm = this.rowsByKey.get(fm);
        if (void 0 === hm) {
          const Am = function(mm, Tm) {
            var fm;
            if (!(mm in PT)) return [];
            const hm = null !== (fm = HT[mm]) && void 0 !== fm ? fm : [],
              Am = new Map;
            for (const xm of Ba(mm, Tm))
              if ((hm.includes(xm) || ua(xm.output) && la(xm.output) > gm(mm)) && la(xm.output) <= Tm) {
                var am;
                const mm = null !== (am = Am.get(xm.output)) && void 0 !== am ? am : [];
                mm.push(xm.input), Am.set(xm.output, mm)
              } return va([...Am], (mm => {
              let [Tm] = mm;
              return -la(Tm)
            })).map((mm => {
              let [Tm, fm] = mm;
              return {
                output: Tm,
                inputs: fm
              }
            }))
          }(mm, Tm);
          hm = Am.length > 0 ? Am : Ij, this.rowsByKey.set(fm, hm)
        }
        return hm
      }
      resolve(mm, Tm) {
        const {
          rootId: fm,
          rootName: hm
        } = mm.getMetaInfo(Tm), Am = (0, qf.k)(hm) ? Tm : fm;
        let am = this.byRootId.get(Am);
        const xm = wm();
        if (void 0 === am || am.nuclear !== xm) {
          var Dm;
          const fm = function(mm) {
            return rh(Ej, mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm)
          }(hm, mm.blockIdToBlockName(Tm));
          am = {
            info: fm,
            rootName: hm,
            live: null !== fm && !0 === (null === (Dm = this.live) || void 0 === Dm ? void 0 : Dm.handles(hm)),
            nuclear: xm
          }, this.byRootId.set(Am, am)
        }
        return am
      }
    }
    const zj = 500;
    const Zj = (0, hm.memo)((function(mm) {
      var Tm, fm;
      let {
        store: Am
      } = mm;
      const {
        t: am
      } = (0, SA.A)(), [xm, wm] = (0, hm.useState)((() => Am.get()));
      (0, hm.useEffect)((() => (wm(Am.get()), Am.subscribe((() => {
        wm(Am.get())
      })))), [Am]);
      const {
        openInGameMenuName: Dm,
        openEverythingMenuName: im,
        isTouchScreen: Rm
      } = (0, nA.m)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: pm,
        tool: Em,
        live: om,
        wrench: Om,
        atomic: Ym
      } = xm, qm = xm.visible && null === Dm && null === im;
      if (null === pm) return null;
      const jm = null !== Om.detail ? am(Om.detail) : null !== (Tm = xm.plan) && void 0 !== Tm && Tm.ctrl ? am("buildAFactory2Game:lookPlanCtrl") : null !== pm.detail ? am(pm.detail, null === pm.detailItem ? void 0 : {
        item: am(pm.detailItem)
      }) : null;
      return (0, ka.jsxs)("div", {
        className: zA()("Baf2LookTarget", {
          Visible: qm
        }),
        "aria-hidden": !qm,
        children: [(0, ka.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: am(pm.name)
        }), null !== xm.plan && (0, ka.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: am(xm.plan.key, {
            kind: am(xm.plan.kindKey),
            w: String(xm.plan.w),
            h: String(xm.plan.h),
            d: String(xm.plan.d),
            count: String(xm.plan.count)
          })
        }), void 0 !== (null === (fm = xm.plan) || void 0 === fm ? void 0 : fm.why) && (0, ka.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: am(xm.plan.why)
        }), null !== Om.mode && (0, ka.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: am(Om.mode)
        }), null !== Em ? (0, ka.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: am(Em.key, {
            item: am(Em.needed),
            ni: null === Em.ni ? "" : am(Em.ni)
          })
        }) : null !== om ? (0, ka.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: am(om.key, wi(am, om))
        }) : null !== jm && (0, ka.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: jm
        }), Ym.length > 0 && (0, ka.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: am("buildAFactory2Game:lookAtomicRecipes", {
            list: Ym.map((mm => {
              let {
                output: Tm,
                inputs: fm
              } = mm;
              const hm = fm.length > 1 ? ` ${am("buildAFactory2Game:recipeMore",{count:String(fm.length-1)})}` : "";
              return `${am(aa(fm[0]))}${hm} \u2192 ${am(aa(Tm))}`
            })).join(", ")
          })
        }), null !== Om.next && (0, ka.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: am(Om.next, {
            state: null === Om.nextState ? "" : am(Om.nextState),
            use: am(Rm ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var kj = fm(38611);
    const bj = [],
      Sj = [
        [0, -1, 0]
      ];

    function ej(mm) {
      const Tm = [mm];
      for (let fm = 1; fm <= 4; fm++) fm > 1 && Tm.push(`${mm}|meta|rot${fm}`), Tm.push(`${mm}|meta|rot${fm}|Running`);
      return Tm
    }

    function Nj(mm, Tm) {
      return [Math.floor(mm[0] / Tm), Math.floor(mm[1] / Tm), Math.floor(mm[2] / Tm)]
    }

    function Gj(mm, Tm, fm) {
      return `${mm},${Tm},${fm}`
    }

    function Xj(mm) {
      const Tm = mm.split("|")[0];
      if (!pf(Tm)) return bj;
      const fm = PT[Tm];
      if (ff(fm)) return Sj;
      const hm = Nq(mm);
      return hf(fm) ? [
        [-hm[0], -hm[1], -hm[2]]
      ] : ZA(fm) ? function(mm, Tm) {
        const fm = mm[0] - 2 * Tm[0],
          hm = mm[2] - 2 * Tm[2],
          Am = [];
        for (let am = -1; am <= 1; am++)
          for (let Tm = -1; Tm <= 1; Tm++) Am.push([fm + am, mm[1], hm + Tm]);
        return Am
      }([0, 0, 0], hm) : bj
    }
    const Pj = [.5, .5, .5],
      Hj = [.2, .8, .3],
      yj = [.45, 1, .5];
    class Cj {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(mm) {
        this.indexed = !0;
        for (const Tm of bT)
          for (const fm of ej(Tm)) {
            const Tm = mm.blockNameToBlockId(fm, !0),
              hm = Xj(fm);
            null !== Tm && hm.length > 0 && (this.offsetsList.push(hm), this.offsetsIndexById[Tm] = this.offsetsList.length)
          }
      }
      onAfterRender(mm, Tm) {
        this.indexed || this.index(mm);
        const fm = performance.now();
        if (fm - this.lastCheckMs < 100) return;
        this.lastCheckMs = fm, this.checks++;
        const hm = JO.f.MO,
          [Am, am, xm] = Nj(Tm, hm);
        let wm = !1;
        const Dm = [];
        let im = 0;
        for (let Rm = Am - 2; Rm <= Am + 2; Rm++)
          for (let Tm = am - 1; Tm <= am + 1; Tm++)
            for (let Am = xm - 2; Am <= xm + 2; Am++) {
              const am = im++,
                xm = Gj(Rm, Tm, Am),
                pm = mm.getChunkVersion(Rm, Tm, Am);
              let Em = this.chunks.get(xm);
              null !== pm ? (Em || (Em = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(xm, Em)), Em.seenAt = this.checks, Em.checkedVersion !== pm && (Em.checkedVersion = pm, wm = !0), Em.scannedVersion !== pm && fm - Em.scannedAt >= 500 && Dm.push({
                slot: am,
                entry: Em,
                origin: [Rm * hm, Tm * hm, Am * hm]
              })) : (wm ||= void 0 !== Em, this.chunks.delete(xm))
            }
        this.scanDue(mm, Dm) && (wm = !0);
        for (const [Rm, pm] of this.chunks) pm.seenAt !== this.checks && (wm ||= pm.machines.length > 0, this.chunks.delete(Rm));
        for (const Rm of this.chunks.values())
          for (const [Tm, fm, hm] of Rm.cellChunks)(Math.abs(Tm - Am) > 2 || Math.abs(fm - am) > 1 || Math.abs(hm - xm) > 2) && this.watchCellChunk(mm, Tm, fm, hm) && (wm = !0);
        for (const [Rm, pm] of this.cellChunks) pm.seenAt !== this.checks && this.cellChunks.delete(Rm);
        wm && this.refresh(mm)
      }
      dispose(mm) {
        this.clearMeshes(mm), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(mm, Tm) {
        const fm = Math.max(Tm.findIndex((mm => {
          let {
            slot: Tm
          } = mm;
          return Tm >= this.scanFrom
        })), 0);
        let hm = 96;
        for (let Am = 0; Am < Tm.length; Am++) {
          const {
            slot: am,
            entry: xm,
            origin: wm
          } = Tm[(fm + Am) % Tm.length];
          if (hm -= this.scan(mm, xm, wm), hm <= 0) {
            this.scanFrom = am + 1;
            break
          }
        }
        return Tm.length > 0
      }
      scan(mm, Tm, fm) {
        let [hm, Am, am] = fm;
        const xm = JO.f.MO,
          wm = this.hits;
        wm.length = 0;
        const Dm = mm.scanBlocks(hm, Am, am, hm + xm, Am + xm, am + xm, this.offsetsIndexById, wm),
          im = [];
        for (let Rm = 0; Rm < wm.length; Rm += 4) im.push({
          pos: [wm[Rm], wm[Rm + 1], wm[Rm + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[wm[Rm + 3]] - 1]
        });
        return Tm.machines = im, Tm.cellChunks = function(mm, Tm) {
          const fm = new Set,
            hm = [];
          for (const {
              pos: Am,
              offsets: am
            }
            of mm)
            for (const [mm, xm, wm] of am) {
              const am = Nj([Am[0] + mm, Am[1] + xm, Am[2] + wm], Tm),
                Dm = Gj(...am);
              fm.has(Dm) || (fm.add(Dm), hm.push(am))
            }
          return hm
        }(im, xm), Tm.scannedVersion = Tm.checkedVersion, Tm.scannedAt = performance.now(), Math.max(Dm, 1)
      }
      watchCellChunk(mm, Tm, fm, hm) {
        const Am = Gj(Tm, fm, hm),
          am = mm.getChunkVersion(Tm, fm, hm),
          xm = this.cellChunks.get(Am);
        return null === am ? this.cellChunks.delete(Am) : (null === xm || void 0 === xm ? void 0 : xm.version) === am ? (xm.seenAt = this.checks, !1) : (this.cellChunks.set(Am, {
          version: am,
          seenAt: this.checks
        }), !0)
      }
      refresh(mm) {
        const Tm = function(mm, Tm) {
            const fm = new Set,
              hm = [];
            for (const {
                pos: Am,
                offsets: am
              }
              of mm)
              for (const [mm, xm, wm] of am) {
                const am = Am[0] + mm,
                  Dm = Am[1] + xm,
                  im = Am[2] + wm,
                  Rm = `${am},${Dm},${im}`;
                fm.has(Rm) || (fm.add(Rm), Tm(am, Dm, im) && hm.push([am, Dm, im]))
              }
            return hm
          }([...this.chunks.values()].flatMap((mm => mm.machines)), ((Tm, fm, hm) => mm.isBlockInLoadedChunk(Tm, fm, hm) && 0 === mm.getBlockId(Tm, fm, hm))),
          fm = Tm.join(";");
        fm !== this.shownKey && (this.shownKey = fm, this.clearMeshes(mm), Tm.length > 0 && (this.meshes = [this.build(mm, Tm, !1), this.build(mm, Tm, !0)]))
      }
      build(mm, Tm, fm) {
        const hm = Tm[0],
          Am = [],
          am = [];
        for (const [xm, wm, Dm] of Tm)(0, kj.c)(Am, am, [xm - hm[0] + .5, wm - hm[1] + .5, Dm - hm[2] + .5], Pj, fm);
        return mm.createGameMesh({
          positions: Am,
          indices: am
        }, {
          rgb: fm ? yj : Hj,
          alpha: .4
        }, hm)
      }
      clearMeshes(mm) {
        for (const Tm of this.meshes) mm.disposeGameMesh(Tm);
        this.meshes = []
      }
    }
    const rj = 1 / .6,
      sj = 200,
      lj = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Mj = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      uj = 2 * Math.PI / 3;
    class Bj {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lj;
        this.style = mm, this.particles = null, this.points = new Float32Array(800), this.budget = sj, this.lastMs = 0
      }
      static blade() {
        return new Bj(Mj)
      }
      lV(mm, Tm) {
        const fm = Math.min(Tm.arcStruck, Tm.arcPoints.length);
        this.draw(mm, [Tm.arcFrom, ...Tm.arcPoints], Tm.arcPoints.slice(0, fm))
      }
      onBlade(mm, Tm) {
        const [fm, hm, Am] = Tm.bladeCentre, [am, xm] = Tm.bladeFacing, wm = fm - 1.5 * am, Dm = Am - 1.5 * xm, im = Math.atan2(xm, am), Rm = [];
        for (let pm = 0; pm <= 8; pm++) {
          const mm = im - uj / 2 + uj * pm / 8;
          Rm.push([wm + 2.5 * Math.cos(mm), hm, Dm + 2.5 * Math.sin(mm)])
        }
        this.draw(mm, Rm, Tm.bladeStruck)
      }
      dispose() {
        var mm;
        null === (mm = this.particles) || void 0 === mm || mm.stop(), this.particles = null
      }
      draw(mm, Tm, fm) {
        if (!mm.particlesEnabled() || Tm.length < 2) return;
        const hm = performance.now();
        this.budget = Math.min(sj, this.budget + (hm - this.lastMs) / 1e3 * sj), this.lastMs = hm;
        const Am = [];
        let am = 0,
          xm = Tm[0];
        for (const jm of Tm.slice(1)) {
          const mm = Math.min(48, Math.round(Math.hypot(jm[0] - xm[0], jm[1] - xm[1], jm[2] - xm[2]) * this.style.perBlock));
          Am.push([xm, jm, mm]), am += mm, xm = jm
        }
        const wm = fm.length;
        am += 10 * wm;
        const Dm = am > this.budget ? this.budget / am : 1;
        if (0 === am || Dm * am < 1) return;
        const im = Tm[0],
          [Rm, pm, Em] = im,
          om = this.points;
        let Om = 0;
        const Ym = (mm, Tm, fm, hm) => {
          const Am = 4 * Om;
          om[Am] = mm - Rm, om[Am + 1] = Tm - pm, om[Am + 2] = fm - Em, om[Am + 3] = hm, Om++
        };
        Am.forEach(((mm, Tm) => {
          let [fm, hm, Am] = mm;
          const am = Math.min(Math.floor(Am * Dm), sj - Om),
            xm = Math.hypot(hm[0] - fm[0], hm[1] - fm[1], hm[2] - fm[2]),
            wm = 0 === Tm && xm > 0 ? Math.min(.5, .1 * xm) / xm : 0;
          for (let Dm = 0; Dm < am; Dm++) {
            const mm = wm + (Dm + .5) / am * (1 - wm);
            Ym(fm[0] + (hm[0] - fm[0]) * mm, fm[1] + (hm[1] - fm[1]) * mm, fm[2] + (hm[2] - fm[2]) * mm, .15)
          }
        }));
        const qm = Math.floor(10 * Dm);
        for (let jm = 0; jm < wm; jm++) {
          const [mm, Tm, hm] = fm[jm];
          for (let fm = 0; fm < qm && Om < sj; fm++) Ym(mm, Tm, hm, 2.5)
        }
        this.budget -= Om, this.particles ??= mm.createParticles(function(mm) {
          const [Tm, fm] = mm.colours;
          return {
            texture: "square_particle",
            yp: 400,
            minLifeTime: mm.life[0] / rj,
            maxLifeTime: mm.life[1] / rj,
            minSize: mm.size[0],
            maxSize: mm.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [Tm[0], Tm[1], Tm[2], 1],
              maxColor: [fm[0], fm[1], fm[2], 1]
            }, {
              timeFraction: 1,
              minColor: [Tm[0], Tm[1], Tm[2], 0],
              maxColor: [fm[0], fm[1], fm[2], 0]
            }],
            blendMode: Cw.g.Add
          }
        }(this.style), {
          pos: im
        }), this.particles.emitPoints(im, om, Om)
      }
    }
    const Lj = new Set(["Sky Spring"]);

    function vj(mm, Tm, fm) {
      const hm = mm.split("|")[0];
      return "Air" !== Tm || fm || ! function(mm) {
        const Tm = mm.split("|")[0];
        return void 0 !== wf[Tm] || Lj.has(Tm)
      }(hm) ? null : mm
    }
    class tj {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(mm) {
        const Tm = mm - this.lastTapAt >= 300;
        return this.lastTapAt = mm, Tm
      }
    }
    class Uj {
      constructor() {
        this.presses = new tj, this.predicted = null
      }
      tap(mm, Tm) {
        const fm = this.presses.isNewPress(Tm);
        return fm && (this.predicted = {
          station: mm,
          at: Tm
        }), fm
      }
      consumeServerOpen(mm, Tm) {
        const fm = this.predicted;
        return !(null === fm || fm.station !== mm || Tm - fm.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class dj {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(mm, Tm) {
        return mm && (this.thrustAt = Tm), Tm - this.thrustAt < 200
      }
    }
    const gj = [.1, .05, .1],
      Wj = {
        texture: "effect_5",
        yp: Math.ceil(48),
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
        blendMode: Cw.g.OneOne
      };
    class Fj {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new dj, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      lV(mm, Tm) {
        for (const [fm, hm] of Tm.baf2JetFlames) mm.isLocalPlayer(fm) || (hm ? this.lit.add(fm) : this.lit.delete(fm))
      }
      onAfterRender(mm, Tm) {
        const fm = performance.now(),
          hm = this.hold.lit(this.selfThrusting(mm, Tm), fm);
        for (const [Am, am] of this.flames)(Am === Tm ? hm : this.lit.has(Am)) || this.setEmitting(am, !1), Am === Tm || mm.getPositionView(Am) ? !am.emitting && fm - am.offAt >= 1300 && (am.particles.stop(), this.flames.delete(Am)) : (am.particles.dispose(), this.flames.delete(Am), this.lit.delete(Am));
        hm && this.draw(mm, Tm, Tm);
        for (const Am of this.lit) this.draw(mm, Tm, Am)
      }
      dispose() {
        for (const mm of this.flames.values()) mm.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(mm, Tm) {
        var fm;
        const hm = mm.getLocalPlayerMovement();
        return !!hm && (null !== (Am = {
          option: null !== (fm = mm.getClientOption(Tm, "jumpHoldThrust")) && void 0 !== fm ? fm : null,
          jumping: hm.jumpHeld,
          onGround: hm.onGround,
          alive: mm.isAlive(Tm)
        }).option && Am.option.maxUpSpeed >= 0 && Am.jumping && !Am.onGround && Am.alive);
        var Am
      }
      draw(mm, Tm, fm) {
        var hm, Am;
        const am = this.pos;
        if (!mm.readDrawnPosition(fm, am)) return;
        const xm = mm.readDrawnPosition(Tm, this.camera) ? this.camera : am;
        if (!((am[0] - xm[0]) ** 2 + (am[1] - xm[1]) ** 2 + (am[2] - xm[2]) ** 2 < 1600) || !mm.particlesEnabled()) {
          const mm = this.flames.get(fm);
          return void(mm && this.setEmitting(mm, !1))
        }
        const wm = null !== (hm = this.flames.get(fm)) && void 0 !== hm ? hm : this.create(mm, fm, am),
          Dm = null !== (Am = mm.getDrawnHeading(fm)) && void 0 !== Am ? Am : 0,
          im = this.at;
        im[0] = am[0] - .35 * Math.sin(Dm), im[1] = am[1] + 1.05, im[2] = am[2] - .35 * Math.cos(Dm), wm.particles.moveTo(im), this.setEmitting(wm, !0)
      }
      setEmitting(mm, Tm) {
        mm.emitting !== Tm && (mm.emitting = Tm, Tm || (mm.offAt = performance.now()), mm.particles.setEmitRate(Tm ? 60 : 0))
      }
      create(mm, Tm, fm) {
        const hm = {
          particles: mm.createParticles(Wj, {
            pos: fm,
            half: gj
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(Tm, hm), hm
      }
    }

    function mV(mm) {
      return "Reactor Frame" === xh("reactor", mm)
    }

    function TV(mm) {
      return lf("reactor", mm) && !mV(mm) && (mm.startsWith("Reactor Glass") || mm.startsWith("Reactor Port"))
    }
    const fV = "baf2Goal";
    class hV {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [HA.j.subscribe("setDirectionArrow", (mm => {
          let {
            id: Tm,
            position: fm
          } = mm;
          Tm === fV && (this.goal = fm, this.checkedAt = -1 / 0)
        })), HA.j.subscribe("clearDirectionArrow", (mm => {
          let {
            id: Tm
          } = mm;
          null !== Tm && Tm !== fV || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const mm of this.subs) HA.j.unsubscribe(mm)
      }
      sideOf(mm, Tm, fm, hm) {
        const Am = this.goal;
        if (!Am) return 0;
        fm - this.checkedAt > 1e3 && (this.checkedAt = fm, this.open = function(mm, Tm) {
          const [fm, hm, Am] = mm.map(Math.floor);
          if (!TV(Tm(fm, hm, Am))) return null;
          for (const [am, xm] of [
              [1, 0],
              [0, 1]
            ]) {
            const mm = Tm(fm + am, hm, Am + xm),
              wm = Tm(fm - am, hm, Am - xm);
            if (mV(wm) && TV(mm)) return [am, 0, xm];
            if (mV(mm) && TV(wm)) return [0 - am, 0, 0 - xm]
          }
          return null
        }(Am, ((Tm, fm, hm) => mm.blockIdToBlockName(mm.getBlockId(Tm, fm, hm)))));
        const am = this.open;
        if (!am) return 0;
        const xm = hm(Am);
        if (Math.abs(xm.x - Tm.x) > .05 || Math.abs(xm.y - Tm.y) > .05) return 0;
        const wm = hm([Am[0] + am[0], Am[1], Am[2] + am[2]]).x - xm.x;
        return Math.abs(wm) < .3 ? 0 : wm > 0 ? 1 : -1
      }
    }
    class AV {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new hV, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.PO = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.zV = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((mm => {
          for (const Tm of mm) Tm.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(Tm.target, Tm.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.PO || this.clear()
        }, window.addEventListener("resize", this.zV)
      }
      onAfterRender(mm, Tm) {
        var fm;
        this.api = mm, this.project = null !== (fm = null === Tm || void 0 === Tm ? void 0 : Tm.projectWorldPosToScreenPos) && void 0 !== fm ? fm : null, this.queued || this.PO || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.PO = !0;
        for (const mm of this.moved.keys()) mm.style.transform = "";
        this.moved.clear();
        for (const mm of this.sideLabels.keys()) mm.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.zV)
      }
      clear() {
        for (const am of this.moved.keys()) am.isConnected || this.moved.delete(am);
        for (const am of this.sideLabels.keys()) am.isConnected || this.sideLabels.delete(am);
        if (0 === this.arrows.length) return;
        const mm = performance.now(),
          Tm = mm - this.refreshedAt > 1e3;
        Tm && (this.refreshedAt = mm, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const fm = this.trackerBox(),
          hm = this.barsBox(),
          Am = this.toastBox(Tm);
        (fm || hm || Am) && Tm && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let am = 0; am < this.arrows.length; am++) {
          const Tm = this.arrows[am];
          this.labelOffsets.set(Tm, this.runLabelAside(Tm, mm));
          const xm = (fm ? this.shiftLeftOf(Tm, fm) : 0) || this.shiftOnScreen(Tm),
            wm = Math.min(hm ? this.liftAbove(Tm, hm, xm) : 0, Am ? this.liftAbove(Tm, Am, xm) : 0),
            Dm = this.moved.get(Tm);
          if (0 !== xm || 0 !== wm) {
            const mm = 0 === wm ? `translateX(${xm}px)` : `translate(${xm}px, ${wm}px)`;
            Dm !== mm && (Tm.style.transform = mm, this.moved.set(Tm, mm))
          } else void 0 !== Dm && (Tm.style.transform = "", this.moved.delete(Tm))
        }
      }
      trackerBox() {
        var mm, Tm;
        const fm = null !== (mm = this.tracker) && void 0 !== mm && mm.isConnected ? this.tracker : null !== (Tm = this.trackers[0]) && void 0 !== Tm ? Tm : null;
        if (fm !== this.tracker && this.watch(fm), this.boxStale && fm) {
          var hm, Am, am;
          this.boxStale = !1;
          const mm = fm.closest(".NoRoom") ? null : fm.getBoundingClientRect(),
            Tm = mm && mm.width > 0 ? null === (hm = this.hud) || void 0 === hm ? void 0 : hm.getBoundingClientRect() : void 0,
            xm = mm && Tm ? Math.max(mm.top, Tm.top) : null !== (Am = null === mm || void 0 === mm ? void 0 : mm.top) && void 0 !== Am ? Am : 0,
            wm = mm && Tm ? Math.min(mm.bottom, Tm.bottom) : null !== (am = null === mm || void 0 === mm ? void 0 : mm.bottom) && void 0 !== am ? am : 0;
          this.box = mm && mm.width > 0 && wm > xm ? {
            left: mm.left,
            top: xm,
            right: mm.right,
            bottom: wm
          } : null
        }
        return fm ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var mm;
          this.barsStale = !1;
          const Tm = null === (mm = this.statBars[0]) || void 0 === mm ? void 0 : mm.getBoundingClientRect();
          this.bars = Tm && Tm.width > 0 && Tm.height > 0 ? {
            left: Tm.left,
            top: Tm.top,
            right: Tm.right,
            bottom: Tm.bottom
          } : null
        }
        return this.bars
      }
      toastBox(mm) {
        var Tm;
        const fm = null !== (Tm = this.toasts[0]) && void 0 !== Tm ? Tm : null;
        if (fm !== this.toastEl || mm && fm) {
          this.toastEl = fm;
          const mm = null === fm || void 0 === fm ? void 0 : fm.getBoundingClientRect();
          this.toast = mm && mm.width > 0 && mm.height > 0 ? {
            left: mm.left,
            top: mm.top,
            right: mm.right,
            bottom: mm.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(mm, Tm, fm) {
        var hm;
        const Am = this.anchorOf(mm);
        if (!Am) return 0;
        const am = Am.x + fm + (null !== (hm = this.labelOffsets.get(mm)) && void 0 !== hm ? hm : 0),
          {
            halfWidth: xm,
            labelled: wm
          } = this.extentOf(mm),
          Dm = Am.y + this.em * (wm ? 6.2 : 3);
        return Dm < Tm.top - 6 || am + xm < Tm.left - 6 || am - xm > Tm.right + 6 ? 0 : Tm.top - 6 - Dm
      }
      watch(mm) {
        var Tm, fm;
        this.tracker && this.sizes.unobserve(this.tracker), null === (Tm = this.hud) || void 0 === Tm || Tm.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = mm, this.hud = null !== (fm = null === mm || void 0 === mm ? void 0 : mm.closest(".Baf2QuestHud")) && void 0 !== fm ? fm : null, this.box = null, this.boxStale = !0, mm && this.sizes.observe(mm), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(mm, Tm) {
        var fm;
        const hm = this.anchorOf(mm);
        if (!hm) return 0;
        const {
          y: Am
        } = hm, am = hm.x + (null !== (fm = this.labelOffsets.get(mm)) && void 0 !== fm ? fm : 0), xm = this.em, {
          halfWidth: wm,
          labelled: Dm
        } = this.extentOf(mm), im = Am - xm, Rm = am + wm;
        return Am + xm * (Dm ? 6.2 : 3) < Tm.top || im > Tm.bottom || Rm < Tm.left - 6 || am - wm > Tm.right ? 0 : Math.max(Tm.left - 6 - Rm, 6 - (am - wm))
      }
      shiftOnScreen(mm) {
        var Tm;
        const fm = this.anchorOf(mm);
        if (!fm) return 0;
        const {
          halfWidth: hm
        } = this.extentOf(mm), Am = fm.x + (null !== (Tm = this.labelOffsets.get(mm)) && void 0 !== Tm ? Tm : 0), am = Am + hm - (this.innerWidth - 6);
        return am > 0 ? -am : Math.max(0, 6 - (Am - hm))
      }
      runLabelAside(mm, Tm) {
        var fm;
        let hm = null;
        for (let xm = 0; xm < mm.children.length; xm++) mm.children[xm].classList.contains("DirectionArrowLabel") && (hm = mm.children[xm]);
        if (!hm) return 0;
        const Am = mm.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(mm) : null,
          am = (Am && this.api ? this.side.sideOf(this.api, {
            x: Am.x / this.innerWidth * 100,
            y: Am.y / this.innerHeight * 100
          }, Tm, this.project) : 0) * this.halfWidthOf(hm);
        return am !== (null !== (fm = this.sideLabels.get(hm)) && void 0 !== fm ? fm : 0) && (hm.style.transform = 0 === am ? "" : `translateX(-50%) translateX(${am}px)`, 0 === am ? this.sideLabels.delete(hm) : this.sideLabels.set(hm, am)), am
      }
      extentOf(mm) {
        let Tm = this.em,
          fm = !1;
        for (let hm = 0; hm < mm.children.length; hm++) {
          const Am = mm.children[hm],
            am = Am.classList.contains("DirectionArrowLabel");
          fm ||= am, (am || Am.classList.contains("DirectionArrowDistance")) && (Tm = Math.max(Tm, this.halfWidthOf(Am)))
        }
        return {
          halfWidth: Tm,
          labelled: fm
        }
      }
      halfWidthOf(mm) {
        let Tm = this.halfWidths.get(mm);
        return void 0 === Tm && (Tm = mm.offsetWidth / 2, this.halfWidths.set(mm, Tm), this.sizes.observe(mm), this.labels.add(mm)), Tm
      }
      forgetGoneLabels() {
        for (const mm of this.labels) mm.isConnected || (this.sizes.unobserve(mm), this.halfWidths.delete(mm), this.labels.delete(mm))
      }
      anchorOf(mm) {
        const Tm = mm.style.translate,
          fm = this.anchors.get(mm);
        if (fm && fm.translate === Tm && fm.innerWidth === this.innerWidth && fm.innerHeight === this.innerHeight) return fm;
        const hm = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(Tm);
        if (!hm) return null;
        const Am = {
          translate: Tm,
          x: parseFloat(hm[1]) / 100 * this.innerWidth,
          y: parseFloat(hm[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(mm, Am), Am
      }
    }
    const aV = "Baf2ArrowText";

    function xV(mm, Tm) {
      const fm = mm.rows.find((mm => mm.current));
      return Gm(mm.tutorial) && null !== fm && void 0 !== fm && fm.item && vA(fm) && bm(fm.item).includes(Tm) ? fm.item : null
    }
    const wV = new class {
      constructor(mm) {
        this.select = mm, this.picks = new Map
      }
      open(mm, Tm, fm) {
        const hm = xV(Tm, mm);
        null !== hm && this.Do(mm, hm, fm)
      }
      follow(mm, Tm) {
        if (wm())
          for (const [fm, {
              item: hm,
              had: Am
            }] of this.picks) {
            const am = xV(mm, fm);
            am !== hm && (null !== am && Tm(hm) > Am ? this.Do(fm, am, Tm) : this.picks.delete(fm))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Do(mm, Tm, fm) {
        this.picks.set(mm, {
          item: Tm,
          had: fm(Tm)
        }), this.select(mm, Tm)
      }
    }(yA.u);

    function DV(mm) {
      return Tm => {
        let fm = 0;
        for (const hm of mm.getInventoryItems())(null === hm || void 0 === hm ? void 0 : hm.name) === Tm && (fm += null === hm.amount ? 1 : Math.max(hm.amount, 0));
        return fm
      }
    }

    function iV(mm, Tm, fm, hm) {
      mm.getClientOption(Tm, "canCraft") && "inventory" !== nA.c.get("openInGameMenuName") && (wV.open(fm, hm.get(), DV(mm)), HA.j.gp("toggleMenu", `inventory|${fm}`))
    }
    let RV = null,
      pV = !1;

    function EV(mm) {
      const Tm = Za();
      mm === RV && Tm === pV || (RV = mm, pV = Tm, (0, yA.w)(function(mm, Tm) {
        const fm = new Map;
        for (let hm = mm + 1; hm <= Am.length; hm++) {
          const Am = ta(hm, mm, Tm);
          if (Am)
            for (const Tm of jm(hm).unlocks) fm.set(Tm, {
              ...Am,
              stepsAway: hm - mm
            })
        }
        return fm
      }(mm, Tm)))
    }

    function oV() {
      return mm = () => {
        null !== RV && EV(RV)
      }, (0, ca.i)(za, mm);
      var mm
    }

    function OV() {
      return (0, yA.C)(va(Object.keys(km), la)), () => {
        (0, yA.C)([])
      }
    }

    function YV(mm, Tm, fm) {
      var hm, Am;
      const am = mm.getTargetedBlock();
      if (!am || ! function(mm, Tm, fm) {
          if ("Chest" !== Tm) return !1;
          const hm = mm.split("|")[0];
          if (!pf(hm) || 0 === PT[hm].outputSlots.length) return !1;
          const Am = Nq(mm);
          return fm[0] === Am[0] && fm[1] === Am[1] && fm[2] === Am[2]
        }(fm, null === (hm = mm.MTm(Tm)) || void 0 === hm ? void 0 : hm.name, am.normal)) return !1;
      const [xm, wm, Dm] = am.ep, im = mm.getBlockId(xm, wm, Dm);
      return 0 === im || !0 === (null === (Am = em.i[im]) || void 0 === Am ? void 0 : Am.canBePlacedOver)
    }
    var qV = fm(36846);
    const jV = new Set(jf.d);
    class VV {
      constructor(mm) {
        this.toasts = mm, this.lastAt = -1 / 0
      }
      onAltAction(mm, Tm, fm) {
        const hm = mm.getTargetedBlock();
        if (!hm || function(mm) {
            const Tm = mm.split("|")[0];
            return pf(Tm) || null !== Zh(Tm) || zm(Tm) || jf.d.includes(Tm)
          }(fm) && !jV.has(fm.split("|")[0])) return;
        const Am = mm.MTm(Tm);
        if (!Am || !jV.has(Am.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const am = Am.typeObj.id,
          [xm, wm, Dm] = hm.ep,
          im = mm.getBlockId(xm, wm, Dm),
          Rm = em.i[im];
        (0 === im || null !== Rm && void 0 !== Rm && Rm.Qo || null !== Rm && void 0 !== Rm && Rm.canBePlacedOver) && mm.isSolidToPlayerBlockId(am) && mm.canModifyBlockAt(xm, wm, Dm) && mm.RTm(xm, wm, Dm, am) && !mm.RTm(xm, wm, Dm, am, Tm) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Xm.Vd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Xm.J.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class IV {
      constructor(mm) {
        this.show = mm, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(mm, Tm, fm) {
        var hm;
        if (!Tm) return this.started = null, void this.gatedThisHold.clear();
        if (!mm) return void(this.started = null);
        const Am = `${mm.x},${mm.y},${mm.z},${mm.ni}`;
        if (Am === this.started) return;
        this.started = Am;
        const am = sh(mm.y) ? oj(mm.block, mm.ni, mm.level) : null;
        if (null === am || this.gatedThisHold.has(Am)) return;
        this.gatedThisHold.add(Am);
        const xm = mm.block.split("|")[0];
        fm - (null !== (hm = this.hintedAt.get(xm)) && void 0 !== hm ? hm : -1 / 0) < 5e3 || (this.hintedAt.set(xm, fm), this.show({
          baf2ToastText: Oj(am, mm.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var KV = fm(37);

    function QV(mm, Tm) {
      const fm = [...mm.baf2CoreBankPaused];
      for (const [Am] of mm.baf2CoreBanked) fm.push(Am);
      for (const xm of Am) {
        for (const {
            item: mm
          }
          of xm.cost) fm.push(mm);
        for (const mm of xm.newDeposits) fm.push(mm.block);
        for (const mm of xm.unlocks) fm.push(mm, Sm(mm));
        xm.reward && fm.push(xm.reward);
        for (const {
            item: mm
          }
          of null !== (hm = null === (am = xm.charge) || void 0 === am ? void 0 : am.items) && void 0 !== hm ? hm : []) {
          var hm, am;
          fm.push(mm)
        }
      }
      return {
        message: mm,
        itemNames: Tm([...new Set(fm)])
      }
    }
    const nV = "baf2MultiblockGuide";
    const JV = new Map;
    const cV = function(mm, Tm, fm, Am) {
      let {
        localPlayerId: am
      } = Am;
      const xm = new Vw,
        wm = new Ro,
        im = new jo,
        Rm = new Yo(im),
        pm = (mm, Tm) => {
          Tm ? Rm.observe(mm) : Rm.unobserve(mm)
        },
        Em = new Oo,
        om = new Qo(pm),
        Om = mm => om.covers(mm),
        Ym = new Mo;
      let qm;
      const jm = new lx((mm => {
          qm.sendCommand(mm)
        })),
        Vm = () => {
          jm.send("baf2questbook")
        },
        Im = mm => function(mm, Tm, fm) {
          const hm = {};
          for (const Am of fm) {
            let fm = JV.get(Am);
            void 0 === fm && (fm = mm.getItemStat(Tm, Am, "displayName"), JV.set(Am, fm)), hm[Am] = fm
          }
          return hm
        }(qm, am, mm),
        Km = new lA(Vm),
        Qm = new TO((() => nA.c.get("loadingOverlayVisible"))),
        nm = new eR(jm, Km, Qm),
        Jm = new xO,
        cm = new VV(Qm),
        Zm = new IV((mm => {
          Qm.show(mm, mm.baf2ToastMs)
        })),
        km = new YO(pm),
        bm = new lq(km),
        Sm = new Zx,
        Nm = new Rj,
        Gm = new Aw,
        Hm = new nO({
          read: () => !1 !== KV.g.getItem(nV),
          write: mm => {
            KV.g.setItem(nV, mm)
          }
        }),
        ym = new dO(Hm),
        Cm = new FO(Hm),
        rm = new KY(Hm, (mm => function(mm, Tm) {
          const fm = fD(Tm.w, Tm.h, Tm.d),
            hm = new Uint8Array(fm);
          for (let Am = 0; Am < fm; Am++) {
            const fm = BO(mm, Th(Tm, ah(Tm, Am)));
            hm[Am] = null === fm ? 0 : Ww(fm)
          }
          return hm
        }(qm, mm)), pY(jm)),
        sm = new QY(Hm, pY(jm)),
        lm = new VY,
        Bm = (mm, Tm) => {
          let [fm, hm, Am] = mm;
          lm.answered(Tm) || Qm.show({
            baf2ToastText: [(0, Xm.Vd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: fm,
                h: hm,
                d: Am
              }
            }, Xm.J.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      rm.onSizeNotTaken(Bm), sm.onSizeNotTaken(Bm);
      const Lm = new zY,
        tm = new aq(Hm),
        dm = new wq,
        gm = new Vq(dm),
        Wm = new Sq,
        mT = new Mq,
        TT = new Fq(mT),
        fT = new ij(mT),
        hT = mT.lookSource(),
        AT = new cj({
          handles: mm => hT.handles(mm) || mm === Pm,
          line: (mm, Tm) => mm === Pm ? function(mm, Tm, fm) {
            var hm;
            const Am = um(null === (hm = Tm.at(fm)) || void 0 === hm ? void 0 : hm.item);
            return null === Am ? {
              key: `${Qj}lookFarmEmpty`
            } : {
              key: mm.blockIdToBlockName(mm.getBlockId(fm[0], fm[1], fm[2])).endsWith("|Running") ? `${Qj}lookFarmRunning` : `${Qj}lookFarmWaiting`,
              keys: {
                mob: Mm(Am)
              }
            }
          }(qm, km, Tm) : hT.line(mm, Tm),
          version: () => hT.version() + km.version()
        }, (mm => TY(Hm.all(), mm, (mm => BO(qm, mm)))), (() => Km.get().tier)),
        aT = new uY,
        xT = new Cj,
        wT = new Bj,
        DT = Bj.blade(),
        iT = new Fj,
        RT = new iO,
        pT = new AV,
        oT = new Uj,
        OT = new tj;
      let YT = -1 / 0,
        qT = 0,
        jT = -1 / 0,
        VT = -1 / 0;
      const IT = () => {
          jm.send("baf2islandsclose"), VT = Date.now()
        },
        KT = [];

      function QT(mm) {
        var Tm, fm, hm, Am, am, xm, Dm;
        "core" === (null === (Tm = wm.get()) || void 0 === Tm ? void 0 : Tm.kind) && "core" !== (null === mm || void 0 === mm ? void 0 : mm.kind) && jm.send("baf2coreclose"), "power" === (null === (fm = wm.get()) || void 0 === fm ? void 0 : fm.kind) && "power" !== (null === mm || void 0 === mm ? void 0 : mm.kind) && jm.send("baf2powerclose"), "water" === (null === (hm = wm.get()) || void 0 === hm ? void 0 : hm.kind) && "water" !== (null === mm || void 0 === mm ? void 0 : mm.kind) && jm.send(Fm.w), "terminal" === (null === (Am = wm.get()) || void 0 === Am ? void 0 : Am.kind) && "terminal" !== (null === mm || void 0 === mm ? void 0 : mm.kind) && jm.send("baf2terminalclose"), "islands" === (null === (am = wm.get()) || void 0 === am ? void 0 : am.kind) && "islands" !== (null === mm || void 0 === mm ? void 0 : mm.kind) && IT();
        const im = mT.getStatus();
        "collider" === (null === (xm = wm.get()) || void 0 === xm ? void 0 : xm.kind) && "collider" !== (null === mm || void 0 === mm ? void 0 : mm.kind) && im && jm.send(rD(im, "close"));
        const Rm = mm => "reactor" === mm || "battery" === mm;
        if (Rm(null === (Dm = wm.get()) || void 0 === Dm ? void 0 : Dm.kind) && !Rm(null === mm || void 0 === mm ? void 0 : mm.kind)) {
          var pm, Em, om;
          const mm = "reactor" === (null === (pm = wm.get()) || void 0 === pm ? void 0 : pm.kind) ? null === (Em = rm.get()) || void 0 === Em ? void 0 : Em.status.baf2RxAt : null === (om = sm.get()) || void 0 === om ? void 0 : om.status.baf2BatAt;
          mm && jm.send(ET(mm, "close"))
        }
        "quests" === (null === mm || void 0 === mm ? void 0 : mm.kind) && Vm(), wm.set(mm), null === mm && Jm.release()
      }

      function nT() {
        (0, QA.h)(), QT(null)
      }
      let JT = new Set,
        cT = !1;
      const zT = {
        onCreate: mm => {
          qm = mm, qm.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const Tm of bT) {
            const mm = PT[Tm].inputSlots ? Pw(xm) : Nw(Tm, xm, Sm, jm);
            KT.push((0, IA.f)(Tm, mm))
          }
          KT.push((0, QA.w)((0, hm.createElement)(hm.Fragment, null, (0, hm.createElement)(co, {
            controller: om
          }), (0, hm.createElement)(VO, {
            store: km
          }), (0, hm.createElement)(Zj, {
            store: AT
          }), (0, hm.createElement)(Fo, {
            store: Km
          }), (0, hm.createElement)(AO, {
            store: Qm
          }), (0, hm.createElement)(wO, {
            store: Jm
          }), (0, hm.createElement)(pO, {
            store: RT
          }), (0, hm.createElement)(cY, {
            store: Lm
          }), (0, hm.createElement)(Dq, {
            store: dm
          })), {
            content: (0, hm.createElement)(po, {
              commands: jm,
              store: wm,
              power: Sm,
              water: Gm,
              reactor: rm,
              battery: sm,
              collider: mT,
              terminal: Nm,
              quests: Km,
              tutorial: nm,
              close: QA.j,
              leave: () => {
                Jm.dropHeld(), (0, QA.h)()
              },
              askIslands: () => {
                VT = -1 / 0, YT = Date.now(), qT = jm.send(Um)
              },
              openSocial: () => {
                (0, QA.h)(), nA.c.set({
                  openEverythingMenuName: of.n.SOCIAL
                })
              },
              showCore: mm => {
                QT({
                  kind: "core",
                  core: mm
                }), jm.send("baf2corereopen")
              }
            }),
            onClose: () => {
              QT(null)
            }
          })), KT.push((0, KA.r)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              QT({
                kind: "quests"
              }), (0, QA.s)()
            }
          })), KT.push(function(mm, Tm) {
            let fm = null,
              hm = () => {};
            const Am = Tm => {
              var Am;
              let {
                tutorial: am,
                tutorialKnown: xm
              } = Tm;
              (null === (Am = fm) || void 0 === Am ? void 0 : Am.tutorial) === am && fm.tutorialKnown === xm || (fm = {
                tutorial: am,
                tutorialKnown: xm
              }, hm = (0, KA.r)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: bR[am],
                icon: {
                  kind: "icon",
                  name: kR[am]
                },
                iconOnly: !0,
                disabled: !xm,
                className: "Baf2TutorialButton",
                onClick: () => {
                  mm.next()
                }
              }))
            };
            Am(Tm.get());
            const am = HA.j.subscribe(CA, Am);
            return () => {
              HA.j.unsubscribe(am), hm()
            }
          }(nm, Km)), cT = !1, KT.push(oV()), KT.push(OV()), KT.push(function() {
            const mm = HA.j.subscribe(CA, Ta),
              Tm = () => {
                if (ma) {
                  const mm = ma;
                  ma = null, (0, yA.y)(mm)
                }
              },
              fm = HA.j.subscribe("toggleMenu", (mm => {
                "inventory" === (null === mm || void 0 === mm ? void 0 : mm.split("|")[0]) && Tm()
              })),
              hm = HA.j.subscribe("appManagerUpdated|openInGameMenuName", (mm => {
                "inventory" === mm && Tm()
              }));
            return () => {
              HA.j.unsubscribe(mm), HA.j.unsubscribe(fm), HA.j.unsubscribe(hm)
            }
          }()), KT.push(function(mm) {
            const Tm = DV(mm),
              fm = HA.j.subscribe(CA, (mm => {
                wV.follow(mm, Tm)
              }));
            return () => {
              HA.j.unsubscribe(fm), wV.clear()
            }
          }(qm)), KT.push(function() {
            const mm = document.documentElement,
              Tm = (0, Bo.e)(".InvenBodyRight", [], (() => {
                const Tm = document.querySelector(".InvenBodyRight");
                Tm && mm.style.setProperty("--baf2-backpack-width", `${Tm.offsetWidth}px`)
              }));
            return () => {
              Tm(), mm.style.removeProperty("--baf2-backpack-width")
            }
          }()), KT.push(function() {
            const mm = document.documentElement;
            return mm.classList.add(aV), () => {
              mm.classList.remove(aV)
            }
          }()), KT.push((() => {
            Rm.dispose(), im.dispose()
          })), Ym.start(qm), KT.push((() => {
            Ym.dispose(), iT.dispose(), bm.dispose()
          }))
        },
        onClose: () => {
          (0, yA.y)([]), ma = null, FA = new Set, RV = null, (0, yA.w)(new Map), JV.clear();
          for (const mm of KT) mm();
          Km.dispose(), AT.dispose(), Qm.dispose(), Jm.dispose(), aT.dispose(), xT.dispose(qm), ym.dispose(qm), Cm.dispose(qm), tm.dispose(qm), gm.dispose(qm), dm.dispose(), Wm.dispose(), Hm.dispose(), rm.dispose(), sm.dispose(), Lm.dispose(), wT.dispose(), DT.dispose(), RT.dispose(), TT.dispose(qm), fT.dispose(qm), mT.dispose(), pT.dispose(), jm.clear()
        },
        onAfterRender: (mm, Tm) => {
          var fm, hm, Am;
          try {
            Ym.onAfterRender(Tm)
          } catch (im) {
            console.error("Error drawing BAF2 belt items", im)
          }
          try {
            iT.onAfterRender(qm, am)
          } catch (im) {
            console.error("Error drawing BAF2 jet flames", im)
          }
          cT || (cT = !0, jm.send("baf2clientready"));
          const xm = qm.getPositionView(am);
          om.onAfterRender(Tm, xm, Em), km.onAfterRender(Tm, xm, Em, Om), Rm.run(Em), aT.onAfterRender(qm, xm), xT.onAfterRender(qm, xm), bm.onAfterRender(qm, xm), ym.onAfterRender(qm, xm), Cm.onAfterRender(qm, am, xm), tm.onAfterRender(qm, am, xm), gm.onAfterRender(qm, am), Wm.onAfterRender(qm, xm), Km.onPlayerY(xm[1]), TT.onAfterRender(qm), fT.onAfterRender(qm, am, xm);
          const Dm = qm.getTargetedBlock();
          AT.onAfterRender(qm, am, null !== (fm = null === Dm || void 0 === Dm ? void 0 : Dm.XF) && void 0 !== fm ? fm : 0, null !== (hm = null === Dm || void 0 === Dm ? void 0 : Dm.position) && void 0 !== hm ? hm : null), pT.onAfterRender(qm, Tm), Zm.onMining(function(mm, Tm) {
            var fm, hm;
            const Am = mm.getMiningBlock();
            if (!Am) return null;
            const am = (0, em.f)(mm.getBlockId(Am[0], Am[1], Am[2])),
              xm = null !== (fm = null === (hm = mm.MTm(Tm)) || void 0 === hm ? void 0 : hm.name) && void 0 !== fm ? fm : null,
              wm = mm.getItemStat(Tm, am.split("|")[0], "harvestLevel");
            return {
              block: am,
              x: Am[0],
              y: Am[1],
              z: Am[2],
              ni: xm,
              level: wm
            }
          }(qm, am), qm.isMining(), performance.now()), "dropMap" === (null === (Am = wm.get()) || void 0 === Am ? void 0 : Am.kind) && sh(xm[1]) && nT()
        },
        onPlayerChangeBlock: (mm, Tm, fm, hm, Am, xm) => {
          mm === am && function(mm, Tm, fm, hm, Am, am, xm) {
            const wm = vj(am, xm, mm.isPlayerCrouching(Tm));
            if (null === wm) return;
            if (mm.zN(fm, hm, Am, wm), !mm.getClientOption(Tm, "canPickUpItems")) return;
            const Dm = wf[wm.split("|")[0]];
            var im, Rm, pm;
            void 0 !== Dm && (im = mm.getInventoryItems(), Rm = Dm, pm = JO.f.maxItemStackSize, mm.getInventoryFreeSlotCount(Tm) > 0 || im.some((mm => null !== mm && mm.name === Rm && null !== mm.amount && mm.amount < pm))) && mm.playSound(Tm, (0, qV.g)("pickUp"), .5, 1)
          }(qm, mm, Tm, fm, hm, Am, xm)
        },
        onPlayerAltAction: (mm, Tm, fm, hm, Am) => {
          var xm, wm;
          if (!qm.getClientOption(am, "canPickUpItems")) return;
          const Dm = null !== (xm = null === (wm = qm.MTm(am)) || void 0 === wm ? void 0 : wm.name) && void 0 !== xm ? xm : null,
            im = function(mm, Tm) {
              const fm = mm.split("|")[0];
              return zm(fm) && Tm !== RA && "Sky Pack" !== Tm ? fm : null
            }(Am, Dm);
          if (null !== im) return void(oT.tap(im, performance.now()) && iV(qm, am, im, Km));
          if (!Bh(Dm)) return;
          const Rm = OT.isNewPress(performance.now()),
            pm = function(mm, Tm, fm) {
              return !Bh(Tm) || fm ? null : mA(mm)
            }(Am, Dm, qm.isPlayerCrouching(am));
          null !== pm && Rm && qm.zN(Tm, fm, hm, pm)
        },
        onPlayerAttemptAltAction: (mm, Tm, fm, hm, Am) => {
          if (function(mm, Tm, fm, hm, Am) {
              "Workbench" === hm.split("|")[0] && mm.getClientOption(fm, "canCraft") && (wV.open("Workbench", Am.get(), DV(mm)), Tm.send("baf2station Workbench"))
            }(qm, jm, am, Am, Km), YV(qm, am, Am)) return "preventAction";
          cm.onAltAction(qm, am, Am)
        },
        onReceivedMessageFromServer: (mm, Tm) => {
          if ("baf2MachineStatus" === mm) {
            var fm, hm, Am, im, Rm, pm, Em, Om, Vm, nm, cm, zm, Zm, bm, em, Xm;
            const mm = Tm,
              am = mm.baf2MachineTaught;
            xm.set(mm.baf2MachinePos, {
              status: mm.baf2MachineStatus,
              power: null !== (fm = mm.baf2MachinePower) && void 0 !== fm ? fm : null,
              opLeftMs: null !== (hm = mm.baf2MachineOpLeftMs) && void 0 !== hm ? hm : null,
              dug: mm.baf2MachineYield ? {
                item: mm.baf2MachineYield,
                name: Im([mm.baf2MachineYield])[mm.baf2MachineYield]
              } : null,
              powerCap: null !== (Am = mm.baf2MachinePowerCap) && void 0 !== Am ? Am : null,
              powerRates: null !== (im = mm.baf2MachinePowerRates) && void 0 !== im ? im : null,
              coupled: !0 === mm.baf2MachineCoupled,
              couplerLevel: null !== (Rm = mm.baf2MachineCoupler) && void 0 !== Rm ? Rm : 1,
              taught: am,
              taughtName: am ? Im([am])[am] : null,
              tier: null !== (pm = mm.baf2MachineTier) && void 0 !== pm ? pm : null,
              input: null !== (Em = mm.baf2MachineInput) && void 0 !== Em ? Em : null,
              inertCoupler: null !== (Om = mm.baf2MachineInertCoupler) && void 0 !== Om ? Om : null,
              inputShort: null !== (Vm = mm.baf2MachineInputShort) && void 0 !== Vm ? Vm : null,
              field: null !== (nm = mm.baf2MachineField) && void 0 !== nm ? nm : null,
              noSeeds: !0 === mm.baf2MachineNoSeeds,
              fuelFed: !0 === mm.baf2MachineFuelFed,
              fuelFeeds: !0 === mm.baf2MachineFuelFeeds,
              coreFull: !0 === mm.baf2MachineCoreFull,
              waterUnpowered: !0 === mm.baf2MachineWaterUnpowered,
              powerShort: !0 === mm.baf2MachinePowerShort,
              powerWait: !0 === mm.baf2MachinePowerWait,
              reactorPowered: !0 === mm.baf2MachineReactorPowered,
              fuelLeftMs: null !== (cm = mm.baf2MachineFuelLeftMs) && void 0 !== cm ? cm : null,
              burning: null !== (zm = mm.baf2MachineBurning) && void 0 !== zm ? zm : null,
              fuelKeep: null !== (Zm = mm.baf2MachineFuelKeep) && void 0 !== Zm ? Zm : null,
              water: null !== (bm = mm.baf2MachineWater) && void 0 !== bm ? bm : null,
              farm: null !== (em = mm.baf2MachineFarm) && void 0 !== em ? em : null,
              cryo: null !== (Xm = mm.baf2MachineCryo) && void 0 !== Xm ? Xm : null
            })
          } else if ("baf2StationOpen" === mm) {
            const mm = Tm.baf2Station;
            oT.consumeServerOpen(mm, performance.now()) || iV(qm, am, mm, Km)
          } else if ("baf2Power" === mm) {
            const mm = Tm;
            Sm.set(mm), mm.baf2PowerOpen && (QT({
              kind: "power"
            }), (0, QA.s)())
          } else if (mm === Fm.A) {
            const mm = Tm;
            Gm.set(mm), mm.baf2WaterOpen && (QT({
              kind: "water"
            }), (0, QA.s)())
          } else if ("baf2RxPlans" === mm) {
            var Pm, ym, Cm;
            const mm = Tm;
            Hm.lV(mm);
            const fm = new Set(mm.baf2RxPlanList.map((mm => {
              let [Tm, fm, hm] = mm;
              return `${Tm},${fm},${hm}`
            })));
            Lm.retain(fm);
            const hm = null === (Pm = wm.get()) || void 0 === Pm ? void 0 : Pm.kind,
              Am = "reactor" === hm ? null === (ym = rm.get()) || void 0 === ym ? void 0 : ym.status.baf2RxAt : "battery" === hm ? null === (Cm = sm.get()) || void 0 === Cm ? void 0 : Cm.status.baf2BatAt : void 0;
            Am && JT.has(Am.join(",")) && !fm.has(Am.join(",")) && nT(), JT = fm
          } else if ("baf2RxStatus" === mm) {
            const mm = Tm;
            rm.set(mm), mm.baf2RxOpen && (QT({
              kind: "reactor"
            }), (0, QA.s)())
          } else if ("baf2BatStatus" === mm) {
            const mm = Tm;
            sm.set(mm), mm.baf2BatOpen && (QT({
              kind: "battery"
            }), (0, QA.s)())
          } else if ("baf2RxAlarm" === mm) Lm.lV(Tm);
          else if ("baf2Bomb" === mm) dm.lV(Tm, qm.getPositionView(am));
          else if ("baf2Fallout" === mm) Wm.lV(Tm);
          else if ("baf2ColBeams" === mm) mT.onBeams(Tm);
          else if ("baf2ColStatus" === mm) {
            const mm = Tm;
            var Mm, um;
            if (mT.onStatus(mm), mm.baf2ColOpen) mT.onOpen(null !== (Mm = null === (um = qm.MTm(am)) || void 0 === um ? void 0 : um.name) && void 0 !== Mm ? Mm : null), QT({
              kind: "collider"
            }), (0, QA.s)()
          } else if ("baf2Terminal" === mm) {
            const mm = Tm;
            var Bm;
            if (Nm.apply(mm)) mm.baf2TermReset && (QT({
              kind: "terminal"
            }), (0, QA.s)());
            else "terminal" === (null === (Bm = wm.get()) || void 0 === Bm ? void 0 : Bm.kind) && (wm.set(null), (0, QA.h)())
          } else if ("baf2Core" === mm) {
            var tm;
            const mm = Tm;
            if (Dm(!0 === mm.baf2CoreNuclear), function(mm, Tm) {
                return "core" === (null === mm || void 0 === mm ? void 0 : mm.kind) && Tm.baf2CoreTier > mm.core.message.baf2CoreTier
              }(wm.get(), mm)) return void(0, QA.h)();
            if (mm.baf2CoreRefresh && "core" !== (null === (tm = wm.get()) || void 0 === tm ? void 0 : tm.kind)) return;
            QT({
              kind: "core",
              core: QV(mm, Im)
            }), mm.baf2CoreRefresh || (0, QA.s)()
          } else if ("baf2WrenchUndo" === mm) {
            const {
              baf2WrenchPos: mm,
              baf2WrenchBlock: fm
            } = Tm;
            qm.zN(mm[0], mm[1], mm[2], fm)
          } else if ("baf2Toast" === mm) {
            const mm = Tm;
            lm.heard(performance.now(), mm.baf2ToastMs), Qm.show(mm)
          } else if ("baf2Area" === mm) Jm.arrive(Tm, null !== wm.get());
          else if ("baf2Quest" === mm) {
            const mm = Tm;
            Dm(!0 === mm.baf2QuestNuclear), Km.set(mm, function(mm, Tm) {
              var fm, hm, Am, am, xm;
              const wm = [];
              for (const [, , Rm, , , , , , pm, Em] of mm.baf2QuestSteps) null !== Rm && wm.push(Rm), wm.push(...null !== pm && void 0 !== pm ? pm : [], ...null !== Em && void 0 !== Em ? Em : []);
              mm.baf2QuestReward && wm.push(mm.baf2QuestReward);
              const Dm = null === (fm = mm.baf2QuestSide) || void 0 === fm ? void 0 : fm[2][2];
              Dm && wm.push(Dm), wm.push(...null !== (hm = null === (Am = mm.baf2QuestSide) || void 0 === Am ? void 0 : Am[2][8]) && void 0 !== hm ? hm : [], ...null !== (am = null === (xm = mm.baf2QuestSide) || void 0 === xm ? void 0 : xm[2][9]) && void 0 !== am ? am : []);
              for (const [Rm] of null !== (im = mm.baf2QuestAlso) && void 0 !== im ? im : []) {
                var im;
                wm.push(Rm)
              }
              return Tm(wm)
            }(mm, Im)), EV(mm.baf2QuestTier)
          } else if ("baf2Route" === mm) ! function(mm, Tm) {
            let {
              baf2RouteCells: fm,
              baf2RouteInto: hm
            } = Tm;
            0 !== fm.length && hm ? mm.setRouteChevrons({
              cells: fm.map(((mm, Tm) => {
                const [Am, , am] = function(mm, Tm, fm) {
                  const hm = fm + 1 < mm.length ? mm[fm + 1] : Tm;
                  return [hm[0] - mm[fm][0], 0, hm[2] - mm[fm][2]]
                }(fm, hm, Tm);
                return {
                  pos: mm,
                  way: [Am, am]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : mm.setRouteChevrons(null)
          }(qm, Tm);
          else if ("baf2QuestBook" === mm) Km.setBook(Tm);
          else if ("baf2Stalls" === mm) om.set(Tm.baf2StallCells);
          else if (mm === jf.l) Ym.onMoves(Tm);
          else if (mm === jf.g) Ym.onLines(Tm);
          else if ("baf2Labels" === mm) km.lV(Tm);
          else if ("baf2DropMap" === mm) QT({
            kind: "dropMap",
            dropMap: Tm
          }), (0, QA.s)();
          else if ("baf2Islands" === mm) {
            var gm, TT;
            const mm = Tm;
            if (jm.syncIslandEdits(mm.baf2IslandsAnswered), !mm.baf2IslandsOpen && "islands" !== (null === (gm = wm.get()) || void 0 === gm ? void 0 : gm.kind)) return;
            if (mm.baf2IslandsOpen) {
              var fT, hT;
              const Tm = nA.c.get("openEverythingMenuName"),
                fm = jm.sent() >= qT,
                hm = "other" !== (OT = {
                  askedAtMs: YT,
                  askSent: fm,
                  reaskedAtMs: jT,
                  nowMs: Date.now(),
                  panel: null !== (fT = null === (hT = wm.get()) || void 0 === hT ? void 0 : hT.kind) && void 0 !== fT ? fT : null,
                  inGameMenu: nA.c.get("openInGameMenuName"),
                  everythingMenu: null === Tm ? null : Tm === of.n.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== mm.baf2IslandsFocusInvite
                }).everythingMenu && (!!OT.focusInvite || "islands" === OT.panel && "clientGame" === OT.inGameMenu || !(OT.nowMs - OT.reaskedAtMs < yi) && (OT.askSent && OT.nowMs - OT.askedAtMs < yi ? "core" === OT.panel && "clientGame" === OT.inGameMenu && null === OT.everythingMenu : "shop" === OT.everythingMenu || null === OT.inGameMenu));
              if (fm && (YT = -1 / 0), jT = -1 / 0, !hm) return void IT()
            }
            const fm = (aT = mm.baf2IslandsOpen, xT = "islands" === (null === (TT = wm.get()) || void 0 === TT ? void 0 : TT.kind), pT = VT, ET = Date.now(), aT && !xT && ET - pT < yi);
            QT({
              kind: "islands",
              islands: mm,
              arrivedAtMs: Date.now(),
              backToCore: Ci(wm.get())
            }), fm && (VT = -1 / 0, jT = Date.now(), jm.send(Um)), mm.baf2IslandsOpen && ("clientGame" !== nA.c.get("openInGameMenuName") && (0, JA.d)(), (0, QA.s)())
          } else if ("baf2CoopTransfer" === mm) {
            var AT;
            const mm = Tm;
            mm.baf2TransferOn ? (QT({
              kind: "transfer",
              transfer: mm,
              arrivedAtMs: Date.now()
            }), (0, QA.s)()) : "transfer" === (null === (AT = wm.get()) || void 0 === AT ? void 0 : AT.kind) && (0, QA.h)()
          } else "baf2IslandLeft" === mm ? (Jm.dropHeld(), null !== wm.get() && nT(), "inventory" === nA.c.get("openInGameMenuName") && (0, JA.d)()) : "baf2Arc" === mm ? wT.lV(qm, Tm) : "baf2Blade" === mm ? DT.onBlade(qm, Tm) : "baf2JetFlame" === mm ? iT.lV(qm, Tm) : "baf2GearPower" === mm && RT.lV(Tm);
          var aT, xT, pT, ET, OT
        }
      };
      return zT
    }
  },
  38609: (mm, Tm, fm) => {
    function hm(mm, Tm, fm) {
      const hm = new Set,
        Am = new ResizeObserver(fm),
        am = () => {
          const Tm = new Set(document.querySelectorAll(mm));
          let am = !1;
          for (const mm of hm) Tm.has(mm) || (Am.unobserve(mm), hm.delete(mm), am = !0);
          for (const mm of Tm) hm.has(mm) || (Am.observe(mm), xm.observe(mm, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), hm.add(mm));
          am && fm()
        },
        xm = new MutationObserver((Tm => {
          Tm.some((mm => "attributes" === mm.type)) && fm(), Tm.some((Tm => function(mm, Tm, fm) {
            if ("childList" !== mm.type) return !1;
            for (const hm of mm.addedNodes)
              if (hm instanceof Element && (hm.matches(Tm) || hm.querySelector(Tm))) return !0;
            for (const hm of mm.removedNodes)
              if (hm instanceof Element)
                for (const mm of fm)
                  if (hm.contains(mm)) return !0;
            return !1
          }(Tm, mm, hm))) && am()
        }));
      xm.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const wm of Tm) Am.observe(wm);
      return window.addEventListener("resize", fm), am(), fm(), () => {
        Am.disconnect(), xm.disconnect(), window.removeEventListener("resize", fm)
      }
    }
    fm.d(Tm, {
      e: () => hm
    })
  },
  38588: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      e: () => am
    });
    const hm = new WeakMap;

    function Am(mm) {
      let Tm = hm.get(mm);
      return Tm || (Tm = {
        hidden: mm.hidden,
        x: NaN,
        y: NaN
      }, hm.set(mm, Tm)), Tm
    }

    function am(mm, Tm) {
      const fm = Am(mm);
      fm.hidden !== Tm && (fm.hidden = Tm, mm.hidden = Tm)
    }

    function xm(mm, Tm, fm) {
      const hm = Am(mm);
      hm.x === Tm && hm.y === fm || (hm.x = Tm, hm.y = fm, mm.style.translate = `${Tm}vw ${fm}vh`)
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);