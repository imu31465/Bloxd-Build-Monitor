export const id = 233;
export const ids = [233];
export const modules = {
  37478: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT
    });
    var iT = IT(37483);
    const zT = [0, 0, 0];
    class kT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT;
        this.pool = TT, this.origin = oT, this.count = 0, this.free = []
      }
      take() {
        var TT;
        const oT = null !== (TT = this.free.pop()) && void 0 !== TT ? TT : this.count++;
        return oT >= this.pool.fD && this.pool.grow(Math.max(2 * this.pool.fD, oT + 1)), this.hide(oT), oT
      }
      release(TT) {
        this.hide(TT), this.free.push(TT)
      }
      write(TT, oT, IT, zT) {
        const {
          records: kT
        } = this.pool, {
          origin: WT
        } = this, XT = TT * iT.d;
        kT[XT] = oT - WT[0], kT[XT + 1] = IT - WT[1], kT[XT + 2] = zT - WT[2], kT[XT + iT.h] = 0, this.pool.markDirty(TT)
      }
      hide(TT) {
        this.pool.records[TT * iT.d + iT.h] = 1, this.pool.markDirty(TT)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class WT {
      constructor(TT, oT, IT) {
        this.api = TT, this.model = oT, this.initialCapacity = IT, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(TT) {
        let oT = this.kinds.get(TT);
        if (void 0 === oT) {
          const IT = this.api.createInstancePool({
            ...this.model,
            item: TT
          }, this.initialCapacity);
          null === IT || void 0 === IT || IT.setOrigin(this.origin[0], this.origin[1], this.origin[2]), oT = IT && new kT(IT, this.origin), this.kinds.set(TT, oT)
        }
        return oT
      }
      follow(TT) {
        const {
          origin: oT
        } = this;
        if (Math.abs(TT[0] - oT[0]) <= 512 && Math.abs(TT[1] - oT[1]) <= 512 && Math.abs(TT[2] - oT[2]) <= 512) return !1;
        oT[0] = Math.floor(TT[0]), oT[1] = Math.floor(TT[1]), oT[2] = Math.floor(TT[2]);
        for (const IT of this.kinds.values()) null === IT || void 0 === IT || IT.pool.setOrigin(oT[0], oT[1], oT[2]);
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
  37491: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT,
      i: () => XT,
      m: () => BT
    });
    const iT = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      zT = [0, 1, 2, 0, 2, 3],
      kT = [4, 5];

    function WT(TT, oT, IT, iT, zT) {
      for (let WT = 0; WT < 6; WT++) kT.includes(WT) === zT && FT(TT, oT, IT, iT, WT)
    }

    function XT(TT, oT, IT, iT) {
      for (let zT = 0; zT < 6; zT++) FT(TT, oT, IT, iT, zT)
    }

    function BT(TT, oT, IT, kT, WT) {
      for (let XT = 0; XT < 6; XT++)
        for (const BT of [0, 1]) {
          const [FT, ST, DT] = [BT + 2, BT + 1, (BT + 3) % 4], LT = TT.length / 3;
          for (const [oT, zT] of [
              [BT, ST],
              [FT, ST],
              [FT, DT],
              [BT, DT]
            ])
            for (let BT = 0; BT < 3; BT++) {
              const FT = iT[3 * (4 * XT + oT) + BT],
                ST = iT[3 * (4 * XT + zT) + BT];
              TT.push((FT + (ST - FT) * WT) * kT / 2 + IT[BT])
            }
          for (const TT of zT) oT.push(LT + TT)
        }
    }

    function FT(TT, oT, IT, kT, WT) {
      let [XT, BT, FT] = IT, [ST, DT, LT] = kT;
      const xT = TT.length / 3;
      for (let zT = 4 * WT; zT < 4 * WT + 4; zT++) TT.push(iT[3 * zT] * ST / 2 + XT, iT[3 * zT + 1] * DT / 2 + BT, iT[3 * zT + 2] * LT / 2 + FT);
      for (const iT of zT) oT.push(xT + iT)
    }
  },
  37468: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => SA
    });
    var iT = IT(46);
    const zT = [{
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
      kT = 10;
    let WT = !0;

    function XT() {
      return WT
    }

    function BT(TT) {
      WT = TT
    }
    const FT = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function ST() {
      return WT ? zT.length : kT
    }

    function DT(TT) {
      var oT, IT;
      return null !== (oT = null === (IT = zT[TT - 1]) || void 0 === IT ? void 0 : IT.reactorTier) && void 0 !== oT ? oT : 0
    }

    function LT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DT(TT) > 0;
      return IT && !WT ? "hidden" : TT <= oT ? "open" : IT ? oT < 5 ? "hidden" : oT < kT ? "teaser" : "locked" : "locked"
    }

    function xT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: iT,
        n: zT
      } = MT(TT);
      return {
        key: oT[iT],
        params: {
          [iT]: IT ? String(zT) : zT
        }
      }
    }
    const cT = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function KT(TT, oT) {
      return DT(TT) > 0 && oT < kT
    }

    function MT(TT) {
      const oT = DT(TT);
      if (oT > 0) return {
        kind: "atomic",
        n: oT,
        short: `A${oT}`
      };
      const IT = function(TT) {
        return TT >= 6 && TT <= 10 ? TT - 6 + 1 : 0
      }(TT);
      return IT > 0 ? {
        kind: "stage",
        n: IT,
        short: `S${IT}`
      } : {
        kind: "tier",
        n: TT,
        short: String(TT)
      }
    }

    function rT(TT) {
      return zT[Math.max(1, Math.min(TT, zT.length)) - 1]
    }

    function AT(TT, oT) {
      return TT < oT ? function(TT) {
        var oT;
        return null !== (oT = zT[TT]) && void 0 !== oT ? oT : null
      }(TT) : null
    }
    const gT = "baf2coresubmit",
      hT = "baf2corebankpause",
      wT = "baf2coredeposit",
      mT = "baf2corechargepause";

    function eT(TT) {
      var oT;
      return null !== (oT = TT.baf2CoreOpen) && void 0 !== oT ? oT : kT
    }
    const RT = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function uT(TT) {
      return RT.includes(TT)
    }
    const vT = (TT, oT) => oT.map((oT => [oT, [TT]])),
      ET = Object.fromEntries([...vT("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...vT("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...vT("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...vT("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...vT("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...vT("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...vT("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...vT("Parts Bench", ["Focus Lens"]), ...vT("Machine Bench", ["Laser", "Collider"]), ...vT("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...vT("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...vT("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...vT("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...vT("Tool Bench", ["Mob Cage"]), ...vT("Tool Bench", ["Pocket Terminal"]), ...vT("Tool Bench", ["Comet Beacon"]), ...vT("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function fT(TT) {
      var oT;
      return null !== (oT = ET[TT]) && void 0 !== oT ? oT : ["Workbench"]
    }

    function CT(TT) {
      return fT(TT)[0]
    }
    zT.slice(1).map(((TT, oT) => `Core Tier ${oT+2}`));
    var jT = IT(8829);
    const JT = ["on", "hud", "off"];

    function UT(TT) {
      return "on" === TT
    }
    var aT = IT(314);
    const YT = "Mob Farm",
      QT = {
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
      OT = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      HT = {
        1: 20,
        2: 60,
        3: 120
      },
      nT = "baf2farmvoid",
      qT = "Caged ",
      ZT = " Spawner Block";

    function lT(TT) {
      return `lifeform:${(0,aT.re)(TT)}`
    }

    function sT(TT) {
      if (!TT) return null;
      if (TT.startsWith(qT)) {
        const oT = TT.slice(6);
        return OT.includes(oT) ? oT : null
      }
      if (TT.endsWith(ZT)) {
        const oT = TT.slice(0, -14);
        return void 0 !== QT[oT] ? oT : null
      }
      return null
    }

    function tT(TT) {
      return !0 === TT.mobFarm
    }

    function GT(TT, oT) {
      return HT[QT[oT]] * TT.opMs / 1e3
    }
    const pT = new Map;
    const bT = "baf2islands",
      yT = "baf2islandnew";

    function NT(TT) {
      const oT = zT.findIndex((oT => oT.unlocks.includes(TT)));
      return oT < 0 ? 1 : oT + 1
    }

    function PT(TT) {
      return Math.floor(TT).toLocaleString("en-US")
    }
    var dT = IT(37405);
    const VT = "baf2terminaltake",
      To = ["one", "stack", "fill"];

    function oo(TT, oT, IT) {
      return `${VT} ${TT} ${oT} ${IT}`
    }

    function Io(TT) {
      const [oT, IT, ...iT] = TT.trim().split(" "), zT = Number(oT), kT = function(TT) {
        if (To.includes(TT)) return TT;
        const oT = Number(TT);
        return /^\d+$/.test(TT) && Number.isSafeInteger(oT) && oT > 0 ? oT : null
      }(null !== IT && void 0 !== IT ? IT : "");
      return !Number.isSafeInteger(zT) || zT <= 0 || null === kT || 0 === iT.length ? null : {
        seq: zT,
        mode: kT,
        item: iT.join(" ")
      }
    }
    const io = "baf2rx";

    function zo(TT, oT) {
      for (var IT = arguments.length, iT = new Array(IT > 2 ? IT - 2 : 0), zT = 2; zT < IT; zT++) iT[zT - 2] = arguments[zT];
      return [io, TT[0], TT[1], TT[2], oT, ...iT].join(" ")
    }
    const ko = 2,
      Wo = 4,
      Xo = 8,
      Bo = 16,
      Fo = 32,
      So = 64,
      Do = 128,
      Lo = 256,
      xo = 512,
      co = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Ko = [{
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
    const Mo = "Biomass",
      ro = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function Ao(TT) {
      return {
        input: Mo,
        inputAmount: 1,
        output: TT,
        outputAmount: 1
      }
    }
    const go = "baf2synth",
      ho = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      wo = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      mo = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      eo = function(TT, oT) {
        return {
          input: TT,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: oT,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Ro = function(TT, oT) {
        return {
          ...eo(TT, oT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      uo = wo.map((TT => Ro(TT, "Biomass", 2))),
      vo = {
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
          recipes: [eo("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), eo("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), eo("Raw Gold", "Gold Grit", 2), eo("Messy Stone", "Sand"), eo("Gravel", "Sand"), eo("Raw Voltite", "Voltite Dust", 2), eo("Moonstone", "Moonstone Dust", 4), eo("Wheat Seeds", "Fertiliser"), eo("Raw Uranium", "Uranium Grit", 2), Ro("Mossy Messy Stone", "Sand"), ...uo],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [eo("Iron Grit", "Iron Bar"), eo("Copper Grit", "Copper Bar"), eo("Gold Grit", "Gold Bar"), eo("Raw Iron", "Iron Bar"), eo("Raw Copper", "Copper Bar"), eo("Raw Gold", "Gold Bar"), eo("Sand", "Glass"), eo("Messy Stone", "Stone"), ...aT.Ic.map((TT => eo(TT, "Charcoal", 1, 4))), eo("Wheat", "Bread", 1, 2), ...wo.map(((TT, oT) => Ro(TT, mo[oT])))],
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
          recipes: [eo("Iron Bar", "Iron Plate"), eo("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [eo("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [eo("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [eo("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), eo("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), eo("Raw Gold", "Gold Grit", 3), eo("Raw Voltite", "Voltite Dust", 3), eo("Messy Stone", "Sand", 2), eo("Gravel", "Sand", 2), eo("Moonstone", "Moonstone Dust", 6), eo("Raw Uranium", "Uranium Grit", 3), Ro("Mossy Messy Stone", "Sand", 2), ...uo],
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
          table: co
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [eo("Coal", "Diamond", 1, 24), eo("Voltite Dust", "Moonstone", 1, 12)],
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
        ...dT.h
      },
      Eo = {
        Crusher: [eo("Spent Pellet", "Glow Dust"), eo("Wheat Seeds", "Biomass"), eo("Wheat", "Biomass"), eo("Dead Bush", "Biomass"), eo("Dusk Moss", "Biomass"), eo("Rotten Flesh", "Biomass"), eo("Bone", "Biomass", 2)],
        "Shatter Mill": [eo("Spent Pellet", "Glow Dust"), eo("Wheat Seeds", "Biomass"), eo("Wheat", "Biomass"), eo("Dead Bush", "Biomass"), eo("Dusk Moss", "Biomass"), eo("Rotten Flesh", "Biomass"), eo("Bone", "Biomass", 2), ...aT.Ic.map((TT => eo(TT, "Biomass")))],
        Smelter: [eo("Biomass", "Fertiliser", 2)],
        Press: [eo("Coal", "Graphite", 1, 4)]
      },
      fo = "Power Coupler",
      Co = "Advanced Coupler",
      jo = "Nova Coupler",
      Jo = [{
        item: fo,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: Co,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: jo,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const Uo = new Map;

    function ao(TT) {
      var oT, IT;
      return null !== (oT = null !== (IT = TT.fuelSlot) && void 0 !== IT ? IT : TT.couplerSlot) && void 0 !== oT ? oT : null
    }

    function Yo(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!TT.couplable) throw new Error(`${TT.kind} takes no Power Coupler`);
      let IT = Uo.get(TT);
      IT || (IT = [], Uo.set(TT, IT));
      let iT = IT[oT];
      if (!iT) {
        var zT;
        const {
          divisor: kT,
          powerPerS: WT
        } = Jo[oT - 1], XT = TT.opMs / kT, BT = void 0 !== TT.fluidMade || void 0 !== TT.cryoMade ? TT.powerPerOp : WT * XT / 1e3;
        iT = {
          ...TT,
          fuelSlot: null,
          couplerSlot: null !== (zT = ao(TT)) && void 0 !== zT ? zT : void 0,
          opMs: XT,
          powerPerOp: BT,
          coupled: !0
        }, oT > 1 && (iT = {
          ...iT,
          couplerLevel: oT
        }), IT[oT] = iT
      }
      return iT
    }
    const Qo = new Map;
    const Oo = new Map;

    function Ho(TT, oT) {
      if (null === oT || (IT = oT, !ro.includes(IT))) return TT;
      var IT;
      let iT = Oo.get(oT);
      return iT || (iT = {
        ...TT,
        recipes: [Ao(oT)]
      }, Oo.set(oT, iT)), iT
    }

    function no(TT) {
      return !0 === TT.synth
    }
    const qo = (TT, oT, IT, iT) => ({
        output: TT,
        outputAmount: oT,
        tier: IT,
        inputs: iT.map((TT => {
          let [oT, IT] = TT;
          return {
            item: oT,
            amount: IT
          }
        }))
      }),
      Zo = Object.fromEntries([qo("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), qo("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), qo("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), qo("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), qo("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), qo("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), qo("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), qo("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), qo("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), qo("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), qo("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), qo("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), qo("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), qo("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), qo("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), qo("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), qo("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), qo("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), qo("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), qo("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), qo("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), qo("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), qo("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), qo("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), qo("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), qo("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), qo("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), qo("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), qo("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), qo("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((TT => [TT.output, TT]))),
      so = new Map;

    function to(TT, oT) {
      let IT = vo[TT];
      if (oT.atomic && (IT = function(TT) {
          const oT = Eo[TT.kind];
          if (!oT) return TT;
          let IT = Qo.get(TT.kind);
          if (!IT) {
            const iT = new Set(oT.map((TT => TT.input))),
              zT = TT.recipes.filter((TT => !iT.has(TT.input)));
            IT = {
              ...TT,
              recipes: [...zT, ...oT]
            }, Qo.set(TT.kind, IT)
          }
          return IT
        }(IT)), IT.synth) return Ho(IT, oT.taught);
      if (oT.coupled && IT.couplable) return Yo(IT, oT.level);
      const iT = IT.inputSlots && null !== oT.taught ? Zo[oT.taught] : void 0;
      if (!iT) return IT;
      const zT = `${TT}|${iT.output}`;
      let kT = so.get(zT);
      return kT || (kT = {
        ...IT,
        bench: iT
      }, so.set(zT, kT)), kT
    }
    const Go = ["Diamond", "Moonstone"];

    function po(TT) {
      return new Set(TT.flatMap((TT => TT.bonus ? [TT.output, TT.bonus.item] : [TT.output])).filter((TT => !Go.includes(TT))))
    }
    const bo = Object.values(vo).flatMap((TT => TT.recipes));
    po(bo.filter((TT => !0 !== TT.nuclear))), po([...bo.filter((TT => !0 === TT.nuclear)), ...Object.values(Eo).flat()]);

    function yo(TT) {
      return null === TT.inputSlot && void 0 === TT.inputSlots && void 0 === TT.powerMade && void 0 === TT.fluidMade && !TT.treeCutter && void 0 === TT.table
    }

    function No(TT) {
      return !0 === TT.treeCutter
    }
    const Po = ["Voltite Cell"];

    function Vo(TT) {
      var oT, IT;
      return null !== (oT = null === (IT = TT.fuels) || void 0 === IT ? void 0 : IT.some((TT => Po.includes(TT)))) && void 0 !== oT && oT
    }
    const TI = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(aT.Ic.map((TT => [TT, 8e3]))),
        ...Object.fromEntries(aT.sd.map((TT => [TT, 2e3]))),
        "Voltite Cell": 12e4
      },
      oI = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      II = {
        "Uranium Deposit": 4e3
      };

    function iI(TT) {
      var oT;
      return null !== (oT = Object.keys(oI).find((oT => oI[oT] === TT))) && void 0 !== oT ? oT : null
    }

    function zI(TT) {
      return ho.includes(TT)
    }

    function kI(TT) {
      return !0 !== TT.nuclear || XT()
    }
    var WI = IT(306);
    var XI = IT(8901),
      BI = IT(8837),
      FI = IT(8907),
      SI = IT(8894);
    const DI = "Reactor Controller",
      LI = "Reactor Port",
      xI = "Battery Cell",
      cI = ["fuel", "water", "waste"],
      KI = {
        fuel: LI,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      MI = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      rI = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      AI = "Reactor Frame",
      gI = "Reactor Glass",
      hI = {
        edge: [AI],
        cap: [gI, LI],
        wall: [gI, LI],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [DI]
      },
      wI = {
        edge: [xI],
        cap: [xI],
        wall: [xI],
        inside: [xI],
        ctrl: [xI]
      },
      mI = ["edge", "cap", "wall", "inside"],
      eI = ["Reactor Slag"];

    function RI(TT) {
      return eI.includes(uI(TT))
    }

    function uI(TT) {
      const oT = TT.indexOf("|");
      return oT < 0 ? TT : TT.slice(0, oT)
    }

    function vI(TT) {
      return uI(TT) === DI ? "reactor" : null
    }

    function EI(TT) {
      return uI(TT) !== LI ? null : TT.endsWith("|Water") ? "water" : TT.endsWith("|Waste") ? "waste" : "fuel"
    }

    function fI(TT) {
      const oT = EI(TT);
      return null === oT ? null : JI(KI[cI[(cI.indexOf(oT) + 1) % cI.length]], function(TT) {
        return TT.includes(CI)
      }(TT))
    }
    const CI = "|meta|rot1|Formed",
      jI = new Set([AI, gI, LI]);

    function JI(TT, oT) {
      var IT;
      const iT = uI(TT);
      if (!jI.has(iT)) return TT;
      if (iT !== LI) return oT ? iT + CI : iT;
      const zT = null !== (IT = EI(TT)) && void 0 !== IT ? IT : "fuel";
      return oT ? "fuel" === zT ? iT + CI : `${iT}${CI}|${"water"===zT?"Water":"Waste"}` : KI[zT]
    }

    function UI(TT, oT) {
      const IT = dI(TT, oT);
      if ("Air" === IT) return !1;
      const iT = "reactor" === TT ? hI : wI;
      return mI.some((TT => iT[TT].includes(IT))) || "reactor" === TT && eI.includes(IT)
    }

    function aI(TT) {
      return rI[TT]
    }

    function YI(TT) {
      var oT;
      return null !== (oT = MI[TT]) && void 0 !== oT ? oT : MI[1]
    }

    function QI(TT) {
      const [oT, , IT] = YI(TT);
      return [IT, 0, -oT]
    }

    function OI(TT, oT, IT, iT, zT, kT) {
      return {
        ctrl: [TT[0], TT[1], TT[2]],
        rot: MI[oT] ? oT : 1,
        w: IT,
        h: iT,
        d: zT,
        cu: kT[0],
        cv: kT[1]
      }
    }

    function HI(TT, oT) {
      return "reactor" === TT ? [Math.floor((oT - 1) / 2), 0] : [0, 0]
    }

    function nI(TT, oT, IT, iT, zT) {
      let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT.rot;
      if (IT === TT.w && iT === TT.h && zT === TT.d && kT === TT.rot) return TT;
      const [WT] = HI(oT, TT.w);
      if (TT.cu === WT && TT.cv <= 1) return OI(TT.ctrl, kT, IT, iT, zT, HI(oT, IT));
      const XT = (TT, oT) => Math.max(1, Math.min(oT, TT));
      return OI(TT.ctrl, kT, IT, iT, zT, [XT(TT.cu, IT - 2), 0 === TT.cv ? 0 : XT(TT.cv, iT - 2)])
    }
    const qI = 11,
      ZI = 2 * qI + 1;
    new Uint8Array(ZI * ZI * ZI);

    function lI(TT) {
      return TT.w * TT.h * TT.d
    }

    function sI(TT) {
      const oT = QI(TT.rot);
      return [TT.ctrl[0] - oT[0] * TT.cu, TT.ctrl[1] - TT.cv, TT.ctrl[2] - oT[2] * TT.cu]
    }

    function tI(TT) {
      return TT.cv * TT.d * TT.w + TT.cu
    }

    function GI(TT, oT) {
      const IT = oT % TT.w,
        iT = Math.floor(oT / TT.w) % TT.d;
      return [IT, Math.floor(oT / (TT.w * TT.d)), iT]
    }

    function pI(TT, oT) {
      const [IT, iT, zT] = GI(TT, oT), kT = sI(TT), WT = YI(TT.rot), XT = QI(TT.rot);
      return [kT[0] + XT[0] * IT - WT[0] * zT, kT[1] + iT, kT[2] + XT[2] * IT - WT[2] * zT]
    }

    function bI(TT, oT) {
      const IT = sI(TT),
        iT = YI(TT.rot),
        zT = QI(TT.rot),
        kT = oT[0] - IT[0],
        WT = oT[2] - IT[2],
        XT = kT * zT[0] + WT * zT[2],
        BT = -(kT * iT[0] + WT * iT[2]),
        FT = oT[1] - IT[1];
      return XT < 0 || XT >= TT.w || FT < 0 || FT >= TT.h || BT < 0 || BT >= TT.d ? -1 : (FT * TT.d + BT) * TT.w + XT
    }

    function yI(TT, oT) {
      if (oT === tI(TT)) return "ctrl";
      const [IT, iT, zT] = GI(TT, oT), kT = 0 === iT || iT === TT.h - 1, WT = Number(0 === IT || IT === TT.w - 1) + Number(kT) + Number(0 === zT || zT === TT.d - 1);
      return WT >= 2 ? "edge" : 1 === WT ? kT ? "cap" : "wall" : "inside"
    }

    function NI(TT, oT) {
      const [IT, iT, zT] = GI(TT, oT);
      return 0 === IT || IT === TT.w - 1 || 0 === iT || iT === TT.h - 1 || 0 === zT || zT === TT.d - 1 ? -1 : ((iT - 1) * (TT.d - 2) + (zT - 1)) * (TT.w - 2) + (IT - 1)
    }

    function PI(TT, oT) {
      const IT = TT.w - 2,
        iT = TT.d - 2,
        zT = oT % IT + 1,
        kT = Math.floor(oT / IT) % iT + 1;
      return ((Math.floor(oT / (IT * iT)) + 1) * TT.d + kT) * TT.w + zT
    }

    function dI(TT, oT) {
      const IT = uI(oT);
      return "reactor" === TT && IT === DI ? AI : IT
    }

    function VI(TT, oT, IT) {
      const iT = "ctrl" === oT ? uI(IT) : dI(TT, IT);
      return ("reactor" === TT ? hI : wI)[oT].includes(iT) ? "ok" : "Air" === iT ? "missing" : UI(TT, IT) ? "wrong" : "blocked"
    }

    function Ti(TT, oT) {
      return "battery" === TT ? xI : "inside" === oT ? null : function(TT, oT) {
        if ("inside" === oT || "ctrl" === oT || "battery" === TT) return null;
        return "edge" === oT ? AI : gI
      }(TT, oT)
    }
    const oi = {
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
      Ii = "Collider",
      ii = "Laser",
      zi = "Star Alloy",
      ki = "Glow Dust",
      Wi = [Ii, "_Collider Focus"];

    function Xi(TT) {
      return Wi.indexOf(uI(TT))
    }

    function Bi(TT) {
      return uI(TT) === ii
    }

    function Fi(TT) {
      return [
        [TT[0], TT[1], TT[2]],
        [TT[0], TT[1] + 1, TT[2]]
      ]
    }
    const Si = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function Di(TT, oT, IT) {
      const iT = Si[oT];
      return [TT[0] + iT[0] * IT, TT[1], TT[2] + iT[2] * IT]
    }

    function Li(TT, oT) {
      if (oT[1] !== TT[1]) return null;
      const IT = oT[0] - TT[0],
        iT = oT[2] - TT[2];
      if (0 !== IT === (0 !== iT)) return null;
      const zT = Math.abs(IT + iT);
      if (zT > oi.LASER_D) return null;
      return {
        dir: iT < 0 ? 0 : IT > 0 ? 1 : iT > 0 ? 2 : 3,
        gS: zT
      }
    }

    function xi(TT, oT, IT) {
      const iT = oT => Math.abs(TT[0] - oT[0]) <= 1 && Math.abs(TT[1] - oT[1]) <= 1;
      return iT(oT) || iT(IT)
    }

    function ci(TT, oT) {
      return function(TT, oT, IT, iT) {
        return [0, 1, 2, 3].map((zT => {
          for (let kT = 1; kT <= oi.LASER_D; kT++) {
            const WT = Di(TT, zT, kT);
            if (xi([WT[0], WT[2]], oT, IT) || !iT(WT)) return !1
          }
          return !0
        }))
      }(Fi(TT)[1], oT.spawnXZ, oT.coreXZ, (TT => TT[1] >= XI.s && TT[1] < XI.s + XI.v && TT[0] >= oT.minXZ[0] && TT[0] <= oT.maxXZ[0] && TT[2] >= oT.minXZ[1] && TT[2] <= oT.maxXZ[1]))
    }
    const Ki = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function Mi(TT) {
      return Math.max(48 + 16 * TT, rT(TT).machineAllowance)
    }
    const ri = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function Ai(TT) {
      const oT = TT.split("|")[0];
      return ri.includes(oT) ? "Solar Panel" : oT === FI.d ? "Fluid Pipe" : Xi(oT) >= 0 ? "Collider" : (IT = oT, Ki.includes(IT) ? oT : null);
      var IT
    }
    const gi = "buildAFactory2Game:solarPanelDescription";
    const wi = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function mi(TT, oT) {
      var IT;
      return null !== (IT = wi.find((IT => {
        var iT;
        return (null !== (iT = TT.level(IT)) && void 0 !== iT ? iT : 0) >= oT
      }))) && void 0 !== IT ? IT : null
    }
    const ei = "buildAFactory2Game:";
    let Ri = null;
    const ui = {
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
      vi = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      Ei = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      fi = {
        "Loot Chest": `${ei}lookRuinChestName`
      };

    function Ci(TT) {
      return "object" === typeof TT && null !== TT && "translationKey" in TT && "string" === typeof TT.translationKey ? TT.translationKey : null
    }

    function ji(TT, oT) {
      var IT;
      return null !== (IT = Ci(TT.displayName(oT))) && void 0 !== IT ? IT : `item:${(0,aT.re)(oT)}`
    }

    function Ji(TT, oT) {
      var IT, iT, zT, kT;
      let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oT;
      if ("Solar Panel" === Ai(oT)) return {
        name: Ci(TT.displayName("Solar Panel")),
        detail: gi,
        detailItem: null
      };
      const BT = oT.endsWith(" Ore"),
        FT = (Ri ??= new Set([...Object.keys((0, BI.j)()), ...Object.keys((0, FI.p)())].map((TT => TT.split("|")[0]))), Ri).has(oT),
        ST = BT || FT ? null : function(TT) {
          var oT;
          return TT.endsWith(" Log") && !TT.startsWith("Barkless ") ? "lookLog" : TT.endsWith(" Sapling") ? "lookSapling" : TT.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (oT = ui[TT]) && void 0 !== oT ? oT : null
        }(oT);
      if (!TT.isBlock(oT) || !BT && !FT && null === ST) return null;
      const DT = null !== (IT = null !== (iT = fi[oT]) && void 0 !== iT ? iT : Ci(null !== (zT = TT.displayName(WT)) && void 0 !== zT ? zT : TT.displayName(oT))) && void 0 !== IT ? IT : `item:${(0,aT.re)(oT)}`;
      if (null !== ST) return {
        name: DT,
        detail: `${ei}${ST}`,
        detailItem: null
      };
      const LT = null !== (kT = vi[oT]) && void 0 !== kT ? kT : XT() ? Ei[oT] : void 0;
      if (FT && void 0 !== LT) return {
        name: DT,
        detail: `${ei}${LT}`,
        detailItem: null
      };
      const xT = oI[oT];
      if (void 0 !== xT) return {
        name: DT,
        detail: `${ei}lookDeposit`,
        detailItem: ji(TT, xT)
      };
      const cT = TT.harvestLevel(oT);
      if (BT && "rock" === TT.harvestType(oT) && 0 !== cT) {
        const oT = mi(TT, null !== cT && void 0 !== cT ? cT : 0);
        if (oT === wi[0]) return {
          name: DT,
          detail: `${ei}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== oT) return {
          name: DT,
          detail: `${ei}lookPickaxe`,
          detailItem: ji(TT, oT)
        }
      }
      return {
        name: DT,
        detail: Ci(TT.description(oT)),
        detailItem: null
      }
    }

    function Ui(TT) {
      return TT < XI.s - 24
    }
    const ai = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const Yi = "Wrench",
      Qi = "Nova Wrench";

    function Oi(TT) {
      return TT === Yi || TT === Qi
    }
    const Hi = [...XI.J, "Belt Lift", "Belt Drop"];
    const ni = ["Belt Lift", "Belt Drop"],
      qi = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function Zi(TT) {
      return TT.split("|")[0]
    }

    function li(TT) {
      const oT = /\|rot(\d)/.exec(TT);
      return oT ? Number(oT[1]) : 1
    }

    function si(TT) {
      return TT % 4 + 1
    }

    function ti(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === oT && "" === IT ? TT : `${TT}|meta|rot${oT}${IT}`
    }

    function Gi(TT) {
      return Zi(TT) === XI.C ? (0, XI.S)(TT) ? "gateRight" : "gateLeft" : (0, XI.X)(TT)
    }

    function bi(TT) {
      const oT = Zi(TT),
        IT = li(TT);
      if (XI.J.includes(oT)) return (0, XI.M)(oT, si(IT), null);
      if (oT === XI.h) return (0, XI.db)(si(IT), (0, XI.V)(TT));
      if (oT === XI.E) {
        const iT = qi[(0, XI.X)(TT)];
        return null === iT ? ti(oT, si(IT)) : ti(oT, IT, XI.G[iT])
      }
      return oT === XI.C ? (0, XI.S)(TT) ? ti(oT, si(IT)) : ti(oT, IT, XI.o) : SI.b.includes(oT) && !ni.includes(oT) || zI(oT) ? ti(oT, si(IT)) : null
    }

    function yi(TT) {
      return SI.b.includes(TT) || zI(TT) || null !== Ai(TT)
    }

    function Ni(TT) {
      return "Solar Panel" === Ai(TT)
    }
    const Pi = "buildAFactory2Game:",
      di = {
        leftFront: `${Pi}lookSplitDetail_leftFront`,
        frontRight: `${Pi}lookSplitDetail_frontRight`,
        gateRight: `${Pi}lookGateDetail_gateRight`
      };

    function Vi(TT, oT) {
      var IT;
      let iT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const zT = Gi(TT),
        kT = null === zT ? null : `${Pi}${zT.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${zT}`,
        WT = null === zT ? null : null !== (IT = di[zT]) && void 0 !== IT ? IT : null;
      if (Oi(oT) && iT) {
        const IT = Zi(TT);
        return oT === Qi && XT() && function(TT) {
          return Hi.includes(Zi(TT))
        }(TT) ? {
          mode: kT,
          detail: WT,
          next: `${Pi}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: kT,
          detail: WT,
          next: yi(IT) && !Ni(IT) ? `${Pi}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const BT = Oi(oT) ? bi(TT) : null;
      if (null === BT) return {
        mode: kT,
        detail: WT,
        next: null,
        nextState: null
      };
      const FT = Gi(BT);
      return null === FT || li(BT) !== li(TT) ? {
        mode: kT,
        detail: WT,
        next: `${Pi}lookWrenchTurn`,
        nextState: null
      } : {
        mode: kT,
        detail: WT,
        next: `${Pi}lookWrenchNext`,
        nextState: `${Pi}lookWrenchState_${FT}`
      }
    }
    const Tz = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const oz = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function Iz(TT) {
      return [0, 1, 2, 3].map((oT => 0 !== (TT & 1 << oT)))
    }

    function iz(TT) {
      const oT = [];
      for (let IT = 8; IT + 2 < TT.length; IT += 3) oT.push([TT[IT], TT[IT + 1], TT[IT + 2]]);
      return {
        focus: [TT[0], TT[1], TT[2]],
        lasers: Iz(TT[3]),
        open: Iz(TT[4]),
        live: Iz(TT[5]),
        on: 1 === TT[6],
        state: oz[TT[7]],
        blockers: oT
      }
    }
    const zz = "Arc Caster",
      kz = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      Wz = (Object.values(kz), "Jet Chestplate"),
      Xz = "Nova Jet Chestplate",
      Bz = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Fz = Object.values(Bz);

    function Sz(TT, oT, IT) {
      return Math.min(function(TT) {
        return XT() && DT(TT) >= 5 ? 20 : 10
      }(IT), Math.floor(function(TT, oT) {
        return Math.max(0, TT) + (XT() ? Math.max(0, oT) : 0)
      }(TT, oT) / 5))
    }

    function Dz(TT, oT, IT) {
      const iT = Sz(oT, IT, TT),
        zT = DT(TT),
        kT = (zT >= 3 ? 55 : zT >= 1 ? 50 : TT >= 8 ? 45 : 30) + iT,
        WT = Math.max(100 + iT, 2 * kT);
      return {
        arcDamage: kT,
        arcPierce: TT >= 7 ? 2 : 1,
        arcChain: TT >= 10,
        barrierMax: (zT >= 4 ? 100 : zT >= 2 ? 90 : TT >= 9 ? 80 : TT >= 6 ? 60 : 40) + 5 * iT,
        barrierRegenPerS: zT >= 5 ? 20 : TT >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * iT,
        novaShieldRegenPerS: 32,
        bladeDamage: WT,
        bladePunch: Math.round(.5 * WT),
        forgeRank: iT
      }
    }
    const Lz = {
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
    var xz = IT(35777),
      cz = IT(35601),
      Kz = IT(35599),
      Mz = IT(12),
      rz = IT(1585),
      Az = IT(1042),
      gz = IT.n(Az);

    function hz(TT) {
      return !0 === TT.field
    }
    const wz = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function mz(TT) {
      return wz.has(TT) ? `buildAFactory2Game:itemPlural_${(0,aT.re)(TT)}` : null
    }
    var ez = IT(1171),
      Rz = IT(1055),
      uz = IT(1747),
      vz = IT(1729),
      Ez = IT(35763),
      fz = IT(35770),
      Cz = IT(16),
      jz = IT(35758);
    const Jz = "baf2QuestView",
      Uz = "baf2PlayerY",
      az = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class Yz {
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
      set(TT, oT) {
        var IT, iT, zT, kT, WT, XT, BT, FT;
        const ST = JSON.stringify(TT.baf2QuestName) === JSON.stringify(this.view.name),
          DT = new Set(this.view.rows.filter((TT => TT.done)).map((TT => TT.id))),
          LT = new Set(this.view.rows.filter((TT => TT.justFinished)).map((TT => TT.id))),
          xT = TT.baf2QuestSide,
          cT = null !== xT && !0 === TT.baf2QuestSideFocus;
        let KT = !1,
          MT = 0;
        const rT = TT.baf2QuestSteps.map((TT => {
            const oT = sz(TT, az.has(TT[0]) ? TT[0] : "" + MT++),
              IT = ST && oT.done && !DT.has(oT.id);
            return oT.justFinished = IT || ST && oT.done && LT.has(oT.id), KT ||= IT, oT
          })),
          AT = lz(rT);
        AT >= 0 && !cT && (rT[AT].current = !0);
        const gT = !ST && null !== TT.baf2QuestName,
          hT = JSON.stringify(xT && [xT[0], xT[1]]),
          wT = hT === JSON.stringify(null !== (IT = null === (iT = this.view.side) || void 0 === iT ? void 0 : iT.name) && void 0 !== IT ? IT : null),
          mT = null !== xT && !this.sidesSeen.has(hT);
        mT && this.sidesSeen.add(hT), this.serverTutorial = null !== (zT = TT.baf2QuestTutorial) && void 0 !== zT ? zT : "on", (null !== (kT = TT.baf2QuestTutorialSeq) && void 0 !== kT ? kT : 0) >= this.pickSeq && this.endPick();
        const eT = !ST || !wT || TT.baf2QuestTier !== this.view.tier;
        this.view = {
          name: TT.baf2QuestName,
          rows: rT,
          reward: TT.baf2QuestReward,
          goal: TT.baf2QuestGoal,
          pulse: this.view.pulse + (KT || gT ? 1 : 0),
          itemNames: oT,
          side: xT && {
            name: [xT[0], xT[1]],
            row: {
              ...sz(xT[2], "side"),
              current: cT
            },
            goal: null !== (WT = xT[3]) && void 0 !== WT ? WT : null
          },
          sideCameUpAt: mT ? Date.now() : this.view.sideCameUpAt,
          tier: TT.baf2QuestTier,
          core: TT.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (XT = TT.baf2QuestAlso) && void 0 !== XT ? XT : [],
          depth: null !== (BT = TT.baf2QuestDepth) && void 0 !== BT ? BT : null,
          tutorial: null !== (FT = this.pickedTutorial) && void 0 !== FT ? FT : this.serverTutorial,
          tutorialKnown: !0
        }, this.XM(), KT && this.scheduleClear(), eT && this.requestBook()
      }
      setTutorial(TT) {
        return this.endPick(), this.pickedTutorial = TT, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.XM()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: TT
        }, this.XM(), this.pickSeq
      }
      onPlayerY(TT) {
        const oT = Math.floor(TT);
        oT !== this.playerY && (this.playerY = oT, this.view.depth && Cz.h.XM(Uz, oT))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(TT) {
        this.view = {
          ...this.view,
          chapters: TT.baf2BookChapters
        }, this.XM()
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
          }, this.XM()
        }), 2400)
      }
      XM() {
        Cz.h.XM(Jz, this.view, !0)
      }
    }

    function Qz(TT, oT) {
      return TT.sideCameUpAt > 0 && oT - TT.sideCameUpAt < 2400
    }

    function Oz(TT) {
      return (null === TT.name || Hz(TT)) && null === TT.side && null !== TT.chapters
    }

    function Hz(TT) {
      var oT;
      return "quest_forgeOngoing" === (null === (oT = TT.name) || void 0 === oT ? void 0 : oT[0])
    }

    function nz(TT) {
      return TT.filter((TT => !az.has(TT.key)))
    }

    function qz(TT) {
      return TT.key.startsWith("stepCraft")
    }

    function Zz(TT, oT) {
      const IT = new Set,
        iT = TT.side ? [...TT.rows, TT.side.row] : TT.rows;
      for (const kT of iT)
        if (!kT.done) {
          !kT.item || oT && !qz(kT) || IT.add(kT.item);
          for (const [TT, oT, iT] of null !== (zT = kT.chips) && void 0 !== zT ? zT : []) {
            var zT;
            oT < iT && IT.add(TT)
          }
        } return IT
    }

    function lz(TT) {
      const oT = TT.findIndex((TT => !TT.done && !TT.away));
      return oT >= 0 ? oT : TT.findIndex((TT => !TT.done))
    }

    function sz(TT, oT) {
      let [IT, iT, zT, kT, WT, XT, BT, FT, ST, DT] = TT;
      return {
        id: oT,
        key: IT,
        params: iT,
        item: zT,
        amount: kT,
        total: WT,
        done: XT,
        chips: null !== BT && void 0 !== BT ? BT : null,
        current: !1,
        away: !0 === FT,
        madeFor: null !== ST && void 0 !== ST ? ST : [],
        also: null !== DT && void 0 !== DT ? DT : [],
        justFinished: !1
      }
    }
    const tz = "baf2QuestItems",
      Gz = new Set;
    let pz = new Set,
      bz = null;

    function yz(TT) {
      const oT = UT(TT.tutorial),
        IT = oT ? Zz(TT, !0) : Gz;
      "inventory" === Mz.c.get("openInGameMenuName") ? (bz = null, (0, jz.s)(IT)) : bz = IT;
      const iT = oT ? Zz(TT, !1) : Gz;
      (0, fz.d)(iT, pz) || (pz = iT, Cz.h.XM(tz, pz))
    }

    function Nz() {
      return (0, Ez.e)(tz, (() => pz))
    }
    var Pz = IT(8763),
      dz = IT(2844);

    function Vz(TT) {
      const oT = (0, dz.d)(TT),
        IT = void 0 === oT ? void 0 : (0, Pz.displayNameOf)(oT);
      return "object" === typeof IT && null !== IT && "translationKey" in IT && "string" === typeof IT.translationKey ? IT.translationKey : `item:${(0,aT.re)(TT)}`
    }

    function Tk(TT, oT) {
      return TT(Vz(oT))
    }
    const Ik = [{
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

    function ik(TT, oT) {
      return [`Deposit Seed (${TT})`, {
        item: oI[`${TT} Deposit`],
        amount: oT
      }]
    }
    const zk = Object.fromEntries([ik("Coal", 8), ik("Iron", 8), ik("Copper", 8), ik("Gold", 6), ik("Voltite", 4), ik("Uranium", 4)]),
      kk = "Relay Coil",
      Wk = new Map;

    function Xk(TT) {
      let oT = Wk.get(TT);
      if (!oT) {
        const IT = Math.max(1, TT);
        oT = Ik.filter((TT => {
          var oT;
          return IT >= TT.fromTier && IT <= (null !== (oT = TT.untilTier) && void 0 !== oT ? oT : 1 / 0)
        })).map((TT => TT.later && IT >= TT.later.tier ? {
          ...TT,
          weight: TT.later.weight
        } : TT)), Wk.set(TT, oT)
      }
      return oT
    }

    function Bk(TT) {
      return Xk(TT).some((TT => {
        let {
          item: oT
        } = TT;
        return oT === kk
      }))
    }

    function Fk(TT) {
      return TT.startsWith("Deposit Seed (")
    }

    function Sk(TT, oT) {
      const IT = Xk(TT);
      return oT ? IT.filter((TT => oT(TT.item))) : IT
    }

    function Dk(TT) {
      return TT.reduce(((TT, oT) => TT + oT.weight), 0)
    }

    function Lk(TT, oT) {
      const IT = Sk(TT, oT),
        iT = Dk(IT);
      return IT.map((TT => ({
        find: TT,
        chance: TT.weight / iT
      })))
    }
    const xk = 6e4,
      ck = new Intl.NumberFormat("en-US");

    function Kk(TT, oT) {
      const IT = TT >= 10 ? Math.round(TT) : Math.round(10 * TT) / 10;
      return 0 === IT ? "0" : `${oT}${ck.format(IT)}`
    }

    function Mk(TT) {
      return TT < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? ck.format(TT) : TT < 1e6 ? `${TT<1e5?Math.floor(TT/100)/10:Math.floor(TT/1e3)}k` : Math.floor(TT / 1e5) / 10 + "M"
    }

    function rk(TT) {
      return TT < 0 ? "\u2212" + -TT : String(TT)
    }

    function Ak(TT, oT) {
      const IT = Math.max(1, Math.round(oT));
      if (IT < 60) return TT("buildAFactory2Game:durationSeconds", {
        seconds: String(IT)
      });
      const iT = Math.round(IT / 60);
      if (iT < 60) return TT("buildAFactory2Game:durationMinutes", {
        minutes: String(iT)
      });
      const zT = String(Math.floor(iT / 60));
      return iT % 60 === 0 ? TT("buildAFactory2Game:durationWholeHours", {
        hours: zT
      }) : TT("buildAFactory2Game:durationHours", {
        hours: zT,
        minutes: String(iT % 60)
      })
    }
    const gk = "(max-height: 420px), (max-width: 650px)";

    function hk() {
      return "undefined" !== typeof window && window.matchMedia(gk).matches
    }

    function wk(TT) {
      const oT = window.matchMedia(gk),
        IT = () => {
          TT(oT.matches)
        };
      return oT.addEventListener("change", IT), () => {
        oT.removeEventListener("change", IT)
      }
    }
    var mk = IT(1083);

    function ek(TT, oT) {
      return null !== TT && TT > oT + 1
    }

    function Rk(TT) {
      const oT = 100 * TT;
      return String(oT <= 0 || oT >= 1 ? Math.round(oT) : Math.max(.1, Math.round(10 * oT) / 10))
    }

    function uk(TT) {
      let {
        item: oT,
        amount: IT
      } = TT;
      return (0, mk.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, mk.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, mk.jsx)(uz.c, {
            itemName: oT,
            amount: 0
          })
        }), IT > 1 && (0, mk.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", IT]
        })]
      })
    }

    function vk(TT) {
      let {
        label: oT,
        names: IT
      } = TT;
      const [zT, kT] = (0, iT.useState)(!1), WT = IT.join(" / ");
      return (0, mk.jsxs)(mk.Fragment, {
        children: [(0, mk.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: WT,
          "aria-expanded": zT,
          onClick: () => {
            kT(!zT)
          },
          children: oT
        }), zT && (0, mk.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: WT
        })]
      })
    }

    function Ek(TT) {
      let {
        tier: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)(), {
        key: iT,
        params: zT
      } = xT(oT, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), kT = IT(`buildAFactory2Game:${iT}`, zT);
      return (0, mk.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, mk.jsx)(Rz.e, {
          name: "lock"
        }), kT]
      })
    }
    const fk = (0, iT.createContext)(null);

    function Ck() {
      const {
        t: TT
      } = (0, ez.t)(), oT = (0, iT.useContext)(fk);
      return (0, iT.useEffect)((() => null === oT || void 0 === oT ? void 0 : oT()), [oT]), (0, mk.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: TT("buildAFactory2Game:recipeForQuest"),
        "aria-label": TT("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function jk(TT) {
      let {
        title: oT,
        count: IT,
        children: zT,
        startOpen: kT = !0
      } = TT;
      const {
        t: WT
      } = (0, ez.t)(), [XT, BT] = (0, iT.useState)((() => kT && !hk())), [FT, ST] = (0, iT.useState)(0), DT = (0, iT.useCallback)((() => (ST((TT => TT + 1)), () => {
        ST((TT => TT - 1))
      })), []);
      return (0, mk.jsxs)("div", {
        className: gz()("Baf2Recipes", {
          Open: XT
        }),
        children: [(0, mk.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            BT(!XT)
          },
          "aria-expanded": XT,
          children: [WT("buildAFactory2Game:recipesToggle", {
            title: oT,
            count: String(IT)
          }), (0, mk.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: XT ? "\u25be" : "\u25b8"
          })]
        }), XT && (0, mk.jsxs)(fk.Provider, {
          value: DT,
          children: [(0, mk.jsx)("ul", {
            className: "Baf2RecipeList",
            children: zT
          }), FT > 0 && (0, mk.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, mk.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), WT("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Jk = "buildAFactory2Game:",
      Uk = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const ak = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      Yk = {
        "Uranium Grit": kT,
        "Raw Uranium": kT
      };

    function Qk(TT) {
      var oT;
      return null !== (oT = Yk[TT]) && void 0 !== oT ? oT : Math.max(NT(TT), ak[TT] ? NT(ak[TT]) : 1, function(TT) {
        const oT = zT.findIndex((oT => oT.cost.some((oT => oT.item === TT))));
        return oT > kT ? oT : 1
      }(TT))
    }

    function Ok(TT, oT) {
      return Hk(oT) ? Qk(oT) : function(TT) {
        if (Uk.has(TT)) return 1;
        const oT = zT.findIndex((oT => oT.newDeposits.some((oT => {
          let {
            block: IT
          } = oT;
          return IT === TT
        }))));
        return oT < 0 ? 1 : oT + 1
      }(TT)
    }

    function Hk(TT) {
      return TT in Yk || DT(Qk(TT)) > 0
    }

    function nk(TT, oT) {
      return to(TT, {
        coupled: !1,
        taught: null,
        atomic: XT() && oT >= 11
      }).recipes
    }

    function qk(TT, oT) {
      const IT = LT(TT, oT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DT(TT) > 0);
      return "open" === IT || "locked" === IT
    }

    function Zk(TT, oT) {
      return TT.map(((TT, IT) => ({
        value: TT,
        idx: IT,
        tier: oT(TT)
      }))).sort(((TT, oT) => TT.tier - oT.tier || TT.idx - oT.idx)).map((TT => {
        let {
          value: oT
        } = TT;
        return oT
      }))
    }

    function lk(TT, oT, IT) {
      const iT = LT(TT, oT);
      if ("hidden" === iT || "open" === iT) return null;
      if ("teaser" === iT) return {
        tag: {
          translationKey: `${Jk}${IT?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Jk}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const zT = xT(TT, {
          tier: IT ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        kT = xT(TT, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Jk}${zT.key}`,
          params: zT.params
        },
        reason: {
          translationKey: `${Jk}${kT.key}`,
          params: kT.params
        }
      }
    }

    function sk(TT) {
      return !Fk(TT)
    }

    function tk(TT) {
      let {
        seconds: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)();
      return (0, mk.jsx)(jk, {
        title: IT("buildAFactory2Game:recipesCuts", {
          seconds: oT
        }),
        count: 1,
        children: (0, mk.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, mk.jsx)(uk, {
            item: "Maple Sapling",
            amount: 1
          }), (0, mk.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, mk.jsx)(uk, {
            item: "Maple Log",
            amount: 1
          }), (0, mk.jsx)("span", {
            className: "Baf2RecipeName",
            children: IT("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Gk(TT) {
      let {
        fertilised: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)();
      return (0, mk.jsxs)(jk, {
        title: IT("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, mk.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, mk.jsx)(uk, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, mk.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, mk.jsx)(uk, {
            item: "Wheat",
            amount: 1
          }), (0, mk.jsx)(uk, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, mk.jsx)("span", {
            className: "Baf2RecipeName",
            children: IT("buildAFactory2Game:recipeField")
          })]
        }), (0, mk.jsxs)("li", {
          className: gz()("Baf2Recipe", {
            InUse: oT
          }),
          children: [(0, mk.jsx)(uk, {
            item: "Fertiliser",
            amount: 1
          }), (0, mk.jsx)("span", {
            className: "Baf2RecipeName",
            children: IT("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function pk(TT) {
      let {
        tier: oT,
        seconds: IT
      } = TT;
      const {
        t: iT
      } = (0, ez.t)(), zT = function(TT) {
        return TT >= 5 ? Ko : co
      }(oT);
      return (0, mk.jsx)(jk, {
        title: iT("buildAFactory2Game:recipesBringsUp", {
          seconds: IT
        }),
        count: zT.length,
        children: zT.map((TT => {
          let {
            item: oT,
            chance: IT
          } = TT;
          return (0, mk.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, mk.jsx)(uk, {
              item: oT,
              amount: 1
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeName",
              children: Tk(iT, oT)
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: iT("buildAFactory2Game:recipeChance", {
                percent: Rk(IT)
              })
            })]
          }, oT)
        }))
      })
    }

    function bk(TT) {
      let {
        tier: oT,
        seconds: IT,
        noSeeds: iT
      } = TT;
      const {
        t: zT
      } = (0, ez.t)(), kT = Nz(), WT = Lk(oT, iT ? sk : void 0), XT = iT && Lk(oT).length > WT.length, BT = Bk(oT);
      return (0, mk.jsxs)(jk, {
        title: zT("buildAFactory2Game:recipesRecycles", {
          seconds: IT
        }),
        count: WT.length,
        children: [WT.map((TT => {
          let {
            find: oT,
            chance: IT
          } = TT;
          return (0, mk.jsxs)("li", {
            className: "Baf2Recipe",
            children: [kT.has(oT.item) && (0, mk.jsx)(Ck, {}), (0, mk.jsx)(uk, {
              item: oT.item,
              amount: oT.amount
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeName",
              children: Tk(zT, oT.item)
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: zT("buildAFactory2Game:recipeChance", {
                percent: Rk(IT)
              })
            })]
          }, oT.item)
        })), XT && (0, mk.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mk.jsx)("span", {
            className: "Baf2RecipeName",
            children: zT("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), BT && (0, mk.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mk.jsx)("span", {
            className: "Baf2RecipeName",
            children: zT("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function yk(TT) {
      let {
        tier: oT,
        seconds: IT
      } = TT;
      const {
        t: iT
      } = (0, ez.t)(), zT = Object.entries(zk).filter((TT => {
        let [, {
          item: IT
        }] = TT;
        return qk(Qk(IT), oT, Hk(IT))
      }));
      return (0, mk.jsx)(jk, {
        title: iT("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: IT
        }),
        count: zT.length,
        children: zT.map((TT => {
          let [oT, {
            item: IT,
            amount: zT
          }] = TT;
          return (0, mk.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, mk.jsx)(uk, {
              item: oT,
              amount: 1
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, mk.jsx)(uk, {
              item: IT,
              amount: zT
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeName",
              children: Tk(iT, IT)
            })]
          }, oT)
        }))
      })
    }

    function Nk(TT) {
      let {
        tier: oT,
        seconds: IT
      } = TT;
      const {
        t: iT
      } = (0, ez.t)(), zT = Nz(), kT = Zk(Object.entries(oI).filter((TT => {
        let [IT, iT] = TT;
        return qk(Ok(IT, iT), oT, Hk(iT))
      })), (TT => {
        let [oT, IT] = TT;
        return Ok(oT, IT)
      }));
      return (0, mk.jsx)(jk, {
        title: iT("buildAFactory2Game:recipesDigs", {
          seconds: IT
        }),
        count: kT.length,
        children: kT.map((TT => {
          let [IT, kT] = TT;
          const WT = Ok(IT, kT),
            XT = WT > oT ? WT : null,
            BT = II[IT],
            FT = null === XT && zT.has(kT);
          return (0, mk.jsxs)("li", {
            className: gz()("Baf2Recipe", {
              Locked: null !== XT,
              Far: ek(XT, oT)
            }),
            children: [FT && (0, mk.jsx)(Ck, {}), (0, mk.jsx)(uk, {
              item: IT,
              amount: 1
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, mk.jsx)(uk, {
              item: kT,
              amount: 1
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeName",
              children: Tk(iT, kT)
            }), void 0 !== BT && (0, mk.jsx)("span", {
              className: "Baf2RecipeMore",
              children: iT("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / BT)
              })
            }), null !== XT && (0, mk.jsx)(Ek, {
              tier: XT
            })]
          }, IT)
        }))
      })
    }

    function Pk(TT) {
      var oT;
      let {
        def: IT,
        seconds: iT
      } = TT;
      const {
        t: zT
      } = (0, ez.t)();
      return (0, mk.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, mk.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (oT = IT.fuels) && void 0 !== oT ? oT : []).map((TT => (0, mk.jsx)(uk, {
            item: TT,
            amount: 1
          }, TT))), (0, mk.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, mk.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, mk.jsx)(Rz.e, {
              name: "bolt"
            }), zT("buildAFactory2Game:recipePower", {
              power: PT(IT.powerMade),
              seconds: iT
            })]
          })]
        })
      })
    }

    function dk(TT) {
      let {
        def: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)();
      return (0, mk.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, mk.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mk.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, mk.jsx)(Rz.e, {
              name: "bolt"
            }), IT("buildAFactory2Game:recipeMixer", {
              cryo: Kk((0, dT.F)(oT, oT.cryoMade), "")
            })]
          })
        })
      })
    }

    function Vk(TT) {
      let {
        def: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)();
      return (0, mk.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, mk.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mk.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, mk.jsx)(Rz.e, {
              name: "bolt"
            }), IT("buildAFactory2Game:recipeCondenser", {
              power: Kk((0, dT.F)(oT, oT.powerPerOp), ""),
              water: Kk((0, dT.F)(oT, oT.fluidMade), "")
            })]
          })
        })
      })
    }

    function TW(TT) {
      let {
        kind: oT,
        def: IT,
        input: iT,
        tier: zT,
        noSeeds: kT = !1
      } = TT;
      const WT = String(IT.opMs / 1e3);
      return No(IT) ? (0, mk.jsx)(tk, {
        seconds: WT
      }) : IT.field ? (0, mk.jsx)(Gk, {
        fertilised: null !== iT
      }) : IT.table ? (0, mk.jsx)(pk, {
        tier: zT,
        seconds: WT
      }) : IT.recycles ? (0, mk.jsxs)(mk.Fragment, {
        children: [(0, mk.jsx)(bk, {
          tier: zT,
          seconds: WT,
          noSeeds: kT
        }), (0, mk.jsx)(yk, {
          tier: zT,
          seconds: WT
        })]
      }) : yo(IT) ? (0, mk.jsx)(Nk, {
        tier: zT,
        seconds: WT
      }) : void 0 !== IT.fluidMade ? (0, mk.jsx)(Vk, {
        def: IT
      }) : void 0 !== IT.cryoMade ? (0, mk.jsx)(dk, {
        def: IT
      }) : void 0 !== IT.powerMade ? (0, mk.jsx)(Pk, {
        def: IT,
        seconds: WT
      }) : (0, mk.jsx)(oW, {
        kind: oT,
        input: iT,
        tier: zT,
        seconds: WT
      })
    }

    function oW(TT) {
      let {
        kind: oT,
        input: IT,
        tier: iT,
        seconds: zT
      } = TT;
      const {
        t: kT
      } = (0, ez.t)(), WT = Nz(), XT = Zk(function(TT) {
        const oT = new Map;
        for (const zT of TT) {
          var IT, iT;
          const TT = [zT.output, zT.outputAmount, zT.inputAmount, null === (IT = zT.bonus) || void 0 === IT ? void 0 : IT.item, null === (iT = zT.bonus) || void 0 === iT ? void 0 : iT.chance].join("|"),
            kT = oT.get(TT);
          kT ? kT.inputs.push(zT.input) : oT.set(TT, {
            inputs: [zT.input],
            inputAmount: zT.inputAmount,
            output: zT.output,
            outputAmount: zT.outputAmount,
            bonus: zT.bonus
          })
        }
        return [...oT.values()]
      }(nk(oT, iT).filter(kI)), (TT => Qk(TT.output))).filter((TT => qk(Qk(TT.output), iT, Hk(TT.output))));
      return (0, mk.jsx)(jk, {
        title: kT("buildAFactory2Game:recipesEach", {
          seconds: zT
        }),
        count: XT.length,
        children: XT.map((TT => {
          const oT = null !== IT && TT.inputs.includes(IT),
            zT = TT.inputs.length > 3 ? [oT ? IT : TT.inputs[0]] : TT.inputs,
            XT = Qk(TT.output) > iT ? Qk(TT.output) : null,
            BT = null === XT && WT.has(TT.output);
          return (0, mk.jsxs)("li", {
            className: gz()("Baf2Recipe", {
              InUse: oT,
              Locked: null !== XT,
              Far: ek(XT, iT)
            }),
            children: [BT && (0, mk.jsx)(Ck, {}), zT.map(((oT, IT) => (0, mk.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [IT > 0 && (0, mk.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, mk.jsx)(uk, {
                item: oT,
                amount: TT.inputAmount
              })]
            }, oT))), zT.length < TT.inputs.length && (0, mk.jsx)(vk, {
              label: kT("buildAFactory2Game:recipeMore", {
                count: String(TT.inputs.length - zT.length)
              }),
              names: TT.inputs.filter((TT => !zT.includes(TT))).map((TT => Tk(kT, TT)))
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, mk.jsx)(uk, {
              item: TT.output,
              amount: TT.outputAmount
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeName",
              children: Tk(kT, TT.output)
            }), TT.bonus && (0, mk.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [kT("buildAFactory2Game:recipeBonus", {
                percent: Rk(TT.bonus.chance)
              }), (0, mk.jsx)(uk, {
                item: TT.bonus.item,
                amount: 1
              })]
            }), null !== XT && (0, mk.jsx)(Ek, {
              tier: XT
            })]
          }, `${TT.output}|${TT.inputs[0]}`)
        }))
      })
    }

    function IW(TT) {
      let {
        taught: oT,
        tier: IT
      } = TT;
      const {
        t: iT
      } = (0, ez.t)(), zT = Nz(), kT = Zk(Object.values(Zo), (TT => TT.tier)).filter((TT => qk(TT.tier, IT)));
      return (0, mk.jsx)(jk, {
        title: iT("buildAFactory2Game:benchCanMake"),
        count: kT.length,
        startOpen: !1,
        children: kT.map((TT => {
          const kT = TT.tier > IT,
            WT = !kT && zT.has(TT.output);
          return (0, mk.jsxs)("li", {
            className: gz()("Baf2Recipe", {
              InUse: TT.output === oT,
              Locked: kT,
              Far: ek(kT ? TT.tier : null, IT)
            }),
            children: [WT && (0, mk.jsx)(Ck, {}), (0, mk.jsx)(uk, {
              item: TT.output,
              amount: TT.outputAmount
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeName",
              children: Tk(iT, TT.output)
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), TT.inputs.map((TT => (0, mk.jsx)(uk, {
              item: TT.item,
              amount: TT.amount
            }, TT.item))), kT && (0, mk.jsx)(Ek, {
              tier: TT.tier
            })]
          }, TT.output)
        }))
      })
    }
    var iW, zW, kW, WW, XW;
    const BW = vo.Generator,
      FW = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      SW = 1e3 * (null !== (iW = BW.powerMade) && void 0 !== iW ? iW : 0) / BW.opMs,
      DW = Math.min(...(null !== (zW = BW.fuels) && void 0 !== zW ? zW : []).map((TT => TI[TT]))) / 1e3,
      LW = vo["Volt Engine"],
      xW = 1e3 * (null !== (kW = LW.powerMade) && void 0 !== kW ? kW : 0) / LW.opMs,
      cW = TI[null !== (WW = null === (XW = LW.fuels) || void 0 === XW ? void 0 : XW[0]) && void 0 !== WW ? WW : ""] / 1e3;

    function KW(TT) {
      let {
        item: oT,
        label: IT,
        value: iT,
        note: zT,
        dim: kT
      } = TT;
      return (0, mk.jsxs)("li", {
        className: gz()("Baf2PowerRow", {
          Dim: kT
        }),
        children: [(0, mk.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, mk.jsx)(uz.c, {
            itemName: oT,
            amount: 0
          })
        }), (0, mk.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, mk.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: IT
          }), zT && (0, mk.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: zT
          })]
        }), (0, mk.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: iT
        })]
      })
    }

    function MW(TT, oT, IT, iT) {
      var zT;
      const kT = void 0 === iT ? vo[TT] : function(TT, oT) {
          if (null === oT) return TT;
          let IT = pT.get(oT);
          return IT || (IT = {
            ...TT,
            powerPerOp: GT(TT, oT),
            farmMob: oT
          }, pT.set(oT, IT)), IT
        }(vo[TT], iT),
        WT = oT && kT.couplable ? Yo(kT, IT) : kT;
      return 1e3 * (null !== (zT = WT.powerPerOp) && void 0 !== zT ? zT : 0) / WT.opMs
    }

    function rW(TT) {
      var oT, IT, iT, zT, kT, WT, XT, BT;
      let {
        message: FT
      } = TT;
      const {
        t: ST
      } = (0, ez.t)(), DT = (TT, oT) => ST("buildAFactory2Game:powerPerSecond", {
        rate: Kk(TT, oT)
      }), [LT, xT] = FT.baf2PowerGenerators, cT = FT.baf2PowerGeneratorFuel, KT = FT.baf2PowerSunPanels, MT = null !== (oT = FT.baf2PowerSunShare) && void 0 !== oT ? oT : 1, rT = FT.baf2PowerVaults, AT = FT.baf2PowerUsers, [gT, hT] = null !== (IT = FT.baf2PowerEngines) && void 0 !== IT ? IT : [0, 0], wT = null !== (iT = FT.baf2PowerEngineCells) && void 0 !== iT ? iT : 0, mT = null !== (zT = FT.baf2PowerPads) && void 0 !== zT ? zT : 0, eT = null !== (kT = FT.baf2PowerCharge) && void 0 !== kT ? kT : 0, [RT, uT] = null !== (WT = FT.baf2PowerReactors) && void 0 !== WT ? WT : [0, 0], [vT, ET] = null !== (XT = FT.baf2PowerBatteries) && void 0 !== XT ? XT : [0, 0];
      let fT = ST("buildAFactory2Game:powerEngineCells", {
        amount: String(wT)
      });
      wT > 0 && hT > 0 && (fT = ST("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(wT),
        time: Ak(ST, wT * cW / hT)
      }));
      let CT = ST("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(cT)
      });
      cT > 0 && xT > 0 && (CT = ST("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(cT),
        time: Ak(ST, cT * DW / xT)
      }));
      const jT = LT + gT + KT + RT;
      return (0, mk.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, mk.jsxs)("section", {
          children: [(0, mk.jsxs)("h3", {
            children: [ST("buildAFactory2Game:powerMaking"), (0, mk.jsx)("span", {
              children: DT(FT.baf2PowerMadePerS, "+")
            })]
          }), (0, mk.jsxs)("ul", {
            children: [0 === jT && (0, mk.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: ST("buildAFactory2Game:powerNoMakers")
            }), LT > 0 && (0, mk.jsx)(KW, {
              item: "Generator",
              label: `${Tk(ST,"Generator")} \xd7${LT}`,
              note: `${ST("buildAFactory2Game:powerRunning",{amount:String(xT)})} \xb7 ${CT}`,
              value: DT(xT * SW, "+"),
              dim: 0 === xT
            }), gT > 0 && (0, mk.jsx)(KW, {
              item: "Volt Engine",
              label: `${Tk(ST,"Volt Engine")} \xd7${gT}`,
              note: `${ST("buildAFactory2Game:powerRunning",{amount:String(hT)})} \xb7 ${fT}`,
              value: DT(hT * xW, "+"),
              dim: 0 === hT
            }), KT > 0 && (0, mk.jsx)(KW, {
              item: "Solar Panel",
              label: `${Tk(ST,"Solar Panel")} \xd7${KT}`,
              note: ST(MT < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: DT(4 * KT * MT, "+")
            }), RT > 0 && (0, mk.jsx)(KW, {
              item: "Reactor Frame",
              label: `${ST("buildAFactory2Game:powerReactors")} \xd7${RT}`,
              note: ST("buildAFactory2Game:powerRunning", {
                amount: String(uT)
              }),
              value: DT(null !== (BT = FT.baf2PowerReactorPerS) && void 0 !== BT ? BT : 0, "+"),
              dim: 0 === uT
            })]
          })]
        }), (0, mk.jsxs)("section", {
          children: [(0, mk.jsxs)("h3", {
            children: [ST("buildAFactory2Game:powerStorage"), (0, mk.jsx)("span", {
              children: PT(FT.baf2PowerCap)
            })]
          }), (rT > 0 || vT > 0) && (0, mk.jsxs)("ul", {
            children: [rT > 0 && (0, mk.jsx)(KW, {
              item: "Charge Vault",
              label: `${Tk(ST,"Charge Vault")} \xd7${rT}`,
              value: `+${PT(8e3*rT)}`
            }), vT > 0 && (0, mk.jsx)(KW, {
              item: "Battery Cell",
              label: `${ST("buildAFactory2Game:powerBatteries")} \xd7${vT}`,
              value: `+${PT(ET)}`
            })]
          })]
        }), (0, mk.jsxs)("section", {
          children: [(0, mk.jsxs)("h3", {
            children: [ST("buildAFactory2Game:powerUsing"), (0, mk.jsx)("span", {
              children: DT(FT.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, mk.jsxs)("ul", {
            children: [0 === AT.length && 0 === mT && 0 === eT && (0, mk.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: ST("buildAFactory2Game:powerNoUsers")
            }), AT.map((TT => {
              let [oT, IT, iT, zT, kT = 1, WT] = TT, XT = IT ? ST(FW[kT - 1], {
                name: Tk(ST, oT)
              }) : Tk(ST, oT);
              return void 0 !== WT && (XT = ST("buildAFactory2Game:powerFarmName", {
                name: XT,
                mob: ST(lT(WT))
              })), (0, mk.jsx)(KW, {
                item: oT,
                label: `${XT} \xd7${iT}`,
                note: ST("buildAFactory2Game:powerRunning", {
                  amount: String(zT)
                }),
                value: zT > 0 ? DT(zT * MW(oT, IT, kT, WT), "\u2212") : ST("buildAFactory2Game:powerIdle"),
                dim: 0 === zT
              }, `${oT}|${IT}|${kT}|${WT}`)
            })), mT > 0 && (0, mk.jsx)(KW, {
              item: "Charging Pad",
              label: `${Tk(ST,"Charging Pad")} \xd7${mT}`,
              value: ST("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), eT > 0 && (0, mk.jsx)(KW, {
              item: "Homestead Core",
              label: ST("buildAFactory2Game:powerCharge"),
              value: DT(eT, "\u2212")
            }), FT.baf2PowerStarved > 0 && (0, mk.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, mk.jsx)(Rz.e, {
                name: "triangle-exclamation"
              }), ST("buildAFactory2Game:powerStarved", {
                amount: String(FT.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var AW = IT(4050),
      gW = IT(1408);
    class hW {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(TT) {
        this.message = TT;
        for (const oT of this.listeners) oT()
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
    class wW extends hW {}

    function mW(TT, oT) {
      const IT = () => {
          const IT = TT.get();
          if (!IT || !oT) return IT;
          const [iT, zT, kT] = IT.baf2PowerAt;
          return iT === oT[0] && zT === oT[1] && kT === oT[2] ? IT : null
        },
        [zT, kT] = (0, iT.useState)(IT);
      return (0, iT.useEffect)((() => (kT(IT()), TT.subscribe((() => {
        kT(IT())
      })))), [TT, ...null !== oT && void 0 !== oT ? oT : []]), zT
    }

    function eW(TT) {
      return {
        stored: TT.baf2PowerStored,
        cap: TT.baf2PowerCap,
        madePerS: TT.baf2PowerMadePerS,
        usedPerS: TT.baf2PowerUsedPerS
      }
    }

    function RW(TT) {
      let {
        stored: oT,
        cap: IT
      } = TT;
      return (0, mk.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, mk.jsx)("div", {
          style: {
            width: `${Math.min(100,100*oT/Math.max(1,IT))}%`
          }
        })
      })
    }

    function uW(TT) {
      let {
        figures: oT,
        labelled: IT = !1
      } = TT;
      const {
        t: iT
      } = (0, ez.t)(), zT = oT.madePerS - oT.usedPerS, {
        text: kT,
        draining: WT
      } = function(TT, oT) {
        let {
          stored: IT,
          cap: iT,
          madePerS: zT,
          usedPerS: kT
        } = oT;
        const WT = zT - kT;
        return IT >= iT ? {
          text: TT("buildAFactory2Game:powerFull"),
          draining: !1
        } : WT > .05 ? {
          text: TT("buildAFactory2Game:powerFullIn", {
            time: Ak(TT, (iT - IT) / WT)
          }),
          draining: !1
        } : WT < -.05 ? {
          text: TT("buildAFactory2Game:powerEmptyIn", {
            time: Ak(TT, IT / -WT)
          }),
          draining: !0
        } : {
          text: TT("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(iT, oT);
      return (0, mk.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, mk.jsx)(RW, {
          stored: oT.stored,
          cap: oT.cap
        }), (0, mk.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, mk.jsx)("span", {
            children: iT(IT ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: PT(oT.stored),
              cap: PT(oT.cap)
            })
          }), (0, mk.jsxs)("span", {
            className: gz()("Baf2PowerNet", {
              Draining: WT
            }),
            children: [iT("buildAFactory2Game:powerPerSecond", {
              rate: Kk(Math.abs(zT), zT < 0 ? "\u2212" : "+")
            }), " \xb7 ", kT]
          })]
        })]
      })
    }

    function vW(TT) {
      let {
        stored: oT,
        cap: IT,
        rates: iT
      } = TT;
      const {
        t: zT
      } = (0, ez.t)();
      return iT ? (0, mk.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, mk.jsx)(uW, {
          figures: {
            stored: oT,
            cap: IT,
            madePerS: iT[0],
            usedPerS: iT[1]
          },
          labelled: !0
        })
      }) : (0, mk.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, mk.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, mk.jsx)(RW, {
            stored: oT,
            cap: IT
          }), (0, mk.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, mk.jsx)("span", {
              children: zT("buildAFactory2Game:powerStoredLabelled", {
                stored: PT(oT),
                cap: PT(IT)
              })
            })
          })]
        })
      })
    }

    function EW(TT) {
      let {
        store: oT,
        close: IT
      } = TT;
      const {
        t: iT
      } = (0, ez.t)(), zT = mW(oT);
      return (0, mk.jsx)(AW.e, {
        close: IT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mk.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, mk.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mk.jsxs)("div", {
              children: [(0, mk.jsx)("h2", {
                id: "baf2PowerTitle",
                children: iT("buildAFactory2Game:powerTitle")
              }), (0, mk.jsx)("p", {
                children: iT("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, mk.jsx)(gW.j, {
              onClick: IT
            })]
          }), zT && (0, mk.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, mk.jsx)(uW, {
              figures: eW(zT)
            }), (0, mk.jsx)(rW, {
              message: zT
            })]
          })]
        })
      })
    }

    function fW(TT) {
      var oT;
      let {
        kind: IT,
        def: zT,
        ai: kT,
        power: WT,
        stored: XT,
        cap: BT
      } = TT;
      const {
        t: FT
      } = (0, ez.t)(), ST = mW(WT, kT), [DT, LT] = (0, iT.useState)(!1);
      return (0, mk.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, mk.jsx)(TW, {
          kind: IT,
          def: zT,
          input: null,
          tier: null !== (oT = null === ST || void 0 === ST ? void 0 : ST.baf2PowerTier) && void 0 !== oT ? oT : 1
        }), (0, mk.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: FT("buildAFactory2Game:powerTitle")
        }), ST && (0, mk.jsx)(uW, {
          figures: eW(ST)
        }), !ST && (0, mk.jsx)(vW, {
          stored: XT,
          cap: BT,
          rates: null
        }), ST && (0, mk.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            LT(!DT)
          },
          "aria-expanded": DT,
          children: FT(DT ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), ST && DT && (0, mk.jsx)(rW, {
          message: ST
        })]
      })
    }
    const CW = 2500,
      jW = 17500,
      JW = `${wT} `;
    const UW = ["plan", "throttle"];

    function aW(TT) {
      if (TT.startsWith(`${go} `)) return TT.slice(0, TT.lastIndexOf(" "));
      const oT = TT.split(" ");
      return oT[0] === io && UW.includes(oT[4]) ? oT.slice(0, 5).join(" ") : null
    }
    class YW {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = TT, this.now = oT, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.WzT = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = oT()
      }
      enqueue(TT) {
        this.queue(TT, this.nextTicket());
        const oT = this.WzT + this.pending.length;
        return this.flush(), oT
      }
      track(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const IT = this.nextTicket();
        if (!oT.urgent) return this.queue(TT, IT), this.flush(), IT;
        const {
          supersedes: iT
        } = oT;
        for (let kT = this.pending.length - 1; kT >= this.urgent; kT--) {
          const oT = this.pending[kT];
          (oT.command === TT || null !== iT && void 0 !== iT && iT(oT.command)) && (this.pending.splice(kT, 1), this.markLeft(oT.tickets))
        }
        const zT = this.pending.findIndex((oT => {
          let {
            command: IT
          } = oT;
          return IT === TT
        }));
        return -1 !== zT ? this.pending[zT].tickets.push(IT) : (this.pending.splice(this.urgent, 0, {
          command: TT,
          tickets: [IT]
        }), this.urgent += 1), this.flush(), IT
      }
      leftAt(TT) {
        const oT = this.leftTimes.get(TT);
        return void 0 !== oT ? oT : this.pending.some((oT => {
          let {
            tickets: IT
          } = oT;
          return IT.includes(TT)
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
        var oT;
        return (null === (oT = this.pending.at(-1)) || void 0 === oT ? void 0 : oT.command) === TT
      }
      sent() {
        return this.WzT
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
        const oT = this.now();
        for (const IT of TT) this.leftTimes.set(IT, oT);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(TT, oT) {
        const IT = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === IT || void 0 === IT ? void 0 : IT.command) === TT) return void(! function(TT) {
          return TT === mT || TT.startsWith(`${hT} `) || TT.startsWith(`${nT} `)
        }(TT) ? IT.tickets.push(oT) : (this.pending.pop(), this.markLeft([...IT.tickets, oT])));
        const iT = void 0 === IT ? null : function(TT, oT) {
          const IT = `${VT} `;
          if (!TT.startsWith(IT) || !oT.startsWith(IT)) return null;
          const iT = Io(TT.slice(IT.length)),
            zT = Io(oT.slice(IT.length));
          return iT && zT && iT.item === zT.item ? oo(zT.seq, function(TT, oT) {
            const IT = TT => "number" === typeof TT ? TT : "one" === TT ? 1 : 99;
            return "fill" === TT || "fill" === oT ? "fill" : IT(TT) + IT(oT)
          }(iT.mode, zT.mode), zT.item) : null
        }(IT.command, TT);
        if (null !== iT && void 0 !== IT) return IT.command = iT, void IT.tickets.push(oT);
        const zT = aW(TT);
        if (null !== zT && void 0 !== IT && aW(IT.command) === zT) return IT.command = TT, void IT.tickets.push(oT);
        if (null !== IT && void 0 !== IT && IT.command.startsWith(JW) && TT.startsWith(JW)) {
          const iT = TT.slice(JW.length);
          if (IT.command.slice(JW.length).split(",").includes(iT)) return void IT.tickets.push(oT);
          const zT = `${IT.command},${iT}`;
          if (zT.length <= 119) return IT.command = zT, void IT.tickets.push(oT)
        }
        this.pending.push({
          command: TT,
          tickets: [oT]
        })
      }
      flush() {
        const TT = this.now();
        for (this.tokens = Math.min(5, this.tokens + (TT - this.refilledAt) / CW), this.refilledAt = TT; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.WzT += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: TT,
            tickets: oT
          } = this.pending.shift();
          this.markLeft(oT), this.send(TT)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * CW)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class QW {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new YW(TT, oT)
      }
      send(TT) {
        return this.queue.enqueue(TT)
      }
      sent() {
        return this.queue.sent()
      }
      track(TT, oT) {
        return this.queue.track(TT, oT)
      }
      leftAt(TT) {
        return this.queue.leftAt(TT)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(TT) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = oT, this.send(TT), this.islandEdits.count
      }
      syncIslandEdits(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: IT
        } = this, iT = oT - IT.lastAtMs < jW;
        IT.count = iT ? Math.max(IT.count, TT) : TT
      }
      clear() {
        this.queue.clear()
      }
    }
    const OW = (0, iT.createContext)(null);

    function HW() {
      const TT = (0, iT.useContext)(OW);
      if (!TT) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return TT
    }

    function nW(TT, oT) {
      return null !== oT && void 0 !== oT ? oT : 1 === TT
    }

    function qW(TT, oT) {
      return TT.every((TT => {
        var IT;
        let [iT, , zT] = TT;
        return !nW(zT, null === (IT = oT.get(iT)) || void 0 === IT ? void 0 : IT.qx)
      }))
    }

    function ZW(TT, oT, IT) {
      if (0 === TT.size) return TT;
      const iT = new Map(TT);
      for (const [zT, kT] of TT) {
        const TT = oT.find((TT => {
          let [oT] = TT;
          return oT === zT
        }));
        (!TT || kT.qx === (1 === TT[2]) || kT.atMs < IT) && iT.delete(zT)
      }
      return iT
    }

    function lW(TT) {
      var oT;
      let {
        ai: IT,
        input: zT,
        drops: kT,
        seconds: WT
      } = TT;
      const {
        t: XT
      } = (0, ez.t)(), BT = HW(), [FT, ST] = (0, iT.useState)(new Map);
      (0, iT.useEffect)((() => {
        kT && ST((TT => ZW(TT, kT, Date.now() - jW)))
      }), [kT]), (0, iT.useEffect)((() => {
        const TT = function(TT, oT) {
          let IT = null;
          for (const {
              atMs: iT
            }
            of TT.values()) IT = null === IT ? iT : Math.min(IT, iT);
          return null === IT ? null : IT + oT
        }(FT, jW);
        if (null === TT || !kT) return;
        const oT = setTimeout((() => {
          ST((TT => ZW(TT, kT, Date.now() - jW)))
        }), Math.max(0, TT - Date.now()) + 1);
        return () => {
          clearTimeout(oT)
        }
      }), [FT, kT]);
      const DT = sT(zT),
        LT = null !== DT && null !== kT && qW(kT, FT),
        xT = function(TT, oT, IT) {
          return null === TT || null === oT || qW(oT, IT) ? 0 : HT[QT[TT]]
        }(DT, kT, FT);
      return (0, mk.jsxs)(jk, {
        title: XT("buildAFactory2Game:farmDropsTitle", {
          seconds: WT
        }),
        count: null !== (oT = null === kT || void 0 === kT ? void 0 : kT.length) && void 0 !== oT ? oT : 0,
        children: [xT > 0 && (0, mk.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: XT("buildAFactory2Game:farmDropsPower", {
            power: String(xT)
          })
        }), (null === DT || !kT) && (0, mk.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: XT("buildAFactory2Game:farmDropsEmpty")
        }), LT && (0, mk.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: XT("buildAFactory2Game:farmDropsAllVoided")
        }), null !== DT && (null === kT || void 0 === kT ? void 0 : kT.map((TT => {
          var oT;
          let [iT, zT, kT] = TT;
          const WT = zT < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            DT = nW(kT, null === (oT = FT.get(iT)) || void 0 === oT ? void 0 : oT.qx);
          return (0, mk.jsxs)("li", {
            className: gz()("Baf2Recipe Baf2FarmDrop", {
              Voided: !DT
            }),
            children: [(0, mk.jsx)(uk, {
              item: iT,
              amount: 1
            }), (0, mk.jsx)("span", {
              className: "Baf2RecipeName",
              children: Tk(XT, iT)
            }), (0, mk.jsx)("span", {
              className: "Baf2FarmRate",
              children: XT(WT, {
                amount: String(zT)
              })
            }), (0, mk.jsx)("button", {
              type: "button",
              className: gz()("Baf2FarmToggle SmallTextBold", {
                Kept: DT
              }),
              "aria-pressed": DT,
              onClick: () => {
                ST(new Map(FT).set(iT, {
                  qx: !DT,
                  atMs: Date.now()
                })), BT.send(function(TT, oT, IT, iT) {
                  return `${nT} ${TT} ${oT} ${IT} ${iT}`
                }(IT[0], IT[1], IT[2], iT))
              },
              children: XT(DT ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, iT)
        })))]
      })
    }
    var sW;
    const tW = String(null !== (sW = vo.Synthesizer.waterPerOp) && void 0 !== sW ? sW : 0);

    function GW(TT) {
      let {
        ai: oT,
        taught: IT
      } = TT;
      const {
        t: zT
      } = (0, ez.t)(), kT = HW(), [WT, XT] = (0, iT.useState)(null);
      (0, iT.useEffect)((() => {
        null !== WT && IT === WT && XT(null)
      }), [WT, IT]);
      const BT = null !== WT && void 0 !== WT ? WT : IT;
      let FT = zT("buildAFactory2Game:synthPick");
      return null !== BT && (FT = zT("buildAFactory2Game:synthGrows", {
        name: Tk(zT, BT),
        input: Tk(zT, Mo),
        water: tW
      })), (0, mk.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, mk.jsx)("div", {
          className: gz()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === BT
          }),
          children: FT
        }), (0, mk.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: ro.map(((TT, IT) => {
            const iT = Tk(zT, TT),
              WT = TT === BT;
            return (0, mk.jsx)("li", {
              children: (0, mk.jsx)("button", {
                type: "button",
                className: gz()("Baf2SynthTile", {
                  Selected: WT
                }),
                title: iT,
                "aria-label": iT,
                "aria-pressed": WT,
                onClick: () => {
                  WT || (XT(TT), kT.send(`${go} ${oT[0]} ${oT[1]} ${oT[2]} ${IT}`))
                },
                children: (0, mk.jsx)(uz.c, {
                  itemName: TT,
                  amount: 0
                })
              })
            }, TT)
          }))
        })]
      })
    }
    const pW = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function bW(TT) {
      let {
        kind: oT,
        tier: IT,
        coupled: iT,
        level: zT,
        slot: kT
      } = TT;
      const {
        t: WT
      } = (0, ez.t)(), BT = NT(fo);
      if (!iT && null !== IT && IT < BT) return (0, mk.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, mk.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, mk.jsx)(Rz.e, {
            name: "lock"
          })
        }), (0, mk.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: WT("buildAFactory2Game:upgradeLocked")
        }), (0, mk.jsx)("span", {
          className: "Baf2TierTag",
          children: WT("buildAFactory2Game:tierTag", {
            tier: String(BT)
          })
        })]
      });
      const FT = function(TT, oT) {
          if (XT() && "Crusher" !== TT && null !== oT) {
            if (yW(jo, oT)) return {
              item: jo,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (yW(Co, oT)) return {
              item: Co,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: fo,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(oT, IT),
        ST = WT(iT ? pW[zT - 1] : FT.emptyKey),
        DT = null !== IT ? function(TT, oT, IT, iT) {
          if (!XT() || !IT || "Crusher" === TT || oT < 10) return null;
          const zT = NT(jo);
          if (iT < 3 && zT > 1 && (2 === iT || oT >= zT)) return {
            tier: zT,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const kT = NT(Co);
          if (1 === iT && kT > 1) return {
            tier: kT,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(oT, IT, iT, zT) : null;
      return (0, mk.jsxs)("div", {
        className: gz()("Baf2UpgradeSocket", {
          Fitted: iT
        }),
        children: [(0, mk.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [iT && kT, !iT && (0, mk.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, mk.jsx)(uz.c, {
              itemName: FT.item,
              amount: 0
            })
          })]
        }), (0, mk.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, mk.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: WT("buildAFactory2Game:upgradeTitle")
          }), (0, mk.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: ST
          }), iT && zT >= 2 && "Crusher" === oT && (0, mk.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: WT("buildAFactory2Game:couplerCrusherHint")
          }), DT && null !== IT && IT < DT.tier && (0, mk.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, mk.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, mk.jsx)(Rz.e, {
                name: "lock"
              })
            }), WT(DT.lockedKey), (0, mk.jsx)("span", {
              className: "Baf2TierTag",
              children: WT("buildAFactory2Game:tierTag", {
                tier: String(DT.tier)
              })
            })]
          }), DT && null !== IT && IT >= DT.tier && (0, mk.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: WT(DT.nextKey)
          })]
        })]
      })
    }

    function yW(TT, oT) {
      const IT = NT(TT);
      return IT > 1 && oT >= IT
    }
    var NW = IT(35995);
    const PW = (0, dT.F)(vo.Condenser, vo.Condenser.fluidMade),
      dW = .05;
    class VW extends hW {}

    function TX(TT) {
      return Kk(TT, "")
    }

    function oX(TT, oT, IT) {
      return TT(oT ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: IT
      })
    }

    function IX(TT, oT, IT, iT) {
      return IT <= dW && iT <= dW ? null : iT <= dW || IT <= dW ? oX(TT, oT, iT <= dW ? Kk(IT, "+") : Kk(iT, "\u2212")) : TT(oT ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: TX(IT),
        used: TX(iT)
      })
    }

    function iX(TT, oT) {
      return Math.min(100, 100 * TT / Math.max(1, oT))
    }

    function zX(TT) {
      let {
        stored: oT,
        cap: IT,
        netPerS: iT,
        rates: zT,
        cryo: kT
      } = TT;
      const {
        t: WT
      } = (0, ez.t)(), XT = function(TT, oT, IT, iT) {
        return IT <= 0 ? TT("buildAFactory2Game:waterNoStorage") : oT >= IT ? TT("buildAFactory2Game:powerFull") : iT > dW ? TT("buildAFactory2Game:powerFullIn", {
          time: Ak(TT, (IT - oT) / iT)
        }) : iT < -.05 ? oT <= 0 ? TT("buildAFactory2Game:waterEmpty") : TT("buildAFactory2Game:powerEmptyIn", {
          time: Ak(TT, oT / -iT)
        }) : TT("buildAFactory2Game:powerSteady")
      }(WT, oT, IT, iT), BT = IT > 0 && oT < IT && Math.abs(iT) <= dW, FT = WT(kT ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), ST = null !== zT ? `${zT} \xb7 ${XT}` : BT ? FT : `${FT} \xb7 ${XT}`;
      return (0, mk.jsxs)(mk.Fragment, {
        children: [(0, mk.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, mk.jsx)("div", {
            style: {
              width: `${iX(oT,IT)}%`
            }
          })
        }), (0, mk.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, mk.jsx)("span", {
            children: IT > 0 && WT("buildAFactory2Game:powerStored", {
              stored: (0, dT.O)(oT),
              cap: (0, dT.O)(IT)
            })
          }), (0, mk.jsx)("span", {
            className: gz()("Baf2WaterNet", {
              Draining: iT < -.05
            }),
            children: ST
          })]
        })]
      })
    }

    function kX(TT) {
      let {
        water: oT,
        at: IT,
        side: iT = null
      } = TT;
      const {
        t: zT
      } = (0, ez.t)(), kT = HW(), [WT, XT, BT] = oT;
      return (0, mk.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, mk.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, mk.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: zT(null === iT ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${iT}`)
          }), (0, mk.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              kT.send(`${dT.C} ${IT[0]} ${IT[1]} ${IT[2]}${"cryoOut"===iT?" cryo":""}`)
            },
            children: zT("buildAFactory2Game:waterDetails")
          })]
        }), (0, mk.jsx)(zX, {
          stored: WT,
          cap: XT,
          netPerS: BT,
          rates: oX(zT, "cryoOut" === iT, Kk(Math.abs(BT), BT < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === iT
        })]
      })
    }

    function WX(TT, oT) {
      var IT, iT, zT;
      const kT = !0 === oT.baf2WaterCryo,
        WT = null !== (IT = null === (iT = oT.baf2WaterMakers.find((TT => TT[0] === (kT ? dT.b : "Condenser")))) || void 0 === iT ? void 0 : iT[1]) && void 0 !== IT ? IT : 0,
        XT = [],
        BT = (oT, IT, iT) => {
          oT > 0 && XT.push(TT(1 === oT ? IT : iT, {
            count: String(oT)
          }))
        };
      return kT ? BT(WT, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : BT(WT, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), BT(null !== (zT = oT.baf2WaterPipes) && void 0 !== zT ? zT : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), BT(oT.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), XT.join(" \xb7 ")
    }

    function XX(TT, oT) {
      if (!0 === oT.baf2WaterCryo) return function(TT, oT) {
        const IT = vo[dT.b];
        switch (oT.baf2WaterThis) {
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
            var iT;
            const [zT, kT] = null !== (iT = oT.baf2WaterThisRates) && void 0 !== iT ? iT : [(0, dT.F)(IT, IT.cryoMade), (0, dT.F)(IT, IT.powerPerOp)];
            return !0 === oT.baf2WaterDriven ? {
              text: TT("buildAFactory2Game:cryoThisMixerDriven", {
                rate: TX(zT)
              }),
              bad: !1
            } : {
              text: TT("buildAFactory2Game:cryoThisMixer", {
                rate: TX(zT),
                power: TX(kT)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: TT("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(TT, oT);
      const IT = !0 === oT.baf2WaterDriven,
        iT = vo.Condenser;
      switch (oT.baf2WaterThis) {
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
              tank: (0, dT.O)(dT.s),
              cap: (0, dT.O)(oT.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var zT;
          const [kT, WT] = null !== (zT = oT.baf2WaterThisRates) && void 0 !== zT ? zT : [PW, (0, dT.F)(iT, iT.powerPerOp)];
          return IT ? {
            text: TT("buildAFactory2Game:waterThisCondenserDriven", {
              rate: TX(kT)
            }),
            bad: !1
          } : {
            text: TT("buildAFactory2Game:waterThisCondenser", {
              rate: TX(kT),
              power: TX(WT)
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

    function BX(TT, oT) {
      const IT = oT.baf2WaterMakers.some((TT => !0 === TT[5]));
      if (!0 === oT.baf2WaterCryo) {
        const iT = oT.baf2WaterUsedPerS - oT.baf2WaterMadePerS,
          zT = IT || iT <= dW ? 0 : (0, dT.E)(iT);
        return 0 === zT ? null : zT > 1 ? TT("buildAFactory2Game:cryoNextMixers", {
          mixers: String(zT)
        }) : TT("buildAFactory2Game:cryoNextOne")
      }
      const iT = IT ? null : function(TT, oT) {
        const IT = oT - TT;
        return IT <= dW ? null : Math.ceil(IT / PW)
      }(oT.baf2WaterMadePerS, oT.baf2WaterUsedPerS);
      return null === iT ? null : iT > 1 ? TT("buildAFactory2Game:waterNextCondensers", {
        condensers: String(iT)
      }) : TT("buildAFactory2Game:waterNextOne")
    }

    function FX(TT) {
      let {
        item: oT,
        label: IT,
        note: iT,
        value: zT,
        dim: kT,
        bad: WT
      } = TT;
      return (0, mk.jsxs)("li", {
        className: gz()("Baf2WaterRow", {
          Dim: kT,
          Bad: WT
        }),
        children: [(0, mk.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, mk.jsx)(uz.c, {
            itemName: oT,
            amount: 0
          })
        }), (0, mk.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, mk.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: IT
          }), iT && (0, mk.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: iT
          })]
        }), (0, mk.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: zT
        })]
      })
    }

    function SX(TT) {
      return NW.p[TT] ? TT : "Reactor Port"
    }

    function DX(TT) {
      let {
        message: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)(), iT = !0 === oT.baf2WaterCryo, zT = (TT, oT) => oX(IT, iT, Kk(TT, oT));
      return (0, mk.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, mk.jsxs)("section", {
          children: [(0, mk.jsxs)("h3", {
            children: [IT("buildAFactory2Game:waterMakes"), (0, mk.jsx)("span", {
              children: zT(oT.baf2WaterMadePerS, "+")
            })]
          }), (0, mk.jsxs)("ul", {
            children: [0 === oT.baf2WaterMakers.length && (0, mk.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: IT(iT ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), oT.baf2WaterMakers.map((TT => {
              let [oT, iT, kT, WT, XT, BT] = TT;
              const FT = IT("buildAFactory2Game:powerRunning", {
                amount: String(kT)
              });
              let ST = XT > 0 ? IT("buildAFactory2Game:waterMakerPower", {
                running: FT,
                power: TX(XT)
              }) : FT;
              return BT && (ST = IT(0 === kT && WT <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, mk.jsx)(FX, {
                item: oT,
                label: `${Tk(IT,oT)} \xd7${iT}`,
                note: ST,
                value: kT > 0 || BT && WT > 0 ? zT(WT, "+") : IT("buildAFactory2Game:powerIdle"),
                dim: 0 === kT && !BT,
                bad: BT
              }, oT)
            }))]
          })]
        }), (0, mk.jsxs)("section", {
          children: [(0, mk.jsxs)("h3", {
            children: [IT("buildAFactory2Game:waterUses"), (0, mk.jsx)("span", {
              children: zT(oT.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, mk.jsxs)("ul", {
            children: [0 === oT.baf2WaterUsers.length && (0, mk.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: IT(iT ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), oT.baf2WaterUsers.map((TT => {
              let [oT, iT, kT, WT] = TT;
              const XT = NW.p[oT] ? Tk(IT, oT) : oT;
              return (0, mk.jsx)(FX, {
                item: SX(oT),
                label: iT > 1 ? `${XT} \xd7${iT}` : XT,
                note: WT ? IT("buildAFactory2Game:waterPortFirst") : void 0,
                value: kT > 0 ? zT(kT, "\u2212") : IT("buildAFactory2Game:powerIdle"),
                dim: 0 === kT
              }, oT)
            }))]
          })]
        })]
      })
    }

    function LX(TT) {
      var oT, IT, zT, kT, WT;
      let {
        store: XT,
        close: BT
      } = TT;
      const {
        t: FT
      } = (0, ez.t)(), ST = function(TT) {
        const [oT, IT] = (0, iT.useState)((() => TT.get()));
        return (0, iT.useEffect)((() => (IT(TT.get()), TT.subscribe((() => {
          IT(TT.get())
        })))), [TT]), oT
      }(XT), DT = null !== (oT = null === ST || void 0 === ST ? void 0 : ST.baf2WaterStored) && void 0 !== oT ? oT : 0, LT = null !== (IT = null === ST || void 0 === ST ? void 0 : ST.baf2WaterCap) && void 0 !== IT ? IT : 0, xT = null !== (zT = null === ST || void 0 === ST ? void 0 : ST.baf2WaterMadePerS) && void 0 !== zT ? zT : 0, cT = null !== (kT = null === ST || void 0 === ST ? void 0 : ST.baf2WaterUsedPerS) && void 0 !== kT ? kT : 0, KT = null !== (WT = null === ST || void 0 === ST ? void 0 : ST.baf2WaterNetPerS) && void 0 !== WT ? WT : xT - cT, MT = ST && XX(FT, ST), rT = ST && BX(FT, ST), AT = !0 === (null === ST || void 0 === ST ? void 0 : ST.baf2WaterCryo);
      return (0, mk.jsx)(AW.e, {
        close: BT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mk.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, mk.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mk.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== ST && LT <= 0 ? (0, mk.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, mk.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, mk.jsx)(uz.c, {
                  itemName: AT ? FI.f : dT.k,
                  amount: 0
                })
              }), (0, mk.jsxs)("div", {
                children: [(0, mk.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: FT(AT ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), ST && (0, mk.jsx)("p", {
                  children: WX(FT, ST)
                })]
              })]
            }), (0, mk.jsx)(gW.j, {
              onClick: BT
            })]
          }), ST && MT && (0, mk.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, mk.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, mk.jsx)(zX, {
                stored: DT,
                cap: LT,
                netPerS: KT,
                cryo: AT,
                rates: IX(FT, AT, xT, cT)
              })
            }), (0, mk.jsx)("div", {
              className: gz()("Baf2WaterThis", {
                Bad: MT.bad
              }),
              children: MT.text
            }), ST.baf2WaterDriven && (0, mk.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, mk.jsx)(Rz.e, {
                name: "bolt"
              }), FT(AT ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), rT && (0, mk.jsx)("p", {
              className: "Baf2WaterNext",
              children: rT
            }), (0, mk.jsx)(DX, {
              message: ST
            })]
          })]
        })
      })
    }
    class xX {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(TT, oT) {
        const IT = this.get(TT);
        IT && null === oT.opLeftMs && null === oT.fuelLeftMs && oT.status === IT.status ? oT = {
          ...oT,
          opLeftMs: IT.opLeftMs,
          fuelLeftMs: IT.fuelLeftMs,
          burning: IT.burning
        } : this.updates++, this.pos = TT, this.view = oT;
        for (const iT of this.listeners) iT()
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

    function cX(TT, oT, IT, iT) {
      return "noFuel" === oT && iT && !Vo(vo[TT]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === oT && !0 === (null === IT || void 0 === IT ? void 0 : IT.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === oT && !0 === (null === IT || void 0 === IT ? void 0 : IT.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === oT && !0 === (null === IT || void 0 === IT ? void 0 : IT.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === oT && !0 === (null === IT || void 0 === IT ? void 0 : IT.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : KX(oT, IT) ? "buildAFactory2Game:machineStatus_noInputShort" : function(TT, oT) {
        const IT = vo[TT];
        if ("noFuel" === oT && void 0 !== IT.fuels) return Vo(IT) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (IT.mobFarm && ("noInput" === oT || "badInput" === oT)) return `buildAFactory2Game:machineStatus_${oT}MobFarm`;
        if ("outputFull" === oT && (void 0 !== IT.table || IT.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === oT && no(IT)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== IT.cryoMade && ("noInput" === oT || "noOutlet" === oT || "fluidFull" === oT)) return `buildAFactory2Game:machineStatus_${oT}Mixer`;
        return `buildAFactory2Game:machineStatus_${oT}`
      }(TT, oT)
    }

    function KX(TT, oT) {
      return "noInput" === TT && null !== oT && void 0 !== oT && oT.input && oT.inputShort ? {
        input: oT.input,
        short: oT.inputShort
      } : null
    }

    function MX(TT) {
      return hz(TT) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== TT.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function rX(TT) {
      const oT = (0, aT.re)(TT);
      return `Baf2Pane Baf2Pane${oT.charAt(0).toUpperCase()}${oT.slice(1)}`
    }

    function AX(TT, oT) {
      const [IT, zT] = (0, iT.useState)((() => TT.get(oT)));
      return (0, iT.useEffect)((() => {
        zT(TT.get(oT));
        const IT = TT.subscribe((() => {
          zT(TT.get(oT))
        }));
        return () => {
          IT(), TT.forget(oT)
        }
      }), [TT, ...oT]), IT
    }

    function gX(TT, oT, IT, iT) {
      const zT = vo[TT],
        kT = oT && zT.couplable ? Yo(zT, IT) : zT,
        WT = null !== iT && yo(kT) ? function(TT, oT) {
          var IT;
          return null !== (IT = null !== oT && yo(TT) ? II[oT] : void 0) && void 0 !== IT ? IT : TT.opMs
        }(kT, iI(iT)) : kT.opMs;
      return WT === kT.opMs ? kT : {
        ...kT,
        opMs: WT
      }
    }

    function hX(TT) {
      let {
        running: oT,
        opMs: IT,
        opLeftMs: iT,
        updateCount: zT
      } = TT;
      return (0, mk.jsx)("div", {
        className: gz()("Baf2MachineProgress", {
          Running: oT
        }),
        children: (0, mk.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: IT / 1e3 + "s",
            animationDelay: null === iT ? void 0 : (iT - IT) / 1e3 + "s"
          }
        }, zT)
      })
    }

    function wX(TT) {
      let {
        running: oT,
        leftMs: IT,
        periodMs: iT,
        updateCount: zT
      } = TT;
      const {
        t: kT
      } = (0, ez.t)(), WT = Math.min(Math.max(null !== IT && void 0 !== IT ? IT : 0, 0), iT), XT = oT && WT > 0, BT = kT("buildAFactory2Game:machineBarFuel");
      return (0, mk.jsx)("div", {
        className: gz()("Baf2FuelBurn", {
          Draining: XT
        }),
        role: "img",
        title: BT,
        "aria-label": BT,
        children: (0, mk.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: XT ? {
            animationDuration: iT / 1e3 + "s",
            animationDelay: (WT - iT) / 1e3 + "s"
          } : {
            transform: `scaleY(${WT/iT})`
          }
        }, zT)
      })
    }

    function mX(TT, oT, IT) {
      let [iT, zT] = IT;
      const kT = 1 !== iT ? mz(oT) : null;
      return {
        amount: iT,
        have: zT,
        item: TT(kT || Vz(oT))
      }
    }

    function eX(TT) {
      return yo(TT) ? "buildAFactory2Game:machineBarMining" : No(TT) ? "buildAFactory2Game:machineBarCutting" : void 0 !== TT.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function RX(TT) {
      var oT, IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT, rT, AT, gT;
      let {
        kind: hT,
        ai: wT,
        store: mT,
        power: eT,
        renderSlot: RT
      } = TT;
      const {
        t: uT
      } = (0, ez.t)(), vT = AX(mT, wT), ET = vo[hT], fT = null !== (oT = null === vT || void 0 === vT ? void 0 : vT.coupled) && void 0 !== oT && oT, CT = null !== (IT = null === vT || void 0 === vT ? void 0 : vT.couplerLevel) && void 0 !== IT ? IT : 1, jT = gX(hT, fT, CT, null !== (iT = null === vT || void 0 === vT || null === (zT = vT.dug) || void 0 === zT ? void 0 : zT.item) && void 0 !== iT ? iT : null), JT = null !== (kT = null === vT || void 0 === vT ? void 0 : vT.status) && void 0 !== kT ? kT : null, UT = null !== (WT = null === vT || void 0 === vT ? void 0 : vT.power) && void 0 !== WT ? WT : null, aT = null !== (XT = null === vT || void 0 === vT ? void 0 : vT.opLeftMs) && void 0 !== XT ? XT : null, YT = null !== (BT = null === vT || void 0 === vT ? void 0 : vT.dug) && void 0 !== BT ? BT : null, QT = null !== YT && yo(ET) ? II[null !== (FT = iI(YT.item)) && void 0 !== FT ? FT : ""] : void 0, OT = void 0 === QT ? null : 6e4 / QT, HT = null !== (ST = null === vT || void 0 === vT ? void 0 : vT.powerCap) && void 0 !== ST ? ST : 4e3, nT = null !== (DT = null === vT || void 0 === vT ? void 0 : vT.tier) && void 0 !== DT ? DT : null, qT = void 0 !== jT.powerMade, ZT = null !== ET.fuelSlot ? RT(ET.fuelSlot) : null, lT = ao(ET), sT = !fT && !0 === (null === vT || void 0 === vT ? void 0 : vT.fuelFed), GT = !fT && !0 === (null === vT || void 0 === vT ? void 0 : vT.fuelFeeds), pT = null !== ET.fuelSlot && !fT, bT = null !== (LT = null === vT || void 0 === vT ? void 0 : vT.fuelLeftMs) && void 0 !== LT ? LT : null, yT = function(TT, oT, IT) {
        var iT;
        const zT = null === oT ? void 0 : TI[oT];
        return Math.max(null !== (iT = null !== zT && void 0 !== zT ? zT : IT) && void 0 !== iT ? iT : 0, TT.opMs)
      }(jT, null !== (xT = null === vT || void 0 === vT ? void 0 : vT.burning) && void 0 !== xT ? xT : null, bT), NT = null !== (cT = null === vT || void 0 === vT ? void 0 : vT.fuelKeep) && void 0 !== cT ? cT : null, PT = null === JT ? null : cX(hT, JT, vT, sT), dT = null === JT ? null : KX(JT, vT);
      return (0, mk.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, mk.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, mk.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: uT(Vz(hT))
          }), YT && (0, mk.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [uT("Tree Cutter" === hT ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, mk.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, mk.jsx)(uz.c, {
                itemName: YT.item,
                amount: 0
              })
            }), (0, mk.jsx)(vz.c, {
              text: YT.name
            })]
          }), null !== OT && (0, mk.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: uT("buildAFactory2Game:machineDigsFixed", {
              perMin: String(OT)
            })
          }), (null === vT || void 0 === vT ? void 0 : vT.field) && (0, mk.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, mk.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, mk.jsx)(uz.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), uT("buildAFactory2Game:machineField", {
              planted: String(vT.field[0]),
              ripe: String(vT.field[1])
            })]
          }), (0, mk.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, mk.jsxs)("div", {
              className: gz()("Baf2MachineColumn", {
                Baf2Burns: pT
              }),
              children: [null !== jT.inputSlot && (0, mk.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, mk.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: uT(MX(jT))
                }), RT(jT.inputSlot)]
              }), null !== ET.fuelSlot && !fT && (0, mk.jsxs)("div", {
                className: gz()("Baf2MachineSlot", {
                  Baf2FuelFed: sT
                }),
                children: [(0, mk.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [sT && (0, mk.jsx)(Rz.e, {
                    name: "fire"
                  }), uT("buildAFactory2Game:machineFuel")]
                }), (0, mk.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, mk.jsx)(wX, {
                    running: "running" === JT,
                    leftMs: bT,
                    periodMs: yT,
                    updateCount: mT.updateCount
                  }), ZT]
                })]
              }), null !== ET.fuelSlot && fT && (0, mk.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, mk.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: uT("buildAFactory2Game:machineFuel")
                }), (0, mk.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: uT("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": uT("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, mk.jsx)(Rz.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, mk.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, mk.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: uT(eX(jT))
              }), (0, mk.jsx)(hX, {
                running: "running" === JT,
                opMs: jT.opMs,
                opLeftMs: aT,
                updateCount: mT.updateCount
              })]
            }), jT.outputSlots.length > 0 && (0, mk.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, mk.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: uT("buildAFactory2Game:machineOutput")
              }), (0, mk.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: jT.outputSlots.map((TT => (0, mk.jsx)("div", {
                  children: RT(TT)
                }, TT)))
              })]
            }), null !== UT && qT && (0, mk.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, mk.jsx)("div", {
                style: {
                  height: 100 * UT / HT + "%"
                }
              })
            })]
          }), pT && null !== NT && (0, mk.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, mk.jsx)(Rz.e, {
              name: "arrows-rotate"
            }), uT(No(jT) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(NT)
            })]
          }), (sT || GT) && (0, mk.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, mk.jsx)(Rz.e, {
              name: "fire"
            }), uT(sT ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), ET.couplable && (0, mk.jsx)(bW, {
            kind: hT,
            tier: nT,
            coupled: fT,
            level: CT,
            slot: lT === ET.fuelSlot ? ZT : null !== lT ? RT(lT) : null
          }), null !== UT && !qT && !0 === (null === vT || void 0 === vT ? void 0 : vT.reactorPowered) && (0, mk.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: uT("buildAFactory2Game:machineReactorPowered")
          }), null !== UT && !qT && !0 !== (null === vT || void 0 === vT ? void 0 : vT.reactorPowered) && (0, mk.jsx)(vW, {
            stored: UT,
            cap: HT,
            rates: null !== (KT = null === vT || void 0 === vT ? void 0 : vT.powerRates) && void 0 !== KT ? KT : null
          }), (null === vT || void 0 === vT ? void 0 : vT.water) && (0, mk.jsx)(kX, {
            water: vT.water,
            at: wT,
            side: vT.cryo ? "waterIn" : null
          }), (null === vT || void 0 === vT ? void 0 : vT.cryo) && (0, mk.jsx)(kX, {
            water: vT.cryo,
            at: wT,
            side: "cryoOut"
          }), null !== vT && void 0 !== vT && vT.inertCoupler ? (0, mk.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: uT("buildAFactory2Game:machineStatus_couplerOff", {
              item: Tk(uT, vT.inertCoupler)
            })
          }) : null !== PT && (0, mk.jsx)("div", {
            className: gz()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== JT
            }),
            children: uT(PT, dT ? mX(uT, dT.input, dT.short) : void 0)
          })]
        }), (0, mk.jsxs)("div", {
          className: gz()("Baf2MachineSide", {
            Baf2SynthSide: no(ET)
          }),
          children: [no(ET) && (0, mk.jsx)(GW, {
            ai: wT,
            taught: null !== (MT = null === vT || void 0 === vT ? void 0 : vT.taught) && void 0 !== MT ? MT : null
          }, wT.join(",")), qT && (0, mk.jsx)(fW, {
            kind: hT,
            def: jT,
            ai: wT,
            power: eT,
            stored: null !== UT && void 0 !== UT ? UT : 0,
            cap: HT
          }), tT(ET) && (0, mk.jsx)(lW, {
            ai: wT,
            input: null !== (rT = null === vT || void 0 === vT ? void 0 : vT.input) && void 0 !== rT ? rT : null,
            drops: null !== (AT = null === vT || void 0 === vT ? void 0 : vT.farm) && void 0 !== AT ? AT : null,
            seconds: String(jT.opMs / 1e3)
          }), !qT && !tT(ET) && !no(ET) && (0, mk.jsx)(TW, {
            kind: hT,
            def: jT,
            input: null !== (gT = null === vT || void 0 === vT ? void 0 : vT.input) && void 0 !== gT ? gT : null,
            tier: null !== nT && void 0 !== nT ? nT : 1,
            noSeeds: !0 === (null === vT || void 0 === vT ? void 0 : vT.noSeeds)
          })]
        })]
      })
    }

    function uX(TT, oT, IT, iT) {
      var zT;
      const kT = vo[TT],
        WT = [kT.inputSlot, kT.fuelSlot, ...null !== (zT = kT.inputSlots) && void 0 !== zT ? zT : []].filter((TT => null !== TT));
      return {
        render: zT => {
          let {
            ai: kT,
            renderSlot: WT
          } = zT;
          return (0, mk.jsx)(OW.Provider, {
            value: iT,
            children: (0, mk.jsx)(RX, {
              kind: TT,
              ai: kT,
              store: oT,
              power: IT,
              renderSlot: WT
            })
          })
        },
        quickMoveRange: WT.length > 0 ? [Math.min(...WT), Math.max(...WT) + 1] : [0, 0],
        className: rX(TT)
      }
    }
    const vX = "Assembler";

    function EX(TT) {
      var oT, IT, iT, zT, kT, WT, XT, BT, FT;
      let {
        ai: ST,
        store: DT,
        renderSlot: LT
      } = TT;
      const {
        t: xT
      } = (0, ez.t)(), cT = AX(DT, ST), KT = null !== (oT = null === cT || void 0 === cT ? void 0 : cT.tier) && void 0 !== oT ? oT : 1, MT = null !== (IT = null === cT || void 0 === cT ? void 0 : cT.taught) && void 0 !== IT ? IT : null, rT = to(vX, {
        coupled: !1,
        taught: MT
      }), AT = null !== (iT = rT.bench) && void 0 !== iT ? iT : null, gT = null !== (zT = null === cT || void 0 === cT ? void 0 : cT.status) && void 0 !== zT ? zT : null, hT = null !== (kT = null === cT || void 0 === cT ? void 0 : cT.power) && void 0 !== kT ? kT : null, wT = null !== (WT = null === cT || void 0 === cT ? void 0 : cT.powerCap) && void 0 !== WT ? WT : 4e3;
      return (0, mk.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, mk.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, mk.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: xT(Vz(vX))
          }), AT && (0, mk.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [xT("buildAFactory2Game:benchMakes"), (0, mk.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, mk.jsx)(uz.c, {
                itemName: AT.output,
                amount: 0
              })
            }), (null === cT || void 0 === cT ? void 0 : cT.taughtName) && (0, mk.jsx)(vz.c, {
              text: cT.taughtName
            }), AT.outputAmount > 1 && (0, mk.jsxs)("span", {
              children: ["\xd7", AT.outputAmount]
            })]
          }), !AT && (0, mk.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: xT("buildAFactory2Game:benchTeachHint")
          }), (0, mk.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, mk.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (XT = rT.inputSlots) && void 0 !== XT ? XT : []).map(((TT, oT) => {
                const IT = null === AT || void 0 === AT ? void 0 : AT.inputs[oT];
                return (0, mk.jsxs)("div", {
                  className: gz()("Baf2BenchInput", {
                    Spare: !IT
                  }),
                  children: [(0, mk.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [LT(TT), IT && (0, mk.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, mk.jsx)(uz.c, {
                        itemName: IT.item,
                        amount: 0
                      })
                    })]
                  }), (0, mk.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: IT ? `\xd7${IT.amount}` : "\xa0"
                  })]
                }, TT)
              }))
            }), (0, mk.jsx)(hX, {
              running: "running" === gT,
              opMs: rT.opMs,
              opLeftMs: null !== (BT = null === cT || void 0 === cT ? void 0 : cT.opLeftMs) && void 0 !== BT ? BT : null,
              updateCount: DT.updateCount
            }), (0, mk.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, mk.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: xT("buildAFactory2Game:machineOutput")
              }), (0, mk.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: rT.outputSlots.map((TT => (0, mk.jsx)("div", {
                  children: LT(TT)
                }, TT)))
              })]
            })]
          }), null !== hT && (0, mk.jsx)(vW, {
            stored: hT,
            cap: wT,
            rates: null !== (FT = null === cT || void 0 === cT ? void 0 : cT.powerRates) && void 0 !== FT ? FT : null
          }), null !== gT && (0, mk.jsx)("div", {
            className: gz()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== gT
            }),
            children: xT(cX(vX, gT, cT, !1))
          }), AT && AT.inputs.length > 1 && (0, mk.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: xT("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, mk.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, mk.jsx)(IW, {
            taught: MT,
            tier: KT
          }), AT && (0, mk.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: xT("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function fX(TT) {
      var oT;
      const IT = null !== (oT = vo[vX].inputSlots) && void 0 !== oT ? oT : [];
      return {
        render: oT => {
          let {
            ai: IT,
            renderSlot: iT
          } = oT;
          return (0, mk.jsx)(EX, {
            ai: IT,
            store: TT,
            renderSlot: iT
          })
        },
        quickMoveRange: [Math.min(...IT), Math.max(...IT) + 1],
        className: rX(vX)
      }
    }
    var CX = IT(90),
      jX = IT(1110),
      JX = IT(3811);
    const UX = 600,
      aX = .5,
      YX = 4,
      QX = 1200,
      OX = 140,
      HX = 100,
      nX = 32,
      qX = 16,
      ZX = 100.5,
      lX = 90,
      sX = 1.5,
      tX = 50;

    function GX(TT) {
      switch (uI(TT)) {
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
    const pX = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function bX(TT) {
      const oT = Math.ceil(60 * TT / HX);
      return {
        fuel: Math.max(nX, oT),
        waste: Math.max(qX, oT)
      }
    }

    function yX(TT, oT, IT) {
      const [iT, zT, kT] = [TT - 2, oT - 2, IT - 2];
      return 2 * (iT * zT + zT * kT + kT * iT) * OX
    }

    function NX(TT, oT, IT) {
      return Math.max(0, TT - 2) * Math.max(0, oT - 2) * Math.max(0, IT - 2)
    }

    function PX(TT, oT) {
      const [IT, iT, zT] = TT, kT = IT * iT * zT, WT = new Float32Array(kT);
      let XT = 0,
        BT = 0,
        FT = 0,
        ST = 0,
        DT = 0;
      const LT = (TT, kT, WT) => TT < 0 || TT >= IT || kT < 0 || kT >= iT || WT < 0 || WT >= zT ? 0 : oT[(kT * zT + WT) * IT + TT];
      for (let MT = 0; MT < iT; MT++)
        for (let TT = 0; TT < zT; TT++)
          for (let iT = 0; iT < IT; iT++) {
            const kT = (MT * zT + TT) * IT + iT,
              xT = oT[kT];
            if (1 === xT) {
              XT++;
              let oT = 0;
              for (const [IT, zT, kT] of pX) {
                const WT = LT(iT + IT, MT + zT, TT + kT);
                1 !== WT && 2 !== WT || oT++
              }
              WT[kT] = UX * (1 + aX * Math.min(oT, YX)), ST += WT[kT]
            } else if (2 === xT) BT++;
            else if (3 === xT) {
              FT++;
              pX.some((oT => {
                let [IT, zT, kT] = oT;
                return 1 === LT(iT + IT, MT + zT, TT + kT)
              })) && (DT += QX)
            }
          }
      const xT = yX(IT + 2, iT + 2, zT + 2),
        cT = Math.min(ST, DT, xT),
        KT = XT > 0 ? ST * HX / XT : 0;
      return {
        rods: XT,
        graphite: BT,
        channels: FT,
        fuelHeat: ST,
        cooling: DT,
        size: xT,
        max: cT,
        vol: kT,
        powerPerUnit: KT,
        pelletsPerMin: KT > 0 ? cT / KT * 60 : 0,
        waterPerS: cT * dT.r,
        rodHeat: WT
      }
    }
    const dX = 0,
      VX = 1,
      TB = 6,
      oB = 7,
      IB = 8;

    function iB(TT, oT) {
      const [IT, iT, zT] = TT, kT = new Uint8Array(IT * iT * zT), WT = (TT, kT, WT) => TT < 0 || TT >= IT || kT < 0 || kT >= iT || WT < 0 || WT >= zT ? 0 : oT[(kT * zT + WT) * IT + TT];
      for (let XT = 0; XT < iT; XT++)
        for (let TT = 0; TT < zT; TT++)
          for (let iT = 0; iT < IT; iT++) {
            const BT = (XT * zT + TT) * IT + iT,
              FT = oT[BT];
            if (1 === FT) {
              let oT = 0;
              for (const [IT, zT, kT] of pX) {
                const BT = WT(iT + IT, XT + zT, TT + kT);
                oT += 1 === BT || 2 === BT ? 1 : 0
              }
              kT[BT] = VX + Math.min(oT, YX)
            } else if (3 === FT) {
              const oT = pX.some((oT => {
                let [IT, zT, kT] = oT;
                return 1 === WT(iT + IT, XT + zT, TT + kT)
              }));
              kT[BT] = oT ? TB : oB
            } else 2 === FT && (kT[BT] = IB)
          }
      return kT
    }

    function zB(TT) {
      return TT.fuelHeat <= TT.cooling && TT.fuelHeat <= TT.size ? "fuel" : TT.cooling <= TT.size ? "cooling" : "size"
    }
    const kB = lX;

    function WB(TT, oT, IT) {
      return Math.round(TT * oT * IT * 25e3 * (1 + .25 * (Math.min(TT, oT, IT) - 2)))
    }

    function XB(TT) {
      return Math.max(0, Math.min(dT.d, TT))
    }

    function BB(TT, oT, IT) {
      const iT = oT * XB(IT);
      return TT <= 0 ? 0 : iT > 0 ? Math.min(200, 100 * TT / iT) : 200
    }

    function FB(TT, oT) {
      const IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? sX : 1;
      return Math.min(TT.fuelHeat * IT, TT.cooling * XB(oT), TT.size * IT)
    }

    function SB(TT) {
      return 2 + TT / 10
    }
    const DB = "buildAFactory2Game:";

    function LB(TT) {
      var oT;
      return null !== (oT = TT.baf2RxMood) && void 0 !== oT ? oT : function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const IT = [
          ["calm", 50],
          ["warm", kB],
          ["hot", ZX]
        ];
        for (const [iT, zT] of IT)
          if (TT < zT + (iT === oT ? 3 : 0)) return iT;
        return "alarm"
      }(TT.baf2RxHeat)
    }
    const xB = 120;

    function cB(TT) {
      const oT = TT.baf2RxState;
      if ("running" === oT && TT.baf2RxHeat > ZX) return {
        label: `${DB}rxState_tooHot`,
        tone: "bad",
        fix: `${DB}rxFix_tooHot`
      };
      switch (oT) {
        case "running":
          return {
            label: `${DB}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${DB}rxState_idle`, tone: "off", fix: `${DB}rxFix_idle`
          };
        case "scram":
          return {
            label: `${DB}rxState_scram`, tone: "off", fix: TT.baf2RxHeat < tX ? `${DB}rxFix_scramCool` : `${DB}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${DB}rxState_${oT}`, tone: "off", fix: `${DB}rxFix_${oT}`
          };
        case "melted":
          return {
            label: `${DB}rxState_melted`, tone: "bad", fix: `${DB}rxFix_melted`
          };
        default:
          return {
            label: `${DB}rxState_${oT}`, tone: "warn", fix: `${DB}rxFix_${oT}`
          }
      }
    }

    function KB(TT) {
      const [oT, IT, iT] = TT.baf2RxStats;
      return {
        fuelHeat: oT,
        cooling: IT * (TT.baf2RxCryo ? Math.max(1, XB(TT.baf2RxWater / 100)) : 1),
        size: iT
      }
    }

    function MB(TT) {
      var oT;
      const IT = "idle" === TT.baf2RxState || "running" === TT.baf2RxState && TT.baf2RxHeat <= ZX || "scram" === TT.baf2RxState && TT.baf2RxHeat < tX;
      if (0 === (TT.baf2RxFlags & xo) || !TT.baf2RxFormed || !IT) return null;
      const {
        fuelHeat: iT,
        cooling: zT,
        size: kT
      } = KB(TT), WT = Math.min(iT, zT, kT), XT = zB({
        fuelHeat: iT,
        cooling: zT,
        size: kT
      }), BT = "cooling" === XT && !0 === TT.baf2RxCryoOpen && !TT.baf2RxCryo, FT = null !== (oT = TT.baf2RxCells) && void 0 !== oT ? oT : "", ST = ("fuel" === XT || "cooling" === XT && !0 === TT.baf2RxCryo) && FT.length > 0 && !FT.includes(String(0)), DT = BT ? "Cryo" : "scram" === TT.baf2RxState ? "Off" : "";
      return WT < 12e3 ? {
        key: `${DB}rxGrow_${ST?"full":XT}${DT}`,
        amount: WT
      } : null
    }

    function rB(TT, oT) {
      return TT[0] === oT[0] && TT[1] === oT[1] && TT[2] === oT[2]
    }

    function AB(TT) {
      return [...TT].sort(((TT, oT) => Number(oT[2] < oT[1]) - Number(TT[2] < TT[1])))
    }

    function gB(TT, oT) {
      return oT.some((oT => {
        let [IT, iT] = oT;
        return !(iT <= 0) && ["edge", "cap", "wall", "inside"].some((oT => IT === Ti(TT, oT)))
      }))
    }

    function hB(TT, oT, IT) {
      const iT = TT.baf2RxFuel - TT.baf2RxPu > 0 ? IT : 0;
      return {
        full: TT.baf2RxWaste > oT - 3,
        fullInS: iT > 0 ? Math.max(0, oT - TT.baf2RxWaste) / iT : null
      }
    }
    const wB = {
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

    function mB(TT) {
      return eB[TT]
    }
    const eB = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function RB(TT) {
      let [oT, IT, iT] = TT;
      return Math.ceil(yX(oT, IT, iT) * dT.r)
    }

    function uB(TT, oT) {
      return "battery" === TT ? oT[0] * oT[1] * oT[2] : function(TT) {
        let [oT, IT, iT] = TT;
        return oT * IT * iT - Math.max(0, oT - 2) * Math.max(0, IT - 2) * Math.max(0, iT - 2)
      }(oT) - 1
    }

    function vB(TT) {
      const oT = Math.max(0, TT);
      if (oT < 10) return String(Math.round(10 * oT) / 10);
      if (oT < 1e4) return Math.round(oT).toLocaleString("en-US");
      if (oT < 1e6) return `${oT<1e5?(Math.floor(oT/100)/10).toFixed(1):Math.floor(oT/1e3)}k`;
      const IT = oT / 1e6;
      return `${IT<10?(Math.floor(100*IT)/100).toFixed(2):IT<100?(Math.floor(10*IT)/10).toFixed(1):Math.floor(IT)}M`
    }

    function EB(TT) {
      return TT <= 0 ? "0" : TT >= 10 ? String(Math.round(TT)) : TT.toFixed(TT >= 1 ? 1 : 2)
    }

    function fB(TT) {
      const oT = pI(TT, 0),
        IT = pI(TT, lI(TT) - 1);
      return {
        lo: [Math.min(oT[0], IT[0]), Math.min(oT[1], IT[1]), Math.min(oT[2], IT[2])],
        hi: [Math.max(oT[0], IT[0]) + 1, Math.max(oT[1], IT[1]) + 1, Math.max(oT[2], IT[2]) + 1]
      }
    }

    function CB(TT, oT, IT) {
      const iT = [oT[0] - TT[0], oT[1] - TT[1], oT[2] - TT[2]],
        zT = [(TT[0] + oT[0]) / 2, (TT[1] + oT[1]) / 2, (TT[2] + oT[2]) / 2],
        kT = [];
      for (let WT = 0; WT < 3; WT++) {
        const XT = (WT + 1) % 3,
          BT = (WT + 2) % 3;
        for (const FT of [TT[XT], oT[XT]])
          for (const ST of [TT[BT], oT[BT]]) {
            const TT = [0, 0, 0],
              oT = [IT, IT, IT];
            TT[WT] = zT[WT], oT[WT] = iT[WT] + IT, TT[XT] = FT, TT[BT] = ST, kT.push([TT, oT])
          }
      }
      return kT
    }
    const jB = "buildAFactory2Game:",
      JB = [`${jB}colNorth`, `${jB}colEast`, `${jB}colSouth`, `${jB}colWest`];

    function UB(TT, oT) {
      const [IT, iT, zT] = TT.baf2ColAt;
      return `baf2col ${IT} ${iT} ${zT} ${oT}`
    }

    function aB(TT) {
      return function(TT) {
        if (!Number.isFinite(TT)) return "";
        const oT = Math.max(1, Math.round(TT));
        if (oT < 60) return `${oT}s`;
        const IT = oT % 60;
        return 0 === IT ? oT / 60 + "m" : `${Math.floor(oT/60)}m ${IT}s`
      }(function(TT) {
        const oT = oi.FOCUS_BY_LASERS[Math.max(0, Math.min(4, TT))];
        return oT > 0 ? oi.NOVA_FOCUS / oT : 1 / 0
      }(TT))
    }

    function YB(TT) {
      const oT = Math.abs(Math.round(TT));
      return oT < 1e3 ? Math.round(TT).toLocaleString("en-US") : oT < 1e6 ? `${oT<1e5?(TT/1e3).toFixed(1).replace(/\.0$/,""):Math.round(TT/1e3)}k` : `${(TT/1e6).toFixed(oT<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function QB(TT, oT, IT) {
      if (Xi(oT) >= 0) {
        const oT = function(TT, oT) {
          return TT.find((TT => {
            let {
              focus: IT
            } = TT;
            return IT[0] === oT[0] && IT[2] === oT[2] && (oT[1] === IT[1] || oT[1] === IT[1] - 1)
          }))
        }(TT, IT);
        if (!oT) return null;
        const zT = function(TT) {
          let oT = 0,
            IT = 0;
          for (let iT = 0; iT < 4; iT++) oT += TT.laser[iT] ? 1 : 0, IT += TT.live[iT] ? 1 : 0;
          return {
            lasers: oT,
            live: IT,
            focusPerS: oi.FOCUS_BY_LASERS[IT],
            drawPerS: oi.LASER_DRAW * IT
          }
        }({
          laser: oT.lasers,
          live: oT.live
        });
        if (0 === zT.lasers || "noLasers" === oT.state) return {
          key: `${jB}lookColNoLasers`
        };
        if (0 === zT.live) return {
          key: `${jB}lookColOff_blocked`
        };
        if (!(oT.on && zT.live > 0) && ("running" !== (iT = oT.state) && "slowed" !== iT)) return {
          key: `${jB}lookColOff_${oT.state}`
        };
        if (zT.live < zT.lasers) return {
          key: `${jB}lookColLasersSome`,
          params: {
            lasers: String(zT.lasers),
            live: String(zT.live)
          }
        };
        const kT = oT.open.filter(Boolean).length;
        return kT < 4 ? {
          key: `${jB}lookColLasersSpots`,
          params: {
            live: String(zT.live),
            spots: String(kT),
            time: aB(zT.live)
          }
        } : {
          key: `${jB}lookColLasers`,
          params: {
            live: String(zT.live),
            time: aB(zT.live)
          }
        }
      }
      var iT;
      if (!Bi(oT)) return null;
      const zT = function(TT, oT) {
        for (const IT of TT) {
          const TT = Li(IT.focus, [oT[0], oT[1], oT[2]]);
          if (TT && TT.gS === oi.LASER_D && IT.lasers[TT.dir]) return {
            entry: IT,
            dir: TT.dir
          }
        }
        return null
      }(TT, IT);
      if (!zT) return {
        key: `${jB}lookLaserNoCollider`
      };
      const {
        entry: kT,
        dir: WT
      } = zT;
      return kT.open[WT] ? kT.live[WT] ? {
        key: kT.on ? `${jB}lookLaserFiring` : `${jB}lookLaserReady`
      } : {
        key: `${jB}lookLaserBlocked`
      } : {
        key: `${jB}lookLaserClosed`
      }
    }

    function OB(TT, oT) {
      const IT = [];
      for (let iT = 1; iT < oi.LASER_D; iT++) TT & 1 << oT * (oi.LASER_D - 1) + iT - 1 && IT.push(iT);
      return IT
    }
    const HB = {
      firing: `${jB}colSlotFiring`,
      ready: `${jB}colSlotReady`,
      blocked: `${jB}colSlotBlocked`,
      empty: `${jB}colSlotEmpty`,
      closed: `${jB}colSlotClosed`
    };

    function nB(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const kT = Iz(TT),
        WT = Iz(oT),
        XT = Iz(IT),
        BT = XT.filter(Boolean).length,
        FT = kT.filter(Boolean).length,
        ST = [0, 1, 2, 3].map((TT => WT[TT] ? kT[TT] ? XT[TT] ? iT ? "firing" : "ready" : "blocked" : (TT => OB(zT, TT).length > 0)(TT) ? "blocked" : "empty" : "closed")),
        DT = ST.indexOf("blocked"),
        LT = DT < 0 && FT > 0 ? ST.indexOf("empty") : -1;
      return ST.map(((TT, oT) => {
        const IT = oT === DT ? {
          key: `${jB}colSlotClear`
        } : oT === LT ? {
          key: `${jB}colSlotAdd`,
          params: {
            time: aB(Math.min(4, BT + 1))
          }
        } : null;
        return {
          dir: oT,
          tone: TT,
          title: {
            key: "blocked" !== TT || kT[oT] ? HB[TT] : `${jB}colSlotGap`,
            keys: {
              dir: JB[oT]
            }
          },
          hint: IT
        }
      }))
    }

    function qB(TT) {
      var oT;
      return "noPower" === TT.baf2ColState && TT.baf2ColRxState ? cB({
        baf2RxState: TT.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (oT = TT.baf2ColRxHeat) && void 0 !== oT ? oT : 0
      }) : null
    }

    function ZB(TT) {
      const oT = Iz(TT.baf2ColSpots).filter(Boolean).length,
        IT = Iz(TT.baf2ColLive);
      let iT = 0,
        zT = 0;
      return Iz(TT.baf2ColLasers).forEach(((TT, oT) => {
        TT && (iT++, zT += IT[oT] ? 0 : 1)
      })), zT > 0 ? {
        key: `${jB}colSubSome`,
        params: {
          blocked: String(zT),
          lasers: String(iT)
        }
      } : oT < 4 ? {
        key: `${jB}colSubSpots`,
        params: {
          lasers: String(iT),
          spots: String(oT)
        }
      } : {
        key: `${jB}colSub`,
        params: {
          lasers: String(iT)
        }
      }
    }

    function lB(TT) {
      const oT = qB(TT);
      if ("idle" === TT.baf2ColRxState && oT) return {
        key: `${jB}colState_noPowerIdle`
      };
      if (oT) return {
        key: `${jB}colState_noPowerReactor`,
        keys: {
          state: oT.label
        }
      };
      if ("noInput" !== TT.baf2ColState) return {
        key: `${jB}colState_${TT.baf2ColState}`
      };
      const IT = String(Math.max(0, oi.NOVA_SA - TT.baf2ColSa)),
        iT = String(Math.max(0, oi.NOVA_GD - TT.baf2ColGd));
      return "0" !== IT && "0" !== iT ? {
        key: `${jB}colState_noInput`,
        params: {
          sa: IT,
          gd: iT
        }
      } : "0" !== IT ? {
        key: `${jB}colState_noStarAlloy`,
        params: {
          sa: IT
        }
      } : "0" !== iT ? {
        key: `${jB}colState_noGlowDust`,
        params: {
          gd: iT
        }
      } : {
        key: `${jB}colState_running`
      }
    }

    function sB(TT) {
      return TT.baf2ColP < 0 ? `${jB}colNext` : function(TT) {
        const oT = TT.baf2ColState;
        return TT.baf2ColP >= 0 && ("blocked" === oT || "noLasers" === oT || "noPower" === oT)
      }(TT) ? `${jB}colStalled` : null === tB(TT) ? `${jB}colMaking` : `${jB}colNovaIn`
    }

    function tB(TT) {
      if (TT.baf2ColP < 0 || TT.baf2ColWant <= 0) return null;
      const oT = TT.baf2ColFocusPerS * Math.min(1, TT.baf2ColDraw / TT.baf2ColWant);
      return oT > 0 ? Math.max(0, oi.NOVA_FOCUS - TT.baf2ColP) / oT : null
    }

    function GB(TT, oT) {
      const IT = [];
      for (let iT = 1; iT <= 3; iT++) {
        const zT = [TT[0], TT[1] - iT, TT[2]];
        if (!oT(zT)) return IT;
        IT.push(zT)
      }
      return []
    }

    function pB(TT, oT) {
      const IT = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let iT = 0; iT < 4; iT++) {
        const zT = iT,
          kT = Di(TT.focus, zT, oi.LASER_D);
        if (TT.lasers[iT] || !TT.open[iT] || !oT(kT)) continue;
        const WT = [];
        for (let IT = 1; IT < oi.LASER_D; IT++) {
          const iT = Di(TT.focus, zT, IT);
          oT(iT) || WT.push(iT)
        }
        IT.supports.push(...GB(kT, oT)), 0 === WT.length ? IT.free.push(kT) : (IT.blocked.push(kT), IT.gaps.push(...WT))
      }
      return IT
    }
    const bB = oi.LASER_D - .25,
      yB = 4,
      NB = 2,
      PB = 16;
    const dB = {
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
        blendMode: JX.h.Standard,
        soft: !0
      },
      VB = {
        green: dB,
        pink: {
          ...dB,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function TF(TT, oT) {
      const IT = {
        ...oT.params
      };
      for (const [zT, kT] of Object.entries(null !== (iT = oT.keys) && void 0 !== iT ? iT : {})) {
        var iT;
        IT[zT] = TT(kT)
      }
      return IT
    }
    const oF = "buildAFactory2Game:",
      IF = 2 * oi.LASER_D + 1,
      iF = oi.LASER_D;

    function zF(TT) {
      return TT(`${oF}colFocusTip`, {
        need: YB(oi.NOVA_FOCUS)
      })
    }

    function kF(TT, oT) {
      return TT(oT.key, TF(TT, oT))
    }

    function WF(TT) {
      const oT = TT.getStatus();
      return {
        status: oT,
        entry: oT ? TT.entryAtRoot(oT.baf2ColAt) : void 0
      }
    }

    function XF(TT, oT) {
      return {
        left: 100 * (iF + TT) / IF + "%",
        top: 100 * (iF + oT) / IF + "%"
      }
    }

    function BF(TT) {
      let {
        status: oT,
        entry: IT
      } = TT;
      const iT = Iz(oT.baf2ColLasers),
        zT = Iz(oT.baf2ColSpots),
        kT = Iz(oT.baf2ColLive),
        WT = !0 === (null === IT || void 0 === IT ? void 0 : IT.on),
        XT = oi.LASER_D,
        BT = [];
      for (let xT = 0; xT < 4; xT++) {
        const [TT, , oT] = Si[xT];
        if (kT[xT]) {
          const IT = 100 * (XT - 1) / IF,
            iT = TT + oT > 0 ? 100 * (iF + 1) / IF : 100 * (iF - (XT - 1)) / IF,
            zT = 100 * (iF + .35) / IF,
            kT = 30 / IF,
            FT = 0 !== TT ? {
              left: `${iT}%`,
              width: `${IT}%`,
              top: `${zT}%`,
              height: `${kT}%`
            } : {
              top: `${iT}%`,
              height: `${IT}%`,
              left: `${zT}%`,
              width: `${kT}%`
            };
          BT.push((0, mk.jsx)("i", {
            className: gz()("Baf2ColDiagramBeam", {
              Off: !WT
            }),
            style: FT
          }, `beam${xT}`))
        }
        const IT = iT[xT] ? "Baf2ColDiagramLaser" : zT[xT] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        BT.push((0, mk.jsx)("i", {
          className: IT,
          style: XF(TT * XT, oT * XT)
        }, `spot${xT}`))
      }
      for (let xT = 0; xT < 4; xT++) {
        if (iT[xT] || !zT[xT]) continue;
        const [TT, , IT] = Si[xT];
        for (const iT of OB(null !== (FT = oT.baf2ColGaps) && void 0 !== FT ? FT : 0, xT)) {
          var FT;
          BT.push((0, mk.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: XF(TT * iT, IT * iT)
          }, `gap${xT},${iT}`))
        }
      }
      for (const [xT, , cT] of null !== (ST = null === IT || void 0 === IT ? void 0 : IT.blockers) && void 0 !== ST ? ST : []) {
        var ST, DT, LT;
        const TT = xT - (null !== (DT = null === IT || void 0 === IT ? void 0 : IT.focus[0]) && void 0 !== DT ? DT : 0),
          oT = cT - (null !== (LT = null === IT || void 0 === IT ? void 0 : IT.focus[2]) && void 0 !== LT ? LT : 0);
        BT.push((0, mk.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: XF(TT, oT)
        }, `block${TT},${oT}`))
      }
      return (0, mk.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [BT, (0, mk.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function FF(TT) {
      let {
        status: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)(), iT = Iz(oT.baf2ColLive).filter(Boolean).length;
      return (0, mk.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, mk.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: zF(IT),
          children: IT(`${oF}colLadder`)
        }), (0, mk.jsx)("ul", {
          children: [1, 2, 3, 4].map((TT => (0, mk.jsx)("li", {
            className: gz()({
              On: TT === iT
            }),
            children: IT(`${oF}colLadderChip`, {
              lasers: String(TT),
              time: aB(TT)
            })
          }, TT)))
        })]
      })
    }

    function SF(TT) {
      let {
        item: oT,
        kS: IT,
        need: iT,
        cap: zT
      } = TT;
      const {
        t: kT
      } = (0, ez.t)(), WT = Math.min(IT, iT);
      return (0, mk.jsxs)("li", {
        className: gz()("Baf2ColTile", {
          Short: IT < iT
        }),
        children: [(0, mk.jsx)(DF, {
          item: oT
        }), (0, mk.jsx)("b", {
          className: "Baf2ColTileValue",
          children: kT(`${oF}colOutOf`, {
            amount: String(WT),
            cap: String(iT)
          })
        }), (0, mk.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, mk.jsx)("i", {
            style: {
              width: 100 * WT / iT + "%"
            }
          })
        }), IT > iT && (0, mk.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: kT(`${oF}colIntakeHeld`, {
            amount: String(IT),
            cap: String(zT)
          })
        })]
      })
    }

    function DF(TT) {
      let {
        item: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)();
      return (0, mk.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, mk.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, mk.jsx)(uz.c, {
            itemName: oT,
            amount: 0
          })
        }), (0, mk.jsx)("span", {
          className: "Baf2ColTileName",
          children: Tk(IT, oT)
        })]
      })
    }

    function LF(TT) {
      switch (TT.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function xF(TT) {
      var oT, IT, zT;
      let {
        store: kT,
        close: WT
      } = TT;
      const {
        t: XT
      } = (0, ez.t)(), BT = HW(), {
        status: FT,
        entry: ST
      } = function(TT) {
        const [oT, IT] = (0, iT.useState)((() => WF(TT)));
        return (0, iT.useEffect)((() => (IT(WF(TT)), TT.subscribe((() => {
          IT(WF(TT))
        })))), [TT]), oT
      }(kT), [DT, LT] = (0, iT.useState)(null), xT = null === FT || void 0 === FT ? void 0 : FT.baf2ColHold;
      (0, iT.useEffect)((() => {
        LT(null)
      }), [xT]);
      const cT = (0, iT.useRef)({
          p: -1,
          n: 0
        }),
        KT = null !== (oT = null === FT || void 0 === FT ? void 0 : FT.baf2ColP) && void 0 !== oT ? oT : -1;
      KT < cT.current.p && cT.current.n++, cT.current.p = KT;
      const MT = (0, iT.useRef)(null),
        [rT] = (0, iT.useState)((() => {
          return (TT = kT.heldAtOpen()) === zi || TT === ki ? {
            key: `${jB}colBeltItIn`,
            item: TT
          } : null;
          var TT
        }));
      if (!FT) return null;
      const AT = FT.baf2ColMember,
        gT = FT.baf2ColP >= 0,
        hT = function(TT, oT) {
          if (TT.baf2ColP >= 0 && TT.baf2ColDraw > 0) {
            const oT = TT.baf2ColWant > 0 ? Math.min(1, TT.baf2ColDraw / TT.baf2ColWant) : 0;
            return {
              focus: TT.baf2ColFocusPerS * oT,
              draw: TT.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === TT.baf2ColState && oT && oT.draw > 0 ? {
            ...oT,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(FT, MT.current);
      MT.current = hT.draw > 0 ? hT : null;
      const wT = "slowed" === FT.baf2ColState || "noPower" === FT.baf2ColState,
        mT = tB(FT),
        eT = null !== DT && void 0 !== DT ? DT : FT.baf2ColHold,
        RT = function(TT) {
          var oT, IT;
          return "idle" === TT.baf2ColRxState ? null : null !== (oT = null === (IT = qB(TT)) || void 0 === IT ? void 0 : IT.fix) && void 0 !== oT ? oT : null
        }(FT),
        uT = null === RT && null === rT ? function(TT) {
          var oT;
          const IT = TT.baf2ColSentTo;
          if (!IT) return null;
          const iT = null !== (oT = TT.baf2ColSentHeld) && void 0 !== oT ? oT : null;
          return {
            key: null === iT ? `${jB}colNovaSentToMachine` : `${jB}colNovaSentTo`,
            target: IT,
            kS: iT
          }
        }(FT) : null,
        vT = gT ? XT(`${oF}colFocusOf`, {
          focus: YB(FT.baf2ColP),
          need: YB(oi.NOVA_FOCUS)
        }) : null;
      return (0, mk.jsx)(AW.e, {
        close: WT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, mk.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, mk.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mk.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, mk.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, mk.jsx)(uz.c, {
                  itemName: Ii,
                  amount: 0
                })
              }), (0, mk.jsxs)("div", {
                children: [(0, mk.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: Tk(XT, Ii)
                }), (0, mk.jsx)("p", {
                  children: kF(XT, ZB(FT))
                })]
              })]
            }), (0, mk.jsx)(gW.j, {
              onClick: WT
            })]
          }), (0, mk.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, mk.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, mk.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, mk.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: XT(sB(FT), {
                    time: null === mT ? "" : Ak(XT, mT)
                  })
                }), (0, mk.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, mk.jsx)("i", {
                    style: {
                      width: (gT ? 100 * FT.baf2ColP / oi.NOVA_FOCUS : 0) + "%"
                    }
                  }, cT.current.n)
                }), (0, mk.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, mk.jsxs)("span", {
                    title: zF(XT),
                    children: [(0, mk.jsx)("b", {
                      children: YB(hT.focus)
                    }), " ", XT(`${oF}colFocusPerS`)]
                  }), (0, mk.jsxs)("span", {
                    className: gz()("Baf2ColDraw", {
                      Short: wT
                    }),
                    children: [(0, mk.jsx)(Rz.e, {
                      name: "bolt"
                    }), wT ? XT(`${oF}colDrawOf`, {
                      draw: YB(FT.baf2ColDraw),
                      want: YB(FT.baf2ColWant)
                    }) : XT(`${oF}colPowerPerS`, {
                      rate: YB(hT.draw)
                    })]
                  }), null !== vT && (0, mk.jsx)("span", {
                    className: "Soft",
                    children: vT
                  })]
                })]
              }), (0, mk.jsx)("p", {
                className: gz()("Baf2ColState", LF(FT)),
                children: kF(XT, lB(FT))
              }), null !== RT && (0, mk.jsx)("p", {
                className: "Baf2ColStateFix",
                children: XT(RT)
              }), null === RT && null !== rT && (0, mk.jsx)("p", {
                className: "Baf2ColStateFix",
                children: XT(rT.key, {
                  item: Tk(XT, rT.item)
                })
              }), uT && (0, mk.jsx)("p", {
                className: "Baf2ColStateFix",
                children: XT(uT.key, {
                  target: Tk(XT, uT.target),
                  amount: String(null !== (IT = uT.kS) && void 0 !== IT ? IT : 0)
                })
              }), (0, mk.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, mk.jsx)(SF, {
                  item: zi,
                  kS: FT.baf2ColSa,
                  need: oi.NOVA_SA,
                  cap: oi.SA_CAP
                }), (0, mk.jsx)(SF, {
                  item: ki,
                  kS: FT.baf2ColGd,
                  need: oi.NOVA_GD,
                  cap: oi.GD_CAP
                }), (0, mk.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, mk.jsx)(DF, {
                    item: "Nova Matter"
                  }), (0, mk.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: XT(`${oF}colNovaHeld`, {
                      amount: String(FT.baf2ColOut),
                      cap: String(oi.OUT_CAP)
                    })
                  }), AT && (0, mk.jsx)(gW.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === FT.baf2ColOut,
                    onClick: () => {
                      BT.send(UB(FT, "take"))
                    },
                    children: XT(`${oF}colTake`)
                  })]
                })]
              }), AT && (0, mk.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": eT,
                className: gz()("Baf2ColHold", {
                  On: eT
                }),
                onClick: TT => {
                  TT.detail > 0 && TT.currentTarget.blur(), LT(!eT), BT.send(UB(FT, "hold " + (eT ? 0 : 1)))
                },
                children: [(0, mk.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, mk.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, mk.jsx)("b", {
                    children: XT(`${oF}colHold`)
                  }), (0, mk.jsx)("span", {
                    children: XT(`${oF}colHoldNote`)
                  })]
                })]
              })]
            }), (0, mk.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, mk.jsx)(BF, {
                status: FT,
                entry: ST
              }), (0, mk.jsx)("ul", {
                className: "Baf2ColSlots",
                children: nB(FT.baf2ColLasers, FT.baf2ColSpots, FT.baf2ColLive, hT.beamsOn, null !== (zT = FT.baf2ColGaps) && void 0 !== zT ? zT : 0).map((TT => (0, mk.jsxs)("li", {
                  className: TT.tone,
                  children: [(0, mk.jsx)("b", {
                    children: kF(XT, TT.title)
                  }), null !== TT.hint && (0, mk.jsx)("span", {
                    children: kF(XT, TT.hint)
                  })]
                }, TT.dir)))
              }), (0, mk.jsx)(FF, {
                status: FT
              })]
            })]
          })]
        })
      })
    }
    const cF = "buildAFactory2Game:",
      KF = 36e5,
      MF = 864e5;

    function rF(TT, oT, IT) {
      return Math.max(0, Math.ceil((TT + oT - Math.max(IT, TT)) / 1e3))
    }

    function AF(TT) {
      return TT.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function gF(TT) {
      return "Homestead" === TT
    }

    function hF(TT) {
      return function(TT) {
        let oT = 0;
        for (const IT of TT) {
          const TT = /^Island ([1-9]\d{0,5})$/.exec(IT);
          TT && (oT = Math.max(oT, Number(TT[1])))
        }
        return `Island ${oT+1}`
      }(TT.map((TT => TT.baf2IslandName)))
    }

    function wF(TT, oT) {
      return function(TT) {
        return `${cF}islandsBlocked${TT[0].toUpperCase()}${TT.slice(1)}`
      }("degraded" === TT && 0 === oT ? "stuck" : TT)
    }

    function mF(TT) {
      return TT.filter((TT => {
        var oT;
        return !TT.baf2IslandActive && void 0 === TT.baf2IslandUnreadable && void 0 === (null === (oT = TT.baf2IslandCoop) || void 0 === oT ? void 0 : oT.baf2CoopState)
      })).length
    }

    function eF(TT) {
      return "coopMoving" === TT || "coopUnreachable" === TT
    }

    function RF(TT, oT) {
      const IT = oT > 0;
      return {
        change: null === TT && !IT,
        switch: (null === TT || "degraded" === TT || eF(TT)) && !IT,
        rename: "loading" !== TT && "degraded" !== TT && "stuck" !== TT
      }
    }

    function uF(TT, oT) {
      return void 0 === TT || "corrupt" === TT && oT
    }
    const vF = jW;

    function EF(TT, oT, IT) {
      if (null !== TT && void 0 !== TT && TT.untilGone) {
        var iT;
        return !("dismiss" === TT.untilGone && void 0 === (null === (iT = oT.baf2IslandCoop) || void 0 === iT ? void 0 : iT.baf2CoopState)) && IT - TT.atMs < 32500
      }
      return void 0 !== TT && IT - TT.atMs < vF && oT.baf2IslandName === TT.from
    }
    const fF = jW;

    function CF(TT) {
      return "core" === (null === TT || void 0 === TT ? void 0 : TT.kind) ? TT.core : "islands" === (null === TT || void 0 === TT ? void 0 : TT.kind) ? TT.backToCore : void 0
    }

    function jF(TT) {
      return `\0${TT}\0`
    }

    function JF(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const iT = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const kT of Object.keys(IT)) iT[kT] = jF(kT);
      let zT = Object.keys(iT).length > 0 ? TT(oT, iT) : TT(oT);
      for (const [kT, WT] of Object.entries(IT)) zT = zT.split(jF(kT)).join(WT);
      return zT
    }

    function UF(TT, oT) {
      return TT ? oT ? "enabled" : "disabled" : "hidden"
    }
    const aF = {
      removed: `${cF}islandsCoopRemoved`,
      deleted: `${cF}islandsCoopDeleted`,
      notReady: `${cF}islandsCoopNotReady`,
      gone: `${cF}islandsCoopGone`
    };

    function YF(TT) {
      var oT;
      return "member" !== (null === (oT = TT.baf2IslandCoop) || void 0 === oT ? void 0 : oT.baf2CoopRole) && "newer" !== TT.baf2IslandUnreadable
    }

    function QF(TT, oT, IT, iT, zT) {
      const kT = TT.baf2IslandActive,
        WT = TT.baf2IslandUnreadable,
        XT = TT.baf2IslandCoop,
        BT = function(TT, oT, IT) {
          return {
            switch: TT.switch && void 0 === oT,
            delete: TT.change && uF(oT, IT)
          }
        }(oT, WT, iT),
        FT = {
          switch: UF(!kT && void 0 === WT, BT.switch),
          rename: UF(!0, oT.rename),
          delete: UF(!kT, BT.delete),
          deleteWaits: !kT && uF(WT, iT),
          people: UF(void 0 !== TT.baf2IslandInvitable || zT && kT && void 0 === WT && void 0 === XT, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        ST = !kT && BT.delete;
      if (void 0 === XT) return IT ? {
        ...FT,
        delete: UF(!kT, !1),
        deleteWaits: !1,
        note: ST ? {
          key: `${cF}islandsCoopKeepOwn`
        } : null
      } : FT;
      const DT = XT.baf2CoopState,
        LT = XT.baf2CoopMembers.length > 1,
        xT = {
          ...FT,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== DT && "member" === XT.baf2CoopRole) return {
        ...xT,
        dismiss: UF(!0, oT.rename),
        note: {
          key: aF[DT],
          names: {
            owner: XT.baf2CoopOwner
          }
        }
      };
      if (void 0 !== DT) {
        let TT = {
          key: `${cF}islandsCoopOwnLost`
        };
        return ST && LT ? TT = {
          key: `${cF}islandsCoopDeleteMembers`
        } : ST && IT && (TT = {
          key: `${cF}islandsCoopKeepOwn`
        }), {
          ...xT,
          delete: UF(!kT, BT.delete && !LT && !IT),
          deleteWaits: FT.deleteWaits && !LT && !IT,
          note: TT
        }
      }
      if ("member" === XT.baf2CoopRole) return {
        ...FT,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: UF(!0, kT ? oT.switch : oT.rename)
      };
      const cT = XT.baf2CoopManageHere;
      let KT = null;
      var MT;
      cT ? ST && LT ? KT = {
        key: `${cF}islandsCoopDeleteMembers`
      } : ST && IT && (KT = {
        key: `${cF}islandsCoopKeepOwn`
      }) : KT = {
        key: null !== (MT = XT.baf2CoopLeft) && void 0 !== MT && MT.length ? `${cF}islandsCoopManageThereClaim` : `${cF}islandsCoopManageThere`
      };
      return {
        ...FT,
        rename: UF(!0, oT.rename && cT),
        delete: UF(!kT, BT.delete && !LT && !IT),
        deleteWaits: FT.deleteWaits && !LT && !IT,
        people: "enabled",
        peopleLabel: "players",
        unshare: UF(cT && kT && !LT, oT.change),
        remove: cT,
        note: KT
      }
    }

    function OF(TT) {
      var oT;
      const IT = TT.baf2IslandCoop;
      if ("owner" !== (null === IT || void 0 === IT ? void 0 : IT.baf2CoopRole) || void 0 !== IT.baf2CoopState || null === (oT = IT.baf2CoopLeft) || void 0 === oT || !oT.length) return null;
      const iT = TT.baf2IslandActive && IT.baf2CoopManageHere;
      return {
        left: IT.baf2CoopLeft,
        claim: iT,
        goThere: !iT && IT.baf2CoopManageHere
      }
    }

    function HF(TT) {
      return TT.baf2CoopMembers.length >= TT.baf2CoopMax
    }

    function nF(TT, oT, IT) {
      return void 0 !== TT && oT < TT.answer && IT - TT.atMs < vF
    }
    const qF = "buildAFactory2Game:";

    function ZF(TT, oT) {
      return {
        onKeyDown: IT => {
          IT.stopPropagation(), IT.nativeEvent.isComposing || 229 === IT.nativeEvent.keyCode || ("Enter" === IT.key ? (IT.preventDefault(), TT()) : "Escape" === IT.key && (IT.preventDefault(), oT()))
        }
      }
    }

    function lF(TT) {
      return {
        onKeyDown: oT => {
          "Escape" !== oT.key || oT.nativeEvent.isComposing || (oT.preventDefault(), oT.stopPropagation(), TT())
        }
      }
    }

    function sF(TT) {
      TT.currentTarget.select()
    }

    function tF(TT, oT) {
      (0, iT.useEffect)((() => {
        var IT;
        TT && (null === (IT = oT.current) || void 0 === IT || IT.scrollIntoView({
          block: "nearest"
        }))
      }), [TT, oT])
    }

    function GF(TT) {
      const [oT, IT] = (0, iT.useState)(null);
      return (0, iT.useEffect)((() => {
        const oT = document.querySelector(".UiRequests"),
          iT = TT.current;
        if (!oT || !iT || "undefined" === typeof ResizeObserver) return;
        const zT = () => {
          const TT = oT.getBoundingClientRect(),
            zT = iT.getBoundingClientRect(),
            kT = iT.parentElement,
            WT = kT && parseFloat(getComputedStyle(kT).paddingTop) || 0,
            XT = function(TT, oT, IT, iT) {
              if (!TT || TT.height <= 0 || TT.right <= oT.left || TT.left >= oT.right) return null;
              const zT = Math.max(iT, TT.bottom + 8);
              return {
                marginTop: Math.round(zT - iT),
                maxHeight: Math.max(0, Math.floor(IT - zT - iT))
              }
            }(TT, zT, window.innerHeight, WT);
          IT((TT => (null === TT || void 0 === TT ? void 0 : TT.marginTop) === (null === XT || void 0 === XT ? void 0 : XT.marginTop) && (null === TT || void 0 === TT ? void 0 : TT.maxHeight) === (null === XT || void 0 === XT ? void 0 : XT.maxHeight) ? TT : XT))
        };
        zT();
        const kT = new ResizeObserver(zT);
        return kT.observe(oT), window.addEventListener("resize", zT), () => {
          kT.disconnect(), window.removeEventListener("resize", zT)
        }
      }), [TT]), oT
    }

    function pF(TT) {
      (0, iT.useEffect)((() => {
        var oT;
        null === (oT = TT.current) || void 0 === oT || oT.focus()
      }), [TT])
    }

    function bF(TT) {
      const [oT, IT] = (0, iT.useState)(Date.now);
      return (0, iT.useEffect)((() => {
        const oT = window.setInterval((() => {
          IT(Date.now())
        }), TT);
        return () => {
          window.clearInterval(oT)
        }
      }), [TT]), oT
    }

    function yF(TT) {
      let {
        tier: oT,
        t: IT
      } = TT;
      const {
        kind: iT,
        short: zT
      } = MT(oT), kT = xT(oT, cT), WT = IT(`${qF}${kT.key}`, {
        ...kT.params,
        name: IT(`${qF}${rT(oT).nameKey}`)
      });
      return (0, mk.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, mk.jsx)("span", {
          className: gz()("Baf2IslandTierPip", {
            Stage: "tier" !== iT
          }),
          "aria-hidden": "true",
          children: zT
        }), WT]
      })
    }

    function NF(TT) {
      let {
        note: oT,
        className: IT,
        t: iT
      } = TT;
      return (0, mk.jsx)("p", {
        className: gz()("Baf2IslandNote", IT),
        children: JF(iT, oT.key, oT.names, oT.params)
      })
    }
    const PF = "buildAFactory2Game:";

    function dF(TT) {
      let {
        message: oT,
        arrivedAtMs: IT,
        close: zT,
        leave: kT
      } = TT;
      const WT = HW(),
        {
          t: XT
        } = (0, ez.t)(),
        BT = bF(1e3),
        FT = (0, iT.useRef)(null);
      (0, iT.useEffect)((() => {
        var TT;
        null === (TT = FT.current) || void 0 === TT || TT.focus()
      }), []);
      const ST = rF(IT, oT.baf2TransferInMs, BT),
        DT = IT + oT.baf2TransferInMs - 1e3,
        [LT, xT] = (0, iT.useState)(null);
      (0, iT.useEffect)((() => {
        const TT = window.setTimeout((() => {
          xT(DT)
        }), Math.max(0, DT - Date.now()));
        return () => {
          window.clearTimeout(TT)
        }
      }), [DT]);
      const cT = LT === DT || BT >= DT,
        KT = oT.baf2TransferIsland,
        MT = oT.baf2TransferOwner;
      return (0, mk.jsx)(AW.e, {
        close: zT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, mk.jsxs)("section", {
          ref: FT,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, mk.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mk.jsxs)("div", {
              children: [(0, mk.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === MT ? JF(XT, `${PF}islandsTransferOwn`, {
                  island: KT
                }) : JF(XT, `${PF}islandsTransfer`, {
                  island: KT,
                  owner: MT
                })
              }), (0, mk.jsx)("p", {
                children: cT ? XT(`${PF}islandsTransferNow`) : XT(`${PF}islandsTransferIn`, {
                  time: Ak(XT, ST)
                })
              })]
            }), (0, mk.jsx)(gW.j, {
              ariaLabel: XT(`${PF}islandsClose`),
              onClick: zT
            })]
          }), !cT && (0, mk.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, mk.jsx)("p", {
              className: "Baf2TransferNote",
              children: XT(`${PF}islandsTransferNote`)
            }), (0, mk.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, mk.jsx)(gW.e, {
                onClick: () => {
                  WT.send("baf2coopstay"), kT()
                },
                children: XT(`${PF}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var VF = IT(1403),
      TS = IT(35680),
      oS = IT.n(TS);
    const IS = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const iS = "buildAFactory2Game:",
      zS = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function kS(TT, oT, IT) {
      return void 0 === oT ? IT : "string" === typeof oT ? oT : Array.isArray(oT) ? oT.map((oT => "string" === typeof oT ? oT : "translationKey" in oT ? TT(oT.translationKey) : "")).join("") : TT(oT.translationKey)
    }

    function WS(TT) {
      const oT = {};
      for (const [IT, iT] of Object.entries(null !== TT && void 0 !== TT ? TT : {})) oT[IT] = iT < 0 ? rk(iT) : iT.toLocaleString("en-US");
      return oT
    }

    function XS(TT, oT) {
      const IT = oT ? "touch" : "mouse";
      return {
        use: TT(`${iS}lookUse_${IT}`),
        Use: TT(`${iS}lookUseStart_${IT}`)
      }
    }
    const BS = (0, iT.memo)((function(TT) {
      let {
        item: oT
      } = TT;
      return (0, mk.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, mk.jsx)(uz.c, {
          itemName: oT,
          amount: 0
        })
      })
    }));

    function FS(TT) {
      let {
        label: oT,
        percent: IT,
        progress: iT
      } = TT;
      return (0, mk.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, mk.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${oT}: ${iT}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": IT,
          children: (0, mk.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${IT}%`
            }
          })
        }), (0, mk.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: iT
        })]
      })
    }

    function SS(TT) {
      let {
        chips: oT
      } = TT;
      return (0, mk.jsx)("span", {
        className: "Baf2QuestChips",
        children: oT.map((TT => {
          let [oT, IT, iT] = TT;
          const zT = IT >= iT;
          return (0, mk.jsxs)("span", {
            className: gz()("Baf2QuestChip", {
              Met: zT
            }),
            children: [(0, mk.jsx)(BS, {
              item: oT
            }), (0, mk.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: zT ? `\u2713${iT}` : `${IT}/${iT}`
            })]
          }, oT)
        }))
      })
    }

    function DS(TT, oT) {
      const {
        key: IT,
        params: iT
      } = xT(oT, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return TT(`${iS}${IT}`, {
        ...iT,
        name: TT(`${iS}${rT(oT).nameKey}`)
      })
    }

    function LS(TT) {
      let {
        core: oT,
        t: IT
      } = TT;
      const [iT, zT] = oT, kT = zT > 0 ? Math.floor(100 * iT / zT) : 100;
      return (0, mk.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": IT(`${iS}questCoreLabel`, {
          have: String(iT),
          need: String(zT)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": kT,
        children: [(0, mk.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: IT(`${iS}questCore`, {
            percent: String(kT)
          })
        }), (0, mk.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, mk.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${kT}%`
            }
          })
        })]
      })
    }

    function xS(TT) {
      let {
        rows: oT,
        t: IT
      } = TT;
      const iT = oT.filter((TT => TT.done)).length;
      return (0, mk.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": IT(`${iS}questStepsProgress`, {
          done: String(iT),
          total: String(oT.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": oT.length,
        "aria-valuenow": iT,
        children: oT.map((TT => (0, mk.jsx)("span", {
          className: gz()("Baf2QuestSegment", {
            Done: TT.done,
            Current: TT.current
          })
        }, TT.id)))
      })
    }
    const cS = (0, iT.memo)(MS, KS);

    function KS(TT, oT) {
      const IT = IT => TT.view.itemNames[IT] === oT.view.itemNames[IT];
      return TT.t === oT.t && TT.extra === oT.extra && (null === TT.row.item || IT(TT.row.item)) && TT.row.madeFor.every(IT) && TT.row.also.every(IT) && oS()(TT.row, oT.row)
    }

    function MS(TT) {
      let {
        row: oT,
        view: IT,
        t: iT,
        extra: zT
      } = TT;
      const {
        isTouchScreen: kT
      } = (0, Mz.k)(["isTouchScreen"]), WT = oT.item ? function(TT, oT, IT) {
        return 1 !== IT && IS.has(TT) ? mz(oT) : null
      }(oT.key, oT.item, oT.total) : null, XT = WT ? iT(WT) : oT.item ? kS(iT, IT.itemNames[oT.item], oT.item) : "", BT = oT.also.map((TT => kS(iT, IT.itemNames[TT], TT))), FT = BT.join(", "), ST = function(TT, oT) {
        var IT;
        return oT.length < 2 ? null !== (IT = oT[0]) && void 0 !== IT ? IT : "" : TT(`${iS}listAnd`, {
          rest: oT.slice(0, -1).join(TT(`${iS}listComma`)),
          last: oT[oT.length - 1]
        })
      }(iT, [XT, ...BT]), DT = iT(`${iS}${oT.key}`, {
        ...XS(iT, kT),
        ...WS(oT.params),
        item: XT,
        also: FT,
        itemList: ST,
        total: String(oT.total)
      }), [LT, ...xT] = DT.split("\n"), cT = oT.total > 1 && !oT.done && !oT.away;
      return (0, mk.jsxs)("li", {
        className: gz()("Baf2QuestStep", {
          Done: oT.done,
          Current: oT.current,
          JustFinished: oT.justFinished,
          Away: oT.away
        }),
        children: [!oT.done && null !== oT.item && (0, mk.jsx)(BS, {
          item: oT.item
        }), (oT.done || null === oT.item) && (0, mk.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: oT.done ? "\u2713" : "\u25cb"
        }), (0, mk.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, mk.jsx)("strong", {
            children: LT
          }), xT.length > 0 && (0, mk.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: xT.join(" ")
          }), !oT.done && oT.madeFor.length > 0 && (0, mk.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: iT("buildAFactory2Game:questRowFor", {
              items: oT.madeFor.map((TT => kS(iT, IT.itemNames[TT], TT))).join(" \u2192 ")
            })
          }), cT && (0, mk.jsx)(FS, {
            label: LT,
            percent: Math.round(100 * oT.amount / oT.total),
            progress: `${oT.amount.toLocaleString("en-US")}/${oT.total.toLocaleString("en-US")}`
          }), !oT.done && !oT.away && oT.chips && oT.chips.length > 0 && (0, mk.jsx)(SS, {
            chips: oT.chips
          }), zT]
        })]
      })
    }

    function rS(TT, oT) {
      let [IT, iT] = oT;
      return TT(`${iS}${IT}`, WS(iT))
    }

    function AS(TT) {
      let [oT, IT] = TT;
      return oT + JSON.stringify(IT)
    }

    function gS(TT) {
      let {
        goal: oT,
        t: IT
      } = TT;
      return oT ? (0, mk.jsx)("span", {
        className: "Baf2BookGoal",
        children: IT(`${iS}${oT}`)
      }) : null
    }

    function hS(TT) {
      let {
        view: oT,
        t: IT
      } = TT;
      if (!oT.name) return null;
      const iT = nz(oT.rows);
      return (0, mk.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, mk.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: IT(`${iS}currentQuest`)
        }), (0, mk.jsx)("strong", {
          className: "Baf2BookTitle",
          children: rS(IT, oT.name)
        }), (0, mk.jsx)(gS, {
          goal: oT.goal,
          t: IT
        }), iT.length > 1 && (0, mk.jsx)(xS, {
          rows: iT,
          t: IT
        }), (0, mk.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: oT.rows.map((TT => (0, mk.jsx)(cS, {
            row: TT,
            view: oT,
            t: IT
          }, TT.id)))
        }), oT.reward && (0, mk.jsxs)("span", {
          className: "Baf2BookReward",
          children: [IT(`${iS}questReward`), (0, mk.jsx)(BS, {
            item: oT.reward
          }), kS(IT, oT.itemNames[oT.reward], oT.reward)]
        })]
      })
    }

    function wS(TT) {
      let {
        quest: oT,
        upcoming: IT,
        t: iT
      } = TT;
      return (0, mk.jsxs)("li", {
        className: gz()("Baf2BookQuest", {
          Done: oT[3],
          Upcoming: IT
        }),
        children: [(0, mk.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: oT[3] ? "\u2713" : "\u25cb"
        }), (0, mk.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, mk.jsx)("strong", {
            className: "Baf2BookTitle",
            children: rS(iT, oT)
          }), (0, mk.jsx)(gS, {
            goal: oT[2],
            t: iT
          })]
        })]
      })
    }

    function mS(TT) {
      let {
        done: oT,
        total: IT,
        t: iT
      } = TT;
      const zT = IT > 0 ? Math.round(100 * oT / IT) : 0,
        kT = iT(`${iS}questBookChapterProgress`, {
          done: String(oT),
          total: String(IT)
        });
      return (0, mk.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, mk.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": kT,
          "aria-valuemin": 0,
          "aria-valuemax": IT,
          "aria-valuenow": oT,
          children: (0, mk.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${zT}%`
            }
          })
        }), (0, mk.jsx)("span", {
          className: "Baf2BookProgressText",
          children: kT
        })]
      })
    }

    function eS(TT) {
      let {
        view: oT,
        tier: IT,
        quests: iT,
        t: zT
      } = TT;
      const kT = IT === oT.tier,
        WT = (null !== iT && void 0 !== iT ? iT : []).filter((TT => !TT[4])),
        XT = (null !== iT && void 0 !== iT ? iT : []).filter((TT => TT[4])),
        BT = WT.filter((TT => TT[3])).length,
        FT = kT && oT.name ? AS(oT.name) : null,
        ST = WT.findIndex((TT => !TT[3] && AS(TT) === FT));
      return (0, mk.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, mk.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, mk.jsx)("h3", {
            children: DS(zT, IT)
          }), WT.length > 0 && (0, mk.jsx)(mS, {
            done: BT,
            total: WT.length,
            t: zT
          }), kT && oT.core && (0, mk.jsx)(LS, {
            core: oT.core,
            t: zT
          })]
        }), (0, mk.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === iT && kT && (0, mk.jsx)(hS, {
            view: oT,
            t: zT
          }), WT.map(((TT, IT) => IT === ST ? (0, mk.jsx)(hS, {
            view: oT,
            t: zT
          }, AS(TT)) : (0, mk.jsx)(wS, {
            quest: TT,
            upcoming: !TT[3],
            t: zT
          }, AS(TT))))]
        }), kT && oT.side && (0, mk.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, mk.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: zT(`${iS}questSide`)
          }), (0, mk.jsx)("strong", {
            className: "Baf2BookTitle",
            children: rS(zT, oT.side.name)
          }), (0, mk.jsx)(gS, {
            goal: oT.side.goal,
            t: zT
          }), (0, mk.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, mk.jsx)(cS, {
              row: oT.side.row,
              view: oT,
              t: zT
            })
          })]
        }), XT.length > 0 && (0, mk.jsxs)(mk.Fragment, {
          children: [(0, mk.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: zT(`${iS}questBookSidesDone`)
          }), (0, mk.jsx)("ol", {
            className: "Baf2BookQuests",
            children: XT.map((TT => (0, mk.jsx)(wS, {
              quest: TT,
              upcoming: !1,
              t: zT
            }, AS(TT))))
          })]
        })]
      })
    }

    function RS(TT) {
      var oT, IT, kT;
      let {
        store: WT,
        close: XT
      } = TT;
      const {
        t: BT
      } = (0, ez.t)(), FT = (0, VF.i)(Jz, WT.get()), DT = null !== (oT = FT.tier) && void 0 !== oT ? oT : 1, [LT, xT] = (0, iT.useState)(null), cT = (null === LT || void 0 === LT ? void 0 : LT.at) === DT ? LT.tier : DT, rT = (0, iT.useRef)(null), AT = null !== FT.chapters;
      (0, iT.useEffect)((() => {
        var TT;
        rT.current && (rT.current.scrollTop = 0);
        const oT = null === (TT = rT.current) || void 0 === TT ? void 0 : TT.querySelector(".Baf2BookQuest.Current");
        if (rT.current && oT) {
          const TT = oT.getBoundingClientRect().bottom - rT.current.getBoundingClientRect().bottom;
          TT > 0 && (rT.current.scrollTop += Math.min(TT, oT.getBoundingClientRect().top - rT.current.getBoundingClientRect().top))
        }
      }), [cT, AT]);
      const gT = null === (IT = FT.chapters) || void 0 === IT ? void 0 : IT.find((TT => {
        let [oT] = TT;
        return oT === cT
      }));
      return (0, mk.jsx)(AW.e, {
        close: XT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mk.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: zS,
          children: [(0, mk.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mk.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: BT(`${iS}questBookTitle`)
            }), (0, mk.jsx)(gW.j, {
              onClick: XT
            })]
          }), (0, mk.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": BT(`${iS}questBookChapters`),
            children: zT.slice(0, ST()).map(((TT, oT) => {
              const IT = oT + 1,
                {
                  kind: iT,
                  short: zT
                } = MT(IT),
                kT = KT(IT, DT),
                WT = kT ? BT(`${iS}coreAtomicHidden`) : DS(BT, IT);
              return (0, mk.jsx)("li", {
                children: (0, mk.jsx)("button", {
                  type: "button",
                  className: gz()({
                    Stage: "tier" !== iT,
                    Atomic: "atomic" === iT,
                    Current: IT === DT,
                    Selected: IT === cT
                  }),
                  disabled: IT > DT,
                  "aria-pressed": IT === cT,
                  "aria-label": WT,
                  title: kT ? void 0 : WT,
                  onClick: () => {
                    xT({
                      tier: IT,
                      at: DT
                    })
                  },
                  children: kT ? "?" : zT
                })
              }, TT.nameKey)
            }))
          }), (0, mk.jsxs)("div", {
            ref: rT,
            className: "Baf2BookBody",
            children: [Oz(FT) && cT === DT && (0, mk.jsx)("p", {
              className: "Baf2BookEmpty",
              children: BT(`${iS}questBookAllDone`)
            }), (0, mk.jsx)(eS, {
              view: FT,
              tier: cT,
              quests: null !== (kT = null === gT || void 0 === gT ? void 0 : gT[1]) && void 0 !== kT ? kT : null,
              t: BT
            })]
          })]
        })
      })
    }
    const uS = "buildAFactory2Game:";

    function vS(TT) {
      let {
        tiers: oT,
        from: IT,
        tier: iT,
        shown: zT,
        PL: kT
      } = TT;
      const {
        t: WT
      } = (0, ez.t)(), XT = oT.map(((TT, oT) => {
        const XT = IT + oT,
          {
            kind: BT,
            short: FT
          } = MT(XT),
          ST = KT(XT, iT);
        return (0, mk.jsx)("li", {
          children: (0, mk.jsx)("button", {
            type: "button",
            className: gz()({
              Stage: "tier" !== BT,
              Silhouette: ST,
              Reached: XT <= iT,
              Current: XT === iT,
              Next: XT === iT + 1,
              Selected: XT === zT
            }),
            disabled: ST,
            "aria-pressed": XT === zT,
            "aria-label": ST ? WT(`${uS}coreAtomicHidden`) : void 0,
            title: ST ? void 0 : WT(`${uS}${TT.nameKey}`),
            onClick: () => {
              kT(XT)
            },
            children: ST ? "?" : FT
          })
        }, TT.nameKey)
      }));
      return (0, mk.jsx)(mk.Fragment, {
        children: XT
      })
    }

    function ES(TT) {
      let {
        id: oT,
        label: IT,
        tiers: iT,
        from: zT,
        ...kT
      } = TT;
      return (0, mk.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, mk.jsx)("span", {
          id: oT,
          className: "Baf2CoreLadderLabel",
          children: IT
        }), (0, mk.jsx)("ol", {
          "aria-labelledby": oT,
          children: (0, mk.jsx)(vS, {
            ...kT,
            tiers: iT,
            from: zT
          })
        })]
      })
    }

    function fS(TT) {
      const {
        t: oT
      } = (0, ez.t)(), IT = zT.findIndex((TT => void 0 !== TT.stage)), iT = zT.findIndex((TT => void 0 !== TT.reactorTier)), kT = IT < 0 ? zT : zT.slice(0, IT), WT = IT < 0 ? [] : zT.slice(IT, iT < 0 ? void 0 : iT), BT = iT < 0 || !XT() ? [] : zT.slice(iT);
      return (0, mk.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, mk.jsx)(ES, {
          ...TT,
          id: "baf2CoreTiersLabel",
          label: oT(`${uS}coreTiersLabel`),
          tiers: kT,
          from: 1
        }), WT.length > 0 && (0, mk.jsx)(ES, {
          ...TT,
          id: "baf2CoreStagesLabel",
          label: oT(`${uS}coreStagesLabel`),
          tiers: WT,
          from: IT + 1
        }), BT.length > 0 && (0, mk.jsx)(ES, {
          ...TT,
          id: "baf2CoreAtomicLabel",
          label: oT(`${uS}coreAtomicLabel`),
          tiers: BT,
          from: iT + 1
        })]
      })
    }
    const CS = "buildAFactory2Game:";

    function jS(TT) {
      let {
        item: oT,
        itemNames: IT,
        children: iT
      } = TT;
      return (0, mk.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, mk.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, mk.jsx)(uz.c, {
            itemName: oT,
            amount: 0
          })
        }), (0, mk.jsx)(vz.c, {
          text: IT[oT]
        }), iT]
      })
    }

    function JS(TT) {
      const oT = new Map;
      for (const {
          block: iT
        }
        of TT.newDeposits) {
        var IT;
        oT.set(iT, (null !== (IT = oT.get(iT)) && void 0 !== IT ? IT : 0) + 1)
      }
      return [...oT]
    }

    function US(TT) {
      let {
        value: oT,
        label: IT,
        more: iT
      } = TT;
      return (0, mk.jsxs)("li", {
        children: [(0, mk.jsx)("strong", {
          children: oT
        }), (0, mk.jsx)("span", {
          children: IT
        }), iT > 0 && (0, mk.jsxs)("em", {
          children: ["+", iT]
        })]
      })
    }

    function aS(TT) {
      let {
        items: oT,
        itemNames: IT
      } = TT;
      const {
        t: zT
      } = (0, ez.t)(), [kT, WT] = (0, iT.useState)(null), XT = null !== kT && oT.includes(kT) ? kT : null;
      return (0, mk.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, mk.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: zT(`${CS}coreRewardUnlocks`)
        }), (0, mk.jsx)("ul", {
          children: oT.map((TT => (0, mk.jsx)("li", {
            children: (0, mk.jsx)("button", {
              type: "button",
              className: gz()("Baf2PanelIcon", {
                Picked: TT === XT
              }),
              title: Tk(zT, TT),
              "aria-label": Tk(zT, TT),
              "aria-pressed": TT === XT,
              onClick: () => {
                WT(TT === XT ? null : TT)
              },
              children: (0, mk.jsx)(uz.c, {
                itemName: TT,
                amount: 0
              })
            })
          }, TT)))
        }), (0, mk.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== XT && (0, mk.jsxs)(mk.Fragment, {
            children: [(0, mk.jsx)(vz.c, {
              text: IT[XT]
            }), " \xb7 ", (0, mk.jsx)(vz.c, {
              text: IT[CT(XT)]
            })]
          }), null === XT && zT(`${CS}coreRecipeTap`)]
        })]
      })
    }

    function YS(TT) {
      var oT, IT;
      let {
        def: iT,
        tier: zT,
        itemNames: kT
      } = TT;
      const {
        t: WT
      } = (0, ez.t)(), XT = zT > 1 ? rT(zT - 1) : void 0, BT = Math.round(2 * iT.islandRadius), FT = XT ? Math.round(2 * XT.islandRadius) : BT, ST = zT >= 3 ? Mi(zT) : null;
      return (0, mk.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, mk.jsxs)("ul", {
          className: gz()("Baf2CoreStats", {
            Four: null !== ST
          }),
          children: [(0, mk.jsx)(US, {
            value: `${BT}\xd7${BT}`,
            label: WT(`${CS}coreStatIsland`),
            more: BT - FT
          }), (0, mk.jsx)(US, {
            value: String(iT.machineAllowance),
            label: WT(`${CS}coreStatMachines`),
            more: iT.machineAllowance - (null !== (oT = null === XT || void 0 === XT ? void 0 : XT.machineAllowance) && void 0 !== oT ? oT : iT.machineAllowance)
          }), (0, mk.jsx)(US, {
            value: String(iT.beltAllowance),
            label: WT(`${CS}coreStatBelts`),
            more: iT.beltAllowance - (null !== (IT = null === XT || void 0 === XT ? void 0 : XT.beltAllowance) && void 0 !== IT ? IT : iT.beltAllowance)
          }), null !== ST && (0, mk.jsx)(US, {
            value: String(ST),
            label: WT(`${CS}coreStatStorage`),
            more: ST - (XT ? Mi(zT - 1) : ST)
          })]
        }), iT.reward && (0, mk.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, mk.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: WT(`${CS}coreRewardItem`)
          }), (0, mk.jsx)(jS, {
            item: iT.reward,
            itemNames: kT
          })]
        }), iT.newDeposits.length > 0 && (0, mk.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, mk.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: WT(iT.newDeposits.length > 1 ? `${CS}coreRewardDeposits` : `${CS}coreRewardDeposit`)
          }), JS(iT).map((TT => {
            let [oT, IT] = TT;
            return (0, mk.jsx)(jS, {
              item: oT,
              itemNames: kT,
              children: IT > 1 && ` \xd7${IT}`
            }, oT)
          }))]
        }), iT.unlocks.length > 0 && (0, mk.jsx)(aS, {
          items: iT.unlocks,
          itemNames: kT
        }), (0, mk.jsx)(QS, {
          tier: zT
        })]
      })
    }

    function QS(TT) {
      let {
        tier: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)(), iT = Lz[oT];
      if (!iT) return null;
      const zT = Dz(oT, 0, 0).barrierMax !== Dz(oT - 1, 0, 0).barrierMax;
      return (0, mk.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, mk.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, mk.jsx)(uz.c, {
            itemName: zT ? kz.Chestplate : zz,
            amount: 0
          })
        }), IT(`${CS}gearPerkLine`, {
          perk: IT(`${CS}${iT}`)
        })]
      })
    }

    function OS(TT, oT) {
      return null === TT ? oT : TT.value
    }

    function HS(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === TT || IT - TT.atMs >= iT ? null : zT(TT.value, oT) ? TT.armed ? null : TT : TT.armed ? TT : {
        ...TT,
        armed: !0
      }
    }

    function nS(TT, oT) {
      const IT = oT.filter((oT => {
        var IT;
        return !1 !== (null === (IT = TT.get(oT)) || void 0 === IT ? void 0 : IT.value)
      }));
      for (const [iT, zT] of TT) zT.value && !oT.includes(iT) && IT.push(iT);
      return IT
    }

    function qS(TT, oT, IT, zT) {
      const [kT, WT] = (0, iT.useState)((() => new Map)), XT = () => {
        WT((oT => function(TT, oT, IT, iT) {
          var zT;
          let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            WT = null;
          for (const [XT, BT] of TT) {
            const zT = HS(BT, oT(XT), IT, iT, kT);
            zT !== BT && (WT ??= new Map(TT), null === zT ? WT.delete(XT) : WT.set(XT, zT))
          }
          return null !== (zT = WT) && void 0 !== zT ? zT : TT
        }(oT, TT, Date.now(), IT, zT)))
      };
      (0, iT.useEffect)((() => {
        XT()
      }), [oT, IT]), (0, iT.useEffect)((() => {
        if (0 === kT.size) return;
        const TT = Math.min(...[...kT.values()].map((TT => TT.atMs))),
          oT = setTimeout(XT, Math.max(0, TT + IT - Date.now()) + 1);
        return () => {
          clearTimeout(oT)
        }
      }), [kT, oT, IT]);
      return [kT, (oT, IT) => {
        WT((iT => {
          const kT = new Map(iT);
          return kT.set(oT, function(TT, oT, IT) {
            return {
              value: TT,
              atMs: IT,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(TT, oT)
            }
          }(IT, TT(oT), Date.now(), zT)), kT
        }))
      }]
    }
    const ZS = "buildAFactory2Game:";

    function lS(TT) {
      let {
        message: oT,
        itemNames: IT
      } = TT;
      const zT = HW(),
        {
          t: kT
        } = (0, ez.t)(),
        [WT, XT] = (0, iT.useState)(!1),
        [BT, FT] = function(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jW;
          const [IT, iT] = qS((oT => TT.includes(oT)), TT, oT, Object.is);
          return [nS(IT, TT), iT]
        }(oT.baf2CoreBankPaused),
        ST = new Set(BT),
        DT = [...oT.baf2CoreBanked];
      for (const iT of ST) DT.some((TT => {
        let [oT] = TT;
        return oT === iT
      })) || DT.push([iT, 0]);
      return 0 === DT.length ? null : (0, mk.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, mk.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": WT,
          onClick: () => {
            XT(!WT)
          },
          children: [(0, mk.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: kT(`${ZS}coreBankedLater`)
          }), (0, mk.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: DT.map((TT => {
              let [oT, IT] = TT;
              const iT = ST.has(oT);
              return (0, mk.jsxs)("span", {
                className: gz()({
                  Paused: iT
                }),
                title: iT ? kT(`${ZS}coreBankPausedTag`) : void 0,
                children: [(0, mk.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, mk.jsx)(uz.c, {
                    itemName: oT,
                    amount: 0
                  })
                }), IT, iT && (0, mk.jsx)(Rz.e, {
                  name: "pause"
                })]
              }, oT)
            }))
          }), (0, mk.jsx)(Rz.e, {
            name: WT ? "angle-up" : "angle-down"
          })]
        }), WT && (0, mk.jsxs)(mk.Fragment, {
          children: [(0, mk.jsx)("ul", {
            children: DT.map((TT => {
              let [oT, iT] = TT;
              const WT = ST.has(oT);
              return (0, mk.jsxs)("li", {
                children: [(0, mk.jsxs)(jS, {
                  item: oT,
                  itemNames: IT,
                  children: [(0, mk.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: iT
                  }), WT && (0, mk.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: kT(`${ZS}coreBankPausedTag`)
                  })]
                }), (0, mk.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, mk.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === iT,
                    onClick: () => {
                      zT.send(`baf2corewithdraw ${iT} ${oT}`)
                    },
                    children: kT(`${ZS}coreTake`)
                  }), (0, mk.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      zT.send(`${hT} ${oT}`), FT(oT, !WT)
                    },
                    children: kT(WT ? `${ZS}coreBankResume` : `${ZS}coreBankStop`)
                  })]
                })]
              }, oT)
            }))
          }), (0, mk.jsx)("p", {
            className: "Baf2CoreHint",
            children: kT(`${ZS}coreBankNote`)
          })]
        })]
      })
    }
    const sS = "buildAFactory2Game:";

    function tS(TT) {
      const oT = Math.max(0, Math.floor(TT));
      return `${Math.floor(oT/60)}:${String(oT%60).padStart(2,"0")}`
    }

    function GS(TT) {
      let {
        item: oT
      } = TT;
      return (0, mk.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, mk.jsx)(uz.c, {
          itemName: oT,
          amount: 0
        })
      })
    }

    function pS() {
      return (0, mk.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, mk.jsx)(Rz.e, {
          name: "bolt"
        })
      })
    }

    function bS(TT) {
      let {
        charge: oT,
        hint: IT,
        itemNames: iT
      } = TT;
      const zT = HW(),
        {
          t: kT
        } = (0, ez.t)(),
        [WT, XT, BT, FT, ST, DT, LT] = oT,
        [xT, cT] = function(TT) {
          var oT;
          let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jW,
            iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [zT, kT] = qS((() => TT), TT, IT, iT);
          return [OS(null !== (oT = zT.get("")) && void 0 !== oT ? oT : null, TT), TT => {
            kT("", TT)
          }]
        }(LT),
        KT = xT === LT ? DT : !xT,
        MT = FT >= ST,
        rT = WT.find((TT => {
          let [, oT, IT] = TT;
          return IT < .9 * oT
        }));
      let AT = `${sS}coreChargeWaiting`,
        gT = {};
      return MT ? AT = `${sS}coreChargeDone` : xT ? AT = `${sS}coreChargeStopped` : KT && IT ? (AT = `${sS}${IT[0]}`, gT = {
        item: Tk(kT, IT[1])
      }) : KT && rT ? (AT = `${sS}coreChargeShort`, gT = {
        item: Tk(kT, rT[0])
      }) : KT && XT > 0 && !BT ? AT = `${sS}coreChargePower` : KT && (AT = `${sS}coreChargeRunning`), (0, mk.jsxs)("div", {
        className: gz()("Baf2CoreCharge", {
          Waiting: !KT && !MT,
          Done: MT
        }),
        children: [(0, mk.jsxs)("h4", {
          children: [kT(`${sS}coreChargeTitle`), (0, mk.jsx)("span", {
            children: kT(`${sS}coreChargeProgress`, {
              done: tS(FT),
              need: tS(ST)
            })
          })]
        }), (0, mk.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, mk.jsx)("div", {
            style: {
              width: 100 * Math.min(FT, ST) / ST + "%"
            }
          })
        }), (0, mk.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [WT.map((TT => {
            var oT;
            let [IT, zT, WT] = TT;
            const XT = WT >= .9 * zT;
            return (0, mk.jsxs)("li", {
              className: gz()({
                Done: XT,
                Short: KT && !XT
              }),
              children: [(0, mk.jsx)(GS, {
                item: IT
              }), (0, mk.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, mk.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, mk.jsx)(vz.c, {
                    text: null !== (oT = iT[IT]) && void 0 !== oT ? oT : IT
                  }), (0, mk.jsx)("span", {
                    children: kT(`${sS}coreChargeItem`, {
                      now: String(WT),
                      need: String(zT)
                    })
                  })]
                }), (0, mk.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, mk.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*WT/zT)}%`
                    }
                  })
                })]
              })]
            }, IT)
          })), XT > 0 && (0, mk.jsxs)("li", {
            className: gz()("Baf2CoreChargePower", {
              Short: KT && !BT
            }),
            children: [(0, mk.jsx)(pS, {}), (0, mk.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, mk.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, mk.jsx)("span", {
                  children: kT(`${sS}coreChargePowerRow`, {
                    power: PT(XT)
                  })
                })
              })
            })]
          })]
        }), (0, mk.jsx)("p", {
          className: "Baf2CoreHint",
          children: kT(AT, gT)
        }), !MT && (KT || xT) && (0, mk.jsx)("button", {
          type: "button",
          className: gz()("Baf2CoreChargeToggle", {
            Stopped: xT
          }),
          onClick: () => {
            zT.send(mT), cT(!xT)
          },
          children: kT(xT ? `${sS}coreChargeRestart` : `${sS}coreChargeStop`)
        })]
      })
    }

    function yS(TT) {
      let {
        charge: oT,
        reached: IT,
        itemNames: iT
      } = TT;
      const {
        t: zT
      } = (0, ez.t)();
      return (0, mk.jsxs)("div", {
        className: gz()("Baf2CoreCharge", {
          Done: IT
        }),
        children: [(0, mk.jsxs)("h4", {
          children: [zT(`${sS}coreChargeTitle`), (0, mk.jsx)("span", {
            children: zT(`${sS}coreChargeSpecTime`, {
              time: tS(oT.seconds)
            })
          })]
        }), (0, mk.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [oT.items.map((TT => {
            var oT;
            let {
              item: kT,
              amount: WT
            } = TT;
            return (0, mk.jsxs)("li", {
              className: gz()({
                Done: IT
              }),
              children: [(0, mk.jsx)(GS, {
                item: kT
              }), (0, mk.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, mk.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, mk.jsx)(vz.c, {
                    text: null !== (oT = iT[kT]) && void 0 !== oT ? oT : kT
                  }), (0, mk.jsx)("span", {
                    children: zT(`${sS}coreChargeSpecItem`, {
                      need: String(WT)
                    })
                  })]
                })
              })]
            }, kT)
          })), oT.powerPerS > 0 && (0, mk.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, mk.jsx)(pS, {}), (0, mk.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, mk.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, mk.jsx)("span", {
                  children: zT(`${sS}coreChargePowerRow`, {
                    power: PT(oT.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const NS = "buildAFactory2Game:";

    function PS(TT) {
      let {
        def: oT,
        reached: IT,
        banked: iT,
        itemNames: zT
      } = TT;
      const {
        t: kT
      } = (0, ez.t)();
      return (0, mk.jsx)("ul", {
        className: "Baf2CoreCost",
        children: oT.cost.map((TT => {
          let {
            item: oT,
            amount: WT
          } = TT;
          const XT = IT ? 0 : iT(oT);
          return (0, mk.jsx)("li", {
            children: (0, mk.jsx)(jS, {
              item: oT,
              itemNames: zT,
              children: (0, mk.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: XT > 0 ? kT(`${NS}coreBankedFor`, {
                  amount: String(XT),
                  total: String(WT)
                }) : `\xd7${WT}`
              })
            })
          }, oT)
        }))
      })
    }

    function dS(TT, oT) {
      if (oT >= ST()) return TT(`${NS}coreMaxTier`);
      const IT = FT[oT + 1];
      return IT && !IT.startsWith("upgradeCore") ? TT(`${NS}coreGateQuest`, {
        quest: TT(`${NS}quest_${IT}`)
      }) : TT(`${NS}coreGateClosed`)
    }

    function VS() {
      const {
        t: TT
      } = (0, ez.t)(), oT = HW(), IT = (0, iT.useRef)(null), zT = (0, iT.useRef)(Date.now());
      return tF(!0, IT), (0, mk.jsx)("div", {
        ref: IT,
        className: "Baf2CoreGrow",
        children: (0, mk.jsx)(gW.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - zT.current >= 600 && oT.send(gT)
          },
          children: TT(`${NS}coreGrow`)
        })
      })
    }

    function TD(TT) {
      let {
        message: oT,
        itemNames: IT,
        next: iT
      } = TT;
      const zT = HW(),
        {
          t: kT
        } = (0, ez.t)(),
        WT = oT.baf2CoreTier,
        XT = oT.baf2CoreReady,
        BT = oT.baf2CoreNeeds.filter((TT => {
          let [, oT, IT, iT] = TT;
          return iT > 0 && oT < IT
        })),
        FT = oT.baf2CoreNeeds.every((TT => {
          let [, oT, IT] = TT;
          return oT >= IT
        })),
        ST = oT.baf2CoreKeep;
      return (0, mk.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, mk.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [XT && (0, mk.jsx)(VS, {}), (0, mk.jsx)("h3", {
            children: kT(`${NS}coreBring`)
          }), (0, mk.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: oT.baf2CoreNeeds.map((TT => {
              let [oT, iT, WT, XT] = TT;
              return (0, mk.jsxs)("li", {
                className: gz()({
                  Done: iT >= WT
                }),
                children: [(0, mk.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, mk.jsx)(uz.c, {
                    itemName: oT,
                    amount: 0
                  })
                }), (0, mk.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, mk.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, mk.jsx)(vz.c, {
                      text: IT[oT]
                    }), (0, mk.jsxs)("span", {
                      children: [iT, "/", WT]
                    })]
                  }), (0, mk.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, mk.jsx)("div", {
                      style: {
                        width: 100 * iT / WT + "%"
                      }
                    }), XT > 0 && (0, mk.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * XT / WT + "%"
                      }
                    })]
                  })]
                }), XT > 0 && iT < WT && (0, mk.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    zT.send(`${wT} ${oT}`)
                  },
                  children: kT(`${NS}coreDeposit`, {
                    amount: String(XT)
                  })
                })]
              }, oT)
            }))
          }), oT.baf2CoreCharge && (0, mk.jsx)(bS, {
            charge: oT.baf2CoreCharge,
            hint: oT.baf2CoreChargeHint,
            itemNames: IT
          }), !XT && BT.length > 1 && (0, mk.jsx)(gW.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              zT.send(gT)
            },
            children: kT(`${NS}coreHandOver`)
          }), !XT && void 0 !== ST && (0, mk.jsx)("p", {
            className: "Baf2CoreHint",
            children: kT(`${NS}coreKeepRest`, {
              item: Tk(kT, ST)
            })
          }), !XT && !FT && 0 === BT.length && void 0 === ST && (0, mk.jsx)("p", {
            className: "Baf2CoreHint",
            children: kT(`${NS}coreNothingHeld`)
          }), (0, mk.jsx)(lS, {
            message: oT,
            itemNames: IT
          })]
        }), (0, mk.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, mk.jsx)("h3", {
            children: kT(`${NS}coreRewards`)
          }), (0, mk.jsx)(YS, {
            def: iT,
            tier: WT + 1,
            itemNames: IT
          })]
        })]
      })
    }

    function oD(TT) {
      let {
        message: oT,
        itemNames: IT,
        shown: iT
      } = TT;
      const {
        t: zT
      } = (0, ez.t)(), kT = oT.baf2CoreTier, WT = rT(iT), XT = iT <= kT, BT = new Map(oT.baf2CoreBanked), FT = !AT(kT, eT(oT)) && iT === kT;
      return (0, mk.jsxs)("div", {
        className: gz()("Baf2CoreBody", {
          Locked: !XT
        }),
        children: [(0, mk.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, mk.jsx)("h3", {
            children: zT(XT ? `${NS}coreItTook` : `${NS}coreItNeeds`)
          }), 0 === WT.cost.length && (0, mk.jsx)("p", {
            className: "Baf2CoreHint",
            children: zT(`${NS}coreTierStart`)
          }), WT.cost.length > 0 && (0, mk.jsx)(PS, {
            def: WT,
            reached: XT,
            banked: TT => {
              var oT;
              return function(TT, oT, IT, iT) {
                let zT = TT;
                for (let WT = oT + 2; WT <= IT; WT++) {
                  var kT;
                  const TT = rT(WT).cost.find((TT => TT.item === iT)),
                    oT = Math.min(zT, null !== (kT = null === TT || void 0 === TT ? void 0 : TT.amount) && void 0 !== kT ? kT : 0);
                  if (WT === IT) return oT;
                  zT -= oT
                }
                return 0
              }(null !== (oT = BT.get(TT)) && void 0 !== oT ? oT : 0, kT, iT, TT)
            },
            itemNames: IT
          }), WT.charge && (0, mk.jsx)(yS, {
            charge: WT.charge,
            reached: XT,
            itemNames: IT
          }), FT && (0, mk.jsxs)(mk.Fragment, {
            children: [(0, mk.jsx)("p", {
              className: "Baf2CoreHint",
              children: dS(zT, kT)
            }), (0, mk.jsx)(lS, {
              message: oT,
              itemNames: IT
            })]
          })]
        }), (0, mk.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, mk.jsx)("h3", {
            children: zT(XT ? `${NS}coreGave` : `${NS}coreLockedRewards`)
          }), (0, mk.jsx)(YS, {
            def: WT,
            tier: iT,
            itemNames: IT
          })]
        })]
      })
    }

    function ID(TT, oT) {
      const {
        key: IT,
        params: iT
      } = xT(oT - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return TT(`${NS}${IT}`, iT)
    }
    const iD = "buildAFactory2Game:",
      zD = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      kD = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function WD(TT) {
      let {
        view: oT,
        close: IT,
        askIslands: zT
      } = TT;
      const {
        t: kT
      } = (0, ez.t)(), [WT, XT] = (0, iT.useState)(!1);
      (0, iT.useEffect)((() => {
        if (!WT) return;
        const TT = window.setTimeout((() => {
          XT(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(TT)
        }
      }), [WT]);
      const {
        message: BT,
        itemNames: FT
      } = oT, ST = BT.baf2CoreTier, DT = rT(ST), LT = AT(ST, eT(BT)), [KT, MT] = BT.baf2CoreMachines, [gT, hT] = BT.baf2CoreBelts, wT = BT.baf2CoreStorage, mT = BT.baf2CoreReady, [RT, uT] = (0, iT.useState)(null), vT = (null === RT || void 0 === RT ? void 0 : RT.at) === ST && RT.ready === mT ? RT.tier : LT ? ST + 1 : ST;
      let ET = "coreTierLocked";
      vT <= ST ? ET = "coreTierReached" : vT === ST + 1 && (ET = "coreTierNext");
      const fT = kT(`${iD}${rT(vT).nameKey}`),
        CT = vT === ST + 1 ? LT : null,
        jT = xT(vT, {
          tier: ET,
          stage: zD[ET],
          atomic: kD[ET]
        }),
        JT = kT(`${iD}${jT.key}`, {
          ...jT.params,
          name: fT
        }),
        UT = xT(ST, cT),
        aT = kT(`${iD}${UT.key}`, {
          ...UT.params,
          name: kT(`${iD}${DT.nameKey}`)
        });
      return (0, mk.jsx)(AW.e, {
        close: IT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, mk.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, mk.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mk.jsxs)("div", {
              children: [(0, mk.jsx)("h2", {
                id: "baf2CoreTitle",
                children: kT(`${iD}coreTitle`)
              }), void 0 !== BT.baf2CoreIslandName && (0, mk.jsx)("p", {
                className: "Baf2CoreIsland",
                children: BT.baf2CoreIslandName
              }), (0, mk.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, mk.jsx)("span", {
                  children: aT
                }), (0, mk.jsx)("span", {
                  className: gz()({
                    Full: KT >= MT
                  }),
                  children: kT(`${iD}coreMachineCount`, {
                    amount: String(KT),
                    total: String(MT)
                  })
                }), (0, mk.jsx)("span", {
                  className: gz()({
                    Full: gT >= hT
                  }),
                  children: kT(`${iD}coreBeltCount`, {
                    amount: String(gT),
                    total: String(hT)
                  })
                }), void 0 !== wT && (0, mk.jsx)("span", {
                  className: gz()({
                    Full: wT[0] >= wT[1]
                  }),
                  children: kT(`${iD}coreStorageCount`, {
                    amount: String(wT[0]),
                    total: String(wT[1])
                  })
                })]
              })]
            }), (0, mk.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [BT.baf2CoreIslands && (0, mk.jsx)(gW.e, {
                className: "Baf2CoreIslandsButton",
                disabled: WT,
                onClick: () => {
                  XT(!0), zT()
                },
                children: kT(`${iD}islandsOpenButton`)
              }), (0, mk.jsx)(gW.j, {
                onClick: IT
              })]
            })]
          }), (0, mk.jsx)(fS, {
            tier: ST,
            shown: vT,
            PL: TT => {
              uT({
                tier: TT,
                at: ST,
                ready: mT
              })
            }
          }), (0, mk.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [JT, vT > ST + 1 && (0, mk.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: ID(kT, vT)
            })]
          }), 6 === vT && vT > ST && (0, mk.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: kT(`${iD}coreStagesNote`)
          }), 11 === vT && vT > ST && (0, mk.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: kT(`${iD}coreAtomicNote`)
          }), CT && (0, mk.jsx)(TD, {
            message: BT,
            itemNames: FT,
            next: CT
          }), !CT && (0, mk.jsx)(oD, {
            message: BT,
            itemNames: FT,
            shown: vT
          })]
        })
      })
    }
    const XD = {
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
    const BD = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: kk,
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

    function FD(TT) {
      return TT.baf2DropCometOreOnly ? "dropCometOre" : TT.baf2DropCometIsotope ? "seed" === TT.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function SD(TT) {
      let {
        message: oT,
        quests: IT,
        close: zT,
        leave: kT
      } = TT;
      const WT = HW(),
        {
          t: XT
        } = (0, ez.t)(),
        BT = (0, VF.i)(Jz, IT.get()),
        FT = function(TT) {
          var oT;
          if (!UT(TT.tutorial)) return null;
          const IT = TT.rows.find((TT => TT.current)),
            iT = IT ? XD[IT.key] : void 0;
          return null !== (oT = null !== iT && void 0 !== iT ? iT : TT.side ? XD[TT.side.row.key] : void 0) && void 0 !== oT ? oT : null
        }(BT),
        ST = null === BT.tier || Bk(BT.tier),
        DT = ST ? BD : BD.filter((TT => {
          let {
            item: oT
          } = TT;
          return oT !== kk
        })),
        [LT, xT] = (0, iT.useState)(null),
        cT = null !== LT && void 0 !== LT ? LT : !oT.baf2DropFoundSalvage && ST,
        KT = oT.baf2DropRuinDistance,
        MT = oT.baf2DropComet,
        rT = oT.baf2DropOldWorks,
        AT = oT.baf2DropGrove,
        gT = function(TT) {
          return 2 + Number(void 0 !== TT.baf2DropComet) + Number(!!TT.baf2DropOwedComet || void 0 !== TT.baf2DropOwedWaitMinutes) + Number(void 0 !== TT.baf2DropDigDistance) + Number(void 0 !== TT.baf2DropOldWorks) + Number(void 0 !== TT.baf2DropGrove)
        }(oT),
        hT = TT => {
          WT.send(function(TT) {
            return `baf2drop ${TT}`
          }(TT)), kT()
        };
      let wT = XT("buildAFactory2Game:dropRuinNone");
      if (null !== KT) {
        let TT = oT.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        oT.baf2DropRuinOldWorks && (TT = "dropRuinOldWorks");
        const IT = void 0 === oT.baf2DropRuinCluster ? XT("buildAFactory2Game:dropRuinOpen") : XT("buildAFactory2Game:dropRuinCluster", {
          count: String(oT.baf2DropRuinCluster)
        });
        wT = `${XT(`buildAFactory2Game:${TT}`,{distance:String(KT)})} ${IT}`
      }
      let mT = XT("buildAFactory2Game:dropBelowDescription");
      void 0 !== oT.baf2DropBelowLook && (mT = XT("buildAFactory2Game:dropBelowLook", {
        look: XT(oT.baf2DropBelowLook)
      }));
      const eT = "buildAFactory2Game:wildsRegion_survivorGrove" === oT.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        RT = Ak(XT, 60 * function(TT) {
          const [oT, IT] = (0, iT.useState)((() => Date.now())), [zT, kT] = (0, iT.useState)(oT);
          return (0, iT.useEffect)((() => {
            const TT = Date.now();
            IT(TT), kT(TT)
          }), [TT]), (0, iT.useEffect)((() => {
            const TT = window.setInterval((() => {
              kT(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(TT)
            }
          }), []), Math.max(1, TT.baf2DropRenewMinutes - Math.floor((zT - oT) / 6e4))
        }(oT)),
        uT = function(TT, oT, IT) {
          return "ruin" === TT && !IT || "owed" === TT && !oT.baf2DropOwedComet ? null : TT
        }(FT, oT, null !== KT),
        vT = function(TT) {
          for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
          return gz()("Baf2DropTile", ...IT, {
            Wanted: uT === TT
          })
        };
      return (0, mk.jsx)(AW.e, {
        close: zT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mk.jsxs)("section", {
          className: gz()("Baf2Panel Baf2DropMap", {
            Many: gT >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, mk.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mk.jsxs)("div", {
              children: [(0, mk.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: XT("buildAFactory2Game:dropMapTitle")
              }), (0, mk.jsx)("p", {
                children: XT("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, mk.jsx)(gW.j, {
              onClick: zT
            })]
          }), (0, mk.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== MT && (0, mk.jsxs)(gW.v, {
              className: vT("comet", "Baf2DropComet"),
              onClick: () => {
                hT("comet")
              },
              children: [(0, mk.jsx)("strong", {
                children: XT("buildAFactory2Game:dropComet")
              }), (0, mk.jsx)("span", {
                children: XT(`buildAFactory2Game:${FD(oT)}`, {
                  distance: String(MT)
                })
              })]
            }), oT.baf2DropOwedComet && (0, mk.jsxs)(gW.v, {
              className: vT("owed", "Baf2DropComet"),
              onClick: () => {
                hT("owed")
              },
              children: [(0, mk.jsx)("strong", {
                children: XT("buildAFactory2Game:dropOwedComet")
              }), (0, mk.jsx)("span", {
                children: oT.baf2DropOwedIsotope ? XT("buildAFactory2Game:dropOwedIsotopeDescription") : XT("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== oT.baf2DropOwedWaitMinutes && (0, mk.jsxs)(gW.v, {
              className: vT("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, mk.jsx)("strong", {
                children: XT("buildAFactory2Game:dropOwedComet")
              }), (0, mk.jsx)("span", {
                children: XT("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(oT.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, mk.jsxs)(gW.e, {
              className: vT("below"),
              onClick: () => {
                hT("below")
              },
              children: [(0, mk.jsx)("strong", {
                children: XT("buildAFactory2Game:dropBelow")
              }), (0, mk.jsx)("span", {
                children: mT
              })]
            }), void 0 !== oT.baf2DropDigDistance && (0, mk.jsxs)(gW.r, {
              className: vT("dig"),
              onClick: () => {
                hT("dig")
              },
              children: [(0, mk.jsx)("strong", {
                children: XT("buildAFactory2Game:dropDig")
              }), (0, mk.jsx)("span", {
                children: XT("buildAFactory2Game:dropDigDescription", {
                  distance: String(oT.baf2DropDigDistance),
                  y: rk(oT.baf2DropDigY)
                })
              })]
            }), void 0 !== AT && (0, mk.jsxs)(gW.r, {
              className: vT("grove", "Baf2DropGrove"),
              onClick: () => {
                hT("grove")
              },
              children: [(0, mk.jsx)("strong", {
                children: XT("buildAFactory2Game:dropGrove")
              }), (0, mk.jsx)("span", {
                children: XT(`buildAFactory2Game:${eT}`, {
                  distance: String(AT)
                })
              })]
            }), (0, mk.jsxs)(gW.m, {
              className: vT("ruin"),
              disabled: null === KT,
              onClick: () => {
                hT("ruin")
              },
              children: [(0, mk.jsx)("strong", {
                children: XT("buildAFactory2Game:dropRuin")
              }), (0, mk.jsx)("span", {
                children: wT
              })]
            }), void 0 !== rT && (0, mk.jsxs)(gW.C, {
              className: vT("works"),
              onClick: () => {
                hT("works")
              },
              children: [(0, mk.jsx)("strong", {
                children: XT("buildAFactory2Game:dropOldWorks")
              }), (0, mk.jsx)("span", {
                children: XT("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(rT)
                })
              })]
            })]
          }), (0, mk.jsx)("p", {
            className: "Baf2DropRenew",
            children: XT("buildAFactory2Game:dropRenew", {
              time: RT
            })
          }), (0, mk.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: cT,
            onToggle: TT => {
              TT.currentTarget.open !== cT && xT(TT.currentTarget.open)
            },
            children: [(0, mk.jsx)("summary", {
              children: XT("buildAFactory2Game:dropSalvageWhat")
            }), (0, mk.jsx)("p", {
              children: XT("buildAFactory2Game:dropSalvageIntro")
            }), (0, mk.jsx)("ul", {
              children: DT.map((TT => {
                let {
                  item: oT,
                  nameKey: IT,
                  useKey: iT,
                  params: zT
                } = TT;
                return (0, mk.jsxs)("li", {
                  children: [(0, mk.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, mk.jsx)(uz.c, {
                      itemName: oT,
                      amount: 0
                    })
                  }), (0, mk.jsxs)("span", {
                    children: [(0, mk.jsx)("strong", {
                      children: XT(IT)
                    }), ": ", XT(iT, zT)]
                  })]
                }, oT)
              }))
            })]
          })]
        })
      })
    }
    const DD = "buildAFactory2Game:";

    function LD(TT, oT) {
      return TT.sendIslandEdit(`baf2coopleave ${oT.baf2IslandId}`)
    }

    function xD(TT) {
      let {
        card: oT,
        canRename: IT,
        done: zT,
        t: kT
      } = TT;
      const WT = HW(),
        [XT, BT] = (0, iT.useState)(oT.baf2IslandName),
        FT = AF(XT),
        ST = "" === FT || gF(FT),
        DT = () => {
          !ST && IT && (FT !== oT.baf2IslandName ? zT(WT.sendIslandEdit(`baf2islandrename ${oT.baf2IslandId} ${FT}`)) : zT(null))
        },
        LT = () => {
          zT(null)
        };
      return (0, mk.jsxs)("div", {
        className: "Baf2IslandForm",
        ...lF(LT),
        children: [(0, mk.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [kT(`${DD}islandsRenameLabel`), (0, mk.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: XT,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: sF,
            onChange: TT => {
              BT(TT.target.value)
            },
            ...ZF(DT, LT)
          })]
        }), "" === FT && (0, mk.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: kT(`${DD}islandsRenameEmpty`)
        }), gF(FT) && (0, mk.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: kT(`${DD}islandsNameReserved`)
        }), (0, mk.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, mk.jsx)(gW.r, {
            disabled: ST || !IT,
            onClick: DT,
            children: kT(`${DD}islandsRenameSave`)
          }), (0, mk.jsx)(gW.e, {
            onClick: LT,
            children: kT(`${DD}islandsCancel`)
          })]
        })]
      })
    }

    function cD(TT) {
      let {
        card: oT,
        canDelete: IT,
        done: zT,
        t: kT
      } = TT;
      const WT = HW(),
        [XT, BT] = (0, iT.useState)(""),
        FT = function(TT, oT) {
          return AF(TT).toLowerCase() === AF(oT).toLowerCase()
        }(XT, oT.baf2IslandName),
        ST = () => {
          FT && IT && zT(WT.sendIslandEdit(`baf2islanddelete ${oT.baf2IslandId}`))
        },
        DT = () => {
          zT(null)
        },
        LT = jF("name"),
        [xT, cT = ""] = kT(`${DD}islandsDeleteConfirm`, {
          name: LT
        }).split(LT);
      return (0, mk.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...lF(DT),
        children: [(0, mk.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, mk.jsxs)("span", {
            children: [xT, (0, mk.jsx)("strong", {
              children: oT.baf2IslandName
            }), cT]
          }), (0, mk.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: XT,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: sF,
            onChange: TT => {
              BT(TT.target.value)
            },
            ...ZF(ST, DT)
          })]
        }), OF(oT) && (0, mk.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: kT(`${DD}islandsDeleteLeftBack`)
        }), (0, mk.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, mk.jsx)(gW.C, {
            disabled: !FT || !IT,
            onClick: ST,
            children: kT(`${DD}islandsDeleteForGood`)
          }), (0, mk.jsx)(gW.e, {
            onClick: DT,
            children: kT(`${DD}islandsCancel`)
          })]
        })]
      })
    }

    function KD(TT) {
      let {
        members: oT,
        t: IT
      } = TT;
      const iT = oT.length;
      return (0, mk.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, mk.jsxs)("span", {
          children: [1 === iT ? IT(`${DD}islandsPlayersOne`) : IT(`${DD}islandsPlayers`, {
            count: String(iT)
          }), " "]
        }), oT.map(((TT, oT) => (0, mk.jsxs)("span", {
          className: gz()("Baf2IslandMember", {
            Here: TT.baf2MemberHere
          }),
          title: TT.baf2MemberHere ? IT(`${DD}islandsPlayerHere`) : void 0,
          children: [TT.baf2MemberName, oT < iT - 1 ? ", " : ""]
        }, TT.baf2MemberKey)))]
      })
    }

    function MD(TT) {
      let {
        card: oT,
        answered: IT,
        nowMs: zT,
        t: kT
      } = TT;
      const WT = HW(),
        [XT, BT] = (0, iT.useState)(new Map),
        FT = OF(oT);
      if (!FT) return null;
      return (0, mk.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, mk.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: kT(`${DD}islandsLeftTitle`)
        }), (0, mk.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: FT.left.map((TT => {
            const iT = TT.baf2LeftKey,
              ST = nF(XT.get(iT), IT, zT),
              DT = function(TT) {
                return 1 === TT ? [`${cF}islandsLeftItemsOne`] : [`${cF}islandsLeftItems`, {
                  count: String(TT)
                }]
              }(TT.baf2LeftItems);
            return (0, mk.jsx)("li", {
              className: gz()("Baf2IslandPerson", {
                Pending: ST
              }),
              children: (0, mk.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, mk.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: TT.baf2LeftName
                }), (0, mk.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: kT(DT[0], DT[1])
                }), FT.claim && (0, mk.jsx)(gW.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: ST,
                  onClick: () => {
                    (TT => {
                      const IT = WT.sendIslandEdit(`baf2coopclaim ${oT.baf2IslandId} ${TT}`);
                      BT((oT => new Map(oT).set(TT, {
                        atMs: Date.now(),
                        answer: IT
                      })))
                    })(iT)
                  },
                  children: kT(`${DD}islandsClaim`)
                })]
              })
            }, iT)
          }))
        }), FT.goThere && (0, mk.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: kT(`${DD}islandsClaimGoThere`)
        })]
      })
    }

    function rD(TT) {
      let {
        card: oT,
        view: IT,
        blocked: zT,
        maxIslands: kT,
        answered: WT,
        nowMs: XT,
        done: BT,
        openSocial: FT,
        t: ST
      } = TT;
      const DT = HW(),
        [LT, xT] = (0, iT.useState)(new Map),
        [cT, KT] = (0, iT.useState)(new Map),
        [MT, rT] = (0, iT.useState)(null),
        AT = (0, iT.useRef)(null);
      pF(AT);
      const gT = oT.baf2IslandId,
        hT = oT.baf2IslandCoop,
        wT = null !== hT && void 0 !== hT && hT.baf2CoopMembers.some((TT => TT.baf2MemberKey === MT)) ? MT : null,
        mT = function(TT, oT) {
          const IT = TT.baf2IslandCoop;
          return IT && HF(IT) || null !== oT ? void 0 : TT.baf2IslandInvitable
        }(oT, zT),
        eT = function(TT, oT) {
          const IT = TT.baf2IslandCoop;
          return IT && HF(IT) ? {
            key: `${cF}islandsCoopFull`,
            params: {
              max: String(IT.baf2CoopMax)
            }
          } : void 0 !== TT.baf2IslandInvitable && null === oT || IT && !IT.baf2CoopManageHere ? null : "degraded" === oT || "stuck" === oT ? {
            key: `${cF}islandsInviteNotLoaded`
          } : null === oT || function(TT) {
            return "notHome" === TT || "wilds" === TT || "visiting" === TT
          }(oT) || eF(oT) ? {
            key: `${cF}islandsInviteGoThere`
          } : {
            key: `${cF}islandsInviteBusy`
          }
        }(oT, zT),
        RT = () => {
          var TT;
          rT(null), null === (TT = AT.current) || void 0 === TT || TT.focus()
        };
      return (0, mk.jsxs)("div", {
        ref: AT,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...lF(null === wT ? BT : RT),
        children: [hT && (0, mk.jsxs)(mk.Fragment, {
          children: [(0, mk.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: ST(`${DD}islandsPlayersTitle`, {
              count: String(hT.baf2CoopMembers.length),
              max: String(hT.baf2CoopMax)
            })
          }), (0, mk.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: hT.baf2CoopMembers.map(((TT, oT) => {
              const iT = TT.baf2MemberKey,
                zT = nF(LT.get(iT), WT, XT);
              return (0, mk.jsxs)("li", {
                className: gz()("Baf2IslandPerson", {
                  Pending: zT
                }),
                children: [(0, mk.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, mk.jsx)("span", {
                    className: gz()("Baf2IslandPersonName", {
                      Here: TT.baf2MemberHere
                    }),
                    children: TT.baf2MemberName
                  }), TT.baf2MemberHere && (0, mk.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: ST(`${DD}islandsPlayerHere`)
                  }), 0 === oT && (0, mk.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: ST(`${DD}islandsPlayerOwner`)
                  }), IT.remove && oT > 0 && !zT && wT !== iT && (0, mk.jsx)(gW.F, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var TT;
                      rT(iT), null === (TT = AT.current) || void 0 === TT || TT.focus()
                    },
                    children: ST(`${DD}islandsRemove`)
                  })]
                }), wT === iT && (0, mk.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, mk.jsx)("p", {
                    children: JF(ST, `${DD}islandsRemoveConfirm`, {
                      player: TT.baf2MemberName
                    })
                  }), (0, mk.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, mk.jsx)(gW.C, {
                      onClick: () => {
                        (TT => {
                          const oT = DT.sendIslandEdit(`baf2coopremove ${gT} ${TT.baf2MemberKey}`);
                          xT((IT => new Map(IT).set(TT.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: oT
                          }))), RT()
                        })(TT)
                      },
                      children: ST(`${DD}islandsRemoveYes`)
                    }), (0, mk.jsx)(gW.e, {
                      onClick: RT,
                      children: ST(`${DD}islandsCancel`)
                    })]
                  })]
                })]
              }, iT)
            }))
          })]
        }), (void 0 !== mT || null !== eT) && (0, mk.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: ST(`${DD}islandsInviteTitle`)
        }), !hT && (void 0 !== mT || null !== eT) && (0, mk.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ST(`${DD}islandsInviteShareNote`)
        }), 0 === (null === mT || void 0 === mT ? void 0 : mT.length) && (0, mk.jsx)(AD, {
          openSocial: FT,
          t: ST
        }), void 0 !== mT && mT.length > 0 && (0, mk.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: mT.map((TT => {
            const oT = !0 === TT.baf2InvitableSent || nF(cT.get(TT.baf2InvitableId), WT, XT);
            return (0, mk.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, mk.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, mk.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: TT.baf2InvitableName
                }), TT.baf2InvitableFull && !oT && (0, mk.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: ST(`${DD}islandsInviteTheirFull`, {
                    max: String(kT)
                  })
                }), (oT || !TT.baf2InvitableFull) && (0, mk.jsx)(gW.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: oT,
                  onClick: () => {
                    (TT => {
                      const oT = DT.sendIslandEdit(`baf2coopinvite ${gT} ${TT}`);
                      KT((IT => new Map(IT).set(TT, {
                        atMs: Date.now(),
                        answer: oT
                      })))
                    })(TT.baf2InvitableId)
                  },
                  children: ST(oT ? `${DD}islandsInvited` : `${DD}islandsInvite`)
                })]
              })
            }, TT.baf2InvitableId)
          }))
        }), eT && (0, mk.jsx)(NF, {
          note: eT,
          t: ST
        }), (0, mk.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, mk.jsx)(gW.e, {
            onClick: BT,
            children: ST(`${DD}islandsDone`)
          })
        })]
      })
    }

    function AD(TT) {
      let {
        openSocial: oT,
        t: IT
      } = TT;
      return (0, mk.jsxs)(mk.Fragment, {
        children: [(0, mk.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: IT(oT ? `${DD}islandsInviteNobody` : `${DD}islandsInviteNobodyGuest`)
        }), oT && (0, mk.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, mk.jsx)(gW.e, {
            onClick: oT,
            children: IT("socialBar:social")
          })
        })]
      })
    }

    function gD(TT) {
      let {
        className: oT,
        text: IT,
        ConfirmButton: zT,
        confirmLabel: kT,
        canConfirm: WT,
        send: XT,
        done: BT,
        t: FT
      } = TT;
      const ST = (0, iT.useRef)(null);
      pF(ST);
      const DT = () => {
        BT(null)
      };
      return (0, mk.jsxs)("div", {
        ref: ST,
        tabIndex: -1,
        className: gz()("Baf2IslandForm", oT),
        ...lF(DT),
        children: [(0, mk.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: IT
        }), (0, mk.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, mk.jsx)(zT, {
            disabled: !WT,
            onClick: () => {
              WT && BT(XT())
            },
            children: kT
          }), (0, mk.jsx)(gW.e, {
            onClick: DT,
            children: FT(`${DD}islandsCancel`)
          })]
        })]
      })
    }

    function hD(TT) {
      return "hidden" !== TT
    }

    function wD(TT) {
      var oT, IT;
      let {
        card: zT,
        keepOwn: kT,
        blocked: WT,
        maxIslands: XT,
        serverNowMs: BT,
        nowMs: FT,
        actions: ST,
        full: DT,
        waits: LT,
        answered: xT,
        mode: cT,
        setMode: KT,
        pending: MT,
        onSent: rT,
        switchTo: AT,
        leave: gT,
        coopOn: hT,
        openSocial: wT,
        t: mT
      } = TT;
      const eT = HW(),
        RT = zT.baf2IslandActive,
        uT = RT ? null : function(TT, oT) {
          if (TT <= 0) return null;
          const IT = oT - TT;
          if (IT < xk) return [`${cF}islandsPlayedJustNow`];
          if (IT < KF) return [`${cF}islandsPlayedMinutes`, {
            minutes: String(Math.floor(IT / xk))
          }];
          if (IT < MF) return [`${cF}islandsPlayedHours`, {
            hours: String(Math.floor(IT / KF))
          }];
          const iT = Math.floor(IT / MF);
          return 1 === iT ? [`${cF}islandsPlayedDay`] : [`${cF}islandsPlayedDays`, {
            days: String(iT)
          }]
        }(zT.baf2IslandLastPlayedMs, BT),
        vT = void 0 === (ET = zT.baf2IslandItems) ? null : 0 === ET ? [`${cF}islandsItemsNone`] : 1 === ET ? [`${cF}islandsItemsOne`] : [`${cF}islandsItems`, {
          count: String(ET)
        }];
      var ET;
      const fT = function(TT) {
          return TT ? 1 === TT ? [`${cF}islandsWaitingOne`] : [`${cF}islandsWaiting`, {
            count: String(TT)
          }] : null
        }(zT.baf2IslandWaiting),
        CT = zT.baf2IslandUnreadable,
        jT = zT.baf2IslandCoop,
        JT = QF(zT, ST, kT, DT, hT),
        UT = (0, iT.useRef)(null);
      tF(null !== cT, UT);
      const aT = () => {
          var TT;
          KT(null), null === (TT = UT.current) || void 0 === TT || TT.focus()
        },
        YT = (TT, oT) => {
          aT(), null !== TT && rT(TT, oT)
        },
        QT = (TT, oT) => mT(`${DD}${TT}`, {
          time: Ak(mT, oT)
        });
      return (0, mk.jsxs)("li", {
        ref: UT,
        tabIndex: -1,
        className: gz()("Baf2IslandCard", {
          Active: RT,
          Pending: MT,
          Shared: void 0 !== jT
        }),
        children: [(0, mk.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, mk.jsx)("strong", {
            className: "Baf2IslandName",
            children: zT.baf2IslandName
          }), RT && (0, mk.jsx)("span", {
            className: "Baf2IslandBadge",
            children: mT(`${DD}islandsOnThis`)
          }), jT && (0, mk.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: mT(`${DD}islandsShared`)
          })]
        }), "member" === (null === jT || void 0 === jT ? void 0 : jT.baf2CoopRole) && (0, mk.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: JF(mT, `${DD}islandsSharedBy`, {
            owner: jT.baf2CoopOwner
          })
        }), void 0 !== CT && (0, mk.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: mT("newer" === CT ? `${DD}islandsUnreadable` : `${DD}islandsDamaged`)
        }), "corrupt" === CT && DT && (0, mk.jsx)("p", {
          className: "Baf2IslandStats",
          children: mT(`${DD}islandsDamagedFull`)
        }), void 0 === CT && (0, mk.jsxs)(mk.Fragment, {
          children: [(0, mk.jsx)(yF, {
            tier: zT.baf2IslandTier,
            t: mT
          }), (0, mk.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, mk.jsx)("span", {
              children: 1 === zT.baf2IslandQuestsDone ? mT(`${DD}islandsQuestsDoneOne`) : mT(`${DD}islandsQuestsDone`, {
                count: String(zT.baf2IslandQuestsDone)
              })
            }), (0, mk.jsx)("span", {
              children: 1 === zT.baf2IslandMachines ? mT(`${DD}islandsMachinesOne`) : mT(`${DD}islandsMachines`, {
                count: String(zT.baf2IslandMachines)
              })
            }), vT && (0, mk.jsx)("span", {
              children: mT(vT[0], vT[1])
            }), fT && (0, mk.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: mT(fT[0], fT[1])
            }), uT && (0, mk.jsx)("span", {
              children: mT(uT[0], uT[1])
            })]
          })]
        }), jT && void 0 === jT.baf2CoopState && "people" !== cT && (0, mk.jsx)(KD, {
          members: jT.baf2CoopMembers,
          t: mT
        }), null === cT && (0, mk.jsx)(MD, {
          card: zT,
          answered: xT,
          nowMs: FT,
          t: mT
        }), JT.note && (0, mk.jsx)(NF, {
          note: JT.note,
          className: gz()({
            Unreachable: void 0 !== (null === jT || void 0 === jT ? void 0 : jT.baf2CoopState)
          }),
          t: mT
        }), "rename" === cT && (0, mk.jsx)(xD, {
          card: zT,
          canRename: "enabled" === JT.rename,
          done: YT,
          t: mT
        }), "delete" === cT && (0, mk.jsx)(cD, {
          card: zT,
          canDelete: "enabled" === JT.delete,
          done: TT => {
            YT(TT, jT ? "delete" : void 0)
          },
          t: mT
        }), "people" === cT && (0, mk.jsx)(rD, {
          card: zT,
          view: JT,
          blocked: WT,
          maxIslands: XT,
          answered: xT,
          nowMs: FT,
          done: aT,
          openSocial: wT,
          t: mT
        }), "leave" === cT && (0, mk.jsx)(gD, {
          className: "Leave",
          text: JF(mT, `${DD}islandsLeaveConfirm`, {
            island: zT.baf2IslandName,
            owner: null !== (oT = null === (IT = zT.baf2IslandCoop) || void 0 === IT ? void 0 : IT.baf2CoopOwner) && void 0 !== oT ? oT : ""
          }),
          ConfirmButton: gW.C,
          confirmLabel: mT(`${DD}islandsLeaveYes`),
          canConfirm: "enabled" === JT.leave,
          send: () => LD(eT, zT),
          done: TT => {
            YT(TT, "leave"), null !== TT && RT && gT()
          },
          t: mT
        }), "unshare" === cT && (0, mk.jsx)(gD, {
          className: "Unshare",
          text: JF(mT, `${DD}islandsStopSharingConfirm`, {
            island: zT.baf2IslandName
          }),
          ConfirmButton: gW.r,
          confirmLabel: mT(`${DD}islandsStopSharing`),
          canConfirm: "enabled" === JT.unshare,
          send: () => eT.sendIslandEdit(`baf2coopunshare ${zT.baf2IslandId}`),
          done: TT => {
            YT(TT), null !== TT && gT()
          },
          t: mT
        }), null === cT && !MT && (0, mk.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": zT.baf2IslandName,
          children: [hD(JT.switch) && (0, mk.jsx)(gW.r, {
            disabled: "enabled" !== JT.switch,
            onClick: AT,
            children: LT.switch > 0 ? QT("islandsSwitchIn", LT.switch) : mT(`${DD}islandsSwitch`)
          }), hD(JT.rename) && (0, mk.jsx)(gW.e, {
            disabled: "enabled" !== JT.rename,
            onClick: () => {
              KT("rename")
            },
            children: mT(`${DD}islandsRename`)
          }), hD(JT.people) && (0, mk.jsx)(gW.e, {
            disabled: "enabled" !== JT.people,
            onClick: () => {
              KT("people")
            },
            children: mT("players" === JT.peopleLabel ? `${DD}islandsPlayersButton` : `${DD}islandsInviteButton`)
          }), hD(JT.unshare) && (0, mk.jsx)(gW.e, {
            disabled: "enabled" !== JT.unshare,
            onClick: () => {
              KT("unshare")
            },
            children: mT(`${DD}islandsStopSharing`)
          }), hD(JT.dismiss) && (0, mk.jsx)(gW.e, {
            disabled: "enabled" !== JT.dismiss,
            onClick: () => {
              rT(LD(eT, zT), "dismiss"), RT && gT()
            },
            children: mT(`${DD}islandsDismiss`)
          }), hD(JT.leave) && (0, mk.jsx)(gW.F, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== JT.leave,
            onClick: () => {
              KT("leave")
            },
            children: RT && LT.switch > 0 ? QT("islandsLeaveIn", LT.switch) : mT(`${DD}islandsLeave`)
          }), hD(JT.delete) && (0, mk.jsx)(gW.F, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== JT.delete,
            onClick: () => {
              KT("delete")
            },
            children: LT.change > 0 && JT.deleteWaits ? QT("islandsDeleteIn", LT.change) : mT(`${DD}islandsDelete`)
          })]
        })]
      })
    }
    const mD = "buildAFactory2Game:";

    function eD(TT) {
      let {
        invite: oT,
        actions: IT,
        full: zT,
        maxIslands: kT,
        waitSeconds: WT,
        focus: XT,
        focused: BT,
        join: FT,
        decline: ST,
        t: DT
      } = TT;
      const [LT, xT] = (0, iT.useState)(!1), cT = (0, iT.useRef)(null);
      tF(LT, cT), (0, iT.useEffect)((() => {
        var TT;
        XT && (xT(!0), null === (TT = cT.current) || void 0 === TT || TT.focus(), BT())
      }), [XT, BT]);
      const KT = function(TT, oT, IT, iT, zT) {
          return IT ? {
            join: !1,
            note: {
              key: `${cF}islandsJoinTooMany`,
              params: {
                max: String(iT)
              }
            }
          } : TT.baf2InvitePlayers >= zT ? {
            join: !1,
            note: {
              key: `${cF}islandsJoinFull`
            }
          } : {
            join: oT.switch,
            note: null
          }
        }(oT, IT, zT, kT, 10),
        MT = oT.baf2InviteIsland,
        rT = oT.baf2InvitePlayers,
        AT = () => {
          var TT;
          xT(!1), null === (TT = cT.current) || void 0 === TT || TT.focus()
        },
        gT = WT > 0 && null === KT.note ? DT(`${mD}islandsJoinIn`, {
          time: Ak(DT, WT)
        }) : DT(`${mD}islandsJoin`);
      return (0, mk.jsxs)("li", {
        ref: cT,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...LT ? lF(AT) : {},
        children: [(0, mk.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, mk.jsx)("strong", {
            className: "Baf2IslandName",
            children: MT
          })
        }), (0, mk.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: JF(DT, `${mD}islandsInvitedBy`, {
            owner: oT.baf2InviteOwner
          })
        }), (0, mk.jsx)(yF, {
          tier: oT.baf2InviteTier,
          t: DT
        }), (0, mk.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, mk.jsx)("span", {
            children: 1 === rT ? DT(`${mD}islandsPlayersCountOne`) : DT(`${mD}islandsPlayersCount`, {
              count: String(rT)
            })
          })
        }), KT.note && (0, mk.jsx)(NF, {
          note: KT.note,
          t: DT
        }), LT && (0, mk.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: JF(DT, `${mD}islandsJoinConfirm`, {
            island: MT
          })
        }), !LT && (0, mk.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": MT,
          children: [(0, mk.jsx)(gW.r, {
            disabled: !KT.join,
            onClick: () => {
              var TT;
              xT(!0), null === (TT = cT.current) || void 0 === TT || TT.focus()
            },
            children: gT
          }), (0, mk.jsx)(gW.e, {
            onClick: ST,
            children: DT(`${mD}islandsDecline`)
          })]
        }), LT && (0, mk.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, mk.jsx)(gW.r, {
            disabled: !KT.join,
            onClick: FT,
            children: DT(`${mD}islandsJoinYes`)
          }), (0, mk.jsx)(gW.e, {
            onClick: AT,
            children: DT(`${mD}islandsCancel`)
          })]
        })]
      })
    }

    function RD(TT) {
      let {
        invites: oT,
        actions: IT,
        full: iT,
        maxIslands: zT,
        waitSeconds: kT,
        focus: WT,
        focused: XT,
        leave: BT,
        declined: FT,
        t: ST
      } = TT;
      const DT = HW();
      return (0, mk.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, mk.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: ST(`${mD}islandsInvitesTitle`)
        }), (0, mk.jsx)("ul", {
          className: "Baf2IslandCards",
          children: oT.map((TT => {
            const oT = TT.baf2InviteId;
            return (0, mk.jsx)(eD, {
              invite: TT,
              actions: IT,
              full: iT,
              maxIslands: zT,
              waitSeconds: kT,
              focus: WT === oT,
              focused: XT,
              join: () => {
                DT.send(`baf2coopaccept ${oT}`), BT()
              },
              decline: () => {
                DT.send(`baf2coopdecline ${oT}`), FT(oT)
              },
              t: ST
            }, oT)
          }))
        })]
      })
    }
    const uD = "buildAFactory2Game:";

    function vD(TT) {
      let {
        cards: oT,
        activeName: IT,
        canStart: zT,
        waitSeconds: kT,
        leave: WT,
        t: XT
      } = TT;
      const BT = HW(),
        [FT, ST] = (0, iT.useState)(!1),
        [DT, LT] = (0, iT.useState)(""),
        xT = (0, iT.useRef)(null);
      tF(FT, xT), (0, iT.useEffect)((() => {
        var TT;
        FT && (null === (TT = xT.current) || void 0 === TT || TT.focus())
      }), [FT]);
      const cT = hF(oT),
        KT = AF(DT),
        MT = gF(KT),
        rT = () => {
          zT && !MT && (BT.send("" === KT || KT === cT ? yT : `${yT} ${KT}`), WT())
        },
        AT = () => {
          var TT;
          ST(!1), null === (TT = xT.current) || void 0 === TT || TT.focus()
        };
      return (0, mk.jsxs)("li", {
        ref: xT,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...FT ? lF(AT) : {},
        children: [(0, mk.jsx)("strong", {
          className: "Baf2IslandName",
          children: XT(`${uD}islandsNewTitle`)
        }), !FT && (0, mk.jsx)("p", {
          className: "Baf2IslandStats",
          children: XT(`${uD}islandsNewNote`)
        }), FT && (0, mk.jsxs)(mk.Fragment, {
          children: [(0, mk.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: JF(XT, `${uD}islandsNewConfirm`, {
              name: IT
            })
          }), (0, mk.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [XT(`${uD}islandsNewNameLabel`), (0, mk.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: DT,
              placeholder: cT,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: sF,
              onChange: TT => {
                LT(TT.target.value)
              },
              ...ZF(rT, AT)
            })]
          }), MT && (0, mk.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: XT(`${uD}islandsNameReserved`)
          })]
        }), (0, mk.jsxs)("div", {
          className: gz()("Baf2IslandButtons", {
            Stacked: FT
          }),
          children: [(0, mk.jsx)(gW.r, {
            disabled: !zT || FT && MT,
            onClick: () => {
              if (!FT) return LT(cT), void ST(!0);
              rT()
            },
            children: kT > 0 ? XT(`${uD}islandsNewIn`, {
              time: Ak(XT, kT)
            }) : XT(FT ? `${uD}islandsNewConfirmButton` : `${uD}islandsNew`)
          }), FT && (0, mk.jsx)(gW.e, {
            onClick: AT,
            children: XT(`${uD}islandsCancel`)
          })]
        })]
      })
    }

    function ED(TT) {
      var oT, IT;
      let {
        message: zT,
        arrivedAtMs: kT,
        close: WT,
        leave: XT,
        openSocial: BT
      } = TT;
      const FT = HW(),
        {
          t: ST
        } = (0, ez.t)(),
        DT = bF(1e3),
        [LT, xT] = (0, iT.useState)(null),
        [cT, KT] = (0, iT.useState)(new Map),
        [MT, rT] = (0, iT.useState)(new Set),
        AT = zT.baf2IslandCards,
        gT = function(TT, oT, IT, iT) {
          return (null !== TT && void 0 !== TT ? TT : []).filter((TT => oT + TT.baf2InviteLeftMs > IT && !iT.has(TT.baf2InviteId)))
        }(zT.baf2IslandsInvites, kT, DT, MT),
        hT = gT.map((TT => TT.baf2InviteId)).join(" "),
        wT = (0, iT.useRef)(null),
        mT = GF(wT);
      (0, iT.useEffect)((() => {
        var TT, oT;
        null !== (TT = wT.current) && void 0 !== TT && TT.contains(document.activeElement) || (null === (oT = wT.current) || void 0 === oT || oT.focus())
      }), [zT, hT]), (0, iT.useEffect)((() => {
        KT((TT => function(TT, oT, IT, iT) {
          const zT = new Map;
          for (const kT of oT) {
            const oT = TT.get(kT.baf2IslandId);
            oT && (void 0 !== oT.untilGone || iT < oT.answer) && EF(oT, kT, IT) && zT.set(kT.baf2IslandId, oT)
          }
          return zT.size === TT.size ? TT : zT
        }(TT, zT.baf2IslandCards, Date.now(), zT.baf2IslandsAnswered)))
      }), [zT]);
      const eT = rF(kT, zT.baf2IslandsWaitMs, DT),
        RT = zT.baf2IslandsBlocked,
        uT = RF(RT, eT),
        vT = function(TT, oT) {
          const IT = RF(TT, 0);
          return {
            switch: IT.switch ? oT : 0,
            change: IT.change ? oT : 0
          }
        }(RT, eT),
        ET = AT.length >= zT.baf2IslandsMax,
        fT = AT.length > 0,
        CT = function(TT, oT, IT) {
          return TT + Math.max(0, IT - oT)
        }(zT.baf2IslandsNowMs, kT, DT),
        jT = null !== (oT = null === (IT = AT.find((TT => TT.baf2IslandActive))) || void 0 === IT ? void 0 : IT.baf2IslandName) && void 0 !== oT ? oT : "",
        JT = function(TT) {
          const oT = TT.filter(YF).length;
          return oT <= 1 && oT < TT.length
        }(AT),
        UT = !0 === zT.baf2IslandsCoop,
        aT = function(TT, oT) {
          const IT = TT.find((TT => TT.baf2IslandActive)),
            iT = null === IT || void 0 === IT ? void 0 : IT.baf2IslandCoop;
          return IT && "member" === (null === iT || void 0 === iT ? void 0 : iT.baf2CoopRole) ? {
            key: `${cF}islandsKeepOwnMember`,
            names: {
              owner: iT.baf2CoopOwner,
              island: IT.baf2IslandName
            }
          } : {
            key: oT ? `${cF}islandsKeepOwn` : `${cF}islandsKeepOwnSolo`
          }
        }(AT, UT),
        [YT, QT] = (0, iT.useState)(null);
      (0, iT.useEffect)((() => {
        void 0 !== zT.baf2IslandsFocusInvite && QT(zT.baf2IslandsFocusInvite)
      }), [zT]);
      const OT = (0, iT.useCallback)((() => {
          QT(null)
        }), []),
        HT = LT ? AT.find((TT => TT.baf2IslandId === LT.id)) : void 0,
        nT = LT && HT && "hidden" !== QF(HT, uT, JT, ET, UT)[LT.mode] ? LT : null;
      return (0, mk.jsx)(AW.e, {
        close: WT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, mk.jsxs)("section", {
          ref: wT,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: mT ? {
            marginTop: `${mT.marginTop}px`,
            maxHeight: `${mT.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, mk.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mk.jsxs)("div", {
              children: [(0, mk.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: ST(`${uD}islandsTitle`)
              }), fT && (0, mk.jsx)("p", {
                children: ST(`${uD}islandsSubtitle`, {
                  count: String(AT.length),
                  max: String(zT.baf2IslandsMax)
                })
              })]
            }), (0, mk.jsx)(gW.j, {
              ariaLabel: ST(`${uD}islandsClose`),
              onClick: WT
            })]
          }), (0, mk.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== RT && (0, mk.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: JF(ST, wF(RT, mF(AT)), {
                island: jT
              })
            }), fT && gT.length > 0 && (0, mk.jsx)(RD, {
              invites: gT,
              actions: uT,
              full: ET,
              maxIslands: zT.baf2IslandsMax,
              waitSeconds: vT.switch,
              focus: YT,
              focused: OT,
              leave: XT,
              declined: TT => {
                rT((oT => new Set(oT).add(TT)))
              },
              t: ST
            }), fT && (0, mk.jsxs)(mk.Fragment, {
              children: [ET && (0, mk.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: ST(`${uD}islandsFull`, {
                  max: String(zT.baf2IslandsMax)
                })
              }), (0, mk.jsx)("p", {
                className: "Baf2IslandsNote",
                children: JF(ST, aT.key, aT.names)
              }), (0, mk.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [AT.map((TT => {
                  const oT = TT.baf2IslandId;
                  return (0, mk.jsx)(wD, {
                    card: TT,
                    keepOwn: JT,
                    coopOn: UT,
                    openSocial: BT,
                    blocked: RT,
                    maxIslands: zT.baf2IslandsMax,
                    serverNowMs: CT,
                    nowMs: DT,
                    actions: uT,
                    full: ET,
                    waits: vT,
                    answered: zT.baf2IslandsAnswered,
                    mode: (null === nT || void 0 === nT ? void 0 : nT.id) === oT ? nT.mode : null,
                    setMode: TT => {
                      xT(null === TT ? null : {
                        id: oT,
                        mode: TT
                      })
                    },
                    pending: EF(cT.get(oT), TT, DT),
                    onSent: (IT, iT) => {
                      KT((zT => {
                        const kT = {
                          atMs: Date.now(),
                          from: TT.baf2IslandName,
                          answer: IT
                        };
                        return new Map(zT).set(oT, iT ? {
                          ...kT,
                          untilGone: iT
                        } : kT)
                      }))
                    },
                    leave: XT,
                    switchTo: () => {
                      FT.send(`baf2islandswitch ${oT}`), XT()
                    },
                    t: ST
                  }, oT)
                })), !ET && (0, mk.jsx)(vD, {
                  cards: AT,
                  activeName: jT,
                  canStart: uT.change,
                  waitSeconds: vT.change,
                  leave: XT,
                  t: ST
                })]
              })]
            })]
          })]
        })
      })
    }
    const fD = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        gk: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      CD = Object.keys(fD),
      jD = new Set([...Object.keys(Zo), ...[...vo.Press.recipes, ...vo["Wire Mill"].recipes].map((TT => TT.output))]),
      JD = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      UD = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      aD = / Bar$|Alloy$/,
      YD = /Porkchop|Beef|Mutton|Venison|Steak/,
      QD = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;

    function OD(TT) {
      let {
        item: oT,
        name: IT,
        amount: iT,
        selected: zT,
        small: kT,
        onPick: WT
      } = TT;
      return (0, mk.jsxs)("button", {
        type: "button",
        className: gz()("Baf2TermTile", {
          On: zT,
          Small: kT
        }),
        "aria-label": `${IT}: ${iT}`,
        "aria-pressed": zT,
        onClick: WT,
        children: [(0, mk.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, mk.jsx)(uz.c, {
            itemName: oT,
            amount: 0
          })
        }), (0, mk.jsx)("span", {
          className: "Baf2TermCount",
          children: Mk(iT, 1e4)
        }), !kT && (0, mk.jsx)("span", {
          className: "Baf2TermName",
          children: IT
        })]
      })
    }

    function HD(TT) {
      let {
        store: oT,
        close: IT,
        send: zT
      } = TT;
      const {
        t: kT
      } = (0, ez.t)(), {
        isTouchScreen: WT
      } = (0, Mz.k)(["isTouchScreen"]);
      ! function(TT) {
        const [oT, IT] = (0, iT.useState)(TT.version);
        (0, iT.useEffect)((() => (IT(TT.version), TT.subscribe((() => {
          IT(TT.version)
        })))), [TT])
      }(oT);
      const [XT, BT] = (0, iT.useState)("all"), [FT, ST] = (0, iT.useState)(!1), [DT, LT] = (0, iT.useState)(""), [xT, cT] = (0, iT.useState)(""), [KT, MT] = (0, iT.useState)(null), [rT, AT, gT] = function() {
        const TT = (0, iT.useRef)(null),
          [oT, IT] = (0, iT.useState)(!1),
          zT = () => {
            const oT = TT.current;
            IT(null !== oT && oT.scrollLeft + oT.clientWidth < oT.scrollWidth - 1)
          };
        return (0, iT.useEffect)(zT), (0, iT.useEffect)((() => {
          const oT = TT.current;
          if (!oT) return;
          const IT = new ResizeObserver(zT);
          return IT.observe(oT), () => {
            IT.disconnect()
          }
        }), []), [TT, oT, zT]
      }(), hT = (0, iT.useMemo)((() => new Map), [kT]), wT = TT => {
        let oT = hT.get(TT);
        return void 0 === oT && (oT = function(TT, oT) {
          const IT = /^(.+) \((.+)\)$/.exec(TT);
          return IT ? oT(IT[2], IT[1]) : TT
        }(Tk(kT, TT), ((TT, oT) => kT("buildAFactory2Game:terminalTileKind", {
          kind: TT,
          base: oT
        }))), hT.set(TT, oT)), oT
      }, mT = oT.isReadOnly(), eT = oT.recent(), RT = oT.items(), uT = xT.trim().toLowerCase(), vT = ("recent" === XT ? eT : RT).filter((TT => {
        const oT = wT(TT);
        return ("all" === XT || "recent" === XT || function(TT) {
          return Fk(TT) ? "farm" : JD.test(TT) ? "nuclear" : aD.test(TT) ? "bars" : YD.test(TT) ? "farm" : UD.test(TT) ? "gk" : jD.has(TT) ? "parts" : QD.test(TT) ? "farm" : "other"
        }(TT) === XT) && ("" === uT || oT.toLowerCase().includes(uT)) && ("" === DT || oT.toUpperCase().startsWith(DT))
      })), ET = new Set(RT.map((TT => wT(TT).charAt(0).toUpperCase()))), fT = "recent" !== XT && eT.length > 0, CT = function(TT, oT) {
        return null !== TT && oT.includes(TT) ? TT : null
      }(KT, fT ? [...vT, ...eT] : vT), jT = null === CT ? 0 : oT.amount(CT), JT = TT => {
        MT(CT === TT ? null : TT)
      }, UT = TT => {
        null !== CT && jT > 0 && zT(oT.take(TT, CT))
      }, aT = "" !== DT ? kT("buildAFactory2Game:terminalEmptyLetter", {
        letter: DT
      }) : "" !== uT ? kT("buildAFactory2Game:terminalEmptySearch", {
        query: xT
      }) : kT("buildAFactory2Game:terminalEmpty");
      return (0, mk.jsx)(AW.e, {
        close: IT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mk.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, mk.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mk.jsxs)("div", {
              children: [(0, mk.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: kT(oT.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, mk.jsx)("p", {
                children: kT("buildAFactory2Game:terminalSubtitle", {
                  count: String(oT.siloCount())
                })
              })]
            }), (0, mk.jsx)(gW.j, {
              onClick: IT
            })]
          }), (0, mk.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, mk.jsxs)("div", {
              className: "Baf2TermTools",
              children: [(0, mk.jsx)("div", {
                ref: rT,
                className: gz()("Baf2TermChips", {
                  MoreRight: AT
                }),
                onScroll: gT,
                children: FT ? (0, mk.jsxs)(mk.Fragment, {
                  children: [(0, mk.jsx)("button", {
                    type: "button",
                    "aria-label": kT("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      ST(!1), LT("")
                    },
                    children: "\u2190"
                  }), [...ET].sort().map((TT => (0, mk.jsx)("button", {
                    type: "button",
                    className: gz()({
                      On: DT === TT
                    }),
                    onClick: () => {
                      LT(DT === TT ? "" : TT)
                    },
                    children: TT
                  }, TT)))]
                }) : (0, mk.jsxs)(mk.Fragment, {
                  children: [(0, mk.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      ST(!0)
                    },
                    children: kT("buildAFactory2Game:terminalLetters")
                  }), CD.map((TT => (0, mk.jsx)("button", {
                    type: "button",
                    className: gz()({
                      On: XT === TT
                    }),
                    onClick: () => {
                      BT(TT)
                    },
                    children: kT(fD[TT])
                  }, TT)))]
                })
              }), !WT && (0, mk.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: xT,
                placeholder: kT("buildAFactory2Game:terminalSearch"),
                "aria-label": kT("buildAFactory2Game:terminalSearch"),
                onChange: TT => {
                  cT(TT.target.value)
                },
                onKeyDown: TT => {
                  TT.stopPropagation()
                }
              }), (0, mk.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": kT("buildAFactory2Game:terminalResort"),
                title: kT("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  oT.resort()
                },
                children: "\u21c5"
              })]
            }), fT && (0, mk.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, mk.jsx)("span", {
                children: kT(fD.recent)
              }), eT.map((TT => (0, mk.jsx)(OD, {
                item: TT,
                name: wT(TT),
                amount: oT.amount(TT),
                selected: CT === TT,
                small: !0,
                onPick: () => {
                  JT(TT)
                }
              }, TT)))]
            }), (0, mk.jsx)("div", {
              className: "Baf2TermTiles",
              children: vT.length > 0 ? vT.map((TT => (0, mk.jsx)(OD, {
                item: TT,
                name: wT(TT),
                amount: oT.amount(TT),
                selected: CT === TT,
                onPick: () => {
                  JT(TT)
                }
              }, TT))) : (0, mk.jsx)("p", {
                className: "Baf2TermEmpty",
                children: aT
              })
            }), (0, mk.jsxs)("div", {
              className: "Baf2TermActions",
              children: [(0, mk.jsx)("span", {
                className: "Baf2TermPicked",
                children: mT ? (0, mk.jsxs)(mk.Fragment, {
                  children: [null !== CT && jT > 0 ? wT(CT) : kT("buildAFactory2Game:terminalVisiting"), (0, mk.jsx)("small", {
                    children: kT("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== CT && jT > 0 ? (0, mk.jsxs)(mk.Fragment, {
                  children: [wT(CT), (0, mk.jsx)("small", {
                    children: kT("buildAFactory2Game:terminalStored", {
                      amount: jT.toLocaleString()
                    })
                  })]
                }) : kT("buildAFactory2Game:terminalPick")
              }), !mT && (0, mk.jsxs)(mk.Fragment, {
                children: [(0, mk.jsx)(gW.e, {
                  className: "Baf2TermTake",
                  disabled: 0 === jT,
                  onClick: () => {
                    UT("one")
                  },
                  children: kT("buildAFactory2Game:terminalTakeOne")
                }), (0, mk.jsx)(gW.e, {
                  className: "Baf2TermTake",
                  disabled: 0 === jT,
                  onClick: () => {
                    UT("stack")
                  },
                  children: kT("buildAFactory2Game:terminalTakeStack", {
                    amount: String(99)
                  })
                }), (0, mk.jsx)(gW.m, {
                  className: "Baf2TermTake",
                  disabled: 0 === jT,
                  onClick: () => {
                    UT("fill")
                  },
                  children: kT("buildAFactory2Game:terminalFill")
                })]
              })]
            })]
          })]
        })
      })
    }

    function nD(TT) {
      let {
        kind: oT,
        icon: IT,
        label: iT,
        number: zT,
        preview: kT,
        note: WT,
        tone: XT = null,
        share: BT,
        onExplain: FT
      } = TT;
      return (0, mk.jsxs)("button", {
        type: "button",
        className: gz()("NxLane", oT, {
          Warn: "warn" === XT,
          Danger: "danger" === XT
        }),
        onClick: FT,
        children: [(0, mk.jsxs)("span", {
          className: "NxLaneHead",
          children: [IT, (0, mk.jsx)("span", {
            className: "NxLaneLabel",
            children: iT
          })]
        }), (0, mk.jsxs)("span", {
          className: "NxLaneNum",
          children: [zT, kT && (0, mk.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", kT]
          })]
        }), (0, mk.jsx)("span", {
          className: "NxLaneNote",
          children: WT
        }), void 0 !== BT && (0, mk.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, BT)) + "%"
          }
        })]
      })
    }

    function qD(TT) {
      let {
        kind: oT,
        step: IT,
        short: iT,
        planned: zT
      } = TT;
      return (0, mk.jsx)("i", {
        className: gz()("NxPipe", oT, `Step${IT}`, {
          Short: iT,
          Planned: zT
        }),
        "aria-hidden": "true"
      })
    }

    function ZD(TT) {
      let {
        max: oT,
        bands: IT,
        ticks: iT,
        now: zT,
        settle: kT,
        settleTone: WT,
        onExplain: XT
      } = TT;
      const BT = TT => Math.max(0, Math.min(oT, TT)) / oT * 100 + "%";
      let FT = 0;
      return (0, mk.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: XT,
        children: [(0, mk.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [IT.map((TT => {
            const oT = {
              bottom: BT(FT),
              height: `calc(${BT(TT.upTo)} - ${BT(FT)})`
            };
            return FT = TT.upTo, (0, mk.jsx)("i", {
              className: gz()("NxGaugeBand", TT.kind),
              style: oT
            }, TT.kind)
          })), null !== zT && (0, mk.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: BT(zT)
            }
          }), void 0 !== kT && null !== kT && (0, mk.jsx)("i", {
            className: gz()("NxGaugeSettle", {
              Bad: "bad" === WT
            }),
            style: {
              bottom: BT(kT)
            }
          })]
        }), (0, mk.jsx)("span", {
          className: "NxGaugeTicks",
          children: iT.map((TT => (0, mk.jsx)("small", {
            style: {
              bottom: BT(TT)
            },
            children: TT
          }, TT)))
        })]
      })
    }

    function lD(TT) {
      const [oT, IT] = (0, iT.useState)(null), [zT, kT] = (0, iT.useState)((() => {
        try {
          return null === window.localStorage.getItem(TT)
        } catch {
          return !1
        }
      })), WT = (0, iT.useRef)(null);
      (0, iT.useEffect)((() => () => {
        null !== WT.current && clearTimeout(WT.current)
      }), []);
      const XT = (0, iT.useCallback)((oT => {
          IT(oT), kT(!1);
          try {
            window.localStorage.setItem(TT, "1")
          } catch {}
          null !== WT.current && clearTimeout(WT.current), WT.current = setTimeout((() => {
            WT.current = null, IT(null)
          }), 5e3)
        }), [TT]),
        BT = (0, iT.useCallback)(((oT, IT) => {
          const iT = `${TT}:${oT}`;
          try {
            if (null !== window.localStorage.getItem(iT)) return;
            window.localStorage.setItem(iT, "1")
          } catch {
            return
          }
          XT(IT)
        }), [XT, TT]);
      return {
        explained: oT,
        hinting: zT,
        explain: XT,
        explainOnce: BT
      }
    }

    function sD(TT) {
      let {
        text: oT,
        tone: IT,
        explained: iT
      } = TT;
      return (0, mk.jsxs)("p", {
        className: gz()("NxStatus", null === iT ? IT : "Explain"),
        "aria-live": "polite",
        children: [null !== iT && (0, mk.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== iT && void 0 !== iT ? iT : oT]
      })
    }
    const tD = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function GD(TT, oT) {
      const IT = Number(TT[oT]);
      return 1 === IT || 2 === IT || 3 === IT ? IT : 0
    }

    function pD(TT) {
      return !!gB("reactor", TT.baf2RxNeed) || void 0 !== TT.baf2RxLayout && TT.baf2RxNeed.some((TT => {
        let [oT, IT] = TT;
        return IT > 0 && tD.includes(oT)
      }))
    }
    const bD = "buildAFactory2Game:";

    function yD(TT) {
      let {
        status: oT,
        store: IT,
        busy: iT
      } = TT;
      const {
        t: zT
      } = (0, ez.t)();
      return function(TT) {
        return 0 !== (TT.baf2RxFlags & Bo) && (!TT.baf2RxFormed || void 0 !== TT.baf2RxLayout)
      }(oT) ? (0, mk.jsx)(gW.m, {
        disabled: !pD(oT) || iT,
        onClick: () => {
          IT.tap("fill", (() => {
            IT.send("fill")
          }))
        },
        children: zT(void 0 !== oT.baf2RxLayout ? `${bD}rxFillLayout` : `${bD}rxFill`)
      }) : null
    }

    function ND(TT) {
      let {
        status: oT,
        store: IT,
        readOnly: zT,
        bare: kT = !1
      } = TT;
      const {
        t: WT
      } = (0, ez.t)(), XT = oT.baf2RxLayout, [BT, FT, ST] = oT.baf2RxDims, DT = (0, iT.useMemo)((() => {
        if (void 0 === XT) return 0;
        const TT = Uint8Array.from(XT, ((TT, oT) => GD(XT, oT)));
        return PX([BT - 2, FT - 2, ST - 2], TT).max
      }), [XT, BT, FT, ST]);
      return void 0 === XT ? null : (0, mk.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!kT && (0, mk.jsx)("span", {
          className: "Baf2RxHint",
          children: WT(`${bD}rxLayoutLine`, {
            amount: vB(DT)
          })
        }), !zT && (0, mk.jsx)(gW.e, {
          onClick: () => {
            IT.send("layout", 0)
          },
          children: WT(`${bD}rxLayoutHide`)
        })]
      })
    }
    const PD = "buildAFactory2Game:",
      dD = {
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

    function VD(TT) {
      let {
        id: oT,
        title: IT,
        body: iT,
        bodyParams: zT,
        yes: kT,
        cancel: WT,
        confirm: XT
      } = TT;
      const {
        t: BT
      } = (0, ez.t)();
      return (0, mk.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": oT,
        children: [(0, mk.jsx)("h3", {
          id: oT,
          children: BT(IT)
        }), (0, mk.jsx)("p", {
          children: BT(iT, zT)
        }), (0, mk.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, mk.jsx)(gW.i, {
            onClick: WT,
            children: BT(`${PD}rxCancel`)
          }), (0, mk.jsx)(gW.C, {
            onClick: XT,
            children: BT(kT)
          })]
        })]
      })
    }

    function TL(TT) {
      const [oT, IT] = (0, iT.useState)((() => TT.get()));
      return (0, iT.useEffect)((() => (IT(TT.get()), TT.subscribe((() => {
        IT(TT.get())
      })))), [TT]), oT
    }

    function oL(TT) {
      let {
        kind: oT,
        cap: IT,
        busy: zT = !1,
        whyNot: kT = null,
        apart: WT
      } = TT;
      const {
        t: XT
      } = (0, ez.t)(), [BT, FT] = (0, iT.useState)(!1), ST = null !== kT, DT = (0, iT.useRef)(null);
      if ((0, iT.useEffect)((() => {
          ST && FT(!1)
        }), [ST]), (0, iT.useLayoutEffect)((() => {
          var TT;
          const oT = null === (TT = DT.current) || void 0 === TT ? void 0 : TT.firstElementChild;
          ST ? null === oT || void 0 === oT || oT.setAttribute("aria-disabled", "true") : zT || null === oT || void 0 === oT || oT.removeAttribute("aria-disabled")
        })), !BT || ST) return (0, mk.jsx)("span", {
        ref: DT,
        className: "Baf2RxApartWrap",
        children: (0, mk.jsx)(gW.i, {
          disabled: zT,
          className: gz()({
            Baf2RxNotYet: ST
          }),
          onClick: () => {
            kT ? kT() : FT(!0)
          },
          children: XT(`${PD}rxApart`)
        })
      });
      const LT = "battery" === oT,
        xT = void 0 === IT ? `${PD}batApartConfirmBodyPlan` : `${PD}batApartConfirmBody`;
      return (0, mk.jsx)(VD, {
        id: `baf2ApartTitle_${oT}`,
        title: LT ? `${PD}batApartConfirmTitle` : `${PD}rxApartConfirmTitle`,
        body: LT ? xT : `${PD}rxApartConfirmBody`,
        bodyParams: void 0 === IT ? void 0 : {
          cap: IT
        },
        yes: `${PD}rxApart`,
        cancel: () => {
          FT(!1)
        },
        confirm: () => {
          FT(!1), WT()
        }
      })
    }

    function IL(TT) {
      let {
        mood: oT,
        big: IT
      } = TT;
      const iT = dD[oT],
        zT = [];
      return iT.rows.forEach(((TT, oT) => {
        for (let IT = 0; IT < TT.length; IT++) "." !== TT[IT] && zT.push((0, mk.jsx)("rect", {
          x: IT + 1,
          y: oT + 1,
          width: 1,
          height: 1,
          fill: "w" === TT[IT] ? "#8fd3ff" : iT.colour
        }, `${IT},${oT}`))
      })), (0, mk.jsxs)("svg", {
        className: gz()("Baf2RxFace", {
          Big: IT,
          Alarm: "alarm" === oT
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, mk.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, mk.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), zT]
      })
    }

    function iL(TT) {
      return Kk(TT, "+").replace("+", "")
    }

    function zL(TT) {
      let {
        kind: oT,
        dims: IT,
        cap: iT,
        disabled: zT,
        compact: kT,
        resize: WT
      } = TT;
      const {
        t: XT
      } = (0, ez.t)(), {
        min: BT,
        max: FT
      } = aI(oT), ST = Math.min(iT, FT), DT = [`${PD}rxWide`, `${PD}rxTall`, `${PD}rxDeep`], LT = {
        w: String(IT[0]),
        h: String(IT[1]),
        d: String(IT[2]),
        blocks: String(uB(oT, IT))
      };
      return (0, mk.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, mk.jsx)("div", {
          className: "Baf2RxSteppers",
          children: IT.map(((TT, oT) => {
            const kT = iT => {
                const zT = [IT[0], IT[1], IT[2]];
                zT[oT] = TT + iT, WT(zT)
              },
              LT = TT >= ST;
            return (0, mk.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, mk.jsx)("button", {
                type: "button",
                "aria-label": XT(`${PD}rxSmaller`),
                disabled: zT || TT <= BT,
                onClick: () => {
                  kT(-1)
                },
                children: "\u2212"
              }), (0, mk.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [TT, (0, mk.jsx)("small", {
                  children: XT(DT[oT])
                })]
              }), (0, mk.jsx)("button", {
                type: "button",
                "aria-label": XT(`${PD}rxBigger`),
                disabled: zT || LT,
                onClick: () => {
                  kT(1)
                },
                children: LT && iT < FT ? "\ud83d\udd12" : "+"
              })]
            }, DT[oT])
          }))
        }), !kT && (0, mk.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === oT ? XT(`${PD}rxSizeLine`, {
            ...LT,
            water: String(RB(IT))
          }) : XT(`${PD}batSizeLine`, LT)
        })]
      })
    }

    function kL(TT) {
      let {
        on: oT,
        label: IT,
        disabled: iT,
        locked: zT,
        pending: kT,
        toggle: WT
      } = TT;
      return (0, mk.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": oT,
        disabled: iT,
        "aria-disabled": zT || void 0,
        className: gz()("Baf2RxSwitch", {
          On: oT,
          Locked: zT,
          Pending: kT
        }),
        onClick: WT,
        children: [(0, mk.jsx)("span", {
          className: "Baf2RxKnob"
        }), IT]
      })
    }
    const WL = "buildAFactory2Game:",
      XL = .95;

    function BL(TT, oT) {
      return 0 !== (TT.baf2RxFlags & oT)
    }

    function FL(TT) {
      return "cryo" === TT ? dT.n : dT.r
    }

    function SL(TT) {
      var oT, IT, iT, zT, kT, WT, XT, BT, FT;
      return TT.baf2RxCryo ? {
        Sx: "cryo",
        usePerS: null !== (zT = TT.baf2RxCryoUse) && void 0 !== zT ? zT : 0,
        needPerS: null !== (kT = TT.baf2RxCryoNeed) && void 0 !== kT ? kT : 0,
        inPerS: null !== (WT = TT.baf2RxCryoIn) && void 0 !== WT ? WT : 0,
        stored: null !== (XT = TT.baf2RxCryoStored) && void 0 !== XT ? XT : 0,
        makersShort: null !== (BT = TT.baf2RxMixersShort) && void 0 !== BT ? BT : 0,
        waterBeside: null !== (FT = TT.baf2RxWaterUse) && void 0 !== FT ? FT : 0,
        pct: TT.baf2RxWater
      } : {
        Sx: "water",
        usePerS: null !== (oT = TT.baf2RxWaterUse) && void 0 !== oT ? oT : 0,
        needPerS: null !== (IT = TT.baf2RxWaterNeed) && void 0 !== IT ? IT : 0,
        inPerS: TT.baf2RxWaterIn,
        stored: TT.baf2RxWaterStored,
        makersShort: null !== (iT = TT.baf2RxCondensersShort) && void 0 !== iT ? iT : 0,
        waterBeside: 0,
        pct: TT.baf2RxWater
      }
    }

    function DL(TT) {
      const oT = "running" === TT.baf2RxState || "idle" === TT.baf2RxState;
      return TT.baf2RxFormed && TT.baf2RxTarget !== TT.baf2RxThrottle && oT ? LL(TT, TT.baf2RxTarget) : null
    }

    function LL(TT, oT) {
      const [IT, iT, zT, , , , kT, , WT] = TT.baf2RxStats, XT = BL(TT, Wo), BT = SL(TT), FT = BT.pct / 100, {
        gen: ST,
        out: DT,
        load: LT
      } = function(TT, oT, IT, iT) {
        const zT = IT ? sX : 1,
          kT = Math.min(TT.fuelHeat * zT * Math.max(0, Math.min(1, oT)), TT.size * zT);
        return {
          gen: kT,
          out: kT,
          load: BB(kT, TT.cooling, iT)
        }
      }({
        fuelHeat: IT,
        cooling: iT,
        size: zT
      }, oT / 100, XT, FT), xT = SB(kT || NX(...TT.baf2RxDims)), cT = TT.baf2RxHeat, KT = Math.abs(LT - cT), MT = function(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dT.r;
        const kT = IT ? sX : 1,
          WT = Math.min(TT.fuelHeat * kT * oT / 100, TT.size * kT),
          XT = WT,
          BT = TT.fuelHeat * kT,
          FT = TT.cooling * XB(iT.pct / 100),
          ST = BT > 0 && FT < TT.size * kT ? Math.floor(100 * FT / BT) : 100,
          DT = WT * zT - iT.inPerS;
        return {
          out: XT,
          hotAbove: ST >= 100 ? null : Math.max(0, ST),
          waterSecs: iT.pct >= 100 && DT > 1e-6 ? Math.max(0, iT.stored) / DT : null
        }
      }({
        fuelHeat: IT,
        cooling: iT,
        size: zT
      }, oT, XT, {
        pct: BT.pct,
        inPerS: BT.inPerS,
        stored: BT.stored
      }, FL(BT.Sx));
      return {
        pct: oT,
        out: DT,
        coolPerS: ST * FL(BT.Sx),
        pelletsPerMin: WT > 0 ? DT / WT * 60 : 0,
        settle: LT,
        settleS: KT > 2 ? xT * Math.log(KT / 2) : 0,
        overheatS: LT > 100 && cT < 100 ? xT * Math.log((LT - cT) / (LT - 100)) : null,
        hotAbove: MT.hotAbove,
        coolantSecs: MT.waterSecs
      }
    }

    function xL(TT) {
      return TT.baf2RxThrottle <= 0 && "running" !== TT.baf2RxState ? 0 : LL(TT, TT.baf2RxTarget).pelletsPerMin / 60
    }

    function cL(TT, oT) {
      if (TT <= 0 || oT <= 0) return 0;
      const IT = TT / oT;
      return IT < .25 ? 1 : IT < .5 ? 2 : IT < .8 ? 3 : 4
    }

    function KL(TT, oT) {
      const IT = {};
      for (const [iT, zT] of Object.entries(oT.params)) IT[iT] = "time" === iT ? Ak(TT, zT) : "amount" === iT ? vB(zT) : String(Math.round(zT));
      return TT(oT.key, IT)
    }

    function ML(TT, oT) {
      return {
        key: `${WL}${TT}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: oT
      }
    }

    function rL(TT) {
      var oT;
      const IT = BL(TT, Wo),
        iT = "running" === TT.baf2RxState,
        zT = cB(TT),
        kT = TT.baf2RxHeat;
      var WT;
      if (iT && kT > ZX) return {
        key: null !== (WT = zT.fix) && void 0 !== WT ? WT : `${WL}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const XT = iT ? LL(TT, TT.baf2RxTarget).coolantSecs : null,
        BT = "cryo" === SL(TT).Sx;
      if (null !== XT && XT >= 1 && XT <= 30) return ML(BT ? "rxWarnCryo" : "rxWarnWater", "bad");
      const FT = bX(NX(...TT.baf2RxDims)).waste,
        ST = iT ? hB(TT, FT, xL(TT)).fullInS : null;
      if (null !== ST && ST <= 120 && TT.baf2RxWaste >= .5 * FT) return ML("rxWarnWaste", "warn");
      if (null !== XT && XT >= 1) return ML(BT ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: XT
      });
      const DT = "noWater" === TT.baf2RxState && kT > ZX;
      if (TT.baf2RxDamage >= 1 && !DT) return ML("rxDamagedHeals", "warn", {
        pct: TT.baf2RxDamage
      });
      if (TT.baf2RxCryoCut) return ML("rxFix_cryoCut", "warn");
      const LT = SL(TT);
      if ("noWater" === TT.baf2RxState && "cryo" === LT.Sx) return ML("noWater" === TT.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const xT = zT.fix === `${WL}rxFix_scramCool` || "idle" === TT.baf2RxState && TT.baf2RxTarget <= 0;
      if (xT && TT.baf2RxFuel <= 0) return ML("rxFix_noFuel", "warn");
      if (xT && TT.baf2RxWaterIn <= 0 && (null !== (oT = TT.baf2RxCryoIn) && void 0 !== oT ? oT : 0) <= 0) return ML("rxFix_noWater", "warn");
      const cT = zT.fix === `${WL}rxFix_scramCool` ? MB(TT) : null;
      if (null !== cT) return {
        key: cT.key,
        params: {
          amount: cT.amount
        },
        tone: "info"
      };
      if ("running" !== TT.baf2RxState && "idle" !== TT.baf2RxState && null !== zT.fix) return {
        key: zT.fix,
        params: {},
        tone: "scram" === TT.baf2RxState ? "info" : DT ? "bad" : "warn"
      };
      var KT;
      if ("idle" === TT.baf2RxState && TT.baf2RxTarget <= 0) return {
        key: null !== (KT = zT.fix) && void 0 !== KT ? KT : `${WL}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const MT = TT.baf2RxCryoStarved;
      if ("cryo" === LT.Sx && MT && LT.needPerS > 0 && LT.usePerS < XL * LT.needPerS) return ML("noWater" === MT ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const rT = "cryo" === LT.Sx,
        AT = LT.needPerS > 0 && LT.usePerS < XL * LT.needPerS;
      if (rT ? AT || LT.makersShort > 0 && LT.pct < 100 : LT.pct < 100) {
        const oT = rT && AT ? Math.floor(100 * LT.usePerS / LT.needPerS) : Math.min(100, LT.pct);
        if (LT.makersShort > 0) {
          return ML(`${rT?"rxCryoShortLine":"rxWaterShortLine"}${1===LT.makersShort?"One":""}${!rT&&TT.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: oT,
            count: LT.makersShort
          })
        }
        return ML(rT ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: oT
        })
      }
      const gT = function(TT) {
        const [oT, IT, iT] = TT.baf2RxStats, zT = SL(TT), kT = FB({
          fuelHeat: oT,
          cooling: IT,
          size: iT
        }, "cryo" === zT.Sx ? dT.d : 1, !0);
        return Math.max(0, kT * FL(zT.Sx) - zT.inPerS)
      }(TT);
      if (IT && gT > 0) return ML("cryo" === LT.Sx ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(gT)
      });
      if (kT >= kB) return ML("rxHotLine", "warn");
      const hT = LL(TT, TT.baf2RxTarget);
      var wT;
      if (null !== hT.overheatS) return ML("rxWillOverheat", "bad", {
        pct: TT.baf2RxTarget,
        time: hT.overheatS,
        safe: null !== (wT = hT.hotAbove) && void 0 !== wT ? wT : 100
      });
      if (Math.abs(hT.settle - kT) >= 3) return ML("rxSettling", "info", {
        pct: TT.baf2RxTarget,
        heat: Math.round(hT.settle),
        time: hT.settleS
      });
      const mT = MB(TT);
      if (null !== mT) return {
        key: mT.key,
        params: {
          amount: mT.amount
        },
        tone: "info"
      };
      const eT = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== oT && ("running" !== oT || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === TT.rods ? `${DB}rxLimitNoRods` : `${DB}rxLimit_${zB(TT)}`
      }({
        rods: TT.baf2RxStats[3],
        ...KB(TT)
      }, TT.baf2RxState, TT.baf2RxOut >= XL * TT.baf2RxMaxNow, !1);
      if (eT === `${WL}rxLimit_size`) {
        const [oT, , IT, iT] = TT.baf2RxStats, zT = iT > 0 && oT > 0 ? Math.ceil(IT / (oT / iT) - 1e-9) : iT, kT = TT.baf2RxDims.every((TT => TT >= aI("reactor").max));
        if (zT < iT) return ML(kT ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: zT,
          have: iT
        });
        if (kT) return ML("rxLimit_sizeMax", "info")
      }
      return null !== eT ? {
        key: eT,
        params: {},
        tone: "info"
      } : ML("rxSteady", "ok", {
        pct: TT.baf2RxTarget
      })
    }

    function AL(TT) {
      var oT;
      if (TT.melted) return ML("rxMeltedBody", "bad");
      if (-1 === TT.bad) return ML("rxFix_noRoom", "warn");
      if (TT.bad > 0) return ML(1 === TT.bad ? "rxBadOne" : "rxBad", "warn", {
        count: TT.bad
      });
      if (TT.left > 0) {
        const oT = 1 === TT.left ? "One" : "";
        return ML(TT.canFill ? `rxPlanLeft${oT}` : `rxPlanLeftNoFill${oT}`, "info", {
          count: TT.left
        })
      }
      if (0 === TT.rods) return ML("rxLimitNoRods", "warn");
      const IT = null !== (oT = TT.idle) && void 0 !== oT ? oT : 0;
      return IT > 0 ? ML(1 === IT ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: IT
      }) : ML("rxPlanReady", "ok")
    }

    function gL(TT) {
      return Math.floor(Math.max(0, TT[1] - 1) / 2)
    }

    function hL(TT) {
      if (TT >= VX && TT < TB) {
        const oT = TT - VX;
        return {
          key: 0 === oT ? `${WL}rxWhy_rodAlone` : 1 === oT ? `${WL}rxWhy_rodOne` : `${WL}rxWhy_rod`,
          params: {
            count: String(oT),
            heat: String(UX * (1 + aX * oT))
          }
        }
      }
      return TT === TB ? {
        key: `${WL}rxWhy_channel`,
        params: {
          amount: String(QX)
        }
      } : TT === oB ? {
        key: `${WL}rxWhy_deadChannel`,
        params: {}
      } : TT === IB ? {
        key: `${WL}rxWhy_graphite`,
        params: {}
      } : {
        key: `${WL}rxWhy_core`,
        params: {}
      }
    }
    const wL = "buildAFactory2Game:";

    function mL(TT, oT) {
      return 0 !== (TT.baf2RxFlags & oT)
    }

    function eL(TT) {
      let {
        status: oT,
        pending: IT,
        store: iT,
        explain: zT
      } = TT;
      const {
        t: kT
      } = (0, ez.t)(), WT = mL(oT, ko), XT = oT.baf2RxTarget, BT = oT.baf2RxThrottle, FT = function(TT) {
        return {
          press: () => {
            TT.throttlePress()
          },
          drag: oT => {
            TT.throttleDrag(oT)
          },
          release: () => {
            TT.throttleRelease()
          }
        }
      }(iT), ST = null === (DT = LL(oT, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, DT - 10),
        red: DT
      };
      var DT;
      return (0, mk.jsxs)("div", {
        className: gz()("Baf2RxThrottle", {
          Off: WT
        }),
        onClick: () => {
          WT && zT(`${wL}rxWhy_startFirst`)
        },
        children: [(0, mk.jsx)("span", {
          className: "HideNarrow",
          children: kT(`${wL}rxThrottle`)
        }), (0, mk.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, mk.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: XT,
            disabled: WT,
            style: WT ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": kT(`${wL}rxThrottle`),
            onPointerDown: () => {
              FT.press();
              const TT = () => {
                window.removeEventListener("pointerup", TT), window.removeEventListener("pointercancel", TT), FT.release()
              };
              window.addEventListener("pointerup", TT), window.addEventListener("pointercancel", TT)
            },
            onKeyUp: FT.release,
            onChange: TT => {
              FT.drag(Number(TT.target.value))
            }
          }), (0, mk.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${ST.amber}%, #ffb020 ${ST.amber}% ${ST.red}%, #ff3b30 ${ST.red}%)`
            },
            "aria-hidden": "true"
          }), (0, mk.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${BT}% + ${8*(1-BT/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, mk.jsxs)("b", {
          children: [`${XT}%`, (0, mk.jsx)("i", {
            className: gz()("Baf2RxPendingDot", {
              On: IT
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function RL(TT) {
      let {
        status: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)(), iT = LL(oT, oT.baf2RxTarget), zT = SL(oT).Sx, kT = IT("cryo" === zT ? `${wL}rxRateCryo` : `${wL}rxRateWater`, {
        rate: iL(iT.coolPerS)
      }), WT = IT(`${wL}rxChain`, {
        pct: String(oT.baf2RxTarget),
        out: vB(iT.out),
        heat: String(Math.round(iT.settle)),
        coolant: kT
      }), XT = null !== iT.coolantSecs ? iT.coolantSecs >= 1 ? IT("cryo" === zT ? `${wL}rxThrottleCryoOut` : `${wL}rxThrottleWaterOut`, {
        time: Ak(IT, iT.coolantSecs)
      }) : IT("cryo" === zT ? `${wL}rxThrottleCryoDry` : `${wL}rxThrottleWaterDry`) : null;
      return (0, mk.jsxs)("p", {
        className: "Baf2RxChain",
        children: [WT, null !== XT ? (0, mk.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", XT]
        }) : (0, mk.jsxs)("span", {
          children: [" \xb7 ", IT(`${wL}rxChainPellets`, {
            amount: EB(iT.pelletsPerMin)
          })]
        })]
      })
    }

    function uL(TT) {
      let {
        view: oT,
        store: IT,
        explain: zT,
        explainOnce: kT
      } = TT;
      const {
        t: WT
      } = (0, ez.t)(), {
        status: XT
      } = oT, [BT, FT] = (0, iT.useState)(!1), ST = mL(XT, ko), LT = mL(XT, Wo), xT = !mL(XT, Fo), cT = XT.baf2RxHeat > 100;
      return (0, mk.jsxs)(mk.Fragment, {
        children: [(0, mk.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, mk.jsx)(eL, {
            status: XT,
            pending: oT.throttlePending,
            store: IT,
            explain: zT
          }), (0, mk.jsx)(kL, {
            on: LT,
            label: LT ? WT(`${wL}rxOdLeft`, {
              time: Ak(WT, XT.baf2RxOdLeft)
            }) : WT(`${wL}rxOverdrive`),
            locked: xT,
            pending: 0 !== (oT.pendingFlags & Wo),
            toggle: () => {
              xT ? zT(`${wL}rxOverdriveTier`, {
                amount: String(DT(13))
              }) : LT ? IT.setFlag(Wo, !1) : oT.odConfirmed ? IT.setFlag(Wo, !0) : FT(!0)
            }
          }), ST || oT.startGuard ? (0, mk.jsx)(gW.r, {
            disabled: oT.busy.has("start") || oT.startGuard,
            onClick: () => {
              IT.tap("start", (() => {
                IT.setFlag(ko, !1)
              }))
            },
            children: WT(oT.startGuard ? `${wL}rxStarting` : `${wL}rxStart`)
          }) : (0, mk.jsx)("span", {
            className: gz()("Baf2RxScram", {
              Pulse: cT
            }),
            children: (0, mk.jsx)(gW.C, {
              onClick: () => {
                IT.shutDown()
              },
              children: WT(`${wL}rxScram`)
            })
          })]
        }), (0, mk.jsx)(RL, {
          status: XT
        }), BT && (0, mk.jsx)(VD, {
          id: "baf2RxOdTitle",
          title: `${wL}rxOdConfirmTitle`,
          body: `${wL}rxOdConfirmBody`,
          yes: `${wL}rxOdConfirm`,
          cancel: () => {
            FT(!1)
          },
          confirm: () => {
            FT(!1), IT.tap("odConfirm", (() => {
              IT.confirmOverdrive(), IT.setFlag(Wo, !0)
            })), kT(`${wL}rxWhy_overdrive`)
          }
        })]
      })
    }

    function vL(TT) {
      let {
        view: oT,
        store: IT,
        keepSize: iT
      } = TT;
      const {
        t: zT
      } = (0, ez.t)(), {
        status: kT
      } = oT;
      return (0, mk.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, mk.jsx)(zL, {
          kind: "reactor",
          dims: oT.dims,
          cap: kT.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: TT => {
            IT.resize(TT)
          }
        }), iT ? (0, mk.jsx)(gW.i, {
          onClick: iT,
          children: zT(`${wL}rxKeepSize`)
        }) : (0, mk.jsxs)(mk.Fragment, {
          children: [(0, mk.jsx)(kL, {
            on: oT.guide,
            label: zT(`${wL}rxGuide`),
            toggle: () => {
              IT.toggleGuide()
            }
          }), mL(kT, Do) && (0, mk.jsx)(kL, {
            on: oT.starter,
            label: zT(`${wL}rxStarter`),
            toggle: () => {
              IT.toggleStarter()
            }
          }), (0, mk.jsx)(yD, {
            status: kT,
            store: IT,
            busy: oT.busy.has("fill")
          })]
        })]
      })
    }

    function EL(TT) {
      let {
        need: oT,
        kind: IT = "reactor",
        explain: iT
      } = TT;
      const {
        t: zT
      } = (0, ez.t)(), kT = oT.length <= 3, WT = oT.reduce(((TT, oT) => {
        let [, IT] = oT;
        return TT + IT
      }), 0);
      return (0, mk.jsxs)("div", {
        className: gz()("Baf2RxParts", {
          Compact: !kT
        }),
        onClick: () => {
          iT("battery" === IT ? `${wL}batWhy_store` : `${wL}rxShellHint`)
        },
        children: [WT > 0 && (0, mk.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === WT ? zT(`${wL}rxBlocksOne`) : zT(`${wL}rxBlocks`, {
            blocks: String(WT)
          })
        }), 0 === oT.length ? (0, mk.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: zT("battery" === IT ? `${wL}batPartsDone` : `${wL}rxShellDone`)
        }) : AB(oT).map((TT => {
          let [oT, IT, iT] = TT;
          const WT = function(TT) {
            const oT = eB[TT];
            if (void 0 === oT) return null;
            const [IT, iT, zT] = wB[oT].colour.map((TT => Math.round(255 * TT)));
            return `rgb(${IT}, ${iT}, ${zT})`
          }(oT);
          return (0, mk.jsxs)("span", {
            className: "Baf2RxChip",
            title: Tk(zT, oT),
            children: [(0, mk.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === WT ? {
                visibility: "hidden"
              } : {
                background: WT
              },
              title: zT(`${wL}rxShopGhost`)
            }), (0, mk.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, mk.jsx)(uz.c, {
                itemName: oT,
                amount: 0
              })
            }), (0, mk.jsx)("span", {
              className: "Baf2RxChipName",
              children: kT ? `${IT} ${XT=Tk(zT,oT),XT.replace(/^(Reactor|Battery) (?=\S)/,"")}` : IT
            }), iT >= IT ? (0, mk.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, mk.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: kT ? zT(`${wL}rxShopShort`, {
                count: String(IT - iT)
              }) : "\u2212" + (IT - iT)
            })]
          }, oT);
          var XT
        }))]
      })
    }
    const fL = "buildAFactory2Game:";

    function CL(TT) {
      var oT, IT, zT, kT, WT, XT, BT;
      let {
        store: FT,
        close: ST
      } = TT;
      const {
        t: DT
      } = (0, ez.t)(), LT = HW(), xT = TL(FT), {
        explained: cT,
        explain: KT
      } = lD("baf2RxExplained"), MT = (0, iT.useCallback)(((TT, oT) => {
        KT(DT(TT, oT))
      }), [KT, DT]), rT = null === xT || void 0 === xT ? void 0 : xT.status, AT = !0 === (null === rT || void 0 === rT ? void 0 : rT.baf2BatReadOnly), gT = TT => {
        rT && LT.send(zo(rT.baf2BatAt, TT))
      }, [hT, wT, mT] = null !== (oT = null === xT || void 0 === xT ? void 0 : xT.dims) && void 0 !== oT ? oT : [0, 0, 0], eT = vB(null !== (IT = null === xT || void 0 === xT ? void 0 : xT.fD) && void 0 !== IT ? IT : 0), RT = !0 === (null === rT || void 0 === rT ? void 0 : rT.baf2BatFormed), uT = null !== (zT = null === rT || void 0 === rT ? void 0 : rT.baf2BatStored) && void 0 !== zT ? zT : 0, vT = Math.max(1, null !== (kT = null === rT || void 0 === rT ? void 0 : rT.baf2BatIslandCap) && void 0 !== kT ? kT : 1), ET = Math.min(100, 100 * uT / vT), fT = null === rT || void 0 === rT ? void 0 : rT.baf2BatNetPerS, CT = function(TT, oT, IT) {
        return IT > 0 && oT >= IT ? "full" : void 0 !== TT && TT >= .05 ? "charging" : void 0 !== TT && TT <= -.05 && oT > 0 ? "draining" : "steady"
      }(fT, uT, null !== (WT = null === rT || void 0 === rT ? void 0 : rT.baf2BatIslandCap) && void 0 !== WT ? WT : 0), jT = null !== (XT = null === rT || void 0 === rT ? void 0 : rT.baf2BatMadePerS) && void 0 !== XT ? XT : 0, JT = null !== (BT = null === rT || void 0 === rT ? void 0 : rT.baf2BatUsedPerS) && void 0 !== BT ? BT : 0;
      let UT, aT = {},
        YT = "info";
      if (rT)
        if (RT) "charging" === CT ? (UT = `${fL}batLine_charging`, aT = {
          time: Ak(DT, (vT - uT) / Math.max(.05, null !== fT && void 0 !== fT ? fT : 0))
        }, YT = "ok") : "draining" === CT ? (UT = `${fL}batLine_draining`, aT = {
          time: Ak(DT, uT / Math.max(.05, -(null !== fT && void 0 !== fT ? fT : 0)))
        }, YT = "warn") : UT = "full" === CT ? `${fL}batLine_full` : uT <= 0 && JT > 0 ? `${fL}batLine_empty` : `${fL}batLine_steady`;
        else {
          var QT;
          const TT = AL({
            left: rT.baf2BatNeed.reduce(((TT, oT) => {
              let [, IT] = oT;
              return TT + IT
            }), 0),
            bad: rT.baf2BatBad,
            rods: 1,
            canFill: !0 === rT.baf2BatCanFill,
            melted: !1
          });
          UT = TT.key, aT = {
            count: String(null !== (QT = TT.params.count) && void 0 !== QT ? QT : 0)
          }, YT = TT.tone
        }
      else UT = `${fL}batLine_steady`;
      const OT = Math.max(jT, JT, 1);
      return (0, mk.jsx)(AW.e, {
        close: ST,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, mk.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, mk.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mk.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, mk.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, mk.jsx)(uz.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, mk.jsxs)("div", {
                children: [(0, mk.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: DT(`${fL}batTitle`)
                }), rT && (0, mk.jsxs)("p", {
                  className: gz()("Baf2RxSubtitle", {
                    good: RT && "charging" === CT,
                    warn: RT && "draining" === CT
                  }),
                  children: [hT, "\xd7", wT, "\xd7", mT, " \xb7 ", DT(RT ? `${fL}batState_${CT}` : `${fL}rxSubPlanShort`)]
                })]
              })]
            }), (0, mk.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [rT && !AT && (0, mk.jsx)(oL, {
                kind: "battery",
                cap: RT ? eT : void 0,
                busy: null === xT || void 0 === xT ? void 0 : xT.busy.has("apart"),
                apart: () => {
                  FT.tap("apart", (() => {
                    gT("apart")
                  }))
                }
              }), (0, mk.jsx)(gW.j, {
                onClick: ST
              })]
            })]
          }), xT && rT && (0, mk.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, mk.jsxs)("div", {
              className: gz()("Baf2RxFlow Baf2BatFlow", {
                Plan: !RT
              }),
              children: [(0, mk.jsx)(nD, {
                kind: "Power",
                label: DT(`${fL}batMade`),
                number: RT ? `\u26a1 ${vB(jT)}/s` : "\u2014",
                note: DT(`${fL}batMadeNote`),
                share: RT ? jT / OT : void 0,
                onExplain: () => {
                  MT(`${fL}batWhy_made`)
                }
              }), (0, mk.jsx)(qD, {
                kind: "Power",
                step: RT ? cL(jT, OT) : 0,
                planned: !RT
              }), (0, mk.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  MT(`${fL}batWhy_store`)
                },
                children: [(0, mk.jsx)(ZD, {
                  max: 100,
                  bands: [{
                    upTo: RT ? ET : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, mk.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, mk.jsx)("b", {
                    className: "Baf2BatStored",
                    children: RT ? DT(`${fL}batStoredOf`, {
                      amount: vB(uT),
                      cap: vB(rT.baf2BatIslandCap)
                    }) : DT(`${fL}batWillHold`, {
                      cap: eT
                    })
                  }), (0, mk.jsx)("span", {
                    children: DT(`${fL}batAdds`, {
                      cap: eT
                    })
                  }), RT && (0, mk.jsx)("small", {
                    children: DT(`${fL}batBreakNote`, {
                      cap: eT
                    })
                  })]
                })]
              }), (0, mk.jsx)(qD, {
                kind: "Power",
                step: RT ? cL(JT, OT) : 0,
                planned: !RT
              }), (0, mk.jsx)(nD, {
                kind: "Power",
                label: DT(`${fL}batUsed`),
                number: RT ? `\u26a1 ${vB(JT)}/s` : "\u2014",
                note: DT(`${fL}batUsedNote`),
                share: RT ? JT / OT : void 0,
                onExplain: () => {
                  MT(`${fL}batWhy_used`)
                }
              })]
            }), (0, mk.jsx)(sD, {
              text: DT(UT, aT),
              tone: YT,
              explained: cT
            }), AT ? (0, mk.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: DT(`${fL}rxNotYours`)
            }) : !RT && (0, mk.jsxs)(mk.Fragment, {
              children: [(0, mk.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, mk.jsx)(zL, {
                  kind: "battery",
                  dims: xT.dims,
                  cap: rT.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: TT => {
                    FT.resize(TT)
                  }
                }), (0, mk.jsx)(kL, {
                  on: xT.guide,
                  label: DT(`${fL}rxGuide`),
                  toggle: () => {
                    FT.toggleGuide()
                  }
                }), rT.baf2BatCanFill && (0, mk.jsx)(gW.m, {
                  disabled: !gB("battery", rT.baf2BatNeed) || xT.busy.has("fill"),
                  onClick: () => {
                    FT.tap("fill", (() => {
                      gT("fill")
                    }))
                  },
                  children: DT(`${fL}rxFill`)
                })]
              }), (0, mk.jsx)(EL, {
                need: rT.baf2BatNeed,
                kind: "battery",
                explain: MT
              })]
            })]
          })]
        })
      })
    }
    const jL = "buildAFactory2Game:",
      JL = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function UL(TT, oT) {
      return TT === dX ? null : oT ? "#4a4440" : TT < TB ? JL[TT - VX] : TT === TB ? "#3fd0f0" : TT === oB ? "#2c3e4c" : "#55585e"
    }

    function aL(TT) {
      let {
        inner: oT,
        looks: IT,
        layer: iT,
        setLayer: zT,
        glow: kT,
        melted: WT,
        explain: XT
      } = TT;
      const {
        t: BT
      } = (0, ez.t)(), [FT, ST, DT] = oT, LT = Math.max(0, Math.min(ST - 1, iT)), xT = [];
      for (let KT = 0; KT < DT; KT++)
        for (let TT = 0; TT < FT; TT++) {
          var cT;
          const oT = null !== (cT = IT[(LT * DT + KT) * FT + TT]) && void 0 !== cT ? cT : dX,
            iT = UL(oT, WT),
            zT = oT >= VX && oT < TB;
          xT.push(null === iT ? (0, mk.jsx)("circle", {
            cx: TT + .5,
            cy: KT + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${TT},${KT}`) : (0, mk.jsx)("rect", {
            x: TT + .06,
            y: KT + .06,
            width: .88,
            height: .88,
            fill: iT,
            opacity: zT && !WT ? .5 + .5 * kT : 1,
            onClick: TT => {
              TT.stopPropagation();
              const IT = hL(oT);
              XT(IT.key, IT.params)
            }
          }, `${TT},${KT}`))
        }
      return (0, mk.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, mk.jsx)("svg", {
          className: gz()("Baf2RxMapGrid", {
            Melted: WT
          }),
          viewBox: `0 0 ${Math.max(1,FT)} ${Math.max(1,DT)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": BT(`${jL}rxWhy_core`),
          onClick: () => {
            XT(`${jL}rxWhy_core`, {})
          },
          children: xT
        }), ST > 1 && (0, mk.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, mk.jsx)("button", {
            type: "button",
            "aria-label": BT(`${jL}rxLayerDown`),
            disabled: LT <= 0,
            onClick: () => {
              zT(LT - 1)
            },
            children: "\u25bc"
          }), (0, mk.jsxs)("span", {
            children: [(0, mk.jsx)("span", {
              className: "HideNarrow",
              children: BT(`${jL}rxLayer`, {
                n: String(LT + 1),
                of: String(ST)
              })
            }), (0, mk.jsx)("span", {
              className: "ShowNarrow",
              children: BT(`${jL}rxLayerShort`, {
                n: String(LT + 1),
                of: String(ST)
              })
            })]
          }), (0, mk.jsx)("button", {
            type: "button",
            "aria-label": BT(`${jL}rxLayerUp`),
            disabled: LT >= ST - 1,
            onClick: () => {
              zT(LT + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const YL = "buildAFactory2Game:",
      QL = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: lX,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: xB,
        kind: "red"
      }],
      OL = [50, lX, 100];

    function HL(TT) {
      let {
        stats: oT,
        t: IT,
        explain: iT
      } = TT;
      const zT = zB(oT),
        kT = Math.max(1, oT.fuelHeat, oT.cooling, oT.size),
        WT = [
          ["fuel", `${YL}rxBarRods`, oT.fuelHeat],
          ["cooling", `${YL}rxBarCooling`, oT.cooling],
          ["size", `${YL}rxBarSize`, oT.size]
        ];
      return (0, mk.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          iT(`${YL}rxWhy_bars`)
        },
        children: [(0, mk.jsx)("span", {
          className: "Baf2RxMostLine",
          children: IT(`${YL}rxMost`, {
            amount: vB(Math.min(oT.fuelHeat, oT.cooling, oT.size))
          })
        }), (0, mk.jsx)("span", {
          className: "Baf2RxMostBars",
          children: WT.map((TT => {
            let [oT, iT, WT] = TT;
            return (0, mk.jsxs)("span", {
              className: gz()("Baf2RxMostBar", oT, {
                Low: oT === zT
              }),
              children: [(0, mk.jsx)("small", {
                children: IT(iT)
              }), (0, mk.jsx)("i", {
                children: (0, mk.jsx)("b", {
                  style: {
                    width: 100 * WT / kT + "%"
                  }
                })
              })]
            }, oT)
          }))
        })]
      })
    }

    function nL(TT) {
      var oT;
      let {
        view: IT,
        heat: zT,
        settle: kT,
        settleLine: WT,
        settleBad: XT,
        explain: BT
      } = TT;
      const {
        t: FT
      } = (0, ez.t)(), {
        status: ST
      } = IT, DT = ST.baf2RxAt.join(","), [LT, xT] = (0, iT.useState)((() => gL(IT.inner)));
      (0, iT.useEffect)((() => {
        xT(gL(IT.inner))
      }), [DT, IT.inner[1]]);
      const cT = null !== (oT = IT.plan) && void 0 !== oT ? oT : KB(ST),
        KT = IT.plan ? IT.plan.powerPerUnit : ST.baf2RxStats[8],
        MT = null === zT ? null : "alarm" === (rT = LB(ST)) ? "red" : "hot" === rT ? "hot" : "warm" === rT ? "warm" : "cold";
      var rT;
      const AT = !ST.baf2RxFormed && function(TT, oT) {
          return 0 !== (TT.baf2RxFlags & oT)
        }(ST, Xo),
        gT = ST.baf2RxDamage,
        hT = ST.baf2RxDamageTrend;
      return (0, mk.jsxs)("div", {
        className: gz()("Baf2RxCore", null !== MT && void 0 !== MT ? MT : "plan"),
        children: [(0, mk.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, mk.jsx)(aL, {
            inner: IT.inner,
            looks: IT.looks,
            layer: LT,
            setLayer: xT,
            glow: ST.baf2RxFormed ? ST.baf2RxThrottle / 100 : 1,
            melted: AT,
            explain: BT
          }), (0, mk.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              BT(`${YL}rxWhy_heat`)
            },
            children: [null !== zT ? (0, mk.jsxs)(mk.Fragment, {
              children: [(0, mk.jsx)("b", {
                children: FT(`${YL}rxHeatPct`, {
                  pct: String(zT)
                })
              }), (0, mk.jsx)("span", {
                className: gz()("Baf2RxBand", MT),
                children: FT(`${YL}rxBand_${MT}`)
              })]
            }) : (0, mk.jsx)("b", {
              children: FT(`${YL}rxHeat`)
            }), null !== WT && (0, mk.jsx)("span", {
              className: gz()("Baf2RxSettle", {
                Bad: XT
              }),
              children: WT
            }), gT >= 1 && (0, mk.jsxs)("span", {
              className: gz()("Baf2RxDamage", hT),
              children: [FT(`${YL}rxDamageLine`, {
                pct: String(gT)
              }), " \xb7 ", FT(`${YL}rxDamage_${hT}`), (0, mk.jsx)("i", {
                children: (0, mk.jsx)("b", {
                  style: {
                    width: `${Math.min(100,gT)}%`
                  }
                })
              })]
            })]
          }), (0, mk.jsx)(ZD, {
            max: xB,
            bands: QL,
            ticks: OL,
            now: zT,
            settle: kT,
            settleTone: XT ? "bad" : null,
            onExplain: () => {
              BT(`${YL}rxWhy_heat`)
            }
          })]
        }), (0, mk.jsx)(HL, {
          stats: cT,
          t: FT,
          explain: BT
        }), KT > 0 && (0, mk.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            BT(`${YL}rxWhy_perPellet`)
          },
          children: FT(`${YL}rxPerPellet`, {
            amount: vB(KT)
          })
        })]
      })
    }

    function qL(TT, oT) {
      var IT;
      if (!TT.baf2RxStore) return {
        note: oT(`${YL}rxUpTo`, {
          amount: vB(TT.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [iT, zT] = TT.baf2RxStore, kT = zT > 0 ? iT / zT : 0, WT = String(Math.floor(100 * kT)), XT = null !== (IT = TT.baf2RxStoreNetPerS) && void 0 !== IT ? IT : 0, BT = function(TT) {
        var oT, IT;
        const [iT, zT] = null !== (oT = TT.baf2RxStore) && void 0 !== oT ? oT : [0, 0], kT = null !== (IT = TT.baf2RxStoreNetPerS) && void 0 !== IT ? IT : 0;
        return zT > 0 && iT >= zT - 1 ? "running" === TT.baf2RxState ? `${WL}rxStoreFull` : `${WL}rxStoreFullOnly` : kT > .05 ? `${WL}rxStoreLine` : kT < -.05 ? "running" === TT.baf2RxState ? `${WL}rxStoreUsesMore` : `${WL}rxStoreDraining` : `${WL}rxStorePct`
      }(TT);
      return {
        note: oT(BT, BT === `${YL}rxStoreLine` ? {
          pct: WT,
          time: Ak(oT, (zT - iT) / XT)
        } : {
          pct: WT
        }),
        share: kT
      }
    }

    function ZL(TT) {
      let {
        view: oT,
        explain: IT,
        preview: iT
      } = TT;
      const {
        t: zT
      } = (0, ez.t)(), {
        status: kT
      } = oT, WT = bX(NX(...oT.dims)), XT = xL(kT), BT = Math.min(Math.round(kT.baf2RxFuel), WT.fuel), FT = "running" === kT.baf2RxState, ST = FT ? cL(kT.baf2RxOut, kT.baf2RxMaxNow) : 0, DT = function(TT, oT, IT) {
        const iT = SL(TT),
          zT = "cryo" === iT.Sx,
          kT = IT ? IT.coolantSecs : iT.pct >= 100 && TT.baf2RxOut >= 1 ? LL(TT, TT.baf2RxThrottle).coolantSecs : null;
        let WT, XT = !1;
        if (iT.pct < 100) {
          const IT = 1 === iT.makersShort,
            kT = !zT && TT.baf2RxCryoOpen ? "OrCryo" : "";
          WT = iT.makersShort > 0 ? oT(zT ? `${YL}rxCryoAddMixer${IT?"":"s"}` : `${YL}rxWaterAddCondenser${IT?"":"s"}${kT}`, {
            count: String(iT.makersShort)
          }) : oT(`${YL}rxWaterNeeds`, {
            rate: iL(iT.needPerS)
          })
        } else if (null !== kT) WT = oT(`${YL}rxWaterRunsOut`, {
          time: Ak(oT, kT)
        });
        else if (iT.waterBeside > 0) WT = oT(`${YL}rxCryoPlusWater`, {
          rate: iL(iT.waterBeside)
        });
        else {
          const TT = function(TT) {
            return TT.inPerS <= 0 ? "rxWaterNoSupply" : TT.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(iT);
          XT = "rxWaterNoSupply" === TT, WT = oT(`${YL}${TT}`, {
            amount: vB(iT.stored)
          })
        }
        return {
          kind: zT ? "Cryo" : "Water",
          label: oT(zT ? `${YL}rxCryo` : `${YL}rxWater`),
          number: `${iL(iT.usePerS)}/s`,
          preview: IT ? `${iL(IT.coolPerS)}/s` : null,
          note: WT,
          tone: "noWater" === TT.baf2RxState ? "danger" : XT ? "warn" : (BT = iT.pct, FT = kT, BT < 100 ? "danger" : null === FT ? null : FT < 300 ? "danger" : "warn"),
          share: iT.pct / 100,
          why: zT ? `${YL}rxWhy_cryo` : `${YL}rxWhy_water`,
          short: iT.pct < 100
        };
        var BT, FT
      }(kT, zT, iT), LT = hB(kT, WT.waste, XT), xT = qL(kT, zT), cT = LL(kT, kT.baf2RxTarget), KT = FT && Math.abs(cT.settle - kT.baf2RxHeat) >= 3, MT = iT ? iT.pelletsPerMin / 60 : null;
      return (0, mk.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, mk.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mk.jsx)(nD, {
            kind: "Fuel",
            label: zT(`${YL}rxFuel`),
            number: String(BT),
            preview: null !== MT && MT > 0 && kT.baf2RxFuel > 0 ? Ak(zT, kT.baf2RxFuel / MT) : null,
            note: kT.baf2RxFuel <= 0 ? zT(`${YL}rxFuelEmpty`) : XT > 0 ? zT(`${YL}rxFuelLeft`, {
              time: Ak(zT, kT.baf2RxFuel / XT)
            }) : zT(1 === BT ? `${YL}rxFuelPellet` : `${YL}rxFuelPellets`),
            tone: "noFuel" === kT.baf2RxState ? "danger" : kT.baf2RxFuel < 2 ? "warn" : null,
            share: kT.baf2RxFuel / WT.fuel,
            onExplain: () => {
              IT(`${YL}rxWhy_fuel`)
            }
          }), (0, mk.jsx)(nD, {
            kind: DT.kind,
            label: DT.label,
            number: DT.number,
            preview: DT.preview,
            note: DT.note,
            tone: DT.tone,
            share: DT.share,
            onExplain: () => {
              IT(DT.why)
            }
          })]
        }), (0, mk.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mk.jsx)(qD, {
            kind: "Fuel",
            step: ST,
            short: "noFuel" === kT.baf2RxState
          }), (0, mk.jsx)(qD, {
            kind: DT.kind,
            step: ST,
            short: DT.short || "noWater" === kT.baf2RxState
          })]
        }), (0, mk.jsx)(nL, {
          view: oT,
          heat: kT.baf2RxHeat,
          settle: Math.min(xB, cT.settle),
          settleLine: KT ? zT(`${YL}rxHeatSettles`, {
            pct: String(Math.round(cT.settle)),
            time: Ak(zT, cT.settleS)
          }) : null,
          settleBad: cT.settle > 100,
          explain: IT
        }), (0, mk.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mk.jsx)(qD, {
            kind: "Power",
            step: ST
          }), (0, mk.jsx)(qD, {
            kind: "Waste",
            step: FT && kT.baf2RxFuel - kT.baf2RxPu > 0 ? ST : 0,
            short: LT.full
          })]
        }), (0, mk.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mk.jsx)(nD, {
            kind: "Power",
            label: zT(`${YL}rxPowerOut`),
            number: `\u26a1 ${vB(kT.baf2RxOut)}/s`,
            preview: iT ? vB(iT.out) : null,
            note: xT.note,
            share: xT.share,
            onExplain: () => {
              IT(`${YL}rxWhy_power`)
            }
          }), (0, mk.jsx)(nD, {
            kind: "Waste",
            label: zT(`${YL}rxWaste`),
            number: `${Math.floor(kT.baf2RxWaste)}/${WT.waste}`,
            note: LT.full ? zT(`${YL}rxWasteFull`) : null !== LT.fullInS ? zT(`${YL}rxWasteFullIn`, {
              time: Ak(zT, LT.fullInS)
            }) : zT(`${YL}rxWasteSpent`),
            tone: "wasteFull" === kT.baf2RxState ? "danger" : LT.full ? "warn" : null,
            share: kT.baf2RxWaste / WT.waste,
            onExplain: () => {
              IT(`${YL}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function lL(TT) {
      let {
        view: oT,
        explain: IT
      } = TT;
      const {
        t: iT
      } = (0, ez.t)(), zT = oT.plan;
      if (!zT) return null;
      const kT = zT.fuelHeat <= 0 ? null : zT.cooling > 0 ? Math.min(xB, 100 * zT.fuelHeat / zT.cooling) : xB,
        WT = iT(`${YL}rxPlanAtFull`);
      return (0, mk.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, mk.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mk.jsx)(nD, {
            kind: "Fuel",
            label: iT(`${YL}rxFuel`),
            number: iT(`${YL}rxPlanPerMin`, {
              amount: EB(zT.pelletsPerMin)
            }),
            note: iT(`${YL}rxPlanPellets`),
            onExplain: () => {
              IT(`${YL}rxWhy_fuel`)
            }
          }), (0, mk.jsx)(nD, {
            kind: "Water",
            label: iT(`${YL}rxWater`),
            number: `${iL(zT.waterPerS)}/s`,
            note: oT.status.baf2RxCryoOpen && zT.waterPerS > 0 ? iT(`${YL}rxPlanOrCryo`, {
              rate: iL(FB(zT, dT.d) * dT.n)
            }) : WT,
            onExplain: () => {
              IT(`${YL}rxWhy_water`)
            }
          })]
        }), (0, mk.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mk.jsx)(qD, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, mk.jsx)(qD, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, mk.jsx)(nL, {
          view: oT,
          heat: null,
          settle: kT,
          settleLine: null === kT ? null : iT(`${YL}rxPlanHeat`, {
            pct: String(Math.round(kT))
          }),
          settleBad: null !== kT && kT > 100,
          explain: IT
        }), (0, mk.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mk.jsx)(qD, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, mk.jsx)(qD, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, mk.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mk.jsx)(nD, {
            kind: "Power",
            label: iT(`${YL}rxPowerOut`),
            number: `\u26a1 ${vB(zT.max)}/s`,
            note: WT,
            onExplain: () => {
              IT(`${YL}rxWhy_power`)
            }
          }), (0, mk.jsx)(nD, {
            kind: "Waste",
            label: iT(`${YL}rxWaste`),
            number: iT(`${YL}rxPlanPerMin`, {
              amount: EB(zT.pelletsPerMin)
            }),
            note: iT(`${YL}rxWasteSpent`),
            onExplain: () => {
              IT(`${YL}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const sL = "buildAFactory2Game:",
      tL = {
        key: `${sL}rxWaiting`,
        params: {},
        tone: "info"
      };

    function GL(TT, oT) {
      return 0 !== (TT.baf2RxFlags & oT)
    }

    function pL(TT) {
      var oT, IT;
      let {
        store: zT,
        close: kT
      } = TT;
      const {
        t: WT
      } = (0, ez.t)(), XT = TL(zT), {
        explained: BT,
        hinting: FT,
        explain: ST,
        explainOnce: DT
      } = lD("baf2RxExplained"), LT = (0, iT.useCallback)(((TT, oT) => {
        ST(WT(TT, oT))
      }), [ST, WT]), xT = (0, iT.useCallback)(((TT, oT) => {
        DT(TT, WT(TT, oT))
      }), [DT, WT]), [cT, KT] = (0, iT.useState)(!1), [MT, rT] = (0, iT.useState)(!1), AT = null === XT || void 0 === XT ? void 0 : XT.status, gT = null === AT || void 0 === AT ? void 0 : AT.baf2RxAt.join(","), hT = !0 === (null === AT || void 0 === AT ? void 0 : AT.baf2RxFormed);
      (0, iT.useEffect)((() => {
        rT(!1), KT(!1)
      }), [gT, hT]), (0, iT.useEffect)((() => (zT.opened(), () => {
        zT.closed()
      })), [zT]);
      const wT = void 0 !== AT && GL(AT, So),
        mT = AT ? hT ? LB(AT) : null !== XT && void 0 !== XT && XT.plan ? function(TT, oT) {
          if (TT <= 0) return "off";
          if (oT <= 0) return "alarm";
          const IT = 100 * TT / oT;
          return IT < 50 ? "calm" : IT < kB ? "warm" : IT <= 100 ? "hot" : "alarm"
        }(XT.plan.fuelHeat, XT.plan.cooling) : "off" : "off",
        eT = AT ? cB(AT) : null,
        RT = XT ? XT.waiting ? tL : hT ? rL(XT.status) : function(TT) {
          var oT, IT;
          const {
            status: iT
          } = TT;
          return AL({
            left: iT.baf2RxNeed.reduce(((TT, oT) => {
              let [, IT] = oT;
              return TT + IT
            }), 0),
            bad: iT.baf2RxBad,
            rods: null !== (oT = null === (IT = TT.plan) || void 0 === IT ? void 0 : IT.rods) && void 0 !== oT ? oT : 0,
            canFill: GL(iT, Bo),
            melted: GL(iT, Xo),
            idle: TT.looks.reduce(((TT, oT) => TT + (oT === oB ? 1 : 0)), 0)
          })
        }(XT) : null,
        uT = FT && null !== RT && ("ok" === RT.tone || "info" === RT.tone),
        vT = AT ? function(TT) {
          const oT = 0 !== (TT.baf2RxFlags & ko),
            IT = TT.baf2RxHeat < tX;
          return 0 !== (TT.baf2RxFlags & Xo) || IT && (oT || !TT.baf2RxFormed) ? null : TT.baf2RxFormed && !oT ? {
            key: `${DB}rxApartScram`,
            params: {}
          } : {
            key: `${DB}rxApartCooling`,
            params: {
              pct: String(tX)
            }
          }
        }(AT) : null,
        [ET, fT, CT] = null !== (oT = null === XT || void 0 === XT ? void 0 : XT.dims) && void 0 !== oT ? oT : [0, 0, 0],
        jT = `${ET}\xd7${fT}\xd7${CT}`;
      return (0, mk.jsx)(AW.e, {
        close: kT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, mk.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, mk.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mk.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, mk.jsx)(IL, {
                mood: mT
              }), (0, mk.jsxs)("div", {
                children: [(0, mk.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: WT(`${sL}rxTitle`)
                }), XT && (0, mk.jsxs)("p", {
                  className: gz()("Baf2RxSubtitle", hT && (null === eT || void 0 === eT ? void 0 : eT.tone)),
                  children: [hT && !wT ? (0, mk.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": WT(`${sL}rxChangeSize`),
                    onClick: () => {
                      if (!AT) return;
                      const TT = GL(AT, ko);
                      var oT;
                      (oT = {
                        scram: TT,
                        heat: AT.baf2RxHeat
                      }).scram && oT.heat < tX ? KT(!0) : LT(TT ? `${sL}rxResizeCooling` : `${sL}rxResizeHot`, {
                        pct: String(tX)
                      })
                    },
                    children: [jT, " \u270e"]
                  }) : jT, " \xb7 ", WT(hT ? null !== (IT = null === eT || void 0 === eT ? void 0 : eT.label) && void 0 !== IT ? IT : `${sL}rxState_running` : `${sL}rxSubPlanShort`)]
                })]
              })]
            }), (0, mk.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [XT && !wT && (0, mk.jsx)(oL, {
                kind: "reactor",
                busy: XT.busy.has("apart"),
                whyNot: vT ? () => {
                  LT(vT.key, vT.params)
                } : null,
                apart: () => {
                  zT.tap("apart", (() => {
                    zT.send("apart")
                  }))
                }
              }), (0, mk.jsx)(gW.j, {
                onClick: kT
              })]
            })]
          }), XT && RT && (0, mk.jsxs)("div", {
            className: "Baf2RxBody",
            children: [hT ? (0, mk.jsx)(ZL, {
              view: XT,
              explain: LT,
              preview: DL(XT.status)
            }) : (0, mk.jsx)(lL, {
              view: XT,
              explain: LT
            }), (0, mk.jsx)(sD, {
              text: uT ? `${KL(WT,RT)} ${WT(`${sL}rxTapHint`)}` : KL(WT, RT),
              tone: RT.tone,
              explained: BT
            }), wT ? (0, mk.jsxs)(mk.Fragment, {
              children: [(0, mk.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: WT(`${sL}rxNotYours`)
              }), (0, mk.jsx)(ND, {
                status: XT.status,
                store: zT,
                readOnly: !0
              })]
            }) : hT && !MT ? (0, mk.jsxs)(mk.Fragment, {
              children: [(0, mk.jsx)(uL, {
                view: XT,
                store: zT,
                explain: LT,
                explainOnce: xT
              }), void 0 !== XT.status.baf2RxLayout && pD(XT.status) && (0, mk.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, mk.jsx)(ND, {
                  status: XT.status,
                  store: zT,
                  readOnly: !1,
                  bare: !0
                }), (0, mk.jsx)(yD, {
                  status: XT.status,
                  store: zT,
                  busy: XT.busy.has("fill")
                })]
              })]
            }) : (0, mk.jsxs)(mk.Fragment, {
              children: [(0, mk.jsx)(vL, {
                view: XT,
                store: zT,
                keepSize: hT ? () => {
                  rT(!1)
                } : void 0
              }), rB(XT.dims, XT.status.baf2RxDims) && (0, mk.jsx)(EL, {
                need: XT.status.baf2RxNeed,
                explain: LT
              }), (0, mk.jsx)(ND, {
                status: XT.status,
                store: zT,
                readOnly: !1
              })]
            }), cT && (0, mk.jsx)(VD, {
              id: "baf2ResizeTitle",
              title: `${sL}rxResizeConfirmTitle`,
              body: `${sL}rxResizeConfirmBody`,
              yes: `${sL}rxChangeSize`,
              cancel: () => {
                KT(!1)
              },
              confirm: () => {
                KT(!1), rT(!0)
              }
            })]
          })]
        })
      })
    }
    class bL {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(TT) {
        this.view = TT;
        for (const oT of this.listeners) oT()
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

    function yL(TT) {
      let {
        commands: oT,
        store: IT,
        power: zT,
        water: kT,
        reactor: WT,
        battery: XT,
        collider: BT,
        terminal: FT,
        quests: ST,
        close: DT,
        leave: LT,
        askIslands: xT,
        showCore: cT,
        openSocial: KT
      } = TT;
      const {
        userContext: MT
      } = (0, jX.b)(), rT = CX.featureFlags.useSocialFeatures && MT.isLoggedIn(), [AT, gT] = (0, iT.useState)((() => IT.get()));
      (0, iT.useEffect)((() => IT.subscribe((() => {
        gT(IT.get())
      }))), [IT]);
      const hT = "islands" === (null === AT || void 0 === AT ? void 0 : AT.kind) ? AT.backToCore : void 0;
      return (0, mk.jsxs)(OW.Provider, {
        value: oT,
        children: ["core" === (null === AT || void 0 === AT ? void 0 : AT.kind) && (0, mk.jsx)(WD, {
          view: AT.core,
          close: DT,
          askIslands: xT
        }), "dropMap" === (null === AT || void 0 === AT ? void 0 : AT.kind) && (0, mk.jsx)(SD, {
          message: AT.dropMap,
          quests: ST,
          close: DT,
          leave: LT
        }), "islands" === (null === AT || void 0 === AT ? void 0 : AT.kind) && (0, mk.jsx)(ED, {
          message: AT.islands,
          arrivedAtMs: AT.arrivedAtMs,
          close: hT ? () => {
            cT(hT)
          } : DT,
          leave: LT,
          openSocial: rT ? KT : null
        }), "quests" === (null === AT || void 0 === AT ? void 0 : AT.kind) && (0, mk.jsx)(RS, {
          store: ST,
          close: DT
        }), "transfer" === (null === AT || void 0 === AT ? void 0 : AT.kind) && (0, mk.jsx)(dF, {
          message: AT.transfer,
          arrivedAtMs: AT.arrivedAtMs,
          close: DT,
          leave: LT
        }), "power" === (null === AT || void 0 === AT ? void 0 : AT.kind) && (0, mk.jsx)(EW, {
          store: zT,
          close: DT
        }), "water" === (null === AT || void 0 === AT ? void 0 : AT.kind) && (0, mk.jsx)(LX, {
          store: kT,
          close: DT
        }), "reactor" === (null === AT || void 0 === AT ? void 0 : AT.kind) && (0, mk.jsx)(pL, {
          store: WT,
          close: DT
        }), "battery" === (null === AT || void 0 === AT ? void 0 : AT.kind) && (0, mk.jsx)(CL, {
          store: XT,
          close: DT
        }), "collider" === (null === AT || void 0 === AT ? void 0 : AT.kind) && (0, mk.jsx)(xF, {
          store: BT,
          close: DT
        }), "terminal" === (null === AT || void 0 === AT ? void 0 : AT.kind) && (0, mk.jsx)(HD, {
          store: FT,
          close: DT,
          send: TT => {
            oT.send(TT)
          }
        })]
      })
    }
    var NL = IT(37475);

    function PL(TT, oT) {
      return TT.distSq - oT.distSq
    }
    class dL {
      constructor() {
        this.list = [], this.pool = []
      }
      add(TT, oT, IT, iT) {
        let zT = this.pool[this.list.length];
        zT || (zT = {
          x: 0,
          y: 0,
          distSq: 0,
          element: oT,
          liftRem: IT,
          dot: iT
        }, this.pool.push(zT)), zT.x = TT.x, zT.y = TT.y, zT.distSq = TT.distSq, zT.element = oT, zT.liftRem = IT, zT.dot = iT, this.list.push(zT)
      }
    }
    class VL {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = TT, this.sizes = new WeakMap, this.observer = new ResizeObserver((TT => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const oT of TT) {
            const TT = oT.borderBoxSize[0];
            "dot" !== oT.target.dataset.crowded && 0 !== TT.inlineSize && 0 !== TT.blockSize && this.sizes.set(oT.target, {
              width: TT.inlineSize,
              height: TT.blockSize
            })
          }
        })), this.remPx = 16, this.qx = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.Tm = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.Tm)
      }
      observe(TT) {
        this.observer.observe(TT)
      }
      unobserve(TT) {
        this.observer.unobserve(TT)
      }
      run(TT) {
        const oT = TT.list;
        oT.sort(PL);
        const IT = this.pxPerVw,
          iT = this.pxPerVh;
        this.qx.length = 0, this.hud && this.qx.push(...this.hud.boxes(performance.now()));
        for (const kT of oT) {
          var zT;
          const TT = this.sizes.get(kT.element);
          let oT = "no";
          if (TT && TT.width > 0) {
            const zT = kT.x * IT,
              WT = kT.y * iT - kT.liftRem * this.remPx;
            this.fit(zT, WT, TT.width, TT.height) || (oT = kT.dot && this.fit(zT, WT, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (zT = kT.element.dataset.crowded) && void 0 !== zT ? zT : "no") !== oT && ("no" === oT ? delete kT.element.dataset.crowded : kT.element.dataset.crowded = oT), "hidden" !== oT && (0, NL.c)(kT.element, kT.x, kT.y)
        }
        oT.length = 0
      }
      fit(TT, oT, IT, iT) {
        const zT = TT - IT / 2,
          kT = TT + IT / 2,
          WT = oT - iT,
          XT = this.qx;
        for (let BT = 0; BT < XT.length; BT += 4)
          if (zT < XT[BT + 1] - 2 && kT > XT[BT] + 2 && WT < XT[BT + 3] - 2 && oT > XT[BT + 2] + 2) return !1;
        return XT.push(zT, kT, WT, oT), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.Tm)
      }
    }
    const Tx = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class ox {
      constructor() {
        this.cards = Tx.map((TT => document.getElementsByClassName(TT))), this.watched = Tx.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(TT) {
        TT - this.refreshedAt > 1e3 && (this.refreshedAt = TT, this.stale = !0);
        for (let IT = 0; IT < this.cards.length; IT++) {
          var oT;
          const TT = null !== (oT = this.cards[IT][0]) && void 0 !== oT ? oT : null;
          TT !== this.watched[IT] && this.watch(IT, TT)
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
        for (const oT of this.watched) {
          if (!oT || oT.closest(".NoRoom")) continue;
          const IT = oT.getBoundingClientRect();
          let iT = IT.top,
            zT = IT.bottom;
          if (oT === this.watched[0] && this.hud) {
            const TT = this.hud.getBoundingClientRect();
            iT = Math.max(iT, TT.top), zT = Math.min(zT, TT.bottom)
          }
          IT.width > 0 && zT > iT && TT.push(IT.left, IT.right, iT, zT)
        }
      }
      watch(TT, oT) {
        const IT = this.watched[TT];
        var iT, zT;
        (IT && this.sizes.unobserve(IT), this.watched[TT] = oT, this.stale = !0, oT && this.sizes.observe(oT), 0 === TT) && (null === (iT = this.hud) || void 0 === iT || iT.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (zT = null === oT || void 0 === oT ? void 0 : oT.closest(".Baf2QuestHud")) && void 0 !== zT ? zT : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const Ix = [0, 0, 0],
      ix = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function zx(TT, oT, IT, iT, zT, kT) {
      let [WT, XT, BT] = iT;
      const FT = (WT + .5 - IT[0]) ** 2 + (XT - IT[1]) ** 2 + (BT + .5 - IT[2]) ** 2;
      let ST = null;
      FT <= kT ** 2 && (Ix[0] = WT + .5, Ix[1] = XT + zT, Ix[2] = BT + .5, ST = oT.projectWorldPosToViewport(Ix));
      const DT = null !== ST && ST.x > -5 && ST.x < 105 && ST.y > -5 && ST.y < 105;
      return (0, NL.d)(TT, !DT), DT ? (ix.x = ST.x, ix.y = ST.y, ix.distSq = FT, ix) : null
    }
    class kx {
      constructor(TT) {
        this.onElement = TT, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(TT) {
        const oT = [];
        for (let IT = 0; IT + 4 < TT.length; IT += 5) {
          const iT = [TT[IT], TT[IT + 1], TT[IT + 2]];
          oT.push({
            key: iT.join(","),
            pos: iT,
            status: Tz[TT[IT + 3]],
            kind: ho[TT[IT + 4]]
          })
        }
        this.markers = oT, this.keys = new Set(oT.map((TT => {
          let {
            key: oT
          } = TT;
          return oT
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
        let oT = this.refs.get(TT);
        return oT || (oT = oT => {
          const IT = this.elements.get(TT);
          var iT, zT;
          IT && (null === (iT = this.onElement) || void 0 === iT || iT.call(this, IT, !1));
          oT ? (this.elements.set(TT, oT), null === (zT = this.onElement) || void 0 === zT || zT.call(this, oT, !0)) : (this.elements.delete(TT), this.refs.delete(TT))
        }, this.refs.set(TT, oT)), oT
      }
      onAfterRender(TT, oT, IT) {
        for (const iT of this.markers) {
          const zT = this.elements.get(iT.key);
          if (!zT) continue;
          const kT = zx(zT, TT, oT, iT.pos, 1.05, 24);
          kT && IT.add(kT, zT, .45, !0)
        }
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
    }
    const Wx = {
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
    const Xx = (0, iT.memo)((function(TT) {
        let {
          status: oT,
          kind: IT,
          bindRef: iT
        } = TT;
        const {
          t: zT
        } = (0, ez.t)(), kT = function(TT, oT) {
          var IT;
          if ("noFuel" === TT) {
            var iT, zT;
            const TT = null === (iT = vo[oT]) || void 0 === iT || null === (zT = iT.fuels) || void 0 === zT ? void 0 : zT.find((TT => Po.includes(TT)));
            return null !== TT && void 0 !== TT ? TT : Wx.noFuel
          }
          return void 0 !== (null === (IT = vo[oT]) || void 0 === IT ? void 0 : IT.cryoMade) ? "noOutlet" === TT ? "Fluid Pipe" : "noInput" === TT ? "Biomass" : Wx[TT] : Wx[TT]
        }(oT, IT);
        return (0, mk.jsxs)("div", {
          className: gz()("Baf2StallMarker", oT),
          ref: iT,
          hidden: !0,
          children: [kT && (0, mk.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, mk.jsx)(uz.c, {
              itemName: kT,
              amount: 0
            })
          }), (0, mk.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === oT ? "?" : "!"
          }), (0, mk.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: zT(`buildAFactory2Game:stallTag_${oT}`)
          })]
        })
      })),
      Bx = (0, iT.memo)((function(TT) {
        let {
          controller: oT
        } = TT;
        const [IT, zT] = (0, iT.useState)((() => oT.get()));
        return (0, iT.useEffect)((() => (zT(oT.get()), oT.subscribe((() => {
          zT(oT.get())
        })))), [oT]), (0, mk.jsx)("div", {
          className: "Baf2StallMarkers",
          children: IT.map((TT => (0, mk.jsx)(Xx, {
            status: TT.status,
            kind: TT.kind,
            bindRef: oT.bind(TT.key)
          }, TT.key)))
        })
      })),
      Fx = SI.j + 150;
    class Sx {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(TT, oT) {
        const IT = oT - TT;
        null === this.offset || IT < this.offset ? this.offset = IT : this.offset = Math.min(IT, this.offset + .02 * (oT - this.sampledAt)), this.sampledAt = oT
      }
      toLocal(TT) {
        var oT;
        return TT + (null !== (oT = this.offset) && void 0 !== oT ? oT : 0) + Fx
      }
    }
    var Dx = IT(37478);
    const Lx = 15 * Math.PI / 180,
      xx = Math.SQRT2,
      cx = [4, 2];

    function Kx(TT, oT) {
      const IT = [1 / 0, 1 / 0, 1 / 0],
        iT = [-1 / 0, -1 / 0, -1 / 0];
      for (const BT of TT)
        for (let TT = 0; TT < 3; TT++) IT[TT] = Math.min(IT[TT], BT[TT]), iT[TT] = Math.max(iT[TT], BT[TT]);
      const zT = (IT[0] + iT[0]) / 2,
        kT = (IT[1] + iT[1]) / 2,
        WT = (IT[2] + iT[2]) / 2;
      let XT = 0;
      for (const BT of TT) XT = Math.max(XT, Math.hypot(BT[0] - zT, BT[1] - kT, BT[2] - WT));
      return {
        x: zT,
        y: kT,
        z: WT,
        r: XT + oT
      }
    }

    function Mx(TT, oT, IT) {
      const iT = oT.x - TT.x,
        zT = oT.y - TT.y,
        kT = oT.z - TT.z,
        WT = Math.sqrt(iT * iT + zT * zT + kT * kT);
      if (WT <= oT.r + 8) return 1;
      const XT = oT.r / WT,
        BT = Math.sqrt(1 - XT * XT),
        FT = BT < -TT.cosHalf,
        ST = (iT * TT.dx + zT * TT.dy + kT * TT.dz) / WT;
      if (!FT && ST < TT.cosHalf * BT - TT.sinHalf * XT) return 0;
      const DT = IT * xx * TT.frameMs * TT.pxPerBlock / (WT - oT.r);
      for (let LT = 0; LT < cx.length; LT++)
        if (DT * cx[LT] <= 1) return cx[LT];
      return 1
    }

    function rx(TT, oT) {
      return {
        name: TT,
        at: oT,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Ax = [0, 0, 0];

    function gx(TT, oT, IT) {
      let [, iT, zT, kT, WT, XT] = oT;
      const BT = SI.d * (null !== WT && void 0 !== WT ? WT : 1),
        FT = [];
      for (let xT = 0; xT < iT.length; xT += 3) FT.push([iT[xT] + .5, iT[xT + 1] + .65, iT[xT + 2] + .5]);
      const ST = [];
      for (let xT = 0; xT < FT.length - 1; xT++) {
        const [TT, oT] = [FT[xT], FT[xT + 1]];
        ST.push([(TT[0] + oT[0]) / 2, (TT[1] + oT[1]) / 2, (TT[2] + oT[2]) / 2])
      }
      const DT = FT.slice(1, -1),
        LT = new Uint8Array(DT.length);
      for (const xT of null !== XT && void 0 !== XT ? XT : []) LT[xT >> 1] |= 1 & xT ? 2 : 1;
      return {
        island: TT,
        length: DT.length,
        loop: kT,
        cellsPerMs: BT,
        edges: ST,
        ek: DT,
        bounds: Kx([...ST, ...DT], .3),
        changed: !0,
        culled: !1,
        hide: LT,
        items: zT.map((TT => {
          let [oT, iT] = TT;
          return rx(oT, (0, SI.A)(oT, iT, IT, BT).at)
        }))
      }
    }

    function hx(TT, oT) {
      const {
        items: IT
      } = TT;
      if (0 === IT.length) return;
      const iT = TT.length / TT.cellsPerMs,
        zT = Math.floor((oT - IT[0].at) / iT) - 1;
      if (zT > 0)
        for (const kT of IT) kT.at += zT * iT
    }

    function wx(TT, oT) {
      const IT = Math.min(Math.floor(oT), TT.length - 1),
        iT = TT.hide[IT];
      return 0 !== iT && 0 !== (iT & (oT - IT < .5 ? 1 : 2))
    }

    function mx(TT, oT) {
      const IT = Math.min(Math.floor(oT), TT.length - 1),
        iT = oT - IT,
        zT = iT < .5,
        kT = zT ? TT.edges[IT] : TT.ek[IT],
        WT = zT ? TT.ek[IT] : TT.edges[IT + 1],
        XT = zT ? 2 * iT : 2 * iT - 1;
      Ax[0] = kT[0] + (WT[0] - kT[0]) * XT, Ax[1] = kT[1] + (WT[1] - kT[1]) * XT, Ax[2] = kT[2] + (WT[2] - kT[2]) * XT
    }
    const ex = Math.PI / 4;
    class Rx {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.Tm = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(TT) {
        const oT = performance.now();
        this.clock.sample(TT.baf2BeltLinesAt, oT), this.queue(TT.baf2BeltLinesAt, TT, 0, null, null, 0), this.applyDue(oT)
      }
      onMoves(TT) {
        const oT = performance.now(),
          IT = TT.baf2BeltMovesAt;
        this.clock.sample(IT, oT);
        for (const [iT, zT, kT, WT] of TT.baf2BeltMoveList) null === zT ? this.queue(IT - kT, null, iT, null, null, null !== WT && void 0 !== WT ? WT : 0) : this.queue(IT - kT, null, iT, zT, null !== WT && void 0 !== WT ? WT : null, 0);
        this.applyDue(oT)
      }
      start(TT) {
        this.pool = new Dx.b(TT, {
          scale: .3,
          yaw: ex
        }, 64), this.Tm(), window.addEventListener("resize", this.Tm)
      }
      onAfterRender(TT) {
        const {
          pool: oT
        } = this;
        if (!oT) return;
        const IT = performance.now(),
          iT = IT - this.lastRenderAt;
        this.lastRenderAt = IT, iT < 100 && (this.frameMs += .1 * (iT - this.frameMs));
        const zT = IT + this.frameMs;
        this.applyDue(zT);
        const kT = TT.cameraPosition,
          WT = oT.follow(kT);
        this.setView(TT, kT);
        const XT = this.frame++;
        for (let BT = 0; BT < this.shown.length; BT++) {
          const TT = this.shown[BT],
            IT = Mx(this.view, TT.bounds, TT.cellsPerMs),
            iT = TT.culled && 0 !== IT;
          if (TT.culled = 0 === IT, !WT && !TT.changed && !iT && (0 === IT || (XT + BT) % IT !== 0)) continue;
          TT.changed = !1, TT.loop && (hx(TT, zT), (0, SI.t)(TT.items, TT.length, zT, TT.cellsPerMs));
          let kT = TT.length;
          for (let XT = 0; XT < TT.items.length; XT++) {
            const IT = TT.items[XT],
              iT = (0, SI.C)(IT.at, kT, zT, TT.cellsPerMs);
            if (kT = iT - SI.o, wx(TT, iT)) {
              null === IT.kind || IT.hidden || (IT.kind.hide(IT.slot), IT.hidden = !0);
              continue
            }
            let BT = IT.kind;
            if (null === BT) {
              if (BT = oT.kindOf(IT.name), null === BT) continue;
              IT.kind = BT, IT.slot = BT.take(), IT.hidden = !0, IT.drawn = NaN
            } else if (iT === IT.drawn && !IT.hidden && !WT) continue;
            mx(TT, iT), BT.write(IT.slot, Ax[0], Ax[1], Ax[2]), IT.hidden = !1, IT.drawn = iT
          }
        }
        oT.commit()
      }
      dispose() {
        var TT;
        window.removeEventListener("resize", this.Tm), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (TT = this.pool) || void 0 === TT || TT.dispose(), this.pool = null
      }
      setView(TT, oT) {
        const {
          cameraDir: IT,
          lastDir: iT
        } = this, zT = TT.cameraDirection;
        for (let ST = 0; ST < 3; ST++) iT[ST] = IT[ST], IT[ST] = zT[ST];
        const kT = IT[0] * iT[0] + IT[1] * iT[1] + IT[2] * iT[2],
          WT = Number.isNaN(kT) ? 0 : Math.acos(Math.min(1, Math.max(-1, kT))),
          {
            width: XT,
            height: BT
          } = this,
          FT = TT.tanHalfFovX;
        ! function(TT, oT, IT, iT, zT, kT, WT) {
          let XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          TT.x = oT[0], TT.y = oT[1], TT.z = oT[2], TT.dx = IT[0], TT.dy = IT[1], TT.dz = IT[2];
          const BT = Math.min(Math.PI, Math.atan(Math.sqrt(iT * iT + zT * zT)) + Lx + XT);
          TT.cosHalf = Math.cos(BT), TT.sinHalf = Math.sin(BT), TT.pxPerBlock = kT / (2 * zT), TT.frameMs = WT
        }(this.view, oT, IT, FT, FT * BT / XT, BT * window.devicePixelRatio, this.frameMs, WT)
      }
      queue(TT, oT, IT, iT, zT, kT) {
        const WT = Math.max(this.clock.toLocal(TT), this.lastPendingAt);
        this.lastPendingAt = WT, this.pending.push({
          at: WT,
          lines: oT,
          line: IT,
          name: iT,
          pos: zT,
          idx: kT
        })
      }
      applyDue(TT) {
        const {
          pending: oT
        } = this;
        for (; this.pendingHead < oT.length && oT[this.pendingHead].at <= TT;) {
          const TT = oT[this.pendingHead++];
          if (TT.lines) this.applyLines(TT.lines, TT.at), TT.lines = null;
          else {
            const oT = this.lines.get(TT.line);
            oT && this.applyMove(oT, TT, TT.at)
          }
        }
        this.pendingHead === oT.length ? (oT.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > oT.length && (oT.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(TT, oT) {
        this.clearIsland(TT.baf2BeltIsland);
        for (const IT of TT.baf2BeltLineList) this.lines.set(IT[0], gx(TT.baf2BeltIsland, IT, oT));
        this.shown = [...this.lines.values()]
      }
      applyMove(TT, oT, IT) {
        let {
          name: iT,
          pos: zT,
          idx: kT
        } = oT;
        TT.changed = !0, TT.loop && (hx(TT, IT), (0, SI.t)(TT.items, TT.length, IT, TT.cellsPerMs)), null !== iT && null !== zT ? (0, SI.x)(TT.items, TT.length, rx(iT, IT), zT, IT, TT.cellsPerMs) : null !== iT ? TT.items.push(rx(iT, IT)) : TT.items.length > kT && this.release((0, SI.E)(TT.items, TT.length, IT, TT.cellsPerMs, kT))
      }
      clearIsland(TT) {
        for (const [oT, IT] of this.lines)
          if (IT.island === TT) {
            for (const TT of IT.items) this.release(TT);
            this.lines.delete(oT)
          }
      }
      release(TT) {
        null !== TT.kind && (TT.kind.release(TT.slot), TT.kind = null, TT.slot = -1, TT.hidden = !0, TT.drawn = NaN)
      }
    }
    var ux = IT(35594),
      vx = IT(37489);

    function Ex(TT) {
      let {
        depth: oT,
        store: IT,
        t: zT
      } = TT;
      const kT = function(TT) {
        const [oT, IT] = (0, iT.useState)(TT.lastPlayerY());
        return (0, VF.g)(Uz, IT), (0, iT.useEffect)((() => {
          IT(TT.lastPlayerY())
        }), [TT]), oT
      }(IT);
      if (null === kT) return null;
      const [WT, XT] = oT, BT = kT > WT ? WT : null !== XT && kT < XT ? XT : null, FT = {
        y: rk(kT),
        target: null === BT ? "" : rk(BT)
      };
      return (0, mk.jsx)("span", {
        className: gz()("Baf2QuestDepth", {
          Reached: null === BT
        }),
        children: zT(`${iS}${null===BT?"questDepthReached":"questDepth"}`, FT)
      })
    }

    function fx(TT) {
      let {
        also: oT,
        view: IT,
        t: iT
      } = TT;
      return (0, mk.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, mk.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, mk.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, mk.jsx)("strong", {
            children: iT(`${iS}questAlsoDownHere`)
          }), (0, mk.jsx)("span", {
            className: "Baf2QuestChips",
            children: oT.map((TT => {
              let [oT, zT, kT, WT] = TT;
              return (0, mk.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": iT(`${iS}questAlsoItem`, {
                  item: kS(iT, IT.itemNames[oT], oT),
                  have: String(zT),
                  need: String(kT)
                }),
                children: [(0, mk.jsx)(BS, {
                  item: oT
                }), (0, mk.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${zT}/${kT}`
                }), null !== WT && (0, mk.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: iT(`${iS}questAlsoDepth`, {
                    y: rk(WT)
                  })
                })]
              }, oT)
            }))
          })]
        })]
      })
    }
    var Cx = IT(2961);

    function jx(TT) {
      let {
        expanded: oT,
        inventoryOpen: IT,
        children: zT
      } = TT;
      const kT = (0, iT.useRef)(null);
      return (0, iT.useEffect)((() => {
        const TT = kT.current,
          oT = null === TT || void 0 === TT ? void 0 : TT.closest(".RightElements"),
          iT = null === TT || void 0 === TT ? void 0 : TT.firstElementChild;
        if (!TT || !oT || !iT) return;
        return (0, vx.e)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [oT, iT], (() => {
          const zT = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === zT.length) return;
          const kT = Math.max(...zT.map((TT => TT.getBoundingClientRect().bottom))),
            WT = oT.getBoundingClientRect(),
            XT = IT ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (XT) {
            const oT = parseFloat(getComputedStyle(iT).marginLeft) + parseFloat(getComputedStyle(iT).marginRight),
              IT = WT.right - XT.getBoundingClientRect().right - 8 - oT;
            TT.style.setProperty("--baf2-quest-room", `${IT}px`), TT.classList.toggle("NoRoom", IT < 150)
          } else TT.style.removeProperty("--baf2-quest-room"), TT.classList.remove("NoRoom");
          const BT = kT - WT.top + 8,
            FT = function(TT, oT, IT) {
              const iT = oT.getBoundingClientRect(),
                zT = TT.getBoundingClientRect(),
                kT = (0, Cx.c)(zT.left, zT.right, iT.top + IT);
              if (null !== kT && kT < iT.bottom) return kT - iT.top;
              return iT.height - (parseFloat(getComputedStyle(oT).paddingBottom) || 0)
            }(TT, oT, BT) - 8,
            ST = window.innerHeight / 2 - WT.top,
            {
              top: DT,
              maxHeight: LT
            } = function(TT, oT, IT, iT, zT) {
              const kT = Math.min(IT, Math.max(0, oT - TT)),
                WT = zT ? TT : Math.max(TT, Math.min(iT - kT / 2, oT - kT));
              return {
                top: WT,
                maxHeight: Math.max(0, oT - WT)
              }
            }(BT, FT, function(TT) {
              const oT = TT.firstElementChild,
                IT = oT ? oT.scrollHeight - oT.clientHeight : 0;
              return TT.getBoundingClientRect().height + Math.max(0, IT)
            }(iT), ST, hk());
          TT.style.top = `${DT}px`, TT.style.maxHeight = `${LT}px`
        }))
      }), [IT]), (0, mk.jsx)("div", {
        ref: kT,
        className: gz()("Baf2QuestHud", {
          Expanded: oT
        }),
        children: zT
      })
    }

    function Jx(TT) {
      let {
        amount: oT,
        t: IT
      } = TT;
      return (0, mk.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, mk.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, mk.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: IT(`${iS}questStepsDone`, {
            amount: String(oT)
          })
        })]
      })
    }

    function Ux(TT) {
      let {
        pulse: oT
      } = TT;
      return 0 === oT ? null : (0, mk.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, oT)
    }

    function ax(TT) {
      var oT;
      let {
        store: IT
      } = TT;
      const zT = (0, VF.i)(Jz, IT.get()),
        [kT, WT] = (0, iT.useState)(!1),
        {
          t: XT
        } = (0, ez.t)(),
        BT = function() {
          const [TT, oT] = (0, iT.useState)(hk);
          return (0, iT.useEffect)((() => (oT(hk()), wk(oT))), []), TT
        }(),
        {
          openInGameMenuName: FT,
          openEverythingMenuName: ST
        } = (0, Mz.k)(["openInGameMenuName", "openEverythingMenuName"]),
        DT = "inventory" === FT && null === ST,
        LT = null !== FT && !DT || null !== ST;
      if (! function(TT) {
          return null !== TT.name || null !== TT.side
        }(zT) || LT || "off" === zT.tutorial) return null;
      const xT = nz(zT.rows),
        cT = xT.filter((TT => TT.done)).length,
        KT = function(TT, oT) {
          const IT = lz(TT);
          let iT = 0;
          return TT.filter(((TT, zT) => !!TT.justFinished || !(TT.done || zT < IT || iT > oT) && (iT++, !0)))
        }(zT.rows, BT ? 0 : 2),
        MT = BT ? KT : function(TT, oT) {
          const IT = oT.filter((TT => !TT.justFinished));
          if (IT.length < 2) return [...oT];
          const iT = TT.indexOf(IT[0]),
            zT = TT.indexOf(IT[IT.length - 1]),
            kT = new Set(nz(TT));
          return TT.filter(((TT, IT) => oT.includes(TT) || TT.done && kT.has(TT) && IT > iT && IT < zT))
        }(zT.rows, KT),
        rT = kT ? zT.rows : MT,
        AT = kT || BT ? [] : function(TT, oT) {
          const IT = new Array(oT.length + 1).fill(0),
            iT = new Set(nz(TT));
          let zT = 0;
          for (const kT of TT) zT < oT.length && kT === oT[zT] ? zT++ : kT.done && iT.has(kT) && IT[zT]++;
          return IT
        }(zT.rows, MT),
        gT = kT || MT.length < zT.rows.length || null !== zT.reward,
        hT = Hz(zT),
        wT = hT ? XT(`${iS}questLineComplete`) : zT.tier ? DS(XT, zT.tier) : XT(`${iS}currentQuest`),
        mT = function(TT) {
          var oT, IT;
          if (Hz(TT)) return null;
          const iT = null === (oT = TT.chapters) || void 0 === oT ? void 0 : oT.find((oT => {
            let [IT] = oT;
            return IT === TT.tier
          }));
          if (!iT) return null;
          const zT = iT[1].filter((TT => !TT[4]));
          if (0 === zT.length) return null;
          const kT = null === (IT = TT.name) || void 0 === IT ? void 0 : IT[0],
            WT = TT => zT.findIndex((oT => oT[0] === kT && (!TT || !oT[3]))),
            XT = WT(!0),
            BT = XT >= 0 ? XT : WT(!1);
          if (BT >= 0) return [BT + 1, zT.length];
          const FT = zT.filter((TT => TT[3])).length;
          return [Math.min(FT + 1, zT.length), zT.length]
        }(zT);
      return (0, mk.jsx)(ux.e, {
        placement: "topRight",
        children: (0, mk.jsx)(jx, {
          expanded: kT,
          inventoryOpen: DT,
          children: (0, mk.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: zS,
            children: [null !== zT.name && (0, mk.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, mk.jsx)(Ux, {
                pulse: zT.pulse
              }), (0, mk.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, mk.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [wT, mT && (0, mk.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": XT(`${iS}questPlaceLabel`, {
                      n: String(mT[0]),
                      total: String(mT[1])
                    }),
                    children: XT(`${iS}questPlace`, {
                      n: String(mT[0]),
                      total: String(mT[1])
                    })
                  }), zT.tier && zT.core && !hT && (0, mk.jsx)(LS, {
                    core: zT.core,
                    t: XT
                  })]
                })
              }), (0, mk.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: XT(`${iS}${zT.name[0]}`, WS(zT.name[1]))
              }), (xT.length > 1 || gT) && (0, mk.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [xT.length > 1 && (0, mk.jsx)(xS, {
                  rows: xT,
                  t: XT
                }), gT && (0, mk.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": kT,
                  onClick: () => {
                    WT(!kT)
                  },
                  children: [(0, mk.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: XT(`${iS}questStepsToggle`, {
                      done: String(cT),
                      total: String(xT.length)
                    })
                  }), (0, mk.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: kT ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, mk.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [rT.map(((TT, oT) => {
                  var kT;
                  const WT = TT.current && zT.depth;
                  return (0, mk.jsxs)(iT.Fragment, {
                    children: [(null !== (kT = AT[oT]) && void 0 !== kT ? kT : 0) > 0 && (0, mk.jsx)(Jx, {
                      amount: AT[oT],
                      t: XT
                    }), (0, mk.jsx)(cS, {
                      row: TT,
                      view: zT,
                      t: XT,
                      extra: WT && (0, mk.jsx)(Ex, {
                        depth: WT,
                        store: IT,
                        t: XT
                      })
                    })]
                  }, TT.id)
                })), (null !== (oT = AT[rT.length]) && void 0 !== oT ? oT : 0) > 0 && (0, mk.jsx)(Jx, {
                  amount: AT[rT.length],
                  t: XT
                }), zT.also.length > 0 && (0, mk.jsx)(fx, {
                  also: zT.also,
                  view: zT,
                  t: XT
                })]
              }), kT && zT.reward && (0, mk.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [XT(`${iS}questReward`), (0, mk.jsx)(BS, {
                  item: zT.reward
                }), kS(XT, zT.itemNames[zT.reward], zT.reward)]
              })]
            }), zT.side && (0, mk.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [Qz(zT, Date.now()) && (0, mk.jsx)(Ux, {
                pulse: zT.sideCameUpAt
              }), (0, mk.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: XT(`${iS}questSide`)
              }), (0, mk.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: XT(`${iS}${zT.side.name[0]}`, WS(zT.side.name[1]))
              }), (0, mk.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, mk.jsx)(cS, {
                  row: zT.side.row,
                  view: zT,
                  t: XT
                })
              })]
            })]
          })
        })
      })
    }
    const Yx = "baf2ToastView";
    class Qx {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = TT, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: TT,
          holdMs: oT
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const TT = this.dropCovered();
          TT && this.show(TT.message, TT.holdMs)
        }), 250));
        const IT = this.dropCovered();
        null !== IT && (IT.holdMs > 0 || "baf2ToastCelebrate" === IT.message.baf2ToastStyle) && "baf2ToastCelebrate" !== TT.baf2ToastStyle && this.show(IT.message, IT.holdMs);
        const iT = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== TT.baf2ToastStyle && iT > 0) return this.pending = {
          message: TT,
          holdMs: oT
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const TT = this.pending;
          this.pending = null, TT && this.present(TT.message, TT.holdMs)
        }), iT));
        this.present(TT, oT)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(TT, oT) {
        this.clearTimers(), this.pending = null;
        const IT = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: TT.baf2ToastText,
          style: TT.baf2ToastStyle,
          swapped: IT,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === TT.baf2ToastStyle ? 1500 : oT), this.XM();
        const iT = Math.min(8e3, Math.max(1e3, TT.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), iT)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.XM(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.XM()
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
      XM() {
        Cz.h.XM(Yx, this.view, !0)
      }
    }
    var Ox = IT(68);
    const Hx = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function nx(TT) {
      let {
        store: oT
      } = TT;
      const IT = (0, VF.i)(Yx, oT.get()),
        {
          openInGameMenuName: iT,
          openEverythingMenuName: zT
        } = (0, Mz.k)(["openInGameMenuName", "openEverythingMenuName"]),
        kT = IT && (0, mk.jsxs)("div", {
          className: gz()("Baf2Toast", Hx[IT.style], {
            Swapped: IT.swapped,
            Leaving: IT.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === IT.style && (0, mk.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, mk.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, mk.jsx)(vz.c, {
              text: IT.text
            })
          })]
        }, IT.id);
      return null !== iT && null === zT ? (0, Ox.createPortal)((0, mk.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: kT
      }), document.body) : (0, mk.jsx)(ux.e, {
        children: kT
      })
    }
    const qx = "baf2AreaView";
    class Zx {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.kS = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.kS = null
      }
      arrive(TT, oT) {
        oT && function(TT) {
          return "home" === TT.baf2AreaPlace && void 0 !== TT.baf2AreaNameText
        }(TT) ? this.kS = TT : this.show(TT)
      }
      release() {
        const TT = this.kS;
        null !== TT && this.show(TT)
      }
      show(TT) {
        this.clearTimer(), this.kS = null;
        const oT = void 0 === TT.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: TT,
          ms: oT
        }, this.XM(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.XM()
        }), oT)
      }
      dispose() {
        this.clearTimer(), this.kS = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      XM() {
        Cz.h.XM(qx, this.view, !0)
      }
    }

    function lx(TT) {
      var oT;
      let {
        store: IT
      } = TT;
      const {
        t: iT
      } = (0, ez.t)(), zT = (0, VF.i)(qx, IT.get());
      if (!zT) return null;
      const {
        area: kT
      } = zT, WT = kT.baf2AreaResetMinutes;
      return (0, mk.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": kT.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${zT.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, mk.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), kT.baf2AreaHeading && (0, mk.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: iT(kT.baf2AreaHeading)
        }), (0, mk.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (oT = kT.baf2AreaNameText) && void 0 !== oT ? oT : iT(kT.baf2AreaName)
        }), kT.baf2AreaNote && (0, mk.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: iT(kT.baf2AreaNote)
        }), void 0 !== WT && (0, mk.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: iT("buildAFactory2Game:areaWildsReset", {
            time: Ak(iT, 60 * WT)
          })
        })]
      }, zT.id)
    }
    const sx = "baf2GearGauge";
    class tx {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      Am(TT) {
        var oT;
        if (this.clearLinger(), null === TT.gearPowerKind) return void this.set(null);
        const IT = "jetpack" === TT.gearPowerKind && (iT = TT.gearChargeState, zT = TT.gearCharge, "flying" === iT || "charging" === iT || "outOfCharge" === iT || "ceiling" === iT || "offPlot" === iT || "noPower" === iT && zT <= 0);
        var iT, zT;
        const kT = !0 === (null === (oT = this.view) || void 0 === oT ? void 0 : oT.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          WT = IT || "jetpack" === TT.gearPowerKind && kT;
        this.set({
          gauge: TT,
          jetShown: WT
        }), WT && !IT && (this.lingerTimer = setTimeout((() => {
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
        this.view = TT, Cz.h.XM(sx, TT, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const Gx = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function px(TT) {
      let {
        store: oT
      } = TT;
      const IT = (0, VF.i)(sx, oT.get());
      return IT ? "jetpack" === IT.gauge.gearPowerKind ? (0, mk.jsx)(bx, {
        view: IT
      }) : (0, mk.jsx)(yx, {
        gauge: IT.gauge
      }) : null
    }

    function bx(TT) {
      let {
        view: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)(), {
        gauge: iT
      } = oT, zT = iT.gearChargeMax > 0 ? Math.max(0, Math.min(1, iT.gearCharge / iT.gearChargeMax)) : 0, kT = Gx[iT.gearChargeState], WT = kT ? IT(kT) : null;
      return (0, mk.jsxs)("div", {
        className: gz()("Baf2JetArc", {
          Shown: oT.jetShown,
          Low: zT < .2,
          Warm: zT >= .2 && zT < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - zT)
        },
        "aria-hidden": !oT.jetShown,
        children: [(0, mk.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, mk.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Nx,
            pathLength: 100
          }), (0, mk.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Nx,
            pathLength: 100
          })]
        }), (0, mk.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * zT), "%"]
        }), WT && (0, mk.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: WT
        })]
      })
    }

    function yx(TT) {
      let {
        gauge: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)(), iT = function(TT, oT) {
        switch (oT.gearPowerKind) {
          case "skyPack":
            return TT("buildAFactory2Game:gearSkyPack", {
              charge: oT.gearCharge,
              max: oT.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return TT("buildAFactory2Game:gearIslandDraw", {
              power: PT(oT.gearIslandPower),
              cost: PT(oT.gearCostPerUse)
            });
          case "barrier":
            return TT("buildAFactory2Game:gearBarrier", {
              shield: Math.round(oT.gearCharge),
              max: oT.gearChargeMax,
              power: PT(oT.gearIslandPower)
            });
          default:
            return null
        }
      }(IT, oT);
      return null === iT ? null : (0, mk.jsx)(ux.e, {
        children: (0, mk.jsx)("div", {
          className: gz()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === oT.gearChargeState || "outOfCharge" === oT.gearChargeState
          }),
          role: "status",
          children: iT
        })
      })
    }
    const Nx = (() => {
      const TT = TT => {
        const oT = TT * Math.PI / 180;
        return `${(40*Math.cos(oT)).toFixed(2)} ${(40*Math.sin(oT)).toFixed(2)}`
      };
      return `M ${TT(160)} A 40 40 0 1 1 ${TT(380)}`
    })();
    class Px {
      constructor(TT) {
        this.onElement = TT, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      Am(TT) {
        let oT = TT.baf2LabelsReset || TT.baf2LabelsIsland !== this.island;
        oT && (this.labels.clear(), this.island = TT.baf2LabelsIsland);
        for (const [IT, iT, zT, kT, WT] of TT.baf2LabelsList) {
          const TT = `${IT},${iT},${zT}`,
            XT = this.labels.get(TT);
          null === kT ? oT = this.labels.delete(TT) || oT : XT && XT.item === kT && (XT.count === WT || XT.count >= 0 && WT >= 0) ? XT.count !== WT && (XT.count = WT, this.writeCount(TT, WT)) : (this.labels.set(TT, {
            key: TT,
            pos: [IT, iT, zT],
            item: kT,
            count: WT
          }), this.writeCount(TT, WT), oT = !0)
        }
        if (this.changes++, oT) {
          this.snapshot = [...this.labels.values()];
          for (const TT of this.listeners) TT()
        }
      }
      bindCount(TT) {
        const oT = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${TT}`;
        let IT = this.countRefs.get(oT);
        return IT || (IT = IT => {
          var iT, zT;
          IT ? (this.countElements.set(oT, IT), this.writeCount(TT, null !== (iT = null === (zT = this.labels.get(TT)) || void 0 === zT ? void 0 : zT.count) && void 0 !== iT ? iT : -1)) : (this.countElements.delete(oT), this.countRefs.delete(oT))
        }, this.countRefs.set(oT, IT)), IT
      }
      setCountWords(TT) {
        this.countWords = TT;
        for (const [oT, IT] of this.labels) this.writePart(`words|${oT}`, TT(IT.count), IT.count)
      }
      writeCount(TT, oT) {
        this.writePart(`bare|${TT}`, Mk(oT), oT), this.countElements.has(`words|${TT}`) && this.writePart(`words|${TT}`, this.countWords(oT), oT)
      }
      writePart(TT, oT, IT) {
        const iT = this.countElements.get(TT);
        if (!iT || IT < 0) return;
        const zT = iT.firstChild;
        zT && 3 === zT.nodeType && !zT.nextSibling ? zT.nodeValue !== oT && (zT.nodeValue = oT) : iT.textContent !== oT && (iT.textContent = oT)
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
        let oT = this.refs.get(TT);
        return oT || (oT = oT => {
          const IT = this.elements.get(TT);
          var iT, zT;
          IT && (null === (iT = this.onElement) || void 0 === iT || iT.call(this, IT, !1));
          oT ? (this.elements.set(TT, oT), null === (zT = this.onElement) || void 0 === zT || zT.call(this, oT, !0)) : (this.elements.delete(TT), this.refs.delete(TT))
        }, this.refs.set(TT, oT)), oT
      }
      onAfterRender(TT, oT, IT, iT) {
        for (const zT of this.snapshot) {
          const kT = this.elements.get(zT.key);
          if (!kT) continue;
          if (iT(zT.key)) {
            (0, NL.d)(kT, !0);
            continue
          }
          const WT = zx(kT, TT, oT, zT.pos, 1.1, 24);
          WT && IT.add(WT, kT, 0, !1)
        }
      }
    }
    const dx = (0, iT.memo)((function(TT) {
        let {
          item: oT
        } = TT;
        return (0, mk.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, mk.jsx)(uz.c, {
            itemName: oT,
            amount: 0
          })
        })
      })),
      Vx = (0, iT.memo)((function(TT) {
        let {
          label: oT,
          bindRef: IT,
          countRef: iT,
          wordsRef: zT
        } = TT;
        return (0, mk.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: IT,
          hidden: !0,
          children: [(0, mk.jsx)(dx, {
            item: oT.item
          }), oT.count >= 0 && (0, mk.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, mk.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: zT
            }), (0, mk.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: iT
            })]
          })]
        })
      })),
      Tc = (0, iT.memo)((function(TT) {
        let {
          store: oT
        } = TT;
        const {
          t: IT
        } = (0, ez.t)(), [zT, kT] = (0, iT.useState)((() => oT.list()));
        return (0, iT.useEffect)((() => (kT(oT.list()), oT.subscribe((() => {
          kT(oT.list())
        })))), [oT]), (0, iT.useEffect)((() => {
          oT.setCountWords((TT => IT("buildAFactory2Game:labelSiloCount", {
            count: Mk(TT)
          })))
        }), [oT, IT]), (0, mk.jsx)("div", {
          className: "Baf2IslandLabels",
          children: zT.map((TT => -2 === TT.count ? null : (0, mk.jsx)(Vx, {
            label: TT,
            bindRef: oT.bind(TT.key),
            countRef: oT.bindCount(TT.key),
            wordsRef: oT.bindCount(TT.key, "words")
          }, TT.key)))
        })
      })),
      oc = {
        read: () => !0,
        write: () => {}
      };

    function Ic(TT) {
      return `${TT[0]},${TT[1]},${TT[2]}`
    }

    function ic(TT) {
      let [oT, IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, LT] = TT;
      const xT = void 0 === DT || void 0 === LT ? function(TT) {
        return [Math.floor((TT - 1) / 2), 0]
      }(kT) : [DT, LT];
      return {
        kind: 0 === BT ? "reactor" : "battery",
        box: OI([oT, IT, iT], zT, kT, WT, XT, xT),
        formed: 1 === FT,
        level: ST
      }
    }
    class zc {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oc;
        this.guideSetting = TT, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = TT.read()
      }
      Am(TT) {
        var oT;
        const IT = new Map;
        for (const iT of TT.baf2RxPlanList) {
          const TT = ic(iT);
          IT.set(Ic(TT.box.ctrl), TT)
        }
        this.plans = IT, this.layouts = new Map((null !== (oT = TT.baf2RxLayouts) && void 0 !== oT ? oT : []).map((TT => {
          let [oT, IT, iT, zT] = TT;
          return [Ic([oT, IT, iT]), zT]
        }))), this.predicted.clear(), TT.baf2RxFormedAt && (this.formed = {
          ctrl: TT.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const iT of [...this.startersOff]) {
          const TT = IT.get(iT);
          TT && !TT.formed || this.startersOff.delete(iT)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((TT => this.planByKey(TT)))
      }
      planAt(TT) {
        return this.planByKey(Ic(TT))
      }
      predictSize(TT, oT) {
        this.predicted.set(Ic(TT), oT), this.changed()
      }
      unpredict(TT) {
        this.predicted.delete(Ic(TT)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(TT) {
        var oT;
        const IT = Ic(TT);
        return this.predicted.has(IT) ? null : null !== (oT = this.layouts.get(IT)) && void 0 !== oT ? oT : null
      }
      showsStarter(TT) {
        return !this.startersOff.has(Ic(TT))
      }
      setStarter(TT, oT) {
        const IT = Ic(TT);
        oT ? this.startersOff.delete(IT) : this.startersOff.add(IT), this.changed()
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
        const oT = this.plans.get(TT);
        if (!oT) return null;
        const IT = this.predicted.get(TT);
        return IT ? {
          ...oT,
          box: nI(oT.box, oT.kind, IT[0], IT[1], IT[2])
        } : oT
      }
      changed() {
        this.version++;
        for (const TT of this.listeners) TT()
      }
    }
    var kc = IT(193);
    const Wc = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Xc(TT, oT, IT, iT) {
      const zT = TT.length / 3;
      for (let kT = 0; kT < Wc.length / 3; kT++) TT.push(Wc[3 * kT] * iT[0] / 2 + IT[0], Wc[3 * kT + 1] * iT[1] / 2 + IT[1], Wc[3 * kT + 2] * iT[2] / 2 + IT[2]);
      for (let kT = zT; kT < zT + 24; kT += 4) oT.push(kT, kT + 1, kT + 2, kT, kT + 2, kT + 3)
    }

    function Bc(TT, oT, IT) {
      const iT = oT[0][0],
        zT = [],
        kT = [];
      for (const [WT, XT] of oT) Xc(zT, kT, [WT[0] - iT[0], WT[1] - iT[1], WT[2] - iT[2]], XT);
      return TT.createGameMesh({
        positions: zT,
        indices: kT
      }, IT, iT)
    }

    function Fc(TT, oT) {
      const IT = TT.w - 2,
        iT = TT.d - 2;
      return 1 === function(TT, oT, IT, iT) {
        const [zT, kT, WT] = TT;
        if (Number(zT <= 2) + Number(kT <= 2) + Number(WT <= 2) >= 2) return function(TT, oT, IT) {
          return (TT + oT + IT) % 2 === 0 ? 1 : 3
        }(oT, IT, iT);
        const [XT, BT] = zT >= kT && zT >= WT ? [IT, iT] : kT >= WT ? [oT, iT] : [oT, IT];
        return XT % 2 === 0 && BT % 2 === 0 ? 1 : 3
      }([IT, TT.h - 2, iT], oT % IT, Math.floor(oT / (IT * iT)), Math.floor(oT / IT) % iT) ? "rod" : "channel"
    }

    function Sc(TT, oT, IT) {
      if ("reactor" !== TT.kind || TT.formed || !oT) return !1;
      const iT = lI(TT.box);
      for (let zT = 0; zT < iT; zT++) {
        const TT = IT(zT);
        if (null !== TT && RI(TT)) return !1
      }
      return !0
    }

    function Dc(TT, oT, IT, iT, zT) {
      var kT;
      let WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const XT = yI(TT.box, oT),
        BT = VI(TT.kind, XT, IT);
      if ("wrong" === BT || "blocked" === BT) return "wrong";
      if (!zT) return null;
      if ("inside" === XT && "reactor" === TT.kind && "Air" === uI(IT)) {
        if (null !== WT) {
          var FT;
          const IT = tD[GD(WT, NI(TT.box, oT))];
          return IT && null !== (FT = mB(IT)) && void 0 !== FT ? FT : null
        }
        if (iT) return Fc(TT.box, NI(TT.box, oT))
      }
      if ("missing" !== BT) return null;
      const ST = Ti(TT.kind, XT);
      return null === ST ? null : null !== (kT = mB(ST)) && void 0 !== kT ? kT : null
    }
    const Lc = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function xc(TT, oT, IT) {
      const iT = IT => {
        const iT = oT(pI(TT.box, IT));
        return null !== iT && function(TT, oT) {
          return "reactor" !== TT.kind || oT !== tI(TT.box) && "inside" !== yI(TT.box, oT)
        }(TT, IT) && "ok" !== VI(TT.kind, yI(TT.box, IT), iT)
      };
      if (IT) {
        const kT = bI(TT.box, [Math.floor(IT[0]), Math.floor(IT[1]), Math.floor(IT[2])]);
        if (kT >= 0 && (iT(kT) || (zT = kT, "reactor" === TT.kind && "inside" === yI(TT.box, zT) && "Air" === oT(pI(TT.box, zT))))) return kT
      }
      var zT;
      const kT = lI(TT.box);
      for (let WT = 0; WT < kT; WT++)
        if (iT(WT)) return WT;
      return -1
    }

    function cc(TT, oT) {
      return Math.floor(oT / (TT.w * TT.d))
    }

    function Kc(TT, oT, IT) {
      return IT >= 0 && cc(TT, oT) > cc(TT, IT)
    }

    function Mc(TT, oT) {
      return oT >= 0 && TT.h >= 3 && cc(TT, oT) === TT.h - 1
    }

    function rc(TT) {
      const oT = uI(TT);
      return oT === xI || "Collider" === oT || "Laser" === oT || oT.startsWith("_Collider ")
    }

    function Ac(TT, oT, IT, iT) {
      if (iT(TT)) return null;
      if (!Lc.every((oT => {
          let [iT, zT, kT] = oT;
          const WT = IT([TT[0] + iT, TT[1] + zT, TT[2] + kT]);
          return null !== WT && !UI("reactor", WT) && "reactor" !== vI(WT)
        }))) return null;
      const zT = aI("reactor").min,
        kT = OI([TT[0], TT[1], TT[2]], function(TT, oT) {
          const IT = oT[0] - (TT[0] + .5),
            iT = oT[2] - (TT[2] + .5);
          return Math.abs(IT) >= Math.abs(iT) ? IT >= 0 ? 2 : 4 : iT >= 0 ? 1 : 3
        }(TT, oT), zT, zT, zT, HI("reactor", zT)),
        WT = tI(kT);
      let XT = !0;
      for (let BT = 0; BT < lI(kT) && XT; BT++) {
        if (BT === WT) continue;
        const TT = pI(kT, BT),
          oT = IT(TT);
        XT = !iT(TT) && (null === oT || !rc(oT))
      }
      return {
        box: kT,
        fits: XT
      }
    }
    const gc = wB,
      hc = "baf2Goal",
      wc = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      mc = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      ec = .4;

    function Rc(TT, oT) {
      let [IT, iT, zT] = TT;
      const kT = CB([IT - .02, iT - .02, zT - .02], [IT + 1.02, iT + 1.02, zT + 1.02], .07);
      return oT && (kT.push([
        [IT + .5, iT + 1 + .7, zT + .5],
        [.08, 1.4, .08]
      ]), kT.push([
        [IT + .5, iT + 1 + 1.4 + .2, zT + .5],
        [ec, ec, ec]
      ])), kT
    }

    function uc(TT, oT) {
      let [IT, iT, zT] = oT;
      return TT.isBlockInLoadedChunk(IT, iT, zT) ? TT.blockIdToBlockName(TT.getBlockId(IT, iT, zT)) : null
    }
    let vc = null;
    const Ec = new Set;
    let fc = null;

    function Cc(TT) {
      vc = TT;
      for (const oT of Ec) oT(TT)
    }
    class jc {
      constructor(TT) {
        var oT;
        this.plans = TT, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (oT = TT => {
          var oT, IT;
          this.setGoal(null !== (oT = null === TT || void 0 === TT ? void 0 : TT.goal) && void 0 !== oT ? oT : null, null !== (IT = null === TT || void 0 === TT ? void 0 : TT.startsBattery) && void 0 !== IT && IT)
        }, fc ??= [Cz.h.subscribe("setDirectionArrow", (TT => {
          let {
            id: oT,
            position: IT,
            text: iT
          } = TT;
          oT === hc && Cc({
            goal: [Math.floor(IT[0]), Math.floor(IT[1]), Math.floor(IT[2])],
            startsBattery: JSON.stringify(null !== iT && void 0 !== iT ? iT : null).includes("arrowStartBattery")
          })
        })), Cz.h.subscribe("clearDirectionArrow", (TT => {
          let {
            id: oT
          } = TT;
          null !== oT && oT !== hc || Cc(null)
        }))], Ec.add(oT), oT(vc), () => {
          Ec.delete(oT)
        })
      }
      onAfterRender(TT, oT) {
        const IT = performance.now();
        if (this.cues.length > 0) {
          const oT = .55 + .45 * Math.sin(IT / 1100 * Math.PI * 2);
          for (const IT of this.cues) TT.setGameMesh(IT, {
            visibility: oT
          })
        }
        if (IT - this.lastCheckMs < 150) return;
        this.lastCheckMs = IT;
        const iT = this.plans.all().filter((TT => {
            const [IT, iT, zT] = TT.box.ctrl;
            return (!TT.formed || null !== this.plans.layoutOf(TT.box.ctrl)) && (IT - oT[0]) ** 2 + (iT - oT[1]) ** 2 + (zT - oT[2]) ** 2 <= 2304
          })),
          zT = function(TT, oT) {
            const IT = kc.c.Yc,
              iT = new Map;
            for (const kT of oT) {
              const oT = pI(kT.box, 0),
                WT = pI(kT.box, lI(kT.box) - 1),
                XT = [Math.min(oT[0], WT[0]), Math.min(oT[1], WT[1]), Math.min(oT[2], WT[2])].map((TT => Math.floor(TT / IT))),
                BT = [Math.max(oT[0], WT[0]), Math.max(oT[1], WT[1]), Math.max(oT[2], WT[2])].map((TT => Math.floor(TT / IT)));
              for (let IT = XT[0]; IT <= BT[0]; IT++)
                for (let oT = XT[1]; oT <= BT[1]; oT++)
                  for (let kT = XT[2]; kT <= BT[2]; kT++) {
                    var zT;
                    iT.set(`${IT},${oT},${kT}`, null !== (zT = TT.getChunkVersion(IT, oT, kT)) && void 0 !== zT ? zT : -1)
                  }
            }
            return iT
          }(TT, iT);
        this.plans.getVersion() === this.storeVersion && (function(TT, oT) {
          if (TT.size !== oT.size) return !1;
          for (const [IT, iT] of TT)
            if (oT.get(IT) !== iT) return !1;
          return !0
        }(zT, this.chunkVersions) || IT - this.lastRescanMs < 600) || (this.lastRescanMs = IT, this.storeVersion = this.plans.getVersion(), this.chunkVersions = zT, this.redraw(TT, iT))
      }
      dispose(TT) {
        this.unwatch(), vc = null, this.clearMeshes(TT), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(TT, oT) {
        var IT;
        (null === TT || void 0 === TT ? void 0 : TT.join()) === (null === (IT = this.goal) || void 0 === IT ? void 0 : IT.join()) && oT === this.startsBattery || (this.goal = TT, this.startsBattery = oT, this.storeVersion = -1)
      }
      redraw(TT, oT) {
        const IT = oT => uc(TT, oT),
          iT = new Map,
          zT = [],
          kT = this.plans.guideOn();
        for (const FT of oT) {
          const TT = kT && Sc(FT, this.plans.showsStarter(FT.box.ctrl), (TT => IT(pI(FT.box, TT)))),
            oT = "reactor" === FT.kind ? this.plans.layoutOf(FT.box.ctrl) : null,
            WT = kT && !FT.formed ? xc(FT, IT, this.goal) : -1;
          WT >= 0 && zT.push([pI(FT.box, WT), Mc(FT.box, WT)]);
          const XT = lI(FT.box);
          for (let zT = 0; zT < XT; zT++) {
            const XT = pI(FT.box, zT),
              BT = IT(XT),
              ST = null === BT ? null : Dc(FT, zT, BT, TT, kT, oT);
            if (null !== ST) {
              const TT = "wrong" !== ST && Kc(FT.box, zT, WT),
                oT = TT ? `${ST}Dim` : ST;
              let IT = iT.get(oT);
              IT || (IT = {
                draw: {
                  ghost: ST,
                  dim: TT
                },
                list: []
              }, iT.set(oT, IT)), IT.list.push(XT)
            }
          }
        }
        if (kT && this.startsBattery && this.goal) {
          const [TT, oT, zT] = this.goal, kT = [];
          for (const [iT, WT, XT] of wc) {
            const BT = [TT + iT, oT + WT, zT + XT];
            "Air" === IT(BT) && kT.push(BT)
          }
          if (kT.length > 0) {
            var WT;
            const TT = null !== (WT = iT.get("cell")) && void 0 !== WT ? WT : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            TT.list.push(...kT), iT.set("cell", TT)
          }
        }
        const XT = [...iT.keys()].sort(),
          BT = [...XT.map((TT => `${TT}:${iT.get(TT).list.join(";")}`)), `cue:${zT.join(";")}`].join("|");
        if (BT !== this.shownKey) {
          this.shownKey = BT, this.clearMeshes(TT);
          for (const oT of XT) {
            const {
              draw: IT,
              list: zT
            } = iT.get(oT);
            this.meshes.push(this.build(TT, IT, zT))
          }
          for (const [oT, IT] of zT) this.cues.push(Bc(TT, Rc(oT, IT), mc))
        }
      }
      build(TT, oT, IT) {
        let {
          ghost: iT,
          dim: zT
        } = oT;
        const {
          size: kT,
          colour: WT,
          alpha: XT
        } = gc[iT], BT = IT[0], FT = [], ST = [];
        for (const [DT, LT, xT] of IT) Xc(FT, ST, [DT - BT[0] + .5, LT - BT[1] + .5, xT - BT[2] + .5], [kT, kT, kT]);
        return TT.createGameMesh({
          positions: FT,
          indices: ST
        }, {
          rgb: WT,
          alpha: XT * (zT ? .3 : 1)
        }, BT)
      }
      clearMeshes(TT) {
        for (const oT of [...this.meshes, ...this.cues]) TT.disposeGameMesh(oT);
        this.meshes = [], this.cues = []
      }
    }
    const Jc = [.56, .83, 1],
      Uc = [1, .3, .25];
    class ac {
      constructor(TT) {
        this.plans = TT, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(TT, oT, IT) {
        var iT;
        const zT = performance.now();
        if (zT - this.lastCheckMs < 150) return;
        this.lastCheckMs = zT;
        const kT = oT => uc(TT, oT),
          WT = null === (iT = TT.eoT(oT)) || void 0 === iT ? void 0 : iT.name,
          XT = WT && "Reactor Frame" === uI(WT) ? TT.getTargetedBlock() : null,
          BT = XT ? [XT.wc[0], XT.wc[1], XT.wc[2]] : null,
          FT = null !== BT && "Air" === kT(BT) && BT.every(((TT, oT) => Math.abs(TT + .5 - IT[oT]) <= 8)) ? Ac(BT, IT, kT, (TT => this.inPlan(TT))) : null,
          ST = FT ? `${FT.box.ctrl.join()}|${FT.box.rot}|${FT.fits}` : "";
        ST !== this.shownKey && this.show(TT, ST, FT)
      }
      dispose(TT) {
        this.clear(TT), this.shownKey = ""
      }
      inPlan(TT) {
        return this.plans.all().some((oT => bI(oT.box, TT) >= 0))
      }
      show(TT, oT, IT) {
        if (this.clear(TT), this.shownKey = oT, !IT) return;
        const {
          box: iT,
          fits: zT
        } = IT, kT = zT ? Jc : Uc, {
          lo: WT,
          hi: XT
        } = fB(iT);
        this.meshes.push(Bc(TT, CB(WT, XT, .05), {
          rgb: kT,
          alpha: 1
        }));
        const BT = [],
          FT = pI(iT, 0)[1];
        for (let ST = 0; ST < iT.w * iT.d; ST++) {
          const [TT, , oT] = pI(iT, ST);
          BT.push([
            [TT + .5, FT + .02 + .01, oT + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(Bc(TT, BT, {
          rgb: kT,
          alpha: .25
        }))
      }
      clear(TT) {
        for (const oT of this.meshes) TT.disposeGameMesh(oT);
        this.meshes = []
      }
    }
    const Yc = "buildAFactory2Game:";

    function Qc(TT, oT, IT) {
      const iT = TT => {
          const [IT, iT, zT] = TT.box.ctrl;
          return IT === oT[0] && iT === oT[1] && zT === oT[2]
        },
        zT = TT.find((TT => iT(TT) || bI(TT.box, oT) >= 0));
      if (!zT) return null;
      const kT = function(TT, oT, IT) {
        const {
          w: iT,
          h: zT,
          d: kT
        } = TT.box, WT = "reactor" === TT.kind ? `${Yc}rxTitle` : `${Yc}batTitle`;
        if (TT.formed) return {
          key: `${Yc}lookPlanFormed`,
          kindKey: WT,
          w: iT,
          h: zT,
          d: kT,
          count: 0
        };
        let XT = 0,
          BT = 0;
        for (let ST = 0; ST < lI(TT.box); ST++) {
          const oT = IT(pI(TT.box, ST)),
            iT = null === oT ? "ok" : VI(TT.kind, yI(TT.box, ST), oT);
          XT += "missing" === iT ? 1 : 0, BT += "wrong" === iT || "blocked" === iT ? 1 : 0
        }
        const FT = function(TT, oT, IT) {
          if (oT < 0 || null === IT) return;
          const iT = yI(TT.box, oT),
            zT = VI(TT.kind, iT, IT);
          return "blocked" === zT ? `${Yc}lookWhy_blocked` : "wrong" === zT ? "ctrl" === iT ? `${Yc}lookWhy_ctrl` : `${Yc}lookWhy_reactor_${iT}` : void 0
        }(TT, bI(TT.box, oT), IT([oT[0], oT[1], oT[2]]));
        if (XT > 0) return {
          key: `${Yc}lookPlanToBuild`,
          kindKey: WT,
          w: iT,
          h: zT,
          d: kT,
          count: XT,
          why: FT
        };
        if (BT > 0) return {
          key: `${Yc}lookPlanTakeOut`,
          kindKey: WT,
          w: iT,
          h: zT,
          d: kT,
          count: BT,
          why: FT
        };
        return {
          key: "reactor" === TT.kind ? `${Yc}lookPlanNoRods` : `${Yc}lookPlanDone`,
          kindKey: WT,
          w: iT,
          h: zT,
          d: kT,
          count: 0
        }
      }(zT, oT, IT);
      return "reactor" === zT.kind && iT(zT) ? {
        ...kT,
        ctrl: !0
      } : kT
    }

    function Oc(TT, oT) {
      return TT === oT || null !== TT && null !== oT && TT.key === oT.key && TT.kindKey === oT.kindKey && TT.w === oT.w && TT.h === oT.h && TT.d === oT.d && TT.count === oT.count && TT.why === oT.why && TT.ctrl === oT.ctrl
    }

    function Hc() {
      return performance.now()
    }
    class nc {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Hc;
        this.ticket = TT, this.sent = oT, this.backstopMs = IT, this.now = iT, this.queuedAt = void 0, this.queuedAt = iT()
      }
      answered() {
        const TT = this.now(),
          oT = this.sent.leftAt(this.ticket);
        return null !== oT && TT - oT > 4e3 || TT - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class qc {
      constructor() {
        this.echoes = []
      }
      add(TT) {
        this.echoes = this.echoes.filter((TT => !TT.answered())), this.echoes.push(TT)
      }
      answered() {
        var TT, oT;
        return null === (TT = null === (oT = this.echoes.at(-1)) || void 0 === oT ? void 0 : oT.answered()) || void 0 === TT || TT
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((TT => TT.answered()))
      }
      age() {
        var TT, oT;
        return null !== (TT = null === (oT = this.echoes.at(-1)) || void 0 === oT ? void 0 : oT.age()) && void 0 !== TT ? TT : null
      }
      clear() {
        this.echoes = []
      }
    }
    class Zc {
      constructor(TT) {
        this.send = TT, this.value = null, this.sent = null, this.echoes = new qc, this.down = !1, this.timer = null
      }
      shown(TT) {
        return null === this.value ? TT : this.down || this.value !== this.sent ? this.value : TT === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), TT) : this.value
      }
      pendingFor(TT) {
        return null !== this.value && this.value === this.sent && TT !== this.value ? this.echoes.age() : null
      }
      assume(TT, oT) {
        this.disarm(), this.down = !1, this.value = TT, this.sent = TT, this.echoes.clear(), this.echoes.add(oT)
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
    class lc {
      constructor() {
        this.pending = new Map
      }
      set(TT, oT, IT) {
        var iT;
        const zT = null !== (iT = this.pending.get(TT)) && void 0 !== iT ? iT : {
          on: oT,
          echoes: new qc
        };
        zT.on = oT, zT.echoes.add(IT), this.pending.set(TT, zT)
      }
      shown(TT) {
        let oT = TT;
        for (const [IT, {
            on: iT,
            echoes: zT
          }] of this.pending) 0 !== (TT & IT) === iT && zT.agreeCounts() || zT.answered() ? this.pending.delete(IT) : oT = iT ? oT | IT : oT & ~IT;
        return oT
      }
      pendingMask() {
        let TT = 0;
        for (const oT of this.pending.keys()) TT |= oT;
        return TT
      }
      pendingFor(TT) {
        let oT = null;
        for (const [iT, {
            on: zT,
            echoes: kT
          }] of this.pending) {
          if (void 0 !== TT && 0 !== (TT & iT) === zT) continue;
          const WT = kT.age();
          var IT;
          if (null !== WT) oT = Math.max(null !== (IT = oT) && void 0 !== IT ? IT : 0, WT)
        }
        return oT
      }
      clear() {
        this.pending.clear()
      }
    }
    class sc {
      constructor() {
        this.dims = null, this.echoes = new qc, this.unmet = null
      }
      shown(TT) {
        var oT;
        return this.dims && (tc(this.dims, TT) && this.echoes.agreeCounts() || this.echoes.answered()) && (tc(this.dims, TT) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (oT = this.dims) && void 0 !== oT ? oT : TT
      }
      takeUnmet() {
        const TT = this.unmet;
        return this.unmet = null, TT
      }
      set(TT, oT) {
        this.dims = TT, this.echoes.add(oT)
      }
      pendingFor(TT) {
        return null === this.dims || TT && tc(this.dims, TT) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function tc(TT, oT) {
      return TT[0] === oT[0] && TT[1] === oT[1] && TT[2] === oT[2]
    }
    class Gc {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hc;
        this.now = TT, this.taps = new Map
      }
      tap(TT, oT, IT) {
        return !this.busy(TT) && (this.taps.set(TT, {
          at: this.now(),
          done: oT
        }), IT(), !0)
      }
      settle(TT) {
        for (const [oT, IT] of [...this.taps]) IT.done(TT) && this.taps.delete(oT)
      }
      busy(TT) {
        const oT = this.taps.get(TT);
        return !!oT && (!(this.now() - oT.at >= 3e3) || (this.taps.delete(TT), !1))
      }
      busyIds() {
        const TT = new Set;
        for (const oT of [...this.taps.keys()]) this.busy(oT) && TT.add(oT);
        return TT
      }
      clear() {
        this.taps.clear()
      }
    }

    function pc(TT) {
      return {
        send: oT => TT.track(oT),
        sendUrgent: (oT, IT) => TT.track(oT, {
          urgent: !0,
          supersedes: IT
        }),
        leftAt: oT => TT.leftAt(oT),
        holdReserve: () => TT.holdUrgentReserve(),
        answerMs: jW
      }
    }

    function bc() {
      return performance.now()
    }

    function yc(TT) {
      const oT = TT.baf2RxNeed.map((TT => {
        let [oT, IT] = TT;
        return [oT, IT]
      }));
      return JSON.stringify([TT.baf2RxFormed, oT, TT.baf2RxBad, TT.baf2RxCells])
    }

    function Nc(TT, oT) {
      const IT = 0 !== (oT & ko),
        iT = 0 !== (TT.baf2RxFlags & ko);
      return !IT || iT || "running" !== TT.baf2RxState && "idle" !== TT.baf2RxState ? !IT && iT && "scram" === TT.baf2RxState && TT.baf2RxFuel > 0 ? "idle" : TT.baf2RxState : "scram"
    }

    function Pc(TT) {
      return JSON.stringify([TT.baf2BatFormed, TT.baf2BatNeed, TT.baf2BatBad])
    }

    function dc(TT) {
      return TT.join(",")
    }
    class Vc {
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
    class TK {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(TT, oT) {
        this.lastAt = TT, this.lastUntil = TT + oT
      }
      answered(TT) {
        return this.lastAt >= TT || TT < this.lastUntil
      }
    }
    class oK {
      constructor(TT, oT) {
        this.link = TT, this.now = oT, this.hold = new sc, this.picked = null, this.notTaken = null
      }
      shown(TT) {
        const oT = this.hold.shown(TT);
        if (this.hold.takeUnmet() && this.picked) {
          var IT;
          const {
            plans: oT,
            ctrl: iT,
            at: zT
          } = this.picked;
          this.picked = null, oT.unpredict(iT), null === (IT = this.notTaken) || void 0 === IT || IT.call(this, TT, zT)
        }
        return oT
      }
      pendingFor(TT) {
        return this.hold.pendingFor(TT)
      }
      PL(TT, oT, IT) {
        TT.predictSize(oT, IT), this.picked = {
          plans: TT,
          ctrl: oT,
          at: this.now()
        };
        const iT = this.link.send(zo(oT, "plan", ...IT));
        this.hold.set(IT, new nc(iT, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class IK {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bc;
        this.plans = TT, this.readInterior = oT, this.link = IT, this.now = iT, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new lc, this.throttle = void 0, this.oneShots = void 0, this.listeners = new Vc, this.redraw = null, this.releaseReserve = null, this.size = new oK(IT, iT), this.oneShots = new Gc(iT), this.throttle = new Zc((TT => this.echo(this.link.send(this.command("throttle", TT)))))
      }
      set(TT) {
        !TT.baf2RxOpen && this.raw && dc(this.raw.baf2RxAt) === dc(TT.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(TT), this.XM(TT)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(TT) {
        this.size.notTaken = TT
      }
      resize(TT) {
        this.raw && (this.size.PL(this.plans, this.raw.baf2RxAt, TT), this.XM(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const TT = this.raw.baf2RxAt;
        this.plans.setStarter(TT, !this.plans.showsStarter(TT)), this.XM(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.XM(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.XM(this.raw)
      }
      send(TT) {
        if (this.raw) {
          for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
          this.link.send(this.command(TT, ...IT))
        }
      }
      tap(TT, oT) {
        this.raw && this.oneShots.tap(TT, function(TT, oT) {
          if ("start" === TT) return TT => 0 === (TT.baf2RxFlags & ko);
          if ("odConfirm" === TT) return TT => 0 !== (TT.baf2RxFlags & Wo);
          const IT = yc(oT);
          return TT => yc(TT) !== IT
        }(TT, this.raw), oT) && ("start" === TT && (this.startedAt = this.now()), this.XM(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(ko, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(TT, oT) {
        if (!this.raw) return;
        const IT = TT === ko ? this.command(oT ? "scram" : "start") : this.command("od", oT ? 1 : 0),
          iT = oT && TT === ko,
          zT = `${io} ${this.raw.baf2RxAt.join(" ")} `,
          kT = this.echo(iT ? this.link.sendUrgent(IT, (TT => {
            const oT = TT.startsWith(zT) ? TT.slice(zT.length).split(" ")[0] : null;
            return "throttle" === oT || "start" === oT
          })) : this.link.send(IT));
        this.flags.set(TT, oT, kT), iT && this.throttle.assume(0, kT), this.XM(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(TT) {
        this.throttle.drag(TT), this.raw && this.XM(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.XM(this.raw)
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
        for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
        return zo(this.raw.baf2RxAt, TT, ...IT)
      }
      echo(TT) {
        return new nc(TT, this.link, this.link.answerMs, this.now)
      }
      XM(TT) {
        var oT;
        this.raw = TT;
        const IT = this.flags.shown(TT.baf2RxFlags),
          iT = {
            ...TT,
            baf2RxFlags: IT,
            baf2RxTarget: this.throttle.shown(TT.baf2RxTarget),
            baf2RxState: Nc(TT, IT)
          },
          zT = this.size.shown(iT.baf2RxDims),
          kT = this.throttle.pendingFor(),
          WT = [this.throttle.pendingFor(TT.baf2RxTarget), this.flags.pendingFor(TT.baf2RxFlags), this.size.pendingFor(TT.baf2RxDims)].filter((TT => null !== TT)),
          XT = WT.length > 0 ? Math.max(...WT) : null,
          BT = this.oneShots.busyIds(),
          FT = iT.baf2RxAt;
        let ST, DT, LT = null,
          xT = [Math.max(0, zT[0] - 2), Math.max(0, zT[1] - 2), Math.max(0, zT[2] - 2)];
        if (iT.baf2RxFormed) {
          const [TT, oT, IT] = iT.baf2RxDims;
          xT = [Math.max(0, TT - 2), Math.max(0, oT - 2), Math.max(0, IT - 2)], ST = Array.from(iT.baf2RxCells, Number), DT = `${xT.join(",")}:${iT.baf2RxCells}`
        } else {
          var cT;
          const TT = null === (cT = this.plans.planAt(FT)) || void 0 === cT ? void 0 : cT.box,
            oT = TT ? nI(TT, "reactor", ...zT) : OI(FT, 1, ...zT, HI("reactor", zT[0])),
            IT = this.readInterior(oT);
          LT = PX(xT, IT), ST = IT, DT = `${xT.join(",")}:${IT.join("")}`
        }(null === (oT = this.looksOf) || void 0 === oT ? void 0 : oT.key) !== DT && (this.looksOf = {
          key: DT,
          looks: iB(xT, ST)
        }), this.view = {
          status: iT,
          dims: zT,
          plan: LT,
          inner: xT,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(FT),
          odConfirmed: this.odConfirmed || 0 !== (iT.baf2RxFlags & Lo),
          guide: this.plans.guideOn(),
          throttlePending: null !== kT,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== XT && XT >= 5e3,
          busy: BT,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== XT || BT.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.XM(this.raw)
        }), 250))
      }
    }
    class iK {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bc;
        this.plans = TT, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new Vc, this.redraw = null, this.size = new oK(oT, IT), this.oneShots = new Gc(IT)
      }
      set(TT) {
        !TT.baf2BatOpen && this.view && dc(this.view.status.baf2BatAt) === dc(TT.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(TT), this.XM(TT)
      }
      tap(TT, oT) {
        if (!this.view) return;
        const IT = Pc(this.view.status);
        this.oneShots.tap(TT, (TT => Pc(TT) !== IT), oT) && this.XM(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(TT) {
        this.size.notTaken = TT
      }
      resize(TT) {
        this.view && (this.size.PL(this.plans, this.view.status.baf2BatAt, TT), this.XM(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.XM(this.view.status)
      }
      subscribe(TT) {
        return this.listeners.subscribe(TT)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      XM(TT) {
        const oT = this.size.shown(TT.baf2BatDims),
          IT = this.oneShots.busyIds();
        this.view = {
          status: TT,
          dims: oT,
          fD: rB(oT, TT.baf2BatDims) ? TT.baf2BatCapacity : WB(...oT),
          guide: this.plans.guideOn(),
          busy: IT
        }, this.listeners.notify(), IT.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.XM(this.view.status)
        }), 250))
      }
    }
    const zK = "buildAFactory2Game:";

    function kK() {
      var TT;
      const oT = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!oT) return null;
      const IT = oT.querySelector(".ExitButton");
      return function(TT, oT) {
        const IT = oT ? oT.left - 8 : TT.right;
        return {
          left: TT.left,
          top: TT.top,
          width: Math.max(0, IT - TT.left),
          height: TT.height
        }
      }(oT.getBoundingClientRect(), null !== (TT = null === IT || void 0 === IT ? void 0 : IT.getBoundingClientRect()) && void 0 !== TT ? TT : null)
    }
    const WK = (0, iT.memo)((function(TT) {
      let {
        store: oT
      } = TT;
      const {
        t: IT
      } = (0, ez.t)(), [zT, kT] = (0, iT.useState)((() => oT.get())), [WT, XT] = (0, iT.useState)((() => performance.now()));
      (0, iT.useEffect)((() => (kT(oT.get()), oT.subscribe((() => {
        kT(oT.get()), XT(performance.now())
      })))), [oT]);
      const {
        alarm: BT,
        boomAt: FT
      } = zT, ST = null !== BT && null !== BT.secs, [DT, LT] = (0, iT.useState)(null);
      (0, iT.useEffect)((() => {
        if (!ST) return;
        LT(kK());
        const TT = setInterval((() => {
          XT(performance.now()), LT(kK())
        }), 250);
        return () => {
          clearInterval(TT)
        }
      }), [ST]);
      const [xT, cT] = (0, iT.useState)(!1);
      return (0, iT.useEffect)((() => {
        if (FT === -1 / 0) return;
        cT(!0);
        const TT = setTimeout((() => {
          cT(!1)
        }), 1300);
        return () => {
          clearTimeout(TT)
        }
      }), [FT]), (0, mk.jsxs)(mk.Fragment, {
        children: [null !== BT && (0, mk.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: IT(BT.hot ? `${zK}rxAlarmSiren` : `${zK}rxAlarmDamaged`, {
            amount: String(BT.damage)
          })
        }), null !== BT && null !== BT.secs && (0, mk.jsx)("div", {
          className: DT ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== DT && void 0 !== DT ? DT : void 0,
          "aria-live": "assertive",
          children: IT(`${zK}rxAlarmCountdown`, {
            amount: String((KT = BT.secs, MT = WT - BT.receivedAt, Math.max(1, Math.ceil(KT - MT / 1e3))))
          })
        }), xT && (0, mk.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var KT, MT
    }));
    class XK {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      Am(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const IT = TT.baf2RxAlarmAt.join(",");
        let iT = this.snapshot.boomAt;
        if (TT.baf2RxAlarmBoom) this.byReactor.delete(IT), iT = oT;
        else if (TT.baf2RxAlarmDamage <= 0) this.byReactor.delete(IT);
        else {
          var zT;
          this.byReactor.set(IT, {
            damage: TT.baf2RxAlarmDamage,
            secs: null !== (zT = TT.baf2RxAlarmSecs) && void 0 !== zT ? zT : null,
            hot: !0 === TT.baf2RxAlarmHot,
            receivedAt: oT
          })
        }
        this.XM(iT)
      }
      retain(TT) {
        let oT = !1;
        for (const IT of [...this.byReactor.keys()]) TT.has(IT) || (this.byReactor.delete(IT), oT = !0);
        oT && this.XM(this.snapshot.boomAt)
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
      XM(TT) {
        let oT = null;
        for (const IT of this.byReactor.values())(!oT || IT.damage > oT.damage) && (oT = IT);
        this.snapshot = {
          alarm: oT,
          boomAt: TT
        };
        for (const IT of this.listeners) IT()
      }
    }
    const BK = {
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

    function FK(TT) {
      return [TT[0], TT[1], TT[2]]
    }

    function SK(TT) {
      return `${TT[0]},${TT[1]},${TT[2]}`
    }
    class DK {
      constructor(TT) {
        if (this.plans = TT, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var TT;
            return {
              active: this.glows.flatMap((TT => {
                let {
                  record: oT
                } = TT;
                return oT ? [oT] : []
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
      check(TT, oT, IT) {
        const iT = new Set(oT.map((TT => SK(TT.box.ctrl))));
        for (const WT of function(TT, oT) {
            const IT = [],
              iT = new Map(TT);
            TT.clear();
            for (const zT of oT) {
              const oT = Ic(zT.box.ctrl),
                kT = zT.formed ? zT.level : 0;
              TT.set(oT, kT), kT > 0 && 0 === iT.get(oT) && IT.push(zT)
            }
            return IT
          }(this.levels, this.plans.all())) iT.has(SK(WT.box.ctrl)) && this.show(TT, WT, "on", IT);
        const zT = this.plans.lastFormed();
        if (null === zT || zT.receivedAt <= this.flashedAt) return null;
        this.flashedAt = zT.receivedAt;
        const kT = function(TT, oT) {
          var IT;
          const iT = Ic(TT);
          return null !== (IT = oT.find((TT => Ic(TT.box.ctrl) === iT))) && void 0 !== IT ? IT : null
        }(zT.ctrl, oT);
        return kT && this.show(TT, kT, "formed", IT), kT
      }
      fade(TT, oT) {
        0 !== this.glows.length && (this.glows = this.glows.filter((IT => {
          let {
            mesh: iT,
            glow: zT,
            startMs: kT,
            record: WT
          } = IT;
          const XT = (oT - kT) / BK[zT].ms;
          return XT >= 1 ? (TT.disposeGameMesh(iT), WT && (WT.endMs = oT), !1) : (TT.setGameMesh(iT, {
            visibility: "formed" === zT ? 1 - XT : Math.sin(Math.PI * XT)
          }), !0)
        })))
      }
      dispose(TT) {
        for (const {
            mesh: IT
          }
          of this.glows) TT.disposeGameMesh(IT);
        this.glows = [], this.levels.clear();
        const oT = "undefined" !== typeof window ? window : null;
        (null === oT || void 0 === oT ? void 0 : oT.baf2Glows) === this.devAccessor && delete oT.baf2Glows
      }
      show(TT, oT, IT, iT) {
        const {
          lo: zT,
          hi: kT
        } = fB(oT.box);
        let WT = null;
        this.devLog && (WT = {
          glow: IT,
          ctrl: FK(oT.box.ctrl),
          lo: FK(zT),
          hi: FK(kT),
          startMs: iT,
          endMs: null
        }, this.devLog.push(WT), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(TT, IT, CB(zT, kT, BK[IT].thick)),
          glow: IT,
          startMs: iT,
          record: WT
        })
      }
      build(TT, oT, IT) {
        const iT = Bc(TT, IT, {
          rgb: BK[oT].colour,
          alpha: 1
        });
        return TT.setGameMesh(iT, {
          visibility: 0
        }), iT
      }
    }
    const LK = 1 / .6,
      xK = {
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
        blendMode: JX.h.Standard,
        soft: !0
      },
      cK = {
        ...xK,
        size: [.25, .4],
        count: 2
      };

    function KK(TT) {
      return {
        colours: [TT, TT],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: JX.h.Add,
        soft: !1
      }
    }
    const MK = KK([150, 225, 255]),
      rK = KK([185, 145, 255]),
      AK = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function gK(TT) {
      const oT = vo[TT];
      return null === oT.fuelSlot || Vo(oT) ? AK.includes(TT) ? rK : MK : xK
    }
    const hK = {
        kind: "smokePuff"
      },
      wK = [.2, .025, .2];

    function mK(TT, oT) {
      const [
        [IT, iT, zT],
        [kT, WT, XT]
      ] = TT.colours;
      return {
        texture: TT.soft ? hK : "square_particle",
        fD: oT,
        minLifeTime: TT.life[0] / LK,
        maxLifeTime: TT.life[1] / LK,
        minEmitPower: TT.power[0] * LK,
        maxEmitPower: TT.power[1] * LK,
        minSize: TT.size[0],
        maxSize: TT.size[1],
        emitRate: 0,
        gravity: [0, TT.lift * LK * LK, 0],
        dir1: [-TT.spread, 1, -TT.spread],
        dir2: [TT.spread, 1, TT.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [IT, iT, zT, TT.alpha],
          maxColor: [kT, WT, XT, TT.alpha]
        }, {
          timeFraction: 1,
          minColor: [IT, iT, zT, 0],
          maxColor: [kT, WT, XT, 0]
        }],
        blendMode: TT.blendMode
      }
    }
    class eK {
      constructor(TT) {
        this.fixed = TT, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(TT, oT, IT) {
        var iT;
        if (IT === this.lastFrame) return !1;
        this.lastFrame = IT;
        const zT = this.at;
        zT[0] = oT[0] + .5, zT[1] = oT[1] + 1.025, zT[2] = oT[2] + .5;
        const kT = null !== (iT = this.fixed) && void 0 !== iT ? iT : XT() ? cK : xK;
        let WT = this.particles.get(kT);
        return WT || (WT = TT.createParticles(function(TT) {
          return mK(TT, Math.ceil(12 * TT.count * TT.life[1]) + TT.count)
        }(kT), {
          pos: zT,
          half: wK
        }), this.particles.set(kT, WT)), WT.moveTo(zT), WT.emit(kT.count), !0
      }
      dispose() {
        for (const TT of this.particles.values()) TT.stop();
        this.particles.clear()
      }
    }
    class RK {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(TT) {
        this.indexed = !0;
        for (const oT of ho) {
          const IT = gK(oT);
          for (let iT = 1; iT <= 4; iT++) {
            const zT = TT.blockNameToBlockId(`${oT}|meta|rot${iT}|Running`, !0);
            if (null === zT) continue;
            let kT = this.pufferIndexByStyle.get(IT);
            void 0 === kT && (kT = this.pufferList.push(new eK(IT === xK ? null : IT)) - 1, this.pufferIndexByStyle.set(IT, kT)), this.pufferIndexById[zT] = kT + 1
          }
        }
      }
      onAfterRender(TT, oT) {
        this.indexed || this.index(TT);
        const IT = performance.now(),
          iT = 0 === this.lastMs ? 0 : Math.min(IT - this.lastMs, 250) / 1e3;
        this.lastMs = IT, this.frame++, TT.particlesEnabled() ? (this.scan(TT, oT), this.puff(TT, iT)) : this.sources = []
      }
      dispose() {
        for (const TT of this.pufferList) TT.dispose();
        this.sources = [], this.found = []
      }
      scan(TT, oT) {
        0 === this.scanRow && (this.origin = [Math.floor(oT[0]) - 12, Math.floor(oT[1]) - 6, Math.floor(oT[2]) - 12]);
        const IT = Math.min(this.scanRow + 16, 325),
          [iT, zT, kT] = this.origin,
          WT = this.hits;
        WT.length = 0;
        for (let XT = this.scanRow; XT < IT; XT++) {
          const oT = iT + XT % 25,
            IT = zT + Math.floor(XT / 25);
          TT.scanBlocks(oT, IT, kT, oT + 1, IT + 1, kT + 25, this.pufferIndexById, WT)
        }
        for (let XT = 0; XT < WT.length; XT += 4) {
          const TT = WT[XT + 3];
          this.found.push({
            pos: [WT[XT], WT[XT + 1], WT[XT + 2]],
            mS: TT,
            puffer: this.pufferList[this.pufferIndexById[TT] - 1]
          })
        }
        this.scanRow = IT, 325 === IT && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(TT, oT) {
        const IT = this.sources.length;
        if (0 !== IT) {
          this.budget = Math.min(this.budget + Math.min(IT / 1.2, 12) * oT, 2);
          for (let oT = 0; oT < IT && this.budget >= 1; oT++) {
            const oT = this.sources[this.cursor % IT];
            this.cursor = (this.cursor + 1) % IT, TT.getBlockId(oT.pos[0], oT.pos[1], oT.pos[2]) === oT.mS && (oT.puffer.puff(TT, oT.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const uK = {
        ...KK([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      vK = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function EK(TT) {
      return 0 === TT.spots.length ? 0 : Math.min(1 * TT.level, 4)
    }

    function fK(TT) {
      return 0 === TT.glass.length ? 0 : Math.min(.75 * TT.level, 3)
    }

    function CK(TT) {
      return `${TT.ctrl.join(",")}:${TT.rot}:${TT.cu},${TT.cv}:${TT.w},${TT.h},${TT.d}`
    }

    function jK(TT, oT) {
      const IT = oT.w - 2,
        iT = oT.h - 2,
        zT = oT.d - 2,
        kT = [];
      for (let WT = 0; WT < IT * iT * zT; WT++) {
        const XT = WT % IT,
          BT = Math.floor(WT / IT) % zT,
          FT = Math.floor(WT / (IT * zT));
        if (XT > 0 && XT < IT - 1 && BT > 0 && BT < zT - 1 && FT > 0 && FT < iT - 1) continue;
        const ST = pI(oT, PI(oT, WT)),
          DT = uc(TT, ST);
        if (null !== DT && "Fuel Rod" === uI(DT))
          for (const oT of vK) {
            const IT = [ST[0] + oT[0], ST[1] + oT[1], ST[2] + oT[2]];
            UK(TT, IT) && kT.push(aK(IT, oT))
          }
      }
      return kT
    }

    function JK(TT, oT) {
      const {
        lo: IT,
        hi: iT
      } = fB(oT), zT = [];
      for (let kT = IT[0]; kT < iT[0]; kT++)
        for (let oT = IT[1]; oT < iT[1]; oT++) {
          const WT = kT === IT[0] || kT === iT[0] - 1 || oT === IT[1] || oT === iT[1] - 1 ? 1 : Math.max(1, iT[2] - 1 - IT[2]);
          for (let XT = IT[2]; XT < iT[2]; XT += WT) {
            const WT = [kT, oT, XT];
            if (!UK(TT, WT)) continue;
            const BT = kT === IT[0] ? vK[1] : kT === iT[0] - 1 ? vK[0] : XT === IT[2] ? vK[5] : XT === iT[2] - 1 ? vK[4] : oT === IT[1] ? vK[3] : vK[2];
            zT.push(aK(WT, BT))
          }
        }
      return zT
    }

    function UK(TT, oT) {
      const IT = uc(TT, oT);
      return null !== IT && "Reactor Glass" === uI(IT)
    }

    function aK(TT, oT) {
      return [
        [TT[0] + .5 + .55 * oT[0], TT[1] + .5 + .55 * oT[1], TT[2] + .5 + .55 * oT[2]],
        [0 === oT[0] ? .4 : .02, 0 === oT[1] ? .4 : .02, 0 === oT[2] ? .4 : .02]
      ]
    }
    class YK {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(TT, oT, IT, iT) {
        const zT = [],
          kT = new Set;
        for (const FT of oT) {
          var WT, XT, BT;
          const {
            box: oT
          } = FT;
          if ("reactor" !== FT.kind || FT.level <= 0 || (oT.ctrl[0] - IT[0]) ** 2 + (oT.ctrl[1] - IT[1]) ** 2 + (oT.ctrl[2] - IT[2]) ** 2 > 576) continue;
          const ST = CK(oT);
          kT.add(ST);
          let DT = this.spots.get(ST);
          if ((!DT || iT - DT.at > 3e3) && (DT = {
              at: iT,
              spots: jK(TT, oT),
              glass: JK(TT, oT)
            }, this.spots.set(ST, DT)), 0 === DT.spots.length && 0 === DT.glass.length) continue;
          const LT = this.sparking.find((TT => TT.key === ST));
          zT.push({
            key: ST,
            level: FT.level,
            spots: DT.spots,
            glass: DT.glass,
            budget: null !== (WT = null === LT || void 0 === LT ? void 0 : LT.budget) && void 0 !== WT ? WT : 0,
            cursor: null !== (XT = null === LT || void 0 === LT ? void 0 : LT.cursor) && void 0 !== XT ? XT : 0,
            glassBudget: null !== (BT = null === LT || void 0 === LT ? void 0 : LT.glassBudget) && void 0 !== BT ? BT : 0
          })
        }
        for (const FT of this.spots.keys()) kT.has(FT) || this.spots.delete(FT);
        this.sparking = zT
      }
      emit(TT, oT, IT) {
        var iT;
        if (0 === this.sparking.length || !TT.particlesEnabled() || IT === this.lastFrame) return;
        this.lastFrame = IT;
        let zT = 0,
          kT = 0;
        for (const cT of this.sparking) zT += EK(cT), kT += fK(cT);
        const WT = zT > 8 ? 8 / zT : 1,
          XT = kT > 6 ? 6 / kT : 1;
        let BT, FT = null,
          ST = null;
        for (const cT of this.sparking) cT.budget = Math.min(cT.budget + EK(cT) * WT * oT, 2), cT.budget >= 1 && (!FT || cT.budget > FT.budget) && (FT = cT), cT.glassBudget = Math.min(cT.glassBudget + fK(cT) * XT * oT, 2), cT.glassBudget >= 1 && (!ST || cT.glassBudget > ST.glassBudget) && (ST = cT);
        if (FT) FT.budget--, BT = FT.spots[FT.cursor++ % FT.spots.length];
        else {
          if (!ST) return;
          ST.glassBudget--, BT = ST.glass[Math.floor(Math.random() * ST.glass.length)]
        }
        const [DT, LT] = BT, xT = null !== (iT = this.emitter) && void 0 !== iT ? iT : this.create(TT, DT, LT);
        xT.moveTo(DT, LT), xT.emit(uK.count)
      }
      dispose() {
        var TT;
        null === (TT = this.emitter) || void 0 === TT || TT.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(TT, oT, IT) {
        const iT = Math.ceil(14 * uK.count * uK.life[1]) + uK.count;
        return this.emitter = TT.createParticles(mK(uK, iT), {
          pos: oT,
          half: IT
        }), this.emitter
      }
    }
    const QK = [2, 3.2],
      OK = 1 / 3,
      HK = 1 / .6,
      nK = {
        texture: hK,
        fD: Math.ceil(18 * QK[1]) + 4,
        minLifeTime: QK[0] / HK,
        maxLifeTime: QK[1] / HK,
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
        blendMode: JX.h.Standard
      };
    class qK {
      constructor(TT) {
        this.plans = TT, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new YK, this.frame = 0, this.outline = new DK(TT)
      }
      onAfterRender(TT, oT, IT) {
        const iT = performance.now(),
          zT = 0 === this.lastMs ? 0 : Math.min(iT - this.lastMs, 250) / 1e3;
        if (this.lastMs = iT, this.outline.fade(TT, iT), this.puff(TT, zT, IT), this.sparks.emit(TT, zT, this.frame++), iT - this.lastCheckMs < 150) return;
        this.lastCheckMs = iT;
        const kT = this.plans.all().filter((TT => TT.formed && ZK(TT.box.ctrl, IT) <= 4096));
        this.plumes = kT.filter((TT => "reactor" === TT.kind && TT.level > 0)).map((TT => ({
          box: TT.box,
          level: TT.level
        }))), this.updateHums(TT, oT, kT, IT), this.sparks.update(TT, kT, IT, iT), this.chimeFormed(TT, oT, kT, iT)
      }
      dispose(TT) {
        var oT;
        this.outline.dispose(TT), null === (oT = this.steam) || void 0 === oT || oT.dispose(), this.steam = null, this.sparks.dispose();
        for (const IT of this.hums.values()) IT.stop();
        this.hums.clear()
      }
      chimeFormed(TT, oT, IT, iT) {
        const zT = this.outline.check(TT, IT, iT);
        zT && TT.playSound(oT, "exp_levelup", .6, 1, {
          jT: [zT.box.ctrl[0] + .5, zT.box.ctrl[1], zT.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(TT, oT, IT) {
        const iT = this.plumes;
        if (0 === iT.length || !TT.particlesEnabled()) return void(this.plumeBudget = 0);
        const zT = iT.reduce(((TT, oT) => TT + 3 * oT.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + zT * oT, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let kT = this.plumeCursor % (zT / 3);
        this.plumeCursor++;
        let WT = iT[0];
        for (const DT of iT) {
          if (kT < DT.level) {
            WT = DT;
            break
          }
          kT -= DT.level
        }
        const {
          lo: XT,
          hi: BT
        } = fB(WT.box);
        if (function(TT, oT, IT) {
            const iT = Math.max(TT[0] - IT[0], 0, IT[0] - oT[0]),
              zT = Math.max(TT[2] - IT[2], 0, IT[2] - oT[2]);
            return Math.hypot(iT, IT[1] - oT[1], zT)
          }(XT, BT, IT) < 6 && Math.random() > OK) return;
        const FT = [(XT[0] + BT[0]) / 2, BT[1] + .05, (XT[2] + BT[2]) / 2],
          ST = [(BT[0] - XT[0]) / 2 - .5, .05, (BT[2] - XT[2]) / 2 - .5];
        this.steam ??= TT.createParticles(nK, {
          pos: FT,
          half: ST
        }), this.steam.moveTo(FT, ST), this.steam.emit(1)
      }
      updateHums(TT, oT, IT, iT) {
        const zT = new Map;
        for (const WT of IT) "reactor" === WT.kind && WT.level > 0 && ZK(WT.box.ctrl, iT) <= 576 && zT.set(`${kT=WT.box.ctrl,`${kT[0]},${kT[1]},${kT[2]}`}:${WT.level}`, WT);
        var kT;
        for (const [WT, XT] of this.hums) zT.has(WT) || (XT.stop(), this.hums.delete(WT));
        for (const [WT, XT] of zT) {
          if (this.hums.has(WT)) continue;
          const {
            lo: IT,
            hi: iT
          } = fB(XT.box), zT = [(IT[0] + iT[0]) / 2, IT[1], (IT[2] + iT[2]) / 2], kT = TT.playSound(oT, "rocketEngineLoop", .08 + .06 * XT.level, .55, {
            jT: zT,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          kT && this.hums.set(WT, kT)
        }
      }
    }

    function ZK(TT, oT) {
      return (TT[0] - oT[0]) ** 2 + (TT[1] - oT[1]) ** 2 + (TT[2] - oT[2]) ** 2
    }
    class lK {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      Am(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const iT = [TT.baf2BombAt[0], TT.baf2BombAt[1], TT.baf2BombAt[2]],
          zT = TT.baf2BombR;
        if (TT.baf2BombBoom) {
          const TT = Math.hypot(oT[0] - iT[0], oT[1] - iT[1], oT[2] - iT[2]);
          this.XM({
            fuse: null,
            blast: {
              at: iT,
              r: zT,
              receivedAt: IT,
              distance: TT,
              flash: TT <= 3 * zT
            }
          })
        } else this.XM({
          ...this.snapshot,
          fuse: TT.baf2BombMs > 0 ? {
            at: iT,
            r: zT,
            endsAt: IT + TT.baf2BombMs
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
      XM(TT) {
        this.snapshot = TT;
        for (const oT of this.listeners) oT()
      }
    }
    const sK = (0, iT.memo)((function(TT) {
      var oT;
      let {
        store: IT
      } = TT;
      const {
        t: zT
      } = (0, ez.t)(), [kT, WT] = (0, iT.useState)((() => IT.get())), [XT, BT] = (0, iT.useState)((() => performance.now()));
      (0, iT.useEffect)((() => (WT(IT.get()), IT.subscribe((() => {
        WT(IT.get()), BT(performance.now())
      })))), [IT]);
      const {
        fuse: FT,
        blast: ST
      } = kT;
      (0, iT.useEffect)((() => {
        if (!FT) return;
        const TT = setInterval((() => {
          BT(performance.now())
        }), 250);
        return () => {
          clearInterval(TT)
        }
      }), [FT]);
      const [DT, LT] = (0, iT.useState)(!1);
      (0, iT.useEffect)((() => {
        if (null === ST || void 0 === ST || !ST.flash) return;
        LT(!0);
        const TT = setTimeout((() => {
          LT(!1)
        }), 2500);
        return () => {
          clearTimeout(TT)
        }
      }), [ST]);
      const xT = FT ? function(TT, oT) {
        return TT.endsAt <= oT ? 0 : Math.ceil((TT.endsAt - oT) / 1e3)
      }(FT, XT) : 0;
      return (0, mk.jsxs)(mk.Fragment, {
        children: [xT > 0 && (0, mk.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: zT("buildAFactory2Game:bombCountdown", {
            amount: String(xT),
            radius: String(null !== (oT = null === FT || void 0 === FT ? void 0 : FT.r) && void 0 !== oT ? oT : 0)
          })
        }), DT && (0, mk.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function tK(TT) {
      const oT = Math.min(4, Math.max(1, TT / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * TT / 4)),
        capSpread: Math.min(5 * TT / 8, 24 * oT),
        capThick: 6 * oT,
        stemHalfWidth: 3 * oT,
        puffScale: oT
      }
    }
    class GK {
      constructor() {
        this.kS = !1
      }
      hold(TT) {
        TT.getCameraFar() < 1e3 && (TT.setCameraFar(1e3), this.kS = !0)
      }
      release(TT) {
        this.kS && (this.kS = !1, TT.setCameraFar(null))
      }
    }
    const pK = 1 / .6,
      bK = [.2, .1, .2],
      yK = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      NK = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: JX.h.Standard,
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
      PK = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: JX.h.Standard,
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
      dK = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: JX.h.Standard,
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
      VK = {
        texture: hK,
        fD: Math.ceil(120) + 4,
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
        blendMode: JX.h.Add
      };
    class TM {
      constructor(TT) {
        this.store = TT, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new GK, this.timers = []
      }
      onAfterRender(TT, oT) {
        const IT = performance.now(),
          iT = 0 === this.lastMs ? 0 : Math.min(IT - this.lastMs, 250) / 1e3;
        this.lastMs = IT;
        const {
          fuse: zT,
          blast: kT
        } = this.store.get();
        null !== kT && kT !== this.shownBlast && (this.shownBlast = kT, this.startBlast(TT, oT, kT, IT));
        const WT = TT.particlesEnabled();
        null !== zT && zT.endsAt > IT && WT ? this.emitBeacon(TT, zT, iT, IT) : this.beaconBudget = 0, null !== this.cloud && (IT - this.cloud.startMs > 33e3 ? this.disposeCloud(TT) : (this.far.hold(TT), WT && this.emitCloud(TT, iT, IT)))
      }
      dispose(TT) {
        var oT;
        null === (oT = this.beacon) || void 0 === oT || oT.dispose(), this.beacon = null, this.disposeCloud(TT);
        for (const IT of this.timers) clearTimeout(IT);
        this.timers.length = 0
      }
      emitBeacon(TT, oT, IT, iT) {
        const zT = oT.endsAt - iT < 5e3 ? 350 : 1e3,
          kT = .5 + .5 * Math.sin(2 * Math.PI * iT / zT);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * kT * IT, 4), this.beaconBudget < 1) return;
        const WT = Math.floor(this.beaconBudget);
        this.beaconBudget -= WT;
        const [XT, BT, FT] = oT.at, ST = [XT + .5, BT + 1.1, FT + .5];
        this.beacon ??= TT.createParticles(VK, {
          pos: ST,
          half: bK
        }), this.beacon.moveTo(ST), this.beacon.emit(WT)
      }
      startBlast(TT, oT, IT, iT) {
        var zT;
        null === (zT = this.beacon) || void 0 === zT || zT.dispose(), this.beacon = null, this.disposeCloud(TT);
        const kT = (0, CX.isMobile)() ? .5 : 1;
        this.streams = [NK, PK, dK].map((TT => {
          const oT = Math.round(TT.count * kT);
          return {
            spec: TT,
            particles: null,
            rate: oT / ((TT.toMs - TT.fromMs) / 1e3),
            budget: 0,
            left: oT
          }
        })), this.cloud = {
          blast: IT,
          startMs: iT
        };
        const WT = Math.max(.25, 1 - IT.distance / (6 * IT.r)),
          XT = IT.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [IT, iT, zT] of yK) IM(TT, oT, IT, WT * iT, zT)
        }), XT))
      }
      emitCloud(TT, oT, IT) {
        const {
          blast: iT,
          startMs: zT
        } = this.cloud, kT = IT - zT, [WT, XT, BT] = iT.at, FT = tK(iT.r);
        for (const ST of this.streams) {
          const {
            spec: IT
          } = ST;
          if (ST.left <= 0 || kT < IT.fromMs) continue;
          ST.budget += ST.rate * oT;
          const zT = Math.min(Math.floor(ST.budget), ST.left);
          if (zT < 1) continue;
          ST.budget -= zT, ST.left -= zT;
          const DT = ST.particles ??= this.createStream(TT, IT, iT);
          if (IT === NK) {
            const TT = FT.stemHalfWidth;
            DT.moveTo([WT, XT + 1, BT], [TT, 1, TT])
          } else if (IT === PK) {
            const TT = FT.capSpread * Math.min(1, (kT - IT.fromMs) / 3e3),
              oT = Math.sqrt(Math.random()),
              iT = 2 * Math.random() * Math.PI,
              zT = Math.cos(iT) * oT,
              ST = Math.sin(iT) * oT,
              LT = WT + zT * TT,
              xT = BT + ST * TT,
              cT = FT.capThick,
              KT = XT + FT.capHeight + cT * (1 - oT * oT) * 2;
            DT.setDirections([.7 * zT, .05, .7 * ST], [zT, .2, ST]), DT.moveTo([LT, KT, xT], [cT, cT, cT])
          } else {
            this.ringAngle += 2.39996;
            const TT = Math.cos(this.ringAngle),
              oT = Math.sin(this.ringAngle);
            DT.setDirections([TT, .05, oT], [TT, .1, oT]), DT.moveTo([WT + 2 * TT, XT + .5, BT + 2 * oT], [0, .5, 0])
          }
          DT.emit(zT)
        }
      }
      createStream(TT, oT, IT) {
        const {
          r: iT
        } = IT, zT = Math.max(oT.life[0], iT / 25), kT = oT === dK ? [.9 * zT, zT] : oT.life, WT = tK(iT), XT = oT === dK ? 1 : WT.puffScale, BT = {
          texture: hK,
          fD: oT.count + 4,
          minLifeTime: kT[0] / pK,
          maxLifeTime: kT[1] / pK,
          minSize: oT.size[0] * XT,
          maxSize: oT.size[1] * XT,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, oT.gravity * pK * pK, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: oT.from[0],
            maxColor: oT.from[1]
          }, {
            timeFraction: .6,
            minColor: oM(oT.from[0], oT.to[0]),
            maxColor: oM(oT.from[1], oT.to[1])
          }, {
            timeFraction: 1,
            minColor: oT.to[0],
            maxColor: oT.to[1]
          }],
          blendMode: oT.blend
        };
        if (oT === NK) {
          const TT = WT.capHeight / ((kT[0] + kT[1]) / 2);
          BT.minEmitPower = .9 * TT * pK, BT.maxEmitPower = 1.05 * TT * pK, BT.dir1 = [-.1, 1, -.1], BT.dir2 = [.1, 1, .1]
        } else oT === PK ? (BT.minEmitPower = 1.2, BT.maxEmitPower = 2, BT.dir1 = [-1, .05, -1], BT.dir2 = [1, .2, 1]) : (BT.minEmitPower = 39.583333333333336, BT.maxEmitPower = 41.66666666666667, BT.dir1 = [1, 0, 0], BT.dir2 = [1, 0, 0]);
        return TT.createParticles(BT, {
          pos: IT.at
        })
      }
      disposeCloud(TT) {
        for (const IT of this.streams) {
          var oT;
          null === (oT = IT.particles) || void 0 === oT || oT.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(TT)
      }
    }

    function oM(TT, oT) {
      return [(TT[0] + oT[0]) / 2, (TT[1] + oT[1]) / 2, (TT[2] + oT[2]) / 2, .75 * TT[3]]
    }

    function IM(TT, oT, IT, iT, zT) {
      try {
        TT.playSound(oT, IT, iT, zT)
      } catch (kT) {
        console.error(kT)
      }
    }
    const iM = {
        fD: 720,
        perS: 100
      },
      zM = {
        fD: 320,
        perS: 44
      };
    class kM {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(TT, oT) {
        this.zone = {
          centre: [...TT.centre],
          r: TT.r,
          band: TT.band ? [TT.band[0], TT.band[1]] : void 0
        }, this.endsAt = oT
      }
      stop() {
        this.zone = null
      }
      Am(TT, oT) {
        const {
          baf2FalloutMs: IT,
          baf2FalloutAt: iT,
          baf2FalloutR: zT,
          baf2FalloutY: kT
        } = TT;
        IT > 0 && iT && void 0 !== zT ? this.start({
          centre: iT,
          r: zT,
          band: kT
        }, oT + IT) : this.stop()
      }
      perS(TT, oT, IT) {
        const iT = this.zone;
        if (!iT) return 0;
        const zT = this.endsAt - TT;
        return zT <= 0 ? (this.zone = null, 0) : iT.band && (oT[1] < iT.band[0] || oT[1] > iT.band[1]) || Math.hypot(oT[0] - iT.centre[0], oT[2] - iT.centre[2]) > iT.r ? 0 : IT.perS * Math.min(1, zT / 5e3)
      }
    }
    const WM = [5, 7],
      XM = [24, 8, 24],
      BM = .5,
      FM = 1 / .6,
      SM = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class DM {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, CX.isMobile)();
        this.state = new kM, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(TT) {
          return TT ? zM : iM
        }(TT)
      }
      startFallout(TT, oT) {
        this.state.start(TT, oT)
      }
      stopFallout() {
        this.state.stop()
      }
      Am(TT) {
        this.state.Am(TT, performance.now())
      }
      onAfterRender(TT, oT) {
        var IT;
        const iT = performance.now(),
          zT = 0 === this.lastMs ? 0 : Math.min(iT - this.lastMs, 250) / 1e3;
        this.lastMs = iT;
        const kT = this.state.perS(iT, oT, this.tier);
        if (kT <= 0 || !TT.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + kT * zT, kT / 4);
        const WT = Math.floor(this.budget);
        if (WT < 1) return;
        this.budget -= WT;
        const XT = this.at;
        XT[0] = oT[0], XT[1] = oT[1] + 12, XT[2] = oT[2];
        const BT = null !== (IT = this.systems) && void 0 !== IT ? IT : this.create(TT, XT),
          FT = this.amounts;
        FT[0] = 0, FT[1] = 0;
        for (let ST = 0; ST < WT; ST++) FT[Math.random() < .3 ? 1 : 0]++;
        for (let ST = 0; ST < BT.length; ST++) FT[ST] > 0 && (BT[ST].moveTo(XT, XM), BT[ST].emit(FT[ST]))
      }
      dispose() {
        for (const oT of null !== (TT = this.systems) && void 0 !== TT ? TT : []) {
          var TT;
          oT.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(TT, oT) {
        return this.systems = SM.map((IT => {
          let {
            rgba: [iT, zT, kT, WT],
            share: XT
          } = IT;
          const BT = {
            texture: "square_particle",
            fD: Math.ceil(this.tier.fD * XT),
            minLifeTime: WM[0] / FM,
            maxLifeTime: WM[1] / FM,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [BM, -1, BM],
            colorGradients: [{
              timeFraction: 0,
              minColor: [iT, zT, kT, 0]
            }, {
              timeFraction: .15,
              minColor: [iT, zT, kT, WT]
            }, {
              timeFraction: .8,
              minColor: [iT, zT, kT, WT]
            }, {
              timeFraction: 1,
              minColor: [iT, zT, kT, 0]
            }],
            blendMode: JX.h.Standard
          };
          return TT.createParticles(BT, {
            pos: oT,
            half: XM
          })
        })), this.systems
      }
    }
    const LM = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function xM(TT) {
      const oT = /\|rot(\d)/.exec(TT);
      return LM[oT ? Number(oT[1]) : 1]
    }
    var cM = IT(609),
      KM = IT(37453);
    const MM = new Set(cM.j);

    function rM(TT) {
      if (-2 !== TT.count) return null;
      const oT = sT(TT.item);
      return null !== oT && MM.has(oT) ? oT : null
    }

    function AM(TT) {
      const {
        width: oT,
        height: IT
      } = (0, KM.c)(TT).hitBoxDimensions;
      return .55 / Math.max(oT, IT)
    }

    function gM(TT, oT, IT) {
      if (!IT) return !1;
      const iT = TT[0] + .5 - oT[0],
        zT = TT[1] + .5 - oT[1],
        kT = TT[2] + .5 - oT[2];
      return iT * iT + zT * zT + kT * kT <= 576
    }

    function hM(TT, oT) {
      return Math.atan2(TT[0], TT[2]) + Math.PI + oT
    }

    function wM(TT, oT) {
      const IT = 2 * Math.PI;
      return (TT + IT * oT / 1e4) % IT
    }
    class mM {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = TT, this.now = oT, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = TT.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(TT, oT) {
        if (0 === this.farms.size) return;
        const IT = this.now(),
          iT = Number.isNaN(this.frameMs) ? 0 : Math.min(IT - this.frameMs, 100);
        this.frameMs = IT, IT - this.checkedMs >= 1e3 && (this.checkedMs = IT, this.check(TT, oT));
        for (const zT of this.farms.values()) zT.shown && zT.running && null !== zT.model && iT > 0 && (zT.spin = wM(zT.spin, iT), zT.model.setPose(zT.feet, hM(zT.front, zT.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const TT of this.farms.values()) this.drop(TT);
        this.farms.clear()
      }
      sync() {
        const TT = new Set;
        for (const oT of this.labels.list()) {
          const IT = rM(oT);
          if (null === IT) continue;
          TT.add(oT.key);
          const iT = this.farms.get(oT.key);
          if ((null === iT || void 0 === iT ? void 0 : iT.mob) === IT) continue;
          iT && this.drop(iT);
          const [zT, kT, WT] = oT.pos;
          this.farms.set(oT.key, {
            pos: oT.pos,
            feet: [zT + .5, kT + 1, WT + .5],
            mob: IT,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [oT, IT] of this.farms) TT.has(oT) || (this.drop(IT), this.farms.delete(oT));
        this.checkedMs = -1 / 0
      }
      check(TT, oT) {
        for (const IT of this.farms.values()) {
          const [iT, zT, kT] = IT.pos, WT = uc(TT, IT.pos);
          null !== WT && uI(WT) === YT && gM(IT.pos, oT, "Air" === uc(TT, [iT, zT + 1, kT])) ? (IT.running = WT.endsWith("|Running"), IT.front = xM(WT), null === IT.model && (IT.model = TT.createMobModel(IT.mob, AM(IT.mob)), null === IT.model) || (IT.model.setPose(IT.feet, hM(IT.front, IT.spin)), IT.shown || (IT.model.setVisible(!0), IT.shown = !0))) : (IT.shown && null !== IT.model && IT.model.setVisible(!1), IT.shown = !1)
        }
      }
      drop(TT) {
        var oT;
        null === (oT = TT.model) || void 0 === oT || oT.dispose(), TT.model = null, TT.shown = !1
      }
    }
    class eM {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(TT) {
        var oT;
        this.island = TT.baf2ColIsland, this.islandSite = (oT = TT.baf2ColSite) && 8 === oT.length ? {
          spawnXZ: [oT[0], oT[1]],
          coreXZ: [oT[2], oT[3]],
          minXZ: [oT[4], oT[5]],
          maxXZ: [oT[6], oT[7]]
        } : null, this.views = TT.baf2ColList.map((TT => ({
          entry: iz(TT)
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
        var oT;
        return null === (oT = this.views.find((oT => {
          let {
            entry: IT
          } = oT;
          return IT.focus[0] === TT[0] && IT.focus[1] === TT[1] + 1 && IT.focus[2] === TT[2]
        }))) || void 0 === oT ? void 0 : oT.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(TT, oT) {
        return QB(this.entries(), TT, oT)
      }
      lookSource() {
        return {
          handles: TT => Xi(TT) >= 0 || Bi(TT),
          line: (TT, oT) => this.lookLine(TT, oT),
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
    const RM = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((TT => TT / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((TT => [TT, TT + 1, TT + 2, TT, TT + 2, TT + 3]))
    };

    function uM(TT, oT, IT, iT, zT, kT, WT) {
      let XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const BT = Math.cos(XT),
        FT = Math.sin(XT),
        ST = TT.positions.length / 3,
        {
          positions: DT,
          indices: LT
        } = RM;
      for (let xT = 0; xT < DT.length; xT += 3) {
        const XT = DT[xT] * zT,
          ST = DT[xT + 2] * WT;
        TT.positions.push(oT + XT * BT + ST * FT, IT + DT[xT + 1] * kT, iT - XT * FT + ST * BT)
      }
      for (const xT of LT) TT.indices.push(ST + xT)
    }

    function vM(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return oT < 1 ? {
        rgb: TT,
        alpha: oT
      } : {
        rgb: TT,
        alpha: 1,
        opaque: !0
      }
    }
    class EM {
      constructor(TT, oT) {
        this.style = TT, this.perSource = oT, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(TT) {
        this.sources = TT, 0 === TT.length && (this.budget = 0)
      }
      dD(TT, oT, IT) {
        const iT = this.sources.length;
        if (0 !== iT) {
          var zT, kT;
          this.budget = Math.min(this.budget + (zT = iT, kT = this.perSource, Math.min(zT * kT, PB) * oT), 2);
          for (let oT = 0; oT < iT && this.budget >= 1; oT++) {
            const oT = this.sources[this.cursor % iT];
            this.cursor = (this.cursor + 1) % iT;
            if (!(Math.max(Math.abs(oT.x - IT[0]), Math.abs(oT.y - IT[1]), Math.abs(oT.z - IT[2])) > 32)) return this.puff(TT, oT), void this.budget--
          }
        }
      }
      dispose() {
        var TT;
        null === (TT = this.particles) || void 0 === TT || TT.dispose(), this.particles = null, this.sources = []
      }
      puff(TT, oT) {
        let {
          x: IT,
          y: iT,
          z: zT,
          h: kT,
          faces: WT
        } = oT;
        const XT = function(TT, oT, IT, iT, zT) {
            const [kT, WT, XT] = zT[Math.floor(Math.random() * zT.length)], BT = .04, FT = (TT, oT, IT) => TT > 0 ? oT + IT + BT : TT < 0 ? oT - BT : oT + .1, ST = (TT, oT, IT) => TT > 0 ? oT + IT + BT : TT < 0 ? oT - BT : oT + IT - .1, DT = [FT(kT, TT, 1), FT(WT, oT, iT), FT(XT, IT, 1)], LT = [ST(kT, TT, 1), ST(WT, oT, iT), ST(XT, IT, 1)];
            return {
              pos: [(DT[0] + LT[0]) / 2, (DT[1] + LT[1]) / 2, (DT[2] + LT[2]) / 2],
              half: [(LT[0] - DT[0]) / 2, (LT[1] - DT[1]) / 2, (LT[2] - DT[2]) / 2],
              out: [kT, WT, XT]
            }
          }(IT, iT, zT, kT, WT),
          {
            style: BT
          } = this,
          FT = this.particles ??= TT.createParticles(mK(BT, Math.ceil(BT.count * PB * BT.life[1]) + 4), XT);
        FT.moveTo(XT.pos, XT.half);
        const [ST, DT, LT] = XT.out, xT = BT.spread;
        FT.setDirections([ST - xT, .6 + DT, LT - xT], [ST + xT, 1 + DT, LT + xT]), FT.emit(BT.count)
      }
    }
    const fM = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class CM {
      constructor() {
        this.green = new EM(VB.green, yB), this.pink = new EM(VB.pink, NB), this.colliders = [], this.lastMs = 0
      }
      setSources(TT) {
        this.colliders = TT;
        const oT = [],
          IT = [];
        for (const iT of TT) {
          const [TT, zT, kT] = iT.focus;
          oT.push({
            x: TT,
            y: zT - 1,
            z: kT,
            h: 2,
            faces: fM
          });
          for (let oT = 0; oT < 4; oT++) {
            if (!iT.live[oT]) continue;
            const [TT, zT, kT] = Di(iT.focus, oT, oi.LASER_D), [WT, , XT] = Si[oT], BT = fM.filter((TT => TT[0] !== WT || TT[2] !== XT || 0 !== TT[1]));
            IT.push({
              x: TT,
              y: zT,
              z: kT,
              h: 1,
              faces: BT
            })
          }
        }
        this.green.setSources(oT), this.pink.setSources(IT)
      }
      onAfterRender(TT) {
        const oT = performance.now(),
          IT = 0 === this.lastMs ? 0 : Math.min(oT - this.lastMs, 250) / 1e3;
        if (this.lastMs = oT, 0 === this.colliders.length || !TT.particlesEnabled()) return;
        const iT = TT.getCameraPosition();
        this.green.dD(TT, IT, iT), this.pink.dD(TT, IT, iT)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const jM = 1.04,
      JM = vM([1, 120 / 255, 220 / 255]),
      UM = vM([1, .25, .25], .35);
    class aM {
      constructor(TT) {
        this.store = TT, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new CM
      }
      onAfterRender(TT) {
        this.store.version() !== this.builtVersion && this.rebuild(TT);
        const oT = performance.now();
        for (const IT of this.beams) {
          const iT = 1 + .35 * Math.sin(oT / 700 * Math.PI * 2 + IT.phase);
          TT.setGameMesh(IT.mesh, {
            scale: [IT.alongX ? 1 : iT, iT, IT.alongX ? iT : 1]
          })
        }
        this.glow.onAfterRender(TT)
      }
      dispose(TT) {
        this.clear(TT), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(TT) {
        this.clear(TT), this.builtVersion = this.store.version();
        const oT = [];
        for (const {
            entry: IT
          }
          of this.store.colliders()) IT.on && IT.live.some(Boolean) && (this.addBeams(TT, IT), oT.push(IT)), IT.blockers.length > 0 && this.addMarkers(TT, IT);
        this.glow.setSources(oT)
      }
      addBeams(TT, oT) {
        const [IT, iT, zT] = oT.focus, kT = bB - .25, WT = (.25 + bB) / 2;
        for (let XT = 0; XT < 4; XT++) {
          if (!oT.live[XT]) continue;
          const [BT, , FT] = Si[XT], ST = 0 !== BT, DT = {
            positions: [],
            indices: []
          };
          uM(DT, 0, 0, 0, ST ? kT : .2, .2, ST ? .2 : kT);
          const LT = [IT + .5 + BT * WT, iT + .5, zT + .5 + FT * WT],
            xT = TT.createGameMesh(DT, JM, LT);
          this.meshes.push(xT), this.beams.push({
            mesh: xT,
            alongX: ST,
            phase: XT * Math.PI / 2
          })
        }
      }
      addMarkers(TT, oT) {
        const IT = oT.blockers[0],
          iT = {
            positions: [],
            indices: []
          };
        for (const [zT, kT, WT] of oT.blockers) uM(iT, zT - IT[0] + .5, kT - IT[1] + .5, WT - IT[2] + .5, jM, jM, jM);
        this.meshes.push(TT.createGameMesh(iT, UM, IT))
      }
      clear(TT) {
        for (const oT of this.meshes) TT.disposeGameMesh(oT);
        this.meshes = [], this.beams = []
      }
    }
    const YM = [.56, .83, 1],
      QM = [1, .73, .08],
      OM = [1, .25, .25],
      HM = [.85, .85, .85],
      nM = [.3, .45, .6];

    function qM(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const WT = zT / 2,
        XT = zT + kT;
      for (const BT of [-WT, WT])
        for (const zT of [-WT, WT]) uM(TT, oT, IT + BT, iT + zT, XT, kT, kT), uM(TT, oT + BT, IT, iT + zT, kT, XT, kT), uM(TT, oT + BT, IT + zT, iT, kT, kT, XT)
    }

    function ZM(TT) {
      return oT => TT.isBlockInLoadedChunk(oT[0], oT[1], oT[2]) && 0 === TT.getBlockId(oT[0], oT[1], oT[2])
    }

    function lM(TT) {
      return TT.map((TT => {
        let {
          free: oT,
          blocked: IT,
          gaps: iT,
          supports: zT
        } = TT;
        return `${oT.join(";")}|${IT.join(";")}|${iT.join(";")}|${zT.join(";")}`
      })).join("/")
    }

    function sM(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const kT = oT[0],
        WT = {
          positions: [],
          indices: []
        };
      for (const [XT, BT, FT] of oT) qM(WT, XT - kT[0] + .5, BT - kT[1] + .5, FT - kT[2] + .5, iT, zT);
      return TT.createGameMesh(WT, IT, kT)
    }
    class tM {
      constructor(TT) {
        this.store = TT, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(TT, oT, IT) {
        var iT;
        const zT = null === (iT = TT.eoT(oT)) || void 0 === iT ? void 0 : iT.name;
        if (zT !== ii && zT !== Ii) return void("" !== this.shownKey && this.show(TT, "", []));
        const kT = performance.now();
        if (kT - this.lastCheckMs >= 200 && (this.lastCheckMs = kT, zT === ii ? this.check(TT, IT) : this.preview(TT, IT)), this.pulses.length > 0) {
          const oT = 1 + .12 * Math.sin(kT / 1e3 * 1.25 * Math.PI * 2),
            IT = [oT, oT, oT];
          for (const iT of this.pulses) TT.setGameMesh(iT, {
            scale: IT
          })
        }
      }
      dispose(TT) {
        this.clear(TT), this.shownKey = ""
      }
      check(TT, oT) {
        const IT = ZM(TT),
          iT = [];
        for (const {
            entry: kT
          }
          of this.store.colliders()) {
          kT.focus.every(((TT, IT) => Math.abs(TT + .5 - oT[IT]) <= oi.GHOST_REACH)) && iT.push(pB(kT, IT))
        }
        const zT = lM(iT);
        zT !== this.shownKey && this.show(TT, zT, iT)
      }
      preview(TT, oT) {
        const IT = TT.getTargetedBlock(),
          iT = IT ? [IT.wc[0], IT.wc[1], IT.wc[2]] : null,
          zT = null !== iT && iT.every(((TT, IT) => Math.abs(TT + .5 - oT[IT]) <= 8)),
          kT = this.store.site(),
          WT = zT && kT ? function(TT, oT, IT) {
            const iT = Fi(TT);
            if (!iT.every(oT)) return null;
            const zT = ci(TT, IT);
            return {
              column: iT,
              spots: pB({
                focus: iT[1],
                lasers: [!1, !1, !1, !1],
                open: zT,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, oT),
              fits: zT.filter(Boolean).length >= oi.MIN_SPOTS
            }
          }(iT, ZM(TT), kT) : null,
          XT = WT ? [WT.spots] : [],
          BT = WT ? `preview ${iT.join(",")}|${WT.fits}|${lM(XT)}` : "";
        var FT, ST;
        BT !== this.shownKey && this.show(TT, BT, XT, null !== (FT = null === WT || void 0 === WT ? void 0 : WT.column) && void 0 !== FT ? FT : [], null === (ST = null === WT || void 0 === WT ? void 0 : WT.fits) || void 0 === ST || ST)
      }
      show(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(TT), this.shownKey = oT, iT.length > 0 && this.meshes.push(sM(TT, iT, vM(zT ? HM : OM)));
        for (const {
            free: kT,
            blocked: WT,
            gaps: XT,
            supports: BT
          }
          of IT) {
          for (const [oT, IT, iT] of kT) {
            const zT = {
              positions: [],
              indices: []
            };
            qM(zT, 0, 0, 0);
            const kT = TT.createGameMesh(zT, vM(YM), [oT + .5, IT + .5, iT + .5]);
            this.meshes.push(kT), this.pulses.push(kT)
          }
          WT.length > 0 && this.meshes.push(sM(TT, WT, vM(QM))), XT.length > 0 && this.meshes.push(sM(TT, XT, vM(OM), 1.06, .07)), BT.length > 0 && this.meshes.push(sM(TT, BT, vM(nM)))
        }
      }
      clear(TT) {
        for (const oT of this.meshes) TT.disposeGameMesh(oT);
        this.meshes = [], this.pulses = []
      }
    }
    class GM {
      constructor() {
        this.stored = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(TT) {
        if (!TT.baf2TermOpen) return !1;
        TT.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [oT, IT] of TT.baf2TermItems) IT > 0 ? this.stored.set(oT, IT) : this.stored.delete(oT);
        if (this.pending = this.pending.filter((oT => oT.seq > TT.baf2TermAcked)), this.silos = TT.baf2TermSilos, this.readOnly = TT.baf2TermReadOnly, this.pocket = !0 === TT.baf2TermPocket, TT.baf2TermReset) this.resort();
        else
          for (const oT of this.stored.keys()) this.order.includes(oT) || this.order.push(oT);
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((TT, oT) => this.amount(oT) - this.amount(TT) || TT.localeCompare(oT))), this.changed()
      }
      take(TT, oT) {
        const IT = function(TT, oT) {
          const IT = "number" === typeof TT ? TT : "one" === TT ? 1 : "stack" === TT ? 99 : oT;
          return Math.min(oT, IT)
        }(TT, this.amount(oT));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: oT,
          amount: IT
        }), this.recents = [oT, ...this.recents.filter((TT => TT !== oT))].slice(0, 6), this.changed(), oo(this.seq, TT, oT)
      }
      amount(TT) {
        var oT;
        let IT = null !== (oT = this.stored.get(TT)) && void 0 !== oT ? oT : 0;
        for (const iT of this.pending) iT.item === TT && (IT -= iT.amount);
        return Math.max(0, IT)
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
    var pM = IT(37399);
    const bM = {
      isBlock: TT => void 0 !== jT.j[TT],
      harvestType: TT => {
        var oT;
        return null === (oT = jT.j[TT]) || void 0 === oT ? void 0 : oT.harvestType
      },
      harvestLevel: TT => {
        var oT;
        return null === (oT = jT.j[TT]) || void 0 === oT ? void 0 : oT.harvestLevel
      },
      dropsNothing: TT => {
        var oT;
        return null === (null === (oT = jT.j[TT]) || void 0 === oT ? void 0 : oT.drops)
      },
      displayName: TT => {
        var oT;
        return null === (oT = NW.p[TT]) || void 0 === oT ? void 0 : oT.displayName
      },
      description: TT => {
        var oT;
        return null === (oT = NW.p[TT]) || void 0 === oT ? void 0 : oT.description
      },
      harvests: TT => {
        var oT;
        return null === (oT = NW.p[TT]) || void 0 === oT ? void 0 : oT.harvests
      },
      level: TT => {
        var oT;
        return null === (oT = NW.p[TT]) || void 0 === oT ? void 0 : oT.level
      }
    };

    function yM(TT, oT, IT) {
      return function(TT, oT, IT, iT) {
        var zT, kT;
        const WT = oT.split("|")[0],
          XT = TT.isBlock(oT) ? oT : TT.isBlock(WT) ? WT : null;
        if (null === XT || "rock" !== TT.harvestType(XT) || TT.dropsNothing(XT) && !ai.has(WT)) return null;
        const BT = IT && "rock" === TT.harvests(IT) ? null !== (zT = TT.level(IT)) && void 0 !== zT ? zT : 0 : null,
          FT = null !== (kT = null !== iT && void 0 !== iT ? iT : TT.harvestLevel(XT)) && void 0 !== kT ? kT : 0;
        return (null !== BT ? FT <= BT : 0 === TT.harvestLevel(XT)) ? null : mi(TT, FT)
      }(bM, TT, oT, IT)
    }

    function NM(TT, oT) {
      return function(TT, oT, IT) {
        if (oT === wi[0]) return [(0, aT.Od)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, aT.L.whiteUiText)];
        const iT = IT.split("|")[0],
          zT = TT.isBlock(iT) ? TT.displayName(iT) : void 0,
          kT = "string" === typeof zT ? zT : zT && "translationKey" in zT ? `$t(${zT.translationKey})` : iT;
        return [(0, aT.Od)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: kT
          }
        }, aT.L.whiteUiText), (0, aT.Od)({
          translationKey: `item:${(0,aT.re)(oT)}`
        }, aT.L.yellowUiText)]
      }(bM, TT, oT)
    }
    const PM = "buildAFactory2Game:";
    const dM = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function VM(TT) {
      return TT.endsWith(" Ore")
    }
    const Tr = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      or = [],
      Ir = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Tr,
        plan: null,
        atomic: or
      },
      ir = "buildAFactory2Game:",
      zr = new Set(["Splitter", "Sorting Gate"]),
      kr = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class Wr {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = TT, this.planAt = oT, this.tierOf = IT, this.mS = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.kS = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Ir, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(TT, oT, IT) {
        var iT, zT, kT;
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const XT = null !== (iT = null === (zT = TT.eoT(oT)) || void 0 === zT ? void 0 : zT.name) && void 0 !== iT ? iT : null,
          BT = TT.isPlayerCrouching(oT),
          FT = 0 === IT ? null : this.resolve(TT, IT),
          ST = null !== FT && null !== WT && zr.has(FT.rootName) && function(TT, oT) {
            return kr.some((IT => {
              let [iT, zT] = IT;
              const kT = TT.getBlockId(oT[0] + iT, oT[1], oT[2] + zT);
              return 0 !== kT && "Express Belt" === TT.getMetaInfo(kT).rootName
            }))
          }(TT, WT),
          DT = this.updatePlan(0 === IT ? null : WT),
          LT = this.tierOf(),
          xT = null === WT ? null : (0, pM.h)(IT),
          cT = null !== xT && null !== WT && (0, pM.l)(function(TT) {
            return (oT, IT, iT) => TT.getBlockId(oT, IT, iT)
          }(TT), WT[0], WT[1], WT[2], xT),
          KT = this.readAfloat(TT, IT, WT);
        if (IT === this.mS && cT === this.missesMaker && KT === this.afloat && XT === this.kS && BT === this.crouching && ST === this.express && LT === this.tier && !DT && (!this.targetsLive || !this.liveMoved(WT))) return;
        this.mS = IT, this.missesMaker = cT, this.afloat = KT, this.kS = XT, this.crouching = BT, this.express = ST;
        const MT = ST && FT ? function(TT) {
          if (null === TT.info) return null;
          return TT.express ??= {
            ...TT.info,
            detail: `${ir}lookKeepsUpExpress`,
            detailItem: null
          }, TT.express
        }(FT) : null !== FT && cT && null !== xT ? this.besideMaker(FT, IT, xT) : null !== FT && KT ? this.hanging(FT) : null !== (kT = null === FT || void 0 === FT ? void 0 : FT.info) && void 0 !== kT ? kT : null;
        this.tier = LT;
        const rT = FT && MT ? function(TT, oT) {
          var IT, iT;
          const zT = jT.j[TT];
          if (!TT.endsWith(" Ore") || "rock" !== (null === zT || void 0 === zT ? void 0 : zT.harvestType) || 0 === zT.harvestLevel) return null;
          const kT = null !== (IT = zT.harvestLevel) && void 0 !== IT ? IT : 0,
            WT = oT ? NW.p[oT] : void 0;
          if ("rock" === (null === WT || void 0 === WT ? void 0 : WT.harvests) && (null !== (iT = WT.level) && void 0 !== iT ? iT : 0) >= kT) return null;
          const XT = (BT = kT, mi(bM, BT));
          var BT;
          if (null === XT) return null;
          const FT = Vz(XT),
            ST = /^[AEIOU]/.test(XT) ? "An" : "";
          if ("rock" === (null === WT || void 0 === WT ? void 0 : WT.harvests) && oT) return {
            key: `${ir}lookToolTooWeak${ST}`,
            kS: Vz(oT),
            needed: FT
          };
          return {
            key: XT === wi[0] ? `${ir}lookNeedAnyPickaxe` : `${ir}lookNeedPickaxe${ST}`,
            kS: null,
            needed: FT
          }
        }(FT.rootName, XT) : null;
        this.targetsLive = !0 === (null === FT || void 0 === FT ? void 0 : FT.live) && null !== WT;
        let AT = null;
        this.targetsLive && FT && WT && this.live && (this.livePos[0] = WT[0], this.livePos[1] = WT[1], this.livePos[2] = WT[2], this.liveVersion = this.live.version(), AT = this.live.line(FT.rootName, WT));
        const gT = null === MT ? Tr : function(TT, oT, IT) {
            const iT = function(TT, oT, IT) {
              const iT = EI(TT);
              if (null === iT) return null;
              const zT = `${PM}lookPortMode_${iT}`,
                kT = Oi(oT);
              if (kT && IT) return {
                mode: null,
                detail: zT,
                next: `${PM}lookWrenchPickUp`,
                nextState: null
              };
              const WT = fI(TT),
                XT = null === WT ? null : EI(WT);
              return null === XT ? {
                mode: null,
                detail: zT,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: zT,
                next: kT ? `${PM}lookWrenchNext` : `${PM}lookPortWrench`,
                nextState: `${PM}lookPortState_${XT}`
              }
            }(TT, oT, IT);
            if (null !== iT) return iT;
            const zT = Vi(TT, oT, IT);
            return null === zT.mode && null === zT.next ? Tr : zT
          }(TT.blockIdToBlockName(IT), XT, BT),
          hT = this.plan,
          wT = FT && MT ? this.rowsOf(FT.rootName, LT) : or,
          mT = this.snapshot;
        if (!(null === MT ? !mT.visible : mT.visible && MT === mT.info && (eT = rT, RT = mT.tool, eT === RT || null !== eT && null !== RT && eT.key === RT.key && eT.kS === RT.kS && eT.needed === RT.needed) && function(TT, oT) {
            return TT === oT || null !== TT && null !== oT && TT.key === oT.key && JSON.stringify([TT.params, TT.keys]) === JSON.stringify([oT.params, oT.keys])
          }(AT, mT.live) && function(TT, oT) {
            return TT.mode === oT.mode && TT.detail === oT.detail && TT.next === oT.next && TT.nextState === oT.nextState
          }(gT, mT.wrench) && Oc(hT, mT.plan) && wT === mT.atomic)) {
          var eT, RT;
          this.snapshot = null === MT ? {
            ...mT,
            visible: !1
          } : {
            info: MT,
            visible: !0,
            tool: rT,
            live: AT,
            wrench: gT,
            plan: hT,
            atomic: wT
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Ir, this.mS = 0, this.kS = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(TT, oT, IT) {
        if (null === IT || 0 === oT || !XT() || !VM(this.resolve(TT, oT).rootName)) return !1;
        const iT = `${IT[0]},${IT[1]},${IT[2]},${oT}`,
          zT = performance.now();
        return iT === this.afloatKey && zT - this.afloatAt < Xr ? this.afloat : (this.afloatKey = iT, this.afloatAt = zT, function(TT, oT) {
          for (const [IT, iT, zT] of dM) {
            const kT = oT(TT[0] + IT, TT[1] + iT, TT[2] + zT);
            if (void 0 === kT || null !== kT && !VM(kT)) return !1
          }
          return !0
        }(IT, ((oT, IT, iT) => function(TT, oT, IT, iT) {
          if (!TT.isBlockInLoadedChunk(oT, IT, iT)) return;
          const zT = TT.getBlockId(oT, IT, iT);
          return 0 === zT ? null : TT.getMetaInfo(zT).rootName
        }(TT, oT, IT, iT))))
      }
      liveMoved(TT) {
        var oT;
        const {
          livePos: IT
        } = this;
        return null === TT || TT[0] !== IT[0] || TT[1] !== IT[1] || TT[2] !== IT[2] || (null === (oT = this.live) || void 0 === oT ? void 0 : oT.version()) !== this.liveVersion
      }
      updatePlan(TT) {
        const oT = null === TT ? "" : TT.join(","),
          IT = performance.now();
        if (oT === this.planPos && IT - this.planMs < 250) return !1;
        this.planPos = oT, this.planMs = IT;
        const iT = null === TT ? null : this.planAt([TT[0], TT[1], TT[2]]),
          zT = !Oc(iT, this.plan);
        return this.plan = iT, zT
      }
      besideMaker(TT, oT, IT) {
        let {
          info: iT
        } = TT;
        if (null === iT) return null;
        let zT = this.besideMakerById.get(oT);
        if (void 0 === zT) {
          const TT = "cryo" === IT ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          zT = {
            ...iT,
            detail: `${ir}${TT}`,
            detailItem: null
          }, this.besideMakerById.set(oT, zT)
        }
        return zT
      }
      hanging(TT) {
        let {
          info: oT,
          rootName: IT
        } = TT;
        if (null === oT) return null;
        let iT = this.afloatByRoot.get(IT);
        return void 0 === iT && (iT = {
          ...oT,
          detail: `${ir}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(IT, iT)), iT
      }
      rowsOf(TT, oT) {
        if (null === oT) return or;
        const IT = `${TT}|${oT}`;
        let iT = this.rowsByKey.get(IT);
        if (void 0 === iT) {
          const zT = function(TT, oT) {
            var IT;
            if (!(TT in vo)) return [];
            const iT = null !== (IT = Eo[TT]) && void 0 !== IT ? IT : [],
              zT = new Map;
            for (const WT of nk(TT, oT))
              if ((iT.includes(WT) || Hk(WT.output) && Qk(WT.output) > NT(TT)) && Qk(WT.output) <= oT) {
                var kT;
                const TT = null !== (kT = zT.get(WT.output)) && void 0 !== kT ? kT : [];
                TT.push(WT.input), zT.set(WT.output, TT)
              } return Zk([...zT], (TT => {
              let [oT] = TT;
              return -Qk(oT)
            })).map((TT => {
              let [oT, IT] = TT;
              return {
                output: oT,
                inputs: IT
              }
            }))
          }(TT, oT);
          iT = zT.length > 0 ? zT : or, this.rowsByKey.set(IT, iT)
        }
        return iT
      }
      resolve(TT, oT) {
        const {
          rootId: IT,
          rootName: iT
        } = TT.getMetaInfo(oT), zT = (0, FI.k)(iT) ? oT : IT;
        let kT = this.byRootId.get(zT);
        const WT = XT();
        if (void 0 === kT || kT.nuclear !== WT) {
          var BT;
          const IT = function(TT) {
            return Ji(bM, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT)
          }(iT, TT.blockIdToBlockName(oT));
          kT = {
            info: IT,
            rootName: iT,
            live: null !== IT && !0 === (null === (BT = this.live) || void 0 === BT ? void 0 : BT.handles(iT)),
            nuclear: WT
          }, this.byRootId.set(zT, kT)
        }
        return kT
      }
    }
    const Xr = 500;
    const Br = (0, iT.memo)((function(TT) {
      var oT, IT;
      let {
        store: zT
      } = TT;
      const {
        t: kT
      } = (0, ez.t)(), [WT, XT] = (0, iT.useState)((() => zT.get()));
      (0, iT.useEffect)((() => (XT(zT.get()), zT.subscribe((() => {
        XT(zT.get())
      })))), [zT]);
      const {
        openInGameMenuName: BT,
        openEverythingMenuName: FT,
        isTouchScreen: ST
      } = (0, Mz.k)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: DT,
        tool: LT,
        live: xT,
        wrench: cT,
        atomic: KT
      } = WT, MT = WT.visible && null === BT && null === FT;
      if (null === DT) return null;
      const rT = null !== cT.detail ? kT(cT.detail) : null !== (oT = WT.plan) && void 0 !== oT && oT.ctrl ? kT("buildAFactory2Game:lookPlanCtrl") : null !== DT.detail ? kT(DT.detail, null === DT.detailItem ? void 0 : {
        item: kT(DT.detailItem)
      }) : null;
      return (0, mk.jsxs)("div", {
        className: gz()("Baf2LookTarget", {
          Visible: MT
        }),
        "aria-hidden": !MT,
        children: [(0, mk.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: kT(DT.name)
        }), null !== WT.plan && (0, mk.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: kT(WT.plan.key, {
            kind: kT(WT.plan.kindKey),
            w: String(WT.plan.w),
            h: String(WT.plan.h),
            d: String(WT.plan.d),
            count: String(WT.plan.count)
          })
        }), void 0 !== (null === (IT = WT.plan) || void 0 === IT ? void 0 : IT.why) && (0, mk.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: kT(WT.plan.why)
        }), null !== cT.mode && (0, mk.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: kT(cT.mode)
        }), null !== LT ? (0, mk.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: kT(LT.key, {
            item: kT(LT.needed),
            kS: null === LT.kS ? "" : kT(LT.kS)
          })
        }) : null !== xT ? (0, mk.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: kT(xT.key, TF(kT, xT))
        }) : null !== rT && (0, mk.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: rT
        }), KT.length > 0 && (0, mk.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: kT("buildAFactory2Game:lookAtomicRecipes", {
            list: KT.map((TT => {
              let {
                output: oT,
                inputs: IT
              } = TT;
              const iT = IT.length > 1 ? ` ${kT("buildAFactory2Game:recipeMore",{count:String(IT.length-1)})}` : "";
              return `${kT(Vz(IT[0]))}${iT} \u2192 ${kT(Vz(oT))}`
            })).join(", ")
          })
        }), null !== cT.next && (0, mk.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: kT(cT.next, {
            state: null === cT.nextState ? "" : kT(cT.nextState),
            use: kT(ST ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Fr = IT(37491);
    const Sr = [],
      Dr = [
        [0, -1, 0]
      ];

    function Lr(TT) {
      const oT = [TT];
      for (let IT = 1; IT <= 4; IT++) IT > 1 && oT.push(`${TT}|meta|rot${IT}`), oT.push(`${TT}|meta|rot${IT}|Running`);
      return oT
    }

    function xr(TT, oT) {
      return [Math.floor(TT[0] / oT), Math.floor(TT[1] / oT), Math.floor(TT[2] / oT)]
    }

    function cr(TT, oT, IT) {
      return `${TT},${oT},${IT}`
    }

    function Kr(TT) {
      const oT = TT.split("|")[0];
      if (!zI(oT)) return Sr;
      const IT = vo[oT];
      if (yo(IT)) return Dr;
      const iT = xM(TT);
      return No(IT) ? [
        [-iT[0], -iT[1], -iT[2]]
      ] : hz(IT) ? function(TT, oT) {
        const IT = TT[0] - 2 * oT[0],
          iT = TT[2] - 2 * oT[2],
          zT = [];
        for (let kT = -1; kT <= 1; kT++)
          for (let oT = -1; oT <= 1; oT++) zT.push([IT + kT, TT[1], iT + oT]);
        return zT
      }([0, 0, 0], iT) : Sr
    }
    const Mr = [.5, .5, .5],
      rr = [.2, .8, .3],
      Ar = [.45, 1, .5];
    class gr {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(TT) {
        this.indexed = !0;
        for (const oT of ho)
          for (const IT of Lr(oT)) {
            const oT = TT.blockNameToBlockId(IT, !0),
              iT = Kr(IT);
            null !== oT && iT.length > 0 && (this.offsetsList.push(iT), this.offsetsIndexById[oT] = this.offsetsList.length)
          }
      }
      onAfterRender(TT, oT) {
        this.indexed || this.index(TT);
        const IT = performance.now();
        if (IT - this.lastCheckMs < 100) return;
        this.lastCheckMs = IT, this.checks++;
        const iT = kc.c.Yc,
          [zT, kT, WT] = xr(oT, iT);
        let XT = !1;
        const BT = [];
        let FT = 0;
        for (let ST = zT - 2; ST <= zT + 2; ST++)
          for (let oT = kT - 1; oT <= kT + 1; oT++)
            for (let zT = WT - 2; zT <= WT + 2; zT++) {
              const kT = FT++,
                WT = cr(ST, oT, zT),
                DT = TT.getChunkVersion(ST, oT, zT);
              let LT = this.chunks.get(WT);
              null !== DT ? (LT || (LT = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(WT, LT)), LT.seenAt = this.checks, LT.checkedVersion !== DT && (LT.checkedVersion = DT, XT = !0), LT.scannedVersion !== DT && IT - LT.scannedAt >= 500 && BT.push({
                slot: kT,
                entry: LT,
                origin: [ST * iT, oT * iT, zT * iT]
              })) : (XT ||= void 0 !== LT, this.chunks.delete(WT))
            }
        this.scanDue(TT, BT) && (XT = !0);
        for (const [ST, DT] of this.chunks) DT.seenAt !== this.checks && (XT ||= DT.machines.length > 0, this.chunks.delete(ST));
        for (const ST of this.chunks.values())
          for (const [oT, IT, iT] of ST.cellChunks)(Math.abs(oT - zT) > 2 || Math.abs(IT - kT) > 1 || Math.abs(iT - WT) > 2) && this.watchCellChunk(TT, oT, IT, iT) && (XT = !0);
        for (const [ST, DT] of this.cellChunks) DT.seenAt !== this.checks && this.cellChunks.delete(ST);
        XT && this.refresh(TT)
      }
      dispose(TT) {
        this.clearMeshes(TT), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(TT, oT) {
        const IT = Math.max(oT.findIndex((TT => {
          let {
            slot: oT
          } = TT;
          return oT >= this.scanFrom
        })), 0);
        let iT = 96;
        for (let zT = 0; zT < oT.length; zT++) {
          const {
            slot: kT,
            entry: WT,
            origin: XT
          } = oT[(IT + zT) % oT.length];
          if (iT -= this.scan(TT, WT, XT), iT <= 0) {
            this.scanFrom = kT + 1;
            break
          }
        }
        return oT.length > 0
      }
      scan(TT, oT, IT) {
        let [iT, zT, kT] = IT;
        const WT = kc.c.Yc,
          XT = this.hits;
        XT.length = 0;
        const BT = TT.scanBlocks(iT, zT, kT, iT + WT, zT + WT, kT + WT, this.offsetsIndexById, XT),
          FT = [];
        for (let ST = 0; ST < XT.length; ST += 4) FT.push({
          pos: [XT[ST], XT[ST + 1], XT[ST + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[XT[ST + 3]] - 1]
        });
        return oT.machines = FT, oT.cellChunks = function(TT, oT) {
          const IT = new Set,
            iT = [];
          for (const {
              pos: zT,
              offsets: kT
            }
            of TT)
            for (const [TT, WT, XT] of kT) {
              const kT = xr([zT[0] + TT, zT[1] + WT, zT[2] + XT], oT),
                BT = cr(...kT);
              IT.has(BT) || (IT.add(BT), iT.push(kT))
            }
          return iT
        }(FT, WT), oT.scannedVersion = oT.checkedVersion, oT.scannedAt = performance.now(), Math.max(BT, 1)
      }
      watchCellChunk(TT, oT, IT, iT) {
        const zT = cr(oT, IT, iT),
          kT = TT.getChunkVersion(oT, IT, iT),
          WT = this.cellChunks.get(zT);
        return null === kT ? this.cellChunks.delete(zT) : (null === WT || void 0 === WT ? void 0 : WT.version) === kT ? (WT.seenAt = this.checks, !1) : (this.cellChunks.set(zT, {
          version: kT,
          seenAt: this.checks
        }), !0)
      }
      refresh(TT) {
        const oT = function(TT, oT) {
            const IT = new Set,
              iT = [];
            for (const {
                pos: zT,
                offsets: kT
              }
              of TT)
              for (const [TT, WT, XT] of kT) {
                const kT = zT[0] + TT,
                  BT = zT[1] + WT,
                  FT = zT[2] + XT,
                  ST = `${kT},${BT},${FT}`;
                IT.has(ST) || (IT.add(ST), oT(kT, BT, FT) && iT.push([kT, BT, FT]))
              }
            return iT
          }([...this.chunks.values()].flatMap((TT => TT.machines)), ((oT, IT, iT) => TT.isBlockInLoadedChunk(oT, IT, iT) && 0 === TT.getBlockId(oT, IT, iT))),
          IT = oT.join(";");
        IT !== this.shownKey && (this.shownKey = IT, this.clearMeshes(TT), oT.length > 0 && (this.meshes = [this.build(TT, oT, !1), this.build(TT, oT, !0)]))
      }
      build(TT, oT, IT) {
        const iT = oT[0],
          zT = [],
          kT = [];
        for (const [WT, XT, BT] of oT)(0, Fr.e)(zT, kT, [WT - iT[0] + .5, XT - iT[1] + .5, BT - iT[2] + .5], Mr, IT);
        return TT.createGameMesh({
          positions: zT,
          indices: kT
        }, {
          rgb: IT ? Ar : rr,
          alpha: .4
        }, iT)
      }
      clearMeshes(TT) {
        for (const oT of this.meshes) TT.disposeGameMesh(oT);
        this.meshes = []
      }
    }
    const hr = 1 / .6,
      wr = 200,
      mr = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      er = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Rr = 2 * Math.PI / 3;
    class ur {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mr;
        this.style = TT, this.particles = null, this.points = new Float32Array(800), this.budget = wr, this.lastMs = 0
      }
      static blade() {
        return new ur(er)
      }
      Am(TT, oT) {
        const IT = Math.min(oT.arcStruck, oT.arcPoints.length);
        this.draw(TT, [oT.arcFrom, ...oT.arcPoints], oT.arcPoints.slice(0, IT))
      }
      onBlade(TT, oT) {
        const [IT, iT, zT] = oT.bladeCentre, [kT, WT] = oT.bladeFacing, XT = IT - 1.5 * kT, BT = zT - 1.5 * WT, FT = Math.atan2(WT, kT), ST = [];
        for (let DT = 0; DT <= 8; DT++) {
          const TT = FT - Rr / 2 + Rr * DT / 8;
          ST.push([XT + 2.5 * Math.cos(TT), iT, BT + 2.5 * Math.sin(TT)])
        }
        this.draw(TT, ST, oT.bladeStruck)
      }
      dispose() {
        var TT;
        null === (TT = this.particles) || void 0 === TT || TT.stop(), this.particles = null
      }
      draw(TT, oT, IT) {
        if (!TT.particlesEnabled() || oT.length < 2) return;
        const iT = performance.now();
        this.budget = Math.min(wr, this.budget + (iT - this.lastMs) / 1e3 * wr), this.lastMs = iT;
        const zT = [];
        let kT = 0,
          WT = oT[0];
        for (const rT of oT.slice(1)) {
          const TT = Math.min(48, Math.round(Math.hypot(rT[0] - WT[0], rT[1] - WT[1], rT[2] - WT[2]) * this.style.perBlock));
          zT.push([WT, rT, TT]), kT += TT, WT = rT
        }
        const XT = IT.length;
        kT += 10 * XT;
        const BT = kT > this.budget ? this.budget / kT : 1;
        if (0 === kT || BT * kT < 1) return;
        const FT = oT[0],
          [ST, DT, LT] = FT,
          xT = this.points;
        let cT = 0;
        const KT = (TT, oT, IT, iT) => {
          const zT = 4 * cT;
          xT[zT] = TT - ST, xT[zT + 1] = oT - DT, xT[zT + 2] = IT - LT, xT[zT + 3] = iT, cT++
        };
        zT.forEach(((TT, oT) => {
          let [IT, iT, zT] = TT;
          const kT = Math.min(Math.floor(zT * BT), wr - cT),
            WT = Math.hypot(iT[0] - IT[0], iT[1] - IT[1], iT[2] - IT[2]),
            XT = 0 === oT && WT > 0 ? Math.min(.5, .1 * WT) / WT : 0;
          for (let BT = 0; BT < kT; BT++) {
            const TT = XT + (BT + .5) / kT * (1 - XT);
            KT(IT[0] + (iT[0] - IT[0]) * TT, IT[1] + (iT[1] - IT[1]) * TT, IT[2] + (iT[2] - IT[2]) * TT, .15)
          }
        }));
        const MT = Math.floor(10 * BT);
        for (let rT = 0; rT < XT; rT++) {
          const [TT, oT, iT] = IT[rT];
          for (let IT = 0; IT < MT && cT < wr; IT++) KT(TT, oT, iT, 2.5)
        }
        this.budget -= cT, this.particles ??= TT.createParticles(function(TT) {
          const [oT, IT] = TT.colours;
          return {
            texture: "square_particle",
            fD: 400,
            minLifeTime: TT.life[0] / hr,
            maxLifeTime: TT.life[1] / hr,
            minSize: TT.size[0],
            maxSize: TT.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [oT[0], oT[1], oT[2], 1],
              maxColor: [IT[0], IT[1], IT[2], 1]
            }, {
              timeFraction: 1,
              minColor: [oT[0], oT[1], oT[2], 0],
              maxColor: [IT[0], IT[1], IT[2], 0]
            }],
            blendMode: JX.h.Add
          }
        }(this.style), {
          pos: FT
        }), this.particles.emitPoints(FT, xT, cT)
      }
    }
    const vr = new Set(["Sky Spring"]);

    function Er(TT, oT, IT) {
      const iT = TT.split("|")[0];
      return "Air" !== oT || IT || ! function(TT) {
        const oT = TT.split("|")[0];
        return void 0 !== oI[oT] || vr.has(oT)
      }(iT) ? null : TT
    }
    class fr {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(TT) {
        const oT = TT - this.lastTapAt >= 300;
        return this.lastTapAt = TT, oT
      }
    }
    class Cr {
      constructor() {
        this.presses = new fr, this.predicted = null
      }
      tap(TT, oT) {
        const IT = this.presses.isNewPress(oT);
        return IT && (this.predicted = {
          station: TT,
          at: oT
        }), IT
      }
      consumeServerOpen(TT, oT) {
        const IT = this.predicted;
        return !(null === IT || IT.station !== TT || oT - IT.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class jr {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(TT, oT) {
        return TT && (this.thrustAt = oT), oT - this.thrustAt < 200
      }
    }
    const Jr = [.1, .05, .1],
      Ur = {
        texture: "effect_5",
        fD: Math.ceil(48),
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
        blendMode: JX.h.OneOne
      };
    class ar {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new jr, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      Am(TT, oT) {
        for (const [IT, iT] of oT.baf2JetFlames) TT.isLocalPlayer(IT) || (iT ? this.lit.add(IT) : this.lit.delete(IT))
      }
      onAfterRender(TT, oT) {
        const IT = performance.now(),
          iT = this.hold.lit(this.selfThrusting(TT, oT), IT);
        for (const [zT, kT] of this.flames)(zT === oT ? iT : this.lit.has(zT)) || this.setEmitting(kT, !1), zT === oT || TT.getPositionView(zT) ? !kT.emitting && IT - kT.offAt >= 1300 && (kT.particles.stop(), this.flames.delete(zT)) : (kT.particles.dispose(), this.flames.delete(zT), this.lit.delete(zT));
        iT && this.draw(TT, oT, oT);
        for (const zT of this.lit) this.draw(TT, oT, zT)
      }
      dispose() {
        for (const TT of this.flames.values()) TT.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(TT, oT) {
        var IT;
        const iT = TT.getLocalPlayerMovement();
        return !!iT && (null !== (zT = {
          option: null !== (IT = TT.getClientOption(oT, "jumpHoldThrust")) && void 0 !== IT ? IT : null,
          jumping: iT.jumpHeld,
          onGround: iT.onGround,
          alive: TT.isAlive(oT)
        }).option && zT.option.maxUpSpeed >= 0 && zT.jumping && !zT.onGround && zT.alive);
        var zT
      }
      draw(TT, oT, IT) {
        var iT, zT;
        const kT = this.pos;
        if (!TT.readDrawnPosition(IT, kT)) return;
        const WT = TT.readDrawnPosition(oT, this.camera) ? this.camera : kT;
        if (!((kT[0] - WT[0]) ** 2 + (kT[1] - WT[1]) ** 2 + (kT[2] - WT[2]) ** 2 < 1600) || !TT.particlesEnabled()) {
          const TT = this.flames.get(IT);
          return void(TT && this.setEmitting(TT, !1))
        }
        const XT = null !== (iT = this.flames.get(IT)) && void 0 !== iT ? iT : this.create(TT, IT, kT),
          BT = null !== (zT = TT.getDrawnHeading(IT)) && void 0 !== zT ? zT : 0,
          FT = this.at;
        FT[0] = kT[0] - .35 * Math.sin(BT), FT[1] = kT[1] + 1.05, FT[2] = kT[2] - .35 * Math.cos(BT), XT.particles.moveTo(FT), this.setEmitting(XT, !0)
      }
      setEmitting(TT, oT) {
        TT.emitting !== oT && (TT.emitting = oT, oT || (TT.offAt = performance.now()), TT.particles.setEmitRate(oT ? 60 : 0))
      }
      create(TT, oT, IT) {
        const iT = {
          particles: TT.createParticles(Ur, {
            pos: IT,
            half: Jr
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(oT, iT), iT
      }
    }

    function Yr(TT) {
      return "Reactor Frame" === dI("reactor", TT)
    }

    function Qr(TT) {
      return UI("reactor", TT) && !Yr(TT) && (TT.startsWith("Reactor Glass") || TT.startsWith("Reactor Port"))
    }
    const Or = "baf2Goal";
    class Hr {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Cz.h.subscribe("setDirectionArrow", (TT => {
          let {
            id: oT,
            position: IT
          } = TT;
          oT === Or && (this.goal = IT, this.checkedAt = -1 / 0)
        })), Cz.h.subscribe("clearDirectionArrow", (TT => {
          let {
            id: oT
          } = TT;
          null !== oT && oT !== Or || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const TT of this.subs) Cz.h.unsubscribe(TT)
      }
      sideOf(TT, oT, IT, iT) {
        const zT = this.goal;
        if (!zT) return 0;
        IT - this.checkedAt > 1e3 && (this.checkedAt = IT, this.open = function(TT, oT) {
          const [IT, iT, zT] = TT.map(Math.floor);
          if (!Qr(oT(IT, iT, zT))) return null;
          for (const [kT, WT] of [
              [1, 0],
              [0, 1]
            ]) {
            const TT = oT(IT + kT, iT, zT + WT),
              XT = oT(IT - kT, iT, zT - WT);
            if (Yr(XT) && Qr(TT)) return [kT, 0, WT];
            if (Yr(TT) && Qr(XT)) return [0 - kT, 0, 0 - WT]
          }
          return null
        }(zT, ((oT, IT, iT) => TT.blockIdToBlockName(TT.getBlockId(oT, IT, iT)))));
        const kT = this.open;
        if (!kT) return 0;
        const WT = iT(zT);
        if (Math.abs(WT.x - oT.x) > .05 || Math.abs(WT.y - oT.y) > .05) return 0;
        const XT = iT([zT[0] + kT[0], zT[1], zT[2] + kT[2]]).x - WT.x;
        return Math.abs(XT) < .3 ? 0 : XT > 0 ? 1 : -1
      }
    }
    class nr {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new Hr, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.Ec = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.Tm = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((TT => {
          for (const oT of TT) oT.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(oT.target, oT.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.Ec || this.clear()
        }, window.addEventListener("resize", this.Tm)
      }
      onAfterRender(TT, oT) {
        var IT;
        this.api = TT, this.project = null !== (IT = null === oT || void 0 === oT ? void 0 : oT.projectWorldPosToScreenPos) && void 0 !== IT ? IT : null, this.queued || this.Ec || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.Ec = !0;
        for (const TT of this.moved.keys()) TT.style.transform = "";
        this.moved.clear();
        for (const TT of this.sideLabels.keys()) TT.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.Tm)
      }
      clear() {
        for (const kT of this.moved.keys()) kT.isConnected || this.moved.delete(kT);
        for (const kT of this.sideLabels.keys()) kT.isConnected || this.sideLabels.delete(kT);
        if (0 === this.arrows.length) return;
        const TT = performance.now(),
          oT = TT - this.refreshedAt > 1e3;
        oT && (this.refreshedAt = TT, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const IT = this.trackerBox(),
          iT = this.barsBox(),
          zT = this.toastBox(oT);
        (IT || iT || zT) && oT && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let kT = 0; kT < this.arrows.length; kT++) {
          const oT = this.arrows[kT];
          this.labelOffsets.set(oT, this.runLabelAside(oT, TT));
          const WT = (IT ? this.shiftLeftOf(oT, IT) : 0) || this.shiftOnScreen(oT),
            XT = Math.min(iT ? this.liftAbove(oT, iT, WT) : 0, zT ? this.liftAbove(oT, zT, WT) : 0),
            BT = this.moved.get(oT);
          if (0 !== WT || 0 !== XT) {
            const TT = 0 === XT ? `translateX(${WT}px)` : `translate(${WT}px, ${XT}px)`;
            BT !== TT && (oT.style.transform = TT, this.moved.set(oT, TT))
          } else void 0 !== BT && (oT.style.transform = "", this.moved.delete(oT))
        }
      }
      trackerBox() {
        var TT, oT;
        const IT = null !== (TT = this.tracker) && void 0 !== TT && TT.isConnected ? this.tracker : null !== (oT = this.trackers[0]) && void 0 !== oT ? oT : null;
        if (IT !== this.tracker && this.watch(IT), this.boxStale && IT) {
          var iT, zT, kT;
          this.boxStale = !1;
          const TT = IT.closest(".NoRoom") ? null : IT.getBoundingClientRect(),
            oT = TT && TT.width > 0 ? null === (iT = this.hud) || void 0 === iT ? void 0 : iT.getBoundingClientRect() : void 0,
            WT = TT && oT ? Math.max(TT.top, oT.top) : null !== (zT = null === TT || void 0 === TT ? void 0 : TT.top) && void 0 !== zT ? zT : 0,
            XT = TT && oT ? Math.min(TT.bottom, oT.bottom) : null !== (kT = null === TT || void 0 === TT ? void 0 : TT.bottom) && void 0 !== kT ? kT : 0;
          this.box = TT && TT.width > 0 && XT > WT ? {
            left: TT.left,
            top: WT,
            right: TT.right,
            bottom: XT
          } : null
        }
        return IT ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var TT;
          this.barsStale = !1;
          const oT = null === (TT = this.statBars[0]) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
          this.bars = oT && oT.width > 0 && oT.height > 0 ? {
            left: oT.left,
            top: oT.top,
            right: oT.right,
            bottom: oT.bottom
          } : null
        }
        return this.bars
      }
      toastBox(TT) {
        var oT;
        const IT = null !== (oT = this.toasts[0]) && void 0 !== oT ? oT : null;
        if (IT !== this.toastEl || TT && IT) {
          this.toastEl = IT;
          const TT = null === IT || void 0 === IT ? void 0 : IT.getBoundingClientRect();
          this.toast = TT && TT.width > 0 && TT.height > 0 ? {
            left: TT.left,
            top: TT.top,
            right: TT.right,
            bottom: TT.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(TT, oT, IT) {
        var iT;
        const zT = this.anchorOf(TT);
        if (!zT) return 0;
        const kT = zT.x + IT + (null !== (iT = this.labelOffsets.get(TT)) && void 0 !== iT ? iT : 0),
          {
            halfWidth: WT,
            labelled: XT
          } = this.extentOf(TT),
          BT = zT.y + this.em * (XT ? 6.2 : 3);
        return BT < oT.top - 6 || kT + WT < oT.left - 6 || kT - WT > oT.right + 6 ? 0 : oT.top - 6 - BT
      }
      watch(TT) {
        var oT, IT;
        this.tracker && this.sizes.unobserve(this.tracker), null === (oT = this.hud) || void 0 === oT || oT.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = TT, this.hud = null !== (IT = null === TT || void 0 === TT ? void 0 : TT.closest(".Baf2QuestHud")) && void 0 !== IT ? IT : null, this.box = null, this.boxStale = !0, TT && this.sizes.observe(TT), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(TT, oT) {
        var IT;
        const iT = this.anchorOf(TT);
        if (!iT) return 0;
        const {
          y: zT
        } = iT, kT = iT.x + (null !== (IT = this.labelOffsets.get(TT)) && void 0 !== IT ? IT : 0), WT = this.em, {
          halfWidth: XT,
          labelled: BT
        } = this.extentOf(TT), FT = zT - WT, ST = kT + XT;
        return zT + WT * (BT ? 6.2 : 3) < oT.top || FT > oT.bottom || ST < oT.left - 6 || kT - XT > oT.right ? 0 : Math.max(oT.left - 6 - ST, 6 - (kT - XT))
      }
      shiftOnScreen(TT) {
        var oT;
        const IT = this.anchorOf(TT);
        if (!IT) return 0;
        const {
          halfWidth: iT
        } = this.extentOf(TT), zT = IT.x + (null !== (oT = this.labelOffsets.get(TT)) && void 0 !== oT ? oT : 0), kT = zT + iT - (this.innerWidth - 6);
        return kT > 0 ? -kT : Math.max(0, 6 - (zT - iT))
      }
      runLabelAside(TT, oT) {
        var IT;
        let iT = null;
        for (let WT = 0; WT < TT.children.length; WT++) TT.children[WT].classList.contains("DirectionArrowLabel") && (iT = TT.children[WT]);
        if (!iT) return 0;
        const zT = TT.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(TT) : null,
          kT = (zT && this.api ? this.side.sideOf(this.api, {
            x: zT.x / this.innerWidth * 100,
            y: zT.y / this.innerHeight * 100
          }, oT, this.project) : 0) * this.halfWidthOf(iT);
        return kT !== (null !== (IT = this.sideLabels.get(iT)) && void 0 !== IT ? IT : 0) && (iT.style.transform = 0 === kT ? "" : `translateX(-50%) translateX(${kT}px)`, 0 === kT ? this.sideLabels.delete(iT) : this.sideLabels.set(iT, kT)), kT
      }
      extentOf(TT) {
        let oT = this.em,
          IT = !1;
        for (let iT = 0; iT < TT.children.length; iT++) {
          const zT = TT.children[iT],
            kT = zT.classList.contains("DirectionArrowLabel");
          IT ||= kT, (kT || zT.classList.contains("DirectionArrowDistance")) && (oT = Math.max(oT, this.halfWidthOf(zT)))
        }
        return {
          halfWidth: oT,
          labelled: IT
        }
      }
      halfWidthOf(TT) {
        let oT = this.halfWidths.get(TT);
        return void 0 === oT && (oT = TT.offsetWidth / 2, this.halfWidths.set(TT, oT), this.sizes.observe(TT), this.labels.add(TT)), oT
      }
      forgetGoneLabels() {
        for (const TT of this.labels) TT.isConnected || (this.sizes.unobserve(TT), this.halfWidths.delete(TT), this.labels.delete(TT))
      }
      anchorOf(TT) {
        const oT = TT.style.translate,
          IT = this.anchors.get(TT);
        if (IT && IT.translate === oT && IT.innerWidth === this.innerWidth && IT.innerHeight === this.innerHeight) return IT;
        const iT = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(oT);
        if (!iT) return null;
        const zT = {
          translate: oT,
          x: parseFloat(iT[1]) / 100 * this.innerWidth,
          y: parseFloat(iT[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(TT, zT), zT
      }
    }
    const qr = "Baf2ArrowText";

    function Zr(TT, oT) {
      const IT = TT.rows.find((TT => TT.current));
      return UT(TT.tutorial) && null !== IT && void 0 !== IT && IT.item && qz(IT) && fT(IT.item).includes(oT) ? IT.item : null
    }
    const lr = new class {
      constructor(TT) {
        this.select = TT, this.picks = new Map
      }
      open(TT, oT, IT) {
        const iT = Zr(oT, TT);
        null !== iT && this.PL(TT, iT, IT)
      }
      follow(TT, oT) {
        if (XT())
          for (const [IT, {
              item: iT,
              had: zT
            }] of this.picks) {
            const kT = Zr(TT, IT);
            kT !== iT && (null !== kT && oT(iT) > zT ? this.PL(IT, kT, oT) : this.picks.delete(IT))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      PL(TT, oT, IT) {
        this.picks.set(TT, {
          item: oT,
          had: IT(oT)
        }), this.select(TT, oT)
      }
    }(jz.l);

    function sr(TT) {
      return oT => {
        let IT = 0;
        for (const iT of TT.getInventoryItems())(null === iT || void 0 === iT ? void 0 : iT.name) === oT && (IT += null === iT.amount ? 1 : Math.max(iT.amount, 0));
        return IT
      }
    }

    function tr(TT, oT, IT, iT) {
      TT.getClientOption(oT, "canCraft") && "inventory" !== Mz.c.get("openInGameMenuName") && (lr.open(IT, iT.get(), sr(TT)), Cz.h.XM("toggleMenu", `inventory|${IT}`))
    }
    let Gr = null,
      pr = !1;

    function br(TT) {
      const oT = hk();
      TT === Gr && oT === pr || (Gr = TT, pr = oT, (0, jz.o)(function(TT, oT) {
        const IT = new Map;
        for (let iT = TT + 1; iT <= zT.length; iT++) {
          const zT = lk(iT, TT, oT);
          if (zT)
            for (const oT of rT(iT).unlocks) IT.set(oT, {
              ...zT,
              stepsAway: iT - TT
            })
        }
        return IT
      }(TT, oT)))
    }

    function yr() {
      return (0, jz.v)(Zk(Object.keys(ET), Qk)), () => {
        (0, jz.v)([])
      }
    }
    const Nr = "buildAFactory2Game:",
      Pr = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      dr = {
        on: `${Nr}tutorialButtonOn`,
        hud: `${Nr}tutorialButtonHud`,
        off: `${Nr}tutorialButtonOff`
      },
      Vr = {
        on: `${Nr}tutorialPickedOn`,
        hud: `${Nr}tutorialPickedHud`,
        off: `${Nr}tutorialPickedOff`
      };

    function TA(TT, oT, IT) {
      let iT = null,
        zT = () => {};
      const kT = kT => {
        var WT;
        let {
          tutorial: XT,
          tutorialKnown: BT
        } = kT;
        (null === (WT = iT) || void 0 === WT ? void 0 : WT.tutorial) === XT && iT.tutorialKnown === BT || (iT = {
          tutorial: XT,
          tutorialKnown: BT
        }, zT = (0, cz.w)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: dr[XT],
          icon: {
            kind: "icon",
            name: Pr[XT]
          },
          iconOnly: !0,
          disabled: !BT,
          className: "Baf2TutorialButton",
          onClick: () => {
            var iT;
            (iT => {
              const zT = oT.setTutorial(iT);
              TT.send(`baf2tutorial ${iT} ${zT}`), IT.show({
                baf2ToastText: [(0, aT.Od)({
                  translationKey: Vr[iT]
                }, aT.L.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((iT = oT.get().tutorial, JT[(JT.indexOf(iT) + 1) % JT.length]))
          }
        }))
      };
      kT(oT.get());
      const WT = Cz.h.subscribe(Jz, kT);
      return () => {
        Cz.h.unsubscribe(WT), zT()
      }
    }

    function oA(TT, oT, IT) {
      var iT, zT;
      const kT = TT.getTargetedBlock();
      if (!kT || ! function(TT, oT, IT) {
          if ("Chest" !== oT) return !1;
          const iT = TT.split("|")[0];
          if (!zI(iT) || 0 === vo[iT].outputSlots.length) return !1;
          const zT = xM(TT);
          return IT[0] === zT[0] && IT[1] === zT[1] && IT[2] === zT[2]
        }(IT, null === (iT = TT.eoT(oT)) || void 0 === iT ? void 0 : iT.name, kT.normal)) return !1;
      const [WT, XT, BT] = kT.wc, FT = TT.getBlockId(WT, XT, BT);
      return 0 === FT || !0 === (null === (zT = jT.j[FT]) || void 0 === zT ? void 0 : zT.canBePlacedOver)
    }
    var IA = IT(35713);
    const iA = new Set(SI.b);
    class zA {
      constructor(TT) {
        this.toasts = TT, this.lastAt = -1 / 0
      }
      onAltAction(TT, oT, IT) {
        const iT = TT.getTargetedBlock();
        if (!iT || function(TT) {
            const oT = TT.split("|")[0];
            return zI(oT) || null !== Ai(oT) || uT(oT) || SI.b.includes(oT)
          }(IT) && !iA.has(IT.split("|")[0])) return;
        const zT = TT.eoT(oT);
        if (!zT || !iA.has(zT.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const kT = zT.typeObj.id,
          [WT, XT, BT] = iT.wc,
          FT = TT.getBlockId(WT, XT, BT),
          ST = jT.j[FT];
        (0 === FT || null !== ST && void 0 !== ST && ST.Sx || null !== ST && void 0 !== ST && ST.canBePlacedOver) && TT.isSolidToPlayerBlockId(kT) && TT.canModifyBlockAt(WT, XT, BT) && TT.lTT(WT, XT, BT, kT) && !TT.lTT(WT, XT, BT, kT, oT) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, aT.Od)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, aT.L.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class kA {
      constructor(TT) {
        this.show = TT, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(TT, oT, IT) {
        var iT;
        if (!oT) return this.started = null, void this.gatedThisHold.clear();
        if (!TT) return void(this.started = null);
        const zT = `${TT.x},${TT.y},${TT.z},${TT.kS}`;
        if (zT === this.started) return;
        this.started = zT;
        const kT = Ui(TT.y) ? yM(TT.block, TT.kS, TT.level) : null;
        if (null === kT || this.gatedThisHold.has(zT)) return;
        this.gatedThisHold.add(zT);
        const WT = TT.block.split("|")[0];
        IT - (null !== (iT = this.hintedAt.get(WT)) && void 0 !== iT ? iT : -1 / 0) < 5e3 || (this.hintedAt.set(WT, IT), this.show({
          baf2ToastText: NM(kT, TT.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var WA = IT(26);

    function XA(TT, oT) {
      const IT = [...TT.baf2CoreBankPaused];
      for (const [zT] of TT.baf2CoreBanked) IT.push(zT);
      for (const WT of zT) {
        for (const {
            item: TT
          }
          of WT.cost) IT.push(TT);
        for (const TT of WT.newDeposits) IT.push(TT.block);
        for (const TT of WT.unlocks) IT.push(TT, CT(TT));
        WT.reward && IT.push(WT.reward);
        for (const {
            item: TT
          }
          of null !== (iT = null === (kT = WT.charge) || void 0 === kT ? void 0 : kT.items) && void 0 !== iT ? iT : []) {
          var iT, kT;
          IT.push(TT)
        }
      }
      return {
        message: TT,
        itemNames: oT([...new Set(IT)])
      }
    }
    const BA = "baf2MultiblockGuide";
    const FA = new Map;
    const SA = function(TT, oT, IT, zT) {
      let {
        localPlayerId: kT
      } = zT;
      const WT = new xX,
        XT = new bL,
        FT = new ox,
        ST = new VL(FT),
        DT = (TT, oT) => {
          oT ? ST.observe(TT) : ST.unobserve(TT)
        },
        LT = new dL,
        xT = new kx(DT),
        cT = TT => xT.covers(TT),
        KT = new Rx;
      let MT;
      const rT = new QW((TT => {
          MT.sendCommand(TT)
        })),
        AT = () => {
          rT.send("baf2questbook")
        },
        gT = TT => function(TT, oT, IT) {
          const iT = {};
          for (const zT of IT) {
            let IT = FA.get(zT);
            void 0 === IT && (IT = TT.getItemStat(oT, zT, "displayName"), FA.set(zT, IT)), iT[zT] = IT
          }
          return iT
        }(MT, kT, TT),
        hT = new Yz(AT),
        wT = new Qx((() => Mz.c.get("loadingOverlayVisible"))),
        mT = new Zx,
        eT = new zA(wT),
        RT = new kA((TT => {
          wT.show(TT, TT.baf2ToastMs)
        })),
        vT = new Px(DT),
        ET = new mM(vT),
        fT = new wW,
        CT = new GM,
        JT = new VW,
        UT = new zc({
          read: () => !1 !== WA.e.getItem(BA),
          write: TT => {
            WA.e.setItem(BA, TT)
          }
        }),
        QT = new jc(UT),
        OT = new ac(UT),
        HT = new IK(UT, (TT => function(TT, oT) {
          const IT = NX(oT.w, oT.h, oT.d),
            iT = new Uint8Array(IT);
          for (let zT = 0; zT < IT; zT++) {
            const IT = uc(TT, pI(oT, PI(oT, zT)));
            iT[zT] = null === IT ? 0 : GX(IT)
          }
          return iT
        }(MT, TT)), pc(rT)),
        nT = new iK(UT, pc(rT)),
        qT = new TK,
        ZT = (TT, oT) => {
          let [IT, iT, zT] = TT;
          qT.answered(oT) || wT.show({
            baf2ToastText: [(0, aT.Od)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: IT,
                h: iT,
                d: zT
              }
            }, aT.L.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      HT.onSizeNotTaken(ZT), nT.onSizeNotTaken(ZT);
      const tT = new XK,
        GT = new qK(UT),
        pT = new lK,
        yT = new TM(pT),
        NT = new DM,
        PT = new eM,
        VT = new aM(PT),
        To = new tM(PT),
        oo = PT.lookSource(),
        Io = new Wr({
          handles: TT => oo.handles(TT) || TT === YT,
          line: (TT, oT) => TT === YT ? function(TT, oT, IT) {
            var iT;
            const zT = sT(null === (iT = oT.at(IT)) || void 0 === iT ? void 0 : iT.item);
            return null === zT ? {
              key: `${ir}lookFarmEmpty`
            } : {
              key: TT.blockIdToBlockName(TT.getBlockId(IT[0], IT[1], IT[2])).endsWith("|Running") ? `${ir}lookFarmRunning` : `${ir}lookFarmWaiting`,
              keys: {
                mob: lT(zT)
              }
            }
          }(MT, vT, oT) : oo.line(TT, oT),
          version: () => oo.version() + vT.version()
        }, (TT => Qc(UT.all(), TT, (TT => uc(MT, TT)))), (() => hT.get().tier)),
        io = new RK,
        ko = new gr,
        Wo = new ur,
        Xo = ur.blade(),
        Bo = new ar,
        Fo = new tx,
        So = new nr,
        Do = new Cr,
        Lo = new fr;
      let xo = -1 / 0,
        co = 0,
        Ko = -1 / 0,
        Mo = -1 / 0;
      const ro = () => {
          rT.send("baf2islandsclose"), Mo = Date.now()
        },
        Ao = [];

      function go(TT) {
        var oT, IT, iT, zT, kT, WT, BT;
        "core" === (null === (oT = XT.get()) || void 0 === oT ? void 0 : oT.kind) && "core" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && rT.send("baf2coreclose"), "power" === (null === (IT = XT.get()) || void 0 === IT ? void 0 : IT.kind) && "power" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && rT.send("baf2powerclose"), "water" === (null === (iT = XT.get()) || void 0 === iT ? void 0 : iT.kind) && "water" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && rT.send(dT.v), "terminal" === (null === (zT = XT.get()) || void 0 === zT ? void 0 : zT.kind) && "terminal" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && rT.send("baf2terminalclose"), "islands" === (null === (kT = XT.get()) || void 0 === kT ? void 0 : kT.kind) && "islands" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && ro();
        const FT = PT.getStatus();
        "collider" === (null === (WT = XT.get()) || void 0 === WT ? void 0 : WT.kind) && "collider" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && FT && rT.send(UB(FT, "close"));
        const ST = TT => "reactor" === TT || "battery" === TT;
        if (ST(null === (BT = XT.get()) || void 0 === BT ? void 0 : BT.kind) && !ST(null === TT || void 0 === TT ? void 0 : TT.kind)) {
          var DT, LT, xT;
          const TT = "reactor" === (null === (DT = XT.get()) || void 0 === DT ? void 0 : DT.kind) ? null === (LT = HT.get()) || void 0 === LT ? void 0 : LT.status.baf2RxAt : null === (xT = nT.get()) || void 0 === xT ? void 0 : xT.status.baf2BatAt;
          TT && rT.send(zo(TT, "close"))
        }
        "quests" === (null === TT || void 0 === TT ? void 0 : TT.kind) && AT(), XT.set(TT), null === TT && mT.release()
      }

      function wo() {
        (0, Kz.e)(), go(null)
      }
      let mo = new Set,
        eo = !1;
      const Ro = {
        onCreate: TT => {
          MT = TT, MT.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const oT of ho) {
            const TT = vo[oT].inputSlots ? fX(WT) : uX(oT, WT, fT, rT);
            Ao.push((0, xz.h)(oT, TT))
          }
          Ao.push((0, Kz.u)((0, iT.createElement)(iT.Fragment, null, (0, iT.createElement)(Bx, {
            controller: xT
          }), (0, iT.createElement)(Tc, {
            store: vT
          }), (0, iT.createElement)(Br, {
            store: Io
          }), (0, iT.createElement)(ax, {
            store: hT
          }), (0, iT.createElement)(nx, {
            store: wT
          }), (0, iT.createElement)(lx, {
            store: mT
          }), (0, iT.createElement)(px, {
            store: Fo
          }), (0, iT.createElement)(WK, {
            store: tT
          }), (0, iT.createElement)(sK, {
            store: pT
          })), {
            content: (0, iT.createElement)(yL, {
              commands: rT,
              store: XT,
              power: fT,
              water: JT,
              reactor: HT,
              battery: nT,
              collider: PT,
              terminal: CT,
              quests: hT,
              close: Kz.h,
              leave: () => {
                mT.dropHeld(), (0, Kz.e)()
              },
              askIslands: () => {
                Mo = -1 / 0, xo = Date.now(), co = rT.send(bT)
              },
              openSocial: () => {
                (0, Kz.e)(), Mz.c.set({
                  openEverythingMenuName: WI.q.SOCIAL
                })
              },
              showCore: TT => {
                go({
                  kind: "core",
                  core: TT
                }), rT.send("baf2corereopen")
              }
            }),
            onClose: () => {
              go(null)
            }
          })), Ao.push((0, cz.w)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              go({
                kind: "quests"
              }), (0, Kz.o)()
            }
          })), Ao.push(TA(rT, hT, wT)), eo = !1, Ao.push(wk((() => {
            null !== Gr && br(Gr)
          }))), Ao.push(yr()), Ao.push(function() {
            const TT = Cz.h.subscribe(Jz, yz),
              oT = () => {
                if (bz) {
                  const TT = bz;
                  bz = null, (0, jz.s)(TT)
                }
              },
              IT = Cz.h.subscribe("toggleMenu", (TT => {
                "inventory" === (null === TT || void 0 === TT ? void 0 : TT.split("|")[0]) && oT()
              })),
              iT = Cz.h.subscribe("appManagerUpdated|openInGameMenuName", (TT => {
                "inventory" === TT && oT()
              }));
            return () => {
              Cz.h.unsubscribe(TT), Cz.h.unsubscribe(IT), Cz.h.unsubscribe(iT)
            }
          }()), Ao.push(function(TT) {
            const oT = sr(TT),
              IT = Cz.h.subscribe(Jz, (TT => {
                lr.follow(TT, oT)
              }));
            return () => {
              Cz.h.unsubscribe(IT), lr.clear()
            }
          }(MT)), Ao.push(function() {
            const TT = document.documentElement,
              oT = (0, vx.e)(".InvenBodyRight", [], (() => {
                const oT = document.querySelector(".InvenBodyRight");
                oT && TT.style.setProperty("--baf2-backpack-width", `${oT.offsetWidth}px`)
              }));
            return () => {
              oT(), TT.style.removeProperty("--baf2-backpack-width")
            }
          }()), Ao.push(function() {
            const TT = document.documentElement;
            return TT.classList.add(qr), () => {
              TT.classList.remove(qr)
            }
          }()), Ao.push((() => {
            ST.dispose(), FT.dispose()
          })), KT.start(MT), Ao.push((() => {
            KT.dispose(), Bo.dispose(), ET.dispose()
          }))
        },
        onClose: () => {
          (0, jz.s)([]), bz = null, pz = new Set, Gr = null, (0, jz.o)(new Map), FA.clear();
          for (const TT of Ao) TT();
          hT.dispose(), Io.dispose(), wT.dispose(), mT.dispose(), io.dispose(), ko.dispose(MT), QT.dispose(MT), OT.dispose(MT), GT.dispose(MT), yT.dispose(MT), pT.dispose(), NT.dispose(), UT.dispose(), HT.dispose(), nT.dispose(), tT.dispose(), Wo.dispose(), Xo.dispose(), Fo.dispose(), VT.dispose(MT), To.dispose(MT), PT.dispose(), So.dispose(), rT.clear()
        },
        onAfterRender: (TT, oT) => {
          var IT, iT, zT;
          try {
            KT.onAfterRender(oT)
          } catch (FT) {
            console.error("Error drawing BAF2 belt items", FT)
          }
          try {
            Bo.onAfterRender(MT, kT)
          } catch (FT) {
            console.error("Error drawing BAF2 jet flames", FT)
          }
          eo || (eo = !0, rT.send("baf2clientready"));
          const WT = MT.getPositionView(kT);
          xT.onAfterRender(oT, WT, LT), vT.onAfterRender(oT, WT, LT, cT), ST.run(LT), io.onAfterRender(MT, WT), ko.onAfterRender(MT, WT), ET.onAfterRender(MT, WT), QT.onAfterRender(MT, WT), OT.onAfterRender(MT, kT, WT), GT.onAfterRender(MT, kT, WT), yT.onAfterRender(MT, kT), NT.onAfterRender(MT, WT), hT.onPlayerY(WT[1]), VT.onAfterRender(MT), To.onAfterRender(MT, kT, WT);
          const BT = MT.getTargetedBlock();
          Io.onAfterRender(MT, kT, null !== (IT = null === BT || void 0 === BT ? void 0 : BT.yN) && void 0 !== IT ? IT : 0, null !== (iT = null === BT || void 0 === BT ? void 0 : BT.position) && void 0 !== iT ? iT : null), So.onAfterRender(MT, oT), RT.onMining(function(TT, oT) {
            var IT, iT;
            const zT = TT.getMiningBlock();
            if (!zT) return null;
            const kT = (0, jT.f)(TT.getBlockId(zT[0], zT[1], zT[2])),
              WT = null !== (IT = null === (iT = TT.eoT(oT)) || void 0 === iT ? void 0 : iT.name) && void 0 !== IT ? IT : null,
              XT = TT.getItemStat(oT, kT.split("|")[0], "harvestLevel");
            return {
              block: kT,
              x: zT[0],
              y: zT[1],
              z: zT[2],
              kS: WT,
              level: XT
            }
          }(MT, kT), MT.isMining(), performance.now()), "dropMap" === (null === (zT = XT.get()) || void 0 === zT ? void 0 : zT.kind) && Ui(WT[1]) && wo()
        },
        onPlayerChangeBlock: (TT, oT, IT, iT, zT, WT) => {
          TT === kT && function(TT, oT, IT, iT, zT, kT, WT) {
            const XT = Er(kT, WT, TT.isPlayerCrouching(oT));
            if (null === XT) return;
            if (TT.gC(IT, iT, zT, XT), !TT.getClientOption(oT, "canPickUpItems")) return;
            const BT = oI[XT.split("|")[0]];
            var FT, ST, DT;
            void 0 !== BT && (FT = TT.getInventoryItems(), ST = BT, DT = kc.c.maxItemStackSize, TT.getInventoryFreeSlotCount(oT) > 0 || FT.some((TT => null !== TT && TT.name === ST && null !== TT.amount && TT.amount < DT))) && TT.playSound(oT, (0, IA.b)("pickUp"), .5, 1)
          }(MT, TT, oT, IT, iT, zT, WT)
        },
        onPlayerAltAction: (TT, oT, IT, iT, zT) => {
          var WT, XT;
          if (!MT.getClientOption(kT, "canPickUpItems")) return;
          const BT = null !== (WT = null === (XT = MT.eoT(kT)) || void 0 === XT ? void 0 : XT.name) && void 0 !== WT ? WT : null,
            FT = function(TT, oT) {
              const IT = TT.split("|")[0];
              return uT(IT) && oT !== zz && "Sky Pack" !== oT ? IT : null
            }(zT, BT);
          if (null !== FT) return void(Do.tap(FT, performance.now()) && tr(MT, kT, FT, hT));
          if (!Oi(BT)) return;
          const ST = Lo.isNewPress(performance.now()),
            DT = function(TT, oT, IT) {
              return !Oi(oT) || IT ? null : bi(TT)
            }(zT, BT, MT.isPlayerCrouching(kT));
          null !== DT && ST && MT.gC(oT, IT, iT, DT)
        },
        onPlayerAttemptAltAction: (TT, oT, IT, iT, zT) => {
          if (function(TT, oT, IT, iT, zT) {
              "Workbench" === iT.split("|")[0] && TT.getClientOption(IT, "canCraft") && (lr.open("Workbench", zT.get(), sr(TT)), oT.send("baf2station Workbench"))
            }(MT, rT, kT, zT, hT), oA(MT, kT, zT)) return "preventAction";
          eT.onAltAction(MT, kT, zT)
        },
        onReceivedMessageFromServer: (TT, oT) => {
          if ("baf2MachineStatus" === TT) {
            var IT, iT, zT, FT, ST, DT, LT, cT, AT, eT, RT, uT, ET, jT, aT, YT;
            const TT = oT,
              kT = TT.baf2MachineTaught;
            WT.set(TT.baf2MachinePos, {
              status: TT.baf2MachineStatus,
              power: null !== (IT = TT.baf2MachinePower) && void 0 !== IT ? IT : null,
              opLeftMs: null !== (iT = TT.baf2MachineOpLeftMs) && void 0 !== iT ? iT : null,
              dug: TT.baf2MachineYield ? {
                item: TT.baf2MachineYield,
                name: gT([TT.baf2MachineYield])[TT.baf2MachineYield]
              } : null,
              powerCap: null !== (zT = TT.baf2MachinePowerCap) && void 0 !== zT ? zT : null,
              powerRates: null !== (FT = TT.baf2MachinePowerRates) && void 0 !== FT ? FT : null,
              coupled: !0 === TT.baf2MachineCoupled,
              couplerLevel: null !== (ST = TT.baf2MachineCoupler) && void 0 !== ST ? ST : 1,
              taught: kT,
              taughtName: kT ? gT([kT])[kT] : null,
              tier: null !== (DT = TT.baf2MachineTier) && void 0 !== DT ? DT : null,
              input: null !== (LT = TT.baf2MachineInput) && void 0 !== LT ? LT : null,
              inertCoupler: null !== (cT = TT.baf2MachineInertCoupler) && void 0 !== cT ? cT : null,
              inputShort: null !== (AT = TT.baf2MachineInputShort) && void 0 !== AT ? AT : null,
              field: null !== (eT = TT.baf2MachineField) && void 0 !== eT ? eT : null,
              noSeeds: !0 === TT.baf2MachineNoSeeds,
              fuelFed: !0 === TT.baf2MachineFuelFed,
              fuelFeeds: !0 === TT.baf2MachineFuelFeeds,
              coreFull: !0 === TT.baf2MachineCoreFull,
              waterUnpowered: !0 === TT.baf2MachineWaterUnpowered,
              powerShort: !0 === TT.baf2MachinePowerShort,
              powerWait: !0 === TT.baf2MachinePowerWait,
              reactorPowered: !0 === TT.baf2MachineReactorPowered,
              fuelLeftMs: null !== (RT = TT.baf2MachineFuelLeftMs) && void 0 !== RT ? RT : null,
              burning: null !== (uT = TT.baf2MachineBurning) && void 0 !== uT ? uT : null,
              fuelKeep: null !== (ET = TT.baf2MachineFuelKeep) && void 0 !== ET ? ET : null,
              water: null !== (jT = TT.baf2MachineWater) && void 0 !== jT ? jT : null,
              farm: null !== (aT = TT.baf2MachineFarm) && void 0 !== aT ? aT : null,
              cryo: null !== (YT = TT.baf2MachineCryo) && void 0 !== YT ? YT : null
            })
          } else if ("baf2StationOpen" === TT) {
            const TT = oT.baf2Station;
            Do.consumeServerOpen(TT, performance.now()) || tr(MT, kT, TT, hT)
          } else if ("baf2Power" === TT) {
            const TT = oT;
            fT.set(TT), TT.baf2PowerOpen && (go({
              kind: "power"
            }), (0, Kz.o)())
          } else if (TT === dT.B) {
            const TT = oT;
            JT.set(TT), TT.baf2WaterOpen && (go({
              kind: "water"
            }), (0, Kz.o)())
          } else if ("baf2RxPlans" === TT) {
            var QT, OT, ZT;
            const TT = oT;
            UT.Am(TT);
            const IT = new Set(TT.baf2RxPlanList.map((TT => {
              let [oT, IT, iT] = TT;
              return `${oT},${IT},${iT}`
            })));
            tT.retain(IT);
            const iT = null === (QT = XT.get()) || void 0 === QT ? void 0 : QT.kind,
              zT = "reactor" === iT ? null === (OT = HT.get()) || void 0 === OT ? void 0 : OT.status.baf2RxAt : "battery" === iT ? null === (ZT = nT.get()) || void 0 === ZT ? void 0 : ZT.status.baf2BatAt : void 0;
            zT && mo.has(zT.join(",")) && !IT.has(zT.join(",")) && wo(), mo = IT
          } else if ("baf2RxStatus" === TT) {
            const TT = oT;
            HT.set(TT), TT.baf2RxOpen && (go({
              kind: "reactor"
            }), (0, Kz.o)())
          } else if ("baf2BatStatus" === TT) {
            const TT = oT;
            nT.set(TT), TT.baf2BatOpen && (go({
              kind: "battery"
            }), (0, Kz.o)())
          } else if ("baf2RxAlarm" === TT) tT.Am(oT);
          else if ("baf2Bomb" === TT) pT.Am(oT, MT.getPositionView(kT));
          else if ("baf2Fallout" === TT) NT.Am(oT);
          else if ("baf2ColBeams" === TT) PT.onBeams(oT);
          else if ("baf2ColStatus" === TT) {
            const TT = oT;
            var lT, sT;
            if (PT.onStatus(TT), TT.baf2ColOpen) PT.onOpen(null !== (lT = null === (sT = MT.eoT(kT)) || void 0 === sT ? void 0 : sT.name) && void 0 !== lT ? lT : null), go({
              kind: "collider"
            }), (0, Kz.o)()
          } else if ("baf2Terminal" === TT) {
            const TT = oT;
            var GT;
            if (CT.apply(TT)) TT.baf2TermReset && (go({
              kind: "terminal"
            }), (0, Kz.o)());
            else "terminal" === (null === (GT = XT.get()) || void 0 === GT ? void 0 : GT.kind) && (XT.set(null), (0, Kz.e)())
          } else if ("baf2Core" === TT) {
            var yT;
            const TT = oT;
            if (BT(!0 === TT.baf2CoreNuclear), function(TT, oT) {
                return "core" === (null === TT || void 0 === TT ? void 0 : TT.kind) && oT.baf2CoreTier > TT.core.message.baf2CoreTier
              }(XT.get(), TT)) return void(0, Kz.e)();
            if (TT.baf2CoreRefresh && "core" !== (null === (yT = XT.get()) || void 0 === yT ? void 0 : yT.kind)) return;
            go({
              kind: "core",
              core: XA(TT, gT)
            }), TT.baf2CoreRefresh || (0, Kz.o)()
          } else if ("baf2WrenchUndo" === TT) {
            const {
              baf2WrenchPos: TT,
              baf2WrenchBlock: IT
            } = oT;
            MT.gC(TT[0], TT[1], TT[2], IT)
          } else if ("baf2Toast" === TT) {
            const TT = oT;
            qT.heard(performance.now(), TT.baf2ToastMs), wT.show(TT)
          } else if ("baf2Area" === TT) mT.arrive(oT, null !== XT.get());
          else if ("baf2Quest" === TT) {
            const TT = oT;
            BT(!0 === TT.baf2QuestNuclear), hT.set(TT, function(TT, oT) {
              var IT, iT, zT, kT, WT;
              const XT = [];
              for (const [, , ST, , , , , , DT, LT] of TT.baf2QuestSteps) null !== ST && XT.push(ST), XT.push(...null !== DT && void 0 !== DT ? DT : [], ...null !== LT && void 0 !== LT ? LT : []);
              TT.baf2QuestReward && XT.push(TT.baf2QuestReward);
              const BT = null === (IT = TT.baf2QuestSide) || void 0 === IT ? void 0 : IT[2][2];
              BT && XT.push(BT), XT.push(...null !== (iT = null === (zT = TT.baf2QuestSide) || void 0 === zT ? void 0 : zT[2][8]) && void 0 !== iT ? iT : [], ...null !== (kT = null === (WT = TT.baf2QuestSide) || void 0 === WT ? void 0 : WT[2][9]) && void 0 !== kT ? kT : []);
              for (const [ST] of null !== (FT = TT.baf2QuestAlso) && void 0 !== FT ? FT : []) {
                var FT;
                XT.push(ST)
              }
              return oT(XT)
            }(TT, gT)), br(TT.baf2QuestTier)
          } else if ("baf2Route" === TT) ! function(TT, oT) {
            let {
              baf2RouteCells: IT,
              baf2RouteInto: iT
            } = oT;
            0 !== IT.length && iT ? TT.setRouteChevrons({
              cells: IT.map(((TT, oT) => {
                const [zT, , kT] = function(TT, oT, IT) {
                  const iT = IT + 1 < TT.length ? TT[IT + 1] : oT;
                  return [iT[0] - TT[IT][0], 0, iT[2] - TT[IT][2]]
                }(IT, iT, oT);
                return {
                  pos: TT,
                  way: [zT, kT]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : TT.setRouteChevrons(null)
          }(MT, oT);
          else if ("baf2QuestBook" === TT) hT.setBook(oT);
          else if ("baf2Stalls" === TT) xT.set(oT.baf2StallCells);
          else if (TT === SI.k) KT.onMoves(oT);
          else if (TT === SI.g) KT.onLines(oT);
          else if ("baf2Labels" === TT) vT.Am(oT);
          else if ("baf2DropMap" === TT) go({
            kind: "dropMap",
            dropMap: oT
          }), (0, Kz.o)();
          else if ("baf2Islands" === TT) {
            var VT, To;
            const TT = oT;
            if (rT.syncIslandEdits(TT.baf2IslandsAnswered), !TT.baf2IslandsOpen && "islands" !== (null === (VT = XT.get()) || void 0 === VT ? void 0 : VT.kind)) return;
            if (TT.baf2IslandsOpen) {
              var oo, Io;
              const oT = Mz.c.get("openEverythingMenuName"),
                IT = rT.sent() >= co,
                iT = "other" !== (Ao = {
                  askedAtMs: xo,
                  askSent: IT,
                  reaskedAtMs: Ko,
                  nowMs: Date.now(),
                  panel: null !== (oo = null === (Io = XT.get()) || void 0 === Io ? void 0 : Io.kind) && void 0 !== oo ? oo : null,
                  inGameMenu: Mz.c.get("openInGameMenuName"),
                  everythingMenu: null === oT ? null : oT === WI.q.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== TT.baf2IslandsFocusInvite
                }).everythingMenu && (!!Ao.focusInvite || "islands" === Ao.panel && "clientGame" === Ao.inGameMenu || !(Ao.nowMs - Ao.reaskedAtMs < fF) && (Ao.askSent && Ao.nowMs - Ao.askedAtMs < fF ? "core" === Ao.panel && "clientGame" === Ao.inGameMenu && null === Ao.everythingMenu : "shop" === Ao.everythingMenu || null === Ao.inGameMenu));
              if (IT && (xo = -1 / 0), Ko = -1 / 0, !iT) return void ro()
            }
            const IT = (zo = TT.baf2IslandsOpen, ko = "islands" === (null === (To = XT.get()) || void 0 === To ? void 0 : To.kind), So = Mo, Lo = Date.now(), zo && !ko && Lo - So < fF);
            go({
              kind: "islands",
              islands: TT,
              arrivedAtMs: Date.now(),
              backToCore: CF(XT.get())
            }), IT && (Mo = -1 / 0, Ko = Date.now(), rT.send(bT)), TT.baf2IslandsOpen && ("clientGame" !== Mz.c.get("openInGameMenuName") && (0, rz.i)(), (0, Kz.o)())
          } else if ("baf2CoopTransfer" === TT) {
            var io;
            const TT = oT;
            TT.baf2TransferOn ? (go({
              kind: "transfer",
              transfer: TT,
              arrivedAtMs: Date.now()
            }), (0, Kz.o)()) : "transfer" === (null === (io = XT.get()) || void 0 === io ? void 0 : io.kind) && (0, Kz.e)()
          } else "baf2IslandLeft" === TT ? (mT.dropHeld(), null !== XT.get() && wo(), "inventory" === Mz.c.get("openInGameMenuName") && (0, rz.i)()) : "baf2Arc" === TT ? Wo.Am(MT, oT) : "baf2Blade" === TT ? Xo.onBlade(MT, oT) : "baf2JetFlame" === TT ? Bo.Am(MT, oT) : "baf2GearPower" === TT && Fo.Am(oT);
          var zo, ko, So, Lo, Ao
        }
      };
      return Ro
    }
  },
  37489: (TT, oT, IT) => {
    function iT(TT, oT, IT) {
      const iT = new Set,
        zT = new ResizeObserver(IT),
        kT = () => {
          const oT = new Set(document.querySelectorAll(TT));
          let kT = !1;
          for (const TT of iT) oT.has(TT) || (zT.unobserve(TT), iT.delete(TT), kT = !0);
          for (const TT of oT) iT.has(TT) || (zT.observe(TT), WT.observe(TT, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), iT.add(TT));
          kT && IT()
        },
        WT = new MutationObserver((oT => {
          oT.some((TT => "attributes" === TT.type)) && IT(), oT.some((oT => function(TT, oT, IT) {
            if ("childList" !== TT.type) return !1;
            for (const iT of TT.addedNodes)
              if (iT instanceof Element && (iT.matches(oT) || iT.querySelector(oT))) return !0;
            for (const iT of TT.removedNodes)
              if (iT instanceof Element)
                for (const TT of IT)
                  if (iT.contains(TT)) return !0;
            return !1
          }(oT, TT, iT))) && kT()
        }));
      WT.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const XT of oT) zT.observe(XT);
      return window.addEventListener("resize", IT), kT(), IT(), () => {
        zT.disconnect(), WT.disconnect(), window.removeEventListener("resize", IT)
      }
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  37475: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      d: () => kT
    });
    const iT = new WeakMap;

    function zT(TT) {
      let oT = iT.get(TT);
      return oT || (oT = {
        hidden: TT.hidden,
        x: NaN,
        y: NaN
      }, iT.set(TT, oT)), oT
    }

    function kT(TT, oT) {
      const IT = zT(TT);
      IT.hidden !== oT && (IT.hidden = oT, TT.hidden = oT)
    }

    function WT(TT, oT, IT) {
      const iT = zT(TT);
      iT.x === oT && iT.y === IT || (iT.x = oT, iT.y = IT, TT.style.translate = `${oT}vw ${IT}vh`)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);