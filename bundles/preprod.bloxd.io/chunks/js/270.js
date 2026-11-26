export const id = 270;
export const ids = [270];
export const modules = {
  39383: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(39385);
    const rH = [0, 0, 0];
    class SH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH;
        this.pool = HH, this.origin = BH, this.count = 0, this.free = []
      }
      take() {
        var HH;
        const BH = null !== (HH = this.free.pop()) && void 0 !== HH ? HH : this.count++;
        return BH >= this.pool.aX && this.pool.grow(Math.max(2 * this.pool.aX, BH + 1)), this.hide(BH), BH
      }
      release(HH) {
        this.hide(HH), this.free.push(HH)
      }
      write(HH, BH, LH, rH) {
        const {
          records: SH
        } = this.pool, {
          origin: hH
        } = this, tH = HH * AH.d;
        SH[tH] = BH - hH[0], SH[tH + 1] = LH - hH[1], SH[tH + 2] = rH - hH[2], SH[tH + AH.g] = 0, this.pool.markDirty(HH)
      }
      hide(HH) {
        this.pool.records[HH * AH.d + AH.g] = 1, this.pool.markDirty(HH)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class hH {
      constructor(HH, BH, LH) {
        this.api = HH, this.model = BH, this.initialCapacity = LH, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(HH) {
        let BH = this.kinds.get(HH);
        if (void 0 === BH) {
          const LH = this.api.createInstancePool({
            ...this.model,
            item: HH
          }, this.initialCapacity);
          null === LH || void 0 === LH || LH.setOrigin(this.origin[0], this.origin[1], this.origin[2]), BH = LH && new SH(LH, this.origin), this.kinds.set(HH, BH)
        }
        return BH
      }
      follow(HH) {
        const {
          origin: BH
        } = this;
        if (Math.abs(HH[0] - BH[0]) <= 512 && Math.abs(HH[1] - BH[1]) <= 512 && Math.abs(HH[2] - BH[2]) <= 512) return !1;
        BH[0] = Math.floor(HH[0]), BH[1] = Math.floor(HH[1]), BH[2] = Math.floor(HH[2]);
        for (const LH of this.kinds.values()) null === LH || void 0 === LH || LH.pool.setOrigin(BH[0], BH[1], BH[2]);
        return !0
      }
      commit() {
        for (const HH of this.kinds.values()) null === HH || void 0 === HH || HH.commit()
      }
      dispose() {
        for (const HH of this.kinds.values()) null === HH || void 0 === HH || HH.dispose();
        this.kinds.clear()
      }
    }
  },
  39396: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      g: () => tH,
      h: () => zH
    });
    const AH = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      rH = [0, 1, 2, 0, 2, 3],
      SH = [4, 5];

    function hH(HH, BH, LH, AH, rH) {
      for (let hH = 0; hH < 6; hH++) SH.includes(hH) === rH && CH(HH, BH, LH, AH, hH)
    }

    function tH(HH, BH, LH, AH) {
      for (let rH = 0; rH < 6; rH++) CH(HH, BH, LH, AH, rH)
    }

    function zH(HH, BH, LH, SH, hH) {
      for (let tH = 0; tH < 6; tH++)
        for (const zH of [0, 1]) {
          const [CH, EH, XH] = [zH + 2, zH + 1, (zH + 3) % 4], GH = HH.length / 3;
          for (const [BH, rH] of [
              [zH, EH],
              [CH, EH],
              [CH, XH],
              [zH, XH]
            ])
            for (let zH = 0; zH < 3; zH++) {
              const CH = AH[3 * (4 * tH + BH) + zH],
                EH = AH[3 * (4 * tH + rH) + zH];
              HH.push((CH + (EH - CH) * hH) * SH / 2 + LH[zH])
            }
          for (const HH of rH) BH.push(GH + HH)
        }
    }

    function CH(HH, BH, LH, SH, hH) {
      let [tH, zH, CH] = LH, [EH, XH, GH] = SH;
      const YH = HH.length / 3;
      for (let rH = 4 * hH; rH < 4 * hH + 4; rH++) HH.push(AH[3 * rH] * EH / 2 + tH, AH[3 * rH + 1] * XH / 2 + zH, AH[3 * rH + 2] * GH / 2 + CH);
      for (const AH of rH) BH.push(YH + AH)
    }
  },
  39354: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => Cx
    });
    var AH = LH(45);
    const rH = [{
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
      SH = 10;
    let hH = !0;

    function tH() {
      return hH
    }

    function zH(HH) {
      hH = HH
    }
    const CH = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function EH() {
      return hH ? rH.length : SH
    }

    function XH(HH) {
      var BH, LH;
      return null !== (BH = null === (LH = rH[HH - 1]) || void 0 === LH ? void 0 : LH.reactorTier) && void 0 !== BH ? BH : 0
    }

    function GH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XH(HH) > 0;
      return LH && !hH ? "hidden" : HH <= BH ? "open" : LH ? BH < 5 ? "hidden" : BH < SH ? "teaser" : "locked" : "locked"
    }

    function YH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: AH,
        n: rH
      } = WH(HH);
      return {
        key: BH[AH],
        params: {
          [AH]: LH ? String(rH) : rH
        }
      }
    }
    const uH = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function QH(HH, BH) {
      return XH(HH) > 0 && BH < SH
    }

    function WH(HH) {
      const BH = XH(HH);
      if (BH > 0) return {
        kind: "atomic",
        n: BH,
        short: `A${BH}`
      };
      const LH = function(HH) {
        return HH >= 6 && HH <= 10 ? HH - 6 + 1 : 0
      }(HH);
      return LH > 0 ? {
        kind: "stage",
        n: LH,
        short: `S${LH}`
      } : {
        kind: "tier",
        n: HH,
        short: String(HH)
      }
    }

    function MH(HH) {
      return rH[Math.max(1, Math.min(HH, rH.length)) - 1]
    }

    function xH(HH, BH) {
      return HH < BH ? function(HH) {
        var BH;
        return null !== (BH = rH[HH]) && void 0 !== BH ? BH : null
      }(HH) : null
    }
    const vH = "baf2coresubmit",
      PH = "baf2corebankpause",
      TH = "baf2coredeposit",
      UH = "baf2corechargepause";

    function VH(HH) {
      var BH;
      return null !== (BH = HH.baf2CoreOpen) && void 0 !== BH ? BH : SH
    }
    const OH = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function bH(HH) {
      return OH.includes(HH)
    }
    const kH = (HH, BH) => BH.map((BH => [BH, [HH]])),
      mH = Object.fromEntries([...kH("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...kH("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...kH("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...kH("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...kH("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...kH("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...kH("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...kH("Parts Bench", ["Focus Lens"]), ...kH("Machine Bench", ["Laser", "Collider"]), ...kH("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...kH("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...kH("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...kH("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...kH("Tool Bench", ["Mob Cage"]), ...kH("Tool Bench", ["Pocket Terminal"]), ...kH("Tool Bench", ["Comet Beacon"]), ...kH("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function oH(HH) {
      var BH;
      return null !== (BH = mH[HH]) && void 0 !== BH ? BH : ["Workbench"]
    }

    function IH(HH) {
      return oH(HH)[0]
    }
    rH.slice(1).map(((HH, BH) => `Core Tier ${BH+2}`));
    var fH = LH(9940);
    const lH = ["on", "hud", "off"];

    function KH(HH) {
      return "on" === HH
    }
    var cH = LH(317);
    const eH = "Mob Farm",
      qH = {
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
      gH = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      NH = {
        1: 20,
        2: 60,
        3: 120
      },
      RH = "baf2farmvoid",
      jH = "Caged ",
      nH = " Spawner Block";

    function FH(HH) {
      return `lifeform:${(0,cH.Fe)(HH)}`
    }

    function DH(HH) {
      if (!HH) return null;
      if (HH.startsWith(jH)) {
        const BH = HH.slice(6);
        return gH.includes(BH) ? BH : null
      }
      if (HH.endsWith(nH)) {
        const BH = HH.slice(0, -14);
        return void 0 !== qH[BH] ? BH : null
      }
      return null
    }

    function wH(HH) {
      return !0 === HH.mobFarm
    }

    function ZH(HH, BH) {
      return NH[qH[BH]] * HH.opMs / 1e3
    }
    const dH = new Map;
    const aH = "baf2islands",
      sH = "baf2islandnew";

    function JH(HH) {
      const BH = rH.findIndex((BH => BH.unlocks.includes(HH)));
      return BH < 0 ? 1 : BH + 1
    }

    function iH(HH) {
      return Math.floor(HH).toLocaleString("en-US")
    }
    var pH = LH(39297);
    const yH = "baf2terminaltake",
      HB = "baf2terminalput",
      BB = ["one", "stack", "fill"];

    function LB(HH, BH, LH) {
      return `${yH} ${HH} ${BH} ${LH}`
    }

    function AB(HH, BH, LH) {
      return `${HB} ${HH} ${BH} ${LH}`
    }

    function rB(HH) {
      return `${HB} ${HH}`
    }
    const SB = [
      [`${yH} `, "take"],
      [`${HB} `, "put"]
    ];

    function hB(HH) {
      const BH = SB.find((BH => {
        let [LH] = BH;
        return HH.startsWith(LH)
      }));
      if (!BH) return null;
      const [LH, AH] = BH, [rH, SH, ...hH] = HH.slice(LH.length).trim().split(" "), tH = Number(rH);
      if (!Number.isSafeInteger(tH) || tH <= 0) return null;
      if ("put" === AH && void 0 === SH) return {
        kind: "putAll",
        seq: tH
      };
      const zH = function(HH) {
        if (BB.includes(HH)) return HH;
        const BH = Number(HH);
        return /^\d+$/.test(HH) && Number.isSafeInteger(BH) && BH > 0 ? BH : null
      }(null !== SH && void 0 !== SH ? SH : "");
      return null === zH || 0 === hH.length ? null : {
        kind: AH,
        seq: tH,
        mode: zH,
        item: hH.join(" ")
      }
    }

    function tB(HH, BH) {
      const LH = "number" === typeof HH ? HH : "one" === HH ? 1 : "stack" === HH ? 99 : BH;
      return Math.min(BH, LH)
    }

    function zB(HH, BH) {
      const LH = HH => "number" === typeof HH ? HH : "one" === HH ? 1 : 99;
      return "fill" === HH || "fill" === BH ? "fill" : LH(HH) + LH(BH)
    }

    function CB(HH, BH) {
      const LH = hB(HH),
        AH = hB(BH),
        rH = LH && AH ? function(HH, BH) {
          return "take" === HH.kind || "take" === BH.kind ? "take" === HH.kind && "take" === BH.kind && HH.item === BH.item ? {
            ...BH,
            mode: zB(HH.mode, BH.mode)
          } : null : "putAll" === HH.kind || "putAll" === BH.kind ? {
            kind: "putAll",
            seq: BH.seq
          } : HH.item === BH.item ? {
            ...BH,
            mode: zB(HH.mode, BH.mode)
          } : null
        }(LH, AH) : null;
      return rH ? "putAll" === (SH = rH).kind ? rB(SH.seq) : "put" === SH.kind ? AB(SH.seq, SH.mode, SH.item) : LB(SH.seq, SH.mode, SH.item) : null;
      var SH
    }
    const EB = "baf2rx";

    function XB(HH, BH) {
      for (var LH = arguments.length, AH = new Array(LH > 2 ? LH - 2 : 0), rH = 2; rH < LH; rH++) AH[rH - 2] = arguments[rH];
      return [EB, HH[0], HH[1], HH[2], BH, ...AH].join(" ")
    }
    const GB = 2,
      YB = 4,
      uB = 8,
      QB = 16,
      WB = 32,
      MB = 64,
      xB = 128,
      vB = 256,
      PB = 512,
      TB = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      UB = [{
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
    const VB = "Biomass",
      OB = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function bB(HH) {
      return {
        input: VB,
        inputAmount: 1,
        output: HH,
        outputAmount: 1
      }
    }
    const kB = "baf2synth",
      mB = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      oB = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      IB = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      fB = function(HH, BH) {
        return {
          input: HH,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: BH,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      lB = function(HH, BH) {
        return {
          ...fB(HH, BH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      KB = oB.map((HH => lB(HH, "Biomass", 2))),
      cB = {
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
          recipes: [fB("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), fB("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), fB("Raw Gold", "Gold Grit", 2), fB("Messy Stone", "Sand"), fB("Gravel", "Sand"), fB("Raw Voltite", "Voltite Dust", 2), fB("Moonstone", "Moonstone Dust", 4), fB("Wheat Seeds", "Fertiliser"), fB("Raw Uranium", "Uranium Grit", 2), lB("Mossy Messy Stone", "Sand"), ...KB],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [fB("Iron Grit", "Iron Bar"), fB("Copper Grit", "Copper Bar"), fB("Gold Grit", "Gold Bar"), fB("Raw Iron", "Iron Bar"), fB("Raw Copper", "Copper Bar"), fB("Raw Gold", "Gold Bar"), fB("Sand", "Glass"), fB("Messy Stone", "Stone"), ...cH.bd.map((HH => fB(HH, "Charcoal", 1, 4))), fB("Wheat", "Bread", 1, 2), ...oB.map(((HH, BH) => lB(HH, IB[BH])))],
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
          recipes: [fB("Iron Bar", "Iron Plate"), fB("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [fB("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [fB("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [fB("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), fB("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), fB("Raw Gold", "Gold Grit", 3), fB("Raw Voltite", "Voltite Dust", 3), fB("Messy Stone", "Sand", 2), fB("Gravel", "Sand", 2), fB("Moonstone", "Moonstone Dust", 6), fB("Raw Uranium", "Uranium Grit", 3), lB("Mossy Messy Stone", "Sand", 2), ...KB],
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
          table: TB
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [fB("Coal", "Diamond", 1, 24), fB("Voltite Dust", "Moonstone", 1, 12)],
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
        ...pH.i
      },
      eB = {
        Crusher: [fB("Spent Pellet", "Glow Dust"), fB("Wheat Seeds", "Biomass"), fB("Wheat", "Biomass"), fB("Dead Bush", "Biomass"), fB("Dusk Moss", "Biomass"), fB("Rotten Flesh", "Biomass"), fB("Bone", "Biomass", 2)],
        "Shatter Mill": [fB("Spent Pellet", "Glow Dust"), fB("Wheat Seeds", "Biomass"), fB("Wheat", "Biomass"), fB("Dead Bush", "Biomass"), fB("Dusk Moss", "Biomass"), fB("Rotten Flesh", "Biomass"), fB("Bone", "Biomass", 2), ...cH.bd.map((HH => fB(HH, "Biomass")))],
        Smelter: [fB("Biomass", "Fertiliser", 2)],
        Press: [fB("Coal", "Graphite", 1, 4)]
      },
      qB = "Power Coupler",
      gB = "Advanced Coupler",
      NB = "Nova Coupler",
      RB = [{
        item: qB,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: gB,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: NB,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const jB = new Map;

    function nB(HH) {
      var BH, LH;
      return null !== (BH = null !== (LH = HH.fuelSlot) && void 0 !== LH ? LH : HH.couplerSlot) && void 0 !== BH ? BH : null
    }

    function FB(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!HH.couplable) throw new Error(`${HH.kind} takes no Power Coupler`);
      let LH = jB.get(HH);
      LH || (LH = [], jB.set(HH, LH));
      let AH = LH[BH];
      if (!AH) {
        var rH;
        const {
          divisor: SH,
          powerPerS: hH
        } = RB[BH - 1], tH = HH.opMs / SH, zH = void 0 !== HH.fluidMade || void 0 !== HH.cryoMade ? HH.powerPerOp : hH * tH / 1e3;
        AH = {
          ...HH,
          fuelSlot: null,
          couplerSlot: null !== (rH = nB(HH)) && void 0 !== rH ? rH : void 0,
          opMs: tH,
          powerPerOp: zH,
          coupled: !0
        }, BH > 1 && (AH = {
          ...AH,
          couplerLevel: BH
        }), LH[BH] = AH
      }
      return AH
    }
    const DB = new Map;
    const wB = new Map;

    function ZB(HH, BH) {
      if (null === BH || (LH = BH, !OB.includes(LH))) return HH;
      var LH;
      let AH = wB.get(BH);
      return AH || (AH = {
        ...HH,
        recipes: [bB(BH)]
      }, wB.set(BH, AH)), AH
    }

    function dB(HH) {
      return !0 === HH.synth
    }
    const aB = (HH, BH, LH, AH) => ({
        output: HH,
        outputAmount: BH,
        tier: LH,
        inputs: AH.map((HH => {
          let [BH, LH] = HH;
          return {
            item: BH,
            amount: LH
          }
        }))
      }),
      sB = Object.fromEntries([aB("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), aB("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), aB("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), aB("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), aB("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), aB("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), aB("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), aB("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), aB("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), aB("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), aB("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), aB("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), aB("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), aB("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), aB("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), aB("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), aB("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), aB("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), aB("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), aB("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), aB("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), aB("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), aB("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), aB("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), aB("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), aB("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), aB("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), aB("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), aB("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), aB("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((HH => [HH.output, HH]))),
      JB = new Map;

    function iB(HH, BH) {
      let LH = cB[HH];
      if (BH.atomic && (LH = function(HH) {
          const BH = eB[HH.kind];
          if (!BH) return HH;
          let LH = DB.get(HH.kind);
          if (!LH) {
            const AH = new Set(BH.map((HH => HH.input))),
              rH = HH.recipes.filter((HH => !AH.has(HH.input)));
            LH = {
              ...HH,
              recipes: [...rH, ...BH]
            }, DB.set(HH.kind, LH)
          }
          return LH
        }(LH)), LH.synth) return ZB(LH, BH.taught);
      if (BH.coupled && LH.couplable) return FB(LH, BH.level);
      const AH = LH.inputSlots && null !== BH.taught ? sB[BH.taught] : void 0;
      if (!AH) return LH;
      const rH = `${HH}|${AH.output}`;
      let SH = JB.get(rH);
      return SH || (SH = {
        ...LH,
        bench: AH
      }, JB.set(rH, SH)), SH
    }
    const pB = ["Diamond", "Moonstone"];

    function yB(HH) {
      return new Set(HH.flatMap((HH => HH.bonus ? [HH.output, HH.bonus.item] : [HH.output])).filter((HH => !pB.includes(HH))))
    }
    const HL = Object.values(cB).flatMap((HH => HH.recipes));
    yB(HL.filter((HH => !0 !== HH.nuclear))), yB([...HL.filter((HH => !0 === HH.nuclear)), ...Object.values(eB).flat()]);

    function BL(HH) {
      return null === HH.inputSlot && void 0 === HH.inputSlots && void 0 === HH.powerMade && void 0 === HH.fluidMade && !HH.treeCutter && void 0 === HH.table
    }

    function LL(HH) {
      return !0 === HH.treeCutter
    }
    const AL = ["Voltite Cell"];

    function rL(HH) {
      var BH, LH;
      return null !== (BH = null === (LH = HH.fuels) || void 0 === LH ? void 0 : LH.some((HH => AL.includes(HH)))) && void 0 !== BH && BH
    }
    const SL = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(cH.bd.map((HH => [HH, 8e3]))),
        ...Object.fromEntries(cH.Id.map((HH => [HH, 2e3]))),
        "Voltite Cell": 12e4
      },
      hL = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      tL = {
        "Uranium Deposit": 4e3
      };

    function zL(HH) {
      var BH;
      return null !== (BH = Object.keys(hL).find((BH => hL[BH] === HH))) && void 0 !== BH ? BH : null
    }

    function CL(HH) {
      return mB.includes(HH)
    }

    function EL(HH) {
      return !0 !== HH.nuclear || tH()
    }
    var XL = LH(304);
    var GL = LH(10009),
      YL = LH(9946),
      uL = LH(10015),
      QL = LH(10007);
    const WL = "Reactor Controller",
      ML = "Reactor Port",
      xL = "Battery Cell",
      vL = ["fuel", "water", "waste"],
      PL = {
        fuel: ML,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      TL = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      UL = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      VL = "Reactor Frame",
      OL = "Reactor Glass",
      bL = {
        edge: [VL],
        cap: [OL, ML],
        wall: [OL, ML],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [WL]
      },
      kL = {
        edge: [xL],
        cap: [xL],
        wall: [xL],
        inside: [xL],
        ctrl: [xL]
      },
      mL = ["edge", "cap", "wall", "inside"],
      oL = ["Reactor Slag"];

    function IL(HH) {
      return oL.includes(fL(HH))
    }

    function fL(HH) {
      const BH = HH.indexOf("|");
      return BH < 0 ? HH : HH.slice(0, BH)
    }

    function lL(HH) {
      return fL(HH) === WL ? "reactor" : null
    }

    function KL(HH) {
      return fL(HH) !== ML ? null : HH.endsWith("|Water") ? "water" : HH.endsWith("|Waste") ? "waste" : "fuel"
    }

    function cL(HH) {
      const BH = KL(HH);
      return null === BH ? null : gL(PL[vL[(vL.indexOf(BH) + 1) % vL.length]], function(HH) {
        return HH.includes(eL)
      }(HH))
    }
    const eL = "|meta|rot1|Formed",
      qL = new Set([VL, OL, ML]);

    function gL(HH, BH) {
      var LH;
      const AH = fL(HH);
      if (!qL.has(AH)) return HH;
      if (AH !== ML) return BH ? AH + eL : AH;
      const rH = null !== (LH = KL(HH)) && void 0 !== LH ? LH : "fuel";
      return BH ? "fuel" === rH ? AH + eL : `${AH}${eL}|${"water"===rH?"Water":"Waste"}` : PL[rH]
    }

    function NL(HH, BH) {
      const LH = AA(HH, BH);
      if ("Air" === LH) return !1;
      const AH = "reactor" === HH ? bL : kL;
      return mL.some((HH => AH[HH].includes(LH))) || "reactor" === HH && oL.includes(LH)
    }

    function RL(HH) {
      return UL[HH]
    }

    function jL(HH) {
      var BH;
      return null !== (BH = TL[HH]) && void 0 !== BH ? BH : TL[1]
    }

    function nL(HH) {
      const [BH, , LH] = jL(HH);
      return [LH, 0, -BH]
    }

    function FL(HH, BH, LH, AH, rH, SH) {
      return {
        ctrl: [HH[0], HH[1], HH[2]],
        rot: TL[BH] ? BH : 1,
        w: LH,
        h: AH,
        d: rH,
        cu: SH[0],
        cv: SH[1]
      }
    }

    function DL(HH, BH) {
      return "reactor" === HH ? [Math.floor((BH - 1) / 2), 0] : [0, 0]
    }

    function wL(HH, BH, LH, AH, rH) {
      let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : HH.rot;
      if (LH === HH.w && AH === HH.h && rH === HH.d && SH === HH.rot) return HH;
      const [hH] = DL(BH, HH.w);
      if (HH.cu === hH && HH.cv <= 1) return FL(HH.ctrl, SH, LH, AH, rH, DL(BH, LH));
      const tH = (HH, BH) => Math.max(1, Math.min(BH, HH));
      return FL(HH.ctrl, SH, LH, AH, rH, [tH(HH.cu, LH - 2), 0 === HH.cv ? 0 : tH(HH.cv, AH - 2)])
    }
    const ZL = 11,
      dL = 2 * ZL + 1;
    new Uint8Array(dL * dL * dL);

    function aL(HH) {
      return HH.w * HH.h * HH.d
    }

    function sL(HH) {
      const BH = nL(HH.rot);
      return [HH.ctrl[0] - BH[0] * HH.cu, HH.ctrl[1] - HH.cv, HH.ctrl[2] - BH[2] * HH.cu]
    }

    function JL(HH) {
      return HH.cv * HH.d * HH.w + HH.cu
    }

    function iL(HH, BH) {
      const LH = BH % HH.w,
        AH = Math.floor(BH / HH.w) % HH.d;
      return [LH, Math.floor(BH / (HH.w * HH.d)), AH]
    }

    function pL(HH, BH) {
      const [LH, AH, rH] = iL(HH, BH), SH = sL(HH), hH = jL(HH.rot), tH = nL(HH.rot);
      return [SH[0] + tH[0] * LH - hH[0] * rH, SH[1] + AH, SH[2] + tH[2] * LH - hH[2] * rH]
    }

    function yL(HH, BH) {
      const LH = sL(HH),
        AH = jL(HH.rot),
        rH = nL(HH.rot),
        SH = BH[0] - LH[0],
        hH = BH[2] - LH[2],
        tH = SH * rH[0] + hH * rH[2],
        zH = -(SH * AH[0] + hH * AH[2]),
        CH = BH[1] - LH[1];
      return tH < 0 || tH >= HH.w || CH < 0 || CH >= HH.h || zH < 0 || zH >= HH.d ? -1 : (CH * HH.d + zH) * HH.w + tH
    }

    function HA(HH, BH) {
      if (BH === JL(HH)) return "ctrl";
      const [LH, AH, rH] = iL(HH, BH), SH = 0 === AH || AH === HH.h - 1, hH = Number(0 === LH || LH === HH.w - 1) + Number(SH) + Number(0 === rH || rH === HH.d - 1);
      return hH >= 2 ? "edge" : 1 === hH ? SH ? "cap" : "wall" : "inside"
    }

    function BA(HH, BH) {
      const [LH, AH, rH] = iL(HH, BH);
      return 0 === LH || LH === HH.w - 1 || 0 === AH || AH === HH.h - 1 || 0 === rH || rH === HH.d - 1 ? -1 : ((AH - 1) * (HH.d - 2) + (rH - 1)) * (HH.w - 2) + (LH - 1)
    }

    function LA(HH, BH) {
      const LH = HH.w - 2,
        AH = HH.d - 2,
        rH = BH % LH + 1,
        SH = Math.floor(BH / LH) % AH + 1;
      return ((Math.floor(BH / (LH * AH)) + 1) * HH.d + SH) * HH.w + rH
    }

    function AA(HH, BH) {
      const LH = fL(BH);
      return "reactor" === HH && LH === WL ? VL : LH
    }

    function rA(HH, BH, LH) {
      const AH = "ctrl" === BH ? fL(LH) : AA(HH, LH);
      return ("reactor" === HH ? bL : kL)[BH].includes(AH) ? "ok" : "Air" === AH ? "missing" : NL(HH, LH) ? "wrong" : "blocked"
    }

    function SA(HH, BH) {
      return "battery" === HH ? xL : "inside" === BH ? null : function(HH, BH) {
        if ("inside" === BH || "ctrl" === BH || "battery" === HH) return null;
        return "edge" === BH ? VL : OL
      }(HH, BH)
    }
    const hA = {
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
      tA = "Collider",
      zA = "Laser",
      CA = "Star Alloy",
      EA = "Glow Dust",
      XA = [tA, "_Collider Focus"];

    function GA(HH) {
      return XA.indexOf(fL(HH))
    }

    function YA(HH) {
      return fL(HH) === zA
    }

    function uA(HH) {
      return [
        [HH[0], HH[1], HH[2]],
        [HH[0], HH[1] + 1, HH[2]]
      ]
    }
    const QA = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function WA(HH, BH, LH) {
      const AH = QA[BH];
      return [HH[0] + AH[0] * LH, HH[1], HH[2] + AH[2] * LH]
    }

    function MA(HH, BH) {
      if (BH[1] !== HH[1]) return null;
      const LH = BH[0] - HH[0],
        AH = BH[2] - HH[2];
      if (0 !== LH === (0 !== AH)) return null;
      const rH = Math.abs(LH + AH);
      if (rH > hA.LASER_D) return null;
      return {
        dir: AH < 0 ? 0 : LH > 0 ? 1 : AH > 0 ? 2 : 3,
        Ot: rH
      }
    }

    function xA(HH, BH, LH) {
      const AH = BH => Math.abs(HH[0] - BH[0]) <= 1 && Math.abs(HH[1] - BH[1]) <= 1;
      return AH(BH) || AH(LH)
    }

    function vA(HH, BH) {
      return function(HH, BH, LH, AH) {
        return [0, 1, 2, 3].map((rH => {
          for (let SH = 1; SH <= hA.LASER_D; SH++) {
            const hH = WA(HH, rH, SH);
            if (xA([hH[0], hH[2]], BH, LH) || !AH(hH)) return !1
          }
          return !0
        }))
      }(uA(HH)[1], BH.spawnXZ, BH.coreXZ, (HH => HH[1] >= GL.s && HH[1] < GL.s + GL.u && HH[0] >= BH.minXZ[0] && HH[0] <= BH.maxXZ[0] && HH[2] >= BH.minXZ[1] && HH[2] <= BH.maxXZ[1]))
    }
    const PA = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function TA(HH) {
      return Math.max(48 + 16 * HH, MH(HH).machineAllowance)
    }
    const UA = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function VA(HH) {
      const BH = HH.split("|")[0];
      return UA.includes(BH) ? "Solar Panel" : BH === uL.b ? "Fluid Pipe" : GA(BH) >= 0 ? "Collider" : (LH = BH, PA.includes(LH) ? BH : null);
      var LH
    }
    const OA = "buildAFactory2Game:solarPanelDescription";
    const bA = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function kA(HH, BH) {
      var LH;
      return null !== (LH = bA.find((LH => {
        var AH;
        return (null !== (AH = HH.level(LH)) && void 0 !== AH ? AH : 0) >= BH
      }))) && void 0 !== LH ? LH : null
    }
    const mA = "buildAFactory2Game:";
    let oA = null;
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
      fA = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      lA = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      KA = {
        "Loot Chest": `${mA}lookRuinChestName`
      };

    function cA(HH, BH) {
      var LH, AH, rH;
      let SH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BH;
      if ("Solar Panel" === VA(BH)) return {
        name: (0, cH.Pe)(HH.displayName("Solar Panel")),
        detail: OA,
        detailItem: null
      };
      const hH = BH.endsWith(" Ore"),
        zH = (oA ??= new Set([...Object.keys((0, YL.j)()), ...Object.keys((0, uL.p)())].map((HH => HH.split("|")[0]))), oA).has(BH),
        CH = hH || zH ? null : function(HH) {
          var BH;
          return HH.endsWith(" Log") && !HH.startsWith("Barkless ") ? "lookLog" : HH.endsWith(" Sapling") ? "lookSapling" : HH.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (BH = IA[HH]) && void 0 !== BH ? BH : null
        }(BH);
      if (!HH.isBlock(BH) || !hH && !zH && null === CH) return null;
      const EH = null !== (LH = KA[BH]) && void 0 !== LH ? LH : (0, cH.Yb)(BH, null !== (AH = HH.displayName(SH)) && void 0 !== AH ? AH : HH.displayName(BH));
      if (null !== CH) return {
        name: EH,
        detail: `${mA}${CH}`,
        detailItem: null
      };
      const XH = null !== (rH = fA[BH]) && void 0 !== rH ? rH : tH() ? lA[BH] : void 0;
      if (zH && void 0 !== XH) return {
        name: EH,
        detail: `${mA}${XH}`,
        detailItem: null
      };
      const GH = hL[BH];
      if (void 0 !== GH) return {
        name: EH,
        detail: `${mA}lookDeposit`,
        detailItem: (0, cH.Yb)(GH, HH.displayName(GH))
      };
      const YH = HH.harvestLevel(BH);
      if (hH && "rock" === HH.harvestType(BH) && 0 !== YH) {
        const BH = kA(HH, null !== YH && void 0 !== YH ? YH : 0);
        if (BH === bA[0]) return {
          name: EH,
          detail: `${mA}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== BH) return {
          name: EH,
          detail: `${mA}lookPickaxe`,
          detailItem: (0, cH.Yb)(BH, HH.displayName(BH))
        }
      }
      return {
        name: EH,
        detail: (0, cH.Pe)(HH.description(BH)),
        detailItem: null
      }
    }

    function eA(HH) {
      return HH < GL.s - 24
    }
    const qA = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const gA = "Wrench",
      NA = "Nova Wrench";

    function RA(HH) {
      return HH === gA || HH === NA
    }
    const jA = [...GL.O, "Belt Lift", "Belt Drop"];
    const nA = ["Belt Lift", "Belt Drop"],
      FA = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function DA(HH) {
      return HH.split("|")[0]
    }

    function wA(HH) {
      const BH = /\|rot(\d)/.exec(HH);
      return BH ? Number(BH[1]) : 1
    }

    function ZA(HH) {
      return HH % 4 + 1
    }

    function dA(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === BH && "" === LH ? HH : `${HH}|meta|rot${BH}${LH}`
    }

    function aA(HH) {
      return DA(HH) === GL.A ? (0, GL.X)(HH) ? "gateRight" : "gateLeft" : (0, GL.bb)(HH)
    }

    function sA(HH) {
      const BH = DA(HH),
        LH = wA(HH);
      if (GL.O.includes(BH)) return (0, GL.R)(BH, ZA(LH), null);
      if (BH === GL.k) return (0, GL.fb)(ZA(LH), (0, GL.$)(HH));
      if (BH === GL.D) {
        const AH = FA[(0, GL.bb)(HH)];
        return null === AH ? dA(BH, ZA(LH)) : dA(BH, LH, GL.H[AH])
      }
      return BH === GL.A ? (0, GL.X)(HH) ? dA(BH, ZA(LH)) : dA(BH, LH, GL.p) : QL.c.includes(BH) && !nA.includes(BH) || CL(BH) ? dA(BH, ZA(LH)) : null
    }

    function JA(HH) {
      return QL.c.includes(HH) || CL(HH) || null !== VA(HH)
    }

    function iA(HH) {
      return "Solar Panel" === VA(HH)
    }
    const pA = "buildAFactory2Game:",
      yA = {
        leftFront: `${pA}lookSplitDetail_leftFront`,
        frontRight: `${pA}lookSplitDetail_frontRight`,
        gateRight: `${pA}lookGateDetail_gateRight`
      };

    function Hr(HH, BH) {
      var LH;
      let AH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const rH = aA(HH),
        SH = null === rH ? null : `${pA}${rH.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${rH}`,
        hH = null === rH ? null : null !== (LH = yA[rH]) && void 0 !== LH ? LH : null;
      if (RA(BH) && AH) {
        const LH = DA(HH);
        return BH === NA && tH() && function(HH) {
          return jA.includes(DA(HH))
        }(HH) ? {
          mode: SH,
          detail: hH,
          next: `${pA}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: SH,
          detail: hH,
          next: JA(LH) && !iA(LH) ? `${pA}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const zH = RA(BH) ? sA(HH) : null;
      if (null === zH) return {
        mode: SH,
        detail: hH,
        next: null,
        nextState: null
      };
      const CH = aA(zH);
      return null === CH || wA(zH) !== wA(HH) ? {
        mode: SH,
        detail: hH,
        next: `${pA}lookWrenchTurn`,
        nextState: null
      } : {
        mode: SH,
        detail: hH,
        next: `${pA}lookWrenchNext`,
        nextState: `${pA}lookWrenchState_${CH}`
      }
    }
    const Br = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const Lr = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function Ar(HH) {
      return [0, 1, 2, 3].map((BH => 0 !== (HH & 1 << BH)))
    }

    function rr(HH) {
      const BH = [];
      for (let LH = 8; LH + 2 < HH.length; LH += 3) BH.push([HH[LH], HH[LH + 1], HH[LH + 2]]);
      return {
        focus: [HH[0], HH[1], HH[2]],
        lasers: Ar(HH[3]),
        open: Ar(HH[4]),
        live: Ar(HH[5]),
        on: 1 === HH[6],
        state: Lr[HH[7]],
        blockers: BH
      }
    }
    const Sr = "Arc Caster",
      hr = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      tr = (Object.values(hr), "Jet Chestplate"),
      zr = "Nova Jet Chestplate",
      Cr = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Er = Object.values(Cr);

    function Xr(HH, BH, LH) {
      return Math.min(function(HH) {
        return tH() && XH(HH) >= 5 ? 20 : 10
      }(LH), Math.floor(function(HH, BH) {
        return Math.max(0, HH) + (tH() ? Math.max(0, BH) : 0)
      }(HH, BH) / 5))
    }

    function Gr(HH, BH, LH) {
      const AH = Xr(BH, LH, HH),
        rH = XH(HH),
        SH = (rH >= 3 ? 55 : rH >= 1 ? 50 : HH >= 8 ? 45 : 30) + AH,
        hH = Math.max(100 + AH, 2 * SH);
      return {
        arcDamage: SH,
        arcPierce: HH >= 7 ? 2 : 1,
        arcChain: HH >= 10,
        barrierMax: (rH >= 4 ? 100 : rH >= 2 ? 90 : HH >= 9 ? 80 : HH >= 6 ? 60 : 40) + 5 * AH,
        barrierRegenPerS: rH >= 5 ? 20 : HH >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * AH,
        novaShieldRegenPerS: 32,
        bladeDamage: hH,
        bladePunch: Math.round(.5 * hH),
        forgeRank: AH
      }
    }
    const Yr = {
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
    var ur = LH(37685),
      Qr = LH(37479),
      Wr = LH(37474),
      Mr = LH(15),
      xr = LH(1659),
      vr = LH(1038),
      Pr = LH.n(vr);

    function Tr(HH) {
      return !0 === HH.field
    }
    const Ur = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function Vr(HH) {
      return Ur.has(HH) ? `buildAFactory2Game:itemPlural_${(0,cH.Fe)(HH)}` : null
    }
    var Or = LH(1123),
      br = LH(1315),
      kr = LH(1986),
      mr = LH(1967),
      or = LH(1396),
      Ir = LH(37678),
      fr = LH(18),
      lr = LH(37672);
    const Kr = "baf2QuestView",
      cr = "baf2PlayerY",
      er = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class qr {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = HH, this.view = {
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
      set(HH, BH) {
        var LH, AH, rH, SH, hH, tH, zH, CH;
        const EH = JSON.stringify(HH.baf2QuestName) === JSON.stringify(this.view.name),
          XH = new Set(this.view.rows.filter((HH => HH.done)).map((HH => HH.id))),
          GH = new Set(this.view.rows.filter((HH => HH.justFinished)).map((HH => HH.id))),
          YH = HH.baf2QuestSide,
          uH = null !== YH && !0 === HH.baf2QuestSideFocus;
        let QH = !1,
          WH = 0;
        const MH = HH.baf2QuestSteps.map((HH => {
            const BH = wr(HH, er.has(HH[0]) ? HH[0] : "" + WH++),
              LH = EH && BH.done && !XH.has(BH.id);
            return BH.justFinished = LH || EH && BH.done && GH.has(BH.id), QH ||= LH, BH
          })),
          xH = Dr(MH);
        xH >= 0 && !uH && (MH[xH].current = !0);
        const vH = !EH && null !== HH.baf2QuestName,
          PH = JSON.stringify(YH && [YH[0], YH[1]]),
          TH = PH === JSON.stringify(null !== (LH = null === (AH = this.view.side) || void 0 === AH ? void 0 : AH.name) && void 0 !== LH ? LH : null),
          UH = null !== YH && !this.sidesSeen.has(PH);
        UH && this.sidesSeen.add(PH), this.serverTutorial = null !== (rH = HH.baf2QuestTutorial) && void 0 !== rH ? rH : "on", (null !== (SH = HH.baf2QuestTutorialSeq) && void 0 !== SH ? SH : 0) >= this.pickSeq && this.endPick();
        const VH = !EH || !TH || HH.baf2QuestTier !== this.view.tier;
        this.view = {
          name: HH.baf2QuestName,
          rows: MH,
          reward: HH.baf2QuestReward,
          goal: HH.baf2QuestGoal,
          pulse: this.view.pulse + (QH || vH ? 1 : 0),
          itemNames: BH,
          side: YH && {
            name: [YH[0], YH[1]],
            row: {
              ...wr(YH[2], "side"),
              current: uH
            },
            goal: null !== (hH = YH[3]) && void 0 !== hH ? hH : null
          },
          sideCameUpAt: UH ? Date.now() : this.view.sideCameUpAt,
          tier: HH.baf2QuestTier,
          core: HH.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (tH = HH.baf2QuestAlso) && void 0 !== tH ? tH : [],
          depth: null !== (zH = HH.baf2QuestDepth) && void 0 !== zH ? zH : null,
          tutorial: null !== (CH = this.pickedTutorial) && void 0 !== CH ? CH : this.serverTutorial,
          tutorialKnown: !0
        }, this.AX(), QH && this.scheduleClear(), VH && this.requestBook()
      }
      setTutorial(HH) {
        return this.endPick(), this.pickedTutorial = HH, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.AX()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: HH
        }, this.AX(), this.pickSeq
      }
      onPlayerY(HH) {
        const BH = Math.floor(HH);
        BH !== this.playerY && (this.playerY = BH, this.view.depth && fr.k.AX(cr, BH))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(HH) {
        this.view = {
          ...this.view,
          chapters: HH.baf2BookChapters
        }, this.AX()
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
            rows: this.view.rows.map((HH => HH.justFinished ? {
              ...HH,
              justFinished: !1
            } : HH))
          }, this.AX()
        }), 2400)
      }
      AX() {
        fr.k.AX(Kr, this.view, !0)
      }
    }

    function gr(HH, BH) {
      return HH.sideCameUpAt > 0 && BH - HH.sideCameUpAt < 2400
    }

    function Nr(HH) {
      return (null === HH.name || Rr(HH)) && null === HH.side && null !== HH.chapters
    }

    function Rr(HH) {
      var BH;
      return "quest_forgeOngoing" === (null === (BH = HH.name) || void 0 === BH ? void 0 : BH[0])
    }

    function jr(HH) {
      return HH.filter((HH => !er.has(HH.key)))
    }

    function nr(HH) {
      return HH.key.startsWith("stepCraft")
    }

    function Fr(HH, BH) {
      const LH = new Set,
        AH = HH.side ? [...HH.rows, HH.side.row] : HH.rows;
      for (const SH of AH)
        if (!SH.done) {
          !SH.item || BH && !nr(SH) || LH.add(SH.item);
          for (const [HH, BH, AH] of null !== (rH = SH.chips) && void 0 !== rH ? rH : []) {
            var rH;
            BH < AH && LH.add(HH)
          }
        } return LH
    }

    function Dr(HH) {
      const BH = HH.findIndex((HH => !HH.done && !HH.away));
      return BH >= 0 ? BH : HH.findIndex((HH => !HH.done))
    }

    function wr(HH, BH) {
      let [LH, AH, rH, SH, hH, tH, zH, CH, EH, XH] = HH;
      return {
        id: BH,
        key: LH,
        params: AH,
        item: rH,
        amount: SH,
        total: hH,
        done: tH,
        chips: null !== zH && void 0 !== zH ? zH : null,
        current: !1,
        away: !0 === CH,
        madeFor: null !== EH && void 0 !== EH ? EH : [],
        also: null !== XH && void 0 !== XH ? XH : [],
        justFinished: !1
      }
    }
    const Zr = "baf2QuestItems",
      dr = new Set;
    let ar = new Set,
      sr = null;

    function Jr(HH) {
      const BH = KH(HH.tutorial),
        LH = BH ? Fr(HH, !0) : dr;
      "inventory" === Mr.c.get("openInGameMenuName") ? (sr = null, (0, lr.p)(LH)) : sr = LH;
      const AH = BH ? Fr(HH, !1) : dr;
      (0, Ir.e)(AH, ar) || (ar = AH, fr.k.AX(Zr, ar))
    }

    function ir() {
      return (0, or.c)(Zr, (() => ar))
    }
    var pr = LH(39361);
    const yr = [{
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

    function HS(HH, BH) {
      return [`Deposit Seed (${HH})`, {
        item: hL[`${HH} Deposit`],
        amount: BH
      }]
    }
    const BS = Object.fromEntries([HS("Coal", 8), HS("Iron", 8), HS("Copper", 8), HS("Gold", 6), HS("Voltite", 4), HS("Uranium", 4)]),
      LS = "Relay Coil",
      AS = new Map;

    function rS(HH) {
      let BH = AS.get(HH);
      if (!BH) {
        const LH = Math.max(1, HH);
        BH = yr.filter((HH => {
          var BH;
          return LH >= HH.fromTier && LH <= (null !== (BH = HH.untilTier) && void 0 !== BH ? BH : 1 / 0)
        })).map((HH => HH.later && LH >= HH.later.tier ? {
          ...HH,
          weight: HH.later.weight
        } : HH)), AS.set(HH, BH)
      }
      return BH
    }

    function SS(HH) {
      return rS(HH).some((HH => {
        let {
          item: BH
        } = HH;
        return BH === LS
      }))
    }

    function hS(HH) {
      return HH.startsWith("Deposit Seed (")
    }

    function tS(HH, BH) {
      const LH = rS(HH);
      return BH ? LH.filter((HH => BH(HH.item))) : LH
    }

    function zS(HH) {
      return HH.reduce(((HH, BH) => HH + BH.weight), 0)
    }

    function CS(HH, BH) {
      const LH = tS(HH, BH),
        AH = zS(LH);
      return LH.map((HH => ({
        find: HH,
        chance: HH.weight / AH
      })))
    }
    const ES = 6e4,
      XS = new Intl.NumberFormat("en-US");

    function GS(HH, BH) {
      const LH = HH >= 10 ? Math.round(HH) : Math.round(10 * HH) / 10;
      return 0 === LH ? "0" : `${BH}${XS.format(LH)}`
    }

    function YS(HH) {
      return HH < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? XS.format(HH) : HH < 1e6 ? `${HH<1e5?Math.floor(HH/100)/10:Math.floor(HH/1e3)}k` : Math.floor(HH / 1e5) / 10 + "M"
    }

    function uS(HH) {
      return HH < 0 ? "\u2212" + -HH : String(HH)
    }

    function QS(HH, BH) {
      const LH = Math.max(1, Math.round(BH));
      if (LH < 60) return HH("buildAFactory2Game:durationSeconds", {
        seconds: String(LH)
      });
      const AH = Math.round(LH / 60);
      if (AH < 60) return HH("buildAFactory2Game:durationMinutes", {
        minutes: String(AH)
      });
      const rH = String(Math.floor(AH / 60));
      return AH % 60 === 0 ? HH("buildAFactory2Game:durationWholeHours", {
        hours: rH
      }) : HH("buildAFactory2Game:durationHours", {
        hours: rH,
        minutes: String(AH % 60)
      })
    }
    var WS = LH(2677);
    const MS = "(max-height: 420px), (max-width: 650px)";

    function xS() {
      return (0, WS.b)(MS)
    }
    var vS = LH(1225);

    function PS(HH, BH) {
      return null !== HH && HH > BH + 1
    }

    function TS(HH) {
      const BH = 100 * HH;
      return String(BH <= 0 || BH >= 1 ? Math.round(BH) : Math.max(.1, Math.round(10 * BH) / 10))
    }

    function US(HH) {
      let {
        item: BH,
        amount: LH
      } = HH;
      return (0, vS.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, vS.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, vS.jsx)(kr.e, {
            itemName: BH,
            amount: 0
          })
        }), LH > 1 && (0, vS.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", LH]
        })]
      })
    }

    function VS(HH) {
      let {
        label: BH,
        names: LH
      } = HH;
      const [rH, SH] = (0, AH.useState)(!1), hH = LH.join(" / ");
      return (0, vS.jsxs)(vS.Fragment, {
        children: [(0, vS.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: hH,
          "aria-expanded": rH,
          onClick: () => {
            SH(!rH)
          },
          children: BH
        }), rH && (0, vS.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: hH
        })]
      })
    }

    function OS(HH) {
      let {
        tier: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)(), {
        key: AH,
        params: rH
      } = YH(BH, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), SH = LH(`buildAFactory2Game:${AH}`, rH);
      return (0, vS.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, vS.jsx)(br.c, {
          name: "lock"
        }), SH]
      })
    }
    const bS = (0, AH.createContext)(null);

    function kS() {
      const {
        t: HH
      } = (0, Or.B)(), BH = (0, AH.useContext)(bS);
      return (0, AH.useEffect)((() => null === BH || void 0 === BH ? void 0 : BH()), [BH]), (0, vS.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: HH("buildAFactory2Game:recipeForQuest"),
        "aria-label": HH("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function mS(HH) {
      let {
        title: BH,
        count: LH,
        children: rH,
        startOpen: SH = !0
      } = HH;
      const {
        t: hH
      } = (0, Or.B)(), [tH, zH] = (0, AH.useState)((() => SH && !xS())), [CH, EH] = (0, AH.useState)(0), XH = (0, AH.useCallback)((() => (EH((HH => HH + 1)), () => {
        EH((HH => HH - 1))
      })), []);
      return (0, vS.jsxs)("div", {
        className: Pr()("Baf2Recipes", {
          Open: tH
        }),
        children: [(0, vS.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            zH(!tH)
          },
          "aria-expanded": tH,
          children: [hH("buildAFactory2Game:recipesToggle", {
            title: BH,
            count: String(LH)
          }), (0, vS.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: tH ? "\u25be" : "\u25b8"
          })]
        }), tH && (0, vS.jsxs)(bS.Provider, {
          value: XH,
          children: [(0, vS.jsx)("ul", {
            className: "Baf2RecipeList",
            children: rH
          }), CH > 0 && (0, vS.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, vS.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), hH("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const oS = "buildAFactory2Game:",
      IS = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const fS = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      lS = {
        "Uranium Grit": SH,
        "Raw Uranium": SH
      };

    function KS(HH) {
      var BH;
      return null !== (BH = lS[HH]) && void 0 !== BH ? BH : Math.max(JH(HH), fS[HH] ? JH(fS[HH]) : 1, function(HH) {
        const BH = rH.findIndex((BH => BH.cost.some((BH => BH.item === HH))));
        return BH > SH ? BH : 1
      }(HH))
    }

    function cS(HH, BH) {
      return eS(BH) ? KS(BH) : function(HH) {
        if (IS.has(HH)) return 1;
        const BH = rH.findIndex((BH => BH.newDeposits.some((BH => {
          let {
            block: LH
          } = BH;
          return LH === HH
        }))));
        return BH < 0 ? 1 : BH + 1
      }(HH)
    }

    function eS(HH) {
      return HH in lS || XH(KS(HH)) > 0
    }

    function qS(HH, BH) {
      return iB(HH, {
        coupled: !1,
        taught: null,
        atomic: tH() && BH >= 11
      }).recipes
    }

    function gS(HH, BH) {
      const LH = GH(HH, BH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XH(HH) > 0);
      return "open" === LH || "locked" === LH
    }

    function NS(HH, BH) {
      return HH.map(((HH, LH) => ({
        value: HH,
        idx: LH,
        tier: BH(HH)
      }))).sort(((HH, BH) => HH.tier - BH.tier || HH.idx - BH.idx)).map((HH => {
        let {
          value: BH
        } = HH;
        return BH
      }))
    }

    function RS(HH, BH, LH) {
      const AH = GH(HH, BH);
      if ("hidden" === AH || "open" === AH) return null;
      if ("teaser" === AH) return {
        tag: {
          translationKey: `${oS}${LH?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${oS}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const rH = YH(HH, {
          tier: LH ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        SH = YH(HH, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${oS}${rH.key}`,
          params: rH.params
        },
        reason: {
          translationKey: `${oS}${SH.key}`,
          params: SH.params
        }
      }
    }

    function jS(HH) {
      return !hS(HH)
    }

    function nS(HH) {
      let {
        seconds: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)();
      return (0, vS.jsx)(mS, {
        title: LH("buildAFactory2Game:recipesCuts", {
          seconds: BH
        }),
        count: 1,
        children: (0, vS.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, vS.jsx)(US, {
            item: "Maple Sapling",
            amount: 1
          }), (0, vS.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, vS.jsx)(US, {
            item: "Maple Log",
            amount: 1
          }), (0, vS.jsx)("span", {
            className: "Baf2RecipeName",
            children: LH("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function FS(HH) {
      let {
        fertilised: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)();
      return (0, vS.jsxs)(mS, {
        title: LH("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, vS.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, vS.jsx)(US, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, vS.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, vS.jsx)(US, {
            item: "Wheat",
            amount: 1
          }), (0, vS.jsx)(US, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, vS.jsx)("span", {
            className: "Baf2RecipeName",
            children: LH("buildAFactory2Game:recipeField")
          })]
        }), (0, vS.jsxs)("li", {
          className: Pr()("Baf2Recipe", {
            InUse: BH
          }),
          children: [(0, vS.jsx)(US, {
            item: "Fertiliser",
            amount: 1
          }), (0, vS.jsx)("span", {
            className: "Baf2RecipeName",
            children: LH("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function DS(HH) {
      let {
        tier: BH,
        seconds: LH
      } = HH;
      const {
        t: AH
      } = (0, Or.B)(), rH = function(HH) {
        return HH >= 5 ? UB : TB
      }(BH);
      return (0, vS.jsx)(mS, {
        title: AH("buildAFactory2Game:recipesBringsUp", {
          seconds: LH
        }),
        count: rH.length,
        children: rH.map((HH => {
          let {
            item: BH,
            chance: LH
          } = HH;
          return (0, vS.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, vS.jsx)(US, {
              item: BH,
              amount: 1
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, pr.h)(AH, BH)
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: AH("buildAFactory2Game:recipeChance", {
                percent: TS(LH)
              })
            })]
          }, BH)
        }))
      })
    }

    function wS(HH) {
      let {
        tier: BH,
        seconds: LH,
        noSeeds: AH
      } = HH;
      const {
        t: rH
      } = (0, Or.B)(), SH = ir(), hH = CS(BH, AH ? jS : void 0), tH = AH && CS(BH).length > hH.length, zH = SS(BH);
      return (0, vS.jsxs)(mS, {
        title: rH("buildAFactory2Game:recipesRecycles", {
          seconds: LH
        }),
        count: hH.length,
        children: [hH.map((HH => {
          let {
            find: BH,
            chance: LH
          } = HH;
          return (0, vS.jsxs)("li", {
            className: "Baf2Recipe",
            children: [SH.has(BH.item) && (0, vS.jsx)(kS, {}), (0, vS.jsx)(US, {
              item: BH.item,
              amount: BH.amount
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, pr.h)(rH, BH.item)
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: rH("buildAFactory2Game:recipeChance", {
                percent: TS(LH)
              })
            })]
          }, BH.item)
        })), tH && (0, vS.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, vS.jsx)("span", {
            className: "Baf2RecipeName",
            children: rH("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), zH && (0, vS.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, vS.jsx)("span", {
            className: "Baf2RecipeName",
            children: rH("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function ZS(HH) {
      let {
        tier: BH,
        seconds: LH
      } = HH;
      const {
        t: AH
      } = (0, Or.B)(), rH = Object.entries(BS).filter((HH => {
        let [, {
          item: LH
        }] = HH;
        return gS(KS(LH), BH, eS(LH))
      }));
      return (0, vS.jsx)(mS, {
        title: AH("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: LH
        }),
        count: rH.length,
        children: rH.map((HH => {
          let [BH, {
            item: LH,
            amount: rH
          }] = HH;
          return (0, vS.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, vS.jsx)(US, {
              item: BH,
              amount: 1
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, vS.jsx)(US, {
              item: LH,
              amount: rH
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, pr.h)(AH, LH)
            })]
          }, BH)
        }))
      })
    }

    function dS(HH) {
      let {
        tier: BH,
        seconds: LH
      } = HH;
      const {
        t: AH
      } = (0, Or.B)(), rH = ir(), SH = NS(Object.entries(hL).filter((HH => {
        let [LH, AH] = HH;
        return gS(cS(LH, AH), BH, eS(AH))
      })), (HH => {
        let [BH, LH] = HH;
        return cS(BH, LH)
      }));
      return (0, vS.jsx)(mS, {
        title: AH("buildAFactory2Game:recipesDigs", {
          seconds: LH
        }),
        count: SH.length,
        children: SH.map((HH => {
          let [LH, SH] = HH;
          const hH = cS(LH, SH),
            tH = hH > BH ? hH : null,
            zH = tL[LH],
            CH = null === tH && rH.has(SH);
          return (0, vS.jsxs)("li", {
            className: Pr()("Baf2Recipe", {
              Locked: null !== tH,
              Far: PS(tH, BH)
            }),
            children: [CH && (0, vS.jsx)(kS, {}), (0, vS.jsx)(US, {
              item: LH,
              amount: 1
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, vS.jsx)(US, {
              item: SH,
              amount: 1
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, pr.h)(AH, SH)
            }), void 0 !== zH && (0, vS.jsx)("span", {
              className: "Baf2RecipeMore",
              children: AH("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / zH)
              })
            }), null !== tH && (0, vS.jsx)(OS, {
              tier: tH
            })]
          }, LH)
        }))
      })
    }

    function aS(HH) {
      var BH;
      let {
        def: LH,
        seconds: AH
      } = HH;
      const {
        t: rH
      } = (0, Or.B)();
      return (0, vS.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, vS.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (BH = LH.fuels) && void 0 !== BH ? BH : []).map((HH => (0, vS.jsx)(US, {
            item: HH,
            amount: 1
          }, HH))), (0, vS.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, vS.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, vS.jsx)(br.c, {
              name: "bolt"
            }), rH("buildAFactory2Game:recipePower", {
              power: iH(LH.powerMade),
              seconds: AH
            })]
          })]
        })
      })
    }

    function sS(HH) {
      let {
        def: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)();
      return (0, vS.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, vS.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, vS.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, vS.jsx)(br.c, {
              name: "bolt"
            }), LH("buildAFactory2Game:recipeMixer", {
              cryo: GS((0, pH.I)(BH, BH.cryoMade), "")
            })]
          })
        })
      })
    }

    function JS(HH) {
      let {
        def: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)();
      return (0, vS.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, vS.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, vS.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, vS.jsx)(br.c, {
              name: "bolt"
            }), LH("buildAFactory2Game:recipeCondenser", {
              power: GS((0, pH.I)(BH, BH.powerPerOp), ""),
              water: GS((0, pH.I)(BH, BH.fluidMade), "")
            })]
          })
        })
      })
    }

    function iS(HH) {
      let {
        kind: BH,
        def: LH,
        input: AH,
        tier: rH,
        noSeeds: SH = !1
      } = HH;
      const hH = String(LH.opMs / 1e3);
      return LL(LH) ? (0, vS.jsx)(nS, {
        seconds: hH
      }) : LH.field ? (0, vS.jsx)(FS, {
        fertilised: null !== AH
      }) : LH.table ? (0, vS.jsx)(DS, {
        tier: rH,
        seconds: hH
      }) : LH.recycles ? (0, vS.jsxs)(vS.Fragment, {
        children: [(0, vS.jsx)(wS, {
          tier: rH,
          seconds: hH,
          noSeeds: SH
        }), (0, vS.jsx)(ZS, {
          tier: rH,
          seconds: hH
        })]
      }) : BL(LH) ? (0, vS.jsx)(dS, {
        tier: rH,
        seconds: hH
      }) : void 0 !== LH.fluidMade ? (0, vS.jsx)(JS, {
        def: LH
      }) : void 0 !== LH.cryoMade ? (0, vS.jsx)(sS, {
        def: LH
      }) : void 0 !== LH.powerMade ? (0, vS.jsx)(aS, {
        def: LH,
        seconds: hH
      }) : (0, vS.jsx)(pS, {
        kind: BH,
        input: AH,
        tier: rH,
        seconds: hH
      })
    }

    function pS(HH) {
      let {
        kind: BH,
        input: LH,
        tier: AH,
        seconds: rH
      } = HH;
      const {
        t: SH
      } = (0, Or.B)(), hH = ir(), tH = NS(function(HH) {
        const BH = new Map;
        for (const rH of HH) {
          var LH, AH;
          const HH = [rH.output, rH.outputAmount, rH.inputAmount, null === (LH = rH.bonus) || void 0 === LH ? void 0 : LH.item, null === (AH = rH.bonus) || void 0 === AH ? void 0 : AH.chance].join("|"),
            SH = BH.get(HH);
          SH ? SH.inputs.push(rH.input) : BH.set(HH, {
            inputs: [rH.input],
            inputAmount: rH.inputAmount,
            output: rH.output,
            outputAmount: rH.outputAmount,
            bonus: rH.bonus
          })
        }
        return [...BH.values()]
      }(qS(BH, AH).filter(EL)), (HH => KS(HH.output))).filter((HH => gS(KS(HH.output), AH, eS(HH.output))));
      return (0, vS.jsx)(mS, {
        title: SH("buildAFactory2Game:recipesEach", {
          seconds: rH
        }),
        count: tH.length,
        children: tH.map((HH => {
          const BH = null !== LH && HH.inputs.includes(LH),
            rH = HH.inputs.length > 3 ? [BH ? LH : HH.inputs[0]] : HH.inputs,
            tH = KS(HH.output) > AH ? KS(HH.output) : null,
            zH = null === tH && hH.has(HH.output);
          return (0, vS.jsxs)("li", {
            className: Pr()("Baf2Recipe", {
              InUse: BH,
              Locked: null !== tH,
              Far: PS(tH, AH)
            }),
            children: [zH && (0, vS.jsx)(kS, {}), rH.map(((BH, LH) => (0, vS.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [LH > 0 && (0, vS.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, vS.jsx)(US, {
                item: BH,
                amount: HH.inputAmount
              })]
            }, BH))), rH.length < HH.inputs.length && (0, vS.jsx)(VS, {
              label: SH("buildAFactory2Game:recipeMore", {
                count: String(HH.inputs.length - rH.length)
              }),
              names: HH.inputs.filter((HH => !rH.includes(HH))).map((HH => (0, pr.h)(SH, HH)))
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, vS.jsx)(US, {
              item: HH.output,
              amount: HH.outputAmount
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, pr.h)(SH, HH.output)
            }), HH.bonus && (0, vS.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [SH("buildAFactory2Game:recipeBonus", {
                percent: TS(HH.bonus.chance)
              }), (0, vS.jsx)(US, {
                item: HH.bonus.item,
                amount: 1
              })]
            }), null !== tH && (0, vS.jsx)(OS, {
              tier: tH
            })]
          }, `${HH.output}|${HH.inputs[0]}`)
        }))
      })
    }

    function yS(HH) {
      let {
        taught: BH,
        tier: LH
      } = HH;
      const {
        t: AH
      } = (0, Or.B)(), rH = ir(), SH = NS(Object.values(sB), (HH => HH.tier)).filter((HH => gS(HH.tier, LH)));
      return (0, vS.jsx)(mS, {
        title: AH("buildAFactory2Game:benchCanMake"),
        count: SH.length,
        startOpen: !1,
        children: SH.map((HH => {
          const SH = HH.tier > LH,
            hH = !SH && rH.has(HH.output);
          return (0, vS.jsxs)("li", {
            className: Pr()("Baf2Recipe", {
              InUse: HH.output === BH,
              Locked: SH,
              Far: PS(SH ? HH.tier : null, LH)
            }),
            children: [hH && (0, vS.jsx)(kS, {}), (0, vS.jsx)(US, {
              item: HH.output,
              amount: HH.outputAmount
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, pr.h)(AH, HH.output)
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), HH.inputs.map((HH => (0, vS.jsx)(US, {
              item: HH.item,
              amount: HH.amount
            }, HH.item))), SH && (0, vS.jsx)(OS, {
              tier: HH.tier
            })]
          }, HH.output)
        }))
      })
    }
    var Hh, Bh, Lh, Ah, rh;
    const Sh = cB.Generator,
      hh = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      th = 1e3 * (null !== (Hh = Sh.powerMade) && void 0 !== Hh ? Hh : 0) / Sh.opMs,
      zh = Math.min(...(null !== (Bh = Sh.fuels) && void 0 !== Bh ? Bh : []).map((HH => SL[HH]))) / 1e3,
      Ch = cB["Volt Engine"],
      Eh = 1e3 * (null !== (Lh = Ch.powerMade) && void 0 !== Lh ? Lh : 0) / Ch.opMs,
      Xh = SL[null !== (Ah = null === (rh = Ch.fuels) || void 0 === rh ? void 0 : rh[0]) && void 0 !== Ah ? Ah : ""] / 1e3;

    function Gh(HH) {
      let {
        item: BH,
        label: LH,
        value: AH,
        note: rH,
        dim: SH
      } = HH;
      return (0, vS.jsxs)("li", {
        className: Pr()("Baf2PowerRow", {
          Dim: SH
        }),
        children: [(0, vS.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, vS.jsx)(kr.e, {
            itemName: BH,
            amount: 0
          })
        }), (0, vS.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, vS.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: LH
          }), rH && (0, vS.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: rH
          })]
        }), (0, vS.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: AH
        })]
      })
    }

    function Yh(HH, BH, LH, AH) {
      var rH;
      const SH = void 0 === AH ? cB[HH] : function(HH, BH) {
          if (null === BH) return HH;
          let LH = dH.get(BH);
          return LH || (LH = {
            ...HH,
            powerPerOp: ZH(HH, BH),
            farmMob: BH
          }, dH.set(BH, LH)), LH
        }(cB[HH], AH),
        hH = BH && SH.couplable ? FB(SH, LH) : SH;
      return 1e3 * (null !== (rH = hH.powerPerOp) && void 0 !== rH ? rH : 0) / hH.opMs
    }

    function uh(HH) {
      var BH, LH, AH, rH, SH, hH, tH, zH;
      let {
        message: CH
      } = HH;
      const {
        t: EH
      } = (0, Or.B)(), XH = (HH, BH) => EH("buildAFactory2Game:powerPerSecond", {
        rate: GS(HH, BH)
      }), [GH, YH] = CH.baf2PowerGenerators, uH = CH.baf2PowerGeneratorFuel, QH = CH.baf2PowerSunPanels, WH = null !== (BH = CH.baf2PowerSunShare) && void 0 !== BH ? BH : 1, MH = CH.baf2PowerVaults, xH = CH.baf2PowerUsers, [vH, PH] = null !== (LH = CH.baf2PowerEngines) && void 0 !== LH ? LH : [0, 0], TH = null !== (AH = CH.baf2PowerEngineCells) && void 0 !== AH ? AH : 0, UH = null !== (rH = CH.baf2PowerPads) && void 0 !== rH ? rH : 0, VH = null !== (SH = CH.baf2PowerCharge) && void 0 !== SH ? SH : 0, [OH, bH] = null !== (hH = CH.baf2PowerReactors) && void 0 !== hH ? hH : [0, 0], [kH, mH] = null !== (tH = CH.baf2PowerBatteries) && void 0 !== tH ? tH : [0, 0];
      let oH = EH("buildAFactory2Game:powerEngineCells", {
        amount: String(TH)
      });
      TH > 0 && PH > 0 && (oH = EH("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(TH),
        time: QS(EH, TH * Xh / PH)
      }));
      let IH = EH("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(uH)
      });
      uH > 0 && YH > 0 && (IH = EH("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(uH),
        time: QS(EH, uH * zh / YH)
      }));
      const fH = GH + vH + QH + OH;
      return (0, vS.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, vS.jsxs)("section", {
          children: [(0, vS.jsxs)("h3", {
            children: [EH("buildAFactory2Game:powerMaking"), (0, vS.jsx)("span", {
              children: XH(CH.baf2PowerMadePerS, "+")
            })]
          }), (0, vS.jsxs)("ul", {
            children: [0 === fH && (0, vS.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: EH("buildAFactory2Game:powerNoMakers")
            }), GH > 0 && (0, vS.jsx)(Gh, {
              item: "Generator",
              label: `${(0,pr.h)(EH,"Generator")} \xd7${GH}`,
              note: `${EH("buildAFactory2Game:powerRunning",{amount:String(YH)})} \xb7 ${IH}`,
              value: XH(YH * th, "+"),
              dim: 0 === YH
            }), vH > 0 && (0, vS.jsx)(Gh, {
              item: "Volt Engine",
              label: `${(0,pr.h)(EH,"Volt Engine")} \xd7${vH}`,
              note: `${EH("buildAFactory2Game:powerRunning",{amount:String(PH)})} \xb7 ${oH}`,
              value: XH(PH * Eh, "+"),
              dim: 0 === PH
            }), QH > 0 && (0, vS.jsx)(Gh, {
              item: "Solar Panel",
              label: `${(0,pr.h)(EH,"Solar Panel")} \xd7${QH}`,
              note: EH(WH < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: XH(4 * QH * WH, "+")
            }), OH > 0 && (0, vS.jsx)(Gh, {
              item: "Reactor Frame",
              label: `${EH("buildAFactory2Game:powerReactors")} \xd7${OH}`,
              note: EH("buildAFactory2Game:powerRunning", {
                amount: String(bH)
              }),
              value: XH(null !== (zH = CH.baf2PowerReactorPerS) && void 0 !== zH ? zH : 0, "+"),
              dim: 0 === bH
            })]
          })]
        }), (0, vS.jsxs)("section", {
          children: [(0, vS.jsxs)("h3", {
            children: [EH("buildAFactory2Game:powerStorage"), (0, vS.jsx)("span", {
              children: iH(CH.baf2PowerCap)
            })]
          }), (MH > 0 || kH > 0) && (0, vS.jsxs)("ul", {
            children: [MH > 0 && (0, vS.jsx)(Gh, {
              item: "Charge Vault",
              label: `${(0,pr.h)(EH,"Charge Vault")} \xd7${MH}`,
              value: `+${iH(8e3*MH)}`
            }), kH > 0 && (0, vS.jsx)(Gh, {
              item: "Battery Cell",
              label: `${EH("buildAFactory2Game:powerBatteries")} \xd7${kH}`,
              value: `+${iH(mH)}`
            })]
          })]
        }), (0, vS.jsxs)("section", {
          children: [(0, vS.jsxs)("h3", {
            children: [EH("buildAFactory2Game:powerUsing"), (0, vS.jsx)("span", {
              children: XH(CH.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, vS.jsxs)("ul", {
            children: [0 === xH.length && 0 === UH && 0 === VH && (0, vS.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: EH("buildAFactory2Game:powerNoUsers")
            }), xH.map((HH => {
              let [BH, LH, AH, rH, SH = 1, hH] = HH, tH = LH ? EH(hh[SH - 1], {
                name: (0, pr.h)(EH, BH)
              }) : (0, pr.h)(EH, BH);
              return void 0 !== hH && (tH = EH("buildAFactory2Game:powerFarmName", {
                name: tH,
                mob: EH(FH(hH))
              })), (0, vS.jsx)(Gh, {
                item: BH,
                label: `${tH} \xd7${AH}`,
                note: EH("buildAFactory2Game:powerRunning", {
                  amount: String(rH)
                }),
                value: rH > 0 ? XH(rH * Yh(BH, LH, SH, hH), "\u2212") : EH("buildAFactory2Game:powerIdle"),
                dim: 0 === rH
              }, `${BH}|${LH}|${SH}|${hH}`)
            })), UH > 0 && (0, vS.jsx)(Gh, {
              item: "Charging Pad",
              label: `${(0,pr.h)(EH,"Charging Pad")} \xd7${UH}`,
              value: EH("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), VH > 0 && (0, vS.jsx)(Gh, {
              item: "Homestead Core",
              label: EH("buildAFactory2Game:powerCharge"),
              value: XH(VH, "\u2212")
            }), CH.baf2PowerStarved > 0 && (0, vS.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, vS.jsx)(br.c, {
                name: "triangle-exclamation"
              }), EH("buildAFactory2Game:powerStarved", {
                amount: String(CH.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Qh = LH(4941),
      Wh = LH(1455);
    class Mh {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(HH) {
        this.message = HH;
        for (const BH of this.listeners) BH()
      }
      get() {
        return this.message
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
    }
    class xh extends Mh {}

    function vh(HH, BH) {
      const LH = () => {
          const LH = HH.get();
          if (!LH || !BH) return LH;
          const [AH, rH, SH] = LH.baf2PowerAt;
          return AH === BH[0] && rH === BH[1] && SH === BH[2] ? LH : null
        },
        [rH, SH] = (0, AH.useState)(LH);
      return (0, AH.useEffect)((() => (SH(LH()), HH.subscribe((() => {
        SH(LH())
      })))), [HH, ...null !== BH && void 0 !== BH ? BH : []]), rH
    }

    function Ph(HH) {
      return {
        stored: HH.baf2PowerStored,
        cap: HH.baf2PowerCap,
        madePerS: HH.baf2PowerMadePerS,
        usedPerS: HH.baf2PowerUsedPerS
      }
    }

    function Th(HH) {
      let {
        stored: BH,
        cap: LH
      } = HH;
      return (0, vS.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, vS.jsx)("div", {
          style: {
            width: `${Math.min(100,100*BH/Math.max(1,LH))}%`
          }
        })
      })
    }

    function Uh(HH) {
      let {
        figures: BH,
        labelled: LH = !1
      } = HH;
      const {
        t: AH
      } = (0, Or.B)(), rH = BH.madePerS - BH.usedPerS, {
        text: SH,
        draining: hH
      } = function(HH, BH) {
        let {
          stored: LH,
          cap: AH,
          madePerS: rH,
          usedPerS: SH
        } = BH;
        const hH = rH - SH;
        return LH >= AH ? {
          text: HH("buildAFactory2Game:powerFull"),
          draining: !1
        } : hH > .05 ? {
          text: HH("buildAFactory2Game:powerFullIn", {
            time: QS(HH, (AH - LH) / hH)
          }),
          draining: !1
        } : hH < -.05 ? {
          text: HH("buildAFactory2Game:powerEmptyIn", {
            time: QS(HH, LH / -hH)
          }),
          draining: !0
        } : {
          text: HH("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(AH, BH);
      return (0, vS.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, vS.jsx)(Th, {
          stored: BH.stored,
          cap: BH.cap
        }), (0, vS.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, vS.jsx)("span", {
            children: AH(LH ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: iH(BH.stored),
              cap: iH(BH.cap)
            })
          }), (0, vS.jsxs)("span", {
            className: Pr()("Baf2PowerNet", {
              Draining: hH
            }),
            children: [AH("buildAFactory2Game:powerPerSecond", {
              rate: GS(Math.abs(rH), rH < 0 ? "\u2212" : "+")
            }), " \xb7 ", SH]
          })]
        })]
      })
    }

    function Vh(HH) {
      let {
        stored: BH,
        cap: LH,
        rates: AH
      } = HH;
      const {
        t: rH
      } = (0, Or.B)();
      return AH ? (0, vS.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, vS.jsx)(Uh, {
          figures: {
            stored: BH,
            cap: LH,
            madePerS: AH[0],
            usedPerS: AH[1]
          },
          labelled: !0
        })
      }) : (0, vS.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, vS.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, vS.jsx)(Th, {
            stored: BH,
            cap: LH
          }), (0, vS.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, vS.jsx)("span", {
              children: rH("buildAFactory2Game:powerStoredLabelled", {
                stored: iH(BH),
                cap: iH(LH)
              })
            })
          })]
        })
      })
    }

    function Oh(HH) {
      let {
        store: BH,
        close: LH
      } = HH;
      const {
        t: AH
      } = (0, Or.B)(), rH = vh(BH);
      return (0, vS.jsx)(Qh.b, {
        close: LH,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, vS.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, vS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vS.jsxs)("div", {
              children: [(0, vS.jsx)("h2", {
                id: "baf2PowerTitle",
                children: AH("buildAFactory2Game:powerTitle")
              }), (0, vS.jsx)("p", {
                children: AH("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, vS.jsx)(Wh.q, {
              onClick: LH
            })]
          }), rH && (0, vS.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, vS.jsx)(Uh, {
              figures: Ph(rH)
            }), (0, vS.jsx)(uh, {
              message: rH
            })]
          })]
        })
      })
    }

    function bh(HH) {
      var BH;
      let {
        kind: LH,
        def: rH,
        OL: SH,
        power: hH,
        stored: tH,
        cap: zH
      } = HH;
      const {
        t: CH
      } = (0, Or.B)(), EH = vh(hH, SH), [XH, GH] = (0, AH.useState)(!1);
      return (0, vS.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, vS.jsx)(iS, {
          kind: LH,
          def: rH,
          input: null,
          tier: null !== (BH = null === EH || void 0 === EH ? void 0 : EH.baf2PowerTier) && void 0 !== BH ? BH : 1
        }), (0, vS.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: CH("buildAFactory2Game:powerTitle")
        }), EH && (0, vS.jsx)(Uh, {
          figures: Ph(EH)
        }), !EH && (0, vS.jsx)(Vh, {
          stored: tH,
          cap: zH,
          rates: null
        }), EH && (0, vS.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            GH(!XH)
          },
          "aria-expanded": XH,
          children: CH(XH ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), EH && XH && (0, vS.jsx)(uh, {
          message: EH
        })]
      })
    }
    const kh = 2500,
      mh = 17500,
      oh = `${TH} `;
    const Ih = ["plan", "throttle"];

    function fh(HH) {
      if (HH.startsWith(`${kB} `)) return HH.slice(0, HH.lastIndexOf(" "));
      const BH = HH.split(" ");
      return BH[0] === EB && Ih.includes(BH[4]) ? BH.slice(0, 5).join(" ") : null
    }
    class lh {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = HH, this.now = BH, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.fSH = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = BH()
      }
      enqueue(HH) {
        this.queue(HH, this.nextTicket());
        const BH = this.fSH + this.pending.length;
        return this.flush(), BH
      }
      track(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const LH = this.nextTicket();
        if (!BH.urgent) return this.queue(HH, LH), this.flush(), LH;
        const {
          supersedes: AH
        } = BH;
        for (let SH = this.pending.length - 1; SH >= this.urgent; SH--) {
          const BH = this.pending[SH];
          (BH.command === HH || null !== AH && void 0 !== AH && AH(BH.command)) && (this.pending.splice(SH, 1), this.markLeft(BH.tickets))
        }
        const rH = this.pending.findIndex((BH => {
          let {
            command: LH
          } = BH;
          return LH === HH
        }));
        return -1 !== rH ? this.pending[rH].tickets.push(LH) : (this.pending.splice(this.urgent, 0, {
          command: HH,
          tickets: [LH]
        }), this.urgent += 1), this.flush(), LH
      }
      leftAt(HH) {
        const BH = this.leftTimes.get(HH);
        return void 0 !== BH ? BH : this.pending.some((BH => {
          let {
            tickets: LH
          } = BH;
          return LH.includes(HH)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let HH = !0;
        return () => {
          HH && (HH = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(HH) {
        var BH;
        return (null === (BH = this.pending.at(-1)) || void 0 === BH ? void 0 : BH.command) === HH
      }
      sent() {
        return this.fSH
      }
      clear() {
        for (const {
            tickets: HH
          }
          of this.pending) this.markLeft(HH);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(HH) {
        const BH = this.now();
        for (const LH of HH) this.leftTimes.set(LH, BH);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(HH, BH) {
        const LH = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === LH || void 0 === LH ? void 0 : LH.command) === HH) return void(! function(HH) {
          return HH === UH || HH.startsWith(`${PH} `) || HH.startsWith(`${RH} `)
        }(HH) ? LH.tickets.push(BH) : (this.pending.pop(), this.markLeft([...LH.tickets, BH])));
        const AH = void 0 === LH ? null : CB(LH.command, HH);
        if (null !== AH && void 0 !== LH) return LH.command = AH, void LH.tickets.push(BH);
        const rH = fh(HH);
        if (null !== rH && void 0 !== LH && fh(LH.command) === rH) return LH.command = HH, void LH.tickets.push(BH);
        if (null !== LH && void 0 !== LH && LH.command.startsWith(oh) && HH.startsWith(oh)) {
          const AH = HH.slice(oh.length);
          if (LH.command.slice(oh.length).split(",").includes(AH)) return void LH.tickets.push(BH);
          const rH = `${LH.command},${AH}`;
          if (rH.length <= 119) return LH.command = rH, void LH.tickets.push(BH)
        }
        this.pending.push({
          command: HH,
          tickets: [BH]
        })
      }
      flush() {
        const HH = this.now();
        for (this.tokens = Math.min(5, this.tokens + (HH - this.refilledAt) / kh), this.refilledAt = HH; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.fSH += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: HH,
            tickets: BH
          } = this.pending.shift();
          this.markLeft(BH), this.send(HH)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * kh)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Kh {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new lh(HH, BH)
      }
      send(HH) {
        return this.queue.enqueue(HH)
      }
      sent() {
        return this.queue.sent()
      }
      track(HH, BH) {
        return this.queue.track(HH, BH)
      }
      leftAt(HH) {
        return this.queue.leftAt(HH)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(HH) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = BH, this.send(HH), this.islandEdits.count
      }
      syncIslandEdits(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: LH
        } = this, AH = BH - LH.lastAtMs < mh;
        LH.count = AH ? Math.max(LH.count, HH) : HH
      }
      clear() {
        this.queue.clear()
      }
    }
    const ch = (0, AH.createContext)(null);

    function eh() {
      const HH = (0, AH.useContext)(ch);
      if (!HH) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return HH
    }

    function qh(HH, BH) {
      return null !== BH && void 0 !== BH ? BH : 1 === HH
    }

    function gh(HH, BH) {
      return HH.every((HH => {
        var LH;
        let [AH, , rH] = HH;
        return !qh(rH, null === (LH = BH.get(AH)) || void 0 === LH ? void 0 : LH.hX)
      }))
    }

    function Nh(HH, BH, LH) {
      if (0 === HH.size) return HH;
      const AH = new Map(HH);
      for (const [rH, SH] of HH) {
        const HH = BH.find((HH => {
          let [BH] = HH;
          return BH === rH
        }));
        (!HH || SH.hX === (1 === HH[2]) || SH.atMs < LH) && AH.delete(rH)
      }
      return AH
    }

    function Rh(HH) {
      var BH;
      let {
        OL: LH,
        input: rH,
        drops: SH,
        seconds: hH
      } = HH;
      const {
        t: tH
      } = (0, Or.B)(), zH = eh(), [CH, EH] = (0, AH.useState)(new Map);
      (0, AH.useEffect)((() => {
        SH && EH((HH => Nh(HH, SH, Date.now() - mh)))
      }), [SH]), (0, AH.useEffect)((() => {
        const HH = function(HH, BH) {
          let LH = null;
          for (const {
              atMs: AH
            }
            of HH.values()) LH = null === LH ? AH : Math.min(LH, AH);
          return null === LH ? null : LH + BH
        }(CH, mh);
        if (null === HH || !SH) return;
        const BH = setTimeout((() => {
          EH((HH => Nh(HH, SH, Date.now() - mh)))
        }), Math.max(0, HH - Date.now()) + 1);
        return () => {
          clearTimeout(BH)
        }
      }), [CH, SH]);
      const XH = DH(rH),
        GH = null !== XH && null !== SH && gh(SH, CH),
        YH = function(HH, BH, LH) {
          return null === HH || null === BH || gh(BH, LH) ? 0 : NH[qH[HH]]
        }(XH, SH, CH);
      return (0, vS.jsxs)(mS, {
        title: tH("buildAFactory2Game:farmDropsTitle", {
          seconds: hH
        }),
        count: null !== (BH = null === SH || void 0 === SH ? void 0 : SH.length) && void 0 !== BH ? BH : 0,
        children: [YH > 0 && (0, vS.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: tH("buildAFactory2Game:farmDropsPower", {
            power: String(YH)
          })
        }), (null === XH || !SH) && (0, vS.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: tH("buildAFactory2Game:farmDropsEmpty")
        }), GH && (0, vS.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: tH("buildAFactory2Game:farmDropsAllVoided")
        }), null !== XH && (null === SH || void 0 === SH ? void 0 : SH.map((HH => {
          var BH;
          let [AH, rH, SH] = HH;
          const hH = rH < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            XH = qh(SH, null === (BH = CH.get(AH)) || void 0 === BH ? void 0 : BH.hX);
          return (0, vS.jsxs)("li", {
            className: Pr()("Baf2Recipe Baf2FarmDrop", {
              Voided: !XH
            }),
            children: [(0, vS.jsx)(US, {
              item: AH,
              amount: 1
            }), (0, vS.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, pr.h)(tH, AH)
            }), (0, vS.jsx)("span", {
              className: "Baf2FarmRate",
              children: tH(hH, {
                amount: String(rH)
              })
            }), (0, vS.jsx)("button", {
              type: "button",
              className: Pr()("Baf2FarmToggle SmallTextBold", {
                Kept: XH
              }),
              "aria-pressed": XH,
              onClick: () => {
                EH(new Map(CH).set(AH, {
                  hX: !XH,
                  atMs: Date.now()
                })), zH.send(function(HH, BH, LH, AH) {
                  return `${RH} ${HH} ${BH} ${LH} ${AH}`
                }(LH[0], LH[1], LH[2], AH))
              },
              children: tH(XH ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, AH)
        })))]
      })
    }
    var jh;
    const nh = String(null !== (jh = cB.Synthesizer.waterPerOp) && void 0 !== jh ? jh : 0);

    function Fh(HH) {
      let {
        OL: BH,
        taught: LH
      } = HH;
      const {
        t: rH
      } = (0, Or.B)(), SH = eh(), [hH, tH] = (0, AH.useState)(null);
      (0, AH.useEffect)((() => {
        null !== hH && LH === hH && tH(null)
      }), [hH, LH]);
      const zH = null !== hH && void 0 !== hH ? hH : LH;
      let CH = rH("buildAFactory2Game:synthPick");
      return null !== zH && (CH = rH("buildAFactory2Game:synthGrows", {
        name: (0, pr.h)(rH, zH),
        input: (0, pr.h)(rH, VB),
        water: nh
      })), (0, vS.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, vS.jsx)("div", {
          className: Pr()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === zH
          }),
          children: CH
        }), (0, vS.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: OB.map(((HH, LH) => {
            const AH = (0, pr.h)(rH, HH),
              hH = HH === zH;
            return (0, vS.jsx)("li", {
              children: (0, vS.jsx)("button", {
                type: "button",
                className: Pr()("Baf2SynthTile", {
                  Selected: hH
                }),
                title: AH,
                "aria-label": AH,
                "aria-pressed": hH,
                onClick: () => {
                  hH || (tH(HH), SH.send(`${kB} ${BH[0]} ${BH[1]} ${BH[2]} ${LH}`))
                },
                children: (0, vS.jsx)(kr.e, {
                  itemName: HH,
                  amount: 0
                })
              })
            }, HH)
          }))
        })]
      })
    }
    const Dh = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function wh(HH) {
      let {
        kind: BH,
        tier: LH,
        coupled: AH,
        level: rH,
        slot: SH
      } = HH;
      const {
        t: hH
      } = (0, Or.B)(), zH = JH(qB);
      if (!AH && null !== LH && LH < zH) return (0, vS.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, vS.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, vS.jsx)(br.c, {
            name: "lock"
          })
        }), (0, vS.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: hH("buildAFactory2Game:upgradeLocked")
        }), (0, vS.jsx)("span", {
          className: "Baf2TierTag",
          children: hH("buildAFactory2Game:tierTag", {
            tier: String(zH)
          })
        })]
      });
      const CH = function(HH, BH) {
          if (tH() && "Crusher" !== HH && null !== BH) {
            if (Zh(NB, BH)) return {
              item: NB,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (Zh(gB, BH)) return {
              item: gB,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: qB,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(BH, LH),
        EH = hH(AH ? Dh[rH - 1] : CH.emptyKey),
        XH = null !== LH ? function(HH, BH, LH, AH) {
          if (!tH() || !LH || "Crusher" === HH || BH < 10) return null;
          const rH = JH(NB);
          if (AH < 3 && rH > 1 && (2 === AH || BH >= rH)) return {
            tier: rH,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const SH = JH(gB);
          if (1 === AH && SH > 1) return {
            tier: SH,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(BH, LH, AH, rH) : null;
      return (0, vS.jsxs)("div", {
        className: Pr()("Baf2UpgradeSocket", {
          Fitted: AH
        }),
        children: [(0, vS.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [AH && SH, !AH && (0, vS.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, vS.jsx)(kr.e, {
              itemName: CH.item,
              amount: 0
            })
          })]
        }), (0, vS.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, vS.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: hH("buildAFactory2Game:upgradeTitle")
          }), (0, vS.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: EH
          }), AH && rH >= 2 && "Crusher" === BH && (0, vS.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: hH("buildAFactory2Game:couplerCrusherHint")
          }), XH && null !== LH && LH < XH.tier && (0, vS.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, vS.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, vS.jsx)(br.c, {
                name: "lock"
              })
            }), hH(XH.lockedKey), (0, vS.jsx)("span", {
              className: "Baf2TierTag",
              children: hH("buildAFactory2Game:tierTag", {
                tier: String(XH.tier)
              })
            })]
          }), XH && null !== LH && LH >= XH.tier && (0, vS.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: hH(XH.nextKey)
          })]
        })]
      })
    }

    function Zh(HH, BH) {
      const LH = JH(HH);
      return LH > 1 && BH >= LH
    }
    var dh = LH(37912);
    const ah = (0, pH.I)(cB.Condenser, cB.Condenser.fluidMade),
      sh = .05;
    class Jh extends Mh {}

    function ih(HH) {
      return GS(HH, "")
    }

    function ph(HH, BH, LH) {
      return HH(BH ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: LH
      })
    }

    function yh(HH, BH, LH, AH) {
      return LH <= sh && AH <= sh ? null : AH <= sh || LH <= sh ? ph(HH, BH, AH <= sh ? GS(LH, "+") : GS(AH, "\u2212")) : HH(BH ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: ih(LH),
        used: ih(AH)
      })
    }

    function Ht(HH, BH) {
      return Math.min(100, 100 * HH / Math.max(1, BH))
    }

    function Bt(HH) {
      let {
        stored: BH,
        cap: LH,
        netPerS: AH,
        rates: rH,
        cryo: SH
      } = HH;
      const {
        t: hH
      } = (0, Or.B)(), tH = function(HH, BH, LH, AH) {
        return LH <= 0 ? HH("buildAFactory2Game:waterNoStorage") : BH >= LH ? HH("buildAFactory2Game:powerFull") : AH > sh ? HH("buildAFactory2Game:powerFullIn", {
          time: QS(HH, (LH - BH) / AH)
        }) : AH < -.05 ? BH <= 0 ? HH("buildAFactory2Game:waterEmpty") : HH("buildAFactory2Game:powerEmptyIn", {
          time: QS(HH, BH / -AH)
        }) : HH("buildAFactory2Game:powerSteady")
      }(hH, BH, LH, AH), zH = LH > 0 && BH < LH && Math.abs(AH) <= sh, CH = hH(SH ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), EH = null !== rH ? `${rH} \xb7 ${tH}` : zH ? CH : `${CH} \xb7 ${tH}`;
      return (0, vS.jsxs)(vS.Fragment, {
        children: [(0, vS.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, vS.jsx)("div", {
            style: {
              width: `${Ht(BH,LH)}%`
            }
          })
        }), (0, vS.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, vS.jsx)("span", {
            children: LH > 0 && hH("buildAFactory2Game:powerStored", {
              stored: (0, pH.R)(BH),
              cap: (0, pH.R)(LH)
            })
          }), (0, vS.jsx)("span", {
            className: Pr()("Baf2WaterNet", {
              Draining: AH < -.05
            }),
            children: EH
          })]
        })]
      })
    }

    function Lt(HH) {
      let {
        water: BH,
        at: LH,
        side: AH = null
      } = HH;
      const {
        t: rH
      } = (0, Or.B)(), SH = eh(), [hH, tH, zH] = BH;
      return (0, vS.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, vS.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, vS.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: rH(null === AH ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${AH}`)
          }), (0, vS.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              SH.send(`${pH.E} ${LH[0]} ${LH[1]} ${LH[2]}${"cryoOut"===AH?" cryo":""}`)
            },
            children: rH("buildAFactory2Game:waterDetails")
          })]
        }), (0, vS.jsx)(Bt, {
          stored: hH,
          cap: tH,
          netPerS: zH,
          rates: ph(rH, "cryoOut" === AH, GS(Math.abs(zH), zH < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === AH
        })]
      })
    }

    function At(HH, BH) {
      var LH, AH, rH;
      const SH = !0 === BH.baf2WaterCryo,
        hH = null !== (LH = null === (AH = BH.baf2WaterMakers.find((HH => HH[0] === (SH ? pH.d : "Condenser")))) || void 0 === AH ? void 0 : AH[1]) && void 0 !== LH ? LH : 0,
        tH = [],
        zH = (BH, LH, AH) => {
          BH > 0 && tH.push(HH(1 === BH ? LH : AH, {
            count: String(BH)
          }))
        };
      return SH ? zH(hH, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : zH(hH, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), zH(null !== (rH = BH.baf2WaterPipes) && void 0 !== rH ? rH : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), zH(BH.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), tH.join(" \xb7 ")
    }

    function rt(HH, BH) {
      if (!0 === BH.baf2WaterCryo) return function(HH, BH) {
        const LH = cB[pH.d];
        switch (BH.baf2WaterThis) {
          case "pipe":
            return {
              text: HH("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: HH("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: HH("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: HH("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: HH("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: HH("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: HH("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var AH;
            const [rH, SH] = null !== (AH = BH.baf2WaterThisRates) && void 0 !== AH ? AH : [(0, pH.I)(LH, LH.cryoMade), (0, pH.I)(LH, LH.powerPerOp)];
            return !0 === BH.baf2WaterDriven ? {
              text: HH("buildAFactory2Game:cryoThisMixerDriven", {
                rate: ih(rH)
              }),
              bad: !1
            } : {
              text: HH("buildAFactory2Game:cryoThisMixer", {
                rate: ih(rH),
                power: ih(SH)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: HH("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(HH, BH);
      const LH = !0 === BH.baf2WaterDriven,
        AH = cB.Condenser;
      switch (BH.baf2WaterThis) {
        case "pipe":
          return {
            text: HH("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: HH("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: HH("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: HH("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: HH("buildAFactory2Game:waterThisTank", {
              tank: (0, pH.R)(pH.t),
              cap: (0, pH.R)(BH.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var rH;
          const [SH, hH] = null !== (rH = BH.baf2WaterThisRates) && void 0 !== rH ? rH : [ah, (0, pH.I)(AH, AH.powerPerOp)];
          return LH ? {
            text: HH("buildAFactory2Game:waterThisCondenserDriven", {
              rate: ih(SH)
            }),
            bad: !1
          } : {
            text: HH("buildAFactory2Game:waterThisCondenser", {
              rate: ih(SH),
              power: ih(hH)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: HH("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function St(HH, BH) {
      const LH = BH.baf2WaterMakers.some((HH => !0 === HH[5]));
      if (!0 === BH.baf2WaterCryo) {
        const AH = BH.baf2WaterUsedPerS - BH.baf2WaterMadePerS,
          rH = LH || AH <= sh ? 0 : (0, pH.G)(AH);
        return 0 === rH ? null : rH > 1 ? HH("buildAFactory2Game:cryoNextMixers", {
          mixers: String(rH)
        }) : HH("buildAFactory2Game:cryoNextOne")
      }
      const AH = LH ? null : function(HH, BH) {
        const LH = BH - HH;
        return LH <= sh ? null : Math.ceil(LH / ah)
      }(BH.baf2WaterMadePerS, BH.baf2WaterUsedPerS);
      return null === AH ? null : AH > 1 ? HH("buildAFactory2Game:waterNextCondensers", {
        condensers: String(AH)
      }) : HH("buildAFactory2Game:waterNextOne")
    }

    function ht(HH) {
      let {
        item: BH,
        label: LH,
        note: AH,
        value: rH,
        dim: SH,
        bad: hH
      } = HH;
      return (0, vS.jsxs)("li", {
        className: Pr()("Baf2WaterRow", {
          Dim: SH,
          Bad: hH
        }),
        children: [(0, vS.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, vS.jsx)(kr.e, {
            itemName: BH,
            amount: 0
          })
        }), (0, vS.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, vS.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: LH
          }), AH && (0, vS.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: AH
          })]
        }), (0, vS.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: rH
        })]
      })
    }

    function tt(HH) {
      return dh.m[HH] ? HH : "Reactor Port"
    }

    function zt(HH) {
      let {
        message: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)(), AH = !0 === BH.baf2WaterCryo, rH = (HH, BH) => ph(LH, AH, GS(HH, BH));
      return (0, vS.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, vS.jsxs)("section", {
          children: [(0, vS.jsxs)("h3", {
            children: [LH("buildAFactory2Game:waterMakes"), (0, vS.jsx)("span", {
              children: rH(BH.baf2WaterMadePerS, "+")
            })]
          }), (0, vS.jsxs)("ul", {
            children: [0 === BH.baf2WaterMakers.length && (0, vS.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: LH(AH ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), BH.baf2WaterMakers.map((HH => {
              let [BH, AH, SH, hH, tH, zH] = HH;
              const CH = LH("buildAFactory2Game:powerRunning", {
                amount: String(SH)
              });
              let EH = tH > 0 ? LH("buildAFactory2Game:waterMakerPower", {
                running: CH,
                power: ih(tH)
              }) : CH;
              return zH && (EH = LH(0 === SH && hH <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, vS.jsx)(ht, {
                item: BH,
                label: `${(0,pr.h)(LH,BH)} \xd7${AH}`,
                note: EH,
                value: SH > 0 || zH && hH > 0 ? rH(hH, "+") : LH("buildAFactory2Game:powerIdle"),
                dim: 0 === SH && !zH,
                bad: zH
              }, BH)
            }))]
          })]
        }), (0, vS.jsxs)("section", {
          children: [(0, vS.jsxs)("h3", {
            children: [LH("buildAFactory2Game:waterUses"), (0, vS.jsx)("span", {
              children: rH(BH.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, vS.jsxs)("ul", {
            children: [0 === BH.baf2WaterUsers.length && (0, vS.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: LH(AH ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), BH.baf2WaterUsers.map((HH => {
              let [BH, AH, SH, hH] = HH;
              const tH = dh.m[BH] ? (0, pr.h)(LH, BH) : BH;
              return (0, vS.jsx)(ht, {
                item: tt(BH),
                label: AH > 1 ? `${tH} \xd7${AH}` : tH,
                note: hH ? LH("buildAFactory2Game:waterPortFirst") : void 0,
                value: SH > 0 ? rH(SH, "\u2212") : LH("buildAFactory2Game:powerIdle"),
                dim: 0 === SH
              }, BH)
            }))]
          })]
        })]
      })
    }

    function Ct(HH) {
      var BH, LH, rH, SH, hH;
      let {
        store: tH,
        close: zH
      } = HH;
      const {
        t: CH
      } = (0, Or.B)(), EH = function(HH) {
        const [BH, LH] = (0, AH.useState)((() => HH.get()));
        return (0, AH.useEffect)((() => (LH(HH.get()), HH.subscribe((() => {
          LH(HH.get())
        })))), [HH]), BH
      }(tH), XH = null !== (BH = null === EH || void 0 === EH ? void 0 : EH.baf2WaterStored) && void 0 !== BH ? BH : 0, GH = null !== (LH = null === EH || void 0 === EH ? void 0 : EH.baf2WaterCap) && void 0 !== LH ? LH : 0, YH = null !== (rH = null === EH || void 0 === EH ? void 0 : EH.baf2WaterMadePerS) && void 0 !== rH ? rH : 0, uH = null !== (SH = null === EH || void 0 === EH ? void 0 : EH.baf2WaterUsedPerS) && void 0 !== SH ? SH : 0, QH = null !== (hH = null === EH || void 0 === EH ? void 0 : EH.baf2WaterNetPerS) && void 0 !== hH ? hH : YH - uH, WH = EH && rt(CH, EH), MH = EH && St(CH, EH), xH = !0 === (null === EH || void 0 === EH ? void 0 : EH.baf2WaterCryo);
      return (0, vS.jsx)(Qh.b, {
        close: zH,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, vS.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, vS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vS.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== EH && GH <= 0 ? (0, vS.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, vS.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, vS.jsx)(kr.e, {
                  itemName: xH ? uL.c : pH.m,
                  amount: 0
                })
              }), (0, vS.jsxs)("div", {
                children: [(0, vS.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: CH(xH ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), EH && (0, vS.jsx)("p", {
                  children: At(CH, EH)
                })]
              })]
            }), (0, vS.jsx)(Wh.q, {
              onClick: zH
            })]
          }), EH && WH && (0, vS.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, vS.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, vS.jsx)(Bt, {
                stored: XH,
                cap: GH,
                netPerS: QH,
                cryo: xH,
                rates: yh(CH, xH, YH, uH)
              })
            }), (0, vS.jsx)("div", {
              className: Pr()("Baf2WaterThis", {
                Bad: WH.bad
              }),
              children: WH.text
            }), EH.baf2WaterDriven && (0, vS.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, vS.jsx)(br.c, {
                name: "bolt"
              }), CH(xH ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), MH && (0, vS.jsx)("p", {
              className: "Baf2WaterNext",
              children: MH
            }), (0, vS.jsx)(zt, {
              message: EH
            })]
          })]
        })
      })
    }
    class Et {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(HH, BH) {
        const LH = this.get(HH);
        LH && null === BH.opLeftMs && null === BH.fuelLeftMs && BH.status === LH.status ? BH = {
          ...BH,
          opLeftMs: LH.opLeftMs,
          fuelLeftMs: LH.fuelLeftMs,
          burning: LH.burning
        } : this.updates++, this.pos = HH, this.view = BH;
        for (const AH of this.listeners) AH()
      }
      get(HH) {
        return null !== this.pos && this.pos[0] === HH[0] && this.pos[1] === HH[1] && this.pos[2] === HH[2] ? this.view : null
      }
      forget(HH) {
        null !== this.get(HH) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
    }

    function Xt(HH, BH, LH, AH) {
      return "noFuel" === BH && AH && !rL(cB[HH]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === BH && !0 === (null === LH || void 0 === LH ? void 0 : LH.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === BH && !0 === (null === LH || void 0 === LH ? void 0 : LH.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === BH && !0 === (null === LH || void 0 === LH ? void 0 : LH.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === BH && !0 === (null === LH || void 0 === LH ? void 0 : LH.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Gt(BH, LH) ? "buildAFactory2Game:machineStatus_noInputShort" : function(HH, BH) {
        const LH = cB[HH];
        if ("noFuel" === BH && void 0 !== LH.fuels) return rL(LH) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (LH.mobFarm && ("noInput" === BH || "badInput" === BH)) return `buildAFactory2Game:machineStatus_${BH}MobFarm`;
        if ("outputFull" === BH && (void 0 !== LH.table || LH.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === BH && dB(LH)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== LH.cryoMade && ("noInput" === BH || "noOutlet" === BH || "fluidFull" === BH)) return `buildAFactory2Game:machineStatus_${BH}Mixer`;
        return `buildAFactory2Game:machineStatus_${BH}`
      }(HH, BH)
    }

    function Gt(HH, BH) {
      return "noInput" === HH && null !== BH && void 0 !== BH && BH.input && BH.inputShort ? {
        input: BH.input,
        short: BH.inputShort
      } : null
    }

    function Yt(HH) {
      return Tr(HH) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== HH.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function ut(HH) {
      const BH = (0, cH.Fe)(HH);
      return `Baf2Pane Baf2Pane${BH.charAt(0).toUpperCase()}${BH.slice(1)}`
    }

    function Qt(HH, BH) {
      const [LH, rH] = (0, AH.useState)((() => HH.get(BH)));
      return (0, AH.useEffect)((() => {
        rH(HH.get(BH));
        const LH = HH.subscribe((() => {
          rH(HH.get(BH))
        }));
        return () => {
          LH(), HH.forget(BH)
        }
      }), [HH, ...BH]), LH
    }

    function Wt(HH, BH, LH, AH) {
      const rH = cB[HH],
        SH = BH && rH.couplable ? FB(rH, LH) : rH,
        hH = null !== AH && BL(SH) ? function(HH, BH) {
          var LH;
          return null !== (LH = null !== BH && BL(HH) ? tL[BH] : void 0) && void 0 !== LH ? LH : HH.opMs
        }(SH, zL(AH)) : SH.opMs;
      return hH === SH.opMs ? SH : {
        ...SH,
        opMs: hH
      }
    }

    function Mt(HH) {
      let {
        running: BH,
        opMs: LH,
        opLeftMs: AH,
        updateCount: rH
      } = HH;
      return (0, vS.jsx)("div", {
        className: Pr()("Baf2MachineProgress", {
          Running: BH
        }),
        children: (0, vS.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: LH / 1e3 + "s",
            animationDelay: null === AH ? void 0 : (AH - LH) / 1e3 + "s"
          }
        }, rH)
      })
    }

    function xt(HH) {
      let {
        running: BH,
        leftMs: LH,
        periodMs: AH,
        updateCount: rH
      } = HH;
      const {
        t: SH
      } = (0, Or.B)(), hH = Math.min(Math.max(null !== LH && void 0 !== LH ? LH : 0, 0), AH), tH = BH && hH > 0, zH = SH("buildAFactory2Game:machineBarFuel");
      return (0, vS.jsx)("div", {
        className: Pr()("Baf2FuelBurn", {
          Draining: tH
        }),
        role: "img",
        title: zH,
        "aria-label": zH,
        children: (0, vS.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: tH ? {
            animationDuration: AH / 1e3 + "s",
            animationDelay: (hH - AH) / 1e3 + "s"
          } : {
            transform: `scaleY(${hH/AH})`
          }
        }, rH)
      })
    }

    function vt(HH, BH, LH) {
      let [AH, rH] = LH;
      const SH = 1 !== AH ? Vr(BH) : null;
      return {
        amount: AH,
        have: rH,
        item: HH(SH || (0, pr.d)(BH))
      }
    }

    function Pt(HH) {
      return BL(HH) ? "buildAFactory2Game:machineBarMining" : LL(HH) ? "buildAFactory2Game:machineBarCutting" : void 0 !== HH.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Tt(HH) {
      var BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH, xH, vH;
      let {
        kind: PH,
        OL: TH,
        store: UH,
        power: VH,
        renderSlot: OH
      } = HH;
      const {
        t: bH
      } = (0, Or.B)(), kH = Qt(UH, TH), mH = cB[PH], oH = null !== (BH = null === kH || void 0 === kH ? void 0 : kH.coupled) && void 0 !== BH && BH, IH = null !== (LH = null === kH || void 0 === kH ? void 0 : kH.couplerLevel) && void 0 !== LH ? LH : 1, fH = Wt(PH, oH, IH, null !== (AH = null === kH || void 0 === kH || null === (rH = kH.dug) || void 0 === rH ? void 0 : rH.item) && void 0 !== AH ? AH : null), lH = null !== (SH = null === kH || void 0 === kH ? void 0 : kH.status) && void 0 !== SH ? SH : null, KH = null !== (hH = null === kH || void 0 === kH ? void 0 : kH.power) && void 0 !== hH ? hH : null, cH = null !== (tH = null === kH || void 0 === kH ? void 0 : kH.opLeftMs) && void 0 !== tH ? tH : null, eH = null !== (zH = null === kH || void 0 === kH ? void 0 : kH.dug) && void 0 !== zH ? zH : null, qH = null !== eH && BL(mH) ? tL[null !== (CH = zL(eH.item)) && void 0 !== CH ? CH : ""] : void 0, gH = void 0 === qH ? null : 6e4 / qH, NH = null !== (EH = null === kH || void 0 === kH ? void 0 : kH.powerCap) && void 0 !== EH ? EH : 4e3, RH = null !== (XH = null === kH || void 0 === kH ? void 0 : kH.tier) && void 0 !== XH ? XH : null, jH = void 0 !== fH.powerMade, nH = null !== mH.fuelSlot ? OH(mH.fuelSlot) : null, FH = nB(mH), DH = !oH && !0 === (null === kH || void 0 === kH ? void 0 : kH.fuelFed), ZH = !oH && !0 === (null === kH || void 0 === kH ? void 0 : kH.fuelFeeds), dH = null !== mH.fuelSlot && !oH, aH = null !== (GH = null === kH || void 0 === kH ? void 0 : kH.fuelLeftMs) && void 0 !== GH ? GH : null, sH = function(HH, BH, LH) {
        var AH;
        const rH = null === BH ? void 0 : SL[BH];
        return Math.max(null !== (AH = null !== rH && void 0 !== rH ? rH : LH) && void 0 !== AH ? AH : 0, HH.opMs)
      }(fH, null !== (YH = null === kH || void 0 === kH ? void 0 : kH.burning) && void 0 !== YH ? YH : null, aH), JH = null !== (uH = null === kH || void 0 === kH ? void 0 : kH.fuelKeep) && void 0 !== uH ? uH : null, iH = null === lH ? null : Xt(PH, lH, kH, DH), pH = null === lH ? null : Gt(lH, kH);
      return (0, vS.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, vS.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, vS.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: bH((0, pr.d)(PH))
          }), eH && (0, vS.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [bH("Tree Cutter" === PH ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, vS.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, vS.jsx)(kr.e, {
                itemName: eH.item,
                amount: 0
              })
            }), (0, vS.jsx)(mr.b, {
              text: eH.name
            })]
          }), null !== gH && (0, vS.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: bH("buildAFactory2Game:machineDigsFixed", {
              perMin: String(gH)
            })
          }), (null === kH || void 0 === kH ? void 0 : kH.field) && (0, vS.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, vS.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, vS.jsx)(kr.e, {
                itemName: "Wheat",
                amount: 0
              })
            }), bH("buildAFactory2Game:machineField", {
              planted: String(kH.field[0]),
              ripe: String(kH.field[1])
            })]
          }), (0, vS.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, vS.jsxs)("div", {
              className: Pr()("Baf2MachineColumn", {
                Baf2Burns: dH
              }),
              children: [null !== fH.inputSlot && (0, vS.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, vS.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: bH(Yt(fH))
                }), OH(fH.inputSlot)]
              }), null !== mH.fuelSlot && !oH && (0, vS.jsxs)("div", {
                className: Pr()("Baf2MachineSlot", {
                  Baf2FuelFed: DH
                }),
                children: [(0, vS.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [DH && (0, vS.jsx)(br.c, {
                    name: "fire"
                  }), bH("buildAFactory2Game:machineFuel")]
                }), (0, vS.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, vS.jsx)(xt, {
                    running: "running" === lH,
                    leftMs: aH,
                    periodMs: sH,
                    updateCount: UH.updateCount
                  }), nH]
                })]
              }), null !== mH.fuelSlot && oH && (0, vS.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, vS.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: bH("buildAFactory2Game:machineFuel")
                }), (0, vS.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: bH("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": bH("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, vS.jsx)(br.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, vS.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, vS.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: bH(Pt(fH))
              }), (0, vS.jsx)(Mt, {
                running: "running" === lH,
                opMs: fH.opMs,
                opLeftMs: cH,
                updateCount: UH.updateCount
              })]
            }), fH.outputSlots.length > 0 && (0, vS.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, vS.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: bH("buildAFactory2Game:machineOutput")
              }), (0, vS.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: fH.outputSlots.map((HH => (0, vS.jsx)("div", {
                  children: OH(HH)
                }, HH)))
              })]
            }), null !== KH && jH && (0, vS.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, vS.jsx)("div", {
                style: {
                  height: 100 * KH / NH + "%"
                }
              })
            })]
          }), dH && null !== JH && (0, vS.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, vS.jsx)(br.c, {
              name: "arrows-rotate"
            }), bH(LL(fH) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(JH)
            })]
          }), (DH || ZH) && (0, vS.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, vS.jsx)(br.c, {
              name: "fire"
            }), bH(DH ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), mH.couplable && (0, vS.jsx)(wh, {
            kind: PH,
            tier: RH,
            coupled: oH,
            level: IH,
            slot: FH === mH.fuelSlot ? nH : null !== FH ? OH(FH) : null
          }), null !== KH && !jH && !0 === (null === kH || void 0 === kH ? void 0 : kH.reactorPowered) && (0, vS.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: bH("buildAFactory2Game:machineReactorPowered")
          }), null !== KH && !jH && !0 !== (null === kH || void 0 === kH ? void 0 : kH.reactorPowered) && (0, vS.jsx)(Vh, {
            stored: KH,
            cap: NH,
            rates: null !== (QH = null === kH || void 0 === kH ? void 0 : kH.powerRates) && void 0 !== QH ? QH : null
          }), (null === kH || void 0 === kH ? void 0 : kH.water) && (0, vS.jsx)(Lt, {
            water: kH.water,
            at: TH,
            side: kH.cryo ? "waterIn" : null
          }), (null === kH || void 0 === kH ? void 0 : kH.cryo) && (0, vS.jsx)(Lt, {
            water: kH.cryo,
            at: TH,
            side: "cryoOut"
          }), null !== kH && void 0 !== kH && kH.inertCoupler ? (0, vS.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: bH("buildAFactory2Game:machineStatus_couplerOff", {
              item: (0, pr.h)(bH, kH.inertCoupler)
            })
          }) : null !== iH && (0, vS.jsx)("div", {
            className: Pr()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== lH
            }),
            children: bH(iH, pH ? vt(bH, pH.input, pH.short) : void 0)
          })]
        }), (0, vS.jsxs)("div", {
          className: Pr()("Baf2MachineSide", {
            Baf2SynthSide: dB(mH)
          }),
          children: [dB(mH) && (0, vS.jsx)(Fh, {
            OL: TH,
            taught: null !== (WH = null === kH || void 0 === kH ? void 0 : kH.taught) && void 0 !== WH ? WH : null
          }, TH.join(",")), jH && (0, vS.jsx)(bh, {
            kind: PH,
            def: fH,
            OL: TH,
            power: VH,
            stored: null !== KH && void 0 !== KH ? KH : 0,
            cap: NH
          }), wH(mH) && (0, vS.jsx)(Rh, {
            OL: TH,
            input: null !== (MH = null === kH || void 0 === kH ? void 0 : kH.input) && void 0 !== MH ? MH : null,
            drops: null !== (xH = null === kH || void 0 === kH ? void 0 : kH.farm) && void 0 !== xH ? xH : null,
            seconds: String(fH.opMs / 1e3)
          }), !jH && !wH(mH) && !dB(mH) && (0, vS.jsx)(iS, {
            kind: PH,
            def: fH,
            input: null !== (vH = null === kH || void 0 === kH ? void 0 : kH.input) && void 0 !== vH ? vH : null,
            tier: null !== RH && void 0 !== RH ? RH : 1,
            noSeeds: !0 === (null === kH || void 0 === kH ? void 0 : kH.noSeeds)
          })]
        })]
      })
    }

    function Ut(HH, BH, LH, AH) {
      var rH;
      const SH = cB[HH],
        hH = [SH.inputSlot, SH.fuelSlot, ...null !== (rH = SH.inputSlots) && void 0 !== rH ? rH : []].filter((HH => null !== HH));
      return {
        render: rH => {
          let {
            OL: SH,
            renderSlot: hH
          } = rH;
          return (0, vS.jsx)(ch.Provider, {
            value: AH,
            children: (0, vS.jsx)(Tt, {
              kind: HH,
              OL: SH,
              store: BH,
              power: LH,
              renderSlot: hH
            })
          })
        },
        quickMoveRange: hH.length > 0 ? [Math.min(...hH), Math.max(...hH) + 1] : [0, 0],
        className: ut(HH)
      }
    }
    const Vt = "Assembler";

    function Ot(HH) {
      var BH, LH, AH, rH, SH, hH, tH, zH, CH;
      let {
        OL: EH,
        store: XH,
        renderSlot: GH
      } = HH;
      const {
        t: YH
      } = (0, Or.B)(), uH = Qt(XH, EH), QH = null !== (BH = null === uH || void 0 === uH ? void 0 : uH.tier) && void 0 !== BH ? BH : 1, WH = null !== (LH = null === uH || void 0 === uH ? void 0 : uH.taught) && void 0 !== LH ? LH : null, MH = iB(Vt, {
        coupled: !1,
        taught: WH
      }), xH = null !== (AH = MH.bench) && void 0 !== AH ? AH : null, vH = null !== (rH = null === uH || void 0 === uH ? void 0 : uH.status) && void 0 !== rH ? rH : null, PH = null !== (SH = null === uH || void 0 === uH ? void 0 : uH.power) && void 0 !== SH ? SH : null, TH = null !== (hH = null === uH || void 0 === uH ? void 0 : uH.powerCap) && void 0 !== hH ? hH : 4e3;
      return (0, vS.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, vS.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, vS.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: YH((0, pr.d)(Vt))
          }), xH && (0, vS.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [YH("buildAFactory2Game:benchMakes"), (0, vS.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, vS.jsx)(kr.e, {
                itemName: xH.output,
                amount: 0
              })
            }), (null === uH || void 0 === uH ? void 0 : uH.taughtName) && (0, vS.jsx)(mr.b, {
              text: uH.taughtName
            }), xH.outputAmount > 1 && (0, vS.jsxs)("span", {
              children: ["\xd7", xH.outputAmount]
            })]
          }), !xH && (0, vS.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: YH("buildAFactory2Game:benchTeachHint")
          }), (0, vS.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, vS.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (tH = MH.inputSlots) && void 0 !== tH ? tH : []).map(((HH, BH) => {
                const LH = null === xH || void 0 === xH ? void 0 : xH.inputs[BH];
                return (0, vS.jsxs)("div", {
                  className: Pr()("Baf2BenchInput", {
                    Spare: !LH
                  }),
                  children: [(0, vS.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [GH(HH), LH && (0, vS.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, vS.jsx)(kr.e, {
                        itemName: LH.item,
                        amount: 0
                      })
                    })]
                  }), (0, vS.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: LH ? `\xd7${LH.amount}` : "\xa0"
                  })]
                }, HH)
              }))
            }), (0, vS.jsx)(Mt, {
              running: "running" === vH,
              opMs: MH.opMs,
              opLeftMs: null !== (zH = null === uH || void 0 === uH ? void 0 : uH.opLeftMs) && void 0 !== zH ? zH : null,
              updateCount: XH.updateCount
            }), (0, vS.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, vS.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: YH("buildAFactory2Game:machineOutput")
              }), (0, vS.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: MH.outputSlots.map((HH => (0, vS.jsx)("div", {
                  children: GH(HH)
                }, HH)))
              })]
            })]
          }), null !== PH && (0, vS.jsx)(Vh, {
            stored: PH,
            cap: TH,
            rates: null !== (CH = null === uH || void 0 === uH ? void 0 : uH.powerRates) && void 0 !== CH ? CH : null
          }), null !== vH && (0, vS.jsx)("div", {
            className: Pr()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== vH
            }),
            children: YH(Xt(Vt, vH, uH, !1))
          }), xH && xH.inputs.length > 1 && (0, vS.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: YH("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, vS.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, vS.jsx)(yS, {
            taught: WH,
            tier: QH
          }), xH && (0, vS.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: YH("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function bt(HH) {
      var BH;
      const LH = null !== (BH = cB[Vt].inputSlots) && void 0 !== BH ? BH : [];
      return {
        render: BH => {
          let {
            OL: LH,
            renderSlot: AH
          } = BH;
          return (0, vS.jsx)(Ot, {
            OL: LH,
            store: HH,
            renderSlot: AH
          })
        },
        quickMoveRange: [Math.min(...LH), Math.max(...LH) + 1],
        className: ut(Vt)
      }
    }
    var kt = LH(81),
      mt = LH(1061),
      ot = LH(4617);
    const It = 600,
      ft = .5,
      lt = 4,
      Kt = 1200,
      ct = 140,
      et = 100,
      qt = 32,
      gt = 16,
      Nt = 100.5,
      Rt = 90,
      jt = 1.5,
      nt = 50;

    function Ft(HH) {
      switch (fL(HH)) {
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
    const Dt = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function wt(HH) {
      const BH = Math.ceil(60 * HH / et);
      return {
        fuel: Math.max(qt, BH),
        waste: Math.max(gt, BH)
      }
    }

    function Zt(HH, BH, LH) {
      const [AH, rH, SH] = [HH - 2, BH - 2, LH - 2];
      return 2 * (AH * rH + rH * SH + SH * AH) * ct
    }

    function dt(HH, BH, LH) {
      return Math.max(0, HH - 2) * Math.max(0, BH - 2) * Math.max(0, LH - 2)
    }

    function st(HH, BH) {
      const [LH, AH, rH] = HH, SH = LH * AH * rH, hH = new Float32Array(SH);
      let tH = 0,
        zH = 0,
        CH = 0,
        EH = 0,
        XH = 0;
      const GH = (HH, SH, hH) => HH < 0 || HH >= LH || SH < 0 || SH >= AH || hH < 0 || hH >= rH ? 0 : BH[(SH * rH + hH) * LH + HH];
      for (let WH = 0; WH < AH; WH++)
        for (let HH = 0; HH < rH; HH++)
          for (let AH = 0; AH < LH; AH++) {
            const SH = (WH * rH + HH) * LH + AH,
              YH = BH[SH];
            if (1 === YH) {
              tH++;
              let BH = 0;
              for (const [LH, rH, SH] of Dt) {
                const hH = GH(AH + LH, WH + rH, HH + SH);
                1 !== hH && 2 !== hH || BH++
              }
              hH[SH] = It * (1 + ft * Math.min(BH, lt)), EH += hH[SH]
            } else if (2 === YH) zH++;
            else if (3 === YH) {
              CH++;
              Dt.some((BH => {
                let [LH, rH, SH] = BH;
                return 1 === GH(AH + LH, WH + rH, HH + SH)
              })) && (XH += Kt)
            }
          }
      const YH = Zt(LH + 2, AH + 2, rH + 2),
        uH = Math.min(EH, XH, YH),
        QH = tH > 0 ? EH * et / tH : 0;
      return {
        rods: tH,
        graphite: zH,
        channels: CH,
        fuelHeat: EH,
        cooling: XH,
        size: YH,
        max: uH,
        vol: SH,
        powerPerUnit: QH,
        pelletsPerMin: QH > 0 ? uH / QH * 60 : 0,
        waterPerS: uH * pH.p,
        rodHeat: hH
      }
    }
    const Jt = 0,
      it = 1,
      pt = 6,
      yt = 7,
      Hz = 8;

    function Bz(HH, BH) {
      const [LH, AH, rH] = HH, SH = new Uint8Array(LH * AH * rH), hH = (HH, SH, hH) => HH < 0 || HH >= LH || SH < 0 || SH >= AH || hH < 0 || hH >= rH ? 0 : BH[(SH * rH + hH) * LH + HH];
      for (let tH = 0; tH < AH; tH++)
        for (let HH = 0; HH < rH; HH++)
          for (let AH = 0; AH < LH; AH++) {
            const zH = (tH * rH + HH) * LH + AH,
              CH = BH[zH];
            if (1 === CH) {
              let BH = 0;
              for (const [LH, rH, SH] of Dt) {
                const zH = hH(AH + LH, tH + rH, HH + SH);
                BH += 1 === zH || 2 === zH ? 1 : 0
              }
              SH[zH] = it + Math.min(BH, lt)
            } else if (3 === CH) {
              const BH = Dt.some((BH => {
                let [LH, rH, SH] = BH;
                return 1 === hH(AH + LH, tH + rH, HH + SH)
              }));
              SH[zH] = BH ? pt : yt
            } else 2 === CH && (SH[zH] = Hz)
          }
      return SH
    }

    function Lz(HH) {
      return HH.fuelHeat <= HH.cooling && HH.fuelHeat <= HH.size ? "fuel" : HH.cooling <= HH.size ? "cooling" : "size"
    }
    const Az = Rt;

    function rz(HH, BH, LH) {
      return Math.round(HH * BH * LH * 25e3 * (1 + .25 * (Math.min(HH, BH, LH) - 2)))
    }

    function Sz(HH) {
      return Math.max(0, Math.min(pH.h, HH))
    }

    function hz(HH, BH, LH) {
      const AH = BH * Sz(LH);
      return HH <= 0 ? 0 : AH > 0 ? Math.min(200, 100 * HH / AH) : 200
    }

    function tz(HH, BH) {
      const LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? jt : 1;
      return Math.min(HH.fuelHeat * LH, HH.cooling * Sz(BH), HH.size * LH)
    }

    function zz(HH) {
      return 2 + HH / 10
    }
    const Cz = "buildAFactory2Game:";

    function Ez(HH) {
      var BH;
      return null !== (BH = HH.baf2RxMood) && void 0 !== BH ? BH : function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const LH = [
          ["calm", 50],
          ["warm", Az],
          ["hot", Nt]
        ];
        for (const [AH, rH] of LH)
          if (HH < rH + (AH === BH ? 3 : 0)) return AH;
        return "alarm"
      }(HH.baf2RxHeat)
    }
    const Xz = 120;

    function Gz(HH) {
      const BH = HH.baf2RxState;
      if ("running" === BH && HH.baf2RxHeat > Nt) return {
        label: `${Cz}rxState_tooHot`,
        tone: "bad",
        fix: `${Cz}rxFix_tooHot`
      };
      switch (BH) {
        case "running":
          return {
            label: `${Cz}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Cz}rxState_idle`, tone: "off", fix: `${Cz}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Cz}rxState_scram`, tone: "off", fix: HH.baf2RxHeat < nt ? `${Cz}rxFix_scramCool` : `${Cz}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Cz}rxState_${BH}`, tone: "off", fix: `${Cz}rxFix_${BH}`
          };
        case "melted":
          return {
            label: `${Cz}rxState_melted`, tone: "bad", fix: `${Cz}rxFix_melted`
          };
        default:
          return {
            label: `${Cz}rxState_${BH}`, tone: "warn", fix: `${Cz}rxFix_${BH}`
          }
      }
    }

    function Yz(HH) {
      const [BH, LH, AH] = HH.baf2RxStats;
      return {
        fuelHeat: BH,
        cooling: LH * (HH.baf2RxCryo ? Math.max(1, Sz(HH.baf2RxWater / 100)) : 1),
        size: AH
      }
    }

    function uz(HH) {
      var BH;
      const LH = "idle" === HH.baf2RxState || "running" === HH.baf2RxState && HH.baf2RxHeat <= Nt || "scram" === HH.baf2RxState && HH.baf2RxHeat < nt;
      if (0 === (HH.baf2RxFlags & PB) || !HH.baf2RxFormed || !LH) return null;
      const {
        fuelHeat: AH,
        cooling: rH,
        size: SH
      } = Yz(HH), hH = Math.min(AH, rH, SH), tH = Lz({
        fuelHeat: AH,
        cooling: rH,
        size: SH
      }), zH = "cooling" === tH && !0 === HH.baf2RxCryoOpen && !HH.baf2RxCryo, CH = null !== (BH = HH.baf2RxCells) && void 0 !== BH ? BH : "", EH = ("fuel" === tH || "cooling" === tH && !0 === HH.baf2RxCryo) && CH.length > 0 && !CH.includes(String(0)), XH = zH ? "Cryo" : "scram" === HH.baf2RxState ? "Off" : "";
      return hH < 12e3 ? {
        key: `${Cz}rxGrow_${EH?"full":tH}${XH}`,
        amount: hH
      } : null
    }

    function Qz(HH, BH) {
      return HH[0] === BH[0] && HH[1] === BH[1] && HH[2] === BH[2]
    }

    function Wz(HH) {
      return [...HH].sort(((HH, BH) => Number(BH[2] < BH[1]) - Number(HH[2] < HH[1])))
    }

    function Mz(HH, BH) {
      return BH.some((BH => {
        let [LH, AH] = BH;
        return !(AH <= 0) && ["edge", "cap", "wall", "inside"].some((BH => LH === SA(HH, BH)))
      }))
    }

    function xz(HH, BH, LH) {
      const AH = HH.baf2RxFuel - HH.baf2RxPu > 0 ? LH : 0;
      return {
        full: HH.baf2RxWaste > BH - 3,
        fullInS: AH > 0 ? Math.max(0, BH - HH.baf2RxWaste) / AH : null
      }
    }
    const vz = {
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

    function Pz(HH) {
      return Tz[HH]
    }
    const Tz = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Uz(HH) {
      let [BH, LH, AH] = HH;
      return Math.ceil(Zt(BH, LH, AH) * pH.p)
    }

    function Vz(HH, BH) {
      return "battery" === HH ? BH[0] * BH[1] * BH[2] : function(HH) {
        let [BH, LH, AH] = HH;
        return BH * LH * AH - Math.max(0, BH - 2) * Math.max(0, LH - 2) * Math.max(0, AH - 2)
      }(BH) - 1
    }

    function Oz(HH) {
      const BH = Math.max(0, HH);
      if (BH < 10) return String(Math.round(10 * BH) / 10);
      if (BH < 1e4) return Math.round(BH).toLocaleString("en-US");
      if (BH < 1e6) return `${BH<1e5?(Math.floor(BH/100)/10).toFixed(1):Math.floor(BH/1e3)}k`;
      const LH = BH / 1e6;
      return `${LH<10?(Math.floor(100*LH)/100).toFixed(2):LH<100?(Math.floor(10*LH)/10).toFixed(1):Math.floor(LH)}M`
    }

    function bz(HH) {
      return HH <= 0 ? "0" : HH >= 10 ? String(Math.round(HH)) : HH.toFixed(HH >= 1 ? 1 : 2)
    }

    function kz(HH) {
      const BH = pL(HH, 0),
        LH = pL(HH, aL(HH) - 1);
      return {
        lo: [Math.min(BH[0], LH[0]), Math.min(BH[1], LH[1]), Math.min(BH[2], LH[2])],
        hi: [Math.max(BH[0], LH[0]) + 1, Math.max(BH[1], LH[1]) + 1, Math.max(BH[2], LH[2]) + 1]
      }
    }

    function mz(HH, BH, LH) {
      const AH = [BH[0] - HH[0], BH[1] - HH[1], BH[2] - HH[2]],
        rH = [(HH[0] + BH[0]) / 2, (HH[1] + BH[1]) / 2, (HH[2] + BH[2]) / 2],
        SH = [];
      for (let hH = 0; hH < 3; hH++) {
        const tH = (hH + 1) % 3,
          zH = (hH + 2) % 3;
        for (const CH of [HH[tH], BH[tH]])
          for (const EH of [HH[zH], BH[zH]]) {
            const HH = [0, 0, 0],
              BH = [LH, LH, LH];
            HH[hH] = rH[hH], BH[hH] = AH[hH] + LH, HH[tH] = CH, HH[zH] = EH, SH.push([HH, BH])
          }
      }
      return SH
    }
    const oz = "buildAFactory2Game:",
      Iz = [`${oz}colNorth`, `${oz}colEast`, `${oz}colSouth`, `${oz}colWest`];

    function fz(HH, BH) {
      const [LH, AH, rH] = HH.baf2ColAt;
      return `baf2col ${LH} ${AH} ${rH} ${BH}`
    }

    function lz(HH) {
      return function(HH) {
        if (!Number.isFinite(HH)) return "";
        const BH = Math.max(1, Math.round(HH));
        if (BH < 60) return `${BH}s`;
        const LH = BH % 60;
        return 0 === LH ? BH / 60 + "m" : `${Math.floor(BH/60)}m ${LH}s`
      }(function(HH) {
        const BH = hA.FOCUS_BY_LASERS[Math.max(0, Math.min(4, HH))];
        return BH > 0 ? hA.NOVA_FOCUS / BH : 1 / 0
      }(HH))
    }

    function Kz(HH) {
      const BH = Math.abs(Math.round(HH));
      return BH < 1e3 ? Math.round(HH).toLocaleString("en-US") : BH < 1e6 ? `${BH<1e5?(HH/1e3).toFixed(1).replace(/\.0$/,""):Math.round(HH/1e3)}k` : `${(HH/1e6).toFixed(BH<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function cz(HH, BH, LH) {
      if (GA(BH) >= 0) {
        const BH = function(HH, BH) {
          return HH.find((HH => {
            let {
              focus: LH
            } = HH;
            return LH[0] === BH[0] && LH[2] === BH[2] && (BH[1] === LH[1] || BH[1] === LH[1] - 1)
          }))
        }(HH, LH);
        if (!BH) return null;
        const rH = function(HH) {
          let BH = 0,
            LH = 0;
          for (let AH = 0; AH < 4; AH++) BH += HH.laser[AH] ? 1 : 0, LH += HH.live[AH] ? 1 : 0;
          return {
            lasers: BH,
            live: LH,
            focusPerS: hA.FOCUS_BY_LASERS[LH],
            drawPerS: hA.LASER_DRAW * LH
          }
        }({
          laser: BH.lasers,
          live: BH.live
        });
        if (0 === rH.lasers || "noLasers" === BH.state) return {
          key: `${oz}lookColNoLasers`
        };
        if (0 === rH.live) return {
          key: `${oz}lookColOff_blocked`
        };
        if (!(BH.on && rH.live > 0) && ("running" !== (AH = BH.state) && "slowed" !== AH)) return {
          key: `${oz}lookColOff_${BH.state}`
        };
        if (rH.live < rH.lasers) return {
          key: `${oz}lookColLasersSome`,
          params: {
            lasers: String(rH.lasers),
            live: String(rH.live)
          }
        };
        const SH = BH.open.filter(Boolean).length;
        return SH < 4 ? {
          key: `${oz}lookColLasersSpots`,
          params: {
            live: String(rH.live),
            spots: String(SH),
            time: lz(rH.live)
          }
        } : {
          key: `${oz}lookColLasers`,
          params: {
            live: String(rH.live),
            time: lz(rH.live)
          }
        }
      }
      var AH;
      if (!YA(BH)) return null;
      const rH = function(HH, BH) {
        for (const LH of HH) {
          const HH = MA(LH.focus, [BH[0], BH[1], BH[2]]);
          if (HH && HH.Ot === hA.LASER_D && LH.lasers[HH.dir]) return {
            entry: LH,
            dir: HH.dir
          }
        }
        return null
      }(HH, LH);
      if (!rH) return {
        key: `${oz}lookLaserNoCollider`
      };
      const {
        entry: SH,
        dir: hH
      } = rH;
      return SH.open[hH] ? SH.live[hH] ? {
        key: SH.on ? `${oz}lookLaserFiring` : `${oz}lookLaserReady`
      } : {
        key: `${oz}lookLaserBlocked`
      } : {
        key: `${oz}lookLaserClosed`
      }
    }

    function ez(HH, BH) {
      const LH = [];
      for (let AH = 1; AH < hA.LASER_D; AH++) HH & 1 << BH * (hA.LASER_D - 1) + AH - 1 && LH.push(AH);
      return LH
    }
    const qz = {
      firing: `${oz}colSlotFiring`,
      ready: `${oz}colSlotReady`,
      blocked: `${oz}colSlotBlocked`,
      empty: `${oz}colSlotEmpty`,
      closed: `${oz}colSlotClosed`
    };

    function gz(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const SH = Ar(HH),
        hH = Ar(BH),
        tH = Ar(LH),
        zH = tH.filter(Boolean).length,
        CH = SH.filter(Boolean).length,
        EH = [0, 1, 2, 3].map((HH => hH[HH] ? SH[HH] ? tH[HH] ? AH ? "firing" : "ready" : "blocked" : (HH => ez(rH, HH).length > 0)(HH) ? "blocked" : "empty" : "closed")),
        XH = EH.indexOf("blocked"),
        GH = XH < 0 && CH > 0 ? EH.indexOf("empty") : -1;
      return EH.map(((HH, BH) => {
        const LH = BH === XH ? {
          key: `${oz}colSlotClear`
        } : BH === GH ? {
          key: `${oz}colSlotAdd`,
          params: {
            time: lz(Math.min(4, zH + 1))
          }
        } : null;
        return {
          dir: BH,
          tone: HH,
          title: {
            key: "blocked" !== HH || SH[BH] ? qz[HH] : `${oz}colSlotGap`,
            keys: {
              dir: Iz[BH]
            }
          },
          hint: LH
        }
      }))
    }

    function Nz(HH) {
      var BH;
      return "noPower" === HH.baf2ColState && HH.baf2ColRxState ? Gz({
        baf2RxState: HH.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (BH = HH.baf2ColRxHeat) && void 0 !== BH ? BH : 0
      }) : null
    }

    function Rz(HH) {
      const BH = Ar(HH.baf2ColSpots).filter(Boolean).length,
        LH = Ar(HH.baf2ColLive);
      let AH = 0,
        rH = 0;
      return Ar(HH.baf2ColLasers).forEach(((HH, BH) => {
        HH && (AH++, rH += LH[BH] ? 0 : 1)
      })), rH > 0 ? {
        key: `${oz}colSubSome`,
        params: {
          blocked: String(rH),
          lasers: String(AH)
        }
      } : BH < 4 ? {
        key: `${oz}colSubSpots`,
        params: {
          lasers: String(AH),
          spots: String(BH)
        }
      } : {
        key: `${oz}colSub`,
        params: {
          lasers: String(AH)
        }
      }
    }

    function jz(HH) {
      const BH = Nz(HH);
      if ("idle" === HH.baf2ColRxState && BH) return {
        key: `${oz}colState_noPowerIdle`
      };
      if (BH) return {
        key: `${oz}colState_noPowerReactor`,
        keys: {
          state: BH.label
        }
      };
      if ("noInput" !== HH.baf2ColState) return {
        key: `${oz}colState_${HH.baf2ColState}`
      };
      const LH = String(Math.max(0, hA.NOVA_SA - HH.baf2ColSa)),
        AH = String(Math.max(0, hA.NOVA_GD - HH.baf2ColGd));
      return "0" !== LH && "0" !== AH ? {
        key: `${oz}colState_noInput`,
        params: {
          sa: LH,
          gd: AH
        }
      } : "0" !== LH ? {
        key: `${oz}colState_noStarAlloy`,
        params: {
          sa: LH
        }
      } : "0" !== AH ? {
        key: `${oz}colState_noGlowDust`,
        params: {
          gd: AH
        }
      } : {
        key: `${oz}colState_running`
      }
    }

    function nz(HH) {
      return HH.baf2ColP < 0 ? `${oz}colNext` : function(HH) {
        const BH = HH.baf2ColState;
        return HH.baf2ColP >= 0 && ("blocked" === BH || "noLasers" === BH || "noPower" === BH)
      }(HH) ? `${oz}colStalled` : null === Fz(HH) ? `${oz}colMaking` : `${oz}colNovaIn`
    }

    function Fz(HH) {
      if (HH.baf2ColP < 0 || HH.baf2ColWant <= 0) return null;
      const BH = HH.baf2ColFocusPerS * Math.min(1, HH.baf2ColDraw / HH.baf2ColWant);
      return BH > 0 ? Math.max(0, hA.NOVA_FOCUS - HH.baf2ColP) / BH : null
    }

    function Dz(HH, BH) {
      const LH = [];
      for (let AH = 1; AH <= 3; AH++) {
        const rH = [HH[0], HH[1] - AH, HH[2]];
        if (!BH(rH)) return LH;
        LH.push(rH)
      }
      return []
    }

    function wz(HH, BH) {
      const LH = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let AH = 0; AH < 4; AH++) {
        const rH = AH,
          SH = WA(HH.focus, rH, hA.LASER_D);
        if (HH.lasers[AH] || !HH.open[AH] || !BH(SH)) continue;
        const hH = [];
        for (let LH = 1; LH < hA.LASER_D; LH++) {
          const AH = WA(HH.focus, rH, LH);
          BH(AH) || hH.push(AH)
        }
        LH.supports.push(...Dz(SH, BH)), 0 === hH.length ? LH.free.push(SH) : (LH.blocked.push(SH), LH.gaps.push(...hH))
      }
      return LH
    }
    const Zz = hA.LASER_D - .25,
      dz = 4,
      az = 2,
      sz = 16;
    const Jz = {
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
        blendMode: ot.f.Standard,
        soft: !0
      },
      iz = {
        green: Jz,
        pink: {
          ...Jz,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function pz(HH, BH) {
      const LH = {
        ...BH.params
      };
      for (const [rH, SH] of Object.entries(null !== (AH = BH.keys) && void 0 !== AH ? AH : {})) {
        var AH;
        LH[rH] = HH(SH)
      }
      return LH
    }
    const yz = "buildAFactory2Game:",
      HC = 2 * hA.LASER_D + 1,
      BC = hA.LASER_D;

    function LC(HH) {
      return HH(`${yz}colFocusTip`, {
        need: Kz(hA.NOVA_FOCUS)
      })
    }

    function AC(HH, BH) {
      return HH(BH.key, pz(HH, BH))
    }

    function rC(HH) {
      const BH = HH.getStatus();
      return {
        status: BH,
        entry: BH ? HH.entryAtRoot(BH.baf2ColAt) : void 0
      }
    }

    function SC(HH, BH) {
      return {
        left: 100 * (BC + HH) / HC + "%",
        top: 100 * (BC + BH) / HC + "%"
      }
    }

    function hC(HH) {
      let {
        status: BH,
        entry: LH
      } = HH;
      const AH = Ar(BH.baf2ColLasers),
        rH = Ar(BH.baf2ColSpots),
        SH = Ar(BH.baf2ColLive),
        hH = !0 === (null === LH || void 0 === LH ? void 0 : LH.on),
        tH = hA.LASER_D,
        zH = [];
      for (let YH = 0; YH < 4; YH++) {
        const [HH, , BH] = QA[YH];
        if (SH[YH]) {
          const LH = 100 * (tH - 1) / HC,
            AH = HH + BH > 0 ? 100 * (BC + 1) / HC : 100 * (BC - (tH - 1)) / HC,
            rH = 100 * (BC + .35) / HC,
            SH = 30 / HC,
            CH = 0 !== HH ? {
              left: `${AH}%`,
              width: `${LH}%`,
              top: `${rH}%`,
              height: `${SH}%`
            } : {
              top: `${AH}%`,
              height: `${LH}%`,
              left: `${rH}%`,
              width: `${SH}%`
            };
          zH.push((0, vS.jsx)("i", {
            className: Pr()("Baf2ColDiagramBeam", {
              Off: !hH
            }),
            style: CH
          }, `beam${YH}`))
        }
        const LH = AH[YH] ? "Baf2ColDiagramLaser" : rH[YH] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        zH.push((0, vS.jsx)("i", {
          className: LH,
          style: SC(HH * tH, BH * tH)
        }, `spot${YH}`))
      }
      for (let YH = 0; YH < 4; YH++) {
        if (AH[YH] || !rH[YH]) continue;
        const [HH, , LH] = QA[YH];
        for (const AH of ez(null !== (CH = BH.baf2ColGaps) && void 0 !== CH ? CH : 0, YH)) {
          var CH;
          zH.push((0, vS.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: SC(HH * AH, LH * AH)
          }, `gap${YH},${AH}`))
        }
      }
      for (const [YH, , uH] of null !== (EH = null === LH || void 0 === LH ? void 0 : LH.blockers) && void 0 !== EH ? EH : []) {
        var EH, XH, GH;
        const HH = YH - (null !== (XH = null === LH || void 0 === LH ? void 0 : LH.focus[0]) && void 0 !== XH ? XH : 0),
          BH = uH - (null !== (GH = null === LH || void 0 === LH ? void 0 : LH.focus[2]) && void 0 !== GH ? GH : 0);
        zH.push((0, vS.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: SC(HH, BH)
        }, `block${HH},${BH}`))
      }
      return (0, vS.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [zH, (0, vS.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function tC(HH) {
      let {
        status: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)(), AH = Ar(BH.baf2ColLive).filter(Boolean).length;
      return (0, vS.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, vS.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: LC(LH),
          children: LH(`${yz}colLadder`)
        }), (0, vS.jsx)("ul", {
          children: [1, 2, 3, 4].map((HH => (0, vS.jsx)("li", {
            className: Pr()({
              On: HH === AH
            }),
            children: LH(`${yz}colLadderChip`, {
              lasers: String(HH),
              time: lz(HH)
            })
          }, HH)))
        })]
      })
    }

    function zC(HH) {
      let {
        item: BH,
        LX: LH,
        need: AH,
        cap: rH
      } = HH;
      const {
        t: SH
      } = (0, Or.B)(), hH = Math.min(LH, AH);
      return (0, vS.jsxs)("li", {
        className: Pr()("Baf2ColTile", {
          Short: LH < AH
        }),
        children: [(0, vS.jsx)(CC, {
          item: BH
        }), (0, vS.jsx)("b", {
          className: "Baf2ColTileValue",
          children: SH(`${yz}colOutOf`, {
            amount: String(hH),
            cap: String(AH)
          })
        }), (0, vS.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, vS.jsx)("i", {
            style: {
              width: 100 * hH / AH + "%"
            }
          })
        }), LH > AH && (0, vS.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: SH(`${yz}colIntakeHeld`, {
            amount: String(LH),
            cap: String(rH)
          })
        })]
      })
    }

    function CC(HH) {
      let {
        item: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)();
      return (0, vS.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, vS.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, vS.jsx)(kr.e, {
            itemName: BH,
            amount: 0
          })
        }), (0, vS.jsx)("span", {
          className: "Baf2ColTileName",
          children: (0, pr.h)(LH, BH)
        })]
      })
    }

    function EC(HH) {
      switch (HH.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function XC(HH) {
      var BH, LH, rH;
      let {
        store: SH,
        close: hH
      } = HH;
      const {
        t: tH
      } = (0, Or.B)(), zH = eh(), {
        status: CH,
        entry: EH
      } = function(HH) {
        const [BH, LH] = (0, AH.useState)((() => rC(HH)));
        return (0, AH.useEffect)((() => (LH(rC(HH)), HH.subscribe((() => {
          LH(rC(HH))
        })))), [HH]), BH
      }(SH), [XH, GH] = (0, AH.useState)(null), YH = null === CH || void 0 === CH ? void 0 : CH.baf2ColHold;
      (0, AH.useEffect)((() => {
        GH(null)
      }), [YH]);
      const uH = (0, AH.useRef)({
          p: -1,
          n: 0
        }),
        QH = null !== (BH = null === CH || void 0 === CH ? void 0 : CH.baf2ColP) && void 0 !== BH ? BH : -1;
      QH < uH.current.p && uH.current.n++, uH.current.p = QH;
      const WH = (0, AH.useRef)(null),
        [MH] = (0, AH.useState)((() => {
          return (HH = SH.heldAtOpen()) === CA || HH === EA ? {
            key: `${oz}colBeltItIn`,
            item: HH
          } : null;
          var HH
        }));
      if (!CH) return null;
      const xH = CH.baf2ColMember,
        vH = CH.baf2ColP >= 0,
        PH = function(HH, BH) {
          if (HH.baf2ColP >= 0 && HH.baf2ColDraw > 0) {
            const BH = HH.baf2ColWant > 0 ? Math.min(1, HH.baf2ColDraw / HH.baf2ColWant) : 0;
            return {
              focus: HH.baf2ColFocusPerS * BH,
              draw: HH.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === HH.baf2ColState && BH && BH.draw > 0 ? {
            ...BH,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(CH, WH.current);
      WH.current = PH.draw > 0 ? PH : null;
      const TH = "slowed" === CH.baf2ColState || "noPower" === CH.baf2ColState,
        UH = Fz(CH),
        VH = null !== XH && void 0 !== XH ? XH : CH.baf2ColHold,
        OH = function(HH) {
          var BH, LH;
          return "idle" === HH.baf2ColRxState ? null : null !== (BH = null === (LH = Nz(HH)) || void 0 === LH ? void 0 : LH.fix) && void 0 !== BH ? BH : null
        }(CH),
        bH = null === OH && null === MH ? function(HH) {
          var BH;
          const LH = HH.baf2ColSentTo;
          if (!LH) return null;
          const AH = null !== (BH = HH.baf2ColSentHeld) && void 0 !== BH ? BH : null;
          return {
            key: null === AH ? `${oz}colNovaSentToMachine` : `${oz}colNovaSentTo`,
            target: LH,
            LX: AH
          }
        }(CH) : null,
        kH = vH ? tH(`${yz}colFocusOf`, {
          focus: Kz(CH.baf2ColP),
          need: Kz(hA.NOVA_FOCUS)
        }) : null;
      return (0, vS.jsx)(Qh.b, {
        close: hH,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, vS.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, vS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vS.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, vS.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, vS.jsx)(kr.e, {
                  itemName: tA,
                  amount: 0
                })
              }), (0, vS.jsxs)("div", {
                children: [(0, vS.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: (0, pr.h)(tH, tA)
                }), (0, vS.jsx)("p", {
                  children: AC(tH, Rz(CH))
                })]
              })]
            }), (0, vS.jsx)(Wh.q, {
              onClick: hH
            })]
          }), (0, vS.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, vS.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, vS.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, vS.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: tH(nz(CH), {
                    time: null === UH ? "" : QS(tH, UH)
                  })
                }), (0, vS.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, vS.jsx)("i", {
                    style: {
                      width: (vH ? 100 * CH.baf2ColP / hA.NOVA_FOCUS : 0) + "%"
                    }
                  }, uH.current.n)
                }), (0, vS.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, vS.jsxs)("span", {
                    title: LC(tH),
                    children: [(0, vS.jsx)("b", {
                      children: Kz(PH.focus)
                    }), " ", tH(`${yz}colFocusPerS`)]
                  }), (0, vS.jsxs)("span", {
                    className: Pr()("Baf2ColDraw", {
                      Short: TH
                    }),
                    children: [(0, vS.jsx)(br.c, {
                      name: "bolt"
                    }), TH ? tH(`${yz}colDrawOf`, {
                      draw: Kz(CH.baf2ColDraw),
                      want: Kz(CH.baf2ColWant)
                    }) : tH(`${yz}colPowerPerS`, {
                      rate: Kz(PH.draw)
                    })]
                  }), null !== kH && (0, vS.jsx)("span", {
                    className: "Soft",
                    children: kH
                  })]
                })]
              }), (0, vS.jsx)("p", {
                className: Pr()("Baf2ColState", EC(CH)),
                children: AC(tH, jz(CH))
              }), null !== OH && (0, vS.jsx)("p", {
                className: "Baf2ColStateFix",
                children: tH(OH)
              }), null === OH && null !== MH && (0, vS.jsx)("p", {
                className: "Baf2ColStateFix",
                children: tH(MH.key, {
                  item: (0, pr.h)(tH, MH.item)
                })
              }), bH && (0, vS.jsx)("p", {
                className: "Baf2ColStateFix",
                children: tH(bH.key, {
                  target: (0, pr.h)(tH, bH.target),
                  amount: String(null !== (LH = bH.LX) && void 0 !== LH ? LH : 0)
                })
              }), (0, vS.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, vS.jsx)(zC, {
                  item: CA,
                  LX: CH.baf2ColSa,
                  need: hA.NOVA_SA,
                  cap: hA.SA_CAP
                }), (0, vS.jsx)(zC, {
                  item: EA,
                  LX: CH.baf2ColGd,
                  need: hA.NOVA_GD,
                  cap: hA.GD_CAP
                }), (0, vS.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, vS.jsx)(CC, {
                    item: "Nova Matter"
                  }), (0, vS.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: tH(`${yz}colNovaHeld`, {
                      amount: String(CH.baf2ColOut),
                      cap: String(hA.OUT_CAP)
                    })
                  }), xH && (0, vS.jsx)(Wh.u, {
                    className: "Baf2ColTake",
                    disabled: 0 === CH.baf2ColOut,
                    onClick: () => {
                      zH.send(fz(CH, "take"))
                    },
                    children: tH(`${yz}colTake`)
                  })]
                })]
              }), xH && (0, vS.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": VH,
                className: Pr()("Baf2ColHold", {
                  On: VH
                }),
                onClick: HH => {
                  HH.detail > 0 && HH.currentTarget.blur(), GH(!VH), zH.send(fz(CH, "hold " + (VH ? 0 : 1)))
                },
                children: [(0, vS.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, vS.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, vS.jsx)("b", {
                    children: tH(`${yz}colHold`)
                  }), (0, vS.jsx)("span", {
                    children: tH(`${yz}colHoldNote`)
                  })]
                })]
              })]
            }), (0, vS.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, vS.jsx)(hC, {
                status: CH,
                entry: EH
              }), (0, vS.jsx)("ul", {
                className: "Baf2ColSlots",
                children: gz(CH.baf2ColLasers, CH.baf2ColSpots, CH.baf2ColLive, PH.beamsOn, null !== (rH = CH.baf2ColGaps) && void 0 !== rH ? rH : 0).map((HH => (0, vS.jsxs)("li", {
                  className: HH.tone,
                  children: [(0, vS.jsx)("b", {
                    children: AC(tH, HH.title)
                  }), null !== HH.hint && (0, vS.jsx)("span", {
                    children: AC(tH, HH.hint)
                  })]
                }, HH.dir)))
              }), (0, vS.jsx)(tC, {
                status: CH
              })]
            })]
          })]
        })
      })
    }
    const GC = "buildAFactory2Game:",
      YC = 36e5,
      uC = 864e5;

    function QC(HH, BH, LH) {
      return Math.max(0, Math.ceil((HH + BH - Math.max(LH, HH)) / 1e3))
    }

    function WC(HH) {
      return HH.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function MC(HH) {
      return "Homestead" === HH
    }

    function xC(HH) {
      return function(HH) {
        let BH = 0;
        for (const LH of HH) {
          const HH = /^Island ([1-9]\d{0,5})$/.exec(LH);
          HH && (BH = Math.max(BH, Number(HH[1])))
        }
        return `Island ${BH+1}`
      }(HH.map((HH => HH.baf2IslandName)))
    }

    function vC(HH, BH) {
      return function(HH) {
        return `${GC}islandsBlocked${HH[0].toUpperCase()}${HH.slice(1)}`
      }("degraded" === HH && 0 === BH ? "stuck" : HH)
    }

    function PC(HH) {
      return HH.filter((HH => {
        var BH;
        return !HH.baf2IslandActive && void 0 === HH.baf2IslandUnreadable && void 0 === (null === (BH = HH.baf2IslandCoop) || void 0 === BH ? void 0 : BH.baf2CoopState)
      })).length
    }

    function TC(HH) {
      return "coopMoving" === HH || "coopUnreachable" === HH
    }

    function UC(HH, BH) {
      const LH = BH > 0;
      return {
        change: null === HH && !LH,
        switch: (null === HH || "degraded" === HH || TC(HH)) && !LH,
        rename: "loading" !== HH && "degraded" !== HH && "stuck" !== HH
      }
    }

    function VC(HH, BH) {
      return void 0 === HH || "corrupt" === HH && BH
    }
    const OC = mh;

    function bC(HH, BH, LH) {
      if (null !== HH && void 0 !== HH && HH.untilGone) {
        var AH;
        return !("dismiss" === HH.untilGone && void 0 === (null === (AH = BH.baf2IslandCoop) || void 0 === AH ? void 0 : AH.baf2CoopState)) && LH - HH.atMs < 32500
      }
      return void 0 !== HH && LH - HH.atMs < OC && BH.baf2IslandName === HH.from
    }
    const kC = mh;

    function mC(HH) {
      return "core" === (null === HH || void 0 === HH ? void 0 : HH.kind) ? HH.core : "islands" === (null === HH || void 0 === HH ? void 0 : HH.kind) ? HH.backToCore : void 0
    }

    function oC(HH) {
      return `\0${HH}\0`
    }

    function IC(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const AH = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const SH of Object.keys(LH)) AH[SH] = oC(SH);
      let rH = Object.keys(AH).length > 0 ? HH(BH, AH) : HH(BH);
      for (const [SH, hH] of Object.entries(LH)) rH = rH.split(oC(SH)).join(hH);
      return rH
    }

    function fC(HH, BH) {
      return HH ? BH ? "enabled" : "disabled" : "hidden"
    }
    const lC = {
      removed: `${GC}islandsCoopRemoved`,
      deleted: `${GC}islandsCoopDeleted`,
      notReady: `${GC}islandsCoopNotReady`,
      gone: `${GC}islandsCoopGone`
    };

    function KC(HH) {
      var BH;
      return "member" !== (null === (BH = HH.baf2IslandCoop) || void 0 === BH ? void 0 : BH.baf2CoopRole) && "newer" !== HH.baf2IslandUnreadable
    }

    function cC(HH, BH, LH, AH, rH, SH) {
      const hH = HH.baf2IslandActive,
        tH = HH.baf2IslandUnreadable,
        zH = HH.baf2IslandCoop,
        CH = function(HH, BH, LH) {
          return {
            switch: HH.switch && void 0 === BH,
            delete: HH.change && VC(BH, LH)
          }
        }(BH, tH, AH),
        EH = hH && void 0 !== zH && void 0 === zH.baf2CoopState && "coopUnreachable" === SH,
        XH = {
          switch: fC((!hH || EH) && void 0 === tH, EH || CH.switch),
          switchLabel: EH ? "tryAgain" : "switch",
          rename: fC(!0, BH.rename),
          delete: fC(!hH, CH.delete),
          deleteWaits: !hH && VC(tH, AH),
          people: fC(void 0 !== HH.baf2IslandInvitable || rH && hH && void 0 === tH && void 0 === zH, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        GH = !hH && CH.delete;
      if (void 0 === zH) return LH ? {
        ...XH,
        delete: fC(!hH, !1),
        deleteWaits: !1,
        note: GH ? {
          key: `${GC}islandsCoopKeepOwn`
        } : null
      } : XH;
      const YH = zH.baf2CoopState,
        uH = zH.baf2CoopMembers.length > 1,
        QH = {
          ...XH,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== YH && "member" === zH.baf2CoopRole) return {
        ...QH,
        dismiss: fC(!0, BH.rename),
        note: {
          key: lC[YH],
          names: {
            owner: zH.baf2CoopOwner
          }
        }
      };
      if (void 0 !== YH) {
        let HH = {
          key: `${GC}islandsCoopOwnLost`
        };
        return GH && uH ? HH = {
          key: `${GC}islandsCoopDeleteMembers`
        } : GH && LH && (HH = {
          key: `${GC}islandsCoopKeepOwn`
        }), {
          ...QH,
          delete: fC(!hH, CH.delete && !uH && !LH),
          deleteWaits: XH.deleteWaits && !uH && !LH,
          note: HH
        }
      }
      if ("member" === zH.baf2CoopRole) return {
        ...XH,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: fC(!0, hH ? BH.switch : BH.rename)
      };
      const WH = zH.baf2CoopManageHere;
      let MH = null;
      var xH;
      WH || hH ? GH && uH ? MH = {
        key: `${GC}islandsCoopDeleteMembers`
      } : GH && LH && (MH = {
        key: `${GC}islandsCoopKeepOwn`
      }) : MH = {
        key: null !== (xH = zH.baf2CoopLeft) && void 0 !== xH && xH.length ? `${GC}islandsCoopManageThereClaim` : `${GC}islandsCoopManageThere`
      };
      return {
        ...XH,
        rename: fC(!0, BH.rename && WH),
        delete: fC(!hH, CH.delete && !uH && !LH),
        deleteWaits: XH.deleteWaits && !uH && !LH,
        people: "enabled",
        peopleLabel: "players",
        unshare: fC(WH && hH && !uH, BH.change),
        remove: WH,
        note: MH
      }
    }

    function eC(HH) {
      var BH;
      const LH = HH.baf2IslandCoop;
      if ("owner" !== (null === LH || void 0 === LH ? void 0 : LH.baf2CoopRole) || void 0 !== LH.baf2CoopState || null === (BH = LH.baf2CoopLeft) || void 0 === BH || !BH.length) return null;
      const AH = HH.baf2IslandActive && LH.baf2CoopManageHere;
      return {
        left: LH.baf2CoopLeft,
        claim: AH,
        goThere: !AH && LH.baf2CoopManageHere
      }
    }

    function qC(HH) {
      return HH.baf2CoopMembers.length >= HH.baf2CoopMax
    }

    function gC(HH, BH, LH) {
      return void 0 !== HH && BH < HH.answer && LH - HH.atMs < OC
    }
    const NC = "buildAFactory2Game:";

    function RC(HH, BH) {
      return {
        onKeyDown: LH => {
          LH.stopPropagation(), LH.nativeEvent.isComposing || 229 === LH.nativeEvent.keyCode || ("Enter" === LH.key ? (LH.preventDefault(), HH()) : "Escape" === LH.key && (LH.preventDefault(), BH()))
        }
      }
    }

    function jC(HH) {
      return {
        onKeyDown: BH => {
          "Escape" !== BH.key || BH.nativeEvent.isComposing || (BH.preventDefault(), BH.stopPropagation(), HH())
        }
      }
    }

    function nC(HH) {
      HH.currentTarget.select()
    }

    function FC(HH, BH) {
      (0, AH.useEffect)((() => {
        var LH;
        HH && (null === (LH = BH.current) || void 0 === LH || LH.scrollIntoView({
          block: "nearest"
        }))
      }), [HH, BH])
    }

    function DC(HH) {
      const [BH, LH] = (0, AH.useState)(null);
      return (0, AH.useEffect)((() => {
        const BH = document.querySelector(".UiRequests"),
          AH = HH.current;
        if (!BH || !AH || "undefined" === typeof ResizeObserver) return;
        const rH = () => {
          const HH = BH.getBoundingClientRect(),
            rH = AH.getBoundingClientRect(),
            SH = AH.parentElement,
            hH = SH && parseFloat(getComputedStyle(SH).paddingTop) || 0,
            tH = function(HH, BH, LH, AH) {
              if (!HH || HH.height <= 0 || HH.right <= BH.left || HH.left >= BH.right) return null;
              const rH = Math.max(AH, HH.bottom + 8);
              return {
                marginTop: Math.round(rH - AH),
                maxHeight: Math.max(0, Math.floor(LH - rH - AH))
              }
            }(HH, rH, window.innerHeight, hH);
          LH((HH => (null === HH || void 0 === HH ? void 0 : HH.marginTop) === (null === tH || void 0 === tH ? void 0 : tH.marginTop) && (null === HH || void 0 === HH ? void 0 : HH.maxHeight) === (null === tH || void 0 === tH ? void 0 : tH.maxHeight) ? HH : tH))
        };
        rH();
        const SH = new ResizeObserver(rH);
        return SH.observe(BH), window.addEventListener("resize", rH), () => {
          SH.disconnect(), window.removeEventListener("resize", rH)
        }
      }), [HH]), BH
    }

    function wC() {
      (0, AH.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function ZC(HH) {
      (0, AH.useEffect)((() => {
        var BH;
        null === (BH = HH.current) || void 0 === BH || BH.focus()
      }), [HH])
    }

    function dC(HH) {
      const [BH, LH] = (0, AH.useState)(Date.now);
      return (0, AH.useEffect)((() => {
        const BH = window.setInterval((() => {
          LH(Date.now())
        }), HH);
        return () => {
          window.clearInterval(BH)
        }
      }), [HH]), BH
    }

    function aC(HH) {
      let {
        tier: BH,
        t: LH
      } = HH;
      const {
        kind: AH,
        short: rH
      } = WH(BH), SH = YH(BH, uH), hH = LH(`${NC}${SH.key}`, {
        ...SH.params,
        name: LH(`${NC}${MH(BH).nameKey}`)
      });
      return (0, vS.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, vS.jsx)("span", {
          className: Pr()("Baf2IslandTierPip", {
            Stage: "tier" !== AH
          }),
          "aria-hidden": "true",
          children: rH
        }), hH]
      })
    }

    function sC(HH) {
      let {
        note: BH,
        className: LH,
        t: AH
      } = HH;
      return (0, vS.jsx)("p", {
        className: Pr()("Baf2IslandNote", LH),
        children: IC(AH, BH.key, BH.names, BH.params)
      })
    }
    const JC = "buildAFactory2Game:";

    function iC(HH) {
      let {
        message: BH,
        arrivedAtMs: LH,
        close: rH,
        leave: SH
      } = HH;
      const hH = eh(),
        {
          t: tH
        } = (0, Or.B)(),
        zH = dC(1e3),
        CH = (0, AH.useRef)(null);
      wC(), (0, AH.useEffect)((() => {
        var HH;
        null === (HH = CH.current) || void 0 === HH || HH.focus()
      }), []);
      const EH = QC(LH, BH.baf2TransferInMs, zH),
        XH = LH + BH.baf2TransferInMs - 1e3,
        [GH, YH] = (0, AH.useState)(null);
      (0, AH.useEffect)((() => {
        const HH = window.setTimeout((() => {
          YH(XH)
        }), Math.max(0, XH - Date.now()));
        return () => {
          window.clearTimeout(HH)
        }
      }), [XH]);
      const uH = GH === XH || zH >= XH,
        QH = BH.baf2TransferIsland,
        WH = BH.baf2TransferOwner;
      return (0, vS.jsx)(Qh.b, {
        close: rH,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, vS.jsxs)("section", {
          ref: CH,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, vS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vS.jsxs)("div", {
              children: [(0, vS.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === WH ? IC(tH, `${JC}islandsTransferOwn`, {
                  island: QH
                }) : IC(tH, `${JC}islandsTransfer`, {
                  island: QH,
                  owner: WH
                })
              }), (0, vS.jsx)("p", {
                children: uH ? tH(`${JC}islandsTransferNow`) : tH(`${JC}islandsTransferIn`, {
                  time: QS(tH, EH)
                })
              })]
            }), (0, vS.jsx)(Wh.q, {
              ariaLabel: tH(`${JC}islandsClose`),
              onClick: rH
            })]
          }), !uH && (0, vS.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, vS.jsx)("p", {
              className: "Baf2TransferNote",
              children: tH(`${JC}islandsTransferNote`)
            }), (0, vS.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, vS.jsx)(Wh.i, {
                onClick: () => {
                  hH.send("baf2coopstay"), SH()
                },
                children: tH(`${JC}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var pC = LH(1450),
      yC = LH(1072),
      HE = LH.n(yC);
    const BE = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const LE = "buildAFactory2Game:",
      AE = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function rE(HH, BH, LH) {
      return void 0 === BH ? LH : "string" === typeof BH ? BH : Array.isArray(BH) ? BH.map((BH => "string" === typeof BH ? BH : "translationKey" in BH ? HH(BH.translationKey) : "")).join("") : HH(BH.translationKey)
    }

    function SE(HH) {
      const BH = {};
      for (const [LH, AH] of Object.entries(null !== HH && void 0 !== HH ? HH : {})) BH[LH] = AH < 0 ? uS(AH) : AH.toLocaleString("en-US");
      return BH
    }

    function hE(HH, BH) {
      const LH = BH ? "touch" : "mouse";
      return {
        use: HH(`${LE}lookUse_${LH}`),
        Use: HH(`${LE}lookUseStart_${LH}`)
      }
    }
    const tE = (0, AH.memo)((function(HH) {
      let {
        item: BH
      } = HH;
      return (0, vS.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, vS.jsx)(kr.e, {
          itemName: BH,
          amount: 0
        })
      })
    }));

    function zE(HH) {
      let {
        label: BH,
        percent: LH,
        progress: AH
      } = HH;
      return (0, vS.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, vS.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${BH}: ${AH}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": LH,
          children: (0, vS.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${LH}%`
            }
          })
        }), (0, vS.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: AH
        })]
      })
    }

    function CE(HH) {
      let {
        chips: BH
      } = HH;
      return (0, vS.jsx)("span", {
        className: "Baf2QuestChips",
        children: BH.map((HH => {
          let [BH, LH, AH] = HH;
          const rH = LH >= AH;
          return (0, vS.jsxs)("span", {
            className: Pr()("Baf2QuestChip", {
              Met: rH
            }),
            children: [(0, vS.jsx)(tE, {
              item: BH
            }), (0, vS.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: rH ? `\u2713${AH}` : `${LH}/${AH}`
            })]
          }, BH)
        }))
      })
    }

    function EE(HH, BH) {
      const {
        key: LH,
        params: AH
      } = YH(BH, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return HH(`${LE}${LH}`, {
        ...AH,
        name: HH(`${LE}${MH(BH).nameKey}`)
      })
    }

    function XE(HH) {
      let {
        core: BH,
        t: LH
      } = HH;
      const [AH, rH] = BH, SH = rH > 0 ? Math.floor(100 * AH / rH) : 100;
      return (0, vS.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": LH(`${LE}questCoreLabel`, {
          have: String(AH),
          need: String(rH)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": SH,
        children: [(0, vS.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: LH(`${LE}questCore`, {
            percent: String(SH)
          })
        }), (0, vS.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, vS.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${SH}%`
            }
          })
        })]
      })
    }

    function GE(HH) {
      let {
        rows: BH,
        t: LH
      } = HH;
      const AH = BH.filter((HH => HH.done)).length;
      return (0, vS.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": LH(`${LE}questStepsProgress`, {
          done: String(AH),
          total: String(BH.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": BH.length,
        "aria-valuenow": AH,
        children: BH.map((HH => (0, vS.jsx)("span", {
          className: Pr()("Baf2QuestSegment", {
            Done: HH.done,
            Current: HH.current
          })
        }, HH.id)))
      })
    }
    const YE = (0, AH.memo)(QE, uE);

    function uE(HH, BH) {
      const LH = LH => HH.view.itemNames[LH] === BH.view.itemNames[LH];
      return HH.t === BH.t && HH.extra === BH.extra && (null === HH.row.item || LH(HH.row.item)) && HH.row.madeFor.every(LH) && HH.row.also.every(LH) && HE()(HH.row, BH.row)
    }

    function QE(HH) {
      let {
        row: BH,
        view: LH,
        t: AH,
        extra: rH
      } = HH;
      const {
        isTouchScreen: SH
      } = (0, Mr.m)(["isTouchScreen"]), hH = BH.item ? function(HH, BH, LH) {
        return 1 !== LH && BE.has(HH) ? Vr(BH) : null
      }(BH.key, BH.item, BH.total) : null, tH = hH ? AH(hH) : BH.item ? rE(AH, LH.itemNames[BH.item], BH.item) : "", zH = BH.also.map((HH => rE(AH, LH.itemNames[HH], HH))), CH = zH.join(", "), EH = function(HH, BH) {
        var LH;
        return BH.length < 2 ? null !== (LH = BH[0]) && void 0 !== LH ? LH : "" : HH(`${LE}listAnd`, {
          rest: BH.slice(0, -1).join(HH(`${LE}listComma`)),
          last: BH[BH.length - 1]
        })
      }(AH, [tH, ...zH]), XH = AH(`${LE}${BH.key}`, {
        ...hE(AH, SH),
        ...SE(BH.params),
        item: tH,
        also: CH,
        itemList: EH,
        total: String(BH.total)
      }), [GH, ...YH] = XH.split("\n"), uH = BH.total > 1 && !BH.done && !BH.away;
      return (0, vS.jsxs)("li", {
        className: Pr()("Baf2QuestStep", {
          Done: BH.done,
          Current: BH.current,
          JustFinished: BH.justFinished,
          Away: BH.away
        }),
        children: [!BH.done && null !== BH.item && (0, vS.jsx)(tE, {
          item: BH.item
        }), (BH.done || null === BH.item) && (0, vS.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: BH.done ? "\u2713" : "\u25cb"
        }), (0, vS.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, vS.jsx)("strong", {
            children: GH
          }), YH.length > 0 && (0, vS.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: YH.join(" ")
          }), !BH.done && BH.madeFor.length > 0 && (0, vS.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: AH("buildAFactory2Game:questRowFor", {
              items: BH.madeFor.map((HH => rE(AH, LH.itemNames[HH], HH))).join(" \u2192 ")
            })
          }), uH && (0, vS.jsx)(zE, {
            label: GH,
            percent: Math.round(100 * BH.amount / BH.total),
            progress: `${BH.amount.toLocaleString("en-US")}/${BH.total.toLocaleString("en-US")}`
          }), !BH.done && !BH.away && BH.chips && BH.chips.length > 0 && (0, vS.jsx)(CE, {
            chips: BH.chips
          }), rH]
        })]
      })
    }
    const WE = "buildAFactory2Game:",
      ME = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      xE = {
        on: `${WE}tutorialButtonOn`,
        hud: `${WE}tutorialButtonHud`,
        off: `${WE}tutorialButtonOff`
      },
      vE = {
        on: `${WE}tutorialPickedOn`,
        hud: `${WE}tutorialPickedHud`,
        off: `${WE}tutorialPickedOff`
      };
    class PE {
      constructor(HH, BH, LH) {
        this.commands = HH, this.quests = BH, this.toasts = LH
      }
      next() {
        const HH = function(HH) {
            return lH[(lH.indexOf(HH) + 1) % lH.length]
          }(this.quests.get().tutorial),
          BH = this.quests.setTutorial(HH);
        this.commands.send(`baf2tutorial ${HH} ${BH}`), this.toasts.show({
          baf2ToastText: [(0, cH.fe)({
            translationKey: vE[HH]
          }, cH.K.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function TE(HH, BH) {
      let [LH, AH] = BH;
      return HH(`${LE}${LH}`, SE(AH))
    }

    function UE(HH) {
      let [BH, LH] = HH;
      return BH + JSON.stringify(LH)
    }

    function VE(HH) {
      let {
        goal: BH,
        t: LH
      } = HH;
      return BH ? (0, vS.jsx)("span", {
        className: "Baf2BookGoal",
        children: LH(`${LE}${BH}`)
      }) : null
    }

    function OE(HH) {
      let {
        view: BH,
        t: LH
      } = HH;
      if (!BH.name) return null;
      const AH = jr(BH.rows);
      return (0, vS.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, vS.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: LH(`${LE}currentQuest`)
        }), (0, vS.jsx)("strong", {
          className: "Baf2BookTitle",
          children: TE(LH, BH.name)
        }), (0, vS.jsx)(VE, {
          goal: BH.goal,
          t: LH
        }), AH.length > 1 && (0, vS.jsx)(GE, {
          rows: AH,
          t: LH
        }), (0, vS.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: BH.rows.map((HH => (0, vS.jsx)(YE, {
            row: HH,
            view: BH,
            t: LH
          }, HH.id)))
        }), BH.reward && (0, vS.jsxs)("span", {
          className: "Baf2BookReward",
          children: [LH(`${LE}questReward`), (0, vS.jsx)(tE, {
            item: BH.reward
          }), rE(LH, BH.itemNames[BH.reward], BH.reward)]
        })]
      })
    }

    function bE(HH) {
      let {
        quest: BH,
        upcoming: LH,
        t: AH
      } = HH;
      return (0, vS.jsxs)("li", {
        className: Pr()("Baf2BookQuest", {
          Done: BH[3],
          Upcoming: LH
        }),
        children: [(0, vS.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: BH[3] ? "\u2713" : "\u25cb"
        }), (0, vS.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, vS.jsx)("strong", {
            className: "Baf2BookTitle",
            children: TE(AH, BH)
          }), (0, vS.jsx)(VE, {
            goal: BH[2],
            t: AH
          })]
        })]
      })
    }

    function kE(HH) {
      let {
        done: BH,
        total: LH,
        t: AH
      } = HH;
      const rH = LH > 0 ? Math.round(100 * BH / LH) : 0,
        SH = AH(`${LE}questBookChapterProgress`, {
          done: String(BH),
          total: String(LH)
        });
      return (0, vS.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, vS.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": SH,
          "aria-valuemin": 0,
          "aria-valuemax": LH,
          "aria-valuenow": BH,
          children: (0, vS.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${rH}%`
            }
          })
        }), (0, vS.jsx)("span", {
          className: "Baf2BookProgressText",
          children: SH
        })]
      })
    }

    function mE(HH) {
      let {
        view: BH,
        tier: LH,
        quests: AH,
        t: rH
      } = HH;
      const SH = LH === BH.tier,
        hH = (null !== AH && void 0 !== AH ? AH : []).filter((HH => !HH[4])),
        tH = (null !== AH && void 0 !== AH ? AH : []).filter((HH => HH[4])),
        zH = hH.filter((HH => HH[3])).length,
        CH = SH && BH.name ? UE(BH.name) : null,
        EH = hH.findIndex((HH => !HH[3] && UE(HH) === CH));
      return (0, vS.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, vS.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, vS.jsx)("h3", {
            children: EE(rH, LH)
          }), hH.length > 0 && (0, vS.jsx)(kE, {
            done: zH,
            total: hH.length,
            t: rH
          }), SH && BH.core && (0, vS.jsx)(XE, {
            core: BH.core,
            t: rH
          })]
        }), (0, vS.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === AH && SH && (0, vS.jsx)(OE, {
            view: BH,
            t: rH
          }), hH.map(((HH, LH) => LH === EH ? (0, vS.jsx)(OE, {
            view: BH,
            t: rH
          }, UE(HH)) : (0, vS.jsx)(bE, {
            quest: HH,
            upcoming: !HH[3],
            t: rH
          }, UE(HH))))]
        }), SH && BH.side && (0, vS.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, vS.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: rH(`${LE}questSide`)
          }), (0, vS.jsx)("strong", {
            className: "Baf2BookTitle",
            children: TE(rH, BH.side.name)
          }), (0, vS.jsx)(VE, {
            goal: BH.side.goal,
            t: rH
          }), (0, vS.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, vS.jsx)(YE, {
              row: BH.side.row,
              view: BH,
              t: rH
            })
          })]
        }), tH.length > 0 && (0, vS.jsxs)(vS.Fragment, {
          children: [(0, vS.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: rH(`${LE}questBookSidesDone`)
          }), (0, vS.jsx)("ol", {
            className: "Baf2BookQuests",
            children: tH.map((HH => (0, vS.jsx)(bE, {
              quest: HH,
              upcoming: !1,
              t: rH
            }, UE(HH))))
          })]
        })]
      })
    }

    function oE(HH) {
      var BH, LH, SH;
      let {
        store: hH,
        tutorial: tH,
        close: zH
      } = HH;
      const {
        t: CH
      } = (0, Or.B)(), XH = (0, pC.e)(Kr, hH.get()), GH = null !== (BH = XH.tier) && void 0 !== BH ? BH : 1, [YH, uH] = (0, AH.useState)(null), MH = (null === YH || void 0 === YH ? void 0 : YH.at) === GH ? YH.tier : GH, xH = (0, AH.useRef)(null), vH = null !== XH.chapters;
      (0, AH.useEffect)((() => {
        var HH;
        xH.current && (xH.current.scrollTop = 0);
        const BH = null === (HH = xH.current) || void 0 === HH ? void 0 : HH.querySelector(".Baf2BookQuest.Current");
        if (xH.current && BH) {
          const HH = BH.getBoundingClientRect().bottom - xH.current.getBoundingClientRect().bottom;
          HH > 0 && (xH.current.scrollTop += Math.min(HH, BH.getBoundingClientRect().top - xH.current.getBoundingClientRect().top))
        }
      }), [MH, vH]);
      const PH = null === (LH = XH.chapters) || void 0 === LH ? void 0 : LH.find((HH => {
        let [BH] = HH;
        return BH === MH
      }));
      return (0, vS.jsx)(Qh.b, {
        close: zH,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, vS.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: AE,
          children: [(0, vS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vS.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: CH(`${LE}questBookTitle`)
            }), (0, vS.jsx)(Wh.u, {
              className: "Baf2BookTutorialButton",
              disabled: !XH.tutorialKnown,
              ariaLabel: CH(xE[XH.tutorial]),
              title: CH(xE[XH.tutorial]),
              onClick: () => {
                tH.next()
              },
              children: (0, vS.jsx)(br.c, {
                name: ME[XH.tutorial]
              })
            }), (0, vS.jsx)(Wh.q, {
              onClick: zH
            })]
          }), (0, vS.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": CH(`${LE}questBookChapters`),
            "data-pad-initial-area": !0,
            children: rH.slice(0, EH()).map(((HH, BH) => {
              const LH = BH + 1,
                {
                  kind: AH,
                  short: rH
                } = WH(LH),
                SH = QH(LH, GH),
                hH = SH ? CH(`${LE}coreAtomicHidden`) : EE(CH, LH);
              return (0, vS.jsx)("li", {
                children: (0, vS.jsx)("button", {
                  type: "button",
                  className: Pr()({
                    Stage: "tier" !== AH,
                    Atomic: "atomic" === AH,
                    Current: LH === GH,
                    Selected: LH === MH
                  }),
                  disabled: LH > GH,
                  "aria-pressed": LH === MH,
                  "aria-label": hH,
                  title: SH ? void 0 : hH,
                  onClick: () => {
                    uH({
                      tier: LH,
                      at: GH
                    })
                  },
                  children: SH ? "?" : rH
                })
              }, HH.nameKey)
            }))
          }), (0, vS.jsxs)("div", {
            ref: xH,
            className: "Baf2BookBody",
            children: [Nr(XH) && MH === GH && (0, vS.jsx)("p", {
              className: "Baf2BookEmpty",
              children: CH(`${LE}questBookAllDone`)
            }), (0, vS.jsx)(mE, {
              view: XH,
              tier: MH,
              quests: null !== (SH = null === PH || void 0 === PH ? void 0 : PH[1]) && void 0 !== SH ? SH : null,
              t: CH
            })]
          })]
        })
      })
    }
    const IE = "buildAFactory2Game:";

    function fE(HH) {
      let {
        tiers: BH,
        from: LH,
        tier: AH,
        shown: rH,
        XY: SH
      } = HH;
      const {
        t: hH
      } = (0, Or.B)(), tH = BH.map(((HH, BH) => {
        const tH = LH + BH,
          {
            kind: zH,
            short: CH
          } = WH(tH),
          EH = QH(tH, AH);
        return (0, vS.jsx)("li", {
          children: (0, vS.jsx)("button", {
            type: "button",
            className: Pr()({
              Stage: "tier" !== zH,
              Silhouette: EH,
              Reached: tH <= AH,
              Current: tH === AH,
              Next: tH === AH + 1,
              Selected: tH === rH
            }),
            disabled: EH,
            "aria-pressed": tH === rH,
            "aria-label": EH ? hH(`${IE}coreAtomicHidden`) : void 0,
            title: EH ? void 0 : hH(`${IE}${HH.nameKey}`),
            onClick: () => {
              SH(tH)
            },
            children: EH ? "?" : CH
          })
        }, HH.nameKey)
      }));
      return (0, vS.jsx)(vS.Fragment, {
        children: tH
      })
    }

    function lE(HH) {
      let {
        id: BH,
        label: LH,
        tiers: AH,
        from: rH,
        ...SH
      } = HH;
      return (0, vS.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, vS.jsx)("span", {
          id: BH,
          className: "Baf2CoreLadderLabel",
          children: LH
        }), (0, vS.jsx)("ol", {
          "aria-labelledby": BH,
          children: (0, vS.jsx)(fE, {
            ...SH,
            tiers: AH,
            from: rH
          })
        })]
      })
    }

    function KE(HH) {
      const {
        t: BH
      } = (0, Or.B)(), LH = rH.findIndex((HH => void 0 !== HH.stage)), AH = rH.findIndex((HH => void 0 !== HH.reactorTier)), SH = LH < 0 ? rH : rH.slice(0, LH), hH = LH < 0 ? [] : rH.slice(LH, AH < 0 ? void 0 : AH), zH = AH < 0 || !tH() ? [] : rH.slice(AH);
      return (0, vS.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, vS.jsx)(lE, {
          ...HH,
          id: "baf2CoreTiersLabel",
          label: BH(`${IE}coreTiersLabel`),
          tiers: SH,
          from: 1
        }), hH.length > 0 && (0, vS.jsx)(lE, {
          ...HH,
          id: "baf2CoreStagesLabel",
          label: BH(`${IE}coreStagesLabel`),
          tiers: hH,
          from: LH + 1
        }), zH.length > 0 && (0, vS.jsx)(lE, {
          ...HH,
          id: "baf2CoreAtomicLabel",
          label: BH(`${IE}coreAtomicLabel`),
          tiers: zH,
          from: AH + 1
        })]
      })
    }
    const cE = "buildAFactory2Game:";

    function eE(HH) {
      let {
        item: BH,
        itemNames: LH,
        children: AH
      } = HH;
      return (0, vS.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, vS.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, vS.jsx)(kr.e, {
            itemName: BH,
            amount: 0
          })
        }), (0, vS.jsx)(mr.b, {
          text: LH[BH]
        }), AH]
      })
    }

    function qE(HH) {
      const BH = new Map;
      for (const {
          block: AH
        }
        of HH.newDeposits) {
        var LH;
        BH.set(AH, (null !== (LH = BH.get(AH)) && void 0 !== LH ? LH : 0) + 1)
      }
      return [...BH]
    }

    function gE(HH) {
      let {
        value: BH,
        label: LH,
        more: AH
      } = HH;
      return (0, vS.jsxs)("li", {
        children: [(0, vS.jsx)("strong", {
          children: BH
        }), (0, vS.jsx)("span", {
          children: LH
        }), AH > 0 && (0, vS.jsxs)("em", {
          children: ["+", AH]
        })]
      })
    }

    function NE(HH) {
      let {
        items: BH,
        itemNames: LH
      } = HH;
      const {
        t: rH
      } = (0, Or.B)(), [SH, hH] = (0, AH.useState)(null), tH = null !== SH && BH.includes(SH) ? SH : null;
      return (0, vS.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, vS.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: rH(`${cE}coreRewardUnlocks`)
        }), (0, vS.jsx)("ul", {
          children: BH.map((HH => (0, vS.jsx)("li", {
            children: (0, vS.jsx)("button", {
              type: "button",
              className: Pr()("Baf2PanelIcon", {
                Picked: HH === tH
              }),
              title: (0, pr.h)(rH, HH),
              "aria-label": (0, pr.h)(rH, HH),
              "aria-pressed": HH === tH,
              onClick: () => {
                hH(HH === tH ? null : HH)
              },
              children: (0, vS.jsx)(kr.e, {
                itemName: HH,
                amount: 0
              })
            })
          }, HH)))
        }), (0, vS.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== tH && (0, vS.jsxs)(vS.Fragment, {
            children: [(0, vS.jsx)(mr.b, {
              text: LH[tH]
            }), " \xb7 ", (0, vS.jsx)(mr.b, {
              text: LH[IH(tH)]
            })]
          }), null === tH && rH(`${cE}coreRecipeTap`)]
        })]
      })
    }

    function RE(HH) {
      var BH, LH;
      let {
        def: AH,
        tier: rH,
        itemNames: SH
      } = HH;
      const {
        t: hH
      } = (0, Or.B)(), tH = rH > 1 ? MH(rH - 1) : void 0, zH = Math.round(2 * AH.islandRadius), CH = tH ? Math.round(2 * tH.islandRadius) : zH, EH = rH >= 3 ? TA(rH) : null;
      return (0, vS.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, vS.jsxs)("ul", {
          className: Pr()("Baf2CoreStats", {
            Four: null !== EH
          }),
          children: [(0, vS.jsx)(gE, {
            value: `${zH}\xd7${zH}`,
            label: hH(`${cE}coreStatIsland`),
            more: zH - CH
          }), (0, vS.jsx)(gE, {
            value: String(AH.machineAllowance),
            label: hH(`${cE}coreStatMachines`),
            more: AH.machineAllowance - (null !== (BH = null === tH || void 0 === tH ? void 0 : tH.machineAllowance) && void 0 !== BH ? BH : AH.machineAllowance)
          }), (0, vS.jsx)(gE, {
            value: String(AH.beltAllowance),
            label: hH(`${cE}coreStatBelts`),
            more: AH.beltAllowance - (null !== (LH = null === tH || void 0 === tH ? void 0 : tH.beltAllowance) && void 0 !== LH ? LH : AH.beltAllowance)
          }), null !== EH && (0, vS.jsx)(gE, {
            value: String(EH),
            label: hH(`${cE}coreStatStorage`),
            more: EH - (tH ? TA(rH - 1) : EH)
          })]
        }), AH.reward && (0, vS.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, vS.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: hH(`${cE}coreRewardItem`)
          }), (0, vS.jsx)(eE, {
            item: AH.reward,
            itemNames: SH
          })]
        }), AH.newDeposits.length > 0 && (0, vS.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, vS.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: hH(AH.newDeposits.length > 1 ? `${cE}coreRewardDeposits` : `${cE}coreRewardDeposit`)
          }), qE(AH).map((HH => {
            let [BH, LH] = HH;
            return (0, vS.jsx)(eE, {
              item: BH,
              itemNames: SH,
              children: LH > 1 && ` \xd7${LH}`
            }, BH)
          }))]
        }), AH.unlocks.length > 0 && (0, vS.jsx)(NE, {
          items: AH.unlocks,
          itemNames: SH
        }), (0, vS.jsx)(jE, {
          tier: rH
        })]
      })
    }

    function jE(HH) {
      let {
        tier: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)(), AH = Yr[BH];
      if (!AH) return null;
      const rH = Gr(BH, 0, 0).barrierMax !== Gr(BH - 1, 0, 0).barrierMax;
      return (0, vS.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, vS.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, vS.jsx)(kr.e, {
            itemName: rH ? hr.Chestplate : Sr,
            amount: 0
          })
        }), LH(`${cE}gearPerkLine`, {
          perk: LH(`${cE}${AH}`)
        })]
      })
    }

    function nE(HH, BH) {
      return null === HH ? BH : HH.value
    }

    function FE(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === HH || LH - HH.atMs >= AH ? null : rH(HH.value, BH) ? HH.armed ? null : HH : HH.armed ? HH : {
        ...HH,
        armed: !0
      }
    }

    function DE(HH, BH) {
      const LH = BH.filter((BH => {
        var LH;
        return !1 !== (null === (LH = HH.get(BH)) || void 0 === LH ? void 0 : LH.value)
      }));
      for (const [AH, rH] of HH) rH.value && !BH.includes(AH) && LH.push(AH);
      return LH
    }

    function wE(HH, BH, LH, rH) {
      const [SH, hH] = (0, AH.useState)((() => new Map)), tH = () => {
        hH((BH => function(HH, BH, LH, AH) {
          var rH;
          let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            hH = null;
          for (const [tH, zH] of HH) {
            const rH = FE(zH, BH(tH), LH, AH, SH);
            rH !== zH && (hH ??= new Map(HH), null === rH ? hH.delete(tH) : hH.set(tH, rH))
          }
          return null !== (rH = hH) && void 0 !== rH ? rH : HH
        }(BH, HH, Date.now(), LH, rH)))
      };
      (0, AH.useEffect)((() => {
        tH()
      }), [BH, LH]), (0, AH.useEffect)((() => {
        if (0 === SH.size) return;
        const HH = Math.min(...[...SH.values()].map((HH => HH.atMs))),
          BH = setTimeout(tH, Math.max(0, HH + LH - Date.now()) + 1);
        return () => {
          clearTimeout(BH)
        }
      }), [SH, BH, LH]);
      return [SH, (BH, LH) => {
        hH((AH => {
          const SH = new Map(AH);
          return SH.set(BH, function(HH, BH, LH) {
            return {
              value: HH,
              atMs: LH,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(HH, BH)
            }
          }(LH, HH(BH), Date.now(), rH)), SH
        }))
      }]
    }
    const ZE = "buildAFactory2Game:";

    function dE(HH) {
      let {
        message: BH,
        itemNames: LH
      } = HH;
      const rH = eh(),
        {
          t: SH
        } = (0, Or.B)(),
        [hH, tH] = (0, AH.useState)(!1),
        [zH, CH] = function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mh;
          const [LH, AH] = wE((BH => HH.includes(BH)), HH, BH, Object.is);
          return [DE(LH, HH), AH]
        }(BH.baf2CoreBankPaused),
        EH = new Set(zH),
        XH = [...BH.baf2CoreBanked];
      for (const AH of EH) XH.some((HH => {
        let [BH] = HH;
        return BH === AH
      })) || XH.push([AH, 0]);
      return 0 === XH.length ? null : (0, vS.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, vS.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": hH,
          onClick: () => {
            tH(!hH)
          },
          children: [(0, vS.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: SH(`${ZE}coreBankedLater`)
          }), (0, vS.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: XH.map((HH => {
              let [BH, LH] = HH;
              const AH = EH.has(BH);
              return (0, vS.jsxs)("span", {
                className: Pr()({
                  Paused: AH
                }),
                title: AH ? SH(`${ZE}coreBankPausedTag`) : void 0,
                children: [(0, vS.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, vS.jsx)(kr.e, {
                    itemName: BH,
                    amount: 0
                  })
                }), LH, AH && (0, vS.jsx)(br.c, {
                  name: "pause"
                })]
              }, BH)
            }))
          }), (0, vS.jsx)(br.c, {
            name: hH ? "angle-up" : "angle-down"
          })]
        }), hH && (0, vS.jsxs)(vS.Fragment, {
          children: [(0, vS.jsx)("ul", {
            children: XH.map((HH => {
              let [BH, AH] = HH;
              const hH = EH.has(BH);
              return (0, vS.jsxs)("li", {
                children: [(0, vS.jsxs)(eE, {
                  item: BH,
                  itemNames: LH,
                  children: [(0, vS.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: AH
                  }), hH && (0, vS.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: SH(`${ZE}coreBankPausedTag`)
                  })]
                }), (0, vS.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, vS.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === AH,
                    onClick: () => {
                      rH.send(`baf2corewithdraw ${AH} ${BH}`)
                    },
                    children: SH(`${ZE}coreTake`)
                  }), (0, vS.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      rH.send(`${PH} ${BH}`), CH(BH, !hH)
                    },
                    children: SH(hH ? `${ZE}coreBankResume` : `${ZE}coreBankStop`)
                  })]
                })]
              }, BH)
            }))
          }), (0, vS.jsx)("p", {
            className: "Baf2CoreHint",
            children: SH(`${ZE}coreBankNote`)
          })]
        })]
      })
    }
    const aE = "buildAFactory2Game:";

    function sE(HH) {
      const BH = Math.max(0, Math.floor(HH));
      return `${Math.floor(BH/60)}:${String(BH%60).padStart(2,"0")}`
    }

    function JE(HH) {
      let {
        item: BH
      } = HH;
      return (0, vS.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, vS.jsx)(kr.e, {
          itemName: BH,
          amount: 0
        })
      })
    }

    function iE() {
      return (0, vS.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, vS.jsx)(br.c, {
          name: "bolt"
        })
      })
    }

    function pE(HH) {
      let {
        charge: BH,
        hint: LH,
        itemNames: AH
      } = HH;
      const rH = eh(),
        {
          t: SH
        } = (0, Or.B)(),
        [hH, tH, zH, CH, EH, XH, GH] = BH,
        [YH, uH] = function(HH) {
          var BH;
          let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mh,
            AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [rH, SH] = wE((() => HH), HH, LH, AH);
          return [nE(null !== (BH = rH.get("")) && void 0 !== BH ? BH : null, HH), HH => {
            SH("", HH)
          }]
        }(GH),
        QH = YH === GH ? XH : !YH,
        WH = CH >= EH,
        MH = hH.find((HH => {
          let [, BH, LH] = HH;
          return LH < .9 * BH
        }));
      let xH = `${aE}coreChargeWaiting`,
        vH = {};
      return WH ? xH = `${aE}coreChargeDone` : YH ? xH = `${aE}coreChargeStopped` : QH && LH ? (xH = `${aE}${LH[0]}`, vH = {
        item: (0, pr.h)(SH, LH[1])
      }) : QH && MH ? (xH = `${aE}coreChargeShort`, vH = {
        item: (0, pr.h)(SH, MH[0])
      }) : QH && tH > 0 && !zH ? xH = `${aE}coreChargePower` : QH && (xH = `${aE}coreChargeRunning`), (0, vS.jsxs)("div", {
        className: Pr()("Baf2CoreCharge", {
          Waiting: !QH && !WH,
          Done: WH
        }),
        children: [(0, vS.jsxs)("h4", {
          children: [SH(`${aE}coreChargeTitle`), (0, vS.jsx)("span", {
            children: SH(`${aE}coreChargeProgress`, {
              done: sE(CH),
              need: sE(EH)
            })
          })]
        }), (0, vS.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, vS.jsx)("div", {
            style: {
              width: 100 * Math.min(CH, EH) / EH + "%"
            }
          })
        }), (0, vS.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [hH.map((HH => {
            var BH;
            let [LH, rH, hH] = HH;
            const tH = hH >= .9 * rH;
            return (0, vS.jsxs)("li", {
              className: Pr()({
                Done: tH,
                Short: QH && !tH
              }),
              children: [(0, vS.jsx)(JE, {
                item: LH
              }), (0, vS.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, vS.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, vS.jsx)(mr.b, {
                    text: null !== (BH = AH[LH]) && void 0 !== BH ? BH : LH
                  }), (0, vS.jsx)("span", {
                    children: SH(`${aE}coreChargeItem`, {
                      now: String(hH),
                      need: String(rH)
                    })
                  })]
                }), (0, vS.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, vS.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*hH/rH)}%`
                    }
                  })
                })]
              })]
            }, LH)
          })), tH > 0 && (0, vS.jsxs)("li", {
            className: Pr()("Baf2CoreChargePower", {
              Short: QH && !zH
            }),
            children: [(0, vS.jsx)(iE, {}), (0, vS.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, vS.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, vS.jsx)("span", {
                  children: SH(`${aE}coreChargePowerRow`, {
                    power: iH(tH)
                  })
                })
              })
            })]
          })]
        }), (0, vS.jsx)("p", {
          className: "Baf2CoreHint",
          children: SH(xH, vH)
        }), !WH && (QH || YH) && (0, vS.jsx)("button", {
          type: "button",
          className: Pr()("Baf2CoreChargeToggle", {
            Stopped: YH
          }),
          onClick: () => {
            rH.send(UH), uH(!YH)
          },
          children: SH(YH ? `${aE}coreChargeRestart` : `${aE}coreChargeStop`)
        })]
      })
    }

    function yE(HH) {
      let {
        charge: BH,
        reached: LH,
        itemNames: AH
      } = HH;
      const {
        t: rH
      } = (0, Or.B)();
      return (0, vS.jsxs)("div", {
        className: Pr()("Baf2CoreCharge", {
          Done: LH
        }),
        children: [(0, vS.jsxs)("h4", {
          children: [rH(`${aE}coreChargeTitle`), (0, vS.jsx)("span", {
            children: rH(`${aE}coreChargeSpecTime`, {
              time: sE(BH.seconds)
            })
          })]
        }), (0, vS.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [BH.items.map((HH => {
            var BH;
            let {
              item: SH,
              amount: hH
            } = HH;
            return (0, vS.jsxs)("li", {
              className: Pr()({
                Done: LH
              }),
              children: [(0, vS.jsx)(JE, {
                item: SH
              }), (0, vS.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, vS.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, vS.jsx)(mr.b, {
                    text: null !== (BH = AH[SH]) && void 0 !== BH ? BH : SH
                  }), (0, vS.jsx)("span", {
                    children: rH(`${aE}coreChargeSpecItem`, {
                      need: String(hH)
                    })
                  })]
                })
              })]
            }, SH)
          })), BH.powerPerS > 0 && (0, vS.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, vS.jsx)(iE, {}), (0, vS.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, vS.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, vS.jsx)("span", {
                  children: rH(`${aE}coreChargePowerRow`, {
                    power: iH(BH.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const HX = "buildAFactory2Game:";

    function BX(HH) {
      let {
        def: BH,
        reached: LH,
        banked: AH,
        itemNames: rH
      } = HH;
      const {
        t: SH
      } = (0, Or.B)();
      return (0, vS.jsx)("ul", {
        className: "Baf2CoreCost",
        children: BH.cost.map((HH => {
          let {
            item: BH,
            amount: hH
          } = HH;
          const tH = LH ? 0 : AH(BH);
          return (0, vS.jsx)("li", {
            children: (0, vS.jsx)(eE, {
              item: BH,
              itemNames: rH,
              children: (0, vS.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: tH > 0 ? SH(`${HX}coreBankedFor`, {
                  amount: String(tH),
                  total: String(hH)
                }) : `\xd7${hH}`
              })
            })
          }, BH)
        }))
      })
    }

    function LX(HH, BH) {
      if (BH >= EH()) return HH(`${HX}coreMaxTier`);
      const LH = CH[BH + 1];
      return LH && !LH.startsWith("upgradeCore") ? HH(`${HX}coreGateQuest`, {
        quest: HH(`${HX}quest_${LH}`)
      }) : HH(`${HX}coreGateClosed`)
    }

    function AX() {
      const {
        t: HH
      } = (0, Or.B)(), BH = eh(), LH = (0, AH.useRef)(null), rH = (0, AH.useRef)(Date.now());
      return FC(!0, LH), (0, vS.jsx)("div", {
        ref: LH,
        className: "Baf2CoreGrow",
        children: (0, vS.jsx)(Wh.u, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - rH.current >= 600 && BH.send(vH)
          },
          children: HH(`${HX}coreGrow`)
        })
      })
    }

    function rX(HH) {
      let {
        message: BH,
        itemNames: LH,
        next: AH
      } = HH;
      const rH = eh(),
        {
          t: SH
        } = (0, Or.B)(),
        hH = BH.baf2CoreTier,
        tH = BH.baf2CoreReady,
        zH = BH.baf2CoreNeeds.filter((HH => {
          let [, BH, LH, AH] = HH;
          return AH > 0 && BH < LH
        })),
        CH = BH.baf2CoreNeeds.every((HH => {
          let [, BH, LH] = HH;
          return BH >= LH
        })),
        EH = BH.baf2CoreKeep;
      return (0, vS.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, vS.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [tH && (0, vS.jsx)(AX, {}), (0, vS.jsx)("h3", {
            children: SH(`${HX}coreBring`)
          }), (0, vS.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: BH.baf2CoreNeeds.map((HH => {
              let [BH, AH, hH, tH] = HH;
              return (0, vS.jsxs)("li", {
                className: Pr()({
                  Done: AH >= hH
                }),
                children: [(0, vS.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, vS.jsx)(kr.e, {
                    itemName: BH,
                    amount: 0
                  })
                }), (0, vS.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, vS.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, vS.jsx)(mr.b, {
                      text: LH[BH]
                    }), (0, vS.jsxs)("span", {
                      children: [AH, "/", hH]
                    })]
                  }), (0, vS.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, vS.jsx)("div", {
                      style: {
                        width: 100 * AH / hH + "%"
                      }
                    }), tH > 0 && (0, vS.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * tH / hH + "%"
                      }
                    })]
                  })]
                }), tH > 0 && AH < hH && (0, vS.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    rH.send(`${TH} ${BH}`)
                  },
                  children: SH(`${HX}coreDeposit`, {
                    amount: String(tH)
                  })
                })]
              }, BH)
            }))
          }), BH.baf2CoreCharge && (0, vS.jsx)(pE, {
            charge: BH.baf2CoreCharge,
            hint: BH.baf2CoreChargeHint,
            itemNames: LH
          }), !tH && zH.length > 1 && (0, vS.jsx)(Wh.u, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              rH.send(vH)
            },
            children: SH(`${HX}coreHandOver`)
          }), !tH && void 0 !== EH && (0, vS.jsx)("p", {
            className: "Baf2CoreHint",
            children: SH(`${HX}coreKeepRest`, {
              item: (0, pr.h)(SH, EH)
            })
          }), !tH && !CH && 0 === zH.length && void 0 === EH && (0, vS.jsx)("p", {
            className: "Baf2CoreHint",
            children: SH(`${HX}coreNothingHeld`)
          }), (0, vS.jsx)(dE, {
            message: BH,
            itemNames: LH
          })]
        }), (0, vS.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, vS.jsx)("h3", {
            children: SH(`${HX}coreRewards`)
          }), (0, vS.jsx)(RE, {
            def: AH,
            tier: hH + 1,
            itemNames: LH
          })]
        })]
      })
    }

    function SX(HH) {
      let {
        message: BH,
        itemNames: LH,
        shown: AH
      } = HH;
      const {
        t: rH
      } = (0, Or.B)(), SH = BH.baf2CoreTier, hH = MH(AH), tH = AH <= SH, zH = new Map(BH.baf2CoreBanked), CH = !xH(SH, VH(BH)) && AH === SH;
      return (0, vS.jsxs)("div", {
        className: Pr()("Baf2CoreBody", {
          Locked: !tH
        }),
        children: [(0, vS.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, vS.jsx)("h3", {
            children: rH(tH ? `${HX}coreItTook` : `${HX}coreItNeeds`)
          }), 0 === hH.cost.length && (0, vS.jsx)("p", {
            className: "Baf2CoreHint",
            children: rH(`${HX}coreTierStart`)
          }), hH.cost.length > 0 && (0, vS.jsx)(BX, {
            def: hH,
            reached: tH,
            banked: HH => {
              var BH;
              return function(HH, BH, LH, AH) {
                let rH = HH;
                for (let hH = BH + 2; hH <= LH; hH++) {
                  var SH;
                  const HH = MH(hH).cost.find((HH => HH.item === AH)),
                    BH = Math.min(rH, null !== (SH = null === HH || void 0 === HH ? void 0 : HH.amount) && void 0 !== SH ? SH : 0);
                  if (hH === LH) return BH;
                  rH -= BH
                }
                return 0
              }(null !== (BH = zH.get(HH)) && void 0 !== BH ? BH : 0, SH, AH, HH)
            },
            itemNames: LH
          }), hH.charge && (0, vS.jsx)(yE, {
            charge: hH.charge,
            reached: tH,
            itemNames: LH
          }), CH && (0, vS.jsxs)(vS.Fragment, {
            children: [(0, vS.jsx)("p", {
              className: "Baf2CoreHint",
              children: LX(rH, SH)
            }), (0, vS.jsx)(dE, {
              message: BH,
              itemNames: LH
            })]
          })]
        }), (0, vS.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, vS.jsx)("h3", {
            children: rH(tH ? `${HX}coreGave` : `${HX}coreLockedRewards`)
          }), (0, vS.jsx)(RE, {
            def: hH,
            tier: AH,
            itemNames: LH
          })]
        })]
      })
    }

    function hX(HH, BH) {
      const {
        key: LH,
        params: AH
      } = YH(BH - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return HH(`${HX}${LH}`, AH)
    }
    const tX = "buildAFactory2Game:",
      zX = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      CX = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function EX(HH) {
      let {
        view: BH,
        close: LH,
        askIslands: rH
      } = HH;
      const {
        t: SH
      } = (0, Or.B)(), [hH, tH] = (0, AH.useState)(!1);
      (0, AH.useEffect)((() => {
        if (!hH) return;
        const HH = window.setTimeout((() => {
          tH(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(HH)
        }
      }), [hH]);
      const {
        message: zH,
        itemNames: CH
      } = BH, EH = zH.baf2CoreTier, XH = MH(EH), GH = xH(EH, VH(zH)), [QH, WH] = zH.baf2CoreMachines, [vH, PH] = zH.baf2CoreBelts, TH = zH.baf2CoreStorage, UH = zH.baf2CoreReady, [OH, bH] = (0, AH.useState)(null), kH = (null === OH || void 0 === OH ? void 0 : OH.at) === EH && OH.ready === UH ? OH.tier : GH ? EH + 1 : EH;
      let mH = "coreTierLocked";
      kH <= EH ? mH = "coreTierReached" : kH === EH + 1 && (mH = "coreTierNext");
      const oH = SH(`${tX}${MH(kH).nameKey}`),
        IH = kH === EH + 1 ? GH : null,
        fH = YH(kH, {
          tier: mH,
          stage: zX[mH],
          atomic: CX[mH]
        }),
        lH = SH(`${tX}${fH.key}`, {
          ...fH.params,
          name: oH
        }),
        KH = YH(EH, uH),
        cH = SH(`${tX}${KH.key}`, {
          ...KH.params,
          name: SH(`${tX}${XH.nameKey}`)
        });
      return (0, vS.jsx)(Qh.b, {
        close: LH,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, vS.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, vS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vS.jsxs)("div", {
              children: [(0, vS.jsx)("h2", {
                id: "baf2CoreTitle",
                children: SH(`${tX}coreTitle`)
              }), void 0 !== zH.baf2CoreIslandName && (0, vS.jsx)("p", {
                className: "Baf2CoreIsland",
                children: zH.baf2CoreIslandName
              }), (0, vS.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, vS.jsx)("span", {
                  children: cH
                }), (0, vS.jsx)("span", {
                  className: Pr()({
                    Full: QH >= WH
                  }),
                  children: SH(`${tX}coreMachineCount`, {
                    amount: String(QH),
                    total: String(WH)
                  })
                }), (0, vS.jsx)("span", {
                  className: Pr()({
                    Full: vH >= PH
                  }),
                  children: SH(`${tX}coreBeltCount`, {
                    amount: String(vH),
                    total: String(PH)
                  })
                }), void 0 !== TH && (0, vS.jsx)("span", {
                  className: Pr()({
                    Full: TH[0] >= TH[1]
                  }),
                  children: SH(`${tX}coreStorageCount`, {
                    amount: String(TH[0]),
                    total: String(TH[1])
                  })
                })]
              })]
            }), (0, vS.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [zH.baf2CoreIslands && (0, vS.jsx)(Wh.i, {
                className: "Baf2CoreIslandsButton",
                disabled: hH,
                onClick: () => {
                  tH(!0), rH()
                },
                children: SH(`${tX}islandsOpenButton`)
              }), (0, vS.jsx)(Wh.q, {
                onClick: LH
              })]
            })]
          }), (0, vS.jsx)(KE, {
            tier: EH,
            shown: kH,
            XY: HH => {
              bH({
                tier: HH,
                at: EH,
                ready: UH
              })
            }
          }), (0, vS.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [lH, kH > EH + 1 && (0, vS.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: hX(SH, kH)
            })]
          }), 6 === kH && kH > EH && (0, vS.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: SH(`${tX}coreStagesNote`)
          }), 11 === kH && kH > EH && (0, vS.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: SH(`${tX}coreAtomicNote`)
          }), IH && (0, vS.jsx)(rX, {
            message: zH,
            itemNames: CH,
            next: IH
          }), !IH && (0, vS.jsx)(SX, {
            message: zH,
            itemNames: CH,
            shown: kH
          })]
        })
      })
    }
    const XX = {
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
    const GX = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: LS,
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

    function YX(HH) {
      return HH.baf2DropCometOreOnly ? "dropCometOre" : HH.baf2DropCometIsotope ? "seed" === HH.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function uX(HH) {
      let {
        message: BH,
        quests: LH,
        close: rH,
        leave: SH
      } = HH;
      const hH = eh(),
        {
          t: tH
        } = (0, Or.B)(),
        zH = (0, pC.e)(Kr, LH.get()),
        CH = function(HH) {
          var BH;
          if (!KH(HH.tutorial)) return null;
          const LH = HH.rows.find((HH => HH.current)),
            AH = LH ? XX[LH.key] : void 0;
          return null !== (BH = null !== AH && void 0 !== AH ? AH : HH.side ? XX[HH.side.row.key] : void 0) && void 0 !== BH ? BH : null
        }(zH),
        EH = null === zH.tier || SS(zH.tier),
        XH = EH ? GX : GX.filter((HH => {
          let {
            item: BH
          } = HH;
          return BH !== LS
        })),
        [GH, YH] = (0, AH.useState)(null),
        uH = null !== GH && void 0 !== GH ? GH : !BH.baf2DropFoundSalvage && EH,
        QH = BH.baf2DropRuinDistance,
        WH = BH.baf2DropComet,
        MH = BH.baf2DropOldWorks,
        xH = BH.baf2DropGrove,
        vH = function(HH) {
          return 2 + Number(void 0 !== HH.baf2DropComet) + Number(!!HH.baf2DropOwedComet || void 0 !== HH.baf2DropOwedWaitMinutes) + Number(void 0 !== HH.baf2DropDigDistance) + Number(void 0 !== HH.baf2DropOldWorks) + Number(void 0 !== HH.baf2DropGrove)
        }(BH),
        PH = HH => {
          hH.send(function(HH) {
            return `baf2drop ${HH}`
          }(HH)), SH()
        };
      let TH = tH("buildAFactory2Game:dropRuinNone");
      if (null !== QH) {
        let HH = BH.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        BH.baf2DropRuinOldWorks && (HH = "dropRuinOldWorks");
        const LH = void 0 === BH.baf2DropRuinCluster ? tH("buildAFactory2Game:dropRuinOpen") : tH("buildAFactory2Game:dropRuinCluster", {
          count: String(BH.baf2DropRuinCluster)
        });
        TH = `${tH(`buildAFactory2Game:${HH}`,{distance:String(QH)})} ${LH}`
      }
      let UH = tH("buildAFactory2Game:dropBelowDescription");
      void 0 !== BH.baf2DropBelowLook && (UH = tH("buildAFactory2Game:dropBelowLook", {
        look: tH(BH.baf2DropBelowLook)
      }));
      const VH = "buildAFactory2Game:wildsRegion_survivorGrove" === BH.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        OH = QS(tH, 60 * function(HH) {
          const [BH, LH] = (0, AH.useState)((() => Date.now())), [rH, SH] = (0, AH.useState)(BH);
          return (0, AH.useEffect)((() => {
            const HH = Date.now();
            LH(HH), SH(HH)
          }), [HH]), (0, AH.useEffect)((() => {
            const HH = window.setInterval((() => {
              SH(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(HH)
            }
          }), []), Math.max(1, HH.baf2DropRenewMinutes - Math.floor((rH - BH) / 6e4))
        }(BH)),
        bH = function(HH, BH, LH) {
          return "ruin" === HH && !LH || "owed" === HH && !BH.baf2DropOwedComet ? null : HH
        }(CH, BH, null !== QH),
        kH = function(HH) {
          for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
          return Pr()("Baf2DropTile", ...LH, {
            Wanted: bH === HH
          })
        };
      return (0, vS.jsx)(Qh.b, {
        close: rH,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, vS.jsxs)("section", {
          className: Pr()("Baf2Panel Baf2DropMap", {
            Many: vH >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, vS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vS.jsxs)("div", {
              children: [(0, vS.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: tH("buildAFactory2Game:dropMapTitle")
              }), (0, vS.jsx)("p", {
                children: tH("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, vS.jsx)(Wh.q, {
              onClick: rH
            })]
          }), (0, vS.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== WH && (0, vS.jsxs)(Wh.D, {
              className: kH("comet", "Baf2DropComet"),
              onClick: () => {
                PH("comet")
              },
              children: [(0, vS.jsx)("strong", {
                children: tH("buildAFactory2Game:dropComet")
              }), (0, vS.jsx)("span", {
                children: tH(`buildAFactory2Game:${YX(BH)}`, {
                  distance: String(WH)
                })
              })]
            }), BH.baf2DropOwedComet && (0, vS.jsxs)(Wh.D, {
              className: kH("owed", "Baf2DropComet"),
              onClick: () => {
                PH("owed")
              },
              children: [(0, vS.jsx)("strong", {
                children: tH("buildAFactory2Game:dropOwedComet")
              }), (0, vS.jsx)("span", {
                children: BH.baf2DropOwedIsotope ? tH("buildAFactory2Game:dropOwedIsotopeDescription") : tH("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== BH.baf2DropOwedWaitMinutes && (0, vS.jsxs)(Wh.D, {
              className: kH("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, vS.jsx)("strong", {
                children: tH("buildAFactory2Game:dropOwedComet")
              }), (0, vS.jsx)("span", {
                children: tH("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(BH.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, vS.jsxs)(Wh.i, {
              className: kH("below"),
              onClick: () => {
                PH("below")
              },
              children: [(0, vS.jsx)("strong", {
                children: tH("buildAFactory2Game:dropBelow")
              }), (0, vS.jsx)("span", {
                children: UH
              })]
            }), void 0 !== BH.baf2DropDigDistance && (0, vS.jsxs)(Wh.x, {
              className: kH("dig"),
              onClick: () => {
                PH("dig")
              },
              children: [(0, vS.jsx)("strong", {
                children: tH("buildAFactory2Game:dropDig")
              }), (0, vS.jsx)("span", {
                children: tH("buildAFactory2Game:dropDigDescription", {
                  distance: String(BH.baf2DropDigDistance),
                  y: uS(BH.baf2DropDigY)
                })
              })]
            }), void 0 !== xH && (0, vS.jsxs)(Wh.x, {
              className: kH("grove", "Baf2DropGrove"),
              onClick: () => {
                PH("grove")
              },
              children: [(0, vS.jsx)("strong", {
                children: tH("buildAFactory2Game:dropGrove")
              }), (0, vS.jsx)("span", {
                children: tH(`buildAFactory2Game:${VH}`, {
                  distance: String(xH)
                })
              })]
            }), (0, vS.jsxs)(Wh.u, {
              className: kH("ruin"),
              disabled: null === QH,
              onClick: () => {
                PH("ruin")
              },
              children: [(0, vS.jsx)("strong", {
                children: tH("buildAFactory2Game:dropRuin")
              }), (0, vS.jsx)("span", {
                children: TH
              })]
            }), void 0 !== MH && (0, vS.jsxs)(Wh.O, {
              className: kH("works"),
              onClick: () => {
                PH("works")
              },
              children: [(0, vS.jsx)("strong", {
                children: tH("buildAFactory2Game:dropOldWorks")
              }), (0, vS.jsx)("span", {
                children: tH("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(MH)
                })
              })]
            })]
          }), (0, vS.jsx)("p", {
            className: "Baf2DropRenew",
            children: tH("buildAFactory2Game:dropRenew", {
              time: OH
            })
          }), (0, vS.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: uH,
            onToggle: HH => {
              HH.currentTarget.open !== uH && YH(HH.currentTarget.open)
            },
            children: [(0, vS.jsx)("summary", {
              children: tH("buildAFactory2Game:dropSalvageWhat")
            }), (0, vS.jsx)("p", {
              children: tH("buildAFactory2Game:dropSalvageIntro")
            }), (0, vS.jsx)("ul", {
              children: XH.map((HH => {
                let {
                  item: BH,
                  nameKey: LH,
                  useKey: AH,
                  params: rH
                } = HH;
                return (0, vS.jsxs)("li", {
                  children: [(0, vS.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, vS.jsx)(kr.e, {
                      itemName: BH,
                      amount: 0
                    })
                  }), (0, vS.jsxs)("span", {
                    children: [(0, vS.jsx)("strong", {
                      children: tH(LH)
                    }), ": ", tH(AH, rH)]
                  })]
                }, BH)
              }))
            })]
          })]
        })
      })
    }
    const QX = "buildAFactory2Game:";

    function WX(HH, BH) {
      return HH.sendIslandEdit(`baf2coopleave ${BH.baf2IslandId}`)
    }

    function MX(HH) {
      let {
        card: BH,
        canRename: LH,
        done: rH,
        t: SH
      } = HH;
      const hH = eh(),
        [tH, zH] = (0, AH.useState)(BH.baf2IslandName),
        CH = WC(tH),
        EH = "" === CH || MC(CH),
        XH = () => {
          !EH && LH && (CH !== BH.baf2IslandName ? rH(hH.sendIslandEdit(`baf2islandrename ${BH.baf2IslandId} ${CH}`)) : rH(null))
        },
        GH = () => {
          rH(null)
        };
      return (0, vS.jsxs)("div", {
        className: "Baf2IslandForm",
        ...jC(GH),
        children: [(0, vS.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [SH(`${QX}islandsRenameLabel`), (0, vS.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: tH,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: nC,
            onChange: HH => {
              zH(HH.target.value)
            },
            ...RC(XH, GH)
          })]
        }), "" === CH && (0, vS.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: SH(`${QX}islandsRenameEmpty`)
        }), MC(CH) && (0, vS.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: SH(`${QX}islandsNameReserved`)
        }), (0, vS.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, vS.jsx)(Wh.x, {
            disabled: EH || !LH,
            onClick: XH,
            children: SH(`${QX}islandsRenameSave`)
          }), (0, vS.jsx)(Wh.i, {
            onClick: GH,
            children: SH(`${QX}islandsCancel`)
          })]
        })]
      })
    }

    function xX(HH) {
      let {
        card: BH,
        canDelete: LH,
        done: rH,
        t: SH
      } = HH;
      const hH = eh(),
        [tH, zH] = (0, AH.useState)(""),
        CH = function(HH, BH) {
          return WC(HH).toLowerCase() === WC(BH).toLowerCase()
        }(tH, BH.baf2IslandName),
        EH = () => {
          CH && LH && rH(hH.sendIslandEdit(`baf2islanddelete ${BH.baf2IslandId}`))
        },
        XH = () => {
          rH(null)
        },
        GH = oC("name"),
        [YH, uH = ""] = SH(`${QX}islandsDeleteConfirm`, {
          name: GH
        }).split(GH);
      return (0, vS.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...jC(XH),
        children: [(0, vS.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, vS.jsxs)("span", {
            children: [YH, (0, vS.jsx)("strong", {
              children: BH.baf2IslandName
            }), uH]
          }), (0, vS.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: tH,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: nC,
            onChange: HH => {
              zH(HH.target.value)
            },
            ...RC(EH, XH)
          })]
        }), eC(BH) && (0, vS.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: SH(`${QX}islandsDeleteLeftBack`)
        }), (0, vS.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, vS.jsx)(Wh.O, {
            disabled: !CH || !LH,
            onClick: EH,
            children: SH(`${QX}islandsDeleteForGood`)
          }), (0, vS.jsx)(Wh.i, {
            onClick: XH,
            children: SH(`${QX}islandsCancel`)
          })]
        })]
      })
    }

    function vX(HH) {
      let {
        members: BH,
        t: LH
      } = HH;
      const AH = BH.length;
      return (0, vS.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, vS.jsxs)("span", {
          children: [1 === AH ? LH(`${QX}islandsPlayersOne`) : LH(`${QX}islandsPlayers`, {
            count: String(AH)
          }), " "]
        }), BH.map(((HH, BH) => (0, vS.jsxs)("span", {
          className: Pr()("Baf2IslandMember", {
            Here: HH.baf2MemberHere
          }),
          title: HH.baf2MemberHere ? LH(`${QX}islandsPlayerHere`) : void 0,
          children: [HH.baf2MemberName, BH < AH - 1 ? ", " : ""]
        }, HH.baf2MemberKey)))]
      })
    }

    function PX(HH) {
      let {
        card: BH,
        answered: LH,
        nowMs: rH,
        t: SH
      } = HH;
      const hH = eh(),
        [tH, zH] = (0, AH.useState)(new Map),
        CH = eC(BH);
      if (!CH) return null;
      return (0, vS.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, vS.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: SH(`${QX}islandsLeftTitle`)
        }), (0, vS.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: CH.left.map((HH => {
            const AH = HH.baf2LeftKey,
              EH = gC(tH.get(AH), LH, rH),
              XH = function(HH) {
                return 1 === HH ? [`${GC}islandsLeftItemsOne`] : [`${GC}islandsLeftItems`, {
                  count: String(HH)
                }]
              }(HH.baf2LeftItems);
            return (0, vS.jsx)("li", {
              className: Pr()("Baf2IslandPerson", {
                Pending: EH
              }),
              children: (0, vS.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, vS.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: HH.baf2LeftName
                }), (0, vS.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: SH(XH[0], XH[1])
                }), CH.claim && (0, vS.jsx)(Wh.x, {
                  className: "Baf2IslandPersonButton",
                  disabled: EH,
                  onClick: () => {
                    (HH => {
                      const LH = hH.sendIslandEdit(`baf2coopclaim ${BH.baf2IslandId} ${HH}`);
                      zH((BH => new Map(BH).set(HH, {
                        atMs: Date.now(),
                        answer: LH
                      })))
                    })(AH)
                  },
                  children: SH(`${QX}islandsClaim`)
                })]
              })
            }, AH)
          }))
        }), CH.goThere && (0, vS.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: SH(`${QX}islandsClaimGoThere`)
        })]
      })
    }

    function TX(HH) {
      let {
        card: BH,
        view: LH,
        blocked: rH,
        maxIslands: SH,
        answered: hH,
        nowMs: tH,
        done: zH,
        openSocial: CH,
        t: EH
      } = HH;
      const XH = eh(),
        [GH, YH] = (0, AH.useState)(new Map),
        [uH, QH] = (0, AH.useState)(new Map),
        [WH, MH] = (0, AH.useState)(null),
        xH = (0, AH.useRef)(null);
      ZC(xH);
      const vH = BH.baf2IslandId,
        PH = BH.baf2IslandCoop,
        TH = null !== PH && void 0 !== PH && PH.baf2CoopMembers.some((HH => HH.baf2MemberKey === WH)) ? WH : null,
        UH = function(HH, BH) {
          const LH = HH.baf2IslandCoop;
          return LH && qC(LH) || null !== BH ? void 0 : HH.baf2IslandInvitable
        }(BH, rH),
        VH = function(HH, BH) {
          const LH = HH.baf2IslandCoop;
          return LH && qC(LH) ? {
            key: `${GC}islandsCoopFull`,
            params: {
              max: String(LH.baf2CoopMax)
            }
          } : void 0 !== HH.baf2IslandInvitable && null === BH || LH && !LH.baf2CoopManageHere ? null : "degraded" === BH || "stuck" === BH ? {
            key: `${GC}islandsInviteNotLoaded`
          } : null === BH || function(HH) {
            return "notHome" === HH || "wilds" === HH || "visiting" === HH
          }(BH) || TC(BH) ? {
            key: `${GC}islandsInviteGoThere`
          } : {
            key: `${GC}islandsInviteBusy`
          }
        }(BH, rH),
        OH = () => {
          var HH;
          MH(null), null === (HH = xH.current) || void 0 === HH || HH.focus()
        };
      return (0, vS.jsxs)("div", {
        ref: xH,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...jC(null === TH ? zH : OH),
        children: [PH && (0, vS.jsxs)(vS.Fragment, {
          children: [(0, vS.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: EH(`${QX}islandsPlayersTitle`, {
              count: String(PH.baf2CoopMembers.length),
              max: String(PH.baf2CoopMax)
            })
          }), (0, vS.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: PH.baf2CoopMembers.map(((HH, BH) => {
              const AH = HH.baf2MemberKey,
                rH = gC(GH.get(AH), hH, tH);
              return (0, vS.jsxs)("li", {
                className: Pr()("Baf2IslandPerson", {
                  Pending: rH
                }),
                children: [(0, vS.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, vS.jsx)("span", {
                    className: Pr()("Baf2IslandPersonName", {
                      Here: HH.baf2MemberHere
                    }),
                    children: HH.baf2MemberName
                  }), HH.baf2MemberHere && (0, vS.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: EH(`${QX}islandsPlayerHere`)
                  }), 0 === BH && (0, vS.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: EH(`${QX}islandsPlayerOwner`)
                  }), LH.remove && BH > 0 && !rH && TH !== AH && (0, vS.jsx)(Wh.S, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var HH;
                      MH(AH), null === (HH = xH.current) || void 0 === HH || HH.focus()
                    },
                    children: EH(`${QX}islandsRemove`)
                  })]
                }), TH === AH && (0, vS.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, vS.jsx)("p", {
                    children: IC(EH, `${QX}islandsRemoveConfirm`, {
                      player: HH.baf2MemberName
                    })
                  }), (0, vS.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, vS.jsx)(Wh.O, {
                      onClick: () => {
                        (HH => {
                          const BH = XH.sendIslandEdit(`baf2coopremove ${vH} ${HH.baf2MemberKey}`);
                          YH((LH => new Map(LH).set(HH.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: BH
                          }))), OH()
                        })(HH)
                      },
                      children: EH(`${QX}islandsRemoveYes`)
                    }), (0, vS.jsx)(Wh.i, {
                      onClick: OH,
                      children: EH(`${QX}islandsCancel`)
                    })]
                  })]
                })]
              }, AH)
            }))
          })]
        }), (void 0 !== UH || null !== VH) && (0, vS.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: EH(`${QX}islandsInviteTitle`)
        }), !PH && (void 0 !== UH || null !== VH) && (0, vS.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: EH(`${QX}islandsInviteShareNote`)
        }), 0 === (null === UH || void 0 === UH ? void 0 : UH.length) && (0, vS.jsx)(UX, {
          openSocial: CH,
          t: EH
        }), void 0 !== UH && UH.length > 0 && (0, vS.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: UH.map((HH => {
            const BH = !0 === HH.baf2InvitableSent || gC(uH.get(HH.baf2InvitableId), hH, tH);
            return (0, vS.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, vS.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, vS.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: HH.baf2InvitableName
                }), HH.baf2InvitableFull && !BH && (0, vS.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: EH(`${QX}islandsInviteTheirFull`, {
                    max: String(SH)
                  })
                }), (BH || !HH.baf2InvitableFull) && (0, vS.jsx)(Wh.x, {
                  className: "Baf2IslandPersonButton",
                  disabled: BH,
                  onClick: () => {
                    (HH => {
                      const BH = XH.sendIslandEdit(`baf2coopinvite ${vH} ${HH}`);
                      QH((LH => new Map(LH).set(HH, {
                        atMs: Date.now(),
                        answer: BH
                      })))
                    })(HH.baf2InvitableId)
                  },
                  children: EH(BH ? `${QX}islandsInvited` : `${QX}islandsInvite`)
                })]
              })
            }, HH.baf2InvitableId)
          }))
        }), VH && (0, vS.jsx)(sC, {
          note: VH,
          t: EH
        }), (0, vS.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, vS.jsx)(Wh.i, {
            onClick: zH,
            children: EH(`${QX}islandsDone`)
          })
        })]
      })
    }

    function UX(HH) {
      let {
        openSocial: BH,
        t: LH
      } = HH;
      return (0, vS.jsxs)(vS.Fragment, {
        children: [(0, vS.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: LH(BH ? `${QX}islandsInviteNobody` : `${QX}islandsInviteNobodyGuest`)
        }), BH && (0, vS.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, vS.jsx)(Wh.i, {
            onClick: BH,
            children: LH("socialBar:social")
          })
        })]
      })
    }

    function VX(HH) {
      let {
        className: BH,
        text: LH,
        ConfirmButton: rH,
        confirmLabel: SH,
        canConfirm: hH,
        send: tH,
        done: zH,
        t: CH
      } = HH;
      const EH = (0, AH.useRef)(null);
      ZC(EH);
      const XH = () => {
        zH(null)
      };
      return (0, vS.jsxs)("div", {
        ref: EH,
        tabIndex: -1,
        className: Pr()("Baf2IslandForm", BH),
        ...jC(XH),
        children: [(0, vS.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: LH
        }), (0, vS.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, vS.jsx)(rH, {
            disabled: !hH,
            onClick: () => {
              hH && zH(tH())
            },
            children: SH
          }), (0, vS.jsx)(Wh.i, {
            onClick: XH,
            children: CH(`${QX}islandsCancel`)
          })]
        })]
      })
    }

    function OX(HH) {
      return "hidden" !== HH
    }

    function bX(HH) {
      var BH, LH;
      let {
        card: rH,
        keepOwn: SH,
        blocked: hH,
        maxIslands: tH,
        serverNowMs: zH,
        nowMs: CH,
        actions: EH,
        full: XH,
        waits: GH,
        answered: YH,
        mode: uH,
        setMode: QH,
        pending: WH,
        onSent: MH,
        switchTo: xH,
        leave: vH,
        coopOn: PH,
        openSocial: TH,
        t: UH
      } = HH;
      const VH = eh(),
        OH = rH.baf2IslandActive,
        bH = OH ? null : function(HH, BH) {
          if (HH <= 0) return null;
          const LH = BH - HH;
          if (LH < ES) return [`${GC}islandsPlayedJustNow`];
          if (LH < YC) return [`${GC}islandsPlayedMinutes`, {
            minutes: String(Math.floor(LH / ES))
          }];
          if (LH < uC) return [`${GC}islandsPlayedHours`, {
            hours: String(Math.floor(LH / YC))
          }];
          const AH = Math.floor(LH / uC);
          return 1 === AH ? [`${GC}islandsPlayedDay`] : [`${GC}islandsPlayedDays`, {
            days: String(AH)
          }]
        }(rH.baf2IslandLastPlayedMs, zH),
        kH = void 0 === (mH = rH.baf2IslandItems) ? null : 0 === mH ? [`${GC}islandsItemsNone`] : 1 === mH ? [`${GC}islandsItemsOne`] : [`${GC}islandsItems`, {
          count: String(mH)
        }];
      var mH;
      const oH = function(HH) {
          return HH ? 1 === HH ? [`${GC}islandsWaitingOne`] : [`${GC}islandsWaiting`, {
            count: String(HH)
          }] : null
        }(rH.baf2IslandWaiting),
        IH = rH.baf2IslandUnreadable,
        fH = rH.baf2IslandCoop,
        lH = cC(rH, EH, SH, XH, PH, hH),
        KH = (0, AH.useRef)(null);
      FC(null !== uH, KH);
      const cH = () => {
          var HH;
          QH(null), null === (HH = KH.current) || void 0 === HH || HH.focus()
        },
        eH = (HH, BH) => {
          cH(), null !== HH && MH(HH, BH)
        },
        qH = (HH, BH) => UH(`${QX}${HH}`, {
          time: QS(UH, BH)
        });
      return (0, vS.jsxs)("li", {
        ref: KH,
        tabIndex: -1,
        className: Pr()("Baf2IslandCard", {
          Active: OH,
          Pending: WH,
          Shared: void 0 !== fH
        }),
        children: [(0, vS.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, vS.jsx)("strong", {
            className: "Baf2IslandName",
            children: rH.baf2IslandName
          }), OH && (0, vS.jsx)("span", {
            className: "Baf2IslandBadge",
            children: UH(`${QX}islandsOnThis`)
          }), fH && (0, vS.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: UH(`${QX}islandsShared`)
          })]
        }), "member" === (null === fH || void 0 === fH ? void 0 : fH.baf2CoopRole) && (0, vS.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: IC(UH, `${QX}islandsSharedBy`, {
            owner: fH.baf2CoopOwner
          })
        }), void 0 !== IH && (0, vS.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: UH("newer" === IH ? `${QX}islandsUnreadable` : `${QX}islandsDamaged`)
        }), "corrupt" === IH && XH && (0, vS.jsx)("p", {
          className: "Baf2IslandStats",
          children: UH(`${QX}islandsDamagedFull`)
        }), void 0 === IH && (0, vS.jsxs)(vS.Fragment, {
          children: [(0, vS.jsx)(aC, {
            tier: rH.baf2IslandTier,
            t: UH
          }), (0, vS.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, vS.jsx)("span", {
              children: 1 === rH.baf2IslandQuestsDone ? UH(`${QX}islandsQuestsDoneOne`) : UH(`${QX}islandsQuestsDone`, {
                count: String(rH.baf2IslandQuestsDone)
              })
            }), (0, vS.jsx)("span", {
              children: 1 === rH.baf2IslandMachines ? UH(`${QX}islandsMachinesOne`) : UH(`${QX}islandsMachines`, {
                count: String(rH.baf2IslandMachines)
              })
            }), kH && (0, vS.jsx)("span", {
              children: UH(kH[0], kH[1])
            }), oH && (0, vS.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: UH(oH[0], oH[1])
            }), bH && (0, vS.jsx)("span", {
              children: UH(bH[0], bH[1])
            })]
          })]
        }), fH && void 0 === fH.baf2CoopState && "people" !== uH && (0, vS.jsx)(vX, {
          members: fH.baf2CoopMembers,
          t: UH
        }), null === uH && (0, vS.jsx)(PX, {
          card: rH,
          answered: YH,
          nowMs: CH,
          t: UH
        }), lH.note && (0, vS.jsx)(sC, {
          note: lH.note,
          className: Pr()({
            Unreachable: void 0 !== (null === fH || void 0 === fH ? void 0 : fH.baf2CoopState)
          }),
          t: UH
        }), "rename" === uH && (0, vS.jsx)(MX, {
          card: rH,
          canRename: "enabled" === lH.rename,
          done: eH,
          t: UH
        }), "delete" === uH && (0, vS.jsx)(xX, {
          card: rH,
          canDelete: "enabled" === lH.delete,
          done: HH => {
            eH(HH, fH ? "delete" : void 0)
          },
          t: UH
        }), "people" === uH && (0, vS.jsx)(TX, {
          card: rH,
          view: lH,
          blocked: hH,
          maxIslands: tH,
          answered: YH,
          nowMs: CH,
          done: cH,
          openSocial: TH,
          t: UH
        }), "leave" === uH && (0, vS.jsx)(VX, {
          className: "Leave",
          text: IC(UH, `${QX}islandsLeaveConfirm`, {
            island: rH.baf2IslandName,
            owner: null !== (BH = null === (LH = rH.baf2IslandCoop) || void 0 === LH ? void 0 : LH.baf2CoopOwner) && void 0 !== BH ? BH : ""
          }),
          ConfirmButton: Wh.O,
          confirmLabel: UH(`${QX}islandsLeaveYes`),
          canConfirm: "enabled" === lH.leave,
          send: () => WX(VH, rH),
          done: HH => {
            eH(HH, "leave"), null !== HH && OH && vH()
          },
          t: UH
        }), "unshare" === uH && (0, vS.jsx)(VX, {
          className: "Unshare",
          text: IC(UH, `${QX}islandsStopSharingConfirm`, {
            island: rH.baf2IslandName
          }),
          ConfirmButton: Wh.x,
          confirmLabel: UH(`${QX}islandsStopSharing`),
          canConfirm: "enabled" === lH.unshare,
          send: () => VH.sendIslandEdit(`baf2coopunshare ${rH.baf2IslandId}`),
          done: HH => {
            eH(HH), null !== HH && vH()
          },
          t: UH
        }), null === uH && !WH && (0, vS.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": rH.baf2IslandName,
          children: [OX(lH.switch) && (0, vS.jsx)(Wh.x, {
            disabled: "enabled" !== lH.switch,
            onClick: xH,
            children: "tryAgain" === lH.switchLabel ? UH(`${QX}islandsTryAgain`) : GH.switch > 0 ? qH("islandsSwitchIn", GH.switch) : UH(`${QX}islandsSwitch`)
          }), OX(lH.rename) && (0, vS.jsx)(Wh.i, {
            disabled: "enabled" !== lH.rename,
            onClick: () => {
              QH("rename")
            },
            children: UH(`${QX}islandsRename`)
          }), OX(lH.people) && (0, vS.jsx)(Wh.i, {
            disabled: "enabled" !== lH.people,
            onClick: () => {
              QH("people")
            },
            children: UH("players" === lH.peopleLabel ? `${QX}islandsPlayersButton` : `${QX}islandsInviteButton`)
          }), OX(lH.unshare) && (0, vS.jsx)(Wh.i, {
            disabled: "enabled" !== lH.unshare,
            onClick: () => {
              QH("unshare")
            },
            children: UH(`${QX}islandsStopSharing`)
          }), OX(lH.dismiss) && (0, vS.jsx)(Wh.i, {
            disabled: "enabled" !== lH.dismiss,
            onClick: () => {
              MH(WX(VH, rH), "dismiss"), OH && vH()
            },
            children: UH(`${QX}islandsDismiss`)
          }), OX(lH.leave) && (0, vS.jsx)(Wh.S, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== lH.leave,
            onClick: () => {
              QH("leave")
            },
            children: OH && GH.switch > 0 ? qH("islandsLeaveIn", GH.switch) : UH(`${QX}islandsLeave`)
          }), OX(lH.delete) && (0, vS.jsx)(Wh.S, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== lH.delete,
            onClick: () => {
              QH("delete")
            },
            children: GH.change > 0 && lH.deleteWaits ? qH("islandsDeleteIn", GH.change) : UH(`${QX}islandsDelete`)
          })]
        })]
      })
    }
    const kX = "buildAFactory2Game:";

    function mX(HH) {
      let {
        invite: BH,
        actions: LH,
        full: rH,
        maxIslands: SH,
        waitSeconds: hH,
        focus: tH,
        focused: zH,
        join: CH,
        decline: EH,
        t: XH
      } = HH;
      const [GH, YH] = (0, AH.useState)(!1), uH = (0, AH.useRef)(null);
      FC(GH, uH), (0, AH.useEffect)((() => {
        var HH;
        tH && (YH(!0), null === (HH = uH.current) || void 0 === HH || HH.focus(), zH())
      }), [tH, zH]);
      const QH = function(HH, BH, LH, AH, rH) {
          return LH ? {
            join: !1,
            note: {
              key: `${GC}islandsJoinTooMany`,
              params: {
                max: String(AH)
              }
            }
          } : HH.baf2InvitePlayers >= rH ? {
            join: !1,
            note: {
              key: `${GC}islandsJoinFull`
            }
          } : {
            join: BH.switch,
            note: null
          }
        }(BH, LH, rH, SH, 10),
        WH = BH.baf2InviteIsland,
        MH = BH.baf2InvitePlayers,
        xH = () => {
          var HH;
          YH(!1), null === (HH = uH.current) || void 0 === HH || HH.focus()
        },
        vH = hH > 0 && null === QH.note ? XH(`${kX}islandsJoinIn`, {
          time: QS(XH, hH)
        }) : XH(`${kX}islandsJoin`);
      return (0, vS.jsxs)("li", {
        ref: uH,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...GH ? jC(xH) : {},
        children: [(0, vS.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, vS.jsx)("strong", {
            className: "Baf2IslandName",
            children: WH
          })
        }), (0, vS.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: IC(XH, `${kX}islandsInvitedBy`, {
            owner: BH.baf2InviteOwner
          })
        }), (0, vS.jsx)(aC, {
          tier: BH.baf2InviteTier,
          t: XH
        }), (0, vS.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, vS.jsx)("span", {
            children: 1 === MH ? XH(`${kX}islandsPlayersCountOne`) : XH(`${kX}islandsPlayersCount`, {
              count: String(MH)
            })
          })
        }), QH.note && (0, vS.jsx)(sC, {
          note: QH.note,
          t: XH
        }), GH && (0, vS.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: IC(XH, `${kX}islandsJoinConfirm`, {
            island: WH
          })
        }), !GH && (0, vS.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": WH,
          children: [(0, vS.jsx)(Wh.x, {
            disabled: !QH.join,
            onClick: () => {
              var HH;
              YH(!0), null === (HH = uH.current) || void 0 === HH || HH.focus()
            },
            children: vH
          }), (0, vS.jsx)(Wh.i, {
            onClick: EH,
            children: XH(`${kX}islandsDecline`)
          })]
        }), GH && (0, vS.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, vS.jsx)(Wh.x, {
            disabled: !QH.join,
            onClick: CH,
            children: XH(`${kX}islandsJoinYes`)
          }), (0, vS.jsx)(Wh.i, {
            onClick: xH,
            children: XH(`${kX}islandsCancel`)
          })]
        })]
      })
    }

    function oX(HH) {
      let {
        invites: BH,
        actions: LH,
        full: AH,
        maxIslands: rH,
        waitSeconds: SH,
        focus: hH,
        focused: tH,
        leave: zH,
        declined: CH,
        t: EH
      } = HH;
      const XH = eh();
      return (0, vS.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, vS.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: EH(`${kX}islandsInvitesTitle`)
        }), (0, vS.jsx)("ul", {
          className: "Baf2IslandCards",
          children: BH.map((HH => {
            const BH = HH.baf2InviteId;
            return (0, vS.jsx)(mX, {
              invite: HH,
              actions: LH,
              full: AH,
              maxIslands: rH,
              waitSeconds: SH,
              focus: hH === BH,
              focused: tH,
              join: () => {
                XH.send(`baf2coopaccept ${BH}`), zH()
              },
              decline: () => {
                XH.send(`baf2coopdecline ${BH}`), CH(BH)
              },
              t: EH
            }, BH)
          }))
        })]
      })
    }
    const IX = "buildAFactory2Game:";

    function fX(HH) {
      let {
        cards: BH,
        activeName: LH,
        canStart: rH,
        waitSeconds: SH,
        leave: hH,
        t: tH
      } = HH;
      const zH = eh(),
        [CH, EH] = (0, AH.useState)(!1),
        [XH, GH] = (0, AH.useState)(""),
        YH = (0, AH.useRef)(null);
      FC(CH, YH), (0, AH.useEffect)((() => {
        var HH;
        CH && (null === (HH = YH.current) || void 0 === HH || HH.focus())
      }), [CH]);
      const uH = xC(BH),
        QH = WC(XH),
        WH = MC(QH),
        MH = () => {
          rH && !WH && (zH.send("" === QH || QH === uH ? sH : `${sH} ${QH}`), hH())
        },
        xH = () => {
          var HH;
          EH(!1), null === (HH = YH.current) || void 0 === HH || HH.focus()
        };
      return (0, vS.jsxs)("li", {
        ref: YH,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...CH ? jC(xH) : {},
        children: [(0, vS.jsx)("strong", {
          className: "Baf2IslandName",
          children: tH(`${IX}islandsNewTitle`)
        }), !CH && (0, vS.jsx)("p", {
          className: "Baf2IslandStats",
          children: tH(`${IX}islandsNewNote`)
        }), CH && (0, vS.jsxs)(vS.Fragment, {
          children: [(0, vS.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: IC(tH, `${IX}islandsNewConfirm`, {
              name: LH
            })
          }), (0, vS.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [tH(`${IX}islandsNewNameLabel`), (0, vS.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: XH,
              placeholder: uH,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: nC,
              onChange: HH => {
                GH(HH.target.value)
              },
              ...RC(MH, xH)
            })]
          }), WH && (0, vS.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: tH(`${IX}islandsNameReserved`)
          })]
        }), (0, vS.jsxs)("div", {
          className: Pr()("Baf2IslandButtons", {
            Stacked: CH
          }),
          children: [(0, vS.jsx)(Wh.x, {
            disabled: !rH || CH && WH,
            onClick: () => {
              if (!CH) return GH(uH), void EH(!0);
              MH()
            },
            children: SH > 0 ? tH(`${IX}islandsNewIn`, {
              time: QS(tH, SH)
            }) : tH(CH ? `${IX}islandsNewConfirmButton` : `${IX}islandsNew`)
          }), CH && (0, vS.jsx)(Wh.i, {
            onClick: xH,
            children: tH(`${IX}islandsCancel`)
          })]
        })]
      })
    }

    function lX(HH) {
      var BH, LH;
      let {
        message: rH,
        arrivedAtMs: SH,
        close: hH,
        leave: tH,
        openSocial: zH
      } = HH;
      const CH = eh(),
        {
          t: EH
        } = (0, Or.B)(),
        XH = dC(1e3),
        [GH, YH] = (0, AH.useState)(null),
        [uH, QH] = (0, AH.useState)(new Map),
        [WH, MH] = (0, AH.useState)(new Set),
        xH = rH.baf2IslandCards,
        vH = function(HH, BH, LH, AH) {
          return (null !== HH && void 0 !== HH ? HH : []).filter((HH => BH + HH.baf2InviteLeftMs > LH && !AH.has(HH.baf2InviteId)))
        }(rH.baf2IslandsInvites, SH, XH, WH),
        PH = vH.map((HH => HH.baf2InviteId)).join(" "),
        TH = (0, AH.useRef)(null),
        UH = DC(TH);
      wC(), (0, AH.useEffect)((() => {
        var HH, BH;
        null !== (HH = TH.current) && void 0 !== HH && HH.contains(document.activeElement) || (null === (BH = TH.current) || void 0 === BH || BH.focus())
      }), [rH, PH]), (0, AH.useEffect)((() => {
        QH((HH => function(HH, BH, LH, AH) {
          const rH = new Map;
          for (const SH of BH) {
            const BH = HH.get(SH.baf2IslandId);
            BH && (void 0 !== BH.untilGone || AH < BH.answer) && bC(BH, SH, LH) && rH.set(SH.baf2IslandId, BH)
          }
          return rH.size === HH.size ? HH : rH
        }(HH, rH.baf2IslandCards, Date.now(), rH.baf2IslandsAnswered)))
      }), [rH]);
      const VH = QC(SH, rH.baf2IslandsWaitMs, XH),
        OH = rH.baf2IslandsBlocked,
        bH = UC(OH, VH),
        kH = function(HH, BH) {
          const LH = UC(HH, 0);
          return {
            switch: LH.switch ? BH : 0,
            change: LH.change ? BH : 0
          }
        }(OH, VH),
        mH = xH.length >= rH.baf2IslandsMax,
        oH = xH.length > 0,
        IH = function(HH, BH, LH) {
          return HH + Math.max(0, LH - BH)
        }(rH.baf2IslandsNowMs, SH, XH),
        fH = null !== (BH = null === (LH = xH.find((HH => HH.baf2IslandActive))) || void 0 === LH ? void 0 : LH.baf2IslandName) && void 0 !== BH ? BH : "",
        lH = function(HH) {
          const BH = HH.filter(KC).length;
          return BH <= 1 && BH < HH.length
        }(xH),
        KH = !0 === rH.baf2IslandsCoop,
        cH = function(HH, BH) {
          const LH = HH.find((HH => HH.baf2IslandActive)),
            AH = null === LH || void 0 === LH ? void 0 : LH.baf2IslandCoop;
          return LH && "member" === (null === AH || void 0 === AH ? void 0 : AH.baf2CoopRole) ? {
            key: `${GC}islandsKeepOwnMember`,
            names: {
              owner: AH.baf2CoopOwner,
              island: LH.baf2IslandName
            }
          } : {
            key: BH ? `${GC}islandsKeepOwn` : `${GC}islandsKeepOwnSolo`
          }
        }(xH, KH),
        [eH, qH] = (0, AH.useState)(null);
      (0, AH.useEffect)((() => {
        void 0 !== rH.baf2IslandsFocusInvite && qH(rH.baf2IslandsFocusInvite)
      }), [rH]);
      const gH = (0, AH.useCallback)((() => {
          qH(null)
        }), []),
        NH = GH ? xH.find((HH => HH.baf2IslandId === GH.id)) : void 0,
        RH = GH && NH && "hidden" !== cC(NH, bH, lH, mH, KH, OH)[GH.mode] ? GH : null;
      return (0, vS.jsx)(Qh.b, {
        close: hH,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, vS.jsxs)("section", {
          ref: TH,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: UH ? {
            marginTop: `${UH.marginTop}px`,
            maxHeight: `${UH.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, vS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vS.jsxs)("div", {
              children: [(0, vS.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: EH(`${IX}islandsTitle`)
              }), oH && (0, vS.jsx)("p", {
                children: EH(`${IX}islandsSubtitle`, {
                  count: String(xH.length),
                  max: String(rH.baf2IslandsMax)
                })
              })]
            }), (0, vS.jsx)(Wh.q, {
              ariaLabel: EH(`${IX}islandsClose`),
              onClick: hH
            })]
          }), (0, vS.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== OH && (0, vS.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: IC(EH, vC(OH, PC(xH)), {
                island: fH
              })
            }), oH && vH.length > 0 && (0, vS.jsx)(oX, {
              invites: vH,
              actions: bH,
              full: mH,
              maxIslands: rH.baf2IslandsMax,
              waitSeconds: kH.switch,
              focus: eH,
              focused: gH,
              leave: tH,
              declined: HH => {
                MH((BH => new Set(BH).add(HH)))
              },
              t: EH
            }), oH && (0, vS.jsxs)(vS.Fragment, {
              children: [mH && (0, vS.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: EH(`${IX}islandsFull`, {
                  max: String(rH.baf2IslandsMax)
                })
              }), (0, vS.jsx)("p", {
                className: "Baf2IslandsNote",
                children: IC(EH, cH.key, cH.names)
              }), (0, vS.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [xH.map((HH => {
                  const BH = HH.baf2IslandId;
                  return (0, vS.jsx)(bX, {
                    card: HH,
                    keepOwn: lH,
                    coopOn: KH,
                    openSocial: zH,
                    blocked: OH,
                    maxIslands: rH.baf2IslandsMax,
                    serverNowMs: IH,
                    nowMs: XH,
                    actions: bH,
                    full: mH,
                    waits: kH,
                    answered: rH.baf2IslandsAnswered,
                    mode: (null === RH || void 0 === RH ? void 0 : RH.id) === BH ? RH.mode : null,
                    setMode: HH => {
                      YH(null === HH ? null : {
                        id: BH,
                        mode: HH
                      })
                    },
                    pending: bC(uH.get(BH), HH, XH),
                    onSent: (LH, AH) => {
                      QH((rH => {
                        const SH = {
                          atMs: Date.now(),
                          from: HH.baf2IslandName,
                          answer: LH
                        };
                        return new Map(rH).set(BH, AH ? {
                          ...SH,
                          untilGone: AH
                        } : SH)
                      }))
                    },
                    leave: tH,
                    switchTo: () => {
                      CH.send(`baf2islandswitch ${BH}`), tH()
                    },
                    t: EH
                  }, BH)
                })), !mH && (0, vS.jsx)(fX, {
                  cards: xH,
                  activeName: fH,
                  canStart: bH.change,
                  waitSeconds: kH.change,
                  leave: tH,
                  t: EH
                })]
              })]
            })]
          })]
        })
      })
    }
    var KX = LH(5506);
    const cX = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        qr: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      eX = Object.keys(cX),
      qX = new Set([...Object.keys(sB), ...[...cB.Press.recipes, ...cB["Wire Mill"].recipes].map((HH => HH.output))]),
      gX = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      NX = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      RX = / Bar$|Alloy$/,
      jX = /Porkchop|Beef|Mutton|Venison|Steak/,
      nX = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const FX = (0, AH.memo)((function(HH) {
      let {
        item: BH,
        name: LH,
        amount: AH,
        selected: rH,
        small: SH,
        onPick: hH
      } = HH;
      return (0, vS.jsxs)("button", {
        type: "button",
        className: Pr()("Baf2TermTile", {
          On: rH,
          Small: SH
        }),
        "aria-label": `${LH}: ${AH}`,
        "aria-pressed": rH,
        onClick: () => {
          hH(BH)
        },
        children: [(0, vS.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, vS.jsx)(kr.e, {
            itemName: BH,
            amount: 0
          })
        }), (0, vS.jsx)("span", {
          className: "Baf2TermCount",
          children: YS(AH, 1e4)
        }), !SH && (0, vS.jsx)("span", {
          className: "Baf2TermName",
          children: LH
        })]
      })
    }));

    function DX(HH) {
      let {
        store: BH,
        close: LH,
        send: rH
      } = HH;
      const {
        t: SH
      } = (0, Or.B)(), {
        isTouchScreen: hH
      } = (0, Mr.m)(["isTouchScreen"]);
      ! function(HH) {
        const [BH, LH] = (0, AH.useState)(HH.version);
        (0, AH.useEffect)((() => (LH(HH.version), HH.subscribe((() => {
          LH(HH.version)
        })))), [HH])
      }(BH);
      const [tH, zH] = (0, AH.useState)("all"), [CH, EH] = (0, AH.useState)(!1), [XH, GH] = (0, AH.useState)(""), [YH, uH] = (0, AH.useState)(""), [QH, WH] = (0, AH.useState)(null), [MH, xH] = (0, AH.useState)(!1), [vH, PH, TH] = function() {
        const HH = (0, AH.useRef)(null),
          [BH, LH] = (0, AH.useState)(!1),
          rH = () => {
            const BH = HH.current;
            LH(null !== BH && BH.scrollLeft + BH.clientWidth < BH.scrollWidth - 1)
          };
        return (0, AH.useEffect)(rH), (0, AH.useEffect)((() => {
          const BH = HH.current;
          if (!BH) return;
          const LH = new ResizeObserver(rH);
          return LH.observe(BH), () => {
            LH.disconnect()
          }
        }), []), [HH, BH, rH]
      }(), UH = (0, AH.useMemo)((() => new Map), [SH]), VH = HH => {
        let BH = UH.get(HH);
        return void 0 === BH && (BH = function(HH, BH) {
          const LH = /^(.+) \((.+)\)$/.exec(HH);
          return LH ? BH(LH[2], LH[1]) : HH
        }((0, pr.h)(SH, HH), ((HH, BH) => SH("buildAFactory2Game:terminalTileKind", {
          kind: HH,
          base: BH
        }))), UH.set(HH, BH)), BH
      }, OH = BH.isReadOnly(), bH = MH && !OH, kH = BH.recent(), mH = BH.items(), oH = YH.trim().toLowerCase(), IH = bH ? BH.heldItems(QH) : ("recent" === tH ? kH : mH).filter((HH => {
        const BH = VH(HH);
        return ("all" === tH || "recent" === tH || function(HH) {
          return hS(HH) ? "farm" : gX.test(HH) ? "nuclear" : RX.test(HH) ? "bars" : jX.test(HH) ? "farm" : NX.test(HH) ? "qr" : qX.has(HH) ? "parts" : nX.test(HH) ? "farm" : "other"
        }(HH) === tH) && ("" === oH || BH.toLowerCase().includes(oH)) && ("" === XH || BH.toUpperCase().startsWith(XH))
      })), fH = new Set(mH.map((HH => VH(HH).charAt(0).toUpperCase()))), lH = HH => bH ? BH.heldAmount(HH) : BH.amount(HH), KH = !bH && "recent" !== tH && kH.length > 0, cH = function(HH, BH) {
        return null !== HH && BH.includes(HH) ? HH : null
      }(QH, KH ? [...IH, ...kH] : IH), eH = null === cH ? 0 : BH.amount(cH), qH = null === cH ? 0 : lH(cH), gH = (0, AH.useCallback)((HH => {
        WH((BH => BH === HH ? null : HH))
      }), []), NH = HH => qH > 0 || bH && null === cH && "fill" === HH && IH.length > 0, RH = bH ? [
        ["one", SH("buildAFactory2Game:terminalStoreOne")],
        ["stack", SH("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", SH(null === cH ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", SH("buildAFactory2Game:terminalTakeOne")],
        ["stack", SH("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", SH("buildAFactory2Game:terminalFill")]
      ], jH = bH ? SH("buildAFactory2Game:terminalStoreEmpty") : "" !== XH ? SH("buildAFactory2Game:terminalEmptyLetter", {
        letter: XH
      }) : "" !== oH ? SH("buildAFactory2Game:terminalEmptySearch", {
        query: YH
      }) : SH("buildAFactory2Game:terminalEmpty");
      return (0, vS.jsx)(Qh.b, {
        close: LH,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, vS.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, vS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vS.jsxs)("div", {
              children: [(0, vS.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: SH(BH.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, vS.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, vS.jsx)("span", {
                  className: Pr()({
                    Off: bH
                  }),
                  children: SH("buildAFactory2Game:terminalSubtitle", {
                    count: String(BH.siloCount())
                  })
                }), !OH && (0, vS.jsx)("span", {
                  className: Pr()({
                    Off: !bH
                  }),
                  children: SH("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !OH && (0, vS.jsx)(KX.b, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: SH("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: SH("buildAFactory2Game:terminalModeStore")
              }],
              value: bH ? "store" : "take",
              onChange: HH => {
                xH("store" === HH), WH(null)
              },
              ariaLabel: SH("buildAFactory2Game:terminalModes")
            }), (0, vS.jsx)(Wh.q, {
              onClick: LH
            })]
          }), (0, vS.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, vS.jsxs)("div", {
              className: Pr()("Baf2TermTools", {
                Hidden: bH
              }),
              children: [(0, vS.jsx)("div", {
                ref: vH,
                className: Pr()("Baf2TermChips", {
                  MoreRight: PH
                }),
                onScroll: TH,
                children: CH ? (0, vS.jsxs)(vS.Fragment, {
                  children: [(0, vS.jsx)("button", {
                    type: "button",
                    "aria-label": SH("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      EH(!1), GH("")
                    },
                    children: "\u2190"
                  }), [...fH].sort().map((HH => (0, vS.jsx)("button", {
                    type: "button",
                    className: Pr()({
                      On: XH === HH
                    }),
                    onClick: () => {
                      GH(XH === HH ? "" : HH)
                    },
                    children: HH
                  }, HH)))]
                }) : (0, vS.jsxs)(vS.Fragment, {
                  children: [(0, vS.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      EH(!0)
                    },
                    children: SH("buildAFactory2Game:terminalLetters")
                  }), eX.map((HH => (0, vS.jsx)("button", {
                    type: "button",
                    className: Pr()({
                      On: tH === HH
                    }),
                    onClick: () => {
                      zH(HH)
                    },
                    children: SH(cX[HH])
                  }, HH)))]
                })
              }), !hH && (0, vS.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: YH,
                placeholder: SH("buildAFactory2Game:terminalSearch"),
                "aria-label": SH("buildAFactory2Game:terminalSearch"),
                onChange: HH => {
                  uH(HH.target.value)
                },
                onKeyDown: HH => {
                  HH.stopPropagation()
                }
              }), (0, vS.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": SH("buildAFactory2Game:terminalResort"),
                title: SH("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  BH.resort()
                },
                children: "\u21c5"
              })]
            }), KH && (0, vS.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, vS.jsx)("span", {
                children: SH(cX.recent)
              }), kH.map((HH => (0, vS.jsx)(FX, {
                item: HH,
                name: VH(HH),
                amount: BH.amount(HH),
                selected: cH === HH,
                small: !0,
                onPick: gH
              }, HH)))]
            }), (0, vS.jsx)("div", {
              className: "Baf2TermTiles",
              children: IH.length > 0 ? IH.map((HH => (0, vS.jsx)(FX, {
                item: HH,
                name: VH(HH),
                amount: lH(HH),
                selected: cH === HH,
                onPick: gH
              }, HH))) : (0, vS.jsx)("p", {
                className: "Baf2TermEmpty",
                children: jH
              })
            }), (0, vS.jsxs)("div", {
              className: Pr()("Baf2TermActions", {
                Hidden: bH && 0 === IH.length
              }),
              children: [(0, vS.jsx)("span", {
                className: "Baf2TermPicked",
                children: OH ? (0, vS.jsxs)(vS.Fragment, {
                  children: [null !== cH && eH > 0 ? VH(cH) : SH("buildAFactory2Game:terminalVisiting"), (0, vS.jsx)("small", {
                    children: SH("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== cH ? (0, vS.jsxs)(vS.Fragment, {
                  children: [VH(cH), (0, vS.jsx)("small", {
                    children: SH("buildAFactory2Game:terminalStored", {
                      amount: eH.toLocaleString()
                    })
                  })]
                }) : SH(bH ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !OH && RH.map((HH => {
                let [LH, AH] = HH;
                const SH = "fill" === LH ? Wh.u : Wh.i;
                return (0, vS.jsx)(SH, {
                  className: "Baf2TermTake",
                  disabled: !NH(LH),
                  onClick: () => {
                    (HH => {
                      NH(HH) && rH(null === cH ? BH.putAll() : bH ? BH.put(HH, cH) : BH.take(HH, cH))
                    })(LH)
                  },
                  children: AH
                }, LH)
              }))]
            })]
          })]
        })
      })
    }

    function wX(HH) {
      let {
        kind: BH,
        icon: LH,
        label: AH,
        number: rH,
        preview: SH,
        note: hH,
        tone: tH = null,
        share: zH,
        onExplain: CH
      } = HH;
      return (0, vS.jsxs)("button", {
        type: "button",
        className: Pr()("NxLane", BH, {
          Warn: "warn" === tH,
          Danger: "danger" === tH
        }),
        onClick: CH,
        children: [(0, vS.jsxs)("span", {
          className: "NxLaneHead",
          children: [LH, (0, vS.jsx)("span", {
            className: "NxLaneLabel",
            children: AH
          })]
        }), (0, vS.jsxs)("span", {
          className: "NxLaneNum",
          children: [rH, SH && (0, vS.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", SH]
          })]
        }), (0, vS.jsx)("span", {
          className: "NxLaneNote",
          children: hH
        }), void 0 !== zH && (0, vS.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, zH)) + "%"
          }
        })]
      })
    }

    function ZX(HH) {
      let {
        kind: BH,
        step: LH,
        short: AH,
        planned: rH
      } = HH;
      return (0, vS.jsx)("i", {
        className: Pr()("NxPipe", BH, `Step${LH}`, {
          Short: AH,
          Planned: rH
        }),
        "aria-hidden": "true"
      })
    }

    function dX(HH) {
      let {
        max: BH,
        bands: LH,
        ticks: AH,
        now: rH,
        settle: SH,
        settleTone: hH,
        onExplain: tH
      } = HH;
      const zH = HH => Math.max(0, Math.min(BH, HH)) / BH * 100 + "%";
      let CH = 0;
      return (0, vS.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: tH,
        children: [(0, vS.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [LH.map((HH => {
            const BH = {
              bottom: zH(CH),
              height: `calc(${zH(HH.upTo)} - ${zH(CH)})`
            };
            return CH = HH.upTo, (0, vS.jsx)("i", {
              className: Pr()("NxGaugeBand", HH.kind),
              style: BH
            }, HH.kind)
          })), null !== rH && (0, vS.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: zH(rH)
            }
          }), void 0 !== SH && null !== SH && (0, vS.jsx)("i", {
            className: Pr()("NxGaugeSettle", {
              Bad: "bad" === hH
            }),
            style: {
              bottom: zH(SH)
            }
          })]
        }), (0, vS.jsx)("span", {
          className: "NxGaugeTicks",
          children: AH.map((HH => (0, vS.jsx)("small", {
            style: {
              bottom: zH(HH)
            },
            children: HH
          }, HH)))
        })]
      })
    }

    function aX(HH) {
      const [BH, LH] = (0, AH.useState)(null), [rH, SH] = (0, AH.useState)((() => {
        try {
          return null === window.localStorage.getItem(HH)
        } catch {
          return !1
        }
      })), hH = (0, AH.useRef)(null);
      (0, AH.useEffect)((() => () => {
        null !== hH.current && clearTimeout(hH.current)
      }), []);
      const tH = (0, AH.useCallback)((BH => {
          LH(BH), SH(!1);
          try {
            window.localStorage.setItem(HH, "1")
          } catch {}
          null !== hH.current && clearTimeout(hH.current), hH.current = setTimeout((() => {
            hH.current = null, LH(null)
          }), 5e3)
        }), [HH]),
        zH = (0, AH.useCallback)(((BH, LH) => {
          const AH = `${HH}:${BH}`;
          try {
            if (null !== window.localStorage.getItem(AH)) return;
            window.localStorage.setItem(AH, "1")
          } catch {
            return
          }
          tH(LH)
        }), [tH, HH]);
      return {
        explained: BH,
        hinting: rH,
        explain: tH,
        explainOnce: zH
      }
    }

    function sX(HH) {
      let {
        text: BH,
        tone: LH,
        explained: AH
      } = HH;
      return (0, vS.jsxs)("p", {
        className: Pr()("NxStatus", null === AH ? LH : "Explain"),
        "aria-live": "polite",
        children: [null !== AH && (0, vS.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== AH && void 0 !== AH ? AH : BH]
      })
    }
    const JX = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function iX(HH, BH) {
      const LH = Number(HH[BH]);
      return 1 === LH || 2 === LH || 3 === LH ? LH : 0
    }

    function pX(HH) {
      return !!Mz("reactor", HH.baf2RxNeed) || void 0 !== HH.baf2RxLayout && HH.baf2RxNeed.some((HH => {
        let [BH, LH] = HH;
        return LH > 0 && JX.includes(BH)
      }))
    }
    const yX = "buildAFactory2Game:";

    function HG(HH) {
      let {
        status: BH,
        store: LH,
        busy: AH
      } = HH;
      const {
        t: rH
      } = (0, Or.B)();
      return function(HH) {
        return 0 !== (HH.baf2RxFlags & QB) && (!HH.baf2RxFormed || void 0 !== HH.baf2RxLayout)
      }(BH) ? (0, vS.jsx)(Wh.u, {
        disabled: !pX(BH) || AH,
        onClick: () => {
          LH.tap("fill", (() => {
            LH.send("fill")
          }))
        },
        children: rH(void 0 !== BH.baf2RxLayout ? `${yX}rxFillLayout` : `${yX}rxFill`)
      }) : null
    }

    function BG(HH) {
      let {
        status: BH,
        store: LH,
        readOnly: rH,
        bare: SH = !1
      } = HH;
      const {
        t: hH
      } = (0, Or.B)(), tH = BH.baf2RxLayout, [zH, CH, EH] = BH.baf2RxDims, XH = (0, AH.useMemo)((() => {
        if (void 0 === tH) return 0;
        const HH = Uint8Array.from(tH, ((HH, BH) => iX(tH, BH)));
        return st([zH - 2, CH - 2, EH - 2], HH).max
      }), [tH, zH, CH, EH]);
      return void 0 === tH ? null : (0, vS.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!SH && (0, vS.jsx)("span", {
          className: "Baf2RxHint",
          children: hH(`${yX}rxLayoutLine`, {
            amount: Oz(XH)
          })
        }), !rH && (0, vS.jsx)(Wh.i, {
          onClick: () => {
            LH.send("layout", 0)
          },
          children: hH(`${yX}rxLayoutHide`)
        })]
      })
    }
    const LG = "buildAFactory2Game:",
      AG = {
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

    function rG(HH) {
      let {
        id: BH,
        title: LH,
        body: AH,
        bodyParams: rH,
        yes: SH,
        cancel: hH,
        confirm: tH
      } = HH;
      const {
        t: zH
      } = (0, Or.B)();
      return (0, vS.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": BH,
        children: [(0, vS.jsx)("h3", {
          id: BH,
          children: zH(LH)
        }), (0, vS.jsx)("p", {
          children: zH(AH, rH)
        }), (0, vS.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, vS.jsx)(Wh.m, {
            onClick: hH,
            children: zH(`${LG}rxCancel`)
          }), (0, vS.jsx)(Wh.O, {
            onClick: tH,
            children: zH(SH)
          })]
        })]
      })
    }

    function SG(HH) {
      const [BH, LH] = (0, AH.useState)((() => HH.get()));
      return (0, AH.useEffect)((() => (LH(HH.get()), HH.subscribe((() => {
        LH(HH.get())
      })))), [HH]), BH
    }

    function hG(HH) {
      let {
        kind: BH,
        cap: LH,
        busy: rH = !1,
        whyNot: SH = null,
        apart: hH
      } = HH;
      const {
        t: tH
      } = (0, Or.B)(), [zH, CH] = (0, AH.useState)(!1), EH = null !== SH, XH = (0, AH.useRef)(null);
      if ((0, AH.useEffect)((() => {
          EH && CH(!1)
        }), [EH]), (0, AH.useLayoutEffect)((() => {
          var HH;
          const BH = null === (HH = XH.current) || void 0 === HH ? void 0 : HH.firstElementChild;
          EH ? null === BH || void 0 === BH || BH.setAttribute("aria-disabled", "true") : rH || null === BH || void 0 === BH || BH.removeAttribute("aria-disabled")
        })), !zH || EH) return (0, vS.jsx)("span", {
        ref: XH,
        className: "Baf2RxApartWrap",
        children: (0, vS.jsx)(Wh.m, {
          disabled: rH,
          className: Pr()({
            Baf2RxNotYet: EH
          }),
          onClick: () => {
            SH ? SH() : CH(!0)
          },
          children: tH(`${LG}rxApart`)
        })
      });
      const GH = "battery" === BH,
        YH = void 0 === LH ? `${LG}batApartConfirmBodyPlan` : `${LG}batApartConfirmBody`;
      return (0, vS.jsx)(rG, {
        id: `baf2ApartTitle_${BH}`,
        title: GH ? `${LG}batApartConfirmTitle` : `${LG}rxApartConfirmTitle`,
        body: GH ? YH : `${LG}rxApartConfirmBody`,
        bodyParams: void 0 === LH ? void 0 : {
          cap: LH
        },
        yes: `${LG}rxApart`,
        cancel: () => {
          CH(!1)
        },
        confirm: () => {
          CH(!1), hH()
        }
      })
    }

    function tG(HH) {
      let {
        mood: BH,
        big: LH
      } = HH;
      const AH = AG[BH],
        rH = [];
      return AH.rows.forEach(((HH, BH) => {
        for (let LH = 0; LH < HH.length; LH++) "." !== HH[LH] && rH.push((0, vS.jsx)("rect", {
          x: LH + 1,
          y: BH + 1,
          width: 1,
          height: 1,
          fill: "w" === HH[LH] ? "#8fd3ff" : AH.colour
        }, `${LH},${BH}`))
      })), (0, vS.jsxs)("svg", {
        className: Pr()("Baf2RxFace", {
          Big: LH,
          Alarm: "alarm" === BH
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, vS.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, vS.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), rH]
      })
    }

    function zG(HH) {
      return GS(HH, "+").replace("+", "")
    }

    function CG(HH) {
      let {
        kind: BH,
        dims: LH,
        cap: AH,
        disabled: rH,
        compact: SH,
        resize: hH
      } = HH;
      const {
        t: tH
      } = (0, Or.B)(), {
        min: zH,
        max: CH
      } = RL(BH), EH = Math.min(AH, CH), XH = [`${LG}rxWide`, `${LG}rxTall`, `${LG}rxDeep`], GH = {
        w: String(LH[0]),
        h: String(LH[1]),
        d: String(LH[2]),
        blocks: String(Vz(BH, LH))
      };
      return (0, vS.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, vS.jsx)("div", {
          className: "Baf2RxSteppers",
          children: LH.map(((HH, BH) => {
            const SH = AH => {
                const rH = [LH[0], LH[1], LH[2]];
                rH[BH] = HH + AH, hH(rH)
              },
              GH = HH >= EH;
            return (0, vS.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, vS.jsx)("button", {
                type: "button",
                "aria-label": tH(`${LG}rxSmaller`),
                disabled: rH || HH <= zH,
                onClick: () => {
                  SH(-1)
                },
                children: "\u2212"
              }), (0, vS.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [HH, (0, vS.jsx)("small", {
                  children: tH(XH[BH])
                })]
              }), (0, vS.jsx)("button", {
                type: "button",
                "aria-label": tH(`${LG}rxBigger`),
                disabled: rH || GH,
                onClick: () => {
                  SH(1)
                },
                children: GH && AH < CH ? "\ud83d\udd12" : "+"
              })]
            }, XH[BH])
          }))
        }), !SH && (0, vS.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === BH ? tH(`${LG}rxSizeLine`, {
            ...GH,
            water: String(Uz(LH))
          }) : tH(`${LG}batSizeLine`, GH)
        })]
      })
    }

    function EG(HH) {
      let {
        on: BH,
        label: LH,
        disabled: AH,
        locked: rH,
        pending: SH,
        toggle: hH
      } = HH;
      return (0, vS.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": BH,
        disabled: AH,
        "aria-disabled": rH || void 0,
        className: Pr()("Baf2RxSwitch", {
          On: BH,
          Locked: rH,
          Pending: SH
        }),
        onClick: hH,
        children: [(0, vS.jsx)("span", {
          className: "Baf2RxKnob"
        }), LH]
      })
    }
    const XG = "buildAFactory2Game:",
      GG = .95;

    function YG(HH, BH) {
      return 0 !== (HH.baf2RxFlags & BH)
    }

    function uG(HH) {
      return "cryo" === HH ? pH.n : pH.p
    }

    function QG(HH) {
      var BH, LH, AH, rH, SH, hH, tH, zH, CH;
      return HH.baf2RxCryo ? {
        UY: "cryo",
        usePerS: null !== (rH = HH.baf2RxCryoUse) && void 0 !== rH ? rH : 0,
        needPerS: null !== (SH = HH.baf2RxCryoNeed) && void 0 !== SH ? SH : 0,
        inPerS: null !== (hH = HH.baf2RxCryoIn) && void 0 !== hH ? hH : 0,
        stored: null !== (tH = HH.baf2RxCryoStored) && void 0 !== tH ? tH : 0,
        makersShort: null !== (zH = HH.baf2RxMixersShort) && void 0 !== zH ? zH : 0,
        waterBeside: null !== (CH = HH.baf2RxWaterUse) && void 0 !== CH ? CH : 0,
        pct: HH.baf2RxWater
      } : {
        UY: "water",
        usePerS: null !== (BH = HH.baf2RxWaterUse) && void 0 !== BH ? BH : 0,
        needPerS: null !== (LH = HH.baf2RxWaterNeed) && void 0 !== LH ? LH : 0,
        inPerS: HH.baf2RxWaterIn,
        stored: HH.baf2RxWaterStored,
        makersShort: null !== (AH = HH.baf2RxCondensersShort) && void 0 !== AH ? AH : 0,
        waterBeside: 0,
        pct: HH.baf2RxWater
      }
    }

    function WG(HH) {
      const BH = "running" === HH.baf2RxState || "idle" === HH.baf2RxState;
      return HH.baf2RxFormed && HH.baf2RxTarget !== HH.baf2RxThrottle && BH ? MG(HH, HH.baf2RxTarget) : null
    }

    function MG(HH, BH) {
      const [LH, AH, rH, , , , SH, , hH] = HH.baf2RxStats, tH = YG(HH, YB), zH = QG(HH), CH = zH.pct / 100, {
        gen: EH,
        out: XH,
        load: GH
      } = function(HH, BH, LH, AH) {
        const rH = LH ? jt : 1,
          SH = Math.min(HH.fuelHeat * rH * Math.max(0, Math.min(1, BH)), HH.size * rH);
        return {
          gen: SH,
          out: SH,
          load: hz(SH, HH.cooling, AH)
        }
      }({
        fuelHeat: LH,
        cooling: AH,
        size: rH
      }, BH / 100, tH, CH), YH = zz(SH || dt(...HH.baf2RxDims)), uH = HH.baf2RxHeat, QH = Math.abs(GH - uH), WH = function(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pH.p;
        const SH = LH ? jt : 1,
          hH = Math.min(HH.fuelHeat * SH * BH / 100, HH.size * SH),
          tH = hH,
          zH = HH.fuelHeat * SH,
          CH = HH.cooling * Sz(AH.pct / 100),
          EH = zH > 0 && CH < HH.size * SH ? Math.floor(100 * CH / zH) : 100,
          XH = hH * rH - AH.inPerS;
        return {
          out: tH,
          hotAbove: EH >= 100 ? null : Math.max(0, EH),
          waterSecs: AH.pct >= 100 && XH > 1e-6 ? Math.max(0, AH.stored) / XH : null
        }
      }({
        fuelHeat: LH,
        cooling: AH,
        size: rH
      }, BH, tH, {
        pct: zH.pct,
        inPerS: zH.inPerS,
        stored: zH.stored
      }, uG(zH.UY));
      return {
        pct: BH,
        out: XH,
        coolPerS: EH * uG(zH.UY),
        pelletsPerMin: hH > 0 ? XH / hH * 60 : 0,
        settle: GH,
        settleS: QH > 2 ? YH * Math.log(QH / 2) : 0,
        overheatS: GH > 100 && uH < 100 ? YH * Math.log((GH - uH) / (GH - 100)) : null,
        hotAbove: WH.hotAbove,
        coolantSecs: WH.waterSecs
      }
    }

    function xG(HH) {
      return HH.baf2RxThrottle <= 0 && "running" !== HH.baf2RxState ? 0 : MG(HH, HH.baf2RxTarget).pelletsPerMin / 60
    }

    function vG(HH, BH) {
      if (HH <= 0 || BH <= 0) return 0;
      const LH = HH / BH;
      return LH < .25 ? 1 : LH < .5 ? 2 : LH < .8 ? 3 : 4
    }

    function PG(HH, BH) {
      const LH = {};
      for (const [AH, rH] of Object.entries(BH.params)) LH[AH] = "time" === AH ? QS(HH, rH) : "amount" === AH ? Oz(rH) : String(Math.round(rH));
      return HH(BH.key, LH)
    }

    function TG(HH, BH) {
      return {
        key: `${XG}${HH}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: BH
      }
    }

    function UG(HH) {
      var BH;
      const LH = YG(HH, YB),
        AH = "running" === HH.baf2RxState,
        rH = Gz(HH),
        SH = HH.baf2RxHeat;
      var hH;
      if (AH && SH > Nt) return {
        key: null !== (hH = rH.fix) && void 0 !== hH ? hH : `${XG}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const tH = AH ? MG(HH, HH.baf2RxTarget).coolantSecs : null,
        zH = "cryo" === QG(HH).UY;
      if (null !== tH && tH >= 1 && tH <= 30) return TG(zH ? "rxWarnCryo" : "rxWarnWater", "bad");
      const CH = wt(dt(...HH.baf2RxDims)).waste,
        EH = AH ? xz(HH, CH, xG(HH)).fullInS : null;
      if (null !== EH && EH <= 120 && HH.baf2RxWaste >= .5 * CH) return TG("rxWarnWaste", "warn");
      if (null !== tH && tH >= 1) return TG(zH ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: tH
      });
      const XH = "noWater" === HH.baf2RxState && SH > Nt;
      if (HH.baf2RxDamage >= 1 && !XH) return TG("rxDamagedHeals", "warn", {
        pct: HH.baf2RxDamage
      });
      if (HH.baf2RxCryoCut) return TG("rxFix_cryoCut", "warn");
      const GH = QG(HH);
      if ("noWater" === HH.baf2RxState && "cryo" === GH.UY) return TG("noWater" === HH.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const YH = rH.fix === `${XG}rxFix_scramCool` || "idle" === HH.baf2RxState && HH.baf2RxTarget <= 0;
      if (YH && HH.baf2RxFuel <= 0) return TG("rxFix_noFuel", "warn");
      if (YH && HH.baf2RxWaterIn <= 0 && (null !== (BH = HH.baf2RxCryoIn) && void 0 !== BH ? BH : 0) <= 0) return TG("rxFix_noWater", "warn");
      const uH = rH.fix === `${XG}rxFix_scramCool` ? uz(HH) : null;
      if (null !== uH) return {
        key: uH.key,
        params: {
          amount: uH.amount
        },
        tone: "info"
      };
      if ("running" !== HH.baf2RxState && "idle" !== HH.baf2RxState && null !== rH.fix) return {
        key: rH.fix,
        params: {},
        tone: "scram" === HH.baf2RxState ? "info" : XH ? "bad" : "warn"
      };
      var QH;
      if ("idle" === HH.baf2RxState && HH.baf2RxTarget <= 0) return {
        key: null !== (QH = rH.fix) && void 0 !== QH ? QH : `${XG}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const WH = HH.baf2RxCryoStarved;
      if ("cryo" === GH.UY && WH && GH.needPerS > 0 && GH.usePerS < GG * GH.needPerS) return TG("noWater" === WH ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const MH = "cryo" === GH.UY,
        xH = GH.needPerS > 0 && GH.usePerS < GG * GH.needPerS;
      if (MH ? xH || GH.makersShort > 0 && GH.pct < 100 : GH.pct < 100) {
        const BH = MH && xH ? Math.floor(100 * GH.usePerS / GH.needPerS) : Math.min(100, GH.pct);
        if (GH.makersShort > 0) {
          return TG(`${MH?"rxCryoShortLine":"rxWaterShortLine"}${1===GH.makersShort?"One":""}${!MH&&HH.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: BH,
            count: GH.makersShort
          })
        }
        return TG(MH ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: BH
        })
      }
      const vH = function(HH) {
        const [BH, LH, AH] = HH.baf2RxStats, rH = QG(HH), SH = tz({
          fuelHeat: BH,
          cooling: LH,
          size: AH
        }, "cryo" === rH.UY ? pH.h : 1, !0);
        return Math.max(0, SH * uG(rH.UY) - rH.inPerS)
      }(HH);
      if (LH && vH > 0) return TG("cryo" === GH.UY ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(vH)
      });
      if (SH >= Az) return TG("rxHotLine", "warn");
      const PH = MG(HH, HH.baf2RxTarget);
      var TH;
      if (null !== PH.overheatS) return TG("rxWillOverheat", "bad", {
        pct: HH.baf2RxTarget,
        time: PH.overheatS,
        safe: null !== (TH = PH.hotAbove) && void 0 !== TH ? TH : 100
      });
      if (Math.abs(PH.settle - SH) >= 3) return TG("rxSettling", "info", {
        pct: HH.baf2RxTarget,
        heat: Math.round(PH.settle),
        time: PH.settleS
      });
      const UH = uz(HH);
      if (null !== UH) return {
        key: UH.key,
        params: {
          amount: UH.amount
        },
        tone: "info"
      };
      const VH = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== BH && ("running" !== BH || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === HH.rods ? `${Cz}rxLimitNoRods` : `${Cz}rxLimit_${Lz(HH)}`
      }({
        rods: HH.baf2RxStats[3],
        ...Yz(HH)
      }, HH.baf2RxState, HH.baf2RxOut >= GG * HH.baf2RxMaxNow, !1);
      if (VH === `${XG}rxLimit_size`) {
        const [BH, , LH, AH] = HH.baf2RxStats, rH = AH > 0 && BH > 0 ? Math.ceil(LH / (BH / AH) - 1e-9) : AH, SH = HH.baf2RxDims.every((HH => HH >= RL("reactor").max));
        if (rH < AH) return TG(SH ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: rH,
          have: AH
        });
        if (SH) return TG("rxLimit_sizeMax", "info")
      }
      return null !== VH ? {
        key: VH,
        params: {},
        tone: "info"
      } : TG("rxSteady", "ok", {
        pct: HH.baf2RxTarget
      })
    }

    function VG(HH) {
      var BH;
      if (HH.melted) return TG("rxMeltedBody", "bad");
      if (-1 === HH.bad) return TG("rxFix_noRoom", "warn");
      if (HH.bad > 0) return TG(1 === HH.bad ? "rxBadOne" : "rxBad", "warn", {
        count: HH.bad
      });
      if (HH.left > 0) {
        const BH = 1 === HH.left ? "One" : "";
        return TG(HH.canFill ? `rxPlanLeft${BH}` : `rxPlanLeftNoFill${BH}`, "info", {
          count: HH.left
        })
      }
      if (0 === HH.rods) return TG("rxLimitNoRods", "warn");
      const LH = null !== (BH = HH.idle) && void 0 !== BH ? BH : 0;
      return LH > 0 ? TG(1 === LH ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: LH
      }) : TG("rxPlanReady", "ok")
    }

    function OG(HH) {
      return Math.floor(Math.max(0, HH[1] - 1) / 2)
    }

    function bG(HH) {
      if (HH >= it && HH < pt) {
        const BH = HH - it;
        return {
          key: 0 === BH ? `${XG}rxWhy_rodAlone` : 1 === BH ? `${XG}rxWhy_rodOne` : `${XG}rxWhy_rod`,
          params: {
            count: String(BH),
            heat: String(It * (1 + ft * BH))
          }
        }
      }
      return HH === pt ? {
        key: `${XG}rxWhy_channel`,
        params: {
          amount: String(Kt)
        }
      } : HH === yt ? {
        key: `${XG}rxWhy_deadChannel`,
        params: {}
      } : HH === Hz ? {
        key: `${XG}rxWhy_graphite`,
        params: {}
      } : {
        key: `${XG}rxWhy_core`,
        params: {}
      }
    }
    const kG = "buildAFactory2Game:";

    function mG(HH, BH) {
      return 0 !== (HH.baf2RxFlags & BH)
    }

    function oG(HH) {
      let {
        status: BH,
        pending: LH,
        store: AH,
        explain: rH
      } = HH;
      const {
        t: SH
      } = (0, Or.B)(), hH = mG(BH, GB), tH = BH.baf2RxTarget, zH = BH.baf2RxThrottle, CH = function(HH) {
        return {
          press: () => {
            HH.throttlePress()
          },
          drag: BH => {
            HH.throttleDrag(BH)
          },
          release: () => {
            HH.throttleRelease()
          }
        }
      }(AH), EH = null === (XH = MG(BH, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, XH - 10),
        red: XH
      };
      var XH;
      return (0, vS.jsxs)("div", {
        className: Pr()("Baf2RxThrottle", {
          Off: hH
        }),
        onClick: () => {
          hH && rH(`${kG}rxWhy_startFirst`)
        },
        children: [(0, vS.jsx)("span", {
          className: "HideNarrow",
          children: SH(`${kG}rxThrottle`)
        }), (0, vS.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, vS.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: tH,
            disabled: hH,
            style: hH ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": SH(`${kG}rxThrottle`),
            onPointerDown: () => {
              CH.press();
              const HH = () => {
                window.removeEventListener("pointerup", HH), window.removeEventListener("pointercancel", HH), CH.release()
              };
              window.addEventListener("pointerup", HH), window.addEventListener("pointercancel", HH)
            },
            onKeyUp: CH.release,
            onChange: HH => {
              CH.drag(Number(HH.target.value))
            }
          }), (0, vS.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${EH.amber}%, #ffb020 ${EH.amber}% ${EH.red}%, #ff3b30 ${EH.red}%)`
            },
            "aria-hidden": "true"
          }), (0, vS.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${zH}% + ${8*(1-zH/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, vS.jsxs)("b", {
          children: [`${tH}%`, (0, vS.jsx)("i", {
            className: Pr()("Baf2RxPendingDot", {
              On: LH
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function IG(HH) {
      let {
        status: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)(), AH = MG(BH, BH.baf2RxTarget), rH = QG(BH).UY, SH = LH("cryo" === rH ? `${kG}rxRateCryo` : `${kG}rxRateWater`, {
        rate: zG(AH.coolPerS)
      }), hH = LH(`${kG}rxChain`, {
        pct: String(BH.baf2RxTarget),
        out: Oz(AH.out),
        heat: String(Math.round(AH.settle)),
        coolant: SH
      }), tH = null !== AH.coolantSecs ? AH.coolantSecs >= 1 ? LH("cryo" === rH ? `${kG}rxThrottleCryoOut` : `${kG}rxThrottleWaterOut`, {
        time: QS(LH, AH.coolantSecs)
      }) : LH("cryo" === rH ? `${kG}rxThrottleCryoDry` : `${kG}rxThrottleWaterDry`) : null;
      return (0, vS.jsxs)("p", {
        className: "Baf2RxChain",
        children: [hH, null !== tH ? (0, vS.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", tH]
        }) : (0, vS.jsxs)("span", {
          children: [" \xb7 ", LH(`${kG}rxChainPellets`, {
            amount: bz(AH.pelletsPerMin)
          })]
        })]
      })
    }

    function fG(HH) {
      let {
        view: BH,
        store: LH,
        explain: rH,
        explainOnce: SH
      } = HH;
      const {
        t: hH
      } = (0, Or.B)(), {
        status: tH
      } = BH, [zH, CH] = (0, AH.useState)(!1), EH = mG(tH, GB), GH = mG(tH, YB), YH = !mG(tH, WB), uH = tH.baf2RxHeat > 100;
      return (0, vS.jsxs)(vS.Fragment, {
        children: [(0, vS.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, vS.jsx)(oG, {
            status: tH,
            pending: BH.throttlePending,
            store: LH,
            explain: rH
          }), (0, vS.jsx)(EG, {
            on: GH,
            label: GH ? hH(`${kG}rxOdLeft`, {
              time: QS(hH, tH.baf2RxOdLeft)
            }) : hH(`${kG}rxOverdrive`),
            locked: YH,
            pending: 0 !== (BH.pendingFlags & YB),
            toggle: () => {
              YH ? rH(`${kG}rxOverdriveTier`, {
                amount: String(XH(13))
              }) : GH ? LH.setFlag(YB, !1) : BH.odConfirmed ? LH.setFlag(YB, !0) : CH(!0)
            }
          }), EH || BH.startGuard ? (0, vS.jsx)(Wh.x, {
            disabled: BH.busy.has("start") || BH.startGuard,
            onClick: () => {
              LH.tap("start", (() => {
                LH.setFlag(GB, !1)
              }))
            },
            children: hH(BH.startGuard ? `${kG}rxStarting` : `${kG}rxStart`)
          }) : (0, vS.jsx)("span", {
            className: Pr()("Baf2RxScram", {
              Pulse: uH
            }),
            children: (0, vS.jsx)(Wh.O, {
              onClick: () => {
                LH.shutDown()
              },
              children: hH(`${kG}rxScram`)
            })
          })]
        }), (0, vS.jsx)(IG, {
          status: tH
        }), zH && (0, vS.jsx)(rG, {
          id: "baf2RxOdTitle",
          title: `${kG}rxOdConfirmTitle`,
          body: `${kG}rxOdConfirmBody`,
          yes: `${kG}rxOdConfirm`,
          cancel: () => {
            CH(!1)
          },
          confirm: () => {
            CH(!1), LH.tap("odConfirm", (() => {
              LH.confirmOverdrive(), LH.setFlag(YB, !0)
            })), SH(`${kG}rxWhy_overdrive`)
          }
        })]
      })
    }

    function lG(HH) {
      let {
        view: BH,
        store: LH,
        keepSize: AH
      } = HH;
      const {
        t: rH
      } = (0, Or.B)(), {
        status: SH
      } = BH;
      return (0, vS.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, vS.jsx)(CG, {
          kind: "reactor",
          dims: BH.dims,
          cap: SH.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: HH => {
            LH.resize(HH)
          }
        }), AH ? (0, vS.jsx)(Wh.m, {
          onClick: AH,
          children: rH(`${kG}rxKeepSize`)
        }) : (0, vS.jsxs)(vS.Fragment, {
          children: [(0, vS.jsx)(EG, {
            on: BH.guide,
            label: rH(`${kG}rxGuide`),
            toggle: () => {
              LH.toggleGuide()
            }
          }), mG(SH, xB) && (0, vS.jsx)(EG, {
            on: BH.starter,
            label: rH(`${kG}rxStarter`),
            toggle: () => {
              LH.toggleStarter()
            }
          }), (0, vS.jsx)(HG, {
            status: SH,
            store: LH,
            busy: BH.busy.has("fill")
          })]
        })]
      })
    }

    function KG(HH) {
      let {
        need: BH,
        kind: LH = "reactor",
        explain: AH
      } = HH;
      const {
        t: rH
      } = (0, Or.B)(), SH = BH.length <= 3, hH = BH.reduce(((HH, BH) => {
        let [, LH] = BH;
        return HH + LH
      }), 0);
      return (0, vS.jsxs)("div", {
        className: Pr()("Baf2RxParts", {
          Compact: !SH
        }),
        onClick: () => {
          AH("battery" === LH ? `${kG}batWhy_store` : `${kG}rxShellHint`)
        },
        children: [hH > 0 && (0, vS.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === hH ? rH(`${kG}rxBlocksOne`) : rH(`${kG}rxBlocks`, {
            blocks: String(hH)
          })
        }), 0 === BH.length ? (0, vS.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: rH("battery" === LH ? `${kG}batPartsDone` : `${kG}rxShellDone`)
        }) : Wz(BH).map((HH => {
          let [BH, LH, AH] = HH;
          const hH = function(HH) {
            const BH = Tz[HH];
            if (void 0 === BH) return null;
            const [LH, AH, rH] = vz[BH].colour.map((HH => Math.round(255 * HH)));
            return `rgb(${LH}, ${AH}, ${rH})`
          }(BH);
          return (0, vS.jsxs)("span", {
            className: "Baf2RxChip",
            title: (0, pr.h)(rH, BH),
            children: [(0, vS.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === hH ? {
                visibility: "hidden"
              } : {
                background: hH
              },
              title: rH(`${kG}rxShopGhost`)
            }), (0, vS.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, vS.jsx)(kr.e, {
                itemName: BH,
                amount: 0
              })
            }), (0, vS.jsx)("span", {
              className: "Baf2RxChipName",
              children: SH ? `${LH} ${tH=(0,pr.h)(rH,BH),tH.replace(/^(Reactor|Battery) (?=\S)/,"")}` : LH
            }), AH >= LH ? (0, vS.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, vS.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: SH ? rH(`${kG}rxShopShort`, {
                count: String(LH - AH)
              }) : "\u2212" + (LH - AH)
            })]
          }, BH);
          var tH
        }))]
      })
    }
    const cG = "buildAFactory2Game:";

    function eG(HH) {
      var BH, LH, rH, SH, hH, tH, zH;
      let {
        store: CH,
        close: EH
      } = HH;
      const {
        t: XH
      } = (0, Or.B)(), GH = eh(), YH = SG(CH), {
        explained: uH,
        explain: QH
      } = aX("baf2RxExplained"), WH = (0, AH.useCallback)(((HH, BH) => {
        QH(XH(HH, BH))
      }), [QH, XH]), MH = null === YH || void 0 === YH ? void 0 : YH.status, xH = !0 === (null === MH || void 0 === MH ? void 0 : MH.baf2BatReadOnly), vH = HH => {
        MH && GH.send(XB(MH.baf2BatAt, HH))
      }, [PH, TH, UH] = null !== (BH = null === YH || void 0 === YH ? void 0 : YH.dims) && void 0 !== BH ? BH : [0, 0, 0], VH = Oz(null !== (LH = null === YH || void 0 === YH ? void 0 : YH.aX) && void 0 !== LH ? LH : 0), OH = !0 === (null === MH || void 0 === MH ? void 0 : MH.baf2BatFormed), bH = null !== (rH = null === MH || void 0 === MH ? void 0 : MH.baf2BatStored) && void 0 !== rH ? rH : 0, kH = Math.max(1, null !== (SH = null === MH || void 0 === MH ? void 0 : MH.baf2BatIslandCap) && void 0 !== SH ? SH : 1), mH = Math.min(100, 100 * bH / kH), oH = null === MH || void 0 === MH ? void 0 : MH.baf2BatNetPerS, IH = function(HH, BH, LH) {
        return LH > 0 && BH >= LH ? "full" : void 0 !== HH && HH >= .05 ? "charging" : void 0 !== HH && HH <= -.05 && BH > 0 ? "draining" : "steady"
      }(oH, bH, null !== (hH = null === MH || void 0 === MH ? void 0 : MH.baf2BatIslandCap) && void 0 !== hH ? hH : 0), fH = null !== (tH = null === MH || void 0 === MH ? void 0 : MH.baf2BatMadePerS) && void 0 !== tH ? tH : 0, lH = null !== (zH = null === MH || void 0 === MH ? void 0 : MH.baf2BatUsedPerS) && void 0 !== zH ? zH : 0;
      let KH, cH = {},
        eH = "info";
      if (MH)
        if (OH) "charging" === IH ? (KH = `${cG}batLine_charging`, cH = {
          time: QS(XH, (kH - bH) / Math.max(.05, null !== oH && void 0 !== oH ? oH : 0))
        }, eH = "ok") : "draining" === IH ? (KH = `${cG}batLine_draining`, cH = {
          time: QS(XH, bH / Math.max(.05, -(null !== oH && void 0 !== oH ? oH : 0)))
        }, eH = "warn") : KH = "full" === IH ? `${cG}batLine_full` : bH <= 0 && lH > 0 ? `${cG}batLine_empty` : `${cG}batLine_steady`;
        else {
          var qH;
          const HH = VG({
            left: MH.baf2BatNeed.reduce(((HH, BH) => {
              let [, LH] = BH;
              return HH + LH
            }), 0),
            bad: MH.baf2BatBad,
            rods: 1,
            canFill: !0 === MH.baf2BatCanFill,
            melted: !1
          });
          KH = HH.key, cH = {
            count: String(null !== (qH = HH.params.count) && void 0 !== qH ? qH : 0)
          }, eH = HH.tone
        }
      else KH = `${cG}batLine_steady`;
      const gH = Math.max(fH, lH, 1);
      return (0, vS.jsx)(Qh.b, {
        close: EH,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, vS.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, vS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vS.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, vS.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, vS.jsx)(kr.e, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, vS.jsxs)("div", {
                children: [(0, vS.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: XH(`${cG}batTitle`)
                }), MH && (0, vS.jsxs)("p", {
                  className: Pr()("Baf2RxSubtitle", {
                    good: OH && "charging" === IH,
                    warn: OH && "draining" === IH
                  }),
                  children: [PH, "\xd7", TH, "\xd7", UH, " \xb7 ", XH(OH ? `${cG}batState_${IH}` : `${cG}rxSubPlanShort`)]
                })]
              })]
            }), (0, vS.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [MH && !xH && (0, vS.jsx)(hG, {
                kind: "battery",
                cap: OH ? VH : void 0,
                busy: null === YH || void 0 === YH ? void 0 : YH.busy.has("apart"),
                apart: () => {
                  CH.tap("apart", (() => {
                    vH("apart")
                  }))
                }
              }), (0, vS.jsx)(Wh.q, {
                onClick: EH
              })]
            })]
          }), YH && MH && (0, vS.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, vS.jsxs)("div", {
              className: Pr()("Baf2RxFlow Baf2BatFlow", {
                Plan: !OH
              }),
              children: [(0, vS.jsx)(wX, {
                kind: "Power",
                label: XH(`${cG}batMade`),
                number: OH ? `\u26a1 ${Oz(fH)}/s` : "\u2014",
                note: XH(`${cG}batMadeNote`),
                share: OH ? fH / gH : void 0,
                onExplain: () => {
                  WH(`${cG}batWhy_made`)
                }
              }), (0, vS.jsx)(ZX, {
                kind: "Power",
                step: OH ? vG(fH, gH) : 0,
                planned: !OH
              }), (0, vS.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  WH(`${cG}batWhy_store`)
                },
                children: [(0, vS.jsx)(dX, {
                  max: 100,
                  bands: [{
                    upTo: OH ? mH : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, vS.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, vS.jsx)("b", {
                    className: "Baf2BatStored",
                    children: OH ? XH(`${cG}batStoredOf`, {
                      amount: Oz(bH),
                      cap: Oz(MH.baf2BatIslandCap)
                    }) : XH(`${cG}batWillHold`, {
                      cap: VH
                    })
                  }), (0, vS.jsx)("span", {
                    children: XH(`${cG}batAdds`, {
                      cap: VH
                    })
                  }), OH && (0, vS.jsx)("small", {
                    children: XH(`${cG}batBreakNote`, {
                      cap: VH
                    })
                  })]
                })]
              }), (0, vS.jsx)(ZX, {
                kind: "Power",
                step: OH ? vG(lH, gH) : 0,
                planned: !OH
              }), (0, vS.jsx)(wX, {
                kind: "Power",
                label: XH(`${cG}batUsed`),
                number: OH ? `\u26a1 ${Oz(lH)}/s` : "\u2014",
                note: XH(`${cG}batUsedNote`),
                share: OH ? lH / gH : void 0,
                onExplain: () => {
                  WH(`${cG}batWhy_used`)
                }
              })]
            }), (0, vS.jsx)(sX, {
              text: XH(KH, cH),
              tone: eH,
              explained: uH
            }), xH ? (0, vS.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: XH(`${cG}rxNotYours`)
            }) : !OH && (0, vS.jsxs)(vS.Fragment, {
              children: [(0, vS.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, vS.jsx)(CG, {
                  kind: "battery",
                  dims: YH.dims,
                  cap: MH.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: HH => {
                    CH.resize(HH)
                  }
                }), (0, vS.jsx)(EG, {
                  on: YH.guide,
                  label: XH(`${cG}rxGuide`),
                  toggle: () => {
                    CH.toggleGuide()
                  }
                }), MH.baf2BatCanFill && (0, vS.jsx)(Wh.u, {
                  disabled: !Mz("battery", MH.baf2BatNeed) || YH.busy.has("fill"),
                  onClick: () => {
                    CH.tap("fill", (() => {
                      vH("fill")
                    }))
                  },
                  children: XH(`${cG}rxFill`)
                })]
              }), (0, vS.jsx)(KG, {
                need: MH.baf2BatNeed,
                kind: "battery",
                explain: WH
              })]
            })]
          })]
        })
      })
    }
    const qG = "buildAFactory2Game:",
      gG = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function NG(HH, BH) {
      return HH === Jt ? null : BH ? "#4a4440" : HH < pt ? gG[HH - it] : HH === pt ? "#3fd0f0" : HH === yt ? "#2c3e4c" : "#55585e"
    }

    function RG(HH) {
      let {
        inner: BH,
        looks: LH,
        layer: AH,
        setLayer: rH,
        glow: SH,
        melted: hH,
        explain: tH
      } = HH;
      const {
        t: zH
      } = (0, Or.B)(), [CH, EH, XH] = BH, GH = Math.max(0, Math.min(EH - 1, AH)), YH = [];
      for (let QH = 0; QH < XH; QH++)
        for (let HH = 0; HH < CH; HH++) {
          var uH;
          const BH = null !== (uH = LH[(GH * XH + QH) * CH + HH]) && void 0 !== uH ? uH : Jt,
            AH = NG(BH, hH),
            rH = BH >= it && BH < pt;
          YH.push(null === AH ? (0, vS.jsx)("circle", {
            cx: HH + .5,
            cy: QH + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${HH},${QH}`) : (0, vS.jsx)("rect", {
            x: HH + .06,
            y: QH + .06,
            width: .88,
            height: .88,
            fill: AH,
            opacity: rH && !hH ? .5 + .5 * SH : 1,
            onClick: HH => {
              HH.stopPropagation();
              const LH = bG(BH);
              tH(LH.key, LH.params)
            }
          }, `${HH},${QH}`))
        }
      return (0, vS.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, vS.jsx)("svg", {
          className: Pr()("Baf2RxMapGrid", {
            Melted: hH
          }),
          viewBox: `0 0 ${Math.max(1,CH)} ${Math.max(1,XH)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": zH(`${qG}rxWhy_core`),
          onClick: () => {
            tH(`${qG}rxWhy_core`, {})
          },
          children: YH
        }), EH > 1 && (0, vS.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, vS.jsx)("button", {
            type: "button",
            "aria-label": zH(`${qG}rxLayerDown`),
            disabled: GH <= 0,
            onClick: () => {
              rH(GH - 1)
            },
            children: "\u25bc"
          }), (0, vS.jsxs)("span", {
            children: [(0, vS.jsx)("span", {
              className: "HideNarrow",
              children: zH(`${qG}rxLayer`, {
                n: String(GH + 1),
                of: String(EH)
              })
            }), (0, vS.jsx)("span", {
              className: "ShowNarrow",
              children: zH(`${qG}rxLayerShort`, {
                n: String(GH + 1),
                of: String(EH)
              })
            })]
          }), (0, vS.jsx)("button", {
            type: "button",
            "aria-label": zH(`${qG}rxLayerUp`),
            disabled: GH >= EH - 1,
            onClick: () => {
              rH(GH + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const jG = "buildAFactory2Game:",
      nG = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Rt,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Xz,
        kind: "red"
      }],
      FG = [50, Rt, 100];

    function DG(HH) {
      let {
        stats: BH,
        t: LH,
        explain: AH
      } = HH;
      const rH = Lz(BH),
        SH = Math.max(1, BH.fuelHeat, BH.cooling, BH.size),
        hH = [
          ["fuel", `${jG}rxBarRods`, BH.fuelHeat],
          ["cooling", `${jG}rxBarCooling`, BH.cooling],
          ["size", `${jG}rxBarSize`, BH.size]
        ];
      return (0, vS.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          AH(`${jG}rxWhy_bars`)
        },
        children: [(0, vS.jsx)("span", {
          className: "Baf2RxMostLine",
          children: LH(`${jG}rxMost`, {
            amount: Oz(Math.min(BH.fuelHeat, BH.cooling, BH.size))
          })
        }), (0, vS.jsx)("span", {
          className: "Baf2RxMostBars",
          children: hH.map((HH => {
            let [BH, AH, hH] = HH;
            return (0, vS.jsxs)("span", {
              className: Pr()("Baf2RxMostBar", BH, {
                Low: BH === rH
              }),
              children: [(0, vS.jsx)("small", {
                children: LH(AH)
              }), (0, vS.jsx)("i", {
                children: (0, vS.jsx)("b", {
                  style: {
                    width: 100 * hH / SH + "%"
                  }
                })
              })]
            }, BH)
          }))
        })]
      })
    }

    function wG(HH) {
      var BH;
      let {
        view: LH,
        heat: rH,
        settle: SH,
        settleLine: hH,
        settleBad: tH,
        explain: zH
      } = HH;
      const {
        t: CH
      } = (0, Or.B)(), {
        status: EH
      } = LH, XH = EH.baf2RxAt.join(","), [GH, YH] = (0, AH.useState)((() => OG(LH.inner)));
      (0, AH.useEffect)((() => {
        YH(OG(LH.inner))
      }), [XH, LH.inner[1]]);
      const uH = null !== (BH = LH.plan) && void 0 !== BH ? BH : Yz(EH),
        QH = LH.plan ? LH.plan.powerPerUnit : EH.baf2RxStats[8],
        WH = null === rH ? null : "alarm" === (MH = Ez(EH)) ? "red" : "hot" === MH ? "hot" : "warm" === MH ? "warm" : "cold";
      var MH;
      const xH = !EH.baf2RxFormed && function(HH, BH) {
          return 0 !== (HH.baf2RxFlags & BH)
        }(EH, uB),
        vH = EH.baf2RxDamage,
        PH = EH.baf2RxDamageTrend;
      return (0, vS.jsxs)("div", {
        className: Pr()("Baf2RxCore", null !== WH && void 0 !== WH ? WH : "plan"),
        children: [(0, vS.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, vS.jsx)(RG, {
            inner: LH.inner,
            looks: LH.looks,
            layer: GH,
            setLayer: YH,
            glow: EH.baf2RxFormed ? EH.baf2RxThrottle / 100 : 1,
            melted: xH,
            explain: zH
          }), (0, vS.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              zH(`${jG}rxWhy_heat`)
            },
            children: [null !== rH ? (0, vS.jsxs)(vS.Fragment, {
              children: [(0, vS.jsx)("b", {
                children: CH(`${jG}rxHeatPct`, {
                  pct: String(rH)
                })
              }), (0, vS.jsx)("span", {
                className: Pr()("Baf2RxBand", WH),
                children: CH(`${jG}rxBand_${WH}`)
              })]
            }) : (0, vS.jsx)("b", {
              children: CH(`${jG}rxHeat`)
            }), null !== hH && (0, vS.jsx)("span", {
              className: Pr()("Baf2RxSettle", {
                Bad: tH
              }),
              children: hH
            }), vH >= 1 && (0, vS.jsxs)("span", {
              className: Pr()("Baf2RxDamage", PH),
              children: [CH(`${jG}rxDamageLine`, {
                pct: String(vH)
              }), " \xb7 ", CH(`${jG}rxDamage_${PH}`), (0, vS.jsx)("i", {
                children: (0, vS.jsx)("b", {
                  style: {
                    width: `${Math.min(100,vH)}%`
                  }
                })
              })]
            })]
          }), (0, vS.jsx)(dX, {
            max: Xz,
            bands: nG,
            ticks: FG,
            now: rH,
            settle: SH,
            settleTone: tH ? "bad" : null,
            onExplain: () => {
              zH(`${jG}rxWhy_heat`)
            }
          })]
        }), (0, vS.jsx)(DG, {
          stats: uH,
          t: CH,
          explain: zH
        }), QH > 0 && (0, vS.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            zH(`${jG}rxWhy_perPellet`)
          },
          children: CH(`${jG}rxPerPellet`, {
            amount: Oz(QH)
          })
        })]
      })
    }

    function ZG(HH, BH) {
      var LH;
      if (!HH.baf2RxStore) return {
        note: BH(`${jG}rxUpTo`, {
          amount: Oz(HH.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [AH, rH] = HH.baf2RxStore, SH = rH > 0 ? AH / rH : 0, hH = String(Math.floor(100 * SH)), tH = null !== (LH = HH.baf2RxStoreNetPerS) && void 0 !== LH ? LH : 0, zH = function(HH) {
        var BH, LH;
        const [AH, rH] = null !== (BH = HH.baf2RxStore) && void 0 !== BH ? BH : [0, 0], SH = null !== (LH = HH.baf2RxStoreNetPerS) && void 0 !== LH ? LH : 0;
        return rH > 0 && AH >= rH - 1 ? "running" === HH.baf2RxState ? `${XG}rxStoreFull` : `${XG}rxStoreFullOnly` : SH > .05 ? `${XG}rxStoreLine` : SH < -.05 ? "running" === HH.baf2RxState ? `${XG}rxStoreUsesMore` : `${XG}rxStoreDraining` : `${XG}rxStorePct`
      }(HH);
      return {
        note: BH(zH, zH === `${jG}rxStoreLine` ? {
          pct: hH,
          time: QS(BH, (rH - AH) / tH)
        } : {
          pct: hH
        }),
        share: SH
      }
    }

    function dG(HH) {
      let {
        view: BH,
        explain: LH,
        preview: AH
      } = HH;
      const {
        t: rH
      } = (0, Or.B)(), {
        status: SH
      } = BH, hH = wt(dt(...BH.dims)), tH = xG(SH), zH = Math.min(Math.round(SH.baf2RxFuel), hH.fuel), CH = "running" === SH.baf2RxState, EH = CH ? vG(SH.baf2RxOut, SH.baf2RxMaxNow) : 0, XH = function(HH, BH, LH) {
        const AH = QG(HH),
          rH = "cryo" === AH.UY,
          SH = LH ? LH.coolantSecs : AH.pct >= 100 && HH.baf2RxOut >= 1 ? MG(HH, HH.baf2RxThrottle).coolantSecs : null;
        let hH, tH = !1;
        if (AH.pct < 100) {
          const LH = 1 === AH.makersShort,
            SH = !rH && HH.baf2RxCryoOpen ? "OrCryo" : "";
          hH = AH.makersShort > 0 ? BH(rH ? `${jG}rxCryoAddMixer${LH?"":"s"}` : `${jG}rxWaterAddCondenser${LH?"":"s"}${SH}`, {
            count: String(AH.makersShort)
          }) : BH(`${jG}rxWaterNeeds`, {
            rate: zG(AH.needPerS)
          })
        } else if (null !== SH) hH = BH(`${jG}rxWaterRunsOut`, {
          time: QS(BH, SH)
        });
        else if (AH.waterBeside > 0) hH = BH(`${jG}rxCryoPlusWater`, {
          rate: zG(AH.waterBeside)
        });
        else {
          const HH = function(HH) {
            return HH.inPerS <= 0 ? "rxWaterNoSupply" : HH.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(AH);
          tH = "rxWaterNoSupply" === HH, hH = BH(`${jG}${HH}`, {
            amount: Oz(AH.stored)
          })
        }
        return {
          kind: rH ? "Cryo" : "Water",
          label: BH(rH ? `${jG}rxCryo` : `${jG}rxWater`),
          number: `${zG(AH.usePerS)}/s`,
          preview: LH ? `${zG(LH.coolPerS)}/s` : null,
          note: hH,
          tone: "noWater" === HH.baf2RxState ? "danger" : tH ? "warn" : (zH = AH.pct, CH = SH, zH < 100 ? "danger" : null === CH ? null : CH < 300 ? "danger" : "warn"),
          share: AH.pct / 100,
          why: rH ? `${jG}rxWhy_cryo` : `${jG}rxWhy_water`,
          short: AH.pct < 100
        };
        var zH, CH
      }(SH, rH, AH), GH = xz(SH, hH.waste, tH), YH = ZG(SH, rH), uH = MG(SH, SH.baf2RxTarget), QH = CH && Math.abs(uH.settle - SH.baf2RxHeat) >= 3, WH = AH ? AH.pelletsPerMin / 60 : null;
      return (0, vS.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, vS.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, vS.jsx)(wX, {
            kind: "Fuel",
            label: rH(`${jG}rxFuel`),
            number: String(zH),
            preview: null !== WH && WH > 0 && SH.baf2RxFuel > 0 ? QS(rH, SH.baf2RxFuel / WH) : null,
            note: SH.baf2RxFuel <= 0 ? rH(`${jG}rxFuelEmpty`) : tH > 0 ? rH(`${jG}rxFuelLeft`, {
              time: QS(rH, SH.baf2RxFuel / tH)
            }) : rH(1 === zH ? `${jG}rxFuelPellet` : `${jG}rxFuelPellets`),
            tone: "noFuel" === SH.baf2RxState ? "danger" : SH.baf2RxFuel < 2 ? "warn" : null,
            share: SH.baf2RxFuel / hH.fuel,
            onExplain: () => {
              LH(`${jG}rxWhy_fuel`)
            }
          }), (0, vS.jsx)(wX, {
            kind: XH.kind,
            label: XH.label,
            number: XH.number,
            preview: XH.preview,
            note: XH.note,
            tone: XH.tone,
            share: XH.share,
            onExplain: () => {
              LH(XH.why)
            }
          })]
        }), (0, vS.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, vS.jsx)(ZX, {
            kind: "Fuel",
            step: EH,
            short: "noFuel" === SH.baf2RxState
          }), (0, vS.jsx)(ZX, {
            kind: XH.kind,
            step: EH,
            short: XH.short || "noWater" === SH.baf2RxState
          })]
        }), (0, vS.jsx)(wG, {
          view: BH,
          heat: SH.baf2RxHeat,
          settle: Math.min(Xz, uH.settle),
          settleLine: QH ? rH(`${jG}rxHeatSettles`, {
            pct: String(Math.round(uH.settle)),
            time: QS(rH, uH.settleS)
          }) : null,
          settleBad: uH.settle > 100,
          explain: LH
        }), (0, vS.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, vS.jsx)(ZX, {
            kind: "Power",
            step: EH
          }), (0, vS.jsx)(ZX, {
            kind: "Waste",
            step: CH && SH.baf2RxFuel - SH.baf2RxPu > 0 ? EH : 0,
            short: GH.full
          })]
        }), (0, vS.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, vS.jsx)(wX, {
            kind: "Power",
            label: rH(`${jG}rxPowerOut`),
            number: `\u26a1 ${Oz(SH.baf2RxOut)}/s`,
            preview: AH ? Oz(AH.out) : null,
            note: YH.note,
            share: YH.share,
            onExplain: () => {
              LH(`${jG}rxWhy_power`)
            }
          }), (0, vS.jsx)(wX, {
            kind: "Waste",
            label: rH(`${jG}rxWaste`),
            number: `${Math.floor(SH.baf2RxWaste)}/${hH.waste}`,
            note: GH.full ? rH(`${jG}rxWasteFull`) : null !== GH.fullInS ? rH(`${jG}rxWasteFullIn`, {
              time: QS(rH, GH.fullInS)
            }) : rH(`${jG}rxWasteSpent`),
            tone: "wasteFull" === SH.baf2RxState ? "danger" : GH.full ? "warn" : null,
            share: SH.baf2RxWaste / hH.waste,
            onExplain: () => {
              LH(`${jG}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function aG(HH) {
      let {
        view: BH,
        explain: LH
      } = HH;
      const {
        t: AH
      } = (0, Or.B)(), rH = BH.plan;
      if (!rH) return null;
      const SH = rH.fuelHeat <= 0 ? null : rH.cooling > 0 ? Math.min(Xz, 100 * rH.fuelHeat / rH.cooling) : Xz,
        hH = AH(`${jG}rxPlanAtFull`);
      return (0, vS.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, vS.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, vS.jsx)(wX, {
            kind: "Fuel",
            label: AH(`${jG}rxFuel`),
            number: AH(`${jG}rxPlanPerMin`, {
              amount: bz(rH.pelletsPerMin)
            }),
            note: AH(`${jG}rxPlanPellets`),
            onExplain: () => {
              LH(`${jG}rxWhy_fuel`)
            }
          }), (0, vS.jsx)(wX, {
            kind: "Water",
            label: AH(`${jG}rxWater`),
            number: `${zG(rH.waterPerS)}/s`,
            note: BH.status.baf2RxCryoOpen && rH.waterPerS > 0 ? AH(`${jG}rxPlanOrCryo`, {
              rate: zG(tz(rH, pH.h) * pH.n)
            }) : hH,
            onExplain: () => {
              LH(`${jG}rxWhy_water`)
            }
          })]
        }), (0, vS.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, vS.jsx)(ZX, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, vS.jsx)(ZX, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, vS.jsx)(wG, {
          view: BH,
          heat: null,
          settle: SH,
          settleLine: null === SH ? null : AH(`${jG}rxPlanHeat`, {
            pct: String(Math.round(SH))
          }),
          settleBad: null !== SH && SH > 100,
          explain: LH
        }), (0, vS.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, vS.jsx)(ZX, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, vS.jsx)(ZX, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, vS.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, vS.jsx)(wX, {
            kind: "Power",
            label: AH(`${jG}rxPowerOut`),
            number: `\u26a1 ${Oz(rH.max)}/s`,
            note: hH,
            onExplain: () => {
              LH(`${jG}rxWhy_power`)
            }
          }), (0, vS.jsx)(wX, {
            kind: "Waste",
            label: AH(`${jG}rxWaste`),
            number: AH(`${jG}rxPlanPerMin`, {
              amount: bz(rH.pelletsPerMin)
            }),
            note: AH(`${jG}rxWasteSpent`),
            onExplain: () => {
              LH(`${jG}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const sG = "buildAFactory2Game:",
      JG = {
        key: `${sG}rxWaiting`,
        params: {},
        tone: "info"
      };

    function iG(HH, BH) {
      return 0 !== (HH.baf2RxFlags & BH)
    }

    function pG(HH) {
      var BH, LH;
      let {
        store: rH,
        close: SH
      } = HH;
      const {
        t: hH
      } = (0, Or.B)(), tH = SG(rH), {
        explained: zH,
        hinting: CH,
        explain: EH,
        explainOnce: XH
      } = aX("baf2RxExplained"), GH = (0, AH.useCallback)(((HH, BH) => {
        EH(hH(HH, BH))
      }), [EH, hH]), YH = (0, AH.useCallback)(((HH, BH) => {
        XH(HH, hH(HH, BH))
      }), [XH, hH]), [uH, QH] = (0, AH.useState)(!1), [WH, MH] = (0, AH.useState)(!1), xH = null === tH || void 0 === tH ? void 0 : tH.status, vH = null === xH || void 0 === xH ? void 0 : xH.baf2RxAt.join(","), PH = !0 === (null === xH || void 0 === xH ? void 0 : xH.baf2RxFormed);
      (0, AH.useEffect)((() => {
        MH(!1), QH(!1)
      }), [vH, PH]), (0, AH.useEffect)((() => (rH.opened(), () => {
        rH.closed()
      })), [rH]);
      const TH = void 0 !== xH && iG(xH, MB),
        UH = xH ? PH ? Ez(xH) : null !== tH && void 0 !== tH && tH.plan ? function(HH, BH) {
          if (HH <= 0) return "off";
          if (BH <= 0) return "alarm";
          const LH = 100 * HH / BH;
          return LH < 50 ? "calm" : LH < Az ? "warm" : LH <= 100 ? "hot" : "alarm"
        }(tH.plan.fuelHeat, tH.plan.cooling) : "off" : "off",
        VH = xH ? Gz(xH) : null,
        OH = tH ? tH.waiting ? JG : PH ? UG(tH.status) : function(HH) {
          var BH, LH;
          const {
            status: AH
          } = HH;
          return VG({
            left: AH.baf2RxNeed.reduce(((HH, BH) => {
              let [, LH] = BH;
              return HH + LH
            }), 0),
            bad: AH.baf2RxBad,
            rods: null !== (BH = null === (LH = HH.plan) || void 0 === LH ? void 0 : LH.rods) && void 0 !== BH ? BH : 0,
            canFill: iG(AH, QB),
            melted: iG(AH, uB),
            idle: HH.looks.reduce(((HH, BH) => HH + (BH === yt ? 1 : 0)), 0)
          })
        }(tH) : null,
        bH = CH && null !== OH && ("ok" === OH.tone || "info" === OH.tone),
        kH = xH ? function(HH) {
          const BH = 0 !== (HH.baf2RxFlags & GB),
            LH = HH.baf2RxHeat < nt;
          return 0 !== (HH.baf2RxFlags & uB) || LH && (BH || !HH.baf2RxFormed) ? null : HH.baf2RxFormed && !BH ? {
            key: `${Cz}rxApartScram`,
            params: {}
          } : {
            key: `${Cz}rxApartCooling`,
            params: {
              pct: String(nt)
            }
          }
        }(xH) : null,
        [mH, oH, IH] = null !== (BH = null === tH || void 0 === tH ? void 0 : tH.dims) && void 0 !== BH ? BH : [0, 0, 0],
        fH = `${mH}\xd7${oH}\xd7${IH}`;
      return (0, vS.jsx)(Qh.b, {
        close: SH,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, vS.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, vS.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vS.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, vS.jsx)(tG, {
                mood: UH
              }), (0, vS.jsxs)("div", {
                children: [(0, vS.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: hH(`${sG}rxTitle`)
                }), tH && (0, vS.jsxs)("p", {
                  className: Pr()("Baf2RxSubtitle", PH && (null === VH || void 0 === VH ? void 0 : VH.tone)),
                  children: [PH && !TH ? (0, vS.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": hH(`${sG}rxChangeSize`),
                    onClick: () => {
                      if (!xH) return;
                      const HH = iG(xH, GB);
                      var BH;
                      (BH = {
                        scram: HH,
                        heat: xH.baf2RxHeat
                      }).scram && BH.heat < nt ? QH(!0) : GH(HH ? `${sG}rxResizeCooling` : `${sG}rxResizeHot`, {
                        pct: String(nt)
                      })
                    },
                    children: [fH, " \u270e"]
                  }) : fH, " \xb7 ", hH(PH ? null !== (LH = null === VH || void 0 === VH ? void 0 : VH.label) && void 0 !== LH ? LH : `${sG}rxState_running` : `${sG}rxSubPlanShort`)]
                })]
              })]
            }), (0, vS.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [tH && !TH && (0, vS.jsx)(hG, {
                kind: "reactor",
                busy: tH.busy.has("apart"),
                whyNot: kH ? () => {
                  GH(kH.key, kH.params)
                } : null,
                apart: () => {
                  rH.tap("apart", (() => {
                    rH.send("apart")
                  }))
                }
              }), (0, vS.jsx)(Wh.q, {
                onClick: SH
              })]
            })]
          }), tH && OH && (0, vS.jsxs)("div", {
            className: "Baf2RxBody",
            children: [PH ? (0, vS.jsx)(dG, {
              view: tH,
              explain: GH,
              preview: WG(tH.status)
            }) : (0, vS.jsx)(aG, {
              view: tH,
              explain: GH
            }), (0, vS.jsx)(sX, {
              text: bH ? `${PG(hH,OH)} ${hH(`${sG}rxTapHint`)}` : PG(hH, OH),
              tone: OH.tone,
              explained: zH
            }), TH ? (0, vS.jsxs)(vS.Fragment, {
              children: [(0, vS.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: hH(`${sG}rxNotYours`)
              }), (0, vS.jsx)(BG, {
                status: tH.status,
                store: rH,
                readOnly: !0
              })]
            }) : PH && !WH ? (0, vS.jsxs)(vS.Fragment, {
              children: [(0, vS.jsx)(fG, {
                view: tH,
                store: rH,
                explain: GH,
                explainOnce: YH
              }), void 0 !== tH.status.baf2RxLayout && pX(tH.status) && (0, vS.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, vS.jsx)(BG, {
                  status: tH.status,
                  store: rH,
                  readOnly: !1,
                  bare: !0
                }), (0, vS.jsx)(HG, {
                  status: tH.status,
                  store: rH,
                  busy: tH.busy.has("fill")
                })]
              })]
            }) : (0, vS.jsxs)(vS.Fragment, {
              children: [(0, vS.jsx)(lG, {
                view: tH,
                store: rH,
                keepSize: PH ? () => {
                  MH(!1)
                } : void 0
              }), Qz(tH.dims, tH.status.baf2RxDims) && (0, vS.jsx)(KG, {
                need: tH.status.baf2RxNeed,
                explain: GH
              }), (0, vS.jsx)(BG, {
                status: tH.status,
                store: rH,
                readOnly: !1
              })]
            }), uH && (0, vS.jsx)(rG, {
              id: "baf2ResizeTitle",
              title: `${sG}rxResizeConfirmTitle`,
              body: `${sG}rxResizeConfirmBody`,
              yes: `${sG}rxChangeSize`,
              cancel: () => {
                QH(!1)
              },
              confirm: () => {
                QH(!1), MH(!0)
              }
            })]
          })]
        })
      })
    }
    class yG {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(HH) {
        this.view = HH;
        for (const BH of this.listeners) BH()
      }
      get() {
        return this.view
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
    }

    function HY(HH) {
      let {
        commands: BH,
        store: LH,
        power: rH,
        water: SH,
        reactor: hH,
        battery: tH,
        collider: zH,
        terminal: CH,
        quests: EH,
        tutorial: XH,
        close: GH,
        leave: YH,
        askIslands: uH,
        showCore: QH,
        openSocial: WH
      } = HH;
      const {
        userContext: MH
      } = (0, mt.e)(), xH = kt.featureFlags.useSocialFeatures && MH.isLoggedIn(), [vH, PH] = (0, AH.useState)((() => LH.get()));
      (0, AH.useEffect)((() => LH.subscribe((() => {
        PH(LH.get())
      }))), [LH]);
      const TH = "islands" === (null === vH || void 0 === vH ? void 0 : vH.kind) ? vH.backToCore : void 0;
      return (0, vS.jsxs)(ch.Provider, {
        value: BH,
        children: ["core" === (null === vH || void 0 === vH ? void 0 : vH.kind) && (0, vS.jsx)(EX, {
          view: vH.core,
          close: GH,
          askIslands: uH
        }), "dropMap" === (null === vH || void 0 === vH ? void 0 : vH.kind) && (0, vS.jsx)(uX, {
          message: vH.dropMap,
          quests: EH,
          close: GH,
          leave: YH
        }), "islands" === (null === vH || void 0 === vH ? void 0 : vH.kind) && (0, vS.jsx)(lX, {
          message: vH.islands,
          arrivedAtMs: vH.arrivedAtMs,
          close: TH ? () => {
            QH(TH)
          } : GH,
          leave: YH,
          openSocial: xH ? WH : null
        }), "quests" === (null === vH || void 0 === vH ? void 0 : vH.kind) && (0, vS.jsx)(oE, {
          store: EH,
          tutorial: XH,
          close: GH
        }), "transfer" === (null === vH || void 0 === vH ? void 0 : vH.kind) && (0, vS.jsx)(iC, {
          message: vH.transfer,
          arrivedAtMs: vH.arrivedAtMs,
          close: GH,
          leave: YH
        }), "power" === (null === vH || void 0 === vH ? void 0 : vH.kind) && (0, vS.jsx)(Oh, {
          store: rH,
          close: GH
        }), "water" === (null === vH || void 0 === vH ? void 0 : vH.kind) && (0, vS.jsx)(Ct, {
          store: SH,
          close: GH
        }), "reactor" === (null === vH || void 0 === vH ? void 0 : vH.kind) && (0, vS.jsx)(pG, {
          store: hH,
          close: GH
        }), "battery" === (null === vH || void 0 === vH ? void 0 : vH.kind) && (0, vS.jsx)(eG, {
          store: tH,
          close: GH
        }), "collider" === (null === vH || void 0 === vH ? void 0 : vH.kind) && (0, vS.jsx)(XC, {
          store: zH,
          close: GH
        }), "terminal" === (null === vH || void 0 === vH ? void 0 : vH.kind) && (0, vS.jsx)(DX, {
          store: CH,
          close: GH,
          send: HH => {
            BH.send(HH)
          }
        })]
      })
    }
    var BY = LH(39370);

    function LY(HH, BH) {
      return HH.distSq - BH.distSq
    }
    class AY {
      constructor() {
        this.list = [], this.pool = []
      }
      add(HH, BH, LH, AH) {
        let rH = this.pool[this.list.length];
        rH || (rH = {
          x: 0,
          y: 0,
          distSq: 0,
          element: BH,
          liftRem: LH,
          dot: AH
        }, this.pool.push(rH)), rH.x = HH.x, rH.y = HH.y, rH.distSq = HH.distSq, rH.element = BH, rH.liftRem = LH, rH.dot = AH, this.list.push(rH)
      }
    }
    class rY {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = HH, this.sizes = new WeakMap, this.observer = new ResizeObserver((HH => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const BH of HH) {
            const HH = BH.borderBoxSize[0];
            "dot" !== BH.target.dataset.crowded && 0 !== HH.inlineSize && 0 !== HH.blockSize && this.sizes.set(BH.target, {
              width: HH.inlineSize,
              height: HH.blockSize
            })
          }
        })), this.remPx = 16, this.hX = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.Av = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.Av)
      }
      observe(HH) {
        this.observer.observe(HH)
      }
      unobserve(HH) {
        this.observer.unobserve(HH)
      }
      run(HH) {
        const BH = HH.list;
        BH.sort(LY);
        const LH = this.pxPerVw,
          AH = this.pxPerVh;
        this.hX.length = 0, this.hud && this.hX.push(...this.hud.boxes(performance.now()));
        for (const SH of BH) {
          var rH;
          const HH = this.sizes.get(SH.element);
          let BH = "no";
          if (HH && HH.width > 0) {
            const rH = SH.x * LH,
              hH = SH.y * AH - SH.liftRem * this.remPx;
            this.fit(rH, hH, HH.width, HH.height) || (BH = SH.dot && this.fit(rH, hH, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (rH = SH.element.dataset.crowded) && void 0 !== rH ? rH : "no") !== BH && ("no" === BH ? delete SH.element.dataset.crowded : SH.element.dataset.crowded = BH), "hidden" !== BH && (0, BY.d)(SH.element, SH.x, SH.y)
        }
        BH.length = 0
      }
      fit(HH, BH, LH, AH) {
        const rH = HH - LH / 2,
          SH = HH + LH / 2,
          hH = BH - AH,
          tH = this.hX;
        for (let zH = 0; zH < tH.length; zH += 4)
          if (rH < tH[zH + 1] - 2 && SH > tH[zH] + 2 && hH < tH[zH + 3] - 2 && BH > tH[zH + 2] + 2) return !1;
        return tH.push(rH, SH, hH, BH), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.Av)
      }
    }
    const SY = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class hY {
      constructor() {
        this.cards = SY.map((HH => document.getElementsByClassName(HH))), this.watched = SY.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(HH) {
        HH - this.refreshedAt > 1e3 && (this.refreshedAt = HH, this.stale = !0);
        for (let LH = 0; LH < this.cards.length; LH++) {
          var BH;
          const HH = null !== (BH = this.cards[LH][0]) && void 0 !== BH ? BH : null;
          HH !== this.watched[LH] && this.watch(LH, HH)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let HH = 0; HH < this.watched.length; HH++) this.watch(HH, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const HH = this.list;
        HH.length = 0;
        for (const BH of this.watched) {
          if (!BH || BH.closest(".NoRoom")) continue;
          const LH = BH.getBoundingClientRect();
          let AH = LH.top,
            rH = LH.bottom;
          if (BH === this.watched[0] && this.hud) {
            const HH = this.hud.getBoundingClientRect();
            AH = Math.max(AH, HH.top), rH = Math.min(rH, HH.bottom)
          }
          LH.width > 0 && rH > AH && HH.push(LH.left, LH.right, AH, rH)
        }
      }
      watch(HH, BH) {
        const LH = this.watched[HH];
        var AH, rH;
        (LH && this.sizes.unobserve(LH), this.watched[HH] = BH, this.stale = !0, BH && this.sizes.observe(BH), 0 === HH) && (null === (AH = this.hud) || void 0 === AH || AH.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (rH = null === BH || void 0 === BH ? void 0 : BH.closest(".Baf2QuestHud")) && void 0 !== rH ? rH : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var tY = LH(39374);
    class zY {
      constructor(HH) {
        this.onElement = HH, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(HH) {
        const BH = [];
        for (let LH = 0; LH + 4 < HH.length; LH += 5) {
          const AH = [HH[LH], HH[LH + 1], HH[LH + 2]];
          BH.push({
            key: AH.join(","),
            pos: AH,
            status: Br[HH[LH + 3]],
            kind: mB[HH[LH + 4]]
          })
        }
        this.markers = BH, this.keys = new Set(BH.map((HH => {
          let {
            key: BH
          } = HH;
          return BH
        }))), this.notify()
      }
      covers(HH) {
        return this.keys.has(HH)
      }
      get() {
        return this.markers
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      bind(HH) {
        let BH = this.refs.get(HH);
        return BH || (BH = BH => {
          const LH = this.elements.get(HH);
          var AH, rH;
          LH && (null === (AH = this.onElement) || void 0 === AH || AH.call(this, LH, !1));
          BH ? (this.elements.set(HH, BH), null === (rH = this.onElement) || void 0 === rH || rH.call(this, BH, !0)) : (this.elements.delete(HH), this.refs.delete(HH))
        }, this.refs.set(HH, BH)), BH
      }
      onAfterRender(HH, BH, LH) {
        for (const AH of this.markers) {
          const rH = this.elements.get(AH.key);
          if (!rH) continue;
          const SH = (0, tY.e)(rH, HH, BH, AH.pos, 1.05, 24);
          SH && LH.add(SH, rH, .45, !0)
        }
      }
      notify() {
        for (const HH of this.listeners) HH()
      }
    }
    const CY = {
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
    const EY = (0, AH.memo)((function(HH) {
        let {
          status: BH,
          kind: LH,
          bindRef: AH
        } = HH;
        const {
          t: rH
        } = (0, Or.B)(), SH = function(HH, BH) {
          var LH;
          if ("noFuel" === HH) {
            var AH, rH;
            const HH = null === (AH = cB[BH]) || void 0 === AH || null === (rH = AH.fuels) || void 0 === rH ? void 0 : rH.find((HH => AL.includes(HH)));
            return null !== HH && void 0 !== HH ? HH : CY.noFuel
          }
          return void 0 !== (null === (LH = cB[BH]) || void 0 === LH ? void 0 : LH.cryoMade) ? "noOutlet" === HH ? "Fluid Pipe" : "noInput" === HH ? "Biomass" : CY[HH] : CY[HH]
        }(BH, LH);
        return (0, vS.jsxs)("div", {
          className: Pr()("Baf2StallMarker", BH),
          ref: AH,
          hidden: !0,
          children: [SH && (0, vS.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, vS.jsx)(kr.e, {
              itemName: SH,
              amount: 0
            })
          }), (0, vS.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === BH ? "?" : "!"
          }), (0, vS.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: rH(`buildAFactory2Game:stallTag_${BH}`)
          })]
        })
      })),
      XY = (0, AH.memo)((function(HH) {
        let {
          controller: BH
        } = HH;
        const [LH, rH] = (0, AH.useState)((() => BH.get()));
        return (0, AH.useEffect)((() => (rH(BH.get()), BH.subscribe((() => {
          rH(BH.get())
        })))), [BH]), (0, vS.jsx)("div", {
          className: "Baf2StallMarkers",
          children: LH.map((HH => (0, vS.jsx)(EY, {
            status: HH.status,
            kind: HH.kind,
            bindRef: BH.bind(HH.key)
          }, HH.key)))
        })
      })),
      GY = QL.j + 150;
    class YY {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(HH, BH) {
        const LH = BH - HH;
        null === this.offset || LH < this.offset ? this.offset = LH : this.offset = Math.min(LH, this.offset + .02 * (BH - this.sampledAt)), this.sampledAt = BH
      }
      toLocal(HH) {
        var BH;
        return HH + (null !== (BH = this.offset) && void 0 !== BH ? BH : 0) + GY
      }
    }
    var uY = LH(39383);
    const QY = 15 * Math.PI / 180,
      WY = Math.SQRT2,
      MY = [4, 2];

    function xY(HH, BH) {
      const LH = [1 / 0, 1 / 0, 1 / 0],
        AH = [-1 / 0, -1 / 0, -1 / 0];
      for (const zH of HH)
        for (let HH = 0; HH < 3; HH++) LH[HH] = Math.min(LH[HH], zH[HH]), AH[HH] = Math.max(AH[HH], zH[HH]);
      const rH = (LH[0] + AH[0]) / 2,
        SH = (LH[1] + AH[1]) / 2,
        hH = (LH[2] + AH[2]) / 2;
      let tH = 0;
      for (const zH of HH) tH = Math.max(tH, Math.hypot(zH[0] - rH, zH[1] - SH, zH[2] - hH));
      return {
        x: rH,
        y: SH,
        z: hH,
        r: tH + BH
      }
    }

    function vY(HH, BH, LH) {
      const AH = BH.x - HH.x,
        rH = BH.y - HH.y,
        SH = BH.z - HH.z,
        hH = Math.sqrt(AH * AH + rH * rH + SH * SH);
      if (hH <= BH.r + 8) return 1;
      const tH = BH.r / hH,
        zH = Math.sqrt(1 - tH * tH),
        CH = zH < -HH.cosHalf,
        EH = (AH * HH.dx + rH * HH.dy + SH * HH.dz) / hH;
      if (!CH && EH < HH.cosHalf * zH - HH.sinHalf * tH) return 0;
      const XH = LH * WY * HH.frameMs * HH.pxPerBlock / (hH - BH.r);
      for (let GH = 0; GH < MY.length; GH++)
        if (XH * MY[GH] <= 1) return MY[GH];
      return 1
    }

    function PY(HH, BH) {
      return {
        name: HH,
        at: BH,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const TY = [0, 0, 0];

    function UY(HH, BH, LH) {
      let [, AH, rH, SH, hH, tH] = BH;
      const zH = QL.e * (null !== hH && void 0 !== hH ? hH : 1),
        CH = [];
      for (let YH = 0; YH < AH.length; YH += 3) CH.push([AH[YH] + .5, AH[YH + 1] + .65, AH[YH + 2] + .5]);
      const EH = [];
      for (let YH = 0; YH < CH.length - 1; YH++) {
        const [HH, BH] = [CH[YH], CH[YH + 1]];
        EH.push([(HH[0] + BH[0]) / 2, (HH[1] + BH[1]) / 2, (HH[2] + BH[2]) / 2])
      }
      const XH = CH.slice(1, -1),
        GH = new Uint8Array(XH.length);
      for (const YH of null !== tH && void 0 !== tH ? tH : []) GH[YH >> 1] |= 1 & YH ? 2 : 1;
      return {
        island: HH,
        length: XH.length,
        loop: SH,
        cellsPerMs: zH,
        edges: EH,
        yQ: XH,
        bounds: xY([...EH, ...XH], .3),
        changed: !0,
        culled: !1,
        hide: GH,
        items: rH.map((HH => {
          let [BH, AH] = HH;
          return PY(BH, (0, QL.z)(BH, AH, LH, zH).at)
        }))
      }
    }

    function VY(HH, BH) {
      const {
        items: LH
      } = HH;
      if (0 === LH.length) return;
      const AH = HH.length / HH.cellsPerMs,
        rH = Math.floor((BH - LH[0].at) / AH) - 1;
      if (rH > 0)
        for (const SH of LH) SH.at += rH * AH
    }

    function OY(HH, BH) {
      const LH = Math.min(Math.floor(BH), HH.length - 1),
        AH = HH.hide[LH];
      return 0 !== AH && 0 !== (AH & (BH - LH < .5 ? 1 : 2))
    }

    function bY(HH, BH) {
      const LH = Math.min(Math.floor(BH), HH.length - 1),
        AH = BH - LH,
        rH = AH < .5,
        SH = rH ? HH.edges[LH] : HH.yQ[LH],
        hH = rH ? HH.yQ[LH] : HH.edges[LH + 1],
        tH = rH ? 2 * AH : 2 * AH - 1;
      TY[0] = SH[0] + (hH[0] - SH[0]) * tH, TY[1] = SH[1] + (hH[1] - SH[1]) * tH, TY[2] = SH[2] + (hH[2] - SH[2]) * tH
    }
    const kY = Math.PI / 4;
    class mY {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new YY, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.Av = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(HH) {
        const BH = performance.now();
        this.clock.sample(HH.baf2BeltLinesAt, BH), this.queue(HH.baf2BeltLinesAt, HH, 0, null, null, 0), this.applyDue(BH)
      }
      onMoves(HH) {
        const BH = performance.now(),
          LH = HH.baf2BeltMovesAt;
        this.clock.sample(LH, BH);
        for (const [AH, rH, SH, hH] of HH.baf2BeltMoveList) null === rH ? this.queue(LH - SH, null, AH, null, null, null !== hH && void 0 !== hH ? hH : 0) : this.queue(LH - SH, null, AH, rH, null !== hH && void 0 !== hH ? hH : null, 0);
        this.applyDue(BH)
      }
      start(HH) {
        this.pool = new uY.d(HH, {
          scale: .3,
          yaw: kY
        }, 64), this.Av(), window.addEventListener("resize", this.Av)
      }
      onAfterRender(HH) {
        const {
          pool: BH
        } = this;
        if (!BH) return;
        const LH = performance.now(),
          AH = LH - this.lastRenderAt;
        this.lastRenderAt = LH, AH < 100 && (this.frameMs += .1 * (AH - this.frameMs));
        const rH = LH + this.frameMs;
        this.applyDue(rH);
        const SH = HH.cameraPosition,
          hH = BH.follow(SH);
        this.setView(HH, SH);
        const tH = this.frame++;
        for (let zH = 0; zH < this.shown.length; zH++) {
          const HH = this.shown[zH],
            LH = vY(this.view, HH.bounds, HH.cellsPerMs),
            AH = HH.culled && 0 !== LH;
          if (HH.culled = 0 === LH, !hH && !HH.changed && !AH && (0 === LH || (tH + zH) % LH !== 0)) continue;
          HH.changed = !1, HH.loop && (VY(HH, rH), (0, QL.s)(HH.items, HH.length, rH, HH.cellsPerMs));
          let SH = HH.length;
          for (let tH = 0; tH < HH.items.length; tH++) {
            const LH = HH.items[tH],
              AH = (0, QL.A)(LH.at, SH, rH, HH.cellsPerMs);
            if (SH = AH - QL.l, OY(HH, AH)) {
              null === LH.kind || LH.hidden || (LH.kind.hide(LH.slot), LH.hidden = !0);
              continue
            }
            let zH = LH.kind;
            if (null === zH) {
              if (zH = BH.kindOf(LH.name), null === zH) continue;
              LH.kind = zH, LH.slot = zH.take(), LH.hidden = !0, LH.drawn = NaN
            } else if (AH === LH.drawn && !LH.hidden && !hH) continue;
            bY(HH, AH), zH.write(LH.slot, TY[0], TY[1], TY[2]), LH.hidden = !1, LH.drawn = AH
          }
        }
        BH.commit()
      }
      dispose() {
        var HH;
        window.removeEventListener("resize", this.Av), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (HH = this.pool) || void 0 === HH || HH.dispose(), this.pool = null
      }
      setView(HH, BH) {
        const {
          cameraDir: LH,
          lastDir: AH
        } = this, rH = HH.cameraDirection;
        for (let EH = 0; EH < 3; EH++) AH[EH] = LH[EH], LH[EH] = rH[EH];
        const SH = LH[0] * AH[0] + LH[1] * AH[1] + LH[2] * AH[2],
          hH = Number.isNaN(SH) ? 0 : Math.acos(Math.min(1, Math.max(-1, SH))),
          {
            width: tH,
            height: zH
          } = this,
          CH = HH.tanHalfFovX;
        ! function(HH, BH, LH, AH, rH, SH, hH) {
          let tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          HH.x = BH[0], HH.y = BH[1], HH.z = BH[2], HH.dx = LH[0], HH.dy = LH[1], HH.dz = LH[2];
          const zH = Math.min(Math.PI, Math.atan(Math.sqrt(AH * AH + rH * rH)) + QY + tH);
          HH.cosHalf = Math.cos(zH), HH.sinHalf = Math.sin(zH), HH.pxPerBlock = SH / (2 * rH), HH.frameMs = hH
        }(this.view, BH, LH, CH, CH * zH / tH, zH * window.devicePixelRatio, this.frameMs, hH)
      }
      queue(HH, BH, LH, AH, rH, SH) {
        const hH = Math.max(this.clock.toLocal(HH), this.lastPendingAt);
        this.lastPendingAt = hH, this.pending.push({
          at: hH,
          lines: BH,
          line: LH,
          name: AH,
          pos: rH,
          idx: SH
        })
      }
      applyDue(HH) {
        const {
          pending: BH
        } = this;
        for (; this.pendingHead < BH.length && BH[this.pendingHead].at <= HH;) {
          const HH = BH[this.pendingHead++];
          if (HH.lines) this.applyLines(HH.lines, HH.at), HH.lines = null;
          else {
            const BH = this.lines.get(HH.line);
            BH && this.applyMove(BH, HH, HH.at)
          }
        }
        this.pendingHead === BH.length ? (BH.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > BH.length && (BH.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(HH, BH) {
        this.clearIsland(HH.baf2BeltIsland);
        for (const LH of HH.baf2BeltLineList) this.lines.set(LH[0], UY(HH.baf2BeltIsland, LH, BH));
        this.shown = [...this.lines.values()]
      }
      applyMove(HH, BH, LH) {
        let {
          name: AH,
          pos: rH,
          idx: SH
        } = BH;
        HH.changed = !0, HH.loop && (VY(HH, LH), (0, QL.s)(HH.items, HH.length, LH, HH.cellsPerMs)), null !== AH && null !== rH ? (0, QL.v)(HH.items, HH.length, PY(AH, LH), rH, LH, HH.cellsPerMs) : null !== AH ? HH.items.push(PY(AH, LH)) : HH.items.length > SH && this.release((0, QL.C)(HH.items, HH.length, LH, HH.cellsPerMs, SH))
      }
      clearIsland(HH) {
        for (const [BH, LH] of this.lines)
          if (LH.island === HH) {
            for (const HH of LH.items) this.release(HH);
            this.lines.delete(BH)
          }
      }
      release(HH) {
        null !== HH.kind && (HH.kind.release(HH.slot), HH.kind = null, HH.slot = -1, HH.hidden = !0, HH.drawn = NaN)
      }
    }
    var oY = LH(37472),
      IY = LH(39388);

    function fY(HH) {
      let {
        depth: BH,
        store: LH,
        t: rH
      } = HH;
      const SH = function(HH) {
        const [BH, LH] = (0, AH.useState)(HH.lastPlayerY());
        return (0, pC.d)(cr, LH), (0, AH.useEffect)((() => {
          LH(HH.lastPlayerY())
        }), [HH]), BH
      }(LH);
      if (null === SH) return null;
      const [hH, tH] = BH, zH = SH > hH ? hH : null !== tH && SH < tH ? tH : null, CH = {
        y: uS(SH),
        target: null === zH ? "" : uS(zH)
      };
      return (0, vS.jsx)("span", {
        className: Pr()("Baf2QuestDepth", {
          Reached: null === zH
        }),
        children: rH(`${LE}${null===zH?"questDepthReached":"questDepth"}`, CH)
      })
    }

    function lY(HH) {
      let {
        also: BH,
        view: LH,
        t: AH
      } = HH;
      return (0, vS.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, vS.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, vS.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, vS.jsx)("strong", {
            children: AH(`${LE}questAlsoDownHere`)
          }), (0, vS.jsx)("span", {
            className: "Baf2QuestChips",
            children: BH.map((HH => {
              let [BH, rH, SH, hH] = HH;
              return (0, vS.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": AH(`${LE}questAlsoItem`, {
                  item: rE(AH, LH.itemNames[BH], BH),
                  have: String(rH),
                  need: String(SH)
                }),
                children: [(0, vS.jsx)(tE, {
                  item: BH
                }), (0, vS.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${rH}/${SH}`
                }), null !== hH && (0, vS.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: AH(`${LE}questAlsoDepth`, {
                    y: uS(hH)
                  })
                })]
              }, BH)
            }))
          })]
        })]
      })
    }
    var KY = LH(3770);

    function cY(HH) {
      let {
        expanded: BH,
        inventoryOpen: LH,
        children: rH
      } = HH;
      const SH = (0, AH.useRef)(null);
      return (0, AH.useEffect)((() => {
        const HH = SH.current,
          BH = null === HH || void 0 === HH ? void 0 : HH.closest(".RightElements"),
          AH = null === HH || void 0 === HH ? void 0 : HH.firstElementChild;
        if (!HH || !BH || !AH) return;
        return (0, IY.c)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [BH, AH], (() => {
          const rH = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === rH.length) return;
          const SH = Math.max(...rH.map((HH => HH.getBoundingClientRect().bottom))),
            hH = BH.getBoundingClientRect(),
            tH = LH ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (tH) {
            const BH = parseFloat(getComputedStyle(AH).marginLeft) + parseFloat(getComputedStyle(AH).marginRight),
              LH = hH.right - tH.getBoundingClientRect().right - 8 - BH;
            HH.style.setProperty("--baf2-quest-room", `${LH}px`), HH.classList.toggle("NoRoom", LH < 150)
          } else HH.style.removeProperty("--baf2-quest-room"), HH.classList.remove("NoRoom");
          const zH = SH - hH.top + 8,
            CH = function(HH, BH, LH) {
              const AH = BH.getBoundingClientRect(),
                rH = HH.getBoundingClientRect(),
                SH = (0, KY.e)(rH.left, rH.right, AH.top + LH);
              if (null !== SH && SH < AH.bottom) return SH - AH.top;
              return AH.height - (parseFloat(getComputedStyle(BH).paddingBottom) || 0)
            }(HH, BH, zH) - 8,
            EH = window.innerHeight / 2 - hH.top,
            {
              top: XH,
              maxHeight: GH
            } = function(HH, BH, LH, AH, rH) {
              const SH = Math.min(LH, Math.max(0, BH - HH)),
                hH = rH ? HH : Math.max(HH, Math.min(AH - SH / 2, BH - SH));
              return {
                top: hH,
                maxHeight: Math.max(0, BH - hH)
              }
            }(zH, CH, function(HH) {
              const BH = HH.firstElementChild,
                LH = BH ? BH.scrollHeight - BH.clientHeight : 0;
              return HH.getBoundingClientRect().height + Math.max(0, LH)
            }(AH), EH, xS());
          HH.style.top = `${XH}px`, HH.style.maxHeight = `${GH}px`
        }))
      }), [LH]), (0, vS.jsx)("div", {
        ref: SH,
        className: Pr()("Baf2QuestHud", {
          Expanded: BH
        }),
        children: rH
      })
    }

    function eY(HH) {
      let {
        amount: BH,
        t: LH
      } = HH;
      return (0, vS.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, vS.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, vS.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: LH(`${LE}questStepsDone`, {
            amount: String(BH)
          })
        })]
      })
    }

    function qY(HH) {
      let {
        pulse: BH
      } = HH;
      return 0 === BH ? null : (0, vS.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, BH)
    }

    function gY(HH) {
      var BH;
      let {
        store: LH
      } = HH;
      const rH = (0, pC.e)(Kr, LH.get()),
        [SH, hH] = (0, AH.useState)(!1),
        {
          t: tH
        } = (0, Or.B)(),
        zH = (0, WS.c)(MS),
        {
          openInGameMenuName: CH,
          openEverythingMenuName: EH
        } = (0, Mr.m)(["openInGameMenuName", "openEverythingMenuName"]),
        XH = "inventory" === CH && null === EH,
        GH = null !== CH && !XH || null !== EH;
      if (! function(HH) {
          return null !== HH.name || null !== HH.side
        }(rH) || GH || "off" === rH.tutorial) return null;
      const YH = jr(rH.rows),
        uH = YH.filter((HH => HH.done)).length,
        QH = function(HH, BH) {
          const LH = Dr(HH);
          let AH = 0;
          return HH.filter(((HH, rH) => !!HH.justFinished || !(HH.done || rH < LH || AH > BH) && (AH++, !0)))
        }(rH.rows, zH ? 0 : 2),
        WH = zH ? QH : function(HH, BH) {
          const LH = BH.filter((HH => !HH.justFinished));
          if (LH.length < 2) return [...BH];
          const AH = HH.indexOf(LH[0]),
            rH = HH.indexOf(LH[LH.length - 1]),
            SH = new Set(jr(HH));
          return HH.filter(((HH, LH) => BH.includes(HH) || HH.done && SH.has(HH) && LH > AH && LH < rH))
        }(rH.rows, QH),
        MH = SH ? rH.rows : WH,
        xH = SH || zH ? [] : function(HH, BH) {
          const LH = new Array(BH.length + 1).fill(0),
            AH = new Set(jr(HH));
          let rH = 0;
          for (const SH of HH) rH < BH.length && SH === BH[rH] ? rH++ : SH.done && AH.has(SH) && LH[rH]++;
          return LH
        }(rH.rows, WH),
        vH = SH || WH.length < rH.rows.length || null !== rH.reward,
        PH = Rr(rH),
        TH = PH ? tH(`${LE}questLineComplete`) : rH.tier ? EE(tH, rH.tier) : tH(`${LE}currentQuest`),
        UH = function(HH) {
          var BH, LH;
          if (Rr(HH)) return null;
          const AH = null === (BH = HH.chapters) || void 0 === BH ? void 0 : BH.find((BH => {
            let [LH] = BH;
            return LH === HH.tier
          }));
          if (!AH) return null;
          const rH = AH[1].filter((HH => !HH[4]));
          if (0 === rH.length) return null;
          const SH = null === (LH = HH.name) || void 0 === LH ? void 0 : LH[0],
            hH = HH => rH.findIndex((BH => BH[0] === SH && (!HH || !BH[3]))),
            tH = hH(!0),
            zH = tH >= 0 ? tH : hH(!1);
          if (zH >= 0) return [zH + 1, rH.length];
          const CH = rH.filter((HH => HH[3])).length;
          return [Math.min(CH + 1, rH.length), rH.length]
        }(rH);
      return (0, vS.jsx)(oY.e, {
        placement: "topRight",
        children: (0, vS.jsx)(cY, {
          expanded: SH,
          inventoryOpen: XH,
          children: (0, vS.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: AE,
            children: [null !== rH.name && (0, vS.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, vS.jsx)(qY, {
                pulse: rH.pulse
              }), (0, vS.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, vS.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [TH, UH && (0, vS.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": tH(`${LE}questPlaceLabel`, {
                      n: String(UH[0]),
                      total: String(UH[1])
                    }),
                    children: tH(`${LE}questPlace`, {
                      n: String(UH[0]),
                      total: String(UH[1])
                    })
                  }), rH.tier && rH.core && !PH && (0, vS.jsx)(XE, {
                    core: rH.core,
                    t: tH
                  })]
                })
              }), (0, vS.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: tH(`${LE}${rH.name[0]}`, SE(rH.name[1]))
              }), (YH.length > 1 || vH) && (0, vS.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [YH.length > 1 && (0, vS.jsx)(GE, {
                  rows: YH,
                  t: tH
                }), vH && (0, vS.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": SH,
                  onClick: () => {
                    hH(!SH)
                  },
                  children: [(0, vS.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: tH(`${LE}questStepsToggle`, {
                      done: String(uH),
                      total: String(YH.length)
                    })
                  }), (0, vS.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: SH ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, vS.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [MH.map(((HH, BH) => {
                  var SH;
                  const hH = HH.current && rH.depth;
                  return (0, vS.jsxs)(AH.Fragment, {
                    children: [(null !== (SH = xH[BH]) && void 0 !== SH ? SH : 0) > 0 && (0, vS.jsx)(eY, {
                      amount: xH[BH],
                      t: tH
                    }), (0, vS.jsx)(YE, {
                      row: HH,
                      view: rH,
                      t: tH,
                      extra: hH && (0, vS.jsx)(fY, {
                        depth: hH,
                        store: LH,
                        t: tH
                      })
                    })]
                  }, HH.id)
                })), (null !== (BH = xH[MH.length]) && void 0 !== BH ? BH : 0) > 0 && (0, vS.jsx)(eY, {
                  amount: xH[MH.length],
                  t: tH
                }), rH.also.length > 0 && (0, vS.jsx)(lY, {
                  also: rH.also,
                  view: rH,
                  t: tH
                })]
              }), SH && rH.reward && (0, vS.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [tH(`${LE}questReward`), (0, vS.jsx)(tE, {
                  item: rH.reward
                }), rE(tH, rH.itemNames[rH.reward], rH.reward)]
              })]
            }), rH.side && (0, vS.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [gr(rH, Date.now()) && (0, vS.jsx)(qY, {
                pulse: rH.sideCameUpAt
              }), (0, vS.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: tH(`${LE}questSide`)
              }), (0, vS.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: tH(`${LE}${rH.side.name[0]}`, SE(rH.side.name[1]))
              }), (0, vS.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, vS.jsx)(YE, {
                  row: rH.side.row,
                  view: rH,
                  t: tH
                })
              })]
            })]
          })
        })
      })
    }
    const NY = "baf2ToastView";
    class RY {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = HH, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: HH,
          holdMs: BH
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const HH = this.dropCovered();
          HH && this.show(HH.message, HH.holdMs)
        }), 250));
        const LH = this.dropCovered();
        null !== LH && (LH.holdMs > 0 || "baf2ToastCelebrate" === LH.message.baf2ToastStyle) && "baf2ToastCelebrate" !== HH.baf2ToastStyle && this.show(LH.message, LH.holdMs);
        const AH = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== HH.baf2ToastStyle && AH > 0) return this.pending = {
          message: HH,
          holdMs: BH
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const HH = this.pending;
          this.pending = null, HH && this.present(HH.message, HH.holdMs)
        }), AH));
        this.present(HH, BH)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(HH, BH) {
        this.clearTimers(), this.pending = null;
        const LH = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: HH.baf2ToastText,
          style: HH.baf2ToastStyle,
          swapped: LH,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === HH.baf2ToastStyle ? 1500 : BH), this.AX();
        const AH = Math.min(8e3, Math.max(1e3, HH.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), AH)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.AX(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.AX()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const HH = this.covering;
        return this.covering = null, HH
      }
      AX() {
        fr.k.AX(NY, this.view, !0)
      }
    }
    var jY = LH(69);
    const nY = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function FY(HH) {
      let {
        store: BH
      } = HH;
      const LH = (0, pC.e)(NY, BH.get()),
        {
          openInGameMenuName: AH,
          openEverythingMenuName: rH
        } = (0, Mr.m)(["openInGameMenuName", "openEverythingMenuName"]),
        SH = LH && (0, vS.jsxs)("div", {
          className: Pr()("Baf2Toast", nY[LH.style], {
            Swapped: LH.swapped,
            Leaving: LH.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === LH.style && (0, vS.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, vS.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, vS.jsx)(mr.b, {
              text: LH.text
            })
          })]
        }, LH.id);
      return null !== AH && null === rH ? (0, jY.createPortal)((0, vS.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: SH
      }), document.body) : (0, vS.jsx)(oY.e, {
        children: SH
      })
    }
    const DY = "baf2AreaView";
    class wY {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.LX = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.LX = null
      }
      arrive(HH, BH) {
        BH && function(HH) {
          return "home" === HH.baf2AreaPlace && void 0 !== HH.baf2AreaNameText
        }(HH) ? this.LX = HH : this.show(HH)
      }
      release() {
        const HH = this.LX;
        null !== HH && this.show(HH)
      }
      show(HH) {
        this.clearTimer(), this.LX = null;
        const BH = void 0 === HH.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: HH,
          ms: BH
        }, this.AX(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.AX()
        }), BH)
      }
      dispose() {
        this.clearTimer(), this.LX = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      AX() {
        fr.k.AX(DY, this.view, !0)
      }
    }

    function ZY(HH) {
      var BH;
      let {
        store: LH
      } = HH;
      const {
        t: AH
      } = (0, Or.B)(), rH = (0, pC.e)(DY, LH.get());
      if (!rH) return null;
      const {
        area: SH
      } = rH, hH = SH.baf2AreaResetMinutes;
      return (0, vS.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": SH.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${rH.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, vS.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), SH.baf2AreaHeading && (0, vS.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: AH(SH.baf2AreaHeading)
        }), (0, vS.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (BH = SH.baf2AreaNameText) && void 0 !== BH ? BH : AH(SH.baf2AreaName)
        }), SH.baf2AreaNote && (0, vS.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: AH(SH.baf2AreaNote)
        }), void 0 !== hH && (0, vS.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: AH("buildAFactory2Game:areaWildsReset", {
            time: QS(AH, 60 * hH)
          })
        })]
      }, rH.id)
    }
    const dY = "baf2GearGauge";
    class aY {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      lT(HH) {
        var BH;
        if (this.clearLinger(), null === HH.gearPowerKind) return void this.set(null);
        const LH = "jetpack" === HH.gearPowerKind && (AH = HH.gearChargeState, rH = HH.gearCharge, "flying" === AH || "charging" === AH || "outOfCharge" === AH || "ceiling" === AH || "offPlot" === AH || "noPower" === AH && rH <= 0);
        var AH, rH;
        const SH = !0 === (null === (BH = this.view) || void 0 === BH ? void 0 : BH.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          hH = LH || "jetpack" === HH.gearPowerKind && SH;
        this.set({
          gauge: HH,
          jetShown: hH
        }), hH && !LH && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(HH) {
        this.view = HH, fr.k.AX(dY, HH, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const sY = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function JY(HH) {
      let {
        store: BH
      } = HH;
      const LH = (0, pC.e)(dY, BH.get());
      return LH ? "jetpack" === LH.gauge.gearPowerKind ? (0, vS.jsx)(iY, {
        view: LH
      }) : (0, vS.jsx)(pY, {
        gauge: LH.gauge
      }) : null
    }

    function iY(HH) {
      let {
        view: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)(), {
        gauge: AH
      } = BH, rH = AH.gearChargeMax > 0 ? Math.max(0, Math.min(1, AH.gearCharge / AH.gearChargeMax)) : 0, SH = sY[AH.gearChargeState], hH = SH ? LH(SH) : null;
      return (0, vS.jsxs)("div", {
        className: Pr()("Baf2JetArc", {
          Shown: BH.jetShown,
          Low: rH < .2,
          Warm: rH >= .2 && rH < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - rH)
        },
        "aria-hidden": !BH.jetShown,
        children: [(0, vS.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, vS.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: yY,
            pathLength: 100
          }), (0, vS.jsx)("path", {
            className: "Baf2JetArcFill",
            d: yY,
            pathLength: 100
          })]
        }), (0, vS.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * rH), "%"]
        }), hH && (0, vS.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: hH
        })]
      })
    }

    function pY(HH) {
      let {
        gauge: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)(), AH = function(HH, BH) {
        switch (BH.gearPowerKind) {
          case "skyPack":
            return HH("buildAFactory2Game:gearSkyPack", {
              charge: BH.gearCharge,
              max: BH.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return HH("buildAFactory2Game:gearIslandDraw", {
              power: iH(BH.gearIslandPower),
              cost: iH(BH.gearCostPerUse)
            });
          case "barrier":
            return HH("buildAFactory2Game:gearBarrier", {
              shield: Math.round(BH.gearCharge),
              max: BH.gearChargeMax,
              power: iH(BH.gearIslandPower)
            });
          default:
            return null
        }
      }(LH, BH);
      return null === AH ? null : (0, vS.jsx)(oY.e, {
        children: (0, vS.jsx)("div", {
          className: Pr()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === BH.gearChargeState || "outOfCharge" === BH.gearChargeState
          }),
          role: "status",
          children: AH
        })
      })
    }
    const yY = (() => {
      const HH = HH => {
        const BH = HH * Math.PI / 180;
        return `${(40*Math.cos(BH)).toFixed(2)} ${(40*Math.sin(BH)).toFixed(2)}`
      };
      return `M ${HH(160)} A 40 40 0 1 1 ${HH(380)}`
    })();
    class Hu {
      constructor(HH) {
        this.onElement = HH, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      lT(HH) {
        let BH = HH.baf2LabelsReset || HH.baf2LabelsIsland !== this.island;
        BH && (this.labels.clear(), this.island = HH.baf2LabelsIsland);
        for (const [LH, AH, rH, SH, hH] of HH.baf2LabelsList) {
          const HH = `${LH},${AH},${rH}`,
            tH = this.labels.get(HH);
          null === SH ? BH = this.labels.delete(HH) || BH : tH && tH.item === SH && (tH.count === hH || tH.count >= 0 && hH >= 0) ? tH.count !== hH && (tH.count = hH, this.writeCount(HH, hH)) : (this.labels.set(HH, {
            key: HH,
            pos: [LH, AH, rH],
            item: SH,
            count: hH
          }), this.writeCount(HH, hH), BH = !0)
        }
        if (this.changes++, BH) {
          this.snapshot = [...this.labels.values()];
          for (const HH of this.listeners) HH()
        }
      }
      bindCount(HH) {
        const BH = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${HH}`;
        let LH = this.countRefs.get(BH);
        return LH || (LH = LH => {
          var AH, rH;
          LH ? (this.countElements.set(BH, LH), this.writeCount(HH, null !== (AH = null === (rH = this.labels.get(HH)) || void 0 === rH ? void 0 : rH.count) && void 0 !== AH ? AH : -1)) : (this.countElements.delete(BH), this.countRefs.delete(BH))
        }, this.countRefs.set(BH, LH)), LH
      }
      setCountWords(HH) {
        this.countWords = HH;
        for (const [BH, LH] of this.labels) this.writePart(`words|${BH}`, HH(LH.count), LH.count)
      }
      writeCount(HH, BH) {
        this.writePart(`bare|${HH}`, YS(BH), BH), this.countElements.has(`words|${HH}`) && this.writePart(`words|${HH}`, this.countWords(BH), BH)
      }
      writePart(HH, BH, LH) {
        const AH = this.countElements.get(HH);
        if (!AH || LH < 0) return;
        const rH = AH.firstChild;
        rH && 3 === rH.nodeType && !rH.nextSibling ? rH.nodeValue !== BH && (rH.nodeValue = BH) : AH.textContent !== BH && (AH.textContent = BH)
      }
      list() {
        return this.snapshot
      }
      at(HH) {
        return this.labels.get(`${HH[0]},${HH[1]},${HH[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      bind(HH) {
        let BH = this.refs.get(HH);
        return BH || (BH = BH => {
          const LH = this.elements.get(HH);
          var AH, rH;
          LH && (null === (AH = this.onElement) || void 0 === AH || AH.call(this, LH, !1));
          BH ? (this.elements.set(HH, BH), null === (rH = this.onElement) || void 0 === rH || rH.call(this, BH, !0)) : (this.elements.delete(HH), this.refs.delete(HH))
        }, this.refs.set(HH, BH)), BH
      }
      onAfterRender(HH, BH, LH, AH) {
        for (const rH of this.snapshot) {
          const SH = this.elements.get(rH.key);
          if (!SH) continue;
          if (AH(rH.key)) {
            (0, BY.e)(SH, !0);
            continue
          }
          const hH = (0, tY.e)(SH, HH, BH, rH.pos, 1.1, 24);
          hH && LH.add(hH, SH, 0, !1)
        }
      }
    }
    const Bu = (0, AH.memo)((function(HH) {
        let {
          item: BH
        } = HH;
        return (0, vS.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, vS.jsx)(kr.e, {
            itemName: BH,
            amount: 0
          })
        })
      })),
      Lu = (0, AH.memo)((function(HH) {
        let {
          label: BH,
          bindRef: LH,
          countRef: AH,
          wordsRef: rH
        } = HH;
        return (0, vS.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: LH,
          hidden: !0,
          children: [(0, vS.jsx)(Bu, {
            item: BH.item
          }), BH.count >= 0 && (0, vS.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, vS.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: rH
            }), (0, vS.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: AH
            })]
          })]
        })
      })),
      Au = (0, AH.memo)((function(HH) {
        let {
          store: BH
        } = HH;
        const {
          t: LH
        } = (0, Or.B)(), [rH, SH] = (0, AH.useState)((() => BH.list()));
        return (0, AH.useEffect)((() => (SH(BH.list()), BH.subscribe((() => {
          SH(BH.list())
        })))), [BH]), (0, AH.useEffect)((() => {
          BH.setCountWords((HH => LH("buildAFactory2Game:labelSiloCount", {
            count: YS(HH)
          })))
        }), [BH, LH]), (0, vS.jsx)("div", {
          className: "Baf2IslandLabels",
          children: rH.map((HH => -2 === HH.count ? null : (0, vS.jsx)(Lu, {
            label: HH,
            bindRef: BH.bind(HH.key),
            countRef: BH.bindCount(HH.key),
            wordsRef: BH.bindCount(HH.key, "words")
          }, HH.key)))
        })
      })),
      ru = {
        read: () => !0,
        write: () => {}
      };

    function Su(HH) {
      return `${HH[0]},${HH[1]},${HH[2]}`
    }

    function hu(HH) {
      let [BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH] = HH;
      const YH = void 0 === XH || void 0 === GH ? function(HH) {
        return [Math.floor((HH - 1) / 2), 0]
      }(SH) : [XH, GH];
      return {
        kind: 0 === zH ? "reactor" : "battery",
        box: FL([BH, LH, AH], rH, SH, hH, tH, YH),
        formed: 1 === CH,
        level: EH
      }
    }
    class tu {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ru;
        this.guideSetting = HH, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = HH.read()
      }
      lT(HH) {
        var BH;
        const LH = new Map;
        for (const AH of HH.baf2RxPlanList) {
          const HH = hu(AH);
          LH.set(Su(HH.box.ctrl), HH)
        }
        this.plans = LH, this.layouts = new Map((null !== (BH = HH.baf2RxLayouts) && void 0 !== BH ? BH : []).map((HH => {
          let [BH, LH, AH, rH] = HH;
          return [Su([BH, LH, AH]), rH]
        }))), this.predicted.clear(), HH.baf2RxFormedAt && (this.formed = {
          ctrl: HH.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const AH of [...this.startersOff]) {
          const HH = LH.get(AH);
          HH && !HH.formed || this.startersOff.delete(AH)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((HH => this.planByKey(HH)))
      }
      planAt(HH) {
        return this.planByKey(Su(HH))
      }
      predictSize(HH, BH) {
        this.predicted.set(Su(HH), BH), this.changed()
      }
      unpredict(HH) {
        this.predicted.delete(Su(HH)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(HH) {
        var BH;
        const LH = Su(HH);
        return this.predicted.has(LH) ? null : null !== (BH = this.layouts.get(LH)) && void 0 !== BH ? BH : null
      }
      showsStarter(HH) {
        return !this.startersOff.has(Su(HH))
      }
      setStarter(HH, BH) {
        const LH = Su(HH);
        BH ? this.startersOff.delete(LH) : this.startersOff.add(LH), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(HH) {
        this.guide = HH, this.guideSetting.write(HH), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(HH) {
        const BH = this.plans.get(HH);
        if (!BH) return null;
        const LH = this.predicted.get(HH);
        return LH ? {
          ...BH,
          box: wL(BH.box, BH.kind, LH[0], LH[1], LH[2])
        } : BH
      }
      changed() {
        this.version++;
        for (const HH of this.listeners) HH()
      }
    }
    var zu = LH(176);
    const Cu = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Eu(HH, BH, LH, AH) {
      const rH = HH.length / 3;
      for (let SH = 0; SH < Cu.length / 3; SH++) HH.push(Cu[3 * SH] * AH[0] / 2 + LH[0], Cu[3 * SH + 1] * AH[1] / 2 + LH[1], Cu[3 * SH + 2] * AH[2] / 2 + LH[2]);
      for (let SH = rH; SH < rH + 24; SH += 4) BH.push(SH, SH + 1, SH + 2, SH, SH + 2, SH + 3)
    }

    function Xu(HH, BH, LH) {
      const AH = BH[0][0],
        rH = [],
        SH = [];
      for (const [hH, tH] of BH) Eu(rH, SH, [hH[0] - AH[0], hH[1] - AH[1], hH[2] - AH[2]], tH);
      return HH.createGameMesh({
        positions: rH,
        indices: SH
      }, LH, AH)
    }

    function Gu(HH, BH) {
      const LH = HH.w - 2,
        AH = HH.d - 2;
      return 1 === function(HH, BH, LH, AH) {
        const [rH, SH, hH] = HH;
        if (Number(rH <= 2) + Number(SH <= 2) + Number(hH <= 2) >= 2) return function(HH, BH, LH) {
          return (HH + BH + LH) % 2 === 0 ? 1 : 3
        }(BH, LH, AH);
        const [tH, zH] = rH >= SH && rH >= hH ? [LH, AH] : SH >= hH ? [BH, AH] : [BH, LH];
        return tH % 2 === 0 && zH % 2 === 0 ? 1 : 3
      }([LH, HH.h - 2, AH], BH % LH, Math.floor(BH / (LH * AH)), Math.floor(BH / LH) % AH) ? "rod" : "channel"
    }

    function Yu(HH, BH, LH) {
      if ("reactor" !== HH.kind || HH.formed || !BH) return !1;
      const AH = aL(HH.box);
      for (let rH = 0; rH < AH; rH++) {
        const HH = LH(rH);
        if (null !== HH && IL(HH)) return !1
      }
      return !0
    }

    function uu(HH, BH, LH, AH, rH) {
      var SH;
      let hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const tH = HA(HH.box, BH),
        zH = rA(HH.kind, tH, LH);
      if ("wrong" === zH || "blocked" === zH) return "wrong";
      if (!rH) return null;
      if ("inside" === tH && "reactor" === HH.kind && "Air" === fL(LH)) {
        if (null !== hH) {
          var CH;
          const LH = JX[iX(hH, BA(HH.box, BH))];
          return LH && null !== (CH = Pz(LH)) && void 0 !== CH ? CH : null
        }
        if (AH) return Gu(HH.box, BA(HH.box, BH))
      }
      if ("missing" !== zH) return null;
      const EH = SA(HH.kind, tH);
      return null === EH ? null : null !== (SH = Pz(EH)) && void 0 !== SH ? SH : null
    }
    const Qu = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Wu(HH, BH, LH) {
      const AH = LH => {
        const AH = BH(pL(HH.box, LH));
        return null !== AH && function(HH, BH) {
          return "reactor" !== HH.kind || BH !== JL(HH.box) && "inside" !== HA(HH.box, BH)
        }(HH, LH) && "ok" !== rA(HH.kind, HA(HH.box, LH), AH)
      };
      if (LH) {
        const SH = yL(HH.box, [Math.floor(LH[0]), Math.floor(LH[1]), Math.floor(LH[2])]);
        if (SH >= 0 && (AH(SH) || (rH = SH, "reactor" === HH.kind && "inside" === HA(HH.box, rH) && "Air" === BH(pL(HH.box, rH))))) return SH
      }
      var rH;
      const SH = aL(HH.box);
      for (let hH = 0; hH < SH; hH++)
        if (AH(hH)) return hH;
      return -1
    }

    function Mu(HH, BH) {
      return Math.floor(BH / (HH.w * HH.d))
    }

    function xu(HH, BH, LH) {
      return LH >= 0 && Mu(HH, BH) > Mu(HH, LH)
    }

    function vu(HH, BH) {
      return BH >= 0 && HH.h >= 3 && Mu(HH, BH) === HH.h - 1
    }

    function Pu(HH) {
      const BH = fL(HH);
      return BH === xL || "Collider" === BH || "Laser" === BH || BH.startsWith("_Collider ")
    }

    function Tu(HH, BH, LH, AH) {
      if (AH(HH)) return null;
      if (!Qu.every((BH => {
          let [AH, rH, SH] = BH;
          const hH = LH([HH[0] + AH, HH[1] + rH, HH[2] + SH]);
          return null !== hH && !NL("reactor", hH) && "reactor" !== lL(hH)
        }))) return null;
      const rH = RL("reactor").min,
        SH = FL([HH[0], HH[1], HH[2]], function(HH, BH) {
          const LH = BH[0] - (HH[0] + .5),
            AH = BH[2] - (HH[2] + .5);
          return Math.abs(LH) >= Math.abs(AH) ? LH >= 0 ? 2 : 4 : AH >= 0 ? 1 : 3
        }(HH, BH), rH, rH, rH, DL("reactor", rH)),
        hH = JL(SH);
      let tH = !0;
      for (let zH = 0; zH < aL(SH) && tH; zH++) {
        if (zH === hH) continue;
        const HH = pL(SH, zH),
          BH = LH(HH);
        tH = !AH(HH) && (null === BH || !Pu(BH))
      }
      return {
        box: SH,
        fits: tH
      }
    }
    const Uu = vz,
      Vu = "baf2Goal",
      Ou = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      bu = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      ku = .4;

    function mu(HH, BH) {
      let [LH, AH, rH] = HH;
      const SH = mz([LH - .02, AH - .02, rH - .02], [LH + 1.02, AH + 1.02, rH + 1.02], .07);
      return BH && (SH.push([
        [LH + .5, AH + 1 + .7, rH + .5],
        [.08, 1.4, .08]
      ]), SH.push([
        [LH + .5, AH + 1 + 1.4 + .2, rH + .5],
        [ku, ku, ku]
      ])), SH
    }

    function ou(HH, BH) {
      let [LH, AH, rH] = BH;
      return HH.isBlockInLoadedChunk(LH, AH, rH) ? HH.blockIdToBlockName(HH.getBlockId(LH, AH, rH)) : null
    }
    let Iu = null;
    const fu = new Set;
    let lu = null;

    function Ku(HH) {
      Iu = HH;
      for (const BH of fu) BH(HH)
    }
    class cu {
      constructor(HH) {
        var BH;
        this.plans = HH, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (BH = HH => {
          var BH, LH;
          this.setGoal(null !== (BH = null === HH || void 0 === HH ? void 0 : HH.goal) && void 0 !== BH ? BH : null, null !== (LH = null === HH || void 0 === HH ? void 0 : HH.startsBattery) && void 0 !== LH && LH)
        }, lu ??= [fr.k.subscribe("setDirectionArrow", (HH => {
          let {
            id: BH,
            position: LH,
            text: AH
          } = HH;
          BH === Vu && Ku({
            goal: [Math.floor(LH[0]), Math.floor(LH[1]), Math.floor(LH[2])],
            startsBattery: JSON.stringify(null !== AH && void 0 !== AH ? AH : null).includes("arrowStartBattery")
          })
        })), fr.k.subscribe("clearDirectionArrow", (HH => {
          let {
            id: BH
          } = HH;
          null !== BH && BH !== Vu || Ku(null)
        }))], fu.add(BH), BH(Iu), () => {
          fu.delete(BH)
        })
      }
      onAfterRender(HH, BH) {
        const LH = performance.now();
        if (this.cues.length > 0) {
          const BH = .55 + .45 * Math.sin(LH / 1100 * Math.PI * 2);
          for (const LH of this.cues) HH.setGameMesh(LH, {
            visibility: BH
          })
        }
        if (LH - this.lastCheckMs < 150) return;
        this.lastCheckMs = LH;
        const AH = this.plans.all().filter((HH => {
            const [LH, AH, rH] = HH.box.ctrl;
            return (!HH.formed || null !== this.plans.layoutOf(HH.box.ctrl)) && (LH - BH[0]) ** 2 + (AH - BH[1]) ** 2 + (rH - BH[2]) ** 2 <= 2304
          })),
          rH = function(HH, BH) {
            const LH = zu.g.xX,
              AH = new Map;
            for (const SH of BH) {
              const BH = pL(SH.box, 0),
                hH = pL(SH.box, aL(SH.box) - 1),
                tH = [Math.min(BH[0], hH[0]), Math.min(BH[1], hH[1]), Math.min(BH[2], hH[2])].map((HH => Math.floor(HH / LH))),
                zH = [Math.max(BH[0], hH[0]), Math.max(BH[1], hH[1]), Math.max(BH[2], hH[2])].map((HH => Math.floor(HH / LH)));
              for (let LH = tH[0]; LH <= zH[0]; LH++)
                for (let BH = tH[1]; BH <= zH[1]; BH++)
                  for (let SH = tH[2]; SH <= zH[2]; SH++) {
                    var rH;
                    AH.set(`${LH},${BH},${SH}`, null !== (rH = HH.getChunkVersion(LH, BH, SH)) && void 0 !== rH ? rH : -1)
                  }
            }
            return AH
          }(HH, AH);
        this.plans.getVersion() === this.storeVersion && (function(HH, BH) {
          if (HH.size !== BH.size) return !1;
          for (const [LH, AH] of HH)
            if (BH.get(LH) !== AH) return !1;
          return !0
        }(rH, this.chunkVersions) || LH - this.lastRescanMs < 600) || (this.lastRescanMs = LH, this.storeVersion = this.plans.getVersion(), this.chunkVersions = rH, this.redraw(HH, AH))
      }
      dispose(HH) {
        this.unwatch(), Iu = null, this.clearMeshes(HH), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(HH, BH) {
        var LH;
        (null === HH || void 0 === HH ? void 0 : HH.join()) === (null === (LH = this.goal) || void 0 === LH ? void 0 : LH.join()) && BH === this.startsBattery || (this.goal = HH, this.startsBattery = BH, this.storeVersion = -1)
      }
      redraw(HH, BH) {
        const LH = BH => ou(HH, BH),
          AH = new Map,
          rH = [],
          SH = this.plans.guideOn();
        for (const CH of BH) {
          const HH = SH && Yu(CH, this.plans.showsStarter(CH.box.ctrl), (HH => LH(pL(CH.box, HH)))),
            BH = "reactor" === CH.kind ? this.plans.layoutOf(CH.box.ctrl) : null,
            hH = SH && !CH.formed ? Wu(CH, LH, this.goal) : -1;
          hH >= 0 && rH.push([pL(CH.box, hH), vu(CH.box, hH)]);
          const tH = aL(CH.box);
          for (let rH = 0; rH < tH; rH++) {
            const tH = pL(CH.box, rH),
              zH = LH(tH),
              EH = null === zH ? null : uu(CH, rH, zH, HH, SH, BH);
            if (null !== EH) {
              const HH = "wrong" !== EH && xu(CH.box, rH, hH),
                BH = HH ? `${EH}Dim` : EH;
              let LH = AH.get(BH);
              LH || (LH = {
                draw: {
                  ghost: EH,
                  dim: HH
                },
                list: []
              }, AH.set(BH, LH)), LH.list.push(tH)
            }
          }
        }
        if (SH && this.startsBattery && this.goal) {
          const [HH, BH, rH] = this.goal, SH = [];
          for (const [AH, hH, tH] of Ou) {
            const zH = [HH + AH, BH + hH, rH + tH];
            "Air" === LH(zH) && SH.push(zH)
          }
          if (SH.length > 0) {
            var hH;
            const HH = null !== (hH = AH.get("cell")) && void 0 !== hH ? hH : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            HH.list.push(...SH), AH.set("cell", HH)
          }
        }
        const tH = [...AH.keys()].sort(),
          zH = [...tH.map((HH => `${HH}:${AH.get(HH).list.join(";")}`)), `cue:${rH.join(";")}`].join("|");
        if (zH !== this.shownKey) {
          this.shownKey = zH, this.clearMeshes(HH);
          for (const BH of tH) {
            const {
              draw: LH,
              list: rH
            } = AH.get(BH);
            this.meshes.push(this.build(HH, LH, rH))
          }
          for (const [BH, LH] of rH) this.cues.push(Xu(HH, mu(BH, LH), bu))
        }
      }
      build(HH, BH, LH) {
        let {
          ghost: AH,
          dim: rH
        } = BH;
        const {
          size: SH,
          colour: hH,
          alpha: tH
        } = Uu[AH], zH = LH[0], CH = [], EH = [];
        for (const [XH, GH, YH] of LH) Eu(CH, EH, [XH - zH[0] + .5, GH - zH[1] + .5, YH - zH[2] + .5], [SH, SH, SH]);
        return HH.createGameMesh({
          positions: CH,
          indices: EH
        }, {
          rgb: hH,
          alpha: tH * (rH ? .3 : 1)
        }, zH)
      }
      clearMeshes(HH) {
        for (const BH of [...this.meshes, ...this.cues]) HH.disposeGameMesh(BH);
        this.meshes = [], this.cues = []
      }
    }
    const eu = [.56, .83, 1],
      qu = [1, .3, .25];
    class gu {
      constructor(HH) {
        this.plans = HH, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(HH, BH, LH) {
        var AH;
        const rH = performance.now();
        if (rH - this.lastCheckMs < 150) return;
        this.lastCheckMs = rH;
        const SH = BH => ou(HH, BH),
          hH = null === (AH = HH.yLH(BH)) || void 0 === AH ? void 0 : AH.name,
          tH = hH && "Reactor Frame" === fL(hH) ? HH.getTargetedBlock() : null,
          zH = tH ? [tH.AW[0], tH.AW[1], tH.AW[2]] : null,
          CH = null !== zH && "Air" === SH(zH) && zH.every(((HH, BH) => Math.abs(HH + .5 - LH[BH]) <= 8)) ? Tu(zH, LH, SH, (HH => this.inPlan(HH))) : null,
          EH = CH ? `${CH.box.ctrl.join()}|${CH.box.rot}|${CH.fits}` : "";
        EH !== this.shownKey && this.show(HH, EH, CH)
      }
      dispose(HH) {
        this.clear(HH), this.shownKey = ""
      }
      inPlan(HH) {
        return this.plans.all().some((BH => yL(BH.box, HH) >= 0))
      }
      show(HH, BH, LH) {
        if (this.clear(HH), this.shownKey = BH, !LH) return;
        const {
          box: AH,
          fits: rH
        } = LH, SH = rH ? eu : qu, {
          lo: hH,
          hi: tH
        } = kz(AH);
        this.meshes.push(Xu(HH, mz(hH, tH, .05), {
          rgb: SH,
          alpha: 1
        }));
        const zH = [],
          CH = pL(AH, 0)[1];
        for (let EH = 0; EH < AH.w * AH.d; EH++) {
          const [HH, , BH] = pL(AH, EH);
          zH.push([
            [HH + .5, CH + .02 + .01, BH + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(Xu(HH, zH, {
          rgb: SH,
          alpha: .25
        }))
      }
      clear(HH) {
        for (const BH of this.meshes) HH.disposeGameMesh(BH);
        this.meshes = []
      }
    }
    const Nu = "buildAFactory2Game:";

    function Ru(HH, BH, LH) {
      const AH = HH => {
          const [LH, AH, rH] = HH.box.ctrl;
          return LH === BH[0] && AH === BH[1] && rH === BH[2]
        },
        rH = HH.find((HH => AH(HH) || yL(HH.box, BH) >= 0));
      if (!rH) return null;
      const SH = function(HH, BH, LH) {
        const {
          w: AH,
          h: rH,
          d: SH
        } = HH.box, hH = "reactor" === HH.kind ? `${Nu}rxTitle` : `${Nu}batTitle`;
        if (HH.formed) return {
          key: `${Nu}lookPlanFormed`,
          kindKey: hH,
          w: AH,
          h: rH,
          d: SH,
          count: 0
        };
        let tH = 0,
          zH = 0;
        for (let EH = 0; EH < aL(HH.box); EH++) {
          const BH = LH(pL(HH.box, EH)),
            AH = null === BH ? "ok" : rA(HH.kind, HA(HH.box, EH), BH);
          tH += "missing" === AH ? 1 : 0, zH += "wrong" === AH || "blocked" === AH ? 1 : 0
        }
        const CH = function(HH, BH, LH) {
          if (BH < 0 || null === LH) return;
          const AH = HA(HH.box, BH),
            rH = rA(HH.kind, AH, LH);
          return "blocked" === rH ? `${Nu}lookWhy_blocked` : "wrong" === rH ? "ctrl" === AH ? `${Nu}lookWhy_ctrl` : `${Nu}lookWhy_reactor_${AH}` : void 0
        }(HH, yL(HH.box, BH), LH([BH[0], BH[1], BH[2]]));
        if (tH > 0) return {
          key: `${Nu}lookPlanToBuild`,
          kindKey: hH,
          w: AH,
          h: rH,
          d: SH,
          count: tH,
          why: CH
        };
        if (zH > 0) return {
          key: `${Nu}lookPlanTakeOut`,
          kindKey: hH,
          w: AH,
          h: rH,
          d: SH,
          count: zH,
          why: CH
        };
        return {
          key: "reactor" === HH.kind ? `${Nu}lookPlanNoRods` : `${Nu}lookPlanDone`,
          kindKey: hH,
          w: AH,
          h: rH,
          d: SH,
          count: 0
        }
      }(rH, BH, LH);
      return "reactor" === rH.kind && AH(rH) ? {
        ...SH,
        ctrl: !0
      } : SH
    }

    function ju(HH, BH) {
      return HH === BH || null !== HH && null !== BH && HH.key === BH.key && HH.kindKey === BH.kindKey && HH.w === BH.w && HH.h === BH.h && HH.d === BH.d && HH.count === BH.count && HH.why === BH.why && HH.ctrl === BH.ctrl
    }

    function nu() {
      return performance.now()
    }
    class Fu {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nu;
        this.ticket = HH, this.sent = BH, this.backstopMs = LH, this.now = AH, this.queuedAt = void 0, this.queuedAt = AH()
      }
      answered() {
        const HH = this.now(),
          BH = this.sent.leftAt(this.ticket);
        return null !== BH && HH - BH > 4e3 || HH - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Du {
      constructor() {
        this.echoes = []
      }
      add(HH) {
        this.echoes = this.echoes.filter((HH => !HH.answered())), this.echoes.push(HH)
      }
      answered() {
        var HH, BH;
        return null === (HH = null === (BH = this.echoes.at(-1)) || void 0 === BH ? void 0 : BH.answered()) || void 0 === HH || HH
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((HH => HH.answered()))
      }
      age() {
        var HH, BH;
        return null !== (HH = null === (BH = this.echoes.at(-1)) || void 0 === BH ? void 0 : BH.age()) && void 0 !== HH ? HH : null
      }
      clear() {
        this.echoes = []
      }
    }
    class wu {
      constructor(HH) {
        this.send = HH, this.value = null, this.sent = null, this.echoes = new Du, this.down = !1, this.timer = null
      }
      shown(HH) {
        return null === this.value ? HH : this.down || this.value !== this.sent ? this.value : HH === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), HH) : this.value
      }
      pendingFor(HH) {
        return null !== this.value && this.value === this.sent && HH !== this.value ? this.echoes.age() : null
      }
      assume(HH, BH) {
        this.disarm(), this.down = !1, this.value = HH, this.sent = HH, this.echoes.clear(), this.echoes.add(BH)
      }
      press() {
        this.down = !0
      }
      drag(HH) {
        this.value = HH, this.arm(this.down ? 1e3 : 400)
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
      arm(HH) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), HH)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class Zu {
      constructor() {
        this.pending = new Map
      }
      set(HH, BH, LH) {
        var AH;
        const rH = null !== (AH = this.pending.get(HH)) && void 0 !== AH ? AH : {
          on: BH,
          echoes: new Du
        };
        rH.on = BH, rH.echoes.add(LH), this.pending.set(HH, rH)
      }
      shown(HH) {
        let BH = HH;
        for (const [LH, {
            on: AH,
            echoes: rH
          }] of this.pending) 0 !== (HH & LH) === AH && rH.agreeCounts() || rH.answered() ? this.pending.delete(LH) : BH = AH ? BH | LH : BH & ~LH;
        return BH
      }
      pendingMask() {
        let HH = 0;
        for (const BH of this.pending.keys()) HH |= BH;
        return HH
      }
      pendingFor(HH) {
        let BH = null;
        for (const [AH, {
            on: rH,
            echoes: SH
          }] of this.pending) {
          if (void 0 !== HH && 0 !== (HH & AH) === rH) continue;
          const hH = SH.age();
          var LH;
          if (null !== hH) BH = Math.max(null !== (LH = BH) && void 0 !== LH ? LH : 0, hH)
        }
        return BH
      }
      clear() {
        this.pending.clear()
      }
    }
    class du {
      constructor() {
        this.dims = null, this.echoes = new Du, this.unmet = null
      }
      shown(HH) {
        var BH;
        return this.dims && (au(this.dims, HH) && this.echoes.agreeCounts() || this.echoes.answered()) && (au(this.dims, HH) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (BH = this.dims) && void 0 !== BH ? BH : HH
      }
      takeUnmet() {
        const HH = this.unmet;
        return this.unmet = null, HH
      }
      set(HH, BH) {
        this.dims = HH, this.echoes.add(BH)
      }
      pendingFor(HH) {
        return null === this.dims || HH && au(this.dims, HH) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function au(HH, BH) {
      return HH[0] === BH[0] && HH[1] === BH[1] && HH[2] === BH[2]
    }
    class su {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nu;
        this.now = HH, this.taps = new Map
      }
      tap(HH, BH, LH) {
        return !this.busy(HH) && (this.taps.set(HH, {
          at: this.now(),
          done: BH
        }), LH(), !0)
      }
      settle(HH) {
        for (const [BH, LH] of [...this.taps]) LH.done(HH) && this.taps.delete(BH)
      }
      busy(HH) {
        const BH = this.taps.get(HH);
        return !!BH && (!(this.now() - BH.at >= 3e3) || (this.taps.delete(HH), !1))
      }
      busyIds() {
        const HH = new Set;
        for (const BH of [...this.taps.keys()]) this.busy(BH) && HH.add(BH);
        return HH
      }
      clear() {
        this.taps.clear()
      }
    }

    function Ju(HH) {
      return {
        send: BH => HH.track(BH),
        sendUrgent: (BH, LH) => HH.track(BH, {
          urgent: !0,
          supersedes: LH
        }),
        leftAt: BH => HH.leftAt(BH),
        holdReserve: () => HH.holdUrgentReserve(),
        answerMs: mh
      }
    }

    function iu() {
      return performance.now()
    }

    function pu(HH) {
      const BH = HH.baf2RxNeed.map((HH => {
        let [BH, LH] = HH;
        return [BH, LH]
      }));
      return JSON.stringify([HH.baf2RxFormed, BH, HH.baf2RxBad, HH.baf2RxCells])
    }

    function yu(HH, BH) {
      const LH = 0 !== (BH & GB),
        AH = 0 !== (HH.baf2RxFlags & GB);
      return !LH || AH || "running" !== HH.baf2RxState && "idle" !== HH.baf2RxState ? !LH && AH && "scram" === HH.baf2RxState && HH.baf2RxFuel > 0 ? "idle" : HH.baf2RxState : "scram"
    }

    function HQ(HH) {
      return JSON.stringify([HH.baf2BatFormed, HH.baf2BatNeed, HH.baf2BatBad])
    }

    function BQ(HH) {
      return HH.join(",")
    }
    class LQ {
      constructor() {
        this.listeners = new Set
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      notify() {
        for (const HH of this.listeners) HH()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class AQ {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(HH, BH) {
        this.lastAt = HH, this.lastUntil = HH + BH
      }
      answered(HH) {
        return this.lastAt >= HH || HH < this.lastUntil
      }
    }
    class rQ {
      constructor(HH, BH) {
        this.link = HH, this.now = BH, this.hold = new du, this.picked = null, this.notTaken = null
      }
      shown(HH) {
        const BH = this.hold.shown(HH);
        if (this.hold.takeUnmet() && this.picked) {
          var LH;
          const {
            plans: BH,
            ctrl: AH,
            at: rH
          } = this.picked;
          this.picked = null, BH.unpredict(AH), null === (LH = this.notTaken) || void 0 === LH || LH.call(this, HH, rH)
        }
        return BH
      }
      pendingFor(HH) {
        return this.hold.pendingFor(HH)
      }
      XY(HH, BH, LH) {
        HH.predictSize(BH, LH), this.picked = {
          plans: HH,
          ctrl: BH,
          at: this.now()
        };
        const AH = this.link.send(XB(BH, "plan", ...LH));
        this.hold.set(LH, new Fu(AH, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class SQ {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iu;
        this.plans = HH, this.readInterior = BH, this.link = LH, this.now = AH, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Zu, this.throttle = void 0, this.oneShots = void 0, this.listeners = new LQ, this.redraw = null, this.releaseReserve = null, this.size = new rQ(LH, AH), this.oneShots = new su(AH), this.throttle = new wu((HH => this.echo(this.link.send(this.command("throttle", HH)))))
      }
      set(HH) {
        !HH.baf2RxOpen && this.raw && BQ(this.raw.baf2RxAt) === BQ(HH.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(HH), this.AX(HH)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(HH) {
        this.size.notTaken = HH
      }
      resize(HH) {
        this.raw && (this.size.XY(this.plans, this.raw.baf2RxAt, HH), this.AX(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const HH = this.raw.baf2RxAt;
        this.plans.setStarter(HH, !this.plans.showsStarter(HH)), this.AX(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.AX(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.AX(this.raw)
      }
      send(HH) {
        if (this.raw) {
          for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
          this.link.send(this.command(HH, ...LH))
        }
      }
      tap(HH, BH) {
        this.raw && this.oneShots.tap(HH, function(HH, BH) {
          if ("start" === HH) return HH => 0 === (HH.baf2RxFlags & GB);
          if ("odConfirm" === HH) return HH => 0 !== (HH.baf2RxFlags & YB);
          const LH = pu(BH);
          return HH => pu(HH) !== LH
        }(HH, this.raw), BH) && ("start" === HH && (this.startedAt = this.now()), this.AX(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(GB, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(HH, BH) {
        if (!this.raw) return;
        const LH = HH === GB ? this.command(BH ? "scram" : "start") : this.command("od", BH ? 1 : 0),
          AH = BH && HH === GB,
          rH = `${EB} ${this.raw.baf2RxAt.join(" ")} `,
          SH = this.echo(AH ? this.link.sendUrgent(LH, (HH => {
            const BH = HH.startsWith(rH) ? HH.slice(rH.length).split(" ")[0] : null;
            return "throttle" === BH || "start" === BH
          })) : this.link.send(LH));
        this.flags.set(HH, BH, SH), AH && this.throttle.assume(0, SH), this.AX(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(HH) {
        this.throttle.drag(HH), this.raw && this.AX(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.AX(this.raw)
      }
      subscribe(HH) {
        return this.listeners.subscribe(HH)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var HH;
        this.throttle.release(), null === (HH = this.releaseReserve) || void 0 === HH || HH.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(HH) {
        for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
        return XB(this.raw.baf2RxAt, HH, ...LH)
      }
      echo(HH) {
        return new Fu(HH, this.link, this.link.answerMs, this.now)
      }
      AX(HH) {
        var BH;
        this.raw = HH;
        const LH = this.flags.shown(HH.baf2RxFlags),
          AH = {
            ...HH,
            baf2RxFlags: LH,
            baf2RxTarget: this.throttle.shown(HH.baf2RxTarget),
            baf2RxState: yu(HH, LH)
          },
          rH = this.size.shown(AH.baf2RxDims),
          SH = this.throttle.pendingFor(),
          hH = [this.throttle.pendingFor(HH.baf2RxTarget), this.flags.pendingFor(HH.baf2RxFlags), this.size.pendingFor(HH.baf2RxDims)].filter((HH => null !== HH)),
          tH = hH.length > 0 ? Math.max(...hH) : null,
          zH = this.oneShots.busyIds(),
          CH = AH.baf2RxAt;
        let EH, XH, GH = null,
          YH = [Math.max(0, rH[0] - 2), Math.max(0, rH[1] - 2), Math.max(0, rH[2] - 2)];
        if (AH.baf2RxFormed) {
          const [HH, BH, LH] = AH.baf2RxDims;
          YH = [Math.max(0, HH - 2), Math.max(0, BH - 2), Math.max(0, LH - 2)], EH = Array.from(AH.baf2RxCells, Number), XH = `${YH.join(",")}:${AH.baf2RxCells}`
        } else {
          var uH;
          const HH = null === (uH = this.plans.planAt(CH)) || void 0 === uH ? void 0 : uH.box,
            BH = HH ? wL(HH, "reactor", ...rH) : FL(CH, 1, ...rH, DL("reactor", rH[0])),
            LH = this.readInterior(BH);
          GH = st(YH, LH), EH = LH, XH = `${YH.join(",")}:${LH.join("")}`
        }(null === (BH = this.looksOf) || void 0 === BH ? void 0 : BH.key) !== XH && (this.looksOf = {
          key: XH,
          looks: Bz(YH, EH)
        }), this.view = {
          status: AH,
          dims: rH,
          plan: GH,
          inner: YH,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(CH),
          odConfirmed: this.odConfirmed || 0 !== (AH.baf2RxFlags & vB),
          guide: this.plans.guideOn(),
          throttlePending: null !== SH,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== tH && tH >= 5e3,
          busy: zH,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== tH || zH.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.AX(this.raw)
        }), 250))
      }
    }
    class hQ {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iu;
        this.plans = HH, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new LQ, this.redraw = null, this.size = new rQ(BH, LH), this.oneShots = new su(LH)
      }
      set(HH) {
        !HH.baf2BatOpen && this.view && BQ(this.view.status.baf2BatAt) === BQ(HH.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(HH), this.AX(HH)
      }
      tap(HH, BH) {
        if (!this.view) return;
        const LH = HQ(this.view.status);
        this.oneShots.tap(HH, (HH => HQ(HH) !== LH), BH) && this.AX(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(HH) {
        this.size.notTaken = HH
      }
      resize(HH) {
        this.view && (this.size.XY(this.plans, this.view.status.baf2BatAt, HH), this.AX(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.AX(this.view.status)
      }
      subscribe(HH) {
        return this.listeners.subscribe(HH)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      AX(HH) {
        const BH = this.size.shown(HH.baf2BatDims),
          LH = this.oneShots.busyIds();
        this.view = {
          status: HH,
          dims: BH,
          aX: Qz(BH, HH.baf2BatDims) ? HH.baf2BatCapacity : rz(...BH),
          guide: this.plans.guideOn(),
          busy: LH
        }, this.listeners.notify(), LH.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.AX(this.view.status)
        }), 250))
      }
    }
    const tQ = "buildAFactory2Game:";

    function zQ() {
      var HH;
      const BH = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!BH) return null;
      const LH = BH.querySelector(".ExitButton");
      return function(HH, BH) {
        const LH = BH ? BH.left - 8 : HH.right;
        return {
          left: HH.left,
          top: HH.top,
          width: Math.max(0, LH - HH.left),
          height: HH.height
        }
      }(BH.getBoundingClientRect(), null !== (HH = null === LH || void 0 === LH ? void 0 : LH.getBoundingClientRect()) && void 0 !== HH ? HH : null)
    }
    const CQ = (0, AH.memo)((function(HH) {
      let {
        store: BH
      } = HH;
      const {
        t: LH
      } = (0, Or.B)(), [rH, SH] = (0, AH.useState)((() => BH.get())), [hH, tH] = (0, AH.useState)((() => performance.now()));
      (0, AH.useEffect)((() => (SH(BH.get()), BH.subscribe((() => {
        SH(BH.get()), tH(performance.now())
      })))), [BH]);
      const {
        alarm: zH,
        boomAt: CH
      } = rH, EH = null !== zH && null !== zH.secs, [XH, GH] = (0, AH.useState)(null);
      (0, AH.useEffect)((() => {
        if (!EH) return;
        GH(zQ());
        const HH = setInterval((() => {
          tH(performance.now()), GH(zQ())
        }), 250);
        return () => {
          clearInterval(HH)
        }
      }), [EH]);
      const [YH, uH] = (0, AH.useState)(!1);
      return (0, AH.useEffect)((() => {
        if (CH === -1 / 0) return;
        uH(!0);
        const HH = setTimeout((() => {
          uH(!1)
        }), 1300);
        return () => {
          clearTimeout(HH)
        }
      }), [CH]), (0, vS.jsxs)(vS.Fragment, {
        children: [null !== zH && (0, vS.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: LH(zH.hot ? `${tQ}rxAlarmSiren` : `${tQ}rxAlarmDamaged`, {
            amount: String(zH.damage)
          })
        }), null !== zH && null !== zH.secs && (0, vS.jsx)("div", {
          className: XH ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== XH && void 0 !== XH ? XH : void 0,
          "aria-live": "assertive",
          children: LH(`${tQ}rxAlarmCountdown`, {
            amount: String((QH = zH.secs, WH = hH - zH.receivedAt, Math.max(1, Math.ceil(QH - WH / 1e3))))
          })
        }), YH && (0, vS.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var QH, WH
    }));
    class EQ {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      lT(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const LH = HH.baf2RxAlarmAt.join(",");
        let AH = this.snapshot.boomAt;
        if (HH.baf2RxAlarmBoom) this.byReactor.delete(LH), AH = BH;
        else if (HH.baf2RxAlarmDamage <= 0) this.byReactor.delete(LH);
        else {
          var rH;
          this.byReactor.set(LH, {
            damage: HH.baf2RxAlarmDamage,
            secs: null !== (rH = HH.baf2RxAlarmSecs) && void 0 !== rH ? rH : null,
            hot: !0 === HH.baf2RxAlarmHot,
            receivedAt: BH
          })
        }
        this.AX(AH)
      }
      retain(HH) {
        let BH = !1;
        for (const LH of [...this.byReactor.keys()]) HH.has(LH) || (this.byReactor.delete(LH), BH = !0);
        BH && this.AX(this.snapshot.boomAt)
      }
      has(HH) {
        return this.byReactor.has(HH)
      }
      get() {
        return this.snapshot
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      AX(HH) {
        let BH = null;
        for (const LH of this.byReactor.values())(!BH || LH.damage > BH.damage) && (BH = LH);
        this.snapshot = {
          alarm: BH,
          boomAt: HH
        };
        for (const LH of this.listeners) LH()
      }
    }
    const XQ = {
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

    function GQ(HH) {
      return [HH[0], HH[1], HH[2]]
    }

    function YQ(HH) {
      return `${HH[0]},${HH[1]},${HH[2]}`
    }
    class uQ {
      constructor(HH) {
        if (this.plans = HH, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var HH;
            return {
              active: this.glows.flatMap((HH => {
                let {
                  record: BH
                } = HH;
                return BH ? [BH] : []
              })),
              log: [...null !== (HH = this.devLog) && void 0 !== HH ? HH : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var HH;
        return null !== (HH = this.devLog) && void 0 !== HH ? HH : []
      }
      check(HH, BH, LH) {
        const AH = new Set(BH.map((HH => YQ(HH.box.ctrl))));
        for (const hH of function(HH, BH) {
            const LH = [],
              AH = new Map(HH);
            HH.clear();
            for (const rH of BH) {
              const BH = Su(rH.box.ctrl),
                SH = rH.formed ? rH.level : 0;
              HH.set(BH, SH), SH > 0 && 0 === AH.get(BH) && LH.push(rH)
            }
            return LH
          }(this.levels, this.plans.all())) AH.has(YQ(hH.box.ctrl)) && this.show(HH, hH, "on", LH);
        const rH = this.plans.lastFormed();
        if (null === rH || rH.receivedAt <= this.flashedAt) return null;
        this.flashedAt = rH.receivedAt;
        const SH = function(HH, BH) {
          var LH;
          const AH = Su(HH);
          return null !== (LH = BH.find((HH => Su(HH.box.ctrl) === AH))) && void 0 !== LH ? LH : null
        }(rH.ctrl, BH);
        return SH && this.show(HH, SH, "formed", LH), SH
      }
      fade(HH, BH) {
        0 !== this.glows.length && (this.glows = this.glows.filter((LH => {
          let {
            mesh: AH,
            glow: rH,
            startMs: SH,
            record: hH
          } = LH;
          const tH = (BH - SH) / XQ[rH].ms;
          return tH >= 1 ? (HH.disposeGameMesh(AH), hH && (hH.endMs = BH), !1) : (HH.setGameMesh(AH, {
            visibility: "formed" === rH ? 1 - tH : Math.sin(Math.PI * tH)
          }), !0)
        })))
      }
      dispose(HH) {
        for (const {
            mesh: LH
          }
          of this.glows) HH.disposeGameMesh(LH);
        this.glows = [], this.levels.clear();
        const BH = "undefined" !== typeof window ? window : null;
        (null === BH || void 0 === BH ? void 0 : BH.baf2Glows) === this.devAccessor && delete BH.baf2Glows
      }
      show(HH, BH, LH, AH) {
        const {
          lo: rH,
          hi: SH
        } = kz(BH.box);
        let hH = null;
        this.devLog && (hH = {
          glow: LH,
          ctrl: GQ(BH.box.ctrl),
          lo: GQ(rH),
          hi: GQ(SH),
          startMs: AH,
          endMs: null
        }, this.devLog.push(hH), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(HH, LH, mz(rH, SH, XQ[LH].thick)),
          glow: LH,
          startMs: AH,
          record: hH
        })
      }
      build(HH, BH, LH) {
        const AH = Xu(HH, LH, {
          rgb: XQ[BH].colour,
          alpha: 1
        });
        return HH.setGameMesh(AH, {
          visibility: 0
        }), AH
      }
    }
    const QQ = 1 / .6,
      WQ = {
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
        blendMode: ot.f.Standard,
        soft: !0
      },
      MQ = {
        ...WQ,
        size: [.25, .4],
        count: 2
      };

    function xQ(HH) {
      return {
        colours: [HH, HH],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: ot.f.Add,
        soft: !1
      }
    }
    const vQ = xQ([150, 225, 255]),
      PQ = xQ([185, 145, 255]),
      TQ = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function UQ(HH) {
      const BH = cB[HH];
      return null === BH.fuelSlot || rL(BH) ? TQ.includes(HH) ? PQ : vQ : WQ
    }
    const VQ = {
        kind: "smokePuff"
      },
      OQ = [.2, .025, .2];

    function bQ(HH, BH) {
      const [
        [LH, AH, rH],
        [SH, hH, tH]
      ] = HH.colours;
      return {
        texture: HH.soft ? VQ : "square_particle",
        aX: BH,
        minLifeTime: HH.life[0] / QQ,
        maxLifeTime: HH.life[1] / QQ,
        minEmitPower: HH.power[0] * QQ,
        maxEmitPower: HH.power[1] * QQ,
        minSize: HH.size[0],
        maxSize: HH.size[1],
        emitRate: 0,
        gravity: [0, HH.lift * QQ * QQ, 0],
        dir1: [-HH.spread, 1, -HH.spread],
        dir2: [HH.spread, 1, HH.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [LH, AH, rH, HH.alpha],
          maxColor: [SH, hH, tH, HH.alpha]
        }, {
          timeFraction: 1,
          minColor: [LH, AH, rH, 0],
          maxColor: [SH, hH, tH, 0]
        }],
        blendMode: HH.blendMode
      }
    }
    class kQ {
      constructor(HH) {
        this.fixed = HH, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(HH, BH, LH) {
        var AH;
        if (LH === this.lastFrame) return !1;
        this.lastFrame = LH;
        const rH = this.at;
        rH[0] = BH[0] + .5, rH[1] = BH[1] + 1.025, rH[2] = BH[2] + .5;
        const SH = null !== (AH = this.fixed) && void 0 !== AH ? AH : tH() ? MQ : WQ;
        let hH = this.particles.get(SH);
        return hH || (hH = HH.createParticles(function(HH) {
          return bQ(HH, Math.ceil(12 * HH.count * HH.life[1]) + HH.count)
        }(SH), {
          pos: rH,
          half: OQ
        }), this.particles.set(SH, hH)), hH.moveTo(rH), hH.emit(SH.count), !0
      }
      dispose() {
        for (const HH of this.particles.values()) HH.stop();
        this.particles.clear()
      }
    }
    class mQ {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(HH) {
        this.indexed = !0;
        for (const BH of mB) {
          const LH = UQ(BH);
          for (let AH = 1; AH <= 4; AH++) {
            const rH = HH.blockNameToBlockId(`${BH}|meta|rot${AH}|Running`, !0);
            if (null === rH) continue;
            let SH = this.pufferIndexByStyle.get(LH);
            void 0 === SH && (SH = this.pufferList.push(new kQ(LH === WQ ? null : LH)) - 1, this.pufferIndexByStyle.set(LH, SH)), this.pufferIndexById[rH] = SH + 1
          }
        }
      }
      onAfterRender(HH, BH) {
        this.indexed || this.index(HH);
        const LH = performance.now(),
          AH = 0 === this.lastMs ? 0 : Math.min(LH - this.lastMs, 250) / 1e3;
        this.lastMs = LH, this.frame++, HH.particlesEnabled() ? (this.scan(HH, BH), this.puff(HH, AH)) : this.sources = []
      }
      dispose() {
        for (const HH of this.pufferList) HH.dispose();
        this.sources = [], this.found = []
      }
      scan(HH, BH) {
        0 === this.scanRow && (this.origin = [Math.floor(BH[0]) - 12, Math.floor(BH[1]) - 6, Math.floor(BH[2]) - 12]);
        const LH = Math.min(this.scanRow + 16, 325),
          [AH, rH, SH] = this.origin,
          hH = this.hits;
        hH.length = 0;
        for (let tH = this.scanRow; tH < LH; tH++) {
          const BH = AH + tH % 25,
            LH = rH + Math.floor(tH / 25);
          HH.scanBlocks(BH, LH, SH, BH + 1, LH + 1, SH + 25, this.pufferIndexById, hH)
        }
        for (let tH = 0; tH < hH.length; tH += 4) {
          const HH = hH[tH + 3];
          this.found.push({
            pos: [hH[tH], hH[tH + 1], hH[tH + 2]],
            ph: HH,
            puffer: this.pufferList[this.pufferIndexById[HH] - 1]
          })
        }
        this.scanRow = LH, 325 === LH && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(HH, BH) {
        const LH = this.sources.length;
        if (0 !== LH) {
          this.budget = Math.min(this.budget + Math.min(LH / 1.2, 12) * BH, 2);
          for (let BH = 0; BH < LH && this.budget >= 1; BH++) {
            const BH = this.sources[this.cursor % LH];
            this.cursor = (this.cursor + 1) % LH, HH.getBlockId(BH.pos[0], BH.pos[1], BH.pos[2]) === BH.ph && (BH.puffer.puff(HH, BH.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const oQ = {
        ...xQ([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      IQ = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function fQ(HH) {
      return 0 === HH.spots.length ? 0 : Math.min(1 * HH.level, 4)
    }

    function lQ(HH) {
      return 0 === HH.glass.length ? 0 : Math.min(.75 * HH.level, 3)
    }

    function KQ(HH) {
      return `${HH.ctrl.join(",")}:${HH.rot}:${HH.cu},${HH.cv}:${HH.w},${HH.h},${HH.d}`
    }

    function cQ(HH, BH) {
      const LH = BH.w - 2,
        AH = BH.h - 2,
        rH = BH.d - 2,
        SH = [];
      for (let hH = 0; hH < LH * AH * rH; hH++) {
        const tH = hH % LH,
          zH = Math.floor(hH / LH) % rH,
          CH = Math.floor(hH / (LH * rH));
        if (tH > 0 && tH < LH - 1 && zH > 0 && zH < rH - 1 && CH > 0 && CH < AH - 1) continue;
        const EH = pL(BH, LA(BH, hH)),
          XH = ou(HH, EH);
        if (null !== XH && "Fuel Rod" === fL(XH))
          for (const BH of IQ) {
            const LH = [EH[0] + BH[0], EH[1] + BH[1], EH[2] + BH[2]];
            qQ(HH, LH) && SH.push(gQ(LH, BH))
          }
      }
      return SH
    }

    function eQ(HH, BH) {
      const {
        lo: LH,
        hi: AH
      } = kz(BH), rH = [];
      for (let SH = LH[0]; SH < AH[0]; SH++)
        for (let BH = LH[1]; BH < AH[1]; BH++) {
          const hH = SH === LH[0] || SH === AH[0] - 1 || BH === LH[1] || BH === AH[1] - 1 ? 1 : Math.max(1, AH[2] - 1 - LH[2]);
          for (let tH = LH[2]; tH < AH[2]; tH += hH) {
            const hH = [SH, BH, tH];
            if (!qQ(HH, hH)) continue;
            const zH = SH === LH[0] ? IQ[1] : SH === AH[0] - 1 ? IQ[0] : tH === LH[2] ? IQ[5] : tH === AH[2] - 1 ? IQ[4] : BH === LH[1] ? IQ[3] : IQ[2];
            rH.push(gQ(hH, zH))
          }
        }
      return rH
    }

    function qQ(HH, BH) {
      const LH = ou(HH, BH);
      return null !== LH && "Reactor Glass" === fL(LH)
    }

    function gQ(HH, BH) {
      return [
        [HH[0] + .5 + .55 * BH[0], HH[1] + .5 + .55 * BH[1], HH[2] + .5 + .55 * BH[2]],
        [0 === BH[0] ? .4 : .02, 0 === BH[1] ? .4 : .02, 0 === BH[2] ? .4 : .02]
      ]
    }
    class NQ {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(HH, BH, LH, AH) {
        const rH = [],
          SH = new Set;
        for (const CH of BH) {
          var hH, tH, zH;
          const {
            box: BH
          } = CH;
          if ("reactor" !== CH.kind || CH.level <= 0 || (BH.ctrl[0] - LH[0]) ** 2 + (BH.ctrl[1] - LH[1]) ** 2 + (BH.ctrl[2] - LH[2]) ** 2 > 576) continue;
          const EH = KQ(BH);
          SH.add(EH);
          let XH = this.spots.get(EH);
          if ((!XH || AH - XH.at > 3e3) && (XH = {
              at: AH,
              spots: cQ(HH, BH),
              glass: eQ(HH, BH)
            }, this.spots.set(EH, XH)), 0 === XH.spots.length && 0 === XH.glass.length) continue;
          const GH = this.sparking.find((HH => HH.key === EH));
          rH.push({
            key: EH,
            level: CH.level,
            spots: XH.spots,
            glass: XH.glass,
            budget: null !== (hH = null === GH || void 0 === GH ? void 0 : GH.budget) && void 0 !== hH ? hH : 0,
            cursor: null !== (tH = null === GH || void 0 === GH ? void 0 : GH.cursor) && void 0 !== tH ? tH : 0,
            glassBudget: null !== (zH = null === GH || void 0 === GH ? void 0 : GH.glassBudget) && void 0 !== zH ? zH : 0
          })
        }
        for (const CH of this.spots.keys()) SH.has(CH) || this.spots.delete(CH);
        this.sparking = rH
      }
      emit(HH, BH, LH) {
        var AH;
        if (0 === this.sparking.length || !HH.particlesEnabled() || LH === this.lastFrame) return;
        this.lastFrame = LH;
        let rH = 0,
          SH = 0;
        for (const uH of this.sparking) rH += fQ(uH), SH += lQ(uH);
        const hH = rH > 8 ? 8 / rH : 1,
          tH = SH > 6 ? 6 / SH : 1;
        let zH, CH = null,
          EH = null;
        for (const uH of this.sparking) uH.budget = Math.min(uH.budget + fQ(uH) * hH * BH, 2), uH.budget >= 1 && (!CH || uH.budget > CH.budget) && (CH = uH), uH.glassBudget = Math.min(uH.glassBudget + lQ(uH) * tH * BH, 2), uH.glassBudget >= 1 && (!EH || uH.glassBudget > EH.glassBudget) && (EH = uH);
        if (CH) CH.budget--, zH = CH.spots[CH.cursor++ % CH.spots.length];
        else {
          if (!EH) return;
          EH.glassBudget--, zH = EH.glass[Math.floor(Math.random() * EH.glass.length)]
        }
        const [XH, GH] = zH, YH = null !== (AH = this.emitter) && void 0 !== AH ? AH : this.create(HH, XH, GH);
        YH.moveTo(XH, GH), YH.emit(oQ.count)
      }
      dispose() {
        var HH;
        null === (HH = this.emitter) || void 0 === HH || HH.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(HH, BH, LH) {
        const AH = Math.ceil(14 * oQ.count * oQ.life[1]) + oQ.count;
        return this.emitter = HH.createParticles(bQ(oQ, AH), {
          pos: BH,
          half: LH
        }), this.emitter
      }
    }
    const RQ = [2, 3.2],
      jQ = 1 / 3,
      nQ = 1 / .6,
      FQ = {
        texture: VQ,
        aX: Math.ceil(18 * RQ[1]) + 4,
        minLifeTime: RQ[0] / nQ,
        maxLifeTime: RQ[1] / nQ,
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
        blendMode: ot.f.Standard
      };
    class DQ {
      constructor(HH) {
        this.plans = HH, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new NQ, this.frame = 0, this.outline = new uQ(HH)
      }
      onAfterRender(HH, BH, LH) {
        const AH = performance.now(),
          rH = 0 === this.lastMs ? 0 : Math.min(AH - this.lastMs, 250) / 1e3;
        if (this.lastMs = AH, this.outline.fade(HH, AH), this.puff(HH, rH, LH), this.sparks.emit(HH, rH, this.frame++), AH - this.lastCheckMs < 150) return;
        this.lastCheckMs = AH;
        const SH = this.plans.all().filter((HH => HH.formed && wQ(HH.box.ctrl, LH) <= 4096));
        this.plumes = SH.filter((HH => "reactor" === HH.kind && HH.level > 0)).map((HH => ({
          box: HH.box,
          level: HH.level
        }))), this.updateHums(HH, BH, SH, LH), this.sparks.update(HH, SH, LH, AH), this.chimeFormed(HH, BH, SH, AH)
      }
      dispose(HH) {
        var BH;
        this.outline.dispose(HH), null === (BH = this.steam) || void 0 === BH || BH.dispose(), this.steam = null, this.sparks.dispose();
        for (const LH of this.hums.values()) LH.stop();
        this.hums.clear()
      }
      chimeFormed(HH, BH, LH, AH) {
        const rH = this.outline.check(HH, LH, AH);
        rH && HH.playSound(BH, "exp_levelup", .6, 1, {
          SH: [rH.box.ctrl[0] + .5, rH.box.ctrl[1], rH.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(HH, BH, LH) {
        const AH = this.plumes;
        if (0 === AH.length || !HH.particlesEnabled()) return void(this.plumeBudget = 0);
        const rH = AH.reduce(((HH, BH) => HH + 3 * BH.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + rH * BH, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let SH = this.plumeCursor % (rH / 3);
        this.plumeCursor++;
        let hH = AH[0];
        for (const XH of AH) {
          if (SH < XH.level) {
            hH = XH;
            break
          }
          SH -= XH.level
        }
        const {
          lo: tH,
          hi: zH
        } = kz(hH.box);
        if (function(HH, BH, LH) {
            const AH = Math.max(HH[0] - LH[0], 0, LH[0] - BH[0]),
              rH = Math.max(HH[2] - LH[2], 0, LH[2] - BH[2]);
            return Math.hypot(AH, LH[1] - BH[1], rH)
          }(tH, zH, LH) < 6 && Math.random() > jQ) return;
        const CH = [(tH[0] + zH[0]) / 2, zH[1] + .05, (tH[2] + zH[2]) / 2],
          EH = [(zH[0] - tH[0]) / 2 - .5, .05, (zH[2] - tH[2]) / 2 - .5];
        this.steam ??= HH.createParticles(FQ, {
          pos: CH,
          half: EH
        }), this.steam.moveTo(CH, EH), this.steam.emit(1)
      }
      updateHums(HH, BH, LH, AH) {
        const rH = new Map;
        for (const hH of LH) "reactor" === hH.kind && hH.level > 0 && wQ(hH.box.ctrl, AH) <= 576 && rH.set(`${SH=hH.box.ctrl,`${SH[0]},${SH[1]},${SH[2]}`}:${hH.level}`, hH);
        var SH;
        for (const [hH, tH] of this.hums) rH.has(hH) || (tH.stop(), this.hums.delete(hH));
        for (const [hH, tH] of rH) {
          if (this.hums.has(hH)) continue;
          const {
            lo: LH,
            hi: AH
          } = kz(tH.box), rH = [(LH[0] + AH[0]) / 2, LH[1], (LH[2] + AH[2]) / 2], SH = HH.playSound(BH, "rocketEngineLoop", .08 + .06 * tH.level, .55, {
            SH: rH,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          SH && this.hums.set(hH, SH)
        }
      }
    }

    function wQ(HH, BH) {
      return (HH[0] - BH[0]) ** 2 + (HH[1] - BH[1]) ** 2 + (HH[2] - BH[2]) ** 2
    }
    class ZQ {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      lT(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const AH = [HH.baf2BombAt[0], HH.baf2BombAt[1], HH.baf2BombAt[2]],
          rH = HH.baf2BombR;
        if (HH.baf2BombBoom) {
          const HH = Math.hypot(BH[0] - AH[0], BH[1] - AH[1], BH[2] - AH[2]);
          this.AX({
            fuse: null,
            blast: {
              at: AH,
              r: rH,
              receivedAt: LH,
              distance: HH,
              flash: HH <= 3 * rH
            }
          })
        } else this.AX({
          ...this.snapshot,
          fuse: HH.baf2BombMs > 0 ? {
            at: AH,
            r: rH,
            endsAt: LH + HH.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      AX(HH) {
        this.snapshot = HH;
        for (const BH of this.listeners) BH()
      }
    }
    const dQ = (0, AH.memo)((function(HH) {
      var BH;
      let {
        store: LH
      } = HH;
      const {
        t: rH
      } = (0, Or.B)(), [SH, hH] = (0, AH.useState)((() => LH.get())), [tH, zH] = (0, AH.useState)((() => performance.now()));
      (0, AH.useEffect)((() => (hH(LH.get()), LH.subscribe((() => {
        hH(LH.get()), zH(performance.now())
      })))), [LH]);
      const {
        fuse: CH,
        blast: EH
      } = SH;
      (0, AH.useEffect)((() => {
        if (!CH) return;
        const HH = setInterval((() => {
          zH(performance.now())
        }), 250);
        return () => {
          clearInterval(HH)
        }
      }), [CH]);
      const [XH, GH] = (0, AH.useState)(!1);
      (0, AH.useEffect)((() => {
        if (null === EH || void 0 === EH || !EH.flash) return;
        GH(!0);
        const HH = setTimeout((() => {
          GH(!1)
        }), 2500);
        return () => {
          clearTimeout(HH)
        }
      }), [EH]);
      const YH = CH ? function(HH, BH) {
        return HH.endsAt <= BH ? 0 : Math.ceil((HH.endsAt - BH) / 1e3)
      }(CH, tH) : 0;
      return (0, vS.jsxs)(vS.Fragment, {
        children: [YH > 0 && (0, vS.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: rH("buildAFactory2Game:bombCountdown", {
            amount: String(YH),
            radius: String(null !== (BH = null === CH || void 0 === CH ? void 0 : CH.r) && void 0 !== BH ? BH : 0)
          })
        }), XH && (0, vS.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function aQ(HH) {
      const BH = Math.min(4, Math.max(1, HH / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * HH / 4)),
        capSpread: Math.min(5 * HH / 8, 24 * BH),
        capThick: 6 * BH,
        stemHalfWidth: 3 * BH,
        puffScale: BH
      }
    }
    class sQ {
      constructor() {
        this.LX = !1
      }
      hold(HH) {
        HH.getCameraFar() < 1e3 && (HH.setCameraFar(1e3), this.LX = !0)
      }
      release(HH) {
        this.LX && (this.LX = !1, HH.setCameraFar(null))
      }
    }
    const JQ = 1 / .6,
      iQ = [.2, .1, .2],
      pQ = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      yQ = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: ot.f.Standard,
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
      HW = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: ot.f.Standard,
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
      BW = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: ot.f.Standard,
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
      LW = {
        texture: VQ,
        aX: Math.ceil(120) + 4,
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
        blendMode: ot.f.Add
      };
    class AW {
      constructor(HH) {
        this.store = HH, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new sQ, this.timers = []
      }
      onAfterRender(HH, BH) {
        const LH = performance.now(),
          AH = 0 === this.lastMs ? 0 : Math.min(LH - this.lastMs, 250) / 1e3;
        this.lastMs = LH;
        const {
          fuse: rH,
          blast: SH
        } = this.store.get();
        null !== SH && SH !== this.shownBlast && (this.shownBlast = SH, this.startBlast(HH, BH, SH, LH));
        const hH = HH.particlesEnabled();
        null !== rH && rH.endsAt > LH && hH ? this.emitBeacon(HH, rH, AH, LH) : this.beaconBudget = 0, null !== this.cloud && (LH - this.cloud.startMs > 33e3 ? this.disposeCloud(HH) : (this.far.hold(HH), hH && this.emitCloud(HH, AH, LH)))
      }
      dispose(HH) {
        var BH;
        null === (BH = this.beacon) || void 0 === BH || BH.dispose(), this.beacon = null, this.disposeCloud(HH);
        for (const LH of this.timers) clearTimeout(LH);
        this.timers.length = 0
      }
      emitBeacon(HH, BH, LH, AH) {
        const rH = BH.endsAt - AH < 5e3 ? 350 : 1e3,
          SH = .5 + .5 * Math.sin(2 * Math.PI * AH / rH);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * SH * LH, 4), this.beaconBudget < 1) return;
        const hH = Math.floor(this.beaconBudget);
        this.beaconBudget -= hH;
        const [tH, zH, CH] = BH.at, EH = [tH + .5, zH + 1.1, CH + .5];
        this.beacon ??= HH.createParticles(LW, {
          pos: EH,
          half: iQ
        }), this.beacon.moveTo(EH), this.beacon.emit(hH)
      }
      startBlast(HH, BH, LH, AH) {
        var rH;
        null === (rH = this.beacon) || void 0 === rH || rH.dispose(), this.beacon = null, this.disposeCloud(HH);
        const SH = (0, kt.isMobile)() ? .5 : 1;
        this.streams = [yQ, HW, BW].map((HH => {
          const BH = Math.round(HH.count * SH);
          return {
            spec: HH,
            particles: null,
            rate: BH / ((HH.toMs - HH.fromMs) / 1e3),
            budget: 0,
            left: BH
          }
        })), this.cloud = {
          blast: LH,
          startMs: AH
        };
        const hH = Math.max(.25, 1 - LH.distance / (6 * LH.r)),
          tH = LH.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [LH, AH, rH] of pQ) SW(HH, BH, LH, hH * AH, rH)
        }), tH))
      }
      emitCloud(HH, BH, LH) {
        const {
          blast: AH,
          startMs: rH
        } = this.cloud, SH = LH - rH, [hH, tH, zH] = AH.at, CH = aQ(AH.r);
        for (const EH of this.streams) {
          const {
            spec: LH
          } = EH;
          if (EH.left <= 0 || SH < LH.fromMs) continue;
          EH.budget += EH.rate * BH;
          const rH = Math.min(Math.floor(EH.budget), EH.left);
          if (rH < 1) continue;
          EH.budget -= rH, EH.left -= rH;
          const XH = EH.particles ??= this.createStream(HH, LH, AH);
          if (LH === yQ) {
            const HH = CH.stemHalfWidth;
            XH.moveTo([hH, tH + 1, zH], [HH, 1, HH])
          } else if (LH === HW) {
            const HH = CH.capSpread * Math.min(1, (SH - LH.fromMs) / 3e3),
              BH = Math.sqrt(Math.random()),
              AH = 2 * Math.random() * Math.PI,
              rH = Math.cos(AH) * BH,
              EH = Math.sin(AH) * BH,
              GH = hH + rH * HH,
              YH = zH + EH * HH,
              uH = CH.capThick,
              QH = tH + CH.capHeight + uH * (1 - BH * BH) * 2;
            XH.setDirections([.7 * rH, .05, .7 * EH], [rH, .2, EH]), XH.moveTo([GH, QH, YH], [uH, uH, uH])
          } else {
            this.ringAngle += 2.39996;
            const HH = Math.cos(this.ringAngle),
              BH = Math.sin(this.ringAngle);
            XH.setDirections([HH, .05, BH], [HH, .1, BH]), XH.moveTo([hH + 2 * HH, tH + .5, zH + 2 * BH], [0, .5, 0])
          }
          XH.emit(rH)
        }
      }
      createStream(HH, BH, LH) {
        const {
          r: AH
        } = LH, rH = Math.max(BH.life[0], AH / 25), SH = BH === BW ? [.9 * rH, rH] : BH.life, hH = aQ(AH), tH = BH === BW ? 1 : hH.puffScale, zH = {
          texture: VQ,
          aX: BH.count + 4,
          minLifeTime: SH[0] / JQ,
          maxLifeTime: SH[1] / JQ,
          minSize: BH.size[0] * tH,
          maxSize: BH.size[1] * tH,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, BH.gravity * JQ * JQ, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: BH.from[0],
            maxColor: BH.from[1]
          }, {
            timeFraction: .6,
            minColor: rW(BH.from[0], BH.to[0]),
            maxColor: rW(BH.from[1], BH.to[1])
          }, {
            timeFraction: 1,
            minColor: BH.to[0],
            maxColor: BH.to[1]
          }],
          blendMode: BH.blend
        };
        if (BH === yQ) {
          const HH = hH.capHeight / ((SH[0] + SH[1]) / 2);
          zH.minEmitPower = .9 * HH * JQ, zH.maxEmitPower = 1.05 * HH * JQ, zH.dir1 = [-.1, 1, -.1], zH.dir2 = [.1, 1, .1]
        } else BH === HW ? (zH.minEmitPower = 1.2, zH.maxEmitPower = 2, zH.dir1 = [-1, .05, -1], zH.dir2 = [1, .2, 1]) : (zH.minEmitPower = 39.583333333333336, zH.maxEmitPower = 41.66666666666667, zH.dir1 = [1, 0, 0], zH.dir2 = [1, 0, 0]);
        return HH.createParticles(zH, {
          pos: LH.at
        })
      }
      disposeCloud(HH) {
        for (const LH of this.streams) {
          var BH;
          null === (BH = LH.particles) || void 0 === BH || BH.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(HH)
      }
    }

    function rW(HH, BH) {
      return [(HH[0] + BH[0]) / 2, (HH[1] + BH[1]) / 2, (HH[2] + BH[2]) / 2, .75 * HH[3]]
    }

    function SW(HH, BH, LH, AH, rH) {
      try {
        HH.playSound(BH, LH, AH, rH)
      } catch (SH) {
        console.error(SH)
      }
    }
    const hW = {
        aX: 720,
        perS: 100
      },
      tW = {
        aX: 320,
        perS: 44
      };
    class zW {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(HH, BH) {
        this.zone = {
          centre: [...HH.centre],
          r: HH.r,
          band: HH.band ? [HH.band[0], HH.band[1]] : void 0
        }, this.endsAt = BH
      }
      stop() {
        this.zone = null
      }
      lT(HH, BH) {
        const {
          baf2FalloutMs: LH,
          baf2FalloutAt: AH,
          baf2FalloutR: rH,
          baf2FalloutY: SH
        } = HH;
        LH > 0 && AH && void 0 !== rH ? this.start({
          centre: AH,
          r: rH,
          band: SH
        }, BH + LH) : this.stop()
      }
      perS(HH, BH, LH) {
        const AH = this.zone;
        if (!AH) return 0;
        const rH = this.endsAt - HH;
        return rH <= 0 ? (this.zone = null, 0) : AH.band && (BH[1] < AH.band[0] || BH[1] > AH.band[1]) || Math.hypot(BH[0] - AH.centre[0], BH[2] - AH.centre[2]) > AH.r ? 0 : LH.perS * Math.min(1, rH / 5e3)
      }
    }
    const CW = [5, 7],
      EW = [24, 8, 24],
      XW = .5,
      GW = 1 / .6,
      YW = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class uW {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, kt.isMobile)();
        this.state = new zW, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(HH) {
          return HH ? tW : hW
        }(HH)
      }
      startFallout(HH, BH) {
        this.state.start(HH, BH)
      }
      stopFallout() {
        this.state.stop()
      }
      lT(HH) {
        this.state.lT(HH, performance.now())
      }
      onAfterRender(HH, BH) {
        var LH;
        const AH = performance.now(),
          rH = 0 === this.lastMs ? 0 : Math.min(AH - this.lastMs, 250) / 1e3;
        this.lastMs = AH;
        const SH = this.state.perS(AH, BH, this.tier);
        if (SH <= 0 || !HH.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + SH * rH, SH / 4);
        const hH = Math.floor(this.budget);
        if (hH < 1) return;
        this.budget -= hH;
        const tH = this.at;
        tH[0] = BH[0], tH[1] = BH[1] + 12, tH[2] = BH[2];
        const zH = null !== (LH = this.systems) && void 0 !== LH ? LH : this.create(HH, tH),
          CH = this.amounts;
        CH[0] = 0, CH[1] = 0;
        for (let EH = 0; EH < hH; EH++) CH[Math.random() < .3 ? 1 : 0]++;
        for (let EH = 0; EH < zH.length; EH++) CH[EH] > 0 && (zH[EH].moveTo(tH, EW), zH[EH].emit(CH[EH]))
      }
      dispose() {
        for (const BH of null !== (HH = this.systems) && void 0 !== HH ? HH : []) {
          var HH;
          BH.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(HH, BH) {
        return this.systems = YW.map((LH => {
          let {
            rgba: [AH, rH, SH, hH],
            share: tH
          } = LH;
          const zH = {
            texture: "square_particle",
            aX: Math.ceil(this.tier.aX * tH),
            minLifeTime: CW[0] / GW,
            maxLifeTime: CW[1] / GW,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [XW, -1, XW],
            colorGradients: [{
              timeFraction: 0,
              minColor: [AH, rH, SH, 0]
            }, {
              timeFraction: .15,
              minColor: [AH, rH, SH, hH]
            }, {
              timeFraction: .8,
              minColor: [AH, rH, SH, hH]
            }, {
              timeFraction: 1,
              minColor: [AH, rH, SH, 0]
            }],
            blendMode: ot.f.Standard
          };
          return HH.createParticles(zH, {
            pos: BH,
            half: EW
          })
        })), this.systems
      }
    }
    const QW = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function WW(HH) {
      const BH = /\|rot(\d)/.exec(HH);
      return QW[BH ? Number(BH[1]) : 1]
    }
    var MW = LH(614),
      xW = LH(39342);
    const vW = new Set(MW.q);

    function PW(HH) {
      if (-2 !== HH.count) return null;
      const BH = DH(HH.item);
      return null !== BH && vW.has(BH) ? BH : null
    }

    function TW(HH) {
      const {
        width: BH,
        height: LH
      } = (0, xW.d)(HH).hitBoxDimensions;
      return .55 / Math.max(BH, LH)
    }

    function UW(HH, BH, LH) {
      if (!LH) return !1;
      const AH = HH[0] + .5 - BH[0],
        rH = HH[1] + .5 - BH[1],
        SH = HH[2] + .5 - BH[2];
      return AH * AH + rH * rH + SH * SH <= 576
    }

    function VW(HH, BH) {
      return Math.atan2(HH[0], HH[2]) + Math.PI + BH
    }

    function OW(HH, BH) {
      const LH = 2 * Math.PI;
      return (HH + LH * BH / 1e4) % LH
    }
    class bW {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = HH, this.now = BH, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = HH.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(HH, BH) {
        if (0 === this.farms.size) return;
        const LH = this.now(),
          AH = Number.isNaN(this.frameMs) ? 0 : Math.min(LH - this.frameMs, 100);
        this.frameMs = LH, LH - this.checkedMs >= 1e3 && (this.checkedMs = LH, this.check(HH, BH));
        for (const rH of this.farms.values()) rH.shown && rH.running && null !== rH.model && AH > 0 && (rH.spin = OW(rH.spin, AH), rH.model.setPose(rH.feet, VW(rH.front, rH.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const HH of this.farms.values()) this.drop(HH);
        this.farms.clear()
      }
      sync() {
        const HH = new Set;
        for (const BH of this.labels.list()) {
          const LH = PW(BH);
          if (null === LH) continue;
          HH.add(BH.key);
          const AH = this.farms.get(BH.key);
          if ((null === AH || void 0 === AH ? void 0 : AH.mob) === LH) continue;
          AH && this.drop(AH);
          const [rH, SH, hH] = BH.pos;
          this.farms.set(BH.key, {
            pos: BH.pos,
            feet: [rH + .5, SH + 1, hH + .5],
            mob: LH,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [BH, LH] of this.farms) HH.has(BH) || (this.drop(LH), this.farms.delete(BH));
        this.checkedMs = -1 / 0
      }
      check(HH, BH) {
        for (const LH of this.farms.values()) {
          const [AH, rH, SH] = LH.pos, hH = ou(HH, LH.pos);
          null !== hH && fL(hH) === eH && UW(LH.pos, BH, "Air" === ou(HH, [AH, rH + 1, SH])) ? (LH.running = hH.endsWith("|Running"), LH.front = WW(hH), null === LH.model && (LH.model = HH.createMobModel(LH.mob, TW(LH.mob)), null === LH.model) || (LH.model.setPose(LH.feet, VW(LH.front, LH.spin)), LH.shown || (LH.model.setVisible(!0), LH.shown = !0))) : (LH.shown && null !== LH.model && LH.model.setVisible(!1), LH.shown = !1)
        }
      }
      drop(HH) {
        var BH;
        null === (BH = HH.model) || void 0 === BH || BH.dispose(), HH.model = null, HH.shown = !1
      }
    }
    class kW {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(HH) {
        var BH;
        this.island = HH.baf2ColIsland, this.islandSite = (BH = HH.baf2ColSite) && 8 === BH.length ? {
          spawnXZ: [BH[0], BH[1]],
          coreXZ: [BH[2], BH[3]],
          minXZ: [BH[4], BH[5]],
          maxXZ: [BH[6], BH[7]]
        } : null, this.views = HH.baf2ColList.map((HH => ({
          entry: rr(HH)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(HH) {
        this.status = HH, this.emit()
      }
      onOpen(HH) {
        this.openHeld = HH
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
        return this.views.map((HH => HH.entry))
      }
      entryAtRoot(HH) {
        var BH;
        return null === (BH = this.views.find((BH => {
          let {
            entry: LH
          } = BH;
          return LH.focus[0] === HH[0] && LH.focus[1] === HH[1] + 1 && LH.focus[2] === HH[2]
        }))) || void 0 === BH ? void 0 : BH.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(HH, BH) {
        return cz(this.entries(), HH, BH)
      }
      lookSource() {
        return {
          handles: HH => GA(HH) >= 0 || YA(HH),
          line: (HH, BH) => this.lookLine(HH, BH),
          version: () => this.beamsVersion
        }
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const HH of this.listeners) HH()
      }
    }
    const mW = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((HH => HH / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((HH => [HH, HH + 1, HH + 2, HH, HH + 2, HH + 3]))
    };

    function oW(HH, BH, LH, AH, rH, SH, hH) {
      let tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const zH = Math.cos(tH),
        CH = Math.sin(tH),
        EH = HH.positions.length / 3,
        {
          positions: XH,
          indices: GH
        } = mW;
      for (let YH = 0; YH < XH.length; YH += 3) {
        const tH = XH[YH] * rH,
          EH = XH[YH + 2] * hH;
        HH.positions.push(BH + tH * zH + EH * CH, LH + XH[YH + 1] * SH, AH - tH * CH + EH * zH)
      }
      for (const YH of GH) HH.indices.push(EH + YH)
    }

    function IW(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return BH < 1 ? {
        rgb: HH,
        alpha: BH
      } : {
        rgb: HH,
        alpha: 1,
        opaque: !0
      }
    }
    class fW {
      constructor(HH, BH) {
        this.style = HH, this.perSource = BH, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(HH) {
        this.sources = HH, 0 === HH.length && (this.budget = 0)
      }
      IX(HH, BH, LH) {
        const AH = this.sources.length;
        if (0 !== AH) {
          var rH, SH;
          this.budget = Math.min(this.budget + (rH = AH, SH = this.perSource, Math.min(rH * SH, sz) * BH), 2);
          for (let BH = 0; BH < AH && this.budget >= 1; BH++) {
            const BH = this.sources[this.cursor % AH];
            this.cursor = (this.cursor + 1) % AH;
            if (!(Math.max(Math.abs(BH.x - LH[0]), Math.abs(BH.y - LH[1]), Math.abs(BH.z - LH[2])) > 32)) return this.puff(HH, BH), void this.budget--
          }
        }
      }
      dispose() {
        var HH;
        null === (HH = this.particles) || void 0 === HH || HH.dispose(), this.particles = null, this.sources = []
      }
      puff(HH, BH) {
        let {
          x: LH,
          y: AH,
          z: rH,
          h: SH,
          faces: hH
        } = BH;
        const tH = function(HH, BH, LH, AH, rH) {
            const [SH, hH, tH] = rH[Math.floor(Math.random() * rH.length)], zH = .04, CH = (HH, BH, LH) => HH > 0 ? BH + LH + zH : HH < 0 ? BH - zH : BH + .1, EH = (HH, BH, LH) => HH > 0 ? BH + LH + zH : HH < 0 ? BH - zH : BH + LH - .1, XH = [CH(SH, HH, 1), CH(hH, BH, AH), CH(tH, LH, 1)], GH = [EH(SH, HH, 1), EH(hH, BH, AH), EH(tH, LH, 1)];
            return {
              pos: [(XH[0] + GH[0]) / 2, (XH[1] + GH[1]) / 2, (XH[2] + GH[2]) / 2],
              half: [(GH[0] - XH[0]) / 2, (GH[1] - XH[1]) / 2, (GH[2] - XH[2]) / 2],
              out: [SH, hH, tH]
            }
          }(LH, AH, rH, SH, hH),
          {
            style: zH
          } = this,
          CH = this.particles ??= HH.createParticles(bQ(zH, Math.ceil(zH.count * sz * zH.life[1]) + 4), tH);
        CH.moveTo(tH.pos, tH.half);
        const [EH, XH, GH] = tH.out, YH = zH.spread;
        CH.setDirections([EH - YH, .6 + XH, GH - YH], [EH + YH, 1 + XH, GH + YH]), CH.emit(zH.count)
      }
    }
    const lW = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class KW {
      constructor() {
        this.green = new fW(iz.green, dz), this.pink = new fW(iz.pink, az), this.colliders = [], this.lastMs = 0
      }
      setSources(HH) {
        this.colliders = HH;
        const BH = [],
          LH = [];
        for (const AH of HH) {
          const [HH, rH, SH] = AH.focus;
          BH.push({
            x: HH,
            y: rH - 1,
            z: SH,
            h: 2,
            faces: lW
          });
          for (let BH = 0; BH < 4; BH++) {
            if (!AH.live[BH]) continue;
            const [HH, rH, SH] = WA(AH.focus, BH, hA.LASER_D), [hH, , tH] = QA[BH], zH = lW.filter((HH => HH[0] !== hH || HH[2] !== tH || 0 !== HH[1]));
            LH.push({
              x: HH,
              y: rH,
              z: SH,
              h: 1,
              faces: zH
            })
          }
        }
        this.green.setSources(BH), this.pink.setSources(LH)
      }
      onAfterRender(HH) {
        const BH = performance.now(),
          LH = 0 === this.lastMs ? 0 : Math.min(BH - this.lastMs, 250) / 1e3;
        if (this.lastMs = BH, 0 === this.colliders.length || !HH.particlesEnabled()) return;
        const AH = HH.getCameraPosition();
        this.green.IX(HH, LH, AH), this.pink.IX(HH, LH, AH)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const cW = 1.04,
      eW = IW([1, 120 / 255, 220 / 255]),
      qW = IW([1, .25, .25], .35);
    class gW {
      constructor(HH) {
        this.store = HH, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new KW
      }
      onAfterRender(HH) {
        this.store.version() !== this.builtVersion && this.rebuild(HH);
        const BH = performance.now();
        for (const LH of this.beams) {
          const AH = 1 + .35 * Math.sin(BH / 700 * Math.PI * 2 + LH.phase);
          HH.setGameMesh(LH.mesh, {
            scale: [LH.alongX ? 1 : AH, AH, LH.alongX ? AH : 1]
          })
        }
        this.glow.onAfterRender(HH)
      }
      dispose(HH) {
        this.clear(HH), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(HH) {
        this.clear(HH), this.builtVersion = this.store.version();
        const BH = [];
        for (const {
            entry: LH
          }
          of this.store.colliders()) LH.on && LH.live.some(Boolean) && (this.addBeams(HH, LH), BH.push(LH)), LH.blockers.length > 0 && this.addMarkers(HH, LH);
        this.glow.setSources(BH)
      }
      addBeams(HH, BH) {
        const [LH, AH, rH] = BH.focus, SH = Zz - .25, hH = (.25 + Zz) / 2;
        for (let tH = 0; tH < 4; tH++) {
          if (!BH.live[tH]) continue;
          const [zH, , CH] = QA[tH], EH = 0 !== zH, XH = {
            positions: [],
            indices: []
          };
          oW(XH, 0, 0, 0, EH ? SH : .2, .2, EH ? .2 : SH);
          const GH = [LH + .5 + zH * hH, AH + .5, rH + .5 + CH * hH],
            YH = HH.createGameMesh(XH, eW, GH);
          this.meshes.push(YH), this.beams.push({
            mesh: YH,
            alongX: EH,
            phase: tH * Math.PI / 2
          })
        }
      }
      addMarkers(HH, BH) {
        const LH = BH.blockers[0],
          AH = {
            positions: [],
            indices: []
          };
        for (const [rH, SH, hH] of BH.blockers) oW(AH, rH - LH[0] + .5, SH - LH[1] + .5, hH - LH[2] + .5, cW, cW, cW);
        this.meshes.push(HH.createGameMesh(AH, qW, LH))
      }
      clear(HH) {
        for (const BH of this.meshes) HH.disposeGameMesh(BH);
        this.meshes = [], this.beams = []
      }
    }
    const NW = [.56, .83, 1],
      RW = [1, .73, .08],
      jW = [1, .25, .25],
      nW = [.85, .85, .85],
      FW = [.3, .45, .6];

    function DW(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const hH = rH / 2,
        tH = rH + SH;
      for (const zH of [-hH, hH])
        for (const rH of [-hH, hH]) oW(HH, BH, LH + zH, AH + rH, tH, SH, SH), oW(HH, BH + zH, LH, AH + rH, SH, tH, SH), oW(HH, BH + zH, LH + rH, AH, SH, SH, tH)
    }

    function wW(HH) {
      return BH => HH.isBlockInLoadedChunk(BH[0], BH[1], BH[2]) && 0 === HH.getBlockId(BH[0], BH[1], BH[2])
    }

    function ZW(HH) {
      return HH.map((HH => {
        let {
          free: BH,
          blocked: LH,
          gaps: AH,
          supports: rH
        } = HH;
        return `${BH.join(";")}|${LH.join(";")}|${AH.join(";")}|${rH.join(";")}`
      })).join("/")
    }

    function dW(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const SH = BH[0],
        hH = {
          positions: [],
          indices: []
        };
      for (const [tH, zH, CH] of BH) DW(hH, tH - SH[0] + .5, zH - SH[1] + .5, CH - SH[2] + .5, AH, rH);
      return HH.createGameMesh(hH, LH, SH)
    }
    class aW {
      constructor(HH) {
        this.store = HH, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(HH, BH, LH) {
        var AH;
        const rH = null === (AH = HH.yLH(BH)) || void 0 === AH ? void 0 : AH.name;
        if (rH !== zA && rH !== tA) return void("" !== this.shownKey && this.show(HH, "", []));
        const SH = performance.now();
        if (SH - this.lastCheckMs >= 200 && (this.lastCheckMs = SH, rH === zA ? this.check(HH, LH) : this.preview(HH, LH)), this.pulses.length > 0) {
          const BH = 1 + .12 * Math.sin(SH / 1e3 * 1.25 * Math.PI * 2),
            LH = [BH, BH, BH];
          for (const AH of this.pulses) HH.setGameMesh(AH, {
            scale: LH
          })
        }
      }
      dispose(HH) {
        this.clear(HH), this.shownKey = ""
      }
      check(HH, BH) {
        const LH = wW(HH),
          AH = [];
        for (const {
            entry: SH
          }
          of this.store.colliders()) {
          SH.focus.every(((HH, LH) => Math.abs(HH + .5 - BH[LH]) <= hA.GHOST_REACH)) && AH.push(wz(SH, LH))
        }
        const rH = ZW(AH);
        rH !== this.shownKey && this.show(HH, rH, AH)
      }
      preview(HH, BH) {
        const LH = HH.getTargetedBlock(),
          AH = LH ? [LH.AW[0], LH.AW[1], LH.AW[2]] : null,
          rH = null !== AH && AH.every(((HH, LH) => Math.abs(HH + .5 - BH[LH]) <= 8)),
          SH = this.store.site(),
          hH = rH && SH ? function(HH, BH, LH) {
            const AH = uA(HH);
            if (!AH.every(BH)) return null;
            const rH = vA(HH, LH);
            return {
              column: AH,
              spots: wz({
                focus: AH[1],
                lasers: [!1, !1, !1, !1],
                open: rH,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, BH),
              fits: rH.filter(Boolean).length >= hA.MIN_SPOTS
            }
          }(AH, wW(HH), SH) : null,
          tH = hH ? [hH.spots] : [],
          zH = hH ? `preview ${AH.join(",")}|${hH.fits}|${ZW(tH)}` : "";
        var CH, EH;
        zH !== this.shownKey && this.show(HH, zH, tH, null !== (CH = null === hH || void 0 === hH ? void 0 : hH.column) && void 0 !== CH ? CH : [], null === (EH = null === hH || void 0 === hH ? void 0 : hH.fits) || void 0 === EH || EH)
      }
      show(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          rH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(HH), this.shownKey = BH, AH.length > 0 && this.meshes.push(dW(HH, AH, IW(rH ? nW : jW)));
        for (const {
            free: SH,
            blocked: hH,
            gaps: tH,
            supports: zH
          }
          of LH) {
          for (const [BH, LH, AH] of SH) {
            const rH = {
              positions: [],
              indices: []
            };
            DW(rH, 0, 0, 0);
            const SH = HH.createGameMesh(rH, IW(NW), [BH + .5, LH + .5, AH + .5]);
            this.meshes.push(SH), this.pulses.push(SH)
          }
          hH.length > 0 && this.meshes.push(dW(HH, hH, IW(RW))), tH.length > 0 && this.meshes.push(dW(HH, tH, IW(jW), 1.06, .07)), zH.length > 0 && this.meshes.push(dW(HH, zH, IW(FW)))
        }
      }
      clear(HH) {
        for (const BH of this.meshes) HH.disposeGameMesh(BH);
        this.meshes = [], this.pulses = []
      }
    }
    class sW {
      constructor() {
        this.stored = new Map, this.LX = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(HH) {
        if (!HH.baf2TermOpen) return !1;
        HH.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [BH, LH] of HH.baf2TermItems) LH > 0 ? this.stored.set(BH, LH) : this.stored.delete(BH);
        if (HH.baf2TermHeld && (this.LX = new Map(HH.baf2TermHeld)), this.pending = this.pending.filter((BH => BH.seq > HH.baf2TermAcked)), this.silos = HH.baf2TermSilos, this.readOnly = HH.baf2TermReadOnly, this.pocket = !0 === HH.baf2TermPocket, HH.baf2TermReset) this.resort();
        else {
          const HH = new Set(this.order);
          for (const BH of this.stored.keys()) HH.has(BH) || this.order.push(BH)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((HH, BH) => this.amount(BH) - this.amount(HH) || HH.localeCompare(BH))), this.changed()
      }
      take(HH, BH) {
        const LH = tB(HH, this.amount(BH));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: BH,
          amount: LH,
          put: !1
        }), this.recents = [BH, ...this.recents.filter((HH => HH !== BH))].slice(0, 6), this.changed(), LB(this.seq, HH, BH)
      }
      put(HH, BH) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: BH,
          amount: tB(HH, this.heldAmount(BH)),
          put: !0
        }), this.changed(), AB(this.seq, HH, BH)
      }
      putAll() {
        this.seq++;
        for (const HH of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: HH,
          amount: this.heldAmount(HH),
          put: !0
        });
        return this.changed(), rB(this.seq)
      }
      amount(HH) {
        var BH;
        let LH = null !== (BH = this.stored.get(HH)) && void 0 !== BH ? BH : 0;
        for (const AH of this.pending) AH.item === HH && (LH += AH.put ? AH.amount : -AH.amount);
        return Math.max(0, LH)
      }
      heldAmount(HH) {
        var BH;
        let LH = null !== (BH = this.LX.get(HH)) && void 0 !== BH ? BH : 0;
        for (const AH of this.pending) AH.put && AH.item === HH && (LH -= AH.amount);
        return Math.max(0, LH)
      }
      heldItems() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((BH => BH === HH || this.heldAmount(BH) > 0))
      }
      items() {
        return this.order.filter((HH => this.amount(HH) > 0))
      }
      recent() {
        return this.recents.filter((HH => this.amount(HH) > 0))
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
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      changed() {
        this.version++;
        for (const HH of this.listeners) HH()
      }
    }
    var JW = LH(39288);
    const iW = {
      isBlock: HH => void 0 !== fH.g[HH],
      harvestType: HH => {
        var BH;
        return null === (BH = fH.g[HH]) || void 0 === BH ? void 0 : BH.harvestType
      },
      harvestLevel: HH => {
        var BH;
        return null === (BH = fH.g[HH]) || void 0 === BH ? void 0 : BH.harvestLevel
      },
      dropsNothing: HH => {
        var BH;
        return null === (null === (BH = fH.g[HH]) || void 0 === BH ? void 0 : BH.drops)
      },
      displayName: HH => {
        var BH;
        return null === (BH = dh.m[HH]) || void 0 === BH ? void 0 : BH.displayName
      },
      description: HH => {
        var BH;
        return null === (BH = dh.m[HH]) || void 0 === BH ? void 0 : BH.description
      },
      harvests: HH => {
        var BH;
        return null === (BH = dh.m[HH]) || void 0 === BH ? void 0 : BH.harvests
      },
      level: HH => {
        var BH;
        return null === (BH = dh.m[HH]) || void 0 === BH ? void 0 : BH.level
      }
    };

    function pW(HH, BH, LH) {
      return function(HH, BH, LH, AH) {
        var rH, SH;
        const hH = BH.split("|")[0],
          tH = HH.isBlock(BH) ? BH : HH.isBlock(hH) ? hH : null;
        if (null === tH || "rock" !== HH.harvestType(tH) || HH.dropsNothing(tH) && !qA.has(hH)) return null;
        const zH = LH && "rock" === HH.harvests(LH) ? null !== (rH = HH.level(LH)) && void 0 !== rH ? rH : 0 : null,
          CH = null !== (SH = null !== AH && void 0 !== AH ? AH : HH.harvestLevel(tH)) && void 0 !== SH ? SH : 0;
        return (null !== zH ? CH <= zH : 0 === HH.harvestLevel(tH)) ? null : kA(HH, CH)
      }(iW, HH, BH, LH)
    }

    function yW(HH, BH) {
      return function(HH, BH, LH) {
        if (BH === bA[0]) return [(0, cH.fe)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, cH.K.whiteUiText)];
        const AH = LH.split("|")[0],
          rH = HH.isBlock(AH) ? HH.displayName(AH) : void 0,
          SH = "string" === typeof rH ? rH : rH && "translationKey" in rH ? `$t(${rH.translationKey})` : AH;
        return [(0, cH.fe)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: SH
          }
        }, cH.K.whiteUiText), (0, cH.fe)({
          translationKey: `item:${(0,cH.Fe)(BH)}`
        }, cH.K.yellowUiText)]
      }(iW, HH, BH)
    }
    const HM = "buildAFactory2Game:";
    const BM = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function LM(HH) {
      return HH.endsWith(" Ore")
    }
    const AM = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      rM = [],
      SM = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: AM,
        plan: null,
        atomic: rM
      },
      hM = "buildAFactory2Game:",
      tM = new Set(["Splitter", "Sorting Gate"]),
      zM = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class CM {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = HH, this.planAt = BH, this.tierOf = LH, this.ph = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.LX = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = SM, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(HH, BH, LH) {
        var AH, rH, SH;
        let hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const tH = null !== (AH = null === (rH = HH.yLH(BH)) || void 0 === rH ? void 0 : rH.name) && void 0 !== AH ? AH : null,
          zH = HH.isPlayerCrouching(BH),
          CH = 0 === LH ? null : this.resolve(HH, LH),
          EH = null !== CH && null !== hH && tM.has(CH.rootName) && function(HH, BH) {
            return zM.some((LH => {
              let [AH, rH] = LH;
              const SH = HH.getBlockId(BH[0] + AH, BH[1], BH[2] + rH);
              return 0 !== SH && "Express Belt" === HH.getMetaInfo(SH).rootName
            }))
          }(HH, hH),
          XH = this.updatePlan(0 === LH ? null : hH),
          GH = this.tierOf(),
          YH = null === hH ? null : (0, JW.c)(LH),
          uH = null !== YH && null !== hH && (0, JW.d)(function(HH) {
            return (BH, LH, AH) => HH.getBlockId(BH, LH, AH)
          }(HH), hH[0], hH[1], hH[2], YH),
          QH = this.readAfloat(HH, LH, hH);
        if (LH === this.ph && uH === this.missesMaker && QH === this.afloat && tH === this.LX && zH === this.crouching && EH === this.express && GH === this.tier && !XH && (!this.targetsLive || !this.liveMoved(hH))) return;
        this.ph = LH, this.missesMaker = uH, this.afloat = QH, this.LX = tH, this.crouching = zH, this.express = EH;
        const WH = EH && CH ? function(HH) {
          if (null === HH.info) return null;
          return HH.express ??= {
            ...HH.info,
            detail: `${hM}lookKeepsUpExpress`,
            detailItem: null
          }, HH.express
        }(CH) : null !== CH && uH && null !== YH ? this.besideMaker(CH, LH, YH) : null !== CH && QH ? this.hanging(CH) : null !== (SH = null === CH || void 0 === CH ? void 0 : CH.info) && void 0 !== SH ? SH : null;
        this.tier = GH;
        const MH = CH && WH ? function(HH, BH) {
          var LH, AH;
          const rH = fH.g[HH];
          if (!HH.endsWith(" Ore") || "rock" !== (null === rH || void 0 === rH ? void 0 : rH.harvestType) || 0 === rH.harvestLevel) return null;
          const SH = null !== (LH = rH.harvestLevel) && void 0 !== LH ? LH : 0,
            hH = BH ? dh.m[BH] : void 0;
          if ("rock" === (null === hH || void 0 === hH ? void 0 : hH.harvests) && (null !== (AH = hH.level) && void 0 !== AH ? AH : 0) >= SH) return null;
          const tH = (zH = SH, kA(iW, zH));
          var zH;
          if (null === tH) return null;
          const CH = (0, pr.d)(tH),
            EH = /^[AEIOU]/.test(tH) ? "An" : "";
          if ("rock" === (null === hH || void 0 === hH ? void 0 : hH.harvests) && BH) return {
            key: `${hM}lookToolTooWeak${EH}`,
            LX: (0, pr.d)(BH),
            needed: CH
          };
          return {
            key: tH === bA[0] ? `${hM}lookNeedAnyPickaxe` : `${hM}lookNeedPickaxe${EH}`,
            LX: null,
            needed: CH
          }
        }(CH.rootName, tH) : null;
        this.targetsLive = !0 === (null === CH || void 0 === CH ? void 0 : CH.live) && null !== hH;
        let xH = null;
        this.targetsLive && CH && hH && this.live && (this.livePos[0] = hH[0], this.livePos[1] = hH[1], this.livePos[2] = hH[2], this.liveVersion = this.live.version(), xH = this.live.line(CH.rootName, hH));
        const vH = null === WH ? AM : function(HH, BH, LH) {
            const AH = function(HH, BH, LH) {
              const AH = KL(HH);
              if (null === AH) return null;
              const rH = `${HM}lookPortMode_${AH}`,
                SH = RA(BH);
              if (SH && LH) return {
                mode: null,
                detail: rH,
                next: `${HM}lookWrenchPickUp`,
                nextState: null
              };
              const hH = cL(HH),
                tH = null === hH ? null : KL(hH);
              return null === tH ? {
                mode: null,
                detail: rH,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: rH,
                next: SH ? `${HM}lookWrenchNext` : `${HM}lookPortWrench`,
                nextState: `${HM}lookPortState_${tH}`
              }
            }(HH, BH, LH);
            if (null !== AH) return AH;
            const rH = Hr(HH, BH, LH);
            return null === rH.mode && null === rH.next ? AM : rH
          }(HH.blockIdToBlockName(LH), tH, zH),
          PH = this.plan,
          TH = CH && WH ? this.rowsOf(CH.rootName, GH) : rM,
          UH = this.snapshot;
        if (!(null === WH ? !UH.visible : UH.visible && WH === UH.info && (VH = MH, OH = UH.tool, VH === OH || null !== VH && null !== OH && VH.key === OH.key && VH.LX === OH.LX && VH.needed === OH.needed) && function(HH, BH) {
            return HH === BH || null !== HH && null !== BH && HH.key === BH.key && JSON.stringify([HH.params, HH.keys]) === JSON.stringify([BH.params, BH.keys])
          }(xH, UH.live) && function(HH, BH) {
            return HH.mode === BH.mode && HH.detail === BH.detail && HH.next === BH.next && HH.nextState === BH.nextState
          }(vH, UH.wrench) && ju(PH, UH.plan) && TH === UH.atomic)) {
          var VH, OH;
          this.snapshot = null === WH ? {
            ...UH,
            visible: !1
          } : {
            info: WH,
            visible: !0,
            tool: MH,
            live: xH,
            wrench: vH,
            plan: PH,
            atomic: TH
          };
          for (const HH of this.listeners) HH()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = SM, this.ph = 0, this.LX = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(HH, BH, LH) {
        if (null === LH || 0 === BH || !tH() || !LM(this.resolve(HH, BH).rootName)) return !1;
        const AH = `${LH[0]},${LH[1]},${LH[2]},${BH}`,
          rH = performance.now();
        return AH === this.afloatKey && rH - this.afloatAt < EM ? this.afloat : (this.afloatKey = AH, this.afloatAt = rH, function(HH, BH) {
          for (const [LH, AH, rH] of BM) {
            const SH = BH(HH[0] + LH, HH[1] + AH, HH[2] + rH);
            if (void 0 === SH || null !== SH && !LM(SH)) return !1
          }
          return !0
        }(LH, ((BH, LH, AH) => function(HH, BH, LH, AH) {
          if (!HH.isBlockInLoadedChunk(BH, LH, AH)) return;
          const rH = HH.getBlockId(BH, LH, AH);
          return 0 === rH ? null : HH.getMetaInfo(rH).rootName
        }(HH, BH, LH, AH))))
      }
      liveMoved(HH) {
        var BH;
        const {
          livePos: LH
        } = this;
        return null === HH || HH[0] !== LH[0] || HH[1] !== LH[1] || HH[2] !== LH[2] || (null === (BH = this.live) || void 0 === BH ? void 0 : BH.version()) !== this.liveVersion
      }
      updatePlan(HH) {
        const BH = null === HH ? "" : HH.join(","),
          LH = performance.now();
        if (BH === this.planPos && LH - this.planMs < 250) return !1;
        this.planPos = BH, this.planMs = LH;
        const AH = null === HH ? null : this.planAt([HH[0], HH[1], HH[2]]),
          rH = !ju(AH, this.plan);
        return this.plan = AH, rH
      }
      besideMaker(HH, BH, LH) {
        let {
          info: AH
        } = HH;
        if (null === AH) return null;
        let rH = this.besideMakerById.get(BH);
        if (void 0 === rH) {
          const HH = "cryo" === LH ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          rH = {
            ...AH,
            detail: `${hM}${HH}`,
            detailItem: null
          }, this.besideMakerById.set(BH, rH)
        }
        return rH
      }
      hanging(HH) {
        let {
          info: BH,
          rootName: LH
        } = HH;
        if (null === BH) return null;
        let AH = this.afloatByRoot.get(LH);
        return void 0 === AH && (AH = {
          ...BH,
          detail: `${hM}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(LH, AH)), AH
      }
      rowsOf(HH, BH) {
        if (null === BH) return rM;
        const LH = `${HH}|${BH}`;
        let AH = this.rowsByKey.get(LH);
        if (void 0 === AH) {
          const rH = function(HH, BH) {
            var LH;
            if (!(HH in cB)) return [];
            const AH = null !== (LH = eB[HH]) && void 0 !== LH ? LH : [],
              rH = new Map;
            for (const hH of qS(HH, BH))
              if ((AH.includes(hH) || eS(hH.output) && KS(hH.output) > JH(HH)) && KS(hH.output) <= BH) {
                var SH;
                const HH = null !== (SH = rH.get(hH.output)) && void 0 !== SH ? SH : [];
                HH.push(hH.input), rH.set(hH.output, HH)
              } return NS([...rH], (HH => {
              let [BH] = HH;
              return -KS(BH)
            })).map((HH => {
              let [BH, LH] = HH;
              return {
                output: BH,
                inputs: LH
              }
            }))
          }(HH, BH);
          AH = rH.length > 0 ? rH : rM, this.rowsByKey.set(LH, AH)
        }
        return AH
      }
      resolve(HH, BH) {
        const {
          rootId: LH,
          rootName: AH
        } = HH.getMetaInfo(BH), rH = (0, uL.i)(AH) ? BH : LH;
        let SH = this.byRootId.get(rH);
        const hH = tH();
        if (void 0 === SH || SH.nuclear !== hH) {
          var zH;
          const LH = function(HH) {
            return cA(iW, HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH)
          }(AH, HH.blockIdToBlockName(BH));
          SH = {
            info: LH,
            rootName: AH,
            live: null !== LH && !0 === (null === (zH = this.live) || void 0 === zH ? void 0 : zH.handles(AH)),
            nuclear: hH
          }, this.byRootId.set(rH, SH)
        }
        return SH
      }
    }
    const EM = 500;
    const XM = (0, AH.memo)((function(HH) {
      var BH, LH;
      let {
        store: rH
      } = HH;
      const {
        t: SH
      } = (0, Or.B)(), [hH, tH] = (0, AH.useState)((() => rH.get()));
      (0, AH.useEffect)((() => (tH(rH.get()), rH.subscribe((() => {
        tH(rH.get())
      })))), [rH]);
      const {
        openInGameMenuName: zH,
        openEverythingMenuName: CH,
        isTouchScreen: EH
      } = (0, Mr.m)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: XH,
        tool: GH,
        live: YH,
        wrench: uH,
        atomic: QH
      } = hH, WH = hH.visible && null === zH && null === CH;
      if (null === XH) return null;
      const MH = null !== uH.detail ? SH(uH.detail) : null !== (BH = hH.plan) && void 0 !== BH && BH.ctrl ? SH("buildAFactory2Game:lookPlanCtrl") : null !== XH.detail ? SH(XH.detail, null === XH.detailItem ? void 0 : {
        item: SH(XH.detailItem)
      }) : null;
      return (0, vS.jsxs)("div", {
        className: Pr()("Baf2LookTarget", {
          Visible: WH
        }),
        "aria-hidden": !WH,
        children: [(0, vS.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: SH(XH.name)
        }), null !== hH.plan && (0, vS.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: SH(hH.plan.key, {
            kind: SH(hH.plan.kindKey),
            w: String(hH.plan.w),
            h: String(hH.plan.h),
            d: String(hH.plan.d),
            count: String(hH.plan.count)
          })
        }), void 0 !== (null === (LH = hH.plan) || void 0 === LH ? void 0 : LH.why) && (0, vS.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: SH(hH.plan.why)
        }), null !== uH.mode && (0, vS.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: SH(uH.mode)
        }), null !== GH ? (0, vS.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: SH(GH.key, {
            item: SH(GH.needed),
            LX: null === GH.LX ? "" : SH(GH.LX)
          })
        }) : null !== YH ? (0, vS.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: SH(YH.key, pz(SH, YH))
        }) : null !== MH && (0, vS.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: MH
        }), QH.length > 0 && (0, vS.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: SH("buildAFactory2Game:lookAtomicRecipes", {
            list: QH.map((HH => {
              let {
                output: BH,
                inputs: LH
              } = HH;
              const AH = LH.length > 1 ? ` ${SH("buildAFactory2Game:recipeMore",{count:String(LH.length-1)})}` : "";
              return `${SH((0,pr.d)(LH[0]))}${AH} \u2192 ${SH((0,pr.d)(BH))}`
            })).join(", ")
          })
        }), null !== uH.next && (0, vS.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: SH(uH.next, {
            state: null === uH.nextState ? "" : SH(uH.nextState),
            use: SH(EH ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var GM = LH(39396);
    const YM = [],
      uM = [
        [0, -1, 0]
      ];

    function QM(HH) {
      const BH = [HH];
      for (let LH = 1; LH <= 4; LH++) LH > 1 && BH.push(`${HH}|meta|rot${LH}`), BH.push(`${HH}|meta|rot${LH}|Running`);
      return BH
    }

    function WM(HH, BH) {
      return [Math.floor(HH[0] / BH), Math.floor(HH[1] / BH), Math.floor(HH[2] / BH)]
    }

    function MM(HH, BH, LH) {
      return `${HH},${BH},${LH}`
    }

    function xM(HH) {
      const BH = HH.split("|")[0];
      if (!CL(BH)) return YM;
      const LH = cB[BH];
      if (BL(LH)) return uM;
      const AH = WW(HH);
      return LL(LH) ? [
        [-AH[0], -AH[1], -AH[2]]
      ] : Tr(LH) ? function(HH, BH) {
        const LH = HH[0] - 2 * BH[0],
          AH = HH[2] - 2 * BH[2],
          rH = [];
        for (let SH = -1; SH <= 1; SH++)
          for (let BH = -1; BH <= 1; BH++) rH.push([LH + SH, HH[1], AH + BH]);
        return rH
      }([0, 0, 0], AH) : YM
    }
    const vM = [.5, .5, .5],
      PM = [.2, .8, .3],
      TM = [.45, 1, .5];
    class UM {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(HH) {
        this.indexed = !0;
        for (const BH of mB)
          for (const LH of QM(BH)) {
            const BH = HH.blockNameToBlockId(LH, !0),
              AH = xM(LH);
            null !== BH && AH.length > 0 && (this.offsetsList.push(AH), this.offsetsIndexById[BH] = this.offsetsList.length)
          }
      }
      onAfterRender(HH, BH) {
        this.indexed || this.index(HH);
        const LH = performance.now();
        if (LH - this.lastCheckMs < 100) return;
        this.lastCheckMs = LH, this.checks++;
        const AH = zu.g.xX,
          [rH, SH, hH] = WM(BH, AH);
        let tH = !1;
        const zH = [];
        let CH = 0;
        for (let EH = rH - 2; EH <= rH + 2; EH++)
          for (let BH = SH - 1; BH <= SH + 1; BH++)
            for (let rH = hH - 2; rH <= hH + 2; rH++) {
              const SH = CH++,
                hH = MM(EH, BH, rH),
                XH = HH.getChunkVersion(EH, BH, rH);
              let GH = this.chunks.get(hH);
              null !== XH ? (GH || (GH = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(hH, GH)), GH.seenAt = this.checks, GH.checkedVersion !== XH && (GH.checkedVersion = XH, tH = !0), GH.scannedVersion !== XH && LH - GH.scannedAt >= 500 && zH.push({
                slot: SH,
                entry: GH,
                origin: [EH * AH, BH * AH, rH * AH]
              })) : (tH ||= void 0 !== GH, this.chunks.delete(hH))
            }
        this.scanDue(HH, zH) && (tH = !0);
        for (const [EH, XH] of this.chunks) XH.seenAt !== this.checks && (tH ||= XH.machines.length > 0, this.chunks.delete(EH));
        for (const EH of this.chunks.values())
          for (const [BH, LH, AH] of EH.cellChunks)(Math.abs(BH - rH) > 2 || Math.abs(LH - SH) > 1 || Math.abs(AH - hH) > 2) && this.watchCellChunk(HH, BH, LH, AH) && (tH = !0);
        for (const [EH, XH] of this.cellChunks) XH.seenAt !== this.checks && this.cellChunks.delete(EH);
        tH && this.refresh(HH)
      }
      dispose(HH) {
        this.clearMeshes(HH), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(HH, BH) {
        const LH = Math.max(BH.findIndex((HH => {
          let {
            slot: BH
          } = HH;
          return BH >= this.scanFrom
        })), 0);
        let AH = 96;
        for (let rH = 0; rH < BH.length; rH++) {
          const {
            slot: SH,
            entry: hH,
            origin: tH
          } = BH[(LH + rH) % BH.length];
          if (AH -= this.scan(HH, hH, tH), AH <= 0) {
            this.scanFrom = SH + 1;
            break
          }
        }
        return BH.length > 0
      }
      scan(HH, BH, LH) {
        let [AH, rH, SH] = LH;
        const hH = zu.g.xX,
          tH = this.hits;
        tH.length = 0;
        const zH = HH.scanBlocks(AH, rH, SH, AH + hH, rH + hH, SH + hH, this.offsetsIndexById, tH),
          CH = [];
        for (let EH = 0; EH < tH.length; EH += 4) CH.push({
          pos: [tH[EH], tH[EH + 1], tH[EH + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[tH[EH + 3]] - 1]
        });
        return BH.machines = CH, BH.cellChunks = function(HH, BH) {
          const LH = new Set,
            AH = [];
          for (const {
              pos: rH,
              offsets: SH
            }
            of HH)
            for (const [HH, hH, tH] of SH) {
              const SH = WM([rH[0] + HH, rH[1] + hH, rH[2] + tH], BH),
                zH = MM(...SH);
              LH.has(zH) || (LH.add(zH), AH.push(SH))
            }
          return AH
        }(CH, hH), BH.scannedVersion = BH.checkedVersion, BH.scannedAt = performance.now(), Math.max(zH, 1)
      }
      watchCellChunk(HH, BH, LH, AH) {
        const rH = MM(BH, LH, AH),
          SH = HH.getChunkVersion(BH, LH, AH),
          hH = this.cellChunks.get(rH);
        return null === SH ? this.cellChunks.delete(rH) : (null === hH || void 0 === hH ? void 0 : hH.version) === SH ? (hH.seenAt = this.checks, !1) : (this.cellChunks.set(rH, {
          version: SH,
          seenAt: this.checks
        }), !0)
      }
      refresh(HH) {
        const BH = function(HH, BH) {
            const LH = new Set,
              AH = [];
            for (const {
                pos: rH,
                offsets: SH
              }
              of HH)
              for (const [HH, hH, tH] of SH) {
                const SH = rH[0] + HH,
                  zH = rH[1] + hH,
                  CH = rH[2] + tH,
                  EH = `${SH},${zH},${CH}`;
                LH.has(EH) || (LH.add(EH), BH(SH, zH, CH) && AH.push([SH, zH, CH]))
              }
            return AH
          }([...this.chunks.values()].flatMap((HH => HH.machines)), ((BH, LH, AH) => HH.isBlockInLoadedChunk(BH, LH, AH) && 0 === HH.getBlockId(BH, LH, AH))),
          LH = BH.join(";");
        LH !== this.shownKey && (this.shownKey = LH, this.clearMeshes(HH), BH.length > 0 && (this.meshes = [this.build(HH, BH, !1), this.build(HH, BH, !0)]))
      }
      build(HH, BH, LH) {
        const AH = BH[0],
          rH = [],
          SH = [];
        for (const [hH, tH, zH] of BH)(0, GM.d)(rH, SH, [hH - AH[0] + .5, tH - AH[1] + .5, zH - AH[2] + .5], vM, LH);
        return HH.createGameMesh({
          positions: rH,
          indices: SH
        }, {
          rgb: LH ? TM : PM,
          alpha: .4
        }, AH)
      }
      clearMeshes(HH) {
        for (const BH of this.meshes) HH.disposeGameMesh(BH);
        this.meshes = []
      }
    }
    const VM = 1 / .6,
      OM = 200,
      bM = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      kM = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      mM = 2 * Math.PI / 3;
    class oM {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bM;
        this.style = HH, this.particles = null, this.points = new Float32Array(800), this.budget = OM, this.lastMs = 0
      }
      static blade() {
        return new oM(kM)
      }
      lT(HH, BH) {
        const LH = Math.min(BH.arcStruck, BH.arcPoints.length);
        this.draw(HH, [BH.arcFrom, ...BH.arcPoints], BH.arcPoints.slice(0, LH))
      }
      onBlade(HH, BH) {
        const [LH, AH, rH] = BH.bladeCentre, [SH, hH] = BH.bladeFacing, tH = LH - 1.5 * SH, zH = rH - 1.5 * hH, CH = Math.atan2(hH, SH), EH = [];
        for (let XH = 0; XH <= 8; XH++) {
          const HH = CH - mM / 2 + mM * XH / 8;
          EH.push([tH + 2.5 * Math.cos(HH), AH, zH + 2.5 * Math.sin(HH)])
        }
        this.draw(HH, EH, BH.bladeStruck)
      }
      dispose() {
        var HH;
        null === (HH = this.particles) || void 0 === HH || HH.stop(), this.particles = null
      }
      draw(HH, BH, LH) {
        if (!HH.particlesEnabled() || BH.length < 2) return;
        const AH = performance.now();
        this.budget = Math.min(OM, this.budget + (AH - this.lastMs) / 1e3 * OM), this.lastMs = AH;
        const rH = [];
        let SH = 0,
          hH = BH[0];
        for (const MH of BH.slice(1)) {
          const HH = Math.min(48, Math.round(Math.hypot(MH[0] - hH[0], MH[1] - hH[1], MH[2] - hH[2]) * this.style.perBlock));
          rH.push([hH, MH, HH]), SH += HH, hH = MH
        }
        const tH = LH.length;
        SH += 10 * tH;
        const zH = SH > this.budget ? this.budget / SH : 1;
        if (0 === SH || zH * SH < 1) return;
        const CH = BH[0],
          [EH, XH, GH] = CH,
          YH = this.points;
        let uH = 0;
        const QH = (HH, BH, LH, AH) => {
          const rH = 4 * uH;
          YH[rH] = HH - EH, YH[rH + 1] = BH - XH, YH[rH + 2] = LH - GH, YH[rH + 3] = AH, uH++
        };
        rH.forEach(((HH, BH) => {
          let [LH, AH, rH] = HH;
          const SH = Math.min(Math.floor(rH * zH), OM - uH),
            hH = Math.hypot(AH[0] - LH[0], AH[1] - LH[1], AH[2] - LH[2]),
            tH = 0 === BH && hH > 0 ? Math.min(.5, .1 * hH) / hH : 0;
          for (let zH = 0; zH < SH; zH++) {
            const HH = tH + (zH + .5) / SH * (1 - tH);
            QH(LH[0] + (AH[0] - LH[0]) * HH, LH[1] + (AH[1] - LH[1]) * HH, LH[2] + (AH[2] - LH[2]) * HH, .15)
          }
        }));
        const WH = Math.floor(10 * zH);
        for (let MH = 0; MH < tH; MH++) {
          const [HH, BH, AH] = LH[MH];
          for (let LH = 0; LH < WH && uH < OM; LH++) QH(HH, BH, AH, 2.5)
        }
        this.budget -= uH, this.particles ??= HH.createParticles(function(HH) {
          const [BH, LH] = HH.colours;
          return {
            texture: "square_particle",
            aX: 400,
            minLifeTime: HH.life[0] / VM,
            maxLifeTime: HH.life[1] / VM,
            minSize: HH.size[0],
            maxSize: HH.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [BH[0], BH[1], BH[2], 1],
              maxColor: [LH[0], LH[1], LH[2], 1]
            }, {
              timeFraction: 1,
              minColor: [BH[0], BH[1], BH[2], 0],
              maxColor: [LH[0], LH[1], LH[2], 0]
            }],
            blendMode: ot.f.Add
          }
        }(this.style), {
          pos: CH
        }), this.particles.emitPoints(CH, YH, uH)
      }
    }
    const IM = new Set(["Sky Spring"]);

    function fM(HH, BH, LH) {
      const AH = HH.split("|")[0];
      return "Air" !== BH || LH || ! function(HH) {
        const BH = HH.split("|")[0];
        return void 0 !== hL[BH] || IM.has(BH)
      }(AH) ? null : HH
    }
    class lM {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(HH) {
        const BH = HH - this.lastTapAt >= 300;
        return this.lastTapAt = HH, BH
      }
    }
    class KM {
      constructor() {
        this.presses = new lM, this.predicted = null
      }
      tap(HH, BH) {
        const LH = this.presses.isNewPress(BH);
        return LH && (this.predicted = {
          station: HH,
          at: BH
        }), LH
      }
      consumeServerOpen(HH, BH) {
        const LH = this.predicted;
        return !(null === LH || LH.station !== HH || BH - LH.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class cM {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(HH, BH) {
        return HH && (this.thrustAt = BH), BH - this.thrustAt < 200
      }
    }
    const eM = [.1, .05, .1],
      qM = {
        texture: "effect_5",
        aX: Math.ceil(48),
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
        blendMode: ot.f.OneOne
      };
    class gM {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new cM, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      lT(HH, BH) {
        for (const [LH, AH] of BH.baf2JetFlames) HH.isLocalPlayer(LH) || (AH ? this.lit.add(LH) : this.lit.delete(LH))
      }
      onAfterRender(HH, BH) {
        const LH = performance.now(),
          AH = this.hold.lit(this.selfThrusting(HH, BH), LH);
        for (const [rH, SH] of this.flames)(rH === BH ? AH : this.lit.has(rH)) || this.setEmitting(SH, !1), rH === BH || HH.getPositionView(rH) ? !SH.emitting && LH - SH.offAt >= 1300 && (SH.particles.stop(), this.flames.delete(rH)) : (SH.particles.dispose(), this.flames.delete(rH), this.lit.delete(rH));
        AH && this.draw(HH, BH, BH);
        for (const rH of this.lit) this.draw(HH, BH, rH)
      }
      dispose() {
        for (const HH of this.flames.values()) HH.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(HH, BH) {
        var LH;
        const AH = HH.getLocalPlayerMovement();
        return !!AH && (null !== (rH = {
          option: null !== (LH = HH.getClientOption(BH, "jumpHoldThrust")) && void 0 !== LH ? LH : null,
          jumping: AH.jumpHeld,
          onGround: AH.onGround,
          alive: HH.isAlive(BH)
        }).option && rH.option.maxUpSpeed >= 0 && rH.jumping && !rH.onGround && rH.alive);
        var rH
      }
      draw(HH, BH, LH) {
        var AH, rH;
        const SH = this.pos;
        if (!HH.readDrawnPosition(LH, SH)) return;
        const hH = HH.readDrawnPosition(BH, this.camera) ? this.camera : SH;
        if (!((SH[0] - hH[0]) ** 2 + (SH[1] - hH[1]) ** 2 + (SH[2] - hH[2]) ** 2 < 1600) || !HH.particlesEnabled()) {
          const HH = this.flames.get(LH);
          return void(HH && this.setEmitting(HH, !1))
        }
        const tH = null !== (AH = this.flames.get(LH)) && void 0 !== AH ? AH : this.create(HH, LH, SH),
          zH = null !== (rH = HH.getDrawnHeading(LH)) && void 0 !== rH ? rH : 0,
          CH = this.at;
        CH[0] = SH[0] - .35 * Math.sin(zH), CH[1] = SH[1] + 1.05, CH[2] = SH[2] - .35 * Math.cos(zH), tH.particles.moveTo(CH), this.setEmitting(tH, !0)
      }
      setEmitting(HH, BH) {
        HH.emitting !== BH && (HH.emitting = BH, BH || (HH.offAt = performance.now()), HH.particles.setEmitRate(BH ? 60 : 0))
      }
      create(HH, BH, LH) {
        const AH = {
          particles: HH.createParticles(qM, {
            pos: LH,
            half: eM
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(BH, AH), AH
      }
    }

    function NM(HH) {
      return "Reactor Frame" === AA("reactor", HH)
    }

    function RM(HH) {
      return NL("reactor", HH) && !NM(HH) && (HH.startsWith("Reactor Glass") || HH.startsWith("Reactor Port"))
    }
    const jM = "baf2Goal";
    class nM {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [fr.k.subscribe("setDirectionArrow", (HH => {
          let {
            id: BH,
            position: LH
          } = HH;
          BH === jM && (this.goal = LH, this.checkedAt = -1 / 0)
        })), fr.k.subscribe("clearDirectionArrow", (HH => {
          let {
            id: BH
          } = HH;
          null !== BH && BH !== jM || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const HH of this.subs) fr.k.unsubscribe(HH)
      }
      sideOf(HH, BH, LH, AH) {
        const rH = this.goal;
        if (!rH) return 0;
        LH - this.checkedAt > 1e3 && (this.checkedAt = LH, this.open = function(HH, BH) {
          const [LH, AH, rH] = HH.map(Math.floor);
          if (!RM(BH(LH, AH, rH))) return null;
          for (const [SH, hH] of [
              [1, 0],
              [0, 1]
            ]) {
            const HH = BH(LH + SH, AH, rH + hH),
              tH = BH(LH - SH, AH, rH - hH);
            if (NM(tH) && RM(HH)) return [SH, 0, hH];
            if (NM(HH) && RM(tH)) return [0 - SH, 0, 0 - hH]
          }
          return null
        }(rH, ((BH, LH, AH) => HH.blockIdToBlockName(HH.getBlockId(BH, LH, AH)))));
        const SH = this.open;
        if (!SH) return 0;
        const hH = AH(rH);
        if (Math.abs(hH.x - BH.x) > .05 || Math.abs(hH.y - BH.y) > .05) return 0;
        const tH = AH([rH[0] + SH[0], rH[1], rH[2] + SH[2]]).x - hH.x;
        return Math.abs(tH) < .3 ? 0 : tH > 0 ? 1 : -1
      }
    }
    class FM {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new nM, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.Mu = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.Av = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((HH => {
          for (const BH of HH) BH.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(BH.target, BH.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.Mu || this.clear()
        }, window.addEventListener("resize", this.Av)
      }
      onAfterRender(HH, BH) {
        var LH;
        this.api = HH, this.project = null !== (LH = null === BH || void 0 === BH ? void 0 : BH.projectWorldPosToScreenPos) && void 0 !== LH ? LH : null, this.queued || this.Mu || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.Mu = !0;
        for (const HH of this.moved.keys()) HH.style.transform = "";
        this.moved.clear();
        for (const HH of this.sideLabels.keys()) HH.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.Av)
      }
      clear() {
        for (const SH of this.moved.keys()) SH.isConnected || this.moved.delete(SH);
        for (const SH of this.sideLabels.keys()) SH.isConnected || this.sideLabels.delete(SH);
        if (0 === this.arrows.length) return;
        const HH = performance.now(),
          BH = HH - this.refreshedAt > 1e3;
        BH && (this.refreshedAt = HH, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const LH = this.trackerBox(),
          AH = this.barsBox(),
          rH = this.toastBox(BH);
        (LH || AH || rH) && BH && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let SH = 0; SH < this.arrows.length; SH++) {
          const BH = this.arrows[SH];
          this.labelOffsets.set(BH, this.runLabelAside(BH, HH));
          const hH = (LH ? this.shiftLeftOf(BH, LH) : 0) || this.shiftOnScreen(BH),
            tH = Math.min(AH ? this.liftAbove(BH, AH, hH) : 0, rH ? this.liftAbove(BH, rH, hH) : 0),
            zH = this.moved.get(BH);
          if (0 !== hH || 0 !== tH) {
            const HH = 0 === tH ? `translateX(${hH}px)` : `translate(${hH}px, ${tH}px)`;
            zH !== HH && (BH.style.transform = HH, this.moved.set(BH, HH))
          } else void 0 !== zH && (BH.style.transform = "", this.moved.delete(BH))
        }
      }
      trackerBox() {
        var HH, BH;
        const LH = null !== (HH = this.tracker) && void 0 !== HH && HH.isConnected ? this.tracker : null !== (BH = this.trackers[0]) && void 0 !== BH ? BH : null;
        if (LH !== this.tracker && this.watch(LH), this.boxStale && LH) {
          var AH, rH, SH;
          this.boxStale = !1;
          const HH = LH.closest(".NoRoom") ? null : LH.getBoundingClientRect(),
            BH = HH && HH.width > 0 ? null === (AH = this.hud) || void 0 === AH ? void 0 : AH.getBoundingClientRect() : void 0,
            hH = HH && BH ? Math.max(HH.top, BH.top) : null !== (rH = null === HH || void 0 === HH ? void 0 : HH.top) && void 0 !== rH ? rH : 0,
            tH = HH && BH ? Math.min(HH.bottom, BH.bottom) : null !== (SH = null === HH || void 0 === HH ? void 0 : HH.bottom) && void 0 !== SH ? SH : 0;
          this.box = HH && HH.width > 0 && tH > hH ? {
            left: HH.left,
            top: hH,
            right: HH.right,
            bottom: tH
          } : null
        }
        return LH ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var HH;
          this.barsStale = !1;
          const BH = null === (HH = this.statBars[0]) || void 0 === HH ? void 0 : HH.getBoundingClientRect();
          this.bars = BH && BH.width > 0 && BH.height > 0 ? {
            left: BH.left,
            top: BH.top,
            right: BH.right,
            bottom: BH.bottom
          } : null
        }
        return this.bars
      }
      toastBox(HH) {
        var BH;
        const LH = null !== (BH = this.toasts[0]) && void 0 !== BH ? BH : null;
        if (LH !== this.toastEl || HH && LH) {
          this.toastEl = LH;
          const HH = null === LH || void 0 === LH ? void 0 : LH.getBoundingClientRect();
          this.toast = HH && HH.width > 0 && HH.height > 0 ? {
            left: HH.left,
            top: HH.top,
            right: HH.right,
            bottom: HH.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(HH, BH, LH) {
        var AH;
        const rH = this.anchorOf(HH);
        if (!rH) return 0;
        const SH = rH.x + LH + (null !== (AH = this.labelOffsets.get(HH)) && void 0 !== AH ? AH : 0),
          {
            halfWidth: hH,
            labelled: tH
          } = this.extentOf(HH),
          zH = rH.y + this.em * (tH ? 6.2 : 3);
        return zH < BH.top - 6 || SH + hH < BH.left - 6 || SH - hH > BH.right + 6 ? 0 : BH.top - 6 - zH
      }
      watch(HH) {
        var BH, LH;
        this.tracker && this.sizes.unobserve(this.tracker), null === (BH = this.hud) || void 0 === BH || BH.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = HH, this.hud = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.closest(".Baf2QuestHud")) && void 0 !== LH ? LH : null, this.box = null, this.boxStale = !0, HH && this.sizes.observe(HH), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(HH, BH) {
        var LH;
        const AH = this.anchorOf(HH);
        if (!AH) return 0;
        const {
          y: rH
        } = AH, SH = AH.x + (null !== (LH = this.labelOffsets.get(HH)) && void 0 !== LH ? LH : 0), hH = this.em, {
          halfWidth: tH,
          labelled: zH
        } = this.extentOf(HH), CH = rH - hH, EH = SH + tH;
        return rH + hH * (zH ? 6.2 : 3) < BH.top || CH > BH.bottom || EH < BH.left - 6 || SH - tH > BH.right ? 0 : Math.max(BH.left - 6 - EH, 6 - (SH - tH))
      }
      shiftOnScreen(HH) {
        var BH;
        const LH = this.anchorOf(HH);
        if (!LH) return 0;
        const {
          halfWidth: AH
        } = this.extentOf(HH), rH = LH.x + (null !== (BH = this.labelOffsets.get(HH)) && void 0 !== BH ? BH : 0), SH = rH + AH - (this.innerWidth - 6);
        return SH > 0 ? -SH : Math.max(0, 6 - (rH - AH))
      }
      runLabelAside(HH, BH) {
        var LH;
        let AH = null;
        for (let hH = 0; hH < HH.children.length; hH++) HH.children[hH].classList.contains("DirectionArrowLabel") && (AH = HH.children[hH]);
        if (!AH) return 0;
        const rH = HH.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(HH) : null,
          SH = (rH && this.api ? this.side.sideOf(this.api, {
            x: rH.x / this.innerWidth * 100,
            y: rH.y / this.innerHeight * 100
          }, BH, this.project) : 0) * this.halfWidthOf(AH);
        return SH !== (null !== (LH = this.sideLabels.get(AH)) && void 0 !== LH ? LH : 0) && (AH.style.transform = 0 === SH ? "" : `translateX(-50%) translateX(${SH}px)`, 0 === SH ? this.sideLabels.delete(AH) : this.sideLabels.set(AH, SH)), SH
      }
      extentOf(HH) {
        let BH = this.em,
          LH = !1;
        for (let AH = 0; AH < HH.children.length; AH++) {
          const rH = HH.children[AH],
            SH = rH.classList.contains("DirectionArrowLabel");
          LH ||= SH, (SH || rH.classList.contains("DirectionArrowDistance")) && (BH = Math.max(BH, this.halfWidthOf(rH)))
        }
        return {
          halfWidth: BH,
          labelled: LH
        }
      }
      halfWidthOf(HH) {
        let BH = this.halfWidths.get(HH);
        return void 0 === BH && (BH = HH.offsetWidth / 2, this.halfWidths.set(HH, BH), this.sizes.observe(HH), this.labels.add(HH)), BH
      }
      forgetGoneLabels() {
        for (const HH of this.labels) HH.isConnected || (this.sizes.unobserve(HH), this.halfWidths.delete(HH), this.labels.delete(HH))
      }
      anchorOf(HH) {
        const BH = HH.style.translate,
          LH = this.anchors.get(HH);
        if (LH && LH.translate === BH && LH.innerWidth === this.innerWidth && LH.innerHeight === this.innerHeight) return LH;
        const AH = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(BH);
        if (!AH) return null;
        const rH = {
          translate: BH,
          x: parseFloat(AH[1]) / 100 * this.innerWidth,
          y: parseFloat(AH[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(HH, rH), rH
      }
    }
    const DM = "Baf2ArrowText";

    function wM(HH, BH) {
      const LH = HH.rows.find((HH => HH.current));
      return KH(HH.tutorial) && null !== LH && void 0 !== LH && LH.item && nr(LH) && oH(LH.item).includes(BH) ? LH.item : null
    }
    const ZM = new class {
      constructor(HH) {
        this.select = HH, this.picks = new Map
      }
      open(HH, BH, LH) {
        const AH = wM(BH, HH);
        null !== AH && this.XY(HH, AH, LH)
      }
      follow(HH, BH) {
        if (tH())
          for (const [LH, {
              item: AH,
              had: rH
            }] of this.picks) {
            const SH = wM(HH, LH);
            SH !== AH && (null !== SH && BH(AH) > rH ? this.XY(LH, SH, BH) : this.picks.delete(LH))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      XY(HH, BH, LH) {
        this.picks.set(HH, {
          item: BH,
          had: LH(BH)
        }), this.select(HH, BH)
      }
    }(lr.m);

    function dM(HH) {
      return BH => {
        let LH = 0;
        for (const AH of HH.getInventoryItems())(null === AH || void 0 === AH ? void 0 : AH.name) === BH && (LH += null === AH.amount ? 1 : Math.max(AH.amount, 0));
        return LH
      }
    }

    function aM(HH, BH, LH, AH) {
      HH.getClientOption(BH, "canCraft") && "inventory" !== Mr.c.get("openInGameMenuName") && (ZM.open(LH, AH.get(), dM(HH)), fr.k.AX("toggleMenu", `inventory|${LH}`))
    }
    let sM = null,
      JM = !1;

    function iM(HH) {
      const BH = xS();
      HH === sM && BH === JM || (sM = HH, JM = BH, (0, lr.n)(function(HH, BH) {
        const LH = new Map;
        for (let AH = HH + 1; AH <= rH.length; AH++) {
          const rH = RS(AH, HH, BH);
          if (rH)
            for (const BH of MH(AH).unlocks) LH.set(BH, {
              ...rH,
              stepsAway: AH - HH
            })
        }
        return LH
      }(HH, BH)))
    }

    function pM() {
      return HH = () => {
        null !== sM && iM(sM)
      }, (0, WS.e)(MS, HH);
      var HH
    }

    function yM() {
      return (0, lr.r)(NS(Object.keys(mH), KS)), () => {
        (0, lr.r)([])
      }
    }

    function Hx(HH, BH, LH) {
      var AH, rH;
      const SH = HH.getTargetedBlock();
      if (!SH || ! function(HH, BH, LH) {
          if ("Chest" !== BH) return !1;
          const AH = HH.split("|")[0];
          if (!CL(AH) || 0 === cB[AH].outputSlots.length) return !1;
          const rH = WW(HH);
          return LH[0] === rH[0] && LH[1] === rH[1] && LH[2] === rH[2]
        }(LH, null === (AH = HH.yLH(BH)) || void 0 === AH ? void 0 : AH.name, SH.normal)) return !1;
      const [hH, tH, zH] = SH.AW, CH = HH.getBlockId(hH, tH, zH);
      return 0 === CH || !0 === (null === (rH = fH.g[CH]) || void 0 === rH ? void 0 : rH.canBePlacedOver)
    }
    var Bx = LH(37617);
    const Lx = new Set(QL.c);
    class Ax {
      constructor(HH) {
        this.toasts = HH, this.lastAt = -1 / 0
      }
      onAltAction(HH, BH, LH) {
        const AH = HH.getTargetedBlock();
        if (!AH || function(HH) {
            const BH = HH.split("|")[0];
            return CL(BH) || null !== VA(BH) || bH(BH) || QL.c.includes(BH)
          }(LH) && !Lx.has(LH.split("|")[0])) return;
        const rH = HH.yLH(BH);
        if (!rH || !Lx.has(rH.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const SH = rH.typeObj.id,
          [hH, tH, zH] = AH.AW,
          CH = HH.getBlockId(hH, tH, zH),
          EH = fH.g[CH];
        (0 === CH || null !== EH && void 0 !== EH && EH.UY || null !== EH && void 0 !== EH && EH.canBePlacedOver) && HH.isSolidToPlayerBlockId(SH) && HH.canModifyBlockAt(hH, tH, zH) && HH.PLH(hH, tH, zH, SH) && !HH.PLH(hH, tH, zH, SH, BH) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, cH.fe)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, cH.K.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class rx {
      constructor(HH) {
        this.show = HH, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(HH, BH, LH) {
        var AH;
        if (!BH) return this.started = null, void this.gatedThisHold.clear();
        if (!HH) return void(this.started = null);
        const rH = `${HH.x},${HH.y},${HH.z},${HH.LX}`;
        if (rH === this.started) return;
        this.started = rH;
        const SH = eA(HH.y) ? pW(HH.block, HH.LX, HH.level) : null;
        if (null === SH || this.gatedThisHold.has(rH)) return;
        this.gatedThisHold.add(rH);
        const hH = HH.block.split("|")[0];
        LH - (null !== (AH = this.hintedAt.get(hH)) && void 0 !== AH ? AH : -1 / 0) < 5e3 || (this.hintedAt.set(hH, LH), this.show({
          baf2ToastText: yW(SH, HH.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var Sx = LH(30);

    function hx(HH, BH) {
      const LH = [...HH.baf2CoreBankPaused];
      for (const [rH] of HH.baf2CoreBanked) LH.push(rH);
      for (const hH of rH) {
        for (const {
            item: HH
          }
          of hH.cost) LH.push(HH);
        for (const HH of hH.newDeposits) LH.push(HH.block);
        for (const HH of hH.unlocks) LH.push(HH, IH(HH));
        hH.reward && LH.push(hH.reward);
        for (const {
            item: HH
          }
          of null !== (AH = null === (SH = hH.charge) || void 0 === SH ? void 0 : SH.items) && void 0 !== AH ? AH : []) {
          var AH, SH;
          LH.push(HH)
        }
      }
      return {
        message: HH,
        itemNames: BH([...new Set(LH)])
      }
    }
    const tx = "baf2MultiblockGuide";
    const zx = new Map;
    const Cx = function(HH, BH, LH, rH) {
      let {
        localPlayerId: SH
      } = rH;
      const hH = new Et,
        tH = new yG,
        CH = new hY,
        EH = new rY(CH),
        XH = (HH, BH) => {
          BH ? EH.observe(HH) : EH.unobserve(HH)
        },
        GH = new AY,
        YH = new zY(XH),
        uH = HH => YH.covers(HH),
        QH = new mY;
      let WH;
      const MH = new Kh((HH => {
          WH.sendCommand(HH)
        })),
        xH = () => {
          MH.send("baf2questbook")
        },
        vH = HH => function(HH, BH, LH) {
          const AH = {};
          for (const rH of LH) {
            let LH = zx.get(rH);
            void 0 === LH && (LH = HH.getItemStat(BH, rH, "displayName"), zx.set(rH, LH)), AH[rH] = LH
          }
          return AH
        }(WH, SH, HH),
        PH = new qr(xH),
        TH = new RY((() => Mr.c.get("loadingOverlayVisible"))),
        UH = new PE(MH, PH, TH),
        VH = new wY,
        OH = new Ax(TH),
        kH = new rx((HH => {
          TH.show(HH, HH.baf2ToastMs)
        })),
        mH = new Hu(XH),
        oH = new bW(mH),
        IH = new xh,
        lH = new sW,
        KH = new Jh,
        qH = new tu({
          read: () => !1 !== Sx.e.getItem(tx),
          write: HH => {
            Sx.e.setItem(tx, HH)
          }
        }),
        gH = new cu(qH),
        NH = new gu(qH),
        RH = new SQ(qH, (HH => function(HH, BH) {
          const LH = dt(BH.w, BH.h, BH.d),
            AH = new Uint8Array(LH);
          for (let rH = 0; rH < LH; rH++) {
            const LH = ou(HH, pL(BH, LA(BH, rH)));
            AH[rH] = null === LH ? 0 : Ft(LH)
          }
          return AH
        }(WH, HH)), Ju(MH)),
        jH = new hQ(qH, Ju(MH)),
        nH = new AQ,
        wH = (HH, BH) => {
          let [LH, AH, rH] = HH;
          nH.answered(BH) || TH.show({
            baf2ToastText: [(0, cH.fe)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: LH,
                h: AH,
                d: rH
              }
            }, cH.K.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      RH.onSizeNotTaken(wH), jH.onSizeNotTaken(wH);
      const ZH = new EQ,
        dH = new DQ(qH),
        sH = new ZQ,
        JH = new AW(sH),
        iH = new uW,
        yH = new kW,
        HB = new gW(yH),
        BB = new aW(yH),
        LB = yH.lookSource(),
        AB = new CM({
          handles: HH => LB.handles(HH) || HH === eH,
          line: (HH, BH) => HH === eH ? function(HH, BH, LH) {
            var AH;
            const rH = DH(null === (AH = BH.at(LH)) || void 0 === AH ? void 0 : AH.item);
            return null === rH ? {
              key: `${hM}lookFarmEmpty`
            } : {
              key: HH.blockIdToBlockName(HH.getBlockId(LH[0], LH[1], LH[2])).endsWith("|Running") ? `${hM}lookFarmRunning` : `${hM}lookFarmWaiting`,
              keys: {
                mob: FH(rH)
              }
            }
          }(WH, mH, BH) : LB.line(HH, BH),
          version: () => LB.version() + mH.version()
        }, (HH => Ru(qH.all(), HH, (HH => ou(WH, HH)))), (() => PH.get().tier)),
        rB = new mQ,
        SB = new UM,
        hB = new oM,
        tB = oM.blade(),
        zB = new gM,
        CB = new aY,
        EB = new FM,
        GB = new KM,
        YB = new lM;
      let uB = -1 / 0,
        QB = 0,
        WB = -1 / 0,
        MB = -1 / 0;
      const xB = () => {
          MH.send("baf2islandsclose"), MB = Date.now()
        },
        vB = [];

      function PB(HH) {
        var BH, LH, AH, rH, SH, hH, zH;
        "core" === (null === (BH = tH.get()) || void 0 === BH ? void 0 : BH.kind) && "core" !== (null === HH || void 0 === HH ? void 0 : HH.kind) && MH.send("baf2coreclose"), "power" === (null === (LH = tH.get()) || void 0 === LH ? void 0 : LH.kind) && "power" !== (null === HH || void 0 === HH ? void 0 : HH.kind) && MH.send("baf2powerclose"), "water" === (null === (AH = tH.get()) || void 0 === AH ? void 0 : AH.kind) && "water" !== (null === HH || void 0 === HH ? void 0 : HH.kind) && MH.send(pH.x), "terminal" === (null === (rH = tH.get()) || void 0 === rH ? void 0 : rH.kind) && "terminal" !== (null === HH || void 0 === HH ? void 0 : HH.kind) && MH.send("baf2terminalclose"), "islands" === (null === (SH = tH.get()) || void 0 === SH ? void 0 : SH.kind) && "islands" !== (null === HH || void 0 === HH ? void 0 : HH.kind) && xB();
        const CH = yH.getStatus();
        "collider" === (null === (hH = tH.get()) || void 0 === hH ? void 0 : hH.kind) && "collider" !== (null === HH || void 0 === HH ? void 0 : HH.kind) && CH && MH.send(fz(CH, "close"));
        const EH = HH => "reactor" === HH || "battery" === HH;
        if (EH(null === (zH = tH.get()) || void 0 === zH ? void 0 : zH.kind) && !EH(null === HH || void 0 === HH ? void 0 : HH.kind)) {
          var XH, GH, YH;
          const HH = "reactor" === (null === (XH = tH.get()) || void 0 === XH ? void 0 : XH.kind) ? null === (GH = RH.get()) || void 0 === GH ? void 0 : GH.status.baf2RxAt : null === (YH = jH.get()) || void 0 === YH ? void 0 : YH.status.baf2BatAt;
          HH && MH.send(XB(HH, "close"))
        }
        "quests" === (null === HH || void 0 === HH ? void 0 : HH.kind) && xH(), tH.set(HH), null === HH && VH.release()
      }

      function TB() {
        (0, Wr.g)(), PB(null)
      }
      let UB = new Set,
        VB = !1;
      const OB = {
        onCreate: HH => {
          WH = HH, WH.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const BH of mB) {
            const HH = cB[BH].inputSlots ? bt(hH) : Ut(BH, hH, IH, MH);
            vB.push((0, ur.f)(BH, HH))
          }
          vB.push((0, Wr.v)((0, AH.createElement)(AH.Fragment, null, (0, AH.createElement)(XY, {
            controller: YH
          }), (0, AH.createElement)(Au, {
            store: mH
          }), (0, AH.createElement)(XM, {
            store: AB
          }), (0, AH.createElement)(gY, {
            store: PH
          }), (0, AH.createElement)(FY, {
            store: TH
          }), (0, AH.createElement)(ZY, {
            store: VH
          }), (0, AH.createElement)(JY, {
            store: CB
          }), (0, AH.createElement)(CQ, {
            store: ZH
          }), (0, AH.createElement)(dQ, {
            store: sH
          })), {
            content: (0, AH.createElement)(HY, {
              commands: MH,
              store: tH,
              power: IH,
              water: KH,
              reactor: RH,
              battery: jH,
              collider: yH,
              terminal: lH,
              quests: PH,
              tutorial: UH,
              close: Wr.j,
              leave: () => {
                VH.dropHeld(), (0, Wr.g)()
              },
              askIslands: () => {
                MB = -1 / 0, uB = Date.now(), QB = MH.send(aH)
              },
              openSocial: () => {
                (0, Wr.g)(), Mr.c.set({
                  openEverythingMenuName: XL.o.SOCIAL
                })
              },
              showCore: HH => {
                PB({
                  kind: "core",
                  core: HH
                }), MH.send("baf2corereopen")
              }
            }),
            onClose: () => {
              PB(null)
            }
          })), vB.push((0, Qr.x)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              PB({
                kind: "quests"
              }), (0, Wr.t)()
            }
          })), vB.push(function(HH, BH) {
            let LH = null,
              AH = () => {};
            const rH = BH => {
              var rH;
              let {
                tutorial: SH,
                tutorialKnown: hH
              } = BH;
              (null === (rH = LH) || void 0 === rH ? void 0 : rH.tutorial) === SH && LH.tutorialKnown === hH || (LH = {
                tutorial: SH,
                tutorialKnown: hH
              }, AH = (0, Qr.x)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: xE[SH],
                icon: {
                  kind: "icon",
                  name: ME[SH]
                },
                iconOnly: !0,
                disabled: !hH,
                className: "Baf2TutorialButton",
                onClick: () => {
                  HH.next()
                }
              }))
            };
            rH(BH.get());
            const SH = fr.k.subscribe(Kr, rH);
            return () => {
              fr.k.unsubscribe(SH), AH()
            }
          }(UH, PH)), VB = !1, vB.push(pM()), vB.push(yM()), vB.push(function() {
            const HH = fr.k.subscribe(Kr, Jr),
              BH = () => {
                if (sr) {
                  const HH = sr;
                  sr = null, (0, lr.p)(HH)
                }
              },
              LH = fr.k.subscribe("toggleMenu", (HH => {
                "inventory" === (null === HH || void 0 === HH ? void 0 : HH.split("|")[0]) && BH()
              })),
              AH = fr.k.subscribe("appManagerUpdated|openInGameMenuName", (HH => {
                "inventory" === HH && BH()
              }));
            return () => {
              fr.k.unsubscribe(HH), fr.k.unsubscribe(LH), fr.k.unsubscribe(AH)
            }
          }()), vB.push(function(HH) {
            const BH = dM(HH),
              LH = fr.k.subscribe(Kr, (HH => {
                ZM.follow(HH, BH)
              }));
            return () => {
              fr.k.unsubscribe(LH), ZM.clear()
            }
          }(WH)), vB.push(function() {
            const HH = document.documentElement,
              BH = (0, IY.c)(".InvenBodyRight", [], (() => {
                const BH = document.querySelector(".InvenBodyRight");
                BH && HH.style.setProperty("--baf2-backpack-width", `${BH.offsetWidth}px`)
              }));
            return () => {
              BH(), HH.style.removeProperty("--baf2-backpack-width")
            }
          }()), vB.push(function() {
            const HH = document.documentElement;
            return HH.classList.add(DM), () => {
              HH.classList.remove(DM)
            }
          }()), vB.push((() => {
            EH.dispose(), CH.dispose()
          })), QH.start(WH), vB.push((() => {
            QH.dispose(), zB.dispose(), oH.dispose()
          }))
        },
        onClose: () => {
          (0, lr.p)([]), sr = null, ar = new Set, sM = null, (0, lr.n)(new Map), zx.clear();
          for (const HH of vB) HH();
          PH.dispose(), AB.dispose(), TH.dispose(), VH.dispose(), rB.dispose(), SB.dispose(WH), gH.dispose(WH), NH.dispose(WH), dH.dispose(WH), JH.dispose(WH), sH.dispose(), iH.dispose(), qH.dispose(), RH.dispose(), jH.dispose(), ZH.dispose(), hB.dispose(), tB.dispose(), CB.dispose(), HB.dispose(WH), BB.dispose(WH), yH.dispose(), EB.dispose(), MH.clear()
        },
        onAfterRender: (HH, BH) => {
          var LH, AH, rH;
          try {
            QH.onAfterRender(BH)
          } catch (CH) {
            console.error("Error drawing BAF2 belt items", CH)
          }
          try {
            zB.onAfterRender(WH, SH)
          } catch (CH) {
            console.error("Error drawing BAF2 jet flames", CH)
          }
          VB || (VB = !0, MH.send("baf2clientready"));
          const hH = WH.getPositionView(SH);
          YH.onAfterRender(BH, hH, GH), mH.onAfterRender(BH, hH, GH, uH), EH.run(GH), rB.onAfterRender(WH, hH), SB.onAfterRender(WH, hH), oH.onAfterRender(WH, hH), gH.onAfterRender(WH, hH), NH.onAfterRender(WH, SH, hH), dH.onAfterRender(WH, SH, hH), JH.onAfterRender(WH, SH), iH.onAfterRender(WH, hH), PH.onPlayerY(hH[1]), HB.onAfterRender(WH), BB.onAfterRender(WH, SH, hH);
          const zH = WH.getTargetedBlock();
          AB.onAfterRender(WH, SH, null !== (LH = null === zH || void 0 === zH ? void 0 : zH.y5) && void 0 !== LH ? LH : 0, null !== (AH = null === zH || void 0 === zH ? void 0 : zH.position) && void 0 !== AH ? AH : null), EB.onAfterRender(WH, BH), kH.onMining(function(HH, BH) {
            var LH, AH;
            const rH = HH.getMiningBlock();
            if (!rH) return null;
            const SH = (0, fH.d)(HH.getBlockId(rH[0], rH[1], rH[2])),
              hH = null !== (LH = null === (AH = HH.yLH(BH)) || void 0 === AH ? void 0 : AH.name) && void 0 !== LH ? LH : null,
              tH = HH.getItemStat(BH, SH.split("|")[0], "harvestLevel");
            return {
              block: SH,
              x: rH[0],
              y: rH[1],
              z: rH[2],
              LX: hH,
              level: tH
            }
          }(WH, SH), WH.isMining(), performance.now()), "dropMap" === (null === (rH = tH.get()) || void 0 === rH ? void 0 : rH.kind) && eA(hH[1]) && TB()
        },
        onPlayerChangeBlock: (HH, BH, LH, AH, rH, hH) => {
          HH === SH && function(HH, BH, LH, AH, rH, SH, hH) {
            const tH = fM(SH, hH, HH.isPlayerCrouching(BH));
            if (null === tH) return;
            if (HH.oq(LH, AH, rH, tH), !HH.getClientOption(BH, "canPickUpItems")) return;
            const zH = hL[tH.split("|")[0]];
            var CH, EH, XH;
            void 0 !== zH && (CH = HH.getInventoryItems(), EH = zH, XH = zu.g.maxItemStackSize, HH.getInventoryFreeSlotCount(BH) > 0 || CH.some((HH => null !== HH && HH.name === EH && null !== HH.amount && HH.amount < XH))) && HH.playSound(BH, (0, Bx.h)("pickUp"), .5, 1)
          }(WH, HH, BH, LH, AH, rH, hH)
        },
        onPlayerAltAction: (HH, BH, LH, AH, rH) => {
          var hH, tH;
          if (!WH.getClientOption(SH, "canPickUpItems")) return;
          const zH = null !== (hH = null === (tH = WH.yLH(SH)) || void 0 === tH ? void 0 : tH.name) && void 0 !== hH ? hH : null,
            CH = function(HH, BH) {
              const LH = HH.split("|")[0];
              return bH(LH) && BH !== Sr && "Sky Pack" !== BH ? LH : null
            }(rH, zH);
          if (null !== CH) return void(GB.tap(CH, performance.now()) && aM(WH, SH, CH, PH));
          if (!RA(zH)) return;
          const EH = YB.isNewPress(performance.now()),
            XH = function(HH, BH, LH) {
              return !RA(BH) || LH ? null : sA(HH)
            }(rH, zH, WH.isPlayerCrouching(SH));
          null !== XH && EH && WH.oq(BH, LH, AH, XH)
        },
        onPlayerAttemptAltAction: (HH, BH, LH, AH, rH) => {
          if (function(HH, BH, LH, AH, rH) {
              "Workbench" === AH.split("|")[0] && HH.getClientOption(LH, "canCraft") && (ZM.open("Workbench", rH.get(), dM(HH)), BH.send("baf2station Workbench"))
            }(WH, MH, SH, rH, PH), Hx(WH, SH, rH)) return "preventAction";
          OH.onAltAction(WH, SH, rH)
        },
        onReceivedMessageFromServer: (HH, BH) => {
          if ("baf2MachineStatus" === HH) {
            var LH, AH, rH, CH, EH, XH, GH, uH, xH, UH, OH, bH, kH, oH, fH, cH;
            const HH = BH,
              SH = HH.baf2MachineTaught;
            hH.set(HH.baf2MachinePos, {
              status: HH.baf2MachineStatus,
              power: null !== (LH = HH.baf2MachinePower) && void 0 !== LH ? LH : null,
              opLeftMs: null !== (AH = HH.baf2MachineOpLeftMs) && void 0 !== AH ? AH : null,
              dug: HH.baf2MachineYield ? {
                item: HH.baf2MachineYield,
                name: vH([HH.baf2MachineYield])[HH.baf2MachineYield]
              } : null,
              powerCap: null !== (rH = HH.baf2MachinePowerCap) && void 0 !== rH ? rH : null,
              powerRates: null !== (CH = HH.baf2MachinePowerRates) && void 0 !== CH ? CH : null,
              coupled: !0 === HH.baf2MachineCoupled,
              couplerLevel: null !== (EH = HH.baf2MachineCoupler) && void 0 !== EH ? EH : 1,
              taught: SH,
              taughtName: SH ? vH([SH])[SH] : null,
              tier: null !== (XH = HH.baf2MachineTier) && void 0 !== XH ? XH : null,
              input: null !== (GH = HH.baf2MachineInput) && void 0 !== GH ? GH : null,
              inertCoupler: null !== (uH = HH.baf2MachineInertCoupler) && void 0 !== uH ? uH : null,
              inputShort: null !== (xH = HH.baf2MachineInputShort) && void 0 !== xH ? xH : null,
              field: null !== (UH = HH.baf2MachineField) && void 0 !== UH ? UH : null,
              noSeeds: !0 === HH.baf2MachineNoSeeds,
              fuelFed: !0 === HH.baf2MachineFuelFed,
              fuelFeeds: !0 === HH.baf2MachineFuelFeeds,
              coreFull: !0 === HH.baf2MachineCoreFull,
              waterUnpowered: !0 === HH.baf2MachineWaterUnpowered,
              powerShort: !0 === HH.baf2MachinePowerShort,
              powerWait: !0 === HH.baf2MachinePowerWait,
              reactorPowered: !0 === HH.baf2MachineReactorPowered,
              fuelLeftMs: null !== (OH = HH.baf2MachineFuelLeftMs) && void 0 !== OH ? OH : null,
              burning: null !== (bH = HH.baf2MachineBurning) && void 0 !== bH ? bH : null,
              fuelKeep: null !== (kH = HH.baf2MachineFuelKeep) && void 0 !== kH ? kH : null,
              water: null !== (oH = HH.baf2MachineWater) && void 0 !== oH ? oH : null,
              farm: null !== (fH = HH.baf2MachineFarm) && void 0 !== fH ? fH : null,
              cryo: null !== (cH = HH.baf2MachineCryo) && void 0 !== cH ? cH : null
            })
          } else if ("baf2StationOpen" === HH) {
            const HH = BH.baf2Station;
            GB.consumeServerOpen(HH, performance.now()) || aM(WH, SH, HH, PH)
          } else if ("baf2Power" === HH) {
            const HH = BH;
            IH.set(HH), HH.baf2PowerOpen && (PB({
              kind: "power"
            }), (0, Wr.t)())
          } else if (HH === pH.A) {
            const HH = BH;
            KH.set(HH), HH.baf2WaterOpen && (PB({
              kind: "water"
            }), (0, Wr.t)())
          } else if ("baf2RxPlans" === HH) {
            var eH, gH, NH;
            const HH = BH;
            qH.lT(HH);
            const LH = new Set(HH.baf2RxPlanList.map((HH => {
              let [BH, LH, AH] = HH;
              return `${BH},${LH},${AH}`
            })));
            ZH.retain(LH);
            const AH = null === (eH = tH.get()) || void 0 === eH ? void 0 : eH.kind,
              rH = "reactor" === AH ? null === (gH = RH.get()) || void 0 === gH ? void 0 : gH.status.baf2RxAt : "battery" === AH ? null === (NH = jH.get()) || void 0 === NH ? void 0 : NH.status.baf2BatAt : void 0;
            rH && UB.has(rH.join(",")) && !LH.has(rH.join(",")) && TB(), UB = LH
          } else if ("baf2RxStatus" === HH) {
            const HH = BH;
            RH.set(HH), HH.baf2RxOpen && (PB({
              kind: "reactor"
            }), (0, Wr.t)())
          } else if ("baf2BatStatus" === HH) {
            const HH = BH;
            jH.set(HH), HH.baf2BatOpen && (PB({
              kind: "battery"
            }), (0, Wr.t)())
          } else if ("baf2RxAlarm" === HH) ZH.lT(BH);
          else if ("baf2Bomb" === HH) sH.lT(BH, WH.getPositionView(SH));
          else if ("baf2Fallout" === HH) iH.lT(BH);
          else if ("baf2ColBeams" === HH) yH.onBeams(BH);
          else if ("baf2ColStatus" === HH) {
            const HH = BH;
            var FH, DH;
            if (yH.onStatus(HH), HH.baf2ColOpen) yH.onOpen(null !== (FH = null === (DH = WH.yLH(SH)) || void 0 === DH ? void 0 : DH.name) && void 0 !== FH ? FH : null), PB({
              kind: "collider"
            }), (0, Wr.t)()
          } else if ("baf2Terminal" === HH) {
            const HH = BH;
            var wH;
            if (lH.apply(HH)) HH.baf2TermReset && (PB({
              kind: "terminal"
            }), (0, Wr.t)());
            else "terminal" === (null === (wH = tH.get()) || void 0 === wH ? void 0 : wH.kind) && (tH.set(null), (0, Wr.g)())
          } else if ("baf2Core" === HH) {
            var dH;
            const HH = BH;
            if (zH(!0 === HH.baf2CoreNuclear), function(HH, BH) {
                return "core" === (null === HH || void 0 === HH ? void 0 : HH.kind) && BH.baf2CoreTier > HH.core.message.baf2CoreTier
              }(tH.get(), HH)) return void(0, Wr.g)();
            if (HH.baf2CoreRefresh && "core" !== (null === (dH = tH.get()) || void 0 === dH ? void 0 : dH.kind)) return;
            PB({
              kind: "core",
              core: hx(HH, vH)
            }), HH.baf2CoreRefresh || (0, Wr.t)()
          } else if ("baf2WrenchUndo" === HH) {
            const {
              baf2WrenchPos: HH,
              baf2WrenchBlock: LH
            } = BH;
            WH.oq(HH[0], HH[1], HH[2], LH)
          } else if ("baf2Toast" === HH) {
            const HH = BH;
            nH.heard(performance.now(), HH.baf2ToastMs), TH.show(HH)
          } else if ("baf2Area" === HH) VH.arrive(BH, null !== tH.get());
          else if ("baf2Quest" === HH) {
            const HH = BH;
            zH(!0 === HH.baf2QuestNuclear), PH.set(HH, function(HH, BH) {
              var LH, AH, rH, SH, hH;
              const tH = [];
              for (const [, , EH, , , , , , XH, GH] of HH.baf2QuestSteps) null !== EH && tH.push(EH), tH.push(...null !== XH && void 0 !== XH ? XH : [], ...null !== GH && void 0 !== GH ? GH : []);
              HH.baf2QuestReward && tH.push(HH.baf2QuestReward);
              const zH = null === (LH = HH.baf2QuestSide) || void 0 === LH ? void 0 : LH[2][2];
              zH && tH.push(zH), tH.push(...null !== (AH = null === (rH = HH.baf2QuestSide) || void 0 === rH ? void 0 : rH[2][8]) && void 0 !== AH ? AH : [], ...null !== (SH = null === (hH = HH.baf2QuestSide) || void 0 === hH ? void 0 : hH[2][9]) && void 0 !== SH ? SH : []);
              for (const [EH] of null !== (CH = HH.baf2QuestAlso) && void 0 !== CH ? CH : []) {
                var CH;
                tH.push(EH)
              }
              return BH(tH)
            }(HH, vH)), iM(HH.baf2QuestTier)
          } else if ("baf2Route" === HH) ! function(HH, BH) {
            let {
              baf2RouteCells: LH,
              baf2RouteInto: AH
            } = BH;
            0 !== LH.length && AH ? HH.setRouteChevrons({
              cells: LH.map(((HH, BH) => {
                const [rH, , SH] = function(HH, BH, LH) {
                  const AH = LH + 1 < HH.length ? HH[LH + 1] : BH;
                  return [AH[0] - HH[LH][0], 0, AH[2] - HH[LH][2]]
                }(LH, AH, BH);
                return {
                  pos: HH,
                  way: [rH, SH]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : HH.setRouteChevrons(null)
          }(WH, BH);
          else if ("baf2QuestBook" === HH) PH.setBook(BH);
          else if ("baf2Stalls" === HH) YH.set(BH.baf2StallCells);
          else if (HH === QL.k) QH.onMoves(BH);
          else if (HH === QL.g) QH.onLines(BH);
          else if ("baf2Labels" === HH) mH.lT(BH);
          else if ("baf2DropMap" === HH) PB({
            kind: "dropMap",
            dropMap: BH
          }), (0, Wr.t)();
          else if ("baf2Islands" === HH) {
            var JH, HB;
            const HH = BH;
            if (MH.syncIslandEdits(HH.baf2IslandsAnswered), !HH.baf2IslandsOpen && "islands" !== (null === (JH = tH.get()) || void 0 === JH ? void 0 : JH.kind)) return;
            if (HH.baf2IslandsOpen) {
              var BB, LB;
              const BH = Mr.c.get("openEverythingMenuName"),
                LH = MH.sent() >= QB,
                AH = "other" !== (YB = {
                  askedAtMs: uB,
                  askSent: LH,
                  reaskedAtMs: WB,
                  nowMs: Date.now(),
                  panel: null !== (BB = null === (LB = tH.get()) || void 0 === LB ? void 0 : LB.kind) && void 0 !== BB ? BB : null,
                  inGameMenu: Mr.c.get("openInGameMenuName"),
                  everythingMenu: null === BH ? null : BH === XL.o.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== HH.baf2IslandsFocusInvite
                }).everythingMenu && (!!YB.focusInvite || "islands" === YB.panel && "clientGame" === YB.inGameMenu || !(YB.nowMs - YB.reaskedAtMs < kC) && (YB.askSent && YB.nowMs - YB.askedAtMs < kC ? "core" === YB.panel && "clientGame" === YB.inGameMenu && null === YB.everythingMenu : "shop" === YB.everythingMenu || null === YB.inGameMenu));
              if (LH && (uB = -1 / 0), WB = -1 / 0, !AH) return void xB()
            }
            const LH = (rB = HH.baf2IslandsOpen, SB = "islands" === (null === (HB = tH.get()) || void 0 === HB ? void 0 : HB.kind), EB = MB, XB = Date.now(), rB && !SB && XB - EB < kC);
            PB({
              kind: "islands",
              islands: HH,
              arrivedAtMs: Date.now(),
              backToCore: mC(tH.get())
            }), LH && (MB = -1 / 0, WB = Date.now(), MH.send(aH)), HH.baf2IslandsOpen && ("clientGame" !== Mr.c.get("openInGameMenuName") && (0, xr.g)(), (0, Wr.t)())
          } else if ("baf2CoopTransfer" === HH) {
            var AB;
            const HH = BH;
            HH.baf2TransferOn ? (PB({
              kind: "transfer",
              transfer: HH,
              arrivedAtMs: Date.now()
            }), (0, Wr.t)()) : "transfer" === (null === (AB = tH.get()) || void 0 === AB ? void 0 : AB.kind) && (0, Wr.g)()
          } else "baf2IslandLeft" === HH ? (VH.dropHeld(), null !== tH.get() && TB(), "inventory" === Mr.c.get("openInGameMenuName") && (0, xr.g)()) : "baf2Arc" === HH ? hB.lT(WH, BH) : "baf2Blade" === HH ? tB.onBlade(WH, BH) : "baf2JetFlame" === HH ? zB.lT(WH, BH) : "baf2GearPower" === HH && CB.lT(BH);
          var rB, SB, EB, XB, YB
        }
      };
      return OB
    }
  },
  39361: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      h: () => tH
    });
    var AH = LH(317),
      rH = LH(35006),
      SH = LH(3639);

    function hH(HH) {
      const BH = (0, SH.e)(HH);
      return (0, AH.Yb)(HH, void 0 === BH ? void 0 : (0, rH.displayNameOf)(BH))
    }

    function tH(HH, BH) {
      return HH(hH(BH))
    }
  },
  39388: (HH, BH, LH) => {
    function AH(HH, BH, LH) {
      const AH = new Set,
        rH = new ResizeObserver(LH),
        SH = () => {
          const BH = new Set(document.querySelectorAll(HH));
          let SH = !1;
          for (const HH of AH) BH.has(HH) || (rH.unobserve(HH), AH.delete(HH), SH = !0);
          for (const HH of BH) AH.has(HH) || (rH.observe(HH), hH.observe(HH, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), AH.add(HH));
          SH && LH()
        },
        hH = new MutationObserver((BH => {
          BH.some((HH => "attributes" === HH.type)) && LH(), BH.some((BH => function(HH, BH, LH) {
            if ("childList" !== HH.type) return !1;
            for (const AH of HH.addedNodes)
              if (AH instanceof Element && (AH.matches(BH) || AH.querySelector(BH))) return !0;
            for (const AH of HH.removedNodes)
              if (AH instanceof Element)
                for (const HH of LH)
                  if (AH.contains(HH)) return !0;
            return !1
          }(BH, HH, AH))) && SH()
        }));
      hH.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const tH of BH) rH.observe(tH);
      return window.addEventListener("resize", LH), SH(), LH(), () => {
        rH.disconnect(), hH.disconnect(), window.removeEventListener("resize", LH)
      }
    }
    LH.d(BH, {
      c: () => AH
    })
  },
  39374: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH
    });
    var AH = LH(39370);
    const rH = 5,
      SH = [0, 0, 0],
      hH = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function tH(HH, BH, LH, tH, zH, CH) {
      let [EH, XH, GH] = tH;
      const YH = (EH + .5 - LH[0]) ** 2 + (XH - LH[1]) ** 2 + (GH + .5 - LH[2]) ** 2;
      let uH = null;
      YH <= CH ** 2 && (SH[0] = EH + .5, SH[1] = XH + zH, SH[2] = GH + .5, uH = BH.projectWorldPosToViewport(SH));
      const QH = null !== uH && uH.x > -rH && uH.x < 100 + rH && uH.y > -rH && uH.y < 100 + rH;
      return (0, AH.e)(HH, !QH), QH ? (hH.x = uH.x, hH.y = uH.y, hH.distSq = YH, hH) : null
    }
  },
  39370: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      e: () => SH
    });
    const AH = new WeakMap;

    function rH(HH) {
      let BH = AH.get(HH);
      return BH || (BH = {
        hidden: HH.hidden,
        x: NaN,
        y: NaN
      }, AH.set(HH, BH)), BH
    }

    function SH(HH, BH) {
      const LH = rH(HH);
      LH.hidden !== BH && (LH.hidden = BH, HH.hidden = BH)
    }

    function hH(HH, BH, LH) {
      const AH = rH(HH);
      AH.x === BH && AH.y === LH || (AH.x = BH, AH.y = LH, HH.style.translate = `${BH}vw ${LH}vh`)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);