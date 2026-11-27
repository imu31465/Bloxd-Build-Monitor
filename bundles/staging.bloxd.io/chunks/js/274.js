export const id = 274;
export const ids = [274];
export const modules = {
  39686: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(39689);
    const tR = [0, 0, 0];
    class uR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR;
        this.pool = RR, this.origin = JR, this.count = 0, this.free = []
      }
      take() {
        var RR;
        const JR = null !== (RR = this.free.pop()) && void 0 !== RR ? RR : this.count++;
        return JR >= this.pool.hK && this.pool.grow(Math.max(2 * this.pool.hK, JR + 1)), this.hide(JR), JR
      }
      release(RR) {
        this.hide(RR), this.free.push(RR)
      }
      write(RR, JR, GR, tR) {
        const {
          records: uR
        } = this.pool, {
          origin: ZR
        } = this, qR = RR * yR.c;
        uR[qR] = JR - ZR[0], uR[qR + 1] = GR - ZR[1], uR[qR + 2] = tR - ZR[2], uR[qR + yR.f] = 0, this.pool.markDirty(RR)
      }
      hide(RR) {
        this.pool.records[RR * yR.c + yR.f] = 1, this.pool.markDirty(RR)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class ZR {
      constructor(RR, JR, GR) {
        this.api = RR, this.model = JR, this.initialCapacity = GR, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(RR) {
        let JR = this.kinds.get(RR);
        if (void 0 === JR) {
          const GR = this.api.createInstancePool({
            ...this.model,
            item: RR
          }, this.initialCapacity);
          null === GR || void 0 === GR || GR.setOrigin(this.origin[0], this.origin[1], this.origin[2]), JR = GR && new uR(GR, this.origin), this.kinds.set(RR, JR)
        }
        return JR
      }
      follow(RR) {
        const {
          origin: JR
        } = this;
        if (Math.abs(RR[0] - JR[0]) <= 512 && Math.abs(RR[1] - JR[1]) <= 512 && Math.abs(RR[2] - JR[2]) <= 512) return !1;
        JR[0] = Math.floor(RR[0]), JR[1] = Math.floor(RR[1]), JR[2] = Math.floor(RR[2]);
        for (const GR of this.kinds.values()) null === GR || void 0 === GR || GR.pool.setOrigin(JR[0], JR[1], JR[2]);
        return !0
      }
      commit() {
        for (const RR of this.kinds.values()) null === RR || void 0 === RR || RR.commit()
      }
      dispose() {
        for (const RR of this.kinds.values()) null === RR || void 0 === RR || RR.dispose();
        this.kinds.clear()
      }
    }
  },
  39700: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      g: () => qR,
      i: () => iR
    });
    const yR = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      tR = [0, 1, 2, 0, 2, 3],
      uR = [4, 5];

    function ZR(RR, JR, GR, yR, tR) {
      for (let ZR = 0; ZR < 6; ZR++) uR.includes(ZR) === tR && fR(RR, JR, GR, yR, ZR)
    }

    function qR(RR, JR, GR, yR) {
      for (let tR = 0; tR < 6; tR++) fR(RR, JR, GR, yR, tR)
    }

    function iR(RR, JR, GR, uR, ZR) {
      for (let qR = 0; qR < 6; qR++)
        for (const iR of [0, 1]) {
          const [fR, VR, KR] = [iR + 2, iR + 1, (iR + 3) % 4], wR = RR.length / 3;
          for (const [JR, tR] of [
              [iR, VR],
              [fR, VR],
              [fR, KR],
              [iR, KR]
            ])
            for (let iR = 0; iR < 3; iR++) {
              const fR = yR[3 * (4 * qR + JR) + iR],
                VR = yR[3 * (4 * qR + tR) + iR];
              RR.push((fR + (VR - fR) * ZR) * uR / 2 + GR[iR])
            }
          for (const RR of tR) JR.push(wR + RR)
        }
    }

    function fR(RR, JR, GR, uR, ZR) {
      let [qR, iR, fR] = GR, [VR, KR, wR] = uR;
      const rR = RR.length / 3;
      for (let tR = 4 * ZR; tR < 4 * ZR + 4; tR++) RR.push(yR[3 * tR] * VR / 2 + qR, yR[3 * tR + 1] * KR / 2 + iR, yR[3 * tR + 2] * wR / 2 + fR);
      for (const yR of tR) JR.push(rR + yR)
    }
  },
  39650: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => eU
    });
    var yR = GR(66);
    const tR = [{
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
      uR = 10;
    let ZR = !0;

    function qR() {
      return ZR
    }

    function iR(RR) {
      ZR = RR
    }
    const fR = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function VR() {
      return ZR ? tR.length : uR
    }

    function KR(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = tR[RR - 1]) || void 0 === GR ? void 0 : GR.reactorTier) && void 0 !== JR ? JR : 0
    }

    function wR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KR(RR) > 0;
      return GR && !ZR ? "hidden" : RR <= JR ? "open" : GR ? JR < 5 ? "hidden" : JR < uR ? "teaser" : "locked" : "locked"
    }

    function rR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: yR,
        n: tR
      } = LR(RR);
      return {
        key: JR[yR],
        params: {
          [yR]: GR ? String(tR) : tR
        }
      }
    }
    const eR = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function aR(RR, JR) {
      return KR(RR) > 0 && JR < uR
    }

    function LR(RR) {
      const JR = KR(RR);
      if (JR > 0) return {
        kind: "atomic",
        n: JR,
        short: `A${JR}`
      };
      const GR = function(RR) {
        return RR >= 6 && RR <= 10 ? RR - 6 + 1 : 0
      }(RR);
      return GR > 0 ? {
        kind: "stage",
        n: GR,
        short: `S${GR}`
      } : {
        kind: "tier",
        n: RR,
        short: String(RR)
      }
    }

    function nR(RR) {
      return tR[Math.max(1, Math.min(RR, tR.length)) - 1]
    }

    function UR(RR, JR) {
      return RR < JR ? function(RR) {
        var JR;
        return null !== (JR = tR[RR]) && void 0 !== JR ? JR : null
      }(RR) : null
    }
    const WR = "baf2coresubmit",
      AR = "baf2corebankpause",
      CR = "baf2coredeposit",
      XR = "baf2corechargepause";

    function MR(RR) {
      var JR;
      return null !== (JR = RR.baf2CoreOpen) && void 0 !== JR ? JR : uR
    }
    const BR = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function lR(RR) {
      return BR.includes(RR)
    }
    const pR = (RR, JR) => JR.map((JR => [JR, [RR]])),
      gR = Object.fromEntries([...pR("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...pR("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...pR("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...pR("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...pR("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...pR("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...pR("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...pR("Parts Bench", ["Focus Lens"]), ...pR("Machine Bench", ["Laser", "Collider"]), ...pR("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...pR("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...pR("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...pR("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...pR("Tool Bench", ["Mob Cage"]), ...pR("Tool Bench", ["Pocket Terminal"]), ...pR("Tool Bench", ["Comet Beacon"]), ...pR("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function bR(RR) {
      var JR;
      return null !== (JR = gR[RR]) && void 0 !== JR ? JR : ["Workbench"]
    }

    function vR(RR) {
      return bR(RR)[0]
    }
    tR.slice(1).map(((RR, JR) => `Core Tier ${JR+2}`));
    var OR = GR(5844);
    const xR = ["on", "hud", "off"];

    function NR(RR) {
      return "on" === RR
    }
    var DR = GR(377);
    const HR = "Mob Farm",
      oR = {
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
      cR = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      PR = {
        1: 20,
        2: 60,
        3: 120
      },
      IR = "baf2farmvoid",
      mR = "Caged ",
      zR = " Spawner Block";

    function SR(RR) {
      return `lifeform:${(0,DR.ve)(RR)}`
    }

    function jR(RR) {
      if (!RR) return null;
      if (RR.startsWith(mR)) {
        const JR = RR.slice(6);
        return cR.includes(JR) ? JR : null
      }
      if (RR.endsWith(zR)) {
        const JR = RR.slice(0, -14);
        return void 0 !== oR[JR] ? JR : null
      }
      return null
    }

    function dR(RR) {
      return !0 === RR.mobFarm
    }

    function ER(RR, JR) {
      return PR[oR[JR]] * RR.opMs / 1e3
    }
    const YR = new Map;
    const kR = "baf2islands",
      QR = "baf2islandnew";

    function FR(RR) {
      const JR = tR.findIndex((JR => JR.unlocks.includes(RR)));
      return JR < 0 ? 1 : JR + 1
    }

    function TR(RR) {
      return Math.floor(RR).toLocaleString("en-US")
    }
    var sR = GR(39585);
    const hR = "baf2terminaltake",
      RJ = "baf2terminalput",
      JJ = ["one", "stack", "fill"];

    function GJ(RR, JR, GR) {
      return `${hR} ${RR} ${JR} ${GR}`
    }

    function yJ(RR, JR, GR) {
      return `${RJ} ${RR} ${JR} ${GR}`
    }

    function tJ(RR) {
      return `${RJ} ${RR}`
    }
    const uJ = [
      [`${hR} `, "take"],
      [`${RJ} `, "put"]
    ];

    function ZJ(RR) {
      const JR = uJ.find((JR => {
        let [GR] = JR;
        return RR.startsWith(GR)
      }));
      if (!JR) return null;
      const [GR, yR] = JR, [tR, uR, ...ZR] = RR.slice(GR.length).trim().split(" "), qR = Number(tR);
      if (!Number.isSafeInteger(qR) || qR <= 0) return null;
      if ("put" === yR && void 0 === uR) return {
        kind: "putAll",
        seq: qR
      };
      const iR = function(RR) {
        if (JJ.includes(RR)) return RR;
        const JR = Number(RR);
        return /^\d+$/.test(RR) && Number.isSafeInteger(JR) && JR > 0 ? JR : null
      }(null !== uR && void 0 !== uR ? uR : "");
      return null === iR || 0 === ZR.length ? null : {
        kind: yR,
        seq: qR,
        mode: iR,
        item: ZR.join(" ")
      }
    }

    function qJ(RR, JR) {
      const GR = "number" === typeof RR ? RR : "one" === RR ? 1 : "stack" === RR ? 99 : JR;
      return Math.min(JR, GR)
    }

    function iJ(RR, JR) {
      const GR = RR => "number" === typeof RR ? RR : "one" === RR ? 1 : 99;
      return "fill" === RR || "fill" === JR ? "fill" : GR(RR) + GR(JR)
    }

    function fJ(RR, JR) {
      const GR = ZJ(RR),
        yR = ZJ(JR),
        tR = GR && yR ? function(RR, JR) {
          return "take" === RR.kind || "take" === JR.kind ? "take" === RR.kind && "take" === JR.kind && RR.item === JR.item ? {
            ...JR,
            mode: iJ(RR.mode, JR.mode)
          } : null : "putAll" === RR.kind || "putAll" === JR.kind ? {
            kind: "putAll",
            seq: JR.seq
          } : RR.item === JR.item ? {
            ...JR,
            mode: iJ(RR.mode, JR.mode)
          } : null
        }(GR, yR) : null;
      return tR ? "putAll" === (uR = tR).kind ? tJ(uR.seq) : "put" === uR.kind ? yJ(uR.seq, uR.mode, uR.item) : GJ(uR.seq, uR.mode, uR.item) : null;
      var uR
    }
    const VJ = "baf2rx";

    function KJ(RR, JR) {
      for (var GR = arguments.length, yR = new Array(GR > 2 ? GR - 2 : 0), tR = 2; tR < GR; tR++) yR[tR - 2] = arguments[tR];
      return [VJ, RR[0], RR[1], RR[2], JR, ...yR].join(" ")
    }
    const wJ = 2,
      rJ = 4,
      eJ = 8,
      aJ = 16,
      LJ = 32,
      nJ = 64,
      UJ = 128,
      WJ = 256,
      AJ = 512,
      CJ = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      XJ = [{
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
    const MJ = "Biomass",
      BJ = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function lJ(RR) {
      return {
        input: MJ,
        inputAmount: 1,
        output: RR,
        outputAmount: 1
      }
    }
    const pJ = "baf2synth",
      gJ = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      bJ = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      vJ = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      OJ = function(RR, JR) {
        return {
          input: RR,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: JR,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      xJ = function(RR, JR) {
        return {
          ...OJ(RR, JR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      NJ = bJ.map((RR => xJ(RR, "Biomass", 2))),
      DJ = {
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
          recipes: [OJ("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), OJ("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), OJ("Raw Gold", "Gold Grit", 2), OJ("Messy Stone", "Sand"), OJ("Gravel", "Sand"), OJ("Raw Voltite", "Voltite Dust", 2), OJ("Moonstone", "Moonstone Dust", 4), OJ("Wheat Seeds", "Fertiliser"), OJ("Raw Uranium", "Uranium Grit", 2), xJ("Mossy Messy Stone", "Sand"), ...NJ],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [OJ("Iron Grit", "Iron Bar"), OJ("Copper Grit", "Copper Bar"), OJ("Gold Grit", "Gold Bar"), OJ("Raw Iron", "Iron Bar"), OJ("Raw Copper", "Copper Bar"), OJ("Raw Gold", "Gold Bar"), OJ("Sand", "Glass"), OJ("Messy Stone", "Stone"), ...DR.Oc.map((RR => OJ(RR, "Charcoal", 1, 4))), OJ("Wheat", "Bread", 1, 2), ...bJ.map(((RR, JR) => xJ(RR, vJ[JR])))],
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
          recipes: [OJ("Iron Bar", "Iron Plate"), OJ("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [OJ("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [OJ("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [OJ("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), OJ("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), OJ("Raw Gold", "Gold Grit", 3), OJ("Raw Voltite", "Voltite Dust", 3), OJ("Messy Stone", "Sand", 2), OJ("Gravel", "Sand", 2), OJ("Moonstone", "Moonstone Dust", 6), OJ("Raw Uranium", "Uranium Grit", 3), xJ("Mossy Messy Stone", "Sand", 2), ...NJ],
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
          table: CJ
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [OJ("Coal", "Diamond", 1, 24), OJ("Voltite Dust", "Moonstone", 1, 12)],
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
        ...sR.d
      },
      HJ = {
        Crusher: [OJ("Spent Pellet", "Glow Dust"), OJ("Wheat Seeds", "Biomass"), OJ("Wheat", "Biomass"), OJ("Dead Bush", "Biomass"), OJ("Dusk Moss", "Biomass"), OJ("Rotten Flesh", "Biomass"), OJ("Bone", "Biomass", 2)],
        "Shatter Mill": [OJ("Spent Pellet", "Glow Dust"), OJ("Wheat Seeds", "Biomass"), OJ("Wheat", "Biomass"), OJ("Dead Bush", "Biomass"), OJ("Dusk Moss", "Biomass"), OJ("Rotten Flesh", "Biomass"), OJ("Bone", "Biomass", 2), ...DR.Oc.map((RR => OJ(RR, "Biomass")))],
        Smelter: [OJ("Biomass", "Fertiliser", 2)],
        Press: [OJ("Coal", "Graphite", 1, 4)]
      },
      oJ = "Power Coupler",
      cJ = "Advanced Coupler",
      PJ = "Nova Coupler",
      IJ = [{
        item: oJ,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: cJ,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: PJ,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const mJ = new Map;

    function zJ(RR) {
      var JR, GR;
      return null !== (JR = null !== (GR = RR.fuelSlot) && void 0 !== GR ? GR : RR.couplerSlot) && void 0 !== JR ? JR : null
    }

    function SJ(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!RR.couplable) throw new Error(`${RR.kind} takes no Power Coupler`);
      let GR = mJ.get(RR);
      GR || (GR = [], mJ.set(RR, GR));
      let yR = GR[JR];
      if (!yR) {
        var tR;
        const {
          divisor: uR,
          powerPerS: ZR
        } = IJ[JR - 1], qR = RR.opMs / uR, iR = void 0 !== RR.fluidMade || void 0 !== RR.cryoMade ? RR.powerPerOp : ZR * qR / 1e3;
        yR = {
          ...RR,
          fuelSlot: null,
          couplerSlot: null !== (tR = zJ(RR)) && void 0 !== tR ? tR : void 0,
          opMs: qR,
          powerPerOp: iR,
          coupled: !0
        }, JR > 1 && (yR = {
          ...yR,
          couplerLevel: JR
        }), GR[JR] = yR
      }
      return yR
    }
    const jJ = new Map;
    const dJ = new Map;

    function EJ(RR, JR) {
      if (null === JR || (GR = JR, !BJ.includes(GR))) return RR;
      var GR;
      let yR = dJ.get(JR);
      return yR || (yR = {
        ...RR,
        recipes: [lJ(JR)]
      }, dJ.set(JR, yR)), yR
    }

    function YJ(RR) {
      return !0 === RR.synth
    }
    const kJ = (RR, JR, GR, yR) => ({
        output: RR,
        outputAmount: JR,
        tier: GR,
        inputs: yR.map((RR => {
          let [JR, GR] = RR;
          return {
            item: JR,
            amount: GR
          }
        }))
      }),
      QJ = Object.fromEntries([kJ("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), kJ("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), kJ("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), kJ("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), kJ("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), kJ("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), kJ("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), kJ("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), kJ("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), kJ("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), kJ("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), kJ("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), kJ("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), kJ("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), kJ("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), kJ("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), kJ("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), kJ("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), kJ("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), kJ("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), kJ("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), kJ("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), kJ("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), kJ("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), kJ("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), kJ("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), kJ("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), kJ("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), kJ("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), kJ("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((RR => [RR.output, RR]))),
      FJ = new Map;

    function TJ(RR, JR) {
      let GR = DJ[RR];
      if (JR.atomic && (GR = function(RR) {
          const JR = HJ[RR.kind];
          if (!JR) return RR;
          let GR = jJ.get(RR.kind);
          if (!GR) {
            const yR = new Set(JR.map((RR => RR.input))),
              tR = RR.recipes.filter((RR => !yR.has(RR.input)));
            GR = {
              ...RR,
              recipes: [...tR, ...JR]
            }, jJ.set(RR.kind, GR)
          }
          return GR
        }(GR)), GR.synth) return EJ(GR, JR.taught);
      if (JR.coupled && GR.couplable) return SJ(GR, JR.level);
      const yR = GR.inputSlots && null !== JR.taught ? QJ[JR.taught] : void 0;
      if (!yR) return GR;
      const tR = `${RR}|${yR.output}`;
      let uR = FJ.get(tR);
      return uR || (uR = {
        ...GR,
        bench: yR
      }, FJ.set(tR, uR)), uR
    }
    const sJ = ["Diamond", "Moonstone"];

    function hJ(RR) {
      return new Set(RR.flatMap((RR => RR.bonus ? [RR.output, RR.bonus.item] : [RR.output])).filter((RR => !sJ.includes(RR))))
    }
    const RG = Object.values(DJ).flatMap((RR => RR.recipes));
    hJ(RG.filter((RR => !0 !== RR.nuclear))), hJ([...RG.filter((RR => !0 === RR.nuclear)), ...Object.values(HJ).flat()]);

    function JG(RR) {
      return null === RR.inputSlot && void 0 === RR.inputSlots && void 0 === RR.powerMade && void 0 === RR.fluidMade && !RR.treeCutter && void 0 === RR.table
    }

    function GG(RR) {
      return !0 === RR.treeCutter
    }
    const yG = ["Voltite Cell"];

    function tG(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = RR.fuels) || void 0 === GR ? void 0 : GR.some((RR => yG.includes(RR)))) && void 0 !== JR && JR
    }
    const uG = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(DR.Oc.map((RR => [RR, 8e3]))),
        ...Object.fromEntries(DR.Bd.map((RR => [RR, 2e3]))),
        "Voltite Cell": 12e4
      },
      ZG = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      qG = {
        "Uranium Deposit": 4e3
      };

    function iG(RR) {
      var JR;
      return null !== (JR = Object.keys(ZG).find((JR => ZG[JR] === RR))) && void 0 !== JR ? JR : null
    }

    function fG(RR) {
      return gJ.includes(RR)
    }

    function VG(RR) {
      return !0 !== RR.nuclear || qR()
    }
    var KG = GR(359);
    var wG = GR(5935),
      rG = GR(5859),
      eG = GR(5938),
      aG = GR(5927);
    const LG = "Reactor Controller",
      nG = "Reactor Port",
      UG = "Battery Cell",
      WG = ["fuel", "water", "waste"],
      AG = {
        fuel: nG,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      CG = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      XG = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      MG = "Reactor Frame",
      BG = "Reactor Glass",
      lG = {
        edge: [MG],
        cap: [BG, nG],
        wall: [BG, nG],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [LG]
      },
      pG = {
        edge: [UG],
        cap: [UG],
        wall: [UG],
        inside: [UG],
        ctrl: [UG]
      },
      gG = ["edge", "cap", "wall", "inside"],
      bG = ["Reactor Slag"];

    function vG(RR) {
      return bG.includes(OG(RR))
    }

    function OG(RR) {
      const JR = RR.indexOf("|");
      return JR < 0 ? RR : RR.slice(0, JR)
    }

    function xG(RR) {
      return OG(RR) === LG ? "reactor" : null
    }

    function NG(RR) {
      return OG(RR) !== nG ? null : RR.endsWith("|Water") ? "water" : RR.endsWith("|Waste") ? "waste" : "fuel"
    }

    function DG(RR) {
      const JR = NG(RR);
      return null === JR ? null : cG(AG[WG[(WG.indexOf(JR) + 1) % WG.length]], function(RR) {
        return RR.includes(HG)
      }(RR))
    }
    const HG = "|meta|rot1|Formed",
      oG = new Set([MG, BG, nG]);

    function cG(RR, JR) {
      var GR;
      const yR = OG(RR);
      if (!oG.has(yR)) return RR;
      if (yR !== nG) return JR ? yR + HG : yR;
      const tR = null !== (GR = NG(RR)) && void 0 !== GR ? GR : "fuel";
      return JR ? "fuel" === tR ? yR + HG : `${yR}${HG}|${"water"===tR?"Water":"Waste"}` : AG[tR]
    }

    function PG(RR, JR) {
      const GR = yy(RR, JR);
      if ("Air" === GR) return !1;
      const yR = "reactor" === RR ? lG : pG;
      return gG.some((RR => yR[RR].includes(GR))) || "reactor" === RR && bG.includes(GR)
    }

    function IG(RR) {
      return XG[RR]
    }

    function mG(RR) {
      var JR;
      return null !== (JR = CG[RR]) && void 0 !== JR ? JR : CG[1]
    }

    function zG(RR) {
      const [JR, , GR] = mG(RR);
      return [GR, 0, -JR]
    }

    function SG(RR, JR, GR, yR, tR, uR) {
      return {
        ctrl: [RR[0], RR[1], RR[2]],
        rot: CG[JR] ? JR : 1,
        w: GR,
        h: yR,
        d: tR,
        cu: uR[0],
        cv: uR[1]
      }
    }

    function jG(RR, JR) {
      return "reactor" === RR ? [Math.floor((JR - 1) / 2), 0] : [0, 0]
    }

    function dG(RR, JR, GR, yR, tR) {
      let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : RR.rot;
      if (GR === RR.w && yR === RR.h && tR === RR.d && uR === RR.rot) return RR;
      const [ZR] = jG(JR, RR.w);
      if (RR.cu === ZR && RR.cv <= 1) return SG(RR.ctrl, uR, GR, yR, tR, jG(JR, GR));
      const qR = (RR, JR) => Math.max(1, Math.min(JR, RR));
      return SG(RR.ctrl, uR, GR, yR, tR, [qR(RR.cu, GR - 2), 0 === RR.cv ? 0 : qR(RR.cv, yR - 2)])
    }
    const EG = 11,
      YG = 2 * EG + 1;
    new Uint8Array(YG * YG * YG);

    function kG(RR) {
      return RR.w * RR.h * RR.d
    }

    function QG(RR) {
      const JR = zG(RR.rot);
      return [RR.ctrl[0] - JR[0] * RR.cu, RR.ctrl[1] - RR.cv, RR.ctrl[2] - JR[2] * RR.cu]
    }

    function FG(RR) {
      return RR.cv * RR.d * RR.w + RR.cu
    }

    function TG(RR, JR) {
      const GR = JR % RR.w,
        yR = Math.floor(JR / RR.w) % RR.d;
      return [GR, Math.floor(JR / (RR.w * RR.d)), yR]
    }

    function sG(RR, JR) {
      const [GR, yR, tR] = TG(RR, JR), uR = QG(RR), ZR = mG(RR.rot), qR = zG(RR.rot);
      return [uR[0] + qR[0] * GR - ZR[0] * tR, uR[1] + yR, uR[2] + qR[2] * GR - ZR[2] * tR]
    }

    function hG(RR, JR) {
      const GR = QG(RR),
        yR = mG(RR.rot),
        tR = zG(RR.rot),
        uR = JR[0] - GR[0],
        ZR = JR[2] - GR[2],
        qR = uR * tR[0] + ZR * tR[2],
        iR = -(uR * yR[0] + ZR * yR[2]),
        fR = JR[1] - GR[1];
      return qR < 0 || qR >= RR.w || fR < 0 || fR >= RR.h || iR < 0 || iR >= RR.d ? -1 : (fR * RR.d + iR) * RR.w + qR
    }

    function Ry(RR, JR) {
      if (JR === FG(RR)) return "ctrl";
      const [GR, yR, tR] = TG(RR, JR), uR = 0 === yR || yR === RR.h - 1, ZR = Number(0 === GR || GR === RR.w - 1) + Number(uR) + Number(0 === tR || tR === RR.d - 1);
      return ZR >= 2 ? "edge" : 1 === ZR ? uR ? "cap" : "wall" : "inside"
    }

    function Jy(RR, JR) {
      const [GR, yR, tR] = TG(RR, JR);
      return 0 === GR || GR === RR.w - 1 || 0 === yR || yR === RR.h - 1 || 0 === tR || tR === RR.d - 1 ? -1 : ((yR - 1) * (RR.d - 2) + (tR - 1)) * (RR.w - 2) + (GR - 1)
    }

    function Gy(RR, JR) {
      const GR = RR.w - 2,
        yR = RR.d - 2,
        tR = JR % GR + 1,
        uR = Math.floor(JR / GR) % yR + 1;
      return ((Math.floor(JR / (GR * yR)) + 1) * RR.d + uR) * RR.w + tR
    }

    function yy(RR, JR) {
      const GR = OG(JR);
      return "reactor" === RR && GR === LG ? MG : GR
    }

    function ty(RR, JR, GR) {
      const yR = "ctrl" === JR ? OG(GR) : yy(RR, GR);
      return ("reactor" === RR ? lG : pG)[JR].includes(yR) ? "ok" : "Air" === yR ? "missing" : PG(RR, GR) ? "wrong" : "blocked"
    }

    function uy(RR, JR) {
      return "battery" === RR ? UG : "inside" === JR ? null : function(RR, JR) {
        if ("inside" === JR || "ctrl" === JR || "battery" === RR) return null;
        return "edge" === JR ? MG : BG
      }(RR, JR)
    }
    const Zy = {
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
      qy = "Collider",
      iy = "Laser",
      fy = "Star Alloy",
      Vy = "Glow Dust",
      Ky = [qy, "_Collider Focus"];

    function wy(RR) {
      return Ky.indexOf(OG(RR))
    }

    function ry(RR) {
      return OG(RR) === iy
    }

    function ey(RR) {
      return [
        [RR[0], RR[1], RR[2]],
        [RR[0], RR[1] + 1, RR[2]]
      ]
    }
    const ay = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function Ly(RR, JR, GR) {
      const yR = ay[JR];
      return [RR[0] + yR[0] * GR, RR[1], RR[2] + yR[2] * GR]
    }

    function ny(RR, JR) {
      if (JR[1] !== RR[1]) return null;
      const GR = JR[0] - RR[0],
        yR = JR[2] - RR[2];
      if (0 !== GR === (0 !== yR)) return null;
      const tR = Math.abs(GR + yR);
      if (tR > Zy.LASER_D) return null;
      return {
        dir: yR < 0 ? 0 : GR > 0 ? 1 : yR > 0 ? 2 : 3,
        xZ: tR
      }
    }

    function Uy(RR, JR, GR) {
      const yR = JR => Math.abs(RR[0] - JR[0]) <= 1 && Math.abs(RR[1] - JR[1]) <= 1;
      return yR(JR) || yR(GR)
    }

    function Wy(RR, JR) {
      return function(RR, JR, GR, yR) {
        return [0, 1, 2, 3].map((tR => {
          for (let uR = 1; uR <= Zy.LASER_D; uR++) {
            const ZR = Ly(RR, tR, uR);
            if (Uy([ZR[0], ZR[2]], JR, GR) || !yR(ZR)) return !1
          }
          return !0
        }))
      }(ey(RR)[1], JR.spawnXZ, JR.coreXZ, (RR => RR[1] >= wG.t && RR[1] < wG.t + wG.v && RR[0] >= JR.minXZ[0] && RR[0] <= JR.maxXZ[0] && RR[2] >= JR.minXZ[1] && RR[2] <= JR.maxXZ[1]))
    }
    const Ay = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function Cy(RR) {
      return Math.max(48 + 16 * RR, nR(RR).machineAllowance)
    }
    const Xy = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function My(RR) {
      const JR = RR.split("|")[0];
      return Xy.includes(JR) ? "Solar Panel" : JR === eG.c ? "Fluid Pipe" : wy(JR) >= 0 ? "Collider" : (GR = JR, Ay.includes(GR) ? JR : null);
      var GR
    }
    const By = "buildAFactory2Game:solarPanelDescription";
    const ly = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function py(RR, JR) {
      var GR;
      return null !== (GR = ly.find((GR => {
        var yR;
        return (null !== (yR = RR.level(GR)) && void 0 !== yR ? yR : 0) >= JR
      }))) && void 0 !== GR ? GR : null
    }
    const gy = "buildAFactory2Game:";
    let by = null;
    const vy = {
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
      Oy = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      xy = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      Ny = {
        "Loot Chest": `${gy}lookRuinChestName`
      };

    function Dy(RR, JR) {
      var GR, yR, tR;
      let uR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JR;
      if ("Solar Panel" === My(JR)) return {
        name: (0, DR.Ee)(RR.displayName("Solar Panel")),
        detail: By,
        detailItem: null
      };
      const ZR = JR.endsWith(" Ore"),
        iR = (by ??= new Set([...Object.keys((0, rG.h)()), ...Object.keys((0, eG.r)())].map((RR => RR.split("|")[0]))), by).has(JR),
        fR = ZR || iR ? null : function(RR) {
          var JR;
          return RR.endsWith(" Log") && !RR.startsWith("Barkless ") ? "lookLog" : RR.endsWith(" Sapling") ? "lookSapling" : RR.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (JR = vy[RR]) && void 0 !== JR ? JR : null
        }(JR);
      if (!RR.isBlock(JR) || !ZR && !iR && null === fR) return null;
      const VR = null !== (GR = Ny[JR]) && void 0 !== GR ? GR : (0, DR.Vb)(JR, null !== (yR = RR.displayName(uR)) && void 0 !== yR ? yR : RR.displayName(JR));
      if (null !== fR) return {
        name: VR,
        detail: `${gy}${fR}`,
        detailItem: null
      };
      const KR = null !== (tR = Oy[JR]) && void 0 !== tR ? tR : qR() ? xy[JR] : void 0;
      if (iR && void 0 !== KR) return {
        name: VR,
        detail: `${gy}${KR}`,
        detailItem: null
      };
      const wR = ZG[JR];
      if (void 0 !== wR) return {
        name: VR,
        detail: `${gy}lookDeposit`,
        detailItem: (0, DR.Vb)(wR, RR.displayName(wR))
      };
      const rR = RR.harvestLevel(JR);
      if (ZR && "rock" === RR.harvestType(JR) && 0 !== rR) {
        const JR = py(RR, null !== rR && void 0 !== rR ? rR : 0);
        if (JR === ly[0]) return {
          name: VR,
          detail: `${gy}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== JR) return {
          name: VR,
          detail: `${gy}lookPickaxe`,
          detailItem: (0, DR.Vb)(JR, RR.displayName(JR))
        }
      }
      return {
        name: VR,
        detail: (0, DR.Ee)(RR.description(JR)),
        detailItem: null
      }
    }

    function Hy(RR) {
      return RR < wG.t - 24
    }
    const oy = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const cy = "Wrench",
      Py = "Nova Wrench";

    function Iy(RR) {
      return RR === cy || RR === Py
    }
    const my = [...wG.S, "Belt Lift", "Belt Drop"];
    const zy = ["Belt Lift", "Belt Drop"],
      Sy = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function jy(RR) {
      return RR.split("|")[0]
    }

    function dy(RR) {
      const JR = /\|rot(\d)/.exec(RR);
      return JR ? Number(JR[1]) : 1
    }

    function Ey(RR) {
      return RR % 4 + 1
    }

    function Yy(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === JR && "" === GR ? RR : `${RR}|meta|rot${JR}${GR}`
    }

    function ky(RR) {
      return jy(RR) === wG.F ? (0, wG.ab)(RR) ? "gateRight" : "gateLeft" : (0, wG.fb)(RR)
    }

    function Qy(RR) {
      const JR = jy(RR),
        GR = dy(RR);
      if (wG.S.includes(JR)) return (0, wG.V)(JR, Ey(GR), null);
      if (JR === wG.l) return (0, wG.lb)(Ey(GR), (0, wG.eb)(RR));
      if (JR === wG.G) {
        const yR = Sy[(0, wG.fb)(RR)];
        return null === yR ? Yy(JR, Ey(GR)) : Yy(JR, GR, wG.K[yR])
      }
      return JR === wG.F ? (0, wG.ab)(RR) ? Yy(JR, Ey(GR)) : Yy(JR, GR, wG.r) : aG.d.includes(JR) && !zy.includes(JR) || fG(JR) ? Yy(JR, Ey(GR)) : null
    }

    function Fy(RR) {
      return aG.d.includes(RR) || fG(RR) || null !== My(RR)
    }

    function Ty(RR) {
      return "Solar Panel" === My(RR)
    }
    const sy = "buildAFactory2Game:",
      hy = {
        leftFront: `${sy}lookSplitDetail_leftFront`,
        frontRight: `${sy}lookSplitDetail_frontRight`,
        gateRight: `${sy}lookGateDetail_gateRight`
      };

    function Rt(RR, JR) {
      var GR;
      let yR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const tR = ky(RR),
        uR = null === tR ? null : `${sy}${tR.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${tR}`,
        ZR = null === tR ? null : null !== (GR = hy[tR]) && void 0 !== GR ? GR : null;
      if (Iy(JR) && yR) {
        const GR = jy(RR);
        return JR === Py && qR() && function(RR) {
          return my.includes(jy(RR))
        }(RR) ? {
          mode: uR,
          detail: ZR,
          next: `${sy}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: uR,
          detail: ZR,
          next: Fy(GR) && !Ty(GR) ? `${sy}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const iR = Iy(JR) ? Qy(RR) : null;
      if (null === iR) return {
        mode: uR,
        detail: ZR,
        next: null,
        nextState: null
      };
      const fR = ky(iR);
      return null === fR || dy(iR) !== dy(RR) ? {
        mode: uR,
        detail: ZR,
        next: `${sy}lookWrenchTurn`,
        nextState: null
      } : {
        mode: uR,
        detail: ZR,
        next: `${sy}lookWrenchNext`,
        nextState: `${sy}lookWrenchState_${fR}`
      }
    }
    const Jt = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const Gt = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function yt(RR) {
      return [0, 1, 2, 3].map((JR => 0 !== (RR & 1 << JR)))
    }

    function tt(RR) {
      const JR = [];
      for (let GR = 8; GR + 2 < RR.length; GR += 3) JR.push([RR[GR], RR[GR + 1], RR[GR + 2]]);
      return {
        focus: [RR[0], RR[1], RR[2]],
        lasers: yt(RR[3]),
        open: yt(RR[4]),
        live: yt(RR[5]),
        on: 1 === RR[6],
        state: Gt[RR[7]],
        blockers: JR
      }
    }
    const ut = "Arc Caster",
      Zt = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      qt = (Object.values(Zt), "Jet Chestplate"),
      it = "Nova Jet Chestplate",
      ft = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Vt = Object.values(ft);

    function Kt(RR, JR, GR) {
      return Math.min(function(RR) {
        return qR() && KR(RR) >= 5 ? 20 : 10
      }(GR), Math.floor(function(RR, JR) {
        return Math.max(0, RR) + (qR() ? Math.max(0, JR) : 0)
      }(RR, JR) / 5))
    }

    function wt(RR, JR, GR) {
      const yR = Kt(JR, GR, RR),
        tR = KR(RR),
        uR = (tR >= 3 ? 55 : tR >= 1 ? 50 : RR >= 8 ? 45 : 30) + yR,
        ZR = Math.max(100 + yR, 2 * uR);
      return {
        arcDamage: uR,
        arcPierce: RR >= 7 ? 2 : 1,
        arcChain: RR >= 10,
        barrierMax: (tR >= 4 ? 100 : tR >= 2 ? 90 : RR >= 9 ? 80 : RR >= 6 ? 60 : 40) + 5 * yR,
        barrierRegenPerS: tR >= 5 ? 20 : RR >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * yR,
        novaShieldRegenPerS: 32,
        bladeDamage: ZR,
        bladePunch: Math.round(.5 * ZR),
        forgeRank: yR
      }
    }
    const rt = {
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
    var et = GR(37942),
      Lt = GR(3498),
      nt = GR(3494),
      Ut = GR(25),
      Wt = GR(1800),
      At = GR(1163),
      Ct = GR.n(At);

    function Xt(RR) {
      return !0 === RR.field
    }
    const Mt = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function Bt(RR) {
      return Mt.has(RR) ? `buildAFactory2Game:itemPlural_${(0,DR.ve)(RR)}` : null
    }
    var lt = GR(1270),
      pt = GR(1468),
      gt = GR(2123),
      bt = GR(2105),
      vt = GR(1534),
      Ot = GR(37936),
      xt = GR(32),
      Nt = GR(37927);
    const Dt = "baf2QuestView",
      Ht = "baf2PlayerY",
      ot = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class ct {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = RR, this.view = {
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
      set(RR, JR) {
        var GR, yR, tR, uR, ZR, qR, iR, fR;
        const VR = JSON.stringify(RR.baf2QuestName) === JSON.stringify(this.view.name),
          KR = new Set(this.view.rows.filter((RR => RR.done)).map((RR => RR.id))),
          wR = new Set(this.view.rows.filter((RR => RR.justFinished)).map((RR => RR.id))),
          rR = RR.baf2QuestSide,
          eR = null !== rR && !0 === RR.baf2QuestSideFocus;
        let aR = !1,
          LR = 0;
        const nR = RR.baf2QuestSteps.map((RR => {
            const JR = Et(RR, ot.has(RR[0]) ? RR[0] : "" + LR++),
              GR = VR && JR.done && !KR.has(JR.id);
            return JR.justFinished = GR || VR && JR.done && wR.has(JR.id), aR ||= GR, JR
          })),
          UR = dt(nR);
        UR >= 0 && !eR && (nR[UR].current = !0);
        const WR = !VR && null !== RR.baf2QuestName,
          AR = JSON.stringify(rR && [rR[0], rR[1]]),
          CR = AR === JSON.stringify(null !== (GR = null === (yR = this.view.side) || void 0 === yR ? void 0 : yR.name) && void 0 !== GR ? GR : null),
          XR = null !== rR && !this.sidesSeen.has(AR);
        XR && this.sidesSeen.add(AR), this.serverTutorial = null !== (tR = RR.baf2QuestTutorial) && void 0 !== tR ? tR : "on", (null !== (uR = RR.baf2QuestTutorialSeq) && void 0 !== uR ? uR : 0) >= this.pickSeq && this.endPick();
        const MR = !VR || !CR || RR.baf2QuestTier !== this.view.tier;
        this.view = {
          name: RR.baf2QuestName,
          rows: nR,
          reward: RR.baf2QuestReward,
          goal: RR.baf2QuestGoal,
          pulse: this.view.pulse + (aR || WR ? 1 : 0),
          itemNames: JR,
          side: rR && {
            name: [rR[0], rR[1]],
            row: {
              ...Et(rR[2], "side"),
              current: eR
            },
            goal: null !== (ZR = rR[3]) && void 0 !== ZR ? ZR : null
          },
          sideCameUpAt: XR ? Date.now() : this.view.sideCameUpAt,
          tier: RR.baf2QuestTier,
          core: RR.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (qR = RR.baf2QuestAlso) && void 0 !== qR ? qR : [],
          depth: null !== (iR = RR.baf2QuestDepth) && void 0 !== iR ? iR : null,
          tutorial: null !== (fR = this.pickedTutorial) && void 0 !== fR ? fR : this.serverTutorial,
          tutorialKnown: !0
        }, this.JK(), aR && this.scheduleClear(), MR && this.requestBook()
      }
      setTutorial(RR) {
        return this.endPick(), this.pickedTutorial = RR, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.JK()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: RR
        }, this.JK(), this.pickSeq
      }
      onPlayerY(RR) {
        const JR = Math.floor(RR);
        JR !== this.playerY && (this.playerY = JR, this.view.depth && xt.n.JK(Ht, JR))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(RR) {
        this.view = {
          ...this.view,
          chapters: RR.baf2BookChapters
        }, this.JK()
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
            rows: this.view.rows.map((RR => RR.justFinished ? {
              ...RR,
              justFinished: !1
            } : RR))
          }, this.JK()
        }), 2400)
      }
      JK() {
        xt.n.JK(Dt, this.view, !0)
      }
    }

    function Pt(RR, JR) {
      return RR.sideCameUpAt > 0 && JR - RR.sideCameUpAt < 2400
    }

    function It(RR) {
      return (null === RR.name || mt(RR)) && null === RR.side && null !== RR.chapters
    }

    function mt(RR) {
      var JR;
      return "quest_forgeOngoing" === (null === (JR = RR.name) || void 0 === JR ? void 0 : JR[0])
    }

    function zt(RR) {
      return RR.filter((RR => !ot.has(RR.key)))
    }

    function St(RR) {
      return RR.key.startsWith("stepCraft")
    }

    function jt(RR, JR) {
      const GR = new Set,
        yR = RR.side ? [...RR.rows, RR.side.row] : RR.rows;
      for (const uR of yR)
        if (!uR.done) {
          !uR.item || JR && !St(uR) || GR.add(uR.item);
          for (const [RR, JR, yR] of null !== (tR = uR.chips) && void 0 !== tR ? tR : []) {
            var tR;
            JR < yR && GR.add(RR)
          }
        } return GR
    }

    function dt(RR) {
      const JR = RR.findIndex((RR => !RR.done && !RR.away));
      return JR >= 0 ? JR : RR.findIndex((RR => !RR.done))
    }

    function Et(RR, JR) {
      let [GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR] = RR;
      return {
        id: JR,
        key: GR,
        params: yR,
        item: tR,
        amount: uR,
        total: ZR,
        done: qR,
        chips: null !== iR && void 0 !== iR ? iR : null,
        current: !1,
        away: !0 === fR,
        madeFor: null !== VR && void 0 !== VR ? VR : [],
        also: null !== KR && void 0 !== KR ? KR : [],
        justFinished: !1
      }
    }
    const Yt = "baf2QuestItems",
      kt = new Set;
    let Qt = new Set,
      Ft = null;

    function Tt(RR) {
      const JR = NR(RR.tutorial),
        GR = JR ? jt(RR, !0) : kt;
      "inventory" === Ut.d.get("openInGameMenuName") ? (Ft = null, (0, Nt.t)(GR)) : Ft = GR;
      const yR = JR ? jt(RR, !1) : kt;
      (0, Ot.c)(yR, Qt) || (Qt = yR, xt.n.JK(Yt, Qt))
    }

    function st() {
      return (0, vt.b)(Yt, (() => Qt))
    }
    var ht = GR(39659);
    const Ru = [{
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

    function Ju(RR, JR) {
      return [`Deposit Seed (${RR})`, {
        item: ZG[`${RR} Deposit`],
        amount: JR
      }]
    }
    const Gu = Object.fromEntries([Ju("Coal", 8), Ju("Iron", 8), Ju("Copper", 8), Ju("Gold", 6), Ju("Voltite", 4), Ju("Uranium", 4)]),
      yu = "Relay Coil",
      tu = new Map;

    function uu(RR) {
      let JR = tu.get(RR);
      if (!JR) {
        const GR = Math.max(1, RR);
        JR = Ru.filter((RR => {
          var JR;
          return GR >= RR.fromTier && GR <= (null !== (JR = RR.untilTier) && void 0 !== JR ? JR : 1 / 0)
        })).map((RR => RR.later && GR >= RR.later.tier ? {
          ...RR,
          weight: RR.later.weight
        } : RR)), tu.set(RR, JR)
      }
      return JR
    }

    function Zu(RR) {
      return uu(RR).some((RR => {
        let {
          item: JR
        } = RR;
        return JR === yu
      }))
    }

    function qu(RR) {
      return RR.startsWith("Deposit Seed (")
    }

    function iu(RR, JR) {
      const GR = uu(RR);
      return JR ? GR.filter((RR => JR(RR.item))) : GR
    }

    function fu(RR) {
      return RR.reduce(((RR, JR) => RR + JR.weight), 0)
    }

    function Vu(RR, JR) {
      const GR = iu(RR, JR),
        yR = fu(GR);
      return GR.map((RR => ({
        find: RR,
        chance: RR.weight / yR
      })))
    }
    const Ku = 6e4,
      wu = new Intl.NumberFormat("en-US");

    function ru(RR, JR) {
      const GR = RR >= 10 ? Math.round(RR) : Math.round(10 * RR) / 10;
      return 0 === GR ? "0" : `${JR}${wu.format(GR)}`
    }

    function eu(RR) {
      return RR < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? wu.format(RR) : RR < 1e6 ? `${RR<1e5?Math.floor(RR/100)/10:Math.floor(RR/1e3)}k` : Math.floor(RR / 1e5) / 10 + "M"
    }

    function au(RR) {
      return RR < 0 ? "\u2212" + -RR : String(RR)
    }

    function Lu(RR, JR) {
      const GR = Math.max(1, Math.round(JR));
      if (GR < 60) return RR("buildAFactory2Game:durationSeconds", {
        seconds: String(GR)
      });
      const yR = Math.round(GR / 60);
      if (yR < 60) return RR("buildAFactory2Game:durationMinutes", {
        minutes: String(yR)
      });
      const tR = String(Math.floor(yR / 60));
      return yR % 60 === 0 ? RR("buildAFactory2Game:durationWholeHours", {
        hours: tR
      }) : RR("buildAFactory2Game:durationHours", {
        hours: tR,
        minutes: String(yR % 60)
      })
    }
    var nu = GR(39664),
      Uu = GR(1378);

    function Wu(RR, JR) {
      return null !== RR && RR > JR + 1
    }

    function Au(RR) {
      const JR = 100 * RR;
      return String(JR <= 0 || JR >= 1 ? Math.round(JR) : Math.max(.1, Math.round(10 * JR) / 10))
    }

    function Cu(RR) {
      let {
        item: JR,
        amount: GR
      } = RR;
      return (0, Uu.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, Uu.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, Uu.jsx)(gt.b, {
            itemName: JR,
            amount: 0
          })
        }), GR > 1 && (0, Uu.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", GR]
        })]
      })
    }

    function Xu(RR) {
      let {
        label: JR,
        names: GR
      } = RR;
      const [tR, uR] = (0, yR.useState)(!1), ZR = GR.join(" / ");
      return (0, Uu.jsxs)(Uu.Fragment, {
        children: [(0, Uu.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: ZR,
          "aria-expanded": tR,
          onClick: () => {
            uR(!tR)
          },
          children: JR
        }), tR && (0, Uu.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: ZR
        })]
      })
    }

    function Mu(RR) {
      let {
        tier: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)(), {
        key: yR,
        params: tR
      } = rR(JR, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), uR = GR(`buildAFactory2Game:${yR}`, tR);
      return (0, Uu.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, Uu.jsx)(pt.d, {
          name: "lock"
        }), uR]
      })
    }
    const Bu = (0, yR.createContext)(null);

    function lu() {
      const {
        t: RR
      } = (0, lt.A)(), JR = (0, yR.useContext)(Bu);
      return (0, yR.useEffect)((() => null === JR || void 0 === JR ? void 0 : JR()), [JR]), (0, Uu.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: RR("buildAFactory2Game:recipeForQuest"),
        "aria-label": RR("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function pu(RR) {
      let {
        title: JR,
        count: GR,
        children: tR,
        startOpen: uR = !0
      } = RR;
      const {
        t: ZR
      } = (0, lt.A)(), [qR, iR] = (0, yR.useState)((() => uR && !(0, nu.d)())), [fR, VR] = (0, yR.useState)(0), KR = (0, yR.useCallback)((() => (VR((RR => RR + 1)), () => {
        VR((RR => RR - 1))
      })), []);
      return (0, Uu.jsxs)("div", {
        className: Ct()("Baf2Recipes", {
          Open: qR
        }),
        children: [(0, Uu.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            iR(!qR)
          },
          "aria-expanded": qR,
          children: [ZR("buildAFactory2Game:recipesToggle", {
            title: JR,
            count: String(GR)
          }), (0, Uu.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: qR ? "\u25be" : "\u25b8"
          })]
        }), qR && (0, Uu.jsxs)(Bu.Provider, {
          value: KR,
          children: [(0, Uu.jsx)("ul", {
            className: "Baf2RecipeList",
            children: tR
          }), fR > 0 && (0, Uu.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, Uu.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), ZR("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const gu = "buildAFactory2Game:",
      bu = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const vu = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      Ou = {
        "Uranium Grit": uR,
        "Raw Uranium": uR
      };

    function xu(RR) {
      var JR;
      return null !== (JR = Ou[RR]) && void 0 !== JR ? JR : Math.max(FR(RR), vu[RR] ? FR(vu[RR]) : 1, function(RR) {
        const JR = tR.findIndex((JR => JR.cost.some((JR => JR.item === RR))));
        return JR > uR ? JR : 1
      }(RR))
    }

    function Nu(RR, JR) {
      return Du(JR) ? xu(JR) : function(RR) {
        if (bu.has(RR)) return 1;
        const JR = tR.findIndex((JR => JR.newDeposits.some((JR => {
          let {
            block: GR
          } = JR;
          return GR === RR
        }))));
        return JR < 0 ? 1 : JR + 1
      }(RR)
    }

    function Du(RR) {
      return RR in Ou || KR(xu(RR)) > 0
    }

    function Hu(RR, JR) {
      return TJ(RR, {
        coupled: !1,
        taught: null,
        atomic: qR() && JR >= 11
      }).recipes
    }

    function ou(RR, JR) {
      const GR = wR(RR, JR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KR(RR) > 0);
      return "open" === GR || "locked" === GR
    }

    function cu(RR, JR) {
      return RR.map(((RR, GR) => ({
        value: RR,
        idx: GR,
        tier: JR(RR)
      }))).sort(((RR, JR) => RR.tier - JR.tier || RR.idx - JR.idx)).map((RR => {
        let {
          value: JR
        } = RR;
        return JR
      }))
    }

    function Pu(RR, JR, GR) {
      const yR = wR(RR, JR);
      if ("hidden" === yR || "open" === yR) return null;
      if ("teaser" === yR) return {
        tag: {
          translationKey: `${gu}${GR?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${gu}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const tR = rR(RR, {
          tier: GR ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        uR = rR(RR, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${gu}${tR.key}`,
          params: tR.params
        },
        reason: {
          translationKey: `${gu}${uR.key}`,
          params: uR.params
        }
      }
    }

    function Iu(RR) {
      return !qu(RR)
    }

    function mu(RR) {
      let {
        seconds: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)();
      return (0, Uu.jsx)(pu, {
        title: GR("buildAFactory2Game:recipesCuts", {
          seconds: JR
        }),
        count: 1,
        children: (0, Uu.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Uu.jsx)(Cu, {
            item: "Maple Sapling",
            amount: 1
          }), (0, Uu.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Uu.jsx)(Cu, {
            item: "Maple Log",
            amount: 1
          }), (0, Uu.jsx)("span", {
            className: "Baf2RecipeName",
            children: GR("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function zu(RR) {
      let {
        fertilised: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)();
      return (0, Uu.jsxs)(pu, {
        title: GR("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, Uu.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Uu.jsx)(Cu, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Uu.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Uu.jsx)(Cu, {
            item: "Wheat",
            amount: 1
          }), (0, Uu.jsx)(Cu, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Uu.jsx)("span", {
            className: "Baf2RecipeName",
            children: GR("buildAFactory2Game:recipeField")
          })]
        }), (0, Uu.jsxs)("li", {
          className: Ct()("Baf2Recipe", {
            InUse: JR
          }),
          children: [(0, Uu.jsx)(Cu, {
            item: "Fertiliser",
            amount: 1
          }), (0, Uu.jsx)("span", {
            className: "Baf2RecipeName",
            children: GR("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function Su(RR) {
      let {
        tier: JR,
        seconds: GR
      } = RR;
      const {
        t: yR
      } = (0, lt.A)(), tR = function(RR) {
        return RR >= 5 ? XJ : CJ
      }(JR);
      return (0, Uu.jsx)(pu, {
        title: yR("buildAFactory2Game:recipesBringsUp", {
          seconds: GR
        }),
        count: tR.length,
        children: tR.map((RR => {
          let {
            item: JR,
            chance: GR
          } = RR;
          return (0, Uu.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Uu.jsx)(Cu, {
              item: JR,
              amount: 1
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, ht.f)(yR, JR)
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: yR("buildAFactory2Game:recipeChance", {
                percent: Au(GR)
              })
            })]
          }, JR)
        }))
      })
    }

    function ju(RR) {
      let {
        tier: JR,
        seconds: GR,
        noSeeds: yR
      } = RR;
      const {
        t: tR
      } = (0, lt.A)(), uR = st(), ZR = Vu(JR, yR ? Iu : void 0), qR = yR && Vu(JR).length > ZR.length, iR = Zu(JR);
      return (0, Uu.jsxs)(pu, {
        title: tR("buildAFactory2Game:recipesRecycles", {
          seconds: GR
        }),
        count: ZR.length,
        children: [ZR.map((RR => {
          let {
            find: JR,
            chance: GR
          } = RR;
          return (0, Uu.jsxs)("li", {
            className: "Baf2Recipe",
            children: [uR.has(JR.item) && (0, Uu.jsx)(lu, {}), (0, Uu.jsx)(Cu, {
              item: JR.item,
              amount: JR.amount
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, ht.f)(tR, JR.item)
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: tR("buildAFactory2Game:recipeChance", {
                percent: Au(GR)
              })
            })]
          }, JR.item)
        })), qR && (0, Uu.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Uu.jsx)("span", {
            className: "Baf2RecipeName",
            children: tR("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), iR && (0, Uu.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Uu.jsx)("span", {
            className: "Baf2RecipeName",
            children: tR("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function du(RR) {
      let {
        tier: JR,
        seconds: GR
      } = RR;
      const {
        t: yR
      } = (0, lt.A)(), tR = Object.entries(Gu).filter((RR => {
        let [, {
          item: GR
        }] = RR;
        return ou(xu(GR), JR, Du(GR))
      }));
      return (0, Uu.jsx)(pu, {
        title: yR("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: GR
        }),
        count: tR.length,
        children: tR.map((RR => {
          let [JR, {
            item: GR,
            amount: tR
          }] = RR;
          return (0, Uu.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Uu.jsx)(Cu, {
              item: JR,
              amount: 1
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Uu.jsx)(Cu, {
              item: GR,
              amount: tR
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, ht.f)(yR, GR)
            })]
          }, JR)
        }))
      })
    }

    function Eu(RR) {
      let {
        tier: JR,
        seconds: GR
      } = RR;
      const {
        t: yR
      } = (0, lt.A)(), tR = st(), uR = cu(Object.entries(ZG).filter((RR => {
        let [GR, yR] = RR;
        return ou(Nu(GR, yR), JR, Du(yR))
      })), (RR => {
        let [JR, GR] = RR;
        return Nu(JR, GR)
      }));
      return (0, Uu.jsx)(pu, {
        title: yR("buildAFactory2Game:recipesDigs", {
          seconds: GR
        }),
        count: uR.length,
        children: uR.map((RR => {
          let [GR, uR] = RR;
          const ZR = Nu(GR, uR),
            qR = ZR > JR ? ZR : null,
            iR = qG[GR],
            fR = null === qR && tR.has(uR);
          return (0, Uu.jsxs)("li", {
            className: Ct()("Baf2Recipe", {
              Locked: null !== qR,
              Far: Wu(qR, JR)
            }),
            children: [fR && (0, Uu.jsx)(lu, {}), (0, Uu.jsx)(Cu, {
              item: GR,
              amount: 1
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Uu.jsx)(Cu, {
              item: uR,
              amount: 1
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, ht.f)(yR, uR)
            }), void 0 !== iR && (0, Uu.jsx)("span", {
              className: "Baf2RecipeMore",
              children: yR("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / iR)
              })
            }), null !== qR && (0, Uu.jsx)(Mu, {
              tier: qR
            })]
          }, GR)
        }))
      })
    }

    function Yu(RR) {
      var JR;
      let {
        def: GR,
        seconds: yR
      } = RR;
      const {
        t: tR
      } = (0, lt.A)();
      return (0, Uu.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Uu.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (JR = GR.fuels) && void 0 !== JR ? JR : []).map((RR => (0, Uu.jsx)(Cu, {
            item: RR,
            amount: 1
          }, RR))), (0, Uu.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Uu.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Uu.jsx)(pt.d, {
              name: "bolt"
            }), tR("buildAFactory2Game:recipePower", {
              power: TR(GR.powerMade),
              seconds: yR
            })]
          })]
        })
      })
    }

    function ku(RR) {
      let {
        def: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)();
      return (0, Uu.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Uu.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Uu.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Uu.jsx)(pt.d, {
              name: "bolt"
            }), GR("buildAFactory2Game:recipeMixer", {
              cryo: ru((0, sR.E)(JR, JR.cryoMade), "")
            })]
          })
        })
      })
    }

    function Qu(RR) {
      let {
        def: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)();
      return (0, Uu.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Uu.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Uu.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Uu.jsx)(pt.d, {
              name: "bolt"
            }), GR("buildAFactory2Game:recipeCondenser", {
              power: ru((0, sR.E)(JR, JR.powerPerOp), ""),
              water: ru((0, sR.E)(JR, JR.fluidMade), "")
            })]
          })
        })
      })
    }

    function Fu(RR) {
      let {
        kind: JR,
        def: GR,
        input: yR,
        tier: tR,
        noSeeds: uR = !1
      } = RR;
      const ZR = String(GR.opMs / 1e3);
      return GG(GR) ? (0, Uu.jsx)(mu, {
        seconds: ZR
      }) : GR.field ? (0, Uu.jsx)(zu, {
        fertilised: null !== yR
      }) : GR.table ? (0, Uu.jsx)(Su, {
        tier: tR,
        seconds: ZR
      }) : GR.recycles ? (0, Uu.jsxs)(Uu.Fragment, {
        children: [(0, Uu.jsx)(ju, {
          tier: tR,
          seconds: ZR,
          noSeeds: uR
        }), (0, Uu.jsx)(du, {
          tier: tR,
          seconds: ZR
        })]
      }) : JG(GR) ? (0, Uu.jsx)(Eu, {
        tier: tR,
        seconds: ZR
      }) : void 0 !== GR.fluidMade ? (0, Uu.jsx)(Qu, {
        def: GR
      }) : void 0 !== GR.cryoMade ? (0, Uu.jsx)(ku, {
        def: GR
      }) : void 0 !== GR.powerMade ? (0, Uu.jsx)(Yu, {
        def: GR,
        seconds: ZR
      }) : (0, Uu.jsx)(Tu, {
        kind: JR,
        input: yR,
        tier: tR,
        seconds: ZR
      })
    }

    function Tu(RR) {
      let {
        kind: JR,
        input: GR,
        tier: yR,
        seconds: tR
      } = RR;
      const {
        t: uR
      } = (0, lt.A)(), ZR = st(), qR = cu(function(RR) {
        const JR = new Map;
        for (const tR of RR) {
          var GR, yR;
          const RR = [tR.output, tR.outputAmount, tR.inputAmount, null === (GR = tR.bonus) || void 0 === GR ? void 0 : GR.item, null === (yR = tR.bonus) || void 0 === yR ? void 0 : yR.chance].join("|"),
            uR = JR.get(RR);
          uR ? uR.inputs.push(tR.input) : JR.set(RR, {
            inputs: [tR.input],
            inputAmount: tR.inputAmount,
            output: tR.output,
            outputAmount: tR.outputAmount,
            bonus: tR.bonus
          })
        }
        return [...JR.values()]
      }(Hu(JR, yR).filter(VG)), (RR => xu(RR.output))).filter((RR => ou(xu(RR.output), yR, Du(RR.output))));
      return (0, Uu.jsx)(pu, {
        title: uR("buildAFactory2Game:recipesEach", {
          seconds: tR
        }),
        count: qR.length,
        children: qR.map((RR => {
          const JR = null !== GR && RR.inputs.includes(GR),
            tR = RR.inputs.length > 3 ? [JR ? GR : RR.inputs[0]] : RR.inputs,
            qR = xu(RR.output) > yR ? xu(RR.output) : null,
            iR = null === qR && ZR.has(RR.output);
          return (0, Uu.jsxs)("li", {
            className: Ct()("Baf2Recipe", {
              InUse: JR,
              Locked: null !== qR,
              Far: Wu(qR, yR)
            }),
            children: [iR && (0, Uu.jsx)(lu, {}), tR.map(((JR, GR) => (0, Uu.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [GR > 0 && (0, Uu.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, Uu.jsx)(Cu, {
                item: JR,
                amount: RR.inputAmount
              })]
            }, JR))), tR.length < RR.inputs.length && (0, Uu.jsx)(Xu, {
              label: uR("buildAFactory2Game:recipeMore", {
                count: String(RR.inputs.length - tR.length)
              }),
              names: RR.inputs.filter((RR => !tR.includes(RR))).map((RR => (0, ht.f)(uR, RR)))
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Uu.jsx)(Cu, {
              item: RR.output,
              amount: RR.outputAmount
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, ht.f)(uR, RR.output)
            }), RR.bonus && (0, Uu.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [uR("buildAFactory2Game:recipeBonus", {
                percent: Au(RR.bonus.chance)
              }), (0, Uu.jsx)(Cu, {
                item: RR.bonus.item,
                amount: 1
              })]
            }), null !== qR && (0, Uu.jsx)(Mu, {
              tier: qR
            })]
          }, `${RR.output}|${RR.inputs[0]}`)
        }))
      })
    }

    function su(RR) {
      let {
        taught: JR,
        tier: GR
      } = RR;
      const {
        t: yR
      } = (0, lt.A)(), tR = st(), uR = cu(Object.values(QJ), (RR => RR.tier)).filter((RR => ou(RR.tier, GR)));
      return (0, Uu.jsx)(pu, {
        title: yR("buildAFactory2Game:benchCanMake"),
        count: uR.length,
        startOpen: !1,
        children: uR.map((RR => {
          const uR = RR.tier > GR,
            ZR = !uR && tR.has(RR.output);
          return (0, Uu.jsxs)("li", {
            className: Ct()("Baf2Recipe", {
              InUse: RR.output === JR,
              Locked: uR,
              Far: Wu(uR ? RR.tier : null, GR)
            }),
            children: [ZR && (0, Uu.jsx)(lu, {}), (0, Uu.jsx)(Cu, {
              item: RR.output,
              amount: RR.outputAmount
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, ht.f)(yR, RR.output)
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), RR.inputs.map((RR => (0, Uu.jsx)(Cu, {
              item: RR.item,
              amount: RR.amount
            }, RR.item))), uR && (0, Uu.jsx)(Mu, {
              tier: RR.tier
            })]
          }, RR.output)
        }))
      })
    }
    var hu, RZ, JZ, GZ, yZ;
    const tZ = DJ.Generator,
      uZ = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      ZZ = 1e3 * (null !== (hu = tZ.powerMade) && void 0 !== hu ? hu : 0) / tZ.opMs,
      qZ = Math.min(...(null !== (RZ = tZ.fuels) && void 0 !== RZ ? RZ : []).map((RR => uG[RR]))) / 1e3,
      iZ = DJ["Volt Engine"],
      fZ = 1e3 * (null !== (JZ = iZ.powerMade) && void 0 !== JZ ? JZ : 0) / iZ.opMs,
      VZ = uG[null !== (GZ = null === (yZ = iZ.fuels) || void 0 === yZ ? void 0 : yZ[0]) && void 0 !== GZ ? GZ : ""] / 1e3;

    function KZ(RR) {
      let {
        item: JR,
        label: GR,
        value: yR,
        note: tR,
        dim: uR
      } = RR;
      return (0, Uu.jsxs)("li", {
        className: Ct()("Baf2PowerRow", {
          Dim: uR
        }),
        children: [(0, Uu.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, Uu.jsx)(gt.b, {
            itemName: JR,
            amount: 0
          })
        }), (0, Uu.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, Uu.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: GR
          }), tR && (0, Uu.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: tR
          })]
        }), (0, Uu.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: yR
        })]
      })
    }

    function wZ(RR, JR, GR, yR) {
      var tR;
      const uR = void 0 === yR ? DJ[RR] : function(RR, JR) {
          if (null === JR) return RR;
          let GR = YR.get(JR);
          return GR || (GR = {
            ...RR,
            powerPerOp: ER(RR, JR),
            farmMob: JR
          }, YR.set(JR, GR)), GR
        }(DJ[RR], yR),
        ZR = JR && uR.couplable ? SJ(uR, GR) : uR;
      return 1e3 * (null !== (tR = ZR.powerPerOp) && void 0 !== tR ? tR : 0) / ZR.opMs
    }

    function rZ(RR) {
      var JR, GR, yR, tR, uR, ZR, qR, iR;
      let {
        message: fR
      } = RR;
      const {
        t: VR
      } = (0, lt.A)(), KR = (RR, JR) => VR("buildAFactory2Game:powerPerSecond", {
        rate: ru(RR, JR)
      }), [wR, rR] = fR.baf2PowerGenerators, eR = fR.baf2PowerGeneratorFuel, aR = fR.baf2PowerSunPanels, LR = null !== (JR = fR.baf2PowerSunShare) && void 0 !== JR ? JR : 1, nR = fR.baf2PowerVaults, UR = fR.baf2PowerUsers, [WR, AR] = null !== (GR = fR.baf2PowerEngines) && void 0 !== GR ? GR : [0, 0], CR = null !== (yR = fR.baf2PowerEngineCells) && void 0 !== yR ? yR : 0, XR = null !== (tR = fR.baf2PowerPads) && void 0 !== tR ? tR : 0, MR = null !== (uR = fR.baf2PowerCharge) && void 0 !== uR ? uR : 0, [BR, lR] = null !== (ZR = fR.baf2PowerReactors) && void 0 !== ZR ? ZR : [0, 0], [pR, gR] = null !== (qR = fR.baf2PowerBatteries) && void 0 !== qR ? qR : [0, 0];
      let bR = VR("buildAFactory2Game:powerEngineCells", {
        amount: String(CR)
      });
      CR > 0 && AR > 0 && (bR = VR("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(CR),
        time: Lu(VR, CR * VZ / AR)
      }));
      let vR = VR("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(eR)
      });
      eR > 0 && rR > 0 && (vR = VR("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(eR),
        time: Lu(VR, eR * qZ / rR)
      }));
      const OR = wR + WR + aR + BR;
      return (0, Uu.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, Uu.jsxs)("section", {
          children: [(0, Uu.jsxs)("h3", {
            children: [VR("buildAFactory2Game:powerMaking"), (0, Uu.jsx)("span", {
              children: KR(fR.baf2PowerMadePerS, "+")
            })]
          }), (0, Uu.jsxs)("ul", {
            children: [0 === OR && (0, Uu.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: VR("buildAFactory2Game:powerNoMakers")
            }), wR > 0 && (0, Uu.jsx)(KZ, {
              item: "Generator",
              label: `${(0,ht.f)(VR,"Generator")} \xd7${wR}`,
              note: `${VR("buildAFactory2Game:powerRunning",{amount:String(rR)})} \xb7 ${vR}`,
              value: KR(rR * ZZ, "+"),
              dim: 0 === rR
            }), WR > 0 && (0, Uu.jsx)(KZ, {
              item: "Volt Engine",
              label: `${(0,ht.f)(VR,"Volt Engine")} \xd7${WR}`,
              note: `${VR("buildAFactory2Game:powerRunning",{amount:String(AR)})} \xb7 ${bR}`,
              value: KR(AR * fZ, "+"),
              dim: 0 === AR
            }), aR > 0 && (0, Uu.jsx)(KZ, {
              item: "Solar Panel",
              label: `${(0,ht.f)(VR,"Solar Panel")} \xd7${aR}`,
              note: VR(LR < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: KR(4 * aR * LR, "+")
            }), BR > 0 && (0, Uu.jsx)(KZ, {
              item: "Reactor Frame",
              label: `${VR("buildAFactory2Game:powerReactors")} \xd7${BR}`,
              note: VR("buildAFactory2Game:powerRunning", {
                amount: String(lR)
              }),
              value: KR(null !== (iR = fR.baf2PowerReactorPerS) && void 0 !== iR ? iR : 0, "+"),
              dim: 0 === lR
            })]
          })]
        }), (0, Uu.jsxs)("section", {
          children: [(0, Uu.jsxs)("h3", {
            children: [VR("buildAFactory2Game:powerStorage"), (0, Uu.jsx)("span", {
              children: TR(fR.baf2PowerCap)
            })]
          }), (nR > 0 || pR > 0) && (0, Uu.jsxs)("ul", {
            children: [nR > 0 && (0, Uu.jsx)(KZ, {
              item: "Charge Vault",
              label: `${(0,ht.f)(VR,"Charge Vault")} \xd7${nR}`,
              value: `+${TR(8e3*nR)}`
            }), pR > 0 && (0, Uu.jsx)(KZ, {
              item: "Battery Cell",
              label: `${VR("buildAFactory2Game:powerBatteries")} \xd7${pR}`,
              value: `+${TR(gR)}`
            })]
          })]
        }), (0, Uu.jsxs)("section", {
          children: [(0, Uu.jsxs)("h3", {
            children: [VR("buildAFactory2Game:powerUsing"), (0, Uu.jsx)("span", {
              children: KR(fR.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, Uu.jsxs)("ul", {
            children: [0 === UR.length && 0 === XR && 0 === MR && (0, Uu.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: VR("buildAFactory2Game:powerNoUsers")
            }), UR.map((RR => {
              let [JR, GR, yR, tR, uR = 1, ZR] = RR, qR = GR ? VR(uZ[uR - 1], {
                name: (0, ht.f)(VR, JR)
              }) : (0, ht.f)(VR, JR);
              return void 0 !== ZR && (qR = VR("buildAFactory2Game:powerFarmName", {
                name: qR,
                mob: VR(SR(ZR))
              })), (0, Uu.jsx)(KZ, {
                item: JR,
                label: `${qR} \xd7${yR}`,
                note: VR("buildAFactory2Game:powerRunning", {
                  amount: String(tR)
                }),
                value: tR > 0 ? KR(tR * wZ(JR, GR, uR, ZR), "\u2212") : VR("buildAFactory2Game:powerIdle"),
                dim: 0 === tR
              }, `${JR}|${GR}|${uR}|${ZR}`)
            })), XR > 0 && (0, Uu.jsx)(KZ, {
              item: "Charging Pad",
              label: `${(0,ht.f)(VR,"Charging Pad")} \xd7${XR}`,
              value: VR("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), MR > 0 && (0, Uu.jsx)(KZ, {
              item: "Homestead Core",
              label: VR("buildAFactory2Game:powerCharge"),
              value: KR(MR, "\u2212")
            }), fR.baf2PowerStarved > 0 && (0, Uu.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, Uu.jsx)(pt.d, {
                name: "triangle-exclamation"
              }), VR("buildAFactory2Game:powerStarved", {
                amount: String(fR.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var eZ = GR(5338),
      aZ = GR(1590);
    class LZ {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(RR) {
        this.message = RR;
        for (const JR of this.listeners) JR()
      }
      get() {
        return this.message
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
    }
    class nZ extends LZ {}

    function UZ(RR, JR) {
      const GR = () => {
          const GR = RR.get();
          if (!GR || !JR) return GR;
          const [yR, tR, uR] = GR.baf2PowerAt;
          return yR === JR[0] && tR === JR[1] && uR === JR[2] ? GR : null
        },
        [tR, uR] = (0, yR.useState)(GR);
      return (0, yR.useEffect)((() => (uR(GR()), RR.subscribe((() => {
        uR(GR())
      })))), [RR, ...null !== JR && void 0 !== JR ? JR : []]), tR
    }

    function WZ(RR) {
      return {
        stored: RR.baf2PowerStored,
        cap: RR.baf2PowerCap,
        madePerS: RR.baf2PowerMadePerS,
        usedPerS: RR.baf2PowerUsedPerS
      }
    }

    function AZ(RR) {
      let {
        stored: JR,
        cap: GR
      } = RR;
      return (0, Uu.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, Uu.jsx)("div", {
          style: {
            width: `${Math.min(100,100*JR/Math.max(1,GR))}%`
          }
        })
      })
    }

    function CZ(RR) {
      let {
        figures: JR,
        labelled: GR = !1
      } = RR;
      const {
        t: yR
      } = (0, lt.A)(), tR = JR.madePerS - JR.usedPerS, {
        text: uR,
        draining: ZR
      } = function(RR, JR) {
        let {
          stored: GR,
          cap: yR,
          madePerS: tR,
          usedPerS: uR
        } = JR;
        const ZR = tR - uR;
        return GR >= yR ? {
          text: RR("buildAFactory2Game:powerFull"),
          draining: !1
        } : ZR > .05 ? {
          text: RR("buildAFactory2Game:powerFullIn", {
            time: Lu(RR, (yR - GR) / ZR)
          }),
          draining: !1
        } : ZR < -.05 ? {
          text: RR("buildAFactory2Game:powerEmptyIn", {
            time: Lu(RR, GR / -ZR)
          }),
          draining: !0
        } : {
          text: RR("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(yR, JR);
      return (0, Uu.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, Uu.jsx)(AZ, {
          stored: JR.stored,
          cap: JR.cap
        }), (0, Uu.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, Uu.jsx)("span", {
            children: yR(GR ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: TR(JR.stored),
              cap: TR(JR.cap)
            })
          }), (0, Uu.jsxs)("span", {
            className: Ct()("Baf2PowerNet", {
              Draining: ZR
            }),
            children: [yR("buildAFactory2Game:powerPerSecond", {
              rate: ru(Math.abs(tR), tR < 0 ? "\u2212" : "+")
            }), " \xb7 ", uR]
          })]
        })]
      })
    }

    function XZ(RR) {
      let {
        stored: JR,
        cap: GR,
        rates: yR
      } = RR;
      const {
        t: tR
      } = (0, lt.A)();
      return yR ? (0, Uu.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Uu.jsx)(CZ, {
          figures: {
            stored: JR,
            cap: GR,
            madePerS: yR[0],
            usedPerS: yR[1]
          },
          labelled: !0
        })
      }) : (0, Uu.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Uu.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, Uu.jsx)(AZ, {
            stored: JR,
            cap: GR
          }), (0, Uu.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, Uu.jsx)("span", {
              children: tR("buildAFactory2Game:powerStoredLabelled", {
                stored: TR(JR),
                cap: TR(GR)
              })
            })
          })]
        })
      })
    }

    function MZ(RR) {
      let {
        store: JR,
        close: GR
      } = RR;
      const {
        t: yR
      } = (0, lt.A)(), tR = UZ(JR);
      return (0, Uu.jsx)(eZ.e, {
        close: GR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Uu.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, Uu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Uu.jsxs)("div", {
              children: [(0, Uu.jsx)("h2", {
                id: "baf2PowerTitle",
                children: yR("buildAFactory2Game:powerTitle")
              }), (0, Uu.jsx)("p", {
                children: yR("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, Uu.jsx)(aZ.l, {
              onClick: GR
            })]
          }), tR && (0, Uu.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, Uu.jsx)(CZ, {
              figures: WZ(tR)
            }), (0, Uu.jsx)(rZ, {
              message: tR
            })]
          })]
        })
      })
    }

    function BZ(RR) {
      var JR;
      let {
        kind: GR,
        def: tR,
        Ft: uR,
        power: ZR,
        stored: qR,
        cap: iR
      } = RR;
      const {
        t: fR
      } = (0, lt.A)(), VR = UZ(ZR, uR), [KR, wR] = (0, yR.useState)(!1);
      return (0, Uu.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, Uu.jsx)(Fu, {
          kind: GR,
          def: tR,
          input: null,
          tier: null !== (JR = null === VR || void 0 === VR ? void 0 : VR.baf2PowerTier) && void 0 !== JR ? JR : 1
        }), (0, Uu.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: fR("buildAFactory2Game:powerTitle")
        }), VR && (0, Uu.jsx)(CZ, {
          figures: WZ(VR)
        }), !VR && (0, Uu.jsx)(XZ, {
          stored: qR,
          cap: iR,
          rates: null
        }), VR && (0, Uu.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            wR(!KR)
          },
          "aria-expanded": KR,
          children: fR(KR ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), VR && KR && (0, Uu.jsx)(rZ, {
          message: VR
        })]
      })
    }
    const lZ = 2500,
      pZ = 17500,
      gZ = `${CR} `;
    const bZ = ["plan", "throttle"];

    function vZ(RR) {
      if (RR.startsWith(`${pJ} `)) return RR.slice(0, RR.lastIndexOf(" "));
      const JR = RR.split(" ");
      return JR[0] === VJ && bZ.includes(JR[4]) ? JR.slice(0, 5).join(" ") : null
    }
    class OZ {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = RR, this.now = JR, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.uZR = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = JR()
      }
      enqueue(RR) {
        this.queue(RR, this.nextTicket());
        const JR = this.uZR + this.pending.length;
        return this.flush(), JR
      }
      track(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GR = this.nextTicket();
        if (!JR.urgent) return this.queue(RR, GR), this.flush(), GR;
        const {
          supersedes: yR
        } = JR;
        for (let uR = this.pending.length - 1; uR >= this.urgent; uR--) {
          const JR = this.pending[uR];
          (JR.command === RR || null !== yR && void 0 !== yR && yR(JR.command)) && (this.pending.splice(uR, 1), this.markLeft(JR.tickets))
        }
        const tR = this.pending.findIndex((JR => {
          let {
            command: GR
          } = JR;
          return GR === RR
        }));
        return -1 !== tR ? this.pending[tR].tickets.push(GR) : (this.pending.splice(this.urgent, 0, {
          command: RR,
          tickets: [GR]
        }), this.urgent += 1), this.flush(), GR
      }
      leftAt(RR) {
        const JR = this.leftTimes.get(RR);
        return void 0 !== JR ? JR : this.pending.some((JR => {
          let {
            tickets: GR
          } = JR;
          return GR.includes(RR)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let RR = !0;
        return () => {
          RR && (RR = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(RR) {
        var JR;
        return (null === (JR = this.pending.at(-1)) || void 0 === JR ? void 0 : JR.command) === RR
      }
      sent() {
        return this.uZR
      }
      clear() {
        for (const {
            tickets: RR
          }
          of this.pending) this.markLeft(RR);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(RR) {
        const JR = this.now();
        for (const GR of RR) this.leftTimes.set(GR, JR);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(RR, JR) {
        const GR = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === GR || void 0 === GR ? void 0 : GR.command) === RR) return void(! function(RR) {
          return RR === XR || RR.startsWith(`${AR} `) || RR.startsWith(`${IR} `)
        }(RR) ? GR.tickets.push(JR) : (this.pending.pop(), this.markLeft([...GR.tickets, JR])));
        const yR = void 0 === GR ? null : fJ(GR.command, RR);
        if (null !== yR && void 0 !== GR) return GR.command = yR, void GR.tickets.push(JR);
        const tR = vZ(RR);
        if (null !== tR && void 0 !== GR && vZ(GR.command) === tR) return GR.command = RR, void GR.tickets.push(JR);
        if (null !== GR && void 0 !== GR && GR.command.startsWith(gZ) && RR.startsWith(gZ)) {
          const yR = RR.slice(gZ.length);
          if (GR.command.slice(gZ.length).split(",").includes(yR)) return void GR.tickets.push(JR);
          const tR = `${GR.command},${yR}`;
          if (tR.length <= 119) return GR.command = tR, void GR.tickets.push(JR)
        }
        this.pending.push({
          command: RR,
          tickets: [JR]
        })
      }
      flush() {
        const RR = this.now();
        for (this.tokens = Math.min(5, this.tokens + (RR - this.refilledAt) / lZ), this.refilledAt = RR; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.uZR += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: RR,
            tickets: JR
          } = this.pending.shift();
          this.markLeft(JR), this.send(RR)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * lZ)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class xZ {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new OZ(RR, JR)
      }
      send(RR) {
        return this.queue.enqueue(RR)
      }
      sent() {
        return this.queue.sent()
      }
      track(RR, JR) {
        return this.queue.track(RR, JR)
      }
      leftAt(RR) {
        return this.queue.leftAt(RR)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(RR) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = JR, this.send(RR), this.islandEdits.count
      }
      syncIslandEdits(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: GR
        } = this, yR = JR - GR.lastAtMs < pZ;
        GR.count = yR ? Math.max(GR.count, RR) : RR
      }
      clear() {
        this.queue.clear()
      }
    }
    const NZ = (0, yR.createContext)(null);

    function DZ() {
      const RR = (0, yR.useContext)(NZ);
      if (!RR) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return RR
    }

    function HZ(RR, JR) {
      return null !== JR && void 0 !== JR ? JR : 1 === RR
    }

    function oZ(RR, JR) {
      return RR.every((RR => {
        var GR;
        let [yR, , tR] = RR;
        return !HZ(tR, null === (GR = JR.get(yR)) || void 0 === GR ? void 0 : GR.tK)
      }))
    }

    function cZ(RR, JR, GR) {
      if (0 === RR.size) return RR;
      const yR = new Map(RR);
      for (const [tR, uR] of RR) {
        const RR = JR.find((RR => {
          let [JR] = RR;
          return JR === tR
        }));
        (!RR || uR.tK === (1 === RR[2]) || uR.atMs < GR) && yR.delete(tR)
      }
      return yR
    }

    function PZ(RR) {
      var JR;
      let {
        Ft: GR,
        input: tR,
        drops: uR,
        seconds: ZR
      } = RR;
      const {
        t: qR
      } = (0, lt.A)(), iR = DZ(), [fR, VR] = (0, yR.useState)(new Map);
      (0, yR.useEffect)((() => {
        uR && VR((RR => cZ(RR, uR, Date.now() - pZ)))
      }), [uR]), (0, yR.useEffect)((() => {
        const RR = function(RR, JR) {
          let GR = null;
          for (const {
              atMs: yR
            }
            of RR.values()) GR = null === GR ? yR : Math.min(GR, yR);
          return null === GR ? null : GR + JR
        }(fR, pZ);
        if (null === RR || !uR) return;
        const JR = setTimeout((() => {
          VR((RR => cZ(RR, uR, Date.now() - pZ)))
        }), Math.max(0, RR - Date.now()) + 1);
        return () => {
          clearTimeout(JR)
        }
      }), [fR, uR]);
      const KR = jR(tR),
        wR = null !== KR && null !== uR && oZ(uR, fR),
        rR = function(RR, JR, GR) {
          return null === RR || null === JR || oZ(JR, GR) ? 0 : PR[oR[RR]]
        }(KR, uR, fR);
      return (0, Uu.jsxs)(pu, {
        title: qR("buildAFactory2Game:farmDropsTitle", {
          seconds: ZR
        }),
        count: null !== (JR = null === uR || void 0 === uR ? void 0 : uR.length) && void 0 !== JR ? JR : 0,
        children: [rR > 0 && (0, Uu.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: qR("buildAFactory2Game:farmDropsPower", {
            power: String(rR)
          })
        }), (null === KR || !uR) && (0, Uu.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: qR("buildAFactory2Game:farmDropsEmpty")
        }), wR && (0, Uu.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: qR("buildAFactory2Game:farmDropsAllVoided")
        }), null !== KR && (null === uR || void 0 === uR ? void 0 : uR.map((RR => {
          var JR;
          let [yR, tR, uR] = RR;
          const ZR = tR < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            KR = HZ(uR, null === (JR = fR.get(yR)) || void 0 === JR ? void 0 : JR.tK);
          return (0, Uu.jsxs)("li", {
            className: Ct()("Baf2Recipe Baf2FarmDrop", {
              Voided: !KR
            }),
            children: [(0, Uu.jsx)(Cu, {
              item: yR,
              amount: 1
            }), (0, Uu.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, ht.f)(qR, yR)
            }), (0, Uu.jsx)("span", {
              className: "Baf2FarmRate",
              children: qR(ZR, {
                amount: String(tR)
              })
            }), (0, Uu.jsx)("button", {
              type: "button",
              className: Ct()("Baf2FarmToggle SmallTextBold", {
                Kept: KR
              }),
              "aria-pressed": KR,
              onClick: () => {
                VR(new Map(fR).set(yR, {
                  tK: !KR,
                  atMs: Date.now()
                })), iR.send(function(RR, JR, GR, yR) {
                  return `${IR} ${RR} ${JR} ${GR} ${yR}`
                }(GR[0], GR[1], GR[2], yR))
              },
              children: qR(KR ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, yR)
        })))]
      })
    }
    var IZ;
    const mZ = String(null !== (IZ = DJ.Synthesizer.waterPerOp) && void 0 !== IZ ? IZ : 0);

    function zZ(RR) {
      let {
        Ft: JR,
        taught: GR
      } = RR;
      const {
        t: tR
      } = (0, lt.A)(), uR = DZ(), [ZR, qR] = (0, yR.useState)(null);
      (0, yR.useEffect)((() => {
        null !== ZR && GR === ZR && qR(null)
      }), [ZR, GR]);
      const iR = null !== ZR && void 0 !== ZR ? ZR : GR;
      let fR = tR("buildAFactory2Game:synthPick");
      return null !== iR && (fR = tR("buildAFactory2Game:synthGrows", {
        name: (0, ht.f)(tR, iR),
        input: (0, ht.f)(tR, MJ),
        water: mZ
      })), (0, Uu.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, Uu.jsx)("div", {
          className: Ct()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === iR
          }),
          children: fR
        }), (0, Uu.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: BJ.map(((RR, GR) => {
            const yR = (0, ht.f)(tR, RR),
              ZR = RR === iR;
            return (0, Uu.jsx)("li", {
              children: (0, Uu.jsx)("button", {
                type: "button",
                className: Ct()("Baf2SynthTile", {
                  Selected: ZR
                }),
                title: yR,
                "aria-label": yR,
                "aria-pressed": ZR,
                onClick: () => {
                  ZR || (qR(RR), uR.send(`${pJ} ${JR[0]} ${JR[1]} ${JR[2]} ${GR}`))
                },
                children: (0, Uu.jsx)(gt.b, {
                  itemName: RR,
                  amount: 0
                })
              })
            }, RR)
          }))
        })]
      })
    }
    const SZ = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function jZ(RR) {
      let {
        kind: JR,
        tier: GR,
        coupled: yR,
        level: tR,
        slot: uR
      } = RR;
      const {
        t: ZR
      } = (0, lt.A)(), iR = FR(oJ);
      if (!yR && null !== GR && GR < iR) return (0, Uu.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, Uu.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, Uu.jsx)(pt.d, {
            name: "lock"
          })
        }), (0, Uu.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: ZR("buildAFactory2Game:upgradeLocked")
        }), (0, Uu.jsx)("span", {
          className: "Baf2TierTag",
          children: ZR("buildAFactory2Game:tierTag", {
            tier: String(iR)
          })
        })]
      });
      const fR = function(RR, JR) {
          if (qR() && "Crusher" !== RR && null !== JR) {
            if (dZ(PJ, JR)) return {
              item: PJ,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (dZ(cJ, JR)) return {
              item: cJ,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: oJ,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(JR, GR),
        VR = ZR(yR ? SZ[tR - 1] : fR.emptyKey),
        KR = null !== GR ? function(RR, JR, GR, yR) {
          if (!qR() || !GR || "Crusher" === RR || JR < 10) return null;
          const tR = FR(PJ);
          if (yR < 3 && tR > 1 && (2 === yR || JR >= tR)) return {
            tier: tR,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const uR = FR(cJ);
          if (1 === yR && uR > 1) return {
            tier: uR,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(JR, GR, yR, tR) : null;
      return (0, Uu.jsxs)("div", {
        className: Ct()("Baf2UpgradeSocket", {
          Fitted: yR
        }),
        children: [(0, Uu.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [yR && uR, !yR && (0, Uu.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, Uu.jsx)(gt.b, {
              itemName: fR.item,
              amount: 0
            })
          })]
        }), (0, Uu.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, Uu.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: ZR("buildAFactory2Game:upgradeTitle")
          }), (0, Uu.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: VR
          }), yR && tR >= 2 && "Crusher" === JR && (0, Uu.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: ZR("buildAFactory2Game:couplerCrusherHint")
          }), KR && null !== GR && GR < KR.tier && (0, Uu.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, Uu.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, Uu.jsx)(pt.d, {
                name: "lock"
              })
            }), ZR(KR.lockedKey), (0, Uu.jsx)("span", {
              className: "Baf2TierTag",
              children: ZR("buildAFactory2Game:tierTag", {
                tier: String(KR.tier)
              })
            })]
          }), KR && null !== GR && GR >= KR.tier && (0, Uu.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: ZR(KR.nextKey)
          })]
        })]
      })
    }

    function dZ(RR, JR) {
      const GR = FR(RR);
      return GR > 1 && JR >= GR
    }
    var EZ = GR(38150);
    const YZ = (0, sR.E)(DJ.Condenser, DJ.Condenser.fluidMade),
      kZ = .05;
    class QZ extends LZ {}

    function FZ(RR) {
      return ru(RR, "")
    }

    function TZ(RR, JR, GR) {
      return RR(JR ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: GR
      })
    }

    function sZ(RR, JR, GR, yR) {
      return GR <= kZ && yR <= kZ ? null : yR <= kZ || GR <= kZ ? TZ(RR, JR, yR <= kZ ? ru(GR, "+") : ru(yR, "\u2212")) : RR(JR ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: FZ(GR),
        used: FZ(yR)
      })
    }

    function hZ(RR, JR) {
      return Math.min(100, 100 * RR / Math.max(1, JR))
    }

    function Rq(RR) {
      let {
        stored: JR,
        cap: GR,
        netPerS: yR,
        rates: tR,
        cryo: uR
      } = RR;
      const {
        t: ZR
      } = (0, lt.A)(), qR = function(RR, JR, GR, yR) {
        return GR <= 0 ? RR("buildAFactory2Game:waterNoStorage") : JR >= GR ? RR("buildAFactory2Game:powerFull") : yR > kZ ? RR("buildAFactory2Game:powerFullIn", {
          time: Lu(RR, (GR - JR) / yR)
        }) : yR < -.05 ? JR <= 0 ? RR("buildAFactory2Game:waterEmpty") : RR("buildAFactory2Game:powerEmptyIn", {
          time: Lu(RR, JR / -yR)
        }) : RR("buildAFactory2Game:powerSteady")
      }(ZR, JR, GR, yR), iR = GR > 0 && JR < GR && Math.abs(yR) <= kZ, fR = ZR(uR ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), VR = null !== tR ? `${tR} \xb7 ${qR}` : iR ? fR : `${fR} \xb7 ${qR}`;
      return (0, Uu.jsxs)(Uu.Fragment, {
        children: [(0, Uu.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, Uu.jsx)("div", {
            style: {
              width: `${hZ(JR,GR)}%`
            }
          })
        }), (0, Uu.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, Uu.jsx)("span", {
            children: GR > 0 && ZR("buildAFactory2Game:powerStored", {
              stored: (0, sR.R)(JR),
              cap: (0, sR.R)(GR)
            })
          }), (0, Uu.jsx)("span", {
            className: Ct()("Baf2WaterNet", {
              Draining: yR < -.05
            }),
            children: VR
          })]
        })]
      })
    }

    function Jq(RR) {
      let {
        water: JR,
        at: GR,
        side: yR = null
      } = RR;
      const {
        t: tR
      } = (0, lt.A)(), uR = DZ(), [ZR, qR, iR] = JR;
      return (0, Uu.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, Uu.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, Uu.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: tR(null === yR ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${yR}`)
          }), (0, Uu.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              uR.send(`${sR.y} ${GR[0]} ${GR[1]} ${GR[2]}${"cryoOut"===yR?" cryo":""}`)
            },
            children: tR("buildAFactory2Game:waterDetails")
          })]
        }), (0, Uu.jsx)(Rq, {
          stored: ZR,
          cap: qR,
          netPerS: iR,
          rates: TZ(tR, "cryoOut" === yR, ru(Math.abs(iR), iR < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === yR
        })]
      })
    }

    function Gq(RR, JR) {
      var GR, yR, tR;
      const uR = !0 === JR.baf2WaterCryo,
        ZR = null !== (GR = null === (yR = JR.baf2WaterMakers.find((RR => RR[0] === (uR ? sR.b : "Condenser")))) || void 0 === yR ? void 0 : yR[1]) && void 0 !== GR ? GR : 0,
        qR = [],
        iR = (JR, GR, yR) => {
          JR > 0 && qR.push(RR(1 === JR ? GR : yR, {
            count: String(JR)
          }))
        };
      return uR ? iR(ZR, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : iR(ZR, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), iR(null !== (tR = JR.baf2WaterPipes) && void 0 !== tR ? tR : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), iR(JR.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), qR.join(" \xb7 ")
    }

    function yq(RR, JR) {
      if (!0 === JR.baf2WaterCryo) return function(RR, JR) {
        const GR = DJ[sR.b];
        switch (JR.baf2WaterThis) {
          case "pipe":
            return {
              text: RR("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: RR("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: RR("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: RR("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: RR("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: RR("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: RR("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var yR;
            const [tR, uR] = null !== (yR = JR.baf2WaterThisRates) && void 0 !== yR ? yR : [(0, sR.E)(GR, GR.cryoMade), (0, sR.E)(GR, GR.powerPerOp)];
            return !0 === JR.baf2WaterDriven ? {
              text: RR("buildAFactory2Game:cryoThisMixerDriven", {
                rate: FZ(tR)
              }),
              bad: !1
            } : {
              text: RR("buildAFactory2Game:cryoThisMixer", {
                rate: FZ(tR),
                power: FZ(uR)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: RR("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(RR, JR);
      const GR = !0 === JR.baf2WaterDriven,
        yR = DJ.Condenser;
      switch (JR.baf2WaterThis) {
        case "pipe":
          return {
            text: RR("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: RR("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: RR("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: RR("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: RR("buildAFactory2Game:waterThisTank", {
              tank: (0, sR.R)(sR.l),
              cap: (0, sR.R)(JR.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var tR;
          const [uR, ZR] = null !== (tR = JR.baf2WaterThisRates) && void 0 !== tR ? tR : [YZ, (0, sR.E)(yR, yR.powerPerOp)];
          return GR ? {
            text: RR("buildAFactory2Game:waterThisCondenserDriven", {
              rate: FZ(uR)
            }),
            bad: !1
          } : {
            text: RR("buildAFactory2Game:waterThisCondenser", {
              rate: FZ(uR),
              power: FZ(ZR)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: RR("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function tq(RR, JR) {
      const GR = JR.baf2WaterMakers.some((RR => !0 === RR[5]));
      if (!0 === JR.baf2WaterCryo) {
        const yR = JR.baf2WaterUsedPerS - JR.baf2WaterMadePerS,
          tR = GR || yR <= kZ ? 0 : (0, sR.B)(yR);
        return 0 === tR ? null : tR > 1 ? RR("buildAFactory2Game:cryoNextMixers", {
          mixers: String(tR)
        }) : RR("buildAFactory2Game:cryoNextOne")
      }
      const yR = GR ? null : function(RR, JR) {
        const GR = JR - RR;
        return GR <= kZ ? null : Math.ceil(GR / YZ)
      }(JR.baf2WaterMadePerS, JR.baf2WaterUsedPerS);
      return null === yR ? null : yR > 1 ? RR("buildAFactory2Game:waterNextCondensers", {
        condensers: String(yR)
      }) : RR("buildAFactory2Game:waterNextOne")
    }

    function uq(RR) {
      let {
        item: JR,
        label: GR,
        note: yR,
        value: tR,
        dim: uR,
        bad: ZR
      } = RR;
      return (0, Uu.jsxs)("li", {
        className: Ct()("Baf2WaterRow", {
          Dim: uR,
          Bad: ZR
        }),
        children: [(0, Uu.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, Uu.jsx)(gt.b, {
            itemName: JR,
            amount: 0
          })
        }), (0, Uu.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, Uu.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: GR
          }), yR && (0, Uu.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: yR
          })]
        }), (0, Uu.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: tR
        })]
      })
    }

    function Zq(RR) {
      return EZ.o[RR] ? RR : "Reactor Port"
    }

    function qq(RR) {
      let {
        message: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)(), yR = !0 === JR.baf2WaterCryo, tR = (RR, JR) => TZ(GR, yR, ru(RR, JR));
      return (0, Uu.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, Uu.jsxs)("section", {
          children: [(0, Uu.jsxs)("h3", {
            children: [GR("buildAFactory2Game:waterMakes"), (0, Uu.jsx)("span", {
              children: tR(JR.baf2WaterMadePerS, "+")
            })]
          }), (0, Uu.jsxs)("ul", {
            children: [0 === JR.baf2WaterMakers.length && (0, Uu.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: GR(yR ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), JR.baf2WaterMakers.map((RR => {
              let [JR, yR, uR, ZR, qR, iR] = RR;
              const fR = GR("buildAFactory2Game:powerRunning", {
                amount: String(uR)
              });
              let VR = qR > 0 ? GR("buildAFactory2Game:waterMakerPower", {
                running: fR,
                power: FZ(qR)
              }) : fR;
              return iR && (VR = GR(0 === uR && ZR <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, Uu.jsx)(uq, {
                item: JR,
                label: `${(0,ht.f)(GR,JR)} \xd7${yR}`,
                note: VR,
                value: uR > 0 || iR && ZR > 0 ? tR(ZR, "+") : GR("buildAFactory2Game:powerIdle"),
                dim: 0 === uR && !iR,
                bad: iR
              }, JR)
            }))]
          })]
        }), (0, Uu.jsxs)("section", {
          children: [(0, Uu.jsxs)("h3", {
            children: [GR("buildAFactory2Game:waterUses"), (0, Uu.jsx)("span", {
              children: tR(JR.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, Uu.jsxs)("ul", {
            children: [0 === JR.baf2WaterUsers.length && (0, Uu.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: GR(yR ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), JR.baf2WaterUsers.map((RR => {
              let [JR, yR, uR, ZR] = RR;
              const qR = EZ.o[JR] ? (0, ht.f)(GR, JR) : JR;
              return (0, Uu.jsx)(uq, {
                item: Zq(JR),
                label: yR > 1 ? `${qR} \xd7${yR}` : qR,
                note: ZR ? GR("buildAFactory2Game:waterPortFirst") : void 0,
                value: uR > 0 ? tR(uR, "\u2212") : GR("buildAFactory2Game:powerIdle"),
                dim: 0 === uR
              }, JR)
            }))]
          })]
        })]
      })
    }

    function iq(RR) {
      var JR, GR, tR, uR, ZR;
      let {
        store: qR,
        close: iR
      } = RR;
      const {
        t: fR
      } = (0, lt.A)(), VR = function(RR) {
        const [JR, GR] = (0, yR.useState)((() => RR.get()));
        return (0, yR.useEffect)((() => (GR(RR.get()), RR.subscribe((() => {
          GR(RR.get())
        })))), [RR]), JR
      }(qR), KR = null !== (JR = null === VR || void 0 === VR ? void 0 : VR.baf2WaterStored) && void 0 !== JR ? JR : 0, wR = null !== (GR = null === VR || void 0 === VR ? void 0 : VR.baf2WaterCap) && void 0 !== GR ? GR : 0, rR = null !== (tR = null === VR || void 0 === VR ? void 0 : VR.baf2WaterMadePerS) && void 0 !== tR ? tR : 0, eR = null !== (uR = null === VR || void 0 === VR ? void 0 : VR.baf2WaterUsedPerS) && void 0 !== uR ? uR : 0, aR = null !== (ZR = null === VR || void 0 === VR ? void 0 : VR.baf2WaterNetPerS) && void 0 !== ZR ? ZR : rR - eR, LR = VR && yq(fR, VR), nR = VR && tq(fR, VR), UR = !0 === (null === VR || void 0 === VR ? void 0 : VR.baf2WaterCryo);
      return (0, Uu.jsx)(eZ.e, {
        close: iR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Uu.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, Uu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Uu.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== VR && wR <= 0 ? (0, Uu.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, Uu.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, Uu.jsx)(gt.b, {
                  itemName: UR ? eG.f : sR.e,
                  amount: 0
                })
              }), (0, Uu.jsxs)("div", {
                children: [(0, Uu.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: fR(UR ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), VR && (0, Uu.jsx)("p", {
                  children: Gq(fR, VR)
                })]
              })]
            }), (0, Uu.jsx)(aZ.l, {
              onClick: iR
            })]
          }), VR && LR && (0, Uu.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, Uu.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, Uu.jsx)(Rq, {
                stored: KR,
                cap: wR,
                netPerS: aR,
                cryo: UR,
                rates: sZ(fR, UR, rR, eR)
              })
            }), (0, Uu.jsx)("div", {
              className: Ct()("Baf2WaterThis", {
                Bad: LR.bad
              }),
              children: LR.text
            }), VR.baf2WaterDriven && (0, Uu.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, Uu.jsx)(pt.d, {
                name: "bolt"
              }), fR(UR ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), nR && (0, Uu.jsx)("p", {
              className: "Baf2WaterNext",
              children: nR
            }), (0, Uu.jsx)(qq, {
              message: VR
            })]
          })]
        })
      })
    }
    class fq {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(RR, JR) {
        const GR = this.get(RR);
        GR && null === JR.opLeftMs && null === JR.fuelLeftMs && JR.status === GR.status ? JR = {
          ...JR,
          opLeftMs: GR.opLeftMs,
          fuelLeftMs: GR.fuelLeftMs,
          burning: GR.burning
        } : this.updates++, this.pos = RR, this.view = JR;
        for (const yR of this.listeners) yR()
      }
      get(RR) {
        return null !== this.pos && this.pos[0] === RR[0] && this.pos[1] === RR[1] && this.pos[2] === RR[2] ? this.view : null
      }
      forget(RR) {
        null !== this.get(RR) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
    }

    function Vq(RR, JR, GR, yR) {
      return "noFuel" === JR && yR && !tG(DJ[RR]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === JR && !0 === (null === GR || void 0 === GR ? void 0 : GR.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === JR && !0 === (null === GR || void 0 === GR ? void 0 : GR.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === JR && !0 === (null === GR || void 0 === GR ? void 0 : GR.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === JR && !0 === (null === GR || void 0 === GR ? void 0 : GR.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Kq(JR, GR) ? "buildAFactory2Game:machineStatus_noInputShort" : function(RR, JR) {
        const GR = DJ[RR];
        if ("noFuel" === JR && void 0 !== GR.fuels) return tG(GR) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (GR.mobFarm && ("noInput" === JR || "badInput" === JR)) return `buildAFactory2Game:machineStatus_${JR}MobFarm`;
        if ("outputFull" === JR && (void 0 !== GR.table || GR.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === JR && YJ(GR)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== GR.cryoMade && ("noInput" === JR || "noOutlet" === JR || "fluidFull" === JR)) return `buildAFactory2Game:machineStatus_${JR}Mixer`;
        return `buildAFactory2Game:machineStatus_${JR}`
      }(RR, JR)
    }

    function Kq(RR, JR) {
      return "noInput" === RR && null !== JR && void 0 !== JR && JR.input && JR.inputShort ? {
        input: JR.input,
        short: JR.inputShort
      } : null
    }

    function wq(RR) {
      return Xt(RR) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== RR.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function rq(RR) {
      const JR = (0, DR.ve)(RR);
      return `Baf2Pane Baf2Pane${JR.charAt(0).toUpperCase()}${JR.slice(1)}`
    }

    function eq(RR, JR) {
      const [GR, tR] = (0, yR.useState)((() => RR.get(JR)));
      return (0, yR.useEffect)((() => {
        tR(RR.get(JR));
        const GR = RR.subscribe((() => {
          tR(RR.get(JR))
        }));
        return () => {
          GR(), RR.forget(JR)
        }
      }), [RR, ...JR]), GR
    }

    function aq(RR, JR, GR, yR) {
      const tR = DJ[RR],
        uR = JR && tR.couplable ? SJ(tR, GR) : tR,
        ZR = null !== yR && JG(uR) ? function(RR, JR) {
          var GR;
          return null !== (GR = null !== JR && JG(RR) ? qG[JR] : void 0) && void 0 !== GR ? GR : RR.opMs
        }(uR, iG(yR)) : uR.opMs;
      return ZR === uR.opMs ? uR : {
        ...uR,
        opMs: ZR
      }
    }

    function Lq(RR) {
      let {
        running: JR,
        opMs: GR,
        opLeftMs: yR,
        updateCount: tR
      } = RR;
      return (0, Uu.jsx)("div", {
        className: Ct()("Baf2MachineProgress", {
          Running: JR
        }),
        children: (0, Uu.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: GR / 1e3 + "s",
            animationDelay: null === yR ? void 0 : (yR - GR) / 1e3 + "s"
          }
        }, tR)
      })
    }

    function nq(RR) {
      let {
        running: JR,
        leftMs: GR,
        periodMs: yR,
        updateCount: tR
      } = RR;
      const {
        t: uR
      } = (0, lt.A)(), ZR = Math.min(Math.max(null !== GR && void 0 !== GR ? GR : 0, 0), yR), qR = JR && ZR > 0, iR = uR("buildAFactory2Game:machineBarFuel");
      return (0, Uu.jsx)("div", {
        className: Ct()("Baf2FuelBurn", {
          Draining: qR
        }),
        role: "img",
        title: iR,
        "aria-label": iR,
        children: (0, Uu.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: qR ? {
            animationDuration: yR / 1e3 + "s",
            animationDelay: (ZR - yR) / 1e3 + "s"
          } : {
            transform: `scaleY(${ZR/yR})`
          }
        }, tR)
      })
    }

    function Uq(RR, JR, GR) {
      let [yR, tR] = GR;
      const uR = 1 !== yR ? Bt(JR) : null;
      return {
        amount: yR,
        have: tR,
        item: RR(uR || (0, ht.d)(JR))
      }
    }

    function Wq(RR) {
      return JG(RR) ? "buildAFactory2Game:machineBarMining" : GG(RR) ? "buildAFactory2Game:machineBarCutting" : void 0 !== RR.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Aq(RR) {
      var JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR, nR, UR, WR;
      let {
        kind: AR,
        Ft: CR,
        store: XR,
        power: MR,
        renderSlot: BR
      } = RR;
      const {
        t: lR
      } = (0, lt.A)(), pR = eq(XR, CR), gR = DJ[AR], bR = null !== (JR = null === pR || void 0 === pR ? void 0 : pR.coupled) && void 0 !== JR && JR, vR = null !== (GR = null === pR || void 0 === pR ? void 0 : pR.couplerLevel) && void 0 !== GR ? GR : 1, OR = aq(AR, bR, vR, null !== (yR = null === pR || void 0 === pR || null === (tR = pR.dug) || void 0 === tR ? void 0 : tR.item) && void 0 !== yR ? yR : null), xR = null !== (uR = null === pR || void 0 === pR ? void 0 : pR.status) && void 0 !== uR ? uR : null, NR = null !== (ZR = null === pR || void 0 === pR ? void 0 : pR.power) && void 0 !== ZR ? ZR : null, DR = null !== (qR = null === pR || void 0 === pR ? void 0 : pR.opLeftMs) && void 0 !== qR ? qR : null, HR = null !== (iR = null === pR || void 0 === pR ? void 0 : pR.dug) && void 0 !== iR ? iR : null, oR = null !== HR && JG(gR) ? qG[null !== (fR = iG(HR.item)) && void 0 !== fR ? fR : ""] : void 0, cR = void 0 === oR ? null : 6e4 / oR, PR = null !== (VR = null === pR || void 0 === pR ? void 0 : pR.powerCap) && void 0 !== VR ? VR : 4e3, IR = null !== (KR = null === pR || void 0 === pR ? void 0 : pR.tier) && void 0 !== KR ? KR : null, mR = void 0 !== OR.powerMade, zR = null !== gR.fuelSlot ? BR(gR.fuelSlot) : null, SR = zJ(gR), jR = !bR && !0 === (null === pR || void 0 === pR ? void 0 : pR.fuelFed), ER = !bR && !0 === (null === pR || void 0 === pR ? void 0 : pR.fuelFeeds), YR = null !== gR.fuelSlot && !bR, kR = null !== (wR = null === pR || void 0 === pR ? void 0 : pR.fuelLeftMs) && void 0 !== wR ? wR : null, QR = function(RR, JR, GR) {
        var yR;
        const tR = null === JR ? void 0 : uG[JR];
        return Math.max(null !== (yR = null !== tR && void 0 !== tR ? tR : GR) && void 0 !== yR ? yR : 0, RR.opMs)
      }(OR, null !== (rR = null === pR || void 0 === pR ? void 0 : pR.burning) && void 0 !== rR ? rR : null, kR), FR = null !== (eR = null === pR || void 0 === pR ? void 0 : pR.fuelKeep) && void 0 !== eR ? eR : null, TR = null === xR ? null : Vq(AR, xR, pR, jR), sR = null === xR ? null : Kq(xR, pR);
      return (0, Uu.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, Uu.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Uu.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: lR((0, ht.d)(AR))
          }), HR && (0, Uu.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [lR("Tree Cutter" === AR ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, Uu.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Uu.jsx)(gt.b, {
                itemName: HR.item,
                amount: 0
              })
            }), (0, Uu.jsx)(bt.c, {
              text: HR.name
            })]
          }), null !== cR && (0, Uu.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: lR("buildAFactory2Game:machineDigsFixed", {
              perMin: String(cR)
            })
          }), (null === pR || void 0 === pR ? void 0 : pR.field) && (0, Uu.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, Uu.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Uu.jsx)(gt.b, {
                itemName: "Wheat",
                amount: 0
              })
            }), lR("buildAFactory2Game:machineField", {
              planted: String(pR.field[0]),
              ripe: String(pR.field[1])
            })]
          }), (0, Uu.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Uu.jsxs)("div", {
              className: Ct()("Baf2MachineColumn", {
                Baf2Burns: YR
              }),
              children: [null !== OR.inputSlot && (0, Uu.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, Uu.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: lR(wq(OR))
                }), BR(OR.inputSlot)]
              }), null !== gR.fuelSlot && !bR && (0, Uu.jsxs)("div", {
                className: Ct()("Baf2MachineSlot", {
                  Baf2FuelFed: jR
                }),
                children: [(0, Uu.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [jR && (0, Uu.jsx)(pt.d, {
                    name: "fire"
                  }), lR("buildAFactory2Game:machineFuel")]
                }), (0, Uu.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, Uu.jsx)(nq, {
                    running: "running" === xR,
                    leftMs: kR,
                    periodMs: QR,
                    updateCount: XR.updateCount
                  }), zR]
                })]
              }), null !== gR.fuelSlot && bR && (0, Uu.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, Uu.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: lR("buildAFactory2Game:machineFuel")
                }), (0, Uu.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: lR("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": lR("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, Uu.jsx)(pt.d, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, Uu.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, Uu.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: lR(Wq(OR))
              }), (0, Uu.jsx)(Lq, {
                running: "running" === xR,
                opMs: OR.opMs,
                opLeftMs: DR,
                updateCount: XR.updateCount
              })]
            }), OR.outputSlots.length > 0 && (0, Uu.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Uu.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: lR("buildAFactory2Game:machineOutput")
              }), (0, Uu.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: OR.outputSlots.map((RR => (0, Uu.jsx)("div", {
                  children: BR(RR)
                }, RR)))
              })]
            }), null !== NR && mR && (0, Uu.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, Uu.jsx)("div", {
                style: {
                  height: 100 * NR / PR + "%"
                }
              })
            })]
          }), YR && null !== FR && (0, Uu.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Uu.jsx)(pt.d, {
              name: "arrows-rotate"
            }), lR(GG(OR) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(FR)
            })]
          }), (jR || ER) && (0, Uu.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Uu.jsx)(pt.d, {
              name: "fire"
            }), lR(jR ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), gR.couplable && (0, Uu.jsx)(jZ, {
            kind: AR,
            tier: IR,
            coupled: bR,
            level: vR,
            slot: SR === gR.fuelSlot ? zR : null !== SR ? BR(SR) : null
          }), null !== NR && !mR && !0 === (null === pR || void 0 === pR ? void 0 : pR.reactorPowered) && (0, Uu.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: lR("buildAFactory2Game:machineReactorPowered")
          }), null !== NR && !mR && !0 !== (null === pR || void 0 === pR ? void 0 : pR.reactorPowered) && (0, Uu.jsx)(XZ, {
            stored: NR,
            cap: PR,
            rates: null !== (aR = null === pR || void 0 === pR ? void 0 : pR.powerRates) && void 0 !== aR ? aR : null
          }), (null === pR || void 0 === pR ? void 0 : pR.water) && (0, Uu.jsx)(Jq, {
            water: pR.water,
            at: CR,
            side: pR.cryo ? "waterIn" : null
          }), (null === pR || void 0 === pR ? void 0 : pR.cryo) && (0, Uu.jsx)(Jq, {
            water: pR.cryo,
            at: CR,
            side: "cryoOut"
          }), null !== pR && void 0 !== pR && pR.inertCoupler ? (0, Uu.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: lR("buildAFactory2Game:machineStatus_couplerOff", {
              item: (0, ht.f)(lR, pR.inertCoupler)
            })
          }) : null !== TR && (0, Uu.jsx)("div", {
            className: Ct()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== xR
            }),
            children: lR(TR, sR ? Uq(lR, sR.input, sR.short) : void 0)
          })]
        }), (0, Uu.jsxs)("div", {
          className: Ct()("Baf2MachineSide", {
            Baf2SynthSide: YJ(gR)
          }),
          children: [YJ(gR) && (0, Uu.jsx)(zZ, {
            Ft: CR,
            taught: null !== (LR = null === pR || void 0 === pR ? void 0 : pR.taught) && void 0 !== LR ? LR : null
          }, CR.join(",")), mR && (0, Uu.jsx)(BZ, {
            kind: AR,
            def: OR,
            Ft: CR,
            power: MR,
            stored: null !== NR && void 0 !== NR ? NR : 0,
            cap: PR
          }), dR(gR) && (0, Uu.jsx)(PZ, {
            Ft: CR,
            input: null !== (nR = null === pR || void 0 === pR ? void 0 : pR.input) && void 0 !== nR ? nR : null,
            drops: null !== (UR = null === pR || void 0 === pR ? void 0 : pR.farm) && void 0 !== UR ? UR : null,
            seconds: String(OR.opMs / 1e3)
          }), !mR && !dR(gR) && !YJ(gR) && (0, Uu.jsx)(Fu, {
            kind: AR,
            def: OR,
            input: null !== (WR = null === pR || void 0 === pR ? void 0 : pR.input) && void 0 !== WR ? WR : null,
            tier: null !== IR && void 0 !== IR ? IR : 1,
            noSeeds: !0 === (null === pR || void 0 === pR ? void 0 : pR.noSeeds)
          })]
        })]
      })
    }

    function Cq(RR, JR, GR, yR) {
      var tR;
      const uR = DJ[RR],
        ZR = [uR.inputSlot, uR.fuelSlot, ...null !== (tR = uR.inputSlots) && void 0 !== tR ? tR : []].filter((RR => null !== RR));
      return {
        render: tR => {
          let {
            Ft: uR,
            renderSlot: ZR
          } = tR;
          return (0, Uu.jsx)(NZ.Provider, {
            value: yR,
            children: (0, Uu.jsx)(Aq, {
              kind: RR,
              Ft: uR,
              store: JR,
              power: GR,
              renderSlot: ZR
            })
          })
        },
        quickMoveRange: ZR.length > 0 ? [Math.min(...ZR), Math.max(...ZR) + 1] : [0, 0],
        className: rq(RR)
      }
    }
    const Xq = "Assembler";

    function Mq(RR) {
      var JR, GR, yR, tR, uR, ZR, qR, iR, fR;
      let {
        Ft: VR,
        store: KR,
        renderSlot: wR
      } = RR;
      const {
        t: rR
      } = (0, lt.A)(), eR = eq(KR, VR), aR = null !== (JR = null === eR || void 0 === eR ? void 0 : eR.tier) && void 0 !== JR ? JR : 1, LR = null !== (GR = null === eR || void 0 === eR ? void 0 : eR.taught) && void 0 !== GR ? GR : null, nR = TJ(Xq, {
        coupled: !1,
        taught: LR
      }), UR = null !== (yR = nR.bench) && void 0 !== yR ? yR : null, WR = null !== (tR = null === eR || void 0 === eR ? void 0 : eR.status) && void 0 !== tR ? tR : null, AR = null !== (uR = null === eR || void 0 === eR ? void 0 : eR.power) && void 0 !== uR ? uR : null, CR = null !== (ZR = null === eR || void 0 === eR ? void 0 : eR.powerCap) && void 0 !== ZR ? ZR : 4e3;
      return (0, Uu.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, Uu.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Uu.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: rR((0, ht.d)(Xq))
          }), UR && (0, Uu.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [rR("buildAFactory2Game:benchMakes"), (0, Uu.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, Uu.jsx)(gt.b, {
                itemName: UR.output,
                amount: 0
              })
            }), (null === eR || void 0 === eR ? void 0 : eR.taughtName) && (0, Uu.jsx)(bt.c, {
              text: eR.taughtName
            }), UR.outputAmount > 1 && (0, Uu.jsxs)("span", {
              children: ["\xd7", UR.outputAmount]
            })]
          }), !UR && (0, Uu.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: rR("buildAFactory2Game:benchTeachHint")
          }), (0, Uu.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Uu.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (qR = nR.inputSlots) && void 0 !== qR ? qR : []).map(((RR, JR) => {
                const GR = null === UR || void 0 === UR ? void 0 : UR.inputs[JR];
                return (0, Uu.jsxs)("div", {
                  className: Ct()("Baf2BenchInput", {
                    Spare: !GR
                  }),
                  children: [(0, Uu.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [wR(RR), GR && (0, Uu.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, Uu.jsx)(gt.b, {
                        itemName: GR.item,
                        amount: 0
                      })
                    })]
                  }), (0, Uu.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: GR ? `\xd7${GR.amount}` : "\xa0"
                  })]
                }, RR)
              }))
            }), (0, Uu.jsx)(Lq, {
              running: "running" === WR,
              opMs: nR.opMs,
              opLeftMs: null !== (iR = null === eR || void 0 === eR ? void 0 : eR.opLeftMs) && void 0 !== iR ? iR : null,
              updateCount: KR.updateCount
            }), (0, Uu.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Uu.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: rR("buildAFactory2Game:machineOutput")
              }), (0, Uu.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: nR.outputSlots.map((RR => (0, Uu.jsx)("div", {
                  children: wR(RR)
                }, RR)))
              })]
            })]
          }), null !== AR && (0, Uu.jsx)(XZ, {
            stored: AR,
            cap: CR,
            rates: null !== (fR = null === eR || void 0 === eR ? void 0 : eR.powerRates) && void 0 !== fR ? fR : null
          }), null !== WR && (0, Uu.jsx)("div", {
            className: Ct()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== WR
            }),
            children: rR(Vq(Xq, WR, eR, !1))
          }), UR && UR.inputs.length > 1 && (0, Uu.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: rR("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, Uu.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, Uu.jsx)(su, {
            taught: LR,
            tier: aR
          }), UR && (0, Uu.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: rR("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Bq(RR) {
      var JR;
      const GR = null !== (JR = DJ[Xq].inputSlots) && void 0 !== JR ? JR : [];
      return {
        render: JR => {
          let {
            Ft: GR,
            renderSlot: yR
          } = JR;
          return (0, Uu.jsx)(Mq, {
            Ft: GR,
            store: RR,
            renderSlot: yR
          })
        },
        quickMoveRange: [Math.min(...GR), Math.max(...GR) + 1],
        className: rq(Xq)
      }
    }
    var lq = GR(103),
      pq = GR(1196),
      gq = GR(3017);
    const bq = 600,
      vq = .5,
      Oq = 4,
      xq = 1200,
      Nq = 140,
      Dq = 100,
      Hq = 32,
      oq = 16,
      cq = 100.5,
      Pq = 90,
      Iq = 1.5,
      mq = 50;

    function zq(RR) {
      switch (OG(RR)) {
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
    const Sq = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function jq(RR) {
      const JR = Math.ceil(60 * RR / Dq);
      return {
        fuel: Math.max(Hq, JR),
        waste: Math.max(oq, JR)
      }
    }

    function dq(RR, JR, GR) {
      const [yR, tR, uR] = [RR - 2, JR - 2, GR - 2];
      return 2 * (yR * tR + tR * uR + uR * yR) * Nq
    }

    function Eq(RR, JR, GR) {
      return Math.max(0, RR - 2) * Math.max(0, JR - 2) * Math.max(0, GR - 2)
    }

    function Yq(RR, JR) {
      const [GR, yR, tR] = RR, uR = GR * yR * tR, ZR = new Float32Array(uR);
      let qR = 0,
        iR = 0,
        fR = 0,
        VR = 0,
        KR = 0;
      const wR = (RR, uR, ZR) => RR < 0 || RR >= GR || uR < 0 || uR >= yR || ZR < 0 || ZR >= tR ? 0 : JR[(uR * tR + ZR) * GR + RR];
      for (let LR = 0; LR < yR; LR++)
        for (let RR = 0; RR < tR; RR++)
          for (let yR = 0; yR < GR; yR++) {
            const uR = (LR * tR + RR) * GR + yR,
              rR = JR[uR];
            if (1 === rR) {
              qR++;
              let JR = 0;
              for (const [GR, tR, uR] of Sq) {
                const ZR = wR(yR + GR, LR + tR, RR + uR);
                1 !== ZR && 2 !== ZR || JR++
              }
              ZR[uR] = bq * (1 + vq * Math.min(JR, Oq)), VR += ZR[uR]
            } else if (2 === rR) iR++;
            else if (3 === rR) {
              fR++;
              Sq.some((JR => {
                let [GR, tR, uR] = JR;
                return 1 === wR(yR + GR, LR + tR, RR + uR)
              })) && (KR += xq)
            }
          }
      const rR = dq(GR + 2, yR + 2, tR + 2),
        eR = Math.min(VR, KR, rR),
        aR = qR > 0 ? VR * Dq / qR : 0;
      return {
        rods: qR,
        graphite: iR,
        channels: fR,
        fuelHeat: VR,
        cooling: KR,
        size: rR,
        max: eR,
        vol: uR,
        powerPerUnit: aR,
        pelletsPerMin: aR > 0 ? eR / aR * 60 : 0,
        waterPerS: eR * sR.i,
        rodHeat: ZR
      }
    }
    const kq = 0,
      Qq = 1,
      Fq = 6,
      Tq = 7,
      sq = 8;

    function hq(RR, JR) {
      const [GR, yR, tR] = RR, uR = new Uint8Array(GR * yR * tR), ZR = (RR, uR, ZR) => RR < 0 || RR >= GR || uR < 0 || uR >= yR || ZR < 0 || ZR >= tR ? 0 : JR[(uR * tR + ZR) * GR + RR];
      for (let qR = 0; qR < yR; qR++)
        for (let RR = 0; RR < tR; RR++)
          for (let yR = 0; yR < GR; yR++) {
            const iR = (qR * tR + RR) * GR + yR,
              fR = JR[iR];
            if (1 === fR) {
              let JR = 0;
              for (const [GR, tR, uR] of Sq) {
                const iR = ZR(yR + GR, qR + tR, RR + uR);
                JR += 1 === iR || 2 === iR ? 1 : 0
              }
              uR[iR] = Qq + Math.min(JR, Oq)
            } else if (3 === fR) {
              const JR = Sq.some((JR => {
                let [GR, tR, uR] = JR;
                return 1 === ZR(yR + GR, qR + tR, RR + uR)
              }));
              uR[iR] = JR ? Fq : Tq
            } else 2 === fR && (uR[iR] = sq)
          }
      return uR
    }

    function Ri(RR) {
      return RR.fuelHeat <= RR.cooling && RR.fuelHeat <= RR.size ? "fuel" : RR.cooling <= RR.size ? "cooling" : "size"
    }
    const Ji = Pq;

    function Gi(RR, JR, GR) {
      return Math.round(RR * JR * GR * 25e3 * (1 + .25 * (Math.min(RR, JR, GR) - 2)))
    }

    function yi(RR) {
      return Math.max(0, Math.min(sR.c, RR))
    }

    function ti(RR, JR, GR) {
      const yR = JR * yi(GR);
      return RR <= 0 ? 0 : yR > 0 ? Math.min(200, 100 * RR / yR) : 200
    }

    function ui(RR, JR) {
      const GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? Iq : 1;
      return Math.min(RR.fuelHeat * GR, RR.cooling * yi(JR), RR.size * GR)
    }

    function Zi(RR) {
      return 2 + RR / 10
    }
    const qi = "buildAFactory2Game:";

    function ii(RR) {
      var JR;
      return null !== (JR = RR.baf2RxMood) && void 0 !== JR ? JR : function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const GR = [
          ["calm", 50],
          ["warm", Ji],
          ["hot", cq]
        ];
        for (const [yR, tR] of GR)
          if (RR < tR + (yR === JR ? 3 : 0)) return yR;
        return "alarm"
      }(RR.baf2RxHeat)
    }
    const fi = 120;

    function Vi(RR) {
      const JR = RR.baf2RxState;
      if ("running" === JR && RR.baf2RxHeat > cq) return {
        label: `${qi}rxState_tooHot`,
        tone: "bad",
        fix: `${qi}rxFix_tooHot`
      };
      switch (JR) {
        case "running":
          return {
            label: `${qi}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${qi}rxState_idle`, tone: "off", fix: `${qi}rxFix_idle`
          };
        case "scram":
          return {
            label: `${qi}rxState_scram`, tone: "off", fix: RR.baf2RxHeat < mq ? `${qi}rxFix_scramCool` : `${qi}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${qi}rxState_${JR}`, tone: "off", fix: `${qi}rxFix_${JR}`
          };
        case "melted":
          return {
            label: `${qi}rxState_melted`, tone: "bad", fix: `${qi}rxFix_melted`
          };
        default:
          return {
            label: `${qi}rxState_${JR}`, tone: "warn", fix: `${qi}rxFix_${JR}`
          }
      }
    }

    function Ki(RR) {
      const [JR, GR, yR] = RR.baf2RxStats;
      return {
        fuelHeat: JR,
        cooling: GR * (RR.baf2RxCryo ? Math.max(1, yi(RR.baf2RxWater / 100)) : 1),
        size: yR
      }
    }

    function wi(RR) {
      var JR;
      const GR = "idle" === RR.baf2RxState || "running" === RR.baf2RxState && RR.baf2RxHeat <= cq || "scram" === RR.baf2RxState && RR.baf2RxHeat < mq;
      if (0 === (RR.baf2RxFlags & AJ) || !RR.baf2RxFormed || !GR) return null;
      const {
        fuelHeat: yR,
        cooling: tR,
        size: uR
      } = Ki(RR), ZR = Math.min(yR, tR, uR), qR = Ri({
        fuelHeat: yR,
        cooling: tR,
        size: uR
      }), iR = "cooling" === qR && !0 === RR.baf2RxCryoOpen && !RR.baf2RxCryo, fR = null !== (JR = RR.baf2RxCells) && void 0 !== JR ? JR : "", VR = ("fuel" === qR || "cooling" === qR && !0 === RR.baf2RxCryo) && fR.length > 0 && !fR.includes(String(0)), KR = iR ? "Cryo" : "scram" === RR.baf2RxState ? "Off" : "";
      return ZR < 12e3 ? {
        key: `${qi}rxGrow_${VR?"full":qR}${KR}`,
        amount: ZR
      } : null
    }

    function ri(RR, JR) {
      return RR[0] === JR[0] && RR[1] === JR[1] && RR[2] === JR[2]
    }

    function ei(RR) {
      return [...RR].sort(((RR, JR) => Number(JR[2] < JR[1]) - Number(RR[2] < RR[1])))
    }

    function ai(RR, JR) {
      return JR.some((JR => {
        let [GR, yR] = JR;
        return !(yR <= 0) && ["edge", "cap", "wall", "inside"].some((JR => GR === uy(RR, JR)))
      }))
    }

    function Li(RR, JR, GR) {
      const yR = RR.baf2RxFuel - RR.baf2RxPu > 0 ? GR : 0;
      return {
        full: RR.baf2RxWaste > JR - 3,
        fullInS: yR > 0 ? Math.max(0, JR - RR.baf2RxWaste) / yR : null
      }
    }
    const ni = {
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

    function Ui(RR) {
      return Wi[RR]
    }
    const Wi = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Ai(RR) {
      let [JR, GR, yR] = RR;
      return Math.ceil(dq(JR, GR, yR) * sR.i)
    }

    function Ci(RR, JR) {
      return "battery" === RR ? JR[0] * JR[1] * JR[2] : function(RR) {
        let [JR, GR, yR] = RR;
        return JR * GR * yR - Math.max(0, JR - 2) * Math.max(0, GR - 2) * Math.max(0, yR - 2)
      }(JR) - 1
    }

    function Xi(RR) {
      const JR = Math.max(0, RR);
      if (JR < 10) return String(Math.round(10 * JR) / 10);
      if (JR < 1e4) return Math.round(JR).toLocaleString("en-US");
      if (JR < 1e6) return `${JR<1e5?(Math.floor(JR/100)/10).toFixed(1):Math.floor(JR/1e3)}k`;
      const GR = JR / 1e6;
      return `${GR<10?(Math.floor(100*GR)/100).toFixed(2):GR<100?(Math.floor(10*GR)/10).toFixed(1):Math.floor(GR)}M`
    }

    function Mi(RR) {
      return RR <= 0 ? "0" : RR >= 10 ? String(Math.round(RR)) : RR.toFixed(RR >= 1 ? 1 : 2)
    }

    function Bi(RR) {
      const JR = sG(RR, 0),
        GR = sG(RR, kG(RR) - 1);
      return {
        lo: [Math.min(JR[0], GR[0]), Math.min(JR[1], GR[1]), Math.min(JR[2], GR[2])],
        hi: [Math.max(JR[0], GR[0]) + 1, Math.max(JR[1], GR[1]) + 1, Math.max(JR[2], GR[2]) + 1]
      }
    }

    function li(RR, JR, GR) {
      const yR = [JR[0] - RR[0], JR[1] - RR[1], JR[2] - RR[2]],
        tR = [(RR[0] + JR[0]) / 2, (RR[1] + JR[1]) / 2, (RR[2] + JR[2]) / 2],
        uR = [];
      for (let ZR = 0; ZR < 3; ZR++) {
        const qR = (ZR + 1) % 3,
          iR = (ZR + 2) % 3;
        for (const fR of [RR[qR], JR[qR]])
          for (const VR of [RR[iR], JR[iR]]) {
            const RR = [0, 0, 0],
              JR = [GR, GR, GR];
            RR[ZR] = tR[ZR], JR[ZR] = yR[ZR] + GR, RR[qR] = fR, RR[iR] = VR, uR.push([RR, JR])
          }
      }
      return uR
    }
    const gi = "buildAFactory2Game:",
      bi = [`${gi}colNorth`, `${gi}colEast`, `${gi}colSouth`, `${gi}colWest`];

    function vi(RR, JR) {
      const [GR, yR, tR] = RR.baf2ColAt;
      return `baf2col ${GR} ${yR} ${tR} ${JR}`
    }

    function Oi(RR) {
      return function(RR) {
        if (!Number.isFinite(RR)) return "";
        const JR = Math.max(1, Math.round(RR));
        if (JR < 60) return `${JR}s`;
        const GR = JR % 60;
        return 0 === GR ? JR / 60 + "m" : `${Math.floor(JR/60)}m ${GR}s`
      }(function(RR) {
        const JR = Zy.FOCUS_BY_LASERS[Math.max(0, Math.min(4, RR))];
        return JR > 0 ? Zy.NOVA_FOCUS / JR : 1 / 0
      }(RR))
    }

    function xi(RR) {
      const JR = Math.abs(Math.round(RR));
      return JR < 1e3 ? Math.round(RR).toLocaleString("en-US") : JR < 1e6 ? `${JR<1e5?(RR/1e3).toFixed(1).replace(/\.0$/,""):Math.round(RR/1e3)}k` : `${(RR/1e6).toFixed(JR<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function Ni(RR, JR, GR) {
      if (wy(JR) >= 0) {
        const JR = function(RR, JR) {
          return RR.find((RR => {
            let {
              focus: GR
            } = RR;
            return GR[0] === JR[0] && GR[2] === JR[2] && (JR[1] === GR[1] || JR[1] === GR[1] - 1)
          }))
        }(RR, GR);
        if (!JR) return null;
        const tR = function(RR) {
          let JR = 0,
            GR = 0;
          for (let yR = 0; yR < 4; yR++) JR += RR.laser[yR] ? 1 : 0, GR += RR.live[yR] ? 1 : 0;
          return {
            lasers: JR,
            live: GR,
            focusPerS: Zy.FOCUS_BY_LASERS[GR],
            drawPerS: Zy.LASER_DRAW * GR
          }
        }({
          laser: JR.lasers,
          live: JR.live
        });
        if (0 === tR.lasers || "noLasers" === JR.state) return {
          key: `${gi}lookColNoLasers`
        };
        if (0 === tR.live) return {
          key: `${gi}lookColOff_blocked`
        };
        if (!(JR.on && tR.live > 0) && ("running" !== (yR = JR.state) && "slowed" !== yR)) return {
          key: `${gi}lookColOff_${JR.state}`
        };
        if (tR.live < tR.lasers) return {
          key: `${gi}lookColLasersSome`,
          params: {
            lasers: String(tR.lasers),
            live: String(tR.live)
          }
        };
        const uR = JR.open.filter(Boolean).length;
        return uR < 4 ? {
          key: `${gi}lookColLasersSpots`,
          params: {
            live: String(tR.live),
            spots: String(uR),
            time: Oi(tR.live)
          }
        } : {
          key: `${gi}lookColLasers`,
          params: {
            live: String(tR.live),
            time: Oi(tR.live)
          }
        }
      }
      var yR;
      if (!ry(JR)) return null;
      const tR = function(RR, JR) {
        for (const GR of RR) {
          const RR = ny(GR.focus, [JR[0], JR[1], JR[2]]);
          if (RR && RR.xZ === Zy.LASER_D && GR.lasers[RR.dir]) return {
            entry: GR,
            dir: RR.dir
          }
        }
        return null
      }(RR, GR);
      if (!tR) return {
        key: `${gi}lookLaserNoCollider`
      };
      const {
        entry: uR,
        dir: ZR
      } = tR;
      return uR.open[ZR] ? uR.live[ZR] ? {
        key: uR.on ? `${gi}lookLaserFiring` : `${gi}lookLaserReady`
      } : {
        key: `${gi}lookLaserBlocked`
      } : {
        key: `${gi}lookLaserClosed`
      }
    }

    function Di(RR, JR) {
      const GR = [];
      for (let yR = 1; yR < Zy.LASER_D; yR++) RR & 1 << JR * (Zy.LASER_D - 1) + yR - 1 && GR.push(yR);
      return GR
    }
    const Hi = {
      firing: `${gi}colSlotFiring`,
      ready: `${gi}colSlotReady`,
      blocked: `${gi}colSlotBlocked`,
      empty: `${gi}colSlotEmpty`,
      closed: `${gi}colSlotClosed`
    };

    function oi(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const uR = yt(RR),
        ZR = yt(JR),
        qR = yt(GR),
        iR = qR.filter(Boolean).length,
        fR = uR.filter(Boolean).length,
        VR = [0, 1, 2, 3].map((RR => ZR[RR] ? uR[RR] ? qR[RR] ? yR ? "firing" : "ready" : "blocked" : (RR => Di(tR, RR).length > 0)(RR) ? "blocked" : "empty" : "closed")),
        KR = VR.indexOf("blocked"),
        wR = KR < 0 && fR > 0 ? VR.indexOf("empty") : -1;
      return VR.map(((RR, JR) => {
        const GR = JR === KR ? {
          key: `${gi}colSlotClear`
        } : JR === wR ? {
          key: `${gi}colSlotAdd`,
          params: {
            time: Oi(Math.min(4, iR + 1))
          }
        } : null;
        return {
          dir: JR,
          tone: RR,
          title: {
            key: "blocked" !== RR || uR[JR] ? Hi[RR] : `${gi}colSlotGap`,
            keys: {
              dir: bi[JR]
            }
          },
          hint: GR
        }
      }))
    }

    function ci(RR) {
      var JR;
      return "noPower" === RR.baf2ColState && RR.baf2ColRxState ? Vi({
        baf2RxState: RR.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (JR = RR.baf2ColRxHeat) && void 0 !== JR ? JR : 0
      }) : null
    }

    function Pi(RR) {
      const JR = yt(RR.baf2ColSpots).filter(Boolean).length,
        GR = yt(RR.baf2ColLive);
      let yR = 0,
        tR = 0;
      return yt(RR.baf2ColLasers).forEach(((RR, JR) => {
        RR && (yR++, tR += GR[JR] ? 0 : 1)
      })), tR > 0 ? {
        key: `${gi}colSubSome`,
        params: {
          blocked: String(tR),
          lasers: String(yR)
        }
      } : JR < 4 ? {
        key: `${gi}colSubSpots`,
        params: {
          lasers: String(yR),
          spots: String(JR)
        }
      } : {
        key: `${gi}colSub`,
        params: {
          lasers: String(yR)
        }
      }
    }

    function Ii(RR) {
      const JR = ci(RR);
      if ("idle" === RR.baf2ColRxState && JR) return {
        key: `${gi}colState_noPowerIdle`
      };
      if (JR) return {
        key: `${gi}colState_noPowerReactor`,
        keys: {
          state: JR.label
        }
      };
      if ("noInput" !== RR.baf2ColState) return {
        key: `${gi}colState_${RR.baf2ColState}`
      };
      const GR = String(Math.max(0, Zy.NOVA_SA - RR.baf2ColSa)),
        yR = String(Math.max(0, Zy.NOVA_GD - RR.baf2ColGd));
      return "0" !== GR && "0" !== yR ? {
        key: `${gi}colState_noInput`,
        params: {
          sa: GR,
          gd: yR
        }
      } : "0" !== GR ? {
        key: `${gi}colState_noStarAlloy`,
        params: {
          sa: GR
        }
      } : "0" !== yR ? {
        key: `${gi}colState_noGlowDust`,
        params: {
          gd: yR
        }
      } : {
        key: `${gi}colState_running`
      }
    }

    function mi(RR) {
      return RR.baf2ColP < 0 ? `${gi}colNext` : function(RR) {
        const JR = RR.baf2ColState;
        return RR.baf2ColP >= 0 && ("blocked" === JR || "noLasers" === JR || "noPower" === JR)
      }(RR) ? `${gi}colStalled` : null === zi(RR) ? `${gi}colMaking` : `${gi}colNovaIn`
    }

    function zi(RR) {
      if (RR.baf2ColP < 0 || RR.baf2ColWant <= 0) return null;
      const JR = RR.baf2ColFocusPerS * Math.min(1, RR.baf2ColDraw / RR.baf2ColWant);
      return JR > 0 ? Math.max(0, Zy.NOVA_FOCUS - RR.baf2ColP) / JR : null
    }

    function Si(RR, JR) {
      const GR = [];
      for (let yR = 1; yR <= 3; yR++) {
        const tR = [RR[0], RR[1] - yR, RR[2]];
        if (!JR(tR)) return GR;
        GR.push(tR)
      }
      return []
    }

    function ji(RR, JR) {
      const GR = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let yR = 0; yR < 4; yR++) {
        const tR = yR,
          uR = Ly(RR.focus, tR, Zy.LASER_D);
        if (RR.lasers[yR] || !RR.open[yR] || !JR(uR)) continue;
        const ZR = [];
        for (let GR = 1; GR < Zy.LASER_D; GR++) {
          const yR = Ly(RR.focus, tR, GR);
          JR(yR) || ZR.push(yR)
        }
        GR.supports.push(...Si(uR, JR)), 0 === ZR.length ? GR.free.push(uR) : (GR.blocked.push(uR), GR.gaps.push(...ZR))
      }
      return GR
    }
    const di = Zy.LASER_D - .25,
      Ei = 4,
      Yi = 2,
      ki = 16;
    const Qi = {
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
        blendMode: gq.c.Standard,
        soft: !0
      },
      Fi = {
        green: Qi,
        pink: {
          ...Qi,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function Ti(RR, JR) {
      const GR = {
        ...JR.params
      };
      for (const [tR, uR] of Object.entries(null !== (yR = JR.keys) && void 0 !== yR ? yR : {})) {
        var yR;
        GR[tR] = RR(uR)
      }
      return GR
    }
    const si = "buildAFactory2Game:",
      Rf = 2 * Zy.LASER_D + 1,
      Jf = Zy.LASER_D;

    function Gf(RR) {
      return RR(`${si}colFocusTip`, {
        need: xi(Zy.NOVA_FOCUS)
      })
    }

    function yf(RR, JR) {
      return RR(JR.key, Ti(RR, JR))
    }

    function tf(RR) {
      const JR = RR.getStatus();
      return {
        status: JR,
        entry: JR ? RR.entryAtRoot(JR.baf2ColAt) : void 0
      }
    }

    function uf(RR, JR) {
      return {
        left: 100 * (Jf + RR) / Rf + "%",
        top: 100 * (Jf + JR) / Rf + "%"
      }
    }

    function Zf(RR) {
      let {
        status: JR,
        entry: GR
      } = RR;
      const yR = yt(JR.baf2ColLasers),
        tR = yt(JR.baf2ColSpots),
        uR = yt(JR.baf2ColLive),
        ZR = !0 === (null === GR || void 0 === GR ? void 0 : GR.on),
        qR = Zy.LASER_D,
        iR = [];
      for (let rR = 0; rR < 4; rR++) {
        const [RR, , JR] = ay[rR];
        if (uR[rR]) {
          const GR = 100 * (qR - 1) / Rf,
            yR = RR + JR > 0 ? 100 * (Jf + 1) / Rf : 100 * (Jf - (qR - 1)) / Rf,
            tR = 100 * (Jf + .35) / Rf,
            uR = 30 / Rf,
            fR = 0 !== RR ? {
              left: `${yR}%`,
              width: `${GR}%`,
              top: `${tR}%`,
              height: `${uR}%`
            } : {
              top: `${yR}%`,
              height: `${GR}%`,
              left: `${tR}%`,
              width: `${uR}%`
            };
          iR.push((0, Uu.jsx)("i", {
            className: Ct()("Baf2ColDiagramBeam", {
              Off: !ZR
            }),
            style: fR
          }, `beam${rR}`))
        }
        const GR = yR[rR] ? "Baf2ColDiagramLaser" : tR[rR] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        iR.push((0, Uu.jsx)("i", {
          className: GR,
          style: uf(RR * qR, JR * qR)
        }, `spot${rR}`))
      }
      for (let rR = 0; rR < 4; rR++) {
        if (yR[rR] || !tR[rR]) continue;
        const [RR, , GR] = ay[rR];
        for (const yR of Di(null !== (fR = JR.baf2ColGaps) && void 0 !== fR ? fR : 0, rR)) {
          var fR;
          iR.push((0, Uu.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: uf(RR * yR, GR * yR)
          }, `gap${rR},${yR}`))
        }
      }
      for (const [rR, , eR] of null !== (VR = null === GR || void 0 === GR ? void 0 : GR.blockers) && void 0 !== VR ? VR : []) {
        var VR, KR, wR;
        const RR = rR - (null !== (KR = null === GR || void 0 === GR ? void 0 : GR.focus[0]) && void 0 !== KR ? KR : 0),
          JR = eR - (null !== (wR = null === GR || void 0 === GR ? void 0 : GR.focus[2]) && void 0 !== wR ? wR : 0);
        iR.push((0, Uu.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: uf(RR, JR)
        }, `block${RR},${JR}`))
      }
      return (0, Uu.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [iR, (0, Uu.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function qf(RR) {
      let {
        status: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)(), yR = yt(JR.baf2ColLive).filter(Boolean).length;
      return (0, Uu.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, Uu.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: Gf(GR),
          children: GR(`${si}colLadder`)
        }), (0, Uu.jsx)("ul", {
          children: [1, 2, 3, 4].map((RR => (0, Uu.jsx)("li", {
            className: Ct()({
              On: RR === yR
            }),
            children: GR(`${si}colLadderChip`, {
              lasers: String(RR),
              time: Oi(RR)
            })
          }, RR)))
        })]
      })
    }

    function ff(RR) {
      let {
        item: JR,
        Qq: GR,
        need: yR,
        cap: tR
      } = RR;
      const {
        t: uR
      } = (0, lt.A)(), ZR = Math.min(GR, yR);
      return (0, Uu.jsxs)("li", {
        className: Ct()("Baf2ColTile", {
          Short: GR < yR
        }),
        children: [(0, Uu.jsx)(Vf, {
          item: JR
        }), (0, Uu.jsx)("b", {
          className: "Baf2ColTileValue",
          children: uR(`${si}colOutOf`, {
            amount: String(ZR),
            cap: String(yR)
          })
        }), (0, Uu.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, Uu.jsx)("i", {
            style: {
              width: 100 * ZR / yR + "%"
            }
          })
        }), GR > yR && (0, Uu.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: uR(`${si}colIntakeHeld`, {
            amount: String(GR),
            cap: String(tR)
          })
        })]
      })
    }

    function Vf(RR) {
      let {
        item: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)();
      return (0, Uu.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, Uu.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, Uu.jsx)(gt.b, {
            itemName: JR,
            amount: 0
          })
        }), (0, Uu.jsx)("span", {
          className: "Baf2ColTileName",
          children: (0, ht.f)(GR, JR)
        })]
      })
    }

    function Kf(RR) {
      switch (RR.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function wf(RR) {
      var JR, GR, tR;
      let {
        store: uR,
        close: ZR
      } = RR;
      const {
        t: qR
      } = (0, lt.A)(), iR = DZ(), {
        status: fR,
        entry: VR
      } = function(RR) {
        const [JR, GR] = (0, yR.useState)((() => tf(RR)));
        return (0, yR.useEffect)((() => (GR(tf(RR)), RR.subscribe((() => {
          GR(tf(RR))
        })))), [RR]), JR
      }(uR), [KR, wR] = (0, yR.useState)(null), rR = null === fR || void 0 === fR ? void 0 : fR.baf2ColHold;
      (0, yR.useEffect)((() => {
        wR(null)
      }), [rR]);
      const eR = (0, yR.useRef)({
          p: -1,
          n: 0
        }),
        aR = null !== (JR = null === fR || void 0 === fR ? void 0 : fR.baf2ColP) && void 0 !== JR ? JR : -1;
      aR < eR.current.p && eR.current.n++, eR.current.p = aR;
      const LR = (0, yR.useRef)(null),
        [nR] = (0, yR.useState)((() => {
          return (RR = uR.heldAtOpen()) === fy || RR === Vy ? {
            key: `${gi}colBeltItIn`,
            item: RR
          } : null;
          var RR
        }));
      if (!fR) return null;
      const UR = fR.baf2ColMember,
        WR = fR.baf2ColP >= 0,
        AR = function(RR, JR) {
          if (RR.baf2ColP >= 0 && RR.baf2ColDraw > 0) {
            const JR = RR.baf2ColWant > 0 ? Math.min(1, RR.baf2ColDraw / RR.baf2ColWant) : 0;
            return {
              focus: RR.baf2ColFocusPerS * JR,
              draw: RR.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === RR.baf2ColState && JR && JR.draw > 0 ? {
            ...JR,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(fR, LR.current);
      LR.current = AR.draw > 0 ? AR : null;
      const CR = "slowed" === fR.baf2ColState || "noPower" === fR.baf2ColState,
        XR = zi(fR),
        MR = null !== KR && void 0 !== KR ? KR : fR.baf2ColHold,
        BR = function(RR) {
          var JR, GR;
          return "idle" === RR.baf2ColRxState ? null : null !== (JR = null === (GR = ci(RR)) || void 0 === GR ? void 0 : GR.fix) && void 0 !== JR ? JR : null
        }(fR),
        lR = null === BR && null === nR ? function(RR) {
          var JR;
          const GR = RR.baf2ColSentTo;
          if (!GR) return null;
          const yR = null !== (JR = RR.baf2ColSentHeld) && void 0 !== JR ? JR : null;
          return {
            key: null === yR ? `${gi}colNovaSentToMachine` : `${gi}colNovaSentTo`,
            target: GR,
            Qq: yR
          }
        }(fR) : null,
        pR = WR ? qR(`${si}colFocusOf`, {
          focus: xi(fR.baf2ColP),
          need: xi(Zy.NOVA_FOCUS)
        }) : null;
      return (0, Uu.jsx)(eZ.e, {
        close: ZR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, Uu.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, Uu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Uu.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, Uu.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Uu.jsx)(gt.b, {
                  itemName: qy,
                  amount: 0
                })
              }), (0, Uu.jsxs)("div", {
                children: [(0, Uu.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: (0, ht.f)(qR, qy)
                }), (0, Uu.jsx)("p", {
                  children: yf(qR, Pi(fR))
                })]
              })]
            }), (0, Uu.jsx)(aZ.l, {
              onClick: ZR
            })]
          }), (0, Uu.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, Uu.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, Uu.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, Uu.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: qR(mi(fR), {
                    time: null === XR ? "" : Lu(qR, XR)
                  })
                }), (0, Uu.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, Uu.jsx)("i", {
                    style: {
                      width: (WR ? 100 * fR.baf2ColP / Zy.NOVA_FOCUS : 0) + "%"
                    }
                  }, eR.current.n)
                }), (0, Uu.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, Uu.jsxs)("span", {
                    title: Gf(qR),
                    children: [(0, Uu.jsx)("b", {
                      children: xi(AR.focus)
                    }), " ", qR(`${si}colFocusPerS`)]
                  }), (0, Uu.jsxs)("span", {
                    className: Ct()("Baf2ColDraw", {
                      Short: CR
                    }),
                    children: [(0, Uu.jsx)(pt.d, {
                      name: "bolt"
                    }), CR ? qR(`${si}colDrawOf`, {
                      draw: xi(fR.baf2ColDraw),
                      want: xi(fR.baf2ColWant)
                    }) : qR(`${si}colPowerPerS`, {
                      rate: xi(AR.draw)
                    })]
                  }), null !== pR && (0, Uu.jsx)("span", {
                    className: "Soft",
                    children: pR
                  })]
                })]
              }), (0, Uu.jsx)("p", {
                className: Ct()("Baf2ColState", Kf(fR)),
                children: yf(qR, Ii(fR))
              }), null !== BR && (0, Uu.jsx)("p", {
                className: "Baf2ColStateFix",
                children: qR(BR)
              }), null === BR && null !== nR && (0, Uu.jsx)("p", {
                className: "Baf2ColStateFix",
                children: qR(nR.key, {
                  item: (0, ht.f)(qR, nR.item)
                })
              }), lR && (0, Uu.jsx)("p", {
                className: "Baf2ColStateFix",
                children: qR(lR.key, {
                  target: (0, ht.f)(qR, lR.target),
                  amount: String(null !== (GR = lR.Qq) && void 0 !== GR ? GR : 0)
                })
              }), (0, Uu.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, Uu.jsx)(ff, {
                  item: fy,
                  Qq: fR.baf2ColSa,
                  need: Zy.NOVA_SA,
                  cap: Zy.SA_CAP
                }), (0, Uu.jsx)(ff, {
                  item: Vy,
                  Qq: fR.baf2ColGd,
                  need: Zy.NOVA_GD,
                  cap: Zy.GD_CAP
                }), (0, Uu.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, Uu.jsx)(Vf, {
                    item: "Nova Matter"
                  }), (0, Uu.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: qR(`${si}colNovaHeld`, {
                      amount: String(fR.baf2ColOut),
                      cap: String(Zy.OUT_CAP)
                    })
                  }), UR && (0, Uu.jsx)(aZ.n, {
                    className: "Baf2ColTake",
                    disabled: 0 === fR.baf2ColOut,
                    onClick: () => {
                      iR.send(vi(fR, "take"))
                    },
                    children: qR(`${si}colTake`)
                  })]
                })]
              }), UR && (0, Uu.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": MR,
                className: Ct()("Baf2ColHold", {
                  On: MR
                }),
                onClick: RR => {
                  RR.detail > 0 && RR.currentTarget.blur(), wR(!MR), iR.send(vi(fR, "hold " + (MR ? 0 : 1)))
                },
                children: [(0, Uu.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, Uu.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, Uu.jsx)("b", {
                    children: qR(`${si}colHold`)
                  }), (0, Uu.jsx)("span", {
                    children: qR(`${si}colHoldNote`)
                  })]
                })]
              })]
            }), (0, Uu.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, Uu.jsx)(Zf, {
                status: fR,
                entry: VR
              }), (0, Uu.jsx)("ul", {
                className: "Baf2ColSlots",
                children: oi(fR.baf2ColLasers, fR.baf2ColSpots, fR.baf2ColLive, AR.beamsOn, null !== (tR = fR.baf2ColGaps) && void 0 !== tR ? tR : 0).map((RR => (0, Uu.jsxs)("li", {
                  className: RR.tone,
                  children: [(0, Uu.jsx)("b", {
                    children: yf(qR, RR.title)
                  }), null !== RR.hint && (0, Uu.jsx)("span", {
                    children: yf(qR, RR.hint)
                  })]
                }, RR.dir)))
              }), (0, Uu.jsx)(qf, {
                status: fR
              })]
            })]
          })]
        })
      })
    }
    const rf = "buildAFactory2Game:",
      ef = 36e5,
      af = 864e5;

    function Lf(RR, JR, GR) {
      return Math.max(0, Math.ceil((RR + JR - Math.max(GR, RR)) / 1e3))
    }

    function nf(RR) {
      return RR.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function Uf(RR) {
      return "Homestead" === RR
    }

    function Wf(RR) {
      return function(RR) {
        let JR = 0;
        for (const GR of RR) {
          const RR = /^Island ([1-9]\d{0,5})$/.exec(GR);
          RR && (JR = Math.max(JR, Number(RR[1])))
        }
        return `Island ${JR+1}`
      }(RR.map((RR => RR.baf2IslandName)))
    }

    function Af(RR, JR) {
      return function(RR) {
        return `${rf}islandsBlocked${RR[0].toUpperCase()}${RR.slice(1)}`
      }("degraded" === RR && 0 === JR ? "stuck" : RR)
    }

    function Cf(RR) {
      return RR.filter((RR => {
        var JR;
        return !RR.baf2IslandActive && void 0 === RR.baf2IslandUnreadable && void 0 === (null === (JR = RR.baf2IslandCoop) || void 0 === JR ? void 0 : JR.baf2CoopState)
      })).length
    }

    function Xf(RR) {
      return "coopMoving" === RR || "coopUnreachable" === RR
    }

    function Mf(RR, JR) {
      const GR = JR > 0;
      return {
        change: null === RR && !GR,
        switch: (null === RR || "degraded" === RR || Xf(RR)) && !GR,
        rename: "loading" !== RR && "degraded" !== RR && "stuck" !== RR
      }
    }

    function Bf(RR, JR) {
      return void 0 === RR || "corrupt" === RR && JR
    }
    const lf = pZ;

    function pf(RR, JR, GR) {
      if (null !== RR && void 0 !== RR && RR.untilGone) {
        var yR;
        return !("dismiss" === RR.untilGone && void 0 === (null === (yR = JR.baf2IslandCoop) || void 0 === yR ? void 0 : yR.baf2CoopState)) && GR - RR.atMs < 32500
      }
      return void 0 !== RR && GR - RR.atMs < lf && JR.baf2IslandName === RR.from
    }
    const gf = pZ;

    function bf(RR) {
      return "core" === (null === RR || void 0 === RR ? void 0 : RR.kind) ? RR.core : "islands" === (null === RR || void 0 === RR ? void 0 : RR.kind) ? RR.backToCore : void 0
    }

    function vf(RR) {
      return `\0${RR}\0`
    }

    function Of(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const yR = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const uR of Object.keys(GR)) yR[uR] = vf(uR);
      let tR = Object.keys(yR).length > 0 ? RR(JR, yR) : RR(JR);
      for (const [uR, ZR] of Object.entries(GR)) tR = tR.split(vf(uR)).join(ZR);
      return tR
    }

    function xf(RR, JR) {
      return RR ? JR ? "enabled" : "disabled" : "hidden"
    }
    const Nf = {
      removed: `${rf}islandsCoopRemoved`,
      deleted: `${rf}islandsCoopDeleted`,
      notReady: `${rf}islandsCoopNotReady`,
      gone: `${rf}islandsCoopGone`
    };

    function Df(RR) {
      var JR;
      return "member" !== (null === (JR = RR.baf2IslandCoop) || void 0 === JR ? void 0 : JR.baf2CoopRole) && "newer" !== RR.baf2IslandUnreadable
    }

    function Hf(RR, JR, GR, yR, tR, uR) {
      const ZR = RR.baf2IslandActive,
        qR = RR.baf2IslandUnreadable,
        iR = RR.baf2IslandCoop,
        fR = function(RR, JR, GR) {
          return {
            switch: RR.switch && void 0 === JR,
            delete: RR.change && Bf(JR, GR)
          }
        }(JR, qR, yR),
        VR = ZR && void 0 !== iR && void 0 === iR.baf2CoopState && "coopUnreachable" === uR,
        KR = {
          switch: xf((!ZR || VR) && void 0 === qR, VR || fR.switch),
          switchLabel: VR ? "tryAgain" : "switch",
          rename: xf(!0, JR.rename),
          delete: xf(!ZR, fR.delete),
          deleteWaits: !ZR && Bf(qR, yR),
          people: xf(void 0 !== RR.baf2IslandInvitable || tR && ZR && void 0 === qR && void 0 === iR, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        wR = !ZR && fR.delete;
      if (void 0 === iR) return GR ? {
        ...KR,
        delete: xf(!ZR, !1),
        deleteWaits: !1,
        note: wR ? {
          key: `${rf}islandsCoopKeepOwn`
        } : null
      } : KR;
      const rR = iR.baf2CoopState,
        eR = iR.baf2CoopMembers.length > 1,
        aR = {
          ...KR,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== rR && "member" === iR.baf2CoopRole) return {
        ...aR,
        dismiss: xf(!0, JR.rename),
        note: {
          key: Nf[rR],
          names: {
            owner: iR.baf2CoopOwner
          }
        }
      };
      if (void 0 !== rR) {
        let RR = {
          key: `${rf}islandsCoopOwnLost`
        };
        return wR && eR ? RR = {
          key: `${rf}islandsCoopDeleteMembers`
        } : wR && GR && (RR = {
          key: `${rf}islandsCoopKeepOwn`
        }), {
          ...aR,
          delete: xf(!ZR, fR.delete && !eR && !GR),
          deleteWaits: KR.deleteWaits && !eR && !GR,
          note: RR
        }
      }
      if ("member" === iR.baf2CoopRole) return {
        ...KR,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: xf(!0, ZR ? JR.switch : JR.rename)
      };
      const LR = iR.baf2CoopManageHere;
      let nR = null;
      var UR;
      LR || ZR ? wR && eR ? nR = {
        key: `${rf}islandsCoopDeleteMembers`
      } : wR && GR && (nR = {
        key: `${rf}islandsCoopKeepOwn`
      }) : nR = {
        key: null !== (UR = iR.baf2CoopLeft) && void 0 !== UR && UR.length ? `${rf}islandsCoopManageThereClaim` : `${rf}islandsCoopManageThere`
      };
      return {
        ...KR,
        rename: xf(!0, JR.rename && LR),
        delete: xf(!ZR, fR.delete && !eR && !GR),
        deleteWaits: KR.deleteWaits && !eR && !GR,
        people: "enabled",
        peopleLabel: "players",
        unshare: xf(LR && ZR && !eR, JR.change),
        remove: LR,
        note: nR
      }
    }

    function of(RR) {
      var JR;
      const GR = RR.baf2IslandCoop;
      if ("owner" !== (null === GR || void 0 === GR ? void 0 : GR.baf2CoopRole) || void 0 !== GR.baf2CoopState || null === (JR = GR.baf2CoopLeft) || void 0 === JR || !JR.length) return null;
      const yR = RR.baf2IslandActive && GR.baf2CoopManageHere;
      return {
        left: GR.baf2CoopLeft,
        claim: yR,
        goThere: !yR && GR.baf2CoopManageHere
      }
    }

    function Pf(RR) {
      return RR.baf2CoopMembers.length >= RR.baf2CoopMax
    }

    function If(RR, JR, GR) {
      return void 0 !== RR && JR < RR.answer && GR - RR.atMs < lf
    }
    const mf = "buildAFactory2Game:";

    function zf(RR, JR) {
      return {
        onKeyDown: GR => {
          GR.stopPropagation(), GR.nativeEvent.isComposing || 229 === GR.nativeEvent.keyCode || ("Enter" === GR.key ? (GR.preventDefault(), RR()) : "Escape" === GR.key && (GR.preventDefault(), JR()))
        }
      }
    }

    function Sf(RR) {
      return {
        onKeyDown: JR => {
          "Escape" !== JR.key || JR.nativeEvent.isComposing || (JR.preventDefault(), JR.stopPropagation(), RR())
        }
      }
    }

    function jf(RR) {
      RR.currentTarget.select()
    }

    function df(RR, JR) {
      (0, yR.useEffect)((() => {
        var GR;
        RR && (null === (GR = JR.current) || void 0 === GR || GR.scrollIntoView({
          block: "nearest"
        }))
      }), [RR, JR])
    }

    function Ef(RR) {
      const [JR, GR] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        const JR = document.querySelector(".UiRequests"),
          yR = RR.current;
        if (!JR || !yR || "undefined" === typeof ResizeObserver) return;
        const tR = () => {
          const RR = JR.getBoundingClientRect(),
            tR = yR.getBoundingClientRect(),
            uR = yR.parentElement,
            ZR = uR && parseFloat(getComputedStyle(uR).paddingTop) || 0,
            qR = function(RR, JR, GR, yR) {
              if (!RR || RR.height <= 0 || RR.right <= JR.left || RR.left >= JR.right) return null;
              const tR = Math.max(yR, RR.bottom + 8);
              return {
                marginTop: Math.round(tR - yR),
                maxHeight: Math.max(0, Math.floor(GR - tR - yR))
              }
            }(RR, tR, window.innerHeight, ZR);
          GR((RR => (null === RR || void 0 === RR ? void 0 : RR.marginTop) === (null === qR || void 0 === qR ? void 0 : qR.marginTop) && (null === RR || void 0 === RR ? void 0 : RR.maxHeight) === (null === qR || void 0 === qR ? void 0 : qR.maxHeight) ? RR : qR))
        };
        tR();
        const uR = new ResizeObserver(tR);
        return uR.observe(JR), window.addEventListener("resize", tR), () => {
          uR.disconnect(), window.removeEventListener("resize", tR)
        }
      }), [RR]), JR
    }

    function Yf() {
      (0, yR.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function kf(RR) {
      (0, yR.useEffect)((() => {
        var JR;
        null === (JR = RR.current) || void 0 === JR || JR.focus()
      }), [RR])
    }

    function Qf(RR) {
      const [JR, GR] = (0, yR.useState)(Date.now);
      return (0, yR.useEffect)((() => {
        const JR = window.setInterval((() => {
          GR(Date.now())
        }), RR);
        return () => {
          window.clearInterval(JR)
        }
      }), [RR]), JR
    }

    function Ff(RR) {
      let {
        tier: JR,
        t: GR
      } = RR;
      const {
        kind: yR,
        short: tR
      } = LR(JR), uR = rR(JR, eR), ZR = GR(`${mf}${uR.key}`, {
        ...uR.params,
        name: GR(`${mf}${nR(JR).nameKey}`)
      });
      return (0, Uu.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, Uu.jsx)("span", {
          className: Ct()("Baf2IslandTierPip", {
            Stage: "tier" !== yR
          }),
          "aria-hidden": "true",
          children: tR
        }), ZR]
      })
    }

    function Tf(RR) {
      let {
        note: JR,
        className: GR,
        t: yR
      } = RR;
      return (0, Uu.jsx)("p", {
        className: Ct()("Baf2IslandNote", GR),
        children: Of(yR, JR.key, JR.names, JR.params)
      })
    }
    const sf = "buildAFactory2Game:";

    function hf(RR) {
      let {
        message: JR,
        arrivedAtMs: GR,
        close: tR,
        leave: uR
      } = RR;
      const ZR = DZ(),
        {
          t: qR
        } = (0, lt.A)(),
        iR = Qf(1e3),
        fR = (0, yR.useRef)(null);
      Yf(), (0, yR.useEffect)((() => {
        var RR;
        null === (RR = fR.current) || void 0 === RR || RR.focus()
      }), []);
      const VR = Lf(GR, JR.baf2TransferInMs, iR),
        KR = GR + JR.baf2TransferInMs - 1e3,
        [wR, rR] = (0, yR.useState)(null);
      (0, yR.useEffect)((() => {
        const RR = window.setTimeout((() => {
          rR(KR)
        }), Math.max(0, KR - Date.now()));
        return () => {
          window.clearTimeout(RR)
        }
      }), [KR]);
      const eR = wR === KR || iR >= KR,
        aR = JR.baf2TransferIsland,
        LR = JR.baf2TransferOwner;
      return (0, Uu.jsx)(eZ.e, {
        close: tR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Uu.jsxs)("section", {
          ref: fR,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, Uu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Uu.jsxs)("div", {
              children: [(0, Uu.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === LR ? Of(qR, `${sf}islandsTransferOwn`, {
                  island: aR
                }) : Of(qR, `${sf}islandsTransfer`, {
                  island: aR,
                  owner: LR
                })
              }), (0, Uu.jsx)("p", {
                children: eR ? qR(`${sf}islandsTransferNow`) : qR(`${sf}islandsTransferIn`, {
                  time: Lu(qR, VR)
                })
              })]
            }), (0, Uu.jsx)(aZ.l, {
              ariaLabel: qR(`${sf}islandsClose`),
              onClick: tR
            })]
          }), !eR && (0, Uu.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, Uu.jsx)("p", {
              className: "Baf2TransferNote",
              children: qR(`${sf}islandsTransferNote`)
            }), (0, Uu.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, Uu.jsx)(aZ.g, {
                onClick: () => {
                  ZR.send("baf2coopstay"), uR()
                },
                children: qR(`${sf}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var RV = GR(1581),
      JV = GR(1204),
      GV = GR.n(JV);
    const yV = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const tV = "buildAFactory2Game:",
      uV = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function ZV(RR, JR, GR) {
      return void 0 === JR ? GR : "string" === typeof JR ? JR : Array.isArray(JR) ? JR.map((JR => "string" === typeof JR ? JR : "translationKey" in JR ? RR(JR.translationKey) : "")).join("") : RR(JR.translationKey)
    }

    function qV(RR) {
      const JR = {};
      for (const [GR, yR] of Object.entries(null !== RR && void 0 !== RR ? RR : {})) JR[GR] = yR < 0 ? au(yR) : yR.toLocaleString("en-US");
      return JR
    }

    function iV(RR, JR) {
      const GR = JR ? "touch" : "mouse";
      return {
        use: RR(`${tV}lookUse_${GR}`),
        Use: RR(`${tV}lookUseStart_${GR}`)
      }
    }
    const fV = (0, yR.memo)((function(RR) {
      let {
        item: JR
      } = RR;
      return (0, Uu.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, Uu.jsx)(gt.b, {
          itemName: JR,
          amount: 0
        })
      })
    }));

    function VV(RR) {
      let {
        label: JR,
        percent: GR,
        progress: yR
      } = RR;
      return (0, Uu.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, Uu.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${JR}: ${yR}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": GR,
          children: (0, Uu.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${GR}%`
            }
          })
        }), (0, Uu.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: yR
        })]
      })
    }

    function KV(RR) {
      let {
        chips: JR
      } = RR;
      return (0, Uu.jsx)("span", {
        className: "Baf2QuestChips",
        children: JR.map((RR => {
          let [JR, GR, yR] = RR;
          const tR = GR >= yR;
          return (0, Uu.jsxs)("span", {
            className: Ct()("Baf2QuestChip", {
              Met: tR
            }),
            children: [(0, Uu.jsx)(fV, {
              item: JR
            }), (0, Uu.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: tR ? `\u2713${yR}` : `${GR}/${yR}`
            })]
          }, JR)
        }))
      })
    }

    function wV(RR, JR) {
      const {
        key: GR,
        params: yR
      } = rR(JR, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return RR(`${tV}${GR}`, {
        ...yR,
        name: RR(`${tV}${nR(JR).nameKey}`)
      })
    }

    function rV(RR) {
      let {
        core: JR,
        t: GR
      } = RR;
      const [yR, tR] = JR, uR = tR > 0 ? Math.floor(100 * yR / tR) : 100;
      return (0, Uu.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": GR(`${tV}questCoreLabel`, {
          have: String(yR),
          need: String(tR)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": uR,
        children: [(0, Uu.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: GR(`${tV}questCore`, {
            percent: String(uR)
          })
        }), (0, Uu.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, Uu.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${uR}%`
            }
          })
        })]
      })
    }

    function eV(RR) {
      let {
        rows: JR,
        t: GR
      } = RR;
      const yR = JR.filter((RR => RR.done)).length;
      return (0, Uu.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": GR(`${tV}questStepsProgress`, {
          done: String(yR),
          total: String(JR.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": JR.length,
        "aria-valuenow": yR,
        children: JR.map((RR => (0, Uu.jsx)("span", {
          className: Ct()("Baf2QuestSegment", {
            Done: RR.done,
            Current: RR.current
          })
        }, RR.id)))
      })
    }
    const aV = (0, yR.memo)(nV, LV);

    function LV(RR, JR) {
      const GR = GR => RR.view.itemNames[GR] === JR.view.itemNames[GR];
      return RR.t === JR.t && RR.extra === JR.extra && (null === RR.row.item || GR(RR.row.item)) && RR.row.madeFor.every(GR) && RR.row.also.every(GR) && GV()(RR.row, JR.row)
    }

    function nV(RR) {
      let {
        row: JR,
        view: GR,
        t: yR,
        extra: tR
      } = RR;
      const {
        isTouchScreen: uR
      } = (0, Ut.o)(["isTouchScreen"]), ZR = JR.item ? function(RR, JR, GR) {
        return 1 !== GR && yV.has(RR) ? Bt(JR) : null
      }(JR.key, JR.item, JR.total) : null, qR = ZR ? yR(ZR) : JR.item ? ZV(yR, GR.itemNames[JR.item], JR.item) : "", iR = JR.also.map((RR => ZV(yR, GR.itemNames[RR], RR))), fR = iR.join(", "), VR = function(RR, JR) {
        var GR;
        return JR.length < 2 ? null !== (GR = JR[0]) && void 0 !== GR ? GR : "" : RR(`${tV}listAnd`, {
          rest: JR.slice(0, -1).join(RR(`${tV}listComma`)),
          last: JR[JR.length - 1]
        })
      }(yR, [qR, ...iR]), KR = yR(`${tV}${JR.key}`, {
        ...iV(yR, uR),
        ...qV(JR.params),
        item: qR,
        also: fR,
        itemList: VR,
        total: String(JR.total)
      }), [wR, ...rR] = KR.split("\n"), eR = JR.total > 1 && !JR.done && !JR.away;
      return (0, Uu.jsxs)("li", {
        className: Ct()("Baf2QuestStep", {
          Done: JR.done,
          Current: JR.current,
          JustFinished: JR.justFinished,
          Away: JR.away
        }),
        children: [!JR.done && null !== JR.item && (0, Uu.jsx)(fV, {
          item: JR.item
        }), (JR.done || null === JR.item) && (0, Uu.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: JR.done ? "\u2713" : "\u25cb"
        }), (0, Uu.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Uu.jsx)("strong", {
            children: wR
          }), rR.length > 0 && (0, Uu.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: rR.join(" ")
          }), !JR.done && JR.madeFor.length > 0 && (0, Uu.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: yR("buildAFactory2Game:questRowFor", {
              items: JR.madeFor.map((RR => ZV(yR, GR.itemNames[RR], RR))).join(" \u2192 ")
            })
          }), eR && (0, Uu.jsx)(VV, {
            label: wR,
            percent: Math.round(100 * JR.amount / JR.total),
            progress: `${JR.amount.toLocaleString("en-US")}/${JR.total.toLocaleString("en-US")}`
          }), !JR.done && !JR.away && JR.chips && JR.chips.length > 0 && (0, Uu.jsx)(KV, {
            chips: JR.chips
          }), tR]
        })]
      })
    }
    const UV = "buildAFactory2Game:",
      WV = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      AV = {
        on: `${UV}tutorialButtonOn`,
        hud: `${UV}tutorialButtonHud`,
        off: `${UV}tutorialButtonOff`
      },
      CV = {
        on: `${UV}tutorialPickedOn`,
        hud: `${UV}tutorialPickedHud`,
        off: `${UV}tutorialPickedOff`
      };
    class XV {
      constructor(RR, JR, GR) {
        this.commands = RR, this.quests = JR, this.toasts = GR
      }
      next() {
        const RR = function(RR) {
            return xR[(xR.indexOf(RR) + 1) % xR.length]
          }(this.quests.get().tutorial),
          JR = this.quests.setTutorial(RR);
        this.commands.send(`baf2tutorial ${RR} ${JR}`), this.toasts.show({
          baf2ToastText: [(0, DR.ae)({
            translationKey: CV[RR]
          }, DR.C.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function MV(RR, JR) {
      let [GR, yR] = JR;
      return RR(`${tV}${GR}`, qV(yR))
    }

    function BV(RR) {
      let [JR, GR] = RR;
      return JR + JSON.stringify(GR)
    }

    function lV(RR) {
      let {
        goal: JR,
        t: GR
      } = RR;
      return JR ? (0, Uu.jsx)("span", {
        className: "Baf2BookGoal",
        children: GR(`${tV}${JR}`)
      }) : null
    }

    function pV(RR) {
      let {
        view: JR,
        t: GR
      } = RR;
      if (!JR.name) return null;
      const yR = zt(JR.rows);
      return (0, Uu.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, Uu.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: GR(`${tV}currentQuest`)
        }), (0, Uu.jsx)("strong", {
          className: "Baf2BookTitle",
          children: MV(GR, JR.name)
        }), (0, Uu.jsx)(lV, {
          goal: JR.goal,
          t: GR
        }), yR.length > 1 && (0, Uu.jsx)(eV, {
          rows: yR,
          t: GR
        }), (0, Uu.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: JR.rows.map((RR => (0, Uu.jsx)(aV, {
            row: RR,
            view: JR,
            t: GR
          }, RR.id)))
        }), JR.reward && (0, Uu.jsxs)("span", {
          className: "Baf2BookReward",
          children: [GR(`${tV}questReward`), (0, Uu.jsx)(fV, {
            item: JR.reward
          }), ZV(GR, JR.itemNames[JR.reward], JR.reward)]
        })]
      })
    }

    function gV(RR) {
      let {
        quest: JR,
        upcoming: GR,
        t: yR
      } = RR;
      return (0, Uu.jsxs)("li", {
        className: Ct()("Baf2BookQuest", {
          Done: JR[3],
          Upcoming: GR
        }),
        children: [(0, Uu.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: JR[3] ? "\u2713" : "\u25cb"
        }), (0, Uu.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, Uu.jsx)("strong", {
            className: "Baf2BookTitle",
            children: MV(yR, JR)
          }), (0, Uu.jsx)(lV, {
            goal: JR[2],
            t: yR
          })]
        })]
      })
    }

    function bV(RR) {
      let {
        done: JR,
        total: GR,
        t: yR
      } = RR;
      const tR = GR > 0 ? Math.round(100 * JR / GR) : 0,
        uR = yR(`${tV}questBookChapterProgress`, {
          done: String(JR),
          total: String(GR)
        });
      return (0, Uu.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, Uu.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": uR,
          "aria-valuemin": 0,
          "aria-valuemax": GR,
          "aria-valuenow": JR,
          children: (0, Uu.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${tR}%`
            }
          })
        }), (0, Uu.jsx)("span", {
          className: "Baf2BookProgressText",
          children: uR
        })]
      })
    }

    function vV(RR) {
      let {
        view: JR,
        tier: GR,
        quests: yR,
        t: tR
      } = RR;
      const uR = GR === JR.tier,
        ZR = (null !== yR && void 0 !== yR ? yR : []).filter((RR => !RR[4])),
        qR = (null !== yR && void 0 !== yR ? yR : []).filter((RR => RR[4])),
        iR = ZR.filter((RR => RR[3])).length,
        fR = uR && JR.name ? BV(JR.name) : null,
        VR = ZR.findIndex((RR => !RR[3] && BV(RR) === fR));
      return (0, Uu.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, Uu.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, Uu.jsx)("h3", {
            children: wV(tR, GR)
          }), ZR.length > 0 && (0, Uu.jsx)(bV, {
            done: iR,
            total: ZR.length,
            t: tR
          }), uR && JR.core && (0, Uu.jsx)(rV, {
            core: JR.core,
            t: tR
          })]
        }), (0, Uu.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === yR && uR && (0, Uu.jsx)(pV, {
            view: JR,
            t: tR
          }), ZR.map(((RR, GR) => GR === VR ? (0, Uu.jsx)(pV, {
            view: JR,
            t: tR
          }, BV(RR)) : (0, Uu.jsx)(gV, {
            quest: RR,
            upcoming: !RR[3],
            t: tR
          }, BV(RR))))]
        }), uR && JR.side && (0, Uu.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, Uu.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: tR(`${tV}questSide`)
          }), (0, Uu.jsx)("strong", {
            className: "Baf2BookTitle",
            children: MV(tR, JR.side.name)
          }), (0, Uu.jsx)(lV, {
            goal: JR.side.goal,
            t: tR
          }), (0, Uu.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, Uu.jsx)(aV, {
              row: JR.side.row,
              view: JR,
              t: tR
            })
          })]
        }), qR.length > 0 && (0, Uu.jsxs)(Uu.Fragment, {
          children: [(0, Uu.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: tR(`${tV}questBookSidesDone`)
          }), (0, Uu.jsx)("ol", {
            className: "Baf2BookQuests",
            children: qR.map((RR => (0, Uu.jsx)(gV, {
              quest: RR,
              upcoming: !1,
              t: tR
            }, BV(RR))))
          })]
        })]
      })
    }

    function OV(RR) {
      var JR, GR, uR;
      let {
        store: ZR,
        tutorial: qR,
        close: iR
      } = RR;
      const {
        t: fR
      } = (0, lt.A)(), KR = (0, RV.h)(Dt, ZR.get()), wR = null !== (JR = KR.tier) && void 0 !== JR ? JR : 1, [rR, eR] = (0, yR.useState)(null), nR = (null === rR || void 0 === rR ? void 0 : rR.at) === wR ? rR.tier : wR, UR = (0, yR.useRef)(null), WR = null !== KR.chapters;
      (0, yR.useEffect)((() => {
        var RR;
        UR.current && (UR.current.scrollTop = 0);
        const JR = null === (RR = UR.current) || void 0 === RR ? void 0 : RR.querySelector(".Baf2BookQuest.Current");
        if (UR.current && JR) {
          const RR = JR.getBoundingClientRect().bottom - UR.current.getBoundingClientRect().bottom;
          RR > 0 && (UR.current.scrollTop += Math.min(RR, JR.getBoundingClientRect().top - UR.current.getBoundingClientRect().top))
        }
      }), [nR, WR]);
      const AR = null === (GR = KR.chapters) || void 0 === GR ? void 0 : GR.find((RR => {
        let [JR] = RR;
        return JR === nR
      }));
      return (0, Uu.jsx)(eZ.e, {
        close: iR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Uu.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: uV,
          children: [(0, Uu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Uu.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: fR(`${tV}questBookTitle`)
            }), (0, Uu.jsx)(aZ.n, {
              className: "Baf2BookTutorialButton",
              disabled: !KR.tutorialKnown,
              ariaLabel: fR(AV[KR.tutorial]),
              title: fR(AV[KR.tutorial]),
              onClick: () => {
                qR.next()
              },
              children: (0, Uu.jsx)(pt.d, {
                name: WV[KR.tutorial]
              })
            }), (0, Uu.jsx)(aZ.l, {
              onClick: iR
            })]
          }), (0, Uu.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": fR(`${tV}questBookChapters`),
            "data-pad-initial-area": !0,
            children: tR.slice(0, VR()).map(((RR, JR) => {
              const GR = JR + 1,
                {
                  kind: yR,
                  short: tR
                } = LR(GR),
                uR = aR(GR, wR),
                ZR = uR ? fR(`${tV}coreAtomicHidden`) : wV(fR, GR);
              return (0, Uu.jsx)("li", {
                children: (0, Uu.jsx)("button", {
                  type: "button",
                  className: Ct()({
                    Stage: "tier" !== yR,
                    Atomic: "atomic" === yR,
                    Current: GR === wR,
                    Selected: GR === nR
                  }),
                  disabled: GR > wR,
                  "aria-pressed": GR === nR,
                  "aria-label": ZR,
                  title: uR ? void 0 : ZR,
                  onClick: () => {
                    eR({
                      tier: GR,
                      at: wR
                    })
                  },
                  children: uR ? "?" : tR
                })
              }, RR.nameKey)
            }))
          }), (0, Uu.jsxs)("div", {
            ref: UR,
            className: "Baf2BookBody",
            children: [It(KR) && nR === wR && (0, Uu.jsx)("p", {
              className: "Baf2BookEmpty",
              children: fR(`${tV}questBookAllDone`)
            }), (0, Uu.jsx)(vV, {
              view: KR,
              tier: nR,
              quests: null !== (uR = null === AR || void 0 === AR ? void 0 : AR[1]) && void 0 !== uR ? uR : null,
              t: fR
            })]
          })]
        })
      })
    }
    const xV = "buildAFactory2Game:";

    function NV(RR) {
      let {
        tiers: JR,
        from: GR,
        tier: yR,
        shown: tR,
        Ur: uR
      } = RR;
      const {
        t: ZR
      } = (0, lt.A)(), qR = JR.map(((RR, JR) => {
        const qR = GR + JR,
          {
            kind: iR,
            short: fR
          } = LR(qR),
          VR = aR(qR, yR);
        return (0, Uu.jsx)("li", {
          children: (0, Uu.jsx)("button", {
            type: "button",
            className: Ct()({
              Stage: "tier" !== iR,
              Silhouette: VR,
              Reached: qR <= yR,
              Current: qR === yR,
              Next: qR === yR + 1,
              Selected: qR === tR
            }),
            disabled: VR,
            "aria-pressed": qR === tR,
            "aria-label": VR ? ZR(`${xV}coreAtomicHidden`) : void 0,
            title: VR ? void 0 : ZR(`${xV}${RR.nameKey}`),
            onClick: () => {
              uR(qR)
            },
            children: VR ? "?" : fR
          })
        }, RR.nameKey)
      }));
      return (0, Uu.jsx)(Uu.Fragment, {
        children: qR
      })
    }

    function DV(RR) {
      let {
        id: JR,
        label: GR,
        tiers: yR,
        from: tR,
        ...uR
      } = RR;
      return (0, Uu.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, Uu.jsx)("span", {
          id: JR,
          className: "Baf2CoreLadderLabel",
          children: GR
        }), (0, Uu.jsx)("ol", {
          "aria-labelledby": JR,
          children: (0, Uu.jsx)(NV, {
            ...uR,
            tiers: yR,
            from: tR
          })
        })]
      })
    }

    function HV(RR) {
      const {
        t: JR
      } = (0, lt.A)(), GR = tR.findIndex((RR => void 0 !== RR.stage)), yR = tR.findIndex((RR => void 0 !== RR.reactorTier)), uR = GR < 0 ? tR : tR.slice(0, GR), ZR = GR < 0 ? [] : tR.slice(GR, yR < 0 ? void 0 : yR), iR = yR < 0 || !qR() ? [] : tR.slice(yR);
      return (0, Uu.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, Uu.jsx)(DV, {
          ...RR,
          id: "baf2CoreTiersLabel",
          label: JR(`${xV}coreTiersLabel`),
          tiers: uR,
          from: 1
        }), ZR.length > 0 && (0, Uu.jsx)(DV, {
          ...RR,
          id: "baf2CoreStagesLabel",
          label: JR(`${xV}coreStagesLabel`),
          tiers: ZR,
          from: GR + 1
        }), iR.length > 0 && (0, Uu.jsx)(DV, {
          ...RR,
          id: "baf2CoreAtomicLabel",
          label: JR(`${xV}coreAtomicLabel`),
          tiers: iR,
          from: yR + 1
        })]
      })
    }
    const oV = "buildAFactory2Game:";

    function cV(RR) {
      let {
        item: JR,
        itemNames: GR,
        children: yR
      } = RR;
      return (0, Uu.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Uu.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Uu.jsx)(gt.b, {
            itemName: JR,
            amount: 0
          })
        }), (0, Uu.jsx)(bt.c, {
          text: GR[JR]
        }), yR]
      })
    }

    function PV(RR) {
      const JR = new Map;
      for (const {
          block: yR
        }
        of RR.newDeposits) {
        var GR;
        JR.set(yR, (null !== (GR = JR.get(yR)) && void 0 !== GR ? GR : 0) + 1)
      }
      return [...JR]
    }

    function IV(RR) {
      let {
        value: JR,
        label: GR,
        more: yR
      } = RR;
      return (0, Uu.jsxs)("li", {
        children: [(0, Uu.jsx)("strong", {
          children: JR
        }), (0, Uu.jsx)("span", {
          children: GR
        }), yR > 0 && (0, Uu.jsxs)("em", {
          children: ["+", yR]
        })]
      })
    }

    function mV(RR) {
      let {
        items: JR,
        itemNames: GR
      } = RR;
      const {
        t: tR
      } = (0, lt.A)(), [uR, ZR] = (0, yR.useState)(null), qR = null !== uR && JR.includes(uR) ? uR : null;
      return (0, Uu.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, Uu.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: tR(`${oV}coreRewardUnlocks`)
        }), (0, Uu.jsx)("ul", {
          children: JR.map((RR => (0, Uu.jsx)("li", {
            children: (0, Uu.jsx)("button", {
              type: "button",
              className: Ct()("Baf2PanelIcon", {
                Picked: RR === qR
              }),
              title: (0, ht.f)(tR, RR),
              "aria-label": (0, ht.f)(tR, RR),
              "aria-pressed": RR === qR,
              onClick: () => {
                ZR(RR === qR ? null : RR)
              },
              children: (0, Uu.jsx)(gt.b, {
                itemName: RR,
                amount: 0
              })
            })
          }, RR)))
        }), (0, Uu.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== qR && (0, Uu.jsxs)(Uu.Fragment, {
            children: [(0, Uu.jsx)(bt.c, {
              text: GR[qR]
            }), " \xb7 ", (0, Uu.jsx)(bt.c, {
              text: GR[vR(qR)]
            })]
          }), null === qR && tR(`${oV}coreRecipeTap`)]
        })]
      })
    }

    function zV(RR) {
      var JR, GR;
      let {
        def: yR,
        tier: tR,
        itemNames: uR
      } = RR;
      const {
        t: ZR
      } = (0, lt.A)(), qR = tR > 1 ? nR(tR - 1) : void 0, iR = Math.round(2 * yR.islandRadius), fR = qR ? Math.round(2 * qR.islandRadius) : iR, VR = tR >= 3 ? Cy(tR) : null;
      return (0, Uu.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, Uu.jsxs)("ul", {
          className: Ct()("Baf2CoreStats", {
            Four: null !== VR
          }),
          children: [(0, Uu.jsx)(IV, {
            value: `${iR}\xd7${iR}`,
            label: ZR(`${oV}coreStatIsland`),
            more: iR - fR
          }), (0, Uu.jsx)(IV, {
            value: String(yR.machineAllowance),
            label: ZR(`${oV}coreStatMachines`),
            more: yR.machineAllowance - (null !== (JR = null === qR || void 0 === qR ? void 0 : qR.machineAllowance) && void 0 !== JR ? JR : yR.machineAllowance)
          }), (0, Uu.jsx)(IV, {
            value: String(yR.beltAllowance),
            label: ZR(`${oV}coreStatBelts`),
            more: yR.beltAllowance - (null !== (GR = null === qR || void 0 === qR ? void 0 : qR.beltAllowance) && void 0 !== GR ? GR : yR.beltAllowance)
          }), null !== VR && (0, Uu.jsx)(IV, {
            value: String(VR),
            label: ZR(`${oV}coreStatStorage`),
            more: VR - (qR ? Cy(tR - 1) : VR)
          })]
        }), yR.reward && (0, Uu.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Uu.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: ZR(`${oV}coreRewardItem`)
          }), (0, Uu.jsx)(cV, {
            item: yR.reward,
            itemNames: uR
          })]
        }), yR.newDeposits.length > 0 && (0, Uu.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Uu.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: ZR(yR.newDeposits.length > 1 ? `${oV}coreRewardDeposits` : `${oV}coreRewardDeposit`)
          }), PV(yR).map((RR => {
            let [JR, GR] = RR;
            return (0, Uu.jsx)(cV, {
              item: JR,
              itemNames: uR,
              children: GR > 1 && ` \xd7${GR}`
            }, JR)
          }))]
        }), yR.unlocks.length > 0 && (0, Uu.jsx)(mV, {
          items: yR.unlocks,
          itemNames: uR
        }), (0, Uu.jsx)(SV, {
          tier: tR
        })]
      })
    }

    function SV(RR) {
      let {
        tier: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)(), yR = rt[JR];
      if (!yR) return null;
      const tR = wt(JR, 0, 0).barrierMax !== wt(JR - 1, 0, 0).barrierMax;
      return (0, Uu.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Uu.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Uu.jsx)(gt.b, {
            itemName: tR ? Zt.Chestplate : ut,
            amount: 0
          })
        }), GR(`${oV}gearPerkLine`, {
          perk: GR(`${oV}${yR}`)
        })]
      })
    }

    function jV(RR, JR) {
      return null === RR ? JR : RR.value
    }

    function dV(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === RR || GR - RR.atMs >= yR ? null : tR(RR.value, JR) ? RR.armed ? null : RR : RR.armed ? RR : {
        ...RR,
        armed: !0
      }
    }

    function EV(RR, JR) {
      const GR = JR.filter((JR => {
        var GR;
        return !1 !== (null === (GR = RR.get(JR)) || void 0 === GR ? void 0 : GR.value)
      }));
      for (const [yR, tR] of RR) tR.value && !JR.includes(yR) && GR.push(yR);
      return GR
    }

    function YV(RR, JR, GR, tR) {
      const [uR, ZR] = (0, yR.useState)((() => new Map)), qR = () => {
        ZR((JR => function(RR, JR, GR, yR) {
          var tR;
          let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            ZR = null;
          for (const [qR, iR] of RR) {
            const tR = dV(iR, JR(qR), GR, yR, uR);
            tR !== iR && (ZR ??= new Map(RR), null === tR ? ZR.delete(qR) : ZR.set(qR, tR))
          }
          return null !== (tR = ZR) && void 0 !== tR ? tR : RR
        }(JR, RR, Date.now(), GR, tR)))
      };
      (0, yR.useEffect)((() => {
        qR()
      }), [JR, GR]), (0, yR.useEffect)((() => {
        if (0 === uR.size) return;
        const RR = Math.min(...[...uR.values()].map((RR => RR.atMs))),
          JR = setTimeout(qR, Math.max(0, RR + GR - Date.now()) + 1);
        return () => {
          clearTimeout(JR)
        }
      }), [uR, JR, GR]);
      return [uR, (JR, GR) => {
        ZR((yR => {
          const uR = new Map(yR);
          return uR.set(JR, function(RR, JR, GR) {
            return {
              value: RR,
              atMs: GR,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(RR, JR)
            }
          }(GR, RR(JR), Date.now(), tR)), uR
        }))
      }]
    }
    const kV = "buildAFactory2Game:";

    function QV(RR) {
      let {
        message: JR,
        itemNames: GR
      } = RR;
      const tR = DZ(),
        {
          t: uR
        } = (0, lt.A)(),
        [ZR, qR] = (0, yR.useState)(!1),
        [iR, fR] = function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pZ;
          const [GR, yR] = YV((JR => RR.includes(JR)), RR, JR, Object.is);
          return [EV(GR, RR), yR]
        }(JR.baf2CoreBankPaused),
        VR = new Set(iR),
        KR = [...JR.baf2CoreBanked];
      for (const yR of VR) KR.some((RR => {
        let [JR] = RR;
        return JR === yR
      })) || KR.push([yR, 0]);
      return 0 === KR.length ? null : (0, Uu.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, Uu.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": ZR,
          onClick: () => {
            qR(!ZR)
          },
          children: [(0, Uu.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: uR(`${kV}coreBankedLater`)
          }), (0, Uu.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: KR.map((RR => {
              let [JR, GR] = RR;
              const yR = VR.has(JR);
              return (0, Uu.jsxs)("span", {
                className: Ct()({
                  Paused: yR
                }),
                title: yR ? uR(`${kV}coreBankPausedTag`) : void 0,
                children: [(0, Uu.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, Uu.jsx)(gt.b, {
                    itemName: JR,
                    amount: 0
                  })
                }), GR, yR && (0, Uu.jsx)(pt.d, {
                  name: "pause"
                })]
              }, JR)
            }))
          }), (0, Uu.jsx)(pt.d, {
            name: ZR ? "angle-up" : "angle-down"
          })]
        }), ZR && (0, Uu.jsxs)(Uu.Fragment, {
          children: [(0, Uu.jsx)("ul", {
            children: KR.map((RR => {
              let [JR, yR] = RR;
              const ZR = VR.has(JR);
              return (0, Uu.jsxs)("li", {
                children: [(0, Uu.jsxs)(cV, {
                  item: JR,
                  itemNames: GR,
                  children: [(0, Uu.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: yR
                  }), ZR && (0, Uu.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: uR(`${kV}coreBankPausedTag`)
                  })]
                }), (0, Uu.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, Uu.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === yR,
                    onClick: () => {
                      tR.send(`baf2corewithdraw ${yR} ${JR}`)
                    },
                    children: uR(`${kV}coreTake`)
                  }), (0, Uu.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      tR.send(`${AR} ${JR}`), fR(JR, !ZR)
                    },
                    children: uR(ZR ? `${kV}coreBankResume` : `${kV}coreBankStop`)
                  })]
                })]
              }, JR)
            }))
          }), (0, Uu.jsx)("p", {
            className: "Baf2CoreHint",
            children: uR(`${kV}coreBankNote`)
          })]
        })]
      })
    }
    const FV = "buildAFactory2Game:";

    function TV(RR) {
      const JR = Math.max(0, Math.floor(RR));
      return `${Math.floor(JR/60)}:${String(JR%60).padStart(2,"0")}`
    }

    function sV(RR) {
      let {
        item: JR
      } = RR;
      return (0, Uu.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, Uu.jsx)(gt.b, {
          itemName: JR,
          amount: 0
        })
      })
    }

    function hV() {
      return (0, Uu.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, Uu.jsx)(pt.d, {
          name: "bolt"
        })
      })
    }

    function RK(RR) {
      let {
        charge: JR,
        hint: GR,
        itemNames: yR
      } = RR;
      const tR = DZ(),
        {
          t: uR
        } = (0, lt.A)(),
        [ZR, qR, iR, fR, VR, KR, wR] = JR,
        [rR, eR] = function(RR) {
          var JR;
          let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pZ,
            yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [tR, uR] = YV((() => RR), RR, GR, yR);
          return [jV(null !== (JR = tR.get("")) && void 0 !== JR ? JR : null, RR), RR => {
            uR("", RR)
          }]
        }(wR),
        aR = rR === wR ? KR : !rR,
        LR = fR >= VR,
        nR = ZR.find((RR => {
          let [, JR, GR] = RR;
          return GR < .9 * JR
        }));
      let UR = `${FV}coreChargeWaiting`,
        WR = {};
      return LR ? UR = `${FV}coreChargeDone` : rR ? UR = `${FV}coreChargeStopped` : aR && GR ? (UR = `${FV}${GR[0]}`, WR = {
        item: (0, ht.f)(uR, GR[1])
      }) : aR && nR ? (UR = `${FV}coreChargeShort`, WR = {
        item: (0, ht.f)(uR, nR[0])
      }) : aR && qR > 0 && !iR ? UR = `${FV}coreChargePower` : aR && (UR = `${FV}coreChargeRunning`), (0, Uu.jsxs)("div", {
        className: Ct()("Baf2CoreCharge", {
          Waiting: !aR && !LR,
          Done: LR
        }),
        children: [(0, Uu.jsxs)("h4", {
          children: [uR(`${FV}coreChargeTitle`), (0, Uu.jsx)("span", {
            children: uR(`${FV}coreChargeProgress`, {
              done: TV(fR),
              need: TV(VR)
            })
          })]
        }), (0, Uu.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, Uu.jsx)("div", {
            style: {
              width: 100 * Math.min(fR, VR) / VR + "%"
            }
          })
        }), (0, Uu.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [ZR.map((RR => {
            var JR;
            let [GR, tR, ZR] = RR;
            const qR = ZR >= .9 * tR;
            return (0, Uu.jsxs)("li", {
              className: Ct()({
                Done: qR,
                Short: aR && !qR
              }),
              children: [(0, Uu.jsx)(sV, {
                item: GR
              }), (0, Uu.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, Uu.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Uu.jsx)(bt.c, {
                    text: null !== (JR = yR[GR]) && void 0 !== JR ? JR : GR
                  }), (0, Uu.jsx)("span", {
                    children: uR(`${FV}coreChargeItem`, {
                      now: String(ZR),
                      need: String(tR)
                    })
                  })]
                }), (0, Uu.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, Uu.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*ZR/tR)}%`
                    }
                  })
                })]
              })]
            }, GR)
          })), qR > 0 && (0, Uu.jsxs)("li", {
            className: Ct()("Baf2CoreChargePower", {
              Short: aR && !iR
            }),
            children: [(0, Uu.jsx)(hV, {}), (0, Uu.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Uu.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Uu.jsx)("span", {
                  children: uR(`${FV}coreChargePowerRow`, {
                    power: TR(qR)
                  })
                })
              })
            })]
          })]
        }), (0, Uu.jsx)("p", {
          className: "Baf2CoreHint",
          children: uR(UR, WR)
        }), !LR && (aR || rR) && (0, Uu.jsx)("button", {
          type: "button",
          className: Ct()("Baf2CoreChargeToggle", {
            Stopped: rR
          }),
          onClick: () => {
            tR.send(XR), eR(!rR)
          },
          children: uR(rR ? `${FV}coreChargeRestart` : `${FV}coreChargeStop`)
        })]
      })
    }

    function JK(RR) {
      let {
        charge: JR,
        reached: GR,
        itemNames: yR
      } = RR;
      const {
        t: tR
      } = (0, lt.A)();
      return (0, Uu.jsxs)("div", {
        className: Ct()("Baf2CoreCharge", {
          Done: GR
        }),
        children: [(0, Uu.jsxs)("h4", {
          children: [tR(`${FV}coreChargeTitle`), (0, Uu.jsx)("span", {
            children: tR(`${FV}coreChargeSpecTime`, {
              time: TV(JR.seconds)
            })
          })]
        }), (0, Uu.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [JR.items.map((RR => {
            var JR;
            let {
              item: uR,
              amount: ZR
            } = RR;
            return (0, Uu.jsxs)("li", {
              className: Ct()({
                Done: GR
              }),
              children: [(0, Uu.jsx)(sV, {
                item: uR
              }), (0, Uu.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, Uu.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Uu.jsx)(bt.c, {
                    text: null !== (JR = yR[uR]) && void 0 !== JR ? JR : uR
                  }), (0, Uu.jsx)("span", {
                    children: tR(`${FV}coreChargeSpecItem`, {
                      need: String(ZR)
                    })
                  })]
                })
              })]
            }, uR)
          })), JR.powerPerS > 0 && (0, Uu.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, Uu.jsx)(hV, {}), (0, Uu.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Uu.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Uu.jsx)("span", {
                  children: tR(`${FV}coreChargePowerRow`, {
                    power: TR(JR.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const GK = "buildAFactory2Game:";

    function yK(RR) {
      let {
        def: JR,
        reached: GR,
        banked: yR,
        itemNames: tR
      } = RR;
      const {
        t: uR
      } = (0, lt.A)();
      return (0, Uu.jsx)("ul", {
        className: "Baf2CoreCost",
        children: JR.cost.map((RR => {
          let {
            item: JR,
            amount: ZR
          } = RR;
          const qR = GR ? 0 : yR(JR);
          return (0, Uu.jsx)("li", {
            children: (0, Uu.jsx)(cV, {
              item: JR,
              itemNames: tR,
              children: (0, Uu.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: qR > 0 ? uR(`${GK}coreBankedFor`, {
                  amount: String(qR),
                  total: String(ZR)
                }) : `\xd7${ZR}`
              })
            })
          }, JR)
        }))
      })
    }

    function tK(RR, JR) {
      if (JR >= VR()) return RR(`${GK}coreMaxTier`);
      const GR = fR[JR + 1];
      return GR && !GR.startsWith("upgradeCore") ? RR(`${GK}coreGateQuest`, {
        quest: RR(`${GK}quest_${GR}`)
      }) : RR(`${GK}coreGateClosed`)
    }

    function uK() {
      const {
        t: RR
      } = (0, lt.A)(), JR = DZ(), GR = (0, yR.useRef)(null), tR = (0, yR.useRef)(Date.now());
      return df(!0, GR), (0, Uu.jsx)("div", {
        ref: GR,
        className: "Baf2CoreGrow",
        children: (0, Uu.jsx)(aZ.n, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - tR.current >= 600 && JR.send(WR)
          },
          children: RR(`${GK}coreGrow`)
        })
      })
    }

    function ZK(RR) {
      let {
        message: JR,
        itemNames: GR,
        next: yR
      } = RR;
      const tR = DZ(),
        {
          t: uR
        } = (0, lt.A)(),
        ZR = JR.baf2CoreTier,
        qR = JR.baf2CoreReady,
        iR = JR.baf2CoreNeeds.filter((RR => {
          let [, JR, GR, yR] = RR;
          return yR > 0 && JR < GR
        })),
        fR = JR.baf2CoreNeeds.every((RR => {
          let [, JR, GR] = RR;
          return JR >= GR
        })),
        VR = JR.baf2CoreKeep;
      return (0, Uu.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, Uu.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [qR && (0, Uu.jsx)(uK, {}), (0, Uu.jsx)("h3", {
            children: uR(`${GK}coreBring`)
          }), (0, Uu.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: JR.baf2CoreNeeds.map((RR => {
              let [JR, yR, ZR, qR] = RR;
              return (0, Uu.jsxs)("li", {
                className: Ct()({
                  Done: yR >= ZR
                }),
                children: [(0, Uu.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, Uu.jsx)(gt.b, {
                    itemName: JR,
                    amount: 0
                  })
                }), (0, Uu.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, Uu.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, Uu.jsx)(bt.c, {
                      text: GR[JR]
                    }), (0, Uu.jsxs)("span", {
                      children: [yR, "/", ZR]
                    })]
                  }), (0, Uu.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, Uu.jsx)("div", {
                      style: {
                        width: 100 * yR / ZR + "%"
                      }
                    }), qR > 0 && (0, Uu.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * qR / ZR + "%"
                      }
                    })]
                  })]
                }), qR > 0 && yR < ZR && (0, Uu.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    tR.send(`${CR} ${JR}`)
                  },
                  children: uR(`${GK}coreDeposit`, {
                    amount: String(qR)
                  })
                })]
              }, JR)
            }))
          }), JR.baf2CoreCharge && (0, Uu.jsx)(RK, {
            charge: JR.baf2CoreCharge,
            hint: JR.baf2CoreChargeHint,
            itemNames: GR
          }), !qR && iR.length > 1 && (0, Uu.jsx)(aZ.n, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              tR.send(WR)
            },
            children: uR(`${GK}coreHandOver`)
          }), !qR && void 0 !== VR && (0, Uu.jsx)("p", {
            className: "Baf2CoreHint",
            children: uR(`${GK}coreKeepRest`, {
              item: (0, ht.f)(uR, VR)
            })
          }), !qR && !fR && 0 === iR.length && void 0 === VR && (0, Uu.jsx)("p", {
            className: "Baf2CoreHint",
            children: uR(`${GK}coreNothingHeld`)
          }), (0, Uu.jsx)(QV, {
            message: JR,
            itemNames: GR
          })]
        }), (0, Uu.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Uu.jsx)("h3", {
            children: uR(`${GK}coreRewards`)
          }), (0, Uu.jsx)(zV, {
            def: yR,
            tier: ZR + 1,
            itemNames: GR
          })]
        })]
      })
    }

    function qK(RR) {
      let {
        message: JR,
        itemNames: GR,
        shown: yR
      } = RR;
      const {
        t: tR
      } = (0, lt.A)(), uR = JR.baf2CoreTier, ZR = nR(yR), qR = yR <= uR, iR = new Map(JR.baf2CoreBanked), fR = !UR(uR, MR(JR)) && yR === uR;
      return (0, Uu.jsxs)("div", {
        className: Ct()("Baf2CoreBody", {
          Locked: !qR
        }),
        children: [(0, Uu.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Uu.jsx)("h3", {
            children: tR(qR ? `${GK}coreItTook` : `${GK}coreItNeeds`)
          }), 0 === ZR.cost.length && (0, Uu.jsx)("p", {
            className: "Baf2CoreHint",
            children: tR(`${GK}coreTierStart`)
          }), ZR.cost.length > 0 && (0, Uu.jsx)(yK, {
            def: ZR,
            reached: qR,
            banked: RR => {
              var JR;
              return function(RR, JR, GR, yR) {
                let tR = RR;
                for (let ZR = JR + 2; ZR <= GR; ZR++) {
                  var uR;
                  const RR = nR(ZR).cost.find((RR => RR.item === yR)),
                    JR = Math.min(tR, null !== (uR = null === RR || void 0 === RR ? void 0 : RR.amount) && void 0 !== uR ? uR : 0);
                  if (ZR === GR) return JR;
                  tR -= JR
                }
                return 0
              }(null !== (JR = iR.get(RR)) && void 0 !== JR ? JR : 0, uR, yR, RR)
            },
            itemNames: GR
          }), ZR.charge && (0, Uu.jsx)(JK, {
            charge: ZR.charge,
            reached: qR,
            itemNames: GR
          }), fR && (0, Uu.jsxs)(Uu.Fragment, {
            children: [(0, Uu.jsx)("p", {
              className: "Baf2CoreHint",
              children: tK(tR, uR)
            }), (0, Uu.jsx)(QV, {
              message: JR,
              itemNames: GR
            })]
          })]
        }), (0, Uu.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Uu.jsx)("h3", {
            children: tR(qR ? `${GK}coreGave` : `${GK}coreLockedRewards`)
          }), (0, Uu.jsx)(zV, {
            def: ZR,
            tier: yR,
            itemNames: GR
          })]
        })]
      })
    }

    function iK(RR, JR) {
      const {
        key: GR,
        params: yR
      } = rR(JR - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return RR(`${GK}${GR}`, yR)
    }
    const fK = "buildAFactory2Game:",
      VK = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      KK = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function wK(RR) {
      let {
        view: JR,
        close: GR,
        askIslands: tR
      } = RR;
      const {
        t: uR
      } = (0, lt.A)(), [ZR, qR] = (0, yR.useState)(!1);
      (0, yR.useEffect)((() => {
        if (!ZR) return;
        const RR = window.setTimeout((() => {
          qR(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(RR)
        }
      }), [ZR]);
      const {
        message: iR,
        itemNames: fR
      } = JR, VR = iR.baf2CoreTier, KR = nR(VR), wR = UR(VR, MR(iR)), [aR, LR] = iR.baf2CoreMachines, [WR, AR] = iR.baf2CoreBelts, CR = iR.baf2CoreStorage, XR = iR.baf2CoreReady, [BR, lR] = (0, yR.useState)(null), pR = (null === BR || void 0 === BR ? void 0 : BR.at) === VR && BR.ready === XR ? BR.tier : wR ? VR + 1 : VR;
      let gR = "coreTierLocked";
      pR <= VR ? gR = "coreTierReached" : pR === VR + 1 && (gR = "coreTierNext");
      const bR = uR(`${fK}${nR(pR).nameKey}`),
        vR = pR === VR + 1 ? wR : null,
        OR = rR(pR, {
          tier: gR,
          stage: VK[gR],
          atomic: KK[gR]
        }),
        xR = uR(`${fK}${OR.key}`, {
          ...OR.params,
          name: bR
        }),
        NR = rR(VR, eR),
        DR = uR(`${fK}${NR.key}`, {
          ...NR.params,
          name: uR(`${fK}${KR.nameKey}`)
        });
      return (0, Uu.jsx)(eZ.e, {
        close: GR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, Uu.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, Uu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Uu.jsxs)("div", {
              children: [(0, Uu.jsx)("h2", {
                id: "baf2CoreTitle",
                children: uR(`${fK}coreTitle`)
              }), void 0 !== iR.baf2CoreIslandName && (0, Uu.jsx)("p", {
                className: "Baf2CoreIsland",
                children: iR.baf2CoreIslandName
              }), (0, Uu.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, Uu.jsx)("span", {
                  children: DR
                }), (0, Uu.jsx)("span", {
                  className: Ct()({
                    Full: aR >= LR
                  }),
                  children: uR(`${fK}coreMachineCount`, {
                    amount: String(aR),
                    total: String(LR)
                  })
                }), (0, Uu.jsx)("span", {
                  className: Ct()({
                    Full: WR >= AR
                  }),
                  children: uR(`${fK}coreBeltCount`, {
                    amount: String(WR),
                    total: String(AR)
                  })
                }), void 0 !== CR && (0, Uu.jsx)("span", {
                  className: Ct()({
                    Full: CR[0] >= CR[1]
                  }),
                  children: uR(`${fK}coreStorageCount`, {
                    amount: String(CR[0]),
                    total: String(CR[1])
                  })
                })]
              })]
            }), (0, Uu.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [iR.baf2CoreIslands && (0, Uu.jsx)(aZ.g, {
                className: "Baf2CoreIslandsButton",
                disabled: ZR,
                onClick: () => {
                  qR(!0), tR()
                },
                children: uR(`${fK}islandsOpenButton`)
              }), (0, Uu.jsx)(aZ.l, {
                onClick: GR
              })]
            })]
          }), (0, Uu.jsx)(HV, {
            tier: VR,
            shown: pR,
            Ur: RR => {
              lR({
                tier: RR,
                at: VR,
                ready: XR
              })
            }
          }), (0, Uu.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [xR, pR > VR + 1 && (0, Uu.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: iK(uR, pR)
            })]
          }), 6 === pR && pR > VR && (0, Uu.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: uR(`${fK}coreStagesNote`)
          }), 11 === pR && pR > VR && (0, Uu.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: uR(`${fK}coreAtomicNote`)
          }), vR && (0, Uu.jsx)(ZK, {
            message: iR,
            itemNames: fR,
            next: vR
          }), !vR && (0, Uu.jsx)(qK, {
            message: iR,
            itemNames: fR,
            shown: pR
          })]
        })
      })
    }
    const rK = {
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
    const eK = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: yu,
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

    function aK(RR) {
      return RR.baf2DropCometOreOnly ? "dropCometOre" : RR.baf2DropCometIsotope ? "seed" === RR.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function LK(RR) {
      let {
        message: JR,
        quests: GR,
        close: tR,
        leave: uR
      } = RR;
      const ZR = DZ(),
        {
          t: qR
        } = (0, lt.A)(),
        iR = (0, RV.h)(Dt, GR.get()),
        fR = function(RR) {
          var JR;
          if (!NR(RR.tutorial)) return null;
          const GR = RR.rows.find((RR => RR.current)),
            yR = GR ? rK[GR.key] : void 0;
          return null !== (JR = null !== yR && void 0 !== yR ? yR : RR.side ? rK[RR.side.row.key] : void 0) && void 0 !== JR ? JR : null
        }(iR),
        VR = null === iR.tier || Zu(iR.tier),
        KR = VR ? eK : eK.filter((RR => {
          let {
            item: JR
          } = RR;
          return JR !== yu
        })),
        [wR, rR] = (0, yR.useState)(null),
        eR = null !== wR && void 0 !== wR ? wR : !JR.baf2DropFoundSalvage && VR,
        aR = JR.baf2DropRuinDistance,
        LR = JR.baf2DropComet,
        nR = JR.baf2DropOldWorks,
        UR = JR.baf2DropGrove,
        WR = function(RR) {
          return 2 + Number(void 0 !== RR.baf2DropComet) + Number(!!RR.baf2DropOwedComet || void 0 !== RR.baf2DropOwedWaitMinutes) + Number(void 0 !== RR.baf2DropDigDistance) + Number(void 0 !== RR.baf2DropOldWorks) + Number(void 0 !== RR.baf2DropGrove)
        }(JR),
        AR = RR => {
          ZR.send(function(RR) {
            return `baf2drop ${RR}`
          }(RR)), uR()
        };
      let CR = qR("buildAFactory2Game:dropRuinNone");
      if (null !== aR) {
        let RR = JR.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        JR.baf2DropRuinOldWorks && (RR = "dropRuinOldWorks");
        const GR = void 0 === JR.baf2DropRuinCluster ? qR("buildAFactory2Game:dropRuinOpen") : qR("buildAFactory2Game:dropRuinCluster", {
          count: String(JR.baf2DropRuinCluster)
        });
        CR = `${qR(`buildAFactory2Game:${RR}`,{distance:String(aR)})} ${GR}`
      }
      let XR = qR("buildAFactory2Game:dropBelowDescription");
      void 0 !== JR.baf2DropBelowLook && (XR = qR("buildAFactory2Game:dropBelowLook", {
        look: qR(JR.baf2DropBelowLook)
      }));
      const MR = "buildAFactory2Game:wildsRegion_survivorGrove" === JR.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        BR = Lu(qR, 60 * function(RR) {
          const [JR, GR] = (0, yR.useState)((() => Date.now())), [tR, uR] = (0, yR.useState)(JR);
          return (0, yR.useEffect)((() => {
            const RR = Date.now();
            GR(RR), uR(RR)
          }), [RR]), (0, yR.useEffect)((() => {
            const RR = window.setInterval((() => {
              uR(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(RR)
            }
          }), []), Math.max(1, RR.baf2DropRenewMinutes - Math.floor((tR - JR) / 6e4))
        }(JR)),
        lR = function(RR, JR, GR) {
          return "ruin" === RR && !GR || "owed" === RR && !JR.baf2DropOwedComet ? null : RR
        }(fR, JR, null !== aR),
        pR = function(RR) {
          for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
          return Ct()("Baf2DropTile", ...GR, {
            Wanted: lR === RR
          })
        };
      return (0, Uu.jsx)(eZ.e, {
        close: tR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Uu.jsxs)("section", {
          className: Ct()("Baf2Panel Baf2DropMap", {
            Many: WR >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, Uu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Uu.jsxs)("div", {
              children: [(0, Uu.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: qR("buildAFactory2Game:dropMapTitle")
              }), (0, Uu.jsx)("p", {
                children: qR("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, Uu.jsx)(aZ.l, {
              onClick: tR
            })]
          }), (0, Uu.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== LR && (0, Uu.jsxs)(aZ.A, {
              className: pR("comet", "Baf2DropComet"),
              onClick: () => {
                AR("comet")
              },
              children: [(0, Uu.jsx)("strong", {
                children: qR("buildAFactory2Game:dropComet")
              }), (0, Uu.jsx)("span", {
                children: qR(`buildAFactory2Game:${aK(JR)}`, {
                  distance: String(LR)
                })
              })]
            }), JR.baf2DropOwedComet && (0, Uu.jsxs)(aZ.A, {
              className: pR("owed", "Baf2DropComet"),
              onClick: () => {
                AR("owed")
              },
              children: [(0, Uu.jsx)("strong", {
                children: qR("buildAFactory2Game:dropOwedComet")
              }), (0, Uu.jsx)("span", {
                children: JR.baf2DropOwedIsotope ? qR("buildAFactory2Game:dropOwedIsotopeDescription") : qR("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== JR.baf2DropOwedWaitMinutes && (0, Uu.jsxs)(aZ.A, {
              className: pR("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, Uu.jsx)("strong", {
                children: qR("buildAFactory2Game:dropOwedComet")
              }), (0, Uu.jsx)("span", {
                children: qR("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(JR.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, Uu.jsxs)(aZ.g, {
              className: pR("below"),
              onClick: () => {
                AR("below")
              },
              children: [(0, Uu.jsx)("strong", {
                children: qR("buildAFactory2Game:dropBelow")
              }), (0, Uu.jsx)("span", {
                children: XR
              })]
            }), void 0 !== JR.baf2DropDigDistance && (0, Uu.jsxs)(aZ.r, {
              className: pR("dig"),
              onClick: () => {
                AR("dig")
              },
              children: [(0, Uu.jsx)("strong", {
                children: qR("buildAFactory2Game:dropDig")
              }), (0, Uu.jsx)("span", {
                children: qR("buildAFactory2Game:dropDigDescription", {
                  distance: String(JR.baf2DropDigDistance),
                  y: au(JR.baf2DropDigY)
                })
              })]
            }), void 0 !== UR && (0, Uu.jsxs)(aZ.r, {
              className: pR("grove", "Baf2DropGrove"),
              onClick: () => {
                AR("grove")
              },
              children: [(0, Uu.jsx)("strong", {
                children: qR("buildAFactory2Game:dropGrove")
              }), (0, Uu.jsx)("span", {
                children: qR(`buildAFactory2Game:${MR}`, {
                  distance: String(UR)
                })
              })]
            }), (0, Uu.jsxs)(aZ.n, {
              className: pR("ruin"),
              disabled: null === aR,
              onClick: () => {
                AR("ruin")
              },
              children: [(0, Uu.jsx)("strong", {
                children: qR("buildAFactory2Game:dropRuin")
              }), (0, Uu.jsx)("span", {
                children: CR
              })]
            }), void 0 !== nR && (0, Uu.jsxs)(aZ.M, {
              className: pR("works"),
              onClick: () => {
                AR("works")
              },
              children: [(0, Uu.jsx)("strong", {
                children: qR("buildAFactory2Game:dropOldWorks")
              }), (0, Uu.jsx)("span", {
                children: qR("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(nR)
                })
              })]
            })]
          }), (0, Uu.jsx)("p", {
            className: "Baf2DropRenew",
            children: qR("buildAFactory2Game:dropRenew", {
              time: BR
            })
          }), (0, Uu.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: eR,
            onToggle: RR => {
              RR.currentTarget.open !== eR && rR(RR.currentTarget.open)
            },
            children: [(0, Uu.jsx)("summary", {
              children: qR("buildAFactory2Game:dropSalvageWhat")
            }), (0, Uu.jsx)("p", {
              children: qR("buildAFactory2Game:dropSalvageIntro")
            }), (0, Uu.jsx)("ul", {
              children: KR.map((RR => {
                let {
                  item: JR,
                  nameKey: GR,
                  useKey: yR,
                  params: tR
                } = RR;
                return (0, Uu.jsxs)("li", {
                  children: [(0, Uu.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, Uu.jsx)(gt.b, {
                      itemName: JR,
                      amount: 0
                    })
                  }), (0, Uu.jsxs)("span", {
                    children: [(0, Uu.jsx)("strong", {
                      children: qR(GR)
                    }), ": ", qR(yR, tR)]
                  })]
                }, JR)
              }))
            })]
          })]
        })
      })
    }
    const nK = "buildAFactory2Game:";

    function UK(RR, JR) {
      return RR.sendIslandEdit(`baf2coopleave ${JR.baf2IslandId}`)
    }

    function WK(RR) {
      let {
        card: JR,
        canRename: GR,
        done: tR,
        t: uR
      } = RR;
      const ZR = DZ(),
        [qR, iR] = (0, yR.useState)(JR.baf2IslandName),
        fR = nf(qR),
        VR = "" === fR || Uf(fR),
        KR = () => {
          !VR && GR && (fR !== JR.baf2IslandName ? tR(ZR.sendIslandEdit(`baf2islandrename ${JR.baf2IslandId} ${fR}`)) : tR(null))
        },
        wR = () => {
          tR(null)
        };
      return (0, Uu.jsxs)("div", {
        className: "Baf2IslandForm",
        ...Sf(wR),
        children: [(0, Uu.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [uR(`${nK}islandsRenameLabel`), (0, Uu.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: qR,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: jf,
            onChange: RR => {
              iR(RR.target.value)
            },
            ...zf(KR, wR)
          })]
        }), "" === fR && (0, Uu.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: uR(`${nK}islandsRenameEmpty`)
        }), Uf(fR) && (0, Uu.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: uR(`${nK}islandsNameReserved`)
        }), (0, Uu.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Uu.jsx)(aZ.r, {
            disabled: VR || !GR,
            onClick: KR,
            children: uR(`${nK}islandsRenameSave`)
          }), (0, Uu.jsx)(aZ.g, {
            onClick: wR,
            children: uR(`${nK}islandsCancel`)
          })]
        })]
      })
    }

    function AK(RR) {
      let {
        card: JR,
        canDelete: GR,
        done: tR,
        t: uR
      } = RR;
      const ZR = DZ(),
        [qR, iR] = (0, yR.useState)(""),
        fR = function(RR, JR) {
          return nf(RR).toLowerCase() === nf(JR).toLowerCase()
        }(qR, JR.baf2IslandName),
        VR = () => {
          fR && GR && tR(ZR.sendIslandEdit(`baf2islanddelete ${JR.baf2IslandId}`))
        },
        KR = () => {
          tR(null)
        },
        wR = vf("name"),
        [rR, eR = ""] = uR(`${nK}islandsDeleteConfirm`, {
          name: wR
        }).split(wR);
      return (0, Uu.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...Sf(KR),
        children: [(0, Uu.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, Uu.jsxs)("span", {
            children: [rR, (0, Uu.jsx)("strong", {
              children: JR.baf2IslandName
            }), eR]
          }), (0, Uu.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: qR,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: jf,
            onChange: RR => {
              iR(RR.target.value)
            },
            ...zf(VR, KR)
          })]
        }), of(JR) && (0, Uu.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: uR(`${nK}islandsDeleteLeftBack`)
        }), (0, Uu.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Uu.jsx)(aZ.M, {
            disabled: !fR || !GR,
            onClick: VR,
            children: uR(`${nK}islandsDeleteForGood`)
          }), (0, Uu.jsx)(aZ.g, {
            onClick: KR,
            children: uR(`${nK}islandsCancel`)
          })]
        })]
      })
    }

    function CK(RR) {
      let {
        members: JR,
        t: GR
      } = RR;
      const yR = JR.length;
      return (0, Uu.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, Uu.jsxs)("span", {
          children: [1 === yR ? GR(`${nK}islandsPlayersOne`) : GR(`${nK}islandsPlayers`, {
            count: String(yR)
          }), " "]
        }), JR.map(((RR, JR) => (0, Uu.jsxs)("span", {
          className: Ct()("Baf2IslandMember", {
            Here: RR.baf2MemberHere
          }),
          title: RR.baf2MemberHere ? GR(`${nK}islandsPlayerHere`) : void 0,
          children: [RR.baf2MemberName, JR < yR - 1 ? ", " : ""]
        }, RR.baf2MemberKey)))]
      })
    }

    function XK(RR) {
      let {
        card: JR,
        answered: GR,
        nowMs: tR,
        t: uR
      } = RR;
      const ZR = DZ(),
        [qR, iR] = (0, yR.useState)(new Map),
        fR = of(JR);
      if (!fR) return null;
      return (0, Uu.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, Uu.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: uR(`${nK}islandsLeftTitle`)
        }), (0, Uu.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: fR.left.map((RR => {
            const yR = RR.baf2LeftKey,
              VR = If(qR.get(yR), GR, tR),
              KR = function(RR) {
                return 1 === RR ? [`${rf}islandsLeftItemsOne`] : [`${rf}islandsLeftItems`, {
                  count: String(RR)
                }]
              }(RR.baf2LeftItems);
            return (0, Uu.jsx)("li", {
              className: Ct()("Baf2IslandPerson", {
                Pending: VR
              }),
              children: (0, Uu.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Uu.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: RR.baf2LeftName
                }), (0, Uu.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: uR(KR[0], KR[1])
                }), fR.claim && (0, Uu.jsx)(aZ.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: VR,
                  onClick: () => {
                    (RR => {
                      const GR = ZR.sendIslandEdit(`baf2coopclaim ${JR.baf2IslandId} ${RR}`);
                      iR((JR => new Map(JR).set(RR, {
                        atMs: Date.now(),
                        answer: GR
                      })))
                    })(yR)
                  },
                  children: uR(`${nK}islandsClaim`)
                })]
              })
            }, yR)
          }))
        }), fR.goThere && (0, Uu.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: uR(`${nK}islandsClaimGoThere`)
        })]
      })
    }

    function MK(RR) {
      let {
        card: JR,
        view: GR,
        blocked: tR,
        maxIslands: uR,
        answered: ZR,
        nowMs: qR,
        done: iR,
        openSocial: fR,
        t: VR
      } = RR;
      const KR = DZ(),
        [wR, rR] = (0, yR.useState)(new Map),
        [eR, aR] = (0, yR.useState)(new Map),
        [LR, nR] = (0, yR.useState)(null),
        UR = (0, yR.useRef)(null);
      kf(UR);
      const WR = JR.baf2IslandId,
        AR = JR.baf2IslandCoop,
        CR = null !== AR && void 0 !== AR && AR.baf2CoopMembers.some((RR => RR.baf2MemberKey === LR)) ? LR : null,
        XR = function(RR, JR) {
          const GR = RR.baf2IslandCoop;
          return GR && Pf(GR) || null !== JR ? void 0 : RR.baf2IslandInvitable
        }(JR, tR),
        MR = function(RR, JR) {
          const GR = RR.baf2IslandCoop;
          return GR && Pf(GR) ? {
            key: `${rf}islandsCoopFull`,
            params: {
              max: String(GR.baf2CoopMax)
            }
          } : void 0 !== RR.baf2IslandInvitable && null === JR || GR && !GR.baf2CoopManageHere ? null : "degraded" === JR || "stuck" === JR ? {
            key: `${rf}islandsInviteNotLoaded`
          } : null === JR || function(RR) {
            return "notHome" === RR || "wilds" === RR || "visiting" === RR
          }(JR) || Xf(JR) ? {
            key: `${rf}islandsInviteGoThere`
          } : {
            key: `${rf}islandsInviteBusy`
          }
        }(JR, tR),
        BR = () => {
          var RR;
          nR(null), null === (RR = UR.current) || void 0 === RR || RR.focus()
        };
      return (0, Uu.jsxs)("div", {
        ref: UR,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...Sf(null === CR ? iR : BR),
        children: [AR && (0, Uu.jsxs)(Uu.Fragment, {
          children: [(0, Uu.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: VR(`${nK}islandsPlayersTitle`, {
              count: String(AR.baf2CoopMembers.length),
              max: String(AR.baf2CoopMax)
            })
          }), (0, Uu.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: AR.baf2CoopMembers.map(((RR, JR) => {
              const yR = RR.baf2MemberKey,
                tR = If(wR.get(yR), ZR, qR);
              return (0, Uu.jsxs)("li", {
                className: Ct()("Baf2IslandPerson", {
                  Pending: tR
                }),
                children: [(0, Uu.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, Uu.jsx)("span", {
                    className: Ct()("Baf2IslandPersonName", {
                      Here: RR.baf2MemberHere
                    }),
                    children: RR.baf2MemberName
                  }), RR.baf2MemberHere && (0, Uu.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: VR(`${nK}islandsPlayerHere`)
                  }), 0 === JR && (0, Uu.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: VR(`${nK}islandsPlayerOwner`)
                  }), GR.remove && JR > 0 && !tR && CR !== yR && (0, Uu.jsx)(aZ.O, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var RR;
                      nR(yR), null === (RR = UR.current) || void 0 === RR || RR.focus()
                    },
                    children: VR(`${nK}islandsRemove`)
                  })]
                }), CR === yR && (0, Uu.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, Uu.jsx)("p", {
                    children: Of(VR, `${nK}islandsRemoveConfirm`, {
                      player: RR.baf2MemberName
                    })
                  }), (0, Uu.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, Uu.jsx)(aZ.M, {
                      onClick: () => {
                        (RR => {
                          const JR = KR.sendIslandEdit(`baf2coopremove ${WR} ${RR.baf2MemberKey}`);
                          rR((GR => new Map(GR).set(RR.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: JR
                          }))), BR()
                        })(RR)
                      },
                      children: VR(`${nK}islandsRemoveYes`)
                    }), (0, Uu.jsx)(aZ.g, {
                      onClick: BR,
                      children: VR(`${nK}islandsCancel`)
                    })]
                  })]
                })]
              }, yR)
            }))
          })]
        }), (void 0 !== XR || null !== MR) && (0, Uu.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: VR(`${nK}islandsInviteTitle`)
        }), !AR && (void 0 !== XR || null !== MR) && (0, Uu.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: VR(`${nK}islandsInviteShareNote`)
        }), 0 === (null === XR || void 0 === XR ? void 0 : XR.length) && (0, Uu.jsx)(BK, {
          openSocial: fR,
          t: VR
        }), void 0 !== XR && XR.length > 0 && (0, Uu.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: XR.map((RR => {
            const JR = !0 === RR.baf2InvitableSent || If(eR.get(RR.baf2InvitableId), ZR, qR);
            return (0, Uu.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, Uu.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Uu.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: RR.baf2InvitableName
                }), RR.baf2InvitableFull && !JR && (0, Uu.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: VR(`${nK}islandsInviteTheirFull`, {
                    max: String(uR)
                  })
                }), (JR || !RR.baf2InvitableFull) && (0, Uu.jsx)(aZ.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: JR,
                  onClick: () => {
                    (RR => {
                      const JR = KR.sendIslandEdit(`baf2coopinvite ${WR} ${RR}`);
                      aR((GR => new Map(GR).set(RR, {
                        atMs: Date.now(),
                        answer: JR
                      })))
                    })(RR.baf2InvitableId)
                  },
                  children: VR(JR ? `${nK}islandsInvited` : `${nK}islandsInvite`)
                })]
              })
            }, RR.baf2InvitableId)
          }))
        }), MR && (0, Uu.jsx)(Tf, {
          note: MR,
          t: VR
        }), (0, Uu.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Uu.jsx)(aZ.g, {
            onClick: iR,
            children: VR(`${nK}islandsDone`)
          })
        })]
      })
    }

    function BK(RR) {
      let {
        openSocial: JR,
        t: GR
      } = RR;
      return (0, Uu.jsxs)(Uu.Fragment, {
        children: [(0, Uu.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: GR(JR ? `${nK}islandsInviteNobody` : `${nK}islandsInviteNobodyGuest`)
        }), JR && (0, Uu.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Uu.jsx)(aZ.g, {
            onClick: JR,
            children: GR("socialBar:social")
          })
        })]
      })
    }

    function lK(RR) {
      let {
        className: JR,
        text: GR,
        ConfirmButton: tR,
        confirmLabel: uR,
        canConfirm: ZR,
        send: qR,
        done: iR,
        t: fR
      } = RR;
      const VR = (0, yR.useRef)(null);
      kf(VR);
      const KR = () => {
        iR(null)
      };
      return (0, Uu.jsxs)("div", {
        ref: VR,
        tabIndex: -1,
        className: Ct()("Baf2IslandForm", JR),
        ...Sf(KR),
        children: [(0, Uu.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: GR
        }), (0, Uu.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Uu.jsx)(tR, {
            disabled: !ZR,
            onClick: () => {
              ZR && iR(qR())
            },
            children: uR
          }), (0, Uu.jsx)(aZ.g, {
            onClick: KR,
            children: fR(`${nK}islandsCancel`)
          })]
        })]
      })
    }

    function pK(RR) {
      return "hidden" !== RR
    }

    function gK(RR) {
      var JR, GR;
      let {
        card: tR,
        keepOwn: uR,
        blocked: ZR,
        maxIslands: qR,
        serverNowMs: iR,
        nowMs: fR,
        actions: VR,
        full: KR,
        waits: wR,
        answered: rR,
        mode: eR,
        setMode: aR,
        pending: LR,
        onSent: nR,
        switchTo: UR,
        leave: WR,
        coopOn: AR,
        openSocial: CR,
        t: XR
      } = RR;
      const MR = DZ(),
        BR = tR.baf2IslandActive,
        lR = BR ? null : function(RR, JR) {
          if (RR <= 0) return null;
          const GR = JR - RR;
          if (GR < Ku) return [`${rf}islandsPlayedJustNow`];
          if (GR < ef) return [`${rf}islandsPlayedMinutes`, {
            minutes: String(Math.floor(GR / Ku))
          }];
          if (GR < af) return [`${rf}islandsPlayedHours`, {
            hours: String(Math.floor(GR / ef))
          }];
          const yR = Math.floor(GR / af);
          return 1 === yR ? [`${rf}islandsPlayedDay`] : [`${rf}islandsPlayedDays`, {
            days: String(yR)
          }]
        }(tR.baf2IslandLastPlayedMs, iR),
        pR = void 0 === (gR = tR.baf2IslandItems) ? null : 0 === gR ? [`${rf}islandsItemsNone`] : 1 === gR ? [`${rf}islandsItemsOne`] : [`${rf}islandsItems`, {
          count: String(gR)
        }];
      var gR;
      const bR = function(RR) {
          return RR ? 1 === RR ? [`${rf}islandsWaitingOne`] : [`${rf}islandsWaiting`, {
            count: String(RR)
          }] : null
        }(tR.baf2IslandWaiting),
        vR = tR.baf2IslandUnreadable,
        OR = tR.baf2IslandCoop,
        xR = Hf(tR, VR, uR, KR, AR, ZR),
        NR = (0, yR.useRef)(null);
      df(null !== eR, NR);
      const DR = () => {
          var RR;
          aR(null), null === (RR = NR.current) || void 0 === RR || RR.focus()
        },
        HR = (RR, JR) => {
          DR(), null !== RR && nR(RR, JR)
        },
        oR = (RR, JR) => XR(`${nK}${RR}`, {
          time: Lu(XR, JR)
        });
      return (0, Uu.jsxs)("li", {
        ref: NR,
        tabIndex: -1,
        className: Ct()("Baf2IslandCard", {
          Active: BR,
          Pending: LR,
          Shared: void 0 !== OR
        }),
        children: [(0, Uu.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, Uu.jsx)("strong", {
            className: "Baf2IslandName",
            children: tR.baf2IslandName
          }), BR && (0, Uu.jsx)("span", {
            className: "Baf2IslandBadge",
            children: XR(`${nK}islandsOnThis`)
          }), OR && (0, Uu.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: XR(`${nK}islandsShared`)
          })]
        }), "member" === (null === OR || void 0 === OR ? void 0 : OR.baf2CoopRole) && (0, Uu.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Of(XR, `${nK}islandsSharedBy`, {
            owner: OR.baf2CoopOwner
          })
        }), void 0 !== vR && (0, Uu.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: XR("newer" === vR ? `${nK}islandsUnreadable` : `${nK}islandsDamaged`)
        }), "corrupt" === vR && KR && (0, Uu.jsx)("p", {
          className: "Baf2IslandStats",
          children: XR(`${nK}islandsDamagedFull`)
        }), void 0 === vR && (0, Uu.jsxs)(Uu.Fragment, {
          children: [(0, Uu.jsx)(Ff, {
            tier: tR.baf2IslandTier,
            t: XR
          }), (0, Uu.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, Uu.jsx)("span", {
              children: 1 === tR.baf2IslandQuestsDone ? XR(`${nK}islandsQuestsDoneOne`) : XR(`${nK}islandsQuestsDone`, {
                count: String(tR.baf2IslandQuestsDone)
              })
            }), (0, Uu.jsx)("span", {
              children: 1 === tR.baf2IslandMachines ? XR(`${nK}islandsMachinesOne`) : XR(`${nK}islandsMachines`, {
                count: String(tR.baf2IslandMachines)
              })
            }), pR && (0, Uu.jsx)("span", {
              children: XR(pR[0], pR[1])
            }), bR && (0, Uu.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: XR(bR[0], bR[1])
            }), lR && (0, Uu.jsx)("span", {
              children: XR(lR[0], lR[1])
            })]
          })]
        }), OR && void 0 === OR.baf2CoopState && "people" !== eR && (0, Uu.jsx)(CK, {
          members: OR.baf2CoopMembers,
          t: XR
        }), null === eR && (0, Uu.jsx)(XK, {
          card: tR,
          answered: rR,
          nowMs: fR,
          t: XR
        }), xR.note && (0, Uu.jsx)(Tf, {
          note: xR.note,
          className: Ct()({
            Unreachable: void 0 !== (null === OR || void 0 === OR ? void 0 : OR.baf2CoopState)
          }),
          t: XR
        }), "rename" === eR && (0, Uu.jsx)(WK, {
          card: tR,
          canRename: "enabled" === xR.rename,
          done: HR,
          t: XR
        }), "delete" === eR && (0, Uu.jsx)(AK, {
          card: tR,
          canDelete: "enabled" === xR.delete,
          done: RR => {
            HR(RR, OR ? "delete" : void 0)
          },
          t: XR
        }), "people" === eR && (0, Uu.jsx)(MK, {
          card: tR,
          view: xR,
          blocked: ZR,
          maxIslands: qR,
          answered: rR,
          nowMs: fR,
          done: DR,
          openSocial: CR,
          t: XR
        }), "leave" === eR && (0, Uu.jsx)(lK, {
          className: "Leave",
          text: Of(XR, `${nK}islandsLeaveConfirm`, {
            island: tR.baf2IslandName,
            owner: null !== (JR = null === (GR = tR.baf2IslandCoop) || void 0 === GR ? void 0 : GR.baf2CoopOwner) && void 0 !== JR ? JR : ""
          }),
          ConfirmButton: aZ.M,
          confirmLabel: XR(`${nK}islandsLeaveYes`),
          canConfirm: "enabled" === xR.leave,
          send: () => UK(MR, tR),
          done: RR => {
            HR(RR, "leave"), null !== RR && BR && WR()
          },
          t: XR
        }), "unshare" === eR && (0, Uu.jsx)(lK, {
          className: "Unshare",
          text: Of(XR, `${nK}islandsStopSharingConfirm`, {
            island: tR.baf2IslandName
          }),
          ConfirmButton: aZ.r,
          confirmLabel: XR(`${nK}islandsStopSharing`),
          canConfirm: "enabled" === xR.unshare,
          send: () => MR.sendIslandEdit(`baf2coopunshare ${tR.baf2IslandId}`),
          done: RR => {
            HR(RR), null !== RR && WR()
          },
          t: XR
        }), null === eR && !LR && (0, Uu.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": tR.baf2IslandName,
          children: [pK(xR.switch) && (0, Uu.jsx)(aZ.r, {
            disabled: "enabled" !== xR.switch,
            onClick: UR,
            children: "tryAgain" === xR.switchLabel ? XR(`${nK}islandsTryAgain`) : wR.switch > 0 ? oR("islandsSwitchIn", wR.switch) : XR(`${nK}islandsSwitch`)
          }), pK(xR.rename) && (0, Uu.jsx)(aZ.g, {
            disabled: "enabled" !== xR.rename,
            onClick: () => {
              aR("rename")
            },
            children: XR(`${nK}islandsRename`)
          }), pK(xR.people) && (0, Uu.jsx)(aZ.g, {
            disabled: "enabled" !== xR.people,
            onClick: () => {
              aR("people")
            },
            children: XR("players" === xR.peopleLabel ? `${nK}islandsPlayersButton` : `${nK}islandsInviteButton`)
          }), pK(xR.unshare) && (0, Uu.jsx)(aZ.g, {
            disabled: "enabled" !== xR.unshare,
            onClick: () => {
              aR("unshare")
            },
            children: XR(`${nK}islandsStopSharing`)
          }), pK(xR.dismiss) && (0, Uu.jsx)(aZ.g, {
            disabled: "enabled" !== xR.dismiss,
            onClick: () => {
              nR(UK(MR, tR), "dismiss"), BR && WR()
            },
            children: XR(`${nK}islandsDismiss`)
          }), pK(xR.leave) && (0, Uu.jsx)(aZ.O, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== xR.leave,
            onClick: () => {
              aR("leave")
            },
            children: BR && wR.switch > 0 ? oR("islandsLeaveIn", wR.switch) : XR(`${nK}islandsLeave`)
          }), pK(xR.delete) && (0, Uu.jsx)(aZ.O, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== xR.delete,
            onClick: () => {
              aR("delete")
            },
            children: wR.change > 0 && xR.deleteWaits ? oR("islandsDeleteIn", wR.change) : XR(`${nK}islandsDelete`)
          })]
        })]
      })
    }
    const bK = "buildAFactory2Game:";

    function vK(RR) {
      let {
        invite: JR,
        actions: GR,
        full: tR,
        maxIslands: uR,
        waitSeconds: ZR,
        focus: qR,
        focused: iR,
        join: fR,
        decline: VR,
        t: KR
      } = RR;
      const [wR, rR] = (0, yR.useState)(!1), eR = (0, yR.useRef)(null);
      df(wR, eR), (0, yR.useEffect)((() => {
        var RR;
        qR && (rR(!0), null === (RR = eR.current) || void 0 === RR || RR.focus(), iR())
      }), [qR, iR]);
      const aR = function(RR, JR, GR, yR, tR) {
          return GR ? {
            join: !1,
            note: {
              key: `${rf}islandsJoinTooMany`,
              params: {
                max: String(yR)
              }
            }
          } : RR.baf2InvitePlayers >= tR ? {
            join: !1,
            note: {
              key: `${rf}islandsJoinFull`
            }
          } : {
            join: JR.switch,
            note: null
          }
        }(JR, GR, tR, uR, 10),
        LR = JR.baf2InviteIsland,
        nR = JR.baf2InvitePlayers,
        UR = () => {
          var RR;
          rR(!1), null === (RR = eR.current) || void 0 === RR || RR.focus()
        },
        WR = ZR > 0 && null === aR.note ? KR(`${bK}islandsJoinIn`, {
          time: Lu(KR, ZR)
        }) : KR(`${bK}islandsJoin`);
      return (0, Uu.jsxs)("li", {
        ref: eR,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...wR ? Sf(UR) : {},
        children: [(0, Uu.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, Uu.jsx)("strong", {
            className: "Baf2IslandName",
            children: LR
          })
        }), (0, Uu.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Of(KR, `${bK}islandsInvitedBy`, {
            owner: JR.baf2InviteOwner
          })
        }), (0, Uu.jsx)(Ff, {
          tier: JR.baf2InviteTier,
          t: KR
        }), (0, Uu.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, Uu.jsx)("span", {
            children: 1 === nR ? KR(`${bK}islandsPlayersCountOne`) : KR(`${bK}islandsPlayersCount`, {
              count: String(nR)
            })
          })
        }), aR.note && (0, Uu.jsx)(Tf, {
          note: aR.note,
          t: KR
        }), wR && (0, Uu.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Of(KR, `${bK}islandsJoinConfirm`, {
            island: LR
          })
        }), !wR && (0, Uu.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": LR,
          children: [(0, Uu.jsx)(aZ.r, {
            disabled: !aR.join,
            onClick: () => {
              var RR;
              rR(!0), null === (RR = eR.current) || void 0 === RR || RR.focus()
            },
            children: WR
          }), (0, Uu.jsx)(aZ.g, {
            onClick: VR,
            children: KR(`${bK}islandsDecline`)
          })]
        }), wR && (0, Uu.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Uu.jsx)(aZ.r, {
            disabled: !aR.join,
            onClick: fR,
            children: KR(`${bK}islandsJoinYes`)
          }), (0, Uu.jsx)(aZ.g, {
            onClick: UR,
            children: KR(`${bK}islandsCancel`)
          })]
        })]
      })
    }

    function OK(RR) {
      let {
        invites: JR,
        actions: GR,
        full: yR,
        maxIslands: tR,
        waitSeconds: uR,
        focus: ZR,
        focused: qR,
        leave: iR,
        declined: fR,
        t: VR
      } = RR;
      const KR = DZ();
      return (0, Uu.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, Uu.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: VR(`${bK}islandsInvitesTitle`)
        }), (0, Uu.jsx)("ul", {
          className: "Baf2IslandCards",
          children: JR.map((RR => {
            const JR = RR.baf2InviteId;
            return (0, Uu.jsx)(vK, {
              invite: RR,
              actions: GR,
              full: yR,
              maxIslands: tR,
              waitSeconds: uR,
              focus: ZR === JR,
              focused: qR,
              join: () => {
                KR.send(`baf2coopaccept ${JR}`), iR()
              },
              decline: () => {
                KR.send(`baf2coopdecline ${JR}`), fR(JR)
              },
              t: VR
            }, JR)
          }))
        })]
      })
    }
    const xK = "buildAFactory2Game:";

    function NK(RR) {
      let {
        cards: JR,
        activeName: GR,
        canStart: tR,
        waitSeconds: uR,
        leave: ZR,
        t: qR
      } = RR;
      const iR = DZ(),
        [fR, VR] = (0, yR.useState)(!1),
        [KR, wR] = (0, yR.useState)(""),
        rR = (0, yR.useRef)(null);
      df(fR, rR), (0, yR.useEffect)((() => {
        var RR;
        fR && (null === (RR = rR.current) || void 0 === RR || RR.focus())
      }), [fR]);
      const eR = Wf(JR),
        aR = nf(KR),
        LR = Uf(aR),
        nR = () => {
          tR && !LR && (iR.send("" === aR || aR === eR ? QR : `${QR} ${aR}`), ZR())
        },
        UR = () => {
          var RR;
          VR(!1), null === (RR = rR.current) || void 0 === RR || RR.focus()
        };
      return (0, Uu.jsxs)("li", {
        ref: rR,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...fR ? Sf(UR) : {},
        children: [(0, Uu.jsx)("strong", {
          className: "Baf2IslandName",
          children: qR(`${xK}islandsNewTitle`)
        }), !fR && (0, Uu.jsx)("p", {
          className: "Baf2IslandStats",
          children: qR(`${xK}islandsNewNote`)
        }), fR && (0, Uu.jsxs)(Uu.Fragment, {
          children: [(0, Uu.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Of(qR, `${xK}islandsNewConfirm`, {
              name: GR
            })
          }), (0, Uu.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [qR(`${xK}islandsNewNameLabel`), (0, Uu.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: KR,
              placeholder: eR,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: jf,
              onChange: RR => {
                wR(RR.target.value)
              },
              ...zf(nR, UR)
            })]
          }), LR && (0, Uu.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: qR(`${xK}islandsNameReserved`)
          })]
        }), (0, Uu.jsxs)("div", {
          className: Ct()("Baf2IslandButtons", {
            Stacked: fR
          }),
          children: [(0, Uu.jsx)(aZ.r, {
            disabled: !tR || fR && LR,
            onClick: () => {
              if (!fR) return wR(eR), void VR(!0);
              nR()
            },
            children: uR > 0 ? qR(`${xK}islandsNewIn`, {
              time: Lu(qR, uR)
            }) : qR(fR ? `${xK}islandsNewConfirmButton` : `${xK}islandsNew`)
          }), fR && (0, Uu.jsx)(aZ.g, {
            onClick: UR,
            children: qR(`${xK}islandsCancel`)
          })]
        })]
      })
    }

    function DK(RR) {
      var JR, GR;
      let {
        message: tR,
        arrivedAtMs: uR,
        close: ZR,
        leave: qR,
        openSocial: iR
      } = RR;
      const fR = DZ(),
        {
          t: VR
        } = (0, lt.A)(),
        KR = Qf(1e3),
        [wR, rR] = (0, yR.useState)(null),
        [eR, aR] = (0, yR.useState)(new Map),
        [LR, nR] = (0, yR.useState)(new Set),
        UR = tR.baf2IslandCards,
        WR = function(RR, JR, GR, yR) {
          return (null !== RR && void 0 !== RR ? RR : []).filter((RR => JR + RR.baf2InviteLeftMs > GR && !yR.has(RR.baf2InviteId)))
        }(tR.baf2IslandsInvites, uR, KR, LR),
        AR = WR.map((RR => RR.baf2InviteId)).join(" "),
        CR = (0, yR.useRef)(null),
        XR = Ef(CR);
      Yf(), (0, yR.useEffect)((() => {
        var RR, JR;
        null !== (RR = CR.current) && void 0 !== RR && RR.contains(document.activeElement) || (null === (JR = CR.current) || void 0 === JR || JR.focus())
      }), [tR, AR]), (0, yR.useEffect)((() => {
        aR((RR => function(RR, JR, GR, yR) {
          const tR = new Map;
          for (const uR of JR) {
            const JR = RR.get(uR.baf2IslandId);
            JR && (void 0 !== JR.untilGone || yR < JR.answer) && pf(JR, uR, GR) && tR.set(uR.baf2IslandId, JR)
          }
          return tR.size === RR.size ? RR : tR
        }(RR, tR.baf2IslandCards, Date.now(), tR.baf2IslandsAnswered)))
      }), [tR]);
      const MR = Lf(uR, tR.baf2IslandsWaitMs, KR),
        BR = tR.baf2IslandsBlocked,
        lR = Mf(BR, MR),
        pR = function(RR, JR) {
          const GR = Mf(RR, 0);
          return {
            switch: GR.switch ? JR : 0,
            change: GR.change ? JR : 0
          }
        }(BR, MR),
        gR = UR.length >= tR.baf2IslandsMax,
        bR = UR.length > 0,
        vR = function(RR, JR, GR) {
          return RR + Math.max(0, GR - JR)
        }(tR.baf2IslandsNowMs, uR, KR),
        OR = null !== (JR = null === (GR = UR.find((RR => RR.baf2IslandActive))) || void 0 === GR ? void 0 : GR.baf2IslandName) && void 0 !== JR ? JR : "",
        xR = function(RR) {
          const JR = RR.filter(Df).length;
          return JR <= 1 && JR < RR.length
        }(UR),
        NR = !0 === tR.baf2IslandsCoop,
        DR = function(RR, JR) {
          const GR = RR.find((RR => RR.baf2IslandActive)),
            yR = null === GR || void 0 === GR ? void 0 : GR.baf2IslandCoop;
          return GR && "member" === (null === yR || void 0 === yR ? void 0 : yR.baf2CoopRole) ? {
            key: `${rf}islandsKeepOwnMember`,
            names: {
              owner: yR.baf2CoopOwner,
              island: GR.baf2IslandName
            }
          } : {
            key: JR ? `${rf}islandsKeepOwn` : `${rf}islandsKeepOwnSolo`
          }
        }(UR, NR),
        [HR, oR] = (0, yR.useState)(null);
      (0, yR.useEffect)((() => {
        void 0 !== tR.baf2IslandsFocusInvite && oR(tR.baf2IslandsFocusInvite)
      }), [tR]);
      const cR = (0, yR.useCallback)((() => {
          oR(null)
        }), []),
        PR = wR ? UR.find((RR => RR.baf2IslandId === wR.id)) : void 0,
        IR = wR && PR && "hidden" !== Hf(PR, lR, xR, gR, NR, BR)[wR.mode] ? wR : null;
      return (0, Uu.jsx)(eZ.e, {
        close: ZR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Uu.jsxs)("section", {
          ref: CR,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: XR ? {
            marginTop: `${XR.marginTop}px`,
            maxHeight: `${XR.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, Uu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Uu.jsxs)("div", {
              children: [(0, Uu.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: VR(`${xK}islandsTitle`)
              }), bR && (0, Uu.jsx)("p", {
                children: VR(`${xK}islandsSubtitle`, {
                  count: String(UR.length),
                  max: String(tR.baf2IslandsMax)
                })
              })]
            }), (0, Uu.jsx)(aZ.l, {
              ariaLabel: VR(`${xK}islandsClose`),
              onClick: ZR
            })]
          }), (0, Uu.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== BR && (0, Uu.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Of(VR, Af(BR, Cf(UR)), {
                island: OR
              })
            }), bR && WR.length > 0 && (0, Uu.jsx)(OK, {
              invites: WR,
              actions: lR,
              full: gR,
              maxIslands: tR.baf2IslandsMax,
              waitSeconds: pR.switch,
              focus: HR,
              focused: cR,
              leave: qR,
              declined: RR => {
                nR((JR => new Set(JR).add(RR)))
              },
              t: VR
            }), bR && (0, Uu.jsxs)(Uu.Fragment, {
              children: [gR && (0, Uu.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: VR(`${xK}islandsFull`, {
                  max: String(tR.baf2IslandsMax)
                })
              }), (0, Uu.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Of(VR, DR.key, DR.names)
              }), (0, Uu.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [UR.map((RR => {
                  const JR = RR.baf2IslandId;
                  return (0, Uu.jsx)(gK, {
                    card: RR,
                    keepOwn: xR,
                    coopOn: NR,
                    openSocial: iR,
                    blocked: BR,
                    maxIslands: tR.baf2IslandsMax,
                    serverNowMs: vR,
                    nowMs: KR,
                    actions: lR,
                    full: gR,
                    waits: pR,
                    answered: tR.baf2IslandsAnswered,
                    mode: (null === IR || void 0 === IR ? void 0 : IR.id) === JR ? IR.mode : null,
                    setMode: RR => {
                      rR(null === RR ? null : {
                        id: JR,
                        mode: RR
                      })
                    },
                    pending: pf(eR.get(JR), RR, KR),
                    onSent: (GR, yR) => {
                      aR((tR => {
                        const uR = {
                          atMs: Date.now(),
                          from: RR.baf2IslandName,
                          answer: GR
                        };
                        return new Map(tR).set(JR, yR ? {
                          ...uR,
                          untilGone: yR
                        } : uR)
                      }))
                    },
                    leave: qR,
                    switchTo: () => {
                      fR.send(`baf2islandswitch ${JR}`), qR()
                    },
                    t: VR
                  }, JR)
                })), !gR && (0, Uu.jsx)(NK, {
                  cards: UR,
                  activeName: OR,
                  canStart: lR.change,
                  waitSeconds: pR.change,
                  leave: qR,
                  t: VR
                })]
              })]
            })]
          })]
        })
      })
    }
    var HK = GR(4250);
    const oK = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        jy: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      cK = Object.keys(oK),
      PK = new Set([...Object.keys(QJ), ...[...DJ.Press.recipes, ...DJ["Wire Mill"].recipes].map((RR => RR.output))]),
      IK = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      mK = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      zK = / Bar$|Alloy$/,
      SK = /Porkchop|Beef|Mutton|Venison|Steak/,
      jK = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const dK = (0, yR.memo)((function(RR) {
      let {
        item: JR,
        name: GR,
        amount: yR,
        selected: tR,
        small: uR,
        onPick: ZR
      } = RR;
      return (0, Uu.jsxs)("button", {
        type: "button",
        className: Ct()("Baf2TermTile", {
          On: tR,
          Small: uR
        }),
        "aria-label": `${GR}: ${yR}`,
        "aria-pressed": tR,
        onClick: () => {
          ZR(JR)
        },
        children: [(0, Uu.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, Uu.jsx)(gt.b, {
            itemName: JR,
            amount: 0
          })
        }), (0, Uu.jsx)("span", {
          className: "Baf2TermCount",
          children: eu(yR, 1e4)
        }), !uR && (0, Uu.jsx)("span", {
          className: "Baf2TermName",
          children: GR
        })]
      })
    }));

    function EK(RR) {
      let {
        store: JR,
        close: GR,
        send: tR
      } = RR;
      const {
        t: uR
      } = (0, lt.A)(), {
        isTouchScreen: ZR
      } = (0, Ut.o)(["isTouchScreen"]);
      ! function(RR) {
        const [JR, GR] = (0, yR.useState)(RR.version);
        (0, yR.useEffect)((() => (GR(RR.version), RR.subscribe((() => {
          GR(RR.version)
        })))), [RR])
      }(JR);
      const [qR, iR] = (0, yR.useState)("all"), [fR, VR] = (0, yR.useState)(!1), [KR, wR] = (0, yR.useState)(""), [rR, eR] = (0, yR.useState)(""), [aR, LR] = (0, yR.useState)(null), [nR, UR] = (0, yR.useState)(!1), [WR, AR, CR] = function() {
        const RR = (0, yR.useRef)(null),
          [JR, GR] = (0, yR.useState)(!1),
          tR = () => {
            const JR = RR.current;
            GR(null !== JR && JR.scrollLeft + JR.clientWidth < JR.scrollWidth - 1)
          };
        return (0, yR.useEffect)(tR), (0, yR.useEffect)((() => {
          const JR = RR.current;
          if (!JR) return;
          const GR = new ResizeObserver(tR);
          return GR.observe(JR), () => {
            GR.disconnect()
          }
        }), []), [RR, JR, tR]
      }(), XR = (0, yR.useMemo)((() => new Map), [uR]), MR = RR => {
        let JR = XR.get(RR);
        return void 0 === JR && (JR = function(RR, JR) {
          const GR = /^(.+) \((.+)\)$/.exec(RR);
          return GR ? JR(GR[2], GR[1]) : RR
        }((0, ht.f)(uR, RR), ((RR, JR) => uR("buildAFactory2Game:terminalTileKind", {
          kind: RR,
          base: JR
        }))), XR.set(RR, JR)), JR
      }, BR = JR.isReadOnly(), lR = nR && !BR, pR = JR.recent(), gR = JR.items(), bR = rR.trim().toLowerCase(), vR = lR ? JR.heldItems(aR) : ("recent" === qR ? pR : gR).filter((RR => {
        const JR = MR(RR);
        return ("all" === qR || "recent" === qR || function(RR) {
          return qu(RR) ? "farm" : IK.test(RR) ? "nuclear" : zK.test(RR) ? "bars" : SK.test(RR) ? "farm" : mK.test(RR) ? "jy" : PK.has(RR) ? "parts" : jK.test(RR) ? "farm" : "other"
        }(RR) === qR) && ("" === bR || JR.toLowerCase().includes(bR)) && ("" === KR || JR.toUpperCase().startsWith(KR))
      })), OR = new Set(gR.map((RR => MR(RR).charAt(0).toUpperCase()))), xR = RR => lR ? JR.heldAmount(RR) : JR.amount(RR), NR = !lR && "recent" !== qR && pR.length > 0, DR = function(RR, JR) {
        return null !== RR && JR.includes(RR) ? RR : null
      }(aR, NR ? [...vR, ...pR] : vR), HR = null === DR ? 0 : JR.amount(DR), oR = null === DR ? 0 : xR(DR), cR = (0, yR.useCallback)((RR => {
        LR((JR => JR === RR ? null : RR))
      }), []), PR = RR => oR > 0 || lR && null === DR && "fill" === RR && vR.length > 0, IR = lR ? [
        ["one", uR("buildAFactory2Game:terminalStoreOne")],
        ["stack", uR("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", uR(null === DR ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", uR("buildAFactory2Game:terminalTakeOne")],
        ["stack", uR("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", uR("buildAFactory2Game:terminalFill")]
      ], mR = lR ? uR("buildAFactory2Game:terminalStoreEmpty") : "" !== KR ? uR("buildAFactory2Game:terminalEmptyLetter", {
        letter: KR
      }) : "" !== bR ? uR("buildAFactory2Game:terminalEmptySearch", {
        query: rR
      }) : uR("buildAFactory2Game:terminalEmpty");
      return (0, Uu.jsx)(eZ.e, {
        close: GR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, Uu.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, Uu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Uu.jsxs)("div", {
              children: [(0, Uu.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: uR(JR.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, Uu.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, Uu.jsx)("span", {
                  className: Ct()({
                    Off: lR
                  }),
                  children: uR("buildAFactory2Game:terminalSubtitle", {
                    count: String(JR.siloCount())
                  })
                }), !BR && (0, Uu.jsx)("span", {
                  className: Ct()({
                    Off: !lR
                  }),
                  children: uR("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !BR && (0, Uu.jsx)(HK.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: uR("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: uR("buildAFactory2Game:terminalModeStore")
              }],
              value: lR ? "store" : "take",
              onChange: RR => {
                UR("store" === RR), LR(null)
              },
              ariaLabel: uR("buildAFactory2Game:terminalModes")
            }), (0, Uu.jsx)(aZ.l, {
              onClick: GR
            })]
          }), (0, Uu.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, Uu.jsxs)("div", {
              className: Ct()("Baf2TermTools", {
                Hidden: lR
              }),
              children: [(0, Uu.jsx)("div", {
                ref: WR,
                className: Ct()("Baf2TermChips", {
                  MoreRight: AR
                }),
                onScroll: CR,
                children: fR ? (0, Uu.jsxs)(Uu.Fragment, {
                  children: [(0, Uu.jsx)("button", {
                    type: "button",
                    "aria-label": uR("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      VR(!1), wR("")
                    },
                    children: "\u2190"
                  }), [...OR].sort().map((RR => (0, Uu.jsx)("button", {
                    type: "button",
                    className: Ct()({
                      On: KR === RR
                    }),
                    onClick: () => {
                      wR(KR === RR ? "" : RR)
                    },
                    children: RR
                  }, RR)))]
                }) : (0, Uu.jsxs)(Uu.Fragment, {
                  children: [(0, Uu.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      VR(!0)
                    },
                    children: uR("buildAFactory2Game:terminalLetters")
                  }), cK.map((RR => (0, Uu.jsx)("button", {
                    type: "button",
                    className: Ct()({
                      On: qR === RR
                    }),
                    onClick: () => {
                      iR(RR)
                    },
                    children: uR(oK[RR])
                  }, RR)))]
                })
              }), !ZR && (0, Uu.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: rR,
                placeholder: uR("buildAFactory2Game:terminalSearch"),
                "aria-label": uR("buildAFactory2Game:terminalSearch"),
                onChange: RR => {
                  eR(RR.target.value)
                },
                onKeyDown: RR => {
                  RR.stopPropagation()
                }
              }), (0, Uu.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": uR("buildAFactory2Game:terminalResort"),
                title: uR("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  JR.resort()
                },
                children: "\u21c5"
              })]
            }), NR && (0, Uu.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, Uu.jsx)("span", {
                children: uR(oK.recent)
              }), pR.map((RR => (0, Uu.jsx)(dK, {
                item: RR,
                name: MR(RR),
                amount: JR.amount(RR),
                selected: DR === RR,
                small: !0,
                onPick: cR
              }, RR)))]
            }), (0, Uu.jsx)("div", {
              className: "Baf2TermTiles",
              children: vR.length > 0 ? vR.map((RR => (0, Uu.jsx)(dK, {
                item: RR,
                name: MR(RR),
                amount: xR(RR),
                selected: DR === RR,
                onPick: cR
              }, RR))) : (0, Uu.jsx)("p", {
                className: "Baf2TermEmpty",
                children: mR
              })
            }), (0, Uu.jsxs)("div", {
              className: Ct()("Baf2TermActions", {
                Hidden: lR && 0 === vR.length
              }),
              children: [(0, Uu.jsx)("span", {
                className: "Baf2TermPicked",
                children: BR ? (0, Uu.jsxs)(Uu.Fragment, {
                  children: [null !== DR && HR > 0 ? MR(DR) : uR("buildAFactory2Game:terminalVisiting"), (0, Uu.jsx)("small", {
                    children: uR("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== DR ? (0, Uu.jsxs)(Uu.Fragment, {
                  children: [MR(DR), (0, Uu.jsx)("small", {
                    children: uR("buildAFactory2Game:terminalStored", {
                      amount: HR.toLocaleString()
                    })
                  })]
                }) : uR(lR ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !BR && IR.map((RR => {
                let [GR, yR] = RR;
                const uR = "fill" === GR ? aZ.n : aZ.g;
                return (0, Uu.jsx)(uR, {
                  className: "Baf2TermTake",
                  disabled: !PR(GR),
                  onClick: () => {
                    (RR => {
                      PR(RR) && tR(null === DR ? JR.putAll() : lR ? JR.put(RR, DR) : JR.take(RR, DR))
                    })(GR)
                  },
                  children: yR
                }, GR)
              }))]
            })]
          })]
        })
      })
    }

    function YK(RR) {
      let {
        kind: JR,
        icon: GR,
        label: yR,
        number: tR,
        preview: uR,
        note: ZR,
        tone: qR = null,
        share: iR,
        onExplain: fR
      } = RR;
      return (0, Uu.jsxs)("button", {
        type: "button",
        className: Ct()("NxLane", JR, {
          Warn: "warn" === qR,
          Danger: "danger" === qR
        }),
        onClick: fR,
        children: [(0, Uu.jsxs)("span", {
          className: "NxLaneHead",
          children: [GR, (0, Uu.jsx)("span", {
            className: "NxLaneLabel",
            children: yR
          })]
        }), (0, Uu.jsxs)("span", {
          className: "NxLaneNum",
          children: [tR, uR && (0, Uu.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", uR]
          })]
        }), (0, Uu.jsx)("span", {
          className: "NxLaneNote",
          children: ZR
        }), void 0 !== iR && (0, Uu.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, iR)) + "%"
          }
        })]
      })
    }

    function kK(RR) {
      let {
        kind: JR,
        step: GR,
        short: yR,
        planned: tR
      } = RR;
      return (0, Uu.jsx)("i", {
        className: Ct()("NxPipe", JR, `Step${GR}`, {
          Short: yR,
          Planned: tR
        }),
        "aria-hidden": "true"
      })
    }

    function QK(RR) {
      let {
        max: JR,
        bands: GR,
        ticks: yR,
        now: tR,
        settle: uR,
        settleTone: ZR,
        onExplain: qR
      } = RR;
      const iR = RR => Math.max(0, Math.min(JR, RR)) / JR * 100 + "%";
      let fR = 0;
      return (0, Uu.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: qR,
        children: [(0, Uu.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [GR.map((RR => {
            const JR = {
              bottom: iR(fR),
              height: `calc(${iR(RR.upTo)} - ${iR(fR)})`
            };
            return fR = RR.upTo, (0, Uu.jsx)("i", {
              className: Ct()("NxGaugeBand", RR.kind),
              style: JR
            }, RR.kind)
          })), null !== tR && (0, Uu.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: iR(tR)
            }
          }), void 0 !== uR && null !== uR && (0, Uu.jsx)("i", {
            className: Ct()("NxGaugeSettle", {
              Bad: "bad" === ZR
            }),
            style: {
              bottom: iR(uR)
            }
          })]
        }), (0, Uu.jsx)("span", {
          className: "NxGaugeTicks",
          children: yR.map((RR => (0, Uu.jsx)("small", {
            style: {
              bottom: iR(RR)
            },
            children: RR
          }, RR)))
        })]
      })
    }

    function FK(RR) {
      const [JR, GR] = (0, yR.useState)(null), [tR, uR] = (0, yR.useState)((() => {
        try {
          return null === window.localStorage.getItem(RR)
        } catch {
          return !1
        }
      })), ZR = (0, yR.useRef)(null);
      (0, yR.useEffect)((() => () => {
        null !== ZR.current && clearTimeout(ZR.current)
      }), []);
      const qR = (0, yR.useCallback)((JR => {
          GR(JR), uR(!1);
          try {
            window.localStorage.setItem(RR, "1")
          } catch {}
          null !== ZR.current && clearTimeout(ZR.current), ZR.current = setTimeout((() => {
            ZR.current = null, GR(null)
          }), 5e3)
        }), [RR]),
        iR = (0, yR.useCallback)(((JR, GR) => {
          const yR = `${RR}:${JR}`;
          try {
            if (null !== window.localStorage.getItem(yR)) return;
            window.localStorage.setItem(yR, "1")
          } catch {
            return
          }
          qR(GR)
        }), [qR, RR]);
      return {
        explained: JR,
        hinting: tR,
        explain: qR,
        explainOnce: iR
      }
    }

    function TK(RR) {
      let {
        text: JR,
        tone: GR,
        explained: yR
      } = RR;
      return (0, Uu.jsxs)("p", {
        className: Ct()("NxStatus", null === yR ? GR : "Explain"),
        "aria-live": "polite",
        children: [null !== yR && (0, Uu.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== yR && void 0 !== yR ? yR : JR]
      })
    }
    const sK = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function hK(RR, JR) {
      const GR = Number(RR[JR]);
      return 1 === GR || 2 === GR || 3 === GR ? GR : 0
    }

    function Rw(RR) {
      return !!ai("reactor", RR.baf2RxNeed) || void 0 !== RR.baf2RxLayout && RR.baf2RxNeed.some((RR => {
        let [JR, GR] = RR;
        return GR > 0 && sK.includes(JR)
      }))
    }
    const Jw = "buildAFactory2Game:";

    function Gw(RR) {
      let {
        status: JR,
        store: GR,
        busy: yR
      } = RR;
      const {
        t: tR
      } = (0, lt.A)();
      return function(RR) {
        return 0 !== (RR.baf2RxFlags & aJ) && (!RR.baf2RxFormed || void 0 !== RR.baf2RxLayout)
      }(JR) ? (0, Uu.jsx)(aZ.n, {
        disabled: !Rw(JR) || yR,
        onClick: () => {
          GR.tap("fill", (() => {
            GR.send("fill")
          }))
        },
        children: tR(void 0 !== JR.baf2RxLayout ? `${Jw}rxFillLayout` : `${Jw}rxFill`)
      }) : null
    }

    function yw(RR) {
      let {
        status: JR,
        store: GR,
        readOnly: tR,
        bare: uR = !1
      } = RR;
      const {
        t: ZR
      } = (0, lt.A)(), qR = JR.baf2RxLayout, [iR, fR, VR] = JR.baf2RxDims, KR = (0, yR.useMemo)((() => {
        if (void 0 === qR) return 0;
        const RR = Uint8Array.from(qR, ((RR, JR) => hK(qR, JR)));
        return Yq([iR - 2, fR - 2, VR - 2], RR).max
      }), [qR, iR, fR, VR]);
      return void 0 === qR ? null : (0, Uu.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!uR && (0, Uu.jsx)("span", {
          className: "Baf2RxHint",
          children: ZR(`${Jw}rxLayoutLine`, {
            amount: Xi(KR)
          })
        }), !tR && (0, Uu.jsx)(aZ.g, {
          onClick: () => {
            GR.send("layout", 0)
          },
          children: ZR(`${Jw}rxLayoutHide`)
        })]
      })
    }
    const tw = "buildAFactory2Game:",
      uw = {
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

    function Zw(RR) {
      let {
        id: JR,
        title: GR,
        body: yR,
        bodyParams: tR,
        yes: uR,
        cancel: ZR,
        confirm: qR
      } = RR;
      const {
        t: iR
      } = (0, lt.A)();
      return (0, Uu.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": JR,
        children: [(0, Uu.jsx)("h3", {
          id: JR,
          children: iR(GR)
        }), (0, Uu.jsx)("p", {
          children: iR(yR, tR)
        }), (0, Uu.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, Uu.jsx)(aZ.i, {
            onClick: ZR,
            children: iR(`${tw}rxCancel`)
          }), (0, Uu.jsx)(aZ.M, {
            onClick: qR,
            children: iR(uR)
          })]
        })]
      })
    }

    function qw(RR) {
      const [JR, GR] = (0, yR.useState)((() => RR.get()));
      return (0, yR.useEffect)((() => (GR(RR.get()), RR.subscribe((() => {
        GR(RR.get())
      })))), [RR]), JR
    }

    function iw(RR) {
      let {
        kind: JR,
        cap: GR,
        busy: tR = !1,
        whyNot: uR = null,
        apart: ZR
      } = RR;
      const {
        t: qR
      } = (0, lt.A)(), [iR, fR] = (0, yR.useState)(!1), VR = null !== uR, KR = (0, yR.useRef)(null);
      if ((0, yR.useEffect)((() => {
          VR && fR(!1)
        }), [VR]), (0, yR.useLayoutEffect)((() => {
          var RR;
          const JR = null === (RR = KR.current) || void 0 === RR ? void 0 : RR.firstElementChild;
          VR ? null === JR || void 0 === JR || JR.setAttribute("aria-disabled", "true") : tR || null === JR || void 0 === JR || JR.removeAttribute("aria-disabled")
        })), !iR || VR) return (0, Uu.jsx)("span", {
        ref: KR,
        className: "Baf2RxApartWrap",
        children: (0, Uu.jsx)(aZ.i, {
          disabled: tR,
          className: Ct()({
            Baf2RxNotYet: VR
          }),
          onClick: () => {
            uR ? uR() : fR(!0)
          },
          children: qR(`${tw}rxApart`)
        })
      });
      const wR = "battery" === JR,
        rR = void 0 === GR ? `${tw}batApartConfirmBodyPlan` : `${tw}batApartConfirmBody`;
      return (0, Uu.jsx)(Zw, {
        id: `baf2ApartTitle_${JR}`,
        title: wR ? `${tw}batApartConfirmTitle` : `${tw}rxApartConfirmTitle`,
        body: wR ? rR : `${tw}rxApartConfirmBody`,
        bodyParams: void 0 === GR ? void 0 : {
          cap: GR
        },
        yes: `${tw}rxApart`,
        cancel: () => {
          fR(!1)
        },
        confirm: () => {
          fR(!1), ZR()
        }
      })
    }

    function fw(RR) {
      let {
        mood: JR,
        big: GR
      } = RR;
      const yR = uw[JR],
        tR = [];
      return yR.rows.forEach(((RR, JR) => {
        for (let GR = 0; GR < RR.length; GR++) "." !== RR[GR] && tR.push((0, Uu.jsx)("rect", {
          x: GR + 1,
          y: JR + 1,
          width: 1,
          height: 1,
          fill: "w" === RR[GR] ? "#8fd3ff" : yR.colour
        }, `${GR},${JR}`))
      })), (0, Uu.jsxs)("svg", {
        className: Ct()("Baf2RxFace", {
          Big: GR,
          Alarm: "alarm" === JR
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, Uu.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, Uu.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), tR]
      })
    }

    function Vw(RR) {
      return ru(RR, "+").replace("+", "")
    }

    function Kw(RR) {
      let {
        kind: JR,
        dims: GR,
        cap: yR,
        disabled: tR,
        compact: uR,
        resize: ZR
      } = RR;
      const {
        t: qR
      } = (0, lt.A)(), {
        min: iR,
        max: fR
      } = IG(JR), VR = Math.min(yR, fR), KR = [`${tw}rxWide`, `${tw}rxTall`, `${tw}rxDeep`], wR = {
        w: String(GR[0]),
        h: String(GR[1]),
        d: String(GR[2]),
        blocks: String(Ci(JR, GR))
      };
      return (0, Uu.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, Uu.jsx)("div", {
          className: "Baf2RxSteppers",
          children: GR.map(((RR, JR) => {
            const uR = yR => {
                const tR = [GR[0], GR[1], GR[2]];
                tR[JR] = RR + yR, ZR(tR)
              },
              wR = RR >= VR;
            return (0, Uu.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, Uu.jsx)("button", {
                type: "button",
                "aria-label": qR(`${tw}rxSmaller`),
                disabled: tR || RR <= iR,
                onClick: () => {
                  uR(-1)
                },
                children: "\u2212"
              }), (0, Uu.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [RR, (0, Uu.jsx)("small", {
                  children: qR(KR[JR])
                })]
              }), (0, Uu.jsx)("button", {
                type: "button",
                "aria-label": qR(`${tw}rxBigger`),
                disabled: tR || wR,
                onClick: () => {
                  uR(1)
                },
                children: wR && yR < fR ? "\ud83d\udd12" : "+"
              })]
            }, KR[JR])
          }))
        }), !uR && (0, Uu.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === JR ? qR(`${tw}rxSizeLine`, {
            ...wR,
            water: String(Ai(GR))
          }) : qR(`${tw}batSizeLine`, wR)
        })]
      })
    }

    function ww(RR) {
      let {
        on: JR,
        label: GR,
        disabled: yR,
        locked: tR,
        pending: uR,
        toggle: ZR
      } = RR;
      return (0, Uu.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": JR,
        disabled: yR,
        "aria-disabled": tR || void 0,
        className: Ct()("Baf2RxSwitch", {
          On: JR,
          Locked: tR,
          Pending: uR
        }),
        onClick: ZR,
        children: [(0, Uu.jsx)("span", {
          className: "Baf2RxKnob"
        }), GR]
      })
    }
    const rw = "buildAFactory2Game:",
      ew = .95;

    function aw(RR, JR) {
      return 0 !== (RR.baf2RxFlags & JR)
    }

    function Lw(RR) {
      return "cryo" === RR ? sR.g : sR.i
    }

    function nw(RR) {
      var JR, GR, yR, tR, uR, ZR, qR, iR, fR;
      return RR.baf2RxCryo ? {
        Nr: "cryo",
        usePerS: null !== (tR = RR.baf2RxCryoUse) && void 0 !== tR ? tR : 0,
        needPerS: null !== (uR = RR.baf2RxCryoNeed) && void 0 !== uR ? uR : 0,
        inPerS: null !== (ZR = RR.baf2RxCryoIn) && void 0 !== ZR ? ZR : 0,
        stored: null !== (qR = RR.baf2RxCryoStored) && void 0 !== qR ? qR : 0,
        makersShort: null !== (iR = RR.baf2RxMixersShort) && void 0 !== iR ? iR : 0,
        waterBeside: null !== (fR = RR.baf2RxWaterUse) && void 0 !== fR ? fR : 0,
        pct: RR.baf2RxWater
      } : {
        Nr: "water",
        usePerS: null !== (JR = RR.baf2RxWaterUse) && void 0 !== JR ? JR : 0,
        needPerS: null !== (GR = RR.baf2RxWaterNeed) && void 0 !== GR ? GR : 0,
        inPerS: RR.baf2RxWaterIn,
        stored: RR.baf2RxWaterStored,
        makersShort: null !== (yR = RR.baf2RxCondensersShort) && void 0 !== yR ? yR : 0,
        waterBeside: 0,
        pct: RR.baf2RxWater
      }
    }

    function Uw(RR) {
      const JR = "running" === RR.baf2RxState || "idle" === RR.baf2RxState;
      return RR.baf2RxFormed && RR.baf2RxTarget !== RR.baf2RxThrottle && JR ? Ww(RR, RR.baf2RxTarget) : null
    }

    function Ww(RR, JR) {
      const [GR, yR, tR, , , , uR, , ZR] = RR.baf2RxStats, qR = aw(RR, rJ), iR = nw(RR), fR = iR.pct / 100, {
        gen: VR,
        out: KR,
        load: wR
      } = function(RR, JR, GR, yR) {
        const tR = GR ? Iq : 1,
          uR = Math.min(RR.fuelHeat * tR * Math.max(0, Math.min(1, JR)), RR.size * tR);
        return {
          gen: uR,
          out: uR,
          load: ti(uR, RR.cooling, yR)
        }
      }({
        fuelHeat: GR,
        cooling: yR,
        size: tR
      }, JR / 100, qR, fR), rR = Zi(uR || Eq(...RR.baf2RxDims)), eR = RR.baf2RxHeat, aR = Math.abs(wR - eR), LR = function(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : sR.i;
        const uR = GR ? Iq : 1,
          ZR = Math.min(RR.fuelHeat * uR * JR / 100, RR.size * uR),
          qR = ZR,
          iR = RR.fuelHeat * uR,
          fR = RR.cooling * yi(yR.pct / 100),
          VR = iR > 0 && fR < RR.size * uR ? Math.floor(100 * fR / iR) : 100,
          KR = ZR * tR - yR.inPerS;
        return {
          out: qR,
          hotAbove: VR >= 100 ? null : Math.max(0, VR),
          waterSecs: yR.pct >= 100 && KR > 1e-6 ? Math.max(0, yR.stored) / KR : null
        }
      }({
        fuelHeat: GR,
        cooling: yR,
        size: tR
      }, JR, qR, {
        pct: iR.pct,
        inPerS: iR.inPerS,
        stored: iR.stored
      }, Lw(iR.Nr));
      return {
        pct: JR,
        out: KR,
        coolPerS: VR * Lw(iR.Nr),
        pelletsPerMin: ZR > 0 ? KR / ZR * 60 : 0,
        settle: wR,
        settleS: aR > 2 ? rR * Math.log(aR / 2) : 0,
        overheatS: wR > 100 && eR < 100 ? rR * Math.log((wR - eR) / (wR - 100)) : null,
        hotAbove: LR.hotAbove,
        coolantSecs: LR.waterSecs
      }
    }

    function Aw(RR) {
      return RR.baf2RxThrottle <= 0 && "running" !== RR.baf2RxState ? 0 : Ww(RR, RR.baf2RxTarget).pelletsPerMin / 60
    }

    function Cw(RR, JR) {
      if (RR <= 0 || JR <= 0) return 0;
      const GR = RR / JR;
      return GR < .25 ? 1 : GR < .5 ? 2 : GR < .8 ? 3 : 4
    }

    function Xw(RR, JR) {
      const GR = {};
      for (const [yR, tR] of Object.entries(JR.params)) GR[yR] = "time" === yR ? Lu(RR, tR) : "amount" === yR ? Xi(tR) : String(Math.round(tR));
      return RR(JR.key, GR)
    }

    function Mw(RR, JR) {
      return {
        key: `${rw}${RR}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: JR
      }
    }

    function Bw(RR) {
      var JR;
      const GR = aw(RR, rJ),
        yR = "running" === RR.baf2RxState,
        tR = Vi(RR),
        uR = RR.baf2RxHeat;
      var ZR;
      if (yR && uR > cq) return {
        key: null !== (ZR = tR.fix) && void 0 !== ZR ? ZR : `${rw}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const qR = yR ? Ww(RR, RR.baf2RxTarget).coolantSecs : null,
        iR = "cryo" === nw(RR).Nr;
      if (null !== qR && qR >= 1 && qR <= 30) return Mw(iR ? "rxWarnCryo" : "rxWarnWater", "bad");
      const fR = jq(Eq(...RR.baf2RxDims)).waste,
        VR = yR ? Li(RR, fR, Aw(RR)).fullInS : null;
      if (null !== VR && VR <= 120 && RR.baf2RxWaste >= .5 * fR) return Mw("rxWarnWaste", "warn");
      if (null !== qR && qR >= 1) return Mw(iR ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: qR
      });
      const KR = "noWater" === RR.baf2RxState && uR > cq;
      if (RR.baf2RxDamage >= 1 && !KR) return Mw("rxDamagedHeals", "warn", {
        pct: RR.baf2RxDamage
      });
      if (RR.baf2RxCryoCut) return Mw("rxFix_cryoCut", "warn");
      const wR = nw(RR);
      if ("noWater" === RR.baf2RxState && "cryo" === wR.Nr) return Mw("noWater" === RR.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const rR = tR.fix === `${rw}rxFix_scramCool` || "idle" === RR.baf2RxState && RR.baf2RxTarget <= 0;
      if (rR && RR.baf2RxFuel <= 0) return Mw("rxFix_noFuel", "warn");
      if (rR && RR.baf2RxWaterIn <= 0 && (null !== (JR = RR.baf2RxCryoIn) && void 0 !== JR ? JR : 0) <= 0) return Mw("rxFix_noWater", "warn");
      const eR = tR.fix === `${rw}rxFix_scramCool` ? wi(RR) : null;
      if (null !== eR) return {
        key: eR.key,
        params: {
          amount: eR.amount
        },
        tone: "info"
      };
      if ("running" !== RR.baf2RxState && "idle" !== RR.baf2RxState && null !== tR.fix) return {
        key: tR.fix,
        params: {},
        tone: "scram" === RR.baf2RxState ? "info" : KR ? "bad" : "warn"
      };
      var aR;
      if ("idle" === RR.baf2RxState && RR.baf2RxTarget <= 0) return {
        key: null !== (aR = tR.fix) && void 0 !== aR ? aR : `${rw}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const LR = RR.baf2RxCryoStarved;
      if ("cryo" === wR.Nr && LR && wR.needPerS > 0 && wR.usePerS < ew * wR.needPerS) return Mw("noWater" === LR ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const nR = "cryo" === wR.Nr,
        UR = wR.needPerS > 0 && wR.usePerS < ew * wR.needPerS;
      if (nR ? UR || wR.makersShort > 0 && wR.pct < 100 : wR.pct < 100) {
        const JR = nR && UR ? Math.floor(100 * wR.usePerS / wR.needPerS) : Math.min(100, wR.pct);
        if (wR.makersShort > 0) {
          return Mw(`${nR?"rxCryoShortLine":"rxWaterShortLine"}${1===wR.makersShort?"One":""}${!nR&&RR.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: JR,
            count: wR.makersShort
          })
        }
        return Mw(nR ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: JR
        })
      }
      const WR = function(RR) {
        const [JR, GR, yR] = RR.baf2RxStats, tR = nw(RR), uR = ui({
          fuelHeat: JR,
          cooling: GR,
          size: yR
        }, "cryo" === tR.Nr ? sR.c : 1, !0);
        return Math.max(0, uR * Lw(tR.Nr) - tR.inPerS)
      }(RR);
      if (GR && WR > 0) return Mw("cryo" === wR.Nr ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(WR)
      });
      if (uR >= Ji) return Mw("rxHotLine", "warn");
      const AR = Ww(RR, RR.baf2RxTarget);
      var CR;
      if (null !== AR.overheatS) return Mw("rxWillOverheat", "bad", {
        pct: RR.baf2RxTarget,
        time: AR.overheatS,
        safe: null !== (CR = AR.hotAbove) && void 0 !== CR ? CR : 100
      });
      if (Math.abs(AR.settle - uR) >= 3) return Mw("rxSettling", "info", {
        pct: RR.baf2RxTarget,
        heat: Math.round(AR.settle),
        time: AR.settleS
      });
      const XR = wi(RR);
      if (null !== XR) return {
        key: XR.key,
        params: {
          amount: XR.amount
        },
        tone: "info"
      };
      const MR = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== JR && ("running" !== JR || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === RR.rods ? `${qi}rxLimitNoRods` : `${qi}rxLimit_${Ri(RR)}`
      }({
        rods: RR.baf2RxStats[3],
        ...Ki(RR)
      }, RR.baf2RxState, RR.baf2RxOut >= ew * RR.baf2RxMaxNow, !1);
      if (MR === `${rw}rxLimit_size`) {
        const [JR, , GR, yR] = RR.baf2RxStats, tR = yR > 0 && JR > 0 ? Math.ceil(GR / (JR / yR) - 1e-9) : yR, uR = RR.baf2RxDims.every((RR => RR >= IG("reactor").max));
        if (tR < yR) return Mw(uR ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: tR,
          have: yR
        });
        if (uR) return Mw("rxLimit_sizeMax", "info")
      }
      return null !== MR ? {
        key: MR,
        params: {},
        tone: "info"
      } : Mw("rxSteady", "ok", {
        pct: RR.baf2RxTarget
      })
    }

    function lw(RR) {
      var JR;
      if (RR.melted) return Mw("rxMeltedBody", "bad");
      if (-1 === RR.bad) return Mw("rxFix_noRoom", "warn");
      if (RR.bad > 0) return Mw(1 === RR.bad ? "rxBadOne" : "rxBad", "warn", {
        count: RR.bad
      });
      if (RR.left > 0) {
        const JR = 1 === RR.left ? "One" : "";
        return Mw(RR.canFill ? `rxPlanLeft${JR}` : `rxPlanLeftNoFill${JR}`, "info", {
          count: RR.left
        })
      }
      if (0 === RR.rods) return Mw("rxLimitNoRods", "warn");
      const GR = null !== (JR = RR.idle) && void 0 !== JR ? JR : 0;
      return GR > 0 ? Mw(1 === GR ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: GR
      }) : Mw("rxPlanReady", "ok")
    }

    function pw(RR) {
      return Math.floor(Math.max(0, RR[1] - 1) / 2)
    }

    function gw(RR) {
      if (RR >= Qq && RR < Fq) {
        const JR = RR - Qq;
        return {
          key: 0 === JR ? `${rw}rxWhy_rodAlone` : 1 === JR ? `${rw}rxWhy_rodOne` : `${rw}rxWhy_rod`,
          params: {
            count: String(JR),
            heat: String(bq * (1 + vq * JR))
          }
        }
      }
      return RR === Fq ? {
        key: `${rw}rxWhy_channel`,
        params: {
          amount: String(xq)
        }
      } : RR === Tq ? {
        key: `${rw}rxWhy_deadChannel`,
        params: {}
      } : RR === sq ? {
        key: `${rw}rxWhy_graphite`,
        params: {}
      } : {
        key: `${rw}rxWhy_core`,
        params: {}
      }
    }
    const bw = "buildAFactory2Game:";

    function vw(RR, JR) {
      return 0 !== (RR.baf2RxFlags & JR)
    }

    function Ow(RR) {
      let {
        status: JR,
        pending: GR,
        store: yR,
        explain: tR
      } = RR;
      const {
        t: uR
      } = (0, lt.A)(), ZR = vw(JR, wJ), qR = JR.baf2RxTarget, iR = JR.baf2RxThrottle, fR = function(RR) {
        return {
          press: () => {
            RR.throttlePress()
          },
          drag: JR => {
            RR.throttleDrag(JR)
          },
          release: () => {
            RR.throttleRelease()
          }
        }
      }(yR), VR = null === (KR = Ww(JR, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, KR - 10),
        red: KR
      };
      var KR;
      return (0, Uu.jsxs)("div", {
        className: Ct()("Baf2RxThrottle", {
          Off: ZR
        }),
        onClick: () => {
          ZR && tR(`${bw}rxWhy_startFirst`)
        },
        children: [(0, Uu.jsx)("span", {
          className: "HideNarrow",
          children: uR(`${bw}rxThrottle`)
        }), (0, Uu.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, Uu.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: qR,
            disabled: ZR,
            style: ZR ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": uR(`${bw}rxThrottle`),
            onPointerDown: () => {
              fR.press();
              const RR = () => {
                window.removeEventListener("pointerup", RR), window.removeEventListener("pointercancel", RR), fR.release()
              };
              window.addEventListener("pointerup", RR), window.addEventListener("pointercancel", RR)
            },
            onKeyUp: fR.release,
            onChange: RR => {
              fR.drag(Number(RR.target.value))
            }
          }), (0, Uu.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${VR.amber}%, #ffb020 ${VR.amber}% ${VR.red}%, #ff3b30 ${VR.red}%)`
            },
            "aria-hidden": "true"
          }), (0, Uu.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${iR}% + ${8*(1-iR/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, Uu.jsxs)("b", {
          children: [`${qR}%`, (0, Uu.jsx)("i", {
            className: Ct()("Baf2RxPendingDot", {
              On: GR
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function xw(RR) {
      let {
        status: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)(), yR = Ww(JR, JR.baf2RxTarget), tR = nw(JR).Nr, uR = GR("cryo" === tR ? `${bw}rxRateCryo` : `${bw}rxRateWater`, {
        rate: Vw(yR.coolPerS)
      }), ZR = GR(`${bw}rxChain`, {
        pct: String(JR.baf2RxTarget),
        out: Xi(yR.out),
        heat: String(Math.round(yR.settle)),
        coolant: uR
      }), qR = null !== yR.coolantSecs ? yR.coolantSecs >= 1 ? GR("cryo" === tR ? `${bw}rxThrottleCryoOut` : `${bw}rxThrottleWaterOut`, {
        time: Lu(GR, yR.coolantSecs)
      }) : GR("cryo" === tR ? `${bw}rxThrottleCryoDry` : `${bw}rxThrottleWaterDry`) : null;
      return (0, Uu.jsxs)("p", {
        className: "Baf2RxChain",
        children: [ZR, null !== qR ? (0, Uu.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", qR]
        }) : (0, Uu.jsxs)("span", {
          children: [" \xb7 ", GR(`${bw}rxChainPellets`, {
            amount: Mi(yR.pelletsPerMin)
          })]
        })]
      })
    }

    function Nw(RR) {
      let {
        view: JR,
        store: GR,
        explain: tR,
        explainOnce: uR
      } = RR;
      const {
        t: ZR
      } = (0, lt.A)(), {
        status: qR
      } = JR, [iR, fR] = (0, yR.useState)(!1), VR = vw(qR, wJ), wR = vw(qR, rJ), rR = !vw(qR, LJ), eR = qR.baf2RxHeat > 100;
      return (0, Uu.jsxs)(Uu.Fragment, {
        children: [(0, Uu.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, Uu.jsx)(Ow, {
            status: qR,
            pending: JR.throttlePending,
            store: GR,
            explain: tR
          }), (0, Uu.jsx)(ww, {
            on: wR,
            label: wR ? ZR(`${bw}rxOdLeft`, {
              time: Lu(ZR, qR.baf2RxOdLeft)
            }) : ZR(`${bw}rxOverdrive`),
            locked: rR,
            pending: 0 !== (JR.pendingFlags & rJ),
            toggle: () => {
              rR ? tR(`${bw}rxOverdriveTier`, {
                amount: String(KR(13))
              }) : wR ? GR.setFlag(rJ, !1) : JR.odConfirmed ? GR.setFlag(rJ, !0) : fR(!0)
            }
          }), VR || JR.startGuard ? (0, Uu.jsx)(aZ.r, {
            disabled: JR.busy.has("start") || JR.startGuard,
            onClick: () => {
              GR.tap("start", (() => {
                GR.setFlag(wJ, !1)
              }))
            },
            children: ZR(JR.startGuard ? `${bw}rxStarting` : `${bw}rxStart`)
          }) : (0, Uu.jsx)("span", {
            className: Ct()("Baf2RxScram", {
              Pulse: eR
            }),
            children: (0, Uu.jsx)(aZ.M, {
              onClick: () => {
                GR.shutDown()
              },
              children: ZR(`${bw}rxScram`)
            })
          })]
        }), (0, Uu.jsx)(xw, {
          status: qR
        }), iR && (0, Uu.jsx)(Zw, {
          id: "baf2RxOdTitle",
          title: `${bw}rxOdConfirmTitle`,
          body: `${bw}rxOdConfirmBody`,
          yes: `${bw}rxOdConfirm`,
          cancel: () => {
            fR(!1)
          },
          confirm: () => {
            fR(!1), GR.tap("odConfirm", (() => {
              GR.confirmOverdrive(), GR.setFlag(rJ, !0)
            })), uR(`${bw}rxWhy_overdrive`)
          }
        })]
      })
    }

    function Dw(RR) {
      let {
        view: JR,
        store: GR,
        keepSize: yR
      } = RR;
      const {
        t: tR
      } = (0, lt.A)(), {
        status: uR
      } = JR;
      return (0, Uu.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, Uu.jsx)(Kw, {
          kind: "reactor",
          dims: JR.dims,
          cap: uR.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: RR => {
            GR.resize(RR)
          }
        }), yR ? (0, Uu.jsx)(aZ.i, {
          onClick: yR,
          children: tR(`${bw}rxKeepSize`)
        }) : (0, Uu.jsxs)(Uu.Fragment, {
          children: [(0, Uu.jsx)(ww, {
            on: JR.guide,
            label: tR(`${bw}rxGuide`),
            toggle: () => {
              GR.toggleGuide()
            }
          }), vw(uR, UJ) && (0, Uu.jsx)(ww, {
            on: JR.starter,
            label: tR(`${bw}rxStarter`),
            toggle: () => {
              GR.toggleStarter()
            }
          }), (0, Uu.jsx)(Gw, {
            status: uR,
            store: GR,
            busy: JR.busy.has("fill")
          })]
        })]
      })
    }

    function Hw(RR) {
      let {
        need: JR,
        kind: GR = "reactor",
        explain: yR
      } = RR;
      const {
        t: tR
      } = (0, lt.A)(), uR = JR.length <= 3, ZR = JR.reduce(((RR, JR) => {
        let [, GR] = JR;
        return RR + GR
      }), 0);
      return (0, Uu.jsxs)("div", {
        className: Ct()("Baf2RxParts", {
          Compact: !uR
        }),
        onClick: () => {
          yR("battery" === GR ? `${bw}batWhy_store` : `${bw}rxShellHint`)
        },
        children: [ZR > 0 && (0, Uu.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === ZR ? tR(`${bw}rxBlocksOne`) : tR(`${bw}rxBlocks`, {
            blocks: String(ZR)
          })
        }), 0 === JR.length ? (0, Uu.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: tR("battery" === GR ? `${bw}batPartsDone` : `${bw}rxShellDone`)
        }) : ei(JR).map((RR => {
          let [JR, GR, yR] = RR;
          const ZR = function(RR) {
            const JR = Wi[RR];
            if (void 0 === JR) return null;
            const [GR, yR, tR] = ni[JR].colour.map((RR => Math.round(255 * RR)));
            return `rgb(${GR}, ${yR}, ${tR})`
          }(JR);
          return (0, Uu.jsxs)("span", {
            className: "Baf2RxChip",
            title: (0, ht.f)(tR, JR),
            children: [(0, Uu.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === ZR ? {
                visibility: "hidden"
              } : {
                background: ZR
              },
              title: tR(`${bw}rxShopGhost`)
            }), (0, Uu.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, Uu.jsx)(gt.b, {
                itemName: JR,
                amount: 0
              })
            }), (0, Uu.jsx)("span", {
              className: "Baf2RxChipName",
              children: uR ? `${GR} ${qR=(0,ht.f)(tR,JR),qR.replace(/^(Reactor|Battery) (?=\S)/,"")}` : GR
            }), yR >= GR ? (0, Uu.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, Uu.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: uR ? tR(`${bw}rxShopShort`, {
                count: String(GR - yR)
              }) : "\u2212" + (GR - yR)
            })]
          }, JR);
          var qR
        }))]
      })
    }
    const ow = "buildAFactory2Game:";

    function Pw(RR) {
      var JR, GR, tR, uR, ZR, qR, iR;
      let {
        store: fR,
        close: VR
      } = RR;
      const {
        t: KR
      } = (0, lt.A)(), wR = DZ(), rR = qw(fR), {
        explained: eR,
        explain: aR
      } = FK("baf2RxExplained"), LR = (0, yR.useCallback)(((RR, JR) => {
        aR(KR(RR, JR))
      }), [aR, KR]), nR = null === rR || void 0 === rR ? void 0 : rR.status, UR = !0 === (null === nR || void 0 === nR ? void 0 : nR.baf2BatReadOnly), WR = RR => {
        nR && wR.send(KJ(nR.baf2BatAt, RR))
      }, [AR, CR, XR] = null !== (JR = null === rR || void 0 === rR ? void 0 : rR.dims) && void 0 !== JR ? JR : [0, 0, 0], MR = Xi(null !== (GR = null === rR || void 0 === rR ? void 0 : rR.hK) && void 0 !== GR ? GR : 0), BR = !0 === (null === nR || void 0 === nR ? void 0 : nR.baf2BatFormed), lR = null !== (tR = null === nR || void 0 === nR ? void 0 : nR.baf2BatStored) && void 0 !== tR ? tR : 0, pR = Math.max(1, null !== (uR = null === nR || void 0 === nR ? void 0 : nR.baf2BatIslandCap) && void 0 !== uR ? uR : 1), gR = Math.min(100, 100 * lR / pR), bR = null === nR || void 0 === nR ? void 0 : nR.baf2BatNetPerS, vR = function(RR, JR, GR) {
        return GR > 0 && JR >= GR ? "full" : void 0 !== RR && RR >= .05 ? "charging" : void 0 !== RR && RR <= -.05 && JR > 0 ? "draining" : "steady"
      }(bR, lR, null !== (ZR = null === nR || void 0 === nR ? void 0 : nR.baf2BatIslandCap) && void 0 !== ZR ? ZR : 0), OR = null !== (qR = null === nR || void 0 === nR ? void 0 : nR.baf2BatMadePerS) && void 0 !== qR ? qR : 0, xR = null !== (iR = null === nR || void 0 === nR ? void 0 : nR.baf2BatUsedPerS) && void 0 !== iR ? iR : 0;
      let NR, DR = {},
        HR = "info";
      if (nR)
        if (BR) "charging" === vR ? (NR = `${ow}batLine_charging`, DR = {
          time: Lu(KR, (pR - lR) / Math.max(.05, null !== bR && void 0 !== bR ? bR : 0))
        }, HR = "ok") : "draining" === vR ? (NR = `${ow}batLine_draining`, DR = {
          time: Lu(KR, lR / Math.max(.05, -(null !== bR && void 0 !== bR ? bR : 0)))
        }, HR = "warn") : NR = "full" === vR ? `${ow}batLine_full` : lR <= 0 && xR > 0 ? `${ow}batLine_empty` : `${ow}batLine_steady`;
        else {
          var oR;
          const RR = lw({
            left: nR.baf2BatNeed.reduce(((RR, JR) => {
              let [, GR] = JR;
              return RR + GR
            }), 0),
            bad: nR.baf2BatBad,
            rods: 1,
            canFill: !0 === nR.baf2BatCanFill,
            melted: !1
          });
          NR = RR.key, DR = {
            count: String(null !== (oR = RR.params.count) && void 0 !== oR ? oR : 0)
          }, HR = RR.tone
        }
      else NR = `${ow}batLine_steady`;
      const cR = Math.max(OR, xR, 1);
      return (0, Uu.jsx)(eZ.e, {
        close: VR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Uu.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, Uu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Uu.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Uu.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Uu.jsx)(gt.b, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, Uu.jsxs)("div", {
                children: [(0, Uu.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: KR(`${ow}batTitle`)
                }), nR && (0, Uu.jsxs)("p", {
                  className: Ct()("Baf2RxSubtitle", {
                    good: BR && "charging" === vR,
                    warn: BR && "draining" === vR
                  }),
                  children: [AR, "\xd7", CR, "\xd7", XR, " \xb7 ", KR(BR ? `${ow}batState_${vR}` : `${ow}rxSubPlanShort`)]
                })]
              })]
            }), (0, Uu.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [nR && !UR && (0, Uu.jsx)(iw, {
                kind: "battery",
                cap: BR ? MR : void 0,
                busy: null === rR || void 0 === rR ? void 0 : rR.busy.has("apart"),
                apart: () => {
                  fR.tap("apart", (() => {
                    WR("apart")
                  }))
                }
              }), (0, Uu.jsx)(aZ.l, {
                onClick: VR
              })]
            })]
          }), rR && nR && (0, Uu.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, Uu.jsxs)("div", {
              className: Ct()("Baf2RxFlow Baf2BatFlow", {
                Plan: !BR
              }),
              children: [(0, Uu.jsx)(YK, {
                kind: "Power",
                label: KR(`${ow}batMade`),
                number: BR ? `\u26a1 ${Xi(OR)}/s` : "\u2014",
                note: KR(`${ow}batMadeNote`),
                share: BR ? OR / cR : void 0,
                onExplain: () => {
                  LR(`${ow}batWhy_made`)
                }
              }), (0, Uu.jsx)(kK, {
                kind: "Power",
                step: BR ? Cw(OR, cR) : 0,
                planned: !BR
              }), (0, Uu.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  LR(`${ow}batWhy_store`)
                },
                children: [(0, Uu.jsx)(QK, {
                  max: 100,
                  bands: [{
                    upTo: BR ? gR : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, Uu.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, Uu.jsx)("b", {
                    className: "Baf2BatStored",
                    children: BR ? KR(`${ow}batStoredOf`, {
                      amount: Xi(lR),
                      cap: Xi(nR.baf2BatIslandCap)
                    }) : KR(`${ow}batWillHold`, {
                      cap: MR
                    })
                  }), (0, Uu.jsx)("span", {
                    children: KR(`${ow}batAdds`, {
                      cap: MR
                    })
                  }), BR && (0, Uu.jsx)("small", {
                    children: KR(`${ow}batBreakNote`, {
                      cap: MR
                    })
                  })]
                })]
              }), (0, Uu.jsx)(kK, {
                kind: "Power",
                step: BR ? Cw(xR, cR) : 0,
                planned: !BR
              }), (0, Uu.jsx)(YK, {
                kind: "Power",
                label: KR(`${ow}batUsed`),
                number: BR ? `\u26a1 ${Xi(xR)}/s` : "\u2014",
                note: KR(`${ow}batUsedNote`),
                share: BR ? xR / cR : void 0,
                onExplain: () => {
                  LR(`${ow}batWhy_used`)
                }
              })]
            }), (0, Uu.jsx)(TK, {
              text: KR(NR, DR),
              tone: HR,
              explained: eR
            }), UR ? (0, Uu.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: KR(`${ow}rxNotYours`)
            }) : !BR && (0, Uu.jsxs)(Uu.Fragment, {
              children: [(0, Uu.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, Uu.jsx)(Kw, {
                  kind: "battery",
                  dims: rR.dims,
                  cap: nR.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: RR => {
                    fR.resize(RR)
                  }
                }), (0, Uu.jsx)(ww, {
                  on: rR.guide,
                  label: KR(`${ow}rxGuide`),
                  toggle: () => {
                    fR.toggleGuide()
                  }
                }), nR.baf2BatCanFill && (0, Uu.jsx)(aZ.n, {
                  disabled: !ai("battery", nR.baf2BatNeed) || rR.busy.has("fill"),
                  onClick: () => {
                    fR.tap("fill", (() => {
                      WR("fill")
                    }))
                  },
                  children: KR(`${ow}rxFill`)
                })]
              }), (0, Uu.jsx)(Hw, {
                need: nR.baf2BatNeed,
                kind: "battery",
                explain: LR
              })]
            })]
          })]
        })
      })
    }
    const Iw = "buildAFactory2Game:",
      mw = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function zw(RR, JR) {
      return RR === kq ? null : JR ? "#4a4440" : RR < Fq ? mw[RR - Qq] : RR === Fq ? "#3fd0f0" : RR === Tq ? "#2c3e4c" : "#55585e"
    }

    function Sw(RR) {
      let {
        inner: JR,
        looks: GR,
        layer: yR,
        setLayer: tR,
        glow: uR,
        melted: ZR,
        explain: qR
      } = RR;
      const {
        t: iR
      } = (0, lt.A)(), [fR, VR, KR] = JR, wR = Math.max(0, Math.min(VR - 1, yR)), rR = [];
      for (let aR = 0; aR < KR; aR++)
        for (let RR = 0; RR < fR; RR++) {
          var eR;
          const JR = null !== (eR = GR[(wR * KR + aR) * fR + RR]) && void 0 !== eR ? eR : kq,
            yR = zw(JR, ZR),
            tR = JR >= Qq && JR < Fq;
          rR.push(null === yR ? (0, Uu.jsx)("circle", {
            cx: RR + .5,
            cy: aR + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${RR},${aR}`) : (0, Uu.jsx)("rect", {
            x: RR + .06,
            y: aR + .06,
            width: .88,
            height: .88,
            fill: yR,
            opacity: tR && !ZR ? .5 + .5 * uR : 1,
            onClick: RR => {
              RR.stopPropagation();
              const GR = gw(JR);
              qR(GR.key, GR.params)
            }
          }, `${RR},${aR}`))
        }
      return (0, Uu.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, Uu.jsx)("svg", {
          className: Ct()("Baf2RxMapGrid", {
            Melted: ZR
          }),
          viewBox: `0 0 ${Math.max(1,fR)} ${Math.max(1,KR)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": iR(`${Iw}rxWhy_core`),
          onClick: () => {
            qR(`${Iw}rxWhy_core`, {})
          },
          children: rR
        }), VR > 1 && (0, Uu.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, Uu.jsx)("button", {
            type: "button",
            "aria-label": iR(`${Iw}rxLayerDown`),
            disabled: wR <= 0,
            onClick: () => {
              tR(wR - 1)
            },
            children: "\u25bc"
          }), (0, Uu.jsxs)("span", {
            children: [(0, Uu.jsx)("span", {
              className: "HideNarrow",
              children: iR(`${Iw}rxLayer`, {
                n: String(wR + 1),
                of: String(VR)
              })
            }), (0, Uu.jsx)("span", {
              className: "ShowNarrow",
              children: iR(`${Iw}rxLayerShort`, {
                n: String(wR + 1),
                of: String(VR)
              })
            })]
          }), (0, Uu.jsx)("button", {
            type: "button",
            "aria-label": iR(`${Iw}rxLayerUp`),
            disabled: wR >= VR - 1,
            onClick: () => {
              tR(wR + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const jw = "buildAFactory2Game:",
      dw = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Pq,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: fi,
        kind: "red"
      }],
      Ew = [50, Pq, 100];

    function Yw(RR) {
      let {
        stats: JR,
        t: GR,
        explain: yR
      } = RR;
      const tR = Ri(JR),
        uR = Math.max(1, JR.fuelHeat, JR.cooling, JR.size),
        ZR = [
          ["fuel", `${jw}rxBarRods`, JR.fuelHeat],
          ["cooling", `${jw}rxBarCooling`, JR.cooling],
          ["size", `${jw}rxBarSize`, JR.size]
        ];
      return (0, Uu.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          yR(`${jw}rxWhy_bars`)
        },
        children: [(0, Uu.jsx)("span", {
          className: "Baf2RxMostLine",
          children: GR(`${jw}rxMost`, {
            amount: Xi(Math.min(JR.fuelHeat, JR.cooling, JR.size))
          })
        }), (0, Uu.jsx)("span", {
          className: "Baf2RxMostBars",
          children: ZR.map((RR => {
            let [JR, yR, ZR] = RR;
            return (0, Uu.jsxs)("span", {
              className: Ct()("Baf2RxMostBar", JR, {
                Low: JR === tR
              }),
              children: [(0, Uu.jsx)("small", {
                children: GR(yR)
              }), (0, Uu.jsx)("i", {
                children: (0, Uu.jsx)("b", {
                  style: {
                    width: 100 * ZR / uR + "%"
                  }
                })
              })]
            }, JR)
          }))
        })]
      })
    }

    function kw(RR) {
      var JR;
      let {
        view: GR,
        heat: tR,
        settle: uR,
        settleLine: ZR,
        settleBad: qR,
        explain: iR
      } = RR;
      const {
        t: fR
      } = (0, lt.A)(), {
        status: VR
      } = GR, KR = VR.baf2RxAt.join(","), [wR, rR] = (0, yR.useState)((() => pw(GR.inner)));
      (0, yR.useEffect)((() => {
        rR(pw(GR.inner))
      }), [KR, GR.inner[1]]);
      const eR = null !== (JR = GR.plan) && void 0 !== JR ? JR : Ki(VR),
        aR = GR.plan ? GR.plan.powerPerUnit : VR.baf2RxStats[8],
        LR = null === tR ? null : "alarm" === (nR = ii(VR)) ? "red" : "hot" === nR ? "hot" : "warm" === nR ? "warm" : "cold";
      var nR;
      const UR = !VR.baf2RxFormed && function(RR, JR) {
          return 0 !== (RR.baf2RxFlags & JR)
        }(VR, eJ),
        WR = VR.baf2RxDamage,
        AR = VR.baf2RxDamageTrend;
      return (0, Uu.jsxs)("div", {
        className: Ct()("Baf2RxCore", null !== LR && void 0 !== LR ? LR : "plan"),
        children: [(0, Uu.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, Uu.jsx)(Sw, {
            inner: GR.inner,
            looks: GR.looks,
            layer: wR,
            setLayer: rR,
            glow: VR.baf2RxFormed ? VR.baf2RxThrottle / 100 : 1,
            melted: UR,
            explain: iR
          }), (0, Uu.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              iR(`${jw}rxWhy_heat`)
            },
            children: [null !== tR ? (0, Uu.jsxs)(Uu.Fragment, {
              children: [(0, Uu.jsx)("b", {
                children: fR(`${jw}rxHeatPct`, {
                  pct: String(tR)
                })
              }), (0, Uu.jsx)("span", {
                className: Ct()("Baf2RxBand", LR),
                children: fR(`${jw}rxBand_${LR}`)
              })]
            }) : (0, Uu.jsx)("b", {
              children: fR(`${jw}rxHeat`)
            }), null !== ZR && (0, Uu.jsx)("span", {
              className: Ct()("Baf2RxSettle", {
                Bad: qR
              }),
              children: ZR
            }), WR >= 1 && (0, Uu.jsxs)("span", {
              className: Ct()("Baf2RxDamage", AR),
              children: [fR(`${jw}rxDamageLine`, {
                pct: String(WR)
              }), " \xb7 ", fR(`${jw}rxDamage_${AR}`), (0, Uu.jsx)("i", {
                children: (0, Uu.jsx)("b", {
                  style: {
                    width: `${Math.min(100,WR)}%`
                  }
                })
              })]
            })]
          }), (0, Uu.jsx)(QK, {
            max: fi,
            bands: dw,
            ticks: Ew,
            now: tR,
            settle: uR,
            settleTone: qR ? "bad" : null,
            onExplain: () => {
              iR(`${jw}rxWhy_heat`)
            }
          })]
        }), (0, Uu.jsx)(Yw, {
          stats: eR,
          t: fR,
          explain: iR
        }), aR > 0 && (0, Uu.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            iR(`${jw}rxWhy_perPellet`)
          },
          children: fR(`${jw}rxPerPellet`, {
            amount: Xi(aR)
          })
        })]
      })
    }

    function Qw(RR, JR) {
      var GR;
      if (!RR.baf2RxStore) return {
        note: JR(`${jw}rxUpTo`, {
          amount: Xi(RR.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [yR, tR] = RR.baf2RxStore, uR = tR > 0 ? yR / tR : 0, ZR = String(Math.floor(100 * uR)), qR = null !== (GR = RR.baf2RxStoreNetPerS) && void 0 !== GR ? GR : 0, iR = function(RR) {
        var JR, GR;
        const [yR, tR] = null !== (JR = RR.baf2RxStore) && void 0 !== JR ? JR : [0, 0], uR = null !== (GR = RR.baf2RxStoreNetPerS) && void 0 !== GR ? GR : 0;
        return tR > 0 && yR >= tR - 1 ? "running" === RR.baf2RxState ? `${rw}rxStoreFull` : `${rw}rxStoreFullOnly` : uR > .05 ? `${rw}rxStoreLine` : uR < -.05 ? "running" === RR.baf2RxState ? `${rw}rxStoreUsesMore` : `${rw}rxStoreDraining` : `${rw}rxStorePct`
      }(RR);
      return {
        note: JR(iR, iR === `${jw}rxStoreLine` ? {
          pct: ZR,
          time: Lu(JR, (tR - yR) / qR)
        } : {
          pct: ZR
        }),
        share: uR
      }
    }

    function Fw(RR) {
      let {
        view: JR,
        explain: GR,
        preview: yR
      } = RR;
      const {
        t: tR
      } = (0, lt.A)(), {
        status: uR
      } = JR, ZR = jq(Eq(...JR.dims)), qR = Aw(uR), iR = Math.min(Math.round(uR.baf2RxFuel), ZR.fuel), fR = "running" === uR.baf2RxState, VR = fR ? Cw(uR.baf2RxOut, uR.baf2RxMaxNow) : 0, KR = function(RR, JR, GR) {
        const yR = nw(RR),
          tR = "cryo" === yR.Nr,
          uR = GR ? GR.coolantSecs : yR.pct >= 100 && RR.baf2RxOut >= 1 ? Ww(RR, RR.baf2RxThrottle).coolantSecs : null;
        let ZR, qR = !1;
        if (yR.pct < 100) {
          const GR = 1 === yR.makersShort,
            uR = !tR && RR.baf2RxCryoOpen ? "OrCryo" : "";
          ZR = yR.makersShort > 0 ? JR(tR ? `${jw}rxCryoAddMixer${GR?"":"s"}` : `${jw}rxWaterAddCondenser${GR?"":"s"}${uR}`, {
            count: String(yR.makersShort)
          }) : JR(`${jw}rxWaterNeeds`, {
            rate: Vw(yR.needPerS)
          })
        } else if (null !== uR) ZR = JR(`${jw}rxWaterRunsOut`, {
          time: Lu(JR, uR)
        });
        else if (yR.waterBeside > 0) ZR = JR(`${jw}rxCryoPlusWater`, {
          rate: Vw(yR.waterBeside)
        });
        else {
          const RR = function(RR) {
            return RR.inPerS <= 0 ? "rxWaterNoSupply" : RR.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(yR);
          qR = "rxWaterNoSupply" === RR, ZR = JR(`${jw}${RR}`, {
            amount: Xi(yR.stored)
          })
        }
        return {
          kind: tR ? "Cryo" : "Water",
          label: JR(tR ? `${jw}rxCryo` : `${jw}rxWater`),
          number: `${Vw(yR.usePerS)}/s`,
          preview: GR ? `${Vw(GR.coolPerS)}/s` : null,
          note: ZR,
          tone: "noWater" === RR.baf2RxState ? "danger" : qR ? "warn" : (iR = yR.pct, fR = uR, iR < 100 ? "danger" : null === fR ? null : fR < 300 ? "danger" : "warn"),
          share: yR.pct / 100,
          why: tR ? `${jw}rxWhy_cryo` : `${jw}rxWhy_water`,
          short: yR.pct < 100
        };
        var iR, fR
      }(uR, tR, yR), wR = Li(uR, ZR.waste, qR), rR = Qw(uR, tR), eR = Ww(uR, uR.baf2RxTarget), aR = fR && Math.abs(eR.settle - uR.baf2RxHeat) >= 3, LR = yR ? yR.pelletsPerMin / 60 : null;
      return (0, Uu.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, Uu.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Uu.jsx)(YK, {
            kind: "Fuel",
            label: tR(`${jw}rxFuel`),
            number: String(iR),
            preview: null !== LR && LR > 0 && uR.baf2RxFuel > 0 ? Lu(tR, uR.baf2RxFuel / LR) : null,
            note: uR.baf2RxFuel <= 0 ? tR(`${jw}rxFuelEmpty`) : qR > 0 ? tR(`${jw}rxFuelLeft`, {
              time: Lu(tR, uR.baf2RxFuel / qR)
            }) : tR(1 === iR ? `${jw}rxFuelPellet` : `${jw}rxFuelPellets`),
            tone: "noFuel" === uR.baf2RxState ? "danger" : uR.baf2RxFuel < 2 ? "warn" : null,
            share: uR.baf2RxFuel / ZR.fuel,
            onExplain: () => {
              GR(`${jw}rxWhy_fuel`)
            }
          }), (0, Uu.jsx)(YK, {
            kind: KR.kind,
            label: KR.label,
            number: KR.number,
            preview: KR.preview,
            note: KR.note,
            tone: KR.tone,
            share: KR.share,
            onExplain: () => {
              GR(KR.why)
            }
          })]
        }), (0, Uu.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Uu.jsx)(kK, {
            kind: "Fuel",
            step: VR,
            short: "noFuel" === uR.baf2RxState
          }), (0, Uu.jsx)(kK, {
            kind: KR.kind,
            step: VR,
            short: KR.short || "noWater" === uR.baf2RxState
          })]
        }), (0, Uu.jsx)(kw, {
          view: JR,
          heat: uR.baf2RxHeat,
          settle: Math.min(fi, eR.settle),
          settleLine: aR ? tR(`${jw}rxHeatSettles`, {
            pct: String(Math.round(eR.settle)),
            time: Lu(tR, eR.settleS)
          }) : null,
          settleBad: eR.settle > 100,
          explain: GR
        }), (0, Uu.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Uu.jsx)(kK, {
            kind: "Power",
            step: VR
          }), (0, Uu.jsx)(kK, {
            kind: "Waste",
            step: fR && uR.baf2RxFuel - uR.baf2RxPu > 0 ? VR : 0,
            short: wR.full
          })]
        }), (0, Uu.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Uu.jsx)(YK, {
            kind: "Power",
            label: tR(`${jw}rxPowerOut`),
            number: `\u26a1 ${Xi(uR.baf2RxOut)}/s`,
            preview: yR ? Xi(yR.out) : null,
            note: rR.note,
            share: rR.share,
            onExplain: () => {
              GR(`${jw}rxWhy_power`)
            }
          }), (0, Uu.jsx)(YK, {
            kind: "Waste",
            label: tR(`${jw}rxWaste`),
            number: `${Math.floor(uR.baf2RxWaste)}/${ZR.waste}`,
            note: wR.full ? tR(`${jw}rxWasteFull`) : null !== wR.fullInS ? tR(`${jw}rxWasteFullIn`, {
              time: Lu(tR, wR.fullInS)
            }) : tR(`${jw}rxWasteSpent`),
            tone: "wasteFull" === uR.baf2RxState ? "danger" : wR.full ? "warn" : null,
            share: uR.baf2RxWaste / ZR.waste,
            onExplain: () => {
              GR(`${jw}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function Tw(RR) {
      let {
        view: JR,
        explain: GR
      } = RR;
      const {
        t: yR
      } = (0, lt.A)(), tR = JR.plan;
      if (!tR) return null;
      const uR = tR.fuelHeat <= 0 ? null : tR.cooling > 0 ? Math.min(fi, 100 * tR.fuelHeat / tR.cooling) : fi,
        ZR = yR(`${jw}rxPlanAtFull`);
      return (0, Uu.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, Uu.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Uu.jsx)(YK, {
            kind: "Fuel",
            label: yR(`${jw}rxFuel`),
            number: yR(`${jw}rxPlanPerMin`, {
              amount: Mi(tR.pelletsPerMin)
            }),
            note: yR(`${jw}rxPlanPellets`),
            onExplain: () => {
              GR(`${jw}rxWhy_fuel`)
            }
          }), (0, Uu.jsx)(YK, {
            kind: "Water",
            label: yR(`${jw}rxWater`),
            number: `${Vw(tR.waterPerS)}/s`,
            note: JR.status.baf2RxCryoOpen && tR.waterPerS > 0 ? yR(`${jw}rxPlanOrCryo`, {
              rate: Vw(ui(tR, sR.c) * sR.g)
            }) : ZR,
            onExplain: () => {
              GR(`${jw}rxWhy_water`)
            }
          })]
        }), (0, Uu.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Uu.jsx)(kK, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, Uu.jsx)(kK, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, Uu.jsx)(kw, {
          view: JR,
          heat: null,
          settle: uR,
          settleLine: null === uR ? null : yR(`${jw}rxPlanHeat`, {
            pct: String(Math.round(uR))
          }),
          settleBad: null !== uR && uR > 100,
          explain: GR
        }), (0, Uu.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Uu.jsx)(kK, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, Uu.jsx)(kK, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, Uu.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Uu.jsx)(YK, {
            kind: "Power",
            label: yR(`${jw}rxPowerOut`),
            number: `\u26a1 ${Xi(tR.max)}/s`,
            note: ZR,
            onExplain: () => {
              GR(`${jw}rxWhy_power`)
            }
          }), (0, Uu.jsx)(YK, {
            kind: "Waste",
            label: yR(`${jw}rxWaste`),
            number: yR(`${jw}rxPlanPerMin`, {
              amount: Mi(tR.pelletsPerMin)
            }),
            note: yR(`${jw}rxWasteSpent`),
            onExplain: () => {
              GR(`${jw}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const sw = "buildAFactory2Game:",
      hw = {
        key: `${sw}rxWaiting`,
        params: {},
        tone: "info"
      };

    function Rr(RR, JR) {
      return 0 !== (RR.baf2RxFlags & JR)
    }

    function Jr(RR) {
      var JR, GR;
      let {
        store: tR,
        close: uR
      } = RR;
      const {
        t: ZR
      } = (0, lt.A)(), qR = qw(tR), {
        explained: iR,
        hinting: fR,
        explain: VR,
        explainOnce: KR
      } = FK("baf2RxExplained"), wR = (0, yR.useCallback)(((RR, JR) => {
        VR(ZR(RR, JR))
      }), [VR, ZR]), rR = (0, yR.useCallback)(((RR, JR) => {
        KR(RR, ZR(RR, JR))
      }), [KR, ZR]), [eR, aR] = (0, yR.useState)(!1), [LR, nR] = (0, yR.useState)(!1), UR = null === qR || void 0 === qR ? void 0 : qR.status, WR = null === UR || void 0 === UR ? void 0 : UR.baf2RxAt.join(","), AR = !0 === (null === UR || void 0 === UR ? void 0 : UR.baf2RxFormed);
      (0, yR.useEffect)((() => {
        nR(!1), aR(!1)
      }), [WR, AR]), (0, yR.useEffect)((() => (tR.opened(), () => {
        tR.closed()
      })), [tR]);
      const CR = void 0 !== UR && Rr(UR, nJ),
        XR = UR ? AR ? ii(UR) : null !== qR && void 0 !== qR && qR.plan ? function(RR, JR) {
          if (RR <= 0) return "off";
          if (JR <= 0) return "alarm";
          const GR = 100 * RR / JR;
          return GR < 50 ? "calm" : GR < Ji ? "warm" : GR <= 100 ? "hot" : "alarm"
        }(qR.plan.fuelHeat, qR.plan.cooling) : "off" : "off",
        MR = UR ? Vi(UR) : null,
        BR = qR ? qR.waiting ? hw : AR ? Bw(qR.status) : function(RR) {
          var JR, GR;
          const {
            status: yR
          } = RR;
          return lw({
            left: yR.baf2RxNeed.reduce(((RR, JR) => {
              let [, GR] = JR;
              return RR + GR
            }), 0),
            bad: yR.baf2RxBad,
            rods: null !== (JR = null === (GR = RR.plan) || void 0 === GR ? void 0 : GR.rods) && void 0 !== JR ? JR : 0,
            canFill: Rr(yR, aJ),
            melted: Rr(yR, eJ),
            idle: RR.looks.reduce(((RR, JR) => RR + (JR === Tq ? 1 : 0)), 0)
          })
        }(qR) : null,
        lR = fR && null !== BR && ("ok" === BR.tone || "info" === BR.tone),
        pR = UR ? function(RR) {
          const JR = 0 !== (RR.baf2RxFlags & wJ),
            GR = RR.baf2RxHeat < mq;
          return 0 !== (RR.baf2RxFlags & eJ) || GR && (JR || !RR.baf2RxFormed) ? null : RR.baf2RxFormed && !JR ? {
            key: `${qi}rxApartScram`,
            params: {}
          } : {
            key: `${qi}rxApartCooling`,
            params: {
              pct: String(mq)
            }
          }
        }(UR) : null,
        [gR, bR, vR] = null !== (JR = null === qR || void 0 === qR ? void 0 : qR.dims) && void 0 !== JR ? JR : [0, 0, 0],
        OR = `${gR}\xd7${bR}\xd7${vR}`;
      return (0, Uu.jsx)(eZ.e, {
        close: uR,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Uu.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, Uu.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Uu.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Uu.jsx)(fw, {
                mood: XR
              }), (0, Uu.jsxs)("div", {
                children: [(0, Uu.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: ZR(`${sw}rxTitle`)
                }), qR && (0, Uu.jsxs)("p", {
                  className: Ct()("Baf2RxSubtitle", AR && (null === MR || void 0 === MR ? void 0 : MR.tone)),
                  children: [AR && !CR ? (0, Uu.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": ZR(`${sw}rxChangeSize`),
                    onClick: () => {
                      if (!UR) return;
                      const RR = Rr(UR, wJ);
                      var JR;
                      (JR = {
                        scram: RR,
                        heat: UR.baf2RxHeat
                      }).scram && JR.heat < mq ? aR(!0) : wR(RR ? `${sw}rxResizeCooling` : `${sw}rxResizeHot`, {
                        pct: String(mq)
                      })
                    },
                    children: [OR, " \u270e"]
                  }) : OR, " \xb7 ", ZR(AR ? null !== (GR = null === MR || void 0 === MR ? void 0 : MR.label) && void 0 !== GR ? GR : `${sw}rxState_running` : `${sw}rxSubPlanShort`)]
                })]
              })]
            }), (0, Uu.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [qR && !CR && (0, Uu.jsx)(iw, {
                kind: "reactor",
                busy: qR.busy.has("apart"),
                whyNot: pR ? () => {
                  wR(pR.key, pR.params)
                } : null,
                apart: () => {
                  tR.tap("apart", (() => {
                    tR.send("apart")
                  }))
                }
              }), (0, Uu.jsx)(aZ.l, {
                onClick: uR
              })]
            })]
          }), qR && BR && (0, Uu.jsxs)("div", {
            className: "Baf2RxBody",
            children: [AR ? (0, Uu.jsx)(Fw, {
              view: qR,
              explain: wR,
              preview: Uw(qR.status)
            }) : (0, Uu.jsx)(Tw, {
              view: qR,
              explain: wR
            }), (0, Uu.jsx)(TK, {
              text: lR ? `${Xw(ZR,BR)} ${ZR(`${sw}rxTapHint`)}` : Xw(ZR, BR),
              tone: BR.tone,
              explained: iR
            }), CR ? (0, Uu.jsxs)(Uu.Fragment, {
              children: [(0, Uu.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: ZR(`${sw}rxNotYours`)
              }), (0, Uu.jsx)(yw, {
                status: qR.status,
                store: tR,
                readOnly: !0
              })]
            }) : AR && !LR ? (0, Uu.jsxs)(Uu.Fragment, {
              children: [(0, Uu.jsx)(Nw, {
                view: qR,
                store: tR,
                explain: wR,
                explainOnce: rR
              }), void 0 !== qR.status.baf2RxLayout && Rw(qR.status) && (0, Uu.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, Uu.jsx)(yw, {
                  status: qR.status,
                  store: tR,
                  readOnly: !1,
                  bare: !0
                }), (0, Uu.jsx)(Gw, {
                  status: qR.status,
                  store: tR,
                  busy: qR.busy.has("fill")
                })]
              })]
            }) : (0, Uu.jsxs)(Uu.Fragment, {
              children: [(0, Uu.jsx)(Dw, {
                view: qR,
                store: tR,
                keepSize: AR ? () => {
                  nR(!1)
                } : void 0
              }), ri(qR.dims, qR.status.baf2RxDims) && (0, Uu.jsx)(Hw, {
                need: qR.status.baf2RxNeed,
                explain: wR
              }), (0, Uu.jsx)(yw, {
                status: qR.status,
                store: tR,
                readOnly: !1
              })]
            }), eR && (0, Uu.jsx)(Zw, {
              id: "baf2ResizeTitle",
              title: `${sw}rxResizeConfirmTitle`,
              body: `${sw}rxResizeConfirmBody`,
              yes: `${sw}rxChangeSize`,
              cancel: () => {
                aR(!1)
              },
              confirm: () => {
                aR(!1), nR(!0)
              }
            })]
          })]
        })
      })
    }
    class Gr {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(RR) {
        this.view = RR;
        for (const JR of this.listeners) JR()
      }
      get() {
        return this.view
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
    }

    function yr(RR) {
      let {
        commands: JR,
        store: GR,
        power: tR,
        water: uR,
        reactor: ZR,
        battery: qR,
        collider: iR,
        terminal: fR,
        quests: VR,
        tutorial: KR,
        close: wR,
        leave: rR,
        askIslands: eR,
        showCore: aR,
        openSocial: LR
      } = RR;
      const {
        userContext: nR
      } = (0, pq.d)(), UR = lq.featureFlags.useSocialFeatures && nR.isLoggedIn(), [WR, AR] = (0, yR.useState)((() => GR.get()));
      (0, yR.useEffect)((() => GR.subscribe((() => {
        AR(GR.get())
      }))), [GR]);
      const CR = "islands" === (null === WR || void 0 === WR ? void 0 : WR.kind) ? WR.backToCore : void 0;
      return (0, Uu.jsxs)(NZ.Provider, {
        value: JR,
        children: ["core" === (null === WR || void 0 === WR ? void 0 : WR.kind) && (0, Uu.jsx)(wK, {
          view: WR.core,
          close: wR,
          askIslands: eR
        }), "dropMap" === (null === WR || void 0 === WR ? void 0 : WR.kind) && (0, Uu.jsx)(LK, {
          message: WR.dropMap,
          quests: VR,
          close: wR,
          leave: rR
        }), "islands" === (null === WR || void 0 === WR ? void 0 : WR.kind) && (0, Uu.jsx)(DK, {
          message: WR.islands,
          arrivedAtMs: WR.arrivedAtMs,
          close: CR ? () => {
            aR(CR)
          } : wR,
          leave: rR,
          openSocial: UR ? LR : null
        }), "quests" === (null === WR || void 0 === WR ? void 0 : WR.kind) && (0, Uu.jsx)(OV, {
          store: VR,
          tutorial: KR,
          close: wR
        }), "transfer" === (null === WR || void 0 === WR ? void 0 : WR.kind) && (0, Uu.jsx)(hf, {
          message: WR.transfer,
          arrivedAtMs: WR.arrivedAtMs,
          close: wR,
          leave: rR
        }), "power" === (null === WR || void 0 === WR ? void 0 : WR.kind) && (0, Uu.jsx)(MZ, {
          store: tR,
          close: wR
        }), "water" === (null === WR || void 0 === WR ? void 0 : WR.kind) && (0, Uu.jsx)(iq, {
          store: uR,
          close: wR
        }), "reactor" === (null === WR || void 0 === WR ? void 0 : WR.kind) && (0, Uu.jsx)(Jr, {
          store: ZR,
          close: wR
        }), "battery" === (null === WR || void 0 === WR ? void 0 : WR.kind) && (0, Uu.jsx)(Pw, {
          store: qR,
          close: wR
        }), "collider" === (null === WR || void 0 === WR ? void 0 : WR.kind) && (0, Uu.jsx)(wf, {
          store: iR,
          close: wR
        }), "terminal" === (null === WR || void 0 === WR ? void 0 : WR.kind) && (0, Uu.jsx)(EK, {
          store: fR,
          close: wR,
          send: RR => {
            JR.send(RR)
          }
        })]
      })
    }
    var tr = GR(39672);

    function ur(RR, JR) {
      return RR.distSq - JR.distSq
    }
    class Zr {
      constructor() {
        this.list = [], this.pool = []
      }
      add(RR, JR, GR, yR) {
        let tR = this.pool[this.list.length];
        tR || (tR = {
          x: 0,
          y: 0,
          distSq: 0,
          element: JR,
          liftRem: GR,
          dot: yR
        }, this.pool.push(tR)), tR.x = RR.x, tR.y = RR.y, tR.distSq = RR.distSq, tR.element = JR, tR.liftRem = GR, tR.dot = yR, this.list.push(tR)
      }
    }
    class qr {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = RR, this.sizes = new WeakMap, this.observer = new ResizeObserver((RR => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const JR of RR) {
            const RR = JR.borderBoxSize[0];
            "dot" !== JR.target.dataset.crowded && 0 !== RR.inlineSize && 0 !== RR.blockSize && this.sizes.set(JR.target, {
              width: RR.inlineSize,
              height: RR.blockSize
            })
          }
        })), this.remPx = 16, this.tK = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.iW = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.iW)
      }
      observe(RR) {
        this.observer.observe(RR)
      }
      unobserve(RR) {
        this.observer.unobserve(RR)
      }
      run(RR) {
        const JR = RR.list;
        JR.sort(ur);
        const GR = this.pxPerVw,
          yR = this.pxPerVh;
        this.tK.length = 0, this.hud && this.tK.push(...this.hud.boxes(performance.now()));
        for (const uR of JR) {
          var tR;
          const RR = this.sizes.get(uR.element);
          let JR = "no";
          if (RR && RR.width > 0) {
            const tR = uR.x * GR,
              ZR = uR.y * yR - uR.liftRem * this.remPx;
            this.fit(tR, ZR, RR.width, RR.height) || (JR = uR.dot && this.fit(tR, ZR, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (tR = uR.element.dataset.crowded) && void 0 !== tR ? tR : "no") !== JR && ("no" === JR ? delete uR.element.dataset.crowded : uR.element.dataset.crowded = JR), "hidden" !== JR && (0, tr.d)(uR.element, uR.x, uR.y)
        }
        JR.length = 0
      }
      fit(RR, JR, GR, yR) {
        const tR = RR - GR / 2,
          uR = RR + GR / 2,
          ZR = JR - yR,
          qR = this.tK;
        for (let iR = 0; iR < qR.length; iR += 4)
          if (tR < qR[iR + 1] - 2 && uR > qR[iR] + 2 && ZR < qR[iR + 3] - 2 && JR > qR[iR + 2] + 2) return !1;
        return qR.push(tR, uR, ZR, JR), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.iW)
      }
    }
    const ir = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class fr {
      constructor() {
        this.cards = ir.map((RR => document.getElementsByClassName(RR))), this.watched = ir.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(RR) {
        RR - this.refreshedAt > 1e3 && (this.refreshedAt = RR, this.stale = !0);
        for (let GR = 0; GR < this.cards.length; GR++) {
          var JR;
          const RR = null !== (JR = this.cards[GR][0]) && void 0 !== JR ? JR : null;
          RR !== this.watched[GR] && this.watch(GR, RR)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let RR = 0; RR < this.watched.length; RR++) this.watch(RR, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const RR = this.list;
        RR.length = 0;
        for (const JR of this.watched) {
          if (!JR || JR.closest(".NoRoom")) continue;
          const GR = JR.getBoundingClientRect();
          let yR = GR.top,
            tR = GR.bottom;
          if (JR === this.watched[0] && this.hud) {
            const RR = this.hud.getBoundingClientRect();
            yR = Math.max(yR, RR.top), tR = Math.min(tR, RR.bottom)
          }
          GR.width > 0 && tR > yR && RR.push(GR.left, GR.right, yR, tR)
        }
      }
      watch(RR, JR) {
        const GR = this.watched[RR];
        var yR, tR;
        (GR && this.sizes.unobserve(GR), this.watched[RR] = JR, this.stale = !0, JR && this.sizes.observe(JR), 0 === RR) && (null === (yR = this.hud) || void 0 === yR || yR.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (tR = null === JR || void 0 === JR ? void 0 : JR.closest(".Baf2QuestHud")) && void 0 !== tR ? tR : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var Vr = GR(39679);
    class Kr {
      constructor(RR) {
        this.onElement = RR, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(RR) {
        const JR = [];
        for (let GR = 0; GR + 4 < RR.length; GR += 5) {
          const yR = [RR[GR], RR[GR + 1], RR[GR + 2]];
          JR.push({
            key: yR.join(","),
            pos: yR,
            status: Jt[RR[GR + 3]],
            kind: gJ[RR[GR + 4]]
          })
        }
        this.markers = JR, this.keys = new Set(JR.map((RR => {
          let {
            key: JR
          } = RR;
          return JR
        }))), this.notify()
      }
      covers(RR) {
        return this.keys.has(RR)
      }
      get() {
        return this.markers
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      bind(RR) {
        let JR = this.refs.get(RR);
        return JR || (JR = JR => {
          const GR = this.elements.get(RR);
          var yR, tR;
          GR && (null === (yR = this.onElement) || void 0 === yR || yR.call(this, GR, !1));
          JR ? (this.elements.set(RR, JR), null === (tR = this.onElement) || void 0 === tR || tR.call(this, JR, !0)) : (this.elements.delete(RR), this.refs.delete(RR))
        }, this.refs.set(RR, JR)), JR
      }
      onAfterRender(RR, JR, GR) {
        for (const yR of this.markers) {
          const tR = this.elements.get(yR.key);
          if (!tR) continue;
          const uR = (0, Vr.d)(tR, RR, JR, yR.pos, 1.05, 24);
          uR && GR.add(uR, tR, .45, !0)
        }
      }
      notify() {
        for (const RR of this.listeners) RR()
      }
    }
    const wr = {
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
    const rr = (0, yR.memo)((function(RR) {
        let {
          status: JR,
          kind: GR,
          bindRef: yR
        } = RR;
        const {
          t: tR
        } = (0, lt.A)(), uR = function(RR, JR) {
          var GR;
          if ("noFuel" === RR) {
            var yR, tR;
            const RR = null === (yR = DJ[JR]) || void 0 === yR || null === (tR = yR.fuels) || void 0 === tR ? void 0 : tR.find((RR => yG.includes(RR)));
            return null !== RR && void 0 !== RR ? RR : wr.noFuel
          }
          return void 0 !== (null === (GR = DJ[JR]) || void 0 === GR ? void 0 : GR.cryoMade) ? "noOutlet" === RR ? "Fluid Pipe" : "noInput" === RR ? "Biomass" : wr[RR] : wr[RR]
        }(JR, GR);
        return (0, Uu.jsxs)("div", {
          className: Ct()("Baf2StallMarker", JR),
          ref: yR,
          hidden: !0,
          children: [uR && (0, Uu.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, Uu.jsx)(gt.b, {
              itemName: uR,
              amount: 0
            })
          }), (0, Uu.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === JR ? "?" : "!"
          }), (0, Uu.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: tR(`buildAFactory2Game:stallTag_${JR}`)
          })]
        })
      })),
      er = (0, yR.memo)((function(RR) {
        let {
          controller: JR
        } = RR;
        const [GR, tR] = (0, yR.useState)((() => JR.get()));
        return (0, yR.useEffect)((() => (tR(JR.get()), JR.subscribe((() => {
          tR(JR.get())
        })))), [JR]), (0, Uu.jsx)("div", {
          className: "Baf2StallMarkers",
          children: GR.map((RR => (0, Uu.jsx)(rr, {
            status: RR.status,
            kind: RR.kind,
            bindRef: JR.bind(RR.key)
          }, RR.key)))
        })
      })),
      ar = aG.k + 150;
    class Lr {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(RR, JR) {
        const GR = JR - RR;
        null === this.offset || GR < this.offset ? this.offset = GR : this.offset = Math.min(GR, this.offset + .02 * (JR - this.sampledAt)), this.sampledAt = JR
      }
      toLocal(RR) {
        var JR;
        return RR + (null !== (JR = this.offset) && void 0 !== JR ? JR : 0) + ar
      }
    }
    var nr = GR(39686);
    const Ur = 15 * Math.PI / 180,
      Wr = Math.SQRT2,
      Ar = [4, 2];

    function Cr(RR, JR) {
      const GR = [1 / 0, 1 / 0, 1 / 0],
        yR = [-1 / 0, -1 / 0, -1 / 0];
      for (const iR of RR)
        for (let RR = 0; RR < 3; RR++) GR[RR] = Math.min(GR[RR], iR[RR]), yR[RR] = Math.max(yR[RR], iR[RR]);
      const tR = (GR[0] + yR[0]) / 2,
        uR = (GR[1] + yR[1]) / 2,
        ZR = (GR[2] + yR[2]) / 2;
      let qR = 0;
      for (const iR of RR) qR = Math.max(qR, Math.hypot(iR[0] - tR, iR[1] - uR, iR[2] - ZR));
      return {
        x: tR,
        y: uR,
        z: ZR,
        r: qR + JR
      }
    }

    function Xr(RR, JR, GR) {
      const yR = JR.x - RR.x,
        tR = JR.y - RR.y,
        uR = JR.z - RR.z,
        ZR = Math.sqrt(yR * yR + tR * tR + uR * uR);
      if (ZR <= JR.r + 8) return 1;
      const qR = JR.r / ZR,
        iR = Math.sqrt(1 - qR * qR),
        fR = iR < -RR.cosHalf,
        VR = (yR * RR.dx + tR * RR.dy + uR * RR.dz) / ZR;
      if (!fR && VR < RR.cosHalf * iR - RR.sinHalf * qR) return 0;
      const KR = GR * Wr * RR.frameMs * RR.pxPerBlock / (ZR - JR.r);
      for (let wR = 0; wR < Ar.length; wR++)
        if (KR * Ar[wR] <= 1) return Ar[wR];
      return 1
    }

    function Mr(RR, JR) {
      return {
        name: RR,
        at: JR,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Br = [0, 0, 0];

    function lr(RR, JR, GR) {
      let [, yR, tR, uR, ZR, qR] = JR;
      const iR = aG.g * (null !== ZR && void 0 !== ZR ? ZR : 1),
        fR = [];
      for (let rR = 0; rR < yR.length; rR += 3) fR.push([yR[rR] + .5, yR[rR + 1] + .65, yR[rR + 2] + .5]);
      const VR = [];
      for (let rR = 0; rR < fR.length - 1; rR++) {
        const [RR, JR] = [fR[rR], fR[rR + 1]];
        VR.push([(RR[0] + JR[0]) / 2, (RR[1] + JR[1]) / 2, (RR[2] + JR[2]) / 2])
      }
      const KR = fR.slice(1, -1),
        wR = new Uint8Array(KR.length);
      for (const rR of null !== qR && void 0 !== qR ? qR : []) wR[rR >> 1] |= 1 & rR ? 2 : 1;
      return {
        island: RR,
        length: KR.length,
        loop: uR,
        cellsPerMs: iR,
        edges: VR,
        pa: KR,
        bounds: Cr([...VR, ...KR], .3),
        changed: !0,
        culled: !1,
        hide: wR,
        items: tR.map((RR => {
          let [JR, yR] = RR;
          return Mr(JR, (0, aG.B)(JR, yR, GR, iR).at)
        }))
      }
    }

    function pr(RR, JR) {
      const {
        items: GR
      } = RR;
      if (0 === GR.length) return;
      const yR = RR.length / RR.cellsPerMs,
        tR = Math.floor((JR - GR[0].at) / yR) - 1;
      if (tR > 0)
        for (const uR of GR) uR.at += tR * yR
    }

    function gr(RR, JR) {
      const GR = Math.min(Math.floor(JR), RR.length - 1),
        yR = RR.hide[GR];
      return 0 !== yR && 0 !== (yR & (JR - GR < .5 ? 1 : 2))
    }

    function br(RR, JR) {
      const GR = Math.min(Math.floor(JR), RR.length - 1),
        yR = JR - GR,
        tR = yR < .5,
        uR = tR ? RR.edges[GR] : RR.pa[GR],
        ZR = tR ? RR.pa[GR] : RR.edges[GR + 1],
        qR = tR ? 2 * yR : 2 * yR - 1;
      Br[0] = uR[0] + (ZR[0] - uR[0]) * qR, Br[1] = uR[1] + (ZR[1] - uR[1]) * qR, Br[2] = uR[2] + (ZR[2] - uR[2]) * qR
    }
    const vr = Math.PI / 4;
    class Or {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Lr, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.iW = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(RR) {
        const JR = performance.now();
        this.clock.sample(RR.baf2BeltLinesAt, JR), this.queue(RR.baf2BeltLinesAt, RR, 0, null, null, 0), this.applyDue(JR)
      }
      onMoves(RR) {
        const JR = performance.now(),
          GR = RR.baf2BeltMovesAt;
        this.clock.sample(GR, JR);
        for (const [yR, tR, uR, ZR] of RR.baf2BeltMoveList) null === tR ? this.queue(GR - uR, null, yR, null, null, null !== ZR && void 0 !== ZR ? ZR : 0) : this.queue(GR - uR, null, yR, tR, null !== ZR && void 0 !== ZR ? ZR : null, 0);
        this.applyDue(JR)
      }
      start(RR) {
        this.pool = new nr.b(RR, {
          scale: .3,
          yaw: vr
        }, 64), this.iW(), window.addEventListener("resize", this.iW)
      }
      onAfterRender(RR) {
        const {
          pool: JR
        } = this;
        if (!JR) return;
        const GR = performance.now(),
          yR = GR - this.lastRenderAt;
        this.lastRenderAt = GR, yR < 100 && (this.frameMs += .1 * (yR - this.frameMs));
        const tR = GR + this.frameMs;
        this.applyDue(tR);
        const uR = RR.cameraPosition,
          ZR = JR.follow(uR);
        this.setView(RR, uR);
        const qR = this.frame++;
        for (let iR = 0; iR < this.shown.length; iR++) {
          const RR = this.shown[iR],
            GR = Xr(this.view, RR.bounds, RR.cellsPerMs),
            yR = RR.culled && 0 !== GR;
          if (RR.culled = 0 === GR, !ZR && !RR.changed && !yR && (0 === GR || (qR + iR) % GR !== 0)) continue;
          RR.changed = !1, RR.loop && (pr(RR, tR), (0, aG.v)(RR.items, RR.length, tR, RR.cellsPerMs));
          let uR = RR.length;
          for (let qR = 0; qR < RR.items.length; qR++) {
            const GR = RR.items[qR],
              yR = (0, aG.F)(GR.at, uR, tR, RR.cellsPerMs);
            if (uR = yR - aG.o, gr(RR, yR)) {
              null === GR.kind || GR.hidden || (GR.kind.hide(GR.slot), GR.hidden = !0);
              continue
            }
            let iR = GR.kind;
            if (null === iR) {
              if (iR = JR.kindOf(GR.name), null === iR) continue;
              GR.kind = iR, GR.slot = iR.take(), GR.hidden = !0, GR.drawn = NaN
            } else if (yR === GR.drawn && !GR.hidden && !ZR) continue;
            br(RR, yR), iR.write(GR.slot, Br[0], Br[1], Br[2]), GR.hidden = !1, GR.drawn = yR
          }
        }
        JR.commit()
      }
      dispose() {
        var RR;
        window.removeEventListener("resize", this.iW), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (RR = this.pool) || void 0 === RR || RR.dispose(), this.pool = null
      }
      setView(RR, JR) {
        const {
          cameraDir: GR,
          lastDir: yR
        } = this, tR = RR.cameraDirection;
        for (let VR = 0; VR < 3; VR++) yR[VR] = GR[VR], GR[VR] = tR[VR];
        const uR = GR[0] * yR[0] + GR[1] * yR[1] + GR[2] * yR[2],
          ZR = Number.isNaN(uR) ? 0 : Math.acos(Math.min(1, Math.max(-1, uR))),
          {
            width: qR,
            height: iR
          } = this,
          fR = RR.tanHalfFovX;
        ! function(RR, JR, GR, yR, tR, uR, ZR) {
          let qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          RR.x = JR[0], RR.y = JR[1], RR.z = JR[2], RR.dx = GR[0], RR.dy = GR[1], RR.dz = GR[2];
          const iR = Math.min(Math.PI, Math.atan(Math.sqrt(yR * yR + tR * tR)) + Ur + qR);
          RR.cosHalf = Math.cos(iR), RR.sinHalf = Math.sin(iR), RR.pxPerBlock = uR / (2 * tR), RR.frameMs = ZR
        }(this.view, JR, GR, fR, fR * iR / qR, iR * window.devicePixelRatio, this.frameMs, ZR)
      }
      queue(RR, JR, GR, yR, tR, uR) {
        const ZR = Math.max(this.clock.toLocal(RR), this.lastPendingAt);
        this.lastPendingAt = ZR, this.pending.push({
          at: ZR,
          lines: JR,
          line: GR,
          name: yR,
          pos: tR,
          idx: uR
        })
      }
      applyDue(RR) {
        const {
          pending: JR
        } = this;
        for (; this.pendingHead < JR.length && JR[this.pendingHead].at <= RR;) {
          const RR = JR[this.pendingHead++];
          if (RR.lines) this.applyLines(RR.lines, RR.at), RR.lines = null;
          else {
            const JR = this.lines.get(RR.line);
            JR && this.applyMove(JR, RR, RR.at)
          }
        }
        this.pendingHead === JR.length ? (JR.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > JR.length && (JR.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(RR, JR) {
        this.clearIsland(RR.baf2BeltIsland);
        for (const GR of RR.baf2BeltLineList) this.lines.set(GR[0], lr(RR.baf2BeltIsland, GR, JR));
        this.shown = [...this.lines.values()]
      }
      applyMove(RR, JR, GR) {
        let {
          name: yR,
          pos: tR,
          idx: uR
        } = JR;
        RR.changed = !0, RR.loop && (pr(RR, GR), (0, aG.v)(RR.items, RR.length, GR, RR.cellsPerMs)), null !== yR && null !== tR ? (0, aG.y)(RR.items, RR.length, Mr(yR, GR), tR, GR, RR.cellsPerMs) : null !== yR ? RR.items.push(Mr(yR, GR)) : RR.items.length > uR && this.release((0, aG.J)(RR.items, RR.length, GR, RR.cellsPerMs, uR))
      }
      clearIsland(RR) {
        for (const [JR, GR] of this.lines)
          if (GR.island === RR) {
            for (const RR of GR.items) this.release(RR);
            this.lines.delete(JR)
          }
      }
      release(RR) {
        null !== RR.kind && (RR.kind.release(RR.slot), RR.kind = null, RR.slot = -1, RR.hidden = !0, RR.drawn = NaN)
      }
    }
    var xr = GR(37796),
      Nr = GR(39691);

    function Dr(RR) {
      let {
        depth: JR,
        store: GR,
        t: tR
      } = RR;
      const uR = function(RR) {
        const [JR, GR] = (0, yR.useState)(RR.lastPlayerY());
        return (0, RV.f)(Ht, GR), (0, yR.useEffect)((() => {
          GR(RR.lastPlayerY())
        }), [RR]), JR
      }(GR);
      if (null === uR) return null;
      const [ZR, qR] = JR, iR = uR > ZR ? ZR : null !== qR && uR < qR ? qR : null, fR = {
        y: au(uR),
        target: null === iR ? "" : au(iR)
      };
      return (0, Uu.jsx)("span", {
        className: Ct()("Baf2QuestDepth", {
          Reached: null === iR
        }),
        children: tR(`${tV}${null===iR?"questDepthReached":"questDepth"}`, fR)
      })
    }

    function Hr(RR) {
      let {
        also: JR,
        view: GR,
        t: yR
      } = RR;
      return (0, Uu.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, Uu.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, Uu.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Uu.jsx)("strong", {
            children: yR(`${tV}questAlsoDownHere`)
          }), (0, Uu.jsx)("span", {
            className: "Baf2QuestChips",
            children: JR.map((RR => {
              let [JR, tR, uR, ZR] = RR;
              return (0, Uu.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": yR(`${tV}questAlsoItem`, {
                  item: ZV(yR, GR.itemNames[JR], JR),
                  have: String(tR),
                  need: String(uR)
                }),
                children: [(0, Uu.jsx)(fV, {
                  item: JR
                }), (0, Uu.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${tR}/${uR}`
                }), null !== ZR && (0, Uu.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: yR(`${tV}questAlsoDepth`, {
                    y: au(ZR)
                  })
                })]
              }, JR)
            }))
          })]
        })]
      })
    }
    var or = GR(4717);

    function cr(RR) {
      let {
        expanded: JR,
        inventoryOpen: GR,
        children: tR
      } = RR;
      const uR = (0, yR.useRef)(null);
      return (0, yR.useEffect)((() => {
        const RR = uR.current,
          JR = null === RR || void 0 === RR ? void 0 : RR.closest(".RightElements"),
          yR = null === RR || void 0 === RR ? void 0 : RR.firstElementChild;
        if (!RR || !JR || !yR) return;
        return (0, Nr.c)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [JR, yR], (() => {
          const tR = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === tR.length) return;
          const uR = Math.max(...tR.map((RR => RR.getBoundingClientRect().bottom))),
            ZR = JR.getBoundingClientRect(),
            qR = GR ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (qR) {
            const JR = parseFloat(getComputedStyle(yR).marginLeft) + parseFloat(getComputedStyle(yR).marginRight),
              GR = ZR.right - qR.getBoundingClientRect().right - 8 - JR;
            RR.style.setProperty("--baf2-quest-room", `${GR}px`), RR.classList.toggle("NoRoom", GR < 150)
          } else RR.style.removeProperty("--baf2-quest-room"), RR.classList.remove("NoRoom");
          const iR = uR - ZR.top + 8,
            fR = function(RR, JR, GR) {
              const yR = JR.getBoundingClientRect(),
                tR = RR.getBoundingClientRect(),
                uR = (0, or.i)(tR.left, tR.right, yR.top + GR);
              if (null !== uR && uR < yR.bottom) return uR - yR.top;
              return yR.height - (parseFloat(getComputedStyle(JR).paddingBottom) || 0)
            }(RR, JR, iR) - 8,
            VR = window.innerHeight / 2 - ZR.top,
            {
              top: KR,
              maxHeight: wR
            } = function(RR, JR, GR, yR, tR) {
              const uR = Math.min(GR, Math.max(0, JR - RR)),
                ZR = tR ? RR : Math.max(RR, Math.min(yR - uR / 2, JR - uR));
              return {
                top: ZR,
                maxHeight: Math.max(0, JR - ZR)
              }
            }(iR, fR, function(RR) {
              const JR = RR.firstElementChild,
                GR = JR ? JR.scrollHeight - JR.clientHeight : 0;
              return RR.getBoundingClientRect().height + Math.max(0, GR)
            }(yR), VR, (0, nu.d)());
          RR.style.top = `${KR}px`, RR.style.maxHeight = `${wR}px`
        }))
      }), [GR]), (0, Uu.jsx)("div", {
        ref: uR,
        className: Ct()("Baf2QuestHud", {
          Expanded: JR
        }),
        children: tR
      })
    }

    function Pr(RR) {
      let {
        amount: JR,
        t: GR
      } = RR;
      return (0, Uu.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, Uu.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, Uu.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: GR(`${tV}questStepsDone`, {
            amount: String(JR)
          })
        })]
      })
    }

    function Ir(RR) {
      let {
        pulse: JR
      } = RR;
      return 0 === JR ? null : (0, Uu.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, JR)
    }

    function mr(RR) {
      var JR;
      let {
        store: GR
      } = RR;
      const tR = (0, RV.h)(Dt, GR.get()),
        [uR, ZR] = (0, yR.useState)(!1),
        {
          t: qR
        } = (0, lt.A)(),
        iR = (0, nu.f)(),
        {
          openInGameMenuName: fR,
          openEverythingMenuName: VR
        } = (0, Ut.o)(["openInGameMenuName", "openEverythingMenuName"]),
        KR = "inventory" === fR && null === VR,
        wR = null !== fR && !KR || null !== VR;
      if (! function(RR) {
          return null !== RR.name || null !== RR.side
        }(tR) || wR || "off" === tR.tutorial) return null;
      const rR = zt(tR.rows),
        eR = rR.filter((RR => RR.done)).length,
        aR = function(RR, JR) {
          const GR = dt(RR);
          let yR = 0;
          return RR.filter(((RR, tR) => !!RR.justFinished || !(RR.done || tR < GR || yR > JR) && (yR++, !0)))
        }(tR.rows, iR ? 0 : 2),
        LR = iR ? aR : function(RR, JR) {
          const GR = JR.filter((RR => !RR.justFinished));
          if (GR.length < 2) return [...JR];
          const yR = RR.indexOf(GR[0]),
            tR = RR.indexOf(GR[GR.length - 1]),
            uR = new Set(zt(RR));
          return RR.filter(((RR, GR) => JR.includes(RR) || RR.done && uR.has(RR) && GR > yR && GR < tR))
        }(tR.rows, aR),
        nR = uR ? tR.rows : LR,
        UR = uR || iR ? [] : function(RR, JR) {
          const GR = new Array(JR.length + 1).fill(0),
            yR = new Set(zt(RR));
          let tR = 0;
          for (const uR of RR) tR < JR.length && uR === JR[tR] ? tR++ : uR.done && yR.has(uR) && GR[tR]++;
          return GR
        }(tR.rows, LR),
        WR = uR || LR.length < tR.rows.length || null !== tR.reward,
        AR = mt(tR),
        CR = AR ? qR(`${tV}questLineComplete`) : tR.tier ? wV(qR, tR.tier) : qR(`${tV}currentQuest`),
        XR = function(RR) {
          var JR, GR;
          if (mt(RR)) return null;
          const yR = null === (JR = RR.chapters) || void 0 === JR ? void 0 : JR.find((JR => {
            let [GR] = JR;
            return GR === RR.tier
          }));
          if (!yR) return null;
          const tR = yR[1].filter((RR => !RR[4]));
          if (0 === tR.length) return null;
          const uR = null === (GR = RR.name) || void 0 === GR ? void 0 : GR[0],
            ZR = RR => tR.findIndex((JR => JR[0] === uR && (!RR || !JR[3]))),
            qR = ZR(!0),
            iR = qR >= 0 ? qR : ZR(!1);
          if (iR >= 0) return [iR + 1, tR.length];
          const fR = tR.filter((RR => RR[3])).length;
          return [Math.min(fR + 1, tR.length), tR.length]
        }(tR);
      return (0, Uu.jsx)(xr.d, {
        placement: "topRight",
        children: (0, Uu.jsx)(cr, {
          expanded: uR,
          inventoryOpen: KR,
          children: (0, Uu.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: uV,
            children: [null !== tR.name && (0, Uu.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, Uu.jsx)(Ir, {
                pulse: tR.pulse
              }), (0, Uu.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, Uu.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [CR, XR && (0, Uu.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": qR(`${tV}questPlaceLabel`, {
                      n: String(XR[0]),
                      total: String(XR[1])
                    }),
                    children: qR(`${tV}questPlace`, {
                      n: String(XR[0]),
                      total: String(XR[1])
                    })
                  }), tR.tier && tR.core && !AR && (0, Uu.jsx)(rV, {
                    core: tR.core,
                    t: qR
                  })]
                })
              }), (0, Uu.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: qR(`${tV}${tR.name[0]}`, qV(tR.name[1]))
              }), (rR.length > 1 || WR) && (0, Uu.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [rR.length > 1 && (0, Uu.jsx)(eV, {
                  rows: rR,
                  t: qR
                }), WR && (0, Uu.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": uR,
                  onClick: () => {
                    ZR(!uR)
                  },
                  children: [(0, Uu.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: qR(`${tV}questStepsToggle`, {
                      done: String(eR),
                      total: String(rR.length)
                    })
                  }), (0, Uu.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: uR ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, Uu.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [nR.map(((RR, JR) => {
                  var uR;
                  const ZR = RR.current && tR.depth;
                  return (0, Uu.jsxs)(yR.Fragment, {
                    children: [(null !== (uR = UR[JR]) && void 0 !== uR ? uR : 0) > 0 && (0, Uu.jsx)(Pr, {
                      amount: UR[JR],
                      t: qR
                    }), (0, Uu.jsx)(aV, {
                      row: RR,
                      view: tR,
                      t: qR,
                      extra: ZR && (0, Uu.jsx)(Dr, {
                        depth: ZR,
                        store: GR,
                        t: qR
                      })
                    })]
                  }, RR.id)
                })), (null !== (JR = UR[nR.length]) && void 0 !== JR ? JR : 0) > 0 && (0, Uu.jsx)(Pr, {
                  amount: UR[nR.length],
                  t: qR
                }), tR.also.length > 0 && (0, Uu.jsx)(Hr, {
                  also: tR.also,
                  view: tR,
                  t: qR
                })]
              }), uR && tR.reward && (0, Uu.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [qR(`${tV}questReward`), (0, Uu.jsx)(fV, {
                  item: tR.reward
                }), ZV(qR, tR.itemNames[tR.reward], tR.reward)]
              })]
            }), tR.side && (0, Uu.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [Pt(tR, Date.now()) && (0, Uu.jsx)(Ir, {
                pulse: tR.sideCameUpAt
              }), (0, Uu.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: qR(`${tV}questSide`)
              }), (0, Uu.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: qR(`${tV}${tR.side.name[0]}`, qV(tR.side.name[1]))
              }), (0, Uu.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, Uu.jsx)(aV, {
                  row: tR.side.row,
                  view: tR,
                  t: qR
                })
              })]
            })]
          })
        })
      })
    }
    const zr = "baf2ToastView";
    class Sr {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = RR, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: RR,
          holdMs: JR
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const RR = this.dropCovered();
          RR && this.show(RR.message, RR.holdMs)
        }), 250));
        const GR = this.dropCovered();
        null !== GR && (GR.holdMs > 0 || "baf2ToastCelebrate" === GR.message.baf2ToastStyle) && "baf2ToastCelebrate" !== RR.baf2ToastStyle && this.show(GR.message, GR.holdMs);
        const yR = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== RR.baf2ToastStyle && yR > 0) return this.pending = {
          message: RR,
          holdMs: JR
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const RR = this.pending;
          this.pending = null, RR && this.present(RR.message, RR.holdMs)
        }), yR));
        this.present(RR, JR)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(RR, JR) {
        this.clearTimers(), this.pending = null;
        const GR = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: RR.baf2ToastText,
          style: RR.baf2ToastStyle,
          swapped: GR,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === RR.baf2ToastStyle ? 1500 : JR), this.JK();
        const yR = Math.min(8e3, Math.max(1e3, RR.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), yR)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.JK(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.JK()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const RR = this.covering;
        return this.covering = null, RR
      }
      JK() {
        xt.n.JK(zr, this.view, !0)
      }
    }
    var jr = GR(83);
    const dr = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function Er(RR) {
      let {
        store: JR
      } = RR;
      const GR = (0, RV.h)(zr, JR.get()),
        {
          openInGameMenuName: yR,
          openEverythingMenuName: tR
        } = (0, Ut.o)(["openInGameMenuName", "openEverythingMenuName"]),
        uR = GR && (0, Uu.jsxs)("div", {
          className: Ct()("Baf2Toast", dr[GR.style], {
            Swapped: GR.swapped,
            Leaving: GR.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === GR.style && (0, Uu.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, Uu.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, Uu.jsx)(bt.c, {
              text: GR.text
            })
          })]
        }, GR.id);
      return null !== yR && null === tR ? (0, jr.createPortal)((0, Uu.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: uR
      }), document.body) : (0, Uu.jsx)(xr.d, {
        children: uR
      })
    }
    const Yr = "baf2AreaView";
    class kr {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.Qq = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.Qq = null
      }
      arrive(RR, JR) {
        JR && function(RR) {
          return "home" === RR.baf2AreaPlace && void 0 !== RR.baf2AreaNameText
        }(RR) ? this.Qq = RR : this.show(RR)
      }
      release() {
        const RR = this.Qq;
        null !== RR && this.show(RR)
      }
      show(RR) {
        this.clearTimer(), this.Qq = null;
        const JR = void 0 === RR.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: RR,
          ms: JR
        }, this.JK(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.JK()
        }), JR)
      }
      dispose() {
        this.clearTimer(), this.Qq = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      JK() {
        xt.n.JK(Yr, this.view, !0)
      }
    }

    function Qr(RR) {
      var JR;
      let {
        store: GR
      } = RR;
      const {
        t: yR
      } = (0, lt.A)(), tR = (0, RV.h)(Yr, GR.get());
      if (!tR) return null;
      const {
        area: uR
      } = tR, ZR = uR.baf2AreaResetMinutes;
      return (0, Uu.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": uR.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${tR.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Uu.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), uR.baf2AreaHeading && (0, Uu.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: yR(uR.baf2AreaHeading)
        }), (0, Uu.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (JR = uR.baf2AreaNameText) && void 0 !== JR ? JR : yR(uR.baf2AreaName)
        }), uR.baf2AreaNote && (0, Uu.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: yR(uR.baf2AreaNote)
        }), void 0 !== ZR && (0, Uu.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: yR("buildAFactory2Game:areaWildsReset", {
            time: Lu(yR, 60 * ZR)
          })
        })]
      }, tR.id)
    }
    const Fr = "baf2GearGauge";
    class Tr {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      DW(RR) {
        var JR;
        if (this.clearLinger(), null === RR.gearPowerKind) return void this.set(null);
        const GR = "jetpack" === RR.gearPowerKind && (yR = RR.gearChargeState, tR = RR.gearCharge, "flying" === yR || "charging" === yR || "outOfCharge" === yR || "ceiling" === yR || "offPlot" === yR || "noPower" === yR && tR <= 0);
        var yR, tR;
        const uR = !0 === (null === (JR = this.view) || void 0 === JR ? void 0 : JR.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          ZR = GR || "jetpack" === RR.gearPowerKind && uR;
        this.set({
          gauge: RR,
          jetShown: ZR
        }), ZR && !GR && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(RR) {
        this.view = RR, xt.n.JK(Fr, RR, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const sr = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function hr(RR) {
      let {
        store: JR
      } = RR;
      const GR = (0, RV.h)(Fr, JR.get());
      return GR ? "jetpack" === GR.gauge.gearPowerKind ? (0, Uu.jsx)(Re, {
        view: GR
      }) : (0, Uu.jsx)(Je, {
        gauge: GR.gauge
      }) : null
    }

    function Re(RR) {
      let {
        view: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)(), {
        gauge: yR
      } = JR, tR = yR.gearChargeMax > 0 ? Math.max(0, Math.min(1, yR.gearCharge / yR.gearChargeMax)) : 0, uR = sr[yR.gearChargeState], ZR = uR ? GR(uR) : null;
      return (0, Uu.jsxs)("div", {
        className: Ct()("Baf2JetArc", {
          Shown: JR.jetShown,
          Low: tR < .2,
          Warm: tR >= .2 && tR < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - tR)
        },
        "aria-hidden": !JR.jetShown,
        children: [(0, Uu.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, Uu.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Ge,
            pathLength: 100
          }), (0, Uu.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Ge,
            pathLength: 100
          })]
        }), (0, Uu.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * tR), "%"]
        }), ZR && (0, Uu.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: ZR
        })]
      })
    }

    function Je(RR) {
      let {
        gauge: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)(), yR = function(RR, JR) {
        switch (JR.gearPowerKind) {
          case "skyPack":
            return RR("buildAFactory2Game:gearSkyPack", {
              charge: JR.gearCharge,
              max: JR.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return RR("buildAFactory2Game:gearIslandDraw", {
              power: TR(JR.gearIslandPower),
              cost: TR(JR.gearCostPerUse)
            });
          case "barrier":
            return RR("buildAFactory2Game:gearBarrier", {
              shield: Math.round(JR.gearCharge),
              max: JR.gearChargeMax,
              power: TR(JR.gearIslandPower)
            });
          default:
            return null
        }
      }(GR, JR);
      return null === yR ? null : (0, Uu.jsx)(xr.d, {
        children: (0, Uu.jsx)("div", {
          className: Ct()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === JR.gearChargeState || "outOfCharge" === JR.gearChargeState
          }),
          role: "status",
          children: yR
        })
      })
    }
    const Ge = (() => {
      const RR = RR => {
        const JR = RR * Math.PI / 180;
        return `${(40*Math.cos(JR)).toFixed(2)} ${(40*Math.sin(JR)).toFixed(2)}`
      };
      return `M ${RR(160)} A 40 40 0 1 1 ${RR(380)}`
    })();
    class ye {
      constructor(RR) {
        this.onElement = RR, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      DW(RR) {
        let JR = RR.baf2LabelsReset || RR.baf2LabelsIsland !== this.island;
        JR && (this.labels.clear(), this.island = RR.baf2LabelsIsland);
        for (const [GR, yR, tR, uR, ZR] of RR.baf2LabelsList) {
          const RR = `${GR},${yR},${tR}`,
            qR = this.labels.get(RR);
          null === uR ? JR = this.labels.delete(RR) || JR : qR && qR.item === uR && (qR.count === ZR || qR.count >= 0 && ZR >= 0) ? qR.count !== ZR && (qR.count = ZR, this.writeCount(RR, ZR)) : (this.labels.set(RR, {
            key: RR,
            pos: [GR, yR, tR],
            item: uR,
            count: ZR
          }), this.writeCount(RR, ZR), JR = !0)
        }
        if (this.changes++, JR) {
          this.snapshot = [...this.labels.values()];
          for (const RR of this.listeners) RR()
        }
      }
      bindCount(RR) {
        const JR = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${RR}`;
        let GR = this.countRefs.get(JR);
        return GR || (GR = GR => {
          var yR, tR;
          GR ? (this.countElements.set(JR, GR), this.writeCount(RR, null !== (yR = null === (tR = this.labels.get(RR)) || void 0 === tR ? void 0 : tR.count) && void 0 !== yR ? yR : -1)) : (this.countElements.delete(JR), this.countRefs.delete(JR))
        }, this.countRefs.set(JR, GR)), GR
      }
      setCountWords(RR) {
        this.countWords = RR;
        for (const [JR, GR] of this.labels) this.writePart(`words|${JR}`, RR(GR.count), GR.count)
      }
      writeCount(RR, JR) {
        this.writePart(`bare|${RR}`, eu(JR), JR), this.countElements.has(`words|${RR}`) && this.writePart(`words|${RR}`, this.countWords(JR), JR)
      }
      writePart(RR, JR, GR) {
        const yR = this.countElements.get(RR);
        if (!yR || GR < 0) return;
        const tR = yR.firstChild;
        tR && 3 === tR.nodeType && !tR.nextSibling ? tR.nodeValue !== JR && (tR.nodeValue = JR) : yR.textContent !== JR && (yR.textContent = JR)
      }
      list() {
        return this.snapshot
      }
      at(RR) {
        return this.labels.get(`${RR[0]},${RR[1]},${RR[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      bind(RR) {
        let JR = this.refs.get(RR);
        return JR || (JR = JR => {
          const GR = this.elements.get(RR);
          var yR, tR;
          GR && (null === (yR = this.onElement) || void 0 === yR || yR.call(this, GR, !1));
          JR ? (this.elements.set(RR, JR), null === (tR = this.onElement) || void 0 === tR || tR.call(this, JR, !0)) : (this.elements.delete(RR), this.refs.delete(RR))
        }, this.refs.set(RR, JR)), JR
      }
      onAfterRender(RR, JR, GR, yR) {
        for (const tR of this.snapshot) {
          const uR = this.elements.get(tR.key);
          if (!uR) continue;
          if (yR(tR.key)) {
            (0, tr.h)(uR, !0);
            continue
          }
          const ZR = (0, Vr.d)(uR, RR, JR, tR.pos, 1.1, 24);
          ZR && GR.add(ZR, uR, 0, !1)
        }
      }
    }
    const te = (0, yR.memo)((function(RR) {
        let {
          item: JR
        } = RR;
        return (0, Uu.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, Uu.jsx)(gt.b, {
            itemName: JR,
            amount: 0
          })
        })
      })),
      ue = (0, yR.memo)((function(RR) {
        let {
          label: JR,
          bindRef: GR,
          countRef: yR,
          wordsRef: tR
        } = RR;
        return (0, Uu.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: GR,
          hidden: !0,
          children: [(0, Uu.jsx)(te, {
            item: JR.item
          }), JR.count >= 0 && (0, Uu.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, Uu.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: tR
            }), (0, Uu.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: yR
            })]
          })]
        })
      })),
      Ze = (0, yR.memo)((function(RR) {
        let {
          store: JR
        } = RR;
        const {
          t: GR
        } = (0, lt.A)(), [tR, uR] = (0, yR.useState)((() => JR.list()));
        return (0, yR.useEffect)((() => (uR(JR.list()), JR.subscribe((() => {
          uR(JR.list())
        })))), [JR]), (0, yR.useEffect)((() => {
          JR.setCountWords((RR => GR("buildAFactory2Game:labelSiloCount", {
            count: eu(RR)
          })))
        }), [JR, GR]), (0, Uu.jsx)("div", {
          className: "Baf2IslandLabels",
          children: tR.map((RR => -2 === RR.count ? null : (0, Uu.jsx)(ue, {
            label: RR,
            bindRef: JR.bind(RR.key),
            countRef: JR.bindCount(RR.key),
            wordsRef: JR.bindCount(RR.key, "words")
          }, RR.key)))
        })
      })),
      qe = {
        read: () => !0,
        write: () => {}
      };

    function ie(RR) {
      return `${RR[0]},${RR[1]},${RR[2]}`
    }

    function fe(RR) {
      let [JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR] = RR;
      const rR = void 0 === KR || void 0 === wR ? function(RR) {
        return [Math.floor((RR - 1) / 2), 0]
      }(uR) : [KR, wR];
      return {
        kind: 0 === iR ? "reactor" : "battery",
        box: SG([JR, GR, yR], tR, uR, ZR, qR, rR),
        formed: 1 === fR,
        level: VR
      }
    }
    class Ve {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qe;
        this.guideSetting = RR, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = RR.read()
      }
      DW(RR) {
        var JR;
        const GR = new Map;
        for (const yR of RR.baf2RxPlanList) {
          const RR = fe(yR);
          GR.set(ie(RR.box.ctrl), RR)
        }
        this.plans = GR, this.layouts = new Map((null !== (JR = RR.baf2RxLayouts) && void 0 !== JR ? JR : []).map((RR => {
          let [JR, GR, yR, tR] = RR;
          return [ie([JR, GR, yR]), tR]
        }))), this.predicted.clear(), RR.baf2RxFormedAt && (this.formed = {
          ctrl: RR.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const yR of [...this.startersOff]) {
          const RR = GR.get(yR);
          RR && !RR.formed || this.startersOff.delete(yR)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((RR => this.planByKey(RR)))
      }
      planAt(RR) {
        return this.planByKey(ie(RR))
      }
      predictSize(RR, JR) {
        this.predicted.set(ie(RR), JR), this.changed()
      }
      unpredict(RR) {
        this.predicted.delete(ie(RR)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(RR) {
        var JR;
        const GR = ie(RR);
        return this.predicted.has(GR) ? null : null !== (JR = this.layouts.get(GR)) && void 0 !== JR ? JR : null
      }
      showsStarter(RR) {
        return !this.startersOff.has(ie(RR))
      }
      setStarter(RR, JR) {
        const GR = ie(RR);
        JR ? this.startersOff.delete(GR) : this.startersOff.add(GR), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(RR) {
        this.guide = RR, this.guideSetting.write(RR), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(RR) {
        const JR = this.plans.get(RR);
        if (!JR) return null;
        const GR = this.predicted.get(RR);
        return GR ? {
          ...JR,
          box: dG(JR.box, JR.kind, GR[0], GR[1], GR[2])
        } : JR
      }
      changed() {
        this.version++;
        for (const RR of this.listeners) RR()
      }
    }
    var Ke = GR(203);
    const we = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function re(RR, JR, GR, yR) {
      const tR = RR.length / 3;
      for (let uR = 0; uR < we.length / 3; uR++) RR.push(we[3 * uR] * yR[0] / 2 + GR[0], we[3 * uR + 1] * yR[1] / 2 + GR[1], we[3 * uR + 2] * yR[2] / 2 + GR[2]);
      for (let uR = tR; uR < tR + 24; uR += 4) JR.push(uR, uR + 1, uR + 2, uR, uR + 2, uR + 3)
    }

    function ee(RR, JR, GR) {
      const yR = JR[0][0],
        tR = [],
        uR = [];
      for (const [ZR, qR] of JR) re(tR, uR, [ZR[0] - yR[0], ZR[1] - yR[1], ZR[2] - yR[2]], qR);
      return RR.createGameMesh({
        positions: tR,
        indices: uR
      }, GR, yR)
    }

    function ae(RR, JR) {
      const GR = RR.w - 2,
        yR = RR.d - 2;
      return 1 === function(RR, JR, GR, yR) {
        const [tR, uR, ZR] = RR;
        if (Number(tR <= 2) + Number(uR <= 2) + Number(ZR <= 2) >= 2) return function(RR, JR, GR) {
          return (RR + JR + GR) % 2 === 0 ? 1 : 3
        }(JR, GR, yR);
        const [qR, iR] = tR >= uR && tR >= ZR ? [GR, yR] : uR >= ZR ? [JR, yR] : [JR, GR];
        return qR % 2 === 0 && iR % 2 === 0 ? 1 : 3
      }([GR, RR.h - 2, yR], JR % GR, Math.floor(JR / (GR * yR)), Math.floor(JR / GR) % yR) ? "rod" : "channel"
    }

    function Le(RR, JR, GR) {
      if ("reactor" !== RR.kind || RR.formed || !JR) return !1;
      const yR = kG(RR.box);
      for (let tR = 0; tR < yR; tR++) {
        const RR = GR(tR);
        if (null !== RR && vG(RR)) return !1
      }
      return !0
    }

    function ne(RR, JR, GR, yR, tR) {
      var uR;
      let ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const qR = Ry(RR.box, JR),
        iR = ty(RR.kind, qR, GR);
      if ("wrong" === iR || "blocked" === iR) return "wrong";
      if (!tR) return null;
      if ("inside" === qR && "reactor" === RR.kind && "Air" === OG(GR)) {
        if (null !== ZR) {
          var fR;
          const GR = sK[hK(ZR, Jy(RR.box, JR))];
          return GR && null !== (fR = Ui(GR)) && void 0 !== fR ? fR : null
        }
        if (yR) return ae(RR.box, Jy(RR.box, JR))
      }
      if ("missing" !== iR) return null;
      const VR = uy(RR.kind, qR);
      return null === VR ? null : null !== (uR = Ui(VR)) && void 0 !== uR ? uR : null
    }
    const Ue = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function We(RR, JR, GR) {
      const yR = GR => {
        const yR = JR(sG(RR.box, GR));
        return null !== yR && function(RR, JR) {
          return "reactor" !== RR.kind || JR !== FG(RR.box) && "inside" !== Ry(RR.box, JR)
        }(RR, GR) && "ok" !== ty(RR.kind, Ry(RR.box, GR), yR)
      };
      if (GR) {
        const uR = hG(RR.box, [Math.floor(GR[0]), Math.floor(GR[1]), Math.floor(GR[2])]);
        if (uR >= 0 && (yR(uR) || (tR = uR, "reactor" === RR.kind && "inside" === Ry(RR.box, tR) && "Air" === JR(sG(RR.box, tR))))) return uR
      }
      var tR;
      const uR = kG(RR.box);
      for (let ZR = 0; ZR < uR; ZR++)
        if (yR(ZR)) return ZR;
      return -1
    }

    function Ae(RR, JR) {
      return Math.floor(JR / (RR.w * RR.d))
    }

    function Ce(RR, JR, GR) {
      return GR >= 0 && Ae(RR, JR) > Ae(RR, GR)
    }

    function Xe(RR, JR) {
      return JR >= 0 && RR.h >= 3 && Ae(RR, JR) === RR.h - 1
    }

    function Me(RR) {
      const JR = OG(RR);
      return JR === UG || "Collider" === JR || "Laser" === JR || JR.startsWith("_Collider ")
    }

    function Be(RR, JR, GR, yR) {
      if (yR(RR)) return null;
      if (!Ue.every((JR => {
          let [yR, tR, uR] = JR;
          const ZR = GR([RR[0] + yR, RR[1] + tR, RR[2] + uR]);
          return null !== ZR && !PG("reactor", ZR) && "reactor" !== xG(ZR)
        }))) return null;
      const tR = IG("reactor").min,
        uR = SG([RR[0], RR[1], RR[2]], function(RR, JR) {
          const GR = JR[0] - (RR[0] + .5),
            yR = JR[2] - (RR[2] + .5);
          return Math.abs(GR) >= Math.abs(yR) ? GR >= 0 ? 2 : 4 : yR >= 0 ? 1 : 3
        }(RR, JR), tR, tR, tR, jG("reactor", tR)),
        ZR = FG(uR);
      let qR = !0;
      for (let iR = 0; iR < kG(uR) && qR; iR++) {
        if (iR === ZR) continue;
        const RR = sG(uR, iR),
          JR = GR(RR);
        qR = !yR(RR) && (null === JR || !Me(JR))
      }
      return {
        box: uR,
        fits: qR
      }
    }
    const le = ni,
      pe = "baf2Goal",
      ge = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      be = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      ve = .4;

    function Oe(RR, JR) {
      let [GR, yR, tR] = RR;
      const uR = li([GR - .02, yR - .02, tR - .02], [GR + 1.02, yR + 1.02, tR + 1.02], .07);
      return JR && (uR.push([
        [GR + .5, yR + 1 + .7, tR + .5],
        [.08, 1.4, .08]
      ]), uR.push([
        [GR + .5, yR + 1 + 1.4 + .2, tR + .5],
        [ve, ve, ve]
      ])), uR
    }

    function xe(RR, JR) {
      let [GR, yR, tR] = JR;
      return RR.isBlockInLoadedChunk(GR, yR, tR) ? RR.blockIdToBlockName(RR.getBlockId(GR, yR, tR)) : null
    }
    let Ne = null;
    const De = new Set;
    let He = null;

    function oe(RR) {
      Ne = RR;
      for (const JR of De) JR(RR)
    }
    class ce {
      constructor(RR) {
        var JR;
        this.plans = RR, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (JR = RR => {
          var JR, GR;
          this.setGoal(null !== (JR = null === RR || void 0 === RR ? void 0 : RR.goal) && void 0 !== JR ? JR : null, null !== (GR = null === RR || void 0 === RR ? void 0 : RR.startsBattery) && void 0 !== GR && GR)
        }, He ??= [xt.n.subscribe("setDirectionArrow", (RR => {
          let {
            id: JR,
            position: GR,
            text: yR
          } = RR;
          JR === pe && oe({
            goal: [Math.floor(GR[0]), Math.floor(GR[1]), Math.floor(GR[2])],
            startsBattery: JSON.stringify(null !== yR && void 0 !== yR ? yR : null).includes("arrowStartBattery")
          })
        })), xt.n.subscribe("clearDirectionArrow", (RR => {
          let {
            id: JR
          } = RR;
          null !== JR && JR !== pe || oe(null)
        }))], De.add(JR), JR(Ne), () => {
          De.delete(JR)
        })
      }
      onAfterRender(RR, JR) {
        const GR = performance.now();
        if (this.cues.length > 0) {
          const JR = .55 + .45 * Math.sin(GR / 1100 * Math.PI * 2);
          for (const GR of this.cues) RR.setGameMesh(GR, {
            visibility: JR
          })
        }
        if (GR - this.lastCheckMs < 150) return;
        this.lastCheckMs = GR;
        const yR = this.plans.all().filter((RR => {
            const [GR, yR, tR] = RR.box.ctrl;
            return (!RR.formed || null !== this.plans.layoutOf(RR.box.ctrl)) && (GR - JR[0]) ** 2 + (yR - JR[1]) ** 2 + (tR - JR[2]) ** 2 <= 2304
          })),
          tR = function(RR, JR) {
            const GR = Ke.g.LK,
              yR = new Map;
            for (const uR of JR) {
              const JR = sG(uR.box, 0),
                ZR = sG(uR.box, kG(uR.box) - 1),
                qR = [Math.min(JR[0], ZR[0]), Math.min(JR[1], ZR[1]), Math.min(JR[2], ZR[2])].map((RR => Math.floor(RR / GR))),
                iR = [Math.max(JR[0], ZR[0]), Math.max(JR[1], ZR[1]), Math.max(JR[2], ZR[2])].map((RR => Math.floor(RR / GR)));
              for (let GR = qR[0]; GR <= iR[0]; GR++)
                for (let JR = qR[1]; JR <= iR[1]; JR++)
                  for (let uR = qR[2]; uR <= iR[2]; uR++) {
                    var tR;
                    yR.set(`${GR},${JR},${uR}`, null !== (tR = RR.getChunkVersion(GR, JR, uR)) && void 0 !== tR ? tR : -1)
                  }
            }
            return yR
          }(RR, yR);
        this.plans.getVersion() === this.storeVersion && (function(RR, JR) {
          if (RR.size !== JR.size) return !1;
          for (const [GR, yR] of RR)
            if (JR.get(GR) !== yR) return !1;
          return !0
        }(tR, this.chunkVersions) || GR - this.lastRescanMs < 600) || (this.lastRescanMs = GR, this.storeVersion = this.plans.getVersion(), this.chunkVersions = tR, this.redraw(RR, yR))
      }
      dispose(RR) {
        this.unwatch(), Ne = null, this.clearMeshes(RR), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(RR, JR) {
        var GR;
        (null === RR || void 0 === RR ? void 0 : RR.join()) === (null === (GR = this.goal) || void 0 === GR ? void 0 : GR.join()) && JR === this.startsBattery || (this.goal = RR, this.startsBattery = JR, this.storeVersion = -1)
      }
      redraw(RR, JR) {
        const GR = JR => xe(RR, JR),
          yR = new Map,
          tR = [],
          uR = this.plans.guideOn();
        for (const fR of JR) {
          const RR = uR && Le(fR, this.plans.showsStarter(fR.box.ctrl), (RR => GR(sG(fR.box, RR)))),
            JR = "reactor" === fR.kind ? this.plans.layoutOf(fR.box.ctrl) : null,
            ZR = uR && !fR.formed ? We(fR, GR, this.goal) : -1;
          ZR >= 0 && tR.push([sG(fR.box, ZR), Xe(fR.box, ZR)]);
          const qR = kG(fR.box);
          for (let tR = 0; tR < qR; tR++) {
            const qR = sG(fR.box, tR),
              iR = GR(qR),
              VR = null === iR ? null : ne(fR, tR, iR, RR, uR, JR);
            if (null !== VR) {
              const RR = "wrong" !== VR && Ce(fR.box, tR, ZR),
                JR = RR ? `${VR}Dim` : VR;
              let GR = yR.get(JR);
              GR || (GR = {
                draw: {
                  ghost: VR,
                  dim: RR
                },
                list: []
              }, yR.set(JR, GR)), GR.list.push(qR)
            }
          }
        }
        if (uR && this.startsBattery && this.goal) {
          const [RR, JR, tR] = this.goal, uR = [];
          for (const [yR, ZR, qR] of ge) {
            const iR = [RR + yR, JR + ZR, tR + qR];
            "Air" === GR(iR) && uR.push(iR)
          }
          if (uR.length > 0) {
            var ZR;
            const RR = null !== (ZR = yR.get("cell")) && void 0 !== ZR ? ZR : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            RR.list.push(...uR), yR.set("cell", RR)
          }
        }
        const qR = [...yR.keys()].sort(),
          iR = [...qR.map((RR => `${RR}:${yR.get(RR).list.join(";")}`)), `cue:${tR.join(";")}`].join("|");
        if (iR !== this.shownKey) {
          this.shownKey = iR, this.clearMeshes(RR);
          for (const JR of qR) {
            const {
              draw: GR,
              list: tR
            } = yR.get(JR);
            this.meshes.push(this.build(RR, GR, tR))
          }
          for (const [JR, GR] of tR) this.cues.push(ee(RR, Oe(JR, GR), be))
        }
      }
      build(RR, JR, GR) {
        let {
          ghost: yR,
          dim: tR
        } = JR;
        const {
          size: uR,
          colour: ZR,
          alpha: qR
        } = le[yR], iR = GR[0], fR = [], VR = [];
        for (const [KR, wR, rR] of GR) re(fR, VR, [KR - iR[0] + .5, wR - iR[1] + .5, rR - iR[2] + .5], [uR, uR, uR]);
        return RR.createGameMesh({
          positions: fR,
          indices: VR
        }, {
          rgb: ZR,
          alpha: qR * (tR ? .3 : 1)
        }, iR)
      }
      clearMeshes(RR) {
        for (const JR of [...this.meshes, ...this.cues]) RR.disposeGameMesh(JR);
        this.meshes = [], this.cues = []
      }
    }
    const Pe = [.56, .83, 1],
      Ie = [1, .3, .25];
    class me {
      constructor(RR) {
        this.plans = RR, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(RR, JR, GR) {
        var yR;
        const tR = performance.now();
        if (tR - this.lastCheckMs < 150) return;
        this.lastCheckMs = tR;
        const uR = JR => xe(RR, JR),
          ZR = null === (yR = RR.uyR(JR)) || void 0 === yR ? void 0 : yR.name,
          qR = ZR && "Reactor Frame" === OG(ZR) ? RR.getTargetedBlock() : null,
          iR = qR ? [qR.UL[0], qR.UL[1], qR.UL[2]] : null,
          fR = null !== iR && "Air" === uR(iR) && iR.every(((RR, JR) => Math.abs(RR + .5 - GR[JR]) <= 8)) ? Be(iR, GR, uR, (RR => this.inPlan(RR))) : null,
          VR = fR ? `${fR.box.ctrl.join()}|${fR.box.rot}|${fR.fits}` : "";
        VR !== this.shownKey && this.show(RR, VR, fR)
      }
      dispose(RR) {
        this.clear(RR), this.shownKey = ""
      }
      inPlan(RR) {
        return this.plans.all().some((JR => hG(JR.box, RR) >= 0))
      }
      show(RR, JR, GR) {
        if (this.clear(RR), this.shownKey = JR, !GR) return;
        const {
          box: yR,
          fits: tR
        } = GR, uR = tR ? Pe : Ie, {
          lo: ZR,
          hi: qR
        } = Bi(yR);
        this.meshes.push(ee(RR, li(ZR, qR, .05), {
          rgb: uR,
          alpha: 1
        }));
        const iR = [],
          fR = sG(yR, 0)[1];
        for (let VR = 0; VR < yR.w * yR.d; VR++) {
          const [RR, , JR] = sG(yR, VR);
          iR.push([
            [RR + .5, fR + .02 + .01, JR + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(ee(RR, iR, {
          rgb: uR,
          alpha: .25
        }))
      }
      clear(RR) {
        for (const JR of this.meshes) RR.disposeGameMesh(JR);
        this.meshes = []
      }
    }
    const ze = "buildAFactory2Game:";

    function Se(RR, JR, GR) {
      const yR = RR => {
          const [GR, yR, tR] = RR.box.ctrl;
          return GR === JR[0] && yR === JR[1] && tR === JR[2]
        },
        tR = RR.find((RR => yR(RR) || hG(RR.box, JR) >= 0));
      if (!tR) return null;
      const uR = function(RR, JR, GR) {
        const {
          w: yR,
          h: tR,
          d: uR
        } = RR.box, ZR = "reactor" === RR.kind ? `${ze}rxTitle` : `${ze}batTitle`;
        if (RR.formed) return {
          key: `${ze}lookPlanFormed`,
          kindKey: ZR,
          w: yR,
          h: tR,
          d: uR,
          count: 0
        };
        let qR = 0,
          iR = 0;
        for (let VR = 0; VR < kG(RR.box); VR++) {
          const JR = GR(sG(RR.box, VR)),
            yR = null === JR ? "ok" : ty(RR.kind, Ry(RR.box, VR), JR);
          qR += "missing" === yR ? 1 : 0, iR += "wrong" === yR || "blocked" === yR ? 1 : 0
        }
        const fR = function(RR, JR, GR) {
          if (JR < 0 || null === GR) return;
          const yR = Ry(RR.box, JR),
            tR = ty(RR.kind, yR, GR);
          return "blocked" === tR ? `${ze}lookWhy_blocked` : "wrong" === tR ? "ctrl" === yR ? `${ze}lookWhy_ctrl` : `${ze}lookWhy_reactor_${yR}` : void 0
        }(RR, hG(RR.box, JR), GR([JR[0], JR[1], JR[2]]));
        if (qR > 0) return {
          key: `${ze}lookPlanToBuild`,
          kindKey: ZR,
          w: yR,
          h: tR,
          d: uR,
          count: qR,
          why: fR
        };
        if (iR > 0) return {
          key: `${ze}lookPlanTakeOut`,
          kindKey: ZR,
          w: yR,
          h: tR,
          d: uR,
          count: iR,
          why: fR
        };
        return {
          key: "reactor" === RR.kind ? `${ze}lookPlanNoRods` : `${ze}lookPlanDone`,
          kindKey: ZR,
          w: yR,
          h: tR,
          d: uR,
          count: 0
        }
      }(tR, JR, GR);
      return "reactor" === tR.kind && yR(tR) ? {
        ...uR,
        ctrl: !0
      } : uR
    }

    function je(RR, JR) {
      return RR === JR || null !== RR && null !== JR && RR.key === JR.key && RR.kindKey === JR.kindKey && RR.w === JR.w && RR.h === JR.h && RR.d === JR.d && RR.count === JR.count && RR.why === JR.why && RR.ctrl === JR.ctrl
    }

    function de() {
      return performance.now()
    }
    class Ee {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : de;
        this.ticket = RR, this.sent = JR, this.backstopMs = GR, this.now = yR, this.queuedAt = void 0, this.queuedAt = yR()
      }
      answered() {
        const RR = this.now(),
          JR = this.sent.leftAt(this.ticket);
        return null !== JR && RR - JR > 4e3 || RR - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Ye {
      constructor() {
        this.echoes = []
      }
      add(RR) {
        this.echoes = this.echoes.filter((RR => !RR.answered())), this.echoes.push(RR)
      }
      answered() {
        var RR, JR;
        return null === (RR = null === (JR = this.echoes.at(-1)) || void 0 === JR ? void 0 : JR.answered()) || void 0 === RR || RR
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((RR => RR.answered()))
      }
      age() {
        var RR, JR;
        return null !== (RR = null === (JR = this.echoes.at(-1)) || void 0 === JR ? void 0 : JR.age()) && void 0 !== RR ? RR : null
      }
      clear() {
        this.echoes = []
      }
    }
    class ke {
      constructor(RR) {
        this.send = RR, this.value = null, this.sent = null, this.echoes = new Ye, this.down = !1, this.timer = null
      }
      shown(RR) {
        return null === this.value ? RR : this.down || this.value !== this.sent ? this.value : RR === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), RR) : this.value
      }
      pendingFor(RR) {
        return null !== this.value && this.value === this.sent && RR !== this.value ? this.echoes.age() : null
      }
      assume(RR, JR) {
        this.disarm(), this.down = !1, this.value = RR, this.sent = RR, this.echoes.clear(), this.echoes.add(JR)
      }
      press() {
        this.down = !0
      }
      drag(RR) {
        this.value = RR, this.arm(this.down ? 1e3 : 400)
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
      arm(RR) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), RR)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class Qe {
      constructor() {
        this.pending = new Map
      }
      set(RR, JR, GR) {
        var yR;
        const tR = null !== (yR = this.pending.get(RR)) && void 0 !== yR ? yR : {
          on: JR,
          echoes: new Ye
        };
        tR.on = JR, tR.echoes.add(GR), this.pending.set(RR, tR)
      }
      shown(RR) {
        let JR = RR;
        for (const [GR, {
            on: yR,
            echoes: tR
          }] of this.pending) 0 !== (RR & GR) === yR && tR.agreeCounts() || tR.answered() ? this.pending.delete(GR) : JR = yR ? JR | GR : JR & ~GR;
        return JR
      }
      pendingMask() {
        let RR = 0;
        for (const JR of this.pending.keys()) RR |= JR;
        return RR
      }
      pendingFor(RR) {
        let JR = null;
        for (const [yR, {
            on: tR,
            echoes: uR
          }] of this.pending) {
          if (void 0 !== RR && 0 !== (RR & yR) === tR) continue;
          const ZR = uR.age();
          var GR;
          if (null !== ZR) JR = Math.max(null !== (GR = JR) && void 0 !== GR ? GR : 0, ZR)
        }
        return JR
      }
      clear() {
        this.pending.clear()
      }
    }
    class Fe {
      constructor() {
        this.dims = null, this.echoes = new Ye, this.unmet = null
      }
      shown(RR) {
        var JR;
        return this.dims && (Te(this.dims, RR) && this.echoes.agreeCounts() || this.echoes.answered()) && (Te(this.dims, RR) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (JR = this.dims) && void 0 !== JR ? JR : RR
      }
      takeUnmet() {
        const RR = this.unmet;
        return this.unmet = null, RR
      }
      set(RR, JR) {
        this.dims = RR, this.echoes.add(JR)
      }
      pendingFor(RR) {
        return null === this.dims || RR && Te(this.dims, RR) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function Te(RR, JR) {
      return RR[0] === JR[0] && RR[1] === JR[1] && RR[2] === JR[2]
    }
    class se {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de;
        this.now = RR, this.taps = new Map
      }
      tap(RR, JR, GR) {
        return !this.busy(RR) && (this.taps.set(RR, {
          at: this.now(),
          done: JR
        }), GR(), !0)
      }
      settle(RR) {
        for (const [JR, GR] of [...this.taps]) GR.done(RR) && this.taps.delete(JR)
      }
      busy(RR) {
        const JR = this.taps.get(RR);
        return !!JR && (!(this.now() - JR.at >= 3e3) || (this.taps.delete(RR), !1))
      }
      busyIds() {
        const RR = new Set;
        for (const JR of [...this.taps.keys()]) this.busy(JR) && RR.add(JR);
        return RR
      }
      clear() {
        this.taps.clear()
      }
    }

    function he(RR) {
      return {
        send: JR => RR.track(JR),
        sendUrgent: (JR, GR) => RR.track(JR, {
          urgent: !0,
          supersedes: GR
        }),
        leftAt: JR => RR.leftAt(JR),
        holdReserve: () => RR.holdUrgentReserve(),
        answerMs: pZ
      }
    }

    function Ra() {
      return performance.now()
    }

    function Ja(RR) {
      const JR = RR.baf2RxNeed.map((RR => {
        let [JR, GR] = RR;
        return [JR, GR]
      }));
      return JSON.stringify([RR.baf2RxFormed, JR, RR.baf2RxBad, RR.baf2RxCells])
    }

    function Ga(RR, JR) {
      const GR = 0 !== (JR & wJ),
        yR = 0 !== (RR.baf2RxFlags & wJ);
      return !GR || yR || "running" !== RR.baf2RxState && "idle" !== RR.baf2RxState ? !GR && yR && "scram" === RR.baf2RxState && RR.baf2RxFuel > 0 ? "idle" : RR.baf2RxState : "scram"
    }

    function ya(RR) {
      return JSON.stringify([RR.baf2BatFormed, RR.baf2BatNeed, RR.baf2BatBad])
    }

    function ta(RR) {
      return RR.join(",")
    }
    class ua {
      constructor() {
        this.listeners = new Set
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      notify() {
        for (const RR of this.listeners) RR()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class Za {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(RR, JR) {
        this.lastAt = RR, this.lastUntil = RR + JR
      }
      answered(RR) {
        return this.lastAt >= RR || RR < this.lastUntil
      }
    }
    class qa {
      constructor(RR, JR) {
        this.link = RR, this.now = JR, this.hold = new Fe, this.picked = null, this.notTaken = null
      }
      shown(RR) {
        const JR = this.hold.shown(RR);
        if (this.hold.takeUnmet() && this.picked) {
          var GR;
          const {
            plans: JR,
            ctrl: yR,
            at: tR
          } = this.picked;
          this.picked = null, JR.unpredict(yR), null === (GR = this.notTaken) || void 0 === GR || GR.call(this, RR, tR)
        }
        return JR
      }
      pendingFor(RR) {
        return this.hold.pendingFor(RR)
      }
      Ur(RR, JR, GR) {
        RR.predictSize(JR, GR), this.picked = {
          plans: RR,
          ctrl: JR,
          at: this.now()
        };
        const yR = this.link.send(KJ(JR, "plan", ...GR));
        this.hold.set(GR, new Ee(yR, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class ia {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ra;
        this.plans = RR, this.readInterior = JR, this.link = GR, this.now = yR, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Qe, this.throttle = void 0, this.oneShots = void 0, this.listeners = new ua, this.redraw = null, this.releaseReserve = null, this.size = new qa(GR, yR), this.oneShots = new se(yR), this.throttle = new ke((RR => this.echo(this.link.send(this.command("throttle", RR)))))
      }
      set(RR) {
        !RR.baf2RxOpen && this.raw && ta(this.raw.baf2RxAt) === ta(RR.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(RR), this.JK(RR)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(RR) {
        this.size.notTaken = RR
      }
      resize(RR) {
        this.raw && (this.size.Ur(this.plans, this.raw.baf2RxAt, RR), this.JK(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const RR = this.raw.baf2RxAt;
        this.plans.setStarter(RR, !this.plans.showsStarter(RR)), this.JK(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.JK(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.JK(this.raw)
      }
      send(RR) {
        if (this.raw) {
          for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
          this.link.send(this.command(RR, ...GR))
        }
      }
      tap(RR, JR) {
        this.raw && this.oneShots.tap(RR, function(RR, JR) {
          if ("start" === RR) return RR => 0 === (RR.baf2RxFlags & wJ);
          if ("odConfirm" === RR) return RR => 0 !== (RR.baf2RxFlags & rJ);
          const GR = Ja(JR);
          return RR => Ja(RR) !== GR
        }(RR, this.raw), JR) && ("start" === RR && (this.startedAt = this.now()), this.JK(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(wJ, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(RR, JR) {
        if (!this.raw) return;
        const GR = RR === wJ ? this.command(JR ? "scram" : "start") : this.command("od", JR ? 1 : 0),
          yR = JR && RR === wJ,
          tR = `${VJ} ${this.raw.baf2RxAt.join(" ")} `,
          uR = this.echo(yR ? this.link.sendUrgent(GR, (RR => {
            const JR = RR.startsWith(tR) ? RR.slice(tR.length).split(" ")[0] : null;
            return "throttle" === JR || "start" === JR
          })) : this.link.send(GR));
        this.flags.set(RR, JR, uR), yR && this.throttle.assume(0, uR), this.JK(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(RR) {
        this.throttle.drag(RR), this.raw && this.JK(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.JK(this.raw)
      }
      subscribe(RR) {
        return this.listeners.subscribe(RR)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var RR;
        this.throttle.release(), null === (RR = this.releaseReserve) || void 0 === RR || RR.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(RR) {
        for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
        return KJ(this.raw.baf2RxAt, RR, ...GR)
      }
      echo(RR) {
        return new Ee(RR, this.link, this.link.answerMs, this.now)
      }
      JK(RR) {
        var JR;
        this.raw = RR;
        const GR = this.flags.shown(RR.baf2RxFlags),
          yR = {
            ...RR,
            baf2RxFlags: GR,
            baf2RxTarget: this.throttle.shown(RR.baf2RxTarget),
            baf2RxState: Ga(RR, GR)
          },
          tR = this.size.shown(yR.baf2RxDims),
          uR = this.throttle.pendingFor(),
          ZR = [this.throttle.pendingFor(RR.baf2RxTarget), this.flags.pendingFor(RR.baf2RxFlags), this.size.pendingFor(RR.baf2RxDims)].filter((RR => null !== RR)),
          qR = ZR.length > 0 ? Math.max(...ZR) : null,
          iR = this.oneShots.busyIds(),
          fR = yR.baf2RxAt;
        let VR, KR, wR = null,
          rR = [Math.max(0, tR[0] - 2), Math.max(0, tR[1] - 2), Math.max(0, tR[2] - 2)];
        if (yR.baf2RxFormed) {
          const [RR, JR, GR] = yR.baf2RxDims;
          rR = [Math.max(0, RR - 2), Math.max(0, JR - 2), Math.max(0, GR - 2)], VR = Array.from(yR.baf2RxCells, Number), KR = `${rR.join(",")}:${yR.baf2RxCells}`
        } else {
          var eR;
          const RR = null === (eR = this.plans.planAt(fR)) || void 0 === eR ? void 0 : eR.box,
            JR = RR ? dG(RR, "reactor", ...tR) : SG(fR, 1, ...tR, jG("reactor", tR[0])),
            GR = this.readInterior(JR);
          wR = Yq(rR, GR), VR = GR, KR = `${rR.join(",")}:${GR.join("")}`
        }(null === (JR = this.looksOf) || void 0 === JR ? void 0 : JR.key) !== KR && (this.looksOf = {
          key: KR,
          looks: hq(rR, VR)
        }), this.view = {
          status: yR,
          dims: tR,
          plan: wR,
          inner: rR,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(fR),
          odConfirmed: this.odConfirmed || 0 !== (yR.baf2RxFlags & WJ),
          guide: this.plans.guideOn(),
          throttlePending: null !== uR,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== qR && qR >= 5e3,
          busy: iR,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== qR || iR.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.JK(this.raw)
        }), 250))
      }
    }
    class fa {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ra;
        this.plans = RR, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new ua, this.redraw = null, this.size = new qa(JR, GR), this.oneShots = new se(GR)
      }
      set(RR) {
        !RR.baf2BatOpen && this.view && ta(this.view.status.baf2BatAt) === ta(RR.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(RR), this.JK(RR)
      }
      tap(RR, JR) {
        if (!this.view) return;
        const GR = ya(this.view.status);
        this.oneShots.tap(RR, (RR => ya(RR) !== GR), JR) && this.JK(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(RR) {
        this.size.notTaken = RR
      }
      resize(RR) {
        this.view && (this.size.Ur(this.plans, this.view.status.baf2BatAt, RR), this.JK(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.JK(this.view.status)
      }
      subscribe(RR) {
        return this.listeners.subscribe(RR)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      JK(RR) {
        const JR = this.size.shown(RR.baf2BatDims),
          GR = this.oneShots.busyIds();
        this.view = {
          status: RR,
          dims: JR,
          hK: ri(JR, RR.baf2BatDims) ? RR.baf2BatCapacity : Gi(...JR),
          guide: this.plans.guideOn(),
          busy: GR
        }, this.listeners.notify(), GR.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.JK(this.view.status)
        }), 250))
      }
    }
    const Va = "buildAFactory2Game:";

    function Ka() {
      var RR;
      const JR = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!JR) return null;
      const GR = JR.querySelector(".ExitButton");
      return function(RR, JR) {
        const GR = JR ? JR.left - 8 : RR.right;
        return {
          left: RR.left,
          top: RR.top,
          width: Math.max(0, GR - RR.left),
          height: RR.height
        }
      }(JR.getBoundingClientRect(), null !== (RR = null === GR || void 0 === GR ? void 0 : GR.getBoundingClientRect()) && void 0 !== RR ? RR : null)
    }
    const wa = (0, yR.memo)((function(RR) {
      let {
        store: JR
      } = RR;
      const {
        t: GR
      } = (0, lt.A)(), [tR, uR] = (0, yR.useState)((() => JR.get())), [ZR, qR] = (0, yR.useState)((() => performance.now()));
      (0, yR.useEffect)((() => (uR(JR.get()), JR.subscribe((() => {
        uR(JR.get()), qR(performance.now())
      })))), [JR]);
      const {
        alarm: iR,
        boomAt: fR
      } = tR, VR = null !== iR && null !== iR.secs, [KR, wR] = (0, yR.useState)(null);
      (0, yR.useEffect)((() => {
        if (!VR) return;
        wR(Ka());
        const RR = setInterval((() => {
          qR(performance.now()), wR(Ka())
        }), 250);
        return () => {
          clearInterval(RR)
        }
      }), [VR]);
      const [rR, eR] = (0, yR.useState)(!1);
      return (0, yR.useEffect)((() => {
        if (fR === -1 / 0) return;
        eR(!0);
        const RR = setTimeout((() => {
          eR(!1)
        }), 1300);
        return () => {
          clearTimeout(RR)
        }
      }), [fR]), (0, Uu.jsxs)(Uu.Fragment, {
        children: [null !== iR && (0, Uu.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: GR(iR.hot ? `${Va}rxAlarmSiren` : `${Va}rxAlarmDamaged`, {
            amount: String(iR.damage)
          })
        }), null !== iR && null !== iR.secs && (0, Uu.jsx)("div", {
          className: KR ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== KR && void 0 !== KR ? KR : void 0,
          "aria-live": "assertive",
          children: GR(`${Va}rxAlarmCountdown`, {
            amount: String((aR = iR.secs, LR = ZR - iR.receivedAt, Math.max(1, Math.ceil(aR - LR / 1e3))))
          })
        }), rR && (0, Uu.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var aR, LR
    }));
    class ra {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      DW(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const GR = RR.baf2RxAlarmAt.join(",");
        let yR = this.snapshot.boomAt;
        if (RR.baf2RxAlarmBoom) this.byReactor.delete(GR), yR = JR;
        else if (RR.baf2RxAlarmDamage <= 0) this.byReactor.delete(GR);
        else {
          var tR;
          this.byReactor.set(GR, {
            damage: RR.baf2RxAlarmDamage,
            secs: null !== (tR = RR.baf2RxAlarmSecs) && void 0 !== tR ? tR : null,
            hot: !0 === RR.baf2RxAlarmHot,
            receivedAt: JR
          })
        }
        this.JK(yR)
      }
      retain(RR) {
        let JR = !1;
        for (const GR of [...this.byReactor.keys()]) RR.has(GR) || (this.byReactor.delete(GR), JR = !0);
        JR && this.JK(this.snapshot.boomAt)
      }
      has(RR) {
        return this.byReactor.has(RR)
      }
      get() {
        return this.snapshot
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      JK(RR) {
        let JR = null;
        for (const GR of this.byReactor.values())(!JR || GR.damage > JR.damage) && (JR = GR);
        this.snapshot = {
          alarm: JR,
          boomAt: RR
        };
        for (const GR of this.listeners) GR()
      }
    }
    const ea = {
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

    function aa(RR) {
      return [RR[0], RR[1], RR[2]]
    }

    function La(RR) {
      return `${RR[0]},${RR[1]},${RR[2]}`
    }
    class na {
      constructor(RR) {
        if (this.plans = RR, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var RR;
            return {
              active: this.glows.flatMap((RR => {
                let {
                  record: JR
                } = RR;
                return JR ? [JR] : []
              })),
              log: [...null !== (RR = this.devLog) && void 0 !== RR ? RR : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var RR;
        return null !== (RR = this.devLog) && void 0 !== RR ? RR : []
      }
      check(RR, JR, GR) {
        const yR = new Set(JR.map((RR => La(RR.box.ctrl))));
        for (const ZR of function(RR, JR) {
            const GR = [],
              yR = new Map(RR);
            RR.clear();
            for (const tR of JR) {
              const JR = ie(tR.box.ctrl),
                uR = tR.formed ? tR.level : 0;
              RR.set(JR, uR), uR > 0 && 0 === yR.get(JR) && GR.push(tR)
            }
            return GR
          }(this.levels, this.plans.all())) yR.has(La(ZR.box.ctrl)) && this.show(RR, ZR, "on", GR);
        const tR = this.plans.lastFormed();
        if (null === tR || tR.receivedAt <= this.flashedAt) return null;
        this.flashedAt = tR.receivedAt;
        const uR = function(RR, JR) {
          var GR;
          const yR = ie(RR);
          return null !== (GR = JR.find((RR => ie(RR.box.ctrl) === yR))) && void 0 !== GR ? GR : null
        }(tR.ctrl, JR);
        return uR && this.show(RR, uR, "formed", GR), uR
      }
      fade(RR, JR) {
        0 !== this.glows.length && (this.glows = this.glows.filter((GR => {
          let {
            mesh: yR,
            glow: tR,
            startMs: uR,
            record: ZR
          } = GR;
          const qR = (JR - uR) / ea[tR].ms;
          return qR >= 1 ? (RR.disposeGameMesh(yR), ZR && (ZR.endMs = JR), !1) : (RR.setGameMesh(yR, {
            visibility: "formed" === tR ? 1 - qR : Math.sin(Math.PI * qR)
          }), !0)
        })))
      }
      dispose(RR) {
        for (const {
            mesh: GR
          }
          of this.glows) RR.disposeGameMesh(GR);
        this.glows = [], this.levels.clear();
        const JR = "undefined" !== typeof window ? window : null;
        (null === JR || void 0 === JR ? void 0 : JR.baf2Glows) === this.devAccessor && delete JR.baf2Glows
      }
      show(RR, JR, GR, yR) {
        const {
          lo: tR,
          hi: uR
        } = Bi(JR.box);
        let ZR = null;
        this.devLog && (ZR = {
          glow: GR,
          ctrl: aa(JR.box.ctrl),
          lo: aa(tR),
          hi: aa(uR),
          startMs: yR,
          endMs: null
        }, this.devLog.push(ZR), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(RR, GR, li(tR, uR, ea[GR].thick)),
          glow: GR,
          startMs: yR,
          record: ZR
        })
      }
      build(RR, JR, GR) {
        const yR = ee(RR, GR, {
          rgb: ea[JR].colour,
          alpha: 1
        });
        return RR.setGameMesh(yR, {
          visibility: 0
        }), yR
      }
    }
    const Ua = 1 / .6,
      Wa = {
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
        blendMode: gq.c.Standard,
        soft: !0
      },
      Aa = {
        ...Wa,
        size: [.25, .4],
        count: 2
      };

    function Ca(RR) {
      return {
        colours: [RR, RR],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: gq.c.Add,
        soft: !1
      }
    }
    const Xa = Ca([150, 225, 255]),
      Ma = Ca([185, 145, 255]),
      Ba = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function la(RR) {
      const JR = DJ[RR];
      return null === JR.fuelSlot || tG(JR) ? Ba.includes(RR) ? Ma : Xa : Wa
    }
    const pa = {
        kind: "smokePuff"
      },
      ga = [.2, .025, .2];

    function ba(RR, JR) {
      const [
        [GR, yR, tR],
        [uR, ZR, qR]
      ] = RR.colours;
      return {
        texture: RR.soft ? pa : "square_particle",
        hK: JR,
        minLifeTime: RR.life[0] / Ua,
        maxLifeTime: RR.life[1] / Ua,
        minEmitPower: RR.power[0] * Ua,
        maxEmitPower: RR.power[1] * Ua,
        minSize: RR.size[0],
        maxSize: RR.size[1],
        emitRate: 0,
        gravity: [0, RR.lift * Ua * Ua, 0],
        dir1: [-RR.spread, 1, -RR.spread],
        dir2: [RR.spread, 1, RR.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [GR, yR, tR, RR.alpha],
          maxColor: [uR, ZR, qR, RR.alpha]
        }, {
          timeFraction: 1,
          minColor: [GR, yR, tR, 0],
          maxColor: [uR, ZR, qR, 0]
        }],
        blendMode: RR.blendMode
      }
    }
    class va {
      constructor(RR) {
        this.fixed = RR, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(RR, JR, GR) {
        var yR;
        if (GR === this.lastFrame) return !1;
        this.lastFrame = GR;
        const tR = this.at;
        tR[0] = JR[0] + .5, tR[1] = JR[1] + 1.025, tR[2] = JR[2] + .5;
        const uR = null !== (yR = this.fixed) && void 0 !== yR ? yR : qR() ? Aa : Wa;
        let ZR = this.particles.get(uR);
        return ZR || (ZR = RR.createParticles(function(RR) {
          return ba(RR, Math.ceil(12 * RR.count * RR.life[1]) + RR.count)
        }(uR), {
          pos: tR,
          half: ga
        }), this.particles.set(uR, ZR)), ZR.moveTo(tR), ZR.emit(uR.count), !0
      }
      dispose() {
        for (const RR of this.particles.values()) RR.stop();
        this.particles.clear()
      }
    }
    class Oa {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(RR) {
        this.indexed = !0;
        for (const JR of gJ) {
          const GR = la(JR);
          for (let yR = 1; yR <= 4; yR++) {
            const tR = RR.blockNameToBlockId(`${JR}|meta|rot${yR}|Running`, !0);
            if (null === tR) continue;
            let uR = this.pufferIndexByStyle.get(GR);
            void 0 === uR && (uR = this.pufferList.push(new va(GR === Wa ? null : GR)) - 1, this.pufferIndexByStyle.set(GR, uR)), this.pufferIndexById[tR] = uR + 1
          }
        }
      }
      onAfterRender(RR, JR) {
        this.indexed || this.index(RR);
        const GR = performance.now(),
          yR = 0 === this.lastMs ? 0 : Math.min(GR - this.lastMs, 250) / 1e3;
        this.lastMs = GR, this.frame++, RR.particlesEnabled() ? (this.scan(RR, JR), this.puff(RR, yR)) : this.sources = []
      }
      dispose() {
        for (const RR of this.pufferList) RR.dispose();
        this.sources = [], this.found = []
      }
      scan(RR, JR) {
        0 === this.scanRow && (this.origin = [Math.floor(JR[0]) - 12, Math.floor(JR[1]) - 6, Math.floor(JR[2]) - 12]);
        const GR = Math.min(this.scanRow + 16, 325),
          [yR, tR, uR] = this.origin,
          ZR = this.hits;
        ZR.length = 0;
        for (let qR = this.scanRow; qR < GR; qR++) {
          const JR = yR + qR % 25,
            GR = tR + Math.floor(qR / 25);
          RR.scanBlocks(JR, GR, uR, JR + 1, GR + 1, uR + 25, this.pufferIndexById, ZR)
        }
        for (let qR = 0; qR < ZR.length; qR += 4) {
          const RR = ZR[qR + 3];
          this.found.push({
            pos: [ZR[qR], ZR[qR + 1], ZR[qR + 2]],
            Vq: RR,
            puffer: this.pufferList[this.pufferIndexById[RR] - 1]
          })
        }
        this.scanRow = GR, 325 === GR && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(RR, JR) {
        const GR = this.sources.length;
        if (0 !== GR) {
          this.budget = Math.min(this.budget + Math.min(GR / 1.2, 12) * JR, 2);
          for (let JR = 0; JR < GR && this.budget >= 1; JR++) {
            const JR = this.sources[this.cursor % GR];
            this.cursor = (this.cursor + 1) % GR, RR.getBlockId(JR.pos[0], JR.pos[1], JR.pos[2]) === JR.Vq && (JR.puffer.puff(RR, JR.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const xa = {
        ...Ca([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      Na = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function Da(RR) {
      return 0 === RR.spots.length ? 0 : Math.min(1 * RR.level, 4)
    }

    function Ha(RR) {
      return 0 === RR.glass.length ? 0 : Math.min(.75 * RR.level, 3)
    }

    function oa(RR) {
      return `${RR.ctrl.join(",")}:${RR.rot}:${RR.cu},${RR.cv}:${RR.w},${RR.h},${RR.d}`
    }

    function ca(RR, JR) {
      const GR = JR.w - 2,
        yR = JR.h - 2,
        tR = JR.d - 2,
        uR = [];
      for (let ZR = 0; ZR < GR * yR * tR; ZR++) {
        const qR = ZR % GR,
          iR = Math.floor(ZR / GR) % tR,
          fR = Math.floor(ZR / (GR * tR));
        if (qR > 0 && qR < GR - 1 && iR > 0 && iR < tR - 1 && fR > 0 && fR < yR - 1) continue;
        const VR = sG(JR, Gy(JR, ZR)),
          KR = xe(RR, VR);
        if (null !== KR && "Fuel Rod" === OG(KR))
          for (const JR of Na) {
            const GR = [VR[0] + JR[0], VR[1] + JR[1], VR[2] + JR[2]];
            Ia(RR, GR) && uR.push(ma(GR, JR))
          }
      }
      return uR
    }

    function Pa(RR, JR) {
      const {
        lo: GR,
        hi: yR
      } = Bi(JR), tR = [];
      for (let uR = GR[0]; uR < yR[0]; uR++)
        for (let JR = GR[1]; JR < yR[1]; JR++) {
          const ZR = uR === GR[0] || uR === yR[0] - 1 || JR === GR[1] || JR === yR[1] - 1 ? 1 : Math.max(1, yR[2] - 1 - GR[2]);
          for (let qR = GR[2]; qR < yR[2]; qR += ZR) {
            const ZR = [uR, JR, qR];
            if (!Ia(RR, ZR)) continue;
            const iR = uR === GR[0] ? Na[1] : uR === yR[0] - 1 ? Na[0] : qR === GR[2] ? Na[5] : qR === yR[2] - 1 ? Na[4] : JR === GR[1] ? Na[3] : Na[2];
            tR.push(ma(ZR, iR))
          }
        }
      return tR
    }

    function Ia(RR, JR) {
      const GR = xe(RR, JR);
      return null !== GR && "Reactor Glass" === OG(GR)
    }

    function ma(RR, JR) {
      return [
        [RR[0] + .5 + .55 * JR[0], RR[1] + .5 + .55 * JR[1], RR[2] + .5 + .55 * JR[2]],
        [0 === JR[0] ? .4 : .02, 0 === JR[1] ? .4 : .02, 0 === JR[2] ? .4 : .02]
      ]
    }
    class za {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(RR, JR, GR, yR) {
        const tR = [],
          uR = new Set;
        for (const fR of JR) {
          var ZR, qR, iR;
          const {
            box: JR
          } = fR;
          if ("reactor" !== fR.kind || fR.level <= 0 || (JR.ctrl[0] - GR[0]) ** 2 + (JR.ctrl[1] - GR[1]) ** 2 + (JR.ctrl[2] - GR[2]) ** 2 > 576) continue;
          const VR = oa(JR);
          uR.add(VR);
          let KR = this.spots.get(VR);
          if ((!KR || yR - KR.at > 3e3) && (KR = {
              at: yR,
              spots: ca(RR, JR),
              glass: Pa(RR, JR)
            }, this.spots.set(VR, KR)), 0 === KR.spots.length && 0 === KR.glass.length) continue;
          const wR = this.sparking.find((RR => RR.key === VR));
          tR.push({
            key: VR,
            level: fR.level,
            spots: KR.spots,
            glass: KR.glass,
            budget: null !== (ZR = null === wR || void 0 === wR ? void 0 : wR.budget) && void 0 !== ZR ? ZR : 0,
            cursor: null !== (qR = null === wR || void 0 === wR ? void 0 : wR.cursor) && void 0 !== qR ? qR : 0,
            glassBudget: null !== (iR = null === wR || void 0 === wR ? void 0 : wR.glassBudget) && void 0 !== iR ? iR : 0
          })
        }
        for (const fR of this.spots.keys()) uR.has(fR) || this.spots.delete(fR);
        this.sparking = tR
      }
      emit(RR, JR, GR) {
        var yR;
        if (0 === this.sparking.length || !RR.particlesEnabled() || GR === this.lastFrame) return;
        this.lastFrame = GR;
        let tR = 0,
          uR = 0;
        for (const eR of this.sparking) tR += Da(eR), uR += Ha(eR);
        const ZR = tR > 8 ? 8 / tR : 1,
          qR = uR > 6 ? 6 / uR : 1;
        let iR, fR = null,
          VR = null;
        for (const eR of this.sparking) eR.budget = Math.min(eR.budget + Da(eR) * ZR * JR, 2), eR.budget >= 1 && (!fR || eR.budget > fR.budget) && (fR = eR), eR.glassBudget = Math.min(eR.glassBudget + Ha(eR) * qR * JR, 2), eR.glassBudget >= 1 && (!VR || eR.glassBudget > VR.glassBudget) && (VR = eR);
        if (fR) fR.budget--, iR = fR.spots[fR.cursor++ % fR.spots.length];
        else {
          if (!VR) return;
          VR.glassBudget--, iR = VR.glass[Math.floor(Math.random() * VR.glass.length)]
        }
        const [KR, wR] = iR, rR = null !== (yR = this.emitter) && void 0 !== yR ? yR : this.create(RR, KR, wR);
        rR.moveTo(KR, wR), rR.emit(xa.count)
      }
      dispose() {
        var RR;
        null === (RR = this.emitter) || void 0 === RR || RR.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(RR, JR, GR) {
        const yR = Math.ceil(14 * xa.count * xa.life[1]) + xa.count;
        return this.emitter = RR.createParticles(ba(xa, yR), {
          pos: JR,
          half: GR
        }), this.emitter
      }
    }
    const Sa = [2, 3.2],
      ja = 1 / 3,
      da = 1 / .6,
      Ea = {
        texture: pa,
        hK: Math.ceil(18 * Sa[1]) + 4,
        minLifeTime: Sa[0] / da,
        maxLifeTime: Sa[1] / da,
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
        blendMode: gq.c.Standard
      };
    class Ya {
      constructor(RR) {
        this.plans = RR, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new za, this.frame = 0, this.outline = new na(RR)
      }
      onAfterRender(RR, JR, GR) {
        const yR = performance.now(),
          tR = 0 === this.lastMs ? 0 : Math.min(yR - this.lastMs, 250) / 1e3;
        if (this.lastMs = yR, this.outline.fade(RR, yR), this.puff(RR, tR, GR), this.sparks.emit(RR, tR, this.frame++), yR - this.lastCheckMs < 150) return;
        this.lastCheckMs = yR;
        const uR = this.plans.all().filter((RR => RR.formed && ka(RR.box.ctrl, GR) <= 4096));
        this.plumes = uR.filter((RR => "reactor" === RR.kind && RR.level > 0)).map((RR => ({
          box: RR.box,
          level: RR.level
        }))), this.updateHums(RR, JR, uR, GR), this.sparks.update(RR, uR, GR, yR), this.chimeFormed(RR, JR, uR, yR)
      }
      dispose(RR) {
        var JR;
        this.outline.dispose(RR), null === (JR = this.steam) || void 0 === JR || JR.dispose(), this.steam = null, this.sparks.dispose();
        for (const GR of this.hums.values()) GR.stop();
        this.hums.clear()
      }
      chimeFormed(RR, JR, GR, yR) {
        const tR = this.outline.check(RR, GR, yR);
        tR && RR.playSound(JR, "exp_levelup", .6, 1, {
          TG: [tR.box.ctrl[0] + .5, tR.box.ctrl[1], tR.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(RR, JR, GR) {
        const yR = this.plumes;
        if (0 === yR.length || !RR.particlesEnabled()) return void(this.plumeBudget = 0);
        const tR = yR.reduce(((RR, JR) => RR + 3 * JR.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + tR * JR, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let uR = this.plumeCursor % (tR / 3);
        this.plumeCursor++;
        let ZR = yR[0];
        for (const KR of yR) {
          if (uR < KR.level) {
            ZR = KR;
            break
          }
          uR -= KR.level
        }
        const {
          lo: qR,
          hi: iR
        } = Bi(ZR.box);
        if (function(RR, JR, GR) {
            const yR = Math.max(RR[0] - GR[0], 0, GR[0] - JR[0]),
              tR = Math.max(RR[2] - GR[2], 0, GR[2] - JR[2]);
            return Math.hypot(yR, GR[1] - JR[1], tR)
          }(qR, iR, GR) < 6 && Math.random() > ja) return;
        const fR = [(qR[0] + iR[0]) / 2, iR[1] + .05, (qR[2] + iR[2]) / 2],
          VR = [(iR[0] - qR[0]) / 2 - .5, .05, (iR[2] - qR[2]) / 2 - .5];
        this.steam ??= RR.createParticles(Ea, {
          pos: fR,
          half: VR
        }), this.steam.moveTo(fR, VR), this.steam.emit(1)
      }
      updateHums(RR, JR, GR, yR) {
        const tR = new Map;
        for (const ZR of GR) "reactor" === ZR.kind && ZR.level > 0 && ka(ZR.box.ctrl, yR) <= 576 && tR.set(`${uR=ZR.box.ctrl,`${uR[0]},${uR[1]},${uR[2]}`}:${ZR.level}`, ZR);
        var uR;
        for (const [ZR, qR] of this.hums) tR.has(ZR) || (qR.stop(), this.hums.delete(ZR));
        for (const [ZR, qR] of tR) {
          if (this.hums.has(ZR)) continue;
          const {
            lo: GR,
            hi: yR
          } = Bi(qR.box), tR = [(GR[0] + yR[0]) / 2, GR[1], (GR[2] + yR[2]) / 2], uR = RR.playSound(JR, "rocketEngineLoop", .08 + .06 * qR.level, .55, {
            TG: tR,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          uR && this.hums.set(ZR, uR)
        }
      }
    }

    function ka(RR, JR) {
      return (RR[0] - JR[0]) ** 2 + (RR[1] - JR[1]) ** 2 + (RR[2] - JR[2]) ** 2
    }
    class Qa {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      DW(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const yR = [RR.baf2BombAt[0], RR.baf2BombAt[1], RR.baf2BombAt[2]],
          tR = RR.baf2BombR;
        if (RR.baf2BombBoom) {
          const RR = Math.hypot(JR[0] - yR[0], JR[1] - yR[1], JR[2] - yR[2]);
          this.JK({
            fuse: null,
            blast: {
              at: yR,
              r: tR,
              receivedAt: GR,
              distance: RR,
              flash: RR <= 3 * tR
            }
          })
        } else this.JK({
          ...this.snapshot,
          fuse: RR.baf2BombMs > 0 ? {
            at: yR,
            r: tR,
            endsAt: GR + RR.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      JK(RR) {
        this.snapshot = RR;
        for (const JR of this.listeners) JR()
      }
    }
    const Fa = (0, yR.memo)((function(RR) {
      var JR;
      let {
        store: GR
      } = RR;
      const {
        t: tR
      } = (0, lt.A)(), [uR, ZR] = (0, yR.useState)((() => GR.get())), [qR, iR] = (0, yR.useState)((() => performance.now()));
      (0, yR.useEffect)((() => (ZR(GR.get()), GR.subscribe((() => {
        ZR(GR.get()), iR(performance.now())
      })))), [GR]);
      const {
        fuse: fR,
        blast: VR
      } = uR;
      (0, yR.useEffect)((() => {
        if (!fR) return;
        const RR = setInterval((() => {
          iR(performance.now())
        }), 250);
        return () => {
          clearInterval(RR)
        }
      }), [fR]);
      const [KR, wR] = (0, yR.useState)(!1);
      (0, yR.useEffect)((() => {
        if (null === VR || void 0 === VR || !VR.flash) return;
        wR(!0);
        const RR = setTimeout((() => {
          wR(!1)
        }), 2500);
        return () => {
          clearTimeout(RR)
        }
      }), [VR]);
      const rR = fR ? function(RR, JR) {
        return RR.endsAt <= JR ? 0 : Math.ceil((RR.endsAt - JR) / 1e3)
      }(fR, qR) : 0;
      return (0, Uu.jsxs)(Uu.Fragment, {
        children: [rR > 0 && (0, Uu.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: tR("buildAFactory2Game:bombCountdown", {
            amount: String(rR),
            radius: String(null !== (JR = null === fR || void 0 === fR ? void 0 : fR.r) && void 0 !== JR ? JR : 0)
          })
        }), KR && (0, Uu.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Ta(RR) {
      const JR = Math.min(4, Math.max(1, RR / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * RR / 4)),
        capSpread: Math.min(5 * RR / 8, 24 * JR),
        capThick: 6 * JR,
        stemHalfWidth: 3 * JR,
        puffScale: JR
      }
    }
    class sa {
      constructor() {
        this.Qq = !1
      }
      hold(RR) {
        RR.getCameraFar() < 1e3 && (RR.setCameraFar(1e3), this.Qq = !0)
      }
      release(RR) {
        this.Qq && (this.Qq = !1, RR.setCameraFar(null))
      }
    }
    const ha = 1 / .6,
      RL = [.2, .1, .2],
      JL = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      GL = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: gq.c.Standard,
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
      yL = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: gq.c.Standard,
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
      tL = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: gq.c.Standard,
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
      uL = {
        texture: pa,
        hK: Math.ceil(120) + 4,
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
        blendMode: gq.c.Add
      };
    class ZL {
      constructor(RR) {
        this.store = RR, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new sa, this.timers = []
      }
      onAfterRender(RR, JR) {
        const GR = performance.now(),
          yR = 0 === this.lastMs ? 0 : Math.min(GR - this.lastMs, 250) / 1e3;
        this.lastMs = GR;
        const {
          fuse: tR,
          blast: uR
        } = this.store.get();
        null !== uR && uR !== this.shownBlast && (this.shownBlast = uR, this.startBlast(RR, JR, uR, GR));
        const ZR = RR.particlesEnabled();
        null !== tR && tR.endsAt > GR && ZR ? this.emitBeacon(RR, tR, yR, GR) : this.beaconBudget = 0, null !== this.cloud && (GR - this.cloud.startMs > 33e3 ? this.disposeCloud(RR) : (this.far.hold(RR), ZR && this.emitCloud(RR, yR, GR)))
      }
      dispose(RR) {
        var JR;
        null === (JR = this.beacon) || void 0 === JR || JR.dispose(), this.beacon = null, this.disposeCloud(RR);
        for (const GR of this.timers) clearTimeout(GR);
        this.timers.length = 0
      }
      emitBeacon(RR, JR, GR, yR) {
        const tR = JR.endsAt - yR < 5e3 ? 350 : 1e3,
          uR = .5 + .5 * Math.sin(2 * Math.PI * yR / tR);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * uR * GR, 4), this.beaconBudget < 1) return;
        const ZR = Math.floor(this.beaconBudget);
        this.beaconBudget -= ZR;
        const [qR, iR, fR] = JR.at, VR = [qR + .5, iR + 1.1, fR + .5];
        this.beacon ??= RR.createParticles(uL, {
          pos: VR,
          half: RL
        }), this.beacon.moveTo(VR), this.beacon.emit(ZR)
      }
      startBlast(RR, JR, GR, yR) {
        var tR;
        null === (tR = this.beacon) || void 0 === tR || tR.dispose(), this.beacon = null, this.disposeCloud(RR);
        const uR = (0, lq.isMobile)() ? .5 : 1;
        this.streams = [GL, yL, tL].map((RR => {
          const JR = Math.round(RR.count * uR);
          return {
            spec: RR,
            particles: null,
            rate: JR / ((RR.toMs - RR.fromMs) / 1e3),
            budget: 0,
            left: JR
          }
        })), this.cloud = {
          blast: GR,
          startMs: yR
        };
        const ZR = Math.max(.25, 1 - GR.distance / (6 * GR.r)),
          qR = GR.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [GR, yR, tR] of JL) iL(RR, JR, GR, ZR * yR, tR)
        }), qR))
      }
      emitCloud(RR, JR, GR) {
        const {
          blast: yR,
          startMs: tR
        } = this.cloud, uR = GR - tR, [ZR, qR, iR] = yR.at, fR = Ta(yR.r);
        for (const VR of this.streams) {
          const {
            spec: GR
          } = VR;
          if (VR.left <= 0 || uR < GR.fromMs) continue;
          VR.budget += VR.rate * JR;
          const tR = Math.min(Math.floor(VR.budget), VR.left);
          if (tR < 1) continue;
          VR.budget -= tR, VR.left -= tR;
          const KR = VR.particles ??= this.createStream(RR, GR, yR);
          if (GR === GL) {
            const RR = fR.stemHalfWidth;
            KR.moveTo([ZR, qR + 1, iR], [RR, 1, RR])
          } else if (GR === yL) {
            const RR = fR.capSpread * Math.min(1, (uR - GR.fromMs) / 3e3),
              JR = Math.sqrt(Math.random()),
              yR = 2 * Math.random() * Math.PI,
              tR = Math.cos(yR) * JR,
              VR = Math.sin(yR) * JR,
              wR = ZR + tR * RR,
              rR = iR + VR * RR,
              eR = fR.capThick,
              aR = qR + fR.capHeight + eR * (1 - JR * JR) * 2;
            KR.setDirections([.7 * tR, .05, .7 * VR], [tR, .2, VR]), KR.moveTo([wR, aR, rR], [eR, eR, eR])
          } else {
            this.ringAngle += 2.39996;
            const RR = Math.cos(this.ringAngle),
              JR = Math.sin(this.ringAngle);
            KR.setDirections([RR, .05, JR], [RR, .1, JR]), KR.moveTo([ZR + 2 * RR, qR + .5, iR + 2 * JR], [0, .5, 0])
          }
          KR.emit(tR)
        }
      }
      createStream(RR, JR, GR) {
        const {
          r: yR
        } = GR, tR = Math.max(JR.life[0], yR / 25), uR = JR === tL ? [.9 * tR, tR] : JR.life, ZR = Ta(yR), qR = JR === tL ? 1 : ZR.puffScale, iR = {
          texture: pa,
          hK: JR.count + 4,
          minLifeTime: uR[0] / ha,
          maxLifeTime: uR[1] / ha,
          minSize: JR.size[0] * qR,
          maxSize: JR.size[1] * qR,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, JR.gravity * ha * ha, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: JR.from[0],
            maxColor: JR.from[1]
          }, {
            timeFraction: .6,
            minColor: qL(JR.from[0], JR.to[0]),
            maxColor: qL(JR.from[1], JR.to[1])
          }, {
            timeFraction: 1,
            minColor: JR.to[0],
            maxColor: JR.to[1]
          }],
          blendMode: JR.blend
        };
        if (JR === GL) {
          const RR = ZR.capHeight / ((uR[0] + uR[1]) / 2);
          iR.minEmitPower = .9 * RR * ha, iR.maxEmitPower = 1.05 * RR * ha, iR.dir1 = [-.1, 1, -.1], iR.dir2 = [.1, 1, .1]
        } else JR === yL ? (iR.minEmitPower = 1.2, iR.maxEmitPower = 2, iR.dir1 = [-1, .05, -1], iR.dir2 = [1, .2, 1]) : (iR.minEmitPower = 39.583333333333336, iR.maxEmitPower = 41.66666666666667, iR.dir1 = [1, 0, 0], iR.dir2 = [1, 0, 0]);
        return RR.createParticles(iR, {
          pos: GR.at
        })
      }
      disposeCloud(RR) {
        for (const GR of this.streams) {
          var JR;
          null === (JR = GR.particles) || void 0 === JR || JR.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(RR)
      }
    }

    function qL(RR, JR) {
      return [(RR[0] + JR[0]) / 2, (RR[1] + JR[1]) / 2, (RR[2] + JR[2]) / 2, .75 * RR[3]]
    }

    function iL(RR, JR, GR, yR, tR) {
      try {
        RR.playSound(JR, GR, yR, tR)
      } catch (uR) {
        console.error(uR)
      }
    }
    const fL = {
        hK: 720,
        perS: 100
      },
      VL = {
        hK: 320,
        perS: 44
      };
    class KL {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(RR, JR) {
        this.zone = {
          centre: [...RR.centre],
          r: RR.r,
          band: RR.band ? [RR.band[0], RR.band[1]] : void 0
        }, this.endsAt = JR
      }
      stop() {
        this.zone = null
      }
      DW(RR, JR) {
        const {
          baf2FalloutMs: GR,
          baf2FalloutAt: yR,
          baf2FalloutR: tR,
          baf2FalloutY: uR
        } = RR;
        GR > 0 && yR && void 0 !== tR ? this.start({
          centre: yR,
          r: tR,
          band: uR
        }, JR + GR) : this.stop()
      }
      perS(RR, JR, GR) {
        const yR = this.zone;
        if (!yR) return 0;
        const tR = this.endsAt - RR;
        return tR <= 0 ? (this.zone = null, 0) : yR.band && (JR[1] < yR.band[0] || JR[1] > yR.band[1]) || Math.hypot(JR[0] - yR.centre[0], JR[2] - yR.centre[2]) > yR.r ? 0 : GR.perS * Math.min(1, tR / 5e3)
      }
    }
    const wL = [5, 7],
      rL = [24, 8, 24],
      eL = .5,
      aL = 1 / .6,
      LL = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class nL {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lq.isMobile)();
        this.state = new KL, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(RR) {
          return RR ? VL : fL
        }(RR)
      }
      startFallout(RR, JR) {
        this.state.start(RR, JR)
      }
      stopFallout() {
        this.state.stop()
      }
      DW(RR) {
        this.state.DW(RR, performance.now())
      }
      onAfterRender(RR, JR) {
        var GR;
        const yR = performance.now(),
          tR = 0 === this.lastMs ? 0 : Math.min(yR - this.lastMs, 250) / 1e3;
        this.lastMs = yR;
        const uR = this.state.perS(yR, JR, this.tier);
        if (uR <= 0 || !RR.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + uR * tR, uR / 4);
        const ZR = Math.floor(this.budget);
        if (ZR < 1) return;
        this.budget -= ZR;
        const qR = this.at;
        qR[0] = JR[0], qR[1] = JR[1] + 12, qR[2] = JR[2];
        const iR = null !== (GR = this.systems) && void 0 !== GR ? GR : this.create(RR, qR),
          fR = this.amounts;
        fR[0] = 0, fR[1] = 0;
        for (let VR = 0; VR < ZR; VR++) fR[Math.random() < .3 ? 1 : 0]++;
        for (let VR = 0; VR < iR.length; VR++) fR[VR] > 0 && (iR[VR].moveTo(qR, rL), iR[VR].emit(fR[VR]))
      }
      dispose() {
        for (const JR of null !== (RR = this.systems) && void 0 !== RR ? RR : []) {
          var RR;
          JR.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(RR, JR) {
        return this.systems = LL.map((GR => {
          let {
            rgba: [yR, tR, uR, ZR],
            share: qR
          } = GR;
          const iR = {
            texture: "square_particle",
            hK: Math.ceil(this.tier.hK * qR),
            minLifeTime: wL[0] / aL,
            maxLifeTime: wL[1] / aL,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [eL, -1, eL],
            colorGradients: [{
              timeFraction: 0,
              minColor: [yR, tR, uR, 0]
            }, {
              timeFraction: .15,
              minColor: [yR, tR, uR, ZR]
            }, {
              timeFraction: .8,
              minColor: [yR, tR, uR, ZR]
            }, {
              timeFraction: 1,
              minColor: [yR, tR, uR, 0]
            }],
            blendMode: gq.c.Standard
          };
          return RR.createParticles(iR, {
            pos: JR,
            half: rL
          })
        })), this.systems
      }
    }
    const UL = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function WL(RR) {
      const JR = /\|rot(\d)/.exec(RR);
      return UL[JR ? Number(JR[1]) : 1]
    }
    var AL = GR(671),
      CL = GR(39630);
    const XL = new Set(AL.l);

    function ML(RR) {
      if (-2 !== RR.count) return null;
      const JR = jR(RR.item);
      return null !== JR && XL.has(JR) ? JR : null
    }

    function BL(RR) {
      const {
        width: JR,
        height: GR
      } = (0, CL.d)(RR).hitBoxDimensions;
      return .55 / Math.max(JR, GR)
    }

    function lL(RR, JR, GR) {
      if (!GR) return !1;
      const yR = RR[0] + .5 - JR[0],
        tR = RR[1] + .5 - JR[1],
        uR = RR[2] + .5 - JR[2];
      return yR * yR + tR * tR + uR * uR <= 576
    }

    function pL(RR, JR) {
      return Math.atan2(RR[0], RR[2]) + Math.PI + JR
    }

    function gL(RR, JR) {
      const GR = 2 * Math.PI;
      return (RR + GR * JR / 1e4) % GR
    }
    class bL {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = RR, this.now = JR, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = RR.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(RR, JR) {
        if (0 === this.farms.size) return;
        const GR = this.now(),
          yR = Number.isNaN(this.frameMs) ? 0 : Math.min(GR - this.frameMs, 100);
        this.frameMs = GR, GR - this.checkedMs >= 1e3 && (this.checkedMs = GR, this.check(RR, JR));
        for (const tR of this.farms.values()) tR.shown && tR.running && null !== tR.model && yR > 0 && (tR.spin = gL(tR.spin, yR), tR.model.setPose(tR.feet, pL(tR.front, tR.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const RR of this.farms.values()) this.drop(RR);
        this.farms.clear()
      }
      sync() {
        const RR = new Set;
        for (const JR of this.labels.list()) {
          const GR = ML(JR);
          if (null === GR) continue;
          RR.add(JR.key);
          const yR = this.farms.get(JR.key);
          if ((null === yR || void 0 === yR ? void 0 : yR.mob) === GR) continue;
          yR && this.drop(yR);
          const [tR, uR, ZR] = JR.pos;
          this.farms.set(JR.key, {
            pos: JR.pos,
            feet: [tR + .5, uR + 1, ZR + .5],
            mob: GR,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [JR, GR] of this.farms) RR.has(JR) || (this.drop(GR), this.farms.delete(JR));
        this.checkedMs = -1 / 0
      }
      check(RR, JR) {
        for (const GR of this.farms.values()) {
          const [yR, tR, uR] = GR.pos, ZR = xe(RR, GR.pos);
          null !== ZR && OG(ZR) === HR && lL(GR.pos, JR, "Air" === xe(RR, [yR, tR + 1, uR])) ? (GR.running = ZR.endsWith("|Running"), GR.front = WL(ZR), null === GR.model && (GR.model = RR.createMobModel(GR.mob, BL(GR.mob)), null === GR.model) || (GR.model.setPose(GR.feet, pL(GR.front, GR.spin)), GR.shown || (GR.model.setVisible(!0), GR.shown = !0))) : (GR.shown && null !== GR.model && GR.model.setVisible(!1), GR.shown = !1)
        }
      }
      drop(RR) {
        var JR;
        null === (JR = RR.model) || void 0 === JR || JR.dispose(), RR.model = null, RR.shown = !1
      }
    }
    class vL {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(RR) {
        var JR;
        this.island = RR.baf2ColIsland, this.islandSite = (JR = RR.baf2ColSite) && 8 === JR.length ? {
          spawnXZ: [JR[0], JR[1]],
          coreXZ: [JR[2], JR[3]],
          minXZ: [JR[4], JR[5]],
          maxXZ: [JR[6], JR[7]]
        } : null, this.views = RR.baf2ColList.map((RR => ({
          entry: tt(RR)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(RR) {
        this.status = RR, this.emit()
      }
      onOpen(RR) {
        this.openHeld = RR
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
        return this.views.map((RR => RR.entry))
      }
      entryAtRoot(RR) {
        var JR;
        return null === (JR = this.views.find((JR => {
          let {
            entry: GR
          } = JR;
          return GR.focus[0] === RR[0] && GR.focus[1] === RR[1] + 1 && GR.focus[2] === RR[2]
        }))) || void 0 === JR ? void 0 : JR.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(RR, JR) {
        return Ni(this.entries(), RR, JR)
      }
      lookSource() {
        return {
          handles: RR => wy(RR) >= 0 || ry(RR),
          line: (RR, JR) => this.lookLine(RR, JR),
          version: () => this.beamsVersion
        }
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const RR of this.listeners) RR()
      }
    }
    const OL = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((RR => RR / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((RR => [RR, RR + 1, RR + 2, RR, RR + 2, RR + 3]))
    };

    function xL(RR, JR, GR, yR, tR, uR, ZR) {
      let qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const iR = Math.cos(qR),
        fR = Math.sin(qR),
        VR = RR.positions.length / 3,
        {
          positions: KR,
          indices: wR
        } = OL;
      for (let rR = 0; rR < KR.length; rR += 3) {
        const qR = KR[rR] * tR,
          VR = KR[rR + 2] * ZR;
        RR.positions.push(JR + qR * iR + VR * fR, GR + KR[rR + 1] * uR, yR - qR * fR + VR * iR)
      }
      for (const rR of wR) RR.indices.push(VR + rR)
    }

    function NL(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return JR < 1 ? {
        rgb: RR,
        alpha: JR
      } : {
        rgb: RR,
        alpha: 1,
        opaque: !0
      }
    }
    class DL {
      constructor(RR, JR) {
        this.style = RR, this.perSource = JR, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(RR) {
        this.sources = RR, 0 === RR.length && (this.budget = 0)
      }
      gK(RR, JR, GR) {
        const yR = this.sources.length;
        if (0 !== yR) {
          var tR, uR;
          this.budget = Math.min(this.budget + (tR = yR, uR = this.perSource, Math.min(tR * uR, ki) * JR), 2);
          for (let JR = 0; JR < yR && this.budget >= 1; JR++) {
            const JR = this.sources[this.cursor % yR];
            this.cursor = (this.cursor + 1) % yR;
            if (!(Math.max(Math.abs(JR.x - GR[0]), Math.abs(JR.y - GR[1]), Math.abs(JR.z - GR[2])) > 32)) return this.puff(RR, JR), void this.budget--
          }
        }
      }
      dispose() {
        var RR;
        null === (RR = this.particles) || void 0 === RR || RR.dispose(), this.particles = null, this.sources = []
      }
      puff(RR, JR) {
        let {
          x: GR,
          y: yR,
          z: tR,
          h: uR,
          faces: ZR
        } = JR;
        const qR = function(RR, JR, GR, yR, tR) {
            const [uR, ZR, qR] = tR[Math.floor(Math.random() * tR.length)], iR = .04, fR = (RR, JR, GR) => RR > 0 ? JR + GR + iR : RR < 0 ? JR - iR : JR + .1, VR = (RR, JR, GR) => RR > 0 ? JR + GR + iR : RR < 0 ? JR - iR : JR + GR - .1, KR = [fR(uR, RR, 1), fR(ZR, JR, yR), fR(qR, GR, 1)], wR = [VR(uR, RR, 1), VR(ZR, JR, yR), VR(qR, GR, 1)];
            return {
              pos: [(KR[0] + wR[0]) / 2, (KR[1] + wR[1]) / 2, (KR[2] + wR[2]) / 2],
              half: [(wR[0] - KR[0]) / 2, (wR[1] - KR[1]) / 2, (wR[2] - KR[2]) / 2],
              out: [uR, ZR, qR]
            }
          }(GR, yR, tR, uR, ZR),
          {
            style: iR
          } = this,
          fR = this.particles ??= RR.createParticles(ba(iR, Math.ceil(iR.count * ki * iR.life[1]) + 4), qR);
        fR.moveTo(qR.pos, qR.half);
        const [VR, KR, wR] = qR.out, rR = iR.spread;
        fR.setDirections([VR - rR, .6 + KR, wR - rR], [VR + rR, 1 + KR, wR + rR]), fR.emit(iR.count)
      }
    }
    const HL = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class oL {
      constructor() {
        this.green = new DL(Fi.green, Ei), this.pink = new DL(Fi.pink, Yi), this.colliders = [], this.lastMs = 0
      }
      setSources(RR) {
        this.colliders = RR;
        const JR = [],
          GR = [];
        for (const yR of RR) {
          const [RR, tR, uR] = yR.focus;
          JR.push({
            x: RR,
            y: tR - 1,
            z: uR,
            h: 2,
            faces: HL
          });
          for (let JR = 0; JR < 4; JR++) {
            if (!yR.live[JR]) continue;
            const [RR, tR, uR] = Ly(yR.focus, JR, Zy.LASER_D), [ZR, , qR] = ay[JR], iR = HL.filter((RR => RR[0] !== ZR || RR[2] !== qR || 0 !== RR[1]));
            GR.push({
              x: RR,
              y: tR,
              z: uR,
              h: 1,
              faces: iR
            })
          }
        }
        this.green.setSources(JR), this.pink.setSources(GR)
      }
      onAfterRender(RR) {
        const JR = performance.now(),
          GR = 0 === this.lastMs ? 0 : Math.min(JR - this.lastMs, 250) / 1e3;
        if (this.lastMs = JR, 0 === this.colliders.length || !RR.particlesEnabled()) return;
        const yR = RR.getCameraPosition();
        this.green.gK(RR, GR, yR), this.pink.gK(RR, GR, yR)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const cL = 1.04,
      PL = NL([1, 120 / 255, 220 / 255]),
      IL = NL([1, .25, .25], .35);
    class mL {
      constructor(RR) {
        this.store = RR, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new oL
      }
      onAfterRender(RR) {
        this.store.version() !== this.builtVersion && this.rebuild(RR);
        const JR = performance.now();
        for (const GR of this.beams) {
          const yR = 1 + .35 * Math.sin(JR / 700 * Math.PI * 2 + GR.phase);
          RR.setGameMesh(GR.mesh, {
            scale: [GR.alongX ? 1 : yR, yR, GR.alongX ? yR : 1]
          })
        }
        this.glow.onAfterRender(RR)
      }
      dispose(RR) {
        this.clear(RR), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(RR) {
        this.clear(RR), this.builtVersion = this.store.version();
        const JR = [];
        for (const {
            entry: GR
          }
          of this.store.colliders()) GR.on && GR.live.some(Boolean) && (this.addBeams(RR, GR), JR.push(GR)), GR.blockers.length > 0 && this.addMarkers(RR, GR);
        this.glow.setSources(JR)
      }
      addBeams(RR, JR) {
        const [GR, yR, tR] = JR.focus, uR = di - .25, ZR = (.25 + di) / 2;
        for (let qR = 0; qR < 4; qR++) {
          if (!JR.live[qR]) continue;
          const [iR, , fR] = ay[qR], VR = 0 !== iR, KR = {
            positions: [],
            indices: []
          };
          xL(KR, 0, 0, 0, VR ? uR : .2, .2, VR ? .2 : uR);
          const wR = [GR + .5 + iR * ZR, yR + .5, tR + .5 + fR * ZR],
            rR = RR.createGameMesh(KR, PL, wR);
          this.meshes.push(rR), this.beams.push({
            mesh: rR,
            alongX: VR,
            phase: qR * Math.PI / 2
          })
        }
      }
      addMarkers(RR, JR) {
        const GR = JR.blockers[0],
          yR = {
            positions: [],
            indices: []
          };
        for (const [tR, uR, ZR] of JR.blockers) xL(yR, tR - GR[0] + .5, uR - GR[1] + .5, ZR - GR[2] + .5, cL, cL, cL);
        this.meshes.push(RR.createGameMesh(yR, IL, GR))
      }
      clear(RR) {
        for (const JR of this.meshes) RR.disposeGameMesh(JR);
        this.meshes = [], this.beams = []
      }
    }
    const zL = [.56, .83, 1],
      SL = [1, .73, .08],
      jL = [1, .25, .25],
      dL = [.85, .85, .85],
      EL = [.3, .45, .6];

    function YL(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const ZR = tR / 2,
        qR = tR + uR;
      for (const iR of [-ZR, ZR])
        for (const tR of [-ZR, ZR]) xL(RR, JR, GR + iR, yR + tR, qR, uR, uR), xL(RR, JR + iR, GR, yR + tR, uR, qR, uR), xL(RR, JR + iR, GR + tR, yR, uR, uR, qR)
    }

    function kL(RR) {
      return JR => RR.isBlockInLoadedChunk(JR[0], JR[1], JR[2]) && 0 === RR.getBlockId(JR[0], JR[1], JR[2])
    }

    function QL(RR) {
      return RR.map((RR => {
        let {
          free: JR,
          blocked: GR,
          gaps: yR,
          supports: tR
        } = RR;
        return `${JR.join(";")}|${GR.join(";")}|${yR.join(";")}|${tR.join(";")}`
      })).join("/")
    }

    function FL(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const uR = JR[0],
        ZR = {
          positions: [],
          indices: []
        };
      for (const [qR, iR, fR] of JR) YL(ZR, qR - uR[0] + .5, iR - uR[1] + .5, fR - uR[2] + .5, yR, tR);
      return RR.createGameMesh(ZR, GR, uR)
    }
    class TL {
      constructor(RR) {
        this.store = RR, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(RR, JR, GR) {
        var yR;
        const tR = null === (yR = RR.uyR(JR)) || void 0 === yR ? void 0 : yR.name;
        if (tR !== iy && tR !== qy) return void("" !== this.shownKey && this.show(RR, "", []));
        const uR = performance.now();
        if (uR - this.lastCheckMs >= 200 && (this.lastCheckMs = uR, tR === iy ? this.check(RR, GR) : this.preview(RR, GR)), this.pulses.length > 0) {
          const JR = 1 + .12 * Math.sin(uR / 1e3 * 1.25 * Math.PI * 2),
            GR = [JR, JR, JR];
          for (const yR of this.pulses) RR.setGameMesh(yR, {
            scale: GR
          })
        }
      }
      dispose(RR) {
        this.clear(RR), this.shownKey = ""
      }
      check(RR, JR) {
        const GR = kL(RR),
          yR = [];
        for (const {
            entry: uR
          }
          of this.store.colliders()) {
          uR.focus.every(((RR, GR) => Math.abs(RR + .5 - JR[GR]) <= Zy.GHOST_REACH)) && yR.push(ji(uR, GR))
        }
        const tR = QL(yR);
        tR !== this.shownKey && this.show(RR, tR, yR)
      }
      preview(RR, JR) {
        const GR = RR.getTargetedBlock(),
          yR = GR ? [GR.UL[0], GR.UL[1], GR.UL[2]] : null,
          tR = null !== yR && yR.every(((RR, GR) => Math.abs(RR + .5 - JR[GR]) <= 8)),
          uR = this.store.site(),
          ZR = tR && uR ? function(RR, JR, GR) {
            const yR = ey(RR);
            if (!yR.every(JR)) return null;
            const tR = Wy(RR, GR);
            return {
              column: yR,
              spots: ji({
                focus: yR[1],
                lasers: [!1, !1, !1, !1],
                open: tR,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, JR),
              fits: tR.filter(Boolean).length >= Zy.MIN_SPOTS
            }
          }(yR, kL(RR), uR) : null,
          qR = ZR ? [ZR.spots] : [],
          iR = ZR ? `preview ${yR.join(",")}|${ZR.fits}|${QL(qR)}` : "";
        var fR, VR;
        iR !== this.shownKey && this.show(RR, iR, qR, null !== (fR = null === ZR || void 0 === ZR ? void 0 : ZR.column) && void 0 !== fR ? fR : [], null === (VR = null === ZR || void 0 === ZR ? void 0 : ZR.fits) || void 0 === VR || VR)
      }
      show(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          tR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(RR), this.shownKey = JR, yR.length > 0 && this.meshes.push(FL(RR, yR, NL(tR ? dL : jL)));
        for (const {
            free: uR,
            blocked: ZR,
            gaps: qR,
            supports: iR
          }
          of GR) {
          for (const [JR, GR, yR] of uR) {
            const tR = {
              positions: [],
              indices: []
            };
            YL(tR, 0, 0, 0);
            const uR = RR.createGameMesh(tR, NL(zL), [JR + .5, GR + .5, yR + .5]);
            this.meshes.push(uR), this.pulses.push(uR)
          }
          ZR.length > 0 && this.meshes.push(FL(RR, ZR, NL(SL))), qR.length > 0 && this.meshes.push(FL(RR, qR, NL(jL), 1.06, .07)), iR.length > 0 && this.meshes.push(FL(RR, iR, NL(EL)))
        }
      }
      clear(RR) {
        for (const JR of this.meshes) RR.disposeGameMesh(JR);
        this.meshes = [], this.pulses = []
      }
    }
    class sL {
      constructor() {
        this.stored = new Map, this.Qq = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(RR) {
        if (!RR.baf2TermOpen) return !1;
        RR.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [JR, GR] of RR.baf2TermItems) GR > 0 ? this.stored.set(JR, GR) : this.stored.delete(JR);
        if (RR.baf2TermHeld && (this.Qq = new Map(RR.baf2TermHeld)), this.pending = this.pending.filter((JR => JR.seq > RR.baf2TermAcked)), this.silos = RR.baf2TermSilos, this.readOnly = RR.baf2TermReadOnly, this.pocket = !0 === RR.baf2TermPocket, RR.baf2TermReset) this.resort();
        else {
          const RR = new Set(this.order);
          for (const JR of this.stored.keys()) RR.has(JR) || this.order.push(JR)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((RR, JR) => this.amount(JR) - this.amount(RR) || RR.localeCompare(JR))), this.changed()
      }
      take(RR, JR) {
        const GR = qJ(RR, this.amount(JR));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: JR,
          amount: GR,
          put: !1
        }), this.recents = [JR, ...this.recents.filter((RR => RR !== JR))].slice(0, 6), this.changed(), GJ(this.seq, RR, JR)
      }
      put(RR, JR) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: JR,
          amount: qJ(RR, this.heldAmount(JR)),
          put: !0
        }), this.changed(), yJ(this.seq, RR, JR)
      }
      putAll() {
        this.seq++;
        for (const RR of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: RR,
          amount: this.heldAmount(RR),
          put: !0
        });
        return this.changed(), tJ(this.seq)
      }
      amount(RR) {
        var JR;
        let GR = null !== (JR = this.stored.get(RR)) && void 0 !== JR ? JR : 0;
        for (const yR of this.pending) yR.item === RR && (GR += yR.put ? yR.amount : -yR.amount);
        return Math.max(0, GR)
      }
      heldAmount(RR) {
        var JR;
        let GR = null !== (JR = this.Qq.get(RR)) && void 0 !== JR ? JR : 0;
        for (const yR of this.pending) yR.put && yR.item === RR && (GR -= yR.amount);
        return Math.max(0, GR)
      }
      heldItems() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((JR => JR === RR || this.heldAmount(JR) > 0))
      }
      items() {
        return this.order.filter((RR => this.amount(RR) > 0))
      }
      recent() {
        return this.recents.filter((RR => this.amount(RR) > 0))
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
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      changed() {
        this.version++;
        for (const RR of this.listeners) RR()
      }
    }
    var hL = GR(39576);
    const Rn = {
      isBlock: RR => void 0 !== OR.l[RR],
      harvestType: RR => {
        var JR;
        return null === (JR = OR.l[RR]) || void 0 === JR ? void 0 : JR.harvestType
      },
      harvestLevel: RR => {
        var JR;
        return null === (JR = OR.l[RR]) || void 0 === JR ? void 0 : JR.harvestLevel
      },
      dropsNothing: RR => {
        var JR;
        return null === (null === (JR = OR.l[RR]) || void 0 === JR ? void 0 : JR.drops)
      },
      displayName: RR => {
        var JR;
        return null === (JR = EZ.o[RR]) || void 0 === JR ? void 0 : JR.displayName
      },
      description: RR => {
        var JR;
        return null === (JR = EZ.o[RR]) || void 0 === JR ? void 0 : JR.description
      },
      harvests: RR => {
        var JR;
        return null === (JR = EZ.o[RR]) || void 0 === JR ? void 0 : JR.harvests
      },
      level: RR => {
        var JR;
        return null === (JR = EZ.o[RR]) || void 0 === JR ? void 0 : JR.level
      }
    };

    function Jn(RR, JR, GR) {
      return function(RR, JR, GR, yR) {
        var tR, uR;
        const ZR = JR.split("|")[0],
          qR = RR.isBlock(JR) ? JR : RR.isBlock(ZR) ? ZR : null;
        if (null === qR || "rock" !== RR.harvestType(qR) || RR.dropsNothing(qR) && !oy.has(ZR)) return null;
        const iR = GR && "rock" === RR.harvests(GR) ? null !== (tR = RR.level(GR)) && void 0 !== tR ? tR : 0 : null,
          fR = null !== (uR = null !== yR && void 0 !== yR ? yR : RR.harvestLevel(qR)) && void 0 !== uR ? uR : 0;
        return (null !== iR ? fR <= iR : 0 === RR.harvestLevel(qR)) ? null : py(RR, fR)
      }(Rn, RR, JR, GR)
    }

    function Gn(RR, JR) {
      return function(RR, JR, GR) {
        if (JR === ly[0]) return [(0, DR.ae)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, DR.C.whiteUiText)];
        const yR = GR.split("|")[0],
          tR = RR.isBlock(yR) ? RR.displayName(yR) : void 0,
          uR = "string" === typeof tR ? tR : tR && "translationKey" in tR ? `$t(${tR.translationKey})` : yR;
        return [(0, DR.ae)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: uR
          }
        }, DR.C.whiteUiText), (0, DR.ae)({
          translationKey: `item:${(0,DR.ve)(JR)}`
        }, DR.C.yellowUiText)]
      }(Rn, RR, JR)
    }
    const yn = "buildAFactory2Game:";
    const tn = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function un(RR) {
      return RR.endsWith(" Ore")
    }
    const Zn = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      qn = [],
      fn = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Zn,
        plan: null,
        atomic: qn
      },
      Vn = "buildAFactory2Game:",
      Kn = new Set(["Splitter", "Sorting Gate"]),
      wn = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class rn {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = RR, this.planAt = JR, this.tierOf = GR, this.Vq = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Qq = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = fn, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(RR, JR, GR) {
        var yR, tR, uR;
        let ZR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const qR = null !== (yR = null === (tR = RR.uyR(JR)) || void 0 === tR ? void 0 : tR.name) && void 0 !== yR ? yR : null,
          iR = RR.isPlayerCrouching(JR),
          fR = 0 === GR ? null : this.resolve(RR, GR),
          VR = null !== fR && null !== ZR && Kn.has(fR.rootName) && function(RR, JR) {
            return wn.some((GR => {
              let [yR, tR] = GR;
              const uR = RR.getBlockId(JR[0] + yR, JR[1], JR[2] + tR);
              return 0 !== uR && "Express Belt" === RR.getMetaInfo(uR).rootName
            }))
          }(RR, ZR),
          KR = this.updatePlan(0 === GR ? null : ZR),
          wR = this.tierOf(),
          rR = null === ZR ? null : (0, hL.e)(GR),
          eR = null !== rR && null !== ZR && (0, hL.g)(function(RR) {
            return (JR, GR, yR) => RR.getBlockId(JR, GR, yR)
          }(RR), ZR[0], ZR[1], ZR[2], rR),
          aR = this.readAfloat(RR, GR, ZR);
        if (GR === this.Vq && eR === this.missesMaker && aR === this.afloat && qR === this.Qq && iR === this.crouching && VR === this.express && wR === this.tier && !KR && (!this.targetsLive || !this.liveMoved(ZR))) return;
        this.Vq = GR, this.missesMaker = eR, this.afloat = aR, this.Qq = qR, this.crouching = iR, this.express = VR;
        const LR = VR && fR ? function(RR) {
          if (null === RR.info) return null;
          return RR.express ??= {
            ...RR.info,
            detail: `${Vn}lookKeepsUpExpress`,
            detailItem: null
          }, RR.express
        }(fR) : null !== fR && eR && null !== rR ? this.besideMaker(fR, GR, rR) : null !== fR && aR ? this.hanging(fR) : null !== (uR = null === fR || void 0 === fR ? void 0 : fR.info) && void 0 !== uR ? uR : null;
        this.tier = wR;
        const nR = fR && LR ? function(RR, JR) {
          var GR, yR;
          const tR = OR.l[RR];
          if (!RR.endsWith(" Ore") || "rock" !== (null === tR || void 0 === tR ? void 0 : tR.harvestType) || 0 === tR.harvestLevel) return null;
          const uR = null !== (GR = tR.harvestLevel) && void 0 !== GR ? GR : 0,
            ZR = JR ? EZ.o[JR] : void 0;
          if ("rock" === (null === ZR || void 0 === ZR ? void 0 : ZR.harvests) && (null !== (yR = ZR.level) && void 0 !== yR ? yR : 0) >= uR) return null;
          const qR = (iR = uR, py(Rn, iR));
          var iR;
          if (null === qR) return null;
          const fR = (0, ht.d)(qR),
            VR = /^[AEIOU]/.test(qR) ? "An" : "";
          if ("rock" === (null === ZR || void 0 === ZR ? void 0 : ZR.harvests) && JR) return {
            key: `${Vn}lookToolTooWeak${VR}`,
            Qq: (0, ht.d)(JR),
            needed: fR
          };
          return {
            key: qR === ly[0] ? `${Vn}lookNeedAnyPickaxe` : `${Vn}lookNeedPickaxe${VR}`,
            Qq: null,
            needed: fR
          }
        }(fR.rootName, qR) : null;
        this.targetsLive = !0 === (null === fR || void 0 === fR ? void 0 : fR.live) && null !== ZR;
        let UR = null;
        this.targetsLive && fR && ZR && this.live && (this.livePos[0] = ZR[0], this.livePos[1] = ZR[1], this.livePos[2] = ZR[2], this.liveVersion = this.live.version(), UR = this.live.line(fR.rootName, ZR));
        const WR = null === LR ? Zn : function(RR, JR, GR) {
            const yR = function(RR, JR, GR) {
              const yR = NG(RR);
              if (null === yR) return null;
              const tR = `${yn}lookPortMode_${yR}`,
                uR = Iy(JR);
              if (uR && GR) return {
                mode: null,
                detail: tR,
                next: `${yn}lookWrenchPickUp`,
                nextState: null
              };
              const ZR = DG(RR),
                qR = null === ZR ? null : NG(ZR);
              return null === qR ? {
                mode: null,
                detail: tR,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: tR,
                next: uR ? `${yn}lookWrenchNext` : `${yn}lookPortWrench`,
                nextState: `${yn}lookPortState_${qR}`
              }
            }(RR, JR, GR);
            if (null !== yR) return yR;
            const tR = Rt(RR, JR, GR);
            return null === tR.mode && null === tR.next ? Zn : tR
          }(RR.blockIdToBlockName(GR), qR, iR),
          AR = this.plan,
          CR = fR && LR ? this.rowsOf(fR.rootName, wR) : qn,
          XR = this.snapshot;
        if (!(null === LR ? !XR.visible : XR.visible && LR === XR.info && (MR = nR, BR = XR.tool, MR === BR || null !== MR && null !== BR && MR.key === BR.key && MR.Qq === BR.Qq && MR.needed === BR.needed) && function(RR, JR) {
            return RR === JR || null !== RR && null !== JR && RR.key === JR.key && JSON.stringify([RR.params, RR.keys]) === JSON.stringify([JR.params, JR.keys])
          }(UR, XR.live) && function(RR, JR) {
            return RR.mode === JR.mode && RR.detail === JR.detail && RR.next === JR.next && RR.nextState === JR.nextState
          }(WR, XR.wrench) && je(AR, XR.plan) && CR === XR.atomic)) {
          var MR, BR;
          this.snapshot = null === LR ? {
            ...XR,
            visible: !1
          } : {
            info: LR,
            visible: !0,
            tool: nR,
            live: UR,
            wrench: WR,
            plan: AR,
            atomic: CR
          };
          for (const RR of this.listeners) RR()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = fn, this.Vq = 0, this.Qq = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(RR, JR, GR) {
        if (null === GR || 0 === JR || !qR() || !un(this.resolve(RR, JR).rootName)) return !1;
        const yR = `${GR[0]},${GR[1]},${GR[2]},${JR}`,
          tR = performance.now();
        return yR === this.afloatKey && tR - this.afloatAt < en ? this.afloat : (this.afloatKey = yR, this.afloatAt = tR, function(RR, JR) {
          for (const [GR, yR, tR] of tn) {
            const uR = JR(RR[0] + GR, RR[1] + yR, RR[2] + tR);
            if (void 0 === uR || null !== uR && !un(uR)) return !1
          }
          return !0
        }(GR, ((JR, GR, yR) => function(RR, JR, GR, yR) {
          if (!RR.isBlockInLoadedChunk(JR, GR, yR)) return;
          const tR = RR.getBlockId(JR, GR, yR);
          return 0 === tR ? null : RR.getMetaInfo(tR).rootName
        }(RR, JR, GR, yR))))
      }
      liveMoved(RR) {
        var JR;
        const {
          livePos: GR
        } = this;
        return null === RR || RR[0] !== GR[0] || RR[1] !== GR[1] || RR[2] !== GR[2] || (null === (JR = this.live) || void 0 === JR ? void 0 : JR.version()) !== this.liveVersion
      }
      updatePlan(RR) {
        const JR = null === RR ? "" : RR.join(","),
          GR = performance.now();
        if (JR === this.planPos && GR - this.planMs < 250) return !1;
        this.planPos = JR, this.planMs = GR;
        const yR = null === RR ? null : this.planAt([RR[0], RR[1], RR[2]]),
          tR = !je(yR, this.plan);
        return this.plan = yR, tR
      }
      besideMaker(RR, JR, GR) {
        let {
          info: yR
        } = RR;
        if (null === yR) return null;
        let tR = this.besideMakerById.get(JR);
        if (void 0 === tR) {
          const RR = "cryo" === GR ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          tR = {
            ...yR,
            detail: `${Vn}${RR}`,
            detailItem: null
          }, this.besideMakerById.set(JR, tR)
        }
        return tR
      }
      hanging(RR) {
        let {
          info: JR,
          rootName: GR
        } = RR;
        if (null === JR) return null;
        let yR = this.afloatByRoot.get(GR);
        return void 0 === yR && (yR = {
          ...JR,
          detail: `${Vn}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(GR, yR)), yR
      }
      rowsOf(RR, JR) {
        if (null === JR) return qn;
        const GR = `${RR}|${JR}`;
        let yR = this.rowsByKey.get(GR);
        if (void 0 === yR) {
          const tR = function(RR, JR) {
            var GR;
            if (!(RR in DJ)) return [];
            const yR = null !== (GR = HJ[RR]) && void 0 !== GR ? GR : [],
              tR = new Map;
            for (const ZR of Hu(RR, JR))
              if ((yR.includes(ZR) || Du(ZR.output) && xu(ZR.output) > FR(RR)) && xu(ZR.output) <= JR) {
                var uR;
                const RR = null !== (uR = tR.get(ZR.output)) && void 0 !== uR ? uR : [];
                RR.push(ZR.input), tR.set(ZR.output, RR)
              } return cu([...tR], (RR => {
              let [JR] = RR;
              return -xu(JR)
            })).map((RR => {
              let [JR, GR] = RR;
              return {
                output: JR,
                inputs: GR
              }
            }))
          }(RR, JR);
          yR = tR.length > 0 ? tR : qn, this.rowsByKey.set(GR, yR)
        }
        return yR
      }
      resolve(RR, JR) {
        const {
          rootId: GR,
          rootName: yR
        } = RR.getMetaInfo(JR), tR = (0, eG.i)(yR) ? JR : GR;
        let uR = this.byRootId.get(tR);
        const ZR = qR();
        if (void 0 === uR || uR.nuclear !== ZR) {
          var iR;
          const GR = function(RR) {
            return Dy(Rn, RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR)
          }(yR, RR.blockIdToBlockName(JR));
          uR = {
            info: GR,
            rootName: yR,
            live: null !== GR && !0 === (null === (iR = this.live) || void 0 === iR ? void 0 : iR.handles(yR)),
            nuclear: ZR
          }, this.byRootId.set(tR, uR)
        }
        return uR
      }
    }
    const en = 500;
    const an = (0, yR.memo)((function(RR) {
      var JR, GR;
      let {
        store: tR
      } = RR;
      const {
        t: uR
      } = (0, lt.A)(), [ZR, qR] = (0, yR.useState)((() => tR.get()));
      (0, yR.useEffect)((() => (qR(tR.get()), tR.subscribe((() => {
        qR(tR.get())
      })))), [tR]);
      const {
        openInGameMenuName: iR,
        openEverythingMenuName: fR,
        isTouchScreen: VR
      } = (0, Ut.o)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: KR,
        tool: wR,
        live: rR,
        wrench: eR,
        atomic: aR
      } = ZR, LR = ZR.visible && null === iR && null === fR;
      if (null === KR) return null;
      const nR = null !== eR.detail ? uR(eR.detail) : null !== (JR = ZR.plan) && void 0 !== JR && JR.ctrl ? uR("buildAFactory2Game:lookPlanCtrl") : null !== KR.detail ? uR(KR.detail, null === KR.detailItem ? void 0 : {
        item: uR(KR.detailItem)
      }) : null;
      return (0, Uu.jsxs)("div", {
        className: Ct()("Baf2LookTarget", {
          Visible: LR
        }),
        "aria-hidden": !LR,
        children: [(0, Uu.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: uR(KR.name)
        }), null !== ZR.plan && (0, Uu.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: uR(ZR.plan.key, {
            kind: uR(ZR.plan.kindKey),
            w: String(ZR.plan.w),
            h: String(ZR.plan.h),
            d: String(ZR.plan.d),
            count: String(ZR.plan.count)
          })
        }), void 0 !== (null === (GR = ZR.plan) || void 0 === GR ? void 0 : GR.why) && (0, Uu.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: uR(ZR.plan.why)
        }), null !== eR.mode && (0, Uu.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: uR(eR.mode)
        }), null !== wR ? (0, Uu.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: uR(wR.key, {
            item: uR(wR.needed),
            Qq: null === wR.Qq ? "" : uR(wR.Qq)
          })
        }) : null !== rR ? (0, Uu.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: uR(rR.key, Ti(uR, rR))
        }) : null !== nR && (0, Uu.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: nR
        }), aR.length > 0 && (0, Uu.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: uR("buildAFactory2Game:lookAtomicRecipes", {
            list: aR.map((RR => {
              let {
                output: JR,
                inputs: GR
              } = RR;
              const yR = GR.length > 1 ? ` ${uR("buildAFactory2Game:recipeMore",{count:String(GR.length-1)})}` : "";
              return `${uR((0,ht.d)(GR[0]))}${yR} \u2192 ${uR((0,ht.d)(JR))}`
            })).join(", ")
          })
        }), null !== eR.next && (0, Uu.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: uR(eR.next, {
            state: null === eR.nextState ? "" : uR(eR.nextState),
            use: uR(VR ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Ln = GR(39700);
    const nn = [],
      Un = [
        [0, -1, 0]
      ];

    function Wn(RR) {
      const JR = [RR];
      for (let GR = 1; GR <= 4; GR++) GR > 1 && JR.push(`${RR}|meta|rot${GR}`), JR.push(`${RR}|meta|rot${GR}|Running`);
      return JR
    }

    function An(RR, JR) {
      return [Math.floor(RR[0] / JR), Math.floor(RR[1] / JR), Math.floor(RR[2] / JR)]
    }

    function Cn(RR, JR, GR) {
      return `${RR},${JR},${GR}`
    }

    function Xn(RR) {
      const JR = RR.split("|")[0];
      if (!fG(JR)) return nn;
      const GR = DJ[JR];
      if (JG(GR)) return Un;
      const yR = WL(RR);
      return GG(GR) ? [
        [-yR[0], -yR[1], -yR[2]]
      ] : Xt(GR) ? function(RR, JR) {
        const GR = RR[0] - 2 * JR[0],
          yR = RR[2] - 2 * JR[2],
          tR = [];
        for (let uR = -1; uR <= 1; uR++)
          for (let JR = -1; JR <= 1; JR++) tR.push([GR + uR, RR[1], yR + JR]);
        return tR
      }([0, 0, 0], yR) : nn
    }
    const Mn = [.5, .5, .5],
      Bn = [.2, .8, .3],
      pn = [.45, 1, .5];
    class gn {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(RR) {
        this.indexed = !0;
        for (const JR of gJ)
          for (const GR of Wn(JR)) {
            const JR = RR.blockNameToBlockId(GR, !0),
              yR = Xn(GR);
            null !== JR && yR.length > 0 && (this.offsetsList.push(yR), this.offsetsIndexById[JR] = this.offsetsList.length)
          }
      }
      onAfterRender(RR, JR) {
        this.indexed || this.index(RR);
        const GR = performance.now();
        if (GR - this.lastCheckMs < 100) return;
        this.lastCheckMs = GR, this.checks++;
        const yR = Ke.g.LK,
          [tR, uR, ZR] = An(JR, yR);
        let qR = !1;
        const iR = [];
        let fR = 0;
        for (let VR = tR - 2; VR <= tR + 2; VR++)
          for (let JR = uR - 1; JR <= uR + 1; JR++)
            for (let tR = ZR - 2; tR <= ZR + 2; tR++) {
              const uR = fR++,
                ZR = Cn(VR, JR, tR),
                KR = RR.getChunkVersion(VR, JR, tR);
              let wR = this.chunks.get(ZR);
              null !== KR ? (wR || (wR = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(ZR, wR)), wR.seenAt = this.checks, wR.checkedVersion !== KR && (wR.checkedVersion = KR, qR = !0), wR.scannedVersion !== KR && GR - wR.scannedAt >= 500 && iR.push({
                slot: uR,
                entry: wR,
                origin: [VR * yR, JR * yR, tR * yR]
              })) : (qR ||= void 0 !== wR, this.chunks.delete(ZR))
            }
        this.scanDue(RR, iR) && (qR = !0);
        for (const [VR, KR] of this.chunks) KR.seenAt !== this.checks && (qR ||= KR.machines.length > 0, this.chunks.delete(VR));
        for (const VR of this.chunks.values())
          for (const [JR, GR, yR] of VR.cellChunks)(Math.abs(JR - tR) > 2 || Math.abs(GR - uR) > 1 || Math.abs(yR - ZR) > 2) && this.watchCellChunk(RR, JR, GR, yR) && (qR = !0);
        for (const [VR, KR] of this.cellChunks) KR.seenAt !== this.checks && this.cellChunks.delete(VR);
        qR && this.refresh(RR)
      }
      dispose(RR) {
        this.clearMeshes(RR), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(RR, JR) {
        const GR = Math.max(JR.findIndex((RR => {
          let {
            slot: JR
          } = RR;
          return JR >= this.scanFrom
        })), 0);
        let yR = 96;
        for (let tR = 0; tR < JR.length; tR++) {
          const {
            slot: uR,
            entry: ZR,
            origin: qR
          } = JR[(GR + tR) % JR.length];
          if (yR -= this.scan(RR, ZR, qR), yR <= 0) {
            this.scanFrom = uR + 1;
            break
          }
        }
        return JR.length > 0
      }
      scan(RR, JR, GR) {
        let [yR, tR, uR] = GR;
        const ZR = Ke.g.LK,
          qR = this.hits;
        qR.length = 0;
        const iR = RR.scanBlocks(yR, tR, uR, yR + ZR, tR + ZR, uR + ZR, this.offsetsIndexById, qR),
          fR = [];
        for (let VR = 0; VR < qR.length; VR += 4) fR.push({
          pos: [qR[VR], qR[VR + 1], qR[VR + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[qR[VR + 3]] - 1]
        });
        return JR.machines = fR, JR.cellChunks = function(RR, JR) {
          const GR = new Set,
            yR = [];
          for (const {
              pos: tR,
              offsets: uR
            }
            of RR)
            for (const [RR, ZR, qR] of uR) {
              const uR = An([tR[0] + RR, tR[1] + ZR, tR[2] + qR], JR),
                iR = Cn(...uR);
              GR.has(iR) || (GR.add(iR), yR.push(uR))
            }
          return yR
        }(fR, ZR), JR.scannedVersion = JR.checkedVersion, JR.scannedAt = performance.now(), Math.max(iR, 1)
      }
      watchCellChunk(RR, JR, GR, yR) {
        const tR = Cn(JR, GR, yR),
          uR = RR.getChunkVersion(JR, GR, yR),
          ZR = this.cellChunks.get(tR);
        return null === uR ? this.cellChunks.delete(tR) : (null === ZR || void 0 === ZR ? void 0 : ZR.version) === uR ? (ZR.seenAt = this.checks, !1) : (this.cellChunks.set(tR, {
          version: uR,
          seenAt: this.checks
        }), !0)
      }
      refresh(RR) {
        const JR = function(RR, JR) {
            const GR = new Set,
              yR = [];
            for (const {
                pos: tR,
                offsets: uR
              }
              of RR)
              for (const [RR, ZR, qR] of uR) {
                const uR = tR[0] + RR,
                  iR = tR[1] + ZR,
                  fR = tR[2] + qR,
                  VR = `${uR},${iR},${fR}`;
                GR.has(VR) || (GR.add(VR), JR(uR, iR, fR) && yR.push([uR, iR, fR]))
              }
            return yR
          }([...this.chunks.values()].flatMap((RR => RR.machines)), ((JR, GR, yR) => RR.isBlockInLoadedChunk(JR, GR, yR) && 0 === RR.getBlockId(JR, GR, yR))),
          GR = JR.join(";");
        GR !== this.shownKey && (this.shownKey = GR, this.clearMeshes(RR), JR.length > 0 && (this.meshes = [this.build(RR, JR, !1), this.build(RR, JR, !0)]))
      }
      build(RR, JR, GR) {
        const yR = JR[0],
          tR = [],
          uR = [];
        for (const [ZR, qR, iR] of JR)(0, Ln.c)(tR, uR, [ZR - yR[0] + .5, qR - yR[1] + .5, iR - yR[2] + .5], Mn, GR);
        return RR.createGameMesh({
          positions: tR,
          indices: uR
        }, {
          rgb: GR ? pn : Bn,
          alpha: .4
        }, yR)
      }
      clearMeshes(RR) {
        for (const JR of this.meshes) RR.disposeGameMesh(JR);
        this.meshes = []
      }
    }
    const bn = 1 / .6,
      vn = 200,
      On = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      xn = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Nn = 2 * Math.PI / 3;
    class Dn {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : On;
        this.style = RR, this.particles = null, this.points = new Float32Array(800), this.budget = vn, this.lastMs = 0
      }
      static blade() {
        return new Dn(xn)
      }
      DW(RR, JR) {
        const GR = Math.min(JR.arcStruck, JR.arcPoints.length);
        this.draw(RR, [JR.arcFrom, ...JR.arcPoints], JR.arcPoints.slice(0, GR))
      }
      onBlade(RR, JR) {
        const [GR, yR, tR] = JR.bladeCentre, [uR, ZR] = JR.bladeFacing, qR = GR - 1.5 * uR, iR = tR - 1.5 * ZR, fR = Math.atan2(ZR, uR), VR = [];
        for (let KR = 0; KR <= 8; KR++) {
          const RR = fR - Nn / 2 + Nn * KR / 8;
          VR.push([qR + 2.5 * Math.cos(RR), yR, iR + 2.5 * Math.sin(RR)])
        }
        this.draw(RR, VR, JR.bladeStruck)
      }
      dispose() {
        var RR;
        null === (RR = this.particles) || void 0 === RR || RR.stop(), this.particles = null
      }
      draw(RR, JR, GR) {
        if (!RR.particlesEnabled() || JR.length < 2) return;
        const yR = performance.now();
        this.budget = Math.min(vn, this.budget + (yR - this.lastMs) / 1e3 * vn), this.lastMs = yR;
        const tR = [];
        let uR = 0,
          ZR = JR[0];
        for (const nR of JR.slice(1)) {
          const RR = Math.min(48, Math.round(Math.hypot(nR[0] - ZR[0], nR[1] - ZR[1], nR[2] - ZR[2]) * this.style.perBlock));
          tR.push([ZR, nR, RR]), uR += RR, ZR = nR
        }
        const qR = GR.length;
        uR += 10 * qR;
        const iR = uR > this.budget ? this.budget / uR : 1;
        if (0 === uR || iR * uR < 1) return;
        const fR = JR[0],
          [VR, KR, wR] = fR,
          rR = this.points;
        let eR = 0;
        const aR = (RR, JR, GR, yR) => {
          const tR = 4 * eR;
          rR[tR] = RR - VR, rR[tR + 1] = JR - KR, rR[tR + 2] = GR - wR, rR[tR + 3] = yR, eR++
        };
        tR.forEach(((RR, JR) => {
          let [GR, yR, tR] = RR;
          const uR = Math.min(Math.floor(tR * iR), vn - eR),
            ZR = Math.hypot(yR[0] - GR[0], yR[1] - GR[1], yR[2] - GR[2]),
            qR = 0 === JR && ZR > 0 ? Math.min(.5, .1 * ZR) / ZR : 0;
          for (let iR = 0; iR < uR; iR++) {
            const RR = qR + (iR + .5) / uR * (1 - qR);
            aR(GR[0] + (yR[0] - GR[0]) * RR, GR[1] + (yR[1] - GR[1]) * RR, GR[2] + (yR[2] - GR[2]) * RR, .15)
          }
        }));
        const LR = Math.floor(10 * iR);
        for (let nR = 0; nR < qR; nR++) {
          const [RR, JR, yR] = GR[nR];
          for (let GR = 0; GR < LR && eR < vn; GR++) aR(RR, JR, yR, 2.5)
        }
        this.budget -= eR, this.particles ??= RR.createParticles(function(RR) {
          const [JR, GR] = RR.colours;
          return {
            texture: "square_particle",
            hK: 400,
            minLifeTime: RR.life[0] / bn,
            maxLifeTime: RR.life[1] / bn,
            minSize: RR.size[0],
            maxSize: RR.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [JR[0], JR[1], JR[2], 1],
              maxColor: [GR[0], GR[1], GR[2], 1]
            }, {
              timeFraction: 1,
              minColor: [JR[0], JR[1], JR[2], 0],
              maxColor: [GR[0], GR[1], GR[2], 0]
            }],
            blendMode: gq.c.Add
          }
        }(this.style), {
          pos: fR
        }), this.particles.emitPoints(fR, rR, eR)
      }
    }
    const Hn = new Set(["Sky Spring"]);

    function cn(RR, JR, GR) {
      const yR = RR.split("|")[0];
      return "Air" !== JR || GR || ! function(RR) {
        const JR = RR.split("|")[0];
        return void 0 !== ZG[JR] || Hn.has(JR)
      }(yR) ? null : RR
    }
    class Pn {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(RR) {
        const JR = RR - this.lastTapAt >= 300;
        return this.lastTapAt = RR, JR
      }
    }
    class In {
      constructor() {
        this.presses = new Pn, this.predicted = null
      }
      tap(RR, JR) {
        const GR = this.presses.isNewPress(JR);
        return GR && (this.predicted = {
          station: RR,
          at: JR
        }), GR
      }
      consumeServerOpen(RR, JR) {
        const GR = this.predicted;
        return !(null === GR || GR.station !== RR || JR - GR.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class mn {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(RR, JR) {
        return RR && (this.thrustAt = JR), JR - this.thrustAt < 200
      }
    }
    const zn = [.1, .05, .1],
      Sn = {
        texture: "effect_5",
        hK: Math.ceil(48),
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
        blendMode: gq.c.OneOne
      };
    class jn {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new mn, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      DW(RR, JR) {
        for (const [GR, yR] of JR.baf2JetFlames) RR.isLocalPlayer(GR) || (yR ? this.lit.add(GR) : this.lit.delete(GR))
      }
      onAfterRender(RR, JR) {
        const GR = performance.now(),
          yR = this.hold.lit(this.selfThrusting(RR, JR), GR);
        for (const [tR, uR] of this.flames)(tR === JR ? yR : this.lit.has(tR)) || this.setEmitting(uR, !1), tR === JR || RR.getPositionView(tR) ? !uR.emitting && GR - uR.offAt >= 1300 && (uR.particles.stop(), this.flames.delete(tR)) : (uR.particles.dispose(), this.flames.delete(tR), this.lit.delete(tR));
        yR && this.draw(RR, JR, JR);
        for (const tR of this.lit) this.draw(RR, JR, tR)
      }
      dispose() {
        for (const RR of this.flames.values()) RR.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(RR, JR) {
        var GR;
        const yR = RR.getLocalPlayerMovement();
        return !!yR && (null !== (tR = {
          option: null !== (GR = RR.getClientOption(JR, "jumpHoldThrust")) && void 0 !== GR ? GR : null,
          jumping: yR.jumpHeld,
          onGround: yR.onGround,
          alive: RR.isAlive(JR)
        }).option && tR.option.maxUpSpeed >= 0 && tR.jumping && !tR.onGround && tR.alive);
        var tR
      }
      draw(RR, JR, GR) {
        var yR, tR;
        const uR = this.pos;
        if (!RR.readDrawnPosition(GR, uR)) return;
        const ZR = RR.readDrawnPosition(JR, this.camera) ? this.camera : uR;
        if (!((uR[0] - ZR[0]) ** 2 + (uR[1] - ZR[1]) ** 2 + (uR[2] - ZR[2]) ** 2 < 1600) || !RR.particlesEnabled()) {
          const RR = this.flames.get(GR);
          return void(RR && this.setEmitting(RR, !1))
        }
        const qR = null !== (yR = this.flames.get(GR)) && void 0 !== yR ? yR : this.create(RR, GR, uR),
          iR = null !== (tR = RR.getDrawnHeading(GR)) && void 0 !== tR ? tR : 0,
          fR = this.at;
        fR[0] = uR[0] - .35 * Math.sin(iR), fR[1] = uR[1] + 1.05, fR[2] = uR[2] - .35 * Math.cos(iR), qR.particles.moveTo(fR), this.setEmitting(qR, !0)
      }
      setEmitting(RR, JR) {
        RR.emitting !== JR && (RR.emitting = JR, JR || (RR.offAt = performance.now()), RR.particles.setEmitRate(JR ? 60 : 0))
      }
      create(RR, JR, GR) {
        const yR = {
          particles: RR.createParticles(Sn, {
            pos: GR,
            half: zn
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(JR, yR), yR
      }
    }

    function dn(RR) {
      return "Reactor Frame" === yy("reactor", RR)
    }

    function En(RR) {
      return PG("reactor", RR) && !dn(RR) && (RR.startsWith("Reactor Glass") || RR.startsWith("Reactor Port"))
    }
    const Yn = "baf2Goal";
    class kn {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [xt.n.subscribe("setDirectionArrow", (RR => {
          let {
            id: JR,
            position: GR
          } = RR;
          JR === Yn && (this.goal = GR, this.checkedAt = -1 / 0)
        })), xt.n.subscribe("clearDirectionArrow", (RR => {
          let {
            id: JR
          } = RR;
          null !== JR && JR !== Yn || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const RR of this.subs) xt.n.unsubscribe(RR)
      }
      sideOf(RR, JR, GR, yR) {
        const tR = this.goal;
        if (!tR) return 0;
        GR - this.checkedAt > 1e3 && (this.checkedAt = GR, this.open = function(RR, JR) {
          const [GR, yR, tR] = RR.map(Math.floor);
          if (!En(JR(GR, yR, tR))) return null;
          for (const [uR, ZR] of [
              [1, 0],
              [0, 1]
            ]) {
            const RR = JR(GR + uR, yR, tR + ZR),
              qR = JR(GR - uR, yR, tR - ZR);
            if (dn(qR) && En(RR)) return [uR, 0, ZR];
            if (dn(RR) && En(qR)) return [0 - uR, 0, 0 - ZR]
          }
          return null
        }(tR, ((JR, GR, yR) => RR.blockIdToBlockName(RR.getBlockId(JR, GR, yR)))));
        const uR = this.open;
        if (!uR) return 0;
        const ZR = yR(tR);
        if (Math.abs(ZR.x - JR.x) > .05 || Math.abs(ZR.y - JR.y) > .05) return 0;
        const qR = yR([tR[0] + uR[0], tR[1], tR[2] + uR[2]]).x - ZR.x;
        return Math.abs(qR) < .3 ? 0 : qR > 0 ? 1 : -1
      }
    }
    class Qn {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new kn, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.He = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.iW = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((RR => {
          for (const JR of RR) JR.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(JR.target, JR.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.He || this.clear()
        }, window.addEventListener("resize", this.iW)
      }
      onAfterRender(RR, JR) {
        var GR;
        this.api = RR, this.project = null !== (GR = null === JR || void 0 === JR ? void 0 : JR.projectWorldPosToScreenPos) && void 0 !== GR ? GR : null, this.queued || this.He || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.He = !0;
        for (const RR of this.moved.keys()) RR.style.transform = "";
        this.moved.clear();
        for (const RR of this.sideLabels.keys()) RR.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.iW)
      }
      clear() {
        for (const uR of this.moved.keys()) uR.isConnected || this.moved.delete(uR);
        for (const uR of this.sideLabels.keys()) uR.isConnected || this.sideLabels.delete(uR);
        if (0 === this.arrows.length) return;
        const RR = performance.now(),
          JR = RR - this.refreshedAt > 1e3;
        JR && (this.refreshedAt = RR, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const GR = this.trackerBox(),
          yR = this.barsBox(),
          tR = this.toastBox(JR);
        (GR || yR || tR) && JR && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let uR = 0; uR < this.arrows.length; uR++) {
          const JR = this.arrows[uR];
          this.labelOffsets.set(JR, this.runLabelAside(JR, RR));
          const ZR = (GR ? this.shiftLeftOf(JR, GR) : 0) || this.shiftOnScreen(JR),
            qR = Math.min(yR ? this.liftAbove(JR, yR, ZR) : 0, tR ? this.liftAbove(JR, tR, ZR) : 0),
            iR = this.moved.get(JR);
          if (0 !== ZR || 0 !== qR) {
            const RR = 0 === qR ? `translateX(${ZR}px)` : `translate(${ZR}px, ${qR}px)`;
            iR !== RR && (JR.style.transform = RR, this.moved.set(JR, RR))
          } else void 0 !== iR && (JR.style.transform = "", this.moved.delete(JR))
        }
      }
      trackerBox() {
        var RR, JR;
        const GR = null !== (RR = this.tracker) && void 0 !== RR && RR.isConnected ? this.tracker : null !== (JR = this.trackers[0]) && void 0 !== JR ? JR : null;
        if (GR !== this.tracker && this.watch(GR), this.boxStale && GR) {
          var yR, tR, uR;
          this.boxStale = !1;
          const RR = GR.closest(".NoRoom") ? null : GR.getBoundingClientRect(),
            JR = RR && RR.width > 0 ? null === (yR = this.hud) || void 0 === yR ? void 0 : yR.getBoundingClientRect() : void 0,
            ZR = RR && JR ? Math.max(RR.top, JR.top) : null !== (tR = null === RR || void 0 === RR ? void 0 : RR.top) && void 0 !== tR ? tR : 0,
            qR = RR && JR ? Math.min(RR.bottom, JR.bottom) : null !== (uR = null === RR || void 0 === RR ? void 0 : RR.bottom) && void 0 !== uR ? uR : 0;
          this.box = RR && RR.width > 0 && qR > ZR ? {
            left: RR.left,
            top: ZR,
            right: RR.right,
            bottom: qR
          } : null
        }
        return GR ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var RR;
          this.barsStale = !1;
          const JR = null === (RR = this.statBars[0]) || void 0 === RR ? void 0 : RR.getBoundingClientRect();
          this.bars = JR && JR.width > 0 && JR.height > 0 ? {
            left: JR.left,
            top: JR.top,
            right: JR.right,
            bottom: JR.bottom
          } : null
        }
        return this.bars
      }
      toastBox(RR) {
        var JR;
        const GR = null !== (JR = this.toasts[0]) && void 0 !== JR ? JR : null;
        if (GR !== this.toastEl || RR && GR) {
          this.toastEl = GR;
          const RR = null === GR || void 0 === GR ? void 0 : GR.getBoundingClientRect();
          this.toast = RR && RR.width > 0 && RR.height > 0 ? {
            left: RR.left,
            top: RR.top,
            right: RR.right,
            bottom: RR.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(RR, JR, GR) {
        var yR;
        const tR = this.anchorOf(RR);
        if (!tR) return 0;
        const uR = tR.x + GR + (null !== (yR = this.labelOffsets.get(RR)) && void 0 !== yR ? yR : 0),
          {
            halfWidth: ZR,
            labelled: qR
          } = this.extentOf(RR),
          iR = tR.y + this.em * (qR ? 6.2 : 3);
        return iR < JR.top - 6 || uR + ZR < JR.left - 6 || uR - ZR > JR.right + 6 ? 0 : JR.top - 6 - iR
      }
      watch(RR) {
        var JR, GR;
        this.tracker && this.sizes.unobserve(this.tracker), null === (JR = this.hud) || void 0 === JR || JR.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = RR, this.hud = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.closest(".Baf2QuestHud")) && void 0 !== GR ? GR : null, this.box = null, this.boxStale = !0, RR && this.sizes.observe(RR), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(RR, JR) {
        var GR;
        const yR = this.anchorOf(RR);
        if (!yR) return 0;
        const {
          y: tR
        } = yR, uR = yR.x + (null !== (GR = this.labelOffsets.get(RR)) && void 0 !== GR ? GR : 0), ZR = this.em, {
          halfWidth: qR,
          labelled: iR
        } = this.extentOf(RR), fR = tR - ZR, VR = uR + qR;
        return tR + ZR * (iR ? 6.2 : 3) < JR.top || fR > JR.bottom || VR < JR.left - 6 || uR - qR > JR.right ? 0 : Math.max(JR.left - 6 - VR, 6 - (uR - qR))
      }
      shiftOnScreen(RR) {
        var JR;
        const GR = this.anchorOf(RR);
        if (!GR) return 0;
        const {
          halfWidth: yR
        } = this.extentOf(RR), tR = GR.x + (null !== (JR = this.labelOffsets.get(RR)) && void 0 !== JR ? JR : 0), uR = tR + yR - (this.innerWidth - 6);
        return uR > 0 ? -uR : Math.max(0, 6 - (tR - yR))
      }
      runLabelAside(RR, JR) {
        var GR;
        let yR = null;
        for (let ZR = 0; ZR < RR.children.length; ZR++) RR.children[ZR].classList.contains("DirectionArrowLabel") && (yR = RR.children[ZR]);
        if (!yR) return 0;
        const tR = RR.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(RR) : null,
          uR = (tR && this.api ? this.side.sideOf(this.api, {
            x: tR.x / this.innerWidth * 100,
            y: tR.y / this.innerHeight * 100
          }, JR, this.project) : 0) * this.halfWidthOf(yR);
        return uR !== (null !== (GR = this.sideLabels.get(yR)) && void 0 !== GR ? GR : 0) && (yR.style.transform = 0 === uR ? "" : `translateX(-50%) translateX(${uR}px)`, 0 === uR ? this.sideLabels.delete(yR) : this.sideLabels.set(yR, uR)), uR
      }
      extentOf(RR) {
        let JR = this.em,
          GR = !1;
        for (let yR = 0; yR < RR.children.length; yR++) {
          const tR = RR.children[yR],
            uR = tR.classList.contains("DirectionArrowLabel");
          GR ||= uR, (uR || tR.classList.contains("DirectionArrowDistance")) && (JR = Math.max(JR, this.halfWidthOf(tR)))
        }
        return {
          halfWidth: JR,
          labelled: GR
        }
      }
      halfWidthOf(RR) {
        let JR = this.halfWidths.get(RR);
        return void 0 === JR && (JR = RR.offsetWidth / 2, this.halfWidths.set(RR, JR), this.sizes.observe(RR), this.labels.add(RR)), JR
      }
      forgetGoneLabels() {
        for (const RR of this.labels) RR.isConnected || (this.sizes.unobserve(RR), this.halfWidths.delete(RR), this.labels.delete(RR))
      }
      anchorOf(RR) {
        const JR = RR.style.translate,
          GR = this.anchors.get(RR);
        if (GR && GR.translate === JR && GR.innerWidth === this.innerWidth && GR.innerHeight === this.innerHeight) return GR;
        const yR = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(JR);
        if (!yR) return null;
        const tR = {
          translate: JR,
          x: parseFloat(yR[1]) / 100 * this.innerWidth,
          y: parseFloat(yR[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(RR, tR), tR
      }
    }
    const Fn = "Baf2ArrowText";

    function Tn(RR, JR) {
      const GR = RR.rows.find((RR => RR.current));
      return NR(RR.tutorial) && null !== GR && void 0 !== GR && GR.item && St(GR) && bR(GR.item).includes(JR) ? GR.item : null
    }
    const sn = new class {
      constructor(RR) {
        this.select = RR, this.picks = new Map
      }
      open(RR, JR, GR) {
        const yR = Tn(JR, RR);
        null !== yR && this.Ur(RR, yR, GR)
      }
      follow(RR, JR) {
        if (qR())
          for (const [GR, {
              item: yR,
              had: tR
            }] of this.picks) {
            const uR = Tn(RR, GR);
            uR !== yR && (null !== uR && JR(yR) > tR ? this.Ur(GR, uR, JR) : this.picks.delete(GR))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Ur(RR, JR, GR) {
        this.picks.set(RR, {
          item: JR,
          had: GR(JR)
        }), this.select(RR, JR)
      }
    }(Nt.p);

    function hn(RR) {
      return JR => {
        let GR = 0;
        for (const yR of RR.getInventoryItems())(null === yR || void 0 === yR ? void 0 : yR.name) === JR && (GR += null === yR.amount ? 1 : Math.max(yR.amount, 0));
        return GR
      }
    }

    function RU(RR, JR, GR, yR) {
      RR.getClientOption(JR, "canCraft") && "inventory" !== Ut.d.get("openInGameMenuName") && (sn.open(GR, yR.get(), hn(RR)), xt.n.JK("toggleMenu", `inventory|${GR}`))
    }
    let JU = null,
      GU = !1;

    function yU(RR) {
      const JR = (0, nu.d)();
      RR === JU && JR === GU || (JU = RR, GU = JR, (0, Nt.r)(function(RR, JR) {
        const GR = new Map;
        for (let yR = RR + 1; yR <= tR.length; yR++) {
          const tR = Pu(yR, RR, JR);
          if (tR)
            for (const JR of nR(yR).unlocks) GR.set(JR, {
              ...tR,
              stepsAway: yR - RR
            })
        }
        return GR
      }(RR, JR)))
    }

    function tU() {
      return (0, Nt.v)(cu(Object.keys(gR), xu)), () => {
        (0, Nt.v)([])
      }
    }

    function uU(RR, JR, GR) {
      var yR, tR;
      const uR = RR.getTargetedBlock();
      if (!uR || ! function(RR, JR, GR) {
          if ("Chest" !== JR) return !1;
          const yR = RR.split("|")[0];
          if (!fG(yR) || 0 === DJ[yR].outputSlots.length) return !1;
          const tR = WL(RR);
          return GR[0] === tR[0] && GR[1] === tR[1] && GR[2] === tR[2]
        }(GR, null === (yR = RR.uyR(JR)) || void 0 === yR ? void 0 : yR.name, uR.normal)) return !1;
      const [ZR, qR, iR] = uR.UL, fR = RR.getBlockId(ZR, qR, iR);
      return 0 === fR || !0 === (null === (tR = OR.l[fR]) || void 0 === tR ? void 0 : tR.canBePlacedOver)
    }
    var ZU = GR(37470);
    const qU = new Set(aG.d);
    class iU {
      constructor(RR) {
        this.toasts = RR, this.lastAt = -1 / 0
      }
      onAltAction(RR, JR, GR) {
        const yR = RR.getTargetedBlock();
        if (!yR || function(RR) {
            const JR = RR.split("|")[0];
            return fG(JR) || null !== My(JR) || lR(JR) || aG.d.includes(JR)
          }(GR) && !qU.has(GR.split("|")[0])) return;
        const tR = RR.uyR(JR);
        if (!tR || !qU.has(tR.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const uR = tR.typeObj.id,
          [ZR, qR, iR] = yR.UL,
          fR = RR.getBlockId(ZR, qR, iR),
          VR = OR.l[fR];
        (0 === fR || null !== VR && void 0 !== VR && VR.Nr || null !== VR && void 0 !== VR && VR.canBePlacedOver) && RR.isSolidToPlayerBlockId(uR) && RR.canModifyBlockAt(ZR, qR, iR) && RR.pGR(ZR, qR, iR, uR) && !RR.pGR(ZR, qR, iR, uR, JR) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, DR.ae)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, DR.C.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class fU {
      constructor(RR) {
        this.show = RR, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(RR, JR, GR) {
        var yR;
        if (!JR) return this.started = null, void this.gatedThisHold.clear();
        if (!RR) return void(this.started = null);
        const tR = `${RR.x},${RR.y},${RR.z},${RR.Qq}`;
        if (tR === this.started) return;
        this.started = tR;
        const uR = Hy(RR.y) ? Jn(RR.block, RR.Qq, RR.level) : null;
        if (null === uR || this.gatedThisHold.has(tR)) return;
        this.gatedThisHold.add(tR);
        const ZR = RR.block.split("|")[0];
        GR - (null !== (yR = this.hintedAt.get(ZR)) && void 0 !== yR ? yR : -1 / 0) < 5e3 || (this.hintedAt.set(ZR, GR), this.show({
          baf2ToastText: Gn(uR, RR.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var VU = GR(46);

    function KU(RR, JR) {
      const GR = [...RR.baf2CoreBankPaused];
      for (const [tR] of RR.baf2CoreBanked) GR.push(tR);
      for (const ZR of tR) {
        for (const {
            item: RR
          }
          of ZR.cost) GR.push(RR);
        for (const RR of ZR.newDeposits) GR.push(RR.block);
        for (const RR of ZR.unlocks) GR.push(RR, vR(RR));
        ZR.reward && GR.push(ZR.reward);
        for (const {
            item: RR
          }
          of null !== (yR = null === (uR = ZR.charge) || void 0 === uR ? void 0 : uR.items) && void 0 !== yR ? yR : []) {
          var yR, uR;
          GR.push(RR)
        }
      }
      return {
        message: RR,
        itemNames: JR([...new Set(GR)])
      }
    }
    const wU = "baf2MultiblockGuide";
    const rU = new Map;
    const eU = function(RR, JR, GR, tR) {
      let {
        localPlayerId: uR
      } = tR;
      const ZR = new fq,
        qR = new Gr,
        fR = new fr,
        VR = new qr(fR),
        KR = (RR, JR) => {
          JR ? VR.observe(RR) : VR.unobserve(RR)
        },
        wR = new Zr,
        rR = new Kr(KR),
        eR = RR => rR.covers(RR),
        aR = new Or;
      let LR;
      const nR = new xZ((RR => {
          LR.sendCommand(RR)
        })),
        UR = () => {
          nR.send("baf2questbook")
        },
        WR = RR => function(RR, JR, GR) {
          const yR = {};
          for (const tR of GR) {
            let GR = rU.get(tR);
            void 0 === GR && (GR = RR.getItemStat(JR, tR, "displayName"), rU.set(tR, GR)), yR[tR] = GR
          }
          return yR
        }(LR, uR, RR),
        AR = new ct(UR),
        CR = new Sr((() => Ut.d.get("loadingOverlayVisible"))),
        XR = new XV(nR, AR, CR),
        MR = new kr,
        BR = new iU(CR),
        pR = new fU((RR => {
          CR.show(RR, RR.baf2ToastMs)
        })),
        gR = new ye(KR),
        bR = new bL(gR),
        vR = new nZ,
        xR = new sL,
        NR = new QZ,
        oR = new Ve({
          read: () => !1 !== VU.i.getItem(wU),
          write: RR => {
            VU.i.setItem(wU, RR)
          }
        }),
        cR = new ce(oR),
        PR = new me(oR),
        IR = new ia(oR, (RR => function(RR, JR) {
          const GR = Eq(JR.w, JR.h, JR.d),
            yR = new Uint8Array(GR);
          for (let tR = 0; tR < GR; tR++) {
            const GR = xe(RR, sG(JR, Gy(JR, tR)));
            yR[tR] = null === GR ? 0 : zq(GR)
          }
          return yR
        }(LR, RR)), he(nR)),
        mR = new fa(oR, he(nR)),
        zR = new Za,
        dR = (RR, JR) => {
          let [GR, yR, tR] = RR;
          zR.answered(JR) || CR.show({
            baf2ToastText: [(0, DR.ae)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: GR,
                h: yR,
                d: tR
              }
            }, DR.C.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      IR.onSizeNotTaken(dR), mR.onSizeNotTaken(dR);
      const ER = new ra,
        YR = new Ya(oR),
        QR = new Qa,
        FR = new ZL(QR),
        TR = new nL,
        hR = new vL,
        RJ = new mL(hR),
        JJ = new TL(hR),
        GJ = hR.lookSource(),
        yJ = new rn({
          handles: RR => GJ.handles(RR) || RR === HR,
          line: (RR, JR) => RR === HR ? function(RR, JR, GR) {
            var yR;
            const tR = jR(null === (yR = JR.at(GR)) || void 0 === yR ? void 0 : yR.item);
            return null === tR ? {
              key: `${Vn}lookFarmEmpty`
            } : {
              key: RR.blockIdToBlockName(RR.getBlockId(GR[0], GR[1], GR[2])).endsWith("|Running") ? `${Vn}lookFarmRunning` : `${Vn}lookFarmWaiting`,
              keys: {
                mob: SR(tR)
              }
            }
          }(LR, gR, JR) : GJ.line(RR, JR),
          version: () => GJ.version() + gR.version()
        }, (RR => Se(oR.all(), RR, (RR => xe(LR, RR)))), (() => AR.get().tier)),
        tJ = new Oa,
        uJ = new gn,
        ZJ = new Dn,
        qJ = Dn.blade(),
        iJ = new jn,
        fJ = new Tr,
        VJ = new Qn,
        wJ = new In,
        rJ = new Pn;
      let eJ = -1 / 0,
        aJ = 0,
        LJ = -1 / 0,
        nJ = -1 / 0;
      const UJ = () => {
          nR.send("baf2islandsclose"), nJ = Date.now()
        },
        WJ = [];

      function AJ(RR) {
        var JR, GR, yR, tR, uR, ZR, iR;
        "core" === (null === (JR = qR.get()) || void 0 === JR ? void 0 : JR.kind) && "core" !== (null === RR || void 0 === RR ? void 0 : RR.kind) && nR.send("baf2coreclose"), "power" === (null === (GR = qR.get()) || void 0 === GR ? void 0 : GR.kind) && "power" !== (null === RR || void 0 === RR ? void 0 : RR.kind) && nR.send("baf2powerclose"), "water" === (null === (yR = qR.get()) || void 0 === yR ? void 0 : yR.kind) && "water" !== (null === RR || void 0 === RR ? void 0 : RR.kind) && nR.send(sR.o), "terminal" === (null === (tR = qR.get()) || void 0 === tR ? void 0 : tR.kind) && "terminal" !== (null === RR || void 0 === RR ? void 0 : RR.kind) && nR.send("baf2terminalclose"), "islands" === (null === (uR = qR.get()) || void 0 === uR ? void 0 : uR.kind) && "islands" !== (null === RR || void 0 === RR ? void 0 : RR.kind) && UJ();
        const fR = hR.getStatus();
        "collider" === (null === (ZR = qR.get()) || void 0 === ZR ? void 0 : ZR.kind) && "collider" !== (null === RR || void 0 === RR ? void 0 : RR.kind) && fR && nR.send(vi(fR, "close"));
        const VR = RR => "reactor" === RR || "battery" === RR;
        if (VR(null === (iR = qR.get()) || void 0 === iR ? void 0 : iR.kind) && !VR(null === RR || void 0 === RR ? void 0 : RR.kind)) {
          var KR, wR, rR;
          const RR = "reactor" === (null === (KR = qR.get()) || void 0 === KR ? void 0 : KR.kind) ? null === (wR = IR.get()) || void 0 === wR ? void 0 : wR.status.baf2RxAt : null === (rR = mR.get()) || void 0 === rR ? void 0 : rR.status.baf2BatAt;
          RR && nR.send(KJ(RR, "close"))
        }
        "quests" === (null === RR || void 0 === RR ? void 0 : RR.kind) && UR(), qR.set(RR), null === RR && MR.release()
      }

      function CJ() {
        (0, nt.h)(), AJ(null)
      }
      let XJ = new Set,
        MJ = !1;
      const BJ = {
        onCreate: RR => {
          LR = RR, LR.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const JR of gJ) {
            const RR = DJ[JR].inputSlots ? Bq(ZR) : Cq(JR, ZR, vR, nR);
            WJ.push((0, et.h)(JR, RR))
          }
          WJ.push((0, nt.G)((0, yR.createElement)(yR.Fragment, null, (0, yR.createElement)(er, {
            controller: rR
          }), (0, yR.createElement)(Ze, {
            store: gR
          }), (0, yR.createElement)(an, {
            store: yJ
          }), (0, yR.createElement)(mr, {
            store: AR
          }), (0, yR.createElement)(Er, {
            store: CR
          }), (0, yR.createElement)(Qr, {
            store: MR
          }), (0, yR.createElement)(hr, {
            store: fJ
          }), (0, yR.createElement)(wa, {
            store: ER
          }), (0, yR.createElement)(Fa, {
            store: QR
          })), {
            content: (0, yR.createElement)(yr, {
              commands: nR,
              store: qR,
              power: vR,
              water: NR,
              reactor: IR,
              battery: mR,
              collider: hR,
              terminal: xR,
              quests: AR,
              tutorial: XR,
              close: nt.j,
              leave: () => {
                MR.dropHeld(), (0, nt.h)()
              },
              askIslands: () => {
                nJ = -1 / 0, eJ = Date.now(), aJ = nR.send(kR)
              },
              openSocial: () => {
                (0, nt.h)(), Ut.d.set({
                  openEverythingMenuName: KG.o.SOCIAL
                })
              },
              showCore: RR => {
                AJ({
                  kind: "core",
                  core: RR
                }), nR.send("baf2corereopen")
              }
            }),
            onClose: () => {
              AJ(null)
            }
          })), WJ.push((0, Lt.p)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              AJ({
                kind: "quests"
              }), (0, nt.t)()
            }
          })), WJ.push(function(RR, JR) {
            let GR = null,
              yR = () => {};
            const tR = JR => {
              var tR;
              let {
                tutorial: uR,
                tutorialKnown: ZR
              } = JR;
              (null === (tR = GR) || void 0 === tR ? void 0 : tR.tutorial) === uR && GR.tutorialKnown === ZR || (GR = {
                tutorial: uR,
                tutorialKnown: ZR
              }, yR = (0, Lt.p)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: AV[uR],
                icon: {
                  kind: "icon",
                  name: WV[uR]
                },
                iconOnly: !0,
                disabled: !ZR,
                className: "Baf2TutorialButton",
                onClick: () => {
                  RR.next()
                }
              }))
            };
            tR(JR.get());
            const uR = xt.n.subscribe(Dt, tR);
            return () => {
              xt.n.unsubscribe(uR), yR()
            }
          }(XR, AR)), MJ = !1, WJ.push((0, nu.i)((() => {
            null !== JU && yU(JU)
          }))), WJ.push(tU()), WJ.push(function() {
            const RR = xt.n.subscribe(Dt, Tt),
              JR = () => {
                if (Ft) {
                  const RR = Ft;
                  Ft = null, (0, Nt.t)(RR)
                }
              },
              GR = xt.n.subscribe("toggleMenu", (RR => {
                "inventory" === (null === RR || void 0 === RR ? void 0 : RR.split("|")[0]) && JR()
              })),
              yR = xt.n.subscribe("appManagerUpdated|openInGameMenuName", (RR => {
                "inventory" === RR && JR()
              }));
            return () => {
              xt.n.unsubscribe(RR), xt.n.unsubscribe(GR), xt.n.unsubscribe(yR)
            }
          }()), WJ.push(function(RR) {
            const JR = hn(RR),
              GR = xt.n.subscribe(Dt, (RR => {
                sn.follow(RR, JR)
              }));
            return () => {
              xt.n.unsubscribe(GR), sn.clear()
            }
          }(LR)), WJ.push(function() {
            const RR = document.documentElement,
              JR = (0, Nr.c)(".InvenBodyRight", [], (() => {
                const JR = document.querySelector(".InvenBodyRight");
                JR && RR.style.setProperty("--baf2-backpack-width", `${JR.offsetWidth}px`)
              }));
            return () => {
              JR(), RR.style.removeProperty("--baf2-backpack-width")
            }
          }()), WJ.push(function() {
            const RR = document.documentElement;
            return RR.classList.add(Fn), () => {
              RR.classList.remove(Fn)
            }
          }()), WJ.push((() => {
            VR.dispose(), fR.dispose()
          })), aR.start(LR), WJ.push((() => {
            aR.dispose(), iJ.dispose(), bR.dispose()
          }))
        },
        onClose: () => {
          (0, Nt.t)([]), Ft = null, Qt = new Set, JU = null, (0, Nt.r)(new Map), rU.clear();
          for (const RR of WJ) RR();
          AR.dispose(), yJ.dispose(), CR.dispose(), MR.dispose(), tJ.dispose(), uJ.dispose(LR), cR.dispose(LR), PR.dispose(LR), YR.dispose(LR), FR.dispose(LR), QR.dispose(), TR.dispose(), oR.dispose(), IR.dispose(), mR.dispose(), ER.dispose(), ZJ.dispose(), qJ.dispose(), fJ.dispose(), RJ.dispose(LR), JJ.dispose(LR), hR.dispose(), VJ.dispose(), nR.clear()
        },
        onAfterRender: (RR, JR) => {
          var GR, yR, tR;
          try {
            aR.onAfterRender(JR)
          } catch (fR) {
            console.error("Error drawing BAF2 belt items", fR)
          }
          try {
            iJ.onAfterRender(LR, uR)
          } catch (fR) {
            console.error("Error drawing BAF2 jet flames", fR)
          }
          MJ || (MJ = !0, nR.send("baf2clientready"));
          const ZR = LR.getPositionView(uR);
          rR.onAfterRender(JR, ZR, wR), gR.onAfterRender(JR, ZR, wR, eR), VR.run(wR), tJ.onAfterRender(LR, ZR), uJ.onAfterRender(LR, ZR), bR.onAfterRender(LR, ZR), cR.onAfterRender(LR, ZR), PR.onAfterRender(LR, uR, ZR), YR.onAfterRender(LR, uR, ZR), FR.onAfterRender(LR, uR), TR.onAfterRender(LR, ZR), AR.onPlayerY(ZR[1]), RJ.onAfterRender(LR), JJ.onAfterRender(LR, uR, ZR);
          const iR = LR.getTargetedBlock();
          yJ.onAfterRender(LR, uR, null !== (GR = null === iR || void 0 === iR ? void 0 : iR.U3) && void 0 !== GR ? GR : 0, null !== (yR = null === iR || void 0 === iR ? void 0 : iR.position) && void 0 !== yR ? yR : null), VJ.onAfterRender(LR, JR), pR.onMining(function(RR, JR) {
            var GR, yR;
            const tR = RR.getMiningBlock();
            if (!tR) return null;
            const uR = (0, OR.h)(RR.getBlockId(tR[0], tR[1], tR[2])),
              ZR = null !== (GR = null === (yR = RR.uyR(JR)) || void 0 === yR ? void 0 : yR.name) && void 0 !== GR ? GR : null,
              qR = RR.getItemStat(JR, uR.split("|")[0], "harvestLevel");
            return {
              block: uR,
              x: tR[0],
              y: tR[1],
              z: tR[2],
              Qq: ZR,
              level: qR
            }
          }(LR, uR), LR.isMining(), performance.now()), "dropMap" === (null === (tR = qR.get()) || void 0 === tR ? void 0 : tR.kind) && Hy(ZR[1]) && CJ()
        },
        onPlayerChangeBlock: (RR, JR, GR, yR, tR, ZR) => {
          RR === uR && function(RR, JR, GR, yR, tR, uR, ZR) {
            const qR = cn(uR, ZR, RR.isPlayerCrouching(JR));
            if (null === qR) return;
            if (RR.lD(GR, yR, tR, qR), !RR.getClientOption(JR, "canPickUpItems")) return;
            const iR = ZG[qR.split("|")[0]];
            var fR, VR, KR;
            void 0 !== iR && (fR = RR.getInventoryItems(), VR = iR, KR = Ke.g.maxItemStackSize, RR.getInventoryFreeSlotCount(JR) > 0 || fR.some((RR => null !== RR && RR.name === VR && null !== RR.amount && RR.amount < KR))) && RR.playSound(JR, (0, ZU.f)("pickUp"), .5, 1)
          }(LR, RR, JR, GR, yR, tR, ZR)
        },
        onPlayerAltAction: (RR, JR, GR, yR, tR) => {
          var ZR, qR;
          if (!LR.getClientOption(uR, "canPickUpItems")) return;
          const iR = null !== (ZR = null === (qR = LR.uyR(uR)) || void 0 === qR ? void 0 : qR.name) && void 0 !== ZR ? ZR : null,
            fR = function(RR, JR) {
              const GR = RR.split("|")[0];
              return lR(GR) && JR !== ut && "Sky Pack" !== JR ? GR : null
            }(tR, iR);
          if (null !== fR) return void(wJ.tap(fR, performance.now()) && RU(LR, uR, fR, AR));
          if (!Iy(iR)) return;
          const VR = rJ.isNewPress(performance.now()),
            KR = function(RR, JR, GR) {
              return !Iy(JR) || GR ? null : Qy(RR)
            }(tR, iR, LR.isPlayerCrouching(uR));
          null !== KR && VR && LR.lD(JR, GR, yR, KR)
        },
        onPlayerAttemptAltAction: (RR, JR, GR, yR, tR) => {
          if (function(RR, JR, GR, yR, tR) {
              "Workbench" === yR.split("|")[0] && RR.getClientOption(GR, "canCraft") && (sn.open("Workbench", tR.get(), hn(RR)), JR.send("baf2station Workbench"))
            }(LR, nR, uR, tR, AR), uU(LR, uR, tR)) return "preventAction";
          BR.onAltAction(LR, uR, tR)
        },
        onReceivedMessageFromServer: (RR, JR) => {
          if ("baf2MachineStatus" === RR) {
            var GR, yR, tR, fR, VR, KR, wR, eR, UR, XR, BR, lR, pR, bR, OR, DR;
            const RR = JR,
              uR = RR.baf2MachineTaught;
            ZR.set(RR.baf2MachinePos, {
              status: RR.baf2MachineStatus,
              power: null !== (GR = RR.baf2MachinePower) && void 0 !== GR ? GR : null,
              opLeftMs: null !== (yR = RR.baf2MachineOpLeftMs) && void 0 !== yR ? yR : null,
              dug: RR.baf2MachineYield ? {
                item: RR.baf2MachineYield,
                name: WR([RR.baf2MachineYield])[RR.baf2MachineYield]
              } : null,
              powerCap: null !== (tR = RR.baf2MachinePowerCap) && void 0 !== tR ? tR : null,
              powerRates: null !== (fR = RR.baf2MachinePowerRates) && void 0 !== fR ? fR : null,
              coupled: !0 === RR.baf2MachineCoupled,
              couplerLevel: null !== (VR = RR.baf2MachineCoupler) && void 0 !== VR ? VR : 1,
              taught: uR,
              taughtName: uR ? WR([uR])[uR] : null,
              tier: null !== (KR = RR.baf2MachineTier) && void 0 !== KR ? KR : null,
              input: null !== (wR = RR.baf2MachineInput) && void 0 !== wR ? wR : null,
              inertCoupler: null !== (eR = RR.baf2MachineInertCoupler) && void 0 !== eR ? eR : null,
              inputShort: null !== (UR = RR.baf2MachineInputShort) && void 0 !== UR ? UR : null,
              field: null !== (XR = RR.baf2MachineField) && void 0 !== XR ? XR : null,
              noSeeds: !0 === RR.baf2MachineNoSeeds,
              fuelFed: !0 === RR.baf2MachineFuelFed,
              fuelFeeds: !0 === RR.baf2MachineFuelFeeds,
              coreFull: !0 === RR.baf2MachineCoreFull,
              waterUnpowered: !0 === RR.baf2MachineWaterUnpowered,
              powerShort: !0 === RR.baf2MachinePowerShort,
              powerWait: !0 === RR.baf2MachinePowerWait,
              reactorPowered: !0 === RR.baf2MachineReactorPowered,
              fuelLeftMs: null !== (BR = RR.baf2MachineFuelLeftMs) && void 0 !== BR ? BR : null,
              burning: null !== (lR = RR.baf2MachineBurning) && void 0 !== lR ? lR : null,
              fuelKeep: null !== (pR = RR.baf2MachineFuelKeep) && void 0 !== pR ? pR : null,
              water: null !== (bR = RR.baf2MachineWater) && void 0 !== bR ? bR : null,
              farm: null !== (OR = RR.baf2MachineFarm) && void 0 !== OR ? OR : null,
              cryo: null !== (DR = RR.baf2MachineCryo) && void 0 !== DR ? DR : null
            })
          } else if ("baf2StationOpen" === RR) {
            const RR = JR.baf2Station;
            wJ.consumeServerOpen(RR, performance.now()) || RU(LR, uR, RR, AR)
          } else if ("baf2Power" === RR) {
            const RR = JR;
            vR.set(RR), RR.baf2PowerOpen && (AJ({
              kind: "power"
            }), (0, nt.t)())
          } else if (RR === sR.v) {
            const RR = JR;
            NR.set(RR), RR.baf2WaterOpen && (AJ({
              kind: "water"
            }), (0, nt.t)())
          } else if ("baf2RxPlans" === RR) {
            var HR, cR, PR;
            const RR = JR;
            oR.DW(RR);
            const GR = new Set(RR.baf2RxPlanList.map((RR => {
              let [JR, GR, yR] = RR;
              return `${JR},${GR},${yR}`
            })));
            ER.retain(GR);
            const yR = null === (HR = qR.get()) || void 0 === HR ? void 0 : HR.kind,
              tR = "reactor" === yR ? null === (cR = IR.get()) || void 0 === cR ? void 0 : cR.status.baf2RxAt : "battery" === yR ? null === (PR = mR.get()) || void 0 === PR ? void 0 : PR.status.baf2BatAt : void 0;
            tR && XJ.has(tR.join(",")) && !GR.has(tR.join(",")) && CJ(), XJ = GR
          } else if ("baf2RxStatus" === RR) {
            const RR = JR;
            IR.set(RR), RR.baf2RxOpen && (AJ({
              kind: "reactor"
            }), (0, nt.t)())
          } else if ("baf2BatStatus" === RR) {
            const RR = JR;
            mR.set(RR), RR.baf2BatOpen && (AJ({
              kind: "battery"
            }), (0, nt.t)())
          } else if ("baf2RxAlarm" === RR) ER.DW(JR);
          else if ("baf2Bomb" === RR) QR.DW(JR, LR.getPositionView(uR));
          else if ("baf2Fallout" === RR) TR.DW(JR);
          else if ("baf2ColBeams" === RR) hR.onBeams(JR);
          else if ("baf2ColStatus" === RR) {
            const RR = JR;
            var SR, jR;
            if (hR.onStatus(RR), RR.baf2ColOpen) hR.onOpen(null !== (SR = null === (jR = LR.uyR(uR)) || void 0 === jR ? void 0 : jR.name) && void 0 !== SR ? SR : null), AJ({
              kind: "collider"
            }), (0, nt.t)()
          } else if ("baf2Terminal" === RR) {
            const RR = JR;
            var dR;
            if (xR.apply(RR)) RR.baf2TermReset && (AJ({
              kind: "terminal"
            }), (0, nt.t)());
            else "terminal" === (null === (dR = qR.get()) || void 0 === dR ? void 0 : dR.kind) && (qR.set(null), (0, nt.h)())
          } else if ("baf2Core" === RR) {
            var YR;
            const RR = JR;
            if (iR(!0 === RR.baf2CoreNuclear), function(RR, JR) {
                return "core" === (null === RR || void 0 === RR ? void 0 : RR.kind) && JR.baf2CoreTier > RR.core.message.baf2CoreTier
              }(qR.get(), RR)) return void(0, nt.h)();
            if (RR.baf2CoreRefresh && "core" !== (null === (YR = qR.get()) || void 0 === YR ? void 0 : YR.kind)) return;
            AJ({
              kind: "core",
              core: KU(RR, WR)
            }), RR.baf2CoreRefresh || (0, nt.t)()
          } else if ("baf2WrenchUndo" === RR) {
            const {
              baf2WrenchPos: RR,
              baf2WrenchBlock: GR
            } = JR;
            LR.lD(RR[0], RR[1], RR[2], GR)
          } else if ("baf2Toast" === RR) {
            const RR = JR;
            zR.heard(performance.now(), RR.baf2ToastMs), CR.show(RR)
          } else if ("baf2Area" === RR) MR.arrive(JR, null !== qR.get());
          else if ("baf2Quest" === RR) {
            const RR = JR;
            iR(!0 === RR.baf2QuestNuclear), AR.set(RR, function(RR, JR) {
              var GR, yR, tR, uR, ZR;
              const qR = [];
              for (const [, , VR, , , , , , KR, wR] of RR.baf2QuestSteps) null !== VR && qR.push(VR), qR.push(...null !== KR && void 0 !== KR ? KR : [], ...null !== wR && void 0 !== wR ? wR : []);
              RR.baf2QuestReward && qR.push(RR.baf2QuestReward);
              const iR = null === (GR = RR.baf2QuestSide) || void 0 === GR ? void 0 : GR[2][2];
              iR && qR.push(iR), qR.push(...null !== (yR = null === (tR = RR.baf2QuestSide) || void 0 === tR ? void 0 : tR[2][8]) && void 0 !== yR ? yR : [], ...null !== (uR = null === (ZR = RR.baf2QuestSide) || void 0 === ZR ? void 0 : ZR[2][9]) && void 0 !== uR ? uR : []);
              for (const [VR] of null !== (fR = RR.baf2QuestAlso) && void 0 !== fR ? fR : []) {
                var fR;
                qR.push(VR)
              }
              return JR(qR)
            }(RR, WR)), yU(RR.baf2QuestTier)
          } else if ("baf2Route" === RR) ! function(RR, JR) {
            let {
              baf2RouteCells: GR,
              baf2RouteInto: yR
            } = JR;
            0 !== GR.length && yR ? RR.setRouteChevrons({
              cells: GR.map(((RR, JR) => {
                const [tR, , uR] = function(RR, JR, GR) {
                  const yR = GR + 1 < RR.length ? RR[GR + 1] : JR;
                  return [yR[0] - RR[GR][0], 0, yR[2] - RR[GR][2]]
                }(GR, yR, JR);
                return {
                  pos: RR,
                  way: [tR, uR]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : RR.setRouteChevrons(null)
          }(LR, JR);
          else if ("baf2QuestBook" === RR) AR.setBook(JR);
          else if ("baf2Stalls" === RR) rR.set(JR.baf2StallCells);
          else if (RR === aG.n) aR.onMoves(JR);
          else if (RR === aG.h) aR.onLines(JR);
          else if ("baf2Labels" === RR) gR.DW(JR);
          else if ("baf2DropMap" === RR) AJ({
            kind: "dropMap",
            dropMap: JR
          }), (0, nt.t)();
          else if ("baf2Islands" === RR) {
            var FR, RJ;
            const RR = JR;
            if (nR.syncIslandEdits(RR.baf2IslandsAnswered), !RR.baf2IslandsOpen && "islands" !== (null === (FR = qR.get()) || void 0 === FR ? void 0 : FR.kind)) return;
            if (RR.baf2IslandsOpen) {
              var JJ, GJ;
              const JR = Ut.d.get("openEverythingMenuName"),
                GR = nR.sent() >= aJ,
                yR = "other" !== (rJ = {
                  askedAtMs: eJ,
                  askSent: GR,
                  reaskedAtMs: LJ,
                  nowMs: Date.now(),
                  panel: null !== (JJ = null === (GJ = qR.get()) || void 0 === GJ ? void 0 : GJ.kind) && void 0 !== JJ ? JJ : null,
                  inGameMenu: Ut.d.get("openInGameMenuName"),
                  everythingMenu: null === JR ? null : JR === KG.o.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== RR.baf2IslandsFocusInvite
                }).everythingMenu && (!!rJ.focusInvite || "islands" === rJ.panel && "clientGame" === rJ.inGameMenu || !(rJ.nowMs - rJ.reaskedAtMs < gf) && (rJ.askSent && rJ.nowMs - rJ.askedAtMs < gf ? "core" === rJ.panel && "clientGame" === rJ.inGameMenu && null === rJ.everythingMenu : "shop" === rJ.everythingMenu || null === rJ.inGameMenu));
              if (GR && (eJ = -1 / 0), LJ = -1 / 0, !yR) return void UJ()
            }
            const GR = (tJ = RR.baf2IslandsOpen, uJ = "islands" === (null === (RJ = qR.get()) || void 0 === RJ ? void 0 : RJ.kind), VJ = nJ, KJ = Date.now(), tJ && !uJ && KJ - VJ < gf);
            AJ({
              kind: "islands",
              islands: RR,
              arrivedAtMs: Date.now(),
              backToCore: bf(qR.get())
            }), GR && (nJ = -1 / 0, LJ = Date.now(), nR.send(kR)), RR.baf2IslandsOpen && ("clientGame" !== Ut.d.get("openInGameMenuName") && (0, Wt.e)(), (0, nt.t)())
          } else if ("baf2CoopTransfer" === RR) {
            var yJ;
            const RR = JR;
            RR.baf2TransferOn ? (AJ({
              kind: "transfer",
              transfer: RR,
              arrivedAtMs: Date.now()
            }), (0, nt.t)()) : "transfer" === (null === (yJ = qR.get()) || void 0 === yJ ? void 0 : yJ.kind) && (0, nt.h)()
          } else "baf2IslandLeft" === RR ? (MR.dropHeld(), null !== qR.get() && CJ(), "inventory" === Ut.d.get("openInGameMenuName") && (0, Wt.e)()) : "baf2Arc" === RR ? ZJ.DW(LR, JR) : "baf2Blade" === RR ? qJ.onBlade(LR, JR) : "baf2JetFlame" === RR ? iJ.DW(LR, JR) : "baf2GearPower" === RR && fJ.DW(JR);
          var tJ, uJ, VJ, KJ, rJ
        }
      };
      return BJ
    }
  },
  39659: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      f: () => qR
    });
    var yR = GR(377),
      tR = GR(35162),
      uR = GR(4555);

    function ZR(RR) {
      const JR = (0, uR.b)(RR);
      return (0, yR.Vb)(RR, void 0 === JR ? void 0 : (0, tR.displayNameOf)(JR))
    }

    function qR(RR, JR) {
      return RR(ZR(JR))
    }
  },
  39691: (RR, JR, GR) => {
    function yR(RR, JR, GR) {
      const yR = new Set,
        tR = new ResizeObserver(GR),
        uR = () => {
          const JR = new Set(document.querySelectorAll(RR));
          let uR = !1;
          for (const RR of yR) JR.has(RR) || (tR.unobserve(RR), yR.delete(RR), uR = !0);
          for (const RR of JR) yR.has(RR) || (tR.observe(RR), ZR.observe(RR, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), yR.add(RR));
          uR && GR()
        },
        ZR = new MutationObserver((JR => {
          JR.some((RR => "attributes" === RR.type)) && GR(), JR.some((JR => function(RR, JR, GR) {
            if ("childList" !== RR.type) return !1;
            for (const yR of RR.addedNodes)
              if (yR instanceof Element && (yR.matches(JR) || yR.querySelector(JR))) return !0;
            for (const yR of RR.removedNodes)
              if (yR instanceof Element)
                for (const RR of GR)
                  if (yR.contains(RR)) return !0;
            return !1
          }(JR, RR, yR))) && uR()
        }));
      ZR.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const qR of JR) tR.observe(qR);
      return window.addEventListener("resize", GR), uR(), GR(), () => {
        tR.disconnect(), ZR.disconnect(), window.removeEventListener("resize", GR)
      }
    }
    GR.d(JR, {
      c: () => yR
    })
  },
  39679: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR
    });
    var yR = GR(39672);
    const tR = 5,
      uR = [0, 0, 0],
      ZR = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function qR(RR, JR, GR, qR, iR, fR) {
      let [VR, KR, wR] = qR;
      const rR = (VR + .5 - GR[0]) ** 2 + (KR - GR[1]) ** 2 + (wR + .5 - GR[2]) ** 2;
      let eR = null;
      rR <= fR ** 2 && (uR[0] = VR + .5, uR[1] = KR + iR, uR[2] = wR + .5, eR = JR.projectWorldPosToViewport(uR));
      const aR = null !== eR && eR.x > -tR && eR.x < 100 + tR && eR.y > -tR && eR.y < 100 + tR;
      return (0, yR.h)(RR, !aR), aR ? (ZR.x = eR.x, ZR.y = eR.y, ZR.distSq = rR, ZR) : null
    }
  },
  39664: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      f: () => qR,
      i: () => ZR
    });
    var yR = GR(3588);
    const tR = "(max-height: 420px), (max-width: 650px)";

    function uR() {
      return (0, yR.d)(tR)
    }

    function ZR(RR) {
      return (0, yR.k)(tR, RR)
    }

    function qR() {
      return (0, yR.g)(tR)
    }
  },
  39672: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      h: () => uR
    });
    const yR = new WeakMap;

    function tR(RR) {
      let JR = yR.get(RR);
      return JR || (JR = {
        hidden: RR.hidden,
        x: NaN,
        y: NaN
      }, yR.set(RR, JR)), JR
    }

    function uR(RR, JR) {
      const GR = tR(RR);
      GR.hidden !== JR && (GR.hidden = JR, RR.hidden = JR)
    }

    function ZR(RR, JR, GR) {
      const yR = tR(RR);
      yR.x === JR && yR.y === GR || (yR.x = JR, yR.y = GR, RR.style.translate = `${JR}vw ${GR}vh`)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);