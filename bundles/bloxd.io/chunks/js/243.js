export const id = 243;
export const ids = [243];
export const modules = {
  38522: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(38526);
    const bS = [0, 0, 0];
    class XS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bS;
        this.pool = SS, this.origin = HS, this.count = 0, this.free = []
      }
      take() {
        var SS;
        const HS = null !== (SS = this.free.pop()) && void 0 !== SS ? SS : this.count++;
        return HS >= this.pool.hf && this.pool.grow(Math.max(2 * this.pool.hf, HS + 1)), this.hide(HS), HS
      }
      release(SS) {
        this.hide(SS), this.free.push(SS)
      }
      write(SS, HS, gS, bS) {
        const {
          records: XS
        } = this.pool, {
          origin: xS
        } = this, NS = SS * tS.b;
        XS[NS] = HS - xS[0], XS[NS + 1] = gS - xS[1], XS[NS + 2] = bS - xS[2], XS[NS + tS.f] = 0, this.pool.markDirty(SS)
      }
      hide(SS) {
        this.pool.records[SS * tS.b + tS.f] = 1, this.pool.markDirty(SS)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class xS {
      constructor(SS, HS, gS) {
        this.api = SS, this.model = HS, this.initialCapacity = gS, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(SS) {
        let HS = this.kinds.get(SS);
        if (void 0 === HS) {
          const gS = this.api.createInstancePool({
            ...this.model,
            item: SS
          }, this.initialCapacity);
          null === gS || void 0 === gS || gS.setOrigin(this.origin[0], this.origin[1], this.origin[2]), HS = gS && new XS(gS, this.origin), this.kinds.set(SS, HS)
        }
        return HS
      }
      follow(SS) {
        const {
          origin: HS
        } = this;
        if (Math.abs(SS[0] - HS[0]) <= 512 && Math.abs(SS[1] - HS[1]) <= 512 && Math.abs(SS[2] - HS[2]) <= 512) return !1;
        HS[0] = Math.floor(SS[0]), HS[1] = Math.floor(SS[1]), HS[2] = Math.floor(SS[2]);
        for (const gS of this.kinds.values()) null === gS || void 0 === gS || gS.pool.setOrigin(HS[0], HS[1], HS[2]);
        return !0
      }
      commit() {
        for (const SS of this.kinds.values()) null === SS || void 0 === SS || SS.commit()
      }
      dispose() {
        for (const SS of this.kinds.values()) null === SS || void 0 === SS || SS.dispose();
        this.kinds.clear()
      }
    }
  },
  38541: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      e: () => NS,
      g: () => qS
    });
    const tS = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      bS = [0, 1, 2, 0, 2, 3],
      XS = [4, 5];

    function xS(SS, HS, gS, tS, bS) {
      for (let xS = 0; xS < 6; xS++) XS.includes(xS) === bS && uS(SS, HS, gS, tS, xS)
    }

    function NS(SS, HS, gS, tS) {
      for (let bS = 0; bS < 6; bS++) uS(SS, HS, gS, tS, bS)
    }

    function qS(SS, HS, gS, XS, xS) {
      for (let NS = 0; NS < 6; NS++)
        for (const qS of [0, 1]) {
          const [uS, IS, fS] = [qS + 2, qS + 1, (qS + 3) % 4], kS = SS.length / 3;
          for (const [HS, bS] of [
              [qS, IS],
              [uS, IS],
              [uS, fS],
              [qS, fS]
            ])
            for (let qS = 0; qS < 3; qS++) {
              const uS = tS[3 * (4 * NS + HS) + qS],
                IS = tS[3 * (4 * NS + bS) + qS];
              SS.push((uS + (IS - uS) * xS) * XS / 2 + gS[qS])
            }
          for (const SS of bS) HS.push(kS + SS)
        }
    }

    function uS(SS, HS, gS, XS, xS) {
      let [NS, qS, uS] = gS, [IS, fS, kS] = XS;
      const aS = SS.length / 3;
      for (let bS = 4 * xS; bS < 4 * xS + 4; bS++) SS.push(tS[3 * bS] * IS / 2 + NS, tS[3 * bS + 1] * fS / 2 + qS, tS[3 * bS + 2] * kS / 2 + uS);
      for (const tS of bS) HS.push(aS + tS)
    }
  },
  38515: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => Pn
    });
    var tS = gS(64);
    const bS = [{
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
      XS = 10;
    let xS = !0;

    function NS() {
      return xS
    }

    function qS(SS) {
      xS = SS
    }
    const uS = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function IS() {
      return xS ? bS.length : XS
    }

    function fS(SS) {
      var HS, gS;
      return null !== (HS = null === (gS = bS[SS - 1]) || void 0 === gS ? void 0 : gS.reactorTier) && void 0 !== HS ? HS : 0
    }

    function kS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fS(SS) > 0;
      return gS && !xS ? "hidden" : SS <= HS ? "open" : gS ? HS < 5 ? "hidden" : HS < XS ? "teaser" : "locked" : "locked"
    }

    function aS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: tS,
        n: bS
      } = GS(SS);
      return {
        key: HS[tS],
        params: {
          [tS]: gS ? String(bS) : bS
        }
      }
    }
    const KS = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function jS(SS, HS) {
      return fS(SS) > 0 && HS < XS
    }

    function GS(SS) {
      const HS = fS(SS);
      if (HS > 0) return {
        kind: "atomic",
        n: HS,
        short: `A${HS}`
      };
      const gS = function(SS) {
        return SS >= 6 && SS <= 10 ? SS - 6 + 1 : 0
      }(SS);
      return gS > 0 ? {
        kind: "stage",
        n: gS,
        short: `S${gS}`
      } : {
        kind: "tier",
        n: SS,
        short: String(SS)
      }
    }

    function CS(SS) {
      return bS[Math.max(1, Math.min(SS, bS.length)) - 1]
    }

    function nS(SS, HS) {
      return SS < HS ? function(SS) {
        var HS;
        return null !== (HS = bS[SS]) && void 0 !== HS ? HS : null
      }(SS) : null
    }
    const PS = "baf2coresubmit",
      QS = "baf2corebankpause",
      DS = "baf2coredeposit",
      wS = "baf2corechargepause";

    function hS(SS) {
      var HS;
      return null !== (HS = SS.baf2CoreOpen) && void 0 !== HS ? HS : XS
    }
    const ZS = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function JS(SS) {
      return ZS.includes(SS)
    }
    const OS = (SS, HS) => HS.map((HS => [HS, [SS]])),
      dS = Object.fromEntries([...OS("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...OS("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...OS("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...OS("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...OS("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...OS("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...OS("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...OS("Parts Bench", ["Focus Lens"]), ...OS("Machine Bench", ["Laser", "Collider"]), ...OS("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...OS("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...OS("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...OS("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...OS("Tool Bench", ["Mob Cage"]), ...OS("Tool Bench", ["Pocket Terminal"]), ...OS("Tool Bench", ["Comet Beacon"]), ...OS("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function cS(SS) {
      var HS;
      return null !== (HS = dS[SS]) && void 0 !== HS ? HS : ["Workbench"]
    }

    function vS(SS) {
      return cS(SS)[0]
    }
    bS.slice(1).map(((SS, HS) => `Core Tier ${HS+2}`));
    var ES = gS(9361);
    const LS = ["on", "hud", "off"];

    function YS(SS) {
      return "on" === SS
    }
    var AS = gS(387);
    const yS = "Mob Farm",
      VS = {
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
      iS = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      WS = {
        1: 20,
        2: 60,
        3: 120
      },
      zS = "baf2farmvoid",
      US = "Caged ",
      pS = " Spawner Block";

    function sS(SS) {
      return `lifeform:${(0,AS.ue)(SS)}`
    }

    function BS(SS) {
      if (!SS) return null;
      if (SS.startsWith(US)) {
        const HS = SS.slice(6);
        return iS.includes(HS) ? HS : null
      }
      if (SS.endsWith(pS)) {
        const HS = SS.slice(0, -14);
        return void 0 !== VS[HS] ? HS : null
      }
      return null
    }

    function MS(SS) {
      return !0 === SS.mobFarm
    }

    function FS(SS, HS) {
      return WS[VS[HS]] * SS.opMs / 1e3
    }
    const RS = new Map;
    const TS = "baf2islands",
      oS = "baf2islandnew";

    function lS(SS) {
      const HS = bS.findIndex((HS => HS.unlocks.includes(SS)));
      return HS < 0 ? 1 : HS + 1
    }

    function mS(SS) {
      return Math.floor(SS).toLocaleString("en-US")
    }
    var eS = gS(38462);
    const rS = "baf2terminaltake",
      SH = "baf2terminalput",
      HH = ["one", "stack", "fill"];

    function gH(SS, HS, gS) {
      return `${rS} ${SS} ${HS} ${gS}`
    }

    function tH(SS, HS, gS) {
      return `${SH} ${SS} ${HS} ${gS}`
    }

    function bH(SS) {
      return `${SH} ${SS}`
    }
    const XH = [
      [`${rS} `, "take"],
      [`${SH} `, "put"]
    ];

    function xH(SS) {
      const HS = XH.find((HS => {
        let [gS] = HS;
        return SS.startsWith(gS)
      }));
      if (!HS) return null;
      const [gS, tS] = HS, [bS, XS, ...xS] = SS.slice(gS.length).trim().split(" "), NS = Number(bS);
      if (!Number.isSafeInteger(NS) || NS <= 0) return null;
      if ("put" === tS && void 0 === XS) return {
        kind: "putAll",
        seq: NS
      };
      const qS = function(SS) {
        if (HH.includes(SS)) return SS;
        const HS = Number(SS);
        return /^\d+$/.test(SS) && Number.isSafeInteger(HS) && HS > 0 ? HS : null
      }(null !== XS && void 0 !== XS ? XS : "");
      return null === qS || 0 === xS.length ? null : {
        kind: tS,
        seq: NS,
        mode: qS,
        item: xS.join(" ")
      }
    }

    function NH(SS, HS) {
      const gS = "number" === typeof SS ? SS : "one" === SS ? 1 : "stack" === SS ? 99 : HS;
      return Math.min(HS, gS)
    }

    function qH(SS, HS) {
      const gS = SS => "number" === typeof SS ? SS : "one" === SS ? 1 : 99;
      return "fill" === SS || "fill" === HS ? "fill" : gS(SS) + gS(HS)
    }

    function uH(SS, HS) {
      const gS = xH(SS),
        tS = xH(HS),
        bS = gS && tS ? function(SS, HS) {
          return "take" === SS.kind || "take" === HS.kind ? "take" === SS.kind && "take" === HS.kind && SS.item === HS.item ? {
            ...HS,
            mode: qH(SS.mode, HS.mode)
          } : null : "putAll" === SS.kind || "putAll" === HS.kind ? {
            kind: "putAll",
            seq: HS.seq
          } : SS.item === HS.item ? {
            ...HS,
            mode: qH(SS.mode, HS.mode)
          } : null
        }(gS, tS) : null;
      return bS ? "putAll" === (XS = bS).kind ? bH(XS.seq) : "put" === XS.kind ? tH(XS.seq, XS.mode, XS.item) : gH(XS.seq, XS.mode, XS.item) : null;
      var XS
    }
    const IH = "baf2rx";

    function fH(SS, HS) {
      for (var gS = arguments.length, tS = new Array(gS > 2 ? gS - 2 : 0), bS = 2; bS < gS; bS++) tS[bS - 2] = arguments[bS];
      return [IH, SS[0], SS[1], SS[2], HS, ...tS].join(" ")
    }
    const kH = 2,
      aH = 4,
      KH = 8,
      jH = 16,
      GH = 32,
      CH = 64,
      nH = 128,
      PH = 256,
      QH = 512,
      DH = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      wH = [{
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
    const hH = "Biomass",
      ZH = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function JH(SS) {
      return {
        input: hH,
        inputAmount: 1,
        output: SS,
        outputAmount: 1
      }
    }
    const OH = "baf2synth",
      dH = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      cH = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      vH = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      EH = function(SS, HS) {
        return {
          input: SS,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: HS,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      LH = function(SS, HS) {
        return {
          ...EH(SS, HS, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      YH = cH.map((SS => LH(SS, "Biomass", 2))),
      AH = {
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
          recipes: [EH("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), EH("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), EH("Raw Gold", "Gold Grit", 2), EH("Messy Stone", "Sand"), EH("Gravel", "Sand"), EH("Raw Voltite", "Voltite Dust", 2), EH("Moonstone", "Moonstone Dust", 4), EH("Wheat Seeds", "Fertiliser"), EH("Raw Uranium", "Uranium Grit", 2), LH("Mossy Messy Stone", "Sand"), ...YH],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [EH("Iron Grit", "Iron Bar"), EH("Copper Grit", "Copper Bar"), EH("Gold Grit", "Gold Bar"), EH("Raw Iron", "Iron Bar"), EH("Raw Copper", "Copper Bar"), EH("Raw Gold", "Gold Bar"), EH("Sand", "Glass"), EH("Messy Stone", "Stone"), ...AS.Oc.map((SS => EH(SS, "Charcoal", 1, 4))), EH("Wheat", "Bread", 1, 2), ...cH.map(((SS, HS) => LH(SS, vH[HS])))],
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
          recipes: [EH("Iron Bar", "Iron Plate"), EH("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [EH("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [EH("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [EH("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), EH("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), EH("Raw Gold", "Gold Grit", 3), EH("Raw Voltite", "Voltite Dust", 3), EH("Messy Stone", "Sand", 2), EH("Gravel", "Sand", 2), EH("Moonstone", "Moonstone Dust", 6), EH("Raw Uranium", "Uranium Grit", 3), LH("Mossy Messy Stone", "Sand", 2), ...YH],
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
          table: DH
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [EH("Coal", "Diamond", 1, 24), EH("Voltite Dust", "Moonstone", 1, 12)],
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
        ...eS.l
      },
      yH = {
        Crusher: [EH("Spent Pellet", "Glow Dust"), EH("Wheat Seeds", "Biomass"), EH("Wheat", "Biomass"), EH("Dead Bush", "Biomass"), EH("Dusk Moss", "Biomass"), EH("Rotten Flesh", "Biomass"), EH("Bone", "Biomass", 2)],
        "Shatter Mill": [EH("Spent Pellet", "Glow Dust"), EH("Wheat Seeds", "Biomass"), EH("Wheat", "Biomass"), EH("Dead Bush", "Biomass"), EH("Dusk Moss", "Biomass"), EH("Rotten Flesh", "Biomass"), EH("Bone", "Biomass", 2), ...AS.Oc.map((SS => EH(SS, "Biomass")))],
        Smelter: [EH("Biomass", "Fertiliser", 2)],
        Press: [EH("Coal", "Graphite", 1, 4)]
      },
      VH = "Power Coupler",
      iH = "Advanced Coupler",
      WH = "Nova Coupler",
      zH = [{
        item: VH,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: iH,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: WH,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const UH = new Map;

    function pH(SS) {
      var HS, gS;
      return null !== (HS = null !== (gS = SS.fuelSlot) && void 0 !== gS ? gS : SS.couplerSlot) && void 0 !== HS ? HS : null
    }

    function sH(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!SS.couplable) throw new Error(`${SS.kind} takes no Power Coupler`);
      let gS = UH.get(SS);
      gS || (gS = [], UH.set(SS, gS));
      let tS = gS[HS];
      if (!tS) {
        var bS;
        const {
          divisor: XS,
          powerPerS: xS
        } = zH[HS - 1], NS = SS.opMs / XS, qS = void 0 !== SS.fluidMade || void 0 !== SS.cryoMade ? SS.powerPerOp : xS * NS / 1e3;
        tS = {
          ...SS,
          fuelSlot: null,
          couplerSlot: null !== (bS = pH(SS)) && void 0 !== bS ? bS : void 0,
          opMs: NS,
          powerPerOp: qS,
          coupled: !0
        }, HS > 1 && (tS = {
          ...tS,
          couplerLevel: HS
        }), gS[HS] = tS
      }
      return tS
    }
    const BH = new Map;
    const MH = new Map;

    function FH(SS, HS) {
      if (null === HS || (gS = HS, !ZH.includes(gS))) return SS;
      var gS;
      let tS = MH.get(HS);
      return tS || (tS = {
        ...SS,
        recipes: [JH(HS)]
      }, MH.set(HS, tS)), tS
    }

    function RH(SS) {
      return !0 === SS.synth
    }
    const TH = (SS, HS, gS, tS) => ({
        output: SS,
        outputAmount: HS,
        tier: gS,
        inputs: tS.map((SS => {
          let [HS, gS] = SS;
          return {
            item: HS,
            amount: gS
          }
        }))
      }),
      oH = Object.fromEntries([TH("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), TH("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), TH("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), TH("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), TH("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), TH("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), TH("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), TH("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), TH("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), TH("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), TH("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), TH("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), TH("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), TH("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), TH("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), TH("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), TH("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), TH("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), TH("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), TH("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), TH("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), TH("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), TH("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), TH("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), TH("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), TH("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), TH("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), TH("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), TH("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), TH("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((SS => [SS.output, SS]))),
      lH = new Map;

    function mH(SS, HS) {
      let gS = AH[SS];
      if (HS.atomic && (gS = function(SS) {
          const HS = yH[SS.kind];
          if (!HS) return SS;
          let gS = BH.get(SS.kind);
          if (!gS) {
            const tS = new Set(HS.map((SS => SS.input))),
              bS = SS.recipes.filter((SS => !tS.has(SS.input)));
            gS = {
              ...SS,
              recipes: [...bS, ...HS]
            }, BH.set(SS.kind, gS)
          }
          return gS
        }(gS)), gS.synth) return FH(gS, HS.taught);
      if (HS.coupled && gS.couplable) return sH(gS, HS.level);
      const tS = gS.inputSlots && null !== HS.taught ? oH[HS.taught] : void 0;
      if (!tS) return gS;
      const bS = `${SS}|${tS.output}`;
      let XS = lH.get(bS);
      return XS || (XS = {
        ...gS,
        bench: tS
      }, lH.set(bS, XS)), XS
    }
    const eH = ["Diamond", "Moonstone"];

    function rH(SS) {
      return new Set(SS.flatMap((SS => SS.bonus ? [SS.output, SS.bonus.item] : [SS.output])).filter((SS => !eH.includes(SS))))
    }
    const Sg = Object.values(AH).flatMap((SS => SS.recipes));
    rH(Sg.filter((SS => !0 !== SS.nuclear))), rH([...Sg.filter((SS => !0 === SS.nuclear)), ...Object.values(yH).flat()]);

    function Hg(SS) {
      return null === SS.inputSlot && void 0 === SS.inputSlots && void 0 === SS.powerMade && void 0 === SS.fluidMade && !SS.treeCutter && void 0 === SS.table
    }

    function gg(SS) {
      return !0 === SS.treeCutter
    }
    const tg = ["Voltite Cell"];

    function bg(SS) {
      var HS, gS;
      return null !== (HS = null === (gS = SS.fuels) || void 0 === gS ? void 0 : gS.some((SS => tg.includes(SS)))) && void 0 !== HS && HS
    }
    const Xg = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(AS.Oc.map((SS => [SS, 8e3]))),
        ...Object.fromEntries(AS.rd.map((SS => [SS, 2e3]))),
        "Voltite Cell": 12e4
      },
      xg = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Ng = {
        "Uranium Deposit": 4e3
      };

    function qg(SS) {
      var HS;
      return null !== (HS = Object.keys(xg).find((HS => xg[HS] === SS))) && void 0 !== HS ? HS : null
    }

    function ug(SS) {
      return dH.includes(SS)
    }

    function Ig(SS) {
      return !0 !== SS.nuclear || NS()
    }
    var fg = gS(369);
    var kg = gS(9447),
      ag = gS(9372),
      Kg = gS(9453),
      jg = gS(9439);
    const Gg = "Reactor Controller",
      Cg = "Reactor Port",
      ng = "Battery Cell",
      Pg = ["fuel", "water", "waste"],
      Qg = {
        fuel: Cg,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Dg = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      wg = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      hg = "Reactor Frame",
      Zg = "Reactor Glass",
      Jg = {
        edge: [hg],
        cap: [Zg, Cg],
        wall: [Zg, Cg],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [Gg]
      },
      Og = {
        edge: [ng],
        cap: [ng],
        wall: [ng],
        inside: [ng],
        ctrl: [ng]
      },
      dg = ["edge", "cap", "wall", "inside"],
      cg = ["Reactor Slag"];

    function vg(SS) {
      return cg.includes(Eg(SS))
    }

    function Eg(SS) {
      const HS = SS.indexOf("|");
      return HS < 0 ? SS : SS.slice(0, HS)
    }

    function Lg(SS) {
      return Eg(SS) === Gg ? "reactor" : null
    }

    function Yg(SS) {
      return Eg(SS) !== Cg ? null : SS.endsWith("|Water") ? "water" : SS.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Ag(SS) {
      const HS = Yg(SS);
      return null === HS ? null : ig(Qg[Pg[(Pg.indexOf(HS) + 1) % Pg.length]], function(SS) {
        return SS.includes(yg)
      }(SS))
    }
    const yg = "|meta|rot1|Formed",
      Vg = new Set([hg, Zg, Cg]);

    function ig(SS, HS) {
      var gS;
      const tS = Eg(SS);
      if (!Vg.has(tS)) return SS;
      if (tS !== Cg) return HS ? tS + yg : tS;
      const bS = null !== (gS = Yg(SS)) && void 0 !== gS ? gS : "fuel";
      return HS ? "fuel" === bS ? tS + yg : `${tS}${yg}|${"water"===bS?"Water":"Waste"}` : Qg[bS]
    }

    function Wg(SS, HS) {
      const gS = tt(SS, HS);
      if ("Air" === gS) return !1;
      const tS = "reactor" === SS ? Jg : Og;
      return dg.some((SS => tS[SS].includes(gS))) || "reactor" === SS && cg.includes(gS)
    }

    function zg(SS) {
      return wg[SS]
    }

    function Ug(SS) {
      var HS;
      return null !== (HS = Dg[SS]) && void 0 !== HS ? HS : Dg[1]
    }

    function pg(SS) {
      const [HS, , gS] = Ug(SS);
      return [gS, 0, -HS]
    }

    function sg(SS, HS, gS, tS, bS, XS) {
      return {
        ctrl: [SS[0], SS[1], SS[2]],
        rot: Dg[HS] ? HS : 1,
        w: gS,
        h: tS,
        d: bS,
        cu: XS[0],
        cv: XS[1]
      }
    }

    function Bg(SS, HS) {
      return "reactor" === SS ? [Math.floor((HS - 1) / 2), 0] : [0, 0]
    }

    function Mg(SS, HS, gS, tS, bS) {
      let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : SS.rot;
      if (gS === SS.w && tS === SS.h && bS === SS.d && XS === SS.rot) return SS;
      const [xS] = Bg(HS, SS.w);
      if (SS.cu === xS && SS.cv <= 1) return sg(SS.ctrl, XS, gS, tS, bS, Bg(HS, gS));
      const NS = (SS, HS) => Math.max(1, Math.min(HS, SS));
      return sg(SS.ctrl, XS, gS, tS, bS, [NS(SS.cu, gS - 2), 0 === SS.cv ? 0 : NS(SS.cv, tS - 2)])
    }
    const Fg = 11,
      Rg = 2 * Fg + 1;
    new Uint8Array(Rg * Rg * Rg);

    function Tg(SS) {
      return SS.w * SS.h * SS.d
    }

    function og(SS) {
      const HS = pg(SS.rot);
      return [SS.ctrl[0] - HS[0] * SS.cu, SS.ctrl[1] - SS.cv, SS.ctrl[2] - HS[2] * SS.cu]
    }

    function lg(SS) {
      return SS.cv * SS.d * SS.w + SS.cu
    }

    function mg(SS, HS) {
      const gS = HS % SS.w,
        tS = Math.floor(HS / SS.w) % SS.d;
      return [gS, Math.floor(HS / (SS.w * SS.d)), tS]
    }

    function eg(SS, HS) {
      const [gS, tS, bS] = mg(SS, HS), XS = og(SS), xS = Ug(SS.rot), NS = pg(SS.rot);
      return [XS[0] + NS[0] * gS - xS[0] * bS, XS[1] + tS, XS[2] + NS[2] * gS - xS[2] * bS]
    }

    function rg(SS, HS) {
      const gS = og(SS),
        tS = Ug(SS.rot),
        bS = pg(SS.rot),
        XS = HS[0] - gS[0],
        xS = HS[2] - gS[2],
        NS = XS * bS[0] + xS * bS[2],
        qS = -(XS * tS[0] + xS * tS[2]),
        uS = HS[1] - gS[1];
      return NS < 0 || NS >= SS.w || uS < 0 || uS >= SS.h || qS < 0 || qS >= SS.d ? -1 : (uS * SS.d + qS) * SS.w + NS
    }

    function St(SS, HS) {
      if (HS === lg(SS)) return "ctrl";
      const [gS, tS, bS] = mg(SS, HS), XS = 0 === tS || tS === SS.h - 1, xS = Number(0 === gS || gS === SS.w - 1) + Number(XS) + Number(0 === bS || bS === SS.d - 1);
      return xS >= 2 ? "edge" : 1 === xS ? XS ? "cap" : "wall" : "inside"
    }

    function Ht(SS, HS) {
      const [gS, tS, bS] = mg(SS, HS);
      return 0 === gS || gS === SS.w - 1 || 0 === tS || tS === SS.h - 1 || 0 === bS || bS === SS.d - 1 ? -1 : ((tS - 1) * (SS.d - 2) + (bS - 1)) * (SS.w - 2) + (gS - 1)
    }

    function gt(SS, HS) {
      const gS = SS.w - 2,
        tS = SS.d - 2,
        bS = HS % gS + 1,
        XS = Math.floor(HS / gS) % tS + 1;
      return ((Math.floor(HS / (gS * tS)) + 1) * SS.d + XS) * SS.w + bS
    }

    function tt(SS, HS) {
      const gS = Eg(HS);
      return "reactor" === SS && gS === Gg ? hg : gS
    }

    function bt(SS, HS, gS) {
      const tS = "ctrl" === HS ? Eg(gS) : tt(SS, gS);
      return ("reactor" === SS ? Jg : Og)[HS].includes(tS) ? "ok" : "Air" === tS ? "missing" : Wg(SS, gS) ? "wrong" : "blocked"
    }

    function Xt(SS, HS) {
      return "battery" === SS ? ng : "inside" === HS ? null : function(SS, HS) {
        if ("inside" === HS || "ctrl" === HS || "battery" === SS) return null;
        return "edge" === HS ? hg : Zg
      }(SS, HS)
    }
    const xt = {
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
      Nt = "Collider",
      qt = "Laser",
      ut = "Star Alloy",
      It = "Glow Dust",
      ft = [Nt, "_Collider Focus"];

    function kt(SS) {
      return ft.indexOf(Eg(SS))
    }

    function Kt(SS) {
      return Eg(SS) === qt
    }

    function jt(SS) {
      return [
        [SS[0], SS[1], SS[2]],
        [SS[0], SS[1] + 1, SS[2]]
      ]
    }
    const Gt = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function Ct(SS, HS, gS) {
      const tS = Gt[HS];
      return [SS[0] + tS[0] * gS, SS[1], SS[2] + tS[2] * gS]
    }

    function nt(SS, HS) {
      if (HS[1] !== SS[1]) return null;
      const gS = HS[0] - SS[0],
        tS = HS[2] - SS[2];
      if (0 !== gS === (0 !== tS)) return null;
      const bS = Math.abs(gS + tS);
      if (bS > xt.LASER_D) return null;
      return {
        dir: tS < 0 ? 0 : gS > 0 ? 1 : tS > 0 ? 2 : 3,
        BI: bS
      }
    }

    function Pt(SS, HS, gS) {
      const tS = HS => Math.abs(SS[0] - HS[0]) <= 1 && Math.abs(SS[1] - HS[1]) <= 1;
      return tS(HS) || tS(gS)
    }

    function Qt(SS, HS) {
      return function(SS, HS, gS, tS) {
        return [0, 1, 2, 3].map((bS => {
          for (let XS = 1; XS <= xt.LASER_D; XS++) {
            const xS = Ct(SS, bS, XS);
            if (Pt([xS[0], xS[2]], HS, gS) || !tS(xS)) return !1
          }
          return !0
        }))
      }(jt(SS)[1], HS.spawnXZ, HS.coreXZ, (SS => SS[1] >= kg.p && SS[1] < kg.p + kg.r && SS[0] >= HS.minXZ[0] && SS[0] <= HS.maxXZ[0] && SS[2] >= HS.minXZ[1] && SS[2] <= HS.maxXZ[1]))
    }
    const Dt = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function wt(SS) {
      return Math.max(48 + 16 * SS, CS(SS).machineAllowance)
    }
    const ht = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function Zt(SS) {
      const HS = SS.split("|")[0];
      return ht.includes(HS) ? "Solar Panel" : HS === Kg.e ? "Fluid Pipe" : kt(HS) >= 0 ? "Collider" : (gS = HS, Dt.includes(gS) ? HS : null);
      var gS
    }
    const Jt = "buildAFactory2Game:solarPanelDescription";
    const Ot = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function dt(SS, HS) {
      var gS;
      return null !== (gS = Ot.find((gS => {
        var tS;
        return (null !== (tS = SS.level(gS)) && void 0 !== tS ? tS : 0) >= HS
      }))) && void 0 !== gS ? gS : null
    }
    const ct = "buildAFactory2Game:";
    let vt = null;
    const Et = {
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
      Lt = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      Yt = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      At = {
        "Loot Chest": `${ct}lookRuinChestName`
      };

    function yt(SS) {
      return "object" === typeof SS && null !== SS && "translationKey" in SS && "string" === typeof SS.translationKey ? SS.translationKey : null
    }

    function Vt(SS, HS) {
      var gS;
      return null !== (gS = yt(SS.displayName(HS))) && void 0 !== gS ? gS : `item:${(0,AS.ue)(HS)}`
    }

    function it(SS, HS) {
      var gS, tS, bS, XS;
      let xS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HS;
      if ("Solar Panel" === Zt(HS)) return {
        name: yt(SS.displayName("Solar Panel")),
        detail: Jt,
        detailItem: null
      };
      const qS = HS.endsWith(" Ore"),
        uS = (vt ??= new Set([...Object.keys((0, ag.i)()), ...Object.keys((0, Kg.w)())].map((SS => SS.split("|")[0]))), vt).has(HS),
        IS = qS || uS ? null : function(SS) {
          var HS;
          return SS.endsWith(" Log") && !SS.startsWith("Barkless ") ? "lookLog" : SS.endsWith(" Sapling") ? "lookSapling" : SS.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (HS = Et[SS]) && void 0 !== HS ? HS : null
        }(HS);
      if (!SS.isBlock(HS) || !qS && !uS && null === IS) return null;
      const fS = null !== (gS = null !== (tS = At[HS]) && void 0 !== tS ? tS : yt(null !== (bS = SS.displayName(xS)) && void 0 !== bS ? bS : SS.displayName(HS))) && void 0 !== gS ? gS : `item:${(0,AS.ue)(HS)}`;
      if (null !== IS) return {
        name: fS,
        detail: `${ct}${IS}`,
        detailItem: null
      };
      const kS = null !== (XS = Lt[HS]) && void 0 !== XS ? XS : NS() ? Yt[HS] : void 0;
      if (uS && void 0 !== kS) return {
        name: fS,
        detail: `${ct}${kS}`,
        detailItem: null
      };
      const aS = xg[HS];
      if (void 0 !== aS) return {
        name: fS,
        detail: `${ct}lookDeposit`,
        detailItem: Vt(SS, aS)
      };
      const KS = SS.harvestLevel(HS);
      if (qS && "rock" === SS.harvestType(HS) && 0 !== KS) {
        const HS = dt(SS, null !== KS && void 0 !== KS ? KS : 0);
        if (HS === Ot[0]) return {
          name: fS,
          detail: `${ct}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== HS) return {
          name: fS,
          detail: `${ct}lookPickaxe`,
          detailItem: Vt(SS, HS)
        }
      }
      return {
        name: fS,
        detail: yt(SS.description(HS)),
        detailItem: null
      }
    }

    function Wt(SS) {
      return SS < kg.p - 24
    }
    const zt = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const Ut = "Wrench",
      pt = "Nova Wrench";

    function st(SS) {
      return SS === Ut || SS === pt
    }
    const Bt = [...kg.F, "Belt Lift", "Belt Drop"];
    const Mt = ["Belt Lift", "Belt Drop"],
      Ft = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function Rt(SS) {
      return SS.split("|")[0]
    }

    function Tt(SS) {
      const HS = /\|rot(\d)/.exec(SS);
      return HS ? Number(HS[1]) : 1
    }

    function ot(SS) {
      return SS % 4 + 1
    }

    function lt(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === HS && "" === gS ? SS : `${SS}|meta|rot${HS}${gS}`
    }

    function mt(SS) {
      return Rt(SS) === kg.x ? (0, kg.L)(SS) ? "gateRight" : "gateLeft" : (0, kg.O)(SS)
    }

    function et(SS) {
      const HS = Rt(SS),
        gS = Tt(SS);
      if (kg.F.includes(HS)) return (0, kg.G)(HS, ot(gS), null);
      if (HS === kg.j) return (0, kg.R)(ot(gS), (0, kg.M)(SS));
      if (HS === kg.z) {
        const tS = Ft[(0, kg.O)(SS)];
        return null === tS ? lt(HS, ot(gS)) : lt(HS, gS, kg.A[tS])
      }
      return HS === kg.x ? (0, kg.L)(SS) ? lt(HS, ot(gS)) : lt(HS, gS, kg.n) : jg.b.includes(HS) && !Mt.includes(HS) || ug(HS) ? lt(HS, ot(gS)) : null
    }

    function rt(SS) {
      return jg.b.includes(SS) || ug(SS) || null !== Zt(SS)
    }

    function Sb(SS) {
      return "Solar Panel" === Zt(SS)
    }
    const Hb = "buildAFactory2Game:",
      gb = {
        leftFront: `${Hb}lookSplitDetail_leftFront`,
        frontRight: `${Hb}lookSplitDetail_frontRight`,
        gateRight: `${Hb}lookGateDetail_gateRight`
      };

    function tb(SS, HS) {
      var gS;
      let tS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const bS = mt(SS),
        XS = null === bS ? null : `${Hb}${bS.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${bS}`,
        xS = null === bS ? null : null !== (gS = gb[bS]) && void 0 !== gS ? gS : null;
      if (st(HS) && tS) {
        const gS = Rt(SS);
        return HS === pt && NS() && function(SS) {
          return Bt.includes(Rt(SS))
        }(SS) ? {
          mode: XS,
          detail: xS,
          next: `${Hb}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: XS,
          detail: xS,
          next: rt(gS) && !Sb(gS) ? `${Hb}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const qS = st(HS) ? et(SS) : null;
      if (null === qS) return {
        mode: XS,
        detail: xS,
        next: null,
        nextState: null
      };
      const uS = mt(qS);
      return null === uS || Tt(qS) !== Tt(SS) ? {
        mode: XS,
        detail: xS,
        next: `${Hb}lookWrenchTurn`,
        nextState: null
      } : {
        mode: XS,
        detail: xS,
        next: `${Hb}lookWrenchNext`,
        nextState: `${Hb}lookWrenchState_${uS}`
      }
    }
    const bb = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const Xb = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function xb(SS) {
      return [0, 1, 2, 3].map((HS => 0 !== (SS & 1 << HS)))
    }

    function Nb(SS) {
      const HS = [];
      for (let gS = 8; gS + 2 < SS.length; gS += 3) HS.push([SS[gS], SS[gS + 1], SS[gS + 2]]);
      return {
        focus: [SS[0], SS[1], SS[2]],
        lasers: xb(SS[3]),
        open: xb(SS[4]),
        live: xb(SS[5]),
        on: 1 === SS[6],
        state: Xb[SS[7]],
        blockers: HS
      }
    }
    const qb = "Arc Caster",
      ub = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      Ib = (Object.values(ub), "Jet Chestplate"),
      fb = "Nova Jet Chestplate",
      kb = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      ab = Object.values(kb);

    function Kb(SS, HS, gS) {
      return Math.min(function(SS) {
        return NS() && fS(SS) >= 5 ? 20 : 10
      }(gS), Math.floor(function(SS, HS) {
        return Math.max(0, SS) + (NS() ? Math.max(0, HS) : 0)
      }(SS, HS) / 5))
    }

    function jb(SS, HS, gS) {
      const tS = Kb(HS, gS, SS),
        bS = fS(SS),
        XS = (bS >= 3 ? 55 : bS >= 1 ? 50 : SS >= 8 ? 45 : 30) + tS,
        xS = Math.max(100 + tS, 2 * XS);
      return {
        arcDamage: XS,
        arcPierce: SS >= 7 ? 2 : 1,
        arcChain: SS >= 10,
        barrierMax: (bS >= 4 ? 100 : bS >= 2 ? 90 : SS >= 9 ? 80 : SS >= 6 ? 60 : 40) + 5 * tS,
        barrierRegenPerS: bS >= 5 ? 20 : SS >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * tS,
        novaShieldRegenPerS: 32,
        bladeDamage: xS,
        bladePunch: Math.round(.5 * xS),
        forgeRank: tS
      }
    }
    const Gb = {
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
    var Cb = gS(36854),
      nb = gS(36632),
      Pb = gS(36624),
      Qb = gS(24),
      Db = gS(1733),
      wb = gS(1121),
      hb = gS.n(wb);

    function Zb(SS) {
      return !0 === SS.field
    }
    const Jb = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function Ob(SS) {
      return Jb.has(SS) ? `buildAFactory2Game:itemPlural_${(0,AS.ue)(SS)}` : null
    }
    var db = gS(1281),
      cb = gS(1127),
      vb = gS(2050),
      Eb = gS(2031),
      Lb = gS(36845),
      Yb = gS(36849),
      Ab = gS(31),
      yb = gS(36841);
    const Vb = "baf2QuestView",
      ib = "baf2PlayerY",
      Wb = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class zb {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = SS, this.view = {
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
      set(SS, HS) {
        var gS, tS, bS, XS, xS, NS, qS, uS;
        const IS = JSON.stringify(SS.baf2QuestName) === JSON.stringify(this.view.name),
          fS = new Set(this.view.rows.filter((SS => SS.done)).map((SS => SS.id))),
          kS = new Set(this.view.rows.filter((SS => SS.justFinished)).map((SS => SS.id))),
          aS = SS.baf2QuestSide,
          KS = null !== aS && !0 === SS.baf2QuestSideFocus;
        let jS = !1,
          GS = 0;
        const CS = SS.baf2QuestSteps.map((SS => {
            const HS = Tb(SS, Wb.has(SS[0]) ? SS[0] : "" + GS++),
              gS = IS && HS.done && !fS.has(HS.id);
            return HS.justFinished = gS || IS && HS.done && kS.has(HS.id), jS ||= gS, HS
          })),
          nS = Rb(CS);
        nS >= 0 && !KS && (CS[nS].current = !0);
        const PS = !IS && null !== SS.baf2QuestName,
          QS = JSON.stringify(aS && [aS[0], aS[1]]),
          DS = QS === JSON.stringify(null !== (gS = null === (tS = this.view.side) || void 0 === tS ? void 0 : tS.name) && void 0 !== gS ? gS : null),
          wS = null !== aS && !this.sidesSeen.has(QS);
        wS && this.sidesSeen.add(QS), this.serverTutorial = null !== (bS = SS.baf2QuestTutorial) && void 0 !== bS ? bS : "on", (null !== (XS = SS.baf2QuestTutorialSeq) && void 0 !== XS ? XS : 0) >= this.pickSeq && this.endPick();
        const hS = !IS || !DS || SS.baf2QuestTier !== this.view.tier;
        this.view = {
          name: SS.baf2QuestName,
          rows: CS,
          reward: SS.baf2QuestReward,
          goal: SS.baf2QuestGoal,
          pulse: this.view.pulse + (jS || PS ? 1 : 0),
          itemNames: HS,
          side: aS && {
            name: [aS[0], aS[1]],
            row: {
              ...Tb(aS[2], "side"),
              current: KS
            },
            goal: null !== (xS = aS[3]) && void 0 !== xS ? xS : null
          },
          sideCameUpAt: wS ? Date.now() : this.view.sideCameUpAt,
          tier: SS.baf2QuestTier,
          core: SS.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (NS = SS.baf2QuestAlso) && void 0 !== NS ? NS : [],
          depth: null !== (qS = SS.baf2QuestDepth) && void 0 !== qS ? qS : null,
          tutorial: null !== (uS = this.pickedTutorial) && void 0 !== uS ? uS : this.serverTutorial,
          tutorialKnown: !0
        }, this.cj(), jS && this.scheduleClear(), hS && this.requestBook()
      }
      setTutorial(SS) {
        return this.endPick(), this.pickedTutorial = SS, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.cj()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: SS
        }, this.cj(), this.pickSeq
      }
      onPlayerY(SS) {
        const HS = Math.floor(SS);
        HS !== this.playerY && (this.playerY = HS, this.view.depth && Ab.k.cj(ib, HS))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(SS) {
        this.view = {
          ...this.view,
          chapters: SS.baf2BookChapters
        }, this.cj()
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
            rows: this.view.rows.map((SS => SS.justFinished ? {
              ...SS,
              justFinished: !1
            } : SS))
          }, this.cj()
        }), 2400)
      }
      cj() {
        Ab.k.cj(Vb, this.view, !0)
      }
    }

    function Ub(SS, HS) {
      return SS.sideCameUpAt > 0 && HS - SS.sideCameUpAt < 2400
    }

    function pb(SS) {
      return (null === SS.name || sb(SS)) && null === SS.side && null !== SS.chapters
    }

    function sb(SS) {
      var HS;
      return "quest_forgeOngoing" === (null === (HS = SS.name) || void 0 === HS ? void 0 : HS[0])
    }

    function Bb(SS) {
      return SS.filter((SS => !Wb.has(SS.key)))
    }

    function Mb(SS) {
      return SS.key.startsWith("stepCraft")
    }

    function Fb(SS, HS) {
      const gS = new Set,
        tS = SS.side ? [...SS.rows, SS.side.row] : SS.rows;
      for (const XS of tS)
        if (!XS.done) {
          !XS.item || HS && !Mb(XS) || gS.add(XS.item);
          for (const [SS, HS, tS] of null !== (bS = XS.chips) && void 0 !== bS ? bS : []) {
            var bS;
            HS < tS && gS.add(SS)
          }
        } return gS
    }

    function Rb(SS) {
      const HS = SS.findIndex((SS => !SS.done && !SS.away));
      return HS >= 0 ? HS : SS.findIndex((SS => !SS.done))
    }

    function Tb(SS, HS) {
      let [gS, tS, bS, XS, xS, NS, qS, uS, IS, fS] = SS;
      return {
        id: HS,
        key: gS,
        params: tS,
        item: bS,
        amount: XS,
        total: xS,
        done: NS,
        chips: null !== qS && void 0 !== qS ? qS : null,
        current: !1,
        away: !0 === uS,
        madeFor: null !== IS && void 0 !== IS ? IS : [],
        also: null !== fS && void 0 !== fS ? fS : [],
        justFinished: !1
      }
    }
    const ob = "baf2QuestItems",
      lb = new Set;
    let mb = new Set,
      eb = null;

    function rb(SS) {
      const HS = YS(SS.tutorial),
        gS = HS ? Fb(SS, !0) : lb;
      "inventory" === Qb.b.get("openInGameMenuName") ? (eb = null, (0, yb.q)(gS)) : eb = gS;
      const tS = HS ? Fb(SS, !1) : lb;
      (0, Yb.b)(tS, mb) || (mb = tS, Ab.k.cj(ob, mb))
    }

    function SX() {
      return (0, Lb.b)(ob, (() => mb))
    }
    var HX = gS(34248),
      gX = gS(3437);

    function tX(SS) {
      const HS = (0, gX.d)(SS),
        gS = void 0 === HS ? void 0 : (0, HX.displayNameOf)(HS);
      return "object" === typeof gS && null !== gS && "translationKey" in gS && "string" === typeof gS.translationKey ? gS.translationKey : `item:${(0,AS.ue)(SS)}`
    }

    function bX(SS, HS) {
      return SS(tX(HS))
    }
    const XX = [{
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

    function xX(SS, HS) {
      return [`Deposit Seed (${SS})`, {
        item: xg[`${SS} Deposit`],
        amount: HS
      }]
    }
    const NX = Object.fromEntries([xX("Coal", 8), xX("Iron", 8), xX("Copper", 8), xX("Gold", 6), xX("Voltite", 4), xX("Uranium", 4)]),
      qX = "Relay Coil",
      uX = new Map;

    function IX(SS) {
      let HS = uX.get(SS);
      if (!HS) {
        const gS = Math.max(1, SS);
        HS = XX.filter((SS => {
          var HS;
          return gS >= SS.fromTier && gS <= (null !== (HS = SS.untilTier) && void 0 !== HS ? HS : 1 / 0)
        })).map((SS => SS.later && gS >= SS.later.tier ? {
          ...SS,
          weight: SS.later.weight
        } : SS)), uX.set(SS, HS)
      }
      return HS
    }

    function fX(SS) {
      return IX(SS).some((SS => {
        let {
          item: HS
        } = SS;
        return HS === qX
      }))
    }

    function kX(SS) {
      return SS.startsWith("Deposit Seed (")
    }

    function aX(SS, HS) {
      const gS = IX(SS);
      return HS ? gS.filter((SS => HS(SS.item))) : gS
    }

    function KX(SS) {
      return SS.reduce(((SS, HS) => SS + HS.weight), 0)
    }

    function jX(SS, HS) {
      const gS = aX(SS, HS),
        tS = KX(gS);
      return gS.map((SS => ({
        find: SS,
        chance: SS.weight / tS
      })))
    }
    const GX = 6e4,
      CX = new Intl.NumberFormat("en-US");

    function nX(SS, HS) {
      const gS = SS >= 10 ? Math.round(SS) : Math.round(10 * SS) / 10;
      return 0 === gS ? "0" : `${HS}${CX.format(gS)}`
    }

    function PX(SS) {
      return SS < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? CX.format(SS) : SS < 1e6 ? `${SS<1e5?Math.floor(SS/100)/10:Math.floor(SS/1e3)}k` : Math.floor(SS / 1e5) / 10 + "M"
    }

    function QX(SS) {
      return SS < 0 ? "\u2212" + -SS : String(SS)
    }

    function DX(SS, HS) {
      const gS = Math.max(1, Math.round(HS));
      if (gS < 60) return SS("buildAFactory2Game:durationSeconds", {
        seconds: String(gS)
      });
      const tS = Math.round(gS / 60);
      if (tS < 60) return SS("buildAFactory2Game:durationMinutes", {
        minutes: String(tS)
      });
      const bS = String(Math.floor(tS / 60));
      return tS % 60 === 0 ? SS("buildAFactory2Game:durationWholeHours", {
        hours: bS
      }) : SS("buildAFactory2Game:durationHours", {
        hours: bS,
        minutes: String(tS % 60)
      })
    }
    var wX = gS(2598);
    const hX = "(max-height: 420px), (max-width: 650px)";

    function ZX() {
      return (0, wX.e)(hX)
    }
    var JX = gS(1181);

    function OX(SS, HS) {
      return null !== SS && SS > HS + 1
    }

    function dX(SS) {
      const HS = 100 * SS;
      return String(HS <= 0 || HS >= 1 ? Math.round(HS) : Math.max(.1, Math.round(10 * HS) / 10))
    }

    function cX(SS) {
      let {
        item: HS,
        amount: gS
      } = SS;
      return (0, JX.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, JX.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, JX.jsx)(vb.e, {
            itemName: HS,
            amount: 0
          })
        }), gS > 1 && (0, JX.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", gS]
        })]
      })
    }

    function vX(SS) {
      let {
        label: HS,
        names: gS
      } = SS;
      const [bS, XS] = (0, tS.useState)(!1), xS = gS.join(" / ");
      return (0, JX.jsxs)(JX.Fragment, {
        children: [(0, JX.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: xS,
          "aria-expanded": bS,
          onClick: () => {
            XS(!bS)
          },
          children: HS
        }), bS && (0, JX.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: xS
        })]
      })
    }

    function EX(SS) {
      let {
        tier: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)(), {
        key: tS,
        params: bS
      } = aS(HS, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), XS = gS(`buildAFactory2Game:${tS}`, bS);
      return (0, JX.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, JX.jsx)(cb.d, {
          name: "lock"
        }), XS]
      })
    }
    const LX = (0, tS.createContext)(null);

    function YX() {
      const {
        t: SS
      } = (0, db.F)(), HS = (0, tS.useContext)(LX);
      return (0, tS.useEffect)((() => null === HS || void 0 === HS ? void 0 : HS()), [HS]), (0, JX.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: SS("buildAFactory2Game:recipeForQuest"),
        "aria-label": SS("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function AX(SS) {
      let {
        title: HS,
        count: gS,
        children: bS,
        startOpen: XS = !0
      } = SS;
      const {
        t: xS
      } = (0, db.F)(), [NS, qS] = (0, tS.useState)((() => XS && !ZX())), [uS, IS] = (0, tS.useState)(0), fS = (0, tS.useCallback)((() => (IS((SS => SS + 1)), () => {
        IS((SS => SS - 1))
      })), []);
      return (0, JX.jsxs)("div", {
        className: hb()("Baf2Recipes", {
          Open: NS
        }),
        children: [(0, JX.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            qS(!NS)
          },
          "aria-expanded": NS,
          children: [xS("buildAFactory2Game:recipesToggle", {
            title: HS,
            count: String(gS)
          }), (0, JX.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: NS ? "\u25be" : "\u25b8"
          })]
        }), NS && (0, JX.jsxs)(LX.Provider, {
          value: fS,
          children: [(0, JX.jsx)("ul", {
            className: "Baf2RecipeList",
            children: bS
          }), uS > 0 && (0, JX.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, JX.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), xS("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const yX = "buildAFactory2Game:",
      VX = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const iX = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      WX = {
        "Uranium Grit": XS,
        "Raw Uranium": XS
      };

    function zX(SS) {
      var HS;
      return null !== (HS = WX[SS]) && void 0 !== HS ? HS : Math.max(lS(SS), iX[SS] ? lS(iX[SS]) : 1, function(SS) {
        const HS = bS.findIndex((HS => HS.cost.some((HS => HS.item === SS))));
        return HS > XS ? HS : 1
      }(SS))
    }

    function UX(SS, HS) {
      return pX(HS) ? zX(HS) : function(SS) {
        if (VX.has(SS)) return 1;
        const HS = bS.findIndex((HS => HS.newDeposits.some((HS => {
          let {
            block: gS
          } = HS;
          return gS === SS
        }))));
        return HS < 0 ? 1 : HS + 1
      }(SS)
    }

    function pX(SS) {
      return SS in WX || fS(zX(SS)) > 0
    }

    function sX(SS, HS) {
      return mH(SS, {
        coupled: !1,
        taught: null,
        atomic: NS() && HS >= 11
      }).recipes
    }

    function BX(SS, HS) {
      const gS = kS(SS, HS, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fS(SS) > 0);
      return "open" === gS || "locked" === gS
    }

    function MX(SS, HS) {
      return SS.map(((SS, gS) => ({
        value: SS,
        idx: gS,
        tier: HS(SS)
      }))).sort(((SS, HS) => SS.tier - HS.tier || SS.idx - HS.idx)).map((SS => {
        let {
          value: HS
        } = SS;
        return HS
      }))
    }

    function FX(SS, HS, gS) {
      const tS = kS(SS, HS);
      if ("hidden" === tS || "open" === tS) return null;
      if ("teaser" === tS) return {
        tag: {
          translationKey: `${yX}${gS?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${yX}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const bS = aS(SS, {
          tier: gS ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        XS = aS(SS, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${yX}${bS.key}`,
          params: bS.params
        },
        reason: {
          translationKey: `${yX}${XS.key}`,
          params: XS.params
        }
      }
    }

    function RX(SS) {
      return !kX(SS)
    }

    function TX(SS) {
      let {
        seconds: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)();
      return (0, JX.jsx)(AX, {
        title: gS("buildAFactory2Game:recipesCuts", {
          seconds: HS
        }),
        count: 1,
        children: (0, JX.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, JX.jsx)(cX, {
            item: "Maple Sapling",
            amount: 1
          }), (0, JX.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, JX.jsx)(cX, {
            item: "Maple Log",
            amount: 1
          }), (0, JX.jsx)("span", {
            className: "Baf2RecipeName",
            children: gS("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function oX(SS) {
      let {
        fertilised: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)();
      return (0, JX.jsxs)(AX, {
        title: gS("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, JX.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, JX.jsx)(cX, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, JX.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, JX.jsx)(cX, {
            item: "Wheat",
            amount: 1
          }), (0, JX.jsx)(cX, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, JX.jsx)("span", {
            className: "Baf2RecipeName",
            children: gS("buildAFactory2Game:recipeField")
          })]
        }), (0, JX.jsxs)("li", {
          className: hb()("Baf2Recipe", {
            InUse: HS
          }),
          children: [(0, JX.jsx)(cX, {
            item: "Fertiliser",
            amount: 1
          }), (0, JX.jsx)("span", {
            className: "Baf2RecipeName",
            children: gS("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function lX(SS) {
      let {
        tier: HS,
        seconds: gS
      } = SS;
      const {
        t: tS
      } = (0, db.F)(), bS = function(SS) {
        return SS >= 5 ? wH : DH
      }(HS);
      return (0, JX.jsx)(AX, {
        title: tS("buildAFactory2Game:recipesBringsUp", {
          seconds: gS
        }),
        count: bS.length,
        children: bS.map((SS => {
          let {
            item: HS,
            chance: gS
          } = SS;
          return (0, JX.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, JX.jsx)(cX, {
              item: HS,
              amount: 1
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeName",
              children: bX(tS, HS)
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: tS("buildAFactory2Game:recipeChance", {
                percent: dX(gS)
              })
            })]
          }, HS)
        }))
      })
    }

    function mX(SS) {
      let {
        tier: HS,
        seconds: gS,
        noSeeds: tS
      } = SS;
      const {
        t: bS
      } = (0, db.F)(), XS = SX(), xS = jX(HS, tS ? RX : void 0), NS = tS && jX(HS).length > xS.length, qS = fX(HS);
      return (0, JX.jsxs)(AX, {
        title: bS("buildAFactory2Game:recipesRecycles", {
          seconds: gS
        }),
        count: xS.length,
        children: [xS.map((SS => {
          let {
            find: HS,
            chance: gS
          } = SS;
          return (0, JX.jsxs)("li", {
            className: "Baf2Recipe",
            children: [XS.has(HS.item) && (0, JX.jsx)(YX, {}), (0, JX.jsx)(cX, {
              item: HS.item,
              amount: HS.amount
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeName",
              children: bX(bS, HS.item)
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: bS("buildAFactory2Game:recipeChance", {
                percent: dX(gS)
              })
            })]
          }, HS.item)
        })), NS && (0, JX.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, JX.jsx)("span", {
            className: "Baf2RecipeName",
            children: bS("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), qS && (0, JX.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, JX.jsx)("span", {
            className: "Baf2RecipeName",
            children: bS("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function eX(SS) {
      let {
        tier: HS,
        seconds: gS
      } = SS;
      const {
        t: tS
      } = (0, db.F)(), bS = Object.entries(NX).filter((SS => {
        let [, {
          item: gS
        }] = SS;
        return BX(zX(gS), HS, pX(gS))
      }));
      return (0, JX.jsx)(AX, {
        title: tS("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: gS
        }),
        count: bS.length,
        children: bS.map((SS => {
          let [HS, {
            item: gS,
            amount: bS
          }] = SS;
          return (0, JX.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, JX.jsx)(cX, {
              item: HS,
              amount: 1
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, JX.jsx)(cX, {
              item: gS,
              amount: bS
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeName",
              children: bX(tS, gS)
            })]
          }, HS)
        }))
      })
    }

    function rX(SS) {
      let {
        tier: HS,
        seconds: gS
      } = SS;
      const {
        t: tS
      } = (0, db.F)(), bS = SX(), XS = MX(Object.entries(xg).filter((SS => {
        let [gS, tS] = SS;
        return BX(UX(gS, tS), HS, pX(tS))
      })), (SS => {
        let [HS, gS] = SS;
        return UX(HS, gS)
      }));
      return (0, JX.jsx)(AX, {
        title: tS("buildAFactory2Game:recipesDigs", {
          seconds: gS
        }),
        count: XS.length,
        children: XS.map((SS => {
          let [gS, XS] = SS;
          const xS = UX(gS, XS),
            NS = xS > HS ? xS : null,
            qS = Ng[gS],
            uS = null === NS && bS.has(XS);
          return (0, JX.jsxs)("li", {
            className: hb()("Baf2Recipe", {
              Locked: null !== NS,
              Far: OX(NS, HS)
            }),
            children: [uS && (0, JX.jsx)(YX, {}), (0, JX.jsx)(cX, {
              item: gS,
              amount: 1
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, JX.jsx)(cX, {
              item: XS,
              amount: 1
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeName",
              children: bX(tS, XS)
            }), void 0 !== qS && (0, JX.jsx)("span", {
              className: "Baf2RecipeMore",
              children: tS("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / qS)
              })
            }), null !== NS && (0, JX.jsx)(EX, {
              tier: NS
            })]
          }, gS)
        }))
      })
    }

    function Sx(SS) {
      var HS;
      let {
        def: gS,
        seconds: tS
      } = SS;
      const {
        t: bS
      } = (0, db.F)();
      return (0, JX.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, JX.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (HS = gS.fuels) && void 0 !== HS ? HS : []).map((SS => (0, JX.jsx)(cX, {
            item: SS,
            amount: 1
          }, SS))), (0, JX.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, JX.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, JX.jsx)(cb.d, {
              name: "bolt"
            }), bS("buildAFactory2Game:recipePower", {
              power: mS(gS.powerMade),
              seconds: tS
            })]
          })]
        })
      })
    }

    function Hx(SS) {
      let {
        def: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)();
      return (0, JX.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, JX.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, JX.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, JX.jsx)(cb.d, {
              name: "bolt"
            }), gS("buildAFactory2Game:recipeMixer", {
              cryo: nX((0, eS.L)(HS, HS.cryoMade), "")
            })]
          })
        })
      })
    }

    function gx(SS) {
      let {
        def: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)();
      return (0, JX.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, JX.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, JX.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, JX.jsx)(cb.d, {
              name: "bolt"
            }), gS("buildAFactory2Game:recipeCondenser", {
              power: nX((0, eS.L)(HS, HS.powerPerOp), ""),
              water: nX((0, eS.L)(HS, HS.fluidMade), "")
            })]
          })
        })
      })
    }

    function tx(SS) {
      let {
        kind: HS,
        def: gS,
        input: tS,
        tier: bS,
        noSeeds: XS = !1
      } = SS;
      const xS = String(gS.opMs / 1e3);
      return gg(gS) ? (0, JX.jsx)(TX, {
        seconds: xS
      }) : gS.field ? (0, JX.jsx)(oX, {
        fertilised: null !== tS
      }) : gS.table ? (0, JX.jsx)(lX, {
        tier: bS,
        seconds: xS
      }) : gS.recycles ? (0, JX.jsxs)(JX.Fragment, {
        children: [(0, JX.jsx)(mX, {
          tier: bS,
          seconds: xS,
          noSeeds: XS
        }), (0, JX.jsx)(eX, {
          tier: bS,
          seconds: xS
        })]
      }) : Hg(gS) ? (0, JX.jsx)(rX, {
        tier: bS,
        seconds: xS
      }) : void 0 !== gS.fluidMade ? (0, JX.jsx)(gx, {
        def: gS
      }) : void 0 !== gS.cryoMade ? (0, JX.jsx)(Hx, {
        def: gS
      }) : void 0 !== gS.powerMade ? (0, JX.jsx)(Sx, {
        def: gS,
        seconds: xS
      }) : (0, JX.jsx)(bx, {
        kind: HS,
        input: tS,
        tier: bS,
        seconds: xS
      })
    }

    function bx(SS) {
      let {
        kind: HS,
        input: gS,
        tier: tS,
        seconds: bS
      } = SS;
      const {
        t: XS
      } = (0, db.F)(), xS = SX(), NS = MX(function(SS) {
        const HS = new Map;
        for (const bS of SS) {
          var gS, tS;
          const SS = [bS.output, bS.outputAmount, bS.inputAmount, null === (gS = bS.bonus) || void 0 === gS ? void 0 : gS.item, null === (tS = bS.bonus) || void 0 === tS ? void 0 : tS.chance].join("|"),
            XS = HS.get(SS);
          XS ? XS.inputs.push(bS.input) : HS.set(SS, {
            inputs: [bS.input],
            inputAmount: bS.inputAmount,
            output: bS.output,
            outputAmount: bS.outputAmount,
            bonus: bS.bonus
          })
        }
        return [...HS.values()]
      }(sX(HS, tS).filter(Ig)), (SS => zX(SS.output))).filter((SS => BX(zX(SS.output), tS, pX(SS.output))));
      return (0, JX.jsx)(AX, {
        title: XS("buildAFactory2Game:recipesEach", {
          seconds: bS
        }),
        count: NS.length,
        children: NS.map((SS => {
          const HS = null !== gS && SS.inputs.includes(gS),
            bS = SS.inputs.length > 3 ? [HS ? gS : SS.inputs[0]] : SS.inputs,
            NS = zX(SS.output) > tS ? zX(SS.output) : null,
            qS = null === NS && xS.has(SS.output);
          return (0, JX.jsxs)("li", {
            className: hb()("Baf2Recipe", {
              InUse: HS,
              Locked: null !== NS,
              Far: OX(NS, tS)
            }),
            children: [qS && (0, JX.jsx)(YX, {}), bS.map(((HS, gS) => (0, JX.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [gS > 0 && (0, JX.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, JX.jsx)(cX, {
                item: HS,
                amount: SS.inputAmount
              })]
            }, HS))), bS.length < SS.inputs.length && (0, JX.jsx)(vX, {
              label: XS("buildAFactory2Game:recipeMore", {
                count: String(SS.inputs.length - bS.length)
              }),
              names: SS.inputs.filter((SS => !bS.includes(SS))).map((SS => bX(XS, SS)))
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, JX.jsx)(cX, {
              item: SS.output,
              amount: SS.outputAmount
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeName",
              children: bX(XS, SS.output)
            }), SS.bonus && (0, JX.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [XS("buildAFactory2Game:recipeBonus", {
                percent: dX(SS.bonus.chance)
              }), (0, JX.jsx)(cX, {
                item: SS.bonus.item,
                amount: 1
              })]
            }), null !== NS && (0, JX.jsx)(EX, {
              tier: NS
            })]
          }, `${SS.output}|${SS.inputs[0]}`)
        }))
      })
    }

    function Xx(SS) {
      let {
        taught: HS,
        tier: gS
      } = SS;
      const {
        t: tS
      } = (0, db.F)(), bS = SX(), XS = MX(Object.values(oH), (SS => SS.tier)).filter((SS => BX(SS.tier, gS)));
      return (0, JX.jsx)(AX, {
        title: tS("buildAFactory2Game:benchCanMake"),
        count: XS.length,
        startOpen: !1,
        children: XS.map((SS => {
          const XS = SS.tier > gS,
            xS = !XS && bS.has(SS.output);
          return (0, JX.jsxs)("li", {
            className: hb()("Baf2Recipe", {
              InUse: SS.output === HS,
              Locked: XS,
              Far: OX(XS ? SS.tier : null, gS)
            }),
            children: [xS && (0, JX.jsx)(YX, {}), (0, JX.jsx)(cX, {
              item: SS.output,
              amount: SS.outputAmount
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeName",
              children: bX(tS, SS.output)
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), SS.inputs.map((SS => (0, JX.jsx)(cX, {
              item: SS.item,
              amount: SS.amount
            }, SS.item))), XS && (0, JX.jsx)(EX, {
              tier: SS.tier
            })]
          }, SS.output)
        }))
      })
    }
    var xx, Nx, qx, ux, Ix;
    const fx = AH.Generator,
      kx = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      ax = 1e3 * (null !== (xx = fx.powerMade) && void 0 !== xx ? xx : 0) / fx.opMs,
      Kx = Math.min(...(null !== (Nx = fx.fuels) && void 0 !== Nx ? Nx : []).map((SS => Xg[SS]))) / 1e3,
      jx = AH["Volt Engine"],
      Gx = 1e3 * (null !== (qx = jx.powerMade) && void 0 !== qx ? qx : 0) / jx.opMs,
      Cx = Xg[null !== (ux = null === (Ix = jx.fuels) || void 0 === Ix ? void 0 : Ix[0]) && void 0 !== ux ? ux : ""] / 1e3;

    function nx(SS) {
      let {
        item: HS,
        label: gS,
        value: tS,
        note: bS,
        dim: XS
      } = SS;
      return (0, JX.jsxs)("li", {
        className: hb()("Baf2PowerRow", {
          Dim: XS
        }),
        children: [(0, JX.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, JX.jsx)(vb.e, {
            itemName: HS,
            amount: 0
          })
        }), (0, JX.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, JX.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: gS
          }), bS && (0, JX.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: bS
          })]
        }), (0, JX.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: tS
        })]
      })
    }

    function Px(SS, HS, gS, tS) {
      var bS;
      const XS = void 0 === tS ? AH[SS] : function(SS, HS) {
          if (null === HS) return SS;
          let gS = RS.get(HS);
          return gS || (gS = {
            ...SS,
            powerPerOp: FS(SS, HS),
            farmMob: HS
          }, RS.set(HS, gS)), gS
        }(AH[SS], tS),
        xS = HS && XS.couplable ? sH(XS, gS) : XS;
      return 1e3 * (null !== (bS = xS.powerPerOp) && void 0 !== bS ? bS : 0) / xS.opMs
    }

    function Qx(SS) {
      var HS, gS, tS, bS, XS, xS, NS, qS;
      let {
        message: uS
      } = SS;
      const {
        t: IS
      } = (0, db.F)(), fS = (SS, HS) => IS("buildAFactory2Game:powerPerSecond", {
        rate: nX(SS, HS)
      }), [kS, aS] = uS.baf2PowerGenerators, KS = uS.baf2PowerGeneratorFuel, jS = uS.baf2PowerSunPanels, GS = null !== (HS = uS.baf2PowerSunShare) && void 0 !== HS ? HS : 1, CS = uS.baf2PowerVaults, nS = uS.baf2PowerUsers, [PS, QS] = null !== (gS = uS.baf2PowerEngines) && void 0 !== gS ? gS : [0, 0], DS = null !== (tS = uS.baf2PowerEngineCells) && void 0 !== tS ? tS : 0, wS = null !== (bS = uS.baf2PowerPads) && void 0 !== bS ? bS : 0, hS = null !== (XS = uS.baf2PowerCharge) && void 0 !== XS ? XS : 0, [ZS, JS] = null !== (xS = uS.baf2PowerReactors) && void 0 !== xS ? xS : [0, 0], [OS, dS] = null !== (NS = uS.baf2PowerBatteries) && void 0 !== NS ? NS : [0, 0];
      let cS = IS("buildAFactory2Game:powerEngineCells", {
        amount: String(DS)
      });
      DS > 0 && QS > 0 && (cS = IS("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(DS),
        time: DX(IS, DS * Cx / QS)
      }));
      let vS = IS("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(KS)
      });
      KS > 0 && aS > 0 && (vS = IS("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(KS),
        time: DX(IS, KS * Kx / aS)
      }));
      const ES = kS + PS + jS + ZS;
      return (0, JX.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, JX.jsxs)("section", {
          children: [(0, JX.jsxs)("h3", {
            children: [IS("buildAFactory2Game:powerMaking"), (0, JX.jsx)("span", {
              children: fS(uS.baf2PowerMadePerS, "+")
            })]
          }), (0, JX.jsxs)("ul", {
            children: [0 === ES && (0, JX.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: IS("buildAFactory2Game:powerNoMakers")
            }), kS > 0 && (0, JX.jsx)(nx, {
              item: "Generator",
              label: `${bX(IS,"Generator")} \xd7${kS}`,
              note: `${IS("buildAFactory2Game:powerRunning",{amount:String(aS)})} \xb7 ${vS}`,
              value: fS(aS * ax, "+"),
              dim: 0 === aS
            }), PS > 0 && (0, JX.jsx)(nx, {
              item: "Volt Engine",
              label: `${bX(IS,"Volt Engine")} \xd7${PS}`,
              note: `${IS("buildAFactory2Game:powerRunning",{amount:String(QS)})} \xb7 ${cS}`,
              value: fS(QS * Gx, "+"),
              dim: 0 === QS
            }), jS > 0 && (0, JX.jsx)(nx, {
              item: "Solar Panel",
              label: `${bX(IS,"Solar Panel")} \xd7${jS}`,
              note: IS(GS < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: fS(4 * jS * GS, "+")
            }), ZS > 0 && (0, JX.jsx)(nx, {
              item: "Reactor Frame",
              label: `${IS("buildAFactory2Game:powerReactors")} \xd7${ZS}`,
              note: IS("buildAFactory2Game:powerRunning", {
                amount: String(JS)
              }),
              value: fS(null !== (qS = uS.baf2PowerReactorPerS) && void 0 !== qS ? qS : 0, "+"),
              dim: 0 === JS
            })]
          })]
        }), (0, JX.jsxs)("section", {
          children: [(0, JX.jsxs)("h3", {
            children: [IS("buildAFactory2Game:powerStorage"), (0, JX.jsx)("span", {
              children: mS(uS.baf2PowerCap)
            })]
          }), (CS > 0 || OS > 0) && (0, JX.jsxs)("ul", {
            children: [CS > 0 && (0, JX.jsx)(nx, {
              item: "Charge Vault",
              label: `${bX(IS,"Charge Vault")} \xd7${CS}`,
              value: `+${mS(8e3*CS)}`
            }), OS > 0 && (0, JX.jsx)(nx, {
              item: "Battery Cell",
              label: `${IS("buildAFactory2Game:powerBatteries")} \xd7${OS}`,
              value: `+${mS(dS)}`
            })]
          })]
        }), (0, JX.jsxs)("section", {
          children: [(0, JX.jsxs)("h3", {
            children: [IS("buildAFactory2Game:powerUsing"), (0, JX.jsx)("span", {
              children: fS(uS.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, JX.jsxs)("ul", {
            children: [0 === nS.length && 0 === wS && 0 === hS && (0, JX.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: IS("buildAFactory2Game:powerNoUsers")
            }), nS.map((SS => {
              let [HS, gS, tS, bS, XS = 1, xS] = SS, NS = gS ? IS(kx[XS - 1], {
                name: bX(IS, HS)
              }) : bX(IS, HS);
              return void 0 !== xS && (NS = IS("buildAFactory2Game:powerFarmName", {
                name: NS,
                mob: IS(sS(xS))
              })), (0, JX.jsx)(nx, {
                item: HS,
                label: `${NS} \xd7${tS}`,
                note: IS("buildAFactory2Game:powerRunning", {
                  amount: String(bS)
                }),
                value: bS > 0 ? fS(bS * Px(HS, gS, XS, xS), "\u2212") : IS("buildAFactory2Game:powerIdle"),
                dim: 0 === bS
              }, `${HS}|${gS}|${XS}|${xS}`)
            })), wS > 0 && (0, JX.jsx)(nx, {
              item: "Charging Pad",
              label: `${bX(IS,"Charging Pad")} \xd7${wS}`,
              value: IS("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), hS > 0 && (0, JX.jsx)(nx, {
              item: "Homestead Core",
              label: IS("buildAFactory2Game:powerCharge"),
              value: fS(hS, "\u2212")
            }), uS.baf2PowerStarved > 0 && (0, JX.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, JX.jsx)(cb.d, {
                name: "triangle-exclamation"
              }), IS("buildAFactory2Game:powerStarved", {
                amount: String(uS.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Dx = gS(4662),
      wx = gS(1528);
    class hx {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(SS) {
        this.message = SS;
        for (const HS of this.listeners) HS()
      }
      get() {
        return this.message
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
    }
    class Zx extends hx {}

    function Jx(SS, HS) {
      const gS = () => {
          const gS = SS.get();
          if (!gS || !HS) return gS;
          const [tS, bS, XS] = gS.baf2PowerAt;
          return tS === HS[0] && bS === HS[1] && XS === HS[2] ? gS : null
        },
        [bS, XS] = (0, tS.useState)(gS);
      return (0, tS.useEffect)((() => (XS(gS()), SS.subscribe((() => {
        XS(gS())
      })))), [SS, ...null !== HS && void 0 !== HS ? HS : []]), bS
    }

    function Ox(SS) {
      return {
        stored: SS.baf2PowerStored,
        cap: SS.baf2PowerCap,
        madePerS: SS.baf2PowerMadePerS,
        usedPerS: SS.baf2PowerUsedPerS
      }
    }

    function dx(SS) {
      let {
        stored: HS,
        cap: gS
      } = SS;
      return (0, JX.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, JX.jsx)("div", {
          style: {
            width: `${Math.min(100,100*HS/Math.max(1,gS))}%`
          }
        })
      })
    }

    function cx(SS) {
      let {
        figures: HS,
        labelled: gS = !1
      } = SS;
      const {
        t: tS
      } = (0, db.F)(), bS = HS.madePerS - HS.usedPerS, {
        text: XS,
        draining: xS
      } = function(SS, HS) {
        let {
          stored: gS,
          cap: tS,
          madePerS: bS,
          usedPerS: XS
        } = HS;
        const xS = bS - XS;
        return gS >= tS ? {
          text: SS("buildAFactory2Game:powerFull"),
          draining: !1
        } : xS > .05 ? {
          text: SS("buildAFactory2Game:powerFullIn", {
            time: DX(SS, (tS - gS) / xS)
          }),
          draining: !1
        } : xS < -.05 ? {
          text: SS("buildAFactory2Game:powerEmptyIn", {
            time: DX(SS, gS / -xS)
          }),
          draining: !0
        } : {
          text: SS("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(tS, HS);
      return (0, JX.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, JX.jsx)(dx, {
          stored: HS.stored,
          cap: HS.cap
        }), (0, JX.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, JX.jsx)("span", {
            children: tS(gS ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: mS(HS.stored),
              cap: mS(HS.cap)
            })
          }), (0, JX.jsxs)("span", {
            className: hb()("Baf2PowerNet", {
              Draining: xS
            }),
            children: [tS("buildAFactory2Game:powerPerSecond", {
              rate: nX(Math.abs(bS), bS < 0 ? "\u2212" : "+")
            }), " \xb7 ", XS]
          })]
        })]
      })
    }

    function vx(SS) {
      let {
        stored: HS,
        cap: gS,
        rates: tS
      } = SS;
      const {
        t: bS
      } = (0, db.F)();
      return tS ? (0, JX.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, JX.jsx)(cx, {
          figures: {
            stored: HS,
            cap: gS,
            madePerS: tS[0],
            usedPerS: tS[1]
          },
          labelled: !0
        })
      }) : (0, JX.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, JX.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, JX.jsx)(dx, {
            stored: HS,
            cap: gS
          }), (0, JX.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, JX.jsx)("span", {
              children: bS("buildAFactory2Game:powerStoredLabelled", {
                stored: mS(HS),
                cap: mS(gS)
              })
            })
          })]
        })
      })
    }

    function Ex(SS) {
      let {
        store: HS,
        close: gS
      } = SS;
      const {
        t: tS
      } = (0, db.F)(), bS = Jx(HS);
      return (0, JX.jsx)(Dx.c, {
        close: gS,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, JX.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, JX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JX.jsxs)("div", {
              children: [(0, JX.jsx)("h2", {
                id: "baf2PowerTitle",
                children: tS("buildAFactory2Game:powerTitle")
              }), (0, JX.jsx)("p", {
                children: tS("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, JX.jsx)(wx.l, {
              onClick: gS
            })]
          }), bS && (0, JX.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, JX.jsx)(cx, {
              figures: Ox(bS)
            }), (0, JX.jsx)(Qx, {
              message: bS
            })]
          })]
        })
      })
    }

    function Lx(SS) {
      var HS;
      let {
        kind: gS,
        def: bS,
        dt: XS,
        power: xS,
        stored: NS,
        cap: qS
      } = SS;
      const {
        t: uS
      } = (0, db.F)(), IS = Jx(xS, XS), [fS, kS] = (0, tS.useState)(!1);
      return (0, JX.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, JX.jsx)(tx, {
          kind: gS,
          def: bS,
          input: null,
          tier: null !== (HS = null === IS || void 0 === IS ? void 0 : IS.baf2PowerTier) && void 0 !== HS ? HS : 1
        }), (0, JX.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: uS("buildAFactory2Game:powerTitle")
        }), IS && (0, JX.jsx)(cx, {
          figures: Ox(IS)
        }), !IS && (0, JX.jsx)(vx, {
          stored: NS,
          cap: qS,
          rates: null
        }), IS && (0, JX.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            kS(!fS)
          },
          "aria-expanded": fS,
          children: uS(fS ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), IS && fS && (0, JX.jsx)(Qx, {
          message: IS
        })]
      })
    }
    const Yx = 2500,
      Ax = 17500,
      yx = `${DS} `;
    const Vx = ["plan", "throttle"];

    function ix(SS) {
      if (SS.startsWith(`${OH} `)) return SS.slice(0, SS.lastIndexOf(" "));
      const HS = SS.split(" ");
      return HS[0] === IH && Vx.includes(HS[4]) ? HS.slice(0, 5).join(" ") : null
    }
    class Wx {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = SS, this.now = HS, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.kbS = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = HS()
      }
      enqueue(SS) {
        this.queue(SS, this.nextTicket());
        const HS = this.kbS + this.pending.length;
        return this.flush(), HS
      }
      track(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gS = this.nextTicket();
        if (!HS.urgent) return this.queue(SS, gS), this.flush(), gS;
        const {
          supersedes: tS
        } = HS;
        for (let XS = this.pending.length - 1; XS >= this.urgent; XS--) {
          const HS = this.pending[XS];
          (HS.command === SS || null !== tS && void 0 !== tS && tS(HS.command)) && (this.pending.splice(XS, 1), this.markLeft(HS.tickets))
        }
        const bS = this.pending.findIndex((HS => {
          let {
            command: gS
          } = HS;
          return gS === SS
        }));
        return -1 !== bS ? this.pending[bS].tickets.push(gS) : (this.pending.splice(this.urgent, 0, {
          command: SS,
          tickets: [gS]
        }), this.urgent += 1), this.flush(), gS
      }
      leftAt(SS) {
        const HS = this.leftTimes.get(SS);
        return void 0 !== HS ? HS : this.pending.some((HS => {
          let {
            tickets: gS
          } = HS;
          return gS.includes(SS)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let SS = !0;
        return () => {
          SS && (SS = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(SS) {
        var HS;
        return (null === (HS = this.pending.at(-1)) || void 0 === HS ? void 0 : HS.command) === SS
      }
      sent() {
        return this.kbS
      }
      clear() {
        for (const {
            tickets: SS
          }
          of this.pending) this.markLeft(SS);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(SS) {
        const HS = this.now();
        for (const gS of SS) this.leftTimes.set(gS, HS);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(SS, HS) {
        const gS = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === gS || void 0 === gS ? void 0 : gS.command) === SS) return void(! function(SS) {
          return SS === wS || SS.startsWith(`${QS} `) || SS.startsWith(`${zS} `)
        }(SS) ? gS.tickets.push(HS) : (this.pending.pop(), this.markLeft([...gS.tickets, HS])));
        const tS = void 0 === gS ? null : uH(gS.command, SS);
        if (null !== tS && void 0 !== gS) return gS.command = tS, void gS.tickets.push(HS);
        const bS = ix(SS);
        if (null !== bS && void 0 !== gS && ix(gS.command) === bS) return gS.command = SS, void gS.tickets.push(HS);
        if (null !== gS && void 0 !== gS && gS.command.startsWith(yx) && SS.startsWith(yx)) {
          const tS = SS.slice(yx.length);
          if (gS.command.slice(yx.length).split(",").includes(tS)) return void gS.tickets.push(HS);
          const bS = `${gS.command},${tS}`;
          if (bS.length <= 119) return gS.command = bS, void gS.tickets.push(HS)
        }
        this.pending.push({
          command: SS,
          tickets: [HS]
        })
      }
      flush() {
        const SS = this.now();
        for (this.tokens = Math.min(5, this.tokens + (SS - this.refilledAt) / Yx), this.refilledAt = SS; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.kbS += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: SS,
            tickets: HS
          } = this.pending.shift();
          this.markLeft(HS), this.send(SS)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * Yx)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class zx {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new Wx(SS, HS)
      }
      send(SS) {
        return this.queue.enqueue(SS)
      }
      sent() {
        return this.queue.sent()
      }
      track(SS, HS) {
        return this.queue.track(SS, HS)
      }
      leftAt(SS) {
        return this.queue.leftAt(SS)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(SS) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = HS, this.send(SS), this.islandEdits.count
      }
      syncIslandEdits(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: gS
        } = this, tS = HS - gS.lastAtMs < Ax;
        gS.count = tS ? Math.max(gS.count, SS) : SS
      }
      clear() {
        this.queue.clear()
      }
    }
    const Ux = (0, tS.createContext)(null);

    function px() {
      const SS = (0, tS.useContext)(Ux);
      if (!SS) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return SS
    }

    function sx(SS, HS) {
      return null !== HS && void 0 !== HS ? HS : 1 === SS
    }

    function Bx(SS, HS) {
      return SS.every((SS => {
        var gS;
        let [tS, , bS] = SS;
        return !sx(bS, null === (gS = HS.get(tS)) || void 0 === gS ? void 0 : gS.ia)
      }))
    }

    function Mx(SS, HS, gS) {
      if (0 === SS.size) return SS;
      const tS = new Map(SS);
      for (const [bS, XS] of SS) {
        const SS = HS.find((SS => {
          let [HS] = SS;
          return HS === bS
        }));
        (!SS || XS.ia === (1 === SS[2]) || XS.atMs < gS) && tS.delete(bS)
      }
      return tS
    }

    function Fx(SS) {
      var HS;
      let {
        dt: gS,
        input: bS,
        drops: XS,
        seconds: xS
      } = SS;
      const {
        t: NS
      } = (0, db.F)(), qS = px(), [uS, IS] = (0, tS.useState)(new Map);
      (0, tS.useEffect)((() => {
        XS && IS((SS => Mx(SS, XS, Date.now() - Ax)))
      }), [XS]), (0, tS.useEffect)((() => {
        const SS = function(SS, HS) {
          let gS = null;
          for (const {
              atMs: tS
            }
            of SS.values()) gS = null === gS ? tS : Math.min(gS, tS);
          return null === gS ? null : gS + HS
        }(uS, Ax);
        if (null === SS || !XS) return;
        const HS = setTimeout((() => {
          IS((SS => Mx(SS, XS, Date.now() - Ax)))
        }), Math.max(0, SS - Date.now()) + 1);
        return () => {
          clearTimeout(HS)
        }
      }), [uS, XS]);
      const fS = BS(bS),
        kS = null !== fS && null !== XS && Bx(XS, uS),
        aS = function(SS, HS, gS) {
          return null === SS || null === HS || Bx(HS, gS) ? 0 : WS[VS[SS]]
        }(fS, XS, uS);
      return (0, JX.jsxs)(AX, {
        title: NS("buildAFactory2Game:farmDropsTitle", {
          seconds: xS
        }),
        count: null !== (HS = null === XS || void 0 === XS ? void 0 : XS.length) && void 0 !== HS ? HS : 0,
        children: [aS > 0 && (0, JX.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: NS("buildAFactory2Game:farmDropsPower", {
            power: String(aS)
          })
        }), (null === fS || !XS) && (0, JX.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: NS("buildAFactory2Game:farmDropsEmpty")
        }), kS && (0, JX.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: NS("buildAFactory2Game:farmDropsAllVoided")
        }), null !== fS && (null === XS || void 0 === XS ? void 0 : XS.map((SS => {
          var HS;
          let [tS, bS, XS] = SS;
          const xS = bS < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            fS = sx(XS, null === (HS = uS.get(tS)) || void 0 === HS ? void 0 : HS.ia);
          return (0, JX.jsxs)("li", {
            className: hb()("Baf2Recipe Baf2FarmDrop", {
              Voided: !fS
            }),
            children: [(0, JX.jsx)(cX, {
              item: tS,
              amount: 1
            }), (0, JX.jsx)("span", {
              className: "Baf2RecipeName",
              children: bX(NS, tS)
            }), (0, JX.jsx)("span", {
              className: "Baf2FarmRate",
              children: NS(xS, {
                amount: String(bS)
              })
            }), (0, JX.jsx)("button", {
              type: "button",
              className: hb()("Baf2FarmToggle SmallTextBold", {
                Kept: fS
              }),
              "aria-pressed": fS,
              onClick: () => {
                IS(new Map(uS).set(tS, {
                  ia: !fS,
                  atMs: Date.now()
                })), qS.send(function(SS, HS, gS, tS) {
                  return `${zS} ${SS} ${HS} ${gS} ${tS}`
                }(gS[0], gS[1], gS[2], tS))
              },
              children: NS(fS ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, tS)
        })))]
      })
    }
    var Rx;
    const Tx = String(null !== (Rx = AH.Synthesizer.waterPerOp) && void 0 !== Rx ? Rx : 0);

    function ox(SS) {
      let {
        dt: HS,
        taught: gS
      } = SS;
      const {
        t: bS
      } = (0, db.F)(), XS = px(), [xS, NS] = (0, tS.useState)(null);
      (0, tS.useEffect)((() => {
        null !== xS && gS === xS && NS(null)
      }), [xS, gS]);
      const qS = null !== xS && void 0 !== xS ? xS : gS;
      let uS = bS("buildAFactory2Game:synthPick");
      return null !== qS && (uS = bS("buildAFactory2Game:synthGrows", {
        name: bX(bS, qS),
        input: bX(bS, hH),
        water: Tx
      })), (0, JX.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, JX.jsx)("div", {
          className: hb()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === qS
          }),
          children: uS
        }), (0, JX.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: ZH.map(((SS, gS) => {
            const tS = bX(bS, SS),
              xS = SS === qS;
            return (0, JX.jsx)("li", {
              children: (0, JX.jsx)("button", {
                type: "button",
                className: hb()("Baf2SynthTile", {
                  Selected: xS
                }),
                title: tS,
                "aria-label": tS,
                "aria-pressed": xS,
                onClick: () => {
                  xS || (NS(SS), XS.send(`${OH} ${HS[0]} ${HS[1]} ${HS[2]} ${gS}`))
                },
                children: (0, JX.jsx)(vb.e, {
                  itemName: SS,
                  amount: 0
                })
              })
            }, SS)
          }))
        })]
      })
    }
    const lx = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function mx(SS) {
      let {
        kind: HS,
        tier: gS,
        coupled: tS,
        level: bS,
        slot: XS
      } = SS;
      const {
        t: xS
      } = (0, db.F)(), qS = lS(VH);
      if (!tS && null !== gS && gS < qS) return (0, JX.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, JX.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, JX.jsx)(cb.d, {
            name: "lock"
          })
        }), (0, JX.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: xS("buildAFactory2Game:upgradeLocked")
        }), (0, JX.jsx)("span", {
          className: "Baf2TierTag",
          children: xS("buildAFactory2Game:tierTag", {
            tier: String(qS)
          })
        })]
      });
      const uS = function(SS, HS) {
          if (NS() && "Crusher" !== SS && null !== HS) {
            if (ex(WH, HS)) return {
              item: WH,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (ex(iH, HS)) return {
              item: iH,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: VH,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(HS, gS),
        IS = xS(tS ? lx[bS - 1] : uS.emptyKey),
        fS = null !== gS ? function(SS, HS, gS, tS) {
          if (!NS() || !gS || "Crusher" === SS || HS < 10) return null;
          const bS = lS(WH);
          if (tS < 3 && bS > 1 && (2 === tS || HS >= bS)) return {
            tier: bS,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const XS = lS(iH);
          if (1 === tS && XS > 1) return {
            tier: XS,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(HS, gS, tS, bS) : null;
      return (0, JX.jsxs)("div", {
        className: hb()("Baf2UpgradeSocket", {
          Fitted: tS
        }),
        children: [(0, JX.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [tS && XS, !tS && (0, JX.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, JX.jsx)(vb.e, {
              itemName: uS.item,
              amount: 0
            })
          })]
        }), (0, JX.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, JX.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: xS("buildAFactory2Game:upgradeTitle")
          }), (0, JX.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: IS
          }), tS && bS >= 2 && "Crusher" === HS && (0, JX.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: xS("buildAFactory2Game:couplerCrusherHint")
          }), fS && null !== gS && gS < fS.tier && (0, JX.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, JX.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, JX.jsx)(cb.d, {
                name: "lock"
              })
            }), xS(fS.lockedKey), (0, JX.jsx)("span", {
              className: "Baf2TierTag",
              children: xS("buildAFactory2Game:tierTag", {
                tier: String(fS.tier)
              })
            })]
          }), fS && null !== gS && gS >= fS.tier && (0, JX.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: xS(fS.nextKey)
          })]
        })]
      })
    }

    function ex(SS, HS) {
      const gS = lS(SS);
      return gS > 1 && HS >= gS
    }
    var rx = gS(37063);
    const SN = (0, eS.L)(AH.Condenser, AH.Condenser.fluidMade),
      HN = .05;
    class gN extends hx {}

    function tN(SS) {
      return nX(SS, "")
    }

    function bN(SS, HS, gS) {
      return SS(HS ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: gS
      })
    }

    function XN(SS, HS, gS, tS) {
      return gS <= HN && tS <= HN ? null : tS <= HN || gS <= HN ? bN(SS, HS, tS <= HN ? nX(gS, "+") : nX(tS, "\u2212")) : SS(HS ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: tN(gS),
        used: tN(tS)
      })
    }

    function xN(SS, HS) {
      return Math.min(100, 100 * SS / Math.max(1, HS))
    }

    function NN(SS) {
      let {
        stored: HS,
        cap: gS,
        netPerS: tS,
        rates: bS,
        cryo: XS
      } = SS;
      const {
        t: xS
      } = (0, db.F)(), NS = function(SS, HS, gS, tS) {
        return gS <= 0 ? SS("buildAFactory2Game:waterNoStorage") : HS >= gS ? SS("buildAFactory2Game:powerFull") : tS > HN ? SS("buildAFactory2Game:powerFullIn", {
          time: DX(SS, (gS - HS) / tS)
        }) : tS < -.05 ? HS <= 0 ? SS("buildAFactory2Game:waterEmpty") : SS("buildAFactory2Game:powerEmptyIn", {
          time: DX(SS, HS / -tS)
        }) : SS("buildAFactory2Game:powerSteady")
      }(xS, HS, gS, tS), qS = gS > 0 && HS < gS && Math.abs(tS) <= HN, uS = xS(XS ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), IS = null !== bS ? `${bS} \xb7 ${NS}` : qS ? uS : `${uS} \xb7 ${NS}`;
      return (0, JX.jsxs)(JX.Fragment, {
        children: [(0, JX.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, JX.jsx)("div", {
            style: {
              width: `${xN(HS,gS)}%`
            }
          })
        }), (0, JX.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, JX.jsx)("span", {
            children: gS > 0 && xS("buildAFactory2Game:powerStored", {
              stored: (0, eS.U)(HS),
              cap: (0, eS.U)(gS)
            })
          }), (0, JX.jsx)("span", {
            className: hb()("Baf2WaterNet", {
              Draining: tS < -.05
            }),
            children: IS
          })]
        })]
      })
    }

    function qN(SS) {
      let {
        water: HS,
        at: gS,
        side: tS = null
      } = SS;
      const {
        t: bS
      } = (0, db.F)(), XS = px(), [xS, NS, qS] = HS;
      return (0, JX.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, JX.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, JX.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: bS(null === tS ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${tS}`)
          }), (0, JX.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              XS.send(`${eS.D} ${gS[0]} ${gS[1]} ${gS[2]}${"cryoOut"===tS?" cryo":""}`)
            },
            children: bS("buildAFactory2Game:waterDetails")
          })]
        }), (0, JX.jsx)(NN, {
          stored: xS,
          cap: NS,
          netPerS: qS,
          rates: bN(bS, "cryoOut" === tS, nX(Math.abs(qS), qS < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === tS
        })]
      })
    }

    function uN(SS, HS) {
      var gS, tS, bS;
      const XS = !0 === HS.baf2WaterCryo,
        xS = null !== (gS = null === (tS = HS.baf2WaterMakers.find((SS => SS[0] === (XS ? eS.e : "Condenser")))) || void 0 === tS ? void 0 : tS[1]) && void 0 !== gS ? gS : 0,
        NS = [],
        qS = (HS, gS, tS) => {
          HS > 0 && NS.push(SS(1 === HS ? gS : tS, {
            count: String(HS)
          }))
        };
      return XS ? qS(xS, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : qS(xS, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), qS(null !== (bS = HS.baf2WaterPipes) && void 0 !== bS ? bS : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), qS(HS.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), NS.join(" \xb7 ")
    }

    function IN(SS, HS) {
      if (!0 === HS.baf2WaterCryo) return function(SS, HS) {
        const gS = AH[eS.e];
        switch (HS.baf2WaterThis) {
          case "pipe":
            return {
              text: SS("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: SS("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: SS("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: SS("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: SS("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: SS("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: SS("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var tS;
            const [bS, XS] = null !== (tS = HS.baf2WaterThisRates) && void 0 !== tS ? tS : [(0, eS.L)(gS, gS.cryoMade), (0, eS.L)(gS, gS.powerPerOp)];
            return !0 === HS.baf2WaterDriven ? {
              text: SS("buildAFactory2Game:cryoThisMixerDriven", {
                rate: tN(bS)
              }),
              bad: !1
            } : {
              text: SS("buildAFactory2Game:cryoThisMixer", {
                rate: tN(bS),
                power: tN(XS)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: SS("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(SS, HS);
      const gS = !0 === HS.baf2WaterDriven,
        tS = AH.Condenser;
      switch (HS.baf2WaterThis) {
        case "pipe":
          return {
            text: SS("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: SS("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: SS("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: SS("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: SS("buildAFactory2Game:waterThisTank", {
              tank: (0, eS.U)(eS.u),
              cap: (0, eS.U)(HS.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var bS;
          const [XS, xS] = null !== (bS = HS.baf2WaterThisRates) && void 0 !== bS ? bS : [SN, (0, eS.L)(tS, tS.powerPerOp)];
          return gS ? {
            text: SS("buildAFactory2Game:waterThisCondenserDriven", {
              rate: tN(XS)
            }),
            bad: !1
          } : {
            text: SS("buildAFactory2Game:waterThisCondenser", {
              rate: tN(XS),
              power: tN(xS)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: SS("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function fN(SS, HS) {
      const gS = HS.baf2WaterMakers.some((SS => !0 === SS[5]));
      if (!0 === HS.baf2WaterCryo) {
        const tS = HS.baf2WaterUsedPerS - HS.baf2WaterMadePerS,
          bS = gS || tS <= HN ? 0 : (0, eS.H)(tS);
        return 0 === bS ? null : bS > 1 ? SS("buildAFactory2Game:cryoNextMixers", {
          mixers: String(bS)
        }) : SS("buildAFactory2Game:cryoNextOne")
      }
      const tS = gS ? null : function(SS, HS) {
        const gS = HS - SS;
        return gS <= HN ? null : Math.ceil(gS / SN)
      }(HS.baf2WaterMadePerS, HS.baf2WaterUsedPerS);
      return null === tS ? null : tS > 1 ? SS("buildAFactory2Game:waterNextCondensers", {
        condensers: String(tS)
      }) : SS("buildAFactory2Game:waterNextOne")
    }

    function kN(SS) {
      let {
        item: HS,
        label: gS,
        note: tS,
        value: bS,
        dim: XS,
        bad: xS
      } = SS;
      return (0, JX.jsxs)("li", {
        className: hb()("Baf2WaterRow", {
          Dim: XS,
          Bad: xS
        }),
        children: [(0, JX.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, JX.jsx)(vb.e, {
            itemName: HS,
            amount: 0
          })
        }), (0, JX.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, JX.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: gS
          }), tS && (0, JX.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: tS
          })]
        }), (0, JX.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: bS
        })]
      })
    }

    function aN(SS) {
      return rx.m[SS] ? SS : "Reactor Port"
    }

    function KN(SS) {
      let {
        message: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)(), tS = !0 === HS.baf2WaterCryo, bS = (SS, HS) => bN(gS, tS, nX(SS, HS));
      return (0, JX.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, JX.jsxs)("section", {
          children: [(0, JX.jsxs)("h3", {
            children: [gS("buildAFactory2Game:waterMakes"), (0, JX.jsx)("span", {
              children: bS(HS.baf2WaterMadePerS, "+")
            })]
          }), (0, JX.jsxs)("ul", {
            children: [0 === HS.baf2WaterMakers.length && (0, JX.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: gS(tS ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), HS.baf2WaterMakers.map((SS => {
              let [HS, tS, XS, xS, NS, qS] = SS;
              const uS = gS("buildAFactory2Game:powerRunning", {
                amount: String(XS)
              });
              let IS = NS > 0 ? gS("buildAFactory2Game:waterMakerPower", {
                running: uS,
                power: tN(NS)
              }) : uS;
              return qS && (IS = gS(0 === XS && xS <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, JX.jsx)(kN, {
                item: HS,
                label: `${bX(gS,HS)} \xd7${tS}`,
                note: IS,
                value: XS > 0 || qS && xS > 0 ? bS(xS, "+") : gS("buildAFactory2Game:powerIdle"),
                dim: 0 === XS && !qS,
                bad: qS
              }, HS)
            }))]
          })]
        }), (0, JX.jsxs)("section", {
          children: [(0, JX.jsxs)("h3", {
            children: [gS("buildAFactory2Game:waterUses"), (0, JX.jsx)("span", {
              children: bS(HS.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, JX.jsxs)("ul", {
            children: [0 === HS.baf2WaterUsers.length && (0, JX.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: gS(tS ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), HS.baf2WaterUsers.map((SS => {
              let [HS, tS, XS, xS] = SS;
              const NS = rx.m[HS] ? bX(gS, HS) : HS;
              return (0, JX.jsx)(kN, {
                item: aN(HS),
                label: tS > 1 ? `${NS} \xd7${tS}` : NS,
                note: xS ? gS("buildAFactory2Game:waterPortFirst") : void 0,
                value: XS > 0 ? bS(XS, "\u2212") : gS("buildAFactory2Game:powerIdle"),
                dim: 0 === XS
              }, HS)
            }))]
          })]
        })]
      })
    }

    function jN(SS) {
      var HS, gS, bS, XS, xS;
      let {
        store: NS,
        close: qS
      } = SS;
      const {
        t: uS
      } = (0, db.F)(), IS = function(SS) {
        const [HS, gS] = (0, tS.useState)((() => SS.get()));
        return (0, tS.useEffect)((() => (gS(SS.get()), SS.subscribe((() => {
          gS(SS.get())
        })))), [SS]), HS
      }(NS), fS = null !== (HS = null === IS || void 0 === IS ? void 0 : IS.baf2WaterStored) && void 0 !== HS ? HS : 0, kS = null !== (gS = null === IS || void 0 === IS ? void 0 : IS.baf2WaterCap) && void 0 !== gS ? gS : 0, aS = null !== (bS = null === IS || void 0 === IS ? void 0 : IS.baf2WaterMadePerS) && void 0 !== bS ? bS : 0, KS = null !== (XS = null === IS || void 0 === IS ? void 0 : IS.baf2WaterUsedPerS) && void 0 !== XS ? XS : 0, jS = null !== (xS = null === IS || void 0 === IS ? void 0 : IS.baf2WaterNetPerS) && void 0 !== xS ? xS : aS - KS, GS = IS && IN(uS, IS), CS = IS && fN(uS, IS), nS = !0 === (null === IS || void 0 === IS ? void 0 : IS.baf2WaterCryo);
      return (0, JX.jsx)(Dx.c, {
        close: qS,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, JX.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, JX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JX.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== IS && kS <= 0 ? (0, JX.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, JX.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, JX.jsx)(vb.e, {
                  itemName: nS ? Kg.f : eS.m,
                  amount: 0
                })
              }), (0, JX.jsxs)("div", {
                children: [(0, JX.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: uS(nS ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), IS && (0, JX.jsx)("p", {
                  children: uN(uS, IS)
                })]
              })]
            }), (0, JX.jsx)(wx.l, {
              onClick: qS
            })]
          }), IS && GS && (0, JX.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, JX.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, JX.jsx)(NN, {
                stored: fS,
                cap: kS,
                netPerS: jS,
                cryo: nS,
                rates: XN(uS, nS, aS, KS)
              })
            }), (0, JX.jsx)("div", {
              className: hb()("Baf2WaterThis", {
                Bad: GS.bad
              }),
              children: GS.text
            }), IS.baf2WaterDriven && (0, JX.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, JX.jsx)(cb.d, {
                name: "bolt"
              }), uS(nS ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), CS && (0, JX.jsx)("p", {
              className: "Baf2WaterNext",
              children: CS
            }), (0, JX.jsx)(KN, {
              message: IS
            })]
          })]
        })
      })
    }
    class GN {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(SS, HS) {
        const gS = this.get(SS);
        gS && null === HS.opLeftMs && null === HS.fuelLeftMs && HS.status === gS.status ? HS = {
          ...HS,
          opLeftMs: gS.opLeftMs,
          fuelLeftMs: gS.fuelLeftMs,
          burning: gS.burning
        } : this.updates++, this.pos = SS, this.view = HS;
        for (const tS of this.listeners) tS()
      }
      get(SS) {
        return null !== this.pos && this.pos[0] === SS[0] && this.pos[1] === SS[1] && this.pos[2] === SS[2] ? this.view : null
      }
      forget(SS) {
        null !== this.get(SS) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
    }

    function CN(SS, HS, gS, tS) {
      return "noFuel" === HS && tS && !bg(AH[SS]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === HS && !0 === (null === gS || void 0 === gS ? void 0 : gS.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === HS && !0 === (null === gS || void 0 === gS ? void 0 : gS.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === HS && !0 === (null === gS || void 0 === gS ? void 0 : gS.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === HS && !0 === (null === gS || void 0 === gS ? void 0 : gS.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : nN(HS, gS) ? "buildAFactory2Game:machineStatus_noInputShort" : function(SS, HS) {
        const gS = AH[SS];
        if ("noFuel" === HS && void 0 !== gS.fuels) return bg(gS) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (gS.mobFarm && ("noInput" === HS || "badInput" === HS)) return `buildAFactory2Game:machineStatus_${HS}MobFarm`;
        if ("outputFull" === HS && (void 0 !== gS.table || gS.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === HS && RH(gS)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== gS.cryoMade && ("noInput" === HS || "noOutlet" === HS || "fluidFull" === HS)) return `buildAFactory2Game:machineStatus_${HS}Mixer`;
        return `buildAFactory2Game:machineStatus_${HS}`
      }(SS, HS)
    }

    function nN(SS, HS) {
      return "noInput" === SS && null !== HS && void 0 !== HS && HS.input && HS.inputShort ? {
        input: HS.input,
        short: HS.inputShort
      } : null
    }

    function PN(SS) {
      return Zb(SS) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== SS.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function QN(SS) {
      const HS = (0, AS.ue)(SS);
      return `Baf2Pane Baf2Pane${HS.charAt(0).toUpperCase()}${HS.slice(1)}`
    }

    function DN(SS, HS) {
      const [gS, bS] = (0, tS.useState)((() => SS.get(HS)));
      return (0, tS.useEffect)((() => {
        bS(SS.get(HS));
        const gS = SS.subscribe((() => {
          bS(SS.get(HS))
        }));
        return () => {
          gS(), SS.forget(HS)
        }
      }), [SS, ...HS]), gS
    }

    function wN(SS, HS, gS, tS) {
      const bS = AH[SS],
        XS = HS && bS.couplable ? sH(bS, gS) : bS,
        xS = null !== tS && Hg(XS) ? function(SS, HS) {
          var gS;
          return null !== (gS = null !== HS && Hg(SS) ? Ng[HS] : void 0) && void 0 !== gS ? gS : SS.opMs
        }(XS, qg(tS)) : XS.opMs;
      return xS === XS.opMs ? XS : {
        ...XS,
        opMs: xS
      }
    }

    function hN(SS) {
      let {
        running: HS,
        opMs: gS,
        opLeftMs: tS,
        updateCount: bS
      } = SS;
      return (0, JX.jsx)("div", {
        className: hb()("Baf2MachineProgress", {
          Running: HS
        }),
        children: (0, JX.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: gS / 1e3 + "s",
            animationDelay: null === tS ? void 0 : (tS - gS) / 1e3 + "s"
          }
        }, bS)
      })
    }

    function ZN(SS) {
      let {
        running: HS,
        leftMs: gS,
        periodMs: tS,
        updateCount: bS
      } = SS;
      const {
        t: XS
      } = (0, db.F)(), xS = Math.min(Math.max(null !== gS && void 0 !== gS ? gS : 0, 0), tS), NS = HS && xS > 0, qS = XS("buildAFactory2Game:machineBarFuel");
      return (0, JX.jsx)("div", {
        className: hb()("Baf2FuelBurn", {
          Draining: NS
        }),
        role: "img",
        title: qS,
        "aria-label": qS,
        children: (0, JX.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: NS ? {
            animationDuration: tS / 1e3 + "s",
            animationDelay: (xS - tS) / 1e3 + "s"
          } : {
            transform: `scaleY(${xS/tS})`
          }
        }, bS)
      })
    }

    function JN(SS, HS, gS) {
      let [tS, bS] = gS;
      const XS = 1 !== tS ? Ob(HS) : null;
      return {
        amount: tS,
        have: bS,
        item: SS(XS || tX(HS))
      }
    }

    function ON(SS) {
      return Hg(SS) ? "buildAFactory2Game:machineBarMining" : gg(SS) ? "buildAFactory2Game:machineBarCutting" : void 0 !== SS.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function dN(SS) {
      var HS, gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS, CS, nS, PS;
      let {
        kind: QS,
        dt: DS,
        store: wS,
        power: hS,
        renderSlot: ZS
      } = SS;
      const {
        t: JS
      } = (0, db.F)(), OS = DN(wS, DS), dS = AH[QS], cS = null !== (HS = null === OS || void 0 === OS ? void 0 : OS.coupled) && void 0 !== HS && HS, vS = null !== (gS = null === OS || void 0 === OS ? void 0 : OS.couplerLevel) && void 0 !== gS ? gS : 1, ES = wN(QS, cS, vS, null !== (tS = null === OS || void 0 === OS || null === (bS = OS.dug) || void 0 === bS ? void 0 : bS.item) && void 0 !== tS ? tS : null), LS = null !== (XS = null === OS || void 0 === OS ? void 0 : OS.status) && void 0 !== XS ? XS : null, YS = null !== (xS = null === OS || void 0 === OS ? void 0 : OS.power) && void 0 !== xS ? xS : null, AS = null !== (NS = null === OS || void 0 === OS ? void 0 : OS.opLeftMs) && void 0 !== NS ? NS : null, yS = null !== (qS = null === OS || void 0 === OS ? void 0 : OS.dug) && void 0 !== qS ? qS : null, VS = null !== yS && Hg(dS) ? Ng[null !== (uS = qg(yS.item)) && void 0 !== uS ? uS : ""] : void 0, iS = void 0 === VS ? null : 6e4 / VS, WS = null !== (IS = null === OS || void 0 === OS ? void 0 : OS.powerCap) && void 0 !== IS ? IS : 4e3, zS = null !== (fS = null === OS || void 0 === OS ? void 0 : OS.tier) && void 0 !== fS ? fS : null, US = void 0 !== ES.powerMade, pS = null !== dS.fuelSlot ? ZS(dS.fuelSlot) : null, sS = pH(dS), BS = !cS && !0 === (null === OS || void 0 === OS ? void 0 : OS.fuelFed), FS = !cS && !0 === (null === OS || void 0 === OS ? void 0 : OS.fuelFeeds), RS = null !== dS.fuelSlot && !cS, TS = null !== (kS = null === OS || void 0 === OS ? void 0 : OS.fuelLeftMs) && void 0 !== kS ? kS : null, oS = function(SS, HS, gS) {
        var tS;
        const bS = null === HS ? void 0 : Xg[HS];
        return Math.max(null !== (tS = null !== bS && void 0 !== bS ? bS : gS) && void 0 !== tS ? tS : 0, SS.opMs)
      }(ES, null !== (aS = null === OS || void 0 === OS ? void 0 : OS.burning) && void 0 !== aS ? aS : null, TS), lS = null !== (KS = null === OS || void 0 === OS ? void 0 : OS.fuelKeep) && void 0 !== KS ? KS : null, mS = null === LS ? null : CN(QS, LS, OS, BS), eS = null === LS ? null : nN(LS, OS);
      return (0, JX.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, JX.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, JX.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: JS(tX(QS))
          }), yS && (0, JX.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [JS("Tree Cutter" === QS ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, JX.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, JX.jsx)(vb.e, {
                itemName: yS.item,
                amount: 0
              })
            }), (0, JX.jsx)(Eb.c, {
              text: yS.name
            })]
          }), null !== iS && (0, JX.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: JS("buildAFactory2Game:machineDigsFixed", {
              perMin: String(iS)
            })
          }), (null === OS || void 0 === OS ? void 0 : OS.field) && (0, JX.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, JX.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, JX.jsx)(vb.e, {
                itemName: "Wheat",
                amount: 0
              })
            }), JS("buildAFactory2Game:machineField", {
              planted: String(OS.field[0]),
              ripe: String(OS.field[1])
            })]
          }), (0, JX.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, JX.jsxs)("div", {
              className: hb()("Baf2MachineColumn", {
                Baf2Burns: RS
              }),
              children: [null !== ES.inputSlot && (0, JX.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, JX.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: JS(PN(ES))
                }), ZS(ES.inputSlot)]
              }), null !== dS.fuelSlot && !cS && (0, JX.jsxs)("div", {
                className: hb()("Baf2MachineSlot", {
                  Baf2FuelFed: BS
                }),
                children: [(0, JX.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [BS && (0, JX.jsx)(cb.d, {
                    name: "fire"
                  }), JS("buildAFactory2Game:machineFuel")]
                }), (0, JX.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, JX.jsx)(ZN, {
                    running: "running" === LS,
                    leftMs: TS,
                    periodMs: oS,
                    updateCount: wS.updateCount
                  }), pS]
                })]
              }), null !== dS.fuelSlot && cS && (0, JX.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, JX.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: JS("buildAFactory2Game:machineFuel")
                }), (0, JX.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: JS("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": JS("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, JX.jsx)(cb.d, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, JX.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, JX.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: JS(ON(ES))
              }), (0, JX.jsx)(hN, {
                running: "running" === LS,
                opMs: ES.opMs,
                opLeftMs: AS,
                updateCount: wS.updateCount
              })]
            }), ES.outputSlots.length > 0 && (0, JX.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, JX.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: JS("buildAFactory2Game:machineOutput")
              }), (0, JX.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: ES.outputSlots.map((SS => (0, JX.jsx)("div", {
                  children: ZS(SS)
                }, SS)))
              })]
            }), null !== YS && US && (0, JX.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, JX.jsx)("div", {
                style: {
                  height: 100 * YS / WS + "%"
                }
              })
            })]
          }), RS && null !== lS && (0, JX.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, JX.jsx)(cb.d, {
              name: "arrows-rotate"
            }), JS(gg(ES) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(lS)
            })]
          }), (BS || FS) && (0, JX.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, JX.jsx)(cb.d, {
              name: "fire"
            }), JS(BS ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), dS.couplable && (0, JX.jsx)(mx, {
            kind: QS,
            tier: zS,
            coupled: cS,
            level: vS,
            slot: sS === dS.fuelSlot ? pS : null !== sS ? ZS(sS) : null
          }), null !== YS && !US && !0 === (null === OS || void 0 === OS ? void 0 : OS.reactorPowered) && (0, JX.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: JS("buildAFactory2Game:machineReactorPowered")
          }), null !== YS && !US && !0 !== (null === OS || void 0 === OS ? void 0 : OS.reactorPowered) && (0, JX.jsx)(vx, {
            stored: YS,
            cap: WS,
            rates: null !== (jS = null === OS || void 0 === OS ? void 0 : OS.powerRates) && void 0 !== jS ? jS : null
          }), (null === OS || void 0 === OS ? void 0 : OS.water) && (0, JX.jsx)(qN, {
            water: OS.water,
            at: DS,
            side: OS.cryo ? "waterIn" : null
          }), (null === OS || void 0 === OS ? void 0 : OS.cryo) && (0, JX.jsx)(qN, {
            water: OS.cryo,
            at: DS,
            side: "cryoOut"
          }), null !== OS && void 0 !== OS && OS.inertCoupler ? (0, JX.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: JS("buildAFactory2Game:machineStatus_couplerOff", {
              item: bX(JS, OS.inertCoupler)
            })
          }) : null !== mS && (0, JX.jsx)("div", {
            className: hb()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== LS
            }),
            children: JS(mS, eS ? JN(JS, eS.input, eS.short) : void 0)
          })]
        }), (0, JX.jsxs)("div", {
          className: hb()("Baf2MachineSide", {
            Baf2SynthSide: RH(dS)
          }),
          children: [RH(dS) && (0, JX.jsx)(ox, {
            dt: DS,
            taught: null !== (GS = null === OS || void 0 === OS ? void 0 : OS.taught) && void 0 !== GS ? GS : null
          }, DS.join(",")), US && (0, JX.jsx)(Lx, {
            kind: QS,
            def: ES,
            dt: DS,
            power: hS,
            stored: null !== YS && void 0 !== YS ? YS : 0,
            cap: WS
          }), MS(dS) && (0, JX.jsx)(Fx, {
            dt: DS,
            input: null !== (CS = null === OS || void 0 === OS ? void 0 : OS.input) && void 0 !== CS ? CS : null,
            drops: null !== (nS = null === OS || void 0 === OS ? void 0 : OS.farm) && void 0 !== nS ? nS : null,
            seconds: String(ES.opMs / 1e3)
          }), !US && !MS(dS) && !RH(dS) && (0, JX.jsx)(tx, {
            kind: QS,
            def: ES,
            input: null !== (PS = null === OS || void 0 === OS ? void 0 : OS.input) && void 0 !== PS ? PS : null,
            tier: null !== zS && void 0 !== zS ? zS : 1,
            noSeeds: !0 === (null === OS || void 0 === OS ? void 0 : OS.noSeeds)
          })]
        })]
      })
    }

    function cN(SS, HS, gS, tS) {
      var bS;
      const XS = AH[SS],
        xS = [XS.inputSlot, XS.fuelSlot, ...null !== (bS = XS.inputSlots) && void 0 !== bS ? bS : []].filter((SS => null !== SS));
      return {
        render: bS => {
          let {
            dt: XS,
            renderSlot: xS
          } = bS;
          return (0, JX.jsx)(Ux.Provider, {
            value: tS,
            children: (0, JX.jsx)(dN, {
              kind: SS,
              dt: XS,
              store: HS,
              power: gS,
              renderSlot: xS
            })
          })
        },
        quickMoveRange: xS.length > 0 ? [Math.min(...xS), Math.max(...xS) + 1] : [0, 0],
        className: QN(SS)
      }
    }
    const vN = "Assembler";

    function EN(SS) {
      var HS, gS, tS, bS, XS, xS, NS, qS, uS;
      let {
        dt: IS,
        store: fS,
        renderSlot: kS
      } = SS;
      const {
        t: aS
      } = (0, db.F)(), KS = DN(fS, IS), jS = null !== (HS = null === KS || void 0 === KS ? void 0 : KS.tier) && void 0 !== HS ? HS : 1, GS = null !== (gS = null === KS || void 0 === KS ? void 0 : KS.taught) && void 0 !== gS ? gS : null, CS = mH(vN, {
        coupled: !1,
        taught: GS
      }), nS = null !== (tS = CS.bench) && void 0 !== tS ? tS : null, PS = null !== (bS = null === KS || void 0 === KS ? void 0 : KS.status) && void 0 !== bS ? bS : null, QS = null !== (XS = null === KS || void 0 === KS ? void 0 : KS.power) && void 0 !== XS ? XS : null, DS = null !== (xS = null === KS || void 0 === KS ? void 0 : KS.powerCap) && void 0 !== xS ? xS : 4e3;
      return (0, JX.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, JX.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, JX.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: aS(tX(vN))
          }), nS && (0, JX.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [aS("buildAFactory2Game:benchMakes"), (0, JX.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, JX.jsx)(vb.e, {
                itemName: nS.output,
                amount: 0
              })
            }), (null === KS || void 0 === KS ? void 0 : KS.taughtName) && (0, JX.jsx)(Eb.c, {
              text: KS.taughtName
            }), nS.outputAmount > 1 && (0, JX.jsxs)("span", {
              children: ["\xd7", nS.outputAmount]
            })]
          }), !nS && (0, JX.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: aS("buildAFactory2Game:benchTeachHint")
          }), (0, JX.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, JX.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (NS = CS.inputSlots) && void 0 !== NS ? NS : []).map(((SS, HS) => {
                const gS = null === nS || void 0 === nS ? void 0 : nS.inputs[HS];
                return (0, JX.jsxs)("div", {
                  className: hb()("Baf2BenchInput", {
                    Spare: !gS
                  }),
                  children: [(0, JX.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [kS(SS), gS && (0, JX.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, JX.jsx)(vb.e, {
                        itemName: gS.item,
                        amount: 0
                      })
                    })]
                  }), (0, JX.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: gS ? `\xd7${gS.amount}` : "\xa0"
                  })]
                }, SS)
              }))
            }), (0, JX.jsx)(hN, {
              running: "running" === PS,
              opMs: CS.opMs,
              opLeftMs: null !== (qS = null === KS || void 0 === KS ? void 0 : KS.opLeftMs) && void 0 !== qS ? qS : null,
              updateCount: fS.updateCount
            }), (0, JX.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, JX.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: aS("buildAFactory2Game:machineOutput")
              }), (0, JX.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: CS.outputSlots.map((SS => (0, JX.jsx)("div", {
                  children: kS(SS)
                }, SS)))
              })]
            })]
          }), null !== QS && (0, JX.jsx)(vx, {
            stored: QS,
            cap: DS,
            rates: null !== (uS = null === KS || void 0 === KS ? void 0 : KS.powerRates) && void 0 !== uS ? uS : null
          }), null !== PS && (0, JX.jsx)("div", {
            className: hb()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== PS
            }),
            children: aS(CN(vN, PS, KS, !1))
          }), nS && nS.inputs.length > 1 && (0, JX.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: aS("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, JX.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, JX.jsx)(Xx, {
            taught: GS,
            tier: jS
          }), nS && (0, JX.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: aS("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function LN(SS) {
      var HS;
      const gS = null !== (HS = AH[vN].inputSlots) && void 0 !== HS ? HS : [];
      return {
        render: HS => {
          let {
            dt: gS,
            renderSlot: tS
          } = HS;
          return (0, JX.jsx)(EN, {
            dt: gS,
            store: SS,
            renderSlot: tS
          })
        },
        quickMoveRange: [Math.min(...gS), Math.max(...gS) + 1],
        className: QN(vN)
      }
    }
    var YN = gS(104),
      AN = gS(1211),
      yN = gS(4356);
    const VN = 600,
      iN = .5,
      WN = 4,
      zN = 1200,
      UN = 140,
      pN = 100,
      sN = 32,
      BN = 16,
      MN = 100.5,
      FN = 90,
      RN = 1.5,
      TN = 50;

    function oN(SS) {
      switch (Eg(SS)) {
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
    const lN = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function mN(SS) {
      const HS = Math.ceil(60 * SS / pN);
      return {
        fuel: Math.max(sN, HS),
        waste: Math.max(BN, HS)
      }
    }

    function eN(SS, HS, gS) {
      const [tS, bS, XS] = [SS - 2, HS - 2, gS - 2];
      return 2 * (tS * bS + bS * XS + XS * tS) * UN
    }

    function rN(SS, HS, gS) {
      return Math.max(0, SS - 2) * Math.max(0, HS - 2) * Math.max(0, gS - 2)
    }

    function Sq(SS, HS) {
      const [gS, tS, bS] = SS, XS = gS * tS * bS, xS = new Float32Array(XS);
      let NS = 0,
        qS = 0,
        uS = 0,
        IS = 0,
        fS = 0;
      const kS = (SS, XS, xS) => SS < 0 || SS >= gS || XS < 0 || XS >= tS || xS < 0 || xS >= bS ? 0 : HS[(XS * bS + xS) * gS + SS];
      for (let GS = 0; GS < tS; GS++)
        for (let SS = 0; SS < bS; SS++)
          for (let tS = 0; tS < gS; tS++) {
            const XS = (GS * bS + SS) * gS + tS,
              aS = HS[XS];
            if (1 === aS) {
              NS++;
              let HS = 0;
              for (const [gS, bS, XS] of lN) {
                const xS = kS(tS + gS, GS + bS, SS + XS);
                1 !== xS && 2 !== xS || HS++
              }
              xS[XS] = VN * (1 + iN * Math.min(HS, WN)), IS += xS[XS]
            } else if (2 === aS) qS++;
            else if (3 === aS) {
              uS++;
              lN.some((HS => {
                let [gS, bS, XS] = HS;
                return 1 === kS(tS + gS, GS + bS, SS + XS)
              })) && (fS += zN)
            }
          }
      const aS = eN(gS + 2, tS + 2, bS + 2),
        KS = Math.min(IS, fS, aS),
        jS = NS > 0 ? IS * pN / NS : 0;
      return {
        rods: NS,
        graphite: qS,
        channels: uS,
        fuelHeat: IS,
        cooling: fS,
        size: aS,
        max: KS,
        vol: XS,
        powerPerUnit: jS,
        pelletsPerMin: jS > 0 ? KS / jS * 60 : 0,
        waterPerS: KS * eS.q,
        rodHeat: xS
      }
    }
    const Hq = 0,
      gq = 1,
      tq = 6,
      bq = 7,
      Xq = 8;

    function xq(SS, HS) {
      const [gS, tS, bS] = SS, XS = new Uint8Array(gS * tS * bS), xS = (SS, XS, xS) => SS < 0 || SS >= gS || XS < 0 || XS >= tS || xS < 0 || xS >= bS ? 0 : HS[(XS * bS + xS) * gS + SS];
      for (let NS = 0; NS < tS; NS++)
        for (let SS = 0; SS < bS; SS++)
          for (let tS = 0; tS < gS; tS++) {
            const qS = (NS * bS + SS) * gS + tS,
              uS = HS[qS];
            if (1 === uS) {
              let HS = 0;
              for (const [gS, bS, XS] of lN) {
                const qS = xS(tS + gS, NS + bS, SS + XS);
                HS += 1 === qS || 2 === qS ? 1 : 0
              }
              XS[qS] = gq + Math.min(HS, WN)
            } else if (3 === uS) {
              const HS = lN.some((HS => {
                let [gS, bS, XS] = HS;
                return 1 === xS(tS + gS, NS + bS, SS + XS)
              }));
              XS[qS] = HS ? tq : bq
            } else 2 === uS && (XS[qS] = Xq)
          }
      return XS
    }

    function Nq(SS) {
      return SS.fuelHeat <= SS.cooling && SS.fuelHeat <= SS.size ? "fuel" : SS.cooling <= SS.size ? "cooling" : "size"
    }
    const qq = FN;

    function uq(SS, HS, gS) {
      return Math.round(SS * HS * gS * 25e3 * (1 + .25 * (Math.min(SS, HS, gS) - 2)))
    }

    function Iq(SS) {
      return Math.max(0, Math.min(eS.i, SS))
    }

    function fq(SS, HS, gS) {
      const tS = HS * Iq(gS);
      return SS <= 0 ? 0 : tS > 0 ? Math.min(200, 100 * SS / tS) : 200
    }

    function kq(SS, HS) {
      const gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? RN : 1;
      return Math.min(SS.fuelHeat * gS, SS.cooling * Iq(HS), SS.size * gS)
    }

    function aq(SS) {
      return 2 + SS / 10
    }
    const Kq = "buildAFactory2Game:";

    function jq(SS) {
      var HS;
      return null !== (HS = SS.baf2RxMood) && void 0 !== HS ? HS : function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const gS = [
          ["calm", 50],
          ["warm", qq],
          ["hot", MN]
        ];
        for (const [tS, bS] of gS)
          if (SS < bS + (tS === HS ? 3 : 0)) return tS;
        return "alarm"
      }(SS.baf2RxHeat)
    }
    const Gq = 120;

    function Cq(SS) {
      const HS = SS.baf2RxState;
      if ("running" === HS && SS.baf2RxHeat > MN) return {
        label: `${Kq}rxState_tooHot`,
        tone: "bad",
        fix: `${Kq}rxFix_tooHot`
      };
      switch (HS) {
        case "running":
          return {
            label: `${Kq}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Kq}rxState_idle`, tone: "off", fix: `${Kq}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Kq}rxState_scram`, tone: "off", fix: SS.baf2RxHeat < TN ? `${Kq}rxFix_scramCool` : `${Kq}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Kq}rxState_${HS}`, tone: "off", fix: `${Kq}rxFix_${HS}`
          };
        case "melted":
          return {
            label: `${Kq}rxState_melted`, tone: "bad", fix: `${Kq}rxFix_melted`
          };
        default:
          return {
            label: `${Kq}rxState_${HS}`, tone: "warn", fix: `${Kq}rxFix_${HS}`
          }
      }
    }

    function nq(SS) {
      const [HS, gS, tS] = SS.baf2RxStats;
      return {
        fuelHeat: HS,
        cooling: gS * (SS.baf2RxCryo ? Math.max(1, Iq(SS.baf2RxWater / 100)) : 1),
        size: tS
      }
    }

    function Pq(SS) {
      var HS;
      const gS = "idle" === SS.baf2RxState || "running" === SS.baf2RxState && SS.baf2RxHeat <= MN || "scram" === SS.baf2RxState && SS.baf2RxHeat < TN;
      if (0 === (SS.baf2RxFlags & QH) || !SS.baf2RxFormed || !gS) return null;
      const {
        fuelHeat: tS,
        cooling: bS,
        size: XS
      } = nq(SS), xS = Math.min(tS, bS, XS), NS = Nq({
        fuelHeat: tS,
        cooling: bS,
        size: XS
      }), qS = "cooling" === NS && !0 === SS.baf2RxCryoOpen && !SS.baf2RxCryo, uS = null !== (HS = SS.baf2RxCells) && void 0 !== HS ? HS : "", IS = ("fuel" === NS || "cooling" === NS && !0 === SS.baf2RxCryo) && uS.length > 0 && !uS.includes(String(0)), fS = qS ? "Cryo" : "scram" === SS.baf2RxState ? "Off" : "";
      return xS < 12e3 ? {
        key: `${Kq}rxGrow_${IS?"full":NS}${fS}`,
        amount: xS
      } : null
    }

    function Qq(SS, HS) {
      return SS[0] === HS[0] && SS[1] === HS[1] && SS[2] === HS[2]
    }

    function Dq(SS) {
      return [...SS].sort(((SS, HS) => Number(HS[2] < HS[1]) - Number(SS[2] < SS[1])))
    }

    function wq(SS, HS) {
      return HS.some((HS => {
        let [gS, tS] = HS;
        return !(tS <= 0) && ["edge", "cap", "wall", "inside"].some((HS => gS === Xt(SS, HS)))
      }))
    }

    function hq(SS, HS, gS) {
      const tS = SS.baf2RxFuel - SS.baf2RxPu > 0 ? gS : 0;
      return {
        full: SS.baf2RxWaste > HS - 3,
        fullInS: tS > 0 ? Math.max(0, HS - SS.baf2RxWaste) / tS : null
      }
    }
    const Zq = {
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

    function Jq(SS) {
      return Oq[SS]
    }
    const Oq = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function dq(SS) {
      let [HS, gS, tS] = SS;
      return Math.ceil(eN(HS, gS, tS) * eS.q)
    }

    function cq(SS, HS) {
      return "battery" === SS ? HS[0] * HS[1] * HS[2] : function(SS) {
        let [HS, gS, tS] = SS;
        return HS * gS * tS - Math.max(0, HS - 2) * Math.max(0, gS - 2) * Math.max(0, tS - 2)
      }(HS) - 1
    }

    function vq(SS) {
      const HS = Math.max(0, SS);
      if (HS < 10) return String(Math.round(10 * HS) / 10);
      if (HS < 1e4) return Math.round(HS).toLocaleString("en-US");
      if (HS < 1e6) return `${HS<1e5?(Math.floor(HS/100)/10).toFixed(1):Math.floor(HS/1e3)}k`;
      const gS = HS / 1e6;
      return `${gS<10?(Math.floor(100*gS)/100).toFixed(2):gS<100?(Math.floor(10*gS)/10).toFixed(1):Math.floor(gS)}M`
    }

    function Eq(SS) {
      return SS <= 0 ? "0" : SS >= 10 ? String(Math.round(SS)) : SS.toFixed(SS >= 1 ? 1 : 2)
    }

    function Lq(SS) {
      const HS = eg(SS, 0),
        gS = eg(SS, Tg(SS) - 1);
      return {
        lo: [Math.min(HS[0], gS[0]), Math.min(HS[1], gS[1]), Math.min(HS[2], gS[2])],
        hi: [Math.max(HS[0], gS[0]) + 1, Math.max(HS[1], gS[1]) + 1, Math.max(HS[2], gS[2]) + 1]
      }
    }

    function Yq(SS, HS, gS) {
      const tS = [HS[0] - SS[0], HS[1] - SS[1], HS[2] - SS[2]],
        bS = [(SS[0] + HS[0]) / 2, (SS[1] + HS[1]) / 2, (SS[2] + HS[2]) / 2],
        XS = [];
      for (let xS = 0; xS < 3; xS++) {
        const NS = (xS + 1) % 3,
          qS = (xS + 2) % 3;
        for (const uS of [SS[NS], HS[NS]])
          for (const IS of [SS[qS], HS[qS]]) {
            const SS = [0, 0, 0],
              HS = [gS, gS, gS];
            SS[xS] = bS[xS], HS[xS] = tS[xS] + gS, SS[NS] = uS, SS[qS] = IS, XS.push([SS, HS])
          }
      }
      return XS
    }
    const Aq = "buildAFactory2Game:",
      yq = [`${Aq}colNorth`, `${Aq}colEast`, `${Aq}colSouth`, `${Aq}colWest`];

    function Vq(SS, HS) {
      const [gS, tS, bS] = SS.baf2ColAt;
      return `baf2col ${gS} ${tS} ${bS} ${HS}`
    }

    function iq(SS) {
      return function(SS) {
        if (!Number.isFinite(SS)) return "";
        const HS = Math.max(1, Math.round(SS));
        if (HS < 60) return `${HS}s`;
        const gS = HS % 60;
        return 0 === gS ? HS / 60 + "m" : `${Math.floor(HS/60)}m ${gS}s`
      }(function(SS) {
        const HS = xt.FOCUS_BY_LASERS[Math.max(0, Math.min(4, SS))];
        return HS > 0 ? xt.NOVA_FOCUS / HS : 1 / 0
      }(SS))
    }

    function Wq(SS) {
      const HS = Math.abs(Math.round(SS));
      return HS < 1e3 ? Math.round(SS).toLocaleString("en-US") : HS < 1e6 ? `${HS<1e5?(SS/1e3).toFixed(1).replace(/\.0$/,""):Math.round(SS/1e3)}k` : `${(SS/1e6).toFixed(HS<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function zq(SS, HS, gS) {
      if (kt(HS) >= 0) {
        const HS = function(SS, HS) {
          return SS.find((SS => {
            let {
              focus: gS
            } = SS;
            return gS[0] === HS[0] && gS[2] === HS[2] && (HS[1] === gS[1] || HS[1] === gS[1] - 1)
          }))
        }(SS, gS);
        if (!HS) return null;
        const bS = function(SS) {
          let HS = 0,
            gS = 0;
          for (let tS = 0; tS < 4; tS++) HS += SS.laser[tS] ? 1 : 0, gS += SS.live[tS] ? 1 : 0;
          return {
            lasers: HS,
            live: gS,
            focusPerS: xt.FOCUS_BY_LASERS[gS],
            drawPerS: xt.LASER_DRAW * gS
          }
        }({
          laser: HS.lasers,
          live: HS.live
        });
        if (0 === bS.lasers || "noLasers" === HS.state) return {
          key: `${Aq}lookColNoLasers`
        };
        if (0 === bS.live) return {
          key: `${Aq}lookColOff_blocked`
        };
        if (!(HS.on && bS.live > 0) && ("running" !== (tS = HS.state) && "slowed" !== tS)) return {
          key: `${Aq}lookColOff_${HS.state}`
        };
        if (bS.live < bS.lasers) return {
          key: `${Aq}lookColLasersSome`,
          params: {
            lasers: String(bS.lasers),
            live: String(bS.live)
          }
        };
        const XS = HS.open.filter(Boolean).length;
        return XS < 4 ? {
          key: `${Aq}lookColLasersSpots`,
          params: {
            live: String(bS.live),
            spots: String(XS),
            time: iq(bS.live)
          }
        } : {
          key: `${Aq}lookColLasers`,
          params: {
            live: String(bS.live),
            time: iq(bS.live)
          }
        }
      }
      var tS;
      if (!Kt(HS)) return null;
      const bS = function(SS, HS) {
        for (const gS of SS) {
          const SS = nt(gS.focus, [HS[0], HS[1], HS[2]]);
          if (SS && SS.BI === xt.LASER_D && gS.lasers[SS.dir]) return {
            entry: gS,
            dir: SS.dir
          }
        }
        return null
      }(SS, gS);
      if (!bS) return {
        key: `${Aq}lookLaserNoCollider`
      };
      const {
        entry: XS,
        dir: xS
      } = bS;
      return XS.open[xS] ? XS.live[xS] ? {
        key: XS.on ? `${Aq}lookLaserFiring` : `${Aq}lookLaserReady`
      } : {
        key: `${Aq}lookLaserBlocked`
      } : {
        key: `${Aq}lookLaserClosed`
      }
    }

    function Uq(SS, HS) {
      const gS = [];
      for (let tS = 1; tS < xt.LASER_D; tS++) SS & 1 << HS * (xt.LASER_D - 1) + tS - 1 && gS.push(tS);
      return gS
    }
    const pq = {
      firing: `${Aq}colSlotFiring`,
      ready: `${Aq}colSlotReady`,
      blocked: `${Aq}colSlotBlocked`,
      empty: `${Aq}colSlotEmpty`,
      closed: `${Aq}colSlotClosed`
    };

    function sq(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const XS = xb(SS),
        xS = xb(HS),
        NS = xb(gS),
        qS = NS.filter(Boolean).length,
        uS = XS.filter(Boolean).length,
        IS = [0, 1, 2, 3].map((SS => xS[SS] ? XS[SS] ? NS[SS] ? tS ? "firing" : "ready" : "blocked" : (SS => Uq(bS, SS).length > 0)(SS) ? "blocked" : "empty" : "closed")),
        fS = IS.indexOf("blocked"),
        kS = fS < 0 && uS > 0 ? IS.indexOf("empty") : -1;
      return IS.map(((SS, HS) => {
        const gS = HS === fS ? {
          key: `${Aq}colSlotClear`
        } : HS === kS ? {
          key: `${Aq}colSlotAdd`,
          params: {
            time: iq(Math.min(4, qS + 1))
          }
        } : null;
        return {
          dir: HS,
          tone: SS,
          title: {
            key: "blocked" !== SS || XS[HS] ? pq[SS] : `${Aq}colSlotGap`,
            keys: {
              dir: yq[HS]
            }
          },
          hint: gS
        }
      }))
    }

    function Bq(SS) {
      var HS;
      return "noPower" === SS.baf2ColState && SS.baf2ColRxState ? Cq({
        baf2RxState: SS.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (HS = SS.baf2ColRxHeat) && void 0 !== HS ? HS : 0
      }) : null
    }

    function Mq(SS) {
      const HS = xb(SS.baf2ColSpots).filter(Boolean).length,
        gS = xb(SS.baf2ColLive);
      let tS = 0,
        bS = 0;
      return xb(SS.baf2ColLasers).forEach(((SS, HS) => {
        SS && (tS++, bS += gS[HS] ? 0 : 1)
      })), bS > 0 ? {
        key: `${Aq}colSubSome`,
        params: {
          blocked: String(bS),
          lasers: String(tS)
        }
      } : HS < 4 ? {
        key: `${Aq}colSubSpots`,
        params: {
          lasers: String(tS),
          spots: String(HS)
        }
      } : {
        key: `${Aq}colSub`,
        params: {
          lasers: String(tS)
        }
      }
    }

    function Fq(SS) {
      const HS = Bq(SS);
      if ("idle" === SS.baf2ColRxState && HS) return {
        key: `${Aq}colState_noPowerIdle`
      };
      if (HS) return {
        key: `${Aq}colState_noPowerReactor`,
        keys: {
          state: HS.label
        }
      };
      if ("noInput" !== SS.baf2ColState) return {
        key: `${Aq}colState_${SS.baf2ColState}`
      };
      const gS = String(Math.max(0, xt.NOVA_SA - SS.baf2ColSa)),
        tS = String(Math.max(0, xt.NOVA_GD - SS.baf2ColGd));
      return "0" !== gS && "0" !== tS ? {
        key: `${Aq}colState_noInput`,
        params: {
          sa: gS,
          gd: tS
        }
      } : "0" !== gS ? {
        key: `${Aq}colState_noStarAlloy`,
        params: {
          sa: gS
        }
      } : "0" !== tS ? {
        key: `${Aq}colState_noGlowDust`,
        params: {
          gd: tS
        }
      } : {
        key: `${Aq}colState_running`
      }
    }

    function Rq(SS) {
      return SS.baf2ColP < 0 ? `${Aq}colNext` : function(SS) {
        const HS = SS.baf2ColState;
        return SS.baf2ColP >= 0 && ("blocked" === HS || "noLasers" === HS || "noPower" === HS)
      }(SS) ? `${Aq}colStalled` : null === Tq(SS) ? `${Aq}colMaking` : `${Aq}colNovaIn`
    }

    function Tq(SS) {
      if (SS.baf2ColP < 0 || SS.baf2ColWant <= 0) return null;
      const HS = SS.baf2ColFocusPerS * Math.min(1, SS.baf2ColDraw / SS.baf2ColWant);
      return HS > 0 ? Math.max(0, xt.NOVA_FOCUS - SS.baf2ColP) / HS : null
    }

    function oq(SS, HS) {
      const gS = [];
      for (let tS = 1; tS <= 3; tS++) {
        const bS = [SS[0], SS[1] - tS, SS[2]];
        if (!HS(bS)) return gS;
        gS.push(bS)
      }
      return []
    }

    function lq(SS, HS) {
      const gS = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let tS = 0; tS < 4; tS++) {
        const bS = tS,
          XS = Ct(SS.focus, bS, xt.LASER_D);
        if (SS.lasers[tS] || !SS.open[tS] || !HS(XS)) continue;
        const xS = [];
        for (let gS = 1; gS < xt.LASER_D; gS++) {
          const tS = Ct(SS.focus, bS, gS);
          HS(tS) || xS.push(tS)
        }
        gS.supports.push(...oq(XS, HS)), 0 === xS.length ? gS.free.push(XS) : (gS.blocked.push(XS), gS.gaps.push(...xS))
      }
      return gS
    }
    const mq = xt.LASER_D - .25,
      eq = 4,
      rq = 2,
      Su = 16;
    const Hu = {
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
        blendMode: yN.g.Standard,
        soft: !0
      },
      gu = {
        green: Hu,
        pink: {
          ...Hu,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function tu(SS, HS) {
      const gS = {
        ...HS.params
      };
      for (const [bS, XS] of Object.entries(null !== (tS = HS.keys) && void 0 !== tS ? tS : {})) {
        var tS;
        gS[bS] = SS(XS)
      }
      return gS
    }
    const bu = "buildAFactory2Game:",
      Xu = 2 * xt.LASER_D + 1,
      xu = xt.LASER_D;

    function Nu(SS) {
      return SS(`${bu}colFocusTip`, {
        need: Wq(xt.NOVA_FOCUS)
      })
    }

    function qu(SS, HS) {
      return SS(HS.key, tu(SS, HS))
    }

    function uu(SS) {
      const HS = SS.getStatus();
      return {
        status: HS,
        entry: HS ? SS.entryAtRoot(HS.baf2ColAt) : void 0
      }
    }

    function Iu(SS, HS) {
      return {
        left: 100 * (xu + SS) / Xu + "%",
        top: 100 * (xu + HS) / Xu + "%"
      }
    }

    function fu(SS) {
      let {
        status: HS,
        entry: gS
      } = SS;
      const tS = xb(HS.baf2ColLasers),
        bS = xb(HS.baf2ColSpots),
        XS = xb(HS.baf2ColLive),
        xS = !0 === (null === gS || void 0 === gS ? void 0 : gS.on),
        NS = xt.LASER_D,
        qS = [];
      for (let aS = 0; aS < 4; aS++) {
        const [SS, , HS] = Gt[aS];
        if (XS[aS]) {
          const gS = 100 * (NS - 1) / Xu,
            tS = SS + HS > 0 ? 100 * (xu + 1) / Xu : 100 * (xu - (NS - 1)) / Xu,
            bS = 100 * (xu + .35) / Xu,
            XS = 30 / Xu,
            uS = 0 !== SS ? {
              left: `${tS}%`,
              width: `${gS}%`,
              top: `${bS}%`,
              height: `${XS}%`
            } : {
              top: `${tS}%`,
              height: `${gS}%`,
              left: `${bS}%`,
              width: `${XS}%`
            };
          qS.push((0, JX.jsx)("i", {
            className: hb()("Baf2ColDiagramBeam", {
              Off: !xS
            }),
            style: uS
          }, `beam${aS}`))
        }
        const gS = tS[aS] ? "Baf2ColDiagramLaser" : bS[aS] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        qS.push((0, JX.jsx)("i", {
          className: gS,
          style: Iu(SS * NS, HS * NS)
        }, `spot${aS}`))
      }
      for (let aS = 0; aS < 4; aS++) {
        if (tS[aS] || !bS[aS]) continue;
        const [SS, , gS] = Gt[aS];
        for (const tS of Uq(null !== (uS = HS.baf2ColGaps) && void 0 !== uS ? uS : 0, aS)) {
          var uS;
          qS.push((0, JX.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Iu(SS * tS, gS * tS)
          }, `gap${aS},${tS}`))
        }
      }
      for (const [aS, , KS] of null !== (IS = null === gS || void 0 === gS ? void 0 : gS.blockers) && void 0 !== IS ? IS : []) {
        var IS, fS, kS;
        const SS = aS - (null !== (fS = null === gS || void 0 === gS ? void 0 : gS.focus[0]) && void 0 !== fS ? fS : 0),
          HS = KS - (null !== (kS = null === gS || void 0 === gS ? void 0 : gS.focus[2]) && void 0 !== kS ? kS : 0);
        qS.push((0, JX.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Iu(SS, HS)
        }, `block${SS},${HS}`))
      }
      return (0, JX.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [qS, (0, JX.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function ku(SS) {
      let {
        status: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)(), tS = xb(HS.baf2ColLive).filter(Boolean).length;
      return (0, JX.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, JX.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: Nu(gS),
          children: gS(`${bu}colLadder`)
        }), (0, JX.jsx)("ul", {
          children: [1, 2, 3, 4].map((SS => (0, JX.jsx)("li", {
            className: hb()({
              On: SS === tS
            }),
            children: gS(`${bu}colLadderChip`, {
              lasers: String(SS),
              time: iq(SS)
            })
          }, SS)))
        })]
      })
    }

    function au(SS) {
      let {
        item: HS,
        Ku: gS,
        need: tS,
        cap: bS
      } = SS;
      const {
        t: XS
      } = (0, db.F)(), xS = Math.min(gS, tS);
      return (0, JX.jsxs)("li", {
        className: hb()("Baf2ColTile", {
          Short: gS < tS
        }),
        children: [(0, JX.jsx)(Ku, {
          item: HS
        }), (0, JX.jsx)("b", {
          className: "Baf2ColTileValue",
          children: XS(`${bu}colOutOf`, {
            amount: String(xS),
            cap: String(tS)
          })
        }), (0, JX.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, JX.jsx)("i", {
            style: {
              width: 100 * xS / tS + "%"
            }
          })
        }), gS > tS && (0, JX.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: XS(`${bu}colIntakeHeld`, {
            amount: String(gS),
            cap: String(bS)
          })
        })]
      })
    }

    function Ku(SS) {
      let {
        item: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)();
      return (0, JX.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, JX.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, JX.jsx)(vb.e, {
            itemName: HS,
            amount: 0
          })
        }), (0, JX.jsx)("span", {
          className: "Baf2ColTileName",
          children: bX(gS, HS)
        })]
      })
    }

    function ju(SS) {
      switch (SS.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function Gu(SS) {
      var HS, gS, bS;
      let {
        store: XS,
        close: xS
      } = SS;
      const {
        t: NS
      } = (0, db.F)(), qS = px(), {
        status: uS,
        entry: IS
      } = function(SS) {
        const [HS, gS] = (0, tS.useState)((() => uu(SS)));
        return (0, tS.useEffect)((() => (gS(uu(SS)), SS.subscribe((() => {
          gS(uu(SS))
        })))), [SS]), HS
      }(XS), [fS, kS] = (0, tS.useState)(null), aS = null === uS || void 0 === uS ? void 0 : uS.baf2ColHold;
      (0, tS.useEffect)((() => {
        kS(null)
      }), [aS]);
      const KS = (0, tS.useRef)({
          p: -1,
          n: 0
        }),
        jS = null !== (HS = null === uS || void 0 === uS ? void 0 : uS.baf2ColP) && void 0 !== HS ? HS : -1;
      jS < KS.current.p && KS.current.n++, KS.current.p = jS;
      const GS = (0, tS.useRef)(null),
        [CS] = (0, tS.useState)((() => {
          return (SS = XS.heldAtOpen()) === ut || SS === It ? {
            key: `${Aq}colBeltItIn`,
            item: SS
          } : null;
          var SS
        }));
      if (!uS) return null;
      const nS = uS.baf2ColMember,
        PS = uS.baf2ColP >= 0,
        QS = function(SS, HS) {
          if (SS.baf2ColP >= 0 && SS.baf2ColDraw > 0) {
            const HS = SS.baf2ColWant > 0 ? Math.min(1, SS.baf2ColDraw / SS.baf2ColWant) : 0;
            return {
              focus: SS.baf2ColFocusPerS * HS,
              draw: SS.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === SS.baf2ColState && HS && HS.draw > 0 ? {
            ...HS,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(uS, GS.current);
      GS.current = QS.draw > 0 ? QS : null;
      const DS = "slowed" === uS.baf2ColState || "noPower" === uS.baf2ColState,
        wS = Tq(uS),
        hS = null !== fS && void 0 !== fS ? fS : uS.baf2ColHold,
        ZS = function(SS) {
          var HS, gS;
          return "idle" === SS.baf2ColRxState ? null : null !== (HS = null === (gS = Bq(SS)) || void 0 === gS ? void 0 : gS.fix) && void 0 !== HS ? HS : null
        }(uS),
        JS = null === ZS && null === CS ? function(SS) {
          var HS;
          const gS = SS.baf2ColSentTo;
          if (!gS) return null;
          const tS = null !== (HS = SS.baf2ColSentHeld) && void 0 !== HS ? HS : null;
          return {
            key: null === tS ? `${Aq}colNovaSentToMachine` : `${Aq}colNovaSentTo`,
            target: gS,
            Ku: tS
          }
        }(uS) : null,
        OS = PS ? NS(`${bu}colFocusOf`, {
          focus: Wq(uS.baf2ColP),
          need: Wq(xt.NOVA_FOCUS)
        }) : null;
      return (0, JX.jsx)(Dx.c, {
        close: xS,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, JX.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, JX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JX.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, JX.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, JX.jsx)(vb.e, {
                  itemName: Nt,
                  amount: 0
                })
              }), (0, JX.jsxs)("div", {
                children: [(0, JX.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: bX(NS, Nt)
                }), (0, JX.jsx)("p", {
                  children: qu(NS, Mq(uS))
                })]
              })]
            }), (0, JX.jsx)(wx.l, {
              onClick: xS
            })]
          }), (0, JX.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, JX.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, JX.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, JX.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: NS(Rq(uS), {
                    time: null === wS ? "" : DX(NS, wS)
                  })
                }), (0, JX.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, JX.jsx)("i", {
                    style: {
                      width: (PS ? 100 * uS.baf2ColP / xt.NOVA_FOCUS : 0) + "%"
                    }
                  }, KS.current.n)
                }), (0, JX.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, JX.jsxs)("span", {
                    title: Nu(NS),
                    children: [(0, JX.jsx)("b", {
                      children: Wq(QS.focus)
                    }), " ", NS(`${bu}colFocusPerS`)]
                  }), (0, JX.jsxs)("span", {
                    className: hb()("Baf2ColDraw", {
                      Short: DS
                    }),
                    children: [(0, JX.jsx)(cb.d, {
                      name: "bolt"
                    }), DS ? NS(`${bu}colDrawOf`, {
                      draw: Wq(uS.baf2ColDraw),
                      want: Wq(uS.baf2ColWant)
                    }) : NS(`${bu}colPowerPerS`, {
                      rate: Wq(QS.draw)
                    })]
                  }), null !== OS && (0, JX.jsx)("span", {
                    className: "Soft",
                    children: OS
                  })]
                })]
              }), (0, JX.jsx)("p", {
                className: hb()("Baf2ColState", ju(uS)),
                children: qu(NS, Fq(uS))
              }), null !== ZS && (0, JX.jsx)("p", {
                className: "Baf2ColStateFix",
                children: NS(ZS)
              }), null === ZS && null !== CS && (0, JX.jsx)("p", {
                className: "Baf2ColStateFix",
                children: NS(CS.key, {
                  item: bX(NS, CS.item)
                })
              }), JS && (0, JX.jsx)("p", {
                className: "Baf2ColStateFix",
                children: NS(JS.key, {
                  target: bX(NS, JS.target),
                  amount: String(null !== (gS = JS.Ku) && void 0 !== gS ? gS : 0)
                })
              }), (0, JX.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, JX.jsx)(au, {
                  item: ut,
                  Ku: uS.baf2ColSa,
                  need: xt.NOVA_SA,
                  cap: xt.SA_CAP
                }), (0, JX.jsx)(au, {
                  item: It,
                  Ku: uS.baf2ColGd,
                  need: xt.NOVA_GD,
                  cap: xt.GD_CAP
                }), (0, JX.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, JX.jsx)(Ku, {
                    item: "Nova Matter"
                  }), (0, JX.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: NS(`${bu}colNovaHeld`, {
                      amount: String(uS.baf2ColOut),
                      cap: String(xt.OUT_CAP)
                    })
                  }), nS && (0, JX.jsx)(wx.p, {
                    className: "Baf2ColTake",
                    disabled: 0 === uS.baf2ColOut,
                    onClick: () => {
                      qS.send(Vq(uS, "take"))
                    },
                    children: NS(`${bu}colTake`)
                  })]
                })]
              }), nS && (0, JX.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": hS,
                className: hb()("Baf2ColHold", {
                  On: hS
                }),
                onClick: SS => {
                  SS.detail > 0 && SS.currentTarget.blur(), kS(!hS), qS.send(Vq(uS, "hold " + (hS ? 0 : 1)))
                },
                children: [(0, JX.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, JX.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, JX.jsx)("b", {
                    children: NS(`${bu}colHold`)
                  }), (0, JX.jsx)("span", {
                    children: NS(`${bu}colHoldNote`)
                  })]
                })]
              })]
            }), (0, JX.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, JX.jsx)(fu, {
                status: uS,
                entry: IS
              }), (0, JX.jsx)("ul", {
                className: "Baf2ColSlots",
                children: sq(uS.baf2ColLasers, uS.baf2ColSpots, uS.baf2ColLive, QS.beamsOn, null !== (bS = uS.baf2ColGaps) && void 0 !== bS ? bS : 0).map((SS => (0, JX.jsxs)("li", {
                  className: SS.tone,
                  children: [(0, JX.jsx)("b", {
                    children: qu(NS, SS.title)
                  }), null !== SS.hint && (0, JX.jsx)("span", {
                    children: qu(NS, SS.hint)
                  })]
                }, SS.dir)))
              }), (0, JX.jsx)(ku, {
                status: uS
              })]
            })]
          })]
        })
      })
    }
    const Cu = "buildAFactory2Game:",
      nu = 36e5,
      Pu = 864e5;

    function Qu(SS, HS, gS) {
      return Math.max(0, Math.ceil((SS + HS - Math.max(gS, SS)) / 1e3))
    }

    function Du(SS) {
      return SS.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function wu(SS) {
      return "Homestead" === SS
    }

    function hu(SS) {
      return function(SS) {
        let HS = 0;
        for (const gS of SS) {
          const SS = /^Island ([1-9]\d{0,5})$/.exec(gS);
          SS && (HS = Math.max(HS, Number(SS[1])))
        }
        return `Island ${HS+1}`
      }(SS.map((SS => SS.baf2IslandName)))
    }

    function Zu(SS, HS) {
      return function(SS) {
        return `${Cu}islandsBlocked${SS[0].toUpperCase()}${SS.slice(1)}`
      }("degraded" === SS && 0 === HS ? "stuck" : SS)
    }

    function Ju(SS) {
      return SS.filter((SS => {
        var HS;
        return !SS.baf2IslandActive && void 0 === SS.baf2IslandUnreadable && void 0 === (null === (HS = SS.baf2IslandCoop) || void 0 === HS ? void 0 : HS.baf2CoopState)
      })).length
    }

    function Ou(SS) {
      return "coopMoving" === SS || "coopUnreachable" === SS
    }

    function du(SS, HS) {
      const gS = HS > 0;
      return {
        change: null === SS && !gS,
        switch: (null === SS || "degraded" === SS || Ou(SS)) && !gS,
        rename: "loading" !== SS && "degraded" !== SS && "stuck" !== SS
      }
    }

    function cu(SS, HS) {
      return void 0 === SS || "corrupt" === SS && HS
    }
    const vu = Ax;

    function Eu(SS, HS, gS) {
      if (null !== SS && void 0 !== SS && SS.untilGone) {
        var tS;
        return !("dismiss" === SS.untilGone && void 0 === (null === (tS = HS.baf2IslandCoop) || void 0 === tS ? void 0 : tS.baf2CoopState)) && gS - SS.atMs < 32500
      }
      return void 0 !== SS && gS - SS.atMs < vu && HS.baf2IslandName === SS.from
    }
    const Lu = Ax;

    function Yu(SS) {
      return "core" === (null === SS || void 0 === SS ? void 0 : SS.kind) ? SS.core : "islands" === (null === SS || void 0 === SS ? void 0 : SS.kind) ? SS.backToCore : void 0
    }

    function Au(SS) {
      return `\0${SS}\0`
    }

    function yu(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const tS = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const XS of Object.keys(gS)) tS[XS] = Au(XS);
      let bS = Object.keys(tS).length > 0 ? SS(HS, tS) : SS(HS);
      for (const [XS, xS] of Object.entries(gS)) bS = bS.split(Au(XS)).join(xS);
      return bS
    }

    function Vu(SS, HS) {
      return SS ? HS ? "enabled" : "disabled" : "hidden"
    }
    const iu = {
      removed: `${Cu}islandsCoopRemoved`,
      deleted: `${Cu}islandsCoopDeleted`,
      notReady: `${Cu}islandsCoopNotReady`,
      gone: `${Cu}islandsCoopGone`
    };

    function Wu(SS) {
      var HS;
      return "member" !== (null === (HS = SS.baf2IslandCoop) || void 0 === HS ? void 0 : HS.baf2CoopRole) && "newer" !== SS.baf2IslandUnreadable
    }

    function zu(SS, HS, gS, tS, bS, XS) {
      const xS = SS.baf2IslandActive,
        NS = SS.baf2IslandUnreadable,
        qS = SS.baf2IslandCoop,
        uS = function(SS, HS, gS) {
          return {
            switch: SS.switch && void 0 === HS,
            delete: SS.change && cu(HS, gS)
          }
        }(HS, NS, tS),
        IS = xS && void 0 !== qS && void 0 === qS.baf2CoopState && "coopUnreachable" === XS,
        fS = {
          switch: Vu((!xS || IS) && void 0 === NS, IS || uS.switch),
          switchLabel: IS ? "tryAgain" : "switch",
          rename: Vu(!0, HS.rename),
          delete: Vu(!xS, uS.delete),
          deleteWaits: !xS && cu(NS, tS),
          people: Vu(void 0 !== SS.baf2IslandInvitable || bS && xS && void 0 === NS && void 0 === qS, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        kS = !xS && uS.delete;
      if (void 0 === qS) return gS ? {
        ...fS,
        delete: Vu(!xS, !1),
        deleteWaits: !1,
        note: kS ? {
          key: `${Cu}islandsCoopKeepOwn`
        } : null
      } : fS;
      const aS = qS.baf2CoopState,
        KS = qS.baf2CoopMembers.length > 1,
        jS = {
          ...fS,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== aS && "member" === qS.baf2CoopRole) return {
        ...jS,
        dismiss: Vu(!0, HS.rename),
        note: {
          key: iu[aS],
          names: {
            owner: qS.baf2CoopOwner
          }
        }
      };
      if (void 0 !== aS) {
        let SS = {
          key: `${Cu}islandsCoopOwnLost`
        };
        return kS && KS ? SS = {
          key: `${Cu}islandsCoopDeleteMembers`
        } : kS && gS && (SS = {
          key: `${Cu}islandsCoopKeepOwn`
        }), {
          ...jS,
          delete: Vu(!xS, uS.delete && !KS && !gS),
          deleteWaits: fS.deleteWaits && !KS && !gS,
          note: SS
        }
      }
      if ("member" === qS.baf2CoopRole) return {
        ...fS,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: Vu(!0, xS ? HS.switch : HS.rename)
      };
      const GS = qS.baf2CoopManageHere;
      let CS = null;
      var nS;
      GS || xS ? kS && KS ? CS = {
        key: `${Cu}islandsCoopDeleteMembers`
      } : kS && gS && (CS = {
        key: `${Cu}islandsCoopKeepOwn`
      }) : CS = {
        key: null !== (nS = qS.baf2CoopLeft) && void 0 !== nS && nS.length ? `${Cu}islandsCoopManageThereClaim` : `${Cu}islandsCoopManageThere`
      };
      return {
        ...fS,
        rename: Vu(!0, HS.rename && GS),
        delete: Vu(!xS, uS.delete && !KS && !gS),
        deleteWaits: fS.deleteWaits && !KS && !gS,
        people: "enabled",
        peopleLabel: "players",
        unshare: Vu(GS && xS && !KS, HS.change),
        remove: GS,
        note: CS
      }
    }

    function Uu(SS) {
      var HS;
      const gS = SS.baf2IslandCoop;
      if ("owner" !== (null === gS || void 0 === gS ? void 0 : gS.baf2CoopRole) || void 0 !== gS.baf2CoopState || null === (HS = gS.baf2CoopLeft) || void 0 === HS || !HS.length) return null;
      const tS = SS.baf2IslandActive && gS.baf2CoopManageHere;
      return {
        left: gS.baf2CoopLeft,
        claim: tS,
        goThere: !tS && gS.baf2CoopManageHere
      }
    }

    function pu(SS) {
      return SS.baf2CoopMembers.length >= SS.baf2CoopMax
    }

    function su(SS, HS, gS) {
      return void 0 !== SS && HS < SS.answer && gS - SS.atMs < vu
    }
    const Bu = "buildAFactory2Game:";

    function Mu(SS, HS) {
      return {
        onKeyDown: gS => {
          gS.stopPropagation(), gS.nativeEvent.isComposing || 229 === gS.nativeEvent.keyCode || ("Enter" === gS.key ? (gS.preventDefault(), SS()) : "Escape" === gS.key && (gS.preventDefault(), HS()))
        }
      }
    }

    function Fu(SS) {
      return {
        onKeyDown: HS => {
          "Escape" !== HS.key || HS.nativeEvent.isComposing || (HS.preventDefault(), HS.stopPropagation(), SS())
        }
      }
    }

    function Ru(SS) {
      SS.currentTarget.select()
    }

    function Tu(SS, HS) {
      (0, tS.useEffect)((() => {
        var gS;
        SS && (null === (gS = HS.current) || void 0 === gS || gS.scrollIntoView({
          block: "nearest"
        }))
      }), [SS, HS])
    }

    function ou(SS) {
      const [HS, gS] = (0, tS.useState)(null);
      return (0, tS.useEffect)((() => {
        const HS = document.querySelector(".UiRequests"),
          tS = SS.current;
        if (!HS || !tS || "undefined" === typeof ResizeObserver) return;
        const bS = () => {
          const SS = HS.getBoundingClientRect(),
            bS = tS.getBoundingClientRect(),
            XS = tS.parentElement,
            xS = XS && parseFloat(getComputedStyle(XS).paddingTop) || 0,
            NS = function(SS, HS, gS, tS) {
              if (!SS || SS.height <= 0 || SS.right <= HS.left || SS.left >= HS.right) return null;
              const bS = Math.max(tS, SS.bottom + 8);
              return {
                marginTop: Math.round(bS - tS),
                maxHeight: Math.max(0, Math.floor(gS - bS - tS))
              }
            }(SS, bS, window.innerHeight, xS);
          gS((SS => (null === SS || void 0 === SS ? void 0 : SS.marginTop) === (null === NS || void 0 === NS ? void 0 : NS.marginTop) && (null === SS || void 0 === SS ? void 0 : SS.maxHeight) === (null === NS || void 0 === NS ? void 0 : NS.maxHeight) ? SS : NS))
        };
        bS();
        const XS = new ResizeObserver(bS);
        return XS.observe(HS), window.addEventListener("resize", bS), () => {
          XS.disconnect(), window.removeEventListener("resize", bS)
        }
      }), [SS]), HS
    }

    function lu() {
      (0, tS.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function mu(SS) {
      (0, tS.useEffect)((() => {
        var HS;
        null === (HS = SS.current) || void 0 === HS || HS.focus()
      }), [SS])
    }

    function eu(SS) {
      const [HS, gS] = (0, tS.useState)(Date.now);
      return (0, tS.useEffect)((() => {
        const HS = window.setInterval((() => {
          gS(Date.now())
        }), SS);
        return () => {
          window.clearInterval(HS)
        }
      }), [SS]), HS
    }

    function ru(SS) {
      let {
        tier: HS,
        t: gS
      } = SS;
      const {
        kind: tS,
        short: bS
      } = GS(HS), XS = aS(HS, KS), xS = gS(`${Bu}${XS.key}`, {
        ...XS.params,
        name: gS(`${Bu}${CS(HS).nameKey}`)
      });
      return (0, JX.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, JX.jsx)("span", {
          className: hb()("Baf2IslandTierPip", {
            Stage: "tier" !== tS
          }),
          "aria-hidden": "true",
          children: bS
        }), xS]
      })
    }

    function SI(SS) {
      let {
        note: HS,
        className: gS,
        t: tS
      } = SS;
      return (0, JX.jsx)("p", {
        className: hb()("Baf2IslandNote", gS),
        children: yu(tS, HS.key, HS.names, HS.params)
      })
    }
    const HI = "buildAFactory2Game:";

    function gI(SS) {
      let {
        message: HS,
        arrivedAtMs: gS,
        close: bS,
        leave: XS
      } = SS;
      const xS = px(),
        {
          t: NS
        } = (0, db.F)(),
        qS = eu(1e3),
        uS = (0, tS.useRef)(null);
      lu(), (0, tS.useEffect)((() => {
        var SS;
        null === (SS = uS.current) || void 0 === SS || SS.focus()
      }), []);
      const IS = Qu(gS, HS.baf2TransferInMs, qS),
        fS = gS + HS.baf2TransferInMs - 1e3,
        [kS, aS] = (0, tS.useState)(null);
      (0, tS.useEffect)((() => {
        const SS = window.setTimeout((() => {
          aS(fS)
        }), Math.max(0, fS - Date.now()));
        return () => {
          window.clearTimeout(SS)
        }
      }), [fS]);
      const KS = kS === fS || qS >= fS,
        jS = HS.baf2TransferIsland,
        GS = HS.baf2TransferOwner;
      return (0, JX.jsx)(Dx.c, {
        close: bS,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, JX.jsxs)("section", {
          ref: uS,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, JX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JX.jsxs)("div", {
              children: [(0, JX.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === GS ? yu(NS, `${HI}islandsTransferOwn`, {
                  island: jS
                }) : yu(NS, `${HI}islandsTransfer`, {
                  island: jS,
                  owner: GS
                })
              }), (0, JX.jsx)("p", {
                children: KS ? NS(`${HI}islandsTransferNow`) : NS(`${HI}islandsTransferIn`, {
                  time: DX(NS, IS)
                })
              })]
            }), (0, JX.jsx)(wx.l, {
              ariaLabel: NS(`${HI}islandsClose`),
              onClick: bS
            })]
          }), !KS && (0, JX.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, JX.jsx)("p", {
              className: "Baf2TransferNote",
              children: NS(`${HI}islandsTransferNote`)
            }), (0, JX.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, JX.jsx)(wx.g, {
                onClick: () => {
                  xS.send("baf2coopstay"), XS()
                },
                children: NS(`${HI}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var tI = gS(1522),
      bI = gS(1224),
      XI = gS.n(bI);
    const xI = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const NI = "buildAFactory2Game:",
      qI = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function uI(SS, HS, gS) {
      return void 0 === HS ? gS : "string" === typeof HS ? HS : Array.isArray(HS) ? HS.map((HS => "string" === typeof HS ? HS : "translationKey" in HS ? SS(HS.translationKey) : "")).join("") : SS(HS.translationKey)
    }

    function II(SS) {
      const HS = {};
      for (const [gS, tS] of Object.entries(null !== SS && void 0 !== SS ? SS : {})) HS[gS] = tS < 0 ? QX(tS) : tS.toLocaleString("en-US");
      return HS
    }

    function fI(SS, HS) {
      const gS = HS ? "touch" : "mouse";
      return {
        use: SS(`${NI}lookUse_${gS}`),
        Use: SS(`${NI}lookUseStart_${gS}`)
      }
    }
    const kI = (0, tS.memo)((function(SS) {
      let {
        item: HS
      } = SS;
      return (0, JX.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, JX.jsx)(vb.e, {
          itemName: HS,
          amount: 0
        })
      })
    }));

    function aI(SS) {
      let {
        label: HS,
        percent: gS,
        progress: tS
      } = SS;
      return (0, JX.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, JX.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${HS}: ${tS}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": gS,
          children: (0, JX.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${gS}%`
            }
          })
        }), (0, JX.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: tS
        })]
      })
    }

    function KI(SS) {
      let {
        chips: HS
      } = SS;
      return (0, JX.jsx)("span", {
        className: "Baf2QuestChips",
        children: HS.map((SS => {
          let [HS, gS, tS] = SS;
          const bS = gS >= tS;
          return (0, JX.jsxs)("span", {
            className: hb()("Baf2QuestChip", {
              Met: bS
            }),
            children: [(0, JX.jsx)(kI, {
              item: HS
            }), (0, JX.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: bS ? `\u2713${tS}` : `${gS}/${tS}`
            })]
          }, HS)
        }))
      })
    }

    function jI(SS, HS) {
      const {
        key: gS,
        params: tS
      } = aS(HS, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return SS(`${NI}${gS}`, {
        ...tS,
        name: SS(`${NI}${CS(HS).nameKey}`)
      })
    }

    function GI(SS) {
      let {
        core: HS,
        t: gS
      } = SS;
      const [tS, bS] = HS, XS = bS > 0 ? Math.floor(100 * tS / bS) : 100;
      return (0, JX.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": gS(`${NI}questCoreLabel`, {
          have: String(tS),
          need: String(bS)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": XS,
        children: [(0, JX.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: gS(`${NI}questCore`, {
            percent: String(XS)
          })
        }), (0, JX.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, JX.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${XS}%`
            }
          })
        })]
      })
    }

    function CI(SS) {
      let {
        rows: HS,
        t: gS
      } = SS;
      const tS = HS.filter((SS => SS.done)).length;
      return (0, JX.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": gS(`${NI}questStepsProgress`, {
          done: String(tS),
          total: String(HS.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": HS.length,
        "aria-valuenow": tS,
        children: HS.map((SS => (0, JX.jsx)("span", {
          className: hb()("Baf2QuestSegment", {
            Done: SS.done,
            Current: SS.current
          })
        }, SS.id)))
      })
    }
    const nI = (0, tS.memo)(QI, PI);

    function PI(SS, HS) {
      const gS = gS => SS.view.itemNames[gS] === HS.view.itemNames[gS];
      return SS.t === HS.t && SS.extra === HS.extra && (null === SS.row.item || gS(SS.row.item)) && SS.row.madeFor.every(gS) && SS.row.also.every(gS) && XI()(SS.row, HS.row)
    }

    function QI(SS) {
      let {
        row: HS,
        view: gS,
        t: tS,
        extra: bS
      } = SS;
      const {
        isTouchScreen: XS
      } = (0, Qb.m)(["isTouchScreen"]), xS = HS.item ? function(SS, HS, gS) {
        return 1 !== gS && xI.has(SS) ? Ob(HS) : null
      }(HS.key, HS.item, HS.total) : null, NS = xS ? tS(xS) : HS.item ? uI(tS, gS.itemNames[HS.item], HS.item) : "", qS = HS.also.map((SS => uI(tS, gS.itemNames[SS], SS))), uS = qS.join(", "), IS = function(SS, HS) {
        var gS;
        return HS.length < 2 ? null !== (gS = HS[0]) && void 0 !== gS ? gS : "" : SS(`${NI}listAnd`, {
          rest: HS.slice(0, -1).join(SS(`${NI}listComma`)),
          last: HS[HS.length - 1]
        })
      }(tS, [NS, ...qS]), fS = tS(`${NI}${HS.key}`, {
        ...fI(tS, XS),
        ...II(HS.params),
        item: NS,
        also: uS,
        itemList: IS,
        total: String(HS.total)
      }), [kS, ...aS] = fS.split("\n"), KS = HS.total > 1 && !HS.done && !HS.away;
      return (0, JX.jsxs)("li", {
        className: hb()("Baf2QuestStep", {
          Done: HS.done,
          Current: HS.current,
          JustFinished: HS.justFinished,
          Away: HS.away
        }),
        children: [!HS.done && null !== HS.item && (0, JX.jsx)(kI, {
          item: HS.item
        }), (HS.done || null === HS.item) && (0, JX.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: HS.done ? "\u2713" : "\u25cb"
        }), (0, JX.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, JX.jsx)("strong", {
            children: kS
          }), aS.length > 0 && (0, JX.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: aS.join(" ")
          }), !HS.done && HS.madeFor.length > 0 && (0, JX.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: tS("buildAFactory2Game:questRowFor", {
              items: HS.madeFor.map((SS => uI(tS, gS.itemNames[SS], SS))).join(" \u2192 ")
            })
          }), KS && (0, JX.jsx)(aI, {
            label: kS,
            percent: Math.round(100 * HS.amount / HS.total),
            progress: `${HS.amount.toLocaleString("en-US")}/${HS.total.toLocaleString("en-US")}`
          }), !HS.done && !HS.away && HS.chips && HS.chips.length > 0 && (0, JX.jsx)(KI, {
            chips: HS.chips
          }), bS]
        })]
      })
    }
    const DI = "buildAFactory2Game:",
      wI = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      hI = {
        on: `${DI}tutorialButtonOn`,
        hud: `${DI}tutorialButtonHud`,
        off: `${DI}tutorialButtonOff`
      },
      ZI = {
        on: `${DI}tutorialPickedOn`,
        hud: `${DI}tutorialPickedHud`,
        off: `${DI}tutorialPickedOff`
      };
    class JI {
      constructor(SS, HS, gS) {
        this.commands = SS, this.quests = HS, this.toasts = gS
      }
      next() {
        const SS = function(SS) {
            return LS[(LS.indexOf(SS) + 1) % LS.length]
          }(this.quests.get().tutorial),
          HS = this.quests.setTutorial(SS);
        this.commands.send(`baf2tutorial ${SS} ${HS}`), this.toasts.show({
          baf2ToastText: [(0, AS.Qd)({
            translationKey: ZI[SS]
          }, AS.B.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function OI(SS, HS) {
      let [gS, tS] = HS;
      return SS(`${NI}${gS}`, II(tS))
    }

    function dI(SS) {
      let [HS, gS] = SS;
      return HS + JSON.stringify(gS)
    }

    function cI(SS) {
      let {
        goal: HS,
        t: gS
      } = SS;
      return HS ? (0, JX.jsx)("span", {
        className: "Baf2BookGoal",
        children: gS(`${NI}${HS}`)
      }) : null
    }

    function vI(SS) {
      let {
        view: HS,
        t: gS
      } = SS;
      if (!HS.name) return null;
      const tS = Bb(HS.rows);
      return (0, JX.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, JX.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: gS(`${NI}currentQuest`)
        }), (0, JX.jsx)("strong", {
          className: "Baf2BookTitle",
          children: OI(gS, HS.name)
        }), (0, JX.jsx)(cI, {
          goal: HS.goal,
          t: gS
        }), tS.length > 1 && (0, JX.jsx)(CI, {
          rows: tS,
          t: gS
        }), (0, JX.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: HS.rows.map((SS => (0, JX.jsx)(nI, {
            row: SS,
            view: HS,
            t: gS
          }, SS.id)))
        }), HS.reward && (0, JX.jsxs)("span", {
          className: "Baf2BookReward",
          children: [gS(`${NI}questReward`), (0, JX.jsx)(kI, {
            item: HS.reward
          }), uI(gS, HS.itemNames[HS.reward], HS.reward)]
        })]
      })
    }

    function EI(SS) {
      let {
        quest: HS,
        upcoming: gS,
        t: tS
      } = SS;
      return (0, JX.jsxs)("li", {
        className: hb()("Baf2BookQuest", {
          Done: HS[3],
          Upcoming: gS
        }),
        children: [(0, JX.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: HS[3] ? "\u2713" : "\u25cb"
        }), (0, JX.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, JX.jsx)("strong", {
            className: "Baf2BookTitle",
            children: OI(tS, HS)
          }), (0, JX.jsx)(cI, {
            goal: HS[2],
            t: tS
          })]
        })]
      })
    }

    function LI(SS) {
      let {
        done: HS,
        total: gS,
        t: tS
      } = SS;
      const bS = gS > 0 ? Math.round(100 * HS / gS) : 0,
        XS = tS(`${NI}questBookChapterProgress`, {
          done: String(HS),
          total: String(gS)
        });
      return (0, JX.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, JX.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": XS,
          "aria-valuemin": 0,
          "aria-valuemax": gS,
          "aria-valuenow": HS,
          children: (0, JX.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${bS}%`
            }
          })
        }), (0, JX.jsx)("span", {
          className: "Baf2BookProgressText",
          children: XS
        })]
      })
    }

    function YI(SS) {
      let {
        view: HS,
        tier: gS,
        quests: tS,
        t: bS
      } = SS;
      const XS = gS === HS.tier,
        xS = (null !== tS && void 0 !== tS ? tS : []).filter((SS => !SS[4])),
        NS = (null !== tS && void 0 !== tS ? tS : []).filter((SS => SS[4])),
        qS = xS.filter((SS => SS[3])).length,
        uS = XS && HS.name ? dI(HS.name) : null,
        IS = xS.findIndex((SS => !SS[3] && dI(SS) === uS));
      return (0, JX.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, JX.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, JX.jsx)("h3", {
            children: jI(bS, gS)
          }), xS.length > 0 && (0, JX.jsx)(LI, {
            done: qS,
            total: xS.length,
            t: bS
          }), XS && HS.core && (0, JX.jsx)(GI, {
            core: HS.core,
            t: bS
          })]
        }), (0, JX.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === tS && XS && (0, JX.jsx)(vI, {
            view: HS,
            t: bS
          }), xS.map(((SS, gS) => gS === IS ? (0, JX.jsx)(vI, {
            view: HS,
            t: bS
          }, dI(SS)) : (0, JX.jsx)(EI, {
            quest: SS,
            upcoming: !SS[3],
            t: bS
          }, dI(SS))))]
        }), XS && HS.side && (0, JX.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, JX.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: bS(`${NI}questSide`)
          }), (0, JX.jsx)("strong", {
            className: "Baf2BookTitle",
            children: OI(bS, HS.side.name)
          }), (0, JX.jsx)(cI, {
            goal: HS.side.goal,
            t: bS
          }), (0, JX.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, JX.jsx)(nI, {
              row: HS.side.row,
              view: HS,
              t: bS
            })
          })]
        }), NS.length > 0 && (0, JX.jsxs)(JX.Fragment, {
          children: [(0, JX.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: bS(`${NI}questBookSidesDone`)
          }), (0, JX.jsx)("ol", {
            className: "Baf2BookQuests",
            children: NS.map((SS => (0, JX.jsx)(EI, {
              quest: SS,
              upcoming: !1,
              t: bS
            }, dI(SS))))
          })]
        })]
      })
    }

    function AI(SS) {
      var HS, gS, XS;
      let {
        store: xS,
        tutorial: NS,
        close: qS
      } = SS;
      const {
        t: uS
      } = (0, db.F)(), fS = (0, tI.i)(Vb, xS.get()), kS = null !== (HS = fS.tier) && void 0 !== HS ? HS : 1, [aS, KS] = (0, tS.useState)(null), CS = (null === aS || void 0 === aS ? void 0 : aS.at) === kS ? aS.tier : kS, nS = (0, tS.useRef)(null), PS = null !== fS.chapters;
      (0, tS.useEffect)((() => {
        var SS;
        nS.current && (nS.current.scrollTop = 0);
        const HS = null === (SS = nS.current) || void 0 === SS ? void 0 : SS.querySelector(".Baf2BookQuest.Current");
        if (nS.current && HS) {
          const SS = HS.getBoundingClientRect().bottom - nS.current.getBoundingClientRect().bottom;
          SS > 0 && (nS.current.scrollTop += Math.min(SS, HS.getBoundingClientRect().top - nS.current.getBoundingClientRect().top))
        }
      }), [CS, PS]);
      const QS = null === (gS = fS.chapters) || void 0 === gS ? void 0 : gS.find((SS => {
        let [HS] = SS;
        return HS === CS
      }));
      return (0, JX.jsx)(Dx.c, {
        close: qS,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, JX.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: qI,
          children: [(0, JX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JX.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: uS(`${NI}questBookTitle`)
            }), (0, JX.jsx)(wx.p, {
              className: "Baf2BookTutorialButton",
              disabled: !fS.tutorialKnown,
              ariaLabel: uS(hI[fS.tutorial]),
              title: uS(hI[fS.tutorial]),
              onClick: () => {
                NS.next()
              },
              children: (0, JX.jsx)(cb.d, {
                name: wI[fS.tutorial]
              })
            }), (0, JX.jsx)(wx.l, {
              onClick: qS
            })]
          }), (0, JX.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": uS(`${NI}questBookChapters`),
            "data-pad-initial-area": !0,
            children: bS.slice(0, IS()).map(((SS, HS) => {
              const gS = HS + 1,
                {
                  kind: tS,
                  short: bS
                } = GS(gS),
                XS = jS(gS, kS),
                xS = XS ? uS(`${NI}coreAtomicHidden`) : jI(uS, gS);
              return (0, JX.jsx)("li", {
                children: (0, JX.jsx)("button", {
                  type: "button",
                  className: hb()({
                    Stage: "tier" !== tS,
                    Atomic: "atomic" === tS,
                    Current: gS === kS,
                    Selected: gS === CS
                  }),
                  disabled: gS > kS,
                  "aria-pressed": gS === CS,
                  "aria-label": xS,
                  title: XS ? void 0 : xS,
                  onClick: () => {
                    KS({
                      tier: gS,
                      at: kS
                    })
                  },
                  children: XS ? "?" : bS
                })
              }, SS.nameKey)
            }))
          }), (0, JX.jsxs)("div", {
            ref: nS,
            className: "Baf2BookBody",
            children: [pb(fS) && CS === kS && (0, JX.jsx)("p", {
              className: "Baf2BookEmpty",
              children: uS(`${NI}questBookAllDone`)
            }), (0, JX.jsx)(YI, {
              view: fS,
              tier: CS,
              quests: null !== (XS = null === QS || void 0 === QS ? void 0 : QS[1]) && void 0 !== XS ? XS : null,
              t: uS
            })]
          })]
        })
      })
    }
    const yI = "buildAFactory2Game:";

    function VI(SS) {
      let {
        tiers: HS,
        from: gS,
        tier: tS,
        shown: bS,
        Sa: XS
      } = SS;
      const {
        t: xS
      } = (0, db.F)(), NS = HS.map(((SS, HS) => {
        const NS = gS + HS,
          {
            kind: qS,
            short: uS
          } = GS(NS),
          IS = jS(NS, tS);
        return (0, JX.jsx)("li", {
          children: (0, JX.jsx)("button", {
            type: "button",
            className: hb()({
              Stage: "tier" !== qS,
              Silhouette: IS,
              Reached: NS <= tS,
              Current: NS === tS,
              Next: NS === tS + 1,
              Selected: NS === bS
            }),
            disabled: IS,
            "aria-pressed": NS === bS,
            "aria-label": IS ? xS(`${yI}coreAtomicHidden`) : void 0,
            title: IS ? void 0 : xS(`${yI}${SS.nameKey}`),
            onClick: () => {
              XS(NS)
            },
            children: IS ? "?" : uS
          })
        }, SS.nameKey)
      }));
      return (0, JX.jsx)(JX.Fragment, {
        children: NS
      })
    }

    function iI(SS) {
      let {
        id: HS,
        label: gS,
        tiers: tS,
        from: bS,
        ...XS
      } = SS;
      return (0, JX.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, JX.jsx)("span", {
          id: HS,
          className: "Baf2CoreLadderLabel",
          children: gS
        }), (0, JX.jsx)("ol", {
          "aria-labelledby": HS,
          children: (0, JX.jsx)(VI, {
            ...XS,
            tiers: tS,
            from: bS
          })
        })]
      })
    }

    function WI(SS) {
      const {
        t: HS
      } = (0, db.F)(), gS = bS.findIndex((SS => void 0 !== SS.stage)), tS = bS.findIndex((SS => void 0 !== SS.reactorTier)), XS = gS < 0 ? bS : bS.slice(0, gS), xS = gS < 0 ? [] : bS.slice(gS, tS < 0 ? void 0 : tS), qS = tS < 0 || !NS() ? [] : bS.slice(tS);
      return (0, JX.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, JX.jsx)(iI, {
          ...SS,
          id: "baf2CoreTiersLabel",
          label: HS(`${yI}coreTiersLabel`),
          tiers: XS,
          from: 1
        }), xS.length > 0 && (0, JX.jsx)(iI, {
          ...SS,
          id: "baf2CoreStagesLabel",
          label: HS(`${yI}coreStagesLabel`),
          tiers: xS,
          from: gS + 1
        }), qS.length > 0 && (0, JX.jsx)(iI, {
          ...SS,
          id: "baf2CoreAtomicLabel",
          label: HS(`${yI}coreAtomicLabel`),
          tiers: qS,
          from: tS + 1
        })]
      })
    }
    const zI = "buildAFactory2Game:";

    function UI(SS) {
      let {
        item: HS,
        itemNames: gS,
        children: tS
      } = SS;
      return (0, JX.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, JX.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, JX.jsx)(vb.e, {
            itemName: HS,
            amount: 0
          })
        }), (0, JX.jsx)(Eb.c, {
          text: gS[HS]
        }), tS]
      })
    }

    function pI(SS) {
      const HS = new Map;
      for (const {
          block: tS
        }
        of SS.newDeposits) {
        var gS;
        HS.set(tS, (null !== (gS = HS.get(tS)) && void 0 !== gS ? gS : 0) + 1)
      }
      return [...HS]
    }

    function sI(SS) {
      let {
        value: HS,
        label: gS,
        more: tS
      } = SS;
      return (0, JX.jsxs)("li", {
        children: [(0, JX.jsx)("strong", {
          children: HS
        }), (0, JX.jsx)("span", {
          children: gS
        }), tS > 0 && (0, JX.jsxs)("em", {
          children: ["+", tS]
        })]
      })
    }

    function BI(SS) {
      let {
        items: HS,
        itemNames: gS
      } = SS;
      const {
        t: bS
      } = (0, db.F)(), [XS, xS] = (0, tS.useState)(null), NS = null !== XS && HS.includes(XS) ? XS : null;
      return (0, JX.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, JX.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: bS(`${zI}coreRewardUnlocks`)
        }), (0, JX.jsx)("ul", {
          children: HS.map((SS => (0, JX.jsx)("li", {
            children: (0, JX.jsx)("button", {
              type: "button",
              className: hb()("Baf2PanelIcon", {
                Picked: SS === NS
              }),
              title: bX(bS, SS),
              "aria-label": bX(bS, SS),
              "aria-pressed": SS === NS,
              onClick: () => {
                xS(SS === NS ? null : SS)
              },
              children: (0, JX.jsx)(vb.e, {
                itemName: SS,
                amount: 0
              })
            })
          }, SS)))
        }), (0, JX.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== NS && (0, JX.jsxs)(JX.Fragment, {
            children: [(0, JX.jsx)(Eb.c, {
              text: gS[NS]
            }), " \xb7 ", (0, JX.jsx)(Eb.c, {
              text: gS[vS(NS)]
            })]
          }), null === NS && bS(`${zI}coreRecipeTap`)]
        })]
      })
    }

    function MI(SS) {
      var HS, gS;
      let {
        def: tS,
        tier: bS,
        itemNames: XS
      } = SS;
      const {
        t: xS
      } = (0, db.F)(), NS = bS > 1 ? CS(bS - 1) : void 0, qS = Math.round(2 * tS.islandRadius), uS = NS ? Math.round(2 * NS.islandRadius) : qS, IS = bS >= 3 ? wt(bS) : null;
      return (0, JX.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, JX.jsxs)("ul", {
          className: hb()("Baf2CoreStats", {
            Four: null !== IS
          }),
          children: [(0, JX.jsx)(sI, {
            value: `${qS}\xd7${qS}`,
            label: xS(`${zI}coreStatIsland`),
            more: qS - uS
          }), (0, JX.jsx)(sI, {
            value: String(tS.machineAllowance),
            label: xS(`${zI}coreStatMachines`),
            more: tS.machineAllowance - (null !== (HS = null === NS || void 0 === NS ? void 0 : NS.machineAllowance) && void 0 !== HS ? HS : tS.machineAllowance)
          }), (0, JX.jsx)(sI, {
            value: String(tS.beltAllowance),
            label: xS(`${zI}coreStatBelts`),
            more: tS.beltAllowance - (null !== (gS = null === NS || void 0 === NS ? void 0 : NS.beltAllowance) && void 0 !== gS ? gS : tS.beltAllowance)
          }), null !== IS && (0, JX.jsx)(sI, {
            value: String(IS),
            label: xS(`${zI}coreStatStorage`),
            more: IS - (NS ? wt(bS - 1) : IS)
          })]
        }), tS.reward && (0, JX.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, JX.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: xS(`${zI}coreRewardItem`)
          }), (0, JX.jsx)(UI, {
            item: tS.reward,
            itemNames: XS
          })]
        }), tS.newDeposits.length > 0 && (0, JX.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, JX.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: xS(tS.newDeposits.length > 1 ? `${zI}coreRewardDeposits` : `${zI}coreRewardDeposit`)
          }), pI(tS).map((SS => {
            let [HS, gS] = SS;
            return (0, JX.jsx)(UI, {
              item: HS,
              itemNames: XS,
              children: gS > 1 && ` \xd7${gS}`
            }, HS)
          }))]
        }), tS.unlocks.length > 0 && (0, JX.jsx)(BI, {
          items: tS.unlocks,
          itemNames: XS
        }), (0, JX.jsx)(FI, {
          tier: bS
        })]
      })
    }

    function FI(SS) {
      let {
        tier: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)(), tS = Gb[HS];
      if (!tS) return null;
      const bS = jb(HS, 0, 0).barrierMax !== jb(HS - 1, 0, 0).barrierMax;
      return (0, JX.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, JX.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, JX.jsx)(vb.e, {
            itemName: bS ? ub.Chestplate : qb,
            amount: 0
          })
        }), gS(`${zI}gearPerkLine`, {
          perk: gS(`${zI}${tS}`)
        })]
      })
    }

    function RI(SS, HS) {
      return null === SS ? HS : SS.value
    }

    function TI(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === SS || gS - SS.atMs >= tS ? null : bS(SS.value, HS) ? SS.armed ? null : SS : SS.armed ? SS : {
        ...SS,
        armed: !0
      }
    }

    function oI(SS, HS) {
      const gS = HS.filter((HS => {
        var gS;
        return !1 !== (null === (gS = SS.get(HS)) || void 0 === gS ? void 0 : gS.value)
      }));
      for (const [tS, bS] of SS) bS.value && !HS.includes(tS) && gS.push(tS);
      return gS
    }

    function lI(SS, HS, gS, bS) {
      const [XS, xS] = (0, tS.useState)((() => new Map)), NS = () => {
        xS((HS => function(SS, HS, gS, tS) {
          var bS;
          let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            xS = null;
          for (const [NS, qS] of SS) {
            const bS = TI(qS, HS(NS), gS, tS, XS);
            bS !== qS && (xS ??= new Map(SS), null === bS ? xS.delete(NS) : xS.set(NS, bS))
          }
          return null !== (bS = xS) && void 0 !== bS ? bS : SS
        }(HS, SS, Date.now(), gS, bS)))
      };
      (0, tS.useEffect)((() => {
        NS()
      }), [HS, gS]), (0, tS.useEffect)((() => {
        if (0 === XS.size) return;
        const SS = Math.min(...[...XS.values()].map((SS => SS.atMs))),
          HS = setTimeout(NS, Math.max(0, SS + gS - Date.now()) + 1);
        return () => {
          clearTimeout(HS)
        }
      }), [XS, HS, gS]);
      return [XS, (HS, gS) => {
        xS((tS => {
          const XS = new Map(tS);
          return XS.set(HS, function(SS, HS, gS) {
            return {
              value: SS,
              atMs: gS,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(SS, HS)
            }
          }(gS, SS(HS), Date.now(), bS)), XS
        }))
      }]
    }
    const mI = "buildAFactory2Game:";

    function eI(SS) {
      let {
        message: HS,
        itemNames: gS
      } = SS;
      const bS = px(),
        {
          t: XS
        } = (0, db.F)(),
        [xS, NS] = (0, tS.useState)(!1),
        [qS, uS] = function(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ax;
          const [gS, tS] = lI((HS => SS.includes(HS)), SS, HS, Object.is);
          return [oI(gS, SS), tS]
        }(HS.baf2CoreBankPaused),
        IS = new Set(qS),
        fS = [...HS.baf2CoreBanked];
      for (const tS of IS) fS.some((SS => {
        let [HS] = SS;
        return HS === tS
      })) || fS.push([tS, 0]);
      return 0 === fS.length ? null : (0, JX.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, JX.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": xS,
          onClick: () => {
            NS(!xS)
          },
          children: [(0, JX.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: XS(`${mI}coreBankedLater`)
          }), (0, JX.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: fS.map((SS => {
              let [HS, gS] = SS;
              const tS = IS.has(HS);
              return (0, JX.jsxs)("span", {
                className: hb()({
                  Paused: tS
                }),
                title: tS ? XS(`${mI}coreBankPausedTag`) : void 0,
                children: [(0, JX.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, JX.jsx)(vb.e, {
                    itemName: HS,
                    amount: 0
                  })
                }), gS, tS && (0, JX.jsx)(cb.d, {
                  name: "pause"
                })]
              }, HS)
            }))
          }), (0, JX.jsx)(cb.d, {
            name: xS ? "angle-up" : "angle-down"
          })]
        }), xS && (0, JX.jsxs)(JX.Fragment, {
          children: [(0, JX.jsx)("ul", {
            children: fS.map((SS => {
              let [HS, tS] = SS;
              const xS = IS.has(HS);
              return (0, JX.jsxs)("li", {
                children: [(0, JX.jsxs)(UI, {
                  item: HS,
                  itemNames: gS,
                  children: [(0, JX.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: tS
                  }), xS && (0, JX.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: XS(`${mI}coreBankPausedTag`)
                  })]
                }), (0, JX.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, JX.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === tS,
                    onClick: () => {
                      bS.send(`baf2corewithdraw ${tS} ${HS}`)
                    },
                    children: XS(`${mI}coreTake`)
                  }), (0, JX.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      bS.send(`${QS} ${HS}`), uS(HS, !xS)
                    },
                    children: XS(xS ? `${mI}coreBankResume` : `${mI}coreBankStop`)
                  })]
                })]
              }, HS)
            }))
          }), (0, JX.jsx)("p", {
            className: "Baf2CoreHint",
            children: XS(`${mI}coreBankNote`)
          })]
        })]
      })
    }
    const rI = "buildAFactory2Game:";

    function Sf(SS) {
      const HS = Math.max(0, Math.floor(SS));
      return `${Math.floor(HS/60)}:${String(HS%60).padStart(2,"0")}`
    }

    function Hf(SS) {
      let {
        item: HS
      } = SS;
      return (0, JX.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, JX.jsx)(vb.e, {
          itemName: HS,
          amount: 0
        })
      })
    }

    function gf() {
      return (0, JX.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, JX.jsx)(cb.d, {
          name: "bolt"
        })
      })
    }

    function tf(SS) {
      let {
        charge: HS,
        hint: gS,
        itemNames: tS
      } = SS;
      const bS = px(),
        {
          t: XS
        } = (0, db.F)(),
        [xS, NS, qS, uS, IS, fS, kS] = HS,
        [aS, KS] = function(SS) {
          var HS;
          let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ax,
            tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [bS, XS] = lI((() => SS), SS, gS, tS);
          return [RI(null !== (HS = bS.get("")) && void 0 !== HS ? HS : null, SS), SS => {
            XS("", SS)
          }]
        }(kS),
        jS = aS === kS ? fS : !aS,
        GS = uS >= IS,
        CS = xS.find((SS => {
          let [, HS, gS] = SS;
          return gS < .9 * HS
        }));
      let nS = `${rI}coreChargeWaiting`,
        PS = {};
      return GS ? nS = `${rI}coreChargeDone` : aS ? nS = `${rI}coreChargeStopped` : jS && gS ? (nS = `${rI}${gS[0]}`, PS = {
        item: bX(XS, gS[1])
      }) : jS && CS ? (nS = `${rI}coreChargeShort`, PS = {
        item: bX(XS, CS[0])
      }) : jS && NS > 0 && !qS ? nS = `${rI}coreChargePower` : jS && (nS = `${rI}coreChargeRunning`), (0, JX.jsxs)("div", {
        className: hb()("Baf2CoreCharge", {
          Waiting: !jS && !GS,
          Done: GS
        }),
        children: [(0, JX.jsxs)("h4", {
          children: [XS(`${rI}coreChargeTitle`), (0, JX.jsx)("span", {
            children: XS(`${rI}coreChargeProgress`, {
              done: Sf(uS),
              need: Sf(IS)
            })
          })]
        }), (0, JX.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, JX.jsx)("div", {
            style: {
              width: 100 * Math.min(uS, IS) / IS + "%"
            }
          })
        }), (0, JX.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [xS.map((SS => {
            var HS;
            let [gS, bS, xS] = SS;
            const NS = xS >= .9 * bS;
            return (0, JX.jsxs)("li", {
              className: hb()({
                Done: NS,
                Short: jS && !NS
              }),
              children: [(0, JX.jsx)(Hf, {
                item: gS
              }), (0, JX.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, JX.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, JX.jsx)(Eb.c, {
                    text: null !== (HS = tS[gS]) && void 0 !== HS ? HS : gS
                  }), (0, JX.jsx)("span", {
                    children: XS(`${rI}coreChargeItem`, {
                      now: String(xS),
                      need: String(bS)
                    })
                  })]
                }), (0, JX.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, JX.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*xS/bS)}%`
                    }
                  })
                })]
              })]
            }, gS)
          })), NS > 0 && (0, JX.jsxs)("li", {
            className: hb()("Baf2CoreChargePower", {
              Short: jS && !qS
            }),
            children: [(0, JX.jsx)(gf, {}), (0, JX.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, JX.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, JX.jsx)("span", {
                  children: XS(`${rI}coreChargePowerRow`, {
                    power: mS(NS)
                  })
                })
              })
            })]
          })]
        }), (0, JX.jsx)("p", {
          className: "Baf2CoreHint",
          children: XS(nS, PS)
        }), !GS && (jS || aS) && (0, JX.jsx)("button", {
          type: "button",
          className: hb()("Baf2CoreChargeToggle", {
            Stopped: aS
          }),
          onClick: () => {
            bS.send(wS), KS(!aS)
          },
          children: XS(aS ? `${rI}coreChargeRestart` : `${rI}coreChargeStop`)
        })]
      })
    }

    function bf(SS) {
      let {
        charge: HS,
        reached: gS,
        itemNames: tS
      } = SS;
      const {
        t: bS
      } = (0, db.F)();
      return (0, JX.jsxs)("div", {
        className: hb()("Baf2CoreCharge", {
          Done: gS
        }),
        children: [(0, JX.jsxs)("h4", {
          children: [bS(`${rI}coreChargeTitle`), (0, JX.jsx)("span", {
            children: bS(`${rI}coreChargeSpecTime`, {
              time: Sf(HS.seconds)
            })
          })]
        }), (0, JX.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [HS.items.map((SS => {
            var HS;
            let {
              item: XS,
              amount: xS
            } = SS;
            return (0, JX.jsxs)("li", {
              className: hb()({
                Done: gS
              }),
              children: [(0, JX.jsx)(Hf, {
                item: XS
              }), (0, JX.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, JX.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, JX.jsx)(Eb.c, {
                    text: null !== (HS = tS[XS]) && void 0 !== HS ? HS : XS
                  }), (0, JX.jsx)("span", {
                    children: bS(`${rI}coreChargeSpecItem`, {
                      need: String(xS)
                    })
                  })]
                })
              })]
            }, XS)
          })), HS.powerPerS > 0 && (0, JX.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, JX.jsx)(gf, {}), (0, JX.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, JX.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, JX.jsx)("span", {
                  children: bS(`${rI}coreChargePowerRow`, {
                    power: mS(HS.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const Xf = "buildAFactory2Game:";

    function xf(SS) {
      let {
        def: HS,
        reached: gS,
        banked: tS,
        itemNames: bS
      } = SS;
      const {
        t: XS
      } = (0, db.F)();
      return (0, JX.jsx)("ul", {
        className: "Baf2CoreCost",
        children: HS.cost.map((SS => {
          let {
            item: HS,
            amount: xS
          } = SS;
          const NS = gS ? 0 : tS(HS);
          return (0, JX.jsx)("li", {
            children: (0, JX.jsx)(UI, {
              item: HS,
              itemNames: bS,
              children: (0, JX.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: NS > 0 ? XS(`${Xf}coreBankedFor`, {
                  amount: String(NS),
                  total: String(xS)
                }) : `\xd7${xS}`
              })
            })
          }, HS)
        }))
      })
    }

    function Nf(SS, HS) {
      if (HS >= IS()) return SS(`${Xf}coreMaxTier`);
      const gS = uS[HS + 1];
      return gS && !gS.startsWith("upgradeCore") ? SS(`${Xf}coreGateQuest`, {
        quest: SS(`${Xf}quest_${gS}`)
      }) : SS(`${Xf}coreGateClosed`)
    }

    function qf() {
      const {
        t: SS
      } = (0, db.F)(), HS = px(), gS = (0, tS.useRef)(null), bS = (0, tS.useRef)(Date.now());
      return Tu(!0, gS), (0, JX.jsx)("div", {
        ref: gS,
        className: "Baf2CoreGrow",
        children: (0, JX.jsx)(wx.p, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - bS.current >= 600 && HS.send(PS)
          },
          children: SS(`${Xf}coreGrow`)
        })
      })
    }

    function uf(SS) {
      let {
        message: HS,
        itemNames: gS,
        next: tS
      } = SS;
      const bS = px(),
        {
          t: XS
        } = (0, db.F)(),
        xS = HS.baf2CoreTier,
        NS = HS.baf2CoreReady,
        qS = HS.baf2CoreNeeds.filter((SS => {
          let [, HS, gS, tS] = SS;
          return tS > 0 && HS < gS
        })),
        uS = HS.baf2CoreNeeds.every((SS => {
          let [, HS, gS] = SS;
          return HS >= gS
        })),
        IS = HS.baf2CoreKeep;
      return (0, JX.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, JX.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [NS && (0, JX.jsx)(qf, {}), (0, JX.jsx)("h3", {
            children: XS(`${Xf}coreBring`)
          }), (0, JX.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: HS.baf2CoreNeeds.map((SS => {
              let [HS, tS, xS, NS] = SS;
              return (0, JX.jsxs)("li", {
                className: hb()({
                  Done: tS >= xS
                }),
                children: [(0, JX.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, JX.jsx)(vb.e, {
                    itemName: HS,
                    amount: 0
                  })
                }), (0, JX.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, JX.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, JX.jsx)(Eb.c, {
                      text: gS[HS]
                    }), (0, JX.jsxs)("span", {
                      children: [tS, "/", xS]
                    })]
                  }), (0, JX.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, JX.jsx)("div", {
                      style: {
                        width: 100 * tS / xS + "%"
                      }
                    }), NS > 0 && (0, JX.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * NS / xS + "%"
                      }
                    })]
                  })]
                }), NS > 0 && tS < xS && (0, JX.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    bS.send(`${DS} ${HS}`)
                  },
                  children: XS(`${Xf}coreDeposit`, {
                    amount: String(NS)
                  })
                })]
              }, HS)
            }))
          }), HS.baf2CoreCharge && (0, JX.jsx)(tf, {
            charge: HS.baf2CoreCharge,
            hint: HS.baf2CoreChargeHint,
            itemNames: gS
          }), !NS && qS.length > 1 && (0, JX.jsx)(wx.p, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              bS.send(PS)
            },
            children: XS(`${Xf}coreHandOver`)
          }), !NS && void 0 !== IS && (0, JX.jsx)("p", {
            className: "Baf2CoreHint",
            children: XS(`${Xf}coreKeepRest`, {
              item: bX(XS, IS)
            })
          }), !NS && !uS && 0 === qS.length && void 0 === IS && (0, JX.jsx)("p", {
            className: "Baf2CoreHint",
            children: XS(`${Xf}coreNothingHeld`)
          }), (0, JX.jsx)(eI, {
            message: HS,
            itemNames: gS
          })]
        }), (0, JX.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, JX.jsx)("h3", {
            children: XS(`${Xf}coreRewards`)
          }), (0, JX.jsx)(MI, {
            def: tS,
            tier: xS + 1,
            itemNames: gS
          })]
        })]
      })
    }

    function If(SS) {
      let {
        message: HS,
        itemNames: gS,
        shown: tS
      } = SS;
      const {
        t: bS
      } = (0, db.F)(), XS = HS.baf2CoreTier, xS = CS(tS), NS = tS <= XS, qS = new Map(HS.baf2CoreBanked), uS = !nS(XS, hS(HS)) && tS === XS;
      return (0, JX.jsxs)("div", {
        className: hb()("Baf2CoreBody", {
          Locked: !NS
        }),
        children: [(0, JX.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, JX.jsx)("h3", {
            children: bS(NS ? `${Xf}coreItTook` : `${Xf}coreItNeeds`)
          }), 0 === xS.cost.length && (0, JX.jsx)("p", {
            className: "Baf2CoreHint",
            children: bS(`${Xf}coreTierStart`)
          }), xS.cost.length > 0 && (0, JX.jsx)(xf, {
            def: xS,
            reached: NS,
            banked: SS => {
              var HS;
              return function(SS, HS, gS, tS) {
                let bS = SS;
                for (let xS = HS + 2; xS <= gS; xS++) {
                  var XS;
                  const SS = CS(xS).cost.find((SS => SS.item === tS)),
                    HS = Math.min(bS, null !== (XS = null === SS || void 0 === SS ? void 0 : SS.amount) && void 0 !== XS ? XS : 0);
                  if (xS === gS) return HS;
                  bS -= HS
                }
                return 0
              }(null !== (HS = qS.get(SS)) && void 0 !== HS ? HS : 0, XS, tS, SS)
            },
            itemNames: gS
          }), xS.charge && (0, JX.jsx)(bf, {
            charge: xS.charge,
            reached: NS,
            itemNames: gS
          }), uS && (0, JX.jsxs)(JX.Fragment, {
            children: [(0, JX.jsx)("p", {
              className: "Baf2CoreHint",
              children: Nf(bS, XS)
            }), (0, JX.jsx)(eI, {
              message: HS,
              itemNames: gS
            })]
          })]
        }), (0, JX.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, JX.jsx)("h3", {
            children: bS(NS ? `${Xf}coreGave` : `${Xf}coreLockedRewards`)
          }), (0, JX.jsx)(MI, {
            def: xS,
            tier: tS,
            itemNames: gS
          })]
        })]
      })
    }

    function ff(SS, HS) {
      const {
        key: gS,
        params: tS
      } = aS(HS - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return SS(`${Xf}${gS}`, tS)
    }
    const kf = "buildAFactory2Game:",
      af = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Kf = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function jf(SS) {
      let {
        view: HS,
        close: gS,
        askIslands: bS
      } = SS;
      const {
        t: XS
      } = (0, db.F)(), [xS, NS] = (0, tS.useState)(!1);
      (0, tS.useEffect)((() => {
        if (!xS) return;
        const SS = window.setTimeout((() => {
          NS(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(SS)
        }
      }), [xS]);
      const {
        message: qS,
        itemNames: uS
      } = HS, IS = qS.baf2CoreTier, fS = CS(IS), kS = nS(IS, hS(qS)), [jS, GS] = qS.baf2CoreMachines, [PS, QS] = qS.baf2CoreBelts, DS = qS.baf2CoreStorage, wS = qS.baf2CoreReady, [ZS, JS] = (0, tS.useState)(null), OS = (null === ZS || void 0 === ZS ? void 0 : ZS.at) === IS && ZS.ready === wS ? ZS.tier : kS ? IS + 1 : IS;
      let dS = "coreTierLocked";
      OS <= IS ? dS = "coreTierReached" : OS === IS + 1 && (dS = "coreTierNext");
      const cS = XS(`${kf}${CS(OS).nameKey}`),
        vS = OS === IS + 1 ? kS : null,
        ES = aS(OS, {
          tier: dS,
          stage: af[dS],
          atomic: Kf[dS]
        }),
        LS = XS(`${kf}${ES.key}`, {
          ...ES.params,
          name: cS
        }),
        YS = aS(IS, KS),
        AS = XS(`${kf}${YS.key}`, {
          ...YS.params,
          name: XS(`${kf}${fS.nameKey}`)
        });
      return (0, JX.jsx)(Dx.c, {
        close: gS,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, JX.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, JX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JX.jsxs)("div", {
              children: [(0, JX.jsx)("h2", {
                id: "baf2CoreTitle",
                children: XS(`${kf}coreTitle`)
              }), void 0 !== qS.baf2CoreIslandName && (0, JX.jsx)("p", {
                className: "Baf2CoreIsland",
                children: qS.baf2CoreIslandName
              }), (0, JX.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, JX.jsx)("span", {
                  children: AS
                }), (0, JX.jsx)("span", {
                  className: hb()({
                    Full: jS >= GS
                  }),
                  children: XS(`${kf}coreMachineCount`, {
                    amount: String(jS),
                    total: String(GS)
                  })
                }), (0, JX.jsx)("span", {
                  className: hb()({
                    Full: PS >= QS
                  }),
                  children: XS(`${kf}coreBeltCount`, {
                    amount: String(PS),
                    total: String(QS)
                  })
                }), void 0 !== DS && (0, JX.jsx)("span", {
                  className: hb()({
                    Full: DS[0] >= DS[1]
                  }),
                  children: XS(`${kf}coreStorageCount`, {
                    amount: String(DS[0]),
                    total: String(DS[1])
                  })
                })]
              })]
            }), (0, JX.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [qS.baf2CoreIslands && (0, JX.jsx)(wx.g, {
                className: "Baf2CoreIslandsButton",
                disabled: xS,
                onClick: () => {
                  NS(!0), bS()
                },
                children: XS(`${kf}islandsOpenButton`)
              }), (0, JX.jsx)(wx.l, {
                onClick: gS
              })]
            })]
          }), (0, JX.jsx)(WI, {
            tier: IS,
            shown: OS,
            Sa: SS => {
              JS({
                tier: SS,
                at: IS,
                ready: wS
              })
            }
          }), (0, JX.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [LS, OS > IS + 1 && (0, JX.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: ff(XS, OS)
            })]
          }), 6 === OS && OS > IS && (0, JX.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: XS(`${kf}coreStagesNote`)
          }), 11 === OS && OS > IS && (0, JX.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: XS(`${kf}coreAtomicNote`)
          }), vS && (0, JX.jsx)(uf, {
            message: qS,
            itemNames: uS,
            next: vS
          }), !vS && (0, JX.jsx)(If, {
            message: qS,
            itemNames: uS,
            shown: OS
          })]
        })
      })
    }
    const Gf = {
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
    const Cf = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: qX,
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

    function nf(SS) {
      return SS.baf2DropCometOreOnly ? "dropCometOre" : SS.baf2DropCometIsotope ? "seed" === SS.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function Pf(SS) {
      let {
        message: HS,
        quests: gS,
        close: bS,
        leave: XS
      } = SS;
      const xS = px(),
        {
          t: NS
        } = (0, db.F)(),
        qS = (0, tI.i)(Vb, gS.get()),
        uS = function(SS) {
          var HS;
          if (!YS(SS.tutorial)) return null;
          const gS = SS.rows.find((SS => SS.current)),
            tS = gS ? Gf[gS.key] : void 0;
          return null !== (HS = null !== tS && void 0 !== tS ? tS : SS.side ? Gf[SS.side.row.key] : void 0) && void 0 !== HS ? HS : null
        }(qS),
        IS = null === qS.tier || fX(qS.tier),
        fS = IS ? Cf : Cf.filter((SS => {
          let {
            item: HS
          } = SS;
          return HS !== qX
        })),
        [kS, aS] = (0, tS.useState)(null),
        KS = null !== kS && void 0 !== kS ? kS : !HS.baf2DropFoundSalvage && IS,
        jS = HS.baf2DropRuinDistance,
        GS = HS.baf2DropComet,
        CS = HS.baf2DropOldWorks,
        nS = HS.baf2DropGrove,
        PS = function(SS) {
          return 2 + Number(void 0 !== SS.baf2DropComet) + Number(!!SS.baf2DropOwedComet || void 0 !== SS.baf2DropOwedWaitMinutes) + Number(void 0 !== SS.baf2DropDigDistance) + Number(void 0 !== SS.baf2DropOldWorks) + Number(void 0 !== SS.baf2DropGrove)
        }(HS),
        QS = SS => {
          xS.send(function(SS) {
            return `baf2drop ${SS}`
          }(SS)), XS()
        };
      let DS = NS("buildAFactory2Game:dropRuinNone");
      if (null !== jS) {
        let SS = HS.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        HS.baf2DropRuinOldWorks && (SS = "dropRuinOldWorks");
        const gS = void 0 === HS.baf2DropRuinCluster ? NS("buildAFactory2Game:dropRuinOpen") : NS("buildAFactory2Game:dropRuinCluster", {
          count: String(HS.baf2DropRuinCluster)
        });
        DS = `${NS(`buildAFactory2Game:${SS}`,{distance:String(jS)})} ${gS}`
      }
      let wS = NS("buildAFactory2Game:dropBelowDescription");
      void 0 !== HS.baf2DropBelowLook && (wS = NS("buildAFactory2Game:dropBelowLook", {
        look: NS(HS.baf2DropBelowLook)
      }));
      const hS = "buildAFactory2Game:wildsRegion_survivorGrove" === HS.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        ZS = DX(NS, 60 * function(SS) {
          const [HS, gS] = (0, tS.useState)((() => Date.now())), [bS, XS] = (0, tS.useState)(HS);
          return (0, tS.useEffect)((() => {
            const SS = Date.now();
            gS(SS), XS(SS)
          }), [SS]), (0, tS.useEffect)((() => {
            const SS = window.setInterval((() => {
              XS(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(SS)
            }
          }), []), Math.max(1, SS.baf2DropRenewMinutes - Math.floor((bS - HS) / 6e4))
        }(HS)),
        JS = function(SS, HS, gS) {
          return "ruin" === SS && !gS || "owed" === SS && !HS.baf2DropOwedComet ? null : SS
        }(uS, HS, null !== jS),
        OS = function(SS) {
          for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
          return hb()("Baf2DropTile", ...gS, {
            Wanted: JS === SS
          })
        };
      return (0, JX.jsx)(Dx.c, {
        close: bS,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, JX.jsxs)("section", {
          className: hb()("Baf2Panel Baf2DropMap", {
            Many: PS >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, JX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JX.jsxs)("div", {
              children: [(0, JX.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: NS("buildAFactory2Game:dropMapTitle")
              }), (0, JX.jsx)("p", {
                children: NS("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, JX.jsx)(wx.l, {
              onClick: bS
            })]
          }), (0, JX.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== GS && (0, JX.jsxs)(wx.y, {
              className: OS("comet", "Baf2DropComet"),
              onClick: () => {
                QS("comet")
              },
              children: [(0, JX.jsx)("strong", {
                children: NS("buildAFactory2Game:dropComet")
              }), (0, JX.jsx)("span", {
                children: NS(`buildAFactory2Game:${nf(HS)}`, {
                  distance: String(GS)
                })
              })]
            }), HS.baf2DropOwedComet && (0, JX.jsxs)(wx.y, {
              className: OS("owed", "Baf2DropComet"),
              onClick: () => {
                QS("owed")
              },
              children: [(0, JX.jsx)("strong", {
                children: NS("buildAFactory2Game:dropOwedComet")
              }), (0, JX.jsx)("span", {
                children: HS.baf2DropOwedIsotope ? NS("buildAFactory2Game:dropOwedIsotopeDescription") : NS("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== HS.baf2DropOwedWaitMinutes && (0, JX.jsxs)(wx.y, {
              className: OS("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, JX.jsx)("strong", {
                children: NS("buildAFactory2Game:dropOwedComet")
              }), (0, JX.jsx)("span", {
                children: NS("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(HS.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, JX.jsxs)(wx.g, {
              className: OS("below"),
              onClick: () => {
                QS("below")
              },
              children: [(0, JX.jsx)("strong", {
                children: NS("buildAFactory2Game:dropBelow")
              }), (0, JX.jsx)("span", {
                children: wS
              })]
            }), void 0 !== HS.baf2DropDigDistance && (0, JX.jsxs)(wx.u, {
              className: OS("dig"),
              onClick: () => {
                QS("dig")
              },
              children: [(0, JX.jsx)("strong", {
                children: NS("buildAFactory2Game:dropDig")
              }), (0, JX.jsx)("span", {
                children: NS("buildAFactory2Game:dropDigDescription", {
                  distance: String(HS.baf2DropDigDistance),
                  y: QX(HS.baf2DropDigY)
                })
              })]
            }), void 0 !== nS && (0, JX.jsxs)(wx.u, {
              className: OS("grove", "Baf2DropGrove"),
              onClick: () => {
                QS("grove")
              },
              children: [(0, JX.jsx)("strong", {
                children: NS("buildAFactory2Game:dropGrove")
              }), (0, JX.jsx)("span", {
                children: NS(`buildAFactory2Game:${hS}`, {
                  distance: String(nS)
                })
              })]
            }), (0, JX.jsxs)(wx.p, {
              className: OS("ruin"),
              disabled: null === jS,
              onClick: () => {
                QS("ruin")
              },
              children: [(0, JX.jsx)("strong", {
                children: NS("buildAFactory2Game:dropRuin")
              }), (0, JX.jsx)("span", {
                children: DS
              })]
            }), void 0 !== CS && (0, JX.jsxs)(wx.L, {
              className: OS("works"),
              onClick: () => {
                QS("works")
              },
              children: [(0, JX.jsx)("strong", {
                children: NS("buildAFactory2Game:dropOldWorks")
              }), (0, JX.jsx)("span", {
                children: NS("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(CS)
                })
              })]
            })]
          }), (0, JX.jsx)("p", {
            className: "Baf2DropRenew",
            children: NS("buildAFactory2Game:dropRenew", {
              time: ZS
            })
          }), (0, JX.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: KS,
            onToggle: SS => {
              SS.currentTarget.open !== KS && aS(SS.currentTarget.open)
            },
            children: [(0, JX.jsx)("summary", {
              children: NS("buildAFactory2Game:dropSalvageWhat")
            }), (0, JX.jsx)("p", {
              children: NS("buildAFactory2Game:dropSalvageIntro")
            }), (0, JX.jsx)("ul", {
              children: fS.map((SS => {
                let {
                  item: HS,
                  nameKey: gS,
                  useKey: tS,
                  params: bS
                } = SS;
                return (0, JX.jsxs)("li", {
                  children: [(0, JX.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, JX.jsx)(vb.e, {
                      itemName: HS,
                      amount: 0
                    })
                  }), (0, JX.jsxs)("span", {
                    children: [(0, JX.jsx)("strong", {
                      children: NS(gS)
                    }), ": ", NS(tS, bS)]
                  })]
                }, HS)
              }))
            })]
          })]
        })
      })
    }
    const Qf = "buildAFactory2Game:";

    function Df(SS, HS) {
      return SS.sendIslandEdit(`baf2coopleave ${HS.baf2IslandId}`)
    }

    function wf(SS) {
      let {
        card: HS,
        canRename: gS,
        done: bS,
        t: XS
      } = SS;
      const xS = px(),
        [NS, qS] = (0, tS.useState)(HS.baf2IslandName),
        uS = Du(NS),
        IS = "" === uS || wu(uS),
        fS = () => {
          !IS && gS && (uS !== HS.baf2IslandName ? bS(xS.sendIslandEdit(`baf2islandrename ${HS.baf2IslandId} ${uS}`)) : bS(null))
        },
        kS = () => {
          bS(null)
        };
      return (0, JX.jsxs)("div", {
        className: "Baf2IslandForm",
        ...Fu(kS),
        children: [(0, JX.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [XS(`${Qf}islandsRenameLabel`), (0, JX.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: NS,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Ru,
            onChange: SS => {
              qS(SS.target.value)
            },
            ...Mu(fS, kS)
          })]
        }), "" === uS && (0, JX.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: XS(`${Qf}islandsRenameEmpty`)
        }), wu(uS) && (0, JX.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: XS(`${Qf}islandsNameReserved`)
        }), (0, JX.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, JX.jsx)(wx.u, {
            disabled: IS || !gS,
            onClick: fS,
            children: XS(`${Qf}islandsRenameSave`)
          }), (0, JX.jsx)(wx.g, {
            onClick: kS,
            children: XS(`${Qf}islandsCancel`)
          })]
        })]
      })
    }

    function hf(SS) {
      let {
        card: HS,
        canDelete: gS,
        done: bS,
        t: XS
      } = SS;
      const xS = px(),
        [NS, qS] = (0, tS.useState)(""),
        uS = function(SS, HS) {
          return Du(SS).toLowerCase() === Du(HS).toLowerCase()
        }(NS, HS.baf2IslandName),
        IS = () => {
          uS && gS && bS(xS.sendIslandEdit(`baf2islanddelete ${HS.baf2IslandId}`))
        },
        fS = () => {
          bS(null)
        },
        kS = Au("name"),
        [aS, KS = ""] = XS(`${Qf}islandsDeleteConfirm`, {
          name: kS
        }).split(kS);
      return (0, JX.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...Fu(fS),
        children: [(0, JX.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, JX.jsxs)("span", {
            children: [aS, (0, JX.jsx)("strong", {
              children: HS.baf2IslandName
            }), KS]
          }), (0, JX.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: NS,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Ru,
            onChange: SS => {
              qS(SS.target.value)
            },
            ...Mu(IS, fS)
          })]
        }), Uu(HS) && (0, JX.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: XS(`${Qf}islandsDeleteLeftBack`)
        }), (0, JX.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, JX.jsx)(wx.L, {
            disabled: !uS || !gS,
            onClick: IS,
            children: XS(`${Qf}islandsDeleteForGood`)
          }), (0, JX.jsx)(wx.g, {
            onClick: fS,
            children: XS(`${Qf}islandsCancel`)
          })]
        })]
      })
    }

    function Zf(SS) {
      let {
        members: HS,
        t: gS
      } = SS;
      const tS = HS.length;
      return (0, JX.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, JX.jsxs)("span", {
          children: [1 === tS ? gS(`${Qf}islandsPlayersOne`) : gS(`${Qf}islandsPlayers`, {
            count: String(tS)
          }), " "]
        }), HS.map(((SS, HS) => (0, JX.jsxs)("span", {
          className: hb()("Baf2IslandMember", {
            Here: SS.baf2MemberHere
          }),
          title: SS.baf2MemberHere ? gS(`${Qf}islandsPlayerHere`) : void 0,
          children: [SS.baf2MemberName, HS < tS - 1 ? ", " : ""]
        }, SS.baf2MemberKey)))]
      })
    }

    function Jf(SS) {
      let {
        card: HS,
        answered: gS,
        nowMs: bS,
        t: XS
      } = SS;
      const xS = px(),
        [NS, qS] = (0, tS.useState)(new Map),
        uS = Uu(HS);
      if (!uS) return null;
      return (0, JX.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, JX.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: XS(`${Qf}islandsLeftTitle`)
        }), (0, JX.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: uS.left.map((SS => {
            const tS = SS.baf2LeftKey,
              IS = su(NS.get(tS), gS, bS),
              fS = function(SS) {
                return 1 === SS ? [`${Cu}islandsLeftItemsOne`] : [`${Cu}islandsLeftItems`, {
                  count: String(SS)
                }]
              }(SS.baf2LeftItems);
            return (0, JX.jsx)("li", {
              className: hb()("Baf2IslandPerson", {
                Pending: IS
              }),
              children: (0, JX.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, JX.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: SS.baf2LeftName
                }), (0, JX.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: XS(fS[0], fS[1])
                }), uS.claim && (0, JX.jsx)(wx.u, {
                  className: "Baf2IslandPersonButton",
                  disabled: IS,
                  onClick: () => {
                    (SS => {
                      const gS = xS.sendIslandEdit(`baf2coopclaim ${HS.baf2IslandId} ${SS}`);
                      qS((HS => new Map(HS).set(SS, {
                        atMs: Date.now(),
                        answer: gS
                      })))
                    })(tS)
                  },
                  children: XS(`${Qf}islandsClaim`)
                })]
              })
            }, tS)
          }))
        }), uS.goThere && (0, JX.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: XS(`${Qf}islandsClaimGoThere`)
        })]
      })
    }

    function Of(SS) {
      let {
        card: HS,
        view: gS,
        blocked: bS,
        maxIslands: XS,
        answered: xS,
        nowMs: NS,
        done: qS,
        openSocial: uS,
        t: IS
      } = SS;
      const fS = px(),
        [kS, aS] = (0, tS.useState)(new Map),
        [KS, jS] = (0, tS.useState)(new Map),
        [GS, CS] = (0, tS.useState)(null),
        nS = (0, tS.useRef)(null);
      mu(nS);
      const PS = HS.baf2IslandId,
        QS = HS.baf2IslandCoop,
        DS = null !== QS && void 0 !== QS && QS.baf2CoopMembers.some((SS => SS.baf2MemberKey === GS)) ? GS : null,
        wS = function(SS, HS) {
          const gS = SS.baf2IslandCoop;
          return gS && pu(gS) || null !== HS ? void 0 : SS.baf2IslandInvitable
        }(HS, bS),
        hS = function(SS, HS) {
          const gS = SS.baf2IslandCoop;
          return gS && pu(gS) ? {
            key: `${Cu}islandsCoopFull`,
            params: {
              max: String(gS.baf2CoopMax)
            }
          } : void 0 !== SS.baf2IslandInvitable && null === HS || gS && !gS.baf2CoopManageHere ? null : "degraded" === HS || "stuck" === HS ? {
            key: `${Cu}islandsInviteNotLoaded`
          } : null === HS || function(SS) {
            return "notHome" === SS || "wilds" === SS || "visiting" === SS
          }(HS) || Ou(HS) ? {
            key: `${Cu}islandsInviteGoThere`
          } : {
            key: `${Cu}islandsInviteBusy`
          }
        }(HS, bS),
        ZS = () => {
          var SS;
          CS(null), null === (SS = nS.current) || void 0 === SS || SS.focus()
        };
      return (0, JX.jsxs)("div", {
        ref: nS,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...Fu(null === DS ? qS : ZS),
        children: [QS && (0, JX.jsxs)(JX.Fragment, {
          children: [(0, JX.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: IS(`${Qf}islandsPlayersTitle`, {
              count: String(QS.baf2CoopMembers.length),
              max: String(QS.baf2CoopMax)
            })
          }), (0, JX.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: QS.baf2CoopMembers.map(((SS, HS) => {
              const tS = SS.baf2MemberKey,
                bS = su(kS.get(tS), xS, NS);
              return (0, JX.jsxs)("li", {
                className: hb()("Baf2IslandPerson", {
                  Pending: bS
                }),
                children: [(0, JX.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, JX.jsx)("span", {
                    className: hb()("Baf2IslandPersonName", {
                      Here: SS.baf2MemberHere
                    }),
                    children: SS.baf2MemberName
                  }), SS.baf2MemberHere && (0, JX.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: IS(`${Qf}islandsPlayerHere`)
                  }), 0 === HS && (0, JX.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: IS(`${Qf}islandsPlayerOwner`)
                  }), gS.remove && HS > 0 && !bS && DS !== tS && (0, JX.jsx)(wx.M, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var SS;
                      CS(tS), null === (SS = nS.current) || void 0 === SS || SS.focus()
                    },
                    children: IS(`${Qf}islandsRemove`)
                  })]
                }), DS === tS && (0, JX.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, JX.jsx)("p", {
                    children: yu(IS, `${Qf}islandsRemoveConfirm`, {
                      player: SS.baf2MemberName
                    })
                  }), (0, JX.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, JX.jsx)(wx.L, {
                      onClick: () => {
                        (SS => {
                          const HS = fS.sendIslandEdit(`baf2coopremove ${PS} ${SS.baf2MemberKey}`);
                          aS((gS => new Map(gS).set(SS.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: HS
                          }))), ZS()
                        })(SS)
                      },
                      children: IS(`${Qf}islandsRemoveYes`)
                    }), (0, JX.jsx)(wx.g, {
                      onClick: ZS,
                      children: IS(`${Qf}islandsCancel`)
                    })]
                  })]
                })]
              }, tS)
            }))
          })]
        }), (void 0 !== wS || null !== hS) && (0, JX.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: IS(`${Qf}islandsInviteTitle`)
        }), !QS && (void 0 !== wS || null !== hS) && (0, JX.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: IS(`${Qf}islandsInviteShareNote`)
        }), 0 === (null === wS || void 0 === wS ? void 0 : wS.length) && (0, JX.jsx)(df, {
          openSocial: uS,
          t: IS
        }), void 0 !== wS && wS.length > 0 && (0, JX.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: wS.map((SS => {
            const HS = !0 === SS.baf2InvitableSent || su(KS.get(SS.baf2InvitableId), xS, NS);
            return (0, JX.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, JX.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, JX.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: SS.baf2InvitableName
                }), SS.baf2InvitableFull && !HS && (0, JX.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: IS(`${Qf}islandsInviteTheirFull`, {
                    max: String(XS)
                  })
                }), (HS || !SS.baf2InvitableFull) && (0, JX.jsx)(wx.u, {
                  className: "Baf2IslandPersonButton",
                  disabled: HS,
                  onClick: () => {
                    (SS => {
                      const HS = fS.sendIslandEdit(`baf2coopinvite ${PS} ${SS}`);
                      jS((gS => new Map(gS).set(SS, {
                        atMs: Date.now(),
                        answer: HS
                      })))
                    })(SS.baf2InvitableId)
                  },
                  children: IS(HS ? `${Qf}islandsInvited` : `${Qf}islandsInvite`)
                })]
              })
            }, SS.baf2InvitableId)
          }))
        }), hS && (0, JX.jsx)(SI, {
          note: hS,
          t: IS
        }), (0, JX.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, JX.jsx)(wx.g, {
            onClick: qS,
            children: IS(`${Qf}islandsDone`)
          })
        })]
      })
    }

    function df(SS) {
      let {
        openSocial: HS,
        t: gS
      } = SS;
      return (0, JX.jsxs)(JX.Fragment, {
        children: [(0, JX.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: gS(HS ? `${Qf}islandsInviteNobody` : `${Qf}islandsInviteNobodyGuest`)
        }), HS && (0, JX.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, JX.jsx)(wx.g, {
            onClick: HS,
            children: gS("socialBar:social")
          })
        })]
      })
    }

    function vf(SS) {
      let {
        className: HS,
        text: gS,
        ConfirmButton: bS,
        confirmLabel: XS,
        canConfirm: xS,
        send: NS,
        done: qS,
        t: uS
      } = SS;
      const IS = (0, tS.useRef)(null);
      mu(IS);
      const fS = () => {
        qS(null)
      };
      return (0, JX.jsxs)("div", {
        ref: IS,
        tabIndex: -1,
        className: hb()("Baf2IslandForm", HS),
        ...Fu(fS),
        children: [(0, JX.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: gS
        }), (0, JX.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, JX.jsx)(bS, {
            disabled: !xS,
            onClick: () => {
              xS && qS(NS())
            },
            children: XS
          }), (0, JX.jsx)(wx.g, {
            onClick: fS,
            children: uS(`${Qf}islandsCancel`)
          })]
        })]
      })
    }

    function Ef(SS) {
      return "hidden" !== SS
    }

    function Lf(SS) {
      var HS, gS;
      let {
        card: bS,
        keepOwn: XS,
        blocked: xS,
        maxIslands: NS,
        serverNowMs: qS,
        nowMs: uS,
        actions: IS,
        full: fS,
        waits: kS,
        answered: aS,
        mode: KS,
        setMode: jS,
        pending: GS,
        onSent: CS,
        switchTo: nS,
        leave: PS,
        coopOn: QS,
        openSocial: DS,
        t: wS
      } = SS;
      const hS = px(),
        ZS = bS.baf2IslandActive,
        JS = ZS ? null : function(SS, HS) {
          if (SS <= 0) return null;
          const gS = HS - SS;
          if (gS < GX) return [`${Cu}islandsPlayedJustNow`];
          if (gS < nu) return [`${Cu}islandsPlayedMinutes`, {
            minutes: String(Math.floor(gS / GX))
          }];
          if (gS < Pu) return [`${Cu}islandsPlayedHours`, {
            hours: String(Math.floor(gS / nu))
          }];
          const tS = Math.floor(gS / Pu);
          return 1 === tS ? [`${Cu}islandsPlayedDay`] : [`${Cu}islandsPlayedDays`, {
            days: String(tS)
          }]
        }(bS.baf2IslandLastPlayedMs, qS),
        OS = void 0 === (dS = bS.baf2IslandItems) ? null : 0 === dS ? [`${Cu}islandsItemsNone`] : 1 === dS ? [`${Cu}islandsItemsOne`] : [`${Cu}islandsItems`, {
          count: String(dS)
        }];
      var dS;
      const cS = function(SS) {
          return SS ? 1 === SS ? [`${Cu}islandsWaitingOne`] : [`${Cu}islandsWaiting`, {
            count: String(SS)
          }] : null
        }(bS.baf2IslandWaiting),
        vS = bS.baf2IslandUnreadable,
        ES = bS.baf2IslandCoop,
        LS = zu(bS, IS, XS, fS, QS, xS),
        YS = (0, tS.useRef)(null);
      Tu(null !== KS, YS);
      const AS = () => {
          var SS;
          jS(null), null === (SS = YS.current) || void 0 === SS || SS.focus()
        },
        yS = (SS, HS) => {
          AS(), null !== SS && CS(SS, HS)
        },
        VS = (SS, HS) => wS(`${Qf}${SS}`, {
          time: DX(wS, HS)
        });
      return (0, JX.jsxs)("li", {
        ref: YS,
        tabIndex: -1,
        className: hb()("Baf2IslandCard", {
          Active: ZS,
          Pending: GS,
          Shared: void 0 !== ES
        }),
        children: [(0, JX.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, JX.jsx)("strong", {
            className: "Baf2IslandName",
            children: bS.baf2IslandName
          }), ZS && (0, JX.jsx)("span", {
            className: "Baf2IslandBadge",
            children: wS(`${Qf}islandsOnThis`)
          }), ES && (0, JX.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: wS(`${Qf}islandsShared`)
          })]
        }), "member" === (null === ES || void 0 === ES ? void 0 : ES.baf2CoopRole) && (0, JX.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: yu(wS, `${Qf}islandsSharedBy`, {
            owner: ES.baf2CoopOwner
          })
        }), void 0 !== vS && (0, JX.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: wS("newer" === vS ? `${Qf}islandsUnreadable` : `${Qf}islandsDamaged`)
        }), "corrupt" === vS && fS && (0, JX.jsx)("p", {
          className: "Baf2IslandStats",
          children: wS(`${Qf}islandsDamagedFull`)
        }), void 0 === vS && (0, JX.jsxs)(JX.Fragment, {
          children: [(0, JX.jsx)(ru, {
            tier: bS.baf2IslandTier,
            t: wS
          }), (0, JX.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, JX.jsx)("span", {
              children: 1 === bS.baf2IslandQuestsDone ? wS(`${Qf}islandsQuestsDoneOne`) : wS(`${Qf}islandsQuestsDone`, {
                count: String(bS.baf2IslandQuestsDone)
              })
            }), (0, JX.jsx)("span", {
              children: 1 === bS.baf2IslandMachines ? wS(`${Qf}islandsMachinesOne`) : wS(`${Qf}islandsMachines`, {
                count: String(bS.baf2IslandMachines)
              })
            }), OS && (0, JX.jsx)("span", {
              children: wS(OS[0], OS[1])
            }), cS && (0, JX.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: wS(cS[0], cS[1])
            }), JS && (0, JX.jsx)("span", {
              children: wS(JS[0], JS[1])
            })]
          })]
        }), ES && void 0 === ES.baf2CoopState && "people" !== KS && (0, JX.jsx)(Zf, {
          members: ES.baf2CoopMembers,
          t: wS
        }), null === KS && (0, JX.jsx)(Jf, {
          card: bS,
          answered: aS,
          nowMs: uS,
          t: wS
        }), LS.note && (0, JX.jsx)(SI, {
          note: LS.note,
          className: hb()({
            Unreachable: void 0 !== (null === ES || void 0 === ES ? void 0 : ES.baf2CoopState)
          }),
          t: wS
        }), "rename" === KS && (0, JX.jsx)(wf, {
          card: bS,
          canRename: "enabled" === LS.rename,
          done: yS,
          t: wS
        }), "delete" === KS && (0, JX.jsx)(hf, {
          card: bS,
          canDelete: "enabled" === LS.delete,
          done: SS => {
            yS(SS, ES ? "delete" : void 0)
          },
          t: wS
        }), "people" === KS && (0, JX.jsx)(Of, {
          card: bS,
          view: LS,
          blocked: xS,
          maxIslands: NS,
          answered: aS,
          nowMs: uS,
          done: AS,
          openSocial: DS,
          t: wS
        }), "leave" === KS && (0, JX.jsx)(vf, {
          className: "Leave",
          text: yu(wS, `${Qf}islandsLeaveConfirm`, {
            island: bS.baf2IslandName,
            owner: null !== (HS = null === (gS = bS.baf2IslandCoop) || void 0 === gS ? void 0 : gS.baf2CoopOwner) && void 0 !== HS ? HS : ""
          }),
          ConfirmButton: wx.L,
          confirmLabel: wS(`${Qf}islandsLeaveYes`),
          canConfirm: "enabled" === LS.leave,
          send: () => Df(hS, bS),
          done: SS => {
            yS(SS, "leave"), null !== SS && ZS && PS()
          },
          t: wS
        }), "unshare" === KS && (0, JX.jsx)(vf, {
          className: "Unshare",
          text: yu(wS, `${Qf}islandsStopSharingConfirm`, {
            island: bS.baf2IslandName
          }),
          ConfirmButton: wx.u,
          confirmLabel: wS(`${Qf}islandsStopSharing`),
          canConfirm: "enabled" === LS.unshare,
          send: () => hS.sendIslandEdit(`baf2coopunshare ${bS.baf2IslandId}`),
          done: SS => {
            yS(SS), null !== SS && PS()
          },
          t: wS
        }), null === KS && !GS && (0, JX.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": bS.baf2IslandName,
          children: [Ef(LS.switch) && (0, JX.jsx)(wx.u, {
            disabled: "enabled" !== LS.switch,
            onClick: nS,
            children: "tryAgain" === LS.switchLabel ? wS(`${Qf}islandsTryAgain`) : kS.switch > 0 ? VS("islandsSwitchIn", kS.switch) : wS(`${Qf}islandsSwitch`)
          }), Ef(LS.rename) && (0, JX.jsx)(wx.g, {
            disabled: "enabled" !== LS.rename,
            onClick: () => {
              jS("rename")
            },
            children: wS(`${Qf}islandsRename`)
          }), Ef(LS.people) && (0, JX.jsx)(wx.g, {
            disabled: "enabled" !== LS.people,
            onClick: () => {
              jS("people")
            },
            children: wS("players" === LS.peopleLabel ? `${Qf}islandsPlayersButton` : `${Qf}islandsInviteButton`)
          }), Ef(LS.unshare) && (0, JX.jsx)(wx.g, {
            disabled: "enabled" !== LS.unshare,
            onClick: () => {
              jS("unshare")
            },
            children: wS(`${Qf}islandsStopSharing`)
          }), Ef(LS.dismiss) && (0, JX.jsx)(wx.g, {
            disabled: "enabled" !== LS.dismiss,
            onClick: () => {
              CS(Df(hS, bS), "dismiss"), ZS && PS()
            },
            children: wS(`${Qf}islandsDismiss`)
          }), Ef(LS.leave) && (0, JX.jsx)(wx.M, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== LS.leave,
            onClick: () => {
              jS("leave")
            },
            children: ZS && kS.switch > 0 ? VS("islandsLeaveIn", kS.switch) : wS(`${Qf}islandsLeave`)
          }), Ef(LS.delete) && (0, JX.jsx)(wx.M, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== LS.delete,
            onClick: () => {
              jS("delete")
            },
            children: kS.change > 0 && LS.deleteWaits ? VS("islandsDeleteIn", kS.change) : wS(`${Qf}islandsDelete`)
          })]
        })]
      })
    }
    const Yf = "buildAFactory2Game:";

    function Af(SS) {
      let {
        invite: HS,
        actions: gS,
        full: bS,
        maxIslands: XS,
        waitSeconds: xS,
        focus: NS,
        focused: qS,
        join: uS,
        decline: IS,
        t: fS
      } = SS;
      const [kS, aS] = (0, tS.useState)(!1), KS = (0, tS.useRef)(null);
      Tu(kS, KS), (0, tS.useEffect)((() => {
        var SS;
        NS && (aS(!0), null === (SS = KS.current) || void 0 === SS || SS.focus(), qS())
      }), [NS, qS]);
      const jS = function(SS, HS, gS, tS, bS) {
          return gS ? {
            join: !1,
            note: {
              key: `${Cu}islandsJoinTooMany`,
              params: {
                max: String(tS)
              }
            }
          } : SS.baf2InvitePlayers >= bS ? {
            join: !1,
            note: {
              key: `${Cu}islandsJoinFull`
            }
          } : {
            join: HS.switch,
            note: null
          }
        }(HS, gS, bS, XS, 10),
        GS = HS.baf2InviteIsland,
        CS = HS.baf2InvitePlayers,
        nS = () => {
          var SS;
          aS(!1), null === (SS = KS.current) || void 0 === SS || SS.focus()
        },
        PS = xS > 0 && null === jS.note ? fS(`${Yf}islandsJoinIn`, {
          time: DX(fS, xS)
        }) : fS(`${Yf}islandsJoin`);
      return (0, JX.jsxs)("li", {
        ref: KS,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...kS ? Fu(nS) : {},
        children: [(0, JX.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, JX.jsx)("strong", {
            className: "Baf2IslandName",
            children: GS
          })
        }), (0, JX.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: yu(fS, `${Yf}islandsInvitedBy`, {
            owner: HS.baf2InviteOwner
          })
        }), (0, JX.jsx)(ru, {
          tier: HS.baf2InviteTier,
          t: fS
        }), (0, JX.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, JX.jsx)("span", {
            children: 1 === CS ? fS(`${Yf}islandsPlayersCountOne`) : fS(`${Yf}islandsPlayersCount`, {
              count: String(CS)
            })
          })
        }), jS.note && (0, JX.jsx)(SI, {
          note: jS.note,
          t: fS
        }), kS && (0, JX.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: yu(fS, `${Yf}islandsJoinConfirm`, {
            island: GS
          })
        }), !kS && (0, JX.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": GS,
          children: [(0, JX.jsx)(wx.u, {
            disabled: !jS.join,
            onClick: () => {
              var SS;
              aS(!0), null === (SS = KS.current) || void 0 === SS || SS.focus()
            },
            children: PS
          }), (0, JX.jsx)(wx.g, {
            onClick: IS,
            children: fS(`${Yf}islandsDecline`)
          })]
        }), kS && (0, JX.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, JX.jsx)(wx.u, {
            disabled: !jS.join,
            onClick: uS,
            children: fS(`${Yf}islandsJoinYes`)
          }), (0, JX.jsx)(wx.g, {
            onClick: nS,
            children: fS(`${Yf}islandsCancel`)
          })]
        })]
      })
    }

    function yf(SS) {
      let {
        invites: HS,
        actions: gS,
        full: tS,
        maxIslands: bS,
        waitSeconds: XS,
        focus: xS,
        focused: NS,
        leave: qS,
        declined: uS,
        t: IS
      } = SS;
      const fS = px();
      return (0, JX.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, JX.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: IS(`${Yf}islandsInvitesTitle`)
        }), (0, JX.jsx)("ul", {
          className: "Baf2IslandCards",
          children: HS.map((SS => {
            const HS = SS.baf2InviteId;
            return (0, JX.jsx)(Af, {
              invite: SS,
              actions: gS,
              full: tS,
              maxIslands: bS,
              waitSeconds: XS,
              focus: xS === HS,
              focused: NS,
              join: () => {
                fS.send(`baf2coopaccept ${HS}`), qS()
              },
              decline: () => {
                fS.send(`baf2coopdecline ${HS}`), uS(HS)
              },
              t: IS
            }, HS)
          }))
        })]
      })
    }
    const Vf = "buildAFactory2Game:";

    function Wf(SS) {
      let {
        cards: HS,
        activeName: gS,
        canStart: bS,
        waitSeconds: XS,
        leave: xS,
        t: NS
      } = SS;
      const qS = px(),
        [uS, IS] = (0, tS.useState)(!1),
        [fS, kS] = (0, tS.useState)(""),
        aS = (0, tS.useRef)(null);
      Tu(uS, aS), (0, tS.useEffect)((() => {
        var SS;
        uS && (null === (SS = aS.current) || void 0 === SS || SS.focus())
      }), [uS]);
      const KS = hu(HS),
        jS = Du(fS),
        GS = wu(jS),
        CS = () => {
          bS && !GS && (qS.send("" === jS || jS === KS ? oS : `${oS} ${jS}`), xS())
        },
        nS = () => {
          var SS;
          IS(!1), null === (SS = aS.current) || void 0 === SS || SS.focus()
        };
      return (0, JX.jsxs)("li", {
        ref: aS,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...uS ? Fu(nS) : {},
        children: [(0, JX.jsx)("strong", {
          className: "Baf2IslandName",
          children: NS(`${Vf}islandsNewTitle`)
        }), !uS && (0, JX.jsx)("p", {
          className: "Baf2IslandStats",
          children: NS(`${Vf}islandsNewNote`)
        }), uS && (0, JX.jsxs)(JX.Fragment, {
          children: [(0, JX.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: yu(NS, `${Vf}islandsNewConfirm`, {
              name: gS
            })
          }), (0, JX.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [NS(`${Vf}islandsNewNameLabel`), (0, JX.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: fS,
              placeholder: KS,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: Ru,
              onChange: SS => {
                kS(SS.target.value)
              },
              ...Mu(CS, nS)
            })]
          }), GS && (0, JX.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: NS(`${Vf}islandsNameReserved`)
          })]
        }), (0, JX.jsxs)("div", {
          className: hb()("Baf2IslandButtons", {
            Stacked: uS
          }),
          children: [(0, JX.jsx)(wx.u, {
            disabled: !bS || uS && GS,
            onClick: () => {
              if (!uS) return kS(KS), void IS(!0);
              CS()
            },
            children: XS > 0 ? NS(`${Vf}islandsNewIn`, {
              time: DX(NS, XS)
            }) : NS(uS ? `${Vf}islandsNewConfirmButton` : `${Vf}islandsNew`)
          }), uS && (0, JX.jsx)(wx.g, {
            onClick: nS,
            children: NS(`${Vf}islandsCancel`)
          })]
        })]
      })
    }

    function zf(SS) {
      var HS, gS;
      let {
        message: bS,
        arrivedAtMs: XS,
        close: xS,
        leave: NS,
        openSocial: qS
      } = SS;
      const uS = px(),
        {
          t: IS
        } = (0, db.F)(),
        fS = eu(1e3),
        [kS, aS] = (0, tS.useState)(null),
        [KS, jS] = (0, tS.useState)(new Map),
        [GS, CS] = (0, tS.useState)(new Set),
        nS = bS.baf2IslandCards,
        PS = function(SS, HS, gS, tS) {
          return (null !== SS && void 0 !== SS ? SS : []).filter((SS => HS + SS.baf2InviteLeftMs > gS && !tS.has(SS.baf2InviteId)))
        }(bS.baf2IslandsInvites, XS, fS, GS),
        QS = PS.map((SS => SS.baf2InviteId)).join(" "),
        DS = (0, tS.useRef)(null),
        wS = ou(DS);
      lu(), (0, tS.useEffect)((() => {
        var SS, HS;
        null !== (SS = DS.current) && void 0 !== SS && SS.contains(document.activeElement) || (null === (HS = DS.current) || void 0 === HS || HS.focus())
      }), [bS, QS]), (0, tS.useEffect)((() => {
        jS((SS => function(SS, HS, gS, tS) {
          const bS = new Map;
          for (const XS of HS) {
            const HS = SS.get(XS.baf2IslandId);
            HS && (void 0 !== HS.untilGone || tS < HS.answer) && Eu(HS, XS, gS) && bS.set(XS.baf2IslandId, HS)
          }
          return bS.size === SS.size ? SS : bS
        }(SS, bS.baf2IslandCards, Date.now(), bS.baf2IslandsAnswered)))
      }), [bS]);
      const hS = Qu(XS, bS.baf2IslandsWaitMs, fS),
        ZS = bS.baf2IslandsBlocked,
        JS = du(ZS, hS),
        OS = function(SS, HS) {
          const gS = du(SS, 0);
          return {
            switch: gS.switch ? HS : 0,
            change: gS.change ? HS : 0
          }
        }(ZS, hS),
        dS = nS.length >= bS.baf2IslandsMax,
        cS = nS.length > 0,
        vS = function(SS, HS, gS) {
          return SS + Math.max(0, gS - HS)
        }(bS.baf2IslandsNowMs, XS, fS),
        ES = null !== (HS = null === (gS = nS.find((SS => SS.baf2IslandActive))) || void 0 === gS ? void 0 : gS.baf2IslandName) && void 0 !== HS ? HS : "",
        LS = function(SS) {
          const HS = SS.filter(Wu).length;
          return HS <= 1 && HS < SS.length
        }(nS),
        YS = !0 === bS.baf2IslandsCoop,
        AS = function(SS, HS) {
          const gS = SS.find((SS => SS.baf2IslandActive)),
            tS = null === gS || void 0 === gS ? void 0 : gS.baf2IslandCoop;
          return gS && "member" === (null === tS || void 0 === tS ? void 0 : tS.baf2CoopRole) ? {
            key: `${Cu}islandsKeepOwnMember`,
            names: {
              owner: tS.baf2CoopOwner,
              island: gS.baf2IslandName
            }
          } : {
            key: HS ? `${Cu}islandsKeepOwn` : `${Cu}islandsKeepOwnSolo`
          }
        }(nS, YS),
        [yS, VS] = (0, tS.useState)(null);
      (0, tS.useEffect)((() => {
        void 0 !== bS.baf2IslandsFocusInvite && VS(bS.baf2IslandsFocusInvite)
      }), [bS]);
      const iS = (0, tS.useCallback)((() => {
          VS(null)
        }), []),
        WS = kS ? nS.find((SS => SS.baf2IslandId === kS.id)) : void 0,
        zS = kS && WS && "hidden" !== zu(WS, JS, LS, dS, YS, ZS)[kS.mode] ? kS : null;
      return (0, JX.jsx)(Dx.c, {
        close: xS,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, JX.jsxs)("section", {
          ref: DS,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: wS ? {
            marginTop: `${wS.marginTop}px`,
            maxHeight: `${wS.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, JX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JX.jsxs)("div", {
              children: [(0, JX.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: IS(`${Vf}islandsTitle`)
              }), cS && (0, JX.jsx)("p", {
                children: IS(`${Vf}islandsSubtitle`, {
                  count: String(nS.length),
                  max: String(bS.baf2IslandsMax)
                })
              })]
            }), (0, JX.jsx)(wx.l, {
              ariaLabel: IS(`${Vf}islandsClose`),
              onClick: xS
            })]
          }), (0, JX.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== ZS && (0, JX.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: yu(IS, Zu(ZS, Ju(nS)), {
                island: ES
              })
            }), cS && PS.length > 0 && (0, JX.jsx)(yf, {
              invites: PS,
              actions: JS,
              full: dS,
              maxIslands: bS.baf2IslandsMax,
              waitSeconds: OS.switch,
              focus: yS,
              focused: iS,
              leave: NS,
              declined: SS => {
                CS((HS => new Set(HS).add(SS)))
              },
              t: IS
            }), cS && (0, JX.jsxs)(JX.Fragment, {
              children: [dS && (0, JX.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: IS(`${Vf}islandsFull`, {
                  max: String(bS.baf2IslandsMax)
                })
              }), (0, JX.jsx)("p", {
                className: "Baf2IslandsNote",
                children: yu(IS, AS.key, AS.names)
              }), (0, JX.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [nS.map((SS => {
                  const HS = SS.baf2IslandId;
                  return (0, JX.jsx)(Lf, {
                    card: SS,
                    keepOwn: LS,
                    coopOn: YS,
                    openSocial: qS,
                    blocked: ZS,
                    maxIslands: bS.baf2IslandsMax,
                    serverNowMs: vS,
                    nowMs: fS,
                    actions: JS,
                    full: dS,
                    waits: OS,
                    answered: bS.baf2IslandsAnswered,
                    mode: (null === zS || void 0 === zS ? void 0 : zS.id) === HS ? zS.mode : null,
                    setMode: SS => {
                      aS(null === SS ? null : {
                        id: HS,
                        mode: SS
                      })
                    },
                    pending: Eu(KS.get(HS), SS, fS),
                    onSent: (gS, tS) => {
                      jS((bS => {
                        const XS = {
                          atMs: Date.now(),
                          from: SS.baf2IslandName,
                          answer: gS
                        };
                        return new Map(bS).set(HS, tS ? {
                          ...XS,
                          untilGone: tS
                        } : XS)
                      }))
                    },
                    leave: NS,
                    switchTo: () => {
                      uS.send(`baf2islandswitch ${HS}`), NS()
                    },
                    t: IS
                  }, HS)
                })), !dS && (0, JX.jsx)(Wf, {
                  cards: nS,
                  activeName: ES,
                  canStart: JS.change,
                  waitSeconds: OS.change,
                  leave: NS,
                  t: IS
                })]
              })]
            })]
          })]
        })
      })
    }
    var Uf = gS(5182);
    const pf = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        yS: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      sf = Object.keys(pf),
      Bf = new Set([...Object.keys(oH), ...[...AH.Press.recipes, ...AH["Wire Mill"].recipes].map((SS => SS.output))]),
      Mf = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      Ff = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      Rf = / Bar$|Alloy$/,
      Tf = /Porkchop|Beef|Mutton|Venison|Steak/,
      of = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const lf = (0, tS.memo)((function(SS) {
      let {
        item: HS,
        name: gS,
        amount: tS,
        selected: bS,
        small: XS,
        onPick: xS
      } = SS;
      return (0, JX.jsxs)("button", {
        type: "button",
        className: hb()("Baf2TermTile", {
          On: bS,
          Small: XS
        }),
        "aria-label": `${gS}: ${tS}`,
        "aria-pressed": bS,
        onClick: () => {
          xS(HS)
        },
        children: [(0, JX.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, JX.jsx)(vb.e, {
            itemName: HS,
            amount: 0
          })
        }), (0, JX.jsx)("span", {
          className: "Baf2TermCount",
          children: PX(tS, 1e4)
        }), !XS && (0, JX.jsx)("span", {
          className: "Baf2TermName",
          children: gS
        })]
      })
    }));

    function mf(SS) {
      let {
        store: HS,
        close: gS,
        send: bS
      } = SS;
      const {
        t: XS
      } = (0, db.F)(), {
        isTouchScreen: xS
      } = (0, Qb.m)(["isTouchScreen"]);
      ! function(SS) {
        const [HS, gS] = (0, tS.useState)(SS.version);
        (0, tS.useEffect)((() => (gS(SS.version), SS.subscribe((() => {
          gS(SS.version)
        })))), [SS])
      }(HS);
      const [NS, qS] = (0, tS.useState)("all"), [uS, IS] = (0, tS.useState)(!1), [fS, kS] = (0, tS.useState)(""), [aS, KS] = (0, tS.useState)(""), [jS, GS] = (0, tS.useState)(null), [CS, nS] = (0, tS.useState)(!1), [PS, QS, DS] = function() {
        const SS = (0, tS.useRef)(null),
          [HS, gS] = (0, tS.useState)(!1),
          bS = () => {
            const HS = SS.current;
            gS(null !== HS && HS.scrollLeft + HS.clientWidth < HS.scrollWidth - 1)
          };
        return (0, tS.useEffect)(bS), (0, tS.useEffect)((() => {
          const HS = SS.current;
          if (!HS) return;
          const gS = new ResizeObserver(bS);
          return gS.observe(HS), () => {
            gS.disconnect()
          }
        }), []), [SS, HS, bS]
      }(), wS = (0, tS.useMemo)((() => new Map), [XS]), hS = SS => {
        let HS = wS.get(SS);
        return void 0 === HS && (HS = function(SS, HS) {
          const gS = /^(.+) \((.+)\)$/.exec(SS);
          return gS ? HS(gS[2], gS[1]) : SS
        }(bX(XS, SS), ((SS, HS) => XS("buildAFactory2Game:terminalTileKind", {
          kind: SS,
          base: HS
        }))), wS.set(SS, HS)), HS
      }, ZS = HS.isReadOnly(), JS = CS && !ZS, OS = HS.recent(), dS = HS.items(), cS = aS.trim().toLowerCase(), vS = JS ? HS.heldItems(jS) : ("recent" === NS ? OS : dS).filter((SS => {
        const HS = hS(SS);
        return ("all" === NS || "recent" === NS || function(SS) {
          return kX(SS) ? "farm" : Mf.test(SS) ? "nuclear" : Rf.test(SS) ? "bars" : Tf.test(SS) ? "farm" : Ff.test(SS) ? "yS" : Bf.has(SS) ? "parts" : of.test(SS) ? "farm" : "other"
        }(SS) === NS) && ("" === cS || HS.toLowerCase().includes(cS)) && ("" === fS || HS.toUpperCase().startsWith(fS))
      })), ES = new Set(dS.map((SS => hS(SS).charAt(0).toUpperCase()))), LS = SS => JS ? HS.heldAmount(SS) : HS.amount(SS), YS = !JS && "recent" !== NS && OS.length > 0, AS = function(SS, HS) {
        return null !== SS && HS.includes(SS) ? SS : null
      }(jS, YS ? [...vS, ...OS] : vS), yS = null === AS ? 0 : HS.amount(AS), VS = null === AS ? 0 : LS(AS), iS = (0, tS.useCallback)((SS => {
        GS((HS => HS === SS ? null : SS))
      }), []), WS = SS => VS > 0 || JS && null === AS && "fill" === SS && vS.length > 0, zS = JS ? [
        ["one", XS("buildAFactory2Game:terminalStoreOne")],
        ["stack", XS("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", XS(null === AS ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", XS("buildAFactory2Game:terminalTakeOne")],
        ["stack", XS("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", XS("buildAFactory2Game:terminalFill")]
      ], US = JS ? XS("buildAFactory2Game:terminalStoreEmpty") : "" !== fS ? XS("buildAFactory2Game:terminalEmptyLetter", {
        letter: fS
      }) : "" !== cS ? XS("buildAFactory2Game:terminalEmptySearch", {
        query: aS
      }) : XS("buildAFactory2Game:terminalEmpty");
      return (0, JX.jsx)(Dx.c, {
        close: gS,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, JX.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, JX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JX.jsxs)("div", {
              children: [(0, JX.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: XS(HS.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, JX.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, JX.jsx)("span", {
                  className: hb()({
                    Off: JS
                  }),
                  children: XS("buildAFactory2Game:terminalSubtitle", {
                    count: String(HS.siloCount())
                  })
                }), !ZS && (0, JX.jsx)("span", {
                  className: hb()({
                    Off: !JS
                  }),
                  children: XS("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !ZS && (0, JX.jsx)(Uf.d, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: XS("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: XS("buildAFactory2Game:terminalModeStore")
              }],
              value: JS ? "store" : "take",
              onChange: SS => {
                nS("store" === SS), GS(null)
              },
              ariaLabel: XS("buildAFactory2Game:terminalModes")
            }), (0, JX.jsx)(wx.l, {
              onClick: gS
            })]
          }), (0, JX.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, JX.jsxs)("div", {
              className: hb()("Baf2TermTools", {
                Hidden: JS
              }),
              children: [(0, JX.jsx)("div", {
                ref: PS,
                className: hb()("Baf2TermChips", {
                  MoreRight: QS
                }),
                onScroll: DS,
                children: uS ? (0, JX.jsxs)(JX.Fragment, {
                  children: [(0, JX.jsx)("button", {
                    type: "button",
                    "aria-label": XS("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      IS(!1), kS("")
                    },
                    children: "\u2190"
                  }), [...ES].sort().map((SS => (0, JX.jsx)("button", {
                    type: "button",
                    className: hb()({
                      On: fS === SS
                    }),
                    onClick: () => {
                      kS(fS === SS ? "" : SS)
                    },
                    children: SS
                  }, SS)))]
                }) : (0, JX.jsxs)(JX.Fragment, {
                  children: [(0, JX.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      IS(!0)
                    },
                    children: XS("buildAFactory2Game:terminalLetters")
                  }), sf.map((SS => (0, JX.jsx)("button", {
                    type: "button",
                    className: hb()({
                      On: NS === SS
                    }),
                    onClick: () => {
                      qS(SS)
                    },
                    children: XS(pf[SS])
                  }, SS)))]
                })
              }), !xS && (0, JX.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: aS,
                placeholder: XS("buildAFactory2Game:terminalSearch"),
                "aria-label": XS("buildAFactory2Game:terminalSearch"),
                onChange: SS => {
                  KS(SS.target.value)
                },
                onKeyDown: SS => {
                  SS.stopPropagation()
                }
              }), (0, JX.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": XS("buildAFactory2Game:terminalResort"),
                title: XS("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  HS.resort()
                },
                children: "\u21c5"
              })]
            }), YS && (0, JX.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, JX.jsx)("span", {
                children: XS(pf.recent)
              }), OS.map((SS => (0, JX.jsx)(lf, {
                item: SS,
                name: hS(SS),
                amount: HS.amount(SS),
                selected: AS === SS,
                small: !0,
                onPick: iS
              }, SS)))]
            }), (0, JX.jsx)("div", {
              className: "Baf2TermTiles",
              children: vS.length > 0 ? vS.map((SS => (0, JX.jsx)(lf, {
                item: SS,
                name: hS(SS),
                amount: LS(SS),
                selected: AS === SS,
                onPick: iS
              }, SS))) : (0, JX.jsx)("p", {
                className: "Baf2TermEmpty",
                children: US
              })
            }), (0, JX.jsxs)("div", {
              className: hb()("Baf2TermActions", {
                Hidden: JS && 0 === vS.length
              }),
              children: [(0, JX.jsx)("span", {
                className: "Baf2TermPicked",
                children: ZS ? (0, JX.jsxs)(JX.Fragment, {
                  children: [null !== AS && yS > 0 ? hS(AS) : XS("buildAFactory2Game:terminalVisiting"), (0, JX.jsx)("small", {
                    children: XS("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== AS ? (0, JX.jsxs)(JX.Fragment, {
                  children: [hS(AS), (0, JX.jsx)("small", {
                    children: XS("buildAFactory2Game:terminalStored", {
                      amount: yS.toLocaleString()
                    })
                  })]
                }) : XS(JS ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !ZS && zS.map((SS => {
                let [gS, tS] = SS;
                const XS = "fill" === gS ? wx.p : wx.g;
                return (0, JX.jsx)(XS, {
                  className: "Baf2TermTake",
                  disabled: !WS(gS),
                  onClick: () => {
                    (SS => {
                      WS(SS) && bS(null === AS ? HS.putAll() : JS ? HS.put(SS, AS) : HS.take(SS, AS))
                    })(gS)
                  },
                  children: tS
                }, gS)
              }))]
            })]
          })]
        })
      })
    }

    function ef(SS) {
      let {
        kind: HS,
        icon: gS,
        label: tS,
        number: bS,
        preview: XS,
        note: xS,
        tone: NS = null,
        share: qS,
        onExplain: uS
      } = SS;
      return (0, JX.jsxs)("button", {
        type: "button",
        className: hb()("NxLane", HS, {
          Warn: "warn" === NS,
          Danger: "danger" === NS
        }),
        onClick: uS,
        children: [(0, JX.jsxs)("span", {
          className: "NxLaneHead",
          children: [gS, (0, JX.jsx)("span", {
            className: "NxLaneLabel",
            children: tS
          })]
        }), (0, JX.jsxs)("span", {
          className: "NxLaneNum",
          children: [bS, XS && (0, JX.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", XS]
          })]
        }), (0, JX.jsx)("span", {
          className: "NxLaneNote",
          children: xS
        }), void 0 !== qS && (0, JX.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, qS)) + "%"
          }
        })]
      })
    }

    function rf(SS) {
      let {
        kind: HS,
        step: gS,
        short: tS,
        planned: bS
      } = SS;
      return (0, JX.jsx)("i", {
        className: hb()("NxPipe", HS, `Step${gS}`, {
          Short: tS,
          Planned: bS
        }),
        "aria-hidden": "true"
      })
    }

    function Sk(SS) {
      let {
        max: HS,
        bands: gS,
        ticks: tS,
        now: bS,
        settle: XS,
        settleTone: xS,
        onExplain: NS
      } = SS;
      const qS = SS => Math.max(0, Math.min(HS, SS)) / HS * 100 + "%";
      let uS = 0;
      return (0, JX.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: NS,
        children: [(0, JX.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [gS.map((SS => {
            const HS = {
              bottom: qS(uS),
              height: `calc(${qS(SS.upTo)} - ${qS(uS)})`
            };
            return uS = SS.upTo, (0, JX.jsx)("i", {
              className: hb()("NxGaugeBand", SS.kind),
              style: HS
            }, SS.kind)
          })), null !== bS && (0, JX.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: qS(bS)
            }
          }), void 0 !== XS && null !== XS && (0, JX.jsx)("i", {
            className: hb()("NxGaugeSettle", {
              Bad: "bad" === xS
            }),
            style: {
              bottom: qS(XS)
            }
          })]
        }), (0, JX.jsx)("span", {
          className: "NxGaugeTicks",
          children: tS.map((SS => (0, JX.jsx)("small", {
            style: {
              bottom: qS(SS)
            },
            children: SS
          }, SS)))
        })]
      })
    }

    function Hk(SS) {
      const [HS, gS] = (0, tS.useState)(null), [bS, XS] = (0, tS.useState)((() => {
        try {
          return null === window.localStorage.getItem(SS)
        } catch {
          return !1
        }
      })), xS = (0, tS.useRef)(null);
      (0, tS.useEffect)((() => () => {
        null !== xS.current && clearTimeout(xS.current)
      }), []);
      const NS = (0, tS.useCallback)((HS => {
          gS(HS), XS(!1);
          try {
            window.localStorage.setItem(SS, "1")
          } catch {}
          null !== xS.current && clearTimeout(xS.current), xS.current = setTimeout((() => {
            xS.current = null, gS(null)
          }), 5e3)
        }), [SS]),
        qS = (0, tS.useCallback)(((HS, gS) => {
          const tS = `${SS}:${HS}`;
          try {
            if (null !== window.localStorage.getItem(tS)) return;
            window.localStorage.setItem(tS, "1")
          } catch {
            return
          }
          NS(gS)
        }), [NS, SS]);
      return {
        explained: HS,
        hinting: bS,
        explain: NS,
        explainOnce: qS
      }
    }

    function gk(SS) {
      let {
        text: HS,
        tone: gS,
        explained: tS
      } = SS;
      return (0, JX.jsxs)("p", {
        className: hb()("NxStatus", null === tS ? gS : "Explain"),
        "aria-live": "polite",
        children: [null !== tS && (0, JX.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== tS && void 0 !== tS ? tS : HS]
      })
    }
    const tk = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function bk(SS, HS) {
      const gS = Number(SS[HS]);
      return 1 === gS || 2 === gS || 3 === gS ? gS : 0
    }

    function Xk(SS) {
      return !!wq("reactor", SS.baf2RxNeed) || void 0 !== SS.baf2RxLayout && SS.baf2RxNeed.some((SS => {
        let [HS, gS] = SS;
        return gS > 0 && tk.includes(HS)
      }))
    }
    const xk = "buildAFactory2Game:";

    function Nk(SS) {
      let {
        status: HS,
        store: gS,
        busy: tS
      } = SS;
      const {
        t: bS
      } = (0, db.F)();
      return function(SS) {
        return 0 !== (SS.baf2RxFlags & jH) && (!SS.baf2RxFormed || void 0 !== SS.baf2RxLayout)
      }(HS) ? (0, JX.jsx)(wx.p, {
        disabled: !Xk(HS) || tS,
        onClick: () => {
          gS.tap("fill", (() => {
            gS.send("fill")
          }))
        },
        children: bS(void 0 !== HS.baf2RxLayout ? `${xk}rxFillLayout` : `${xk}rxFill`)
      }) : null
    }

    function qk(SS) {
      let {
        status: HS,
        store: gS,
        readOnly: bS,
        bare: XS = !1
      } = SS;
      const {
        t: xS
      } = (0, db.F)(), NS = HS.baf2RxLayout, [qS, uS, IS] = HS.baf2RxDims, fS = (0, tS.useMemo)((() => {
        if (void 0 === NS) return 0;
        const SS = Uint8Array.from(NS, ((SS, HS) => bk(NS, HS)));
        return Sq([qS - 2, uS - 2, IS - 2], SS).max
      }), [NS, qS, uS, IS]);
      return void 0 === NS ? null : (0, JX.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!XS && (0, JX.jsx)("span", {
          className: "Baf2RxHint",
          children: xS(`${xk}rxLayoutLine`, {
            amount: vq(fS)
          })
        }), !bS && (0, JX.jsx)(wx.g, {
          onClick: () => {
            gS.send("layout", 0)
          },
          children: xS(`${xk}rxLayoutHide`)
        })]
      })
    }
    const uk = "buildAFactory2Game:",
      Ik = {
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

    function fk(SS) {
      let {
        id: HS,
        title: gS,
        body: tS,
        bodyParams: bS,
        yes: XS,
        cancel: xS,
        confirm: NS
      } = SS;
      const {
        t: qS
      } = (0, db.F)();
      return (0, JX.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": HS,
        children: [(0, JX.jsx)("h3", {
          id: HS,
          children: qS(gS)
        }), (0, JX.jsx)("p", {
          children: qS(tS, bS)
        }), (0, JX.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, JX.jsx)(wx.j, {
            onClick: xS,
            children: qS(`${uk}rxCancel`)
          }), (0, JX.jsx)(wx.L, {
            onClick: NS,
            children: qS(XS)
          })]
        })]
      })
    }

    function kk(SS) {
      const [HS, gS] = (0, tS.useState)((() => SS.get()));
      return (0, tS.useEffect)((() => (gS(SS.get()), SS.subscribe((() => {
        gS(SS.get())
      })))), [SS]), HS
    }

    function ak(SS) {
      let {
        kind: HS,
        cap: gS,
        busy: bS = !1,
        whyNot: XS = null,
        apart: xS
      } = SS;
      const {
        t: NS
      } = (0, db.F)(), [qS, uS] = (0, tS.useState)(!1), IS = null !== XS, fS = (0, tS.useRef)(null);
      if ((0, tS.useEffect)((() => {
          IS && uS(!1)
        }), [IS]), (0, tS.useLayoutEffect)((() => {
          var SS;
          const HS = null === (SS = fS.current) || void 0 === SS ? void 0 : SS.firstElementChild;
          IS ? null === HS || void 0 === HS || HS.setAttribute("aria-disabled", "true") : bS || null === HS || void 0 === HS || HS.removeAttribute("aria-disabled")
        })), !qS || IS) return (0, JX.jsx)("span", {
        ref: fS,
        className: "Baf2RxApartWrap",
        children: (0, JX.jsx)(wx.j, {
          disabled: bS,
          className: hb()({
            Baf2RxNotYet: IS
          }),
          onClick: () => {
            XS ? XS() : uS(!0)
          },
          children: NS(`${uk}rxApart`)
        })
      });
      const kS = "battery" === HS,
        aS = void 0 === gS ? `${uk}batApartConfirmBodyPlan` : `${uk}batApartConfirmBody`;
      return (0, JX.jsx)(fk, {
        id: `baf2ApartTitle_${HS}`,
        title: kS ? `${uk}batApartConfirmTitle` : `${uk}rxApartConfirmTitle`,
        body: kS ? aS : `${uk}rxApartConfirmBody`,
        bodyParams: void 0 === gS ? void 0 : {
          cap: gS
        },
        yes: `${uk}rxApart`,
        cancel: () => {
          uS(!1)
        },
        confirm: () => {
          uS(!1), xS()
        }
      })
    }

    function Kk(SS) {
      let {
        mood: HS,
        big: gS
      } = SS;
      const tS = Ik[HS],
        bS = [];
      return tS.rows.forEach(((SS, HS) => {
        for (let gS = 0; gS < SS.length; gS++) "." !== SS[gS] && bS.push((0, JX.jsx)("rect", {
          x: gS + 1,
          y: HS + 1,
          width: 1,
          height: 1,
          fill: "w" === SS[gS] ? "#8fd3ff" : tS.colour
        }, `${gS},${HS}`))
      })), (0, JX.jsxs)("svg", {
        className: hb()("Baf2RxFace", {
          Big: gS,
          Alarm: "alarm" === HS
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, JX.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, JX.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), bS]
      })
    }

    function jk(SS) {
      return nX(SS, "+").replace("+", "")
    }

    function Gk(SS) {
      let {
        kind: HS,
        dims: gS,
        cap: tS,
        disabled: bS,
        compact: XS,
        resize: xS
      } = SS;
      const {
        t: NS
      } = (0, db.F)(), {
        min: qS,
        max: uS
      } = zg(HS), IS = Math.min(tS, uS), fS = [`${uk}rxWide`, `${uk}rxTall`, `${uk}rxDeep`], kS = {
        w: String(gS[0]),
        h: String(gS[1]),
        d: String(gS[2]),
        blocks: String(cq(HS, gS))
      };
      return (0, JX.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, JX.jsx)("div", {
          className: "Baf2RxSteppers",
          children: gS.map(((SS, HS) => {
            const XS = tS => {
                const bS = [gS[0], gS[1], gS[2]];
                bS[HS] = SS + tS, xS(bS)
              },
              kS = SS >= IS;
            return (0, JX.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, JX.jsx)("button", {
                type: "button",
                "aria-label": NS(`${uk}rxSmaller`),
                disabled: bS || SS <= qS,
                onClick: () => {
                  XS(-1)
                },
                children: "\u2212"
              }), (0, JX.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [SS, (0, JX.jsx)("small", {
                  children: NS(fS[HS])
                })]
              }), (0, JX.jsx)("button", {
                type: "button",
                "aria-label": NS(`${uk}rxBigger`),
                disabled: bS || kS,
                onClick: () => {
                  XS(1)
                },
                children: kS && tS < uS ? "\ud83d\udd12" : "+"
              })]
            }, fS[HS])
          }))
        }), !XS && (0, JX.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === HS ? NS(`${uk}rxSizeLine`, {
            ...kS,
            water: String(dq(gS))
          }) : NS(`${uk}batSizeLine`, kS)
        })]
      })
    }

    function Ck(SS) {
      let {
        on: HS,
        label: gS,
        disabled: tS,
        locked: bS,
        pending: XS,
        toggle: xS
      } = SS;
      return (0, JX.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": HS,
        disabled: tS,
        "aria-disabled": bS || void 0,
        className: hb()("Baf2RxSwitch", {
          On: HS,
          Locked: bS,
          Pending: XS
        }),
        onClick: xS,
        children: [(0, JX.jsx)("span", {
          className: "Baf2RxKnob"
        }), gS]
      })
    }
    const nk = "buildAFactory2Game:",
      Pk = .95;

    function Qk(SS, HS) {
      return 0 !== (SS.baf2RxFlags & HS)
    }

    function Dk(SS) {
      return "cryo" === SS ? eS.n : eS.q
    }

    function wk(SS) {
      var HS, gS, tS, bS, XS, xS, NS, qS, uS;
      return SS.baf2RxCryo ? {
        aa: "cryo",
        usePerS: null !== (bS = SS.baf2RxCryoUse) && void 0 !== bS ? bS : 0,
        needPerS: null !== (XS = SS.baf2RxCryoNeed) && void 0 !== XS ? XS : 0,
        inPerS: null !== (xS = SS.baf2RxCryoIn) && void 0 !== xS ? xS : 0,
        stored: null !== (NS = SS.baf2RxCryoStored) && void 0 !== NS ? NS : 0,
        makersShort: null !== (qS = SS.baf2RxMixersShort) && void 0 !== qS ? qS : 0,
        waterBeside: null !== (uS = SS.baf2RxWaterUse) && void 0 !== uS ? uS : 0,
        pct: SS.baf2RxWater
      } : {
        aa: "water",
        usePerS: null !== (HS = SS.baf2RxWaterUse) && void 0 !== HS ? HS : 0,
        needPerS: null !== (gS = SS.baf2RxWaterNeed) && void 0 !== gS ? gS : 0,
        inPerS: SS.baf2RxWaterIn,
        stored: SS.baf2RxWaterStored,
        makersShort: null !== (tS = SS.baf2RxCondensersShort) && void 0 !== tS ? tS : 0,
        waterBeside: 0,
        pct: SS.baf2RxWater
      }
    }

    function hk(SS) {
      const HS = "running" === SS.baf2RxState || "idle" === SS.baf2RxState;
      return SS.baf2RxFormed && SS.baf2RxTarget !== SS.baf2RxThrottle && HS ? Zk(SS, SS.baf2RxTarget) : null
    }

    function Zk(SS, HS) {
      const [gS, tS, bS, , , , XS, , xS] = SS.baf2RxStats, NS = Qk(SS, aH), qS = wk(SS), uS = qS.pct / 100, {
        gen: IS,
        out: fS,
        load: kS
      } = function(SS, HS, gS, tS) {
        const bS = gS ? RN : 1,
          XS = Math.min(SS.fuelHeat * bS * Math.max(0, Math.min(1, HS)), SS.size * bS);
        return {
          gen: XS,
          out: XS,
          load: fq(XS, SS.cooling, tS)
        }
      }({
        fuelHeat: gS,
        cooling: tS,
        size: bS
      }, HS / 100, NS, uS), aS = aq(XS || rN(...SS.baf2RxDims)), KS = SS.baf2RxHeat, jS = Math.abs(kS - KS), GS = function(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : eS.q;
        const XS = gS ? RN : 1,
          xS = Math.min(SS.fuelHeat * XS * HS / 100, SS.size * XS),
          NS = xS,
          qS = SS.fuelHeat * XS,
          uS = SS.cooling * Iq(tS.pct / 100),
          IS = qS > 0 && uS < SS.size * XS ? Math.floor(100 * uS / qS) : 100,
          fS = xS * bS - tS.inPerS;
        return {
          out: NS,
          hotAbove: IS >= 100 ? null : Math.max(0, IS),
          waterSecs: tS.pct >= 100 && fS > 1e-6 ? Math.max(0, tS.stored) / fS : null
        }
      }({
        fuelHeat: gS,
        cooling: tS,
        size: bS
      }, HS, NS, {
        pct: qS.pct,
        inPerS: qS.inPerS,
        stored: qS.stored
      }, Dk(qS.aa));
      return {
        pct: HS,
        out: fS,
        coolPerS: IS * Dk(qS.aa),
        pelletsPerMin: xS > 0 ? fS / xS * 60 : 0,
        settle: kS,
        settleS: jS > 2 ? aS * Math.log(jS / 2) : 0,
        overheatS: kS > 100 && KS < 100 ? aS * Math.log((kS - KS) / (kS - 100)) : null,
        hotAbove: GS.hotAbove,
        coolantSecs: GS.waterSecs
      }
    }

    function Jk(SS) {
      return SS.baf2RxThrottle <= 0 && "running" !== SS.baf2RxState ? 0 : Zk(SS, SS.baf2RxTarget).pelletsPerMin / 60
    }

    function Ok(SS, HS) {
      if (SS <= 0 || HS <= 0) return 0;
      const gS = SS / HS;
      return gS < .25 ? 1 : gS < .5 ? 2 : gS < .8 ? 3 : 4
    }

    function dk(SS, HS) {
      const gS = {};
      for (const [tS, bS] of Object.entries(HS.params)) gS[tS] = "time" === tS ? DX(SS, bS) : "amount" === tS ? vq(bS) : String(Math.round(bS));
      return SS(HS.key, gS)
    }

    function ck(SS, HS) {
      return {
        key: `${nk}${SS}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: HS
      }
    }

    function vk(SS) {
      var HS;
      const gS = Qk(SS, aH),
        tS = "running" === SS.baf2RxState,
        bS = Cq(SS),
        XS = SS.baf2RxHeat;
      var xS;
      if (tS && XS > MN) return {
        key: null !== (xS = bS.fix) && void 0 !== xS ? xS : `${nk}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const NS = tS ? Zk(SS, SS.baf2RxTarget).coolantSecs : null,
        qS = "cryo" === wk(SS).aa;
      if (null !== NS && NS >= 1 && NS <= 30) return ck(qS ? "rxWarnCryo" : "rxWarnWater", "bad");
      const uS = mN(rN(...SS.baf2RxDims)).waste,
        IS = tS ? hq(SS, uS, Jk(SS)).fullInS : null;
      if (null !== IS && IS <= 120 && SS.baf2RxWaste >= .5 * uS) return ck("rxWarnWaste", "warn");
      if (null !== NS && NS >= 1) return ck(qS ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: NS
      });
      const fS = "noWater" === SS.baf2RxState && XS > MN;
      if (SS.baf2RxDamage >= 1 && !fS) return ck("rxDamagedHeals", "warn", {
        pct: SS.baf2RxDamage
      });
      if (SS.baf2RxCryoCut) return ck("rxFix_cryoCut", "warn");
      const kS = wk(SS);
      if ("noWater" === SS.baf2RxState && "cryo" === kS.aa) return ck("noWater" === SS.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const aS = bS.fix === `${nk}rxFix_scramCool` || "idle" === SS.baf2RxState && SS.baf2RxTarget <= 0;
      if (aS && SS.baf2RxFuel <= 0) return ck("rxFix_noFuel", "warn");
      if (aS && SS.baf2RxWaterIn <= 0 && (null !== (HS = SS.baf2RxCryoIn) && void 0 !== HS ? HS : 0) <= 0) return ck("rxFix_noWater", "warn");
      const KS = bS.fix === `${nk}rxFix_scramCool` ? Pq(SS) : null;
      if (null !== KS) return {
        key: KS.key,
        params: {
          amount: KS.amount
        },
        tone: "info"
      };
      if ("running" !== SS.baf2RxState && "idle" !== SS.baf2RxState && null !== bS.fix) return {
        key: bS.fix,
        params: {},
        tone: "scram" === SS.baf2RxState ? "info" : fS ? "bad" : "warn"
      };
      var jS;
      if ("idle" === SS.baf2RxState && SS.baf2RxTarget <= 0) return {
        key: null !== (jS = bS.fix) && void 0 !== jS ? jS : `${nk}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const GS = SS.baf2RxCryoStarved;
      if ("cryo" === kS.aa && GS && kS.needPerS > 0 && kS.usePerS < Pk * kS.needPerS) return ck("noWater" === GS ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const CS = "cryo" === kS.aa,
        nS = kS.needPerS > 0 && kS.usePerS < Pk * kS.needPerS;
      if (CS ? nS || kS.makersShort > 0 && kS.pct < 100 : kS.pct < 100) {
        const HS = CS && nS ? Math.floor(100 * kS.usePerS / kS.needPerS) : Math.min(100, kS.pct);
        if (kS.makersShort > 0) {
          return ck(`${CS?"rxCryoShortLine":"rxWaterShortLine"}${1===kS.makersShort?"One":""}${!CS&&SS.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: HS,
            count: kS.makersShort
          })
        }
        return ck(CS ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: HS
        })
      }
      const PS = function(SS) {
        const [HS, gS, tS] = SS.baf2RxStats, bS = wk(SS), XS = kq({
          fuelHeat: HS,
          cooling: gS,
          size: tS
        }, "cryo" === bS.aa ? eS.i : 1, !0);
        return Math.max(0, XS * Dk(bS.aa) - bS.inPerS)
      }(SS);
      if (gS && PS > 0) return ck("cryo" === kS.aa ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(PS)
      });
      if (XS >= qq) return ck("rxHotLine", "warn");
      const QS = Zk(SS, SS.baf2RxTarget);
      var DS;
      if (null !== QS.overheatS) return ck("rxWillOverheat", "bad", {
        pct: SS.baf2RxTarget,
        time: QS.overheatS,
        safe: null !== (DS = QS.hotAbove) && void 0 !== DS ? DS : 100
      });
      if (Math.abs(QS.settle - XS) >= 3) return ck("rxSettling", "info", {
        pct: SS.baf2RxTarget,
        heat: Math.round(QS.settle),
        time: QS.settleS
      });
      const wS = Pq(SS);
      if (null !== wS) return {
        key: wS.key,
        params: {
          amount: wS.amount
        },
        tone: "info"
      };
      const hS = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== HS && ("running" !== HS || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === SS.rods ? `${Kq}rxLimitNoRods` : `${Kq}rxLimit_${Nq(SS)}`
      }({
        rods: SS.baf2RxStats[3],
        ...nq(SS)
      }, SS.baf2RxState, SS.baf2RxOut >= Pk * SS.baf2RxMaxNow, !1);
      if (hS === `${nk}rxLimit_size`) {
        const [HS, , gS, tS] = SS.baf2RxStats, bS = tS > 0 && HS > 0 ? Math.ceil(gS / (HS / tS) - 1e-9) : tS, XS = SS.baf2RxDims.every((SS => SS >= zg("reactor").max));
        if (bS < tS) return ck(XS ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: bS,
          have: tS
        });
        if (XS) return ck("rxLimit_sizeMax", "info")
      }
      return null !== hS ? {
        key: hS,
        params: {},
        tone: "info"
      } : ck("rxSteady", "ok", {
        pct: SS.baf2RxTarget
      })
    }

    function Ek(SS) {
      var HS;
      if (SS.melted) return ck("rxMeltedBody", "bad");
      if (-1 === SS.bad) return ck("rxFix_noRoom", "warn");
      if (SS.bad > 0) return ck(1 === SS.bad ? "rxBadOne" : "rxBad", "warn", {
        count: SS.bad
      });
      if (SS.left > 0) {
        const HS = 1 === SS.left ? "One" : "";
        return ck(SS.canFill ? `rxPlanLeft${HS}` : `rxPlanLeftNoFill${HS}`, "info", {
          count: SS.left
        })
      }
      if (0 === SS.rods) return ck("rxLimitNoRods", "warn");
      const gS = null !== (HS = SS.idle) && void 0 !== HS ? HS : 0;
      return gS > 0 ? ck(1 === gS ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: gS
      }) : ck("rxPlanReady", "ok")
    }

    function Lk(SS) {
      return Math.floor(Math.max(0, SS[1] - 1) / 2)
    }

    function Yk(SS) {
      if (SS >= gq && SS < tq) {
        const HS = SS - gq;
        return {
          key: 0 === HS ? `${nk}rxWhy_rodAlone` : 1 === HS ? `${nk}rxWhy_rodOne` : `${nk}rxWhy_rod`,
          params: {
            count: String(HS),
            heat: String(VN * (1 + iN * HS))
          }
        }
      }
      return SS === tq ? {
        key: `${nk}rxWhy_channel`,
        params: {
          amount: String(zN)
        }
      } : SS === bq ? {
        key: `${nk}rxWhy_deadChannel`,
        params: {}
      } : SS === Xq ? {
        key: `${nk}rxWhy_graphite`,
        params: {}
      } : {
        key: `${nk}rxWhy_core`,
        params: {}
      }
    }
    const Ak = "buildAFactory2Game:";

    function yk(SS, HS) {
      return 0 !== (SS.baf2RxFlags & HS)
    }

    function Vk(SS) {
      let {
        status: HS,
        pending: gS,
        store: tS,
        explain: bS
      } = SS;
      const {
        t: XS
      } = (0, db.F)(), xS = yk(HS, kH), NS = HS.baf2RxTarget, qS = HS.baf2RxThrottle, uS = function(SS) {
        return {
          press: () => {
            SS.throttlePress()
          },
          drag: HS => {
            SS.throttleDrag(HS)
          },
          release: () => {
            SS.throttleRelease()
          }
        }
      }(tS), IS = null === (fS = Zk(HS, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, fS - 10),
        red: fS
      };
      var fS;
      return (0, JX.jsxs)("div", {
        className: hb()("Baf2RxThrottle", {
          Off: xS
        }),
        onClick: () => {
          xS && bS(`${Ak}rxWhy_startFirst`)
        },
        children: [(0, JX.jsx)("span", {
          className: "HideNarrow",
          children: XS(`${Ak}rxThrottle`)
        }), (0, JX.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, JX.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: NS,
            disabled: xS,
            style: xS ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": XS(`${Ak}rxThrottle`),
            onPointerDown: () => {
              uS.press();
              const SS = () => {
                window.removeEventListener("pointerup", SS), window.removeEventListener("pointercancel", SS), uS.release()
              };
              window.addEventListener("pointerup", SS), window.addEventListener("pointercancel", SS)
            },
            onKeyUp: uS.release,
            onChange: SS => {
              uS.drag(Number(SS.target.value))
            }
          }), (0, JX.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${IS.amber}%, #ffb020 ${IS.amber}% ${IS.red}%, #ff3b30 ${IS.red}%)`
            },
            "aria-hidden": "true"
          }), (0, JX.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${qS}% + ${8*(1-qS/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, JX.jsxs)("b", {
          children: [`${NS}%`, (0, JX.jsx)("i", {
            className: hb()("Baf2RxPendingDot", {
              On: gS
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function ik(SS) {
      let {
        status: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)(), tS = Zk(HS, HS.baf2RxTarget), bS = wk(HS).aa, XS = gS("cryo" === bS ? `${Ak}rxRateCryo` : `${Ak}rxRateWater`, {
        rate: jk(tS.coolPerS)
      }), xS = gS(`${Ak}rxChain`, {
        pct: String(HS.baf2RxTarget),
        out: vq(tS.out),
        heat: String(Math.round(tS.settle)),
        coolant: XS
      }), NS = null !== tS.coolantSecs ? tS.coolantSecs >= 1 ? gS("cryo" === bS ? `${Ak}rxThrottleCryoOut` : `${Ak}rxThrottleWaterOut`, {
        time: DX(gS, tS.coolantSecs)
      }) : gS("cryo" === bS ? `${Ak}rxThrottleCryoDry` : `${Ak}rxThrottleWaterDry`) : null;
      return (0, JX.jsxs)("p", {
        className: "Baf2RxChain",
        children: [xS, null !== NS ? (0, JX.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", NS]
        }) : (0, JX.jsxs)("span", {
          children: [" \xb7 ", gS(`${Ak}rxChainPellets`, {
            amount: Eq(tS.pelletsPerMin)
          })]
        })]
      })
    }

    function Wk(SS) {
      let {
        view: HS,
        store: gS,
        explain: bS,
        explainOnce: XS
      } = SS;
      const {
        t: xS
      } = (0, db.F)(), {
        status: NS
      } = HS, [qS, uS] = (0, tS.useState)(!1), IS = yk(NS, kH), kS = yk(NS, aH), aS = !yk(NS, GH), KS = NS.baf2RxHeat > 100;
      return (0, JX.jsxs)(JX.Fragment, {
        children: [(0, JX.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, JX.jsx)(Vk, {
            status: NS,
            pending: HS.throttlePending,
            store: gS,
            explain: bS
          }), (0, JX.jsx)(Ck, {
            on: kS,
            label: kS ? xS(`${Ak}rxOdLeft`, {
              time: DX(xS, NS.baf2RxOdLeft)
            }) : xS(`${Ak}rxOverdrive`),
            locked: aS,
            pending: 0 !== (HS.pendingFlags & aH),
            toggle: () => {
              aS ? bS(`${Ak}rxOverdriveTier`, {
                amount: String(fS(13))
              }) : kS ? gS.setFlag(aH, !1) : HS.odConfirmed ? gS.setFlag(aH, !0) : uS(!0)
            }
          }), IS || HS.startGuard ? (0, JX.jsx)(wx.u, {
            disabled: HS.busy.has("start") || HS.startGuard,
            onClick: () => {
              gS.tap("start", (() => {
                gS.setFlag(kH, !1)
              }))
            },
            children: xS(HS.startGuard ? `${Ak}rxStarting` : `${Ak}rxStart`)
          }) : (0, JX.jsx)("span", {
            className: hb()("Baf2RxScram", {
              Pulse: KS
            }),
            children: (0, JX.jsx)(wx.L, {
              onClick: () => {
                gS.shutDown()
              },
              children: xS(`${Ak}rxScram`)
            })
          })]
        }), (0, JX.jsx)(ik, {
          status: NS
        }), qS && (0, JX.jsx)(fk, {
          id: "baf2RxOdTitle",
          title: `${Ak}rxOdConfirmTitle`,
          body: `${Ak}rxOdConfirmBody`,
          yes: `${Ak}rxOdConfirm`,
          cancel: () => {
            uS(!1)
          },
          confirm: () => {
            uS(!1), gS.tap("odConfirm", (() => {
              gS.confirmOverdrive(), gS.setFlag(aH, !0)
            })), XS(`${Ak}rxWhy_overdrive`)
          }
        })]
      })
    }

    function zk(SS) {
      let {
        view: HS,
        store: gS,
        keepSize: tS
      } = SS;
      const {
        t: bS
      } = (0, db.F)(), {
        status: XS
      } = HS;
      return (0, JX.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, JX.jsx)(Gk, {
          kind: "reactor",
          dims: HS.dims,
          cap: XS.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: SS => {
            gS.resize(SS)
          }
        }), tS ? (0, JX.jsx)(wx.j, {
          onClick: tS,
          children: bS(`${Ak}rxKeepSize`)
        }) : (0, JX.jsxs)(JX.Fragment, {
          children: [(0, JX.jsx)(Ck, {
            on: HS.guide,
            label: bS(`${Ak}rxGuide`),
            toggle: () => {
              gS.toggleGuide()
            }
          }), yk(XS, nH) && (0, JX.jsx)(Ck, {
            on: HS.starter,
            label: bS(`${Ak}rxStarter`),
            toggle: () => {
              gS.toggleStarter()
            }
          }), (0, JX.jsx)(Nk, {
            status: XS,
            store: gS,
            busy: HS.busy.has("fill")
          })]
        })]
      })
    }

    function Uk(SS) {
      let {
        need: HS,
        kind: gS = "reactor",
        explain: tS
      } = SS;
      const {
        t: bS
      } = (0, db.F)(), XS = HS.length <= 3, xS = HS.reduce(((SS, HS) => {
        let [, gS] = HS;
        return SS + gS
      }), 0);
      return (0, JX.jsxs)("div", {
        className: hb()("Baf2RxParts", {
          Compact: !XS
        }),
        onClick: () => {
          tS("battery" === gS ? `${Ak}batWhy_store` : `${Ak}rxShellHint`)
        },
        children: [xS > 0 && (0, JX.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === xS ? bS(`${Ak}rxBlocksOne`) : bS(`${Ak}rxBlocks`, {
            blocks: String(xS)
          })
        }), 0 === HS.length ? (0, JX.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: bS("battery" === gS ? `${Ak}batPartsDone` : `${Ak}rxShellDone`)
        }) : Dq(HS).map((SS => {
          let [HS, gS, tS] = SS;
          const xS = function(SS) {
            const HS = Oq[SS];
            if (void 0 === HS) return null;
            const [gS, tS, bS] = Zq[HS].colour.map((SS => Math.round(255 * SS)));
            return `rgb(${gS}, ${tS}, ${bS})`
          }(HS);
          return (0, JX.jsxs)("span", {
            className: "Baf2RxChip",
            title: bX(bS, HS),
            children: [(0, JX.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === xS ? {
                visibility: "hidden"
              } : {
                background: xS
              },
              title: bS(`${Ak}rxShopGhost`)
            }), (0, JX.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, JX.jsx)(vb.e, {
                itemName: HS,
                amount: 0
              })
            }), (0, JX.jsx)("span", {
              className: "Baf2RxChipName",
              children: XS ? `${gS} ${NS=bX(bS,HS),NS.replace(/^(Reactor|Battery) (?=\S)/,"")}` : gS
            }), tS >= gS ? (0, JX.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, JX.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: XS ? bS(`${Ak}rxShopShort`, {
                count: String(gS - tS)
              }) : "\u2212" + (gS - tS)
            })]
          }, HS);
          var NS
        }))]
      })
    }
    const pk = "buildAFactory2Game:";

    function sk(SS) {
      var HS, gS, bS, XS, xS, NS, qS;
      let {
        store: uS,
        close: IS
      } = SS;
      const {
        t: fS
      } = (0, db.F)(), kS = px(), aS = kk(uS), {
        explained: KS,
        explain: jS
      } = Hk("baf2RxExplained"), GS = (0, tS.useCallback)(((SS, HS) => {
        jS(fS(SS, HS))
      }), [jS, fS]), CS = null === aS || void 0 === aS ? void 0 : aS.status, nS = !0 === (null === CS || void 0 === CS ? void 0 : CS.baf2BatReadOnly), PS = SS => {
        CS && kS.send(fH(CS.baf2BatAt, SS))
      }, [QS, DS, wS] = null !== (HS = null === aS || void 0 === aS ? void 0 : aS.dims) && void 0 !== HS ? HS : [0, 0, 0], hS = vq(null !== (gS = null === aS || void 0 === aS ? void 0 : aS.hf) && void 0 !== gS ? gS : 0), ZS = !0 === (null === CS || void 0 === CS ? void 0 : CS.baf2BatFormed), JS = null !== (bS = null === CS || void 0 === CS ? void 0 : CS.baf2BatStored) && void 0 !== bS ? bS : 0, OS = Math.max(1, null !== (XS = null === CS || void 0 === CS ? void 0 : CS.baf2BatIslandCap) && void 0 !== XS ? XS : 1), dS = Math.min(100, 100 * JS / OS), cS = null === CS || void 0 === CS ? void 0 : CS.baf2BatNetPerS, vS = function(SS, HS, gS) {
        return gS > 0 && HS >= gS ? "full" : void 0 !== SS && SS >= .05 ? "charging" : void 0 !== SS && SS <= -.05 && HS > 0 ? "draining" : "steady"
      }(cS, JS, null !== (xS = null === CS || void 0 === CS ? void 0 : CS.baf2BatIslandCap) && void 0 !== xS ? xS : 0), ES = null !== (NS = null === CS || void 0 === CS ? void 0 : CS.baf2BatMadePerS) && void 0 !== NS ? NS : 0, LS = null !== (qS = null === CS || void 0 === CS ? void 0 : CS.baf2BatUsedPerS) && void 0 !== qS ? qS : 0;
      let YS, AS = {},
        yS = "info";
      if (CS)
        if (ZS) "charging" === vS ? (YS = `${pk}batLine_charging`, AS = {
          time: DX(fS, (OS - JS) / Math.max(.05, null !== cS && void 0 !== cS ? cS : 0))
        }, yS = "ok") : "draining" === vS ? (YS = `${pk}batLine_draining`, AS = {
          time: DX(fS, JS / Math.max(.05, -(null !== cS && void 0 !== cS ? cS : 0)))
        }, yS = "warn") : YS = "full" === vS ? `${pk}batLine_full` : JS <= 0 && LS > 0 ? `${pk}batLine_empty` : `${pk}batLine_steady`;
        else {
          var VS;
          const SS = Ek({
            left: CS.baf2BatNeed.reduce(((SS, HS) => {
              let [, gS] = HS;
              return SS + gS
            }), 0),
            bad: CS.baf2BatBad,
            rods: 1,
            canFill: !0 === CS.baf2BatCanFill,
            melted: !1
          });
          YS = SS.key, AS = {
            count: String(null !== (VS = SS.params.count) && void 0 !== VS ? VS : 0)
          }, yS = SS.tone
        }
      else YS = `${pk}batLine_steady`;
      const iS = Math.max(ES, LS, 1);
      return (0, JX.jsx)(Dx.c, {
        close: IS,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, JX.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, JX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JX.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, JX.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, JX.jsx)(vb.e, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, JX.jsxs)("div", {
                children: [(0, JX.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: fS(`${pk}batTitle`)
                }), CS && (0, JX.jsxs)("p", {
                  className: hb()("Baf2RxSubtitle", {
                    good: ZS && "charging" === vS,
                    warn: ZS && "draining" === vS
                  }),
                  children: [QS, "\xd7", DS, "\xd7", wS, " \xb7 ", fS(ZS ? `${pk}batState_${vS}` : `${pk}rxSubPlanShort`)]
                })]
              })]
            }), (0, JX.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [CS && !nS && (0, JX.jsx)(ak, {
                kind: "battery",
                cap: ZS ? hS : void 0,
                busy: null === aS || void 0 === aS ? void 0 : aS.busy.has("apart"),
                apart: () => {
                  uS.tap("apart", (() => {
                    PS("apart")
                  }))
                }
              }), (0, JX.jsx)(wx.l, {
                onClick: IS
              })]
            })]
          }), aS && CS && (0, JX.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, JX.jsxs)("div", {
              className: hb()("Baf2RxFlow Baf2BatFlow", {
                Plan: !ZS
              }),
              children: [(0, JX.jsx)(ef, {
                kind: "Power",
                label: fS(`${pk}batMade`),
                number: ZS ? `\u26a1 ${vq(ES)}/s` : "\u2014",
                note: fS(`${pk}batMadeNote`),
                share: ZS ? ES / iS : void 0,
                onExplain: () => {
                  GS(`${pk}batWhy_made`)
                }
              }), (0, JX.jsx)(rf, {
                kind: "Power",
                step: ZS ? Ok(ES, iS) : 0,
                planned: !ZS
              }), (0, JX.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  GS(`${pk}batWhy_store`)
                },
                children: [(0, JX.jsx)(Sk, {
                  max: 100,
                  bands: [{
                    upTo: ZS ? dS : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, JX.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, JX.jsx)("b", {
                    className: "Baf2BatStored",
                    children: ZS ? fS(`${pk}batStoredOf`, {
                      amount: vq(JS),
                      cap: vq(CS.baf2BatIslandCap)
                    }) : fS(`${pk}batWillHold`, {
                      cap: hS
                    })
                  }), (0, JX.jsx)("span", {
                    children: fS(`${pk}batAdds`, {
                      cap: hS
                    })
                  }), ZS && (0, JX.jsx)("small", {
                    children: fS(`${pk}batBreakNote`, {
                      cap: hS
                    })
                  })]
                })]
              }), (0, JX.jsx)(rf, {
                kind: "Power",
                step: ZS ? Ok(LS, iS) : 0,
                planned: !ZS
              }), (0, JX.jsx)(ef, {
                kind: "Power",
                label: fS(`${pk}batUsed`),
                number: ZS ? `\u26a1 ${vq(LS)}/s` : "\u2014",
                note: fS(`${pk}batUsedNote`),
                share: ZS ? LS / iS : void 0,
                onExplain: () => {
                  GS(`${pk}batWhy_used`)
                }
              })]
            }), (0, JX.jsx)(gk, {
              text: fS(YS, AS),
              tone: yS,
              explained: KS
            }), nS ? (0, JX.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: fS(`${pk}rxNotYours`)
            }) : !ZS && (0, JX.jsxs)(JX.Fragment, {
              children: [(0, JX.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, JX.jsx)(Gk, {
                  kind: "battery",
                  dims: aS.dims,
                  cap: CS.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: SS => {
                    uS.resize(SS)
                  }
                }), (0, JX.jsx)(Ck, {
                  on: aS.guide,
                  label: fS(`${pk}rxGuide`),
                  toggle: () => {
                    uS.toggleGuide()
                  }
                }), CS.baf2BatCanFill && (0, JX.jsx)(wx.p, {
                  disabled: !wq("battery", CS.baf2BatNeed) || aS.busy.has("fill"),
                  onClick: () => {
                    uS.tap("fill", (() => {
                      PS("fill")
                    }))
                  },
                  children: fS(`${pk}rxFill`)
                })]
              }), (0, JX.jsx)(Uk, {
                need: CS.baf2BatNeed,
                kind: "battery",
                explain: GS
              })]
            })]
          })]
        })
      })
    }
    const Bk = "buildAFactory2Game:",
      Mk = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function Fk(SS, HS) {
      return SS === Hq ? null : HS ? "#4a4440" : SS < tq ? Mk[SS - gq] : SS === tq ? "#3fd0f0" : SS === bq ? "#2c3e4c" : "#55585e"
    }

    function Rk(SS) {
      let {
        inner: HS,
        looks: gS,
        layer: tS,
        setLayer: bS,
        glow: XS,
        melted: xS,
        explain: NS
      } = SS;
      const {
        t: qS
      } = (0, db.F)(), [uS, IS, fS] = HS, kS = Math.max(0, Math.min(IS - 1, tS)), aS = [];
      for (let jS = 0; jS < fS; jS++)
        for (let SS = 0; SS < uS; SS++) {
          var KS;
          const HS = null !== (KS = gS[(kS * fS + jS) * uS + SS]) && void 0 !== KS ? KS : Hq,
            tS = Fk(HS, xS),
            bS = HS >= gq && HS < tq;
          aS.push(null === tS ? (0, JX.jsx)("circle", {
            cx: SS + .5,
            cy: jS + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${SS},${jS}`) : (0, JX.jsx)("rect", {
            x: SS + .06,
            y: jS + .06,
            width: .88,
            height: .88,
            fill: tS,
            opacity: bS && !xS ? .5 + .5 * XS : 1,
            onClick: SS => {
              SS.stopPropagation();
              const gS = Yk(HS);
              NS(gS.key, gS.params)
            }
          }, `${SS},${jS}`))
        }
      return (0, JX.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, JX.jsx)("svg", {
          className: hb()("Baf2RxMapGrid", {
            Melted: xS
          }),
          viewBox: `0 0 ${Math.max(1,uS)} ${Math.max(1,fS)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": qS(`${Bk}rxWhy_core`),
          onClick: () => {
            NS(`${Bk}rxWhy_core`, {})
          },
          children: aS
        }), IS > 1 && (0, JX.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, JX.jsx)("button", {
            type: "button",
            "aria-label": qS(`${Bk}rxLayerDown`),
            disabled: kS <= 0,
            onClick: () => {
              bS(kS - 1)
            },
            children: "\u25bc"
          }), (0, JX.jsxs)("span", {
            children: [(0, JX.jsx)("span", {
              className: "HideNarrow",
              children: qS(`${Bk}rxLayer`, {
                n: String(kS + 1),
                of: String(IS)
              })
            }), (0, JX.jsx)("span", {
              className: "ShowNarrow",
              children: qS(`${Bk}rxLayerShort`, {
                n: String(kS + 1),
                of: String(IS)
              })
            })]
          }), (0, JX.jsx)("button", {
            type: "button",
            "aria-label": qS(`${Bk}rxLayerUp`),
            disabled: kS >= IS - 1,
            onClick: () => {
              bS(kS + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Tk = "buildAFactory2Game:",
      lk = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: FN,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Gq,
        kind: "red"
      }],
      mk = [50, FN, 100];

    function ek(SS) {
      let {
        stats: HS,
        t: gS,
        explain: tS
      } = SS;
      const bS = Nq(HS),
        XS = Math.max(1, HS.fuelHeat, HS.cooling, HS.size),
        xS = [
          ["fuel", `${Tk}rxBarRods`, HS.fuelHeat],
          ["cooling", `${Tk}rxBarCooling`, HS.cooling],
          ["size", `${Tk}rxBarSize`, HS.size]
        ];
      return (0, JX.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          tS(`${Tk}rxWhy_bars`)
        },
        children: [(0, JX.jsx)("span", {
          className: "Baf2RxMostLine",
          children: gS(`${Tk}rxMost`, {
            amount: vq(Math.min(HS.fuelHeat, HS.cooling, HS.size))
          })
        }), (0, JX.jsx)("span", {
          className: "Baf2RxMostBars",
          children: xS.map((SS => {
            let [HS, tS, xS] = SS;
            return (0, JX.jsxs)("span", {
              className: hb()("Baf2RxMostBar", HS, {
                Low: HS === bS
              }),
              children: [(0, JX.jsx)("small", {
                children: gS(tS)
              }), (0, JX.jsx)("i", {
                children: (0, JX.jsx)("b", {
                  style: {
                    width: 100 * xS / XS + "%"
                  }
                })
              })]
            }, HS)
          }))
        })]
      })
    }

    function rk(SS) {
      var HS;
      let {
        view: gS,
        heat: bS,
        settle: XS,
        settleLine: xS,
        settleBad: NS,
        explain: qS
      } = SS;
      const {
        t: uS
      } = (0, db.F)(), {
        status: IS
      } = gS, fS = IS.baf2RxAt.join(","), [kS, aS] = (0, tS.useState)((() => Lk(gS.inner)));
      (0, tS.useEffect)((() => {
        aS(Lk(gS.inner))
      }), [fS, gS.inner[1]]);
      const KS = null !== (HS = gS.plan) && void 0 !== HS ? HS : nq(IS),
        jS = gS.plan ? gS.plan.powerPerUnit : IS.baf2RxStats[8],
        GS = null === bS ? null : "alarm" === (CS = jq(IS)) ? "red" : "hot" === CS ? "hot" : "warm" === CS ? "warm" : "cold";
      var CS;
      const nS = !IS.baf2RxFormed && function(SS, HS) {
          return 0 !== (SS.baf2RxFlags & HS)
        }(IS, KH),
        PS = IS.baf2RxDamage,
        QS = IS.baf2RxDamageTrend;
      return (0, JX.jsxs)("div", {
        className: hb()("Baf2RxCore", null !== GS && void 0 !== GS ? GS : "plan"),
        children: [(0, JX.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, JX.jsx)(Rk, {
            inner: gS.inner,
            looks: gS.looks,
            layer: kS,
            setLayer: aS,
            glow: IS.baf2RxFormed ? IS.baf2RxThrottle / 100 : 1,
            melted: nS,
            explain: qS
          }), (0, JX.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              qS(`${Tk}rxWhy_heat`)
            },
            children: [null !== bS ? (0, JX.jsxs)(JX.Fragment, {
              children: [(0, JX.jsx)("b", {
                children: uS(`${Tk}rxHeatPct`, {
                  pct: String(bS)
                })
              }), (0, JX.jsx)("span", {
                className: hb()("Baf2RxBand", GS),
                children: uS(`${Tk}rxBand_${GS}`)
              })]
            }) : (0, JX.jsx)("b", {
              children: uS(`${Tk}rxHeat`)
            }), null !== xS && (0, JX.jsx)("span", {
              className: hb()("Baf2RxSettle", {
                Bad: NS
              }),
              children: xS
            }), PS >= 1 && (0, JX.jsxs)("span", {
              className: hb()("Baf2RxDamage", QS),
              children: [uS(`${Tk}rxDamageLine`, {
                pct: String(PS)
              }), " \xb7 ", uS(`${Tk}rxDamage_${QS}`), (0, JX.jsx)("i", {
                children: (0, JX.jsx)("b", {
                  style: {
                    width: `${Math.min(100,PS)}%`
                  }
                })
              })]
            })]
          }), (0, JX.jsx)(Sk, {
            max: Gq,
            bands: lk,
            ticks: mk,
            now: bS,
            settle: XS,
            settleTone: NS ? "bad" : null,
            onExplain: () => {
              qS(`${Tk}rxWhy_heat`)
            }
          })]
        }), (0, JX.jsx)(ek, {
          stats: KS,
          t: uS,
          explain: qS
        }), jS > 0 && (0, JX.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            qS(`${Tk}rxWhy_perPellet`)
          },
          children: uS(`${Tk}rxPerPellet`, {
            amount: vq(jS)
          })
        })]
      })
    }

    function Sa(SS, HS) {
      var gS;
      if (!SS.baf2RxStore) return {
        note: HS(`${Tk}rxUpTo`, {
          amount: vq(SS.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [tS, bS] = SS.baf2RxStore, XS = bS > 0 ? tS / bS : 0, xS = String(Math.floor(100 * XS)), NS = null !== (gS = SS.baf2RxStoreNetPerS) && void 0 !== gS ? gS : 0, qS = function(SS) {
        var HS, gS;
        const [tS, bS] = null !== (HS = SS.baf2RxStore) && void 0 !== HS ? HS : [0, 0], XS = null !== (gS = SS.baf2RxStoreNetPerS) && void 0 !== gS ? gS : 0;
        return bS > 0 && tS >= bS - 1 ? "running" === SS.baf2RxState ? `${nk}rxStoreFull` : `${nk}rxStoreFullOnly` : XS > .05 ? `${nk}rxStoreLine` : XS < -.05 ? "running" === SS.baf2RxState ? `${nk}rxStoreUsesMore` : `${nk}rxStoreDraining` : `${nk}rxStorePct`
      }(SS);
      return {
        note: HS(qS, qS === `${Tk}rxStoreLine` ? {
          pct: xS,
          time: DX(HS, (bS - tS) / NS)
        } : {
          pct: xS
        }),
        share: XS
      }
    }

    function Ha(SS) {
      let {
        view: HS,
        explain: gS,
        preview: tS
      } = SS;
      const {
        t: bS
      } = (0, db.F)(), {
        status: XS
      } = HS, xS = mN(rN(...HS.dims)), NS = Jk(XS), qS = Math.min(Math.round(XS.baf2RxFuel), xS.fuel), uS = "running" === XS.baf2RxState, IS = uS ? Ok(XS.baf2RxOut, XS.baf2RxMaxNow) : 0, fS = function(SS, HS, gS) {
        const tS = wk(SS),
          bS = "cryo" === tS.aa,
          XS = gS ? gS.coolantSecs : tS.pct >= 100 && SS.baf2RxOut >= 1 ? Zk(SS, SS.baf2RxThrottle).coolantSecs : null;
        let xS, NS = !1;
        if (tS.pct < 100) {
          const gS = 1 === tS.makersShort,
            XS = !bS && SS.baf2RxCryoOpen ? "OrCryo" : "";
          xS = tS.makersShort > 0 ? HS(bS ? `${Tk}rxCryoAddMixer${gS?"":"s"}` : `${Tk}rxWaterAddCondenser${gS?"":"s"}${XS}`, {
            count: String(tS.makersShort)
          }) : HS(`${Tk}rxWaterNeeds`, {
            rate: jk(tS.needPerS)
          })
        } else if (null !== XS) xS = HS(`${Tk}rxWaterRunsOut`, {
          time: DX(HS, XS)
        });
        else if (tS.waterBeside > 0) xS = HS(`${Tk}rxCryoPlusWater`, {
          rate: jk(tS.waterBeside)
        });
        else {
          const SS = function(SS) {
            return SS.inPerS <= 0 ? "rxWaterNoSupply" : SS.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(tS);
          NS = "rxWaterNoSupply" === SS, xS = HS(`${Tk}${SS}`, {
            amount: vq(tS.stored)
          })
        }
        return {
          kind: bS ? "Cryo" : "Water",
          label: HS(bS ? `${Tk}rxCryo` : `${Tk}rxWater`),
          number: `${jk(tS.usePerS)}/s`,
          preview: gS ? `${jk(gS.coolPerS)}/s` : null,
          note: xS,
          tone: "noWater" === SS.baf2RxState ? "danger" : NS ? "warn" : (qS = tS.pct, uS = XS, qS < 100 ? "danger" : null === uS ? null : uS < 300 ? "danger" : "warn"),
          share: tS.pct / 100,
          why: bS ? `${Tk}rxWhy_cryo` : `${Tk}rxWhy_water`,
          short: tS.pct < 100
        };
        var qS, uS
      }(XS, bS, tS), kS = hq(XS, xS.waste, NS), aS = Sa(XS, bS), KS = Zk(XS, XS.baf2RxTarget), jS = uS && Math.abs(KS.settle - XS.baf2RxHeat) >= 3, GS = tS ? tS.pelletsPerMin / 60 : null;
      return (0, JX.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, JX.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, JX.jsx)(ef, {
            kind: "Fuel",
            label: bS(`${Tk}rxFuel`),
            number: String(qS),
            preview: null !== GS && GS > 0 && XS.baf2RxFuel > 0 ? DX(bS, XS.baf2RxFuel / GS) : null,
            note: XS.baf2RxFuel <= 0 ? bS(`${Tk}rxFuelEmpty`) : NS > 0 ? bS(`${Tk}rxFuelLeft`, {
              time: DX(bS, XS.baf2RxFuel / NS)
            }) : bS(1 === qS ? `${Tk}rxFuelPellet` : `${Tk}rxFuelPellets`),
            tone: "noFuel" === XS.baf2RxState ? "danger" : XS.baf2RxFuel < 2 ? "warn" : null,
            share: XS.baf2RxFuel / xS.fuel,
            onExplain: () => {
              gS(`${Tk}rxWhy_fuel`)
            }
          }), (0, JX.jsx)(ef, {
            kind: fS.kind,
            label: fS.label,
            number: fS.number,
            preview: fS.preview,
            note: fS.note,
            tone: fS.tone,
            share: fS.share,
            onExplain: () => {
              gS(fS.why)
            }
          })]
        }), (0, JX.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, JX.jsx)(rf, {
            kind: "Fuel",
            step: IS,
            short: "noFuel" === XS.baf2RxState
          }), (0, JX.jsx)(rf, {
            kind: fS.kind,
            step: IS,
            short: fS.short || "noWater" === XS.baf2RxState
          })]
        }), (0, JX.jsx)(rk, {
          view: HS,
          heat: XS.baf2RxHeat,
          settle: Math.min(Gq, KS.settle),
          settleLine: jS ? bS(`${Tk}rxHeatSettles`, {
            pct: String(Math.round(KS.settle)),
            time: DX(bS, KS.settleS)
          }) : null,
          settleBad: KS.settle > 100,
          explain: gS
        }), (0, JX.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, JX.jsx)(rf, {
            kind: "Power",
            step: IS
          }), (0, JX.jsx)(rf, {
            kind: "Waste",
            step: uS && XS.baf2RxFuel - XS.baf2RxPu > 0 ? IS : 0,
            short: kS.full
          })]
        }), (0, JX.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, JX.jsx)(ef, {
            kind: "Power",
            label: bS(`${Tk}rxPowerOut`),
            number: `\u26a1 ${vq(XS.baf2RxOut)}/s`,
            preview: tS ? vq(tS.out) : null,
            note: aS.note,
            share: aS.share,
            onExplain: () => {
              gS(`${Tk}rxWhy_power`)
            }
          }), (0, JX.jsx)(ef, {
            kind: "Waste",
            label: bS(`${Tk}rxWaste`),
            number: `${Math.floor(XS.baf2RxWaste)}/${xS.waste}`,
            note: kS.full ? bS(`${Tk}rxWasteFull`) : null !== kS.fullInS ? bS(`${Tk}rxWasteFullIn`, {
              time: DX(bS, kS.fullInS)
            }) : bS(`${Tk}rxWasteSpent`),
            tone: "wasteFull" === XS.baf2RxState ? "danger" : kS.full ? "warn" : null,
            share: XS.baf2RxWaste / xS.waste,
            onExplain: () => {
              gS(`${Tk}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function ga(SS) {
      let {
        view: HS,
        explain: gS
      } = SS;
      const {
        t: tS
      } = (0, db.F)(), bS = HS.plan;
      if (!bS) return null;
      const XS = bS.fuelHeat <= 0 ? null : bS.cooling > 0 ? Math.min(Gq, 100 * bS.fuelHeat / bS.cooling) : Gq,
        xS = tS(`${Tk}rxPlanAtFull`);
      return (0, JX.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, JX.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, JX.jsx)(ef, {
            kind: "Fuel",
            label: tS(`${Tk}rxFuel`),
            number: tS(`${Tk}rxPlanPerMin`, {
              amount: Eq(bS.pelletsPerMin)
            }),
            note: tS(`${Tk}rxPlanPellets`),
            onExplain: () => {
              gS(`${Tk}rxWhy_fuel`)
            }
          }), (0, JX.jsx)(ef, {
            kind: "Water",
            label: tS(`${Tk}rxWater`),
            number: `${jk(bS.waterPerS)}/s`,
            note: HS.status.baf2RxCryoOpen && bS.waterPerS > 0 ? tS(`${Tk}rxPlanOrCryo`, {
              rate: jk(kq(bS, eS.i) * eS.n)
            }) : xS,
            onExplain: () => {
              gS(`${Tk}rxWhy_water`)
            }
          })]
        }), (0, JX.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, JX.jsx)(rf, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, JX.jsx)(rf, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, JX.jsx)(rk, {
          view: HS,
          heat: null,
          settle: XS,
          settleLine: null === XS ? null : tS(`${Tk}rxPlanHeat`, {
            pct: String(Math.round(XS))
          }),
          settleBad: null !== XS && XS > 100,
          explain: gS
        }), (0, JX.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, JX.jsx)(rf, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, JX.jsx)(rf, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, JX.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, JX.jsx)(ef, {
            kind: "Power",
            label: tS(`${Tk}rxPowerOut`),
            number: `\u26a1 ${vq(bS.max)}/s`,
            note: xS,
            onExplain: () => {
              gS(`${Tk}rxWhy_power`)
            }
          }), (0, JX.jsx)(ef, {
            kind: "Waste",
            label: tS(`${Tk}rxWaste`),
            number: tS(`${Tk}rxPlanPerMin`, {
              amount: Eq(bS.pelletsPerMin)
            }),
            note: tS(`${Tk}rxWasteSpent`),
            onExplain: () => {
              gS(`${Tk}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const ta = "buildAFactory2Game:",
      ba = {
        key: `${ta}rxWaiting`,
        params: {},
        tone: "info"
      };

    function Xa(SS, HS) {
      return 0 !== (SS.baf2RxFlags & HS)
    }

    function xa(SS) {
      var HS, gS;
      let {
        store: bS,
        close: XS
      } = SS;
      const {
        t: xS
      } = (0, db.F)(), NS = kk(bS), {
        explained: qS,
        hinting: uS,
        explain: IS,
        explainOnce: fS
      } = Hk("baf2RxExplained"), kS = (0, tS.useCallback)(((SS, HS) => {
        IS(xS(SS, HS))
      }), [IS, xS]), aS = (0, tS.useCallback)(((SS, HS) => {
        fS(SS, xS(SS, HS))
      }), [fS, xS]), [KS, jS] = (0, tS.useState)(!1), [GS, CS] = (0, tS.useState)(!1), nS = null === NS || void 0 === NS ? void 0 : NS.status, PS = null === nS || void 0 === nS ? void 0 : nS.baf2RxAt.join(","), QS = !0 === (null === nS || void 0 === nS ? void 0 : nS.baf2RxFormed);
      (0, tS.useEffect)((() => {
        CS(!1), jS(!1)
      }), [PS, QS]), (0, tS.useEffect)((() => (bS.opened(), () => {
        bS.closed()
      })), [bS]);
      const DS = void 0 !== nS && Xa(nS, CH),
        wS = nS ? QS ? jq(nS) : null !== NS && void 0 !== NS && NS.plan ? function(SS, HS) {
          if (SS <= 0) return "off";
          if (HS <= 0) return "alarm";
          const gS = 100 * SS / HS;
          return gS < 50 ? "calm" : gS < qq ? "warm" : gS <= 100 ? "hot" : "alarm"
        }(NS.plan.fuelHeat, NS.plan.cooling) : "off" : "off",
        hS = nS ? Cq(nS) : null,
        ZS = NS ? NS.waiting ? ba : QS ? vk(NS.status) : function(SS) {
          var HS, gS;
          const {
            status: tS
          } = SS;
          return Ek({
            left: tS.baf2RxNeed.reduce(((SS, HS) => {
              let [, gS] = HS;
              return SS + gS
            }), 0),
            bad: tS.baf2RxBad,
            rods: null !== (HS = null === (gS = SS.plan) || void 0 === gS ? void 0 : gS.rods) && void 0 !== HS ? HS : 0,
            canFill: Xa(tS, jH),
            melted: Xa(tS, KH),
            idle: SS.looks.reduce(((SS, HS) => SS + (HS === bq ? 1 : 0)), 0)
          })
        }(NS) : null,
        JS = uS && null !== ZS && ("ok" === ZS.tone || "info" === ZS.tone),
        OS = nS ? function(SS) {
          const HS = 0 !== (SS.baf2RxFlags & kH),
            gS = SS.baf2RxHeat < TN;
          return 0 !== (SS.baf2RxFlags & KH) || gS && (HS || !SS.baf2RxFormed) ? null : SS.baf2RxFormed && !HS ? {
            key: `${Kq}rxApartScram`,
            params: {}
          } : {
            key: `${Kq}rxApartCooling`,
            params: {
              pct: String(TN)
            }
          }
        }(nS) : null,
        [dS, cS, vS] = null !== (HS = null === NS || void 0 === NS ? void 0 : NS.dims) && void 0 !== HS ? HS : [0, 0, 0],
        ES = `${dS}\xd7${cS}\xd7${vS}`;
      return (0, JX.jsx)(Dx.c, {
        close: XS,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, JX.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, JX.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JX.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, JX.jsx)(Kk, {
                mood: wS
              }), (0, JX.jsxs)("div", {
                children: [(0, JX.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: xS(`${ta}rxTitle`)
                }), NS && (0, JX.jsxs)("p", {
                  className: hb()("Baf2RxSubtitle", QS && (null === hS || void 0 === hS ? void 0 : hS.tone)),
                  children: [QS && !DS ? (0, JX.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": xS(`${ta}rxChangeSize`),
                    onClick: () => {
                      if (!nS) return;
                      const SS = Xa(nS, kH);
                      var HS;
                      (HS = {
                        scram: SS,
                        heat: nS.baf2RxHeat
                      }).scram && HS.heat < TN ? jS(!0) : kS(SS ? `${ta}rxResizeCooling` : `${ta}rxResizeHot`, {
                        pct: String(TN)
                      })
                    },
                    children: [ES, " \u270e"]
                  }) : ES, " \xb7 ", xS(QS ? null !== (gS = null === hS || void 0 === hS ? void 0 : hS.label) && void 0 !== gS ? gS : `${ta}rxState_running` : `${ta}rxSubPlanShort`)]
                })]
              })]
            }), (0, JX.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [NS && !DS && (0, JX.jsx)(ak, {
                kind: "reactor",
                busy: NS.busy.has("apart"),
                whyNot: OS ? () => {
                  kS(OS.key, OS.params)
                } : null,
                apart: () => {
                  bS.tap("apart", (() => {
                    bS.send("apart")
                  }))
                }
              }), (0, JX.jsx)(wx.l, {
                onClick: XS
              })]
            })]
          }), NS && ZS && (0, JX.jsxs)("div", {
            className: "Baf2RxBody",
            children: [QS ? (0, JX.jsx)(Ha, {
              view: NS,
              explain: kS,
              preview: hk(NS.status)
            }) : (0, JX.jsx)(ga, {
              view: NS,
              explain: kS
            }), (0, JX.jsx)(gk, {
              text: JS ? `${dk(xS,ZS)} ${xS(`${ta}rxTapHint`)}` : dk(xS, ZS),
              tone: ZS.tone,
              explained: qS
            }), DS ? (0, JX.jsxs)(JX.Fragment, {
              children: [(0, JX.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: xS(`${ta}rxNotYours`)
              }), (0, JX.jsx)(qk, {
                status: NS.status,
                store: bS,
                readOnly: !0
              })]
            }) : QS && !GS ? (0, JX.jsxs)(JX.Fragment, {
              children: [(0, JX.jsx)(Wk, {
                view: NS,
                store: bS,
                explain: kS,
                explainOnce: aS
              }), void 0 !== NS.status.baf2RxLayout && Xk(NS.status) && (0, JX.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, JX.jsx)(qk, {
                  status: NS.status,
                  store: bS,
                  readOnly: !1,
                  bare: !0
                }), (0, JX.jsx)(Nk, {
                  status: NS.status,
                  store: bS,
                  busy: NS.busy.has("fill")
                })]
              })]
            }) : (0, JX.jsxs)(JX.Fragment, {
              children: [(0, JX.jsx)(zk, {
                view: NS,
                store: bS,
                keepSize: QS ? () => {
                  CS(!1)
                } : void 0
              }), Qq(NS.dims, NS.status.baf2RxDims) && (0, JX.jsx)(Uk, {
                need: NS.status.baf2RxNeed,
                explain: kS
              }), (0, JX.jsx)(qk, {
                status: NS.status,
                store: bS,
                readOnly: !1
              })]
            }), KS && (0, JX.jsx)(fk, {
              id: "baf2ResizeTitle",
              title: `${ta}rxResizeConfirmTitle`,
              body: `${ta}rxResizeConfirmBody`,
              yes: `${ta}rxChangeSize`,
              cancel: () => {
                jS(!1)
              },
              confirm: () => {
                jS(!1), CS(!0)
              }
            })]
          })]
        })
      })
    }
    class Na {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(SS) {
        this.view = SS;
        for (const HS of this.listeners) HS()
      }
      get() {
        return this.view
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
    }

    function qa(SS) {
      let {
        commands: HS,
        store: gS,
        power: bS,
        water: XS,
        reactor: xS,
        battery: NS,
        collider: qS,
        terminal: uS,
        quests: IS,
        tutorial: fS,
        close: kS,
        leave: aS,
        askIslands: KS,
        showCore: jS,
        openSocial: GS
      } = SS;
      const {
        userContext: CS
      } = (0, AN.b)(), nS = YN.featureFlags.useSocialFeatures && CS.isLoggedIn(), [PS, QS] = (0, tS.useState)((() => gS.get()));
      (0, tS.useEffect)((() => gS.subscribe((() => {
        QS(gS.get())
      }))), [gS]);
      const DS = "islands" === (null === PS || void 0 === PS ? void 0 : PS.kind) ? PS.backToCore : void 0;
      return (0, JX.jsxs)(Ux.Provider, {
        value: HS,
        children: ["core" === (null === PS || void 0 === PS ? void 0 : PS.kind) && (0, JX.jsx)(jf, {
          view: PS.core,
          close: kS,
          askIslands: KS
        }), "dropMap" === (null === PS || void 0 === PS ? void 0 : PS.kind) && (0, JX.jsx)(Pf, {
          message: PS.dropMap,
          quests: IS,
          close: kS,
          leave: aS
        }), "islands" === (null === PS || void 0 === PS ? void 0 : PS.kind) && (0, JX.jsx)(zf, {
          message: PS.islands,
          arrivedAtMs: PS.arrivedAtMs,
          close: DS ? () => {
            jS(DS)
          } : kS,
          leave: aS,
          openSocial: nS ? GS : null
        }), "quests" === (null === PS || void 0 === PS ? void 0 : PS.kind) && (0, JX.jsx)(AI, {
          store: IS,
          tutorial: fS,
          close: kS
        }), "transfer" === (null === PS || void 0 === PS ? void 0 : PS.kind) && (0, JX.jsx)(gI, {
          message: PS.transfer,
          arrivedAtMs: PS.arrivedAtMs,
          close: kS,
          leave: aS
        }), "power" === (null === PS || void 0 === PS ? void 0 : PS.kind) && (0, JX.jsx)(Ex, {
          store: bS,
          close: kS
        }), "water" === (null === PS || void 0 === PS ? void 0 : PS.kind) && (0, JX.jsx)(jN, {
          store: XS,
          close: kS
        }), "reactor" === (null === PS || void 0 === PS ? void 0 : PS.kind) && (0, JX.jsx)(xa, {
          store: xS,
          close: kS
        }), "battery" === (null === PS || void 0 === PS ? void 0 : PS.kind) && (0, JX.jsx)(sk, {
          store: NS,
          close: kS
        }), "collider" === (null === PS || void 0 === PS ? void 0 : PS.kind) && (0, JX.jsx)(Gu, {
          store: qS,
          close: kS
        }), "terminal" === (null === PS || void 0 === PS ? void 0 : PS.kind) && (0, JX.jsx)(mf, {
          store: uS,
          close: kS,
          send: SS => {
            HS.send(SS)
          }
        })]
      })
    }
    var ua = gS(38518);

    function Ia(SS, HS) {
      return SS.distSq - HS.distSq
    }
    class fa {
      constructor() {
        this.list = [], this.pool = []
      }
      add(SS, HS, gS, tS) {
        let bS = this.pool[this.list.length];
        bS || (bS = {
          x: 0,
          y: 0,
          distSq: 0,
          element: HS,
          liftRem: gS,
          dot: tS
        }, this.pool.push(bS)), bS.x = SS.x, bS.y = SS.y, bS.distSq = SS.distSq, bS.element = HS, bS.liftRem = gS, bS.dot = tS, this.list.push(bS)
      }
    }
    class ka {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = SS, this.sizes = new WeakMap, this.observer = new ResizeObserver((SS => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const HS of SS) {
            const SS = HS.borderBoxSize[0];
            "dot" !== HS.target.dataset.crowded && 0 !== SS.inlineSize && 0 !== SS.blockSize && this.sizes.set(HS.target, {
              width: SS.inlineSize,
              height: SS.blockSize
            })
          }
        })), this.remPx = 16, this.ia = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.WC = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.WC)
      }
      observe(SS) {
        this.observer.observe(SS)
      }
      unobserve(SS) {
        this.observer.unobserve(SS)
      }
      run(SS) {
        const HS = SS.list;
        HS.sort(Ia);
        const gS = this.pxPerVw,
          tS = this.pxPerVh;
        this.ia.length = 0, this.hud && this.ia.push(...this.hud.boxes(performance.now()));
        for (const XS of HS) {
          var bS;
          const SS = this.sizes.get(XS.element);
          let HS = "no";
          if (SS && SS.width > 0) {
            const bS = XS.x * gS,
              xS = XS.y * tS - XS.liftRem * this.remPx;
            this.fit(bS, xS, SS.width, SS.height) || (HS = XS.dot && this.fit(bS, xS, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (bS = XS.element.dataset.crowded) && void 0 !== bS ? bS : "no") !== HS && ("no" === HS ? delete XS.element.dataset.crowded : XS.element.dataset.crowded = HS), "hidden" !== HS && (0, ua.c)(XS.element, XS.x, XS.y)
        }
        HS.length = 0
      }
      fit(SS, HS, gS, tS) {
        const bS = SS - gS / 2,
          XS = SS + gS / 2,
          xS = HS - tS,
          NS = this.ia;
        for (let qS = 0; qS < NS.length; qS += 4)
          if (bS < NS[qS + 1] - 2 && XS > NS[qS] + 2 && xS < NS[qS + 3] - 2 && HS > NS[qS + 2] + 2) return !1;
        return NS.push(bS, XS, xS, HS), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.WC)
      }
    }
    const aa = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class Ka {
      constructor() {
        this.cards = aa.map((SS => document.getElementsByClassName(SS))), this.watched = aa.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(SS) {
        SS - this.refreshedAt > 1e3 && (this.refreshedAt = SS, this.stale = !0);
        for (let gS = 0; gS < this.cards.length; gS++) {
          var HS;
          const SS = null !== (HS = this.cards[gS][0]) && void 0 !== HS ? HS : null;
          SS !== this.watched[gS] && this.watch(gS, SS)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let SS = 0; SS < this.watched.length; SS++) this.watch(SS, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const SS = this.list;
        SS.length = 0;
        for (const HS of this.watched) {
          if (!HS || HS.closest(".NoRoom")) continue;
          const gS = HS.getBoundingClientRect();
          let tS = gS.top,
            bS = gS.bottom;
          if (HS === this.watched[0] && this.hud) {
            const SS = this.hud.getBoundingClientRect();
            tS = Math.max(tS, SS.top), bS = Math.min(bS, SS.bottom)
          }
          gS.width > 0 && bS > tS && SS.push(gS.left, gS.right, tS, bS)
        }
      }
      watch(SS, HS) {
        const gS = this.watched[SS];
        var tS, bS;
        (gS && this.sizes.unobserve(gS), this.watched[SS] = HS, this.stale = !0, HS && this.sizes.observe(HS), 0 === SS) && (null === (tS = this.hud) || void 0 === tS || tS.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (bS = null === HS || void 0 === HS ? void 0 : HS.closest(".Baf2QuestHud")) && void 0 !== bS ? bS : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const ja = [0, 0, 0],
      Ga = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Ca(SS, HS, gS, tS, bS, XS) {
      let [xS, NS, qS] = tS;
      const uS = (xS + .5 - gS[0]) ** 2 + (NS - gS[1]) ** 2 + (qS + .5 - gS[2]) ** 2;
      let IS = null;
      uS <= XS ** 2 && (ja[0] = xS + .5, ja[1] = NS + bS, ja[2] = qS + .5, IS = HS.projectWorldPosToViewport(ja));
      const fS = null !== IS && IS.x > -5 && IS.x < 105 && IS.y > -5 && IS.y < 105;
      return (0, ua.g)(SS, !fS), fS ? (Ga.x = IS.x, Ga.y = IS.y, Ga.distSq = uS, Ga) : null
    }
    class na {
      constructor(SS) {
        this.onElement = SS, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(SS) {
        const HS = [];
        for (let gS = 0; gS + 4 < SS.length; gS += 5) {
          const tS = [SS[gS], SS[gS + 1], SS[gS + 2]];
          HS.push({
            key: tS.join(","),
            pos: tS,
            status: bb[SS[gS + 3]],
            kind: dH[SS[gS + 4]]
          })
        }
        this.markers = HS, this.keys = new Set(HS.map((SS => {
          let {
            key: HS
          } = SS;
          return HS
        }))), this.notify()
      }
      covers(SS) {
        return this.keys.has(SS)
      }
      get() {
        return this.markers
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      bind(SS) {
        let HS = this.refs.get(SS);
        return HS || (HS = HS => {
          const gS = this.elements.get(SS);
          var tS, bS;
          gS && (null === (tS = this.onElement) || void 0 === tS || tS.call(this, gS, !1));
          HS ? (this.elements.set(SS, HS), null === (bS = this.onElement) || void 0 === bS || bS.call(this, HS, !0)) : (this.elements.delete(SS), this.refs.delete(SS))
        }, this.refs.set(SS, HS)), HS
      }
      onAfterRender(SS, HS, gS) {
        for (const tS of this.markers) {
          const bS = this.elements.get(tS.key);
          if (!bS) continue;
          const XS = Ca(bS, SS, HS, tS.pos, 1.05, 24);
          XS && gS.add(XS, bS, .45, !0)
        }
      }
      notify() {
        for (const SS of this.listeners) SS()
      }
    }
    const Pa = {
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
    const Qa = (0, tS.memo)((function(SS) {
        let {
          status: HS,
          kind: gS,
          bindRef: tS
        } = SS;
        const {
          t: bS
        } = (0, db.F)(), XS = function(SS, HS) {
          var gS;
          if ("noFuel" === SS) {
            var tS, bS;
            const SS = null === (tS = AH[HS]) || void 0 === tS || null === (bS = tS.fuels) || void 0 === bS ? void 0 : bS.find((SS => tg.includes(SS)));
            return null !== SS && void 0 !== SS ? SS : Pa.noFuel
          }
          return void 0 !== (null === (gS = AH[HS]) || void 0 === gS ? void 0 : gS.cryoMade) ? "noOutlet" === SS ? "Fluid Pipe" : "noInput" === SS ? "Biomass" : Pa[SS] : Pa[SS]
        }(HS, gS);
        return (0, JX.jsxs)("div", {
          className: hb()("Baf2StallMarker", HS),
          ref: tS,
          hidden: !0,
          children: [XS && (0, JX.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, JX.jsx)(vb.e, {
              itemName: XS,
              amount: 0
            })
          }), (0, JX.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === HS ? "?" : "!"
          }), (0, JX.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: bS(`buildAFactory2Game:stallTag_${HS}`)
          })]
        })
      })),
      Da = (0, tS.memo)((function(SS) {
        let {
          controller: HS
        } = SS;
        const [gS, bS] = (0, tS.useState)((() => HS.get()));
        return (0, tS.useEffect)((() => (bS(HS.get()), HS.subscribe((() => {
          bS(HS.get())
        })))), [HS]), (0, JX.jsx)("div", {
          className: "Baf2StallMarkers",
          children: gS.map((SS => (0, JX.jsx)(Qa, {
            status: SS.status,
            kind: SS.kind,
            bindRef: HS.bind(SS.key)
          }, SS.key)))
        })
      })),
      wa = jg.i + 150;
    class ha {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(SS, HS) {
        const gS = HS - SS;
        null === this.offset || gS < this.offset ? this.offset = gS : this.offset = Math.min(gS, this.offset + .02 * (HS - this.sampledAt)), this.sampledAt = HS
      }
      toLocal(SS) {
        var HS;
        return SS + (null !== (HS = this.offset) && void 0 !== HS ? HS : 0) + wa
      }
    }
    var Za = gS(38522);
    const Ja = 15 * Math.PI / 180,
      Oa = Math.SQRT2,
      da = [4, 2];

    function ca(SS, HS) {
      const gS = [1 / 0, 1 / 0, 1 / 0],
        tS = [-1 / 0, -1 / 0, -1 / 0];
      for (const qS of SS)
        for (let SS = 0; SS < 3; SS++) gS[SS] = Math.min(gS[SS], qS[SS]), tS[SS] = Math.max(tS[SS], qS[SS]);
      const bS = (gS[0] + tS[0]) / 2,
        XS = (gS[1] + tS[1]) / 2,
        xS = (gS[2] + tS[2]) / 2;
      let NS = 0;
      for (const qS of SS) NS = Math.max(NS, Math.hypot(qS[0] - bS, qS[1] - XS, qS[2] - xS));
      return {
        x: bS,
        y: XS,
        z: xS,
        r: NS + HS
      }
    }

    function va(SS, HS, gS) {
      const tS = HS.x - SS.x,
        bS = HS.y - SS.y,
        XS = HS.z - SS.z,
        xS = Math.sqrt(tS * tS + bS * bS + XS * XS);
      if (xS <= HS.r + 8) return 1;
      const NS = HS.r / xS,
        qS = Math.sqrt(1 - NS * NS),
        uS = qS < -SS.cosHalf,
        IS = (tS * SS.dx + bS * SS.dy + XS * SS.dz) / xS;
      if (!uS && IS < SS.cosHalf * qS - SS.sinHalf * NS) return 0;
      const fS = gS * Oa * SS.frameMs * SS.pxPerBlock / (xS - HS.r);
      for (let kS = 0; kS < da.length; kS++)
        if (fS * da[kS] <= 1) return da[kS];
      return 1
    }

    function Ea(SS, HS) {
      return {
        name: SS,
        at: HS,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const La = [0, 0, 0];

    function Ya(SS, HS, gS) {
      let [, tS, bS, XS, xS, NS] = HS;
      const qS = jg.d * (null !== xS && void 0 !== xS ? xS : 1),
        uS = [];
      for (let aS = 0; aS < tS.length; aS += 3) uS.push([tS[aS] + .5, tS[aS + 1] + .65, tS[aS + 2] + .5]);
      const IS = [];
      for (let aS = 0; aS < uS.length - 1; aS++) {
        const [SS, HS] = [uS[aS], uS[aS + 1]];
        IS.push([(SS[0] + HS[0]) / 2, (SS[1] + HS[1]) / 2, (SS[2] + HS[2]) / 2])
      }
      const fS = uS.slice(1, -1),
        kS = new Uint8Array(fS.length);
      for (const aS of null !== NS && void 0 !== NS ? NS : []) kS[aS >> 1] |= 1 & aS ? 2 : 1;
      return {
        island: SS,
        length: fS.length,
        loop: XS,
        cellsPerMs: qS,
        edges: IS,
        ck: fS,
        bounds: ca([...IS, ...fS], .3),
        changed: !0,
        culled: !1,
        hide: kS,
        items: bS.map((SS => {
          let [HS, tS] = SS;
          return Ea(HS, (0, jg.A)(HS, tS, gS, qS).at)
        }))
      }
    }

    function Aa(SS, HS) {
      const {
        items: gS
      } = SS;
      if (0 === gS.length) return;
      const tS = SS.length / SS.cellsPerMs,
        bS = Math.floor((HS - gS[0].at) / tS) - 1;
      if (bS > 0)
        for (const XS of gS) XS.at += bS * tS
    }

    function ya(SS, HS) {
      const gS = Math.min(Math.floor(HS), SS.length - 1),
        tS = SS.hide[gS];
      return 0 !== tS && 0 !== (tS & (HS - gS < .5 ? 1 : 2))
    }

    function Va(SS, HS) {
      const gS = Math.min(Math.floor(HS), SS.length - 1),
        tS = HS - gS,
        bS = tS < .5,
        XS = bS ? SS.edges[gS] : SS.ck[gS],
        xS = bS ? SS.ck[gS] : SS.edges[gS + 1],
        NS = bS ? 2 * tS : 2 * tS - 1;
      La[0] = XS[0] + (xS[0] - XS[0]) * NS, La[1] = XS[1] + (xS[1] - XS[1]) * NS, La[2] = XS[2] + (xS[2] - XS[2]) * NS
    }
    const ia = Math.PI / 4;
    class Wa {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new ha, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.WC = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(SS) {
        const HS = performance.now();
        this.clock.sample(SS.baf2BeltLinesAt, HS), this.queue(SS.baf2BeltLinesAt, SS, 0, null, null, 0), this.applyDue(HS)
      }
      onMoves(SS) {
        const HS = performance.now(),
          gS = SS.baf2BeltMovesAt;
        this.clock.sample(gS, HS);
        for (const [tS, bS, XS, xS] of SS.baf2BeltMoveList) null === bS ? this.queue(gS - XS, null, tS, null, null, null !== xS && void 0 !== xS ? xS : 0) : this.queue(gS - XS, null, tS, bS, null !== xS && void 0 !== xS ? xS : null, 0);
        this.applyDue(HS)
      }
      start(SS) {
        this.pool = new Za.e(SS, {
          scale: .3,
          yaw: ia
        }, 64), this.WC(), window.addEventListener("resize", this.WC)
      }
      onAfterRender(SS) {
        const {
          pool: HS
        } = this;
        if (!HS) return;
        const gS = performance.now(),
          tS = gS - this.lastRenderAt;
        this.lastRenderAt = gS, tS < 100 && (this.frameMs += .1 * (tS - this.frameMs));
        const bS = gS + this.frameMs;
        this.applyDue(bS);
        const XS = SS.cameraPosition,
          xS = HS.follow(XS);
        this.setView(SS, XS);
        const NS = this.frame++;
        for (let qS = 0; qS < this.shown.length; qS++) {
          const SS = this.shown[qS],
            gS = va(this.view, SS.bounds, SS.cellsPerMs),
            tS = SS.culled && 0 !== gS;
          if (SS.culled = 0 === gS, !xS && !SS.changed && !tS && (0 === gS || (NS + qS) % gS !== 0)) continue;
          SS.changed = !1, SS.loop && (Aa(SS, bS), (0, jg.v)(SS.items, SS.length, bS, SS.cellsPerMs));
          let XS = SS.length;
          for (let NS = 0; NS < SS.items.length; NS++) {
            const gS = SS.items[NS],
              tS = (0, jg.E)(gS.at, XS, bS, SS.cellsPerMs);
            if (XS = tS - jg.m, ya(SS, tS)) {
              null === gS.kind || gS.hidden || (gS.kind.hide(gS.slot), gS.hidden = !0);
              continue
            }
            let qS = gS.kind;
            if (null === qS) {
              if (qS = HS.kindOf(gS.name), null === qS) continue;
              gS.kind = qS, gS.slot = qS.take(), gS.hidden = !0, gS.drawn = NaN
            } else if (tS === gS.drawn && !gS.hidden && !xS) continue;
            Va(SS, tS), qS.write(gS.slot, La[0], La[1], La[2]), gS.hidden = !1, gS.drawn = tS
          }
        }
        HS.commit()
      }
      dispose() {
        var SS;
        window.removeEventListener("resize", this.WC), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (SS = this.pool) || void 0 === SS || SS.dispose(), this.pool = null
      }
      setView(SS, HS) {
        const {
          cameraDir: gS,
          lastDir: tS
        } = this, bS = SS.cameraDirection;
        for (let IS = 0; IS < 3; IS++) tS[IS] = gS[IS], gS[IS] = bS[IS];
        const XS = gS[0] * tS[0] + gS[1] * tS[1] + gS[2] * tS[2],
          xS = Number.isNaN(XS) ? 0 : Math.acos(Math.min(1, Math.max(-1, XS))),
          {
            width: NS,
            height: qS
          } = this,
          uS = SS.tanHalfFovX;
        ! function(SS, HS, gS, tS, bS, XS, xS) {
          let NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          SS.x = HS[0], SS.y = HS[1], SS.z = HS[2], SS.dx = gS[0], SS.dy = gS[1], SS.dz = gS[2];
          const qS = Math.min(Math.PI, Math.atan(Math.sqrt(tS * tS + bS * bS)) + Ja + NS);
          SS.cosHalf = Math.cos(qS), SS.sinHalf = Math.sin(qS), SS.pxPerBlock = XS / (2 * bS), SS.frameMs = xS
        }(this.view, HS, gS, uS, uS * qS / NS, qS * window.devicePixelRatio, this.frameMs, xS)
      }
      queue(SS, HS, gS, tS, bS, XS) {
        const xS = Math.max(this.clock.toLocal(SS), this.lastPendingAt);
        this.lastPendingAt = xS, this.pending.push({
          at: xS,
          lines: HS,
          line: gS,
          name: tS,
          pos: bS,
          idx: XS
        })
      }
      applyDue(SS) {
        const {
          pending: HS
        } = this;
        for (; this.pendingHead < HS.length && HS[this.pendingHead].at <= SS;) {
          const SS = HS[this.pendingHead++];
          if (SS.lines) this.applyLines(SS.lines, SS.at), SS.lines = null;
          else {
            const HS = this.lines.get(SS.line);
            HS && this.applyMove(HS, SS, SS.at)
          }
        }
        this.pendingHead === HS.length ? (HS.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > HS.length && (HS.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(SS, HS) {
        this.clearIsland(SS.baf2BeltIsland);
        for (const gS of SS.baf2BeltLineList) this.lines.set(gS[0], Ya(SS.baf2BeltIsland, gS, HS));
        this.shown = [...this.lines.values()]
      }
      applyMove(SS, HS, gS) {
        let {
          name: tS,
          pos: bS,
          idx: XS
        } = HS;
        SS.changed = !0, SS.loop && (Aa(SS, gS), (0, jg.v)(SS.items, SS.length, gS, SS.cellsPerMs)), null !== tS && null !== bS ? (0, jg.z)(SS.items, SS.length, Ea(tS, gS), bS, gS, SS.cellsPerMs) : null !== tS ? SS.items.push(Ea(tS, gS)) : SS.items.length > XS && this.release((0, jg.G)(SS.items, SS.length, gS, SS.cellsPerMs, XS))
      }
      clearIsland(SS) {
        for (const [HS, gS] of this.lines)
          if (gS.island === SS) {
            for (const SS of gS.items) this.release(SS);
            this.lines.delete(HS)
          }
      }
      release(SS) {
        null !== SS.kind && (SS.kind.release(SS.slot), SS.kind = null, SS.slot = -1, SS.hidden = !0, SS.drawn = NaN)
      }
    }
    var za = gS(36616),
      Ua = gS(38534);

    function pa(SS) {
      let {
        depth: HS,
        store: gS,
        t: bS
      } = SS;
      const XS = function(SS) {
        const [HS, gS] = (0, tS.useState)(SS.lastPlayerY());
        return (0, tI.g)(ib, gS), (0, tS.useEffect)((() => {
          gS(SS.lastPlayerY())
        }), [SS]), HS
      }(gS);
      if (null === XS) return null;
      const [xS, NS] = HS, qS = XS > xS ? xS : null !== NS && XS < NS ? NS : null, uS = {
        y: QX(XS),
        target: null === qS ? "" : QX(qS)
      };
      return (0, JX.jsx)("span", {
        className: hb()("Baf2QuestDepth", {
          Reached: null === qS
        }),
        children: bS(`${NI}${null===qS?"questDepthReached":"questDepth"}`, uS)
      })
    }

    function sa(SS) {
      let {
        also: HS,
        view: gS,
        t: tS
      } = SS;
      return (0, JX.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, JX.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, JX.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, JX.jsx)("strong", {
            children: tS(`${NI}questAlsoDownHere`)
          }), (0, JX.jsx)("span", {
            className: "Baf2QuestChips",
            children: HS.map((SS => {
              let [HS, bS, XS, xS] = SS;
              return (0, JX.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": tS(`${NI}questAlsoItem`, {
                  item: uI(tS, gS.itemNames[HS], HS),
                  have: String(bS),
                  need: String(XS)
                }),
                children: [(0, JX.jsx)(kI, {
                  item: HS
                }), (0, JX.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${bS}/${XS}`
                }), null !== xS && (0, JX.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: tS(`${NI}questAlsoDepth`, {
                    y: QX(xS)
                  })
                })]
              }, HS)
            }))
          })]
        })]
      })
    }
    var Ba = gS(3544);

    function Ma(SS) {
      let {
        expanded: HS,
        inventoryOpen: gS,
        children: bS
      } = SS;
      const XS = (0, tS.useRef)(null);
      return (0, tS.useEffect)((() => {
        const SS = XS.current,
          HS = null === SS || void 0 === SS ? void 0 : SS.closest(".RightElements"),
          tS = null === SS || void 0 === SS ? void 0 : SS.firstElementChild;
        if (!SS || !HS || !tS) return;
        return (0, Ua.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [HS, tS], (() => {
          const bS = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === bS.length) return;
          const XS = Math.max(...bS.map((SS => SS.getBoundingClientRect().bottom))),
            xS = HS.getBoundingClientRect(),
            NS = gS ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (NS) {
            const HS = parseFloat(getComputedStyle(tS).marginLeft) + parseFloat(getComputedStyle(tS).marginRight),
              gS = xS.right - NS.getBoundingClientRect().right - 8 - HS;
            SS.style.setProperty("--baf2-quest-room", `${gS}px`), SS.classList.toggle("NoRoom", gS < 150)
          } else SS.style.removeProperty("--baf2-quest-room"), SS.classList.remove("NoRoom");
          const qS = XS - xS.top + 8,
            uS = function(SS, HS, gS) {
              const tS = HS.getBoundingClientRect(),
                bS = SS.getBoundingClientRect(),
                XS = (0, Ba.f)(bS.left, bS.right, tS.top + gS);
              if (null !== XS && XS < tS.bottom) return XS - tS.top;
              return tS.height - (parseFloat(getComputedStyle(HS).paddingBottom) || 0)
            }(SS, HS, qS) - 8,
            IS = window.innerHeight / 2 - xS.top,
            {
              top: fS,
              maxHeight: kS
            } = function(SS, HS, gS, tS, bS) {
              const XS = Math.min(gS, Math.max(0, HS - SS)),
                xS = bS ? SS : Math.max(SS, Math.min(tS - XS / 2, HS - XS));
              return {
                top: xS,
                maxHeight: Math.max(0, HS - xS)
              }
            }(qS, uS, function(SS) {
              const HS = SS.firstElementChild,
                gS = HS ? HS.scrollHeight - HS.clientHeight : 0;
              return SS.getBoundingClientRect().height + Math.max(0, gS)
            }(tS), IS, ZX());
          SS.style.top = `${fS}px`, SS.style.maxHeight = `${kS}px`
        }))
      }), [gS]), (0, JX.jsx)("div", {
        ref: XS,
        className: hb()("Baf2QuestHud", {
          Expanded: HS
        }),
        children: bS
      })
    }

    function Fa(SS) {
      let {
        amount: HS,
        t: gS
      } = SS;
      return (0, JX.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, JX.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, JX.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: gS(`${NI}questStepsDone`, {
            amount: String(HS)
          })
        })]
      })
    }

    function Ra(SS) {
      let {
        pulse: HS
      } = SS;
      return 0 === HS ? null : (0, JX.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, HS)
    }

    function Ta(SS) {
      var HS;
      let {
        store: gS
      } = SS;
      const bS = (0, tI.i)(Vb, gS.get()),
        [XS, xS] = (0, tS.useState)(!1),
        {
          t: NS
        } = (0, db.F)(),
        qS = (0, wX.i)(hX),
        {
          openInGameMenuName: uS,
          openEverythingMenuName: IS
        } = (0, Qb.m)(["openInGameMenuName", "openEverythingMenuName"]),
        fS = "inventory" === uS && null === IS,
        kS = null !== uS && !fS || null !== IS;
      if (! function(SS) {
          return null !== SS.name || null !== SS.side
        }(bS) || kS || "off" === bS.tutorial) return null;
      const aS = Bb(bS.rows),
        KS = aS.filter((SS => SS.done)).length,
        jS = function(SS, HS) {
          const gS = Rb(SS);
          let tS = 0;
          return SS.filter(((SS, bS) => !!SS.justFinished || !(SS.done || bS < gS || tS > HS) && (tS++, !0)))
        }(bS.rows, qS ? 0 : 2),
        GS = qS ? jS : function(SS, HS) {
          const gS = HS.filter((SS => !SS.justFinished));
          if (gS.length < 2) return [...HS];
          const tS = SS.indexOf(gS[0]),
            bS = SS.indexOf(gS[gS.length - 1]),
            XS = new Set(Bb(SS));
          return SS.filter(((SS, gS) => HS.includes(SS) || SS.done && XS.has(SS) && gS > tS && gS < bS))
        }(bS.rows, jS),
        CS = XS ? bS.rows : GS,
        nS = XS || qS ? [] : function(SS, HS) {
          const gS = new Array(HS.length + 1).fill(0),
            tS = new Set(Bb(SS));
          let bS = 0;
          for (const XS of SS) bS < HS.length && XS === HS[bS] ? bS++ : XS.done && tS.has(XS) && gS[bS]++;
          return gS
        }(bS.rows, GS),
        PS = XS || GS.length < bS.rows.length || null !== bS.reward,
        QS = sb(bS),
        DS = QS ? NS(`${NI}questLineComplete`) : bS.tier ? jI(NS, bS.tier) : NS(`${NI}currentQuest`),
        wS = function(SS) {
          var HS, gS;
          if (sb(SS)) return null;
          const tS = null === (HS = SS.chapters) || void 0 === HS ? void 0 : HS.find((HS => {
            let [gS] = HS;
            return gS === SS.tier
          }));
          if (!tS) return null;
          const bS = tS[1].filter((SS => !SS[4]));
          if (0 === bS.length) return null;
          const XS = null === (gS = SS.name) || void 0 === gS ? void 0 : gS[0],
            xS = SS => bS.findIndex((HS => HS[0] === XS && (!SS || !HS[3]))),
            NS = xS(!0),
            qS = NS >= 0 ? NS : xS(!1);
          if (qS >= 0) return [qS + 1, bS.length];
          const uS = bS.filter((SS => SS[3])).length;
          return [Math.min(uS + 1, bS.length), bS.length]
        }(bS);
      return (0, JX.jsx)(za.g, {
        placement: "topRight",
        children: (0, JX.jsx)(Ma, {
          expanded: XS,
          inventoryOpen: fS,
          children: (0, JX.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: qI,
            children: [null !== bS.name && (0, JX.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, JX.jsx)(Ra, {
                pulse: bS.pulse
              }), (0, JX.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, JX.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [DS, wS && (0, JX.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": NS(`${NI}questPlaceLabel`, {
                      n: String(wS[0]),
                      total: String(wS[1])
                    }),
                    children: NS(`${NI}questPlace`, {
                      n: String(wS[0]),
                      total: String(wS[1])
                    })
                  }), bS.tier && bS.core && !QS && (0, JX.jsx)(GI, {
                    core: bS.core,
                    t: NS
                  })]
                })
              }), (0, JX.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: NS(`${NI}${bS.name[0]}`, II(bS.name[1]))
              }), (aS.length > 1 || PS) && (0, JX.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [aS.length > 1 && (0, JX.jsx)(CI, {
                  rows: aS,
                  t: NS
                }), PS && (0, JX.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": XS,
                  onClick: () => {
                    xS(!XS)
                  },
                  children: [(0, JX.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: NS(`${NI}questStepsToggle`, {
                      done: String(KS),
                      total: String(aS.length)
                    })
                  }), (0, JX.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: XS ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, JX.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [CS.map(((SS, HS) => {
                  var XS;
                  const xS = SS.current && bS.depth;
                  return (0, JX.jsxs)(tS.Fragment, {
                    children: [(null !== (XS = nS[HS]) && void 0 !== XS ? XS : 0) > 0 && (0, JX.jsx)(Fa, {
                      amount: nS[HS],
                      t: NS
                    }), (0, JX.jsx)(nI, {
                      row: SS,
                      view: bS,
                      t: NS,
                      extra: xS && (0, JX.jsx)(pa, {
                        depth: xS,
                        store: gS,
                        t: NS
                      })
                    })]
                  }, SS.id)
                })), (null !== (HS = nS[CS.length]) && void 0 !== HS ? HS : 0) > 0 && (0, JX.jsx)(Fa, {
                  amount: nS[CS.length],
                  t: NS
                }), bS.also.length > 0 && (0, JX.jsx)(sa, {
                  also: bS.also,
                  view: bS,
                  t: NS
                })]
              }), XS && bS.reward && (0, JX.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [NS(`${NI}questReward`), (0, JX.jsx)(kI, {
                  item: bS.reward
                }), uI(NS, bS.itemNames[bS.reward], bS.reward)]
              })]
            }), bS.side && (0, JX.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [Ub(bS, Date.now()) && (0, JX.jsx)(Ra, {
                pulse: bS.sideCameUpAt
              }), (0, JX.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: NS(`${NI}questSide`)
              }), (0, JX.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: NS(`${NI}${bS.side.name[0]}`, II(bS.side.name[1]))
              }), (0, JX.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, JX.jsx)(nI, {
                  row: bS.side.row,
                  view: bS,
                  t: NS
                })
              })]
            })]
          })
        })
      })
    }
    const oa = "baf2ToastView";
    class la {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = SS, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: SS,
          holdMs: HS
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const SS = this.dropCovered();
          SS && this.show(SS.message, SS.holdMs)
        }), 250));
        const gS = this.dropCovered();
        null !== gS && (gS.holdMs > 0 || "baf2ToastCelebrate" === gS.message.baf2ToastStyle) && "baf2ToastCelebrate" !== SS.baf2ToastStyle && this.show(gS.message, gS.holdMs);
        const tS = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== SS.baf2ToastStyle && tS > 0) return this.pending = {
          message: SS,
          holdMs: HS
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const SS = this.pending;
          this.pending = null, SS && this.present(SS.message, SS.holdMs)
        }), tS));
        this.present(SS, HS)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(SS, HS) {
        this.clearTimers(), this.pending = null;
        const gS = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: SS.baf2ToastText,
          style: SS.baf2ToastStyle,
          swapped: gS,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === SS.baf2ToastStyle ? 1500 : HS), this.cj();
        const tS = Math.min(8e3, Math.max(1e3, SS.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), tS)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.cj(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.cj()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const SS = this.covering;
        return this.covering = null, SS
      }
      cj() {
        Ab.k.cj(oa, this.view, !0)
      }
    }
    var ma = gS(77);
    const ea = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function ra(SS) {
      let {
        store: HS
      } = SS;
      const gS = (0, tI.i)(oa, HS.get()),
        {
          openInGameMenuName: tS,
          openEverythingMenuName: bS
        } = (0, Qb.m)(["openInGameMenuName", "openEverythingMenuName"]),
        XS = gS && (0, JX.jsxs)("div", {
          className: hb()("Baf2Toast", ea[gS.style], {
            Swapped: gS.swapped,
            Leaving: gS.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === gS.style && (0, JX.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, JX.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, JX.jsx)(Eb.c, {
              text: gS.text
            })
          })]
        }, gS.id);
      return null !== tS && null === bS ? (0, ma.createPortal)((0, JX.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: XS
      }), document.body) : (0, JX.jsx)(za.g, {
        children: XS
      })
    }
    const SK = "baf2AreaView";
    class HK {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.Ku = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.Ku = null
      }
      arrive(SS, HS) {
        HS && function(SS) {
          return "home" === SS.baf2AreaPlace && void 0 !== SS.baf2AreaNameText
        }(SS) ? this.Ku = SS : this.show(SS)
      }
      release() {
        const SS = this.Ku;
        null !== SS && this.show(SS)
      }
      show(SS) {
        this.clearTimer(), this.Ku = null;
        const HS = void 0 === SS.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: SS,
          ms: HS
        }, this.cj(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.cj()
        }), HS)
      }
      dispose() {
        this.clearTimer(), this.Ku = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      cj() {
        Ab.k.cj(SK, this.view, !0)
      }
    }

    function gK(SS) {
      var HS;
      let {
        store: gS
      } = SS;
      const {
        t: tS
      } = (0, db.F)(), bS = (0, tI.i)(SK, gS.get());
      if (!bS) return null;
      const {
        area: XS
      } = bS, xS = XS.baf2AreaResetMinutes;
      return (0, JX.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": XS.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${bS.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, JX.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), XS.baf2AreaHeading && (0, JX.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: tS(XS.baf2AreaHeading)
        }), (0, JX.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (HS = XS.baf2AreaNameText) && void 0 !== HS ? HS : tS(XS.baf2AreaName)
        }), XS.baf2AreaNote && (0, JX.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: tS(XS.baf2AreaNote)
        }), void 0 !== xS && (0, JX.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: tS("buildAFactory2Game:areaWildsReset", {
            time: DX(tS, 60 * xS)
          })
        })]
      }, bS.id)
    }
    const tK = "baf2GearGauge";
    class bK {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      eC(SS) {
        var HS;
        if (this.clearLinger(), null === SS.gearPowerKind) return void this.set(null);
        const gS = "jetpack" === SS.gearPowerKind && (tS = SS.gearChargeState, bS = SS.gearCharge, "flying" === tS || "charging" === tS || "outOfCharge" === tS || "ceiling" === tS || "offPlot" === tS || "noPower" === tS && bS <= 0);
        var tS, bS;
        const XS = !0 === (null === (HS = this.view) || void 0 === HS ? void 0 : HS.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          xS = gS || "jetpack" === SS.gearPowerKind && XS;
        this.set({
          gauge: SS,
          jetShown: xS
        }), xS && !gS && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(SS) {
        this.view = SS, Ab.k.cj(tK, SS, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const XK = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function xK(SS) {
      let {
        store: HS
      } = SS;
      const gS = (0, tI.i)(tK, HS.get());
      return gS ? "jetpack" === gS.gauge.gearPowerKind ? (0, JX.jsx)(NK, {
        view: gS
      }) : (0, JX.jsx)(qK, {
        gauge: gS.gauge
      }) : null
    }

    function NK(SS) {
      let {
        view: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)(), {
        gauge: tS
      } = HS, bS = tS.gearChargeMax > 0 ? Math.max(0, Math.min(1, tS.gearCharge / tS.gearChargeMax)) : 0, XS = XK[tS.gearChargeState], xS = XS ? gS(XS) : null;
      return (0, JX.jsxs)("div", {
        className: hb()("Baf2JetArc", {
          Shown: HS.jetShown,
          Low: bS < .2,
          Warm: bS >= .2 && bS < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - bS)
        },
        "aria-hidden": !HS.jetShown,
        children: [(0, JX.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, JX.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: uK,
            pathLength: 100
          }), (0, JX.jsx)("path", {
            className: "Baf2JetArcFill",
            d: uK,
            pathLength: 100
          })]
        }), (0, JX.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * bS), "%"]
        }), xS && (0, JX.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: xS
        })]
      })
    }

    function qK(SS) {
      let {
        gauge: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)(), tS = function(SS, HS) {
        switch (HS.gearPowerKind) {
          case "skyPack":
            return SS("buildAFactory2Game:gearSkyPack", {
              charge: HS.gearCharge,
              max: HS.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return SS("buildAFactory2Game:gearIslandDraw", {
              power: mS(HS.gearIslandPower),
              cost: mS(HS.gearCostPerUse)
            });
          case "barrier":
            return SS("buildAFactory2Game:gearBarrier", {
              shield: Math.round(HS.gearCharge),
              max: HS.gearChargeMax,
              power: mS(HS.gearIslandPower)
            });
          default:
            return null
        }
      }(gS, HS);
      return null === tS ? null : (0, JX.jsx)(za.g, {
        children: (0, JX.jsx)("div", {
          className: hb()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === HS.gearChargeState || "outOfCharge" === HS.gearChargeState
          }),
          role: "status",
          children: tS
        })
      })
    }
    const uK = (() => {
      const SS = SS => {
        const HS = SS * Math.PI / 180;
        return `${(40*Math.cos(HS)).toFixed(2)} ${(40*Math.sin(HS)).toFixed(2)}`
      };
      return `M ${SS(160)} A 40 40 0 1 1 ${SS(380)}`
    })();
    class IK {
      constructor(SS) {
        this.onElement = SS, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      eC(SS) {
        let HS = SS.baf2LabelsReset || SS.baf2LabelsIsland !== this.island;
        HS && (this.labels.clear(), this.island = SS.baf2LabelsIsland);
        for (const [gS, tS, bS, XS, xS] of SS.baf2LabelsList) {
          const SS = `${gS},${tS},${bS}`,
            NS = this.labels.get(SS);
          null === XS ? HS = this.labels.delete(SS) || HS : NS && NS.item === XS && (NS.count === xS || NS.count >= 0 && xS >= 0) ? NS.count !== xS && (NS.count = xS, this.writeCount(SS, xS)) : (this.labels.set(SS, {
            key: SS,
            pos: [gS, tS, bS],
            item: XS,
            count: xS
          }), this.writeCount(SS, xS), HS = !0)
        }
        if (this.changes++, HS) {
          this.snapshot = [...this.labels.values()];
          for (const SS of this.listeners) SS()
        }
      }
      bindCount(SS) {
        const HS = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${SS}`;
        let gS = this.countRefs.get(HS);
        return gS || (gS = gS => {
          var tS, bS;
          gS ? (this.countElements.set(HS, gS), this.writeCount(SS, null !== (tS = null === (bS = this.labels.get(SS)) || void 0 === bS ? void 0 : bS.count) && void 0 !== tS ? tS : -1)) : (this.countElements.delete(HS), this.countRefs.delete(HS))
        }, this.countRefs.set(HS, gS)), gS
      }
      setCountWords(SS) {
        this.countWords = SS;
        for (const [HS, gS] of this.labels) this.writePart(`words|${HS}`, SS(gS.count), gS.count)
      }
      writeCount(SS, HS) {
        this.writePart(`bare|${SS}`, PX(HS), HS), this.countElements.has(`words|${SS}`) && this.writePart(`words|${SS}`, this.countWords(HS), HS)
      }
      writePart(SS, HS, gS) {
        const tS = this.countElements.get(SS);
        if (!tS || gS < 0) return;
        const bS = tS.firstChild;
        bS && 3 === bS.nodeType && !bS.nextSibling ? bS.nodeValue !== HS && (bS.nodeValue = HS) : tS.textContent !== HS && (tS.textContent = HS)
      }
      list() {
        return this.snapshot
      }
      at(SS) {
        return this.labels.get(`${SS[0]},${SS[1]},${SS[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      bind(SS) {
        let HS = this.refs.get(SS);
        return HS || (HS = HS => {
          const gS = this.elements.get(SS);
          var tS, bS;
          gS && (null === (tS = this.onElement) || void 0 === tS || tS.call(this, gS, !1));
          HS ? (this.elements.set(SS, HS), null === (bS = this.onElement) || void 0 === bS || bS.call(this, HS, !0)) : (this.elements.delete(SS), this.refs.delete(SS))
        }, this.refs.set(SS, HS)), HS
      }
      onAfterRender(SS, HS, gS, tS) {
        for (const bS of this.snapshot) {
          const XS = this.elements.get(bS.key);
          if (!XS) continue;
          if (tS(bS.key)) {
            (0, ua.g)(XS, !0);
            continue
          }
          const xS = Ca(XS, SS, HS, bS.pos, 1.1, 24);
          xS && gS.add(xS, XS, 0, !1)
        }
      }
    }
    const fK = (0, tS.memo)((function(SS) {
        let {
          item: HS
        } = SS;
        return (0, JX.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, JX.jsx)(vb.e, {
            itemName: HS,
            amount: 0
          })
        })
      })),
      kK = (0, tS.memo)((function(SS) {
        let {
          label: HS,
          bindRef: gS,
          countRef: tS,
          wordsRef: bS
        } = SS;
        return (0, JX.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: gS,
          hidden: !0,
          children: [(0, JX.jsx)(fK, {
            item: HS.item
          }), HS.count >= 0 && (0, JX.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, JX.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: bS
            }), (0, JX.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: tS
            })]
          })]
        })
      })),
      aK = (0, tS.memo)((function(SS) {
        let {
          store: HS
        } = SS;
        const {
          t: gS
        } = (0, db.F)(), [bS, XS] = (0, tS.useState)((() => HS.list()));
        return (0, tS.useEffect)((() => (XS(HS.list()), HS.subscribe((() => {
          XS(HS.list())
        })))), [HS]), (0, tS.useEffect)((() => {
          HS.setCountWords((SS => gS("buildAFactory2Game:labelSiloCount", {
            count: PX(SS)
          })))
        }), [HS, gS]), (0, JX.jsx)("div", {
          className: "Baf2IslandLabels",
          children: bS.map((SS => -2 === SS.count ? null : (0, JX.jsx)(kK, {
            label: SS,
            bindRef: HS.bind(SS.key),
            countRef: HS.bindCount(SS.key),
            wordsRef: HS.bindCount(SS.key, "words")
          }, SS.key)))
        })
      })),
      KK = {
        read: () => !0,
        write: () => {}
      };

    function jK(SS) {
      return `${SS[0]},${SS[1]},${SS[2]}`
    }

    function GK(SS) {
      let [HS, gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, kS] = SS;
      const aS = void 0 === fS || void 0 === kS ? function(SS) {
        return [Math.floor((SS - 1) / 2), 0]
      }(XS) : [fS, kS];
      return {
        kind: 0 === qS ? "reactor" : "battery",
        box: sg([HS, gS, tS], bS, XS, xS, NS, aS),
        formed: 1 === uS,
        level: IS
      }
    }
    class CK {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KK;
        this.guideSetting = SS, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = SS.read()
      }
      eC(SS) {
        var HS;
        const gS = new Map;
        for (const tS of SS.baf2RxPlanList) {
          const SS = GK(tS);
          gS.set(jK(SS.box.ctrl), SS)
        }
        this.plans = gS, this.layouts = new Map((null !== (HS = SS.baf2RxLayouts) && void 0 !== HS ? HS : []).map((SS => {
          let [HS, gS, tS, bS] = SS;
          return [jK([HS, gS, tS]), bS]
        }))), this.predicted.clear(), SS.baf2RxFormedAt && (this.formed = {
          ctrl: SS.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const tS of [...this.startersOff]) {
          const SS = gS.get(tS);
          SS && !SS.formed || this.startersOff.delete(tS)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((SS => this.planByKey(SS)))
      }
      planAt(SS) {
        return this.planByKey(jK(SS))
      }
      predictSize(SS, HS) {
        this.predicted.set(jK(SS), HS), this.changed()
      }
      unpredict(SS) {
        this.predicted.delete(jK(SS)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(SS) {
        var HS;
        const gS = jK(SS);
        return this.predicted.has(gS) ? null : null !== (HS = this.layouts.get(gS)) && void 0 !== HS ? HS : null
      }
      showsStarter(SS) {
        return !this.startersOff.has(jK(SS))
      }
      setStarter(SS, HS) {
        const gS = jK(SS);
        HS ? this.startersOff.delete(gS) : this.startersOff.add(gS), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(SS) {
        this.guide = SS, this.guideSetting.write(SS), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(SS) {
        const HS = this.plans.get(SS);
        if (!HS) return null;
        const gS = this.predicted.get(SS);
        return gS ? {
          ...HS,
          box: Mg(HS.box, HS.kind, gS[0], gS[1], gS[2])
        } : HS
      }
      changed() {
        this.version++;
        for (const SS of this.listeners) SS()
      }
    }
    var nK = gS(198);
    const PK = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function QK(SS, HS, gS, tS) {
      const bS = SS.length / 3;
      for (let XS = 0; XS < PK.length / 3; XS++) SS.push(PK[3 * XS] * tS[0] / 2 + gS[0], PK[3 * XS + 1] * tS[1] / 2 + gS[1], PK[3 * XS + 2] * tS[2] / 2 + gS[2]);
      for (let XS = bS; XS < bS + 24; XS += 4) HS.push(XS, XS + 1, XS + 2, XS, XS + 2, XS + 3)
    }

    function DK(SS, HS, gS) {
      const tS = HS[0][0],
        bS = [],
        XS = [];
      for (const [xS, NS] of HS) QK(bS, XS, [xS[0] - tS[0], xS[1] - tS[1], xS[2] - tS[2]], NS);
      return SS.createGameMesh({
        positions: bS,
        indices: XS
      }, gS, tS)
    }

    function wK(SS, HS) {
      const gS = SS.w - 2,
        tS = SS.d - 2;
      return 1 === function(SS, HS, gS, tS) {
        const [bS, XS, xS] = SS;
        if (Number(bS <= 2) + Number(XS <= 2) + Number(xS <= 2) >= 2) return function(SS, HS, gS) {
          return (SS + HS + gS) % 2 === 0 ? 1 : 3
        }(HS, gS, tS);
        const [NS, qS] = bS >= XS && bS >= xS ? [gS, tS] : XS >= xS ? [HS, tS] : [HS, gS];
        return NS % 2 === 0 && qS % 2 === 0 ? 1 : 3
      }([gS, SS.h - 2, tS], HS % gS, Math.floor(HS / (gS * tS)), Math.floor(HS / gS) % tS) ? "rod" : "channel"
    }

    function hK(SS, HS, gS) {
      if ("reactor" !== SS.kind || SS.formed || !HS) return !1;
      const tS = Tg(SS.box);
      for (let bS = 0; bS < tS; bS++) {
        const SS = gS(bS);
        if (null !== SS && vg(SS)) return !1
      }
      return !0
    }

    function ZK(SS, HS, gS, tS, bS) {
      var XS;
      let xS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const NS = St(SS.box, HS),
        qS = bt(SS.kind, NS, gS);
      if ("wrong" === qS || "blocked" === qS) return "wrong";
      if (!bS) return null;
      if ("inside" === NS && "reactor" === SS.kind && "Air" === Eg(gS)) {
        if (null !== xS) {
          var uS;
          const gS = tk[bk(xS, Ht(SS.box, HS))];
          return gS && null !== (uS = Jq(gS)) && void 0 !== uS ? uS : null
        }
        if (tS) return wK(SS.box, Ht(SS.box, HS))
      }
      if ("missing" !== qS) return null;
      const IS = Xt(SS.kind, NS);
      return null === IS ? null : null !== (XS = Jq(IS)) && void 0 !== XS ? XS : null
    }
    const JK = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function OK(SS, HS, gS) {
      const tS = gS => {
        const tS = HS(eg(SS.box, gS));
        return null !== tS && function(SS, HS) {
          return "reactor" !== SS.kind || HS !== lg(SS.box) && "inside" !== St(SS.box, HS)
        }(SS, gS) && "ok" !== bt(SS.kind, St(SS.box, gS), tS)
      };
      if (gS) {
        const XS = rg(SS.box, [Math.floor(gS[0]), Math.floor(gS[1]), Math.floor(gS[2])]);
        if (XS >= 0 && (tS(XS) || (bS = XS, "reactor" === SS.kind && "inside" === St(SS.box, bS) && "Air" === HS(eg(SS.box, bS))))) return XS
      }
      var bS;
      const XS = Tg(SS.box);
      for (let xS = 0; xS < XS; xS++)
        if (tS(xS)) return xS;
      return -1
    }

    function dK(SS, HS) {
      return Math.floor(HS / (SS.w * SS.d))
    }

    function cK(SS, HS, gS) {
      return gS >= 0 && dK(SS, HS) > dK(SS, gS)
    }

    function vK(SS, HS) {
      return HS >= 0 && SS.h >= 3 && dK(SS, HS) === SS.h - 1
    }

    function EK(SS) {
      const HS = Eg(SS);
      return HS === ng || "Collider" === HS || "Laser" === HS || HS.startsWith("_Collider ")
    }

    function LK(SS, HS, gS, tS) {
      if (tS(SS)) return null;
      if (!JK.every((HS => {
          let [tS, bS, XS] = HS;
          const xS = gS([SS[0] + tS, SS[1] + bS, SS[2] + XS]);
          return null !== xS && !Wg("reactor", xS) && "reactor" !== Lg(xS)
        }))) return null;
      const bS = zg("reactor").min,
        XS = sg([SS[0], SS[1], SS[2]], function(SS, HS) {
          const gS = HS[0] - (SS[0] + .5),
            tS = HS[2] - (SS[2] + .5);
          return Math.abs(gS) >= Math.abs(tS) ? gS >= 0 ? 2 : 4 : tS >= 0 ? 1 : 3
        }(SS, HS), bS, bS, bS, Bg("reactor", bS)),
        xS = lg(XS);
      let NS = !0;
      for (let qS = 0; qS < Tg(XS) && NS; qS++) {
        if (qS === xS) continue;
        const SS = eg(XS, qS),
          HS = gS(SS);
        NS = !tS(SS) && (null === HS || !EK(HS))
      }
      return {
        box: XS,
        fits: NS
      }
    }
    const YK = Zq,
      AK = "baf2Goal",
      yK = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      VK = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      iK = .4;

    function WK(SS, HS) {
      let [gS, tS, bS] = SS;
      const XS = Yq([gS - .02, tS - .02, bS - .02], [gS + 1.02, tS + 1.02, bS + 1.02], .07);
      return HS && (XS.push([
        [gS + .5, tS + 1 + .7, bS + .5],
        [.08, 1.4, .08]
      ]), XS.push([
        [gS + .5, tS + 1 + 1.4 + .2, bS + .5],
        [iK, iK, iK]
      ])), XS
    }

    function zK(SS, HS) {
      let [gS, tS, bS] = HS;
      return SS.isBlockInLoadedChunk(gS, tS, bS) ? SS.blockIdToBlockName(SS.getBlockId(gS, tS, bS)) : null
    }
    let UK = null;
    const pK = new Set;
    let sK = null;

    function BK(SS) {
      UK = SS;
      for (const HS of pK) HS(SS)
    }
    class MK {
      constructor(SS) {
        var HS;
        this.plans = SS, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (HS = SS => {
          var HS, gS;
          this.setGoal(null !== (HS = null === SS || void 0 === SS ? void 0 : SS.goal) && void 0 !== HS ? HS : null, null !== (gS = null === SS || void 0 === SS ? void 0 : SS.startsBattery) && void 0 !== gS && gS)
        }, sK ??= [Ab.k.subscribe("setDirectionArrow", (SS => {
          let {
            id: HS,
            position: gS,
            text: tS
          } = SS;
          HS === AK && BK({
            goal: [Math.floor(gS[0]), Math.floor(gS[1]), Math.floor(gS[2])],
            startsBattery: JSON.stringify(null !== tS && void 0 !== tS ? tS : null).includes("arrowStartBattery")
          })
        })), Ab.k.subscribe("clearDirectionArrow", (SS => {
          let {
            id: HS
          } = SS;
          null !== HS && HS !== AK || BK(null)
        }))], pK.add(HS), HS(UK), () => {
          pK.delete(HS)
        })
      }
      onAfterRender(SS, HS) {
        const gS = performance.now();
        if (this.cues.length > 0) {
          const HS = .55 + .45 * Math.sin(gS / 1100 * Math.PI * 2);
          for (const gS of this.cues) SS.setGameMesh(gS, {
            visibility: HS
          })
        }
        if (gS - this.lastCheckMs < 150) return;
        this.lastCheckMs = gS;
        const tS = this.plans.all().filter((SS => {
            const [gS, tS, bS] = SS.box.ctrl;
            return (!SS.formed || null !== this.plans.layoutOf(SS.box.ctrl)) && (gS - HS[0]) ** 2 + (tS - HS[1]) ** 2 + (bS - HS[2]) ** 2 <= 2304
          })),
          bS = function(SS, HS) {
            const gS = nK.e.JK,
              tS = new Map;
            for (const XS of HS) {
              const HS = eg(XS.box, 0),
                xS = eg(XS.box, Tg(XS.box) - 1),
                NS = [Math.min(HS[0], xS[0]), Math.min(HS[1], xS[1]), Math.min(HS[2], xS[2])].map((SS => Math.floor(SS / gS))),
                qS = [Math.max(HS[0], xS[0]), Math.max(HS[1], xS[1]), Math.max(HS[2], xS[2])].map((SS => Math.floor(SS / gS)));
              for (let gS = NS[0]; gS <= qS[0]; gS++)
                for (let HS = NS[1]; HS <= qS[1]; HS++)
                  for (let XS = NS[2]; XS <= qS[2]; XS++) {
                    var bS;
                    tS.set(`${gS},${HS},${XS}`, null !== (bS = SS.getChunkVersion(gS, HS, XS)) && void 0 !== bS ? bS : -1)
                  }
            }
            return tS
          }(SS, tS);
        this.plans.getVersion() === this.storeVersion && (function(SS, HS) {
          if (SS.size !== HS.size) return !1;
          for (const [gS, tS] of SS)
            if (HS.get(gS) !== tS) return !1;
          return !0
        }(bS, this.chunkVersions) || gS - this.lastRescanMs < 600) || (this.lastRescanMs = gS, this.storeVersion = this.plans.getVersion(), this.chunkVersions = bS, this.redraw(SS, tS))
      }
      dispose(SS) {
        this.unwatch(), UK = null, this.clearMeshes(SS), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(SS, HS) {
        var gS;
        (null === SS || void 0 === SS ? void 0 : SS.join()) === (null === (gS = this.goal) || void 0 === gS ? void 0 : gS.join()) && HS === this.startsBattery || (this.goal = SS, this.startsBattery = HS, this.storeVersion = -1)
      }
      redraw(SS, HS) {
        const gS = HS => zK(SS, HS),
          tS = new Map,
          bS = [],
          XS = this.plans.guideOn();
        for (const uS of HS) {
          const SS = XS && hK(uS, this.plans.showsStarter(uS.box.ctrl), (SS => gS(eg(uS.box, SS)))),
            HS = "reactor" === uS.kind ? this.plans.layoutOf(uS.box.ctrl) : null,
            xS = XS && !uS.formed ? OK(uS, gS, this.goal) : -1;
          xS >= 0 && bS.push([eg(uS.box, xS), vK(uS.box, xS)]);
          const NS = Tg(uS.box);
          for (let bS = 0; bS < NS; bS++) {
            const NS = eg(uS.box, bS),
              qS = gS(NS),
              IS = null === qS ? null : ZK(uS, bS, qS, SS, XS, HS);
            if (null !== IS) {
              const SS = "wrong" !== IS && cK(uS.box, bS, xS),
                HS = SS ? `${IS}Dim` : IS;
              let gS = tS.get(HS);
              gS || (gS = {
                draw: {
                  ghost: IS,
                  dim: SS
                },
                list: []
              }, tS.set(HS, gS)), gS.list.push(NS)
            }
          }
        }
        if (XS && this.startsBattery && this.goal) {
          const [SS, HS, bS] = this.goal, XS = [];
          for (const [tS, xS, NS] of yK) {
            const qS = [SS + tS, HS + xS, bS + NS];
            "Air" === gS(qS) && XS.push(qS)
          }
          if (XS.length > 0) {
            var xS;
            const SS = null !== (xS = tS.get("cell")) && void 0 !== xS ? xS : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            SS.list.push(...XS), tS.set("cell", SS)
          }
        }
        const NS = [...tS.keys()].sort(),
          qS = [...NS.map((SS => `${SS}:${tS.get(SS).list.join(";")}`)), `cue:${bS.join(";")}`].join("|");
        if (qS !== this.shownKey) {
          this.shownKey = qS, this.clearMeshes(SS);
          for (const HS of NS) {
            const {
              draw: gS,
              list: bS
            } = tS.get(HS);
            this.meshes.push(this.build(SS, gS, bS))
          }
          for (const [HS, gS] of bS) this.cues.push(DK(SS, WK(HS, gS), VK))
        }
      }
      build(SS, HS, gS) {
        let {
          ghost: tS,
          dim: bS
        } = HS;
        const {
          size: XS,
          colour: xS,
          alpha: NS
        } = YK[tS], qS = gS[0], uS = [], IS = [];
        for (const [fS, kS, aS] of gS) QK(uS, IS, [fS - qS[0] + .5, kS - qS[1] + .5, aS - qS[2] + .5], [XS, XS, XS]);
        return SS.createGameMesh({
          positions: uS,
          indices: IS
        }, {
          rgb: xS,
          alpha: NS * (bS ? .3 : 1)
        }, qS)
      }
      clearMeshes(SS) {
        for (const HS of [...this.meshes, ...this.cues]) SS.disposeGameMesh(HS);
        this.meshes = [], this.cues = []
      }
    }
    const FK = [.56, .83, 1],
      RK = [1, .3, .25];
    class TK {
      constructor(SS) {
        this.plans = SS, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(SS, HS, gS) {
        var tS;
        const bS = performance.now();
        if (bS - this.lastCheckMs < 150) return;
        this.lastCheckMs = bS;
        const XS = HS => zK(SS, HS),
          xS = null === (tS = SS.AHS(HS)) || void 0 === tS ? void 0 : tS.name,
          NS = xS && "Reactor Frame" === Eg(xS) ? SS.getTargetedBlock() : null,
          qS = NS ? [NS.pa[0], NS.pa[1], NS.pa[2]] : null,
          uS = null !== qS && "Air" === XS(qS) && qS.every(((SS, HS) => Math.abs(SS + .5 - gS[HS]) <= 8)) ? LK(qS, gS, XS, (SS => this.inPlan(SS))) : null,
          IS = uS ? `${uS.box.ctrl.join()}|${uS.box.rot}|${uS.fits}` : "";
        IS !== this.shownKey && this.show(SS, IS, uS)
      }
      dispose(SS) {
        this.clear(SS), this.shownKey = ""
      }
      inPlan(SS) {
        return this.plans.all().some((HS => rg(HS.box, SS) >= 0))
      }
      show(SS, HS, gS) {
        if (this.clear(SS), this.shownKey = HS, !gS) return;
        const {
          box: tS,
          fits: bS
        } = gS, XS = bS ? FK : RK, {
          lo: xS,
          hi: NS
        } = Lq(tS);
        this.meshes.push(DK(SS, Yq(xS, NS, .05), {
          rgb: XS,
          alpha: 1
        }));
        const qS = [],
          uS = eg(tS, 0)[1];
        for (let IS = 0; IS < tS.w * tS.d; IS++) {
          const [SS, , HS] = eg(tS, IS);
          qS.push([
            [SS + .5, uS + .02 + .01, HS + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(DK(SS, qS, {
          rgb: XS,
          alpha: .25
        }))
      }
      clear(SS) {
        for (const HS of this.meshes) SS.disposeGameMesh(HS);
        this.meshes = []
      }
    }
    const oK = "buildAFactory2Game:";

    function lK(SS, HS, gS) {
      const tS = SS => {
          const [gS, tS, bS] = SS.box.ctrl;
          return gS === HS[0] && tS === HS[1] && bS === HS[2]
        },
        bS = SS.find((SS => tS(SS) || rg(SS.box, HS) >= 0));
      if (!bS) return null;
      const XS = function(SS, HS, gS) {
        const {
          w: tS,
          h: bS,
          d: XS
        } = SS.box, xS = "reactor" === SS.kind ? `${oK}rxTitle` : `${oK}batTitle`;
        if (SS.formed) return {
          key: `${oK}lookPlanFormed`,
          kindKey: xS,
          w: tS,
          h: bS,
          d: XS,
          count: 0
        };
        let NS = 0,
          qS = 0;
        for (let IS = 0; IS < Tg(SS.box); IS++) {
          const HS = gS(eg(SS.box, IS)),
            tS = null === HS ? "ok" : bt(SS.kind, St(SS.box, IS), HS);
          NS += "missing" === tS ? 1 : 0, qS += "wrong" === tS || "blocked" === tS ? 1 : 0
        }
        const uS = function(SS, HS, gS) {
          if (HS < 0 || null === gS) return;
          const tS = St(SS.box, HS),
            bS = bt(SS.kind, tS, gS);
          return "blocked" === bS ? `${oK}lookWhy_blocked` : "wrong" === bS ? "ctrl" === tS ? `${oK}lookWhy_ctrl` : `${oK}lookWhy_reactor_${tS}` : void 0
        }(SS, rg(SS.box, HS), gS([HS[0], HS[1], HS[2]]));
        if (NS > 0) return {
          key: `${oK}lookPlanToBuild`,
          kindKey: xS,
          w: tS,
          h: bS,
          d: XS,
          count: NS,
          why: uS
        };
        if (qS > 0) return {
          key: `${oK}lookPlanTakeOut`,
          kindKey: xS,
          w: tS,
          h: bS,
          d: XS,
          count: qS,
          why: uS
        };
        return {
          key: "reactor" === SS.kind ? `${oK}lookPlanNoRods` : `${oK}lookPlanDone`,
          kindKey: xS,
          w: tS,
          h: bS,
          d: XS,
          count: 0
        }
      }(bS, HS, gS);
      return "reactor" === bS.kind && tS(bS) ? {
        ...XS,
        ctrl: !0
      } : XS
    }

    function mK(SS, HS) {
      return SS === HS || null !== SS && null !== HS && SS.key === HS.key && SS.kindKey === HS.kindKey && SS.w === HS.w && SS.h === HS.h && SS.d === HS.d && SS.count === HS.count && SS.why === HS.why && SS.ctrl === HS.ctrl
    }

    function eK() {
      return performance.now()
    }
    class rK {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eK;
        this.ticket = SS, this.sent = HS, this.backstopMs = gS, this.now = tS, this.queuedAt = void 0, this.queuedAt = tS()
      }
      answered() {
        const SS = this.now(),
          HS = this.sent.leftAt(this.ticket);
        return null !== HS && SS - HS > 4e3 || SS - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Sj {
      constructor() {
        this.echoes = []
      }
      add(SS) {
        this.echoes = this.echoes.filter((SS => !SS.answered())), this.echoes.push(SS)
      }
      answered() {
        var SS, HS;
        return null === (SS = null === (HS = this.echoes.at(-1)) || void 0 === HS ? void 0 : HS.answered()) || void 0 === SS || SS
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((SS => SS.answered()))
      }
      age() {
        var SS, HS;
        return null !== (SS = null === (HS = this.echoes.at(-1)) || void 0 === HS ? void 0 : HS.age()) && void 0 !== SS ? SS : null
      }
      clear() {
        this.echoes = []
      }
    }
    class Hj {
      constructor(SS) {
        this.send = SS, this.value = null, this.sent = null, this.echoes = new Sj, this.down = !1, this.timer = null
      }
      shown(SS) {
        return null === this.value ? SS : this.down || this.value !== this.sent ? this.value : SS === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), SS) : this.value
      }
      pendingFor(SS) {
        return null !== this.value && this.value === this.sent && SS !== this.value ? this.echoes.age() : null
      }
      assume(SS, HS) {
        this.disarm(), this.down = !1, this.value = SS, this.sent = SS, this.echoes.clear(), this.echoes.add(HS)
      }
      press() {
        this.down = !0
      }
      drag(SS) {
        this.value = SS, this.arm(this.down ? 1e3 : 400)
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
      arm(SS) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), SS)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class gj {
      constructor() {
        this.pending = new Map
      }
      set(SS, HS, gS) {
        var tS;
        const bS = null !== (tS = this.pending.get(SS)) && void 0 !== tS ? tS : {
          on: HS,
          echoes: new Sj
        };
        bS.on = HS, bS.echoes.add(gS), this.pending.set(SS, bS)
      }
      shown(SS) {
        let HS = SS;
        for (const [gS, {
            on: tS,
            echoes: bS
          }] of this.pending) 0 !== (SS & gS) === tS && bS.agreeCounts() || bS.answered() ? this.pending.delete(gS) : HS = tS ? HS | gS : HS & ~gS;
        return HS
      }
      pendingMask() {
        let SS = 0;
        for (const HS of this.pending.keys()) SS |= HS;
        return SS
      }
      pendingFor(SS) {
        let HS = null;
        for (const [tS, {
            on: bS,
            echoes: XS
          }] of this.pending) {
          if (void 0 !== SS && 0 !== (SS & tS) === bS) continue;
          const xS = XS.age();
          var gS;
          if (null !== xS) HS = Math.max(null !== (gS = HS) && void 0 !== gS ? gS : 0, xS)
        }
        return HS
      }
      clear() {
        this.pending.clear()
      }
    }
    class tj {
      constructor() {
        this.dims = null, this.echoes = new Sj, this.unmet = null
      }
      shown(SS) {
        var HS;
        return this.dims && (bj(this.dims, SS) && this.echoes.agreeCounts() || this.echoes.answered()) && (bj(this.dims, SS) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (HS = this.dims) && void 0 !== HS ? HS : SS
      }
      takeUnmet() {
        const SS = this.unmet;
        return this.unmet = null, SS
      }
      set(SS, HS) {
        this.dims = SS, this.echoes.add(HS)
      }
      pendingFor(SS) {
        return null === this.dims || SS && bj(this.dims, SS) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function bj(SS, HS) {
      return SS[0] === HS[0] && SS[1] === HS[1] && SS[2] === HS[2]
    }
    class Xj {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK;
        this.now = SS, this.taps = new Map
      }
      tap(SS, HS, gS) {
        return !this.busy(SS) && (this.taps.set(SS, {
          at: this.now(),
          done: HS
        }), gS(), !0)
      }
      settle(SS) {
        for (const [HS, gS] of [...this.taps]) gS.done(SS) && this.taps.delete(HS)
      }
      busy(SS) {
        const HS = this.taps.get(SS);
        return !!HS && (!(this.now() - HS.at >= 3e3) || (this.taps.delete(SS), !1))
      }
      busyIds() {
        const SS = new Set;
        for (const HS of [...this.taps.keys()]) this.busy(HS) && SS.add(HS);
        return SS
      }
      clear() {
        this.taps.clear()
      }
    }

    function xj(SS) {
      return {
        send: HS => SS.track(HS),
        sendUrgent: (HS, gS) => SS.track(HS, {
          urgent: !0,
          supersedes: gS
        }),
        leftAt: HS => SS.leftAt(HS),
        holdReserve: () => SS.holdUrgentReserve(),
        answerMs: Ax
      }
    }

    function Nj() {
      return performance.now()
    }

    function qj(SS) {
      const HS = SS.baf2RxNeed.map((SS => {
        let [HS, gS] = SS;
        return [HS, gS]
      }));
      return JSON.stringify([SS.baf2RxFormed, HS, SS.baf2RxBad, SS.baf2RxCells])
    }

    function uj(SS, HS) {
      const gS = 0 !== (HS & kH),
        tS = 0 !== (SS.baf2RxFlags & kH);
      return !gS || tS || "running" !== SS.baf2RxState && "idle" !== SS.baf2RxState ? !gS && tS && "scram" === SS.baf2RxState && SS.baf2RxFuel > 0 ? "idle" : SS.baf2RxState : "scram"
    }

    function Ij(SS) {
      return JSON.stringify([SS.baf2BatFormed, SS.baf2BatNeed, SS.baf2BatBad])
    }

    function fj(SS) {
      return SS.join(",")
    }
    class kj {
      constructor() {
        this.listeners = new Set
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      notify() {
        for (const SS of this.listeners) SS()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class aj {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(SS, HS) {
        this.lastAt = SS, this.lastUntil = SS + HS
      }
      answered(SS) {
        return this.lastAt >= SS || SS < this.lastUntil
      }
    }
    class Kj {
      constructor(SS, HS) {
        this.link = SS, this.now = HS, this.hold = new tj, this.picked = null, this.notTaken = null
      }
      shown(SS) {
        const HS = this.hold.shown(SS);
        if (this.hold.takeUnmet() && this.picked) {
          var gS;
          const {
            plans: HS,
            ctrl: tS,
            at: bS
          } = this.picked;
          this.picked = null, HS.unpredict(tS), null === (gS = this.notTaken) || void 0 === gS || gS.call(this, SS, bS)
        }
        return HS
      }
      pendingFor(SS) {
        return this.hold.pendingFor(SS)
      }
      Sa(SS, HS, gS) {
        SS.predictSize(HS, gS), this.picked = {
          plans: SS,
          ctrl: HS,
          at: this.now()
        };
        const tS = this.link.send(fH(HS, "plan", ...gS));
        this.hold.set(gS, new rK(tS, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class jj {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Nj;
        this.plans = SS, this.readInterior = HS, this.link = gS, this.now = tS, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new gj, this.throttle = void 0, this.oneShots = void 0, this.listeners = new kj, this.redraw = null, this.releaseReserve = null, this.size = new Kj(gS, tS), this.oneShots = new Xj(tS), this.throttle = new Hj((SS => this.echo(this.link.send(this.command("throttle", SS)))))
      }
      set(SS) {
        !SS.baf2RxOpen && this.raw && fj(this.raw.baf2RxAt) === fj(SS.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(SS), this.cj(SS)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(SS) {
        this.size.notTaken = SS
      }
      resize(SS) {
        this.raw && (this.size.Sa(this.plans, this.raw.baf2RxAt, SS), this.cj(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const SS = this.raw.baf2RxAt;
        this.plans.setStarter(SS, !this.plans.showsStarter(SS)), this.cj(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.cj(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.cj(this.raw)
      }
      send(SS) {
        if (this.raw) {
          for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
          this.link.send(this.command(SS, ...gS))
        }
      }
      tap(SS, HS) {
        this.raw && this.oneShots.tap(SS, function(SS, HS) {
          if ("start" === SS) return SS => 0 === (SS.baf2RxFlags & kH);
          if ("odConfirm" === SS) return SS => 0 !== (SS.baf2RxFlags & aH);
          const gS = qj(HS);
          return SS => qj(SS) !== gS
        }(SS, this.raw), HS) && ("start" === SS && (this.startedAt = this.now()), this.cj(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(kH, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(SS, HS) {
        if (!this.raw) return;
        const gS = SS === kH ? this.command(HS ? "scram" : "start") : this.command("od", HS ? 1 : 0),
          tS = HS && SS === kH,
          bS = `${IH} ${this.raw.baf2RxAt.join(" ")} `,
          XS = this.echo(tS ? this.link.sendUrgent(gS, (SS => {
            const HS = SS.startsWith(bS) ? SS.slice(bS.length).split(" ")[0] : null;
            return "throttle" === HS || "start" === HS
          })) : this.link.send(gS));
        this.flags.set(SS, HS, XS), tS && this.throttle.assume(0, XS), this.cj(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(SS) {
        this.throttle.drag(SS), this.raw && this.cj(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.cj(this.raw)
      }
      subscribe(SS) {
        return this.listeners.subscribe(SS)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var SS;
        this.throttle.release(), null === (SS = this.releaseReserve) || void 0 === SS || SS.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(SS) {
        for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
        return fH(this.raw.baf2RxAt, SS, ...gS)
      }
      echo(SS) {
        return new rK(SS, this.link, this.link.answerMs, this.now)
      }
      cj(SS) {
        var HS;
        this.raw = SS;
        const gS = this.flags.shown(SS.baf2RxFlags),
          tS = {
            ...SS,
            baf2RxFlags: gS,
            baf2RxTarget: this.throttle.shown(SS.baf2RxTarget),
            baf2RxState: uj(SS, gS)
          },
          bS = this.size.shown(tS.baf2RxDims),
          XS = this.throttle.pendingFor(),
          xS = [this.throttle.pendingFor(SS.baf2RxTarget), this.flags.pendingFor(SS.baf2RxFlags), this.size.pendingFor(SS.baf2RxDims)].filter((SS => null !== SS)),
          NS = xS.length > 0 ? Math.max(...xS) : null,
          qS = this.oneShots.busyIds(),
          uS = tS.baf2RxAt;
        let IS, fS, kS = null,
          aS = [Math.max(0, bS[0] - 2), Math.max(0, bS[1] - 2), Math.max(0, bS[2] - 2)];
        if (tS.baf2RxFormed) {
          const [SS, HS, gS] = tS.baf2RxDims;
          aS = [Math.max(0, SS - 2), Math.max(0, HS - 2), Math.max(0, gS - 2)], IS = Array.from(tS.baf2RxCells, Number), fS = `${aS.join(",")}:${tS.baf2RxCells}`
        } else {
          var KS;
          const SS = null === (KS = this.plans.planAt(uS)) || void 0 === KS ? void 0 : KS.box,
            HS = SS ? Mg(SS, "reactor", ...bS) : sg(uS, 1, ...bS, Bg("reactor", bS[0])),
            gS = this.readInterior(HS);
          kS = Sq(aS, gS), IS = gS, fS = `${aS.join(",")}:${gS.join("")}`
        }(null === (HS = this.looksOf) || void 0 === HS ? void 0 : HS.key) !== fS && (this.looksOf = {
          key: fS,
          looks: xq(aS, IS)
        }), this.view = {
          status: tS,
          dims: bS,
          plan: kS,
          inner: aS,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(uS),
          odConfirmed: this.odConfirmed || 0 !== (tS.baf2RxFlags & PH),
          guide: this.plans.guideOn(),
          throttlePending: null !== XS,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== NS && NS >= 5e3,
          busy: qS,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== NS || qS.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.cj(this.raw)
        }), 250))
      }
    }
    class Gj {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nj;
        this.plans = SS, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new kj, this.redraw = null, this.size = new Kj(HS, gS), this.oneShots = new Xj(gS)
      }
      set(SS) {
        !SS.baf2BatOpen && this.view && fj(this.view.status.baf2BatAt) === fj(SS.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(SS), this.cj(SS)
      }
      tap(SS, HS) {
        if (!this.view) return;
        const gS = Ij(this.view.status);
        this.oneShots.tap(SS, (SS => Ij(SS) !== gS), HS) && this.cj(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(SS) {
        this.size.notTaken = SS
      }
      resize(SS) {
        this.view && (this.size.Sa(this.plans, this.view.status.baf2BatAt, SS), this.cj(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.cj(this.view.status)
      }
      subscribe(SS) {
        return this.listeners.subscribe(SS)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      cj(SS) {
        const HS = this.size.shown(SS.baf2BatDims),
          gS = this.oneShots.busyIds();
        this.view = {
          status: SS,
          dims: HS,
          hf: Qq(HS, SS.baf2BatDims) ? SS.baf2BatCapacity : uq(...HS),
          guide: this.plans.guideOn(),
          busy: gS
        }, this.listeners.notify(), gS.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.cj(this.view.status)
        }), 250))
      }
    }
    const Cj = "buildAFactory2Game:";

    function nj() {
      var SS;
      const HS = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!HS) return null;
      const gS = HS.querySelector(".ExitButton");
      return function(SS, HS) {
        const gS = HS ? HS.left - 8 : SS.right;
        return {
          left: SS.left,
          top: SS.top,
          width: Math.max(0, gS - SS.left),
          height: SS.height
        }
      }(HS.getBoundingClientRect(), null !== (SS = null === gS || void 0 === gS ? void 0 : gS.getBoundingClientRect()) && void 0 !== SS ? SS : null)
    }
    const Pj = (0, tS.memo)((function(SS) {
      let {
        store: HS
      } = SS;
      const {
        t: gS
      } = (0, db.F)(), [bS, XS] = (0, tS.useState)((() => HS.get())), [xS, NS] = (0, tS.useState)((() => performance.now()));
      (0, tS.useEffect)((() => (XS(HS.get()), HS.subscribe((() => {
        XS(HS.get()), NS(performance.now())
      })))), [HS]);
      const {
        alarm: qS,
        boomAt: uS
      } = bS, IS = null !== qS && null !== qS.secs, [fS, kS] = (0, tS.useState)(null);
      (0, tS.useEffect)((() => {
        if (!IS) return;
        kS(nj());
        const SS = setInterval((() => {
          NS(performance.now()), kS(nj())
        }), 250);
        return () => {
          clearInterval(SS)
        }
      }), [IS]);
      const [aS, KS] = (0, tS.useState)(!1);
      return (0, tS.useEffect)((() => {
        if (uS === -1 / 0) return;
        KS(!0);
        const SS = setTimeout((() => {
          KS(!1)
        }), 1300);
        return () => {
          clearTimeout(SS)
        }
      }), [uS]), (0, JX.jsxs)(JX.Fragment, {
        children: [null !== qS && (0, JX.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: gS(qS.hot ? `${Cj}rxAlarmSiren` : `${Cj}rxAlarmDamaged`, {
            amount: String(qS.damage)
          })
        }), null !== qS && null !== qS.secs && (0, JX.jsx)("div", {
          className: fS ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== fS && void 0 !== fS ? fS : void 0,
          "aria-live": "assertive",
          children: gS(`${Cj}rxAlarmCountdown`, {
            amount: String((jS = qS.secs, GS = xS - qS.receivedAt, Math.max(1, Math.ceil(jS - GS / 1e3))))
          })
        }), aS && (0, JX.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var jS, GS
    }));
    class Qj {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      eC(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const gS = SS.baf2RxAlarmAt.join(",");
        let tS = this.snapshot.boomAt;
        if (SS.baf2RxAlarmBoom) this.byReactor.delete(gS), tS = HS;
        else if (SS.baf2RxAlarmDamage <= 0) this.byReactor.delete(gS);
        else {
          var bS;
          this.byReactor.set(gS, {
            damage: SS.baf2RxAlarmDamage,
            secs: null !== (bS = SS.baf2RxAlarmSecs) && void 0 !== bS ? bS : null,
            hot: !0 === SS.baf2RxAlarmHot,
            receivedAt: HS
          })
        }
        this.cj(tS)
      }
      retain(SS) {
        let HS = !1;
        for (const gS of [...this.byReactor.keys()]) SS.has(gS) || (this.byReactor.delete(gS), HS = !0);
        HS && this.cj(this.snapshot.boomAt)
      }
      has(SS) {
        return this.byReactor.has(SS)
      }
      get() {
        return this.snapshot
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      cj(SS) {
        let HS = null;
        for (const gS of this.byReactor.values())(!HS || gS.damage > HS.damage) && (HS = gS);
        this.snapshot = {
          alarm: HS,
          boomAt: SS
        };
        for (const gS of this.listeners) gS()
      }
    }
    const Dj = {
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

    function wj(SS) {
      return [SS[0], SS[1], SS[2]]
    }

    function hj(SS) {
      return `${SS[0]},${SS[1]},${SS[2]}`
    }
    class Zj {
      constructor(SS) {
        if (this.plans = SS, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var SS;
            return {
              active: this.glows.flatMap((SS => {
                let {
                  record: HS
                } = SS;
                return HS ? [HS] : []
              })),
              log: [...null !== (SS = this.devLog) && void 0 !== SS ? SS : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var SS;
        return null !== (SS = this.devLog) && void 0 !== SS ? SS : []
      }
      check(SS, HS, gS) {
        const tS = new Set(HS.map((SS => hj(SS.box.ctrl))));
        for (const xS of function(SS, HS) {
            const gS = [],
              tS = new Map(SS);
            SS.clear();
            for (const bS of HS) {
              const HS = jK(bS.box.ctrl),
                XS = bS.formed ? bS.level : 0;
              SS.set(HS, XS), XS > 0 && 0 === tS.get(HS) && gS.push(bS)
            }
            return gS
          }(this.levels, this.plans.all())) tS.has(hj(xS.box.ctrl)) && this.show(SS, xS, "on", gS);
        const bS = this.plans.lastFormed();
        if (null === bS || bS.receivedAt <= this.flashedAt) return null;
        this.flashedAt = bS.receivedAt;
        const XS = function(SS, HS) {
          var gS;
          const tS = jK(SS);
          return null !== (gS = HS.find((SS => jK(SS.box.ctrl) === tS))) && void 0 !== gS ? gS : null
        }(bS.ctrl, HS);
        return XS && this.show(SS, XS, "formed", gS), XS
      }
      fade(SS, HS) {
        0 !== this.glows.length && (this.glows = this.glows.filter((gS => {
          let {
            mesh: tS,
            glow: bS,
            startMs: XS,
            record: xS
          } = gS;
          const NS = (HS - XS) / Dj[bS].ms;
          return NS >= 1 ? (SS.disposeGameMesh(tS), xS && (xS.endMs = HS), !1) : (SS.setGameMesh(tS, {
            visibility: "formed" === bS ? 1 - NS : Math.sin(Math.PI * NS)
          }), !0)
        })))
      }
      dispose(SS) {
        for (const {
            mesh: gS
          }
          of this.glows) SS.disposeGameMesh(gS);
        this.glows = [], this.levels.clear();
        const HS = "undefined" !== typeof window ? window : null;
        (null === HS || void 0 === HS ? void 0 : HS.baf2Glows) === this.devAccessor && delete HS.baf2Glows
      }
      show(SS, HS, gS, tS) {
        const {
          lo: bS,
          hi: XS
        } = Lq(HS.box);
        let xS = null;
        this.devLog && (xS = {
          glow: gS,
          ctrl: wj(HS.box.ctrl),
          lo: wj(bS),
          hi: wj(XS),
          startMs: tS,
          endMs: null
        }, this.devLog.push(xS), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(SS, gS, Yq(bS, XS, Dj[gS].thick)),
          glow: gS,
          startMs: tS,
          record: xS
        })
      }
      build(SS, HS, gS) {
        const tS = DK(SS, gS, {
          rgb: Dj[HS].colour,
          alpha: 1
        });
        return SS.setGameMesh(tS, {
          visibility: 0
        }), tS
      }
    }
    const Jj = 1 / .6,
      Oj = {
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
        blendMode: yN.g.Standard,
        soft: !0
      },
      dj = {
        ...Oj,
        size: [.25, .4],
        count: 2
      };

    function cj(SS) {
      return {
        colours: [SS, SS],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: yN.g.Add,
        soft: !1
      }
    }
    const vj = cj([150, 225, 255]),
      Ej = cj([185, 145, 255]),
      Lj = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function Yj(SS) {
      const HS = AH[SS];
      return null === HS.fuelSlot || bg(HS) ? Lj.includes(SS) ? Ej : vj : Oj
    }
    const Aj = {
        kind: "smokePuff"
      },
      yj = [.2, .025, .2];

    function Vj(SS, HS) {
      const [
        [gS, tS, bS],
        [XS, xS, NS]
      ] = SS.colours;
      return {
        texture: SS.soft ? Aj : "square_particle",
        hf: HS,
        minLifeTime: SS.life[0] / Jj,
        maxLifeTime: SS.life[1] / Jj,
        minEmitPower: SS.power[0] * Jj,
        maxEmitPower: SS.power[1] * Jj,
        minSize: SS.size[0],
        maxSize: SS.size[1],
        emitRate: 0,
        gravity: [0, SS.lift * Jj * Jj, 0],
        dir1: [-SS.spread, 1, -SS.spread],
        dir2: [SS.spread, 1, SS.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [gS, tS, bS, SS.alpha],
          maxColor: [XS, xS, NS, SS.alpha]
        }, {
          timeFraction: 1,
          minColor: [gS, tS, bS, 0],
          maxColor: [XS, xS, NS, 0]
        }],
        blendMode: SS.blendMode
      }
    }
    class ij {
      constructor(SS) {
        this.fixed = SS, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(SS, HS, gS) {
        var tS;
        if (gS === this.lastFrame) return !1;
        this.lastFrame = gS;
        const bS = this.at;
        bS[0] = HS[0] + .5, bS[1] = HS[1] + 1.025, bS[2] = HS[2] + .5;
        const XS = null !== (tS = this.fixed) && void 0 !== tS ? tS : NS() ? dj : Oj;
        let xS = this.particles.get(XS);
        return xS || (xS = SS.createParticles(function(SS) {
          return Vj(SS, Math.ceil(12 * SS.count * SS.life[1]) + SS.count)
        }(XS), {
          pos: bS,
          half: yj
        }), this.particles.set(XS, xS)), xS.moveTo(bS), xS.emit(XS.count), !0
      }
      dispose() {
        for (const SS of this.particles.values()) SS.stop();
        this.particles.clear()
      }
    }
    class Wj {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(SS) {
        this.indexed = !0;
        for (const HS of dH) {
          const gS = Yj(HS);
          for (let tS = 1; tS <= 4; tS++) {
            const bS = SS.blockNameToBlockId(`${HS}|meta|rot${tS}|Running`, !0);
            if (null === bS) continue;
            let XS = this.pufferIndexByStyle.get(gS);
            void 0 === XS && (XS = this.pufferList.push(new ij(gS === Oj ? null : gS)) - 1, this.pufferIndexByStyle.set(gS, XS)), this.pufferIndexById[bS] = XS + 1
          }
        }
      }
      onAfterRender(SS, HS) {
        this.indexed || this.index(SS);
        const gS = performance.now(),
          tS = 0 === this.lastMs ? 0 : Math.min(gS - this.lastMs, 250) / 1e3;
        this.lastMs = gS, this.frame++, SS.particlesEnabled() ? (this.scan(SS, HS), this.puff(SS, tS)) : this.sources = []
      }
      dispose() {
        for (const SS of this.pufferList) SS.dispose();
        this.sources = [], this.found = []
      }
      scan(SS, HS) {
        0 === this.scanRow && (this.origin = [Math.floor(HS[0]) - 12, Math.floor(HS[1]) - 6, Math.floor(HS[2]) - 12]);
        const gS = Math.min(this.scanRow + 16, 325),
          [tS, bS, XS] = this.origin,
          xS = this.hits;
        xS.length = 0;
        for (let NS = this.scanRow; NS < gS; NS++) {
          const HS = tS + NS % 25,
            gS = bS + Math.floor(NS / 25);
          SS.scanBlocks(HS, gS, XS, HS + 1, gS + 1, XS + 25, this.pufferIndexById, xS)
        }
        for (let NS = 0; NS < xS.length; NS += 4) {
          const SS = xS[NS + 3];
          this.found.push({
            pos: [xS[NS], xS[NS + 1], xS[NS + 2]],
            XI: SS,
            puffer: this.pufferList[this.pufferIndexById[SS] - 1]
          })
        }
        this.scanRow = gS, 325 === gS && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(SS, HS) {
        const gS = this.sources.length;
        if (0 !== gS) {
          this.budget = Math.min(this.budget + Math.min(gS / 1.2, 12) * HS, 2);
          for (let HS = 0; HS < gS && this.budget >= 1; HS++) {
            const HS = this.sources[this.cursor % gS];
            this.cursor = (this.cursor + 1) % gS, SS.getBlockId(HS.pos[0], HS.pos[1], HS.pos[2]) === HS.XI && (HS.puffer.puff(SS, HS.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const zj = {
        ...cj([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      Uj = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function pj(SS) {
      return 0 === SS.spots.length ? 0 : Math.min(1 * SS.level, 4)
    }

    function sj(SS) {
      return 0 === SS.glass.length ? 0 : Math.min(.75 * SS.level, 3)
    }

    function Bj(SS) {
      return `${SS.ctrl.join(",")}:${SS.rot}:${SS.cu},${SS.cv}:${SS.w},${SS.h},${SS.d}`
    }

    function Mj(SS, HS) {
      const gS = HS.w - 2,
        tS = HS.h - 2,
        bS = HS.d - 2,
        XS = [];
      for (let xS = 0; xS < gS * tS * bS; xS++) {
        const NS = xS % gS,
          qS = Math.floor(xS / gS) % bS,
          uS = Math.floor(xS / (gS * bS));
        if (NS > 0 && NS < gS - 1 && qS > 0 && qS < bS - 1 && uS > 0 && uS < tS - 1) continue;
        const IS = eg(HS, gt(HS, xS)),
          fS = zK(SS, IS);
        if (null !== fS && "Fuel Rod" === Eg(fS))
          for (const HS of Uj) {
            const gS = [IS[0] + HS[0], IS[1] + HS[1], IS[2] + HS[2]];
            Rj(SS, gS) && XS.push(Tj(gS, HS))
          }
      }
      return XS
    }

    function Fj(SS, HS) {
      const {
        lo: gS,
        hi: tS
      } = Lq(HS), bS = [];
      for (let XS = gS[0]; XS < tS[0]; XS++)
        for (let HS = gS[1]; HS < tS[1]; HS++) {
          const xS = XS === gS[0] || XS === tS[0] - 1 || HS === gS[1] || HS === tS[1] - 1 ? 1 : Math.max(1, tS[2] - 1 - gS[2]);
          for (let NS = gS[2]; NS < tS[2]; NS += xS) {
            const xS = [XS, HS, NS];
            if (!Rj(SS, xS)) continue;
            const qS = XS === gS[0] ? Uj[1] : XS === tS[0] - 1 ? Uj[0] : NS === gS[2] ? Uj[5] : NS === tS[2] - 1 ? Uj[4] : HS === gS[1] ? Uj[3] : Uj[2];
            bS.push(Tj(xS, qS))
          }
        }
      return bS
    }

    function Rj(SS, HS) {
      const gS = zK(SS, HS);
      return null !== gS && "Reactor Glass" === Eg(gS)
    }

    function Tj(SS, HS) {
      return [
        [SS[0] + .5 + .55 * HS[0], SS[1] + .5 + .55 * HS[1], SS[2] + .5 + .55 * HS[2]],
        [0 === HS[0] ? .4 : .02, 0 === HS[1] ? .4 : .02, 0 === HS[2] ? .4 : .02]
      ]
    }
    class oj {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(SS, HS, gS, tS) {
        const bS = [],
          XS = new Set;
        for (const uS of HS) {
          var xS, NS, qS;
          const {
            box: HS
          } = uS;
          if ("reactor" !== uS.kind || uS.level <= 0 || (HS.ctrl[0] - gS[0]) ** 2 + (HS.ctrl[1] - gS[1]) ** 2 + (HS.ctrl[2] - gS[2]) ** 2 > 576) continue;
          const IS = Bj(HS);
          XS.add(IS);
          let fS = this.spots.get(IS);
          if ((!fS || tS - fS.at > 3e3) && (fS = {
              at: tS,
              spots: Mj(SS, HS),
              glass: Fj(SS, HS)
            }, this.spots.set(IS, fS)), 0 === fS.spots.length && 0 === fS.glass.length) continue;
          const kS = this.sparking.find((SS => SS.key === IS));
          bS.push({
            key: IS,
            level: uS.level,
            spots: fS.spots,
            glass: fS.glass,
            budget: null !== (xS = null === kS || void 0 === kS ? void 0 : kS.budget) && void 0 !== xS ? xS : 0,
            cursor: null !== (NS = null === kS || void 0 === kS ? void 0 : kS.cursor) && void 0 !== NS ? NS : 0,
            glassBudget: null !== (qS = null === kS || void 0 === kS ? void 0 : kS.glassBudget) && void 0 !== qS ? qS : 0
          })
        }
        for (const uS of this.spots.keys()) XS.has(uS) || this.spots.delete(uS);
        this.sparking = bS
      }
      emit(SS, HS, gS) {
        var tS;
        if (0 === this.sparking.length || !SS.particlesEnabled() || gS === this.lastFrame) return;
        this.lastFrame = gS;
        let bS = 0,
          XS = 0;
        for (const KS of this.sparking) bS += pj(KS), XS += sj(KS);
        const xS = bS > 8 ? 8 / bS : 1,
          NS = XS > 6 ? 6 / XS : 1;
        let qS, uS = null,
          IS = null;
        for (const KS of this.sparking) KS.budget = Math.min(KS.budget + pj(KS) * xS * HS, 2), KS.budget >= 1 && (!uS || KS.budget > uS.budget) && (uS = KS), KS.glassBudget = Math.min(KS.glassBudget + sj(KS) * NS * HS, 2), KS.glassBudget >= 1 && (!IS || KS.glassBudget > IS.glassBudget) && (IS = KS);
        if (uS) uS.budget--, qS = uS.spots[uS.cursor++ % uS.spots.length];
        else {
          if (!IS) return;
          IS.glassBudget--, qS = IS.glass[Math.floor(Math.random() * IS.glass.length)]
        }
        const [fS, kS] = qS, aS = null !== (tS = this.emitter) && void 0 !== tS ? tS : this.create(SS, fS, kS);
        aS.moveTo(fS, kS), aS.emit(zj.count)
      }
      dispose() {
        var SS;
        null === (SS = this.emitter) || void 0 === SS || SS.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(SS, HS, gS) {
        const tS = Math.ceil(14 * zj.count * zj.life[1]) + zj.count;
        return this.emitter = SS.createParticles(Vj(zj, tS), {
          pos: HS,
          half: gS
        }), this.emitter
      }
    }
    const lj = [2, 3.2],
      mj = 1 / 3,
      ej = 1 / .6,
      rj = {
        texture: Aj,
        hf: Math.ceil(18 * lj[1]) + 4,
        minLifeTime: lj[0] / ej,
        maxLifeTime: lj[1] / ej,
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
        blendMode: yN.g.Standard
      };
    class SG {
      constructor(SS) {
        this.plans = SS, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new oj, this.frame = 0, this.outline = new Zj(SS)
      }
      onAfterRender(SS, HS, gS) {
        const tS = performance.now(),
          bS = 0 === this.lastMs ? 0 : Math.min(tS - this.lastMs, 250) / 1e3;
        if (this.lastMs = tS, this.outline.fade(SS, tS), this.puff(SS, bS, gS), this.sparks.emit(SS, bS, this.frame++), tS - this.lastCheckMs < 150) return;
        this.lastCheckMs = tS;
        const XS = this.plans.all().filter((SS => SS.formed && HG(SS.box.ctrl, gS) <= 4096));
        this.plumes = XS.filter((SS => "reactor" === SS.kind && SS.level > 0)).map((SS => ({
          box: SS.box,
          level: SS.level
        }))), this.updateHums(SS, HS, XS, gS), this.sparks.update(SS, XS, gS, tS), this.chimeFormed(SS, HS, XS, tS)
      }
      dispose(SS) {
        var HS;
        this.outline.dispose(SS), null === (HS = this.steam) || void 0 === HS || HS.dispose(), this.steam = null, this.sparks.dispose();
        for (const gS of this.hums.values()) gS.stop();
        this.hums.clear()
      }
      chimeFormed(SS, HS, gS, tS) {
        const bS = this.outline.check(SS, gS, tS);
        bS && SS.playSound(HS, "exp_levelup", .6, 1, {
          Sb: [bS.box.ctrl[0] + .5, bS.box.ctrl[1], bS.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(SS, HS, gS) {
        const tS = this.plumes;
        if (0 === tS.length || !SS.particlesEnabled()) return void(this.plumeBudget = 0);
        const bS = tS.reduce(((SS, HS) => SS + 3 * HS.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + bS * HS, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let XS = this.plumeCursor % (bS / 3);
        this.plumeCursor++;
        let xS = tS[0];
        for (const fS of tS) {
          if (XS < fS.level) {
            xS = fS;
            break
          }
          XS -= fS.level
        }
        const {
          lo: NS,
          hi: qS
        } = Lq(xS.box);
        if (function(SS, HS, gS) {
            const tS = Math.max(SS[0] - gS[0], 0, gS[0] - HS[0]),
              bS = Math.max(SS[2] - gS[2], 0, gS[2] - HS[2]);
            return Math.hypot(tS, gS[1] - HS[1], bS)
          }(NS, qS, gS) < 6 && Math.random() > mj) return;
        const uS = [(NS[0] + qS[0]) / 2, qS[1] + .05, (NS[2] + qS[2]) / 2],
          IS = [(qS[0] - NS[0]) / 2 - .5, .05, (qS[2] - NS[2]) / 2 - .5];
        this.steam ??= SS.createParticles(rj, {
          pos: uS,
          half: IS
        }), this.steam.moveTo(uS, IS), this.steam.emit(1)
      }
      updateHums(SS, HS, gS, tS) {
        const bS = new Map;
        for (const xS of gS) "reactor" === xS.kind && xS.level > 0 && HG(xS.box.ctrl, tS) <= 576 && bS.set(`${XS=xS.box.ctrl,`${XS[0]},${XS[1]},${XS[2]}`}:${xS.level}`, xS);
        var XS;
        for (const [xS, NS] of this.hums) bS.has(xS) || (NS.stop(), this.hums.delete(xS));
        for (const [xS, NS] of bS) {
          if (this.hums.has(xS)) continue;
          const {
            lo: gS,
            hi: tS
          } = Lq(NS.box), bS = [(gS[0] + tS[0]) / 2, gS[1], (gS[2] + tS[2]) / 2], XS = SS.playSound(HS, "rocketEngineLoop", .08 + .06 * NS.level, .55, {
            Sb: bS,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          XS && this.hums.set(xS, XS)
        }
      }
    }

    function HG(SS, HS) {
      return (SS[0] - HS[0]) ** 2 + (SS[1] - HS[1]) ** 2 + (SS[2] - HS[2]) ** 2
    }
    class gG {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      eC(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const tS = [SS.baf2BombAt[0], SS.baf2BombAt[1], SS.baf2BombAt[2]],
          bS = SS.baf2BombR;
        if (SS.baf2BombBoom) {
          const SS = Math.hypot(HS[0] - tS[0], HS[1] - tS[1], HS[2] - tS[2]);
          this.cj({
            fuse: null,
            blast: {
              at: tS,
              r: bS,
              receivedAt: gS,
              distance: SS,
              flash: SS <= 3 * bS
            }
          })
        } else this.cj({
          ...this.snapshot,
          fuse: SS.baf2BombMs > 0 ? {
            at: tS,
            r: bS,
            endsAt: gS + SS.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      cj(SS) {
        this.snapshot = SS;
        for (const HS of this.listeners) HS()
      }
    }
    const tG = (0, tS.memo)((function(SS) {
      var HS;
      let {
        store: gS
      } = SS;
      const {
        t: bS
      } = (0, db.F)(), [XS, xS] = (0, tS.useState)((() => gS.get())), [NS, qS] = (0, tS.useState)((() => performance.now()));
      (0, tS.useEffect)((() => (xS(gS.get()), gS.subscribe((() => {
        xS(gS.get()), qS(performance.now())
      })))), [gS]);
      const {
        fuse: uS,
        blast: IS
      } = XS;
      (0, tS.useEffect)((() => {
        if (!uS) return;
        const SS = setInterval((() => {
          qS(performance.now())
        }), 250);
        return () => {
          clearInterval(SS)
        }
      }), [uS]);
      const [fS, kS] = (0, tS.useState)(!1);
      (0, tS.useEffect)((() => {
        if (null === IS || void 0 === IS || !IS.flash) return;
        kS(!0);
        const SS = setTimeout((() => {
          kS(!1)
        }), 2500);
        return () => {
          clearTimeout(SS)
        }
      }), [IS]);
      const aS = uS ? function(SS, HS) {
        return SS.endsAt <= HS ? 0 : Math.ceil((SS.endsAt - HS) / 1e3)
      }(uS, NS) : 0;
      return (0, JX.jsxs)(JX.Fragment, {
        children: [aS > 0 && (0, JX.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: bS("buildAFactory2Game:bombCountdown", {
            amount: String(aS),
            radius: String(null !== (HS = null === uS || void 0 === uS ? void 0 : uS.r) && void 0 !== HS ? HS : 0)
          })
        }), fS && (0, JX.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function bG(SS) {
      const HS = Math.min(4, Math.max(1, SS / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * SS / 4)),
        capSpread: Math.min(5 * SS / 8, 24 * HS),
        capThick: 6 * HS,
        stemHalfWidth: 3 * HS,
        puffScale: HS
      }
    }
    class XG {
      constructor() {
        this.Ku = !1
      }
      hold(SS) {
        SS.getCameraFar() < 1e3 && (SS.setCameraFar(1e3), this.Ku = !0)
      }
      release(SS) {
        this.Ku && (this.Ku = !1, SS.setCameraFar(null))
      }
    }
    const xG = 1 / .6,
      NG = [.2, .1, .2],
      qG = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      uG = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: yN.g.Standard,
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
      IG = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: yN.g.Standard,
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
      fG = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: yN.g.Standard,
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
      kG = {
        texture: Aj,
        hf: Math.ceil(120) + 4,
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
        blendMode: yN.g.Add
      };
    class aG {
      constructor(SS) {
        this.store = SS, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new XG, this.timers = []
      }
      onAfterRender(SS, HS) {
        const gS = performance.now(),
          tS = 0 === this.lastMs ? 0 : Math.min(gS - this.lastMs, 250) / 1e3;
        this.lastMs = gS;
        const {
          fuse: bS,
          blast: XS
        } = this.store.get();
        null !== XS && XS !== this.shownBlast && (this.shownBlast = XS, this.startBlast(SS, HS, XS, gS));
        const xS = SS.particlesEnabled();
        null !== bS && bS.endsAt > gS && xS ? this.emitBeacon(SS, bS, tS, gS) : this.beaconBudget = 0, null !== this.cloud && (gS - this.cloud.startMs > 33e3 ? this.disposeCloud(SS) : (this.far.hold(SS), xS && this.emitCloud(SS, tS, gS)))
      }
      dispose(SS) {
        var HS;
        null === (HS = this.beacon) || void 0 === HS || HS.dispose(), this.beacon = null, this.disposeCloud(SS);
        for (const gS of this.timers) clearTimeout(gS);
        this.timers.length = 0
      }
      emitBeacon(SS, HS, gS, tS) {
        const bS = HS.endsAt - tS < 5e3 ? 350 : 1e3,
          XS = .5 + .5 * Math.sin(2 * Math.PI * tS / bS);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * XS * gS, 4), this.beaconBudget < 1) return;
        const xS = Math.floor(this.beaconBudget);
        this.beaconBudget -= xS;
        const [NS, qS, uS] = HS.at, IS = [NS + .5, qS + 1.1, uS + .5];
        this.beacon ??= SS.createParticles(kG, {
          pos: IS,
          half: NG
        }), this.beacon.moveTo(IS), this.beacon.emit(xS)
      }
      startBlast(SS, HS, gS, tS) {
        var bS;
        null === (bS = this.beacon) || void 0 === bS || bS.dispose(), this.beacon = null, this.disposeCloud(SS);
        const XS = (0, YN.isMobile)() ? .5 : 1;
        this.streams = [uG, IG, fG].map((SS => {
          const HS = Math.round(SS.count * XS);
          return {
            spec: SS,
            particles: null,
            rate: HS / ((SS.toMs - SS.fromMs) / 1e3),
            budget: 0,
            left: HS
          }
        })), this.cloud = {
          blast: gS,
          startMs: tS
        };
        const xS = Math.max(.25, 1 - gS.distance / (6 * gS.r)),
          NS = gS.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [gS, tS, bS] of qG) jG(SS, HS, gS, xS * tS, bS)
        }), NS))
      }
      emitCloud(SS, HS, gS) {
        const {
          blast: tS,
          startMs: bS
        } = this.cloud, XS = gS - bS, [xS, NS, qS] = tS.at, uS = bG(tS.r);
        for (const IS of this.streams) {
          const {
            spec: gS
          } = IS;
          if (IS.left <= 0 || XS < gS.fromMs) continue;
          IS.budget += IS.rate * HS;
          const bS = Math.min(Math.floor(IS.budget), IS.left);
          if (bS < 1) continue;
          IS.budget -= bS, IS.left -= bS;
          const fS = IS.particles ??= this.createStream(SS, gS, tS);
          if (gS === uG) {
            const SS = uS.stemHalfWidth;
            fS.moveTo([xS, NS + 1, qS], [SS, 1, SS])
          } else if (gS === IG) {
            const SS = uS.capSpread * Math.min(1, (XS - gS.fromMs) / 3e3),
              HS = Math.sqrt(Math.random()),
              tS = 2 * Math.random() * Math.PI,
              bS = Math.cos(tS) * HS,
              IS = Math.sin(tS) * HS,
              kS = xS + bS * SS,
              aS = qS + IS * SS,
              KS = uS.capThick,
              jS = NS + uS.capHeight + KS * (1 - HS * HS) * 2;
            fS.setDirections([.7 * bS, .05, .7 * IS], [bS, .2, IS]), fS.moveTo([kS, jS, aS], [KS, KS, KS])
          } else {
            this.ringAngle += 2.39996;
            const SS = Math.cos(this.ringAngle),
              HS = Math.sin(this.ringAngle);
            fS.setDirections([SS, .05, HS], [SS, .1, HS]), fS.moveTo([xS + 2 * SS, NS + .5, qS + 2 * HS], [0, .5, 0])
          }
          fS.emit(bS)
        }
      }
      createStream(SS, HS, gS) {
        const {
          r: tS
        } = gS, bS = Math.max(HS.life[0], tS / 25), XS = HS === fG ? [.9 * bS, bS] : HS.life, xS = bG(tS), NS = HS === fG ? 1 : xS.puffScale, qS = {
          texture: Aj,
          hf: HS.count + 4,
          minLifeTime: XS[0] / xG,
          maxLifeTime: XS[1] / xG,
          minSize: HS.size[0] * NS,
          maxSize: HS.size[1] * NS,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, HS.gravity * xG * xG, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: HS.from[0],
            maxColor: HS.from[1]
          }, {
            timeFraction: .6,
            minColor: KG(HS.from[0], HS.to[0]),
            maxColor: KG(HS.from[1], HS.to[1])
          }, {
            timeFraction: 1,
            minColor: HS.to[0],
            maxColor: HS.to[1]
          }],
          blendMode: HS.blend
        };
        if (HS === uG) {
          const SS = xS.capHeight / ((XS[0] + XS[1]) / 2);
          qS.minEmitPower = .9 * SS * xG, qS.maxEmitPower = 1.05 * SS * xG, qS.dir1 = [-.1, 1, -.1], qS.dir2 = [.1, 1, .1]
        } else HS === IG ? (qS.minEmitPower = 1.2, qS.maxEmitPower = 2, qS.dir1 = [-1, .05, -1], qS.dir2 = [1, .2, 1]) : (qS.minEmitPower = 39.583333333333336, qS.maxEmitPower = 41.66666666666667, qS.dir1 = [1, 0, 0], qS.dir2 = [1, 0, 0]);
        return SS.createParticles(qS, {
          pos: gS.at
        })
      }
      disposeCloud(SS) {
        for (const gS of this.streams) {
          var HS;
          null === (HS = gS.particles) || void 0 === HS || HS.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(SS)
      }
    }

    function KG(SS, HS) {
      return [(SS[0] + HS[0]) / 2, (SS[1] + HS[1]) / 2, (SS[2] + HS[2]) / 2, .75 * SS[3]]
    }

    function jG(SS, HS, gS, tS, bS) {
      try {
        SS.playSound(HS, gS, tS, bS)
      } catch (XS) {
        console.error(XS)
      }
    }
    const GG = {
        hf: 720,
        perS: 100
      },
      CG = {
        hf: 320,
        perS: 44
      };
    class nG {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(SS, HS) {
        this.zone = {
          centre: [...SS.centre],
          r: SS.r,
          band: SS.band ? [SS.band[0], SS.band[1]] : void 0
        }, this.endsAt = HS
      }
      stop() {
        this.zone = null
      }
      eC(SS, HS) {
        const {
          baf2FalloutMs: gS,
          baf2FalloutAt: tS,
          baf2FalloutR: bS,
          baf2FalloutY: XS
        } = SS;
        gS > 0 && tS && void 0 !== bS ? this.start({
          centre: tS,
          r: bS,
          band: XS
        }, HS + gS) : this.stop()
      }
      perS(SS, HS, gS) {
        const tS = this.zone;
        if (!tS) return 0;
        const bS = this.endsAt - SS;
        return bS <= 0 ? (this.zone = null, 0) : tS.band && (HS[1] < tS.band[0] || HS[1] > tS.band[1]) || Math.hypot(HS[0] - tS.centre[0], HS[2] - tS.centre[2]) > tS.r ? 0 : gS.perS * Math.min(1, bS / 5e3)
      }
    }
    const PG = [5, 7],
      QG = [24, 8, 24],
      DG = .5,
      wG = 1 / .6,
      hG = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class ZG {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YN.isMobile)();
        this.state = new nG, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(SS) {
          return SS ? CG : GG
        }(SS)
      }
      startFallout(SS, HS) {
        this.state.start(SS, HS)
      }
      stopFallout() {
        this.state.stop()
      }
      eC(SS) {
        this.state.eC(SS, performance.now())
      }
      onAfterRender(SS, HS) {
        var gS;
        const tS = performance.now(),
          bS = 0 === this.lastMs ? 0 : Math.min(tS - this.lastMs, 250) / 1e3;
        this.lastMs = tS;
        const XS = this.state.perS(tS, HS, this.tier);
        if (XS <= 0 || !SS.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + XS * bS, XS / 4);
        const xS = Math.floor(this.budget);
        if (xS < 1) return;
        this.budget -= xS;
        const NS = this.at;
        NS[0] = HS[0], NS[1] = HS[1] + 12, NS[2] = HS[2];
        const qS = null !== (gS = this.systems) && void 0 !== gS ? gS : this.create(SS, NS),
          uS = this.amounts;
        uS[0] = 0, uS[1] = 0;
        for (let IS = 0; IS < xS; IS++) uS[Math.random() < .3 ? 1 : 0]++;
        for (let IS = 0; IS < qS.length; IS++) uS[IS] > 0 && (qS[IS].moveTo(NS, QG), qS[IS].emit(uS[IS]))
      }
      dispose() {
        for (const HS of null !== (SS = this.systems) && void 0 !== SS ? SS : []) {
          var SS;
          HS.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(SS, HS) {
        return this.systems = hG.map((gS => {
          let {
            rgba: [tS, bS, XS, xS],
            share: NS
          } = gS;
          const qS = {
            texture: "square_particle",
            hf: Math.ceil(this.tier.hf * NS),
            minLifeTime: PG[0] / wG,
            maxLifeTime: PG[1] / wG,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [DG, -1, DG],
            colorGradients: [{
              timeFraction: 0,
              minColor: [tS, bS, XS, 0]
            }, {
              timeFraction: .15,
              minColor: [tS, bS, XS, xS]
            }, {
              timeFraction: .8,
              minColor: [tS, bS, XS, xS]
            }, {
              timeFraction: 1,
              minColor: [tS, bS, XS, 0]
            }],
            blendMode: yN.g.Standard
          };
          return SS.createParticles(qS, {
            pos: HS,
            half: QG
          })
        })), this.systems
      }
    }
    const JG = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function OG(SS) {
      const HS = /\|rot(\d)/.exec(SS);
      return JG[HS ? Number(HS[1]) : 1]
    }
    var dG = gS(672),
      cG = gS(38502);
    const vG = new Set(dG.o);

    function EG(SS) {
      if (-2 !== SS.count) return null;
      const HS = BS(SS.item);
      return null !== HS && vG.has(HS) ? HS : null
    }

    function LG(SS) {
      const {
        width: HS,
        height: gS
      } = (0, cG.c)(SS).hitBoxDimensions;
      return .55 / Math.max(HS, gS)
    }

    function YG(SS, HS, gS) {
      if (!gS) return !1;
      const tS = SS[0] + .5 - HS[0],
        bS = SS[1] + .5 - HS[1],
        XS = SS[2] + .5 - HS[2];
      return tS * tS + bS * bS + XS * XS <= 576
    }

    function AG(SS, HS) {
      return Math.atan2(SS[0], SS[2]) + Math.PI + HS
    }

    function yG(SS, HS) {
      const gS = 2 * Math.PI;
      return (SS + gS * HS / 1e4) % gS
    }
    class VG {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = SS, this.now = HS, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = SS.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(SS, HS) {
        if (0 === this.farms.size) return;
        const gS = this.now(),
          tS = Number.isNaN(this.frameMs) ? 0 : Math.min(gS - this.frameMs, 100);
        this.frameMs = gS, gS - this.checkedMs >= 1e3 && (this.checkedMs = gS, this.check(SS, HS));
        for (const bS of this.farms.values()) bS.shown && bS.running && null !== bS.model && tS > 0 && (bS.spin = yG(bS.spin, tS), bS.model.setPose(bS.feet, AG(bS.front, bS.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const SS of this.farms.values()) this.drop(SS);
        this.farms.clear()
      }
      sync() {
        const SS = new Set;
        for (const HS of this.labels.list()) {
          const gS = EG(HS);
          if (null === gS) continue;
          SS.add(HS.key);
          const tS = this.farms.get(HS.key);
          if ((null === tS || void 0 === tS ? void 0 : tS.mob) === gS) continue;
          tS && this.drop(tS);
          const [bS, XS, xS] = HS.pos;
          this.farms.set(HS.key, {
            pos: HS.pos,
            feet: [bS + .5, XS + 1, xS + .5],
            mob: gS,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [HS, gS] of this.farms) SS.has(HS) || (this.drop(gS), this.farms.delete(HS));
        this.checkedMs = -1 / 0
      }
      check(SS, HS) {
        for (const gS of this.farms.values()) {
          const [tS, bS, XS] = gS.pos, xS = zK(SS, gS.pos);
          null !== xS && Eg(xS) === yS && YG(gS.pos, HS, "Air" === zK(SS, [tS, bS + 1, XS])) ? (gS.running = xS.endsWith("|Running"), gS.front = OG(xS), null === gS.model && (gS.model = SS.createMobModel(gS.mob, LG(gS.mob)), null === gS.model) || (gS.model.setPose(gS.feet, AG(gS.front, gS.spin)), gS.shown || (gS.model.setVisible(!0), gS.shown = !0))) : (gS.shown && null !== gS.model && gS.model.setVisible(!1), gS.shown = !1)
        }
      }
      drop(SS) {
        var HS;
        null === (HS = SS.model) || void 0 === HS || HS.dispose(), SS.model = null, SS.shown = !1
      }
    }
    class iG {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(SS) {
        var HS;
        this.island = SS.baf2ColIsland, this.islandSite = (HS = SS.baf2ColSite) && 8 === HS.length ? {
          spawnXZ: [HS[0], HS[1]],
          coreXZ: [HS[2], HS[3]],
          minXZ: [HS[4], HS[5]],
          maxXZ: [HS[6], HS[7]]
        } : null, this.views = SS.baf2ColList.map((SS => ({
          entry: Nb(SS)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(SS) {
        this.status = SS, this.emit()
      }
      onOpen(SS) {
        this.openHeld = SS
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
        return this.views.map((SS => SS.entry))
      }
      entryAtRoot(SS) {
        var HS;
        return null === (HS = this.views.find((HS => {
          let {
            entry: gS
          } = HS;
          return gS.focus[0] === SS[0] && gS.focus[1] === SS[1] + 1 && gS.focus[2] === SS[2]
        }))) || void 0 === HS ? void 0 : HS.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(SS, HS) {
        return zq(this.entries(), SS, HS)
      }
      lookSource() {
        return {
          handles: SS => kt(SS) >= 0 || Kt(SS),
          line: (SS, HS) => this.lookLine(SS, HS),
          version: () => this.beamsVersion
        }
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const SS of this.listeners) SS()
      }
    }
    const WG = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((SS => SS / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((SS => [SS, SS + 1, SS + 2, SS, SS + 2, SS + 3]))
    };

    function zG(SS, HS, gS, tS, bS, XS, xS) {
      let NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const qS = Math.cos(NS),
        uS = Math.sin(NS),
        IS = SS.positions.length / 3,
        {
          positions: fS,
          indices: kS
        } = WG;
      for (let aS = 0; aS < fS.length; aS += 3) {
        const NS = fS[aS] * bS,
          IS = fS[aS + 2] * xS;
        SS.positions.push(HS + NS * qS + IS * uS, gS + fS[aS + 1] * XS, tS - NS * uS + IS * qS)
      }
      for (const aS of kS) SS.indices.push(IS + aS)
    }

    function UG(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return HS < 1 ? {
        rgb: SS,
        alpha: HS
      } : {
        rgb: SS,
        alpha: 1,
        opaque: !0
      }
    }
    class pG {
      constructor(SS, HS) {
        this.style = SS, this.perSource = HS, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(SS) {
        this.sources = SS, 0 === SS.length && (this.budget = 0)
      }
      mf(SS, HS, gS) {
        const tS = this.sources.length;
        if (0 !== tS) {
          var bS, XS;
          this.budget = Math.min(this.budget + (bS = tS, XS = this.perSource, Math.min(bS * XS, Su) * HS), 2);
          for (let HS = 0; HS < tS && this.budget >= 1; HS++) {
            const HS = this.sources[this.cursor % tS];
            this.cursor = (this.cursor + 1) % tS;
            if (!(Math.max(Math.abs(HS.x - gS[0]), Math.abs(HS.y - gS[1]), Math.abs(HS.z - gS[2])) > 32)) return this.puff(SS, HS), void this.budget--
          }
        }
      }
      dispose() {
        var SS;
        null === (SS = this.particles) || void 0 === SS || SS.dispose(), this.particles = null, this.sources = []
      }
      puff(SS, HS) {
        let {
          x: gS,
          y: tS,
          z: bS,
          h: XS,
          faces: xS
        } = HS;
        const NS = function(SS, HS, gS, tS, bS) {
            const [XS, xS, NS] = bS[Math.floor(Math.random() * bS.length)], qS = .04, uS = (SS, HS, gS) => SS > 0 ? HS + gS + qS : SS < 0 ? HS - qS : HS + .1, IS = (SS, HS, gS) => SS > 0 ? HS + gS + qS : SS < 0 ? HS - qS : HS + gS - .1, fS = [uS(XS, SS, 1), uS(xS, HS, tS), uS(NS, gS, 1)], kS = [IS(XS, SS, 1), IS(xS, HS, tS), IS(NS, gS, 1)];
            return {
              pos: [(fS[0] + kS[0]) / 2, (fS[1] + kS[1]) / 2, (fS[2] + kS[2]) / 2],
              half: [(kS[0] - fS[0]) / 2, (kS[1] - fS[1]) / 2, (kS[2] - fS[2]) / 2],
              out: [XS, xS, NS]
            }
          }(gS, tS, bS, XS, xS),
          {
            style: qS
          } = this,
          uS = this.particles ??= SS.createParticles(Vj(qS, Math.ceil(qS.count * Su * qS.life[1]) + 4), NS);
        uS.moveTo(NS.pos, NS.half);
        const [IS, fS, kS] = NS.out, aS = qS.spread;
        uS.setDirections([IS - aS, .6 + fS, kS - aS], [IS + aS, 1 + fS, kS + aS]), uS.emit(qS.count)
      }
    }
    const sG = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class BG {
      constructor() {
        this.green = new pG(gu.green, eq), this.pink = new pG(gu.pink, rq), this.colliders = [], this.lastMs = 0
      }
      setSources(SS) {
        this.colliders = SS;
        const HS = [],
          gS = [];
        for (const tS of SS) {
          const [SS, bS, XS] = tS.focus;
          HS.push({
            x: SS,
            y: bS - 1,
            z: XS,
            h: 2,
            faces: sG
          });
          for (let HS = 0; HS < 4; HS++) {
            if (!tS.live[HS]) continue;
            const [SS, bS, XS] = Ct(tS.focus, HS, xt.LASER_D), [xS, , NS] = Gt[HS], qS = sG.filter((SS => SS[0] !== xS || SS[2] !== NS || 0 !== SS[1]));
            gS.push({
              x: SS,
              y: bS,
              z: XS,
              h: 1,
              faces: qS
            })
          }
        }
        this.green.setSources(HS), this.pink.setSources(gS)
      }
      onAfterRender(SS) {
        const HS = performance.now(),
          gS = 0 === this.lastMs ? 0 : Math.min(HS - this.lastMs, 250) / 1e3;
        if (this.lastMs = HS, 0 === this.colliders.length || !SS.particlesEnabled()) return;
        const tS = SS.getCameraPosition();
        this.green.mf(SS, gS, tS), this.pink.mf(SS, gS, tS)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const MG = 1.04,
      FG = UG([1, 120 / 255, 220 / 255]),
      RG = UG([1, .25, .25], .35);
    class TG {
      constructor(SS) {
        this.store = SS, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new BG
      }
      onAfterRender(SS) {
        this.store.version() !== this.builtVersion && this.rebuild(SS);
        const HS = performance.now();
        for (const gS of this.beams) {
          const tS = 1 + .35 * Math.sin(HS / 700 * Math.PI * 2 + gS.phase);
          SS.setGameMesh(gS.mesh, {
            scale: [gS.alongX ? 1 : tS, tS, gS.alongX ? tS : 1]
          })
        }
        this.glow.onAfterRender(SS)
      }
      dispose(SS) {
        this.clear(SS), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(SS) {
        this.clear(SS), this.builtVersion = this.store.version();
        const HS = [];
        for (const {
            entry: gS
          }
          of this.store.colliders()) gS.on && gS.live.some(Boolean) && (this.addBeams(SS, gS), HS.push(gS)), gS.blockers.length > 0 && this.addMarkers(SS, gS);
        this.glow.setSources(HS)
      }
      addBeams(SS, HS) {
        const [gS, tS, bS] = HS.focus, XS = mq - .25, xS = (.25 + mq) / 2;
        for (let NS = 0; NS < 4; NS++) {
          if (!HS.live[NS]) continue;
          const [qS, , uS] = Gt[NS], IS = 0 !== qS, fS = {
            positions: [],
            indices: []
          };
          zG(fS, 0, 0, 0, IS ? XS : .2, .2, IS ? .2 : XS);
          const kS = [gS + .5 + qS * xS, tS + .5, bS + .5 + uS * xS],
            aS = SS.createGameMesh(fS, FG, kS);
          this.meshes.push(aS), this.beams.push({
            mesh: aS,
            alongX: IS,
            phase: NS * Math.PI / 2
          })
        }
      }
      addMarkers(SS, HS) {
        const gS = HS.blockers[0],
          tS = {
            positions: [],
            indices: []
          };
        for (const [bS, XS, xS] of HS.blockers) zG(tS, bS - gS[0] + .5, XS - gS[1] + .5, xS - gS[2] + .5, MG, MG, MG);
        this.meshes.push(SS.createGameMesh(tS, RG, gS))
      }
      clear(SS) {
        for (const HS of this.meshes) SS.disposeGameMesh(HS);
        this.meshes = [], this.beams = []
      }
    }
    const oG = [.56, .83, 1],
      lG = [1, .73, .08],
      mG = [1, .25, .25],
      eG = [.85, .85, .85],
      rG = [.3, .45, .6];

    function SC(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const xS = bS / 2,
        NS = bS + XS;
      for (const qS of [-xS, xS])
        for (const bS of [-xS, xS]) zG(SS, HS, gS + qS, tS + bS, NS, XS, XS), zG(SS, HS + qS, gS, tS + bS, XS, NS, XS), zG(SS, HS + qS, gS + bS, tS, XS, XS, NS)
    }

    function HC(SS) {
      return HS => SS.isBlockInLoadedChunk(HS[0], HS[1], HS[2]) && 0 === SS.getBlockId(HS[0], HS[1], HS[2])
    }

    function gC(SS) {
      return SS.map((SS => {
        let {
          free: HS,
          blocked: gS,
          gaps: tS,
          supports: bS
        } = SS;
        return `${HS.join(";")}|${gS.join(";")}|${tS.join(";")}|${bS.join(";")}`
      })).join("/")
    }

    function tC(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const XS = HS[0],
        xS = {
          positions: [],
          indices: []
        };
      for (const [NS, qS, uS] of HS) SC(xS, NS - XS[0] + .5, qS - XS[1] + .5, uS - XS[2] + .5, tS, bS);
      return SS.createGameMesh(xS, gS, XS)
    }
    class bC {
      constructor(SS) {
        this.store = SS, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(SS, HS, gS) {
        var tS;
        const bS = null === (tS = SS.AHS(HS)) || void 0 === tS ? void 0 : tS.name;
        if (bS !== qt && bS !== Nt) return void("" !== this.shownKey && this.show(SS, "", []));
        const XS = performance.now();
        if (XS - this.lastCheckMs >= 200 && (this.lastCheckMs = XS, bS === qt ? this.check(SS, gS) : this.preview(SS, gS)), this.pulses.length > 0) {
          const HS = 1 + .12 * Math.sin(XS / 1e3 * 1.25 * Math.PI * 2),
            gS = [HS, HS, HS];
          for (const tS of this.pulses) SS.setGameMesh(tS, {
            scale: gS
          })
        }
      }
      dispose(SS) {
        this.clear(SS), this.shownKey = ""
      }
      check(SS, HS) {
        const gS = HC(SS),
          tS = [];
        for (const {
            entry: XS
          }
          of this.store.colliders()) {
          XS.focus.every(((SS, gS) => Math.abs(SS + .5 - HS[gS]) <= xt.GHOST_REACH)) && tS.push(lq(XS, gS))
        }
        const bS = gC(tS);
        bS !== this.shownKey && this.show(SS, bS, tS)
      }
      preview(SS, HS) {
        const gS = SS.getTargetedBlock(),
          tS = gS ? [gS.pa[0], gS.pa[1], gS.pa[2]] : null,
          bS = null !== tS && tS.every(((SS, gS) => Math.abs(SS + .5 - HS[gS]) <= 8)),
          XS = this.store.site(),
          xS = bS && XS ? function(SS, HS, gS) {
            const tS = jt(SS);
            if (!tS.every(HS)) return null;
            const bS = Qt(SS, gS);
            return {
              column: tS,
              spots: lq({
                focus: tS[1],
                lasers: [!1, !1, !1, !1],
                open: bS,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, HS),
              fits: bS.filter(Boolean).length >= xt.MIN_SPOTS
            }
          }(tS, HC(SS), XS) : null,
          NS = xS ? [xS.spots] : [],
          qS = xS ? `preview ${tS.join(",")}|${xS.fits}|${gC(NS)}` : "";
        var uS, IS;
        qS !== this.shownKey && this.show(SS, qS, NS, null !== (uS = null === xS || void 0 === xS ? void 0 : xS.column) && void 0 !== uS ? uS : [], null === (IS = null === xS || void 0 === xS ? void 0 : xS.fits) || void 0 === IS || IS)
      }
      show(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          bS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(SS), this.shownKey = HS, tS.length > 0 && this.meshes.push(tC(SS, tS, UG(bS ? eG : mG)));
        for (const {
            free: XS,
            blocked: xS,
            gaps: NS,
            supports: qS
          }
          of gS) {
          for (const [HS, gS, tS] of XS) {
            const bS = {
              positions: [],
              indices: []
            };
            SC(bS, 0, 0, 0);
            const XS = SS.createGameMesh(bS, UG(oG), [HS + .5, gS + .5, tS + .5]);
            this.meshes.push(XS), this.pulses.push(XS)
          }
          xS.length > 0 && this.meshes.push(tC(SS, xS, UG(lG))), NS.length > 0 && this.meshes.push(tC(SS, NS, UG(mG), 1.06, .07)), qS.length > 0 && this.meshes.push(tC(SS, qS, UG(rG)))
        }
      }
      clear(SS) {
        for (const HS of this.meshes) SS.disposeGameMesh(HS);
        this.meshes = [], this.pulses = []
      }
    }
    class XC {
      constructor() {
        this.stored = new Map, this.Ku = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(SS) {
        if (!SS.baf2TermOpen) return !1;
        SS.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [HS, gS] of SS.baf2TermItems) gS > 0 ? this.stored.set(HS, gS) : this.stored.delete(HS);
        if (SS.baf2TermHeld && (this.Ku = new Map(SS.baf2TermHeld)), this.pending = this.pending.filter((HS => HS.seq > SS.baf2TermAcked)), this.silos = SS.baf2TermSilos, this.readOnly = SS.baf2TermReadOnly, this.pocket = !0 === SS.baf2TermPocket, SS.baf2TermReset) this.resort();
        else {
          const SS = new Set(this.order);
          for (const HS of this.stored.keys()) SS.has(HS) || this.order.push(HS)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((SS, HS) => this.amount(HS) - this.amount(SS) || SS.localeCompare(HS))), this.changed()
      }
      take(SS, HS) {
        const gS = NH(SS, this.amount(HS));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: HS,
          amount: gS,
          put: !1
        }), this.recents = [HS, ...this.recents.filter((SS => SS !== HS))].slice(0, 6), this.changed(), gH(this.seq, SS, HS)
      }
      put(SS, HS) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: HS,
          amount: NH(SS, this.heldAmount(HS)),
          put: !0
        }), this.changed(), tH(this.seq, SS, HS)
      }
      putAll() {
        this.seq++;
        for (const SS of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: SS,
          amount: this.heldAmount(SS),
          put: !0
        });
        return this.changed(), bH(this.seq)
      }
      amount(SS) {
        var HS;
        let gS = null !== (HS = this.stored.get(SS)) && void 0 !== HS ? HS : 0;
        for (const tS of this.pending) tS.item === SS && (gS += tS.put ? tS.amount : -tS.amount);
        return Math.max(0, gS)
      }
      heldAmount(SS) {
        var HS;
        let gS = null !== (HS = this.Ku.get(SS)) && void 0 !== HS ? HS : 0;
        for (const tS of this.pending) tS.put && tS.item === SS && (gS -= tS.amount);
        return Math.max(0, gS)
      }
      heldItems() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((HS => HS === SS || this.heldAmount(HS) > 0))
      }
      items() {
        return this.order.filter((SS => this.amount(SS) > 0))
      }
      recent() {
        return this.recents.filter((SS => this.amount(SS) > 0))
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
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      changed() {
        this.version++;
        for (const SS of this.listeners) SS()
      }
    }
    var xC = gS(38460);
    const NC = {
      isBlock: SS => void 0 !== ES.j[SS],
      harvestType: SS => {
        var HS;
        return null === (HS = ES.j[SS]) || void 0 === HS ? void 0 : HS.harvestType
      },
      harvestLevel: SS => {
        var HS;
        return null === (HS = ES.j[SS]) || void 0 === HS ? void 0 : HS.harvestLevel
      },
      dropsNothing: SS => {
        var HS;
        return null === (null === (HS = ES.j[SS]) || void 0 === HS ? void 0 : HS.drops)
      },
      displayName: SS => {
        var HS;
        return null === (HS = rx.m[SS]) || void 0 === HS ? void 0 : HS.displayName
      },
      description: SS => {
        var HS;
        return null === (HS = rx.m[SS]) || void 0 === HS ? void 0 : HS.description
      },
      harvests: SS => {
        var HS;
        return null === (HS = rx.m[SS]) || void 0 === HS ? void 0 : HS.harvests
      },
      level: SS => {
        var HS;
        return null === (HS = rx.m[SS]) || void 0 === HS ? void 0 : HS.level
      }
    };

    function qC(SS, HS, gS) {
      return function(SS, HS, gS, tS) {
        var bS, XS;
        const xS = HS.split("|")[0],
          NS = SS.isBlock(HS) ? HS : SS.isBlock(xS) ? xS : null;
        if (null === NS || "rock" !== SS.harvestType(NS) || SS.dropsNothing(NS) && !zt.has(xS)) return null;
        const qS = gS && "rock" === SS.harvests(gS) ? null !== (bS = SS.level(gS)) && void 0 !== bS ? bS : 0 : null,
          uS = null !== (XS = null !== tS && void 0 !== tS ? tS : SS.harvestLevel(NS)) && void 0 !== XS ? XS : 0;
        return (null !== qS ? uS <= qS : 0 === SS.harvestLevel(NS)) ? null : dt(SS, uS)
      }(NC, SS, HS, gS)
    }

    function uC(SS, HS) {
      return function(SS, HS, gS) {
        if (HS === Ot[0]) return [(0, AS.Qd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, AS.B.whiteUiText)];
        const tS = gS.split("|")[0],
          bS = SS.isBlock(tS) ? SS.displayName(tS) : void 0,
          XS = "string" === typeof bS ? bS : bS && "translationKey" in bS ? `$t(${bS.translationKey})` : tS;
        return [(0, AS.Qd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: XS
          }
        }, AS.B.whiteUiText), (0, AS.Qd)({
          translationKey: `item:${(0,AS.ue)(HS)}`
        }, AS.B.yellowUiText)]
      }(NC, SS, HS)
    }
    const IC = "buildAFactory2Game:";
    const fC = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function kC(SS) {
      return SS.endsWith(" Ore")
    }
    const aC = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      KC = [],
      jC = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: aC,
        plan: null,
        atomic: KC
      },
      GC = "buildAFactory2Game:",
      CC = new Set(["Splitter", "Sorting Gate"]),
      nC = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class PC {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = SS, this.planAt = HS, this.tierOf = gS, this.XI = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Ku = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = jC, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(SS, HS, gS) {
        var tS, bS, XS;
        let xS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const NS = null !== (tS = null === (bS = SS.AHS(HS)) || void 0 === bS ? void 0 : bS.name) && void 0 !== tS ? tS : null,
          qS = SS.isPlayerCrouching(HS),
          uS = 0 === gS ? null : this.resolve(SS, gS),
          IS = null !== uS && null !== xS && CC.has(uS.rootName) && function(SS, HS) {
            return nC.some((gS => {
              let [tS, bS] = gS;
              const XS = SS.getBlockId(HS[0] + tS, HS[1], HS[2] + bS);
              return 0 !== XS && "Express Belt" === SS.getMetaInfo(XS).rootName
            }))
          }(SS, xS),
          fS = this.updatePlan(0 === gS ? null : xS),
          kS = this.tierOf(),
          aS = null === xS ? null : (0, xC.h)(gS),
          KS = null !== aS && null !== xS && (0, xC.i)(function(SS) {
            return (HS, gS, tS) => SS.getBlockId(HS, gS, tS)
          }(SS), xS[0], xS[1], xS[2], aS),
          jS = this.readAfloat(SS, gS, xS);
        if (gS === this.XI && KS === this.missesMaker && jS === this.afloat && NS === this.Ku && qS === this.crouching && IS === this.express && kS === this.tier && !fS && (!this.targetsLive || !this.liveMoved(xS))) return;
        this.XI = gS, this.missesMaker = KS, this.afloat = jS, this.Ku = NS, this.crouching = qS, this.express = IS;
        const GS = IS && uS ? function(SS) {
          if (null === SS.info) return null;
          return SS.express ??= {
            ...SS.info,
            detail: `${GC}lookKeepsUpExpress`,
            detailItem: null
          }, SS.express
        }(uS) : null !== uS && KS && null !== aS ? this.besideMaker(uS, gS, aS) : null !== uS && jS ? this.hanging(uS) : null !== (XS = null === uS || void 0 === uS ? void 0 : uS.info) && void 0 !== XS ? XS : null;
        this.tier = kS;
        const CS = uS && GS ? function(SS, HS) {
          var gS, tS;
          const bS = ES.j[SS];
          if (!SS.endsWith(" Ore") || "rock" !== (null === bS || void 0 === bS ? void 0 : bS.harvestType) || 0 === bS.harvestLevel) return null;
          const XS = null !== (gS = bS.harvestLevel) && void 0 !== gS ? gS : 0,
            xS = HS ? rx.m[HS] : void 0;
          if ("rock" === (null === xS || void 0 === xS ? void 0 : xS.harvests) && (null !== (tS = xS.level) && void 0 !== tS ? tS : 0) >= XS) return null;
          const NS = (qS = XS, dt(NC, qS));
          var qS;
          if (null === NS) return null;
          const uS = tX(NS),
            IS = /^[AEIOU]/.test(NS) ? "An" : "";
          if ("rock" === (null === xS || void 0 === xS ? void 0 : xS.harvests) && HS) return {
            key: `${GC}lookToolTooWeak${IS}`,
            Ku: tX(HS),
            needed: uS
          };
          return {
            key: NS === Ot[0] ? `${GC}lookNeedAnyPickaxe` : `${GC}lookNeedPickaxe${IS}`,
            Ku: null,
            needed: uS
          }
        }(uS.rootName, NS) : null;
        this.targetsLive = !0 === (null === uS || void 0 === uS ? void 0 : uS.live) && null !== xS;
        let nS = null;
        this.targetsLive && uS && xS && this.live && (this.livePos[0] = xS[0], this.livePos[1] = xS[1], this.livePos[2] = xS[2], this.liveVersion = this.live.version(), nS = this.live.line(uS.rootName, xS));
        const PS = null === GS ? aC : function(SS, HS, gS) {
            const tS = function(SS, HS, gS) {
              const tS = Yg(SS);
              if (null === tS) return null;
              const bS = `${IC}lookPortMode_${tS}`,
                XS = st(HS);
              if (XS && gS) return {
                mode: null,
                detail: bS,
                next: `${IC}lookWrenchPickUp`,
                nextState: null
              };
              const xS = Ag(SS),
                NS = null === xS ? null : Yg(xS);
              return null === NS ? {
                mode: null,
                detail: bS,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: bS,
                next: XS ? `${IC}lookWrenchNext` : `${IC}lookPortWrench`,
                nextState: `${IC}lookPortState_${NS}`
              }
            }(SS, HS, gS);
            if (null !== tS) return tS;
            const bS = tb(SS, HS, gS);
            return null === bS.mode && null === bS.next ? aC : bS
          }(SS.blockIdToBlockName(gS), NS, qS),
          QS = this.plan,
          DS = uS && GS ? this.rowsOf(uS.rootName, kS) : KC,
          wS = this.snapshot;
        if (!(null === GS ? !wS.visible : wS.visible && GS === wS.info && (hS = CS, ZS = wS.tool, hS === ZS || null !== hS && null !== ZS && hS.key === ZS.key && hS.Ku === ZS.Ku && hS.needed === ZS.needed) && function(SS, HS) {
            return SS === HS || null !== SS && null !== HS && SS.key === HS.key && JSON.stringify([SS.params, SS.keys]) === JSON.stringify([HS.params, HS.keys])
          }(nS, wS.live) && function(SS, HS) {
            return SS.mode === HS.mode && SS.detail === HS.detail && SS.next === HS.next && SS.nextState === HS.nextState
          }(PS, wS.wrench) && mK(QS, wS.plan) && DS === wS.atomic)) {
          var hS, ZS;
          this.snapshot = null === GS ? {
            ...wS,
            visible: !1
          } : {
            info: GS,
            visible: !0,
            tool: CS,
            live: nS,
            wrench: PS,
            plan: QS,
            atomic: DS
          };
          for (const SS of this.listeners) SS()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = jC, this.XI = 0, this.Ku = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(SS, HS, gS) {
        if (null === gS || 0 === HS || !NS() || !kC(this.resolve(SS, HS).rootName)) return !1;
        const tS = `${gS[0]},${gS[1]},${gS[2]},${HS}`,
          bS = performance.now();
        return tS === this.afloatKey && bS - this.afloatAt < QC ? this.afloat : (this.afloatKey = tS, this.afloatAt = bS, function(SS, HS) {
          for (const [gS, tS, bS] of fC) {
            const XS = HS(SS[0] + gS, SS[1] + tS, SS[2] + bS);
            if (void 0 === XS || null !== XS && !kC(XS)) return !1
          }
          return !0
        }(gS, ((HS, gS, tS) => function(SS, HS, gS, tS) {
          if (!SS.isBlockInLoadedChunk(HS, gS, tS)) return;
          const bS = SS.getBlockId(HS, gS, tS);
          return 0 === bS ? null : SS.getMetaInfo(bS).rootName
        }(SS, HS, gS, tS))))
      }
      liveMoved(SS) {
        var HS;
        const {
          livePos: gS
        } = this;
        return null === SS || SS[0] !== gS[0] || SS[1] !== gS[1] || SS[2] !== gS[2] || (null === (HS = this.live) || void 0 === HS ? void 0 : HS.version()) !== this.liveVersion
      }
      updatePlan(SS) {
        const HS = null === SS ? "" : SS.join(","),
          gS = performance.now();
        if (HS === this.planPos && gS - this.planMs < 250) return !1;
        this.planPos = HS, this.planMs = gS;
        const tS = null === SS ? null : this.planAt([SS[0], SS[1], SS[2]]),
          bS = !mK(tS, this.plan);
        return this.plan = tS, bS
      }
      besideMaker(SS, HS, gS) {
        let {
          info: tS
        } = SS;
        if (null === tS) return null;
        let bS = this.besideMakerById.get(HS);
        if (void 0 === bS) {
          const SS = "cryo" === gS ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          bS = {
            ...tS,
            detail: `${GC}${SS}`,
            detailItem: null
          }, this.besideMakerById.set(HS, bS)
        }
        return bS
      }
      hanging(SS) {
        let {
          info: HS,
          rootName: gS
        } = SS;
        if (null === HS) return null;
        let tS = this.afloatByRoot.get(gS);
        return void 0 === tS && (tS = {
          ...HS,
          detail: `${GC}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(gS, tS)), tS
      }
      rowsOf(SS, HS) {
        if (null === HS) return KC;
        const gS = `${SS}|${HS}`;
        let tS = this.rowsByKey.get(gS);
        if (void 0 === tS) {
          const bS = function(SS, HS) {
            var gS;
            if (!(SS in AH)) return [];
            const tS = null !== (gS = yH[SS]) && void 0 !== gS ? gS : [],
              bS = new Map;
            for (const xS of sX(SS, HS))
              if ((tS.includes(xS) || pX(xS.output) && zX(xS.output) > lS(SS)) && zX(xS.output) <= HS) {
                var XS;
                const SS = null !== (XS = bS.get(xS.output)) && void 0 !== XS ? XS : [];
                SS.push(xS.input), bS.set(xS.output, SS)
              } return MX([...bS], (SS => {
              let [HS] = SS;
              return -zX(HS)
            })).map((SS => {
              let [HS, gS] = SS;
              return {
                output: HS,
                inputs: gS
              }
            }))
          }(SS, HS);
          tS = bS.length > 0 ? bS : KC, this.rowsByKey.set(gS, tS)
        }
        return tS
      }
      resolve(SS, HS) {
        const {
          rootId: gS,
          rootName: tS
        } = SS.getMetaInfo(HS), bS = (0, Kg.m)(tS) ? HS : gS;
        let XS = this.byRootId.get(bS);
        const xS = NS();
        if (void 0 === XS || XS.nuclear !== xS) {
          var qS;
          const gS = function(SS) {
            return it(NC, SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS)
          }(tS, SS.blockIdToBlockName(HS));
          XS = {
            info: gS,
            rootName: tS,
            live: null !== gS && !0 === (null === (qS = this.live) || void 0 === qS ? void 0 : qS.handles(tS)),
            nuclear: xS
          }, this.byRootId.set(bS, XS)
        }
        return XS
      }
    }
    const QC = 500;
    const DC = (0, tS.memo)((function(SS) {
      var HS, gS;
      let {
        store: bS
      } = SS;
      const {
        t: XS
      } = (0, db.F)(), [xS, NS] = (0, tS.useState)((() => bS.get()));
      (0, tS.useEffect)((() => (NS(bS.get()), bS.subscribe((() => {
        NS(bS.get())
      })))), [bS]);
      const {
        openInGameMenuName: qS,
        openEverythingMenuName: uS,
        isTouchScreen: IS
      } = (0, Qb.m)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: fS,
        tool: kS,
        live: aS,
        wrench: KS,
        atomic: jS
      } = xS, GS = xS.visible && null === qS && null === uS;
      if (null === fS) return null;
      const CS = null !== KS.detail ? XS(KS.detail) : null !== (HS = xS.plan) && void 0 !== HS && HS.ctrl ? XS("buildAFactory2Game:lookPlanCtrl") : null !== fS.detail ? XS(fS.detail, null === fS.detailItem ? void 0 : {
        item: XS(fS.detailItem)
      }) : null;
      return (0, JX.jsxs)("div", {
        className: hb()("Baf2LookTarget", {
          Visible: GS
        }),
        "aria-hidden": !GS,
        children: [(0, JX.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: XS(fS.name)
        }), null !== xS.plan && (0, JX.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: XS(xS.plan.key, {
            kind: XS(xS.plan.kindKey),
            w: String(xS.plan.w),
            h: String(xS.plan.h),
            d: String(xS.plan.d),
            count: String(xS.plan.count)
          })
        }), void 0 !== (null === (gS = xS.plan) || void 0 === gS ? void 0 : gS.why) && (0, JX.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: XS(xS.plan.why)
        }), null !== KS.mode && (0, JX.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: XS(KS.mode)
        }), null !== kS ? (0, JX.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: XS(kS.key, {
            item: XS(kS.needed),
            Ku: null === kS.Ku ? "" : XS(kS.Ku)
          })
        }) : null !== aS ? (0, JX.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: XS(aS.key, tu(XS, aS))
        }) : null !== CS && (0, JX.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: CS
        }), jS.length > 0 && (0, JX.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: XS("buildAFactory2Game:lookAtomicRecipes", {
            list: jS.map((SS => {
              let {
                output: HS,
                inputs: gS
              } = SS;
              const tS = gS.length > 1 ? ` ${XS("buildAFactory2Game:recipeMore",{count:String(gS.length-1)})}` : "";
              return `${XS(tX(gS[0]))}${tS} \u2192 ${XS(tX(HS))}`
            })).join(", ")
          })
        }), null !== KS.next && (0, JX.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: XS(KS.next, {
            state: null === KS.nextState ? "" : XS(KS.nextState),
            use: XS(IS ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var wC = gS(38541);
    const hC = [],
      ZC = [
        [0, -1, 0]
      ];

    function JC(SS) {
      const HS = [SS];
      for (let gS = 1; gS <= 4; gS++) gS > 1 && HS.push(`${SS}|meta|rot${gS}`), HS.push(`${SS}|meta|rot${gS}|Running`);
      return HS
    }

    function OC(SS, HS) {
      return [Math.floor(SS[0] / HS), Math.floor(SS[1] / HS), Math.floor(SS[2] / HS)]
    }

    function dC(SS, HS, gS) {
      return `${SS},${HS},${gS}`
    }

    function cC(SS) {
      const HS = SS.split("|")[0];
      if (!ug(HS)) return hC;
      const gS = AH[HS];
      if (Hg(gS)) return ZC;
      const tS = OG(SS);
      return gg(gS) ? [
        [-tS[0], -tS[1], -tS[2]]
      ] : Zb(gS) ? function(SS, HS) {
        const gS = SS[0] - 2 * HS[0],
          tS = SS[2] - 2 * HS[2],
          bS = [];
        for (let XS = -1; XS <= 1; XS++)
          for (let HS = -1; HS <= 1; HS++) bS.push([gS + XS, SS[1], tS + HS]);
        return bS
      }([0, 0, 0], tS) : hC
    }
    const vC = [.5, .5, .5],
      EC = [.2, .8, .3],
      LC = [.45, 1, .5];
    class YC {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(SS) {
        this.indexed = !0;
        for (const HS of dH)
          for (const gS of JC(HS)) {
            const HS = SS.blockNameToBlockId(gS, !0),
              tS = cC(gS);
            null !== HS && tS.length > 0 && (this.offsetsList.push(tS), this.offsetsIndexById[HS] = this.offsetsList.length)
          }
      }
      onAfterRender(SS, HS) {
        this.indexed || this.index(SS);
        const gS = performance.now();
        if (gS - this.lastCheckMs < 100) return;
        this.lastCheckMs = gS, this.checks++;
        const tS = nK.e.JK,
          [bS, XS, xS] = OC(HS, tS);
        let NS = !1;
        const qS = [];
        let uS = 0;
        for (let IS = bS - 2; IS <= bS + 2; IS++)
          for (let HS = XS - 1; HS <= XS + 1; HS++)
            for (let bS = xS - 2; bS <= xS + 2; bS++) {
              const XS = uS++,
                xS = dC(IS, HS, bS),
                fS = SS.getChunkVersion(IS, HS, bS);
              let kS = this.chunks.get(xS);
              null !== fS ? (kS || (kS = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(xS, kS)), kS.seenAt = this.checks, kS.checkedVersion !== fS && (kS.checkedVersion = fS, NS = !0), kS.scannedVersion !== fS && gS - kS.scannedAt >= 500 && qS.push({
                slot: XS,
                entry: kS,
                origin: [IS * tS, HS * tS, bS * tS]
              })) : (NS ||= void 0 !== kS, this.chunks.delete(xS))
            }
        this.scanDue(SS, qS) && (NS = !0);
        for (const [IS, fS] of this.chunks) fS.seenAt !== this.checks && (NS ||= fS.machines.length > 0, this.chunks.delete(IS));
        for (const IS of this.chunks.values())
          for (const [HS, gS, tS] of IS.cellChunks)(Math.abs(HS - bS) > 2 || Math.abs(gS - XS) > 1 || Math.abs(tS - xS) > 2) && this.watchCellChunk(SS, HS, gS, tS) && (NS = !0);
        for (const [IS, fS] of this.cellChunks) fS.seenAt !== this.checks && this.cellChunks.delete(IS);
        NS && this.refresh(SS)
      }
      dispose(SS) {
        this.clearMeshes(SS), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(SS, HS) {
        const gS = Math.max(HS.findIndex((SS => {
          let {
            slot: HS
          } = SS;
          return HS >= this.scanFrom
        })), 0);
        let tS = 96;
        for (let bS = 0; bS < HS.length; bS++) {
          const {
            slot: XS,
            entry: xS,
            origin: NS
          } = HS[(gS + bS) % HS.length];
          if (tS -= this.scan(SS, xS, NS), tS <= 0) {
            this.scanFrom = XS + 1;
            break
          }
        }
        return HS.length > 0
      }
      scan(SS, HS, gS) {
        let [tS, bS, XS] = gS;
        const xS = nK.e.JK,
          NS = this.hits;
        NS.length = 0;
        const qS = SS.scanBlocks(tS, bS, XS, tS + xS, bS + xS, XS + xS, this.offsetsIndexById, NS),
          uS = [];
        for (let IS = 0; IS < NS.length; IS += 4) uS.push({
          pos: [NS[IS], NS[IS + 1], NS[IS + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[NS[IS + 3]] - 1]
        });
        return HS.machines = uS, HS.cellChunks = function(SS, HS) {
          const gS = new Set,
            tS = [];
          for (const {
              pos: bS,
              offsets: XS
            }
            of SS)
            for (const [SS, xS, NS] of XS) {
              const XS = OC([bS[0] + SS, bS[1] + xS, bS[2] + NS], HS),
                qS = dC(...XS);
              gS.has(qS) || (gS.add(qS), tS.push(XS))
            }
          return tS
        }(uS, xS), HS.scannedVersion = HS.checkedVersion, HS.scannedAt = performance.now(), Math.max(qS, 1)
      }
      watchCellChunk(SS, HS, gS, tS) {
        const bS = dC(HS, gS, tS),
          XS = SS.getChunkVersion(HS, gS, tS),
          xS = this.cellChunks.get(bS);
        return null === XS ? this.cellChunks.delete(bS) : (null === xS || void 0 === xS ? void 0 : xS.version) === XS ? (xS.seenAt = this.checks, !1) : (this.cellChunks.set(bS, {
          version: XS,
          seenAt: this.checks
        }), !0)
      }
      refresh(SS) {
        const HS = function(SS, HS) {
            const gS = new Set,
              tS = [];
            for (const {
                pos: bS,
                offsets: XS
              }
              of SS)
              for (const [SS, xS, NS] of XS) {
                const XS = bS[0] + SS,
                  qS = bS[1] + xS,
                  uS = bS[2] + NS,
                  IS = `${XS},${qS},${uS}`;
                gS.has(IS) || (gS.add(IS), HS(XS, qS, uS) && tS.push([XS, qS, uS]))
              }
            return tS
          }([...this.chunks.values()].flatMap((SS => SS.machines)), ((HS, gS, tS) => SS.isBlockInLoadedChunk(HS, gS, tS) && 0 === SS.getBlockId(HS, gS, tS))),
          gS = HS.join(";");
        gS !== this.shownKey && (this.shownKey = gS, this.clearMeshes(SS), HS.length > 0 && (this.meshes = [this.build(SS, HS, !1), this.build(SS, HS, !0)]))
      }
      build(SS, HS, gS) {
        const tS = HS[0],
          bS = [],
          XS = [];
        for (const [xS, NS, qS] of HS)(0, wC.c)(bS, XS, [xS - tS[0] + .5, NS - tS[1] + .5, qS - tS[2] + .5], vC, gS);
        return SS.createGameMesh({
          positions: bS,
          indices: XS
        }, {
          rgb: gS ? LC : EC,
          alpha: .4
        }, tS)
      }
      clearMeshes(SS) {
        for (const HS of this.meshes) SS.disposeGameMesh(HS);
        this.meshes = []
      }
    }
    const AC = 1 / .6,
      yC = 200,
      VC = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      iC = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      WC = 2 * Math.PI / 3;
    class zC {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VC;
        this.style = SS, this.particles = null, this.points = new Float32Array(800), this.budget = yC, this.lastMs = 0
      }
      static blade() {
        return new zC(iC)
      }
      eC(SS, HS) {
        const gS = Math.min(HS.arcStruck, HS.arcPoints.length);
        this.draw(SS, [HS.arcFrom, ...HS.arcPoints], HS.arcPoints.slice(0, gS))
      }
      onBlade(SS, HS) {
        const [gS, tS, bS] = HS.bladeCentre, [XS, xS] = HS.bladeFacing, NS = gS - 1.5 * XS, qS = bS - 1.5 * xS, uS = Math.atan2(xS, XS), IS = [];
        for (let fS = 0; fS <= 8; fS++) {
          const SS = uS - WC / 2 + WC * fS / 8;
          IS.push([NS + 2.5 * Math.cos(SS), tS, qS + 2.5 * Math.sin(SS)])
        }
        this.draw(SS, IS, HS.bladeStruck)
      }
      dispose() {
        var SS;
        null === (SS = this.particles) || void 0 === SS || SS.stop(), this.particles = null
      }
      draw(SS, HS, gS) {
        if (!SS.particlesEnabled() || HS.length < 2) return;
        const tS = performance.now();
        this.budget = Math.min(yC, this.budget + (tS - this.lastMs) / 1e3 * yC), this.lastMs = tS;
        const bS = [];
        let XS = 0,
          xS = HS[0];
        for (const CS of HS.slice(1)) {
          const SS = Math.min(48, Math.round(Math.hypot(CS[0] - xS[0], CS[1] - xS[1], CS[2] - xS[2]) * this.style.perBlock));
          bS.push([xS, CS, SS]), XS += SS, xS = CS
        }
        const NS = gS.length;
        XS += 10 * NS;
        const qS = XS > this.budget ? this.budget / XS : 1;
        if (0 === XS || qS * XS < 1) return;
        const uS = HS[0],
          [IS, fS, kS] = uS,
          aS = this.points;
        let KS = 0;
        const jS = (SS, HS, gS, tS) => {
          const bS = 4 * KS;
          aS[bS] = SS - IS, aS[bS + 1] = HS - fS, aS[bS + 2] = gS - kS, aS[bS + 3] = tS, KS++
        };
        bS.forEach(((SS, HS) => {
          let [gS, tS, bS] = SS;
          const XS = Math.min(Math.floor(bS * qS), yC - KS),
            xS = Math.hypot(tS[0] - gS[0], tS[1] - gS[1], tS[2] - gS[2]),
            NS = 0 === HS && xS > 0 ? Math.min(.5, .1 * xS) / xS : 0;
          for (let qS = 0; qS < XS; qS++) {
            const SS = NS + (qS + .5) / XS * (1 - NS);
            jS(gS[0] + (tS[0] - gS[0]) * SS, gS[1] + (tS[1] - gS[1]) * SS, gS[2] + (tS[2] - gS[2]) * SS, .15)
          }
        }));
        const GS = Math.floor(10 * qS);
        for (let CS = 0; CS < NS; CS++) {
          const [SS, HS, tS] = gS[CS];
          for (let gS = 0; gS < GS && KS < yC; gS++) jS(SS, HS, tS, 2.5)
        }
        this.budget -= KS, this.particles ??= SS.createParticles(function(SS) {
          const [HS, gS] = SS.colours;
          return {
            texture: "square_particle",
            hf: 400,
            minLifeTime: SS.life[0] / AC,
            maxLifeTime: SS.life[1] / AC,
            minSize: SS.size[0],
            maxSize: SS.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [HS[0], HS[1], HS[2], 1],
              maxColor: [gS[0], gS[1], gS[2], 1]
            }, {
              timeFraction: 1,
              minColor: [HS[0], HS[1], HS[2], 0],
              maxColor: [gS[0], gS[1], gS[2], 0]
            }],
            blendMode: yN.g.Add
          }
        }(this.style), {
          pos: uS
        }), this.particles.emitPoints(uS, aS, KS)
      }
    }
    const UC = new Set(["Sky Spring"]);

    function pC(SS, HS, gS) {
      const tS = SS.split("|")[0];
      return "Air" !== HS || gS || ! function(SS) {
        const HS = SS.split("|")[0];
        return void 0 !== xg[HS] || UC.has(HS)
      }(tS) ? null : SS
    }
    class sC {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(SS) {
        const HS = SS - this.lastTapAt >= 300;
        return this.lastTapAt = SS, HS
      }
    }
    class BC {
      constructor() {
        this.presses = new sC, this.predicted = null
      }
      tap(SS, HS) {
        const gS = this.presses.isNewPress(HS);
        return gS && (this.predicted = {
          station: SS,
          at: HS
        }), gS
      }
      consumeServerOpen(SS, HS) {
        const gS = this.predicted;
        return !(null === gS || gS.station !== SS || HS - gS.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class MC {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(SS, HS) {
        return SS && (this.thrustAt = HS), HS - this.thrustAt < 200
      }
    }
    const FC = [.1, .05, .1],
      RC = {
        texture: "effect_5",
        hf: Math.ceil(48),
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
        blendMode: yN.g.OneOne
      };
    class TC {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new MC, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      eC(SS, HS) {
        for (const [gS, tS] of HS.baf2JetFlames) SS.isLocalPlayer(gS) || (tS ? this.lit.add(gS) : this.lit.delete(gS))
      }
      onAfterRender(SS, HS) {
        const gS = performance.now(),
          tS = this.hold.lit(this.selfThrusting(SS, HS), gS);
        for (const [bS, XS] of this.flames)(bS === HS ? tS : this.lit.has(bS)) || this.setEmitting(XS, !1), bS === HS || SS.getPositionView(bS) ? !XS.emitting && gS - XS.offAt >= 1300 && (XS.particles.stop(), this.flames.delete(bS)) : (XS.particles.dispose(), this.flames.delete(bS), this.lit.delete(bS));
        tS && this.draw(SS, HS, HS);
        for (const bS of this.lit) this.draw(SS, HS, bS)
      }
      dispose() {
        for (const SS of this.flames.values()) SS.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(SS, HS) {
        var gS;
        const tS = SS.getLocalPlayerMovement();
        return !!tS && (null !== (bS = {
          option: null !== (gS = SS.getClientOption(HS, "jumpHoldThrust")) && void 0 !== gS ? gS : null,
          jumping: tS.jumpHeld,
          onGround: tS.onGround,
          alive: SS.isAlive(HS)
        }).option && bS.option.maxUpSpeed >= 0 && bS.jumping && !bS.onGround && bS.alive);
        var bS
      }
      draw(SS, HS, gS) {
        var tS, bS;
        const XS = this.pos;
        if (!SS.readDrawnPosition(gS, XS)) return;
        const xS = SS.readDrawnPosition(HS, this.camera) ? this.camera : XS;
        if (!((XS[0] - xS[0]) ** 2 + (XS[1] - xS[1]) ** 2 + (XS[2] - xS[2]) ** 2 < 1600) || !SS.particlesEnabled()) {
          const SS = this.flames.get(gS);
          return void(SS && this.setEmitting(SS, !1))
        }
        const NS = null !== (tS = this.flames.get(gS)) && void 0 !== tS ? tS : this.create(SS, gS, XS),
          qS = null !== (bS = SS.getDrawnHeading(gS)) && void 0 !== bS ? bS : 0,
          uS = this.at;
        uS[0] = XS[0] - .35 * Math.sin(qS), uS[1] = XS[1] + 1.05, uS[2] = XS[2] - .35 * Math.cos(qS), NS.particles.moveTo(uS), this.setEmitting(NS, !0)
      }
      setEmitting(SS, HS) {
        SS.emitting !== HS && (SS.emitting = HS, HS || (SS.offAt = performance.now()), SS.particles.setEmitRate(HS ? 60 : 0))
      }
      create(SS, HS, gS) {
        const tS = {
          particles: SS.createParticles(RC, {
            pos: gS,
            half: FC
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(HS, tS), tS
      }
    }

    function oC(SS) {
      return "Reactor Frame" === tt("reactor", SS)
    }

    function lC(SS) {
      return Wg("reactor", SS) && !oC(SS) && (SS.startsWith("Reactor Glass") || SS.startsWith("Reactor Port"))
    }
    const mC = "baf2Goal";
    class eC {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Ab.k.subscribe("setDirectionArrow", (SS => {
          let {
            id: HS,
            position: gS
          } = SS;
          HS === mC && (this.goal = gS, this.checkedAt = -1 / 0)
        })), Ab.k.subscribe("clearDirectionArrow", (SS => {
          let {
            id: HS
          } = SS;
          null !== HS && HS !== mC || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const SS of this.subs) Ab.k.unsubscribe(SS)
      }
      sideOf(SS, HS, gS, tS) {
        const bS = this.goal;
        if (!bS) return 0;
        gS - this.checkedAt > 1e3 && (this.checkedAt = gS, this.open = function(SS, HS) {
          const [gS, tS, bS] = SS.map(Math.floor);
          if (!lC(HS(gS, tS, bS))) return null;
          for (const [XS, xS] of [
              [1, 0],
              [0, 1]
            ]) {
            const SS = HS(gS + XS, tS, bS + xS),
              NS = HS(gS - XS, tS, bS - xS);
            if (oC(NS) && lC(SS)) return [XS, 0, xS];
            if (oC(SS) && lC(NS)) return [0 - XS, 0, 0 - xS]
          }
          return null
        }(bS, ((HS, gS, tS) => SS.blockIdToBlockName(SS.getBlockId(HS, gS, tS)))));
        const XS = this.open;
        if (!XS) return 0;
        const xS = tS(bS);
        if (Math.abs(xS.x - HS.x) > .05 || Math.abs(xS.y - HS.y) > .05) return 0;
        const NS = tS([bS[0] + XS[0], bS[1], bS[2] + XS[2]]).x - xS.x;
        return Math.abs(NS) < .3 ? 0 : NS > 0 ? 1 : -1
      }
    }
    class rC {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new eC, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.nK = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.WC = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((SS => {
          for (const HS of SS) HS.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(HS.target, HS.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.nK || this.clear()
        }, window.addEventListener("resize", this.WC)
      }
      onAfterRender(SS, HS) {
        var gS;
        this.api = SS, this.project = null !== (gS = null === HS || void 0 === HS ? void 0 : HS.projectWorldPosToScreenPos) && void 0 !== gS ? gS : null, this.queued || this.nK || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.nK = !0;
        for (const SS of this.moved.keys()) SS.style.transform = "";
        this.moved.clear();
        for (const SS of this.sideLabels.keys()) SS.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.WC)
      }
      clear() {
        for (const XS of this.moved.keys()) XS.isConnected || this.moved.delete(XS);
        for (const XS of this.sideLabels.keys()) XS.isConnected || this.sideLabels.delete(XS);
        if (0 === this.arrows.length) return;
        const SS = performance.now(),
          HS = SS - this.refreshedAt > 1e3;
        HS && (this.refreshedAt = SS, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const gS = this.trackerBox(),
          tS = this.barsBox(),
          bS = this.toastBox(HS);
        (gS || tS || bS) && HS && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let XS = 0; XS < this.arrows.length; XS++) {
          const HS = this.arrows[XS];
          this.labelOffsets.set(HS, this.runLabelAside(HS, SS));
          const xS = (gS ? this.shiftLeftOf(HS, gS) : 0) || this.shiftOnScreen(HS),
            NS = Math.min(tS ? this.liftAbove(HS, tS, xS) : 0, bS ? this.liftAbove(HS, bS, xS) : 0),
            qS = this.moved.get(HS);
          if (0 !== xS || 0 !== NS) {
            const SS = 0 === NS ? `translateX(${xS}px)` : `translate(${xS}px, ${NS}px)`;
            qS !== SS && (HS.style.transform = SS, this.moved.set(HS, SS))
          } else void 0 !== qS && (HS.style.transform = "", this.moved.delete(HS))
        }
      }
      trackerBox() {
        var SS, HS;
        const gS = null !== (SS = this.tracker) && void 0 !== SS && SS.isConnected ? this.tracker : null !== (HS = this.trackers[0]) && void 0 !== HS ? HS : null;
        if (gS !== this.tracker && this.watch(gS), this.boxStale && gS) {
          var tS, bS, XS;
          this.boxStale = !1;
          const SS = gS.closest(".NoRoom") ? null : gS.getBoundingClientRect(),
            HS = SS && SS.width > 0 ? null === (tS = this.hud) || void 0 === tS ? void 0 : tS.getBoundingClientRect() : void 0,
            xS = SS && HS ? Math.max(SS.top, HS.top) : null !== (bS = null === SS || void 0 === SS ? void 0 : SS.top) && void 0 !== bS ? bS : 0,
            NS = SS && HS ? Math.min(SS.bottom, HS.bottom) : null !== (XS = null === SS || void 0 === SS ? void 0 : SS.bottom) && void 0 !== XS ? XS : 0;
          this.box = SS && SS.width > 0 && NS > xS ? {
            left: SS.left,
            top: xS,
            right: SS.right,
            bottom: NS
          } : null
        }
        return gS ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var SS;
          this.barsStale = !1;
          const HS = null === (SS = this.statBars[0]) || void 0 === SS ? void 0 : SS.getBoundingClientRect();
          this.bars = HS && HS.width > 0 && HS.height > 0 ? {
            left: HS.left,
            top: HS.top,
            right: HS.right,
            bottom: HS.bottom
          } : null
        }
        return this.bars
      }
      toastBox(SS) {
        var HS;
        const gS = null !== (HS = this.toasts[0]) && void 0 !== HS ? HS : null;
        if (gS !== this.toastEl || SS && gS) {
          this.toastEl = gS;
          const SS = null === gS || void 0 === gS ? void 0 : gS.getBoundingClientRect();
          this.toast = SS && SS.width > 0 && SS.height > 0 ? {
            left: SS.left,
            top: SS.top,
            right: SS.right,
            bottom: SS.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(SS, HS, gS) {
        var tS;
        const bS = this.anchorOf(SS);
        if (!bS) return 0;
        const XS = bS.x + gS + (null !== (tS = this.labelOffsets.get(SS)) && void 0 !== tS ? tS : 0),
          {
            halfWidth: xS,
            labelled: NS
          } = this.extentOf(SS),
          qS = bS.y + this.em * (NS ? 6.2 : 3);
        return qS < HS.top - 6 || XS + xS < HS.left - 6 || XS - xS > HS.right + 6 ? 0 : HS.top - 6 - qS
      }
      watch(SS) {
        var HS, gS;
        this.tracker && this.sizes.unobserve(this.tracker), null === (HS = this.hud) || void 0 === HS || HS.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = SS, this.hud = null !== (gS = null === SS || void 0 === SS ? void 0 : SS.closest(".Baf2QuestHud")) && void 0 !== gS ? gS : null, this.box = null, this.boxStale = !0, SS && this.sizes.observe(SS), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(SS, HS) {
        var gS;
        const tS = this.anchorOf(SS);
        if (!tS) return 0;
        const {
          y: bS
        } = tS, XS = tS.x + (null !== (gS = this.labelOffsets.get(SS)) && void 0 !== gS ? gS : 0), xS = this.em, {
          halfWidth: NS,
          labelled: qS
        } = this.extentOf(SS), uS = bS - xS, IS = XS + NS;
        return bS + xS * (qS ? 6.2 : 3) < HS.top || uS > HS.bottom || IS < HS.left - 6 || XS - NS > HS.right ? 0 : Math.max(HS.left - 6 - IS, 6 - (XS - NS))
      }
      shiftOnScreen(SS) {
        var HS;
        const gS = this.anchorOf(SS);
        if (!gS) return 0;
        const {
          halfWidth: tS
        } = this.extentOf(SS), bS = gS.x + (null !== (HS = this.labelOffsets.get(SS)) && void 0 !== HS ? HS : 0), XS = bS + tS - (this.innerWidth - 6);
        return XS > 0 ? -XS : Math.max(0, 6 - (bS - tS))
      }
      runLabelAside(SS, HS) {
        var gS;
        let tS = null;
        for (let xS = 0; xS < SS.children.length; xS++) SS.children[xS].classList.contains("DirectionArrowLabel") && (tS = SS.children[xS]);
        if (!tS) return 0;
        const bS = SS.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(SS) : null,
          XS = (bS && this.api ? this.side.sideOf(this.api, {
            x: bS.x / this.innerWidth * 100,
            y: bS.y / this.innerHeight * 100
          }, HS, this.project) : 0) * this.halfWidthOf(tS);
        return XS !== (null !== (gS = this.sideLabels.get(tS)) && void 0 !== gS ? gS : 0) && (tS.style.transform = 0 === XS ? "" : `translateX(-50%) translateX(${XS}px)`, 0 === XS ? this.sideLabels.delete(tS) : this.sideLabels.set(tS, XS)), XS
      }
      extentOf(SS) {
        let HS = this.em,
          gS = !1;
        for (let tS = 0; tS < SS.children.length; tS++) {
          const bS = SS.children[tS],
            XS = bS.classList.contains("DirectionArrowLabel");
          gS ||= XS, (XS || bS.classList.contains("DirectionArrowDistance")) && (HS = Math.max(HS, this.halfWidthOf(bS)))
        }
        return {
          halfWidth: HS,
          labelled: gS
        }
      }
      halfWidthOf(SS) {
        let HS = this.halfWidths.get(SS);
        return void 0 === HS && (HS = SS.offsetWidth / 2, this.halfWidths.set(SS, HS), this.sizes.observe(SS), this.labels.add(SS)), HS
      }
      forgetGoneLabels() {
        for (const SS of this.labels) SS.isConnected || (this.sizes.unobserve(SS), this.halfWidths.delete(SS), this.labels.delete(SS))
      }
      anchorOf(SS) {
        const HS = SS.style.translate,
          gS = this.anchors.get(SS);
        if (gS && gS.translate === HS && gS.innerWidth === this.innerWidth && gS.innerHeight === this.innerHeight) return gS;
        const tS = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(HS);
        if (!tS) return null;
        const bS = {
          translate: HS,
          x: parseFloat(tS[1]) / 100 * this.innerWidth,
          y: parseFloat(tS[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(SS, bS), bS
      }
    }
    const Sn = "Baf2ArrowText";

    function Hn(SS, HS) {
      const gS = SS.rows.find((SS => SS.current));
      return YS(SS.tutorial) && null !== gS && void 0 !== gS && gS.item && Mb(gS) && cS(gS.item).includes(HS) ? gS.item : null
    }
    const gn = new class {
      constructor(SS) {
        this.select = SS, this.picks = new Map
      }
      open(SS, HS, gS) {
        const tS = Hn(HS, SS);
        null !== tS && this.Sa(SS, tS, gS)
      }
      follow(SS, HS) {
        if (NS())
          for (const [gS, {
              item: tS,
              had: bS
            }] of this.picks) {
            const XS = Hn(SS, gS);
            XS !== tS && (null !== XS && HS(tS) > bS ? this.Sa(gS, XS, HS) : this.picks.delete(gS))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Sa(SS, HS, gS) {
        this.picks.set(SS, {
          item: HS,
          had: gS(HS)
        }), this.select(SS, HS)
      }
    }(yb.m);

    function tn(SS) {
      return HS => {
        let gS = 0;
        for (const tS of SS.getInventoryItems())(null === tS || void 0 === tS ? void 0 : tS.name) === HS && (gS += null === tS.amount ? 1 : Math.max(tS.amount, 0));
        return gS
      }
    }

    function bn(SS, HS, gS, tS) {
      SS.getClientOption(HS, "canCraft") && "inventory" !== Qb.b.get("openInGameMenuName") && (gn.open(gS, tS.get(), tn(SS)), Ab.k.cj("toggleMenu", `inventory|${gS}`))
    }
    let Xn = null,
      xn = !1;

    function Nn(SS) {
      const HS = ZX();
      SS === Xn && HS === xn || (Xn = SS, xn = HS, (0, yb.o)(function(SS, HS) {
        const gS = new Map;
        for (let tS = SS + 1; tS <= bS.length; tS++) {
          const bS = FX(tS, SS, HS);
          if (bS)
            for (const HS of CS(tS).unlocks) gS.set(HS, {
              ...bS,
              stepsAway: tS - SS
            })
        }
        return gS
      }(SS, HS)))
    }

    function qn() {
      return SS = () => {
        null !== Xn && Nn(Xn)
      }, (0, wX.k)(hX, SS);
      var SS
    }

    function un() {
      return (0, yb.u)(MX(Object.keys(dS), zX)), () => {
        (0, yb.u)([])
      }
    }

    function In(SS, HS, gS) {
      var tS, bS;
      const XS = SS.getTargetedBlock();
      if (!XS || ! function(SS, HS, gS) {
          if ("Chest" !== HS) return !1;
          const tS = SS.split("|")[0];
          if (!ug(tS) || 0 === AH[tS].outputSlots.length) return !1;
          const bS = OG(SS);
          return gS[0] === bS[0] && gS[1] === bS[1] && gS[2] === bS[2]
        }(gS, null === (tS = SS.AHS(HS)) || void 0 === tS ? void 0 : tS.name, XS.normal)) return !1;
      const [xS, NS, qS] = XS.pa, uS = SS.getBlockId(xS, NS, qS);
      return 0 === uS || !0 === (null === (bS = ES.j[uS]) || void 0 === bS ? void 0 : bS.canBePlacedOver)
    }
    var fn = gS(36773);
    const kn = new Set(jg.b);
    class an {
      constructor(SS) {
        this.toasts = SS, this.lastAt = -1 / 0
      }
      onAltAction(SS, HS, gS) {
        const tS = SS.getTargetedBlock();
        if (!tS || function(SS) {
            const HS = SS.split("|")[0];
            return ug(HS) || null !== Zt(HS) || JS(HS) || jg.b.includes(HS)
          }(gS) && !kn.has(gS.split("|")[0])) return;
        const bS = SS.AHS(HS);
        if (!bS || !kn.has(bS.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const XS = bS.typeObj.id,
          [xS, NS, qS] = tS.pa,
          uS = SS.getBlockId(xS, NS, qS),
          IS = ES.j[uS];
        (0 === uS || null !== IS && void 0 !== IS && IS.aa || null !== IS && void 0 !== IS && IS.canBePlacedOver) && SS.isSolidToPlayerBlockId(XS) && SS.canModifyBlockAt(xS, NS, qS) && SS.SHS(xS, NS, qS, XS) && !SS.SHS(xS, NS, qS, XS, HS) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, AS.Qd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, AS.B.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Kn {
      constructor(SS) {
        this.show = SS, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(SS, HS, gS) {
        var tS;
        if (!HS) return this.started = null, void this.gatedThisHold.clear();
        if (!SS) return void(this.started = null);
        const bS = `${SS.x},${SS.y},${SS.z},${SS.Ku}`;
        if (bS === this.started) return;
        this.started = bS;
        const XS = Wt(SS.y) ? qC(SS.block, SS.Ku, SS.level) : null;
        if (null === XS || this.gatedThisHold.has(bS)) return;
        this.gatedThisHold.add(bS);
        const xS = SS.block.split("|")[0];
        gS - (null !== (tS = this.hintedAt.get(xS)) && void 0 !== tS ? tS : -1 / 0) < 5e3 || (this.hintedAt.set(xS, gS), this.show({
          baf2ToastText: uC(XS, SS.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var jn = gS(45);

    function Gn(SS, HS) {
      const gS = [...SS.baf2CoreBankPaused];
      for (const [bS] of SS.baf2CoreBanked) gS.push(bS);
      for (const xS of bS) {
        for (const {
            item: SS
          }
          of xS.cost) gS.push(SS);
        for (const SS of xS.newDeposits) gS.push(SS.block);
        for (const SS of xS.unlocks) gS.push(SS, vS(SS));
        xS.reward && gS.push(xS.reward);
        for (const {
            item: SS
          }
          of null !== (tS = null === (XS = xS.charge) || void 0 === XS ? void 0 : XS.items) && void 0 !== tS ? tS : []) {
          var tS, XS;
          gS.push(SS)
        }
      }
      return {
        message: SS,
        itemNames: HS([...new Set(gS)])
      }
    }
    const Cn = "baf2MultiblockGuide";
    const nn = new Map;
    const Pn = function(SS, HS, gS, bS) {
      let {
        localPlayerId: XS
      } = bS;
      const xS = new GN,
        NS = new Na,
        uS = new Ka,
        IS = new ka(uS),
        fS = (SS, HS) => {
          HS ? IS.observe(SS) : IS.unobserve(SS)
        },
        kS = new fa,
        aS = new na(fS),
        KS = SS => aS.covers(SS),
        jS = new Wa;
      let GS;
      const CS = new zx((SS => {
          GS.sendCommand(SS)
        })),
        nS = () => {
          CS.send("baf2questbook")
        },
        PS = SS => function(SS, HS, gS) {
          const tS = {};
          for (const bS of gS) {
            let gS = nn.get(bS);
            void 0 === gS && (gS = SS.getItemStat(HS, bS, "displayName"), nn.set(bS, gS)), tS[bS] = gS
          }
          return tS
        }(GS, XS, SS),
        QS = new zb(nS),
        DS = new la((() => Qb.b.get("loadingOverlayVisible"))),
        wS = new JI(CS, QS, DS),
        hS = new HK,
        ZS = new an(DS),
        OS = new Kn((SS => {
          DS.show(SS, SS.baf2ToastMs)
        })),
        dS = new IK(fS),
        cS = new VG(dS),
        vS = new Zx,
        LS = new XC,
        YS = new gN,
        VS = new CK({
          read: () => !1 !== jn.g.getItem(Cn),
          write: SS => {
            jn.g.setItem(Cn, SS)
          }
        }),
        iS = new MK(VS),
        WS = new TK(VS),
        zS = new jj(VS, (SS => function(SS, HS) {
          const gS = rN(HS.w, HS.h, HS.d),
            tS = new Uint8Array(gS);
          for (let bS = 0; bS < gS; bS++) {
            const gS = zK(SS, eg(HS, gt(HS, bS)));
            tS[bS] = null === gS ? 0 : oN(gS)
          }
          return tS
        }(GS, SS)), xj(CS)),
        US = new Gj(VS, xj(CS)),
        pS = new aj,
        MS = (SS, HS) => {
          let [gS, tS, bS] = SS;
          pS.answered(HS) || DS.show({
            baf2ToastText: [(0, AS.Qd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: gS,
                h: tS,
                d: bS
              }
            }, AS.B.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      zS.onSizeNotTaken(MS), US.onSizeNotTaken(MS);
      const FS = new Qj,
        RS = new SG(VS),
        oS = new gG,
        lS = new aG(oS),
        mS = new ZG,
        rS = new iG,
        SH = new TG(rS),
        HH = new bC(rS),
        gH = rS.lookSource(),
        tH = new PC({
          handles: SS => gH.handles(SS) || SS === yS,
          line: (SS, HS) => SS === yS ? function(SS, HS, gS) {
            var tS;
            const bS = BS(null === (tS = HS.at(gS)) || void 0 === tS ? void 0 : tS.item);
            return null === bS ? {
              key: `${GC}lookFarmEmpty`
            } : {
              key: SS.blockIdToBlockName(SS.getBlockId(gS[0], gS[1], gS[2])).endsWith("|Running") ? `${GC}lookFarmRunning` : `${GC}lookFarmWaiting`,
              keys: {
                mob: sS(bS)
              }
            }
          }(GS, dS, HS) : gH.line(SS, HS),
          version: () => gH.version() + dS.version()
        }, (SS => lK(VS.all(), SS, (SS => zK(GS, SS)))), (() => QS.get().tier)),
        bH = new Wj,
        XH = new YC,
        xH = new zC,
        NH = zC.blade(),
        qH = new TC,
        uH = new bK,
        IH = new rC,
        kH = new BC,
        aH = new sC;
      let KH = -1 / 0,
        jH = 0,
        GH = -1 / 0,
        CH = -1 / 0;
      const nH = () => {
          CS.send("baf2islandsclose"), CH = Date.now()
        },
        PH = [];

      function QH(SS) {
        var HS, gS, tS, bS, XS, xS, qS;
        "core" === (null === (HS = NS.get()) || void 0 === HS ? void 0 : HS.kind) && "core" !== (null === SS || void 0 === SS ? void 0 : SS.kind) && CS.send("baf2coreclose"), "power" === (null === (gS = NS.get()) || void 0 === gS ? void 0 : gS.kind) && "power" !== (null === SS || void 0 === SS ? void 0 : SS.kind) && CS.send("baf2powerclose"), "water" === (null === (tS = NS.get()) || void 0 === tS ? void 0 : tS.kind) && "water" !== (null === SS || void 0 === SS ? void 0 : SS.kind) && CS.send(eS.x), "terminal" === (null === (bS = NS.get()) || void 0 === bS ? void 0 : bS.kind) && "terminal" !== (null === SS || void 0 === SS ? void 0 : SS.kind) && CS.send("baf2terminalclose"), "islands" === (null === (XS = NS.get()) || void 0 === XS ? void 0 : XS.kind) && "islands" !== (null === SS || void 0 === SS ? void 0 : SS.kind) && nH();
        const uS = rS.getStatus();
        "collider" === (null === (xS = NS.get()) || void 0 === xS ? void 0 : xS.kind) && "collider" !== (null === SS || void 0 === SS ? void 0 : SS.kind) && uS && CS.send(Vq(uS, "close"));
        const IS = SS => "reactor" === SS || "battery" === SS;
        if (IS(null === (qS = NS.get()) || void 0 === qS ? void 0 : qS.kind) && !IS(null === SS || void 0 === SS ? void 0 : SS.kind)) {
          var fS, kS, aS;
          const SS = "reactor" === (null === (fS = NS.get()) || void 0 === fS ? void 0 : fS.kind) ? null === (kS = zS.get()) || void 0 === kS ? void 0 : kS.status.baf2RxAt : null === (aS = US.get()) || void 0 === aS ? void 0 : aS.status.baf2BatAt;
          SS && CS.send(fH(SS, "close"))
        }
        "quests" === (null === SS || void 0 === SS ? void 0 : SS.kind) && nS(), NS.set(SS), null === SS && hS.release()
      }

      function DH() {
        (0, Pb.h)(), QH(null)
      }
      let wH = new Set,
        hH = !1;
      const ZH = {
        onCreate: SS => {
          GS = SS, GS.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const HS of dH) {
            const SS = AH[HS].inputSlots ? LN(xS) : cN(HS, xS, vS, CS);
            PH.push((0, Cb.d)(HS, SS))
          }
          PH.push((0, Pb.y)((0, tS.createElement)(tS.Fragment, null, (0, tS.createElement)(Da, {
            controller: aS
          }), (0, tS.createElement)(aK, {
            store: dS
          }), (0, tS.createElement)(DC, {
            store: tH
          }), (0, tS.createElement)(Ta, {
            store: QS
          }), (0, tS.createElement)(ra, {
            store: DS
          }), (0, tS.createElement)(gK, {
            store: hS
          }), (0, tS.createElement)(xK, {
            store: uH
          }), (0, tS.createElement)(Pj, {
            store: FS
          }), (0, tS.createElement)(tG, {
            store: oS
          })), {
            content: (0, tS.createElement)(qa, {
              commands: CS,
              store: NS,
              power: vS,
              water: YS,
              reactor: zS,
              battery: US,
              collider: rS,
              terminal: LS,
              quests: QS,
              tutorial: wS,
              close: Pb.k,
              leave: () => {
                hS.dropHeld(), (0, Pb.h)()
              },
              askIslands: () => {
                CH = -1 / 0, KH = Date.now(), jH = CS.send(TS)
              },
              openSocial: () => {
                (0, Pb.h)(), Qb.b.set({
                  openEverythingMenuName: fg.q.SOCIAL
                })
              },
              showCore: SS => {
                QH({
                  kind: "core",
                  core: SS
                }), CS.send("baf2corereopen")
              }
            }),
            onClose: () => {
              QH(null)
            }
          })), PH.push((0, nb.u)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              QH({
                kind: "quests"
              }), (0, Pb.u)()
            }
          })), PH.push(function(SS, HS) {
            let gS = null,
              tS = () => {};
            const bS = HS => {
              var bS;
              let {
                tutorial: XS,
                tutorialKnown: xS
              } = HS;
              (null === (bS = gS) || void 0 === bS ? void 0 : bS.tutorial) === XS && gS.tutorialKnown === xS || (gS = {
                tutorial: XS,
                tutorialKnown: xS
              }, tS = (0, nb.u)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: hI[XS],
                icon: {
                  kind: "icon",
                  name: wI[XS]
                },
                iconOnly: !0,
                disabled: !xS,
                className: "Baf2TutorialButton",
                onClick: () => {
                  SS.next()
                }
              }))
            };
            bS(HS.get());
            const XS = Ab.k.subscribe(Vb, bS);
            return () => {
              Ab.k.unsubscribe(XS), tS()
            }
          }(wS, QS)), hH = !1, PH.push(qn()), PH.push(un()), PH.push(function() {
            const SS = Ab.k.subscribe(Vb, rb),
              HS = () => {
                if (eb) {
                  const SS = eb;
                  eb = null, (0, yb.q)(SS)
                }
              },
              gS = Ab.k.subscribe("toggleMenu", (SS => {
                "inventory" === (null === SS || void 0 === SS ? void 0 : SS.split("|")[0]) && HS()
              })),
              tS = Ab.k.subscribe("appManagerUpdated|openInGameMenuName", (SS => {
                "inventory" === SS && HS()
              }));
            return () => {
              Ab.k.unsubscribe(SS), Ab.k.unsubscribe(gS), Ab.k.unsubscribe(tS)
            }
          }()), PH.push(function(SS) {
            const HS = tn(SS),
              gS = Ab.k.subscribe(Vb, (SS => {
                gn.follow(SS, HS)
              }));
            return () => {
              Ab.k.unsubscribe(gS), gn.clear()
            }
          }(GS)), PH.push(function() {
            const SS = document.documentElement,
              HS = (0, Ua.d)(".InvenBodyRight", [], (() => {
                const HS = document.querySelector(".InvenBodyRight");
                HS && SS.style.setProperty("--baf2-backpack-width", `${HS.offsetWidth}px`)
              }));
            return () => {
              HS(), SS.style.removeProperty("--baf2-backpack-width")
            }
          }()), PH.push(function() {
            const SS = document.documentElement;
            return SS.classList.add(Sn), () => {
              SS.classList.remove(Sn)
            }
          }()), PH.push((() => {
            IS.dispose(), uS.dispose()
          })), jS.start(GS), PH.push((() => {
            jS.dispose(), qH.dispose(), cS.dispose()
          }))
        },
        onClose: () => {
          (0, yb.q)([]), eb = null, mb = new Set, Xn = null, (0, yb.o)(new Map), nn.clear();
          for (const SS of PH) SS();
          QS.dispose(), tH.dispose(), DS.dispose(), hS.dispose(), bH.dispose(), XH.dispose(GS), iS.dispose(GS), WS.dispose(GS), RS.dispose(GS), lS.dispose(GS), oS.dispose(), mS.dispose(), VS.dispose(), zS.dispose(), US.dispose(), FS.dispose(), xH.dispose(), NH.dispose(), uH.dispose(), SH.dispose(GS), HH.dispose(GS), rS.dispose(), IH.dispose(), CS.clear()
        },
        onAfterRender: (SS, HS) => {
          var gS, tS, bS;
          try {
            jS.onAfterRender(HS)
          } catch (uS) {
            console.error("Error drawing BAF2 belt items", uS)
          }
          try {
            qH.onAfterRender(GS, XS)
          } catch (uS) {
            console.error("Error drawing BAF2 jet flames", uS)
          }
          hH || (hH = !0, CS.send("baf2clientready"));
          const xS = GS.getPositionView(XS);
          aS.onAfterRender(HS, xS, kS), dS.onAfterRender(HS, xS, kS, KS), IS.run(kS), bH.onAfterRender(GS, xS), XH.onAfterRender(GS, xS), cS.onAfterRender(GS, xS), iS.onAfterRender(GS, xS), WS.onAfterRender(GS, XS, xS), RS.onAfterRender(GS, XS, xS), lS.onAfterRender(GS, XS), mS.onAfterRender(GS, xS), QS.onPlayerY(xS[1]), SH.onAfterRender(GS), HH.onAfterRender(GS, XS, xS);
          const qS = GS.getTargetedBlock();
          tH.onAfterRender(GS, XS, null !== (gS = null === qS || void 0 === qS ? void 0 : qS.Rl) && void 0 !== gS ? gS : 0, null !== (tS = null === qS || void 0 === qS ? void 0 : qS.position) && void 0 !== tS ? tS : null), IH.onAfterRender(GS, HS), OS.onMining(function(SS, HS) {
            var gS, tS;
            const bS = SS.getMiningBlock();
            if (!bS) return null;
            const XS = (0, ES.h)(SS.getBlockId(bS[0], bS[1], bS[2])),
              xS = null !== (gS = null === (tS = SS.AHS(HS)) || void 0 === tS ? void 0 : tS.name) && void 0 !== gS ? gS : null,
              NS = SS.getItemStat(HS, XS.split("|")[0], "harvestLevel");
            return {
              block: XS,
              x: bS[0],
              y: bS[1],
              z: bS[2],
              Ku: xS,
              level: NS
            }
          }(GS, XS), GS.isMining(), performance.now()), "dropMap" === (null === (bS = NS.get()) || void 0 === bS ? void 0 : bS.kind) && Wt(xS[1]) && DH()
        },
        onPlayerChangeBlock: (SS, HS, gS, tS, bS, xS) => {
          SS === XS && function(SS, HS, gS, tS, bS, XS, xS) {
            const NS = pC(XS, xS, SS.isPlayerCrouching(HS));
            if (null === NS) return;
            if (SS.TE(gS, tS, bS, NS), !SS.getClientOption(HS, "canPickUpItems")) return;
            const qS = xg[NS.split("|")[0]];
            var uS, IS, fS;
            void 0 !== qS && (uS = SS.getInventoryItems(), IS = qS, fS = nK.e.maxItemStackSize, SS.getInventoryFreeSlotCount(HS) > 0 || uS.some((SS => null !== SS && SS.name === IS && null !== SS.amount && SS.amount < fS))) && SS.playSound(HS, (0, fn.e)("pickUp"), .5, 1)
          }(GS, SS, HS, gS, tS, bS, xS)
        },
        onPlayerAltAction: (SS, HS, gS, tS, bS) => {
          var xS, NS;
          if (!GS.getClientOption(XS, "canPickUpItems")) return;
          const qS = null !== (xS = null === (NS = GS.AHS(XS)) || void 0 === NS ? void 0 : NS.name) && void 0 !== xS ? xS : null,
            uS = function(SS, HS) {
              const gS = SS.split("|")[0];
              return JS(gS) && HS !== qb && "Sky Pack" !== HS ? gS : null
            }(bS, qS);
          if (null !== uS) return void(kH.tap(uS, performance.now()) && bn(GS, XS, uS, QS));
          if (!st(qS)) return;
          const IS = aH.isNewPress(performance.now()),
            fS = function(SS, HS, gS) {
              return !st(HS) || gS ? null : et(SS)
            }(bS, qS, GS.isPlayerCrouching(XS));
          null !== fS && IS && GS.TE(HS, gS, tS, fS)
        },
        onPlayerAttemptAltAction: (SS, HS, gS, tS, bS) => {
          if (function(SS, HS, gS, tS, bS) {
              "Workbench" === tS.split("|")[0] && SS.getClientOption(gS, "canCraft") && (gn.open("Workbench", bS.get(), tn(SS)), HS.send("baf2station Workbench"))
            }(GS, CS, XS, bS, QS), In(GS, XS, bS)) return "preventAction";
          ZS.onAltAction(GS, XS, bS)
        },
        onReceivedMessageFromServer: (SS, HS) => {
          if ("baf2MachineStatus" === SS) {
            var gS, tS, bS, uS, IS, fS, kS, KS, nS, wS, ZS, JS, OS, cS, ES, AS;
            const SS = HS,
              XS = SS.baf2MachineTaught;
            xS.set(SS.baf2MachinePos, {
              status: SS.baf2MachineStatus,
              power: null !== (gS = SS.baf2MachinePower) && void 0 !== gS ? gS : null,
              opLeftMs: null !== (tS = SS.baf2MachineOpLeftMs) && void 0 !== tS ? tS : null,
              dug: SS.baf2MachineYield ? {
                item: SS.baf2MachineYield,
                name: PS([SS.baf2MachineYield])[SS.baf2MachineYield]
              } : null,
              powerCap: null !== (bS = SS.baf2MachinePowerCap) && void 0 !== bS ? bS : null,
              powerRates: null !== (uS = SS.baf2MachinePowerRates) && void 0 !== uS ? uS : null,
              coupled: !0 === SS.baf2MachineCoupled,
              couplerLevel: null !== (IS = SS.baf2MachineCoupler) && void 0 !== IS ? IS : 1,
              taught: XS,
              taughtName: XS ? PS([XS])[XS] : null,
              tier: null !== (fS = SS.baf2MachineTier) && void 0 !== fS ? fS : null,
              input: null !== (kS = SS.baf2MachineInput) && void 0 !== kS ? kS : null,
              inertCoupler: null !== (KS = SS.baf2MachineInertCoupler) && void 0 !== KS ? KS : null,
              inputShort: null !== (nS = SS.baf2MachineInputShort) && void 0 !== nS ? nS : null,
              field: null !== (wS = SS.baf2MachineField) && void 0 !== wS ? wS : null,
              noSeeds: !0 === SS.baf2MachineNoSeeds,
              fuelFed: !0 === SS.baf2MachineFuelFed,
              fuelFeeds: !0 === SS.baf2MachineFuelFeeds,
              coreFull: !0 === SS.baf2MachineCoreFull,
              waterUnpowered: !0 === SS.baf2MachineWaterUnpowered,
              powerShort: !0 === SS.baf2MachinePowerShort,
              powerWait: !0 === SS.baf2MachinePowerWait,
              reactorPowered: !0 === SS.baf2MachineReactorPowered,
              fuelLeftMs: null !== (ZS = SS.baf2MachineFuelLeftMs) && void 0 !== ZS ? ZS : null,
              burning: null !== (JS = SS.baf2MachineBurning) && void 0 !== JS ? JS : null,
              fuelKeep: null !== (OS = SS.baf2MachineFuelKeep) && void 0 !== OS ? OS : null,
              water: null !== (cS = SS.baf2MachineWater) && void 0 !== cS ? cS : null,
              farm: null !== (ES = SS.baf2MachineFarm) && void 0 !== ES ? ES : null,
              cryo: null !== (AS = SS.baf2MachineCryo) && void 0 !== AS ? AS : null
            })
          } else if ("baf2StationOpen" === SS) {
            const SS = HS.baf2Station;
            kH.consumeServerOpen(SS, performance.now()) || bn(GS, XS, SS, QS)
          } else if ("baf2Power" === SS) {
            const SS = HS;
            vS.set(SS), SS.baf2PowerOpen && (QH({
              kind: "power"
            }), (0, Pb.u)())
          } else if (SS === eS.C) {
            const SS = HS;
            YS.set(SS), SS.baf2WaterOpen && (QH({
              kind: "water"
            }), (0, Pb.u)())
          } else if ("baf2RxPlans" === SS) {
            var yS, iS, WS;
            const SS = HS;
            VS.eC(SS);
            const gS = new Set(SS.baf2RxPlanList.map((SS => {
              let [HS, gS, tS] = SS;
              return `${HS},${gS},${tS}`
            })));
            FS.retain(gS);
            const tS = null === (yS = NS.get()) || void 0 === yS ? void 0 : yS.kind,
              bS = "reactor" === tS ? null === (iS = zS.get()) || void 0 === iS ? void 0 : iS.status.baf2RxAt : "battery" === tS ? null === (WS = US.get()) || void 0 === WS ? void 0 : WS.status.baf2BatAt : void 0;
            bS && wH.has(bS.join(",")) && !gS.has(bS.join(",")) && DH(), wH = gS
          } else if ("baf2RxStatus" === SS) {
            const SS = HS;
            zS.set(SS), SS.baf2RxOpen && (QH({
              kind: "reactor"
            }), (0, Pb.u)())
          } else if ("baf2BatStatus" === SS) {
            const SS = HS;
            US.set(SS), SS.baf2BatOpen && (QH({
              kind: "battery"
            }), (0, Pb.u)())
          } else if ("baf2RxAlarm" === SS) FS.eC(HS);
          else if ("baf2Bomb" === SS) oS.eC(HS, GS.getPositionView(XS));
          else if ("baf2Fallout" === SS) mS.eC(HS);
          else if ("baf2ColBeams" === SS) rS.onBeams(HS);
          else if ("baf2ColStatus" === SS) {
            const SS = HS;
            var sS, BS;
            if (rS.onStatus(SS), SS.baf2ColOpen) rS.onOpen(null !== (sS = null === (BS = GS.AHS(XS)) || void 0 === BS ? void 0 : BS.name) && void 0 !== sS ? sS : null), QH({
              kind: "collider"
            }), (0, Pb.u)()
          } else if ("baf2Terminal" === SS) {
            const SS = HS;
            var MS;
            if (LS.apply(SS)) SS.baf2TermReset && (QH({
              kind: "terminal"
            }), (0, Pb.u)());
            else "terminal" === (null === (MS = NS.get()) || void 0 === MS ? void 0 : MS.kind) && (NS.set(null), (0, Pb.h)())
          } else if ("baf2Core" === SS) {
            var RS;
            const SS = HS;
            if (qS(!0 === SS.baf2CoreNuclear), function(SS, HS) {
                return "core" === (null === SS || void 0 === SS ? void 0 : SS.kind) && HS.baf2CoreTier > SS.core.message.baf2CoreTier
              }(NS.get(), SS)) return void(0, Pb.h)();
            if (SS.baf2CoreRefresh && "core" !== (null === (RS = NS.get()) || void 0 === RS ? void 0 : RS.kind)) return;
            QH({
              kind: "core",
              core: Gn(SS, PS)
            }), SS.baf2CoreRefresh || (0, Pb.u)()
          } else if ("baf2WrenchUndo" === SS) {
            const {
              baf2WrenchPos: SS,
              baf2WrenchBlock: gS
            } = HS;
            GS.TE(SS[0], SS[1], SS[2], gS)
          } else if ("baf2Toast" === SS) {
            const SS = HS;
            pS.heard(performance.now(), SS.baf2ToastMs), DS.show(SS)
          } else if ("baf2Area" === SS) hS.arrive(HS, null !== NS.get());
          else if ("baf2Quest" === SS) {
            const SS = HS;
            qS(!0 === SS.baf2QuestNuclear), QS.set(SS, function(SS, HS) {
              var gS, tS, bS, XS, xS;
              const NS = [];
              for (const [, , IS, , , , , , fS, kS] of SS.baf2QuestSteps) null !== IS && NS.push(IS), NS.push(...null !== fS && void 0 !== fS ? fS : [], ...null !== kS && void 0 !== kS ? kS : []);
              SS.baf2QuestReward && NS.push(SS.baf2QuestReward);
              const qS = null === (gS = SS.baf2QuestSide) || void 0 === gS ? void 0 : gS[2][2];
              qS && NS.push(qS), NS.push(...null !== (tS = null === (bS = SS.baf2QuestSide) || void 0 === bS ? void 0 : bS[2][8]) && void 0 !== tS ? tS : [], ...null !== (XS = null === (xS = SS.baf2QuestSide) || void 0 === xS ? void 0 : xS[2][9]) && void 0 !== XS ? XS : []);
              for (const [IS] of null !== (uS = SS.baf2QuestAlso) && void 0 !== uS ? uS : []) {
                var uS;
                NS.push(IS)
              }
              return HS(NS)
            }(SS, PS)), Nn(SS.baf2QuestTier)
          } else if ("baf2Route" === SS) ! function(SS, HS) {
            let {
              baf2RouteCells: gS,
              baf2RouteInto: tS
            } = HS;
            0 !== gS.length && tS ? SS.setRouteChevrons({
              cells: gS.map(((SS, HS) => {
                const [bS, , XS] = function(SS, HS, gS) {
                  const tS = gS + 1 < SS.length ? SS[gS + 1] : HS;
                  return [tS[0] - SS[gS][0], 0, tS[2] - SS[gS][2]]
                }(gS, tS, HS);
                return {
                  pos: SS,
                  way: [bS, XS]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : SS.setRouteChevrons(null)
          }(GS, HS);
          else if ("baf2QuestBook" === SS) QS.setBook(HS);
          else if ("baf2Stalls" === SS) aS.set(HS.baf2StallCells);
          else if (SS === jg.j) jS.onMoves(HS);
          else if (SS === jg.g) jS.onLines(HS);
          else if ("baf2Labels" === SS) dS.eC(HS);
          else if ("baf2DropMap" === SS) QH({
            kind: "dropMap",
            dropMap: HS
          }), (0, Pb.u)();
          else if ("baf2Islands" === SS) {
            var lS, SH;
            const SS = HS;
            if (CS.syncIslandEdits(SS.baf2IslandsAnswered), !SS.baf2IslandsOpen && "islands" !== (null === (lS = NS.get()) || void 0 === lS ? void 0 : lS.kind)) return;
            if (SS.baf2IslandsOpen) {
              var HH, gH;
              const HS = Qb.b.get("openEverythingMenuName"),
                gS = CS.sent() >= jH,
                tS = "other" !== (aH = {
                  askedAtMs: KH,
                  askSent: gS,
                  reaskedAtMs: GH,
                  nowMs: Date.now(),
                  panel: null !== (HH = null === (gH = NS.get()) || void 0 === gH ? void 0 : gH.kind) && void 0 !== HH ? HH : null,
                  inGameMenu: Qb.b.get("openInGameMenuName"),
                  everythingMenu: null === HS ? null : HS === fg.q.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== SS.baf2IslandsFocusInvite
                }).everythingMenu && (!!aH.focusInvite || "islands" === aH.panel && "clientGame" === aH.inGameMenu || !(aH.nowMs - aH.reaskedAtMs < Lu) && (aH.askSent && aH.nowMs - aH.askedAtMs < Lu ? "core" === aH.panel && "clientGame" === aH.inGameMenu && null === aH.everythingMenu : "shop" === aH.everythingMenu || null === aH.inGameMenu));
              if (gS && (KH = -1 / 0), GH = -1 / 0, !tS) return void nH()
            }
            const gS = (bH = SS.baf2IslandsOpen, XH = "islands" === (null === (SH = NS.get()) || void 0 === SH ? void 0 : SH.kind), IH = CH, fH = Date.now(), bH && !XH && fH - IH < Lu);
            QH({
              kind: "islands",
              islands: SS,
              arrivedAtMs: Date.now(),
              backToCore: Yu(NS.get())
            }), gS && (CH = -1 / 0, GH = Date.now(), CS.send(TS)), SS.baf2IslandsOpen && ("clientGame" !== Qb.b.get("openInGameMenuName") && (0, Db.g)(), (0, Pb.u)())
          } else if ("baf2CoopTransfer" === SS) {
            var tH;
            const SS = HS;
            SS.baf2TransferOn ? (QH({
              kind: "transfer",
              transfer: SS,
              arrivedAtMs: Date.now()
            }), (0, Pb.u)()) : "transfer" === (null === (tH = NS.get()) || void 0 === tH ? void 0 : tH.kind) && (0, Pb.h)()
          } else "baf2IslandLeft" === SS ? (hS.dropHeld(), null !== NS.get() && DH(), "inventory" === Qb.b.get("openInGameMenuName") && (0, Db.g)()) : "baf2Arc" === SS ? xH.eC(GS, HS) : "baf2Blade" === SS ? NH.onBlade(GS, HS) : "baf2JetFlame" === SS ? qH.eC(GS, HS) : "baf2GearPower" === SS && uH.eC(HS);
          var bH, XH, IH, fH, aH
        }
      };
      return ZH
    }
  },
  38534: (SS, HS, gS) => {
    function tS(SS, HS, gS) {
      const tS = new Set,
        bS = new ResizeObserver(gS),
        XS = () => {
          const HS = new Set(document.querySelectorAll(SS));
          let XS = !1;
          for (const SS of tS) HS.has(SS) || (bS.unobserve(SS), tS.delete(SS), XS = !0);
          for (const SS of HS) tS.has(SS) || (bS.observe(SS), xS.observe(SS, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), tS.add(SS));
          XS && gS()
        },
        xS = new MutationObserver((HS => {
          HS.some((SS => "attributes" === SS.type)) && gS(), HS.some((HS => function(SS, HS, gS) {
            if ("childList" !== SS.type) return !1;
            for (const tS of SS.addedNodes)
              if (tS instanceof Element && (tS.matches(HS) || tS.querySelector(HS))) return !0;
            for (const tS of SS.removedNodes)
              if (tS instanceof Element)
                for (const SS of gS)
                  if (tS.contains(SS)) return !0;
            return !1
          }(HS, SS, tS))) && XS()
        }));
      xS.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const NS of HS) bS.observe(NS);
      return window.addEventListener("resize", gS), XS(), gS(), () => {
        bS.disconnect(), xS.disconnect(), window.removeEventListener("resize", gS)
      }
    }
    gS.d(HS, {
      d: () => tS
    })
  },
  38518: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      g: () => XS
    });
    const tS = new WeakMap;

    function bS(SS) {
      let HS = tS.get(SS);
      return HS || (HS = {
        hidden: SS.hidden,
        x: NaN,
        y: NaN
      }, tS.set(SS, HS)), HS
    }

    function XS(SS, HS) {
      const gS = bS(SS);
      gS.hidden !== HS && (gS.hidden = HS, SS.hidden = HS)
    }

    function xS(SS, HS, gS) {
      const tS = bS(SS);
      tS.x === HS && tS.y === gS || (tS.x = HS, tS.y = gS, SS.style.translate = `${HS}vw ${gS}vh`)
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);