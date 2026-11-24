export const id = 225;
export const ids = [225];
export const modules = {
  36687: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => GB,
      e: () => dB,
      f: () => mB,
      i: () => yB,
      l: () => NB,
      m: () => rB,
      n: () => kB,
      r: () => pB,
      t: () => LB,
      w: () => JB
    });
    var QB = zB(28),
      nB = zB(31);
    const dB = "clientGameInventoryButtonsChanged",
      IB = new Map;

    function NB() {
      return [...IB.values()].sort(((BB, jB) => {
        var zB, QB;
        return (null !== (zB = BB.order) && void 0 !== zB ? zB : 0) - (null !== (QB = jB.order) && void 0 !== QB ? QB : 0)
      }))
    }
    let uB = null;

    function UB(BB) {
      uB = BB
    }
    let aB = !1;

    function pB(BB) {
      aB = !0;
      try {
        BB.onClick()
      } finally {
        aB = !1
      }
      BB.panel && "clientGame" === QB.c.get("openInGameMenuName") && UB(BB.id)
    }

    function rB() {
      return aB
    }

    function sB() {
      return NB().filter((BB => BB.panel && !BB.disabled))
    }

    function JB(BB) {
      const jB = sB(),
        zB = jB.findIndex((BB => BB.id === uB));
      return !(zB < 0 || jB.length < 2) && (pB(jB[(zB + BB + jB.length) % jB.length]), !0)
    }

    function mB() {
      return null !== uB && sB().length > 1
    }

    function yB() {
      UB(null)
    }

    function kB() {
      "inventory" !== QB.c.get("openInGameMenuName") && UB(null)
    }

    function GB() {
      const BB = uB;
      return UB(null), BB
    }

    function LB(BB) {
      return IB.set(BB.id, BB), nB.n.Ly(dB, NB(), !0), () => {
        IB.get(BB.id) === BB && (IB.delete(BB.id), nB.n.Ly(dB, NB()))
      }
    }
  },
  36682: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      d: () => yB,
      f: () => kB,
      j: () => rB,
      n: () => UB,
      o: () => mB,
      r: () => sB,
      t: () => aB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(1316),
      IB = zB(36687);
    const NB = "clientGameUiChanged";
    let uB = null;

    function UB() {
      return uB
    }

    function aB(BB, jB) {
      const zB = {
        content: BB,
        menu: jB
      };
      return uB = zB, nB.n.Ly(NB, uB, !0), () => {
        uB === zB && (uB = null, JB = !1, yB(), nB.n.Ly(NB, null))
      }
    }
    let pB = null;

    function rB() {
      return pB
    }

    function sB(BB) {
      return pB = BB, () => {
        pB === BB && (pB = null)
      }
    }
    let JB = !1;

    function mB() {
      const BB = QB.c.get("openInGameMenuName");
      "clientGame" !== BB && (JB = "inventory" === BB), (0, IB.m)() || (0, IB.i)(), (0, dB.u)(dB.e), QB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yB() {
      GB(!1)
    }

    function kB() {
      GB(JB)
    }

    function GB(BB) {
      "clientGame" === QB.c.get("openInGameMenuName") && QB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, IB.i)(), JB = !1
    }
  },
  38588: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB
    });
    var QB = zB(38592);
    const nB = [0, 0, 0];
    class dB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nB;
        this.pool = BB, this.origin = jB, this.count = 0, this.free = []
      }
      take() {
        var BB;
        const jB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.count++;
        return jB >= this.pool.Ep && this.pool.grow(Math.max(2 * this.pool.Ep, jB + 1)), this.hide(jB), jB
      }
      release(BB) {
        this.hide(BB), this.free.push(BB)
      }
      write(BB, jB, zB, nB) {
        const {
          records: dB
        } = this.pool, {
          origin: IB
        } = this, NB = BB * QB.c;
        dB[NB] = jB - IB[0], dB[NB + 1] = zB - IB[1], dB[NB + 2] = nB - IB[2], dB[NB + QB.f] = 0, this.pool.markDirty(BB)
      }
      hide(BB) {
        this.pool.records[BB * QB.c + QB.f] = 1, this.pool.markDirty(BB)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class IB {
      constructor(BB, jB, zB) {
        this.api = BB, this.model = jB, this.initialCapacity = zB, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(BB) {
        let jB = this.kinds.get(BB);
        if (void 0 === jB) {
          const zB = this.api.createInstancePool({
            ...this.model,
            item: BB
          }, this.initialCapacity);
          null === zB || void 0 === zB || zB.setOrigin(this.origin[0], this.origin[1], this.origin[2]), jB = zB && new dB(zB, this.origin), this.kinds.set(BB, jB)
        }
        return jB
      }
      follow(BB) {
        const {
          origin: jB
        } = this;
        if (Math.abs(BB[0] - jB[0]) <= 512 && Math.abs(BB[1] - jB[1]) <= 512 && Math.abs(BB[2] - jB[2]) <= 512) return !1;
        jB[0] = Math.floor(BB[0]), jB[1] = Math.floor(BB[1]), jB[2] = Math.floor(BB[2]);
        for (const zB of this.kinds.values()) null === zB || void 0 === zB || zB.pool.setOrigin(jB[0], jB[1], jB[2]);
        return !0
      }
      commit() {
        for (const BB of this.kinds.values()) null === BB || void 0 === BB || BB.commit()
      }
      dispose() {
        for (const BB of this.kinds.values()) null === BB || void 0 === BB || BB.dispose();
        this.kinds.clear()
      }
    }
  },
  38605: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      g: () => NB,
      j: () => uB
    });
    const QB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      nB = [0, 1, 2, 0, 2, 3],
      dB = [4, 5];

    function IB(BB, jB, zB, QB, nB) {
      for (let IB = 0; IB < 6; IB++) dB.includes(IB) === nB && UB(BB, jB, zB, QB, IB)
    }

    function NB(BB, jB, zB, QB) {
      for (let nB = 0; nB < 6; nB++) UB(BB, jB, zB, QB, nB)
    }

    function uB(BB, jB, zB, dB, IB) {
      for (let NB = 0; NB < 6; NB++)
        for (const uB of [0, 1]) {
          const [UB, aB, pB] = [uB + 2, uB + 1, (uB + 3) % 4], rB = BB.length / 3;
          for (const [jB, nB] of [
              [uB, aB],
              [UB, aB],
              [UB, pB],
              [uB, pB]
            ])
            for (let uB = 0; uB < 3; uB++) {
              const UB = QB[3 * (4 * NB + jB) + uB],
                aB = QB[3 * (4 * NB + nB) + uB];
              BB.push((UB + (aB - UB) * IB) * dB / 2 + zB[uB])
            }
          for (const BB of nB) jB.push(rB + BB)
        }
    }

    function UB(BB, jB, zB, dB, IB) {
      let [NB, uB, UB] = zB, [aB, pB, rB] = dB;
      const sB = BB.length / 3;
      for (let nB = 4 * IB; nB < 4 * IB + 4; nB++) BB.push(QB[3 * nB] * aB / 2 + NB, QB[3 * nB + 1] * pB / 2 + uB, QB[3 * nB + 2] * rB / 2 + UB);
      for (const QB of nB) jB.push(sB + QB)
    }
  },
  38572: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => MG
    });
    var QB = zB(62);
    const nB = [{
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
      dB = 10;
    let IB = !0;

    function NB() {
      return IB
    }

    function uB(BB) {
      IB = BB
    }
    const UB = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function aB() {
      return IB ? nB.length : dB
    }

    function pB(BB) {
      var jB, zB;
      return null !== (jB = null === (zB = nB[BB - 1]) || void 0 === zB ? void 0 : zB.reactorTier) && void 0 !== jB ? jB : 0
    }

    function rB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pB(BB) > 0;
      return zB && !IB ? "hidden" : BB <= jB ? "open" : zB ? jB < 5 ? "hidden" : jB < dB ? "teaser" : "locked" : "locked"
    }

    function sB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: QB,
        n: nB
      } = yB(BB);
      return {
        key: jB[QB],
        params: {
          [QB]: zB ? String(nB) : nB
        }
      }
    }
    const JB = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function mB(BB, jB) {
      return pB(BB) > 0 && jB < dB
    }

    function yB(BB) {
      const jB = pB(BB);
      if (jB > 0) return {
        kind: "atomic",
        n: jB,
        short: `A${jB}`
      };
      const zB = function(BB) {
        return BB >= 6 && BB <= 10 ? BB - 6 + 1 : 0
      }(BB);
      return zB > 0 ? {
        kind: "stage",
        n: zB,
        short: `S${zB}`
      } : {
        kind: "tier",
        n: BB,
        short: String(BB)
      }
    }

    function kB(BB) {
      return nB[Math.max(1, Math.min(BB, nB.length)) - 1]
    }

    function GB(BB, jB) {
      return BB < jB ? function(BB) {
        var jB;
        return null !== (jB = nB[BB]) && void 0 !== jB ? jB : null
      }(BB) : null
    }
    const LB = "baf2coresubmit",
      gB = "baf2corebankpause",
      tB = "baf2coredeposit",
      SB = "baf2corechargepause";

    function MB(BB) {
      var jB;
      return null !== (jB = BB.baf2CoreOpen) && void 0 !== jB ? jB : dB
    }
    const EB = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function iB(BB) {
      return EB.includes(BB)
    }
    const qB = (BB, jB) => jB.map((jB => [jB, [BB]])),
      fB = Object.fromEntries([...qB("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...qB("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...qB("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...qB("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...qB("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...qB("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...qB("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...qB("Parts Bench", ["Focus Lens"]), ...qB("Machine Bench", ["Laser", "Collider"]), ...qB("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...qB("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...qB("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...qB("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...qB("Tool Bench", ["Mob Cage"]), ...qB("Tool Bench", ["Pocket Terminal"]), ...qB("Tool Bench", ["Comet Beacon"]), ...qB("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function oB(BB) {
      var jB;
      return null !== (jB = fB[BB]) && void 0 !== jB ? jB : ["Workbench"]
    }

    function HB(BB) {
      return oB(BB)[0]
    }
    nB.slice(1).map(((BB, jB) => `Core Tier ${jB+2}`));
    var DB = zB(9266);
    const FB = ["on", "hud", "off"];

    function YB(BB) {
      return "on" === BB
    }
    var VB = zB(376);
    const hB = "Mob Farm",
      XB = {
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
      ZB = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      AB = {
        1: 20,
        2: 60,
        3: 120
      },
      TB = "baf2farmvoid",
      PB = "Caged ",
      WB = " Spawner Block";

    function eB(BB) {
      return `lifeform:${(0,VB.He)(BB)}`
    }

    function lB(BB) {
      if (!BB) return null;
      if (BB.startsWith(PB)) {
        const jB = BB.slice(6);
        return ZB.includes(jB) ? jB : null
      }
      if (BB.endsWith(WB)) {
        const jB = BB.slice(0, -14);
        return void 0 !== XB[jB] ? jB : null
      }
      return null
    }

    function wB(BB) {
      return !0 === BB.mobFarm
    }

    function xB(BB, jB) {
      return AB[XB[jB]] * BB.opMs / 1e3
    }
    const KB = new Map;
    const CB = "baf2islands",
      cB = "baf2islandnew";

    function bB(BB) {
      const jB = nB.findIndex((jB => jB.unlocks.includes(BB)));
      return jB < 0 ? 1 : jB + 1
    }

    function vB(BB) {
      return Math.floor(BB).toLocaleString("en-US")
    }
    var RB = zB(38517);
    const OB = "baf2terminaltake",
      Bj = "baf2terminalput",
      jj = ["one", "stack", "fill"];

    function zj(BB, jB, zB) {
      return `${OB} ${BB} ${jB} ${zB}`
    }

    function Qj(BB, jB, zB) {
      return `${Bj} ${BB} ${jB} ${zB}`
    }

    function nj(BB) {
      return `${Bj} ${BB}`
    }
    const dj = [
      [`${OB} `, "take"],
      [`${Bj} `, "put"]
    ];

    function Ij(BB) {
      const jB = dj.find((jB => {
        let [zB] = jB;
        return BB.startsWith(zB)
      }));
      if (!jB) return null;
      const [zB, QB] = jB, [nB, dB, ...IB] = BB.slice(zB.length).trim().split(" "), NB = Number(nB);
      if (!Number.isSafeInteger(NB) || NB <= 0) return null;
      if ("put" === QB && void 0 === dB) return {
        kind: "putAll",
        seq: NB
      };
      const uB = function(BB) {
        if (jj.includes(BB)) return BB;
        const jB = Number(BB);
        return /^\d+$/.test(BB) && Number.isSafeInteger(jB) && jB > 0 ? jB : null
      }(null !== dB && void 0 !== dB ? dB : "");
      return null === uB || 0 === IB.length ? null : {
        kind: QB,
        seq: NB,
        mode: uB,
        item: IB.join(" ")
      }
    }

    function Nj(BB, jB) {
      const zB = "number" === typeof BB ? BB : "one" === BB ? 1 : "stack" === BB ? 99 : jB;
      return Math.min(jB, zB)
    }

    function uj(BB, jB) {
      const zB = BB => "number" === typeof BB ? BB : "one" === BB ? 1 : 99;
      return "fill" === BB || "fill" === jB ? "fill" : zB(BB) + zB(jB)
    }

    function Uj(BB, jB) {
      const zB = Ij(BB),
        QB = Ij(jB),
        nB = zB && QB ? function(BB, jB) {
          return "take" === BB.kind || "take" === jB.kind ? "take" === BB.kind && "take" === jB.kind && BB.item === jB.item ? {
            ...jB,
            mode: uj(BB.mode, jB.mode)
          } : null : "putAll" === BB.kind || "putAll" === jB.kind ? {
            kind: "putAll",
            seq: jB.seq
          } : BB.item === jB.item ? {
            ...jB,
            mode: uj(BB.mode, jB.mode)
          } : null
        }(zB, QB) : null;
      return nB ? "putAll" === (dB = nB).kind ? nj(dB.seq) : "put" === dB.kind ? Qj(dB.seq, dB.mode, dB.item) : zj(dB.seq, dB.mode, dB.item) : null;
      var dB
    }
    const aj = "baf2rx";

    function pj(BB, jB) {
      for (var zB = arguments.length, QB = new Array(zB > 2 ? zB - 2 : 0), nB = 2; nB < zB; nB++) QB[nB - 2] = arguments[nB];
      return [aj, BB[0], BB[1], BB[2], jB, ...QB].join(" ")
    }
    const rj = 2,
      sj = 4,
      Jj = 8,
      mj = 16,
      yj = 32,
      kj = 64,
      Gj = 128,
      Lj = 256,
      gj = 512,
      tj = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Sj = [{
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
    const Mj = "Biomass",
      Ej = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function ij(BB) {
      return {
        input: Mj,
        inputAmount: 1,
        output: BB,
        outputAmount: 1
      }
    }
    const qj = "baf2synth",
      fj = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      oj = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Hj = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      Dj = function(BB, jB) {
        return {
          input: BB,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: jB,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Fj = function(BB, jB) {
        return {
          ...Dj(BB, jB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      Yj = oj.map((BB => Fj(BB, "Biomass", 2))),
      Vj = {
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
          recipes: [Dj("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), Dj("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), Dj("Raw Gold", "Gold Grit", 2), Dj("Messy Stone", "Sand"), Dj("Gravel", "Sand"), Dj("Raw Voltite", "Voltite Dust", 2), Dj("Moonstone", "Moonstone Dust", 4), Dj("Wheat Seeds", "Fertiliser"), Dj("Raw Uranium", "Uranium Grit", 2), Fj("Mossy Messy Stone", "Sand"), ...Yj],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Dj("Iron Grit", "Iron Bar"), Dj("Copper Grit", "Copper Bar"), Dj("Gold Grit", "Gold Bar"), Dj("Raw Iron", "Iron Bar"), Dj("Raw Copper", "Copper Bar"), Dj("Raw Gold", "Gold Bar"), Dj("Sand", "Glass"), Dj("Messy Stone", "Stone"), ...VB.Yc.map((BB => Dj(BB, "Charcoal", 1, 4))), Dj("Wheat", "Bread", 1, 2), ...oj.map(((BB, jB) => Fj(BB, Hj[jB])))],
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
          recipes: [Dj("Iron Bar", "Iron Plate"), Dj("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Dj("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Dj("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [Dj("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), Dj("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), Dj("Raw Gold", "Gold Grit", 3), Dj("Raw Voltite", "Voltite Dust", 3), Dj("Messy Stone", "Sand", 2), Dj("Gravel", "Sand", 2), Dj("Moonstone", "Moonstone Dust", 6), Dj("Raw Uranium", "Uranium Grit", 3), Fj("Mossy Messy Stone", "Sand", 2), ...Yj],
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
          table: tj
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Dj("Coal", "Diamond", 1, 24), Dj("Voltite Dust", "Moonstone", 1, 12)],
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
        ...RB.j
      },
      hj = {
        Crusher: [Dj("Spent Pellet", "Glow Dust"), Dj("Wheat Seeds", "Biomass"), Dj("Wheat", "Biomass"), Dj("Dead Bush", "Biomass"), Dj("Dusk Moss", "Biomass"), Dj("Rotten Flesh", "Biomass"), Dj("Bone", "Biomass", 2)],
        "Shatter Mill": [Dj("Spent Pellet", "Glow Dust"), Dj("Wheat Seeds", "Biomass"), Dj("Wheat", "Biomass"), Dj("Dead Bush", "Biomass"), Dj("Dusk Moss", "Biomass"), Dj("Rotten Flesh", "Biomass"), Dj("Bone", "Biomass", 2), ...VB.Yc.map((BB => Dj(BB, "Biomass")))],
        Smelter: [Dj("Biomass", "Fertiliser", 2)],
        Press: [Dj("Coal", "Graphite", 1, 4)]
      },
      Xj = "Power Coupler",
      Zj = "Advanced Coupler",
      Aj = "Nova Coupler",
      Tj = [{
        item: Xj,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: Zj,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: Aj,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const Pj = new Map;

    function Wj(BB) {
      var jB, zB;
      return null !== (jB = null !== (zB = BB.fuelSlot) && void 0 !== zB ? zB : BB.couplerSlot) && void 0 !== jB ? jB : null
    }

    function ej(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!BB.couplable) throw new Error(`${BB.kind} takes no Power Coupler`);
      let zB = Pj.get(BB);
      zB || (zB = [], Pj.set(BB, zB));
      let QB = zB[jB];
      if (!QB) {
        var nB;
        const {
          divisor: dB,
          powerPerS: IB
        } = Tj[jB - 1], NB = BB.opMs / dB, uB = void 0 !== BB.fluidMade || void 0 !== BB.cryoMade ? BB.powerPerOp : IB * NB / 1e3;
        QB = {
          ...BB,
          fuelSlot: null,
          couplerSlot: null !== (nB = Wj(BB)) && void 0 !== nB ? nB : void 0,
          opMs: NB,
          powerPerOp: uB,
          coupled: !0
        }, jB > 1 && (QB = {
          ...QB,
          couplerLevel: jB
        }), zB[jB] = QB
      }
      return QB
    }
    const lj = new Map;
    const wj = new Map;

    function xj(BB, jB) {
      if (null === jB || (zB = jB, !Ej.includes(zB))) return BB;
      var zB;
      let QB = wj.get(jB);
      return QB || (QB = {
        ...BB,
        recipes: [ij(jB)]
      }, wj.set(jB, QB)), QB
    }

    function Kj(BB) {
      return !0 === BB.synth
    }
    const Cj = (BB, jB, zB, QB) => ({
        output: BB,
        outputAmount: jB,
        tier: zB,
        inputs: QB.map((BB => {
          let [jB, zB] = BB;
          return {
            item: jB,
            amount: zB
          }
        }))
      }),
      cj = Object.fromEntries([Cj("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), Cj("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), Cj("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Cj("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), Cj("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), Cj("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), Cj("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), Cj("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), Cj("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), Cj("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), Cj("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), Cj("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), Cj("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), Cj("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), Cj("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Cj("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), Cj("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Cj("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), Cj("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Cj("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), Cj("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), Cj("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), Cj("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), Cj("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), Cj("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), Cj("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), Cj("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), Cj("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), Cj("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), Cj("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((BB => [BB.output, BB]))),
      bj = new Map;

    function vj(BB, jB) {
      let zB = Vj[BB];
      if (jB.atomic && (zB = function(BB) {
          const jB = hj[BB.kind];
          if (!jB) return BB;
          let zB = lj.get(BB.kind);
          if (!zB) {
            const QB = new Set(jB.map((BB => BB.input))),
              nB = BB.recipes.filter((BB => !QB.has(BB.input)));
            zB = {
              ...BB,
              recipes: [...nB, ...jB]
            }, lj.set(BB.kind, zB)
          }
          return zB
        }(zB)), zB.synth) return xj(zB, jB.taught);
      if (jB.coupled && zB.couplable) return ej(zB, jB.level);
      const QB = zB.inputSlots && null !== jB.taught ? cj[jB.taught] : void 0;
      if (!QB) return zB;
      const nB = `${BB}|${QB.output}`;
      let dB = bj.get(nB);
      return dB || (dB = {
        ...zB,
        bench: QB
      }, bj.set(nB, dB)), dB
    }
    const Rj = ["Diamond", "Moonstone"];

    function Oj(BB) {
      return new Set(BB.flatMap((BB => BB.bonus ? [BB.output, BB.bonus.item] : [BB.output])).filter((BB => !Rj.includes(BB))))
    }
    const Bz = Object.values(Vj).flatMap((BB => BB.recipes));
    Oj(Bz.filter((BB => !0 !== BB.nuclear))), Oj([...Bz.filter((BB => !0 === BB.nuclear)), ...Object.values(hj).flat()]);

    function jz(BB) {
      return null === BB.inputSlot && void 0 === BB.inputSlots && void 0 === BB.powerMade && void 0 === BB.fluidMade && !BB.treeCutter && void 0 === BB.table
    }

    function zz(BB) {
      return !0 === BB.treeCutter
    }
    const Qz = ["Voltite Cell"];

    function nz(BB) {
      var jB, zB;
      return null !== (jB = null === (zB = BB.fuels) || void 0 === zB ? void 0 : zB.some((BB => Qz.includes(BB)))) && void 0 !== jB && jB
    }
    const dz = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(VB.Yc.map((BB => [BB, 8e3]))),
        ...Object.fromEntries(VB.Hd.map((BB => [BB, 2e3]))),
        "Voltite Cell": 12e4
      },
      Iz = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Nz = {
        "Uranium Deposit": 4e3
      };

    function uz(BB) {
      var jB;
      return null !== (jB = Object.keys(Iz).find((jB => Iz[jB] === BB))) && void 0 !== jB ? jB : null
    }

    function Uz(BB) {
      return fj.includes(BB)
    }

    function az(BB) {
      return !0 !== BB.nuclear || NB()
    }
    var pz = zB(363);
    var rz = zB(9345),
      sz = zB(9278),
      Jz = zB(9354),
      mz = zB(9339);
    const yz = "Reactor Controller",
      kz = "Reactor Port",
      Gz = "Battery Cell",
      Lz = ["fuel", "water", "waste"],
      gz = {
        fuel: kz,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      tz = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      Sz = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Mz = "Reactor Frame",
      Ez = "Reactor Glass",
      iz = {
        edge: [Mz],
        cap: [Ez, kz],
        wall: [Ez, kz],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [yz]
      },
      qz = {
        edge: [Gz],
        cap: [Gz],
        wall: [Gz],
        inside: [Gz],
        ctrl: [Gz]
      },
      fz = ["edge", "cap", "wall", "inside"],
      oz = ["Reactor Slag"];

    function Hz(BB) {
      return oz.includes(Dz(BB))
    }

    function Dz(BB) {
      const jB = BB.indexOf("|");
      return jB < 0 ? BB : BB.slice(0, jB)
    }

    function Fz(BB) {
      return Dz(BB) === yz ? "reactor" : null
    }

    function Yz(BB) {
      return Dz(BB) !== kz ? null : BB.endsWith("|Water") ? "water" : BB.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Vz(BB) {
      const jB = Yz(BB);
      return null === jB ? null : Zz(gz[Lz[(Lz.indexOf(jB) + 1) % Lz.length]], function(BB) {
        return BB.includes(hz)
      }(BB))
    }
    const hz = "|meta|rot1|Formed",
      Xz = new Set([Mz, Ez, kz]);

    function Zz(BB, jB) {
      var zB;
      const QB = Dz(BB);
      if (!Xz.has(QB)) return BB;
      if (QB !== kz) return jB ? QB + hz : QB;
      const nB = null !== (zB = Yz(BB)) && void 0 !== zB ? zB : "fuel";
      return jB ? "fuel" === nB ? QB + hz : `${QB}${hz}|${"water"===nB?"Water":"Waste"}` : gz[nB]
    }

    function Az(BB, jB) {
      const zB = QQ(BB, jB);
      if ("Air" === zB) return !1;
      const QB = "reactor" === BB ? iz : qz;
      return fz.some((BB => QB[BB].includes(zB))) || "reactor" === BB && oz.includes(zB)
    }

    function Tz(BB) {
      return Sz[BB]
    }

    function Pz(BB) {
      var jB;
      return null !== (jB = tz[BB]) && void 0 !== jB ? jB : tz[1]
    }

    function Wz(BB) {
      const [jB, , zB] = Pz(BB);
      return [zB, 0, -jB]
    }

    function ez(BB, jB, zB, QB, nB, dB) {
      return {
        ctrl: [BB[0], BB[1], BB[2]],
        rot: tz[jB] ? jB : 1,
        w: zB,
        h: QB,
        d: nB,
        cu: dB[0],
        cv: dB[1]
      }
    }

    function lz(BB, jB) {
      return "reactor" === BB ? [Math.floor((jB - 1) / 2), 0] : [0, 0]
    }

    function wz(BB, jB, zB, QB, nB) {
      let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB.rot;
      if (zB === BB.w && QB === BB.h && nB === BB.d && dB === BB.rot) return BB;
      const [IB] = lz(jB, BB.w);
      if (BB.cu === IB && BB.cv <= 1) return ez(BB.ctrl, dB, zB, QB, nB, lz(jB, zB));
      const NB = (BB, jB) => Math.max(1, Math.min(jB, BB));
      return ez(BB.ctrl, dB, zB, QB, nB, [NB(BB.cu, zB - 2), 0 === BB.cv ? 0 : NB(BB.cv, QB - 2)])
    }
    const xz = 11,
      Kz = 2 * xz + 1;
    new Uint8Array(Kz * Kz * Kz);

    function Cz(BB) {
      return BB.w * BB.h * BB.d
    }

    function cz(BB) {
      const jB = Wz(BB.rot);
      return [BB.ctrl[0] - jB[0] * BB.cu, BB.ctrl[1] - BB.cv, BB.ctrl[2] - jB[2] * BB.cu]
    }

    function bz(BB) {
      return BB.cv * BB.d * BB.w + BB.cu
    }

    function vz(BB, jB) {
      const zB = jB % BB.w,
        QB = Math.floor(jB / BB.w) % BB.d;
      return [zB, Math.floor(jB / (BB.w * BB.d)), QB]
    }

    function Rz(BB, jB) {
      const [zB, QB, nB] = vz(BB, jB), dB = cz(BB), IB = Pz(BB.rot), NB = Wz(BB.rot);
      return [dB[0] + NB[0] * zB - IB[0] * nB, dB[1] + QB, dB[2] + NB[2] * zB - IB[2] * nB]
    }

    function Oz(BB, jB) {
      const zB = cz(BB),
        QB = Pz(BB.rot),
        nB = Wz(BB.rot),
        dB = jB[0] - zB[0],
        IB = jB[2] - zB[2],
        NB = dB * nB[0] + IB * nB[2],
        uB = -(dB * QB[0] + IB * QB[2]),
        UB = jB[1] - zB[1];
      return NB < 0 || NB >= BB.w || UB < 0 || UB >= BB.h || uB < 0 || uB >= BB.d ? -1 : (UB * BB.d + uB) * BB.w + NB
    }

    function BQ(BB, jB) {
      if (jB === bz(BB)) return "ctrl";
      const [zB, QB, nB] = vz(BB, jB), dB = 0 === QB || QB === BB.h - 1, IB = Number(0 === zB || zB === BB.w - 1) + Number(dB) + Number(0 === nB || nB === BB.d - 1);
      return IB >= 2 ? "edge" : 1 === IB ? dB ? "cap" : "wall" : "inside"
    }

    function jQ(BB, jB) {
      const [zB, QB, nB] = vz(BB, jB);
      return 0 === zB || zB === BB.w - 1 || 0 === QB || QB === BB.h - 1 || 0 === nB || nB === BB.d - 1 ? -1 : ((QB - 1) * (BB.d - 2) + (nB - 1)) * (BB.w - 2) + (zB - 1)
    }

    function zQ(BB, jB) {
      const zB = BB.w - 2,
        QB = BB.d - 2,
        nB = jB % zB + 1,
        dB = Math.floor(jB / zB) % QB + 1;
      return ((Math.floor(jB / (zB * QB)) + 1) * BB.d + dB) * BB.w + nB
    }

    function QQ(BB, jB) {
      const zB = Dz(jB);
      return "reactor" === BB && zB === yz ? Mz : zB
    }

    function nQ(BB, jB, zB) {
      const QB = "ctrl" === jB ? Dz(zB) : QQ(BB, zB);
      return ("reactor" === BB ? iz : qz)[jB].includes(QB) ? "ok" : "Air" === QB ? "missing" : Az(BB, zB) ? "wrong" : "blocked"
    }

    function dQ(BB, jB) {
      return "battery" === BB ? Gz : "inside" === jB ? null : function(BB, jB) {
        if ("inside" === jB || "ctrl" === jB || "battery" === BB) return null;
        return "edge" === jB ? Mz : Ez
      }(BB, jB)
    }
    const IQ = {
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
      NQ = "Collider",
      uQ = "Laser",
      UQ = "Star Alloy",
      aQ = "Glow Dust",
      pQ = [NQ, "_Collider Focus"];

    function rQ(BB) {
      return pQ.indexOf(Dz(BB))
    }

    function sQ(BB) {
      return Dz(BB) === uQ
    }

    function JQ(BB) {
      return [
        [BB[0], BB[1], BB[2]],
        [BB[0], BB[1] + 1, BB[2]]
      ]
    }
    const mQ = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function yQ(BB, jB, zB) {
      const QB = mQ[jB];
      return [BB[0] + QB[0] * zB, BB[1], BB[2] + QB[2] * zB]
    }

    function kQ(BB, jB) {
      if (jB[1] !== BB[1]) return null;
      const zB = jB[0] - BB[0],
        QB = jB[2] - BB[2];
      if (0 !== zB === (0 !== QB)) return null;
      const nB = Math.abs(zB + QB);
      if (nB > IQ.LASER_D) return null;
      return {
        dir: QB < 0 ? 0 : zB > 0 ? 1 : QB > 0 ? 2 : 3,
        bI: nB
      }
    }

    function GQ(BB, jB, zB) {
      const QB = jB => Math.abs(BB[0] - jB[0]) <= 1 && Math.abs(BB[1] - jB[1]) <= 1;
      return QB(jB) || QB(zB)
    }

    function LQ(BB, jB) {
      return function(BB, jB, zB, QB) {
        return [0, 1, 2, 3].map((nB => {
          for (let dB = 1; dB <= IQ.LASER_D; dB++) {
            const IB = yQ(BB, nB, dB);
            if (GQ([IB[0], IB[2]], jB, zB) || !QB(IB)) return !1
          }
          return !0
        }))
      }(JQ(BB)[1], jB.spawnXZ, jB.coreXZ, (BB => BB[1] >= rz.q && BB[1] < rz.q + rz.u && BB[0] >= jB.minXZ[0] && BB[0] <= jB.maxXZ[0] && BB[2] >= jB.minXZ[1] && BB[2] <= jB.maxXZ[1]))
    }
    const gQ = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function tQ(BB) {
      return Math.max(48 + 16 * BB, kB(BB).machineAllowance)
    }
    const SQ = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function MQ(BB) {
      const jB = BB.split("|")[0];
      return SQ.includes(jB) ? "Solar Panel" : jB === Jz.d ? "Fluid Pipe" : rQ(jB) >= 0 ? "Collider" : (zB = jB, gQ.includes(zB) ? jB : null);
      var zB
    }
    const EQ = "buildAFactory2Game:solarPanelDescription";
    const iQ = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function qQ(BB, jB) {
      var zB;
      return null !== (zB = iQ.find((zB => {
        var QB;
        return (null !== (QB = BB.level(zB)) && void 0 !== QB ? QB : 0) >= jB
      }))) && void 0 !== zB ? zB : null
    }
    const fQ = "buildAFactory2Game:";
    let oQ = null;
    const HQ = {
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
      DQ = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      FQ = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      YQ = {
        "Loot Chest": `${fQ}lookRuinChestName`
      };

    function VQ(BB) {
      return "object" === typeof BB && null !== BB && "translationKey" in BB && "string" === typeof BB.translationKey ? BB.translationKey : null
    }

    function hQ(BB, jB) {
      var zB;
      return null !== (zB = VQ(BB.displayName(jB))) && void 0 !== zB ? zB : `item:${(0,VB.He)(jB)}`
    }

    function XQ(BB, jB) {
      var zB, QB, nB, dB;
      let IB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jB;
      if ("Solar Panel" === MQ(jB)) return {
        name: VQ(BB.displayName("Solar Panel")),
        detail: EQ,
        detailItem: null
      };
      const uB = jB.endsWith(" Ore"),
        UB = (oQ ??= new Set([...Object.keys((0, sz.h)()), ...Object.keys((0, Jz.r)())].map((BB => BB.split("|")[0]))), oQ).has(jB),
        aB = uB || UB ? null : function(BB) {
          var jB;
          return BB.endsWith(" Log") && !BB.startsWith("Barkless ") ? "lookLog" : BB.endsWith(" Sapling") ? "lookSapling" : BB.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (jB = HQ[BB]) && void 0 !== jB ? jB : null
        }(jB);
      if (!BB.isBlock(jB) || !uB && !UB && null === aB) return null;
      const pB = null !== (zB = null !== (QB = YQ[jB]) && void 0 !== QB ? QB : VQ(null !== (nB = BB.displayName(IB)) && void 0 !== nB ? nB : BB.displayName(jB))) && void 0 !== zB ? zB : `item:${(0,VB.He)(jB)}`;
      if (null !== aB) return {
        name: pB,
        detail: `${fQ}${aB}`,
        detailItem: null
      };
      const rB = null !== (dB = DQ[jB]) && void 0 !== dB ? dB : NB() ? FQ[jB] : void 0;
      if (UB && void 0 !== rB) return {
        name: pB,
        detail: `${fQ}${rB}`,
        detailItem: null
      };
      const sB = Iz[jB];
      if (void 0 !== sB) return {
        name: pB,
        detail: `${fQ}lookDeposit`,
        detailItem: hQ(BB, sB)
      };
      const JB = BB.harvestLevel(jB);
      if (uB && "rock" === BB.harvestType(jB) && 0 !== JB) {
        const jB = qQ(BB, null !== JB && void 0 !== JB ? JB : 0);
        if (jB === iQ[0]) return {
          name: pB,
          detail: `${fQ}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== jB) return {
          name: pB,
          detail: `${fQ}lookPickaxe`,
          detailItem: hQ(BB, jB)
        }
      }
      return {
        name: pB,
        detail: VQ(BB.description(jB)),
        detailItem: null
      }
    }

    function ZQ(BB) {
      return BB < rz.q - 24
    }
    const AQ = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const TQ = "Wrench",
      PQ = "Nova Wrench";

    function WQ(BB) {
      return BB === TQ || BB === PQ
    }
    const eQ = [...rz.R, "Belt Lift", "Belt Drop"];
    const lQ = ["Belt Lift", "Belt Drop"],
      wQ = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function xQ(BB) {
      return BB.split("|")[0]
    }

    function KQ(BB) {
      const jB = /\|rot(\d)/.exec(BB);
      return jB ? Number(jB[1]) : 1
    }

    function CQ(BB) {
      return BB % 4 + 1
    }

    function cQ(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === jB && "" === zB ? BB : `${BB}|meta|rot${jB}${zB}`
    }

    function bQ(BB) {
      return xQ(BB) === rz.D ? (0, rz.Z)(BB) ? "gateRight" : "gateLeft" : (0, rz.db)(BB)
    }

    function vQ(BB) {
      const jB = xQ(BB),
        zB = KQ(BB);
      if (rz.R.includes(jB)) return (0, rz.S)(jB, CQ(zB), null);
      if (jB === rz.h) return (0, rz.ib)(CQ(zB), (0, rz.$)(BB));
      if (jB === rz.H) {
        const QB = wQ[(0, rz.db)(BB)];
        return null === QB ? cQ(jB, CQ(zB)) : cQ(jB, zB, rz.J[QB])
      }
      return jB === rz.D ? (0, rz.Z)(BB) ? cQ(jB, CQ(zB)) : cQ(jB, zB, rz.m) : mz.c.includes(jB) && !lQ.includes(jB) || Uz(jB) ? cQ(jB, CQ(zB)) : null
    }

    function RQ(BB) {
      return mz.c.includes(BB) || Uz(BB) || null !== MQ(BB)
    }

    function OQ(BB) {
      return "Solar Panel" === MQ(BB)
    }
    const Bn = "buildAFactory2Game:",
      jn = {
        leftFront: `${Bn}lookSplitDetail_leftFront`,
        frontRight: `${Bn}lookSplitDetail_frontRight`,
        gateRight: `${Bn}lookGateDetail_gateRight`
      };

    function zn(BB, jB) {
      var zB;
      let QB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const nB = bQ(BB),
        dB = null === nB ? null : `${Bn}${nB.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${nB}`,
        IB = null === nB ? null : null !== (zB = jn[nB]) && void 0 !== zB ? zB : null;
      if (WQ(jB) && QB) {
        const zB = xQ(BB);
        return jB === PQ && NB() && function(BB) {
          return eQ.includes(xQ(BB))
        }(BB) ? {
          mode: dB,
          detail: IB,
          next: `${Bn}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: dB,
          detail: IB,
          next: RQ(zB) && !OQ(zB) ? `${Bn}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const uB = WQ(jB) ? vQ(BB) : null;
      if (null === uB) return {
        mode: dB,
        detail: IB,
        next: null,
        nextState: null
      };
      const UB = bQ(uB);
      return null === UB || KQ(uB) !== KQ(BB) ? {
        mode: dB,
        detail: IB,
        next: `${Bn}lookWrenchTurn`,
        nextState: null
      } : {
        mode: dB,
        detail: IB,
        next: `${Bn}lookWrenchNext`,
        nextState: `${Bn}lookWrenchState_${UB}`
      }
    }
    const Qn = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const nn = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function dn(BB) {
      return [0, 1, 2, 3].map((jB => 0 !== (BB & 1 << jB)))
    }

    function In(BB) {
      const jB = [];
      for (let zB = 8; zB + 2 < BB.length; zB += 3) jB.push([BB[zB], BB[zB + 1], BB[zB + 2]]);
      return {
        focus: [BB[0], BB[1], BB[2]],
        lasers: dn(BB[3]),
        open: dn(BB[4]),
        live: dn(BB[5]),
        on: 1 === BB[6],
        state: nn[BB[7]],
        blockers: jB
      }
    }
    const Nn = "Arc Caster",
      un = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      Un = (Object.values(un), "Jet Chestplate"),
      an = "Nova Jet Chestplate",
      pn = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      rn = Object.values(pn);

    function sn(BB, jB, zB) {
      return Math.min(function(BB) {
        return NB() && pB(BB) >= 5 ? 20 : 10
      }(zB), Math.floor(function(BB, jB) {
        return Math.max(0, BB) + (NB() ? Math.max(0, jB) : 0)
      }(BB, jB) / 5))
    }

    function Jn(BB, jB, zB) {
      const QB = sn(jB, zB, BB),
        nB = pB(BB),
        dB = (nB >= 3 ? 55 : nB >= 1 ? 50 : BB >= 8 ? 45 : 30) + QB,
        IB = Math.max(100 + QB, 2 * dB);
      return {
        arcDamage: dB,
        arcPierce: BB >= 7 ? 2 : 1,
        arcChain: BB >= 10,
        barrierMax: (nB >= 4 ? 100 : nB >= 2 ? 90 : BB >= 9 ? 80 : BB >= 6 ? 60 : 40) + 5 * QB,
        barrierRegenPerS: nB >= 5 ? 20 : BB >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * QB,
        novaShieldRegenPerS: 32,
        bladeDamage: IB,
        bladePunch: Math.round(.5 * IB),
        forgeRank: QB
      }
    }
    const mn = {
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
    var yn = zB(36907),
      kn = zB(36687),
      Gn = zB(36682),
      Ln = zB(28),
      gn = zB(1664),
      tn = zB(1091),
      Sn = zB.n(tn);

    function Mn(BB) {
      return !0 === BB.field
    }
    const En = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function qn(BB) {
      return En.has(BB) ? `buildAFactory2Game:itemPlural_${(0,VB.He)(BB)}` : null
    }
    var fn = zB(1240),
      Hn = zB(1108),
      Dn = zB(1971),
      Fn = zB(1952),
      Yn = zB(1427),
      Vn = zB(36905),
      hn = zB(31),
      Xn = zB(36897);
    const Zn = "baf2QuestView",
      An = "baf2PlayerY",
      Tn = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class Pn {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = BB, this.view = {
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
      set(BB, jB) {
        var zB, QB, nB, dB, IB, NB, uB, UB;
        const aB = JSON.stringify(BB.baf2QuestName) === JSON.stringify(this.view.name),
          pB = new Set(this.view.rows.filter((BB => BB.done)).map((BB => BB.id))),
          rB = new Set(this.view.rows.filter((BB => BB.justFinished)).map((BB => BB.id))),
          sB = BB.baf2QuestSide,
          JB = null !== sB && !0 === BB.baf2QuestSideFocus;
        let mB = !1,
          yB = 0;
        const kB = BB.baf2QuestSteps.map((BB => {
            const jB = bn(BB, Tn.has(BB[0]) ? BB[0] : "" + yB++),
              zB = aB && jB.done && !pB.has(jB.id);
            return jB.justFinished = zB || aB && jB.done && rB.has(jB.id), mB ||= zB, jB
          })),
          GB = cn(kB);
        GB >= 0 && !JB && (kB[GB].current = !0);
        const LB = !aB && null !== BB.baf2QuestName,
          gB = JSON.stringify(sB && [sB[0], sB[1]]),
          tB = gB === JSON.stringify(null !== (zB = null === (QB = this.view.side) || void 0 === QB ? void 0 : QB.name) && void 0 !== zB ? zB : null),
          SB = null !== sB && !this.sidesSeen.has(gB);
        SB && this.sidesSeen.add(gB), this.serverTutorial = null !== (nB = BB.baf2QuestTutorial) && void 0 !== nB ? nB : "on", (null !== (dB = BB.baf2QuestTutorialSeq) && void 0 !== dB ? dB : 0) >= this.pickSeq && this.endPick();
        const MB = !aB || !tB || BB.baf2QuestTier !== this.view.tier;
        this.view = {
          name: BB.baf2QuestName,
          rows: kB,
          reward: BB.baf2QuestReward,
          goal: BB.baf2QuestGoal,
          pulse: this.view.pulse + (mB || LB ? 1 : 0),
          itemNames: jB,
          side: sB && {
            name: [sB[0], sB[1]],
            row: {
              ...bn(sB[2], "side"),
              current: JB
            },
            goal: null !== (IB = sB[3]) && void 0 !== IB ? IB : null
          },
          sideCameUpAt: SB ? Date.now() : this.view.sideCameUpAt,
          tier: BB.baf2QuestTier,
          core: BB.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (NB = BB.baf2QuestAlso) && void 0 !== NB ? NB : [],
          depth: null !== (uB = BB.baf2QuestDepth) && void 0 !== uB ? uB : null,
          tutorial: null !== (UB = this.pickedTutorial) && void 0 !== UB ? UB : this.serverTutorial,
          tutorialKnown: !0
        }, this.Ly(), mB && this.scheduleClear(), MB && this.requestBook()
      }
      setTutorial(BB) {
        return this.endPick(), this.pickedTutorial = BB, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.Ly()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: BB
        }, this.Ly(), this.pickSeq
      }
      onPlayerY(BB) {
        const jB = Math.floor(BB);
        jB !== this.playerY && (this.playerY = jB, this.view.depth && hn.n.Ly(An, jB))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(BB) {
        this.view = {
          ...this.view,
          chapters: BB.baf2BookChapters
        }, this.Ly()
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
            rows: this.view.rows.map((BB => BB.justFinished ? {
              ...BB,
              justFinished: !1
            } : BB))
          }, this.Ly()
        }), 2400)
      }
      Ly() {
        hn.n.Ly(Zn, this.view, !0)
      }
    }

    function Wn(BB, jB) {
      return BB.sideCameUpAt > 0 && jB - BB.sideCameUpAt < 2400
    }

    function en(BB) {
      return (null === BB.name || wn(BB)) && null === BB.side && null !== BB.chapters
    }

    function wn(BB) {
      var jB;
      return "quest_forgeOngoing" === (null === (jB = BB.name) || void 0 === jB ? void 0 : jB[0])
    }

    function xn(BB) {
      return BB.filter((BB => !Tn.has(BB.key)))
    }

    function Kn(BB) {
      return BB.key.startsWith("stepCraft")
    }

    function Cn(BB, jB) {
      const zB = new Set,
        QB = BB.side ? [...BB.rows, BB.side.row] : BB.rows;
      for (const dB of QB)
        if (!dB.done) {
          !dB.item || jB && !Kn(dB) || zB.add(dB.item);
          for (const [BB, jB, QB] of null !== (nB = dB.chips) && void 0 !== nB ? nB : []) {
            var nB;
            jB < QB && zB.add(BB)
          }
        } return zB
    }

    function cn(BB) {
      const jB = BB.findIndex((BB => !BB.done && !BB.away));
      return jB >= 0 ? jB : BB.findIndex((BB => !BB.done))
    }

    function bn(BB, jB) {
      let [zB, QB, nB, dB, IB, NB, uB, UB, aB, pB] = BB;
      return {
        id: jB,
        key: zB,
        params: QB,
        item: nB,
        amount: dB,
        total: IB,
        done: NB,
        chips: null !== uB && void 0 !== uB ? uB : null,
        current: !1,
        away: !0 === UB,
        madeFor: null !== aB && void 0 !== aB ? aB : [],
        also: null !== pB && void 0 !== pB ? pB : [],
        justFinished: !1
      }
    }
    const vn = "baf2QuestItems",
      Rn = new Set;
    let On = new Set,
      Bd = null;

    function jd(BB) {
      const jB = YB(BB.tutorial),
        zB = jB ? Cn(BB, !0) : Rn;
      "inventory" === Ln.c.get("openInGameMenuName") ? (Bd = null, (0, Xn.w)(zB)) : Bd = zB;
      const QB = jB ? Cn(BB, !1) : Rn;
      (0, Vn.c)(QB, On) || (On = QB, hn.n.Ly(vn, On))
    }

    function zd() {
      return (0, Yn.e)(vn, (() => On))
    }
    var Qd = zB(34264),
      nd = zB(3402);

    function dd(BB) {
      const jB = (0, nd.c)(BB),
        zB = void 0 === jB ? void 0 : (0, Qd.displayNameOf)(jB);
      return "object" === typeof zB && null !== zB && "translationKey" in zB && "string" === typeof zB.translationKey ? zB.translationKey : `item:${(0,VB.He)(BB)}`
    }

    function Id(BB, jB) {
      return BB(dd(jB))
    }
    const Nd = [{
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

    function ud(BB, jB) {
      return [`Deposit Seed (${BB})`, {
        item: Iz[`${BB} Deposit`],
        amount: jB
      }]
    }
    const Ud = Object.fromEntries([ud("Coal", 8), ud("Iron", 8), ud("Copper", 8), ud("Gold", 6), ud("Voltite", 4), ud("Uranium", 4)]),
      pd = "Relay Coil",
      rd = new Map;

    function sd(BB) {
      let jB = rd.get(BB);
      if (!jB) {
        const zB = Math.max(1, BB);
        jB = Nd.filter((BB => {
          var jB;
          return zB >= BB.fromTier && zB <= (null !== (jB = BB.untilTier) && void 0 !== jB ? jB : 1 / 0)
        })).map((BB => BB.later && zB >= BB.later.tier ? {
          ...BB,
          weight: BB.later.weight
        } : BB)), rd.set(BB, jB)
      }
      return jB
    }

    function Jd(BB) {
      return sd(BB).some((BB => {
        let {
          item: jB
        } = BB;
        return jB === pd
      }))
    }

    function md(BB) {
      return BB.startsWith("Deposit Seed (")
    }

    function yd(BB, jB) {
      const zB = sd(BB);
      return jB ? zB.filter((BB => jB(BB.item))) : zB
    }

    function kd(BB) {
      return BB.reduce(((BB, jB) => BB + jB.weight), 0)
    }

    function Gd(BB, jB) {
      const zB = yd(BB, jB),
        QB = kd(zB);
      return zB.map((BB => ({
        find: BB,
        chance: BB.weight / QB
      })))
    }
    const Ld = 6e4,
      gd = new Intl.NumberFormat("en-US");

    function td(BB, jB) {
      const zB = BB >= 10 ? Math.round(BB) : Math.round(10 * BB) / 10;
      return 0 === zB ? "0" : `${jB}${gd.format(zB)}`
    }

    function Sd(BB) {
      return BB < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? gd.format(BB) : BB < 1e6 ? `${BB<1e5?Math.floor(BB/100)/10:Math.floor(BB/1e3)}k` : Math.floor(BB / 1e5) / 10 + "M"
    }

    function Md(BB) {
      return BB < 0 ? "\u2212" + -BB : String(BB)
    }

    function Ed(BB, jB) {
      const zB = Math.max(1, Math.round(jB));
      if (zB < 60) return BB("buildAFactory2Game:durationSeconds", {
        seconds: String(zB)
      });
      const QB = Math.round(zB / 60);
      if (QB < 60) return BB("buildAFactory2Game:durationMinutes", {
        minutes: String(QB)
      });
      const nB = String(Math.floor(QB / 60));
      return QB % 60 === 0 ? BB("buildAFactory2Game:durationWholeHours", {
        hours: nB
      }) : BB("buildAFactory2Game:durationHours", {
        hours: nB,
        minutes: String(QB % 60)
      })
    }
    var qd = zB(2580);
    const fd = "(max-height: 420px), (max-width: 650px)";

    function od() {
      return (0, qd.b)(fd)
    }
    var Hd = zB(1148);

    function Dd(BB, jB) {
      return null !== BB && BB > jB + 1
    }

    function Fd(BB) {
      const jB = 100 * BB;
      return String(jB <= 0 || jB >= 1 ? Math.round(jB) : Math.max(.1, Math.round(10 * jB) / 10))
    }

    function Yd(BB) {
      let {
        item: jB,
        amount: zB
      } = BB;
      return (0, Hd.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, Hd.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, Hd.jsx)(Dn.c, {
            itemName: jB,
            amount: 0
          })
        }), zB > 1 && (0, Hd.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", zB]
        })]
      })
    }

    function Vd(BB) {
      let {
        label: jB,
        names: zB
      } = BB;
      const [nB, dB] = (0, QB.useState)(!1), IB = zB.join(" / ");
      return (0, Hd.jsxs)(Hd.Fragment, {
        children: [(0, Hd.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: IB,
          "aria-expanded": nB,
          onClick: () => {
            dB(!nB)
          },
          children: jB
        }), nB && (0, Hd.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: IB
        })]
      })
    }

    function hd(BB) {
      let {
        tier: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)(), {
        key: QB,
        params: nB
      } = sB(jB, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), dB = zB(`buildAFactory2Game:${QB}`, nB);
      return (0, Hd.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, Hd.jsx)(Hn.c, {
          name: "lock"
        }), dB]
      })
    }
    const Xd = (0, QB.createContext)(null);

    function Zd() {
      const {
        t: BB
      } = (0, fn.D)(), jB = (0, QB.useContext)(Xd);
      return (0, QB.useEffect)((() => null === jB || void 0 === jB ? void 0 : jB()), [jB]), (0, Hd.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: BB("buildAFactory2Game:recipeForQuest"),
        "aria-label": BB("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function Ad(BB) {
      let {
        title: jB,
        count: zB,
        children: nB,
        startOpen: dB = !0
      } = BB;
      const {
        t: IB
      } = (0, fn.D)(), [NB, uB] = (0, QB.useState)((() => dB && !od())), [UB, aB] = (0, QB.useState)(0), pB = (0, QB.useCallback)((() => (aB((BB => BB + 1)), () => {
        aB((BB => BB - 1))
      })), []);
      return (0, Hd.jsxs)("div", {
        className: Sn()("Baf2Recipes", {
          Open: NB
        }),
        children: [(0, Hd.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            uB(!NB)
          },
          "aria-expanded": NB,
          children: [IB("buildAFactory2Game:recipesToggle", {
            title: jB,
            count: String(zB)
          }), (0, Hd.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: NB ? "\u25be" : "\u25b8"
          })]
        }), NB && (0, Hd.jsxs)(Xd.Provider, {
          value: pB,
          children: [(0, Hd.jsx)("ul", {
            className: "Baf2RecipeList",
            children: nB
          }), UB > 0 && (0, Hd.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, Hd.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), IB("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Td = "buildAFactory2Game:",
      Pd = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const Wd = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      ed = {
        "Uranium Grit": dB,
        "Raw Uranium": dB
      };

    function ld(BB) {
      var jB;
      return null !== (jB = ed[BB]) && void 0 !== jB ? jB : Math.max(bB(BB), Wd[BB] ? bB(Wd[BB]) : 1, function(BB) {
        const jB = nB.findIndex((jB => jB.cost.some((jB => jB.item === BB))));
        return jB > dB ? jB : 1
      }(BB))
    }

    function wd(BB, jB) {
      return xd(jB) ? ld(jB) : function(BB) {
        if (Pd.has(BB)) return 1;
        const jB = nB.findIndex((jB => jB.newDeposits.some((jB => {
          let {
            block: zB
          } = jB;
          return zB === BB
        }))));
        return jB < 0 ? 1 : jB + 1
      }(BB)
    }

    function xd(BB) {
      return BB in ed || pB(ld(BB)) > 0
    }

    function Kd(BB, jB) {
      return vj(BB, {
        coupled: !1,
        taught: null,
        atomic: NB() && jB >= 11
      }).recipes
    }

    function Cd(BB, jB) {
      const zB = rB(BB, jB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pB(BB) > 0);
      return "open" === zB || "locked" === zB
    }

    function cd(BB, jB) {
      return BB.map(((BB, zB) => ({
        value: BB,
        idx: zB,
        tier: jB(BB)
      }))).sort(((BB, jB) => BB.tier - jB.tier || BB.idx - jB.idx)).map((BB => {
        let {
          value: jB
        } = BB;
        return jB
      }))
    }

    function bd(BB, jB, zB) {
      const QB = rB(BB, jB);
      if ("hidden" === QB || "open" === QB) return null;
      if ("teaser" === QB) return {
        tag: {
          translationKey: `${Td}${zB?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Td}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const nB = sB(BB, {
          tier: zB ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        dB = sB(BB, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Td}${nB.key}`,
          params: nB.params
        },
        reason: {
          translationKey: `${Td}${dB.key}`,
          params: dB.params
        }
      }
    }

    function vd(BB) {
      return !md(BB)
    }

    function Rd(BB) {
      let {
        seconds: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)();
      return (0, Hd.jsx)(Ad, {
        title: zB("buildAFactory2Game:recipesCuts", {
          seconds: jB
        }),
        count: 1,
        children: (0, Hd.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Hd.jsx)(Yd, {
            item: "Maple Sapling",
            amount: 1
          }), (0, Hd.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Hd.jsx)(Yd, {
            item: "Maple Log",
            amount: 1
          }), (0, Hd.jsx)("span", {
            className: "Baf2RecipeName",
            children: zB("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Od(BB) {
      let {
        fertilised: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)();
      return (0, Hd.jsxs)(Ad, {
        title: zB("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, Hd.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Hd.jsx)(Yd, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Hd.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Hd.jsx)(Yd, {
            item: "Wheat",
            amount: 1
          }), (0, Hd.jsx)(Yd, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Hd.jsx)("span", {
            className: "Baf2RecipeName",
            children: zB("buildAFactory2Game:recipeField")
          })]
        }), (0, Hd.jsxs)("li", {
          className: Sn()("Baf2Recipe", {
            InUse: jB
          }),
          children: [(0, Hd.jsx)(Yd, {
            item: "Fertiliser",
            amount: 1
          }), (0, Hd.jsx)("span", {
            className: "Baf2RecipeName",
            children: zB("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function BI(BB) {
      let {
        tier: jB,
        seconds: zB
      } = BB;
      const {
        t: QB
      } = (0, fn.D)(), nB = function(BB) {
        return BB >= 5 ? Sj : tj
      }(jB);
      return (0, Hd.jsx)(Ad, {
        title: QB("buildAFactory2Game:recipesBringsUp", {
          seconds: zB
        }),
        count: nB.length,
        children: nB.map((BB => {
          let {
            item: jB,
            chance: zB
          } = BB;
          return (0, Hd.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Hd.jsx)(Yd, {
              item: jB,
              amount: 1
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeName",
              children: Id(QB, jB)
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: QB("buildAFactory2Game:recipeChance", {
                percent: Fd(zB)
              })
            })]
          }, jB)
        }))
      })
    }

    function jI(BB) {
      let {
        tier: jB,
        seconds: zB,
        noSeeds: QB
      } = BB;
      const {
        t: nB
      } = (0, fn.D)(), dB = zd(), IB = Gd(jB, QB ? vd : void 0), NB = QB && Gd(jB).length > IB.length, uB = Jd(jB);
      return (0, Hd.jsxs)(Ad, {
        title: nB("buildAFactory2Game:recipesRecycles", {
          seconds: zB
        }),
        count: IB.length,
        children: [IB.map((BB => {
          let {
            find: jB,
            chance: zB
          } = BB;
          return (0, Hd.jsxs)("li", {
            className: "Baf2Recipe",
            children: [dB.has(jB.item) && (0, Hd.jsx)(Zd, {}), (0, Hd.jsx)(Yd, {
              item: jB.item,
              amount: jB.amount
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeName",
              children: Id(nB, jB.item)
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: nB("buildAFactory2Game:recipeChance", {
                percent: Fd(zB)
              })
            })]
          }, jB.item)
        })), NB && (0, Hd.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Hd.jsx)("span", {
            className: "Baf2RecipeName",
            children: nB("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), uB && (0, Hd.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Hd.jsx)("span", {
            className: "Baf2RecipeName",
            children: nB("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function zI(BB) {
      let {
        tier: jB,
        seconds: zB
      } = BB;
      const {
        t: QB
      } = (0, fn.D)(), nB = Object.entries(Ud).filter((BB => {
        let [, {
          item: zB
        }] = BB;
        return Cd(ld(zB), jB, xd(zB))
      }));
      return (0, Hd.jsx)(Ad, {
        title: QB("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: zB
        }),
        count: nB.length,
        children: nB.map((BB => {
          let [jB, {
            item: zB,
            amount: nB
          }] = BB;
          return (0, Hd.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Hd.jsx)(Yd, {
              item: jB,
              amount: 1
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Hd.jsx)(Yd, {
              item: zB,
              amount: nB
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeName",
              children: Id(QB, zB)
            })]
          }, jB)
        }))
      })
    }

    function QI(BB) {
      let {
        tier: jB,
        seconds: zB
      } = BB;
      const {
        t: QB
      } = (0, fn.D)(), nB = zd(), dB = cd(Object.entries(Iz).filter((BB => {
        let [zB, QB] = BB;
        return Cd(wd(zB, QB), jB, xd(QB))
      })), (BB => {
        let [jB, zB] = BB;
        return wd(jB, zB)
      }));
      return (0, Hd.jsx)(Ad, {
        title: QB("buildAFactory2Game:recipesDigs", {
          seconds: zB
        }),
        count: dB.length,
        children: dB.map((BB => {
          let [zB, dB] = BB;
          const IB = wd(zB, dB),
            NB = IB > jB ? IB : null,
            uB = Nz[zB],
            UB = null === NB && nB.has(dB);
          return (0, Hd.jsxs)("li", {
            className: Sn()("Baf2Recipe", {
              Locked: null !== NB,
              Far: Dd(NB, jB)
            }),
            children: [UB && (0, Hd.jsx)(Zd, {}), (0, Hd.jsx)(Yd, {
              item: zB,
              amount: 1
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Hd.jsx)(Yd, {
              item: dB,
              amount: 1
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeName",
              children: Id(QB, dB)
            }), void 0 !== uB && (0, Hd.jsx)("span", {
              className: "Baf2RecipeMore",
              children: QB("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / uB)
              })
            }), null !== NB && (0, Hd.jsx)(hd, {
              tier: NB
            })]
          }, zB)
        }))
      })
    }

    function nI(BB) {
      var jB;
      let {
        def: zB,
        seconds: QB
      } = BB;
      const {
        t: nB
      } = (0, fn.D)();
      return (0, Hd.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Hd.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (jB = zB.fuels) && void 0 !== jB ? jB : []).map((BB => (0, Hd.jsx)(Yd, {
            item: BB,
            amount: 1
          }, BB))), (0, Hd.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Hd.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Hd.jsx)(Hn.c, {
              name: "bolt"
            }), nB("buildAFactory2Game:recipePower", {
              power: vB(zB.powerMade),
              seconds: QB
            })]
          })]
        })
      })
    }

    function dI(BB) {
      let {
        def: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)();
      return (0, Hd.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Hd.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Hd.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Hd.jsx)(Hn.c, {
              name: "bolt"
            }), zB("buildAFactory2Game:recipeMixer", {
              cryo: td((0, RB.I)(jB, jB.cryoMade), "")
            })]
          })
        })
      })
    }

    function II(BB) {
      let {
        def: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)();
      return (0, Hd.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Hd.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Hd.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Hd.jsx)(Hn.c, {
              name: "bolt"
            }), zB("buildAFactory2Game:recipeCondenser", {
              power: td((0, RB.I)(jB, jB.powerPerOp), ""),
              water: td((0, RB.I)(jB, jB.fluidMade), "")
            })]
          })
        })
      })
    }

    function NI(BB) {
      let {
        kind: jB,
        def: zB,
        input: QB,
        tier: nB,
        noSeeds: dB = !1
      } = BB;
      const IB = String(zB.opMs / 1e3);
      return zz(zB) ? (0, Hd.jsx)(Rd, {
        seconds: IB
      }) : zB.field ? (0, Hd.jsx)(Od, {
        fertilised: null !== QB
      }) : zB.table ? (0, Hd.jsx)(BI, {
        tier: nB,
        seconds: IB
      }) : zB.recycles ? (0, Hd.jsxs)(Hd.Fragment, {
        children: [(0, Hd.jsx)(jI, {
          tier: nB,
          seconds: IB,
          noSeeds: dB
        }), (0, Hd.jsx)(zI, {
          tier: nB,
          seconds: IB
        })]
      }) : jz(zB) ? (0, Hd.jsx)(QI, {
        tier: nB,
        seconds: IB
      }) : void 0 !== zB.fluidMade ? (0, Hd.jsx)(II, {
        def: zB
      }) : void 0 !== zB.cryoMade ? (0, Hd.jsx)(dI, {
        def: zB
      }) : void 0 !== zB.powerMade ? (0, Hd.jsx)(nI, {
        def: zB,
        seconds: IB
      }) : (0, Hd.jsx)(uI, {
        kind: jB,
        input: QB,
        tier: nB,
        seconds: IB
      })
    }

    function uI(BB) {
      let {
        kind: jB,
        input: zB,
        tier: QB,
        seconds: nB
      } = BB;
      const {
        t: dB
      } = (0, fn.D)(), IB = zd(), NB = cd(function(BB) {
        const jB = new Map;
        for (const nB of BB) {
          var zB, QB;
          const BB = [nB.output, nB.outputAmount, nB.inputAmount, null === (zB = nB.bonus) || void 0 === zB ? void 0 : zB.item, null === (QB = nB.bonus) || void 0 === QB ? void 0 : QB.chance].join("|"),
            dB = jB.get(BB);
          dB ? dB.inputs.push(nB.input) : jB.set(BB, {
            inputs: [nB.input],
            inputAmount: nB.inputAmount,
            output: nB.output,
            outputAmount: nB.outputAmount,
            bonus: nB.bonus
          })
        }
        return [...jB.values()]
      }(Kd(jB, QB).filter(az)), (BB => ld(BB.output))).filter((BB => Cd(ld(BB.output), QB, xd(BB.output))));
      return (0, Hd.jsx)(Ad, {
        title: dB("buildAFactory2Game:recipesEach", {
          seconds: nB
        }),
        count: NB.length,
        children: NB.map((BB => {
          const jB = null !== zB && BB.inputs.includes(zB),
            nB = BB.inputs.length > 3 ? [jB ? zB : BB.inputs[0]] : BB.inputs,
            NB = ld(BB.output) > QB ? ld(BB.output) : null,
            uB = null === NB && IB.has(BB.output);
          return (0, Hd.jsxs)("li", {
            className: Sn()("Baf2Recipe", {
              InUse: jB,
              Locked: null !== NB,
              Far: Dd(NB, QB)
            }),
            children: [uB && (0, Hd.jsx)(Zd, {}), nB.map(((jB, zB) => (0, Hd.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [zB > 0 && (0, Hd.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, Hd.jsx)(Yd, {
                item: jB,
                amount: BB.inputAmount
              })]
            }, jB))), nB.length < BB.inputs.length && (0, Hd.jsx)(Vd, {
              label: dB("buildAFactory2Game:recipeMore", {
                count: String(BB.inputs.length - nB.length)
              }),
              names: BB.inputs.filter((BB => !nB.includes(BB))).map((BB => Id(dB, BB)))
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Hd.jsx)(Yd, {
              item: BB.output,
              amount: BB.outputAmount
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeName",
              children: Id(dB, BB.output)
            }), BB.bonus && (0, Hd.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [dB("buildAFactory2Game:recipeBonus", {
                percent: Fd(BB.bonus.chance)
              }), (0, Hd.jsx)(Yd, {
                item: BB.bonus.item,
                amount: 1
              })]
            }), null !== NB && (0, Hd.jsx)(hd, {
              tier: NB
            })]
          }, `${BB.output}|${BB.inputs[0]}`)
        }))
      })
    }

    function UI(BB) {
      let {
        taught: jB,
        tier: zB
      } = BB;
      const {
        t: QB
      } = (0, fn.D)(), nB = zd(), dB = cd(Object.values(cj), (BB => BB.tier)).filter((BB => Cd(BB.tier, zB)));
      return (0, Hd.jsx)(Ad, {
        title: QB("buildAFactory2Game:benchCanMake"),
        count: dB.length,
        startOpen: !1,
        children: dB.map((BB => {
          const dB = BB.tier > zB,
            IB = !dB && nB.has(BB.output);
          return (0, Hd.jsxs)("li", {
            className: Sn()("Baf2Recipe", {
              InUse: BB.output === jB,
              Locked: dB,
              Far: Dd(dB ? BB.tier : null, zB)
            }),
            children: [IB && (0, Hd.jsx)(Zd, {}), (0, Hd.jsx)(Yd, {
              item: BB.output,
              amount: BB.outputAmount
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeName",
              children: Id(QB, BB.output)
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), BB.inputs.map((BB => (0, Hd.jsx)(Yd, {
              item: BB.item,
              amount: BB.amount
            }, BB.item))), dB && (0, Hd.jsx)(hd, {
              tier: BB.tier
            })]
          }, BB.output)
        }))
      })
    }
    var aI, pI, rI, sI, JI;
    const mI = Vj.Generator,
      yI = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      kI = 1e3 * (null !== (aI = mI.powerMade) && void 0 !== aI ? aI : 0) / mI.opMs,
      GI = Math.min(...(null !== (pI = mI.fuels) && void 0 !== pI ? pI : []).map((BB => dz[BB]))) / 1e3,
      LI = Vj["Volt Engine"],
      gI = 1e3 * (null !== (rI = LI.powerMade) && void 0 !== rI ? rI : 0) / LI.opMs,
      tI = dz[null !== (sI = null === (JI = LI.fuels) || void 0 === JI ? void 0 : JI[0]) && void 0 !== sI ? sI : ""] / 1e3;

    function SI(BB) {
      let {
        item: jB,
        label: zB,
        value: QB,
        note: nB,
        dim: dB
      } = BB;
      return (0, Hd.jsxs)("li", {
        className: Sn()("Baf2PowerRow", {
          Dim: dB
        }),
        children: [(0, Hd.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, Hd.jsx)(Dn.c, {
            itemName: jB,
            amount: 0
          })
        }), (0, Hd.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, Hd.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: zB
          }), nB && (0, Hd.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: nB
          })]
        }), (0, Hd.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: QB
        })]
      })
    }

    function MI(BB, jB, zB, QB) {
      var nB;
      const dB = void 0 === QB ? Vj[BB] : function(BB, jB) {
          if (null === jB) return BB;
          let zB = KB.get(jB);
          return zB || (zB = {
            ...BB,
            powerPerOp: xB(BB, jB),
            farmMob: jB
          }, KB.set(jB, zB)), zB
        }(Vj[BB], QB),
        IB = jB && dB.couplable ? ej(dB, zB) : dB;
      return 1e3 * (null !== (nB = IB.powerPerOp) && void 0 !== nB ? nB : 0) / IB.opMs
    }

    function EI(BB) {
      var jB, zB, QB, nB, dB, IB, NB, uB;
      let {
        message: UB
      } = BB;
      const {
        t: aB
      } = (0, fn.D)(), pB = (BB, jB) => aB("buildAFactory2Game:powerPerSecond", {
        rate: td(BB, jB)
      }), [rB, sB] = UB.baf2PowerGenerators, JB = UB.baf2PowerGeneratorFuel, mB = UB.baf2PowerSunPanels, yB = null !== (jB = UB.baf2PowerSunShare) && void 0 !== jB ? jB : 1, kB = UB.baf2PowerVaults, GB = UB.baf2PowerUsers, [LB, gB] = null !== (zB = UB.baf2PowerEngines) && void 0 !== zB ? zB : [0, 0], tB = null !== (QB = UB.baf2PowerEngineCells) && void 0 !== QB ? QB : 0, SB = null !== (nB = UB.baf2PowerPads) && void 0 !== nB ? nB : 0, MB = null !== (dB = UB.baf2PowerCharge) && void 0 !== dB ? dB : 0, [EB, iB] = null !== (IB = UB.baf2PowerReactors) && void 0 !== IB ? IB : [0, 0], [qB, fB] = null !== (NB = UB.baf2PowerBatteries) && void 0 !== NB ? NB : [0, 0];
      let oB = aB("buildAFactory2Game:powerEngineCells", {
        amount: String(tB)
      });
      tB > 0 && gB > 0 && (oB = aB("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(tB),
        time: Ed(aB, tB * tI / gB)
      }));
      let HB = aB("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(JB)
      });
      JB > 0 && sB > 0 && (HB = aB("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(JB),
        time: Ed(aB, JB * GI / sB)
      }));
      const DB = rB + LB + mB + EB;
      return (0, Hd.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, Hd.jsxs)("section", {
          children: [(0, Hd.jsxs)("h3", {
            children: [aB("buildAFactory2Game:powerMaking"), (0, Hd.jsx)("span", {
              children: pB(UB.baf2PowerMadePerS, "+")
            })]
          }), (0, Hd.jsxs)("ul", {
            children: [0 === DB && (0, Hd.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: aB("buildAFactory2Game:powerNoMakers")
            }), rB > 0 && (0, Hd.jsx)(SI, {
              item: "Generator",
              label: `${Id(aB,"Generator")} \xd7${rB}`,
              note: `${aB("buildAFactory2Game:powerRunning",{amount:String(sB)})} \xb7 ${HB}`,
              value: pB(sB * kI, "+"),
              dim: 0 === sB
            }), LB > 0 && (0, Hd.jsx)(SI, {
              item: "Volt Engine",
              label: `${Id(aB,"Volt Engine")} \xd7${LB}`,
              note: `${aB("buildAFactory2Game:powerRunning",{amount:String(gB)})} \xb7 ${oB}`,
              value: pB(gB * gI, "+"),
              dim: 0 === gB
            }), mB > 0 && (0, Hd.jsx)(SI, {
              item: "Solar Panel",
              label: `${Id(aB,"Solar Panel")} \xd7${mB}`,
              note: aB(yB < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: pB(4 * mB * yB, "+")
            }), EB > 0 && (0, Hd.jsx)(SI, {
              item: "Reactor Frame",
              label: `${aB("buildAFactory2Game:powerReactors")} \xd7${EB}`,
              note: aB("buildAFactory2Game:powerRunning", {
                amount: String(iB)
              }),
              value: pB(null !== (uB = UB.baf2PowerReactorPerS) && void 0 !== uB ? uB : 0, "+"),
              dim: 0 === iB
            })]
          })]
        }), (0, Hd.jsxs)("section", {
          children: [(0, Hd.jsxs)("h3", {
            children: [aB("buildAFactory2Game:powerStorage"), (0, Hd.jsx)("span", {
              children: vB(UB.baf2PowerCap)
            })]
          }), (kB > 0 || qB > 0) && (0, Hd.jsxs)("ul", {
            children: [kB > 0 && (0, Hd.jsx)(SI, {
              item: "Charge Vault",
              label: `${Id(aB,"Charge Vault")} \xd7${kB}`,
              value: `+${vB(8e3*kB)}`
            }), qB > 0 && (0, Hd.jsx)(SI, {
              item: "Battery Cell",
              label: `${aB("buildAFactory2Game:powerBatteries")} \xd7${qB}`,
              value: `+${vB(fB)}`
            })]
          })]
        }), (0, Hd.jsxs)("section", {
          children: [(0, Hd.jsxs)("h3", {
            children: [aB("buildAFactory2Game:powerUsing"), (0, Hd.jsx)("span", {
              children: pB(UB.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, Hd.jsxs)("ul", {
            children: [0 === GB.length && 0 === SB && 0 === MB && (0, Hd.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: aB("buildAFactory2Game:powerNoUsers")
            }), GB.map((BB => {
              let [jB, zB, QB, nB, dB = 1, IB] = BB, NB = zB ? aB(yI[dB - 1], {
                name: Id(aB, jB)
              }) : Id(aB, jB);
              return void 0 !== IB && (NB = aB("buildAFactory2Game:powerFarmName", {
                name: NB,
                mob: aB(eB(IB))
              })), (0, Hd.jsx)(SI, {
                item: jB,
                label: `${NB} \xd7${QB}`,
                note: aB("buildAFactory2Game:powerRunning", {
                  amount: String(nB)
                }),
                value: nB > 0 ? pB(nB * MI(jB, zB, dB, IB), "\u2212") : aB("buildAFactory2Game:powerIdle"),
                dim: 0 === nB
              }, `${jB}|${zB}|${dB}|${IB}`)
            })), SB > 0 && (0, Hd.jsx)(SI, {
              item: "Charging Pad",
              label: `${Id(aB,"Charging Pad")} \xd7${SB}`,
              value: aB("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), MB > 0 && (0, Hd.jsx)(SI, {
              item: "Homestead Core",
              label: aB("buildAFactory2Game:powerCharge"),
              value: pB(MB, "\u2212")
            }), UB.baf2PowerStarved > 0 && (0, Hd.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, Hd.jsx)(Hn.c, {
                name: "triangle-exclamation"
              }), aB("buildAFactory2Game:powerStarved", {
                amount: String(UB.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var iI = zB(4653),
      qI = zB(1478);
    class fI {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(BB) {
        this.message = BB;
        for (const jB of this.listeners) jB()
      }
      get() {
        return this.message
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    }
    class oI extends fI {}

    function HI(BB, jB) {
      const zB = () => {
          const zB = BB.get();
          if (!zB || !jB) return zB;
          const [QB, nB, dB] = zB.baf2PowerAt;
          return QB === jB[0] && nB === jB[1] && dB === jB[2] ? zB : null
        },
        [nB, dB] = (0, QB.useState)(zB);
      return (0, QB.useEffect)((() => (dB(zB()), BB.subscribe((() => {
        dB(zB())
      })))), [BB, ...null !== jB && void 0 !== jB ? jB : []]), nB
    }

    function DI(BB) {
      return {
        stored: BB.baf2PowerStored,
        cap: BB.baf2PowerCap,
        madePerS: BB.baf2PowerMadePerS,
        usedPerS: BB.baf2PowerUsedPerS
      }
    }

    function FI(BB) {
      let {
        stored: jB,
        cap: zB
      } = BB;
      return (0, Hd.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, Hd.jsx)("div", {
          style: {
            width: `${Math.min(100,100*jB/Math.max(1,zB))}%`
          }
        })
      })
    }

    function YI(BB) {
      let {
        figures: jB,
        labelled: zB = !1
      } = BB;
      const {
        t: QB
      } = (0, fn.D)(), nB = jB.madePerS - jB.usedPerS, {
        text: dB,
        draining: IB
      } = function(BB, jB) {
        let {
          stored: zB,
          cap: QB,
          madePerS: nB,
          usedPerS: dB
        } = jB;
        const IB = nB - dB;
        return zB >= QB ? {
          text: BB("buildAFactory2Game:powerFull"),
          draining: !1
        } : IB > .05 ? {
          text: BB("buildAFactory2Game:powerFullIn", {
            time: Ed(BB, (QB - zB) / IB)
          }),
          draining: !1
        } : IB < -.05 ? {
          text: BB("buildAFactory2Game:powerEmptyIn", {
            time: Ed(BB, zB / -IB)
          }),
          draining: !0
        } : {
          text: BB("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(QB, jB);
      return (0, Hd.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, Hd.jsx)(FI, {
          stored: jB.stored,
          cap: jB.cap
        }), (0, Hd.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, Hd.jsx)("span", {
            children: QB(zB ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: vB(jB.stored),
              cap: vB(jB.cap)
            })
          }), (0, Hd.jsxs)("span", {
            className: Sn()("Baf2PowerNet", {
              Draining: IB
            }),
            children: [QB("buildAFactory2Game:powerPerSecond", {
              rate: td(Math.abs(nB), nB < 0 ? "\u2212" : "+")
            }), " \xb7 ", dB]
          })]
        })]
      })
    }

    function VI(BB) {
      let {
        stored: jB,
        cap: zB,
        rates: QB
      } = BB;
      const {
        t: nB
      } = (0, fn.D)();
      return QB ? (0, Hd.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Hd.jsx)(YI, {
          figures: {
            stored: jB,
            cap: zB,
            madePerS: QB[0],
            usedPerS: QB[1]
          },
          labelled: !0
        })
      }) : (0, Hd.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Hd.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, Hd.jsx)(FI, {
            stored: jB,
            cap: zB
          }), (0, Hd.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, Hd.jsx)("span", {
              children: nB("buildAFactory2Game:powerStoredLabelled", {
                stored: vB(jB),
                cap: vB(zB)
              })
            })
          })]
        })
      })
    }

    function hI(BB) {
      let {
        store: jB,
        close: zB
      } = BB;
      const {
        t: QB
      } = (0, fn.D)(), nB = HI(jB);
      return (0, Hd.jsx)(iI.d, {
        close: zB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Hd.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, Hd.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Hd.jsxs)("div", {
              children: [(0, Hd.jsx)("h2", {
                id: "baf2PowerTitle",
                children: QB("buildAFactory2Game:powerTitle")
              }), (0, Hd.jsx)("p", {
                children: QB("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, Hd.jsx)(qI.j, {
              onClick: zB
            })]
          }), nB && (0, Hd.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, Hd.jsx)(YI, {
              figures: DI(nB)
            }), (0, Hd.jsx)(EI, {
              message: nB
            })]
          })]
        })
      })
    }

    function XI(BB) {
      var jB;
      let {
        kind: zB,
        def: nB,
        vn: dB,
        power: IB,
        stored: NB,
        cap: uB
      } = BB;
      const {
        t: UB
      } = (0, fn.D)(), aB = HI(IB, dB), [pB, rB] = (0, QB.useState)(!1);
      return (0, Hd.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, Hd.jsx)(NI, {
          kind: zB,
          def: nB,
          input: null,
          tier: null !== (jB = null === aB || void 0 === aB ? void 0 : aB.baf2PowerTier) && void 0 !== jB ? jB : 1
        }), (0, Hd.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: UB("buildAFactory2Game:powerTitle")
        }), aB && (0, Hd.jsx)(YI, {
          figures: DI(aB)
        }), !aB && (0, Hd.jsx)(VI, {
          stored: NB,
          cap: uB,
          rates: null
        }), aB && (0, Hd.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            rB(!pB)
          },
          "aria-expanded": pB,
          children: UB(pB ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), aB && pB && (0, Hd.jsx)(EI, {
          message: aB
        })]
      })
    }
    const ZI = 2500,
      AI = 17500,
      TI = `${tB} `;
    const PI = ["plan", "throttle"];

    function WI(BB) {
      if (BB.startsWith(`${qj} `)) return BB.slice(0, BB.lastIndexOf(" "));
      const jB = BB.split(" ");
      return jB[0] === aj && PI.includes(jB[4]) ? jB.slice(0, 5).join(" ") : null
    }
    class eI {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = BB, this.now = jB, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.ynB = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = jB()
      }
      enqueue(BB) {
        this.queue(BB, this.nextTicket());
        const jB = this.ynB + this.pending.length;
        return this.flush(), jB
      }
      track(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zB = this.nextTicket();
        if (!jB.urgent) return this.queue(BB, zB), this.flush(), zB;
        const {
          supersedes: QB
        } = jB;
        for (let dB = this.pending.length - 1; dB >= this.urgent; dB--) {
          const jB = this.pending[dB];
          (jB.command === BB || null !== QB && void 0 !== QB && QB(jB.command)) && (this.pending.splice(dB, 1), this.markLeft(jB.tickets))
        }
        const nB = this.pending.findIndex((jB => {
          let {
            command: zB
          } = jB;
          return zB === BB
        }));
        return -1 !== nB ? this.pending[nB].tickets.push(zB) : (this.pending.splice(this.urgent, 0, {
          command: BB,
          tickets: [zB]
        }), this.urgent += 1), this.flush(), zB
      }
      leftAt(BB) {
        const jB = this.leftTimes.get(BB);
        return void 0 !== jB ? jB : this.pending.some((jB => {
          let {
            tickets: zB
          } = jB;
          return zB.includes(BB)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let BB = !0;
        return () => {
          BB && (BB = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(BB) {
        var jB;
        return (null === (jB = this.pending.at(-1)) || void 0 === jB ? void 0 : jB.command) === BB
      }
      sent() {
        return this.ynB
      }
      clear() {
        for (const {
            tickets: BB
          }
          of this.pending) this.markLeft(BB);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(BB) {
        const jB = this.now();
        for (const zB of BB) this.leftTimes.set(zB, jB);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(BB, jB) {
        const zB = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === zB || void 0 === zB ? void 0 : zB.command) === BB) return void(! function(BB) {
          return BB === SB || BB.startsWith(`${gB} `) || BB.startsWith(`${TB} `)
        }(BB) ? zB.tickets.push(jB) : (this.pending.pop(), this.markLeft([...zB.tickets, jB])));
        const QB = void 0 === zB ? null : Uj(zB.command, BB);
        if (null !== QB && void 0 !== zB) return zB.command = QB, void zB.tickets.push(jB);
        const nB = WI(BB);
        if (null !== nB && void 0 !== zB && WI(zB.command) === nB) return zB.command = BB, void zB.tickets.push(jB);
        if (null !== zB && void 0 !== zB && zB.command.startsWith(TI) && BB.startsWith(TI)) {
          const QB = BB.slice(TI.length);
          if (zB.command.slice(TI.length).split(",").includes(QB)) return void zB.tickets.push(jB);
          const nB = `${zB.command},${QB}`;
          if (nB.length <= 119) return zB.command = nB, void zB.tickets.push(jB)
        }
        this.pending.push({
          command: BB,
          tickets: [jB]
        })
      }
      flush() {
        const BB = this.now();
        for (this.tokens = Math.min(5, this.tokens + (BB - this.refilledAt) / ZI), this.refilledAt = BB; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.ynB += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: BB,
            tickets: jB
          } = this.pending.shift();
          this.markLeft(jB), this.send(BB)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * ZI)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class lI {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new eI(BB, jB)
      }
      send(BB) {
        return this.queue.enqueue(BB)
      }
      sent() {
        return this.queue.sent()
      }
      track(BB, jB) {
        return this.queue.track(BB, jB)
      }
      leftAt(BB) {
        return this.queue.leftAt(BB)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(BB) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = jB, this.send(BB), this.islandEdits.count
      }
      syncIslandEdits(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: zB
        } = this, QB = jB - zB.lastAtMs < AI;
        zB.count = QB ? Math.max(zB.count, BB) : BB
      }
      clear() {
        this.queue.clear()
      }
    }
    const wI = (0, QB.createContext)(null);

    function xI() {
      const BB = (0, QB.useContext)(wI);
      if (!BB) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return BB
    }

    function KI(BB, jB) {
      return null !== jB && void 0 !== jB ? jB : 1 === BB
    }

    function CI(BB, jB) {
      return BB.every((BB => {
        var zB;
        let [QB, , nB] = BB;
        return !KI(nB, null === (zB = jB.get(QB)) || void 0 === zB ? void 0 : zB.Cs)
      }))
    }

    function cI(BB, jB, zB) {
      if (0 === BB.size) return BB;
      const QB = new Map(BB);
      for (const [nB, dB] of BB) {
        const BB = jB.find((BB => {
          let [jB] = BB;
          return jB === nB
        }));
        (!BB || dB.Cs === (1 === BB[2]) || dB.atMs < zB) && QB.delete(nB)
      }
      return QB
    }

    function bI(BB) {
      var jB;
      let {
        vn: zB,
        input: nB,
        drops: dB,
        seconds: IB
      } = BB;
      const {
        t: NB
      } = (0, fn.D)(), uB = xI(), [UB, aB] = (0, QB.useState)(new Map);
      (0, QB.useEffect)((() => {
        dB && aB((BB => cI(BB, dB, Date.now() - AI)))
      }), [dB]), (0, QB.useEffect)((() => {
        const BB = function(BB, jB) {
          let zB = null;
          for (const {
              atMs: QB
            }
            of BB.values()) zB = null === zB ? QB : Math.min(zB, QB);
          return null === zB ? null : zB + jB
        }(UB, AI);
        if (null === BB || !dB) return;
        const jB = setTimeout((() => {
          aB((BB => cI(BB, dB, Date.now() - AI)))
        }), Math.max(0, BB - Date.now()) + 1);
        return () => {
          clearTimeout(jB)
        }
      }), [UB, dB]);
      const pB = lB(nB),
        rB = null !== pB && null !== dB && CI(dB, UB),
        sB = function(BB, jB, zB) {
          return null === BB || null === jB || CI(jB, zB) ? 0 : AB[XB[BB]]
        }(pB, dB, UB);
      return (0, Hd.jsxs)(Ad, {
        title: NB("buildAFactory2Game:farmDropsTitle", {
          seconds: IB
        }),
        count: null !== (jB = null === dB || void 0 === dB ? void 0 : dB.length) && void 0 !== jB ? jB : 0,
        children: [sB > 0 && (0, Hd.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: NB("buildAFactory2Game:farmDropsPower", {
            power: String(sB)
          })
        }), (null === pB || !dB) && (0, Hd.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: NB("buildAFactory2Game:farmDropsEmpty")
        }), rB && (0, Hd.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: NB("buildAFactory2Game:farmDropsAllVoided")
        }), null !== pB && (null === dB || void 0 === dB ? void 0 : dB.map((BB => {
          var jB;
          let [QB, nB, dB] = BB;
          const IB = nB < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            pB = KI(dB, null === (jB = UB.get(QB)) || void 0 === jB ? void 0 : jB.Cs);
          return (0, Hd.jsxs)("li", {
            className: Sn()("Baf2Recipe Baf2FarmDrop", {
              Voided: !pB
            }),
            children: [(0, Hd.jsx)(Yd, {
              item: QB,
              amount: 1
            }), (0, Hd.jsx)("span", {
              className: "Baf2RecipeName",
              children: Id(NB, QB)
            }), (0, Hd.jsx)("span", {
              className: "Baf2FarmRate",
              children: NB(IB, {
                amount: String(nB)
              })
            }), (0, Hd.jsx)("button", {
              type: "button",
              className: Sn()("Baf2FarmToggle SmallTextBold", {
                Kept: pB
              }),
              "aria-pressed": pB,
              onClick: () => {
                aB(new Map(UB).set(QB, {
                  Cs: !pB,
                  atMs: Date.now()
                })), uB.send(function(BB, jB, zB, QB) {
                  return `${TB} ${BB} ${jB} ${zB} ${QB}`
                }(zB[0], zB[1], zB[2], QB))
              },
              children: NB(pB ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, QB)
        })))]
      })
    }
    var vI;
    const RI = String(null !== (vI = Vj.Synthesizer.waterPerOp) && void 0 !== vI ? vI : 0);

    function OI(BB) {
      let {
        vn: jB,
        taught: zB
      } = BB;
      const {
        t: nB
      } = (0, fn.D)(), dB = xI(), [IB, NB] = (0, QB.useState)(null);
      (0, QB.useEffect)((() => {
        null !== IB && zB === IB && NB(null)
      }), [IB, zB]);
      const uB = null !== IB && void 0 !== IB ? IB : zB;
      let UB = nB("buildAFactory2Game:synthPick");
      return null !== uB && (UB = nB("buildAFactory2Game:synthGrows", {
        name: Id(nB, uB),
        input: Id(nB, Mj),
        water: RI
      })), (0, Hd.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, Hd.jsx)("div", {
          className: Sn()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === uB
          }),
          children: UB
        }), (0, Hd.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: Ej.map(((BB, zB) => {
            const QB = Id(nB, BB),
              IB = BB === uB;
            return (0, Hd.jsx)("li", {
              children: (0, Hd.jsx)("button", {
                type: "button",
                className: Sn()("Baf2SynthTile", {
                  Selected: IB
                }),
                title: QB,
                "aria-label": QB,
                "aria-pressed": IB,
                onClick: () => {
                  IB || (NB(BB), dB.send(`${qj} ${jB[0]} ${jB[1]} ${jB[2]} ${zB}`))
                },
                children: (0, Hd.jsx)(Dn.c, {
                  itemName: BB,
                  amount: 0
                })
              })
            }, BB)
          }))
        })]
      })
    }
    const BN = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function jN(BB) {
      let {
        kind: jB,
        tier: zB,
        coupled: QB,
        level: nB,
        slot: dB
      } = BB;
      const {
        t: IB
      } = (0, fn.D)(), uB = bB(Xj);
      if (!QB && null !== zB && zB < uB) return (0, Hd.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, Hd.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, Hd.jsx)(Hn.c, {
            name: "lock"
          })
        }), (0, Hd.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: IB("buildAFactory2Game:upgradeLocked")
        }), (0, Hd.jsx)("span", {
          className: "Baf2TierTag",
          children: IB("buildAFactory2Game:tierTag", {
            tier: String(uB)
          })
        })]
      });
      const UB = function(BB, jB) {
          if (NB() && "Crusher" !== BB && null !== jB) {
            if (zN(Aj, jB)) return {
              item: Aj,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (zN(Zj, jB)) return {
              item: Zj,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Xj,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(jB, zB),
        aB = IB(QB ? BN[nB - 1] : UB.emptyKey),
        pB = null !== zB ? function(BB, jB, zB, QB) {
          if (!NB() || !zB || "Crusher" === BB || jB < 10) return null;
          const nB = bB(Aj);
          if (QB < 3 && nB > 1 && (2 === QB || jB >= nB)) return {
            tier: nB,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const dB = bB(Zj);
          if (1 === QB && dB > 1) return {
            tier: dB,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(jB, zB, QB, nB) : null;
      return (0, Hd.jsxs)("div", {
        className: Sn()("Baf2UpgradeSocket", {
          Fitted: QB
        }),
        children: [(0, Hd.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [QB && dB, !QB && (0, Hd.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, Hd.jsx)(Dn.c, {
              itemName: UB.item,
              amount: 0
            })
          })]
        }), (0, Hd.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, Hd.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: IB("buildAFactory2Game:upgradeTitle")
          }), (0, Hd.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: aB
          }), QB && nB >= 2 && "Crusher" === jB && (0, Hd.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: IB("buildAFactory2Game:couplerCrusherHint")
          }), pB && null !== zB && zB < pB.tier && (0, Hd.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, Hd.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, Hd.jsx)(Hn.c, {
                name: "lock"
              })
            }), IB(pB.lockedKey), (0, Hd.jsx)("span", {
              className: "Baf2TierTag",
              children: IB("buildAFactory2Game:tierTag", {
                tier: String(pB.tier)
              })
            })]
          }), pB && null !== zB && zB >= pB.tier && (0, Hd.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: IB(pB.nextKey)
          })]
        })]
      })
    }

    function zN(BB, jB) {
      const zB = bB(BB);
      return zB > 1 && jB >= zB
    }
    var QN = zB(37109);
    const nN = (0, RB.I)(Vj.Condenser, Vj.Condenser.fluidMade),
      dN = .05;
    class IN extends fI {}

    function NN(BB) {
      return td(BB, "")
    }

    function uN(BB, jB, zB) {
      return BB(jB ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: zB
      })
    }

    function UN(BB, jB, zB, QB) {
      return zB <= dN && QB <= dN ? null : QB <= dN || zB <= dN ? uN(BB, jB, QB <= dN ? td(zB, "+") : td(QB, "\u2212")) : BB(jB ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: NN(zB),
        used: NN(QB)
      })
    }

    function aN(BB, jB) {
      return Math.min(100, 100 * BB / Math.max(1, jB))
    }

    function pN(BB) {
      let {
        stored: jB,
        cap: zB,
        netPerS: QB,
        rates: nB,
        cryo: dB
      } = BB;
      const {
        t: IB
      } = (0, fn.D)(), NB = function(BB, jB, zB, QB) {
        return zB <= 0 ? BB("buildAFactory2Game:waterNoStorage") : jB >= zB ? BB("buildAFactory2Game:powerFull") : QB > dN ? BB("buildAFactory2Game:powerFullIn", {
          time: Ed(BB, (zB - jB) / QB)
        }) : QB < -.05 ? jB <= 0 ? BB("buildAFactory2Game:waterEmpty") : BB("buildAFactory2Game:powerEmptyIn", {
          time: Ed(BB, jB / -QB)
        }) : BB("buildAFactory2Game:powerSteady")
      }(IB, jB, zB, QB), uB = zB > 0 && jB < zB && Math.abs(QB) <= dN, UB = IB(dB ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), aB = null !== nB ? `${nB} \xb7 ${NB}` : uB ? UB : `${UB} \xb7 ${NB}`;
      return (0, Hd.jsxs)(Hd.Fragment, {
        children: [(0, Hd.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, Hd.jsx)("div", {
            style: {
              width: `${aN(jB,zB)}%`
            }
          })
        }), (0, Hd.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, Hd.jsx)("span", {
            children: zB > 0 && IB("buildAFactory2Game:powerStored", {
              stored: (0, RB.V)(jB),
              cap: (0, RB.V)(zB)
            })
          }), (0, Hd.jsx)("span", {
            className: Sn()("Baf2WaterNet", {
              Draining: QB < -.05
            }),
            children: aB
          })]
        })]
      })
    }

    function rN(BB) {
      let {
        water: jB,
        at: zB,
        side: QB = null
      } = BB;
      const {
        t: nB
      } = (0, fn.D)(), dB = xI(), [IB, NB, uB] = jB;
      return (0, Hd.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, Hd.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, Hd.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: nB(null === QB ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${QB}`)
          }), (0, Hd.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              dB.send(`${RB.C} ${zB[0]} ${zB[1]} ${zB[2]}${"cryoOut"===QB?" cryo":""}`)
            },
            children: nB("buildAFactory2Game:waterDetails")
          })]
        }), (0, Hd.jsx)(pN, {
          stored: IB,
          cap: NB,
          netPerS: uB,
          rates: uN(nB, "cryoOut" === QB, td(Math.abs(uB), uB < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === QB
        })]
      })
    }

    function sN(BB, jB) {
      var zB, QB, nB;
      const dB = !0 === jB.baf2WaterCryo,
        IB = null !== (zB = null === (QB = jB.baf2WaterMakers.find((BB => BB[0] === (dB ? RB.b : "Condenser")))) || void 0 === QB ? void 0 : QB[1]) && void 0 !== zB ? zB : 0,
        NB = [],
        uB = (jB, zB, QB) => {
          jB > 0 && NB.push(BB(1 === jB ? zB : QB, {
            count: String(jB)
          }))
        };
      return dB ? uB(IB, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : uB(IB, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), uB(null !== (nB = jB.baf2WaterPipes) && void 0 !== nB ? nB : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), uB(jB.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), NB.join(" \xb7 ")
    }

    function JN(BB, jB) {
      if (!0 === jB.baf2WaterCryo) return function(BB, jB) {
        const zB = Vj[RB.b];
        switch (jB.baf2WaterThis) {
          case "pipe":
            return {
              text: BB("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: BB("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: BB("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: BB("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: BB("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: BB("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: BB("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var QB;
            const [nB, dB] = null !== (QB = jB.baf2WaterThisRates) && void 0 !== QB ? QB : [(0, RB.I)(zB, zB.cryoMade), (0, RB.I)(zB, zB.powerPerOp)];
            return !0 === jB.baf2WaterDriven ? {
              text: BB("buildAFactory2Game:cryoThisMixerDriven", {
                rate: NN(nB)
              }),
              bad: !1
            } : {
              text: BB("buildAFactory2Game:cryoThisMixer", {
                rate: NN(nB),
                power: NN(dB)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: BB("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(BB, jB);
      const zB = !0 === jB.baf2WaterDriven,
        QB = Vj.Condenser;
      switch (jB.baf2WaterThis) {
        case "pipe":
          return {
            text: BB("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: BB("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: BB("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: BB("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: BB("buildAFactory2Game:waterThisTank", {
              tank: (0, RB.V)(RB.u),
              cap: (0, RB.V)(jB.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var nB;
          const [dB, IB] = null !== (nB = jB.baf2WaterThisRates) && void 0 !== nB ? nB : [nN, (0, RB.I)(QB, QB.powerPerOp)];
          return zB ? {
            text: BB("buildAFactory2Game:waterThisCondenserDriven", {
              rate: NN(dB)
            }),
            bad: !1
          } : {
            text: BB("buildAFactory2Game:waterThisCondenser", {
              rate: NN(dB),
              power: NN(IB)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: BB("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function mN(BB, jB) {
      const zB = jB.baf2WaterMakers.some((BB => !0 === BB[5]));
      if (!0 === jB.baf2WaterCryo) {
        const QB = jB.baf2WaterUsedPerS - jB.baf2WaterMadePerS,
          nB = zB || QB <= dN ? 0 : (0, RB.E)(QB);
        return 0 === nB ? null : nB > 1 ? BB("buildAFactory2Game:cryoNextMixers", {
          mixers: String(nB)
        }) : BB("buildAFactory2Game:cryoNextOne")
      }
      const QB = zB ? null : function(BB, jB) {
        const zB = jB - BB;
        return zB <= dN ? null : Math.ceil(zB / nN)
      }(jB.baf2WaterMadePerS, jB.baf2WaterUsedPerS);
      return null === QB ? null : QB > 1 ? BB("buildAFactory2Game:waterNextCondensers", {
        condensers: String(QB)
      }) : BB("buildAFactory2Game:waterNextOne")
    }

    function yN(BB) {
      let {
        item: jB,
        label: zB,
        note: QB,
        value: nB,
        dim: dB,
        bad: IB
      } = BB;
      return (0, Hd.jsxs)("li", {
        className: Sn()("Baf2WaterRow", {
          Dim: dB,
          Bad: IB
        }),
        children: [(0, Hd.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, Hd.jsx)(Dn.c, {
            itemName: jB,
            amount: 0
          })
        }), (0, Hd.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, Hd.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: zB
          }), QB && (0, Hd.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: QB
          })]
        }), (0, Hd.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: nB
        })]
      })
    }

    function kN(BB) {
      return QN.k[BB] ? BB : "Reactor Port"
    }

    function GN(BB) {
      let {
        message: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)(), QB = !0 === jB.baf2WaterCryo, nB = (BB, jB) => uN(zB, QB, td(BB, jB));
      return (0, Hd.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, Hd.jsxs)("section", {
          children: [(0, Hd.jsxs)("h3", {
            children: [zB("buildAFactory2Game:waterMakes"), (0, Hd.jsx)("span", {
              children: nB(jB.baf2WaterMadePerS, "+")
            })]
          }), (0, Hd.jsxs)("ul", {
            children: [0 === jB.baf2WaterMakers.length && (0, Hd.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: zB(QB ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), jB.baf2WaterMakers.map((BB => {
              let [jB, QB, dB, IB, NB, uB] = BB;
              const UB = zB("buildAFactory2Game:powerRunning", {
                amount: String(dB)
              });
              let aB = NB > 0 ? zB("buildAFactory2Game:waterMakerPower", {
                running: UB,
                power: NN(NB)
              }) : UB;
              return uB && (aB = zB(0 === dB && IB <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, Hd.jsx)(yN, {
                item: jB,
                label: `${Id(zB,jB)} \xd7${QB}`,
                note: aB,
                value: dB > 0 || uB && IB > 0 ? nB(IB, "+") : zB("buildAFactory2Game:powerIdle"),
                dim: 0 === dB && !uB,
                bad: uB
              }, jB)
            }))]
          })]
        }), (0, Hd.jsxs)("section", {
          children: [(0, Hd.jsxs)("h3", {
            children: [zB("buildAFactory2Game:waterUses"), (0, Hd.jsx)("span", {
              children: nB(jB.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, Hd.jsxs)("ul", {
            children: [0 === jB.baf2WaterUsers.length && (0, Hd.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: zB(QB ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), jB.baf2WaterUsers.map((BB => {
              let [jB, QB, dB, IB] = BB;
              const NB = QN.k[jB] ? Id(zB, jB) : jB;
              return (0, Hd.jsx)(yN, {
                item: kN(jB),
                label: QB > 1 ? `${NB} \xd7${QB}` : NB,
                note: IB ? zB("buildAFactory2Game:waterPortFirst") : void 0,
                value: dB > 0 ? nB(dB, "\u2212") : zB("buildAFactory2Game:powerIdle"),
                dim: 0 === dB
              }, jB)
            }))]
          })]
        })]
      })
    }

    function LN(BB) {
      var jB, zB, nB, dB, IB;
      let {
        store: NB,
        close: uB
      } = BB;
      const {
        t: UB
      } = (0, fn.D)(), aB = function(BB) {
        const [jB, zB] = (0, QB.useState)((() => BB.get()));
        return (0, QB.useEffect)((() => (zB(BB.get()), BB.subscribe((() => {
          zB(BB.get())
        })))), [BB]), jB
      }(NB), pB = null !== (jB = null === aB || void 0 === aB ? void 0 : aB.baf2WaterStored) && void 0 !== jB ? jB : 0, rB = null !== (zB = null === aB || void 0 === aB ? void 0 : aB.baf2WaterCap) && void 0 !== zB ? zB : 0, sB = null !== (nB = null === aB || void 0 === aB ? void 0 : aB.baf2WaterMadePerS) && void 0 !== nB ? nB : 0, JB = null !== (dB = null === aB || void 0 === aB ? void 0 : aB.baf2WaterUsedPerS) && void 0 !== dB ? dB : 0, mB = null !== (IB = null === aB || void 0 === aB ? void 0 : aB.baf2WaterNetPerS) && void 0 !== IB ? IB : sB - JB, yB = aB && JN(UB, aB), kB = aB && mN(UB, aB), GB = !0 === (null === aB || void 0 === aB ? void 0 : aB.baf2WaterCryo);
      return (0, Hd.jsx)(iI.d, {
        close: uB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Hd.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, Hd.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Hd.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== aB && rB <= 0 ? (0, Hd.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, Hd.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, Hd.jsx)(Dn.c, {
                  itemName: GB ? Jz.f : RB.k,
                  amount: 0
                })
              }), (0, Hd.jsxs)("div", {
                children: [(0, Hd.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: UB(GB ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), aB && (0, Hd.jsx)("p", {
                  children: sN(UB, aB)
                })]
              })]
            }), (0, Hd.jsx)(qI.j, {
              onClick: uB
            })]
          }), aB && yB && (0, Hd.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, Hd.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, Hd.jsx)(pN, {
                stored: pB,
                cap: rB,
                netPerS: mB,
                cryo: GB,
                rates: UN(UB, GB, sB, JB)
              })
            }), (0, Hd.jsx)("div", {
              className: Sn()("Baf2WaterThis", {
                Bad: yB.bad
              }),
              children: yB.text
            }), aB.baf2WaterDriven && (0, Hd.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, Hd.jsx)(Hn.c, {
                name: "bolt"
              }), UB(GB ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), kB && (0, Hd.jsx)("p", {
              className: "Baf2WaterNext",
              children: kB
            }), (0, Hd.jsx)(GN, {
              message: aB
            })]
          })]
        })
      })
    }
    class gN {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(BB, jB) {
        const zB = this.get(BB);
        zB && null === jB.opLeftMs && null === jB.fuelLeftMs && jB.status === zB.status ? jB = {
          ...jB,
          opLeftMs: zB.opLeftMs,
          fuelLeftMs: zB.fuelLeftMs,
          burning: zB.burning
        } : this.updates++, this.pos = BB, this.view = jB;
        for (const QB of this.listeners) QB()
      }
      get(BB) {
        return null !== this.pos && this.pos[0] === BB[0] && this.pos[1] === BB[1] && this.pos[2] === BB[2] ? this.view : null
      }
      forget(BB) {
        null !== this.get(BB) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    }

    function tN(BB, jB, zB, QB) {
      return "noFuel" === jB && QB && !nz(Vj[BB]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === jB && !0 === (null === zB || void 0 === zB ? void 0 : zB.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === jB && !0 === (null === zB || void 0 === zB ? void 0 : zB.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === jB && !0 === (null === zB || void 0 === zB ? void 0 : zB.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === jB && !0 === (null === zB || void 0 === zB ? void 0 : zB.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : SN(jB, zB) ? "buildAFactory2Game:machineStatus_noInputShort" : function(BB, jB) {
        const zB = Vj[BB];
        if ("noFuel" === jB && void 0 !== zB.fuels) return nz(zB) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (zB.mobFarm && ("noInput" === jB || "badInput" === jB)) return `buildAFactory2Game:machineStatus_${jB}MobFarm`;
        if ("outputFull" === jB && (void 0 !== zB.table || zB.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === jB && Kj(zB)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== zB.cryoMade && ("noInput" === jB || "noOutlet" === jB || "fluidFull" === jB)) return `buildAFactory2Game:machineStatus_${jB}Mixer`;
        return `buildAFactory2Game:machineStatus_${jB}`
      }(BB, jB)
    }

    function SN(BB, jB) {
      return "noInput" === BB && null !== jB && void 0 !== jB && jB.input && jB.inputShort ? {
        input: jB.input,
        short: jB.inputShort
      } : null
    }

    function MN(BB) {
      return Mn(BB) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== BB.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function EN(BB) {
      const jB = (0, VB.He)(BB);
      return `Baf2Pane Baf2Pane${jB.charAt(0).toUpperCase()}${jB.slice(1)}`
    }

    function iN(BB, jB) {
      const [zB, nB] = (0, QB.useState)((() => BB.get(jB)));
      return (0, QB.useEffect)((() => {
        nB(BB.get(jB));
        const zB = BB.subscribe((() => {
          nB(BB.get(jB))
        }));
        return () => {
          zB(), BB.forget(jB)
        }
      }), [BB, ...jB]), zB
    }

    function qN(BB, jB, zB, QB) {
      const nB = Vj[BB],
        dB = jB && nB.couplable ? ej(nB, zB) : nB,
        IB = null !== QB && jz(dB) ? function(BB, jB) {
          var zB;
          return null !== (zB = null !== jB && jz(BB) ? Nz[jB] : void 0) && void 0 !== zB ? zB : BB.opMs
        }(dB, uz(QB)) : dB.opMs;
      return IB === dB.opMs ? dB : {
        ...dB,
        opMs: IB
      }
    }

    function fN(BB) {
      let {
        running: jB,
        opMs: zB,
        opLeftMs: QB,
        updateCount: nB
      } = BB;
      return (0, Hd.jsx)("div", {
        className: Sn()("Baf2MachineProgress", {
          Running: jB
        }),
        children: (0, Hd.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: zB / 1e3 + "s",
            animationDelay: null === QB ? void 0 : (QB - zB) / 1e3 + "s"
          }
        }, nB)
      })
    }

    function oN(BB) {
      let {
        running: jB,
        leftMs: zB,
        periodMs: QB,
        updateCount: nB
      } = BB;
      const {
        t: dB
      } = (0, fn.D)(), IB = Math.min(Math.max(null !== zB && void 0 !== zB ? zB : 0, 0), QB), NB = jB && IB > 0, uB = dB("buildAFactory2Game:machineBarFuel");
      return (0, Hd.jsx)("div", {
        className: Sn()("Baf2FuelBurn", {
          Draining: NB
        }),
        role: "img",
        title: uB,
        "aria-label": uB,
        children: (0, Hd.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: NB ? {
            animationDuration: QB / 1e3 + "s",
            animationDelay: (IB - QB) / 1e3 + "s"
          } : {
            transform: `scaleY(${IB/QB})`
          }
        }, nB)
      })
    }

    function HN(BB, jB, zB) {
      let [QB, nB] = zB;
      const dB = 1 !== QB ? qn(jB) : null;
      return {
        amount: QB,
        have: nB,
        item: BB(dB || dd(jB))
      }
    }

    function DN(BB) {
      return jz(BB) ? "buildAFactory2Game:machineBarMining" : zz(BB) ? "buildAFactory2Game:machineBarCutting" : void 0 !== BB.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function FN(BB) {
      var jB, zB, QB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB, GB, LB;
      let {
        kind: gB,
        vn: tB,
        store: SB,
        power: MB,
        renderSlot: EB
      } = BB;
      const {
        t: iB
      } = (0, fn.D)(), qB = iN(SB, tB), fB = Vj[gB], oB = null !== (jB = null === qB || void 0 === qB ? void 0 : qB.coupled) && void 0 !== jB && jB, HB = null !== (zB = null === qB || void 0 === qB ? void 0 : qB.couplerLevel) && void 0 !== zB ? zB : 1, DB = qN(gB, oB, HB, null !== (QB = null === qB || void 0 === qB || null === (nB = qB.dug) || void 0 === nB ? void 0 : nB.item) && void 0 !== QB ? QB : null), FB = null !== (dB = null === qB || void 0 === qB ? void 0 : qB.status) && void 0 !== dB ? dB : null, YB = null !== (IB = null === qB || void 0 === qB ? void 0 : qB.power) && void 0 !== IB ? IB : null, VB = null !== (NB = null === qB || void 0 === qB ? void 0 : qB.opLeftMs) && void 0 !== NB ? NB : null, hB = null !== (uB = null === qB || void 0 === qB ? void 0 : qB.dug) && void 0 !== uB ? uB : null, XB = null !== hB && jz(fB) ? Nz[null !== (UB = uz(hB.item)) && void 0 !== UB ? UB : ""] : void 0, ZB = void 0 === XB ? null : 6e4 / XB, AB = null !== (aB = null === qB || void 0 === qB ? void 0 : qB.powerCap) && void 0 !== aB ? aB : 4e3, TB = null !== (pB = null === qB || void 0 === qB ? void 0 : qB.tier) && void 0 !== pB ? pB : null, PB = void 0 !== DB.powerMade, WB = null !== fB.fuelSlot ? EB(fB.fuelSlot) : null, eB = Wj(fB), lB = !oB && !0 === (null === qB || void 0 === qB ? void 0 : qB.fuelFed), xB = !oB && !0 === (null === qB || void 0 === qB ? void 0 : qB.fuelFeeds), KB = null !== fB.fuelSlot && !oB, CB = null !== (rB = null === qB || void 0 === qB ? void 0 : qB.fuelLeftMs) && void 0 !== rB ? rB : null, cB = function(BB, jB, zB) {
        var QB;
        const nB = null === jB ? void 0 : dz[jB];
        return Math.max(null !== (QB = null !== nB && void 0 !== nB ? nB : zB) && void 0 !== QB ? QB : 0, BB.opMs)
      }(DB, null !== (sB = null === qB || void 0 === qB ? void 0 : qB.burning) && void 0 !== sB ? sB : null, CB), bB = null !== (JB = null === qB || void 0 === qB ? void 0 : qB.fuelKeep) && void 0 !== JB ? JB : null, vB = null === FB ? null : tN(gB, FB, qB, lB), RB = null === FB ? null : SN(FB, qB);
      return (0, Hd.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, Hd.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Hd.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: iB(dd(gB))
          }), hB && (0, Hd.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [iB("Tree Cutter" === gB ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, Hd.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Hd.jsx)(Dn.c, {
                itemName: hB.item,
                amount: 0
              })
            }), (0, Hd.jsx)(Fn.e, {
              text: hB.name
            })]
          }), null !== ZB && (0, Hd.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: iB("buildAFactory2Game:machineDigsFixed", {
              perMin: String(ZB)
            })
          }), (null === qB || void 0 === qB ? void 0 : qB.field) && (0, Hd.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, Hd.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Hd.jsx)(Dn.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), iB("buildAFactory2Game:machineField", {
              planted: String(qB.field[0]),
              ripe: String(qB.field[1])
            })]
          }), (0, Hd.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Hd.jsxs)("div", {
              className: Sn()("Baf2MachineColumn", {
                Baf2Burns: KB
              }),
              children: [null !== DB.inputSlot && (0, Hd.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, Hd.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: iB(MN(DB))
                }), EB(DB.inputSlot)]
              }), null !== fB.fuelSlot && !oB && (0, Hd.jsxs)("div", {
                className: Sn()("Baf2MachineSlot", {
                  Baf2FuelFed: lB
                }),
                children: [(0, Hd.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [lB && (0, Hd.jsx)(Hn.c, {
                    name: "fire"
                  }), iB("buildAFactory2Game:machineFuel")]
                }), (0, Hd.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, Hd.jsx)(oN, {
                    running: "running" === FB,
                    leftMs: CB,
                    periodMs: cB,
                    updateCount: SB.updateCount
                  }), WB]
                })]
              }), null !== fB.fuelSlot && oB && (0, Hd.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, Hd.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: iB("buildAFactory2Game:machineFuel")
                }), (0, Hd.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: iB("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": iB("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, Hd.jsx)(Hn.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, Hd.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, Hd.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: iB(DN(DB))
              }), (0, Hd.jsx)(fN, {
                running: "running" === FB,
                opMs: DB.opMs,
                opLeftMs: VB,
                updateCount: SB.updateCount
              })]
            }), DB.outputSlots.length > 0 && (0, Hd.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Hd.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: iB("buildAFactory2Game:machineOutput")
              }), (0, Hd.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: DB.outputSlots.map((BB => (0, Hd.jsx)("div", {
                  children: EB(BB)
                }, BB)))
              })]
            }), null !== YB && PB && (0, Hd.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, Hd.jsx)("div", {
                style: {
                  height: 100 * YB / AB + "%"
                }
              })
            })]
          }), KB && null !== bB && (0, Hd.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Hd.jsx)(Hn.c, {
              name: "arrows-rotate"
            }), iB(zz(DB) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(bB)
            })]
          }), (lB || xB) && (0, Hd.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Hd.jsx)(Hn.c, {
              name: "fire"
            }), iB(lB ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), fB.couplable && (0, Hd.jsx)(jN, {
            kind: gB,
            tier: TB,
            coupled: oB,
            level: HB,
            slot: eB === fB.fuelSlot ? WB : null !== eB ? EB(eB) : null
          }), null !== YB && !PB && !0 === (null === qB || void 0 === qB ? void 0 : qB.reactorPowered) && (0, Hd.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: iB("buildAFactory2Game:machineReactorPowered")
          }), null !== YB && !PB && !0 !== (null === qB || void 0 === qB ? void 0 : qB.reactorPowered) && (0, Hd.jsx)(VI, {
            stored: YB,
            cap: AB,
            rates: null !== (mB = null === qB || void 0 === qB ? void 0 : qB.powerRates) && void 0 !== mB ? mB : null
          }), (null === qB || void 0 === qB ? void 0 : qB.water) && (0, Hd.jsx)(rN, {
            water: qB.water,
            at: tB,
            side: qB.cryo ? "waterIn" : null
          }), (null === qB || void 0 === qB ? void 0 : qB.cryo) && (0, Hd.jsx)(rN, {
            water: qB.cryo,
            at: tB,
            side: "cryoOut"
          }), null !== qB && void 0 !== qB && qB.inertCoupler ? (0, Hd.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: iB("buildAFactory2Game:machineStatus_couplerOff", {
              item: Id(iB, qB.inertCoupler)
            })
          }) : null !== vB && (0, Hd.jsx)("div", {
            className: Sn()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== FB
            }),
            children: iB(vB, RB ? HN(iB, RB.input, RB.short) : void 0)
          })]
        }), (0, Hd.jsxs)("div", {
          className: Sn()("Baf2MachineSide", {
            Baf2SynthSide: Kj(fB)
          }),
          children: [Kj(fB) && (0, Hd.jsx)(OI, {
            vn: tB,
            taught: null !== (yB = null === qB || void 0 === qB ? void 0 : qB.taught) && void 0 !== yB ? yB : null
          }, tB.join(",")), PB && (0, Hd.jsx)(XI, {
            kind: gB,
            def: DB,
            vn: tB,
            power: MB,
            stored: null !== YB && void 0 !== YB ? YB : 0,
            cap: AB
          }), wB(fB) && (0, Hd.jsx)(bI, {
            vn: tB,
            input: null !== (kB = null === qB || void 0 === qB ? void 0 : qB.input) && void 0 !== kB ? kB : null,
            drops: null !== (GB = null === qB || void 0 === qB ? void 0 : qB.farm) && void 0 !== GB ? GB : null,
            seconds: String(DB.opMs / 1e3)
          }), !PB && !wB(fB) && !Kj(fB) && (0, Hd.jsx)(NI, {
            kind: gB,
            def: DB,
            input: null !== (LB = null === qB || void 0 === qB ? void 0 : qB.input) && void 0 !== LB ? LB : null,
            tier: null !== TB && void 0 !== TB ? TB : 1,
            noSeeds: !0 === (null === qB || void 0 === qB ? void 0 : qB.noSeeds)
          })]
        })]
      })
    }

    function YN(BB, jB, zB, QB) {
      var nB;
      const dB = Vj[BB],
        IB = [dB.inputSlot, dB.fuelSlot, ...null !== (nB = dB.inputSlots) && void 0 !== nB ? nB : []].filter((BB => null !== BB));
      return {
        render: nB => {
          let {
            vn: dB,
            renderSlot: IB
          } = nB;
          return (0, Hd.jsx)(wI.Provider, {
            value: QB,
            children: (0, Hd.jsx)(FN, {
              kind: BB,
              vn: dB,
              store: jB,
              power: zB,
              renderSlot: IB
            })
          })
        },
        quickMoveRange: IB.length > 0 ? [Math.min(...IB), Math.max(...IB) + 1] : [0, 0],
        className: EN(BB)
      }
    }
    const VN = "Assembler";

    function hN(BB) {
      var jB, zB, QB, nB, dB, IB, NB, uB, UB;
      let {
        vn: aB,
        store: pB,
        renderSlot: rB
      } = BB;
      const {
        t: sB
      } = (0, fn.D)(), JB = iN(pB, aB), mB = null !== (jB = null === JB || void 0 === JB ? void 0 : JB.tier) && void 0 !== jB ? jB : 1, yB = null !== (zB = null === JB || void 0 === JB ? void 0 : JB.taught) && void 0 !== zB ? zB : null, kB = vj(VN, {
        coupled: !1,
        taught: yB
      }), GB = null !== (QB = kB.bench) && void 0 !== QB ? QB : null, LB = null !== (nB = null === JB || void 0 === JB ? void 0 : JB.status) && void 0 !== nB ? nB : null, gB = null !== (dB = null === JB || void 0 === JB ? void 0 : JB.power) && void 0 !== dB ? dB : null, tB = null !== (IB = null === JB || void 0 === JB ? void 0 : JB.powerCap) && void 0 !== IB ? IB : 4e3;
      return (0, Hd.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, Hd.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Hd.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: sB(dd(VN))
          }), GB && (0, Hd.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [sB("buildAFactory2Game:benchMakes"), (0, Hd.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, Hd.jsx)(Dn.c, {
                itemName: GB.output,
                amount: 0
              })
            }), (null === JB || void 0 === JB ? void 0 : JB.taughtName) && (0, Hd.jsx)(Fn.e, {
              text: JB.taughtName
            }), GB.outputAmount > 1 && (0, Hd.jsxs)("span", {
              children: ["\xd7", GB.outputAmount]
            })]
          }), !GB && (0, Hd.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: sB("buildAFactory2Game:benchTeachHint")
          }), (0, Hd.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Hd.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (NB = kB.inputSlots) && void 0 !== NB ? NB : []).map(((BB, jB) => {
                const zB = null === GB || void 0 === GB ? void 0 : GB.inputs[jB];
                return (0, Hd.jsxs)("div", {
                  className: Sn()("Baf2BenchInput", {
                    Spare: !zB
                  }),
                  children: [(0, Hd.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [rB(BB), zB && (0, Hd.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, Hd.jsx)(Dn.c, {
                        itemName: zB.item,
                        amount: 0
                      })
                    })]
                  }), (0, Hd.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: zB ? `\xd7${zB.amount}` : "\xa0"
                  })]
                }, BB)
              }))
            }), (0, Hd.jsx)(fN, {
              running: "running" === LB,
              opMs: kB.opMs,
              opLeftMs: null !== (uB = null === JB || void 0 === JB ? void 0 : JB.opLeftMs) && void 0 !== uB ? uB : null,
              updateCount: pB.updateCount
            }), (0, Hd.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Hd.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: sB("buildAFactory2Game:machineOutput")
              }), (0, Hd.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: kB.outputSlots.map((BB => (0, Hd.jsx)("div", {
                  children: rB(BB)
                }, BB)))
              })]
            })]
          }), null !== gB && (0, Hd.jsx)(VI, {
            stored: gB,
            cap: tB,
            rates: null !== (UB = null === JB || void 0 === JB ? void 0 : JB.powerRates) && void 0 !== UB ? UB : null
          }), null !== LB && (0, Hd.jsx)("div", {
            className: Sn()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== LB
            }),
            children: sB(tN(VN, LB, JB, !1))
          }), GB && GB.inputs.length > 1 && (0, Hd.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: sB("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, Hd.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, Hd.jsx)(UI, {
            taught: yB,
            tier: mB
          }), GB && (0, Hd.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: sB("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function XN(BB) {
      var jB;
      const zB = null !== (jB = Vj[VN].inputSlots) && void 0 !== jB ? jB : [];
      return {
        render: jB => {
          let {
            vn: zB,
            renderSlot: QB
          } = jB;
          return (0, Hd.jsx)(hN, {
            vn: zB,
            store: BB,
            renderSlot: QB
          })
        },
        quickMoveRange: [Math.min(...zB), Math.max(...zB) + 1],
        className: EN(VN)
      }
    }
    var ZN = zB(106),
      AN = zB(1169),
      TN = zB(4334);
    const PN = 600,
      WN = .5,
      eN = 4,
      lN = 1200,
      wN = 140,
      xN = 100,
      KN = 32,
      CN = 16,
      cN = 100.5,
      bN = 90,
      vN = 1.5,
      RN = 50;

    function ON(BB) {
      switch (Dz(BB)) {
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
    const Bu = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function ju(BB) {
      const jB = Math.ceil(60 * BB / xN);
      return {
        fuel: Math.max(KN, jB),
        waste: Math.max(CN, jB)
      }
    }

    function zu(BB, jB, zB) {
      const [QB, nB, dB] = [BB - 2, jB - 2, zB - 2];
      return 2 * (QB * nB + nB * dB + dB * QB) * wN
    }

    function Qu(BB, jB, zB) {
      return Math.max(0, BB - 2) * Math.max(0, jB - 2) * Math.max(0, zB - 2)
    }

    function nu(BB, jB) {
      const [zB, QB, nB] = BB, dB = zB * QB * nB, IB = new Float32Array(dB);
      let NB = 0,
        uB = 0,
        UB = 0,
        aB = 0,
        pB = 0;
      const rB = (BB, dB, IB) => BB < 0 || BB >= zB || dB < 0 || dB >= QB || IB < 0 || IB >= nB ? 0 : jB[(dB * nB + IB) * zB + BB];
      for (let yB = 0; yB < QB; yB++)
        for (let BB = 0; BB < nB; BB++)
          for (let QB = 0; QB < zB; QB++) {
            const dB = (yB * nB + BB) * zB + QB,
              sB = jB[dB];
            if (1 === sB) {
              NB++;
              let jB = 0;
              for (const [zB, nB, dB] of Bu) {
                const IB = rB(QB + zB, yB + nB, BB + dB);
                1 !== IB && 2 !== IB || jB++
              }
              IB[dB] = PN * (1 + WN * Math.min(jB, eN)), aB += IB[dB]
            } else if (2 === sB) uB++;
            else if (3 === sB) {
              UB++;
              Bu.some((jB => {
                let [zB, nB, dB] = jB;
                return 1 === rB(QB + zB, yB + nB, BB + dB)
              })) && (pB += lN)
            }
          }
      const sB = zu(zB + 2, QB + 2, nB + 2),
        JB = Math.min(aB, pB, sB),
        mB = NB > 0 ? aB * xN / NB : 0;
      return {
        rods: NB,
        graphite: uB,
        channels: UB,
        fuelHeat: aB,
        cooling: pB,
        size: sB,
        max: JB,
        vol: dB,
        powerPerUnit: mB,
        pelletsPerMin: mB > 0 ? JB / mB * 60 : 0,
        waterPerS: JB * RB.s,
        rodHeat: IB
      }
    }
    const du = 0,
      Iu = 1,
      Nu = 6,
      uu = 7,
      Uu = 8;

    function au(BB, jB) {
      const [zB, QB, nB] = BB, dB = new Uint8Array(zB * QB * nB), IB = (BB, dB, IB) => BB < 0 || BB >= zB || dB < 0 || dB >= QB || IB < 0 || IB >= nB ? 0 : jB[(dB * nB + IB) * zB + BB];
      for (let NB = 0; NB < QB; NB++)
        for (let BB = 0; BB < nB; BB++)
          for (let QB = 0; QB < zB; QB++) {
            const uB = (NB * nB + BB) * zB + QB,
              UB = jB[uB];
            if (1 === UB) {
              let jB = 0;
              for (const [zB, nB, dB] of Bu) {
                const uB = IB(QB + zB, NB + nB, BB + dB);
                jB += 1 === uB || 2 === uB ? 1 : 0
              }
              dB[uB] = Iu + Math.min(jB, eN)
            } else if (3 === UB) {
              const jB = Bu.some((jB => {
                let [zB, nB, dB] = jB;
                return 1 === IB(QB + zB, NB + nB, BB + dB)
              }));
              dB[uB] = jB ? Nu : uu
            } else 2 === UB && (dB[uB] = Uu)
          }
      return dB
    }

    function pu(BB) {
      return BB.fuelHeat <= BB.cooling && BB.fuelHeat <= BB.size ? "fuel" : BB.cooling <= BB.size ? "cooling" : "size"
    }
    const ru = bN;

    function su(BB, jB, zB) {
      return Math.round(BB * jB * zB * 25e3 * (1 + .25 * (Math.min(BB, jB, zB) - 2)))
    }

    function Ju(BB) {
      return Math.max(0, Math.min(RB.f, BB))
    }

    function mu(BB, jB, zB) {
      const QB = jB * Ju(zB);
      return BB <= 0 ? 0 : QB > 0 ? Math.min(200, 100 * BB / QB) : 200
    }

    function yu(BB, jB) {
      const zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? vN : 1;
      return Math.min(BB.fuelHeat * zB, BB.cooling * Ju(jB), BB.size * zB)
    }

    function ku(BB) {
      return 2 + BB / 10
    }
    const Gu = "buildAFactory2Game:";

    function Lu(BB) {
      var jB;
      return null !== (jB = BB.baf2RxMood) && void 0 !== jB ? jB : function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const zB = [
          ["calm", 50],
          ["warm", ru],
          ["hot", cN]
        ];
        for (const [QB, nB] of zB)
          if (BB < nB + (QB === jB ? 3 : 0)) return QB;
        return "alarm"
      }(BB.baf2RxHeat)
    }
    const gu = 120;

    function tu(BB) {
      const jB = BB.baf2RxState;
      if ("running" === jB && BB.baf2RxHeat > cN) return {
        label: `${Gu}rxState_tooHot`,
        tone: "bad",
        fix: `${Gu}rxFix_tooHot`
      };
      switch (jB) {
        case "running":
          return {
            label: `${Gu}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Gu}rxState_idle`, tone: "off", fix: `${Gu}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Gu}rxState_scram`, tone: "off", fix: BB.baf2RxHeat < RN ? `${Gu}rxFix_scramCool` : `${Gu}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Gu}rxState_${jB}`, tone: "off", fix: `${Gu}rxFix_${jB}`
          };
        case "melted":
          return {
            label: `${Gu}rxState_melted`, tone: "bad", fix: `${Gu}rxFix_melted`
          };
        default:
          return {
            label: `${Gu}rxState_${jB}`, tone: "warn", fix: `${Gu}rxFix_${jB}`
          }
      }
    }

    function Su(BB) {
      const [jB, zB, QB] = BB.baf2RxStats;
      return {
        fuelHeat: jB,
        cooling: zB * (BB.baf2RxCryo ? Math.max(1, Ju(BB.baf2RxWater / 100)) : 1),
        size: QB
      }
    }

    function Mu(BB) {
      var jB;
      const zB = "idle" === BB.baf2RxState || "running" === BB.baf2RxState && BB.baf2RxHeat <= cN || "scram" === BB.baf2RxState && BB.baf2RxHeat < RN;
      if (0 === (BB.baf2RxFlags & gj) || !BB.baf2RxFormed || !zB) return null;
      const {
        fuelHeat: QB,
        cooling: nB,
        size: dB
      } = Su(BB), IB = Math.min(QB, nB, dB), NB = pu({
        fuelHeat: QB,
        cooling: nB,
        size: dB
      }), uB = "cooling" === NB && !0 === BB.baf2RxCryoOpen && !BB.baf2RxCryo, UB = null !== (jB = BB.baf2RxCells) && void 0 !== jB ? jB : "", aB = ("fuel" === NB || "cooling" === NB && !0 === BB.baf2RxCryo) && UB.length > 0 && !UB.includes(String(0)), pB = uB ? "Cryo" : "scram" === BB.baf2RxState ? "Off" : "";
      return IB < 12e3 ? {
        key: `${Gu}rxGrow_${aB?"full":NB}${pB}`,
        amount: IB
      } : null
    }

    function Eu(BB, jB) {
      return BB[0] === jB[0] && BB[1] === jB[1] && BB[2] === jB[2]
    }

    function iu(BB) {
      return [...BB].sort(((BB, jB) => Number(jB[2] < jB[1]) - Number(BB[2] < BB[1])))
    }

    function qu(BB, jB) {
      return jB.some((jB => {
        let [zB, QB] = jB;
        return !(QB <= 0) && ["edge", "cap", "wall", "inside"].some((jB => zB === dQ(BB, jB)))
      }))
    }

    function fu(BB, jB, zB) {
      const QB = BB.baf2RxFuel - BB.baf2RxPu > 0 ? zB : 0;
      return {
        full: BB.baf2RxWaste > jB - 3,
        fullInS: QB > 0 ? Math.max(0, jB - BB.baf2RxWaste) / QB : null
      }
    }
    const ou = {
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

    function Hu(BB) {
      return Du[BB]
    }
    const Du = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Fu(BB) {
      let [jB, zB, QB] = BB;
      return Math.ceil(zu(jB, zB, QB) * RB.s)
    }

    function Yu(BB, jB) {
      return "battery" === BB ? jB[0] * jB[1] * jB[2] : function(BB) {
        let [jB, zB, QB] = BB;
        return jB * zB * QB - Math.max(0, jB - 2) * Math.max(0, zB - 2) * Math.max(0, QB - 2)
      }(jB) - 1
    }

    function Vu(BB) {
      const jB = Math.max(0, BB);
      if (jB < 10) return String(Math.round(10 * jB) / 10);
      if (jB < 1e4) return Math.round(jB).toLocaleString("en-US");
      if (jB < 1e6) return `${jB<1e5?(Math.floor(jB/100)/10).toFixed(1):Math.floor(jB/1e3)}k`;
      const zB = jB / 1e6;
      return `${zB<10?(Math.floor(100*zB)/100).toFixed(2):zB<100?(Math.floor(10*zB)/10).toFixed(1):Math.floor(zB)}M`
    }

    function hu(BB) {
      return BB <= 0 ? "0" : BB >= 10 ? String(Math.round(BB)) : BB.toFixed(BB >= 1 ? 1 : 2)
    }

    function Xu(BB) {
      const jB = Rz(BB, 0),
        zB = Rz(BB, Cz(BB) - 1);
      return {
        lo: [Math.min(jB[0], zB[0]), Math.min(jB[1], zB[1]), Math.min(jB[2], zB[2])],
        hi: [Math.max(jB[0], zB[0]) + 1, Math.max(jB[1], zB[1]) + 1, Math.max(jB[2], zB[2]) + 1]
      }
    }

    function Zu(BB, jB, zB) {
      const QB = [jB[0] - BB[0], jB[1] - BB[1], jB[2] - BB[2]],
        nB = [(BB[0] + jB[0]) / 2, (BB[1] + jB[1]) / 2, (BB[2] + jB[2]) / 2],
        dB = [];
      for (let IB = 0; IB < 3; IB++) {
        const NB = (IB + 1) % 3,
          uB = (IB + 2) % 3;
        for (const UB of [BB[NB], jB[NB]])
          for (const aB of [BB[uB], jB[uB]]) {
            const BB = [0, 0, 0],
              jB = [zB, zB, zB];
            BB[IB] = nB[IB], jB[IB] = QB[IB] + zB, BB[NB] = UB, BB[uB] = aB, dB.push([BB, jB])
          }
      }
      return dB
    }
    const Au = "buildAFactory2Game:",
      Tu = [`${Au}colNorth`, `${Au}colEast`, `${Au}colSouth`, `${Au}colWest`];

    function Pu(BB, jB) {
      const [zB, QB, nB] = BB.baf2ColAt;
      return `baf2col ${zB} ${QB} ${nB} ${jB}`
    }

    function Wu(BB) {
      return function(BB) {
        if (!Number.isFinite(BB)) return "";
        const jB = Math.max(1, Math.round(BB));
        if (jB < 60) return `${jB}s`;
        const zB = jB % 60;
        return 0 === zB ? jB / 60 + "m" : `${Math.floor(jB/60)}m ${zB}s`
      }(function(BB) {
        const jB = IQ.FOCUS_BY_LASERS[Math.max(0, Math.min(4, BB))];
        return jB > 0 ? IQ.NOVA_FOCUS / jB : 1 / 0
      }(BB))
    }

    function eu(BB) {
      const jB = Math.abs(Math.round(BB));
      return jB < 1e3 ? Math.round(BB).toLocaleString("en-US") : jB < 1e6 ? `${jB<1e5?(BB/1e3).toFixed(1).replace(/\.0$/,""):Math.round(BB/1e3)}k` : `${(BB/1e6).toFixed(jB<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function lu(BB, jB, zB) {
      if (rQ(jB) >= 0) {
        const jB = function(BB, jB) {
          return BB.find((BB => {
            let {
              focus: zB
            } = BB;
            return zB[0] === jB[0] && zB[2] === jB[2] && (jB[1] === zB[1] || jB[1] === zB[1] - 1)
          }))
        }(BB, zB);
        if (!jB) return null;
        const nB = function(BB) {
          let jB = 0,
            zB = 0;
          for (let QB = 0; QB < 4; QB++) jB += BB.laser[QB] ? 1 : 0, zB += BB.live[QB] ? 1 : 0;
          return {
            lasers: jB,
            live: zB,
            focusPerS: IQ.FOCUS_BY_LASERS[zB],
            drawPerS: IQ.LASER_DRAW * zB
          }
        }({
          laser: jB.lasers,
          live: jB.live
        });
        if (0 === nB.lasers || "noLasers" === jB.state) return {
          key: `${Au}lookColNoLasers`
        };
        if (0 === nB.live) return {
          key: `${Au}lookColOff_blocked`
        };
        if (!(jB.on && nB.live > 0) && ("running" !== (QB = jB.state) && "slowed" !== QB)) return {
          key: `${Au}lookColOff_${jB.state}`
        };
        if (nB.live < nB.lasers) return {
          key: `${Au}lookColLasersSome`,
          params: {
            lasers: String(nB.lasers),
            live: String(nB.live)
          }
        };
        const dB = jB.open.filter(Boolean).length;
        return dB < 4 ? {
          key: `${Au}lookColLasersSpots`,
          params: {
            live: String(nB.live),
            spots: String(dB),
            time: Wu(nB.live)
          }
        } : {
          key: `${Au}lookColLasers`,
          params: {
            live: String(nB.live),
            time: Wu(nB.live)
          }
        }
      }
      var QB;
      if (!sQ(jB)) return null;
      const nB = function(BB, jB) {
        for (const zB of BB) {
          const BB = kQ(zB.focus, [jB[0], jB[1], jB[2]]);
          if (BB && BB.bI === IQ.LASER_D && zB.lasers[BB.dir]) return {
            entry: zB,
            dir: BB.dir
          }
        }
        return null
      }(BB, zB);
      if (!nB) return {
        key: `${Au}lookLaserNoCollider`
      };
      const {
        entry: dB,
        dir: IB
      } = nB;
      return dB.open[IB] ? dB.live[IB] ? {
        key: dB.on ? `${Au}lookLaserFiring` : `${Au}lookLaserReady`
      } : {
        key: `${Au}lookLaserBlocked`
      } : {
        key: `${Au}lookLaserClosed`
      }
    }

    function wu(BB, jB) {
      const zB = [];
      for (let QB = 1; QB < IQ.LASER_D; QB++) BB & 1 << jB * (IQ.LASER_D - 1) + QB - 1 && zB.push(QB);
      return zB
    }
    const xu = {
      firing: `${Au}colSlotFiring`,
      ready: `${Au}colSlotReady`,
      blocked: `${Au}colSlotBlocked`,
      empty: `${Au}colSlotEmpty`,
      closed: `${Au}colSlotClosed`
    };

    function Ku(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const dB = dn(BB),
        IB = dn(jB),
        NB = dn(zB),
        uB = NB.filter(Boolean).length,
        UB = dB.filter(Boolean).length,
        aB = [0, 1, 2, 3].map((BB => IB[BB] ? dB[BB] ? NB[BB] ? QB ? "firing" : "ready" : "blocked" : (BB => wu(nB, BB).length > 0)(BB) ? "blocked" : "empty" : "closed")),
        pB = aB.indexOf("blocked"),
        rB = pB < 0 && UB > 0 ? aB.indexOf("empty") : -1;
      return aB.map(((BB, jB) => {
        const zB = jB === pB ? {
          key: `${Au}colSlotClear`
        } : jB === rB ? {
          key: `${Au}colSlotAdd`,
          params: {
            time: Wu(Math.min(4, uB + 1))
          }
        } : null;
        return {
          dir: jB,
          tone: BB,
          title: {
            key: "blocked" !== BB || dB[jB] ? xu[BB] : `${Au}colSlotGap`,
            keys: {
              dir: Tu[jB]
            }
          },
          hint: zB
        }
      }))
    }

    function Cu(BB) {
      var jB;
      return "noPower" === BB.baf2ColState && BB.baf2ColRxState ? tu({
        baf2RxState: BB.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (jB = BB.baf2ColRxHeat) && void 0 !== jB ? jB : 0
      }) : null
    }

    function cu(BB) {
      const jB = dn(BB.baf2ColSpots).filter(Boolean).length,
        zB = dn(BB.baf2ColLive);
      let QB = 0,
        nB = 0;
      return dn(BB.baf2ColLasers).forEach(((BB, jB) => {
        BB && (QB++, nB += zB[jB] ? 0 : 1)
      })), nB > 0 ? {
        key: `${Au}colSubSome`,
        params: {
          blocked: String(nB),
          lasers: String(QB)
        }
      } : jB < 4 ? {
        key: `${Au}colSubSpots`,
        params: {
          lasers: String(QB),
          spots: String(jB)
        }
      } : {
        key: `${Au}colSub`,
        params: {
          lasers: String(QB)
        }
      }
    }

    function bu(BB) {
      const jB = Cu(BB);
      if ("idle" === BB.baf2ColRxState && jB) return {
        key: `${Au}colState_noPowerIdle`
      };
      if (jB) return {
        key: `${Au}colState_noPowerReactor`,
        keys: {
          state: jB.label
        }
      };
      if ("noInput" !== BB.baf2ColState) return {
        key: `${Au}colState_${BB.baf2ColState}`
      };
      const zB = String(Math.max(0, IQ.NOVA_SA - BB.baf2ColSa)),
        QB = String(Math.max(0, IQ.NOVA_GD - BB.baf2ColGd));
      return "0" !== zB && "0" !== QB ? {
        key: `${Au}colState_noInput`,
        params: {
          sa: zB,
          gd: QB
        }
      } : "0" !== zB ? {
        key: `${Au}colState_noStarAlloy`,
        params: {
          sa: zB
        }
      } : "0" !== QB ? {
        key: `${Au}colState_noGlowDust`,
        params: {
          gd: QB
        }
      } : {
        key: `${Au}colState_running`
      }
    }

    function vu(BB) {
      return BB.baf2ColP < 0 ? `${Au}colNext` : function(BB) {
        const jB = BB.baf2ColState;
        return BB.baf2ColP >= 0 && ("blocked" === jB || "noLasers" === jB || "noPower" === jB)
      }(BB) ? `${Au}colStalled` : null === Ru(BB) ? `${Au}colMaking` : `${Au}colNovaIn`
    }

    function Ru(BB) {
      if (BB.baf2ColP < 0 || BB.baf2ColWant <= 0) return null;
      const jB = BB.baf2ColFocusPerS * Math.min(1, BB.baf2ColDraw / BB.baf2ColWant);
      return jB > 0 ? Math.max(0, IQ.NOVA_FOCUS - BB.baf2ColP) / jB : null
    }

    function Ou(BB, jB) {
      const zB = [];
      for (let QB = 1; QB <= 3; QB++) {
        const nB = [BB[0], BB[1] - QB, BB[2]];
        if (!jB(nB)) return zB;
        zB.push(nB)
      }
      return []
    }

    function BU(BB, jB) {
      const zB = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let QB = 0; QB < 4; QB++) {
        const nB = QB,
          dB = yQ(BB.focus, nB, IQ.LASER_D);
        if (BB.lasers[QB] || !BB.open[QB] || !jB(dB)) continue;
        const IB = [];
        for (let zB = 1; zB < IQ.LASER_D; zB++) {
          const QB = yQ(BB.focus, nB, zB);
          jB(QB) || IB.push(QB)
        }
        zB.supports.push(...Ou(dB, jB)), 0 === IB.length ? zB.free.push(dB) : (zB.blocked.push(dB), zB.gaps.push(...IB))
      }
      return zB
    }
    const jU = IQ.LASER_D - .25,
      zU = 4,
      QU = 2,
      nU = 16;
    const dU = {
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
        blendMode: TN.d.Standard,
        soft: !0
      },
      IU = {
        green: dU,
        pink: {
          ...dU,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function NU(BB, jB) {
      const zB = {
        ...jB.params
      };
      for (const [nB, dB] of Object.entries(null !== (QB = jB.keys) && void 0 !== QB ? QB : {})) {
        var QB;
        zB[nB] = BB(dB)
      }
      return zB
    }
    const uU = "buildAFactory2Game:",
      UU = 2 * IQ.LASER_D + 1,
      aU = IQ.LASER_D;

    function pU(BB) {
      return BB(`${uU}colFocusTip`, {
        need: eu(IQ.NOVA_FOCUS)
      })
    }

    function rU(BB, jB) {
      return BB(jB.key, NU(BB, jB))
    }

    function sU(BB) {
      const jB = BB.getStatus();
      return {
        status: jB,
        entry: jB ? BB.entryAtRoot(jB.baf2ColAt) : void 0
      }
    }

    function JU(BB, jB) {
      return {
        left: 100 * (aU + BB) / UU + "%",
        top: 100 * (aU + jB) / UU + "%"
      }
    }

    function mU(BB) {
      let {
        status: jB,
        entry: zB
      } = BB;
      const QB = dn(jB.baf2ColLasers),
        nB = dn(jB.baf2ColSpots),
        dB = dn(jB.baf2ColLive),
        IB = !0 === (null === zB || void 0 === zB ? void 0 : zB.on),
        NB = IQ.LASER_D,
        uB = [];
      for (let sB = 0; sB < 4; sB++) {
        const [BB, , jB] = mQ[sB];
        if (dB[sB]) {
          const zB = 100 * (NB - 1) / UU,
            QB = BB + jB > 0 ? 100 * (aU + 1) / UU : 100 * (aU - (NB - 1)) / UU,
            nB = 100 * (aU + .35) / UU,
            dB = 30 / UU,
            UB = 0 !== BB ? {
              left: `${QB}%`,
              width: `${zB}%`,
              top: `${nB}%`,
              height: `${dB}%`
            } : {
              top: `${QB}%`,
              height: `${zB}%`,
              left: `${nB}%`,
              width: `${dB}%`
            };
          uB.push((0, Hd.jsx)("i", {
            className: Sn()("Baf2ColDiagramBeam", {
              Off: !IB
            }),
            style: UB
          }, `beam${sB}`))
        }
        const zB = QB[sB] ? "Baf2ColDiagramLaser" : nB[sB] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        uB.push((0, Hd.jsx)("i", {
          className: zB,
          style: JU(BB * NB, jB * NB)
        }, `spot${sB}`))
      }
      for (let sB = 0; sB < 4; sB++) {
        if (QB[sB] || !nB[sB]) continue;
        const [BB, , zB] = mQ[sB];
        for (const QB of wu(null !== (UB = jB.baf2ColGaps) && void 0 !== UB ? UB : 0, sB)) {
          var UB;
          uB.push((0, Hd.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: JU(BB * QB, zB * QB)
          }, `gap${sB},${QB}`))
        }
      }
      for (const [sB, , JB] of null !== (aB = null === zB || void 0 === zB ? void 0 : zB.blockers) && void 0 !== aB ? aB : []) {
        var aB, pB, rB;
        const BB = sB - (null !== (pB = null === zB || void 0 === zB ? void 0 : zB.focus[0]) && void 0 !== pB ? pB : 0),
          jB = JB - (null !== (rB = null === zB || void 0 === zB ? void 0 : zB.focus[2]) && void 0 !== rB ? rB : 0);
        uB.push((0, Hd.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: JU(BB, jB)
        }, `block${BB},${jB}`))
      }
      return (0, Hd.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [uB, (0, Hd.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function yU(BB) {
      let {
        status: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)(), QB = dn(jB.baf2ColLive).filter(Boolean).length;
      return (0, Hd.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, Hd.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: pU(zB),
          children: zB(`${uU}colLadder`)
        }), (0, Hd.jsx)("ul", {
          children: [1, 2, 3, 4].map((BB => (0, Hd.jsx)("li", {
            className: Sn()({
              On: BB === QB
            }),
            children: zB(`${uU}colLadderChip`, {
              lasers: String(BB),
              time: Wu(BB)
            })
          }, BB)))
        })]
      })
    }

    function kU(BB) {
      let {
        item: jB,
        DN: zB,
        need: QB,
        cap: nB
      } = BB;
      const {
        t: dB
      } = (0, fn.D)(), IB = Math.min(zB, QB);
      return (0, Hd.jsxs)("li", {
        className: Sn()("Baf2ColTile", {
          Short: zB < QB
        }),
        children: [(0, Hd.jsx)(GU, {
          item: jB
        }), (0, Hd.jsx)("b", {
          className: "Baf2ColTileValue",
          children: dB(`${uU}colOutOf`, {
            amount: String(IB),
            cap: String(QB)
          })
        }), (0, Hd.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, Hd.jsx)("i", {
            style: {
              width: 100 * IB / QB + "%"
            }
          })
        }), zB > QB && (0, Hd.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: dB(`${uU}colIntakeHeld`, {
            amount: String(zB),
            cap: String(nB)
          })
        })]
      })
    }

    function GU(BB) {
      let {
        item: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)();
      return (0, Hd.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, Hd.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, Hd.jsx)(Dn.c, {
            itemName: jB,
            amount: 0
          })
        }), (0, Hd.jsx)("span", {
          className: "Baf2ColTileName",
          children: Id(zB, jB)
        })]
      })
    }

    function LU(BB) {
      switch (BB.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function gU(BB) {
      var jB, zB, nB;
      let {
        store: dB,
        close: IB
      } = BB;
      const {
        t: NB
      } = (0, fn.D)(), uB = xI(), {
        status: UB,
        entry: aB
      } = function(BB) {
        const [jB, zB] = (0, QB.useState)((() => sU(BB)));
        return (0, QB.useEffect)((() => (zB(sU(BB)), BB.subscribe((() => {
          zB(sU(BB))
        })))), [BB]), jB
      }(dB), [pB, rB] = (0, QB.useState)(null), sB = null === UB || void 0 === UB ? void 0 : UB.baf2ColHold;
      (0, QB.useEffect)((() => {
        rB(null)
      }), [sB]);
      const JB = (0, QB.useRef)({
          p: -1,
          n: 0
        }),
        mB = null !== (jB = null === UB || void 0 === UB ? void 0 : UB.baf2ColP) && void 0 !== jB ? jB : -1;
      mB < JB.current.p && JB.current.n++, JB.current.p = mB;
      const yB = (0, QB.useRef)(null),
        [kB] = (0, QB.useState)((() => {
          return (BB = dB.heldAtOpen()) === UQ || BB === aQ ? {
            key: `${Au}colBeltItIn`,
            item: BB
          } : null;
          var BB
        }));
      if (!UB) return null;
      const GB = UB.baf2ColMember,
        LB = UB.baf2ColP >= 0,
        gB = function(BB, jB) {
          if (BB.baf2ColP >= 0 && BB.baf2ColDraw > 0) {
            const jB = BB.baf2ColWant > 0 ? Math.min(1, BB.baf2ColDraw / BB.baf2ColWant) : 0;
            return {
              focus: BB.baf2ColFocusPerS * jB,
              draw: BB.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === BB.baf2ColState && jB && jB.draw > 0 ? {
            ...jB,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(UB, yB.current);
      yB.current = gB.draw > 0 ? gB : null;
      const tB = "slowed" === UB.baf2ColState || "noPower" === UB.baf2ColState,
        SB = Ru(UB),
        MB = null !== pB && void 0 !== pB ? pB : UB.baf2ColHold,
        EB = function(BB) {
          var jB, zB;
          return "idle" === BB.baf2ColRxState ? null : null !== (jB = null === (zB = Cu(BB)) || void 0 === zB ? void 0 : zB.fix) && void 0 !== jB ? jB : null
        }(UB),
        iB = null === EB && null === kB ? function(BB) {
          var jB;
          const zB = BB.baf2ColSentTo;
          if (!zB) return null;
          const QB = null !== (jB = BB.baf2ColSentHeld) && void 0 !== jB ? jB : null;
          return {
            key: null === QB ? `${Au}colNovaSentToMachine` : `${Au}colNovaSentTo`,
            target: zB,
            DN: QB
          }
        }(UB) : null,
        qB = LB ? NB(`${uU}colFocusOf`, {
          focus: eu(UB.baf2ColP),
          need: eu(IQ.NOVA_FOCUS)
        }) : null;
      return (0, Hd.jsx)(iI.d, {
        close: IB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, Hd.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, Hd.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Hd.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, Hd.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Hd.jsx)(Dn.c, {
                  itemName: NQ,
                  amount: 0
                })
              }), (0, Hd.jsxs)("div", {
                children: [(0, Hd.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: Id(NB, NQ)
                }), (0, Hd.jsx)("p", {
                  children: rU(NB, cu(UB))
                })]
              })]
            }), (0, Hd.jsx)(qI.j, {
              onClick: IB
            })]
          }), (0, Hd.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, Hd.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, Hd.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, Hd.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: NB(vu(UB), {
                    time: null === SB ? "" : Ed(NB, SB)
                  })
                }), (0, Hd.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, Hd.jsx)("i", {
                    style: {
                      width: (LB ? 100 * UB.baf2ColP / IQ.NOVA_FOCUS : 0) + "%"
                    }
                  }, JB.current.n)
                }), (0, Hd.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, Hd.jsxs)("span", {
                    title: pU(NB),
                    children: [(0, Hd.jsx)("b", {
                      children: eu(gB.focus)
                    }), " ", NB(`${uU}colFocusPerS`)]
                  }), (0, Hd.jsxs)("span", {
                    className: Sn()("Baf2ColDraw", {
                      Short: tB
                    }),
                    children: [(0, Hd.jsx)(Hn.c, {
                      name: "bolt"
                    }), tB ? NB(`${uU}colDrawOf`, {
                      draw: eu(UB.baf2ColDraw),
                      want: eu(UB.baf2ColWant)
                    }) : NB(`${uU}colPowerPerS`, {
                      rate: eu(gB.draw)
                    })]
                  }), null !== qB && (0, Hd.jsx)("span", {
                    className: "Soft",
                    children: qB
                  })]
                })]
              }), (0, Hd.jsx)("p", {
                className: Sn()("Baf2ColState", LU(UB)),
                children: rU(NB, bu(UB))
              }), null !== EB && (0, Hd.jsx)("p", {
                className: "Baf2ColStateFix",
                children: NB(EB)
              }), null === EB && null !== kB && (0, Hd.jsx)("p", {
                className: "Baf2ColStateFix",
                children: NB(kB.key, {
                  item: Id(NB, kB.item)
                })
              }), iB && (0, Hd.jsx)("p", {
                className: "Baf2ColStateFix",
                children: NB(iB.key, {
                  target: Id(NB, iB.target),
                  amount: String(null !== (zB = iB.DN) && void 0 !== zB ? zB : 0)
                })
              }), (0, Hd.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, Hd.jsx)(kU, {
                  item: UQ,
                  DN: UB.baf2ColSa,
                  need: IQ.NOVA_SA,
                  cap: IQ.SA_CAP
                }), (0, Hd.jsx)(kU, {
                  item: aQ,
                  DN: UB.baf2ColGd,
                  need: IQ.NOVA_GD,
                  cap: IQ.GD_CAP
                }), (0, Hd.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, Hd.jsx)(GU, {
                    item: "Nova Matter"
                  }), (0, Hd.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: NB(`${uU}colNovaHeld`, {
                      amount: String(UB.baf2ColOut),
                      cap: String(IQ.OUT_CAP)
                    })
                  }), GB && (0, Hd.jsx)(qI.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === UB.baf2ColOut,
                    onClick: () => {
                      uB.send(Pu(UB, "take"))
                    },
                    children: NB(`${uU}colTake`)
                  })]
                })]
              }), GB && (0, Hd.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": MB,
                className: Sn()("Baf2ColHold", {
                  On: MB
                }),
                onClick: BB => {
                  BB.detail > 0 && BB.currentTarget.blur(), rB(!MB), uB.send(Pu(UB, "hold " + (MB ? 0 : 1)))
                },
                children: [(0, Hd.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, Hd.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, Hd.jsx)("b", {
                    children: NB(`${uU}colHold`)
                  }), (0, Hd.jsx)("span", {
                    children: NB(`${uU}colHoldNote`)
                  })]
                })]
              })]
            }), (0, Hd.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, Hd.jsx)(mU, {
                status: UB,
                entry: aB
              }), (0, Hd.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Ku(UB.baf2ColLasers, UB.baf2ColSpots, UB.baf2ColLive, gB.beamsOn, null !== (nB = UB.baf2ColGaps) && void 0 !== nB ? nB : 0).map((BB => (0, Hd.jsxs)("li", {
                  className: BB.tone,
                  children: [(0, Hd.jsx)("b", {
                    children: rU(NB, BB.title)
                  }), null !== BB.hint && (0, Hd.jsx)("span", {
                    children: rU(NB, BB.hint)
                  })]
                }, BB.dir)))
              }), (0, Hd.jsx)(yU, {
                status: UB
              })]
            })]
          })]
        })
      })
    }
    const tU = "buildAFactory2Game:",
      SU = 36e5,
      MU = 864e5;

    function EU(BB, jB, zB) {
      return Math.max(0, Math.ceil((BB + jB - Math.max(zB, BB)) / 1e3))
    }

    function iU(BB) {
      return BB.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function qU(BB) {
      return "Homestead" === BB
    }

    function fU(BB) {
      return function(BB) {
        let jB = 0;
        for (const zB of BB) {
          const BB = /^Island ([1-9]\d{0,5})$/.exec(zB);
          BB && (jB = Math.max(jB, Number(BB[1])))
        }
        return `Island ${jB+1}`
      }(BB.map((BB => BB.baf2IslandName)))
    }

    function oU(BB, jB) {
      return function(BB) {
        return `${tU}islandsBlocked${BB[0].toUpperCase()}${BB.slice(1)}`
      }("degraded" === BB && 0 === jB ? "stuck" : BB)
    }

    function HU(BB) {
      return BB.filter((BB => {
        var jB;
        return !BB.baf2IslandActive && void 0 === BB.baf2IslandUnreadable && void 0 === (null === (jB = BB.baf2IslandCoop) || void 0 === jB ? void 0 : jB.baf2CoopState)
      })).length
    }

    function DU(BB) {
      return "coopMoving" === BB || "coopUnreachable" === BB
    }

    function FU(BB, jB) {
      const zB = jB > 0;
      return {
        change: null === BB && !zB,
        switch: (null === BB || "degraded" === BB || DU(BB)) && !zB,
        rename: "loading" !== BB && "degraded" !== BB && "stuck" !== BB
      }
    }

    function YU(BB, jB) {
      return void 0 === BB || "corrupt" === BB && jB
    }
    const VU = AI;

    function hU(BB, jB, zB) {
      if (null !== BB && void 0 !== BB && BB.untilGone) {
        var QB;
        return !("dismiss" === BB.untilGone && void 0 === (null === (QB = jB.baf2IslandCoop) || void 0 === QB ? void 0 : QB.baf2CoopState)) && zB - BB.atMs < 32500
      }
      return void 0 !== BB && zB - BB.atMs < VU && jB.baf2IslandName === BB.from
    }
    const XU = AI;

    function ZU(BB) {
      return "core" === (null === BB || void 0 === BB ? void 0 : BB.kind) ? BB.core : "islands" === (null === BB || void 0 === BB ? void 0 : BB.kind) ? BB.backToCore : void 0
    }

    function AU(BB) {
      return `\0${BB}\0`
    }

    function TU(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const QB = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const dB of Object.keys(zB)) QB[dB] = AU(dB);
      let nB = Object.keys(QB).length > 0 ? BB(jB, QB) : BB(jB);
      for (const [dB, IB] of Object.entries(zB)) nB = nB.split(AU(dB)).join(IB);
      return nB
    }

    function PU(BB, jB) {
      return BB ? jB ? "enabled" : "disabled" : "hidden"
    }
    const WU = {
      removed: `${tU}islandsCoopRemoved`,
      deleted: `${tU}islandsCoopDeleted`,
      notReady: `${tU}islandsCoopNotReady`,
      gone: `${tU}islandsCoopGone`
    };

    function eU(BB) {
      var jB;
      return "member" !== (null === (jB = BB.baf2IslandCoop) || void 0 === jB ? void 0 : jB.baf2CoopRole) && "newer" !== BB.baf2IslandUnreadable
    }

    function lU(BB, jB, zB, QB, nB, dB) {
      const IB = BB.baf2IslandActive,
        NB = BB.baf2IslandUnreadable,
        uB = BB.baf2IslandCoop,
        UB = function(BB, jB, zB) {
          return {
            switch: BB.switch && void 0 === jB,
            delete: BB.change && YU(jB, zB)
          }
        }(jB, NB, QB),
        aB = IB && void 0 !== uB && void 0 === uB.baf2CoopState && "coopUnreachable" === dB,
        pB = {
          switch: PU((!IB || aB) && void 0 === NB, aB || UB.switch),
          switchLabel: aB ? "tryAgain" : "switch",
          rename: PU(!0, jB.rename),
          delete: PU(!IB, UB.delete),
          deleteWaits: !IB && YU(NB, QB),
          people: PU(void 0 !== BB.baf2IslandInvitable || nB && IB && void 0 === NB && void 0 === uB, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        rB = !IB && UB.delete;
      if (void 0 === uB) return zB ? {
        ...pB,
        delete: PU(!IB, !1),
        deleteWaits: !1,
        note: rB ? {
          key: `${tU}islandsCoopKeepOwn`
        } : null
      } : pB;
      const sB = uB.baf2CoopState,
        JB = uB.baf2CoopMembers.length > 1,
        mB = {
          ...pB,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== sB && "member" === uB.baf2CoopRole) return {
        ...mB,
        dismiss: PU(!0, jB.rename),
        note: {
          key: WU[sB],
          names: {
            owner: uB.baf2CoopOwner
          }
        }
      };
      if (void 0 !== sB) {
        let BB = {
          key: `${tU}islandsCoopOwnLost`
        };
        return rB && JB ? BB = {
          key: `${tU}islandsCoopDeleteMembers`
        } : rB && zB && (BB = {
          key: `${tU}islandsCoopKeepOwn`
        }), {
          ...mB,
          delete: PU(!IB, UB.delete && !JB && !zB),
          deleteWaits: pB.deleteWaits && !JB && !zB,
          note: BB
        }
      }
      if ("member" === uB.baf2CoopRole) return {
        ...pB,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: PU(!0, IB ? jB.switch : jB.rename)
      };
      const yB = uB.baf2CoopManageHere;
      let kB = null;
      var GB;
      yB || IB ? rB && JB ? kB = {
        key: `${tU}islandsCoopDeleteMembers`
      } : rB && zB && (kB = {
        key: `${tU}islandsCoopKeepOwn`
      }) : kB = {
        key: null !== (GB = uB.baf2CoopLeft) && void 0 !== GB && GB.length ? `${tU}islandsCoopManageThereClaim` : `${tU}islandsCoopManageThere`
      };
      return {
        ...pB,
        rename: PU(!0, jB.rename && yB),
        delete: PU(!IB, UB.delete && !JB && !zB),
        deleteWaits: pB.deleteWaits && !JB && !zB,
        people: "enabled",
        peopleLabel: "players",
        unshare: PU(yB && IB && !JB, jB.change),
        remove: yB,
        note: kB
      }
    }

    function wU(BB) {
      var jB;
      const zB = BB.baf2IslandCoop;
      if ("owner" !== (null === zB || void 0 === zB ? void 0 : zB.baf2CoopRole) || void 0 !== zB.baf2CoopState || null === (jB = zB.baf2CoopLeft) || void 0 === jB || !jB.length) return null;
      const QB = BB.baf2IslandActive && zB.baf2CoopManageHere;
      return {
        left: zB.baf2CoopLeft,
        claim: QB,
        goThere: !QB && zB.baf2CoopManageHere
      }
    }

    function xU(BB) {
      return BB.baf2CoopMembers.length >= BB.baf2CoopMax
    }

    function KU(BB, jB, zB) {
      return void 0 !== BB && jB < BB.answer && zB - BB.atMs < VU
    }
    const CU = "buildAFactory2Game:";

    function cU(BB, jB) {
      return {
        onKeyDown: zB => {
          zB.stopPropagation(), zB.nativeEvent.isComposing || 229 === zB.nativeEvent.keyCode || ("Enter" === zB.key ? (zB.preventDefault(), BB()) : "Escape" === zB.key && (zB.preventDefault(), jB()))
        }
      }
    }

    function bU(BB) {
      return {
        onKeyDown: jB => {
          "Escape" !== jB.key || jB.nativeEvent.isComposing || (jB.preventDefault(), jB.stopPropagation(), BB())
        }
      }
    }

    function vU(BB) {
      BB.currentTarget.select()
    }

    function RU(BB, jB) {
      (0, QB.useEffect)((() => {
        var zB;
        BB && (null === (zB = jB.current) || void 0 === zB || zB.scrollIntoView({
          block: "nearest"
        }))
      }), [BB, jB])
    }

    function OU(BB) {
      const [jB, zB] = (0, QB.useState)(null);
      return (0, QB.useEffect)((() => {
        const jB = document.querySelector(".UiRequests"),
          QB = BB.current;
        if (!jB || !QB || "undefined" === typeof ResizeObserver) return;
        const nB = () => {
          const BB = jB.getBoundingClientRect(),
            nB = QB.getBoundingClientRect(),
            dB = QB.parentElement,
            IB = dB && parseFloat(getComputedStyle(dB).paddingTop) || 0,
            NB = function(BB, jB, zB, QB) {
              if (!BB || BB.height <= 0 || BB.right <= jB.left || BB.left >= jB.right) return null;
              const nB = Math.max(QB, BB.bottom + 8);
              return {
                marginTop: Math.round(nB - QB),
                maxHeight: Math.max(0, Math.floor(zB - nB - QB))
              }
            }(BB, nB, window.innerHeight, IB);
          zB((BB => (null === BB || void 0 === BB ? void 0 : BB.marginTop) === (null === NB || void 0 === NB ? void 0 : NB.marginTop) && (null === BB || void 0 === BB ? void 0 : BB.maxHeight) === (null === NB || void 0 === NB ? void 0 : NB.maxHeight) ? BB : NB))
        };
        nB();
        const dB = new ResizeObserver(nB);
        return dB.observe(jB), window.addEventListener("resize", nB), () => {
          dB.disconnect(), window.removeEventListener("resize", nB)
        }
      }), [BB]), jB
    }

    function Ba() {
      (0, QB.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function ja(BB) {
      (0, QB.useEffect)((() => {
        var jB;
        null === (jB = BB.current) || void 0 === jB || jB.focus()
      }), [BB])
    }

    function za(BB) {
      const [jB, zB] = (0, QB.useState)(Date.now);
      return (0, QB.useEffect)((() => {
        const jB = window.setInterval((() => {
          zB(Date.now())
        }), BB);
        return () => {
          window.clearInterval(jB)
        }
      }), [BB]), jB
    }

    function Qa(BB) {
      let {
        tier: jB,
        t: zB
      } = BB;
      const {
        kind: QB,
        short: nB
      } = yB(jB), dB = sB(jB, JB), IB = zB(`${CU}${dB.key}`, {
        ...dB.params,
        name: zB(`${CU}${kB(jB).nameKey}`)
      });
      return (0, Hd.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, Hd.jsx)("span", {
          className: Sn()("Baf2IslandTierPip", {
            Stage: "tier" !== QB
          }),
          "aria-hidden": "true",
          children: nB
        }), IB]
      })
    }

    function na(BB) {
      let {
        note: jB,
        className: zB,
        t: QB
      } = BB;
      return (0, Hd.jsx)("p", {
        className: Sn()("Baf2IslandNote", zB),
        children: TU(QB, jB.key, jB.names, jB.params)
      })
    }
    const da = "buildAFactory2Game:";

    function Ia(BB) {
      let {
        message: jB,
        arrivedAtMs: zB,
        close: nB,
        leave: dB
      } = BB;
      const IB = xI(),
        {
          t: NB
        } = (0, fn.D)(),
        uB = za(1e3),
        UB = (0, QB.useRef)(null);
      Ba(), (0, QB.useEffect)((() => {
        var BB;
        null === (BB = UB.current) || void 0 === BB || BB.focus()
      }), []);
      const aB = EU(zB, jB.baf2TransferInMs, uB),
        pB = zB + jB.baf2TransferInMs - 1e3,
        [rB, sB] = (0, QB.useState)(null);
      (0, QB.useEffect)((() => {
        const BB = window.setTimeout((() => {
          sB(pB)
        }), Math.max(0, pB - Date.now()));
        return () => {
          window.clearTimeout(BB)
        }
      }), [pB]);
      const JB = rB === pB || uB >= pB,
        mB = jB.baf2TransferIsland,
        yB = jB.baf2TransferOwner;
      return (0, Hd.jsx)(iI.d, {
        close: nB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Hd.jsxs)("section", {
          ref: UB,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, Hd.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Hd.jsxs)("div", {
              children: [(0, Hd.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === yB ? TU(NB, `${da}islandsTransferOwn`, {
                  island: mB
                }) : TU(NB, `${da}islandsTransfer`, {
                  island: mB,
                  owner: yB
                })
              }), (0, Hd.jsx)("p", {
                children: JB ? NB(`${da}islandsTransferNow`) : NB(`${da}islandsTransferIn`, {
                  time: Ed(NB, aB)
                })
              })]
            }), (0, Hd.jsx)(qI.j, {
              ariaLabel: NB(`${da}islandsClose`),
              onClick: nB
            })]
          }), !JB && (0, Hd.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, Hd.jsx)("p", {
              className: "Baf2TransferNote",
              children: NB(`${da}islandsTransferNote`)
            }), (0, Hd.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, Hd.jsx)(qI.f, {
                onClick: () => {
                  IB.send("baf2coopstay"), dB()
                },
                children: NB(`${da}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var Na = zB(1471),
      ua = zB(1181),
      Ua = zB.n(ua);
    const aa = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const pa = "buildAFactory2Game:",
      ra = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function sa(BB, jB, zB) {
      return void 0 === jB ? zB : "string" === typeof jB ? jB : Array.isArray(jB) ? jB.map((jB => "string" === typeof jB ? jB : "translationKey" in jB ? BB(jB.translationKey) : "")).join("") : BB(jB.translationKey)
    }

    function Ja(BB) {
      const jB = {};
      for (const [zB, QB] of Object.entries(null !== BB && void 0 !== BB ? BB : {})) jB[zB] = QB < 0 ? Md(QB) : QB.toLocaleString("en-US");
      return jB
    }

    function ma(BB, jB) {
      const zB = jB ? "touch" : "mouse";
      return {
        use: BB(`${pa}lookUse_${zB}`),
        Use: BB(`${pa}lookUseStart_${zB}`)
      }
    }
    const ya = (0, QB.memo)((function(BB) {
      let {
        item: jB
      } = BB;
      return (0, Hd.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, Hd.jsx)(Dn.c, {
          itemName: jB,
          amount: 0
        })
      })
    }));

    function ka(BB) {
      let {
        label: jB,
        percent: zB,
        progress: QB
      } = BB;
      return (0, Hd.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, Hd.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${jB}: ${QB}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": zB,
          children: (0, Hd.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${zB}%`
            }
          })
        }), (0, Hd.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: QB
        })]
      })
    }

    function Ga(BB) {
      let {
        chips: jB
      } = BB;
      return (0, Hd.jsx)("span", {
        className: "Baf2QuestChips",
        children: jB.map((BB => {
          let [jB, zB, QB] = BB;
          const nB = zB >= QB;
          return (0, Hd.jsxs)("span", {
            className: Sn()("Baf2QuestChip", {
              Met: nB
            }),
            children: [(0, Hd.jsx)(ya, {
              item: jB
            }), (0, Hd.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: nB ? `\u2713${QB}` : `${zB}/${QB}`
            })]
          }, jB)
        }))
      })
    }

    function La(BB, jB) {
      const {
        key: zB,
        params: QB
      } = sB(jB, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return BB(`${pa}${zB}`, {
        ...QB,
        name: BB(`${pa}${kB(jB).nameKey}`)
      })
    }

    function ga(BB) {
      let {
        core: jB,
        t: zB
      } = BB;
      const [QB, nB] = jB, dB = nB > 0 ? Math.floor(100 * QB / nB) : 100;
      return (0, Hd.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": zB(`${pa}questCoreLabel`, {
          have: String(QB),
          need: String(nB)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": dB,
        children: [(0, Hd.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: zB(`${pa}questCore`, {
            percent: String(dB)
          })
        }), (0, Hd.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, Hd.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${dB}%`
            }
          })
        })]
      })
    }

    function ta(BB) {
      let {
        rows: jB,
        t: zB
      } = BB;
      const QB = jB.filter((BB => BB.done)).length;
      return (0, Hd.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": zB(`${pa}questStepsProgress`, {
          done: String(QB),
          total: String(jB.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": jB.length,
        "aria-valuenow": QB,
        children: jB.map((BB => (0, Hd.jsx)("span", {
          className: Sn()("Baf2QuestSegment", {
            Done: BB.done,
            Current: BB.current
          })
        }, BB.id)))
      })
    }
    const Sa = (0, QB.memo)(Ea, Ma);

    function Ma(BB, jB) {
      const zB = zB => BB.view.itemNames[zB] === jB.view.itemNames[zB];
      return BB.t === jB.t && BB.extra === jB.extra && (null === BB.row.item || zB(BB.row.item)) && BB.row.madeFor.every(zB) && BB.row.also.every(zB) && Ua()(BB.row, jB.row)
    }

    function Ea(BB) {
      let {
        row: jB,
        view: zB,
        t: QB,
        extra: nB
      } = BB;
      const {
        isTouchScreen: dB
      } = (0, Ln.m)(["isTouchScreen"]), IB = jB.item ? function(BB, jB, zB) {
        return 1 !== zB && aa.has(BB) ? qn(jB) : null
      }(jB.key, jB.item, jB.total) : null, NB = IB ? QB(IB) : jB.item ? sa(QB, zB.itemNames[jB.item], jB.item) : "", uB = jB.also.map((BB => sa(QB, zB.itemNames[BB], BB))), UB = uB.join(", "), aB = function(BB, jB) {
        var zB;
        return jB.length < 2 ? null !== (zB = jB[0]) && void 0 !== zB ? zB : "" : BB(`${pa}listAnd`, {
          rest: jB.slice(0, -1).join(BB(`${pa}listComma`)),
          last: jB[jB.length - 1]
        })
      }(QB, [NB, ...uB]), pB = QB(`${pa}${jB.key}`, {
        ...ma(QB, dB),
        ...Ja(jB.params),
        item: NB,
        also: UB,
        itemList: aB,
        total: String(jB.total)
      }), [rB, ...sB] = pB.split("\n"), JB = jB.total > 1 && !jB.done && !jB.away;
      return (0, Hd.jsxs)("li", {
        className: Sn()("Baf2QuestStep", {
          Done: jB.done,
          Current: jB.current,
          JustFinished: jB.justFinished,
          Away: jB.away
        }),
        children: [!jB.done && null !== jB.item && (0, Hd.jsx)(ya, {
          item: jB.item
        }), (jB.done || null === jB.item) && (0, Hd.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: jB.done ? "\u2713" : "\u25cb"
        }), (0, Hd.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Hd.jsx)("strong", {
            children: rB
          }), sB.length > 0 && (0, Hd.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: sB.join(" ")
          }), !jB.done && jB.madeFor.length > 0 && (0, Hd.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: QB("buildAFactory2Game:questRowFor", {
              items: jB.madeFor.map((BB => sa(QB, zB.itemNames[BB], BB))).join(" \u2192 ")
            })
          }), JB && (0, Hd.jsx)(ka, {
            label: rB,
            percent: Math.round(100 * jB.amount / jB.total),
            progress: `${jB.amount.toLocaleString("en-US")}/${jB.total.toLocaleString("en-US")}`
          }), !jB.done && !jB.away && jB.chips && jB.chips.length > 0 && (0, Hd.jsx)(Ga, {
            chips: jB.chips
          }), nB]
        })]
      })
    }
    const ia = "buildAFactory2Game:",
      qa = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      fa = {
        on: `${ia}tutorialButtonOn`,
        hud: `${ia}tutorialButtonHud`,
        off: `${ia}tutorialButtonOff`
      },
      oa = {
        on: `${ia}tutorialPickedOn`,
        hud: `${ia}tutorialPickedHud`,
        off: `${ia}tutorialPickedOff`
      };
    class Ha {
      constructor(BB, jB, zB) {
        this.commands = BB, this.quests = jB, this.toasts = zB
      }
      next() {
        const BB = function(BB) {
            return FB[(FB.indexOf(BB) + 1) % FB.length]
          }(this.quests.get().tutorial),
          jB = this.quests.setTutorial(BB);
        this.commands.send(`baf2tutorial ${BB} ${jB}`), this.toasts.show({
          baf2ToastText: [(0, VB.ke)({
            translationKey: oa[BB]
          }, VB.E.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function Da(BB, jB) {
      let [zB, QB] = jB;
      return BB(`${pa}${zB}`, Ja(QB))
    }

    function Fa(BB) {
      let [jB, zB] = BB;
      return jB + JSON.stringify(zB)
    }

    function Ya(BB) {
      let {
        goal: jB,
        t: zB
      } = BB;
      return jB ? (0, Hd.jsx)("span", {
        className: "Baf2BookGoal",
        children: zB(`${pa}${jB}`)
      }) : null
    }

    function Va(BB) {
      let {
        view: jB,
        t: zB
      } = BB;
      if (!jB.name) return null;
      const QB = xn(jB.rows);
      return (0, Hd.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, Hd.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: zB(`${pa}currentQuest`)
        }), (0, Hd.jsx)("strong", {
          className: "Baf2BookTitle",
          children: Da(zB, jB.name)
        }), (0, Hd.jsx)(Ya, {
          goal: jB.goal,
          t: zB
        }), QB.length > 1 && (0, Hd.jsx)(ta, {
          rows: QB,
          t: zB
        }), (0, Hd.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: jB.rows.map((BB => (0, Hd.jsx)(Sa, {
            row: BB,
            view: jB,
            t: zB
          }, BB.id)))
        }), jB.reward && (0, Hd.jsxs)("span", {
          className: "Baf2BookReward",
          children: [zB(`${pa}questReward`), (0, Hd.jsx)(ya, {
            item: jB.reward
          }), sa(zB, jB.itemNames[jB.reward], jB.reward)]
        })]
      })
    }

    function ha(BB) {
      let {
        quest: jB,
        upcoming: zB,
        t: QB
      } = BB;
      return (0, Hd.jsxs)("li", {
        className: Sn()("Baf2BookQuest", {
          Done: jB[3],
          Upcoming: zB
        }),
        children: [(0, Hd.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: jB[3] ? "\u2713" : "\u25cb"
        }), (0, Hd.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, Hd.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Da(QB, jB)
          }), (0, Hd.jsx)(Ya, {
            goal: jB[2],
            t: QB
          })]
        })]
      })
    }

    function Xa(BB) {
      let {
        done: jB,
        total: zB,
        t: QB
      } = BB;
      const nB = zB > 0 ? Math.round(100 * jB / zB) : 0,
        dB = QB(`${pa}questBookChapterProgress`, {
          done: String(jB),
          total: String(zB)
        });
      return (0, Hd.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, Hd.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": dB,
          "aria-valuemin": 0,
          "aria-valuemax": zB,
          "aria-valuenow": jB,
          children: (0, Hd.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${nB}%`
            }
          })
        }), (0, Hd.jsx)("span", {
          className: "Baf2BookProgressText",
          children: dB
        })]
      })
    }

    function Za(BB) {
      let {
        view: jB,
        tier: zB,
        quests: QB,
        t: nB
      } = BB;
      const dB = zB === jB.tier,
        IB = (null !== QB && void 0 !== QB ? QB : []).filter((BB => !BB[4])),
        NB = (null !== QB && void 0 !== QB ? QB : []).filter((BB => BB[4])),
        uB = IB.filter((BB => BB[3])).length,
        UB = dB && jB.name ? Fa(jB.name) : null,
        aB = IB.findIndex((BB => !BB[3] && Fa(BB) === UB));
      return (0, Hd.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, Hd.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, Hd.jsx)("h3", {
            children: La(nB, zB)
          }), IB.length > 0 && (0, Hd.jsx)(Xa, {
            done: uB,
            total: IB.length,
            t: nB
          }), dB && jB.core && (0, Hd.jsx)(ga, {
            core: jB.core,
            t: nB
          })]
        }), (0, Hd.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === QB && dB && (0, Hd.jsx)(Va, {
            view: jB,
            t: nB
          }), IB.map(((BB, zB) => zB === aB ? (0, Hd.jsx)(Va, {
            view: jB,
            t: nB
          }, Fa(BB)) : (0, Hd.jsx)(ha, {
            quest: BB,
            upcoming: !BB[3],
            t: nB
          }, Fa(BB))))]
        }), dB && jB.side && (0, Hd.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, Hd.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: nB(`${pa}questSide`)
          }), (0, Hd.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Da(nB, jB.side.name)
          }), (0, Hd.jsx)(Ya, {
            goal: jB.side.goal,
            t: nB
          }), (0, Hd.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, Hd.jsx)(Sa, {
              row: jB.side.row,
              view: jB,
              t: nB
            })
          })]
        }), NB.length > 0 && (0, Hd.jsxs)(Hd.Fragment, {
          children: [(0, Hd.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: nB(`${pa}questBookSidesDone`)
          }), (0, Hd.jsx)("ol", {
            className: "Baf2BookQuests",
            children: NB.map((BB => (0, Hd.jsx)(ha, {
              quest: BB,
              upcoming: !1,
              t: nB
            }, Fa(BB))))
          })]
        })]
      })
    }

    function Aa(BB) {
      var jB, zB, dB;
      let {
        store: IB,
        tutorial: NB,
        close: uB
      } = BB;
      const {
        t: UB
      } = (0, fn.D)(), pB = (0, Na.h)(Zn, IB.get()), rB = null !== (jB = pB.tier) && void 0 !== jB ? jB : 1, [sB, JB] = (0, QB.useState)(null), kB = (null === sB || void 0 === sB ? void 0 : sB.at) === rB ? sB.tier : rB, GB = (0, QB.useRef)(null), LB = null !== pB.chapters;
      (0, QB.useEffect)((() => {
        var BB;
        GB.current && (GB.current.scrollTop = 0);
        const jB = null === (BB = GB.current) || void 0 === BB ? void 0 : BB.querySelector(".Baf2BookQuest.Current");
        if (GB.current && jB) {
          const BB = jB.getBoundingClientRect().bottom - GB.current.getBoundingClientRect().bottom;
          BB > 0 && (GB.current.scrollTop += Math.min(BB, jB.getBoundingClientRect().top - GB.current.getBoundingClientRect().top))
        }
      }), [kB, LB]);
      const gB = null === (zB = pB.chapters) || void 0 === zB ? void 0 : zB.find((BB => {
        let [jB] = BB;
        return jB === kB
      }));
      return (0, Hd.jsx)(iI.d, {
        close: uB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Hd.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: ra,
          children: [(0, Hd.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Hd.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: UB(`${pa}questBookTitle`)
            }), (0, Hd.jsx)(qI.m, {
              className: "Baf2BookTutorialButton",
              disabled: !pB.tutorialKnown,
              ariaLabel: UB(fa[pB.tutorial]),
              title: UB(fa[pB.tutorial]),
              onClick: () => {
                NB.next()
              },
              children: (0, Hd.jsx)(Hn.c, {
                name: qa[pB.tutorial]
              })
            }), (0, Hd.jsx)(qI.j, {
              onClick: uB
            })]
          }), (0, Hd.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": UB(`${pa}questBookChapters`),
            "data-pad-initial-area": !0,
            children: nB.slice(0, aB()).map(((BB, jB) => {
              const zB = jB + 1,
                {
                  kind: QB,
                  short: nB
                } = yB(zB),
                dB = mB(zB, rB),
                IB = dB ? UB(`${pa}coreAtomicHidden`) : La(UB, zB);
              return (0, Hd.jsx)("li", {
                children: (0, Hd.jsx)("button", {
                  type: "button",
                  className: Sn()({
                    Stage: "tier" !== QB,
                    Atomic: "atomic" === QB,
                    Current: zB === rB,
                    Selected: zB === kB
                  }),
                  disabled: zB > rB,
                  "aria-pressed": zB === kB,
                  "aria-label": IB,
                  title: dB ? void 0 : IB,
                  onClick: () => {
                    JB({
                      tier: zB,
                      at: rB
                    })
                  },
                  children: dB ? "?" : nB
                })
              }, BB.nameKey)
            }))
          }), (0, Hd.jsxs)("div", {
            ref: GB,
            className: "Baf2BookBody",
            children: [en(pB) && kB === rB && (0, Hd.jsx)("p", {
              className: "Baf2BookEmpty",
              children: UB(`${pa}questBookAllDone`)
            }), (0, Hd.jsx)(Za, {
              view: pB,
              tier: kB,
              quests: null !== (dB = null === gB || void 0 === gB ? void 0 : gB[1]) && void 0 !== dB ? dB : null,
              t: UB
            })]
          })]
        })
      })
    }
    const Ta = "buildAFactory2Game:";

    function Pa(BB) {
      let {
        tiers: jB,
        from: zB,
        tier: QB,
        shown: nB,
        zs: dB
      } = BB;
      const {
        t: IB
      } = (0, fn.D)(), NB = jB.map(((BB, jB) => {
        const NB = zB + jB,
          {
            kind: uB,
            short: UB
          } = yB(NB),
          aB = mB(NB, QB);
        return (0, Hd.jsx)("li", {
          children: (0, Hd.jsx)("button", {
            type: "button",
            className: Sn()({
              Stage: "tier" !== uB,
              Silhouette: aB,
              Reached: NB <= QB,
              Current: NB === QB,
              Next: NB === QB + 1,
              Selected: NB === nB
            }),
            disabled: aB,
            "aria-pressed": NB === nB,
            "aria-label": aB ? IB(`${Ta}coreAtomicHidden`) : void 0,
            title: aB ? void 0 : IB(`${Ta}${BB.nameKey}`),
            onClick: () => {
              dB(NB)
            },
            children: aB ? "?" : UB
          })
        }, BB.nameKey)
      }));
      return (0, Hd.jsx)(Hd.Fragment, {
        children: NB
      })
    }

    function Wa(BB) {
      let {
        id: jB,
        label: zB,
        tiers: QB,
        from: nB,
        ...dB
      } = BB;
      return (0, Hd.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, Hd.jsx)("span", {
          id: jB,
          className: "Baf2CoreLadderLabel",
          children: zB
        }), (0, Hd.jsx)("ol", {
          "aria-labelledby": jB,
          children: (0, Hd.jsx)(Pa, {
            ...dB,
            tiers: QB,
            from: nB
          })
        })]
      })
    }

    function ea(BB) {
      const {
        t: jB
      } = (0, fn.D)(), zB = nB.findIndex((BB => void 0 !== BB.stage)), QB = nB.findIndex((BB => void 0 !== BB.reactorTier)), dB = zB < 0 ? nB : nB.slice(0, zB), IB = zB < 0 ? [] : nB.slice(zB, QB < 0 ? void 0 : QB), uB = QB < 0 || !NB() ? [] : nB.slice(QB);
      return (0, Hd.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, Hd.jsx)(Wa, {
          ...BB,
          id: "baf2CoreTiersLabel",
          label: jB(`${Ta}coreTiersLabel`),
          tiers: dB,
          from: 1
        }), IB.length > 0 && (0, Hd.jsx)(Wa, {
          ...BB,
          id: "baf2CoreStagesLabel",
          label: jB(`${Ta}coreStagesLabel`),
          tiers: IB,
          from: zB + 1
        }), uB.length > 0 && (0, Hd.jsx)(Wa, {
          ...BB,
          id: "baf2CoreAtomicLabel",
          label: jB(`${Ta}coreAtomicLabel`),
          tiers: uB,
          from: QB + 1
        })]
      })
    }
    const la = "buildAFactory2Game:";

    function wa(BB) {
      let {
        item: jB,
        itemNames: zB,
        children: QB
      } = BB;
      return (0, Hd.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Hd.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Hd.jsx)(Dn.c, {
            itemName: jB,
            amount: 0
          })
        }), (0, Hd.jsx)(Fn.e, {
          text: zB[jB]
        }), QB]
      })
    }

    function xa(BB) {
      const jB = new Map;
      for (const {
          block: QB
        }
        of BB.newDeposits) {
        var zB;
        jB.set(QB, (null !== (zB = jB.get(QB)) && void 0 !== zB ? zB : 0) + 1)
      }
      return [...jB]
    }

    function Ka(BB) {
      let {
        value: jB,
        label: zB,
        more: QB
      } = BB;
      return (0, Hd.jsxs)("li", {
        children: [(0, Hd.jsx)("strong", {
          children: jB
        }), (0, Hd.jsx)("span", {
          children: zB
        }), QB > 0 && (0, Hd.jsxs)("em", {
          children: ["+", QB]
        })]
      })
    }

    function Ca(BB) {
      let {
        items: jB,
        itemNames: zB
      } = BB;
      const {
        t: nB
      } = (0, fn.D)(), [dB, IB] = (0, QB.useState)(null), NB = null !== dB && jB.includes(dB) ? dB : null;
      return (0, Hd.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, Hd.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: nB(`${la}coreRewardUnlocks`)
        }), (0, Hd.jsx)("ul", {
          children: jB.map((BB => (0, Hd.jsx)("li", {
            children: (0, Hd.jsx)("button", {
              type: "button",
              className: Sn()("Baf2PanelIcon", {
                Picked: BB === NB
              }),
              title: Id(nB, BB),
              "aria-label": Id(nB, BB),
              "aria-pressed": BB === NB,
              onClick: () => {
                IB(BB === NB ? null : BB)
              },
              children: (0, Hd.jsx)(Dn.c, {
                itemName: BB,
                amount: 0
              })
            })
          }, BB)))
        }), (0, Hd.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== NB && (0, Hd.jsxs)(Hd.Fragment, {
            children: [(0, Hd.jsx)(Fn.e, {
              text: zB[NB]
            }), " \xb7 ", (0, Hd.jsx)(Fn.e, {
              text: zB[HB(NB)]
            })]
          }), null === NB && nB(`${la}coreRecipeTap`)]
        })]
      })
    }

    function ca(BB) {
      var jB, zB;
      let {
        def: QB,
        tier: nB,
        itemNames: dB
      } = BB;
      const {
        t: IB
      } = (0, fn.D)(), NB = nB > 1 ? kB(nB - 1) : void 0, uB = Math.round(2 * QB.islandRadius), UB = NB ? Math.round(2 * NB.islandRadius) : uB, aB = nB >= 3 ? tQ(nB) : null;
      return (0, Hd.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, Hd.jsxs)("ul", {
          className: Sn()("Baf2CoreStats", {
            Four: null !== aB
          }),
          children: [(0, Hd.jsx)(Ka, {
            value: `${uB}\xd7${uB}`,
            label: IB(`${la}coreStatIsland`),
            more: uB - UB
          }), (0, Hd.jsx)(Ka, {
            value: String(QB.machineAllowance),
            label: IB(`${la}coreStatMachines`),
            more: QB.machineAllowance - (null !== (jB = null === NB || void 0 === NB ? void 0 : NB.machineAllowance) && void 0 !== jB ? jB : QB.machineAllowance)
          }), (0, Hd.jsx)(Ka, {
            value: String(QB.beltAllowance),
            label: IB(`${la}coreStatBelts`),
            more: QB.beltAllowance - (null !== (zB = null === NB || void 0 === NB ? void 0 : NB.beltAllowance) && void 0 !== zB ? zB : QB.beltAllowance)
          }), null !== aB && (0, Hd.jsx)(Ka, {
            value: String(aB),
            label: IB(`${la}coreStatStorage`),
            more: aB - (NB ? tQ(nB - 1) : aB)
          })]
        }), QB.reward && (0, Hd.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Hd.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: IB(`${la}coreRewardItem`)
          }), (0, Hd.jsx)(wa, {
            item: QB.reward,
            itemNames: dB
          })]
        }), QB.newDeposits.length > 0 && (0, Hd.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Hd.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: IB(QB.newDeposits.length > 1 ? `${la}coreRewardDeposits` : `${la}coreRewardDeposit`)
          }), xa(QB).map((BB => {
            let [jB, zB] = BB;
            return (0, Hd.jsx)(wa, {
              item: jB,
              itemNames: dB,
              children: zB > 1 && ` \xd7${zB}`
            }, jB)
          }))]
        }), QB.unlocks.length > 0 && (0, Hd.jsx)(Ca, {
          items: QB.unlocks,
          itemNames: dB
        }), (0, Hd.jsx)(ba, {
          tier: nB
        })]
      })
    }

    function ba(BB) {
      let {
        tier: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)(), QB = mn[jB];
      if (!QB) return null;
      const nB = Jn(jB, 0, 0).barrierMax !== Jn(jB - 1, 0, 0).barrierMax;
      return (0, Hd.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Hd.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Hd.jsx)(Dn.c, {
            itemName: nB ? un.Chestplate : Nn,
            amount: 0
          })
        }), zB(`${la}gearPerkLine`, {
          perk: zB(`${la}${QB}`)
        })]
      })
    }

    function va(BB, jB) {
      return null === BB ? jB : BB.value
    }

    function Ra(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === BB || zB - BB.atMs >= QB ? null : nB(BB.value, jB) ? BB.armed ? null : BB : BB.armed ? BB : {
        ...BB,
        armed: !0
      }
    }

    function Oa(BB, jB) {
      const zB = jB.filter((jB => {
        var zB;
        return !1 !== (null === (zB = BB.get(jB)) || void 0 === zB ? void 0 : zB.value)
      }));
      for (const [QB, nB] of BB) nB.value && !jB.includes(QB) && zB.push(QB);
      return zB
    }

    function Bp(BB, jB, zB, nB) {
      const [dB, IB] = (0, QB.useState)((() => new Map)), NB = () => {
        IB((jB => function(BB, jB, zB, QB) {
          var nB;
          let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            IB = null;
          for (const [NB, uB] of BB) {
            const nB = Ra(uB, jB(NB), zB, QB, dB);
            nB !== uB && (IB ??= new Map(BB), null === nB ? IB.delete(NB) : IB.set(NB, nB))
          }
          return null !== (nB = IB) && void 0 !== nB ? nB : BB
        }(jB, BB, Date.now(), zB, nB)))
      };
      (0, QB.useEffect)((() => {
        NB()
      }), [jB, zB]), (0, QB.useEffect)((() => {
        if (0 === dB.size) return;
        const BB = Math.min(...[...dB.values()].map((BB => BB.atMs))),
          jB = setTimeout(NB, Math.max(0, BB + zB - Date.now()) + 1);
        return () => {
          clearTimeout(jB)
        }
      }), [dB, jB, zB]);
      return [dB, (jB, zB) => {
        IB((QB => {
          const dB = new Map(QB);
          return dB.set(jB, function(BB, jB, zB) {
            return {
              value: BB,
              atMs: zB,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(BB, jB)
            }
          }(zB, BB(jB), Date.now(), nB)), dB
        }))
      }]
    }
    const jp = "buildAFactory2Game:";

    function zp(BB) {
      let {
        message: jB,
        itemNames: zB
      } = BB;
      const nB = xI(),
        {
          t: dB
        } = (0, fn.D)(),
        [IB, NB] = (0, QB.useState)(!1),
        [uB, UB] = function(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AI;
          const [zB, QB] = Bp((jB => BB.includes(jB)), BB, jB, Object.is);
          return [Oa(zB, BB), QB]
        }(jB.baf2CoreBankPaused),
        aB = new Set(uB),
        pB = [...jB.baf2CoreBanked];
      for (const QB of aB) pB.some((BB => {
        let [jB] = BB;
        return jB === QB
      })) || pB.push([QB, 0]);
      return 0 === pB.length ? null : (0, Hd.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, Hd.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": IB,
          onClick: () => {
            NB(!IB)
          },
          children: [(0, Hd.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: dB(`${jp}coreBankedLater`)
          }), (0, Hd.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: pB.map((BB => {
              let [jB, zB] = BB;
              const QB = aB.has(jB);
              return (0, Hd.jsxs)("span", {
                className: Sn()({
                  Paused: QB
                }),
                title: QB ? dB(`${jp}coreBankPausedTag`) : void 0,
                children: [(0, Hd.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, Hd.jsx)(Dn.c, {
                    itemName: jB,
                    amount: 0
                  })
                }), zB, QB && (0, Hd.jsx)(Hn.c, {
                  name: "pause"
                })]
              }, jB)
            }))
          }), (0, Hd.jsx)(Hn.c, {
            name: IB ? "angle-up" : "angle-down"
          })]
        }), IB && (0, Hd.jsxs)(Hd.Fragment, {
          children: [(0, Hd.jsx)("ul", {
            children: pB.map((BB => {
              let [jB, QB] = BB;
              const IB = aB.has(jB);
              return (0, Hd.jsxs)("li", {
                children: [(0, Hd.jsxs)(wa, {
                  item: jB,
                  itemNames: zB,
                  children: [(0, Hd.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: QB
                  }), IB && (0, Hd.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: dB(`${jp}coreBankPausedTag`)
                  })]
                }), (0, Hd.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, Hd.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === QB,
                    onClick: () => {
                      nB.send(`baf2corewithdraw ${QB} ${jB}`)
                    },
                    children: dB(`${jp}coreTake`)
                  }), (0, Hd.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      nB.send(`${gB} ${jB}`), UB(jB, !IB)
                    },
                    children: dB(IB ? `${jp}coreBankResume` : `${jp}coreBankStop`)
                  })]
                })]
              }, jB)
            }))
          }), (0, Hd.jsx)("p", {
            className: "Baf2CoreHint",
            children: dB(`${jp}coreBankNote`)
          })]
        })]
      })
    }
    const Qp = "buildAFactory2Game:";

    function np(BB) {
      const jB = Math.max(0, Math.floor(BB));
      return `${Math.floor(jB/60)}:${String(jB%60).padStart(2,"0")}`
    }

    function dp(BB) {
      let {
        item: jB
      } = BB;
      return (0, Hd.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, Hd.jsx)(Dn.c, {
          itemName: jB,
          amount: 0
        })
      })
    }

    function Ip() {
      return (0, Hd.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, Hd.jsx)(Hn.c, {
          name: "bolt"
        })
      })
    }

    function Np(BB) {
      let {
        charge: jB,
        hint: zB,
        itemNames: QB
      } = BB;
      const nB = xI(),
        {
          t: dB
        } = (0, fn.D)(),
        [IB, NB, uB, UB, aB, pB, rB] = jB,
        [sB, JB] = function(BB) {
          var jB;
          let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AI,
            QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [nB, dB] = Bp((() => BB), BB, zB, QB);
          return [va(null !== (jB = nB.get("")) && void 0 !== jB ? jB : null, BB), BB => {
            dB("", BB)
          }]
        }(rB),
        mB = sB === rB ? pB : !sB,
        yB = UB >= aB,
        kB = IB.find((BB => {
          let [, jB, zB] = BB;
          return zB < .9 * jB
        }));
      let GB = `${Qp}coreChargeWaiting`,
        LB = {};
      return yB ? GB = `${Qp}coreChargeDone` : sB ? GB = `${Qp}coreChargeStopped` : mB && zB ? (GB = `${Qp}${zB[0]}`, LB = {
        item: Id(dB, zB[1])
      }) : mB && kB ? (GB = `${Qp}coreChargeShort`, LB = {
        item: Id(dB, kB[0])
      }) : mB && NB > 0 && !uB ? GB = `${Qp}coreChargePower` : mB && (GB = `${Qp}coreChargeRunning`), (0, Hd.jsxs)("div", {
        className: Sn()("Baf2CoreCharge", {
          Waiting: !mB && !yB,
          Done: yB
        }),
        children: [(0, Hd.jsxs)("h4", {
          children: [dB(`${Qp}coreChargeTitle`), (0, Hd.jsx)("span", {
            children: dB(`${Qp}coreChargeProgress`, {
              done: np(UB),
              need: np(aB)
            })
          })]
        }), (0, Hd.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, Hd.jsx)("div", {
            style: {
              width: 100 * Math.min(UB, aB) / aB + "%"
            }
          })
        }), (0, Hd.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [IB.map((BB => {
            var jB;
            let [zB, nB, IB] = BB;
            const NB = IB >= .9 * nB;
            return (0, Hd.jsxs)("li", {
              className: Sn()({
                Done: NB,
                Short: mB && !NB
              }),
              children: [(0, Hd.jsx)(dp, {
                item: zB
              }), (0, Hd.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, Hd.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Hd.jsx)(Fn.e, {
                    text: null !== (jB = QB[zB]) && void 0 !== jB ? jB : zB
                  }), (0, Hd.jsx)("span", {
                    children: dB(`${Qp}coreChargeItem`, {
                      now: String(IB),
                      need: String(nB)
                    })
                  })]
                }), (0, Hd.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, Hd.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*IB/nB)}%`
                    }
                  })
                })]
              })]
            }, zB)
          })), NB > 0 && (0, Hd.jsxs)("li", {
            className: Sn()("Baf2CoreChargePower", {
              Short: mB && !uB
            }),
            children: [(0, Hd.jsx)(Ip, {}), (0, Hd.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Hd.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Hd.jsx)("span", {
                  children: dB(`${Qp}coreChargePowerRow`, {
                    power: vB(NB)
                  })
                })
              })
            })]
          })]
        }), (0, Hd.jsx)("p", {
          className: "Baf2CoreHint",
          children: dB(GB, LB)
        }), !yB && (mB || sB) && (0, Hd.jsx)("button", {
          type: "button",
          className: Sn()("Baf2CoreChargeToggle", {
            Stopped: sB
          }),
          onClick: () => {
            nB.send(SB), JB(!sB)
          },
          children: dB(sB ? `${Qp}coreChargeRestart` : `${Qp}coreChargeStop`)
        })]
      })
    }

    function Up(BB) {
      let {
        charge: jB,
        reached: zB,
        itemNames: QB
      } = BB;
      const {
        t: nB
      } = (0, fn.D)();
      return (0, Hd.jsxs)("div", {
        className: Sn()("Baf2CoreCharge", {
          Done: zB
        }),
        children: [(0, Hd.jsxs)("h4", {
          children: [nB(`${Qp}coreChargeTitle`), (0, Hd.jsx)("span", {
            children: nB(`${Qp}coreChargeSpecTime`, {
              time: np(jB.seconds)
            })
          })]
        }), (0, Hd.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [jB.items.map((BB => {
            var jB;
            let {
              item: dB,
              amount: IB
            } = BB;
            return (0, Hd.jsxs)("li", {
              className: Sn()({
                Done: zB
              }),
              children: [(0, Hd.jsx)(dp, {
                item: dB
              }), (0, Hd.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, Hd.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Hd.jsx)(Fn.e, {
                    text: null !== (jB = QB[dB]) && void 0 !== jB ? jB : dB
                  }), (0, Hd.jsx)("span", {
                    children: nB(`${Qp}coreChargeSpecItem`, {
                      need: String(IB)
                    })
                  })]
                })
              })]
            }, dB)
          })), jB.powerPerS > 0 && (0, Hd.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, Hd.jsx)(Ip, {}), (0, Hd.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Hd.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Hd.jsx)("span", {
                  children: nB(`${Qp}coreChargePowerRow`, {
                    power: vB(jB.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const ap = "buildAFactory2Game:";

    function pp(BB) {
      let {
        def: jB,
        reached: zB,
        banked: QB,
        itemNames: nB
      } = BB;
      const {
        t: dB
      } = (0, fn.D)();
      return (0, Hd.jsx)("ul", {
        className: "Baf2CoreCost",
        children: jB.cost.map((BB => {
          let {
            item: jB,
            amount: IB
          } = BB;
          const NB = zB ? 0 : QB(jB);
          return (0, Hd.jsx)("li", {
            children: (0, Hd.jsx)(wa, {
              item: jB,
              itemNames: nB,
              children: (0, Hd.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: NB > 0 ? dB(`${ap}coreBankedFor`, {
                  amount: String(NB),
                  total: String(IB)
                }) : `\xd7${IB}`
              })
            })
          }, jB)
        }))
      })
    }

    function rp(BB, jB) {
      if (jB >= aB()) return BB(`${ap}coreMaxTier`);
      const zB = UB[jB + 1];
      return zB && !zB.startsWith("upgradeCore") ? BB(`${ap}coreGateQuest`, {
        quest: BB(`${ap}quest_${zB}`)
      }) : BB(`${ap}coreGateClosed`)
    }

    function sp() {
      const {
        t: BB
      } = (0, fn.D)(), jB = xI(), zB = (0, QB.useRef)(null), nB = (0, QB.useRef)(Date.now());
      return RU(!0, zB), (0, Hd.jsx)("div", {
        ref: zB,
        className: "Baf2CoreGrow",
        children: (0, Hd.jsx)(qI.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - nB.current >= 600 && jB.send(LB)
          },
          children: BB(`${ap}coreGrow`)
        })
      })
    }

    function Jp(BB) {
      let {
        message: jB,
        itemNames: zB,
        next: QB
      } = BB;
      const nB = xI(),
        {
          t: dB
        } = (0, fn.D)(),
        IB = jB.baf2CoreTier,
        NB = jB.baf2CoreReady,
        uB = jB.baf2CoreNeeds.filter((BB => {
          let [, jB, zB, QB] = BB;
          return QB > 0 && jB < zB
        })),
        UB = jB.baf2CoreNeeds.every((BB => {
          let [, jB, zB] = BB;
          return jB >= zB
        })),
        aB = jB.baf2CoreKeep;
      return (0, Hd.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, Hd.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [NB && (0, Hd.jsx)(sp, {}), (0, Hd.jsx)("h3", {
            children: dB(`${ap}coreBring`)
          }), (0, Hd.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: jB.baf2CoreNeeds.map((BB => {
              let [jB, QB, IB, NB] = BB;
              return (0, Hd.jsxs)("li", {
                className: Sn()({
                  Done: QB >= IB
                }),
                children: [(0, Hd.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, Hd.jsx)(Dn.c, {
                    itemName: jB,
                    amount: 0
                  })
                }), (0, Hd.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, Hd.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, Hd.jsx)(Fn.e, {
                      text: zB[jB]
                    }), (0, Hd.jsxs)("span", {
                      children: [QB, "/", IB]
                    })]
                  }), (0, Hd.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, Hd.jsx)("div", {
                      style: {
                        width: 100 * QB / IB + "%"
                      }
                    }), NB > 0 && (0, Hd.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * NB / IB + "%"
                      }
                    })]
                  })]
                }), NB > 0 && QB < IB && (0, Hd.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    nB.send(`${tB} ${jB}`)
                  },
                  children: dB(`${ap}coreDeposit`, {
                    amount: String(NB)
                  })
                })]
              }, jB)
            }))
          }), jB.baf2CoreCharge && (0, Hd.jsx)(Np, {
            charge: jB.baf2CoreCharge,
            hint: jB.baf2CoreChargeHint,
            itemNames: zB
          }), !NB && uB.length > 1 && (0, Hd.jsx)(qI.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              nB.send(LB)
            },
            children: dB(`${ap}coreHandOver`)
          }), !NB && void 0 !== aB && (0, Hd.jsx)("p", {
            className: "Baf2CoreHint",
            children: dB(`${ap}coreKeepRest`, {
              item: Id(dB, aB)
            })
          }), !NB && !UB && 0 === uB.length && void 0 === aB && (0, Hd.jsx)("p", {
            className: "Baf2CoreHint",
            children: dB(`${ap}coreNothingHeld`)
          }), (0, Hd.jsx)(zp, {
            message: jB,
            itemNames: zB
          })]
        }), (0, Hd.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Hd.jsx)("h3", {
            children: dB(`${ap}coreRewards`)
          }), (0, Hd.jsx)(ca, {
            def: QB,
            tier: IB + 1,
            itemNames: zB
          })]
        })]
      })
    }

    function mp(BB) {
      let {
        message: jB,
        itemNames: zB,
        shown: QB
      } = BB;
      const {
        t: nB
      } = (0, fn.D)(), dB = jB.baf2CoreTier, IB = kB(QB), NB = QB <= dB, uB = new Map(jB.baf2CoreBanked), UB = !GB(dB, MB(jB)) && QB === dB;
      return (0, Hd.jsxs)("div", {
        className: Sn()("Baf2CoreBody", {
          Locked: !NB
        }),
        children: [(0, Hd.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Hd.jsx)("h3", {
            children: nB(NB ? `${ap}coreItTook` : `${ap}coreItNeeds`)
          }), 0 === IB.cost.length && (0, Hd.jsx)("p", {
            className: "Baf2CoreHint",
            children: nB(`${ap}coreTierStart`)
          }), IB.cost.length > 0 && (0, Hd.jsx)(pp, {
            def: IB,
            reached: NB,
            banked: BB => {
              var jB;
              return function(BB, jB, zB, QB) {
                let nB = BB;
                for (let IB = jB + 2; IB <= zB; IB++) {
                  var dB;
                  const BB = kB(IB).cost.find((BB => BB.item === QB)),
                    jB = Math.min(nB, null !== (dB = null === BB || void 0 === BB ? void 0 : BB.amount) && void 0 !== dB ? dB : 0);
                  if (IB === zB) return jB;
                  nB -= jB
                }
                return 0
              }(null !== (jB = uB.get(BB)) && void 0 !== jB ? jB : 0, dB, QB, BB)
            },
            itemNames: zB
          }), IB.charge && (0, Hd.jsx)(Up, {
            charge: IB.charge,
            reached: NB,
            itemNames: zB
          }), UB && (0, Hd.jsxs)(Hd.Fragment, {
            children: [(0, Hd.jsx)("p", {
              className: "Baf2CoreHint",
              children: rp(nB, dB)
            }), (0, Hd.jsx)(zp, {
              message: jB,
              itemNames: zB
            })]
          })]
        }), (0, Hd.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Hd.jsx)("h3", {
            children: nB(NB ? `${ap}coreGave` : `${ap}coreLockedRewards`)
          }), (0, Hd.jsx)(ca, {
            def: IB,
            tier: QB,
            itemNames: zB
          })]
        })]
      })
    }

    function yp(BB, jB) {
      const {
        key: zB,
        params: QB
      } = sB(jB - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return BB(`${ap}${zB}`, QB)
    }
    const kp = "buildAFactory2Game:",
      Gp = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Lp = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function gp(BB) {
      let {
        view: jB,
        close: zB,
        askIslands: nB
      } = BB;
      const {
        t: dB
      } = (0, fn.D)(), [IB, NB] = (0, QB.useState)(!1);
      (0, QB.useEffect)((() => {
        if (!IB) return;
        const BB = window.setTimeout((() => {
          NB(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(BB)
        }
      }), [IB]);
      const {
        message: uB,
        itemNames: UB
      } = jB, aB = uB.baf2CoreTier, pB = kB(aB), rB = GB(aB, MB(uB)), [mB, yB] = uB.baf2CoreMachines, [LB, gB] = uB.baf2CoreBelts, tB = uB.baf2CoreStorage, SB = uB.baf2CoreReady, [EB, iB] = (0, QB.useState)(null), qB = (null === EB || void 0 === EB ? void 0 : EB.at) === aB && EB.ready === SB ? EB.tier : rB ? aB + 1 : aB;
      let fB = "coreTierLocked";
      qB <= aB ? fB = "coreTierReached" : qB === aB + 1 && (fB = "coreTierNext");
      const oB = dB(`${kp}${kB(qB).nameKey}`),
        HB = qB === aB + 1 ? rB : null,
        DB = sB(qB, {
          tier: fB,
          stage: Gp[fB],
          atomic: Lp[fB]
        }),
        FB = dB(`${kp}${DB.key}`, {
          ...DB.params,
          name: oB
        }),
        YB = sB(aB, JB),
        VB = dB(`${kp}${YB.key}`, {
          ...YB.params,
          name: dB(`${kp}${pB.nameKey}`)
        });
      return (0, Hd.jsx)(iI.d, {
        close: zB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, Hd.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, Hd.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Hd.jsxs)("div", {
              children: [(0, Hd.jsx)("h2", {
                id: "baf2CoreTitle",
                children: dB(`${kp}coreTitle`)
              }), void 0 !== uB.baf2CoreIslandName && (0, Hd.jsx)("p", {
                className: "Baf2CoreIsland",
                children: uB.baf2CoreIslandName
              }), (0, Hd.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, Hd.jsx)("span", {
                  children: VB
                }), (0, Hd.jsx)("span", {
                  className: Sn()({
                    Full: mB >= yB
                  }),
                  children: dB(`${kp}coreMachineCount`, {
                    amount: String(mB),
                    total: String(yB)
                  })
                }), (0, Hd.jsx)("span", {
                  className: Sn()({
                    Full: LB >= gB
                  }),
                  children: dB(`${kp}coreBeltCount`, {
                    amount: String(LB),
                    total: String(gB)
                  })
                }), void 0 !== tB && (0, Hd.jsx)("span", {
                  className: Sn()({
                    Full: tB[0] >= tB[1]
                  }),
                  children: dB(`${kp}coreStorageCount`, {
                    amount: String(tB[0]),
                    total: String(tB[1])
                  })
                })]
              })]
            }), (0, Hd.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [uB.baf2CoreIslands && (0, Hd.jsx)(qI.f, {
                className: "Baf2CoreIslandsButton",
                disabled: IB,
                onClick: () => {
                  NB(!0), nB()
                },
                children: dB(`${kp}islandsOpenButton`)
              }), (0, Hd.jsx)(qI.j, {
                onClick: zB
              })]
            })]
          }), (0, Hd.jsx)(ea, {
            tier: aB,
            shown: qB,
            zs: BB => {
              iB({
                tier: BB,
                at: aB,
                ready: SB
              })
            }
          }), (0, Hd.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [FB, qB > aB + 1 && (0, Hd.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: yp(dB, qB)
            })]
          }), 6 === qB && qB > aB && (0, Hd.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: dB(`${kp}coreStagesNote`)
          }), 11 === qB && qB > aB && (0, Hd.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: dB(`${kp}coreAtomicNote`)
          }), HB && (0, Hd.jsx)(Jp, {
            message: uB,
            itemNames: UB,
            next: HB
          }), !HB && (0, Hd.jsx)(mp, {
            message: uB,
            itemNames: UB,
            shown: qB
          })]
        })
      })
    }
    const tp = {
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
    const Sp = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: pd,
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

    function Mp(BB) {
      return BB.baf2DropCometOreOnly ? "dropCometOre" : BB.baf2DropCometIsotope ? "seed" === BB.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function Ep(BB) {
      let {
        message: jB,
        quests: zB,
        close: nB,
        leave: dB
      } = BB;
      const IB = xI(),
        {
          t: NB
        } = (0, fn.D)(),
        uB = (0, Na.h)(Zn, zB.get()),
        UB = function(BB) {
          var jB;
          if (!YB(BB.tutorial)) return null;
          const zB = BB.rows.find((BB => BB.current)),
            QB = zB ? tp[zB.key] : void 0;
          return null !== (jB = null !== QB && void 0 !== QB ? QB : BB.side ? tp[BB.side.row.key] : void 0) && void 0 !== jB ? jB : null
        }(uB),
        aB = null === uB.tier || Jd(uB.tier),
        pB = aB ? Sp : Sp.filter((BB => {
          let {
            item: jB
          } = BB;
          return jB !== pd
        })),
        [rB, sB] = (0, QB.useState)(null),
        JB = null !== rB && void 0 !== rB ? rB : !jB.baf2DropFoundSalvage && aB,
        mB = jB.baf2DropRuinDistance,
        yB = jB.baf2DropComet,
        kB = jB.baf2DropOldWorks,
        GB = jB.baf2DropGrove,
        LB = function(BB) {
          return 2 + Number(void 0 !== BB.baf2DropComet) + Number(!!BB.baf2DropOwedComet || void 0 !== BB.baf2DropOwedWaitMinutes) + Number(void 0 !== BB.baf2DropDigDistance) + Number(void 0 !== BB.baf2DropOldWorks) + Number(void 0 !== BB.baf2DropGrove)
        }(jB),
        gB = BB => {
          IB.send(function(BB) {
            return `baf2drop ${BB}`
          }(BB)), dB()
        };
      let tB = NB("buildAFactory2Game:dropRuinNone");
      if (null !== mB) {
        let BB = jB.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        jB.baf2DropRuinOldWorks && (BB = "dropRuinOldWorks");
        const zB = void 0 === jB.baf2DropRuinCluster ? NB("buildAFactory2Game:dropRuinOpen") : NB("buildAFactory2Game:dropRuinCluster", {
          count: String(jB.baf2DropRuinCluster)
        });
        tB = `${NB(`buildAFactory2Game:${BB}`,{distance:String(mB)})} ${zB}`
      }
      let SB = NB("buildAFactory2Game:dropBelowDescription");
      void 0 !== jB.baf2DropBelowLook && (SB = NB("buildAFactory2Game:dropBelowLook", {
        look: NB(jB.baf2DropBelowLook)
      }));
      const MB = "buildAFactory2Game:wildsRegion_survivorGrove" === jB.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        EB = Ed(NB, 60 * function(BB) {
          const [jB, zB] = (0, QB.useState)((() => Date.now())), [nB, dB] = (0, QB.useState)(jB);
          return (0, QB.useEffect)((() => {
            const BB = Date.now();
            zB(BB), dB(BB)
          }), [BB]), (0, QB.useEffect)((() => {
            const BB = window.setInterval((() => {
              dB(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(BB)
            }
          }), []), Math.max(1, BB.baf2DropRenewMinutes - Math.floor((nB - jB) / 6e4))
        }(jB)),
        iB = function(BB, jB, zB) {
          return "ruin" === BB && !zB || "owed" === BB && !jB.baf2DropOwedComet ? null : BB
        }(UB, jB, null !== mB),
        qB = function(BB) {
          for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
          return Sn()("Baf2DropTile", ...zB, {
            Wanted: iB === BB
          })
        };
      return (0, Hd.jsx)(iI.d, {
        close: nB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Hd.jsxs)("section", {
          className: Sn()("Baf2Panel Baf2DropMap", {
            Many: LB >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, Hd.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Hd.jsxs)("div", {
              children: [(0, Hd.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: NB("buildAFactory2Game:dropMapTitle")
              }), (0, Hd.jsx)("p", {
                children: NB("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, Hd.jsx)(qI.j, {
              onClick: nB
            })]
          }), (0, Hd.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== yB && (0, Hd.jsxs)(qI.x, {
              className: qB("comet", "Baf2DropComet"),
              onClick: () => {
                gB("comet")
              },
              children: [(0, Hd.jsx)("strong", {
                children: NB("buildAFactory2Game:dropComet")
              }), (0, Hd.jsx)("span", {
                children: NB(`buildAFactory2Game:${Mp(jB)}`, {
                  distance: String(yB)
                })
              })]
            }), jB.baf2DropOwedComet && (0, Hd.jsxs)(qI.x, {
              className: qB("owed", "Baf2DropComet"),
              onClick: () => {
                gB("owed")
              },
              children: [(0, Hd.jsx)("strong", {
                children: NB("buildAFactory2Game:dropOwedComet")
              }), (0, Hd.jsx)("span", {
                children: jB.baf2DropOwedIsotope ? NB("buildAFactory2Game:dropOwedIsotopeDescription") : NB("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== jB.baf2DropOwedWaitMinutes && (0, Hd.jsxs)(qI.x, {
              className: qB("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, Hd.jsx)("strong", {
                children: NB("buildAFactory2Game:dropOwedComet")
              }), (0, Hd.jsx)("span", {
                children: NB("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(jB.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, Hd.jsxs)(qI.f, {
              className: qB("below"),
              onClick: () => {
                gB("below")
              },
              children: [(0, Hd.jsx)("strong", {
                children: NB("buildAFactory2Game:dropBelow")
              }), (0, Hd.jsx)("span", {
                children: SB
              })]
            }), void 0 !== jB.baf2DropDigDistance && (0, Hd.jsxs)(qI.r, {
              className: qB("dig"),
              onClick: () => {
                gB("dig")
              },
              children: [(0, Hd.jsx)("strong", {
                children: NB("buildAFactory2Game:dropDig")
              }), (0, Hd.jsx)("span", {
                children: NB("buildAFactory2Game:dropDigDescription", {
                  distance: String(jB.baf2DropDigDistance),
                  y: Md(jB.baf2DropDigY)
                })
              })]
            }), void 0 !== GB && (0, Hd.jsxs)(qI.r, {
              className: qB("grove", "Baf2DropGrove"),
              onClick: () => {
                gB("grove")
              },
              children: [(0, Hd.jsx)("strong", {
                children: NB("buildAFactory2Game:dropGrove")
              }), (0, Hd.jsx)("span", {
                children: NB(`buildAFactory2Game:${MB}`, {
                  distance: String(GB)
                })
              })]
            }), (0, Hd.jsxs)(qI.m, {
              className: qB("ruin"),
              disabled: null === mB,
              onClick: () => {
                gB("ruin")
              },
              children: [(0, Hd.jsx)("strong", {
                children: NB("buildAFactory2Game:dropRuin")
              }), (0, Hd.jsx)("span", {
                children: tB
              })]
            }), void 0 !== kB && (0, Hd.jsxs)(qI.G, {
              className: qB("works"),
              onClick: () => {
                gB("works")
              },
              children: [(0, Hd.jsx)("strong", {
                children: NB("buildAFactory2Game:dropOldWorks")
              }), (0, Hd.jsx)("span", {
                children: NB("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(kB)
                })
              })]
            })]
          }), (0, Hd.jsx)("p", {
            className: "Baf2DropRenew",
            children: NB("buildAFactory2Game:dropRenew", {
              time: EB
            })
          }), (0, Hd.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: JB,
            onToggle: BB => {
              BB.currentTarget.open !== JB && sB(BB.currentTarget.open)
            },
            children: [(0, Hd.jsx)("summary", {
              children: NB("buildAFactory2Game:dropSalvageWhat")
            }), (0, Hd.jsx)("p", {
              children: NB("buildAFactory2Game:dropSalvageIntro")
            }), (0, Hd.jsx)("ul", {
              children: pB.map((BB => {
                let {
                  item: jB,
                  nameKey: zB,
                  useKey: QB,
                  params: nB
                } = BB;
                return (0, Hd.jsxs)("li", {
                  children: [(0, Hd.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, Hd.jsx)(Dn.c, {
                      itemName: jB,
                      amount: 0
                    })
                  }), (0, Hd.jsxs)("span", {
                    children: [(0, Hd.jsx)("strong", {
                      children: NB(zB)
                    }), ": ", NB(QB, nB)]
                  })]
                }, jB)
              }))
            })]
          })]
        })
      })
    }
    const ip = "buildAFactory2Game:";

    function qp(BB, jB) {
      return BB.sendIslandEdit(`baf2coopleave ${jB.baf2IslandId}`)
    }

    function fp(BB) {
      let {
        card: jB,
        canRename: zB,
        done: nB,
        t: dB
      } = BB;
      const IB = xI(),
        [NB, uB] = (0, QB.useState)(jB.baf2IslandName),
        UB = iU(NB),
        aB = "" === UB || qU(UB),
        pB = () => {
          !aB && zB && (UB !== jB.baf2IslandName ? nB(IB.sendIslandEdit(`baf2islandrename ${jB.baf2IslandId} ${UB}`)) : nB(null))
        },
        rB = () => {
          nB(null)
        };
      return (0, Hd.jsxs)("div", {
        className: "Baf2IslandForm",
        ...bU(rB),
        children: [(0, Hd.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [dB(`${ip}islandsRenameLabel`), (0, Hd.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: NB,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: vU,
            onChange: BB => {
              uB(BB.target.value)
            },
            ...cU(pB, rB)
          })]
        }), "" === UB && (0, Hd.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: dB(`${ip}islandsRenameEmpty`)
        }), qU(UB) && (0, Hd.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: dB(`${ip}islandsNameReserved`)
        }), (0, Hd.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Hd.jsx)(qI.r, {
            disabled: aB || !zB,
            onClick: pB,
            children: dB(`${ip}islandsRenameSave`)
          }), (0, Hd.jsx)(qI.f, {
            onClick: rB,
            children: dB(`${ip}islandsCancel`)
          })]
        })]
      })
    }

    function op(BB) {
      let {
        card: jB,
        canDelete: zB,
        done: nB,
        t: dB
      } = BB;
      const IB = xI(),
        [NB, uB] = (0, QB.useState)(""),
        UB = function(BB, jB) {
          return iU(BB).toLowerCase() === iU(jB).toLowerCase()
        }(NB, jB.baf2IslandName),
        aB = () => {
          UB && zB && nB(IB.sendIslandEdit(`baf2islanddelete ${jB.baf2IslandId}`))
        },
        pB = () => {
          nB(null)
        },
        rB = AU("name"),
        [sB, JB = ""] = dB(`${ip}islandsDeleteConfirm`, {
          name: rB
        }).split(rB);
      return (0, Hd.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...bU(pB),
        children: [(0, Hd.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, Hd.jsxs)("span", {
            children: [sB, (0, Hd.jsx)("strong", {
              children: jB.baf2IslandName
            }), JB]
          }), (0, Hd.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: NB,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: vU,
            onChange: BB => {
              uB(BB.target.value)
            },
            ...cU(aB, pB)
          })]
        }), wU(jB) && (0, Hd.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: dB(`${ip}islandsDeleteLeftBack`)
        }), (0, Hd.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Hd.jsx)(qI.G, {
            disabled: !UB || !zB,
            onClick: aB,
            children: dB(`${ip}islandsDeleteForGood`)
          }), (0, Hd.jsx)(qI.f, {
            onClick: pB,
            children: dB(`${ip}islandsCancel`)
          })]
        })]
      })
    }

    function Hp(BB) {
      let {
        members: jB,
        t: zB
      } = BB;
      const QB = jB.length;
      return (0, Hd.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, Hd.jsxs)("span", {
          children: [1 === QB ? zB(`${ip}islandsPlayersOne`) : zB(`${ip}islandsPlayers`, {
            count: String(QB)
          }), " "]
        }), jB.map(((BB, jB) => (0, Hd.jsxs)("span", {
          className: Sn()("Baf2IslandMember", {
            Here: BB.baf2MemberHere
          }),
          title: BB.baf2MemberHere ? zB(`${ip}islandsPlayerHere`) : void 0,
          children: [BB.baf2MemberName, jB < QB - 1 ? ", " : ""]
        }, BB.baf2MemberKey)))]
      })
    }

    function Dp(BB) {
      let {
        card: jB,
        answered: zB,
        nowMs: nB,
        t: dB
      } = BB;
      const IB = xI(),
        [NB, uB] = (0, QB.useState)(new Map),
        UB = wU(jB);
      if (!UB) return null;
      return (0, Hd.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, Hd.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: dB(`${ip}islandsLeftTitle`)
        }), (0, Hd.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: UB.left.map((BB => {
            const QB = BB.baf2LeftKey,
              aB = KU(NB.get(QB), zB, nB),
              pB = function(BB) {
                return 1 === BB ? [`${tU}islandsLeftItemsOne`] : [`${tU}islandsLeftItems`, {
                  count: String(BB)
                }]
              }(BB.baf2LeftItems);
            return (0, Hd.jsx)("li", {
              className: Sn()("Baf2IslandPerson", {
                Pending: aB
              }),
              children: (0, Hd.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Hd.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: BB.baf2LeftName
                }), (0, Hd.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: dB(pB[0], pB[1])
                }), UB.claim && (0, Hd.jsx)(qI.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: aB,
                  onClick: () => {
                    (BB => {
                      const zB = IB.sendIslandEdit(`baf2coopclaim ${jB.baf2IslandId} ${BB}`);
                      uB((jB => new Map(jB).set(BB, {
                        atMs: Date.now(),
                        answer: zB
                      })))
                    })(QB)
                  },
                  children: dB(`${ip}islandsClaim`)
                })]
              })
            }, QB)
          }))
        }), UB.goThere && (0, Hd.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: dB(`${ip}islandsClaimGoThere`)
        })]
      })
    }

    function Fp(BB) {
      let {
        card: jB,
        view: zB,
        blocked: nB,
        maxIslands: dB,
        answered: IB,
        nowMs: NB,
        done: uB,
        openSocial: UB,
        t: aB
      } = BB;
      const pB = xI(),
        [rB, sB] = (0, QB.useState)(new Map),
        [JB, mB] = (0, QB.useState)(new Map),
        [yB, kB] = (0, QB.useState)(null),
        GB = (0, QB.useRef)(null);
      ja(GB);
      const LB = jB.baf2IslandId,
        gB = jB.baf2IslandCoop,
        tB = null !== gB && void 0 !== gB && gB.baf2CoopMembers.some((BB => BB.baf2MemberKey === yB)) ? yB : null,
        SB = function(BB, jB) {
          const zB = BB.baf2IslandCoop;
          return zB && xU(zB) || null !== jB ? void 0 : BB.baf2IslandInvitable
        }(jB, nB),
        MB = function(BB, jB) {
          const zB = BB.baf2IslandCoop;
          return zB && xU(zB) ? {
            key: `${tU}islandsCoopFull`,
            params: {
              max: String(zB.baf2CoopMax)
            }
          } : void 0 !== BB.baf2IslandInvitable && null === jB || zB && !zB.baf2CoopManageHere ? null : "degraded" === jB || "stuck" === jB ? {
            key: `${tU}islandsInviteNotLoaded`
          } : null === jB || function(BB) {
            return "notHome" === BB || "wilds" === BB || "visiting" === BB
          }(jB) || DU(jB) ? {
            key: `${tU}islandsInviteGoThere`
          } : {
            key: `${tU}islandsInviteBusy`
          }
        }(jB, nB),
        EB = () => {
          var BB;
          kB(null), null === (BB = GB.current) || void 0 === BB || BB.focus()
        };
      return (0, Hd.jsxs)("div", {
        ref: GB,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...bU(null === tB ? uB : EB),
        children: [gB && (0, Hd.jsxs)(Hd.Fragment, {
          children: [(0, Hd.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: aB(`${ip}islandsPlayersTitle`, {
              count: String(gB.baf2CoopMembers.length),
              max: String(gB.baf2CoopMax)
            })
          }), (0, Hd.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: gB.baf2CoopMembers.map(((BB, jB) => {
              const QB = BB.baf2MemberKey,
                nB = KU(rB.get(QB), IB, NB);
              return (0, Hd.jsxs)("li", {
                className: Sn()("Baf2IslandPerson", {
                  Pending: nB
                }),
                children: [(0, Hd.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, Hd.jsx)("span", {
                    className: Sn()("Baf2IslandPersonName", {
                      Here: BB.baf2MemberHere
                    }),
                    children: BB.baf2MemberName
                  }), BB.baf2MemberHere && (0, Hd.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: aB(`${ip}islandsPlayerHere`)
                  }), 0 === jB && (0, Hd.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: aB(`${ip}islandsPlayerOwner`)
                  }), zB.remove && jB > 0 && !nB && tB !== QB && (0, Hd.jsx)(qI.J, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var BB;
                      kB(QB), null === (BB = GB.current) || void 0 === BB || BB.focus()
                    },
                    children: aB(`${ip}islandsRemove`)
                  })]
                }), tB === QB && (0, Hd.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, Hd.jsx)("p", {
                    children: TU(aB, `${ip}islandsRemoveConfirm`, {
                      player: BB.baf2MemberName
                    })
                  }), (0, Hd.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, Hd.jsx)(qI.G, {
                      onClick: () => {
                        (BB => {
                          const jB = pB.sendIslandEdit(`baf2coopremove ${LB} ${BB.baf2MemberKey}`);
                          sB((zB => new Map(zB).set(BB.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: jB
                          }))), EB()
                        })(BB)
                      },
                      children: aB(`${ip}islandsRemoveYes`)
                    }), (0, Hd.jsx)(qI.f, {
                      onClick: EB,
                      children: aB(`${ip}islandsCancel`)
                    })]
                  })]
                })]
              }, QB)
            }))
          })]
        }), (void 0 !== SB || null !== MB) && (0, Hd.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: aB(`${ip}islandsInviteTitle`)
        }), !gB && (void 0 !== SB || null !== MB) && (0, Hd.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: aB(`${ip}islandsInviteShareNote`)
        }), 0 === (null === SB || void 0 === SB ? void 0 : SB.length) && (0, Hd.jsx)(Yp, {
          openSocial: UB,
          t: aB
        }), void 0 !== SB && SB.length > 0 && (0, Hd.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: SB.map((BB => {
            const jB = !0 === BB.baf2InvitableSent || KU(JB.get(BB.baf2InvitableId), IB, NB);
            return (0, Hd.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, Hd.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Hd.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: BB.baf2InvitableName
                }), BB.baf2InvitableFull && !jB && (0, Hd.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: aB(`${ip}islandsInviteTheirFull`, {
                    max: String(dB)
                  })
                }), (jB || !BB.baf2InvitableFull) && (0, Hd.jsx)(qI.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: jB,
                  onClick: () => {
                    (BB => {
                      const jB = pB.sendIslandEdit(`baf2coopinvite ${LB} ${BB}`);
                      mB((zB => new Map(zB).set(BB, {
                        atMs: Date.now(),
                        answer: jB
                      })))
                    })(BB.baf2InvitableId)
                  },
                  children: aB(jB ? `${ip}islandsInvited` : `${ip}islandsInvite`)
                })]
              })
            }, BB.baf2InvitableId)
          }))
        }), MB && (0, Hd.jsx)(na, {
          note: MB,
          t: aB
        }), (0, Hd.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Hd.jsx)(qI.f, {
            onClick: uB,
            children: aB(`${ip}islandsDone`)
          })
        })]
      })
    }

    function Yp(BB) {
      let {
        openSocial: jB,
        t: zB
      } = BB;
      return (0, Hd.jsxs)(Hd.Fragment, {
        children: [(0, Hd.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: zB(jB ? `${ip}islandsInviteNobody` : `${ip}islandsInviteNobodyGuest`)
        }), jB && (0, Hd.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Hd.jsx)(qI.f, {
            onClick: jB,
            children: zB("socialBar:social")
          })
        })]
      })
    }

    function Vp(BB) {
      let {
        className: jB,
        text: zB,
        ConfirmButton: nB,
        confirmLabel: dB,
        canConfirm: IB,
        send: NB,
        done: uB,
        t: UB
      } = BB;
      const aB = (0, QB.useRef)(null);
      ja(aB);
      const pB = () => {
        uB(null)
      };
      return (0, Hd.jsxs)("div", {
        ref: aB,
        tabIndex: -1,
        className: Sn()("Baf2IslandForm", jB),
        ...bU(pB),
        children: [(0, Hd.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: zB
        }), (0, Hd.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Hd.jsx)(nB, {
            disabled: !IB,
            onClick: () => {
              IB && uB(NB())
            },
            children: dB
          }), (0, Hd.jsx)(qI.f, {
            onClick: pB,
            children: UB(`${ip}islandsCancel`)
          })]
        })]
      })
    }

    function hp(BB) {
      return "hidden" !== BB
    }

    function Xp(BB) {
      var jB, zB;
      let {
        card: nB,
        keepOwn: dB,
        blocked: IB,
        maxIslands: NB,
        serverNowMs: uB,
        nowMs: UB,
        actions: aB,
        full: pB,
        waits: rB,
        answered: sB,
        mode: JB,
        setMode: mB,
        pending: yB,
        onSent: kB,
        switchTo: GB,
        leave: LB,
        coopOn: gB,
        openSocial: tB,
        t: SB
      } = BB;
      const MB = xI(),
        EB = nB.baf2IslandActive,
        iB = EB ? null : function(BB, jB) {
          if (BB <= 0) return null;
          const zB = jB - BB;
          if (zB < Ld) return [`${tU}islandsPlayedJustNow`];
          if (zB < SU) return [`${tU}islandsPlayedMinutes`, {
            minutes: String(Math.floor(zB / Ld))
          }];
          if (zB < MU) return [`${tU}islandsPlayedHours`, {
            hours: String(Math.floor(zB / SU))
          }];
          const QB = Math.floor(zB / MU);
          return 1 === QB ? [`${tU}islandsPlayedDay`] : [`${tU}islandsPlayedDays`, {
            days: String(QB)
          }]
        }(nB.baf2IslandLastPlayedMs, uB),
        qB = void 0 === (fB = nB.baf2IslandItems) ? null : 0 === fB ? [`${tU}islandsItemsNone`] : 1 === fB ? [`${tU}islandsItemsOne`] : [`${tU}islandsItems`, {
          count: String(fB)
        }];
      var fB;
      const oB = function(BB) {
          return BB ? 1 === BB ? [`${tU}islandsWaitingOne`] : [`${tU}islandsWaiting`, {
            count: String(BB)
          }] : null
        }(nB.baf2IslandWaiting),
        HB = nB.baf2IslandUnreadable,
        DB = nB.baf2IslandCoop,
        FB = lU(nB, aB, dB, pB, gB, IB),
        YB = (0, QB.useRef)(null);
      RU(null !== JB, YB);
      const VB = () => {
          var BB;
          mB(null), null === (BB = YB.current) || void 0 === BB || BB.focus()
        },
        hB = (BB, jB) => {
          VB(), null !== BB && kB(BB, jB)
        },
        XB = (BB, jB) => SB(`${ip}${BB}`, {
          time: Ed(SB, jB)
        });
      return (0, Hd.jsxs)("li", {
        ref: YB,
        tabIndex: -1,
        className: Sn()("Baf2IslandCard", {
          Active: EB,
          Pending: yB,
          Shared: void 0 !== DB
        }),
        children: [(0, Hd.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, Hd.jsx)("strong", {
            className: "Baf2IslandName",
            children: nB.baf2IslandName
          }), EB && (0, Hd.jsx)("span", {
            className: "Baf2IslandBadge",
            children: SB(`${ip}islandsOnThis`)
          }), DB && (0, Hd.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: SB(`${ip}islandsShared`)
          })]
        }), "member" === (null === DB || void 0 === DB ? void 0 : DB.baf2CoopRole) && (0, Hd.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: TU(SB, `${ip}islandsSharedBy`, {
            owner: DB.baf2CoopOwner
          })
        }), void 0 !== HB && (0, Hd.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: SB("newer" === HB ? `${ip}islandsUnreadable` : `${ip}islandsDamaged`)
        }), "corrupt" === HB && pB && (0, Hd.jsx)("p", {
          className: "Baf2IslandStats",
          children: SB(`${ip}islandsDamagedFull`)
        }), void 0 === HB && (0, Hd.jsxs)(Hd.Fragment, {
          children: [(0, Hd.jsx)(Qa, {
            tier: nB.baf2IslandTier,
            t: SB
          }), (0, Hd.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, Hd.jsx)("span", {
              children: 1 === nB.baf2IslandQuestsDone ? SB(`${ip}islandsQuestsDoneOne`) : SB(`${ip}islandsQuestsDone`, {
                count: String(nB.baf2IslandQuestsDone)
              })
            }), (0, Hd.jsx)("span", {
              children: 1 === nB.baf2IslandMachines ? SB(`${ip}islandsMachinesOne`) : SB(`${ip}islandsMachines`, {
                count: String(nB.baf2IslandMachines)
              })
            }), qB && (0, Hd.jsx)("span", {
              children: SB(qB[0], qB[1])
            }), oB && (0, Hd.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: SB(oB[0], oB[1])
            }), iB && (0, Hd.jsx)("span", {
              children: SB(iB[0], iB[1])
            })]
          })]
        }), DB && void 0 === DB.baf2CoopState && "people" !== JB && (0, Hd.jsx)(Hp, {
          members: DB.baf2CoopMembers,
          t: SB
        }), null === JB && (0, Hd.jsx)(Dp, {
          card: nB,
          answered: sB,
          nowMs: UB,
          t: SB
        }), FB.note && (0, Hd.jsx)(na, {
          note: FB.note,
          className: Sn()({
            Unreachable: void 0 !== (null === DB || void 0 === DB ? void 0 : DB.baf2CoopState)
          }),
          t: SB
        }), "rename" === JB && (0, Hd.jsx)(fp, {
          card: nB,
          canRename: "enabled" === FB.rename,
          done: hB,
          t: SB
        }), "delete" === JB && (0, Hd.jsx)(op, {
          card: nB,
          canDelete: "enabled" === FB.delete,
          done: BB => {
            hB(BB, DB ? "delete" : void 0)
          },
          t: SB
        }), "people" === JB && (0, Hd.jsx)(Fp, {
          card: nB,
          view: FB,
          blocked: IB,
          maxIslands: NB,
          answered: sB,
          nowMs: UB,
          done: VB,
          openSocial: tB,
          t: SB
        }), "leave" === JB && (0, Hd.jsx)(Vp, {
          className: "Leave",
          text: TU(SB, `${ip}islandsLeaveConfirm`, {
            island: nB.baf2IslandName,
            owner: null !== (jB = null === (zB = nB.baf2IslandCoop) || void 0 === zB ? void 0 : zB.baf2CoopOwner) && void 0 !== jB ? jB : ""
          }),
          ConfirmButton: qI.G,
          confirmLabel: SB(`${ip}islandsLeaveYes`),
          canConfirm: "enabled" === FB.leave,
          send: () => qp(MB, nB),
          done: BB => {
            hB(BB, "leave"), null !== BB && EB && LB()
          },
          t: SB
        }), "unshare" === JB && (0, Hd.jsx)(Vp, {
          className: "Unshare",
          text: TU(SB, `${ip}islandsStopSharingConfirm`, {
            island: nB.baf2IslandName
          }),
          ConfirmButton: qI.r,
          confirmLabel: SB(`${ip}islandsStopSharing`),
          canConfirm: "enabled" === FB.unshare,
          send: () => MB.sendIslandEdit(`baf2coopunshare ${nB.baf2IslandId}`),
          done: BB => {
            hB(BB), null !== BB && LB()
          },
          t: SB
        }), null === JB && !yB && (0, Hd.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": nB.baf2IslandName,
          children: [hp(FB.switch) && (0, Hd.jsx)(qI.r, {
            disabled: "enabled" !== FB.switch,
            onClick: GB,
            children: "tryAgain" === FB.switchLabel ? SB(`${ip}islandsTryAgain`) : rB.switch > 0 ? XB("islandsSwitchIn", rB.switch) : SB(`${ip}islandsSwitch`)
          }), hp(FB.rename) && (0, Hd.jsx)(qI.f, {
            disabled: "enabled" !== FB.rename,
            onClick: () => {
              mB("rename")
            },
            children: SB(`${ip}islandsRename`)
          }), hp(FB.people) && (0, Hd.jsx)(qI.f, {
            disabled: "enabled" !== FB.people,
            onClick: () => {
              mB("people")
            },
            children: SB("players" === FB.peopleLabel ? `${ip}islandsPlayersButton` : `${ip}islandsInviteButton`)
          }), hp(FB.unshare) && (0, Hd.jsx)(qI.f, {
            disabled: "enabled" !== FB.unshare,
            onClick: () => {
              mB("unshare")
            },
            children: SB(`${ip}islandsStopSharing`)
          }), hp(FB.dismiss) && (0, Hd.jsx)(qI.f, {
            disabled: "enabled" !== FB.dismiss,
            onClick: () => {
              kB(qp(MB, nB), "dismiss"), EB && LB()
            },
            children: SB(`${ip}islandsDismiss`)
          }), hp(FB.leave) && (0, Hd.jsx)(qI.J, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== FB.leave,
            onClick: () => {
              mB("leave")
            },
            children: EB && rB.switch > 0 ? XB("islandsLeaveIn", rB.switch) : SB(`${ip}islandsLeave`)
          }), hp(FB.delete) && (0, Hd.jsx)(qI.J, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== FB.delete,
            onClick: () => {
              mB("delete")
            },
            children: rB.change > 0 && FB.deleteWaits ? XB("islandsDeleteIn", rB.change) : SB(`${ip}islandsDelete`)
          })]
        })]
      })
    }
    const Zp = "buildAFactory2Game:";

    function Ap(BB) {
      let {
        invite: jB,
        actions: zB,
        full: nB,
        maxIslands: dB,
        waitSeconds: IB,
        focus: NB,
        focused: uB,
        join: UB,
        decline: aB,
        t: pB
      } = BB;
      const [rB, sB] = (0, QB.useState)(!1), JB = (0, QB.useRef)(null);
      RU(rB, JB), (0, QB.useEffect)((() => {
        var BB;
        NB && (sB(!0), null === (BB = JB.current) || void 0 === BB || BB.focus(), uB())
      }), [NB, uB]);
      const mB = function(BB, jB, zB, QB, nB) {
          return zB ? {
            join: !1,
            note: {
              key: `${tU}islandsJoinTooMany`,
              params: {
                max: String(QB)
              }
            }
          } : BB.baf2InvitePlayers >= nB ? {
            join: !1,
            note: {
              key: `${tU}islandsJoinFull`
            }
          } : {
            join: jB.switch,
            note: null
          }
        }(jB, zB, nB, dB, 10),
        yB = jB.baf2InviteIsland,
        kB = jB.baf2InvitePlayers,
        GB = () => {
          var BB;
          sB(!1), null === (BB = JB.current) || void 0 === BB || BB.focus()
        },
        LB = IB > 0 && null === mB.note ? pB(`${Zp}islandsJoinIn`, {
          time: Ed(pB, IB)
        }) : pB(`${Zp}islandsJoin`);
      return (0, Hd.jsxs)("li", {
        ref: JB,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...rB ? bU(GB) : {},
        children: [(0, Hd.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, Hd.jsx)("strong", {
            className: "Baf2IslandName",
            children: yB
          })
        }), (0, Hd.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: TU(pB, `${Zp}islandsInvitedBy`, {
            owner: jB.baf2InviteOwner
          })
        }), (0, Hd.jsx)(Qa, {
          tier: jB.baf2InviteTier,
          t: pB
        }), (0, Hd.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, Hd.jsx)("span", {
            children: 1 === kB ? pB(`${Zp}islandsPlayersCountOne`) : pB(`${Zp}islandsPlayersCount`, {
              count: String(kB)
            })
          })
        }), mB.note && (0, Hd.jsx)(na, {
          note: mB.note,
          t: pB
        }), rB && (0, Hd.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: TU(pB, `${Zp}islandsJoinConfirm`, {
            island: yB
          })
        }), !rB && (0, Hd.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": yB,
          children: [(0, Hd.jsx)(qI.r, {
            disabled: !mB.join,
            onClick: () => {
              var BB;
              sB(!0), null === (BB = JB.current) || void 0 === BB || BB.focus()
            },
            children: LB
          }), (0, Hd.jsx)(qI.f, {
            onClick: aB,
            children: pB(`${Zp}islandsDecline`)
          })]
        }), rB && (0, Hd.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Hd.jsx)(qI.r, {
            disabled: !mB.join,
            onClick: UB,
            children: pB(`${Zp}islandsJoinYes`)
          }), (0, Hd.jsx)(qI.f, {
            onClick: GB,
            children: pB(`${Zp}islandsCancel`)
          })]
        })]
      })
    }

    function Tp(BB) {
      let {
        invites: jB,
        actions: zB,
        full: QB,
        maxIslands: nB,
        waitSeconds: dB,
        focus: IB,
        focused: NB,
        leave: uB,
        declined: UB,
        t: aB
      } = BB;
      const pB = xI();
      return (0, Hd.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, Hd.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: aB(`${Zp}islandsInvitesTitle`)
        }), (0, Hd.jsx)("ul", {
          className: "Baf2IslandCards",
          children: jB.map((BB => {
            const jB = BB.baf2InviteId;
            return (0, Hd.jsx)(Ap, {
              invite: BB,
              actions: zB,
              full: QB,
              maxIslands: nB,
              waitSeconds: dB,
              focus: IB === jB,
              focused: NB,
              join: () => {
                pB.send(`baf2coopaccept ${jB}`), uB()
              },
              decline: () => {
                pB.send(`baf2coopdecline ${jB}`), UB(jB)
              },
              t: aB
            }, jB)
          }))
        })]
      })
    }
    const Pp = "buildAFactory2Game:";

    function Wp(BB) {
      let {
        cards: jB,
        activeName: zB,
        canStart: nB,
        waitSeconds: dB,
        leave: IB,
        t: NB
      } = BB;
      const uB = xI(),
        [UB, aB] = (0, QB.useState)(!1),
        [pB, rB] = (0, QB.useState)(""),
        sB = (0, QB.useRef)(null);
      RU(UB, sB), (0, QB.useEffect)((() => {
        var BB;
        UB && (null === (BB = sB.current) || void 0 === BB || BB.focus())
      }), [UB]);
      const JB = fU(jB),
        mB = iU(pB),
        yB = qU(mB),
        kB = () => {
          nB && !yB && (uB.send("" === mB || mB === JB ? cB : `${cB} ${mB}`), IB())
        },
        GB = () => {
          var BB;
          aB(!1), null === (BB = sB.current) || void 0 === BB || BB.focus()
        };
      return (0, Hd.jsxs)("li", {
        ref: sB,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...UB ? bU(GB) : {},
        children: [(0, Hd.jsx)("strong", {
          className: "Baf2IslandName",
          children: NB(`${Pp}islandsNewTitle`)
        }), !UB && (0, Hd.jsx)("p", {
          className: "Baf2IslandStats",
          children: NB(`${Pp}islandsNewNote`)
        }), UB && (0, Hd.jsxs)(Hd.Fragment, {
          children: [(0, Hd.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: TU(NB, `${Pp}islandsNewConfirm`, {
              name: zB
            })
          }), (0, Hd.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [NB(`${Pp}islandsNewNameLabel`), (0, Hd.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: pB,
              placeholder: JB,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: vU,
              onChange: BB => {
                rB(BB.target.value)
              },
              ...cU(kB, GB)
            })]
          }), yB && (0, Hd.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: NB(`${Pp}islandsNameReserved`)
          })]
        }), (0, Hd.jsxs)("div", {
          className: Sn()("Baf2IslandButtons", {
            Stacked: UB
          }),
          children: [(0, Hd.jsx)(qI.r, {
            disabled: !nB || UB && yB,
            onClick: () => {
              if (!UB) return rB(JB), void aB(!0);
              kB()
            },
            children: dB > 0 ? NB(`${Pp}islandsNewIn`, {
              time: Ed(NB, dB)
            }) : NB(UB ? `${Pp}islandsNewConfirmButton` : `${Pp}islandsNew`)
          }), UB && (0, Hd.jsx)(qI.f, {
            onClick: GB,
            children: NB(`${Pp}islandsCancel`)
          })]
        })]
      })
    }

    function ep(BB) {
      var jB, zB;
      let {
        message: nB,
        arrivedAtMs: dB,
        close: IB,
        leave: NB,
        openSocial: uB
      } = BB;
      const UB = xI(),
        {
          t: aB
        } = (0, fn.D)(),
        pB = za(1e3),
        [rB, sB] = (0, QB.useState)(null),
        [JB, mB] = (0, QB.useState)(new Map),
        [yB, kB] = (0, QB.useState)(new Set),
        GB = nB.baf2IslandCards,
        LB = function(BB, jB, zB, QB) {
          return (null !== BB && void 0 !== BB ? BB : []).filter((BB => jB + BB.baf2InviteLeftMs > zB && !QB.has(BB.baf2InviteId)))
        }(nB.baf2IslandsInvites, dB, pB, yB),
        gB = LB.map((BB => BB.baf2InviteId)).join(" "),
        tB = (0, QB.useRef)(null),
        SB = OU(tB);
      Ba(), (0, QB.useEffect)((() => {
        var BB, jB;
        null !== (BB = tB.current) && void 0 !== BB && BB.contains(document.activeElement) || (null === (jB = tB.current) || void 0 === jB || jB.focus())
      }), [nB, gB]), (0, QB.useEffect)((() => {
        mB((BB => function(BB, jB, zB, QB) {
          const nB = new Map;
          for (const dB of jB) {
            const jB = BB.get(dB.baf2IslandId);
            jB && (void 0 !== jB.untilGone || QB < jB.answer) && hU(jB, dB, zB) && nB.set(dB.baf2IslandId, jB)
          }
          return nB.size === BB.size ? BB : nB
        }(BB, nB.baf2IslandCards, Date.now(), nB.baf2IslandsAnswered)))
      }), [nB]);
      const MB = EU(dB, nB.baf2IslandsWaitMs, pB),
        EB = nB.baf2IslandsBlocked,
        iB = FU(EB, MB),
        qB = function(BB, jB) {
          const zB = FU(BB, 0);
          return {
            switch: zB.switch ? jB : 0,
            change: zB.change ? jB : 0
          }
        }(EB, MB),
        fB = GB.length >= nB.baf2IslandsMax,
        oB = GB.length > 0,
        HB = function(BB, jB, zB) {
          return BB + Math.max(0, zB - jB)
        }(nB.baf2IslandsNowMs, dB, pB),
        DB = null !== (jB = null === (zB = GB.find((BB => BB.baf2IslandActive))) || void 0 === zB ? void 0 : zB.baf2IslandName) && void 0 !== jB ? jB : "",
        FB = function(BB) {
          const jB = BB.filter(eU).length;
          return jB <= 1 && jB < BB.length
        }(GB),
        YB = !0 === nB.baf2IslandsCoop,
        VB = function(BB, jB) {
          const zB = BB.find((BB => BB.baf2IslandActive)),
            QB = null === zB || void 0 === zB ? void 0 : zB.baf2IslandCoop;
          return zB && "member" === (null === QB || void 0 === QB ? void 0 : QB.baf2CoopRole) ? {
            key: `${tU}islandsKeepOwnMember`,
            names: {
              owner: QB.baf2CoopOwner,
              island: zB.baf2IslandName
            }
          } : {
            key: jB ? `${tU}islandsKeepOwn` : `${tU}islandsKeepOwnSolo`
          }
        }(GB, YB),
        [hB, XB] = (0, QB.useState)(null);
      (0, QB.useEffect)((() => {
        void 0 !== nB.baf2IslandsFocusInvite && XB(nB.baf2IslandsFocusInvite)
      }), [nB]);
      const ZB = (0, QB.useCallback)((() => {
          XB(null)
        }), []),
        AB = rB ? GB.find((BB => BB.baf2IslandId === rB.id)) : void 0,
        TB = rB && AB && "hidden" !== lU(AB, iB, FB, fB, YB, EB)[rB.mode] ? rB : null;
      return (0, Hd.jsx)(iI.d, {
        close: IB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Hd.jsxs)("section", {
          ref: tB,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: SB ? {
            marginTop: `${SB.marginTop}px`,
            maxHeight: `${SB.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, Hd.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Hd.jsxs)("div", {
              children: [(0, Hd.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: aB(`${Pp}islandsTitle`)
              }), oB && (0, Hd.jsx)("p", {
                children: aB(`${Pp}islandsSubtitle`, {
                  count: String(GB.length),
                  max: String(nB.baf2IslandsMax)
                })
              })]
            }), (0, Hd.jsx)(qI.j, {
              ariaLabel: aB(`${Pp}islandsClose`),
              onClick: IB
            })]
          }), (0, Hd.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== EB && (0, Hd.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: TU(aB, oU(EB, HU(GB)), {
                island: DB
              })
            }), oB && LB.length > 0 && (0, Hd.jsx)(Tp, {
              invites: LB,
              actions: iB,
              full: fB,
              maxIslands: nB.baf2IslandsMax,
              waitSeconds: qB.switch,
              focus: hB,
              focused: ZB,
              leave: NB,
              declined: BB => {
                kB((jB => new Set(jB).add(BB)))
              },
              t: aB
            }), oB && (0, Hd.jsxs)(Hd.Fragment, {
              children: [fB && (0, Hd.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: aB(`${Pp}islandsFull`, {
                  max: String(nB.baf2IslandsMax)
                })
              }), (0, Hd.jsx)("p", {
                className: "Baf2IslandsNote",
                children: TU(aB, VB.key, VB.names)
              }), (0, Hd.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [GB.map((BB => {
                  const jB = BB.baf2IslandId;
                  return (0, Hd.jsx)(Xp, {
                    card: BB,
                    keepOwn: FB,
                    coopOn: YB,
                    openSocial: uB,
                    blocked: EB,
                    maxIslands: nB.baf2IslandsMax,
                    serverNowMs: HB,
                    nowMs: pB,
                    actions: iB,
                    full: fB,
                    waits: qB,
                    answered: nB.baf2IslandsAnswered,
                    mode: (null === TB || void 0 === TB ? void 0 : TB.id) === jB ? TB.mode : null,
                    setMode: BB => {
                      sB(null === BB ? null : {
                        id: jB,
                        mode: BB
                      })
                    },
                    pending: hU(JB.get(jB), BB, pB),
                    onSent: (zB, QB) => {
                      mB((nB => {
                        const dB = {
                          atMs: Date.now(),
                          from: BB.baf2IslandName,
                          answer: zB
                        };
                        return new Map(nB).set(jB, QB ? {
                          ...dB,
                          untilGone: QB
                        } : dB)
                      }))
                    },
                    leave: NB,
                    switchTo: () => {
                      UB.send(`baf2islandswitch ${jB}`), NB()
                    },
                    t: aB
                  }, jB)
                })), !fB && (0, Hd.jsx)(Wp, {
                  cards: GB,
                  activeName: DB,
                  canStart: iB.change,
                  waitSeconds: qB.change,
                  leave: NB,
                  t: aB
                })]
              })]
            })]
          })]
        })
      })
    }
    var lp = zB(5097);
    const wp = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        DQ: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      xp = Object.keys(wp),
      Kp = new Set([...Object.keys(cj), ...[...Vj.Press.recipes, ...Vj["Wire Mill"].recipes].map((BB => BB.output))]),
      Cp = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      cp = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      bp = / Bar$|Alloy$/,
      vp = /Porkchop|Beef|Mutton|Venison|Steak/,
      Rp = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const Op = (0, QB.memo)((function(BB) {
      let {
        item: jB,
        name: zB,
        amount: QB,
        selected: nB,
        small: dB,
        onPick: IB
      } = BB;
      return (0, Hd.jsxs)("button", {
        type: "button",
        className: Sn()("Baf2TermTile", {
          On: nB,
          Small: dB
        }),
        "aria-label": `${zB}: ${QB}`,
        "aria-pressed": nB,
        onClick: () => {
          IB(jB)
        },
        children: [(0, Hd.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, Hd.jsx)(Dn.c, {
            itemName: jB,
            amount: 0
          })
        }), (0, Hd.jsx)("span", {
          className: "Baf2TermCount",
          children: Sd(QB, 1e4)
        }), !dB && (0, Hd.jsx)("span", {
          className: "Baf2TermName",
          children: zB
        })]
      })
    }));

    function Br(BB) {
      let {
        store: jB,
        close: zB,
        send: nB
      } = BB;
      const {
        t: dB
      } = (0, fn.D)(), {
        isTouchScreen: IB
      } = (0, Ln.m)(["isTouchScreen"]);
      ! function(BB) {
        const [jB, zB] = (0, QB.useState)(BB.version);
        (0, QB.useEffect)((() => (zB(BB.version), BB.subscribe((() => {
          zB(BB.version)
        })))), [BB])
      }(jB);
      const [NB, uB] = (0, QB.useState)("all"), [UB, aB] = (0, QB.useState)(!1), [pB, rB] = (0, QB.useState)(""), [sB, JB] = (0, QB.useState)(""), [mB, yB] = (0, QB.useState)(null), [kB, GB] = (0, QB.useState)(!1), [LB, gB, tB] = function() {
        const BB = (0, QB.useRef)(null),
          [jB, zB] = (0, QB.useState)(!1),
          nB = () => {
            const jB = BB.current;
            zB(null !== jB && jB.scrollLeft + jB.clientWidth < jB.scrollWidth - 1)
          };
        return (0, QB.useEffect)(nB), (0, QB.useEffect)((() => {
          const jB = BB.current;
          if (!jB) return;
          const zB = new ResizeObserver(nB);
          return zB.observe(jB), () => {
            zB.disconnect()
          }
        }), []), [BB, jB, nB]
      }(), SB = (0, QB.useMemo)((() => new Map), [dB]), MB = BB => {
        let jB = SB.get(BB);
        return void 0 === jB && (jB = function(BB, jB) {
          const zB = /^(.+) \((.+)\)$/.exec(BB);
          return zB ? jB(zB[2], zB[1]) : BB
        }(Id(dB, BB), ((BB, jB) => dB("buildAFactory2Game:terminalTileKind", {
          kind: BB,
          base: jB
        }))), SB.set(BB, jB)), jB
      }, EB = jB.isReadOnly(), iB = kB && !EB, qB = jB.recent(), fB = jB.items(), oB = sB.trim().toLowerCase(), HB = iB ? jB.heldItems(mB) : ("recent" === NB ? qB : fB).filter((BB => {
        const jB = MB(BB);
        return ("all" === NB || "recent" === NB || function(BB) {
          return md(BB) ? "farm" : Cp.test(BB) ? "nuclear" : bp.test(BB) ? "bars" : vp.test(BB) ? "farm" : cp.test(BB) ? "DQ" : Kp.has(BB) ? "parts" : Rp.test(BB) ? "farm" : "other"
        }(BB) === NB) && ("" === oB || jB.toLowerCase().includes(oB)) && ("" === pB || jB.toUpperCase().startsWith(pB))
      })), DB = new Set(fB.map((BB => MB(BB).charAt(0).toUpperCase()))), FB = BB => iB ? jB.heldAmount(BB) : jB.amount(BB), YB = !iB && "recent" !== NB && qB.length > 0, VB = function(BB, jB) {
        return null !== BB && jB.includes(BB) ? BB : null
      }(mB, YB ? [...HB, ...qB] : HB), hB = null === VB ? 0 : jB.amount(VB), XB = null === VB ? 0 : FB(VB), ZB = (0, QB.useCallback)((BB => {
        yB((jB => jB === BB ? null : BB))
      }), []), AB = BB => XB > 0 || iB && null === VB && "fill" === BB && HB.length > 0, TB = iB ? [
        ["one", dB("buildAFactory2Game:terminalStoreOne")],
        ["stack", dB("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", dB(null === VB ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", dB("buildAFactory2Game:terminalTakeOne")],
        ["stack", dB("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", dB("buildAFactory2Game:terminalFill")]
      ], PB = iB ? dB("buildAFactory2Game:terminalStoreEmpty") : "" !== pB ? dB("buildAFactory2Game:terminalEmptyLetter", {
        letter: pB
      }) : "" !== oB ? dB("buildAFactory2Game:terminalEmptySearch", {
        query: sB
      }) : dB("buildAFactory2Game:terminalEmpty");
      return (0, Hd.jsx)(iI.d, {
        close: zB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, Hd.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, Hd.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Hd.jsxs)("div", {
              children: [(0, Hd.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: dB(jB.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, Hd.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, Hd.jsx)("span", {
                  className: Sn()({
                    Off: iB
                  }),
                  children: dB("buildAFactory2Game:terminalSubtitle", {
                    count: String(jB.siloCount())
                  })
                }), !EB && (0, Hd.jsx)("span", {
                  className: Sn()({
                    Off: !iB
                  }),
                  children: dB("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !EB && (0, Hd.jsx)(lp.e, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: dB("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: dB("buildAFactory2Game:terminalModeStore")
              }],
              value: iB ? "store" : "take",
              onChange: BB => {
                GB("store" === BB), yB(null)
              },
              ariaLabel: dB("buildAFactory2Game:terminalModes")
            }), (0, Hd.jsx)(qI.j, {
              onClick: zB
            })]
          }), (0, Hd.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, Hd.jsxs)("div", {
              className: Sn()("Baf2TermTools", {
                Hidden: iB
              }),
              children: [(0, Hd.jsx)("div", {
                ref: LB,
                className: Sn()("Baf2TermChips", {
                  MoreRight: gB
                }),
                onScroll: tB,
                children: UB ? (0, Hd.jsxs)(Hd.Fragment, {
                  children: [(0, Hd.jsx)("button", {
                    type: "button",
                    "aria-label": dB("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      aB(!1), rB("")
                    },
                    children: "\u2190"
                  }), [...DB].sort().map((BB => (0, Hd.jsx)("button", {
                    type: "button",
                    className: Sn()({
                      On: pB === BB
                    }),
                    onClick: () => {
                      rB(pB === BB ? "" : BB)
                    },
                    children: BB
                  }, BB)))]
                }) : (0, Hd.jsxs)(Hd.Fragment, {
                  children: [(0, Hd.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      aB(!0)
                    },
                    children: dB("buildAFactory2Game:terminalLetters")
                  }), xp.map((BB => (0, Hd.jsx)("button", {
                    type: "button",
                    className: Sn()({
                      On: NB === BB
                    }),
                    onClick: () => {
                      uB(BB)
                    },
                    children: dB(wp[BB])
                  }, BB)))]
                })
              }), !IB && (0, Hd.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: sB,
                placeholder: dB("buildAFactory2Game:terminalSearch"),
                "aria-label": dB("buildAFactory2Game:terminalSearch"),
                onChange: BB => {
                  JB(BB.target.value)
                },
                onKeyDown: BB => {
                  BB.stopPropagation()
                }
              }), (0, Hd.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": dB("buildAFactory2Game:terminalResort"),
                title: dB("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  jB.resort()
                },
                children: "\u21c5"
              })]
            }), YB && (0, Hd.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, Hd.jsx)("span", {
                children: dB(wp.recent)
              }), qB.map((BB => (0, Hd.jsx)(Op, {
                item: BB,
                name: MB(BB),
                amount: jB.amount(BB),
                selected: VB === BB,
                small: !0,
                onPick: ZB
              }, BB)))]
            }), (0, Hd.jsx)("div", {
              className: "Baf2TermTiles",
              children: HB.length > 0 ? HB.map((BB => (0, Hd.jsx)(Op, {
                item: BB,
                name: MB(BB),
                amount: FB(BB),
                selected: VB === BB,
                onPick: ZB
              }, BB))) : (0, Hd.jsx)("p", {
                className: "Baf2TermEmpty",
                children: PB
              })
            }), (0, Hd.jsxs)("div", {
              className: Sn()("Baf2TermActions", {
                Hidden: iB && 0 === HB.length
              }),
              children: [(0, Hd.jsx)("span", {
                className: "Baf2TermPicked",
                children: EB ? (0, Hd.jsxs)(Hd.Fragment, {
                  children: [null !== VB && hB > 0 ? MB(VB) : dB("buildAFactory2Game:terminalVisiting"), (0, Hd.jsx)("small", {
                    children: dB("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== VB ? (0, Hd.jsxs)(Hd.Fragment, {
                  children: [MB(VB), (0, Hd.jsx)("small", {
                    children: dB("buildAFactory2Game:terminalStored", {
                      amount: hB.toLocaleString()
                    })
                  })]
                }) : dB(iB ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !EB && TB.map((BB => {
                let [zB, QB] = BB;
                const dB = "fill" === zB ? qI.m : qI.f;
                return (0, Hd.jsx)(dB, {
                  className: "Baf2TermTake",
                  disabled: !AB(zB),
                  onClick: () => {
                    (BB => {
                      AB(BB) && nB(null === VB ? jB.putAll() : iB ? jB.put(BB, VB) : jB.take(BB, VB))
                    })(zB)
                  },
                  children: QB
                }, zB)
              }))]
            })]
          })]
        })
      })
    }

    function jr(BB) {
      let {
        kind: jB,
        icon: zB,
        label: QB,
        number: nB,
        preview: dB,
        note: IB,
        tone: NB = null,
        share: uB,
        onExplain: UB
      } = BB;
      return (0, Hd.jsxs)("button", {
        type: "button",
        className: Sn()("NxLane", jB, {
          Warn: "warn" === NB,
          Danger: "danger" === NB
        }),
        onClick: UB,
        children: [(0, Hd.jsxs)("span", {
          className: "NxLaneHead",
          children: [zB, (0, Hd.jsx)("span", {
            className: "NxLaneLabel",
            children: QB
          })]
        }), (0, Hd.jsxs)("span", {
          className: "NxLaneNum",
          children: [nB, dB && (0, Hd.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", dB]
          })]
        }), (0, Hd.jsx)("span", {
          className: "NxLaneNote",
          children: IB
        }), void 0 !== uB && (0, Hd.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, uB)) + "%"
          }
        })]
      })
    }

    function zr(BB) {
      let {
        kind: jB,
        step: zB,
        short: QB,
        planned: nB
      } = BB;
      return (0, Hd.jsx)("i", {
        className: Sn()("NxPipe", jB, `Step${zB}`, {
          Short: QB,
          Planned: nB
        }),
        "aria-hidden": "true"
      })
    }

    function Qr(BB) {
      let {
        max: jB,
        bands: zB,
        ticks: QB,
        now: nB,
        settle: dB,
        settleTone: IB,
        onExplain: NB
      } = BB;
      const uB = BB => Math.max(0, Math.min(jB, BB)) / jB * 100 + "%";
      let UB = 0;
      return (0, Hd.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: NB,
        children: [(0, Hd.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [zB.map((BB => {
            const jB = {
              bottom: uB(UB),
              height: `calc(${uB(BB.upTo)} - ${uB(UB)})`
            };
            return UB = BB.upTo, (0, Hd.jsx)("i", {
              className: Sn()("NxGaugeBand", BB.kind),
              style: jB
            }, BB.kind)
          })), null !== nB && (0, Hd.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: uB(nB)
            }
          }), void 0 !== dB && null !== dB && (0, Hd.jsx)("i", {
            className: Sn()("NxGaugeSettle", {
              Bad: "bad" === IB
            }),
            style: {
              bottom: uB(dB)
            }
          })]
        }), (0, Hd.jsx)("span", {
          className: "NxGaugeTicks",
          children: QB.map((BB => (0, Hd.jsx)("small", {
            style: {
              bottom: uB(BB)
            },
            children: BB
          }, BB)))
        })]
      })
    }

    function nr(BB) {
      const [jB, zB] = (0, QB.useState)(null), [nB, dB] = (0, QB.useState)((() => {
        try {
          return null === window.localStorage.getItem(BB)
        } catch {
          return !1
        }
      })), IB = (0, QB.useRef)(null);
      (0, QB.useEffect)((() => () => {
        null !== IB.current && clearTimeout(IB.current)
      }), []);
      const NB = (0, QB.useCallback)((jB => {
          zB(jB), dB(!1);
          try {
            window.localStorage.setItem(BB, "1")
          } catch {}
          null !== IB.current && clearTimeout(IB.current), IB.current = setTimeout((() => {
            IB.current = null, zB(null)
          }), 5e3)
        }), [BB]),
        uB = (0, QB.useCallback)(((jB, zB) => {
          const QB = `${BB}:${jB}`;
          try {
            if (null !== window.localStorage.getItem(QB)) return;
            window.localStorage.setItem(QB, "1")
          } catch {
            return
          }
          NB(zB)
        }), [NB, BB]);
      return {
        explained: jB,
        hinting: nB,
        explain: NB,
        explainOnce: uB
      }
    }

    function dr(BB) {
      let {
        text: jB,
        tone: zB,
        explained: QB
      } = BB;
      return (0, Hd.jsxs)("p", {
        className: Sn()("NxStatus", null === QB ? zB : "Explain"),
        "aria-live": "polite",
        children: [null !== QB && (0, Hd.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== QB && void 0 !== QB ? QB : jB]
      })
    }
    const Ir = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function Nr(BB, jB) {
      const zB = Number(BB[jB]);
      return 1 === zB || 2 === zB || 3 === zB ? zB : 0
    }

    function ur(BB) {
      return !!qu("reactor", BB.baf2RxNeed) || void 0 !== BB.baf2RxLayout && BB.baf2RxNeed.some((BB => {
        let [jB, zB] = BB;
        return zB > 0 && Ir.includes(jB)
      }))
    }
    const Ur = "buildAFactory2Game:";

    function ar(BB) {
      let {
        status: jB,
        store: zB,
        busy: QB
      } = BB;
      const {
        t: nB
      } = (0, fn.D)();
      return function(BB) {
        return 0 !== (BB.baf2RxFlags & mj) && (!BB.baf2RxFormed || void 0 !== BB.baf2RxLayout)
      }(jB) ? (0, Hd.jsx)(qI.m, {
        disabled: !ur(jB) || QB,
        onClick: () => {
          zB.tap("fill", (() => {
            zB.send("fill")
          }))
        },
        children: nB(void 0 !== jB.baf2RxLayout ? `${Ur}rxFillLayout` : `${Ur}rxFill`)
      }) : null
    }

    function pr(BB) {
      let {
        status: jB,
        store: zB,
        readOnly: nB,
        bare: dB = !1
      } = BB;
      const {
        t: IB
      } = (0, fn.D)(), NB = jB.baf2RxLayout, [uB, UB, aB] = jB.baf2RxDims, pB = (0, QB.useMemo)((() => {
        if (void 0 === NB) return 0;
        const BB = Uint8Array.from(NB, ((BB, jB) => Nr(NB, jB)));
        return nu([uB - 2, UB - 2, aB - 2], BB).max
      }), [NB, uB, UB, aB]);
      return void 0 === NB ? null : (0, Hd.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!dB && (0, Hd.jsx)("span", {
          className: "Baf2RxHint",
          children: IB(`${Ur}rxLayoutLine`, {
            amount: Vu(pB)
          })
        }), !nB && (0, Hd.jsx)(qI.f, {
          onClick: () => {
            zB.send("layout", 0)
          },
          children: IB(`${Ur}rxLayoutHide`)
        })]
      })
    }
    const rr = "buildAFactory2Game:",
      sr = {
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

    function Jr(BB) {
      let {
        id: jB,
        title: zB,
        body: QB,
        bodyParams: nB,
        yes: dB,
        cancel: IB,
        confirm: NB
      } = BB;
      const {
        t: uB
      } = (0, fn.D)();
      return (0, Hd.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": jB,
        children: [(0, Hd.jsx)("h3", {
          id: jB,
          children: uB(zB)
        }), (0, Hd.jsx)("p", {
          children: uB(QB, nB)
        }), (0, Hd.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, Hd.jsx)(qI.h, {
            onClick: IB,
            children: uB(`${rr}rxCancel`)
          }), (0, Hd.jsx)(qI.G, {
            onClick: NB,
            children: uB(dB)
          })]
        })]
      })
    }

    function mr(BB) {
      const [jB, zB] = (0, QB.useState)((() => BB.get()));
      return (0, QB.useEffect)((() => (zB(BB.get()), BB.subscribe((() => {
        zB(BB.get())
      })))), [BB]), jB
    }

    function yr(BB) {
      let {
        kind: jB,
        cap: zB,
        busy: nB = !1,
        whyNot: dB = null,
        apart: IB
      } = BB;
      const {
        t: NB
      } = (0, fn.D)(), [uB, UB] = (0, QB.useState)(!1), aB = null !== dB, pB = (0, QB.useRef)(null);
      if ((0, QB.useEffect)((() => {
          aB && UB(!1)
        }), [aB]), (0, QB.useLayoutEffect)((() => {
          var BB;
          const jB = null === (BB = pB.current) || void 0 === BB ? void 0 : BB.firstElementChild;
          aB ? null === jB || void 0 === jB || jB.setAttribute("aria-disabled", "true") : nB || null === jB || void 0 === jB || jB.removeAttribute("aria-disabled")
        })), !uB || aB) return (0, Hd.jsx)("span", {
        ref: pB,
        className: "Baf2RxApartWrap",
        children: (0, Hd.jsx)(qI.h, {
          disabled: nB,
          className: Sn()({
            Baf2RxNotYet: aB
          }),
          onClick: () => {
            dB ? dB() : UB(!0)
          },
          children: NB(`${rr}rxApart`)
        })
      });
      const rB = "battery" === jB,
        sB = void 0 === zB ? `${rr}batApartConfirmBodyPlan` : `${rr}batApartConfirmBody`;
      return (0, Hd.jsx)(Jr, {
        id: `baf2ApartTitle_${jB}`,
        title: rB ? `${rr}batApartConfirmTitle` : `${rr}rxApartConfirmTitle`,
        body: rB ? sB : `${rr}rxApartConfirmBody`,
        bodyParams: void 0 === zB ? void 0 : {
          cap: zB
        },
        yes: `${rr}rxApart`,
        cancel: () => {
          UB(!1)
        },
        confirm: () => {
          UB(!1), IB()
        }
      })
    }

    function kr(BB) {
      let {
        mood: jB,
        big: zB
      } = BB;
      const QB = sr[jB],
        nB = [];
      return QB.rows.forEach(((BB, jB) => {
        for (let zB = 0; zB < BB.length; zB++) "." !== BB[zB] && nB.push((0, Hd.jsx)("rect", {
          x: zB + 1,
          y: jB + 1,
          width: 1,
          height: 1,
          fill: "w" === BB[zB] ? "#8fd3ff" : QB.colour
        }, `${zB},${jB}`))
      })), (0, Hd.jsxs)("svg", {
        className: Sn()("Baf2RxFace", {
          Big: zB,
          Alarm: "alarm" === jB
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, Hd.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, Hd.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), nB]
      })
    }

    function Gr(BB) {
      return td(BB, "+").replace("+", "")
    }

    function Lr(BB) {
      let {
        kind: jB,
        dims: zB,
        cap: QB,
        disabled: nB,
        compact: dB,
        resize: IB
      } = BB;
      const {
        t: NB
      } = (0, fn.D)(), {
        min: uB,
        max: UB
      } = Tz(jB), aB = Math.min(QB, UB), pB = [`${rr}rxWide`, `${rr}rxTall`, `${rr}rxDeep`], rB = {
        w: String(zB[0]),
        h: String(zB[1]),
        d: String(zB[2]),
        blocks: String(Yu(jB, zB))
      };
      return (0, Hd.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, Hd.jsx)("div", {
          className: "Baf2RxSteppers",
          children: zB.map(((BB, jB) => {
            const dB = QB => {
                const nB = [zB[0], zB[1], zB[2]];
                nB[jB] = BB + QB, IB(nB)
              },
              rB = BB >= aB;
            return (0, Hd.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, Hd.jsx)("button", {
                type: "button",
                "aria-label": NB(`${rr}rxSmaller`),
                disabled: nB || BB <= uB,
                onClick: () => {
                  dB(-1)
                },
                children: "\u2212"
              }), (0, Hd.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [BB, (0, Hd.jsx)("small", {
                  children: NB(pB[jB])
                })]
              }), (0, Hd.jsx)("button", {
                type: "button",
                "aria-label": NB(`${rr}rxBigger`),
                disabled: nB || rB,
                onClick: () => {
                  dB(1)
                },
                children: rB && QB < UB ? "\ud83d\udd12" : "+"
              })]
            }, pB[jB])
          }))
        }), !dB && (0, Hd.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === jB ? NB(`${rr}rxSizeLine`, {
            ...rB,
            water: String(Fu(zB))
          }) : NB(`${rr}batSizeLine`, rB)
        })]
      })
    }

    function gr(BB) {
      let {
        on: jB,
        label: zB,
        disabled: QB,
        locked: nB,
        pending: dB,
        toggle: IB
      } = BB;
      return (0, Hd.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": jB,
        disabled: QB,
        "aria-disabled": nB || void 0,
        className: Sn()("Baf2RxSwitch", {
          On: jB,
          Locked: nB,
          Pending: dB
        }),
        onClick: IB,
        children: [(0, Hd.jsx)("span", {
          className: "Baf2RxKnob"
        }), zB]
      })
    }
    const tr = "buildAFactory2Game:",
      Sr = .95;

    function Mr(BB, jB) {
      return 0 !== (BB.baf2RxFlags & jB)
    }

    function Er(BB) {
      return "cryo" === BB ? RB.o : RB.s
    }

    function ir(BB) {
      var jB, zB, QB, nB, dB, IB, NB, uB, UB;
      return BB.baf2RxCryo ? {
        Ss: "cryo",
        usePerS: null !== (nB = BB.baf2RxCryoUse) && void 0 !== nB ? nB : 0,
        needPerS: null !== (dB = BB.baf2RxCryoNeed) && void 0 !== dB ? dB : 0,
        inPerS: null !== (IB = BB.baf2RxCryoIn) && void 0 !== IB ? IB : 0,
        stored: null !== (NB = BB.baf2RxCryoStored) && void 0 !== NB ? NB : 0,
        makersShort: null !== (uB = BB.baf2RxMixersShort) && void 0 !== uB ? uB : 0,
        waterBeside: null !== (UB = BB.baf2RxWaterUse) && void 0 !== UB ? UB : 0,
        pct: BB.baf2RxWater
      } : {
        Ss: "water",
        usePerS: null !== (jB = BB.baf2RxWaterUse) && void 0 !== jB ? jB : 0,
        needPerS: null !== (zB = BB.baf2RxWaterNeed) && void 0 !== zB ? zB : 0,
        inPerS: BB.baf2RxWaterIn,
        stored: BB.baf2RxWaterStored,
        makersShort: null !== (QB = BB.baf2RxCondensersShort) && void 0 !== QB ? QB : 0,
        waterBeside: 0,
        pct: BB.baf2RxWater
      }
    }

    function qr(BB) {
      const jB = "running" === BB.baf2RxState || "idle" === BB.baf2RxState;
      return BB.baf2RxFormed && BB.baf2RxTarget !== BB.baf2RxThrottle && jB ? fr(BB, BB.baf2RxTarget) : null
    }

    function fr(BB, jB) {
      const [zB, QB, nB, , , , dB, , IB] = BB.baf2RxStats, NB = Mr(BB, sj), uB = ir(BB), UB = uB.pct / 100, {
        gen: aB,
        out: pB,
        load: rB
      } = function(BB, jB, zB, QB) {
        const nB = zB ? vN : 1,
          dB = Math.min(BB.fuelHeat * nB * Math.max(0, Math.min(1, jB)), BB.size * nB);
        return {
          gen: dB,
          out: dB,
          load: mu(dB, BB.cooling, QB)
        }
      }({
        fuelHeat: zB,
        cooling: QB,
        size: nB
      }, jB / 100, NB, UB), sB = ku(dB || Qu(...BB.baf2RxDims)), JB = BB.baf2RxHeat, mB = Math.abs(rB - JB), yB = function(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : RB.s;
        const dB = zB ? vN : 1,
          IB = Math.min(BB.fuelHeat * dB * jB / 100, BB.size * dB),
          NB = IB,
          uB = BB.fuelHeat * dB,
          UB = BB.cooling * Ju(QB.pct / 100),
          aB = uB > 0 && UB < BB.size * dB ? Math.floor(100 * UB / uB) : 100,
          pB = IB * nB - QB.inPerS;
        return {
          out: NB,
          hotAbove: aB >= 100 ? null : Math.max(0, aB),
          waterSecs: QB.pct >= 100 && pB > 1e-6 ? Math.max(0, QB.stored) / pB : null
        }
      }({
        fuelHeat: zB,
        cooling: QB,
        size: nB
      }, jB, NB, {
        pct: uB.pct,
        inPerS: uB.inPerS,
        stored: uB.stored
      }, Er(uB.Ss));
      return {
        pct: jB,
        out: pB,
        coolPerS: aB * Er(uB.Ss),
        pelletsPerMin: IB > 0 ? pB / IB * 60 : 0,
        settle: rB,
        settleS: mB > 2 ? sB * Math.log(mB / 2) : 0,
        overheatS: rB > 100 && JB < 100 ? sB * Math.log((rB - JB) / (rB - 100)) : null,
        hotAbove: yB.hotAbove,
        coolantSecs: yB.waterSecs
      }
    }

    function or(BB) {
      return BB.baf2RxThrottle <= 0 && "running" !== BB.baf2RxState ? 0 : fr(BB, BB.baf2RxTarget).pelletsPerMin / 60
    }

    function Hr(BB, jB) {
      if (BB <= 0 || jB <= 0) return 0;
      const zB = BB / jB;
      return zB < .25 ? 1 : zB < .5 ? 2 : zB < .8 ? 3 : 4
    }

    function Dr(BB, jB) {
      const zB = {};
      for (const [QB, nB] of Object.entries(jB.params)) zB[QB] = "time" === QB ? Ed(BB, nB) : "amount" === QB ? Vu(nB) : String(Math.round(nB));
      return BB(jB.key, zB)
    }

    function Fr(BB, jB) {
      return {
        key: `${tr}${BB}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: jB
      }
    }

    function Yr(BB) {
      var jB;
      const zB = Mr(BB, sj),
        QB = "running" === BB.baf2RxState,
        nB = tu(BB),
        dB = BB.baf2RxHeat;
      var IB;
      if (QB && dB > cN) return {
        key: null !== (IB = nB.fix) && void 0 !== IB ? IB : `${tr}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const NB = QB ? fr(BB, BB.baf2RxTarget).coolantSecs : null,
        uB = "cryo" === ir(BB).Ss;
      if (null !== NB && NB >= 1 && NB <= 30) return Fr(uB ? "rxWarnCryo" : "rxWarnWater", "bad");
      const UB = ju(Qu(...BB.baf2RxDims)).waste,
        aB = QB ? fu(BB, UB, or(BB)).fullInS : null;
      if (null !== aB && aB <= 120 && BB.baf2RxWaste >= .5 * UB) return Fr("rxWarnWaste", "warn");
      if (null !== NB && NB >= 1) return Fr(uB ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: NB
      });
      const pB = "noWater" === BB.baf2RxState && dB > cN;
      if (BB.baf2RxDamage >= 1 && !pB) return Fr("rxDamagedHeals", "warn", {
        pct: BB.baf2RxDamage
      });
      if (BB.baf2RxCryoCut) return Fr("rxFix_cryoCut", "warn");
      const rB = ir(BB);
      if ("noWater" === BB.baf2RxState && "cryo" === rB.Ss) return Fr("noWater" === BB.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const sB = nB.fix === `${tr}rxFix_scramCool` || "idle" === BB.baf2RxState && BB.baf2RxTarget <= 0;
      if (sB && BB.baf2RxFuel <= 0) return Fr("rxFix_noFuel", "warn");
      if (sB && BB.baf2RxWaterIn <= 0 && (null !== (jB = BB.baf2RxCryoIn) && void 0 !== jB ? jB : 0) <= 0) return Fr("rxFix_noWater", "warn");
      const JB = nB.fix === `${tr}rxFix_scramCool` ? Mu(BB) : null;
      if (null !== JB) return {
        key: JB.key,
        params: {
          amount: JB.amount
        },
        tone: "info"
      };
      if ("running" !== BB.baf2RxState && "idle" !== BB.baf2RxState && null !== nB.fix) return {
        key: nB.fix,
        params: {},
        tone: "scram" === BB.baf2RxState ? "info" : pB ? "bad" : "warn"
      };
      var mB;
      if ("idle" === BB.baf2RxState && BB.baf2RxTarget <= 0) return {
        key: null !== (mB = nB.fix) && void 0 !== mB ? mB : `${tr}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const yB = BB.baf2RxCryoStarved;
      if ("cryo" === rB.Ss && yB && rB.needPerS > 0 && rB.usePerS < Sr * rB.needPerS) return Fr("noWater" === yB ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const kB = "cryo" === rB.Ss,
        GB = rB.needPerS > 0 && rB.usePerS < Sr * rB.needPerS;
      if (kB ? GB || rB.makersShort > 0 && rB.pct < 100 : rB.pct < 100) {
        const jB = kB && GB ? Math.floor(100 * rB.usePerS / rB.needPerS) : Math.min(100, rB.pct);
        if (rB.makersShort > 0) {
          return Fr(`${kB?"rxCryoShortLine":"rxWaterShortLine"}${1===rB.makersShort?"One":""}${!kB&&BB.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: jB,
            count: rB.makersShort
          })
        }
        return Fr(kB ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: jB
        })
      }
      const LB = function(BB) {
        const [jB, zB, QB] = BB.baf2RxStats, nB = ir(BB), dB = yu({
          fuelHeat: jB,
          cooling: zB,
          size: QB
        }, "cryo" === nB.Ss ? RB.f : 1, !0);
        return Math.max(0, dB * Er(nB.Ss) - nB.inPerS)
      }(BB);
      if (zB && LB > 0) return Fr("cryo" === rB.Ss ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(LB)
      });
      if (dB >= ru) return Fr("rxHotLine", "warn");
      const gB = fr(BB, BB.baf2RxTarget);
      var tB;
      if (null !== gB.overheatS) return Fr("rxWillOverheat", "bad", {
        pct: BB.baf2RxTarget,
        time: gB.overheatS,
        safe: null !== (tB = gB.hotAbove) && void 0 !== tB ? tB : 100
      });
      if (Math.abs(gB.settle - dB) >= 3) return Fr("rxSettling", "info", {
        pct: BB.baf2RxTarget,
        heat: Math.round(gB.settle),
        time: gB.settleS
      });
      const SB = Mu(BB);
      if (null !== SB) return {
        key: SB.key,
        params: {
          amount: SB.amount
        },
        tone: "info"
      };
      const MB = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== jB && ("running" !== jB || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === BB.rods ? `${Gu}rxLimitNoRods` : `${Gu}rxLimit_${pu(BB)}`
      }({
        rods: BB.baf2RxStats[3],
        ...Su(BB)
      }, BB.baf2RxState, BB.baf2RxOut >= Sr * BB.baf2RxMaxNow, !1);
      if (MB === `${tr}rxLimit_size`) {
        const [jB, , zB, QB] = BB.baf2RxStats, nB = QB > 0 && jB > 0 ? Math.ceil(zB / (jB / QB) - 1e-9) : QB, dB = BB.baf2RxDims.every((BB => BB >= Tz("reactor").max));
        if (nB < QB) return Fr(dB ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: nB,
          have: QB
        });
        if (dB) return Fr("rxLimit_sizeMax", "info")
      }
      return null !== MB ? {
        key: MB,
        params: {},
        tone: "info"
      } : Fr("rxSteady", "ok", {
        pct: BB.baf2RxTarget
      })
    }

    function Vr(BB) {
      var jB;
      if (BB.melted) return Fr("rxMeltedBody", "bad");
      if (-1 === BB.bad) return Fr("rxFix_noRoom", "warn");
      if (BB.bad > 0) return Fr(1 === BB.bad ? "rxBadOne" : "rxBad", "warn", {
        count: BB.bad
      });
      if (BB.left > 0) {
        const jB = 1 === BB.left ? "One" : "";
        return Fr(BB.canFill ? `rxPlanLeft${jB}` : `rxPlanLeftNoFill${jB}`, "info", {
          count: BB.left
        })
      }
      if (0 === BB.rods) return Fr("rxLimitNoRods", "warn");
      const zB = null !== (jB = BB.idle) && void 0 !== jB ? jB : 0;
      return zB > 0 ? Fr(1 === zB ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: zB
      }) : Fr("rxPlanReady", "ok")
    }

    function hr(BB) {
      return Math.floor(Math.max(0, BB[1] - 1) / 2)
    }

    function Xr(BB) {
      if (BB >= Iu && BB < Nu) {
        const jB = BB - Iu;
        return {
          key: 0 === jB ? `${tr}rxWhy_rodAlone` : 1 === jB ? `${tr}rxWhy_rodOne` : `${tr}rxWhy_rod`,
          params: {
            count: String(jB),
            heat: String(PN * (1 + WN * jB))
          }
        }
      }
      return BB === Nu ? {
        key: `${tr}rxWhy_channel`,
        params: {
          amount: String(lN)
        }
      } : BB === uu ? {
        key: `${tr}rxWhy_deadChannel`,
        params: {}
      } : BB === Uu ? {
        key: `${tr}rxWhy_graphite`,
        params: {}
      } : {
        key: `${tr}rxWhy_core`,
        params: {}
      }
    }
    const Zr = "buildAFactory2Game:";

    function Ar(BB, jB) {
      return 0 !== (BB.baf2RxFlags & jB)
    }

    function Tr(BB) {
      let {
        status: jB,
        pending: zB,
        store: QB,
        explain: nB
      } = BB;
      const {
        t: dB
      } = (0, fn.D)(), IB = Ar(jB, rj), NB = jB.baf2RxTarget, uB = jB.baf2RxThrottle, UB = function(BB) {
        return {
          press: () => {
            BB.throttlePress()
          },
          drag: jB => {
            BB.throttleDrag(jB)
          },
          release: () => {
            BB.throttleRelease()
          }
        }
      }(QB), aB = null === (pB = fr(jB, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, pB - 10),
        red: pB
      };
      var pB;
      return (0, Hd.jsxs)("div", {
        className: Sn()("Baf2RxThrottle", {
          Off: IB
        }),
        onClick: () => {
          IB && nB(`${Zr}rxWhy_startFirst`)
        },
        children: [(0, Hd.jsx)("span", {
          className: "HideNarrow",
          children: dB(`${Zr}rxThrottle`)
        }), (0, Hd.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, Hd.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: NB,
            disabled: IB,
            style: IB ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": dB(`${Zr}rxThrottle`),
            onPointerDown: () => {
              UB.press();
              const BB = () => {
                window.removeEventListener("pointerup", BB), window.removeEventListener("pointercancel", BB), UB.release()
              };
              window.addEventListener("pointerup", BB), window.addEventListener("pointercancel", BB)
            },
            onKeyUp: UB.release,
            onChange: BB => {
              UB.drag(Number(BB.target.value))
            }
          }), (0, Hd.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${aB.amber}%, #ffb020 ${aB.amber}% ${aB.red}%, #ff3b30 ${aB.red}%)`
            },
            "aria-hidden": "true"
          }), (0, Hd.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${uB}% + ${8*(1-uB/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, Hd.jsxs)("b", {
          children: [`${NB}%`, (0, Hd.jsx)("i", {
            className: Sn()("Baf2RxPendingDot", {
              On: zB
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function Pr(BB) {
      let {
        status: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)(), QB = fr(jB, jB.baf2RxTarget), nB = ir(jB).Ss, dB = zB("cryo" === nB ? `${Zr}rxRateCryo` : `${Zr}rxRateWater`, {
        rate: Gr(QB.coolPerS)
      }), IB = zB(`${Zr}rxChain`, {
        pct: String(jB.baf2RxTarget),
        out: Vu(QB.out),
        heat: String(Math.round(QB.settle)),
        coolant: dB
      }), NB = null !== QB.coolantSecs ? QB.coolantSecs >= 1 ? zB("cryo" === nB ? `${Zr}rxThrottleCryoOut` : `${Zr}rxThrottleWaterOut`, {
        time: Ed(zB, QB.coolantSecs)
      }) : zB("cryo" === nB ? `${Zr}rxThrottleCryoDry` : `${Zr}rxThrottleWaterDry`) : null;
      return (0, Hd.jsxs)("p", {
        className: "Baf2RxChain",
        children: [IB, null !== NB ? (0, Hd.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", NB]
        }) : (0, Hd.jsxs)("span", {
          children: [" \xb7 ", zB(`${Zr}rxChainPellets`, {
            amount: hu(QB.pelletsPerMin)
          })]
        })]
      })
    }

    function Wr(BB) {
      let {
        view: jB,
        store: zB,
        explain: nB,
        explainOnce: dB
      } = BB;
      const {
        t: IB
      } = (0, fn.D)(), {
        status: NB
      } = jB, [uB, UB] = (0, QB.useState)(!1), aB = Ar(NB, rj), rB = Ar(NB, sj), sB = !Ar(NB, yj), JB = NB.baf2RxHeat > 100;
      return (0, Hd.jsxs)(Hd.Fragment, {
        children: [(0, Hd.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, Hd.jsx)(Tr, {
            status: NB,
            pending: jB.throttlePending,
            store: zB,
            explain: nB
          }), (0, Hd.jsx)(gr, {
            on: rB,
            label: rB ? IB(`${Zr}rxOdLeft`, {
              time: Ed(IB, NB.baf2RxOdLeft)
            }) : IB(`${Zr}rxOverdrive`),
            locked: sB,
            pending: 0 !== (jB.pendingFlags & sj),
            toggle: () => {
              sB ? nB(`${Zr}rxOverdriveTier`, {
                amount: String(pB(13))
              }) : rB ? zB.setFlag(sj, !1) : jB.odConfirmed ? zB.setFlag(sj, !0) : UB(!0)
            }
          }), aB || jB.startGuard ? (0, Hd.jsx)(qI.r, {
            disabled: jB.busy.has("start") || jB.startGuard,
            onClick: () => {
              zB.tap("start", (() => {
                zB.setFlag(rj, !1)
              }))
            },
            children: IB(jB.startGuard ? `${Zr}rxStarting` : `${Zr}rxStart`)
          }) : (0, Hd.jsx)("span", {
            className: Sn()("Baf2RxScram", {
              Pulse: JB
            }),
            children: (0, Hd.jsx)(qI.G, {
              onClick: () => {
                zB.shutDown()
              },
              children: IB(`${Zr}rxScram`)
            })
          })]
        }), (0, Hd.jsx)(Pr, {
          status: NB
        }), uB && (0, Hd.jsx)(Jr, {
          id: "baf2RxOdTitle",
          title: `${Zr}rxOdConfirmTitle`,
          body: `${Zr}rxOdConfirmBody`,
          yes: `${Zr}rxOdConfirm`,
          cancel: () => {
            UB(!1)
          },
          confirm: () => {
            UB(!1), zB.tap("odConfirm", (() => {
              zB.confirmOverdrive(), zB.setFlag(sj, !0)
            })), dB(`${Zr}rxWhy_overdrive`)
          }
        })]
      })
    }

    function er(BB) {
      let {
        view: jB,
        store: zB,
        keepSize: QB
      } = BB;
      const {
        t: nB
      } = (0, fn.D)(), {
        status: dB
      } = jB;
      return (0, Hd.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, Hd.jsx)(Lr, {
          kind: "reactor",
          dims: jB.dims,
          cap: dB.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: BB => {
            zB.resize(BB)
          }
        }), QB ? (0, Hd.jsx)(qI.h, {
          onClick: QB,
          children: nB(`${Zr}rxKeepSize`)
        }) : (0, Hd.jsxs)(Hd.Fragment, {
          children: [(0, Hd.jsx)(gr, {
            on: jB.guide,
            label: nB(`${Zr}rxGuide`),
            toggle: () => {
              zB.toggleGuide()
            }
          }), Ar(dB, Gj) && (0, Hd.jsx)(gr, {
            on: jB.starter,
            label: nB(`${Zr}rxStarter`),
            toggle: () => {
              zB.toggleStarter()
            }
          }), (0, Hd.jsx)(ar, {
            status: dB,
            store: zB,
            busy: jB.busy.has("fill")
          })]
        })]
      })
    }

    function lr(BB) {
      let {
        need: jB,
        kind: zB = "reactor",
        explain: QB
      } = BB;
      const {
        t: nB
      } = (0, fn.D)(), dB = jB.length <= 3, IB = jB.reduce(((BB, jB) => {
        let [, zB] = jB;
        return BB + zB
      }), 0);
      return (0, Hd.jsxs)("div", {
        className: Sn()("Baf2RxParts", {
          Compact: !dB
        }),
        onClick: () => {
          QB("battery" === zB ? `${Zr}batWhy_store` : `${Zr}rxShellHint`)
        },
        children: [IB > 0 && (0, Hd.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === IB ? nB(`${Zr}rxBlocksOne`) : nB(`${Zr}rxBlocks`, {
            blocks: String(IB)
          })
        }), 0 === jB.length ? (0, Hd.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: nB("battery" === zB ? `${Zr}batPartsDone` : `${Zr}rxShellDone`)
        }) : iu(jB).map((BB => {
          let [jB, zB, QB] = BB;
          const IB = function(BB) {
            const jB = Du[BB];
            if (void 0 === jB) return null;
            const [zB, QB, nB] = ou[jB].colour.map((BB => Math.round(255 * BB)));
            return `rgb(${zB}, ${QB}, ${nB})`
          }(jB);
          return (0, Hd.jsxs)("span", {
            className: "Baf2RxChip",
            title: Id(nB, jB),
            children: [(0, Hd.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === IB ? {
                visibility: "hidden"
              } : {
                background: IB
              },
              title: nB(`${Zr}rxShopGhost`)
            }), (0, Hd.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, Hd.jsx)(Dn.c, {
                itemName: jB,
                amount: 0
              })
            }), (0, Hd.jsx)("span", {
              className: "Baf2RxChipName",
              children: dB ? `${zB} ${NB=Id(nB,jB),NB.replace(/^(Reactor|Battery) (?=\S)/,"")}` : zB
            }), QB >= zB ? (0, Hd.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, Hd.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: dB ? nB(`${Zr}rxShopShort`, {
                count: String(zB - QB)
              }) : "\u2212" + (zB - QB)
            })]
          }, jB);
          var NB
        }))]
      })
    }
    const wr = "buildAFactory2Game:";

    function xr(BB) {
      var jB, zB, nB, dB, IB, NB, uB;
      let {
        store: UB,
        close: aB
      } = BB;
      const {
        t: pB
      } = (0, fn.D)(), rB = xI(), sB = mr(UB), {
        explained: JB,
        explain: mB
      } = nr("baf2RxExplained"), yB = (0, QB.useCallback)(((BB, jB) => {
        mB(pB(BB, jB))
      }), [mB, pB]), kB = null === sB || void 0 === sB ? void 0 : sB.status, GB = !0 === (null === kB || void 0 === kB ? void 0 : kB.baf2BatReadOnly), LB = BB => {
        kB && rB.send(pj(kB.baf2BatAt, BB))
      }, [gB, tB, SB] = null !== (jB = null === sB || void 0 === sB ? void 0 : sB.dims) && void 0 !== jB ? jB : [0, 0, 0], MB = Vu(null !== (zB = null === sB || void 0 === sB ? void 0 : sB.Ep) && void 0 !== zB ? zB : 0), EB = !0 === (null === kB || void 0 === kB ? void 0 : kB.baf2BatFormed), iB = null !== (nB = null === kB || void 0 === kB ? void 0 : kB.baf2BatStored) && void 0 !== nB ? nB : 0, qB = Math.max(1, null !== (dB = null === kB || void 0 === kB ? void 0 : kB.baf2BatIslandCap) && void 0 !== dB ? dB : 1), fB = Math.min(100, 100 * iB / qB), oB = null === kB || void 0 === kB ? void 0 : kB.baf2BatNetPerS, HB = function(BB, jB, zB) {
        return zB > 0 && jB >= zB ? "full" : void 0 !== BB && BB >= .05 ? "charging" : void 0 !== BB && BB <= -.05 && jB > 0 ? "draining" : "steady"
      }(oB, iB, null !== (IB = null === kB || void 0 === kB ? void 0 : kB.baf2BatIslandCap) && void 0 !== IB ? IB : 0), DB = null !== (NB = null === kB || void 0 === kB ? void 0 : kB.baf2BatMadePerS) && void 0 !== NB ? NB : 0, FB = null !== (uB = null === kB || void 0 === kB ? void 0 : kB.baf2BatUsedPerS) && void 0 !== uB ? uB : 0;
      let YB, VB = {},
        hB = "info";
      if (kB)
        if (EB) "charging" === HB ? (YB = `${wr}batLine_charging`, VB = {
          time: Ed(pB, (qB - iB) / Math.max(.05, null !== oB && void 0 !== oB ? oB : 0))
        }, hB = "ok") : "draining" === HB ? (YB = `${wr}batLine_draining`, VB = {
          time: Ed(pB, iB / Math.max(.05, -(null !== oB && void 0 !== oB ? oB : 0)))
        }, hB = "warn") : YB = "full" === HB ? `${wr}batLine_full` : iB <= 0 && FB > 0 ? `${wr}batLine_empty` : `${wr}batLine_steady`;
        else {
          var XB;
          const BB = Vr({
            left: kB.baf2BatNeed.reduce(((BB, jB) => {
              let [, zB] = jB;
              return BB + zB
            }), 0),
            bad: kB.baf2BatBad,
            rods: 1,
            canFill: !0 === kB.baf2BatCanFill,
            melted: !1
          });
          YB = BB.key, VB = {
            count: String(null !== (XB = BB.params.count) && void 0 !== XB ? XB : 0)
          }, hB = BB.tone
        }
      else YB = `${wr}batLine_steady`;
      const ZB = Math.max(DB, FB, 1);
      return (0, Hd.jsx)(iI.d, {
        close: aB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Hd.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, Hd.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Hd.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Hd.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Hd.jsx)(Dn.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, Hd.jsxs)("div", {
                children: [(0, Hd.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: pB(`${wr}batTitle`)
                }), kB && (0, Hd.jsxs)("p", {
                  className: Sn()("Baf2RxSubtitle", {
                    good: EB && "charging" === HB,
                    warn: EB && "draining" === HB
                  }),
                  children: [gB, "\xd7", tB, "\xd7", SB, " \xb7 ", pB(EB ? `${wr}batState_${HB}` : `${wr}rxSubPlanShort`)]
                })]
              })]
            }), (0, Hd.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [kB && !GB && (0, Hd.jsx)(yr, {
                kind: "battery",
                cap: EB ? MB : void 0,
                busy: null === sB || void 0 === sB ? void 0 : sB.busy.has("apart"),
                apart: () => {
                  UB.tap("apart", (() => {
                    LB("apart")
                  }))
                }
              }), (0, Hd.jsx)(qI.j, {
                onClick: aB
              })]
            })]
          }), sB && kB && (0, Hd.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, Hd.jsxs)("div", {
              className: Sn()("Baf2RxFlow Baf2BatFlow", {
                Plan: !EB
              }),
              children: [(0, Hd.jsx)(jr, {
                kind: "Power",
                label: pB(`${wr}batMade`),
                number: EB ? `\u26a1 ${Vu(DB)}/s` : "\u2014",
                note: pB(`${wr}batMadeNote`),
                share: EB ? DB / ZB : void 0,
                onExplain: () => {
                  yB(`${wr}batWhy_made`)
                }
              }), (0, Hd.jsx)(zr, {
                kind: "Power",
                step: EB ? Hr(DB, ZB) : 0,
                planned: !EB
              }), (0, Hd.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  yB(`${wr}batWhy_store`)
                },
                children: [(0, Hd.jsx)(Qr, {
                  max: 100,
                  bands: [{
                    upTo: EB ? fB : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, Hd.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, Hd.jsx)("b", {
                    className: "Baf2BatStored",
                    children: EB ? pB(`${wr}batStoredOf`, {
                      amount: Vu(iB),
                      cap: Vu(kB.baf2BatIslandCap)
                    }) : pB(`${wr}batWillHold`, {
                      cap: MB
                    })
                  }), (0, Hd.jsx)("span", {
                    children: pB(`${wr}batAdds`, {
                      cap: MB
                    })
                  }), EB && (0, Hd.jsx)("small", {
                    children: pB(`${wr}batBreakNote`, {
                      cap: MB
                    })
                  })]
                })]
              }), (0, Hd.jsx)(zr, {
                kind: "Power",
                step: EB ? Hr(FB, ZB) : 0,
                planned: !EB
              }), (0, Hd.jsx)(jr, {
                kind: "Power",
                label: pB(`${wr}batUsed`),
                number: EB ? `\u26a1 ${Vu(FB)}/s` : "\u2014",
                note: pB(`${wr}batUsedNote`),
                share: EB ? FB / ZB : void 0,
                onExplain: () => {
                  yB(`${wr}batWhy_used`)
                }
              })]
            }), (0, Hd.jsx)(dr, {
              text: pB(YB, VB),
              tone: hB,
              explained: JB
            }), GB ? (0, Hd.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: pB(`${wr}rxNotYours`)
            }) : !EB && (0, Hd.jsxs)(Hd.Fragment, {
              children: [(0, Hd.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, Hd.jsx)(Lr, {
                  kind: "battery",
                  dims: sB.dims,
                  cap: kB.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: BB => {
                    UB.resize(BB)
                  }
                }), (0, Hd.jsx)(gr, {
                  on: sB.guide,
                  label: pB(`${wr}rxGuide`),
                  toggle: () => {
                    UB.toggleGuide()
                  }
                }), kB.baf2BatCanFill && (0, Hd.jsx)(qI.m, {
                  disabled: !qu("battery", kB.baf2BatNeed) || sB.busy.has("fill"),
                  onClick: () => {
                    UB.tap("fill", (() => {
                      LB("fill")
                    }))
                  },
                  children: pB(`${wr}rxFill`)
                })]
              }), (0, Hd.jsx)(lr, {
                need: kB.baf2BatNeed,
                kind: "battery",
                explain: yB
              })]
            })]
          })]
        })
      })
    }
    const Kr = "buildAFactory2Game:",
      Cr = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function cr(BB, jB) {
      return BB === du ? null : jB ? "#4a4440" : BB < Nu ? Cr[BB - Iu] : BB === Nu ? "#3fd0f0" : BB === uu ? "#2c3e4c" : "#55585e"
    }

    function br(BB) {
      let {
        inner: jB,
        looks: zB,
        layer: QB,
        setLayer: nB,
        glow: dB,
        melted: IB,
        explain: NB
      } = BB;
      const {
        t: uB
      } = (0, fn.D)(), [UB, aB, pB] = jB, rB = Math.max(0, Math.min(aB - 1, QB)), sB = [];
      for (let mB = 0; mB < pB; mB++)
        for (let BB = 0; BB < UB; BB++) {
          var JB;
          const jB = null !== (JB = zB[(rB * pB + mB) * UB + BB]) && void 0 !== JB ? JB : du,
            QB = cr(jB, IB),
            nB = jB >= Iu && jB < Nu;
          sB.push(null === QB ? (0, Hd.jsx)("circle", {
            cx: BB + .5,
            cy: mB + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${BB},${mB}`) : (0, Hd.jsx)("rect", {
            x: BB + .06,
            y: mB + .06,
            width: .88,
            height: .88,
            fill: QB,
            opacity: nB && !IB ? .5 + .5 * dB : 1,
            onClick: BB => {
              BB.stopPropagation();
              const zB = Xr(jB);
              NB(zB.key, zB.params)
            }
          }, `${BB},${mB}`))
        }
      return (0, Hd.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, Hd.jsx)("svg", {
          className: Sn()("Baf2RxMapGrid", {
            Melted: IB
          }),
          viewBox: `0 0 ${Math.max(1,UB)} ${Math.max(1,pB)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": uB(`${Kr}rxWhy_core`),
          onClick: () => {
            NB(`${Kr}rxWhy_core`, {})
          },
          children: sB
        }), aB > 1 && (0, Hd.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, Hd.jsx)("button", {
            type: "button",
            "aria-label": uB(`${Kr}rxLayerDown`),
            disabled: rB <= 0,
            onClick: () => {
              nB(rB - 1)
            },
            children: "\u25bc"
          }), (0, Hd.jsxs)("span", {
            children: [(0, Hd.jsx)("span", {
              className: "HideNarrow",
              children: uB(`${Kr}rxLayer`, {
                n: String(rB + 1),
                of: String(aB)
              })
            }), (0, Hd.jsx)("span", {
              className: "ShowNarrow",
              children: uB(`${Kr}rxLayerShort`, {
                n: String(rB + 1),
                of: String(aB)
              })
            })]
          }), (0, Hd.jsx)("button", {
            type: "button",
            "aria-label": uB(`${Kr}rxLayerUp`),
            disabled: rB >= aB - 1,
            onClick: () => {
              nB(rB + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const vr = "buildAFactory2Game:",
      Rr = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: bN,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: gu,
        kind: "red"
      }],
      Or = [50, bN, 100];

    function Bs(BB) {
      let {
        stats: jB,
        t: zB,
        explain: QB
      } = BB;
      const nB = pu(jB),
        dB = Math.max(1, jB.fuelHeat, jB.cooling, jB.size),
        IB = [
          ["fuel", `${vr}rxBarRods`, jB.fuelHeat],
          ["cooling", `${vr}rxBarCooling`, jB.cooling],
          ["size", `${vr}rxBarSize`, jB.size]
        ];
      return (0, Hd.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          QB(`${vr}rxWhy_bars`)
        },
        children: [(0, Hd.jsx)("span", {
          className: "Baf2RxMostLine",
          children: zB(`${vr}rxMost`, {
            amount: Vu(Math.min(jB.fuelHeat, jB.cooling, jB.size))
          })
        }), (0, Hd.jsx)("span", {
          className: "Baf2RxMostBars",
          children: IB.map((BB => {
            let [jB, QB, IB] = BB;
            return (0, Hd.jsxs)("span", {
              className: Sn()("Baf2RxMostBar", jB, {
                Low: jB === nB
              }),
              children: [(0, Hd.jsx)("small", {
                children: zB(QB)
              }), (0, Hd.jsx)("i", {
                children: (0, Hd.jsx)("b", {
                  style: {
                    width: 100 * IB / dB + "%"
                  }
                })
              })]
            }, jB)
          }))
        })]
      })
    }

    function zs(BB) {
      var jB;
      let {
        view: zB,
        heat: nB,
        settle: dB,
        settleLine: IB,
        settleBad: NB,
        explain: uB
      } = BB;
      const {
        t: UB
      } = (0, fn.D)(), {
        status: aB
      } = zB, pB = aB.baf2RxAt.join(","), [rB, sB] = (0, QB.useState)((() => hr(zB.inner)));
      (0, QB.useEffect)((() => {
        sB(hr(zB.inner))
      }), [pB, zB.inner[1]]);
      const JB = null !== (jB = zB.plan) && void 0 !== jB ? jB : Su(aB),
        mB = zB.plan ? zB.plan.powerPerUnit : aB.baf2RxStats[8],
        yB = null === nB ? null : "alarm" === (kB = Lu(aB)) ? "red" : "hot" === kB ? "hot" : "warm" === kB ? "warm" : "cold";
      var kB;
      const GB = !aB.baf2RxFormed && function(BB, jB) {
          return 0 !== (BB.baf2RxFlags & jB)
        }(aB, Jj),
        LB = aB.baf2RxDamage,
        gB = aB.baf2RxDamageTrend;
      return (0, Hd.jsxs)("div", {
        className: Sn()("Baf2RxCore", null !== yB && void 0 !== yB ? yB : "plan"),
        children: [(0, Hd.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, Hd.jsx)(br, {
            inner: zB.inner,
            looks: zB.looks,
            layer: rB,
            setLayer: sB,
            glow: aB.baf2RxFormed ? aB.baf2RxThrottle / 100 : 1,
            melted: GB,
            explain: uB
          }), (0, Hd.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              uB(`${vr}rxWhy_heat`)
            },
            children: [null !== nB ? (0, Hd.jsxs)(Hd.Fragment, {
              children: [(0, Hd.jsx)("b", {
                children: UB(`${vr}rxHeatPct`, {
                  pct: String(nB)
                })
              }), (0, Hd.jsx)("span", {
                className: Sn()("Baf2RxBand", yB),
                children: UB(`${vr}rxBand_${yB}`)
              })]
            }) : (0, Hd.jsx)("b", {
              children: UB(`${vr}rxHeat`)
            }), null !== IB && (0, Hd.jsx)("span", {
              className: Sn()("Baf2RxSettle", {
                Bad: NB
              }),
              children: IB
            }), LB >= 1 && (0, Hd.jsxs)("span", {
              className: Sn()("Baf2RxDamage", gB),
              children: [UB(`${vr}rxDamageLine`, {
                pct: String(LB)
              }), " \xb7 ", UB(`${vr}rxDamage_${gB}`), (0, Hd.jsx)("i", {
                children: (0, Hd.jsx)("b", {
                  style: {
                    width: `${Math.min(100,LB)}%`
                  }
                })
              })]
            })]
          }), (0, Hd.jsx)(Qr, {
            max: gu,
            bands: Rr,
            ticks: Or,
            now: nB,
            settle: dB,
            settleTone: NB ? "bad" : null,
            onExplain: () => {
              uB(`${vr}rxWhy_heat`)
            }
          })]
        }), (0, Hd.jsx)(Bs, {
          stats: JB,
          t: UB,
          explain: uB
        }), mB > 0 && (0, Hd.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            uB(`${vr}rxWhy_perPellet`)
          },
          children: UB(`${vr}rxPerPellet`, {
            amount: Vu(mB)
          })
        })]
      })
    }

    function Qs(BB, jB) {
      var zB;
      if (!BB.baf2RxStore) return {
        note: jB(`${vr}rxUpTo`, {
          amount: Vu(BB.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [QB, nB] = BB.baf2RxStore, dB = nB > 0 ? QB / nB : 0, IB = String(Math.floor(100 * dB)), NB = null !== (zB = BB.baf2RxStoreNetPerS) && void 0 !== zB ? zB : 0, uB = function(BB) {
        var jB, zB;
        const [QB, nB] = null !== (jB = BB.baf2RxStore) && void 0 !== jB ? jB : [0, 0], dB = null !== (zB = BB.baf2RxStoreNetPerS) && void 0 !== zB ? zB : 0;
        return nB > 0 && QB >= nB - 1 ? "running" === BB.baf2RxState ? `${tr}rxStoreFull` : `${tr}rxStoreFullOnly` : dB > .05 ? `${tr}rxStoreLine` : dB < -.05 ? "running" === BB.baf2RxState ? `${tr}rxStoreUsesMore` : `${tr}rxStoreDraining` : `${tr}rxStorePct`
      }(BB);
      return {
        note: jB(uB, uB === `${vr}rxStoreLine` ? {
          pct: IB,
          time: Ed(jB, (nB - QB) / NB)
        } : {
          pct: IB
        }),
        share: dB
      }
    }

    function ns(BB) {
      let {
        view: jB,
        explain: zB,
        preview: QB
      } = BB;
      const {
        t: nB
      } = (0, fn.D)(), {
        status: dB
      } = jB, IB = ju(Qu(...jB.dims)), NB = or(dB), uB = Math.min(Math.round(dB.baf2RxFuel), IB.fuel), UB = "running" === dB.baf2RxState, aB = UB ? Hr(dB.baf2RxOut, dB.baf2RxMaxNow) : 0, pB = function(BB, jB, zB) {
        const QB = ir(BB),
          nB = "cryo" === QB.Ss,
          dB = zB ? zB.coolantSecs : QB.pct >= 100 && BB.baf2RxOut >= 1 ? fr(BB, BB.baf2RxThrottle).coolantSecs : null;
        let IB, NB = !1;
        if (QB.pct < 100) {
          const zB = 1 === QB.makersShort,
            dB = !nB && BB.baf2RxCryoOpen ? "OrCryo" : "";
          IB = QB.makersShort > 0 ? jB(nB ? `${vr}rxCryoAddMixer${zB?"":"s"}` : `${vr}rxWaterAddCondenser${zB?"":"s"}${dB}`, {
            count: String(QB.makersShort)
          }) : jB(`${vr}rxWaterNeeds`, {
            rate: Gr(QB.needPerS)
          })
        } else if (null !== dB) IB = jB(`${vr}rxWaterRunsOut`, {
          time: Ed(jB, dB)
        });
        else if (QB.waterBeside > 0) IB = jB(`${vr}rxCryoPlusWater`, {
          rate: Gr(QB.waterBeside)
        });
        else {
          const BB = function(BB) {
            return BB.inPerS <= 0 ? "rxWaterNoSupply" : BB.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(QB);
          NB = "rxWaterNoSupply" === BB, IB = jB(`${vr}${BB}`, {
            amount: Vu(QB.stored)
          })
        }
        return {
          kind: nB ? "Cryo" : "Water",
          label: jB(nB ? `${vr}rxCryo` : `${vr}rxWater`),
          number: `${Gr(QB.usePerS)}/s`,
          preview: zB ? `${Gr(zB.coolPerS)}/s` : null,
          note: IB,
          tone: "noWater" === BB.baf2RxState ? "danger" : NB ? "warn" : (uB = QB.pct, UB = dB, uB < 100 ? "danger" : null === UB ? null : UB < 300 ? "danger" : "warn"),
          share: QB.pct / 100,
          why: nB ? `${vr}rxWhy_cryo` : `${vr}rxWhy_water`,
          short: QB.pct < 100
        };
        var uB, UB
      }(dB, nB, QB), rB = fu(dB, IB.waste, NB), sB = Qs(dB, nB), JB = fr(dB, dB.baf2RxTarget), mB = UB && Math.abs(JB.settle - dB.baf2RxHeat) >= 3, yB = QB ? QB.pelletsPerMin / 60 : null;
      return (0, Hd.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, Hd.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Hd.jsx)(jr, {
            kind: "Fuel",
            label: nB(`${vr}rxFuel`),
            number: String(uB),
            preview: null !== yB && yB > 0 && dB.baf2RxFuel > 0 ? Ed(nB, dB.baf2RxFuel / yB) : null,
            note: dB.baf2RxFuel <= 0 ? nB(`${vr}rxFuelEmpty`) : NB > 0 ? nB(`${vr}rxFuelLeft`, {
              time: Ed(nB, dB.baf2RxFuel / NB)
            }) : nB(1 === uB ? `${vr}rxFuelPellet` : `${vr}rxFuelPellets`),
            tone: "noFuel" === dB.baf2RxState ? "danger" : dB.baf2RxFuel < 2 ? "warn" : null,
            share: dB.baf2RxFuel / IB.fuel,
            onExplain: () => {
              zB(`${vr}rxWhy_fuel`)
            }
          }), (0, Hd.jsx)(jr, {
            kind: pB.kind,
            label: pB.label,
            number: pB.number,
            preview: pB.preview,
            note: pB.note,
            tone: pB.tone,
            share: pB.share,
            onExplain: () => {
              zB(pB.why)
            }
          })]
        }), (0, Hd.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Hd.jsx)(zr, {
            kind: "Fuel",
            step: aB,
            short: "noFuel" === dB.baf2RxState
          }), (0, Hd.jsx)(zr, {
            kind: pB.kind,
            step: aB,
            short: pB.short || "noWater" === dB.baf2RxState
          })]
        }), (0, Hd.jsx)(zs, {
          view: jB,
          heat: dB.baf2RxHeat,
          settle: Math.min(gu, JB.settle),
          settleLine: mB ? nB(`${vr}rxHeatSettles`, {
            pct: String(Math.round(JB.settle)),
            time: Ed(nB, JB.settleS)
          }) : null,
          settleBad: JB.settle > 100,
          explain: zB
        }), (0, Hd.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Hd.jsx)(zr, {
            kind: "Power",
            step: aB
          }), (0, Hd.jsx)(zr, {
            kind: "Waste",
            step: UB && dB.baf2RxFuel - dB.baf2RxPu > 0 ? aB : 0,
            short: rB.full
          })]
        }), (0, Hd.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Hd.jsx)(jr, {
            kind: "Power",
            label: nB(`${vr}rxPowerOut`),
            number: `\u26a1 ${Vu(dB.baf2RxOut)}/s`,
            preview: QB ? Vu(QB.out) : null,
            note: sB.note,
            share: sB.share,
            onExplain: () => {
              zB(`${vr}rxWhy_power`)
            }
          }), (0, Hd.jsx)(jr, {
            kind: "Waste",
            label: nB(`${vr}rxWaste`),
            number: `${Math.floor(dB.baf2RxWaste)}/${IB.waste}`,
            note: rB.full ? nB(`${vr}rxWasteFull`) : null !== rB.fullInS ? nB(`${vr}rxWasteFullIn`, {
              time: Ed(nB, rB.fullInS)
            }) : nB(`${vr}rxWasteSpent`),
            tone: "wasteFull" === dB.baf2RxState ? "danger" : rB.full ? "warn" : null,
            share: dB.baf2RxWaste / IB.waste,
            onExplain: () => {
              zB(`${vr}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function ds(BB) {
      let {
        view: jB,
        explain: zB
      } = BB;
      const {
        t: QB
      } = (0, fn.D)(), nB = jB.plan;
      if (!nB) return null;
      const dB = nB.fuelHeat <= 0 ? null : nB.cooling > 0 ? Math.min(gu, 100 * nB.fuelHeat / nB.cooling) : gu,
        IB = QB(`${vr}rxPlanAtFull`);
      return (0, Hd.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, Hd.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Hd.jsx)(jr, {
            kind: "Fuel",
            label: QB(`${vr}rxFuel`),
            number: QB(`${vr}rxPlanPerMin`, {
              amount: hu(nB.pelletsPerMin)
            }),
            note: QB(`${vr}rxPlanPellets`),
            onExplain: () => {
              zB(`${vr}rxWhy_fuel`)
            }
          }), (0, Hd.jsx)(jr, {
            kind: "Water",
            label: QB(`${vr}rxWater`),
            number: `${Gr(nB.waterPerS)}/s`,
            note: jB.status.baf2RxCryoOpen && nB.waterPerS > 0 ? QB(`${vr}rxPlanOrCryo`, {
              rate: Gr(yu(nB, RB.f) * RB.o)
            }) : IB,
            onExplain: () => {
              zB(`${vr}rxWhy_water`)
            }
          })]
        }), (0, Hd.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Hd.jsx)(zr, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, Hd.jsx)(zr, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, Hd.jsx)(zs, {
          view: jB,
          heat: null,
          settle: dB,
          settleLine: null === dB ? null : QB(`${vr}rxPlanHeat`, {
            pct: String(Math.round(dB))
          }),
          settleBad: null !== dB && dB > 100,
          explain: zB
        }), (0, Hd.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Hd.jsx)(zr, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, Hd.jsx)(zr, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, Hd.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Hd.jsx)(jr, {
            kind: "Power",
            label: QB(`${vr}rxPowerOut`),
            number: `\u26a1 ${Vu(nB.max)}/s`,
            note: IB,
            onExplain: () => {
              zB(`${vr}rxWhy_power`)
            }
          }), (0, Hd.jsx)(jr, {
            kind: "Waste",
            label: QB(`${vr}rxWaste`),
            number: QB(`${vr}rxPlanPerMin`, {
              amount: hu(nB.pelletsPerMin)
            }),
            note: QB(`${vr}rxWasteSpent`),
            onExplain: () => {
              zB(`${vr}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const Is = "buildAFactory2Game:",
      Ns = {
        key: `${Is}rxWaiting`,
        params: {},
        tone: "info"
      };

    function us(BB, jB) {
      return 0 !== (BB.baf2RxFlags & jB)
    }

    function Us(BB) {
      var jB, zB;
      let {
        store: nB,
        close: dB
      } = BB;
      const {
        t: IB
      } = (0, fn.D)(), NB = mr(nB), {
        explained: uB,
        hinting: UB,
        explain: aB,
        explainOnce: pB
      } = nr("baf2RxExplained"), rB = (0, QB.useCallback)(((BB, jB) => {
        aB(IB(BB, jB))
      }), [aB, IB]), sB = (0, QB.useCallback)(((BB, jB) => {
        pB(BB, IB(BB, jB))
      }), [pB, IB]), [JB, mB] = (0, QB.useState)(!1), [yB, kB] = (0, QB.useState)(!1), GB = null === NB || void 0 === NB ? void 0 : NB.status, LB = null === GB || void 0 === GB ? void 0 : GB.baf2RxAt.join(","), gB = !0 === (null === GB || void 0 === GB ? void 0 : GB.baf2RxFormed);
      (0, QB.useEffect)((() => {
        kB(!1), mB(!1)
      }), [LB, gB]), (0, QB.useEffect)((() => (nB.opened(), () => {
        nB.closed()
      })), [nB]);
      const tB = void 0 !== GB && us(GB, kj),
        SB = GB ? gB ? Lu(GB) : null !== NB && void 0 !== NB && NB.plan ? function(BB, jB) {
          if (BB <= 0) return "off";
          if (jB <= 0) return "alarm";
          const zB = 100 * BB / jB;
          return zB < 50 ? "calm" : zB < ru ? "warm" : zB <= 100 ? "hot" : "alarm"
        }(NB.plan.fuelHeat, NB.plan.cooling) : "off" : "off",
        MB = GB ? tu(GB) : null,
        EB = NB ? NB.waiting ? Ns : gB ? Yr(NB.status) : function(BB) {
          var jB, zB;
          const {
            status: QB
          } = BB;
          return Vr({
            left: QB.baf2RxNeed.reduce(((BB, jB) => {
              let [, zB] = jB;
              return BB + zB
            }), 0),
            bad: QB.baf2RxBad,
            rods: null !== (jB = null === (zB = BB.plan) || void 0 === zB ? void 0 : zB.rods) && void 0 !== jB ? jB : 0,
            canFill: us(QB, mj),
            melted: us(QB, Jj),
            idle: BB.looks.reduce(((BB, jB) => BB + (jB === uu ? 1 : 0)), 0)
          })
        }(NB) : null,
        iB = UB && null !== EB && ("ok" === EB.tone || "info" === EB.tone),
        qB = GB ? function(BB) {
          const jB = 0 !== (BB.baf2RxFlags & rj),
            zB = BB.baf2RxHeat < RN;
          return 0 !== (BB.baf2RxFlags & Jj) || zB && (jB || !BB.baf2RxFormed) ? null : BB.baf2RxFormed && !jB ? {
            key: `${Gu}rxApartScram`,
            params: {}
          } : {
            key: `${Gu}rxApartCooling`,
            params: {
              pct: String(RN)
            }
          }
        }(GB) : null,
        [fB, oB, HB] = null !== (jB = null === NB || void 0 === NB ? void 0 : NB.dims) && void 0 !== jB ? jB : [0, 0, 0],
        DB = `${fB}\xd7${oB}\xd7${HB}`;
      return (0, Hd.jsx)(iI.d, {
        close: dB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Hd.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, Hd.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Hd.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Hd.jsx)(kr, {
                mood: SB
              }), (0, Hd.jsxs)("div", {
                children: [(0, Hd.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: IB(`${Is}rxTitle`)
                }), NB && (0, Hd.jsxs)("p", {
                  className: Sn()("Baf2RxSubtitle", gB && (null === MB || void 0 === MB ? void 0 : MB.tone)),
                  children: [gB && !tB ? (0, Hd.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": IB(`${Is}rxChangeSize`),
                    onClick: () => {
                      if (!GB) return;
                      const BB = us(GB, rj);
                      var jB;
                      (jB = {
                        scram: BB,
                        heat: GB.baf2RxHeat
                      }).scram && jB.heat < RN ? mB(!0) : rB(BB ? `${Is}rxResizeCooling` : `${Is}rxResizeHot`, {
                        pct: String(RN)
                      })
                    },
                    children: [DB, " \u270e"]
                  }) : DB, " \xb7 ", IB(gB ? null !== (zB = null === MB || void 0 === MB ? void 0 : MB.label) && void 0 !== zB ? zB : `${Is}rxState_running` : `${Is}rxSubPlanShort`)]
                })]
              })]
            }), (0, Hd.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [NB && !tB && (0, Hd.jsx)(yr, {
                kind: "reactor",
                busy: NB.busy.has("apart"),
                whyNot: qB ? () => {
                  rB(qB.key, qB.params)
                } : null,
                apart: () => {
                  nB.tap("apart", (() => {
                    nB.send("apart")
                  }))
                }
              }), (0, Hd.jsx)(qI.j, {
                onClick: dB
              })]
            })]
          }), NB && EB && (0, Hd.jsxs)("div", {
            className: "Baf2RxBody",
            children: [gB ? (0, Hd.jsx)(ns, {
              view: NB,
              explain: rB,
              preview: qr(NB.status)
            }) : (0, Hd.jsx)(ds, {
              view: NB,
              explain: rB
            }), (0, Hd.jsx)(dr, {
              text: iB ? `${Dr(IB,EB)} ${IB(`${Is}rxTapHint`)}` : Dr(IB, EB),
              tone: EB.tone,
              explained: uB
            }), tB ? (0, Hd.jsxs)(Hd.Fragment, {
              children: [(0, Hd.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: IB(`${Is}rxNotYours`)
              }), (0, Hd.jsx)(pr, {
                status: NB.status,
                store: nB,
                readOnly: !0
              })]
            }) : gB && !yB ? (0, Hd.jsxs)(Hd.Fragment, {
              children: [(0, Hd.jsx)(Wr, {
                view: NB,
                store: nB,
                explain: rB,
                explainOnce: sB
              }), void 0 !== NB.status.baf2RxLayout && ur(NB.status) && (0, Hd.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, Hd.jsx)(pr, {
                  status: NB.status,
                  store: nB,
                  readOnly: !1,
                  bare: !0
                }), (0, Hd.jsx)(ar, {
                  status: NB.status,
                  store: nB,
                  busy: NB.busy.has("fill")
                })]
              })]
            }) : (0, Hd.jsxs)(Hd.Fragment, {
              children: [(0, Hd.jsx)(er, {
                view: NB,
                store: nB,
                keepSize: gB ? () => {
                  kB(!1)
                } : void 0
              }), Eu(NB.dims, NB.status.baf2RxDims) && (0, Hd.jsx)(lr, {
                need: NB.status.baf2RxNeed,
                explain: rB
              }), (0, Hd.jsx)(pr, {
                status: NB.status,
                store: nB,
                readOnly: !1
              })]
            }), JB && (0, Hd.jsx)(Jr, {
              id: "baf2ResizeTitle",
              title: `${Is}rxResizeConfirmTitle`,
              body: `${Is}rxResizeConfirmBody`,
              yes: `${Is}rxChangeSize`,
              cancel: () => {
                mB(!1)
              },
              confirm: () => {
                mB(!1), kB(!0)
              }
            })]
          })]
        })
      })
    }
    class as {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(BB) {
        this.view = BB;
        for (const jB of this.listeners) jB()
      }
      get() {
        return this.view
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    }

    function ps(BB) {
      let {
        commands: jB,
        store: zB,
        power: nB,
        water: dB,
        reactor: IB,
        battery: NB,
        collider: uB,
        terminal: UB,
        quests: aB,
        tutorial: pB,
        close: rB,
        leave: sB,
        askIslands: JB,
        showCore: mB,
        openSocial: yB
      } = BB;
      const {
        userContext: kB
      } = (0, AN.d)(), GB = ZN.featureFlags.useSocialFeatures && kB.isLoggedIn(), [LB, gB] = (0, QB.useState)((() => zB.get()));
      (0, QB.useEffect)((() => zB.subscribe((() => {
        gB(zB.get())
      }))), [zB]);
      const tB = "islands" === (null === LB || void 0 === LB ? void 0 : LB.kind) ? LB.backToCore : void 0;
      return (0, Hd.jsxs)(wI.Provider, {
        value: jB,
        children: ["core" === (null === LB || void 0 === LB ? void 0 : LB.kind) && (0, Hd.jsx)(gp, {
          view: LB.core,
          close: rB,
          askIslands: JB
        }), "dropMap" === (null === LB || void 0 === LB ? void 0 : LB.kind) && (0, Hd.jsx)(Ep, {
          message: LB.dropMap,
          quests: aB,
          close: rB,
          leave: sB
        }), "islands" === (null === LB || void 0 === LB ? void 0 : LB.kind) && (0, Hd.jsx)(ep, {
          message: LB.islands,
          arrivedAtMs: LB.arrivedAtMs,
          close: tB ? () => {
            mB(tB)
          } : rB,
          leave: sB,
          openSocial: GB ? yB : null
        }), "quests" === (null === LB || void 0 === LB ? void 0 : LB.kind) && (0, Hd.jsx)(Aa, {
          store: aB,
          tutorial: pB,
          close: rB
        }), "transfer" === (null === LB || void 0 === LB ? void 0 : LB.kind) && (0, Hd.jsx)(Ia, {
          message: LB.transfer,
          arrivedAtMs: LB.arrivedAtMs,
          close: rB,
          leave: sB
        }), "power" === (null === LB || void 0 === LB ? void 0 : LB.kind) && (0, Hd.jsx)(hI, {
          store: nB,
          close: rB
        }), "water" === (null === LB || void 0 === LB ? void 0 : LB.kind) && (0, Hd.jsx)(LN, {
          store: dB,
          close: rB
        }), "reactor" === (null === LB || void 0 === LB ? void 0 : LB.kind) && (0, Hd.jsx)(Us, {
          store: IB,
          close: rB
        }), "battery" === (null === LB || void 0 === LB ? void 0 : LB.kind) && (0, Hd.jsx)(xr, {
          store: NB,
          close: rB
        }), "collider" === (null === LB || void 0 === LB ? void 0 : LB.kind) && (0, Hd.jsx)(gU, {
          store: uB,
          close: rB
        }), "terminal" === (null === LB || void 0 === LB ? void 0 : LB.kind) && (0, Hd.jsx)(Br, {
          store: UB,
          close: rB,
          send: BB => {
            jB.send(BB)
          }
        })]
      })
    }
    var rs = zB(38581);

    function ss(BB, jB) {
      return BB.distSq - jB.distSq
    }
    class ms {
      constructor() {
        this.list = [], this.pool = []
      }
      add(BB, jB, zB, QB) {
        let nB = this.pool[this.list.length];
        nB || (nB = {
          x: 0,
          y: 0,
          distSq: 0,
          element: jB,
          liftRem: zB,
          dot: QB
        }, this.pool.push(nB)), nB.x = BB.x, nB.y = BB.y, nB.distSq = BB.distSq, nB.element = jB, nB.liftRem = zB, nB.dot = QB, this.list.push(nB)
      }
    }
    class ys {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = BB, this.sizes = new WeakMap, this.observer = new ResizeObserver((BB => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const jB of BB) {
            const BB = jB.borderBoxSize[0];
            "dot" !== jB.target.dataset.crowded && 0 !== BB.inlineSize && 0 !== BB.blockSize && this.sizes.set(jB.target, {
              width: BB.inlineSize,
              height: BB.blockSize
            })
          }
        })), this.remPx = 16, this.Cs = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.rG = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.rG)
      }
      observe(BB) {
        this.observer.observe(BB)
      }
      unobserve(BB) {
        this.observer.unobserve(BB)
      }
      run(BB) {
        const jB = BB.list;
        jB.sort(ss);
        const zB = this.pxPerVw,
          QB = this.pxPerVh;
        this.Cs.length = 0, this.hud && this.Cs.push(...this.hud.boxes(performance.now()));
        for (const dB of jB) {
          var nB;
          const BB = this.sizes.get(dB.element);
          let jB = "no";
          if (BB && BB.width > 0) {
            const nB = dB.x * zB,
              IB = dB.y * QB - dB.liftRem * this.remPx;
            this.fit(nB, IB, BB.width, BB.height) || (jB = dB.dot && this.fit(nB, IB, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (nB = dB.element.dataset.crowded) && void 0 !== nB ? nB : "no") !== jB && ("no" === jB ? delete dB.element.dataset.crowded : dB.element.dataset.crowded = jB), "hidden" !== jB && (0, rs.d)(dB.element, dB.x, dB.y)
        }
        jB.length = 0
      }
      fit(BB, jB, zB, QB) {
        const nB = BB - zB / 2,
          dB = BB + zB / 2,
          IB = jB - QB,
          NB = this.Cs;
        for (let uB = 0; uB < NB.length; uB += 4)
          if (nB < NB[uB + 1] - 2 && dB > NB[uB] + 2 && IB < NB[uB + 3] - 2 && jB > NB[uB + 2] + 2) return !1;
        return NB.push(nB, dB, IB, jB), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.rG)
      }
    }
    const ks = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class Gs {
      constructor() {
        this.cards = ks.map((BB => document.getElementsByClassName(BB))), this.watched = ks.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(BB) {
        BB - this.refreshedAt > 1e3 && (this.refreshedAt = BB, this.stale = !0);
        for (let zB = 0; zB < this.cards.length; zB++) {
          var jB;
          const BB = null !== (jB = this.cards[zB][0]) && void 0 !== jB ? jB : null;
          BB !== this.watched[zB] && this.watch(zB, BB)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let BB = 0; BB < this.watched.length; BB++) this.watch(BB, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const BB = this.list;
        BB.length = 0;
        for (const jB of this.watched) {
          if (!jB || jB.closest(".NoRoom")) continue;
          const zB = jB.getBoundingClientRect();
          let QB = zB.top,
            nB = zB.bottom;
          if (jB === this.watched[0] && this.hud) {
            const BB = this.hud.getBoundingClientRect();
            QB = Math.max(QB, BB.top), nB = Math.min(nB, BB.bottom)
          }
          zB.width > 0 && nB > QB && BB.push(zB.left, zB.right, QB, nB)
        }
      }
      watch(BB, jB) {
        const zB = this.watched[BB];
        var QB, nB;
        (zB && this.sizes.unobserve(zB), this.watched[BB] = jB, this.stale = !0, jB && this.sizes.observe(jB), 0 === BB) && (null === (QB = this.hud) || void 0 === QB || QB.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (nB = null === jB || void 0 === jB ? void 0 : jB.closest(".Baf2QuestHud")) && void 0 !== nB ? nB : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var Ls = zB(38585);
    class gs {
      constructor(BB) {
        this.onElement = BB, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(BB) {
        const jB = [];
        for (let zB = 0; zB + 4 < BB.length; zB += 5) {
          const QB = [BB[zB], BB[zB + 1], BB[zB + 2]];
          jB.push({
            key: QB.join(","),
            pos: QB,
            status: Qn[BB[zB + 3]],
            kind: fj[BB[zB + 4]]
          })
        }
        this.markers = jB, this.keys = new Set(jB.map((BB => {
          let {
            key: jB
          } = BB;
          return jB
        }))), this.notify()
      }
      covers(BB) {
        return this.keys.has(BB)
      }
      get() {
        return this.markers
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      bind(BB) {
        let jB = this.refs.get(BB);
        return jB || (jB = jB => {
          const zB = this.elements.get(BB);
          var QB, nB;
          zB && (null === (QB = this.onElement) || void 0 === QB || QB.call(this, zB, !1));
          jB ? (this.elements.set(BB, jB), null === (nB = this.onElement) || void 0 === nB || nB.call(this, jB, !0)) : (this.elements.delete(BB), this.refs.delete(BB))
        }, this.refs.set(BB, jB)), jB
      }
      onAfterRender(BB, jB, zB) {
        for (const QB of this.markers) {
          const nB = this.elements.get(QB.key);
          if (!nB) continue;
          const dB = (0, Ls.c)(nB, BB, jB, QB.pos, 1.05, 24);
          dB && zB.add(dB, nB, .45, !0)
        }
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
    }
    const ts = {
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
    const Ss = (0, QB.memo)((function(BB) {
        let {
          status: jB,
          kind: zB,
          bindRef: QB
        } = BB;
        const {
          t: nB
        } = (0, fn.D)(), dB = function(BB, jB) {
          var zB;
          if ("noFuel" === BB) {
            var QB, nB;
            const BB = null === (QB = Vj[jB]) || void 0 === QB || null === (nB = QB.fuels) || void 0 === nB ? void 0 : nB.find((BB => Qz.includes(BB)));
            return null !== BB && void 0 !== BB ? BB : ts.noFuel
          }
          return void 0 !== (null === (zB = Vj[jB]) || void 0 === zB ? void 0 : zB.cryoMade) ? "noOutlet" === BB ? "Fluid Pipe" : "noInput" === BB ? "Biomass" : ts[BB] : ts[BB]
        }(jB, zB);
        return (0, Hd.jsxs)("div", {
          className: Sn()("Baf2StallMarker", jB),
          ref: QB,
          hidden: !0,
          children: [dB && (0, Hd.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, Hd.jsx)(Dn.c, {
              itemName: dB,
              amount: 0
            })
          }), (0, Hd.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === jB ? "?" : "!"
          }), (0, Hd.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: nB(`buildAFactory2Game:stallTag_${jB}`)
          })]
        })
      })),
      Ms = (0, QB.memo)((function(BB) {
        let {
          controller: jB
        } = BB;
        const [zB, nB] = (0, QB.useState)((() => jB.get()));
        return (0, QB.useEffect)((() => (nB(jB.get()), jB.subscribe((() => {
          nB(jB.get())
        })))), [jB]), (0, Hd.jsx)("div", {
          className: "Baf2StallMarkers",
          children: zB.map((BB => (0, Hd.jsx)(Ss, {
            status: BB.status,
            kind: BB.kind,
            bindRef: jB.bind(BB.key)
          }, BB.key)))
        })
      })),
      Es = mz.i + 150;
    class is {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(BB, jB) {
        const zB = jB - BB;
        null === this.offset || zB < this.offset ? this.offset = zB : this.offset = Math.min(zB, this.offset + .02 * (jB - this.sampledAt)), this.sampledAt = jB
      }
      toLocal(BB) {
        var jB;
        return BB + (null !== (jB = this.offset) && void 0 !== jB ? jB : 0) + Es
      }
    }
    var qs = zB(38588);
    const fs = 15 * Math.PI / 180,
      os = Math.SQRT2,
      Hs = [4, 2];

    function Ds(BB, jB) {
      const zB = [1 / 0, 1 / 0, 1 / 0],
        QB = [-1 / 0, -1 / 0, -1 / 0];
      for (const uB of BB)
        for (let BB = 0; BB < 3; BB++) zB[BB] = Math.min(zB[BB], uB[BB]), QB[BB] = Math.max(QB[BB], uB[BB]);
      const nB = (zB[0] + QB[0]) / 2,
        dB = (zB[1] + QB[1]) / 2,
        IB = (zB[2] + QB[2]) / 2;
      let NB = 0;
      for (const uB of BB) NB = Math.max(NB, Math.hypot(uB[0] - nB, uB[1] - dB, uB[2] - IB));
      return {
        x: nB,
        y: dB,
        z: IB,
        r: NB + jB
      }
    }

    function Fs(BB, jB, zB) {
      const QB = jB.x - BB.x,
        nB = jB.y - BB.y,
        dB = jB.z - BB.z,
        IB = Math.sqrt(QB * QB + nB * nB + dB * dB);
      if (IB <= jB.r + 8) return 1;
      const NB = jB.r / IB,
        uB = Math.sqrt(1 - NB * NB),
        UB = uB < -BB.cosHalf,
        aB = (QB * BB.dx + nB * BB.dy + dB * BB.dz) / IB;
      if (!UB && aB < BB.cosHalf * uB - BB.sinHalf * NB) return 0;
      const pB = zB * os * BB.frameMs * BB.pxPerBlock / (IB - jB.r);
      for (let rB = 0; rB < Hs.length; rB++)
        if (pB * Hs[rB] <= 1) return Hs[rB];
      return 1
    }

    function Ys(BB, jB) {
      return {
        name: BB,
        at: jB,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Vs = [0, 0, 0];

    function hs(BB, jB, zB) {
      let [, QB, nB, dB, IB, NB] = jB;
      const uB = mz.d * (null !== IB && void 0 !== IB ? IB : 1),
        UB = [];
      for (let sB = 0; sB < QB.length; sB += 3) UB.push([QB[sB] + .5, QB[sB + 1] + .65, QB[sB + 2] + .5]);
      const aB = [];
      for (let sB = 0; sB < UB.length - 1; sB++) {
        const [BB, jB] = [UB[sB], UB[sB + 1]];
        aB.push([(BB[0] + jB[0]) / 2, (BB[1] + jB[1]) / 2, (BB[2] + jB[2]) / 2])
      }
      const pB = UB.slice(1, -1),
        rB = new Uint8Array(pB.length);
      for (const sB of null !== NB && void 0 !== NB ? NB : []) rB[sB >> 1] |= 1 & sB ? 2 : 1;
      return {
        island: BB,
        length: pB.length,
        loop: dB,
        cellsPerMs: uB,
        edges: aB,
        fp: pB,
        bounds: Ds([...aB, ...pB], .3),
        changed: !0,
        culled: !1,
        hide: rB,
        items: nB.map((BB => {
          let [jB, QB] = BB;
          return Ys(jB, (0, mz.x)(jB, QB, zB, uB).at)
        }))
      }
    }

    function Xs(BB, jB) {
      const {
        items: zB
      } = BB;
      if (0 === zB.length) return;
      const QB = BB.length / BB.cellsPerMs,
        nB = Math.floor((jB - zB[0].at) / QB) - 1;
      if (nB > 0)
        for (const dB of zB) dB.at += nB * QB
    }

    function Zs(BB, jB) {
      const zB = Math.min(Math.floor(jB), BB.length - 1),
        QB = BB.hide[zB];
      return 0 !== QB && 0 !== (QB & (jB - zB < .5 ? 1 : 2))
    }

    function As(BB, jB) {
      const zB = Math.min(Math.floor(jB), BB.length - 1),
        QB = jB - zB,
        nB = QB < .5,
        dB = nB ? BB.edges[zB] : BB.fp[zB],
        IB = nB ? BB.fp[zB] : BB.edges[zB + 1],
        NB = nB ? 2 * QB : 2 * QB - 1;
      Vs[0] = dB[0] + (IB[0] - dB[0]) * NB, Vs[1] = dB[1] + (IB[1] - dB[1]) * NB, Vs[2] = dB[2] + (IB[2] - dB[2]) * NB
    }
    const Ts = Math.PI / 4;
    class Ps {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new is, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.rG = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(BB) {
        const jB = performance.now();
        this.clock.sample(BB.baf2BeltLinesAt, jB), this.queue(BB.baf2BeltLinesAt, BB, 0, null, null, 0), this.applyDue(jB)
      }
      onMoves(BB) {
        const jB = performance.now(),
          zB = BB.baf2BeltMovesAt;
        this.clock.sample(zB, jB);
        for (const [QB, nB, dB, IB] of BB.baf2BeltMoveList) null === nB ? this.queue(zB - dB, null, QB, null, null, null !== IB && void 0 !== IB ? IB : 0) : this.queue(zB - dB, null, QB, nB, null !== IB && void 0 !== IB ? IB : null, 0);
        this.applyDue(jB)
      }
      start(BB) {
        this.pool = new qs.c(BB, {
          scale: .3,
          yaw: Ts
        }, 64), this.rG(), window.addEventListener("resize", this.rG)
      }
      onAfterRender(BB) {
        const {
          pool: jB
        } = this;
        if (!jB) return;
        const zB = performance.now(),
          QB = zB - this.lastRenderAt;
        this.lastRenderAt = zB, QB < 100 && (this.frameMs += .1 * (QB - this.frameMs));
        const nB = zB + this.frameMs;
        this.applyDue(nB);
        const dB = BB.cameraPosition,
          IB = jB.follow(dB);
        this.setView(BB, dB);
        const NB = this.frame++;
        for (let uB = 0; uB < this.shown.length; uB++) {
          const BB = this.shown[uB],
            zB = Fs(this.view, BB.bounds, BB.cellsPerMs),
            QB = BB.culled && 0 !== zB;
          if (BB.culled = 0 === zB, !IB && !BB.changed && !QB && (0 === zB || (NB + uB) % zB !== 0)) continue;
          BB.changed = !1, BB.loop && (Xs(BB, nB), (0, mz.t)(BB.items, BB.length, nB, BB.cellsPerMs));
          let dB = BB.length;
          for (let NB = 0; NB < BB.items.length; NB++) {
            const zB = BB.items[NB],
              QB = (0, mz.y)(zB.at, dB, nB, BB.cellsPerMs);
            if (dB = QB - mz.n, Zs(BB, QB)) {
              null === zB.kind || zB.hidden || (zB.kind.hide(zB.slot), zB.hidden = !0);
              continue
            }
            let uB = zB.kind;
            if (null === uB) {
              if (uB = jB.kindOf(zB.name), null === uB) continue;
              zB.kind = uB, zB.slot = uB.take(), zB.hidden = !0, zB.drawn = NaN
            } else if (QB === zB.drawn && !zB.hidden && !IB) continue;
            As(BB, QB), uB.write(zB.slot, Vs[0], Vs[1], Vs[2]), zB.hidden = !1, zB.drawn = QB
          }
        }
        jB.commit()
      }
      dispose() {
        var BB;
        window.removeEventListener("resize", this.rG), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (BB = this.pool) || void 0 === BB || BB.dispose(), this.pool = null
      }
      setView(BB, jB) {
        const {
          cameraDir: zB,
          lastDir: QB
        } = this, nB = BB.cameraDirection;
        for (let aB = 0; aB < 3; aB++) QB[aB] = zB[aB], zB[aB] = nB[aB];
        const dB = zB[0] * QB[0] + zB[1] * QB[1] + zB[2] * QB[2],
          IB = Number.isNaN(dB) ? 0 : Math.acos(Math.min(1, Math.max(-1, dB))),
          {
            width: NB,
            height: uB
          } = this,
          UB = BB.tanHalfFovX;
        ! function(BB, jB, zB, QB, nB, dB, IB) {
          let NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          BB.x = jB[0], BB.y = jB[1], BB.z = jB[2], BB.dx = zB[0], BB.dy = zB[1], BB.dz = zB[2];
          const uB = Math.min(Math.PI, Math.atan(Math.sqrt(QB * QB + nB * nB)) + fs + NB);
          BB.cosHalf = Math.cos(uB), BB.sinHalf = Math.sin(uB), BB.pxPerBlock = dB / (2 * nB), BB.frameMs = IB
        }(this.view, jB, zB, UB, UB * uB / NB, uB * window.devicePixelRatio, this.frameMs, IB)
      }
      queue(BB, jB, zB, QB, nB, dB) {
        const IB = Math.max(this.clock.toLocal(BB), this.lastPendingAt);
        this.lastPendingAt = IB, this.pending.push({
          at: IB,
          lines: jB,
          line: zB,
          name: QB,
          pos: nB,
          idx: dB
        })
      }
      applyDue(BB) {
        const {
          pending: jB
        } = this;
        for (; this.pendingHead < jB.length && jB[this.pendingHead].at <= BB;) {
          const BB = jB[this.pendingHead++];
          if (BB.lines) this.applyLines(BB.lines, BB.at), BB.lines = null;
          else {
            const jB = this.lines.get(BB.line);
            jB && this.applyMove(jB, BB, BB.at)
          }
        }
        this.pendingHead === jB.length ? (jB.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > jB.length && (jB.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(BB, jB) {
        this.clearIsland(BB.baf2BeltIsland);
        for (const zB of BB.baf2BeltLineList) this.lines.set(zB[0], hs(BB.baf2BeltIsland, zB, jB));
        this.shown = [...this.lines.values()]
      }
      applyMove(BB, jB, zB) {
        let {
          name: QB,
          pos: nB,
          idx: dB
        } = jB;
        BB.changed = !0, BB.loop && (Xs(BB, zB), (0, mz.t)(BB.items, BB.length, zB, BB.cellsPerMs)), null !== QB && null !== nB ? (0, mz.w)(BB.items, BB.length, Ys(QB, zB), nB, zB, BB.cellsPerMs) : null !== QB ? BB.items.push(Ys(QB, zB)) : BB.items.length > dB && this.release((0, mz.A)(BB.items, BB.length, zB, BB.cellsPerMs, dB))
      }
      clearIsland(BB) {
        for (const [jB, zB] of this.lines)
          if (zB.island === BB) {
            for (const BB of zB.items) this.release(BB);
            this.lines.delete(jB)
          }
      }
      release(BB) {
        null !== BB.kind && (BB.kind.release(BB.slot), BB.kind = null, BB.slot = -1, BB.hidden = !0, BB.drawn = NaN)
      }
    }
    var Ws = zB(36677),
      es = zB(38599);

    function ls(BB) {
      let {
        depth: jB,
        store: zB,
        t: nB
      } = BB;
      const dB = function(BB) {
        const [jB, zB] = (0, QB.useState)(BB.lastPlayerY());
        return (0, Na.f)(An, zB), (0, QB.useEffect)((() => {
          zB(BB.lastPlayerY())
        }), [BB]), jB
      }(zB);
      if (null === dB) return null;
      const [IB, NB] = jB, uB = dB > IB ? IB : null !== NB && dB < NB ? NB : null, UB = {
        y: Md(dB),
        target: null === uB ? "" : Md(uB)
      };
      return (0, Hd.jsx)("span", {
        className: Sn()("Baf2QuestDepth", {
          Reached: null === uB
        }),
        children: nB(`${pa}${null===uB?"questDepthReached":"questDepth"}`, UB)
      })
    }

    function ws(BB) {
      let {
        also: jB,
        view: zB,
        t: QB
      } = BB;
      return (0, Hd.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, Hd.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, Hd.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Hd.jsx)("strong", {
            children: QB(`${pa}questAlsoDownHere`)
          }), (0, Hd.jsx)("span", {
            className: "Baf2QuestChips",
            children: jB.map((BB => {
              let [jB, nB, dB, IB] = BB;
              return (0, Hd.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": QB(`${pa}questAlsoItem`, {
                  item: sa(QB, zB.itemNames[jB], jB),
                  have: String(nB),
                  need: String(dB)
                }),
                children: [(0, Hd.jsx)(ya, {
                  item: jB
                }), (0, Hd.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${nB}/${dB}`
                }), null !== IB && (0, Hd.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: QB(`${pa}questAlsoDepth`, {
                    y: Md(IB)
                  })
                })]
              }, jB)
            }))
          })]
        })]
      })
    }
    var xs = zB(3517);

    function Ks(BB) {
      let {
        expanded: jB,
        inventoryOpen: zB,
        children: nB
      } = BB;
      const dB = (0, QB.useRef)(null);
      return (0, QB.useEffect)((() => {
        const BB = dB.current,
          jB = null === BB || void 0 === BB ? void 0 : BB.closest(".RightElements"),
          QB = null === BB || void 0 === BB ? void 0 : BB.firstElementChild;
        if (!BB || !jB || !QB) return;
        return (0, es.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [jB, QB], (() => {
          const nB = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === nB.length) return;
          const dB = Math.max(...nB.map((BB => BB.getBoundingClientRect().bottom))),
            IB = jB.getBoundingClientRect(),
            NB = zB ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (NB) {
            const jB = parseFloat(getComputedStyle(QB).marginLeft) + parseFloat(getComputedStyle(QB).marginRight),
              zB = IB.right - NB.getBoundingClientRect().right - 8 - jB;
            BB.style.setProperty("--baf2-quest-room", `${zB}px`), BB.classList.toggle("NoRoom", zB < 150)
          } else BB.style.removeProperty("--baf2-quest-room"), BB.classList.remove("NoRoom");
          const uB = dB - IB.top + 8,
            UB = function(BB, jB, zB) {
              const QB = jB.getBoundingClientRect(),
                nB = BB.getBoundingClientRect(),
                dB = (0, xs.d)(nB.left, nB.right, QB.top + zB);
              if (null !== dB && dB < QB.bottom) return dB - QB.top;
              return QB.height - (parseFloat(getComputedStyle(jB).paddingBottom) || 0)
            }(BB, jB, uB) - 8,
            aB = window.innerHeight / 2 - IB.top,
            {
              top: pB,
              maxHeight: rB
            } = function(BB, jB, zB, QB, nB) {
              const dB = Math.min(zB, Math.max(0, jB - BB)),
                IB = nB ? BB : Math.max(BB, Math.min(QB - dB / 2, jB - dB));
              return {
                top: IB,
                maxHeight: Math.max(0, jB - IB)
              }
            }(uB, UB, function(BB) {
              const jB = BB.firstElementChild,
                zB = jB ? jB.scrollHeight - jB.clientHeight : 0;
              return BB.getBoundingClientRect().height + Math.max(0, zB)
            }(QB), aB, od());
          BB.style.top = `${pB}px`, BB.style.maxHeight = `${rB}px`
        }))
      }), [zB]), (0, Hd.jsx)("div", {
        ref: dB,
        className: Sn()("Baf2QuestHud", {
          Expanded: jB
        }),
        children: nB
      })
    }

    function Cs(BB) {
      let {
        amount: jB,
        t: zB
      } = BB;
      return (0, Hd.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, Hd.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, Hd.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: zB(`${pa}questStepsDone`, {
            amount: String(jB)
          })
        })]
      })
    }

    function cs(BB) {
      let {
        pulse: jB
      } = BB;
      return 0 === jB ? null : (0, Hd.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, jB)
    }

    function bs(BB) {
      var jB;
      let {
        store: zB
      } = BB;
      const nB = (0, Na.h)(Zn, zB.get()),
        [dB, IB] = (0, QB.useState)(!1),
        {
          t: NB
        } = (0, fn.D)(),
        uB = (0, qd.f)(fd),
        {
          openInGameMenuName: UB,
          openEverythingMenuName: aB
        } = (0, Ln.m)(["openInGameMenuName", "openEverythingMenuName"]),
        pB = "inventory" === UB && null === aB,
        rB = null !== UB && !pB || null !== aB;
      if (! function(BB) {
          return null !== BB.name || null !== BB.side
        }(nB) || rB || "off" === nB.tutorial) return null;
      const sB = xn(nB.rows),
        JB = sB.filter((BB => BB.done)).length,
        mB = function(BB, jB) {
          const zB = cn(BB);
          let QB = 0;
          return BB.filter(((BB, nB) => !!BB.justFinished || !(BB.done || nB < zB || QB > jB) && (QB++, !0)))
        }(nB.rows, uB ? 0 : 2),
        yB = uB ? mB : function(BB, jB) {
          const zB = jB.filter((BB => !BB.justFinished));
          if (zB.length < 2) return [...jB];
          const QB = BB.indexOf(zB[0]),
            nB = BB.indexOf(zB[zB.length - 1]),
            dB = new Set(xn(BB));
          return BB.filter(((BB, zB) => jB.includes(BB) || BB.done && dB.has(BB) && zB > QB && zB < nB))
        }(nB.rows, mB),
        kB = dB ? nB.rows : yB,
        GB = dB || uB ? [] : function(BB, jB) {
          const zB = new Array(jB.length + 1).fill(0),
            QB = new Set(xn(BB));
          let nB = 0;
          for (const dB of BB) nB < jB.length && dB === jB[nB] ? nB++ : dB.done && QB.has(dB) && zB[nB]++;
          return zB
        }(nB.rows, yB),
        LB = dB || yB.length < nB.rows.length || null !== nB.reward,
        gB = wn(nB),
        tB = gB ? NB(`${pa}questLineComplete`) : nB.tier ? La(NB, nB.tier) : NB(`${pa}currentQuest`),
        SB = function(BB) {
          var jB, zB;
          if (wn(BB)) return null;
          const QB = null === (jB = BB.chapters) || void 0 === jB ? void 0 : jB.find((jB => {
            let [zB] = jB;
            return zB === BB.tier
          }));
          if (!QB) return null;
          const nB = QB[1].filter((BB => !BB[4]));
          if (0 === nB.length) return null;
          const dB = null === (zB = BB.name) || void 0 === zB ? void 0 : zB[0],
            IB = BB => nB.findIndex((jB => jB[0] === dB && (!BB || !jB[3]))),
            NB = IB(!0),
            uB = NB >= 0 ? NB : IB(!1);
          if (uB >= 0) return [uB + 1, nB.length];
          const UB = nB.filter((BB => BB[3])).length;
          return [Math.min(UB + 1, nB.length), nB.length]
        }(nB);
      return (0, Hd.jsx)(Ws.e, {
        placement: "topRight",
        children: (0, Hd.jsx)(Ks, {
          expanded: dB,
          inventoryOpen: pB,
          children: (0, Hd.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: ra,
            children: [null !== nB.name && (0, Hd.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, Hd.jsx)(cs, {
                pulse: nB.pulse
              }), (0, Hd.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, Hd.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [tB, SB && (0, Hd.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": NB(`${pa}questPlaceLabel`, {
                      n: String(SB[0]),
                      total: String(SB[1])
                    }),
                    children: NB(`${pa}questPlace`, {
                      n: String(SB[0]),
                      total: String(SB[1])
                    })
                  }), nB.tier && nB.core && !gB && (0, Hd.jsx)(ga, {
                    core: nB.core,
                    t: NB
                  })]
                })
              }), (0, Hd.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: NB(`${pa}${nB.name[0]}`, Ja(nB.name[1]))
              }), (sB.length > 1 || LB) && (0, Hd.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [sB.length > 1 && (0, Hd.jsx)(ta, {
                  rows: sB,
                  t: NB
                }), LB && (0, Hd.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": dB,
                  onClick: () => {
                    IB(!dB)
                  },
                  children: [(0, Hd.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: NB(`${pa}questStepsToggle`, {
                      done: String(JB),
                      total: String(sB.length)
                    })
                  }), (0, Hd.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: dB ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, Hd.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [kB.map(((BB, jB) => {
                  var dB;
                  const IB = BB.current && nB.depth;
                  return (0, Hd.jsxs)(QB.Fragment, {
                    children: [(null !== (dB = GB[jB]) && void 0 !== dB ? dB : 0) > 0 && (0, Hd.jsx)(Cs, {
                      amount: GB[jB],
                      t: NB
                    }), (0, Hd.jsx)(Sa, {
                      row: BB,
                      view: nB,
                      t: NB,
                      extra: IB && (0, Hd.jsx)(ls, {
                        depth: IB,
                        store: zB,
                        t: NB
                      })
                    })]
                  }, BB.id)
                })), (null !== (jB = GB[kB.length]) && void 0 !== jB ? jB : 0) > 0 && (0, Hd.jsx)(Cs, {
                  amount: GB[kB.length],
                  t: NB
                }), nB.also.length > 0 && (0, Hd.jsx)(ws, {
                  also: nB.also,
                  view: nB,
                  t: NB
                })]
              }), dB && nB.reward && (0, Hd.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [NB(`${pa}questReward`), (0, Hd.jsx)(ya, {
                  item: nB.reward
                }), sa(NB, nB.itemNames[nB.reward], nB.reward)]
              })]
            }), nB.side && (0, Hd.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [Wn(nB, Date.now()) && (0, Hd.jsx)(cs, {
                pulse: nB.sideCameUpAt
              }), (0, Hd.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: NB(`${pa}questSide`)
              }), (0, Hd.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: NB(`${pa}${nB.side.name[0]}`, Ja(nB.side.name[1]))
              }), (0, Hd.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, Hd.jsx)(Sa, {
                  row: nB.side.row,
                  view: nB,
                  t: NB
                })
              })]
            })]
          })
        })
      })
    }
    const vs = "baf2ToastView";
    class Rs {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = BB, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: BB,
          holdMs: jB
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const BB = this.dropCovered();
          BB && this.show(BB.message, BB.holdMs)
        }), 250));
        const zB = this.dropCovered();
        null !== zB && (zB.holdMs > 0 || "baf2ToastCelebrate" === zB.message.baf2ToastStyle) && "baf2ToastCelebrate" !== BB.baf2ToastStyle && this.show(zB.message, zB.holdMs);
        const QB = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== BB.baf2ToastStyle && QB > 0) return this.pending = {
          message: BB,
          holdMs: jB
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const BB = this.pending;
          this.pending = null, BB && this.present(BB.message, BB.holdMs)
        }), QB));
        this.present(BB, jB)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(BB, jB) {
        this.clearTimers(), this.pending = null;
        const zB = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: BB.baf2ToastText,
          style: BB.baf2ToastStyle,
          swapped: zB,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === BB.baf2ToastStyle ? 1500 : jB), this.Ly();
        const QB = Math.min(8e3, Math.max(1e3, BB.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), QB)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.Ly(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Ly()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const BB = this.covering;
        return this.covering = null, BB
      }
      Ly() {
        hn.n.Ly(vs, this.view, !0)
      }
    }
    var Os = zB(83);
    const BJ = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function jJ(BB) {
      let {
        store: jB
      } = BB;
      const zB = (0, Na.h)(vs, jB.get()),
        {
          openInGameMenuName: QB,
          openEverythingMenuName: nB
        } = (0, Ln.m)(["openInGameMenuName", "openEverythingMenuName"]),
        dB = zB && (0, Hd.jsxs)("div", {
          className: Sn()("Baf2Toast", BJ[zB.style], {
            Swapped: zB.swapped,
            Leaving: zB.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === zB.style && (0, Hd.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, Hd.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, Hd.jsx)(Fn.e, {
              text: zB.text
            })
          })]
        }, zB.id);
      return null !== QB && null === nB ? (0, Os.createPortal)((0, Hd.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: dB
      }), document.body) : (0, Hd.jsx)(Ws.e, {
        children: dB
      })
    }
    const zJ = "baf2AreaView";
    class QJ {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.DN = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.DN = null
      }
      arrive(BB, jB) {
        jB && function(BB) {
          return "home" === BB.baf2AreaPlace && void 0 !== BB.baf2AreaNameText
        }(BB) ? this.DN = BB : this.show(BB)
      }
      release() {
        const BB = this.DN;
        null !== BB && this.show(BB)
      }
      show(BB) {
        this.clearTimer(), this.DN = null;
        const jB = void 0 === BB.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: BB,
          ms: jB
        }, this.Ly(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Ly()
        }), jB)
      }
      dispose() {
        this.clearTimer(), this.DN = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      Ly() {
        hn.n.Ly(zJ, this.view, !0)
      }
    }

    function nJ(BB) {
      var jB;
      let {
        store: zB
      } = BB;
      const {
        t: QB
      } = (0, fn.D)(), nB = (0, Na.h)(zJ, zB.get());
      if (!nB) return null;
      const {
        area: dB
      } = nB, IB = dB.baf2AreaResetMinutes;
      return (0, Hd.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": dB.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${nB.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Hd.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), dB.baf2AreaHeading && (0, Hd.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: QB(dB.baf2AreaHeading)
        }), (0, Hd.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (jB = dB.baf2AreaNameText) && void 0 !== jB ? jB : QB(dB.baf2AreaName)
        }), dB.baf2AreaNote && (0, Hd.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: QB(dB.baf2AreaNote)
        }), void 0 !== IB && (0, Hd.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: QB("buildAFactory2Game:areaWildsReset", {
            time: Ed(QB, 60 * IB)
          })
        })]
      }, nB.id)
    }
    const dJ = "baf2GearGauge";
    class IJ {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      hG(BB) {
        var jB;
        if (this.clearLinger(), null === BB.gearPowerKind) return void this.set(null);
        const zB = "jetpack" === BB.gearPowerKind && (QB = BB.gearChargeState, nB = BB.gearCharge, "flying" === QB || "charging" === QB || "outOfCharge" === QB || "ceiling" === QB || "offPlot" === QB || "noPower" === QB && nB <= 0);
        var QB, nB;
        const dB = !0 === (null === (jB = this.view) || void 0 === jB ? void 0 : jB.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          IB = zB || "jetpack" === BB.gearPowerKind && dB;
        this.set({
          gauge: BB,
          jetShown: IB
        }), IB && !zB && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(BB) {
        this.view = BB, hn.n.Ly(dJ, BB, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const NJ = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function uJ(BB) {
      let {
        store: jB
      } = BB;
      const zB = (0, Na.h)(dJ, jB.get());
      return zB ? "jetpack" === zB.gauge.gearPowerKind ? (0, Hd.jsx)(UJ, {
        view: zB
      }) : (0, Hd.jsx)(aJ, {
        gauge: zB.gauge
      }) : null
    }

    function UJ(BB) {
      let {
        view: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)(), {
        gauge: QB
      } = jB, nB = QB.gearChargeMax > 0 ? Math.max(0, Math.min(1, QB.gearCharge / QB.gearChargeMax)) : 0, dB = NJ[QB.gearChargeState], IB = dB ? zB(dB) : null;
      return (0, Hd.jsxs)("div", {
        className: Sn()("Baf2JetArc", {
          Shown: jB.jetShown,
          Low: nB < .2,
          Warm: nB >= .2 && nB < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - nB)
        },
        "aria-hidden": !jB.jetShown,
        children: [(0, Hd.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, Hd.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: pJ,
            pathLength: 100
          }), (0, Hd.jsx)("path", {
            className: "Baf2JetArcFill",
            d: pJ,
            pathLength: 100
          })]
        }), (0, Hd.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * nB), "%"]
        }), IB && (0, Hd.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: IB
        })]
      })
    }

    function aJ(BB) {
      let {
        gauge: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)(), QB = function(BB, jB) {
        switch (jB.gearPowerKind) {
          case "skyPack":
            return BB("buildAFactory2Game:gearSkyPack", {
              charge: jB.gearCharge,
              max: jB.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return BB("buildAFactory2Game:gearIslandDraw", {
              power: vB(jB.gearIslandPower),
              cost: vB(jB.gearCostPerUse)
            });
          case "barrier":
            return BB("buildAFactory2Game:gearBarrier", {
              shield: Math.round(jB.gearCharge),
              max: jB.gearChargeMax,
              power: vB(jB.gearIslandPower)
            });
          default:
            return null
        }
      }(zB, jB);
      return null === QB ? null : (0, Hd.jsx)(Ws.e, {
        children: (0, Hd.jsx)("div", {
          className: Sn()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === jB.gearChargeState || "outOfCharge" === jB.gearChargeState
          }),
          role: "status",
          children: QB
        })
      })
    }
    const pJ = (() => {
      const BB = BB => {
        const jB = BB * Math.PI / 180;
        return `${(40*Math.cos(jB)).toFixed(2)} ${(40*Math.sin(jB)).toFixed(2)}`
      };
      return `M ${BB(160)} A 40 40 0 1 1 ${BB(380)}`
    })();
    class rJ {
      constructor(BB) {
        this.onElement = BB, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      hG(BB) {
        let jB = BB.baf2LabelsReset || BB.baf2LabelsIsland !== this.island;
        jB && (this.labels.clear(), this.island = BB.baf2LabelsIsland);
        for (const [zB, QB, nB, dB, IB] of BB.baf2LabelsList) {
          const BB = `${zB},${QB},${nB}`,
            NB = this.labels.get(BB);
          null === dB ? jB = this.labels.delete(BB) || jB : NB && NB.item === dB && (NB.count === IB || NB.count >= 0 && IB >= 0) ? NB.count !== IB && (NB.count = IB, this.writeCount(BB, IB)) : (this.labels.set(BB, {
            key: BB,
            pos: [zB, QB, nB],
            item: dB,
            count: IB
          }), this.writeCount(BB, IB), jB = !0)
        }
        if (this.changes++, jB) {
          this.snapshot = [...this.labels.values()];
          for (const BB of this.listeners) BB()
        }
      }
      bindCount(BB) {
        const jB = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${BB}`;
        let zB = this.countRefs.get(jB);
        return zB || (zB = zB => {
          var QB, nB;
          zB ? (this.countElements.set(jB, zB), this.writeCount(BB, null !== (QB = null === (nB = this.labels.get(BB)) || void 0 === nB ? void 0 : nB.count) && void 0 !== QB ? QB : -1)) : (this.countElements.delete(jB), this.countRefs.delete(jB))
        }, this.countRefs.set(jB, zB)), zB
      }
      setCountWords(BB) {
        this.countWords = BB;
        for (const [jB, zB] of this.labels) this.writePart(`words|${jB}`, BB(zB.count), zB.count)
      }
      writeCount(BB, jB) {
        this.writePart(`bare|${BB}`, Sd(jB), jB), this.countElements.has(`words|${BB}`) && this.writePart(`words|${BB}`, this.countWords(jB), jB)
      }
      writePart(BB, jB, zB) {
        const QB = this.countElements.get(BB);
        if (!QB || zB < 0) return;
        const nB = QB.firstChild;
        nB && 3 === nB.nodeType && !nB.nextSibling ? nB.nodeValue !== jB && (nB.nodeValue = jB) : QB.textContent !== jB && (QB.textContent = jB)
      }
      list() {
        return this.snapshot
      }
      at(BB) {
        return this.labels.get(`${BB[0]},${BB[1]},${BB[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      bind(BB) {
        let jB = this.refs.get(BB);
        return jB || (jB = jB => {
          const zB = this.elements.get(BB);
          var QB, nB;
          zB && (null === (QB = this.onElement) || void 0 === QB || QB.call(this, zB, !1));
          jB ? (this.elements.set(BB, jB), null === (nB = this.onElement) || void 0 === nB || nB.call(this, jB, !0)) : (this.elements.delete(BB), this.refs.delete(BB))
        }, this.refs.set(BB, jB)), jB
      }
      onAfterRender(BB, jB, zB, QB) {
        for (const nB of this.snapshot) {
          const dB = this.elements.get(nB.key);
          if (!dB) continue;
          if (QB(nB.key)) {
            (0, rs.g)(dB, !0);
            continue
          }
          const IB = (0, Ls.c)(dB, BB, jB, nB.pos, 1.1, 24);
          IB && zB.add(IB, dB, 0, !1)
        }
      }
    }
    const sJ = (0, QB.memo)((function(BB) {
        let {
          item: jB
        } = BB;
        return (0, Hd.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, Hd.jsx)(Dn.c, {
            itemName: jB,
            amount: 0
          })
        })
      })),
      JJ = (0, QB.memo)((function(BB) {
        let {
          label: jB,
          bindRef: zB,
          countRef: QB,
          wordsRef: nB
        } = BB;
        return (0, Hd.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: zB,
          hidden: !0,
          children: [(0, Hd.jsx)(sJ, {
            item: jB.item
          }), jB.count >= 0 && (0, Hd.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, Hd.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: nB
            }), (0, Hd.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: QB
            })]
          })]
        })
      })),
      mJ = (0, QB.memo)((function(BB) {
        let {
          store: jB
        } = BB;
        const {
          t: zB
        } = (0, fn.D)(), [nB, dB] = (0, QB.useState)((() => jB.list()));
        return (0, QB.useEffect)((() => (dB(jB.list()), jB.subscribe((() => {
          dB(jB.list())
        })))), [jB]), (0, QB.useEffect)((() => {
          jB.setCountWords((BB => zB("buildAFactory2Game:labelSiloCount", {
            count: Sd(BB)
          })))
        }), [jB, zB]), (0, Hd.jsx)("div", {
          className: "Baf2IslandLabels",
          children: nB.map((BB => -2 === BB.count ? null : (0, Hd.jsx)(JJ, {
            label: BB,
            bindRef: jB.bind(BB.key),
            countRef: jB.bindCount(BB.key),
            wordsRef: jB.bindCount(BB.key, "words")
          }, BB.key)))
        })
      })),
      yJ = {
        read: () => !0,
        write: () => {}
      };

    function kJ(BB) {
      return `${BB[0]},${BB[1]},${BB[2]}`
    }

    function GJ(BB) {
      let [jB, zB, QB, nB, dB, IB, NB, uB, UB, aB, pB, rB] = BB;
      const sB = void 0 === pB || void 0 === rB ? function(BB) {
        return [Math.floor((BB - 1) / 2), 0]
      }(dB) : [pB, rB];
      return {
        kind: 0 === uB ? "reactor" : "battery",
        box: ez([jB, zB, QB], nB, dB, IB, NB, sB),
        formed: 1 === UB,
        level: aB
      }
    }
    class LJ {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yJ;
        this.guideSetting = BB, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = BB.read()
      }
      hG(BB) {
        var jB;
        const zB = new Map;
        for (const QB of BB.baf2RxPlanList) {
          const BB = GJ(QB);
          zB.set(kJ(BB.box.ctrl), BB)
        }
        this.plans = zB, this.layouts = new Map((null !== (jB = BB.baf2RxLayouts) && void 0 !== jB ? jB : []).map((BB => {
          let [jB, zB, QB, nB] = BB;
          return [kJ([jB, zB, QB]), nB]
        }))), this.predicted.clear(), BB.baf2RxFormedAt && (this.formed = {
          ctrl: BB.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const QB of [...this.startersOff]) {
          const BB = zB.get(QB);
          BB && !BB.formed || this.startersOff.delete(QB)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((BB => this.planByKey(BB)))
      }
      planAt(BB) {
        return this.planByKey(kJ(BB))
      }
      predictSize(BB, jB) {
        this.predicted.set(kJ(BB), jB), this.changed()
      }
      unpredict(BB) {
        this.predicted.delete(kJ(BB)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(BB) {
        var jB;
        const zB = kJ(BB);
        return this.predicted.has(zB) ? null : null !== (jB = this.layouts.get(zB)) && void 0 !== jB ? jB : null
      }
      showsStarter(BB) {
        return !this.startersOff.has(kJ(BB))
      }
      setStarter(BB, jB) {
        const zB = kJ(BB);
        jB ? this.startersOff.delete(zB) : this.startersOff.add(zB), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(BB) {
        this.guide = BB, this.guideSetting.write(BB), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(BB) {
        const jB = this.plans.get(BB);
        if (!jB) return null;
        const zB = this.predicted.get(BB);
        return zB ? {
          ...jB,
          box: wz(jB.box, jB.kind, zB[0], zB[1], zB[2])
        } : jB
      }
      changed() {
        this.version++;
        for (const BB of this.listeners) BB()
      }
    }
    var gJ = zB(214);
    const tJ = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function SJ(BB, jB, zB, QB) {
      const nB = BB.length / 3;
      for (let dB = 0; dB < tJ.length / 3; dB++) BB.push(tJ[3 * dB] * QB[0] / 2 + zB[0], tJ[3 * dB + 1] * QB[1] / 2 + zB[1], tJ[3 * dB + 2] * QB[2] / 2 + zB[2]);
      for (let dB = nB; dB < nB + 24; dB += 4) jB.push(dB, dB + 1, dB + 2, dB, dB + 2, dB + 3)
    }

    function MJ(BB, jB, zB) {
      const QB = jB[0][0],
        nB = [],
        dB = [];
      for (const [IB, NB] of jB) SJ(nB, dB, [IB[0] - QB[0], IB[1] - QB[1], IB[2] - QB[2]], NB);
      return BB.createGameMesh({
        positions: nB,
        indices: dB
      }, zB, QB)
    }

    function EJ(BB, jB) {
      const zB = BB.w - 2,
        QB = BB.d - 2;
      return 1 === function(BB, jB, zB, QB) {
        const [nB, dB, IB] = BB;
        if (Number(nB <= 2) + Number(dB <= 2) + Number(IB <= 2) >= 2) return function(BB, jB, zB) {
          return (BB + jB + zB) % 2 === 0 ? 1 : 3
        }(jB, zB, QB);
        const [NB, uB] = nB >= dB && nB >= IB ? [zB, QB] : dB >= IB ? [jB, QB] : [jB, zB];
        return NB % 2 === 0 && uB % 2 === 0 ? 1 : 3
      }([zB, BB.h - 2, QB], jB % zB, Math.floor(jB / (zB * QB)), Math.floor(jB / zB) % QB) ? "rod" : "channel"
    }

    function iJ(BB, jB, zB) {
      if ("reactor" !== BB.kind || BB.formed || !jB) return !1;
      const QB = Cz(BB.box);
      for (let nB = 0; nB < QB; nB++) {
        const BB = zB(nB);
        if (null !== BB && Hz(BB)) return !1
      }
      return !0
    }

    function qJ(BB, jB, zB, QB, nB) {
      var dB;
      let IB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const NB = BQ(BB.box, jB),
        uB = nQ(BB.kind, NB, zB);
      if ("wrong" === uB || "blocked" === uB) return "wrong";
      if (!nB) return null;
      if ("inside" === NB && "reactor" === BB.kind && "Air" === Dz(zB)) {
        if (null !== IB) {
          var UB;
          const zB = Ir[Nr(IB, jQ(BB.box, jB))];
          return zB && null !== (UB = Hu(zB)) && void 0 !== UB ? UB : null
        }
        if (QB) return EJ(BB.box, jQ(BB.box, jB))
      }
      if ("missing" !== uB) return null;
      const aB = dQ(BB.kind, NB);
      return null === aB ? null : null !== (dB = Hu(aB)) && void 0 !== dB ? dB : null
    }
    const fJ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function oJ(BB, jB, zB) {
      const QB = zB => {
        const QB = jB(Rz(BB.box, zB));
        return null !== QB && function(BB, jB) {
          return "reactor" !== BB.kind || jB !== bz(BB.box) && "inside" !== BQ(BB.box, jB)
        }(BB, zB) && "ok" !== nQ(BB.kind, BQ(BB.box, zB), QB)
      };
      if (zB) {
        const dB = Oz(BB.box, [Math.floor(zB[0]), Math.floor(zB[1]), Math.floor(zB[2])]);
        if (dB >= 0 && (QB(dB) || (nB = dB, "reactor" === BB.kind && "inside" === BQ(BB.box, nB) && "Air" === jB(Rz(BB.box, nB))))) return dB
      }
      var nB;
      const dB = Cz(BB.box);
      for (let IB = 0; IB < dB; IB++)
        if (QB(IB)) return IB;
      return -1
    }

    function HJ(BB, jB) {
      return Math.floor(jB / (BB.w * BB.d))
    }

    function DJ(BB, jB, zB) {
      return zB >= 0 && HJ(BB, jB) > HJ(BB, zB)
    }

    function FJ(BB, jB) {
      return jB >= 0 && BB.h >= 3 && HJ(BB, jB) === BB.h - 1
    }

    function YJ(BB) {
      const jB = Dz(BB);
      return jB === Gz || "Collider" === jB || "Laser" === jB || jB.startsWith("_Collider ")
    }

    function VJ(BB, jB, zB, QB) {
      if (QB(BB)) return null;
      if (!fJ.every((jB => {
          let [QB, nB, dB] = jB;
          const IB = zB([BB[0] + QB, BB[1] + nB, BB[2] + dB]);
          return null !== IB && !Az("reactor", IB) && "reactor" !== Fz(IB)
        }))) return null;
      const nB = Tz("reactor").min,
        dB = ez([BB[0], BB[1], BB[2]], function(BB, jB) {
          const zB = jB[0] - (BB[0] + .5),
            QB = jB[2] - (BB[2] + .5);
          return Math.abs(zB) >= Math.abs(QB) ? zB >= 0 ? 2 : 4 : QB >= 0 ? 1 : 3
        }(BB, jB), nB, nB, nB, lz("reactor", nB)),
        IB = bz(dB);
      let NB = !0;
      for (let uB = 0; uB < Cz(dB) && NB; uB++) {
        if (uB === IB) continue;
        const BB = Rz(dB, uB),
          jB = zB(BB);
        NB = !QB(BB) && (null === jB || !YJ(jB))
      }
      return {
        box: dB,
        fits: NB
      }
    }
    const hJ = ou,
      XJ = "baf2Goal",
      ZJ = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      AJ = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      TJ = .4;

    function PJ(BB, jB) {
      let [zB, QB, nB] = BB;
      const dB = Zu([zB - .02, QB - .02, nB - .02], [zB + 1.02, QB + 1.02, nB + 1.02], .07);
      return jB && (dB.push([
        [zB + .5, QB + 1 + .7, nB + .5],
        [.08, 1.4, .08]
      ]), dB.push([
        [zB + .5, QB + 1 + 1.4 + .2, nB + .5],
        [TJ, TJ, TJ]
      ])), dB
    }

    function WJ(BB, jB) {
      let [zB, QB, nB] = jB;
      return BB.isBlockInLoadedChunk(zB, QB, nB) ? BB.blockIdToBlockName(BB.getBlockId(zB, QB, nB)) : null
    }
    let eJ = null;
    const lJ = new Set;
    let wJ = null;

    function xJ(BB) {
      eJ = BB;
      for (const jB of lJ) jB(BB)
    }
    class KJ {
      constructor(BB) {
        var jB;
        this.plans = BB, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (jB = BB => {
          var jB, zB;
          this.setGoal(null !== (jB = null === BB || void 0 === BB ? void 0 : BB.goal) && void 0 !== jB ? jB : null, null !== (zB = null === BB || void 0 === BB ? void 0 : BB.startsBattery) && void 0 !== zB && zB)
        }, wJ ??= [hn.n.subscribe("setDirectionArrow", (BB => {
          let {
            id: jB,
            position: zB,
            text: QB
          } = BB;
          jB === XJ && xJ({
            goal: [Math.floor(zB[0]), Math.floor(zB[1]), Math.floor(zB[2])],
            startsBattery: JSON.stringify(null !== QB && void 0 !== QB ? QB : null).includes("arrowStartBattery")
          })
        })), hn.n.subscribe("clearDirectionArrow", (BB => {
          let {
            id: jB
          } = BB;
          null !== jB && jB !== XJ || xJ(null)
        }))], lJ.add(jB), jB(eJ), () => {
          lJ.delete(jB)
        })
      }
      onAfterRender(BB, jB) {
        const zB = performance.now();
        if (this.cues.length > 0) {
          const jB = .55 + .45 * Math.sin(zB / 1100 * Math.PI * 2);
          for (const zB of this.cues) BB.setGameMesh(zB, {
            visibility: jB
          })
        }
        if (zB - this.lastCheckMs < 150) return;
        this.lastCheckMs = zB;
        const QB = this.plans.all().filter((BB => {
            const [zB, QB, nB] = BB.box.ctrl;
            return (!BB.formed || null !== this.plans.layoutOf(BB.box.ctrl)) && (zB - jB[0]) ** 2 + (QB - jB[1]) ** 2 + (nB - jB[2]) ** 2 <= 2304
          })),
          nB = function(BB, jB) {
            const zB = gJ.e.ZJ,
              QB = new Map;
            for (const dB of jB) {
              const jB = Rz(dB.box, 0),
                IB = Rz(dB.box, Cz(dB.box) - 1),
                NB = [Math.min(jB[0], IB[0]), Math.min(jB[1], IB[1]), Math.min(jB[2], IB[2])].map((BB => Math.floor(BB / zB))),
                uB = [Math.max(jB[0], IB[0]), Math.max(jB[1], IB[1]), Math.max(jB[2], IB[2])].map((BB => Math.floor(BB / zB)));
              for (let zB = NB[0]; zB <= uB[0]; zB++)
                for (let jB = NB[1]; jB <= uB[1]; jB++)
                  for (let dB = NB[2]; dB <= uB[2]; dB++) {
                    var nB;
                    QB.set(`${zB},${jB},${dB}`, null !== (nB = BB.getChunkVersion(zB, jB, dB)) && void 0 !== nB ? nB : -1)
                  }
            }
            return QB
          }(BB, QB);
        this.plans.getVersion() === this.storeVersion && (function(BB, jB) {
          if (BB.size !== jB.size) return !1;
          for (const [zB, QB] of BB)
            if (jB.get(zB) !== QB) return !1;
          return !0
        }(nB, this.chunkVersions) || zB - this.lastRescanMs < 600) || (this.lastRescanMs = zB, this.storeVersion = this.plans.getVersion(), this.chunkVersions = nB, this.redraw(BB, QB))
      }
      dispose(BB) {
        this.unwatch(), eJ = null, this.clearMeshes(BB), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(BB, jB) {
        var zB;
        (null === BB || void 0 === BB ? void 0 : BB.join()) === (null === (zB = this.goal) || void 0 === zB ? void 0 : zB.join()) && jB === this.startsBattery || (this.goal = BB, this.startsBattery = jB, this.storeVersion = -1)
      }
      redraw(BB, jB) {
        const zB = jB => WJ(BB, jB),
          QB = new Map,
          nB = [],
          dB = this.plans.guideOn();
        for (const UB of jB) {
          const BB = dB && iJ(UB, this.plans.showsStarter(UB.box.ctrl), (BB => zB(Rz(UB.box, BB)))),
            jB = "reactor" === UB.kind ? this.plans.layoutOf(UB.box.ctrl) : null,
            IB = dB && !UB.formed ? oJ(UB, zB, this.goal) : -1;
          IB >= 0 && nB.push([Rz(UB.box, IB), FJ(UB.box, IB)]);
          const NB = Cz(UB.box);
          for (let nB = 0; nB < NB; nB++) {
            const NB = Rz(UB.box, nB),
              uB = zB(NB),
              aB = null === uB ? null : qJ(UB, nB, uB, BB, dB, jB);
            if (null !== aB) {
              const BB = "wrong" !== aB && DJ(UB.box, nB, IB),
                jB = BB ? `${aB}Dim` : aB;
              let zB = QB.get(jB);
              zB || (zB = {
                draw: {
                  ghost: aB,
                  dim: BB
                },
                list: []
              }, QB.set(jB, zB)), zB.list.push(NB)
            }
          }
        }
        if (dB && this.startsBattery && this.goal) {
          const [BB, jB, nB] = this.goal, dB = [];
          for (const [QB, IB, NB] of ZJ) {
            const uB = [BB + QB, jB + IB, nB + NB];
            "Air" === zB(uB) && dB.push(uB)
          }
          if (dB.length > 0) {
            var IB;
            const BB = null !== (IB = QB.get("cell")) && void 0 !== IB ? IB : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            BB.list.push(...dB), QB.set("cell", BB)
          }
        }
        const NB = [...QB.keys()].sort(),
          uB = [...NB.map((BB => `${BB}:${QB.get(BB).list.join(";")}`)), `cue:${nB.join(";")}`].join("|");
        if (uB !== this.shownKey) {
          this.shownKey = uB, this.clearMeshes(BB);
          for (const jB of NB) {
            const {
              draw: zB,
              list: nB
            } = QB.get(jB);
            this.meshes.push(this.build(BB, zB, nB))
          }
          for (const [jB, zB] of nB) this.cues.push(MJ(BB, PJ(jB, zB), AJ))
        }
      }
      build(BB, jB, zB) {
        let {
          ghost: QB,
          dim: nB
        } = jB;
        const {
          size: dB,
          colour: IB,
          alpha: NB
        } = hJ[QB], uB = zB[0], UB = [], aB = [];
        for (const [pB, rB, sB] of zB) SJ(UB, aB, [pB - uB[0] + .5, rB - uB[1] + .5, sB - uB[2] + .5], [dB, dB, dB]);
        return BB.createGameMesh({
          positions: UB,
          indices: aB
        }, {
          rgb: IB,
          alpha: NB * (nB ? .3 : 1)
        }, uB)
      }
      clearMeshes(BB) {
        for (const jB of [...this.meshes, ...this.cues]) BB.disposeGameMesh(jB);
        this.meshes = [], this.cues = []
      }
    }
    const CJ = [.56, .83, 1],
      cJ = [1, .3, .25];
    class bJ {
      constructor(BB) {
        this.plans = BB, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(BB, jB, zB) {
        var QB;
        const nB = performance.now();
        if (nB - this.lastCheckMs < 150) return;
        this.lastCheckMs = nB;
        const dB = jB => WJ(BB, jB),
          IB = null === (QB = BB.ZjB(jB)) || void 0 === QB ? void 0 : QB.name,
          NB = IB && "Reactor Frame" === Dz(IB) ? BB.getTargetedBlock() : null,
          uB = NB ? [NB.By[0], NB.By[1], NB.By[2]] : null,
          UB = null !== uB && "Air" === dB(uB) && uB.every(((BB, jB) => Math.abs(BB + .5 - zB[jB]) <= 8)) ? VJ(uB, zB, dB, (BB => this.inPlan(BB))) : null,
          aB = UB ? `${UB.box.ctrl.join()}|${UB.box.rot}|${UB.fits}` : "";
        aB !== this.shownKey && this.show(BB, aB, UB)
      }
      dispose(BB) {
        this.clear(BB), this.shownKey = ""
      }
      inPlan(BB) {
        return this.plans.all().some((jB => Oz(jB.box, BB) >= 0))
      }
      show(BB, jB, zB) {
        if (this.clear(BB), this.shownKey = jB, !zB) return;
        const {
          box: QB,
          fits: nB
        } = zB, dB = nB ? CJ : cJ, {
          lo: IB,
          hi: NB
        } = Xu(QB);
        this.meshes.push(MJ(BB, Zu(IB, NB, .05), {
          rgb: dB,
          alpha: 1
        }));
        const uB = [],
          UB = Rz(QB, 0)[1];
        for (let aB = 0; aB < QB.w * QB.d; aB++) {
          const [BB, , jB] = Rz(QB, aB);
          uB.push([
            [BB + .5, UB + .02 + .01, jB + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(MJ(BB, uB, {
          rgb: dB,
          alpha: .25
        }))
      }
      clear(BB) {
        for (const jB of this.meshes) BB.disposeGameMesh(jB);
        this.meshes = []
      }
    }
    const vJ = "buildAFactory2Game:";

    function RJ(BB, jB, zB) {
      const QB = BB => {
          const [zB, QB, nB] = BB.box.ctrl;
          return zB === jB[0] && QB === jB[1] && nB === jB[2]
        },
        nB = BB.find((BB => QB(BB) || Oz(BB.box, jB) >= 0));
      if (!nB) return null;
      const dB = function(BB, jB, zB) {
        const {
          w: QB,
          h: nB,
          d: dB
        } = BB.box, IB = "reactor" === BB.kind ? `${vJ}rxTitle` : `${vJ}batTitle`;
        if (BB.formed) return {
          key: `${vJ}lookPlanFormed`,
          kindKey: IB,
          w: QB,
          h: nB,
          d: dB,
          count: 0
        };
        let NB = 0,
          uB = 0;
        for (let aB = 0; aB < Cz(BB.box); aB++) {
          const jB = zB(Rz(BB.box, aB)),
            QB = null === jB ? "ok" : nQ(BB.kind, BQ(BB.box, aB), jB);
          NB += "missing" === QB ? 1 : 0, uB += "wrong" === QB || "blocked" === QB ? 1 : 0
        }
        const UB = function(BB, jB, zB) {
          if (jB < 0 || null === zB) return;
          const QB = BQ(BB.box, jB),
            nB = nQ(BB.kind, QB, zB);
          return "blocked" === nB ? `${vJ}lookWhy_blocked` : "wrong" === nB ? "ctrl" === QB ? `${vJ}lookWhy_ctrl` : `${vJ}lookWhy_reactor_${QB}` : void 0
        }(BB, Oz(BB.box, jB), zB([jB[0], jB[1], jB[2]]));
        if (NB > 0) return {
          key: `${vJ}lookPlanToBuild`,
          kindKey: IB,
          w: QB,
          h: nB,
          d: dB,
          count: NB,
          why: UB
        };
        if (uB > 0) return {
          key: `${vJ}lookPlanTakeOut`,
          kindKey: IB,
          w: QB,
          h: nB,
          d: dB,
          count: uB,
          why: UB
        };
        return {
          key: "reactor" === BB.kind ? `${vJ}lookPlanNoRods` : `${vJ}lookPlanDone`,
          kindKey: IB,
          w: QB,
          h: nB,
          d: dB,
          count: 0
        }
      }(nB, jB, zB);
      return "reactor" === nB.kind && QB(nB) ? {
        ...dB,
        ctrl: !0
      } : dB
    }

    function OJ(BB, jB) {
      return BB === jB || null !== BB && null !== jB && BB.key === jB.key && BB.kindKey === jB.kindKey && BB.w === jB.w && BB.h === jB.h && BB.d === jB.d && BB.count === jB.count && BB.why === jB.why && BB.ctrl === jB.ctrl
    }

    function Bm() {
      return performance.now()
    }
    class jm {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bm;
        this.ticket = BB, this.sent = jB, this.backstopMs = zB, this.now = QB, this.queuedAt = void 0, this.queuedAt = QB()
      }
      answered() {
        const BB = this.now(),
          jB = this.sent.leftAt(this.ticket);
        return null !== jB && BB - jB > 4e3 || BB - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class zm {
      constructor() {
        this.echoes = []
      }
      add(BB) {
        this.echoes = this.echoes.filter((BB => !BB.answered())), this.echoes.push(BB)
      }
      answered() {
        var BB, jB;
        return null === (BB = null === (jB = this.echoes.at(-1)) || void 0 === jB ? void 0 : jB.answered()) || void 0 === BB || BB
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((BB => BB.answered()))
      }
      age() {
        var BB, jB;
        return null !== (BB = null === (jB = this.echoes.at(-1)) || void 0 === jB ? void 0 : jB.age()) && void 0 !== BB ? BB : null
      }
      clear() {
        this.echoes = []
      }
    }
    class Qm {
      constructor(BB) {
        this.send = BB, this.value = null, this.sent = null, this.echoes = new zm, this.down = !1, this.timer = null
      }
      shown(BB) {
        return null === this.value ? BB : this.down || this.value !== this.sent ? this.value : BB === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), BB) : this.value
      }
      pendingFor(BB) {
        return null !== this.value && this.value === this.sent && BB !== this.value ? this.echoes.age() : null
      }
      assume(BB, jB) {
        this.disarm(), this.down = !1, this.value = BB, this.sent = BB, this.echoes.clear(), this.echoes.add(jB)
      }
      press() {
        this.down = !0
      }
      drag(BB) {
        this.value = BB, this.arm(this.down ? 1e3 : 400)
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
      arm(BB) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), BB)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class nm {
      constructor() {
        this.pending = new Map
      }
      set(BB, jB, zB) {
        var QB;
        const nB = null !== (QB = this.pending.get(BB)) && void 0 !== QB ? QB : {
          on: jB,
          echoes: new zm
        };
        nB.on = jB, nB.echoes.add(zB), this.pending.set(BB, nB)
      }
      shown(BB) {
        let jB = BB;
        for (const [zB, {
            on: QB,
            echoes: nB
          }] of this.pending) 0 !== (BB & zB) === QB && nB.agreeCounts() || nB.answered() ? this.pending.delete(zB) : jB = QB ? jB | zB : jB & ~zB;
        return jB
      }
      pendingMask() {
        let BB = 0;
        for (const jB of this.pending.keys()) BB |= jB;
        return BB
      }
      pendingFor(BB) {
        let jB = null;
        for (const [QB, {
            on: nB,
            echoes: dB
          }] of this.pending) {
          if (void 0 !== BB && 0 !== (BB & QB) === nB) continue;
          const IB = dB.age();
          var zB;
          if (null !== IB) jB = Math.max(null !== (zB = jB) && void 0 !== zB ? zB : 0, IB)
        }
        return jB
      }
      clear() {
        this.pending.clear()
      }
    }
    class dm {
      constructor() {
        this.dims = null, this.echoes = new zm, this.unmet = null
      }
      shown(BB) {
        var jB;
        return this.dims && (Im(this.dims, BB) && this.echoes.agreeCounts() || this.echoes.answered()) && (Im(this.dims, BB) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (jB = this.dims) && void 0 !== jB ? jB : BB
      }
      takeUnmet() {
        const BB = this.unmet;
        return this.unmet = null, BB
      }
      set(BB, jB) {
        this.dims = BB, this.echoes.add(jB)
      }
      pendingFor(BB) {
        return null === this.dims || BB && Im(this.dims, BB) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function Im(BB, jB) {
      return BB[0] === jB[0] && BB[1] === jB[1] && BB[2] === jB[2]
    }
    class Nm {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bm;
        this.now = BB, this.taps = new Map
      }
      tap(BB, jB, zB) {
        return !this.busy(BB) && (this.taps.set(BB, {
          at: this.now(),
          done: jB
        }), zB(), !0)
      }
      settle(BB) {
        for (const [jB, zB] of [...this.taps]) zB.done(BB) && this.taps.delete(jB)
      }
      busy(BB) {
        const jB = this.taps.get(BB);
        return !!jB && (!(this.now() - jB.at >= 3e3) || (this.taps.delete(BB), !1))
      }
      busyIds() {
        const BB = new Set;
        for (const jB of [...this.taps.keys()]) this.busy(jB) && BB.add(jB);
        return BB
      }
      clear() {
        this.taps.clear()
      }
    }

    function um(BB) {
      return {
        send: jB => BB.track(jB),
        sendUrgent: (jB, zB) => BB.track(jB, {
          urgent: !0,
          supersedes: zB
        }),
        leftAt: jB => BB.leftAt(jB),
        holdReserve: () => BB.holdUrgentReserve(),
        answerMs: AI
      }
    }

    function Um() {
      return performance.now()
    }

    function am(BB) {
      const jB = BB.baf2RxNeed.map((BB => {
        let [jB, zB] = BB;
        return [jB, zB]
      }));
      return JSON.stringify([BB.baf2RxFormed, jB, BB.baf2RxBad, BB.baf2RxCells])
    }

    function pm(BB, jB) {
      const zB = 0 !== (jB & rj),
        QB = 0 !== (BB.baf2RxFlags & rj);
      return !zB || QB || "running" !== BB.baf2RxState && "idle" !== BB.baf2RxState ? !zB && QB && "scram" === BB.baf2RxState && BB.baf2RxFuel > 0 ? "idle" : BB.baf2RxState : "scram"
    }

    function rm(BB) {
      return JSON.stringify([BB.baf2BatFormed, BB.baf2BatNeed, BB.baf2BatBad])
    }

    function sm(BB) {
      return BB.join(",")
    }
    class Jm {
      constructor() {
        this.listeners = new Set
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class mm {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(BB, jB) {
        this.lastAt = BB, this.lastUntil = BB + jB
      }
      answered(BB) {
        return this.lastAt >= BB || BB < this.lastUntil
      }
    }
    class ym {
      constructor(BB, jB) {
        this.link = BB, this.now = jB, this.hold = new dm, this.picked = null, this.notTaken = null
      }
      shown(BB) {
        const jB = this.hold.shown(BB);
        if (this.hold.takeUnmet() && this.picked) {
          var zB;
          const {
            plans: jB,
            ctrl: QB,
            at: nB
          } = this.picked;
          this.picked = null, jB.unpredict(QB), null === (zB = this.notTaken) || void 0 === zB || zB.call(this, BB, nB)
        }
        return jB
      }
      pendingFor(BB) {
        return this.hold.pendingFor(BB)
      }
      zs(BB, jB, zB) {
        BB.predictSize(jB, zB), this.picked = {
          plans: BB,
          ctrl: jB,
          at: this.now()
        };
        const QB = this.link.send(pj(jB, "plan", ...zB));
        this.hold.set(zB, new jm(QB, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class km {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Um;
        this.plans = BB, this.readInterior = jB, this.link = zB, this.now = QB, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new nm, this.throttle = void 0, this.oneShots = void 0, this.listeners = new Jm, this.redraw = null, this.releaseReserve = null, this.size = new ym(zB, QB), this.oneShots = new Nm(QB), this.throttle = new Qm((BB => this.echo(this.link.send(this.command("throttle", BB)))))
      }
      set(BB) {
        !BB.baf2RxOpen && this.raw && sm(this.raw.baf2RxAt) === sm(BB.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(BB), this.Ly(BB)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(BB) {
        this.size.notTaken = BB
      }
      resize(BB) {
        this.raw && (this.size.zs(this.plans, this.raw.baf2RxAt, BB), this.Ly(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const BB = this.raw.baf2RxAt;
        this.plans.setStarter(BB, !this.plans.showsStarter(BB)), this.Ly(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.Ly(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.Ly(this.raw)
      }
      send(BB) {
        if (this.raw) {
          for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
          this.link.send(this.command(BB, ...zB))
        }
      }
      tap(BB, jB) {
        this.raw && this.oneShots.tap(BB, function(BB, jB) {
          if ("start" === BB) return BB => 0 === (BB.baf2RxFlags & rj);
          if ("odConfirm" === BB) return BB => 0 !== (BB.baf2RxFlags & sj);
          const zB = am(jB);
          return BB => am(BB) !== zB
        }(BB, this.raw), jB) && ("start" === BB && (this.startedAt = this.now()), this.Ly(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(rj, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(BB, jB) {
        if (!this.raw) return;
        const zB = BB === rj ? this.command(jB ? "scram" : "start") : this.command("od", jB ? 1 : 0),
          QB = jB && BB === rj,
          nB = `${aj} ${this.raw.baf2RxAt.join(" ")} `,
          dB = this.echo(QB ? this.link.sendUrgent(zB, (BB => {
            const jB = BB.startsWith(nB) ? BB.slice(nB.length).split(" ")[0] : null;
            return "throttle" === jB || "start" === jB
          })) : this.link.send(zB));
        this.flags.set(BB, jB, dB), QB && this.throttle.assume(0, dB), this.Ly(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(BB) {
        this.throttle.drag(BB), this.raw && this.Ly(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.Ly(this.raw)
      }
      subscribe(BB) {
        return this.listeners.subscribe(BB)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var BB;
        this.throttle.release(), null === (BB = this.releaseReserve) || void 0 === BB || BB.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(BB) {
        for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
        return pj(this.raw.baf2RxAt, BB, ...zB)
      }
      echo(BB) {
        return new jm(BB, this.link, this.link.answerMs, this.now)
      }
      Ly(BB) {
        var jB;
        this.raw = BB;
        const zB = this.flags.shown(BB.baf2RxFlags),
          QB = {
            ...BB,
            baf2RxFlags: zB,
            baf2RxTarget: this.throttle.shown(BB.baf2RxTarget),
            baf2RxState: pm(BB, zB)
          },
          nB = this.size.shown(QB.baf2RxDims),
          dB = this.throttle.pendingFor(),
          IB = [this.throttle.pendingFor(BB.baf2RxTarget), this.flags.pendingFor(BB.baf2RxFlags), this.size.pendingFor(BB.baf2RxDims)].filter((BB => null !== BB)),
          NB = IB.length > 0 ? Math.max(...IB) : null,
          uB = this.oneShots.busyIds(),
          UB = QB.baf2RxAt;
        let aB, pB, rB = null,
          sB = [Math.max(0, nB[0] - 2), Math.max(0, nB[1] - 2), Math.max(0, nB[2] - 2)];
        if (QB.baf2RxFormed) {
          const [BB, jB, zB] = QB.baf2RxDims;
          sB = [Math.max(0, BB - 2), Math.max(0, jB - 2), Math.max(0, zB - 2)], aB = Array.from(QB.baf2RxCells, Number), pB = `${sB.join(",")}:${QB.baf2RxCells}`
        } else {
          var JB;
          const BB = null === (JB = this.plans.planAt(UB)) || void 0 === JB ? void 0 : JB.box,
            jB = BB ? wz(BB, "reactor", ...nB) : ez(UB, 1, ...nB, lz("reactor", nB[0])),
            zB = this.readInterior(jB);
          rB = nu(sB, zB), aB = zB, pB = `${sB.join(",")}:${zB.join("")}`
        }(null === (jB = this.looksOf) || void 0 === jB ? void 0 : jB.key) !== pB && (this.looksOf = {
          key: pB,
          looks: au(sB, aB)
        }), this.view = {
          status: QB,
          dims: nB,
          plan: rB,
          inner: sB,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(UB),
          odConfirmed: this.odConfirmed || 0 !== (QB.baf2RxFlags & Lj),
          guide: this.plans.guideOn(),
          throttlePending: null !== dB,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== NB && NB >= 5e3,
          busy: uB,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== NB || uB.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.Ly(this.raw)
        }), 250))
      }
    }
    class Gm {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Um;
        this.plans = BB, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new Jm, this.redraw = null, this.size = new ym(jB, zB), this.oneShots = new Nm(zB)
      }
      set(BB) {
        !BB.baf2BatOpen && this.view && sm(this.view.status.baf2BatAt) === sm(BB.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(BB), this.Ly(BB)
      }
      tap(BB, jB) {
        if (!this.view) return;
        const zB = rm(this.view.status);
        this.oneShots.tap(BB, (BB => rm(BB) !== zB), jB) && this.Ly(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(BB) {
        this.size.notTaken = BB
      }
      resize(BB) {
        this.view && (this.size.zs(this.plans, this.view.status.baf2BatAt, BB), this.Ly(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.Ly(this.view.status)
      }
      subscribe(BB) {
        return this.listeners.subscribe(BB)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      Ly(BB) {
        const jB = this.size.shown(BB.baf2BatDims),
          zB = this.oneShots.busyIds();
        this.view = {
          status: BB,
          dims: jB,
          Ep: Eu(jB, BB.baf2BatDims) ? BB.baf2BatCapacity : su(...jB),
          guide: this.plans.guideOn(),
          busy: zB
        }, this.listeners.notify(), zB.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.Ly(this.view.status)
        }), 250))
      }
    }
    const Lm = "buildAFactory2Game:";

    function gm() {
      var BB;
      const jB = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!jB) return null;
      const zB = jB.querySelector(".ExitButton");
      return function(BB, jB) {
        const zB = jB ? jB.left - 8 : BB.right;
        return {
          left: BB.left,
          top: BB.top,
          width: Math.max(0, zB - BB.left),
          height: BB.height
        }
      }(jB.getBoundingClientRect(), null !== (BB = null === zB || void 0 === zB ? void 0 : zB.getBoundingClientRect()) && void 0 !== BB ? BB : null)
    }
    const tm = (0, QB.memo)((function(BB) {
      let {
        store: jB
      } = BB;
      const {
        t: zB
      } = (0, fn.D)(), [nB, dB] = (0, QB.useState)((() => jB.get())), [IB, NB] = (0, QB.useState)((() => performance.now()));
      (0, QB.useEffect)((() => (dB(jB.get()), jB.subscribe((() => {
        dB(jB.get()), NB(performance.now())
      })))), [jB]);
      const {
        alarm: uB,
        boomAt: UB
      } = nB, aB = null !== uB && null !== uB.secs, [pB, rB] = (0, QB.useState)(null);
      (0, QB.useEffect)((() => {
        if (!aB) return;
        rB(gm());
        const BB = setInterval((() => {
          NB(performance.now()), rB(gm())
        }), 250);
        return () => {
          clearInterval(BB)
        }
      }), [aB]);
      const [sB, JB] = (0, QB.useState)(!1);
      return (0, QB.useEffect)((() => {
        if (UB === -1 / 0) return;
        JB(!0);
        const BB = setTimeout((() => {
          JB(!1)
        }), 1300);
        return () => {
          clearTimeout(BB)
        }
      }), [UB]), (0, Hd.jsxs)(Hd.Fragment, {
        children: [null !== uB && (0, Hd.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: zB(uB.hot ? `${Lm}rxAlarmSiren` : `${Lm}rxAlarmDamaged`, {
            amount: String(uB.damage)
          })
        }), null !== uB && null !== uB.secs && (0, Hd.jsx)("div", {
          className: pB ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== pB && void 0 !== pB ? pB : void 0,
          "aria-live": "assertive",
          children: zB(`${Lm}rxAlarmCountdown`, {
            amount: String((mB = uB.secs, yB = IB - uB.receivedAt, Math.max(1, Math.ceil(mB - yB / 1e3))))
          })
        }), sB && (0, Hd.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var mB, yB
    }));
    class Sm {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      hG(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const zB = BB.baf2RxAlarmAt.join(",");
        let QB = this.snapshot.boomAt;
        if (BB.baf2RxAlarmBoom) this.byReactor.delete(zB), QB = jB;
        else if (BB.baf2RxAlarmDamage <= 0) this.byReactor.delete(zB);
        else {
          var nB;
          this.byReactor.set(zB, {
            damage: BB.baf2RxAlarmDamage,
            secs: null !== (nB = BB.baf2RxAlarmSecs) && void 0 !== nB ? nB : null,
            hot: !0 === BB.baf2RxAlarmHot,
            receivedAt: jB
          })
        }
        this.Ly(QB)
      }
      retain(BB) {
        let jB = !1;
        for (const zB of [...this.byReactor.keys()]) BB.has(zB) || (this.byReactor.delete(zB), jB = !0);
        jB && this.Ly(this.snapshot.boomAt)
      }
      has(BB) {
        return this.byReactor.has(BB)
      }
      get() {
        return this.snapshot
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      Ly(BB) {
        let jB = null;
        for (const zB of this.byReactor.values())(!jB || zB.damage > jB.damage) && (jB = zB);
        this.snapshot = {
          alarm: jB,
          boomAt: BB
        };
        for (const zB of this.listeners) zB()
      }
    }
    const Mm = {
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

    function Em(BB) {
      return [BB[0], BB[1], BB[2]]
    }

    function im(BB) {
      return `${BB[0]},${BB[1]},${BB[2]}`
    }
    class qm {
      constructor(BB) {
        if (this.plans = BB, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var BB;
            return {
              active: this.glows.flatMap((BB => {
                let {
                  record: jB
                } = BB;
                return jB ? [jB] : []
              })),
              log: [...null !== (BB = this.devLog) && void 0 !== BB ? BB : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var BB;
        return null !== (BB = this.devLog) && void 0 !== BB ? BB : []
      }
      check(BB, jB, zB) {
        const QB = new Set(jB.map((BB => im(BB.box.ctrl))));
        for (const IB of function(BB, jB) {
            const zB = [],
              QB = new Map(BB);
            BB.clear();
            for (const nB of jB) {
              const jB = kJ(nB.box.ctrl),
                dB = nB.formed ? nB.level : 0;
              BB.set(jB, dB), dB > 0 && 0 === QB.get(jB) && zB.push(nB)
            }
            return zB
          }(this.levels, this.plans.all())) QB.has(im(IB.box.ctrl)) && this.show(BB, IB, "on", zB);
        const nB = this.plans.lastFormed();
        if (null === nB || nB.receivedAt <= this.flashedAt) return null;
        this.flashedAt = nB.receivedAt;
        const dB = function(BB, jB) {
          var zB;
          const QB = kJ(BB);
          return null !== (zB = jB.find((BB => kJ(BB.box.ctrl) === QB))) && void 0 !== zB ? zB : null
        }(nB.ctrl, jB);
        return dB && this.show(BB, dB, "formed", zB), dB
      }
      fade(BB, jB) {
        0 !== this.glows.length && (this.glows = this.glows.filter((zB => {
          let {
            mesh: QB,
            glow: nB,
            startMs: dB,
            record: IB
          } = zB;
          const NB = (jB - dB) / Mm[nB].ms;
          return NB >= 1 ? (BB.disposeGameMesh(QB), IB && (IB.endMs = jB), !1) : (BB.setGameMesh(QB, {
            visibility: "formed" === nB ? 1 - NB : Math.sin(Math.PI * NB)
          }), !0)
        })))
      }
      dispose(BB) {
        for (const {
            mesh: zB
          }
          of this.glows) BB.disposeGameMesh(zB);
        this.glows = [], this.levels.clear();
        const jB = "undefined" !== typeof window ? window : null;
        (null === jB || void 0 === jB ? void 0 : jB.baf2Glows) === this.devAccessor && delete jB.baf2Glows
      }
      show(BB, jB, zB, QB) {
        const {
          lo: nB,
          hi: dB
        } = Xu(jB.box);
        let IB = null;
        this.devLog && (IB = {
          glow: zB,
          ctrl: Em(jB.box.ctrl),
          lo: Em(nB),
          hi: Em(dB),
          startMs: QB,
          endMs: null
        }, this.devLog.push(IB), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(BB, zB, Zu(nB, dB, Mm[zB].thick)),
          glow: zB,
          startMs: QB,
          record: IB
        })
      }
      build(BB, jB, zB) {
        const QB = MJ(BB, zB, {
          rgb: Mm[jB].colour,
          alpha: 1
        });
        return BB.setGameMesh(QB, {
          visibility: 0
        }), QB
      }
    }
    const fm = 1 / .6,
      om = {
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
        blendMode: TN.d.Standard,
        soft: !0
      },
      Hm = {
        ...om,
        size: [.25, .4],
        count: 2
      };

    function Dm(BB) {
      return {
        colours: [BB, BB],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: TN.d.Add,
        soft: !1
      }
    }
    const Fm = Dm([150, 225, 255]),
      Ym = Dm([185, 145, 255]),
      Vm = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function hm(BB) {
      const jB = Vj[BB];
      return null === jB.fuelSlot || nz(jB) ? Vm.includes(BB) ? Ym : Fm : om
    }
    const Xm = {
        kind: "smokePuff"
      },
      Zm = [.2, .025, .2];

    function Am(BB, jB) {
      const [
        [zB, QB, nB],
        [dB, IB, NB]
      ] = BB.colours;
      return {
        texture: BB.soft ? Xm : "square_particle",
        Ep: jB,
        minLifeTime: BB.life[0] / fm,
        maxLifeTime: BB.life[1] / fm,
        minEmitPower: BB.power[0] * fm,
        maxEmitPower: BB.power[1] * fm,
        minSize: BB.size[0],
        maxSize: BB.size[1],
        emitRate: 0,
        gravity: [0, BB.lift * fm * fm, 0],
        dir1: [-BB.spread, 1, -BB.spread],
        dir2: [BB.spread, 1, BB.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [zB, QB, nB, BB.alpha],
          maxColor: [dB, IB, NB, BB.alpha]
        }, {
          timeFraction: 1,
          minColor: [zB, QB, nB, 0],
          maxColor: [dB, IB, NB, 0]
        }],
        blendMode: BB.blendMode
      }
    }
    class Tm {
      constructor(BB) {
        this.fixed = BB, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(BB, jB, zB) {
        var QB;
        if (zB === this.lastFrame) return !1;
        this.lastFrame = zB;
        const nB = this.at;
        nB[0] = jB[0] + .5, nB[1] = jB[1] + 1.025, nB[2] = jB[2] + .5;
        const dB = null !== (QB = this.fixed) && void 0 !== QB ? QB : NB() ? Hm : om;
        let IB = this.particles.get(dB);
        return IB || (IB = BB.createParticles(function(BB) {
          return Am(BB, Math.ceil(12 * BB.count * BB.life[1]) + BB.count)
        }(dB), {
          pos: nB,
          half: Zm
        }), this.particles.set(dB, IB)), IB.moveTo(nB), IB.emit(dB.count), !0
      }
      dispose() {
        for (const BB of this.particles.values()) BB.stop();
        this.particles.clear()
      }
    }
    class Pm {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(BB) {
        this.indexed = !0;
        for (const jB of fj) {
          const zB = hm(jB);
          for (let QB = 1; QB <= 4; QB++) {
            const nB = BB.blockNameToBlockId(`${jB}|meta|rot${QB}|Running`, !0);
            if (null === nB) continue;
            let dB = this.pufferIndexByStyle.get(zB);
            void 0 === dB && (dB = this.pufferList.push(new Tm(zB === om ? null : zB)) - 1, this.pufferIndexByStyle.set(zB, dB)), this.pufferIndexById[nB] = dB + 1
          }
        }
      }
      onAfterRender(BB, jB) {
        this.indexed || this.index(BB);
        const zB = performance.now(),
          QB = 0 === this.lastMs ? 0 : Math.min(zB - this.lastMs, 250) / 1e3;
        this.lastMs = zB, this.frame++, BB.particlesEnabled() ? (this.scan(BB, jB), this.puff(BB, QB)) : this.sources = []
      }
      dispose() {
        for (const BB of this.pufferList) BB.dispose();
        this.sources = [], this.found = []
      }
      scan(BB, jB) {
        0 === this.scanRow && (this.origin = [Math.floor(jB[0]) - 12, Math.floor(jB[1]) - 6, Math.floor(jB[2]) - 12]);
        const zB = Math.min(this.scanRow + 16, 325),
          [QB, nB, dB] = this.origin,
          IB = this.hits;
        IB.length = 0;
        for (let NB = this.scanRow; NB < zB; NB++) {
          const jB = QB + NB % 25,
            zB = nB + Math.floor(NB / 25);
          BB.scanBlocks(jB, zB, dB, jB + 1, zB + 1, dB + 25, this.pufferIndexById, IB)
        }
        for (let NB = 0; NB < IB.length; NB += 4) {
          const BB = IB[NB + 3];
          this.found.push({
            pos: [IB[NB], IB[NB + 1], IB[NB + 2]],
            dN: BB,
            puffer: this.pufferList[this.pufferIndexById[BB] - 1]
          })
        }
        this.scanRow = zB, 325 === zB && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(BB, jB) {
        const zB = this.sources.length;
        if (0 !== zB) {
          this.budget = Math.min(this.budget + Math.min(zB / 1.2, 12) * jB, 2);
          for (let jB = 0; jB < zB && this.budget >= 1; jB++) {
            const jB = this.sources[this.cursor % zB];
            this.cursor = (this.cursor + 1) % zB, BB.getBlockId(jB.pos[0], jB.pos[1], jB.pos[2]) === jB.dN && (jB.puffer.puff(BB, jB.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Wm = {
        ...Dm([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      em = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function lm(BB) {
      return 0 === BB.spots.length ? 0 : Math.min(1 * BB.level, 4)
    }

    function wm(BB) {
      return 0 === BB.glass.length ? 0 : Math.min(.75 * BB.level, 3)
    }

    function xm(BB) {
      return `${BB.ctrl.join(",")}:${BB.rot}:${BB.cu},${BB.cv}:${BB.w},${BB.h},${BB.d}`
    }

    function Km(BB, jB) {
      const zB = jB.w - 2,
        QB = jB.h - 2,
        nB = jB.d - 2,
        dB = [];
      for (let IB = 0; IB < zB * QB * nB; IB++) {
        const NB = IB % zB,
          uB = Math.floor(IB / zB) % nB,
          UB = Math.floor(IB / (zB * nB));
        if (NB > 0 && NB < zB - 1 && uB > 0 && uB < nB - 1 && UB > 0 && UB < QB - 1) continue;
        const aB = Rz(jB, zQ(jB, IB)),
          pB = WJ(BB, aB);
        if (null !== pB && "Fuel Rod" === Dz(pB))
          for (const jB of em) {
            const zB = [aB[0] + jB[0], aB[1] + jB[1], aB[2] + jB[2]];
            cm(BB, zB) && dB.push(bm(zB, jB))
          }
      }
      return dB
    }

    function Cm(BB, jB) {
      const {
        lo: zB,
        hi: QB
      } = Xu(jB), nB = [];
      for (let dB = zB[0]; dB < QB[0]; dB++)
        for (let jB = zB[1]; jB < QB[1]; jB++) {
          const IB = dB === zB[0] || dB === QB[0] - 1 || jB === zB[1] || jB === QB[1] - 1 ? 1 : Math.max(1, QB[2] - 1 - zB[2]);
          for (let NB = zB[2]; NB < QB[2]; NB += IB) {
            const IB = [dB, jB, NB];
            if (!cm(BB, IB)) continue;
            const uB = dB === zB[0] ? em[1] : dB === QB[0] - 1 ? em[0] : NB === zB[2] ? em[5] : NB === QB[2] - 1 ? em[4] : jB === zB[1] ? em[3] : em[2];
            nB.push(bm(IB, uB))
          }
        }
      return nB
    }

    function cm(BB, jB) {
      const zB = WJ(BB, jB);
      return null !== zB && "Reactor Glass" === Dz(zB)
    }

    function bm(BB, jB) {
      return [
        [BB[0] + .5 + .55 * jB[0], BB[1] + .5 + .55 * jB[1], BB[2] + .5 + .55 * jB[2]],
        [0 === jB[0] ? .4 : .02, 0 === jB[1] ? .4 : .02, 0 === jB[2] ? .4 : .02]
      ]
    }
    class Rm {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(BB, jB, zB, QB) {
        const nB = [],
          dB = new Set;
        for (const UB of jB) {
          var IB, NB, uB;
          const {
            box: jB
          } = UB;
          if ("reactor" !== UB.kind || UB.level <= 0 || (jB.ctrl[0] - zB[0]) ** 2 + (jB.ctrl[1] - zB[1]) ** 2 + (jB.ctrl[2] - zB[2]) ** 2 > 576) continue;
          const aB = xm(jB);
          dB.add(aB);
          let pB = this.spots.get(aB);
          if ((!pB || QB - pB.at > 3e3) && (pB = {
              at: QB,
              spots: Km(BB, jB),
              glass: Cm(BB, jB)
            }, this.spots.set(aB, pB)), 0 === pB.spots.length && 0 === pB.glass.length) continue;
          const rB = this.sparking.find((BB => BB.key === aB));
          nB.push({
            key: aB,
            level: UB.level,
            spots: pB.spots,
            glass: pB.glass,
            budget: null !== (IB = null === rB || void 0 === rB ? void 0 : rB.budget) && void 0 !== IB ? IB : 0,
            cursor: null !== (NB = null === rB || void 0 === rB ? void 0 : rB.cursor) && void 0 !== NB ? NB : 0,
            glassBudget: null !== (uB = null === rB || void 0 === rB ? void 0 : rB.glassBudget) && void 0 !== uB ? uB : 0
          })
        }
        for (const UB of this.spots.keys()) dB.has(UB) || this.spots.delete(UB);
        this.sparking = nB
      }
      emit(BB, jB, zB) {
        var QB;
        if (0 === this.sparking.length || !BB.particlesEnabled() || zB === this.lastFrame) return;
        this.lastFrame = zB;
        let nB = 0,
          dB = 0;
        for (const JB of this.sparking) nB += lm(JB), dB += wm(JB);
        const IB = nB > 8 ? 8 / nB : 1,
          NB = dB > 6 ? 6 / dB : 1;
        let uB, UB = null,
          aB = null;
        for (const JB of this.sparking) JB.budget = Math.min(JB.budget + lm(JB) * IB * jB, 2), JB.budget >= 1 && (!UB || JB.budget > UB.budget) && (UB = JB), JB.glassBudget = Math.min(JB.glassBudget + wm(JB) * NB * jB, 2), JB.glassBudget >= 1 && (!aB || JB.glassBudget > aB.glassBudget) && (aB = JB);
        if (UB) UB.budget--, uB = UB.spots[UB.cursor++ % UB.spots.length];
        else {
          if (!aB) return;
          aB.glassBudget--, uB = aB.glass[Math.floor(Math.random() * aB.glass.length)]
        }
        const [pB, rB] = uB, sB = null !== (QB = this.emitter) && void 0 !== QB ? QB : this.create(BB, pB, rB);
        sB.moveTo(pB, rB), sB.emit(Wm.count)
      }
      dispose() {
        var BB;
        null === (BB = this.emitter) || void 0 === BB || BB.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(BB, jB, zB) {
        const QB = Math.ceil(14 * Wm.count * Wm.life[1]) + Wm.count;
        return this.emitter = BB.createParticles(Am(Wm, QB), {
          pos: jB,
          half: zB
        }), this.emitter
      }
    }
    const Om = [2, 3.2],
      By = 1 / 3,
      jy = 1 / .6,
      zy = {
        texture: Xm,
        Ep: Math.ceil(18 * Om[1]) + 4,
        minLifeTime: Om[0] / jy,
        maxLifeTime: Om[1] / jy,
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
        blendMode: TN.d.Standard
      };
    class Qy {
      constructor(BB) {
        this.plans = BB, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new Rm, this.frame = 0, this.outline = new qm(BB)
      }
      onAfterRender(BB, jB, zB) {
        const QB = performance.now(),
          nB = 0 === this.lastMs ? 0 : Math.min(QB - this.lastMs, 250) / 1e3;
        if (this.lastMs = QB, this.outline.fade(BB, QB), this.puff(BB, nB, zB), this.sparks.emit(BB, nB, this.frame++), QB - this.lastCheckMs < 150) return;
        this.lastCheckMs = QB;
        const dB = this.plans.all().filter((BB => BB.formed && ny(BB.box.ctrl, zB) <= 4096));
        this.plumes = dB.filter((BB => "reactor" === BB.kind && BB.level > 0)).map((BB => ({
          box: BB.box,
          level: BB.level
        }))), this.updateHums(BB, jB, dB, zB), this.sparks.update(BB, dB, zB, QB), this.chimeFormed(BB, jB, dB, QB)
      }
      dispose(BB) {
        var jB;
        this.outline.dispose(BB), null === (jB = this.steam) || void 0 === jB || jB.dispose(), this.steam = null, this.sparks.dispose();
        for (const zB of this.hums.values()) zB.stop();
        this.hums.clear()
      }
      chimeFormed(BB, jB, zB, QB) {
        const nB = this.outline.check(BB, zB, QB);
        nB && BB.playSound(jB, "exp_levelup", .6, 1, {
          nB: [nB.box.ctrl[0] + .5, nB.box.ctrl[1], nB.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(BB, jB, zB) {
        const QB = this.plumes;
        if (0 === QB.length || !BB.particlesEnabled()) return void(this.plumeBudget = 0);
        const nB = QB.reduce(((BB, jB) => BB + 3 * jB.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + nB * jB, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let dB = this.plumeCursor % (nB / 3);
        this.plumeCursor++;
        let IB = QB[0];
        for (const pB of QB) {
          if (dB < pB.level) {
            IB = pB;
            break
          }
          dB -= pB.level
        }
        const {
          lo: NB,
          hi: uB
        } = Xu(IB.box);
        if (function(BB, jB, zB) {
            const QB = Math.max(BB[0] - zB[0], 0, zB[0] - jB[0]),
              nB = Math.max(BB[2] - zB[2], 0, zB[2] - jB[2]);
            return Math.hypot(QB, zB[1] - jB[1], nB)
          }(NB, uB, zB) < 6 && Math.random() > By) return;
        const UB = [(NB[0] + uB[0]) / 2, uB[1] + .05, (NB[2] + uB[2]) / 2],
          aB = [(uB[0] - NB[0]) / 2 - .5, .05, (uB[2] - NB[2]) / 2 - .5];
        this.steam ??= BB.createParticles(zy, {
          pos: UB,
          half: aB
        }), this.steam.moveTo(UB, aB), this.steam.emit(1)
      }
      updateHums(BB, jB, zB, QB) {
        const nB = new Map;
        for (const IB of zB) "reactor" === IB.kind && IB.level > 0 && ny(IB.box.ctrl, QB) <= 576 && nB.set(`${dB=IB.box.ctrl,`${dB[0]},${dB[1]},${dB[2]}`}:${IB.level}`, IB);
        var dB;
        for (const [IB, NB] of this.hums) nB.has(IB) || (NB.stop(), this.hums.delete(IB));
        for (const [IB, NB] of nB) {
          if (this.hums.has(IB)) continue;
          const {
            lo: zB,
            hi: QB
          } = Xu(NB.box), nB = [(zB[0] + QB[0]) / 2, zB[1], (zB[2] + QB[2]) / 2], dB = BB.playSound(jB, "rocketEngineLoop", .08 + .06 * NB.level, .55, {
            nB: nB,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          dB && this.hums.set(IB, dB)
        }
      }
    }

    function ny(BB, jB) {
      return (BB[0] - jB[0]) ** 2 + (BB[1] - jB[1]) ** 2 + (BB[2] - jB[2]) ** 2
    }
    class dy {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      hG(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const QB = [BB.baf2BombAt[0], BB.baf2BombAt[1], BB.baf2BombAt[2]],
          nB = BB.baf2BombR;
        if (BB.baf2BombBoom) {
          const BB = Math.hypot(jB[0] - QB[0], jB[1] - QB[1], jB[2] - QB[2]);
          this.Ly({
            fuse: null,
            blast: {
              at: QB,
              r: nB,
              receivedAt: zB,
              distance: BB,
              flash: BB <= 3 * nB
            }
          })
        } else this.Ly({
          ...this.snapshot,
          fuse: BB.baf2BombMs > 0 ? {
            at: QB,
            r: nB,
            endsAt: zB + BB.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      Ly(BB) {
        this.snapshot = BB;
        for (const jB of this.listeners) jB()
      }
    }
    const Iy = (0, QB.memo)((function(BB) {
      var jB;
      let {
        store: zB
      } = BB;
      const {
        t: nB
      } = (0, fn.D)(), [dB, IB] = (0, QB.useState)((() => zB.get())), [NB, uB] = (0, QB.useState)((() => performance.now()));
      (0, QB.useEffect)((() => (IB(zB.get()), zB.subscribe((() => {
        IB(zB.get()), uB(performance.now())
      })))), [zB]);
      const {
        fuse: UB,
        blast: aB
      } = dB;
      (0, QB.useEffect)((() => {
        if (!UB) return;
        const BB = setInterval((() => {
          uB(performance.now())
        }), 250);
        return () => {
          clearInterval(BB)
        }
      }), [UB]);
      const [pB, rB] = (0, QB.useState)(!1);
      (0, QB.useEffect)((() => {
        if (null === aB || void 0 === aB || !aB.flash) return;
        rB(!0);
        const BB = setTimeout((() => {
          rB(!1)
        }), 2500);
        return () => {
          clearTimeout(BB)
        }
      }), [aB]);
      const sB = UB ? function(BB, jB) {
        return BB.endsAt <= jB ? 0 : Math.ceil((BB.endsAt - jB) / 1e3)
      }(UB, NB) : 0;
      return (0, Hd.jsxs)(Hd.Fragment, {
        children: [sB > 0 && (0, Hd.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: nB("buildAFactory2Game:bombCountdown", {
            amount: String(sB),
            radius: String(null !== (jB = null === UB || void 0 === UB ? void 0 : UB.r) && void 0 !== jB ? jB : 0)
          })
        }), pB && (0, Hd.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Ny(BB) {
      const jB = Math.min(4, Math.max(1, BB / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * BB / 4)),
        capSpread: Math.min(5 * BB / 8, 24 * jB),
        capThick: 6 * jB,
        stemHalfWidth: 3 * jB,
        puffScale: jB
      }
    }
    class uy {
      constructor() {
        this.DN = !1
      }
      hold(BB) {
        BB.getCameraFar() < 1e3 && (BB.setCameraFar(1e3), this.DN = !0)
      }
      release(BB) {
        this.DN && (this.DN = !1, BB.setCameraFar(null))
      }
    }
    const Uy = 1 / .6,
      ay = [.2, .1, .2],
      py = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      ry = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: TN.d.Standard,
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
      sy = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: TN.d.Standard,
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
      Jy = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: TN.d.Standard,
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
      my = {
        texture: Xm,
        Ep: Math.ceil(120) + 4,
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
        blendMode: TN.d.Add
      };
    class yy {
      constructor(BB) {
        this.store = BB, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new uy, this.timers = []
      }
      onAfterRender(BB, jB) {
        const zB = performance.now(),
          QB = 0 === this.lastMs ? 0 : Math.min(zB - this.lastMs, 250) / 1e3;
        this.lastMs = zB;
        const {
          fuse: nB,
          blast: dB
        } = this.store.get();
        null !== dB && dB !== this.shownBlast && (this.shownBlast = dB, this.startBlast(BB, jB, dB, zB));
        const IB = BB.particlesEnabled();
        null !== nB && nB.endsAt > zB && IB ? this.emitBeacon(BB, nB, QB, zB) : this.beaconBudget = 0, null !== this.cloud && (zB - this.cloud.startMs > 33e3 ? this.disposeCloud(BB) : (this.far.hold(BB), IB && this.emitCloud(BB, QB, zB)))
      }
      dispose(BB) {
        var jB;
        null === (jB = this.beacon) || void 0 === jB || jB.dispose(), this.beacon = null, this.disposeCloud(BB);
        for (const zB of this.timers) clearTimeout(zB);
        this.timers.length = 0
      }
      emitBeacon(BB, jB, zB, QB) {
        const nB = jB.endsAt - QB < 5e3 ? 350 : 1e3,
          dB = .5 + .5 * Math.sin(2 * Math.PI * QB / nB);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * dB * zB, 4), this.beaconBudget < 1) return;
        const IB = Math.floor(this.beaconBudget);
        this.beaconBudget -= IB;
        const [NB, uB, UB] = jB.at, aB = [NB + .5, uB + 1.1, UB + .5];
        this.beacon ??= BB.createParticles(my, {
          pos: aB,
          half: ay
        }), this.beacon.moveTo(aB), this.beacon.emit(IB)
      }
      startBlast(BB, jB, zB, QB) {
        var nB;
        null === (nB = this.beacon) || void 0 === nB || nB.dispose(), this.beacon = null, this.disposeCloud(BB);
        const dB = (0, ZN.isMobile)() ? .5 : 1;
        this.streams = [ry, sy, Jy].map((BB => {
          const jB = Math.round(BB.count * dB);
          return {
            spec: BB,
            particles: null,
            rate: jB / ((BB.toMs - BB.fromMs) / 1e3),
            budget: 0,
            left: jB
          }
        })), this.cloud = {
          blast: zB,
          startMs: QB
        };
        const IB = Math.max(.25, 1 - zB.distance / (6 * zB.r)),
          NB = zB.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [zB, QB, nB] of py) Gy(BB, jB, zB, IB * QB, nB)
        }), NB))
      }
      emitCloud(BB, jB, zB) {
        const {
          blast: QB,
          startMs: nB
        } = this.cloud, dB = zB - nB, [IB, NB, uB] = QB.at, UB = Ny(QB.r);
        for (const aB of this.streams) {
          const {
            spec: zB
          } = aB;
          if (aB.left <= 0 || dB < zB.fromMs) continue;
          aB.budget += aB.rate * jB;
          const nB = Math.min(Math.floor(aB.budget), aB.left);
          if (nB < 1) continue;
          aB.budget -= nB, aB.left -= nB;
          const pB = aB.particles ??= this.createStream(BB, zB, QB);
          if (zB === ry) {
            const BB = UB.stemHalfWidth;
            pB.moveTo([IB, NB + 1, uB], [BB, 1, BB])
          } else if (zB === sy) {
            const BB = UB.capSpread * Math.min(1, (dB - zB.fromMs) / 3e3),
              jB = Math.sqrt(Math.random()),
              QB = 2 * Math.random() * Math.PI,
              nB = Math.cos(QB) * jB,
              aB = Math.sin(QB) * jB,
              rB = IB + nB * BB,
              sB = uB + aB * BB,
              JB = UB.capThick,
              mB = NB + UB.capHeight + JB * (1 - jB * jB) * 2;
            pB.setDirections([.7 * nB, .05, .7 * aB], [nB, .2, aB]), pB.moveTo([rB, mB, sB], [JB, JB, JB])
          } else {
            this.ringAngle += 2.39996;
            const BB = Math.cos(this.ringAngle),
              jB = Math.sin(this.ringAngle);
            pB.setDirections([BB, .05, jB], [BB, .1, jB]), pB.moveTo([IB + 2 * BB, NB + .5, uB + 2 * jB], [0, .5, 0])
          }
          pB.emit(nB)
        }
      }
      createStream(BB, jB, zB) {
        const {
          r: QB
        } = zB, nB = Math.max(jB.life[0], QB / 25), dB = jB === Jy ? [.9 * nB, nB] : jB.life, IB = Ny(QB), NB = jB === Jy ? 1 : IB.puffScale, uB = {
          texture: Xm,
          Ep: jB.count + 4,
          minLifeTime: dB[0] / Uy,
          maxLifeTime: dB[1] / Uy,
          minSize: jB.size[0] * NB,
          maxSize: jB.size[1] * NB,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, jB.gravity * Uy * Uy, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: jB.from[0],
            maxColor: jB.from[1]
          }, {
            timeFraction: .6,
            minColor: ky(jB.from[0], jB.to[0]),
            maxColor: ky(jB.from[1], jB.to[1])
          }, {
            timeFraction: 1,
            minColor: jB.to[0],
            maxColor: jB.to[1]
          }],
          blendMode: jB.blend
        };
        if (jB === ry) {
          const BB = IB.capHeight / ((dB[0] + dB[1]) / 2);
          uB.minEmitPower = .9 * BB * Uy, uB.maxEmitPower = 1.05 * BB * Uy, uB.dir1 = [-.1, 1, -.1], uB.dir2 = [.1, 1, .1]
        } else jB === sy ? (uB.minEmitPower = 1.2, uB.maxEmitPower = 2, uB.dir1 = [-1, .05, -1], uB.dir2 = [1, .2, 1]) : (uB.minEmitPower = 39.583333333333336, uB.maxEmitPower = 41.66666666666667, uB.dir1 = [1, 0, 0], uB.dir2 = [1, 0, 0]);
        return BB.createParticles(uB, {
          pos: zB.at
        })
      }
      disposeCloud(BB) {
        for (const zB of this.streams) {
          var jB;
          null === (jB = zB.particles) || void 0 === jB || jB.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(BB)
      }
    }

    function ky(BB, jB) {
      return [(BB[0] + jB[0]) / 2, (BB[1] + jB[1]) / 2, (BB[2] + jB[2]) / 2, .75 * BB[3]]
    }

    function Gy(BB, jB, zB, QB, nB) {
      try {
        BB.playSound(jB, zB, QB, nB)
      } catch (dB) {
        console.error(dB)
      }
    }
    const Ly = {
        Ep: 720,
        perS: 100
      },
      gy = {
        Ep: 320,
        perS: 44
      };
    class ty {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(BB, jB) {
        this.zone = {
          centre: [...BB.centre],
          r: BB.r,
          band: BB.band ? [BB.band[0], BB.band[1]] : void 0
        }, this.endsAt = jB
      }
      stop() {
        this.zone = null
      }
      hG(BB, jB) {
        const {
          baf2FalloutMs: zB,
          baf2FalloutAt: QB,
          baf2FalloutR: nB,
          baf2FalloutY: dB
        } = BB;
        zB > 0 && QB && void 0 !== nB ? this.start({
          centre: QB,
          r: nB,
          band: dB
        }, jB + zB) : this.stop()
      }
      perS(BB, jB, zB) {
        const QB = this.zone;
        if (!QB) return 0;
        const nB = this.endsAt - BB;
        return nB <= 0 ? (this.zone = null, 0) : QB.band && (jB[1] < QB.band[0] || jB[1] > QB.band[1]) || Math.hypot(jB[0] - QB.centre[0], jB[2] - QB.centre[2]) > QB.r ? 0 : zB.perS * Math.min(1, nB / 5e3)
      }
    }
    const Sy = [5, 7],
      My = [24, 8, 24],
      Ey = .5,
      iy = 1 / .6,
      qy = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class fy {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ZN.isMobile)();
        this.state = new ty, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(BB) {
          return BB ? gy : Ly
        }(BB)
      }
      startFallout(BB, jB) {
        this.state.start(BB, jB)
      }
      stopFallout() {
        this.state.stop()
      }
      hG(BB) {
        this.state.hG(BB, performance.now())
      }
      onAfterRender(BB, jB) {
        var zB;
        const QB = performance.now(),
          nB = 0 === this.lastMs ? 0 : Math.min(QB - this.lastMs, 250) / 1e3;
        this.lastMs = QB;
        const dB = this.state.perS(QB, jB, this.tier);
        if (dB <= 0 || !BB.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + dB * nB, dB / 4);
        const IB = Math.floor(this.budget);
        if (IB < 1) return;
        this.budget -= IB;
        const NB = this.at;
        NB[0] = jB[0], NB[1] = jB[1] + 12, NB[2] = jB[2];
        const uB = null !== (zB = this.systems) && void 0 !== zB ? zB : this.create(BB, NB),
          UB = this.amounts;
        UB[0] = 0, UB[1] = 0;
        for (let aB = 0; aB < IB; aB++) UB[Math.random() < .3 ? 1 : 0]++;
        for (let aB = 0; aB < uB.length; aB++) UB[aB] > 0 && (uB[aB].moveTo(NB, My), uB[aB].emit(UB[aB]))
      }
      dispose() {
        for (const jB of null !== (BB = this.systems) && void 0 !== BB ? BB : []) {
          var BB;
          jB.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(BB, jB) {
        return this.systems = qy.map((zB => {
          let {
            rgba: [QB, nB, dB, IB],
            share: NB
          } = zB;
          const uB = {
            texture: "square_particle",
            Ep: Math.ceil(this.tier.Ep * NB),
            minLifeTime: Sy[0] / iy,
            maxLifeTime: Sy[1] / iy,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Ey, -1, Ey],
            colorGradients: [{
              timeFraction: 0,
              minColor: [QB, nB, dB, 0]
            }, {
              timeFraction: .15,
              minColor: [QB, nB, dB, IB]
            }, {
              timeFraction: .8,
              minColor: [QB, nB, dB, IB]
            }, {
              timeFraction: 1,
              minColor: [QB, nB, dB, 0]
            }],
            blendMode: TN.d.Standard
          };
          return BB.createParticles(uB, {
            pos: jB,
            half: My
          })
        })), this.systems
      }
    }
    const oy = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Hy(BB) {
      const jB = /\|rot(\d)/.exec(BB);
      return oy[jB ? Number(jB[1]) : 1]
    }
    var Dy = zB(652),
      Fy = zB(38554);
    const Yy = new Set(Dy.p);

    function Vy(BB) {
      if (-2 !== BB.count) return null;
      const jB = lB(BB.item);
      return null !== jB && Yy.has(jB) ? jB : null
    }

    function hy(BB) {
      const {
        width: jB,
        height: zB
      } = (0, Fy.c)(BB).hitBoxDimensions;
      return .55 / Math.max(jB, zB)
    }

    function Xy(BB, jB, zB) {
      if (!zB) return !1;
      const QB = BB[0] + .5 - jB[0],
        nB = BB[1] + .5 - jB[1],
        dB = BB[2] + .5 - jB[2];
      return QB * QB + nB * nB + dB * dB <= 576
    }

    function Zy(BB, jB) {
      return Math.atan2(BB[0], BB[2]) + Math.PI + jB
    }

    function Ay(BB, jB) {
      const zB = 2 * Math.PI;
      return (BB + zB * jB / 1e4) % zB
    }
    class Ty {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = BB, this.now = jB, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = BB.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(BB, jB) {
        if (0 === this.farms.size) return;
        const zB = this.now(),
          QB = Number.isNaN(this.frameMs) ? 0 : Math.min(zB - this.frameMs, 100);
        this.frameMs = zB, zB - this.checkedMs >= 1e3 && (this.checkedMs = zB, this.check(BB, jB));
        for (const nB of this.farms.values()) nB.shown && nB.running && null !== nB.model && QB > 0 && (nB.spin = Ay(nB.spin, QB), nB.model.setPose(nB.feet, Zy(nB.front, nB.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const BB of this.farms.values()) this.drop(BB);
        this.farms.clear()
      }
      sync() {
        const BB = new Set;
        for (const jB of this.labels.list()) {
          const zB = Vy(jB);
          if (null === zB) continue;
          BB.add(jB.key);
          const QB = this.farms.get(jB.key);
          if ((null === QB || void 0 === QB ? void 0 : QB.mob) === zB) continue;
          QB && this.drop(QB);
          const [nB, dB, IB] = jB.pos;
          this.farms.set(jB.key, {
            pos: jB.pos,
            feet: [nB + .5, dB + 1, IB + .5],
            mob: zB,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [jB, zB] of this.farms) BB.has(jB) || (this.drop(zB), this.farms.delete(jB));
        this.checkedMs = -1 / 0
      }
      check(BB, jB) {
        for (const zB of this.farms.values()) {
          const [QB, nB, dB] = zB.pos, IB = WJ(BB, zB.pos);
          null !== IB && Dz(IB) === hB && Xy(zB.pos, jB, "Air" === WJ(BB, [QB, nB + 1, dB])) ? (zB.running = IB.endsWith("|Running"), zB.front = Hy(IB), null === zB.model && (zB.model = BB.createMobModel(zB.mob, hy(zB.mob)), null === zB.model) || (zB.model.setPose(zB.feet, Zy(zB.front, zB.spin)), zB.shown || (zB.model.setVisible(!0), zB.shown = !0))) : (zB.shown && null !== zB.model && zB.model.setVisible(!1), zB.shown = !1)
        }
      }
      drop(BB) {
        var jB;
        null === (jB = BB.model) || void 0 === jB || jB.dispose(), BB.model = null, BB.shown = !1
      }
    }
    class Py {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(BB) {
        var jB;
        this.island = BB.baf2ColIsland, this.islandSite = (jB = BB.baf2ColSite) && 8 === jB.length ? {
          spawnXZ: [jB[0], jB[1]],
          coreXZ: [jB[2], jB[3]],
          minXZ: [jB[4], jB[5]],
          maxXZ: [jB[6], jB[7]]
        } : null, this.views = BB.baf2ColList.map((BB => ({
          entry: In(BB)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(BB) {
        this.status = BB, this.emit()
      }
      onOpen(BB) {
        this.openHeld = BB
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
        return this.views.map((BB => BB.entry))
      }
      entryAtRoot(BB) {
        var jB;
        return null === (jB = this.views.find((jB => {
          let {
            entry: zB
          } = jB;
          return zB.focus[0] === BB[0] && zB.focus[1] === BB[1] + 1 && zB.focus[2] === BB[2]
        }))) || void 0 === jB ? void 0 : jB.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(BB, jB) {
        return lu(this.entries(), BB, jB)
      }
      lookSource() {
        return {
          handles: BB => rQ(BB) >= 0 || sQ(BB),
          line: (BB, jB) => this.lookLine(BB, jB),
          version: () => this.beamsVersion
        }
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const BB of this.listeners) BB()
      }
    }
    const Wy = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((BB => BB / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((BB => [BB, BB + 1, BB + 2, BB, BB + 2, BB + 3]))
    };

    function ey(BB, jB, zB, QB, nB, dB, IB) {
      let NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const uB = Math.cos(NB),
        UB = Math.sin(NB),
        aB = BB.positions.length / 3,
        {
          positions: pB,
          indices: rB
        } = Wy;
      for (let sB = 0; sB < pB.length; sB += 3) {
        const NB = pB[sB] * nB,
          aB = pB[sB + 2] * IB;
        BB.positions.push(jB + NB * uB + aB * UB, zB + pB[sB + 1] * dB, QB - NB * UB + aB * uB)
      }
      for (const sB of rB) BB.indices.push(aB + sB)
    }

    function ly(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return jB < 1 ? {
        rgb: BB,
        alpha: jB
      } : {
        rgb: BB,
        alpha: 1,
        opaque: !0
      }
    }
    class wy {
      constructor(BB, jB) {
        this.style = BB, this.perSource = jB, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(BB) {
        this.sources = BB, 0 === BB.length && (this.budget = 0)
      }
      vp(BB, jB, zB) {
        const QB = this.sources.length;
        if (0 !== QB) {
          var nB, dB;
          this.budget = Math.min(this.budget + (nB = QB, dB = this.perSource, Math.min(nB * dB, nU) * jB), 2);
          for (let jB = 0; jB < QB && this.budget >= 1; jB++) {
            const jB = this.sources[this.cursor % QB];
            this.cursor = (this.cursor + 1) % QB;
            if (!(Math.max(Math.abs(jB.x - zB[0]), Math.abs(jB.y - zB[1]), Math.abs(jB.z - zB[2])) > 32)) return this.puff(BB, jB), void this.budget--
          }
        }
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.dispose(), this.particles = null, this.sources = []
      }
      puff(BB, jB) {
        let {
          x: zB,
          y: QB,
          z: nB,
          h: dB,
          faces: IB
        } = jB;
        const NB = function(BB, jB, zB, QB, nB) {
            const [dB, IB, NB] = nB[Math.floor(Math.random() * nB.length)], uB = .04, UB = (BB, jB, zB) => BB > 0 ? jB + zB + uB : BB < 0 ? jB - uB : jB + .1, aB = (BB, jB, zB) => BB > 0 ? jB + zB + uB : BB < 0 ? jB - uB : jB + zB - .1, pB = [UB(dB, BB, 1), UB(IB, jB, QB), UB(NB, zB, 1)], rB = [aB(dB, BB, 1), aB(IB, jB, QB), aB(NB, zB, 1)];
            return {
              pos: [(pB[0] + rB[0]) / 2, (pB[1] + rB[1]) / 2, (pB[2] + rB[2]) / 2],
              half: [(rB[0] - pB[0]) / 2, (rB[1] - pB[1]) / 2, (rB[2] - pB[2]) / 2],
              out: [dB, IB, NB]
            }
          }(zB, QB, nB, dB, IB),
          {
            style: uB
          } = this,
          UB = this.particles ??= BB.createParticles(Am(uB, Math.ceil(uB.count * nU * uB.life[1]) + 4), NB);
        UB.moveTo(NB.pos, NB.half);
        const [aB, pB, rB] = NB.out, sB = uB.spread;
        UB.setDirections([aB - sB, .6 + pB, rB - sB], [aB + sB, 1 + pB, rB + sB]), UB.emit(uB.count)
      }
    }
    const xy = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Ky {
      constructor() {
        this.green = new wy(IU.green, zU), this.pink = new wy(IU.pink, QU), this.colliders = [], this.lastMs = 0
      }
      setSources(BB) {
        this.colliders = BB;
        const jB = [],
          zB = [];
        for (const QB of BB) {
          const [BB, nB, dB] = QB.focus;
          jB.push({
            x: BB,
            y: nB - 1,
            z: dB,
            h: 2,
            faces: xy
          });
          for (let jB = 0; jB < 4; jB++) {
            if (!QB.live[jB]) continue;
            const [BB, nB, dB] = yQ(QB.focus, jB, IQ.LASER_D), [IB, , NB] = mQ[jB], uB = xy.filter((BB => BB[0] !== IB || BB[2] !== NB || 0 !== BB[1]));
            zB.push({
              x: BB,
              y: nB,
              z: dB,
              h: 1,
              faces: uB
            })
          }
        }
        this.green.setSources(jB), this.pink.setSources(zB)
      }
      onAfterRender(BB) {
        const jB = performance.now(),
          zB = 0 === this.lastMs ? 0 : Math.min(jB - this.lastMs, 250) / 1e3;
        if (this.lastMs = jB, 0 === this.colliders.length || !BB.particlesEnabled()) return;
        const QB = BB.getCameraPosition();
        this.green.vp(BB, zB, QB), this.pink.vp(BB, zB, QB)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Cy = 1.04,
      cy = ly([1, 120 / 255, 220 / 255]),
      by = ly([1, .25, .25], .35);
    class vy {
      constructor(BB) {
        this.store = BB, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Ky
      }
      onAfterRender(BB) {
        this.store.version() !== this.builtVersion && this.rebuild(BB);
        const jB = performance.now();
        for (const zB of this.beams) {
          const QB = 1 + .35 * Math.sin(jB / 700 * Math.PI * 2 + zB.phase);
          BB.setGameMesh(zB.mesh, {
            scale: [zB.alongX ? 1 : QB, QB, zB.alongX ? QB : 1]
          })
        }
        this.glow.onAfterRender(BB)
      }
      dispose(BB) {
        this.clear(BB), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(BB) {
        this.clear(BB), this.builtVersion = this.store.version();
        const jB = [];
        for (const {
            entry: zB
          }
          of this.store.colliders()) zB.on && zB.live.some(Boolean) && (this.addBeams(BB, zB), jB.push(zB)), zB.blockers.length > 0 && this.addMarkers(BB, zB);
        this.glow.setSources(jB)
      }
      addBeams(BB, jB) {
        const [zB, QB, nB] = jB.focus, dB = jU - .25, IB = (.25 + jU) / 2;
        for (let NB = 0; NB < 4; NB++) {
          if (!jB.live[NB]) continue;
          const [uB, , UB] = mQ[NB], aB = 0 !== uB, pB = {
            positions: [],
            indices: []
          };
          ey(pB, 0, 0, 0, aB ? dB : .2, .2, aB ? .2 : dB);
          const rB = [zB + .5 + uB * IB, QB + .5, nB + .5 + UB * IB],
            sB = BB.createGameMesh(pB, cy, rB);
          this.meshes.push(sB), this.beams.push({
            mesh: sB,
            alongX: aB,
            phase: NB * Math.PI / 2
          })
        }
      }
      addMarkers(BB, jB) {
        const zB = jB.blockers[0],
          QB = {
            positions: [],
            indices: []
          };
        for (const [nB, dB, IB] of jB.blockers) ey(QB, nB - zB[0] + .5, dB - zB[1] + .5, IB - zB[2] + .5, Cy, Cy, Cy);
        this.meshes.push(BB.createGameMesh(QB, by, zB))
      }
      clear(BB) {
        for (const jB of this.meshes) BB.disposeGameMesh(jB);
        this.meshes = [], this.beams = []
      }
    }
    const Ry = [.56, .83, 1],
      Oy = [1, .73, .08],
      Bk = [1, .25, .25],
      jk = [.85, .85, .85],
      zk = [.3, .45, .6];

    function Qk(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const IB = nB / 2,
        NB = nB + dB;
      for (const uB of [-IB, IB])
        for (const nB of [-IB, IB]) ey(BB, jB, zB + uB, QB + nB, NB, dB, dB), ey(BB, jB + uB, zB, QB + nB, dB, NB, dB), ey(BB, jB + uB, zB + nB, QB, dB, dB, NB)
    }

    function nk(BB) {
      return jB => BB.isBlockInLoadedChunk(jB[0], jB[1], jB[2]) && 0 === BB.getBlockId(jB[0], jB[1], jB[2])
    }

    function dk(BB) {
      return BB.map((BB => {
        let {
          free: jB,
          blocked: zB,
          gaps: QB,
          supports: nB
        } = BB;
        return `${jB.join(";")}|${zB.join(";")}|${QB.join(";")}|${nB.join(";")}`
      })).join("/")
    }

    function Ik(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const dB = jB[0],
        IB = {
          positions: [],
          indices: []
        };
      for (const [NB, uB, UB] of jB) Qk(IB, NB - dB[0] + .5, uB - dB[1] + .5, UB - dB[2] + .5, QB, nB);
      return BB.createGameMesh(IB, zB, dB)
    }
    class Nk {
      constructor(BB) {
        this.store = BB, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(BB, jB, zB) {
        var QB;
        const nB = null === (QB = BB.ZjB(jB)) || void 0 === QB ? void 0 : QB.name;
        if (nB !== uQ && nB !== NQ) return void("" !== this.shownKey && this.show(BB, "", []));
        const dB = performance.now();
        if (dB - this.lastCheckMs >= 200 && (this.lastCheckMs = dB, nB === uQ ? this.check(BB, zB) : this.preview(BB, zB)), this.pulses.length > 0) {
          const jB = 1 + .12 * Math.sin(dB / 1e3 * 1.25 * Math.PI * 2),
            zB = [jB, jB, jB];
          for (const QB of this.pulses) BB.setGameMesh(QB, {
            scale: zB
          })
        }
      }
      dispose(BB) {
        this.clear(BB), this.shownKey = ""
      }
      check(BB, jB) {
        const zB = nk(BB),
          QB = [];
        for (const {
            entry: dB
          }
          of this.store.colliders()) {
          dB.focus.every(((BB, zB) => Math.abs(BB + .5 - jB[zB]) <= IQ.GHOST_REACH)) && QB.push(BU(dB, zB))
        }
        const nB = dk(QB);
        nB !== this.shownKey && this.show(BB, nB, QB)
      }
      preview(BB, jB) {
        const zB = BB.getTargetedBlock(),
          QB = zB ? [zB.By[0], zB.By[1], zB.By[2]] : null,
          nB = null !== QB && QB.every(((BB, zB) => Math.abs(BB + .5 - jB[zB]) <= 8)),
          dB = this.store.site(),
          IB = nB && dB ? function(BB, jB, zB) {
            const QB = JQ(BB);
            if (!QB.every(jB)) return null;
            const nB = LQ(BB, zB);
            return {
              column: QB,
              spots: BU({
                focus: QB[1],
                lasers: [!1, !1, !1, !1],
                open: nB,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, jB),
              fits: nB.filter(Boolean).length >= IQ.MIN_SPOTS
            }
          }(QB, nk(BB), dB) : null,
          NB = IB ? [IB.spots] : [],
          uB = IB ? `preview ${QB.join(",")}|${IB.fits}|${dk(NB)}` : "";
        var UB, aB;
        uB !== this.shownKey && this.show(BB, uB, NB, null !== (UB = null === IB || void 0 === IB ? void 0 : IB.column) && void 0 !== UB ? UB : [], null === (aB = null === IB || void 0 === IB ? void 0 : IB.fits) || void 0 === aB || aB)
      }
      show(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          nB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(BB), this.shownKey = jB, QB.length > 0 && this.meshes.push(Ik(BB, QB, ly(nB ? jk : Bk)));
        for (const {
            free: dB,
            blocked: IB,
            gaps: NB,
            supports: uB
          }
          of zB) {
          for (const [jB, zB, QB] of dB) {
            const nB = {
              positions: [],
              indices: []
            };
            Qk(nB, 0, 0, 0);
            const dB = BB.createGameMesh(nB, ly(Ry), [jB + .5, zB + .5, QB + .5]);
            this.meshes.push(dB), this.pulses.push(dB)
          }
          IB.length > 0 && this.meshes.push(Ik(BB, IB, ly(Oy))), NB.length > 0 && this.meshes.push(Ik(BB, NB, ly(Bk), 1.06, .07)), uB.length > 0 && this.meshes.push(Ik(BB, uB, ly(zk)))
        }
      }
      clear(BB) {
        for (const jB of this.meshes) BB.disposeGameMesh(jB);
        this.meshes = [], this.pulses = []
      }
    }
    class uk {
      constructor() {
        this.stored = new Map, this.DN = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(BB) {
        if (!BB.baf2TermOpen) return !1;
        BB.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [jB, zB] of BB.baf2TermItems) zB > 0 ? this.stored.set(jB, zB) : this.stored.delete(jB);
        if (BB.baf2TermHeld && (this.DN = new Map(BB.baf2TermHeld)), this.pending = this.pending.filter((jB => jB.seq > BB.baf2TermAcked)), this.silos = BB.baf2TermSilos, this.readOnly = BB.baf2TermReadOnly, this.pocket = !0 === BB.baf2TermPocket, BB.baf2TermReset) this.resort();
        else {
          const BB = new Set(this.order);
          for (const jB of this.stored.keys()) BB.has(jB) || this.order.push(jB)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((BB, jB) => this.amount(jB) - this.amount(BB) || BB.localeCompare(jB))), this.changed()
      }
      take(BB, jB) {
        const zB = Nj(BB, this.amount(jB));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: jB,
          amount: zB,
          put: !1
        }), this.recents = [jB, ...this.recents.filter((BB => BB !== jB))].slice(0, 6), this.changed(), zj(this.seq, BB, jB)
      }
      put(BB, jB) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: jB,
          amount: Nj(BB, this.heldAmount(jB)),
          put: !0
        }), this.changed(), Qj(this.seq, BB, jB)
      }
      putAll() {
        this.seq++;
        for (const BB of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: BB,
          amount: this.heldAmount(BB),
          put: !0
        });
        return this.changed(), nj(this.seq)
      }
      amount(BB) {
        var jB;
        let zB = null !== (jB = this.stored.get(BB)) && void 0 !== jB ? jB : 0;
        for (const QB of this.pending) QB.item === BB && (zB += QB.put ? QB.amount : -QB.amount);
        return Math.max(0, zB)
      }
      heldAmount(BB) {
        var jB;
        let zB = null !== (jB = this.DN.get(BB)) && void 0 !== jB ? jB : 0;
        for (const QB of this.pending) QB.put && QB.item === BB && (zB -= QB.amount);
        return Math.max(0, zB)
      }
      heldItems() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((jB => jB === BB || this.heldAmount(jB) > 0))
      }
      items() {
        return this.order.filter((BB => this.amount(BB) > 0))
      }
      recent() {
        return this.recents.filter((BB => this.amount(BB) > 0))
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
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      changed() {
        this.version++;
        for (const BB of this.listeners) BB()
      }
    }
    var Uk = zB(38513);
    const ak = {
      isBlock: BB => void 0 !== DB.i[BB],
      harvestType: BB => {
        var jB;
        return null === (jB = DB.i[BB]) || void 0 === jB ? void 0 : jB.harvestType
      },
      harvestLevel: BB => {
        var jB;
        return null === (jB = DB.i[BB]) || void 0 === jB ? void 0 : jB.harvestLevel
      },
      dropsNothing: BB => {
        var jB;
        return null === (null === (jB = DB.i[BB]) || void 0 === jB ? void 0 : jB.drops)
      },
      displayName: BB => {
        var jB;
        return null === (jB = QN.k[BB]) || void 0 === jB ? void 0 : jB.displayName
      },
      description: BB => {
        var jB;
        return null === (jB = QN.k[BB]) || void 0 === jB ? void 0 : jB.description
      },
      harvests: BB => {
        var jB;
        return null === (jB = QN.k[BB]) || void 0 === jB ? void 0 : jB.harvests
      },
      level: BB => {
        var jB;
        return null === (jB = QN.k[BB]) || void 0 === jB ? void 0 : jB.level
      }
    };

    function pk(BB, jB, zB) {
      return function(BB, jB, zB, QB) {
        var nB, dB;
        const IB = jB.split("|")[0],
          NB = BB.isBlock(jB) ? jB : BB.isBlock(IB) ? IB : null;
        if (null === NB || "rock" !== BB.harvestType(NB) || BB.dropsNothing(NB) && !AQ.has(IB)) return null;
        const uB = zB && "rock" === BB.harvests(zB) ? null !== (nB = BB.level(zB)) && void 0 !== nB ? nB : 0 : null,
          UB = null !== (dB = null !== QB && void 0 !== QB ? QB : BB.harvestLevel(NB)) && void 0 !== dB ? dB : 0;
        return (null !== uB ? UB <= uB : 0 === BB.harvestLevel(NB)) ? null : qQ(BB, UB)
      }(ak, BB, jB, zB)
    }

    function rk(BB, jB) {
      return function(BB, jB, zB) {
        if (jB === iQ[0]) return [(0, VB.ke)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, VB.E.whiteUiText)];
        const QB = zB.split("|")[0],
          nB = BB.isBlock(QB) ? BB.displayName(QB) : void 0,
          dB = "string" === typeof nB ? nB : nB && "translationKey" in nB ? `$t(${nB.translationKey})` : QB;
        return [(0, VB.ke)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: dB
          }
        }, VB.E.whiteUiText), (0, VB.ke)({
          translationKey: `item:${(0,VB.He)(jB)}`
        }, VB.E.yellowUiText)]
      }(ak, BB, jB)
    }
    const sk = "buildAFactory2Game:";
    const Jk = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function mk(BB) {
      return BB.endsWith(" Ore")
    }
    const yk = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      kk = [],
      Gk = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: yk,
        plan: null,
        atomic: kk
      },
      Lk = "buildAFactory2Game:",
      gk = new Set(["Splitter", "Sorting Gate"]),
      tk = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class Sk {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = BB, this.planAt = jB, this.tierOf = zB, this.dN = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.DN = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Gk, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(BB, jB, zB) {
        var QB, nB, dB;
        let IB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const NB = null !== (QB = null === (nB = BB.ZjB(jB)) || void 0 === nB ? void 0 : nB.name) && void 0 !== QB ? QB : null,
          uB = BB.isPlayerCrouching(jB),
          UB = 0 === zB ? null : this.resolve(BB, zB),
          aB = null !== UB && null !== IB && gk.has(UB.rootName) && function(BB, jB) {
            return tk.some((zB => {
              let [QB, nB] = zB;
              const dB = BB.getBlockId(jB[0] + QB, jB[1], jB[2] + nB);
              return 0 !== dB && "Express Belt" === BB.getMetaInfo(dB).rootName
            }))
          }(BB, IB),
          pB = this.updatePlan(0 === zB ? null : IB),
          rB = this.tierOf(),
          sB = null === IB ? null : (0, Uk.g)(zB),
          JB = null !== sB && null !== IB && (0, Uk.j)(function(BB) {
            return (jB, zB, QB) => BB.getBlockId(jB, zB, QB)
          }(BB), IB[0], IB[1], IB[2], sB),
          mB = this.readAfloat(BB, zB, IB);
        if (zB === this.dN && JB === this.missesMaker && mB === this.afloat && NB === this.DN && uB === this.crouching && aB === this.express && rB === this.tier && !pB && (!this.targetsLive || !this.liveMoved(IB))) return;
        this.dN = zB, this.missesMaker = JB, this.afloat = mB, this.DN = NB, this.crouching = uB, this.express = aB;
        const yB = aB && UB ? function(BB) {
          if (null === BB.info) return null;
          return BB.express ??= {
            ...BB.info,
            detail: `${Lk}lookKeepsUpExpress`,
            detailItem: null
          }, BB.express
        }(UB) : null !== UB && JB && null !== sB ? this.besideMaker(UB, zB, sB) : null !== UB && mB ? this.hanging(UB) : null !== (dB = null === UB || void 0 === UB ? void 0 : UB.info) && void 0 !== dB ? dB : null;
        this.tier = rB;
        const kB = UB && yB ? function(BB, jB) {
          var zB, QB;
          const nB = DB.i[BB];
          if (!BB.endsWith(" Ore") || "rock" !== (null === nB || void 0 === nB ? void 0 : nB.harvestType) || 0 === nB.harvestLevel) return null;
          const dB = null !== (zB = nB.harvestLevel) && void 0 !== zB ? zB : 0,
            IB = jB ? QN.k[jB] : void 0;
          if ("rock" === (null === IB || void 0 === IB ? void 0 : IB.harvests) && (null !== (QB = IB.level) && void 0 !== QB ? QB : 0) >= dB) return null;
          const NB = (uB = dB, qQ(ak, uB));
          var uB;
          if (null === NB) return null;
          const UB = dd(NB),
            aB = /^[AEIOU]/.test(NB) ? "An" : "";
          if ("rock" === (null === IB || void 0 === IB ? void 0 : IB.harvests) && jB) return {
            key: `${Lk}lookToolTooWeak${aB}`,
            DN: dd(jB),
            needed: UB
          };
          return {
            key: NB === iQ[0] ? `${Lk}lookNeedAnyPickaxe` : `${Lk}lookNeedPickaxe${aB}`,
            DN: null,
            needed: UB
          }
        }(UB.rootName, NB) : null;
        this.targetsLive = !0 === (null === UB || void 0 === UB ? void 0 : UB.live) && null !== IB;
        let GB = null;
        this.targetsLive && UB && IB && this.live && (this.livePos[0] = IB[0], this.livePos[1] = IB[1], this.livePos[2] = IB[2], this.liveVersion = this.live.version(), GB = this.live.line(UB.rootName, IB));
        const LB = null === yB ? yk : function(BB, jB, zB) {
            const QB = function(BB, jB, zB) {
              const QB = Yz(BB);
              if (null === QB) return null;
              const nB = `${sk}lookPortMode_${QB}`,
                dB = WQ(jB);
              if (dB && zB) return {
                mode: null,
                detail: nB,
                next: `${sk}lookWrenchPickUp`,
                nextState: null
              };
              const IB = Vz(BB),
                NB = null === IB ? null : Yz(IB);
              return null === NB ? {
                mode: null,
                detail: nB,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: nB,
                next: dB ? `${sk}lookWrenchNext` : `${sk}lookPortWrench`,
                nextState: `${sk}lookPortState_${NB}`
              }
            }(BB, jB, zB);
            if (null !== QB) return QB;
            const nB = zn(BB, jB, zB);
            return null === nB.mode && null === nB.next ? yk : nB
          }(BB.blockIdToBlockName(zB), NB, uB),
          gB = this.plan,
          tB = UB && yB ? this.rowsOf(UB.rootName, rB) : kk,
          SB = this.snapshot;
        if (!(null === yB ? !SB.visible : SB.visible && yB === SB.info && (MB = kB, EB = SB.tool, MB === EB || null !== MB && null !== EB && MB.key === EB.key && MB.DN === EB.DN && MB.needed === EB.needed) && function(BB, jB) {
            return BB === jB || null !== BB && null !== jB && BB.key === jB.key && JSON.stringify([BB.params, BB.keys]) === JSON.stringify([jB.params, jB.keys])
          }(GB, SB.live) && function(BB, jB) {
            return BB.mode === jB.mode && BB.detail === jB.detail && BB.next === jB.next && BB.nextState === jB.nextState
          }(LB, SB.wrench) && OJ(gB, SB.plan) && tB === SB.atomic)) {
          var MB, EB;
          this.snapshot = null === yB ? {
            ...SB,
            visible: !1
          } : {
            info: yB,
            visible: !0,
            tool: kB,
            live: GB,
            wrench: LB,
            plan: gB,
            atomic: tB
          };
          for (const BB of this.listeners) BB()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Gk, this.dN = 0, this.DN = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(BB, jB, zB) {
        if (null === zB || 0 === jB || !NB() || !mk(this.resolve(BB, jB).rootName)) return !1;
        const QB = `${zB[0]},${zB[1]},${zB[2]},${jB}`,
          nB = performance.now();
        return QB === this.afloatKey && nB - this.afloatAt < Mk ? this.afloat : (this.afloatKey = QB, this.afloatAt = nB, function(BB, jB) {
          for (const [zB, QB, nB] of Jk) {
            const dB = jB(BB[0] + zB, BB[1] + QB, BB[2] + nB);
            if (void 0 === dB || null !== dB && !mk(dB)) return !1
          }
          return !0
        }(zB, ((jB, zB, QB) => function(BB, jB, zB, QB) {
          if (!BB.isBlockInLoadedChunk(jB, zB, QB)) return;
          const nB = BB.getBlockId(jB, zB, QB);
          return 0 === nB ? null : BB.getMetaInfo(nB).rootName
        }(BB, jB, zB, QB))))
      }
      liveMoved(BB) {
        var jB;
        const {
          livePos: zB
        } = this;
        return null === BB || BB[0] !== zB[0] || BB[1] !== zB[1] || BB[2] !== zB[2] || (null === (jB = this.live) || void 0 === jB ? void 0 : jB.version()) !== this.liveVersion
      }
      updatePlan(BB) {
        const jB = null === BB ? "" : BB.join(","),
          zB = performance.now();
        if (jB === this.planPos && zB - this.planMs < 250) return !1;
        this.planPos = jB, this.planMs = zB;
        const QB = null === BB ? null : this.planAt([BB[0], BB[1], BB[2]]),
          nB = !OJ(QB, this.plan);
        return this.plan = QB, nB
      }
      besideMaker(BB, jB, zB) {
        let {
          info: QB
        } = BB;
        if (null === QB) return null;
        let nB = this.besideMakerById.get(jB);
        if (void 0 === nB) {
          const BB = "cryo" === zB ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          nB = {
            ...QB,
            detail: `${Lk}${BB}`,
            detailItem: null
          }, this.besideMakerById.set(jB, nB)
        }
        return nB
      }
      hanging(BB) {
        let {
          info: jB,
          rootName: zB
        } = BB;
        if (null === jB) return null;
        let QB = this.afloatByRoot.get(zB);
        return void 0 === QB && (QB = {
          ...jB,
          detail: `${Lk}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(zB, QB)), QB
      }
      rowsOf(BB, jB) {
        if (null === jB) return kk;
        const zB = `${BB}|${jB}`;
        let QB = this.rowsByKey.get(zB);
        if (void 0 === QB) {
          const nB = function(BB, jB) {
            var zB;
            if (!(BB in Vj)) return [];
            const QB = null !== (zB = hj[BB]) && void 0 !== zB ? zB : [],
              nB = new Map;
            for (const IB of Kd(BB, jB))
              if ((QB.includes(IB) || xd(IB.output) && ld(IB.output) > bB(BB)) && ld(IB.output) <= jB) {
                var dB;
                const BB = null !== (dB = nB.get(IB.output)) && void 0 !== dB ? dB : [];
                BB.push(IB.input), nB.set(IB.output, BB)
              } return cd([...nB], (BB => {
              let [jB] = BB;
              return -ld(jB)
            })).map((BB => {
              let [jB, zB] = BB;
              return {
                output: jB,
                inputs: zB
              }
            }))
          }(BB, jB);
          QB = nB.length > 0 ? nB : kk, this.rowsByKey.set(zB, QB)
        }
        return QB
      }
      resolve(BB, jB) {
        const {
          rootId: zB,
          rootName: QB
        } = BB.getMetaInfo(jB), nB = (0, Jz.j)(QB) ? jB : zB;
        let dB = this.byRootId.get(nB);
        const IB = NB();
        if (void 0 === dB || dB.nuclear !== IB) {
          var uB;
          const zB = function(BB) {
            return XQ(ak, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB)
          }(QB, BB.blockIdToBlockName(jB));
          dB = {
            info: zB,
            rootName: QB,
            live: null !== zB && !0 === (null === (uB = this.live) || void 0 === uB ? void 0 : uB.handles(QB)),
            nuclear: IB
          }, this.byRootId.set(nB, dB)
        }
        return dB
      }
    }
    const Mk = 500;
    const Ek = (0, QB.memo)((function(BB) {
      var jB, zB;
      let {
        store: nB
      } = BB;
      const {
        t: dB
      } = (0, fn.D)(), [IB, NB] = (0, QB.useState)((() => nB.get()));
      (0, QB.useEffect)((() => (NB(nB.get()), nB.subscribe((() => {
        NB(nB.get())
      })))), [nB]);
      const {
        openInGameMenuName: uB,
        openEverythingMenuName: UB,
        isTouchScreen: aB
      } = (0, Ln.m)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: pB,
        tool: rB,
        live: sB,
        wrench: JB,
        atomic: mB
      } = IB, yB = IB.visible && null === uB && null === UB;
      if (null === pB) return null;
      const kB = null !== JB.detail ? dB(JB.detail) : null !== (jB = IB.plan) && void 0 !== jB && jB.ctrl ? dB("buildAFactory2Game:lookPlanCtrl") : null !== pB.detail ? dB(pB.detail, null === pB.detailItem ? void 0 : {
        item: dB(pB.detailItem)
      }) : null;
      return (0, Hd.jsxs)("div", {
        className: Sn()("Baf2LookTarget", {
          Visible: yB
        }),
        "aria-hidden": !yB,
        children: [(0, Hd.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: dB(pB.name)
        }), null !== IB.plan && (0, Hd.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: dB(IB.plan.key, {
            kind: dB(IB.plan.kindKey),
            w: String(IB.plan.w),
            h: String(IB.plan.h),
            d: String(IB.plan.d),
            count: String(IB.plan.count)
          })
        }), void 0 !== (null === (zB = IB.plan) || void 0 === zB ? void 0 : zB.why) && (0, Hd.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: dB(IB.plan.why)
        }), null !== JB.mode && (0, Hd.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: dB(JB.mode)
        }), null !== rB ? (0, Hd.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: dB(rB.key, {
            item: dB(rB.needed),
            DN: null === rB.DN ? "" : dB(rB.DN)
          })
        }) : null !== sB ? (0, Hd.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: dB(sB.key, NU(dB, sB))
        }) : null !== kB && (0, Hd.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: kB
        }), mB.length > 0 && (0, Hd.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: dB("buildAFactory2Game:lookAtomicRecipes", {
            list: mB.map((BB => {
              let {
                output: jB,
                inputs: zB
              } = BB;
              const QB = zB.length > 1 ? ` ${dB("buildAFactory2Game:recipeMore",{count:String(zB.length-1)})}` : "";
              return `${dB(dd(zB[0]))}${QB} \u2192 ${dB(dd(jB))}`
            })).join(", ")
          })
        }), null !== JB.next && (0, Hd.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: dB(JB.next, {
            state: null === JB.nextState ? "" : dB(JB.nextState),
            use: dB(aB ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var ik = zB(38605);
    const qk = [],
      fk = [
        [0, -1, 0]
      ];

    function Hk(BB) {
      const jB = [BB];
      for (let zB = 1; zB <= 4; zB++) zB > 1 && jB.push(`${BB}|meta|rot${zB}`), jB.push(`${BB}|meta|rot${zB}|Running`);
      return jB
    }

    function Dk(BB, jB) {
      return [Math.floor(BB[0] / jB), Math.floor(BB[1] / jB), Math.floor(BB[2] / jB)]
    }

    function Fk(BB, jB, zB) {
      return `${BB},${jB},${zB}`
    }

    function Yk(BB) {
      const jB = BB.split("|")[0];
      if (!Uz(jB)) return qk;
      const zB = Vj[jB];
      if (jz(zB)) return fk;
      const QB = Hy(BB);
      return zz(zB) ? [
        [-QB[0], -QB[1], -QB[2]]
      ] : Mn(zB) ? function(BB, jB) {
        const zB = BB[0] - 2 * jB[0],
          QB = BB[2] - 2 * jB[2],
          nB = [];
        for (let dB = -1; dB <= 1; dB++)
          for (let jB = -1; jB <= 1; jB++) nB.push([zB + dB, BB[1], QB + jB]);
        return nB
      }([0, 0, 0], QB) : qk
    }
    const Vk = [.5, .5, .5],
      hk = [.2, .8, .3],
      Xk = [.45, 1, .5];
    class Zk {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(BB) {
        this.indexed = !0;
        for (const jB of fj)
          for (const zB of Hk(jB)) {
            const jB = BB.blockNameToBlockId(zB, !0),
              QB = Yk(zB);
            null !== jB && QB.length > 0 && (this.offsetsList.push(QB), this.offsetsIndexById[jB] = this.offsetsList.length)
          }
      }
      onAfterRender(BB, jB) {
        this.indexed || this.index(BB);
        const zB = performance.now();
        if (zB - this.lastCheckMs < 100) return;
        this.lastCheckMs = zB, this.checks++;
        const QB = gJ.e.ZJ,
          [nB, dB, IB] = Dk(jB, QB);
        let NB = !1;
        const uB = [];
        let UB = 0;
        for (let aB = nB - 2; aB <= nB + 2; aB++)
          for (let jB = dB - 1; jB <= dB + 1; jB++)
            for (let nB = IB - 2; nB <= IB + 2; nB++) {
              const dB = UB++,
                IB = Fk(aB, jB, nB),
                pB = BB.getChunkVersion(aB, jB, nB);
              let rB = this.chunks.get(IB);
              null !== pB ? (rB || (rB = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(IB, rB)), rB.seenAt = this.checks, rB.checkedVersion !== pB && (rB.checkedVersion = pB, NB = !0), rB.scannedVersion !== pB && zB - rB.scannedAt >= 500 && uB.push({
                slot: dB,
                entry: rB,
                origin: [aB * QB, jB * QB, nB * QB]
              })) : (NB ||= void 0 !== rB, this.chunks.delete(IB))
            }
        this.scanDue(BB, uB) && (NB = !0);
        for (const [aB, pB] of this.chunks) pB.seenAt !== this.checks && (NB ||= pB.machines.length > 0, this.chunks.delete(aB));
        for (const aB of this.chunks.values())
          for (const [jB, zB, QB] of aB.cellChunks)(Math.abs(jB - nB) > 2 || Math.abs(zB - dB) > 1 || Math.abs(QB - IB) > 2) && this.watchCellChunk(BB, jB, zB, QB) && (NB = !0);
        for (const [aB, pB] of this.cellChunks) pB.seenAt !== this.checks && this.cellChunks.delete(aB);
        NB && this.refresh(BB)
      }
      dispose(BB) {
        this.clearMeshes(BB), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(BB, jB) {
        const zB = Math.max(jB.findIndex((BB => {
          let {
            slot: jB
          } = BB;
          return jB >= this.scanFrom
        })), 0);
        let QB = 96;
        for (let nB = 0; nB < jB.length; nB++) {
          const {
            slot: dB,
            entry: IB,
            origin: NB
          } = jB[(zB + nB) % jB.length];
          if (QB -= this.scan(BB, IB, NB), QB <= 0) {
            this.scanFrom = dB + 1;
            break
          }
        }
        return jB.length > 0
      }
      scan(BB, jB, zB) {
        let [QB, nB, dB] = zB;
        const IB = gJ.e.ZJ,
          NB = this.hits;
        NB.length = 0;
        const uB = BB.scanBlocks(QB, nB, dB, QB + IB, nB + IB, dB + IB, this.offsetsIndexById, NB),
          UB = [];
        for (let aB = 0; aB < NB.length; aB += 4) UB.push({
          pos: [NB[aB], NB[aB + 1], NB[aB + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[NB[aB + 3]] - 1]
        });
        return jB.machines = UB, jB.cellChunks = function(BB, jB) {
          const zB = new Set,
            QB = [];
          for (const {
              pos: nB,
              offsets: dB
            }
            of BB)
            for (const [BB, IB, NB] of dB) {
              const dB = Dk([nB[0] + BB, nB[1] + IB, nB[2] + NB], jB),
                uB = Fk(...dB);
              zB.has(uB) || (zB.add(uB), QB.push(dB))
            }
          return QB
        }(UB, IB), jB.scannedVersion = jB.checkedVersion, jB.scannedAt = performance.now(), Math.max(uB, 1)
      }
      watchCellChunk(BB, jB, zB, QB) {
        const nB = Fk(jB, zB, QB),
          dB = BB.getChunkVersion(jB, zB, QB),
          IB = this.cellChunks.get(nB);
        return null === dB ? this.cellChunks.delete(nB) : (null === IB || void 0 === IB ? void 0 : IB.version) === dB ? (IB.seenAt = this.checks, !1) : (this.cellChunks.set(nB, {
          version: dB,
          seenAt: this.checks
        }), !0)
      }
      refresh(BB) {
        const jB = function(BB, jB) {
            const zB = new Set,
              QB = [];
            for (const {
                pos: nB,
                offsets: dB
              }
              of BB)
              for (const [BB, IB, NB] of dB) {
                const dB = nB[0] + BB,
                  uB = nB[1] + IB,
                  UB = nB[2] + NB,
                  aB = `${dB},${uB},${UB}`;
                zB.has(aB) || (zB.add(aB), jB(dB, uB, UB) && QB.push([dB, uB, UB]))
              }
            return QB
          }([...this.chunks.values()].flatMap((BB => BB.machines)), ((jB, zB, QB) => BB.isBlockInLoadedChunk(jB, zB, QB) && 0 === BB.getBlockId(jB, zB, QB))),
          zB = jB.join(";");
        zB !== this.shownKey && (this.shownKey = zB, this.clearMeshes(BB), jB.length > 0 && (this.meshes = [this.build(BB, jB, !1), this.build(BB, jB, !0)]))
      }
      build(BB, jB, zB) {
        const QB = jB[0],
          nB = [],
          dB = [];
        for (const [IB, NB, uB] of jB)(0, ik.d)(nB, dB, [IB - QB[0] + .5, NB - QB[1] + .5, uB - QB[2] + .5], Vk, zB);
        return BB.createGameMesh({
          positions: nB,
          indices: dB
        }, {
          rgb: zB ? Xk : hk,
          alpha: .4
        }, QB)
      }
      clearMeshes(BB) {
        for (const jB of this.meshes) BB.disposeGameMesh(jB);
        this.meshes = []
      }
    }
    const Ak = 1 / .6,
      Tk = 200,
      Pk = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Wk = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      ek = 2 * Math.PI / 3;
    class lk {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pk;
        this.style = BB, this.particles = null, this.points = new Float32Array(800), this.budget = Tk, this.lastMs = 0
      }
      static blade() {
        return new lk(Wk)
      }
      hG(BB, jB) {
        const zB = Math.min(jB.arcStruck, jB.arcPoints.length);
        this.draw(BB, [jB.arcFrom, ...jB.arcPoints], jB.arcPoints.slice(0, zB))
      }
      onBlade(BB, jB) {
        const [zB, QB, nB] = jB.bladeCentre, [dB, IB] = jB.bladeFacing, NB = zB - 1.5 * dB, uB = nB - 1.5 * IB, UB = Math.atan2(IB, dB), aB = [];
        for (let pB = 0; pB <= 8; pB++) {
          const BB = UB - ek / 2 + ek * pB / 8;
          aB.push([NB + 2.5 * Math.cos(BB), QB, uB + 2.5 * Math.sin(BB)])
        }
        this.draw(BB, aB, jB.bladeStruck)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
      draw(BB, jB, zB) {
        if (!BB.particlesEnabled() || jB.length < 2) return;
        const QB = performance.now();
        this.budget = Math.min(Tk, this.budget + (QB - this.lastMs) / 1e3 * Tk), this.lastMs = QB;
        const nB = [];
        let dB = 0,
          IB = jB[0];
        for (const kB of jB.slice(1)) {
          const BB = Math.min(48, Math.round(Math.hypot(kB[0] - IB[0], kB[1] - IB[1], kB[2] - IB[2]) * this.style.perBlock));
          nB.push([IB, kB, BB]), dB += BB, IB = kB
        }
        const NB = zB.length;
        dB += 10 * NB;
        const uB = dB > this.budget ? this.budget / dB : 1;
        if (0 === dB || uB * dB < 1) return;
        const UB = jB[0],
          [aB, pB, rB] = UB,
          sB = this.points;
        let JB = 0;
        const mB = (BB, jB, zB, QB) => {
          const nB = 4 * JB;
          sB[nB] = BB - aB, sB[nB + 1] = jB - pB, sB[nB + 2] = zB - rB, sB[nB + 3] = QB, JB++
        };
        nB.forEach(((BB, jB) => {
          let [zB, QB, nB] = BB;
          const dB = Math.min(Math.floor(nB * uB), Tk - JB),
            IB = Math.hypot(QB[0] - zB[0], QB[1] - zB[1], QB[2] - zB[2]),
            NB = 0 === jB && IB > 0 ? Math.min(.5, .1 * IB) / IB : 0;
          for (let uB = 0; uB < dB; uB++) {
            const BB = NB + (uB + .5) / dB * (1 - NB);
            mB(zB[0] + (QB[0] - zB[0]) * BB, zB[1] + (QB[1] - zB[1]) * BB, zB[2] + (QB[2] - zB[2]) * BB, .15)
          }
        }));
        const yB = Math.floor(10 * uB);
        for (let kB = 0; kB < NB; kB++) {
          const [BB, jB, QB] = zB[kB];
          for (let zB = 0; zB < yB && JB < Tk; zB++) mB(BB, jB, QB, 2.5)
        }
        this.budget -= JB, this.particles ??= BB.createParticles(function(BB) {
          const [jB, zB] = BB.colours;
          return {
            texture: "square_particle",
            Ep: 400,
            minLifeTime: BB.life[0] / Ak,
            maxLifeTime: BB.life[1] / Ak,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [jB[0], jB[1], jB[2], 1],
              maxColor: [zB[0], zB[1], zB[2], 1]
            }, {
              timeFraction: 1,
              minColor: [jB[0], jB[1], jB[2], 0],
              maxColor: [zB[0], zB[1], zB[2], 0]
            }],
            blendMode: TN.d.Add
          }
        }(this.style), {
          pos: UB
        }), this.particles.emitPoints(UB, sB, JB)
      }
    }
    const wk = new Set(["Sky Spring"]);

    function xk(BB, jB, zB) {
      const QB = BB.split("|")[0];
      return "Air" !== jB || zB || ! function(BB) {
        const jB = BB.split("|")[0];
        return void 0 !== Iz[jB] || wk.has(jB)
      }(QB) ? null : BB
    }
    class Kk {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(BB) {
        const jB = BB - this.lastTapAt >= 300;
        return this.lastTapAt = BB, jB
      }
    }
    class Ck {
      constructor() {
        this.presses = new Kk, this.predicted = null
      }
      tap(BB, jB) {
        const zB = this.presses.isNewPress(jB);
        return zB && (this.predicted = {
          station: BB,
          at: jB
        }), zB
      }
      consumeServerOpen(BB, jB) {
        const zB = this.predicted;
        return !(null === zB || zB.station !== BB || jB - zB.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class ck {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(BB, jB) {
        return BB && (this.thrustAt = jB), jB - this.thrustAt < 200
      }
    }
    const bk = [.1, .05, .1],
      vk = {
        texture: "effect_5",
        Ep: Math.ceil(48),
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
        blendMode: TN.d.OneOne
      };
    class Rk {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new ck, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      hG(BB, jB) {
        for (const [zB, QB] of jB.baf2JetFlames) BB.isLocalPlayer(zB) || (QB ? this.lit.add(zB) : this.lit.delete(zB))
      }
      onAfterRender(BB, jB) {
        const zB = performance.now(),
          QB = this.hold.lit(this.selfThrusting(BB, jB), zB);
        for (const [nB, dB] of this.flames)(nB === jB ? QB : this.lit.has(nB)) || this.setEmitting(dB, !1), nB === jB || BB.getPositionView(nB) ? !dB.emitting && zB - dB.offAt >= 1300 && (dB.particles.stop(), this.flames.delete(nB)) : (dB.particles.dispose(), this.flames.delete(nB), this.lit.delete(nB));
        QB && this.draw(BB, jB, jB);
        for (const nB of this.lit) this.draw(BB, jB, nB)
      }
      dispose() {
        for (const BB of this.flames.values()) BB.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(BB, jB) {
        var zB;
        const QB = BB.getLocalPlayerMovement();
        return !!QB && (null !== (nB = {
          option: null !== (zB = BB.getClientOption(jB, "jumpHoldThrust")) && void 0 !== zB ? zB : null,
          jumping: QB.jumpHeld,
          onGround: QB.onGround,
          alive: BB.isAlive(jB)
        }).option && nB.option.maxUpSpeed >= 0 && nB.jumping && !nB.onGround && nB.alive);
        var nB
      }
      draw(BB, jB, zB) {
        var QB, nB;
        const dB = this.pos;
        if (!BB.readDrawnPosition(zB, dB)) return;
        const IB = BB.readDrawnPosition(jB, this.camera) ? this.camera : dB;
        if (!((dB[0] - IB[0]) ** 2 + (dB[1] - IB[1]) ** 2 + (dB[2] - IB[2]) ** 2 < 1600) || !BB.particlesEnabled()) {
          const BB = this.flames.get(zB);
          return void(BB && this.setEmitting(BB, !1))
        }
        const NB = null !== (QB = this.flames.get(zB)) && void 0 !== QB ? QB : this.create(BB, zB, dB),
          uB = null !== (nB = BB.getDrawnHeading(zB)) && void 0 !== nB ? nB : 0,
          UB = this.at;
        UB[0] = dB[0] - .35 * Math.sin(uB), UB[1] = dB[1] + 1.05, UB[2] = dB[2] - .35 * Math.cos(uB), NB.particles.moveTo(UB), this.setEmitting(NB, !0)
      }
      setEmitting(BB, jB) {
        BB.emitting !== jB && (BB.emitting = jB, jB || (BB.offAt = performance.now()), BB.particles.setEmitRate(jB ? 60 : 0))
      }
      create(BB, jB, zB) {
        const QB = {
          particles: BB.createParticles(vk, {
            pos: zB,
            half: bk
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(jB, QB), QB
      }
    }

    function Ok(BB) {
      return "Reactor Frame" === QQ("reactor", BB)
    }

    function BG(BB) {
      return Az("reactor", BB) && !Ok(BB) && (BB.startsWith("Reactor Glass") || BB.startsWith("Reactor Port"))
    }
    const jG = "baf2Goal";
    class zG {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [hn.n.subscribe("setDirectionArrow", (BB => {
          let {
            id: jB,
            position: zB
          } = BB;
          jB === jG && (this.goal = zB, this.checkedAt = -1 / 0)
        })), hn.n.subscribe("clearDirectionArrow", (BB => {
          let {
            id: jB
          } = BB;
          null !== jB && jB !== jG || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const BB of this.subs) hn.n.unsubscribe(BB)
      }
      sideOf(BB, jB, zB, QB) {
        const nB = this.goal;
        if (!nB) return 0;
        zB - this.checkedAt > 1e3 && (this.checkedAt = zB, this.open = function(BB, jB) {
          const [zB, QB, nB] = BB.map(Math.floor);
          if (!BG(jB(zB, QB, nB))) return null;
          for (const [dB, IB] of [
              [1, 0],
              [0, 1]
            ]) {
            const BB = jB(zB + dB, QB, nB + IB),
              NB = jB(zB - dB, QB, nB - IB);
            if (Ok(NB) && BG(BB)) return [dB, 0, IB];
            if (Ok(BB) && BG(NB)) return [0 - dB, 0, 0 - IB]
          }
          return null
        }(nB, ((jB, zB, QB) => BB.blockIdToBlockName(BB.getBlockId(jB, zB, QB)))));
        const dB = this.open;
        if (!dB) return 0;
        const IB = QB(nB);
        if (Math.abs(IB.x - jB.x) > .05 || Math.abs(IB.y - jB.y) > .05) return 0;
        const NB = QB([nB[0] + dB[0], nB[1], nB[2] + dB[2]]).x - IB.x;
        return Math.abs(NB) < .3 ? 0 : NB > 0 ? 1 : -1
      }
    }
    class QG {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new zG, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.HJ = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.rG = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((BB => {
          for (const jB of BB) jB.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(jB.target, jB.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.HJ || this.clear()
        }, window.addEventListener("resize", this.rG)
      }
      onAfterRender(BB, jB) {
        var zB;
        this.api = BB, this.project = null !== (zB = null === jB || void 0 === jB ? void 0 : jB.projectWorldPosToScreenPos) && void 0 !== zB ? zB : null, this.queued || this.HJ || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.HJ = !0;
        for (const BB of this.moved.keys()) BB.style.transform = "";
        this.moved.clear();
        for (const BB of this.sideLabels.keys()) BB.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.rG)
      }
      clear() {
        for (const dB of this.moved.keys()) dB.isConnected || this.moved.delete(dB);
        for (const dB of this.sideLabels.keys()) dB.isConnected || this.sideLabels.delete(dB);
        if (0 === this.arrows.length) return;
        const BB = performance.now(),
          jB = BB - this.refreshedAt > 1e3;
        jB && (this.refreshedAt = BB, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const zB = this.trackerBox(),
          QB = this.barsBox(),
          nB = this.toastBox(jB);
        (zB || QB || nB) && jB && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let dB = 0; dB < this.arrows.length; dB++) {
          const jB = this.arrows[dB];
          this.labelOffsets.set(jB, this.runLabelAside(jB, BB));
          const IB = (zB ? this.shiftLeftOf(jB, zB) : 0) || this.shiftOnScreen(jB),
            NB = Math.min(QB ? this.liftAbove(jB, QB, IB) : 0, nB ? this.liftAbove(jB, nB, IB) : 0),
            uB = this.moved.get(jB);
          if (0 !== IB || 0 !== NB) {
            const BB = 0 === NB ? `translateX(${IB}px)` : `translate(${IB}px, ${NB}px)`;
            uB !== BB && (jB.style.transform = BB, this.moved.set(jB, BB))
          } else void 0 !== uB && (jB.style.transform = "", this.moved.delete(jB))
        }
      }
      trackerBox() {
        var BB, jB;
        const zB = null !== (BB = this.tracker) && void 0 !== BB && BB.isConnected ? this.tracker : null !== (jB = this.trackers[0]) && void 0 !== jB ? jB : null;
        if (zB !== this.tracker && this.watch(zB), this.boxStale && zB) {
          var QB, nB, dB;
          this.boxStale = !1;
          const BB = zB.closest(".NoRoom") ? null : zB.getBoundingClientRect(),
            jB = BB && BB.width > 0 ? null === (QB = this.hud) || void 0 === QB ? void 0 : QB.getBoundingClientRect() : void 0,
            IB = BB && jB ? Math.max(BB.top, jB.top) : null !== (nB = null === BB || void 0 === BB ? void 0 : BB.top) && void 0 !== nB ? nB : 0,
            NB = BB && jB ? Math.min(BB.bottom, jB.bottom) : null !== (dB = null === BB || void 0 === BB ? void 0 : BB.bottom) && void 0 !== dB ? dB : 0;
          this.box = BB && BB.width > 0 && NB > IB ? {
            left: BB.left,
            top: IB,
            right: BB.right,
            bottom: NB
          } : null
        }
        return zB ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var BB;
          this.barsStale = !1;
          const jB = null === (BB = this.statBars[0]) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
          this.bars = jB && jB.width > 0 && jB.height > 0 ? {
            left: jB.left,
            top: jB.top,
            right: jB.right,
            bottom: jB.bottom
          } : null
        }
        return this.bars
      }
      toastBox(BB) {
        var jB;
        const zB = null !== (jB = this.toasts[0]) && void 0 !== jB ? jB : null;
        if (zB !== this.toastEl || BB && zB) {
          this.toastEl = zB;
          const BB = null === zB || void 0 === zB ? void 0 : zB.getBoundingClientRect();
          this.toast = BB && BB.width > 0 && BB.height > 0 ? {
            left: BB.left,
            top: BB.top,
            right: BB.right,
            bottom: BB.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(BB, jB, zB) {
        var QB;
        const nB = this.anchorOf(BB);
        if (!nB) return 0;
        const dB = nB.x + zB + (null !== (QB = this.labelOffsets.get(BB)) && void 0 !== QB ? QB : 0),
          {
            halfWidth: IB,
            labelled: NB
          } = this.extentOf(BB),
          uB = nB.y + this.em * (NB ? 6.2 : 3);
        return uB < jB.top - 6 || dB + IB < jB.left - 6 || dB - IB > jB.right + 6 ? 0 : jB.top - 6 - uB
      }
      watch(BB) {
        var jB, zB;
        this.tracker && this.sizes.unobserve(this.tracker), null === (jB = this.hud) || void 0 === jB || jB.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = BB, this.hud = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.closest(".Baf2QuestHud")) && void 0 !== zB ? zB : null, this.box = null, this.boxStale = !0, BB && this.sizes.observe(BB), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(BB, jB) {
        var zB;
        const QB = this.anchorOf(BB);
        if (!QB) return 0;
        const {
          y: nB
        } = QB, dB = QB.x + (null !== (zB = this.labelOffsets.get(BB)) && void 0 !== zB ? zB : 0), IB = this.em, {
          halfWidth: NB,
          labelled: uB
        } = this.extentOf(BB), UB = nB - IB, aB = dB + NB;
        return nB + IB * (uB ? 6.2 : 3) < jB.top || UB > jB.bottom || aB < jB.left - 6 || dB - NB > jB.right ? 0 : Math.max(jB.left - 6 - aB, 6 - (dB - NB))
      }
      shiftOnScreen(BB) {
        var jB;
        const zB = this.anchorOf(BB);
        if (!zB) return 0;
        const {
          halfWidth: QB
        } = this.extentOf(BB), nB = zB.x + (null !== (jB = this.labelOffsets.get(BB)) && void 0 !== jB ? jB : 0), dB = nB + QB - (this.innerWidth - 6);
        return dB > 0 ? -dB : Math.max(0, 6 - (nB - QB))
      }
      runLabelAside(BB, jB) {
        var zB;
        let QB = null;
        for (let IB = 0; IB < BB.children.length; IB++) BB.children[IB].classList.contains("DirectionArrowLabel") && (QB = BB.children[IB]);
        if (!QB) return 0;
        const nB = BB.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(BB) : null,
          dB = (nB && this.api ? this.side.sideOf(this.api, {
            x: nB.x / this.innerWidth * 100,
            y: nB.y / this.innerHeight * 100
          }, jB, this.project) : 0) * this.halfWidthOf(QB);
        return dB !== (null !== (zB = this.sideLabels.get(QB)) && void 0 !== zB ? zB : 0) && (QB.style.transform = 0 === dB ? "" : `translateX(-50%) translateX(${dB}px)`, 0 === dB ? this.sideLabels.delete(QB) : this.sideLabels.set(QB, dB)), dB
      }
      extentOf(BB) {
        let jB = this.em,
          zB = !1;
        for (let QB = 0; QB < BB.children.length; QB++) {
          const nB = BB.children[QB],
            dB = nB.classList.contains("DirectionArrowLabel");
          zB ||= dB, (dB || nB.classList.contains("DirectionArrowDistance")) && (jB = Math.max(jB, this.halfWidthOf(nB)))
        }
        return {
          halfWidth: jB,
          labelled: zB
        }
      }
      halfWidthOf(BB) {
        let jB = this.halfWidths.get(BB);
        return void 0 === jB && (jB = BB.offsetWidth / 2, this.halfWidths.set(BB, jB), this.sizes.observe(BB), this.labels.add(BB)), jB
      }
      forgetGoneLabels() {
        for (const BB of this.labels) BB.isConnected || (this.sizes.unobserve(BB), this.halfWidths.delete(BB), this.labels.delete(BB))
      }
      anchorOf(BB) {
        const jB = BB.style.translate,
          zB = this.anchors.get(BB);
        if (zB && zB.translate === jB && zB.innerWidth === this.innerWidth && zB.innerHeight === this.innerHeight) return zB;
        const QB = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(jB);
        if (!QB) return null;
        const nB = {
          translate: jB,
          x: parseFloat(QB[1]) / 100 * this.innerWidth,
          y: parseFloat(QB[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(BB, nB), nB
      }
    }
    const nG = "Baf2ArrowText";

    function dG(BB, jB) {
      const zB = BB.rows.find((BB => BB.current));
      return YB(BB.tutorial) && null !== zB && void 0 !== zB && zB.item && Kn(zB) && oB(zB.item).includes(jB) ? zB.item : null
    }
    const IG = new class {
      constructor(BB) {
        this.select = BB, this.picks = new Map
      }
      open(BB, jB, zB) {
        const QB = dG(jB, BB);
        null !== QB && this.zs(BB, QB, zB)
      }
      follow(BB, jB) {
        if (NB())
          for (const [zB, {
              item: QB,
              had: nB
            }] of this.picks) {
            const dB = dG(BB, zB);
            dB !== QB && (null !== dB && jB(QB) > nB ? this.zs(zB, dB, jB) : this.picks.delete(zB))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      zs(BB, jB, zB) {
        this.picks.set(BB, {
          item: jB,
          had: zB(jB)
        }), this.select(BB, jB)
      }
    }(Xn.q);

    function NG(BB) {
      return jB => {
        let zB = 0;
        for (const QB of BB.getInventoryItems())(null === QB || void 0 === QB ? void 0 : QB.name) === jB && (zB += null === QB.amount ? 1 : Math.max(QB.amount, 0));
        return zB
      }
    }

    function uG(BB, jB, zB, QB) {
      BB.getClientOption(jB, "canCraft") && "inventory" !== Ln.c.get("openInGameMenuName") && (IG.open(zB, QB.get(), NG(BB)), hn.n.Ly("toggleMenu", `inventory|${zB}`))
    }
    let UG = null,
      aG = !1;

    function pG(BB) {
      const jB = od();
      BB === UG && jB === aG || (UG = BB, aG = jB, (0, Xn.s)(function(BB, jB) {
        const zB = new Map;
        for (let QB = BB + 1; QB <= nB.length; QB++) {
          const nB = bd(QB, BB, jB);
          if (nB)
            for (const jB of kB(QB).unlocks) zB.set(jB, {
              ...nB,
              stepsAway: QB - BB
            })
        }
        return zB
      }(BB, jB)))
    }

    function rG() {
      return BB = () => {
        null !== UG && pG(UG)
      }, (0, qd.i)(fd, BB);
      var BB
    }

    function sG() {
      return (0, Xn.x)(cd(Object.keys(fB), ld)), () => {
        (0, Xn.x)([])
      }
    }

    function JG(BB, jB, zB) {
      var QB, nB;
      const dB = BB.getTargetedBlock();
      if (!dB || ! function(BB, jB, zB) {
          if ("Chest" !== jB) return !1;
          const QB = BB.split("|")[0];
          if (!Uz(QB) || 0 === Vj[QB].outputSlots.length) return !1;
          const nB = Hy(BB);
          return zB[0] === nB[0] && zB[1] === nB[1] && zB[2] === nB[2]
        }(zB, null === (QB = BB.ZjB(jB)) || void 0 === QB ? void 0 : QB.name, dB.normal)) return !1;
      const [IB, NB, uB] = dB.By, UB = BB.getBlockId(IB, NB, uB);
      return 0 === UB || !0 === (null === (nB = DB.i[UB]) || void 0 === nB ? void 0 : nB.canBePlacedOver)
    }
    var mG = zB(36830);
    const yG = new Set(mz.c);
    class kG {
      constructor(BB) {
        this.toasts = BB, this.lastAt = -1 / 0
      }
      onAltAction(BB, jB, zB) {
        const QB = BB.getTargetedBlock();
        if (!QB || function(BB) {
            const jB = BB.split("|")[0];
            return Uz(jB) || null !== MQ(jB) || iB(jB) || mz.c.includes(jB)
          }(zB) && !yG.has(zB.split("|")[0])) return;
        const nB = BB.ZjB(jB);
        if (!nB || !yG.has(nB.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const dB = nB.typeObj.id,
          [IB, NB, uB] = QB.By,
          UB = BB.getBlockId(IB, NB, uB),
          aB = DB.i[UB];
        (0 === UB || null !== aB && void 0 !== aB && aB.Ss || null !== aB && void 0 !== aB && aB.canBePlacedOver) && BB.isSolidToPlayerBlockId(dB) && BB.canModifyBlockAt(IB, NB, uB) && BB.djB(IB, NB, uB, dB) && !BB.djB(IB, NB, uB, dB, jB) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, VB.ke)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, VB.E.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class GG {
      constructor(BB) {
        this.show = BB, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(BB, jB, zB) {
        var QB;
        if (!jB) return this.started = null, void this.gatedThisHold.clear();
        if (!BB) return void(this.started = null);
        const nB = `${BB.x},${BB.y},${BB.z},${BB.DN}`;
        if (nB === this.started) return;
        this.started = nB;
        const dB = ZQ(BB.y) ? pk(BB.block, BB.DN, BB.level) : null;
        if (null === dB || this.gatedThisHold.has(nB)) return;
        this.gatedThisHold.add(nB);
        const IB = BB.block.split("|")[0];
        zB - (null !== (QB = this.hintedAt.get(IB)) && void 0 !== QB ? QB : -1 / 0) < 5e3 || (this.hintedAt.set(IB, zB), this.show({
          baf2ToastText: rk(dB, BB.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var LG = zB(41);

    function gG(BB, jB) {
      const zB = [...BB.baf2CoreBankPaused];
      for (const [nB] of BB.baf2CoreBanked) zB.push(nB);
      for (const IB of nB) {
        for (const {
            item: BB
          }
          of IB.cost) zB.push(BB);
        for (const BB of IB.newDeposits) zB.push(BB.block);
        for (const BB of IB.unlocks) zB.push(BB, HB(BB));
        IB.reward && zB.push(IB.reward);
        for (const {
            item: BB
          }
          of null !== (QB = null === (dB = IB.charge) || void 0 === dB ? void 0 : dB.items) && void 0 !== QB ? QB : []) {
          var QB, dB;
          zB.push(BB)
        }
      }
      return {
        message: BB,
        itemNames: jB([...new Set(zB)])
      }
    }
    const tG = "baf2MultiblockGuide";
    const SG = new Map;
    const MG = function(BB, jB, zB, nB) {
      let {
        localPlayerId: dB
      } = nB;
      const IB = new gN,
        NB = new as,
        UB = new Gs,
        aB = new ys(UB),
        pB = (BB, jB) => {
          jB ? aB.observe(BB) : aB.unobserve(BB)
        },
        rB = new ms,
        sB = new gs(pB),
        JB = BB => sB.covers(BB),
        mB = new Ps;
      let yB;
      const kB = new lI((BB => {
          yB.sendCommand(BB)
        })),
        GB = () => {
          kB.send("baf2questbook")
        },
        LB = BB => function(BB, jB, zB) {
          const QB = {};
          for (const nB of zB) {
            let zB = SG.get(nB);
            void 0 === zB && (zB = BB.getItemStat(jB, nB, "displayName"), SG.set(nB, zB)), QB[nB] = zB
          }
          return QB
        }(yB, dB, BB),
        gB = new Pn(GB),
        tB = new Rs((() => Ln.c.get("loadingOverlayVisible"))),
        SB = new Ha(kB, gB, tB),
        MB = new QJ,
        EB = new kG(tB),
        qB = new GG((BB => {
          tB.show(BB, BB.baf2ToastMs)
        })),
        fB = new rJ(pB),
        oB = new Ty(fB),
        HB = new oI,
        FB = new uk,
        YB = new IN,
        XB = new LJ({
          read: () => !1 !== LG.j.getItem(tG),
          write: BB => {
            LG.j.setItem(tG, BB)
          }
        }),
        ZB = new KJ(XB),
        AB = new bJ(XB),
        TB = new km(XB, (BB => function(BB, jB) {
          const zB = Qu(jB.w, jB.h, jB.d),
            QB = new Uint8Array(zB);
          for (let nB = 0; nB < zB; nB++) {
            const zB = WJ(BB, Rz(jB, zQ(jB, nB)));
            QB[nB] = null === zB ? 0 : ON(zB)
          }
          return QB
        }(yB, BB)), um(kB)),
        PB = new Gm(XB, um(kB)),
        WB = new mm,
        wB = (BB, jB) => {
          let [zB, QB, nB] = BB;
          WB.answered(jB) || tB.show({
            baf2ToastText: [(0, VB.ke)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: zB,
                h: QB,
                d: nB
              }
            }, VB.E.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      TB.onSizeNotTaken(wB), PB.onSizeNotTaken(wB);
      const xB = new Sm,
        KB = new Qy(XB),
        cB = new dy,
        bB = new yy(cB),
        vB = new fy,
        OB = new Py,
        Bj = new vy(OB),
        jj = new Nk(OB),
        zj = OB.lookSource(),
        Qj = new Sk({
          handles: BB => zj.handles(BB) || BB === hB,
          line: (BB, jB) => BB === hB ? function(BB, jB, zB) {
            var QB;
            const nB = lB(null === (QB = jB.at(zB)) || void 0 === QB ? void 0 : QB.item);
            return null === nB ? {
              key: `${Lk}lookFarmEmpty`
            } : {
              key: BB.blockIdToBlockName(BB.getBlockId(zB[0], zB[1], zB[2])).endsWith("|Running") ? `${Lk}lookFarmRunning` : `${Lk}lookFarmWaiting`,
              keys: {
                mob: eB(nB)
              }
            }
          }(yB, fB, jB) : zj.line(BB, jB),
          version: () => zj.version() + fB.version()
        }, (BB => RJ(XB.all(), BB, (BB => WJ(yB, BB)))), (() => gB.get().tier)),
        nj = new Pm,
        dj = new Zk,
        Ij = new lk,
        Nj = lk.blade(),
        uj = new Rk,
        Uj = new IJ,
        aj = new QG,
        rj = new Ck,
        sj = new Kk;
      let Jj = -1 / 0,
        mj = 0,
        yj = -1 / 0,
        kj = -1 / 0;
      const Gj = () => {
          kB.send("baf2islandsclose"), kj = Date.now()
        },
        Lj = [];

      function gj(BB) {
        var jB, zB, QB, nB, dB, IB, uB;
        "core" === (null === (jB = NB.get()) || void 0 === jB ? void 0 : jB.kind) && "core" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && kB.send("baf2coreclose"), "power" === (null === (zB = NB.get()) || void 0 === zB ? void 0 : zB.kind) && "power" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && kB.send("baf2powerclose"), "water" === (null === (QB = NB.get()) || void 0 === QB ? void 0 : QB.kind) && "water" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && kB.send(RB.v), "terminal" === (null === (nB = NB.get()) || void 0 === nB ? void 0 : nB.kind) && "terminal" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && kB.send("baf2terminalclose"), "islands" === (null === (dB = NB.get()) || void 0 === dB ? void 0 : dB.kind) && "islands" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && Gj();
        const UB = OB.getStatus();
        "collider" === (null === (IB = NB.get()) || void 0 === IB ? void 0 : IB.kind) && "collider" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && UB && kB.send(Pu(UB, "close"));
        const aB = BB => "reactor" === BB || "battery" === BB;
        if (aB(null === (uB = NB.get()) || void 0 === uB ? void 0 : uB.kind) && !aB(null === BB || void 0 === BB ? void 0 : BB.kind)) {
          var pB, rB, sB;
          const BB = "reactor" === (null === (pB = NB.get()) || void 0 === pB ? void 0 : pB.kind) ? null === (rB = TB.get()) || void 0 === rB ? void 0 : rB.status.baf2RxAt : null === (sB = PB.get()) || void 0 === sB ? void 0 : sB.status.baf2BatAt;
          BB && kB.send(pj(BB, "close"))
        }
        "quests" === (null === BB || void 0 === BB ? void 0 : BB.kind) && GB(), NB.set(BB), null === BB && MB.release()
      }

      function tj() {
        (0, Gn.d)(), gj(null)
      }
      let Sj = new Set,
        Mj = !1;
      const Ej = {
        onCreate: BB => {
          yB = BB, yB.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const jB of fj) {
            const BB = Vj[jB].inputSlots ? XN(IB) : YN(jB, IB, HB, kB);
            Lj.push((0, yn.d)(jB, BB))
          }
          Lj.push((0, Gn.t)((0, QB.createElement)(QB.Fragment, null, (0, QB.createElement)(Ms, {
            controller: sB
          }), (0, QB.createElement)(mJ, {
            store: fB
          }), (0, QB.createElement)(Ek, {
            store: Qj
          }), (0, QB.createElement)(bs, {
            store: gB
          }), (0, QB.createElement)(jJ, {
            store: tB
          }), (0, QB.createElement)(nJ, {
            store: MB
          }), (0, QB.createElement)(uJ, {
            store: Uj
          }), (0, QB.createElement)(tm, {
            store: xB
          }), (0, QB.createElement)(Iy, {
            store: cB
          })), {
            content: (0, QB.createElement)(ps, {
              commands: kB,
              store: NB,
              power: HB,
              water: YB,
              reactor: TB,
              battery: PB,
              collider: OB,
              terminal: FB,
              quests: gB,
              tutorial: SB,
              close: Gn.f,
              leave: () => {
                MB.dropHeld(), (0, Gn.d)()
              },
              askIslands: () => {
                kj = -1 / 0, Jj = Date.now(), mj = kB.send(CB)
              },
              openSocial: () => {
                (0, Gn.d)(), Ln.c.set({
                  openEverythingMenuName: pz.o.SOCIAL
                })
              },
              showCore: BB => {
                gj({
                  kind: "core",
                  core: BB
                }), kB.send("baf2corereopen")
              }
            }),
            onClose: () => {
              gj(null)
            }
          })), Lj.push((0, kn.t)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              gj({
                kind: "quests"
              }), (0, Gn.o)()
            }
          })), Lj.push(function(BB, jB) {
            let zB = null,
              QB = () => {};
            const nB = jB => {
              var nB;
              let {
                tutorial: dB,
                tutorialKnown: IB
              } = jB;
              (null === (nB = zB) || void 0 === nB ? void 0 : nB.tutorial) === dB && zB.tutorialKnown === IB || (zB = {
                tutorial: dB,
                tutorialKnown: IB
              }, QB = (0, kn.t)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: fa[dB],
                icon: {
                  kind: "icon",
                  name: qa[dB]
                },
                iconOnly: !0,
                disabled: !IB,
                className: "Baf2TutorialButton",
                onClick: () => {
                  BB.next()
                }
              }))
            };
            nB(jB.get());
            const dB = hn.n.subscribe(Zn, nB);
            return () => {
              hn.n.unsubscribe(dB), QB()
            }
          }(SB, gB)), Mj = !1, Lj.push(rG()), Lj.push(sG()), Lj.push(function() {
            const BB = hn.n.subscribe(Zn, jd),
              jB = () => {
                if (Bd) {
                  const BB = Bd;
                  Bd = null, (0, Xn.w)(BB)
                }
              },
              zB = hn.n.subscribe("toggleMenu", (BB => {
                "inventory" === (null === BB || void 0 === BB ? void 0 : BB.split("|")[0]) && jB()
              })),
              QB = hn.n.subscribe("appManagerUpdated|openInGameMenuName", (BB => {
                "inventory" === BB && jB()
              }));
            return () => {
              hn.n.unsubscribe(BB), hn.n.unsubscribe(zB), hn.n.unsubscribe(QB)
            }
          }()), Lj.push(function(BB) {
            const jB = NG(BB),
              zB = hn.n.subscribe(Zn, (BB => {
                IG.follow(BB, jB)
              }));
            return () => {
              hn.n.unsubscribe(zB), IG.clear()
            }
          }(yB)), Lj.push(function() {
            const BB = document.documentElement,
              jB = (0, es.b)(".InvenBodyRight", [], (() => {
                const jB = document.querySelector(".InvenBodyRight");
                jB && BB.style.setProperty("--baf2-backpack-width", `${jB.offsetWidth}px`)
              }));
            return () => {
              jB(), BB.style.removeProperty("--baf2-backpack-width")
            }
          }()), Lj.push(function() {
            const BB = document.documentElement;
            return BB.classList.add(nG), () => {
              BB.classList.remove(nG)
            }
          }()), Lj.push((() => {
            aB.dispose(), UB.dispose()
          })), mB.start(yB), Lj.push((() => {
            mB.dispose(), uj.dispose(), oB.dispose()
          }))
        },
        onClose: () => {
          (0, Xn.w)([]), Bd = null, On = new Set, UG = null, (0, Xn.s)(new Map), SG.clear();
          for (const BB of Lj) BB();
          gB.dispose(), Qj.dispose(), tB.dispose(), MB.dispose(), nj.dispose(), dj.dispose(yB), ZB.dispose(yB), AB.dispose(yB), KB.dispose(yB), bB.dispose(yB), cB.dispose(), vB.dispose(), XB.dispose(), TB.dispose(), PB.dispose(), xB.dispose(), Ij.dispose(), Nj.dispose(), Uj.dispose(), Bj.dispose(yB), jj.dispose(yB), OB.dispose(), aj.dispose(), kB.clear()
        },
        onAfterRender: (BB, jB) => {
          var zB, QB, nB;
          try {
            mB.onAfterRender(jB)
          } catch (UB) {
            console.error("Error drawing BAF2 belt items", UB)
          }
          try {
            uj.onAfterRender(yB, dB)
          } catch (UB) {
            console.error("Error drawing BAF2 jet flames", UB)
          }
          Mj || (Mj = !0, kB.send("baf2clientready"));
          const IB = yB.getPositionView(dB);
          sB.onAfterRender(jB, IB, rB), fB.onAfterRender(jB, IB, rB, JB), aB.run(rB), nj.onAfterRender(yB, IB), dj.onAfterRender(yB, IB), oB.onAfterRender(yB, IB), ZB.onAfterRender(yB, IB), AB.onAfterRender(yB, dB, IB), KB.onAfterRender(yB, dB, IB), bB.onAfterRender(yB, dB), vB.onAfterRender(yB, IB), gB.onPlayerY(IB[1]), Bj.onAfterRender(yB), jj.onAfterRender(yB, dB, IB);
          const uB = yB.getTargetedBlock();
          Qj.onAfterRender(yB, dB, null !== (zB = null === uB || void 0 === uB ? void 0 : uB.JR) && void 0 !== zB ? zB : 0, null !== (QB = null === uB || void 0 === uB ? void 0 : uB.position) && void 0 !== QB ? QB : null), aj.onAfterRender(yB, jB), qB.onMining(function(BB, jB) {
            var zB, QB;
            const nB = BB.getMiningBlock();
            if (!nB) return null;
            const dB = (0, DB.g)(BB.getBlockId(nB[0], nB[1], nB[2])),
              IB = null !== (zB = null === (QB = BB.ZjB(jB)) || void 0 === QB ? void 0 : QB.name) && void 0 !== zB ? zB : null,
              NB = BB.getItemStat(jB, dB.split("|")[0], "harvestLevel");
            return {
              block: dB,
              x: nB[0],
              y: nB[1],
              z: nB[2],
              DN: IB,
              level: NB
            }
          }(yB, dB), yB.isMining(), performance.now()), "dropMap" === (null === (nB = NB.get()) || void 0 === nB ? void 0 : nB.kind) && ZQ(IB[1]) && tj()
        },
        onPlayerChangeBlock: (BB, jB, zB, QB, nB, IB) => {
          BB === dB && function(BB, jB, zB, QB, nB, dB, IB) {
            const NB = xk(dB, IB, BB.isPlayerCrouching(jB));
            if (null === NB) return;
            if (BB.eD(zB, QB, nB, NB), !BB.getClientOption(jB, "canPickUpItems")) return;
            const uB = Iz[NB.split("|")[0]];
            var UB, aB, pB;
            void 0 !== uB && (UB = BB.getInventoryItems(), aB = uB, pB = gJ.e.maxItemStackSize, BB.getInventoryFreeSlotCount(jB) > 0 || UB.some((BB => null !== BB && BB.name === aB && null !== BB.amount && BB.amount < pB))) && BB.playSound(jB, (0, mG.f)("pickUp"), .5, 1)
          }(yB, BB, jB, zB, QB, nB, IB)
        },
        onPlayerAltAction: (BB, jB, zB, QB, nB) => {
          var IB, NB;
          if (!yB.getClientOption(dB, "canPickUpItems")) return;
          const uB = null !== (IB = null === (NB = yB.ZjB(dB)) || void 0 === NB ? void 0 : NB.name) && void 0 !== IB ? IB : null,
            UB = function(BB, jB) {
              const zB = BB.split("|")[0];
              return iB(zB) && jB !== Nn && "Sky Pack" !== jB ? zB : null
            }(nB, uB);
          if (null !== UB) return void(rj.tap(UB, performance.now()) && uG(yB, dB, UB, gB));
          if (!WQ(uB)) return;
          const aB = sj.isNewPress(performance.now()),
            pB = function(BB, jB, zB) {
              return !WQ(jB) || zB ? null : vQ(BB)
            }(nB, uB, yB.isPlayerCrouching(dB));
          null !== pB && aB && yB.eD(jB, zB, QB, pB)
        },
        onPlayerAttemptAltAction: (BB, jB, zB, QB, nB) => {
          if (function(BB, jB, zB, QB, nB) {
              "Workbench" === QB.split("|")[0] && BB.getClientOption(zB, "canCraft") && (IG.open("Workbench", nB.get(), NG(BB)), jB.send("baf2station Workbench"))
            }(yB, kB, dB, nB, gB), JG(yB, dB, nB)) return "preventAction";
          EB.onAltAction(yB, dB, nB)
        },
        onReceivedMessageFromServer: (BB, jB) => {
          if ("baf2MachineStatus" === BB) {
            var zB, QB, nB, UB, aB, pB, rB, JB, GB, SB, EB, iB, qB, oB, DB, VB;
            const BB = jB,
              dB = BB.baf2MachineTaught;
            IB.set(BB.baf2MachinePos, {
              status: BB.baf2MachineStatus,
              power: null !== (zB = BB.baf2MachinePower) && void 0 !== zB ? zB : null,
              opLeftMs: null !== (QB = BB.baf2MachineOpLeftMs) && void 0 !== QB ? QB : null,
              dug: BB.baf2MachineYield ? {
                item: BB.baf2MachineYield,
                name: LB([BB.baf2MachineYield])[BB.baf2MachineYield]
              } : null,
              powerCap: null !== (nB = BB.baf2MachinePowerCap) && void 0 !== nB ? nB : null,
              powerRates: null !== (UB = BB.baf2MachinePowerRates) && void 0 !== UB ? UB : null,
              coupled: !0 === BB.baf2MachineCoupled,
              couplerLevel: null !== (aB = BB.baf2MachineCoupler) && void 0 !== aB ? aB : 1,
              taught: dB,
              taughtName: dB ? LB([dB])[dB] : null,
              tier: null !== (pB = BB.baf2MachineTier) && void 0 !== pB ? pB : null,
              input: null !== (rB = BB.baf2MachineInput) && void 0 !== rB ? rB : null,
              inertCoupler: null !== (JB = BB.baf2MachineInertCoupler) && void 0 !== JB ? JB : null,
              inputShort: null !== (GB = BB.baf2MachineInputShort) && void 0 !== GB ? GB : null,
              field: null !== (SB = BB.baf2MachineField) && void 0 !== SB ? SB : null,
              noSeeds: !0 === BB.baf2MachineNoSeeds,
              fuelFed: !0 === BB.baf2MachineFuelFed,
              fuelFeeds: !0 === BB.baf2MachineFuelFeeds,
              coreFull: !0 === BB.baf2MachineCoreFull,
              waterUnpowered: !0 === BB.baf2MachineWaterUnpowered,
              powerShort: !0 === BB.baf2MachinePowerShort,
              powerWait: !0 === BB.baf2MachinePowerWait,
              reactorPowered: !0 === BB.baf2MachineReactorPowered,
              fuelLeftMs: null !== (EB = BB.baf2MachineFuelLeftMs) && void 0 !== EB ? EB : null,
              burning: null !== (iB = BB.baf2MachineBurning) && void 0 !== iB ? iB : null,
              fuelKeep: null !== (qB = BB.baf2MachineFuelKeep) && void 0 !== qB ? qB : null,
              water: null !== (oB = BB.baf2MachineWater) && void 0 !== oB ? oB : null,
              farm: null !== (DB = BB.baf2MachineFarm) && void 0 !== DB ? DB : null,
              cryo: null !== (VB = BB.baf2MachineCryo) && void 0 !== VB ? VB : null
            })
          } else if ("baf2StationOpen" === BB) {
            const BB = jB.baf2Station;
            rj.consumeServerOpen(BB, performance.now()) || uG(yB, dB, BB, gB)
          } else if ("baf2Power" === BB) {
            const BB = jB;
            HB.set(BB), BB.baf2PowerOpen && (gj({
              kind: "power"
            }), (0, Gn.o)())
          } else if (BB === RB.A) {
            const BB = jB;
            YB.set(BB), BB.baf2WaterOpen && (gj({
              kind: "water"
            }), (0, Gn.o)())
          } else if ("baf2RxPlans" === BB) {
            var hB, ZB, AB;
            const BB = jB;
            XB.hG(BB);
            const zB = new Set(BB.baf2RxPlanList.map((BB => {
              let [jB, zB, QB] = BB;
              return `${jB},${zB},${QB}`
            })));
            xB.retain(zB);
            const QB = null === (hB = NB.get()) || void 0 === hB ? void 0 : hB.kind,
              nB = "reactor" === QB ? null === (ZB = TB.get()) || void 0 === ZB ? void 0 : ZB.status.baf2RxAt : "battery" === QB ? null === (AB = PB.get()) || void 0 === AB ? void 0 : AB.status.baf2BatAt : void 0;
            nB && Sj.has(nB.join(",")) && !zB.has(nB.join(",")) && tj(), Sj = zB
          } else if ("baf2RxStatus" === BB) {
            const BB = jB;
            TB.set(BB), BB.baf2RxOpen && (gj({
              kind: "reactor"
            }), (0, Gn.o)())
          } else if ("baf2BatStatus" === BB) {
            const BB = jB;
            PB.set(BB), BB.baf2BatOpen && (gj({
              kind: "battery"
            }), (0, Gn.o)())
          } else if ("baf2RxAlarm" === BB) xB.hG(jB);
          else if ("baf2Bomb" === BB) cB.hG(jB, yB.getPositionView(dB));
          else if ("baf2Fallout" === BB) vB.hG(jB);
          else if ("baf2ColBeams" === BB) OB.onBeams(jB);
          else if ("baf2ColStatus" === BB) {
            const BB = jB;
            var eB, lB;
            if (OB.onStatus(BB), BB.baf2ColOpen) OB.onOpen(null !== (eB = null === (lB = yB.ZjB(dB)) || void 0 === lB ? void 0 : lB.name) && void 0 !== eB ? eB : null), gj({
              kind: "collider"
            }), (0, Gn.o)()
          } else if ("baf2Terminal" === BB) {
            const BB = jB;
            var wB;
            if (FB.apply(BB)) BB.baf2TermReset && (gj({
              kind: "terminal"
            }), (0, Gn.o)());
            else "terminal" === (null === (wB = NB.get()) || void 0 === wB ? void 0 : wB.kind) && (NB.set(null), (0, Gn.d)())
          } else if ("baf2Core" === BB) {
            var KB;
            const BB = jB;
            if (uB(!0 === BB.baf2CoreNuclear), function(BB, jB) {
                return "core" === (null === BB || void 0 === BB ? void 0 : BB.kind) && jB.baf2CoreTier > BB.core.message.baf2CoreTier
              }(NB.get(), BB)) return void(0, Gn.d)();
            if (BB.baf2CoreRefresh && "core" !== (null === (KB = NB.get()) || void 0 === KB ? void 0 : KB.kind)) return;
            gj({
              kind: "core",
              core: gG(BB, LB)
            }), BB.baf2CoreRefresh || (0, Gn.o)()
          } else if ("baf2WrenchUndo" === BB) {
            const {
              baf2WrenchPos: BB,
              baf2WrenchBlock: zB
            } = jB;
            yB.eD(BB[0], BB[1], BB[2], zB)
          } else if ("baf2Toast" === BB) {
            const BB = jB;
            WB.heard(performance.now(), BB.baf2ToastMs), tB.show(BB)
          } else if ("baf2Area" === BB) MB.arrive(jB, null !== NB.get());
          else if ("baf2Quest" === BB) {
            const BB = jB;
            uB(!0 === BB.baf2QuestNuclear), gB.set(BB, function(BB, jB) {
              var zB, QB, nB, dB, IB;
              const NB = [];
              for (const [, , aB, , , , , , pB, rB] of BB.baf2QuestSteps) null !== aB && NB.push(aB), NB.push(...null !== pB && void 0 !== pB ? pB : [], ...null !== rB && void 0 !== rB ? rB : []);
              BB.baf2QuestReward && NB.push(BB.baf2QuestReward);
              const uB = null === (zB = BB.baf2QuestSide) || void 0 === zB ? void 0 : zB[2][2];
              uB && NB.push(uB), NB.push(...null !== (QB = null === (nB = BB.baf2QuestSide) || void 0 === nB ? void 0 : nB[2][8]) && void 0 !== QB ? QB : [], ...null !== (dB = null === (IB = BB.baf2QuestSide) || void 0 === IB ? void 0 : IB[2][9]) && void 0 !== dB ? dB : []);
              for (const [aB] of null !== (UB = BB.baf2QuestAlso) && void 0 !== UB ? UB : []) {
                var UB;
                NB.push(aB)
              }
              return jB(NB)
            }(BB, LB)), pG(BB.baf2QuestTier)
          } else if ("baf2Route" === BB) ! function(BB, jB) {
            let {
              baf2RouteCells: zB,
              baf2RouteInto: QB
            } = jB;
            0 !== zB.length && QB ? BB.setRouteChevrons({
              cells: zB.map(((BB, jB) => {
                const [nB, , dB] = function(BB, jB, zB) {
                  const QB = zB + 1 < BB.length ? BB[zB + 1] : jB;
                  return [QB[0] - BB[zB][0], 0, QB[2] - BB[zB][2]]
                }(zB, QB, jB);
                return {
                  pos: BB,
                  way: [nB, dB]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : BB.setRouteChevrons(null)
          }(yB, jB);
          else if ("baf2QuestBook" === BB) gB.setBook(jB);
          else if ("baf2Stalls" === BB) sB.set(jB.baf2StallCells);
          else if (BB === mz.j) mB.onMoves(jB);
          else if (BB === mz.g) mB.onLines(jB);
          else if ("baf2Labels" === BB) fB.hG(jB);
          else if ("baf2DropMap" === BB) gj({
            kind: "dropMap",
            dropMap: jB
          }), (0, Gn.o)();
          else if ("baf2Islands" === BB) {
            var bB, Bj;
            const BB = jB;
            if (kB.syncIslandEdits(BB.baf2IslandsAnswered), !BB.baf2IslandsOpen && "islands" !== (null === (bB = NB.get()) || void 0 === bB ? void 0 : bB.kind)) return;
            if (BB.baf2IslandsOpen) {
              var jj, zj;
              const jB = Ln.c.get("openEverythingMenuName"),
                zB = kB.sent() >= mj,
                QB = "other" !== (sj = {
                  askedAtMs: Jj,
                  askSent: zB,
                  reaskedAtMs: yj,
                  nowMs: Date.now(),
                  panel: null !== (jj = null === (zj = NB.get()) || void 0 === zj ? void 0 : zj.kind) && void 0 !== jj ? jj : null,
                  inGameMenu: Ln.c.get("openInGameMenuName"),
                  everythingMenu: null === jB ? null : jB === pz.o.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== BB.baf2IslandsFocusInvite
                }).everythingMenu && (!!sj.focusInvite || "islands" === sj.panel && "clientGame" === sj.inGameMenu || !(sj.nowMs - sj.reaskedAtMs < XU) && (sj.askSent && sj.nowMs - sj.askedAtMs < XU ? "core" === sj.panel && "clientGame" === sj.inGameMenu && null === sj.everythingMenu : "shop" === sj.everythingMenu || null === sj.inGameMenu));
              if (zB && (Jj = -1 / 0), yj = -1 / 0, !QB) return void Gj()
            }
            const zB = (nj = BB.baf2IslandsOpen, dj = "islands" === (null === (Bj = NB.get()) || void 0 === Bj ? void 0 : Bj.kind), aj = kj, pj = Date.now(), nj && !dj && pj - aj < XU);
            gj({
              kind: "islands",
              islands: BB,
              arrivedAtMs: Date.now(),
              backToCore: ZU(NB.get())
            }), zB && (kj = -1 / 0, yj = Date.now(), kB.send(CB)), BB.baf2IslandsOpen && ("clientGame" !== Ln.c.get("openInGameMenuName") && (0, gn.c)(), (0, Gn.o)())
          } else if ("baf2CoopTransfer" === BB) {
            var Qj;
            const BB = jB;
            BB.baf2TransferOn ? (gj({
              kind: "transfer",
              transfer: BB,
              arrivedAtMs: Date.now()
            }), (0, Gn.o)()) : "transfer" === (null === (Qj = NB.get()) || void 0 === Qj ? void 0 : Qj.kind) && (0, Gn.d)()
          } else "baf2IslandLeft" === BB ? (MB.dropHeld(), null !== NB.get() && tj(), "inventory" === Ln.c.get("openInGameMenuName") && (0, gn.c)()) : "baf2Arc" === BB ? Ij.hG(yB, jB) : "baf2Blade" === BB ? Nj.onBlade(yB, jB) : "baf2JetFlame" === BB ? uj.hG(yB, jB) : "baf2GearPower" === BB && Uj.hG(jB);
          var nj, dj, aj, pj, sj
        }
      };
      return Ej
    }
  },
  38599: (BB, jB, zB) => {
    function QB(BB, jB, zB) {
      const QB = new Set,
        nB = new ResizeObserver(zB),
        dB = () => {
          const jB = new Set(document.querySelectorAll(BB));
          let dB = !1;
          for (const BB of QB) jB.has(BB) || (nB.unobserve(BB), QB.delete(BB), dB = !0);
          for (const BB of jB) QB.has(BB) || (nB.observe(BB), IB.observe(BB, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), QB.add(BB));
          dB && zB()
        },
        IB = new MutationObserver((jB => {
          jB.some((BB => "attributes" === BB.type)) && zB(), jB.some((jB => function(BB, jB, zB) {
            if ("childList" !== BB.type) return !1;
            for (const QB of BB.addedNodes)
              if (QB instanceof Element && (QB.matches(jB) || QB.querySelector(jB))) return !0;
            for (const QB of BB.removedNodes)
              if (QB instanceof Element)
                for (const BB of zB)
                  if (QB.contains(BB)) return !0;
            return !1
          }(jB, BB, QB))) && dB()
        }));
      IB.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const NB of jB) nB.observe(NB);
      return window.addEventListener("resize", zB), dB(), zB(), () => {
        nB.disconnect(), IB.disconnect(), window.removeEventListener("resize", zB)
      }
    }
    zB.d(jB, {
      b: () => QB
    })
  },
  38585: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB
    });
    var QB = zB(38581);
    const nB = 5,
      dB = [0, 0, 0],
      IB = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function NB(BB, jB, zB, NB, uB, UB) {
      let [aB, pB, rB] = NB;
      const sB = (aB + .5 - zB[0]) ** 2 + (pB - zB[1]) ** 2 + (rB + .5 - zB[2]) ** 2;
      let JB = null;
      sB <= UB ** 2 && (dB[0] = aB + .5, dB[1] = pB + uB, dB[2] = rB + .5, JB = jB.projectWorldPosToViewport(dB));
      const mB = null !== JB && JB.x > -nB && JB.x < 100 + nB && JB.y > -nB && JB.y < 100 + nB;
      return (0, QB.g)(BB, !mB), mB ? (IB.x = JB.x, IB.y = JB.y, IB.distSq = sB, IB) : null
    }
  },
  38581: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      g: () => dB
    });
    const QB = new WeakMap;

    function nB(BB) {
      let jB = QB.get(BB);
      return jB || (jB = {
        hidden: BB.hidden,
        x: NaN,
        y: NaN
      }, QB.set(BB, jB)), jB
    }

    function dB(BB, jB) {
      const zB = nB(BB);
      zB.hidden !== jB && (zB.hidden = jB, BB.hidden = jB)
    }

    function IB(BB, jB, zB) {
      const QB = nB(BB);
      QB.x === jB && QB.y === zB || (QB.x = jB, QB.y = zB, BB.style.translate = `${jB}vw ${zB}vh`)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);