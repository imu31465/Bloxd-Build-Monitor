export const id = 237;
export const ids = [237];
export const modules = {
  38341: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(38350);
    const MT = [0, 0, 0];
    class KT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MT;
        this.pool = TT, this.origin = kT, this.count = 0, this.free = []
      }
      take() {
        var TT;
        const kT = null !== (TT = this.free.pop()) && void 0 !== TT ? TT : this.count++;
        return kT >= this.pool.DA && this.pool.grow(Math.max(2 * this.pool.DA, kT + 1)), this.hide(kT), kT
      }
      release(TT) {
        this.hide(TT), this.free.push(TT)
      }
      write(TT, kT, cT, MT) {
        const {
          records: KT
        } = this.pool, {
          origin: OT
        } = this, yT = TT * lT.e;
        KT[yT] = kT - OT[0], KT[yT + 1] = cT - OT[1], KT[yT + 2] = MT - OT[2], KT[yT + lT.f] = 0, this.pool.markDirty(TT)
      }
      hide(TT) {
        this.pool.records[TT * lT.e + lT.f] = 1, this.pool.markDirty(TT)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class OT {
      constructor(TT, kT, cT) {
        this.api = TT, this.model = kT, this.initialCapacity = cT, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(TT) {
        let kT = this.kinds.get(TT);
        if (void 0 === kT) {
          const cT = this.api.createInstancePool({
            ...this.model,
            item: TT
          }, this.initialCapacity);
          null === cT || void 0 === cT || cT.setOrigin(this.origin[0], this.origin[1], this.origin[2]), kT = cT && new KT(cT, this.origin), this.kinds.set(TT, kT)
        }
        return kT
      }
      follow(TT) {
        const {
          origin: kT
        } = this;
        if (Math.abs(TT[0] - kT[0]) <= 512 && Math.abs(TT[1] - kT[1]) <= 512 && Math.abs(TT[2] - kT[2]) <= 512) return !1;
        kT[0] = Math.floor(TT[0]), kT[1] = Math.floor(TT[1]), kT[2] = Math.floor(TT[2]);
        for (const cT of this.kinds.values()) null === cT || void 0 === cT || cT.pool.setOrigin(kT[0], kT[1], kT[2]);
        return !0
      }
      commit() {
        for (const TT of this.kinds.values()) null === TT || void 0 === TT || TT.commit()
      }
      dispose() {
        for (const TT of this.kinds.values()) null === TT || void 0 === TT || TT.dispose();
        this.kinds.clear()
      }
    }
  },
  38363: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      d: () => yT,
      f: () => fT
    });
    const lT = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      MT = [0, 1, 2, 0, 2, 3],
      KT = [4, 5];

    function OT(TT, kT, cT, lT, MT) {
      for (let OT = 0; OT < 6; OT++) KT.includes(OT) === MT && xT(TT, kT, cT, lT, OT)
    }

    function yT(TT, kT, cT, lT) {
      for (let MT = 0; MT < 6; MT++) xT(TT, kT, cT, lT, MT)
    }

    function fT(TT, kT, cT, KT, OT) {
      for (let yT = 0; yT < 6; yT++)
        for (const fT of [0, 1]) {
          const [xT, IT, AT] = [fT + 2, fT + 1, (fT + 3) % 4], CT = TT.length / 3;
          for (const [kT, MT] of [
              [fT, IT],
              [xT, IT],
              [xT, AT],
              [fT, AT]
            ])
            for (let fT = 0; fT < 3; fT++) {
              const xT = lT[3 * (4 * yT + kT) + fT],
                IT = lT[3 * (4 * yT + MT) + fT];
              TT.push((xT + (IT - xT) * OT) * KT / 2 + cT[fT])
            }
          for (const TT of MT) kT.push(CT + TT)
        }
    }

    function xT(TT, kT, cT, KT, OT) {
      let [yT, fT, xT] = cT, [IT, AT, CT] = KT;
      const jT = TT.length / 3;
      for (let MT = 4 * OT; MT < 4 * OT + 4; MT++) TT.push(lT[3 * MT] * IT / 2 + yT, lT[3 * MT + 1] * AT / 2 + fT, lT[3 * MT + 2] * CT / 2 + xT);
      for (const lT of MT) kT.push(jT + lT)
    }
  },
  38326: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => QQ
    });
    var lT = cT(71);
    const MT = [{
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
      KT = 10;
    let OT = !0;

    function yT() {
      return OT
    }

    function fT(TT) {
      OT = TT
    }
    const xT = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function IT() {
      return OT ? MT.length : KT
    }

    function AT(TT) {
      var kT, cT;
      return null !== (kT = null === (cT = MT[TT - 1]) || void 0 === cT ? void 0 : cT.reactorTier) && void 0 !== kT ? kT : 0
    }

    function CT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AT(TT) > 0;
      return cT && !OT ? "hidden" : TT <= kT ? "open" : cT ? kT < 5 ? "hidden" : kT < KT ? "teaser" : "locked" : "locked"
    }

    function jT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: lT,
        n: MT
      } = hT(TT);
      return {
        key: kT[lT],
        params: {
          [lT]: cT ? String(MT) : MT
        }
      }
    }
    const vT = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function tT(TT, kT) {
      return AT(TT) > 0 && kT < KT
    }

    function hT(TT) {
      const kT = AT(TT);
      if (kT > 0) return {
        kind: "atomic",
        n: kT,
        short: `A${kT}`
      };
      const cT = function(TT) {
        return TT >= 6 && TT <= 10 ? TT - 6 + 1 : 0
      }(TT);
      return cT > 0 ? {
        kind: "stage",
        n: cT,
        short: `S${cT}`
      } : {
        kind: "tier",
        n: TT,
        short: String(TT)
      }
    }

    function NT(TT) {
      return MT[Math.max(1, Math.min(TT, MT.length)) - 1]
    }

    function QT(TT, kT) {
      return TT < kT ? function(TT) {
        var kT;
        return null !== (kT = MT[TT]) && void 0 !== kT ? kT : null
      }(TT) : null
    }
    const ST = "baf2coresubmit",
      DT = "baf2corebankpause",
      aT = "baf2coredeposit",
      FT = "baf2corechargepause";

    function rT(TT) {
      var kT;
      return null !== (kT = TT.baf2CoreOpen) && void 0 !== kT ? kT : KT
    }
    const PT = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function wT(TT) {
      return PT.includes(TT)
    }
    const mT = (TT, kT) => kT.map((kT => [kT, [TT]])),
      bT = Object.fromEntries([...mT("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...mT("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...mT("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...mT("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...mT("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...mT("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...mT("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...mT("Parts Bench", ["Focus Lens"]), ...mT("Machine Bench", ["Laser", "Collider"]), ...mT("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...mT("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...mT("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...mT("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...mT("Tool Bench", ["Mob Cage"]), ...mT("Tool Bench", ["Pocket Terminal"]), ...mT("Tool Bench", ["Comet Beacon"]), ...mT("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function zT(TT) {
      var kT;
      return null !== (kT = bT[TT]) && void 0 !== kT ? kT : ["Workbench"]
    }

    function JT(TT) {
      return zT(TT)[0]
    }
    MT.slice(1).map(((TT, kT) => `Core Tier ${kT+2}`));
    var oT = cT(9447);
    const HT = ["on", "hud", "off"];

    function eT(TT) {
      return "on" === TT
    }
    var GT = cT(339);
    const VT = "Mob Farm",
      ET = {
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
      ZT = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      uT = {
        1: 20,
        2: 60,
        3: 120
      },
      XT = "baf2farmvoid",
      dT = "Caged ",
      LT = " Spawner Block";

    function RT(TT) {
      return `lifeform:${(0,GT.ve)(TT)}`
    }

    function gT(TT) {
      if (!TT) return null;
      if (TT.startsWith(dT)) {
        const kT = TT.slice(6);
        return ZT.includes(kT) ? kT : null
      }
      if (TT.endsWith(LT)) {
        const kT = TT.slice(0, -14);
        return void 0 !== ET[kT] ? kT : null
      }
      return null
    }

    function UT(TT) {
      return !0 === TT.mobFarm
    }

    function YT(TT, kT) {
      return uT[ET[kT]] * TT.opMs / 1e3
    }
    const BT = new Map;
    const WT = "baf2islands",
      nT = "baf2islandnew";

    function pT(TT) {
      const kT = MT.findIndex((kT => kT.unlocks.includes(TT)));
      return kT < 0 ? 1 : kT + 1
    }

    function iT(TT) {
      return Math.floor(TT).toLocaleString("en-US")
    }
    var qT = cT(38263);
    const sT = "baf2terminaltake",
      Tk = "baf2terminalput",
      kk = ["one", "stack", "fill"];

    function ck(TT, kT, cT) {
      return `${sT} ${TT} ${kT} ${cT}`
    }

    function lk(TT, kT, cT) {
      return `${Tk} ${TT} ${kT} ${cT}`
    }

    function Mk(TT) {
      return `${Tk} ${TT}`
    }
    const Kk = [
      [`${sT} `, "take"],
      [`${Tk} `, "put"]
    ];

    function Ok(TT) {
      const kT = Kk.find((kT => {
        let [cT] = kT;
        return TT.startsWith(cT)
      }));
      if (!kT) return null;
      const [cT, lT] = kT, [MT, KT, ...OT] = TT.slice(cT.length).trim().split(" "), yT = Number(MT);
      if (!Number.isSafeInteger(yT) || yT <= 0) return null;
      if ("put" === lT && void 0 === KT) return {
        kind: "putAll",
        seq: yT
      };
      const fT = function(TT) {
        if (kk.includes(TT)) return TT;
        const kT = Number(TT);
        return /^\d+$/.test(TT) && Number.isSafeInteger(kT) && kT > 0 ? kT : null
      }(null !== KT && void 0 !== KT ? KT : "");
      return null === fT || 0 === OT.length ? null : {
        kind: lT,
        seq: yT,
        mode: fT,
        item: OT.join(" ")
      }
    }

    function yk(TT, kT) {
      const cT = "number" === typeof TT ? TT : "one" === TT ? 1 : "stack" === TT ? 99 : kT;
      return Math.min(kT, cT)
    }

    function fk(TT, kT) {
      const cT = TT => "number" === typeof TT ? TT : "one" === TT ? 1 : 99;
      return "fill" === TT || "fill" === kT ? "fill" : cT(TT) + cT(kT)
    }

    function xk(TT, kT) {
      const cT = Ok(TT),
        lT = Ok(kT),
        MT = cT && lT ? function(TT, kT) {
          return "take" === TT.kind || "take" === kT.kind ? "take" === TT.kind && "take" === kT.kind && TT.item === kT.item ? {
            ...kT,
            mode: fk(TT.mode, kT.mode)
          } : null : "putAll" === TT.kind || "putAll" === kT.kind ? {
            kind: "putAll",
            seq: kT.seq
          } : TT.item === kT.item ? {
            ...kT,
            mode: fk(TT.mode, kT.mode)
          } : null
        }(cT, lT) : null;
      return MT ? "putAll" === (KT = MT).kind ? Mk(KT.seq) : "put" === KT.kind ? lk(KT.seq, KT.mode, KT.item) : ck(KT.seq, KT.mode, KT.item) : null;
      var KT
    }
    const Ik = "baf2rx";

    function Ak(TT, kT) {
      for (var cT = arguments.length, lT = new Array(cT > 2 ? cT - 2 : 0), MT = 2; MT < cT; MT++) lT[MT - 2] = arguments[MT];
      return [Ik, TT[0], TT[1], TT[2], kT, ...lT].join(" ")
    }
    const Ck = 2,
      jk = 4,
      vk = 8,
      tk = 16,
      hk = 32,
      Nk = 64,
      Qk = 128,
      Sk = 256,
      Dk = 512,
      ak = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Fk = [{
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
    const rk = "Biomass",
      Pk = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function wk(TT) {
      return {
        input: rk,
        inputAmount: 1,
        output: TT,
        outputAmount: 1
      }
    }
    const mk = "baf2synth",
      bk = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      zk = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Jk = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      Hk = function(TT, kT) {
        return {
          input: TT,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: kT,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      ek = function(TT, kT) {
        return {
          ...Hk(TT, kT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      Gk = zk.map((TT => ek(TT, "Biomass", 2))),
      Vk = {
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
          recipes: [Hk("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), Hk("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), Hk("Raw Gold", "Gold Grit", 2), Hk("Messy Stone", "Sand"), Hk("Gravel", "Sand"), Hk("Raw Voltite", "Voltite Dust", 2), Hk("Moonstone", "Moonstone Dust", 4), Hk("Wheat Seeds", "Fertiliser"), Hk("Raw Uranium", "Uranium Grit", 2), ek("Mossy Messy Stone", "Sand"), ...Gk],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Hk("Iron Grit", "Iron Bar"), Hk("Copper Grit", "Copper Bar"), Hk("Gold Grit", "Gold Bar"), Hk("Raw Iron", "Iron Bar"), Hk("Raw Copper", "Copper Bar"), Hk("Raw Gold", "Gold Bar"), Hk("Sand", "Glass"), Hk("Messy Stone", "Stone"), ...GT.Uc.map((TT => Hk(TT, "Charcoal", 1, 4))), Hk("Wheat", "Bread", 1, 2), ...zk.map(((TT, kT) => ek(TT, Jk[kT])))],
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
          recipes: [Hk("Iron Bar", "Iron Plate"), Hk("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Hk("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Hk("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [Hk("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), Hk("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), Hk("Raw Gold", "Gold Grit", 3), Hk("Raw Voltite", "Voltite Dust", 3), Hk("Messy Stone", "Sand", 2), Hk("Gravel", "Sand", 2), Hk("Moonstone", "Moonstone Dust", 6), Hk("Raw Uranium", "Uranium Grit", 3), ek("Mossy Messy Stone", "Sand", 2), ...Gk],
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
          table: ak
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Hk("Coal", "Diamond", 1, 24), Hk("Voltite Dust", "Moonstone", 1, 12)],
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
        ...qT.h
      },
      Ek = {
        Crusher: [Hk("Spent Pellet", "Glow Dust"), Hk("Wheat Seeds", "Biomass"), Hk("Wheat", "Biomass"), Hk("Dead Bush", "Biomass"), Hk("Dusk Moss", "Biomass"), Hk("Rotten Flesh", "Biomass"), Hk("Bone", "Biomass", 2)],
        "Shatter Mill": [Hk("Spent Pellet", "Glow Dust"), Hk("Wheat Seeds", "Biomass"), Hk("Wheat", "Biomass"), Hk("Dead Bush", "Biomass"), Hk("Dusk Moss", "Biomass"), Hk("Rotten Flesh", "Biomass"), Hk("Bone", "Biomass", 2), ...GT.Uc.map((TT => Hk(TT, "Biomass")))],
        Smelter: [Hk("Biomass", "Fertiliser", 2)],
        Press: [Hk("Coal", "Graphite", 1, 4)]
      },
      Zk = "Power Coupler",
      uk = "Advanced Coupler",
      Xk = "Nova Coupler",
      dk = [{
        item: Zk,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: uk,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: Xk,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const Lk = new Map;

    function Rk(TT) {
      var kT, cT;
      return null !== (kT = null !== (cT = TT.fuelSlot) && void 0 !== cT ? cT : TT.couplerSlot) && void 0 !== kT ? kT : null
    }

    function gk(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!TT.couplable) throw new Error(`${TT.kind} takes no Power Coupler`);
      let cT = Lk.get(TT);
      cT || (cT = [], Lk.set(TT, cT));
      let lT = cT[kT];
      if (!lT) {
        var MT;
        const {
          divisor: KT,
          powerPerS: OT
        } = dk[kT - 1], yT = TT.opMs / KT, fT = void 0 !== TT.fluidMade || void 0 !== TT.cryoMade ? TT.powerPerOp : OT * yT / 1e3;
        lT = {
          ...TT,
          fuelSlot: null,
          couplerSlot: null !== (MT = Rk(TT)) && void 0 !== MT ? MT : void 0,
          opMs: yT,
          powerPerOp: fT,
          coupled: !0
        }, kT > 1 && (lT = {
          ...lT,
          couplerLevel: kT
        }), cT[kT] = lT
      }
      return lT
    }
    const Uk = new Map;
    const Yk = new Map;

    function Bk(TT, kT) {
      if (null === kT || (cT = kT, !Pk.includes(cT))) return TT;
      var cT;
      let lT = Yk.get(kT);
      return lT || (lT = {
        ...TT,
        recipes: [wk(kT)]
      }, Yk.set(kT, lT)), lT
    }

    function Wk(TT) {
      return !0 === TT.synth
    }
    const nk = (TT, kT, cT, lT) => ({
        output: TT,
        outputAmount: kT,
        tier: cT,
        inputs: lT.map((TT => {
          let [kT, cT] = TT;
          return {
            item: kT,
            amount: cT
          }
        }))
      }),
      pk = Object.fromEntries([nk("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), nk("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), nk("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), nk("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), nk("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), nk("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), nk("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), nk("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), nk("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), nk("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), nk("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), nk("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), nk("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), nk("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), nk("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), nk("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), nk("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), nk("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), nk("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), nk("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), nk("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), nk("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), nk("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), nk("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), nk("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), nk("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), nk("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), nk("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), nk("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), nk("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((TT => [TT.output, TT]))),
      ik = new Map;

    function qk(TT, kT) {
      let cT = Vk[TT];
      if (kT.atomic && (cT = function(TT) {
          const kT = Ek[TT.kind];
          if (!kT) return TT;
          let cT = Uk.get(TT.kind);
          if (!cT) {
            const lT = new Set(kT.map((TT => TT.input))),
              MT = TT.recipes.filter((TT => !lT.has(TT.input)));
            cT = {
              ...TT,
              recipes: [...MT, ...kT]
            }, Uk.set(TT.kind, cT)
          }
          return cT
        }(cT)), cT.synth) return Bk(cT, kT.taught);
      if (kT.coupled && cT.couplable) return gk(cT, kT.level);
      const lT = cT.inputSlots && null !== kT.taught ? pk[kT.taught] : void 0;
      if (!lT) return cT;
      const MT = `${TT}|${lT.output}`;
      let KT = ik.get(MT);
      return KT || (KT = {
        ...cT,
        bench: lT
      }, ik.set(MT, KT)), KT
    }
    const sk = ["Diamond", "Moonstone"];

    function Tc(TT) {
      return new Set(TT.flatMap((TT => TT.bonus ? [TT.output, TT.bonus.item] : [TT.output])).filter((TT => !sk.includes(TT))))
    }
    const kc = Object.values(Vk).flatMap((TT => TT.recipes));
    Tc(kc.filter((TT => !0 !== TT.nuclear))), Tc([...kc.filter((TT => !0 === TT.nuclear)), ...Object.values(Ek).flat()]);

    function cc(TT) {
      return null === TT.inputSlot && void 0 === TT.inputSlots && void 0 === TT.powerMade && void 0 === TT.fluidMade && !TT.treeCutter && void 0 === TT.table
    }

    function lc(TT) {
      return !0 === TT.treeCutter
    }
    const Mc = ["Voltite Cell"];

    function Kc(TT) {
      var kT, cT;
      return null !== (kT = null === (cT = TT.fuels) || void 0 === cT ? void 0 : cT.some((TT => Mc.includes(TT)))) && void 0 !== kT && kT
    }
    const Oc = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(GT.Uc.map((TT => [TT, 8e3]))),
        ...Object.fromEntries(GT.yd.map((TT => [TT, 2e3]))),
        "Voltite Cell": 12e4
      },
      yc = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      fc = {
        "Uranium Deposit": 4e3
      };

    function xc(TT) {
      var kT;
      return null !== (kT = Object.keys(yc).find((kT => yc[kT] === TT))) && void 0 !== kT ? kT : null
    }

    function Ic(TT) {
      return bk.includes(TT)
    }

    function Ac(TT) {
      return !0 !== TT.nuclear || yT()
    }
    var Cc = cT(328);
    var jc = cT(9533),
      vc = cT(9463),
      tc = cT(9537),
      hc = cT(9524);
    const Nc = "Reactor Controller",
      Qc = "Reactor Port",
      Sc = "Battery Cell",
      Dc = ["fuel", "water", "waste"],
      ac = {
        fuel: Qc,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Fc = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      rc = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Pc = "Reactor Frame",
      wc = "Reactor Glass",
      mc = {
        edge: [Pc],
        cap: [wc, Qc],
        wall: [wc, Qc],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [Nc]
      },
      bc = {
        edge: [Sc],
        cap: [Sc],
        wall: [Sc],
        inside: [Sc],
        ctrl: [Sc]
      },
      zc = ["edge", "cap", "wall", "inside"],
      Jc = ["Reactor Slag"];

    function oc(TT) {
      return Jc.includes(Hc(TT))
    }

    function Hc(TT) {
      const kT = TT.indexOf("|");
      return kT < 0 ? TT : TT.slice(0, kT)
    }

    function ec(TT) {
      return Hc(TT) === Nc ? "reactor" : null
    }

    function Gc(TT) {
      return Hc(TT) !== Qc ? null : TT.endsWith("|Water") ? "water" : TT.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Vc(TT) {
      const kT = Gc(TT);
      return null === kT ? null : uc(ac[Dc[(Dc.indexOf(kT) + 1) % Dc.length]], function(TT) {
        return TT.includes(Ec)
      }(TT))
    }
    const Ec = "|meta|rot1|Formed",
      Zc = new Set([Pc, wc, Qc]);

    function uc(TT, kT) {
      var cT;
      const lT = Hc(TT);
      if (!Zc.has(lT)) return TT;
      if (lT !== Qc) return kT ? lT + Ec : lT;
      const MT = null !== (cT = Gc(TT)) && void 0 !== cT ? cT : "fuel";
      return kT ? "fuel" === MT ? lT + Ec : `${lT}${Ec}|${"water"===MT?"Water":"Waste"}` : ac[MT]
    }

    function Xc(TT, kT) {
      const cT = Ml(TT, kT);
      if ("Air" === cT) return !1;
      const lT = "reactor" === TT ? mc : bc;
      return zc.some((TT => lT[TT].includes(cT))) || "reactor" === TT && Jc.includes(cT)
    }

    function dc(TT) {
      return rc[TT]
    }

    function Lc(TT) {
      var kT;
      return null !== (kT = Fc[TT]) && void 0 !== kT ? kT : Fc[1]
    }

    function Rc(TT) {
      const [kT, , cT] = Lc(TT);
      return [cT, 0, -kT]
    }

    function gc(TT, kT, cT, lT, MT, KT) {
      return {
        ctrl: [TT[0], TT[1], TT[2]],
        rot: Fc[kT] ? kT : 1,
        w: cT,
        h: lT,
        d: MT,
        cu: KT[0],
        cv: KT[1]
      }
    }

    function Uc(TT, kT) {
      return "reactor" === TT ? [Math.floor((kT - 1) / 2), 0] : [0, 0]
    }

    function Yc(TT, kT, cT, lT, MT) {
      let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT.rot;
      if (cT === TT.w && lT === TT.h && MT === TT.d && KT === TT.rot) return TT;
      const [OT] = Uc(kT, TT.w);
      if (TT.cu === OT && TT.cv <= 1) return gc(TT.ctrl, KT, cT, lT, MT, Uc(kT, cT));
      const yT = (TT, kT) => Math.max(1, Math.min(kT, TT));
      return gc(TT.ctrl, KT, cT, lT, MT, [yT(TT.cu, cT - 2), 0 === TT.cv ? 0 : yT(TT.cv, lT - 2)])
    }
    const Bc = 11,
      Wc = 2 * Bc + 1;
    new Uint8Array(Wc * Wc * Wc);

    function nc(TT) {
      return TT.w * TT.h * TT.d
    }

    function pc(TT) {
      const kT = Rc(TT.rot);
      return [TT.ctrl[0] - kT[0] * TT.cu, TT.ctrl[1] - TT.cv, TT.ctrl[2] - kT[2] * TT.cu]
    }

    function ic(TT) {
      return TT.cv * TT.d * TT.w + TT.cu
    }

    function qc(TT, kT) {
      const cT = kT % TT.w,
        lT = Math.floor(kT / TT.w) % TT.d;
      return [cT, Math.floor(kT / (TT.w * TT.d)), lT]
    }

    function sc(TT, kT) {
      const [cT, lT, MT] = qc(TT, kT), KT = pc(TT), OT = Lc(TT.rot), yT = Rc(TT.rot);
      return [KT[0] + yT[0] * cT - OT[0] * MT, KT[1] + lT, KT[2] + yT[2] * cT - OT[2] * MT]
    }

    function Tl(TT, kT) {
      const cT = pc(TT),
        lT = Lc(TT.rot),
        MT = Rc(TT.rot),
        KT = kT[0] - cT[0],
        OT = kT[2] - cT[2],
        yT = KT * MT[0] + OT * MT[2],
        fT = -(KT * lT[0] + OT * lT[2]),
        xT = kT[1] - cT[1];
      return yT < 0 || yT >= TT.w || xT < 0 || xT >= TT.h || fT < 0 || fT >= TT.d ? -1 : (xT * TT.d + fT) * TT.w + yT
    }

    function kl(TT, kT) {
      if (kT === ic(TT)) return "ctrl";
      const [cT, lT, MT] = qc(TT, kT), KT = 0 === lT || lT === TT.h - 1, OT = Number(0 === cT || cT === TT.w - 1) + Number(KT) + Number(0 === MT || MT === TT.d - 1);
      return OT >= 2 ? "edge" : 1 === OT ? KT ? "cap" : "wall" : "inside"
    }

    function cl(TT, kT) {
      const [cT, lT, MT] = qc(TT, kT);
      return 0 === cT || cT === TT.w - 1 || 0 === lT || lT === TT.h - 1 || 0 === MT || MT === TT.d - 1 ? -1 : ((lT - 1) * (TT.d - 2) + (MT - 1)) * (TT.w - 2) + (cT - 1)
    }

    function ll(TT, kT) {
      const cT = TT.w - 2,
        lT = TT.d - 2,
        MT = kT % cT + 1,
        KT = Math.floor(kT / cT) % lT + 1;
      return ((Math.floor(kT / (cT * lT)) + 1) * TT.d + KT) * TT.w + MT
    }

    function Ml(TT, kT) {
      const cT = Hc(kT);
      return "reactor" === TT && cT === Nc ? Pc : cT
    }

    function Kl(TT, kT, cT) {
      const lT = "ctrl" === kT ? Hc(cT) : Ml(TT, cT);
      return ("reactor" === TT ? mc : bc)[kT].includes(lT) ? "ok" : "Air" === lT ? "missing" : Xc(TT, cT) ? "wrong" : "blocked"
    }

    function Ol(TT, kT) {
      return "battery" === TT ? Sc : "inside" === kT ? null : function(TT, kT) {
        if ("inside" === kT || "ctrl" === kT || "battery" === TT) return null;
        return "edge" === kT ? Pc : wc
      }(TT, kT)
    }
    const yl = {
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
      fl = "Collider",
      xl = "Laser",
      Il = "Star Alloy",
      Al = "Glow Dust",
      Cl = [fl, "_Collider Focus"];

    function jl(TT) {
      return Cl.indexOf(Hc(TT))
    }

    function vl(TT) {
      return Hc(TT) === xl
    }

    function tl(TT) {
      return [
        [TT[0], TT[1], TT[2]],
        [TT[0], TT[1] + 1, TT[2]]
      ]
    }
    const hl = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function Nl(TT, kT, cT) {
      const lT = hl[kT];
      return [TT[0] + lT[0] * cT, TT[1], TT[2] + lT[2] * cT]
    }

    function Ql(TT, kT) {
      if (kT[1] !== TT[1]) return null;
      const cT = kT[0] - TT[0],
        lT = kT[2] - TT[2];
      if (0 !== cT === (0 !== lT)) return null;
      const MT = Math.abs(cT + lT);
      if (MT > yl.LASER_D) return null;
      return {
        dir: lT < 0 ? 0 : cT > 0 ? 1 : lT > 0 ? 2 : 3,
        JO: MT
      }
    }

    function Sl(TT, kT, cT) {
      const lT = kT => Math.abs(TT[0] - kT[0]) <= 1 && Math.abs(TT[1] - kT[1]) <= 1;
      return lT(kT) || lT(cT)
    }

    function Dl(TT, kT) {
      return function(TT, kT, cT, lT) {
        return [0, 1, 2, 3].map((MT => {
          for (let KT = 1; KT <= yl.LASER_D; KT++) {
            const OT = Nl(TT, MT, KT);
            if (Sl([OT[0], OT[2]], kT, cT) || !lT(OT)) return !1
          }
          return !0
        }))
      }(tl(TT)[1], kT.spawnXZ, kT.coreXZ, (TT => TT[1] >= jc.t && TT[1] < jc.t + jc.w && TT[0] >= kT.minXZ[0] && TT[0] <= kT.maxXZ[0] && TT[2] >= kT.minXZ[1] && TT[2] <= kT.maxXZ[1]))
    }
    const al = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function Fl(TT) {
      return Math.max(48 + 16 * TT, NT(TT).machineAllowance)
    }
    const rl = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function Pl(TT) {
      const kT = TT.split("|")[0];
      return rl.includes(kT) ? "Solar Panel" : kT === tc.c ? "Fluid Pipe" : jl(kT) >= 0 ? "Collider" : (cT = kT, al.includes(cT) ? kT : null);
      var cT
    }
    const wl = "buildAFactory2Game:solarPanelDescription";
    const ml = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function bl(TT, kT) {
      var cT;
      return null !== (cT = ml.find((cT => {
        var lT;
        return (null !== (lT = TT.level(cT)) && void 0 !== lT ? lT : 0) >= kT
      }))) && void 0 !== cT ? cT : null
    }
    const zl = "buildAFactory2Game:";
    let Jl = null;
    const ol = {
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
      Hl = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      el = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      Gl = {
        "Loot Chest": `${zl}lookRuinChestName`
      };

    function Vl(TT) {
      return "object" === typeof TT && null !== TT && "translationKey" in TT && "string" === typeof TT.translationKey ? TT.translationKey : null
    }

    function El(TT, kT) {
      var cT;
      return null !== (cT = Vl(TT.displayName(kT))) && void 0 !== cT ? cT : `item:${(0,GT.ve)(kT)}`
    }

    function Zl(TT, kT) {
      var cT, lT, MT, KT;
      let OT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kT;
      if ("Solar Panel" === Pl(kT)) return {
        name: Vl(TT.displayName("Solar Panel")),
        detail: wl,
        detailItem: null
      };
      const fT = kT.endsWith(" Ore"),
        xT = (Jl ??= new Set([...Object.keys((0, vc.g)()), ...Object.keys((0, tc.o)())].map((TT => TT.split("|")[0]))), Jl).has(kT),
        IT = fT || xT ? null : function(TT) {
          var kT;
          return TT.endsWith(" Log") && !TT.startsWith("Barkless ") ? "lookLog" : TT.endsWith(" Sapling") ? "lookSapling" : TT.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (kT = ol[TT]) && void 0 !== kT ? kT : null
        }(kT);
      if (!TT.isBlock(kT) || !fT && !xT && null === IT) return null;
      const AT = null !== (cT = null !== (lT = Gl[kT]) && void 0 !== lT ? lT : Vl(null !== (MT = TT.displayName(OT)) && void 0 !== MT ? MT : TT.displayName(kT))) && void 0 !== cT ? cT : `item:${(0,GT.ve)(kT)}`;
      if (null !== IT) return {
        name: AT,
        detail: `${zl}${IT}`,
        detailItem: null
      };
      const CT = null !== (KT = Hl[kT]) && void 0 !== KT ? KT : yT() ? el[kT] : void 0;
      if (xT && void 0 !== CT) return {
        name: AT,
        detail: `${zl}${CT}`,
        detailItem: null
      };
      const jT = yc[kT];
      if (void 0 !== jT) return {
        name: AT,
        detail: `${zl}lookDeposit`,
        detailItem: El(TT, jT)
      };
      const vT = TT.harvestLevel(kT);
      if (fT && "rock" === TT.harvestType(kT) && 0 !== vT) {
        const kT = bl(TT, null !== vT && void 0 !== vT ? vT : 0);
        if (kT === ml[0]) return {
          name: AT,
          detail: `${zl}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== kT) return {
          name: AT,
          detail: `${zl}lookPickaxe`,
          detailItem: El(TT, kT)
        }
      }
      return {
        name: AT,
        detail: Vl(TT.description(kT)),
        detailItem: null
      }
    }

    function ul(TT) {
      return TT < jc.t - 24
    }
    const Xl = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const dl = "Wrench",
      Ll = "Nova Wrench";

    function Rl(TT) {
      return TT === dl || TT === Ll
    }
    const gl = [...jc.T, "Belt Lift", "Belt Drop"];
    const Ul = ["Belt Lift", "Belt Drop"],
      Yl = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function Bl(TT) {
      return TT.split("|")[0]
    }

    function Wl(TT) {
      const kT = /\|rot(\d)/.exec(TT);
      return kT ? Number(kT[1]) : 1
    }

    function nl(TT) {
      return TT % 4 + 1
    }

    function pl(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === kT && "" === cT ? TT : `${TT}|meta|rot${kT}${cT}`
    }

    function il(TT) {
      return Bl(TT) === jc.H ? (0, jc.Y)(TT) ? "gateRight" : "gateLeft" : (0, jc.cb)(TT)
    }

    function ql(TT) {
      const kT = Bl(TT),
        cT = Wl(TT);
      if (jc.T.includes(kT)) return (0, jc.W)(kT, nl(cT), null);
      if (kT === jc.h) return (0, jc.hb)(nl(cT), (0, jc.$)(TT));
      if (kT === jc.J) {
        const lT = Yl[(0, jc.cb)(TT)];
        return null === lT ? pl(kT, nl(cT)) : pl(kT, cT, jc.L[lT])
      }
      return kT === jc.H ? (0, jc.Y)(TT) ? pl(kT, nl(cT)) : pl(kT, cT, jc.p) : hc.e.includes(kT) && !Ul.includes(kT) || Ic(kT) ? pl(kT, nl(cT)) : null
    }

    function sl(TT) {
      return hc.e.includes(TT) || Ic(TT) || null !== Pl(TT)
    }

    function TM(TT) {
      return "Solar Panel" === Pl(TT)
    }
    const kM = "buildAFactory2Game:",
      cM = {
        leftFront: `${kM}lookSplitDetail_leftFront`,
        frontRight: `${kM}lookSplitDetail_frontRight`,
        gateRight: `${kM}lookGateDetail_gateRight`
      };

    function lM(TT, kT) {
      var cT;
      let lT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const MT = il(TT),
        KT = null === MT ? null : `${kM}${MT.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${MT}`,
        OT = null === MT ? null : null !== (cT = cM[MT]) && void 0 !== cT ? cT : null;
      if (Rl(kT) && lT) {
        const cT = Bl(TT);
        return kT === Ll && yT() && function(TT) {
          return gl.includes(Bl(TT))
        }(TT) ? {
          mode: KT,
          detail: OT,
          next: `${kM}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: KT,
          detail: OT,
          next: sl(cT) && !TM(cT) ? `${kM}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const fT = Rl(kT) ? ql(TT) : null;
      if (null === fT) return {
        mode: KT,
        detail: OT,
        next: null,
        nextState: null
      };
      const xT = il(fT);
      return null === xT || Wl(fT) !== Wl(TT) ? {
        mode: KT,
        detail: OT,
        next: `${kM}lookWrenchTurn`,
        nextState: null
      } : {
        mode: KT,
        detail: OT,
        next: `${kM}lookWrenchNext`,
        nextState: `${kM}lookWrenchState_${xT}`
      }
    }
    const MM = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const KM = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function OM(TT) {
      return [0, 1, 2, 3].map((kT => 0 !== (TT & 1 << kT)))
    }

    function yM(TT) {
      const kT = [];
      for (let cT = 8; cT + 2 < TT.length; cT += 3) kT.push([TT[cT], TT[cT + 1], TT[cT + 2]]);
      return {
        focus: [TT[0], TT[1], TT[2]],
        lasers: OM(TT[3]),
        open: OM(TT[4]),
        live: OM(TT[5]),
        on: 1 === TT[6],
        state: KM[TT[7]],
        blockers: kT
      }
    }
    const fM = "Arc Caster",
      xM = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      IM = (Object.values(xM), "Jet Chestplate"),
      AM = "Nova Jet Chestplate",
      CM = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      jM = Object.values(CM);

    function vM(TT, kT, cT) {
      return Math.min(function(TT) {
        return yT() && AT(TT) >= 5 ? 20 : 10
      }(cT), Math.floor(function(TT, kT) {
        return Math.max(0, TT) + (yT() ? Math.max(0, kT) : 0)
      }(TT, kT) / 5))
    }

    function tM(TT, kT, cT) {
      const lT = vM(kT, cT, TT),
        MT = AT(TT),
        KT = (MT >= 3 ? 55 : MT >= 1 ? 50 : TT >= 8 ? 45 : 30) + lT,
        OT = Math.max(100 + lT, 2 * KT);
      return {
        arcDamage: KT,
        arcPierce: TT >= 7 ? 2 : 1,
        arcChain: TT >= 10,
        barrierMax: (MT >= 4 ? 100 : MT >= 2 ? 90 : TT >= 9 ? 80 : TT >= 6 ? 60 : 40) + 5 * lT,
        barrierRegenPerS: MT >= 5 ? 20 : TT >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * lT,
        novaShieldRegenPerS: 32,
        bladeDamage: OT,
        bladePunch: Math.round(.5 * OT),
        forgeRank: lT
      }
    }
    const hM = {
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
    var NM = cT(36653),
      QM = cT(36432),
      SM = cT(36423),
      DM = cT(31),
      aM = cT(1654),
      FM = cT(1046),
      rM = cT.n(FM);

    function PM(TT) {
      return !0 === TT.field
    }
    const wM = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function mM(TT) {
      return wM.has(TT) ? `buildAFactory2Game:itemPlural_${(0,GT.ve)(TT)}` : null
    }
    var bM = cT(1195),
      zM = cT(1061),
      JM = cT(1943),
      oM = cT(1921),
      HM = cT(36646),
      eM = cT(36650),
      GM = cT(36),
      VM = cT(36638);
    const EM = "baf2QuestView",
      ZM = "baf2PlayerY",
      uM = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class XM {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = TT, this.view = {
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
      set(TT, kT) {
        var cT, lT, MT, KT, OT, yT, fT, xT;
        const IT = JSON.stringify(TT.baf2QuestName) === JSON.stringify(this.view.name),
          AT = new Set(this.view.rows.filter((TT => TT.done)).map((TT => TT.id))),
          CT = new Set(this.view.rows.filter((TT => TT.justFinished)).map((TT => TT.id))),
          jT = TT.baf2QuestSide,
          vT = null !== jT && !0 === TT.baf2QuestSideFocus;
        let tT = !1,
          hT = 0;
        const NT = TT.baf2QuestSteps.map((TT => {
            const kT = WM(TT, uM.has(TT[0]) ? TT[0] : "" + hT++),
              cT = IT && kT.done && !AT.has(kT.id);
            return kT.justFinished = cT || IT && kT.done && CT.has(kT.id), tT ||= cT, kT
          })),
          QT = BM(NT);
        QT >= 0 && !vT && (NT[QT].current = !0);
        const ST = !IT && null !== TT.baf2QuestName,
          DT = JSON.stringify(jT && [jT[0], jT[1]]),
          aT = DT === JSON.stringify(null !== (cT = null === (lT = this.view.side) || void 0 === lT ? void 0 : lT.name) && void 0 !== cT ? cT : null),
          FT = null !== jT && !this.sidesSeen.has(DT);
        FT && this.sidesSeen.add(DT), this.serverTutorial = null !== (MT = TT.baf2QuestTutorial) && void 0 !== MT ? MT : "on", (null !== (KT = TT.baf2QuestTutorialSeq) && void 0 !== KT ? KT : 0) >= this.pickSeq && this.endPick();
        const rT = !IT || !aT || TT.baf2QuestTier !== this.view.tier;
        this.view = {
          name: TT.baf2QuestName,
          rows: NT,
          reward: TT.baf2QuestReward,
          goal: TT.baf2QuestGoal,
          pulse: this.view.pulse + (tT || ST ? 1 : 0),
          itemNames: kT,
          side: jT && {
            name: [jT[0], jT[1]],
            row: {
              ...WM(jT[2], "side"),
              current: vT
            },
            goal: null !== (OT = jT[3]) && void 0 !== OT ? OT : null
          },
          sideCameUpAt: FT ? Date.now() : this.view.sideCameUpAt,
          tier: TT.baf2QuestTier,
          core: TT.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (yT = TT.baf2QuestAlso) && void 0 !== yT ? yT : [],
          depth: null !== (fT = TT.baf2QuestDepth) && void 0 !== fT ? fT : null,
          tutorial: null !== (xT = this.pickedTutorial) && void 0 !== xT ? xT : this.serverTutorial,
          tutorialKnown: !0
        }, this.nt(), tT && this.scheduleClear(), rT && this.requestBook()
      }
      setTutorial(TT) {
        return this.endPick(), this.pickedTutorial = TT, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.nt()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: TT
        }, this.nt(), this.pickSeq
      }
      onPlayerY(TT) {
        const kT = Math.floor(TT);
        kT !== this.playerY && (this.playerY = kT, this.view.depth && GM.k.nt(ZM, kT))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(TT) {
        this.view = {
          ...this.view,
          chapters: TT.baf2BookChapters
        }, this.nt()
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
            rows: this.view.rows.map((TT => TT.justFinished ? {
              ...TT,
              justFinished: !1
            } : TT))
          }, this.nt()
        }), 2400)
      }
      nt() {
        GM.k.nt(EM, this.view, !0)
      }
    }

    function dM(TT, kT) {
      return TT.sideCameUpAt > 0 && kT - TT.sideCameUpAt < 2400
    }

    function LM(TT) {
      return (null === TT.name || RM(TT)) && null === TT.side && null !== TT.chapters
    }

    function RM(TT) {
      var kT;
      return "quest_forgeOngoing" === (null === (kT = TT.name) || void 0 === kT ? void 0 : kT[0])
    }

    function gM(TT) {
      return TT.filter((TT => !uM.has(TT.key)))
    }

    function UM(TT) {
      return TT.key.startsWith("stepCraft")
    }

    function YM(TT, kT) {
      const cT = new Set,
        lT = TT.side ? [...TT.rows, TT.side.row] : TT.rows;
      for (const KT of lT)
        if (!KT.done) {
          !KT.item || kT && !UM(KT) || cT.add(KT.item);
          for (const [TT, kT, lT] of null !== (MT = KT.chips) && void 0 !== MT ? MT : []) {
            var MT;
            kT < lT && cT.add(TT)
          }
        } return cT
    }

    function BM(TT) {
      const kT = TT.findIndex((TT => !TT.done && !TT.away));
      return kT >= 0 ? kT : TT.findIndex((TT => !TT.done))
    }

    function WM(TT, kT) {
      let [cT, lT, MT, KT, OT, yT, fT, xT, IT, AT] = TT;
      return {
        id: kT,
        key: cT,
        params: lT,
        item: MT,
        amount: KT,
        total: OT,
        done: yT,
        chips: null !== fT && void 0 !== fT ? fT : null,
        current: !1,
        away: !0 === xT,
        madeFor: null !== IT && void 0 !== IT ? IT : [],
        also: null !== AT && void 0 !== AT ? AT : [],
        justFinished: !1
      }
    }
    const nM = "baf2QuestItems",
      pM = new Set;
    let iM = new Set,
      qM = null;

    function sM(TT) {
      const kT = eT(TT.tutorial),
        cT = kT ? YM(TT, !0) : pM;
      "inventory" === DM.e.get("openInGameMenuName") ? (qM = null, (0, VM.w)(cT)) : qM = cT;
      const lT = kT ? YM(TT, !1) : pM;
      (0, eM.d)(lT, iM) || (iM = lT, GM.k.nt(nM, iM))
    }

    function TK() {
      return (0, HM.d)(nM, (() => iM))
    }
    var kK = cT(9384),
      cK = cT(3214);

    function lK(TT) {
      const kT = (0, cK.e)(TT),
        cT = void 0 === kT ? void 0 : (0, kK.displayNameOf)(kT);
      return "object" === typeof cT && null !== cT && "translationKey" in cT && "string" === typeof cT.translationKey ? cT.translationKey : `item:${(0,GT.ve)(TT)}`
    }

    function MK(TT, kT) {
      return TT(lK(kT))
    }
    const KK = [{
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

    function OK(TT, kT) {
      return [`Deposit Seed (${TT})`, {
        item: yc[`${TT} Deposit`],
        amount: kT
      }]
    }
    const yK = Object.fromEntries([OK("Coal", 8), OK("Iron", 8), OK("Copper", 8), OK("Gold", 6), OK("Voltite", 4), OK("Uranium", 4)]),
      fK = "Relay Coil",
      xK = new Map;

    function IK(TT) {
      let kT = xK.get(TT);
      if (!kT) {
        const cT = Math.max(1, TT);
        kT = KK.filter((TT => {
          var kT;
          return cT >= TT.fromTier && cT <= (null !== (kT = TT.untilTier) && void 0 !== kT ? kT : 1 / 0)
        })).map((TT => TT.later && cT >= TT.later.tier ? {
          ...TT,
          weight: TT.later.weight
        } : TT)), xK.set(TT, kT)
      }
      return kT
    }

    function AK(TT) {
      return IK(TT).some((TT => {
        let {
          item: kT
        } = TT;
        return kT === fK
      }))
    }

    function CK(TT) {
      return TT.startsWith("Deposit Seed (")
    }

    function jK(TT, kT) {
      const cT = IK(TT);
      return kT ? cT.filter((TT => kT(TT.item))) : cT
    }

    function vK(TT) {
      return TT.reduce(((TT, kT) => TT + kT.weight), 0)
    }

    function tK(TT, kT) {
      const cT = jK(TT, kT),
        lT = vK(cT);
      return cT.map((TT => ({
        find: TT,
        chance: TT.weight / lT
      })))
    }
    const hK = 6e4,
      NK = new Intl.NumberFormat("en-US");

    function QK(TT, kT) {
      const cT = TT >= 10 ? Math.round(TT) : Math.round(10 * TT) / 10;
      return 0 === cT ? "0" : `${kT}${NK.format(cT)}`
    }

    function SK(TT) {
      return TT < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? NK.format(TT) : TT < 1e6 ? `${TT<1e5?Math.floor(TT/100)/10:Math.floor(TT/1e3)}k` : Math.floor(TT / 1e5) / 10 + "M"
    }

    function DK(TT) {
      return TT < 0 ? "\u2212" + -TT : String(TT)
    }

    function aK(TT, kT) {
      const cT = Math.max(1, Math.round(kT));
      if (cT < 60) return TT("buildAFactory2Game:durationSeconds", {
        seconds: String(cT)
      });
      const lT = Math.round(cT / 60);
      if (lT < 60) return TT("buildAFactory2Game:durationMinutes", {
        minutes: String(lT)
      });
      const MT = String(Math.floor(lT / 60));
      return lT % 60 === 0 ? TT("buildAFactory2Game:durationWholeHours", {
        hours: MT
      }) : TT("buildAFactory2Game:durationHours", {
        hours: MT,
        minutes: String(lT % 60)
      })
    }
    const FK = "(max-height: 420px), (max-width: 650px)";

    function rK() {
      return "undefined" !== typeof window && window.matchMedia(FK).matches
    }

    function PK(TT) {
      const kT = window.matchMedia(FK),
        cT = () => {
          TT(kT.matches)
        };
      return kT.addEventListener("change", cT), () => {
        kT.removeEventListener("change", cT)
      }
    }
    var wK = cT(1099);

    function mK(TT, kT) {
      return null !== TT && TT > kT + 1
    }

    function bK(TT) {
      const kT = 100 * TT;
      return String(kT <= 0 || kT >= 1 ? Math.round(kT) : Math.max(.1, Math.round(10 * kT) / 10))
    }

    function zK(TT) {
      let {
        item: kT,
        amount: cT
      } = TT;
      return (0, wK.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, wK.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, wK.jsx)(JM.d, {
            itemName: kT,
            amount: 0
          })
        }), cT > 1 && (0, wK.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", cT]
        })]
      })
    }

    function JK(TT) {
      let {
        label: kT,
        names: cT
      } = TT;
      const [MT, KT] = (0, lT.useState)(!1), OT = cT.join(" / ");
      return (0, wK.jsxs)(wK.Fragment, {
        children: [(0, wK.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: OT,
          "aria-expanded": MT,
          onClick: () => {
            KT(!MT)
          },
          children: kT
        }), MT && (0, wK.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: OT
        })]
      })
    }

    function oK(TT) {
      let {
        tier: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)(), {
        key: lT,
        params: MT
      } = jT(kT, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), KT = cT(`buildAFactory2Game:${lT}`, MT);
      return (0, wK.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, wK.jsx)(zM.e, {
          name: "lock"
        }), KT]
      })
    }
    const HK = (0, lT.createContext)(null);

    function eK() {
      const {
        t: TT
      } = (0, bM.B)(), kT = (0, lT.useContext)(HK);
      return (0, lT.useEffect)((() => null === kT || void 0 === kT ? void 0 : kT()), [kT]), (0, wK.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: TT("buildAFactory2Game:recipeForQuest"),
        "aria-label": TT("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function GK(TT) {
      let {
        title: kT,
        count: cT,
        children: MT,
        startOpen: KT = !0
      } = TT;
      const {
        t: OT
      } = (0, bM.B)(), [yT, fT] = (0, lT.useState)((() => KT && !rK())), [xT, IT] = (0, lT.useState)(0), AT = (0, lT.useCallback)((() => (IT((TT => TT + 1)), () => {
        IT((TT => TT - 1))
      })), []);
      return (0, wK.jsxs)("div", {
        className: rM()("Baf2Recipes", {
          Open: yT
        }),
        children: [(0, wK.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            fT(!yT)
          },
          "aria-expanded": yT,
          children: [OT("buildAFactory2Game:recipesToggle", {
            title: kT,
            count: String(cT)
          }), (0, wK.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: yT ? "\u25be" : "\u25b8"
          })]
        }), yT && (0, wK.jsxs)(HK.Provider, {
          value: AT,
          children: [(0, wK.jsx)("ul", {
            className: "Baf2RecipeList",
            children: MT
          }), xT > 0 && (0, wK.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, wK.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), OT("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const VK = "buildAFactory2Game:",
      EK = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const ZK = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      uK = {
        "Uranium Grit": KT,
        "Raw Uranium": KT
      };

    function XK(TT) {
      var kT;
      return null !== (kT = uK[TT]) && void 0 !== kT ? kT : Math.max(pT(TT), ZK[TT] ? pT(ZK[TT]) : 1, function(TT) {
        const kT = MT.findIndex((kT => kT.cost.some((kT => kT.item === TT))));
        return kT > KT ? kT : 1
      }(TT))
    }

    function dK(TT, kT) {
      return LK(kT) ? XK(kT) : function(TT) {
        if (EK.has(TT)) return 1;
        const kT = MT.findIndex((kT => kT.newDeposits.some((kT => {
          let {
            block: cT
          } = kT;
          return cT === TT
        }))));
        return kT < 0 ? 1 : kT + 1
      }(TT)
    }

    function LK(TT) {
      return TT in uK || AT(XK(TT)) > 0
    }

    function RK(TT, kT) {
      return qk(TT, {
        coupled: !1,
        taught: null,
        atomic: yT() && kT >= 11
      }).recipes
    }

    function gK(TT, kT) {
      const cT = CT(TT, kT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AT(TT) > 0);
      return "open" === cT || "locked" === cT
    }

    function UK(TT, kT) {
      return TT.map(((TT, cT) => ({
        value: TT,
        idx: cT,
        tier: kT(TT)
      }))).sort(((TT, kT) => TT.tier - kT.tier || TT.idx - kT.idx)).map((TT => {
        let {
          value: kT
        } = TT;
        return kT
      }))
    }

    function YK(TT, kT, cT) {
      const lT = CT(TT, kT);
      if ("hidden" === lT || "open" === lT) return null;
      if ("teaser" === lT) return {
        tag: {
          translationKey: `${VK}${cT?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${VK}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const MT = jT(TT, {
          tier: cT ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        KT = jT(TT, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${VK}${MT.key}`,
          params: MT.params
        },
        reason: {
          translationKey: `${VK}${KT.key}`,
          params: KT.params
        }
      }
    }

    function BK(TT) {
      return !CK(TT)
    }

    function WK(TT) {
      let {
        seconds: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)();
      return (0, wK.jsx)(GK, {
        title: cT("buildAFactory2Game:recipesCuts", {
          seconds: kT
        }),
        count: 1,
        children: (0, wK.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, wK.jsx)(zK, {
            item: "Maple Sapling",
            amount: 1
          }), (0, wK.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, wK.jsx)(zK, {
            item: "Maple Log",
            amount: 1
          }), (0, wK.jsx)("span", {
            className: "Baf2RecipeName",
            children: cT("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function nK(TT) {
      let {
        fertilised: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)();
      return (0, wK.jsxs)(GK, {
        title: cT("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, wK.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, wK.jsx)(zK, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, wK.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, wK.jsx)(zK, {
            item: "Wheat",
            amount: 1
          }), (0, wK.jsx)(zK, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, wK.jsx)("span", {
            className: "Baf2RecipeName",
            children: cT("buildAFactory2Game:recipeField")
          })]
        }), (0, wK.jsxs)("li", {
          className: rM()("Baf2Recipe", {
            InUse: kT
          }),
          children: [(0, wK.jsx)(zK, {
            item: "Fertiliser",
            amount: 1
          }), (0, wK.jsx)("span", {
            className: "Baf2RecipeName",
            children: cT("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function pK(TT) {
      let {
        tier: kT,
        seconds: cT
      } = TT;
      const {
        t: lT
      } = (0, bM.B)(), MT = function(TT) {
        return TT >= 5 ? Fk : ak
      }(kT);
      return (0, wK.jsx)(GK, {
        title: lT("buildAFactory2Game:recipesBringsUp", {
          seconds: cT
        }),
        count: MT.length,
        children: MT.map((TT => {
          let {
            item: kT,
            chance: cT
          } = TT;
          return (0, wK.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, wK.jsx)(zK, {
              item: kT,
              amount: 1
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeName",
              children: MK(lT, kT)
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: lT("buildAFactory2Game:recipeChance", {
                percent: bK(cT)
              })
            })]
          }, kT)
        }))
      })
    }

    function iK(TT) {
      let {
        tier: kT,
        seconds: cT,
        noSeeds: lT
      } = TT;
      const {
        t: MT
      } = (0, bM.B)(), KT = TK(), OT = tK(kT, lT ? BK : void 0), yT = lT && tK(kT).length > OT.length, fT = AK(kT);
      return (0, wK.jsxs)(GK, {
        title: MT("buildAFactory2Game:recipesRecycles", {
          seconds: cT
        }),
        count: OT.length,
        children: [OT.map((TT => {
          let {
            find: kT,
            chance: cT
          } = TT;
          return (0, wK.jsxs)("li", {
            className: "Baf2Recipe",
            children: [KT.has(kT.item) && (0, wK.jsx)(eK, {}), (0, wK.jsx)(zK, {
              item: kT.item,
              amount: kT.amount
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeName",
              children: MK(MT, kT.item)
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: MT("buildAFactory2Game:recipeChance", {
                percent: bK(cT)
              })
            })]
          }, kT.item)
        })), yT && (0, wK.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, wK.jsx)("span", {
            className: "Baf2RecipeName",
            children: MT("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), fT && (0, wK.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, wK.jsx)("span", {
            className: "Baf2RecipeName",
            children: MT("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function qK(TT) {
      let {
        tier: kT,
        seconds: cT
      } = TT;
      const {
        t: lT
      } = (0, bM.B)(), MT = Object.entries(yK).filter((TT => {
        let [, {
          item: cT
        }] = TT;
        return gK(XK(cT), kT, LK(cT))
      }));
      return (0, wK.jsx)(GK, {
        title: lT("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: cT
        }),
        count: MT.length,
        children: MT.map((TT => {
          let [kT, {
            item: cT,
            amount: MT
          }] = TT;
          return (0, wK.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, wK.jsx)(zK, {
              item: kT,
              amount: 1
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, wK.jsx)(zK, {
              item: cT,
              amount: MT
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeName",
              children: MK(lT, cT)
            })]
          }, kT)
        }))
      })
    }

    function sK(TT) {
      let {
        tier: kT,
        seconds: cT
      } = TT;
      const {
        t: lT
      } = (0, bM.B)(), MT = TK(), KT = UK(Object.entries(yc).filter((TT => {
        let [cT, lT] = TT;
        return gK(dK(cT, lT), kT, LK(lT))
      })), (TT => {
        let [kT, cT] = TT;
        return dK(kT, cT)
      }));
      return (0, wK.jsx)(GK, {
        title: lT("buildAFactory2Game:recipesDigs", {
          seconds: cT
        }),
        count: KT.length,
        children: KT.map((TT => {
          let [cT, KT] = TT;
          const OT = dK(cT, KT),
            yT = OT > kT ? OT : null,
            fT = fc[cT],
            xT = null === yT && MT.has(KT);
          return (0, wK.jsxs)("li", {
            className: rM()("Baf2Recipe", {
              Locked: null !== yT,
              Far: mK(yT, kT)
            }),
            children: [xT && (0, wK.jsx)(eK, {}), (0, wK.jsx)(zK, {
              item: cT,
              amount: 1
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, wK.jsx)(zK, {
              item: KT,
              amount: 1
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeName",
              children: MK(lT, KT)
            }), void 0 !== fT && (0, wK.jsx)("span", {
              className: "Baf2RecipeMore",
              children: lT("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / fT)
              })
            }), null !== yT && (0, wK.jsx)(oK, {
              tier: yT
            })]
          }, cT)
        }))
      })
    }

    function TO(TT) {
      var kT;
      let {
        def: cT,
        seconds: lT
      } = TT;
      const {
        t: MT
      } = (0, bM.B)();
      return (0, wK.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, wK.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (kT = cT.fuels) && void 0 !== kT ? kT : []).map((TT => (0, wK.jsx)(zK, {
            item: TT,
            amount: 1
          }, TT))), (0, wK.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, wK.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, wK.jsx)(zM.e, {
              name: "bolt"
            }), MT("buildAFactory2Game:recipePower", {
              power: iT(cT.powerMade),
              seconds: lT
            })]
          })]
        })
      })
    }

    function kO(TT) {
      let {
        def: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)();
      return (0, wK.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, wK.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, wK.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, wK.jsx)(zM.e, {
              name: "bolt"
            }), cT("buildAFactory2Game:recipeMixer", {
              cryo: QK((0, qT.F)(kT, kT.cryoMade), "")
            })]
          })
        })
      })
    }

    function cO(TT) {
      let {
        def: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)();
      return (0, wK.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, wK.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, wK.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, wK.jsx)(zM.e, {
              name: "bolt"
            }), cT("buildAFactory2Game:recipeCondenser", {
              power: QK((0, qT.F)(kT, kT.powerPerOp), ""),
              water: QK((0, qT.F)(kT, kT.fluidMade), "")
            })]
          })
        })
      })
    }

    function lO(TT) {
      let {
        kind: kT,
        def: cT,
        input: lT,
        tier: MT,
        noSeeds: KT = !1
      } = TT;
      const OT = String(cT.opMs / 1e3);
      return lc(cT) ? (0, wK.jsx)(WK, {
        seconds: OT
      }) : cT.field ? (0, wK.jsx)(nK, {
        fertilised: null !== lT
      }) : cT.table ? (0, wK.jsx)(pK, {
        tier: MT,
        seconds: OT
      }) : cT.recycles ? (0, wK.jsxs)(wK.Fragment, {
        children: [(0, wK.jsx)(iK, {
          tier: MT,
          seconds: OT,
          noSeeds: KT
        }), (0, wK.jsx)(qK, {
          tier: MT,
          seconds: OT
        })]
      }) : cc(cT) ? (0, wK.jsx)(sK, {
        tier: MT,
        seconds: OT
      }) : void 0 !== cT.fluidMade ? (0, wK.jsx)(cO, {
        def: cT
      }) : void 0 !== cT.cryoMade ? (0, wK.jsx)(kO, {
        def: cT
      }) : void 0 !== cT.powerMade ? (0, wK.jsx)(TO, {
        def: cT,
        seconds: OT
      }) : (0, wK.jsx)(MO, {
        kind: kT,
        input: lT,
        tier: MT,
        seconds: OT
      })
    }

    function MO(TT) {
      let {
        kind: kT,
        input: cT,
        tier: lT,
        seconds: MT
      } = TT;
      const {
        t: KT
      } = (0, bM.B)(), OT = TK(), yT = UK(function(TT) {
        const kT = new Map;
        for (const MT of TT) {
          var cT, lT;
          const TT = [MT.output, MT.outputAmount, MT.inputAmount, null === (cT = MT.bonus) || void 0 === cT ? void 0 : cT.item, null === (lT = MT.bonus) || void 0 === lT ? void 0 : lT.chance].join("|"),
            KT = kT.get(TT);
          KT ? KT.inputs.push(MT.input) : kT.set(TT, {
            inputs: [MT.input],
            inputAmount: MT.inputAmount,
            output: MT.output,
            outputAmount: MT.outputAmount,
            bonus: MT.bonus
          })
        }
        return [...kT.values()]
      }(RK(kT, lT).filter(Ac)), (TT => XK(TT.output))).filter((TT => gK(XK(TT.output), lT, LK(TT.output))));
      return (0, wK.jsx)(GK, {
        title: KT("buildAFactory2Game:recipesEach", {
          seconds: MT
        }),
        count: yT.length,
        children: yT.map((TT => {
          const kT = null !== cT && TT.inputs.includes(cT),
            MT = TT.inputs.length > 3 ? [kT ? cT : TT.inputs[0]] : TT.inputs,
            yT = XK(TT.output) > lT ? XK(TT.output) : null,
            fT = null === yT && OT.has(TT.output);
          return (0, wK.jsxs)("li", {
            className: rM()("Baf2Recipe", {
              InUse: kT,
              Locked: null !== yT,
              Far: mK(yT, lT)
            }),
            children: [fT && (0, wK.jsx)(eK, {}), MT.map(((kT, cT) => (0, wK.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [cT > 0 && (0, wK.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, wK.jsx)(zK, {
                item: kT,
                amount: TT.inputAmount
              })]
            }, kT))), MT.length < TT.inputs.length && (0, wK.jsx)(JK, {
              label: KT("buildAFactory2Game:recipeMore", {
                count: String(TT.inputs.length - MT.length)
              }),
              names: TT.inputs.filter((TT => !MT.includes(TT))).map((TT => MK(KT, TT)))
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, wK.jsx)(zK, {
              item: TT.output,
              amount: TT.outputAmount
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeName",
              children: MK(KT, TT.output)
            }), TT.bonus && (0, wK.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [KT("buildAFactory2Game:recipeBonus", {
                percent: bK(TT.bonus.chance)
              }), (0, wK.jsx)(zK, {
                item: TT.bonus.item,
                amount: 1
              })]
            }), null !== yT && (0, wK.jsx)(oK, {
              tier: yT
            })]
          }, `${TT.output}|${TT.inputs[0]}`)
        }))
      })
    }

    function KO(TT) {
      let {
        taught: kT,
        tier: cT
      } = TT;
      const {
        t: lT
      } = (0, bM.B)(), MT = TK(), KT = UK(Object.values(pk), (TT => TT.tier)).filter((TT => gK(TT.tier, cT)));
      return (0, wK.jsx)(GK, {
        title: lT("buildAFactory2Game:benchCanMake"),
        count: KT.length,
        startOpen: !1,
        children: KT.map((TT => {
          const KT = TT.tier > cT,
            OT = !KT && MT.has(TT.output);
          return (0, wK.jsxs)("li", {
            className: rM()("Baf2Recipe", {
              InUse: TT.output === kT,
              Locked: KT,
              Far: mK(KT ? TT.tier : null, cT)
            }),
            children: [OT && (0, wK.jsx)(eK, {}), (0, wK.jsx)(zK, {
              item: TT.output,
              amount: TT.outputAmount
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeName",
              children: MK(lT, TT.output)
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), TT.inputs.map((TT => (0, wK.jsx)(zK, {
              item: TT.item,
              amount: TT.amount
            }, TT.item))), KT && (0, wK.jsx)(oK, {
              tier: TT.tier
            })]
          }, TT.output)
        }))
      })
    }
    var OO, yO, fO, xO, IO;
    const AO = Vk.Generator,
      CO = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      jO = 1e3 * (null !== (OO = AO.powerMade) && void 0 !== OO ? OO : 0) / AO.opMs,
      vO = Math.min(...(null !== (yO = AO.fuels) && void 0 !== yO ? yO : []).map((TT => Oc[TT]))) / 1e3,
      tO = Vk["Volt Engine"],
      hO = 1e3 * (null !== (fO = tO.powerMade) && void 0 !== fO ? fO : 0) / tO.opMs,
      NO = Oc[null !== (xO = null === (IO = tO.fuels) || void 0 === IO ? void 0 : IO[0]) && void 0 !== xO ? xO : ""] / 1e3;

    function QO(TT) {
      let {
        item: kT,
        label: cT,
        value: lT,
        note: MT,
        dim: KT
      } = TT;
      return (0, wK.jsxs)("li", {
        className: rM()("Baf2PowerRow", {
          Dim: KT
        }),
        children: [(0, wK.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, wK.jsx)(JM.d, {
            itemName: kT,
            amount: 0
          })
        }), (0, wK.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, wK.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: cT
          }), MT && (0, wK.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: MT
          })]
        }), (0, wK.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: lT
        })]
      })
    }

    function SO(TT, kT, cT, lT) {
      var MT;
      const KT = void 0 === lT ? Vk[TT] : function(TT, kT) {
          if (null === kT) return TT;
          let cT = BT.get(kT);
          return cT || (cT = {
            ...TT,
            powerPerOp: YT(TT, kT),
            farmMob: kT
          }, BT.set(kT, cT)), cT
        }(Vk[TT], lT),
        OT = kT && KT.couplable ? gk(KT, cT) : KT;
      return 1e3 * (null !== (MT = OT.powerPerOp) && void 0 !== MT ? MT : 0) / OT.opMs
    }

    function DO(TT) {
      var kT, cT, lT, MT, KT, OT, yT, fT;
      let {
        message: xT
      } = TT;
      const {
        t: IT
      } = (0, bM.B)(), AT = (TT, kT) => IT("buildAFactory2Game:powerPerSecond", {
        rate: QK(TT, kT)
      }), [CT, jT] = xT.baf2PowerGenerators, vT = xT.baf2PowerGeneratorFuel, tT = xT.baf2PowerSunPanels, hT = null !== (kT = xT.baf2PowerSunShare) && void 0 !== kT ? kT : 1, NT = xT.baf2PowerVaults, QT = xT.baf2PowerUsers, [ST, DT] = null !== (cT = xT.baf2PowerEngines) && void 0 !== cT ? cT : [0, 0], aT = null !== (lT = xT.baf2PowerEngineCells) && void 0 !== lT ? lT : 0, FT = null !== (MT = xT.baf2PowerPads) && void 0 !== MT ? MT : 0, rT = null !== (KT = xT.baf2PowerCharge) && void 0 !== KT ? KT : 0, [PT, wT] = null !== (OT = xT.baf2PowerReactors) && void 0 !== OT ? OT : [0, 0], [mT, bT] = null !== (yT = xT.baf2PowerBatteries) && void 0 !== yT ? yT : [0, 0];
      let zT = IT("buildAFactory2Game:powerEngineCells", {
        amount: String(aT)
      });
      aT > 0 && DT > 0 && (zT = IT("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(aT),
        time: aK(IT, aT * NO / DT)
      }));
      let JT = IT("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(vT)
      });
      vT > 0 && jT > 0 && (JT = IT("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(vT),
        time: aK(IT, vT * vO / jT)
      }));
      const oT = CT + ST + tT + PT;
      return (0, wK.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, wK.jsxs)("section", {
          children: [(0, wK.jsxs)("h3", {
            children: [IT("buildAFactory2Game:powerMaking"), (0, wK.jsx)("span", {
              children: AT(xT.baf2PowerMadePerS, "+")
            })]
          }), (0, wK.jsxs)("ul", {
            children: [0 === oT && (0, wK.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: IT("buildAFactory2Game:powerNoMakers")
            }), CT > 0 && (0, wK.jsx)(QO, {
              item: "Generator",
              label: `${MK(IT,"Generator")} \xd7${CT}`,
              note: `${IT("buildAFactory2Game:powerRunning",{amount:String(jT)})} \xb7 ${JT}`,
              value: AT(jT * jO, "+"),
              dim: 0 === jT
            }), ST > 0 && (0, wK.jsx)(QO, {
              item: "Volt Engine",
              label: `${MK(IT,"Volt Engine")} \xd7${ST}`,
              note: `${IT("buildAFactory2Game:powerRunning",{amount:String(DT)})} \xb7 ${zT}`,
              value: AT(DT * hO, "+"),
              dim: 0 === DT
            }), tT > 0 && (0, wK.jsx)(QO, {
              item: "Solar Panel",
              label: `${MK(IT,"Solar Panel")} \xd7${tT}`,
              note: IT(hT < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: AT(4 * tT * hT, "+")
            }), PT > 0 && (0, wK.jsx)(QO, {
              item: "Reactor Frame",
              label: `${IT("buildAFactory2Game:powerReactors")} \xd7${PT}`,
              note: IT("buildAFactory2Game:powerRunning", {
                amount: String(wT)
              }),
              value: AT(null !== (fT = xT.baf2PowerReactorPerS) && void 0 !== fT ? fT : 0, "+"),
              dim: 0 === wT
            })]
          })]
        }), (0, wK.jsxs)("section", {
          children: [(0, wK.jsxs)("h3", {
            children: [IT("buildAFactory2Game:powerStorage"), (0, wK.jsx)("span", {
              children: iT(xT.baf2PowerCap)
            })]
          }), (NT > 0 || mT > 0) && (0, wK.jsxs)("ul", {
            children: [NT > 0 && (0, wK.jsx)(QO, {
              item: "Charge Vault",
              label: `${MK(IT,"Charge Vault")} \xd7${NT}`,
              value: `+${iT(8e3*NT)}`
            }), mT > 0 && (0, wK.jsx)(QO, {
              item: "Battery Cell",
              label: `${IT("buildAFactory2Game:powerBatteries")} \xd7${mT}`,
              value: `+${iT(bT)}`
            })]
          })]
        }), (0, wK.jsxs)("section", {
          children: [(0, wK.jsxs)("h3", {
            children: [IT("buildAFactory2Game:powerUsing"), (0, wK.jsx)("span", {
              children: AT(xT.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, wK.jsxs)("ul", {
            children: [0 === QT.length && 0 === FT && 0 === rT && (0, wK.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: IT("buildAFactory2Game:powerNoUsers")
            }), QT.map((TT => {
              let [kT, cT, lT, MT, KT = 1, OT] = TT, yT = cT ? IT(CO[KT - 1], {
                name: MK(IT, kT)
              }) : MK(IT, kT);
              return void 0 !== OT && (yT = IT("buildAFactory2Game:powerFarmName", {
                name: yT,
                mob: IT(RT(OT))
              })), (0, wK.jsx)(QO, {
                item: kT,
                label: `${yT} \xd7${lT}`,
                note: IT("buildAFactory2Game:powerRunning", {
                  amount: String(MT)
                }),
                value: MT > 0 ? AT(MT * SO(kT, cT, KT, OT), "\u2212") : IT("buildAFactory2Game:powerIdle"),
                dim: 0 === MT
              }, `${kT}|${cT}|${KT}|${OT}`)
            })), FT > 0 && (0, wK.jsx)(QO, {
              item: "Charging Pad",
              label: `${MK(IT,"Charging Pad")} \xd7${FT}`,
              value: IT("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), rT > 0 && (0, wK.jsx)(QO, {
              item: "Homestead Core",
              label: IT("buildAFactory2Game:powerCharge"),
              value: AT(rT, "\u2212")
            }), xT.baf2PowerStarved > 0 && (0, wK.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, wK.jsx)(zM.e, {
                name: "triangle-exclamation"
              }), IT("buildAFactory2Game:powerStarved", {
                amount: String(xT.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var aO = cT(4515),
      FO = cT(1470);
    class rO {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(TT) {
        this.message = TT;
        for (const kT of this.listeners) kT()
      }
      get() {
        return this.message
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
    }
    class PO extends rO {}

    function wO(TT, kT) {
      const cT = () => {
          const cT = TT.get();
          if (!cT || !kT) return cT;
          const [lT, MT, KT] = cT.baf2PowerAt;
          return lT === kT[0] && MT === kT[1] && KT === kT[2] ? cT : null
        },
        [MT, KT] = (0, lT.useState)(cT);
      return (0, lT.useEffect)((() => (KT(cT()), TT.subscribe((() => {
        KT(cT())
      })))), [TT, ...null !== kT && void 0 !== kT ? kT : []]), MT
    }

    function mO(TT) {
      return {
        stored: TT.baf2PowerStored,
        cap: TT.baf2PowerCap,
        madePerS: TT.baf2PowerMadePerS,
        usedPerS: TT.baf2PowerUsedPerS
      }
    }

    function bO(TT) {
      let {
        stored: kT,
        cap: cT
      } = TT;
      return (0, wK.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, wK.jsx)("div", {
          style: {
            width: `${Math.min(100,100*kT/Math.max(1,cT))}%`
          }
        })
      })
    }

    function zO(TT) {
      let {
        figures: kT,
        labelled: cT = !1
      } = TT;
      const {
        t: lT
      } = (0, bM.B)(), MT = kT.madePerS - kT.usedPerS, {
        text: KT,
        draining: OT
      } = function(TT, kT) {
        let {
          stored: cT,
          cap: lT,
          madePerS: MT,
          usedPerS: KT
        } = kT;
        const OT = MT - KT;
        return cT >= lT ? {
          text: TT("buildAFactory2Game:powerFull"),
          draining: !1
        } : OT > .05 ? {
          text: TT("buildAFactory2Game:powerFullIn", {
            time: aK(TT, (lT - cT) / OT)
          }),
          draining: !1
        } : OT < -.05 ? {
          text: TT("buildAFactory2Game:powerEmptyIn", {
            time: aK(TT, cT / -OT)
          }),
          draining: !0
        } : {
          text: TT("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(lT, kT);
      return (0, wK.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, wK.jsx)(bO, {
          stored: kT.stored,
          cap: kT.cap
        }), (0, wK.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, wK.jsx)("span", {
            children: lT(cT ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: iT(kT.stored),
              cap: iT(kT.cap)
            })
          }), (0, wK.jsxs)("span", {
            className: rM()("Baf2PowerNet", {
              Draining: OT
            }),
            children: [lT("buildAFactory2Game:powerPerSecond", {
              rate: QK(Math.abs(MT), MT < 0 ? "\u2212" : "+")
            }), " \xb7 ", KT]
          })]
        })]
      })
    }

    function JO(TT) {
      let {
        stored: kT,
        cap: cT,
        rates: lT
      } = TT;
      const {
        t: MT
      } = (0, bM.B)();
      return lT ? (0, wK.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, wK.jsx)(zO, {
          figures: {
            stored: kT,
            cap: cT,
            madePerS: lT[0],
            usedPerS: lT[1]
          },
          labelled: !0
        })
      }) : (0, wK.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, wK.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, wK.jsx)(bO, {
            stored: kT,
            cap: cT
          }), (0, wK.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, wK.jsx)("span", {
              children: MT("buildAFactory2Game:powerStoredLabelled", {
                stored: iT(kT),
                cap: iT(cT)
              })
            })
          })]
        })
      })
    }

    function oO(TT) {
      let {
        store: kT,
        close: cT
      } = TT;
      const {
        t: lT
      } = (0, bM.B)(), MT = wO(kT);
      return (0, wK.jsx)(aO.c, {
        close: cT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, wK.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, wK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, wK.jsxs)("div", {
              children: [(0, wK.jsx)("h2", {
                id: "baf2PowerTitle",
                children: lT("buildAFactory2Game:powerTitle")
              }), (0, wK.jsx)("p", {
                children: lT("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, wK.jsx)(FO.l, {
              onClick: cT
            })]
          }), MT && (0, wK.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, wK.jsx)(zO, {
              figures: mO(MT)
            }), (0, wK.jsx)(DO, {
              message: MT
            })]
          })]
        })
      })
    }

    function HO(TT) {
      var kT;
      let {
        kind: cT,
        def: MT,
        sl: KT,
        power: OT,
        stored: yT,
        cap: fT
      } = TT;
      const {
        t: xT
      } = (0, bM.B)(), IT = wO(OT, KT), [AT, CT] = (0, lT.useState)(!1);
      return (0, wK.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, wK.jsx)(lO, {
          kind: cT,
          def: MT,
          input: null,
          tier: null !== (kT = null === IT || void 0 === IT ? void 0 : IT.baf2PowerTier) && void 0 !== kT ? kT : 1
        }), (0, wK.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: xT("buildAFactory2Game:powerTitle")
        }), IT && (0, wK.jsx)(zO, {
          figures: mO(IT)
        }), !IT && (0, wK.jsx)(JO, {
          stored: yT,
          cap: fT,
          rates: null
        }), IT && (0, wK.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            CT(!AT)
          },
          "aria-expanded": AT,
          children: xT(AT ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), IT && AT && (0, wK.jsx)(DO, {
          message: IT
        })]
      })
    }
    const eO = 2500,
      GO = 17500,
      VO = `${aT} `;
    const EO = ["plan", "throttle"];

    function ZO(TT) {
      if (TT.startsWith(`${mk} `)) return TT.slice(0, TT.lastIndexOf(" "));
      const kT = TT.split(" ");
      return kT[0] === Ik && EO.includes(kT[4]) ? kT.slice(0, 5).join(" ") : null
    }
    class uO {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = TT, this.now = kT, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.ZlT = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = kT()
      }
      enqueue(TT) {
        this.queue(TT, this.nextTicket());
        const kT = this.ZlT + this.pending.length;
        return this.flush(), kT
      }
      track(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cT = this.nextTicket();
        if (!kT.urgent) return this.queue(TT, cT), this.flush(), cT;
        const {
          supersedes: lT
        } = kT;
        for (let KT = this.pending.length - 1; KT >= this.urgent; KT--) {
          const kT = this.pending[KT];
          (kT.command === TT || null !== lT && void 0 !== lT && lT(kT.command)) && (this.pending.splice(KT, 1), this.markLeft(kT.tickets))
        }
        const MT = this.pending.findIndex((kT => {
          let {
            command: cT
          } = kT;
          return cT === TT
        }));
        return -1 !== MT ? this.pending[MT].tickets.push(cT) : (this.pending.splice(this.urgent, 0, {
          command: TT,
          tickets: [cT]
        }), this.urgent += 1), this.flush(), cT
      }
      leftAt(TT) {
        const kT = this.leftTimes.get(TT);
        return void 0 !== kT ? kT : this.pending.some((kT => {
          let {
            tickets: cT
          } = kT;
          return cT.includes(TT)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let TT = !0;
        return () => {
          TT && (TT = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(TT) {
        var kT;
        return (null === (kT = this.pending.at(-1)) || void 0 === kT ? void 0 : kT.command) === TT
      }
      sent() {
        return this.ZlT
      }
      clear() {
        for (const {
            tickets: TT
          }
          of this.pending) this.markLeft(TT);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(TT) {
        const kT = this.now();
        for (const cT of TT) this.leftTimes.set(cT, kT);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(TT, kT) {
        const cT = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === cT || void 0 === cT ? void 0 : cT.command) === TT) return void(! function(TT) {
          return TT === FT || TT.startsWith(`${DT} `) || TT.startsWith(`${XT} `)
        }(TT) ? cT.tickets.push(kT) : (this.pending.pop(), this.markLeft([...cT.tickets, kT])));
        const lT = void 0 === cT ? null : xk(cT.command, TT);
        if (null !== lT && void 0 !== cT) return cT.command = lT, void cT.tickets.push(kT);
        const MT = ZO(TT);
        if (null !== MT && void 0 !== cT && ZO(cT.command) === MT) return cT.command = TT, void cT.tickets.push(kT);
        if (null !== cT && void 0 !== cT && cT.command.startsWith(VO) && TT.startsWith(VO)) {
          const lT = TT.slice(VO.length);
          if (cT.command.slice(VO.length).split(",").includes(lT)) return void cT.tickets.push(kT);
          const MT = `${cT.command},${lT}`;
          if (MT.length <= 119) return cT.command = MT, void cT.tickets.push(kT)
        }
        this.pending.push({
          command: TT,
          tickets: [kT]
        })
      }
      flush() {
        const TT = this.now();
        for (this.tokens = Math.min(5, this.tokens + (TT - this.refilledAt) / eO), this.refilledAt = TT; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.ZlT += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: TT,
            tickets: kT
          } = this.pending.shift();
          this.markLeft(kT), this.send(TT)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * eO)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class XO {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new uO(TT, kT)
      }
      send(TT) {
        return this.queue.enqueue(TT)
      }
      sent() {
        return this.queue.sent()
      }
      track(TT, kT) {
        return this.queue.track(TT, kT)
      }
      leftAt(TT) {
        return this.queue.leftAt(TT)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(TT) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = kT, this.send(TT), this.islandEdits.count
      }
      syncIslandEdits(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: cT
        } = this, lT = kT - cT.lastAtMs < GO;
        cT.count = lT ? Math.max(cT.count, TT) : TT
      }
      clear() {
        this.queue.clear()
      }
    }
    const dO = (0, lT.createContext)(null);

    function LO() {
      const TT = (0, lT.useContext)(dO);
      if (!TT) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return TT
    }

    function RO(TT, kT) {
      return null !== kT && void 0 !== kT ? kT : 1 === TT
    }

    function gO(TT, kT) {
      return TT.every((TT => {
        var cT;
        let [lT, , MT] = TT;
        return !RO(MT, null === (cT = kT.get(lT)) || void 0 === cT ? void 0 : cT.wj)
      }))
    }

    function UO(TT, kT, cT) {
      if (0 === TT.size) return TT;
      const lT = new Map(TT);
      for (const [MT, KT] of TT) {
        const TT = kT.find((TT => {
          let [kT] = TT;
          return kT === MT
        }));
        (!TT || KT.wj === (1 === TT[2]) || KT.atMs < cT) && lT.delete(MT)
      }
      return lT
    }

    function YO(TT) {
      var kT;
      let {
        sl: cT,
        input: MT,
        drops: KT,
        seconds: OT
      } = TT;
      const {
        t: yT
      } = (0, bM.B)(), fT = LO(), [xT, IT] = (0, lT.useState)(new Map);
      (0, lT.useEffect)((() => {
        KT && IT((TT => UO(TT, KT, Date.now() - GO)))
      }), [KT]), (0, lT.useEffect)((() => {
        const TT = function(TT, kT) {
          let cT = null;
          for (const {
              atMs: lT
            }
            of TT.values()) cT = null === cT ? lT : Math.min(cT, lT);
          return null === cT ? null : cT + kT
        }(xT, GO);
        if (null === TT || !KT) return;
        const kT = setTimeout((() => {
          IT((TT => UO(TT, KT, Date.now() - GO)))
        }), Math.max(0, TT - Date.now()) + 1);
        return () => {
          clearTimeout(kT)
        }
      }), [xT, KT]);
      const AT = gT(MT),
        CT = null !== AT && null !== KT && gO(KT, xT),
        jT = function(TT, kT, cT) {
          return null === TT || null === kT || gO(kT, cT) ? 0 : uT[ET[TT]]
        }(AT, KT, xT);
      return (0, wK.jsxs)(GK, {
        title: yT("buildAFactory2Game:farmDropsTitle", {
          seconds: OT
        }),
        count: null !== (kT = null === KT || void 0 === KT ? void 0 : KT.length) && void 0 !== kT ? kT : 0,
        children: [jT > 0 && (0, wK.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: yT("buildAFactory2Game:farmDropsPower", {
            power: String(jT)
          })
        }), (null === AT || !KT) && (0, wK.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: yT("buildAFactory2Game:farmDropsEmpty")
        }), CT && (0, wK.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: yT("buildAFactory2Game:farmDropsAllVoided")
        }), null !== AT && (null === KT || void 0 === KT ? void 0 : KT.map((TT => {
          var kT;
          let [lT, MT, KT] = TT;
          const OT = MT < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            AT = RO(KT, null === (kT = xT.get(lT)) || void 0 === kT ? void 0 : kT.wj);
          return (0, wK.jsxs)("li", {
            className: rM()("Baf2Recipe Baf2FarmDrop", {
              Voided: !AT
            }),
            children: [(0, wK.jsx)(zK, {
              item: lT,
              amount: 1
            }), (0, wK.jsx)("span", {
              className: "Baf2RecipeName",
              children: MK(yT, lT)
            }), (0, wK.jsx)("span", {
              className: "Baf2FarmRate",
              children: yT(OT, {
                amount: String(MT)
              })
            }), (0, wK.jsx)("button", {
              type: "button",
              className: rM()("Baf2FarmToggle SmallTextBold", {
                Kept: AT
              }),
              "aria-pressed": AT,
              onClick: () => {
                IT(new Map(xT).set(lT, {
                  wj: !AT,
                  atMs: Date.now()
                })), fT.send(function(TT, kT, cT, lT) {
                  return `${XT} ${TT} ${kT} ${cT} ${lT}`
                }(cT[0], cT[1], cT[2], lT))
              },
              children: yT(AT ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, lT)
        })))]
      })
    }
    var BO;
    const WO = String(null !== (BO = Vk.Synthesizer.waterPerOp) && void 0 !== BO ? BO : 0);

    function nO(TT) {
      let {
        sl: kT,
        taught: cT
      } = TT;
      const {
        t: MT
      } = (0, bM.B)(), KT = LO(), [OT, yT] = (0, lT.useState)(null);
      (0, lT.useEffect)((() => {
        null !== OT && cT === OT && yT(null)
      }), [OT, cT]);
      const fT = null !== OT && void 0 !== OT ? OT : cT;
      let xT = MT("buildAFactory2Game:synthPick");
      return null !== fT && (xT = MT("buildAFactory2Game:synthGrows", {
        name: MK(MT, fT),
        input: MK(MT, rk),
        water: WO
      })), (0, wK.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, wK.jsx)("div", {
          className: rM()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === fT
          }),
          children: xT
        }), (0, wK.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: Pk.map(((TT, cT) => {
            const lT = MK(MT, TT),
              OT = TT === fT;
            return (0, wK.jsx)("li", {
              children: (0, wK.jsx)("button", {
                type: "button",
                className: rM()("Baf2SynthTile", {
                  Selected: OT
                }),
                title: lT,
                "aria-label": lT,
                "aria-pressed": OT,
                onClick: () => {
                  OT || (yT(TT), KT.send(`${mk} ${kT[0]} ${kT[1]} ${kT[2]} ${cT}`))
                },
                children: (0, wK.jsx)(JM.d, {
                  itemName: TT,
                  amount: 0
                })
              })
            }, TT)
          }))
        })]
      })
    }
    const pO = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function iO(TT) {
      let {
        kind: kT,
        tier: cT,
        coupled: lT,
        level: MT,
        slot: KT
      } = TT;
      const {
        t: OT
      } = (0, bM.B)(), fT = pT(Zk);
      if (!lT && null !== cT && cT < fT) return (0, wK.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, wK.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, wK.jsx)(zM.e, {
            name: "lock"
          })
        }), (0, wK.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: OT("buildAFactory2Game:upgradeLocked")
        }), (0, wK.jsx)("span", {
          className: "Baf2TierTag",
          children: OT("buildAFactory2Game:tierTag", {
            tier: String(fT)
          })
        })]
      });
      const xT = function(TT, kT) {
          if (yT() && "Crusher" !== TT && null !== kT) {
            if (qO(Xk, kT)) return {
              item: Xk,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (qO(uk, kT)) return {
              item: uk,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Zk,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(kT, cT),
        IT = OT(lT ? pO[MT - 1] : xT.emptyKey),
        AT = null !== cT ? function(TT, kT, cT, lT) {
          if (!yT() || !cT || "Crusher" === TT || kT < 10) return null;
          const MT = pT(Xk);
          if (lT < 3 && MT > 1 && (2 === lT || kT >= MT)) return {
            tier: MT,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const KT = pT(uk);
          if (1 === lT && KT > 1) return {
            tier: KT,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(kT, cT, lT, MT) : null;
      return (0, wK.jsxs)("div", {
        className: rM()("Baf2UpgradeSocket", {
          Fitted: lT
        }),
        children: [(0, wK.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [lT && KT, !lT && (0, wK.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, wK.jsx)(JM.d, {
              itemName: xT.item,
              amount: 0
            })
          })]
        }), (0, wK.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, wK.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: OT("buildAFactory2Game:upgradeTitle")
          }), (0, wK.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: IT
          }), lT && MT >= 2 && "Crusher" === kT && (0, wK.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: OT("buildAFactory2Game:couplerCrusherHint")
          }), AT && null !== cT && cT < AT.tier && (0, wK.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, wK.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, wK.jsx)(zM.e, {
                name: "lock"
              })
            }), OT(AT.lockedKey), (0, wK.jsx)("span", {
              className: "Baf2TierTag",
              children: OT("buildAFactory2Game:tierTag", {
                tier: String(AT.tier)
              })
            })]
          }), AT && null !== cT && cT >= AT.tier && (0, wK.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: OT(AT.nextKey)
          })]
        })]
      })
    }

    function qO(TT, kT) {
      const cT = pT(TT);
      return cT > 1 && kT >= cT
    }
    var sO = cT(36845);
    const Ty = (0, qT.F)(Vk.Condenser, Vk.Condenser.fluidMade),
      ky = .05;
    class cy extends rO {}

    function ly(TT) {
      return QK(TT, "")
    }

    function My(TT, kT, cT) {
      return TT(kT ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: cT
      })
    }

    function Ky(TT, kT, cT, lT) {
      return cT <= ky && lT <= ky ? null : lT <= ky || cT <= ky ? My(TT, kT, lT <= ky ? QK(cT, "+") : QK(lT, "\u2212")) : TT(kT ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: ly(cT),
        used: ly(lT)
      })
    }

    function Oy(TT, kT) {
      return Math.min(100, 100 * TT / Math.max(1, kT))
    }

    function yy(TT) {
      let {
        stored: kT,
        cap: cT,
        netPerS: lT,
        rates: MT,
        cryo: KT
      } = TT;
      const {
        t: OT
      } = (0, bM.B)(), yT = function(TT, kT, cT, lT) {
        return cT <= 0 ? TT("buildAFactory2Game:waterNoStorage") : kT >= cT ? TT("buildAFactory2Game:powerFull") : lT > ky ? TT("buildAFactory2Game:powerFullIn", {
          time: aK(TT, (cT - kT) / lT)
        }) : lT < -.05 ? kT <= 0 ? TT("buildAFactory2Game:waterEmpty") : TT("buildAFactory2Game:powerEmptyIn", {
          time: aK(TT, kT / -lT)
        }) : TT("buildAFactory2Game:powerSteady")
      }(OT, kT, cT, lT), fT = cT > 0 && kT < cT && Math.abs(lT) <= ky, xT = OT(KT ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), IT = null !== MT ? `${MT} \xb7 ${yT}` : fT ? xT : `${xT} \xb7 ${yT}`;
      return (0, wK.jsxs)(wK.Fragment, {
        children: [(0, wK.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, wK.jsx)("div", {
            style: {
              width: `${Oy(kT,cT)}%`
            }
          })
        }), (0, wK.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, wK.jsx)("span", {
            children: cT > 0 && OT("buildAFactory2Game:powerStored", {
              stored: (0, qT.Q)(kT),
              cap: (0, qT.Q)(cT)
            })
          }), (0, wK.jsx)("span", {
            className: rM()("Baf2WaterNet", {
              Draining: lT < -.05
            }),
            children: IT
          })]
        })]
      })
    }

    function fy(TT) {
      let {
        water: kT,
        at: cT,
        side: lT = null
      } = TT;
      const {
        t: MT
      } = (0, bM.B)(), KT = LO(), [OT, yT, fT] = kT;
      return (0, wK.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, wK.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, wK.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: MT(null === lT ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${lT}`)
          }), (0, wK.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              KT.send(`${qT.C} ${cT[0]} ${cT[1]} ${cT[2]}${"cryoOut"===lT?" cryo":""}`)
            },
            children: MT("buildAFactory2Game:waterDetails")
          })]
        }), (0, wK.jsx)(yy, {
          stored: OT,
          cap: yT,
          netPerS: fT,
          rates: My(MT, "cryoOut" === lT, QK(Math.abs(fT), fT < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === lT
        })]
      })
    }

    function xy(TT, kT) {
      var cT, lT, MT;
      const KT = !0 === kT.baf2WaterCryo,
        OT = null !== (cT = null === (lT = kT.baf2WaterMakers.find((TT => TT[0] === (KT ? qT.d : "Condenser")))) || void 0 === lT ? void 0 : lT[1]) && void 0 !== cT ? cT : 0,
        yT = [],
        fT = (kT, cT, lT) => {
          kT > 0 && yT.push(TT(1 === kT ? cT : lT, {
            count: String(kT)
          }))
        };
      return KT ? fT(OT, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : fT(OT, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), fT(null !== (MT = kT.baf2WaterPipes) && void 0 !== MT ? MT : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), fT(kT.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), yT.join(" \xb7 ")
    }

    function Iy(TT, kT) {
      if (!0 === kT.baf2WaterCryo) return function(TT, kT) {
        const cT = Vk[qT.d];
        switch (kT.baf2WaterThis) {
          case "pipe":
            return {
              text: TT("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: TT("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: TT("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: TT("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: TT("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: TT("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: TT("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var lT;
            const [MT, KT] = null !== (lT = kT.baf2WaterThisRates) && void 0 !== lT ? lT : [(0, qT.F)(cT, cT.cryoMade), (0, qT.F)(cT, cT.powerPerOp)];
            return !0 === kT.baf2WaterDriven ? {
              text: TT("buildAFactory2Game:cryoThisMixerDriven", {
                rate: ly(MT)
              }),
              bad: !1
            } : {
              text: TT("buildAFactory2Game:cryoThisMixer", {
                rate: ly(MT),
                power: ly(KT)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: TT("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(TT, kT);
      const cT = !0 === kT.baf2WaterDriven,
        lT = Vk.Condenser;
      switch (kT.baf2WaterThis) {
        case "pipe":
          return {
            text: TT("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: TT("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: TT("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: TT("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: TT("buildAFactory2Game:waterThisTank", {
              tank: (0, qT.Q)(qT.p),
              cap: (0, qT.Q)(kT.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var MT;
          const [KT, OT] = null !== (MT = kT.baf2WaterThisRates) && void 0 !== MT ? MT : [Ty, (0, qT.F)(lT, lT.powerPerOp)];
          return cT ? {
            text: TT("buildAFactory2Game:waterThisCondenserDriven", {
              rate: ly(KT)
            }),
            bad: !1
          } : {
            text: TT("buildAFactory2Game:waterThisCondenser", {
              rate: ly(KT),
              power: ly(OT)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: TT("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function Ay(TT, kT) {
      const cT = kT.baf2WaterMakers.some((TT => !0 === TT[5]));
      if (!0 === kT.baf2WaterCryo) {
        const lT = kT.baf2WaterUsedPerS - kT.baf2WaterMadePerS,
          MT = cT || lT <= ky ? 0 : (0, qT.E)(lT);
        return 0 === MT ? null : MT > 1 ? TT("buildAFactory2Game:cryoNextMixers", {
          mixers: String(MT)
        }) : TT("buildAFactory2Game:cryoNextOne")
      }
      const lT = cT ? null : function(TT, kT) {
        const cT = kT - TT;
        return cT <= ky ? null : Math.ceil(cT / Ty)
      }(kT.baf2WaterMadePerS, kT.baf2WaterUsedPerS);
      return null === lT ? null : lT > 1 ? TT("buildAFactory2Game:waterNextCondensers", {
        condensers: String(lT)
      }) : TT("buildAFactory2Game:waterNextOne")
    }

    function Cy(TT) {
      let {
        item: kT,
        label: cT,
        note: lT,
        value: MT,
        dim: KT,
        bad: OT
      } = TT;
      return (0, wK.jsxs)("li", {
        className: rM()("Baf2WaterRow", {
          Dim: KT,
          Bad: OT
        }),
        children: [(0, wK.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, wK.jsx)(JM.d, {
            itemName: kT,
            amount: 0
          })
        }), (0, wK.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, wK.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: cT
          }), lT && (0, wK.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: lT
          })]
        }), (0, wK.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: MT
        })]
      })
    }

    function jy(TT) {
      return sO.o[TT] ? TT : "Reactor Port"
    }

    function vy(TT) {
      let {
        message: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)(), lT = !0 === kT.baf2WaterCryo, MT = (TT, kT) => My(cT, lT, QK(TT, kT));
      return (0, wK.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, wK.jsxs)("section", {
          children: [(0, wK.jsxs)("h3", {
            children: [cT("buildAFactory2Game:waterMakes"), (0, wK.jsx)("span", {
              children: MT(kT.baf2WaterMadePerS, "+")
            })]
          }), (0, wK.jsxs)("ul", {
            children: [0 === kT.baf2WaterMakers.length && (0, wK.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: cT(lT ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), kT.baf2WaterMakers.map((TT => {
              let [kT, lT, KT, OT, yT, fT] = TT;
              const xT = cT("buildAFactory2Game:powerRunning", {
                amount: String(KT)
              });
              let IT = yT > 0 ? cT("buildAFactory2Game:waterMakerPower", {
                running: xT,
                power: ly(yT)
              }) : xT;
              return fT && (IT = cT(0 === KT && OT <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, wK.jsx)(Cy, {
                item: kT,
                label: `${MK(cT,kT)} \xd7${lT}`,
                note: IT,
                value: KT > 0 || fT && OT > 0 ? MT(OT, "+") : cT("buildAFactory2Game:powerIdle"),
                dim: 0 === KT && !fT,
                bad: fT
              }, kT)
            }))]
          })]
        }), (0, wK.jsxs)("section", {
          children: [(0, wK.jsxs)("h3", {
            children: [cT("buildAFactory2Game:waterUses"), (0, wK.jsx)("span", {
              children: MT(kT.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, wK.jsxs)("ul", {
            children: [0 === kT.baf2WaterUsers.length && (0, wK.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: cT(lT ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), kT.baf2WaterUsers.map((TT => {
              let [kT, lT, KT, OT] = TT;
              const yT = sO.o[kT] ? MK(cT, kT) : kT;
              return (0, wK.jsx)(Cy, {
                item: jy(kT),
                label: lT > 1 ? `${yT} \xd7${lT}` : yT,
                note: OT ? cT("buildAFactory2Game:waterPortFirst") : void 0,
                value: KT > 0 ? MT(KT, "\u2212") : cT("buildAFactory2Game:powerIdle"),
                dim: 0 === KT
              }, kT)
            }))]
          })]
        })]
      })
    }

    function ty(TT) {
      var kT, cT, MT, KT, OT;
      let {
        store: yT,
        close: fT
      } = TT;
      const {
        t: xT
      } = (0, bM.B)(), IT = function(TT) {
        const [kT, cT] = (0, lT.useState)((() => TT.get()));
        return (0, lT.useEffect)((() => (cT(TT.get()), TT.subscribe((() => {
          cT(TT.get())
        })))), [TT]), kT
      }(yT), AT = null !== (kT = null === IT || void 0 === IT ? void 0 : IT.baf2WaterStored) && void 0 !== kT ? kT : 0, CT = null !== (cT = null === IT || void 0 === IT ? void 0 : IT.baf2WaterCap) && void 0 !== cT ? cT : 0, jT = null !== (MT = null === IT || void 0 === IT ? void 0 : IT.baf2WaterMadePerS) && void 0 !== MT ? MT : 0, vT = null !== (KT = null === IT || void 0 === IT ? void 0 : IT.baf2WaterUsedPerS) && void 0 !== KT ? KT : 0, tT = null !== (OT = null === IT || void 0 === IT ? void 0 : IT.baf2WaterNetPerS) && void 0 !== OT ? OT : jT - vT, hT = IT && Iy(xT, IT), NT = IT && Ay(xT, IT), QT = !0 === (null === IT || void 0 === IT ? void 0 : IT.baf2WaterCryo);
      return (0, wK.jsx)(aO.c, {
        close: fT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, wK.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, wK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, wK.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== IT && CT <= 0 ? (0, wK.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, wK.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, wK.jsx)(JM.d, {
                  itemName: QT ? tc.g : qT.j,
                  amount: 0
                })
              }), (0, wK.jsxs)("div", {
                children: [(0, wK.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: xT(QT ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), IT && (0, wK.jsx)("p", {
                  children: xy(xT, IT)
                })]
              })]
            }), (0, wK.jsx)(FO.l, {
              onClick: fT
            })]
          }), IT && hT && (0, wK.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, wK.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, wK.jsx)(yy, {
                stored: AT,
                cap: CT,
                netPerS: tT,
                cryo: QT,
                rates: Ky(xT, QT, jT, vT)
              })
            }), (0, wK.jsx)("div", {
              className: rM()("Baf2WaterThis", {
                Bad: hT.bad
              }),
              children: hT.text
            }), IT.baf2WaterDriven && (0, wK.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, wK.jsx)(zM.e, {
                name: "bolt"
              }), xT(QT ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), NT && (0, wK.jsx)("p", {
              className: "Baf2WaterNext",
              children: NT
            }), (0, wK.jsx)(vy, {
              message: IT
            })]
          })]
        })
      })
    }
    class hy {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(TT, kT) {
        const cT = this.get(TT);
        cT && null === kT.opLeftMs && null === kT.fuelLeftMs && kT.status === cT.status ? kT = {
          ...kT,
          opLeftMs: cT.opLeftMs,
          fuelLeftMs: cT.fuelLeftMs,
          burning: cT.burning
        } : this.updates++, this.pos = TT, this.view = kT;
        for (const lT of this.listeners) lT()
      }
      get(TT) {
        return null !== this.pos && this.pos[0] === TT[0] && this.pos[1] === TT[1] && this.pos[2] === TT[2] ? this.view : null
      }
      forget(TT) {
        null !== this.get(TT) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
    }

    function Ny(TT, kT, cT, lT) {
      return "noFuel" === kT && lT && !Kc(Vk[TT]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === kT && !0 === (null === cT || void 0 === cT ? void 0 : cT.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === kT && !0 === (null === cT || void 0 === cT ? void 0 : cT.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === kT && !0 === (null === cT || void 0 === cT ? void 0 : cT.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === kT && !0 === (null === cT || void 0 === cT ? void 0 : cT.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Qy(kT, cT) ? "buildAFactory2Game:machineStatus_noInputShort" : function(TT, kT) {
        const cT = Vk[TT];
        if ("noFuel" === kT && void 0 !== cT.fuels) return Kc(cT) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (cT.mobFarm && ("noInput" === kT || "badInput" === kT)) return `buildAFactory2Game:machineStatus_${kT}MobFarm`;
        if ("outputFull" === kT && (void 0 !== cT.table || cT.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === kT && Wk(cT)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== cT.cryoMade && ("noInput" === kT || "noOutlet" === kT || "fluidFull" === kT)) return `buildAFactory2Game:machineStatus_${kT}Mixer`;
        return `buildAFactory2Game:machineStatus_${kT}`
      }(TT, kT)
    }

    function Qy(TT, kT) {
      return "noInput" === TT && null !== kT && void 0 !== kT && kT.input && kT.inputShort ? {
        input: kT.input,
        short: kT.inputShort
      } : null
    }

    function Sy(TT) {
      return PM(TT) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== TT.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Dy(TT) {
      const kT = (0, GT.ve)(TT);
      return `Baf2Pane Baf2Pane${kT.charAt(0).toUpperCase()}${kT.slice(1)}`
    }

    function ay(TT, kT) {
      const [cT, MT] = (0, lT.useState)((() => TT.get(kT)));
      return (0, lT.useEffect)((() => {
        MT(TT.get(kT));
        const cT = TT.subscribe((() => {
          MT(TT.get(kT))
        }));
        return () => {
          cT(), TT.forget(kT)
        }
      }), [TT, ...kT]), cT
    }

    function Fy(TT, kT, cT, lT) {
      const MT = Vk[TT],
        KT = kT && MT.couplable ? gk(MT, cT) : MT,
        OT = null !== lT && cc(KT) ? function(TT, kT) {
          var cT;
          return null !== (cT = null !== kT && cc(TT) ? fc[kT] : void 0) && void 0 !== cT ? cT : TT.opMs
        }(KT, xc(lT)) : KT.opMs;
      return OT === KT.opMs ? KT : {
        ...KT,
        opMs: OT
      }
    }

    function ry(TT) {
      let {
        running: kT,
        opMs: cT,
        opLeftMs: lT,
        updateCount: MT
      } = TT;
      return (0, wK.jsx)("div", {
        className: rM()("Baf2MachineProgress", {
          Running: kT
        }),
        children: (0, wK.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: cT / 1e3 + "s",
            animationDelay: null === lT ? void 0 : (lT - cT) / 1e3 + "s"
          }
        }, MT)
      })
    }

    function Py(TT) {
      let {
        running: kT,
        leftMs: cT,
        periodMs: lT,
        updateCount: MT
      } = TT;
      const {
        t: KT
      } = (0, bM.B)(), OT = Math.min(Math.max(null !== cT && void 0 !== cT ? cT : 0, 0), lT), yT = kT && OT > 0, fT = KT("buildAFactory2Game:machineBarFuel");
      return (0, wK.jsx)("div", {
        className: rM()("Baf2FuelBurn", {
          Draining: yT
        }),
        role: "img",
        title: fT,
        "aria-label": fT,
        children: (0, wK.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: yT ? {
            animationDuration: lT / 1e3 + "s",
            animationDelay: (OT - lT) / 1e3 + "s"
          } : {
            transform: `scaleY(${OT/lT})`
          }
        }, MT)
      })
    }

    function wy(TT, kT, cT) {
      let [lT, MT] = cT;
      const KT = 1 !== lT ? mM(kT) : null;
      return {
        amount: lT,
        have: MT,
        item: TT(KT || lK(kT))
      }
    }

    function my(TT) {
      return cc(TT) ? "buildAFactory2Game:machineBarMining" : lc(TT) ? "buildAFactory2Game:machineBarCutting" : void 0 !== TT.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function by(TT) {
      var kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT, NT, QT, ST;
      let {
        kind: DT,
        sl: aT,
        store: FT,
        power: rT,
        renderSlot: PT
      } = TT;
      const {
        t: wT
      } = (0, bM.B)(), mT = ay(FT, aT), bT = Vk[DT], zT = null !== (kT = null === mT || void 0 === mT ? void 0 : mT.coupled) && void 0 !== kT && kT, JT = null !== (cT = null === mT || void 0 === mT ? void 0 : mT.couplerLevel) && void 0 !== cT ? cT : 1, oT = Fy(DT, zT, JT, null !== (lT = null === mT || void 0 === mT || null === (MT = mT.dug) || void 0 === MT ? void 0 : MT.item) && void 0 !== lT ? lT : null), HT = null !== (KT = null === mT || void 0 === mT ? void 0 : mT.status) && void 0 !== KT ? KT : null, eT = null !== (OT = null === mT || void 0 === mT ? void 0 : mT.power) && void 0 !== OT ? OT : null, GT = null !== (yT = null === mT || void 0 === mT ? void 0 : mT.opLeftMs) && void 0 !== yT ? yT : null, VT = null !== (fT = null === mT || void 0 === mT ? void 0 : mT.dug) && void 0 !== fT ? fT : null, ET = null !== VT && cc(bT) ? fc[null !== (xT = xc(VT.item)) && void 0 !== xT ? xT : ""] : void 0, ZT = void 0 === ET ? null : 6e4 / ET, uT = null !== (IT = null === mT || void 0 === mT ? void 0 : mT.powerCap) && void 0 !== IT ? IT : 4e3, XT = null !== (AT = null === mT || void 0 === mT ? void 0 : mT.tier) && void 0 !== AT ? AT : null, dT = void 0 !== oT.powerMade, LT = null !== bT.fuelSlot ? PT(bT.fuelSlot) : null, RT = Rk(bT), gT = !zT && !0 === (null === mT || void 0 === mT ? void 0 : mT.fuelFed), YT = !zT && !0 === (null === mT || void 0 === mT ? void 0 : mT.fuelFeeds), BT = null !== bT.fuelSlot && !zT, WT = null !== (CT = null === mT || void 0 === mT ? void 0 : mT.fuelLeftMs) && void 0 !== CT ? CT : null, nT = function(TT, kT, cT) {
        var lT;
        const MT = null === kT ? void 0 : Oc[kT];
        return Math.max(null !== (lT = null !== MT && void 0 !== MT ? MT : cT) && void 0 !== lT ? lT : 0, TT.opMs)
      }(oT, null !== (jT = null === mT || void 0 === mT ? void 0 : mT.burning) && void 0 !== jT ? jT : null, WT), pT = null !== (vT = null === mT || void 0 === mT ? void 0 : mT.fuelKeep) && void 0 !== vT ? vT : null, iT = null === HT ? null : Ny(DT, HT, mT, gT), qT = null === HT ? null : Qy(HT, mT);
      return (0, wK.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, wK.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, wK.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: wT(lK(DT))
          }), VT && (0, wK.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [wT("Tree Cutter" === DT ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, wK.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, wK.jsx)(JM.d, {
                itemName: VT.item,
                amount: 0
              })
            }), (0, wK.jsx)(oM.b, {
              text: VT.name
            })]
          }), null !== ZT && (0, wK.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: wT("buildAFactory2Game:machineDigsFixed", {
              perMin: String(ZT)
            })
          }), (null === mT || void 0 === mT ? void 0 : mT.field) && (0, wK.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, wK.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, wK.jsx)(JM.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), wT("buildAFactory2Game:machineField", {
              planted: String(mT.field[0]),
              ripe: String(mT.field[1])
            })]
          }), (0, wK.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, wK.jsxs)("div", {
              className: rM()("Baf2MachineColumn", {
                Baf2Burns: BT
              }),
              children: [null !== oT.inputSlot && (0, wK.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, wK.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: wT(Sy(oT))
                }), PT(oT.inputSlot)]
              }), null !== bT.fuelSlot && !zT && (0, wK.jsxs)("div", {
                className: rM()("Baf2MachineSlot", {
                  Baf2FuelFed: gT
                }),
                children: [(0, wK.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [gT && (0, wK.jsx)(zM.e, {
                    name: "fire"
                  }), wT("buildAFactory2Game:machineFuel")]
                }), (0, wK.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, wK.jsx)(Py, {
                    running: "running" === HT,
                    leftMs: WT,
                    periodMs: nT,
                    updateCount: FT.updateCount
                  }), LT]
                })]
              }), null !== bT.fuelSlot && zT && (0, wK.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, wK.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: wT("buildAFactory2Game:machineFuel")
                }), (0, wK.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: wT("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": wT("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, wK.jsx)(zM.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, wK.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, wK.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: wT(my(oT))
              }), (0, wK.jsx)(ry, {
                running: "running" === HT,
                opMs: oT.opMs,
                opLeftMs: GT,
                updateCount: FT.updateCount
              })]
            }), oT.outputSlots.length > 0 && (0, wK.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, wK.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: wT("buildAFactory2Game:machineOutput")
              }), (0, wK.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: oT.outputSlots.map((TT => (0, wK.jsx)("div", {
                  children: PT(TT)
                }, TT)))
              })]
            }), null !== eT && dT && (0, wK.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, wK.jsx)("div", {
                style: {
                  height: 100 * eT / uT + "%"
                }
              })
            })]
          }), BT && null !== pT && (0, wK.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, wK.jsx)(zM.e, {
              name: "arrows-rotate"
            }), wT(lc(oT) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(pT)
            })]
          }), (gT || YT) && (0, wK.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, wK.jsx)(zM.e, {
              name: "fire"
            }), wT(gT ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), bT.couplable && (0, wK.jsx)(iO, {
            kind: DT,
            tier: XT,
            coupled: zT,
            level: JT,
            slot: RT === bT.fuelSlot ? LT : null !== RT ? PT(RT) : null
          }), null !== eT && !dT && !0 === (null === mT || void 0 === mT ? void 0 : mT.reactorPowered) && (0, wK.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: wT("buildAFactory2Game:machineReactorPowered")
          }), null !== eT && !dT && !0 !== (null === mT || void 0 === mT ? void 0 : mT.reactorPowered) && (0, wK.jsx)(JO, {
            stored: eT,
            cap: uT,
            rates: null !== (tT = null === mT || void 0 === mT ? void 0 : mT.powerRates) && void 0 !== tT ? tT : null
          }), (null === mT || void 0 === mT ? void 0 : mT.water) && (0, wK.jsx)(fy, {
            water: mT.water,
            at: aT,
            side: mT.cryo ? "waterIn" : null
          }), (null === mT || void 0 === mT ? void 0 : mT.cryo) && (0, wK.jsx)(fy, {
            water: mT.cryo,
            at: aT,
            side: "cryoOut"
          }), null !== mT && void 0 !== mT && mT.inertCoupler ? (0, wK.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: wT("buildAFactory2Game:machineStatus_couplerOff", {
              item: MK(wT, mT.inertCoupler)
            })
          }) : null !== iT && (0, wK.jsx)("div", {
            className: rM()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== HT
            }),
            children: wT(iT, qT ? wy(wT, qT.input, qT.short) : void 0)
          })]
        }), (0, wK.jsxs)("div", {
          className: rM()("Baf2MachineSide", {
            Baf2SynthSide: Wk(bT)
          }),
          children: [Wk(bT) && (0, wK.jsx)(nO, {
            sl: aT,
            taught: null !== (hT = null === mT || void 0 === mT ? void 0 : mT.taught) && void 0 !== hT ? hT : null
          }, aT.join(",")), dT && (0, wK.jsx)(HO, {
            kind: DT,
            def: oT,
            sl: aT,
            power: rT,
            stored: null !== eT && void 0 !== eT ? eT : 0,
            cap: uT
          }), UT(bT) && (0, wK.jsx)(YO, {
            sl: aT,
            input: null !== (NT = null === mT || void 0 === mT ? void 0 : mT.input) && void 0 !== NT ? NT : null,
            drops: null !== (QT = null === mT || void 0 === mT ? void 0 : mT.farm) && void 0 !== QT ? QT : null,
            seconds: String(oT.opMs / 1e3)
          }), !dT && !UT(bT) && !Wk(bT) && (0, wK.jsx)(lO, {
            kind: DT,
            def: oT,
            input: null !== (ST = null === mT || void 0 === mT ? void 0 : mT.input) && void 0 !== ST ? ST : null,
            tier: null !== XT && void 0 !== XT ? XT : 1,
            noSeeds: !0 === (null === mT || void 0 === mT ? void 0 : mT.noSeeds)
          })]
        })]
      })
    }

    function zy(TT, kT, cT, lT) {
      var MT;
      const KT = Vk[TT],
        OT = [KT.inputSlot, KT.fuelSlot, ...null !== (MT = KT.inputSlots) && void 0 !== MT ? MT : []].filter((TT => null !== TT));
      return {
        render: MT => {
          let {
            sl: KT,
            renderSlot: OT
          } = MT;
          return (0, wK.jsx)(dO.Provider, {
            value: lT,
            children: (0, wK.jsx)(by, {
              kind: TT,
              sl: KT,
              store: kT,
              power: cT,
              renderSlot: OT
            })
          })
        },
        quickMoveRange: OT.length > 0 ? [Math.min(...OT), Math.max(...OT) + 1] : [0, 0],
        className: Dy(TT)
      }
    }
    const Jy = "Assembler";

    function oy(TT) {
      var kT, cT, lT, MT, KT, OT, yT, fT, xT;
      let {
        sl: IT,
        store: AT,
        renderSlot: CT
      } = TT;
      const {
        t: jT
      } = (0, bM.B)(), vT = ay(AT, IT), tT = null !== (kT = null === vT || void 0 === vT ? void 0 : vT.tier) && void 0 !== kT ? kT : 1, hT = null !== (cT = null === vT || void 0 === vT ? void 0 : vT.taught) && void 0 !== cT ? cT : null, NT = qk(Jy, {
        coupled: !1,
        taught: hT
      }), QT = null !== (lT = NT.bench) && void 0 !== lT ? lT : null, ST = null !== (MT = null === vT || void 0 === vT ? void 0 : vT.status) && void 0 !== MT ? MT : null, DT = null !== (KT = null === vT || void 0 === vT ? void 0 : vT.power) && void 0 !== KT ? KT : null, aT = null !== (OT = null === vT || void 0 === vT ? void 0 : vT.powerCap) && void 0 !== OT ? OT : 4e3;
      return (0, wK.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, wK.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, wK.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: jT(lK(Jy))
          }), QT && (0, wK.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [jT("buildAFactory2Game:benchMakes"), (0, wK.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, wK.jsx)(JM.d, {
                itemName: QT.output,
                amount: 0
              })
            }), (null === vT || void 0 === vT ? void 0 : vT.taughtName) && (0, wK.jsx)(oM.b, {
              text: vT.taughtName
            }), QT.outputAmount > 1 && (0, wK.jsxs)("span", {
              children: ["\xd7", QT.outputAmount]
            })]
          }), !QT && (0, wK.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: jT("buildAFactory2Game:benchTeachHint")
          }), (0, wK.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, wK.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (yT = NT.inputSlots) && void 0 !== yT ? yT : []).map(((TT, kT) => {
                const cT = null === QT || void 0 === QT ? void 0 : QT.inputs[kT];
                return (0, wK.jsxs)("div", {
                  className: rM()("Baf2BenchInput", {
                    Spare: !cT
                  }),
                  children: [(0, wK.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [CT(TT), cT && (0, wK.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, wK.jsx)(JM.d, {
                        itemName: cT.item,
                        amount: 0
                      })
                    })]
                  }), (0, wK.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: cT ? `\xd7${cT.amount}` : "\xa0"
                  })]
                }, TT)
              }))
            }), (0, wK.jsx)(ry, {
              running: "running" === ST,
              opMs: NT.opMs,
              opLeftMs: null !== (fT = null === vT || void 0 === vT ? void 0 : vT.opLeftMs) && void 0 !== fT ? fT : null,
              updateCount: AT.updateCount
            }), (0, wK.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, wK.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: jT("buildAFactory2Game:machineOutput")
              }), (0, wK.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: NT.outputSlots.map((TT => (0, wK.jsx)("div", {
                  children: CT(TT)
                }, TT)))
              })]
            })]
          }), null !== DT && (0, wK.jsx)(JO, {
            stored: DT,
            cap: aT,
            rates: null !== (xT = null === vT || void 0 === vT ? void 0 : vT.powerRates) && void 0 !== xT ? xT : null
          }), null !== ST && (0, wK.jsx)("div", {
            className: rM()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== ST
            }),
            children: jT(Ny(Jy, ST, vT, !1))
          }), QT && QT.inputs.length > 1 && (0, wK.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: jT("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, wK.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, wK.jsx)(KO, {
            taught: hT,
            tier: tT
          }), QT && (0, wK.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: jT("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Hy(TT) {
      var kT;
      const cT = null !== (kT = Vk[Jy].inputSlots) && void 0 !== kT ? kT : [];
      return {
        render: kT => {
          let {
            sl: cT,
            renderSlot: lT
          } = kT;
          return (0, wK.jsx)(oy, {
            sl: cT,
            store: TT,
            renderSlot: lT
          })
        },
        quickMoveRange: [Math.min(...cT), Math.max(...cT) + 1],
        className: Dy(Jy)
      }
    }
    var ey = cT(118),
      Gy = cT(1130),
      Vy = cT(4235);
    const Ey = 600,
      Zy = .5,
      uy = 4,
      Xy = 1200,
      dy = 140,
      Ly = 100,
      Ry = 32,
      gy = 16,
      Uy = 100.5,
      Yy = 90,
      By = 1.5,
      Wy = 50;

    function ny(TT) {
      switch (Hc(TT)) {
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
    const py = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function iy(TT) {
      const kT = Math.ceil(60 * TT / Ly);
      return {
        fuel: Math.max(Ry, kT),
        waste: Math.max(gy, kT)
      }
    }

    function qy(TT, kT, cT) {
      const [lT, MT, KT] = [TT - 2, kT - 2, cT - 2];
      return 2 * (lT * MT + MT * KT + KT * lT) * dy
    }

    function sy(TT, kT, cT) {
      return Math.max(0, TT - 2) * Math.max(0, kT - 2) * Math.max(0, cT - 2)
    }

    function Tf(TT, kT) {
      const [cT, lT, MT] = TT, KT = cT * lT * MT, OT = new Float32Array(KT);
      let yT = 0,
        fT = 0,
        xT = 0,
        IT = 0,
        AT = 0;
      const CT = (TT, KT, OT) => TT < 0 || TT >= cT || KT < 0 || KT >= lT || OT < 0 || OT >= MT ? 0 : kT[(KT * MT + OT) * cT + TT];
      for (let hT = 0; hT < lT; hT++)
        for (let TT = 0; TT < MT; TT++)
          for (let lT = 0; lT < cT; lT++) {
            const KT = (hT * MT + TT) * cT + lT,
              jT = kT[KT];
            if (1 === jT) {
              yT++;
              let kT = 0;
              for (const [cT, MT, KT] of py) {
                const OT = CT(lT + cT, hT + MT, TT + KT);
                1 !== OT && 2 !== OT || kT++
              }
              OT[KT] = Ey * (1 + Zy * Math.min(kT, uy)), IT += OT[KT]
            } else if (2 === jT) fT++;
            else if (3 === jT) {
              xT++;
              py.some((kT => {
                let [cT, MT, KT] = kT;
                return 1 === CT(lT + cT, hT + MT, TT + KT)
              })) && (AT += Xy)
            }
          }
      const jT = qy(cT + 2, lT + 2, MT + 2),
        vT = Math.min(IT, AT, jT),
        tT = yT > 0 ? IT * Ly / yT : 0;
      return {
        rods: yT,
        graphite: fT,
        channels: xT,
        fuelHeat: IT,
        cooling: AT,
        size: jT,
        max: vT,
        vol: KT,
        powerPerUnit: tT,
        pelletsPerMin: tT > 0 ? vT / tT * 60 : 0,
        waterPerS: vT * qT.o,
        rodHeat: OT
      }
    }
    const kf = 0,
      lf = 1,
      Mf = 6,
      Kf = 7,
      Of = 8;

    function yf(TT, kT) {
      const [cT, lT, MT] = TT, KT = new Uint8Array(cT * lT * MT), OT = (TT, KT, OT) => TT < 0 || TT >= cT || KT < 0 || KT >= lT || OT < 0 || OT >= MT ? 0 : kT[(KT * MT + OT) * cT + TT];
      for (let yT = 0; yT < lT; yT++)
        for (let TT = 0; TT < MT; TT++)
          for (let lT = 0; lT < cT; lT++) {
            const fT = (yT * MT + TT) * cT + lT,
              xT = kT[fT];
            if (1 === xT) {
              let kT = 0;
              for (const [cT, MT, KT] of py) {
                const fT = OT(lT + cT, yT + MT, TT + KT);
                kT += 1 === fT || 2 === fT ? 1 : 0
              }
              KT[fT] = lf + Math.min(kT, uy)
            } else if (3 === xT) {
              const kT = py.some((kT => {
                let [cT, MT, KT] = kT;
                return 1 === OT(lT + cT, yT + MT, TT + KT)
              }));
              KT[fT] = kT ? Mf : Kf
            } else 2 === xT && (KT[fT] = Of)
          }
      return KT
    }

    function ff(TT) {
      return TT.fuelHeat <= TT.cooling && TT.fuelHeat <= TT.size ? "fuel" : TT.cooling <= TT.size ? "cooling" : "size"
    }
    const xf = Yy;

    function If(TT, kT, cT) {
      return Math.round(TT * kT * cT * 25e3 * (1 + .25 * (Math.min(TT, kT, cT) - 2)))
    }

    function Af(TT) {
      return Math.max(0, Math.min(qT.e, TT))
    }

    function Cf(TT, kT, cT) {
      const lT = kT * Af(cT);
      return TT <= 0 ? 0 : lT > 0 ? Math.min(200, 100 * TT / lT) : 200
    }

    function jf(TT, kT) {
      const cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? By : 1;
      return Math.min(TT.fuelHeat * cT, TT.cooling * Af(kT), TT.size * cT)
    }

    function vf(TT) {
      return 2 + TT / 10
    }
    const tf = "buildAFactory2Game:";

    function hf(TT) {
      var kT;
      return null !== (kT = TT.baf2RxMood) && void 0 !== kT ? kT : function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const cT = [
          ["calm", 50],
          ["warm", xf],
          ["hot", Uy]
        ];
        for (const [lT, MT] of cT)
          if (TT < MT + (lT === kT ? 3 : 0)) return lT;
        return "alarm"
      }(TT.baf2RxHeat)
    }
    const Nf = 120;

    function Qf(TT) {
      const kT = TT.baf2RxState;
      if ("running" === kT && TT.baf2RxHeat > Uy) return {
        label: `${tf}rxState_tooHot`,
        tone: "bad",
        fix: `${tf}rxFix_tooHot`
      };
      switch (kT) {
        case "running":
          return {
            label: `${tf}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${tf}rxState_idle`, tone: "off", fix: `${tf}rxFix_idle`
          };
        case "scram":
          return {
            label: `${tf}rxState_scram`, tone: "off", fix: TT.baf2RxHeat < Wy ? `${tf}rxFix_scramCool` : `${tf}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${tf}rxState_${kT}`, tone: "off", fix: `${tf}rxFix_${kT}`
          };
        case "melted":
          return {
            label: `${tf}rxState_melted`, tone: "bad", fix: `${tf}rxFix_melted`
          };
        default:
          return {
            label: `${tf}rxState_${kT}`, tone: "warn", fix: `${tf}rxFix_${kT}`
          }
      }
    }

    function Sf(TT) {
      const [kT, cT, lT] = TT.baf2RxStats;
      return {
        fuelHeat: kT,
        cooling: cT * (TT.baf2RxCryo ? Math.max(1, Af(TT.baf2RxWater / 100)) : 1),
        size: lT
      }
    }

    function Df(TT) {
      var kT;
      const cT = "idle" === TT.baf2RxState || "running" === TT.baf2RxState && TT.baf2RxHeat <= Uy || "scram" === TT.baf2RxState && TT.baf2RxHeat < Wy;
      if (0 === (TT.baf2RxFlags & Dk) || !TT.baf2RxFormed || !cT) return null;
      const {
        fuelHeat: lT,
        cooling: MT,
        size: KT
      } = Sf(TT), OT = Math.min(lT, MT, KT), yT = ff({
        fuelHeat: lT,
        cooling: MT,
        size: KT
      }), fT = "cooling" === yT && !0 === TT.baf2RxCryoOpen && !TT.baf2RxCryo, xT = null !== (kT = TT.baf2RxCells) && void 0 !== kT ? kT : "", IT = ("fuel" === yT || "cooling" === yT && !0 === TT.baf2RxCryo) && xT.length > 0 && !xT.includes(String(0)), AT = fT ? "Cryo" : "scram" === TT.baf2RxState ? "Off" : "";
      return OT < 12e3 ? {
        key: `${tf}rxGrow_${IT?"full":yT}${AT}`,
        amount: OT
      } : null
    }

    function af(TT, kT) {
      return TT[0] === kT[0] && TT[1] === kT[1] && TT[2] === kT[2]
    }

    function Ff(TT) {
      return [...TT].sort(((TT, kT) => Number(kT[2] < kT[1]) - Number(TT[2] < TT[1])))
    }

    function rf(TT, kT) {
      return kT.some((kT => {
        let [cT, lT] = kT;
        return !(lT <= 0) && ["edge", "cap", "wall", "inside"].some((kT => cT === Ol(TT, kT)))
      }))
    }

    function Pf(TT, kT, cT) {
      const lT = TT.baf2RxFuel - TT.baf2RxPu > 0 ? cT : 0;
      return {
        full: TT.baf2RxWaste > kT - 3,
        fullInS: lT > 0 ? Math.max(0, kT - TT.baf2RxWaste) / lT : null
      }
    }
    const wf = {
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

    function mf(TT) {
      return bf[TT]
    }
    const bf = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function zf(TT) {
      let [kT, cT, lT] = TT;
      return Math.ceil(qy(kT, cT, lT) * qT.o)
    }

    function Jf(TT, kT) {
      return "battery" === TT ? kT[0] * kT[1] * kT[2] : function(TT) {
        let [kT, cT, lT] = TT;
        return kT * cT * lT - Math.max(0, kT - 2) * Math.max(0, cT - 2) * Math.max(0, lT - 2)
      }(kT) - 1
    }

    function of(TT) {
      const kT = Math.max(0, TT);
      if (kT < 10) return String(Math.round(10 * kT) / 10);
      if (kT < 1e4) return Math.round(kT).toLocaleString("en-US");
      if (kT < 1e6) return `${kT<1e5?(Math.floor(kT/100)/10).toFixed(1):Math.floor(kT/1e3)}k`;
      const cT = kT / 1e6;
      return `${cT<10?(Math.floor(100*cT)/100).toFixed(2):cT<100?(Math.floor(10*cT)/10).toFixed(1):Math.floor(cT)}M`
    }

    function Hf(TT) {
      return TT <= 0 ? "0" : TT >= 10 ? String(Math.round(TT)) : TT.toFixed(TT >= 1 ? 1 : 2)
    }

    function ef(TT) {
      const kT = sc(TT, 0),
        cT = sc(TT, nc(TT) - 1);
      return {
        lo: [Math.min(kT[0], cT[0]), Math.min(kT[1], cT[1]), Math.min(kT[2], cT[2])],
        hi: [Math.max(kT[0], cT[0]) + 1, Math.max(kT[1], cT[1]) + 1, Math.max(kT[2], cT[2]) + 1]
      }
    }

    function Gf(TT, kT, cT) {
      const lT = [kT[0] - TT[0], kT[1] - TT[1], kT[2] - TT[2]],
        MT = [(TT[0] + kT[0]) / 2, (TT[1] + kT[1]) / 2, (TT[2] + kT[2]) / 2],
        KT = [];
      for (let OT = 0; OT < 3; OT++) {
        const yT = (OT + 1) % 3,
          fT = (OT + 2) % 3;
        for (const xT of [TT[yT], kT[yT]])
          for (const IT of [TT[fT], kT[fT]]) {
            const TT = [0, 0, 0],
              kT = [cT, cT, cT];
            TT[OT] = MT[OT], kT[OT] = lT[OT] + cT, TT[yT] = xT, TT[fT] = IT, KT.push([TT, kT])
          }
      }
      return KT
    }
    const Vf = "buildAFactory2Game:",
      Ef = [`${Vf}colNorth`, `${Vf}colEast`, `${Vf}colSouth`, `${Vf}colWest`];

    function Zf(TT, kT) {
      const [cT, lT, MT] = TT.baf2ColAt;
      return `baf2col ${cT} ${lT} ${MT} ${kT}`
    }

    function uf(TT) {
      return function(TT) {
        if (!Number.isFinite(TT)) return "";
        const kT = Math.max(1, Math.round(TT));
        if (kT < 60) return `${kT}s`;
        const cT = kT % 60;
        return 0 === cT ? kT / 60 + "m" : `${Math.floor(kT/60)}m ${cT}s`
      }(function(TT) {
        const kT = yl.FOCUS_BY_LASERS[Math.max(0, Math.min(4, TT))];
        return kT > 0 ? yl.NOVA_FOCUS / kT : 1 / 0
      }(TT))
    }

    function Xf(TT) {
      const kT = Math.abs(Math.round(TT));
      return kT < 1e3 ? Math.round(TT).toLocaleString("en-US") : kT < 1e6 ? `${kT<1e5?(TT/1e3).toFixed(1).replace(/\.0$/,""):Math.round(TT/1e3)}k` : `${(TT/1e6).toFixed(kT<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function df(TT, kT, cT) {
      if (jl(kT) >= 0) {
        const kT = function(TT, kT) {
          return TT.find((TT => {
            let {
              focus: cT
            } = TT;
            return cT[0] === kT[0] && cT[2] === kT[2] && (kT[1] === cT[1] || kT[1] === cT[1] - 1)
          }))
        }(TT, cT);
        if (!kT) return null;
        const MT = function(TT) {
          let kT = 0,
            cT = 0;
          for (let lT = 0; lT < 4; lT++) kT += TT.laser[lT] ? 1 : 0, cT += TT.live[lT] ? 1 : 0;
          return {
            lasers: kT,
            live: cT,
            focusPerS: yl.FOCUS_BY_LASERS[cT],
            drawPerS: yl.LASER_DRAW * cT
          }
        }({
          laser: kT.lasers,
          live: kT.live
        });
        if (0 === MT.lasers || "noLasers" === kT.state) return {
          key: `${Vf}lookColNoLasers`
        };
        if (0 === MT.live) return {
          key: `${Vf}lookColOff_blocked`
        };
        if (!(kT.on && MT.live > 0) && ("running" !== (lT = kT.state) && "slowed" !== lT)) return {
          key: `${Vf}lookColOff_${kT.state}`
        };
        if (MT.live < MT.lasers) return {
          key: `${Vf}lookColLasersSome`,
          params: {
            lasers: String(MT.lasers),
            live: String(MT.live)
          }
        };
        const KT = kT.open.filter(Boolean).length;
        return KT < 4 ? {
          key: `${Vf}lookColLasersSpots`,
          params: {
            live: String(MT.live),
            spots: String(KT),
            time: uf(MT.live)
          }
        } : {
          key: `${Vf}lookColLasers`,
          params: {
            live: String(MT.live),
            time: uf(MT.live)
          }
        }
      }
      var lT;
      if (!vl(kT)) return null;
      const MT = function(TT, kT) {
        for (const cT of TT) {
          const TT = Ql(cT.focus, [kT[0], kT[1], kT[2]]);
          if (TT && TT.JO === yl.LASER_D && cT.lasers[TT.dir]) return {
            entry: cT,
            dir: TT.dir
          }
        }
        return null
      }(TT, cT);
      if (!MT) return {
        key: `${Vf}lookLaserNoCollider`
      };
      const {
        entry: KT,
        dir: OT
      } = MT;
      return KT.open[OT] ? KT.live[OT] ? {
        key: KT.on ? `${Vf}lookLaserFiring` : `${Vf}lookLaserReady`
      } : {
        key: `${Vf}lookLaserBlocked`
      } : {
        key: `${Vf}lookLaserClosed`
      }
    }

    function Lf(TT, kT) {
      const cT = [];
      for (let lT = 1; lT < yl.LASER_D; lT++) TT & 1 << kT * (yl.LASER_D - 1) + lT - 1 && cT.push(lT);
      return cT
    }
    const Rf = {
      firing: `${Vf}colSlotFiring`,
      ready: `${Vf}colSlotReady`,
      blocked: `${Vf}colSlotBlocked`,
      empty: `${Vf}colSlotEmpty`,
      closed: `${Vf}colSlotClosed`
    };

    function gf(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const KT = OM(TT),
        OT = OM(kT),
        yT = OM(cT),
        fT = yT.filter(Boolean).length,
        xT = KT.filter(Boolean).length,
        IT = [0, 1, 2, 3].map((TT => OT[TT] ? KT[TT] ? yT[TT] ? lT ? "firing" : "ready" : "blocked" : (TT => Lf(MT, TT).length > 0)(TT) ? "blocked" : "empty" : "closed")),
        AT = IT.indexOf("blocked"),
        CT = AT < 0 && xT > 0 ? IT.indexOf("empty") : -1;
      return IT.map(((TT, kT) => {
        const cT = kT === AT ? {
          key: `${Vf}colSlotClear`
        } : kT === CT ? {
          key: `${Vf}colSlotAdd`,
          params: {
            time: uf(Math.min(4, fT + 1))
          }
        } : null;
        return {
          dir: kT,
          tone: TT,
          title: {
            key: "blocked" !== TT || KT[kT] ? Rf[TT] : `${Vf}colSlotGap`,
            keys: {
              dir: Ef[kT]
            }
          },
          hint: cT
        }
      }))
    }

    function Uf(TT) {
      var kT;
      return "noPower" === TT.baf2ColState && TT.baf2ColRxState ? Qf({
        baf2RxState: TT.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (kT = TT.baf2ColRxHeat) && void 0 !== kT ? kT : 0
      }) : null
    }

    function Yf(TT) {
      const kT = OM(TT.baf2ColSpots).filter(Boolean).length,
        cT = OM(TT.baf2ColLive);
      let lT = 0,
        MT = 0;
      return OM(TT.baf2ColLasers).forEach(((TT, kT) => {
        TT && (lT++, MT += cT[kT] ? 0 : 1)
      })), MT > 0 ? {
        key: `${Vf}colSubSome`,
        params: {
          blocked: String(MT),
          lasers: String(lT)
        }
      } : kT < 4 ? {
        key: `${Vf}colSubSpots`,
        params: {
          lasers: String(lT),
          spots: String(kT)
        }
      } : {
        key: `${Vf}colSub`,
        params: {
          lasers: String(lT)
        }
      }
    }

    function Bf(TT) {
      const kT = Uf(TT);
      if ("idle" === TT.baf2ColRxState && kT) return {
        key: `${Vf}colState_noPowerIdle`
      };
      if (kT) return {
        key: `${Vf}colState_noPowerReactor`,
        keys: {
          state: kT.label
        }
      };
      if ("noInput" !== TT.baf2ColState) return {
        key: `${Vf}colState_${TT.baf2ColState}`
      };
      const cT = String(Math.max(0, yl.NOVA_SA - TT.baf2ColSa)),
        lT = String(Math.max(0, yl.NOVA_GD - TT.baf2ColGd));
      return "0" !== cT && "0" !== lT ? {
        key: `${Vf}colState_noInput`,
        params: {
          sa: cT,
          gd: lT
        }
      } : "0" !== cT ? {
        key: `${Vf}colState_noStarAlloy`,
        params: {
          sa: cT
        }
      } : "0" !== lT ? {
        key: `${Vf}colState_noGlowDust`,
        params: {
          gd: lT
        }
      } : {
        key: `${Vf}colState_running`
      }
    }

    function Wf(TT) {
      return TT.baf2ColP < 0 ? `${Vf}colNext` : function(TT) {
        const kT = TT.baf2ColState;
        return TT.baf2ColP >= 0 && ("blocked" === kT || "noLasers" === kT || "noPower" === kT)
      }(TT) ? `${Vf}colStalled` : null === nf(TT) ? `${Vf}colMaking` : `${Vf}colNovaIn`
    }

    function nf(TT) {
      if (TT.baf2ColP < 0 || TT.baf2ColWant <= 0) return null;
      const kT = TT.baf2ColFocusPerS * Math.min(1, TT.baf2ColDraw / TT.baf2ColWant);
      return kT > 0 ? Math.max(0, yl.NOVA_FOCUS - TT.baf2ColP) / kT : null
    }

    function pf(TT, kT) {
      const cT = [];
      for (let lT = 1; lT <= 3; lT++) {
        const MT = [TT[0], TT[1] - lT, TT[2]];
        if (!kT(MT)) return cT;
        cT.push(MT)
      }
      return []
    }

    function qf(TT, kT) {
      const cT = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let lT = 0; lT < 4; lT++) {
        const MT = lT,
          KT = Nl(TT.focus, MT, yl.LASER_D);
        if (TT.lasers[lT] || !TT.open[lT] || !kT(KT)) continue;
        const OT = [];
        for (let cT = 1; cT < yl.LASER_D; cT++) {
          const lT = Nl(TT.focus, MT, cT);
          kT(lT) || OT.push(lT)
        }
        cT.supports.push(...pf(KT, kT)), 0 === OT.length ? cT.free.push(KT) : (cT.blocked.push(KT), cT.gaps.push(...OT))
      }
      return cT
    }
    const sf = yl.LASER_D - .25,
      Tx = 4,
      kx = 2,
      cx = 16;
    const lx = {
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
        blendMode: Vy.f.Standard,
        soft: !0
      },
      Mx = {
        green: lx,
        pink: {
          ...lx,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function Kx(TT, kT) {
      const cT = {
        ...kT.params
      };
      for (const [MT, KT] of Object.entries(null !== (lT = kT.keys) && void 0 !== lT ? lT : {})) {
        var lT;
        cT[MT] = TT(KT)
      }
      return cT
    }
    const Ox = "buildAFactory2Game:",
      yx = 2 * yl.LASER_D + 1,
      fx = yl.LASER_D;

    function xx(TT) {
      return TT(`${Ox}colFocusTip`, {
        need: Xf(yl.NOVA_FOCUS)
      })
    }

    function Ix(TT, kT) {
      return TT(kT.key, Kx(TT, kT))
    }

    function Ax(TT) {
      const kT = TT.getStatus();
      return {
        status: kT,
        entry: kT ? TT.entryAtRoot(kT.baf2ColAt) : void 0
      }
    }

    function Cx(TT, kT) {
      return {
        left: 100 * (fx + TT) / yx + "%",
        top: 100 * (fx + kT) / yx + "%"
      }
    }

    function jx(TT) {
      let {
        status: kT,
        entry: cT
      } = TT;
      const lT = OM(kT.baf2ColLasers),
        MT = OM(kT.baf2ColSpots),
        KT = OM(kT.baf2ColLive),
        OT = !0 === (null === cT || void 0 === cT ? void 0 : cT.on),
        yT = yl.LASER_D,
        fT = [];
      for (let jT = 0; jT < 4; jT++) {
        const [TT, , kT] = hl[jT];
        if (KT[jT]) {
          const cT = 100 * (yT - 1) / yx,
            lT = TT + kT > 0 ? 100 * (fx + 1) / yx : 100 * (fx - (yT - 1)) / yx,
            MT = 100 * (fx + .35) / yx,
            KT = 30 / yx,
            xT = 0 !== TT ? {
              left: `${lT}%`,
              width: `${cT}%`,
              top: `${MT}%`,
              height: `${KT}%`
            } : {
              top: `${lT}%`,
              height: `${cT}%`,
              left: `${MT}%`,
              width: `${KT}%`
            };
          fT.push((0, wK.jsx)("i", {
            className: rM()("Baf2ColDiagramBeam", {
              Off: !OT
            }),
            style: xT
          }, `beam${jT}`))
        }
        const cT = lT[jT] ? "Baf2ColDiagramLaser" : MT[jT] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        fT.push((0, wK.jsx)("i", {
          className: cT,
          style: Cx(TT * yT, kT * yT)
        }, `spot${jT}`))
      }
      for (let jT = 0; jT < 4; jT++) {
        if (lT[jT] || !MT[jT]) continue;
        const [TT, , cT] = hl[jT];
        for (const lT of Lf(null !== (xT = kT.baf2ColGaps) && void 0 !== xT ? xT : 0, jT)) {
          var xT;
          fT.push((0, wK.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Cx(TT * lT, cT * lT)
          }, `gap${jT},${lT}`))
        }
      }
      for (const [jT, , vT] of null !== (IT = null === cT || void 0 === cT ? void 0 : cT.blockers) && void 0 !== IT ? IT : []) {
        var IT, AT, CT;
        const TT = jT - (null !== (AT = null === cT || void 0 === cT ? void 0 : cT.focus[0]) && void 0 !== AT ? AT : 0),
          kT = vT - (null !== (CT = null === cT || void 0 === cT ? void 0 : cT.focus[2]) && void 0 !== CT ? CT : 0);
        fT.push((0, wK.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Cx(TT, kT)
        }, `block${TT},${kT}`))
      }
      return (0, wK.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [fT, (0, wK.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function vx(TT) {
      let {
        status: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)(), lT = OM(kT.baf2ColLive).filter(Boolean).length;
      return (0, wK.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, wK.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: xx(cT),
          children: cT(`${Ox}colLadder`)
        }), (0, wK.jsx)("ul", {
          children: [1, 2, 3, 4].map((TT => (0, wK.jsx)("li", {
            className: rM()({
              On: TT === lT
            }),
            children: cT(`${Ox}colLadderChip`, {
              lasers: String(TT),
              time: uf(TT)
            })
          }, TT)))
        })]
      })
    }

    function tx(TT) {
      let {
        item: kT,
        ty: cT,
        need: lT,
        cap: MT
      } = TT;
      const {
        t: KT
      } = (0, bM.B)(), OT = Math.min(cT, lT);
      return (0, wK.jsxs)("li", {
        className: rM()("Baf2ColTile", {
          Short: cT < lT
        }),
        children: [(0, wK.jsx)(hx, {
          item: kT
        }), (0, wK.jsx)("b", {
          className: "Baf2ColTileValue",
          children: KT(`${Ox}colOutOf`, {
            amount: String(OT),
            cap: String(lT)
          })
        }), (0, wK.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, wK.jsx)("i", {
            style: {
              width: 100 * OT / lT + "%"
            }
          })
        }), cT > lT && (0, wK.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: KT(`${Ox}colIntakeHeld`, {
            amount: String(cT),
            cap: String(MT)
          })
        })]
      })
    }

    function hx(TT) {
      let {
        item: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)();
      return (0, wK.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, wK.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, wK.jsx)(JM.d, {
            itemName: kT,
            amount: 0
          })
        }), (0, wK.jsx)("span", {
          className: "Baf2ColTileName",
          children: MK(cT, kT)
        })]
      })
    }

    function Nx(TT) {
      switch (TT.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function Qx(TT) {
      var kT, cT, MT;
      let {
        store: KT,
        close: OT
      } = TT;
      const {
        t: yT
      } = (0, bM.B)(), fT = LO(), {
        status: xT,
        entry: IT
      } = function(TT) {
        const [kT, cT] = (0, lT.useState)((() => Ax(TT)));
        return (0, lT.useEffect)((() => (cT(Ax(TT)), TT.subscribe((() => {
          cT(Ax(TT))
        })))), [TT]), kT
      }(KT), [AT, CT] = (0, lT.useState)(null), jT = null === xT || void 0 === xT ? void 0 : xT.baf2ColHold;
      (0, lT.useEffect)((() => {
        CT(null)
      }), [jT]);
      const vT = (0, lT.useRef)({
          p: -1,
          n: 0
        }),
        tT = null !== (kT = null === xT || void 0 === xT ? void 0 : xT.baf2ColP) && void 0 !== kT ? kT : -1;
      tT < vT.current.p && vT.current.n++, vT.current.p = tT;
      const hT = (0, lT.useRef)(null),
        [NT] = (0, lT.useState)((() => {
          return (TT = KT.heldAtOpen()) === Il || TT === Al ? {
            key: `${Vf}colBeltItIn`,
            item: TT
          } : null;
          var TT
        }));
      if (!xT) return null;
      const QT = xT.baf2ColMember,
        ST = xT.baf2ColP >= 0,
        DT = function(TT, kT) {
          if (TT.baf2ColP >= 0 && TT.baf2ColDraw > 0) {
            const kT = TT.baf2ColWant > 0 ? Math.min(1, TT.baf2ColDraw / TT.baf2ColWant) : 0;
            return {
              focus: TT.baf2ColFocusPerS * kT,
              draw: TT.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === TT.baf2ColState && kT && kT.draw > 0 ? {
            ...kT,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(xT, hT.current);
      hT.current = DT.draw > 0 ? DT : null;
      const aT = "slowed" === xT.baf2ColState || "noPower" === xT.baf2ColState,
        FT = nf(xT),
        rT = null !== AT && void 0 !== AT ? AT : xT.baf2ColHold,
        PT = function(TT) {
          var kT, cT;
          return "idle" === TT.baf2ColRxState ? null : null !== (kT = null === (cT = Uf(TT)) || void 0 === cT ? void 0 : cT.fix) && void 0 !== kT ? kT : null
        }(xT),
        wT = null === PT && null === NT ? function(TT) {
          var kT;
          const cT = TT.baf2ColSentTo;
          if (!cT) return null;
          const lT = null !== (kT = TT.baf2ColSentHeld) && void 0 !== kT ? kT : null;
          return {
            key: null === lT ? `${Vf}colNovaSentToMachine` : `${Vf}colNovaSentTo`,
            target: cT,
            ty: lT
          }
        }(xT) : null,
        mT = ST ? yT(`${Ox}colFocusOf`, {
          focus: Xf(xT.baf2ColP),
          need: Xf(yl.NOVA_FOCUS)
        }) : null;
      return (0, wK.jsx)(aO.c, {
        close: OT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, wK.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, wK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, wK.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, wK.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, wK.jsx)(JM.d, {
                  itemName: fl,
                  amount: 0
                })
              }), (0, wK.jsxs)("div", {
                children: [(0, wK.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: MK(yT, fl)
                }), (0, wK.jsx)("p", {
                  children: Ix(yT, Yf(xT))
                })]
              })]
            }), (0, wK.jsx)(FO.l, {
              onClick: OT
            })]
          }), (0, wK.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, wK.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, wK.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, wK.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: yT(Wf(xT), {
                    time: null === FT ? "" : aK(yT, FT)
                  })
                }), (0, wK.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, wK.jsx)("i", {
                    style: {
                      width: (ST ? 100 * xT.baf2ColP / yl.NOVA_FOCUS : 0) + "%"
                    }
                  }, vT.current.n)
                }), (0, wK.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, wK.jsxs)("span", {
                    title: xx(yT),
                    children: [(0, wK.jsx)("b", {
                      children: Xf(DT.focus)
                    }), " ", yT(`${Ox}colFocusPerS`)]
                  }), (0, wK.jsxs)("span", {
                    className: rM()("Baf2ColDraw", {
                      Short: aT
                    }),
                    children: [(0, wK.jsx)(zM.e, {
                      name: "bolt"
                    }), aT ? yT(`${Ox}colDrawOf`, {
                      draw: Xf(xT.baf2ColDraw),
                      want: Xf(xT.baf2ColWant)
                    }) : yT(`${Ox}colPowerPerS`, {
                      rate: Xf(DT.draw)
                    })]
                  }), null !== mT && (0, wK.jsx)("span", {
                    className: "Soft",
                    children: mT
                  })]
                })]
              }), (0, wK.jsx)("p", {
                className: rM()("Baf2ColState", Nx(xT)),
                children: Ix(yT, Bf(xT))
              }), null !== PT && (0, wK.jsx)("p", {
                className: "Baf2ColStateFix",
                children: yT(PT)
              }), null === PT && null !== NT && (0, wK.jsx)("p", {
                className: "Baf2ColStateFix",
                children: yT(NT.key, {
                  item: MK(yT, NT.item)
                })
              }), wT && (0, wK.jsx)("p", {
                className: "Baf2ColStateFix",
                children: yT(wT.key, {
                  target: MK(yT, wT.target),
                  amount: String(null !== (cT = wT.ty) && void 0 !== cT ? cT : 0)
                })
              }), (0, wK.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, wK.jsx)(tx, {
                  item: Il,
                  ty: xT.baf2ColSa,
                  need: yl.NOVA_SA,
                  cap: yl.SA_CAP
                }), (0, wK.jsx)(tx, {
                  item: Al,
                  ty: xT.baf2ColGd,
                  need: yl.NOVA_GD,
                  cap: yl.GD_CAP
                }), (0, wK.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, wK.jsx)(hx, {
                    item: "Nova Matter"
                  }), (0, wK.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: yT(`${Ox}colNovaHeld`, {
                      amount: String(xT.baf2ColOut),
                      cap: String(yl.OUT_CAP)
                    })
                  }), QT && (0, wK.jsx)(FO.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === xT.baf2ColOut,
                    onClick: () => {
                      fT.send(Zf(xT, "take"))
                    },
                    children: yT(`${Ox}colTake`)
                  })]
                })]
              }), QT && (0, wK.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": rT,
                className: rM()("Baf2ColHold", {
                  On: rT
                }),
                onClick: TT => {
                  TT.detail > 0 && TT.currentTarget.blur(), CT(!rT), fT.send(Zf(xT, "hold " + (rT ? 0 : 1)))
                },
                children: [(0, wK.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, wK.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, wK.jsx)("b", {
                    children: yT(`${Ox}colHold`)
                  }), (0, wK.jsx)("span", {
                    children: yT(`${Ox}colHoldNote`)
                  })]
                })]
              })]
            }), (0, wK.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, wK.jsx)(jx, {
                status: xT,
                entry: IT
              }), (0, wK.jsx)("ul", {
                className: "Baf2ColSlots",
                children: gf(xT.baf2ColLasers, xT.baf2ColSpots, xT.baf2ColLive, DT.beamsOn, null !== (MT = xT.baf2ColGaps) && void 0 !== MT ? MT : 0).map((TT => (0, wK.jsxs)("li", {
                  className: TT.tone,
                  children: [(0, wK.jsx)("b", {
                    children: Ix(yT, TT.title)
                  }), null !== TT.hint && (0, wK.jsx)("span", {
                    children: Ix(yT, TT.hint)
                  })]
                }, TT.dir)))
              }), (0, wK.jsx)(vx, {
                status: xT
              })]
            })]
          })]
        })
      })
    }
    const Sx = "buildAFactory2Game:",
      Dx = 36e5,
      ax = 864e5;

    function Fx(TT, kT, cT) {
      return Math.max(0, Math.ceil((TT + kT - Math.max(cT, TT)) / 1e3))
    }

    function rx(TT) {
      return TT.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function Px(TT) {
      return "Homestead" === TT
    }

    function wx(TT) {
      return function(TT) {
        let kT = 0;
        for (const cT of TT) {
          const TT = /^Island ([1-9]\d{0,5})$/.exec(cT);
          TT && (kT = Math.max(kT, Number(TT[1])))
        }
        return `Island ${kT+1}`
      }(TT.map((TT => TT.baf2IslandName)))
    }

    function mx(TT, kT) {
      return function(TT) {
        return `${Sx}islandsBlocked${TT[0].toUpperCase()}${TT.slice(1)}`
      }("degraded" === TT && 0 === kT ? "stuck" : TT)
    }

    function bx(TT) {
      return TT.filter((TT => {
        var kT;
        return !TT.baf2IslandActive && void 0 === TT.baf2IslandUnreadable && void 0 === (null === (kT = TT.baf2IslandCoop) || void 0 === kT ? void 0 : kT.baf2CoopState)
      })).length
    }

    function zx(TT) {
      return "coopMoving" === TT || "coopUnreachable" === TT
    }

    function Jx(TT, kT) {
      const cT = kT > 0;
      return {
        change: null === TT && !cT,
        switch: (null === TT || "degraded" === TT || zx(TT)) && !cT,
        rename: "loading" !== TT && "degraded" !== TT && "stuck" !== TT
      }
    }

    function ox(TT, kT) {
      return void 0 === TT || "corrupt" === TT && kT
    }
    const Hx = GO;

    function ex(TT, kT, cT) {
      if (null !== TT && void 0 !== TT && TT.untilGone) {
        var lT;
        return !("dismiss" === TT.untilGone && void 0 === (null === (lT = kT.baf2IslandCoop) || void 0 === lT ? void 0 : lT.baf2CoopState)) && cT - TT.atMs < 32500
      }
      return void 0 !== TT && cT - TT.atMs < Hx && kT.baf2IslandName === TT.from
    }
    const Gx = GO;

    function Vx(TT) {
      return "core" === (null === TT || void 0 === TT ? void 0 : TT.kind) ? TT.core : "islands" === (null === TT || void 0 === TT ? void 0 : TT.kind) ? TT.backToCore : void 0
    }

    function Ex(TT) {
      return `\0${TT}\0`
    }

    function Zx(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const lT = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const KT of Object.keys(cT)) lT[KT] = Ex(KT);
      let MT = Object.keys(lT).length > 0 ? TT(kT, lT) : TT(kT);
      for (const [KT, OT] of Object.entries(cT)) MT = MT.split(Ex(KT)).join(OT);
      return MT
    }

    function ux(TT, kT) {
      return TT ? kT ? "enabled" : "disabled" : "hidden"
    }
    const Xx = {
      removed: `${Sx}islandsCoopRemoved`,
      deleted: `${Sx}islandsCoopDeleted`,
      notReady: `${Sx}islandsCoopNotReady`,
      gone: `${Sx}islandsCoopGone`
    };

    function dx(TT) {
      var kT;
      return "member" !== (null === (kT = TT.baf2IslandCoop) || void 0 === kT ? void 0 : kT.baf2CoopRole) && "newer" !== TT.baf2IslandUnreadable
    }

    function Lx(TT, kT, cT, lT, MT, KT) {
      const OT = TT.baf2IslandActive,
        yT = TT.baf2IslandUnreadable,
        fT = TT.baf2IslandCoop,
        xT = function(TT, kT, cT) {
          return {
            switch: TT.switch && void 0 === kT,
            delete: TT.change && ox(kT, cT)
          }
        }(kT, yT, lT),
        IT = OT && void 0 !== fT && void 0 === fT.baf2CoopState && "coopUnreachable" === KT,
        AT = {
          switch: ux((!OT || IT) && void 0 === yT, IT || xT.switch),
          switchLabel: IT ? "tryAgain" : "switch",
          rename: ux(!0, kT.rename),
          delete: ux(!OT, xT.delete),
          deleteWaits: !OT && ox(yT, lT),
          people: ux(void 0 !== TT.baf2IslandInvitable || MT && OT && void 0 === yT && void 0 === fT, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        CT = !OT && xT.delete;
      if (void 0 === fT) return cT ? {
        ...AT,
        delete: ux(!OT, !1),
        deleteWaits: !1,
        note: CT ? {
          key: `${Sx}islandsCoopKeepOwn`
        } : null
      } : AT;
      const jT = fT.baf2CoopState,
        vT = fT.baf2CoopMembers.length > 1,
        tT = {
          ...AT,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== jT && "member" === fT.baf2CoopRole) return {
        ...tT,
        dismiss: ux(!0, kT.rename),
        note: {
          key: Xx[jT],
          names: {
            owner: fT.baf2CoopOwner
          }
        }
      };
      if (void 0 !== jT) {
        let TT = {
          key: `${Sx}islandsCoopOwnLost`
        };
        return CT && vT ? TT = {
          key: `${Sx}islandsCoopDeleteMembers`
        } : CT && cT && (TT = {
          key: `${Sx}islandsCoopKeepOwn`
        }), {
          ...tT,
          delete: ux(!OT, xT.delete && !vT && !cT),
          deleteWaits: AT.deleteWaits && !vT && !cT,
          note: TT
        }
      }
      if ("member" === fT.baf2CoopRole) return {
        ...AT,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: ux(!0, OT ? kT.switch : kT.rename)
      };
      const hT = fT.baf2CoopManageHere;
      let NT = null;
      var QT;
      hT || OT ? CT && vT ? NT = {
        key: `${Sx}islandsCoopDeleteMembers`
      } : CT && cT && (NT = {
        key: `${Sx}islandsCoopKeepOwn`
      }) : NT = {
        key: null !== (QT = fT.baf2CoopLeft) && void 0 !== QT && QT.length ? `${Sx}islandsCoopManageThereClaim` : `${Sx}islandsCoopManageThere`
      };
      return {
        ...AT,
        rename: ux(!0, kT.rename && hT),
        delete: ux(!OT, xT.delete && !vT && !cT),
        deleteWaits: AT.deleteWaits && !vT && !cT,
        people: "enabled",
        peopleLabel: "players",
        unshare: ux(hT && OT && !vT, kT.change),
        remove: hT,
        note: NT
      }
    }

    function Rx(TT) {
      var kT;
      const cT = TT.baf2IslandCoop;
      if ("owner" !== (null === cT || void 0 === cT ? void 0 : cT.baf2CoopRole) || void 0 !== cT.baf2CoopState || null === (kT = cT.baf2CoopLeft) || void 0 === kT || !kT.length) return null;
      const lT = TT.baf2IslandActive && cT.baf2CoopManageHere;
      return {
        left: cT.baf2CoopLeft,
        claim: lT,
        goThere: !lT && cT.baf2CoopManageHere
      }
    }

    function gx(TT) {
      return TT.baf2CoopMembers.length >= TT.baf2CoopMax
    }

    function Ux(TT, kT, cT) {
      return void 0 !== TT && kT < TT.answer && cT - TT.atMs < Hx
    }
    const Yx = "buildAFactory2Game:";

    function Bx(TT, kT) {
      return {
        onKeyDown: cT => {
          cT.stopPropagation(), cT.nativeEvent.isComposing || 229 === cT.nativeEvent.keyCode || ("Enter" === cT.key ? (cT.preventDefault(), TT()) : "Escape" === cT.key && (cT.preventDefault(), kT()))
        }
      }
    }

    function Wx(TT) {
      return {
        onKeyDown: kT => {
          "Escape" !== kT.key || kT.nativeEvent.isComposing || (kT.preventDefault(), kT.stopPropagation(), TT())
        }
      }
    }

    function nx(TT) {
      TT.currentTarget.select()
    }

    function px(TT, kT) {
      (0, lT.useEffect)((() => {
        var cT;
        TT && (null === (cT = kT.current) || void 0 === cT || cT.scrollIntoView({
          block: "nearest"
        }))
      }), [TT, kT])
    }

    function ix(TT) {
      const [kT, cT] = (0, lT.useState)(null);
      return (0, lT.useEffect)((() => {
        const kT = document.querySelector(".UiRequests"),
          lT = TT.current;
        if (!kT || !lT || "undefined" === typeof ResizeObserver) return;
        const MT = () => {
          const TT = kT.getBoundingClientRect(),
            MT = lT.getBoundingClientRect(),
            KT = lT.parentElement,
            OT = KT && parseFloat(getComputedStyle(KT).paddingTop) || 0,
            yT = function(TT, kT, cT, lT) {
              if (!TT || TT.height <= 0 || TT.right <= kT.left || TT.left >= kT.right) return null;
              const MT = Math.max(lT, TT.bottom + 8);
              return {
                marginTop: Math.round(MT - lT),
                maxHeight: Math.max(0, Math.floor(cT - MT - lT))
              }
            }(TT, MT, window.innerHeight, OT);
          cT((TT => (null === TT || void 0 === TT ? void 0 : TT.marginTop) === (null === yT || void 0 === yT ? void 0 : yT.marginTop) && (null === TT || void 0 === TT ? void 0 : TT.maxHeight) === (null === yT || void 0 === yT ? void 0 : yT.maxHeight) ? TT : yT))
        };
        MT();
        const KT = new ResizeObserver(MT);
        return KT.observe(kT), window.addEventListener("resize", MT), () => {
          KT.disconnect(), window.removeEventListener("resize", MT)
        }
      }), [TT]), kT
    }

    function qx() {
      (0, lT.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function sx(TT) {
      (0, lT.useEffect)((() => {
        var kT;
        null === (kT = TT.current) || void 0 === kT || kT.focus()
      }), [TT])
    }

    function TI(TT) {
      const [kT, cT] = (0, lT.useState)(Date.now);
      return (0, lT.useEffect)((() => {
        const kT = window.setInterval((() => {
          cT(Date.now())
        }), TT);
        return () => {
          window.clearInterval(kT)
        }
      }), [TT]), kT
    }

    function kI(TT) {
      let {
        tier: kT,
        t: cT
      } = TT;
      const {
        kind: lT,
        short: MT
      } = hT(kT), KT = jT(kT, vT), OT = cT(`${Yx}${KT.key}`, {
        ...KT.params,
        name: cT(`${Yx}${NT(kT).nameKey}`)
      });
      return (0, wK.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, wK.jsx)("span", {
          className: rM()("Baf2IslandTierPip", {
            Stage: "tier" !== lT
          }),
          "aria-hidden": "true",
          children: MT
        }), OT]
      })
    }

    function cI(TT) {
      let {
        note: kT,
        className: cT,
        t: lT
      } = TT;
      return (0, wK.jsx)("p", {
        className: rM()("Baf2IslandNote", cT),
        children: Zx(lT, kT.key, kT.names, kT.params)
      })
    }
    const lI = "buildAFactory2Game:";

    function MI(TT) {
      let {
        message: kT,
        arrivedAtMs: cT,
        close: MT,
        leave: KT
      } = TT;
      const OT = LO(),
        {
          t: yT
        } = (0, bM.B)(),
        fT = TI(1e3),
        xT = (0, lT.useRef)(null);
      qx(), (0, lT.useEffect)((() => {
        var TT;
        null === (TT = xT.current) || void 0 === TT || TT.focus()
      }), []);
      const IT = Fx(cT, kT.baf2TransferInMs, fT),
        AT = cT + kT.baf2TransferInMs - 1e3,
        [CT, jT] = (0, lT.useState)(null);
      (0, lT.useEffect)((() => {
        const TT = window.setTimeout((() => {
          jT(AT)
        }), Math.max(0, AT - Date.now()));
        return () => {
          window.clearTimeout(TT)
        }
      }), [AT]);
      const vT = CT === AT || fT >= AT,
        tT = kT.baf2TransferIsland,
        hT = kT.baf2TransferOwner;
      return (0, wK.jsx)(aO.c, {
        close: MT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, wK.jsxs)("section", {
          ref: xT,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, wK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, wK.jsxs)("div", {
              children: [(0, wK.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === hT ? Zx(yT, `${lI}islandsTransferOwn`, {
                  island: tT
                }) : Zx(yT, `${lI}islandsTransfer`, {
                  island: tT,
                  owner: hT
                })
              }), (0, wK.jsx)("p", {
                children: vT ? yT(`${lI}islandsTransferNow`) : yT(`${lI}islandsTransferIn`, {
                  time: aK(yT, IT)
                })
              })]
            }), (0, wK.jsx)(FO.l, {
              ariaLabel: yT(`${lI}islandsClose`),
              onClick: MT
            })]
          }), !vT && (0, wK.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, wK.jsx)("p", {
              className: "Baf2TransferNote",
              children: yT(`${lI}islandsTransferNote`)
            }), (0, wK.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, wK.jsx)(FO.e, {
                onClick: () => {
                  OT.send("baf2coopstay"), KT()
                },
                children: yT(`${lI}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var KI = cT(1461),
      OI = cT(1143),
      yI = cT.n(OI);
    const fI = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const xI = "buildAFactory2Game:",
      II = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function AI(TT, kT, cT) {
      return void 0 === kT ? cT : "string" === typeof kT ? kT : Array.isArray(kT) ? kT.map((kT => "string" === typeof kT ? kT : "translationKey" in kT ? TT(kT.translationKey) : "")).join("") : TT(kT.translationKey)
    }

    function CI(TT) {
      const kT = {};
      for (const [cT, lT] of Object.entries(null !== TT && void 0 !== TT ? TT : {})) kT[cT] = lT < 0 ? DK(lT) : lT.toLocaleString("en-US");
      return kT
    }

    function jI(TT, kT) {
      const cT = kT ? "touch" : "mouse";
      return {
        use: TT(`${xI}lookUse_${cT}`),
        Use: TT(`${xI}lookUseStart_${cT}`)
      }
    }
    const vI = (0, lT.memo)((function(TT) {
      let {
        item: kT
      } = TT;
      return (0, wK.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, wK.jsx)(JM.d, {
          itemName: kT,
          amount: 0
        })
      })
    }));

    function tI(TT) {
      let {
        label: kT,
        percent: cT,
        progress: lT
      } = TT;
      return (0, wK.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, wK.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${kT}: ${lT}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": cT,
          children: (0, wK.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${cT}%`
            }
          })
        }), (0, wK.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: lT
        })]
      })
    }

    function hI(TT) {
      let {
        chips: kT
      } = TT;
      return (0, wK.jsx)("span", {
        className: "Baf2QuestChips",
        children: kT.map((TT => {
          let [kT, cT, lT] = TT;
          const MT = cT >= lT;
          return (0, wK.jsxs)("span", {
            className: rM()("Baf2QuestChip", {
              Met: MT
            }),
            children: [(0, wK.jsx)(vI, {
              item: kT
            }), (0, wK.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: MT ? `\u2713${lT}` : `${cT}/${lT}`
            })]
          }, kT)
        }))
      })
    }

    function NI(TT, kT) {
      const {
        key: cT,
        params: lT
      } = jT(kT, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return TT(`${xI}${cT}`, {
        ...lT,
        name: TT(`${xI}${NT(kT).nameKey}`)
      })
    }

    function QI(TT) {
      let {
        core: kT,
        t: cT
      } = TT;
      const [lT, MT] = kT, KT = MT > 0 ? Math.floor(100 * lT / MT) : 100;
      return (0, wK.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": cT(`${xI}questCoreLabel`, {
          have: String(lT),
          need: String(MT)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": KT,
        children: [(0, wK.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: cT(`${xI}questCore`, {
            percent: String(KT)
          })
        }), (0, wK.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, wK.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${KT}%`
            }
          })
        })]
      })
    }

    function SI(TT) {
      let {
        rows: kT,
        t: cT
      } = TT;
      const lT = kT.filter((TT => TT.done)).length;
      return (0, wK.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": cT(`${xI}questStepsProgress`, {
          done: String(lT),
          total: String(kT.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": kT.length,
        "aria-valuenow": lT,
        children: kT.map((TT => (0, wK.jsx)("span", {
          className: rM()("Baf2QuestSegment", {
            Done: TT.done,
            Current: TT.current
          })
        }, TT.id)))
      })
    }
    const DI = (0, lT.memo)(FI, aI);

    function aI(TT, kT) {
      const cT = cT => TT.view.itemNames[cT] === kT.view.itemNames[cT];
      return TT.t === kT.t && TT.extra === kT.extra && (null === TT.row.item || cT(TT.row.item)) && TT.row.madeFor.every(cT) && TT.row.also.every(cT) && yI()(TT.row, kT.row)
    }

    function FI(TT) {
      let {
        row: kT,
        view: cT,
        t: lT,
        extra: MT
      } = TT;
      const {
        isTouchScreen: KT
      } = (0, DM.n)(["isTouchScreen"]), OT = kT.item ? function(TT, kT, cT) {
        return 1 !== cT && fI.has(TT) ? mM(kT) : null
      }(kT.key, kT.item, kT.total) : null, yT = OT ? lT(OT) : kT.item ? AI(lT, cT.itemNames[kT.item], kT.item) : "", fT = kT.also.map((TT => AI(lT, cT.itemNames[TT], TT))), xT = fT.join(", "), IT = function(TT, kT) {
        var cT;
        return kT.length < 2 ? null !== (cT = kT[0]) && void 0 !== cT ? cT : "" : TT(`${xI}listAnd`, {
          rest: kT.slice(0, -1).join(TT(`${xI}listComma`)),
          last: kT[kT.length - 1]
        })
      }(lT, [yT, ...fT]), AT = lT(`${xI}${kT.key}`, {
        ...jI(lT, KT),
        ...CI(kT.params),
        item: yT,
        also: xT,
        itemList: IT,
        total: String(kT.total)
      }), [CT, ...jT] = AT.split("\n"), vT = kT.total > 1 && !kT.done && !kT.away;
      return (0, wK.jsxs)("li", {
        className: rM()("Baf2QuestStep", {
          Done: kT.done,
          Current: kT.current,
          JustFinished: kT.justFinished,
          Away: kT.away
        }),
        children: [!kT.done && null !== kT.item && (0, wK.jsx)(vI, {
          item: kT.item
        }), (kT.done || null === kT.item) && (0, wK.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: kT.done ? "\u2713" : "\u25cb"
        }), (0, wK.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, wK.jsx)("strong", {
            children: CT
          }), jT.length > 0 && (0, wK.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: jT.join(" ")
          }), !kT.done && kT.madeFor.length > 0 && (0, wK.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: lT("buildAFactory2Game:questRowFor", {
              items: kT.madeFor.map((TT => AI(lT, cT.itemNames[TT], TT))).join(" \u2192 ")
            })
          }), vT && (0, wK.jsx)(tI, {
            label: CT,
            percent: Math.round(100 * kT.amount / kT.total),
            progress: `${kT.amount.toLocaleString("en-US")}/${kT.total.toLocaleString("en-US")}`
          }), !kT.done && !kT.away && kT.chips && kT.chips.length > 0 && (0, wK.jsx)(hI, {
            chips: kT.chips
          }), MT]
        })]
      })
    }

    function rI(TT, kT) {
      let [cT, lT] = kT;
      return TT(`${xI}${cT}`, CI(lT))
    }

    function PI(TT) {
      let [kT, cT] = TT;
      return kT + JSON.stringify(cT)
    }

    function wI(TT) {
      let {
        goal: kT,
        t: cT
      } = TT;
      return kT ? (0, wK.jsx)("span", {
        className: "Baf2BookGoal",
        children: cT(`${xI}${kT}`)
      }) : null
    }

    function mI(TT) {
      let {
        view: kT,
        t: cT
      } = TT;
      if (!kT.name) return null;
      const lT = gM(kT.rows);
      return (0, wK.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, wK.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: cT(`${xI}currentQuest`)
        }), (0, wK.jsx)("strong", {
          className: "Baf2BookTitle",
          children: rI(cT, kT.name)
        }), (0, wK.jsx)(wI, {
          goal: kT.goal,
          t: cT
        }), lT.length > 1 && (0, wK.jsx)(SI, {
          rows: lT,
          t: cT
        }), (0, wK.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: kT.rows.map((TT => (0, wK.jsx)(DI, {
            row: TT,
            view: kT,
            t: cT
          }, TT.id)))
        }), kT.reward && (0, wK.jsxs)("span", {
          className: "Baf2BookReward",
          children: [cT(`${xI}questReward`), (0, wK.jsx)(vI, {
            item: kT.reward
          }), AI(cT, kT.itemNames[kT.reward], kT.reward)]
        })]
      })
    }

    function bI(TT) {
      let {
        quest: kT,
        upcoming: cT,
        t: lT
      } = TT;
      return (0, wK.jsxs)("li", {
        className: rM()("Baf2BookQuest", {
          Done: kT[3],
          Upcoming: cT
        }),
        children: [(0, wK.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: kT[3] ? "\u2713" : "\u25cb"
        }), (0, wK.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, wK.jsx)("strong", {
            className: "Baf2BookTitle",
            children: rI(lT, kT)
          }), (0, wK.jsx)(wI, {
            goal: kT[2],
            t: lT
          })]
        })]
      })
    }

    function zI(TT) {
      let {
        done: kT,
        total: cT,
        t: lT
      } = TT;
      const MT = cT > 0 ? Math.round(100 * kT / cT) : 0,
        KT = lT(`${xI}questBookChapterProgress`, {
          done: String(kT),
          total: String(cT)
        });
      return (0, wK.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, wK.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": KT,
          "aria-valuemin": 0,
          "aria-valuemax": cT,
          "aria-valuenow": kT,
          children: (0, wK.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${MT}%`
            }
          })
        }), (0, wK.jsx)("span", {
          className: "Baf2BookProgressText",
          children: KT
        })]
      })
    }

    function JI(TT) {
      let {
        view: kT,
        tier: cT,
        quests: lT,
        t: MT
      } = TT;
      const KT = cT === kT.tier,
        OT = (null !== lT && void 0 !== lT ? lT : []).filter((TT => !TT[4])),
        yT = (null !== lT && void 0 !== lT ? lT : []).filter((TT => TT[4])),
        fT = OT.filter((TT => TT[3])).length,
        xT = KT && kT.name ? PI(kT.name) : null,
        IT = OT.findIndex((TT => !TT[3] && PI(TT) === xT));
      return (0, wK.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, wK.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, wK.jsx)("h3", {
            children: NI(MT, cT)
          }), OT.length > 0 && (0, wK.jsx)(zI, {
            done: fT,
            total: OT.length,
            t: MT
          }), KT && kT.core && (0, wK.jsx)(QI, {
            core: kT.core,
            t: MT
          })]
        }), (0, wK.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === lT && KT && (0, wK.jsx)(mI, {
            view: kT,
            t: MT
          }), OT.map(((TT, cT) => cT === IT ? (0, wK.jsx)(mI, {
            view: kT,
            t: MT
          }, PI(TT)) : (0, wK.jsx)(bI, {
            quest: TT,
            upcoming: !TT[3],
            t: MT
          }, PI(TT))))]
        }), KT && kT.side && (0, wK.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, wK.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: MT(`${xI}questSide`)
          }), (0, wK.jsx)("strong", {
            className: "Baf2BookTitle",
            children: rI(MT, kT.side.name)
          }), (0, wK.jsx)(wI, {
            goal: kT.side.goal,
            t: MT
          }), (0, wK.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, wK.jsx)(DI, {
              row: kT.side.row,
              view: kT,
              t: MT
            })
          })]
        }), yT.length > 0 && (0, wK.jsxs)(wK.Fragment, {
          children: [(0, wK.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: MT(`${xI}questBookSidesDone`)
          }), (0, wK.jsx)("ol", {
            className: "Baf2BookQuests",
            children: yT.map((TT => (0, wK.jsx)(bI, {
              quest: TT,
              upcoming: !1,
              t: MT
            }, PI(TT))))
          })]
        })]
      })
    }

    function oI(TT) {
      var kT, cT, KT;
      let {
        store: OT,
        close: yT
      } = TT;
      const {
        t: fT
      } = (0, bM.B)(), xT = (0, KI.i)(EM, OT.get()), AT = null !== (kT = xT.tier) && void 0 !== kT ? kT : 1, [CT, jT] = (0, lT.useState)(null), vT = (null === CT || void 0 === CT ? void 0 : CT.at) === AT ? CT.tier : AT, NT = (0, lT.useRef)(null), QT = null !== xT.chapters;
      (0, lT.useEffect)((() => {
        var TT;
        NT.current && (NT.current.scrollTop = 0);
        const kT = null === (TT = NT.current) || void 0 === TT ? void 0 : TT.querySelector(".Baf2BookQuest.Current");
        if (NT.current && kT) {
          const TT = kT.getBoundingClientRect().bottom - NT.current.getBoundingClientRect().bottom;
          TT > 0 && (NT.current.scrollTop += Math.min(TT, kT.getBoundingClientRect().top - NT.current.getBoundingClientRect().top))
        }
      }), [vT, QT]);
      const ST = null === (cT = xT.chapters) || void 0 === cT ? void 0 : cT.find((TT => {
        let [kT] = TT;
        return kT === vT
      }));
      return (0, wK.jsx)(aO.c, {
        close: yT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, wK.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: II,
          children: [(0, wK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, wK.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: fT(`${xI}questBookTitle`)
            }), (0, wK.jsx)(FO.l, {
              onClick: yT
            })]
          }), (0, wK.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": fT(`${xI}questBookChapters`),
            children: MT.slice(0, IT()).map(((TT, kT) => {
              const cT = kT + 1,
                {
                  kind: lT,
                  short: MT
                } = hT(cT),
                KT = tT(cT, AT),
                OT = KT ? fT(`${xI}coreAtomicHidden`) : NI(fT, cT);
              return (0, wK.jsx)("li", {
                children: (0, wK.jsx)("button", {
                  type: "button",
                  className: rM()({
                    Stage: "tier" !== lT,
                    Atomic: "atomic" === lT,
                    Current: cT === AT,
                    Selected: cT === vT
                  }),
                  disabled: cT > AT,
                  "aria-pressed": cT === vT,
                  "aria-label": OT,
                  title: KT ? void 0 : OT,
                  onClick: () => {
                    jT({
                      tier: cT,
                      at: AT
                    })
                  },
                  children: KT ? "?" : MT
                })
              }, TT.nameKey)
            }))
          }), (0, wK.jsxs)("div", {
            ref: NT,
            className: "Baf2BookBody",
            children: [LM(xT) && vT === AT && (0, wK.jsx)("p", {
              className: "Baf2BookEmpty",
              children: fT(`${xI}questBookAllDone`)
            }), (0, wK.jsx)(JI, {
              view: xT,
              tier: vT,
              quests: null !== (KT = null === ST || void 0 === ST ? void 0 : ST[1]) && void 0 !== KT ? KT : null,
              t: fT
            })]
          })]
        })
      })
    }
    const HI = "buildAFactory2Game:";

    function eI(TT) {
      let {
        tiers: kT,
        from: cT,
        tier: lT,
        shown: MT,
        gC: KT
      } = TT;
      const {
        t: OT
      } = (0, bM.B)(), yT = kT.map(((TT, kT) => {
        const yT = cT + kT,
          {
            kind: fT,
            short: xT
          } = hT(yT),
          IT = tT(yT, lT);
        return (0, wK.jsx)("li", {
          children: (0, wK.jsx)("button", {
            type: "button",
            className: rM()({
              Stage: "tier" !== fT,
              Silhouette: IT,
              Reached: yT <= lT,
              Current: yT === lT,
              Next: yT === lT + 1,
              Selected: yT === MT
            }),
            disabled: IT,
            "aria-pressed": yT === MT,
            "aria-label": IT ? OT(`${HI}coreAtomicHidden`) : void 0,
            title: IT ? void 0 : OT(`${HI}${TT.nameKey}`),
            onClick: () => {
              KT(yT)
            },
            children: IT ? "?" : xT
          })
        }, TT.nameKey)
      }));
      return (0, wK.jsx)(wK.Fragment, {
        children: yT
      })
    }

    function GI(TT) {
      let {
        id: kT,
        label: cT,
        tiers: lT,
        from: MT,
        ...KT
      } = TT;
      return (0, wK.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, wK.jsx)("span", {
          id: kT,
          className: "Baf2CoreLadderLabel",
          children: cT
        }), (0, wK.jsx)("ol", {
          "aria-labelledby": kT,
          children: (0, wK.jsx)(eI, {
            ...KT,
            tiers: lT,
            from: MT
          })
        })]
      })
    }

    function VI(TT) {
      const {
        t: kT
      } = (0, bM.B)(), cT = MT.findIndex((TT => void 0 !== TT.stage)), lT = MT.findIndex((TT => void 0 !== TT.reactorTier)), KT = cT < 0 ? MT : MT.slice(0, cT), OT = cT < 0 ? [] : MT.slice(cT, lT < 0 ? void 0 : lT), fT = lT < 0 || !yT() ? [] : MT.slice(lT);
      return (0, wK.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, wK.jsx)(GI, {
          ...TT,
          id: "baf2CoreTiersLabel",
          label: kT(`${HI}coreTiersLabel`),
          tiers: KT,
          from: 1
        }), OT.length > 0 && (0, wK.jsx)(GI, {
          ...TT,
          id: "baf2CoreStagesLabel",
          label: kT(`${HI}coreStagesLabel`),
          tiers: OT,
          from: cT + 1
        }), fT.length > 0 && (0, wK.jsx)(GI, {
          ...TT,
          id: "baf2CoreAtomicLabel",
          label: kT(`${HI}coreAtomicLabel`),
          tiers: fT,
          from: lT + 1
        })]
      })
    }
    const EI = "buildAFactory2Game:";

    function ZI(TT) {
      let {
        item: kT,
        itemNames: cT,
        children: lT
      } = TT;
      return (0, wK.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, wK.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, wK.jsx)(JM.d, {
            itemName: kT,
            amount: 0
          })
        }), (0, wK.jsx)(oM.b, {
          text: cT[kT]
        }), lT]
      })
    }

    function uI(TT) {
      const kT = new Map;
      for (const {
          block: lT
        }
        of TT.newDeposits) {
        var cT;
        kT.set(lT, (null !== (cT = kT.get(lT)) && void 0 !== cT ? cT : 0) + 1)
      }
      return [...kT]
    }

    function XI(TT) {
      let {
        value: kT,
        label: cT,
        more: lT
      } = TT;
      return (0, wK.jsxs)("li", {
        children: [(0, wK.jsx)("strong", {
          children: kT
        }), (0, wK.jsx)("span", {
          children: cT
        }), lT > 0 && (0, wK.jsxs)("em", {
          children: ["+", lT]
        })]
      })
    }

    function dI(TT) {
      let {
        items: kT,
        itemNames: cT
      } = TT;
      const {
        t: MT
      } = (0, bM.B)(), [KT, OT] = (0, lT.useState)(null), yT = null !== KT && kT.includes(KT) ? KT : null;
      return (0, wK.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, wK.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: MT(`${EI}coreRewardUnlocks`)
        }), (0, wK.jsx)("ul", {
          children: kT.map((TT => (0, wK.jsx)("li", {
            children: (0, wK.jsx)("button", {
              type: "button",
              className: rM()("Baf2PanelIcon", {
                Picked: TT === yT
              }),
              title: MK(MT, TT),
              "aria-label": MK(MT, TT),
              "aria-pressed": TT === yT,
              onClick: () => {
                OT(TT === yT ? null : TT)
              },
              children: (0, wK.jsx)(JM.d, {
                itemName: TT,
                amount: 0
              })
            })
          }, TT)))
        }), (0, wK.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== yT && (0, wK.jsxs)(wK.Fragment, {
            children: [(0, wK.jsx)(oM.b, {
              text: cT[yT]
            }), " \xb7 ", (0, wK.jsx)(oM.b, {
              text: cT[JT(yT)]
            })]
          }), null === yT && MT(`${EI}coreRecipeTap`)]
        })]
      })
    }

    function LI(TT) {
      var kT, cT;
      let {
        def: lT,
        tier: MT,
        itemNames: KT
      } = TT;
      const {
        t: OT
      } = (0, bM.B)(), yT = MT > 1 ? NT(MT - 1) : void 0, fT = Math.round(2 * lT.islandRadius), xT = yT ? Math.round(2 * yT.islandRadius) : fT, IT = MT >= 3 ? Fl(MT) : null;
      return (0, wK.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, wK.jsxs)("ul", {
          className: rM()("Baf2CoreStats", {
            Four: null !== IT
          }),
          children: [(0, wK.jsx)(XI, {
            value: `${fT}\xd7${fT}`,
            label: OT(`${EI}coreStatIsland`),
            more: fT - xT
          }), (0, wK.jsx)(XI, {
            value: String(lT.machineAllowance),
            label: OT(`${EI}coreStatMachines`),
            more: lT.machineAllowance - (null !== (kT = null === yT || void 0 === yT ? void 0 : yT.machineAllowance) && void 0 !== kT ? kT : lT.machineAllowance)
          }), (0, wK.jsx)(XI, {
            value: String(lT.beltAllowance),
            label: OT(`${EI}coreStatBelts`),
            more: lT.beltAllowance - (null !== (cT = null === yT || void 0 === yT ? void 0 : yT.beltAllowance) && void 0 !== cT ? cT : lT.beltAllowance)
          }), null !== IT && (0, wK.jsx)(XI, {
            value: String(IT),
            label: OT(`${EI}coreStatStorage`),
            more: IT - (yT ? Fl(MT - 1) : IT)
          })]
        }), lT.reward && (0, wK.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, wK.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: OT(`${EI}coreRewardItem`)
          }), (0, wK.jsx)(ZI, {
            item: lT.reward,
            itemNames: KT
          })]
        }), lT.newDeposits.length > 0 && (0, wK.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, wK.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: OT(lT.newDeposits.length > 1 ? `${EI}coreRewardDeposits` : `${EI}coreRewardDeposit`)
          }), uI(lT).map((TT => {
            let [kT, cT] = TT;
            return (0, wK.jsx)(ZI, {
              item: kT,
              itemNames: KT,
              children: cT > 1 && ` \xd7${cT}`
            }, kT)
          }))]
        }), lT.unlocks.length > 0 && (0, wK.jsx)(dI, {
          items: lT.unlocks,
          itemNames: KT
        }), (0, wK.jsx)(RI, {
          tier: MT
        })]
      })
    }

    function RI(TT) {
      let {
        tier: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)(), lT = hM[kT];
      if (!lT) return null;
      const MT = tM(kT, 0, 0).barrierMax !== tM(kT - 1, 0, 0).barrierMax;
      return (0, wK.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, wK.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, wK.jsx)(JM.d, {
            itemName: MT ? xM.Chestplate : fM,
            amount: 0
          })
        }), cT(`${EI}gearPerkLine`, {
          perk: cT(`${EI}${lT}`)
        })]
      })
    }

    function gI(TT, kT) {
      return null === TT ? kT : TT.value
    }

    function UI(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === TT || cT - TT.atMs >= lT ? null : MT(TT.value, kT) ? TT.armed ? null : TT : TT.armed ? TT : {
        ...TT,
        armed: !0
      }
    }

    function YI(TT, kT) {
      const cT = kT.filter((kT => {
        var cT;
        return !1 !== (null === (cT = TT.get(kT)) || void 0 === cT ? void 0 : cT.value)
      }));
      for (const [lT, MT] of TT) MT.value && !kT.includes(lT) && cT.push(lT);
      return cT
    }

    function BI(TT, kT, cT, MT) {
      const [KT, OT] = (0, lT.useState)((() => new Map)), yT = () => {
        OT((kT => function(TT, kT, cT, lT) {
          var MT;
          let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            OT = null;
          for (const [yT, fT] of TT) {
            const MT = UI(fT, kT(yT), cT, lT, KT);
            MT !== fT && (OT ??= new Map(TT), null === MT ? OT.delete(yT) : OT.set(yT, MT))
          }
          return null !== (MT = OT) && void 0 !== MT ? MT : TT
        }(kT, TT, Date.now(), cT, MT)))
      };
      (0, lT.useEffect)((() => {
        yT()
      }), [kT, cT]), (0, lT.useEffect)((() => {
        if (0 === KT.size) return;
        const TT = Math.min(...[...KT.values()].map((TT => TT.atMs))),
          kT = setTimeout(yT, Math.max(0, TT + cT - Date.now()) + 1);
        return () => {
          clearTimeout(kT)
        }
      }), [KT, kT, cT]);
      return [KT, (kT, cT) => {
        OT((lT => {
          const KT = new Map(lT);
          return KT.set(kT, function(TT, kT, cT) {
            return {
              value: TT,
              atMs: cT,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(TT, kT)
            }
          }(cT, TT(kT), Date.now(), MT)), KT
        }))
      }]
    }
    const WI = "buildAFactory2Game:";

    function nI(TT) {
      let {
        message: kT,
        itemNames: cT
      } = TT;
      const MT = LO(),
        {
          t: KT
        } = (0, bM.B)(),
        [OT, yT] = (0, lT.useState)(!1),
        [fT, xT] = function(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GO;
          const [cT, lT] = BI((kT => TT.includes(kT)), TT, kT, Object.is);
          return [YI(cT, TT), lT]
        }(kT.baf2CoreBankPaused),
        IT = new Set(fT),
        AT = [...kT.baf2CoreBanked];
      for (const lT of IT) AT.some((TT => {
        let [kT] = TT;
        return kT === lT
      })) || AT.push([lT, 0]);
      return 0 === AT.length ? null : (0, wK.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, wK.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": OT,
          onClick: () => {
            yT(!OT)
          },
          children: [(0, wK.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: KT(`${WI}coreBankedLater`)
          }), (0, wK.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: AT.map((TT => {
              let [kT, cT] = TT;
              const lT = IT.has(kT);
              return (0, wK.jsxs)("span", {
                className: rM()({
                  Paused: lT
                }),
                title: lT ? KT(`${WI}coreBankPausedTag`) : void 0,
                children: [(0, wK.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, wK.jsx)(JM.d, {
                    itemName: kT,
                    amount: 0
                  })
                }), cT, lT && (0, wK.jsx)(zM.e, {
                  name: "pause"
                })]
              }, kT)
            }))
          }), (0, wK.jsx)(zM.e, {
            name: OT ? "angle-up" : "angle-down"
          })]
        }), OT && (0, wK.jsxs)(wK.Fragment, {
          children: [(0, wK.jsx)("ul", {
            children: AT.map((TT => {
              let [kT, lT] = TT;
              const OT = IT.has(kT);
              return (0, wK.jsxs)("li", {
                children: [(0, wK.jsxs)(ZI, {
                  item: kT,
                  itemNames: cT,
                  children: [(0, wK.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: lT
                  }), OT && (0, wK.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: KT(`${WI}coreBankPausedTag`)
                  })]
                }), (0, wK.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, wK.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === lT,
                    onClick: () => {
                      MT.send(`baf2corewithdraw ${lT} ${kT}`)
                    },
                    children: KT(`${WI}coreTake`)
                  }), (0, wK.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      MT.send(`${DT} ${kT}`), xT(kT, !OT)
                    },
                    children: KT(OT ? `${WI}coreBankResume` : `${WI}coreBankStop`)
                  })]
                })]
              }, kT)
            }))
          }), (0, wK.jsx)("p", {
            className: "Baf2CoreHint",
            children: KT(`${WI}coreBankNote`)
          })]
        })]
      })
    }
    const pI = "buildAFactory2Game:";

    function iI(TT) {
      const kT = Math.max(0, Math.floor(TT));
      return `${Math.floor(kT/60)}:${String(kT%60).padStart(2,"0")}`
    }

    function qI(TT) {
      let {
        item: kT
      } = TT;
      return (0, wK.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, wK.jsx)(JM.d, {
          itemName: kT,
          amount: 0
        })
      })
    }

    function sI() {
      return (0, wK.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, wK.jsx)(zM.e, {
          name: "bolt"
        })
      })
    }

    function TA(TT) {
      let {
        charge: kT,
        hint: cT,
        itemNames: lT
      } = TT;
      const MT = LO(),
        {
          t: KT
        } = (0, bM.B)(),
        [OT, yT, fT, xT, IT, AT, CT] = kT,
        [jT, vT] = function(TT) {
          var kT;
          let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GO,
            lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [MT, KT] = BI((() => TT), TT, cT, lT);
          return [gI(null !== (kT = MT.get("")) && void 0 !== kT ? kT : null, TT), TT => {
            KT("", TT)
          }]
        }(CT),
        tT = jT === CT ? AT : !jT,
        hT = xT >= IT,
        NT = OT.find((TT => {
          let [, kT, cT] = TT;
          return cT < .9 * kT
        }));
      let QT = `${pI}coreChargeWaiting`,
        ST = {};
      return hT ? QT = `${pI}coreChargeDone` : jT ? QT = `${pI}coreChargeStopped` : tT && cT ? (QT = `${pI}${cT[0]}`, ST = {
        item: MK(KT, cT[1])
      }) : tT && NT ? (QT = `${pI}coreChargeShort`, ST = {
        item: MK(KT, NT[0])
      }) : tT && yT > 0 && !fT ? QT = `${pI}coreChargePower` : tT && (QT = `${pI}coreChargeRunning`), (0, wK.jsxs)("div", {
        className: rM()("Baf2CoreCharge", {
          Waiting: !tT && !hT,
          Done: hT
        }),
        children: [(0, wK.jsxs)("h4", {
          children: [KT(`${pI}coreChargeTitle`), (0, wK.jsx)("span", {
            children: KT(`${pI}coreChargeProgress`, {
              done: iI(xT),
              need: iI(IT)
            })
          })]
        }), (0, wK.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, wK.jsx)("div", {
            style: {
              width: 100 * Math.min(xT, IT) / IT + "%"
            }
          })
        }), (0, wK.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [OT.map((TT => {
            var kT;
            let [cT, MT, OT] = TT;
            const yT = OT >= .9 * MT;
            return (0, wK.jsxs)("li", {
              className: rM()({
                Done: yT,
                Short: tT && !yT
              }),
              children: [(0, wK.jsx)(qI, {
                item: cT
              }), (0, wK.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, wK.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, wK.jsx)(oM.b, {
                    text: null !== (kT = lT[cT]) && void 0 !== kT ? kT : cT
                  }), (0, wK.jsx)("span", {
                    children: KT(`${pI}coreChargeItem`, {
                      now: String(OT),
                      need: String(MT)
                    })
                  })]
                }), (0, wK.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, wK.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*OT/MT)}%`
                    }
                  })
                })]
              })]
            }, cT)
          })), yT > 0 && (0, wK.jsxs)("li", {
            className: rM()("Baf2CoreChargePower", {
              Short: tT && !fT
            }),
            children: [(0, wK.jsx)(sI, {}), (0, wK.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, wK.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, wK.jsx)("span", {
                  children: KT(`${pI}coreChargePowerRow`, {
                    power: iT(yT)
                  })
                })
              })
            })]
          })]
        }), (0, wK.jsx)("p", {
          className: "Baf2CoreHint",
          children: KT(QT, ST)
        }), !hT && (tT || jT) && (0, wK.jsx)("button", {
          type: "button",
          className: rM()("Baf2CoreChargeToggle", {
            Stopped: jT
          }),
          onClick: () => {
            MT.send(FT), vT(!jT)
          },
          children: KT(jT ? `${pI}coreChargeRestart` : `${pI}coreChargeStop`)
        })]
      })
    }

    function kA(TT) {
      let {
        charge: kT,
        reached: cT,
        itemNames: lT
      } = TT;
      const {
        t: MT
      } = (0, bM.B)();
      return (0, wK.jsxs)("div", {
        className: rM()("Baf2CoreCharge", {
          Done: cT
        }),
        children: [(0, wK.jsxs)("h4", {
          children: [MT(`${pI}coreChargeTitle`), (0, wK.jsx)("span", {
            children: MT(`${pI}coreChargeSpecTime`, {
              time: iI(kT.seconds)
            })
          })]
        }), (0, wK.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [kT.items.map((TT => {
            var kT;
            let {
              item: KT,
              amount: OT
            } = TT;
            return (0, wK.jsxs)("li", {
              className: rM()({
                Done: cT
              }),
              children: [(0, wK.jsx)(qI, {
                item: KT
              }), (0, wK.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, wK.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, wK.jsx)(oM.b, {
                    text: null !== (kT = lT[KT]) && void 0 !== kT ? kT : KT
                  }), (0, wK.jsx)("span", {
                    children: MT(`${pI}coreChargeSpecItem`, {
                      need: String(OT)
                    })
                  })]
                })
              })]
            }, KT)
          })), kT.powerPerS > 0 && (0, wK.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, wK.jsx)(sI, {}), (0, wK.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, wK.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, wK.jsx)("span", {
                  children: MT(`${pI}coreChargePowerRow`, {
                    power: iT(kT.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const cA = "buildAFactory2Game:";

    function lA(TT) {
      let {
        def: kT,
        reached: cT,
        banked: lT,
        itemNames: MT
      } = TT;
      const {
        t: KT
      } = (0, bM.B)();
      return (0, wK.jsx)("ul", {
        className: "Baf2CoreCost",
        children: kT.cost.map((TT => {
          let {
            item: kT,
            amount: OT
          } = TT;
          const yT = cT ? 0 : lT(kT);
          return (0, wK.jsx)("li", {
            children: (0, wK.jsx)(ZI, {
              item: kT,
              itemNames: MT,
              children: (0, wK.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: yT > 0 ? KT(`${cA}coreBankedFor`, {
                  amount: String(yT),
                  total: String(OT)
                }) : `\xd7${OT}`
              })
            })
          }, kT)
        }))
      })
    }

    function MA(TT, kT) {
      if (kT >= IT()) return TT(`${cA}coreMaxTier`);
      const cT = xT[kT + 1];
      return cT && !cT.startsWith("upgradeCore") ? TT(`${cA}coreGateQuest`, {
        quest: TT(`${cA}quest_${cT}`)
      }) : TT(`${cA}coreGateClosed`)
    }

    function KA() {
      const {
        t: TT
      } = (0, bM.B)(), kT = LO(), cT = (0, lT.useRef)(null), MT = (0, lT.useRef)(Date.now());
      return px(!0, cT), (0, wK.jsx)("div", {
        ref: cT,
        className: "Baf2CoreGrow",
        children: (0, wK.jsx)(FO.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - MT.current >= 600 && kT.send(ST)
          },
          children: TT(`${cA}coreGrow`)
        })
      })
    }

    function OA(TT) {
      let {
        message: kT,
        itemNames: cT,
        next: lT
      } = TT;
      const MT = LO(),
        {
          t: KT
        } = (0, bM.B)(),
        OT = kT.baf2CoreTier,
        yT = kT.baf2CoreReady,
        fT = kT.baf2CoreNeeds.filter((TT => {
          let [, kT, cT, lT] = TT;
          return lT > 0 && kT < cT
        })),
        xT = kT.baf2CoreNeeds.every((TT => {
          let [, kT, cT] = TT;
          return kT >= cT
        })),
        IT = kT.baf2CoreKeep;
      return (0, wK.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, wK.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [yT && (0, wK.jsx)(KA, {}), (0, wK.jsx)("h3", {
            children: KT(`${cA}coreBring`)
          }), (0, wK.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: kT.baf2CoreNeeds.map((TT => {
              let [kT, lT, OT, yT] = TT;
              return (0, wK.jsxs)("li", {
                className: rM()({
                  Done: lT >= OT
                }),
                children: [(0, wK.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, wK.jsx)(JM.d, {
                    itemName: kT,
                    amount: 0
                  })
                }), (0, wK.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, wK.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, wK.jsx)(oM.b, {
                      text: cT[kT]
                    }), (0, wK.jsxs)("span", {
                      children: [lT, "/", OT]
                    })]
                  }), (0, wK.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, wK.jsx)("div", {
                      style: {
                        width: 100 * lT / OT + "%"
                      }
                    }), yT > 0 && (0, wK.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * yT / OT + "%"
                      }
                    })]
                  })]
                }), yT > 0 && lT < OT && (0, wK.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    MT.send(`${aT} ${kT}`)
                  },
                  children: KT(`${cA}coreDeposit`, {
                    amount: String(yT)
                  })
                })]
              }, kT)
            }))
          }), kT.baf2CoreCharge && (0, wK.jsx)(TA, {
            charge: kT.baf2CoreCharge,
            hint: kT.baf2CoreChargeHint,
            itemNames: cT
          }), !yT && fT.length > 1 && (0, wK.jsx)(FO.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              MT.send(ST)
            },
            children: KT(`${cA}coreHandOver`)
          }), !yT && void 0 !== IT && (0, wK.jsx)("p", {
            className: "Baf2CoreHint",
            children: KT(`${cA}coreKeepRest`, {
              item: MK(KT, IT)
            })
          }), !yT && !xT && 0 === fT.length && void 0 === IT && (0, wK.jsx)("p", {
            className: "Baf2CoreHint",
            children: KT(`${cA}coreNothingHeld`)
          }), (0, wK.jsx)(nI, {
            message: kT,
            itemNames: cT
          })]
        }), (0, wK.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, wK.jsx)("h3", {
            children: KT(`${cA}coreRewards`)
          }), (0, wK.jsx)(LI, {
            def: lT,
            tier: OT + 1,
            itemNames: cT
          })]
        })]
      })
    }

    function yA(TT) {
      let {
        message: kT,
        itemNames: cT,
        shown: lT
      } = TT;
      const {
        t: MT
      } = (0, bM.B)(), KT = kT.baf2CoreTier, OT = NT(lT), yT = lT <= KT, fT = new Map(kT.baf2CoreBanked), xT = !QT(KT, rT(kT)) && lT === KT;
      return (0, wK.jsxs)("div", {
        className: rM()("Baf2CoreBody", {
          Locked: !yT
        }),
        children: [(0, wK.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, wK.jsx)("h3", {
            children: MT(yT ? `${cA}coreItTook` : `${cA}coreItNeeds`)
          }), 0 === OT.cost.length && (0, wK.jsx)("p", {
            className: "Baf2CoreHint",
            children: MT(`${cA}coreTierStart`)
          }), OT.cost.length > 0 && (0, wK.jsx)(lA, {
            def: OT,
            reached: yT,
            banked: TT => {
              var kT;
              return function(TT, kT, cT, lT) {
                let MT = TT;
                for (let OT = kT + 2; OT <= cT; OT++) {
                  var KT;
                  const TT = NT(OT).cost.find((TT => TT.item === lT)),
                    kT = Math.min(MT, null !== (KT = null === TT || void 0 === TT ? void 0 : TT.amount) && void 0 !== KT ? KT : 0);
                  if (OT === cT) return kT;
                  MT -= kT
                }
                return 0
              }(null !== (kT = fT.get(TT)) && void 0 !== kT ? kT : 0, KT, lT, TT)
            },
            itemNames: cT
          }), OT.charge && (0, wK.jsx)(kA, {
            charge: OT.charge,
            reached: yT,
            itemNames: cT
          }), xT && (0, wK.jsxs)(wK.Fragment, {
            children: [(0, wK.jsx)("p", {
              className: "Baf2CoreHint",
              children: MA(MT, KT)
            }), (0, wK.jsx)(nI, {
              message: kT,
              itemNames: cT
            })]
          })]
        }), (0, wK.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, wK.jsx)("h3", {
            children: MT(yT ? `${cA}coreGave` : `${cA}coreLockedRewards`)
          }), (0, wK.jsx)(LI, {
            def: OT,
            tier: lT,
            itemNames: cT
          })]
        })]
      })
    }

    function fA(TT, kT) {
      const {
        key: cT,
        params: lT
      } = jT(kT - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return TT(`${cA}${cT}`, lT)
    }
    const xA = "buildAFactory2Game:",
      IA = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      AA = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function CA(TT) {
      let {
        view: kT,
        close: cT,
        askIslands: MT
      } = TT;
      const {
        t: KT
      } = (0, bM.B)(), [OT, yT] = (0, lT.useState)(!1);
      (0, lT.useEffect)((() => {
        if (!OT) return;
        const TT = window.setTimeout((() => {
          yT(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(TT)
        }
      }), [OT]);
      const {
        message: fT,
        itemNames: xT
      } = kT, IT = fT.baf2CoreTier, AT = NT(IT), CT = QT(IT, rT(fT)), [tT, hT] = fT.baf2CoreMachines, [ST, DT] = fT.baf2CoreBelts, aT = fT.baf2CoreStorage, FT = fT.baf2CoreReady, [PT, wT] = (0, lT.useState)(null), mT = (null === PT || void 0 === PT ? void 0 : PT.at) === IT && PT.ready === FT ? PT.tier : CT ? IT + 1 : IT;
      let bT = "coreTierLocked";
      mT <= IT ? bT = "coreTierReached" : mT === IT + 1 && (bT = "coreTierNext");
      const zT = KT(`${xA}${NT(mT).nameKey}`),
        JT = mT === IT + 1 ? CT : null,
        oT = jT(mT, {
          tier: bT,
          stage: IA[bT],
          atomic: AA[bT]
        }),
        HT = KT(`${xA}${oT.key}`, {
          ...oT.params,
          name: zT
        }),
        eT = jT(IT, vT),
        GT = KT(`${xA}${eT.key}`, {
          ...eT.params,
          name: KT(`${xA}${AT.nameKey}`)
        });
      return (0, wK.jsx)(aO.c, {
        close: cT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, wK.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, wK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, wK.jsxs)("div", {
              children: [(0, wK.jsx)("h2", {
                id: "baf2CoreTitle",
                children: KT(`${xA}coreTitle`)
              }), void 0 !== fT.baf2CoreIslandName && (0, wK.jsx)("p", {
                className: "Baf2CoreIsland",
                children: fT.baf2CoreIslandName
              }), (0, wK.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, wK.jsx)("span", {
                  children: GT
                }), (0, wK.jsx)("span", {
                  className: rM()({
                    Full: tT >= hT
                  }),
                  children: KT(`${xA}coreMachineCount`, {
                    amount: String(tT),
                    total: String(hT)
                  })
                }), (0, wK.jsx)("span", {
                  className: rM()({
                    Full: ST >= DT
                  }),
                  children: KT(`${xA}coreBeltCount`, {
                    amount: String(ST),
                    total: String(DT)
                  })
                }), void 0 !== aT && (0, wK.jsx)("span", {
                  className: rM()({
                    Full: aT[0] >= aT[1]
                  }),
                  children: KT(`${xA}coreStorageCount`, {
                    amount: String(aT[0]),
                    total: String(aT[1])
                  })
                })]
              })]
            }), (0, wK.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [fT.baf2CoreIslands && (0, wK.jsx)(FO.e, {
                className: "Baf2CoreIslandsButton",
                disabled: OT,
                onClick: () => {
                  yT(!0), MT()
                },
                children: KT(`${xA}islandsOpenButton`)
              }), (0, wK.jsx)(FO.l, {
                onClick: cT
              })]
            })]
          }), (0, wK.jsx)(VI, {
            tier: IT,
            shown: mT,
            gC: TT => {
              wT({
                tier: TT,
                at: IT,
                ready: FT
              })
            }
          }), (0, wK.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [HT, mT > IT + 1 && (0, wK.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: fA(KT, mT)
            })]
          }), 6 === mT && mT > IT && (0, wK.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: KT(`${xA}coreStagesNote`)
          }), 11 === mT && mT > IT && (0, wK.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: KT(`${xA}coreAtomicNote`)
          }), JT && (0, wK.jsx)(OA, {
            message: fT,
            itemNames: xT,
            next: JT
          }), !JT && (0, wK.jsx)(yA, {
            message: fT,
            itemNames: xT,
            shown: mT
          })]
        })
      })
    }
    const jA = {
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
    const vA = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: fK,
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

    function tA(TT) {
      return TT.baf2DropCometOreOnly ? "dropCometOre" : TT.baf2DropCometIsotope ? "seed" === TT.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function hA(TT) {
      let {
        message: kT,
        quests: cT,
        close: MT,
        leave: KT
      } = TT;
      const OT = LO(),
        {
          t: yT
        } = (0, bM.B)(),
        fT = (0, KI.i)(EM, cT.get()),
        xT = function(TT) {
          var kT;
          if (!eT(TT.tutorial)) return null;
          const cT = TT.rows.find((TT => TT.current)),
            lT = cT ? jA[cT.key] : void 0;
          return null !== (kT = null !== lT && void 0 !== lT ? lT : TT.side ? jA[TT.side.row.key] : void 0) && void 0 !== kT ? kT : null
        }(fT),
        IT = null === fT.tier || AK(fT.tier),
        AT = IT ? vA : vA.filter((TT => {
          let {
            item: kT
          } = TT;
          return kT !== fK
        })),
        [CT, jT] = (0, lT.useState)(null),
        vT = null !== CT && void 0 !== CT ? CT : !kT.baf2DropFoundSalvage && IT,
        tT = kT.baf2DropRuinDistance,
        hT = kT.baf2DropComet,
        NT = kT.baf2DropOldWorks,
        QT = kT.baf2DropGrove,
        ST = function(TT) {
          return 2 + Number(void 0 !== TT.baf2DropComet) + Number(!!TT.baf2DropOwedComet || void 0 !== TT.baf2DropOwedWaitMinutes) + Number(void 0 !== TT.baf2DropDigDistance) + Number(void 0 !== TT.baf2DropOldWorks) + Number(void 0 !== TT.baf2DropGrove)
        }(kT),
        DT = TT => {
          OT.send(function(TT) {
            return `baf2drop ${TT}`
          }(TT)), KT()
        };
      let aT = yT("buildAFactory2Game:dropRuinNone");
      if (null !== tT) {
        let TT = kT.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        kT.baf2DropRuinOldWorks && (TT = "dropRuinOldWorks");
        const cT = void 0 === kT.baf2DropRuinCluster ? yT("buildAFactory2Game:dropRuinOpen") : yT("buildAFactory2Game:dropRuinCluster", {
          count: String(kT.baf2DropRuinCluster)
        });
        aT = `${yT(`buildAFactory2Game:${TT}`,{distance:String(tT)})} ${cT}`
      }
      let FT = yT("buildAFactory2Game:dropBelowDescription");
      void 0 !== kT.baf2DropBelowLook && (FT = yT("buildAFactory2Game:dropBelowLook", {
        look: yT(kT.baf2DropBelowLook)
      }));
      const rT = "buildAFactory2Game:wildsRegion_survivorGrove" === kT.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        PT = aK(yT, 60 * function(TT) {
          const [kT, cT] = (0, lT.useState)((() => Date.now())), [MT, KT] = (0, lT.useState)(kT);
          return (0, lT.useEffect)((() => {
            const TT = Date.now();
            cT(TT), KT(TT)
          }), [TT]), (0, lT.useEffect)((() => {
            const TT = window.setInterval((() => {
              KT(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(TT)
            }
          }), []), Math.max(1, TT.baf2DropRenewMinutes - Math.floor((MT - kT) / 6e4))
        }(kT)),
        wT = function(TT, kT, cT) {
          return "ruin" === TT && !cT || "owed" === TT && !kT.baf2DropOwedComet ? null : TT
        }(xT, kT, null !== tT),
        mT = function(TT) {
          for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
          return rM()("Baf2DropTile", ...cT, {
            Wanted: wT === TT
          })
        };
      return (0, wK.jsx)(aO.c, {
        close: MT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, wK.jsxs)("section", {
          className: rM()("Baf2Panel Baf2DropMap", {
            Many: ST >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, wK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, wK.jsxs)("div", {
              children: [(0, wK.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: yT("buildAFactory2Game:dropMapTitle")
              }), (0, wK.jsx)("p", {
                children: yT("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, wK.jsx)(FO.l, {
              onClick: MT
            })]
          }), (0, wK.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== hT && (0, wK.jsxs)(FO.v, {
              className: mT("comet", "Baf2DropComet"),
              onClick: () => {
                DT("comet")
              },
              children: [(0, wK.jsx)("strong", {
                children: yT("buildAFactory2Game:dropComet")
              }), (0, wK.jsx)("span", {
                children: yT(`buildAFactory2Game:${tA(kT)}`, {
                  distance: String(hT)
                })
              })]
            }), kT.baf2DropOwedComet && (0, wK.jsxs)(FO.v, {
              className: mT("owed", "Baf2DropComet"),
              onClick: () => {
                DT("owed")
              },
              children: [(0, wK.jsx)("strong", {
                children: yT("buildAFactory2Game:dropOwedComet")
              }), (0, wK.jsx)("span", {
                children: kT.baf2DropOwedIsotope ? yT("buildAFactory2Game:dropOwedIsotopeDescription") : yT("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== kT.baf2DropOwedWaitMinutes && (0, wK.jsxs)(FO.v, {
              className: mT("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, wK.jsx)("strong", {
                children: yT("buildAFactory2Game:dropOwedComet")
              }), (0, wK.jsx)("span", {
                children: yT("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(kT.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, wK.jsxs)(FO.e, {
              className: mT("below"),
              onClick: () => {
                DT("below")
              },
              children: [(0, wK.jsx)("strong", {
                children: yT("buildAFactory2Game:dropBelow")
              }), (0, wK.jsx)("span", {
                children: FT
              })]
            }), void 0 !== kT.baf2DropDigDistance && (0, wK.jsxs)(FO.r, {
              className: mT("dig"),
              onClick: () => {
                DT("dig")
              },
              children: [(0, wK.jsx)("strong", {
                children: yT("buildAFactory2Game:dropDig")
              }), (0, wK.jsx)("span", {
                children: yT("buildAFactory2Game:dropDigDescription", {
                  distance: String(kT.baf2DropDigDistance),
                  y: DK(kT.baf2DropDigY)
                })
              })]
            }), void 0 !== QT && (0, wK.jsxs)(FO.r, {
              className: mT("grove", "Baf2DropGrove"),
              onClick: () => {
                DT("grove")
              },
              children: [(0, wK.jsx)("strong", {
                children: yT("buildAFactory2Game:dropGrove")
              }), (0, wK.jsx)("span", {
                children: yT(`buildAFactory2Game:${rT}`, {
                  distance: String(QT)
                })
              })]
            }), (0, wK.jsxs)(FO.m, {
              className: mT("ruin"),
              disabled: null === tT,
              onClick: () => {
                DT("ruin")
              },
              children: [(0, wK.jsx)("strong", {
                children: yT("buildAFactory2Game:dropRuin")
              }), (0, wK.jsx)("span", {
                children: aT
              })]
            }), void 0 !== NT && (0, wK.jsxs)(FO.I, {
              className: mT("works"),
              onClick: () => {
                DT("works")
              },
              children: [(0, wK.jsx)("strong", {
                children: yT("buildAFactory2Game:dropOldWorks")
              }), (0, wK.jsx)("span", {
                children: yT("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(NT)
                })
              })]
            })]
          }), (0, wK.jsx)("p", {
            className: "Baf2DropRenew",
            children: yT("buildAFactory2Game:dropRenew", {
              time: PT
            })
          }), (0, wK.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: vT,
            onToggle: TT => {
              TT.currentTarget.open !== vT && jT(TT.currentTarget.open)
            },
            children: [(0, wK.jsx)("summary", {
              children: yT("buildAFactory2Game:dropSalvageWhat")
            }), (0, wK.jsx)("p", {
              children: yT("buildAFactory2Game:dropSalvageIntro")
            }), (0, wK.jsx)("ul", {
              children: AT.map((TT => {
                let {
                  item: kT,
                  nameKey: cT,
                  useKey: lT,
                  params: MT
                } = TT;
                return (0, wK.jsxs)("li", {
                  children: [(0, wK.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, wK.jsx)(JM.d, {
                      itemName: kT,
                      amount: 0
                    })
                  }), (0, wK.jsxs)("span", {
                    children: [(0, wK.jsx)("strong", {
                      children: yT(cT)
                    }), ": ", yT(lT, MT)]
                  })]
                }, kT)
              }))
            })]
          })]
        })
      })
    }
    const NA = "buildAFactory2Game:";

    function QA(TT, kT) {
      return TT.sendIslandEdit(`baf2coopleave ${kT.baf2IslandId}`)
    }

    function SA(TT) {
      let {
        card: kT,
        canRename: cT,
        done: MT,
        t: KT
      } = TT;
      const OT = LO(),
        [yT, fT] = (0, lT.useState)(kT.baf2IslandName),
        xT = rx(yT),
        IT = "" === xT || Px(xT),
        AT = () => {
          !IT && cT && (xT !== kT.baf2IslandName ? MT(OT.sendIslandEdit(`baf2islandrename ${kT.baf2IslandId} ${xT}`)) : MT(null))
        },
        CT = () => {
          MT(null)
        };
      return (0, wK.jsxs)("div", {
        className: "Baf2IslandForm",
        ...Wx(CT),
        children: [(0, wK.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [KT(`${NA}islandsRenameLabel`), (0, wK.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: yT,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: nx,
            onChange: TT => {
              fT(TT.target.value)
            },
            ...Bx(AT, CT)
          })]
        }), "" === xT && (0, wK.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: KT(`${NA}islandsRenameEmpty`)
        }), Px(xT) && (0, wK.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: KT(`${NA}islandsNameReserved`)
        }), (0, wK.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, wK.jsx)(FO.r, {
            disabled: IT || !cT,
            onClick: AT,
            children: KT(`${NA}islandsRenameSave`)
          }), (0, wK.jsx)(FO.e, {
            onClick: CT,
            children: KT(`${NA}islandsCancel`)
          })]
        })]
      })
    }

    function DA(TT) {
      let {
        card: kT,
        canDelete: cT,
        done: MT,
        t: KT
      } = TT;
      const OT = LO(),
        [yT, fT] = (0, lT.useState)(""),
        xT = function(TT, kT) {
          return rx(TT).toLowerCase() === rx(kT).toLowerCase()
        }(yT, kT.baf2IslandName),
        IT = () => {
          xT && cT && MT(OT.sendIslandEdit(`baf2islanddelete ${kT.baf2IslandId}`))
        },
        AT = () => {
          MT(null)
        },
        CT = Ex("name"),
        [jT, vT = ""] = KT(`${NA}islandsDeleteConfirm`, {
          name: CT
        }).split(CT);
      return (0, wK.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...Wx(AT),
        children: [(0, wK.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, wK.jsxs)("span", {
            children: [jT, (0, wK.jsx)("strong", {
              children: kT.baf2IslandName
            }), vT]
          }), (0, wK.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: yT,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: nx,
            onChange: TT => {
              fT(TT.target.value)
            },
            ...Bx(IT, AT)
          })]
        }), Rx(kT) && (0, wK.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: KT(`${NA}islandsDeleteLeftBack`)
        }), (0, wK.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, wK.jsx)(FO.I, {
            disabled: !xT || !cT,
            onClick: IT,
            children: KT(`${NA}islandsDeleteForGood`)
          }), (0, wK.jsx)(FO.e, {
            onClick: AT,
            children: KT(`${NA}islandsCancel`)
          })]
        })]
      })
    }

    function aA(TT) {
      let {
        members: kT,
        t: cT
      } = TT;
      const lT = kT.length;
      return (0, wK.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, wK.jsxs)("span", {
          children: [1 === lT ? cT(`${NA}islandsPlayersOne`) : cT(`${NA}islandsPlayers`, {
            count: String(lT)
          }), " "]
        }), kT.map(((TT, kT) => (0, wK.jsxs)("span", {
          className: rM()("Baf2IslandMember", {
            Here: TT.baf2MemberHere
          }),
          title: TT.baf2MemberHere ? cT(`${NA}islandsPlayerHere`) : void 0,
          children: [TT.baf2MemberName, kT < lT - 1 ? ", " : ""]
        }, TT.baf2MemberKey)))]
      })
    }

    function FA(TT) {
      let {
        card: kT,
        answered: cT,
        nowMs: MT,
        t: KT
      } = TT;
      const OT = LO(),
        [yT, fT] = (0, lT.useState)(new Map),
        xT = Rx(kT);
      if (!xT) return null;
      return (0, wK.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, wK.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: KT(`${NA}islandsLeftTitle`)
        }), (0, wK.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: xT.left.map((TT => {
            const lT = TT.baf2LeftKey,
              IT = Ux(yT.get(lT), cT, MT),
              AT = function(TT) {
                return 1 === TT ? [`${Sx}islandsLeftItemsOne`] : [`${Sx}islandsLeftItems`, {
                  count: String(TT)
                }]
              }(TT.baf2LeftItems);
            return (0, wK.jsx)("li", {
              className: rM()("Baf2IslandPerson", {
                Pending: IT
              }),
              children: (0, wK.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, wK.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: TT.baf2LeftName
                }), (0, wK.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: KT(AT[0], AT[1])
                }), xT.claim && (0, wK.jsx)(FO.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: IT,
                  onClick: () => {
                    (TT => {
                      const cT = OT.sendIslandEdit(`baf2coopclaim ${kT.baf2IslandId} ${TT}`);
                      fT((kT => new Map(kT).set(TT, {
                        atMs: Date.now(),
                        answer: cT
                      })))
                    })(lT)
                  },
                  children: KT(`${NA}islandsClaim`)
                })]
              })
            }, lT)
          }))
        }), xT.goThere && (0, wK.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: KT(`${NA}islandsClaimGoThere`)
        })]
      })
    }

    function rA(TT) {
      let {
        card: kT,
        view: cT,
        blocked: MT,
        maxIslands: KT,
        answered: OT,
        nowMs: yT,
        done: fT,
        openSocial: xT,
        t: IT
      } = TT;
      const AT = LO(),
        [CT, jT] = (0, lT.useState)(new Map),
        [vT, tT] = (0, lT.useState)(new Map),
        [hT, NT] = (0, lT.useState)(null),
        QT = (0, lT.useRef)(null);
      sx(QT);
      const ST = kT.baf2IslandId,
        DT = kT.baf2IslandCoop,
        aT = null !== DT && void 0 !== DT && DT.baf2CoopMembers.some((TT => TT.baf2MemberKey === hT)) ? hT : null,
        FT = function(TT, kT) {
          const cT = TT.baf2IslandCoop;
          return cT && gx(cT) || null !== kT ? void 0 : TT.baf2IslandInvitable
        }(kT, MT),
        rT = function(TT, kT) {
          const cT = TT.baf2IslandCoop;
          return cT && gx(cT) ? {
            key: `${Sx}islandsCoopFull`,
            params: {
              max: String(cT.baf2CoopMax)
            }
          } : void 0 !== TT.baf2IslandInvitable && null === kT || cT && !cT.baf2CoopManageHere ? null : "degraded" === kT || "stuck" === kT ? {
            key: `${Sx}islandsInviteNotLoaded`
          } : null === kT || function(TT) {
            return "notHome" === TT || "wilds" === TT || "visiting" === TT
          }(kT) || zx(kT) ? {
            key: `${Sx}islandsInviteGoThere`
          } : {
            key: `${Sx}islandsInviteBusy`
          }
        }(kT, MT),
        PT = () => {
          var TT;
          NT(null), null === (TT = QT.current) || void 0 === TT || TT.focus()
        };
      return (0, wK.jsxs)("div", {
        ref: QT,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...Wx(null === aT ? fT : PT),
        children: [DT && (0, wK.jsxs)(wK.Fragment, {
          children: [(0, wK.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: IT(`${NA}islandsPlayersTitle`, {
              count: String(DT.baf2CoopMembers.length),
              max: String(DT.baf2CoopMax)
            })
          }), (0, wK.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: DT.baf2CoopMembers.map(((TT, kT) => {
              const lT = TT.baf2MemberKey,
                MT = Ux(CT.get(lT), OT, yT);
              return (0, wK.jsxs)("li", {
                className: rM()("Baf2IslandPerson", {
                  Pending: MT
                }),
                children: [(0, wK.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, wK.jsx)("span", {
                    className: rM()("Baf2IslandPersonName", {
                      Here: TT.baf2MemberHere
                    }),
                    children: TT.baf2MemberName
                  }), TT.baf2MemberHere && (0, wK.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: IT(`${NA}islandsPlayerHere`)
                  }), 0 === kT && (0, wK.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: IT(`${NA}islandsPlayerOwner`)
                  }), cT.remove && kT > 0 && !MT && aT !== lT && (0, wK.jsx)(FO.L, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var TT;
                      NT(lT), null === (TT = QT.current) || void 0 === TT || TT.focus()
                    },
                    children: IT(`${NA}islandsRemove`)
                  })]
                }), aT === lT && (0, wK.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, wK.jsx)("p", {
                    children: Zx(IT, `${NA}islandsRemoveConfirm`, {
                      player: TT.baf2MemberName
                    })
                  }), (0, wK.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, wK.jsx)(FO.I, {
                      onClick: () => {
                        (TT => {
                          const kT = AT.sendIslandEdit(`baf2coopremove ${ST} ${TT.baf2MemberKey}`);
                          jT((cT => new Map(cT).set(TT.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: kT
                          }))), PT()
                        })(TT)
                      },
                      children: IT(`${NA}islandsRemoveYes`)
                    }), (0, wK.jsx)(FO.e, {
                      onClick: PT,
                      children: IT(`${NA}islandsCancel`)
                    })]
                  })]
                })]
              }, lT)
            }))
          })]
        }), (void 0 !== FT || null !== rT) && (0, wK.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: IT(`${NA}islandsInviteTitle`)
        }), !DT && (void 0 !== FT || null !== rT) && (0, wK.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: IT(`${NA}islandsInviteShareNote`)
        }), 0 === (null === FT || void 0 === FT ? void 0 : FT.length) && (0, wK.jsx)(PA, {
          openSocial: xT,
          t: IT
        }), void 0 !== FT && FT.length > 0 && (0, wK.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: FT.map((TT => {
            const kT = !0 === TT.baf2InvitableSent || Ux(vT.get(TT.baf2InvitableId), OT, yT);
            return (0, wK.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, wK.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, wK.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: TT.baf2InvitableName
                }), TT.baf2InvitableFull && !kT && (0, wK.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: IT(`${NA}islandsInviteTheirFull`, {
                    max: String(KT)
                  })
                }), (kT || !TT.baf2InvitableFull) && (0, wK.jsx)(FO.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: kT,
                  onClick: () => {
                    (TT => {
                      const kT = AT.sendIslandEdit(`baf2coopinvite ${ST} ${TT}`);
                      tT((cT => new Map(cT).set(TT, {
                        atMs: Date.now(),
                        answer: kT
                      })))
                    })(TT.baf2InvitableId)
                  },
                  children: IT(kT ? `${NA}islandsInvited` : `${NA}islandsInvite`)
                })]
              })
            }, TT.baf2InvitableId)
          }))
        }), rT && (0, wK.jsx)(cI, {
          note: rT,
          t: IT
        }), (0, wK.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, wK.jsx)(FO.e, {
            onClick: fT,
            children: IT(`${NA}islandsDone`)
          })
        })]
      })
    }

    function PA(TT) {
      let {
        openSocial: kT,
        t: cT
      } = TT;
      return (0, wK.jsxs)(wK.Fragment, {
        children: [(0, wK.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: cT(kT ? `${NA}islandsInviteNobody` : `${NA}islandsInviteNobodyGuest`)
        }), kT && (0, wK.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, wK.jsx)(FO.e, {
            onClick: kT,
            children: cT("socialBar:social")
          })
        })]
      })
    }

    function wA(TT) {
      let {
        className: kT,
        text: cT,
        ConfirmButton: MT,
        confirmLabel: KT,
        canConfirm: OT,
        send: yT,
        done: fT,
        t: xT
      } = TT;
      const IT = (0, lT.useRef)(null);
      sx(IT);
      const AT = () => {
        fT(null)
      };
      return (0, wK.jsxs)("div", {
        ref: IT,
        tabIndex: -1,
        className: rM()("Baf2IslandForm", kT),
        ...Wx(AT),
        children: [(0, wK.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: cT
        }), (0, wK.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, wK.jsx)(MT, {
            disabled: !OT,
            onClick: () => {
              OT && fT(yT())
            },
            children: KT
          }), (0, wK.jsx)(FO.e, {
            onClick: AT,
            children: xT(`${NA}islandsCancel`)
          })]
        })]
      })
    }

    function mA(TT) {
      return "hidden" !== TT
    }

    function bA(TT) {
      var kT, cT;
      let {
        card: MT,
        keepOwn: KT,
        blocked: OT,
        maxIslands: yT,
        serverNowMs: fT,
        nowMs: xT,
        actions: IT,
        full: AT,
        waits: CT,
        answered: jT,
        mode: vT,
        setMode: tT,
        pending: hT,
        onSent: NT,
        switchTo: QT,
        leave: ST,
        coopOn: DT,
        openSocial: aT,
        t: FT
      } = TT;
      const rT = LO(),
        PT = MT.baf2IslandActive,
        wT = PT ? null : function(TT, kT) {
          if (TT <= 0) return null;
          const cT = kT - TT;
          if (cT < hK) return [`${Sx}islandsPlayedJustNow`];
          if (cT < Dx) return [`${Sx}islandsPlayedMinutes`, {
            minutes: String(Math.floor(cT / hK))
          }];
          if (cT < ax) return [`${Sx}islandsPlayedHours`, {
            hours: String(Math.floor(cT / Dx))
          }];
          const lT = Math.floor(cT / ax);
          return 1 === lT ? [`${Sx}islandsPlayedDay`] : [`${Sx}islandsPlayedDays`, {
            days: String(lT)
          }]
        }(MT.baf2IslandLastPlayedMs, fT),
        mT = void 0 === (bT = MT.baf2IslandItems) ? null : 0 === bT ? [`${Sx}islandsItemsNone`] : 1 === bT ? [`${Sx}islandsItemsOne`] : [`${Sx}islandsItems`, {
          count: String(bT)
        }];
      var bT;
      const zT = function(TT) {
          return TT ? 1 === TT ? [`${Sx}islandsWaitingOne`] : [`${Sx}islandsWaiting`, {
            count: String(TT)
          }] : null
        }(MT.baf2IslandWaiting),
        JT = MT.baf2IslandUnreadable,
        oT = MT.baf2IslandCoop,
        HT = Lx(MT, IT, KT, AT, DT, OT),
        eT = (0, lT.useRef)(null);
      px(null !== vT, eT);
      const GT = () => {
          var TT;
          tT(null), null === (TT = eT.current) || void 0 === TT || TT.focus()
        },
        VT = (TT, kT) => {
          GT(), null !== TT && NT(TT, kT)
        },
        ET = (TT, kT) => FT(`${NA}${TT}`, {
          time: aK(FT, kT)
        });
      return (0, wK.jsxs)("li", {
        ref: eT,
        tabIndex: -1,
        className: rM()("Baf2IslandCard", {
          Active: PT,
          Pending: hT,
          Shared: void 0 !== oT
        }),
        children: [(0, wK.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, wK.jsx)("strong", {
            className: "Baf2IslandName",
            children: MT.baf2IslandName
          }), PT && (0, wK.jsx)("span", {
            className: "Baf2IslandBadge",
            children: FT(`${NA}islandsOnThis`)
          }), oT && (0, wK.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: FT(`${NA}islandsShared`)
          })]
        }), "member" === (null === oT || void 0 === oT ? void 0 : oT.baf2CoopRole) && (0, wK.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Zx(FT, `${NA}islandsSharedBy`, {
            owner: oT.baf2CoopOwner
          })
        }), void 0 !== JT && (0, wK.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: FT("newer" === JT ? `${NA}islandsUnreadable` : `${NA}islandsDamaged`)
        }), "corrupt" === JT && AT && (0, wK.jsx)("p", {
          className: "Baf2IslandStats",
          children: FT(`${NA}islandsDamagedFull`)
        }), void 0 === JT && (0, wK.jsxs)(wK.Fragment, {
          children: [(0, wK.jsx)(kI, {
            tier: MT.baf2IslandTier,
            t: FT
          }), (0, wK.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, wK.jsx)("span", {
              children: 1 === MT.baf2IslandQuestsDone ? FT(`${NA}islandsQuestsDoneOne`) : FT(`${NA}islandsQuestsDone`, {
                count: String(MT.baf2IslandQuestsDone)
              })
            }), (0, wK.jsx)("span", {
              children: 1 === MT.baf2IslandMachines ? FT(`${NA}islandsMachinesOne`) : FT(`${NA}islandsMachines`, {
                count: String(MT.baf2IslandMachines)
              })
            }), mT && (0, wK.jsx)("span", {
              children: FT(mT[0], mT[1])
            }), zT && (0, wK.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: FT(zT[0], zT[1])
            }), wT && (0, wK.jsx)("span", {
              children: FT(wT[0], wT[1])
            })]
          })]
        }), oT && void 0 === oT.baf2CoopState && "people" !== vT && (0, wK.jsx)(aA, {
          members: oT.baf2CoopMembers,
          t: FT
        }), null === vT && (0, wK.jsx)(FA, {
          card: MT,
          answered: jT,
          nowMs: xT,
          t: FT
        }), HT.note && (0, wK.jsx)(cI, {
          note: HT.note,
          className: rM()({
            Unreachable: void 0 !== (null === oT || void 0 === oT ? void 0 : oT.baf2CoopState)
          }),
          t: FT
        }), "rename" === vT && (0, wK.jsx)(SA, {
          card: MT,
          canRename: "enabled" === HT.rename,
          done: VT,
          t: FT
        }), "delete" === vT && (0, wK.jsx)(DA, {
          card: MT,
          canDelete: "enabled" === HT.delete,
          done: TT => {
            VT(TT, oT ? "delete" : void 0)
          },
          t: FT
        }), "people" === vT && (0, wK.jsx)(rA, {
          card: MT,
          view: HT,
          blocked: OT,
          maxIslands: yT,
          answered: jT,
          nowMs: xT,
          done: GT,
          openSocial: aT,
          t: FT
        }), "leave" === vT && (0, wK.jsx)(wA, {
          className: "Leave",
          text: Zx(FT, `${NA}islandsLeaveConfirm`, {
            island: MT.baf2IslandName,
            owner: null !== (kT = null === (cT = MT.baf2IslandCoop) || void 0 === cT ? void 0 : cT.baf2CoopOwner) && void 0 !== kT ? kT : ""
          }),
          ConfirmButton: FO.I,
          confirmLabel: FT(`${NA}islandsLeaveYes`),
          canConfirm: "enabled" === HT.leave,
          send: () => QA(rT, MT),
          done: TT => {
            VT(TT, "leave"), null !== TT && PT && ST()
          },
          t: FT
        }), "unshare" === vT && (0, wK.jsx)(wA, {
          className: "Unshare",
          text: Zx(FT, `${NA}islandsStopSharingConfirm`, {
            island: MT.baf2IslandName
          }),
          ConfirmButton: FO.r,
          confirmLabel: FT(`${NA}islandsStopSharing`),
          canConfirm: "enabled" === HT.unshare,
          send: () => rT.sendIslandEdit(`baf2coopunshare ${MT.baf2IslandId}`),
          done: TT => {
            VT(TT), null !== TT && ST()
          },
          t: FT
        }), null === vT && !hT && (0, wK.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": MT.baf2IslandName,
          children: [mA(HT.switch) && (0, wK.jsx)(FO.r, {
            disabled: "enabled" !== HT.switch,
            onClick: QT,
            children: "tryAgain" === HT.switchLabel ? FT(`${NA}islandsTryAgain`) : CT.switch > 0 ? ET("islandsSwitchIn", CT.switch) : FT(`${NA}islandsSwitch`)
          }), mA(HT.rename) && (0, wK.jsx)(FO.e, {
            disabled: "enabled" !== HT.rename,
            onClick: () => {
              tT("rename")
            },
            children: FT(`${NA}islandsRename`)
          }), mA(HT.people) && (0, wK.jsx)(FO.e, {
            disabled: "enabled" !== HT.people,
            onClick: () => {
              tT("people")
            },
            children: FT("players" === HT.peopleLabel ? `${NA}islandsPlayersButton` : `${NA}islandsInviteButton`)
          }), mA(HT.unshare) && (0, wK.jsx)(FO.e, {
            disabled: "enabled" !== HT.unshare,
            onClick: () => {
              tT("unshare")
            },
            children: FT(`${NA}islandsStopSharing`)
          }), mA(HT.dismiss) && (0, wK.jsx)(FO.e, {
            disabled: "enabled" !== HT.dismiss,
            onClick: () => {
              NT(QA(rT, MT), "dismiss"), PT && ST()
            },
            children: FT(`${NA}islandsDismiss`)
          }), mA(HT.leave) && (0, wK.jsx)(FO.L, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== HT.leave,
            onClick: () => {
              tT("leave")
            },
            children: PT && CT.switch > 0 ? ET("islandsLeaveIn", CT.switch) : FT(`${NA}islandsLeave`)
          }), mA(HT.delete) && (0, wK.jsx)(FO.L, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== HT.delete,
            onClick: () => {
              tT("delete")
            },
            children: CT.change > 0 && HT.deleteWaits ? ET("islandsDeleteIn", CT.change) : FT(`${NA}islandsDelete`)
          })]
        })]
      })
    }
    const zA = "buildAFactory2Game:";

    function JA(TT) {
      let {
        invite: kT,
        actions: cT,
        full: MT,
        maxIslands: KT,
        waitSeconds: OT,
        focus: yT,
        focused: fT,
        join: xT,
        decline: IT,
        t: AT
      } = TT;
      const [CT, jT] = (0, lT.useState)(!1), vT = (0, lT.useRef)(null);
      px(CT, vT), (0, lT.useEffect)((() => {
        var TT;
        yT && (jT(!0), null === (TT = vT.current) || void 0 === TT || TT.focus(), fT())
      }), [yT, fT]);
      const tT = function(TT, kT, cT, lT, MT) {
          return cT ? {
            join: !1,
            note: {
              key: `${Sx}islandsJoinTooMany`,
              params: {
                max: String(lT)
              }
            }
          } : TT.baf2InvitePlayers >= MT ? {
            join: !1,
            note: {
              key: `${Sx}islandsJoinFull`
            }
          } : {
            join: kT.switch,
            note: null
          }
        }(kT, cT, MT, KT, 10),
        hT = kT.baf2InviteIsland,
        NT = kT.baf2InvitePlayers,
        QT = () => {
          var TT;
          jT(!1), null === (TT = vT.current) || void 0 === TT || TT.focus()
        },
        ST = OT > 0 && null === tT.note ? AT(`${zA}islandsJoinIn`, {
          time: aK(AT, OT)
        }) : AT(`${zA}islandsJoin`);
      return (0, wK.jsxs)("li", {
        ref: vT,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...CT ? Wx(QT) : {},
        children: [(0, wK.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, wK.jsx)("strong", {
            className: "Baf2IslandName",
            children: hT
          })
        }), (0, wK.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Zx(AT, `${zA}islandsInvitedBy`, {
            owner: kT.baf2InviteOwner
          })
        }), (0, wK.jsx)(kI, {
          tier: kT.baf2InviteTier,
          t: AT
        }), (0, wK.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, wK.jsx)("span", {
            children: 1 === NT ? AT(`${zA}islandsPlayersCountOne`) : AT(`${zA}islandsPlayersCount`, {
              count: String(NT)
            })
          })
        }), tT.note && (0, wK.jsx)(cI, {
          note: tT.note,
          t: AT
        }), CT && (0, wK.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Zx(AT, `${zA}islandsJoinConfirm`, {
            island: hT
          })
        }), !CT && (0, wK.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": hT,
          children: [(0, wK.jsx)(FO.r, {
            disabled: !tT.join,
            onClick: () => {
              var TT;
              jT(!0), null === (TT = vT.current) || void 0 === TT || TT.focus()
            },
            children: ST
          }), (0, wK.jsx)(FO.e, {
            onClick: IT,
            children: AT(`${zA}islandsDecline`)
          })]
        }), CT && (0, wK.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, wK.jsx)(FO.r, {
            disabled: !tT.join,
            onClick: xT,
            children: AT(`${zA}islandsJoinYes`)
          }), (0, wK.jsx)(FO.e, {
            onClick: QT,
            children: AT(`${zA}islandsCancel`)
          })]
        })]
      })
    }

    function oA(TT) {
      let {
        invites: kT,
        actions: cT,
        full: lT,
        maxIslands: MT,
        waitSeconds: KT,
        focus: OT,
        focused: yT,
        leave: fT,
        declined: xT,
        t: IT
      } = TT;
      const AT = LO();
      return (0, wK.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, wK.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: IT(`${zA}islandsInvitesTitle`)
        }), (0, wK.jsx)("ul", {
          className: "Baf2IslandCards",
          children: kT.map((TT => {
            const kT = TT.baf2InviteId;
            return (0, wK.jsx)(JA, {
              invite: TT,
              actions: cT,
              full: lT,
              maxIslands: MT,
              waitSeconds: KT,
              focus: OT === kT,
              focused: yT,
              join: () => {
                AT.send(`baf2coopaccept ${kT}`), fT()
              },
              decline: () => {
                AT.send(`baf2coopdecline ${kT}`), xT(kT)
              },
              t: IT
            }, kT)
          }))
        })]
      })
    }
    const HA = "buildAFactory2Game:";

    function eA(TT) {
      let {
        cards: kT,
        activeName: cT,
        canStart: MT,
        waitSeconds: KT,
        leave: OT,
        t: yT
      } = TT;
      const fT = LO(),
        [xT, IT] = (0, lT.useState)(!1),
        [AT, CT] = (0, lT.useState)(""),
        jT = (0, lT.useRef)(null);
      px(xT, jT), (0, lT.useEffect)((() => {
        var TT;
        xT && (null === (TT = jT.current) || void 0 === TT || TT.focus())
      }), [xT]);
      const vT = wx(kT),
        tT = rx(AT),
        hT = Px(tT),
        NT = () => {
          MT && !hT && (fT.send("" === tT || tT === vT ? nT : `${nT} ${tT}`), OT())
        },
        QT = () => {
          var TT;
          IT(!1), null === (TT = jT.current) || void 0 === TT || TT.focus()
        };
      return (0, wK.jsxs)("li", {
        ref: jT,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...xT ? Wx(QT) : {},
        children: [(0, wK.jsx)("strong", {
          className: "Baf2IslandName",
          children: yT(`${HA}islandsNewTitle`)
        }), !xT && (0, wK.jsx)("p", {
          className: "Baf2IslandStats",
          children: yT(`${HA}islandsNewNote`)
        }), xT && (0, wK.jsxs)(wK.Fragment, {
          children: [(0, wK.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Zx(yT, `${HA}islandsNewConfirm`, {
              name: cT
            })
          }), (0, wK.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [yT(`${HA}islandsNewNameLabel`), (0, wK.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: AT,
              placeholder: vT,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: nx,
              onChange: TT => {
                CT(TT.target.value)
              },
              ...Bx(NT, QT)
            })]
          }), hT && (0, wK.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: yT(`${HA}islandsNameReserved`)
          })]
        }), (0, wK.jsxs)("div", {
          className: rM()("Baf2IslandButtons", {
            Stacked: xT
          }),
          children: [(0, wK.jsx)(FO.r, {
            disabled: !MT || xT && hT,
            onClick: () => {
              if (!xT) return CT(vT), void IT(!0);
              NT()
            },
            children: KT > 0 ? yT(`${HA}islandsNewIn`, {
              time: aK(yT, KT)
            }) : yT(xT ? `${HA}islandsNewConfirmButton` : `${HA}islandsNew`)
          }), xT && (0, wK.jsx)(FO.e, {
            onClick: QT,
            children: yT(`${HA}islandsCancel`)
          })]
        })]
      })
    }

    function GA(TT) {
      var kT, cT;
      let {
        message: MT,
        arrivedAtMs: KT,
        close: OT,
        leave: yT,
        openSocial: fT
      } = TT;
      const xT = LO(),
        {
          t: IT
        } = (0, bM.B)(),
        AT = TI(1e3),
        [CT, jT] = (0, lT.useState)(null),
        [vT, tT] = (0, lT.useState)(new Map),
        [hT, NT] = (0, lT.useState)(new Set),
        QT = MT.baf2IslandCards,
        ST = function(TT, kT, cT, lT) {
          return (null !== TT && void 0 !== TT ? TT : []).filter((TT => kT + TT.baf2InviteLeftMs > cT && !lT.has(TT.baf2InviteId)))
        }(MT.baf2IslandsInvites, KT, AT, hT),
        DT = ST.map((TT => TT.baf2InviteId)).join(" "),
        aT = (0, lT.useRef)(null),
        FT = ix(aT);
      qx(), (0, lT.useEffect)((() => {
        var TT, kT;
        null !== (TT = aT.current) && void 0 !== TT && TT.contains(document.activeElement) || (null === (kT = aT.current) || void 0 === kT || kT.focus())
      }), [MT, DT]), (0, lT.useEffect)((() => {
        tT((TT => function(TT, kT, cT, lT) {
          const MT = new Map;
          for (const KT of kT) {
            const kT = TT.get(KT.baf2IslandId);
            kT && (void 0 !== kT.untilGone || lT < kT.answer) && ex(kT, KT, cT) && MT.set(KT.baf2IslandId, kT)
          }
          return MT.size === TT.size ? TT : MT
        }(TT, MT.baf2IslandCards, Date.now(), MT.baf2IslandsAnswered)))
      }), [MT]);
      const rT = Fx(KT, MT.baf2IslandsWaitMs, AT),
        PT = MT.baf2IslandsBlocked,
        wT = Jx(PT, rT),
        mT = function(TT, kT) {
          const cT = Jx(TT, 0);
          return {
            switch: cT.switch ? kT : 0,
            change: cT.change ? kT : 0
          }
        }(PT, rT),
        bT = QT.length >= MT.baf2IslandsMax,
        zT = QT.length > 0,
        JT = function(TT, kT, cT) {
          return TT + Math.max(0, cT - kT)
        }(MT.baf2IslandsNowMs, KT, AT),
        oT = null !== (kT = null === (cT = QT.find((TT => TT.baf2IslandActive))) || void 0 === cT ? void 0 : cT.baf2IslandName) && void 0 !== kT ? kT : "",
        HT = function(TT) {
          const kT = TT.filter(dx).length;
          return kT <= 1 && kT < TT.length
        }(QT),
        eT = !0 === MT.baf2IslandsCoop,
        GT = function(TT, kT) {
          const cT = TT.find((TT => TT.baf2IslandActive)),
            lT = null === cT || void 0 === cT ? void 0 : cT.baf2IslandCoop;
          return cT && "member" === (null === lT || void 0 === lT ? void 0 : lT.baf2CoopRole) ? {
            key: `${Sx}islandsKeepOwnMember`,
            names: {
              owner: lT.baf2CoopOwner,
              island: cT.baf2IslandName
            }
          } : {
            key: kT ? `${Sx}islandsKeepOwn` : `${Sx}islandsKeepOwnSolo`
          }
        }(QT, eT),
        [VT, ET] = (0, lT.useState)(null);
      (0, lT.useEffect)((() => {
        void 0 !== MT.baf2IslandsFocusInvite && ET(MT.baf2IslandsFocusInvite)
      }), [MT]);
      const ZT = (0, lT.useCallback)((() => {
          ET(null)
        }), []),
        uT = CT ? QT.find((TT => TT.baf2IslandId === CT.id)) : void 0,
        XT = CT && uT && "hidden" !== Lx(uT, wT, HT, bT, eT, PT)[CT.mode] ? CT : null;
      return (0, wK.jsx)(aO.c, {
        close: OT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, wK.jsxs)("section", {
          ref: aT,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: FT ? {
            marginTop: `${FT.marginTop}px`,
            maxHeight: `${FT.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, wK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, wK.jsxs)("div", {
              children: [(0, wK.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: IT(`${HA}islandsTitle`)
              }), zT && (0, wK.jsx)("p", {
                children: IT(`${HA}islandsSubtitle`, {
                  count: String(QT.length),
                  max: String(MT.baf2IslandsMax)
                })
              })]
            }), (0, wK.jsx)(FO.l, {
              ariaLabel: IT(`${HA}islandsClose`),
              onClick: OT
            })]
          }), (0, wK.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== PT && (0, wK.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Zx(IT, mx(PT, bx(QT)), {
                island: oT
              })
            }), zT && ST.length > 0 && (0, wK.jsx)(oA, {
              invites: ST,
              actions: wT,
              full: bT,
              maxIslands: MT.baf2IslandsMax,
              waitSeconds: mT.switch,
              focus: VT,
              focused: ZT,
              leave: yT,
              declined: TT => {
                NT((kT => new Set(kT).add(TT)))
              },
              t: IT
            }), zT && (0, wK.jsxs)(wK.Fragment, {
              children: [bT && (0, wK.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: IT(`${HA}islandsFull`, {
                  max: String(MT.baf2IslandsMax)
                })
              }), (0, wK.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Zx(IT, GT.key, GT.names)
              }), (0, wK.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [QT.map((TT => {
                  const kT = TT.baf2IslandId;
                  return (0, wK.jsx)(bA, {
                    card: TT,
                    keepOwn: HT,
                    coopOn: eT,
                    openSocial: fT,
                    blocked: PT,
                    maxIslands: MT.baf2IslandsMax,
                    serverNowMs: JT,
                    nowMs: AT,
                    actions: wT,
                    full: bT,
                    waits: mT,
                    answered: MT.baf2IslandsAnswered,
                    mode: (null === XT || void 0 === XT ? void 0 : XT.id) === kT ? XT.mode : null,
                    setMode: TT => {
                      jT(null === TT ? null : {
                        id: kT,
                        mode: TT
                      })
                    },
                    pending: ex(vT.get(kT), TT, AT),
                    onSent: (cT, lT) => {
                      tT((MT => {
                        const KT = {
                          atMs: Date.now(),
                          from: TT.baf2IslandName,
                          answer: cT
                        };
                        return new Map(MT).set(kT, lT ? {
                          ...KT,
                          untilGone: lT
                        } : KT)
                      }))
                    },
                    leave: yT,
                    switchTo: () => {
                      xT.send(`baf2islandswitch ${kT}`), yT()
                    },
                    t: IT
                  }, kT)
                })), !bT && (0, wK.jsx)(eA, {
                  cards: QT,
                  activeName: oT,
                  canStart: wT.change,
                  waitSeconds: mT.change,
                  leave: yT,
                  t: IT
                })]
              })]
            })]
          })]
        })
      })
    }
    var VA = cT(4968);
    const EA = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        FK: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      ZA = Object.keys(EA),
      uA = new Set([...Object.keys(pk), ...[...Vk.Press.recipes, ...Vk["Wire Mill"].recipes].map((TT => TT.output))]),
      XA = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      dA = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      LA = / Bar$|Alloy$/,
      RA = /Porkchop|Beef|Mutton|Venison|Steak/,
      gA = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const UA = (0, lT.memo)((function(TT) {
      let {
        item: kT,
        name: cT,
        amount: lT,
        selected: MT,
        small: KT,
        onPick: OT
      } = TT;
      return (0, wK.jsxs)("button", {
        type: "button",
        className: rM()("Baf2TermTile", {
          On: MT,
          Small: KT
        }),
        "aria-label": `${cT}: ${lT}`,
        "aria-pressed": MT,
        onClick: () => {
          OT(kT)
        },
        children: [(0, wK.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, wK.jsx)(JM.d, {
            itemName: kT,
            amount: 0
          })
        }), (0, wK.jsx)("span", {
          className: "Baf2TermCount",
          children: SK(lT, 1e4)
        }), !KT && (0, wK.jsx)("span", {
          className: "Baf2TermName",
          children: cT
        })]
      })
    }));

    function YA(TT) {
      let {
        store: kT,
        close: cT,
        send: MT
      } = TT;
      const {
        t: KT
      } = (0, bM.B)(), {
        isTouchScreen: OT
      } = (0, DM.n)(["isTouchScreen"]);
      ! function(TT) {
        const [kT, cT] = (0, lT.useState)(TT.version);
        (0, lT.useEffect)((() => (cT(TT.version), TT.subscribe((() => {
          cT(TT.version)
        })))), [TT])
      }(kT);
      const [yT, fT] = (0, lT.useState)("all"), [xT, IT] = (0, lT.useState)(!1), [AT, CT] = (0, lT.useState)(""), [jT, vT] = (0, lT.useState)(""), [tT, hT] = (0, lT.useState)(null), [NT, QT] = (0, lT.useState)(!1), [ST, DT, aT] = function() {
        const TT = (0, lT.useRef)(null),
          [kT, cT] = (0, lT.useState)(!1),
          MT = () => {
            const kT = TT.current;
            cT(null !== kT && kT.scrollLeft + kT.clientWidth < kT.scrollWidth - 1)
          };
        return (0, lT.useEffect)(MT), (0, lT.useEffect)((() => {
          const kT = TT.current;
          if (!kT) return;
          const cT = new ResizeObserver(MT);
          return cT.observe(kT), () => {
            cT.disconnect()
          }
        }), []), [TT, kT, MT]
      }(), FT = (0, lT.useMemo)((() => new Map), [KT]), rT = TT => {
        let kT = FT.get(TT);
        return void 0 === kT && (kT = function(TT, kT) {
          const cT = /^(.+) \((.+)\)$/.exec(TT);
          return cT ? kT(cT[2], cT[1]) : TT
        }(MK(KT, TT), ((TT, kT) => KT("buildAFactory2Game:terminalTileKind", {
          kind: TT,
          base: kT
        }))), FT.set(TT, kT)), kT
      }, PT = kT.isReadOnly(), wT = NT && !PT, mT = kT.recent(), bT = kT.items(), zT = jT.trim().toLowerCase(), JT = wT ? kT.heldItems(tT) : ("recent" === yT ? mT : bT).filter((TT => {
        const kT = rT(TT);
        return ("all" === yT || "recent" === yT || function(TT) {
          return CK(TT) ? "farm" : XA.test(TT) ? "nuclear" : LA.test(TT) ? "bars" : RA.test(TT) ? "farm" : dA.test(TT) ? "FK" : uA.has(TT) ? "parts" : gA.test(TT) ? "farm" : "other"
        }(TT) === yT) && ("" === zT || kT.toLowerCase().includes(zT)) && ("" === AT || kT.toUpperCase().startsWith(AT))
      })), oT = new Set(bT.map((TT => rT(TT).charAt(0).toUpperCase()))), HT = TT => wT ? kT.heldAmount(TT) : kT.amount(TT), eT = !wT && "recent" !== yT && mT.length > 0, GT = function(TT, kT) {
        return null !== TT && kT.includes(TT) ? TT : null
      }(tT, eT ? [...JT, ...mT] : JT), VT = null === GT ? 0 : kT.amount(GT), ET = null === GT ? 0 : HT(GT), ZT = (0, lT.useCallback)((TT => {
        hT((kT => kT === TT ? null : TT))
      }), []), uT = TT => ET > 0 || wT && null === GT && "fill" === TT && JT.length > 0, XT = wT ? [
        ["one", KT("buildAFactory2Game:terminalStoreOne")],
        ["stack", KT("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", KT(null === GT ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", KT("buildAFactory2Game:terminalTakeOne")],
        ["stack", KT("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", KT("buildAFactory2Game:terminalFill")]
      ], dT = wT ? KT("buildAFactory2Game:terminalStoreEmpty") : "" !== AT ? KT("buildAFactory2Game:terminalEmptyLetter", {
        letter: AT
      }) : "" !== zT ? KT("buildAFactory2Game:terminalEmptySearch", {
        query: jT
      }) : KT("buildAFactory2Game:terminalEmpty");
      return (0, wK.jsx)(aO.c, {
        close: cT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, wK.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, wK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, wK.jsxs)("div", {
              children: [(0, wK.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: KT(kT.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, wK.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, wK.jsx)("span", {
                  className: rM()({
                    Off: wT
                  }),
                  children: KT("buildAFactory2Game:terminalSubtitle", {
                    count: String(kT.siloCount())
                  })
                }), !PT && (0, wK.jsx)("span", {
                  className: rM()({
                    Off: !wT
                  }),
                  children: KT("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !PT && (0, wK.jsx)(VA.d, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: KT("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: KT("buildAFactory2Game:terminalModeStore")
              }],
              value: wT ? "store" : "take",
              onChange: TT => {
                QT("store" === TT), hT(null)
              },
              ariaLabel: KT("buildAFactory2Game:terminalModes")
            }), (0, wK.jsx)(FO.l, {
              onClick: cT
            })]
          }), (0, wK.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, wK.jsxs)("div", {
              className: rM()("Baf2TermTools", {
                Hidden: wT
              }),
              children: [(0, wK.jsx)("div", {
                ref: ST,
                className: rM()("Baf2TermChips", {
                  MoreRight: DT
                }),
                onScroll: aT,
                children: xT ? (0, wK.jsxs)(wK.Fragment, {
                  children: [(0, wK.jsx)("button", {
                    type: "button",
                    "aria-label": KT("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      IT(!1), CT("")
                    },
                    children: "\u2190"
                  }), [...oT].sort().map((TT => (0, wK.jsx)("button", {
                    type: "button",
                    className: rM()({
                      On: AT === TT
                    }),
                    onClick: () => {
                      CT(AT === TT ? "" : TT)
                    },
                    children: TT
                  }, TT)))]
                }) : (0, wK.jsxs)(wK.Fragment, {
                  children: [(0, wK.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      IT(!0)
                    },
                    children: KT("buildAFactory2Game:terminalLetters")
                  }), ZA.map((TT => (0, wK.jsx)("button", {
                    type: "button",
                    className: rM()({
                      On: yT === TT
                    }),
                    onClick: () => {
                      fT(TT)
                    },
                    children: KT(EA[TT])
                  }, TT)))]
                })
              }), !OT && (0, wK.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: jT,
                placeholder: KT("buildAFactory2Game:terminalSearch"),
                "aria-label": KT("buildAFactory2Game:terminalSearch"),
                onChange: TT => {
                  vT(TT.target.value)
                },
                onKeyDown: TT => {
                  TT.stopPropagation()
                }
              }), (0, wK.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": KT("buildAFactory2Game:terminalResort"),
                title: KT("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  kT.resort()
                },
                children: "\u21c5"
              })]
            }), eT && (0, wK.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, wK.jsx)("span", {
                children: KT(EA.recent)
              }), mT.map((TT => (0, wK.jsx)(UA, {
                item: TT,
                name: rT(TT),
                amount: kT.amount(TT),
                selected: GT === TT,
                small: !0,
                onPick: ZT
              }, TT)))]
            }), (0, wK.jsx)("div", {
              className: "Baf2TermTiles",
              children: JT.length > 0 ? JT.map((TT => (0, wK.jsx)(UA, {
                item: TT,
                name: rT(TT),
                amount: HT(TT),
                selected: GT === TT,
                onPick: ZT
              }, TT))) : (0, wK.jsx)("p", {
                className: "Baf2TermEmpty",
                children: dT
              })
            }), (0, wK.jsxs)("div", {
              className: rM()("Baf2TermActions", {
                Hidden: wT && 0 === JT.length
              }),
              children: [(0, wK.jsx)("span", {
                className: "Baf2TermPicked",
                children: PT ? (0, wK.jsxs)(wK.Fragment, {
                  children: [null !== GT && VT > 0 ? rT(GT) : KT("buildAFactory2Game:terminalVisiting"), (0, wK.jsx)("small", {
                    children: KT("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== GT ? (0, wK.jsxs)(wK.Fragment, {
                  children: [rT(GT), (0, wK.jsx)("small", {
                    children: KT("buildAFactory2Game:terminalStored", {
                      amount: VT.toLocaleString()
                    })
                  })]
                }) : KT(wT ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !PT && XT.map((TT => {
                let [cT, lT] = TT;
                const KT = "fill" === cT ? FO.m : FO.e;
                return (0, wK.jsx)(KT, {
                  className: "Baf2TermTake",
                  disabled: !uT(cT),
                  onClick: () => {
                    (TT => {
                      uT(TT) && MT(null === GT ? kT.putAll() : wT ? kT.put(TT, GT) : kT.take(TT, GT))
                    })(cT)
                  },
                  children: lT
                }, cT)
              }))]
            })]
          })]
        })
      })
    }

    function BA(TT) {
      let {
        kind: kT,
        icon: cT,
        label: lT,
        number: MT,
        preview: KT,
        note: OT,
        tone: yT = null,
        share: fT,
        onExplain: xT
      } = TT;
      return (0, wK.jsxs)("button", {
        type: "button",
        className: rM()("NxLane", kT, {
          Warn: "warn" === yT,
          Danger: "danger" === yT
        }),
        onClick: xT,
        children: [(0, wK.jsxs)("span", {
          className: "NxLaneHead",
          children: [cT, (0, wK.jsx)("span", {
            className: "NxLaneLabel",
            children: lT
          })]
        }), (0, wK.jsxs)("span", {
          className: "NxLaneNum",
          children: [MT, KT && (0, wK.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", KT]
          })]
        }), (0, wK.jsx)("span", {
          className: "NxLaneNote",
          children: OT
        }), void 0 !== fT && (0, wK.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, fT)) + "%"
          }
        })]
      })
    }

    function WA(TT) {
      let {
        kind: kT,
        step: cT,
        short: lT,
        planned: MT
      } = TT;
      return (0, wK.jsx)("i", {
        className: rM()("NxPipe", kT, `Step${cT}`, {
          Short: lT,
          Planned: MT
        }),
        "aria-hidden": "true"
      })
    }

    function nA(TT) {
      let {
        max: kT,
        bands: cT,
        ticks: lT,
        now: MT,
        settle: KT,
        settleTone: OT,
        onExplain: yT
      } = TT;
      const fT = TT => Math.max(0, Math.min(kT, TT)) / kT * 100 + "%";
      let xT = 0;
      return (0, wK.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: yT,
        children: [(0, wK.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [cT.map((TT => {
            const kT = {
              bottom: fT(xT),
              height: `calc(${fT(TT.upTo)} - ${fT(xT)})`
            };
            return xT = TT.upTo, (0, wK.jsx)("i", {
              className: rM()("NxGaugeBand", TT.kind),
              style: kT
            }, TT.kind)
          })), null !== MT && (0, wK.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: fT(MT)
            }
          }), void 0 !== KT && null !== KT && (0, wK.jsx)("i", {
            className: rM()("NxGaugeSettle", {
              Bad: "bad" === OT
            }),
            style: {
              bottom: fT(KT)
            }
          })]
        }), (0, wK.jsx)("span", {
          className: "NxGaugeTicks",
          children: lT.map((TT => (0, wK.jsx)("small", {
            style: {
              bottom: fT(TT)
            },
            children: TT
          }, TT)))
        })]
      })
    }

    function pA(TT) {
      const [kT, cT] = (0, lT.useState)(null), [MT, KT] = (0, lT.useState)((() => {
        try {
          return null === window.localStorage.getItem(TT)
        } catch {
          return !1
        }
      })), OT = (0, lT.useRef)(null);
      (0, lT.useEffect)((() => () => {
        null !== OT.current && clearTimeout(OT.current)
      }), []);
      const yT = (0, lT.useCallback)((kT => {
          cT(kT), KT(!1);
          try {
            window.localStorage.setItem(TT, "1")
          } catch {}
          null !== OT.current && clearTimeout(OT.current), OT.current = setTimeout((() => {
            OT.current = null, cT(null)
          }), 5e3)
        }), [TT]),
        fT = (0, lT.useCallback)(((kT, cT) => {
          const lT = `${TT}:${kT}`;
          try {
            if (null !== window.localStorage.getItem(lT)) return;
            window.localStorage.setItem(lT, "1")
          } catch {
            return
          }
          yT(cT)
        }), [yT, TT]);
      return {
        explained: kT,
        hinting: MT,
        explain: yT,
        explainOnce: fT
      }
    }

    function iA(TT) {
      let {
        text: kT,
        tone: cT,
        explained: lT
      } = TT;
      return (0, wK.jsxs)("p", {
        className: rM()("NxStatus", null === lT ? cT : "Explain"),
        "aria-live": "polite",
        children: [null !== lT && (0, wK.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== lT && void 0 !== lT ? lT : kT]
      })
    }
    const qA = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function sA(TT, kT) {
      const cT = Number(TT[kT]);
      return 1 === cT || 2 === cT || 3 === cT ? cT : 0
    }

    function TC(TT) {
      return !!rf("reactor", TT.baf2RxNeed) || void 0 !== TT.baf2RxLayout && TT.baf2RxNeed.some((TT => {
        let [kT, cT] = TT;
        return cT > 0 && qA.includes(kT)
      }))
    }
    const kC = "buildAFactory2Game:";

    function cC(TT) {
      let {
        status: kT,
        store: cT,
        busy: lT
      } = TT;
      const {
        t: MT
      } = (0, bM.B)();
      return function(TT) {
        return 0 !== (TT.baf2RxFlags & tk) && (!TT.baf2RxFormed || void 0 !== TT.baf2RxLayout)
      }(kT) ? (0, wK.jsx)(FO.m, {
        disabled: !TC(kT) || lT,
        onClick: () => {
          cT.tap("fill", (() => {
            cT.send("fill")
          }))
        },
        children: MT(void 0 !== kT.baf2RxLayout ? `${kC}rxFillLayout` : `${kC}rxFill`)
      }) : null
    }

    function lC(TT) {
      let {
        status: kT,
        store: cT,
        readOnly: MT,
        bare: KT = !1
      } = TT;
      const {
        t: OT
      } = (0, bM.B)(), yT = kT.baf2RxLayout, [fT, xT, IT] = kT.baf2RxDims, AT = (0, lT.useMemo)((() => {
        if (void 0 === yT) return 0;
        const TT = Uint8Array.from(yT, ((TT, kT) => sA(yT, kT)));
        return Tf([fT - 2, xT - 2, IT - 2], TT).max
      }), [yT, fT, xT, IT]);
      return void 0 === yT ? null : (0, wK.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!KT && (0, wK.jsx)("span", {
          className: "Baf2RxHint",
          children: OT(`${kC}rxLayoutLine`, {
            amount: of(AT)
          })
        }), !MT && (0, wK.jsx)(FO.e, {
          onClick: () => {
            cT.send("layout", 0)
          },
          children: OT(`${kC}rxLayoutHide`)
        })]
      })
    }
    const MC = "buildAFactory2Game:",
      KC = {
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

    function OC(TT) {
      let {
        id: kT,
        title: cT,
        body: lT,
        bodyParams: MT,
        yes: KT,
        cancel: OT,
        confirm: yT
      } = TT;
      const {
        t: fT
      } = (0, bM.B)();
      return (0, wK.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": kT,
        children: [(0, wK.jsx)("h3", {
          id: kT,
          children: fT(cT)
        }), (0, wK.jsx)("p", {
          children: fT(lT, MT)
        }), (0, wK.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, wK.jsx)(FO.i, {
            onClick: OT,
            children: fT(`${MC}rxCancel`)
          }), (0, wK.jsx)(FO.I, {
            onClick: yT,
            children: fT(KT)
          })]
        })]
      })
    }

    function yC(TT) {
      const [kT, cT] = (0, lT.useState)((() => TT.get()));
      return (0, lT.useEffect)((() => (cT(TT.get()), TT.subscribe((() => {
        cT(TT.get())
      })))), [TT]), kT
    }

    function fC(TT) {
      let {
        kind: kT,
        cap: cT,
        busy: MT = !1,
        whyNot: KT = null,
        apart: OT
      } = TT;
      const {
        t: yT
      } = (0, bM.B)(), [fT, xT] = (0, lT.useState)(!1), IT = null !== KT, AT = (0, lT.useRef)(null);
      if ((0, lT.useEffect)((() => {
          IT && xT(!1)
        }), [IT]), (0, lT.useLayoutEffect)((() => {
          var TT;
          const kT = null === (TT = AT.current) || void 0 === TT ? void 0 : TT.firstElementChild;
          IT ? null === kT || void 0 === kT || kT.setAttribute("aria-disabled", "true") : MT || null === kT || void 0 === kT || kT.removeAttribute("aria-disabled")
        })), !fT || IT) return (0, wK.jsx)("span", {
        ref: AT,
        className: "Baf2RxApartWrap",
        children: (0, wK.jsx)(FO.i, {
          disabled: MT,
          className: rM()({
            Baf2RxNotYet: IT
          }),
          onClick: () => {
            KT ? KT() : xT(!0)
          },
          children: yT(`${MC}rxApart`)
        })
      });
      const CT = "battery" === kT,
        jT = void 0 === cT ? `${MC}batApartConfirmBodyPlan` : `${MC}batApartConfirmBody`;
      return (0, wK.jsx)(OC, {
        id: `baf2ApartTitle_${kT}`,
        title: CT ? `${MC}batApartConfirmTitle` : `${MC}rxApartConfirmTitle`,
        body: CT ? jT : `${MC}rxApartConfirmBody`,
        bodyParams: void 0 === cT ? void 0 : {
          cap: cT
        },
        yes: `${MC}rxApart`,
        cancel: () => {
          xT(!1)
        },
        confirm: () => {
          xT(!1), OT()
        }
      })
    }

    function xC(TT) {
      let {
        mood: kT,
        big: cT
      } = TT;
      const lT = KC[kT],
        MT = [];
      return lT.rows.forEach(((TT, kT) => {
        for (let cT = 0; cT < TT.length; cT++) "." !== TT[cT] && MT.push((0, wK.jsx)("rect", {
          x: cT + 1,
          y: kT + 1,
          width: 1,
          height: 1,
          fill: "w" === TT[cT] ? "#8fd3ff" : lT.colour
        }, `${cT},${kT}`))
      })), (0, wK.jsxs)("svg", {
        className: rM()("Baf2RxFace", {
          Big: cT,
          Alarm: "alarm" === kT
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, wK.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, wK.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), MT]
      })
    }

    function IC(TT) {
      return QK(TT, "+").replace("+", "")
    }

    function AC(TT) {
      let {
        kind: kT,
        dims: cT,
        cap: lT,
        disabled: MT,
        compact: KT,
        resize: OT
      } = TT;
      const {
        t: yT
      } = (0, bM.B)(), {
        min: fT,
        max: xT
      } = dc(kT), IT = Math.min(lT, xT), AT = [`${MC}rxWide`, `${MC}rxTall`, `${MC}rxDeep`], CT = {
        w: String(cT[0]),
        h: String(cT[1]),
        d: String(cT[2]),
        blocks: String(Jf(kT, cT))
      };
      return (0, wK.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, wK.jsx)("div", {
          className: "Baf2RxSteppers",
          children: cT.map(((TT, kT) => {
            const KT = lT => {
                const MT = [cT[0], cT[1], cT[2]];
                MT[kT] = TT + lT, OT(MT)
              },
              CT = TT >= IT;
            return (0, wK.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, wK.jsx)("button", {
                type: "button",
                "aria-label": yT(`${MC}rxSmaller`),
                disabled: MT || TT <= fT,
                onClick: () => {
                  KT(-1)
                },
                children: "\u2212"
              }), (0, wK.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [TT, (0, wK.jsx)("small", {
                  children: yT(AT[kT])
                })]
              }), (0, wK.jsx)("button", {
                type: "button",
                "aria-label": yT(`${MC}rxBigger`),
                disabled: MT || CT,
                onClick: () => {
                  KT(1)
                },
                children: CT && lT < xT ? "\ud83d\udd12" : "+"
              })]
            }, AT[kT])
          }))
        }), !KT && (0, wK.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === kT ? yT(`${MC}rxSizeLine`, {
            ...CT,
            water: String(zf(cT))
          }) : yT(`${MC}batSizeLine`, CT)
        })]
      })
    }

    function CC(TT) {
      let {
        on: kT,
        label: cT,
        disabled: lT,
        locked: MT,
        pending: KT,
        toggle: OT
      } = TT;
      return (0, wK.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": kT,
        disabled: lT,
        "aria-disabled": MT || void 0,
        className: rM()("Baf2RxSwitch", {
          On: kT,
          Locked: MT,
          Pending: KT
        }),
        onClick: OT,
        children: [(0, wK.jsx)("span", {
          className: "Baf2RxKnob"
        }), cT]
      })
    }
    const jC = "buildAFactory2Game:",
      vC = .95;

    function tC(TT, kT) {
      return 0 !== (TT.baf2RxFlags & kT)
    }

    function hC(TT) {
      return "cryo" === TT ? qT.m : qT.o
    }

    function NC(TT) {
      var kT, cT, lT, MT, KT, OT, yT, fT, xT;
      return TT.baf2RxCryo ? {
        lj: "cryo",
        usePerS: null !== (MT = TT.baf2RxCryoUse) && void 0 !== MT ? MT : 0,
        needPerS: null !== (KT = TT.baf2RxCryoNeed) && void 0 !== KT ? KT : 0,
        inPerS: null !== (OT = TT.baf2RxCryoIn) && void 0 !== OT ? OT : 0,
        stored: null !== (yT = TT.baf2RxCryoStored) && void 0 !== yT ? yT : 0,
        makersShort: null !== (fT = TT.baf2RxMixersShort) && void 0 !== fT ? fT : 0,
        waterBeside: null !== (xT = TT.baf2RxWaterUse) && void 0 !== xT ? xT : 0,
        pct: TT.baf2RxWater
      } : {
        lj: "water",
        usePerS: null !== (kT = TT.baf2RxWaterUse) && void 0 !== kT ? kT : 0,
        needPerS: null !== (cT = TT.baf2RxWaterNeed) && void 0 !== cT ? cT : 0,
        inPerS: TT.baf2RxWaterIn,
        stored: TT.baf2RxWaterStored,
        makersShort: null !== (lT = TT.baf2RxCondensersShort) && void 0 !== lT ? lT : 0,
        waterBeside: 0,
        pct: TT.baf2RxWater
      }
    }

    function QC(TT) {
      const kT = "running" === TT.baf2RxState || "idle" === TT.baf2RxState;
      return TT.baf2RxFormed && TT.baf2RxTarget !== TT.baf2RxThrottle && kT ? SC(TT, TT.baf2RxTarget) : null
    }

    function SC(TT, kT) {
      const [cT, lT, MT, , , , KT, , OT] = TT.baf2RxStats, yT = tC(TT, jk), fT = NC(TT), xT = fT.pct / 100, {
        gen: IT,
        out: AT,
        load: CT
      } = function(TT, kT, cT, lT) {
        const MT = cT ? By : 1,
          KT = Math.min(TT.fuelHeat * MT * Math.max(0, Math.min(1, kT)), TT.size * MT);
        return {
          gen: KT,
          out: KT,
          load: Cf(KT, TT.cooling, lT)
        }
      }({
        fuelHeat: cT,
        cooling: lT,
        size: MT
      }, kT / 100, yT, xT), jT = vf(KT || sy(...TT.baf2RxDims)), vT = TT.baf2RxHeat, tT = Math.abs(CT - vT), hT = function(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : qT.o;
        const KT = cT ? By : 1,
          OT = Math.min(TT.fuelHeat * KT * kT / 100, TT.size * KT),
          yT = OT,
          fT = TT.fuelHeat * KT,
          xT = TT.cooling * Af(lT.pct / 100),
          IT = fT > 0 && xT < TT.size * KT ? Math.floor(100 * xT / fT) : 100,
          AT = OT * MT - lT.inPerS;
        return {
          out: yT,
          hotAbove: IT >= 100 ? null : Math.max(0, IT),
          waterSecs: lT.pct >= 100 && AT > 1e-6 ? Math.max(0, lT.stored) / AT : null
        }
      }({
        fuelHeat: cT,
        cooling: lT,
        size: MT
      }, kT, yT, {
        pct: fT.pct,
        inPerS: fT.inPerS,
        stored: fT.stored
      }, hC(fT.lj));
      return {
        pct: kT,
        out: AT,
        coolPerS: IT * hC(fT.lj),
        pelletsPerMin: OT > 0 ? AT / OT * 60 : 0,
        settle: CT,
        settleS: tT > 2 ? jT * Math.log(tT / 2) : 0,
        overheatS: CT > 100 && vT < 100 ? jT * Math.log((CT - vT) / (CT - 100)) : null,
        hotAbove: hT.hotAbove,
        coolantSecs: hT.waterSecs
      }
    }

    function DC(TT) {
      return TT.baf2RxThrottle <= 0 && "running" !== TT.baf2RxState ? 0 : SC(TT, TT.baf2RxTarget).pelletsPerMin / 60
    }

    function aC(TT, kT) {
      if (TT <= 0 || kT <= 0) return 0;
      const cT = TT / kT;
      return cT < .25 ? 1 : cT < .5 ? 2 : cT < .8 ? 3 : 4
    }

    function FC(TT, kT) {
      const cT = {};
      for (const [lT, MT] of Object.entries(kT.params)) cT[lT] = "time" === lT ? aK(TT, MT) : "amount" === lT ? of(MT) : String(Math.round(MT));
      return TT(kT.key, cT)
    }

    function rC(TT, kT) {
      return {
        key: `${jC}${TT}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: kT
      }
    }

    function PC(TT) {
      var kT;
      const cT = tC(TT, jk),
        lT = "running" === TT.baf2RxState,
        MT = Qf(TT),
        KT = TT.baf2RxHeat;
      var OT;
      if (lT && KT > Uy) return {
        key: null !== (OT = MT.fix) && void 0 !== OT ? OT : `${jC}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const yT = lT ? SC(TT, TT.baf2RxTarget).coolantSecs : null,
        fT = "cryo" === NC(TT).lj;
      if (null !== yT && yT >= 1 && yT <= 30) return rC(fT ? "rxWarnCryo" : "rxWarnWater", "bad");
      const xT = iy(sy(...TT.baf2RxDims)).waste,
        IT = lT ? Pf(TT, xT, DC(TT)).fullInS : null;
      if (null !== IT && IT <= 120 && TT.baf2RxWaste >= .5 * xT) return rC("rxWarnWaste", "warn");
      if (null !== yT && yT >= 1) return rC(fT ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: yT
      });
      const AT = "noWater" === TT.baf2RxState && KT > Uy;
      if (TT.baf2RxDamage >= 1 && !AT) return rC("rxDamagedHeals", "warn", {
        pct: TT.baf2RxDamage
      });
      if (TT.baf2RxCryoCut) return rC("rxFix_cryoCut", "warn");
      const CT = NC(TT);
      if ("noWater" === TT.baf2RxState && "cryo" === CT.lj) return rC("noWater" === TT.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const jT = MT.fix === `${jC}rxFix_scramCool` || "idle" === TT.baf2RxState && TT.baf2RxTarget <= 0;
      if (jT && TT.baf2RxFuel <= 0) return rC("rxFix_noFuel", "warn");
      if (jT && TT.baf2RxWaterIn <= 0 && (null !== (kT = TT.baf2RxCryoIn) && void 0 !== kT ? kT : 0) <= 0) return rC("rxFix_noWater", "warn");
      const vT = MT.fix === `${jC}rxFix_scramCool` ? Df(TT) : null;
      if (null !== vT) return {
        key: vT.key,
        params: {
          amount: vT.amount
        },
        tone: "info"
      };
      if ("running" !== TT.baf2RxState && "idle" !== TT.baf2RxState && null !== MT.fix) return {
        key: MT.fix,
        params: {},
        tone: "scram" === TT.baf2RxState ? "info" : AT ? "bad" : "warn"
      };
      var tT;
      if ("idle" === TT.baf2RxState && TT.baf2RxTarget <= 0) return {
        key: null !== (tT = MT.fix) && void 0 !== tT ? tT : `${jC}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const hT = TT.baf2RxCryoStarved;
      if ("cryo" === CT.lj && hT && CT.needPerS > 0 && CT.usePerS < vC * CT.needPerS) return rC("noWater" === hT ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const NT = "cryo" === CT.lj,
        QT = CT.needPerS > 0 && CT.usePerS < vC * CT.needPerS;
      if (NT ? QT || CT.makersShort > 0 && CT.pct < 100 : CT.pct < 100) {
        const kT = NT && QT ? Math.floor(100 * CT.usePerS / CT.needPerS) : Math.min(100, CT.pct);
        if (CT.makersShort > 0) {
          return rC(`${NT?"rxCryoShortLine":"rxWaterShortLine"}${1===CT.makersShort?"One":""}${!NT&&TT.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: kT,
            count: CT.makersShort
          })
        }
        return rC(NT ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: kT
        })
      }
      const ST = function(TT) {
        const [kT, cT, lT] = TT.baf2RxStats, MT = NC(TT), KT = jf({
          fuelHeat: kT,
          cooling: cT,
          size: lT
        }, "cryo" === MT.lj ? qT.e : 1, !0);
        return Math.max(0, KT * hC(MT.lj) - MT.inPerS)
      }(TT);
      if (cT && ST > 0) return rC("cryo" === CT.lj ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(ST)
      });
      if (KT >= xf) return rC("rxHotLine", "warn");
      const DT = SC(TT, TT.baf2RxTarget);
      var aT;
      if (null !== DT.overheatS) return rC("rxWillOverheat", "bad", {
        pct: TT.baf2RxTarget,
        time: DT.overheatS,
        safe: null !== (aT = DT.hotAbove) && void 0 !== aT ? aT : 100
      });
      if (Math.abs(DT.settle - KT) >= 3) return rC("rxSettling", "info", {
        pct: TT.baf2RxTarget,
        heat: Math.round(DT.settle),
        time: DT.settleS
      });
      const FT = Df(TT);
      if (null !== FT) return {
        key: FT.key,
        params: {
          amount: FT.amount
        },
        tone: "info"
      };
      const rT = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== kT && ("running" !== kT || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === TT.rods ? `${tf}rxLimitNoRods` : `${tf}rxLimit_${ff(TT)}`
      }({
        rods: TT.baf2RxStats[3],
        ...Sf(TT)
      }, TT.baf2RxState, TT.baf2RxOut >= vC * TT.baf2RxMaxNow, !1);
      if (rT === `${jC}rxLimit_size`) {
        const [kT, , cT, lT] = TT.baf2RxStats, MT = lT > 0 && kT > 0 ? Math.ceil(cT / (kT / lT) - 1e-9) : lT, KT = TT.baf2RxDims.every((TT => TT >= dc("reactor").max));
        if (MT < lT) return rC(KT ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: MT,
          have: lT
        });
        if (KT) return rC("rxLimit_sizeMax", "info")
      }
      return null !== rT ? {
        key: rT,
        params: {},
        tone: "info"
      } : rC("rxSteady", "ok", {
        pct: TT.baf2RxTarget
      })
    }

    function wC(TT) {
      var kT;
      if (TT.melted) return rC("rxMeltedBody", "bad");
      if (-1 === TT.bad) return rC("rxFix_noRoom", "warn");
      if (TT.bad > 0) return rC(1 === TT.bad ? "rxBadOne" : "rxBad", "warn", {
        count: TT.bad
      });
      if (TT.left > 0) {
        const kT = 1 === TT.left ? "One" : "";
        return rC(TT.canFill ? `rxPlanLeft${kT}` : `rxPlanLeftNoFill${kT}`, "info", {
          count: TT.left
        })
      }
      if (0 === TT.rods) return rC("rxLimitNoRods", "warn");
      const cT = null !== (kT = TT.idle) && void 0 !== kT ? kT : 0;
      return cT > 0 ? rC(1 === cT ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: cT
      }) : rC("rxPlanReady", "ok")
    }

    function mC(TT) {
      return Math.floor(Math.max(0, TT[1] - 1) / 2)
    }

    function bC(TT) {
      if (TT >= lf && TT < Mf) {
        const kT = TT - lf;
        return {
          key: 0 === kT ? `${jC}rxWhy_rodAlone` : 1 === kT ? `${jC}rxWhy_rodOne` : `${jC}rxWhy_rod`,
          params: {
            count: String(kT),
            heat: String(Ey * (1 + Zy * kT))
          }
        }
      }
      return TT === Mf ? {
        key: `${jC}rxWhy_channel`,
        params: {
          amount: String(Xy)
        }
      } : TT === Kf ? {
        key: `${jC}rxWhy_deadChannel`,
        params: {}
      } : TT === Of ? {
        key: `${jC}rxWhy_graphite`,
        params: {}
      } : {
        key: `${jC}rxWhy_core`,
        params: {}
      }
    }
    const zC = "buildAFactory2Game:";

    function JC(TT, kT) {
      return 0 !== (TT.baf2RxFlags & kT)
    }

    function oC(TT) {
      let {
        status: kT,
        pending: cT,
        store: lT,
        explain: MT
      } = TT;
      const {
        t: KT
      } = (0, bM.B)(), OT = JC(kT, Ck), yT = kT.baf2RxTarget, fT = kT.baf2RxThrottle, xT = function(TT) {
        return {
          press: () => {
            TT.throttlePress()
          },
          drag: kT => {
            TT.throttleDrag(kT)
          },
          release: () => {
            TT.throttleRelease()
          }
        }
      }(lT), IT = null === (AT = SC(kT, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, AT - 10),
        red: AT
      };
      var AT;
      return (0, wK.jsxs)("div", {
        className: rM()("Baf2RxThrottle", {
          Off: OT
        }),
        onClick: () => {
          OT && MT(`${zC}rxWhy_startFirst`)
        },
        children: [(0, wK.jsx)("span", {
          className: "HideNarrow",
          children: KT(`${zC}rxThrottle`)
        }), (0, wK.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, wK.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: yT,
            disabled: OT,
            style: OT ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": KT(`${zC}rxThrottle`),
            onPointerDown: () => {
              xT.press();
              const TT = () => {
                window.removeEventListener("pointerup", TT), window.removeEventListener("pointercancel", TT), xT.release()
              };
              window.addEventListener("pointerup", TT), window.addEventListener("pointercancel", TT)
            },
            onKeyUp: xT.release,
            onChange: TT => {
              xT.drag(Number(TT.target.value))
            }
          }), (0, wK.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${IT.amber}%, #ffb020 ${IT.amber}% ${IT.red}%, #ff3b30 ${IT.red}%)`
            },
            "aria-hidden": "true"
          }), (0, wK.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${fT}% + ${8*(1-fT/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, wK.jsxs)("b", {
          children: [`${yT}%`, (0, wK.jsx)("i", {
            className: rM()("Baf2RxPendingDot", {
              On: cT
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function HC(TT) {
      let {
        status: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)(), lT = SC(kT, kT.baf2RxTarget), MT = NC(kT).lj, KT = cT("cryo" === MT ? `${zC}rxRateCryo` : `${zC}rxRateWater`, {
        rate: IC(lT.coolPerS)
      }), OT = cT(`${zC}rxChain`, {
        pct: String(kT.baf2RxTarget),
        out: of(lT.out),
        heat: String(Math.round(lT.settle)),
        coolant: KT
      }), yT = null !== lT.coolantSecs ? lT.coolantSecs >= 1 ? cT("cryo" === MT ? `${zC}rxThrottleCryoOut` : `${zC}rxThrottleWaterOut`, {
        time: aK(cT, lT.coolantSecs)
      }) : cT("cryo" === MT ? `${zC}rxThrottleCryoDry` : `${zC}rxThrottleWaterDry`) : null;
      return (0, wK.jsxs)("p", {
        className: "Baf2RxChain",
        children: [OT, null !== yT ? (0, wK.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", yT]
        }) : (0, wK.jsxs)("span", {
          children: [" \xb7 ", cT(`${zC}rxChainPellets`, {
            amount: Hf(lT.pelletsPerMin)
          })]
        })]
      })
    }

    function eC(TT) {
      let {
        view: kT,
        store: cT,
        explain: MT,
        explainOnce: KT
      } = TT;
      const {
        t: OT
      } = (0, bM.B)(), {
        status: yT
      } = kT, [fT, xT] = (0, lT.useState)(!1), IT = JC(yT, Ck), CT = JC(yT, jk), jT = !JC(yT, hk), vT = yT.baf2RxHeat > 100;
      return (0, wK.jsxs)(wK.Fragment, {
        children: [(0, wK.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, wK.jsx)(oC, {
            status: yT,
            pending: kT.throttlePending,
            store: cT,
            explain: MT
          }), (0, wK.jsx)(CC, {
            on: CT,
            label: CT ? OT(`${zC}rxOdLeft`, {
              time: aK(OT, yT.baf2RxOdLeft)
            }) : OT(`${zC}rxOverdrive`),
            locked: jT,
            pending: 0 !== (kT.pendingFlags & jk),
            toggle: () => {
              jT ? MT(`${zC}rxOverdriveTier`, {
                amount: String(AT(13))
              }) : CT ? cT.setFlag(jk, !1) : kT.odConfirmed ? cT.setFlag(jk, !0) : xT(!0)
            }
          }), IT || kT.startGuard ? (0, wK.jsx)(FO.r, {
            disabled: kT.busy.has("start") || kT.startGuard,
            onClick: () => {
              cT.tap("start", (() => {
                cT.setFlag(Ck, !1)
              }))
            },
            children: OT(kT.startGuard ? `${zC}rxStarting` : `${zC}rxStart`)
          }) : (0, wK.jsx)("span", {
            className: rM()("Baf2RxScram", {
              Pulse: vT
            }),
            children: (0, wK.jsx)(FO.I, {
              onClick: () => {
                cT.shutDown()
              },
              children: OT(`${zC}rxScram`)
            })
          })]
        }), (0, wK.jsx)(HC, {
          status: yT
        }), fT && (0, wK.jsx)(OC, {
          id: "baf2RxOdTitle",
          title: `${zC}rxOdConfirmTitle`,
          body: `${zC}rxOdConfirmBody`,
          yes: `${zC}rxOdConfirm`,
          cancel: () => {
            xT(!1)
          },
          confirm: () => {
            xT(!1), cT.tap("odConfirm", (() => {
              cT.confirmOverdrive(), cT.setFlag(jk, !0)
            })), KT(`${zC}rxWhy_overdrive`)
          }
        })]
      })
    }

    function GC(TT) {
      let {
        view: kT,
        store: cT,
        keepSize: lT
      } = TT;
      const {
        t: MT
      } = (0, bM.B)(), {
        status: KT
      } = kT;
      return (0, wK.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, wK.jsx)(AC, {
          kind: "reactor",
          dims: kT.dims,
          cap: KT.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: TT => {
            cT.resize(TT)
          }
        }), lT ? (0, wK.jsx)(FO.i, {
          onClick: lT,
          children: MT(`${zC}rxKeepSize`)
        }) : (0, wK.jsxs)(wK.Fragment, {
          children: [(0, wK.jsx)(CC, {
            on: kT.guide,
            label: MT(`${zC}rxGuide`),
            toggle: () => {
              cT.toggleGuide()
            }
          }), JC(KT, Qk) && (0, wK.jsx)(CC, {
            on: kT.starter,
            label: MT(`${zC}rxStarter`),
            toggle: () => {
              cT.toggleStarter()
            }
          }), (0, wK.jsx)(cC, {
            status: KT,
            store: cT,
            busy: kT.busy.has("fill")
          })]
        })]
      })
    }

    function VC(TT) {
      let {
        need: kT,
        kind: cT = "reactor",
        explain: lT
      } = TT;
      const {
        t: MT
      } = (0, bM.B)(), KT = kT.length <= 3, OT = kT.reduce(((TT, kT) => {
        let [, cT] = kT;
        return TT + cT
      }), 0);
      return (0, wK.jsxs)("div", {
        className: rM()("Baf2RxParts", {
          Compact: !KT
        }),
        onClick: () => {
          lT("battery" === cT ? `${zC}batWhy_store` : `${zC}rxShellHint`)
        },
        children: [OT > 0 && (0, wK.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === OT ? MT(`${zC}rxBlocksOne`) : MT(`${zC}rxBlocks`, {
            blocks: String(OT)
          })
        }), 0 === kT.length ? (0, wK.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: MT("battery" === cT ? `${zC}batPartsDone` : `${zC}rxShellDone`)
        }) : Ff(kT).map((TT => {
          let [kT, cT, lT] = TT;
          const OT = function(TT) {
            const kT = bf[TT];
            if (void 0 === kT) return null;
            const [cT, lT, MT] = wf[kT].colour.map((TT => Math.round(255 * TT)));
            return `rgb(${cT}, ${lT}, ${MT})`
          }(kT);
          return (0, wK.jsxs)("span", {
            className: "Baf2RxChip",
            title: MK(MT, kT),
            children: [(0, wK.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === OT ? {
                visibility: "hidden"
              } : {
                background: OT
              },
              title: MT(`${zC}rxShopGhost`)
            }), (0, wK.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, wK.jsx)(JM.d, {
                itemName: kT,
                amount: 0
              })
            }), (0, wK.jsx)("span", {
              className: "Baf2RxChipName",
              children: KT ? `${cT} ${yT=MK(MT,kT),yT.replace(/^(Reactor|Battery) (?=\S)/,"")}` : cT
            }), lT >= cT ? (0, wK.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, wK.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: KT ? MT(`${zC}rxShopShort`, {
                count: String(cT - lT)
              }) : "\u2212" + (cT - lT)
            })]
          }, kT);
          var yT
        }))]
      })
    }
    const EC = "buildAFactory2Game:";

    function ZC(TT) {
      var kT, cT, MT, KT, OT, yT, fT;
      let {
        store: xT,
        close: IT
      } = TT;
      const {
        t: AT
      } = (0, bM.B)(), CT = LO(), jT = yC(xT), {
        explained: vT,
        explain: tT
      } = pA("baf2RxExplained"), hT = (0, lT.useCallback)(((TT, kT) => {
        tT(AT(TT, kT))
      }), [tT, AT]), NT = null === jT || void 0 === jT ? void 0 : jT.status, QT = !0 === (null === NT || void 0 === NT ? void 0 : NT.baf2BatReadOnly), ST = TT => {
        NT && CT.send(Ak(NT.baf2BatAt, TT))
      }, [DT, aT, FT] = null !== (kT = null === jT || void 0 === jT ? void 0 : jT.dims) && void 0 !== kT ? kT : [0, 0, 0], rT = of(null !== (cT = null === jT || void 0 === jT ? void 0 : jT.DA) && void 0 !== cT ? cT : 0), PT = !0 === (null === NT || void 0 === NT ? void 0 : NT.baf2BatFormed), wT = null !== (MT = null === NT || void 0 === NT ? void 0 : NT.baf2BatStored) && void 0 !== MT ? MT : 0, mT = Math.max(1, null !== (KT = null === NT || void 0 === NT ? void 0 : NT.baf2BatIslandCap) && void 0 !== KT ? KT : 1), bT = Math.min(100, 100 * wT / mT), zT = null === NT || void 0 === NT ? void 0 : NT.baf2BatNetPerS, JT = function(TT, kT, cT) {
        return cT > 0 && kT >= cT ? "full" : void 0 !== TT && TT >= .05 ? "charging" : void 0 !== TT && TT <= -.05 && kT > 0 ? "draining" : "steady"
      }(zT, wT, null !== (OT = null === NT || void 0 === NT ? void 0 : NT.baf2BatIslandCap) && void 0 !== OT ? OT : 0), oT = null !== (yT = null === NT || void 0 === NT ? void 0 : NT.baf2BatMadePerS) && void 0 !== yT ? yT : 0, HT = null !== (fT = null === NT || void 0 === NT ? void 0 : NT.baf2BatUsedPerS) && void 0 !== fT ? fT : 0;
      let eT, GT = {},
        VT = "info";
      if (NT)
        if (PT) "charging" === JT ? (eT = `${EC}batLine_charging`, GT = {
          time: aK(AT, (mT - wT) / Math.max(.05, null !== zT && void 0 !== zT ? zT : 0))
        }, VT = "ok") : "draining" === JT ? (eT = `${EC}batLine_draining`, GT = {
          time: aK(AT, wT / Math.max(.05, -(null !== zT && void 0 !== zT ? zT : 0)))
        }, VT = "warn") : eT = "full" === JT ? `${EC}batLine_full` : wT <= 0 && HT > 0 ? `${EC}batLine_empty` : `${EC}batLine_steady`;
        else {
          var ET;
          const TT = wC({
            left: NT.baf2BatNeed.reduce(((TT, kT) => {
              let [, cT] = kT;
              return TT + cT
            }), 0),
            bad: NT.baf2BatBad,
            rods: 1,
            canFill: !0 === NT.baf2BatCanFill,
            melted: !1
          });
          eT = TT.key, GT = {
            count: String(null !== (ET = TT.params.count) && void 0 !== ET ? ET : 0)
          }, VT = TT.tone
        }
      else eT = `${EC}batLine_steady`;
      const ZT = Math.max(oT, HT, 1);
      return (0, wK.jsx)(aO.c, {
        close: IT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, wK.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, wK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, wK.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, wK.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, wK.jsx)(JM.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, wK.jsxs)("div", {
                children: [(0, wK.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: AT(`${EC}batTitle`)
                }), NT && (0, wK.jsxs)("p", {
                  className: rM()("Baf2RxSubtitle", {
                    good: PT && "charging" === JT,
                    warn: PT && "draining" === JT
                  }),
                  children: [DT, "\xd7", aT, "\xd7", FT, " \xb7 ", AT(PT ? `${EC}batState_${JT}` : `${EC}rxSubPlanShort`)]
                })]
              })]
            }), (0, wK.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [NT && !QT && (0, wK.jsx)(fC, {
                kind: "battery",
                cap: PT ? rT : void 0,
                busy: null === jT || void 0 === jT ? void 0 : jT.busy.has("apart"),
                apart: () => {
                  xT.tap("apart", (() => {
                    ST("apart")
                  }))
                }
              }), (0, wK.jsx)(FO.l, {
                onClick: IT
              })]
            })]
          }), jT && NT && (0, wK.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, wK.jsxs)("div", {
              className: rM()("Baf2RxFlow Baf2BatFlow", {
                Plan: !PT
              }),
              children: [(0, wK.jsx)(BA, {
                kind: "Power",
                label: AT(`${EC}batMade`),
                number: PT ? `\u26a1 ${of(oT)}/s` : "\u2014",
                note: AT(`${EC}batMadeNote`),
                share: PT ? oT / ZT : void 0,
                onExplain: () => {
                  hT(`${EC}batWhy_made`)
                }
              }), (0, wK.jsx)(WA, {
                kind: "Power",
                step: PT ? aC(oT, ZT) : 0,
                planned: !PT
              }), (0, wK.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  hT(`${EC}batWhy_store`)
                },
                children: [(0, wK.jsx)(nA, {
                  max: 100,
                  bands: [{
                    upTo: PT ? bT : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, wK.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, wK.jsx)("b", {
                    className: "Baf2BatStored",
                    children: PT ? AT(`${EC}batStoredOf`, {
                      amount: of(wT),
                      cap: of(NT.baf2BatIslandCap)
                    }) : AT(`${EC}batWillHold`, {
                      cap: rT
                    })
                  }), (0, wK.jsx)("span", {
                    children: AT(`${EC}batAdds`, {
                      cap: rT
                    })
                  }), PT && (0, wK.jsx)("small", {
                    children: AT(`${EC}batBreakNote`, {
                      cap: rT
                    })
                  })]
                })]
              }), (0, wK.jsx)(WA, {
                kind: "Power",
                step: PT ? aC(HT, ZT) : 0,
                planned: !PT
              }), (0, wK.jsx)(BA, {
                kind: "Power",
                label: AT(`${EC}batUsed`),
                number: PT ? `\u26a1 ${of(HT)}/s` : "\u2014",
                note: AT(`${EC}batUsedNote`),
                share: PT ? HT / ZT : void 0,
                onExplain: () => {
                  hT(`${EC}batWhy_used`)
                }
              })]
            }), (0, wK.jsx)(iA, {
              text: AT(eT, GT),
              tone: VT,
              explained: vT
            }), QT ? (0, wK.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: AT(`${EC}rxNotYours`)
            }) : !PT && (0, wK.jsxs)(wK.Fragment, {
              children: [(0, wK.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, wK.jsx)(AC, {
                  kind: "battery",
                  dims: jT.dims,
                  cap: NT.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: TT => {
                    xT.resize(TT)
                  }
                }), (0, wK.jsx)(CC, {
                  on: jT.guide,
                  label: AT(`${EC}rxGuide`),
                  toggle: () => {
                    xT.toggleGuide()
                  }
                }), NT.baf2BatCanFill && (0, wK.jsx)(FO.m, {
                  disabled: !rf("battery", NT.baf2BatNeed) || jT.busy.has("fill"),
                  onClick: () => {
                    xT.tap("fill", (() => {
                      ST("fill")
                    }))
                  },
                  children: AT(`${EC}rxFill`)
                })]
              }), (0, wK.jsx)(VC, {
                need: NT.baf2BatNeed,
                kind: "battery",
                explain: hT
              })]
            })]
          })]
        })
      })
    }
    const uC = "buildAFactory2Game:",
      XC = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function dC(TT, kT) {
      return TT === kf ? null : kT ? "#4a4440" : TT < Mf ? XC[TT - lf] : TT === Mf ? "#3fd0f0" : TT === Kf ? "#2c3e4c" : "#55585e"
    }

    function LC(TT) {
      let {
        inner: kT,
        looks: cT,
        layer: lT,
        setLayer: MT,
        glow: KT,
        melted: OT,
        explain: yT
      } = TT;
      const {
        t: fT
      } = (0, bM.B)(), [xT, IT, AT] = kT, CT = Math.max(0, Math.min(IT - 1, lT)), jT = [];
      for (let tT = 0; tT < AT; tT++)
        for (let TT = 0; TT < xT; TT++) {
          var vT;
          const kT = null !== (vT = cT[(CT * AT + tT) * xT + TT]) && void 0 !== vT ? vT : kf,
            lT = dC(kT, OT),
            MT = kT >= lf && kT < Mf;
          jT.push(null === lT ? (0, wK.jsx)("circle", {
            cx: TT + .5,
            cy: tT + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${TT},${tT}`) : (0, wK.jsx)("rect", {
            x: TT + .06,
            y: tT + .06,
            width: .88,
            height: .88,
            fill: lT,
            opacity: MT && !OT ? .5 + .5 * KT : 1,
            onClick: TT => {
              TT.stopPropagation();
              const cT = bC(kT);
              yT(cT.key, cT.params)
            }
          }, `${TT},${tT}`))
        }
      return (0, wK.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, wK.jsx)("svg", {
          className: rM()("Baf2RxMapGrid", {
            Melted: OT
          }),
          viewBox: `0 0 ${Math.max(1,xT)} ${Math.max(1,AT)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": fT(`${uC}rxWhy_core`),
          onClick: () => {
            yT(`${uC}rxWhy_core`, {})
          },
          children: jT
        }), IT > 1 && (0, wK.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, wK.jsx)("button", {
            type: "button",
            "aria-label": fT(`${uC}rxLayerDown`),
            disabled: CT <= 0,
            onClick: () => {
              MT(CT - 1)
            },
            children: "\u25bc"
          }), (0, wK.jsxs)("span", {
            children: [(0, wK.jsx)("span", {
              className: "HideNarrow",
              children: fT(`${uC}rxLayer`, {
                n: String(CT + 1),
                of: String(IT)
              })
            }), (0, wK.jsx)("span", {
              className: "ShowNarrow",
              children: fT(`${uC}rxLayerShort`, {
                n: String(CT + 1),
                of: String(IT)
              })
            })]
          }), (0, wK.jsx)("button", {
            type: "button",
            "aria-label": fT(`${uC}rxLayerUp`),
            disabled: CT >= IT - 1,
            onClick: () => {
              MT(CT + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const RC = "buildAFactory2Game:",
      gC = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Yy,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Nf,
        kind: "red"
      }],
      UC = [50, Yy, 100];

    function YC(TT) {
      let {
        stats: kT,
        t: cT,
        explain: lT
      } = TT;
      const MT = ff(kT),
        KT = Math.max(1, kT.fuelHeat, kT.cooling, kT.size),
        OT = [
          ["fuel", `${RC}rxBarRods`, kT.fuelHeat],
          ["cooling", `${RC}rxBarCooling`, kT.cooling],
          ["size", `${RC}rxBarSize`, kT.size]
        ];
      return (0, wK.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          lT(`${RC}rxWhy_bars`)
        },
        children: [(0, wK.jsx)("span", {
          className: "Baf2RxMostLine",
          children: cT(`${RC}rxMost`, {
            amount: of(Math.min(kT.fuelHeat, kT.cooling, kT.size))
          })
        }), (0, wK.jsx)("span", {
          className: "Baf2RxMostBars",
          children: OT.map((TT => {
            let [kT, lT, OT] = TT;
            return (0, wK.jsxs)("span", {
              className: rM()("Baf2RxMostBar", kT, {
                Low: kT === MT
              }),
              children: [(0, wK.jsx)("small", {
                children: cT(lT)
              }), (0, wK.jsx)("i", {
                children: (0, wK.jsx)("b", {
                  style: {
                    width: 100 * OT / KT + "%"
                  }
                })
              })]
            }, kT)
          }))
        })]
      })
    }

    function BC(TT) {
      var kT;
      let {
        view: cT,
        heat: MT,
        settle: KT,
        settleLine: OT,
        settleBad: yT,
        explain: fT
      } = TT;
      const {
        t: xT
      } = (0, bM.B)(), {
        status: IT
      } = cT, AT = IT.baf2RxAt.join(","), [CT, jT] = (0, lT.useState)((() => mC(cT.inner)));
      (0, lT.useEffect)((() => {
        jT(mC(cT.inner))
      }), [AT, cT.inner[1]]);
      const vT = null !== (kT = cT.plan) && void 0 !== kT ? kT : Sf(IT),
        tT = cT.plan ? cT.plan.powerPerUnit : IT.baf2RxStats[8],
        hT = null === MT ? null : "alarm" === (NT = hf(IT)) ? "red" : "hot" === NT ? "hot" : "warm" === NT ? "warm" : "cold";
      var NT;
      const QT = !IT.baf2RxFormed && function(TT, kT) {
          return 0 !== (TT.baf2RxFlags & kT)
        }(IT, vk),
        ST = IT.baf2RxDamage,
        DT = IT.baf2RxDamageTrend;
      return (0, wK.jsxs)("div", {
        className: rM()("Baf2RxCore", null !== hT && void 0 !== hT ? hT : "plan"),
        children: [(0, wK.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, wK.jsx)(LC, {
            inner: cT.inner,
            looks: cT.looks,
            layer: CT,
            setLayer: jT,
            glow: IT.baf2RxFormed ? IT.baf2RxThrottle / 100 : 1,
            melted: QT,
            explain: fT
          }), (0, wK.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              fT(`${RC}rxWhy_heat`)
            },
            children: [null !== MT ? (0, wK.jsxs)(wK.Fragment, {
              children: [(0, wK.jsx)("b", {
                children: xT(`${RC}rxHeatPct`, {
                  pct: String(MT)
                })
              }), (0, wK.jsx)("span", {
                className: rM()("Baf2RxBand", hT),
                children: xT(`${RC}rxBand_${hT}`)
              })]
            }) : (0, wK.jsx)("b", {
              children: xT(`${RC}rxHeat`)
            }), null !== OT && (0, wK.jsx)("span", {
              className: rM()("Baf2RxSettle", {
                Bad: yT
              }),
              children: OT
            }), ST >= 1 && (0, wK.jsxs)("span", {
              className: rM()("Baf2RxDamage", DT),
              children: [xT(`${RC}rxDamageLine`, {
                pct: String(ST)
              }), " \xb7 ", xT(`${RC}rxDamage_${DT}`), (0, wK.jsx)("i", {
                children: (0, wK.jsx)("b", {
                  style: {
                    width: `${Math.min(100,ST)}%`
                  }
                })
              })]
            })]
          }), (0, wK.jsx)(nA, {
            max: Nf,
            bands: gC,
            ticks: UC,
            now: MT,
            settle: KT,
            settleTone: yT ? "bad" : null,
            onExplain: () => {
              fT(`${RC}rxWhy_heat`)
            }
          })]
        }), (0, wK.jsx)(YC, {
          stats: vT,
          t: xT,
          explain: fT
        }), tT > 0 && (0, wK.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            fT(`${RC}rxWhy_perPellet`)
          },
          children: xT(`${RC}rxPerPellet`, {
            amount: of(tT)
          })
        })]
      })
    }

    function WC(TT, kT) {
      var cT;
      if (!TT.baf2RxStore) return {
        note: kT(`${RC}rxUpTo`, {
          amount: of(TT.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [lT, MT] = TT.baf2RxStore, KT = MT > 0 ? lT / MT : 0, OT = String(Math.floor(100 * KT)), yT = null !== (cT = TT.baf2RxStoreNetPerS) && void 0 !== cT ? cT : 0, fT = function(TT) {
        var kT, cT;
        const [lT, MT] = null !== (kT = TT.baf2RxStore) && void 0 !== kT ? kT : [0, 0], KT = null !== (cT = TT.baf2RxStoreNetPerS) && void 0 !== cT ? cT : 0;
        return MT > 0 && lT >= MT - 1 ? "running" === TT.baf2RxState ? `${jC}rxStoreFull` : `${jC}rxStoreFullOnly` : KT > .05 ? `${jC}rxStoreLine` : KT < -.05 ? "running" === TT.baf2RxState ? `${jC}rxStoreUsesMore` : `${jC}rxStoreDraining` : `${jC}rxStorePct`
      }(TT);
      return {
        note: kT(fT, fT === `${RC}rxStoreLine` ? {
          pct: OT,
          time: aK(kT, (MT - lT) / yT)
        } : {
          pct: OT
        }),
        share: KT
      }
    }

    function nC(TT) {
      let {
        view: kT,
        explain: cT,
        preview: lT
      } = TT;
      const {
        t: MT
      } = (0, bM.B)(), {
        status: KT
      } = kT, OT = iy(sy(...kT.dims)), yT = DC(KT), fT = Math.min(Math.round(KT.baf2RxFuel), OT.fuel), xT = "running" === KT.baf2RxState, IT = xT ? aC(KT.baf2RxOut, KT.baf2RxMaxNow) : 0, AT = function(TT, kT, cT) {
        const lT = NC(TT),
          MT = "cryo" === lT.lj,
          KT = cT ? cT.coolantSecs : lT.pct >= 100 && TT.baf2RxOut >= 1 ? SC(TT, TT.baf2RxThrottle).coolantSecs : null;
        let OT, yT = !1;
        if (lT.pct < 100) {
          const cT = 1 === lT.makersShort,
            KT = !MT && TT.baf2RxCryoOpen ? "OrCryo" : "";
          OT = lT.makersShort > 0 ? kT(MT ? `${RC}rxCryoAddMixer${cT?"":"s"}` : `${RC}rxWaterAddCondenser${cT?"":"s"}${KT}`, {
            count: String(lT.makersShort)
          }) : kT(`${RC}rxWaterNeeds`, {
            rate: IC(lT.needPerS)
          })
        } else if (null !== KT) OT = kT(`${RC}rxWaterRunsOut`, {
          time: aK(kT, KT)
        });
        else if (lT.waterBeside > 0) OT = kT(`${RC}rxCryoPlusWater`, {
          rate: IC(lT.waterBeside)
        });
        else {
          const TT = function(TT) {
            return TT.inPerS <= 0 ? "rxWaterNoSupply" : TT.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(lT);
          yT = "rxWaterNoSupply" === TT, OT = kT(`${RC}${TT}`, {
            amount: of(lT.stored)
          })
        }
        return {
          kind: MT ? "Cryo" : "Water",
          label: kT(MT ? `${RC}rxCryo` : `${RC}rxWater`),
          number: `${IC(lT.usePerS)}/s`,
          preview: cT ? `${IC(cT.coolPerS)}/s` : null,
          note: OT,
          tone: "noWater" === TT.baf2RxState ? "danger" : yT ? "warn" : (fT = lT.pct, xT = KT, fT < 100 ? "danger" : null === xT ? null : xT < 300 ? "danger" : "warn"),
          share: lT.pct / 100,
          why: MT ? `${RC}rxWhy_cryo` : `${RC}rxWhy_water`,
          short: lT.pct < 100
        };
        var fT, xT
      }(KT, MT, lT), CT = Pf(KT, OT.waste, yT), jT = WC(KT, MT), vT = SC(KT, KT.baf2RxTarget), tT = xT && Math.abs(vT.settle - KT.baf2RxHeat) >= 3, hT = lT ? lT.pelletsPerMin / 60 : null;
      return (0, wK.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, wK.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, wK.jsx)(BA, {
            kind: "Fuel",
            label: MT(`${RC}rxFuel`),
            number: String(fT),
            preview: null !== hT && hT > 0 && KT.baf2RxFuel > 0 ? aK(MT, KT.baf2RxFuel / hT) : null,
            note: KT.baf2RxFuel <= 0 ? MT(`${RC}rxFuelEmpty`) : yT > 0 ? MT(`${RC}rxFuelLeft`, {
              time: aK(MT, KT.baf2RxFuel / yT)
            }) : MT(1 === fT ? `${RC}rxFuelPellet` : `${RC}rxFuelPellets`),
            tone: "noFuel" === KT.baf2RxState ? "danger" : KT.baf2RxFuel < 2 ? "warn" : null,
            share: KT.baf2RxFuel / OT.fuel,
            onExplain: () => {
              cT(`${RC}rxWhy_fuel`)
            }
          }), (0, wK.jsx)(BA, {
            kind: AT.kind,
            label: AT.label,
            number: AT.number,
            preview: AT.preview,
            note: AT.note,
            tone: AT.tone,
            share: AT.share,
            onExplain: () => {
              cT(AT.why)
            }
          })]
        }), (0, wK.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, wK.jsx)(WA, {
            kind: "Fuel",
            step: IT,
            short: "noFuel" === KT.baf2RxState
          }), (0, wK.jsx)(WA, {
            kind: AT.kind,
            step: IT,
            short: AT.short || "noWater" === KT.baf2RxState
          })]
        }), (0, wK.jsx)(BC, {
          view: kT,
          heat: KT.baf2RxHeat,
          settle: Math.min(Nf, vT.settle),
          settleLine: tT ? MT(`${RC}rxHeatSettles`, {
            pct: String(Math.round(vT.settle)),
            time: aK(MT, vT.settleS)
          }) : null,
          settleBad: vT.settle > 100,
          explain: cT
        }), (0, wK.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, wK.jsx)(WA, {
            kind: "Power",
            step: IT
          }), (0, wK.jsx)(WA, {
            kind: "Waste",
            step: xT && KT.baf2RxFuel - KT.baf2RxPu > 0 ? IT : 0,
            short: CT.full
          })]
        }), (0, wK.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, wK.jsx)(BA, {
            kind: "Power",
            label: MT(`${RC}rxPowerOut`),
            number: `\u26a1 ${of(KT.baf2RxOut)}/s`,
            preview: lT ? of(lT.out) : null,
            note: jT.note,
            share: jT.share,
            onExplain: () => {
              cT(`${RC}rxWhy_power`)
            }
          }), (0, wK.jsx)(BA, {
            kind: "Waste",
            label: MT(`${RC}rxWaste`),
            number: `${Math.floor(KT.baf2RxWaste)}/${OT.waste}`,
            note: CT.full ? MT(`${RC}rxWasteFull`) : null !== CT.fullInS ? MT(`${RC}rxWasteFullIn`, {
              time: aK(MT, CT.fullInS)
            }) : MT(`${RC}rxWasteSpent`),
            tone: "wasteFull" === KT.baf2RxState ? "danger" : CT.full ? "warn" : null,
            share: KT.baf2RxWaste / OT.waste,
            onExplain: () => {
              cT(`${RC}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function pC(TT) {
      let {
        view: kT,
        explain: cT
      } = TT;
      const {
        t: lT
      } = (0, bM.B)(), MT = kT.plan;
      if (!MT) return null;
      const KT = MT.fuelHeat <= 0 ? null : MT.cooling > 0 ? Math.min(Nf, 100 * MT.fuelHeat / MT.cooling) : Nf,
        OT = lT(`${RC}rxPlanAtFull`);
      return (0, wK.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, wK.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, wK.jsx)(BA, {
            kind: "Fuel",
            label: lT(`${RC}rxFuel`),
            number: lT(`${RC}rxPlanPerMin`, {
              amount: Hf(MT.pelletsPerMin)
            }),
            note: lT(`${RC}rxPlanPellets`),
            onExplain: () => {
              cT(`${RC}rxWhy_fuel`)
            }
          }), (0, wK.jsx)(BA, {
            kind: "Water",
            label: lT(`${RC}rxWater`),
            number: `${IC(MT.waterPerS)}/s`,
            note: kT.status.baf2RxCryoOpen && MT.waterPerS > 0 ? lT(`${RC}rxPlanOrCryo`, {
              rate: IC(jf(MT, qT.e) * qT.m)
            }) : OT,
            onExplain: () => {
              cT(`${RC}rxWhy_water`)
            }
          })]
        }), (0, wK.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, wK.jsx)(WA, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, wK.jsx)(WA, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, wK.jsx)(BC, {
          view: kT,
          heat: null,
          settle: KT,
          settleLine: null === KT ? null : lT(`${RC}rxPlanHeat`, {
            pct: String(Math.round(KT))
          }),
          settleBad: null !== KT && KT > 100,
          explain: cT
        }), (0, wK.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, wK.jsx)(WA, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, wK.jsx)(WA, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, wK.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, wK.jsx)(BA, {
            kind: "Power",
            label: lT(`${RC}rxPowerOut`),
            number: `\u26a1 ${of(MT.max)}/s`,
            note: OT,
            onExplain: () => {
              cT(`${RC}rxWhy_power`)
            }
          }), (0, wK.jsx)(BA, {
            kind: "Waste",
            label: lT(`${RC}rxWaste`),
            number: lT(`${RC}rxPlanPerMin`, {
              amount: Hf(MT.pelletsPerMin)
            }),
            note: lT(`${RC}rxWasteSpent`),
            onExplain: () => {
              cT(`${RC}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const iC = "buildAFactory2Game:",
      qC = {
        key: `${iC}rxWaiting`,
        params: {},
        tone: "info"
      };

    function sC(TT, kT) {
      return 0 !== (TT.baf2RxFlags & kT)
    }

    function Tj(TT) {
      var kT, cT;
      let {
        store: MT,
        close: KT
      } = TT;
      const {
        t: OT
      } = (0, bM.B)(), yT = yC(MT), {
        explained: fT,
        hinting: xT,
        explain: IT,
        explainOnce: AT
      } = pA("baf2RxExplained"), CT = (0, lT.useCallback)(((TT, kT) => {
        IT(OT(TT, kT))
      }), [IT, OT]), jT = (0, lT.useCallback)(((TT, kT) => {
        AT(TT, OT(TT, kT))
      }), [AT, OT]), [vT, tT] = (0, lT.useState)(!1), [hT, NT] = (0, lT.useState)(!1), QT = null === yT || void 0 === yT ? void 0 : yT.status, ST = null === QT || void 0 === QT ? void 0 : QT.baf2RxAt.join(","), DT = !0 === (null === QT || void 0 === QT ? void 0 : QT.baf2RxFormed);
      (0, lT.useEffect)((() => {
        NT(!1), tT(!1)
      }), [ST, DT]), (0, lT.useEffect)((() => (MT.opened(), () => {
        MT.closed()
      })), [MT]);
      const aT = void 0 !== QT && sC(QT, Nk),
        FT = QT ? DT ? hf(QT) : null !== yT && void 0 !== yT && yT.plan ? function(TT, kT) {
          if (TT <= 0) return "off";
          if (kT <= 0) return "alarm";
          const cT = 100 * TT / kT;
          return cT < 50 ? "calm" : cT < xf ? "warm" : cT <= 100 ? "hot" : "alarm"
        }(yT.plan.fuelHeat, yT.plan.cooling) : "off" : "off",
        rT = QT ? Qf(QT) : null,
        PT = yT ? yT.waiting ? qC : DT ? PC(yT.status) : function(TT) {
          var kT, cT;
          const {
            status: lT
          } = TT;
          return wC({
            left: lT.baf2RxNeed.reduce(((TT, kT) => {
              let [, cT] = kT;
              return TT + cT
            }), 0),
            bad: lT.baf2RxBad,
            rods: null !== (kT = null === (cT = TT.plan) || void 0 === cT ? void 0 : cT.rods) && void 0 !== kT ? kT : 0,
            canFill: sC(lT, tk),
            melted: sC(lT, vk),
            idle: TT.looks.reduce(((TT, kT) => TT + (kT === Kf ? 1 : 0)), 0)
          })
        }(yT) : null,
        wT = xT && null !== PT && ("ok" === PT.tone || "info" === PT.tone),
        mT = QT ? function(TT) {
          const kT = 0 !== (TT.baf2RxFlags & Ck),
            cT = TT.baf2RxHeat < Wy;
          return 0 !== (TT.baf2RxFlags & vk) || cT && (kT || !TT.baf2RxFormed) ? null : TT.baf2RxFormed && !kT ? {
            key: `${tf}rxApartScram`,
            params: {}
          } : {
            key: `${tf}rxApartCooling`,
            params: {
              pct: String(Wy)
            }
          }
        }(QT) : null,
        [bT, zT, JT] = null !== (kT = null === yT || void 0 === yT ? void 0 : yT.dims) && void 0 !== kT ? kT : [0, 0, 0],
        oT = `${bT}\xd7${zT}\xd7${JT}`;
      return (0, wK.jsx)(aO.c, {
        close: KT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, wK.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, wK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, wK.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, wK.jsx)(xC, {
                mood: FT
              }), (0, wK.jsxs)("div", {
                children: [(0, wK.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: OT(`${iC}rxTitle`)
                }), yT && (0, wK.jsxs)("p", {
                  className: rM()("Baf2RxSubtitle", DT && (null === rT || void 0 === rT ? void 0 : rT.tone)),
                  children: [DT && !aT ? (0, wK.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": OT(`${iC}rxChangeSize`),
                    onClick: () => {
                      if (!QT) return;
                      const TT = sC(QT, Ck);
                      var kT;
                      (kT = {
                        scram: TT,
                        heat: QT.baf2RxHeat
                      }).scram && kT.heat < Wy ? tT(!0) : CT(TT ? `${iC}rxResizeCooling` : `${iC}rxResizeHot`, {
                        pct: String(Wy)
                      })
                    },
                    children: [oT, " \u270e"]
                  }) : oT, " \xb7 ", OT(DT ? null !== (cT = null === rT || void 0 === rT ? void 0 : rT.label) && void 0 !== cT ? cT : `${iC}rxState_running` : `${iC}rxSubPlanShort`)]
                })]
              })]
            }), (0, wK.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [yT && !aT && (0, wK.jsx)(fC, {
                kind: "reactor",
                busy: yT.busy.has("apart"),
                whyNot: mT ? () => {
                  CT(mT.key, mT.params)
                } : null,
                apart: () => {
                  MT.tap("apart", (() => {
                    MT.send("apart")
                  }))
                }
              }), (0, wK.jsx)(FO.l, {
                onClick: KT
              })]
            })]
          }), yT && PT && (0, wK.jsxs)("div", {
            className: "Baf2RxBody",
            children: [DT ? (0, wK.jsx)(nC, {
              view: yT,
              explain: CT,
              preview: QC(yT.status)
            }) : (0, wK.jsx)(pC, {
              view: yT,
              explain: CT
            }), (0, wK.jsx)(iA, {
              text: wT ? `${FC(OT,PT)} ${OT(`${iC}rxTapHint`)}` : FC(OT, PT),
              tone: PT.tone,
              explained: fT
            }), aT ? (0, wK.jsxs)(wK.Fragment, {
              children: [(0, wK.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: OT(`${iC}rxNotYours`)
              }), (0, wK.jsx)(lC, {
                status: yT.status,
                store: MT,
                readOnly: !0
              })]
            }) : DT && !hT ? (0, wK.jsxs)(wK.Fragment, {
              children: [(0, wK.jsx)(eC, {
                view: yT,
                store: MT,
                explain: CT,
                explainOnce: jT
              }), void 0 !== yT.status.baf2RxLayout && TC(yT.status) && (0, wK.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, wK.jsx)(lC, {
                  status: yT.status,
                  store: MT,
                  readOnly: !1,
                  bare: !0
                }), (0, wK.jsx)(cC, {
                  status: yT.status,
                  store: MT,
                  busy: yT.busy.has("fill")
                })]
              })]
            }) : (0, wK.jsxs)(wK.Fragment, {
              children: [(0, wK.jsx)(GC, {
                view: yT,
                store: MT,
                keepSize: DT ? () => {
                  NT(!1)
                } : void 0
              }), af(yT.dims, yT.status.baf2RxDims) && (0, wK.jsx)(VC, {
                need: yT.status.baf2RxNeed,
                explain: CT
              }), (0, wK.jsx)(lC, {
                status: yT.status,
                store: MT,
                readOnly: !1
              })]
            }), vT && (0, wK.jsx)(OC, {
              id: "baf2ResizeTitle",
              title: `${iC}rxResizeConfirmTitle`,
              body: `${iC}rxResizeConfirmBody`,
              yes: `${iC}rxChangeSize`,
              cancel: () => {
                tT(!1)
              },
              confirm: () => {
                tT(!1), NT(!0)
              }
            })]
          })]
        })
      })
    }
    class kj {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(TT) {
        this.view = TT;
        for (const kT of this.listeners) kT()
      }
      get() {
        return this.view
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
    }

    function cj(TT) {
      let {
        commands: kT,
        store: cT,
        power: MT,
        water: KT,
        reactor: OT,
        battery: yT,
        collider: fT,
        terminal: xT,
        quests: IT,
        close: AT,
        leave: CT,
        askIslands: jT,
        showCore: vT,
        openSocial: tT
      } = TT;
      const {
        userContext: hT
      } = (0, Gy.b)(), NT = ey.featureFlags.useSocialFeatures && hT.isLoggedIn(), [QT, ST] = (0, lT.useState)((() => cT.get()));
      (0, lT.useEffect)((() => cT.subscribe((() => {
        ST(cT.get())
      }))), [cT]);
      const DT = "islands" === (null === QT || void 0 === QT ? void 0 : QT.kind) ? QT.backToCore : void 0;
      return (0, wK.jsxs)(dO.Provider, {
        value: kT,
        children: ["core" === (null === QT || void 0 === QT ? void 0 : QT.kind) && (0, wK.jsx)(CA, {
          view: QT.core,
          close: AT,
          askIslands: jT
        }), "dropMap" === (null === QT || void 0 === QT ? void 0 : QT.kind) && (0, wK.jsx)(hA, {
          message: QT.dropMap,
          quests: IT,
          close: AT,
          leave: CT
        }), "islands" === (null === QT || void 0 === QT ? void 0 : QT.kind) && (0, wK.jsx)(GA, {
          message: QT.islands,
          arrivedAtMs: QT.arrivedAtMs,
          close: DT ? () => {
            vT(DT)
          } : AT,
          leave: CT,
          openSocial: NT ? tT : null
        }), "quests" === (null === QT || void 0 === QT ? void 0 : QT.kind) && (0, wK.jsx)(oI, {
          store: IT,
          close: AT
        }), "transfer" === (null === QT || void 0 === QT ? void 0 : QT.kind) && (0, wK.jsx)(MI, {
          message: QT.transfer,
          arrivedAtMs: QT.arrivedAtMs,
          close: AT,
          leave: CT
        }), "power" === (null === QT || void 0 === QT ? void 0 : QT.kind) && (0, wK.jsx)(oO, {
          store: MT,
          close: AT
        }), "water" === (null === QT || void 0 === QT ? void 0 : QT.kind) && (0, wK.jsx)(ty, {
          store: KT,
          close: AT
        }), "reactor" === (null === QT || void 0 === QT ? void 0 : QT.kind) && (0, wK.jsx)(Tj, {
          store: OT,
          close: AT
        }), "battery" === (null === QT || void 0 === QT ? void 0 : QT.kind) && (0, wK.jsx)(ZC, {
          store: yT,
          close: AT
        }), "collider" === (null === QT || void 0 === QT ? void 0 : QT.kind) && (0, wK.jsx)(Qx, {
          store: fT,
          close: AT
        }), "terminal" === (null === QT || void 0 === QT ? void 0 : QT.kind) && (0, wK.jsx)(YA, {
          store: xT,
          close: AT,
          send: TT => {
            kT.send(TT)
          }
        })]
      })
    }
    var lj = cT(38332);

    function Mj(TT, kT) {
      return TT.distSq - kT.distSq
    }
    class Kj {
      constructor() {
        this.list = [], this.pool = []
      }
      add(TT, kT, cT, lT) {
        let MT = this.pool[this.list.length];
        MT || (MT = {
          x: 0,
          y: 0,
          distSq: 0,
          element: kT,
          liftRem: cT,
          dot: lT
        }, this.pool.push(MT)), MT.x = TT.x, MT.y = TT.y, MT.distSq = TT.distSq, MT.element = kT, MT.liftRem = cT, MT.dot = lT, this.list.push(MT)
      }
    }
    class Oj {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = TT, this.sizes = new WeakMap, this.observer = new ResizeObserver((TT => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const kT of TT) {
            const TT = kT.borderBoxSize[0];
            "dot" !== kT.target.dataset.crowded && 0 !== TT.inlineSize && 0 !== TT.blockSize && this.sizes.set(kT.target, {
              width: TT.inlineSize,
              height: TT.blockSize
            })
          }
        })), this.remPx = 16, this.wj = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.zN = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.zN)
      }
      observe(TT) {
        this.observer.observe(TT)
      }
      unobserve(TT) {
        this.observer.unobserve(TT)
      }
      run(TT) {
        const kT = TT.list;
        kT.sort(Mj);
        const cT = this.pxPerVw,
          lT = this.pxPerVh;
        this.wj.length = 0, this.hud && this.wj.push(...this.hud.boxes(performance.now()));
        for (const KT of kT) {
          var MT;
          const TT = this.sizes.get(KT.element);
          let kT = "no";
          if (TT && TT.width > 0) {
            const MT = KT.x * cT,
              OT = KT.y * lT - KT.liftRem * this.remPx;
            this.fit(MT, OT, TT.width, TT.height) || (kT = KT.dot && this.fit(MT, OT, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (MT = KT.element.dataset.crowded) && void 0 !== MT ? MT : "no") !== kT && ("no" === kT ? delete KT.element.dataset.crowded : KT.element.dataset.crowded = kT), "hidden" !== kT && (0, lj.e)(KT.element, KT.x, KT.y)
        }
        kT.length = 0
      }
      fit(TT, kT, cT, lT) {
        const MT = TT - cT / 2,
          KT = TT + cT / 2,
          OT = kT - lT,
          yT = this.wj;
        for (let fT = 0; fT < yT.length; fT += 4)
          if (MT < yT[fT + 1] - 2 && KT > yT[fT] + 2 && OT < yT[fT + 3] - 2 && kT > yT[fT + 2] + 2) return !1;
        return yT.push(MT, KT, OT, kT), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.zN)
      }
    }
    const yj = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class fj {
      constructor() {
        this.cards = yj.map((TT => document.getElementsByClassName(TT))), this.watched = yj.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(TT) {
        TT - this.refreshedAt > 1e3 && (this.refreshedAt = TT, this.stale = !0);
        for (let cT = 0; cT < this.cards.length; cT++) {
          var kT;
          const TT = null !== (kT = this.cards[cT][0]) && void 0 !== kT ? kT : null;
          TT !== this.watched[cT] && this.watch(cT, TT)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let TT = 0; TT < this.watched.length; TT++) this.watch(TT, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const TT = this.list;
        TT.length = 0;
        for (const kT of this.watched) {
          if (!kT || kT.closest(".NoRoom")) continue;
          const cT = kT.getBoundingClientRect();
          let lT = cT.top,
            MT = cT.bottom;
          if (kT === this.watched[0] && this.hud) {
            const TT = this.hud.getBoundingClientRect();
            lT = Math.max(lT, TT.top), MT = Math.min(MT, TT.bottom)
          }
          cT.width > 0 && MT > lT && TT.push(cT.left, cT.right, lT, MT)
        }
      }
      watch(TT, kT) {
        const cT = this.watched[TT];
        var lT, MT;
        (cT && this.sizes.unobserve(cT), this.watched[TT] = kT, this.stale = !0, kT && this.sizes.observe(kT), 0 === TT) && (null === (lT = this.hud) || void 0 === lT || lT.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (MT = null === kT || void 0 === kT ? void 0 : kT.closest(".Baf2QuestHud")) && void 0 !== MT ? MT : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const xj = [0, 0, 0],
      Ij = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Aj(TT, kT, cT, lT, MT, KT) {
      let [OT, yT, fT] = lT;
      const xT = (OT + .5 - cT[0]) ** 2 + (yT - cT[1]) ** 2 + (fT + .5 - cT[2]) ** 2;
      let IT = null;
      xT <= KT ** 2 && (xj[0] = OT + .5, xj[1] = yT + MT, xj[2] = fT + .5, IT = kT.projectWorldPosToViewport(xj));
      const AT = null !== IT && IT.x > -5 && IT.x < 105 && IT.y > -5 && IT.y < 105;
      return (0, lj.g)(TT, !AT), AT ? (Ij.x = IT.x, Ij.y = IT.y, Ij.distSq = xT, Ij) : null
    }
    class Cj {
      constructor(TT) {
        this.onElement = TT, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(TT) {
        const kT = [];
        for (let cT = 0; cT + 4 < TT.length; cT += 5) {
          const lT = [TT[cT], TT[cT + 1], TT[cT + 2]];
          kT.push({
            key: lT.join(","),
            pos: lT,
            status: MM[TT[cT + 3]],
            kind: bk[TT[cT + 4]]
          })
        }
        this.markers = kT, this.keys = new Set(kT.map((TT => {
          let {
            key: kT
          } = TT;
          return kT
        }))), this.notify()
      }
      covers(TT) {
        return this.keys.has(TT)
      }
      get() {
        return this.markers
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      bind(TT) {
        let kT = this.refs.get(TT);
        return kT || (kT = kT => {
          const cT = this.elements.get(TT);
          var lT, MT;
          cT && (null === (lT = this.onElement) || void 0 === lT || lT.call(this, cT, !1));
          kT ? (this.elements.set(TT, kT), null === (MT = this.onElement) || void 0 === MT || MT.call(this, kT, !0)) : (this.elements.delete(TT), this.refs.delete(TT))
        }, this.refs.set(TT, kT)), kT
      }
      onAfterRender(TT, kT, cT) {
        for (const lT of this.markers) {
          const MT = this.elements.get(lT.key);
          if (!MT) continue;
          const KT = Aj(MT, TT, kT, lT.pos, 1.05, 24);
          KT && cT.add(KT, MT, .45, !0)
        }
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
    }
    const jj = {
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
    const vj = (0, lT.memo)((function(TT) {
        let {
          status: kT,
          kind: cT,
          bindRef: lT
        } = TT;
        const {
          t: MT
        } = (0, bM.B)(), KT = function(TT, kT) {
          var cT;
          if ("noFuel" === TT) {
            var lT, MT;
            const TT = null === (lT = Vk[kT]) || void 0 === lT || null === (MT = lT.fuels) || void 0 === MT ? void 0 : MT.find((TT => Mc.includes(TT)));
            return null !== TT && void 0 !== TT ? TT : jj.noFuel
          }
          return void 0 !== (null === (cT = Vk[kT]) || void 0 === cT ? void 0 : cT.cryoMade) ? "noOutlet" === TT ? "Fluid Pipe" : "noInput" === TT ? "Biomass" : jj[TT] : jj[TT]
        }(kT, cT);
        return (0, wK.jsxs)("div", {
          className: rM()("Baf2StallMarker", kT),
          ref: lT,
          hidden: !0,
          children: [KT && (0, wK.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, wK.jsx)(JM.d, {
              itemName: KT,
              amount: 0
            })
          }), (0, wK.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === kT ? "?" : "!"
          }), (0, wK.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: MT(`buildAFactory2Game:stallTag_${kT}`)
          })]
        })
      })),
      tj = (0, lT.memo)((function(TT) {
        let {
          controller: kT
        } = TT;
        const [cT, MT] = (0, lT.useState)((() => kT.get()));
        return (0, lT.useEffect)((() => (MT(kT.get()), kT.subscribe((() => {
          MT(kT.get())
        })))), [kT]), (0, wK.jsx)("div", {
          className: "Baf2StallMarkers",
          children: cT.map((TT => (0, wK.jsx)(vj, {
            status: TT.status,
            kind: TT.kind,
            bindRef: kT.bind(TT.key)
          }, TT.key)))
        })
      })),
      hj = hc.k + 150;
    class Nj {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(TT, kT) {
        const cT = kT - TT;
        null === this.offset || cT < this.offset ? this.offset = cT : this.offset = Math.min(cT, this.offset + .02 * (kT - this.sampledAt)), this.sampledAt = kT
      }
      toLocal(TT) {
        var kT;
        return TT + (null !== (kT = this.offset) && void 0 !== kT ? kT : 0) + hj
      }
    }
    var Qj = cT(38341);
    const Sj = 15 * Math.PI / 180,
      Dj = Math.SQRT2,
      aj = [4, 2];

    function Fj(TT, kT) {
      const cT = [1 / 0, 1 / 0, 1 / 0],
        lT = [-1 / 0, -1 / 0, -1 / 0];
      for (const fT of TT)
        for (let TT = 0; TT < 3; TT++) cT[TT] = Math.min(cT[TT], fT[TT]), lT[TT] = Math.max(lT[TT], fT[TT]);
      const MT = (cT[0] + lT[0]) / 2,
        KT = (cT[1] + lT[1]) / 2,
        OT = (cT[2] + lT[2]) / 2;
      let yT = 0;
      for (const fT of TT) yT = Math.max(yT, Math.hypot(fT[0] - MT, fT[1] - KT, fT[2] - OT));
      return {
        x: MT,
        y: KT,
        z: OT,
        r: yT + kT
      }
    }

    function rj(TT, kT, cT) {
      const lT = kT.x - TT.x,
        MT = kT.y - TT.y,
        KT = kT.z - TT.z,
        OT = Math.sqrt(lT * lT + MT * MT + KT * KT);
      if (OT <= kT.r + 8) return 1;
      const yT = kT.r / OT,
        fT = Math.sqrt(1 - yT * yT),
        xT = fT < -TT.cosHalf,
        IT = (lT * TT.dx + MT * TT.dy + KT * TT.dz) / OT;
      if (!xT && IT < TT.cosHalf * fT - TT.sinHalf * yT) return 0;
      const AT = cT * Dj * TT.frameMs * TT.pxPerBlock / (OT - kT.r);
      for (let CT = 0; CT < aj.length; CT++)
        if (AT * aj[CT] <= 1) return aj[CT];
      return 1
    }

    function Pj(TT, kT) {
      return {
        name: TT,
        at: kT,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const wj = [0, 0, 0];

    function mj(TT, kT, cT) {
      let [, lT, MT, KT, OT, yT] = kT;
      const fT = hc.i * (null !== OT && void 0 !== OT ? OT : 1),
        xT = [];
      for (let jT = 0; jT < lT.length; jT += 3) xT.push([lT[jT] + .5, lT[jT + 1] + .65, lT[jT + 2] + .5]);
      const IT = [];
      for (let jT = 0; jT < xT.length - 1; jT++) {
        const [TT, kT] = [xT[jT], xT[jT + 1]];
        IT.push([(TT[0] + kT[0]) / 2, (TT[1] + kT[1]) / 2, (TT[2] + kT[2]) / 2])
      }
      const AT = xT.slice(1, -1),
        CT = new Uint8Array(AT.length);
      for (const jT of null !== yT && void 0 !== yT ? yT : []) CT[jT >> 1] |= 1 & jT ? 2 : 1;
      return {
        island: TT,
        length: AT.length,
        loop: KT,
        cellsPerMs: fT,
        edges: IT,
        uv: AT,
        bounds: Fj([...IT, ...AT], .3),
        changed: !0,
        culled: !1,
        hide: CT,
        items: MT.map((TT => {
          let [kT, lT] = TT;
          return Pj(kT, (0, hc.G)(kT, lT, cT, fT).at)
        }))
      }
    }

    function bj(TT, kT) {
      const {
        items: cT
      } = TT;
      if (0 === cT.length) return;
      const lT = TT.length / TT.cellsPerMs,
        MT = Math.floor((kT - cT[0].at) / lT) - 1;
      if (MT > 0)
        for (const KT of cT) KT.at += MT * lT
    }

    function zj(TT, kT) {
      const cT = Math.min(Math.floor(kT), TT.length - 1),
        lT = TT.hide[cT];
      return 0 !== lT && 0 !== (lT & (kT - cT < .5 ? 1 : 2))
    }

    function Jj(TT, kT) {
      const cT = Math.min(Math.floor(kT), TT.length - 1),
        lT = kT - cT,
        MT = lT < .5,
        KT = MT ? TT.edges[cT] : TT.uv[cT],
        OT = MT ? TT.uv[cT] : TT.edges[cT + 1],
        yT = MT ? 2 * lT : 2 * lT - 1;
      wj[0] = KT[0] + (OT[0] - KT[0]) * yT, wj[1] = KT[1] + (OT[1] - KT[1]) * yT, wj[2] = KT[2] + (OT[2] - KT[2]) * yT
    }
    const oj = Math.PI / 4;
    class Hj {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Nj, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.zN = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(TT) {
        const kT = performance.now();
        this.clock.sample(TT.baf2BeltLinesAt, kT), this.queue(TT.baf2BeltLinesAt, TT, 0, null, null, 0), this.applyDue(kT)
      }
      onMoves(TT) {
        const kT = performance.now(),
          cT = TT.baf2BeltMovesAt;
        this.clock.sample(cT, kT);
        for (const [lT, MT, KT, OT] of TT.baf2BeltMoveList) null === MT ? this.queue(cT - KT, null, lT, null, null, null !== OT && void 0 !== OT ? OT : 0) : this.queue(cT - KT, null, lT, MT, null !== OT && void 0 !== OT ? OT : null, 0);
        this.applyDue(kT)
      }
      start(TT) {
        this.pool = new Qj.d(TT, {
          scale: .3,
          yaw: oj
        }, 64), this.zN(), window.addEventListener("resize", this.zN)
      }
      onAfterRender(TT) {
        const {
          pool: kT
        } = this;
        if (!kT) return;
        const cT = performance.now(),
          lT = cT - this.lastRenderAt;
        this.lastRenderAt = cT, lT < 100 && (this.frameMs += .1 * (lT - this.frameMs));
        const MT = cT + this.frameMs;
        this.applyDue(MT);
        const KT = TT.cameraPosition,
          OT = kT.follow(KT);
        this.setView(TT, KT);
        const yT = this.frame++;
        for (let fT = 0; fT < this.shown.length; fT++) {
          const TT = this.shown[fT],
            cT = rj(this.view, TT.bounds, TT.cellsPerMs),
            lT = TT.culled && 0 !== cT;
          if (TT.culled = 0 === cT, !OT && !TT.changed && !lT && (0 === cT || (yT + fT) % cT !== 0)) continue;
          TT.changed = !1, TT.loop && (bj(TT, MT), (0, hc.A)(TT.items, TT.length, MT, TT.cellsPerMs));
          let KT = TT.length;
          for (let yT = 0; yT < TT.items.length; yT++) {
            const cT = TT.items[yT],
              lT = (0, hc.I)(cT.at, KT, MT, TT.cellsPerMs);
            if (KT = lT - hc.s, zj(TT, lT)) {
              null === cT.kind || cT.hidden || (cT.kind.hide(cT.slot), cT.hidden = !0);
              continue
            }
            let fT = cT.kind;
            if (null === fT) {
              if (fT = kT.kindOf(cT.name), null === fT) continue;
              cT.kind = fT, cT.slot = fT.take(), cT.hidden = !0, cT.drawn = NaN
            } else if (lT === cT.drawn && !cT.hidden && !OT) continue;
            Jj(TT, lT), fT.write(cT.slot, wj[0], wj[1], wj[2]), cT.hidden = !1, cT.drawn = lT
          }
        }
        kT.commit()
      }
      dispose() {
        var TT;
        window.removeEventListener("resize", this.zN), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (TT = this.pool) || void 0 === TT || TT.dispose(), this.pool = null
      }
      setView(TT, kT) {
        const {
          cameraDir: cT,
          lastDir: lT
        } = this, MT = TT.cameraDirection;
        for (let IT = 0; IT < 3; IT++) lT[IT] = cT[IT], cT[IT] = MT[IT];
        const KT = cT[0] * lT[0] + cT[1] * lT[1] + cT[2] * lT[2],
          OT = Number.isNaN(KT) ? 0 : Math.acos(Math.min(1, Math.max(-1, KT))),
          {
            width: yT,
            height: fT
          } = this,
          xT = TT.tanHalfFovX;
        ! function(TT, kT, cT, lT, MT, KT, OT) {
          let yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          TT.x = kT[0], TT.y = kT[1], TT.z = kT[2], TT.dx = cT[0], TT.dy = cT[1], TT.dz = cT[2];
          const fT = Math.min(Math.PI, Math.atan(Math.sqrt(lT * lT + MT * MT)) + Sj + yT);
          TT.cosHalf = Math.cos(fT), TT.sinHalf = Math.sin(fT), TT.pxPerBlock = KT / (2 * MT), TT.frameMs = OT
        }(this.view, kT, cT, xT, xT * fT / yT, fT * window.devicePixelRatio, this.frameMs, OT)
      }
      queue(TT, kT, cT, lT, MT, KT) {
        const OT = Math.max(this.clock.toLocal(TT), this.lastPendingAt);
        this.lastPendingAt = OT, this.pending.push({
          at: OT,
          lines: kT,
          line: cT,
          name: lT,
          pos: MT,
          idx: KT
        })
      }
      applyDue(TT) {
        const {
          pending: kT
        } = this;
        for (; this.pendingHead < kT.length && kT[this.pendingHead].at <= TT;) {
          const TT = kT[this.pendingHead++];
          if (TT.lines) this.applyLines(TT.lines, TT.at), TT.lines = null;
          else {
            const kT = this.lines.get(TT.line);
            kT && this.applyMove(kT, TT, TT.at)
          }
        }
        this.pendingHead === kT.length ? (kT.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > kT.length && (kT.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(TT, kT) {
        this.clearIsland(TT.baf2BeltIsland);
        for (const cT of TT.baf2BeltLineList) this.lines.set(cT[0], mj(TT.baf2BeltIsland, cT, kT));
        this.shown = [...this.lines.values()]
      }
      applyMove(TT, kT, cT) {
        let {
          name: lT,
          pos: MT,
          idx: KT
        } = kT;
        TT.changed = !0, TT.loop && (bj(TT, cT), (0, hc.A)(TT.items, TT.length, cT, TT.cellsPerMs)), null !== lT && null !== MT ? (0, hc.D)(TT.items, TT.length, Pj(lT, cT), MT, cT, TT.cellsPerMs) : null !== lT ? TT.items.push(Pj(lT, cT)) : TT.items.length > KT && this.release((0, hc.L)(TT.items, TT.length, cT, TT.cellsPerMs, KT))
      }
      clearIsland(TT) {
        for (const [kT, cT] of this.lines)
          if (cT.island === TT) {
            for (const TT of cT.items) this.release(TT);
            this.lines.delete(kT)
          }
      }
      release(TT) {
        null !== TT.kind && (TT.kind.release(TT.slot), TT.kind = null, TT.slot = -1, TT.hidden = !0, TT.drawn = NaN)
      }
    }
    var ej = cT(36416),
      Gj = cT(38359);

    function Vj(TT) {
      let {
        depth: kT,
        store: cT,
        t: MT
      } = TT;
      const KT = function(TT) {
        const [kT, cT] = (0, lT.useState)(TT.lastPlayerY());
        return (0, KI.g)(ZM, cT), (0, lT.useEffect)((() => {
          cT(TT.lastPlayerY())
        }), [TT]), kT
      }(cT);
      if (null === KT) return null;
      const [OT, yT] = kT, fT = KT > OT ? OT : null !== yT && KT < yT ? yT : null, xT = {
        y: DK(KT),
        target: null === fT ? "" : DK(fT)
      };
      return (0, wK.jsx)("span", {
        className: rM()("Baf2QuestDepth", {
          Reached: null === fT
        }),
        children: MT(`${xI}${null===fT?"questDepthReached":"questDepth"}`, xT)
      })
    }

    function Ej(TT) {
      let {
        also: kT,
        view: cT,
        t: lT
      } = TT;
      return (0, wK.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, wK.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, wK.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, wK.jsx)("strong", {
            children: lT(`${xI}questAlsoDownHere`)
          }), (0, wK.jsx)("span", {
            className: "Baf2QuestChips",
            children: kT.map((TT => {
              let [kT, MT, KT, OT] = TT;
              return (0, wK.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": lT(`${xI}questAlsoItem`, {
                  item: AI(lT, cT.itemNames[kT], kT),
                  have: String(MT),
                  need: String(KT)
                }),
                children: [(0, wK.jsx)(vI, {
                  item: kT
                }), (0, wK.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${MT}/${KT}`
                }), null !== OT && (0, wK.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: lT(`${xI}questAlsoDepth`, {
                    y: DK(OT)
                  })
                })]
              }, kT)
            }))
          })]
        })]
      })
    }
    var Zj = cT(3348);

    function uj(TT) {
      let {
        expanded: kT,
        inventoryOpen: cT,
        children: MT
      } = TT;
      const KT = (0, lT.useRef)(null);
      return (0, lT.useEffect)((() => {
        const TT = KT.current,
          kT = null === TT || void 0 === TT ? void 0 : TT.closest(".RightElements"),
          lT = null === TT || void 0 === TT ? void 0 : TT.firstElementChild;
        if (!TT || !kT || !lT) return;
        return (0, Gj.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [kT, lT], (() => {
          const MT = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === MT.length) return;
          const KT = Math.max(...MT.map((TT => TT.getBoundingClientRect().bottom))),
            OT = kT.getBoundingClientRect(),
            yT = cT ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (yT) {
            const kT = parseFloat(getComputedStyle(lT).marginLeft) + parseFloat(getComputedStyle(lT).marginRight),
              cT = OT.right - yT.getBoundingClientRect().right - 8 - kT;
            TT.style.setProperty("--baf2-quest-room", `${cT}px`), TT.classList.toggle("NoRoom", cT < 150)
          } else TT.style.removeProperty("--baf2-quest-room"), TT.classList.remove("NoRoom");
          const fT = KT - OT.top + 8,
            xT = function(TT, kT, cT) {
              const lT = kT.getBoundingClientRect(),
                MT = TT.getBoundingClientRect(),
                KT = (0, Zj.g)(MT.left, MT.right, lT.top + cT);
              if (null !== KT && KT < lT.bottom) return KT - lT.top;
              return lT.height - (parseFloat(getComputedStyle(kT).paddingBottom) || 0)
            }(TT, kT, fT) - 8,
            IT = window.innerHeight / 2 - OT.top,
            {
              top: AT,
              maxHeight: CT
            } = function(TT, kT, cT, lT, MT) {
              const KT = Math.min(cT, Math.max(0, kT - TT)),
                OT = MT ? TT : Math.max(TT, Math.min(lT - KT / 2, kT - KT));
              return {
                top: OT,
                maxHeight: Math.max(0, kT - OT)
              }
            }(fT, xT, function(TT) {
              const kT = TT.firstElementChild,
                cT = kT ? kT.scrollHeight - kT.clientHeight : 0;
              return TT.getBoundingClientRect().height + Math.max(0, cT)
            }(lT), IT, rK());
          TT.style.top = `${AT}px`, TT.style.maxHeight = `${CT}px`
        }))
      }), [cT]), (0, wK.jsx)("div", {
        ref: KT,
        className: rM()("Baf2QuestHud", {
          Expanded: kT
        }),
        children: MT
      })
    }

    function Xj(TT) {
      let {
        amount: kT,
        t: cT
      } = TT;
      return (0, wK.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, wK.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, wK.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: cT(`${xI}questStepsDone`, {
            amount: String(kT)
          })
        })]
      })
    }

    function dj(TT) {
      let {
        pulse: kT
      } = TT;
      return 0 === kT ? null : (0, wK.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, kT)
    }

    function Lj(TT) {
      var kT;
      let {
        store: cT
      } = TT;
      const MT = (0, KI.i)(EM, cT.get()),
        [KT, OT] = (0, lT.useState)(!1),
        {
          t: yT
        } = (0, bM.B)(),
        fT = function() {
          const [TT, kT] = (0, lT.useState)(rK);
          return (0, lT.useEffect)((() => (kT(rK()), PK(kT))), []), TT
        }(),
        {
          openInGameMenuName: xT,
          openEverythingMenuName: IT
        } = (0, DM.n)(["openInGameMenuName", "openEverythingMenuName"]),
        AT = "inventory" === xT && null === IT,
        CT = null !== xT && !AT || null !== IT;
      if (! function(TT) {
          return null !== TT.name || null !== TT.side
        }(MT) || CT || "off" === MT.tutorial) return null;
      const jT = gM(MT.rows),
        vT = jT.filter((TT => TT.done)).length,
        tT = function(TT, kT) {
          const cT = BM(TT);
          let lT = 0;
          return TT.filter(((TT, MT) => !!TT.justFinished || !(TT.done || MT < cT || lT > kT) && (lT++, !0)))
        }(MT.rows, fT ? 0 : 2),
        hT = fT ? tT : function(TT, kT) {
          const cT = kT.filter((TT => !TT.justFinished));
          if (cT.length < 2) return [...kT];
          const lT = TT.indexOf(cT[0]),
            MT = TT.indexOf(cT[cT.length - 1]),
            KT = new Set(gM(TT));
          return TT.filter(((TT, cT) => kT.includes(TT) || TT.done && KT.has(TT) && cT > lT && cT < MT))
        }(MT.rows, tT),
        NT = KT ? MT.rows : hT,
        QT = KT || fT ? [] : function(TT, kT) {
          const cT = new Array(kT.length + 1).fill(0),
            lT = new Set(gM(TT));
          let MT = 0;
          for (const KT of TT) MT < kT.length && KT === kT[MT] ? MT++ : KT.done && lT.has(KT) && cT[MT]++;
          return cT
        }(MT.rows, hT),
        ST = KT || hT.length < MT.rows.length || null !== MT.reward,
        DT = RM(MT),
        aT = DT ? yT(`${xI}questLineComplete`) : MT.tier ? NI(yT, MT.tier) : yT(`${xI}currentQuest`),
        FT = function(TT) {
          var kT, cT;
          if (RM(TT)) return null;
          const lT = null === (kT = TT.chapters) || void 0 === kT ? void 0 : kT.find((kT => {
            let [cT] = kT;
            return cT === TT.tier
          }));
          if (!lT) return null;
          const MT = lT[1].filter((TT => !TT[4]));
          if (0 === MT.length) return null;
          const KT = null === (cT = TT.name) || void 0 === cT ? void 0 : cT[0],
            OT = TT => MT.findIndex((kT => kT[0] === KT && (!TT || !kT[3]))),
            yT = OT(!0),
            fT = yT >= 0 ? yT : OT(!1);
          if (fT >= 0) return [fT + 1, MT.length];
          const xT = MT.filter((TT => TT[3])).length;
          return [Math.min(xT + 1, MT.length), MT.length]
        }(MT);
      return (0, wK.jsx)(ej.g, {
        placement: "topRight",
        children: (0, wK.jsx)(uj, {
          expanded: KT,
          inventoryOpen: AT,
          children: (0, wK.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: II,
            children: [null !== MT.name && (0, wK.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, wK.jsx)(dj, {
                pulse: MT.pulse
              }), (0, wK.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, wK.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [aT, FT && (0, wK.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": yT(`${xI}questPlaceLabel`, {
                      n: String(FT[0]),
                      total: String(FT[1])
                    }),
                    children: yT(`${xI}questPlace`, {
                      n: String(FT[0]),
                      total: String(FT[1])
                    })
                  }), MT.tier && MT.core && !DT && (0, wK.jsx)(QI, {
                    core: MT.core,
                    t: yT
                  })]
                })
              }), (0, wK.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: yT(`${xI}${MT.name[0]}`, CI(MT.name[1]))
              }), (jT.length > 1 || ST) && (0, wK.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [jT.length > 1 && (0, wK.jsx)(SI, {
                  rows: jT,
                  t: yT
                }), ST && (0, wK.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": KT,
                  onClick: () => {
                    OT(!KT)
                  },
                  children: [(0, wK.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: yT(`${xI}questStepsToggle`, {
                      done: String(vT),
                      total: String(jT.length)
                    })
                  }), (0, wK.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: KT ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, wK.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [NT.map(((TT, kT) => {
                  var KT;
                  const OT = TT.current && MT.depth;
                  return (0, wK.jsxs)(lT.Fragment, {
                    children: [(null !== (KT = QT[kT]) && void 0 !== KT ? KT : 0) > 0 && (0, wK.jsx)(Xj, {
                      amount: QT[kT],
                      t: yT
                    }), (0, wK.jsx)(DI, {
                      row: TT,
                      view: MT,
                      t: yT,
                      extra: OT && (0, wK.jsx)(Vj, {
                        depth: OT,
                        store: cT,
                        t: yT
                      })
                    })]
                  }, TT.id)
                })), (null !== (kT = QT[NT.length]) && void 0 !== kT ? kT : 0) > 0 && (0, wK.jsx)(Xj, {
                  amount: QT[NT.length],
                  t: yT
                }), MT.also.length > 0 && (0, wK.jsx)(Ej, {
                  also: MT.also,
                  view: MT,
                  t: yT
                })]
              }), KT && MT.reward && (0, wK.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [yT(`${xI}questReward`), (0, wK.jsx)(vI, {
                  item: MT.reward
                }), AI(yT, MT.itemNames[MT.reward], MT.reward)]
              })]
            }), MT.side && (0, wK.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [dM(MT, Date.now()) && (0, wK.jsx)(dj, {
                pulse: MT.sideCameUpAt
              }), (0, wK.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: yT(`${xI}questSide`)
              }), (0, wK.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: yT(`${xI}${MT.side.name[0]}`, CI(MT.side.name[1]))
              }), (0, wK.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, wK.jsx)(DI, {
                  row: MT.side.row,
                  view: MT,
                  t: yT
                })
              })]
            })]
          })
        })
      })
    }
    const Rj = "baf2ToastView";
    class gj {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = TT, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: TT,
          holdMs: kT
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const TT = this.dropCovered();
          TT && this.show(TT.message, TT.holdMs)
        }), 250));
        const cT = this.dropCovered();
        null !== cT && (cT.holdMs > 0 || "baf2ToastCelebrate" === cT.message.baf2ToastStyle) && "baf2ToastCelebrate" !== TT.baf2ToastStyle && this.show(cT.message, cT.holdMs);
        const lT = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== TT.baf2ToastStyle && lT > 0) return this.pending = {
          message: TT,
          holdMs: kT
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const TT = this.pending;
          this.pending = null, TT && this.present(TT.message, TT.holdMs)
        }), lT));
        this.present(TT, kT)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(TT, kT) {
        this.clearTimers(), this.pending = null;
        const cT = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: TT.baf2ToastText,
          style: TT.baf2ToastStyle,
          swapped: cT,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === TT.baf2ToastStyle ? 1500 : kT), this.nt();
        const lT = Math.min(8e3, Math.max(1e3, TT.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), lT)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.nt(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.nt()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const TT = this.covering;
        return this.covering = null, TT
      }
      nt() {
        GM.k.nt(Rj, this.view, !0)
      }
    }
    var Uj = cT(94);
    const Yj = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function Bj(TT) {
      let {
        store: kT
      } = TT;
      const cT = (0, KI.i)(Rj, kT.get()),
        {
          openInGameMenuName: lT,
          openEverythingMenuName: MT
        } = (0, DM.n)(["openInGameMenuName", "openEverythingMenuName"]),
        KT = cT && (0, wK.jsxs)("div", {
          className: rM()("Baf2Toast", Yj[cT.style], {
            Swapped: cT.swapped,
            Leaving: cT.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === cT.style && (0, wK.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, wK.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, wK.jsx)(oM.b, {
              text: cT.text
            })
          })]
        }, cT.id);
      return null !== lT && null === MT ? (0, Uj.createPortal)((0, wK.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: KT
      }), document.body) : (0, wK.jsx)(ej.g, {
        children: KT
      })
    }
    const Wj = "baf2AreaView";
    class nj {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.ty = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.ty = null
      }
      arrive(TT, kT) {
        kT && function(TT) {
          return "home" === TT.baf2AreaPlace && void 0 !== TT.baf2AreaNameText
        }(TT) ? this.ty = TT : this.show(TT)
      }
      release() {
        const TT = this.ty;
        null !== TT && this.show(TT)
      }
      show(TT) {
        this.clearTimer(), this.ty = null;
        const kT = void 0 === TT.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: TT,
          ms: kT
        }, this.nt(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.nt()
        }), kT)
      }
      dispose() {
        this.clearTimer(), this.ty = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nt() {
        GM.k.nt(Wj, this.view, !0)
      }
    }

    function pj(TT) {
      var kT;
      let {
        store: cT
      } = TT;
      const {
        t: lT
      } = (0, bM.B)(), MT = (0, KI.i)(Wj, cT.get());
      if (!MT) return null;
      const {
        area: KT
      } = MT, OT = KT.baf2AreaResetMinutes;
      return (0, wK.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": KT.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${MT.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, wK.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), KT.baf2AreaHeading && (0, wK.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: lT(KT.baf2AreaHeading)
        }), (0, wK.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (kT = KT.baf2AreaNameText) && void 0 !== kT ? kT : lT(KT.baf2AreaName)
        }), KT.baf2AreaNote && (0, wK.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: lT(KT.baf2AreaNote)
        }), void 0 !== OT && (0, wK.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: lT("buildAFactory2Game:areaWildsReset", {
            time: aK(lT, 60 * OT)
          })
        })]
      }, MT.id)
    }
    const ij = "baf2GearGauge";
    class qj {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      yN(TT) {
        var kT;
        if (this.clearLinger(), null === TT.gearPowerKind) return void this.set(null);
        const cT = "jetpack" === TT.gearPowerKind && (lT = TT.gearChargeState, MT = TT.gearCharge, "flying" === lT || "charging" === lT || "outOfCharge" === lT || "ceiling" === lT || "offPlot" === lT || "noPower" === lT && MT <= 0);
        var lT, MT;
        const KT = !0 === (null === (kT = this.view) || void 0 === kT ? void 0 : kT.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          OT = cT || "jetpack" === TT.gearPowerKind && KT;
        this.set({
          gauge: TT,
          jetShown: OT
        }), OT && !cT && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(TT) {
        this.view = TT, GM.k.nt(ij, TT, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const sj = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function Tv(TT) {
      let {
        store: kT
      } = TT;
      const cT = (0, KI.i)(ij, kT.get());
      return cT ? "jetpack" === cT.gauge.gearPowerKind ? (0, wK.jsx)(kv, {
        view: cT
      }) : (0, wK.jsx)(cv, {
        gauge: cT.gauge
      }) : null
    }

    function kv(TT) {
      let {
        view: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)(), {
        gauge: lT
      } = kT, MT = lT.gearChargeMax > 0 ? Math.max(0, Math.min(1, lT.gearCharge / lT.gearChargeMax)) : 0, KT = sj[lT.gearChargeState], OT = KT ? cT(KT) : null;
      return (0, wK.jsxs)("div", {
        className: rM()("Baf2JetArc", {
          Shown: kT.jetShown,
          Low: MT < .2,
          Warm: MT >= .2 && MT < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - MT)
        },
        "aria-hidden": !kT.jetShown,
        children: [(0, wK.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, wK.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: lv,
            pathLength: 100
          }), (0, wK.jsx)("path", {
            className: "Baf2JetArcFill",
            d: lv,
            pathLength: 100
          })]
        }), (0, wK.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * MT), "%"]
        }), OT && (0, wK.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: OT
        })]
      })
    }

    function cv(TT) {
      let {
        gauge: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)(), lT = function(TT, kT) {
        switch (kT.gearPowerKind) {
          case "skyPack":
            return TT("buildAFactory2Game:gearSkyPack", {
              charge: kT.gearCharge,
              max: kT.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return TT("buildAFactory2Game:gearIslandDraw", {
              power: iT(kT.gearIslandPower),
              cost: iT(kT.gearCostPerUse)
            });
          case "barrier":
            return TT("buildAFactory2Game:gearBarrier", {
              shield: Math.round(kT.gearCharge),
              max: kT.gearChargeMax,
              power: iT(kT.gearIslandPower)
            });
          default:
            return null
        }
      }(cT, kT);
      return null === lT ? null : (0, wK.jsx)(ej.g, {
        children: (0, wK.jsx)("div", {
          className: rM()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === kT.gearChargeState || "outOfCharge" === kT.gearChargeState
          }),
          role: "status",
          children: lT
        })
      })
    }
    const lv = (() => {
      const TT = TT => {
        const kT = TT * Math.PI / 180;
        return `${(40*Math.cos(kT)).toFixed(2)} ${(40*Math.sin(kT)).toFixed(2)}`
      };
      return `M ${TT(160)} A 40 40 0 1 1 ${TT(380)}`
    })();
    class Mv {
      constructor(TT) {
        this.onElement = TT, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      yN(TT) {
        let kT = TT.baf2LabelsReset || TT.baf2LabelsIsland !== this.island;
        kT && (this.labels.clear(), this.island = TT.baf2LabelsIsland);
        for (const [cT, lT, MT, KT, OT] of TT.baf2LabelsList) {
          const TT = `${cT},${lT},${MT}`,
            yT = this.labels.get(TT);
          null === KT ? kT = this.labels.delete(TT) || kT : yT && yT.item === KT && (yT.count === OT || yT.count >= 0 && OT >= 0) ? yT.count !== OT && (yT.count = OT, this.writeCount(TT, OT)) : (this.labels.set(TT, {
            key: TT,
            pos: [cT, lT, MT],
            item: KT,
            count: OT
          }), this.writeCount(TT, OT), kT = !0)
        }
        if (this.changes++, kT) {
          this.snapshot = [...this.labels.values()];
          for (const TT of this.listeners) TT()
        }
      }
      bindCount(TT) {
        const kT = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${TT}`;
        let cT = this.countRefs.get(kT);
        return cT || (cT = cT => {
          var lT, MT;
          cT ? (this.countElements.set(kT, cT), this.writeCount(TT, null !== (lT = null === (MT = this.labels.get(TT)) || void 0 === MT ? void 0 : MT.count) && void 0 !== lT ? lT : -1)) : (this.countElements.delete(kT), this.countRefs.delete(kT))
        }, this.countRefs.set(kT, cT)), cT
      }
      setCountWords(TT) {
        this.countWords = TT;
        for (const [kT, cT] of this.labels) this.writePart(`words|${kT}`, TT(cT.count), cT.count)
      }
      writeCount(TT, kT) {
        this.writePart(`bare|${TT}`, SK(kT), kT), this.countElements.has(`words|${TT}`) && this.writePart(`words|${TT}`, this.countWords(kT), kT)
      }
      writePart(TT, kT, cT) {
        const lT = this.countElements.get(TT);
        if (!lT || cT < 0) return;
        const MT = lT.firstChild;
        MT && 3 === MT.nodeType && !MT.nextSibling ? MT.nodeValue !== kT && (MT.nodeValue = kT) : lT.textContent !== kT && (lT.textContent = kT)
      }
      list() {
        return this.snapshot
      }
      at(TT) {
        return this.labels.get(`${TT[0]},${TT[1]},${TT[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      bind(TT) {
        let kT = this.refs.get(TT);
        return kT || (kT = kT => {
          const cT = this.elements.get(TT);
          var lT, MT;
          cT && (null === (lT = this.onElement) || void 0 === lT || lT.call(this, cT, !1));
          kT ? (this.elements.set(TT, kT), null === (MT = this.onElement) || void 0 === MT || MT.call(this, kT, !0)) : (this.elements.delete(TT), this.refs.delete(TT))
        }, this.refs.set(TT, kT)), kT
      }
      onAfterRender(TT, kT, cT, lT) {
        for (const MT of this.snapshot) {
          const KT = this.elements.get(MT.key);
          if (!KT) continue;
          if (lT(MT.key)) {
            (0, lj.g)(KT, !0);
            continue
          }
          const OT = Aj(KT, TT, kT, MT.pos, 1.1, 24);
          OT && cT.add(OT, KT, 0, !1)
        }
      }
    }
    const Kv = (0, lT.memo)((function(TT) {
        let {
          item: kT
        } = TT;
        return (0, wK.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, wK.jsx)(JM.d, {
            itemName: kT,
            amount: 0
          })
        })
      })),
      Ov = (0, lT.memo)((function(TT) {
        let {
          label: kT,
          bindRef: cT,
          countRef: lT,
          wordsRef: MT
        } = TT;
        return (0, wK.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: cT,
          hidden: !0,
          children: [(0, wK.jsx)(Kv, {
            item: kT.item
          }), kT.count >= 0 && (0, wK.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, wK.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: MT
            }), (0, wK.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: lT
            })]
          })]
        })
      })),
      yv = (0, lT.memo)((function(TT) {
        let {
          store: kT
        } = TT;
        const {
          t: cT
        } = (0, bM.B)(), [MT, KT] = (0, lT.useState)((() => kT.list()));
        return (0, lT.useEffect)((() => (KT(kT.list()), kT.subscribe((() => {
          KT(kT.list())
        })))), [kT]), (0, lT.useEffect)((() => {
          kT.setCountWords((TT => cT("buildAFactory2Game:labelSiloCount", {
            count: SK(TT)
          })))
        }), [kT, cT]), (0, wK.jsx)("div", {
          className: "Baf2IslandLabels",
          children: MT.map((TT => -2 === TT.count ? null : (0, wK.jsx)(Ov, {
            label: TT,
            bindRef: kT.bind(TT.key),
            countRef: kT.bindCount(TT.key),
            wordsRef: kT.bindCount(TT.key, "words")
          }, TT.key)))
        })
      })),
      fv = {
        read: () => !0,
        write: () => {}
      };

    function xv(TT) {
      return `${TT[0]},${TT[1]},${TT[2]}`
    }

    function Iv(TT) {
      let [kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT] = TT;
      const jT = void 0 === AT || void 0 === CT ? function(TT) {
        return [Math.floor((TT - 1) / 2), 0]
      }(KT) : [AT, CT];
      return {
        kind: 0 === fT ? "reactor" : "battery",
        box: gc([kT, cT, lT], MT, KT, OT, yT, jT),
        formed: 1 === xT,
        level: IT
      }
    }
    class Av {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fv;
        this.guideSetting = TT, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = TT.read()
      }
      yN(TT) {
        var kT;
        const cT = new Map;
        for (const lT of TT.baf2RxPlanList) {
          const TT = Iv(lT);
          cT.set(xv(TT.box.ctrl), TT)
        }
        this.plans = cT, this.layouts = new Map((null !== (kT = TT.baf2RxLayouts) && void 0 !== kT ? kT : []).map((TT => {
          let [kT, cT, lT, MT] = TT;
          return [xv([kT, cT, lT]), MT]
        }))), this.predicted.clear(), TT.baf2RxFormedAt && (this.formed = {
          ctrl: TT.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const lT of [...this.startersOff]) {
          const TT = cT.get(lT);
          TT && !TT.formed || this.startersOff.delete(lT)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((TT => this.planByKey(TT)))
      }
      planAt(TT) {
        return this.planByKey(xv(TT))
      }
      predictSize(TT, kT) {
        this.predicted.set(xv(TT), kT), this.changed()
      }
      unpredict(TT) {
        this.predicted.delete(xv(TT)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(TT) {
        var kT;
        const cT = xv(TT);
        return this.predicted.has(cT) ? null : null !== (kT = this.layouts.get(cT)) && void 0 !== kT ? kT : null
      }
      showsStarter(TT) {
        return !this.startersOff.has(xv(TT))
      }
      setStarter(TT, kT) {
        const cT = xv(TT);
        kT ? this.startersOff.delete(cT) : this.startersOff.add(cT), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(TT) {
        this.guide = TT, this.guideSetting.write(TT), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(TT) {
        const kT = this.plans.get(TT);
        if (!kT) return null;
        const cT = this.predicted.get(TT);
        return cT ? {
          ...kT,
          box: Yc(kT.box, kT.kind, cT[0], cT[1], cT[2])
        } : kT
      }
      changed() {
        this.version++;
        for (const TT of this.listeners) TT()
      }
    }
    var Cv = cT(218);
    const jv = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function vv(TT, kT, cT, lT) {
      const MT = TT.length / 3;
      for (let KT = 0; KT < jv.length / 3; KT++) TT.push(jv[3 * KT] * lT[0] / 2 + cT[0], jv[3 * KT + 1] * lT[1] / 2 + cT[1], jv[3 * KT + 2] * lT[2] / 2 + cT[2]);
      for (let KT = MT; KT < MT + 24; KT += 4) kT.push(KT, KT + 1, KT + 2, KT, KT + 2, KT + 3)
    }

    function tv(TT, kT, cT) {
      const lT = kT[0][0],
        MT = [],
        KT = [];
      for (const [OT, yT] of kT) vv(MT, KT, [OT[0] - lT[0], OT[1] - lT[1], OT[2] - lT[2]], yT);
      return TT.createGameMesh({
        positions: MT,
        indices: KT
      }, cT, lT)
    }

    function hv(TT, kT) {
      const cT = TT.w - 2,
        lT = TT.d - 2;
      return 1 === function(TT, kT, cT, lT) {
        const [MT, KT, OT] = TT;
        if (Number(MT <= 2) + Number(KT <= 2) + Number(OT <= 2) >= 2) return function(TT, kT, cT) {
          return (TT + kT + cT) % 2 === 0 ? 1 : 3
        }(kT, cT, lT);
        const [yT, fT] = MT >= KT && MT >= OT ? [cT, lT] : KT >= OT ? [kT, lT] : [kT, cT];
        return yT % 2 === 0 && fT % 2 === 0 ? 1 : 3
      }([cT, TT.h - 2, lT], kT % cT, Math.floor(kT / (cT * lT)), Math.floor(kT / cT) % lT) ? "rod" : "channel"
    }

    function Nv(TT, kT, cT) {
      if ("reactor" !== TT.kind || TT.formed || !kT) return !1;
      const lT = nc(TT.box);
      for (let MT = 0; MT < lT; MT++) {
        const TT = cT(MT);
        if (null !== TT && oc(TT)) return !1
      }
      return !0
    }

    function Qv(TT, kT, cT, lT, MT) {
      var KT;
      let OT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const yT = kl(TT.box, kT),
        fT = Kl(TT.kind, yT, cT);
      if ("wrong" === fT || "blocked" === fT) return "wrong";
      if (!MT) return null;
      if ("inside" === yT && "reactor" === TT.kind && "Air" === Hc(cT)) {
        if (null !== OT) {
          var xT;
          const cT = qA[sA(OT, cl(TT.box, kT))];
          return cT && null !== (xT = mf(cT)) && void 0 !== xT ? xT : null
        }
        if (lT) return hv(TT.box, cl(TT.box, kT))
      }
      if ("missing" !== fT) return null;
      const IT = Ol(TT.kind, yT);
      return null === IT ? null : null !== (KT = mf(IT)) && void 0 !== KT ? KT : null
    }
    const Sv = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Dv(TT, kT, cT) {
      const lT = cT => {
        const lT = kT(sc(TT.box, cT));
        return null !== lT && function(TT, kT) {
          return "reactor" !== TT.kind || kT !== ic(TT.box) && "inside" !== kl(TT.box, kT)
        }(TT, cT) && "ok" !== Kl(TT.kind, kl(TT.box, cT), lT)
      };
      if (cT) {
        const KT = Tl(TT.box, [Math.floor(cT[0]), Math.floor(cT[1]), Math.floor(cT[2])]);
        if (KT >= 0 && (lT(KT) || (MT = KT, "reactor" === TT.kind && "inside" === kl(TT.box, MT) && "Air" === kT(sc(TT.box, MT))))) return KT
      }
      var MT;
      const KT = nc(TT.box);
      for (let OT = 0; OT < KT; OT++)
        if (lT(OT)) return OT;
      return -1
    }

    function av(TT, kT) {
      return Math.floor(kT / (TT.w * TT.d))
    }

    function Fv(TT, kT, cT) {
      return cT >= 0 && av(TT, kT) > av(TT, cT)
    }

    function rv(TT, kT) {
      return kT >= 0 && TT.h >= 3 && av(TT, kT) === TT.h - 1
    }

    function Pv(TT) {
      const kT = Hc(TT);
      return kT === Sc || "Collider" === kT || "Laser" === kT || kT.startsWith("_Collider ")
    }

    function wv(TT, kT, cT, lT) {
      if (lT(TT)) return null;
      if (!Sv.every((kT => {
          let [lT, MT, KT] = kT;
          const OT = cT([TT[0] + lT, TT[1] + MT, TT[2] + KT]);
          return null !== OT && !Xc("reactor", OT) && "reactor" !== ec(OT)
        }))) return null;
      const MT = dc("reactor").min,
        KT = gc([TT[0], TT[1], TT[2]], function(TT, kT) {
          const cT = kT[0] - (TT[0] + .5),
            lT = kT[2] - (TT[2] + .5);
          return Math.abs(cT) >= Math.abs(lT) ? cT >= 0 ? 2 : 4 : lT >= 0 ? 1 : 3
        }(TT, kT), MT, MT, MT, Uc("reactor", MT)),
        OT = ic(KT);
      let yT = !0;
      for (let fT = 0; fT < nc(KT) && yT; fT++) {
        if (fT === OT) continue;
        const TT = sc(KT, fT),
          kT = cT(TT);
        yT = !lT(TT) && (null === kT || !Pv(kT))
      }
      return {
        box: KT,
        fits: yT
      }
    }
    const mv = wf,
      bv = "baf2Goal",
      zv = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Jv = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      ov = .4;

    function Hv(TT, kT) {
      let [cT, lT, MT] = TT;
      const KT = Gf([cT - .02, lT - .02, MT - .02], [cT + 1.02, lT + 1.02, MT + 1.02], .07);
      return kT && (KT.push([
        [cT + .5, lT + 1 + .7, MT + .5],
        [.08, 1.4, .08]
      ]), KT.push([
        [cT + .5, lT + 1 + 1.4 + .2, MT + .5],
        [ov, ov, ov]
      ])), KT
    }

    function ev(TT, kT) {
      let [cT, lT, MT] = kT;
      return TT.isBlockInLoadedChunk(cT, lT, MT) ? TT.blockIdToBlockName(TT.getBlockId(cT, lT, MT)) : null
    }
    let Gv = null;
    const Vv = new Set;
    let Ev = null;

    function Zv(TT) {
      Gv = TT;
      for (const kT of Vv) kT(TT)
    }
    class uv {
      constructor(TT) {
        var kT;
        this.plans = TT, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (kT = TT => {
          var kT, cT;
          this.setGoal(null !== (kT = null === TT || void 0 === TT ? void 0 : TT.goal) && void 0 !== kT ? kT : null, null !== (cT = null === TT || void 0 === TT ? void 0 : TT.startsBattery) && void 0 !== cT && cT)
        }, Ev ??= [GM.k.subscribe("setDirectionArrow", (TT => {
          let {
            id: kT,
            position: cT,
            text: lT
          } = TT;
          kT === bv && Zv({
            goal: [Math.floor(cT[0]), Math.floor(cT[1]), Math.floor(cT[2])],
            startsBattery: JSON.stringify(null !== lT && void 0 !== lT ? lT : null).includes("arrowStartBattery")
          })
        })), GM.k.subscribe("clearDirectionArrow", (TT => {
          let {
            id: kT
          } = TT;
          null !== kT && kT !== bv || Zv(null)
        }))], Vv.add(kT), kT(Gv), () => {
          Vv.delete(kT)
        })
      }
      onAfterRender(TT, kT) {
        const cT = performance.now();
        if (this.cues.length > 0) {
          const kT = .55 + .45 * Math.sin(cT / 1100 * Math.PI * 2);
          for (const cT of this.cues) TT.setGameMesh(cT, {
            visibility: kT
          })
        }
        if (cT - this.lastCheckMs < 150) return;
        this.lastCheckMs = cT;
        const lT = this.plans.all().filter((TT => {
            const [cT, lT, MT] = TT.box.ctrl;
            return (!TT.formed || null !== this.plans.layoutOf(TT.box.ctrl)) && (cT - kT[0]) ** 2 + (lT - kT[1]) ** 2 + (MT - kT[2]) ** 2 <= 2304
          })),
          MT = function(TT, kT) {
            const cT = Cv.f.vv,
              lT = new Map;
            for (const KT of kT) {
              const kT = sc(KT.box, 0),
                OT = sc(KT.box, nc(KT.box) - 1),
                yT = [Math.min(kT[0], OT[0]), Math.min(kT[1], OT[1]), Math.min(kT[2], OT[2])].map((TT => Math.floor(TT / cT))),
                fT = [Math.max(kT[0], OT[0]), Math.max(kT[1], OT[1]), Math.max(kT[2], OT[2])].map((TT => Math.floor(TT / cT)));
              for (let cT = yT[0]; cT <= fT[0]; cT++)
                for (let kT = yT[1]; kT <= fT[1]; kT++)
                  for (let KT = yT[2]; KT <= fT[2]; KT++) {
                    var MT;
                    lT.set(`${cT},${kT},${KT}`, null !== (MT = TT.getChunkVersion(cT, kT, KT)) && void 0 !== MT ? MT : -1)
                  }
            }
            return lT
          }(TT, lT);
        this.plans.getVersion() === this.storeVersion && (function(TT, kT) {
          if (TT.size !== kT.size) return !1;
          for (const [cT, lT] of TT)
            if (kT.get(cT) !== lT) return !1;
          return !0
        }(MT, this.chunkVersions) || cT - this.lastRescanMs < 600) || (this.lastRescanMs = cT, this.storeVersion = this.plans.getVersion(), this.chunkVersions = MT, this.redraw(TT, lT))
      }
      dispose(TT) {
        this.unwatch(), Gv = null, this.clearMeshes(TT), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(TT, kT) {
        var cT;
        (null === TT || void 0 === TT ? void 0 : TT.join()) === (null === (cT = this.goal) || void 0 === cT ? void 0 : cT.join()) && kT === this.startsBattery || (this.goal = TT, this.startsBattery = kT, this.storeVersion = -1)
      }
      redraw(TT, kT) {
        const cT = kT => ev(TT, kT),
          lT = new Map,
          MT = [],
          KT = this.plans.guideOn();
        for (const xT of kT) {
          const TT = KT && Nv(xT, this.plans.showsStarter(xT.box.ctrl), (TT => cT(sc(xT.box, TT)))),
            kT = "reactor" === xT.kind ? this.plans.layoutOf(xT.box.ctrl) : null,
            OT = KT && !xT.formed ? Dv(xT, cT, this.goal) : -1;
          OT >= 0 && MT.push([sc(xT.box, OT), rv(xT.box, OT)]);
          const yT = nc(xT.box);
          for (let MT = 0; MT < yT; MT++) {
            const yT = sc(xT.box, MT),
              fT = cT(yT),
              IT = null === fT ? null : Qv(xT, MT, fT, TT, KT, kT);
            if (null !== IT) {
              const TT = "wrong" !== IT && Fv(xT.box, MT, OT),
                kT = TT ? `${IT}Dim` : IT;
              let cT = lT.get(kT);
              cT || (cT = {
                draw: {
                  ghost: IT,
                  dim: TT
                },
                list: []
              }, lT.set(kT, cT)), cT.list.push(yT)
            }
          }
        }
        if (KT && this.startsBattery && this.goal) {
          const [TT, kT, MT] = this.goal, KT = [];
          for (const [lT, OT, yT] of zv) {
            const fT = [TT + lT, kT + OT, MT + yT];
            "Air" === cT(fT) && KT.push(fT)
          }
          if (KT.length > 0) {
            var OT;
            const TT = null !== (OT = lT.get("cell")) && void 0 !== OT ? OT : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            TT.list.push(...KT), lT.set("cell", TT)
          }
        }
        const yT = [...lT.keys()].sort(),
          fT = [...yT.map((TT => `${TT}:${lT.get(TT).list.join(";")}`)), `cue:${MT.join(";")}`].join("|");
        if (fT !== this.shownKey) {
          this.shownKey = fT, this.clearMeshes(TT);
          for (const kT of yT) {
            const {
              draw: cT,
              list: MT
            } = lT.get(kT);
            this.meshes.push(this.build(TT, cT, MT))
          }
          for (const [kT, cT] of MT) this.cues.push(tv(TT, Hv(kT, cT), Jv))
        }
      }
      build(TT, kT, cT) {
        let {
          ghost: lT,
          dim: MT
        } = kT;
        const {
          size: KT,
          colour: OT,
          alpha: yT
        } = mv[lT], fT = cT[0], xT = [], IT = [];
        for (const [AT, CT, jT] of cT) vv(xT, IT, [AT - fT[0] + .5, CT - fT[1] + .5, jT - fT[2] + .5], [KT, KT, KT]);
        return TT.createGameMesh({
          positions: xT,
          indices: IT
        }, {
          rgb: OT,
          alpha: yT * (MT ? .3 : 1)
        }, fT)
      }
      clearMeshes(TT) {
        for (const kT of [...this.meshes, ...this.cues]) TT.disposeGameMesh(kT);
        this.meshes = [], this.cues = []
      }
    }
    const Xv = [.56, .83, 1],
      dv = [1, .3, .25];
    class Lv {
      constructor(TT) {
        this.plans = TT, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(TT, kT, cT) {
        var lT;
        const MT = performance.now();
        if (MT - this.lastCheckMs < 150) return;
        this.lastCheckMs = MT;
        const KT = kT => ev(TT, kT),
          OT = null === (lT = TT.ckT(kT)) || void 0 === lT ? void 0 : lT.name,
          yT = OT && "Reactor Frame" === Hc(OT) ? TT.getTargetedBlock() : null,
          fT = yT ? [yT.Wt[0], yT.Wt[1], yT.Wt[2]] : null,
          xT = null !== fT && "Air" === KT(fT) && fT.every(((TT, kT) => Math.abs(TT + .5 - cT[kT]) <= 8)) ? wv(fT, cT, KT, (TT => this.inPlan(TT))) : null,
          IT = xT ? `${xT.box.ctrl.join()}|${xT.box.rot}|${xT.fits}` : "";
        IT !== this.shownKey && this.show(TT, IT, xT)
      }
      dispose(TT) {
        this.clear(TT), this.shownKey = ""
      }
      inPlan(TT) {
        return this.plans.all().some((kT => Tl(kT.box, TT) >= 0))
      }
      show(TT, kT, cT) {
        if (this.clear(TT), this.shownKey = kT, !cT) return;
        const {
          box: lT,
          fits: MT
        } = cT, KT = MT ? Xv : dv, {
          lo: OT,
          hi: yT
        } = ef(lT);
        this.meshes.push(tv(TT, Gf(OT, yT, .05), {
          rgb: KT,
          alpha: 1
        }));
        const fT = [],
          xT = sc(lT, 0)[1];
        for (let IT = 0; IT < lT.w * lT.d; IT++) {
          const [TT, , kT] = sc(lT, IT);
          fT.push([
            [TT + .5, xT + .02 + .01, kT + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(tv(TT, fT, {
          rgb: KT,
          alpha: .25
        }))
      }
      clear(TT) {
        for (const kT of this.meshes) TT.disposeGameMesh(kT);
        this.meshes = []
      }
    }
    const Rv = "buildAFactory2Game:";

    function gv(TT, kT, cT) {
      const lT = TT => {
          const [cT, lT, MT] = TT.box.ctrl;
          return cT === kT[0] && lT === kT[1] && MT === kT[2]
        },
        MT = TT.find((TT => lT(TT) || Tl(TT.box, kT) >= 0));
      if (!MT) return null;
      const KT = function(TT, kT, cT) {
        const {
          w: lT,
          h: MT,
          d: KT
        } = TT.box, OT = "reactor" === TT.kind ? `${Rv}rxTitle` : `${Rv}batTitle`;
        if (TT.formed) return {
          key: `${Rv}lookPlanFormed`,
          kindKey: OT,
          w: lT,
          h: MT,
          d: KT,
          count: 0
        };
        let yT = 0,
          fT = 0;
        for (let IT = 0; IT < nc(TT.box); IT++) {
          const kT = cT(sc(TT.box, IT)),
            lT = null === kT ? "ok" : Kl(TT.kind, kl(TT.box, IT), kT);
          yT += "missing" === lT ? 1 : 0, fT += "wrong" === lT || "blocked" === lT ? 1 : 0
        }
        const xT = function(TT, kT, cT) {
          if (kT < 0 || null === cT) return;
          const lT = kl(TT.box, kT),
            MT = Kl(TT.kind, lT, cT);
          return "blocked" === MT ? `${Rv}lookWhy_blocked` : "wrong" === MT ? "ctrl" === lT ? `${Rv}lookWhy_ctrl` : `${Rv}lookWhy_reactor_${lT}` : void 0
        }(TT, Tl(TT.box, kT), cT([kT[0], kT[1], kT[2]]));
        if (yT > 0) return {
          key: `${Rv}lookPlanToBuild`,
          kindKey: OT,
          w: lT,
          h: MT,
          d: KT,
          count: yT,
          why: xT
        };
        if (fT > 0) return {
          key: `${Rv}lookPlanTakeOut`,
          kindKey: OT,
          w: lT,
          h: MT,
          d: KT,
          count: fT,
          why: xT
        };
        return {
          key: "reactor" === TT.kind ? `${Rv}lookPlanNoRods` : `${Rv}lookPlanDone`,
          kindKey: OT,
          w: lT,
          h: MT,
          d: KT,
          count: 0
        }
      }(MT, kT, cT);
      return "reactor" === MT.kind && lT(MT) ? {
        ...KT,
        ctrl: !0
      } : KT
    }

    function Uv(TT, kT) {
      return TT === kT || null !== TT && null !== kT && TT.key === kT.key && TT.kindKey === kT.kindKey && TT.w === kT.w && TT.h === kT.h && TT.d === kT.d && TT.count === kT.count && TT.why === kT.why && TT.ctrl === kT.ctrl
    }

    function Yv() {
      return performance.now()
    }
    class Bv {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Yv;
        this.ticket = TT, this.sent = kT, this.backstopMs = cT, this.now = lT, this.queuedAt = void 0, this.queuedAt = lT()
      }
      answered() {
        const TT = this.now(),
          kT = this.sent.leftAt(this.ticket);
        return null !== kT && TT - kT > 4e3 || TT - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Wv {
      constructor() {
        this.echoes = []
      }
      add(TT) {
        this.echoes = this.echoes.filter((TT => !TT.answered())), this.echoes.push(TT)
      }
      answered() {
        var TT, kT;
        return null === (TT = null === (kT = this.echoes.at(-1)) || void 0 === kT ? void 0 : kT.answered()) || void 0 === TT || TT
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((TT => TT.answered()))
      }
      age() {
        var TT, kT;
        return null !== (TT = null === (kT = this.echoes.at(-1)) || void 0 === kT ? void 0 : kT.age()) && void 0 !== TT ? TT : null
      }
      clear() {
        this.echoes = []
      }
    }
    class nv {
      constructor(TT) {
        this.send = TT, this.value = null, this.sent = null, this.echoes = new Wv, this.down = !1, this.timer = null
      }
      shown(TT) {
        return null === this.value ? TT : this.down || this.value !== this.sent ? this.value : TT === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), TT) : this.value
      }
      pendingFor(TT) {
        return null !== this.value && this.value === this.sent && TT !== this.value ? this.echoes.age() : null
      }
      assume(TT, kT) {
        this.disarm(), this.down = !1, this.value = TT, this.sent = TT, this.echoes.clear(), this.echoes.add(kT)
      }
      press() {
        this.down = !0
      }
      drag(TT) {
        this.value = TT, this.arm(this.down ? 1e3 : 400)
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
      arm(TT) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), TT)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class pv {
      constructor() {
        this.pending = new Map
      }
      set(TT, kT, cT) {
        var lT;
        const MT = null !== (lT = this.pending.get(TT)) && void 0 !== lT ? lT : {
          on: kT,
          echoes: new Wv
        };
        MT.on = kT, MT.echoes.add(cT), this.pending.set(TT, MT)
      }
      shown(TT) {
        let kT = TT;
        for (const [cT, {
            on: lT,
            echoes: MT
          }] of this.pending) 0 !== (TT & cT) === lT && MT.agreeCounts() || MT.answered() ? this.pending.delete(cT) : kT = lT ? kT | cT : kT & ~cT;
        return kT
      }
      pendingMask() {
        let TT = 0;
        for (const kT of this.pending.keys()) TT |= kT;
        return TT
      }
      pendingFor(TT) {
        let kT = null;
        for (const [lT, {
            on: MT,
            echoes: KT
          }] of this.pending) {
          if (void 0 !== TT && 0 !== (TT & lT) === MT) continue;
          const OT = KT.age();
          var cT;
          if (null !== OT) kT = Math.max(null !== (cT = kT) && void 0 !== cT ? cT : 0, OT)
        }
        return kT
      }
      clear() {
        this.pending.clear()
      }
    }
    class iv {
      constructor() {
        this.dims = null, this.echoes = new Wv, this.unmet = null
      }
      shown(TT) {
        var kT;
        return this.dims && (qv(this.dims, TT) && this.echoes.agreeCounts() || this.echoes.answered()) && (qv(this.dims, TT) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (kT = this.dims) && void 0 !== kT ? kT : TT
      }
      takeUnmet() {
        const TT = this.unmet;
        return this.unmet = null, TT
      }
      set(TT, kT) {
        this.dims = TT, this.echoes.add(kT)
      }
      pendingFor(TT) {
        return null === this.dims || TT && qv(this.dims, TT) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function qv(TT, kT) {
      return TT[0] === kT[0] && TT[1] === kT[1] && TT[2] === kT[2]
    }
    class sv {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yv;
        this.now = TT, this.taps = new Map
      }
      tap(TT, kT, cT) {
        return !this.busy(TT) && (this.taps.set(TT, {
          at: this.now(),
          done: kT
        }), cT(), !0)
      }
      settle(TT) {
        for (const [kT, cT] of [...this.taps]) cT.done(TT) && this.taps.delete(kT)
      }
      busy(TT) {
        const kT = this.taps.get(TT);
        return !!kT && (!(this.now() - kT.at >= 3e3) || (this.taps.delete(TT), !1))
      }
      busyIds() {
        const TT = new Set;
        for (const kT of [...this.taps.keys()]) this.busy(kT) && TT.add(kT);
        return TT
      }
      clear() {
        this.taps.clear()
      }
    }

    function Tt(TT) {
      return {
        send: kT => TT.track(kT),
        sendUrgent: (kT, cT) => TT.track(kT, {
          urgent: !0,
          supersedes: cT
        }),
        leftAt: kT => TT.leftAt(kT),
        holdReserve: () => TT.holdUrgentReserve(),
        answerMs: GO
      }
    }

    function kt() {
      return performance.now()
    }

    function ct(TT) {
      const kT = TT.baf2RxNeed.map((TT => {
        let [kT, cT] = TT;
        return [kT, cT]
      }));
      return JSON.stringify([TT.baf2RxFormed, kT, TT.baf2RxBad, TT.baf2RxCells])
    }

    function lt(TT, kT) {
      const cT = 0 !== (kT & Ck),
        lT = 0 !== (TT.baf2RxFlags & Ck);
      return !cT || lT || "running" !== TT.baf2RxState && "idle" !== TT.baf2RxState ? !cT && lT && "scram" === TT.baf2RxState && TT.baf2RxFuel > 0 ? "idle" : TT.baf2RxState : "scram"
    }

    function Mt(TT) {
      return JSON.stringify([TT.baf2BatFormed, TT.baf2BatNeed, TT.baf2BatBad])
    }

    function Kt(TT) {
      return TT.join(",")
    }
    class Ot {
      constructor() {
        this.listeners = new Set
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class yt {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(TT, kT) {
        this.lastAt = TT, this.lastUntil = TT + kT
      }
      answered(TT) {
        return this.lastAt >= TT || TT < this.lastUntil
      }
    }
    class ft {
      constructor(TT, kT) {
        this.link = TT, this.now = kT, this.hold = new iv, this.picked = null, this.notTaken = null
      }
      shown(TT) {
        const kT = this.hold.shown(TT);
        if (this.hold.takeUnmet() && this.picked) {
          var cT;
          const {
            plans: kT,
            ctrl: lT,
            at: MT
          } = this.picked;
          this.picked = null, kT.unpredict(lT), null === (cT = this.notTaken) || void 0 === cT || cT.call(this, TT, MT)
        }
        return kT
      }
      pendingFor(TT) {
        return this.hold.pendingFor(TT)
      }
      gC(TT, kT, cT) {
        TT.predictSize(kT, cT), this.picked = {
          plans: TT,
          ctrl: kT,
          at: this.now()
        };
        const lT = this.link.send(Ak(kT, "plan", ...cT));
        this.hold.set(cT, new Bv(lT, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class xt {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kt;
        this.plans = TT, this.readInterior = kT, this.link = cT, this.now = lT, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new pv, this.throttle = void 0, this.oneShots = void 0, this.listeners = new Ot, this.redraw = null, this.releaseReserve = null, this.size = new ft(cT, lT), this.oneShots = new sv(lT), this.throttle = new nv((TT => this.echo(this.link.send(this.command("throttle", TT)))))
      }
      set(TT) {
        !TT.baf2RxOpen && this.raw && Kt(this.raw.baf2RxAt) === Kt(TT.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(TT), this.nt(TT)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(TT) {
        this.size.notTaken = TT
      }
      resize(TT) {
        this.raw && (this.size.gC(this.plans, this.raw.baf2RxAt, TT), this.nt(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const TT = this.raw.baf2RxAt;
        this.plans.setStarter(TT, !this.plans.showsStarter(TT)), this.nt(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.nt(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.nt(this.raw)
      }
      send(TT) {
        if (this.raw) {
          for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
          this.link.send(this.command(TT, ...cT))
        }
      }
      tap(TT, kT) {
        this.raw && this.oneShots.tap(TT, function(TT, kT) {
          if ("start" === TT) return TT => 0 === (TT.baf2RxFlags & Ck);
          if ("odConfirm" === TT) return TT => 0 !== (TT.baf2RxFlags & jk);
          const cT = ct(kT);
          return TT => ct(TT) !== cT
        }(TT, this.raw), kT) && ("start" === TT && (this.startedAt = this.now()), this.nt(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(Ck, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(TT, kT) {
        if (!this.raw) return;
        const cT = TT === Ck ? this.command(kT ? "scram" : "start") : this.command("od", kT ? 1 : 0),
          lT = kT && TT === Ck,
          MT = `${Ik} ${this.raw.baf2RxAt.join(" ")} `,
          KT = this.echo(lT ? this.link.sendUrgent(cT, (TT => {
            const kT = TT.startsWith(MT) ? TT.slice(MT.length).split(" ")[0] : null;
            return "throttle" === kT || "start" === kT
          })) : this.link.send(cT));
        this.flags.set(TT, kT, KT), lT && this.throttle.assume(0, KT), this.nt(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(TT) {
        this.throttle.drag(TT), this.raw && this.nt(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.nt(this.raw)
      }
      subscribe(TT) {
        return this.listeners.subscribe(TT)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var TT;
        this.throttle.release(), null === (TT = this.releaseReserve) || void 0 === TT || TT.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(TT) {
        for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
        return Ak(this.raw.baf2RxAt, TT, ...cT)
      }
      echo(TT) {
        return new Bv(TT, this.link, this.link.answerMs, this.now)
      }
      nt(TT) {
        var kT;
        this.raw = TT;
        const cT = this.flags.shown(TT.baf2RxFlags),
          lT = {
            ...TT,
            baf2RxFlags: cT,
            baf2RxTarget: this.throttle.shown(TT.baf2RxTarget),
            baf2RxState: lt(TT, cT)
          },
          MT = this.size.shown(lT.baf2RxDims),
          KT = this.throttle.pendingFor(),
          OT = [this.throttle.pendingFor(TT.baf2RxTarget), this.flags.pendingFor(TT.baf2RxFlags), this.size.pendingFor(TT.baf2RxDims)].filter((TT => null !== TT)),
          yT = OT.length > 0 ? Math.max(...OT) : null,
          fT = this.oneShots.busyIds(),
          xT = lT.baf2RxAt;
        let IT, AT, CT = null,
          jT = [Math.max(0, MT[0] - 2), Math.max(0, MT[1] - 2), Math.max(0, MT[2] - 2)];
        if (lT.baf2RxFormed) {
          const [TT, kT, cT] = lT.baf2RxDims;
          jT = [Math.max(0, TT - 2), Math.max(0, kT - 2), Math.max(0, cT - 2)], IT = Array.from(lT.baf2RxCells, Number), AT = `${jT.join(",")}:${lT.baf2RxCells}`
        } else {
          var vT;
          const TT = null === (vT = this.plans.planAt(xT)) || void 0 === vT ? void 0 : vT.box,
            kT = TT ? Yc(TT, "reactor", ...MT) : gc(xT, 1, ...MT, Uc("reactor", MT[0])),
            cT = this.readInterior(kT);
          CT = Tf(jT, cT), IT = cT, AT = `${jT.join(",")}:${cT.join("")}`
        }(null === (kT = this.looksOf) || void 0 === kT ? void 0 : kT.key) !== AT && (this.looksOf = {
          key: AT,
          looks: yf(jT, IT)
        }), this.view = {
          status: lT,
          dims: MT,
          plan: CT,
          inner: jT,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(xT),
          odConfirmed: this.odConfirmed || 0 !== (lT.baf2RxFlags & Sk),
          guide: this.plans.guideOn(),
          throttlePending: null !== KT,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== yT && yT >= 5e3,
          busy: fT,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== yT || fT.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.nt(this.raw)
        }), 250))
      }
    }
    class It {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kt;
        this.plans = TT, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new Ot, this.redraw = null, this.size = new ft(kT, cT), this.oneShots = new sv(cT)
      }
      set(TT) {
        !TT.baf2BatOpen && this.view && Kt(this.view.status.baf2BatAt) === Kt(TT.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(TT), this.nt(TT)
      }
      tap(TT, kT) {
        if (!this.view) return;
        const cT = Mt(this.view.status);
        this.oneShots.tap(TT, (TT => Mt(TT) !== cT), kT) && this.nt(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(TT) {
        this.size.notTaken = TT
      }
      resize(TT) {
        this.view && (this.size.gC(this.plans, this.view.status.baf2BatAt, TT), this.nt(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.nt(this.view.status)
      }
      subscribe(TT) {
        return this.listeners.subscribe(TT)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      nt(TT) {
        const kT = this.size.shown(TT.baf2BatDims),
          cT = this.oneShots.busyIds();
        this.view = {
          status: TT,
          dims: kT,
          DA: af(kT, TT.baf2BatDims) ? TT.baf2BatCapacity : If(...kT),
          guide: this.plans.guideOn(),
          busy: cT
        }, this.listeners.notify(), cT.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.nt(this.view.status)
        }), 250))
      }
    }
    const At = "buildAFactory2Game:";

    function Ct() {
      var TT;
      const kT = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!kT) return null;
      const cT = kT.querySelector(".ExitButton");
      return function(TT, kT) {
        const cT = kT ? kT.left - 8 : TT.right;
        return {
          left: TT.left,
          top: TT.top,
          width: Math.max(0, cT - TT.left),
          height: TT.height
        }
      }(kT.getBoundingClientRect(), null !== (TT = null === cT || void 0 === cT ? void 0 : cT.getBoundingClientRect()) && void 0 !== TT ? TT : null)
    }
    const jt = (0, lT.memo)((function(TT) {
      let {
        store: kT
      } = TT;
      const {
        t: cT
      } = (0, bM.B)(), [MT, KT] = (0, lT.useState)((() => kT.get())), [OT, yT] = (0, lT.useState)((() => performance.now()));
      (0, lT.useEffect)((() => (KT(kT.get()), kT.subscribe((() => {
        KT(kT.get()), yT(performance.now())
      })))), [kT]);
      const {
        alarm: fT,
        boomAt: xT
      } = MT, IT = null !== fT && null !== fT.secs, [AT, CT] = (0, lT.useState)(null);
      (0, lT.useEffect)((() => {
        if (!IT) return;
        CT(Ct());
        const TT = setInterval((() => {
          yT(performance.now()), CT(Ct())
        }), 250);
        return () => {
          clearInterval(TT)
        }
      }), [IT]);
      const [jT, vT] = (0, lT.useState)(!1);
      return (0, lT.useEffect)((() => {
        if (xT === -1 / 0) return;
        vT(!0);
        const TT = setTimeout((() => {
          vT(!1)
        }), 1300);
        return () => {
          clearTimeout(TT)
        }
      }), [xT]), (0, wK.jsxs)(wK.Fragment, {
        children: [null !== fT && (0, wK.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: cT(fT.hot ? `${At}rxAlarmSiren` : `${At}rxAlarmDamaged`, {
            amount: String(fT.damage)
          })
        }), null !== fT && null !== fT.secs && (0, wK.jsx)("div", {
          className: AT ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== AT && void 0 !== AT ? AT : void 0,
          "aria-live": "assertive",
          children: cT(`${At}rxAlarmCountdown`, {
            amount: String((tT = fT.secs, hT = OT - fT.receivedAt, Math.max(1, Math.ceil(tT - hT / 1e3))))
          })
        }), jT && (0, wK.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var tT, hT
    }));
    class vt {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      yN(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const cT = TT.baf2RxAlarmAt.join(",");
        let lT = this.snapshot.boomAt;
        if (TT.baf2RxAlarmBoom) this.byReactor.delete(cT), lT = kT;
        else if (TT.baf2RxAlarmDamage <= 0) this.byReactor.delete(cT);
        else {
          var MT;
          this.byReactor.set(cT, {
            damage: TT.baf2RxAlarmDamage,
            secs: null !== (MT = TT.baf2RxAlarmSecs) && void 0 !== MT ? MT : null,
            hot: !0 === TT.baf2RxAlarmHot,
            receivedAt: kT
          })
        }
        this.nt(lT)
      }
      retain(TT) {
        let kT = !1;
        for (const cT of [...this.byReactor.keys()]) TT.has(cT) || (this.byReactor.delete(cT), kT = !0);
        kT && this.nt(this.snapshot.boomAt)
      }
      has(TT) {
        return this.byReactor.has(TT)
      }
      get() {
        return this.snapshot
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      nt(TT) {
        let kT = null;
        for (const cT of this.byReactor.values())(!kT || cT.damage > kT.damage) && (kT = cT);
        this.snapshot = {
          alarm: kT,
          boomAt: TT
        };
        for (const cT of this.listeners) cT()
      }
    }
    const tt = {
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

    function ht(TT) {
      return [TT[0], TT[1], TT[2]]
    }

    function Nt(TT) {
      return `${TT[0]},${TT[1]},${TT[2]}`
    }
    class Qt {
      constructor(TT) {
        if (this.plans = TT, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var TT;
            return {
              active: this.glows.flatMap((TT => {
                let {
                  record: kT
                } = TT;
                return kT ? [kT] : []
              })),
              log: [...null !== (TT = this.devLog) && void 0 !== TT ? TT : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var TT;
        return null !== (TT = this.devLog) && void 0 !== TT ? TT : []
      }
      check(TT, kT, cT) {
        const lT = new Set(kT.map((TT => Nt(TT.box.ctrl))));
        for (const OT of function(TT, kT) {
            const cT = [],
              lT = new Map(TT);
            TT.clear();
            for (const MT of kT) {
              const kT = xv(MT.box.ctrl),
                KT = MT.formed ? MT.level : 0;
              TT.set(kT, KT), KT > 0 && 0 === lT.get(kT) && cT.push(MT)
            }
            return cT
          }(this.levels, this.plans.all())) lT.has(Nt(OT.box.ctrl)) && this.show(TT, OT, "on", cT);
        const MT = this.plans.lastFormed();
        if (null === MT || MT.receivedAt <= this.flashedAt) return null;
        this.flashedAt = MT.receivedAt;
        const KT = function(TT, kT) {
          var cT;
          const lT = xv(TT);
          return null !== (cT = kT.find((TT => xv(TT.box.ctrl) === lT))) && void 0 !== cT ? cT : null
        }(MT.ctrl, kT);
        return KT && this.show(TT, KT, "formed", cT), KT
      }
      fade(TT, kT) {
        0 !== this.glows.length && (this.glows = this.glows.filter((cT => {
          let {
            mesh: lT,
            glow: MT,
            startMs: KT,
            record: OT
          } = cT;
          const yT = (kT - KT) / tt[MT].ms;
          return yT >= 1 ? (TT.disposeGameMesh(lT), OT && (OT.endMs = kT), !1) : (TT.setGameMesh(lT, {
            visibility: "formed" === MT ? 1 - yT : Math.sin(Math.PI * yT)
          }), !0)
        })))
      }
      dispose(TT) {
        for (const {
            mesh: cT
          }
          of this.glows) TT.disposeGameMesh(cT);
        this.glows = [], this.levels.clear();
        const kT = "undefined" !== typeof window ? window : null;
        (null === kT || void 0 === kT ? void 0 : kT.baf2Glows) === this.devAccessor && delete kT.baf2Glows
      }
      show(TT, kT, cT, lT) {
        const {
          lo: MT,
          hi: KT
        } = ef(kT.box);
        let OT = null;
        this.devLog && (OT = {
          glow: cT,
          ctrl: ht(kT.box.ctrl),
          lo: ht(MT),
          hi: ht(KT),
          startMs: lT,
          endMs: null
        }, this.devLog.push(OT), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(TT, cT, Gf(MT, KT, tt[cT].thick)),
          glow: cT,
          startMs: lT,
          record: OT
        })
      }
      build(TT, kT, cT) {
        const lT = tv(TT, cT, {
          rgb: tt[kT].colour,
          alpha: 1
        });
        return TT.setGameMesh(lT, {
          visibility: 0
        }), lT
      }
    }
    const St = 1 / .6,
      Dt = {
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
        blendMode: Vy.f.Standard,
        soft: !0
      },
      Ft = {
        ...Dt,
        size: [.25, .4],
        count: 2
      };

    function rt(TT) {
      return {
        colours: [TT, TT],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Vy.f.Add,
        soft: !1
      }
    }
    const Pt = rt([150, 225, 255]),
      wt = rt([185, 145, 255]),
      mt = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function bt(TT) {
      const kT = Vk[TT];
      return null === kT.fuelSlot || Kc(kT) ? mt.includes(TT) ? wt : Pt : Dt
    }
    const zt = {
        kind: "smokePuff"
      },
      Jt = [.2, .025, .2];

    function ot(TT, kT) {
      const [
        [cT, lT, MT],
        [KT, OT, yT]
      ] = TT.colours;
      return {
        texture: TT.soft ? zt : "square_particle",
        DA: kT,
        minLifeTime: TT.life[0] / St,
        maxLifeTime: TT.life[1] / St,
        minEmitPower: TT.power[0] * St,
        maxEmitPower: TT.power[1] * St,
        minSize: TT.size[0],
        maxSize: TT.size[1],
        emitRate: 0,
        gravity: [0, TT.lift * St * St, 0],
        dir1: [-TT.spread, 1, -TT.spread],
        dir2: [TT.spread, 1, TT.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [cT, lT, MT, TT.alpha],
          maxColor: [KT, OT, yT, TT.alpha]
        }, {
          timeFraction: 1,
          minColor: [cT, lT, MT, 0],
          maxColor: [KT, OT, yT, 0]
        }],
        blendMode: TT.blendMode
      }
    }
    class Ht {
      constructor(TT) {
        this.fixed = TT, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(TT, kT, cT) {
        var lT;
        if (cT === this.lastFrame) return !1;
        this.lastFrame = cT;
        const MT = this.at;
        MT[0] = kT[0] + .5, MT[1] = kT[1] + 1.025, MT[2] = kT[2] + .5;
        const KT = null !== (lT = this.fixed) && void 0 !== lT ? lT : yT() ? Ft : Dt;
        let OT = this.particles.get(KT);
        return OT || (OT = TT.createParticles(function(TT) {
          return ot(TT, Math.ceil(12 * TT.count * TT.life[1]) + TT.count)
        }(KT), {
          pos: MT,
          half: Jt
        }), this.particles.set(KT, OT)), OT.moveTo(MT), OT.emit(KT.count), !0
      }
      dispose() {
        for (const TT of this.particles.values()) TT.stop();
        this.particles.clear()
      }
    }
    class et {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(TT) {
        this.indexed = !0;
        for (const kT of bk) {
          const cT = bt(kT);
          for (let lT = 1; lT <= 4; lT++) {
            const MT = TT.blockNameToBlockId(`${kT}|meta|rot${lT}|Running`, !0);
            if (null === MT) continue;
            let KT = this.pufferIndexByStyle.get(cT);
            void 0 === KT && (KT = this.pufferList.push(new Ht(cT === Dt ? null : cT)) - 1, this.pufferIndexByStyle.set(cT, KT)), this.pufferIndexById[MT] = KT + 1
          }
        }
      }
      onAfterRender(TT, kT) {
        this.indexed || this.index(TT);
        const cT = performance.now(),
          lT = 0 === this.lastMs ? 0 : Math.min(cT - this.lastMs, 250) / 1e3;
        this.lastMs = cT, this.frame++, TT.particlesEnabled() ? (this.scan(TT, kT), this.puff(TT, lT)) : this.sources = []
      }
      dispose() {
        for (const TT of this.pufferList) TT.dispose();
        this.sources = [], this.found = []
      }
      scan(TT, kT) {
        0 === this.scanRow && (this.origin = [Math.floor(kT[0]) - 12, Math.floor(kT[1]) - 6, Math.floor(kT[2]) - 12]);
        const cT = Math.min(this.scanRow + 16, 325),
          [lT, MT, KT] = this.origin,
          OT = this.hits;
        OT.length = 0;
        for (let yT = this.scanRow; yT < cT; yT++) {
          const kT = lT + yT % 25,
            cT = MT + Math.floor(yT / 25);
          TT.scanBlocks(kT, cT, KT, kT + 1, cT + 1, KT + 25, this.pufferIndexById, OT)
        }
        for (let yT = 0; yT < OT.length; yT += 4) {
          const TT = OT[yT + 3];
          this.found.push({
            pos: [OT[yT], OT[yT + 1], OT[yT + 2]],
            Rx: TT,
            puffer: this.pufferList[this.pufferIndexById[TT] - 1]
          })
        }
        this.scanRow = cT, 325 === cT && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(TT, kT) {
        const cT = this.sources.length;
        if (0 !== cT) {
          this.budget = Math.min(this.budget + Math.min(cT / 1.2, 12) * kT, 2);
          for (let kT = 0; kT < cT && this.budget >= 1; kT++) {
            const kT = this.sources[this.cursor % cT];
            this.cursor = (this.cursor + 1) % cT, TT.getBlockId(kT.pos[0], kT.pos[1], kT.pos[2]) === kT.Rx && (kT.puffer.puff(TT, kT.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Gt = {
        ...rt([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      Vt = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function Et(TT) {
      return 0 === TT.spots.length ? 0 : Math.min(1 * TT.level, 4)
    }

    function Zt(TT) {
      return 0 === TT.glass.length ? 0 : Math.min(.75 * TT.level, 3)
    }

    function ut(TT) {
      return `${TT.ctrl.join(",")}:${TT.rot}:${TT.cu},${TT.cv}:${TT.w},${TT.h},${TT.d}`
    }

    function Xt(TT, kT) {
      const cT = kT.w - 2,
        lT = kT.h - 2,
        MT = kT.d - 2,
        KT = [];
      for (let OT = 0; OT < cT * lT * MT; OT++) {
        const yT = OT % cT,
          fT = Math.floor(OT / cT) % MT,
          xT = Math.floor(OT / (cT * MT));
        if (yT > 0 && yT < cT - 1 && fT > 0 && fT < MT - 1 && xT > 0 && xT < lT - 1) continue;
        const IT = sc(kT, ll(kT, OT)),
          AT = ev(TT, IT);
        if (null !== AT && "Fuel Rod" === Hc(AT))
          for (const kT of Vt) {
            const cT = [IT[0] + kT[0], IT[1] + kT[1], IT[2] + kT[2]];
            Lt(TT, cT) && KT.push(Rt(cT, kT))
          }
      }
      return KT
    }

    function dt(TT, kT) {
      const {
        lo: cT,
        hi: lT
      } = ef(kT), MT = [];
      for (let KT = cT[0]; KT < lT[0]; KT++)
        for (let kT = cT[1]; kT < lT[1]; kT++) {
          const OT = KT === cT[0] || KT === lT[0] - 1 || kT === cT[1] || kT === lT[1] - 1 ? 1 : Math.max(1, lT[2] - 1 - cT[2]);
          for (let yT = cT[2]; yT < lT[2]; yT += OT) {
            const OT = [KT, kT, yT];
            if (!Lt(TT, OT)) continue;
            const fT = KT === cT[0] ? Vt[1] : KT === lT[0] - 1 ? Vt[0] : yT === cT[2] ? Vt[5] : yT === lT[2] - 1 ? Vt[4] : kT === cT[1] ? Vt[3] : Vt[2];
            MT.push(Rt(OT, fT))
          }
        }
      return MT
    }

    function Lt(TT, kT) {
      const cT = ev(TT, kT);
      return null !== cT && "Reactor Glass" === Hc(cT)
    }

    function Rt(TT, kT) {
      return [
        [TT[0] + .5 + .55 * kT[0], TT[1] + .5 + .55 * kT[1], TT[2] + .5 + .55 * kT[2]],
        [0 === kT[0] ? .4 : .02, 0 === kT[1] ? .4 : .02, 0 === kT[2] ? .4 : .02]
      ]
    }
    class gt {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(TT, kT, cT, lT) {
        const MT = [],
          KT = new Set;
        for (const xT of kT) {
          var OT, yT, fT;
          const {
            box: kT
          } = xT;
          if ("reactor" !== xT.kind || xT.level <= 0 || (kT.ctrl[0] - cT[0]) ** 2 + (kT.ctrl[1] - cT[1]) ** 2 + (kT.ctrl[2] - cT[2]) ** 2 > 576) continue;
          const IT = ut(kT);
          KT.add(IT);
          let AT = this.spots.get(IT);
          if ((!AT || lT - AT.at > 3e3) && (AT = {
              at: lT,
              spots: Xt(TT, kT),
              glass: dt(TT, kT)
            }, this.spots.set(IT, AT)), 0 === AT.spots.length && 0 === AT.glass.length) continue;
          const CT = this.sparking.find((TT => TT.key === IT));
          MT.push({
            key: IT,
            level: xT.level,
            spots: AT.spots,
            glass: AT.glass,
            budget: null !== (OT = null === CT || void 0 === CT ? void 0 : CT.budget) && void 0 !== OT ? OT : 0,
            cursor: null !== (yT = null === CT || void 0 === CT ? void 0 : CT.cursor) && void 0 !== yT ? yT : 0,
            glassBudget: null !== (fT = null === CT || void 0 === CT ? void 0 : CT.glassBudget) && void 0 !== fT ? fT : 0
          })
        }
        for (const xT of this.spots.keys()) KT.has(xT) || this.spots.delete(xT);
        this.sparking = MT
      }
      emit(TT, kT, cT) {
        var lT;
        if (0 === this.sparking.length || !TT.particlesEnabled() || cT === this.lastFrame) return;
        this.lastFrame = cT;
        let MT = 0,
          KT = 0;
        for (const vT of this.sparking) MT += Et(vT), KT += Zt(vT);
        const OT = MT > 8 ? 8 / MT : 1,
          yT = KT > 6 ? 6 / KT : 1;
        let fT, xT = null,
          IT = null;
        for (const vT of this.sparking) vT.budget = Math.min(vT.budget + Et(vT) * OT * kT, 2), vT.budget >= 1 && (!xT || vT.budget > xT.budget) && (xT = vT), vT.glassBudget = Math.min(vT.glassBudget + Zt(vT) * yT * kT, 2), vT.glassBudget >= 1 && (!IT || vT.glassBudget > IT.glassBudget) && (IT = vT);
        if (xT) xT.budget--, fT = xT.spots[xT.cursor++ % xT.spots.length];
        else {
          if (!IT) return;
          IT.glassBudget--, fT = IT.glass[Math.floor(Math.random() * IT.glass.length)]
        }
        const [AT, CT] = fT, jT = null !== (lT = this.emitter) && void 0 !== lT ? lT : this.create(TT, AT, CT);
        jT.moveTo(AT, CT), jT.emit(Gt.count)
      }
      dispose() {
        var TT;
        null === (TT = this.emitter) || void 0 === TT || TT.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(TT, kT, cT) {
        const lT = Math.ceil(14 * Gt.count * Gt.life[1]) + Gt.count;
        return this.emitter = TT.createParticles(ot(Gt, lT), {
          pos: kT,
          half: cT
        }), this.emitter
      }
    }
    const Ut = [2, 3.2],
      Yt = 1 / 3,
      Bt = 1 / .6,
      Wt = {
        texture: zt,
        DA: Math.ceil(18 * Ut[1]) + 4,
        minLifeTime: Ut[0] / Bt,
        maxLifeTime: Ut[1] / Bt,
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
        blendMode: Vy.f.Standard
      };
    class nt {
      constructor(TT) {
        this.plans = TT, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new gt, this.frame = 0, this.outline = new Qt(TT)
      }
      onAfterRender(TT, kT, cT) {
        const lT = performance.now(),
          MT = 0 === this.lastMs ? 0 : Math.min(lT - this.lastMs, 250) / 1e3;
        if (this.lastMs = lT, this.outline.fade(TT, lT), this.puff(TT, MT, cT), this.sparks.emit(TT, MT, this.frame++), lT - this.lastCheckMs < 150) return;
        this.lastCheckMs = lT;
        const KT = this.plans.all().filter((TT => TT.formed && pt(TT.box.ctrl, cT) <= 4096));
        this.plumes = KT.filter((TT => "reactor" === TT.kind && TT.level > 0)).map((TT => ({
          box: TT.box,
          level: TT.level
        }))), this.updateHums(TT, kT, KT, cT), this.sparks.update(TT, KT, cT, lT), this.chimeFormed(TT, kT, KT, lT)
      }
      dispose(TT) {
        var kT;
        this.outline.dispose(TT), null === (kT = this.steam) || void 0 === kT || kT.dispose(), this.steam = null, this.sparks.dispose();
        for (const cT of this.hums.values()) cT.stop();
        this.hums.clear()
      }
      chimeFormed(TT, kT, cT, lT) {
        const MT = this.outline.check(TT, cT, lT);
        MT && TT.playSound(kT, "exp_levelup", .6, 1, {
          ec: [MT.box.ctrl[0] + .5, MT.box.ctrl[1], MT.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(TT, kT, cT) {
        const lT = this.plumes;
        if (0 === lT.length || !TT.particlesEnabled()) return void(this.plumeBudget = 0);
        const MT = lT.reduce(((TT, kT) => TT + 3 * kT.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + MT * kT, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let KT = this.plumeCursor % (MT / 3);
        this.plumeCursor++;
        let OT = lT[0];
        for (const AT of lT) {
          if (KT < AT.level) {
            OT = AT;
            break
          }
          KT -= AT.level
        }
        const {
          lo: yT,
          hi: fT
        } = ef(OT.box);
        if (function(TT, kT, cT) {
            const lT = Math.max(TT[0] - cT[0], 0, cT[0] - kT[0]),
              MT = Math.max(TT[2] - cT[2], 0, cT[2] - kT[2]);
            return Math.hypot(lT, cT[1] - kT[1], MT)
          }(yT, fT, cT) < 6 && Math.random() > Yt) return;
        const xT = [(yT[0] + fT[0]) / 2, fT[1] + .05, (yT[2] + fT[2]) / 2],
          IT = [(fT[0] - yT[0]) / 2 - .5, .05, (fT[2] - yT[2]) / 2 - .5];
        this.steam ??= TT.createParticles(Wt, {
          pos: xT,
          half: IT
        }), this.steam.moveTo(xT, IT), this.steam.emit(1)
      }
      updateHums(TT, kT, cT, lT) {
        const MT = new Map;
        for (const OT of cT) "reactor" === OT.kind && OT.level > 0 && pt(OT.box.ctrl, lT) <= 576 && MT.set(`${KT=OT.box.ctrl,`${KT[0]},${KT[1]},${KT[2]}`}:${OT.level}`, OT);
        var KT;
        for (const [OT, yT] of this.hums) MT.has(OT) || (yT.stop(), this.hums.delete(OT));
        for (const [OT, yT] of MT) {
          if (this.hums.has(OT)) continue;
          const {
            lo: cT,
            hi: lT
          } = ef(yT.box), MT = [(cT[0] + lT[0]) / 2, cT[1], (cT[2] + lT[2]) / 2], KT = TT.playSound(kT, "rocketEngineLoop", .08 + .06 * yT.level, .55, {
            ec: MT,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          KT && this.hums.set(OT, KT)
        }
      }
    }

    function pt(TT, kT) {
      return (TT[0] - kT[0]) ** 2 + (TT[1] - kT[1]) ** 2 + (TT[2] - kT[2]) ** 2
    }
    class it {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      yN(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const lT = [TT.baf2BombAt[0], TT.baf2BombAt[1], TT.baf2BombAt[2]],
          MT = TT.baf2BombR;
        if (TT.baf2BombBoom) {
          const TT = Math.hypot(kT[0] - lT[0], kT[1] - lT[1], kT[2] - lT[2]);
          this.nt({
            fuse: null,
            blast: {
              at: lT,
              r: MT,
              receivedAt: cT,
              distance: TT,
              flash: TT <= 3 * MT
            }
          })
        } else this.nt({
          ...this.snapshot,
          fuse: TT.baf2BombMs > 0 ? {
            at: lT,
            r: MT,
            endsAt: cT + TT.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      nt(TT) {
        this.snapshot = TT;
        for (const kT of this.listeners) kT()
      }
    }
    const qt = (0, lT.memo)((function(TT) {
      var kT;
      let {
        store: cT
      } = TT;
      const {
        t: MT
      } = (0, bM.B)(), [KT, OT] = (0, lT.useState)((() => cT.get())), [yT, fT] = (0, lT.useState)((() => performance.now()));
      (0, lT.useEffect)((() => (OT(cT.get()), cT.subscribe((() => {
        OT(cT.get()), fT(performance.now())
      })))), [cT]);
      const {
        fuse: xT,
        blast: IT
      } = KT;
      (0, lT.useEffect)((() => {
        if (!xT) return;
        const TT = setInterval((() => {
          fT(performance.now())
        }), 250);
        return () => {
          clearInterval(TT)
        }
      }), [xT]);
      const [AT, CT] = (0, lT.useState)(!1);
      (0, lT.useEffect)((() => {
        if (null === IT || void 0 === IT || !IT.flash) return;
        CT(!0);
        const TT = setTimeout((() => {
          CT(!1)
        }), 2500);
        return () => {
          clearTimeout(TT)
        }
      }), [IT]);
      const jT = xT ? function(TT, kT) {
        return TT.endsAt <= kT ? 0 : Math.ceil((TT.endsAt - kT) / 1e3)
      }(xT, yT) : 0;
      return (0, wK.jsxs)(wK.Fragment, {
        children: [jT > 0 && (0, wK.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: MT("buildAFactory2Game:bombCountdown", {
            amount: String(jT),
            radius: String(null !== (kT = null === xT || void 0 === xT ? void 0 : xT.r) && void 0 !== kT ? kT : 0)
          })
        }), AT && (0, wK.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function st(TT) {
      const kT = Math.min(4, Math.max(1, TT / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * TT / 4)),
        capSpread: Math.min(5 * TT / 8, 24 * kT),
        capThick: 6 * kT,
        stemHalfWidth: 3 * kT,
        puffScale: kT
      }
    }
    class Th {
      constructor() {
        this.ty = !1
      }
      hold(TT) {
        TT.getCameraFar() < 1e3 && (TT.setCameraFar(1e3), this.ty = !0)
      }
      release(TT) {
        this.ty && (this.ty = !1, TT.setCameraFar(null))
      }
    }
    const kh = 1 / .6,
      ch = [.2, .1, .2],
      lh = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Mh = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Vy.f.Standard,
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
      Kh = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: Vy.f.Standard,
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
      Oh = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Vy.f.Standard,
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
      yh = {
        texture: zt,
        DA: Math.ceil(120) + 4,
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
        blendMode: Vy.f.Add
      };
    class fh {
      constructor(TT) {
        this.store = TT, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Th, this.timers = []
      }
      onAfterRender(TT, kT) {
        const cT = performance.now(),
          lT = 0 === this.lastMs ? 0 : Math.min(cT - this.lastMs, 250) / 1e3;
        this.lastMs = cT;
        const {
          fuse: MT,
          blast: KT
        } = this.store.get();
        null !== KT && KT !== this.shownBlast && (this.shownBlast = KT, this.startBlast(TT, kT, KT, cT));
        const OT = TT.particlesEnabled();
        null !== MT && MT.endsAt > cT && OT ? this.emitBeacon(TT, MT, lT, cT) : this.beaconBudget = 0, null !== this.cloud && (cT - this.cloud.startMs > 33e3 ? this.disposeCloud(TT) : (this.far.hold(TT), OT && this.emitCloud(TT, lT, cT)))
      }
      dispose(TT) {
        var kT;
        null === (kT = this.beacon) || void 0 === kT || kT.dispose(), this.beacon = null, this.disposeCloud(TT);
        for (const cT of this.timers) clearTimeout(cT);
        this.timers.length = 0
      }
      emitBeacon(TT, kT, cT, lT) {
        const MT = kT.endsAt - lT < 5e3 ? 350 : 1e3,
          KT = .5 + .5 * Math.sin(2 * Math.PI * lT / MT);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * KT * cT, 4), this.beaconBudget < 1) return;
        const OT = Math.floor(this.beaconBudget);
        this.beaconBudget -= OT;
        const [yT, fT, xT] = kT.at, IT = [yT + .5, fT + 1.1, xT + .5];
        this.beacon ??= TT.createParticles(yh, {
          pos: IT,
          half: ch
        }), this.beacon.moveTo(IT), this.beacon.emit(OT)
      }
      startBlast(TT, kT, cT, lT) {
        var MT;
        null === (MT = this.beacon) || void 0 === MT || MT.dispose(), this.beacon = null, this.disposeCloud(TT);
        const KT = (0, ey.isMobile)() ? .5 : 1;
        this.streams = [Mh, Kh, Oh].map((TT => {
          const kT = Math.round(TT.count * KT);
          return {
            spec: TT,
            particles: null,
            rate: kT / ((TT.toMs - TT.fromMs) / 1e3),
            budget: 0,
            left: kT
          }
        })), this.cloud = {
          blast: cT,
          startMs: lT
        };
        const OT = Math.max(.25, 1 - cT.distance / (6 * cT.r)),
          yT = cT.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [cT, lT, MT] of lh) Ih(TT, kT, cT, OT * lT, MT)
        }), yT))
      }
      emitCloud(TT, kT, cT) {
        const {
          blast: lT,
          startMs: MT
        } = this.cloud, KT = cT - MT, [OT, yT, fT] = lT.at, xT = st(lT.r);
        for (const IT of this.streams) {
          const {
            spec: cT
          } = IT;
          if (IT.left <= 0 || KT < cT.fromMs) continue;
          IT.budget += IT.rate * kT;
          const MT = Math.min(Math.floor(IT.budget), IT.left);
          if (MT < 1) continue;
          IT.budget -= MT, IT.left -= MT;
          const AT = IT.particles ??= this.createStream(TT, cT, lT);
          if (cT === Mh) {
            const TT = xT.stemHalfWidth;
            AT.moveTo([OT, yT + 1, fT], [TT, 1, TT])
          } else if (cT === Kh) {
            const TT = xT.capSpread * Math.min(1, (KT - cT.fromMs) / 3e3),
              kT = Math.sqrt(Math.random()),
              lT = 2 * Math.random() * Math.PI,
              MT = Math.cos(lT) * kT,
              IT = Math.sin(lT) * kT,
              CT = OT + MT * TT,
              jT = fT + IT * TT,
              vT = xT.capThick,
              tT = yT + xT.capHeight + vT * (1 - kT * kT) * 2;
            AT.setDirections([.7 * MT, .05, .7 * IT], [MT, .2, IT]), AT.moveTo([CT, tT, jT], [vT, vT, vT])
          } else {
            this.ringAngle += 2.39996;
            const TT = Math.cos(this.ringAngle),
              kT = Math.sin(this.ringAngle);
            AT.setDirections([TT, .05, kT], [TT, .1, kT]), AT.moveTo([OT + 2 * TT, yT + .5, fT + 2 * kT], [0, .5, 0])
          }
          AT.emit(MT)
        }
      }
      createStream(TT, kT, cT) {
        const {
          r: lT
        } = cT, MT = Math.max(kT.life[0], lT / 25), KT = kT === Oh ? [.9 * MT, MT] : kT.life, OT = st(lT), yT = kT === Oh ? 1 : OT.puffScale, fT = {
          texture: zt,
          DA: kT.count + 4,
          minLifeTime: KT[0] / kh,
          maxLifeTime: KT[1] / kh,
          minSize: kT.size[0] * yT,
          maxSize: kT.size[1] * yT,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, kT.gravity * kh * kh, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: kT.from[0],
            maxColor: kT.from[1]
          }, {
            timeFraction: .6,
            minColor: xh(kT.from[0], kT.to[0]),
            maxColor: xh(kT.from[1], kT.to[1])
          }, {
            timeFraction: 1,
            minColor: kT.to[0],
            maxColor: kT.to[1]
          }],
          blendMode: kT.blend
        };
        if (kT === Mh) {
          const TT = OT.capHeight / ((KT[0] + KT[1]) / 2);
          fT.minEmitPower = .9 * TT * kh, fT.maxEmitPower = 1.05 * TT * kh, fT.dir1 = [-.1, 1, -.1], fT.dir2 = [.1, 1, .1]
        } else kT === Kh ? (fT.minEmitPower = 1.2, fT.maxEmitPower = 2, fT.dir1 = [-1, .05, -1], fT.dir2 = [1, .2, 1]) : (fT.minEmitPower = 39.583333333333336, fT.maxEmitPower = 41.66666666666667, fT.dir1 = [1, 0, 0], fT.dir2 = [1, 0, 0]);
        return TT.createParticles(fT, {
          pos: cT.at
        })
      }
      disposeCloud(TT) {
        for (const cT of this.streams) {
          var kT;
          null === (kT = cT.particles) || void 0 === kT || kT.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(TT)
      }
    }

    function xh(TT, kT) {
      return [(TT[0] + kT[0]) / 2, (TT[1] + kT[1]) / 2, (TT[2] + kT[2]) / 2, .75 * TT[3]]
    }

    function Ih(TT, kT, cT, lT, MT) {
      try {
        TT.playSound(kT, cT, lT, MT)
      } catch (KT) {
        console.error(KT)
      }
    }
    const Ah = {
        DA: 720,
        perS: 100
      },
      Ch = {
        DA: 320,
        perS: 44
      };
    class jh {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(TT, kT) {
        this.zone = {
          centre: [...TT.centre],
          r: TT.r,
          band: TT.band ? [TT.band[0], TT.band[1]] : void 0
        }, this.endsAt = kT
      }
      stop() {
        this.zone = null
      }
      yN(TT, kT) {
        const {
          baf2FalloutMs: cT,
          baf2FalloutAt: lT,
          baf2FalloutR: MT,
          baf2FalloutY: KT
        } = TT;
        cT > 0 && lT && void 0 !== MT ? this.start({
          centre: lT,
          r: MT,
          band: KT
        }, kT + cT) : this.stop()
      }
      perS(TT, kT, cT) {
        const lT = this.zone;
        if (!lT) return 0;
        const MT = this.endsAt - TT;
        return MT <= 0 ? (this.zone = null, 0) : lT.band && (kT[1] < lT.band[0] || kT[1] > lT.band[1]) || Math.hypot(kT[0] - lT.centre[0], kT[2] - lT.centre[2]) > lT.r ? 0 : cT.perS * Math.min(1, MT / 5e3)
      }
    }
    const vh = [5, 7],
      th = [24, 8, 24],
      hh = .5,
      Nh = 1 / .6,
      Qh = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class Sh {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ey.isMobile)();
        this.state = new jh, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(TT) {
          return TT ? Ch : Ah
        }(TT)
      }
      startFallout(TT, kT) {
        this.state.start(TT, kT)
      }
      stopFallout() {
        this.state.stop()
      }
      yN(TT) {
        this.state.yN(TT, performance.now())
      }
      onAfterRender(TT, kT) {
        var cT;
        const lT = performance.now(),
          MT = 0 === this.lastMs ? 0 : Math.min(lT - this.lastMs, 250) / 1e3;
        this.lastMs = lT;
        const KT = this.state.perS(lT, kT, this.tier);
        if (KT <= 0 || !TT.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + KT * MT, KT / 4);
        const OT = Math.floor(this.budget);
        if (OT < 1) return;
        this.budget -= OT;
        const yT = this.at;
        yT[0] = kT[0], yT[1] = kT[1] + 12, yT[2] = kT[2];
        const fT = null !== (cT = this.systems) && void 0 !== cT ? cT : this.create(TT, yT),
          xT = this.amounts;
        xT[0] = 0, xT[1] = 0;
        for (let IT = 0; IT < OT; IT++) xT[Math.random() < .3 ? 1 : 0]++;
        for (let IT = 0; IT < fT.length; IT++) xT[IT] > 0 && (fT[IT].moveTo(yT, th), fT[IT].emit(xT[IT]))
      }
      dispose() {
        for (const kT of null !== (TT = this.systems) && void 0 !== TT ? TT : []) {
          var TT;
          kT.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(TT, kT) {
        return this.systems = Qh.map((cT => {
          let {
            rgba: [lT, MT, KT, OT],
            share: yT
          } = cT;
          const fT = {
            texture: "square_particle",
            DA: Math.ceil(this.tier.DA * yT),
            minLifeTime: vh[0] / Nh,
            maxLifeTime: vh[1] / Nh,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [hh, -1, hh],
            colorGradients: [{
              timeFraction: 0,
              minColor: [lT, MT, KT, 0]
            }, {
              timeFraction: .15,
              minColor: [lT, MT, KT, OT]
            }, {
              timeFraction: .8,
              minColor: [lT, MT, KT, OT]
            }, {
              timeFraction: 1,
              minColor: [lT, MT, KT, 0]
            }],
            blendMode: Vy.f.Standard
          };
          return TT.createParticles(fT, {
            pos: kT,
            half: th
          })
        })), this.systems
      }
    }
    const Dh = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function ah(TT) {
      const kT = /\|rot(\d)/.exec(TT);
      return Dh[kT ? Number(kT[1]) : 1]
    }
    var Fh = cT(608),
      rh = cT(38304);
    const Ph = new Set(Fh.o);

    function wh(TT) {
      if (-2 !== TT.count) return null;
      const kT = gT(TT.item);
      return null !== kT && Ph.has(kT) ? kT : null
    }

    function mh(TT) {
      const {
        width: kT,
        height: cT
      } = (0, rh.d)(TT).hitBoxDimensions;
      return .55 / Math.max(kT, cT)
    }

    function bh(TT, kT, cT) {
      if (!cT) return !1;
      const lT = TT[0] + .5 - kT[0],
        MT = TT[1] + .5 - kT[1],
        KT = TT[2] + .5 - kT[2];
      return lT * lT + MT * MT + KT * KT <= 576
    }

    function zh(TT, kT) {
      return Math.atan2(TT[0], TT[2]) + Math.PI + kT
    }

    function Jh(TT, kT) {
      const cT = 2 * Math.PI;
      return (TT + cT * kT / 1e4) % cT
    }
    class oh {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = TT, this.now = kT, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = TT.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(TT, kT) {
        if (0 === this.farms.size) return;
        const cT = this.now(),
          lT = Number.isNaN(this.frameMs) ? 0 : Math.min(cT - this.frameMs, 100);
        this.frameMs = cT, cT - this.checkedMs >= 1e3 && (this.checkedMs = cT, this.check(TT, kT));
        for (const MT of this.farms.values()) MT.shown && MT.running && null !== MT.model && lT > 0 && (MT.spin = Jh(MT.spin, lT), MT.model.setPose(MT.feet, zh(MT.front, MT.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const TT of this.farms.values()) this.drop(TT);
        this.farms.clear()
      }
      sync() {
        const TT = new Set;
        for (const kT of this.labels.list()) {
          const cT = wh(kT);
          if (null === cT) continue;
          TT.add(kT.key);
          const lT = this.farms.get(kT.key);
          if ((null === lT || void 0 === lT ? void 0 : lT.mob) === cT) continue;
          lT && this.drop(lT);
          const [MT, KT, OT] = kT.pos;
          this.farms.set(kT.key, {
            pos: kT.pos,
            feet: [MT + .5, KT + 1, OT + .5],
            mob: cT,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [kT, cT] of this.farms) TT.has(kT) || (this.drop(cT), this.farms.delete(kT));
        this.checkedMs = -1 / 0
      }
      check(TT, kT) {
        for (const cT of this.farms.values()) {
          const [lT, MT, KT] = cT.pos, OT = ev(TT, cT.pos);
          null !== OT && Hc(OT) === VT && bh(cT.pos, kT, "Air" === ev(TT, [lT, MT + 1, KT])) ? (cT.running = OT.endsWith("|Running"), cT.front = ah(OT), null === cT.model && (cT.model = TT.createMobModel(cT.mob, mh(cT.mob)), null === cT.model) || (cT.model.setPose(cT.feet, zh(cT.front, cT.spin)), cT.shown || (cT.model.setVisible(!0), cT.shown = !0))) : (cT.shown && null !== cT.model && cT.model.setVisible(!1), cT.shown = !1)
        }
      }
      drop(TT) {
        var kT;
        null === (kT = TT.model) || void 0 === kT || kT.dispose(), TT.model = null, TT.shown = !1
      }
    }
    class Hh {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(TT) {
        var kT;
        this.island = TT.baf2ColIsland, this.islandSite = (kT = TT.baf2ColSite) && 8 === kT.length ? {
          spawnXZ: [kT[0], kT[1]],
          coreXZ: [kT[2], kT[3]],
          minXZ: [kT[4], kT[5]],
          maxXZ: [kT[6], kT[7]]
        } : null, this.views = TT.baf2ColList.map((TT => ({
          entry: yM(TT)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(TT) {
        this.status = TT, this.emit()
      }
      onOpen(TT) {
        this.openHeld = TT
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
        return this.views.map((TT => TT.entry))
      }
      entryAtRoot(TT) {
        var kT;
        return null === (kT = this.views.find((kT => {
          let {
            entry: cT
          } = kT;
          return cT.focus[0] === TT[0] && cT.focus[1] === TT[1] + 1 && cT.focus[2] === TT[2]
        }))) || void 0 === kT ? void 0 : kT.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(TT, kT) {
        return df(this.entries(), TT, kT)
      }
      lookSource() {
        return {
          handles: TT => jl(TT) >= 0 || vl(TT),
          line: (TT, kT) => this.lookLine(TT, kT),
          version: () => this.beamsVersion
        }
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const TT of this.listeners) TT()
      }
    }
    const eh = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((TT => TT / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((TT => [TT, TT + 1, TT + 2, TT, TT + 2, TT + 3]))
    };

    function Gh(TT, kT, cT, lT, MT, KT, OT) {
      let yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const fT = Math.cos(yT),
        xT = Math.sin(yT),
        IT = TT.positions.length / 3,
        {
          positions: AT,
          indices: CT
        } = eh;
      for (let jT = 0; jT < AT.length; jT += 3) {
        const yT = AT[jT] * MT,
          IT = AT[jT + 2] * OT;
        TT.positions.push(kT + yT * fT + IT * xT, cT + AT[jT + 1] * KT, lT - yT * xT + IT * fT)
      }
      for (const jT of CT) TT.indices.push(IT + jT)
    }

    function Vh(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return kT < 1 ? {
        rgb: TT,
        alpha: kT
      } : {
        rgb: TT,
        alpha: 1,
        opaque: !0
      }
    }
    class Eh {
      constructor(TT, kT) {
        this.style = TT, this.perSource = kT, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(TT) {
        this.sources = TT, 0 === TT.length && (this.budget = 0)
      }
      UA(TT, kT, cT) {
        const lT = this.sources.length;
        if (0 !== lT) {
          var MT, KT;
          this.budget = Math.min(this.budget + (MT = lT, KT = this.perSource, Math.min(MT * KT, cx) * kT), 2);
          for (let kT = 0; kT < lT && this.budget >= 1; kT++) {
            const kT = this.sources[this.cursor % lT];
            this.cursor = (this.cursor + 1) % lT;
            if (!(Math.max(Math.abs(kT.x - cT[0]), Math.abs(kT.y - cT[1]), Math.abs(kT.z - cT[2])) > 32)) return this.puff(TT, kT), void this.budget--
          }
        }
      }
      dispose() {
        var TT;
        null === (TT = this.particles) || void 0 === TT || TT.dispose(), this.particles = null, this.sources = []
      }
      puff(TT, kT) {
        let {
          x: cT,
          y: lT,
          z: MT,
          h: KT,
          faces: OT
        } = kT;
        const yT = function(TT, kT, cT, lT, MT) {
            const [KT, OT, yT] = MT[Math.floor(Math.random() * MT.length)], fT = .04, xT = (TT, kT, cT) => TT > 0 ? kT + cT + fT : TT < 0 ? kT - fT : kT + .1, IT = (TT, kT, cT) => TT > 0 ? kT + cT + fT : TT < 0 ? kT - fT : kT + cT - .1, AT = [xT(KT, TT, 1), xT(OT, kT, lT), xT(yT, cT, 1)], CT = [IT(KT, TT, 1), IT(OT, kT, lT), IT(yT, cT, 1)];
            return {
              pos: [(AT[0] + CT[0]) / 2, (AT[1] + CT[1]) / 2, (AT[2] + CT[2]) / 2],
              half: [(CT[0] - AT[0]) / 2, (CT[1] - AT[1]) / 2, (CT[2] - AT[2]) / 2],
              out: [KT, OT, yT]
            }
          }(cT, lT, MT, KT, OT),
          {
            style: fT
          } = this,
          xT = this.particles ??= TT.createParticles(ot(fT, Math.ceil(fT.count * cx * fT.life[1]) + 4), yT);
        xT.moveTo(yT.pos, yT.half);
        const [IT, AT, CT] = yT.out, jT = fT.spread;
        xT.setDirections([IT - jT, .6 + AT, CT - jT], [IT + jT, 1 + AT, CT + jT]), xT.emit(fT.count)
      }
    }
    const Zh = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class uh {
      constructor() {
        this.green = new Eh(Mx.green, Tx), this.pink = new Eh(Mx.pink, kx), this.colliders = [], this.lastMs = 0
      }
      setSources(TT) {
        this.colliders = TT;
        const kT = [],
          cT = [];
        for (const lT of TT) {
          const [TT, MT, KT] = lT.focus;
          kT.push({
            x: TT,
            y: MT - 1,
            z: KT,
            h: 2,
            faces: Zh
          });
          for (let kT = 0; kT < 4; kT++) {
            if (!lT.live[kT]) continue;
            const [TT, MT, KT] = Nl(lT.focus, kT, yl.LASER_D), [OT, , yT] = hl[kT], fT = Zh.filter((TT => TT[0] !== OT || TT[2] !== yT || 0 !== TT[1]));
            cT.push({
              x: TT,
              y: MT,
              z: KT,
              h: 1,
              faces: fT
            })
          }
        }
        this.green.setSources(kT), this.pink.setSources(cT)
      }
      onAfterRender(TT) {
        const kT = performance.now(),
          cT = 0 === this.lastMs ? 0 : Math.min(kT - this.lastMs, 250) / 1e3;
        if (this.lastMs = kT, 0 === this.colliders.length || !TT.particlesEnabled()) return;
        const lT = TT.getCameraPosition();
        this.green.UA(TT, cT, lT), this.pink.UA(TT, cT, lT)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Xh = 1.04,
      dh = Vh([1, 120 / 255, 220 / 255]),
      Lh = Vh([1, .25, .25], .35);
    class Rh {
      constructor(TT) {
        this.store = TT, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new uh
      }
      onAfterRender(TT) {
        this.store.version() !== this.builtVersion && this.rebuild(TT);
        const kT = performance.now();
        for (const cT of this.beams) {
          const lT = 1 + .35 * Math.sin(kT / 700 * Math.PI * 2 + cT.phase);
          TT.setGameMesh(cT.mesh, {
            scale: [cT.alongX ? 1 : lT, lT, cT.alongX ? lT : 1]
          })
        }
        this.glow.onAfterRender(TT)
      }
      dispose(TT) {
        this.clear(TT), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(TT) {
        this.clear(TT), this.builtVersion = this.store.version();
        const kT = [];
        for (const {
            entry: cT
          }
          of this.store.colliders()) cT.on && cT.live.some(Boolean) && (this.addBeams(TT, cT), kT.push(cT)), cT.blockers.length > 0 && this.addMarkers(TT, cT);
        this.glow.setSources(kT)
      }
      addBeams(TT, kT) {
        const [cT, lT, MT] = kT.focus, KT = sf - .25, OT = (.25 + sf) / 2;
        for (let yT = 0; yT < 4; yT++) {
          if (!kT.live[yT]) continue;
          const [fT, , xT] = hl[yT], IT = 0 !== fT, AT = {
            positions: [],
            indices: []
          };
          Gh(AT, 0, 0, 0, IT ? KT : .2, .2, IT ? .2 : KT);
          const CT = [cT + .5 + fT * OT, lT + .5, MT + .5 + xT * OT],
            jT = TT.createGameMesh(AT, dh, CT);
          this.meshes.push(jT), this.beams.push({
            mesh: jT,
            alongX: IT,
            phase: yT * Math.PI / 2
          })
        }
      }
      addMarkers(TT, kT) {
        const cT = kT.blockers[0],
          lT = {
            positions: [],
            indices: []
          };
        for (const [MT, KT, OT] of kT.blockers) Gh(lT, MT - cT[0] + .5, KT - cT[1] + .5, OT - cT[2] + .5, Xh, Xh, Xh);
        this.meshes.push(TT.createGameMesh(lT, Lh, cT))
      }
      clear(TT) {
        for (const kT of this.meshes) TT.disposeGameMesh(kT);
        this.meshes = [], this.beams = []
      }
    }
    const gh = [.56, .83, 1],
      Uh = [1, .73, .08],
      Yh = [1, .25, .25],
      Bh = [.85, .85, .85],
      Wh = [.3, .45, .6];

    function nh(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const OT = MT / 2,
        yT = MT + KT;
      for (const fT of [-OT, OT])
        for (const MT of [-OT, OT]) Gh(TT, kT, cT + fT, lT + MT, yT, KT, KT), Gh(TT, kT + fT, cT, lT + MT, KT, yT, KT), Gh(TT, kT + fT, cT + MT, lT, KT, KT, yT)
    }

    function ph(TT) {
      return kT => TT.isBlockInLoadedChunk(kT[0], kT[1], kT[2]) && 0 === TT.getBlockId(kT[0], kT[1], kT[2])
    }

    function ih(TT) {
      return TT.map((TT => {
        let {
          free: kT,
          blocked: cT,
          gaps: lT,
          supports: MT
        } = TT;
        return `${kT.join(";")}|${cT.join(";")}|${lT.join(";")}|${MT.join(";")}`
      })).join("/")
    }

    function qh(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const KT = kT[0],
        OT = {
          positions: [],
          indices: []
        };
      for (const [yT, fT, xT] of kT) nh(OT, yT - KT[0] + .5, fT - KT[1] + .5, xT - KT[2] + .5, lT, MT);
      return TT.createGameMesh(OT, cT, KT)
    }
    class sh {
      constructor(TT) {
        this.store = TT, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(TT, kT, cT) {
        var lT;
        const MT = null === (lT = TT.ckT(kT)) || void 0 === lT ? void 0 : lT.name;
        if (MT !== xl && MT !== fl) return void("" !== this.shownKey && this.show(TT, "", []));
        const KT = performance.now();
        if (KT - this.lastCheckMs >= 200 && (this.lastCheckMs = KT, MT === xl ? this.check(TT, cT) : this.preview(TT, cT)), this.pulses.length > 0) {
          const kT = 1 + .12 * Math.sin(KT / 1e3 * 1.25 * Math.PI * 2),
            cT = [kT, kT, kT];
          for (const lT of this.pulses) TT.setGameMesh(lT, {
            scale: cT
          })
        }
      }
      dispose(TT) {
        this.clear(TT), this.shownKey = ""
      }
      check(TT, kT) {
        const cT = ph(TT),
          lT = [];
        for (const {
            entry: KT
          }
          of this.store.colliders()) {
          KT.focus.every(((TT, cT) => Math.abs(TT + .5 - kT[cT]) <= yl.GHOST_REACH)) && lT.push(qf(KT, cT))
        }
        const MT = ih(lT);
        MT !== this.shownKey && this.show(TT, MT, lT)
      }
      preview(TT, kT) {
        const cT = TT.getTargetedBlock(),
          lT = cT ? [cT.Wt[0], cT.Wt[1], cT.Wt[2]] : null,
          MT = null !== lT && lT.every(((TT, cT) => Math.abs(TT + .5 - kT[cT]) <= 8)),
          KT = this.store.site(),
          OT = MT && KT ? function(TT, kT, cT) {
            const lT = tl(TT);
            if (!lT.every(kT)) return null;
            const MT = Dl(TT, cT);
            return {
              column: lT,
              spots: qf({
                focus: lT[1],
                lasers: [!1, !1, !1, !1],
                open: MT,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, kT),
              fits: MT.filter(Boolean).length >= yl.MIN_SPOTS
            }
          }(lT, ph(TT), KT) : null,
          yT = OT ? [OT.spots] : [],
          fT = OT ? `preview ${lT.join(",")}|${OT.fits}|${ih(yT)}` : "";
        var xT, IT;
        fT !== this.shownKey && this.show(TT, fT, yT, null !== (xT = null === OT || void 0 === OT ? void 0 : OT.column) && void 0 !== xT ? xT : [], null === (IT = null === OT || void 0 === OT ? void 0 : OT.fits) || void 0 === IT || IT)
      }
      show(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(TT), this.shownKey = kT, lT.length > 0 && this.meshes.push(qh(TT, lT, Vh(MT ? Bh : Yh)));
        for (const {
            free: KT,
            blocked: OT,
            gaps: yT,
            supports: fT
          }
          of cT) {
          for (const [kT, cT, lT] of KT) {
            const MT = {
              positions: [],
              indices: []
            };
            nh(MT, 0, 0, 0);
            const KT = TT.createGameMesh(MT, Vh(gh), [kT + .5, cT + .5, lT + .5]);
            this.meshes.push(KT), this.pulses.push(KT)
          }
          OT.length > 0 && this.meshes.push(qh(TT, OT, Vh(Uh))), yT.length > 0 && this.meshes.push(qh(TT, yT, Vh(Yh), 1.06, .07)), fT.length > 0 && this.meshes.push(qh(TT, fT, Vh(Wh)))
        }
      }
      clear(TT) {
        for (const kT of this.meshes) TT.disposeGameMesh(kT);
        this.meshes = [], this.pulses = []
      }
    }
    class TN {
      constructor() {
        this.stored = new Map, this.ty = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(TT) {
        if (!TT.baf2TermOpen) return !1;
        TT.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [kT, cT] of TT.baf2TermItems) cT > 0 ? this.stored.set(kT, cT) : this.stored.delete(kT);
        if (TT.baf2TermHeld && (this.ty = new Map(TT.baf2TermHeld)), this.pending = this.pending.filter((kT => kT.seq > TT.baf2TermAcked)), this.silos = TT.baf2TermSilos, this.readOnly = TT.baf2TermReadOnly, this.pocket = !0 === TT.baf2TermPocket, TT.baf2TermReset) this.resort();
        else {
          const TT = new Set(this.order);
          for (const kT of this.stored.keys()) TT.has(kT) || this.order.push(kT)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((TT, kT) => this.amount(kT) - this.amount(TT) || TT.localeCompare(kT))), this.changed()
      }
      take(TT, kT) {
        const cT = yk(TT, this.amount(kT));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: kT,
          amount: cT,
          put: !1
        }), this.recents = [kT, ...this.recents.filter((TT => TT !== kT))].slice(0, 6), this.changed(), ck(this.seq, TT, kT)
      }
      put(TT, kT) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: kT,
          amount: yk(TT, this.heldAmount(kT)),
          put: !0
        }), this.changed(), lk(this.seq, TT, kT)
      }
      putAll() {
        this.seq++;
        for (const TT of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: TT,
          amount: this.heldAmount(TT),
          put: !0
        });
        return this.changed(), Mk(this.seq)
      }
      amount(TT) {
        var kT;
        let cT = null !== (kT = this.stored.get(TT)) && void 0 !== kT ? kT : 0;
        for (const lT of this.pending) lT.item === TT && (cT += lT.put ? lT.amount : -lT.amount);
        return Math.max(0, cT)
      }
      heldAmount(TT) {
        var kT;
        let cT = null !== (kT = this.ty.get(TT)) && void 0 !== kT ? kT : 0;
        for (const lT of this.pending) lT.put && lT.item === TT && (cT -= lT.amount);
        return Math.max(0, cT)
      }
      heldItems() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((kT => kT === TT || this.heldAmount(kT) > 0))
      }
      items() {
        return this.order.filter((TT => this.amount(TT) > 0))
      }
      recent() {
        return this.recents.filter((TT => this.amount(TT) > 0))
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
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      changed() {
        this.version++;
        for (const TT of this.listeners) TT()
      }
    }
    var kN = cT(38258);
    const cN = {
      isBlock: TT => void 0 !== oT.i[TT],
      harvestType: TT => {
        var kT;
        return null === (kT = oT.i[TT]) || void 0 === kT ? void 0 : kT.harvestType
      },
      harvestLevel: TT => {
        var kT;
        return null === (kT = oT.i[TT]) || void 0 === kT ? void 0 : kT.harvestLevel
      },
      dropsNothing: TT => {
        var kT;
        return null === (null === (kT = oT.i[TT]) || void 0 === kT ? void 0 : kT.drops)
      },
      displayName: TT => {
        var kT;
        return null === (kT = sO.o[TT]) || void 0 === kT ? void 0 : kT.displayName
      },
      description: TT => {
        var kT;
        return null === (kT = sO.o[TT]) || void 0 === kT ? void 0 : kT.description
      },
      harvests: TT => {
        var kT;
        return null === (kT = sO.o[TT]) || void 0 === kT ? void 0 : kT.harvests
      },
      level: TT => {
        var kT;
        return null === (kT = sO.o[TT]) || void 0 === kT ? void 0 : kT.level
      }
    };

    function lN(TT, kT, cT) {
      return function(TT, kT, cT, lT) {
        var MT, KT;
        const OT = kT.split("|")[0],
          yT = TT.isBlock(kT) ? kT : TT.isBlock(OT) ? OT : null;
        if (null === yT || "rock" !== TT.harvestType(yT) || TT.dropsNothing(yT) && !Xl.has(OT)) return null;
        const fT = cT && "rock" === TT.harvests(cT) ? null !== (MT = TT.level(cT)) && void 0 !== MT ? MT : 0 : null,
          xT = null !== (KT = null !== lT && void 0 !== lT ? lT : TT.harvestLevel(yT)) && void 0 !== KT ? KT : 0;
        return (null !== fT ? xT <= fT : 0 === TT.harvestLevel(yT)) ? null : bl(TT, xT)
      }(cN, TT, kT, cT)
    }

    function MN(TT, kT) {
      return function(TT, kT, cT) {
        if (kT === ml[0]) return [(0, GT.$d)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, GT.H.whiteUiText)];
        const lT = cT.split("|")[0],
          MT = TT.isBlock(lT) ? TT.displayName(lT) : void 0,
          KT = "string" === typeof MT ? MT : MT && "translationKey" in MT ? `$t(${MT.translationKey})` : lT;
        return [(0, GT.$d)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: KT
          }
        }, GT.H.whiteUiText), (0, GT.$d)({
          translationKey: `item:${(0,GT.ve)(kT)}`
        }, GT.H.yellowUiText)]
      }(cN, TT, kT)
    }
    const KN = "buildAFactory2Game:";
    const ON = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function yN(TT) {
      return TT.endsWith(" Ore")
    }
    const fN = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      xN = [],
      IN = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: fN,
        plan: null,
        atomic: xN
      },
      AN = "buildAFactory2Game:",
      CN = new Set(["Splitter", "Sorting Gate"]),
      jN = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class vN {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = TT, this.planAt = kT, this.tierOf = cT, this.Rx = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.ty = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = IN, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(TT, kT, cT) {
        var lT, MT, KT;
        let OT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const yT = null !== (lT = null === (MT = TT.ckT(kT)) || void 0 === MT ? void 0 : MT.name) && void 0 !== lT ? lT : null,
          fT = TT.isPlayerCrouching(kT),
          xT = 0 === cT ? null : this.resolve(TT, cT),
          IT = null !== xT && null !== OT && CN.has(xT.rootName) && function(TT, kT) {
            return jN.some((cT => {
              let [lT, MT] = cT;
              const KT = TT.getBlockId(kT[0] + lT, kT[1], kT[2] + MT);
              return 0 !== KT && "Express Belt" === TT.getMetaInfo(KT).rootName
            }))
          }(TT, OT),
          AT = this.updatePlan(0 === cT ? null : OT),
          CT = this.tierOf(),
          jT = null === OT ? null : (0, kN.d)(cT),
          vT = null !== jT && null !== OT && (0, kN.f)(function(TT) {
            return (kT, cT, lT) => TT.getBlockId(kT, cT, lT)
          }(TT), OT[0], OT[1], OT[2], jT),
          tT = this.readAfloat(TT, cT, OT);
        if (cT === this.Rx && vT === this.missesMaker && tT === this.afloat && yT === this.ty && fT === this.crouching && IT === this.express && CT === this.tier && !AT && (!this.targetsLive || !this.liveMoved(OT))) return;
        this.Rx = cT, this.missesMaker = vT, this.afloat = tT, this.ty = yT, this.crouching = fT, this.express = IT;
        const hT = IT && xT ? function(TT) {
          if (null === TT.info) return null;
          return TT.express ??= {
            ...TT.info,
            detail: `${AN}lookKeepsUpExpress`,
            detailItem: null
          }, TT.express
        }(xT) : null !== xT && vT && null !== jT ? this.besideMaker(xT, cT, jT) : null !== xT && tT ? this.hanging(xT) : null !== (KT = null === xT || void 0 === xT ? void 0 : xT.info) && void 0 !== KT ? KT : null;
        this.tier = CT;
        const NT = xT && hT ? function(TT, kT) {
          var cT, lT;
          const MT = oT.i[TT];
          if (!TT.endsWith(" Ore") || "rock" !== (null === MT || void 0 === MT ? void 0 : MT.harvestType) || 0 === MT.harvestLevel) return null;
          const KT = null !== (cT = MT.harvestLevel) && void 0 !== cT ? cT : 0,
            OT = kT ? sO.o[kT] : void 0;
          if ("rock" === (null === OT || void 0 === OT ? void 0 : OT.harvests) && (null !== (lT = OT.level) && void 0 !== lT ? lT : 0) >= KT) return null;
          const yT = (fT = KT, bl(cN, fT));
          var fT;
          if (null === yT) return null;
          const xT = lK(yT),
            IT = /^[AEIOU]/.test(yT) ? "An" : "";
          if ("rock" === (null === OT || void 0 === OT ? void 0 : OT.harvests) && kT) return {
            key: `${AN}lookToolTooWeak${IT}`,
            ty: lK(kT),
            needed: xT
          };
          return {
            key: yT === ml[0] ? `${AN}lookNeedAnyPickaxe` : `${AN}lookNeedPickaxe${IT}`,
            ty: null,
            needed: xT
          }
        }(xT.rootName, yT) : null;
        this.targetsLive = !0 === (null === xT || void 0 === xT ? void 0 : xT.live) && null !== OT;
        let QT = null;
        this.targetsLive && xT && OT && this.live && (this.livePos[0] = OT[0], this.livePos[1] = OT[1], this.livePos[2] = OT[2], this.liveVersion = this.live.version(), QT = this.live.line(xT.rootName, OT));
        const ST = null === hT ? fN : function(TT, kT, cT) {
            const lT = function(TT, kT, cT) {
              const lT = Gc(TT);
              if (null === lT) return null;
              const MT = `${KN}lookPortMode_${lT}`,
                KT = Rl(kT);
              if (KT && cT) return {
                mode: null,
                detail: MT,
                next: `${KN}lookWrenchPickUp`,
                nextState: null
              };
              const OT = Vc(TT),
                yT = null === OT ? null : Gc(OT);
              return null === yT ? {
                mode: null,
                detail: MT,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: MT,
                next: KT ? `${KN}lookWrenchNext` : `${KN}lookPortWrench`,
                nextState: `${KN}lookPortState_${yT}`
              }
            }(TT, kT, cT);
            if (null !== lT) return lT;
            const MT = lM(TT, kT, cT);
            return null === MT.mode && null === MT.next ? fN : MT
          }(TT.blockIdToBlockName(cT), yT, fT),
          DT = this.plan,
          aT = xT && hT ? this.rowsOf(xT.rootName, CT) : xN,
          FT = this.snapshot;
        if (!(null === hT ? !FT.visible : FT.visible && hT === FT.info && (rT = NT, PT = FT.tool, rT === PT || null !== rT && null !== PT && rT.key === PT.key && rT.ty === PT.ty && rT.needed === PT.needed) && function(TT, kT) {
            return TT === kT || null !== TT && null !== kT && TT.key === kT.key && JSON.stringify([TT.params, TT.keys]) === JSON.stringify([kT.params, kT.keys])
          }(QT, FT.live) && function(TT, kT) {
            return TT.mode === kT.mode && TT.detail === kT.detail && TT.next === kT.next && TT.nextState === kT.nextState
          }(ST, FT.wrench) && Uv(DT, FT.plan) && aT === FT.atomic)) {
          var rT, PT;
          this.snapshot = null === hT ? {
            ...FT,
            visible: !1
          } : {
            info: hT,
            visible: !0,
            tool: NT,
            live: QT,
            wrench: ST,
            plan: DT,
            atomic: aT
          };
          for (const TT of this.listeners) TT()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = IN, this.Rx = 0, this.ty = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(TT, kT, cT) {
        if (null === cT || 0 === kT || !yT() || !yN(this.resolve(TT, kT).rootName)) return !1;
        const lT = `${cT[0]},${cT[1]},${cT[2]},${kT}`,
          MT = performance.now();
        return lT === this.afloatKey && MT - this.afloatAt < tN ? this.afloat : (this.afloatKey = lT, this.afloatAt = MT, function(TT, kT) {
          for (const [cT, lT, MT] of ON) {
            const KT = kT(TT[0] + cT, TT[1] + lT, TT[2] + MT);
            if (void 0 === KT || null !== KT && !yN(KT)) return !1
          }
          return !0
        }(cT, ((kT, cT, lT) => function(TT, kT, cT, lT) {
          if (!TT.isBlockInLoadedChunk(kT, cT, lT)) return;
          const MT = TT.getBlockId(kT, cT, lT);
          return 0 === MT ? null : TT.getMetaInfo(MT).rootName
        }(TT, kT, cT, lT))))
      }
      liveMoved(TT) {
        var kT;
        const {
          livePos: cT
        } = this;
        return null === TT || TT[0] !== cT[0] || TT[1] !== cT[1] || TT[2] !== cT[2] || (null === (kT = this.live) || void 0 === kT ? void 0 : kT.version()) !== this.liveVersion
      }
      updatePlan(TT) {
        const kT = null === TT ? "" : TT.join(","),
          cT = performance.now();
        if (kT === this.planPos && cT - this.planMs < 250) return !1;
        this.planPos = kT, this.planMs = cT;
        const lT = null === TT ? null : this.planAt([TT[0], TT[1], TT[2]]),
          MT = !Uv(lT, this.plan);
        return this.plan = lT, MT
      }
      besideMaker(TT, kT, cT) {
        let {
          info: lT
        } = TT;
        if (null === lT) return null;
        let MT = this.besideMakerById.get(kT);
        if (void 0 === MT) {
          const TT = "cryo" === cT ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          MT = {
            ...lT,
            detail: `${AN}${TT}`,
            detailItem: null
          }, this.besideMakerById.set(kT, MT)
        }
        return MT
      }
      hanging(TT) {
        let {
          info: kT,
          rootName: cT
        } = TT;
        if (null === kT) return null;
        let lT = this.afloatByRoot.get(cT);
        return void 0 === lT && (lT = {
          ...kT,
          detail: `${AN}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(cT, lT)), lT
      }
      rowsOf(TT, kT) {
        if (null === kT) return xN;
        const cT = `${TT}|${kT}`;
        let lT = this.rowsByKey.get(cT);
        if (void 0 === lT) {
          const MT = function(TT, kT) {
            var cT;
            if (!(TT in Vk)) return [];
            const lT = null !== (cT = Ek[TT]) && void 0 !== cT ? cT : [],
              MT = new Map;
            for (const OT of RK(TT, kT))
              if ((lT.includes(OT) || LK(OT.output) && XK(OT.output) > pT(TT)) && XK(OT.output) <= kT) {
                var KT;
                const TT = null !== (KT = MT.get(OT.output)) && void 0 !== KT ? KT : [];
                TT.push(OT.input), MT.set(OT.output, TT)
              } return UK([...MT], (TT => {
              let [kT] = TT;
              return -XK(kT)
            })).map((TT => {
              let [kT, cT] = TT;
              return {
                output: kT,
                inputs: cT
              }
            }))
          }(TT, kT);
          lT = MT.length > 0 ? MT : xN, this.rowsByKey.set(cT, lT)
        }
        return lT
      }
      resolve(TT, kT) {
        const {
          rootId: cT,
          rootName: lT
        } = TT.getMetaInfo(kT), MT = (0, tc.l)(lT) ? kT : cT;
        let KT = this.byRootId.get(MT);
        const OT = yT();
        if (void 0 === KT || KT.nuclear !== OT) {
          var fT;
          const cT = function(TT) {
            return Zl(cN, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT)
          }(lT, TT.blockIdToBlockName(kT));
          KT = {
            info: cT,
            rootName: lT,
            live: null !== cT && !0 === (null === (fT = this.live) || void 0 === fT ? void 0 : fT.handles(lT)),
            nuclear: OT
          }, this.byRootId.set(MT, KT)
        }
        return KT
      }
    }
    const tN = 500;
    const hN = (0, lT.memo)((function(TT) {
      var kT, cT;
      let {
        store: MT
      } = TT;
      const {
        t: KT
      } = (0, bM.B)(), [OT, yT] = (0, lT.useState)((() => MT.get()));
      (0, lT.useEffect)((() => (yT(MT.get()), MT.subscribe((() => {
        yT(MT.get())
      })))), [MT]);
      const {
        openInGameMenuName: fT,
        openEverythingMenuName: xT,
        isTouchScreen: IT
      } = (0, DM.n)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: AT,
        tool: CT,
        live: jT,
        wrench: vT,
        atomic: tT
      } = OT, hT = OT.visible && null === fT && null === xT;
      if (null === AT) return null;
      const NT = null !== vT.detail ? KT(vT.detail) : null !== (kT = OT.plan) && void 0 !== kT && kT.ctrl ? KT("buildAFactory2Game:lookPlanCtrl") : null !== AT.detail ? KT(AT.detail, null === AT.detailItem ? void 0 : {
        item: KT(AT.detailItem)
      }) : null;
      return (0, wK.jsxs)("div", {
        className: rM()("Baf2LookTarget", {
          Visible: hT
        }),
        "aria-hidden": !hT,
        children: [(0, wK.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: KT(AT.name)
        }), null !== OT.plan && (0, wK.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: KT(OT.plan.key, {
            kind: KT(OT.plan.kindKey),
            w: String(OT.plan.w),
            h: String(OT.plan.h),
            d: String(OT.plan.d),
            count: String(OT.plan.count)
          })
        }), void 0 !== (null === (cT = OT.plan) || void 0 === cT ? void 0 : cT.why) && (0, wK.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: KT(OT.plan.why)
        }), null !== vT.mode && (0, wK.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: KT(vT.mode)
        }), null !== CT ? (0, wK.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: KT(CT.key, {
            item: KT(CT.needed),
            ty: null === CT.ty ? "" : KT(CT.ty)
          })
        }) : null !== jT ? (0, wK.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: KT(jT.key, Kx(KT, jT))
        }) : null !== NT && (0, wK.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: NT
        }), tT.length > 0 && (0, wK.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: KT("buildAFactory2Game:lookAtomicRecipes", {
            list: tT.map((TT => {
              let {
                output: kT,
                inputs: cT
              } = TT;
              const lT = cT.length > 1 ? ` ${KT("buildAFactory2Game:recipeMore",{count:String(cT.length-1)})}` : "";
              return `${KT(lK(cT[0]))}${lT} \u2192 ${KT(lK(kT))}`
            })).join(", ")
          })
        }), null !== vT.next && (0, wK.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: KT(vT.next, {
            state: null === vT.nextState ? "" : KT(vT.nextState),
            use: KT(IT ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var NN = cT(38363);
    const QN = [],
      SN = [
        [0, -1, 0]
      ];

    function DN(TT) {
      const kT = [TT];
      for (let cT = 1; cT <= 4; cT++) cT > 1 && kT.push(`${TT}|meta|rot${cT}`), kT.push(`${TT}|meta|rot${cT}|Running`);
      return kT
    }

    function aN(TT, kT) {
      return [Math.floor(TT[0] / kT), Math.floor(TT[1] / kT), Math.floor(TT[2] / kT)]
    }

    function FN(TT, kT, cT) {
      return `${TT},${kT},${cT}`
    }

    function rN(TT) {
      const kT = TT.split("|")[0];
      if (!Ic(kT)) return QN;
      const cT = Vk[kT];
      if (cc(cT)) return SN;
      const lT = ah(TT);
      return lc(cT) ? [
        [-lT[0], -lT[1], -lT[2]]
      ] : PM(cT) ? function(TT, kT) {
        const cT = TT[0] - 2 * kT[0],
          lT = TT[2] - 2 * kT[2],
          MT = [];
        for (let KT = -1; KT <= 1; KT++)
          for (let kT = -1; kT <= 1; kT++) MT.push([cT + KT, TT[1], lT + kT]);
        return MT
      }([0, 0, 0], lT) : QN
    }
    const PN = [.5, .5, .5],
      wN = [.2, .8, .3],
      mN = [.45, 1, .5];
    class bN {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(TT) {
        this.indexed = !0;
        for (const kT of bk)
          for (const cT of DN(kT)) {
            const kT = TT.blockNameToBlockId(cT, !0),
              lT = rN(cT);
            null !== kT && lT.length > 0 && (this.offsetsList.push(lT), this.offsetsIndexById[kT] = this.offsetsList.length)
          }
      }
      onAfterRender(TT, kT) {
        this.indexed || this.index(TT);
        const cT = performance.now();
        if (cT - this.lastCheckMs < 100) return;
        this.lastCheckMs = cT, this.checks++;
        const lT = Cv.f.vv,
          [MT, KT, OT] = aN(kT, lT);
        let yT = !1;
        const fT = [];
        let xT = 0;
        for (let IT = MT - 2; IT <= MT + 2; IT++)
          for (let kT = KT - 1; kT <= KT + 1; kT++)
            for (let MT = OT - 2; MT <= OT + 2; MT++) {
              const KT = xT++,
                OT = FN(IT, kT, MT),
                AT = TT.getChunkVersion(IT, kT, MT);
              let CT = this.chunks.get(OT);
              null !== AT ? (CT || (CT = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(OT, CT)), CT.seenAt = this.checks, CT.checkedVersion !== AT && (CT.checkedVersion = AT, yT = !0), CT.scannedVersion !== AT && cT - CT.scannedAt >= 500 && fT.push({
                slot: KT,
                entry: CT,
                origin: [IT * lT, kT * lT, MT * lT]
              })) : (yT ||= void 0 !== CT, this.chunks.delete(OT))
            }
        this.scanDue(TT, fT) && (yT = !0);
        for (const [IT, AT] of this.chunks) AT.seenAt !== this.checks && (yT ||= AT.machines.length > 0, this.chunks.delete(IT));
        for (const IT of this.chunks.values())
          for (const [kT, cT, lT] of IT.cellChunks)(Math.abs(kT - MT) > 2 || Math.abs(cT - KT) > 1 || Math.abs(lT - OT) > 2) && this.watchCellChunk(TT, kT, cT, lT) && (yT = !0);
        for (const [IT, AT] of this.cellChunks) AT.seenAt !== this.checks && this.cellChunks.delete(IT);
        yT && this.refresh(TT)
      }
      dispose(TT) {
        this.clearMeshes(TT), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(TT, kT) {
        const cT = Math.max(kT.findIndex((TT => {
          let {
            slot: kT
          } = TT;
          return kT >= this.scanFrom
        })), 0);
        let lT = 96;
        for (let MT = 0; MT < kT.length; MT++) {
          const {
            slot: KT,
            entry: OT,
            origin: yT
          } = kT[(cT + MT) % kT.length];
          if (lT -= this.scan(TT, OT, yT), lT <= 0) {
            this.scanFrom = KT + 1;
            break
          }
        }
        return kT.length > 0
      }
      scan(TT, kT, cT) {
        let [lT, MT, KT] = cT;
        const OT = Cv.f.vv,
          yT = this.hits;
        yT.length = 0;
        const fT = TT.scanBlocks(lT, MT, KT, lT + OT, MT + OT, KT + OT, this.offsetsIndexById, yT),
          xT = [];
        for (let IT = 0; IT < yT.length; IT += 4) xT.push({
          pos: [yT[IT], yT[IT + 1], yT[IT + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[yT[IT + 3]] - 1]
        });
        return kT.machines = xT, kT.cellChunks = function(TT, kT) {
          const cT = new Set,
            lT = [];
          for (const {
              pos: MT,
              offsets: KT
            }
            of TT)
            for (const [TT, OT, yT] of KT) {
              const KT = aN([MT[0] + TT, MT[1] + OT, MT[2] + yT], kT),
                fT = FN(...KT);
              cT.has(fT) || (cT.add(fT), lT.push(KT))
            }
          return lT
        }(xT, OT), kT.scannedVersion = kT.checkedVersion, kT.scannedAt = performance.now(), Math.max(fT, 1)
      }
      watchCellChunk(TT, kT, cT, lT) {
        const MT = FN(kT, cT, lT),
          KT = TT.getChunkVersion(kT, cT, lT),
          OT = this.cellChunks.get(MT);
        return null === KT ? this.cellChunks.delete(MT) : (null === OT || void 0 === OT ? void 0 : OT.version) === KT ? (OT.seenAt = this.checks, !1) : (this.cellChunks.set(MT, {
          version: KT,
          seenAt: this.checks
        }), !0)
      }
      refresh(TT) {
        const kT = function(TT, kT) {
            const cT = new Set,
              lT = [];
            for (const {
                pos: MT,
                offsets: KT
              }
              of TT)
              for (const [TT, OT, yT] of KT) {
                const KT = MT[0] + TT,
                  fT = MT[1] + OT,
                  xT = MT[2] + yT,
                  IT = `${KT},${fT},${xT}`;
                cT.has(IT) || (cT.add(IT), kT(KT, fT, xT) && lT.push([KT, fT, xT]))
              }
            return lT
          }([...this.chunks.values()].flatMap((TT => TT.machines)), ((kT, cT, lT) => TT.isBlockInLoadedChunk(kT, cT, lT) && 0 === TT.getBlockId(kT, cT, lT))),
          cT = kT.join(";");
        cT !== this.shownKey && (this.shownKey = cT, this.clearMeshes(TT), kT.length > 0 && (this.meshes = [this.build(TT, kT, !1), this.build(TT, kT, !0)]))
      }
      build(TT, kT, cT) {
        const lT = kT[0],
          MT = [],
          KT = [];
        for (const [OT, yT, fT] of kT)(0, NN.c)(MT, KT, [OT - lT[0] + .5, yT - lT[1] + .5, fT - lT[2] + .5], PN, cT);
        return TT.createGameMesh({
          positions: MT,
          indices: KT
        }, {
          rgb: cT ? mN : wN,
          alpha: .4
        }, lT)
      }
      clearMeshes(TT) {
        for (const kT of this.meshes) TT.disposeGameMesh(kT);
        this.meshes = []
      }
    }
    const zN = 1 / .6,
      JN = 200,
      oN = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      HN = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      eN = 2 * Math.PI / 3;
    class GN {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oN;
        this.style = TT, this.particles = null, this.points = new Float32Array(800), this.budget = JN, this.lastMs = 0
      }
      static blade() {
        return new GN(HN)
      }
      yN(TT, kT) {
        const cT = Math.min(kT.arcStruck, kT.arcPoints.length);
        this.draw(TT, [kT.arcFrom, ...kT.arcPoints], kT.arcPoints.slice(0, cT))
      }
      onBlade(TT, kT) {
        const [cT, lT, MT] = kT.bladeCentre, [KT, OT] = kT.bladeFacing, yT = cT - 1.5 * KT, fT = MT - 1.5 * OT, xT = Math.atan2(OT, KT), IT = [];
        for (let AT = 0; AT <= 8; AT++) {
          const TT = xT - eN / 2 + eN * AT / 8;
          IT.push([yT + 2.5 * Math.cos(TT), lT, fT + 2.5 * Math.sin(TT)])
        }
        this.draw(TT, IT, kT.bladeStruck)
      }
      dispose() {
        var TT;
        null === (TT = this.particles) || void 0 === TT || TT.stop(), this.particles = null
      }
      draw(TT, kT, cT) {
        if (!TT.particlesEnabled() || kT.length < 2) return;
        const lT = performance.now();
        this.budget = Math.min(JN, this.budget + (lT - this.lastMs) / 1e3 * JN), this.lastMs = lT;
        const MT = [];
        let KT = 0,
          OT = kT[0];
        for (const NT of kT.slice(1)) {
          const TT = Math.min(48, Math.round(Math.hypot(NT[0] - OT[0], NT[1] - OT[1], NT[2] - OT[2]) * this.style.perBlock));
          MT.push([OT, NT, TT]), KT += TT, OT = NT
        }
        const yT = cT.length;
        KT += 10 * yT;
        const fT = KT > this.budget ? this.budget / KT : 1;
        if (0 === KT || fT * KT < 1) return;
        const xT = kT[0],
          [IT, AT, CT] = xT,
          jT = this.points;
        let vT = 0;
        const tT = (TT, kT, cT, lT) => {
          const MT = 4 * vT;
          jT[MT] = TT - IT, jT[MT + 1] = kT - AT, jT[MT + 2] = cT - CT, jT[MT + 3] = lT, vT++
        };
        MT.forEach(((TT, kT) => {
          let [cT, lT, MT] = TT;
          const KT = Math.min(Math.floor(MT * fT), JN - vT),
            OT = Math.hypot(lT[0] - cT[0], lT[1] - cT[1], lT[2] - cT[2]),
            yT = 0 === kT && OT > 0 ? Math.min(.5, .1 * OT) / OT : 0;
          for (let fT = 0; fT < KT; fT++) {
            const TT = yT + (fT + .5) / KT * (1 - yT);
            tT(cT[0] + (lT[0] - cT[0]) * TT, cT[1] + (lT[1] - cT[1]) * TT, cT[2] + (lT[2] - cT[2]) * TT, .15)
          }
        }));
        const hT = Math.floor(10 * fT);
        for (let NT = 0; NT < yT; NT++) {
          const [TT, kT, lT] = cT[NT];
          for (let cT = 0; cT < hT && vT < JN; cT++) tT(TT, kT, lT, 2.5)
        }
        this.budget -= vT, this.particles ??= TT.createParticles(function(TT) {
          const [kT, cT] = TT.colours;
          return {
            texture: "square_particle",
            DA: 400,
            minLifeTime: TT.life[0] / zN,
            maxLifeTime: TT.life[1] / zN,
            minSize: TT.size[0],
            maxSize: TT.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [kT[0], kT[1], kT[2], 1],
              maxColor: [cT[0], cT[1], cT[2], 1]
            }, {
              timeFraction: 1,
              minColor: [kT[0], kT[1], kT[2], 0],
              maxColor: [cT[0], cT[1], cT[2], 0]
            }],
            blendMode: Vy.f.Add
          }
        }(this.style), {
          pos: xT
        }), this.particles.emitPoints(xT, jT, vT)
      }
    }
    const VN = new Set(["Sky Spring"]);

    function EN(TT, kT, cT) {
      const lT = TT.split("|")[0];
      return "Air" !== kT || cT || ! function(TT) {
        const kT = TT.split("|")[0];
        return void 0 !== yc[kT] || VN.has(kT)
      }(lT) ? null : TT
    }
    class ZN {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(TT) {
        const kT = TT - this.lastTapAt >= 300;
        return this.lastTapAt = TT, kT
      }
    }
    class uN {
      constructor() {
        this.presses = new ZN, this.predicted = null
      }
      tap(TT, kT) {
        const cT = this.presses.isNewPress(kT);
        return cT && (this.predicted = {
          station: TT,
          at: kT
        }), cT
      }
      consumeServerOpen(TT, kT) {
        const cT = this.predicted;
        return !(null === cT || cT.station !== TT || kT - cT.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class XN {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(TT, kT) {
        return TT && (this.thrustAt = kT), kT - this.thrustAt < 200
      }
    }
    const dN = [.1, .05, .1],
      LN = {
        texture: "effect_5",
        DA: Math.ceil(48),
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
        blendMode: Vy.f.OneOne
      };
    class RN {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new XN, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      yN(TT, kT) {
        for (const [cT, lT] of kT.baf2JetFlames) TT.isLocalPlayer(cT) || (lT ? this.lit.add(cT) : this.lit.delete(cT))
      }
      onAfterRender(TT, kT) {
        const cT = performance.now(),
          lT = this.hold.lit(this.selfThrusting(TT, kT), cT);
        for (const [MT, KT] of this.flames)(MT === kT ? lT : this.lit.has(MT)) || this.setEmitting(KT, !1), MT === kT || TT.getPositionView(MT) ? !KT.emitting && cT - KT.offAt >= 1300 && (KT.particles.stop(), this.flames.delete(MT)) : (KT.particles.dispose(), this.flames.delete(MT), this.lit.delete(MT));
        lT && this.draw(TT, kT, kT);
        for (const MT of this.lit) this.draw(TT, kT, MT)
      }
      dispose() {
        for (const TT of this.flames.values()) TT.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(TT, kT) {
        var cT;
        const lT = TT.getLocalPlayerMovement();
        return !!lT && (null !== (MT = {
          option: null !== (cT = TT.getClientOption(kT, "jumpHoldThrust")) && void 0 !== cT ? cT : null,
          jumping: lT.jumpHeld,
          onGround: lT.onGround,
          alive: TT.isAlive(kT)
        }).option && MT.option.maxUpSpeed >= 0 && MT.jumping && !MT.onGround && MT.alive);
        var MT
      }
      draw(TT, kT, cT) {
        var lT, MT;
        const KT = this.pos;
        if (!TT.readDrawnPosition(cT, KT)) return;
        const OT = TT.readDrawnPosition(kT, this.camera) ? this.camera : KT;
        if (!((KT[0] - OT[0]) ** 2 + (KT[1] - OT[1]) ** 2 + (KT[2] - OT[2]) ** 2 < 1600) || !TT.particlesEnabled()) {
          const TT = this.flames.get(cT);
          return void(TT && this.setEmitting(TT, !1))
        }
        const yT = null !== (lT = this.flames.get(cT)) && void 0 !== lT ? lT : this.create(TT, cT, KT),
          fT = null !== (MT = TT.getDrawnHeading(cT)) && void 0 !== MT ? MT : 0,
          xT = this.at;
        xT[0] = KT[0] - .35 * Math.sin(fT), xT[1] = KT[1] + 1.05, xT[2] = KT[2] - .35 * Math.cos(fT), yT.particles.moveTo(xT), this.setEmitting(yT, !0)
      }
      setEmitting(TT, kT) {
        TT.emitting !== kT && (TT.emitting = kT, kT || (TT.offAt = performance.now()), TT.particles.setEmitRate(kT ? 60 : 0))
      }
      create(TT, kT, cT) {
        const lT = {
          particles: TT.createParticles(LN, {
            pos: cT,
            half: dN
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(kT, lT), lT
      }
    }

    function gN(TT) {
      return "Reactor Frame" === Ml("reactor", TT)
    }

    function UN(TT) {
      return Xc("reactor", TT) && !gN(TT) && (TT.startsWith("Reactor Glass") || TT.startsWith("Reactor Port"))
    }
    const YN = "baf2Goal";
    class BN {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [GM.k.subscribe("setDirectionArrow", (TT => {
          let {
            id: kT,
            position: cT
          } = TT;
          kT === YN && (this.goal = cT, this.checkedAt = -1 / 0)
        })), GM.k.subscribe("clearDirectionArrow", (TT => {
          let {
            id: kT
          } = TT;
          null !== kT && kT !== YN || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const TT of this.subs) GM.k.unsubscribe(TT)
      }
      sideOf(TT, kT, cT, lT) {
        const MT = this.goal;
        if (!MT) return 0;
        cT - this.checkedAt > 1e3 && (this.checkedAt = cT, this.open = function(TT, kT) {
          const [cT, lT, MT] = TT.map(Math.floor);
          if (!UN(kT(cT, lT, MT))) return null;
          for (const [KT, OT] of [
              [1, 0],
              [0, 1]
            ]) {
            const TT = kT(cT + KT, lT, MT + OT),
              yT = kT(cT - KT, lT, MT - OT);
            if (gN(yT) && UN(TT)) return [KT, 0, OT];
            if (gN(TT) && UN(yT)) return [0 - KT, 0, 0 - OT]
          }
          return null
        }(MT, ((kT, cT, lT) => TT.blockIdToBlockName(TT.getBlockId(kT, cT, lT)))));
        const KT = this.open;
        if (!KT) return 0;
        const OT = lT(MT);
        if (Math.abs(OT.x - kT.x) > .05 || Math.abs(OT.y - kT.y) > .05) return 0;
        const yT = lT([MT[0] + KT[0], MT[1], MT[2] + KT[2]]).x - OT.x;
        return Math.abs(yT) < .3 ? 0 : yT > 0 ? 1 : -1
      }
    }
    class WN {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new BN, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.yv = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.zN = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((TT => {
          for (const kT of TT) kT.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(kT.target, kT.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.yv || this.clear()
        }, window.addEventListener("resize", this.zN)
      }
      onAfterRender(TT, kT) {
        var cT;
        this.api = TT, this.project = null !== (cT = null === kT || void 0 === kT ? void 0 : kT.projectWorldPosToScreenPos) && void 0 !== cT ? cT : null, this.queued || this.yv || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.yv = !0;
        for (const TT of this.moved.keys()) TT.style.transform = "";
        this.moved.clear();
        for (const TT of this.sideLabels.keys()) TT.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.zN)
      }
      clear() {
        for (const KT of this.moved.keys()) KT.isConnected || this.moved.delete(KT);
        for (const KT of this.sideLabels.keys()) KT.isConnected || this.sideLabels.delete(KT);
        if (0 === this.arrows.length) return;
        const TT = performance.now(),
          kT = TT - this.refreshedAt > 1e3;
        kT && (this.refreshedAt = TT, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const cT = this.trackerBox(),
          lT = this.barsBox(),
          MT = this.toastBox(kT);
        (cT || lT || MT) && kT && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let KT = 0; KT < this.arrows.length; KT++) {
          const kT = this.arrows[KT];
          this.labelOffsets.set(kT, this.runLabelAside(kT, TT));
          const OT = (cT ? this.shiftLeftOf(kT, cT) : 0) || this.shiftOnScreen(kT),
            yT = Math.min(lT ? this.liftAbove(kT, lT, OT) : 0, MT ? this.liftAbove(kT, MT, OT) : 0),
            fT = this.moved.get(kT);
          if (0 !== OT || 0 !== yT) {
            const TT = 0 === yT ? `translateX(${OT}px)` : `translate(${OT}px, ${yT}px)`;
            fT !== TT && (kT.style.transform = TT, this.moved.set(kT, TT))
          } else void 0 !== fT && (kT.style.transform = "", this.moved.delete(kT))
        }
      }
      trackerBox() {
        var TT, kT;
        const cT = null !== (TT = this.tracker) && void 0 !== TT && TT.isConnected ? this.tracker : null !== (kT = this.trackers[0]) && void 0 !== kT ? kT : null;
        if (cT !== this.tracker && this.watch(cT), this.boxStale && cT) {
          var lT, MT, KT;
          this.boxStale = !1;
          const TT = cT.closest(".NoRoom") ? null : cT.getBoundingClientRect(),
            kT = TT && TT.width > 0 ? null === (lT = this.hud) || void 0 === lT ? void 0 : lT.getBoundingClientRect() : void 0,
            OT = TT && kT ? Math.max(TT.top, kT.top) : null !== (MT = null === TT || void 0 === TT ? void 0 : TT.top) && void 0 !== MT ? MT : 0,
            yT = TT && kT ? Math.min(TT.bottom, kT.bottom) : null !== (KT = null === TT || void 0 === TT ? void 0 : TT.bottom) && void 0 !== KT ? KT : 0;
          this.box = TT && TT.width > 0 && yT > OT ? {
            left: TT.left,
            top: OT,
            right: TT.right,
            bottom: yT
          } : null
        }
        return cT ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var TT;
          this.barsStale = !1;
          const kT = null === (TT = this.statBars[0]) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
          this.bars = kT && kT.width > 0 && kT.height > 0 ? {
            left: kT.left,
            top: kT.top,
            right: kT.right,
            bottom: kT.bottom
          } : null
        }
        return this.bars
      }
      toastBox(TT) {
        var kT;
        const cT = null !== (kT = this.toasts[0]) && void 0 !== kT ? kT : null;
        if (cT !== this.toastEl || TT && cT) {
          this.toastEl = cT;
          const TT = null === cT || void 0 === cT ? void 0 : cT.getBoundingClientRect();
          this.toast = TT && TT.width > 0 && TT.height > 0 ? {
            left: TT.left,
            top: TT.top,
            right: TT.right,
            bottom: TT.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(TT, kT, cT) {
        var lT;
        const MT = this.anchorOf(TT);
        if (!MT) return 0;
        const KT = MT.x + cT + (null !== (lT = this.labelOffsets.get(TT)) && void 0 !== lT ? lT : 0),
          {
            halfWidth: OT,
            labelled: yT
          } = this.extentOf(TT),
          fT = MT.y + this.em * (yT ? 6.2 : 3);
        return fT < kT.top - 6 || KT + OT < kT.left - 6 || KT - OT > kT.right + 6 ? 0 : kT.top - 6 - fT
      }
      watch(TT) {
        var kT, cT;
        this.tracker && this.sizes.unobserve(this.tracker), null === (kT = this.hud) || void 0 === kT || kT.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = TT, this.hud = null !== (cT = null === TT || void 0 === TT ? void 0 : TT.closest(".Baf2QuestHud")) && void 0 !== cT ? cT : null, this.box = null, this.boxStale = !0, TT && this.sizes.observe(TT), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(TT, kT) {
        var cT;
        const lT = this.anchorOf(TT);
        if (!lT) return 0;
        const {
          y: MT
        } = lT, KT = lT.x + (null !== (cT = this.labelOffsets.get(TT)) && void 0 !== cT ? cT : 0), OT = this.em, {
          halfWidth: yT,
          labelled: fT
        } = this.extentOf(TT), xT = MT - OT, IT = KT + yT;
        return MT + OT * (fT ? 6.2 : 3) < kT.top || xT > kT.bottom || IT < kT.left - 6 || KT - yT > kT.right ? 0 : Math.max(kT.left - 6 - IT, 6 - (KT - yT))
      }
      shiftOnScreen(TT) {
        var kT;
        const cT = this.anchorOf(TT);
        if (!cT) return 0;
        const {
          halfWidth: lT
        } = this.extentOf(TT), MT = cT.x + (null !== (kT = this.labelOffsets.get(TT)) && void 0 !== kT ? kT : 0), KT = MT + lT - (this.innerWidth - 6);
        return KT > 0 ? -KT : Math.max(0, 6 - (MT - lT))
      }
      runLabelAside(TT, kT) {
        var cT;
        let lT = null;
        for (let OT = 0; OT < TT.children.length; OT++) TT.children[OT].classList.contains("DirectionArrowLabel") && (lT = TT.children[OT]);
        if (!lT) return 0;
        const MT = TT.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(TT) : null,
          KT = (MT && this.api ? this.side.sideOf(this.api, {
            x: MT.x / this.innerWidth * 100,
            y: MT.y / this.innerHeight * 100
          }, kT, this.project) : 0) * this.halfWidthOf(lT);
        return KT !== (null !== (cT = this.sideLabels.get(lT)) && void 0 !== cT ? cT : 0) && (lT.style.transform = 0 === KT ? "" : `translateX(-50%) translateX(${KT}px)`, 0 === KT ? this.sideLabels.delete(lT) : this.sideLabels.set(lT, KT)), KT
      }
      extentOf(TT) {
        let kT = this.em,
          cT = !1;
        for (let lT = 0; lT < TT.children.length; lT++) {
          const MT = TT.children[lT],
            KT = MT.classList.contains("DirectionArrowLabel");
          cT ||= KT, (KT || MT.classList.contains("DirectionArrowDistance")) && (kT = Math.max(kT, this.halfWidthOf(MT)))
        }
        return {
          halfWidth: kT,
          labelled: cT
        }
      }
      halfWidthOf(TT) {
        let kT = this.halfWidths.get(TT);
        return void 0 === kT && (kT = TT.offsetWidth / 2, this.halfWidths.set(TT, kT), this.sizes.observe(TT), this.labels.add(TT)), kT
      }
      forgetGoneLabels() {
        for (const TT of this.labels) TT.isConnected || (this.sizes.unobserve(TT), this.halfWidths.delete(TT), this.labels.delete(TT))
      }
      anchorOf(TT) {
        const kT = TT.style.translate,
          cT = this.anchors.get(TT);
        if (cT && cT.translate === kT && cT.innerWidth === this.innerWidth && cT.innerHeight === this.innerHeight) return cT;
        const lT = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(kT);
        if (!lT) return null;
        const MT = {
          translate: kT,
          x: parseFloat(lT[1]) / 100 * this.innerWidth,
          y: parseFloat(lT[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(TT, MT), MT
      }
    }
    const nN = "Baf2ArrowText";

    function pN(TT, kT) {
      const cT = TT.rows.find((TT => TT.current));
      return eT(TT.tutorial) && null !== cT && void 0 !== cT && cT.item && UM(cT) && zT(cT.item).includes(kT) ? cT.item : null
    }
    const iN = new class {
      constructor(TT) {
        this.select = TT, this.picks = new Map
      }
      open(TT, kT, cT) {
        const lT = pN(kT, TT);
        null !== lT && this.gC(TT, lT, cT)
      }
      follow(TT, kT) {
        if (yT())
          for (const [cT, {
              item: lT,
              had: MT
            }] of this.picks) {
            const KT = pN(TT, cT);
            KT !== lT && (null !== KT && kT(lT) > MT ? this.gC(cT, KT, kT) : this.picks.delete(cT))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      gC(TT, kT, cT) {
        this.picks.set(TT, {
          item: kT,
          had: cT(kT)
        }), this.select(TT, kT)
      }
    }(VM.q);

    function qN(TT) {
      return kT => {
        let cT = 0;
        for (const lT of TT.getInventoryItems())(null === lT || void 0 === lT ? void 0 : lT.name) === kT && (cT += null === lT.amount ? 1 : Math.max(lT.amount, 0));
        return cT
      }
    }

    function sN(TT, kT, cT, lT) {
      TT.getClientOption(kT, "canCraft") && "inventory" !== DM.e.get("openInGameMenuName") && (iN.open(cT, lT.get(), qN(TT)), GM.k.nt("toggleMenu", `inventory|${cT}`))
    }
    let TQ = null,
      kQ = !1;

    function cQ(TT) {
      const kT = rK();
      TT === TQ && kT === kQ || (TQ = TT, kQ = kT, (0, VM.s)(function(TT, kT) {
        const cT = new Map;
        for (let lT = TT + 1; lT <= MT.length; lT++) {
          const MT = YK(lT, TT, kT);
          if (MT)
            for (const kT of NT(lT).unlocks) cT.set(kT, {
              ...MT,
              stepsAway: lT - TT
            })
        }
        return cT
      }(TT, kT)))
    }

    function lQ() {
      return (0, VM.x)(UK(Object.keys(bT), XK)), () => {
        (0, VM.x)([])
      }
    }
    const MQ = "buildAFactory2Game:",
      KQ = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      OQ = {
        on: `${MQ}tutorialButtonOn`,
        hud: `${MQ}tutorialButtonHud`,
        off: `${MQ}tutorialButtonOff`
      },
      yQ = {
        on: `${MQ}tutorialPickedOn`,
        hud: `${MQ}tutorialPickedHud`,
        off: `${MQ}tutorialPickedOff`
      };

    function fQ(TT, kT, cT) {
      let lT = null,
        MT = () => {};
      const KT = KT => {
        var OT;
        let {
          tutorial: yT,
          tutorialKnown: fT
        } = KT;
        (null === (OT = lT) || void 0 === OT ? void 0 : OT.tutorial) === yT && lT.tutorialKnown === fT || (lT = {
          tutorial: yT,
          tutorialKnown: fT
        }, MT = (0, QM.w)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: OQ[yT],
          icon: {
            kind: "icon",
            name: KQ[yT]
          },
          iconOnly: !0,
          disabled: !fT,
          className: "Baf2TutorialButton",
          onClick: () => {
            var lT;
            (lT => {
              const MT = kT.setTutorial(lT);
              TT.send(`baf2tutorial ${lT} ${MT}`), cT.show({
                baf2ToastText: [(0, GT.$d)({
                  translationKey: yQ[lT]
                }, GT.H.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((lT = kT.get().tutorial, HT[(HT.indexOf(lT) + 1) % HT.length]))
          }
        }))
      };
      KT(kT.get());
      const OT = GM.k.subscribe(EM, KT);
      return () => {
        GM.k.unsubscribe(OT), MT()
      }
    }

    function xQ(TT, kT, cT) {
      var lT, MT;
      const KT = TT.getTargetedBlock();
      if (!KT || ! function(TT, kT, cT) {
          if ("Chest" !== kT) return !1;
          const lT = TT.split("|")[0];
          if (!Ic(lT) || 0 === Vk[lT].outputSlots.length) return !1;
          const MT = ah(TT);
          return cT[0] === MT[0] && cT[1] === MT[1] && cT[2] === MT[2]
        }(cT, null === (lT = TT.ckT(kT)) || void 0 === lT ? void 0 : lT.name, KT.normal)) return !1;
      const [OT, yT, fT] = KT.Wt, xT = TT.getBlockId(OT, yT, fT);
      return 0 === xT || !0 === (null === (MT = oT.i[xT]) || void 0 === MT ? void 0 : MT.canBePlacedOver)
    }
    var IQ = cT(36580);
    const AQ = new Set(hc.e);
    class CQ {
      constructor(TT) {
        this.toasts = TT, this.lastAt = -1 / 0
      }
      onAltAction(TT, kT, cT) {
        const lT = TT.getTargetedBlock();
        if (!lT || function(TT) {
            const kT = TT.split("|")[0];
            return Ic(kT) || null !== Pl(kT) || wT(kT) || hc.e.includes(kT)
          }(cT) && !AQ.has(cT.split("|")[0])) return;
        const MT = TT.ckT(kT);
        if (!MT || !AQ.has(MT.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const KT = MT.typeObj.id,
          [OT, yT, fT] = lT.Wt,
          xT = TT.getBlockId(OT, yT, fT),
          IT = oT.i[xT];
        (0 === xT || null !== IT && void 0 !== IT && IT.lj || null !== IT && void 0 !== IT && IT.canBePlacedOver) && TT.isSolidToPlayerBlockId(KT) && TT.canModifyBlockAt(OT, yT, fT) && TT.aTT(OT, yT, fT, KT) && !TT.aTT(OT, yT, fT, KT, kT) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, GT.$d)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, GT.H.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class jQ {
      constructor(TT) {
        this.show = TT, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(TT, kT, cT) {
        var lT;
        if (!kT) return this.started = null, void this.gatedThisHold.clear();
        if (!TT) return void(this.started = null);
        const MT = `${TT.x},${TT.y},${TT.z},${TT.ty}`;
        if (MT === this.started) return;
        this.started = MT;
        const KT = ul(TT.y) ? lN(TT.block, TT.ty, TT.level) : null;
        if (null === KT || this.gatedThisHold.has(MT)) return;
        this.gatedThisHold.add(MT);
        const OT = TT.block.split("|")[0];
        cT - (null !== (lT = this.hintedAt.get(OT)) && void 0 !== lT ? lT : -1 / 0) < 5e3 || (this.hintedAt.set(OT, cT), this.show({
          baf2ToastText: MN(KT, TT.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var vQ = cT(47);

    function tQ(TT, kT) {
      const cT = [...TT.baf2CoreBankPaused];
      for (const [MT] of TT.baf2CoreBanked) cT.push(MT);
      for (const OT of MT) {
        for (const {
            item: TT
          }
          of OT.cost) cT.push(TT);
        for (const TT of OT.newDeposits) cT.push(TT.block);
        for (const TT of OT.unlocks) cT.push(TT, JT(TT));
        OT.reward && cT.push(OT.reward);
        for (const {
            item: TT
          }
          of null !== (lT = null === (KT = OT.charge) || void 0 === KT ? void 0 : KT.items) && void 0 !== lT ? lT : []) {
          var lT, KT;
          cT.push(TT)
        }
      }
      return {
        message: TT,
        itemNames: kT([...new Set(cT)])
      }
    }
    const hQ = "baf2MultiblockGuide";
    const NQ = new Map;
    const QQ = function(TT, kT, cT, MT) {
      let {
        localPlayerId: KT
      } = MT;
      const OT = new hy,
        yT = new kj,
        xT = new fj,
        IT = new Oj(xT),
        AT = (TT, kT) => {
          kT ? IT.observe(TT) : IT.unobserve(TT)
        },
        CT = new Kj,
        jT = new Cj(AT),
        vT = TT => jT.covers(TT),
        tT = new Hj;
      let hT;
      const NT = new XO((TT => {
          hT.sendCommand(TT)
        })),
        QT = () => {
          NT.send("baf2questbook")
        },
        ST = TT => function(TT, kT, cT) {
          const lT = {};
          for (const MT of cT) {
            let cT = NQ.get(MT);
            void 0 === cT && (cT = TT.getItemStat(kT, MT, "displayName"), NQ.set(MT, cT)), lT[MT] = cT
          }
          return lT
        }(hT, KT, TT),
        DT = new XM(QT),
        aT = new gj((() => DM.e.get("loadingOverlayVisible"))),
        FT = new nj,
        rT = new CQ(aT),
        PT = new jQ((TT => {
          aT.show(TT, TT.baf2ToastMs)
        })),
        mT = new Mv(AT),
        bT = new oh(mT),
        zT = new PO,
        JT = new TN,
        HT = new cy,
        eT = new Av({
          read: () => !1 !== vQ.e.getItem(hQ),
          write: TT => {
            vQ.e.setItem(hQ, TT)
          }
        }),
        ET = new uv(eT),
        ZT = new Lv(eT),
        uT = new xt(eT, (TT => function(TT, kT) {
          const cT = sy(kT.w, kT.h, kT.d),
            lT = new Uint8Array(cT);
          for (let MT = 0; MT < cT; MT++) {
            const cT = ev(TT, sc(kT, ll(kT, MT)));
            lT[MT] = null === cT ? 0 : ny(cT)
          }
          return lT
        }(hT, TT)), Tt(NT)),
        XT = new It(eT, Tt(NT)),
        dT = new yt,
        LT = (TT, kT) => {
          let [cT, lT, MT] = TT;
          dT.answered(kT) || aT.show({
            baf2ToastText: [(0, GT.$d)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: cT,
                h: lT,
                d: MT
              }
            }, GT.H.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      uT.onSizeNotTaken(LT), XT.onSizeNotTaken(LT);
      const UT = new vt,
        YT = new nt(eT),
        BT = new it,
        nT = new fh(BT),
        pT = new Sh,
        iT = new Hh,
        sT = new Rh(iT),
        Tk = new sh(iT),
        kk = iT.lookSource(),
        ck = new vN({
          handles: TT => kk.handles(TT) || TT === VT,
          line: (TT, kT) => TT === VT ? function(TT, kT, cT) {
            var lT;
            const MT = gT(null === (lT = kT.at(cT)) || void 0 === lT ? void 0 : lT.item);
            return null === MT ? {
              key: `${AN}lookFarmEmpty`
            } : {
              key: TT.blockIdToBlockName(TT.getBlockId(cT[0], cT[1], cT[2])).endsWith("|Running") ? `${AN}lookFarmRunning` : `${AN}lookFarmWaiting`,
              keys: {
                mob: RT(MT)
              }
            }
          }(hT, mT, kT) : kk.line(TT, kT),
          version: () => kk.version() + mT.version()
        }, (TT => gv(eT.all(), TT, (TT => ev(hT, TT)))), (() => DT.get().tier)),
        lk = new et,
        Mk = new bN,
        Kk = new GN,
        Ok = GN.blade(),
        yk = new RN,
        fk = new qj,
        xk = new WN,
        Ik = new uN,
        Ck = new ZN;
      let jk = -1 / 0,
        vk = 0,
        tk = -1 / 0,
        hk = -1 / 0;
      const Nk = () => {
          NT.send("baf2islandsclose"), hk = Date.now()
        },
        Qk = [];

      function Sk(TT) {
        var kT, cT, lT, MT, KT, OT, fT;
        "core" === (null === (kT = yT.get()) || void 0 === kT ? void 0 : kT.kind) && "core" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && NT.send("baf2coreclose"), "power" === (null === (cT = yT.get()) || void 0 === cT ? void 0 : cT.kind) && "power" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && NT.send("baf2powerclose"), "water" === (null === (lT = yT.get()) || void 0 === lT ? void 0 : lT.kind) && "water" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && NT.send(qT.t), "terminal" === (null === (MT = yT.get()) || void 0 === MT ? void 0 : MT.kind) && "terminal" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && NT.send("baf2terminalclose"), "islands" === (null === (KT = yT.get()) || void 0 === KT ? void 0 : KT.kind) && "islands" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && Nk();
        const xT = iT.getStatus();
        "collider" === (null === (OT = yT.get()) || void 0 === OT ? void 0 : OT.kind) && "collider" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && xT && NT.send(Zf(xT, "close"));
        const IT = TT => "reactor" === TT || "battery" === TT;
        if (IT(null === (fT = yT.get()) || void 0 === fT ? void 0 : fT.kind) && !IT(null === TT || void 0 === TT ? void 0 : TT.kind)) {
          var AT, CT, jT;
          const TT = "reactor" === (null === (AT = yT.get()) || void 0 === AT ? void 0 : AT.kind) ? null === (CT = uT.get()) || void 0 === CT ? void 0 : CT.status.baf2RxAt : null === (jT = XT.get()) || void 0 === jT ? void 0 : jT.status.baf2BatAt;
          TT && NT.send(Ak(TT, "close"))
        }
        "quests" === (null === TT || void 0 === TT ? void 0 : TT.kind) && QT(), yT.set(TT), null === TT && FT.release()
      }

      function Dk() {
        (0, SM.d)(), Sk(null)
      }
      let ak = new Set,
        Fk = !1;
      const rk = {
        onCreate: TT => {
          hT = TT, hT.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const kT of bk) {
            const TT = Vk[kT].inputSlots ? Hy(OT) : zy(kT, OT, zT, NT);
            Qk.push((0, NM.e)(kT, TT))
          }
          Qk.push((0, SM.q)((0, lT.createElement)(lT.Fragment, null, (0, lT.createElement)(tj, {
            controller: jT
          }), (0, lT.createElement)(yv, {
            store: mT
          }), (0, lT.createElement)(hN, {
            store: ck
          }), (0, lT.createElement)(Lj, {
            store: DT
          }), (0, lT.createElement)(Bj, {
            store: aT
          }), (0, lT.createElement)(pj, {
            store: FT
          }), (0, lT.createElement)(Tv, {
            store: fk
          }), (0, lT.createElement)(jt, {
            store: UT
          }), (0, lT.createElement)(qt, {
            store: BT
          })), {
            content: (0, lT.createElement)(cj, {
              commands: NT,
              store: yT,
              power: zT,
              water: HT,
              reactor: uT,
              battery: XT,
              collider: iT,
              terminal: JT,
              quests: DT,
              close: SM.f,
              leave: () => {
                FT.dropHeld(), (0, SM.d)()
              },
              askIslands: () => {
                hk = -1 / 0, jk = Date.now(), vk = NT.send(WT)
              },
              openSocial: () => {
                (0, SM.d)(), DM.e.set({
                  openEverythingMenuName: Cc.o.SOCIAL
                })
              },
              showCore: TT => {
                Sk({
                  kind: "core",
                  core: TT
                }), NT.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Sk(null)
            }
          })), Qk.push((0, QM.w)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Sk({
                kind: "quests"
              }), (0, SM.m)()
            }
          })), Qk.push(fQ(NT, DT, aT)), Fk = !1, Qk.push(PK((() => {
            null !== TQ && cQ(TQ)
          }))), Qk.push(lQ()), Qk.push(function() {
            const TT = GM.k.subscribe(EM, sM),
              kT = () => {
                if (qM) {
                  const TT = qM;
                  qM = null, (0, VM.w)(TT)
                }
              },
              cT = GM.k.subscribe("toggleMenu", (TT => {
                "inventory" === (null === TT || void 0 === TT ? void 0 : TT.split("|")[0]) && kT()
              })),
              lT = GM.k.subscribe("appManagerUpdated|openInGameMenuName", (TT => {
                "inventory" === TT && kT()
              }));
            return () => {
              GM.k.unsubscribe(TT), GM.k.unsubscribe(cT), GM.k.unsubscribe(lT)
            }
          }()), Qk.push(function(TT) {
            const kT = qN(TT),
              cT = GM.k.subscribe(EM, (TT => {
                iN.follow(TT, kT)
              }));
            return () => {
              GM.k.unsubscribe(cT), iN.clear()
            }
          }(hT)), Qk.push(function() {
            const TT = document.documentElement,
              kT = (0, Gj.b)(".InvenBodyRight", [], (() => {
                const kT = document.querySelector(".InvenBodyRight");
                kT && TT.style.setProperty("--baf2-backpack-width", `${kT.offsetWidth}px`)
              }));
            return () => {
              kT(), TT.style.removeProperty("--baf2-backpack-width")
            }
          }()), Qk.push(function() {
            const TT = document.documentElement;
            return TT.classList.add(nN), () => {
              TT.classList.remove(nN)
            }
          }()), Qk.push((() => {
            IT.dispose(), xT.dispose()
          })), tT.start(hT), Qk.push((() => {
            tT.dispose(), yk.dispose(), bT.dispose()
          }))
        },
        onClose: () => {
          (0, VM.w)([]), qM = null, iM = new Set, TQ = null, (0, VM.s)(new Map), NQ.clear();
          for (const TT of Qk) TT();
          DT.dispose(), ck.dispose(), aT.dispose(), FT.dispose(), lk.dispose(), Mk.dispose(hT), ET.dispose(hT), ZT.dispose(hT), YT.dispose(hT), nT.dispose(hT), BT.dispose(), pT.dispose(), eT.dispose(), uT.dispose(), XT.dispose(), UT.dispose(), Kk.dispose(), Ok.dispose(), fk.dispose(), sT.dispose(hT), Tk.dispose(hT), iT.dispose(), xk.dispose(), NT.clear()
        },
        onAfterRender: (TT, kT) => {
          var cT, lT, MT;
          try {
            tT.onAfterRender(kT)
          } catch (xT) {
            console.error("Error drawing BAF2 belt items", xT)
          }
          try {
            yk.onAfterRender(hT, KT)
          } catch (xT) {
            console.error("Error drawing BAF2 jet flames", xT)
          }
          Fk || (Fk = !0, NT.send("baf2clientready"));
          const OT = hT.getPositionView(KT);
          jT.onAfterRender(kT, OT, CT), mT.onAfterRender(kT, OT, CT, vT), IT.run(CT), lk.onAfterRender(hT, OT), Mk.onAfterRender(hT, OT), bT.onAfterRender(hT, OT), ET.onAfterRender(hT, OT), ZT.onAfterRender(hT, KT, OT), YT.onAfterRender(hT, KT, OT), nT.onAfterRender(hT, KT), pT.onAfterRender(hT, OT), DT.onPlayerY(OT[1]), sT.onAfterRender(hT), Tk.onAfterRender(hT, KT, OT);
          const fT = hT.getTargetedBlock();
          ck.onAfterRender(hT, KT, null !== (cT = null === fT || void 0 === fT ? void 0 : fT.JB) && void 0 !== cT ? cT : 0, null !== (lT = null === fT || void 0 === fT ? void 0 : fT.position) && void 0 !== lT ? lT : null), xk.onAfterRender(hT, kT), PT.onMining(function(TT, kT) {
            var cT, lT;
            const MT = TT.getMiningBlock();
            if (!MT) return null;
            const KT = (0, oT.g)(TT.getBlockId(MT[0], MT[1], MT[2])),
              OT = null !== (cT = null === (lT = TT.ckT(kT)) || void 0 === lT ? void 0 : lT.name) && void 0 !== cT ? cT : null,
              yT = TT.getItemStat(kT, KT.split("|")[0], "harvestLevel");
            return {
              block: KT,
              x: MT[0],
              y: MT[1],
              z: MT[2],
              ty: OT,
              level: yT
            }
          }(hT, KT), hT.isMining(), performance.now()), "dropMap" === (null === (MT = yT.get()) || void 0 === MT ? void 0 : MT.kind) && ul(OT[1]) && Dk()
        },
        onPlayerChangeBlock: (TT, kT, cT, lT, MT, OT) => {
          TT === KT && function(TT, kT, cT, lT, MT, KT, OT) {
            const yT = EN(KT, OT, TT.isPlayerCrouching(kT));
            if (null === yT) return;
            if (TT.Qm(cT, lT, MT, yT), !TT.getClientOption(kT, "canPickUpItems")) return;
            const fT = yc[yT.split("|")[0]];
            var xT, IT, AT;
            void 0 !== fT && (xT = TT.getInventoryItems(), IT = fT, AT = Cv.f.maxItemStackSize, TT.getInventoryFreeSlotCount(kT) > 0 || xT.some((TT => null !== TT && TT.name === IT && null !== TT.amount && TT.amount < AT))) && TT.playSound(kT, (0, IQ.h)("pickUp"), .5, 1)
          }(hT, TT, kT, cT, lT, MT, OT)
        },
        onPlayerAltAction: (TT, kT, cT, lT, MT) => {
          var OT, yT;
          if (!hT.getClientOption(KT, "canPickUpItems")) return;
          const fT = null !== (OT = null === (yT = hT.ckT(KT)) || void 0 === yT ? void 0 : yT.name) && void 0 !== OT ? OT : null,
            xT = function(TT, kT) {
              const cT = TT.split("|")[0];
              return wT(cT) && kT !== fM && "Sky Pack" !== kT ? cT : null
            }(MT, fT);
          if (null !== xT) return void(Ik.tap(xT, performance.now()) && sN(hT, KT, xT, DT));
          if (!Rl(fT)) return;
          const IT = Ck.isNewPress(performance.now()),
            AT = function(TT, kT, cT) {
              return !Rl(kT) || cT ? null : ql(TT)
            }(MT, fT, hT.isPlayerCrouching(KT));
          null !== AT && IT && hT.Qm(kT, cT, lT, AT)
        },
        onPlayerAttemptAltAction: (TT, kT, cT, lT, MT) => {
          if (function(TT, kT, cT, lT, MT) {
              "Workbench" === lT.split("|")[0] && TT.getClientOption(cT, "canCraft") && (iN.open("Workbench", MT.get(), qN(TT)), kT.send("baf2station Workbench"))
            }(hT, NT, KT, MT, DT), xQ(hT, KT, MT)) return "preventAction";
          rT.onAltAction(hT, KT, MT)
        },
        onReceivedMessageFromServer: (TT, kT) => {
          if ("baf2MachineStatus" === TT) {
            var cT, lT, MT, xT, IT, AT, CT, vT, QT, rT, PT, wT, bT, oT, GT, VT;
            const TT = kT,
              KT = TT.baf2MachineTaught;
            OT.set(TT.baf2MachinePos, {
              status: TT.baf2MachineStatus,
              power: null !== (cT = TT.baf2MachinePower) && void 0 !== cT ? cT : null,
              opLeftMs: null !== (lT = TT.baf2MachineOpLeftMs) && void 0 !== lT ? lT : null,
              dug: TT.baf2MachineYield ? {
                item: TT.baf2MachineYield,
                name: ST([TT.baf2MachineYield])[TT.baf2MachineYield]
              } : null,
              powerCap: null !== (MT = TT.baf2MachinePowerCap) && void 0 !== MT ? MT : null,
              powerRates: null !== (xT = TT.baf2MachinePowerRates) && void 0 !== xT ? xT : null,
              coupled: !0 === TT.baf2MachineCoupled,
              couplerLevel: null !== (IT = TT.baf2MachineCoupler) && void 0 !== IT ? IT : 1,
              taught: KT,
              taughtName: KT ? ST([KT])[KT] : null,
              tier: null !== (AT = TT.baf2MachineTier) && void 0 !== AT ? AT : null,
              input: null !== (CT = TT.baf2MachineInput) && void 0 !== CT ? CT : null,
              inertCoupler: null !== (vT = TT.baf2MachineInertCoupler) && void 0 !== vT ? vT : null,
              inputShort: null !== (QT = TT.baf2MachineInputShort) && void 0 !== QT ? QT : null,
              field: null !== (rT = TT.baf2MachineField) && void 0 !== rT ? rT : null,
              noSeeds: !0 === TT.baf2MachineNoSeeds,
              fuelFed: !0 === TT.baf2MachineFuelFed,
              fuelFeeds: !0 === TT.baf2MachineFuelFeeds,
              coreFull: !0 === TT.baf2MachineCoreFull,
              waterUnpowered: !0 === TT.baf2MachineWaterUnpowered,
              powerShort: !0 === TT.baf2MachinePowerShort,
              powerWait: !0 === TT.baf2MachinePowerWait,
              reactorPowered: !0 === TT.baf2MachineReactorPowered,
              fuelLeftMs: null !== (PT = TT.baf2MachineFuelLeftMs) && void 0 !== PT ? PT : null,
              burning: null !== (wT = TT.baf2MachineBurning) && void 0 !== wT ? wT : null,
              fuelKeep: null !== (bT = TT.baf2MachineFuelKeep) && void 0 !== bT ? bT : null,
              water: null !== (oT = TT.baf2MachineWater) && void 0 !== oT ? oT : null,
              farm: null !== (GT = TT.baf2MachineFarm) && void 0 !== GT ? GT : null,
              cryo: null !== (VT = TT.baf2MachineCryo) && void 0 !== VT ? VT : null
            })
          } else if ("baf2StationOpen" === TT) {
            const TT = kT.baf2Station;
            Ik.consumeServerOpen(TT, performance.now()) || sN(hT, KT, TT, DT)
          } else if ("baf2Power" === TT) {
            const TT = kT;
            zT.set(TT), TT.baf2PowerOpen && (Sk({
              kind: "power"
            }), (0, SM.m)())
          } else if (TT === qT.y) {
            const TT = kT;
            HT.set(TT), TT.baf2WaterOpen && (Sk({
              kind: "water"
            }), (0, SM.m)())
          } else if ("baf2RxPlans" === TT) {
            var ET, ZT, LT;
            const TT = kT;
            eT.yN(TT);
            const cT = new Set(TT.baf2RxPlanList.map((TT => {
              let [kT, cT, lT] = TT;
              return `${kT},${cT},${lT}`
            })));
            UT.retain(cT);
            const lT = null === (ET = yT.get()) || void 0 === ET ? void 0 : ET.kind,
              MT = "reactor" === lT ? null === (ZT = uT.get()) || void 0 === ZT ? void 0 : ZT.status.baf2RxAt : "battery" === lT ? null === (LT = XT.get()) || void 0 === LT ? void 0 : LT.status.baf2BatAt : void 0;
            MT && ak.has(MT.join(",")) && !cT.has(MT.join(",")) && Dk(), ak = cT
          } else if ("baf2RxStatus" === TT) {
            const TT = kT;
            uT.set(TT), TT.baf2RxOpen && (Sk({
              kind: "reactor"
            }), (0, SM.m)())
          } else if ("baf2BatStatus" === TT) {
            const TT = kT;
            XT.set(TT), TT.baf2BatOpen && (Sk({
              kind: "battery"
            }), (0, SM.m)())
          } else if ("baf2RxAlarm" === TT) UT.yN(kT);
          else if ("baf2Bomb" === TT) BT.yN(kT, hT.getPositionView(KT));
          else if ("baf2Fallout" === TT) pT.yN(kT);
          else if ("baf2ColBeams" === TT) iT.onBeams(kT);
          else if ("baf2ColStatus" === TT) {
            const TT = kT;
            var RT, gT;
            if (iT.onStatus(TT), TT.baf2ColOpen) iT.onOpen(null !== (RT = null === (gT = hT.ckT(KT)) || void 0 === gT ? void 0 : gT.name) && void 0 !== RT ? RT : null), Sk({
              kind: "collider"
            }), (0, SM.m)()
          } else if ("baf2Terminal" === TT) {
            const TT = kT;
            var YT;
            if (JT.apply(TT)) TT.baf2TermReset && (Sk({
              kind: "terminal"
            }), (0, SM.m)());
            else "terminal" === (null === (YT = yT.get()) || void 0 === YT ? void 0 : YT.kind) && (yT.set(null), (0, SM.d)())
          } else if ("baf2Core" === TT) {
            var nT;
            const TT = kT;
            if (fT(!0 === TT.baf2CoreNuclear), function(TT, kT) {
                return "core" === (null === TT || void 0 === TT ? void 0 : TT.kind) && kT.baf2CoreTier > TT.core.message.baf2CoreTier
              }(yT.get(), TT)) return void(0, SM.d)();
            if (TT.baf2CoreRefresh && "core" !== (null === (nT = yT.get()) || void 0 === nT ? void 0 : nT.kind)) return;
            Sk({
              kind: "core",
              core: tQ(TT, ST)
            }), TT.baf2CoreRefresh || (0, SM.m)()
          } else if ("baf2WrenchUndo" === TT) {
            const {
              baf2WrenchPos: TT,
              baf2WrenchBlock: cT
            } = kT;
            hT.Qm(TT[0], TT[1], TT[2], cT)
          } else if ("baf2Toast" === TT) {
            const TT = kT;
            dT.heard(performance.now(), TT.baf2ToastMs), aT.show(TT)
          } else if ("baf2Area" === TT) FT.arrive(kT, null !== yT.get());
          else if ("baf2Quest" === TT) {
            const TT = kT;
            fT(!0 === TT.baf2QuestNuclear), DT.set(TT, function(TT, kT) {
              var cT, lT, MT, KT, OT;
              const yT = [];
              for (const [, , IT, , , , , , AT, CT] of TT.baf2QuestSteps) null !== IT && yT.push(IT), yT.push(...null !== AT && void 0 !== AT ? AT : [], ...null !== CT && void 0 !== CT ? CT : []);
              TT.baf2QuestReward && yT.push(TT.baf2QuestReward);
              const fT = null === (cT = TT.baf2QuestSide) || void 0 === cT ? void 0 : cT[2][2];
              fT && yT.push(fT), yT.push(...null !== (lT = null === (MT = TT.baf2QuestSide) || void 0 === MT ? void 0 : MT[2][8]) && void 0 !== lT ? lT : [], ...null !== (KT = null === (OT = TT.baf2QuestSide) || void 0 === OT ? void 0 : OT[2][9]) && void 0 !== KT ? KT : []);
              for (const [IT] of null !== (xT = TT.baf2QuestAlso) && void 0 !== xT ? xT : []) {
                var xT;
                yT.push(IT)
              }
              return kT(yT)
            }(TT, ST)), cQ(TT.baf2QuestTier)
          } else if ("baf2Route" === TT) ! function(TT, kT) {
            let {
              baf2RouteCells: cT,
              baf2RouteInto: lT
            } = kT;
            0 !== cT.length && lT ? TT.setRouteChevrons({
              cells: cT.map(((TT, kT) => {
                const [MT, , KT] = function(TT, kT, cT) {
                  const lT = cT + 1 < TT.length ? TT[cT + 1] : kT;
                  return [lT[0] - TT[cT][0], 0, lT[2] - TT[cT][2]]
                }(cT, lT, kT);
                return {
                  pos: TT,
                  way: [MT, KT]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : TT.setRouteChevrons(null)
          }(hT, kT);
          else if ("baf2QuestBook" === TT) DT.setBook(kT);
          else if ("baf2Stalls" === TT) jT.set(kT.baf2StallCells);
          else if (TT === hc.o) tT.onMoves(kT);
          else if (TT === hc.j) tT.onLines(kT);
          else if ("baf2Labels" === TT) mT.yN(kT);
          else if ("baf2DropMap" === TT) Sk({
            kind: "dropMap",
            dropMap: kT
          }), (0, SM.m)();
          else if ("baf2Islands" === TT) {
            var sT, Tk;
            const TT = kT;
            if (NT.syncIslandEdits(TT.baf2IslandsAnswered), !TT.baf2IslandsOpen && "islands" !== (null === (sT = yT.get()) || void 0 === sT ? void 0 : sT.kind)) return;
            if (TT.baf2IslandsOpen) {
              var kk, ck;
              const kT = DM.e.get("openEverythingMenuName"),
                cT = NT.sent() >= vk,
                lT = "other" !== (Qk = {
                  askedAtMs: jk,
                  askSent: cT,
                  reaskedAtMs: tk,
                  nowMs: Date.now(),
                  panel: null !== (kk = null === (ck = yT.get()) || void 0 === ck ? void 0 : ck.kind) && void 0 !== kk ? kk : null,
                  inGameMenu: DM.e.get("openInGameMenuName"),
                  everythingMenu: null === kT ? null : kT === Cc.o.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== TT.baf2IslandsFocusInvite
                }).everythingMenu && (!!Qk.focusInvite || "islands" === Qk.panel && "clientGame" === Qk.inGameMenu || !(Qk.nowMs - Qk.reaskedAtMs < Gx) && (Qk.askSent && Qk.nowMs - Qk.askedAtMs < Gx ? "core" === Qk.panel && "clientGame" === Qk.inGameMenu && null === Qk.everythingMenu : "shop" === Qk.everythingMenu || null === Qk.inGameMenu));
              if (cT && (jk = -1 / 0), tk = -1 / 0, !lT) return void Nk()
            }
            const cT = (Mk = TT.baf2IslandsOpen, xk = "islands" === (null === (Tk = yT.get()) || void 0 === Tk ? void 0 : Tk.kind), Ak = hk, Ck = Date.now(), Mk && !xk && Ck - Ak < Gx);
            Sk({
              kind: "islands",
              islands: TT,
              arrivedAtMs: Date.now(),
              backToCore: Vx(yT.get())
            }), cT && (hk = -1 / 0, tk = Date.now(), NT.send(WT)), TT.baf2IslandsOpen && ("clientGame" !== DM.e.get("openInGameMenuName") && (0, aM.f)(), (0, SM.m)())
          } else if ("baf2CoopTransfer" === TT) {
            var lk;
            const TT = kT;
            TT.baf2TransferOn ? (Sk({
              kind: "transfer",
              transfer: TT,
              arrivedAtMs: Date.now()
            }), (0, SM.m)()) : "transfer" === (null === (lk = yT.get()) || void 0 === lk ? void 0 : lk.kind) && (0, SM.d)()
          } else "baf2IslandLeft" === TT ? (FT.dropHeld(), null !== yT.get() && Dk(), "inventory" === DM.e.get("openInGameMenuName") && (0, aM.f)()) : "baf2Arc" === TT ? Kk.yN(hT, kT) : "baf2Blade" === TT ? Ok.onBlade(hT, kT) : "baf2JetFlame" === TT ? yk.yN(hT, kT) : "baf2GearPower" === TT && fk.yN(kT);
          var Mk, xk, Ak, Ck, Qk
        }
      };
      return rk
    }
  },
  38359: (TT, kT, cT) => {
    function lT(TT, kT, cT) {
      const lT = new Set,
        MT = new ResizeObserver(cT),
        KT = () => {
          const kT = new Set(document.querySelectorAll(TT));
          let KT = !1;
          for (const TT of lT) kT.has(TT) || (MT.unobserve(TT), lT.delete(TT), KT = !0);
          for (const TT of kT) lT.has(TT) || (MT.observe(TT), OT.observe(TT, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), lT.add(TT));
          KT && cT()
        },
        OT = new MutationObserver((kT => {
          kT.some((TT => "attributes" === TT.type)) && cT(), kT.some((kT => function(TT, kT, cT) {
            if ("childList" !== TT.type) return !1;
            for (const lT of TT.addedNodes)
              if (lT instanceof Element && (lT.matches(kT) || lT.querySelector(kT))) return !0;
            for (const lT of TT.removedNodes)
              if (lT instanceof Element)
                for (const TT of cT)
                  if (lT.contains(TT)) return !0;
            return !1
          }(kT, TT, lT))) && KT()
        }));
      OT.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const yT of kT) MT.observe(yT);
      return window.addEventListener("resize", cT), KT(), cT(), () => {
        MT.disconnect(), OT.disconnect(), window.removeEventListener("resize", cT)
      }
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  38332: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      g: () => KT
    });
    const lT = new WeakMap;

    function MT(TT) {
      let kT = lT.get(TT);
      return kT || (kT = {
        hidden: TT.hidden,
        x: NaN,
        y: NaN
      }, lT.set(TT, kT)), kT
    }

    function KT(TT, kT) {
      const cT = MT(TT);
      cT.hidden !== kT && (cT.hidden = kT, TT.hidden = kT)
    }

    function OT(TT, kT, cT) {
      const lT = MT(TT);
      lT.x === kT && lT.y === cT || (lT.x = kT, lT.y = cT, TT.style.translate = `${kT}vw ${cT}vh`)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);