export const id = 270;
export const ids = [270];
export const modules = {
  39301: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(39305);
    const be = [0, 0, 0];
    class Me {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be;
        this.pool = ee, this.origin = ie, this.count = 0, this.free = []
      }
      take() {
        var ee;
        const ie = null !== (ee = this.free.pop()) && void 0 !== ee ? ee : this.count++;
        return ie >= this.pool.bk && this.pool.grow(Math.max(2 * this.pool.bk, ie + 1)), this.hide(ie), ie
      }
      release(ee) {
        this.hide(ee), this.free.push(ee)
      }
      write(ee, ie, He, be) {
        const {
          records: Me
        } = this.pool, {
          origin: Ke
        } = this, Ue = ee * ye.e;
        Me[Ue] = ie - Ke[0], Me[Ue + 1] = He - Ke[1], Me[Ue + 2] = be - Ke[2], Me[Ue + ye.i] = 0, this.pool.markDirty(ee)
      }
      hide(ee) {
        this.pool.records[ee * ye.e + ye.i] = 1, this.pool.markDirty(ee)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Ke {
      constructor(ee, ie, He) {
        this.api = ee, this.model = ie, this.initialCapacity = He, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(ee) {
        let ie = this.kinds.get(ee);
        if (void 0 === ie) {
          const He = this.api.createInstancePool({
            ...this.model,
            item: ee
          }, this.initialCapacity);
          null === He || void 0 === He || He.setOrigin(this.origin[0], this.origin[1], this.origin[2]), ie = He && new Me(He, this.origin), this.kinds.set(ee, ie)
        }
        return ie
      }
      follow(ee) {
        const {
          origin: ie
        } = this;
        if (Math.abs(ee[0] - ie[0]) <= 512 && Math.abs(ee[1] - ie[1]) <= 512 && Math.abs(ee[2] - ie[2]) <= 512) return !1;
        ie[0] = Math.floor(ee[0]), ie[1] = Math.floor(ee[1]), ie[2] = Math.floor(ee[2]);
        for (const He of this.kinds.values()) null === He || void 0 === He || He.pool.setOrigin(ie[0], ie[1], ie[2]);
        return !0
      }
      commit() {
        for (const ee of this.kinds.values()) null === ee || void 0 === ee || ee.commit()
      }
      dispose() {
        for (const ee of this.kinds.values()) null === ee || void 0 === ee || ee.dispose();
        this.kinds.clear()
      }
    }
  },
  39315: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke,
      h: () => Ue,
      l: () => Fe
    });
    const ye = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      be = [0, 1, 2, 0, 2, 3],
      Me = [4, 5];

    function Ke(ee, ie, He, ye, be) {
      for (let Ke = 0; Ke < 6; Ke++) Me.includes(Ke) === be && Je(ee, ie, He, ye, Ke)
    }

    function Ue(ee, ie, He, ye) {
      for (let be = 0; be < 6; be++) Je(ee, ie, He, ye, be)
    }

    function Fe(ee, ie, He, Me, Ke) {
      for (let Ue = 0; Ue < 6; Ue++)
        for (const Fe of [0, 1]) {
          const [Je, oe, Re] = [Fe + 2, Fe + 1, (Fe + 3) % 4], ke = ee.length / 3;
          for (const [ie, be] of [
              [Fe, oe],
              [Je, oe],
              [Je, Re],
              [Fe, Re]
            ])
            for (let Fe = 0; Fe < 3; Fe++) {
              const Je = ye[3 * (4 * Ue + ie) + Fe],
                oe = ye[3 * (4 * Ue + be) + Fe];
              ee.push((Je + (oe - Je) * Ke) * Me / 2 + He[Fe])
            }
          for (const ee of be) ie.push(ke + ee)
        }
    }

    function Je(ee, ie, He, Me, Ke) {
      let [Ue, Fe, Je] = He, [oe, Re, ke] = Me;
      const qe = ee.length / 3;
      for (let be = 4 * Ke; be < 4 * Ke + 4; be++) ee.push(ye[3 * be] * oe / 2 + Ue, ye[3 * be + 1] * Re / 2 + Fe, ye[3 * be + 2] * ke / 2 + Je);
      for (const ye of be) ie.push(qe + ye)
    }
  },
  39281: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => pz
    });
    var ye = He(59);
    const be = [{
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
      Me = 10;
    let Ke = !0;

    function Ue() {
      return Ke
    }

    function Fe(ee) {
      Ke = ee
    }
    const Je = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function oe() {
      return Ke ? be.length : Me
    }

    function Re(ee) {
      var ie, He;
      return null !== (ie = null === (He = be[ee - 1]) || void 0 === He ? void 0 : He.reactorTier) && void 0 !== ie ? ie : 0
    }

    function ke(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Re(ee) > 0;
      return He && !Ke ? "hidden" : ee <= ie ? "open" : He ? ie < 5 ? "hidden" : ie < Me ? "teaser" : "locked" : "locked"
    }

    function qe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: ye,
        n: be
      } = pe(ee);
      return {
        key: ie[ye],
        params: {
          [ye]: He ? String(be) : be
        }
      }
    }
    const fe = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Te(ee, ie) {
      return Re(ee) > 0 && ie < Me
    }

    function pe(ee) {
      const ie = Re(ee);
      if (ie > 0) return {
        kind: "atomic",
        n: ie,
        short: `A${ie}`
      };
      const He = function(ee) {
        return ee >= 6 && ee <= 10 ? ee - 6 + 1 : 0
      }(ee);
      return He > 0 ? {
        kind: "stage",
        n: He,
        short: `S${He}`
      } : {
        kind: "tier",
        n: ee,
        short: String(ee)
      }
    }

    function Xe(ee) {
      return be[Math.max(1, Math.min(ee, be.length)) - 1]
    }

    function ze(ee, ie) {
      return ee < ie ? function(ee) {
        var ie;
        return null !== (ie = be[ee]) && void 0 !== ie ? ie : null
      }(ee) : null
    }
    const Be = "baf2coresubmit",
      Ee = "baf2corebankpause",
      ge = "baf2coredeposit",
      Oe = "baf2corechargepause";

    function de(ee) {
      var ie;
      return null !== (ie = ee.baf2CoreOpen) && void 0 !== ie ? ie : Me
    }
    const We = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function te(ee) {
      return We.includes(ee)
    }
    const Ze = (ee, ie) => ie.map((ie => [ie, [ee]])),
      we = Object.fromEntries([...Ze("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Ze("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Ze("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Ze("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Ze("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Ze("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Ze("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Ze("Parts Bench", ["Focus Lens"]), ...Ze("Machine Bench", ["Laser", "Collider"]), ...Ze("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Ze("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Ze("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Ze("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Ze("Tool Bench", ["Mob Cage"]), ...Ze("Tool Bench", ["Pocket Terminal"]), ...Ze("Tool Bench", ["Comet Beacon"]), ...Ze("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function De(ee) {
      var ie;
      return null !== (ie = we[ee]) && void 0 !== ie ? ie : ["Workbench"]
    }

    function Pe(ee) {
      return De(ee)[0]
    }
    be.slice(1).map(((ee, ie) => `Core Tier ${ie+2}`));
    var Ae = He(9961);
    const Ye = ["on", "hud", "off"];

    function Ve(ee) {
      return "on" === ee
    }
    var ae = He(347);
    const ce = "Mob Farm",
      xe = {
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
      Le = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Ce = {
        1: 20,
        2: 60,
        3: 120
      },
      ve = "baf2farmvoid",
      ue = "Caged ",
      me = " Spawner Block";

    function le(ee) {
      return `lifeform:${(0,ae.ve)(ee)}`
    }

    function Se(ee) {
      if (!ee) return null;
      if (ee.startsWith(ue)) {
        const ie = ee.slice(6);
        return Le.includes(ie) ? ie : null
      }
      if (ee.endsWith(me)) {
        const ie = ee.slice(0, -14);
        return void 0 !== xe[ie] ? ie : null
      }
      return null
    }

    function ne(ee) {
      return !0 === ee.mobFarm
    }

    function je(ee, ie) {
      return Ce[xe[ie]] * ee.opMs / 1e3
    }
    const se = new Map;
    const Ie = "baf2islands",
      he = "baf2islandnew";

    function Ne(ee) {
      const ie = be.findIndex((ie => ie.unlocks.includes(ee)));
      return ie < 0 ? 1 : ie + 1
    }

    function Ge(ee) {
      return Math.floor(ee).toLocaleString("en-US")
    }
    var re = He(39214);
    const Qe = "baf2terminaltake",
      ei = "baf2terminalput",
      ii = ["one", "stack", "fill"];

    function Hi(ee, ie, He) {
      return `${Qe} ${ee} ${ie} ${He}`
    }

    function yi(ee, ie, He) {
      return `${ei} ${ee} ${ie} ${He}`
    }

    function bi(ee) {
      return `${ei} ${ee}`
    }
    const Mi = [
      [`${Qe} `, "take"],
      [`${ei} `, "put"]
    ];

    function Ki(ee) {
      const ie = Mi.find((ie => {
        let [He] = ie;
        return ee.startsWith(He)
      }));
      if (!ie) return null;
      const [He, ye] = ie, [be, Me, ...Ke] = ee.slice(He.length).trim().split(" "), Ue = Number(be);
      if (!Number.isSafeInteger(Ue) || Ue <= 0) return null;
      if ("put" === ye && void 0 === Me) return {
        kind: "putAll",
        seq: Ue
      };
      const Fe = function(ee) {
        if (ii.includes(ee)) return ee;
        const ie = Number(ee);
        return /^\d+$/.test(ee) && Number.isSafeInteger(ie) && ie > 0 ? ie : null
      }(null !== Me && void 0 !== Me ? Me : "");
      return null === Fe || 0 === Ke.length ? null : {
        kind: ye,
        seq: Ue,
        mode: Fe,
        item: Ke.join(" ")
      }
    }

    function Ui(ee, ie) {
      const He = "number" === typeof ee ? ee : "one" === ee ? 1 : "stack" === ee ? 99 : ie;
      return Math.min(ie, He)
    }

    function Fi(ee, ie) {
      const He = ee => "number" === typeof ee ? ee : "one" === ee ? 1 : 99;
      return "fill" === ee || "fill" === ie ? "fill" : He(ee) + He(ie)
    }

    function Ji(ee, ie) {
      const He = Ki(ee),
        ye = Ki(ie),
        be = He && ye ? function(ee, ie) {
          return "take" === ee.kind || "take" === ie.kind ? "take" === ee.kind && "take" === ie.kind && ee.item === ie.item ? {
            ...ie,
            mode: Fi(ee.mode, ie.mode)
          } : null : "putAll" === ee.kind || "putAll" === ie.kind ? {
            kind: "putAll",
            seq: ie.seq
          } : ee.item === ie.item ? {
            ...ie,
            mode: Fi(ee.mode, ie.mode)
          } : null
        }(He, ye) : null;
      return be ? "putAll" === (Me = be).kind ? bi(Me.seq) : "put" === Me.kind ? yi(Me.seq, Me.mode, Me.item) : Hi(Me.seq, Me.mode, Me.item) : null;
      var Me
    }
    const oi = "baf2rx";

    function Ri(ee, ie) {
      for (var He = arguments.length, ye = new Array(He > 2 ? He - 2 : 0), be = 2; be < He; be++) ye[be - 2] = arguments[be];
      return [oi, ee[0], ee[1], ee[2], ie, ...ye].join(" ")
    }
    const ki = 2,
      qi = 4,
      fi = 8,
      Ti = 16,
      Xi = 32,
      zi = 64,
      Bi = 128,
      Ei = 256,
      gi = 512,
      Oi = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      di = [{
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
    const Wi = "Biomass",
      ti = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function Zi(ee) {
      return {
        input: Wi,
        inputAmount: 1,
        output: ee,
        outputAmount: 1
      }
    }
    const wi = "baf2synth",
      Di = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      Pi = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Ai = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      Yi = function(ee, ie) {
        return {
          input: ee,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: ie,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Vi = function(ee, ie) {
        return {
          ...Yi(ee, ie, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      ai = Pi.map((ee => Vi(ee, "Biomass", 2))),
      ci = {
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
          recipes: [Yi("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), Yi("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), Yi("Raw Gold", "Gold Grit", 2), Yi("Messy Stone", "Sand"), Yi("Gravel", "Sand"), Yi("Raw Voltite", "Voltite Dust", 2), Yi("Moonstone", "Moonstone Dust", 4), Yi("Wheat Seeds", "Fertiliser"), Yi("Raw Uranium", "Uranium Grit", 2), Vi("Mossy Messy Stone", "Sand"), ...ai],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Yi("Iron Grit", "Iron Bar"), Yi("Copper Grit", "Copper Bar"), Yi("Gold Grit", "Gold Bar"), Yi("Raw Iron", "Iron Bar"), Yi("Raw Copper", "Copper Bar"), Yi("Raw Gold", "Gold Bar"), Yi("Sand", "Glass"), Yi("Messy Stone", "Stone"), ...ae.Yc.map((ee => Yi(ee, "Charcoal", 1, 4))), Yi("Wheat", "Bread", 1, 2), ...Pi.map(((ee, ie) => Vi(ee, Ai[ie])))],
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
          recipes: [Yi("Iron Bar", "Iron Plate"), Yi("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Yi("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Yi("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [Yi("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), Yi("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), Yi("Raw Gold", "Gold Grit", 3), Yi("Raw Voltite", "Voltite Dust", 3), Yi("Messy Stone", "Sand", 2), Yi("Gravel", "Sand", 2), Yi("Moonstone", "Moonstone Dust", 6), Yi("Raw Uranium", "Uranium Grit", 3), Vi("Mossy Messy Stone", "Sand", 2), ...ai],
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
          table: Oi
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Yi("Coal", "Diamond", 1, 24), Yi("Voltite Dust", "Moonstone", 1, 12)],
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
        ...re.j
      },
      xi = {
        Crusher: [Yi("Spent Pellet", "Glow Dust"), Yi("Wheat Seeds", "Biomass"), Yi("Wheat", "Biomass"), Yi("Dead Bush", "Biomass"), Yi("Dusk Moss", "Biomass"), Yi("Rotten Flesh", "Biomass"), Yi("Bone", "Biomass", 2)],
        "Shatter Mill": [Yi("Spent Pellet", "Glow Dust"), Yi("Wheat Seeds", "Biomass"), Yi("Wheat", "Biomass"), Yi("Dead Bush", "Biomass"), Yi("Dusk Moss", "Biomass"), Yi("Rotten Flesh", "Biomass"), Yi("Bone", "Biomass", 2), ...ae.Yc.map((ee => Yi(ee, "Biomass")))],
        Smelter: [Yi("Biomass", "Fertiliser", 2)],
        Press: [Yi("Coal", "Graphite", 1, 4)]
      },
      Li = "Power Coupler",
      Ci = "Advanced Coupler",
      vi = "Nova Coupler",
      ui = [{
        item: Li,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: Ci,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: vi,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const mi = new Map;

    function li(ee) {
      var ie, He;
      return null !== (ie = null !== (He = ee.fuelSlot) && void 0 !== He ? He : ee.couplerSlot) && void 0 !== ie ? ie : null
    }

    function Si(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!ee.couplable) throw new Error(`${ee.kind} takes no Power Coupler`);
      let He = mi.get(ee);
      He || (He = [], mi.set(ee, He));
      let ye = He[ie];
      if (!ye) {
        var be;
        const {
          divisor: Me,
          powerPerS: Ke
        } = ui[ie - 1], Ue = ee.opMs / Me, Fe = void 0 !== ee.fluidMade || void 0 !== ee.cryoMade ? ee.powerPerOp : Ke * Ue / 1e3;
        ye = {
          ...ee,
          fuelSlot: null,
          couplerSlot: null !== (be = li(ee)) && void 0 !== be ? be : void 0,
          opMs: Ue,
          powerPerOp: Fe,
          coupled: !0
        }, ie > 1 && (ye = {
          ...ye,
          couplerLevel: ie
        }), He[ie] = ye
      }
      return ye
    }
    const ni = new Map;
    const ji = new Map;

    function si(ee, ie) {
      if (null === ie || (He = ie, !ti.includes(He))) return ee;
      var He;
      let ye = ji.get(ie);
      return ye || (ye = {
        ...ee,
        recipes: [Zi(ie)]
      }, ji.set(ie, ye)), ye
    }

    function Ii(ee) {
      return !0 === ee.synth
    }
    const Ni = (ee, ie, He, ye) => ({
        output: ee,
        outputAmount: ie,
        tier: He,
        inputs: ye.map((ee => {
          let [ie, He] = ee;
          return {
            item: ie,
            amount: He
          }
        }))
      }),
      Gi = Object.fromEntries([Ni("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), Ni("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), Ni("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Ni("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), Ni("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), Ni("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), Ni("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), Ni("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), Ni("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), Ni("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), Ni("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), Ni("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), Ni("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), Ni("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), Ni("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Ni("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), Ni("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Ni("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), Ni("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Ni("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), Ni("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), Ni("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), Ni("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), Ni("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), Ni("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), Ni("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), Ni("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), Ni("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), Ni("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), Ni("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((ee => [ee.output, ee]))),
      ri = new Map;

    function Qi(ee, ie) {
      let He = ci[ee];
      if (ie.atomic && (He = function(ee) {
          const ie = xi[ee.kind];
          if (!ie) return ee;
          let He = ni.get(ee.kind);
          if (!He) {
            const ye = new Set(ie.map((ee => ee.input))),
              be = ee.recipes.filter((ee => !ye.has(ee.input)));
            He = {
              ...ee,
              recipes: [...be, ...ie]
            }, ni.set(ee.kind, He)
          }
          return He
        }(He)), He.synth) return si(He, ie.taught);
      if (ie.coupled && He.couplable) return Si(He, ie.level);
      const ye = He.inputSlots && null !== ie.taught ? Gi[ie.taught] : void 0;
      if (!ye) return He;
      const be = `${ee}|${ye.output}`;
      let Me = ri.get(be);
      return Me || (Me = {
        ...He,
        bench: ye
      }, ri.set(be, Me)), Me
    }
    const eH = ["Diamond", "Moonstone"];

    function iH(ee) {
      return new Set(ee.flatMap((ee => ee.bonus ? [ee.output, ee.bonus.item] : [ee.output])).filter((ee => !eH.includes(ee))))
    }
    const HH = Object.values(ci).flatMap((ee => ee.recipes));
    iH(HH.filter((ee => !0 !== ee.nuclear))), iH([...HH.filter((ee => !0 === ee.nuclear)), ...Object.values(xi).flat()]);

    function yH(ee) {
      return null === ee.inputSlot && void 0 === ee.inputSlots && void 0 === ee.powerMade && void 0 === ee.fluidMade && !ee.treeCutter && void 0 === ee.table
    }

    function bH(ee) {
      return !0 === ee.treeCutter
    }
    const MH = ["Voltite Cell"];

    function KH(ee) {
      var ie, He;
      return null !== (ie = null === (He = ee.fuels) || void 0 === He ? void 0 : He.some((ee => MH.includes(ee)))) && void 0 !== ie && ie
    }
    const UH = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(ae.Yc.map((ee => [ee, 8e3]))),
        ...Object.fromEntries(ae.Hd.map((ee => [ee, 2e3]))),
        "Voltite Cell": 12e4
      },
      FH = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      JH = {
        "Uranium Deposit": 4e3
      };

    function oH(ee) {
      var ie;
      return null !== (ie = Object.keys(FH).find((ie => FH[ie] === ee))) && void 0 !== ie ? ie : null
    }

    function RH(ee) {
      return Di.includes(ee)
    }

    function kH(ee) {
      return !0 !== ee.nuclear || Ue()
    }
    var qH = He(335);
    var fH = He(10046),
      TH = He(9969),
      pH = He(10049),
      XH = He(10038);
    const zH = "Reactor Controller",
      BH = "Reactor Port",
      EH = "Battery Cell",
      gH = ["fuel", "water", "waste"],
      OH = {
        fuel: BH,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      dH = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      WH = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      tH = "Reactor Frame",
      ZH = "Reactor Glass",
      wH = {
        edge: [tH],
        cap: [ZH, BH],
        wall: [ZH, BH],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [zH]
      },
      DH = {
        edge: [EH],
        cap: [EH],
        wall: [EH],
        inside: [EH],
        ctrl: [EH]
      },
      PH = ["edge", "cap", "wall", "inside"],
      AH = ["Reactor Slag"];

    function YH(ee) {
      return AH.includes(VH(ee))
    }

    function VH(ee) {
      const ie = ee.indexOf("|");
      return ie < 0 ? ee : ee.slice(0, ie)
    }

    function aH(ee) {
      return VH(ee) === zH ? "reactor" : null
    }

    function cH(ee) {
      return VH(ee) !== BH ? null : ee.endsWith("|Water") ? "water" : ee.endsWith("|Waste") ? "waste" : "fuel"
    }

    function xH(ee) {
      const ie = cH(ee);
      return null === ie ? null : vH(OH[gH[(gH.indexOf(ie) + 1) % gH.length]], function(ee) {
        return ee.includes(LH)
      }(ee))
    }
    const LH = "|meta|rot1|Formed",
      CH = new Set([tH, ZH, BH]);

    function vH(ee, ie) {
      var He;
      const ye = VH(ee);
      if (!CH.has(ye)) return ee;
      if (ye !== BH) return ie ? ye + LH : ye;
      const be = null !== (He = cH(ee)) && void 0 !== He ? He : "fuel";
      return ie ? "fuel" === be ? ye + LH : `${ye}${LH}|${"water"===be?"Water":"Waste"}` : OH[be]
    }

    function uH(ee, ie) {
      const He = My(ee, ie);
      if ("Air" === He) return !1;
      const ye = "reactor" === ee ? wH : DH;
      return PH.some((ee => ye[ee].includes(He))) || "reactor" === ee && AH.includes(He)
    }

    function mH(ee) {
      return WH[ee]
    }

    function lH(ee) {
      var ie;
      return null !== (ie = dH[ee]) && void 0 !== ie ? ie : dH[1]
    }

    function SH(ee) {
      const [ie, , He] = lH(ee);
      return [He, 0, -ie]
    }

    function nH(ee, ie, He, ye, be, Me) {
      return {
        ctrl: [ee[0], ee[1], ee[2]],
        rot: dH[ie] ? ie : 1,
        w: He,
        h: ye,
        d: be,
        cu: Me[0],
        cv: Me[1]
      }
    }

    function jH(ee, ie) {
      return "reactor" === ee ? [Math.floor((ie - 1) / 2), 0] : [0, 0]
    }

    function sH(ee, ie, He, ye, be) {
      let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ee.rot;
      if (He === ee.w && ye === ee.h && be === ee.d && Me === ee.rot) return ee;
      const [Ke] = jH(ie, ee.w);
      if (ee.cu === Ke && ee.cv <= 1) return nH(ee.ctrl, Me, He, ye, be, jH(ie, He));
      const Ue = (ee, ie) => Math.max(1, Math.min(ie, ee));
      return nH(ee.ctrl, Me, He, ye, be, [Ue(ee.cu, He - 2), 0 === ee.cv ? 0 : Ue(ee.cv, ye - 2)])
    }
    const IH = 11,
      hH = 2 * IH + 1;
    new Uint8Array(hH * hH * hH);

    function NH(ee) {
      return ee.w * ee.h * ee.d
    }

    function GH(ee) {
      const ie = SH(ee.rot);
      return [ee.ctrl[0] - ie[0] * ee.cu, ee.ctrl[1] - ee.cv, ee.ctrl[2] - ie[2] * ee.cu]
    }

    function rH(ee) {
      return ee.cv * ee.d * ee.w + ee.cu
    }

    function QH(ee, ie) {
      const He = ie % ee.w,
        ye = Math.floor(ie / ee.w) % ee.d;
      return [He, Math.floor(ie / (ee.w * ee.d)), ye]
    }

    function ey(ee, ie) {
      const [He, ye, be] = QH(ee, ie), Me = GH(ee), Ke = lH(ee.rot), Ue = SH(ee.rot);
      return [Me[0] + Ue[0] * He - Ke[0] * be, Me[1] + ye, Me[2] + Ue[2] * He - Ke[2] * be]
    }

    function iy(ee, ie) {
      const He = GH(ee),
        ye = lH(ee.rot),
        be = SH(ee.rot),
        Me = ie[0] - He[0],
        Ke = ie[2] - He[2],
        Ue = Me * be[0] + Ke * be[2],
        Fe = -(Me * ye[0] + Ke * ye[2]),
        Je = ie[1] - He[1];
      return Ue < 0 || Ue >= ee.w || Je < 0 || Je >= ee.h || Fe < 0 || Fe >= ee.d ? -1 : (Je * ee.d + Fe) * ee.w + Ue
    }

    function Hy(ee, ie) {
      if (ie === rH(ee)) return "ctrl";
      const [He, ye, be] = QH(ee, ie), Me = 0 === ye || ye === ee.h - 1, Ke = Number(0 === He || He === ee.w - 1) + Number(Me) + Number(0 === be || be === ee.d - 1);
      return Ke >= 2 ? "edge" : 1 === Ke ? Me ? "cap" : "wall" : "inside"
    }

    function yy(ee, ie) {
      const [He, ye, be] = QH(ee, ie);
      return 0 === He || He === ee.w - 1 || 0 === ye || ye === ee.h - 1 || 0 === be || be === ee.d - 1 ? -1 : ((ye - 1) * (ee.d - 2) + (be - 1)) * (ee.w - 2) + (He - 1)
    }

    function by(ee, ie) {
      const He = ee.w - 2,
        ye = ee.d - 2,
        be = ie % He + 1,
        Me = Math.floor(ie / He) % ye + 1;
      return ((Math.floor(ie / (He * ye)) + 1) * ee.d + Me) * ee.w + be
    }

    function My(ee, ie) {
      const He = VH(ie);
      return "reactor" === ee && He === zH ? tH : He
    }

    function Ky(ee, ie, He) {
      const ye = "ctrl" === ie ? VH(He) : My(ee, He);
      return ("reactor" === ee ? wH : DH)[ie].includes(ye) ? "ok" : "Air" === ye ? "missing" : uH(ee, He) ? "wrong" : "blocked"
    }

    function Uy(ee, ie) {
      return "battery" === ee ? EH : "inside" === ie ? null : function(ee, ie) {
        if ("inside" === ie || "ctrl" === ie || "battery" === ee) return null;
        return "edge" === ie ? tH : ZH
      }(ee, ie)
    }
    const Fy = {
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
      Jy = "Collider",
      oy = "Laser",
      Ry = "Star Alloy",
      ky = "Glow Dust",
      qy = [Jy, "_Collider Focus"];

    function fy(ee) {
      return qy.indexOf(VH(ee))
    }

    function Ty(ee) {
      return VH(ee) === oy
    }

    function py(ee) {
      return [
        [ee[0], ee[1], ee[2]],
        [ee[0], ee[1] + 1, ee[2]]
      ]
    }
    const Xy = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function zy(ee, ie, He) {
      const ye = Xy[ie];
      return [ee[0] + ye[0] * He, ee[1], ee[2] + ye[2] * He]
    }

    function By(ee, ie) {
      if (ie[1] !== ee[1]) return null;
      const He = ie[0] - ee[0],
        ye = ie[2] - ee[2];
      if (0 !== He === (0 !== ye)) return null;
      const be = Math.abs(He + ye);
      if (be > Fy.LASER_D) return null;
      return {
        dir: ye < 0 ? 0 : He > 0 ? 1 : ye > 0 ? 2 : 3,
        Po: be
      }
    }

    function Ey(ee, ie, He) {
      const ye = ie => Math.abs(ee[0] - ie[0]) <= 1 && Math.abs(ee[1] - ie[1]) <= 1;
      return ye(ie) || ye(He)
    }

    function gy(ee, ie) {
      return function(ee, ie, He, ye) {
        return [0, 1, 2, 3].map((be => {
          for (let Me = 1; Me <= Fy.LASER_D; Me++) {
            const Ke = zy(ee, be, Me);
            if (Ey([Ke[0], Ke[2]], ie, He) || !ye(Ke)) return !1
          }
          return !0
        }))
      }(py(ee)[1], ie.spawnXZ, ie.coreXZ, (ee => ee[1] >= fH.o && ee[1] < fH.o + fH.p && ee[0] >= ie.minXZ[0] && ee[0] <= ie.maxXZ[0] && ee[2] >= ie.minXZ[1] && ee[2] <= ie.maxXZ[1]))
    }
    const Oy = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function dy(ee) {
      return Math.max(48 + 16 * ee, Xe(ee).machineAllowance)
    }
    const Wy = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function ty(ee) {
      const ie = ee.split("|")[0];
      return Wy.includes(ie) ? "Solar Panel" : ie === pH.e ? "Fluid Pipe" : fy(ie) >= 0 ? "Collider" : (He = ie, Oy.includes(He) ? ie : null);
      var He
    }
    const Zy = "buildAFactory2Game:solarPanelDescription";
    const wy = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function Dy(ee, ie) {
      var He;
      return null !== (He = wy.find((He => {
        var ye;
        return (null !== (ye = ee.level(He)) && void 0 !== ye ? ye : 0) >= ie
      }))) && void 0 !== He ? He : null
    }
    const Py = "buildAFactory2Game:";
    let Ay = null;
    const Yy = {
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
      Vy = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      ay = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      cy = {
        "Loot Chest": `${Py}lookRuinChestName`
      };

    function xy(ee, ie) {
      var He, ye, be;
      let Me = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ie;
      if ("Solar Panel" === ty(ie)) return {
        name: (0, ae.Be)(ee.displayName("Solar Panel")),
        detail: Zy,
        detailItem: null
      };
      const Ke = ie.endsWith(" Ore"),
        Fe = (Ay ??= new Set([...Object.keys((0, TH.j)()), ...Object.keys((0, pH.q)())].map((ee => ee.split("|")[0]))), Ay).has(ie),
        Je = Ke || Fe ? null : function(ee) {
          var ie;
          return ee.endsWith(" Log") && !ee.startsWith("Barkless ") ? "lookLog" : ee.endsWith(" Sapling") ? "lookSapling" : ee.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (ie = Yy[ee]) && void 0 !== ie ? ie : null
        }(ie);
      if (!ee.isBlock(ie) || !Ke && !Fe && null === Je) return null;
      const oe = null !== (He = cy[ie]) && void 0 !== He ? He : (0, ae.Yb)(ie, null !== (ye = ee.displayName(Me)) && void 0 !== ye ? ye : ee.displayName(ie));
      if (null !== Je) return {
        name: oe,
        detail: `${Py}${Je}`,
        detailItem: null
      };
      const Re = null !== (be = Vy[ie]) && void 0 !== be ? be : Ue() ? ay[ie] : void 0;
      if (Fe && void 0 !== Re) return {
        name: oe,
        detail: `${Py}${Re}`,
        detailItem: null
      };
      const ke = FH[ie];
      if (void 0 !== ke) return {
        name: oe,
        detail: `${Py}lookDeposit`,
        detailItem: (0, ae.Yb)(ke, ee.displayName(ke))
      };
      const qe = ee.harvestLevel(ie);
      if (Ke && "rock" === ee.harvestType(ie) && 0 !== qe) {
        const ie = Dy(ee, null !== qe && void 0 !== qe ? qe : 0);
        if (ie === wy[0]) return {
          name: oe,
          detail: `${Py}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== ie) return {
          name: oe,
          detail: `${Py}lookPickaxe`,
          detailItem: (0, ae.Yb)(ie, ee.displayName(ie))
        }
      }
      return {
        name: oe,
        detail: (0, ae.Be)(ee.description(ie)),
        detailItem: null
      }
    }

    function Ly(ee) {
      return ee < fH.o - 24
    }
    const Cy = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const vy = "Wrench",
      uy = "Nova Wrench";

    function my(ee) {
      return ee === vy || ee === uy
    }
    const ly = [...fH.J, "Belt Lift", "Belt Drop"];
    const Sy = ["Belt Lift", "Belt Drop"],
      ny = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function jy(ee) {
      return ee.split("|")[0]
    }

    function sy(ee) {
      const ie = /\|rot(\d)/.exec(ee);
      return ie ? Number(ie[1]) : 1
    }

    function Iy(ee) {
      return ee % 4 + 1
    }

    function hy(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === ie && "" === He ? ee : `${ee}|meta|rot${ie}${He}`
    }

    function Ny(ee) {
      return jy(ee) === fH.z ? (0, fH.R)(ee) ? "gateRight" : "gateLeft" : (0, fH.Z)(ee)
    }

    function Gy(ee) {
      const ie = jy(ee),
        He = sy(ee);
      if (fH.J.includes(ie)) return (0, fH.M)(ie, Iy(He), null);
      if (ie === fH.i) return (0, fH.eb)(Iy(He), (0, fH.V)(ee));
      if (ie === fH.D) {
        const ye = ny[(0, fH.Z)(ee)];
        return null === ye ? hy(ie, Iy(He)) : hy(ie, He, fH.F[ye])
      }
      return ie === fH.z ? (0, fH.R)(ee) ? hy(ie, Iy(He)) : hy(ie, He, fH.k) : XH.e.includes(ie) && !Sy.includes(ie) || RH(ie) ? hy(ie, Iy(He)) : null
    }

    function ry(ee) {
      return XH.e.includes(ee) || RH(ee) || null !== ty(ee)
    }

    function Qy(ee) {
      return "Solar Panel" === ty(ee)
    }
    const eb = "buildAFactory2Game:",
      ib = {
        leftFront: `${eb}lookSplitDetail_leftFront`,
        frontRight: `${eb}lookSplitDetail_frontRight`,
        gateRight: `${eb}lookGateDetail_gateRight`
      };

    function Hb(ee, ie) {
      var He;
      let ye = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const be = Ny(ee),
        Me = null === be ? null : `${eb}${be.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${be}`,
        Ke = null === be ? null : null !== (He = ib[be]) && void 0 !== He ? He : null;
      if (my(ie) && ye) {
        const He = jy(ee);
        return ie === uy && Ue() && function(ee) {
          return ly.includes(jy(ee))
        }(ee) ? {
          mode: Me,
          detail: Ke,
          next: `${eb}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: Me,
          detail: Ke,
          next: ry(He) && !Qy(He) ? `${eb}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const Fe = my(ie) ? Gy(ee) : null;
      if (null === Fe) return {
        mode: Me,
        detail: Ke,
        next: null,
        nextState: null
      };
      const Je = Ny(Fe);
      return null === Je || sy(Fe) !== sy(ee) ? {
        mode: Me,
        detail: Ke,
        next: `${eb}lookWrenchTurn`,
        nextState: null
      } : {
        mode: Me,
        detail: Ke,
        next: `${eb}lookWrenchNext`,
        nextState: `${eb}lookWrenchState_${Je}`
      }
    }
    const yb = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const bb = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function Mb(ee) {
      return [0, 1, 2, 3].map((ie => 0 !== (ee & 1 << ie)))
    }

    function Kb(ee) {
      const ie = [];
      for (let He = 8; He + 2 < ee.length; He += 3) ie.push([ee[He], ee[He + 1], ee[He + 2]]);
      return {
        focus: [ee[0], ee[1], ee[2]],
        lasers: Mb(ee[3]),
        open: Mb(ee[4]),
        live: Mb(ee[5]),
        on: 1 === ee[6],
        state: bb[ee[7]],
        blockers: ie
      }
    }
    const Ub = "Arc Caster",
      Fb = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      Jb = (Object.values(Fb), "Jet Chestplate"),
      ob = "Nova Jet Chestplate",
      Rb = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      kb = Object.values(Rb);

    function qb(ee, ie, He) {
      return Math.min(function(ee) {
        return Ue() && Re(ee) >= 5 ? 20 : 10
      }(He), Math.floor(function(ee, ie) {
        return Math.max(0, ee) + (Ue() ? Math.max(0, ie) : 0)
      }(ee, ie) / 5))
    }

    function fb(ee, ie, He) {
      const ye = qb(ie, He, ee),
        be = Re(ee),
        Me = (be >= 3 ? 55 : be >= 1 ? 50 : ee >= 8 ? 45 : 30) + ye,
        Ke = Math.max(100 + ye, 2 * Me);
      return {
        arcDamage: Me,
        arcPierce: ee >= 7 ? 2 : 1,
        arcChain: ee >= 10,
        barrierMax: (be >= 4 ? 100 : be >= 2 ? 90 : ee >= 9 ? 80 : ee >= 6 ? 60 : 40) + 5 * ye,
        barrierRegenPerS: be >= 5 ? 20 : ee >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * ye,
        novaShieldRegenPerS: 32,
        bladeDamage: Ke,
        bladePunch: Math.round(.5 * Ke),
        forgeRank: ye
      }
    }
    const Tb = {
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
    var pb = He(37652),
      Xb = He(37427),
      zb = He(37424),
      Bb = He(18),
      Eb = He(1620),
      gb = He(1053),
      Ob = He.n(gb);

    function db(ee) {
      return !0 === ee.field
    }
    const Wb = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function tb(ee) {
      return Wb.has(ee) ? `buildAFactory2Game:itemPlural_${(0,ae.ve)(ee)}` : null
    }
    var Zb = He(1127),
      wb = He(1323),
      Db = He(1970),
      Pb = He(1956),
      Ab = He(1392),
      Yb = He(37646),
      Vb = He(27),
      ab = He(37639);
    const cb = "baf2QuestView",
      xb = "baf2PlayerY",
      Lb = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class Cb {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = ee, this.view = {
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
      set(ee, ie) {
        var He, ye, be, Me, Ke, Ue, Fe, Je;
        const oe = JSON.stringify(ee.baf2QuestName) === JSON.stringify(this.view.name),
          Re = new Set(this.view.rows.filter((ee => ee.done)).map((ee => ee.id))),
          ke = new Set(this.view.rows.filter((ee => ee.justFinished)).map((ee => ee.id))),
          qe = ee.baf2QuestSide,
          fe = null !== qe && !0 === ee.baf2QuestSideFocus;
        let Te = !1,
          pe = 0;
        const Xe = ee.baf2QuestSteps.map((ee => {
            const ie = sb(ee, Lb.has(ee[0]) ? ee[0] : "" + pe++),
              He = oe && ie.done && !Re.has(ie.id);
            return ie.justFinished = He || oe && ie.done && ke.has(ie.id), Te ||= He, ie
          })),
          ze = jb(Xe);
        ze >= 0 && !fe && (Xe[ze].current = !0);
        const Be = !oe && null !== ee.baf2QuestName,
          Ee = JSON.stringify(qe && [qe[0], qe[1]]),
          ge = Ee === JSON.stringify(null !== (He = null === (ye = this.view.side) || void 0 === ye ? void 0 : ye.name) && void 0 !== He ? He : null),
          Oe = null !== qe && !this.sidesSeen.has(Ee);
        Oe && this.sidesSeen.add(Ee), this.serverTutorial = null !== (be = ee.baf2QuestTutorial) && void 0 !== be ? be : "on", (null !== (Me = ee.baf2QuestTutorialSeq) && void 0 !== Me ? Me : 0) >= this.pickSeq && this.endPick();
        const de = !oe || !ge || ee.baf2QuestTier !== this.view.tier;
        this.view = {
          name: ee.baf2QuestName,
          rows: Xe,
          reward: ee.baf2QuestReward,
          goal: ee.baf2QuestGoal,
          pulse: this.view.pulse + (Te || Be ? 1 : 0),
          itemNames: ie,
          side: qe && {
            name: [qe[0], qe[1]],
            row: {
              ...sb(qe[2], "side"),
              current: fe
            },
            goal: null !== (Ke = qe[3]) && void 0 !== Ke ? Ke : null
          },
          sideCameUpAt: Oe ? Date.now() : this.view.sideCameUpAt,
          tier: ee.baf2QuestTier,
          core: ee.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (Ue = ee.baf2QuestAlso) && void 0 !== Ue ? Ue : [],
          depth: null !== (Fe = ee.baf2QuestDepth) && void 0 !== Fe ? Fe : null,
          tutorial: null !== (Je = this.pickedTutorial) && void 0 !== Je ? Je : this.serverTutorial,
          tutorialKnown: !0
        }, this.yR(), Te && this.scheduleClear(), de && this.requestBook()
      }
      setTutorial(ee) {
        return this.endPick(), this.pickedTutorial = ee, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.yR()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: ee
        }, this.yR(), this.pickSeq
      }
      onPlayerY(ee) {
        const ie = Math.floor(ee);
        ie !== this.playerY && (this.playerY = ie, this.view.depth && Vb.h.yR(xb, ie))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(ee) {
        this.view = {
          ...this.view,
          chapters: ee.baf2BookChapters
        }, this.yR()
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
            rows: this.view.rows.map((ee => ee.justFinished ? {
              ...ee,
              justFinished: !1
            } : ee))
          }, this.yR()
        }), 2400)
      }
      yR() {
        Vb.h.yR(cb, this.view, !0)
      }
    }

    function vb(ee, ie) {
      return ee.sideCameUpAt > 0 && ie - ee.sideCameUpAt < 2400
    }

    function ub(ee) {
      return (null === ee.name || mb(ee)) && null === ee.side && null !== ee.chapters
    }

    function mb(ee) {
      var ie;
      return "quest_forgeOngoing" === (null === (ie = ee.name) || void 0 === ie ? void 0 : ie[0])
    }

    function lb(ee) {
      return ee.filter((ee => !Lb.has(ee.key)))
    }

    function Sb(ee) {
      return ee.key.startsWith("stepCraft")
    }

    function nb(ee, ie) {
      const He = new Set,
        ye = ee.side ? [...ee.rows, ee.side.row] : ee.rows;
      for (const Me of ye)
        if (!Me.done) {
          !Me.item || ie && !Sb(Me) || He.add(Me.item);
          for (const [ee, ie, ye] of null !== (be = Me.chips) && void 0 !== be ? be : []) {
            var be;
            ie < ye && He.add(ee)
          }
        } return He
    }

    function jb(ee) {
      const ie = ee.findIndex((ee => !ee.done && !ee.away));
      return ie >= 0 ? ie : ee.findIndex((ee => !ee.done))
    }

    function sb(ee, ie) {
      let [He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re] = ee;
      return {
        id: ie,
        key: He,
        params: ye,
        item: be,
        amount: Me,
        total: Ke,
        done: Ue,
        chips: null !== Fe && void 0 !== Fe ? Fe : null,
        current: !1,
        away: !0 === Je,
        madeFor: null !== oe && void 0 !== oe ? oe : [],
        also: null !== Re && void 0 !== Re ? Re : [],
        justFinished: !1
      }
    }
    const Ib = "baf2QuestItems",
      hb = new Set;
    let Nb = new Set,
      Gb = null;

    function rb(ee) {
      const ie = Ve(ee.tutorial),
        He = ie ? nb(ee, !0) : hb;
      "inventory" === Bb.e.get("openInGameMenuName") ? (Gb = null, (0, ab.u)(He)) : Gb = He;
      const ye = ie ? nb(ee, !1) : hb;
      (0, Yb.b)(ye, Nb) || (Nb = ye, Vb.h.yR(Ib, Nb))
    }

    function Qb() {
      return (0, Ab.c)(Ib, (() => Nb))
    }
    var eM = He(39289);
    const iM = [{
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

    function HM(ee, ie) {
      return [`Deposit Seed (${ee})`, {
        item: FH[`${ee} Deposit`],
        amount: ie
      }]
    }
    const yM = Object.fromEntries([HM("Coal", 8), HM("Iron", 8), HM("Copper", 8), HM("Gold", 6), HM("Voltite", 4), HM("Uranium", 4)]),
      bM = "Relay Coil",
      MM = new Map;

    function KM(ee) {
      let ie = MM.get(ee);
      if (!ie) {
        const He = Math.max(1, ee);
        ie = iM.filter((ee => {
          var ie;
          return He >= ee.fromTier && He <= (null !== (ie = ee.untilTier) && void 0 !== ie ? ie : 1 / 0)
        })).map((ee => ee.later && He >= ee.later.tier ? {
          ...ee,
          weight: ee.later.weight
        } : ee)), MM.set(ee, ie)
      }
      return ie
    }

    function UM(ee) {
      return KM(ee).some((ee => {
        let {
          item: ie
        } = ee;
        return ie === bM
      }))
    }

    function FM(ee) {
      return ee.startsWith("Deposit Seed (")
    }

    function JM(ee, ie) {
      const He = KM(ee);
      return ie ? He.filter((ee => ie(ee.item))) : He
    }

    function oM(ee) {
      return ee.reduce(((ee, ie) => ee + ie.weight), 0)
    }

    function RM(ee, ie) {
      const He = JM(ee, ie),
        ye = oM(He);
      return He.map((ee => ({
        find: ee,
        chance: ee.weight / ye
      })))
    }
    const kM = 6e4,
      qM = new Intl.NumberFormat("en-US");

    function fM(ee, ie) {
      const He = ee >= 10 ? Math.round(ee) : Math.round(10 * ee) / 10;
      return 0 === He ? "0" : `${ie}${qM.format(He)}`
    }

    function TM(ee) {
      return ee < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? qM.format(ee) : ee < 1e6 ? `${ee<1e5?Math.floor(ee/100)/10:Math.floor(ee/1e3)}k` : Math.floor(ee / 1e5) / 10 + "M"
    }

    function pM(ee) {
      return ee < 0 ? "\u2212" + -ee : String(ee)
    }

    function XM(ee, ie) {
      const He = Math.max(1, Math.round(ie));
      if (He < 60) return ee("buildAFactory2Game:durationSeconds", {
        seconds: String(He)
      });
      const ye = Math.round(He / 60);
      if (ye < 60) return ee("buildAFactory2Game:durationMinutes", {
        minutes: String(ye)
      });
      const be = String(Math.floor(ye / 60));
      return ye % 60 === 0 ? ee("buildAFactory2Game:durationWholeHours", {
        hours: be
      }) : ee("buildAFactory2Game:durationHours", {
        hours: be,
        minutes: String(ye % 60)
      })
    }
    var zM = He(2582);
    const BM = "(max-height: 420px), (max-width: 650px)";

    function EM() {
      return (0, zM.d)(BM)
    }
    var gM = He(1228);

    function OM(ee, ie) {
      return null !== ee && ee > ie + 1
    }

    function dM(ee) {
      const ie = 100 * ee;
      return String(ie <= 0 || ie >= 1 ? Math.round(ie) : Math.max(.1, Math.round(10 * ie) / 10))
    }

    function WM(ee) {
      let {
        item: ie,
        amount: He
      } = ee;
      return (0, gM.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, gM.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, gM.jsx)(Db.c, {
            itemName: ie,
            amount: 0
          })
        }), He > 1 && (0, gM.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", He]
        })]
      })
    }

    function tM(ee) {
      let {
        label: ie,
        names: He
      } = ee;
      const [be, Me] = (0, ye.useState)(!1), Ke = He.join(" / ");
      return (0, gM.jsxs)(gM.Fragment, {
        children: [(0, gM.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: Ke,
          "aria-expanded": be,
          onClick: () => {
            Me(!be)
          },
          children: ie
        }), be && (0, gM.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: Ke
        })]
      })
    }

    function ZM(ee) {
      let {
        tier: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)(), {
        key: ye,
        params: be
      } = qe(ie, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), Me = He(`buildAFactory2Game:${ye}`, be);
      return (0, gM.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, gM.jsx)(wb.e, {
          name: "lock"
        }), Me]
      })
    }
    const wM = (0, ye.createContext)(null);

    function DM() {
      const {
        t: ee
      } = (0, Zb.v)(), ie = (0, ye.useContext)(wM);
      return (0, ye.useEffect)((() => null === ie || void 0 === ie ? void 0 : ie()), [ie]), (0, gM.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: ee("buildAFactory2Game:recipeForQuest"),
        "aria-label": ee("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function PM(ee) {
      let {
        title: ie,
        count: He,
        children: be,
        startOpen: Me = !0
      } = ee;
      const {
        t: Ke
      } = (0, Zb.v)(), [Ue, Fe] = (0, ye.useState)((() => Me && !EM())), [Je, oe] = (0, ye.useState)(0), Re = (0, ye.useCallback)((() => (oe((ee => ee + 1)), () => {
        oe((ee => ee - 1))
      })), []);
      return (0, gM.jsxs)("div", {
        className: Ob()("Baf2Recipes", {
          Open: Ue
        }),
        children: [(0, gM.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            Fe(!Ue)
          },
          "aria-expanded": Ue,
          children: [Ke("buildAFactory2Game:recipesToggle", {
            title: ie,
            count: String(He)
          }), (0, gM.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: Ue ? "\u25be" : "\u25b8"
          })]
        }), Ue && (0, gM.jsxs)(wM.Provider, {
          value: Re,
          children: [(0, gM.jsx)("ul", {
            className: "Baf2RecipeList",
            children: be
          }), Je > 0 && (0, gM.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, gM.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), Ke("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const AM = "buildAFactory2Game:",
      YM = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const VM = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      aM = {
        "Uranium Grit": Me,
        "Raw Uranium": Me
      };

    function cM(ee) {
      var ie;
      return null !== (ie = aM[ee]) && void 0 !== ie ? ie : Math.max(Ne(ee), VM[ee] ? Ne(VM[ee]) : 1, function(ee) {
        const ie = be.findIndex((ie => ie.cost.some((ie => ie.item === ee))));
        return ie > Me ? ie : 1
      }(ee))
    }

    function xM(ee, ie) {
      return LM(ie) ? cM(ie) : function(ee) {
        if (YM.has(ee)) return 1;
        const ie = be.findIndex((ie => ie.newDeposits.some((ie => {
          let {
            block: He
          } = ie;
          return He === ee
        }))));
        return ie < 0 ? 1 : ie + 1
      }(ee)
    }

    function LM(ee) {
      return ee in aM || Re(cM(ee)) > 0
    }

    function CM(ee, ie) {
      return Qi(ee, {
        coupled: !1,
        taught: null,
        atomic: Ue() && ie >= 11
      }).recipes
    }

    function vM(ee, ie) {
      const He = ke(ee, ie, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Re(ee) > 0);
      return "open" === He || "locked" === He
    }

    function uM(ee, ie) {
      return ee.map(((ee, He) => ({
        value: ee,
        idx: He,
        tier: ie(ee)
      }))).sort(((ee, ie) => ee.tier - ie.tier || ee.idx - ie.idx)).map((ee => {
        let {
          value: ie
        } = ee;
        return ie
      }))
    }

    function mM(ee, ie, He) {
      const ye = ke(ee, ie);
      if ("hidden" === ye || "open" === ye) return null;
      if ("teaser" === ye) return {
        tag: {
          translationKey: `${AM}${He?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${AM}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const be = qe(ee, {
          tier: He ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        Me = qe(ee, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${AM}${be.key}`,
          params: be.params
        },
        reason: {
          translationKey: `${AM}${Me.key}`,
          params: Me.params
        }
      }
    }

    function lM(ee) {
      return !FM(ee)
    }

    function SM(ee) {
      let {
        seconds: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)();
      return (0, gM.jsx)(PM, {
        title: He("buildAFactory2Game:recipesCuts", {
          seconds: ie
        }),
        count: 1,
        children: (0, gM.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, gM.jsx)(WM, {
            item: "Maple Sapling",
            amount: 1
          }), (0, gM.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, gM.jsx)(WM, {
            item: "Maple Log",
            amount: 1
          }), (0, gM.jsx)("span", {
            className: "Baf2RecipeName",
            children: He("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function nM(ee) {
      let {
        fertilised: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)();
      return (0, gM.jsxs)(PM, {
        title: He("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, gM.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, gM.jsx)(WM, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, gM.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, gM.jsx)(WM, {
            item: "Wheat",
            amount: 1
          }), (0, gM.jsx)(WM, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, gM.jsx)("span", {
            className: "Baf2RecipeName",
            children: He("buildAFactory2Game:recipeField")
          })]
        }), (0, gM.jsxs)("li", {
          className: Ob()("Baf2Recipe", {
            InUse: ie
          }),
          children: [(0, gM.jsx)(WM, {
            item: "Fertiliser",
            amount: 1
          }), (0, gM.jsx)("span", {
            className: "Baf2RecipeName",
            children: He("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function jM(ee) {
      let {
        tier: ie,
        seconds: He
      } = ee;
      const {
        t: ye
      } = (0, Zb.v)(), be = function(ee) {
        return ee >= 5 ? di : Oi
      }(ie);
      return (0, gM.jsx)(PM, {
        title: ye("buildAFactory2Game:recipesBringsUp", {
          seconds: He
        }),
        count: be.length,
        children: be.map((ee => {
          let {
            item: ie,
            chance: He
          } = ee;
          return (0, gM.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, gM.jsx)(WM, {
              item: ie,
              amount: 1
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, eM.f)(ye, ie)
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: ye("buildAFactory2Game:recipeChance", {
                percent: dM(He)
              })
            })]
          }, ie)
        }))
      })
    }

    function sM(ee) {
      let {
        tier: ie,
        seconds: He,
        noSeeds: ye
      } = ee;
      const {
        t: be
      } = (0, Zb.v)(), Me = Qb(), Ke = RM(ie, ye ? lM : void 0), Ue = ye && RM(ie).length > Ke.length, Fe = UM(ie);
      return (0, gM.jsxs)(PM, {
        title: be("buildAFactory2Game:recipesRecycles", {
          seconds: He
        }),
        count: Ke.length,
        children: [Ke.map((ee => {
          let {
            find: ie,
            chance: He
          } = ee;
          return (0, gM.jsxs)("li", {
            className: "Baf2Recipe",
            children: [Me.has(ie.item) && (0, gM.jsx)(DM, {}), (0, gM.jsx)(WM, {
              item: ie.item,
              amount: ie.amount
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, eM.f)(be, ie.item)
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: be("buildAFactory2Game:recipeChance", {
                percent: dM(He)
              })
            })]
          }, ie.item)
        })), Ue && (0, gM.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, gM.jsx)("span", {
            className: "Baf2RecipeName",
            children: be("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), Fe && (0, gM.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, gM.jsx)("span", {
            className: "Baf2RecipeName",
            children: be("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function IM(ee) {
      let {
        tier: ie,
        seconds: He
      } = ee;
      const {
        t: ye
      } = (0, Zb.v)(), be = Object.entries(yM).filter((ee => {
        let [, {
          item: He
        }] = ee;
        return vM(cM(He), ie, LM(He))
      }));
      return (0, gM.jsx)(PM, {
        title: ye("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: He
        }),
        count: be.length,
        children: be.map((ee => {
          let [ie, {
            item: He,
            amount: be
          }] = ee;
          return (0, gM.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, gM.jsx)(WM, {
              item: ie,
              amount: 1
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, gM.jsx)(WM, {
              item: He,
              amount: be
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, eM.f)(ye, He)
            })]
          }, ie)
        }))
      })
    }

    function hM(ee) {
      let {
        tier: ie,
        seconds: He
      } = ee;
      const {
        t: ye
      } = (0, Zb.v)(), be = Qb(), Me = uM(Object.entries(FH).filter((ee => {
        let [He, ye] = ee;
        return vM(xM(He, ye), ie, LM(ye))
      })), (ee => {
        let [ie, He] = ee;
        return xM(ie, He)
      }));
      return (0, gM.jsx)(PM, {
        title: ye("buildAFactory2Game:recipesDigs", {
          seconds: He
        }),
        count: Me.length,
        children: Me.map((ee => {
          let [He, Me] = ee;
          const Ke = xM(He, Me),
            Ue = Ke > ie ? Ke : null,
            Fe = JH[He],
            Je = null === Ue && be.has(Me);
          return (0, gM.jsxs)("li", {
            className: Ob()("Baf2Recipe", {
              Locked: null !== Ue,
              Far: OM(Ue, ie)
            }),
            children: [Je && (0, gM.jsx)(DM, {}), (0, gM.jsx)(WM, {
              item: He,
              amount: 1
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, gM.jsx)(WM, {
              item: Me,
              amount: 1
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, eM.f)(ye, Me)
            }), void 0 !== Fe && (0, gM.jsx)("span", {
              className: "Baf2RecipeMore",
              children: ye("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / Fe)
              })
            }), null !== Ue && (0, gM.jsx)(ZM, {
              tier: Ue
            })]
          }, He)
        }))
      })
    }

    function NM(ee) {
      var ie;
      let {
        def: He,
        seconds: ye
      } = ee;
      const {
        t: be
      } = (0, Zb.v)();
      return (0, gM.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, gM.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (ie = He.fuels) && void 0 !== ie ? ie : []).map((ee => (0, gM.jsx)(WM, {
            item: ee,
            amount: 1
          }, ee))), (0, gM.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, gM.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, gM.jsx)(wb.e, {
              name: "bolt"
            }), be("buildAFactory2Game:recipePower", {
              power: Ge(He.powerMade),
              seconds: ye
            })]
          })]
        })
      })
    }

    function GM(ee) {
      let {
        def: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)();
      return (0, gM.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, gM.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, gM.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, gM.jsx)(wb.e, {
              name: "bolt"
            }), He("buildAFactory2Game:recipeMixer", {
              cryo: fM((0, re.I)(ie, ie.cryoMade), "")
            })]
          })
        })
      })
    }

    function rM(ee) {
      let {
        def: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)();
      return (0, gM.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, gM.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, gM.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, gM.jsx)(wb.e, {
              name: "bolt"
            }), He("buildAFactory2Game:recipeCondenser", {
              power: fM((0, re.I)(ie, ie.powerPerOp), ""),
              water: fM((0, re.I)(ie, ie.fluidMade), "")
            })]
          })
        })
      })
    }

    function QM(ee) {
      let {
        kind: ie,
        def: He,
        input: ye,
        tier: be,
        noSeeds: Me = !1
      } = ee;
      const Ke = String(He.opMs / 1e3);
      return bH(He) ? (0, gM.jsx)(SM, {
        seconds: Ke
      }) : He.field ? (0, gM.jsx)(nM, {
        fertilised: null !== ye
      }) : He.table ? (0, gM.jsx)(jM, {
        tier: be,
        seconds: Ke
      }) : He.recycles ? (0, gM.jsxs)(gM.Fragment, {
        children: [(0, gM.jsx)(sM, {
          tier: be,
          seconds: Ke,
          noSeeds: Me
        }), (0, gM.jsx)(IM, {
          tier: be,
          seconds: Ke
        })]
      }) : yH(He) ? (0, gM.jsx)(hM, {
        tier: be,
        seconds: Ke
      }) : void 0 !== He.fluidMade ? (0, gM.jsx)(rM, {
        def: He
      }) : void 0 !== He.cryoMade ? (0, gM.jsx)(GM, {
        def: He
      }) : void 0 !== He.powerMade ? (0, gM.jsx)(NM, {
        def: He,
        seconds: Ke
      }) : (0, gM.jsx)(eK, {
        kind: ie,
        input: ye,
        tier: be,
        seconds: Ke
      })
    }

    function eK(ee) {
      let {
        kind: ie,
        input: He,
        tier: ye,
        seconds: be
      } = ee;
      const {
        t: Me
      } = (0, Zb.v)(), Ke = Qb(), Ue = uM(function(ee) {
        const ie = new Map;
        for (const be of ee) {
          var He, ye;
          const ee = [be.output, be.outputAmount, be.inputAmount, null === (He = be.bonus) || void 0 === He ? void 0 : He.item, null === (ye = be.bonus) || void 0 === ye ? void 0 : ye.chance].join("|"),
            Me = ie.get(ee);
          Me ? Me.inputs.push(be.input) : ie.set(ee, {
            inputs: [be.input],
            inputAmount: be.inputAmount,
            output: be.output,
            outputAmount: be.outputAmount,
            bonus: be.bonus
          })
        }
        return [...ie.values()]
      }(CM(ie, ye).filter(kH)), (ee => cM(ee.output))).filter((ee => vM(cM(ee.output), ye, LM(ee.output))));
      return (0, gM.jsx)(PM, {
        title: Me("buildAFactory2Game:recipesEach", {
          seconds: be
        }),
        count: Ue.length,
        children: Ue.map((ee => {
          const ie = null !== He && ee.inputs.includes(He),
            be = ee.inputs.length > 3 ? [ie ? He : ee.inputs[0]] : ee.inputs,
            Ue = cM(ee.output) > ye ? cM(ee.output) : null,
            Fe = null === Ue && Ke.has(ee.output);
          return (0, gM.jsxs)("li", {
            className: Ob()("Baf2Recipe", {
              InUse: ie,
              Locked: null !== Ue,
              Far: OM(Ue, ye)
            }),
            children: [Fe && (0, gM.jsx)(DM, {}), be.map(((ie, He) => (0, gM.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [He > 0 && (0, gM.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, gM.jsx)(WM, {
                item: ie,
                amount: ee.inputAmount
              })]
            }, ie))), be.length < ee.inputs.length && (0, gM.jsx)(tM, {
              label: Me("buildAFactory2Game:recipeMore", {
                count: String(ee.inputs.length - be.length)
              }),
              names: ee.inputs.filter((ee => !be.includes(ee))).map((ee => (0, eM.f)(Me, ee)))
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, gM.jsx)(WM, {
              item: ee.output,
              amount: ee.outputAmount
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, eM.f)(Me, ee.output)
            }), ee.bonus && (0, gM.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [Me("buildAFactory2Game:recipeBonus", {
                percent: dM(ee.bonus.chance)
              }), (0, gM.jsx)(WM, {
                item: ee.bonus.item,
                amount: 1
              })]
            }), null !== Ue && (0, gM.jsx)(ZM, {
              tier: Ue
            })]
          }, `${ee.output}|${ee.inputs[0]}`)
        }))
      })
    }

    function iK(ee) {
      let {
        taught: ie,
        tier: He
      } = ee;
      const {
        t: ye
      } = (0, Zb.v)(), be = Qb(), Me = uM(Object.values(Gi), (ee => ee.tier)).filter((ee => vM(ee.tier, He)));
      return (0, gM.jsx)(PM, {
        title: ye("buildAFactory2Game:benchCanMake"),
        count: Me.length,
        startOpen: !1,
        children: Me.map((ee => {
          const Me = ee.tier > He,
            Ke = !Me && be.has(ee.output);
          return (0, gM.jsxs)("li", {
            className: Ob()("Baf2Recipe", {
              InUse: ee.output === ie,
              Locked: Me,
              Far: OM(Me ? ee.tier : null, He)
            }),
            children: [Ke && (0, gM.jsx)(DM, {}), (0, gM.jsx)(WM, {
              item: ee.output,
              amount: ee.outputAmount
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, eM.f)(ye, ee.output)
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), ee.inputs.map((ee => (0, gM.jsx)(WM, {
              item: ee.item,
              amount: ee.amount
            }, ee.item))), Me && (0, gM.jsx)(ZM, {
              tier: ee.tier
            })]
          }, ee.output)
        }))
      })
    }
    var HK, yK, bK, MK, KK;
    const UK = ci.Generator,
      FK = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      JK = 1e3 * (null !== (HK = UK.powerMade) && void 0 !== HK ? HK : 0) / UK.opMs,
      oK = Math.min(...(null !== (yK = UK.fuels) && void 0 !== yK ? yK : []).map((ee => UH[ee]))) / 1e3,
      RK = ci["Volt Engine"],
      kK = 1e3 * (null !== (bK = RK.powerMade) && void 0 !== bK ? bK : 0) / RK.opMs,
      qK = UH[null !== (MK = null === (KK = RK.fuels) || void 0 === KK ? void 0 : KK[0]) && void 0 !== MK ? MK : ""] / 1e3;

    function fK(ee) {
      let {
        item: ie,
        label: He,
        value: ye,
        note: be,
        dim: Me
      } = ee;
      return (0, gM.jsxs)("li", {
        className: Ob()("Baf2PowerRow", {
          Dim: Me
        }),
        children: [(0, gM.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, gM.jsx)(Db.c, {
            itemName: ie,
            amount: 0
          })
        }), (0, gM.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, gM.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: He
          }), be && (0, gM.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: be
          })]
        }), (0, gM.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: ye
        })]
      })
    }

    function TK(ee, ie, He, ye) {
      var be;
      const Me = void 0 === ye ? ci[ee] : function(ee, ie) {
          if (null === ie) return ee;
          let He = se.get(ie);
          return He || (He = {
            ...ee,
            powerPerOp: je(ee, ie),
            farmMob: ie
          }, se.set(ie, He)), He
        }(ci[ee], ye),
        Ke = ie && Me.couplable ? Si(Me, He) : Me;
      return 1e3 * (null !== (be = Ke.powerPerOp) && void 0 !== be ? be : 0) / Ke.opMs
    }

    function pK(ee) {
      var ie, He, ye, be, Me, Ke, Ue, Fe;
      let {
        message: Je
      } = ee;
      const {
        t: oe
      } = (0, Zb.v)(), Re = (ee, ie) => oe("buildAFactory2Game:powerPerSecond", {
        rate: fM(ee, ie)
      }), [ke, qe] = Je.baf2PowerGenerators, fe = Je.baf2PowerGeneratorFuel, Te = Je.baf2PowerSunPanels, pe = null !== (ie = Je.baf2PowerSunShare) && void 0 !== ie ? ie : 1, Xe = Je.baf2PowerVaults, ze = Je.baf2PowerUsers, [Be, Ee] = null !== (He = Je.baf2PowerEngines) && void 0 !== He ? He : [0, 0], ge = null !== (ye = Je.baf2PowerEngineCells) && void 0 !== ye ? ye : 0, Oe = null !== (be = Je.baf2PowerPads) && void 0 !== be ? be : 0, de = null !== (Me = Je.baf2PowerCharge) && void 0 !== Me ? Me : 0, [We, te] = null !== (Ke = Je.baf2PowerReactors) && void 0 !== Ke ? Ke : [0, 0], [Ze, we] = null !== (Ue = Je.baf2PowerBatteries) && void 0 !== Ue ? Ue : [0, 0];
      let De = oe("buildAFactory2Game:powerEngineCells", {
        amount: String(ge)
      });
      ge > 0 && Ee > 0 && (De = oe("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(ge),
        time: XM(oe, ge * qK / Ee)
      }));
      let Pe = oe("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(fe)
      });
      fe > 0 && qe > 0 && (Pe = oe("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(fe),
        time: XM(oe, fe * oK / qe)
      }));
      const Ae = ke + Be + Te + We;
      return (0, gM.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, gM.jsxs)("section", {
          children: [(0, gM.jsxs)("h3", {
            children: [oe("buildAFactory2Game:powerMaking"), (0, gM.jsx)("span", {
              children: Re(Je.baf2PowerMadePerS, "+")
            })]
          }), (0, gM.jsxs)("ul", {
            children: [0 === Ae && (0, gM.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: oe("buildAFactory2Game:powerNoMakers")
            }), ke > 0 && (0, gM.jsx)(fK, {
              item: "Generator",
              label: `${(0,eM.f)(oe,"Generator")} \xd7${ke}`,
              note: `${oe("buildAFactory2Game:powerRunning",{amount:String(qe)})} \xb7 ${Pe}`,
              value: Re(qe * JK, "+"),
              dim: 0 === qe
            }), Be > 0 && (0, gM.jsx)(fK, {
              item: "Volt Engine",
              label: `${(0,eM.f)(oe,"Volt Engine")} \xd7${Be}`,
              note: `${oe("buildAFactory2Game:powerRunning",{amount:String(Ee)})} \xb7 ${De}`,
              value: Re(Ee * kK, "+"),
              dim: 0 === Ee
            }), Te > 0 && (0, gM.jsx)(fK, {
              item: "Solar Panel",
              label: `${(0,eM.f)(oe,"Solar Panel")} \xd7${Te}`,
              note: oe(pe < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Re(4 * Te * pe, "+")
            }), We > 0 && (0, gM.jsx)(fK, {
              item: "Reactor Frame",
              label: `${oe("buildAFactory2Game:powerReactors")} \xd7${We}`,
              note: oe("buildAFactory2Game:powerRunning", {
                amount: String(te)
              }),
              value: Re(null !== (Fe = Je.baf2PowerReactorPerS) && void 0 !== Fe ? Fe : 0, "+"),
              dim: 0 === te
            })]
          })]
        }), (0, gM.jsxs)("section", {
          children: [(0, gM.jsxs)("h3", {
            children: [oe("buildAFactory2Game:powerStorage"), (0, gM.jsx)("span", {
              children: Ge(Je.baf2PowerCap)
            })]
          }), (Xe > 0 || Ze > 0) && (0, gM.jsxs)("ul", {
            children: [Xe > 0 && (0, gM.jsx)(fK, {
              item: "Charge Vault",
              label: `${(0,eM.f)(oe,"Charge Vault")} \xd7${Xe}`,
              value: `+${Ge(8e3*Xe)}`
            }), Ze > 0 && (0, gM.jsx)(fK, {
              item: "Battery Cell",
              label: `${oe("buildAFactory2Game:powerBatteries")} \xd7${Ze}`,
              value: `+${Ge(we)}`
            })]
          })]
        }), (0, gM.jsxs)("section", {
          children: [(0, gM.jsxs)("h3", {
            children: [oe("buildAFactory2Game:powerUsing"), (0, gM.jsx)("span", {
              children: Re(Je.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, gM.jsxs)("ul", {
            children: [0 === ze.length && 0 === Oe && 0 === de && (0, gM.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: oe("buildAFactory2Game:powerNoUsers")
            }), ze.map((ee => {
              let [ie, He, ye, be, Me = 1, Ke] = ee, Ue = He ? oe(FK[Me - 1], {
                name: (0, eM.f)(oe, ie)
              }) : (0, eM.f)(oe, ie);
              return void 0 !== Ke && (Ue = oe("buildAFactory2Game:powerFarmName", {
                name: Ue,
                mob: oe(le(Ke))
              })), (0, gM.jsx)(fK, {
                item: ie,
                label: `${Ue} \xd7${ye}`,
                note: oe("buildAFactory2Game:powerRunning", {
                  amount: String(be)
                }),
                value: be > 0 ? Re(be * TK(ie, He, Me, Ke), "\u2212") : oe("buildAFactory2Game:powerIdle"),
                dim: 0 === be
              }, `${ie}|${He}|${Me}|${Ke}`)
            })), Oe > 0 && (0, gM.jsx)(fK, {
              item: "Charging Pad",
              label: `${(0,eM.f)(oe,"Charging Pad")} \xd7${Oe}`,
              value: oe("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), de > 0 && (0, gM.jsx)(fK, {
              item: "Homestead Core",
              label: oe("buildAFactory2Game:powerCharge"),
              value: Re(de, "\u2212")
            }), Je.baf2PowerStarved > 0 && (0, gM.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, gM.jsx)(wb.e, {
                name: "triangle-exclamation"
              }), oe("buildAFactory2Game:powerStarved", {
                amount: String(Je.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var XK = He(4922),
      zK = He(1438);
    class BK {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(ee) {
        this.message = ee;
        for (const ie of this.listeners) ie()
      }
      get() {
        return this.message
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
    }
    class EK extends BK {}

    function gK(ee, ie) {
      const He = () => {
          const He = ee.get();
          if (!He || !ie) return He;
          const [ye, be, Me] = He.baf2PowerAt;
          return ye === ie[0] && be === ie[1] && Me === ie[2] ? He : null
        },
        [be, Me] = (0, ye.useState)(He);
      return (0, ye.useEffect)((() => (Me(He()), ee.subscribe((() => {
        Me(He())
      })))), [ee, ...null !== ie && void 0 !== ie ? ie : []]), be
    }

    function OK(ee) {
      return {
        stored: ee.baf2PowerStored,
        cap: ee.baf2PowerCap,
        madePerS: ee.baf2PowerMadePerS,
        usedPerS: ee.baf2PowerUsedPerS
      }
    }

    function dK(ee) {
      let {
        stored: ie,
        cap: He
      } = ee;
      return (0, gM.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, gM.jsx)("div", {
          style: {
            width: `${Math.min(100,100*ie/Math.max(1,He))}%`
          }
        })
      })
    }

    function WK(ee) {
      let {
        figures: ie,
        labelled: He = !1
      } = ee;
      const {
        t: ye
      } = (0, Zb.v)(), be = ie.madePerS - ie.usedPerS, {
        text: Me,
        draining: Ke
      } = function(ee, ie) {
        let {
          stored: He,
          cap: ye,
          madePerS: be,
          usedPerS: Me
        } = ie;
        const Ke = be - Me;
        return He >= ye ? {
          text: ee("buildAFactory2Game:powerFull"),
          draining: !1
        } : Ke > .05 ? {
          text: ee("buildAFactory2Game:powerFullIn", {
            time: XM(ee, (ye - He) / Ke)
          }),
          draining: !1
        } : Ke < -.05 ? {
          text: ee("buildAFactory2Game:powerEmptyIn", {
            time: XM(ee, He / -Ke)
          }),
          draining: !0
        } : {
          text: ee("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(ye, ie);
      return (0, gM.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, gM.jsx)(dK, {
          stored: ie.stored,
          cap: ie.cap
        }), (0, gM.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, gM.jsx)("span", {
            children: ye(He ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: Ge(ie.stored),
              cap: Ge(ie.cap)
            })
          }), (0, gM.jsxs)("span", {
            className: Ob()("Baf2PowerNet", {
              Draining: Ke
            }),
            children: [ye("buildAFactory2Game:powerPerSecond", {
              rate: fM(Math.abs(be), be < 0 ? "\u2212" : "+")
            }), " \xb7 ", Me]
          })]
        })]
      })
    }

    function tK(ee) {
      let {
        stored: ie,
        cap: He,
        rates: ye
      } = ee;
      const {
        t: be
      } = (0, Zb.v)();
      return ye ? (0, gM.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, gM.jsx)(WK, {
          figures: {
            stored: ie,
            cap: He,
            madePerS: ye[0],
            usedPerS: ye[1]
          },
          labelled: !0
        })
      }) : (0, gM.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, gM.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, gM.jsx)(dK, {
            stored: ie,
            cap: He
          }), (0, gM.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, gM.jsx)("span", {
              children: be("buildAFactory2Game:powerStoredLabelled", {
                stored: Ge(ie),
                cap: Ge(He)
              })
            })
          })]
        })
      })
    }

    function ZK(ee) {
      let {
        store: ie,
        close: He
      } = ee;
      const {
        t: ye
      } = (0, Zb.v)(), be = gK(ie);
      return (0, gM.jsx)(XK.e, {
        close: He,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, gM.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, gM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gM.jsxs)("div", {
              children: [(0, gM.jsx)("h2", {
                id: "baf2PowerTitle",
                children: ye("buildAFactory2Game:powerTitle")
              }), (0, gM.jsx)("p", {
                children: ye("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, gM.jsx)(zK.i, {
              onClick: He
            })]
          }), be && (0, gM.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, gM.jsx)(WK, {
              figures: OK(be)
            }), (0, gM.jsx)(pK, {
              message: be
            })]
          })]
        })
      })
    }

    function wK(ee) {
      var ie;
      let {
        kind: He,
        def: be,
        di: Me,
        power: Ke,
        stored: Ue,
        cap: Fe
      } = ee;
      const {
        t: Je
      } = (0, Zb.v)(), oe = gK(Ke, Me), [Re, ke] = (0, ye.useState)(!1);
      return (0, gM.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, gM.jsx)(QM, {
          kind: He,
          def: be,
          input: null,
          tier: null !== (ie = null === oe || void 0 === oe ? void 0 : oe.baf2PowerTier) && void 0 !== ie ? ie : 1
        }), (0, gM.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Je("buildAFactory2Game:powerTitle")
        }), oe && (0, gM.jsx)(WK, {
          figures: OK(oe)
        }), !oe && (0, gM.jsx)(tK, {
          stored: Ue,
          cap: Fe,
          rates: null
        }), oe && (0, gM.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            ke(!Re)
          },
          "aria-expanded": Re,
          children: Je(Re ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), oe && Re && (0, gM.jsx)(pK, {
          message: oe
        })]
      })
    }
    const DK = 2500,
      PK = 17500,
      AK = `${ge} `;
    const YK = ["plan", "throttle"];

    function VK(ee) {
      if (ee.startsWith(`${wi} `)) return ee.slice(0, ee.lastIndexOf(" "));
      const ie = ee.split(" ");
      return ie[0] === oi && YK.includes(ie[4]) ? ie.slice(0, 5).join(" ") : null
    }
    class aK {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = ee, this.now = ie, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.kKe = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = ie()
      }
      enqueue(ee) {
        this.queue(ee, this.nextTicket());
        const ie = this.kKe + this.pending.length;
        return this.flush(), ie
      }
      track(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const He = this.nextTicket();
        if (!ie.urgent) return this.queue(ee, He), this.flush(), He;
        const {
          supersedes: ye
        } = ie;
        for (let Me = this.pending.length - 1; Me >= this.urgent; Me--) {
          const ie = this.pending[Me];
          (ie.command === ee || null !== ye && void 0 !== ye && ye(ie.command)) && (this.pending.splice(Me, 1), this.markLeft(ie.tickets))
        }
        const be = this.pending.findIndex((ie => {
          let {
            command: He
          } = ie;
          return He === ee
        }));
        return -1 !== be ? this.pending[be].tickets.push(He) : (this.pending.splice(this.urgent, 0, {
          command: ee,
          tickets: [He]
        }), this.urgent += 1), this.flush(), He
      }
      leftAt(ee) {
        const ie = this.leftTimes.get(ee);
        return void 0 !== ie ? ie : this.pending.some((ie => {
          let {
            tickets: He
          } = ie;
          return He.includes(ee)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let ee = !0;
        return () => {
          ee && (ee = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(ee) {
        var ie;
        return (null === (ie = this.pending.at(-1)) || void 0 === ie ? void 0 : ie.command) === ee
      }
      sent() {
        return this.kKe
      }
      clear() {
        for (const {
            tickets: ee
          }
          of this.pending) this.markLeft(ee);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(ee) {
        const ie = this.now();
        for (const He of ee) this.leftTimes.set(He, ie);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(ee, ie) {
        const He = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === He || void 0 === He ? void 0 : He.command) === ee) return void(! function(ee) {
          return ee === Oe || ee.startsWith(`${Ee} `) || ee.startsWith(`${ve} `)
        }(ee) ? He.tickets.push(ie) : (this.pending.pop(), this.markLeft([...He.tickets, ie])));
        const ye = void 0 === He ? null : Ji(He.command, ee);
        if (null !== ye && void 0 !== He) return He.command = ye, void He.tickets.push(ie);
        const be = VK(ee);
        if (null !== be && void 0 !== He && VK(He.command) === be) return He.command = ee, void He.tickets.push(ie);
        if (null !== He && void 0 !== He && He.command.startsWith(AK) && ee.startsWith(AK)) {
          const ye = ee.slice(AK.length);
          if (He.command.slice(AK.length).split(",").includes(ye)) return void He.tickets.push(ie);
          const be = `${He.command},${ye}`;
          if (be.length <= 119) return He.command = be, void He.tickets.push(ie)
        }
        this.pending.push({
          command: ee,
          tickets: [ie]
        })
      }
      flush() {
        const ee = this.now();
        for (this.tokens = Math.min(5, this.tokens + (ee - this.refilledAt) / DK), this.refilledAt = ee; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.kKe += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: ee,
            tickets: ie
          } = this.pending.shift();
          this.markLeft(ie), this.send(ee)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * DK)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class cK {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new aK(ee, ie)
      }
      send(ee) {
        return this.queue.enqueue(ee)
      }
      sent() {
        return this.queue.sent()
      }
      track(ee, ie) {
        return this.queue.track(ee, ie)
      }
      leftAt(ee) {
        return this.queue.leftAt(ee)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(ee) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = ie, this.send(ee), this.islandEdits.count
      }
      syncIslandEdits(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: He
        } = this, ye = ie - He.lastAtMs < PK;
        He.count = ye ? Math.max(He.count, ee) : ee
      }
      clear() {
        this.queue.clear()
      }
    }
    const xK = (0, ye.createContext)(null);

    function LK() {
      const ee = (0, ye.useContext)(xK);
      if (!ee) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return ee
    }

    function CK(ee, ie) {
      return null !== ie && void 0 !== ie ? ie : 1 === ee
    }

    function vK(ee, ie) {
      return ee.every((ee => {
        var He;
        let [ye, , be] = ee;
        return !CK(be, null === (He = ie.get(ye)) || void 0 === He ? void 0 : He.KR)
      }))
    }

    function uK(ee, ie, He) {
      if (0 === ee.size) return ee;
      const ye = new Map(ee);
      for (const [be, Me] of ee) {
        const ee = ie.find((ee => {
          let [ie] = ee;
          return ie === be
        }));
        (!ee || Me.KR === (1 === ee[2]) || Me.atMs < He) && ye.delete(be)
      }
      return ye
    }

    function mK(ee) {
      var ie;
      let {
        di: He,
        input: be,
        drops: Me,
        seconds: Ke
      } = ee;
      const {
        t: Ue
      } = (0, Zb.v)(), Fe = LK(), [Je, oe] = (0, ye.useState)(new Map);
      (0, ye.useEffect)((() => {
        Me && oe((ee => uK(ee, Me, Date.now() - PK)))
      }), [Me]), (0, ye.useEffect)((() => {
        const ee = function(ee, ie) {
          let He = null;
          for (const {
              atMs: ye
            }
            of ee.values()) He = null === He ? ye : Math.min(He, ye);
          return null === He ? null : He + ie
        }(Je, PK);
        if (null === ee || !Me) return;
        const ie = setTimeout((() => {
          oe((ee => uK(ee, Me, Date.now() - PK)))
        }), Math.max(0, ee - Date.now()) + 1);
        return () => {
          clearTimeout(ie)
        }
      }), [Je, Me]);
      const Re = Se(be),
        ke = null !== Re && null !== Me && vK(Me, Je),
        qe = function(ee, ie, He) {
          return null === ee || null === ie || vK(ie, He) ? 0 : Ce[xe[ee]]
        }(Re, Me, Je);
      return (0, gM.jsxs)(PM, {
        title: Ue("buildAFactory2Game:farmDropsTitle", {
          seconds: Ke
        }),
        count: null !== (ie = null === Me || void 0 === Me ? void 0 : Me.length) && void 0 !== ie ? ie : 0,
        children: [qe > 0 && (0, gM.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: Ue("buildAFactory2Game:farmDropsPower", {
            power: String(qe)
          })
        }), (null === Re || !Me) && (0, gM.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: Ue("buildAFactory2Game:farmDropsEmpty")
        }), ke && (0, gM.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: Ue("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Re && (null === Me || void 0 === Me ? void 0 : Me.map((ee => {
          var ie;
          let [ye, be, Me] = ee;
          const Ke = be < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Re = CK(Me, null === (ie = Je.get(ye)) || void 0 === ie ? void 0 : ie.KR);
          return (0, gM.jsxs)("li", {
            className: Ob()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Re
            }),
            children: [(0, gM.jsx)(WM, {
              item: ye,
              amount: 1
            }), (0, gM.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, eM.f)(Ue, ye)
            }), (0, gM.jsx)("span", {
              className: "Baf2FarmRate",
              children: Ue(Ke, {
                amount: String(be)
              })
            }), (0, gM.jsx)("button", {
              type: "button",
              className: Ob()("Baf2FarmToggle SmallTextBold", {
                Kept: Re
              }),
              "aria-pressed": Re,
              onClick: () => {
                oe(new Map(Je).set(ye, {
                  KR: !Re,
                  atMs: Date.now()
                })), Fe.send(function(ee, ie, He, ye) {
                  return `${ve} ${ee} ${ie} ${He} ${ye}`
                }(He[0], He[1], He[2], ye))
              },
              children: Ue(Re ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, ye)
        })))]
      })
    }
    var lK;
    const SK = String(null !== (lK = ci.Synthesizer.waterPerOp) && void 0 !== lK ? lK : 0);

    function nK(ee) {
      let {
        di: ie,
        taught: He
      } = ee;
      const {
        t: be
      } = (0, Zb.v)(), Me = LK(), [Ke, Ue] = (0, ye.useState)(null);
      (0, ye.useEffect)((() => {
        null !== Ke && He === Ke && Ue(null)
      }), [Ke, He]);
      const Fe = null !== Ke && void 0 !== Ke ? Ke : He;
      let Je = be("buildAFactory2Game:synthPick");
      return null !== Fe && (Je = be("buildAFactory2Game:synthGrows", {
        name: (0, eM.f)(be, Fe),
        input: (0, eM.f)(be, Wi),
        water: SK
      })), (0, gM.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, gM.jsx)("div", {
          className: Ob()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === Fe
          }),
          children: Je
        }), (0, gM.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: ti.map(((ee, He) => {
            const ye = (0, eM.f)(be, ee),
              Ke = ee === Fe;
            return (0, gM.jsx)("li", {
              children: (0, gM.jsx)("button", {
                type: "button",
                className: Ob()("Baf2SynthTile", {
                  Selected: Ke
                }),
                title: ye,
                "aria-label": ye,
                "aria-pressed": Ke,
                onClick: () => {
                  Ke || (Ue(ee), Me.send(`${wi} ${ie[0]} ${ie[1]} ${ie[2]} ${He}`))
                },
                children: (0, gM.jsx)(Db.c, {
                  itemName: ee,
                  amount: 0
                })
              })
            }, ee)
          }))
        })]
      })
    }
    const jK = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function sK(ee) {
      let {
        kind: ie,
        tier: He,
        coupled: ye,
        level: be,
        slot: Me
      } = ee;
      const {
        t: Ke
      } = (0, Zb.v)(), Fe = Ne(Li);
      if (!ye && null !== He && He < Fe) return (0, gM.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, gM.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, gM.jsx)(wb.e, {
            name: "lock"
          })
        }), (0, gM.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: Ke("buildAFactory2Game:upgradeLocked")
        }), (0, gM.jsx)("span", {
          className: "Baf2TierTag",
          children: Ke("buildAFactory2Game:tierTag", {
            tier: String(Fe)
          })
        })]
      });
      const Je = function(ee, ie) {
          if (Ue() && "Crusher" !== ee && null !== ie) {
            if (IK(vi, ie)) return {
              item: vi,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (IK(Ci, ie)) return {
              item: Ci,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Li,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(ie, He),
        oe = Ke(ye ? jK[be - 1] : Je.emptyKey),
        Re = null !== He ? function(ee, ie, He, ye) {
          if (!Ue() || !He || "Crusher" === ee || ie < 10) return null;
          const be = Ne(vi);
          if (ye < 3 && be > 1 && (2 === ye || ie >= be)) return {
            tier: be,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const Me = Ne(Ci);
          if (1 === ye && Me > 1) return {
            tier: Me,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(ie, He, ye, be) : null;
      return (0, gM.jsxs)("div", {
        className: Ob()("Baf2UpgradeSocket", {
          Fitted: ye
        }),
        children: [(0, gM.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [ye && Me, !ye && (0, gM.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, gM.jsx)(Db.c, {
              itemName: Je.item,
              amount: 0
            })
          })]
        }), (0, gM.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, gM.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: Ke("buildAFactory2Game:upgradeTitle")
          }), (0, gM.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: oe
          }), ye && be >= 2 && "Crusher" === ie && (0, gM.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Ke("buildAFactory2Game:couplerCrusherHint")
          }), Re && null !== He && He < Re.tier && (0, gM.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, gM.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, gM.jsx)(wb.e, {
                name: "lock"
              })
            }), Ke(Re.lockedKey), (0, gM.jsx)("span", {
              className: "Baf2TierTag",
              children: Ke("buildAFactory2Game:tierTag", {
                tier: String(Re.tier)
              })
            })]
          }), Re && null !== He && He >= Re.tier && (0, gM.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: Ke(Re.nextKey)
          })]
        })]
      })
    }

    function IK(ee, ie) {
      const He = Ne(ee);
      return He > 1 && ie >= He
    }
    var hK = He(37853);
    const NK = (0, re.I)(ci.Condenser, ci.Condenser.fluidMade),
      GK = .05;
    class rK extends BK {}

    function QK(ee) {
      return fM(ee, "")
    }

    function eU(ee, ie, He) {
      return ee(ie ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: He
      })
    }

    function iU(ee, ie, He, ye) {
      return He <= GK && ye <= GK ? null : ye <= GK || He <= GK ? eU(ee, ie, ye <= GK ? fM(He, "+") : fM(ye, "\u2212")) : ee(ie ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: QK(He),
        used: QK(ye)
      })
    }

    function HU(ee, ie) {
      return Math.min(100, 100 * ee / Math.max(1, ie))
    }

    function yU(ee) {
      let {
        stored: ie,
        cap: He,
        netPerS: ye,
        rates: be,
        cryo: Me
      } = ee;
      const {
        t: Ke
      } = (0, Zb.v)(), Ue = function(ee, ie, He, ye) {
        return He <= 0 ? ee("buildAFactory2Game:waterNoStorage") : ie >= He ? ee("buildAFactory2Game:powerFull") : ye > GK ? ee("buildAFactory2Game:powerFullIn", {
          time: XM(ee, (He - ie) / ye)
        }) : ye < -.05 ? ie <= 0 ? ee("buildAFactory2Game:waterEmpty") : ee("buildAFactory2Game:powerEmptyIn", {
          time: XM(ee, ie / -ye)
        }) : ee("buildAFactory2Game:powerSteady")
      }(Ke, ie, He, ye), Fe = He > 0 && ie < He && Math.abs(ye) <= GK, Je = Ke(Me ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), oe = null !== be ? `${be} \xb7 ${Ue}` : Fe ? Je : `${Je} \xb7 ${Ue}`;
      return (0, gM.jsxs)(gM.Fragment, {
        children: [(0, gM.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, gM.jsx)("div", {
            style: {
              width: `${HU(ie,He)}%`
            }
          })
        }), (0, gM.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, gM.jsx)("span", {
            children: He > 0 && Ke("buildAFactory2Game:powerStored", {
              stored: (0, re.V)(ie),
              cap: (0, re.V)(He)
            })
          }), (0, gM.jsx)("span", {
            className: Ob()("Baf2WaterNet", {
              Draining: ye < -.05
            }),
            children: oe
          })]
        })]
      })
    }

    function bU(ee) {
      let {
        water: ie,
        at: He,
        side: ye = null
      } = ee;
      const {
        t: be
      } = (0, Zb.v)(), Me = LK(), [Ke, Ue, Fe] = ie;
      return (0, gM.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, gM.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, gM.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: be(null === ye ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${ye}`)
          }), (0, gM.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              Me.send(`${re.E} ${He[0]} ${He[1]} ${He[2]}${"cryoOut"===ye?" cryo":""}`)
            },
            children: be("buildAFactory2Game:waterDetails")
          })]
        }), (0, gM.jsx)(yU, {
          stored: Ke,
          cap: Ue,
          netPerS: Fe,
          rates: eU(be, "cryoOut" === ye, fM(Math.abs(Fe), Fe < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === ye
        })]
      })
    }

    function MU(ee, ie) {
      var He, ye, be;
      const Me = !0 === ie.baf2WaterCryo,
        Ke = null !== (He = null === (ye = ie.baf2WaterMakers.find((ee => ee[0] === (Me ? re.e : "Condenser")))) || void 0 === ye ? void 0 : ye[1]) && void 0 !== He ? He : 0,
        Ue = [],
        Fe = (ie, He, ye) => {
          ie > 0 && Ue.push(ee(1 === ie ? He : ye, {
            count: String(ie)
          }))
        };
      return Me ? Fe(Ke, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : Fe(Ke, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), Fe(null !== (be = ie.baf2WaterPipes) && void 0 !== be ? be : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), Fe(ie.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), Ue.join(" \xb7 ")
    }

    function KU(ee, ie) {
      if (!0 === ie.baf2WaterCryo) return function(ee, ie) {
        const He = ci[re.e];
        switch (ie.baf2WaterThis) {
          case "pipe":
            return {
              text: ee("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: ee("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: ee("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: ee("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: ee("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: ee("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: ee("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var ye;
            const [be, Me] = null !== (ye = ie.baf2WaterThisRates) && void 0 !== ye ? ye : [(0, re.I)(He, He.cryoMade), (0, re.I)(He, He.powerPerOp)];
            return !0 === ie.baf2WaterDriven ? {
              text: ee("buildAFactory2Game:cryoThisMixerDriven", {
                rate: QK(be)
              }),
              bad: !1
            } : {
              text: ee("buildAFactory2Game:cryoThisMixer", {
                rate: QK(be),
                power: QK(Me)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: ee("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(ee, ie);
      const He = !0 === ie.baf2WaterDriven,
        ye = ci.Condenser;
      switch (ie.baf2WaterThis) {
        case "pipe":
          return {
            text: ee("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: ee("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: ee("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: ee("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: ee("buildAFactory2Game:waterThisTank", {
              tank: (0, re.V)(re.u),
              cap: (0, re.V)(ie.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var be;
          const [Me, Ke] = null !== (be = ie.baf2WaterThisRates) && void 0 !== be ? be : [NK, (0, re.I)(ye, ye.powerPerOp)];
          return He ? {
            text: ee("buildAFactory2Game:waterThisCondenserDriven", {
              rate: QK(Me)
            }),
            bad: !1
          } : {
            text: ee("buildAFactory2Game:waterThisCondenser", {
              rate: QK(Me),
              power: QK(Ke)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: ee("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function UU(ee, ie) {
      const He = ie.baf2WaterMakers.some((ee => !0 === ee[5]));
      if (!0 === ie.baf2WaterCryo) {
        const ye = ie.baf2WaterUsedPerS - ie.baf2WaterMadePerS,
          be = He || ye <= GK ? 0 : (0, re.H)(ye);
        return 0 === be ? null : be > 1 ? ee("buildAFactory2Game:cryoNextMixers", {
          mixers: String(be)
        }) : ee("buildAFactory2Game:cryoNextOne")
      }
      const ye = He ? null : function(ee, ie) {
        const He = ie - ee;
        return He <= GK ? null : Math.ceil(He / NK)
      }(ie.baf2WaterMadePerS, ie.baf2WaterUsedPerS);
      return null === ye ? null : ye > 1 ? ee("buildAFactory2Game:waterNextCondensers", {
        condensers: String(ye)
      }) : ee("buildAFactory2Game:waterNextOne")
    }

    function FU(ee) {
      let {
        item: ie,
        label: He,
        note: ye,
        value: be,
        dim: Me,
        bad: Ke
      } = ee;
      return (0, gM.jsxs)("li", {
        className: Ob()("Baf2WaterRow", {
          Dim: Me,
          Bad: Ke
        }),
        children: [(0, gM.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, gM.jsx)(Db.c, {
            itemName: ie,
            amount: 0
          })
        }), (0, gM.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, gM.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: He
          }), ye && (0, gM.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: ye
          })]
        }), (0, gM.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: be
        })]
      })
    }

    function JU(ee) {
      return hK.o[ee] ? ee : "Reactor Port"
    }

    function oU(ee) {
      let {
        message: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)(), ye = !0 === ie.baf2WaterCryo, be = (ee, ie) => eU(He, ye, fM(ee, ie));
      return (0, gM.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, gM.jsxs)("section", {
          children: [(0, gM.jsxs)("h3", {
            children: [He("buildAFactory2Game:waterMakes"), (0, gM.jsx)("span", {
              children: be(ie.baf2WaterMadePerS, "+")
            })]
          }), (0, gM.jsxs)("ul", {
            children: [0 === ie.baf2WaterMakers.length && (0, gM.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: He(ye ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), ie.baf2WaterMakers.map((ee => {
              let [ie, ye, Me, Ke, Ue, Fe] = ee;
              const Je = He("buildAFactory2Game:powerRunning", {
                amount: String(Me)
              });
              let oe = Ue > 0 ? He("buildAFactory2Game:waterMakerPower", {
                running: Je,
                power: QK(Ue)
              }) : Je;
              return Fe && (oe = He(0 === Me && Ke <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, gM.jsx)(FU, {
                item: ie,
                label: `${(0,eM.f)(He,ie)} \xd7${ye}`,
                note: oe,
                value: Me > 0 || Fe && Ke > 0 ? be(Ke, "+") : He("buildAFactory2Game:powerIdle"),
                dim: 0 === Me && !Fe,
                bad: Fe
              }, ie)
            }))]
          })]
        }), (0, gM.jsxs)("section", {
          children: [(0, gM.jsxs)("h3", {
            children: [He("buildAFactory2Game:waterUses"), (0, gM.jsx)("span", {
              children: be(ie.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, gM.jsxs)("ul", {
            children: [0 === ie.baf2WaterUsers.length && (0, gM.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: He(ye ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), ie.baf2WaterUsers.map((ee => {
              let [ie, ye, Me, Ke] = ee;
              const Ue = hK.o[ie] ? (0, eM.f)(He, ie) : ie;
              return (0, gM.jsx)(FU, {
                item: JU(ie),
                label: ye > 1 ? `${Ue} \xd7${ye}` : Ue,
                note: Ke ? He("buildAFactory2Game:waterPortFirst") : void 0,
                value: Me > 0 ? be(Me, "\u2212") : He("buildAFactory2Game:powerIdle"),
                dim: 0 === Me
              }, ie)
            }))]
          })]
        })]
      })
    }

    function RU(ee) {
      var ie, He, be, Me, Ke;
      let {
        store: Ue,
        close: Fe
      } = ee;
      const {
        t: Je
      } = (0, Zb.v)(), oe = function(ee) {
        const [ie, He] = (0, ye.useState)((() => ee.get()));
        return (0, ye.useEffect)((() => (He(ee.get()), ee.subscribe((() => {
          He(ee.get())
        })))), [ee]), ie
      }(Ue), Re = null !== (ie = null === oe || void 0 === oe ? void 0 : oe.baf2WaterStored) && void 0 !== ie ? ie : 0, ke = null !== (He = null === oe || void 0 === oe ? void 0 : oe.baf2WaterCap) && void 0 !== He ? He : 0, qe = null !== (be = null === oe || void 0 === oe ? void 0 : oe.baf2WaterMadePerS) && void 0 !== be ? be : 0, fe = null !== (Me = null === oe || void 0 === oe ? void 0 : oe.baf2WaterUsedPerS) && void 0 !== Me ? Me : 0, Te = null !== (Ke = null === oe || void 0 === oe ? void 0 : oe.baf2WaterNetPerS) && void 0 !== Ke ? Ke : qe - fe, pe = oe && KU(Je, oe), Xe = oe && UU(Je, oe), ze = !0 === (null === oe || void 0 === oe ? void 0 : oe.baf2WaterCryo);
      return (0, gM.jsx)(XK.e, {
        close: Fe,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, gM.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, gM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gM.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== oe && ke <= 0 ? (0, gM.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, gM.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, gM.jsx)(Db.c, {
                  itemName: ze ? pH.i : re.l,
                  amount: 0
                })
              }), (0, gM.jsxs)("div", {
                children: [(0, gM.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Je(ze ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), oe && (0, gM.jsx)("p", {
                  children: MU(Je, oe)
                })]
              })]
            }), (0, gM.jsx)(zK.i, {
              onClick: Fe
            })]
          }), oe && pe && (0, gM.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, gM.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, gM.jsx)(yU, {
                stored: Re,
                cap: ke,
                netPerS: Te,
                cryo: ze,
                rates: iU(Je, ze, qe, fe)
              })
            }), (0, gM.jsx)("div", {
              className: Ob()("Baf2WaterThis", {
                Bad: pe.bad
              }),
              children: pe.text
            }), oe.baf2WaterDriven && (0, gM.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, gM.jsx)(wb.e, {
                name: "bolt"
              }), Je(ze ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), Xe && (0, gM.jsx)("p", {
              className: "Baf2WaterNext",
              children: Xe
            }), (0, gM.jsx)(oU, {
              message: oe
            })]
          })]
        })
      })
    }
    class kU {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(ee, ie) {
        const He = this.get(ee);
        He && null === ie.opLeftMs && null === ie.fuelLeftMs && ie.status === He.status ? ie = {
          ...ie,
          opLeftMs: He.opLeftMs,
          fuelLeftMs: He.fuelLeftMs,
          burning: He.burning
        } : this.updates++, this.pos = ee, this.view = ie;
        for (const ye of this.listeners) ye()
      }
      get(ee) {
        return null !== this.pos && this.pos[0] === ee[0] && this.pos[1] === ee[1] && this.pos[2] === ee[2] ? this.view : null
      }
      forget(ee) {
        null !== this.get(ee) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
    }

    function qU(ee, ie, He, ye) {
      return "noFuel" === ie && ye && !KH(ci[ee]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === ie && !0 === (null === He || void 0 === He ? void 0 : He.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === ie && !0 === (null === He || void 0 === He ? void 0 : He.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === ie && !0 === (null === He || void 0 === He ? void 0 : He.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === ie && !0 === (null === He || void 0 === He ? void 0 : He.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : fU(ie, He) ? "buildAFactory2Game:machineStatus_noInputShort" : function(ee, ie) {
        const He = ci[ee];
        if ("noFuel" === ie && void 0 !== He.fuels) return KH(He) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (He.mobFarm && ("noInput" === ie || "badInput" === ie)) return `buildAFactory2Game:machineStatus_${ie}MobFarm`;
        if ("outputFull" === ie && (void 0 !== He.table || He.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === ie && Ii(He)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== He.cryoMade && ("noInput" === ie || "noOutlet" === ie || "fluidFull" === ie)) return `buildAFactory2Game:machineStatus_${ie}Mixer`;
        return `buildAFactory2Game:machineStatus_${ie}`
      }(ee, ie)
    }

    function fU(ee, ie) {
      return "noInput" === ee && null !== ie && void 0 !== ie && ie.input && ie.inputShort ? {
        input: ie.input,
        short: ie.inputShort
      } : null
    }

    function TU(ee) {
      return db(ee) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== ee.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function pU(ee) {
      const ie = (0, ae.ve)(ee);
      return `Baf2Pane Baf2Pane${ie.charAt(0).toUpperCase()}${ie.slice(1)}`
    }

    function XU(ee, ie) {
      const [He, be] = (0, ye.useState)((() => ee.get(ie)));
      return (0, ye.useEffect)((() => {
        be(ee.get(ie));
        const He = ee.subscribe((() => {
          be(ee.get(ie))
        }));
        return () => {
          He(), ee.forget(ie)
        }
      }), [ee, ...ie]), He
    }

    function zU(ee, ie, He, ye) {
      const be = ci[ee],
        Me = ie && be.couplable ? Si(be, He) : be,
        Ke = null !== ye && yH(Me) ? function(ee, ie) {
          var He;
          return null !== (He = null !== ie && yH(ee) ? JH[ie] : void 0) && void 0 !== He ? He : ee.opMs
        }(Me, oH(ye)) : Me.opMs;
      return Ke === Me.opMs ? Me : {
        ...Me,
        opMs: Ke
      }
    }

    function BU(ee) {
      let {
        running: ie,
        opMs: He,
        opLeftMs: ye,
        updateCount: be
      } = ee;
      return (0, gM.jsx)("div", {
        className: Ob()("Baf2MachineProgress", {
          Running: ie
        }),
        children: (0, gM.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: He / 1e3 + "s",
            animationDelay: null === ye ? void 0 : (ye - He) / 1e3 + "s"
          }
        }, be)
      })
    }

    function EU(ee) {
      let {
        running: ie,
        leftMs: He,
        periodMs: ye,
        updateCount: be
      } = ee;
      const {
        t: Me
      } = (0, Zb.v)(), Ke = Math.min(Math.max(null !== He && void 0 !== He ? He : 0, 0), ye), Ue = ie && Ke > 0, Fe = Me("buildAFactory2Game:machineBarFuel");
      return (0, gM.jsx)("div", {
        className: Ob()("Baf2FuelBurn", {
          Draining: Ue
        }),
        role: "img",
        title: Fe,
        "aria-label": Fe,
        children: (0, gM.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: Ue ? {
            animationDuration: ye / 1e3 + "s",
            animationDelay: (Ke - ye) / 1e3 + "s"
          } : {
            transform: `scaleY(${Ke/ye})`
          }
        }, be)
      })
    }

    function gU(ee, ie, He) {
      let [ye, be] = He;
      const Me = 1 !== ye ? tb(ie) : null;
      return {
        amount: ye,
        have: be,
        item: ee(Me || (0, eM.e)(ie))
      }
    }

    function OU(ee) {
      return yH(ee) ? "buildAFactory2Game:machineBarMining" : bH(ee) ? "buildAFactory2Game:machineBarCutting" : void 0 !== ee.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function dU(ee) {
      var ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be;
      let {
        kind: Ee,
        di: ge,
        store: Oe,
        power: de,
        renderSlot: We
      } = ee;
      const {
        t: te
      } = (0, Zb.v)(), Ze = XU(Oe, ge), we = ci[Ee], De = null !== (ie = null === Ze || void 0 === Ze ? void 0 : Ze.coupled) && void 0 !== ie && ie, Pe = null !== (He = null === Ze || void 0 === Ze ? void 0 : Ze.couplerLevel) && void 0 !== He ? He : 1, Ae = zU(Ee, De, Pe, null !== (ye = null === Ze || void 0 === Ze || null === (be = Ze.dug) || void 0 === be ? void 0 : be.item) && void 0 !== ye ? ye : null), Ye = null !== (Me = null === Ze || void 0 === Ze ? void 0 : Ze.status) && void 0 !== Me ? Me : null, Ve = null !== (Ke = null === Ze || void 0 === Ze ? void 0 : Ze.power) && void 0 !== Ke ? Ke : null, ae = null !== (Ue = null === Ze || void 0 === Ze ? void 0 : Ze.opLeftMs) && void 0 !== Ue ? Ue : null, ce = null !== (Fe = null === Ze || void 0 === Ze ? void 0 : Ze.dug) && void 0 !== Fe ? Fe : null, xe = null !== ce && yH(we) ? JH[null !== (Je = oH(ce.item)) && void 0 !== Je ? Je : ""] : void 0, Le = void 0 === xe ? null : 6e4 / xe, Ce = null !== (oe = null === Ze || void 0 === Ze ? void 0 : Ze.powerCap) && void 0 !== oe ? oe : 4e3, ve = null !== (Re = null === Ze || void 0 === Ze ? void 0 : Ze.tier) && void 0 !== Re ? Re : null, ue = void 0 !== Ae.powerMade, me = null !== we.fuelSlot ? We(we.fuelSlot) : null, le = li(we), Se = !De && !0 === (null === Ze || void 0 === Ze ? void 0 : Ze.fuelFed), je = !De && !0 === (null === Ze || void 0 === Ze ? void 0 : Ze.fuelFeeds), se = null !== we.fuelSlot && !De, Ie = null !== (ke = null === Ze || void 0 === Ze ? void 0 : Ze.fuelLeftMs) && void 0 !== ke ? ke : null, he = function(ee, ie, He) {
        var ye;
        const be = null === ie ? void 0 : UH[ie];
        return Math.max(null !== (ye = null !== be && void 0 !== be ? be : He) && void 0 !== ye ? ye : 0, ee.opMs)
      }(Ae, null !== (qe = null === Ze || void 0 === Ze ? void 0 : Ze.burning) && void 0 !== qe ? qe : null, Ie), Ne = null !== (fe = null === Ze || void 0 === Ze ? void 0 : Ze.fuelKeep) && void 0 !== fe ? fe : null, Ge = null === Ye ? null : qU(Ee, Ye, Ze, Se), re = null === Ye ? null : fU(Ye, Ze);
      return (0, gM.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, gM.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, gM.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: te((0, eM.e)(Ee))
          }), ce && (0, gM.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [te("Tree Cutter" === Ee ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, gM.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, gM.jsx)(Db.c, {
                itemName: ce.item,
                amount: 0
              })
            }), (0, gM.jsx)(Pb.e, {
              text: ce.name
            })]
          }), null !== Le && (0, gM.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: te("buildAFactory2Game:machineDigsFixed", {
              perMin: String(Le)
            })
          }), (null === Ze || void 0 === Ze ? void 0 : Ze.field) && (0, gM.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, gM.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, gM.jsx)(Db.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), te("buildAFactory2Game:machineField", {
              planted: String(Ze.field[0]),
              ripe: String(Ze.field[1])
            })]
          }), (0, gM.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, gM.jsxs)("div", {
              className: Ob()("Baf2MachineColumn", {
                Baf2Burns: se
              }),
              children: [null !== Ae.inputSlot && (0, gM.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, gM.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: te(TU(Ae))
                }), We(Ae.inputSlot)]
              }), null !== we.fuelSlot && !De && (0, gM.jsxs)("div", {
                className: Ob()("Baf2MachineSlot", {
                  Baf2FuelFed: Se
                }),
                children: [(0, gM.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [Se && (0, gM.jsx)(wb.e, {
                    name: "fire"
                  }), te("buildAFactory2Game:machineFuel")]
                }), (0, gM.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, gM.jsx)(EU, {
                    running: "running" === Ye,
                    leftMs: Ie,
                    periodMs: he,
                    updateCount: Oe.updateCount
                  }), me]
                })]
              }), null !== we.fuelSlot && De && (0, gM.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, gM.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: te("buildAFactory2Game:machineFuel")
                }), (0, gM.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: te("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": te("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, gM.jsx)(wb.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, gM.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, gM.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: te(OU(Ae))
              }), (0, gM.jsx)(BU, {
                running: "running" === Ye,
                opMs: Ae.opMs,
                opLeftMs: ae,
                updateCount: Oe.updateCount
              })]
            }), Ae.outputSlots.length > 0 && (0, gM.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, gM.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: te("buildAFactory2Game:machineOutput")
              }), (0, gM.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Ae.outputSlots.map((ee => (0, gM.jsx)("div", {
                  children: We(ee)
                }, ee)))
              })]
            }), null !== Ve && ue && (0, gM.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, gM.jsx)("div", {
                style: {
                  height: 100 * Ve / Ce + "%"
                }
              })
            })]
          }), se && null !== Ne && (0, gM.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, gM.jsx)(wb.e, {
              name: "arrows-rotate"
            }), te(bH(Ae) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(Ne)
            })]
          }), (Se || je) && (0, gM.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, gM.jsx)(wb.e, {
              name: "fire"
            }), te(Se ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), we.couplable && (0, gM.jsx)(sK, {
            kind: Ee,
            tier: ve,
            coupled: De,
            level: Pe,
            slot: le === we.fuelSlot ? me : null !== le ? We(le) : null
          }), null !== Ve && !ue && !0 === (null === Ze || void 0 === Ze ? void 0 : Ze.reactorPowered) && (0, gM.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: te("buildAFactory2Game:machineReactorPowered")
          }), null !== Ve && !ue && !0 !== (null === Ze || void 0 === Ze ? void 0 : Ze.reactorPowered) && (0, gM.jsx)(tK, {
            stored: Ve,
            cap: Ce,
            rates: null !== (Te = null === Ze || void 0 === Ze ? void 0 : Ze.powerRates) && void 0 !== Te ? Te : null
          }), (null === Ze || void 0 === Ze ? void 0 : Ze.water) && (0, gM.jsx)(bU, {
            water: Ze.water,
            at: ge,
            side: Ze.cryo ? "waterIn" : null
          }), (null === Ze || void 0 === Ze ? void 0 : Ze.cryo) && (0, gM.jsx)(bU, {
            water: Ze.cryo,
            at: ge,
            side: "cryoOut"
          }), null !== Ze && void 0 !== Ze && Ze.inertCoupler ? (0, gM.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: te("buildAFactory2Game:machineStatus_couplerOff", {
              item: (0, eM.f)(te, Ze.inertCoupler)
            })
          }) : null !== Ge && (0, gM.jsx)("div", {
            className: Ob()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Ye
            }),
            children: te(Ge, re ? gU(te, re.input, re.short) : void 0)
          })]
        }), (0, gM.jsxs)("div", {
          className: Ob()("Baf2MachineSide", {
            Baf2SynthSide: Ii(we)
          }),
          children: [Ii(we) && (0, gM.jsx)(nK, {
            di: ge,
            taught: null !== (pe = null === Ze || void 0 === Ze ? void 0 : Ze.taught) && void 0 !== pe ? pe : null
          }, ge.join(",")), ue && (0, gM.jsx)(wK, {
            kind: Ee,
            def: Ae,
            di: ge,
            power: de,
            stored: null !== Ve && void 0 !== Ve ? Ve : 0,
            cap: Ce
          }), ne(we) && (0, gM.jsx)(mK, {
            di: ge,
            input: null !== (Xe = null === Ze || void 0 === Ze ? void 0 : Ze.input) && void 0 !== Xe ? Xe : null,
            drops: null !== (ze = null === Ze || void 0 === Ze ? void 0 : Ze.farm) && void 0 !== ze ? ze : null,
            seconds: String(Ae.opMs / 1e3)
          }), !ue && !ne(we) && !Ii(we) && (0, gM.jsx)(QM, {
            kind: Ee,
            def: Ae,
            input: null !== (Be = null === Ze || void 0 === Ze ? void 0 : Ze.input) && void 0 !== Be ? Be : null,
            tier: null !== ve && void 0 !== ve ? ve : 1,
            noSeeds: !0 === (null === Ze || void 0 === Ze ? void 0 : Ze.noSeeds)
          })]
        })]
      })
    }

    function WU(ee, ie, He, ye) {
      var be;
      const Me = ci[ee],
        Ke = [Me.inputSlot, Me.fuelSlot, ...null !== (be = Me.inputSlots) && void 0 !== be ? be : []].filter((ee => null !== ee));
      return {
        render: be => {
          let {
            di: Me,
            renderSlot: Ke
          } = be;
          return (0, gM.jsx)(xK.Provider, {
            value: ye,
            children: (0, gM.jsx)(dU, {
              kind: ee,
              di: Me,
              store: ie,
              power: He,
              renderSlot: Ke
            })
          })
        },
        quickMoveRange: Ke.length > 0 ? [Math.min(...Ke), Math.max(...Ke) + 1] : [0, 0],
        className: pU(ee)
      }
    }
    const tU = "Assembler";

    function ZU(ee) {
      var ie, He, ye, be, Me, Ke, Ue, Fe, Je;
      let {
        di: oe,
        store: Re,
        renderSlot: ke
      } = ee;
      const {
        t: qe
      } = (0, Zb.v)(), fe = XU(Re, oe), Te = null !== (ie = null === fe || void 0 === fe ? void 0 : fe.tier) && void 0 !== ie ? ie : 1, pe = null !== (He = null === fe || void 0 === fe ? void 0 : fe.taught) && void 0 !== He ? He : null, Xe = Qi(tU, {
        coupled: !1,
        taught: pe
      }), ze = null !== (ye = Xe.bench) && void 0 !== ye ? ye : null, Be = null !== (be = null === fe || void 0 === fe ? void 0 : fe.status) && void 0 !== be ? be : null, Ee = null !== (Me = null === fe || void 0 === fe ? void 0 : fe.power) && void 0 !== Me ? Me : null, ge = null !== (Ke = null === fe || void 0 === fe ? void 0 : fe.powerCap) && void 0 !== Ke ? Ke : 4e3;
      return (0, gM.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, gM.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, gM.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: qe((0, eM.e)(tU))
          }), ze && (0, gM.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [qe("buildAFactory2Game:benchMakes"), (0, gM.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, gM.jsx)(Db.c, {
                itemName: ze.output,
                amount: 0
              })
            }), (null === fe || void 0 === fe ? void 0 : fe.taughtName) && (0, gM.jsx)(Pb.e, {
              text: fe.taughtName
            }), ze.outputAmount > 1 && (0, gM.jsxs)("span", {
              children: ["\xd7", ze.outputAmount]
            })]
          }), !ze && (0, gM.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: qe("buildAFactory2Game:benchTeachHint")
          }), (0, gM.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, gM.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (Ue = Xe.inputSlots) && void 0 !== Ue ? Ue : []).map(((ee, ie) => {
                const He = null === ze || void 0 === ze ? void 0 : ze.inputs[ie];
                return (0, gM.jsxs)("div", {
                  className: Ob()("Baf2BenchInput", {
                    Spare: !He
                  }),
                  children: [(0, gM.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [ke(ee), He && (0, gM.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, gM.jsx)(Db.c, {
                        itemName: He.item,
                        amount: 0
                      })
                    })]
                  }), (0, gM.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: He ? `\xd7${He.amount}` : "\xa0"
                  })]
                }, ee)
              }))
            }), (0, gM.jsx)(BU, {
              running: "running" === Be,
              opMs: Xe.opMs,
              opLeftMs: null !== (Fe = null === fe || void 0 === fe ? void 0 : fe.opLeftMs) && void 0 !== Fe ? Fe : null,
              updateCount: Re.updateCount
            }), (0, gM.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, gM.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: qe("buildAFactory2Game:machineOutput")
              }), (0, gM.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Xe.outputSlots.map((ee => (0, gM.jsx)("div", {
                  children: ke(ee)
                }, ee)))
              })]
            })]
          }), null !== Ee && (0, gM.jsx)(tK, {
            stored: Ee,
            cap: ge,
            rates: null !== (Je = null === fe || void 0 === fe ? void 0 : fe.powerRates) && void 0 !== Je ? Je : null
          }), null !== Be && (0, gM.jsx)("div", {
            className: Ob()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Be
            }),
            children: qe(qU(tU, Be, fe, !1))
          }), ze && ze.inputs.length > 1 && (0, gM.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: qe("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, gM.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, gM.jsx)(iK, {
            taught: pe,
            tier: Te
          }), ze && (0, gM.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: qe("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function wU(ee) {
      var ie;
      const He = null !== (ie = ci[tU].inputSlots) && void 0 !== ie ? ie : [];
      return {
        render: ie => {
          let {
            di: He,
            renderSlot: ye
          } = ie;
          return (0, gM.jsx)(ZU, {
            di: He,
            store: ee,
            renderSlot: ye
          })
        },
        quickMoveRange: [Math.min(...He), Math.max(...He) + 1],
        className: pU(tU)
      }
    }
    var DU = He(97),
      PU = He(1075),
      AU = He(4598);
    const YU = 600,
      VU = .5,
      aU = 4,
      cU = 1200,
      xU = 140,
      LU = 100,
      CU = 32,
      vU = 16,
      uU = 100.5,
      mU = 90,
      lU = 1.5,
      SU = 50;

    function nU(ee) {
      switch (VH(ee)) {
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

    function sU(ee) {
      const ie = Math.ceil(60 * ee / LU);
      return {
        fuel: Math.max(CU, ie),
        waste: Math.max(vU, ie)
      }
    }

    function IU(ee, ie, He) {
      const [ye, be, Me] = [ee - 2, ie - 2, He - 2];
      return 2 * (ye * be + be * Me + Me * ye) * xU
    }

    function hU(ee, ie, He) {
      return Math.max(0, ee - 2) * Math.max(0, ie - 2) * Math.max(0, He - 2)
    }

    function NU(ee, ie) {
      const [He, ye, be] = ee, Me = He * ye * be, Ke = new Float32Array(Me);
      let Ue = 0,
        Fe = 0,
        Je = 0,
        oe = 0,
        Re = 0;
      const ke = (ee, Me, Ke) => ee < 0 || ee >= He || Me < 0 || Me >= ye || Ke < 0 || Ke >= be ? 0 : ie[(Me * be + Ke) * He + ee];
      for (let pe = 0; pe < ye; pe++)
        for (let ee = 0; ee < be; ee++)
          for (let ye = 0; ye < He; ye++) {
            const Me = (pe * be + ee) * He + ye,
              qe = ie[Me];
            if (1 === qe) {
              Ue++;
              let ie = 0;
              for (const [He, be, Me] of jU) {
                const Ke = ke(ye + He, pe + be, ee + Me);
                1 !== Ke && 2 !== Ke || ie++
              }
              Ke[Me] = YU * (1 + VU * Math.min(ie, aU)), oe += Ke[Me]
            } else if (2 === qe) Fe++;
            else if (3 === qe) {
              Je++;
              jU.some((ie => {
                let [He, be, Me] = ie;
                return 1 === ke(ye + He, pe + be, ee + Me)
              })) && (Re += cU)
            }
          }
      const qe = IU(He + 2, ye + 2, be + 2),
        fe = Math.min(oe, Re, qe),
        Te = Ue > 0 ? oe * LU / Ue : 0;
      return {
        rods: Ue,
        graphite: Fe,
        channels: Je,
        fuelHeat: oe,
        cooling: Re,
        size: qe,
        max: fe,
        vol: Me,
        powerPerUnit: Te,
        pelletsPerMin: Te > 0 ? fe / Te * 60 : 0,
        waterPerS: fe * re.s,
        rodHeat: Ke
      }
    }
    const GU = 0,
      rU = 1,
      QU = 6,
      eF = 7,
      iF = 8;

    function HF(ee, ie) {
      const [He, ye, be] = ee, Me = new Uint8Array(He * ye * be), Ke = (ee, Me, Ke) => ee < 0 || ee >= He || Me < 0 || Me >= ye || Ke < 0 || Ke >= be ? 0 : ie[(Me * be + Ke) * He + ee];
      for (let Ue = 0; Ue < ye; Ue++)
        for (let ee = 0; ee < be; ee++)
          for (let ye = 0; ye < He; ye++) {
            const Fe = (Ue * be + ee) * He + ye,
              Je = ie[Fe];
            if (1 === Je) {
              let ie = 0;
              for (const [He, be, Me] of jU) {
                const Fe = Ke(ye + He, Ue + be, ee + Me);
                ie += 1 === Fe || 2 === Fe ? 1 : 0
              }
              Me[Fe] = rU + Math.min(ie, aU)
            } else if (3 === Je) {
              const ie = jU.some((ie => {
                let [He, be, Me] = ie;
                return 1 === Ke(ye + He, Ue + be, ee + Me)
              }));
              Me[Fe] = ie ? QU : eF
            } else 2 === Je && (Me[Fe] = iF)
          }
      return Me
    }

    function yF(ee) {
      return ee.fuelHeat <= ee.cooling && ee.fuelHeat <= ee.size ? "fuel" : ee.cooling <= ee.size ? "cooling" : "size"
    }
    const bF = mU;

    function MF(ee, ie, He) {
      return Math.round(ee * ie * He * 25e3 * (1 + .25 * (Math.min(ee, ie, He) - 2)))
    }

    function KF(ee) {
      return Math.max(0, Math.min(re.f, ee))
    }

    function UF(ee, ie, He) {
      const ye = ie * KF(He);
      return ee <= 0 ? 0 : ye > 0 ? Math.min(200, 100 * ee / ye) : 200
    }

    function FF(ee, ie) {
      const He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? lU : 1;
      return Math.min(ee.fuelHeat * He, ee.cooling * KF(ie), ee.size * He)
    }

    function JF(ee) {
      return 2 + ee / 10
    }
    const oF = "buildAFactory2Game:";

    function RF(ee) {
      var ie;
      return null !== (ie = ee.baf2RxMood) && void 0 !== ie ? ie : function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const He = [
          ["calm", 50],
          ["warm", bF],
          ["hot", uU]
        ];
        for (const [ye, be] of He)
          if (ee < be + (ye === ie ? 3 : 0)) return ye;
        return "alarm"
      }(ee.baf2RxHeat)
    }
    const kF = 120;

    function qF(ee) {
      const ie = ee.baf2RxState;
      if ("running" === ie && ee.baf2RxHeat > uU) return {
        label: `${oF}rxState_tooHot`,
        tone: "bad",
        fix: `${oF}rxFix_tooHot`
      };
      switch (ie) {
        case "running":
          return {
            label: `${oF}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${oF}rxState_idle`, tone: "off", fix: `${oF}rxFix_idle`
          };
        case "scram":
          return {
            label: `${oF}rxState_scram`, tone: "off", fix: ee.baf2RxHeat < SU ? `${oF}rxFix_scramCool` : `${oF}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${oF}rxState_${ie}`, tone: "off", fix: `${oF}rxFix_${ie}`
          };
        case "melted":
          return {
            label: `${oF}rxState_melted`, tone: "bad", fix: `${oF}rxFix_melted`
          };
        default:
          return {
            label: `${oF}rxState_${ie}`, tone: "warn", fix: `${oF}rxFix_${ie}`
          }
      }
    }

    function fF(ee) {
      const [ie, He, ye] = ee.baf2RxStats;
      return {
        fuelHeat: ie,
        cooling: He * (ee.baf2RxCryo ? Math.max(1, KF(ee.baf2RxWater / 100)) : 1),
        size: ye
      }
    }

    function TF(ee) {
      var ie;
      const He = "idle" === ee.baf2RxState || "running" === ee.baf2RxState && ee.baf2RxHeat <= uU || "scram" === ee.baf2RxState && ee.baf2RxHeat < SU;
      if (0 === (ee.baf2RxFlags & gi) || !ee.baf2RxFormed || !He) return null;
      const {
        fuelHeat: ye,
        cooling: be,
        size: Me
      } = fF(ee), Ke = Math.min(ye, be, Me), Ue = yF({
        fuelHeat: ye,
        cooling: be,
        size: Me
      }), Fe = "cooling" === Ue && !0 === ee.baf2RxCryoOpen && !ee.baf2RxCryo, Je = null !== (ie = ee.baf2RxCells) && void 0 !== ie ? ie : "", oe = ("fuel" === Ue || "cooling" === Ue && !0 === ee.baf2RxCryo) && Je.length > 0 && !Je.includes(String(0)), Re = Fe ? "Cryo" : "scram" === ee.baf2RxState ? "Off" : "";
      return Ke < 12e3 ? {
        key: `${oF}rxGrow_${oe?"full":Ue}${Re}`,
        amount: Ke
      } : null
    }

    function pF(ee, ie) {
      return ee[0] === ie[0] && ee[1] === ie[1] && ee[2] === ie[2]
    }

    function XF(ee) {
      return [...ee].sort(((ee, ie) => Number(ie[2] < ie[1]) - Number(ee[2] < ee[1])))
    }

    function zF(ee, ie) {
      return ie.some((ie => {
        let [He, ye] = ie;
        return !(ye <= 0) && ["edge", "cap", "wall", "inside"].some((ie => He === Uy(ee, ie)))
      }))
    }

    function BF(ee, ie, He) {
      const ye = ee.baf2RxFuel - ee.baf2RxPu > 0 ? He : 0;
      return {
        full: ee.baf2RxWaste > ie - 3,
        fullInS: ye > 0 ? Math.max(0, ie - ee.baf2RxWaste) / ye : null
      }
    }
    const EF = {
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

    function gF(ee) {
      return OF[ee]
    }
    const OF = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function dF(ee) {
      let [ie, He, ye] = ee;
      return Math.ceil(IU(ie, He, ye) * re.s)
    }

    function WF(ee, ie) {
      return "battery" === ee ? ie[0] * ie[1] * ie[2] : function(ee) {
        let [ie, He, ye] = ee;
        return ie * He * ye - Math.max(0, ie - 2) * Math.max(0, He - 2) * Math.max(0, ye - 2)
      }(ie) - 1
    }

    function tF(ee) {
      const ie = Math.max(0, ee);
      if (ie < 10) return String(Math.round(10 * ie) / 10);
      if (ie < 1e4) return Math.round(ie).toLocaleString("en-US");
      if (ie < 1e6) return `${ie<1e5?(Math.floor(ie/100)/10).toFixed(1):Math.floor(ie/1e3)}k`;
      const He = ie / 1e6;
      return `${He<10?(Math.floor(100*He)/100).toFixed(2):He<100?(Math.floor(10*He)/10).toFixed(1):Math.floor(He)}M`
    }

    function ZF(ee) {
      return ee <= 0 ? "0" : ee >= 10 ? String(Math.round(ee)) : ee.toFixed(ee >= 1 ? 1 : 2)
    }

    function wF(ee) {
      const ie = ey(ee, 0),
        He = ey(ee, NH(ee) - 1);
      return {
        lo: [Math.min(ie[0], He[0]), Math.min(ie[1], He[1]), Math.min(ie[2], He[2])],
        hi: [Math.max(ie[0], He[0]) + 1, Math.max(ie[1], He[1]) + 1, Math.max(ie[2], He[2]) + 1]
      }
    }

    function DF(ee, ie, He) {
      const ye = [ie[0] - ee[0], ie[1] - ee[1], ie[2] - ee[2]],
        be = [(ee[0] + ie[0]) / 2, (ee[1] + ie[1]) / 2, (ee[2] + ie[2]) / 2],
        Me = [];
      for (let Ke = 0; Ke < 3; Ke++) {
        const Ue = (Ke + 1) % 3,
          Fe = (Ke + 2) % 3;
        for (const Je of [ee[Ue], ie[Ue]])
          for (const oe of [ee[Fe], ie[Fe]]) {
            const ee = [0, 0, 0],
              ie = [He, He, He];
            ee[Ke] = be[Ke], ie[Ke] = ye[Ke] + He, ee[Ue] = Je, ee[Fe] = oe, Me.push([ee, ie])
          }
      }
      return Me
    }
    const PF = "buildAFactory2Game:",
      AF = [`${PF}colNorth`, `${PF}colEast`, `${PF}colSouth`, `${PF}colWest`];

    function YF(ee, ie) {
      const [He, ye, be] = ee.baf2ColAt;
      return `baf2col ${He} ${ye} ${be} ${ie}`
    }

    function VF(ee) {
      return function(ee) {
        if (!Number.isFinite(ee)) return "";
        const ie = Math.max(1, Math.round(ee));
        if (ie < 60) return `${ie}s`;
        const He = ie % 60;
        return 0 === He ? ie / 60 + "m" : `${Math.floor(ie/60)}m ${He}s`
      }(function(ee) {
        const ie = Fy.FOCUS_BY_LASERS[Math.max(0, Math.min(4, ee))];
        return ie > 0 ? Fy.NOVA_FOCUS / ie : 1 / 0
      }(ee))
    }

    function aF(ee) {
      const ie = Math.abs(Math.round(ee));
      return ie < 1e3 ? Math.round(ee).toLocaleString("en-US") : ie < 1e6 ? `${ie<1e5?(ee/1e3).toFixed(1).replace(/\.0$/,""):Math.round(ee/1e3)}k` : `${(ee/1e6).toFixed(ie<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function cF(ee, ie, He) {
      if (fy(ie) >= 0) {
        const ie = function(ee, ie) {
          return ee.find((ee => {
            let {
              focus: He
            } = ee;
            return He[0] === ie[0] && He[2] === ie[2] && (ie[1] === He[1] || ie[1] === He[1] - 1)
          }))
        }(ee, He);
        if (!ie) return null;
        const be = function(ee) {
          let ie = 0,
            He = 0;
          for (let ye = 0; ye < 4; ye++) ie += ee.laser[ye] ? 1 : 0, He += ee.live[ye] ? 1 : 0;
          return {
            lasers: ie,
            live: He,
            focusPerS: Fy.FOCUS_BY_LASERS[He],
            drawPerS: Fy.LASER_DRAW * He
          }
        }({
          laser: ie.lasers,
          live: ie.live
        });
        if (0 === be.lasers || "noLasers" === ie.state) return {
          key: `${PF}lookColNoLasers`
        };
        if (0 === be.live) return {
          key: `${PF}lookColOff_blocked`
        };
        if (!(ie.on && be.live > 0) && ("running" !== (ye = ie.state) && "slowed" !== ye)) return {
          key: `${PF}lookColOff_${ie.state}`
        };
        if (be.live < be.lasers) return {
          key: `${PF}lookColLasersSome`,
          params: {
            lasers: String(be.lasers),
            live: String(be.live)
          }
        };
        const Me = ie.open.filter(Boolean).length;
        return Me < 4 ? {
          key: `${PF}lookColLasersSpots`,
          params: {
            live: String(be.live),
            spots: String(Me),
            time: VF(be.live)
          }
        } : {
          key: `${PF}lookColLasers`,
          params: {
            live: String(be.live),
            time: VF(be.live)
          }
        }
      }
      var ye;
      if (!Ty(ie)) return null;
      const be = function(ee, ie) {
        for (const He of ee) {
          const ee = By(He.focus, [ie[0], ie[1], ie[2]]);
          if (ee && ee.Po === Fy.LASER_D && He.lasers[ee.dir]) return {
            entry: He,
            dir: ee.dir
          }
        }
        return null
      }(ee, He);
      if (!be) return {
        key: `${PF}lookLaserNoCollider`
      };
      const {
        entry: Me,
        dir: Ke
      } = be;
      return Me.open[Ke] ? Me.live[Ke] ? {
        key: Me.on ? `${PF}lookLaserFiring` : `${PF}lookLaserReady`
      } : {
        key: `${PF}lookLaserBlocked`
      } : {
        key: `${PF}lookLaserClosed`
      }
    }

    function xF(ee, ie) {
      const He = [];
      for (let ye = 1; ye < Fy.LASER_D; ye++) ee & 1 << ie * (Fy.LASER_D - 1) + ye - 1 && He.push(ye);
      return He
    }
    const LF = {
      firing: `${PF}colSlotFiring`,
      ready: `${PF}colSlotReady`,
      blocked: `${PF}colSlotBlocked`,
      empty: `${PF}colSlotEmpty`,
      closed: `${PF}colSlotClosed`
    };

    function CF(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Me = Mb(ee),
        Ke = Mb(ie),
        Ue = Mb(He),
        Fe = Ue.filter(Boolean).length,
        Je = Me.filter(Boolean).length,
        oe = [0, 1, 2, 3].map((ee => Ke[ee] ? Me[ee] ? Ue[ee] ? ye ? "firing" : "ready" : "blocked" : (ee => xF(be, ee).length > 0)(ee) ? "blocked" : "empty" : "closed")),
        Re = oe.indexOf("blocked"),
        ke = Re < 0 && Je > 0 ? oe.indexOf("empty") : -1;
      return oe.map(((ee, ie) => {
        const He = ie === Re ? {
          key: `${PF}colSlotClear`
        } : ie === ke ? {
          key: `${PF}colSlotAdd`,
          params: {
            time: VF(Math.min(4, Fe + 1))
          }
        } : null;
        return {
          dir: ie,
          tone: ee,
          title: {
            key: "blocked" !== ee || Me[ie] ? LF[ee] : `${PF}colSlotGap`,
            keys: {
              dir: AF[ie]
            }
          },
          hint: He
        }
      }))
    }

    function vF(ee) {
      var ie;
      return "noPower" === ee.baf2ColState && ee.baf2ColRxState ? qF({
        baf2RxState: ee.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (ie = ee.baf2ColRxHeat) && void 0 !== ie ? ie : 0
      }) : null
    }

    function uF(ee) {
      const ie = Mb(ee.baf2ColSpots).filter(Boolean).length,
        He = Mb(ee.baf2ColLive);
      let ye = 0,
        be = 0;
      return Mb(ee.baf2ColLasers).forEach(((ee, ie) => {
        ee && (ye++, be += He[ie] ? 0 : 1)
      })), be > 0 ? {
        key: `${PF}colSubSome`,
        params: {
          blocked: String(be),
          lasers: String(ye)
        }
      } : ie < 4 ? {
        key: `${PF}colSubSpots`,
        params: {
          lasers: String(ye),
          spots: String(ie)
        }
      } : {
        key: `${PF}colSub`,
        params: {
          lasers: String(ye)
        }
      }
    }

    function mF(ee) {
      const ie = vF(ee);
      if ("idle" === ee.baf2ColRxState && ie) return {
        key: `${PF}colState_noPowerIdle`
      };
      if (ie) return {
        key: `${PF}colState_noPowerReactor`,
        keys: {
          state: ie.label
        }
      };
      if ("noInput" !== ee.baf2ColState) return {
        key: `${PF}colState_${ee.baf2ColState}`
      };
      const He = String(Math.max(0, Fy.NOVA_SA - ee.baf2ColSa)),
        ye = String(Math.max(0, Fy.NOVA_GD - ee.baf2ColGd));
      return "0" !== He && "0" !== ye ? {
        key: `${PF}colState_noInput`,
        params: {
          sa: He,
          gd: ye
        }
      } : "0" !== He ? {
        key: `${PF}colState_noStarAlloy`,
        params: {
          sa: He
        }
      } : "0" !== ye ? {
        key: `${PF}colState_noGlowDust`,
        params: {
          gd: ye
        }
      } : {
        key: `${PF}colState_running`
      }
    }

    function lF(ee) {
      return ee.baf2ColP < 0 ? `${PF}colNext` : function(ee) {
        const ie = ee.baf2ColState;
        return ee.baf2ColP >= 0 && ("blocked" === ie || "noLasers" === ie || "noPower" === ie)
      }(ee) ? `${PF}colStalled` : null === SF(ee) ? `${PF}colMaking` : `${PF}colNovaIn`
    }

    function SF(ee) {
      if (ee.baf2ColP < 0 || ee.baf2ColWant <= 0) return null;
      const ie = ee.baf2ColFocusPerS * Math.min(1, ee.baf2ColDraw / ee.baf2ColWant);
      return ie > 0 ? Math.max(0, Fy.NOVA_FOCUS - ee.baf2ColP) / ie : null
    }

    function nF(ee, ie) {
      const He = [];
      for (let ye = 1; ye <= 3; ye++) {
        const be = [ee[0], ee[1] - ye, ee[2]];
        if (!ie(be)) return He;
        He.push(be)
      }
      return []
    }

    function jF(ee, ie) {
      const He = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let ye = 0; ye < 4; ye++) {
        const be = ye,
          Me = zy(ee.focus, be, Fy.LASER_D);
        if (ee.lasers[ye] || !ee.open[ye] || !ie(Me)) continue;
        const Ke = [];
        for (let He = 1; He < Fy.LASER_D; He++) {
          const ye = zy(ee.focus, be, He);
          ie(ye) || Ke.push(ye)
        }
        He.supports.push(...nF(Me, ie)), 0 === Ke.length ? He.free.push(Me) : (He.blocked.push(Me), He.gaps.push(...Ke))
      }
      return He
    }
    const sF = Fy.LASER_D - .25,
      IF = 4,
      hF = 2,
      NF = 16;
    const GF = {
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
        blendMode: AU.e.Standard,
        soft: !0
      },
      rF = {
        green: GF,
        pink: {
          ...GF,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function QF(ee, ie) {
      const He = {
        ...ie.params
      };
      for (const [be, Me] of Object.entries(null !== (ye = ie.keys) && void 0 !== ye ? ye : {})) {
        var ye;
        He[be] = ee(Me)
      }
      return He
    }
    const eJ = "buildAFactory2Game:",
      iJ = 2 * Fy.LASER_D + 1,
      HJ = Fy.LASER_D;

    function yJ(ee) {
      return ee(`${eJ}colFocusTip`, {
        need: aF(Fy.NOVA_FOCUS)
      })
    }

    function bJ(ee, ie) {
      return ee(ie.key, QF(ee, ie))
    }

    function MJ(ee) {
      const ie = ee.getStatus();
      return {
        status: ie,
        entry: ie ? ee.entryAtRoot(ie.baf2ColAt) : void 0
      }
    }

    function KJ(ee, ie) {
      return {
        left: 100 * (HJ + ee) / iJ + "%",
        top: 100 * (HJ + ie) / iJ + "%"
      }
    }

    function UJ(ee) {
      let {
        status: ie,
        entry: He
      } = ee;
      const ye = Mb(ie.baf2ColLasers),
        be = Mb(ie.baf2ColSpots),
        Me = Mb(ie.baf2ColLive),
        Ke = !0 === (null === He || void 0 === He ? void 0 : He.on),
        Ue = Fy.LASER_D,
        Fe = [];
      for (let qe = 0; qe < 4; qe++) {
        const [ee, , ie] = Xy[qe];
        if (Me[qe]) {
          const He = 100 * (Ue - 1) / iJ,
            ye = ee + ie > 0 ? 100 * (HJ + 1) / iJ : 100 * (HJ - (Ue - 1)) / iJ,
            be = 100 * (HJ + .35) / iJ,
            Me = 30 / iJ,
            Je = 0 !== ee ? {
              left: `${ye}%`,
              width: `${He}%`,
              top: `${be}%`,
              height: `${Me}%`
            } : {
              top: `${ye}%`,
              height: `${He}%`,
              left: `${be}%`,
              width: `${Me}%`
            };
          Fe.push((0, gM.jsx)("i", {
            className: Ob()("Baf2ColDiagramBeam", {
              Off: !Ke
            }),
            style: Je
          }, `beam${qe}`))
        }
        const He = ye[qe] ? "Baf2ColDiagramLaser" : be[qe] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        Fe.push((0, gM.jsx)("i", {
          className: He,
          style: KJ(ee * Ue, ie * Ue)
        }, `spot${qe}`))
      }
      for (let qe = 0; qe < 4; qe++) {
        if (ye[qe] || !be[qe]) continue;
        const [ee, , He] = Xy[qe];
        for (const ye of xF(null !== (Je = ie.baf2ColGaps) && void 0 !== Je ? Je : 0, qe)) {
          var Je;
          Fe.push((0, gM.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: KJ(ee * ye, He * ye)
          }, `gap${qe},${ye}`))
        }
      }
      for (const [qe, , fe] of null !== (oe = null === He || void 0 === He ? void 0 : He.blockers) && void 0 !== oe ? oe : []) {
        var oe, Re, ke;
        const ee = qe - (null !== (Re = null === He || void 0 === He ? void 0 : He.focus[0]) && void 0 !== Re ? Re : 0),
          ie = fe - (null !== (ke = null === He || void 0 === He ? void 0 : He.focus[2]) && void 0 !== ke ? ke : 0);
        Fe.push((0, gM.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: KJ(ee, ie)
        }, `block${ee},${ie}`))
      }
      return (0, gM.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [Fe, (0, gM.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function FJ(ee) {
      let {
        status: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)(), ye = Mb(ie.baf2ColLive).filter(Boolean).length;
      return (0, gM.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, gM.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: yJ(He),
          children: He(`${eJ}colLadder`)
        }), (0, gM.jsx)("ul", {
          children: [1, 2, 3, 4].map((ee => (0, gM.jsx)("li", {
            className: Ob()({
              On: ee === ye
            }),
            children: He(`${eJ}colLadderChip`, {
              lasers: String(ee),
              time: VF(ee)
            })
          }, ee)))
        })]
      })
    }

    function JJ(ee) {
      let {
        item: ie,
        lJ: He,
        need: ye,
        cap: be
      } = ee;
      const {
        t: Me
      } = (0, Zb.v)(), Ke = Math.min(He, ye);
      return (0, gM.jsxs)("li", {
        className: Ob()("Baf2ColTile", {
          Short: He < ye
        }),
        children: [(0, gM.jsx)(oJ, {
          item: ie
        }), (0, gM.jsx)("b", {
          className: "Baf2ColTileValue",
          children: Me(`${eJ}colOutOf`, {
            amount: String(Ke),
            cap: String(ye)
          })
        }), (0, gM.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, gM.jsx)("i", {
            style: {
              width: 100 * Ke / ye + "%"
            }
          })
        }), He > ye && (0, gM.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: Me(`${eJ}colIntakeHeld`, {
            amount: String(He),
            cap: String(be)
          })
        })]
      })
    }

    function oJ(ee) {
      let {
        item: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)();
      return (0, gM.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, gM.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, gM.jsx)(Db.c, {
            itemName: ie,
            amount: 0
          })
        }), (0, gM.jsx)("span", {
          className: "Baf2ColTileName",
          children: (0, eM.f)(He, ie)
        })]
      })
    }

    function RJ(ee) {
      switch (ee.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function kJ(ee) {
      var ie, He, be;
      let {
        store: Me,
        close: Ke
      } = ee;
      const {
        t: Ue
      } = (0, Zb.v)(), Fe = LK(), {
        status: Je,
        entry: oe
      } = function(ee) {
        const [ie, He] = (0, ye.useState)((() => MJ(ee)));
        return (0, ye.useEffect)((() => (He(MJ(ee)), ee.subscribe((() => {
          He(MJ(ee))
        })))), [ee]), ie
      }(Me), [Re, ke] = (0, ye.useState)(null), qe = null === Je || void 0 === Je ? void 0 : Je.baf2ColHold;
      (0, ye.useEffect)((() => {
        ke(null)
      }), [qe]);
      const fe = (0, ye.useRef)({
          p: -1,
          n: 0
        }),
        Te = null !== (ie = null === Je || void 0 === Je ? void 0 : Je.baf2ColP) && void 0 !== ie ? ie : -1;
      Te < fe.current.p && fe.current.n++, fe.current.p = Te;
      const pe = (0, ye.useRef)(null),
        [Xe] = (0, ye.useState)((() => {
          return (ee = Me.heldAtOpen()) === Ry || ee === ky ? {
            key: `${PF}colBeltItIn`,
            item: ee
          } : null;
          var ee
        }));
      if (!Je) return null;
      const ze = Je.baf2ColMember,
        Be = Je.baf2ColP >= 0,
        Ee = function(ee, ie) {
          if (ee.baf2ColP >= 0 && ee.baf2ColDraw > 0) {
            const ie = ee.baf2ColWant > 0 ? Math.min(1, ee.baf2ColDraw / ee.baf2ColWant) : 0;
            return {
              focus: ee.baf2ColFocusPerS * ie,
              draw: ee.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === ee.baf2ColState && ie && ie.draw > 0 ? {
            ...ie,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Je, pe.current);
      pe.current = Ee.draw > 0 ? Ee : null;
      const ge = "slowed" === Je.baf2ColState || "noPower" === Je.baf2ColState,
        Oe = SF(Je),
        de = null !== Re && void 0 !== Re ? Re : Je.baf2ColHold,
        We = function(ee) {
          var ie, He;
          return "idle" === ee.baf2ColRxState ? null : null !== (ie = null === (He = vF(ee)) || void 0 === He ? void 0 : He.fix) && void 0 !== ie ? ie : null
        }(Je),
        te = null === We && null === Xe ? function(ee) {
          var ie;
          const He = ee.baf2ColSentTo;
          if (!He) return null;
          const ye = null !== (ie = ee.baf2ColSentHeld) && void 0 !== ie ? ie : null;
          return {
            key: null === ye ? `${PF}colNovaSentToMachine` : `${PF}colNovaSentTo`,
            target: He,
            lJ: ye
          }
        }(Je) : null,
        Ze = Be ? Ue(`${eJ}colFocusOf`, {
          focus: aF(Je.baf2ColP),
          need: aF(Fy.NOVA_FOCUS)
        }) : null;
      return (0, gM.jsx)(XK.e, {
        close: Ke,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, gM.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, gM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gM.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, gM.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, gM.jsx)(Db.c, {
                  itemName: Jy,
                  amount: 0
                })
              }), (0, gM.jsxs)("div", {
                children: [(0, gM.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: (0, eM.f)(Ue, Jy)
                }), (0, gM.jsx)("p", {
                  children: bJ(Ue, uF(Je))
                })]
              })]
            }), (0, gM.jsx)(zK.i, {
              onClick: Ke
            })]
          }), (0, gM.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, gM.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, gM.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, gM.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: Ue(lF(Je), {
                    time: null === Oe ? "" : XM(Ue, Oe)
                  })
                }), (0, gM.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, gM.jsx)("i", {
                    style: {
                      width: (Be ? 100 * Je.baf2ColP / Fy.NOVA_FOCUS : 0) + "%"
                    }
                  }, fe.current.n)
                }), (0, gM.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, gM.jsxs)("span", {
                    title: yJ(Ue),
                    children: [(0, gM.jsx)("b", {
                      children: aF(Ee.focus)
                    }), " ", Ue(`${eJ}colFocusPerS`)]
                  }), (0, gM.jsxs)("span", {
                    className: Ob()("Baf2ColDraw", {
                      Short: ge
                    }),
                    children: [(0, gM.jsx)(wb.e, {
                      name: "bolt"
                    }), ge ? Ue(`${eJ}colDrawOf`, {
                      draw: aF(Je.baf2ColDraw),
                      want: aF(Je.baf2ColWant)
                    }) : Ue(`${eJ}colPowerPerS`, {
                      rate: aF(Ee.draw)
                    })]
                  }), null !== Ze && (0, gM.jsx)("span", {
                    className: "Soft",
                    children: Ze
                  })]
                })]
              }), (0, gM.jsx)("p", {
                className: Ob()("Baf2ColState", RJ(Je)),
                children: bJ(Ue, mF(Je))
              }), null !== We && (0, gM.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Ue(We)
              }), null === We && null !== Xe && (0, gM.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Ue(Xe.key, {
                  item: (0, eM.f)(Ue, Xe.item)
                })
              }), te && (0, gM.jsx)("p", {
                className: "Baf2ColStateFix",
                children: Ue(te.key, {
                  target: (0, eM.f)(Ue, te.target),
                  amount: String(null !== (He = te.lJ) && void 0 !== He ? He : 0)
                })
              }), (0, gM.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, gM.jsx)(JJ, {
                  item: Ry,
                  lJ: Je.baf2ColSa,
                  need: Fy.NOVA_SA,
                  cap: Fy.SA_CAP
                }), (0, gM.jsx)(JJ, {
                  item: ky,
                  lJ: Je.baf2ColGd,
                  need: Fy.NOVA_GD,
                  cap: Fy.GD_CAP
                }), (0, gM.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, gM.jsx)(oJ, {
                    item: "Nova Matter"
                  }), (0, gM.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: Ue(`${eJ}colNovaHeld`, {
                      amount: String(Je.baf2ColOut),
                      cap: String(Fy.OUT_CAP)
                    })
                  }), ze && (0, gM.jsx)(zK.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === Je.baf2ColOut,
                    onClick: () => {
                      Fe.send(YF(Je, "take"))
                    },
                    children: Ue(`${eJ}colTake`)
                  })]
                })]
              }), ze && (0, gM.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": de,
                className: Ob()("Baf2ColHold", {
                  On: de
                }),
                onClick: ee => {
                  ee.detail > 0 && ee.currentTarget.blur(), ke(!de), Fe.send(YF(Je, "hold " + (de ? 0 : 1)))
                },
                children: [(0, gM.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, gM.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, gM.jsx)("b", {
                    children: Ue(`${eJ}colHold`)
                  }), (0, gM.jsx)("span", {
                    children: Ue(`${eJ}colHoldNote`)
                  })]
                })]
              })]
            }), (0, gM.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, gM.jsx)(UJ, {
                status: Je,
                entry: oe
              }), (0, gM.jsx)("ul", {
                className: "Baf2ColSlots",
                children: CF(Je.baf2ColLasers, Je.baf2ColSpots, Je.baf2ColLive, Ee.beamsOn, null !== (be = Je.baf2ColGaps) && void 0 !== be ? be : 0).map((ee => (0, gM.jsxs)("li", {
                  className: ee.tone,
                  children: [(0, gM.jsx)("b", {
                    children: bJ(Ue, ee.title)
                  }), null !== ee.hint && (0, gM.jsx)("span", {
                    children: bJ(Ue, ee.hint)
                  })]
                }, ee.dir)))
              }), (0, gM.jsx)(FJ, {
                status: Je
              })]
            })]
          })]
        })
      })
    }
    const qJ = "buildAFactory2Game:",
      fJ = 36e5,
      TJ = 864e5;

    function pJ(ee, ie, He) {
      return Math.max(0, Math.ceil((ee + ie - Math.max(He, ee)) / 1e3))
    }

    function XJ(ee) {
      return ee.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function zJ(ee) {
      return "Homestead" === ee
    }

    function BJ(ee) {
      return function(ee) {
        let ie = 0;
        for (const He of ee) {
          const ee = /^Island ([1-9]\d{0,5})$/.exec(He);
          ee && (ie = Math.max(ie, Number(ee[1])))
        }
        return `Island ${ie+1}`
      }(ee.map((ee => ee.baf2IslandName)))
    }

    function EJ(ee, ie) {
      return function(ee) {
        return `${qJ}islandsBlocked${ee[0].toUpperCase()}${ee.slice(1)}`
      }("degraded" === ee && 0 === ie ? "stuck" : ee)
    }

    function gJ(ee) {
      return ee.filter((ee => {
        var ie;
        return !ee.baf2IslandActive && void 0 === ee.baf2IslandUnreadable && void 0 === (null === (ie = ee.baf2IslandCoop) || void 0 === ie ? void 0 : ie.baf2CoopState)
      })).length
    }

    function OJ(ee) {
      return "coopMoving" === ee || "coopUnreachable" === ee
    }

    function dJ(ee, ie) {
      const He = ie > 0;
      return {
        change: null === ee && !He,
        switch: (null === ee || "degraded" === ee || OJ(ee)) && !He,
        rename: "loading" !== ee && "degraded" !== ee && "stuck" !== ee
      }
    }

    function WJ(ee, ie) {
      return void 0 === ee || "corrupt" === ee && ie
    }
    const tJ = PK;

    function ZJ(ee, ie, He) {
      if (null !== ee && void 0 !== ee && ee.untilGone) {
        var ye;
        return !("dismiss" === ee.untilGone && void 0 === (null === (ye = ie.baf2IslandCoop) || void 0 === ye ? void 0 : ye.baf2CoopState)) && He - ee.atMs < 32500
      }
      return void 0 !== ee && He - ee.atMs < tJ && ie.baf2IslandName === ee.from
    }
    const wJ = PK;

    function DJ(ee) {
      return "core" === (null === ee || void 0 === ee ? void 0 : ee.kind) ? ee.core : "islands" === (null === ee || void 0 === ee ? void 0 : ee.kind) ? ee.backToCore : void 0
    }

    function PJ(ee) {
      return `\0${ee}\0`
    }

    function AJ(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const ye = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const Me of Object.keys(He)) ye[Me] = PJ(Me);
      let be = Object.keys(ye).length > 0 ? ee(ie, ye) : ee(ie);
      for (const [Me, Ke] of Object.entries(He)) be = be.split(PJ(Me)).join(Ke);
      return be
    }

    function YJ(ee, ie) {
      return ee ? ie ? "enabled" : "disabled" : "hidden"
    }
    const VJ = {
      removed: `${qJ}islandsCoopRemoved`,
      deleted: `${qJ}islandsCoopDeleted`,
      notReady: `${qJ}islandsCoopNotReady`,
      gone: `${qJ}islandsCoopGone`
    };

    function aJ(ee) {
      var ie;
      return "member" !== (null === (ie = ee.baf2IslandCoop) || void 0 === ie ? void 0 : ie.baf2CoopRole) && "newer" !== ee.baf2IslandUnreadable
    }

    function cJ(ee, ie, He, ye, be, Me) {
      const Ke = ee.baf2IslandActive,
        Ue = ee.baf2IslandUnreadable,
        Fe = ee.baf2IslandCoop,
        Je = function(ee, ie, He) {
          return {
            switch: ee.switch && void 0 === ie,
            delete: ee.change && WJ(ie, He)
          }
        }(ie, Ue, ye),
        oe = Ke && void 0 !== Fe && void 0 === Fe.baf2CoopState && "coopUnreachable" === Me,
        Re = {
          switch: YJ((!Ke || oe) && void 0 === Ue, oe || Je.switch),
          switchLabel: oe ? "tryAgain" : "switch",
          rename: YJ(!0, ie.rename),
          delete: YJ(!Ke, Je.delete),
          deleteWaits: !Ke && WJ(Ue, ye),
          people: YJ(void 0 !== ee.baf2IslandInvitable || be && Ke && void 0 === Ue && void 0 === Fe, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        ke = !Ke && Je.delete;
      if (void 0 === Fe) return He ? {
        ...Re,
        delete: YJ(!Ke, !1),
        deleteWaits: !1,
        note: ke ? {
          key: `${qJ}islandsCoopKeepOwn`
        } : null
      } : Re;
      const qe = Fe.baf2CoopState,
        fe = Fe.baf2CoopMembers.length > 1,
        Te = {
          ...Re,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== qe && "member" === Fe.baf2CoopRole) return {
        ...Te,
        dismiss: YJ(!0, ie.rename),
        note: {
          key: VJ[qe],
          names: {
            owner: Fe.baf2CoopOwner
          }
        }
      };
      if (void 0 !== qe) {
        let ee = {
          key: `${qJ}islandsCoopOwnLost`
        };
        return ke && fe ? ee = {
          key: `${qJ}islandsCoopDeleteMembers`
        } : ke && He && (ee = {
          key: `${qJ}islandsCoopKeepOwn`
        }), {
          ...Te,
          delete: YJ(!Ke, Je.delete && !fe && !He),
          deleteWaits: Re.deleteWaits && !fe && !He,
          note: ee
        }
      }
      if ("member" === Fe.baf2CoopRole) return {
        ...Re,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: YJ(!0, Ke ? ie.switch : ie.rename)
      };
      const pe = Fe.baf2CoopManageHere;
      let Xe = null;
      var ze;
      pe || Ke ? ke && fe ? Xe = {
        key: `${qJ}islandsCoopDeleteMembers`
      } : ke && He && (Xe = {
        key: `${qJ}islandsCoopKeepOwn`
      }) : Xe = {
        key: null !== (ze = Fe.baf2CoopLeft) && void 0 !== ze && ze.length ? `${qJ}islandsCoopManageThereClaim` : `${qJ}islandsCoopManageThere`
      };
      return {
        ...Re,
        rename: YJ(!0, ie.rename && pe),
        delete: YJ(!Ke, Je.delete && !fe && !He),
        deleteWaits: Re.deleteWaits && !fe && !He,
        people: "enabled",
        peopleLabel: "players",
        unshare: YJ(pe && Ke && !fe, ie.change),
        remove: pe,
        note: Xe
      }
    }

    function xJ(ee) {
      var ie;
      const He = ee.baf2IslandCoop;
      if ("owner" !== (null === He || void 0 === He ? void 0 : He.baf2CoopRole) || void 0 !== He.baf2CoopState || null === (ie = He.baf2CoopLeft) || void 0 === ie || !ie.length) return null;
      const ye = ee.baf2IslandActive && He.baf2CoopManageHere;
      return {
        left: He.baf2CoopLeft,
        claim: ye,
        goThere: !ye && He.baf2CoopManageHere
      }
    }

    function LJ(ee) {
      return ee.baf2CoopMembers.length >= ee.baf2CoopMax
    }

    function CJ(ee, ie, He) {
      return void 0 !== ee && ie < ee.answer && He - ee.atMs < tJ
    }
    const vJ = "buildAFactory2Game:";

    function uJ(ee, ie) {
      return {
        onKeyDown: He => {
          He.stopPropagation(), He.nativeEvent.isComposing || 229 === He.nativeEvent.keyCode || ("Enter" === He.key ? (He.preventDefault(), ee()) : "Escape" === He.key && (He.preventDefault(), ie()))
        }
      }
    }

    function mJ(ee) {
      return {
        onKeyDown: ie => {
          "Escape" !== ie.key || ie.nativeEvent.isComposing || (ie.preventDefault(), ie.stopPropagation(), ee())
        }
      }
    }

    function lJ(ee) {
      ee.currentTarget.select()
    }

    function SJ(ee, ie) {
      (0, ye.useEffect)((() => {
        var He;
        ee && (null === (He = ie.current) || void 0 === He || He.scrollIntoView({
          block: "nearest"
        }))
      }), [ee, ie])
    }

    function nJ(ee) {
      const [ie, He] = (0, ye.useState)(null);
      return (0, ye.useEffect)((() => {
        const ie = document.querySelector(".UiRequests"),
          ye = ee.current;
        if (!ie || !ye || "undefined" === typeof ResizeObserver) return;
        const be = () => {
          const ee = ie.getBoundingClientRect(),
            be = ye.getBoundingClientRect(),
            Me = ye.parentElement,
            Ke = Me && parseFloat(getComputedStyle(Me).paddingTop) || 0,
            Ue = function(ee, ie, He, ye) {
              if (!ee || ee.height <= 0 || ee.right <= ie.left || ee.left >= ie.right) return null;
              const be = Math.max(ye, ee.bottom + 8);
              return {
                marginTop: Math.round(be - ye),
                maxHeight: Math.max(0, Math.floor(He - be - ye))
              }
            }(ee, be, window.innerHeight, Ke);
          He((ee => (null === ee || void 0 === ee ? void 0 : ee.marginTop) === (null === Ue || void 0 === Ue ? void 0 : Ue.marginTop) && (null === ee || void 0 === ee ? void 0 : ee.maxHeight) === (null === Ue || void 0 === Ue ? void 0 : Ue.maxHeight) ? ee : Ue))
        };
        be();
        const Me = new ResizeObserver(be);
        return Me.observe(ie), window.addEventListener("resize", be), () => {
          Me.disconnect(), window.removeEventListener("resize", be)
        }
      }), [ee]), ie
    }

    function jJ() {
      (0, ye.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function sJ(ee) {
      (0, ye.useEffect)((() => {
        var ie;
        null === (ie = ee.current) || void 0 === ie || ie.focus()
      }), [ee])
    }

    function IJ(ee) {
      const [ie, He] = (0, ye.useState)(Date.now);
      return (0, ye.useEffect)((() => {
        const ie = window.setInterval((() => {
          He(Date.now())
        }), ee);
        return () => {
          window.clearInterval(ie)
        }
      }), [ee]), ie
    }

    function hJ(ee) {
      let {
        tier: ie,
        t: He
      } = ee;
      const {
        kind: ye,
        short: be
      } = pe(ie), Me = qe(ie, fe), Ke = He(`${vJ}${Me.key}`, {
        ...Me.params,
        name: He(`${vJ}${Xe(ie).nameKey}`)
      });
      return (0, gM.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, gM.jsx)("span", {
          className: Ob()("Baf2IslandTierPip", {
            Stage: "tier" !== ye
          }),
          "aria-hidden": "true",
          children: be
        }), Ke]
      })
    }

    function NJ(ee) {
      let {
        note: ie,
        className: He,
        t: ye
      } = ee;
      return (0, gM.jsx)("p", {
        className: Ob()("Baf2IslandNote", He),
        children: AJ(ye, ie.key, ie.names, ie.params)
      })
    }
    const GJ = "buildAFactory2Game:";

    function rJ(ee) {
      let {
        message: ie,
        arrivedAtMs: He,
        close: be,
        leave: Me
      } = ee;
      const Ke = LK(),
        {
          t: Ue
        } = (0, Zb.v)(),
        Fe = IJ(1e3),
        Je = (0, ye.useRef)(null);
      jJ(), (0, ye.useEffect)((() => {
        var ee;
        null === (ee = Je.current) || void 0 === ee || ee.focus()
      }), []);
      const oe = pJ(He, ie.baf2TransferInMs, Fe),
        Re = He + ie.baf2TransferInMs - 1e3,
        [ke, qe] = (0, ye.useState)(null);
      (0, ye.useEffect)((() => {
        const ee = window.setTimeout((() => {
          qe(Re)
        }), Math.max(0, Re - Date.now()));
        return () => {
          window.clearTimeout(ee)
        }
      }), [Re]);
      const fe = ke === Re || Fe >= Re,
        Te = ie.baf2TransferIsland,
        pe = ie.baf2TransferOwner;
      return (0, gM.jsx)(XK.e, {
        close: be,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, gM.jsxs)("section", {
          ref: Je,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, gM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gM.jsxs)("div", {
              children: [(0, gM.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === pe ? AJ(Ue, `${GJ}islandsTransferOwn`, {
                  island: Te
                }) : AJ(Ue, `${GJ}islandsTransfer`, {
                  island: Te,
                  owner: pe
                })
              }), (0, gM.jsx)("p", {
                children: fe ? Ue(`${GJ}islandsTransferNow`) : Ue(`${GJ}islandsTransferIn`, {
                  time: XM(Ue, oe)
                })
              })]
            }), (0, gM.jsx)(zK.i, {
              ariaLabel: Ue(`${GJ}islandsClose`),
              onClick: be
            })]
          }), !fe && (0, gM.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, gM.jsx)("p", {
              className: "Baf2TransferNote",
              children: Ue(`${GJ}islandsTransferNote`)
            }), (0, gM.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, gM.jsx)(zK.c, {
                onClick: () => {
                  Ke.send("baf2coopstay"), Me()
                },
                children: Ue(`${GJ}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var QJ = He(1432),
      eo = He(1087),
      io = He.n(eo);
    const Ho = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const yo = "buildAFactory2Game:",
      bo = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function Mo(ee, ie, He) {
      return void 0 === ie ? He : "string" === typeof ie ? ie : Array.isArray(ie) ? ie.map((ie => "string" === typeof ie ? ie : "translationKey" in ie ? ee(ie.translationKey) : "")).join("") : ee(ie.translationKey)
    }

    function Ko(ee) {
      const ie = {};
      for (const [He, ye] of Object.entries(null !== ee && void 0 !== ee ? ee : {})) ie[He] = ye < 0 ? pM(ye) : ye.toLocaleString("en-US");
      return ie
    }

    function Uo(ee, ie) {
      const He = ie ? "touch" : "mouse";
      return {
        use: ee(`${yo}lookUse_${He}`),
        Use: ee(`${yo}lookUseStart_${He}`)
      }
    }
    const Fo = (0, ye.memo)((function(ee) {
      let {
        item: ie
      } = ee;
      return (0, gM.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, gM.jsx)(Db.c, {
          itemName: ie,
          amount: 0
        })
      })
    }));

    function Jo(ee) {
      let {
        label: ie,
        percent: He,
        progress: ye
      } = ee;
      return (0, gM.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, gM.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${ie}: ${ye}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": He,
          children: (0, gM.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${He}%`
            }
          })
        }), (0, gM.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: ye
        })]
      })
    }

    function oo(ee) {
      let {
        chips: ie
      } = ee;
      return (0, gM.jsx)("span", {
        className: "Baf2QuestChips",
        children: ie.map((ee => {
          let [ie, He, ye] = ee;
          const be = He >= ye;
          return (0, gM.jsxs)("span", {
            className: Ob()("Baf2QuestChip", {
              Met: be
            }),
            children: [(0, gM.jsx)(Fo, {
              item: ie
            }), (0, gM.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: be ? `\u2713${ye}` : `${He}/${ye}`
            })]
          }, ie)
        }))
      })
    }

    function Ro(ee, ie) {
      const {
        key: He,
        params: ye
      } = qe(ie, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return ee(`${yo}${He}`, {
        ...ye,
        name: ee(`${yo}${Xe(ie).nameKey}`)
      })
    }

    function ko(ee) {
      let {
        core: ie,
        t: He
      } = ee;
      const [ye, be] = ie, Me = be > 0 ? Math.floor(100 * ye / be) : 100;
      return (0, gM.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": He(`${yo}questCoreLabel`, {
          have: String(ye),
          need: String(be)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Me,
        children: [(0, gM.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: He(`${yo}questCore`, {
            percent: String(Me)
          })
        }), (0, gM.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, gM.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${Me}%`
            }
          })
        })]
      })
    }

    function qo(ee) {
      let {
        rows: ie,
        t: He
      } = ee;
      const ye = ie.filter((ee => ee.done)).length;
      return (0, gM.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": He(`${yo}questStepsProgress`, {
          done: String(ye),
          total: String(ie.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": ie.length,
        "aria-valuenow": ye,
        children: ie.map((ee => (0, gM.jsx)("span", {
          className: Ob()("Baf2QuestSegment", {
            Done: ee.done,
            Current: ee.current
          })
        }, ee.id)))
      })
    }
    const fo = (0, ye.memo)(po, To);

    function To(ee, ie) {
      const He = He => ee.view.itemNames[He] === ie.view.itemNames[He];
      return ee.t === ie.t && ee.extra === ie.extra && (null === ee.row.item || He(ee.row.item)) && ee.row.madeFor.every(He) && ee.row.also.every(He) && io()(ee.row, ie.row)
    }

    function po(ee) {
      let {
        row: ie,
        view: He,
        t: ye,
        extra: be
      } = ee;
      const {
        isTouchScreen: Me
      } = (0, Bb.m)(["isTouchScreen"]), Ke = ie.item ? function(ee, ie, He) {
        return 1 !== He && Ho.has(ee) ? tb(ie) : null
      }(ie.key, ie.item, ie.total) : null, Ue = Ke ? ye(Ke) : ie.item ? Mo(ye, He.itemNames[ie.item], ie.item) : "", Fe = ie.also.map((ee => Mo(ye, He.itemNames[ee], ee))), Je = Fe.join(", "), oe = function(ee, ie) {
        var He;
        return ie.length < 2 ? null !== (He = ie[0]) && void 0 !== He ? He : "" : ee(`${yo}listAnd`, {
          rest: ie.slice(0, -1).join(ee(`${yo}listComma`)),
          last: ie[ie.length - 1]
        })
      }(ye, [Ue, ...Fe]), Re = ye(`${yo}${ie.key}`, {
        ...Uo(ye, Me),
        ...Ko(ie.params),
        item: Ue,
        also: Je,
        itemList: oe,
        total: String(ie.total)
      }), [ke, ...qe] = Re.split("\n"), fe = ie.total > 1 && !ie.done && !ie.away;
      return (0, gM.jsxs)("li", {
        className: Ob()("Baf2QuestStep", {
          Done: ie.done,
          Current: ie.current,
          JustFinished: ie.justFinished,
          Away: ie.away
        }),
        children: [!ie.done && null !== ie.item && (0, gM.jsx)(Fo, {
          item: ie.item
        }), (ie.done || null === ie.item) && (0, gM.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: ie.done ? "\u2713" : "\u25cb"
        }), (0, gM.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, gM.jsx)("strong", {
            children: ke
          }), qe.length > 0 && (0, gM.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: qe.join(" ")
          }), !ie.done && ie.madeFor.length > 0 && (0, gM.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: ye("buildAFactory2Game:questRowFor", {
              items: ie.madeFor.map((ee => Mo(ye, He.itemNames[ee], ee))).join(" \u2192 ")
            })
          }), fe && (0, gM.jsx)(Jo, {
            label: ke,
            percent: Math.round(100 * ie.amount / ie.total),
            progress: `${ie.amount.toLocaleString("en-US")}/${ie.total.toLocaleString("en-US")}`
          }), !ie.done && !ie.away && ie.chips && ie.chips.length > 0 && (0, gM.jsx)(oo, {
            chips: ie.chips
          }), be]
        })]
      })
    }
    const Xo = "buildAFactory2Game:",
      zo = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      Bo = {
        on: `${Xo}tutorialButtonOn`,
        hud: `${Xo}tutorialButtonHud`,
        off: `${Xo}tutorialButtonOff`
      },
      Eo = {
        on: `${Xo}tutorialPickedOn`,
        hud: `${Xo}tutorialPickedHud`,
        off: `${Xo}tutorialPickedOff`
      };
    class go {
      constructor(ee, ie, He) {
        this.commands = ee, this.quests = ie, this.toasts = He
      }
      next() {
        const ee = function(ee) {
            return Ye[(Ye.indexOf(ee) + 1) % Ye.length]
          }(this.quests.get().tutorial),
          ie = this.quests.setTutorial(ee);
        this.commands.send(`baf2tutorial ${ee} ${ie}`), this.toasts.show({
          baf2ToastText: [(0, ae.be)({
            translationKey: Eo[ee]
          }, ae.L.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function Oo(ee, ie) {
      let [He, ye] = ie;
      return ee(`${yo}${He}`, Ko(ye))
    }

    function Wo(ee) {
      let [ie, He] = ee;
      return ie + JSON.stringify(He)
    }

    function to(ee) {
      let {
        goal: ie,
        t: He
      } = ee;
      return ie ? (0, gM.jsx)("span", {
        className: "Baf2BookGoal",
        children: He(`${yo}${ie}`)
      }) : null
    }

    function Zo(ee) {
      let {
        view: ie,
        t: He
      } = ee;
      if (!ie.name) return null;
      const ye = lb(ie.rows);
      return (0, gM.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, gM.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: He(`${yo}currentQuest`)
        }), (0, gM.jsx)("strong", {
          className: "Baf2BookTitle",
          children: Oo(He, ie.name)
        }), (0, gM.jsx)(to, {
          goal: ie.goal,
          t: He
        }), ye.length > 1 && (0, gM.jsx)(qo, {
          rows: ye,
          t: He
        }), (0, gM.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: ie.rows.map((ee => (0, gM.jsx)(fo, {
            row: ee,
            view: ie,
            t: He
          }, ee.id)))
        }), ie.reward && (0, gM.jsxs)("span", {
          className: "Baf2BookReward",
          children: [He(`${yo}questReward`), (0, gM.jsx)(Fo, {
            item: ie.reward
          }), Mo(He, ie.itemNames[ie.reward], ie.reward)]
        })]
      })
    }

    function wo(ee) {
      let {
        quest: ie,
        upcoming: He,
        t: ye
      } = ee;
      return (0, gM.jsxs)("li", {
        className: Ob()("Baf2BookQuest", {
          Done: ie[3],
          Upcoming: He
        }),
        children: [(0, gM.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: ie[3] ? "\u2713" : "\u25cb"
        }), (0, gM.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, gM.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Oo(ye, ie)
          }), (0, gM.jsx)(to, {
            goal: ie[2],
            t: ye
          })]
        })]
      })
    }

    function Do(ee) {
      let {
        done: ie,
        total: He,
        t: ye
      } = ee;
      const be = He > 0 ? Math.round(100 * ie / He) : 0,
        Me = ye(`${yo}questBookChapterProgress`, {
          done: String(ie),
          total: String(He)
        });
      return (0, gM.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, gM.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": Me,
          "aria-valuemin": 0,
          "aria-valuemax": He,
          "aria-valuenow": ie,
          children: (0, gM.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${be}%`
            }
          })
        }), (0, gM.jsx)("span", {
          className: "Baf2BookProgressText",
          children: Me
        })]
      })
    }

    function Po(ee) {
      let {
        view: ie,
        tier: He,
        quests: ye,
        t: be
      } = ee;
      const Me = He === ie.tier,
        Ke = (null !== ye && void 0 !== ye ? ye : []).filter((ee => !ee[4])),
        Ue = (null !== ye && void 0 !== ye ? ye : []).filter((ee => ee[4])),
        Fe = Ke.filter((ee => ee[3])).length,
        Je = Me && ie.name ? Wo(ie.name) : null,
        oe = Ke.findIndex((ee => !ee[3] && Wo(ee) === Je));
      return (0, gM.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, gM.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, gM.jsx)("h3", {
            children: Ro(be, He)
          }), Ke.length > 0 && (0, gM.jsx)(Do, {
            done: Fe,
            total: Ke.length,
            t: be
          }), Me && ie.core && (0, gM.jsx)(ko, {
            core: ie.core,
            t: be
          })]
        }), (0, gM.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === ye && Me && (0, gM.jsx)(Zo, {
            view: ie,
            t: be
          }), Ke.map(((ee, He) => He === oe ? (0, gM.jsx)(Zo, {
            view: ie,
            t: be
          }, Wo(ee)) : (0, gM.jsx)(wo, {
            quest: ee,
            upcoming: !ee[3],
            t: be
          }, Wo(ee))))]
        }), Me && ie.side && (0, gM.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, gM.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: be(`${yo}questSide`)
          }), (0, gM.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Oo(be, ie.side.name)
          }), (0, gM.jsx)(to, {
            goal: ie.side.goal,
            t: be
          }), (0, gM.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, gM.jsx)(fo, {
              row: ie.side.row,
              view: ie,
              t: be
            })
          })]
        }), Ue.length > 0 && (0, gM.jsxs)(gM.Fragment, {
          children: [(0, gM.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: be(`${yo}questBookSidesDone`)
          }), (0, gM.jsx)("ol", {
            className: "Baf2BookQuests",
            children: Ue.map((ee => (0, gM.jsx)(wo, {
              quest: ee,
              upcoming: !1,
              t: be
            }, Wo(ee))))
          })]
        })]
      })
    }

    function Ao(ee) {
      var ie, He, Me;
      let {
        store: Ke,
        tutorial: Ue,
        close: Fe
      } = ee;
      const {
        t: Je
      } = (0, Zb.v)(), Re = (0, QJ.j)(cb, Ke.get()), ke = null !== (ie = Re.tier) && void 0 !== ie ? ie : 1, [qe, fe] = (0, ye.useState)(null), Xe = (null === qe || void 0 === qe ? void 0 : qe.at) === ke ? qe.tier : ke, ze = (0, ye.useRef)(null), Be = null !== Re.chapters;
      (0, ye.useEffect)((() => {
        var ee;
        ze.current && (ze.current.scrollTop = 0);
        const ie = null === (ee = ze.current) || void 0 === ee ? void 0 : ee.querySelector(".Baf2BookQuest.Current");
        if (ze.current && ie) {
          const ee = ie.getBoundingClientRect().bottom - ze.current.getBoundingClientRect().bottom;
          ee > 0 && (ze.current.scrollTop += Math.min(ee, ie.getBoundingClientRect().top - ze.current.getBoundingClientRect().top))
        }
      }), [Xe, Be]);
      const Ee = null === (He = Re.chapters) || void 0 === He ? void 0 : He.find((ee => {
        let [ie] = ee;
        return ie === Xe
      }));
      return (0, gM.jsx)(XK.e, {
        close: Fe,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, gM.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: bo,
          children: [(0, gM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gM.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: Je(`${yo}questBookTitle`)
            }), (0, gM.jsx)(zK.m, {
              className: "Baf2BookTutorialButton",
              disabled: !Re.tutorialKnown,
              ariaLabel: Je(Bo[Re.tutorial]),
              title: Je(Bo[Re.tutorial]),
              onClick: () => {
                Ue.next()
              },
              children: (0, gM.jsx)(wb.e, {
                name: zo[Re.tutorial]
              })
            }), (0, gM.jsx)(zK.i, {
              onClick: Fe
            })]
          }), (0, gM.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": Je(`${yo}questBookChapters`),
            "data-pad-initial-area": !0,
            children: be.slice(0, oe()).map(((ee, ie) => {
              const He = ie + 1,
                {
                  kind: ye,
                  short: be
                } = pe(He),
                Me = Te(He, ke),
                Ke = Me ? Je(`${yo}coreAtomicHidden`) : Ro(Je, He);
              return (0, gM.jsx)("li", {
                children: (0, gM.jsx)("button", {
                  type: "button",
                  className: Ob()({
                    Stage: "tier" !== ye,
                    Atomic: "atomic" === ye,
                    Current: He === ke,
                    Selected: He === Xe
                  }),
                  disabled: He > ke,
                  "aria-pressed": He === Xe,
                  "aria-label": Ke,
                  title: Me ? void 0 : Ke,
                  onClick: () => {
                    fe({
                      tier: He,
                      at: ke
                    })
                  },
                  children: Me ? "?" : be
                })
              }, ee.nameKey)
            }))
          }), (0, gM.jsxs)("div", {
            ref: ze,
            className: "Baf2BookBody",
            children: [ub(Re) && Xe === ke && (0, gM.jsx)("p", {
              className: "Baf2BookEmpty",
              children: Je(`${yo}questBookAllDone`)
            }), (0, gM.jsx)(Po, {
              view: Re,
              tier: Xe,
              quests: null !== (Me = null === Ee || void 0 === Ee ? void 0 : Ee[1]) && void 0 !== Me ? Me : null,
              t: Je
            })]
          })]
        })
      })
    }
    const Yo = "buildAFactory2Game:";

    function Vo(ee) {
      let {
        tiers: ie,
        from: He,
        tier: ye,
        shown: be,
        tq: Me
      } = ee;
      const {
        t: Ke
      } = (0, Zb.v)(), Ue = ie.map(((ee, ie) => {
        const Ue = He + ie,
          {
            kind: Fe,
            short: Je
          } = pe(Ue),
          oe = Te(Ue, ye);
        return (0, gM.jsx)("li", {
          children: (0, gM.jsx)("button", {
            type: "button",
            className: Ob()({
              Stage: "tier" !== Fe,
              Silhouette: oe,
              Reached: Ue <= ye,
              Current: Ue === ye,
              Next: Ue === ye + 1,
              Selected: Ue === be
            }),
            disabled: oe,
            "aria-pressed": Ue === be,
            "aria-label": oe ? Ke(`${Yo}coreAtomicHidden`) : void 0,
            title: oe ? void 0 : Ke(`${Yo}${ee.nameKey}`),
            onClick: () => {
              Me(Ue)
            },
            children: oe ? "?" : Je
          })
        }, ee.nameKey)
      }));
      return (0, gM.jsx)(gM.Fragment, {
        children: Ue
      })
    }

    function ao(ee) {
      let {
        id: ie,
        label: He,
        tiers: ye,
        from: be,
        ...Me
      } = ee;
      return (0, gM.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, gM.jsx)("span", {
          id: ie,
          className: "Baf2CoreLadderLabel",
          children: He
        }), (0, gM.jsx)("ol", {
          "aria-labelledby": ie,
          children: (0, gM.jsx)(Vo, {
            ...Me,
            tiers: ye,
            from: be
          })
        })]
      })
    }

    function co(ee) {
      const {
        t: ie
      } = (0, Zb.v)(), He = be.findIndex((ee => void 0 !== ee.stage)), ye = be.findIndex((ee => void 0 !== ee.reactorTier)), Me = He < 0 ? be : be.slice(0, He), Ke = He < 0 ? [] : be.slice(He, ye < 0 ? void 0 : ye), Fe = ye < 0 || !Ue() ? [] : be.slice(ye);
      return (0, gM.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, gM.jsx)(ao, {
          ...ee,
          id: "baf2CoreTiersLabel",
          label: ie(`${Yo}coreTiersLabel`),
          tiers: Me,
          from: 1
        }), Ke.length > 0 && (0, gM.jsx)(ao, {
          ...ee,
          id: "baf2CoreStagesLabel",
          label: ie(`${Yo}coreStagesLabel`),
          tiers: Ke,
          from: He + 1
        }), Fe.length > 0 && (0, gM.jsx)(ao, {
          ...ee,
          id: "baf2CoreAtomicLabel",
          label: ie(`${Yo}coreAtomicLabel`),
          tiers: Fe,
          from: ye + 1
        })]
      })
    }
    const xo = "buildAFactory2Game:";

    function Lo(ee) {
      let {
        item: ie,
        itemNames: He,
        children: ye
      } = ee;
      return (0, gM.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, gM.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, gM.jsx)(Db.c, {
            itemName: ie,
            amount: 0
          })
        }), (0, gM.jsx)(Pb.e, {
          text: He[ie]
        }), ye]
      })
    }

    function Co(ee) {
      const ie = new Map;
      for (const {
          block: ye
        }
        of ee.newDeposits) {
        var He;
        ie.set(ye, (null !== (He = ie.get(ye)) && void 0 !== He ? He : 0) + 1)
      }
      return [...ie]
    }

    function vo(ee) {
      let {
        value: ie,
        label: He,
        more: ye
      } = ee;
      return (0, gM.jsxs)("li", {
        children: [(0, gM.jsx)("strong", {
          children: ie
        }), (0, gM.jsx)("span", {
          children: He
        }), ye > 0 && (0, gM.jsxs)("em", {
          children: ["+", ye]
        })]
      })
    }

    function uo(ee) {
      let {
        items: ie,
        itemNames: He
      } = ee;
      const {
        t: be
      } = (0, Zb.v)(), [Me, Ke] = (0, ye.useState)(null), Ue = null !== Me && ie.includes(Me) ? Me : null;
      return (0, gM.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, gM.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: be(`${xo}coreRewardUnlocks`)
        }), (0, gM.jsx)("ul", {
          children: ie.map((ee => (0, gM.jsx)("li", {
            children: (0, gM.jsx)("button", {
              type: "button",
              className: Ob()("Baf2PanelIcon", {
                Picked: ee === Ue
              }),
              title: (0, eM.f)(be, ee),
              "aria-label": (0, eM.f)(be, ee),
              "aria-pressed": ee === Ue,
              onClick: () => {
                Ke(ee === Ue ? null : ee)
              },
              children: (0, gM.jsx)(Db.c, {
                itemName: ee,
                amount: 0
              })
            })
          }, ee)))
        }), (0, gM.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== Ue && (0, gM.jsxs)(gM.Fragment, {
            children: [(0, gM.jsx)(Pb.e, {
              text: He[Ue]
            }), " \xb7 ", (0, gM.jsx)(Pb.e, {
              text: He[Pe(Ue)]
            })]
          }), null === Ue && be(`${xo}coreRecipeTap`)]
        })]
      })
    }

    function mo(ee) {
      var ie, He;
      let {
        def: ye,
        tier: be,
        itemNames: Me
      } = ee;
      const {
        t: Ke
      } = (0, Zb.v)(), Ue = be > 1 ? Xe(be - 1) : void 0, Fe = Math.round(2 * ye.islandRadius), Je = Ue ? Math.round(2 * Ue.islandRadius) : Fe, oe = be >= 3 ? dy(be) : null;
      return (0, gM.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, gM.jsxs)("ul", {
          className: Ob()("Baf2CoreStats", {
            Four: null !== oe
          }),
          children: [(0, gM.jsx)(vo, {
            value: `${Fe}\xd7${Fe}`,
            label: Ke(`${xo}coreStatIsland`),
            more: Fe - Je
          }), (0, gM.jsx)(vo, {
            value: String(ye.machineAllowance),
            label: Ke(`${xo}coreStatMachines`),
            more: ye.machineAllowance - (null !== (ie = null === Ue || void 0 === Ue ? void 0 : Ue.machineAllowance) && void 0 !== ie ? ie : ye.machineAllowance)
          }), (0, gM.jsx)(vo, {
            value: String(ye.beltAllowance),
            label: Ke(`${xo}coreStatBelts`),
            more: ye.beltAllowance - (null !== (He = null === Ue || void 0 === Ue ? void 0 : Ue.beltAllowance) && void 0 !== He ? He : ye.beltAllowance)
          }), null !== oe && (0, gM.jsx)(vo, {
            value: String(oe),
            label: Ke(`${xo}coreStatStorage`),
            more: oe - (Ue ? dy(be - 1) : oe)
          })]
        }), ye.reward && (0, gM.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, gM.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Ke(`${xo}coreRewardItem`)
          }), (0, gM.jsx)(Lo, {
            item: ye.reward,
            itemNames: Me
          })]
        }), ye.newDeposits.length > 0 && (0, gM.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, gM.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Ke(ye.newDeposits.length > 1 ? `${xo}coreRewardDeposits` : `${xo}coreRewardDeposit`)
          }), Co(ye).map((ee => {
            let [ie, He] = ee;
            return (0, gM.jsx)(Lo, {
              item: ie,
              itemNames: Me,
              children: He > 1 && ` \xd7${He}`
            }, ie)
          }))]
        }), ye.unlocks.length > 0 && (0, gM.jsx)(uo, {
          items: ye.unlocks,
          itemNames: Me
        }), (0, gM.jsx)(So, {
          tier: be
        })]
      })
    }

    function So(ee) {
      let {
        tier: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)(), ye = Tb[ie];
      if (!ye) return null;
      const be = fb(ie, 0, 0).barrierMax !== fb(ie - 1, 0, 0).barrierMax;
      return (0, gM.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, gM.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, gM.jsx)(Db.c, {
            itemName: be ? Fb.Chestplate : Ub,
            amount: 0
          })
        }), He(`${xo}gearPerkLine`, {
          perk: He(`${xo}${ye}`)
        })]
      })
    }

    function no(ee, ie) {
      return null === ee ? ie : ee.value
    }

    function jo(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === ee || He - ee.atMs >= ye ? null : be(ee.value, ie) ? ee.armed ? null : ee : ee.armed ? ee : {
        ...ee,
        armed: !0
      }
    }

    function so(ee, ie) {
      const He = ie.filter((ie => {
        var He;
        return !1 !== (null === (He = ee.get(ie)) || void 0 === He ? void 0 : He.value)
      }));
      for (const [ye, be] of ee) be.value && !ie.includes(ye) && He.push(ye);
      return He
    }

    function Io(ee, ie, He, be) {
      const [Me, Ke] = (0, ye.useState)((() => new Map)), Ue = () => {
        Ke((ie => function(ee, ie, He, ye) {
          var be;
          let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            Ke = null;
          for (const [Ue, Fe] of ee) {
            const be = jo(Fe, ie(Ue), He, ye, Me);
            be !== Fe && (Ke ??= new Map(ee), null === be ? Ke.delete(Ue) : Ke.set(Ue, be))
          }
          return null !== (be = Ke) && void 0 !== be ? be : ee
        }(ie, ee, Date.now(), He, be)))
      };
      (0, ye.useEffect)((() => {
        Ue()
      }), [ie, He]), (0, ye.useEffect)((() => {
        if (0 === Me.size) return;
        const ee = Math.min(...[...Me.values()].map((ee => ee.atMs))),
          ie = setTimeout(Ue, Math.max(0, ee + He - Date.now()) + 1);
        return () => {
          clearTimeout(ie)
        }
      }), [Me, ie, He]);
      return [Me, (ie, He) => {
        Ke((ye => {
          const Me = new Map(ye);
          return Me.set(ie, function(ee, ie, He) {
            return {
              value: ee,
              atMs: He,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(ee, ie)
            }
          }(He, ee(ie), Date.now(), be)), Me
        }))
      }]
    }
    const ho = "buildAFactory2Game:";

    function No(ee) {
      let {
        message: ie,
        itemNames: He
      } = ee;
      const be = LK(),
        {
          t: Me
        } = (0, Zb.v)(),
        [Ke, Ue] = (0, ye.useState)(!1),
        [Fe, Je] = function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PK;
          const [He, ye] = Io((ie => ee.includes(ie)), ee, ie, Object.is);
          return [so(He, ee), ye]
        }(ie.baf2CoreBankPaused),
        oe = new Set(Fe),
        Re = [...ie.baf2CoreBanked];
      for (const ye of oe) Re.some((ee => {
        let [ie] = ee;
        return ie === ye
      })) || Re.push([ye, 0]);
      return 0 === Re.length ? null : (0, gM.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, gM.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": Ke,
          onClick: () => {
            Ue(!Ke)
          },
          children: [(0, gM.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: Me(`${ho}coreBankedLater`)
          }), (0, gM.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Re.map((ee => {
              let [ie, He] = ee;
              const ye = oe.has(ie);
              return (0, gM.jsxs)("span", {
                className: Ob()({
                  Paused: ye
                }),
                title: ye ? Me(`${ho}coreBankPausedTag`) : void 0,
                children: [(0, gM.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, gM.jsx)(Db.c, {
                    itemName: ie,
                    amount: 0
                  })
                }), He, ye && (0, gM.jsx)(wb.e, {
                  name: "pause"
                })]
              }, ie)
            }))
          }), (0, gM.jsx)(wb.e, {
            name: Ke ? "angle-up" : "angle-down"
          })]
        }), Ke && (0, gM.jsxs)(gM.Fragment, {
          children: [(0, gM.jsx)("ul", {
            children: Re.map((ee => {
              let [ie, ye] = ee;
              const Ke = oe.has(ie);
              return (0, gM.jsxs)("li", {
                children: [(0, gM.jsxs)(Lo, {
                  item: ie,
                  itemNames: He,
                  children: [(0, gM.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: ye
                  }), Ke && (0, gM.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: Me(`${ho}coreBankPausedTag`)
                  })]
                }), (0, gM.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, gM.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === ye,
                    onClick: () => {
                      be.send(`baf2corewithdraw ${ye} ${ie}`)
                    },
                    children: Me(`${ho}coreTake`)
                  }), (0, gM.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      be.send(`${Ee} ${ie}`), Je(ie, !Ke)
                    },
                    children: Me(Ke ? `${ho}coreBankResume` : `${ho}coreBankStop`)
                  })]
                })]
              }, ie)
            }))
          }), (0, gM.jsx)("p", {
            className: "Baf2CoreHint",
            children: Me(`${ho}coreBankNote`)
          })]
        })]
      })
    }
    const Go = "buildAFactory2Game:";

    function ro(ee) {
      const ie = Math.max(0, Math.floor(ee));
      return `${Math.floor(ie/60)}:${String(ie%60).padStart(2,"0")}`
    }

    function Qo(ee) {
      let {
        item: ie
      } = ee;
      return (0, gM.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, gM.jsx)(Db.c, {
          itemName: ie,
          amount: 0
        })
      })
    }

    function eR() {
      return (0, gM.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, gM.jsx)(wb.e, {
          name: "bolt"
        })
      })
    }

    function iR(ee) {
      let {
        charge: ie,
        hint: He,
        itemNames: ye
      } = ee;
      const be = LK(),
        {
          t: Me
        } = (0, Zb.v)(),
        [Ke, Ue, Fe, Je, oe, Re, ke] = ie,
        [qe, fe] = function(ee) {
          var ie;
          let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PK,
            ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [be, Me] = Io((() => ee), ee, He, ye);
          return [no(null !== (ie = be.get("")) && void 0 !== ie ? ie : null, ee), ee => {
            Me("", ee)
          }]
        }(ke),
        Te = qe === ke ? Re : !qe,
        pe = Je >= oe,
        Xe = Ke.find((ee => {
          let [, ie, He] = ee;
          return He < .9 * ie
        }));
      let ze = `${Go}coreChargeWaiting`,
        Be = {};
      return pe ? ze = `${Go}coreChargeDone` : qe ? ze = `${Go}coreChargeStopped` : Te && He ? (ze = `${Go}${He[0]}`, Be = {
        item: (0, eM.f)(Me, He[1])
      }) : Te && Xe ? (ze = `${Go}coreChargeShort`, Be = {
        item: (0, eM.f)(Me, Xe[0])
      }) : Te && Ue > 0 && !Fe ? ze = `${Go}coreChargePower` : Te && (ze = `${Go}coreChargeRunning`), (0, gM.jsxs)("div", {
        className: Ob()("Baf2CoreCharge", {
          Waiting: !Te && !pe,
          Done: pe
        }),
        children: [(0, gM.jsxs)("h4", {
          children: [Me(`${Go}coreChargeTitle`), (0, gM.jsx)("span", {
            children: Me(`${Go}coreChargeProgress`, {
              done: ro(Je),
              need: ro(oe)
            })
          })]
        }), (0, gM.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, gM.jsx)("div", {
            style: {
              width: 100 * Math.min(Je, oe) / oe + "%"
            }
          })
        }), (0, gM.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Ke.map((ee => {
            var ie;
            let [He, be, Ke] = ee;
            const Ue = Ke >= .9 * be;
            return (0, gM.jsxs)("li", {
              className: Ob()({
                Done: Ue,
                Short: Te && !Ue
              }),
              children: [(0, gM.jsx)(Qo, {
                item: He
              }), (0, gM.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, gM.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, gM.jsx)(Pb.e, {
                    text: null !== (ie = ye[He]) && void 0 !== ie ? ie : He
                  }), (0, gM.jsx)("span", {
                    children: Me(`${Go}coreChargeItem`, {
                      now: String(Ke),
                      need: String(be)
                    })
                  })]
                }), (0, gM.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, gM.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*Ke/be)}%`
                    }
                  })
                })]
              })]
            }, He)
          })), Ue > 0 && (0, gM.jsxs)("li", {
            className: Ob()("Baf2CoreChargePower", {
              Short: Te && !Fe
            }),
            children: [(0, gM.jsx)(eR, {}), (0, gM.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, gM.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, gM.jsx)("span", {
                  children: Me(`${Go}coreChargePowerRow`, {
                    power: Ge(Ue)
                  })
                })
              })
            })]
          })]
        }), (0, gM.jsx)("p", {
          className: "Baf2CoreHint",
          children: Me(ze, Be)
        }), !pe && (Te || qe) && (0, gM.jsx)("button", {
          type: "button",
          className: Ob()("Baf2CoreChargeToggle", {
            Stopped: qe
          }),
          onClick: () => {
            be.send(Oe), fe(!qe)
          },
          children: Me(qe ? `${Go}coreChargeRestart` : `${Go}coreChargeStop`)
        })]
      })
    }

    function HR(ee) {
      let {
        charge: ie,
        reached: He,
        itemNames: ye
      } = ee;
      const {
        t: be
      } = (0, Zb.v)();
      return (0, gM.jsxs)("div", {
        className: Ob()("Baf2CoreCharge", {
          Done: He
        }),
        children: [(0, gM.jsxs)("h4", {
          children: [be(`${Go}coreChargeTitle`), (0, gM.jsx)("span", {
            children: be(`${Go}coreChargeSpecTime`, {
              time: ro(ie.seconds)
            })
          })]
        }), (0, gM.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [ie.items.map((ee => {
            var ie;
            let {
              item: Me,
              amount: Ke
            } = ee;
            return (0, gM.jsxs)("li", {
              className: Ob()({
                Done: He
              }),
              children: [(0, gM.jsx)(Qo, {
                item: Me
              }), (0, gM.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, gM.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, gM.jsx)(Pb.e, {
                    text: null !== (ie = ye[Me]) && void 0 !== ie ? ie : Me
                  }), (0, gM.jsx)("span", {
                    children: be(`${Go}coreChargeSpecItem`, {
                      need: String(Ke)
                    })
                  })]
                })
              })]
            }, Me)
          })), ie.powerPerS > 0 && (0, gM.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, gM.jsx)(eR, {}), (0, gM.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, gM.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, gM.jsx)("span", {
                  children: be(`${Go}coreChargePowerRow`, {
                    power: Ge(ie.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const yR = "buildAFactory2Game:";

    function bR(ee) {
      let {
        def: ie,
        reached: He,
        banked: ye,
        itemNames: be
      } = ee;
      const {
        t: Me
      } = (0, Zb.v)();
      return (0, gM.jsx)("ul", {
        className: "Baf2CoreCost",
        children: ie.cost.map((ee => {
          let {
            item: ie,
            amount: Ke
          } = ee;
          const Ue = He ? 0 : ye(ie);
          return (0, gM.jsx)("li", {
            children: (0, gM.jsx)(Lo, {
              item: ie,
              itemNames: be,
              children: (0, gM.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: Ue > 0 ? Me(`${yR}coreBankedFor`, {
                  amount: String(Ue),
                  total: String(Ke)
                }) : `\xd7${Ke}`
              })
            })
          }, ie)
        }))
      })
    }

    function MR(ee, ie) {
      if (ie >= oe()) return ee(`${yR}coreMaxTier`);
      const He = Je[ie + 1];
      return He && !He.startsWith("upgradeCore") ? ee(`${yR}coreGateQuest`, {
        quest: ee(`${yR}quest_${He}`)
      }) : ee(`${yR}coreGateClosed`)
    }

    function KR() {
      const {
        t: ee
      } = (0, Zb.v)(), ie = LK(), He = (0, ye.useRef)(null), be = (0, ye.useRef)(Date.now());
      return SJ(!0, He), (0, gM.jsx)("div", {
        ref: He,
        className: "Baf2CoreGrow",
        children: (0, gM.jsx)(zK.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - be.current >= 600 && ie.send(Be)
          },
          children: ee(`${yR}coreGrow`)
        })
      })
    }

    function UR(ee) {
      let {
        message: ie,
        itemNames: He,
        next: ye
      } = ee;
      const be = LK(),
        {
          t: Me
        } = (0, Zb.v)(),
        Ke = ie.baf2CoreTier,
        Ue = ie.baf2CoreReady,
        Fe = ie.baf2CoreNeeds.filter((ee => {
          let [, ie, He, ye] = ee;
          return ye > 0 && ie < He
        })),
        Je = ie.baf2CoreNeeds.every((ee => {
          let [, ie, He] = ee;
          return ie >= He
        })),
        oe = ie.baf2CoreKeep;
      return (0, gM.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, gM.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [Ue && (0, gM.jsx)(KR, {}), (0, gM.jsx)("h3", {
            children: Me(`${yR}coreBring`)
          }), (0, gM.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: ie.baf2CoreNeeds.map((ee => {
              let [ie, ye, Ke, Ue] = ee;
              return (0, gM.jsxs)("li", {
                className: Ob()({
                  Done: ye >= Ke
                }),
                children: [(0, gM.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, gM.jsx)(Db.c, {
                    itemName: ie,
                    amount: 0
                  })
                }), (0, gM.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, gM.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, gM.jsx)(Pb.e, {
                      text: He[ie]
                    }), (0, gM.jsxs)("span", {
                      children: [ye, "/", Ke]
                    })]
                  }), (0, gM.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, gM.jsx)("div", {
                      style: {
                        width: 100 * ye / Ke + "%"
                      }
                    }), Ue > 0 && (0, gM.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * Ue / Ke + "%"
                      }
                    })]
                  })]
                }), Ue > 0 && ye < Ke && (0, gM.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    be.send(`${ge} ${ie}`)
                  },
                  children: Me(`${yR}coreDeposit`, {
                    amount: String(Ue)
                  })
                })]
              }, ie)
            }))
          }), ie.baf2CoreCharge && (0, gM.jsx)(iR, {
            charge: ie.baf2CoreCharge,
            hint: ie.baf2CoreChargeHint,
            itemNames: He
          }), !Ue && Fe.length > 1 && (0, gM.jsx)(zK.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              be.send(Be)
            },
            children: Me(`${yR}coreHandOver`)
          }), !Ue && void 0 !== oe && (0, gM.jsx)("p", {
            className: "Baf2CoreHint",
            children: Me(`${yR}coreKeepRest`, {
              item: (0, eM.f)(Me, oe)
            })
          }), !Ue && !Je && 0 === Fe.length && void 0 === oe && (0, gM.jsx)("p", {
            className: "Baf2CoreHint",
            children: Me(`${yR}coreNothingHeld`)
          }), (0, gM.jsx)(No, {
            message: ie,
            itemNames: He
          })]
        }), (0, gM.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, gM.jsx)("h3", {
            children: Me(`${yR}coreRewards`)
          }), (0, gM.jsx)(mo, {
            def: ye,
            tier: Ke + 1,
            itemNames: He
          })]
        })]
      })
    }

    function FR(ee) {
      let {
        message: ie,
        itemNames: He,
        shown: ye
      } = ee;
      const {
        t: be
      } = (0, Zb.v)(), Me = ie.baf2CoreTier, Ke = Xe(ye), Ue = ye <= Me, Fe = new Map(ie.baf2CoreBanked), Je = !ze(Me, de(ie)) && ye === Me;
      return (0, gM.jsxs)("div", {
        className: Ob()("Baf2CoreBody", {
          Locked: !Ue
        }),
        children: [(0, gM.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, gM.jsx)("h3", {
            children: be(Ue ? `${yR}coreItTook` : `${yR}coreItNeeds`)
          }), 0 === Ke.cost.length && (0, gM.jsx)("p", {
            className: "Baf2CoreHint",
            children: be(`${yR}coreTierStart`)
          }), Ke.cost.length > 0 && (0, gM.jsx)(bR, {
            def: Ke,
            reached: Ue,
            banked: ee => {
              var ie;
              return function(ee, ie, He, ye) {
                let be = ee;
                for (let Ke = ie + 2; Ke <= He; Ke++) {
                  var Me;
                  const ee = Xe(Ke).cost.find((ee => ee.item === ye)),
                    ie = Math.min(be, null !== (Me = null === ee || void 0 === ee ? void 0 : ee.amount) && void 0 !== Me ? Me : 0);
                  if (Ke === He) return ie;
                  be -= ie
                }
                return 0
              }(null !== (ie = Fe.get(ee)) && void 0 !== ie ? ie : 0, Me, ye, ee)
            },
            itemNames: He
          }), Ke.charge && (0, gM.jsx)(HR, {
            charge: Ke.charge,
            reached: Ue,
            itemNames: He
          }), Je && (0, gM.jsxs)(gM.Fragment, {
            children: [(0, gM.jsx)("p", {
              className: "Baf2CoreHint",
              children: MR(be, Me)
            }), (0, gM.jsx)(No, {
              message: ie,
              itemNames: He
            })]
          })]
        }), (0, gM.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, gM.jsx)("h3", {
            children: be(Ue ? `${yR}coreGave` : `${yR}coreLockedRewards`)
          }), (0, gM.jsx)(mo, {
            def: Ke,
            tier: ye,
            itemNames: He
          })]
        })]
      })
    }

    function JR(ee, ie) {
      const {
        key: He,
        params: ye
      } = qe(ie - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return ee(`${yR}${He}`, ye)
    }
    const oR = "buildAFactory2Game:",
      RR = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      kR = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function qR(ee) {
      let {
        view: ie,
        close: He,
        askIslands: be
      } = ee;
      const {
        t: Me
      } = (0, Zb.v)(), [Ke, Ue] = (0, ye.useState)(!1);
      (0, ye.useEffect)((() => {
        if (!Ke) return;
        const ee = window.setTimeout((() => {
          Ue(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(ee)
        }
      }), [Ke]);
      const {
        message: Fe,
        itemNames: Je
      } = ie, oe = Fe.baf2CoreTier, Re = Xe(oe), ke = ze(oe, de(Fe)), [Te, pe] = Fe.baf2CoreMachines, [Be, Ee] = Fe.baf2CoreBelts, ge = Fe.baf2CoreStorage, Oe = Fe.baf2CoreReady, [We, te] = (0, ye.useState)(null), Ze = (null === We || void 0 === We ? void 0 : We.at) === oe && We.ready === Oe ? We.tier : ke ? oe + 1 : oe;
      let we = "coreTierLocked";
      Ze <= oe ? we = "coreTierReached" : Ze === oe + 1 && (we = "coreTierNext");
      const De = Me(`${oR}${Xe(Ze).nameKey}`),
        Pe = Ze === oe + 1 ? ke : null,
        Ae = qe(Ze, {
          tier: we,
          stage: RR[we],
          atomic: kR[we]
        }),
        Ye = Me(`${oR}${Ae.key}`, {
          ...Ae.params,
          name: De
        }),
        Ve = qe(oe, fe),
        ae = Me(`${oR}${Ve.key}`, {
          ...Ve.params,
          name: Me(`${oR}${Re.nameKey}`)
        });
      return (0, gM.jsx)(XK.e, {
        close: He,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, gM.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, gM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gM.jsxs)("div", {
              children: [(0, gM.jsx)("h2", {
                id: "baf2CoreTitle",
                children: Me(`${oR}coreTitle`)
              }), void 0 !== Fe.baf2CoreIslandName && (0, gM.jsx)("p", {
                className: "Baf2CoreIsland",
                children: Fe.baf2CoreIslandName
              }), (0, gM.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, gM.jsx)("span", {
                  children: ae
                }), (0, gM.jsx)("span", {
                  className: Ob()({
                    Full: Te >= pe
                  }),
                  children: Me(`${oR}coreMachineCount`, {
                    amount: String(Te),
                    total: String(pe)
                  })
                }), (0, gM.jsx)("span", {
                  className: Ob()({
                    Full: Be >= Ee
                  }),
                  children: Me(`${oR}coreBeltCount`, {
                    amount: String(Be),
                    total: String(Ee)
                  })
                }), void 0 !== ge && (0, gM.jsx)("span", {
                  className: Ob()({
                    Full: ge[0] >= ge[1]
                  }),
                  children: Me(`${oR}coreStorageCount`, {
                    amount: String(ge[0]),
                    total: String(ge[1])
                  })
                })]
              })]
            }), (0, gM.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [Fe.baf2CoreIslands && (0, gM.jsx)(zK.c, {
                className: "Baf2CoreIslandsButton",
                disabled: Ke,
                onClick: () => {
                  Ue(!0), be()
                },
                children: Me(`${oR}islandsOpenButton`)
              }), (0, gM.jsx)(zK.i, {
                onClick: He
              })]
            })]
          }), (0, gM.jsx)(co, {
            tier: oe,
            shown: Ze,
            tq: ee => {
              te({
                tier: ee,
                at: oe,
                ready: Oe
              })
            }
          }), (0, gM.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Ye, Ze > oe + 1 && (0, gM.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: JR(Me, Ze)
            })]
          }), 6 === Ze && Ze > oe && (0, gM.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Me(`${oR}coreStagesNote`)
          }), 11 === Ze && Ze > oe && (0, gM.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Me(`${oR}coreAtomicNote`)
          }), Pe && (0, gM.jsx)(UR, {
            message: Fe,
            itemNames: Je,
            next: Pe
          }), !Pe && (0, gM.jsx)(FR, {
            message: Fe,
            itemNames: Je,
            shown: Ze
          })]
        })
      })
    }
    const fR = {
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
    const TR = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: bM,
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

    function pR(ee) {
      return ee.baf2DropCometOreOnly ? "dropCometOre" : ee.baf2DropCometIsotope ? "seed" === ee.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function XR(ee) {
      let {
        message: ie,
        quests: He,
        close: be,
        leave: Me
      } = ee;
      const Ke = LK(),
        {
          t: Ue
        } = (0, Zb.v)(),
        Fe = (0, QJ.j)(cb, He.get()),
        Je = function(ee) {
          var ie;
          if (!Ve(ee.tutorial)) return null;
          const He = ee.rows.find((ee => ee.current)),
            ye = He ? fR[He.key] : void 0;
          return null !== (ie = null !== ye && void 0 !== ye ? ye : ee.side ? fR[ee.side.row.key] : void 0) && void 0 !== ie ? ie : null
        }(Fe),
        oe = null === Fe.tier || UM(Fe.tier),
        Re = oe ? TR : TR.filter((ee => {
          let {
            item: ie
          } = ee;
          return ie !== bM
        })),
        [ke, qe] = (0, ye.useState)(null),
        fe = null !== ke && void 0 !== ke ? ke : !ie.baf2DropFoundSalvage && oe,
        Te = ie.baf2DropRuinDistance,
        pe = ie.baf2DropComet,
        Xe = ie.baf2DropOldWorks,
        ze = ie.baf2DropGrove,
        Be = function(ee) {
          return 2 + Number(void 0 !== ee.baf2DropComet) + Number(!!ee.baf2DropOwedComet || void 0 !== ee.baf2DropOwedWaitMinutes) + Number(void 0 !== ee.baf2DropDigDistance) + Number(void 0 !== ee.baf2DropOldWorks) + Number(void 0 !== ee.baf2DropGrove)
        }(ie),
        Ee = ee => {
          Ke.send(function(ee) {
            return `baf2drop ${ee}`
          }(ee)), Me()
        };
      let ge = Ue("buildAFactory2Game:dropRuinNone");
      if (null !== Te) {
        let ee = ie.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        ie.baf2DropRuinOldWorks && (ee = "dropRuinOldWorks");
        const He = void 0 === ie.baf2DropRuinCluster ? Ue("buildAFactory2Game:dropRuinOpen") : Ue("buildAFactory2Game:dropRuinCluster", {
          count: String(ie.baf2DropRuinCluster)
        });
        ge = `${Ue(`buildAFactory2Game:${ee}`,{distance:String(Te)})} ${He}`
      }
      let Oe = Ue("buildAFactory2Game:dropBelowDescription");
      void 0 !== ie.baf2DropBelowLook && (Oe = Ue("buildAFactory2Game:dropBelowLook", {
        look: Ue(ie.baf2DropBelowLook)
      }));
      const de = "buildAFactory2Game:wildsRegion_survivorGrove" === ie.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        We = XM(Ue, 60 * function(ee) {
          const [ie, He] = (0, ye.useState)((() => Date.now())), [be, Me] = (0, ye.useState)(ie);
          return (0, ye.useEffect)((() => {
            const ee = Date.now();
            He(ee), Me(ee)
          }), [ee]), (0, ye.useEffect)((() => {
            const ee = window.setInterval((() => {
              Me(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(ee)
            }
          }), []), Math.max(1, ee.baf2DropRenewMinutes - Math.floor((be - ie) / 6e4))
        }(ie)),
        te = function(ee, ie, He) {
          return "ruin" === ee && !He || "owed" === ee && !ie.baf2DropOwedComet ? null : ee
        }(Je, ie, null !== Te),
        Ze = function(ee) {
          for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
          return Ob()("Baf2DropTile", ...He, {
            Wanted: te === ee
          })
        };
      return (0, gM.jsx)(XK.e, {
        close: be,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, gM.jsxs)("section", {
          className: Ob()("Baf2Panel Baf2DropMap", {
            Many: Be >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, gM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gM.jsxs)("div", {
              children: [(0, gM.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: Ue("buildAFactory2Game:dropMapTitle")
              }), (0, gM.jsx)("p", {
                children: Ue("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, gM.jsx)(zK.i, {
              onClick: be
            })]
          }), (0, gM.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== pe && (0, gM.jsxs)(zK.u, {
              className: Ze("comet", "Baf2DropComet"),
              onClick: () => {
                Ee("comet")
              },
              children: [(0, gM.jsx)("strong", {
                children: Ue("buildAFactory2Game:dropComet")
              }), (0, gM.jsx)("span", {
                children: Ue(`buildAFactory2Game:${pR(ie)}`, {
                  distance: String(pe)
                })
              })]
            }), ie.baf2DropOwedComet && (0, gM.jsxs)(zK.u, {
              className: Ze("owed", "Baf2DropComet"),
              onClick: () => {
                Ee("owed")
              },
              children: [(0, gM.jsx)("strong", {
                children: Ue("buildAFactory2Game:dropOwedComet")
              }), (0, gM.jsx)("span", {
                children: ie.baf2DropOwedIsotope ? Ue("buildAFactory2Game:dropOwedIsotopeDescription") : Ue("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== ie.baf2DropOwedWaitMinutes && (0, gM.jsxs)(zK.u, {
              className: Ze("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, gM.jsx)("strong", {
                children: Ue("buildAFactory2Game:dropOwedComet")
              }), (0, gM.jsx)("span", {
                children: Ue("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(ie.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, gM.jsxs)(zK.c, {
              className: Ze("below"),
              onClick: () => {
                Ee("below")
              },
              children: [(0, gM.jsx)("strong", {
                children: Ue("buildAFactory2Game:dropBelow")
              }), (0, gM.jsx)("span", {
                children: Oe
              })]
            }), void 0 !== ie.baf2DropDigDistance && (0, gM.jsxs)(zK.p, {
              className: Ze("dig"),
              onClick: () => {
                Ee("dig")
              },
              children: [(0, gM.jsx)("strong", {
                children: Ue("buildAFactory2Game:dropDig")
              }), (0, gM.jsx)("span", {
                children: Ue("buildAFactory2Game:dropDigDescription", {
                  distance: String(ie.baf2DropDigDistance),
                  y: pM(ie.baf2DropDigY)
                })
              })]
            }), void 0 !== ze && (0, gM.jsxs)(zK.p, {
              className: Ze("grove", "Baf2DropGrove"),
              onClick: () => {
                Ee("grove")
              },
              children: [(0, gM.jsx)("strong", {
                children: Ue("buildAFactory2Game:dropGrove")
              }), (0, gM.jsx)("span", {
                children: Ue(`buildAFactory2Game:${de}`, {
                  distance: String(ze)
                })
              })]
            }), (0, gM.jsxs)(zK.m, {
              className: Ze("ruin"),
              disabled: null === Te,
              onClick: () => {
                Ee("ruin")
              },
              children: [(0, gM.jsx)("strong", {
                children: Ue("buildAFactory2Game:dropRuin")
              }), (0, gM.jsx)("span", {
                children: ge
              })]
            }), void 0 !== Xe && (0, gM.jsxs)(zK.G, {
              className: Ze("works"),
              onClick: () => {
                Ee("works")
              },
              children: [(0, gM.jsx)("strong", {
                children: Ue("buildAFactory2Game:dropOldWorks")
              }), (0, gM.jsx)("span", {
                children: Ue("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(Xe)
                })
              })]
            })]
          }), (0, gM.jsx)("p", {
            className: "Baf2DropRenew",
            children: Ue("buildAFactory2Game:dropRenew", {
              time: We
            })
          }), (0, gM.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: fe,
            onToggle: ee => {
              ee.currentTarget.open !== fe && qe(ee.currentTarget.open)
            },
            children: [(0, gM.jsx)("summary", {
              children: Ue("buildAFactory2Game:dropSalvageWhat")
            }), (0, gM.jsx)("p", {
              children: Ue("buildAFactory2Game:dropSalvageIntro")
            }), (0, gM.jsx)("ul", {
              children: Re.map((ee => {
                let {
                  item: ie,
                  nameKey: He,
                  useKey: ye,
                  params: be
                } = ee;
                return (0, gM.jsxs)("li", {
                  children: [(0, gM.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, gM.jsx)(Db.c, {
                      itemName: ie,
                      amount: 0
                    })
                  }), (0, gM.jsxs)("span", {
                    children: [(0, gM.jsx)("strong", {
                      children: Ue(He)
                    }), ": ", Ue(ye, be)]
                  })]
                }, ie)
              }))
            })]
          })]
        })
      })
    }
    const zR = "buildAFactory2Game:";

    function BR(ee, ie) {
      return ee.sendIslandEdit(`baf2coopleave ${ie.baf2IslandId}`)
    }

    function ER(ee) {
      let {
        card: ie,
        canRename: He,
        done: be,
        t: Me
      } = ee;
      const Ke = LK(),
        [Ue, Fe] = (0, ye.useState)(ie.baf2IslandName),
        Je = XJ(Ue),
        oe = "" === Je || zJ(Je),
        Re = () => {
          !oe && He && (Je !== ie.baf2IslandName ? be(Ke.sendIslandEdit(`baf2islandrename ${ie.baf2IslandId} ${Je}`)) : be(null))
        },
        ke = () => {
          be(null)
        };
      return (0, gM.jsxs)("div", {
        className: "Baf2IslandForm",
        ...mJ(ke),
        children: [(0, gM.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [Me(`${zR}islandsRenameLabel`), (0, gM.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Ue,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: lJ,
            onChange: ee => {
              Fe(ee.target.value)
            },
            ...uJ(Re, ke)
          })]
        }), "" === Je && (0, gM.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Me(`${zR}islandsRenameEmpty`)
        }), zJ(Je) && (0, gM.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Me(`${zR}islandsNameReserved`)
        }), (0, gM.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, gM.jsx)(zK.p, {
            disabled: oe || !He,
            onClick: Re,
            children: Me(`${zR}islandsRenameSave`)
          }), (0, gM.jsx)(zK.c, {
            onClick: ke,
            children: Me(`${zR}islandsCancel`)
          })]
        })]
      })
    }

    function gR(ee) {
      let {
        card: ie,
        canDelete: He,
        done: be,
        t: Me
      } = ee;
      const Ke = LK(),
        [Ue, Fe] = (0, ye.useState)(""),
        Je = function(ee, ie) {
          return XJ(ee).toLowerCase() === XJ(ie).toLowerCase()
        }(Ue, ie.baf2IslandName),
        oe = () => {
          Je && He && be(Ke.sendIslandEdit(`baf2islanddelete ${ie.baf2IslandId}`))
        },
        Re = () => {
          be(null)
        },
        ke = PJ("name"),
        [qe, fe = ""] = Me(`${zR}islandsDeleteConfirm`, {
          name: ke
        }).split(ke);
      return (0, gM.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...mJ(Re),
        children: [(0, gM.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, gM.jsxs)("span", {
            children: [qe, (0, gM.jsx)("strong", {
              children: ie.baf2IslandName
            }), fe]
          }), (0, gM.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: Ue,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: lJ,
            onChange: ee => {
              Fe(ee.target.value)
            },
            ...uJ(oe, Re)
          })]
        }), xJ(ie) && (0, gM.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Me(`${zR}islandsDeleteLeftBack`)
        }), (0, gM.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, gM.jsx)(zK.G, {
            disabled: !Je || !He,
            onClick: oe,
            children: Me(`${zR}islandsDeleteForGood`)
          }), (0, gM.jsx)(zK.c, {
            onClick: Re,
            children: Me(`${zR}islandsCancel`)
          })]
        })]
      })
    }

    function OR(ee) {
      let {
        members: ie,
        t: He
      } = ee;
      const ye = ie.length;
      return (0, gM.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, gM.jsxs)("span", {
          children: [1 === ye ? He(`${zR}islandsPlayersOne`) : He(`${zR}islandsPlayers`, {
            count: String(ye)
          }), " "]
        }), ie.map(((ee, ie) => (0, gM.jsxs)("span", {
          className: Ob()("Baf2IslandMember", {
            Here: ee.baf2MemberHere
          }),
          title: ee.baf2MemberHere ? He(`${zR}islandsPlayerHere`) : void 0,
          children: [ee.baf2MemberName, ie < ye - 1 ? ", " : ""]
        }, ee.baf2MemberKey)))]
      })
    }

    function dR(ee) {
      let {
        card: ie,
        answered: He,
        nowMs: be,
        t: Me
      } = ee;
      const Ke = LK(),
        [Ue, Fe] = (0, ye.useState)(new Map),
        Je = xJ(ie);
      if (!Je) return null;
      return (0, gM.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, gM.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Me(`${zR}islandsLeftTitle`)
        }), (0, gM.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Je.left.map((ee => {
            const ye = ee.baf2LeftKey,
              oe = CJ(Ue.get(ye), He, be),
              Re = function(ee) {
                return 1 === ee ? [`${qJ}islandsLeftItemsOne`] : [`${qJ}islandsLeftItems`, {
                  count: String(ee)
                }]
              }(ee.baf2LeftItems);
            return (0, gM.jsx)("li", {
              className: Ob()("Baf2IslandPerson", {
                Pending: oe
              }),
              children: (0, gM.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, gM.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: ee.baf2LeftName
                }), (0, gM.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Me(Re[0], Re[1])
                }), Je.claim && (0, gM.jsx)(zK.p, {
                  className: "Baf2IslandPersonButton",
                  disabled: oe,
                  onClick: () => {
                    (ee => {
                      const He = Ke.sendIslandEdit(`baf2coopclaim ${ie.baf2IslandId} ${ee}`);
                      Fe((ie => new Map(ie).set(ee, {
                        atMs: Date.now(),
                        answer: He
                      })))
                    })(ye)
                  },
                  children: Me(`${zR}islandsClaim`)
                })]
              })
            }, ye)
          }))
        }), Je.goThere && (0, gM.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Me(`${zR}islandsClaimGoThere`)
        })]
      })
    }

    function WR(ee) {
      let {
        card: ie,
        view: He,
        blocked: be,
        maxIslands: Me,
        answered: Ke,
        nowMs: Ue,
        done: Fe,
        openSocial: Je,
        t: oe
      } = ee;
      const Re = LK(),
        [ke, qe] = (0, ye.useState)(new Map),
        [fe, Te] = (0, ye.useState)(new Map),
        [pe, Xe] = (0, ye.useState)(null),
        ze = (0, ye.useRef)(null);
      sJ(ze);
      const Be = ie.baf2IslandId,
        Ee = ie.baf2IslandCoop,
        ge = null !== Ee && void 0 !== Ee && Ee.baf2CoopMembers.some((ee => ee.baf2MemberKey === pe)) ? pe : null,
        Oe = function(ee, ie) {
          const He = ee.baf2IslandCoop;
          return He && LJ(He) || null !== ie ? void 0 : ee.baf2IslandInvitable
        }(ie, be),
        de = function(ee, ie) {
          const He = ee.baf2IslandCoop;
          return He && LJ(He) ? {
            key: `${qJ}islandsCoopFull`,
            params: {
              max: String(He.baf2CoopMax)
            }
          } : void 0 !== ee.baf2IslandInvitable && null === ie || He && !He.baf2CoopManageHere ? null : "degraded" === ie || "stuck" === ie ? {
            key: `${qJ}islandsInviteNotLoaded`
          } : null === ie || function(ee) {
            return "notHome" === ee || "wilds" === ee || "visiting" === ee
          }(ie) || OJ(ie) ? {
            key: `${qJ}islandsInviteGoThere`
          } : {
            key: `${qJ}islandsInviteBusy`
          }
        }(ie, be),
        We = () => {
          var ee;
          Xe(null), null === (ee = ze.current) || void 0 === ee || ee.focus()
        };
      return (0, gM.jsxs)("div", {
        ref: ze,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...mJ(null === ge ? Fe : We),
        children: [Ee && (0, gM.jsxs)(gM.Fragment, {
          children: [(0, gM.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: oe(`${zR}islandsPlayersTitle`, {
              count: String(Ee.baf2CoopMembers.length),
              max: String(Ee.baf2CoopMax)
            })
          }), (0, gM.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: Ee.baf2CoopMembers.map(((ee, ie) => {
              const ye = ee.baf2MemberKey,
                be = CJ(ke.get(ye), Ke, Ue);
              return (0, gM.jsxs)("li", {
                className: Ob()("Baf2IslandPerson", {
                  Pending: be
                }),
                children: [(0, gM.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, gM.jsx)("span", {
                    className: Ob()("Baf2IslandPersonName", {
                      Here: ee.baf2MemberHere
                    }),
                    children: ee.baf2MemberName
                  }), ee.baf2MemberHere && (0, gM.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: oe(`${zR}islandsPlayerHere`)
                  }), 0 === ie && (0, gM.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: oe(`${zR}islandsPlayerOwner`)
                  }), He.remove && ie > 0 && !be && ge !== ye && (0, gM.jsx)(zK.I, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var ee;
                      Xe(ye), null === (ee = ze.current) || void 0 === ee || ee.focus()
                    },
                    children: oe(`${zR}islandsRemove`)
                  })]
                }), ge === ye && (0, gM.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, gM.jsx)("p", {
                    children: AJ(oe, `${zR}islandsRemoveConfirm`, {
                      player: ee.baf2MemberName
                    })
                  }), (0, gM.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, gM.jsx)(zK.G, {
                      onClick: () => {
                        (ee => {
                          const ie = Re.sendIslandEdit(`baf2coopremove ${Be} ${ee.baf2MemberKey}`);
                          qe((He => new Map(He).set(ee.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: ie
                          }))), We()
                        })(ee)
                      },
                      children: oe(`${zR}islandsRemoveYes`)
                    }), (0, gM.jsx)(zK.c, {
                      onClick: We,
                      children: oe(`${zR}islandsCancel`)
                    })]
                  })]
                })]
              }, ye)
            }))
          })]
        }), (void 0 !== Oe || null !== de) && (0, gM.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: oe(`${zR}islandsInviteTitle`)
        }), !Ee && (void 0 !== Oe || null !== de) && (0, gM.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: oe(`${zR}islandsInviteShareNote`)
        }), 0 === (null === Oe || void 0 === Oe ? void 0 : Oe.length) && (0, gM.jsx)(tR, {
          openSocial: Je,
          t: oe
        }), void 0 !== Oe && Oe.length > 0 && (0, gM.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Oe.map((ee => {
            const ie = !0 === ee.baf2InvitableSent || CJ(fe.get(ee.baf2InvitableId), Ke, Ue);
            return (0, gM.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, gM.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, gM.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: ee.baf2InvitableName
                }), ee.baf2InvitableFull && !ie && (0, gM.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: oe(`${zR}islandsInviteTheirFull`, {
                    max: String(Me)
                  })
                }), (ie || !ee.baf2InvitableFull) && (0, gM.jsx)(zK.p, {
                  className: "Baf2IslandPersonButton",
                  disabled: ie,
                  onClick: () => {
                    (ee => {
                      const ie = Re.sendIslandEdit(`baf2coopinvite ${Be} ${ee}`);
                      Te((He => new Map(He).set(ee, {
                        atMs: Date.now(),
                        answer: ie
                      })))
                    })(ee.baf2InvitableId)
                  },
                  children: oe(ie ? `${zR}islandsInvited` : `${zR}islandsInvite`)
                })]
              })
            }, ee.baf2InvitableId)
          }))
        }), de && (0, gM.jsx)(NJ, {
          note: de,
          t: oe
        }), (0, gM.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, gM.jsx)(zK.c, {
            onClick: Fe,
            children: oe(`${zR}islandsDone`)
          })
        })]
      })
    }

    function tR(ee) {
      let {
        openSocial: ie,
        t: He
      } = ee;
      return (0, gM.jsxs)(gM.Fragment, {
        children: [(0, gM.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: He(ie ? `${zR}islandsInviteNobody` : `${zR}islandsInviteNobodyGuest`)
        }), ie && (0, gM.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, gM.jsx)(zK.c, {
            onClick: ie,
            children: He("socialBar:social")
          })
        })]
      })
    }

    function ZR(ee) {
      let {
        className: ie,
        text: He,
        ConfirmButton: be,
        confirmLabel: Me,
        canConfirm: Ke,
        send: Ue,
        done: Fe,
        t: Je
      } = ee;
      const oe = (0, ye.useRef)(null);
      sJ(oe);
      const Re = () => {
        Fe(null)
      };
      return (0, gM.jsxs)("div", {
        ref: oe,
        tabIndex: -1,
        className: Ob()("Baf2IslandForm", ie),
        ...mJ(Re),
        children: [(0, gM.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: He
        }), (0, gM.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, gM.jsx)(be, {
            disabled: !Ke,
            onClick: () => {
              Ke && Fe(Ue())
            },
            children: Me
          }), (0, gM.jsx)(zK.c, {
            onClick: Re,
            children: Je(`${zR}islandsCancel`)
          })]
        })]
      })
    }

    function wR(ee) {
      return "hidden" !== ee
    }

    function DR(ee) {
      var ie, He;
      let {
        card: be,
        keepOwn: Me,
        blocked: Ke,
        maxIslands: Ue,
        serverNowMs: Fe,
        nowMs: Je,
        actions: oe,
        full: Re,
        waits: ke,
        answered: qe,
        mode: fe,
        setMode: Te,
        pending: pe,
        onSent: Xe,
        switchTo: ze,
        leave: Be,
        coopOn: Ee,
        openSocial: ge,
        t: Oe
      } = ee;
      const de = LK(),
        We = be.baf2IslandActive,
        te = We ? null : function(ee, ie) {
          if (ee <= 0) return null;
          const He = ie - ee;
          if (He < kM) return [`${qJ}islandsPlayedJustNow`];
          if (He < fJ) return [`${qJ}islandsPlayedMinutes`, {
            minutes: String(Math.floor(He / kM))
          }];
          if (He < TJ) return [`${qJ}islandsPlayedHours`, {
            hours: String(Math.floor(He / fJ))
          }];
          const ye = Math.floor(He / TJ);
          return 1 === ye ? [`${qJ}islandsPlayedDay`] : [`${qJ}islandsPlayedDays`, {
            days: String(ye)
          }]
        }(be.baf2IslandLastPlayedMs, Fe),
        Ze = void 0 === (we = be.baf2IslandItems) ? null : 0 === we ? [`${qJ}islandsItemsNone`] : 1 === we ? [`${qJ}islandsItemsOne`] : [`${qJ}islandsItems`, {
          count: String(we)
        }];
      var we;
      const De = function(ee) {
          return ee ? 1 === ee ? [`${qJ}islandsWaitingOne`] : [`${qJ}islandsWaiting`, {
            count: String(ee)
          }] : null
        }(be.baf2IslandWaiting),
        Pe = be.baf2IslandUnreadable,
        Ae = be.baf2IslandCoop,
        Ye = cJ(be, oe, Me, Re, Ee, Ke),
        Ve = (0, ye.useRef)(null);
      SJ(null !== fe, Ve);
      const ae = () => {
          var ee;
          Te(null), null === (ee = Ve.current) || void 0 === ee || ee.focus()
        },
        ce = (ee, ie) => {
          ae(), null !== ee && Xe(ee, ie)
        },
        xe = (ee, ie) => Oe(`${zR}${ee}`, {
          time: XM(Oe, ie)
        });
      return (0, gM.jsxs)("li", {
        ref: Ve,
        tabIndex: -1,
        className: Ob()("Baf2IslandCard", {
          Active: We,
          Pending: pe,
          Shared: void 0 !== Ae
        }),
        children: [(0, gM.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, gM.jsx)("strong", {
            className: "Baf2IslandName",
            children: be.baf2IslandName
          }), We && (0, gM.jsx)("span", {
            className: "Baf2IslandBadge",
            children: Oe(`${zR}islandsOnThis`)
          }), Ae && (0, gM.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: Oe(`${zR}islandsShared`)
          })]
        }), "member" === (null === Ae || void 0 === Ae ? void 0 : Ae.baf2CoopRole) && (0, gM.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: AJ(Oe, `${zR}islandsSharedBy`, {
            owner: Ae.baf2CoopOwner
          })
        }), void 0 !== Pe && (0, gM.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: Oe("newer" === Pe ? `${zR}islandsUnreadable` : `${zR}islandsDamaged`)
        }), "corrupt" === Pe && Re && (0, gM.jsx)("p", {
          className: "Baf2IslandStats",
          children: Oe(`${zR}islandsDamagedFull`)
        }), void 0 === Pe && (0, gM.jsxs)(gM.Fragment, {
          children: [(0, gM.jsx)(hJ, {
            tier: be.baf2IslandTier,
            t: Oe
          }), (0, gM.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, gM.jsx)("span", {
              children: 1 === be.baf2IslandQuestsDone ? Oe(`${zR}islandsQuestsDoneOne`) : Oe(`${zR}islandsQuestsDone`, {
                count: String(be.baf2IslandQuestsDone)
              })
            }), (0, gM.jsx)("span", {
              children: 1 === be.baf2IslandMachines ? Oe(`${zR}islandsMachinesOne`) : Oe(`${zR}islandsMachines`, {
                count: String(be.baf2IslandMachines)
              })
            }), Ze && (0, gM.jsx)("span", {
              children: Oe(Ze[0], Ze[1])
            }), De && (0, gM.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: Oe(De[0], De[1])
            }), te && (0, gM.jsx)("span", {
              children: Oe(te[0], te[1])
            })]
          })]
        }), Ae && void 0 === Ae.baf2CoopState && "people" !== fe && (0, gM.jsx)(OR, {
          members: Ae.baf2CoopMembers,
          t: Oe
        }), null === fe && (0, gM.jsx)(dR, {
          card: be,
          answered: qe,
          nowMs: Je,
          t: Oe
        }), Ye.note && (0, gM.jsx)(NJ, {
          note: Ye.note,
          className: Ob()({
            Unreachable: void 0 !== (null === Ae || void 0 === Ae ? void 0 : Ae.baf2CoopState)
          }),
          t: Oe
        }), "rename" === fe && (0, gM.jsx)(ER, {
          card: be,
          canRename: "enabled" === Ye.rename,
          done: ce,
          t: Oe
        }), "delete" === fe && (0, gM.jsx)(gR, {
          card: be,
          canDelete: "enabled" === Ye.delete,
          done: ee => {
            ce(ee, Ae ? "delete" : void 0)
          },
          t: Oe
        }), "people" === fe && (0, gM.jsx)(WR, {
          card: be,
          view: Ye,
          blocked: Ke,
          maxIslands: Ue,
          answered: qe,
          nowMs: Je,
          done: ae,
          openSocial: ge,
          t: Oe
        }), "leave" === fe && (0, gM.jsx)(ZR, {
          className: "Leave",
          text: AJ(Oe, `${zR}islandsLeaveConfirm`, {
            island: be.baf2IslandName,
            owner: null !== (ie = null === (He = be.baf2IslandCoop) || void 0 === He ? void 0 : He.baf2CoopOwner) && void 0 !== ie ? ie : ""
          }),
          ConfirmButton: zK.G,
          confirmLabel: Oe(`${zR}islandsLeaveYes`),
          canConfirm: "enabled" === Ye.leave,
          send: () => BR(de, be),
          done: ee => {
            ce(ee, "leave"), null !== ee && We && Be()
          },
          t: Oe
        }), "unshare" === fe && (0, gM.jsx)(ZR, {
          className: "Unshare",
          text: AJ(Oe, `${zR}islandsStopSharingConfirm`, {
            island: be.baf2IslandName
          }),
          ConfirmButton: zK.p,
          confirmLabel: Oe(`${zR}islandsStopSharing`),
          canConfirm: "enabled" === Ye.unshare,
          send: () => de.sendIslandEdit(`baf2coopunshare ${be.baf2IslandId}`),
          done: ee => {
            ce(ee), null !== ee && Be()
          },
          t: Oe
        }), null === fe && !pe && (0, gM.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": be.baf2IslandName,
          children: [wR(Ye.switch) && (0, gM.jsx)(zK.p, {
            disabled: "enabled" !== Ye.switch,
            onClick: ze,
            children: "tryAgain" === Ye.switchLabel ? Oe(`${zR}islandsTryAgain`) : ke.switch > 0 ? xe("islandsSwitchIn", ke.switch) : Oe(`${zR}islandsSwitch`)
          }), wR(Ye.rename) && (0, gM.jsx)(zK.c, {
            disabled: "enabled" !== Ye.rename,
            onClick: () => {
              Te("rename")
            },
            children: Oe(`${zR}islandsRename`)
          }), wR(Ye.people) && (0, gM.jsx)(zK.c, {
            disabled: "enabled" !== Ye.people,
            onClick: () => {
              Te("people")
            },
            children: Oe("players" === Ye.peopleLabel ? `${zR}islandsPlayersButton` : `${zR}islandsInviteButton`)
          }), wR(Ye.unshare) && (0, gM.jsx)(zK.c, {
            disabled: "enabled" !== Ye.unshare,
            onClick: () => {
              Te("unshare")
            },
            children: Oe(`${zR}islandsStopSharing`)
          }), wR(Ye.dismiss) && (0, gM.jsx)(zK.c, {
            disabled: "enabled" !== Ye.dismiss,
            onClick: () => {
              Xe(BR(de, be), "dismiss"), We && Be()
            },
            children: Oe(`${zR}islandsDismiss`)
          }), wR(Ye.leave) && (0, gM.jsx)(zK.I, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Ye.leave,
            onClick: () => {
              Te("leave")
            },
            children: We && ke.switch > 0 ? xe("islandsLeaveIn", ke.switch) : Oe(`${zR}islandsLeave`)
          }), wR(Ye.delete) && (0, gM.jsx)(zK.I, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Ye.delete,
            onClick: () => {
              Te("delete")
            },
            children: ke.change > 0 && Ye.deleteWaits ? xe("islandsDeleteIn", ke.change) : Oe(`${zR}islandsDelete`)
          })]
        })]
      })
    }
    const PR = "buildAFactory2Game:";

    function AR(ee) {
      let {
        invite: ie,
        actions: He,
        full: be,
        maxIslands: Me,
        waitSeconds: Ke,
        focus: Ue,
        focused: Fe,
        join: Je,
        decline: oe,
        t: Re
      } = ee;
      const [ke, qe] = (0, ye.useState)(!1), fe = (0, ye.useRef)(null);
      SJ(ke, fe), (0, ye.useEffect)((() => {
        var ee;
        Ue && (qe(!0), null === (ee = fe.current) || void 0 === ee || ee.focus(), Fe())
      }), [Ue, Fe]);
      const Te = function(ee, ie, He, ye, be) {
          return He ? {
            join: !1,
            note: {
              key: `${qJ}islandsJoinTooMany`,
              params: {
                max: String(ye)
              }
            }
          } : ee.baf2InvitePlayers >= be ? {
            join: !1,
            note: {
              key: `${qJ}islandsJoinFull`
            }
          } : {
            join: ie.switch,
            note: null
          }
        }(ie, He, be, Me, 10),
        pe = ie.baf2InviteIsland,
        Xe = ie.baf2InvitePlayers,
        ze = () => {
          var ee;
          qe(!1), null === (ee = fe.current) || void 0 === ee || ee.focus()
        },
        Be = Ke > 0 && null === Te.note ? Re(`${PR}islandsJoinIn`, {
          time: XM(Re, Ke)
        }) : Re(`${PR}islandsJoin`);
      return (0, gM.jsxs)("li", {
        ref: fe,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...ke ? mJ(ze) : {},
        children: [(0, gM.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, gM.jsx)("strong", {
            className: "Baf2IslandName",
            children: pe
          })
        }), (0, gM.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: AJ(Re, `${PR}islandsInvitedBy`, {
            owner: ie.baf2InviteOwner
          })
        }), (0, gM.jsx)(hJ, {
          tier: ie.baf2InviteTier,
          t: Re
        }), (0, gM.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, gM.jsx)("span", {
            children: 1 === Xe ? Re(`${PR}islandsPlayersCountOne`) : Re(`${PR}islandsPlayersCount`, {
              count: String(Xe)
            })
          })
        }), Te.note && (0, gM.jsx)(NJ, {
          note: Te.note,
          t: Re
        }), ke && (0, gM.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: AJ(Re, `${PR}islandsJoinConfirm`, {
            island: pe
          })
        }), !ke && (0, gM.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": pe,
          children: [(0, gM.jsx)(zK.p, {
            disabled: !Te.join,
            onClick: () => {
              var ee;
              qe(!0), null === (ee = fe.current) || void 0 === ee || ee.focus()
            },
            children: Be
          }), (0, gM.jsx)(zK.c, {
            onClick: oe,
            children: Re(`${PR}islandsDecline`)
          })]
        }), ke && (0, gM.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, gM.jsx)(zK.p, {
            disabled: !Te.join,
            onClick: Je,
            children: Re(`${PR}islandsJoinYes`)
          }), (0, gM.jsx)(zK.c, {
            onClick: ze,
            children: Re(`${PR}islandsCancel`)
          })]
        })]
      })
    }

    function YR(ee) {
      let {
        invites: ie,
        actions: He,
        full: ye,
        maxIslands: be,
        waitSeconds: Me,
        focus: Ke,
        focused: Ue,
        leave: Fe,
        declined: Je,
        t: oe
      } = ee;
      const Re = LK();
      return (0, gM.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, gM.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: oe(`${PR}islandsInvitesTitle`)
        }), (0, gM.jsx)("ul", {
          className: "Baf2IslandCards",
          children: ie.map((ee => {
            const ie = ee.baf2InviteId;
            return (0, gM.jsx)(AR, {
              invite: ee,
              actions: He,
              full: ye,
              maxIslands: be,
              waitSeconds: Me,
              focus: Ke === ie,
              focused: Ue,
              join: () => {
                Re.send(`baf2coopaccept ${ie}`), Fe()
              },
              decline: () => {
                Re.send(`baf2coopdecline ${ie}`), Je(ie)
              },
              t: oe
            }, ie)
          }))
        })]
      })
    }
    const VR = "buildAFactory2Game:";

    function aR(ee) {
      let {
        cards: ie,
        activeName: He,
        canStart: be,
        waitSeconds: Me,
        leave: Ke,
        t: Ue
      } = ee;
      const Fe = LK(),
        [Je, oe] = (0, ye.useState)(!1),
        [Re, ke] = (0, ye.useState)(""),
        qe = (0, ye.useRef)(null);
      SJ(Je, qe), (0, ye.useEffect)((() => {
        var ee;
        Je && (null === (ee = qe.current) || void 0 === ee || ee.focus())
      }), [Je]);
      const fe = BJ(ie),
        Te = XJ(Re),
        pe = zJ(Te),
        Xe = () => {
          be && !pe && (Fe.send("" === Te || Te === fe ? he : `${he} ${Te}`), Ke())
        },
        ze = () => {
          var ee;
          oe(!1), null === (ee = qe.current) || void 0 === ee || ee.focus()
        };
      return (0, gM.jsxs)("li", {
        ref: qe,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Je ? mJ(ze) : {},
        children: [(0, gM.jsx)("strong", {
          className: "Baf2IslandName",
          children: Ue(`${VR}islandsNewTitle`)
        }), !Je && (0, gM.jsx)("p", {
          className: "Baf2IslandStats",
          children: Ue(`${VR}islandsNewNote`)
        }), Je && (0, gM.jsxs)(gM.Fragment, {
          children: [(0, gM.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: AJ(Ue, `${VR}islandsNewConfirm`, {
              name: He
            })
          }), (0, gM.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [Ue(`${VR}islandsNewNameLabel`), (0, gM.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Re,
              placeholder: fe,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: lJ,
              onChange: ee => {
                ke(ee.target.value)
              },
              ...uJ(Xe, ze)
            })]
          }), pe && (0, gM.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: Ue(`${VR}islandsNameReserved`)
          })]
        }), (0, gM.jsxs)("div", {
          className: Ob()("Baf2IslandButtons", {
            Stacked: Je
          }),
          children: [(0, gM.jsx)(zK.p, {
            disabled: !be || Je && pe,
            onClick: () => {
              if (!Je) return ke(fe), void oe(!0);
              Xe()
            },
            children: Me > 0 ? Ue(`${VR}islandsNewIn`, {
              time: XM(Ue, Me)
            }) : Ue(Je ? `${VR}islandsNewConfirmButton` : `${VR}islandsNew`)
          }), Je && (0, gM.jsx)(zK.c, {
            onClick: ze,
            children: Ue(`${VR}islandsCancel`)
          })]
        })]
      })
    }

    function cR(ee) {
      var ie, He;
      let {
        message: be,
        arrivedAtMs: Me,
        close: Ke,
        leave: Ue,
        openSocial: Fe
      } = ee;
      const Je = LK(),
        {
          t: oe
        } = (0, Zb.v)(),
        Re = IJ(1e3),
        [ke, qe] = (0, ye.useState)(null),
        [fe, Te] = (0, ye.useState)(new Map),
        [pe, Xe] = (0, ye.useState)(new Set),
        ze = be.baf2IslandCards,
        Be = function(ee, ie, He, ye) {
          return (null !== ee && void 0 !== ee ? ee : []).filter((ee => ie + ee.baf2InviteLeftMs > He && !ye.has(ee.baf2InviteId)))
        }(be.baf2IslandsInvites, Me, Re, pe),
        Ee = Be.map((ee => ee.baf2InviteId)).join(" "),
        ge = (0, ye.useRef)(null),
        Oe = nJ(ge);
      jJ(), (0, ye.useEffect)((() => {
        var ee, ie;
        null !== (ee = ge.current) && void 0 !== ee && ee.contains(document.activeElement) || (null === (ie = ge.current) || void 0 === ie || ie.focus())
      }), [be, Ee]), (0, ye.useEffect)((() => {
        Te((ee => function(ee, ie, He, ye) {
          const be = new Map;
          for (const Me of ie) {
            const ie = ee.get(Me.baf2IslandId);
            ie && (void 0 !== ie.untilGone || ye < ie.answer) && ZJ(ie, Me, He) && be.set(Me.baf2IslandId, ie)
          }
          return be.size === ee.size ? ee : be
        }(ee, be.baf2IslandCards, Date.now(), be.baf2IslandsAnswered)))
      }), [be]);
      const de = pJ(Me, be.baf2IslandsWaitMs, Re),
        We = be.baf2IslandsBlocked,
        te = dJ(We, de),
        Ze = function(ee, ie) {
          const He = dJ(ee, 0);
          return {
            switch: He.switch ? ie : 0,
            change: He.change ? ie : 0
          }
        }(We, de),
        we = ze.length >= be.baf2IslandsMax,
        De = ze.length > 0,
        Pe = function(ee, ie, He) {
          return ee + Math.max(0, He - ie)
        }(be.baf2IslandsNowMs, Me, Re),
        Ae = null !== (ie = null === (He = ze.find((ee => ee.baf2IslandActive))) || void 0 === He ? void 0 : He.baf2IslandName) && void 0 !== ie ? ie : "",
        Ye = function(ee) {
          const ie = ee.filter(aJ).length;
          return ie <= 1 && ie < ee.length
        }(ze),
        Ve = !0 === be.baf2IslandsCoop,
        ae = function(ee, ie) {
          const He = ee.find((ee => ee.baf2IslandActive)),
            ye = null === He || void 0 === He ? void 0 : He.baf2IslandCoop;
          return He && "member" === (null === ye || void 0 === ye ? void 0 : ye.baf2CoopRole) ? {
            key: `${qJ}islandsKeepOwnMember`,
            names: {
              owner: ye.baf2CoopOwner,
              island: He.baf2IslandName
            }
          } : {
            key: ie ? `${qJ}islandsKeepOwn` : `${qJ}islandsKeepOwnSolo`
          }
        }(ze, Ve),
        [ce, xe] = (0, ye.useState)(null);
      (0, ye.useEffect)((() => {
        void 0 !== be.baf2IslandsFocusInvite && xe(be.baf2IslandsFocusInvite)
      }), [be]);
      const Le = (0, ye.useCallback)((() => {
          xe(null)
        }), []),
        Ce = ke ? ze.find((ee => ee.baf2IslandId === ke.id)) : void 0,
        ve = ke && Ce && "hidden" !== cJ(Ce, te, Ye, we, Ve, We)[ke.mode] ? ke : null;
      return (0, gM.jsx)(XK.e, {
        close: Ke,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, gM.jsxs)("section", {
          ref: ge,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: Oe ? {
            marginTop: `${Oe.marginTop}px`,
            maxHeight: `${Oe.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, gM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gM.jsxs)("div", {
              children: [(0, gM.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: oe(`${VR}islandsTitle`)
              }), De && (0, gM.jsx)("p", {
                children: oe(`${VR}islandsSubtitle`, {
                  count: String(ze.length),
                  max: String(be.baf2IslandsMax)
                })
              })]
            }), (0, gM.jsx)(zK.i, {
              ariaLabel: oe(`${VR}islandsClose`),
              onClick: Ke
            })]
          }), (0, gM.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== We && (0, gM.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: AJ(oe, EJ(We, gJ(ze)), {
                island: Ae
              })
            }), De && Be.length > 0 && (0, gM.jsx)(YR, {
              invites: Be,
              actions: te,
              full: we,
              maxIslands: be.baf2IslandsMax,
              waitSeconds: Ze.switch,
              focus: ce,
              focused: Le,
              leave: Ue,
              declined: ee => {
                Xe((ie => new Set(ie).add(ee)))
              },
              t: oe
            }), De && (0, gM.jsxs)(gM.Fragment, {
              children: [we && (0, gM.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: oe(`${VR}islandsFull`, {
                  max: String(be.baf2IslandsMax)
                })
              }), (0, gM.jsx)("p", {
                className: "Baf2IslandsNote",
                children: AJ(oe, ae.key, ae.names)
              }), (0, gM.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [ze.map((ee => {
                  const ie = ee.baf2IslandId;
                  return (0, gM.jsx)(DR, {
                    card: ee,
                    keepOwn: Ye,
                    coopOn: Ve,
                    openSocial: Fe,
                    blocked: We,
                    maxIslands: be.baf2IslandsMax,
                    serverNowMs: Pe,
                    nowMs: Re,
                    actions: te,
                    full: we,
                    waits: Ze,
                    answered: be.baf2IslandsAnswered,
                    mode: (null === ve || void 0 === ve ? void 0 : ve.id) === ie ? ve.mode : null,
                    setMode: ee => {
                      qe(null === ee ? null : {
                        id: ie,
                        mode: ee
                      })
                    },
                    pending: ZJ(fe.get(ie), ee, Re),
                    onSent: (He, ye) => {
                      Te((be => {
                        const Me = {
                          atMs: Date.now(),
                          from: ee.baf2IslandName,
                          answer: He
                        };
                        return new Map(be).set(ie, ye ? {
                          ...Me,
                          untilGone: ye
                        } : Me)
                      }))
                    },
                    leave: Ue,
                    switchTo: () => {
                      Je.send(`baf2islandswitch ${ie}`), Ue()
                    },
                    t: oe
                  }, ie)
                })), !we && (0, gM.jsx)(aR, {
                  cards: ze,
                  activeName: Ae,
                  canStart: te.change,
                  waitSeconds: Ze.change,
                  leave: Ue,
                  t: oe
                })]
              })]
            })]
          })]
        })
      })
    }
    var xR = He(5537);
    const LR = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        WM: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      CR = Object.keys(LR),
      vR = new Set([...Object.keys(Gi), ...[...ci.Press.recipes, ...ci["Wire Mill"].recipes].map((ee => ee.output))]),
      uR = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      mR = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      lR = / Bar$|Alloy$/,
      SR = /Porkchop|Beef|Mutton|Venison|Steak/,
      nR = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const jR = (0, ye.memo)((function(ee) {
      let {
        item: ie,
        name: He,
        amount: ye,
        selected: be,
        small: Me,
        onPick: Ke
      } = ee;
      return (0, gM.jsxs)("button", {
        type: "button",
        className: Ob()("Baf2TermTile", {
          On: be,
          Small: Me
        }),
        "aria-label": `${He}: ${ye}`,
        "aria-pressed": be,
        onClick: () => {
          Ke(ie)
        },
        children: [(0, gM.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, gM.jsx)(Db.c, {
            itemName: ie,
            amount: 0
          })
        }), (0, gM.jsx)("span", {
          className: "Baf2TermCount",
          children: TM(ye, 1e4)
        }), !Me && (0, gM.jsx)("span", {
          className: "Baf2TermName",
          children: He
        })]
      })
    }));

    function sR(ee) {
      let {
        store: ie,
        close: He,
        send: be
      } = ee;
      const {
        t: Me
      } = (0, Zb.v)(), {
        isTouchScreen: Ke
      } = (0, Bb.m)(["isTouchScreen"]);
      ! function(ee) {
        const [ie, He] = (0, ye.useState)(ee.version);
        (0, ye.useEffect)((() => (He(ee.version), ee.subscribe((() => {
          He(ee.version)
        })))), [ee])
      }(ie);
      const [Ue, Fe] = (0, ye.useState)("all"), [Je, oe] = (0, ye.useState)(!1), [Re, ke] = (0, ye.useState)(""), [qe, fe] = (0, ye.useState)(""), [Te, pe] = (0, ye.useState)(null), [Xe, ze] = (0, ye.useState)(!1), [Be, Ee, ge] = function() {
        const ee = (0, ye.useRef)(null),
          [ie, He] = (0, ye.useState)(!1),
          be = () => {
            const ie = ee.current;
            He(null !== ie && ie.scrollLeft + ie.clientWidth < ie.scrollWidth - 1)
          };
        return (0, ye.useEffect)(be), (0, ye.useEffect)((() => {
          const ie = ee.current;
          if (!ie) return;
          const He = new ResizeObserver(be);
          return He.observe(ie), () => {
            He.disconnect()
          }
        }), []), [ee, ie, be]
      }(), Oe = (0, ye.useMemo)((() => new Map), [Me]), de = ee => {
        let ie = Oe.get(ee);
        return void 0 === ie && (ie = function(ee, ie) {
          const He = /^(.+) \((.+)\)$/.exec(ee);
          return He ? ie(He[2], He[1]) : ee
        }((0, eM.f)(Me, ee), ((ee, ie) => Me("buildAFactory2Game:terminalTileKind", {
          kind: ee,
          base: ie
        }))), Oe.set(ee, ie)), ie
      }, We = ie.isReadOnly(), te = Xe && !We, Ze = ie.recent(), we = ie.items(), De = qe.trim().toLowerCase(), Pe = te ? ie.heldItems(Te) : ("recent" === Ue ? Ze : we).filter((ee => {
        const ie = de(ee);
        return ("all" === Ue || "recent" === Ue || function(ee) {
          return FM(ee) ? "farm" : uR.test(ee) ? "nuclear" : lR.test(ee) ? "bars" : SR.test(ee) ? "farm" : mR.test(ee) ? "WM" : vR.has(ee) ? "parts" : nR.test(ee) ? "farm" : "other"
        }(ee) === Ue) && ("" === De || ie.toLowerCase().includes(De)) && ("" === Re || ie.toUpperCase().startsWith(Re))
      })), Ae = new Set(we.map((ee => de(ee).charAt(0).toUpperCase()))), Ye = ee => te ? ie.heldAmount(ee) : ie.amount(ee), Ve = !te && "recent" !== Ue && Ze.length > 0, ae = function(ee, ie) {
        return null !== ee && ie.includes(ee) ? ee : null
      }(Te, Ve ? [...Pe, ...Ze] : Pe), ce = null === ae ? 0 : ie.amount(ae), xe = null === ae ? 0 : Ye(ae), Le = (0, ye.useCallback)((ee => {
        pe((ie => ie === ee ? null : ee))
      }), []), Ce = ee => xe > 0 || te && null === ae && "fill" === ee && Pe.length > 0, ve = te ? [
        ["one", Me("buildAFactory2Game:terminalStoreOne")],
        ["stack", Me("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", Me(null === ae ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", Me("buildAFactory2Game:terminalTakeOne")],
        ["stack", Me("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", Me("buildAFactory2Game:terminalFill")]
      ], ue = te ? Me("buildAFactory2Game:terminalStoreEmpty") : "" !== Re ? Me("buildAFactory2Game:terminalEmptyLetter", {
        letter: Re
      }) : "" !== De ? Me("buildAFactory2Game:terminalEmptySearch", {
        query: qe
      }) : Me("buildAFactory2Game:terminalEmpty");
      return (0, gM.jsx)(XK.e, {
        close: He,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, gM.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, gM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gM.jsxs)("div", {
              children: [(0, gM.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: Me(ie.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, gM.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, gM.jsx)("span", {
                  className: Ob()({
                    Off: te
                  }),
                  children: Me("buildAFactory2Game:terminalSubtitle", {
                    count: String(ie.siloCount())
                  })
                }), !We && (0, gM.jsx)("span", {
                  className: Ob()({
                    Off: !te
                  }),
                  children: Me("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !We && (0, gM.jsx)(xR.b, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: Me("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: Me("buildAFactory2Game:terminalModeStore")
              }],
              value: te ? "store" : "take",
              onChange: ee => {
                ze("store" === ee), pe(null)
              },
              ariaLabel: Me("buildAFactory2Game:terminalModes")
            }), (0, gM.jsx)(zK.i, {
              onClick: He
            })]
          }), (0, gM.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, gM.jsxs)("div", {
              className: Ob()("Baf2TermTools", {
                Hidden: te
              }),
              children: [(0, gM.jsx)("div", {
                ref: Be,
                className: Ob()("Baf2TermChips", {
                  MoreRight: Ee
                }),
                onScroll: ge,
                children: Je ? (0, gM.jsxs)(gM.Fragment, {
                  children: [(0, gM.jsx)("button", {
                    type: "button",
                    "aria-label": Me("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      oe(!1), ke("")
                    },
                    children: "\u2190"
                  }), [...Ae].sort().map((ee => (0, gM.jsx)("button", {
                    type: "button",
                    className: Ob()({
                      On: Re === ee
                    }),
                    onClick: () => {
                      ke(Re === ee ? "" : ee)
                    },
                    children: ee
                  }, ee)))]
                }) : (0, gM.jsxs)(gM.Fragment, {
                  children: [(0, gM.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      oe(!0)
                    },
                    children: Me("buildAFactory2Game:terminalLetters")
                  }), CR.map((ee => (0, gM.jsx)("button", {
                    type: "button",
                    className: Ob()({
                      On: Ue === ee
                    }),
                    onClick: () => {
                      Fe(ee)
                    },
                    children: Me(LR[ee])
                  }, ee)))]
                })
              }), !Ke && (0, gM.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: qe,
                placeholder: Me("buildAFactory2Game:terminalSearch"),
                "aria-label": Me("buildAFactory2Game:terminalSearch"),
                onChange: ee => {
                  fe(ee.target.value)
                },
                onKeyDown: ee => {
                  ee.stopPropagation()
                }
              }), (0, gM.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": Me("buildAFactory2Game:terminalResort"),
                title: Me("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  ie.resort()
                },
                children: "\u21c5"
              })]
            }), Ve && (0, gM.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, gM.jsx)("span", {
                children: Me(LR.recent)
              }), Ze.map((ee => (0, gM.jsx)(jR, {
                item: ee,
                name: de(ee),
                amount: ie.amount(ee),
                selected: ae === ee,
                small: !0,
                onPick: Le
              }, ee)))]
            }), (0, gM.jsx)("div", {
              className: "Baf2TermTiles",
              children: Pe.length > 0 ? Pe.map((ee => (0, gM.jsx)(jR, {
                item: ee,
                name: de(ee),
                amount: Ye(ee),
                selected: ae === ee,
                onPick: Le
              }, ee))) : (0, gM.jsx)("p", {
                className: "Baf2TermEmpty",
                children: ue
              })
            }), (0, gM.jsxs)("div", {
              className: Ob()("Baf2TermActions", {
                Hidden: te && 0 === Pe.length
              }),
              children: [(0, gM.jsx)("span", {
                className: "Baf2TermPicked",
                children: We ? (0, gM.jsxs)(gM.Fragment, {
                  children: [null !== ae && ce > 0 ? de(ae) : Me("buildAFactory2Game:terminalVisiting"), (0, gM.jsx)("small", {
                    children: Me("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== ae ? (0, gM.jsxs)(gM.Fragment, {
                  children: [de(ae), (0, gM.jsx)("small", {
                    children: Me("buildAFactory2Game:terminalStored", {
                      amount: ce.toLocaleString()
                    })
                  })]
                }) : Me(te ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !We && ve.map((ee => {
                let [He, ye] = ee;
                const Me = "fill" === He ? zK.m : zK.c;
                return (0, gM.jsx)(Me, {
                  className: "Baf2TermTake",
                  disabled: !Ce(He),
                  onClick: () => {
                    (ee => {
                      Ce(ee) && be(null === ae ? ie.putAll() : te ? ie.put(ee, ae) : ie.take(ee, ae))
                    })(He)
                  },
                  children: ye
                }, He)
              }))]
            })]
          })]
        })
      })
    }

    function IR(ee) {
      let {
        kind: ie,
        icon: He,
        label: ye,
        number: be,
        preview: Me,
        note: Ke,
        tone: Ue = null,
        share: Fe,
        onExplain: Je
      } = ee;
      return (0, gM.jsxs)("button", {
        type: "button",
        className: Ob()("NxLane", ie, {
          Warn: "warn" === Ue,
          Danger: "danger" === Ue
        }),
        onClick: Je,
        children: [(0, gM.jsxs)("span", {
          className: "NxLaneHead",
          children: [He, (0, gM.jsx)("span", {
            className: "NxLaneLabel",
            children: ye
          })]
        }), (0, gM.jsxs)("span", {
          className: "NxLaneNum",
          children: [be, Me && (0, gM.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", Me]
          })]
        }), (0, gM.jsx)("span", {
          className: "NxLaneNote",
          children: Ke
        }), void 0 !== Fe && (0, gM.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, Fe)) + "%"
          }
        })]
      })
    }

    function hR(ee) {
      let {
        kind: ie,
        step: He,
        short: ye,
        planned: be
      } = ee;
      return (0, gM.jsx)("i", {
        className: Ob()("NxPipe", ie, `Step${He}`, {
          Short: ye,
          Planned: be
        }),
        "aria-hidden": "true"
      })
    }

    function NR(ee) {
      let {
        max: ie,
        bands: He,
        ticks: ye,
        now: be,
        settle: Me,
        settleTone: Ke,
        onExplain: Ue
      } = ee;
      const Fe = ee => Math.max(0, Math.min(ie, ee)) / ie * 100 + "%";
      let Je = 0;
      return (0, gM.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: Ue,
        children: [(0, gM.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [He.map((ee => {
            const ie = {
              bottom: Fe(Je),
              height: `calc(${Fe(ee.upTo)} - ${Fe(Je)})`
            };
            return Je = ee.upTo, (0, gM.jsx)("i", {
              className: Ob()("NxGaugeBand", ee.kind),
              style: ie
            }, ee.kind)
          })), null !== be && (0, gM.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: Fe(be)
            }
          }), void 0 !== Me && null !== Me && (0, gM.jsx)("i", {
            className: Ob()("NxGaugeSettle", {
              Bad: "bad" === Ke
            }),
            style: {
              bottom: Fe(Me)
            }
          })]
        }), (0, gM.jsx)("span", {
          className: "NxGaugeTicks",
          children: ye.map((ee => (0, gM.jsx)("small", {
            style: {
              bottom: Fe(ee)
            },
            children: ee
          }, ee)))
        })]
      })
    }

    function GR(ee) {
      const [ie, He] = (0, ye.useState)(null), [be, Me] = (0, ye.useState)((() => {
        try {
          return null === window.localStorage.getItem(ee)
        } catch {
          return !1
        }
      })), Ke = (0, ye.useRef)(null);
      (0, ye.useEffect)((() => () => {
        null !== Ke.current && clearTimeout(Ke.current)
      }), []);
      const Ue = (0, ye.useCallback)((ie => {
          He(ie), Me(!1);
          try {
            window.localStorage.setItem(ee, "1")
          } catch {}
          null !== Ke.current && clearTimeout(Ke.current), Ke.current = setTimeout((() => {
            Ke.current = null, He(null)
          }), 5e3)
        }), [ee]),
        Fe = (0, ye.useCallback)(((ie, He) => {
          const ye = `${ee}:${ie}`;
          try {
            if (null !== window.localStorage.getItem(ye)) return;
            window.localStorage.setItem(ye, "1")
          } catch {
            return
          }
          Ue(He)
        }), [Ue, ee]);
      return {
        explained: ie,
        hinting: be,
        explain: Ue,
        explainOnce: Fe
      }
    }

    function rR(ee) {
      let {
        text: ie,
        tone: He,
        explained: ye
      } = ee;
      return (0, gM.jsxs)("p", {
        className: Ob()("NxStatus", null === ye ? He : "Explain"),
        "aria-live": "polite",
        children: [null !== ye && (0, gM.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== ye && void 0 !== ye ? ye : ie]
      })
    }
    const QR = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function ek(ee, ie) {
      const He = Number(ee[ie]);
      return 1 === He || 2 === He || 3 === He ? He : 0
    }

    function ik(ee) {
      return !!zF("reactor", ee.baf2RxNeed) || void 0 !== ee.baf2RxLayout && ee.baf2RxNeed.some((ee => {
        let [ie, He] = ee;
        return He > 0 && QR.includes(ie)
      }))
    }
    const Hk = "buildAFactory2Game:";

    function yk(ee) {
      let {
        status: ie,
        store: He,
        busy: ye
      } = ee;
      const {
        t: be
      } = (0, Zb.v)();
      return function(ee) {
        return 0 !== (ee.baf2RxFlags & Ti) && (!ee.baf2RxFormed || void 0 !== ee.baf2RxLayout)
      }(ie) ? (0, gM.jsx)(zK.m, {
        disabled: !ik(ie) || ye,
        onClick: () => {
          He.tap("fill", (() => {
            He.send("fill")
          }))
        },
        children: be(void 0 !== ie.baf2RxLayout ? `${Hk}rxFillLayout` : `${Hk}rxFill`)
      }) : null
    }

    function bk(ee) {
      let {
        status: ie,
        store: He,
        readOnly: be,
        bare: Me = !1
      } = ee;
      const {
        t: Ke
      } = (0, Zb.v)(), Ue = ie.baf2RxLayout, [Fe, Je, oe] = ie.baf2RxDims, Re = (0, ye.useMemo)((() => {
        if (void 0 === Ue) return 0;
        const ee = Uint8Array.from(Ue, ((ee, ie) => ek(Ue, ie)));
        return NU([Fe - 2, Je - 2, oe - 2], ee).max
      }), [Ue, Fe, Je, oe]);
      return void 0 === Ue ? null : (0, gM.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!Me && (0, gM.jsx)("span", {
          className: "Baf2RxHint",
          children: Ke(`${Hk}rxLayoutLine`, {
            amount: tF(Re)
          })
        }), !be && (0, gM.jsx)(zK.c, {
          onClick: () => {
            He.send("layout", 0)
          },
          children: Ke(`${Hk}rxLayoutHide`)
        })]
      })
    }
    const Mk = "buildAFactory2Game:",
      Kk = {
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

    function Uk(ee) {
      let {
        id: ie,
        title: He,
        body: ye,
        bodyParams: be,
        yes: Me,
        cancel: Ke,
        confirm: Ue
      } = ee;
      const {
        t: Fe
      } = (0, Zb.v)();
      return (0, gM.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": ie,
        children: [(0, gM.jsx)("h3", {
          id: ie,
          children: Fe(He)
        }), (0, gM.jsx)("p", {
          children: Fe(ye, be)
        }), (0, gM.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, gM.jsx)(zK.e, {
            onClick: Ke,
            children: Fe(`${Mk}rxCancel`)
          }), (0, gM.jsx)(zK.G, {
            onClick: Ue,
            children: Fe(Me)
          })]
        })]
      })
    }

    function Fk(ee) {
      const [ie, He] = (0, ye.useState)((() => ee.get()));
      return (0, ye.useEffect)((() => (He(ee.get()), ee.subscribe((() => {
        He(ee.get())
      })))), [ee]), ie
    }

    function Jk(ee) {
      let {
        kind: ie,
        cap: He,
        busy: be = !1,
        whyNot: Me = null,
        apart: Ke
      } = ee;
      const {
        t: Ue
      } = (0, Zb.v)(), [Fe, Je] = (0, ye.useState)(!1), oe = null !== Me, Re = (0, ye.useRef)(null);
      if ((0, ye.useEffect)((() => {
          oe && Je(!1)
        }), [oe]), (0, ye.useLayoutEffect)((() => {
          var ee;
          const ie = null === (ee = Re.current) || void 0 === ee ? void 0 : ee.firstElementChild;
          oe ? null === ie || void 0 === ie || ie.setAttribute("aria-disabled", "true") : be || null === ie || void 0 === ie || ie.removeAttribute("aria-disabled")
        })), !Fe || oe) return (0, gM.jsx)("span", {
        ref: Re,
        className: "Baf2RxApartWrap",
        children: (0, gM.jsx)(zK.e, {
          disabled: be,
          className: Ob()({
            Baf2RxNotYet: oe
          }),
          onClick: () => {
            Me ? Me() : Je(!0)
          },
          children: Ue(`${Mk}rxApart`)
        })
      });
      const ke = "battery" === ie,
        qe = void 0 === He ? `${Mk}batApartConfirmBodyPlan` : `${Mk}batApartConfirmBody`;
      return (0, gM.jsx)(Uk, {
        id: `baf2ApartTitle_${ie}`,
        title: ke ? `${Mk}batApartConfirmTitle` : `${Mk}rxApartConfirmTitle`,
        body: ke ? qe : `${Mk}rxApartConfirmBody`,
        bodyParams: void 0 === He ? void 0 : {
          cap: He
        },
        yes: `${Mk}rxApart`,
        cancel: () => {
          Je(!1)
        },
        confirm: () => {
          Je(!1), Ke()
        }
      })
    }

    function Rk(ee) {
      let {
        mood: ie,
        big: He
      } = ee;
      const ye = Kk[ie],
        be = [];
      return ye.rows.forEach(((ee, ie) => {
        for (let He = 0; He < ee.length; He++) "." !== ee[He] && be.push((0, gM.jsx)("rect", {
          x: He + 1,
          y: ie + 1,
          width: 1,
          height: 1,
          fill: "w" === ee[He] ? "#8fd3ff" : ye.colour
        }, `${He},${ie}`))
      })), (0, gM.jsxs)("svg", {
        className: Ob()("Baf2RxFace", {
          Big: He,
          Alarm: "alarm" === ie
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, gM.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, gM.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), be]
      })
    }

    function kk(ee) {
      return fM(ee, "+").replace("+", "")
    }

    function qk(ee) {
      let {
        kind: ie,
        dims: He,
        cap: ye,
        disabled: be,
        compact: Me,
        resize: Ke
      } = ee;
      const {
        t: Ue
      } = (0, Zb.v)(), {
        min: Fe,
        max: Je
      } = mH(ie), oe = Math.min(ye, Je), Re = [`${Mk}rxWide`, `${Mk}rxTall`, `${Mk}rxDeep`], ke = {
        w: String(He[0]),
        h: String(He[1]),
        d: String(He[2]),
        blocks: String(WF(ie, He))
      };
      return (0, gM.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, gM.jsx)("div", {
          className: "Baf2RxSteppers",
          children: He.map(((ee, ie) => {
            const Me = ye => {
                const be = [He[0], He[1], He[2]];
                be[ie] = ee + ye, Ke(be)
              },
              ke = ee >= oe;
            return (0, gM.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, gM.jsx)("button", {
                type: "button",
                "aria-label": Ue(`${Mk}rxSmaller`),
                disabled: be || ee <= Fe,
                onClick: () => {
                  Me(-1)
                },
                children: "\u2212"
              }), (0, gM.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [ee, (0, gM.jsx)("small", {
                  children: Ue(Re[ie])
                })]
              }), (0, gM.jsx)("button", {
                type: "button",
                "aria-label": Ue(`${Mk}rxBigger`),
                disabled: be || ke,
                onClick: () => {
                  Me(1)
                },
                children: ke && ye < Je ? "\ud83d\udd12" : "+"
              })]
            }, Re[ie])
          }))
        }), !Me && (0, gM.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === ie ? Ue(`${Mk}rxSizeLine`, {
            ...ke,
            water: String(dF(He))
          }) : Ue(`${Mk}batSizeLine`, ke)
        })]
      })
    }

    function fk(ee) {
      let {
        on: ie,
        label: He,
        disabled: ye,
        locked: be,
        pending: Me,
        toggle: Ke
      } = ee;
      return (0, gM.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": ie,
        disabled: ye,
        "aria-disabled": be || void 0,
        className: Ob()("Baf2RxSwitch", {
          On: ie,
          Locked: be,
          Pending: Me
        }),
        onClick: Ke,
        children: [(0, gM.jsx)("span", {
          className: "Baf2RxKnob"
        }), He]
      })
    }
    const Tk = "buildAFactory2Game:",
      pk = .95;

    function Xk(ee, ie) {
      return 0 !== (ee.baf2RxFlags & ie)
    }

    function zk(ee) {
      return "cryo" === ee ? re.o : re.s
    }

    function Bk(ee) {
      var ie, He, ye, be, Me, Ke, Ue, Fe, Je;
      return ee.baf2RxCryo ? {
        Lq: "cryo",
        usePerS: null !== (be = ee.baf2RxCryoUse) && void 0 !== be ? be : 0,
        needPerS: null !== (Me = ee.baf2RxCryoNeed) && void 0 !== Me ? Me : 0,
        inPerS: null !== (Ke = ee.baf2RxCryoIn) && void 0 !== Ke ? Ke : 0,
        stored: null !== (Ue = ee.baf2RxCryoStored) && void 0 !== Ue ? Ue : 0,
        makersShort: null !== (Fe = ee.baf2RxMixersShort) && void 0 !== Fe ? Fe : 0,
        waterBeside: null !== (Je = ee.baf2RxWaterUse) && void 0 !== Je ? Je : 0,
        pct: ee.baf2RxWater
      } : {
        Lq: "water",
        usePerS: null !== (ie = ee.baf2RxWaterUse) && void 0 !== ie ? ie : 0,
        needPerS: null !== (He = ee.baf2RxWaterNeed) && void 0 !== He ? He : 0,
        inPerS: ee.baf2RxWaterIn,
        stored: ee.baf2RxWaterStored,
        makersShort: null !== (ye = ee.baf2RxCondensersShort) && void 0 !== ye ? ye : 0,
        waterBeside: 0,
        pct: ee.baf2RxWater
      }
    }

    function Ek(ee) {
      const ie = "running" === ee.baf2RxState || "idle" === ee.baf2RxState;
      return ee.baf2RxFormed && ee.baf2RxTarget !== ee.baf2RxThrottle && ie ? gk(ee, ee.baf2RxTarget) : null
    }

    function gk(ee, ie) {
      const [He, ye, be, , , , Me, , Ke] = ee.baf2RxStats, Ue = Xk(ee, qi), Fe = Bk(ee), Je = Fe.pct / 100, {
        gen: oe,
        out: Re,
        load: ke
      } = function(ee, ie, He, ye) {
        const be = He ? lU : 1,
          Me = Math.min(ee.fuelHeat * be * Math.max(0, Math.min(1, ie)), ee.size * be);
        return {
          gen: Me,
          out: Me,
          load: UF(Me, ee.cooling, ye)
        }
      }({
        fuelHeat: He,
        cooling: ye,
        size: be
      }, ie / 100, Ue, Je), qe = JF(Me || hU(...ee.baf2RxDims)), fe = ee.baf2RxHeat, Te = Math.abs(ke - fe), pe = function(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : re.s;
        const Me = He ? lU : 1,
          Ke = Math.min(ee.fuelHeat * Me * ie / 100, ee.size * Me),
          Ue = Ke,
          Fe = ee.fuelHeat * Me,
          Je = ee.cooling * KF(ye.pct / 100),
          oe = Fe > 0 && Je < ee.size * Me ? Math.floor(100 * Je / Fe) : 100,
          Re = Ke * be - ye.inPerS;
        return {
          out: Ue,
          hotAbove: oe >= 100 ? null : Math.max(0, oe),
          waterSecs: ye.pct >= 100 && Re > 1e-6 ? Math.max(0, ye.stored) / Re : null
        }
      }({
        fuelHeat: He,
        cooling: ye,
        size: be
      }, ie, Ue, {
        pct: Fe.pct,
        inPerS: Fe.inPerS,
        stored: Fe.stored
      }, zk(Fe.Lq));
      return {
        pct: ie,
        out: Re,
        coolPerS: oe * zk(Fe.Lq),
        pelletsPerMin: Ke > 0 ? Re / Ke * 60 : 0,
        settle: ke,
        settleS: Te > 2 ? qe * Math.log(Te / 2) : 0,
        overheatS: ke > 100 && fe < 100 ? qe * Math.log((ke - fe) / (ke - 100)) : null,
        hotAbove: pe.hotAbove,
        coolantSecs: pe.waterSecs
      }
    }

    function Ok(ee) {
      return ee.baf2RxThrottle <= 0 && "running" !== ee.baf2RxState ? 0 : gk(ee, ee.baf2RxTarget).pelletsPerMin / 60
    }

    function dk(ee, ie) {
      if (ee <= 0 || ie <= 0) return 0;
      const He = ee / ie;
      return He < .25 ? 1 : He < .5 ? 2 : He < .8 ? 3 : 4
    }

    function Wk(ee, ie) {
      const He = {};
      for (const [ye, be] of Object.entries(ie.params)) He[ye] = "time" === ye ? XM(ee, be) : "amount" === ye ? tF(be) : String(Math.round(be));
      return ee(ie.key, He)
    }

    function tk(ee, ie) {
      return {
        key: `${Tk}${ee}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: ie
      }
    }

    function Zk(ee) {
      var ie;
      const He = Xk(ee, qi),
        ye = "running" === ee.baf2RxState,
        be = qF(ee),
        Me = ee.baf2RxHeat;
      var Ke;
      if (ye && Me > uU) return {
        key: null !== (Ke = be.fix) && void 0 !== Ke ? Ke : `${Tk}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const Ue = ye ? gk(ee, ee.baf2RxTarget).coolantSecs : null,
        Fe = "cryo" === Bk(ee).Lq;
      if (null !== Ue && Ue >= 1 && Ue <= 30) return tk(Fe ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Je = sU(hU(...ee.baf2RxDims)).waste,
        oe = ye ? BF(ee, Je, Ok(ee)).fullInS : null;
      if (null !== oe && oe <= 120 && ee.baf2RxWaste >= .5 * Je) return tk("rxWarnWaste", "warn");
      if (null !== Ue && Ue >= 1) return tk(Fe ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: Ue
      });
      const Re = "noWater" === ee.baf2RxState && Me > uU;
      if (ee.baf2RxDamage >= 1 && !Re) return tk("rxDamagedHeals", "warn", {
        pct: ee.baf2RxDamage
      });
      if (ee.baf2RxCryoCut) return tk("rxFix_cryoCut", "warn");
      const ke = Bk(ee);
      if ("noWater" === ee.baf2RxState && "cryo" === ke.Lq) return tk("noWater" === ee.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const qe = be.fix === `${Tk}rxFix_scramCool` || "idle" === ee.baf2RxState && ee.baf2RxTarget <= 0;
      if (qe && ee.baf2RxFuel <= 0) return tk("rxFix_noFuel", "warn");
      if (qe && ee.baf2RxWaterIn <= 0 && (null !== (ie = ee.baf2RxCryoIn) && void 0 !== ie ? ie : 0) <= 0) return tk("rxFix_noWater", "warn");
      const fe = be.fix === `${Tk}rxFix_scramCool` ? TF(ee) : null;
      if (null !== fe) return {
        key: fe.key,
        params: {
          amount: fe.amount
        },
        tone: "info"
      };
      if ("running" !== ee.baf2RxState && "idle" !== ee.baf2RxState && null !== be.fix) return {
        key: be.fix,
        params: {},
        tone: "scram" === ee.baf2RxState ? "info" : Re ? "bad" : "warn"
      };
      var Te;
      if ("idle" === ee.baf2RxState && ee.baf2RxTarget <= 0) return {
        key: null !== (Te = be.fix) && void 0 !== Te ? Te : `${Tk}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const pe = ee.baf2RxCryoStarved;
      if ("cryo" === ke.Lq && pe && ke.needPerS > 0 && ke.usePerS < pk * ke.needPerS) return tk("noWater" === pe ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const Xe = "cryo" === ke.Lq,
        ze = ke.needPerS > 0 && ke.usePerS < pk * ke.needPerS;
      if (Xe ? ze || ke.makersShort > 0 && ke.pct < 100 : ke.pct < 100) {
        const ie = Xe && ze ? Math.floor(100 * ke.usePerS / ke.needPerS) : Math.min(100, ke.pct);
        if (ke.makersShort > 0) {
          return tk(`${Xe?"rxCryoShortLine":"rxWaterShortLine"}${1===ke.makersShort?"One":""}${!Xe&&ee.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: ie,
            count: ke.makersShort
          })
        }
        return tk(Xe ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: ie
        })
      }
      const Be = function(ee) {
        const [ie, He, ye] = ee.baf2RxStats, be = Bk(ee), Me = FF({
          fuelHeat: ie,
          cooling: He,
          size: ye
        }, "cryo" === be.Lq ? re.f : 1, !0);
        return Math.max(0, Me * zk(be.Lq) - be.inPerS)
      }(ee);
      if (He && Be > 0) return tk("cryo" === ke.Lq ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Be)
      });
      if (Me >= bF) return tk("rxHotLine", "warn");
      const Ee = gk(ee, ee.baf2RxTarget);
      var ge;
      if (null !== Ee.overheatS) return tk("rxWillOverheat", "bad", {
        pct: ee.baf2RxTarget,
        time: Ee.overheatS,
        safe: null !== (ge = Ee.hotAbove) && void 0 !== ge ? ge : 100
      });
      if (Math.abs(Ee.settle - Me) >= 3) return tk("rxSettling", "info", {
        pct: ee.baf2RxTarget,
        heat: Math.round(Ee.settle),
        time: Ee.settleS
      });
      const Oe = TF(ee);
      if (null !== Oe) return {
        key: Oe.key,
        params: {
          amount: Oe.amount
        },
        tone: "info"
      };
      const de = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== ie && ("running" !== ie || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === ee.rods ? `${oF}rxLimitNoRods` : `${oF}rxLimit_${yF(ee)}`
      }({
        rods: ee.baf2RxStats[3],
        ...fF(ee)
      }, ee.baf2RxState, ee.baf2RxOut >= pk * ee.baf2RxMaxNow, !1);
      if (de === `${Tk}rxLimit_size`) {
        const [ie, , He, ye] = ee.baf2RxStats, be = ye > 0 && ie > 0 ? Math.ceil(He / (ie / ye) - 1e-9) : ye, Me = ee.baf2RxDims.every((ee => ee >= mH("reactor").max));
        if (be < ye) return tk(Me ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: be,
          have: ye
        });
        if (Me) return tk("rxLimit_sizeMax", "info")
      }
      return null !== de ? {
        key: de,
        params: {},
        tone: "info"
      } : tk("rxSteady", "ok", {
        pct: ee.baf2RxTarget
      })
    }

    function wk(ee) {
      var ie;
      if (ee.melted) return tk("rxMeltedBody", "bad");
      if (-1 === ee.bad) return tk("rxFix_noRoom", "warn");
      if (ee.bad > 0) return tk(1 === ee.bad ? "rxBadOne" : "rxBad", "warn", {
        count: ee.bad
      });
      if (ee.left > 0) {
        const ie = 1 === ee.left ? "One" : "";
        return tk(ee.canFill ? `rxPlanLeft${ie}` : `rxPlanLeftNoFill${ie}`, "info", {
          count: ee.left
        })
      }
      if (0 === ee.rods) return tk("rxLimitNoRods", "warn");
      const He = null !== (ie = ee.idle) && void 0 !== ie ? ie : 0;
      return He > 0 ? tk(1 === He ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: He
      }) : tk("rxPlanReady", "ok")
    }

    function Dk(ee) {
      return Math.floor(Math.max(0, ee[1] - 1) / 2)
    }

    function Pk(ee) {
      if (ee >= rU && ee < QU) {
        const ie = ee - rU;
        return {
          key: 0 === ie ? `${Tk}rxWhy_rodAlone` : 1 === ie ? `${Tk}rxWhy_rodOne` : `${Tk}rxWhy_rod`,
          params: {
            count: String(ie),
            heat: String(YU * (1 + VU * ie))
          }
        }
      }
      return ee === QU ? {
        key: `${Tk}rxWhy_channel`,
        params: {
          amount: String(cU)
        }
      } : ee === eF ? {
        key: `${Tk}rxWhy_deadChannel`,
        params: {}
      } : ee === iF ? {
        key: `${Tk}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Tk}rxWhy_core`,
        params: {}
      }
    }
    const Ak = "buildAFactory2Game:";

    function Yk(ee, ie) {
      return 0 !== (ee.baf2RxFlags & ie)
    }

    function Vk(ee) {
      let {
        status: ie,
        pending: He,
        store: ye,
        explain: be
      } = ee;
      const {
        t: Me
      } = (0, Zb.v)(), Ke = Yk(ie, ki), Ue = ie.baf2RxTarget, Fe = ie.baf2RxThrottle, Je = function(ee) {
        return {
          press: () => {
            ee.throttlePress()
          },
          drag: ie => {
            ee.throttleDrag(ie)
          },
          release: () => {
            ee.throttleRelease()
          }
        }
      }(ye), oe = null === (Re = gk(ie, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Re - 10),
        red: Re
      };
      var Re;
      return (0, gM.jsxs)("div", {
        className: Ob()("Baf2RxThrottle", {
          Off: Ke
        }),
        onClick: () => {
          Ke && be(`${Ak}rxWhy_startFirst`)
        },
        children: [(0, gM.jsx)("span", {
          className: "HideNarrow",
          children: Me(`${Ak}rxThrottle`)
        }), (0, gM.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, gM.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: Ue,
            disabled: Ke,
            style: Ke ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": Me(`${Ak}rxThrottle`),
            onPointerDown: () => {
              Je.press();
              const ee = () => {
                window.removeEventListener("pointerup", ee), window.removeEventListener("pointercancel", ee), Je.release()
              };
              window.addEventListener("pointerup", ee), window.addEventListener("pointercancel", ee)
            },
            onKeyUp: Je.release,
            onChange: ee => {
              Je.drag(Number(ee.target.value))
            }
          }), (0, gM.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${oe.amber}%, #ffb020 ${oe.amber}% ${oe.red}%, #ff3b30 ${oe.red}%)`
            },
            "aria-hidden": "true"
          }), (0, gM.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${Fe}% + ${8*(1-Fe/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, gM.jsxs)("b", {
          children: [`${Ue}%`, (0, gM.jsx)("i", {
            className: Ob()("Baf2RxPendingDot", {
              On: He
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function ak(ee) {
      let {
        status: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)(), ye = gk(ie, ie.baf2RxTarget), be = Bk(ie).Lq, Me = He("cryo" === be ? `${Ak}rxRateCryo` : `${Ak}rxRateWater`, {
        rate: kk(ye.coolPerS)
      }), Ke = He(`${Ak}rxChain`, {
        pct: String(ie.baf2RxTarget),
        out: tF(ye.out),
        heat: String(Math.round(ye.settle)),
        coolant: Me
      }), Ue = null !== ye.coolantSecs ? ye.coolantSecs >= 1 ? He("cryo" === be ? `${Ak}rxThrottleCryoOut` : `${Ak}rxThrottleWaterOut`, {
        time: XM(He, ye.coolantSecs)
      }) : He("cryo" === be ? `${Ak}rxThrottleCryoDry` : `${Ak}rxThrottleWaterDry`) : null;
      return (0, gM.jsxs)("p", {
        className: "Baf2RxChain",
        children: [Ke, null !== Ue ? (0, gM.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", Ue]
        }) : (0, gM.jsxs)("span", {
          children: [" \xb7 ", He(`${Ak}rxChainPellets`, {
            amount: ZF(ye.pelletsPerMin)
          })]
        })]
      })
    }

    function ck(ee) {
      let {
        view: ie,
        store: He,
        explain: be,
        explainOnce: Me
      } = ee;
      const {
        t: Ke
      } = (0, Zb.v)(), {
        status: Ue
      } = ie, [Fe, Je] = (0, ye.useState)(!1), oe = Yk(Ue, ki), ke = Yk(Ue, qi), qe = !Yk(Ue, Xi), fe = Ue.baf2RxHeat > 100;
      return (0, gM.jsxs)(gM.Fragment, {
        children: [(0, gM.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, gM.jsx)(Vk, {
            status: Ue,
            pending: ie.throttlePending,
            store: He,
            explain: be
          }), (0, gM.jsx)(fk, {
            on: ke,
            label: ke ? Ke(`${Ak}rxOdLeft`, {
              time: XM(Ke, Ue.baf2RxOdLeft)
            }) : Ke(`${Ak}rxOverdrive`),
            locked: qe,
            pending: 0 !== (ie.pendingFlags & qi),
            toggle: () => {
              qe ? be(`${Ak}rxOverdriveTier`, {
                amount: String(Re(13))
              }) : ke ? He.setFlag(qi, !1) : ie.odConfirmed ? He.setFlag(qi, !0) : Je(!0)
            }
          }), oe || ie.startGuard ? (0, gM.jsx)(zK.p, {
            disabled: ie.busy.has("start") || ie.startGuard,
            onClick: () => {
              He.tap("start", (() => {
                He.setFlag(ki, !1)
              }))
            },
            children: Ke(ie.startGuard ? `${Ak}rxStarting` : `${Ak}rxStart`)
          }) : (0, gM.jsx)("span", {
            className: Ob()("Baf2RxScram", {
              Pulse: fe
            }),
            children: (0, gM.jsx)(zK.G, {
              onClick: () => {
                He.shutDown()
              },
              children: Ke(`${Ak}rxScram`)
            })
          })]
        }), (0, gM.jsx)(ak, {
          status: Ue
        }), Fe && (0, gM.jsx)(Uk, {
          id: "baf2RxOdTitle",
          title: `${Ak}rxOdConfirmTitle`,
          body: `${Ak}rxOdConfirmBody`,
          yes: `${Ak}rxOdConfirm`,
          cancel: () => {
            Je(!1)
          },
          confirm: () => {
            Je(!1), He.tap("odConfirm", (() => {
              He.confirmOverdrive(), He.setFlag(qi, !0)
            })), Me(`${Ak}rxWhy_overdrive`)
          }
        })]
      })
    }

    function xk(ee) {
      let {
        view: ie,
        store: He,
        keepSize: ye
      } = ee;
      const {
        t: be
      } = (0, Zb.v)(), {
        status: Me
      } = ie;
      return (0, gM.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, gM.jsx)(qk, {
          kind: "reactor",
          dims: ie.dims,
          cap: Me.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: ee => {
            He.resize(ee)
          }
        }), ye ? (0, gM.jsx)(zK.e, {
          onClick: ye,
          children: be(`${Ak}rxKeepSize`)
        }) : (0, gM.jsxs)(gM.Fragment, {
          children: [(0, gM.jsx)(fk, {
            on: ie.guide,
            label: be(`${Ak}rxGuide`),
            toggle: () => {
              He.toggleGuide()
            }
          }), Yk(Me, Bi) && (0, gM.jsx)(fk, {
            on: ie.starter,
            label: be(`${Ak}rxStarter`),
            toggle: () => {
              He.toggleStarter()
            }
          }), (0, gM.jsx)(yk, {
            status: Me,
            store: He,
            busy: ie.busy.has("fill")
          })]
        })]
      })
    }

    function Lk(ee) {
      let {
        need: ie,
        kind: He = "reactor",
        explain: ye
      } = ee;
      const {
        t: be
      } = (0, Zb.v)(), Me = ie.length <= 3, Ke = ie.reduce(((ee, ie) => {
        let [, He] = ie;
        return ee + He
      }), 0);
      return (0, gM.jsxs)("div", {
        className: Ob()("Baf2RxParts", {
          Compact: !Me
        }),
        onClick: () => {
          ye("battery" === He ? `${Ak}batWhy_store` : `${Ak}rxShellHint`)
        },
        children: [Ke > 0 && (0, gM.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === Ke ? be(`${Ak}rxBlocksOne`) : be(`${Ak}rxBlocks`, {
            blocks: String(Ke)
          })
        }), 0 === ie.length ? (0, gM.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: be("battery" === He ? `${Ak}batPartsDone` : `${Ak}rxShellDone`)
        }) : XF(ie).map((ee => {
          let [ie, He, ye] = ee;
          const Ke = function(ee) {
            const ie = OF[ee];
            if (void 0 === ie) return null;
            const [He, ye, be] = EF[ie].colour.map((ee => Math.round(255 * ee)));
            return `rgb(${He}, ${ye}, ${be})`
          }(ie);
          return (0, gM.jsxs)("span", {
            className: "Baf2RxChip",
            title: (0, eM.f)(be, ie),
            children: [(0, gM.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === Ke ? {
                visibility: "hidden"
              } : {
                background: Ke
              },
              title: be(`${Ak}rxShopGhost`)
            }), (0, gM.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, gM.jsx)(Db.c, {
                itemName: ie,
                amount: 0
              })
            }), (0, gM.jsx)("span", {
              className: "Baf2RxChipName",
              children: Me ? `${He} ${Ue=(0,eM.f)(be,ie),Ue.replace(/^(Reactor|Battery) (?=\S)/,"")}` : He
            }), ye >= He ? (0, gM.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, gM.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: Me ? be(`${Ak}rxShopShort`, {
                count: String(He - ye)
              }) : "\u2212" + (He - ye)
            })]
          }, ie);
          var Ue
        }))]
      })
    }
    const Ck = "buildAFactory2Game:";

    function vk(ee) {
      var ie, He, be, Me, Ke, Ue, Fe;
      let {
        store: Je,
        close: oe
      } = ee;
      const {
        t: Re
      } = (0, Zb.v)(), ke = LK(), qe = Fk(Je), {
        explained: fe,
        explain: Te
      } = GR("baf2RxExplained"), pe = (0, ye.useCallback)(((ee, ie) => {
        Te(Re(ee, ie))
      }), [Te, Re]), Xe = null === qe || void 0 === qe ? void 0 : qe.status, ze = !0 === (null === Xe || void 0 === Xe ? void 0 : Xe.baf2BatReadOnly), Be = ee => {
        Xe && ke.send(Ri(Xe.baf2BatAt, ee))
      }, [Ee, ge, Oe] = null !== (ie = null === qe || void 0 === qe ? void 0 : qe.dims) && void 0 !== ie ? ie : [0, 0, 0], de = tF(null !== (He = null === qe || void 0 === qe ? void 0 : qe.bk) && void 0 !== He ? He : 0), We = !0 === (null === Xe || void 0 === Xe ? void 0 : Xe.baf2BatFormed), te = null !== (be = null === Xe || void 0 === Xe ? void 0 : Xe.baf2BatStored) && void 0 !== be ? be : 0, Ze = Math.max(1, null !== (Me = null === Xe || void 0 === Xe ? void 0 : Xe.baf2BatIslandCap) && void 0 !== Me ? Me : 1), we = Math.min(100, 100 * te / Ze), De = null === Xe || void 0 === Xe ? void 0 : Xe.baf2BatNetPerS, Pe = function(ee, ie, He) {
        return He > 0 && ie >= He ? "full" : void 0 !== ee && ee >= .05 ? "charging" : void 0 !== ee && ee <= -.05 && ie > 0 ? "draining" : "steady"
      }(De, te, null !== (Ke = null === Xe || void 0 === Xe ? void 0 : Xe.baf2BatIslandCap) && void 0 !== Ke ? Ke : 0), Ae = null !== (Ue = null === Xe || void 0 === Xe ? void 0 : Xe.baf2BatMadePerS) && void 0 !== Ue ? Ue : 0, Ye = null !== (Fe = null === Xe || void 0 === Xe ? void 0 : Xe.baf2BatUsedPerS) && void 0 !== Fe ? Fe : 0;
      let Ve, ae = {},
        ce = "info";
      if (Xe)
        if (We) "charging" === Pe ? (Ve = `${Ck}batLine_charging`, ae = {
          time: XM(Re, (Ze - te) / Math.max(.05, null !== De && void 0 !== De ? De : 0))
        }, ce = "ok") : "draining" === Pe ? (Ve = `${Ck}batLine_draining`, ae = {
          time: XM(Re, te / Math.max(.05, -(null !== De && void 0 !== De ? De : 0)))
        }, ce = "warn") : Ve = "full" === Pe ? `${Ck}batLine_full` : te <= 0 && Ye > 0 ? `${Ck}batLine_empty` : `${Ck}batLine_steady`;
        else {
          var xe;
          const ee = wk({
            left: Xe.baf2BatNeed.reduce(((ee, ie) => {
              let [, He] = ie;
              return ee + He
            }), 0),
            bad: Xe.baf2BatBad,
            rods: 1,
            canFill: !0 === Xe.baf2BatCanFill,
            melted: !1
          });
          Ve = ee.key, ae = {
            count: String(null !== (xe = ee.params.count) && void 0 !== xe ? xe : 0)
          }, ce = ee.tone
        }
      else Ve = `${Ck}batLine_steady`;
      const Le = Math.max(Ae, Ye, 1);
      return (0, gM.jsx)(XK.e, {
        close: oe,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, gM.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, gM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gM.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, gM.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, gM.jsx)(Db.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, gM.jsxs)("div", {
                children: [(0, gM.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Re(`${Ck}batTitle`)
                }), Xe && (0, gM.jsxs)("p", {
                  className: Ob()("Baf2RxSubtitle", {
                    good: We && "charging" === Pe,
                    warn: We && "draining" === Pe
                  }),
                  children: [Ee, "\xd7", ge, "\xd7", Oe, " \xb7 ", Re(We ? `${Ck}batState_${Pe}` : `${Ck}rxSubPlanShort`)]
                })]
              })]
            }), (0, gM.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Xe && !ze && (0, gM.jsx)(Jk, {
                kind: "battery",
                cap: We ? de : void 0,
                busy: null === qe || void 0 === qe ? void 0 : qe.busy.has("apart"),
                apart: () => {
                  Je.tap("apart", (() => {
                    Be("apart")
                  }))
                }
              }), (0, gM.jsx)(zK.i, {
                onClick: oe
              })]
            })]
          }), qe && Xe && (0, gM.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, gM.jsxs)("div", {
              className: Ob()("Baf2RxFlow Baf2BatFlow", {
                Plan: !We
              }),
              children: [(0, gM.jsx)(IR, {
                kind: "Power",
                label: Re(`${Ck}batMade`),
                number: We ? `\u26a1 ${tF(Ae)}/s` : "\u2014",
                note: Re(`${Ck}batMadeNote`),
                share: We ? Ae / Le : void 0,
                onExplain: () => {
                  pe(`${Ck}batWhy_made`)
                }
              }), (0, gM.jsx)(hR, {
                kind: "Power",
                step: We ? dk(Ae, Le) : 0,
                planned: !We
              }), (0, gM.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  pe(`${Ck}batWhy_store`)
                },
                children: [(0, gM.jsx)(NR, {
                  max: 100,
                  bands: [{
                    upTo: We ? we : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, gM.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, gM.jsx)("b", {
                    className: "Baf2BatStored",
                    children: We ? Re(`${Ck}batStoredOf`, {
                      amount: tF(te),
                      cap: tF(Xe.baf2BatIslandCap)
                    }) : Re(`${Ck}batWillHold`, {
                      cap: de
                    })
                  }), (0, gM.jsx)("span", {
                    children: Re(`${Ck}batAdds`, {
                      cap: de
                    })
                  }), We && (0, gM.jsx)("small", {
                    children: Re(`${Ck}batBreakNote`, {
                      cap: de
                    })
                  })]
                })]
              }), (0, gM.jsx)(hR, {
                kind: "Power",
                step: We ? dk(Ye, Le) : 0,
                planned: !We
              }), (0, gM.jsx)(IR, {
                kind: "Power",
                label: Re(`${Ck}batUsed`),
                number: We ? `\u26a1 ${tF(Ye)}/s` : "\u2014",
                note: Re(`${Ck}batUsedNote`),
                share: We ? Ye / Le : void 0,
                onExplain: () => {
                  pe(`${Ck}batWhy_used`)
                }
              })]
            }), (0, gM.jsx)(rR, {
              text: Re(Ve, ae),
              tone: ce,
              explained: fe
            }), ze ? (0, gM.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Re(`${Ck}rxNotYours`)
            }) : !We && (0, gM.jsxs)(gM.Fragment, {
              children: [(0, gM.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, gM.jsx)(qk, {
                  kind: "battery",
                  dims: qe.dims,
                  cap: Xe.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: ee => {
                    Je.resize(ee)
                  }
                }), (0, gM.jsx)(fk, {
                  on: qe.guide,
                  label: Re(`${Ck}rxGuide`),
                  toggle: () => {
                    Je.toggleGuide()
                  }
                }), Xe.baf2BatCanFill && (0, gM.jsx)(zK.m, {
                  disabled: !zF("battery", Xe.baf2BatNeed) || qe.busy.has("fill"),
                  onClick: () => {
                    Je.tap("fill", (() => {
                      Be("fill")
                    }))
                  },
                  children: Re(`${Ck}rxFill`)
                })]
              }), (0, gM.jsx)(Lk, {
                need: Xe.baf2BatNeed,
                kind: "battery",
                explain: pe
              })]
            })]
          })]
        })
      })
    }
    const uk = "buildAFactory2Game:",
      mk = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function lk(ee, ie) {
      return ee === GU ? null : ie ? "#4a4440" : ee < QU ? mk[ee - rU] : ee === QU ? "#3fd0f0" : ee === eF ? "#2c3e4c" : "#55585e"
    }

    function Sk(ee) {
      let {
        inner: ie,
        looks: He,
        layer: ye,
        setLayer: be,
        glow: Me,
        melted: Ke,
        explain: Ue
      } = ee;
      const {
        t: Fe
      } = (0, Zb.v)(), [Je, oe, Re] = ie, ke = Math.max(0, Math.min(oe - 1, ye)), qe = [];
      for (let Te = 0; Te < Re; Te++)
        for (let ee = 0; ee < Je; ee++) {
          var fe;
          const ie = null !== (fe = He[(ke * Re + Te) * Je + ee]) && void 0 !== fe ? fe : GU,
            ye = lk(ie, Ke),
            be = ie >= rU && ie < QU;
          qe.push(null === ye ? (0, gM.jsx)("circle", {
            cx: ee + .5,
            cy: Te + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${ee},${Te}`) : (0, gM.jsx)("rect", {
            x: ee + .06,
            y: Te + .06,
            width: .88,
            height: .88,
            fill: ye,
            opacity: be && !Ke ? .5 + .5 * Me : 1,
            onClick: ee => {
              ee.stopPropagation();
              const He = Pk(ie);
              Ue(He.key, He.params)
            }
          }, `${ee},${Te}`))
        }
      return (0, gM.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, gM.jsx)("svg", {
          className: Ob()("Baf2RxMapGrid", {
            Melted: Ke
          }),
          viewBox: `0 0 ${Math.max(1,Je)} ${Math.max(1,Re)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": Fe(`${uk}rxWhy_core`),
          onClick: () => {
            Ue(`${uk}rxWhy_core`, {})
          },
          children: qe
        }), oe > 1 && (0, gM.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, gM.jsx)("button", {
            type: "button",
            "aria-label": Fe(`${uk}rxLayerDown`),
            disabled: ke <= 0,
            onClick: () => {
              be(ke - 1)
            },
            children: "\u25bc"
          }), (0, gM.jsxs)("span", {
            children: [(0, gM.jsx)("span", {
              className: "HideNarrow",
              children: Fe(`${uk}rxLayer`, {
                n: String(ke + 1),
                of: String(oe)
              })
            }), (0, gM.jsx)("span", {
              className: "ShowNarrow",
              children: Fe(`${uk}rxLayerShort`, {
                n: String(ke + 1),
                of: String(oe)
              })
            })]
          }), (0, gM.jsx)("button", {
            type: "button",
            "aria-label": Fe(`${uk}rxLayerUp`),
            disabled: ke >= oe - 1,
            onClick: () => {
              be(ke + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const nk = "buildAFactory2Game:",
      jk = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: mU,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: kF,
        kind: "red"
      }],
      sk = [50, mU, 100];

    function Ik(ee) {
      let {
        stats: ie,
        t: He,
        explain: ye
      } = ee;
      const be = yF(ie),
        Me = Math.max(1, ie.fuelHeat, ie.cooling, ie.size),
        Ke = [
          ["fuel", `${nk}rxBarRods`, ie.fuelHeat],
          ["cooling", `${nk}rxBarCooling`, ie.cooling],
          ["size", `${nk}rxBarSize`, ie.size]
        ];
      return (0, gM.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          ye(`${nk}rxWhy_bars`)
        },
        children: [(0, gM.jsx)("span", {
          className: "Baf2RxMostLine",
          children: He(`${nk}rxMost`, {
            amount: tF(Math.min(ie.fuelHeat, ie.cooling, ie.size))
          })
        }), (0, gM.jsx)("span", {
          className: "Baf2RxMostBars",
          children: Ke.map((ee => {
            let [ie, ye, Ke] = ee;
            return (0, gM.jsxs)("span", {
              className: Ob()("Baf2RxMostBar", ie, {
                Low: ie === be
              }),
              children: [(0, gM.jsx)("small", {
                children: He(ye)
              }), (0, gM.jsx)("i", {
                children: (0, gM.jsx)("b", {
                  style: {
                    width: 100 * Ke / Me + "%"
                  }
                })
              })]
            }, ie)
          }))
        })]
      })
    }

    function hk(ee) {
      var ie;
      let {
        view: He,
        heat: be,
        settle: Me,
        settleLine: Ke,
        settleBad: Ue,
        explain: Fe
      } = ee;
      const {
        t: Je
      } = (0, Zb.v)(), {
        status: oe
      } = He, Re = oe.baf2RxAt.join(","), [ke, qe] = (0, ye.useState)((() => Dk(He.inner)));
      (0, ye.useEffect)((() => {
        qe(Dk(He.inner))
      }), [Re, He.inner[1]]);
      const fe = null !== (ie = He.plan) && void 0 !== ie ? ie : fF(oe),
        Te = He.plan ? He.plan.powerPerUnit : oe.baf2RxStats[8],
        pe = null === be ? null : "alarm" === (Xe = RF(oe)) ? "red" : "hot" === Xe ? "hot" : "warm" === Xe ? "warm" : "cold";
      var Xe;
      const ze = !oe.baf2RxFormed && function(ee, ie) {
          return 0 !== (ee.baf2RxFlags & ie)
        }(oe, fi),
        Be = oe.baf2RxDamage,
        Ee = oe.baf2RxDamageTrend;
      return (0, gM.jsxs)("div", {
        className: Ob()("Baf2RxCore", null !== pe && void 0 !== pe ? pe : "plan"),
        children: [(0, gM.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, gM.jsx)(Sk, {
            inner: He.inner,
            looks: He.looks,
            layer: ke,
            setLayer: qe,
            glow: oe.baf2RxFormed ? oe.baf2RxThrottle / 100 : 1,
            melted: ze,
            explain: Fe
          }), (0, gM.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              Fe(`${nk}rxWhy_heat`)
            },
            children: [null !== be ? (0, gM.jsxs)(gM.Fragment, {
              children: [(0, gM.jsx)("b", {
                children: Je(`${nk}rxHeatPct`, {
                  pct: String(be)
                })
              }), (0, gM.jsx)("span", {
                className: Ob()("Baf2RxBand", pe),
                children: Je(`${nk}rxBand_${pe}`)
              })]
            }) : (0, gM.jsx)("b", {
              children: Je(`${nk}rxHeat`)
            }), null !== Ke && (0, gM.jsx)("span", {
              className: Ob()("Baf2RxSettle", {
                Bad: Ue
              }),
              children: Ke
            }), Be >= 1 && (0, gM.jsxs)("span", {
              className: Ob()("Baf2RxDamage", Ee),
              children: [Je(`${nk}rxDamageLine`, {
                pct: String(Be)
              }), " \xb7 ", Je(`${nk}rxDamage_${Ee}`), (0, gM.jsx)("i", {
                children: (0, gM.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Be)}%`
                  }
                })
              })]
            })]
          }), (0, gM.jsx)(NR, {
            max: kF,
            bands: jk,
            ticks: sk,
            now: be,
            settle: Me,
            settleTone: Ue ? "bad" : null,
            onExplain: () => {
              Fe(`${nk}rxWhy_heat`)
            }
          })]
        }), (0, gM.jsx)(Ik, {
          stats: fe,
          t: Je,
          explain: Fe
        }), Te > 0 && (0, gM.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            Fe(`${nk}rxWhy_perPellet`)
          },
          children: Je(`${nk}rxPerPellet`, {
            amount: tF(Te)
          })
        })]
      })
    }

    function Nk(ee, ie) {
      var He;
      if (!ee.baf2RxStore) return {
        note: ie(`${nk}rxUpTo`, {
          amount: tF(ee.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [ye, be] = ee.baf2RxStore, Me = be > 0 ? ye / be : 0, Ke = String(Math.floor(100 * Me)), Ue = null !== (He = ee.baf2RxStoreNetPerS) && void 0 !== He ? He : 0, Fe = function(ee) {
        var ie, He;
        const [ye, be] = null !== (ie = ee.baf2RxStore) && void 0 !== ie ? ie : [0, 0], Me = null !== (He = ee.baf2RxStoreNetPerS) && void 0 !== He ? He : 0;
        return be > 0 && ye >= be - 1 ? "running" === ee.baf2RxState ? `${Tk}rxStoreFull` : `${Tk}rxStoreFullOnly` : Me > .05 ? `${Tk}rxStoreLine` : Me < -.05 ? "running" === ee.baf2RxState ? `${Tk}rxStoreUsesMore` : `${Tk}rxStoreDraining` : `${Tk}rxStorePct`
      }(ee);
      return {
        note: ie(Fe, Fe === `${nk}rxStoreLine` ? {
          pct: Ke,
          time: XM(ie, (be - ye) / Ue)
        } : {
          pct: Ke
        }),
        share: Me
      }
    }

    function Gk(ee) {
      let {
        view: ie,
        explain: He,
        preview: ye
      } = ee;
      const {
        t: be
      } = (0, Zb.v)(), {
        status: Me
      } = ie, Ke = sU(hU(...ie.dims)), Ue = Ok(Me), Fe = Math.min(Math.round(Me.baf2RxFuel), Ke.fuel), Je = "running" === Me.baf2RxState, oe = Je ? dk(Me.baf2RxOut, Me.baf2RxMaxNow) : 0, Re = function(ee, ie, He) {
        const ye = Bk(ee),
          be = "cryo" === ye.Lq,
          Me = He ? He.coolantSecs : ye.pct >= 100 && ee.baf2RxOut >= 1 ? gk(ee, ee.baf2RxThrottle).coolantSecs : null;
        let Ke, Ue = !1;
        if (ye.pct < 100) {
          const He = 1 === ye.makersShort,
            Me = !be && ee.baf2RxCryoOpen ? "OrCryo" : "";
          Ke = ye.makersShort > 0 ? ie(be ? `${nk}rxCryoAddMixer${He?"":"s"}` : `${nk}rxWaterAddCondenser${He?"":"s"}${Me}`, {
            count: String(ye.makersShort)
          }) : ie(`${nk}rxWaterNeeds`, {
            rate: kk(ye.needPerS)
          })
        } else if (null !== Me) Ke = ie(`${nk}rxWaterRunsOut`, {
          time: XM(ie, Me)
        });
        else if (ye.waterBeside > 0) Ke = ie(`${nk}rxCryoPlusWater`, {
          rate: kk(ye.waterBeside)
        });
        else {
          const ee = function(ee) {
            return ee.inPerS <= 0 ? "rxWaterNoSupply" : ee.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(ye);
          Ue = "rxWaterNoSupply" === ee, Ke = ie(`${nk}${ee}`, {
            amount: tF(ye.stored)
          })
        }
        return {
          kind: be ? "Cryo" : "Water",
          label: ie(be ? `${nk}rxCryo` : `${nk}rxWater`),
          number: `${kk(ye.usePerS)}/s`,
          preview: He ? `${kk(He.coolPerS)}/s` : null,
          note: Ke,
          tone: "noWater" === ee.baf2RxState ? "danger" : Ue ? "warn" : (Fe = ye.pct, Je = Me, Fe < 100 ? "danger" : null === Je ? null : Je < 300 ? "danger" : "warn"),
          share: ye.pct / 100,
          why: be ? `${nk}rxWhy_cryo` : `${nk}rxWhy_water`,
          short: ye.pct < 100
        };
        var Fe, Je
      }(Me, be, ye), ke = BF(Me, Ke.waste, Ue), qe = Nk(Me, be), fe = gk(Me, Me.baf2RxTarget), Te = Je && Math.abs(fe.settle - Me.baf2RxHeat) >= 3, pe = ye ? ye.pelletsPerMin / 60 : null;
      return (0, gM.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, gM.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, gM.jsx)(IR, {
            kind: "Fuel",
            label: be(`${nk}rxFuel`),
            number: String(Fe),
            preview: null !== pe && pe > 0 && Me.baf2RxFuel > 0 ? XM(be, Me.baf2RxFuel / pe) : null,
            note: Me.baf2RxFuel <= 0 ? be(`${nk}rxFuelEmpty`) : Ue > 0 ? be(`${nk}rxFuelLeft`, {
              time: XM(be, Me.baf2RxFuel / Ue)
            }) : be(1 === Fe ? `${nk}rxFuelPellet` : `${nk}rxFuelPellets`),
            tone: "noFuel" === Me.baf2RxState ? "danger" : Me.baf2RxFuel < 2 ? "warn" : null,
            share: Me.baf2RxFuel / Ke.fuel,
            onExplain: () => {
              He(`${nk}rxWhy_fuel`)
            }
          }), (0, gM.jsx)(IR, {
            kind: Re.kind,
            label: Re.label,
            number: Re.number,
            preview: Re.preview,
            note: Re.note,
            tone: Re.tone,
            share: Re.share,
            onExplain: () => {
              He(Re.why)
            }
          })]
        }), (0, gM.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, gM.jsx)(hR, {
            kind: "Fuel",
            step: oe,
            short: "noFuel" === Me.baf2RxState
          }), (0, gM.jsx)(hR, {
            kind: Re.kind,
            step: oe,
            short: Re.short || "noWater" === Me.baf2RxState
          })]
        }), (0, gM.jsx)(hk, {
          view: ie,
          heat: Me.baf2RxHeat,
          settle: Math.min(kF, fe.settle),
          settleLine: Te ? be(`${nk}rxHeatSettles`, {
            pct: String(Math.round(fe.settle)),
            time: XM(be, fe.settleS)
          }) : null,
          settleBad: fe.settle > 100,
          explain: He
        }), (0, gM.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, gM.jsx)(hR, {
            kind: "Power",
            step: oe
          }), (0, gM.jsx)(hR, {
            kind: "Waste",
            step: Je && Me.baf2RxFuel - Me.baf2RxPu > 0 ? oe : 0,
            short: ke.full
          })]
        }), (0, gM.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, gM.jsx)(IR, {
            kind: "Power",
            label: be(`${nk}rxPowerOut`),
            number: `\u26a1 ${tF(Me.baf2RxOut)}/s`,
            preview: ye ? tF(ye.out) : null,
            note: qe.note,
            share: qe.share,
            onExplain: () => {
              He(`${nk}rxWhy_power`)
            }
          }), (0, gM.jsx)(IR, {
            kind: "Waste",
            label: be(`${nk}rxWaste`),
            number: `${Math.floor(Me.baf2RxWaste)}/${Ke.waste}`,
            note: ke.full ? be(`${nk}rxWasteFull`) : null !== ke.fullInS ? be(`${nk}rxWasteFullIn`, {
              time: XM(be, ke.fullInS)
            }) : be(`${nk}rxWasteSpent`),
            tone: "wasteFull" === Me.baf2RxState ? "danger" : ke.full ? "warn" : null,
            share: Me.baf2RxWaste / Ke.waste,
            onExplain: () => {
              He(`${nk}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function rk(ee) {
      let {
        view: ie,
        explain: He
      } = ee;
      const {
        t: ye
      } = (0, Zb.v)(), be = ie.plan;
      if (!be) return null;
      const Me = be.fuelHeat <= 0 ? null : be.cooling > 0 ? Math.min(kF, 100 * be.fuelHeat / be.cooling) : kF,
        Ke = ye(`${nk}rxPlanAtFull`);
      return (0, gM.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, gM.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, gM.jsx)(IR, {
            kind: "Fuel",
            label: ye(`${nk}rxFuel`),
            number: ye(`${nk}rxPlanPerMin`, {
              amount: ZF(be.pelletsPerMin)
            }),
            note: ye(`${nk}rxPlanPellets`),
            onExplain: () => {
              He(`${nk}rxWhy_fuel`)
            }
          }), (0, gM.jsx)(IR, {
            kind: "Water",
            label: ye(`${nk}rxWater`),
            number: `${kk(be.waterPerS)}/s`,
            note: ie.status.baf2RxCryoOpen && be.waterPerS > 0 ? ye(`${nk}rxPlanOrCryo`, {
              rate: kk(FF(be, re.f) * re.o)
            }) : Ke,
            onExplain: () => {
              He(`${nk}rxWhy_water`)
            }
          })]
        }), (0, gM.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, gM.jsx)(hR, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, gM.jsx)(hR, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, gM.jsx)(hk, {
          view: ie,
          heat: null,
          settle: Me,
          settleLine: null === Me ? null : ye(`${nk}rxPlanHeat`, {
            pct: String(Math.round(Me))
          }),
          settleBad: null !== Me && Me > 100,
          explain: He
        }), (0, gM.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, gM.jsx)(hR, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, gM.jsx)(hR, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, gM.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, gM.jsx)(IR, {
            kind: "Power",
            label: ye(`${nk}rxPowerOut`),
            number: `\u26a1 ${tF(be.max)}/s`,
            note: Ke,
            onExplain: () => {
              He(`${nk}rxWhy_power`)
            }
          }), (0, gM.jsx)(IR, {
            kind: "Waste",
            label: ye(`${nk}rxWaste`),
            number: ye(`${nk}rxPlanPerMin`, {
              amount: ZF(be.pelletsPerMin)
            }),
            note: ye(`${nk}rxWasteSpent`),
            onExplain: () => {
              He(`${nk}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const Qk = "buildAFactory2Game:",
      eq = {
        key: `${Qk}rxWaiting`,
        params: {},
        tone: "info"
      };

    function iq(ee, ie) {
      return 0 !== (ee.baf2RxFlags & ie)
    }

    function Hq(ee) {
      var ie, He;
      let {
        store: be,
        close: Me
      } = ee;
      const {
        t: Ke
      } = (0, Zb.v)(), Ue = Fk(be), {
        explained: Fe,
        hinting: Je,
        explain: oe,
        explainOnce: Re
      } = GR("baf2RxExplained"), ke = (0, ye.useCallback)(((ee, ie) => {
        oe(Ke(ee, ie))
      }), [oe, Ke]), qe = (0, ye.useCallback)(((ee, ie) => {
        Re(ee, Ke(ee, ie))
      }), [Re, Ke]), [fe, Te] = (0, ye.useState)(!1), [pe, Xe] = (0, ye.useState)(!1), ze = null === Ue || void 0 === Ue ? void 0 : Ue.status, Be = null === ze || void 0 === ze ? void 0 : ze.baf2RxAt.join(","), Ee = !0 === (null === ze || void 0 === ze ? void 0 : ze.baf2RxFormed);
      (0, ye.useEffect)((() => {
        Xe(!1), Te(!1)
      }), [Be, Ee]), (0, ye.useEffect)((() => (be.opened(), () => {
        be.closed()
      })), [be]);
      const ge = void 0 !== ze && iq(ze, zi),
        Oe = ze ? Ee ? RF(ze) : null !== Ue && void 0 !== Ue && Ue.plan ? function(ee, ie) {
          if (ee <= 0) return "off";
          if (ie <= 0) return "alarm";
          const He = 100 * ee / ie;
          return He < 50 ? "calm" : He < bF ? "warm" : He <= 100 ? "hot" : "alarm"
        }(Ue.plan.fuelHeat, Ue.plan.cooling) : "off" : "off",
        de = ze ? qF(ze) : null,
        We = Ue ? Ue.waiting ? eq : Ee ? Zk(Ue.status) : function(ee) {
          var ie, He;
          const {
            status: ye
          } = ee;
          return wk({
            left: ye.baf2RxNeed.reduce(((ee, ie) => {
              let [, He] = ie;
              return ee + He
            }), 0),
            bad: ye.baf2RxBad,
            rods: null !== (ie = null === (He = ee.plan) || void 0 === He ? void 0 : He.rods) && void 0 !== ie ? ie : 0,
            canFill: iq(ye, Ti),
            melted: iq(ye, fi),
            idle: ee.looks.reduce(((ee, ie) => ee + (ie === eF ? 1 : 0)), 0)
          })
        }(Ue) : null,
        te = Je && null !== We && ("ok" === We.tone || "info" === We.tone),
        Ze = ze ? function(ee) {
          const ie = 0 !== (ee.baf2RxFlags & ki),
            He = ee.baf2RxHeat < SU;
          return 0 !== (ee.baf2RxFlags & fi) || He && (ie || !ee.baf2RxFormed) ? null : ee.baf2RxFormed && !ie ? {
            key: `${oF}rxApartScram`,
            params: {}
          } : {
            key: `${oF}rxApartCooling`,
            params: {
              pct: String(SU)
            }
          }
        }(ze) : null,
        [we, De, Pe] = null !== (ie = null === Ue || void 0 === Ue ? void 0 : Ue.dims) && void 0 !== ie ? ie : [0, 0, 0],
        Ae = `${we}\xd7${De}\xd7${Pe}`;
      return (0, gM.jsx)(XK.e, {
        close: Me,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, gM.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, gM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, gM.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, gM.jsx)(Rk, {
                mood: Oe
              }), (0, gM.jsxs)("div", {
                children: [(0, gM.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: Ke(`${Qk}rxTitle`)
                }), Ue && (0, gM.jsxs)("p", {
                  className: Ob()("Baf2RxSubtitle", Ee && (null === de || void 0 === de ? void 0 : de.tone)),
                  children: [Ee && !ge ? (0, gM.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": Ke(`${Qk}rxChangeSize`),
                    onClick: () => {
                      if (!ze) return;
                      const ee = iq(ze, ki);
                      var ie;
                      (ie = {
                        scram: ee,
                        heat: ze.baf2RxHeat
                      }).scram && ie.heat < SU ? Te(!0) : ke(ee ? `${Qk}rxResizeCooling` : `${Qk}rxResizeHot`, {
                        pct: String(SU)
                      })
                    },
                    children: [Ae, " \u270e"]
                  }) : Ae, " \xb7 ", Ke(Ee ? null !== (He = null === de || void 0 === de ? void 0 : de.label) && void 0 !== He ? He : `${Qk}rxState_running` : `${Qk}rxSubPlanShort`)]
                })]
              })]
            }), (0, gM.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Ue && !ge && (0, gM.jsx)(Jk, {
                kind: "reactor",
                busy: Ue.busy.has("apart"),
                whyNot: Ze ? () => {
                  ke(Ze.key, Ze.params)
                } : null,
                apart: () => {
                  be.tap("apart", (() => {
                    be.send("apart")
                  }))
                }
              }), (0, gM.jsx)(zK.i, {
                onClick: Me
              })]
            })]
          }), Ue && We && (0, gM.jsxs)("div", {
            className: "Baf2RxBody",
            children: [Ee ? (0, gM.jsx)(Gk, {
              view: Ue,
              explain: ke,
              preview: Ek(Ue.status)
            }) : (0, gM.jsx)(rk, {
              view: Ue,
              explain: ke
            }), (0, gM.jsx)(rR, {
              text: te ? `${Wk(Ke,We)} ${Ke(`${Qk}rxTapHint`)}` : Wk(Ke, We),
              tone: We.tone,
              explained: Fe
            }), ge ? (0, gM.jsxs)(gM.Fragment, {
              children: [(0, gM.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: Ke(`${Qk}rxNotYours`)
              }), (0, gM.jsx)(bk, {
                status: Ue.status,
                store: be,
                readOnly: !0
              })]
            }) : Ee && !pe ? (0, gM.jsxs)(gM.Fragment, {
              children: [(0, gM.jsx)(ck, {
                view: Ue,
                store: be,
                explain: ke,
                explainOnce: qe
              }), void 0 !== Ue.status.baf2RxLayout && ik(Ue.status) && (0, gM.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, gM.jsx)(bk, {
                  status: Ue.status,
                  store: be,
                  readOnly: !1,
                  bare: !0
                }), (0, gM.jsx)(yk, {
                  status: Ue.status,
                  store: be,
                  busy: Ue.busy.has("fill")
                })]
              })]
            }) : (0, gM.jsxs)(gM.Fragment, {
              children: [(0, gM.jsx)(xk, {
                view: Ue,
                store: be,
                keepSize: Ee ? () => {
                  Xe(!1)
                } : void 0
              }), pF(Ue.dims, Ue.status.baf2RxDims) && (0, gM.jsx)(Lk, {
                need: Ue.status.baf2RxNeed,
                explain: ke
              }), (0, gM.jsx)(bk, {
                status: Ue.status,
                store: be,
                readOnly: !1
              })]
            }), fe && (0, gM.jsx)(Uk, {
              id: "baf2ResizeTitle",
              title: `${Qk}rxResizeConfirmTitle`,
              body: `${Qk}rxResizeConfirmBody`,
              yes: `${Qk}rxChangeSize`,
              cancel: () => {
                Te(!1)
              },
              confirm: () => {
                Te(!1), Xe(!0)
              }
            })]
          })]
        })
      })
    }
    class yq {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(ee) {
        this.view = ee;
        for (const ie of this.listeners) ie()
      }
      get() {
        return this.view
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
    }

    function bq(ee) {
      let {
        commands: ie,
        store: He,
        power: be,
        water: Me,
        reactor: Ke,
        battery: Ue,
        collider: Fe,
        terminal: Je,
        quests: oe,
        tutorial: Re,
        close: ke,
        leave: qe,
        askIslands: fe,
        showCore: Te,
        openSocial: pe
      } = ee;
      const {
        userContext: Xe
      } = (0, PU.b)(), ze = DU.featureFlags.useSocialFeatures && Xe.isLoggedIn(), [Be, Ee] = (0, ye.useState)((() => He.get()));
      (0, ye.useEffect)((() => He.subscribe((() => {
        Ee(He.get())
      }))), [He]);
      const ge = "islands" === (null === Be || void 0 === Be ? void 0 : Be.kind) ? Be.backToCore : void 0;
      return (0, gM.jsxs)(xK.Provider, {
        value: ie,
        children: ["core" === (null === Be || void 0 === Be ? void 0 : Be.kind) && (0, gM.jsx)(qR, {
          view: Be.core,
          close: ke,
          askIslands: fe
        }), "dropMap" === (null === Be || void 0 === Be ? void 0 : Be.kind) && (0, gM.jsx)(XR, {
          message: Be.dropMap,
          quests: oe,
          close: ke,
          leave: qe
        }), "islands" === (null === Be || void 0 === Be ? void 0 : Be.kind) && (0, gM.jsx)(cR, {
          message: Be.islands,
          arrivedAtMs: Be.arrivedAtMs,
          close: ge ? () => {
            Te(ge)
          } : ke,
          leave: qe,
          openSocial: ze ? pe : null
        }), "quests" === (null === Be || void 0 === Be ? void 0 : Be.kind) && (0, gM.jsx)(Ao, {
          store: oe,
          tutorial: Re,
          close: ke
        }), "transfer" === (null === Be || void 0 === Be ? void 0 : Be.kind) && (0, gM.jsx)(rJ, {
          message: Be.transfer,
          arrivedAtMs: Be.arrivedAtMs,
          close: ke,
          leave: qe
        }), "power" === (null === Be || void 0 === Be ? void 0 : Be.kind) && (0, gM.jsx)(ZK, {
          store: be,
          close: ke
        }), "water" === (null === Be || void 0 === Be ? void 0 : Be.kind) && (0, gM.jsx)(RU, {
          store: Me,
          close: ke
        }), "reactor" === (null === Be || void 0 === Be ? void 0 : Be.kind) && (0, gM.jsx)(Hq, {
          store: Ke,
          close: ke
        }), "battery" === (null === Be || void 0 === Be ? void 0 : Be.kind) && (0, gM.jsx)(vk, {
          store: Ue,
          close: ke
        }), "collider" === (null === Be || void 0 === Be ? void 0 : Be.kind) && (0, gM.jsx)(kJ, {
          store: Fe,
          close: ke
        }), "terminal" === (null === Be || void 0 === Be ? void 0 : Be.kind) && (0, gM.jsx)(sR, {
          store: Je,
          close: ke,
          send: ee => {
            ie.send(ee)
          }
        })]
      })
    }
    var Mq = He(39291);

    function Kq(ee, ie) {
      return ee.distSq - ie.distSq
    }
    class Uq {
      constructor() {
        this.list = [], this.pool = []
      }
      add(ee, ie, He, ye) {
        let be = this.pool[this.list.length];
        be || (be = {
          x: 0,
          y: 0,
          distSq: 0,
          element: ie,
          liftRem: He,
          dot: ye
        }, this.pool.push(be)), be.x = ee.x, be.y = ee.y, be.distSq = ee.distSq, be.element = ie, be.liftRem = He, be.dot = ye, this.list.push(be)
      }
    }
    class Fq {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = ee, this.sizes = new WeakMap, this.observer = new ResizeObserver((ee => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const ie of ee) {
            const ee = ie.borderBoxSize[0];
            "dot" !== ie.target.dataset.crowded && 0 !== ee.inlineSize && 0 !== ee.blockSize && this.sizes.set(ie.target, {
              width: ee.inlineSize,
              height: ee.blockSize
            })
          }
        })), this.remPx = 16, this.KR = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.jB = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.jB)
      }
      observe(ee) {
        this.observer.observe(ee)
      }
      unobserve(ee) {
        this.observer.unobserve(ee)
      }
      run(ee) {
        const ie = ee.list;
        ie.sort(Kq);
        const He = this.pxPerVw,
          ye = this.pxPerVh;
        this.KR.length = 0, this.hud && this.KR.push(...this.hud.boxes(performance.now()));
        for (const Me of ie) {
          var be;
          const ee = this.sizes.get(Me.element);
          let ie = "no";
          if (ee && ee.width > 0) {
            const be = Me.x * He,
              Ke = Me.y * ye - Me.liftRem * this.remPx;
            this.fit(be, Ke, ee.width, ee.height) || (ie = Me.dot && this.fit(be, Ke, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (be = Me.element.dataset.crowded) && void 0 !== be ? be : "no") !== ie && ("no" === ie ? delete Me.element.dataset.crowded : Me.element.dataset.crowded = ie), "hidden" !== ie && (0, Mq.c)(Me.element, Me.x, Me.y)
        }
        ie.length = 0
      }
      fit(ee, ie, He, ye) {
        const be = ee - He / 2,
          Me = ee + He / 2,
          Ke = ie - ye,
          Ue = this.KR;
        for (let Fe = 0; Fe < Ue.length; Fe += 4)
          if (be < Ue[Fe + 1] - 2 && Me > Ue[Fe] + 2 && Ke < Ue[Fe + 3] - 2 && ie > Ue[Fe + 2] + 2) return !1;
        return Ue.push(be, Me, Ke, ie), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.jB)
      }
    }
    const Jq = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class oq {
      constructor() {
        this.cards = Jq.map((ee => document.getElementsByClassName(ee))), this.watched = Jq.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(ee) {
        ee - this.refreshedAt > 1e3 && (this.refreshedAt = ee, this.stale = !0);
        for (let He = 0; He < this.cards.length; He++) {
          var ie;
          const ee = null !== (ie = this.cards[He][0]) && void 0 !== ie ? ie : null;
          ee !== this.watched[He] && this.watch(He, ee)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let ee = 0; ee < this.watched.length; ee++) this.watch(ee, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const ee = this.list;
        ee.length = 0;
        for (const ie of this.watched) {
          if (!ie || ie.closest(".NoRoom")) continue;
          const He = ie.getBoundingClientRect();
          let ye = He.top,
            be = He.bottom;
          if (ie === this.watched[0] && this.hud) {
            const ee = this.hud.getBoundingClientRect();
            ye = Math.max(ye, ee.top), be = Math.min(be, ee.bottom)
          }
          He.width > 0 && be > ye && ee.push(He.left, He.right, ye, be)
        }
      }
      watch(ee, ie) {
        const He = this.watched[ee];
        var ye, be;
        (He && this.sizes.unobserve(He), this.watched[ee] = ie, this.stale = !0, ie && this.sizes.observe(ie), 0 === ee) && (null === (ye = this.hud) || void 0 === ye || ye.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (be = null === ie || void 0 === ie ? void 0 : ie.closest(".Baf2QuestHud")) && void 0 !== be ? be : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var Rq = He(39293);
    class kq {
      constructor(ee) {
        this.onElement = ee, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(ee) {
        const ie = [];
        for (let He = 0; He + 4 < ee.length; He += 5) {
          const ye = [ee[He], ee[He + 1], ee[He + 2]];
          ie.push({
            key: ye.join(","),
            pos: ye,
            status: yb[ee[He + 3]],
            kind: Di[ee[He + 4]]
          })
        }
        this.markers = ie, this.keys = new Set(ie.map((ee => {
          let {
            key: ie
          } = ee;
          return ie
        }))), this.notify()
      }
      covers(ee) {
        return this.keys.has(ee)
      }
      get() {
        return this.markers
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      bind(ee) {
        let ie = this.refs.get(ee);
        return ie || (ie = ie => {
          const He = this.elements.get(ee);
          var ye, be;
          He && (null === (ye = this.onElement) || void 0 === ye || ye.call(this, He, !1));
          ie ? (this.elements.set(ee, ie), null === (be = this.onElement) || void 0 === be || be.call(this, ie, !0)) : (this.elements.delete(ee), this.refs.delete(ee))
        }, this.refs.set(ee, ie)), ie
      }
      onAfterRender(ee, ie, He) {
        for (const ye of this.markers) {
          const be = this.elements.get(ye.key);
          if (!be) continue;
          const Me = (0, Rq.b)(be, ee, ie, ye.pos, 1.05, 24);
          Me && He.add(Me, be, .45, !0)
        }
      }
      notify() {
        for (const ee of this.listeners) ee()
      }
    }
    const qq = {
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
    const fq = (0, ye.memo)((function(ee) {
        let {
          status: ie,
          kind: He,
          bindRef: ye
        } = ee;
        const {
          t: be
        } = (0, Zb.v)(), Me = function(ee, ie) {
          var He;
          if ("noFuel" === ee) {
            var ye, be;
            const ee = null === (ye = ci[ie]) || void 0 === ye || null === (be = ye.fuels) || void 0 === be ? void 0 : be.find((ee => MH.includes(ee)));
            return null !== ee && void 0 !== ee ? ee : qq.noFuel
          }
          return void 0 !== (null === (He = ci[ie]) || void 0 === He ? void 0 : He.cryoMade) ? "noOutlet" === ee ? "Fluid Pipe" : "noInput" === ee ? "Biomass" : qq[ee] : qq[ee]
        }(ie, He);
        return (0, gM.jsxs)("div", {
          className: Ob()("Baf2StallMarker", ie),
          ref: ye,
          hidden: !0,
          children: [Me && (0, gM.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, gM.jsx)(Db.c, {
              itemName: Me,
              amount: 0
            })
          }), (0, gM.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === ie ? "?" : "!"
          }), (0, gM.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: be(`buildAFactory2Game:stallTag_${ie}`)
          })]
        })
      })),
      Tq = (0, ye.memo)((function(ee) {
        let {
          controller: ie
        } = ee;
        const [He, be] = (0, ye.useState)((() => ie.get()));
        return (0, ye.useEffect)((() => (be(ie.get()), ie.subscribe((() => {
          be(ie.get())
        })))), [ie]), (0, gM.jsx)("div", {
          className: "Baf2StallMarkers",
          children: He.map((ee => (0, gM.jsx)(fq, {
            status: ee.status,
            kind: ee.kind,
            bindRef: ie.bind(ee.key)
          }, ee.key)))
        })
      })),
      pq = XH.l + 150;
    class Xq {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(ee, ie) {
        const He = ie - ee;
        null === this.offset || He < this.offset ? this.offset = He : this.offset = Math.min(He, this.offset + .02 * (ie - this.sampledAt)), this.sampledAt = ie
      }
      toLocal(ee) {
        var ie;
        return ee + (null !== (ie = this.offset) && void 0 !== ie ? ie : 0) + pq
      }
    }
    var zq = He(39301);
    const Bq = 15 * Math.PI / 180,
      Eq = Math.SQRT2,
      gq = [4, 2];

    function Oq(ee, ie) {
      const He = [1 / 0, 1 / 0, 1 / 0],
        ye = [-1 / 0, -1 / 0, -1 / 0];
      for (const Fe of ee)
        for (let ee = 0; ee < 3; ee++) He[ee] = Math.min(He[ee], Fe[ee]), ye[ee] = Math.max(ye[ee], Fe[ee]);
      const be = (He[0] + ye[0]) / 2,
        Me = (He[1] + ye[1]) / 2,
        Ke = (He[2] + ye[2]) / 2;
      let Ue = 0;
      for (const Fe of ee) Ue = Math.max(Ue, Math.hypot(Fe[0] - be, Fe[1] - Me, Fe[2] - Ke));
      return {
        x: be,
        y: Me,
        z: Ke,
        r: Ue + ie
      }
    }

    function dq(ee, ie, He) {
      const ye = ie.x - ee.x,
        be = ie.y - ee.y,
        Me = ie.z - ee.z,
        Ke = Math.sqrt(ye * ye + be * be + Me * Me);
      if (Ke <= ie.r + 8) return 1;
      const Ue = ie.r / Ke,
        Fe = Math.sqrt(1 - Ue * Ue),
        Je = Fe < -ee.cosHalf,
        oe = (ye * ee.dx + be * ee.dy + Me * ee.dz) / Ke;
      if (!Je && oe < ee.cosHalf * Fe - ee.sinHalf * Ue) return 0;
      const Re = He * Eq * ee.frameMs * ee.pxPerBlock / (Ke - ie.r);
      for (let ke = 0; ke < gq.length; ke++)
        if (Re * gq[ke] <= 1) return gq[ke];
      return 1
    }

    function Wq(ee, ie) {
      return {
        name: ee,
        at: ie,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const tq = [0, 0, 0];

    function Zq(ee, ie, He) {
      let [, ye, be, Me, Ke, Ue] = ie;
      const Fe = XH.h * (null !== Ke && void 0 !== Ke ? Ke : 1),
        Je = [];
      for (let qe = 0; qe < ye.length; qe += 3) Je.push([ye[qe] + .5, ye[qe + 1] + .65, ye[qe + 2] + .5]);
      const oe = [];
      for (let qe = 0; qe < Je.length - 1; qe++) {
        const [ee, ie] = [Je[qe], Je[qe + 1]];
        oe.push([(ee[0] + ie[0]) / 2, (ee[1] + ie[1]) / 2, (ee[2] + ie[2]) / 2])
      }
      const Re = Je.slice(1, -1),
        ke = new Uint8Array(Re.length);
      for (const qe of null !== Ue && void 0 !== Ue ? Ue : []) ke[qe >> 1] |= 1 & qe ? 2 : 1;
      return {
        island: ee,
        length: Re.length,
        loop: Me,
        cellsPerMs: Fe,
        edges: oe,
        nf: Re,
        bounds: Oq([...oe, ...Re], .3),
        changed: !0,
        culled: !1,
        hide: ke,
        items: be.map((ee => {
          let [ie, ye] = ee;
          return Wq(ie, (0, XH.B)(ie, ye, He, Fe).at)
        }))
      }
    }

    function wq(ee, ie) {
      const {
        items: He
      } = ee;
      if (0 === He.length) return;
      const ye = ee.length / ee.cellsPerMs,
        be = Math.floor((ie - He[0].at) / ye) - 1;
      if (be > 0)
        for (const Me of He) Me.at += be * ye
    }

    function Dq(ee, ie) {
      const He = Math.min(Math.floor(ie), ee.length - 1),
        ye = ee.hide[He];
      return 0 !== ye && 0 !== (ye & (ie - He < .5 ? 1 : 2))
    }

    function Pq(ee, ie) {
      const He = Math.min(Math.floor(ie), ee.length - 1),
        ye = ie - He,
        be = ye < .5,
        Me = be ? ee.edges[He] : ee.nf[He],
        Ke = be ? ee.nf[He] : ee.edges[He + 1],
        Ue = be ? 2 * ye : 2 * ye - 1;
      tq[0] = Me[0] + (Ke[0] - Me[0]) * Ue, tq[1] = Me[1] + (Ke[1] - Me[1]) * Ue, tq[2] = Me[2] + (Ke[2] - Me[2]) * Ue
    }
    const Aq = Math.PI / 4;
    class Yq {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Xq, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.jB = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(ee) {
        const ie = performance.now();
        this.clock.sample(ee.baf2BeltLinesAt, ie), this.queue(ee.baf2BeltLinesAt, ee, 0, null, null, 0), this.applyDue(ie)
      }
      onMoves(ee) {
        const ie = performance.now(),
          He = ee.baf2BeltMovesAt;
        this.clock.sample(He, ie);
        for (const [ye, be, Me, Ke] of ee.baf2BeltMoveList) null === be ? this.queue(He - Me, null, ye, null, null, null !== Ke && void 0 !== Ke ? Ke : 0) : this.queue(He - Me, null, ye, be, null !== Ke && void 0 !== Ke ? Ke : null, 0);
        this.applyDue(ie)
      }
      start(ee) {
        this.pool = new zq.c(ee, {
          scale: .3,
          yaw: Aq
        }, 64), this.jB(), window.addEventListener("resize", this.jB)
      }
      onAfterRender(ee) {
        const {
          pool: ie
        } = this;
        if (!ie) return;
        const He = performance.now(),
          ye = He - this.lastRenderAt;
        this.lastRenderAt = He, ye < 100 && (this.frameMs += .1 * (ye - this.frameMs));
        const be = He + this.frameMs;
        this.applyDue(be);
        const Me = ee.cameraPosition,
          Ke = ie.follow(Me);
        this.setView(ee, Me);
        const Ue = this.frame++;
        for (let Fe = 0; Fe < this.shown.length; Fe++) {
          const ee = this.shown[Fe],
            He = dq(this.view, ee.bounds, ee.cellsPerMs),
            ye = ee.culled && 0 !== He;
          if (ee.culled = 0 === He, !Ke && !ee.changed && !ye && (0 === He || (Ue + Fe) % He !== 0)) continue;
          ee.changed = !1, ee.loop && (wq(ee, be), (0, XH.w)(ee.items, ee.length, be, ee.cellsPerMs));
          let Me = ee.length;
          for (let Ue = 0; Ue < ee.items.length; Ue++) {
            const He = ee.items[Ue],
              ye = (0, XH.E)(He.at, Me, be, ee.cellsPerMs);
            if (Me = ye - XH.q, Dq(ee, ye)) {
              null === He.kind || He.hidden || (He.kind.hide(He.slot), He.hidden = !0);
              continue
            }
            let Fe = He.kind;
            if (null === Fe) {
              if (Fe = ie.kindOf(He.name), null === Fe) continue;
              He.kind = Fe, He.slot = Fe.take(), He.hidden = !0, He.drawn = NaN
            } else if (ye === He.drawn && !He.hidden && !Ke) continue;
            Pq(ee, ye), Fe.write(He.slot, tq[0], tq[1], tq[2]), He.hidden = !1, He.drawn = ye
          }
        }
        ie.commit()
      }
      dispose() {
        var ee;
        window.removeEventListener("resize", this.jB), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (ee = this.pool) || void 0 === ee || ee.dispose(), this.pool = null
      }
      setView(ee, ie) {
        const {
          cameraDir: He,
          lastDir: ye
        } = this, be = ee.cameraDirection;
        for (let oe = 0; oe < 3; oe++) ye[oe] = He[oe], He[oe] = be[oe];
        const Me = He[0] * ye[0] + He[1] * ye[1] + He[2] * ye[2],
          Ke = Number.isNaN(Me) ? 0 : Math.acos(Math.min(1, Math.max(-1, Me))),
          {
            width: Ue,
            height: Fe
          } = this,
          Je = ee.tanHalfFovX;
        ! function(ee, ie, He, ye, be, Me, Ke) {
          let Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          ee.x = ie[0], ee.y = ie[1], ee.z = ie[2], ee.dx = He[0], ee.dy = He[1], ee.dz = He[2];
          const Fe = Math.min(Math.PI, Math.atan(Math.sqrt(ye * ye + be * be)) + Bq + Ue);
          ee.cosHalf = Math.cos(Fe), ee.sinHalf = Math.sin(Fe), ee.pxPerBlock = Me / (2 * be), ee.frameMs = Ke
        }(this.view, ie, He, Je, Je * Fe / Ue, Fe * window.devicePixelRatio, this.frameMs, Ke)
      }
      queue(ee, ie, He, ye, be, Me) {
        const Ke = Math.max(this.clock.toLocal(ee), this.lastPendingAt);
        this.lastPendingAt = Ke, this.pending.push({
          at: Ke,
          lines: ie,
          line: He,
          name: ye,
          pos: be,
          idx: Me
        })
      }
      applyDue(ee) {
        const {
          pending: ie
        } = this;
        for (; this.pendingHead < ie.length && ie[this.pendingHead].at <= ee;) {
          const ee = ie[this.pendingHead++];
          if (ee.lines) this.applyLines(ee.lines, ee.at), ee.lines = null;
          else {
            const ie = this.lines.get(ee.line);
            ie && this.applyMove(ie, ee, ee.at)
          }
        }
        this.pendingHead === ie.length ? (ie.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > ie.length && (ie.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(ee, ie) {
        this.clearIsland(ee.baf2BeltIsland);
        for (const He of ee.baf2BeltLineList) this.lines.set(He[0], Zq(ee.baf2BeltIsland, He, ie));
        this.shown = [...this.lines.values()]
      }
      applyMove(ee, ie, He) {
        let {
          name: ye,
          pos: be,
          idx: Me
        } = ie;
        ee.changed = !0, ee.loop && (wq(ee, He), (0, XH.w)(ee.items, ee.length, He, ee.cellsPerMs)), null !== ye && null !== be ? (0, XH.z)(ee.items, ee.length, Wq(ye, He), be, He, ee.cellsPerMs) : null !== ye ? ee.items.push(Wq(ye, He)) : ee.items.length > Me && this.release((0, XH.I)(ee.items, ee.length, He, ee.cellsPerMs, Me))
      }
      clearIsland(ee) {
        for (const [ie, He] of this.lines)
          if (He.island === ee) {
            for (const ee of He.items) this.release(ee);
            this.lines.delete(ie)
          }
      }
      release(ee) {
        null !== ee.kind && (ee.kind.release(ee.slot), ee.kind = null, ee.slot = -1, ee.hidden = !0, ee.drawn = NaN)
      }
    }
    var Vq = He(37420),
      aq = He(39309);

    function cq(ee) {
      let {
        depth: ie,
        store: He,
        t: be
      } = ee;
      const Me = function(ee) {
        const [ie, He] = (0, ye.useState)(ee.lastPlayerY());
        return (0, QJ.f)(xb, He), (0, ye.useEffect)((() => {
          He(ee.lastPlayerY())
        }), [ee]), ie
      }(He);
      if (null === Me) return null;
      const [Ke, Ue] = ie, Fe = Me > Ke ? Ke : null !== Ue && Me < Ue ? Ue : null, Je = {
        y: pM(Me),
        target: null === Fe ? "" : pM(Fe)
      };
      return (0, gM.jsx)("span", {
        className: Ob()("Baf2QuestDepth", {
          Reached: null === Fe
        }),
        children: be(`${yo}${null===Fe?"questDepthReached":"questDepth"}`, Je)
      })
    }

    function xq(ee) {
      let {
        also: ie,
        view: He,
        t: ye
      } = ee;
      return (0, gM.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, gM.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, gM.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, gM.jsx)("strong", {
            children: ye(`${yo}questAlsoDownHere`)
          }), (0, gM.jsx)("span", {
            className: "Baf2QuestChips",
            children: ie.map((ee => {
              let [ie, be, Me, Ke] = ee;
              return (0, gM.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": ye(`${yo}questAlsoItem`, {
                  item: Mo(ye, He.itemNames[ie], ie),
                  have: String(be),
                  need: String(Me)
                }),
                children: [(0, gM.jsx)(Fo, {
                  item: ie
                }), (0, gM.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${be}/${Me}`
                }), null !== Ke && (0, gM.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: ye(`${yo}questAlsoDepth`, {
                    y: pM(Ke)
                  })
                })]
              }, ie)
            }))
          })]
        })]
      })
    }
    var Lq = He(3760);

    function Cq(ee) {
      let {
        expanded: ie,
        inventoryOpen: He,
        children: be
      } = ee;
      const Me = (0, ye.useRef)(null);
      return (0, ye.useEffect)((() => {
        const ee = Me.current,
          ie = null === ee || void 0 === ee ? void 0 : ee.closest(".RightElements"),
          ye = null === ee || void 0 === ee ? void 0 : ee.firstElementChild;
        if (!ee || !ie || !ye) return;
        return (0, aq.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [ie, ye], (() => {
          const be = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === be.length) return;
          const Me = Math.max(...be.map((ee => ee.getBoundingClientRect().bottom))),
            Ke = ie.getBoundingClientRect(),
            Ue = He ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (Ue) {
            const ie = parseFloat(getComputedStyle(ye).marginLeft) + parseFloat(getComputedStyle(ye).marginRight),
              He = Ke.right - Ue.getBoundingClientRect().right - 8 - ie;
            ee.style.setProperty("--baf2-quest-room", `${He}px`), ee.classList.toggle("NoRoom", He < 150)
          } else ee.style.removeProperty("--baf2-quest-room"), ee.classList.remove("NoRoom");
          const Fe = Me - Ke.top + 8,
            Je = function(ee, ie, He) {
              const ye = ie.getBoundingClientRect(),
                be = ee.getBoundingClientRect(),
                Me = (0, Lq.f)(be.left, be.right, ye.top + He);
              if (null !== Me && Me < ye.bottom) return Me - ye.top;
              return ye.height - (parseFloat(getComputedStyle(ie).paddingBottom) || 0)
            }(ee, ie, Fe) - 8,
            oe = window.innerHeight / 2 - Ke.top,
            {
              top: Re,
              maxHeight: ke
            } = function(ee, ie, He, ye, be) {
              const Me = Math.min(He, Math.max(0, ie - ee)),
                Ke = be ? ee : Math.max(ee, Math.min(ye - Me / 2, ie - Me));
              return {
                top: Ke,
                maxHeight: Math.max(0, ie - Ke)
              }
            }(Fe, Je, function(ee) {
              const ie = ee.firstElementChild,
                He = ie ? ie.scrollHeight - ie.clientHeight : 0;
              return ee.getBoundingClientRect().height + Math.max(0, He)
            }(ye), oe, EM());
          ee.style.top = `${Re}px`, ee.style.maxHeight = `${ke}px`
        }))
      }), [He]), (0, gM.jsx)("div", {
        ref: Me,
        className: Ob()("Baf2QuestHud", {
          Expanded: ie
        }),
        children: be
      })
    }

    function vq(ee) {
      let {
        amount: ie,
        t: He
      } = ee;
      return (0, gM.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, gM.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, gM.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: He(`${yo}questStepsDone`, {
            amount: String(ie)
          })
        })]
      })
    }

    function uq(ee) {
      let {
        pulse: ie
      } = ee;
      return 0 === ie ? null : (0, gM.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, ie)
    }

    function mq(ee) {
      var ie;
      let {
        store: He
      } = ee;
      const be = (0, QJ.j)(cb, He.get()),
        [Me, Ke] = (0, ye.useState)(!1),
        {
          t: Ue
        } = (0, Zb.v)(),
        Fe = (0, zM.f)(BM),
        {
          openInGameMenuName: Je,
          openEverythingMenuName: oe
        } = (0, Bb.m)(["openInGameMenuName", "openEverythingMenuName"]),
        Re = "inventory" === Je && null === oe,
        ke = null !== Je && !Re || null !== oe;
      if (! function(ee) {
          return null !== ee.name || null !== ee.side
        }(be) || ke || "off" === be.tutorial) return null;
      const qe = lb(be.rows),
        fe = qe.filter((ee => ee.done)).length,
        Te = function(ee, ie) {
          const He = jb(ee);
          let ye = 0;
          return ee.filter(((ee, be) => !!ee.justFinished || !(ee.done || be < He || ye > ie) && (ye++, !0)))
        }(be.rows, Fe ? 0 : 2),
        pe = Fe ? Te : function(ee, ie) {
          const He = ie.filter((ee => !ee.justFinished));
          if (He.length < 2) return [...ie];
          const ye = ee.indexOf(He[0]),
            be = ee.indexOf(He[He.length - 1]),
            Me = new Set(lb(ee));
          return ee.filter(((ee, He) => ie.includes(ee) || ee.done && Me.has(ee) && He > ye && He < be))
        }(be.rows, Te),
        Xe = Me ? be.rows : pe,
        ze = Me || Fe ? [] : function(ee, ie) {
          const He = new Array(ie.length + 1).fill(0),
            ye = new Set(lb(ee));
          let be = 0;
          for (const Me of ee) be < ie.length && Me === ie[be] ? be++ : Me.done && ye.has(Me) && He[be]++;
          return He
        }(be.rows, pe),
        Be = Me || pe.length < be.rows.length || null !== be.reward,
        Ee = mb(be),
        ge = Ee ? Ue(`${yo}questLineComplete`) : be.tier ? Ro(Ue, be.tier) : Ue(`${yo}currentQuest`),
        Oe = function(ee) {
          var ie, He;
          if (mb(ee)) return null;
          const ye = null === (ie = ee.chapters) || void 0 === ie ? void 0 : ie.find((ie => {
            let [He] = ie;
            return He === ee.tier
          }));
          if (!ye) return null;
          const be = ye[1].filter((ee => !ee[4]));
          if (0 === be.length) return null;
          const Me = null === (He = ee.name) || void 0 === He ? void 0 : He[0],
            Ke = ee => be.findIndex((ie => ie[0] === Me && (!ee || !ie[3]))),
            Ue = Ke(!0),
            Fe = Ue >= 0 ? Ue : Ke(!1);
          if (Fe >= 0) return [Fe + 1, be.length];
          const Je = be.filter((ee => ee[3])).length;
          return [Math.min(Je + 1, be.length), be.length]
        }(be);
      return (0, gM.jsx)(Vq.d, {
        placement: "topRight",
        children: (0, gM.jsx)(Cq, {
          expanded: Me,
          inventoryOpen: Re,
          children: (0, gM.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: bo,
            children: [null !== be.name && (0, gM.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, gM.jsx)(uq, {
                pulse: be.pulse
              }), (0, gM.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, gM.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [ge, Oe && (0, gM.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": Ue(`${yo}questPlaceLabel`, {
                      n: String(Oe[0]),
                      total: String(Oe[1])
                    }),
                    children: Ue(`${yo}questPlace`, {
                      n: String(Oe[0]),
                      total: String(Oe[1])
                    })
                  }), be.tier && be.core && !Ee && (0, gM.jsx)(ko, {
                    core: be.core,
                    t: Ue
                  })]
                })
              }), (0, gM.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Ue(`${yo}${be.name[0]}`, Ko(be.name[1]))
              }), (qe.length > 1 || Be) && (0, gM.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [qe.length > 1 && (0, gM.jsx)(qo, {
                  rows: qe,
                  t: Ue
                }), Be && (0, gM.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": Me,
                  onClick: () => {
                    Ke(!Me)
                  },
                  children: [(0, gM.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: Ue(`${yo}questStepsToggle`, {
                      done: String(fe),
                      total: String(qe.length)
                    })
                  }), (0, gM.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: Me ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, gM.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [Xe.map(((ee, ie) => {
                  var Me;
                  const Ke = ee.current && be.depth;
                  return (0, gM.jsxs)(ye.Fragment, {
                    children: [(null !== (Me = ze[ie]) && void 0 !== Me ? Me : 0) > 0 && (0, gM.jsx)(vq, {
                      amount: ze[ie],
                      t: Ue
                    }), (0, gM.jsx)(fo, {
                      row: ee,
                      view: be,
                      t: Ue,
                      extra: Ke && (0, gM.jsx)(cq, {
                        depth: Ke,
                        store: He,
                        t: Ue
                      })
                    })]
                  }, ee.id)
                })), (null !== (ie = ze[Xe.length]) && void 0 !== ie ? ie : 0) > 0 && (0, gM.jsx)(vq, {
                  amount: ze[Xe.length],
                  t: Ue
                }), be.also.length > 0 && (0, gM.jsx)(xq, {
                  also: be.also,
                  view: be,
                  t: Ue
                })]
              }), Me && be.reward && (0, gM.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [Ue(`${yo}questReward`), (0, gM.jsx)(Fo, {
                  item: be.reward
                }), Mo(Ue, be.itemNames[be.reward], be.reward)]
              })]
            }), be.side && (0, gM.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [vb(be, Date.now()) && (0, gM.jsx)(uq, {
                pulse: be.sideCameUpAt
              }), (0, gM.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: Ue(`${yo}questSide`)
              }), (0, gM.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: Ue(`${yo}${be.side.name[0]}`, Ko(be.side.name[1]))
              }), (0, gM.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, gM.jsx)(fo, {
                  row: be.side.row,
                  view: be,
                  t: Ue
                })
              })]
            })]
          })
        })
      })
    }
    const lq = "baf2ToastView";
    class Sq {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = ee, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: ee,
          holdMs: ie
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const ee = this.dropCovered();
          ee && this.show(ee.message, ee.holdMs)
        }), 250));
        const He = this.dropCovered();
        null !== He && (He.holdMs > 0 || "baf2ToastCelebrate" === He.message.baf2ToastStyle) && "baf2ToastCelebrate" !== ee.baf2ToastStyle && this.show(He.message, He.holdMs);
        const ye = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== ee.baf2ToastStyle && ye > 0) return this.pending = {
          message: ee,
          holdMs: ie
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const ee = this.pending;
          this.pending = null, ee && this.present(ee.message, ee.holdMs)
        }), ye));
        this.present(ee, ie)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(ee, ie) {
        this.clearTimers(), this.pending = null;
        const He = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: ee.baf2ToastText,
          style: ee.baf2ToastStyle,
          swapped: He,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === ee.baf2ToastStyle ? 1500 : ie), this.yR();
        const ye = Math.min(8e3, Math.max(1e3, ee.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), ye)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.yR(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.yR()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const ee = this.covering;
        return this.covering = null, ee
      }
      yR() {
        Vb.h.yR(lq, this.view, !0)
      }
    }
    var nq = He(77);
    const jq = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function sq(ee) {
      let {
        store: ie
      } = ee;
      const He = (0, QJ.j)(lq, ie.get()),
        {
          openInGameMenuName: ye,
          openEverythingMenuName: be
        } = (0, Bb.m)(["openInGameMenuName", "openEverythingMenuName"]),
        Me = He && (0, gM.jsxs)("div", {
          className: Ob()("Baf2Toast", jq[He.style], {
            Swapped: He.swapped,
            Leaving: He.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === He.style && (0, gM.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, gM.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, gM.jsx)(Pb.e, {
              text: He.text
            })
          })]
        }, He.id);
      return null !== ye && null === be ? (0, nq.createPortal)((0, gM.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: Me
      }), document.body) : (0, gM.jsx)(Vq.d, {
        children: Me
      })
    }
    const Iq = "baf2AreaView";
    class hq {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.lJ = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.lJ = null
      }
      arrive(ee, ie) {
        ie && function(ee) {
          return "home" === ee.baf2AreaPlace && void 0 !== ee.baf2AreaNameText
        }(ee) ? this.lJ = ee : this.show(ee)
      }
      release() {
        const ee = this.lJ;
        null !== ee && this.show(ee)
      }
      show(ee) {
        this.clearTimer(), this.lJ = null;
        const ie = void 0 === ee.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: ee,
          ms: ie
        }, this.yR(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.yR()
        }), ie)
      }
      dispose() {
        this.clearTimer(), this.lJ = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      yR() {
        Vb.h.yR(Iq, this.view, !0)
      }
    }

    function Nq(ee) {
      var ie;
      let {
        store: He
      } = ee;
      const {
        t: ye
      } = (0, Zb.v)(), be = (0, QJ.j)(Iq, He.get());
      if (!be) return null;
      const {
        area: Me
      } = be, Ke = Me.baf2AreaResetMinutes;
      return (0, gM.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": Me.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${be.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, gM.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), Me.baf2AreaHeading && (0, gM.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: ye(Me.baf2AreaHeading)
        }), (0, gM.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (ie = Me.baf2AreaNameText) && void 0 !== ie ? ie : ye(Me.baf2AreaName)
        }), Me.baf2AreaNote && (0, gM.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: ye(Me.baf2AreaNote)
        }), void 0 !== Ke && (0, gM.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: ye("buildAFactory2Game:areaWildsReset", {
            time: XM(ye, 60 * Ke)
          })
        })]
      }, be.id)
    }
    const Gq = "baf2GearGauge";
    class rq {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      OE(ee) {
        var ie;
        if (this.clearLinger(), null === ee.gearPowerKind) return void this.set(null);
        const He = "jetpack" === ee.gearPowerKind && (ye = ee.gearChargeState, be = ee.gearCharge, "flying" === ye || "charging" === ye || "outOfCharge" === ye || "ceiling" === ye || "offPlot" === ye || "noPower" === ye && be <= 0);
        var ye, be;
        const Me = !0 === (null === (ie = this.view) || void 0 === ie ? void 0 : ie.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          Ke = He || "jetpack" === ee.gearPowerKind && Me;
        this.set({
          gauge: ee,
          jetShown: Ke
        }), Ke && !He && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(ee) {
        this.view = ee, Vb.h.yR(Gq, ee, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const Qq = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function ef(ee) {
      let {
        store: ie
      } = ee;
      const He = (0, QJ.j)(Gq, ie.get());
      return He ? "jetpack" === He.gauge.gearPowerKind ? (0, gM.jsx)(Hf, {
        view: He
      }) : (0, gM.jsx)(yf, {
        gauge: He.gauge
      }) : null
    }

    function Hf(ee) {
      let {
        view: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)(), {
        gauge: ye
      } = ie, be = ye.gearChargeMax > 0 ? Math.max(0, Math.min(1, ye.gearCharge / ye.gearChargeMax)) : 0, Me = Qq[ye.gearChargeState], Ke = Me ? He(Me) : null;
      return (0, gM.jsxs)("div", {
        className: Ob()("Baf2JetArc", {
          Shown: ie.jetShown,
          Low: be < .2,
          Warm: be >= .2 && be < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - be)
        },
        "aria-hidden": !ie.jetShown,
        children: [(0, gM.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, gM.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: bf,
            pathLength: 100
          }), (0, gM.jsx)("path", {
            className: "Baf2JetArcFill",
            d: bf,
            pathLength: 100
          })]
        }), (0, gM.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * be), "%"]
        }), Ke && (0, gM.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: Ke
        })]
      })
    }

    function yf(ee) {
      let {
        gauge: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)(), ye = function(ee, ie) {
        switch (ie.gearPowerKind) {
          case "skyPack":
            return ee("buildAFactory2Game:gearSkyPack", {
              charge: ie.gearCharge,
              max: ie.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return ee("buildAFactory2Game:gearIslandDraw", {
              power: Ge(ie.gearIslandPower),
              cost: Ge(ie.gearCostPerUse)
            });
          case "barrier":
            return ee("buildAFactory2Game:gearBarrier", {
              shield: Math.round(ie.gearCharge),
              max: ie.gearChargeMax,
              power: Ge(ie.gearIslandPower)
            });
          default:
            return null
        }
      }(He, ie);
      return null === ye ? null : (0, gM.jsx)(Vq.d, {
        children: (0, gM.jsx)("div", {
          className: Ob()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === ie.gearChargeState || "outOfCharge" === ie.gearChargeState
          }),
          role: "status",
          children: ye
        })
      })
    }
    const bf = (() => {
      const ee = ee => {
        const ie = ee * Math.PI / 180;
        return `${(40*Math.cos(ie)).toFixed(2)} ${(40*Math.sin(ie)).toFixed(2)}`
      };
      return `M ${ee(160)} A 40 40 0 1 1 ${ee(380)}`
    })();
    class Mf {
      constructor(ee) {
        this.onElement = ee, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      OE(ee) {
        let ie = ee.baf2LabelsReset || ee.baf2LabelsIsland !== this.island;
        ie && (this.labels.clear(), this.island = ee.baf2LabelsIsland);
        for (const [He, ye, be, Me, Ke] of ee.baf2LabelsList) {
          const ee = `${He},${ye},${be}`,
            Ue = this.labels.get(ee);
          null === Me ? ie = this.labels.delete(ee) || ie : Ue && Ue.item === Me && (Ue.count === Ke || Ue.count >= 0 && Ke >= 0) ? Ue.count !== Ke && (Ue.count = Ke, this.writeCount(ee, Ke)) : (this.labels.set(ee, {
            key: ee,
            pos: [He, ye, be],
            item: Me,
            count: Ke
          }), this.writeCount(ee, Ke), ie = !0)
        }
        if (this.changes++, ie) {
          this.snapshot = [...this.labels.values()];
          for (const ee of this.listeners) ee()
        }
      }
      bindCount(ee) {
        const ie = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${ee}`;
        let He = this.countRefs.get(ie);
        return He || (He = He => {
          var ye, be;
          He ? (this.countElements.set(ie, He), this.writeCount(ee, null !== (ye = null === (be = this.labels.get(ee)) || void 0 === be ? void 0 : be.count) && void 0 !== ye ? ye : -1)) : (this.countElements.delete(ie), this.countRefs.delete(ie))
        }, this.countRefs.set(ie, He)), He
      }
      setCountWords(ee) {
        this.countWords = ee;
        for (const [ie, He] of this.labels) this.writePart(`words|${ie}`, ee(He.count), He.count)
      }
      writeCount(ee, ie) {
        this.writePart(`bare|${ee}`, TM(ie), ie), this.countElements.has(`words|${ee}`) && this.writePart(`words|${ee}`, this.countWords(ie), ie)
      }
      writePart(ee, ie, He) {
        const ye = this.countElements.get(ee);
        if (!ye || He < 0) return;
        const be = ye.firstChild;
        be && 3 === be.nodeType && !be.nextSibling ? be.nodeValue !== ie && (be.nodeValue = ie) : ye.textContent !== ie && (ye.textContent = ie)
      }
      list() {
        return this.snapshot
      }
      at(ee) {
        return this.labels.get(`${ee[0]},${ee[1]},${ee[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      bind(ee) {
        let ie = this.refs.get(ee);
        return ie || (ie = ie => {
          const He = this.elements.get(ee);
          var ye, be;
          He && (null === (ye = this.onElement) || void 0 === ye || ye.call(this, He, !1));
          ie ? (this.elements.set(ee, ie), null === (be = this.onElement) || void 0 === be || be.call(this, ie, !0)) : (this.elements.delete(ee), this.refs.delete(ee))
        }, this.refs.set(ee, ie)), ie
      }
      onAfterRender(ee, ie, He, ye) {
        for (const be of this.snapshot) {
          const Me = this.elements.get(be.key);
          if (!Me) continue;
          if (ye(be.key)) {
            (0, Mq.g)(Me, !0);
            continue
          }
          const Ke = (0, Rq.b)(Me, ee, ie, be.pos, 1.1, 24);
          Ke && He.add(Ke, Me, 0, !1)
        }
      }
    }
    const Kf = (0, ye.memo)((function(ee) {
        let {
          item: ie
        } = ee;
        return (0, gM.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, gM.jsx)(Db.c, {
            itemName: ie,
            amount: 0
          })
        })
      })),
      Uf = (0, ye.memo)((function(ee) {
        let {
          label: ie,
          bindRef: He,
          countRef: ye,
          wordsRef: be
        } = ee;
        return (0, gM.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: He,
          hidden: !0,
          children: [(0, gM.jsx)(Kf, {
            item: ie.item
          }), ie.count >= 0 && (0, gM.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, gM.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: be
            }), (0, gM.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: ye
            })]
          })]
        })
      })),
      Ff = (0, ye.memo)((function(ee) {
        let {
          store: ie
        } = ee;
        const {
          t: He
        } = (0, Zb.v)(), [be, Me] = (0, ye.useState)((() => ie.list()));
        return (0, ye.useEffect)((() => (Me(ie.list()), ie.subscribe((() => {
          Me(ie.list())
        })))), [ie]), (0, ye.useEffect)((() => {
          ie.setCountWords((ee => He("buildAFactory2Game:labelSiloCount", {
            count: TM(ee)
          })))
        }), [ie, He]), (0, gM.jsx)("div", {
          className: "Baf2IslandLabels",
          children: be.map((ee => -2 === ee.count ? null : (0, gM.jsx)(Uf, {
            label: ee,
            bindRef: ie.bind(ee.key),
            countRef: ie.bindCount(ee.key),
            wordsRef: ie.bindCount(ee.key, "words")
          }, ee.key)))
        })
      })),
      Jf = {
        read: () => !0,
        write: () => {}
      };

    function of(ee) {
      return `${ee[0]},${ee[1]},${ee[2]}`
    }

    function Rf(ee) {
      let [ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke] = ee;
      const qe = void 0 === Re || void 0 === ke ? function(ee) {
        return [Math.floor((ee - 1) / 2), 0]
      }(Me) : [Re, ke];
      return {
        kind: 0 === Fe ? "reactor" : "battery",
        box: nH([ie, He, ye], be, Me, Ke, Ue, qe),
        formed: 1 === Je,
        level: oe
      }
    }
    class kf {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jf;
        this.guideSetting = ee, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = ee.read()
      }
      OE(ee) {
        var ie;
        const He = new Map;
        for (const ye of ee.baf2RxPlanList) {
          const ee = Rf(ye);
          He.set(of(ee.box.ctrl), ee)
        }
        this.plans = He, this.layouts = new Map((null !== (ie = ee.baf2RxLayouts) && void 0 !== ie ? ie : []).map((ee => {
          let [ie, He, ye, be] = ee;
          return [of([ie, He, ye]), be]
        }))), this.predicted.clear(), ee.baf2RxFormedAt && (this.formed = {
          ctrl: ee.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const ye of [...this.startersOff]) {
          const ee = He.get(ye);
          ee && !ee.formed || this.startersOff.delete(ye)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((ee => this.planByKey(ee)))
      }
      planAt(ee) {
        return this.planByKey(of(ee))
      }
      predictSize(ee, ie) {
        this.predicted.set(of(ee), ie), this.changed()
      }
      unpredict(ee) {
        this.predicted.delete(of(ee)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(ee) {
        var ie;
        const He = of(ee);
        return this.predicted.has(He) ? null : null !== (ie = this.layouts.get(He)) && void 0 !== ie ? ie : null
      }
      showsStarter(ee) {
        return !this.startersOff.has(of(ee))
      }
      setStarter(ee, ie) {
        const He = of(ee);
        ie ? this.startersOff.delete(He) : this.startersOff.add(He), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(ee) {
        this.guide = ee, this.guideSetting.write(ee), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(ee) {
        const ie = this.plans.get(ee);
        if (!ie) return null;
        const He = this.predicted.get(ee);
        return He ? {
          ...ie,
          box: sH(ie.box, ie.kind, He[0], He[1], He[2])
        } : ie
      }
      changed() {
        this.version++;
        for (const ee of this.listeners) ee()
      }
    }
    var qf = He(186);
    const ff = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Tf(ee, ie, He, ye) {
      const be = ee.length / 3;
      for (let Me = 0; Me < ff.length / 3; Me++) ee.push(ff[3 * Me] * ye[0] / 2 + He[0], ff[3 * Me + 1] * ye[1] / 2 + He[1], ff[3 * Me + 2] * ye[2] / 2 + He[2]);
      for (let Me = be; Me < be + 24; Me += 4) ie.push(Me, Me + 1, Me + 2, Me, Me + 2, Me + 3)
    }

    function pf(ee, ie, He) {
      const ye = ie[0][0],
        be = [],
        Me = [];
      for (const [Ke, Ue] of ie) Tf(be, Me, [Ke[0] - ye[0], Ke[1] - ye[1], Ke[2] - ye[2]], Ue);
      return ee.createGameMesh({
        positions: be,
        indices: Me
      }, He, ye)
    }

    function Xf(ee, ie) {
      const He = ee.w - 2,
        ye = ee.d - 2;
      return 1 === function(ee, ie, He, ye) {
        const [be, Me, Ke] = ee;
        if (Number(be <= 2) + Number(Me <= 2) + Number(Ke <= 2) >= 2) return function(ee, ie, He) {
          return (ee + ie + He) % 2 === 0 ? 1 : 3
        }(ie, He, ye);
        const [Ue, Fe] = be >= Me && be >= Ke ? [He, ye] : Me >= Ke ? [ie, ye] : [ie, He];
        return Ue % 2 === 0 && Fe % 2 === 0 ? 1 : 3
      }([He, ee.h - 2, ye], ie % He, Math.floor(ie / (He * ye)), Math.floor(ie / He) % ye) ? "rod" : "channel"
    }

    function zf(ee, ie, He) {
      if ("reactor" !== ee.kind || ee.formed || !ie) return !1;
      const ye = NH(ee.box);
      for (let be = 0; be < ye; be++) {
        const ee = He(be);
        if (null !== ee && YH(ee)) return !1
      }
      return !0
    }

    function Bf(ee, ie, He, ye, be) {
      var Me;
      let Ke = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const Ue = Hy(ee.box, ie),
        Fe = Ky(ee.kind, Ue, He);
      if ("wrong" === Fe || "blocked" === Fe) return "wrong";
      if (!be) return null;
      if ("inside" === Ue && "reactor" === ee.kind && "Air" === VH(He)) {
        if (null !== Ke) {
          var Je;
          const He = QR[ek(Ke, yy(ee.box, ie))];
          return He && null !== (Je = gF(He)) && void 0 !== Je ? Je : null
        }
        if (ye) return Xf(ee.box, yy(ee.box, ie))
      }
      if ("missing" !== Fe) return null;
      const oe = Uy(ee.kind, Ue);
      return null === oe ? null : null !== (Me = gF(oe)) && void 0 !== Me ? Me : null
    }
    const Ef = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function gf(ee, ie, He) {
      const ye = He => {
        const ye = ie(ey(ee.box, He));
        return null !== ye && function(ee, ie) {
          return "reactor" !== ee.kind || ie !== rH(ee.box) && "inside" !== Hy(ee.box, ie)
        }(ee, He) && "ok" !== Ky(ee.kind, Hy(ee.box, He), ye)
      };
      if (He) {
        const Me = iy(ee.box, [Math.floor(He[0]), Math.floor(He[1]), Math.floor(He[2])]);
        if (Me >= 0 && (ye(Me) || (be = Me, "reactor" === ee.kind && "inside" === Hy(ee.box, be) && "Air" === ie(ey(ee.box, be))))) return Me
      }
      var be;
      const Me = NH(ee.box);
      for (let Ke = 0; Ke < Me; Ke++)
        if (ye(Ke)) return Ke;
      return -1
    }

    function Of(ee, ie) {
      return Math.floor(ie / (ee.w * ee.d))
    }

    function df(ee, ie, He) {
      return He >= 0 && Of(ee, ie) > Of(ee, He)
    }

    function Wf(ee, ie) {
      return ie >= 0 && ee.h >= 3 && Of(ee, ie) === ee.h - 1
    }

    function tf(ee) {
      const ie = VH(ee);
      return ie === EH || "Collider" === ie || "Laser" === ie || ie.startsWith("_Collider ")
    }

    function Zf(ee, ie, He, ye) {
      if (ye(ee)) return null;
      if (!Ef.every((ie => {
          let [ye, be, Me] = ie;
          const Ke = He([ee[0] + ye, ee[1] + be, ee[2] + Me]);
          return null !== Ke && !uH("reactor", Ke) && "reactor" !== aH(Ke)
        }))) return null;
      const be = mH("reactor").min,
        Me = nH([ee[0], ee[1], ee[2]], function(ee, ie) {
          const He = ie[0] - (ee[0] + .5),
            ye = ie[2] - (ee[2] + .5);
          return Math.abs(He) >= Math.abs(ye) ? He >= 0 ? 2 : 4 : ye >= 0 ? 1 : 3
        }(ee, ie), be, be, be, jH("reactor", be)),
        Ke = rH(Me);
      let Ue = !0;
      for (let Fe = 0; Fe < NH(Me) && Ue; Fe++) {
        if (Fe === Ke) continue;
        const ee = ey(Me, Fe),
          ie = He(ee);
        Ue = !ye(ee) && (null === ie || !tf(ie))
      }
      return {
        box: Me,
        fits: Ue
      }
    }
    const wf = EF,
      Df = "baf2Goal",
      Pf = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Af = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Yf = .4;

    function Vf(ee, ie) {
      let [He, ye, be] = ee;
      const Me = DF([He - .02, ye - .02, be - .02], [He + 1.02, ye + 1.02, be + 1.02], .07);
      return ie && (Me.push([
        [He + .5, ye + 1 + .7, be + .5],
        [.08, 1.4, .08]
      ]), Me.push([
        [He + .5, ye + 1 + 1.4 + .2, be + .5],
        [Yf, Yf, Yf]
      ])), Me
    }

    function af(ee, ie) {
      let [He, ye, be] = ie;
      return ee.isBlockInLoadedChunk(He, ye, be) ? ee.blockIdToBlockName(ee.getBlockId(He, ye, be)) : null
    }
    let xf = null;
    const Lf = new Set;
    let Cf = null;

    function vf(ee) {
      xf = ee;
      for (const ie of Lf) ie(ee)
    }
    class uf {
      constructor(ee) {
        var ie;
        this.plans = ee, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (ie = ee => {
          var ie, He;
          this.setGoal(null !== (ie = null === ee || void 0 === ee ? void 0 : ee.goal) && void 0 !== ie ? ie : null, null !== (He = null === ee || void 0 === ee ? void 0 : ee.startsBattery) && void 0 !== He && He)
        }, Cf ??= [Vb.h.subscribe("setDirectionArrow", (ee => {
          let {
            id: ie,
            position: He,
            text: ye
          } = ee;
          ie === Df && vf({
            goal: [Math.floor(He[0]), Math.floor(He[1]), Math.floor(He[2])],
            startsBattery: JSON.stringify(null !== ye && void 0 !== ye ? ye : null).includes("arrowStartBattery")
          })
        })), Vb.h.subscribe("clearDirectionArrow", (ee => {
          let {
            id: ie
          } = ee;
          null !== ie && ie !== Df || vf(null)
        }))], Lf.add(ie), ie(xf), () => {
          Lf.delete(ie)
        })
      }
      onAfterRender(ee, ie) {
        const He = performance.now();
        if (this.cues.length > 0) {
          const ie = .55 + .45 * Math.sin(He / 1100 * Math.PI * 2);
          for (const He of this.cues) ee.setGameMesh(He, {
            visibility: ie
          })
        }
        if (He - this.lastCheckMs < 150) return;
        this.lastCheckMs = He;
        const ye = this.plans.all().filter((ee => {
            const [He, ye, be] = ee.box.ctrl;
            return (!ee.formed || null !== this.plans.layoutOf(ee.box.ctrl)) && (He - ie[0]) ** 2 + (ye - ie[1]) ** 2 + (be - ie[2]) ** 2 <= 2304
          })),
          be = function(ee, ie) {
            const He = qf.g.BR,
              ye = new Map;
            for (const Me of ie) {
              const ie = ey(Me.box, 0),
                Ke = ey(Me.box, NH(Me.box) - 1),
                Ue = [Math.min(ie[0], Ke[0]), Math.min(ie[1], Ke[1]), Math.min(ie[2], Ke[2])].map((ee => Math.floor(ee / He))),
                Fe = [Math.max(ie[0], Ke[0]), Math.max(ie[1], Ke[1]), Math.max(ie[2], Ke[2])].map((ee => Math.floor(ee / He)));
              for (let He = Ue[0]; He <= Fe[0]; He++)
                for (let ie = Ue[1]; ie <= Fe[1]; ie++)
                  for (let Me = Ue[2]; Me <= Fe[2]; Me++) {
                    var be;
                    ye.set(`${He},${ie},${Me}`, null !== (be = ee.getChunkVersion(He, ie, Me)) && void 0 !== be ? be : -1)
                  }
            }
            return ye
          }(ee, ye);
        this.plans.getVersion() === this.storeVersion && (function(ee, ie) {
          if (ee.size !== ie.size) return !1;
          for (const [He, ye] of ee)
            if (ie.get(He) !== ye) return !1;
          return !0
        }(be, this.chunkVersions) || He - this.lastRescanMs < 600) || (this.lastRescanMs = He, this.storeVersion = this.plans.getVersion(), this.chunkVersions = be, this.redraw(ee, ye))
      }
      dispose(ee) {
        this.unwatch(), xf = null, this.clearMeshes(ee), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(ee, ie) {
        var He;
        (null === ee || void 0 === ee ? void 0 : ee.join()) === (null === (He = this.goal) || void 0 === He ? void 0 : He.join()) && ie === this.startsBattery || (this.goal = ee, this.startsBattery = ie, this.storeVersion = -1)
      }
      redraw(ee, ie) {
        const He = ie => af(ee, ie),
          ye = new Map,
          be = [],
          Me = this.plans.guideOn();
        for (const Je of ie) {
          const ee = Me && zf(Je, this.plans.showsStarter(Je.box.ctrl), (ee => He(ey(Je.box, ee)))),
            ie = "reactor" === Je.kind ? this.plans.layoutOf(Je.box.ctrl) : null,
            Ke = Me && !Je.formed ? gf(Je, He, this.goal) : -1;
          Ke >= 0 && be.push([ey(Je.box, Ke), Wf(Je.box, Ke)]);
          const Ue = NH(Je.box);
          for (let be = 0; be < Ue; be++) {
            const Ue = ey(Je.box, be),
              Fe = He(Ue),
              oe = null === Fe ? null : Bf(Je, be, Fe, ee, Me, ie);
            if (null !== oe) {
              const ee = "wrong" !== oe && df(Je.box, be, Ke),
                ie = ee ? `${oe}Dim` : oe;
              let He = ye.get(ie);
              He || (He = {
                draw: {
                  ghost: oe,
                  dim: ee
                },
                list: []
              }, ye.set(ie, He)), He.list.push(Ue)
            }
          }
        }
        if (Me && this.startsBattery && this.goal) {
          const [ee, ie, be] = this.goal, Me = [];
          for (const [ye, Ke, Ue] of Pf) {
            const Fe = [ee + ye, ie + Ke, be + Ue];
            "Air" === He(Fe) && Me.push(Fe)
          }
          if (Me.length > 0) {
            var Ke;
            const ee = null !== (Ke = ye.get("cell")) && void 0 !== Ke ? Ke : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            ee.list.push(...Me), ye.set("cell", ee)
          }
        }
        const Ue = [...ye.keys()].sort(),
          Fe = [...Ue.map((ee => `${ee}:${ye.get(ee).list.join(";")}`)), `cue:${be.join(";")}`].join("|");
        if (Fe !== this.shownKey) {
          this.shownKey = Fe, this.clearMeshes(ee);
          for (const ie of Ue) {
            const {
              draw: He,
              list: be
            } = ye.get(ie);
            this.meshes.push(this.build(ee, He, be))
          }
          for (const [ie, He] of be) this.cues.push(pf(ee, Vf(ie, He), Af))
        }
      }
      build(ee, ie, He) {
        let {
          ghost: ye,
          dim: be
        } = ie;
        const {
          size: Me,
          colour: Ke,
          alpha: Ue
        } = wf[ye], Fe = He[0], Je = [], oe = [];
        for (const [Re, ke, qe] of He) Tf(Je, oe, [Re - Fe[0] + .5, ke - Fe[1] + .5, qe - Fe[2] + .5], [Me, Me, Me]);
        return ee.createGameMesh({
          positions: Je,
          indices: oe
        }, {
          rgb: Ke,
          alpha: Ue * (be ? .3 : 1)
        }, Fe)
      }
      clearMeshes(ee) {
        for (const ie of [...this.meshes, ...this.cues]) ee.disposeGameMesh(ie);
        this.meshes = [], this.cues = []
      }
    }
    const mf = [.56, .83, 1],
      lf = [1, .3, .25];
    class Sf {
      constructor(ee) {
        this.plans = ee, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(ee, ie, He) {
        var ye;
        const be = performance.now();
        if (be - this.lastCheckMs < 150) return;
        this.lastCheckMs = be;
        const Me = ie => af(ee, ie),
          Ke = null === (ye = ee.Vye(ie)) || void 0 === ye ? void 0 : ye.name,
          Ue = Ke && "Reactor Frame" === VH(Ke) ? ee.getTargetedBlock() : null,
          Fe = Ue ? [Ue.Xp[0], Ue.Xp[1], Ue.Xp[2]] : null,
          Je = null !== Fe && "Air" === Me(Fe) && Fe.every(((ee, ie) => Math.abs(ee + .5 - He[ie]) <= 8)) ? Zf(Fe, He, Me, (ee => this.inPlan(ee))) : null,
          oe = Je ? `${Je.box.ctrl.join()}|${Je.box.rot}|${Je.fits}` : "";
        oe !== this.shownKey && this.show(ee, oe, Je)
      }
      dispose(ee) {
        this.clear(ee), this.shownKey = ""
      }
      inPlan(ee) {
        return this.plans.all().some((ie => iy(ie.box, ee) >= 0))
      }
      show(ee, ie, He) {
        if (this.clear(ee), this.shownKey = ie, !He) return;
        const {
          box: ye,
          fits: be
        } = He, Me = be ? mf : lf, {
          lo: Ke,
          hi: Ue
        } = wF(ye);
        this.meshes.push(pf(ee, DF(Ke, Ue, .05), {
          rgb: Me,
          alpha: 1
        }));
        const Fe = [],
          Je = ey(ye, 0)[1];
        for (let oe = 0; oe < ye.w * ye.d; oe++) {
          const [ee, , ie] = ey(ye, oe);
          Fe.push([
            [ee + .5, Je + .02 + .01, ie + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(pf(ee, Fe, {
          rgb: Me,
          alpha: .25
        }))
      }
      clear(ee) {
        for (const ie of this.meshes) ee.disposeGameMesh(ie);
        this.meshes = []
      }
    }
    const nf = "buildAFactory2Game:";

    function jf(ee, ie, He) {
      const ye = ee => {
          const [He, ye, be] = ee.box.ctrl;
          return He === ie[0] && ye === ie[1] && be === ie[2]
        },
        be = ee.find((ee => ye(ee) || iy(ee.box, ie) >= 0));
      if (!be) return null;
      const Me = function(ee, ie, He) {
        const {
          w: ye,
          h: be,
          d: Me
        } = ee.box, Ke = "reactor" === ee.kind ? `${nf}rxTitle` : `${nf}batTitle`;
        if (ee.formed) return {
          key: `${nf}lookPlanFormed`,
          kindKey: Ke,
          w: ye,
          h: be,
          d: Me,
          count: 0
        };
        let Ue = 0,
          Fe = 0;
        for (let oe = 0; oe < NH(ee.box); oe++) {
          const ie = He(ey(ee.box, oe)),
            ye = null === ie ? "ok" : Ky(ee.kind, Hy(ee.box, oe), ie);
          Ue += "missing" === ye ? 1 : 0, Fe += "wrong" === ye || "blocked" === ye ? 1 : 0
        }
        const Je = function(ee, ie, He) {
          if (ie < 0 || null === He) return;
          const ye = Hy(ee.box, ie),
            be = Ky(ee.kind, ye, He);
          return "blocked" === be ? `${nf}lookWhy_blocked` : "wrong" === be ? "ctrl" === ye ? `${nf}lookWhy_ctrl` : `${nf}lookWhy_reactor_${ye}` : void 0
        }(ee, iy(ee.box, ie), He([ie[0], ie[1], ie[2]]));
        if (Ue > 0) return {
          key: `${nf}lookPlanToBuild`,
          kindKey: Ke,
          w: ye,
          h: be,
          d: Me,
          count: Ue,
          why: Je
        };
        if (Fe > 0) return {
          key: `${nf}lookPlanTakeOut`,
          kindKey: Ke,
          w: ye,
          h: be,
          d: Me,
          count: Fe,
          why: Je
        };
        return {
          key: "reactor" === ee.kind ? `${nf}lookPlanNoRods` : `${nf}lookPlanDone`,
          kindKey: Ke,
          w: ye,
          h: be,
          d: Me,
          count: 0
        }
      }(be, ie, He);
      return "reactor" === be.kind && ye(be) ? {
        ...Me,
        ctrl: !0
      } : Me
    }

    function sf(ee, ie) {
      return ee === ie || null !== ee && null !== ie && ee.key === ie.key && ee.kindKey === ie.kindKey && ee.w === ie.w && ee.h === ie.h && ee.d === ie.d && ee.count === ie.count && ee.why === ie.why && ee.ctrl === ie.ctrl
    }

    function If() {
      return performance.now()
    }
    class hf {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : If;
        this.ticket = ee, this.sent = ie, this.backstopMs = He, this.now = ye, this.queuedAt = void 0, this.queuedAt = ye()
      }
      answered() {
        const ee = this.now(),
          ie = this.sent.leftAt(this.ticket);
        return null !== ie && ee - ie > 4e3 || ee - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Nf {
      constructor() {
        this.echoes = []
      }
      add(ee) {
        this.echoes = this.echoes.filter((ee => !ee.answered())), this.echoes.push(ee)
      }
      answered() {
        var ee, ie;
        return null === (ee = null === (ie = this.echoes.at(-1)) || void 0 === ie ? void 0 : ie.answered()) || void 0 === ee || ee
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((ee => ee.answered()))
      }
      age() {
        var ee, ie;
        return null !== (ee = null === (ie = this.echoes.at(-1)) || void 0 === ie ? void 0 : ie.age()) && void 0 !== ee ? ee : null
      }
      clear() {
        this.echoes = []
      }
    }
    class Gf {
      constructor(ee) {
        this.send = ee, this.value = null, this.sent = null, this.echoes = new Nf, this.down = !1, this.timer = null
      }
      shown(ee) {
        return null === this.value ? ee : this.down || this.value !== this.sent ? this.value : ee === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), ee) : this.value
      }
      pendingFor(ee) {
        return null !== this.value && this.value === this.sent && ee !== this.value ? this.echoes.age() : null
      }
      assume(ee, ie) {
        this.disarm(), this.down = !1, this.value = ee, this.sent = ee, this.echoes.clear(), this.echoes.add(ie)
      }
      press() {
        this.down = !0
      }
      drag(ee) {
        this.value = ee, this.arm(this.down ? 1e3 : 400)
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
      arm(ee) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), ee)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class rf {
      constructor() {
        this.pending = new Map
      }
      set(ee, ie, He) {
        var ye;
        const be = null !== (ye = this.pending.get(ee)) && void 0 !== ye ? ye : {
          on: ie,
          echoes: new Nf
        };
        be.on = ie, be.echoes.add(He), this.pending.set(ee, be)
      }
      shown(ee) {
        let ie = ee;
        for (const [He, {
            on: ye,
            echoes: be
          }] of this.pending) 0 !== (ee & He) === ye && be.agreeCounts() || be.answered() ? this.pending.delete(He) : ie = ye ? ie | He : ie & ~He;
        return ie
      }
      pendingMask() {
        let ee = 0;
        for (const ie of this.pending.keys()) ee |= ie;
        return ee
      }
      pendingFor(ee) {
        let ie = null;
        for (const [ye, {
            on: be,
            echoes: Me
          }] of this.pending) {
          if (void 0 !== ee && 0 !== (ee & ye) === be) continue;
          const Ke = Me.age();
          var He;
          if (null !== Ke) ie = Math.max(null !== (He = ie) && void 0 !== He ? He : 0, Ke)
        }
        return ie
      }
      clear() {
        this.pending.clear()
      }
    }
    class Qf {
      constructor() {
        this.dims = null, this.echoes = new Nf, this.unmet = null
      }
      shown(ee) {
        var ie;
        return this.dims && (eT(this.dims, ee) && this.echoes.agreeCounts() || this.echoes.answered()) && (eT(this.dims, ee) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (ie = this.dims) && void 0 !== ie ? ie : ee
      }
      takeUnmet() {
        const ee = this.unmet;
        return this.unmet = null, ee
      }
      set(ee, ie) {
        this.dims = ee, this.echoes.add(ie)
      }
      pendingFor(ee) {
        return null === this.dims || ee && eT(this.dims, ee) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function eT(ee, ie) {
      return ee[0] === ie[0] && ee[1] === ie[1] && ee[2] === ie[2]
    }
    class iT {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : If;
        this.now = ee, this.taps = new Map
      }
      tap(ee, ie, He) {
        return !this.busy(ee) && (this.taps.set(ee, {
          at: this.now(),
          done: ie
        }), He(), !0)
      }
      settle(ee) {
        for (const [ie, He] of [...this.taps]) He.done(ee) && this.taps.delete(ie)
      }
      busy(ee) {
        const ie = this.taps.get(ee);
        return !!ie && (!(this.now() - ie.at >= 3e3) || (this.taps.delete(ee), !1))
      }
      busyIds() {
        const ee = new Set;
        for (const ie of [...this.taps.keys()]) this.busy(ie) && ee.add(ie);
        return ee
      }
      clear() {
        this.taps.clear()
      }
    }

    function HT(ee) {
      return {
        send: ie => ee.track(ie),
        sendUrgent: (ie, He) => ee.track(ie, {
          urgent: !0,
          supersedes: He
        }),
        leftAt: ie => ee.leftAt(ie),
        holdReserve: () => ee.holdUrgentReserve(),
        answerMs: PK
      }
    }

    function yT() {
      return performance.now()
    }

    function bT(ee) {
      const ie = ee.baf2RxNeed.map((ee => {
        let [ie, He] = ee;
        return [ie, He]
      }));
      return JSON.stringify([ee.baf2RxFormed, ie, ee.baf2RxBad, ee.baf2RxCells])
    }

    function MT(ee, ie) {
      const He = 0 !== (ie & ki),
        ye = 0 !== (ee.baf2RxFlags & ki);
      return !He || ye || "running" !== ee.baf2RxState && "idle" !== ee.baf2RxState ? !He && ye && "scram" === ee.baf2RxState && ee.baf2RxFuel > 0 ? "idle" : ee.baf2RxState : "scram"
    }

    function KT(ee) {
      return JSON.stringify([ee.baf2BatFormed, ee.baf2BatNeed, ee.baf2BatBad])
    }

    function UT(ee) {
      return ee.join(",")
    }
    class FT {
      constructor() {
        this.listeners = new Set
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      notify() {
        for (const ee of this.listeners) ee()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class JT {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(ee, ie) {
        this.lastAt = ee, this.lastUntil = ee + ie
      }
      answered(ee) {
        return this.lastAt >= ee || ee < this.lastUntil
      }
    }
    class oT {
      constructor(ee, ie) {
        this.link = ee, this.now = ie, this.hold = new Qf, this.picked = null, this.notTaken = null
      }
      shown(ee) {
        const ie = this.hold.shown(ee);
        if (this.hold.takeUnmet() && this.picked) {
          var He;
          const {
            plans: ie,
            ctrl: ye,
            at: be
          } = this.picked;
          this.picked = null, ie.unpredict(ye), null === (He = this.notTaken) || void 0 === He || He.call(this, ee, be)
        }
        return ie
      }
      pendingFor(ee) {
        return this.hold.pendingFor(ee)
      }
      tq(ee, ie, He) {
        ee.predictSize(ie, He), this.picked = {
          plans: ee,
          ctrl: ie,
          at: this.now()
        };
        const ye = this.link.send(Ri(ie, "plan", ...He));
        this.hold.set(He, new hf(ye, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class RT {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yT;
        this.plans = ee, this.readInterior = ie, this.link = He, this.now = ye, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new rf, this.throttle = void 0, this.oneShots = void 0, this.listeners = new FT, this.redraw = null, this.releaseReserve = null, this.size = new oT(He, ye), this.oneShots = new iT(ye), this.throttle = new Gf((ee => this.echo(this.link.send(this.command("throttle", ee)))))
      }
      set(ee) {
        !ee.baf2RxOpen && this.raw && UT(this.raw.baf2RxAt) === UT(ee.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(ee), this.yR(ee)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(ee) {
        this.size.notTaken = ee
      }
      resize(ee) {
        this.raw && (this.size.tq(this.plans, this.raw.baf2RxAt, ee), this.yR(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const ee = this.raw.baf2RxAt;
        this.plans.setStarter(ee, !this.plans.showsStarter(ee)), this.yR(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.yR(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.yR(this.raw)
      }
      send(ee) {
        if (this.raw) {
          for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
          this.link.send(this.command(ee, ...He))
        }
      }
      tap(ee, ie) {
        this.raw && this.oneShots.tap(ee, function(ee, ie) {
          if ("start" === ee) return ee => 0 === (ee.baf2RxFlags & ki);
          if ("odConfirm" === ee) return ee => 0 !== (ee.baf2RxFlags & qi);
          const He = bT(ie);
          return ee => bT(ee) !== He
        }(ee, this.raw), ie) && ("start" === ee && (this.startedAt = this.now()), this.yR(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(ki, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(ee, ie) {
        if (!this.raw) return;
        const He = ee === ki ? this.command(ie ? "scram" : "start") : this.command("od", ie ? 1 : 0),
          ye = ie && ee === ki,
          be = `${oi} ${this.raw.baf2RxAt.join(" ")} `,
          Me = this.echo(ye ? this.link.sendUrgent(He, (ee => {
            const ie = ee.startsWith(be) ? ee.slice(be.length).split(" ")[0] : null;
            return "throttle" === ie || "start" === ie
          })) : this.link.send(He));
        this.flags.set(ee, ie, Me), ye && this.throttle.assume(0, Me), this.yR(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(ee) {
        this.throttle.drag(ee), this.raw && this.yR(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.yR(this.raw)
      }
      subscribe(ee) {
        return this.listeners.subscribe(ee)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var ee;
        this.throttle.release(), null === (ee = this.releaseReserve) || void 0 === ee || ee.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(ee) {
        for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
        return Ri(this.raw.baf2RxAt, ee, ...He)
      }
      echo(ee) {
        return new hf(ee, this.link, this.link.answerMs, this.now)
      }
      yR(ee) {
        var ie;
        this.raw = ee;
        const He = this.flags.shown(ee.baf2RxFlags),
          ye = {
            ...ee,
            baf2RxFlags: He,
            baf2RxTarget: this.throttle.shown(ee.baf2RxTarget),
            baf2RxState: MT(ee, He)
          },
          be = this.size.shown(ye.baf2RxDims),
          Me = this.throttle.pendingFor(),
          Ke = [this.throttle.pendingFor(ee.baf2RxTarget), this.flags.pendingFor(ee.baf2RxFlags), this.size.pendingFor(ee.baf2RxDims)].filter((ee => null !== ee)),
          Ue = Ke.length > 0 ? Math.max(...Ke) : null,
          Fe = this.oneShots.busyIds(),
          Je = ye.baf2RxAt;
        let oe, Re, ke = null,
          qe = [Math.max(0, be[0] - 2), Math.max(0, be[1] - 2), Math.max(0, be[2] - 2)];
        if (ye.baf2RxFormed) {
          const [ee, ie, He] = ye.baf2RxDims;
          qe = [Math.max(0, ee - 2), Math.max(0, ie - 2), Math.max(0, He - 2)], oe = Array.from(ye.baf2RxCells, Number), Re = `${qe.join(",")}:${ye.baf2RxCells}`
        } else {
          var fe;
          const ee = null === (fe = this.plans.planAt(Je)) || void 0 === fe ? void 0 : fe.box,
            ie = ee ? sH(ee, "reactor", ...be) : nH(Je, 1, ...be, jH("reactor", be[0])),
            He = this.readInterior(ie);
          ke = NU(qe, He), oe = He, Re = `${qe.join(",")}:${He.join("")}`
        }(null === (ie = this.looksOf) || void 0 === ie ? void 0 : ie.key) !== Re && (this.looksOf = {
          key: Re,
          looks: HF(qe, oe)
        }), this.view = {
          status: ye,
          dims: be,
          plan: ke,
          inner: qe,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Je),
          odConfirmed: this.odConfirmed || 0 !== (ye.baf2RxFlags & Ei),
          guide: this.plans.guideOn(),
          throttlePending: null !== Me,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== Ue && Ue >= 5e3,
          busy: Fe,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== Ue || Fe.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.yR(this.raw)
        }), 250))
      }
    }
    class kT {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yT;
        this.plans = ee, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new FT, this.redraw = null, this.size = new oT(ie, He), this.oneShots = new iT(He)
      }
      set(ee) {
        !ee.baf2BatOpen && this.view && UT(this.view.status.baf2BatAt) === UT(ee.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(ee), this.yR(ee)
      }
      tap(ee, ie) {
        if (!this.view) return;
        const He = KT(this.view.status);
        this.oneShots.tap(ee, (ee => KT(ee) !== He), ie) && this.yR(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(ee) {
        this.size.notTaken = ee
      }
      resize(ee) {
        this.view && (this.size.tq(this.plans, this.view.status.baf2BatAt, ee), this.yR(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.yR(this.view.status)
      }
      subscribe(ee) {
        return this.listeners.subscribe(ee)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      yR(ee) {
        const ie = this.size.shown(ee.baf2BatDims),
          He = this.oneShots.busyIds();
        this.view = {
          status: ee,
          dims: ie,
          bk: pF(ie, ee.baf2BatDims) ? ee.baf2BatCapacity : MF(...ie),
          guide: this.plans.guideOn(),
          busy: He
        }, this.listeners.notify(), He.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.yR(this.view.status)
        }), 250))
      }
    }
    const qT = "buildAFactory2Game:";

    function fT() {
      var ee;
      const ie = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!ie) return null;
      const He = ie.querySelector(".ExitButton");
      return function(ee, ie) {
        const He = ie ? ie.left - 8 : ee.right;
        return {
          left: ee.left,
          top: ee.top,
          width: Math.max(0, He - ee.left),
          height: ee.height
        }
      }(ie.getBoundingClientRect(), null !== (ee = null === He || void 0 === He ? void 0 : He.getBoundingClientRect()) && void 0 !== ee ? ee : null)
    }
    const TT = (0, ye.memo)((function(ee) {
      let {
        store: ie
      } = ee;
      const {
        t: He
      } = (0, Zb.v)(), [be, Me] = (0, ye.useState)((() => ie.get())), [Ke, Ue] = (0, ye.useState)((() => performance.now()));
      (0, ye.useEffect)((() => (Me(ie.get()), ie.subscribe((() => {
        Me(ie.get()), Ue(performance.now())
      })))), [ie]);
      const {
        alarm: Fe,
        boomAt: Je
      } = be, oe = null !== Fe && null !== Fe.secs, [Re, ke] = (0, ye.useState)(null);
      (0, ye.useEffect)((() => {
        if (!oe) return;
        ke(fT());
        const ee = setInterval((() => {
          Ue(performance.now()), ke(fT())
        }), 250);
        return () => {
          clearInterval(ee)
        }
      }), [oe]);
      const [qe, fe] = (0, ye.useState)(!1);
      return (0, ye.useEffect)((() => {
        if (Je === -1 / 0) return;
        fe(!0);
        const ee = setTimeout((() => {
          fe(!1)
        }), 1300);
        return () => {
          clearTimeout(ee)
        }
      }), [Je]), (0, gM.jsxs)(gM.Fragment, {
        children: [null !== Fe && (0, gM.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: He(Fe.hot ? `${qT}rxAlarmSiren` : `${qT}rxAlarmDamaged`, {
            amount: String(Fe.damage)
          })
        }), null !== Fe && null !== Fe.secs && (0, gM.jsx)("div", {
          className: Re ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Re && void 0 !== Re ? Re : void 0,
          "aria-live": "assertive",
          children: He(`${qT}rxAlarmCountdown`, {
            amount: String((Te = Fe.secs, pe = Ke - Fe.receivedAt, Math.max(1, Math.ceil(Te - pe / 1e3))))
          })
        }), qe && (0, gM.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Te, pe
    }));
    class pT {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      OE(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const He = ee.baf2RxAlarmAt.join(",");
        let ye = this.snapshot.boomAt;
        if (ee.baf2RxAlarmBoom) this.byReactor.delete(He), ye = ie;
        else if (ee.baf2RxAlarmDamage <= 0) this.byReactor.delete(He);
        else {
          var be;
          this.byReactor.set(He, {
            damage: ee.baf2RxAlarmDamage,
            secs: null !== (be = ee.baf2RxAlarmSecs) && void 0 !== be ? be : null,
            hot: !0 === ee.baf2RxAlarmHot,
            receivedAt: ie
          })
        }
        this.yR(ye)
      }
      retain(ee) {
        let ie = !1;
        for (const He of [...this.byReactor.keys()]) ee.has(He) || (this.byReactor.delete(He), ie = !0);
        ie && this.yR(this.snapshot.boomAt)
      }
      has(ee) {
        return this.byReactor.has(ee)
      }
      get() {
        return this.snapshot
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      yR(ee) {
        let ie = null;
        for (const He of this.byReactor.values())(!ie || He.damage > ie.damage) && (ie = He);
        this.snapshot = {
          alarm: ie,
          boomAt: ee
        };
        for (const He of this.listeners) He()
      }
    }
    const XT = {
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

    function zT(ee) {
      return [ee[0], ee[1], ee[2]]
    }

    function BT(ee) {
      return `${ee[0]},${ee[1]},${ee[2]}`
    }
    class ET {
      constructor(ee) {
        if (this.plans = ee, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var ee;
            return {
              active: this.glows.flatMap((ee => {
                let {
                  record: ie
                } = ee;
                return ie ? [ie] : []
              })),
              log: [...null !== (ee = this.devLog) && void 0 !== ee ? ee : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var ee;
        return null !== (ee = this.devLog) && void 0 !== ee ? ee : []
      }
      check(ee, ie, He) {
        const ye = new Set(ie.map((ee => BT(ee.box.ctrl))));
        for (const Ke of function(ee, ie) {
            const He = [],
              ye = new Map(ee);
            ee.clear();
            for (const be of ie) {
              const ie = of(be.box.ctrl),
                Me = be.formed ? be.level : 0;
              ee.set(ie, Me), Me > 0 && 0 === ye.get(ie) && He.push(be)
            }
            return He
          }(this.levels, this.plans.all())) ye.has(BT(Ke.box.ctrl)) && this.show(ee, Ke, "on", He);
        const be = this.plans.lastFormed();
        if (null === be || be.receivedAt <= this.flashedAt) return null;
        this.flashedAt = be.receivedAt;
        const Me = function(ee, ie) {
          var He;
          const ye = of(ee);
          return null !== (He = ie.find((ee => of(ee.box.ctrl) === ye))) && void 0 !== He ? He : null
        }(be.ctrl, ie);
        return Me && this.show(ee, Me, "formed", He), Me
      }
      fade(ee, ie) {
        0 !== this.glows.length && (this.glows = this.glows.filter((He => {
          let {
            mesh: ye,
            glow: be,
            startMs: Me,
            record: Ke
          } = He;
          const Ue = (ie - Me) / XT[be].ms;
          return Ue >= 1 ? (ee.disposeGameMesh(ye), Ke && (Ke.endMs = ie), !1) : (ee.setGameMesh(ye, {
            visibility: "formed" === be ? 1 - Ue : Math.sin(Math.PI * Ue)
          }), !0)
        })))
      }
      dispose(ee) {
        for (const {
            mesh: He
          }
          of this.glows) ee.disposeGameMesh(He);
        this.glows = [], this.levels.clear();
        const ie = "undefined" !== typeof window ? window : null;
        (null === ie || void 0 === ie ? void 0 : ie.baf2Glows) === this.devAccessor && delete ie.baf2Glows
      }
      show(ee, ie, He, ye) {
        const {
          lo: be,
          hi: Me
        } = wF(ie.box);
        let Ke = null;
        this.devLog && (Ke = {
          glow: He,
          ctrl: zT(ie.box.ctrl),
          lo: zT(be),
          hi: zT(Me),
          startMs: ye,
          endMs: null
        }, this.devLog.push(Ke), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(ee, He, DF(be, Me, XT[He].thick)),
          glow: He,
          startMs: ye,
          record: Ke
        })
      }
      build(ee, ie, He) {
        const ye = pf(ee, He, {
          rgb: XT[ie].colour,
          alpha: 1
        });
        return ee.setGameMesh(ye, {
          visibility: 0
        }), ye
      }
    }
    const gT = 1 / .6,
      OT = {
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
        blendMode: AU.e.Standard,
        soft: !0
      },
      dT = {
        ...OT,
        size: [.25, .4],
        count: 2
      };

    function WT(ee) {
      return {
        colours: [ee, ee],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: AU.e.Add,
        soft: !1
      }
    }
    const tT = WT([150, 225, 255]),
      ZT = WT([185, 145, 255]),
      wT = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function DT(ee) {
      const ie = ci[ee];
      return null === ie.fuelSlot || KH(ie) ? wT.includes(ee) ? ZT : tT : OT
    }
    const PT = {
        kind: "smokePuff"
      },
      AT = [.2, .025, .2];

    function YT(ee, ie) {
      const [
        [He, ye, be],
        [Me, Ke, Ue]
      ] = ee.colours;
      return {
        texture: ee.soft ? PT : "square_particle",
        bk: ie,
        minLifeTime: ee.life[0] / gT,
        maxLifeTime: ee.life[1] / gT,
        minEmitPower: ee.power[0] * gT,
        maxEmitPower: ee.power[1] * gT,
        minSize: ee.size[0],
        maxSize: ee.size[1],
        emitRate: 0,
        gravity: [0, ee.lift * gT * gT, 0],
        dir1: [-ee.spread, 1, -ee.spread],
        dir2: [ee.spread, 1, ee.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [He, ye, be, ee.alpha],
          maxColor: [Me, Ke, Ue, ee.alpha]
        }, {
          timeFraction: 1,
          minColor: [He, ye, be, 0],
          maxColor: [Me, Ke, Ue, 0]
        }],
        blendMode: ee.blendMode
      }
    }
    class VT {
      constructor(ee) {
        this.fixed = ee, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(ee, ie, He) {
        var ye;
        if (He === this.lastFrame) return !1;
        this.lastFrame = He;
        const be = this.at;
        be[0] = ie[0] + .5, be[1] = ie[1] + 1.025, be[2] = ie[2] + .5;
        const Me = null !== (ye = this.fixed) && void 0 !== ye ? ye : Ue() ? dT : OT;
        let Ke = this.particles.get(Me);
        return Ke || (Ke = ee.createParticles(function(ee) {
          return YT(ee, Math.ceil(12 * ee.count * ee.life[1]) + ee.count)
        }(Me), {
          pos: be,
          half: AT
        }), this.particles.set(Me, Ke)), Ke.moveTo(be), Ke.emit(Me.count), !0
      }
      dispose() {
        for (const ee of this.particles.values()) ee.stop();
        this.particles.clear()
      }
    }
    class aT {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(ee) {
        this.indexed = !0;
        for (const ie of Di) {
          const He = DT(ie);
          for (let ye = 1; ye <= 4; ye++) {
            const be = ee.blockNameToBlockId(`${ie}|meta|rot${ye}|Running`, !0);
            if (null === be) continue;
            let Me = this.pufferIndexByStyle.get(He);
            void 0 === Me && (Me = this.pufferList.push(new VT(He === OT ? null : He)) - 1, this.pufferIndexByStyle.set(He, Me)), this.pufferIndexById[be] = Me + 1
          }
        }
      }
      onAfterRender(ee, ie) {
        this.indexed || this.index(ee);
        const He = performance.now(),
          ye = 0 === this.lastMs ? 0 : Math.min(He - this.lastMs, 250) / 1e3;
        this.lastMs = He, this.frame++, ee.particlesEnabled() ? (this.scan(ee, ie), this.puff(ee, ye)) : this.sources = []
      }
      dispose() {
        for (const ee of this.pufferList) ee.dispose();
        this.sources = [], this.found = []
      }
      scan(ee, ie) {
        0 === this.scanRow && (this.origin = [Math.floor(ie[0]) - 12, Math.floor(ie[1]) - 6, Math.floor(ie[2]) - 12]);
        const He = Math.min(this.scanRow + 16, 325),
          [ye, be, Me] = this.origin,
          Ke = this.hits;
        Ke.length = 0;
        for (let Ue = this.scanRow; Ue < He; Ue++) {
          const ie = ye + Ue % 25,
            He = be + Math.floor(Ue / 25);
          ee.scanBlocks(ie, He, Me, ie + 1, He + 1, Me + 25, this.pufferIndexById, Ke)
        }
        for (let Ue = 0; Ue < Ke.length; Ue += 4) {
          const ee = Ke[Ue + 3];
          this.found.push({
            pos: [Ke[Ue], Ke[Ue + 1], Ke[Ue + 2]],
            po: ee,
            puffer: this.pufferList[this.pufferIndexById[ee] - 1]
          })
        }
        this.scanRow = He, 325 === He && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(ee, ie) {
        const He = this.sources.length;
        if (0 !== He) {
          this.budget = Math.min(this.budget + Math.min(He / 1.2, 12) * ie, 2);
          for (let ie = 0; ie < He && this.budget >= 1; ie++) {
            const ie = this.sources[this.cursor % He];
            this.cursor = (this.cursor + 1) % He, ee.getBlockId(ie.pos[0], ie.pos[1], ie.pos[2]) === ie.po && (ie.puffer.puff(ee, ie.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const cT = {
        ...WT([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      xT = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function LT(ee) {
      return 0 === ee.spots.length ? 0 : Math.min(1 * ee.level, 4)
    }

    function CT(ee) {
      return 0 === ee.glass.length ? 0 : Math.min(.75 * ee.level, 3)
    }

    function vT(ee) {
      return `${ee.ctrl.join(",")}:${ee.rot}:${ee.cu},${ee.cv}:${ee.w},${ee.h},${ee.d}`
    }

    function uT(ee, ie) {
      const He = ie.w - 2,
        ye = ie.h - 2,
        be = ie.d - 2,
        Me = [];
      for (let Ke = 0; Ke < He * ye * be; Ke++) {
        const Ue = Ke % He,
          Fe = Math.floor(Ke / He) % be,
          Je = Math.floor(Ke / (He * be));
        if (Ue > 0 && Ue < He - 1 && Fe > 0 && Fe < be - 1 && Je > 0 && Je < ye - 1) continue;
        const oe = ey(ie, by(ie, Ke)),
          Re = af(ee, oe);
        if (null !== Re && "Fuel Rod" === VH(Re))
          for (const ie of xT) {
            const He = [oe[0] + ie[0], oe[1] + ie[1], oe[2] + ie[2]];
            lT(ee, He) && Me.push(ST(He, ie))
          }
      }
      return Me
    }

    function mT(ee, ie) {
      const {
        lo: He,
        hi: ye
      } = wF(ie), be = [];
      for (let Me = He[0]; Me < ye[0]; Me++)
        for (let ie = He[1]; ie < ye[1]; ie++) {
          const Ke = Me === He[0] || Me === ye[0] - 1 || ie === He[1] || ie === ye[1] - 1 ? 1 : Math.max(1, ye[2] - 1 - He[2]);
          for (let Ue = He[2]; Ue < ye[2]; Ue += Ke) {
            const Ke = [Me, ie, Ue];
            if (!lT(ee, Ke)) continue;
            const Fe = Me === He[0] ? xT[1] : Me === ye[0] - 1 ? xT[0] : Ue === He[2] ? xT[5] : Ue === ye[2] - 1 ? xT[4] : ie === He[1] ? xT[3] : xT[2];
            be.push(ST(Ke, Fe))
          }
        }
      return be
    }

    function lT(ee, ie) {
      const He = af(ee, ie);
      return null !== He && "Reactor Glass" === VH(He)
    }

    function ST(ee, ie) {
      return [
        [ee[0] + .5 + .55 * ie[0], ee[1] + .5 + .55 * ie[1], ee[2] + .5 + .55 * ie[2]],
        [0 === ie[0] ? .4 : .02, 0 === ie[1] ? .4 : .02, 0 === ie[2] ? .4 : .02]
      ]
    }
    class nT {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(ee, ie, He, ye) {
        const be = [],
          Me = new Set;
        for (const Je of ie) {
          var Ke, Ue, Fe;
          const {
            box: ie
          } = Je;
          if ("reactor" !== Je.kind || Je.level <= 0 || (ie.ctrl[0] - He[0]) ** 2 + (ie.ctrl[1] - He[1]) ** 2 + (ie.ctrl[2] - He[2]) ** 2 > 576) continue;
          const oe = vT(ie);
          Me.add(oe);
          let Re = this.spots.get(oe);
          if ((!Re || ye - Re.at > 3e3) && (Re = {
              at: ye,
              spots: uT(ee, ie),
              glass: mT(ee, ie)
            }, this.spots.set(oe, Re)), 0 === Re.spots.length && 0 === Re.glass.length) continue;
          const ke = this.sparking.find((ee => ee.key === oe));
          be.push({
            key: oe,
            level: Je.level,
            spots: Re.spots,
            glass: Re.glass,
            budget: null !== (Ke = null === ke || void 0 === ke ? void 0 : ke.budget) && void 0 !== Ke ? Ke : 0,
            cursor: null !== (Ue = null === ke || void 0 === ke ? void 0 : ke.cursor) && void 0 !== Ue ? Ue : 0,
            glassBudget: null !== (Fe = null === ke || void 0 === ke ? void 0 : ke.glassBudget) && void 0 !== Fe ? Fe : 0
          })
        }
        for (const Je of this.spots.keys()) Me.has(Je) || this.spots.delete(Je);
        this.sparking = be
      }
      emit(ee, ie, He) {
        var ye;
        if (0 === this.sparking.length || !ee.particlesEnabled() || He === this.lastFrame) return;
        this.lastFrame = He;
        let be = 0,
          Me = 0;
        for (const fe of this.sparking) be += LT(fe), Me += CT(fe);
        const Ke = be > 8 ? 8 / be : 1,
          Ue = Me > 6 ? 6 / Me : 1;
        let Fe, Je = null,
          oe = null;
        for (const fe of this.sparking) fe.budget = Math.min(fe.budget + LT(fe) * Ke * ie, 2), fe.budget >= 1 && (!Je || fe.budget > Je.budget) && (Je = fe), fe.glassBudget = Math.min(fe.glassBudget + CT(fe) * Ue * ie, 2), fe.glassBudget >= 1 && (!oe || fe.glassBudget > oe.glassBudget) && (oe = fe);
        if (Je) Je.budget--, Fe = Je.spots[Je.cursor++ % Je.spots.length];
        else {
          if (!oe) return;
          oe.glassBudget--, Fe = oe.glass[Math.floor(Math.random() * oe.glass.length)]
        }
        const [Re, ke] = Fe, qe = null !== (ye = this.emitter) && void 0 !== ye ? ye : this.create(ee, Re, ke);
        qe.moveTo(Re, ke), qe.emit(cT.count)
      }
      dispose() {
        var ee;
        null === (ee = this.emitter) || void 0 === ee || ee.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(ee, ie, He) {
        const ye = Math.ceil(14 * cT.count * cT.life[1]) + cT.count;
        return this.emitter = ee.createParticles(YT(cT, ye), {
          pos: ie,
          half: He
        }), this.emitter
      }
    }
    const jT = [2, 3.2],
      sT = 1 / 3,
      IT = 1 / .6,
      hT = {
        texture: PT,
        bk: Math.ceil(18 * jT[1]) + 4,
        minLifeTime: jT[0] / IT,
        maxLifeTime: jT[1] / IT,
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
        blendMode: AU.e.Standard
      };
    class NT {
      constructor(ee) {
        this.plans = ee, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new nT, this.frame = 0, this.outline = new ET(ee)
      }
      onAfterRender(ee, ie, He) {
        const ye = performance.now(),
          be = 0 === this.lastMs ? 0 : Math.min(ye - this.lastMs, 250) / 1e3;
        if (this.lastMs = ye, this.outline.fade(ee, ye), this.puff(ee, be, He), this.sparks.emit(ee, be, this.frame++), ye - this.lastCheckMs < 150) return;
        this.lastCheckMs = ye;
        const Me = this.plans.all().filter((ee => ee.formed && GT(ee.box.ctrl, He) <= 4096));
        this.plumes = Me.filter((ee => "reactor" === ee.kind && ee.level > 0)).map((ee => ({
          box: ee.box,
          level: ee.level
        }))), this.updateHums(ee, ie, Me, He), this.sparks.update(ee, Me, He, ye), this.chimeFormed(ee, ie, Me, ye)
      }
      dispose(ee) {
        var ie;
        this.outline.dispose(ee), null === (ie = this.steam) || void 0 === ie || ie.dispose(), this.steam = null, this.sparks.dispose();
        for (const He of this.hums.values()) He.stop();
        this.hums.clear()
      }
      chimeFormed(ee, ie, He, ye) {
        const be = this.outline.check(ee, He, ye);
        be && ee.playSound(ie, "exp_levelup", .6, 1, {
          mb: [be.box.ctrl[0] + .5, be.box.ctrl[1], be.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(ee, ie, He) {
        const ye = this.plumes;
        if (0 === ye.length || !ee.particlesEnabled()) return void(this.plumeBudget = 0);
        const be = ye.reduce(((ee, ie) => ee + 3 * ie.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + be * ie, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let Me = this.plumeCursor % (be / 3);
        this.plumeCursor++;
        let Ke = ye[0];
        for (const Re of ye) {
          if (Me < Re.level) {
            Ke = Re;
            break
          }
          Me -= Re.level
        }
        const {
          lo: Ue,
          hi: Fe
        } = wF(Ke.box);
        if (function(ee, ie, He) {
            const ye = Math.max(ee[0] - He[0], 0, He[0] - ie[0]),
              be = Math.max(ee[2] - He[2], 0, He[2] - ie[2]);
            return Math.hypot(ye, He[1] - ie[1], be)
          }(Ue, Fe, He) < 6 && Math.random() > sT) return;
        const Je = [(Ue[0] + Fe[0]) / 2, Fe[1] + .05, (Ue[2] + Fe[2]) / 2],
          oe = [(Fe[0] - Ue[0]) / 2 - .5, .05, (Fe[2] - Ue[2]) / 2 - .5];
        this.steam ??= ee.createParticles(hT, {
          pos: Je,
          half: oe
        }), this.steam.moveTo(Je, oe), this.steam.emit(1)
      }
      updateHums(ee, ie, He, ye) {
        const be = new Map;
        for (const Ke of He) "reactor" === Ke.kind && Ke.level > 0 && GT(Ke.box.ctrl, ye) <= 576 && be.set(`${Me=Ke.box.ctrl,`${Me[0]},${Me[1]},${Me[2]}`}:${Ke.level}`, Ke);
        var Me;
        for (const [Ke, Ue] of this.hums) be.has(Ke) || (Ue.stop(), this.hums.delete(Ke));
        for (const [Ke, Ue] of be) {
          if (this.hums.has(Ke)) continue;
          const {
            lo: He,
            hi: ye
          } = wF(Ue.box), be = [(He[0] + ye[0]) / 2, He[1], (He[2] + ye[2]) / 2], Me = ee.playSound(ie, "rocketEngineLoop", .08 + .06 * Ue.level, .55, {
            mb: be,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          Me && this.hums.set(Ke, Me)
        }
      }
    }

    function GT(ee, ie) {
      return (ee[0] - ie[0]) ** 2 + (ee[1] - ie[1]) ** 2 + (ee[2] - ie[2]) ** 2
    }
    class rT {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      OE(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const ye = [ee.baf2BombAt[0], ee.baf2BombAt[1], ee.baf2BombAt[2]],
          be = ee.baf2BombR;
        if (ee.baf2BombBoom) {
          const ee = Math.hypot(ie[0] - ye[0], ie[1] - ye[1], ie[2] - ye[2]);
          this.yR({
            fuse: null,
            blast: {
              at: ye,
              r: be,
              receivedAt: He,
              distance: ee,
              flash: ee <= 3 * be
            }
          })
        } else this.yR({
          ...this.snapshot,
          fuse: ee.baf2BombMs > 0 ? {
            at: ye,
            r: be,
            endsAt: He + ee.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      yR(ee) {
        this.snapshot = ee;
        for (const ie of this.listeners) ie()
      }
    }
    const QT = (0, ye.memo)((function(ee) {
      var ie;
      let {
        store: He
      } = ee;
      const {
        t: be
      } = (0, Zb.v)(), [Me, Ke] = (0, ye.useState)((() => He.get())), [Ue, Fe] = (0, ye.useState)((() => performance.now()));
      (0, ye.useEffect)((() => (Ke(He.get()), He.subscribe((() => {
        Ke(He.get()), Fe(performance.now())
      })))), [He]);
      const {
        fuse: Je,
        blast: oe
      } = Me;
      (0, ye.useEffect)((() => {
        if (!Je) return;
        const ee = setInterval((() => {
          Fe(performance.now())
        }), 250);
        return () => {
          clearInterval(ee)
        }
      }), [Je]);
      const [Re, ke] = (0, ye.useState)(!1);
      (0, ye.useEffect)((() => {
        if (null === oe || void 0 === oe || !oe.flash) return;
        ke(!0);
        const ee = setTimeout((() => {
          ke(!1)
        }), 2500);
        return () => {
          clearTimeout(ee)
        }
      }), [oe]);
      const qe = Je ? function(ee, ie) {
        return ee.endsAt <= ie ? 0 : Math.ceil((ee.endsAt - ie) / 1e3)
      }(Je, Ue) : 0;
      return (0, gM.jsxs)(gM.Fragment, {
        children: [qe > 0 && (0, gM.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: be("buildAFactory2Game:bombCountdown", {
            amount: String(qe),
            radius: String(null !== (ie = null === Je || void 0 === Je ? void 0 : Je.r) && void 0 !== ie ? ie : 0)
          })
        }), Re && (0, gM.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function ep(ee) {
      const ie = Math.min(4, Math.max(1, ee / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * ee / 4)),
        capSpread: Math.min(5 * ee / 8, 24 * ie),
        capThick: 6 * ie,
        stemHalfWidth: 3 * ie,
        puffScale: ie
      }
    }
    class ip {
      constructor() {
        this.lJ = !1
      }
      hold(ee) {
        ee.getCameraFar() < 1e3 && (ee.setCameraFar(1e3), this.lJ = !0)
      }
      release(ee) {
        this.lJ && (this.lJ = !1, ee.setCameraFar(null))
      }
    }
    const Hp = 1 / .6,
      yp = [.2, .1, .2],
      bp = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Mp = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: AU.e.Standard,
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
      Kp = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: AU.e.Standard,
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
      Up = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: AU.e.Standard,
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
      Fp = {
        texture: PT,
        bk: Math.ceil(120) + 4,
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
        blendMode: AU.e.Add
      };
    class Jp {
      constructor(ee) {
        this.store = ee, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new ip, this.timers = []
      }
      onAfterRender(ee, ie) {
        const He = performance.now(),
          ye = 0 === this.lastMs ? 0 : Math.min(He - this.lastMs, 250) / 1e3;
        this.lastMs = He;
        const {
          fuse: be,
          blast: Me
        } = this.store.get();
        null !== Me && Me !== this.shownBlast && (this.shownBlast = Me, this.startBlast(ee, ie, Me, He));
        const Ke = ee.particlesEnabled();
        null !== be && be.endsAt > He && Ke ? this.emitBeacon(ee, be, ye, He) : this.beaconBudget = 0, null !== this.cloud && (He - this.cloud.startMs > 33e3 ? this.disposeCloud(ee) : (this.far.hold(ee), Ke && this.emitCloud(ee, ye, He)))
      }
      dispose(ee) {
        var ie;
        null === (ie = this.beacon) || void 0 === ie || ie.dispose(), this.beacon = null, this.disposeCloud(ee);
        for (const He of this.timers) clearTimeout(He);
        this.timers.length = 0
      }
      emitBeacon(ee, ie, He, ye) {
        const be = ie.endsAt - ye < 5e3 ? 350 : 1e3,
          Me = .5 + .5 * Math.sin(2 * Math.PI * ye / be);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * Me * He, 4), this.beaconBudget < 1) return;
        const Ke = Math.floor(this.beaconBudget);
        this.beaconBudget -= Ke;
        const [Ue, Fe, Je] = ie.at, oe = [Ue + .5, Fe + 1.1, Je + .5];
        this.beacon ??= ee.createParticles(Fp, {
          pos: oe,
          half: yp
        }), this.beacon.moveTo(oe), this.beacon.emit(Ke)
      }
      startBlast(ee, ie, He, ye) {
        var be;
        null === (be = this.beacon) || void 0 === be || be.dispose(), this.beacon = null, this.disposeCloud(ee);
        const Me = (0, DU.isMobile)() ? .5 : 1;
        this.streams = [Mp, Kp, Up].map((ee => {
          const ie = Math.round(ee.count * Me);
          return {
            spec: ee,
            particles: null,
            rate: ie / ((ee.toMs - ee.fromMs) / 1e3),
            budget: 0,
            left: ie
          }
        })), this.cloud = {
          blast: He,
          startMs: ye
        };
        const Ke = Math.max(.25, 1 - He.distance / (6 * He.r)),
          Ue = He.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [He, ye, be] of bp) Rp(ee, ie, He, Ke * ye, be)
        }), Ue))
      }
      emitCloud(ee, ie, He) {
        const {
          blast: ye,
          startMs: be
        } = this.cloud, Me = He - be, [Ke, Ue, Fe] = ye.at, Je = ep(ye.r);
        for (const oe of this.streams) {
          const {
            spec: He
          } = oe;
          if (oe.left <= 0 || Me < He.fromMs) continue;
          oe.budget += oe.rate * ie;
          const be = Math.min(Math.floor(oe.budget), oe.left);
          if (be < 1) continue;
          oe.budget -= be, oe.left -= be;
          const Re = oe.particles ??= this.createStream(ee, He, ye);
          if (He === Mp) {
            const ee = Je.stemHalfWidth;
            Re.moveTo([Ke, Ue + 1, Fe], [ee, 1, ee])
          } else if (He === Kp) {
            const ee = Je.capSpread * Math.min(1, (Me - He.fromMs) / 3e3),
              ie = Math.sqrt(Math.random()),
              ye = 2 * Math.random() * Math.PI,
              be = Math.cos(ye) * ie,
              oe = Math.sin(ye) * ie,
              ke = Ke + be * ee,
              qe = Fe + oe * ee,
              fe = Je.capThick,
              Te = Ue + Je.capHeight + fe * (1 - ie * ie) * 2;
            Re.setDirections([.7 * be, .05, .7 * oe], [be, .2, oe]), Re.moveTo([ke, Te, qe], [fe, fe, fe])
          } else {
            this.ringAngle += 2.39996;
            const ee = Math.cos(this.ringAngle),
              ie = Math.sin(this.ringAngle);
            Re.setDirections([ee, .05, ie], [ee, .1, ie]), Re.moveTo([Ke + 2 * ee, Ue + .5, Fe + 2 * ie], [0, .5, 0])
          }
          Re.emit(be)
        }
      }
      createStream(ee, ie, He) {
        const {
          r: ye
        } = He, be = Math.max(ie.life[0], ye / 25), Me = ie === Up ? [.9 * be, be] : ie.life, Ke = ep(ye), Ue = ie === Up ? 1 : Ke.puffScale, Fe = {
          texture: PT,
          bk: ie.count + 4,
          minLifeTime: Me[0] / Hp,
          maxLifeTime: Me[1] / Hp,
          minSize: ie.size[0] * Ue,
          maxSize: ie.size[1] * Ue,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, ie.gravity * Hp * Hp, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: ie.from[0],
            maxColor: ie.from[1]
          }, {
            timeFraction: .6,
            minColor: op(ie.from[0], ie.to[0]),
            maxColor: op(ie.from[1], ie.to[1])
          }, {
            timeFraction: 1,
            minColor: ie.to[0],
            maxColor: ie.to[1]
          }],
          blendMode: ie.blend
        };
        if (ie === Mp) {
          const ee = Ke.capHeight / ((Me[0] + Me[1]) / 2);
          Fe.minEmitPower = .9 * ee * Hp, Fe.maxEmitPower = 1.05 * ee * Hp, Fe.dir1 = [-.1, 1, -.1], Fe.dir2 = [.1, 1, .1]
        } else ie === Kp ? (Fe.minEmitPower = 1.2, Fe.maxEmitPower = 2, Fe.dir1 = [-1, .05, -1], Fe.dir2 = [1, .2, 1]) : (Fe.minEmitPower = 39.583333333333336, Fe.maxEmitPower = 41.66666666666667, Fe.dir1 = [1, 0, 0], Fe.dir2 = [1, 0, 0]);
        return ee.createParticles(Fe, {
          pos: He.at
        })
      }
      disposeCloud(ee) {
        for (const He of this.streams) {
          var ie;
          null === (ie = He.particles) || void 0 === ie || ie.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(ee)
      }
    }

    function op(ee, ie) {
      return [(ee[0] + ie[0]) / 2, (ee[1] + ie[1]) / 2, (ee[2] + ie[2]) / 2, .75 * ee[3]]
    }

    function Rp(ee, ie, He, ye, be) {
      try {
        ee.playSound(ie, He, ye, be)
      } catch (Me) {
        console.error(Me)
      }
    }
    const kp = {
        bk: 720,
        perS: 100
      },
      qp = {
        bk: 320,
        perS: 44
      };
    class fp {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(ee, ie) {
        this.zone = {
          centre: [...ee.centre],
          r: ee.r,
          band: ee.band ? [ee.band[0], ee.band[1]] : void 0
        }, this.endsAt = ie
      }
      stop() {
        this.zone = null
      }
      OE(ee, ie) {
        const {
          baf2FalloutMs: He,
          baf2FalloutAt: ye,
          baf2FalloutR: be,
          baf2FalloutY: Me
        } = ee;
        He > 0 && ye && void 0 !== be ? this.start({
          centre: ye,
          r: be,
          band: Me
        }, ie + He) : this.stop()
      }
      perS(ee, ie, He) {
        const ye = this.zone;
        if (!ye) return 0;
        const be = this.endsAt - ee;
        return be <= 0 ? (this.zone = null, 0) : ye.band && (ie[1] < ye.band[0] || ie[1] > ye.band[1]) || Math.hypot(ie[0] - ye.centre[0], ie[2] - ye.centre[2]) > ye.r ? 0 : He.perS * Math.min(1, be / 5e3)
      }
    }
    const Tp = [5, 7],
      pp = [24, 8, 24],
      Xp = .5,
      zp = 1 / .6,
      Bp = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class Ep {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, DU.isMobile)();
        this.state = new fp, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(ee) {
          return ee ? qp : kp
        }(ee)
      }
      startFallout(ee, ie) {
        this.state.start(ee, ie)
      }
      stopFallout() {
        this.state.stop()
      }
      OE(ee) {
        this.state.OE(ee, performance.now())
      }
      onAfterRender(ee, ie) {
        var He;
        const ye = performance.now(),
          be = 0 === this.lastMs ? 0 : Math.min(ye - this.lastMs, 250) / 1e3;
        this.lastMs = ye;
        const Me = this.state.perS(ye, ie, this.tier);
        if (Me <= 0 || !ee.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + Me * be, Me / 4);
        const Ke = Math.floor(this.budget);
        if (Ke < 1) return;
        this.budget -= Ke;
        const Ue = this.at;
        Ue[0] = ie[0], Ue[1] = ie[1] + 12, Ue[2] = ie[2];
        const Fe = null !== (He = this.systems) && void 0 !== He ? He : this.create(ee, Ue),
          Je = this.amounts;
        Je[0] = 0, Je[1] = 0;
        for (let oe = 0; oe < Ke; oe++) Je[Math.random() < .3 ? 1 : 0]++;
        for (let oe = 0; oe < Fe.length; oe++) Je[oe] > 0 && (Fe[oe].moveTo(Ue, pp), Fe[oe].emit(Je[oe]))
      }
      dispose() {
        for (const ie of null !== (ee = this.systems) && void 0 !== ee ? ee : []) {
          var ee;
          ie.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(ee, ie) {
        return this.systems = Bp.map((He => {
          let {
            rgba: [ye, be, Me, Ke],
            share: Ue
          } = He;
          const Fe = {
            texture: "square_particle",
            bk: Math.ceil(this.tier.bk * Ue),
            minLifeTime: Tp[0] / zp,
            maxLifeTime: Tp[1] / zp,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Xp, -1, Xp],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ye, be, Me, 0]
            }, {
              timeFraction: .15,
              minColor: [ye, be, Me, Ke]
            }, {
              timeFraction: .8,
              minColor: [ye, be, Me, Ke]
            }, {
              timeFraction: 1,
              minColor: [ye, be, Me, 0]
            }],
            blendMode: AU.e.Standard
          };
          return ee.createParticles(Fe, {
            pos: ie,
            half: pp
          })
        })), this.systems
      }
    }
    const gp = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Op(ee) {
      const ie = /\|rot(\d)/.exec(ee);
      return gp[ie ? Number(ie[1]) : 1]
    }
    var dp = He(608),
      Wp = He(39259);
    const tp = new Set(dp.k);

    function Zp(ee) {
      if (-2 !== ee.count) return null;
      const ie = Se(ee.item);
      return null !== ie && tp.has(ie) ? ie : null
    }

    function wp(ee) {
      const {
        width: ie,
        height: He
      } = (0, Wp.d)(ee).hitBoxDimensions;
      return .55 / Math.max(ie, He)
    }

    function Dp(ee, ie, He) {
      if (!He) return !1;
      const ye = ee[0] + .5 - ie[0],
        be = ee[1] + .5 - ie[1],
        Me = ee[2] + .5 - ie[2];
      return ye * ye + be * be + Me * Me <= 576
    }

    function Pp(ee, ie) {
      return Math.atan2(ee[0], ee[2]) + Math.PI + ie
    }

    function Ap(ee, ie) {
      const He = 2 * Math.PI;
      return (ee + He * ie / 1e4) % He
    }
    class Yp {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = ee, this.now = ie, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = ee.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(ee, ie) {
        if (0 === this.farms.size) return;
        const He = this.now(),
          ye = Number.isNaN(this.frameMs) ? 0 : Math.min(He - this.frameMs, 100);
        this.frameMs = He, He - this.checkedMs >= 1e3 && (this.checkedMs = He, this.check(ee, ie));
        for (const be of this.farms.values()) be.shown && be.running && null !== be.model && ye > 0 && (be.spin = Ap(be.spin, ye), be.model.setPose(be.feet, Pp(be.front, be.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const ee of this.farms.values()) this.drop(ee);
        this.farms.clear()
      }
      sync() {
        const ee = new Set;
        for (const ie of this.labels.list()) {
          const He = Zp(ie);
          if (null === He) continue;
          ee.add(ie.key);
          const ye = this.farms.get(ie.key);
          if ((null === ye || void 0 === ye ? void 0 : ye.mob) === He) continue;
          ye && this.drop(ye);
          const [be, Me, Ke] = ie.pos;
          this.farms.set(ie.key, {
            pos: ie.pos,
            feet: [be + .5, Me + 1, Ke + .5],
            mob: He,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [ie, He] of this.farms) ee.has(ie) || (this.drop(He), this.farms.delete(ie));
        this.checkedMs = -1 / 0
      }
      check(ee, ie) {
        for (const He of this.farms.values()) {
          const [ye, be, Me] = He.pos, Ke = af(ee, He.pos);
          null !== Ke && VH(Ke) === ce && Dp(He.pos, ie, "Air" === af(ee, [ye, be + 1, Me])) ? (He.running = Ke.endsWith("|Running"), He.front = Op(Ke), null === He.model && (He.model = ee.createMobModel(He.mob, wp(He.mob)), null === He.model) || (He.model.setPose(He.feet, Pp(He.front, He.spin)), He.shown || (He.model.setVisible(!0), He.shown = !0))) : (He.shown && null !== He.model && He.model.setVisible(!1), He.shown = !1)
        }
      }
      drop(ee) {
        var ie;
        null === (ie = ee.model) || void 0 === ie || ie.dispose(), ee.model = null, ee.shown = !1
      }
    }
    class Vp {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(ee) {
        var ie;
        this.island = ee.baf2ColIsland, this.islandSite = (ie = ee.baf2ColSite) && 8 === ie.length ? {
          spawnXZ: [ie[0], ie[1]],
          coreXZ: [ie[2], ie[3]],
          minXZ: [ie[4], ie[5]],
          maxXZ: [ie[6], ie[7]]
        } : null, this.views = ee.baf2ColList.map((ee => ({
          entry: Kb(ee)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(ee) {
        this.status = ee, this.emit()
      }
      onOpen(ee) {
        this.openHeld = ee
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
        return this.views.map((ee => ee.entry))
      }
      entryAtRoot(ee) {
        var ie;
        return null === (ie = this.views.find((ie => {
          let {
            entry: He
          } = ie;
          return He.focus[0] === ee[0] && He.focus[1] === ee[1] + 1 && He.focus[2] === ee[2]
        }))) || void 0 === ie ? void 0 : ie.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(ee, ie) {
        return cF(this.entries(), ee, ie)
      }
      lookSource() {
        return {
          handles: ee => fy(ee) >= 0 || Ty(ee),
          line: (ee, ie) => this.lookLine(ee, ie),
          version: () => this.beamsVersion
        }
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const ee of this.listeners) ee()
      }
    }
    const ap = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((ee => ee / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((ee => [ee, ee + 1, ee + 2, ee, ee + 2, ee + 3]))
    };

    function cp(ee, ie, He, ye, be, Me, Ke) {
      let Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const Fe = Math.cos(Ue),
        Je = Math.sin(Ue),
        oe = ee.positions.length / 3,
        {
          positions: Re,
          indices: ke
        } = ap;
      for (let qe = 0; qe < Re.length; qe += 3) {
        const Ue = Re[qe] * be,
          oe = Re[qe + 2] * Ke;
        ee.positions.push(ie + Ue * Fe + oe * Je, He + Re[qe + 1] * Me, ye - Ue * Je + oe * Fe)
      }
      for (const qe of ke) ee.indices.push(oe + qe)
    }

    function xp(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return ie < 1 ? {
        rgb: ee,
        alpha: ie
      } : {
        rgb: ee,
        alpha: 1,
        opaque: !0
      }
    }
    class Lp {
      constructor(ee, ie) {
        this.style = ee, this.perSource = ie, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(ee) {
        this.sources = ee, 0 === ee.length && (this.budget = 0)
      }
      YR(ee, ie, He) {
        const ye = this.sources.length;
        if (0 !== ye) {
          var be, Me;
          this.budget = Math.min(this.budget + (be = ye, Me = this.perSource, Math.min(be * Me, NF) * ie), 2);
          for (let ie = 0; ie < ye && this.budget >= 1; ie++) {
            const ie = this.sources[this.cursor % ye];
            this.cursor = (this.cursor + 1) % ye;
            if (!(Math.max(Math.abs(ie.x - He[0]), Math.abs(ie.y - He[1]), Math.abs(ie.z - He[2])) > 32)) return this.puff(ee, ie), void this.budget--
          }
        }
      }
      dispose() {
        var ee;
        null === (ee = this.particles) || void 0 === ee || ee.dispose(), this.particles = null, this.sources = []
      }
      puff(ee, ie) {
        let {
          x: He,
          y: ye,
          z: be,
          h: Me,
          faces: Ke
        } = ie;
        const Ue = function(ee, ie, He, ye, be) {
            const [Me, Ke, Ue] = be[Math.floor(Math.random() * be.length)], Fe = .04, Je = (ee, ie, He) => ee > 0 ? ie + He + Fe : ee < 0 ? ie - Fe : ie + .1, oe = (ee, ie, He) => ee > 0 ? ie + He + Fe : ee < 0 ? ie - Fe : ie + He - .1, Re = [Je(Me, ee, 1), Je(Ke, ie, ye), Je(Ue, He, 1)], ke = [oe(Me, ee, 1), oe(Ke, ie, ye), oe(Ue, He, 1)];
            return {
              pos: [(Re[0] + ke[0]) / 2, (Re[1] + ke[1]) / 2, (Re[2] + ke[2]) / 2],
              half: [(ke[0] - Re[0]) / 2, (ke[1] - Re[1]) / 2, (ke[2] - Re[2]) / 2],
              out: [Me, Ke, Ue]
            }
          }(He, ye, be, Me, Ke),
          {
            style: Fe
          } = this,
          Je = this.particles ??= ee.createParticles(YT(Fe, Math.ceil(Fe.count * NF * Fe.life[1]) + 4), Ue);
        Je.moveTo(Ue.pos, Ue.half);
        const [oe, Re, ke] = Ue.out, qe = Fe.spread;
        Je.setDirections([oe - qe, .6 + Re, ke - qe], [oe + qe, 1 + Re, ke + qe]), Je.emit(Fe.count)
      }
    }
    const Cp = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class vp {
      constructor() {
        this.green = new Lp(rF.green, IF), this.pink = new Lp(rF.pink, hF), this.colliders = [], this.lastMs = 0
      }
      setSources(ee) {
        this.colliders = ee;
        const ie = [],
          He = [];
        for (const ye of ee) {
          const [ee, be, Me] = ye.focus;
          ie.push({
            x: ee,
            y: be - 1,
            z: Me,
            h: 2,
            faces: Cp
          });
          for (let ie = 0; ie < 4; ie++) {
            if (!ye.live[ie]) continue;
            const [ee, be, Me] = zy(ye.focus, ie, Fy.LASER_D), [Ke, , Ue] = Xy[ie], Fe = Cp.filter((ee => ee[0] !== Ke || ee[2] !== Ue || 0 !== ee[1]));
            He.push({
              x: ee,
              y: be,
              z: Me,
              h: 1,
              faces: Fe
            })
          }
        }
        this.green.setSources(ie), this.pink.setSources(He)
      }
      onAfterRender(ee) {
        const ie = performance.now(),
          He = 0 === this.lastMs ? 0 : Math.min(ie - this.lastMs, 250) / 1e3;
        if (this.lastMs = ie, 0 === this.colliders.length || !ee.particlesEnabled()) return;
        const ye = ee.getCameraPosition();
        this.green.YR(ee, He, ye), this.pink.YR(ee, He, ye)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const mp = 1.04,
      lp = xp([1, 120 / 255, 220 / 255]),
      Sp = xp([1, .25, .25], .35);
    class np {
      constructor(ee) {
        this.store = ee, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new vp
      }
      onAfterRender(ee) {
        this.store.version() !== this.builtVersion && this.rebuild(ee);
        const ie = performance.now();
        for (const He of this.beams) {
          const ye = 1 + .35 * Math.sin(ie / 700 * Math.PI * 2 + He.phase);
          ee.setGameMesh(He.mesh, {
            scale: [He.alongX ? 1 : ye, ye, He.alongX ? ye : 1]
          })
        }
        this.glow.onAfterRender(ee)
      }
      dispose(ee) {
        this.clear(ee), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(ee) {
        this.clear(ee), this.builtVersion = this.store.version();
        const ie = [];
        for (const {
            entry: He
          }
          of this.store.colliders()) He.on && He.live.some(Boolean) && (this.addBeams(ee, He), ie.push(He)), He.blockers.length > 0 && this.addMarkers(ee, He);
        this.glow.setSources(ie)
      }
      addBeams(ee, ie) {
        const [He, ye, be] = ie.focus, Me = sF - .25, Ke = (.25 + sF) / 2;
        for (let Ue = 0; Ue < 4; Ue++) {
          if (!ie.live[Ue]) continue;
          const [Fe, , Je] = Xy[Ue], oe = 0 !== Fe, Re = {
            positions: [],
            indices: []
          };
          cp(Re, 0, 0, 0, oe ? Me : .2, .2, oe ? .2 : Me);
          const ke = [He + .5 + Fe * Ke, ye + .5, be + .5 + Je * Ke],
            qe = ee.createGameMesh(Re, lp, ke);
          this.meshes.push(qe), this.beams.push({
            mesh: qe,
            alongX: oe,
            phase: Ue * Math.PI / 2
          })
        }
      }
      addMarkers(ee, ie) {
        const He = ie.blockers[0],
          ye = {
            positions: [],
            indices: []
          };
        for (const [be, Me, Ke] of ie.blockers) cp(ye, be - He[0] + .5, Me - He[1] + .5, Ke - He[2] + .5, mp, mp, mp);
        this.meshes.push(ee.createGameMesh(ye, Sp, He))
      }
      clear(ee) {
        for (const ie of this.meshes) ee.disposeGameMesh(ie);
        this.meshes = [], this.beams = []
      }
    }
    const jp = [.56, .83, 1],
      sp = [1, .73, .08],
      Ip = [1, .25, .25],
      hp = [.85, .85, .85],
      Np = [.3, .45, .6];

    function Gp(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const Ke = be / 2,
        Ue = be + Me;
      for (const Fe of [-Ke, Ke])
        for (const be of [-Ke, Ke]) cp(ee, ie, He + Fe, ye + be, Ue, Me, Me), cp(ee, ie + Fe, He, ye + be, Me, Ue, Me), cp(ee, ie + Fe, He + be, ye, Me, Me, Ue)
    }

    function rp(ee) {
      return ie => ee.isBlockInLoadedChunk(ie[0], ie[1], ie[2]) && 0 === ee.getBlockId(ie[0], ie[1], ie[2])
    }

    function Qp(ee) {
      return ee.map((ee => {
        let {
          free: ie,
          blocked: He,
          gaps: ye,
          supports: be
        } = ee;
        return `${ie.join(";")}|${He.join(";")}|${ye.join(";")}|${be.join(";")}`
      })).join("/")
    }

    function eX(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const Me = ie[0],
        Ke = {
          positions: [],
          indices: []
        };
      for (const [Ue, Fe, Je] of ie) Gp(Ke, Ue - Me[0] + .5, Fe - Me[1] + .5, Je - Me[2] + .5, ye, be);
      return ee.createGameMesh(Ke, He, Me)
    }
    class iX {
      constructor(ee) {
        this.store = ee, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(ee, ie, He) {
        var ye;
        const be = null === (ye = ee.Vye(ie)) || void 0 === ye ? void 0 : ye.name;
        if (be !== oy && be !== Jy) return void("" !== this.shownKey && this.show(ee, "", []));
        const Me = performance.now();
        if (Me - this.lastCheckMs >= 200 && (this.lastCheckMs = Me, be === oy ? this.check(ee, He) : this.preview(ee, He)), this.pulses.length > 0) {
          const ie = 1 + .12 * Math.sin(Me / 1e3 * 1.25 * Math.PI * 2),
            He = [ie, ie, ie];
          for (const ye of this.pulses) ee.setGameMesh(ye, {
            scale: He
          })
        }
      }
      dispose(ee) {
        this.clear(ee), this.shownKey = ""
      }
      check(ee, ie) {
        const He = rp(ee),
          ye = [];
        for (const {
            entry: Me
          }
          of this.store.colliders()) {
          Me.focus.every(((ee, He) => Math.abs(ee + .5 - ie[He]) <= Fy.GHOST_REACH)) && ye.push(jF(Me, He))
        }
        const be = Qp(ye);
        be !== this.shownKey && this.show(ee, be, ye)
      }
      preview(ee, ie) {
        const He = ee.getTargetedBlock(),
          ye = He ? [He.Xp[0], He.Xp[1], He.Xp[2]] : null,
          be = null !== ye && ye.every(((ee, He) => Math.abs(ee + .5 - ie[He]) <= 8)),
          Me = this.store.site(),
          Ke = be && Me ? function(ee, ie, He) {
            const ye = py(ee);
            if (!ye.every(ie)) return null;
            const be = gy(ee, He);
            return {
              column: ye,
              spots: jF({
                focus: ye[1],
                lasers: [!1, !1, !1, !1],
                open: be,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, ie),
              fits: be.filter(Boolean).length >= Fy.MIN_SPOTS
            }
          }(ye, rp(ee), Me) : null,
          Ue = Ke ? [Ke.spots] : [],
          Fe = Ke ? `preview ${ye.join(",")}|${Ke.fits}|${Qp(Ue)}` : "";
        var Je, oe;
        Fe !== this.shownKey && this.show(ee, Fe, Ue, null !== (Je = null === Ke || void 0 === Ke ? void 0 : Ke.column) && void 0 !== Je ? Je : [], null === (oe = null === Ke || void 0 === Ke ? void 0 : Ke.fits) || void 0 === oe || oe)
      }
      show(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          be = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(ee), this.shownKey = ie, ye.length > 0 && this.meshes.push(eX(ee, ye, xp(be ? hp : Ip)));
        for (const {
            free: Me,
            blocked: Ke,
            gaps: Ue,
            supports: Fe
          }
          of He) {
          for (const [ie, He, ye] of Me) {
            const be = {
              positions: [],
              indices: []
            };
            Gp(be, 0, 0, 0);
            const Me = ee.createGameMesh(be, xp(jp), [ie + .5, He + .5, ye + .5]);
            this.meshes.push(Me), this.pulses.push(Me)
          }
          Ke.length > 0 && this.meshes.push(eX(ee, Ke, xp(sp))), Ue.length > 0 && this.meshes.push(eX(ee, Ue, xp(Ip), 1.06, .07)), Fe.length > 0 && this.meshes.push(eX(ee, Fe, xp(Np)))
        }
      }
      clear(ee) {
        for (const ie of this.meshes) ee.disposeGameMesh(ie);
        this.meshes = [], this.pulses = []
      }
    }
    class HX {
      constructor() {
        this.stored = new Map, this.lJ = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(ee) {
        if (!ee.baf2TermOpen) return !1;
        ee.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [ie, He] of ee.baf2TermItems) He > 0 ? this.stored.set(ie, He) : this.stored.delete(ie);
        if (ee.baf2TermHeld && (this.lJ = new Map(ee.baf2TermHeld)), this.pending = this.pending.filter((ie => ie.seq > ee.baf2TermAcked)), this.silos = ee.baf2TermSilos, this.readOnly = ee.baf2TermReadOnly, this.pocket = !0 === ee.baf2TermPocket, ee.baf2TermReset) this.resort();
        else {
          const ee = new Set(this.order);
          for (const ie of this.stored.keys()) ee.has(ie) || this.order.push(ie)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((ee, ie) => this.amount(ie) - this.amount(ee) || ee.localeCompare(ie))), this.changed()
      }
      take(ee, ie) {
        const He = Ui(ee, this.amount(ie));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: ie,
          amount: He,
          put: !1
        }), this.recents = [ie, ...this.recents.filter((ee => ee !== ie))].slice(0, 6), this.changed(), Hi(this.seq, ee, ie)
      }
      put(ee, ie) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: ie,
          amount: Ui(ee, this.heldAmount(ie)),
          put: !0
        }), this.changed(), yi(this.seq, ee, ie)
      }
      putAll() {
        this.seq++;
        for (const ee of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: ee,
          amount: this.heldAmount(ee),
          put: !0
        });
        return this.changed(), bi(this.seq)
      }
      amount(ee) {
        var ie;
        let He = null !== (ie = this.stored.get(ee)) && void 0 !== ie ? ie : 0;
        for (const ye of this.pending) ye.item === ee && (He += ye.put ? ye.amount : -ye.amount);
        return Math.max(0, He)
      }
      heldAmount(ee) {
        var ie;
        let He = null !== (ie = this.lJ.get(ee)) && void 0 !== ie ? ie : 0;
        for (const ye of this.pending) ye.put && ye.item === ee && (He -= ye.amount);
        return Math.max(0, He)
      }
      heldItems() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((ie => ie === ee || this.heldAmount(ie) > 0))
      }
      items() {
        return this.order.filter((ee => this.amount(ee) > 0))
      }
      recent() {
        return this.recents.filter((ee => this.amount(ee) > 0))
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
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      changed() {
        this.version++;
        for (const ee of this.listeners) ee()
      }
    }
    var yX = He(39211);
    const bX = {
      isBlock: ee => void 0 !== Ae.i[ee],
      harvestType: ee => {
        var ie;
        return null === (ie = Ae.i[ee]) || void 0 === ie ? void 0 : ie.harvestType
      },
      harvestLevel: ee => {
        var ie;
        return null === (ie = Ae.i[ee]) || void 0 === ie ? void 0 : ie.harvestLevel
      },
      dropsNothing: ee => {
        var ie;
        return null === (null === (ie = Ae.i[ee]) || void 0 === ie ? void 0 : ie.drops)
      },
      displayName: ee => {
        var ie;
        return null === (ie = hK.o[ee]) || void 0 === ie ? void 0 : ie.displayName
      },
      description: ee => {
        var ie;
        return null === (ie = hK.o[ee]) || void 0 === ie ? void 0 : ie.description
      },
      harvests: ee => {
        var ie;
        return null === (ie = hK.o[ee]) || void 0 === ie ? void 0 : ie.harvests
      },
      level: ee => {
        var ie;
        return null === (ie = hK.o[ee]) || void 0 === ie ? void 0 : ie.level
      }
    };

    function MX(ee, ie, He) {
      return function(ee, ie, He, ye) {
        var be, Me;
        const Ke = ie.split("|")[0],
          Ue = ee.isBlock(ie) ? ie : ee.isBlock(Ke) ? Ke : null;
        if (null === Ue || "rock" !== ee.harvestType(Ue) || ee.dropsNothing(Ue) && !Cy.has(Ke)) return null;
        const Fe = He && "rock" === ee.harvests(He) ? null !== (be = ee.level(He)) && void 0 !== be ? be : 0 : null,
          Je = null !== (Me = null !== ye && void 0 !== ye ? ye : ee.harvestLevel(Ue)) && void 0 !== Me ? Me : 0;
        return (null !== Fe ? Je <= Fe : 0 === ee.harvestLevel(Ue)) ? null : Dy(ee, Je)
      }(bX, ee, ie, He)
    }

    function KX(ee, ie) {
      return function(ee, ie, He) {
        if (ie === wy[0]) return [(0, ae.be)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, ae.L.whiteUiText)];
        const ye = He.split("|")[0],
          be = ee.isBlock(ye) ? ee.displayName(ye) : void 0,
          Me = "string" === typeof be ? be : be && "translationKey" in be ? `$t(${be.translationKey})` : ye;
        return [(0, ae.be)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: Me
          }
        }, ae.L.whiteUiText), (0, ae.be)({
          translationKey: `item:${(0,ae.ve)(ie)}`
        }, ae.L.yellowUiText)]
      }(bX, ee, ie)
    }
    const UX = "buildAFactory2Game:";
    const FX = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function JX(ee) {
      return ee.endsWith(" Ore")
    }
    const oX = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      RX = [],
      kX = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: oX,
        plan: null,
        atomic: RX
      },
      qX = "buildAFactory2Game:",
      fX = new Set(["Splitter", "Sorting Gate"]),
      TX = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class pX {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = ee, this.planAt = ie, this.tierOf = He, this.po = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.lJ = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = kX, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(ee, ie, He) {
        var ye, be, Me;
        let Ke = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ue = null !== (ye = null === (be = ee.Vye(ie)) || void 0 === be ? void 0 : be.name) && void 0 !== ye ? ye : null,
          Fe = ee.isPlayerCrouching(ie),
          Je = 0 === He ? null : this.resolve(ee, He),
          oe = null !== Je && null !== Ke && fX.has(Je.rootName) && function(ee, ie) {
            return TX.some((He => {
              let [ye, be] = He;
              const Me = ee.getBlockId(ie[0] + ye, ie[1], ie[2] + be);
              return 0 !== Me && "Express Belt" === ee.getMetaInfo(Me).rootName
            }))
          }(ee, Ke),
          Re = this.updatePlan(0 === He ? null : Ke),
          ke = this.tierOf(),
          qe = null === Ke ? null : (0, yX.e)(He),
          fe = null !== qe && null !== Ke && (0, yX.h)(function(ee) {
            return (ie, He, ye) => ee.getBlockId(ie, He, ye)
          }(ee), Ke[0], Ke[1], Ke[2], qe),
          Te = this.readAfloat(ee, He, Ke);
        if (He === this.po && fe === this.missesMaker && Te === this.afloat && Ue === this.lJ && Fe === this.crouching && oe === this.express && ke === this.tier && !Re && (!this.targetsLive || !this.liveMoved(Ke))) return;
        this.po = He, this.missesMaker = fe, this.afloat = Te, this.lJ = Ue, this.crouching = Fe, this.express = oe;
        const pe = oe && Je ? function(ee) {
          if (null === ee.info) return null;
          return ee.express ??= {
            ...ee.info,
            detail: `${qX}lookKeepsUpExpress`,
            detailItem: null
          }, ee.express
        }(Je) : null !== Je && fe && null !== qe ? this.besideMaker(Je, He, qe) : null !== Je && Te ? this.hanging(Je) : null !== (Me = null === Je || void 0 === Je ? void 0 : Je.info) && void 0 !== Me ? Me : null;
        this.tier = ke;
        const Xe = Je && pe ? function(ee, ie) {
          var He, ye;
          const be = Ae.i[ee];
          if (!ee.endsWith(" Ore") || "rock" !== (null === be || void 0 === be ? void 0 : be.harvestType) || 0 === be.harvestLevel) return null;
          const Me = null !== (He = be.harvestLevel) && void 0 !== He ? He : 0,
            Ke = ie ? hK.o[ie] : void 0;
          if ("rock" === (null === Ke || void 0 === Ke ? void 0 : Ke.harvests) && (null !== (ye = Ke.level) && void 0 !== ye ? ye : 0) >= Me) return null;
          const Ue = (Fe = Me, Dy(bX, Fe));
          var Fe;
          if (null === Ue) return null;
          const Je = (0, eM.e)(Ue),
            oe = /^[AEIOU]/.test(Ue) ? "An" : "";
          if ("rock" === (null === Ke || void 0 === Ke ? void 0 : Ke.harvests) && ie) return {
            key: `${qX}lookToolTooWeak${oe}`,
            lJ: (0, eM.e)(ie),
            needed: Je
          };
          return {
            key: Ue === wy[0] ? `${qX}lookNeedAnyPickaxe` : `${qX}lookNeedPickaxe${oe}`,
            lJ: null,
            needed: Je
          }
        }(Je.rootName, Ue) : null;
        this.targetsLive = !0 === (null === Je || void 0 === Je ? void 0 : Je.live) && null !== Ke;
        let ze = null;
        this.targetsLive && Je && Ke && this.live && (this.livePos[0] = Ke[0], this.livePos[1] = Ke[1], this.livePos[2] = Ke[2], this.liveVersion = this.live.version(), ze = this.live.line(Je.rootName, Ke));
        const Be = null === pe ? oX : function(ee, ie, He) {
            const ye = function(ee, ie, He) {
              const ye = cH(ee);
              if (null === ye) return null;
              const be = `${UX}lookPortMode_${ye}`,
                Me = my(ie);
              if (Me && He) return {
                mode: null,
                detail: be,
                next: `${UX}lookWrenchPickUp`,
                nextState: null
              };
              const Ke = xH(ee),
                Ue = null === Ke ? null : cH(Ke);
              return null === Ue ? {
                mode: null,
                detail: be,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: be,
                next: Me ? `${UX}lookWrenchNext` : `${UX}lookPortWrench`,
                nextState: `${UX}lookPortState_${Ue}`
              }
            }(ee, ie, He);
            if (null !== ye) return ye;
            const be = Hb(ee, ie, He);
            return null === be.mode && null === be.next ? oX : be
          }(ee.blockIdToBlockName(He), Ue, Fe),
          Ee = this.plan,
          ge = Je && pe ? this.rowsOf(Je.rootName, ke) : RX,
          Oe = this.snapshot;
        if (!(null === pe ? !Oe.visible : Oe.visible && pe === Oe.info && (de = Xe, We = Oe.tool, de === We || null !== de && null !== We && de.key === We.key && de.lJ === We.lJ && de.needed === We.needed) && function(ee, ie) {
            return ee === ie || null !== ee && null !== ie && ee.key === ie.key && JSON.stringify([ee.params, ee.keys]) === JSON.stringify([ie.params, ie.keys])
          }(ze, Oe.live) && function(ee, ie) {
            return ee.mode === ie.mode && ee.detail === ie.detail && ee.next === ie.next && ee.nextState === ie.nextState
          }(Be, Oe.wrench) && sf(Ee, Oe.plan) && ge === Oe.atomic)) {
          var de, We;
          this.snapshot = null === pe ? {
            ...Oe,
            visible: !1
          } : {
            info: pe,
            visible: !0,
            tool: Xe,
            live: ze,
            wrench: Be,
            plan: Ee,
            atomic: ge
          };
          for (const ee of this.listeners) ee()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = kX, this.po = 0, this.lJ = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(ee, ie, He) {
        if (null === He || 0 === ie || !Ue() || !JX(this.resolve(ee, ie).rootName)) return !1;
        const ye = `${He[0]},${He[1]},${He[2]},${ie}`,
          be = performance.now();
        return ye === this.afloatKey && be - this.afloatAt < XX ? this.afloat : (this.afloatKey = ye, this.afloatAt = be, function(ee, ie) {
          for (const [He, ye, be] of FX) {
            const Me = ie(ee[0] + He, ee[1] + ye, ee[2] + be);
            if (void 0 === Me || null !== Me && !JX(Me)) return !1
          }
          return !0
        }(He, ((ie, He, ye) => function(ee, ie, He, ye) {
          if (!ee.isBlockInLoadedChunk(ie, He, ye)) return;
          const be = ee.getBlockId(ie, He, ye);
          return 0 === be ? null : ee.getMetaInfo(be).rootName
        }(ee, ie, He, ye))))
      }
      liveMoved(ee) {
        var ie;
        const {
          livePos: He
        } = this;
        return null === ee || ee[0] !== He[0] || ee[1] !== He[1] || ee[2] !== He[2] || (null === (ie = this.live) || void 0 === ie ? void 0 : ie.version()) !== this.liveVersion
      }
      updatePlan(ee) {
        const ie = null === ee ? "" : ee.join(","),
          He = performance.now();
        if (ie === this.planPos && He - this.planMs < 250) return !1;
        this.planPos = ie, this.planMs = He;
        const ye = null === ee ? null : this.planAt([ee[0], ee[1], ee[2]]),
          be = !sf(ye, this.plan);
        return this.plan = ye, be
      }
      besideMaker(ee, ie, He) {
        let {
          info: ye
        } = ee;
        if (null === ye) return null;
        let be = this.besideMakerById.get(ie);
        if (void 0 === be) {
          const ee = "cryo" === He ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          be = {
            ...ye,
            detail: `${qX}${ee}`,
            detailItem: null
          }, this.besideMakerById.set(ie, be)
        }
        return be
      }
      hanging(ee) {
        let {
          info: ie,
          rootName: He
        } = ee;
        if (null === ie) return null;
        let ye = this.afloatByRoot.get(He);
        return void 0 === ye && (ye = {
          ...ie,
          detail: `${qX}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(He, ye)), ye
      }
      rowsOf(ee, ie) {
        if (null === ie) return RX;
        const He = `${ee}|${ie}`;
        let ye = this.rowsByKey.get(He);
        if (void 0 === ye) {
          const be = function(ee, ie) {
            var He;
            if (!(ee in ci)) return [];
            const ye = null !== (He = xi[ee]) && void 0 !== He ? He : [],
              be = new Map;
            for (const Ke of CM(ee, ie))
              if ((ye.includes(Ke) || LM(Ke.output) && cM(Ke.output) > Ne(ee)) && cM(Ke.output) <= ie) {
                var Me;
                const ee = null !== (Me = be.get(Ke.output)) && void 0 !== Me ? Me : [];
                ee.push(Ke.input), be.set(Ke.output, ee)
              } return uM([...be], (ee => {
              let [ie] = ee;
              return -cM(ie)
            })).map((ee => {
              let [ie, He] = ee;
              return {
                output: ie,
                inputs: He
              }
            }))
          }(ee, ie);
          ye = be.length > 0 ? be : RX, this.rowsByKey.set(He, ye)
        }
        return ye
      }
      resolve(ee, ie) {
        const {
          rootId: He,
          rootName: ye
        } = ee.getMetaInfo(ie), be = (0, pH.n)(ye) ? ie : He;
        let Me = this.byRootId.get(be);
        const Ke = Ue();
        if (void 0 === Me || Me.nuclear !== Ke) {
          var Fe;
          const He = function(ee) {
            return xy(bX, ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee)
          }(ye, ee.blockIdToBlockName(ie));
          Me = {
            info: He,
            rootName: ye,
            live: null !== He && !0 === (null === (Fe = this.live) || void 0 === Fe ? void 0 : Fe.handles(ye)),
            nuclear: Ke
          }, this.byRootId.set(be, Me)
        }
        return Me
      }
    }
    const XX = 500;
    const zX = (0, ye.memo)((function(ee) {
      var ie, He;
      let {
        store: be
      } = ee;
      const {
        t: Me
      } = (0, Zb.v)(), [Ke, Ue] = (0, ye.useState)((() => be.get()));
      (0, ye.useEffect)((() => (Ue(be.get()), be.subscribe((() => {
        Ue(be.get())
      })))), [be]);
      const {
        openInGameMenuName: Fe,
        openEverythingMenuName: Je,
        isTouchScreen: oe
      } = (0, Bb.m)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: Re,
        tool: ke,
        live: qe,
        wrench: fe,
        atomic: Te
      } = Ke, pe = Ke.visible && null === Fe && null === Je;
      if (null === Re) return null;
      const Xe = null !== fe.detail ? Me(fe.detail) : null !== (ie = Ke.plan) && void 0 !== ie && ie.ctrl ? Me("buildAFactory2Game:lookPlanCtrl") : null !== Re.detail ? Me(Re.detail, null === Re.detailItem ? void 0 : {
        item: Me(Re.detailItem)
      }) : null;
      return (0, gM.jsxs)("div", {
        className: Ob()("Baf2LookTarget", {
          Visible: pe
        }),
        "aria-hidden": !pe,
        children: [(0, gM.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: Me(Re.name)
        }), null !== Ke.plan && (0, gM.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Me(Ke.plan.key, {
            kind: Me(Ke.plan.kindKey),
            w: String(Ke.plan.w),
            h: String(Ke.plan.h),
            d: String(Ke.plan.d),
            count: String(Ke.plan.count)
          })
        }), void 0 !== (null === (He = Ke.plan) || void 0 === He ? void 0 : He.why) && (0, gM.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Me(Ke.plan.why)
        }), null !== fe.mode && (0, gM.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Me(fe.mode)
        }), null !== ke ? (0, gM.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Me(ke.key, {
            item: Me(ke.needed),
            lJ: null === ke.lJ ? "" : Me(ke.lJ)
          })
        }) : null !== qe ? (0, gM.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Me(qe.key, QF(Me, qe))
        }) : null !== Xe && (0, gM.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Xe
        }), Te.length > 0 && (0, gM.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Me("buildAFactory2Game:lookAtomicRecipes", {
            list: Te.map((ee => {
              let {
                output: ie,
                inputs: He
              } = ee;
              const ye = He.length > 1 ? ` ${Me("buildAFactory2Game:recipeMore",{count:String(He.length-1)})}` : "";
              return `${Me((0,eM.e)(He[0]))}${ye} \u2192 ${Me((0,eM.e)(ie))}`
            })).join(", ")
          })
        }), null !== fe.next && (0, gM.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Me(fe.next, {
            state: null === fe.nextState ? "" : Me(fe.nextState),
            use: Me(oe ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var BX = He(39315);
    const EX = [],
      gX = [
        [0, -1, 0]
      ];

    function OX(ee) {
      const ie = [ee];
      for (let He = 1; He <= 4; He++) He > 1 && ie.push(`${ee}|meta|rot${He}`), ie.push(`${ee}|meta|rot${He}|Running`);
      return ie
    }

    function dX(ee, ie) {
      return [Math.floor(ee[0] / ie), Math.floor(ee[1] / ie), Math.floor(ee[2] / ie)]
    }

    function WX(ee, ie, He) {
      return `${ee},${ie},${He}`
    }

    function tX(ee) {
      const ie = ee.split("|")[0];
      if (!RH(ie)) return EX;
      const He = ci[ie];
      if (yH(He)) return gX;
      const ye = Op(ee);
      return bH(He) ? [
        [-ye[0], -ye[1], -ye[2]]
      ] : db(He) ? function(ee, ie) {
        const He = ee[0] - 2 * ie[0],
          ye = ee[2] - 2 * ie[2],
          be = [];
        for (let Me = -1; Me <= 1; Me++)
          for (let ie = -1; ie <= 1; ie++) be.push([He + Me, ee[1], ye + ie]);
        return be
      }([0, 0, 0], ye) : EX
    }
    const ZX = [.5, .5, .5],
      wX = [.2, .8, .3],
      DX = [.45, 1, .5];
    class PX {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(ee) {
        this.indexed = !0;
        for (const ie of Di)
          for (const He of OX(ie)) {
            const ie = ee.blockNameToBlockId(He, !0),
              ye = tX(He);
            null !== ie && ye.length > 0 && (this.offsetsList.push(ye), this.offsetsIndexById[ie] = this.offsetsList.length)
          }
      }
      onAfterRender(ee, ie) {
        this.indexed || this.index(ee);
        const He = performance.now();
        if (He - this.lastCheckMs < 100) return;
        this.lastCheckMs = He, this.checks++;
        const ye = qf.g.BR,
          [be, Me, Ke] = dX(ie, ye);
        let Ue = !1;
        const Fe = [];
        let Je = 0;
        for (let oe = be - 2; oe <= be + 2; oe++)
          for (let ie = Me - 1; ie <= Me + 1; ie++)
            for (let be = Ke - 2; be <= Ke + 2; be++) {
              const Me = Je++,
                Ke = WX(oe, ie, be),
                Re = ee.getChunkVersion(oe, ie, be);
              let ke = this.chunks.get(Ke);
              null !== Re ? (ke || (ke = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(Ke, ke)), ke.seenAt = this.checks, ke.checkedVersion !== Re && (ke.checkedVersion = Re, Ue = !0), ke.scannedVersion !== Re && He - ke.scannedAt >= 500 && Fe.push({
                slot: Me,
                entry: ke,
                origin: [oe * ye, ie * ye, be * ye]
              })) : (Ue ||= void 0 !== ke, this.chunks.delete(Ke))
            }
        this.scanDue(ee, Fe) && (Ue = !0);
        for (const [oe, Re] of this.chunks) Re.seenAt !== this.checks && (Ue ||= Re.machines.length > 0, this.chunks.delete(oe));
        for (const oe of this.chunks.values())
          for (const [ie, He, ye] of oe.cellChunks)(Math.abs(ie - be) > 2 || Math.abs(He - Me) > 1 || Math.abs(ye - Ke) > 2) && this.watchCellChunk(ee, ie, He, ye) && (Ue = !0);
        for (const [oe, Re] of this.cellChunks) Re.seenAt !== this.checks && this.cellChunks.delete(oe);
        Ue && this.refresh(ee)
      }
      dispose(ee) {
        this.clearMeshes(ee), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(ee, ie) {
        const He = Math.max(ie.findIndex((ee => {
          let {
            slot: ie
          } = ee;
          return ie >= this.scanFrom
        })), 0);
        let ye = 96;
        for (let be = 0; be < ie.length; be++) {
          const {
            slot: Me,
            entry: Ke,
            origin: Ue
          } = ie[(He + be) % ie.length];
          if (ye -= this.scan(ee, Ke, Ue), ye <= 0) {
            this.scanFrom = Me + 1;
            break
          }
        }
        return ie.length > 0
      }
      scan(ee, ie, He) {
        let [ye, be, Me] = He;
        const Ke = qf.g.BR,
          Ue = this.hits;
        Ue.length = 0;
        const Fe = ee.scanBlocks(ye, be, Me, ye + Ke, be + Ke, Me + Ke, this.offsetsIndexById, Ue),
          Je = [];
        for (let oe = 0; oe < Ue.length; oe += 4) Je.push({
          pos: [Ue[oe], Ue[oe + 1], Ue[oe + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[Ue[oe + 3]] - 1]
        });
        return ie.machines = Je, ie.cellChunks = function(ee, ie) {
          const He = new Set,
            ye = [];
          for (const {
              pos: be,
              offsets: Me
            }
            of ee)
            for (const [ee, Ke, Ue] of Me) {
              const Me = dX([be[0] + ee, be[1] + Ke, be[2] + Ue], ie),
                Fe = WX(...Me);
              He.has(Fe) || (He.add(Fe), ye.push(Me))
            }
          return ye
        }(Je, Ke), ie.scannedVersion = ie.checkedVersion, ie.scannedAt = performance.now(), Math.max(Fe, 1)
      }
      watchCellChunk(ee, ie, He, ye) {
        const be = WX(ie, He, ye),
          Me = ee.getChunkVersion(ie, He, ye),
          Ke = this.cellChunks.get(be);
        return null === Me ? this.cellChunks.delete(be) : (null === Ke || void 0 === Ke ? void 0 : Ke.version) === Me ? (Ke.seenAt = this.checks, !1) : (this.cellChunks.set(be, {
          version: Me,
          seenAt: this.checks
        }), !0)
      }
      refresh(ee) {
        const ie = function(ee, ie) {
            const He = new Set,
              ye = [];
            for (const {
                pos: be,
                offsets: Me
              }
              of ee)
              for (const [ee, Ke, Ue] of Me) {
                const Me = be[0] + ee,
                  Fe = be[1] + Ke,
                  Je = be[2] + Ue,
                  oe = `${Me},${Fe},${Je}`;
                He.has(oe) || (He.add(oe), ie(Me, Fe, Je) && ye.push([Me, Fe, Je]))
              }
            return ye
          }([...this.chunks.values()].flatMap((ee => ee.machines)), ((ie, He, ye) => ee.isBlockInLoadedChunk(ie, He, ye) && 0 === ee.getBlockId(ie, He, ye))),
          He = ie.join(";");
        He !== this.shownKey && (this.shownKey = He, this.clearMeshes(ee), ie.length > 0 && (this.meshes = [this.build(ee, ie, !1), this.build(ee, ie, !0)]))
      }
      build(ee, ie, He) {
        const ye = ie[0],
          be = [],
          Me = [];
        for (const [Ke, Ue, Fe] of ie)(0, BX.e)(be, Me, [Ke - ye[0] + .5, Ue - ye[1] + .5, Fe - ye[2] + .5], ZX, He);
        return ee.createGameMesh({
          positions: be,
          indices: Me
        }, {
          rgb: He ? DX : wX,
          alpha: .4
        }, ye)
      }
      clearMeshes(ee) {
        for (const ie of this.meshes) ee.disposeGameMesh(ie);
        this.meshes = []
      }
    }
    const AX = 1 / .6,
      YX = 200,
      VX = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      aX = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      cX = 2 * Math.PI / 3;
    class xX {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VX;
        this.style = ee, this.particles = null, this.points = new Float32Array(800), this.budget = YX, this.lastMs = 0
      }
      static blade() {
        return new xX(aX)
      }
      OE(ee, ie) {
        const He = Math.min(ie.arcStruck, ie.arcPoints.length);
        this.draw(ee, [ie.arcFrom, ...ie.arcPoints], ie.arcPoints.slice(0, He))
      }
      onBlade(ee, ie) {
        const [He, ye, be] = ie.bladeCentre, [Me, Ke] = ie.bladeFacing, Ue = He - 1.5 * Me, Fe = be - 1.5 * Ke, Je = Math.atan2(Ke, Me), oe = [];
        for (let Re = 0; Re <= 8; Re++) {
          const ee = Je - cX / 2 + cX * Re / 8;
          oe.push([Ue + 2.5 * Math.cos(ee), ye, Fe + 2.5 * Math.sin(ee)])
        }
        this.draw(ee, oe, ie.bladeStruck)
      }
      dispose() {
        var ee;
        null === (ee = this.particles) || void 0 === ee || ee.stop(), this.particles = null
      }
      draw(ee, ie, He) {
        if (!ee.particlesEnabled() || ie.length < 2) return;
        const ye = performance.now();
        this.budget = Math.min(YX, this.budget + (ye - this.lastMs) / 1e3 * YX), this.lastMs = ye;
        const be = [];
        let Me = 0,
          Ke = ie[0];
        for (const Xe of ie.slice(1)) {
          const ee = Math.min(48, Math.round(Math.hypot(Xe[0] - Ke[0], Xe[1] - Ke[1], Xe[2] - Ke[2]) * this.style.perBlock));
          be.push([Ke, Xe, ee]), Me += ee, Ke = Xe
        }
        const Ue = He.length;
        Me += 10 * Ue;
        const Fe = Me > this.budget ? this.budget / Me : 1;
        if (0 === Me || Fe * Me < 1) return;
        const Je = ie[0],
          [oe, Re, ke] = Je,
          qe = this.points;
        let fe = 0;
        const Te = (ee, ie, He, ye) => {
          const be = 4 * fe;
          qe[be] = ee - oe, qe[be + 1] = ie - Re, qe[be + 2] = He - ke, qe[be + 3] = ye, fe++
        };
        be.forEach(((ee, ie) => {
          let [He, ye, be] = ee;
          const Me = Math.min(Math.floor(be * Fe), YX - fe),
            Ke = Math.hypot(ye[0] - He[0], ye[1] - He[1], ye[2] - He[2]),
            Ue = 0 === ie && Ke > 0 ? Math.min(.5, .1 * Ke) / Ke : 0;
          for (let Fe = 0; Fe < Me; Fe++) {
            const ee = Ue + (Fe + .5) / Me * (1 - Ue);
            Te(He[0] + (ye[0] - He[0]) * ee, He[1] + (ye[1] - He[1]) * ee, He[2] + (ye[2] - He[2]) * ee, .15)
          }
        }));
        const pe = Math.floor(10 * Fe);
        for (let Xe = 0; Xe < Ue; Xe++) {
          const [ee, ie, ye] = He[Xe];
          for (let He = 0; He < pe && fe < YX; He++) Te(ee, ie, ye, 2.5)
        }
        this.budget -= fe, this.particles ??= ee.createParticles(function(ee) {
          const [ie, He] = ee.colours;
          return {
            texture: "square_particle",
            bk: 400,
            minLifeTime: ee.life[0] / AX,
            maxLifeTime: ee.life[1] / AX,
            minSize: ee.size[0],
            maxSize: ee.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [ie[0], ie[1], ie[2], 1],
              maxColor: [He[0], He[1], He[2], 1]
            }, {
              timeFraction: 1,
              minColor: [ie[0], ie[1], ie[2], 0],
              maxColor: [He[0], He[1], He[2], 0]
            }],
            blendMode: AU.e.Add
          }
        }(this.style), {
          pos: Je
        }), this.particles.emitPoints(Je, qe, fe)
      }
    }
    const LX = new Set(["Sky Spring"]);

    function CX(ee, ie, He) {
      const ye = ee.split("|")[0];
      return "Air" !== ie || He || ! function(ee) {
        const ie = ee.split("|")[0];
        return void 0 !== FH[ie] || LX.has(ie)
      }(ye) ? null : ee
    }
    class vX {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(ee) {
        const ie = ee - this.lastTapAt >= 300;
        return this.lastTapAt = ee, ie
      }
    }
    class uX {
      constructor() {
        this.presses = new vX, this.predicted = null
      }
      tap(ee, ie) {
        const He = this.presses.isNewPress(ie);
        return He && (this.predicted = {
          station: ee,
          at: ie
        }), He
      }
      consumeServerOpen(ee, ie) {
        const He = this.predicted;
        return !(null === He || He.station !== ee || ie - He.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class mX {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(ee, ie) {
        return ee && (this.thrustAt = ie), ie - this.thrustAt < 200
      }
    }
    const lX = [.1, .05, .1],
      SX = {
        texture: "effect_5",
        bk: Math.ceil(48),
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
        blendMode: AU.e.OneOne
      };
    class nX {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new mX, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      OE(ee, ie) {
        for (const [He, ye] of ie.baf2JetFlames) ee.isLocalPlayer(He) || (ye ? this.lit.add(He) : this.lit.delete(He))
      }
      onAfterRender(ee, ie) {
        const He = performance.now(),
          ye = this.hold.lit(this.selfThrusting(ee, ie), He);
        for (const [be, Me] of this.flames)(be === ie ? ye : this.lit.has(be)) || this.setEmitting(Me, !1), be === ie || ee.getPositionView(be) ? !Me.emitting && He - Me.offAt >= 1300 && (Me.particles.stop(), this.flames.delete(be)) : (Me.particles.dispose(), this.flames.delete(be), this.lit.delete(be));
        ye && this.draw(ee, ie, ie);
        for (const be of this.lit) this.draw(ee, ie, be)
      }
      dispose() {
        for (const ee of this.flames.values()) ee.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(ee, ie) {
        var He;
        const ye = ee.getLocalPlayerMovement();
        return !!ye && (null !== (be = {
          option: null !== (He = ee.getClientOption(ie, "jumpHoldThrust")) && void 0 !== He ? He : null,
          jumping: ye.jumpHeld,
          onGround: ye.onGround,
          alive: ee.isAlive(ie)
        }).option && be.option.maxUpSpeed >= 0 && be.jumping && !be.onGround && be.alive);
        var be
      }
      draw(ee, ie, He) {
        var ye, be;
        const Me = this.pos;
        if (!ee.readDrawnPosition(He, Me)) return;
        const Ke = ee.readDrawnPosition(ie, this.camera) ? this.camera : Me;
        if (!((Me[0] - Ke[0]) ** 2 + (Me[1] - Ke[1]) ** 2 + (Me[2] - Ke[2]) ** 2 < 1600) || !ee.particlesEnabled()) {
          const ee = this.flames.get(He);
          return void(ee && this.setEmitting(ee, !1))
        }
        const Ue = null !== (ye = this.flames.get(He)) && void 0 !== ye ? ye : this.create(ee, He, Me),
          Fe = null !== (be = ee.getDrawnHeading(He)) && void 0 !== be ? be : 0,
          Je = this.at;
        Je[0] = Me[0] - .35 * Math.sin(Fe), Je[1] = Me[1] + 1.05, Je[2] = Me[2] - .35 * Math.cos(Fe), Ue.particles.moveTo(Je), this.setEmitting(Ue, !0)
      }
      setEmitting(ee, ie) {
        ee.emitting !== ie && (ee.emitting = ie, ie || (ee.offAt = performance.now()), ee.particles.setEmitRate(ie ? 60 : 0))
      }
      create(ee, ie, He) {
        const ye = {
          particles: ee.createParticles(SX, {
            pos: He,
            half: lX
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(ie, ye), ye
      }
    }

    function jX(ee) {
      return "Reactor Frame" === My("reactor", ee)
    }

    function sX(ee) {
      return uH("reactor", ee) && !jX(ee) && (ee.startsWith("Reactor Glass") || ee.startsWith("Reactor Port"))
    }
    const IX = "baf2Goal";
    class hX {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Vb.h.subscribe("setDirectionArrow", (ee => {
          let {
            id: ie,
            position: He
          } = ee;
          ie === IX && (this.goal = He, this.checkedAt = -1 / 0)
        })), Vb.h.subscribe("clearDirectionArrow", (ee => {
          let {
            id: ie
          } = ee;
          null !== ie && ie !== IX || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const ee of this.subs) Vb.h.unsubscribe(ee)
      }
      sideOf(ee, ie, He, ye) {
        const be = this.goal;
        if (!be) return 0;
        He - this.checkedAt > 1e3 && (this.checkedAt = He, this.open = function(ee, ie) {
          const [He, ye, be] = ee.map(Math.floor);
          if (!sX(ie(He, ye, be))) return null;
          for (const [Me, Ke] of [
              [1, 0],
              [0, 1]
            ]) {
            const ee = ie(He + Me, ye, be + Ke),
              Ue = ie(He - Me, ye, be - Ke);
            if (jX(Ue) && sX(ee)) return [Me, 0, Ke];
            if (jX(ee) && sX(Ue)) return [0 - Me, 0, 0 - Ke]
          }
          return null
        }(be, ((ie, He, ye) => ee.blockIdToBlockName(ee.getBlockId(ie, He, ye)))));
        const Me = this.open;
        if (!Me) return 0;
        const Ke = ye(be);
        if (Math.abs(Ke.x - ie.x) > .05 || Math.abs(Ke.y - ie.y) > .05) return 0;
        const Ue = ye([be[0] + Me[0], be[1], be[2] + Me[2]]).x - Ke.x;
        return Math.abs(Ue) < .3 ? 0 : Ue > 0 ? 1 : -1
      }
    }
    class NX {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new hX, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.xf = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.jB = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((ee => {
          for (const ie of ee) ie.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(ie.target, ie.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.xf || this.clear()
        }, window.addEventListener("resize", this.jB)
      }
      onAfterRender(ee, ie) {
        var He;
        this.api = ee, this.project = null !== (He = null === ie || void 0 === ie ? void 0 : ie.projectWorldPosToScreenPos) && void 0 !== He ? He : null, this.queued || this.xf || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.xf = !0;
        for (const ee of this.moved.keys()) ee.style.transform = "";
        this.moved.clear();
        for (const ee of this.sideLabels.keys()) ee.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.jB)
      }
      clear() {
        for (const Me of this.moved.keys()) Me.isConnected || this.moved.delete(Me);
        for (const Me of this.sideLabels.keys()) Me.isConnected || this.sideLabels.delete(Me);
        if (0 === this.arrows.length) return;
        const ee = performance.now(),
          ie = ee - this.refreshedAt > 1e3;
        ie && (this.refreshedAt = ee, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const He = this.trackerBox(),
          ye = this.barsBox(),
          be = this.toastBox(ie);
        (He || ye || be) && ie && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let Me = 0; Me < this.arrows.length; Me++) {
          const ie = this.arrows[Me];
          this.labelOffsets.set(ie, this.runLabelAside(ie, ee));
          const Ke = (He ? this.shiftLeftOf(ie, He) : 0) || this.shiftOnScreen(ie),
            Ue = Math.min(ye ? this.liftAbove(ie, ye, Ke) : 0, be ? this.liftAbove(ie, be, Ke) : 0),
            Fe = this.moved.get(ie);
          if (0 !== Ke || 0 !== Ue) {
            const ee = 0 === Ue ? `translateX(${Ke}px)` : `translate(${Ke}px, ${Ue}px)`;
            Fe !== ee && (ie.style.transform = ee, this.moved.set(ie, ee))
          } else void 0 !== Fe && (ie.style.transform = "", this.moved.delete(ie))
        }
      }
      trackerBox() {
        var ee, ie;
        const He = null !== (ee = this.tracker) && void 0 !== ee && ee.isConnected ? this.tracker : null !== (ie = this.trackers[0]) && void 0 !== ie ? ie : null;
        if (He !== this.tracker && this.watch(He), this.boxStale && He) {
          var ye, be, Me;
          this.boxStale = !1;
          const ee = He.closest(".NoRoom") ? null : He.getBoundingClientRect(),
            ie = ee && ee.width > 0 ? null === (ye = this.hud) || void 0 === ye ? void 0 : ye.getBoundingClientRect() : void 0,
            Ke = ee && ie ? Math.max(ee.top, ie.top) : null !== (be = null === ee || void 0 === ee ? void 0 : ee.top) && void 0 !== be ? be : 0,
            Ue = ee && ie ? Math.min(ee.bottom, ie.bottom) : null !== (Me = null === ee || void 0 === ee ? void 0 : ee.bottom) && void 0 !== Me ? Me : 0;
          this.box = ee && ee.width > 0 && Ue > Ke ? {
            left: ee.left,
            top: Ke,
            right: ee.right,
            bottom: Ue
          } : null
        }
        return He ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var ee;
          this.barsStale = !1;
          const ie = null === (ee = this.statBars[0]) || void 0 === ee ? void 0 : ee.getBoundingClientRect();
          this.bars = ie && ie.width > 0 && ie.height > 0 ? {
            left: ie.left,
            top: ie.top,
            right: ie.right,
            bottom: ie.bottom
          } : null
        }
        return this.bars
      }
      toastBox(ee) {
        var ie;
        const He = null !== (ie = this.toasts[0]) && void 0 !== ie ? ie : null;
        if (He !== this.toastEl || ee && He) {
          this.toastEl = He;
          const ee = null === He || void 0 === He ? void 0 : He.getBoundingClientRect();
          this.toast = ee && ee.width > 0 && ee.height > 0 ? {
            left: ee.left,
            top: ee.top,
            right: ee.right,
            bottom: ee.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(ee, ie, He) {
        var ye;
        const be = this.anchorOf(ee);
        if (!be) return 0;
        const Me = be.x + He + (null !== (ye = this.labelOffsets.get(ee)) && void 0 !== ye ? ye : 0),
          {
            halfWidth: Ke,
            labelled: Ue
          } = this.extentOf(ee),
          Fe = be.y + this.em * (Ue ? 6.2 : 3);
        return Fe < ie.top - 6 || Me + Ke < ie.left - 6 || Me - Ke > ie.right + 6 ? 0 : ie.top - 6 - Fe
      }
      watch(ee) {
        var ie, He;
        this.tracker && this.sizes.unobserve(this.tracker), null === (ie = this.hud) || void 0 === ie || ie.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = ee, this.hud = null !== (He = null === ee || void 0 === ee ? void 0 : ee.closest(".Baf2QuestHud")) && void 0 !== He ? He : null, this.box = null, this.boxStale = !0, ee && this.sizes.observe(ee), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(ee, ie) {
        var He;
        const ye = this.anchorOf(ee);
        if (!ye) return 0;
        const {
          y: be
        } = ye, Me = ye.x + (null !== (He = this.labelOffsets.get(ee)) && void 0 !== He ? He : 0), Ke = this.em, {
          halfWidth: Ue,
          labelled: Fe
        } = this.extentOf(ee), Je = be - Ke, oe = Me + Ue;
        return be + Ke * (Fe ? 6.2 : 3) < ie.top || Je > ie.bottom || oe < ie.left - 6 || Me - Ue > ie.right ? 0 : Math.max(ie.left - 6 - oe, 6 - (Me - Ue))
      }
      shiftOnScreen(ee) {
        var ie;
        const He = this.anchorOf(ee);
        if (!He) return 0;
        const {
          halfWidth: ye
        } = this.extentOf(ee), be = He.x + (null !== (ie = this.labelOffsets.get(ee)) && void 0 !== ie ? ie : 0), Me = be + ye - (this.innerWidth - 6);
        return Me > 0 ? -Me : Math.max(0, 6 - (be - ye))
      }
      runLabelAside(ee, ie) {
        var He;
        let ye = null;
        for (let Ke = 0; Ke < ee.children.length; Ke++) ee.children[Ke].classList.contains("DirectionArrowLabel") && (ye = ee.children[Ke]);
        if (!ye) return 0;
        const be = ee.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(ee) : null,
          Me = (be && this.api ? this.side.sideOf(this.api, {
            x: be.x / this.innerWidth * 100,
            y: be.y / this.innerHeight * 100
          }, ie, this.project) : 0) * this.halfWidthOf(ye);
        return Me !== (null !== (He = this.sideLabels.get(ye)) && void 0 !== He ? He : 0) && (ye.style.transform = 0 === Me ? "" : `translateX(-50%) translateX(${Me}px)`, 0 === Me ? this.sideLabels.delete(ye) : this.sideLabels.set(ye, Me)), Me
      }
      extentOf(ee) {
        let ie = this.em,
          He = !1;
        for (let ye = 0; ye < ee.children.length; ye++) {
          const be = ee.children[ye],
            Me = be.classList.contains("DirectionArrowLabel");
          He ||= Me, (Me || be.classList.contains("DirectionArrowDistance")) && (ie = Math.max(ie, this.halfWidthOf(be)))
        }
        return {
          halfWidth: ie,
          labelled: He
        }
      }
      halfWidthOf(ee) {
        let ie = this.halfWidths.get(ee);
        return void 0 === ie && (ie = ee.offsetWidth / 2, this.halfWidths.set(ee, ie), this.sizes.observe(ee), this.labels.add(ee)), ie
      }
      forgetGoneLabels() {
        for (const ee of this.labels) ee.isConnected || (this.sizes.unobserve(ee), this.halfWidths.delete(ee), this.labels.delete(ee))
      }
      anchorOf(ee) {
        const ie = ee.style.translate,
          He = this.anchors.get(ee);
        if (He && He.translate === ie && He.innerWidth === this.innerWidth && He.innerHeight === this.innerHeight) return He;
        const ye = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(ie);
        if (!ye) return null;
        const be = {
          translate: ie,
          x: parseFloat(ye[1]) / 100 * this.innerWidth,
          y: parseFloat(ye[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(ee, be), be
      }
    }
    const GX = "Baf2ArrowText";

    function rX(ee, ie) {
      const He = ee.rows.find((ee => ee.current));
      return Ve(ee.tutorial) && null !== He && void 0 !== He && He.item && Sb(He) && De(He.item).includes(ie) ? He.item : null
    }
    const QX = new class {
      constructor(ee) {
        this.select = ee, this.picks = new Map
      }
      open(ee, ie, He) {
        const ye = rX(ie, ee);
        null !== ye && this.tq(ee, ye, He)
      }
      follow(ee, ie) {
        if (Ue())
          for (const [He, {
              item: ye,
              had: be
            }] of this.picks) {
            const Me = rX(ee, He);
            Me !== ye && (null !== Me && ie(ye) > be ? this.tq(He, Me, ie) : this.picks.delete(He))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      tq(ee, ie, He) {
        this.picks.set(ee, {
          item: ie,
          had: He(ie)
        }), this.select(ee, ie)
      }
    }(ab.q);

    function ez(ee) {
      return ie => {
        let He = 0;
        for (const ye of ee.getInventoryItems())(null === ye || void 0 === ye ? void 0 : ye.name) === ie && (He += null === ye.amount ? 1 : Math.max(ye.amount, 0));
        return He
      }
    }

    function iz(ee, ie, He, ye) {
      ee.getClientOption(ie, "canCraft") && "inventory" !== Bb.e.get("openInGameMenuName") && (QX.open(He, ye.get(), ez(ee)), Vb.h.yR("toggleMenu", `inventory|${He}`))
    }
    let Hz = null,
      yz = !1;

    function bz(ee) {
      const ie = EM();
      ee === Hz && ie === yz || (Hz = ee, yz = ie, (0, ab.s)(function(ee, ie) {
        const He = new Map;
        for (let ye = ee + 1; ye <= be.length; ye++) {
          const be = mM(ye, ee, ie);
          if (be)
            for (const ie of Xe(ye).unlocks) He.set(ie, {
              ...be,
              stepsAway: ye - ee
            })
        }
        return He
      }(ee, ie)))
    }

    function Mz() {
      return ee = () => {
        null !== Hz && bz(Hz)
      }, (0, zM.g)(BM, ee);
      var ee
    }

    function Kz() {
      return (0, ab.x)(uM(Object.keys(we), cM)), () => {
        (0, ab.x)([])
      }
    }

    function Uz(ee, ie, He) {
      var ye, be;
      const Me = ee.getTargetedBlock();
      if (!Me || ! function(ee, ie, He) {
          if ("Chest" !== ie) return !1;
          const ye = ee.split("|")[0];
          if (!RH(ye) || 0 === ci[ye].outputSlots.length) return !1;
          const be = Op(ee);
          return He[0] === be[0] && He[1] === be[1] && He[2] === be[2]
        }(He, null === (ye = ee.Vye(ie)) || void 0 === ye ? void 0 : ye.name, Me.normal)) return !1;
      const [Ke, Ue, Fe] = Me.Xp, Je = ee.getBlockId(Ke, Ue, Fe);
      return 0 === Je || !0 === (null === (be = Ae.i[Je]) || void 0 === be ? void 0 : be.canBePlacedOver)
    }
    var Fz = He(37578);
    const Jz = new Set(XH.e);
    class oz {
      constructor(ee) {
        this.toasts = ee, this.lastAt = -1 / 0
      }
      onAltAction(ee, ie, He) {
        const ye = ee.getTargetedBlock();
        if (!ye || function(ee) {
            const ie = ee.split("|")[0];
            return RH(ie) || null !== ty(ie) || te(ie) || XH.e.includes(ie)
          }(He) && !Jz.has(He.split("|")[0])) return;
        const be = ee.Vye(ie);
        if (!be || !Jz.has(be.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const Me = be.typeObj.id,
          [Ke, Ue, Fe] = ye.Xp,
          Je = ee.getBlockId(Ke, Ue, Fe),
          oe = Ae.i[Je];
        (0 === Je || null !== oe && void 0 !== oe && oe.Lq || null !== oe && void 0 !== oe && oe.canBePlacedOver) && ee.isSolidToPlayerBlockId(Me) && ee.canModifyBlockAt(Ke, Ue, Fe) && ee.hHe(Ke, Ue, Fe, Me) && !ee.hHe(Ke, Ue, Fe, Me, ie) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, ae.be)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, ae.L.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Rz {
      constructor(ee) {
        this.show = ee, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(ee, ie, He) {
        var ye;
        if (!ie) return this.started = null, void this.gatedThisHold.clear();
        if (!ee) return void(this.started = null);
        const be = `${ee.x},${ee.y},${ee.z},${ee.lJ}`;
        if (be === this.started) return;
        this.started = be;
        const Me = Ly(ee.y) ? MX(ee.block, ee.lJ, ee.level) : null;
        if (null === Me || this.gatedThisHold.has(be)) return;
        this.gatedThisHold.add(be);
        const Ke = ee.block.split("|")[0];
        He - (null !== (ye = this.hintedAt.get(Ke)) && void 0 !== ye ? ye : -1 / 0) < 5e3 || (this.hintedAt.set(Ke, He), this.show({
          baf2ToastText: KX(Me, ee.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var kz = He(35);

    function qz(ee, ie) {
      const He = [...ee.baf2CoreBankPaused];
      for (const [be] of ee.baf2CoreBanked) He.push(be);
      for (const Ke of be) {
        for (const {
            item: ee
          }
          of Ke.cost) He.push(ee);
        for (const ee of Ke.newDeposits) He.push(ee.block);
        for (const ee of Ke.unlocks) He.push(ee, Pe(ee));
        Ke.reward && He.push(Ke.reward);
        for (const {
            item: ee
          }
          of null !== (ye = null === (Me = Ke.charge) || void 0 === Me ? void 0 : Me.items) && void 0 !== ye ? ye : []) {
          var ye, Me;
          He.push(ee)
        }
      }
      return {
        message: ee,
        itemNames: ie([...new Set(He)])
      }
    }
    const fz = "baf2MultiblockGuide";
    const Tz = new Map;
    const pz = function(ee, ie, He, be) {
      let {
        localPlayerId: Me
      } = be;
      const Ke = new kU,
        Ue = new yq,
        Je = new oq,
        oe = new Fq(Je),
        Re = (ee, ie) => {
          ie ? oe.observe(ee) : oe.unobserve(ee)
        },
        ke = new Uq,
        qe = new kq(Re),
        fe = ee => qe.covers(ee),
        Te = new Yq;
      let pe;
      const Xe = new cK((ee => {
          pe.sendCommand(ee)
        })),
        ze = () => {
          Xe.send("baf2questbook")
        },
        Be = ee => function(ee, ie, He) {
          const ye = {};
          for (const be of He) {
            let He = Tz.get(be);
            void 0 === He && (He = ee.getItemStat(ie, be, "displayName"), Tz.set(be, He)), ye[be] = He
          }
          return ye
        }(pe, Me, ee),
        Ee = new Cb(ze),
        ge = new Sq((() => Bb.e.get("loadingOverlayVisible"))),
        Oe = new go(Xe, Ee, ge),
        de = new hq,
        We = new oz(ge),
        Ze = new Rz((ee => {
          ge.show(ee, ee.baf2ToastMs)
        })),
        we = new Mf(Re),
        De = new Yp(we),
        Pe = new EK,
        Ye = new HX,
        Ve = new rK,
        xe = new kf({
          read: () => !1 !== kz.i.getItem(fz),
          write: ee => {
            kz.i.setItem(fz, ee)
          }
        }),
        Le = new uf(xe),
        Ce = new Sf(xe),
        ve = new RT(xe, (ee => function(ee, ie) {
          const He = hU(ie.w, ie.h, ie.d),
            ye = new Uint8Array(He);
          for (let be = 0; be < He; be++) {
            const He = af(ee, ey(ie, by(ie, be)));
            ye[be] = null === He ? 0 : nU(He)
          }
          return ye
        }(pe, ee)), HT(Xe)),
        ue = new kT(xe, HT(Xe)),
        me = new JT,
        ne = (ee, ie) => {
          let [He, ye, be] = ee;
          me.answered(ie) || ge.show({
            baf2ToastText: [(0, ae.be)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: He,
                h: ye,
                d: be
              }
            }, ae.L.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      ve.onSizeNotTaken(ne), ue.onSizeNotTaken(ne);
      const je = new pT,
        se = new NT(xe),
        he = new rT,
        Ne = new Jp(he),
        Ge = new Ep,
        Qe = new Vp,
        ei = new np(Qe),
        ii = new iX(Qe),
        Hi = Qe.lookSource(),
        yi = new pX({
          handles: ee => Hi.handles(ee) || ee === ce,
          line: (ee, ie) => ee === ce ? function(ee, ie, He) {
            var ye;
            const be = Se(null === (ye = ie.at(He)) || void 0 === ye ? void 0 : ye.item);
            return null === be ? {
              key: `${qX}lookFarmEmpty`
            } : {
              key: ee.blockIdToBlockName(ee.getBlockId(He[0], He[1], He[2])).endsWith("|Running") ? `${qX}lookFarmRunning` : `${qX}lookFarmWaiting`,
              keys: {
                mob: le(be)
              }
            }
          }(pe, we, ie) : Hi.line(ee, ie),
          version: () => Hi.version() + we.version()
        }, (ee => jf(xe.all(), ee, (ee => af(pe, ee)))), (() => Ee.get().tier)),
        bi = new aT,
        Mi = new PX,
        Ki = new xX,
        Ui = xX.blade(),
        Fi = new nX,
        Ji = new rq,
        oi = new NX,
        ki = new uX,
        qi = new vX;
      let fi = -1 / 0,
        Ti = 0,
        Xi = -1 / 0,
        zi = -1 / 0;
      const Bi = () => {
          Xe.send("baf2islandsclose"), zi = Date.now()
        },
        Ei = [];

      function gi(ee) {
        var ie, He, ye, be, Me, Ke, Fe;
        "core" === (null === (ie = Ue.get()) || void 0 === ie ? void 0 : ie.kind) && "core" !== (null === ee || void 0 === ee ? void 0 : ee.kind) && Xe.send("baf2coreclose"), "power" === (null === (He = Ue.get()) || void 0 === He ? void 0 : He.kind) && "power" !== (null === ee || void 0 === ee ? void 0 : ee.kind) && Xe.send("baf2powerclose"), "water" === (null === (ye = Ue.get()) || void 0 === ye ? void 0 : ye.kind) && "water" !== (null === ee || void 0 === ee ? void 0 : ee.kind) && Xe.send(re.v), "terminal" === (null === (be = Ue.get()) || void 0 === be ? void 0 : be.kind) && "terminal" !== (null === ee || void 0 === ee ? void 0 : ee.kind) && Xe.send("baf2terminalclose"), "islands" === (null === (Me = Ue.get()) || void 0 === Me ? void 0 : Me.kind) && "islands" !== (null === ee || void 0 === ee ? void 0 : ee.kind) && Bi();
        const Je = Qe.getStatus();
        "collider" === (null === (Ke = Ue.get()) || void 0 === Ke ? void 0 : Ke.kind) && "collider" !== (null === ee || void 0 === ee ? void 0 : ee.kind) && Je && Xe.send(YF(Je, "close"));
        const oe = ee => "reactor" === ee || "battery" === ee;
        if (oe(null === (Fe = Ue.get()) || void 0 === Fe ? void 0 : Fe.kind) && !oe(null === ee || void 0 === ee ? void 0 : ee.kind)) {
          var Re, ke, qe;
          const ee = "reactor" === (null === (Re = Ue.get()) || void 0 === Re ? void 0 : Re.kind) ? null === (ke = ve.get()) || void 0 === ke ? void 0 : ke.status.baf2RxAt : null === (qe = ue.get()) || void 0 === qe ? void 0 : qe.status.baf2BatAt;
          ee && Xe.send(Ri(ee, "close"))
        }
        "quests" === (null === ee || void 0 === ee ? void 0 : ee.kind) && ze(), Ue.set(ee), null === ee && de.release()
      }

      function Oi() {
        (0, zb.h)(), gi(null)
      }
      let di = new Set,
        Wi = !1;
      const ti = {
        onCreate: ee => {
          pe = ee, pe.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const ie of Di) {
            const ee = ci[ie].inputSlots ? wU(Ke) : WU(ie, Ke, Pe, Xe);
            Ei.push((0, pb.f)(ie, ee))
          }
          Ei.push((0, zb.z)((0, ye.createElement)(ye.Fragment, null, (0, ye.createElement)(Tq, {
            controller: qe
          }), (0, ye.createElement)(Ff, {
            store: we
          }), (0, ye.createElement)(zX, {
            store: yi
          }), (0, ye.createElement)(mq, {
            store: Ee
          }), (0, ye.createElement)(sq, {
            store: ge
          }), (0, ye.createElement)(Nq, {
            store: de
          }), (0, ye.createElement)(ef, {
            store: Ji
          }), (0, ye.createElement)(TT, {
            store: je
          }), (0, ye.createElement)(QT, {
            store: he
          })), {
            content: (0, ye.createElement)(bq, {
              commands: Xe,
              store: Ue,
              power: Pe,
              water: Ve,
              reactor: ve,
              battery: ue,
              collider: Qe,
              terminal: Ye,
              quests: Ee,
              tutorial: Oe,
              close: zb.l,
              leave: () => {
                de.dropHeld(), (0, zb.h)()
              },
              askIslands: () => {
                zi = -1 / 0, fi = Date.now(), Ti = Xe.send(Ie)
              },
              openSocial: () => {
                (0, zb.h)(), Bb.e.set({
                  openEverythingMenuName: qH.r.SOCIAL
                })
              },
              showCore: ee => {
                gi({
                  kind: "core",
                  core: ee
                }), Xe.send("baf2corereopen")
              }
            }),
            onClose: () => {
              gi(null)
            }
          })), Ei.push((0, Xb.p)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              gi({
                kind: "quests"
              }), (0, zb.s)()
            }
          })), Ei.push(function(ee, ie) {
            let He = null,
              ye = () => {};
            const be = ie => {
              var be;
              let {
                tutorial: Me,
                tutorialKnown: Ke
              } = ie;
              (null === (be = He) || void 0 === be ? void 0 : be.tutorial) === Me && He.tutorialKnown === Ke || (He = {
                tutorial: Me,
                tutorialKnown: Ke
              }, ye = (0, Xb.p)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: Bo[Me],
                icon: {
                  kind: "icon",
                  name: zo[Me]
                },
                iconOnly: !0,
                disabled: !Ke,
                className: "Baf2TutorialButton",
                onClick: () => {
                  ee.next()
                }
              }))
            };
            be(ie.get());
            const Me = Vb.h.subscribe(cb, be);
            return () => {
              Vb.h.unsubscribe(Me), ye()
            }
          }(Oe, Ee)), Wi = !1, Ei.push(Mz()), Ei.push(Kz()), Ei.push(function() {
            const ee = Vb.h.subscribe(cb, rb),
              ie = () => {
                if (Gb) {
                  const ee = Gb;
                  Gb = null, (0, ab.u)(ee)
                }
              },
              He = Vb.h.subscribe("toggleMenu", (ee => {
                "inventory" === (null === ee || void 0 === ee ? void 0 : ee.split("|")[0]) && ie()
              })),
              ye = Vb.h.subscribe("appManagerUpdated|openInGameMenuName", (ee => {
                "inventory" === ee && ie()
              }));
            return () => {
              Vb.h.unsubscribe(ee), Vb.h.unsubscribe(He), Vb.h.unsubscribe(ye)
            }
          }()), Ei.push(function(ee) {
            const ie = ez(ee),
              He = Vb.h.subscribe(cb, (ee => {
                QX.follow(ee, ie)
              }));
            return () => {
              Vb.h.unsubscribe(He), QX.clear()
            }
          }(pe)), Ei.push(function() {
            const ee = document.documentElement,
              ie = (0, aq.b)(".InvenBodyRight", [], (() => {
                const ie = document.querySelector(".InvenBodyRight");
                ie && ee.style.setProperty("--baf2-backpack-width", `${ie.offsetWidth}px`)
              }));
            return () => {
              ie(), ee.style.removeProperty("--baf2-backpack-width")
            }
          }()), Ei.push(function() {
            const ee = document.documentElement;
            return ee.classList.add(GX), () => {
              ee.classList.remove(GX)
            }
          }()), Ei.push((() => {
            oe.dispose(), Je.dispose()
          })), Te.start(pe), Ei.push((() => {
            Te.dispose(), Fi.dispose(), De.dispose()
          }))
        },
        onClose: () => {
          (0, ab.u)([]), Gb = null, Nb = new Set, Hz = null, (0, ab.s)(new Map), Tz.clear();
          for (const ee of Ei) ee();
          Ee.dispose(), yi.dispose(), ge.dispose(), de.dispose(), bi.dispose(), Mi.dispose(pe), Le.dispose(pe), Ce.dispose(pe), se.dispose(pe), Ne.dispose(pe), he.dispose(), Ge.dispose(), xe.dispose(), ve.dispose(), ue.dispose(), je.dispose(), Ki.dispose(), Ui.dispose(), Ji.dispose(), ei.dispose(pe), ii.dispose(pe), Qe.dispose(), oi.dispose(), Xe.clear()
        },
        onAfterRender: (ee, ie) => {
          var He, ye, be;
          try {
            Te.onAfterRender(ie)
          } catch (Je) {
            console.error("Error drawing BAF2 belt items", Je)
          }
          try {
            Fi.onAfterRender(pe, Me)
          } catch (Je) {
            console.error("Error drawing BAF2 jet flames", Je)
          }
          Wi || (Wi = !0, Xe.send("baf2clientready"));
          const Ke = pe.getPositionView(Me);
          qe.onAfterRender(ie, Ke, ke), we.onAfterRender(ie, Ke, ke, fe), oe.run(ke), bi.onAfterRender(pe, Ke), Mi.onAfterRender(pe, Ke), De.onAfterRender(pe, Ke), Le.onAfterRender(pe, Ke), Ce.onAfterRender(pe, Me, Ke), se.onAfterRender(pe, Me, Ke), Ne.onAfterRender(pe, Me), Ge.onAfterRender(pe, Ke), Ee.onPlayerY(Ke[1]), ei.onAfterRender(pe), ii.onAfterRender(pe, Me, Ke);
          const Fe = pe.getTargetedBlock();
          yi.onAfterRender(pe, Me, null !== (He = null === Fe || void 0 === Fe ? void 0 : Fe.w6) && void 0 !== He ? He : 0, null !== (ye = null === Fe || void 0 === Fe ? void 0 : Fe.position) && void 0 !== ye ? ye : null), oi.onAfterRender(pe, ie), Ze.onMining(function(ee, ie) {
            var He, ye;
            const be = ee.getMiningBlock();
            if (!be) return null;
            const Me = (0, Ae.e)(ee.getBlockId(be[0], be[1], be[2])),
              Ke = null !== (He = null === (ye = ee.Vye(ie)) || void 0 === ye ? void 0 : ye.name) && void 0 !== He ? He : null,
              Ue = ee.getItemStat(ie, Me.split("|")[0], "harvestLevel");
            return {
              block: Me,
              x: be[0],
              y: be[1],
              z: be[2],
              lJ: Ke,
              level: Ue
            }
          }(pe, Me), pe.isMining(), performance.now()), "dropMap" === (null === (be = Ue.get()) || void 0 === be ? void 0 : be.kind) && Ly(Ke[1]) && Oi()
        },
        onPlayerChangeBlock: (ee, ie, He, ye, be, Ke) => {
          ee === Me && function(ee, ie, He, ye, be, Me, Ke) {
            const Ue = CX(Me, Ke, ee.isPlayerCrouching(ie));
            if (null === Ue) return;
            if (ee.RV(He, ye, be, Ue), !ee.getClientOption(ie, "canPickUpItems")) return;
            const Fe = FH[Ue.split("|")[0]];
            var Je, oe, Re;
            void 0 !== Fe && (Je = ee.getInventoryItems(), oe = Fe, Re = qf.g.maxItemStackSize, ee.getInventoryFreeSlotCount(ie) > 0 || Je.some((ee => null !== ee && ee.name === oe && null !== ee.amount && ee.amount < Re))) && ee.playSound(ie, (0, Fz.g)("pickUp"), .5, 1)
          }(pe, ee, ie, He, ye, be, Ke)
        },
        onPlayerAltAction: (ee, ie, He, ye, be) => {
          var Ke, Ue;
          if (!pe.getClientOption(Me, "canPickUpItems")) return;
          const Fe = null !== (Ke = null === (Ue = pe.Vye(Me)) || void 0 === Ue ? void 0 : Ue.name) && void 0 !== Ke ? Ke : null,
            Je = function(ee, ie) {
              const He = ee.split("|")[0];
              return te(He) && ie !== Ub && "Sky Pack" !== ie ? He : null
            }(be, Fe);
          if (null !== Je) return void(ki.tap(Je, performance.now()) && iz(pe, Me, Je, Ee));
          if (!my(Fe)) return;
          const oe = qi.isNewPress(performance.now()),
            Re = function(ee, ie, He) {
              return !my(ie) || He ? null : Gy(ee)
            }(be, Fe, pe.isPlayerCrouching(Me));
          null !== Re && oe && pe.RV(ie, He, ye, Re)
        },
        onPlayerAttemptAltAction: (ee, ie, He, ye, be) => {
          if (function(ee, ie, He, ye, be) {
              "Workbench" === ye.split("|")[0] && ee.getClientOption(He, "canCraft") && (QX.open("Workbench", be.get(), ez(ee)), ie.send("baf2station Workbench"))
            }(pe, Xe, Me, be, Ee), Uz(pe, Me, be)) return "preventAction";
          We.onAltAction(pe, Me, be)
        },
        onReceivedMessageFromServer: (ee, ie) => {
          if ("baf2MachineStatus" === ee) {
            var He, ye, be, Je, oe, Re, ke, fe, ze, Oe, We, te, Ze, De, Ae, ae;
            const ee = ie,
              Me = ee.baf2MachineTaught;
            Ke.set(ee.baf2MachinePos, {
              status: ee.baf2MachineStatus,
              power: null !== (He = ee.baf2MachinePower) && void 0 !== He ? He : null,
              opLeftMs: null !== (ye = ee.baf2MachineOpLeftMs) && void 0 !== ye ? ye : null,
              dug: ee.baf2MachineYield ? {
                item: ee.baf2MachineYield,
                name: Be([ee.baf2MachineYield])[ee.baf2MachineYield]
              } : null,
              powerCap: null !== (be = ee.baf2MachinePowerCap) && void 0 !== be ? be : null,
              powerRates: null !== (Je = ee.baf2MachinePowerRates) && void 0 !== Je ? Je : null,
              coupled: !0 === ee.baf2MachineCoupled,
              couplerLevel: null !== (oe = ee.baf2MachineCoupler) && void 0 !== oe ? oe : 1,
              taught: Me,
              taughtName: Me ? Be([Me])[Me] : null,
              tier: null !== (Re = ee.baf2MachineTier) && void 0 !== Re ? Re : null,
              input: null !== (ke = ee.baf2MachineInput) && void 0 !== ke ? ke : null,
              inertCoupler: null !== (fe = ee.baf2MachineInertCoupler) && void 0 !== fe ? fe : null,
              inputShort: null !== (ze = ee.baf2MachineInputShort) && void 0 !== ze ? ze : null,
              field: null !== (Oe = ee.baf2MachineField) && void 0 !== Oe ? Oe : null,
              noSeeds: !0 === ee.baf2MachineNoSeeds,
              fuelFed: !0 === ee.baf2MachineFuelFed,
              fuelFeeds: !0 === ee.baf2MachineFuelFeeds,
              coreFull: !0 === ee.baf2MachineCoreFull,
              waterUnpowered: !0 === ee.baf2MachineWaterUnpowered,
              powerShort: !0 === ee.baf2MachinePowerShort,
              powerWait: !0 === ee.baf2MachinePowerWait,
              reactorPowered: !0 === ee.baf2MachineReactorPowered,
              fuelLeftMs: null !== (We = ee.baf2MachineFuelLeftMs) && void 0 !== We ? We : null,
              burning: null !== (te = ee.baf2MachineBurning) && void 0 !== te ? te : null,
              fuelKeep: null !== (Ze = ee.baf2MachineFuelKeep) && void 0 !== Ze ? Ze : null,
              water: null !== (De = ee.baf2MachineWater) && void 0 !== De ? De : null,
              farm: null !== (Ae = ee.baf2MachineFarm) && void 0 !== Ae ? Ae : null,
              cryo: null !== (ae = ee.baf2MachineCryo) && void 0 !== ae ? ae : null
            })
          } else if ("baf2StationOpen" === ee) {
            const ee = ie.baf2Station;
            ki.consumeServerOpen(ee, performance.now()) || iz(pe, Me, ee, Ee)
          } else if ("baf2Power" === ee) {
            const ee = ie;
            Pe.set(ee), ee.baf2PowerOpen && (gi({
              kind: "power"
            }), (0, zb.s)())
          } else if (ee === re.A) {
            const ee = ie;
            Ve.set(ee), ee.baf2WaterOpen && (gi({
              kind: "water"
            }), (0, zb.s)())
          } else if ("baf2RxPlans" === ee) {
            var ce, Le, Ce;
            const ee = ie;
            xe.OE(ee);
            const He = new Set(ee.baf2RxPlanList.map((ee => {
              let [ie, He, ye] = ee;
              return `${ie},${He},${ye}`
            })));
            je.retain(He);
            const ye = null === (ce = Ue.get()) || void 0 === ce ? void 0 : ce.kind,
              be = "reactor" === ye ? null === (Le = ve.get()) || void 0 === Le ? void 0 : Le.status.baf2RxAt : "battery" === ye ? null === (Ce = ue.get()) || void 0 === Ce ? void 0 : Ce.status.baf2BatAt : void 0;
            be && di.has(be.join(",")) && !He.has(be.join(",")) && Oi(), di = He
          } else if ("baf2RxStatus" === ee) {
            const ee = ie;
            ve.set(ee), ee.baf2RxOpen && (gi({
              kind: "reactor"
            }), (0, zb.s)())
          } else if ("baf2BatStatus" === ee) {
            const ee = ie;
            ue.set(ee), ee.baf2BatOpen && (gi({
              kind: "battery"
            }), (0, zb.s)())
          } else if ("baf2RxAlarm" === ee) je.OE(ie);
          else if ("baf2Bomb" === ee) he.OE(ie, pe.getPositionView(Me));
          else if ("baf2Fallout" === ee) Ge.OE(ie);
          else if ("baf2ColBeams" === ee) Qe.onBeams(ie);
          else if ("baf2ColStatus" === ee) {
            const ee = ie;
            var le, Se;
            if (Qe.onStatus(ee), ee.baf2ColOpen) Qe.onOpen(null !== (le = null === (Se = pe.Vye(Me)) || void 0 === Se ? void 0 : Se.name) && void 0 !== le ? le : null), gi({
              kind: "collider"
            }), (0, zb.s)()
          } else if ("baf2Terminal" === ee) {
            const ee = ie;
            var ne;
            if (Ye.apply(ee)) ee.baf2TermReset && (gi({
              kind: "terminal"
            }), (0, zb.s)());
            else "terminal" === (null === (ne = Ue.get()) || void 0 === ne ? void 0 : ne.kind) && (Ue.set(null), (0, zb.h)())
          } else if ("baf2Core" === ee) {
            var se;
            const ee = ie;
            if (Fe(!0 === ee.baf2CoreNuclear), function(ee, ie) {
                return "core" === (null === ee || void 0 === ee ? void 0 : ee.kind) && ie.baf2CoreTier > ee.core.message.baf2CoreTier
              }(Ue.get(), ee)) return void(0, zb.h)();
            if (ee.baf2CoreRefresh && "core" !== (null === (se = Ue.get()) || void 0 === se ? void 0 : se.kind)) return;
            gi({
              kind: "core",
              core: qz(ee, Be)
            }), ee.baf2CoreRefresh || (0, zb.s)()
          } else if ("baf2WrenchUndo" === ee) {
            const {
              baf2WrenchPos: ee,
              baf2WrenchBlock: He
            } = ie;
            pe.RV(ee[0], ee[1], ee[2], He)
          } else if ("baf2Toast" === ee) {
            const ee = ie;
            me.heard(performance.now(), ee.baf2ToastMs), ge.show(ee)
          } else if ("baf2Area" === ee) de.arrive(ie, null !== Ue.get());
          else if ("baf2Quest" === ee) {
            const ee = ie;
            Fe(!0 === ee.baf2QuestNuclear), Ee.set(ee, function(ee, ie) {
              var He, ye, be, Me, Ke;
              const Ue = [];
              for (const [, , oe, , , , , , Re, ke] of ee.baf2QuestSteps) null !== oe && Ue.push(oe), Ue.push(...null !== Re && void 0 !== Re ? Re : [], ...null !== ke && void 0 !== ke ? ke : []);
              ee.baf2QuestReward && Ue.push(ee.baf2QuestReward);
              const Fe = null === (He = ee.baf2QuestSide) || void 0 === He ? void 0 : He[2][2];
              Fe && Ue.push(Fe), Ue.push(...null !== (ye = null === (be = ee.baf2QuestSide) || void 0 === be ? void 0 : be[2][8]) && void 0 !== ye ? ye : [], ...null !== (Me = null === (Ke = ee.baf2QuestSide) || void 0 === Ke ? void 0 : Ke[2][9]) && void 0 !== Me ? Me : []);
              for (const [oe] of null !== (Je = ee.baf2QuestAlso) && void 0 !== Je ? Je : []) {
                var Je;
                Ue.push(oe)
              }
              return ie(Ue)
            }(ee, Be)), bz(ee.baf2QuestTier)
          } else if ("baf2Route" === ee) ! function(ee, ie) {
            let {
              baf2RouteCells: He,
              baf2RouteInto: ye
            } = ie;
            0 !== He.length && ye ? ee.setRouteChevrons({
              cells: He.map(((ee, ie) => {
                const [be, , Me] = function(ee, ie, He) {
                  const ye = He + 1 < ee.length ? ee[He + 1] : ie;
                  return [ye[0] - ee[He][0], 0, ye[2] - ee[He][2]]
                }(He, ye, ie);
                return {
                  pos: ee,
                  way: [be, Me]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : ee.setRouteChevrons(null)
          }(pe, ie);
          else if ("baf2QuestBook" === ee) Ee.setBook(ie);
          else if ("baf2Stalls" === ee) qe.set(ie.baf2StallCells);
          else if (ee === XH.n) Te.onMoves(ie);
          else if (ee === XH.k) Te.onLines(ie);
          else if ("baf2Labels" === ee) we.OE(ie);
          else if ("baf2DropMap" === ee) gi({
            kind: "dropMap",
            dropMap: ie
          }), (0, zb.s)();
          else if ("baf2Islands" === ee) {
            var Ne, ei;
            const ee = ie;
            if (Xe.syncIslandEdits(ee.baf2IslandsAnswered), !ee.baf2IslandsOpen && "islands" !== (null === (Ne = Ue.get()) || void 0 === Ne ? void 0 : Ne.kind)) return;
            if (ee.baf2IslandsOpen) {
              var ii, Hi;
              const ie = Bb.e.get("openEverythingMenuName"),
                He = Xe.sent() >= Ti,
                ye = "other" !== (qi = {
                  askedAtMs: fi,
                  askSent: He,
                  reaskedAtMs: Xi,
                  nowMs: Date.now(),
                  panel: null !== (ii = null === (Hi = Ue.get()) || void 0 === Hi ? void 0 : Hi.kind) && void 0 !== ii ? ii : null,
                  inGameMenu: Bb.e.get("openInGameMenuName"),
                  everythingMenu: null === ie ? null : ie === qH.r.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== ee.baf2IslandsFocusInvite
                }).everythingMenu && (!!qi.focusInvite || "islands" === qi.panel && "clientGame" === qi.inGameMenu || !(qi.nowMs - qi.reaskedAtMs < wJ) && (qi.askSent && qi.nowMs - qi.askedAtMs < wJ ? "core" === qi.panel && "clientGame" === qi.inGameMenu && null === qi.everythingMenu : "shop" === qi.everythingMenu || null === qi.inGameMenu));
              if (He && (fi = -1 / 0), Xi = -1 / 0, !ye) return void Bi()
            }
            const He = (bi = ee.baf2IslandsOpen, Mi = "islands" === (null === (ei = Ue.get()) || void 0 === ei ? void 0 : ei.kind), oi = zi, Ri = Date.now(), bi && !Mi && Ri - oi < wJ);
            gi({
              kind: "islands",
              islands: ee,
              arrivedAtMs: Date.now(),
              backToCore: DJ(Ue.get())
            }), He && (zi = -1 / 0, Xi = Date.now(), Xe.send(Ie)), ee.baf2IslandsOpen && ("clientGame" !== Bb.e.get("openInGameMenuName") && (0, Eb.e)(), (0, zb.s)())
          } else if ("baf2CoopTransfer" === ee) {
            var yi;
            const ee = ie;
            ee.baf2TransferOn ? (gi({
              kind: "transfer",
              transfer: ee,
              arrivedAtMs: Date.now()
            }), (0, zb.s)()) : "transfer" === (null === (yi = Ue.get()) || void 0 === yi ? void 0 : yi.kind) && (0, zb.h)()
          } else "baf2IslandLeft" === ee ? (de.dropHeld(), null !== Ue.get() && Oi(), "inventory" === Bb.e.get("openInGameMenuName") && (0, Eb.e)()) : "baf2Arc" === ee ? Ki.OE(pe, ie) : "baf2Blade" === ee ? Ui.onBlade(pe, ie) : "baf2JetFlame" === ee ? Fi.OE(pe, ie) : "baf2GearPower" === ee && Ji.OE(ie);
          var bi, Mi, oi, Ri, qi
        }
      };
      return ti
    }
  },
  39289: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke,
      f: () => Ue
    });
    var ye = He(347),
      be = He(34897),
      Me = He(3608);

    function Ke(ee) {
      const ie = (0, Me.c)(ee);
      return (0, ye.Yb)(ee, void 0 === ie ? void 0 : (0, be.displayNameOf)(ie))
    }

    function Ue(ee, ie) {
      return ee(Ke(ie))
    }
  },
  39309: (ee, ie, He) => {
    function ye(ee, ie, He) {
      const ye = new Set,
        be = new ResizeObserver(He),
        Me = () => {
          const ie = new Set(document.querySelectorAll(ee));
          let Me = !1;
          for (const ee of ye) ie.has(ee) || (be.unobserve(ee), ye.delete(ee), Me = !0);
          for (const ee of ie) ye.has(ee) || (be.observe(ee), Ke.observe(ee, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), ye.add(ee));
          Me && He()
        },
        Ke = new MutationObserver((ie => {
          ie.some((ee => "attributes" === ee.type)) && He(), ie.some((ie => function(ee, ie, He) {
            if ("childList" !== ee.type) return !1;
            for (const ye of ee.addedNodes)
              if (ye instanceof Element && (ye.matches(ie) || ye.querySelector(ie))) return !0;
            for (const ye of ee.removedNodes)
              if (ye instanceof Element)
                for (const ee of He)
                  if (ye.contains(ee)) return !0;
            return !1
          }(ie, ee, ye))) && Me()
        }));
      Ke.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Ue of ie) be.observe(Ue);
      return window.addEventListener("resize", He), Me(), He(), () => {
        be.disconnect(), Ke.disconnect(), window.removeEventListener("resize", He)
      }
    }
    He.d(ie, {
      b: () => ye
    })
  },
  39293: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue
    });
    var ye = He(39291);
    const be = 5,
      Me = [0, 0, 0],
      Ke = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Ue(ee, ie, He, Ue, Fe, Je) {
      let [oe, Re, ke] = Ue;
      const qe = (oe + .5 - He[0]) ** 2 + (Re - He[1]) ** 2 + (ke + .5 - He[2]) ** 2;
      let fe = null;
      qe <= Je ** 2 && (Me[0] = oe + .5, Me[1] = Re + Fe, Me[2] = ke + .5, fe = ie.projectWorldPosToViewport(Me));
      const Te = null !== fe && fe.x > -be && fe.x < 100 + be && fe.y > -be && fe.y < 100 + be;
      return (0, ye.g)(ee, !Te), Te ? (Ke.x = fe.x, Ke.y = fe.y, Ke.distSq = qe, Ke) : null
    }
  },
  39291: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      g: () => Me
    });
    const ye = new WeakMap;

    function be(ee) {
      let ie = ye.get(ee);
      return ie || (ie = {
        hidden: ee.hidden,
        x: NaN,
        y: NaN
      }, ye.set(ee, ie)), ie
    }

    function Me(ee, ie) {
      const He = be(ee);
      He.hidden !== ie && (He.hidden = ie, ee.hidden = ie)
    }

    function Ke(ee, ie, He) {
      const ye = be(ee);
      ye.x === ie && ye.y === He || (ye.x = ie, ye.y = He, ee.style.translate = `${ie}vw ${He}vh`)
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);