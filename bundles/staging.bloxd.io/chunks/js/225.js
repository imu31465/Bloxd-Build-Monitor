export const id = 225;
export const ids = [225];
export const modules = {
  36625: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => gB,
      g: () => qB,
      h: () => vB,
      l: () => zB,
      p: () => yB,
      q: () => hB,
      s: () => WB,
      t: () => NB,
      w: () => UB
    });
    var TB = ZB(20),
      JB = ZB(24);
    const oB = "clientGameInventoryButtonsChanged",
      GB = new Map;

    function vB() {
      return [...GB.values()].sort(((BB, IB) => {
        var ZB, TB;
        return (null !== (ZB = BB.order) && void 0 !== ZB ? ZB : 0) - (null !== (TB = IB.order) && void 0 !== TB ? TB : 0)
      }))
    }
    let kB = null;

    function cB(BB) {
      kB = BB
    }
    let nB = !1;

    function hB(BB) {
      nB = !0;
      try {
        BB.onClick()
      } finally {
        nB = !1
      }
      BB.panel && "clientGame" === TB.d.get("openInGameMenuName") && cB(BB.id)
    }

    function zB() {
      return nB
    }

    function FB() {
      return vB().filter((BB => BB.panel && !BB.disabled))
    }

    function NB(BB) {
      const IB = FB(),
        ZB = IB.findIndex((BB => BB.id === kB));
      return !(ZB < 0 || IB.length < 2) && (hB(IB[(ZB + BB + IB.length) % IB.length]), !0)
    }

    function gB() {
      return null !== kB && FB().length > 1
    }

    function qB() {
      cB(null)
    }

    function yB() {
      "inventory" !== TB.d.get("openInGameMenuName") && cB(null)
    }

    function UB() {
      const BB = kB;
      return cB(null), BB
    }

    function WB(BB) {
      return GB.set(BB.id, BB), JB.l.Gq(oB, vB(), !0), () => {
        GB.get(BB.id) === BB && (GB.delete(BB.id), JB.l.Gq(oB, vB()))
      }
    }
  },
  36619: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      f: () => qB,
      i: () => yB,
      m: () => zB,
      q: () => cB,
      t: () => gB,
      v: () => FB,
      x: () => nB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(1353),
      GB = ZB(36625);
    const vB = "clientGameUiChanged";
    let kB = null;

    function cB() {
      return kB
    }

    function nB(BB, IB) {
      const ZB = {
        content: BB,
        menu: IB
      };
      return kB = ZB, JB.l.Gq(vB, kB, !0), () => {
        kB === ZB && (kB = null, NB = !1, qB(), JB.l.Gq(vB, null))
      }
    }
    let hB = null;

    function zB() {
      return hB
    }

    function FB(BB) {
      return hB = BB, () => {
        hB === BB && (hB = null)
      }
    }
    let NB = !1;

    function gB() {
      const BB = TB.d.get("openInGameMenuName");
      "clientGame" !== BB && (NB = "inventory" === BB), (0, GB.l)() || (0, GB.g)(), (0, oB.t)(oB.e), TB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qB() {
      UB(!1)
    }

    function yB() {
      UB(NB)
    }

    function UB(BB) {
      "clientGame" === TB.d.get("openInGameMenuName") && TB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, GB.g)(), NB = !1
    }
  },
  38547: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(38555);
    const JB = [0, 0, 0];
    class oB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JB;
        this.pool = BB, this.origin = IB, this.count = 0, this.free = []
      }
      take() {
        var BB;
        const IB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.count++;
        return IB >= this.pool.ah && this.pool.grow(Math.max(2 * this.pool.ah, IB + 1)), this.hide(IB), IB
      }
      release(BB) {
        this.hide(BB), this.free.push(BB)
      }
      write(BB, IB, ZB, JB) {
        const {
          records: oB
        } = this.pool, {
          origin: GB
        } = this, vB = BB * TB.b;
        oB[vB] = IB - GB[0], oB[vB + 1] = ZB - GB[1], oB[vB + 2] = JB - GB[2], oB[vB + TB.f] = 0, this.pool.markDirty(BB)
      }
      hide(BB) {
        this.pool.records[BB * TB.b + TB.f] = 1, this.pool.markDirty(BB)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class GB {
      constructor(BB, IB, ZB) {
        this.api = BB, this.model = IB, this.initialCapacity = ZB, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(BB) {
        let IB = this.kinds.get(BB);
        if (void 0 === IB) {
          const ZB = this.api.createInstancePool({
            ...this.model,
            item: BB
          }, this.initialCapacity);
          null === ZB || void 0 === ZB || ZB.setOrigin(this.origin[0], this.origin[1], this.origin[2]), IB = ZB && new oB(ZB, this.origin), this.kinds.set(BB, IB)
        }
        return IB
      }
      follow(BB) {
        const {
          origin: IB
        } = this;
        if (Math.abs(BB[0] - IB[0]) <= 512 && Math.abs(BB[1] - IB[1]) <= 512 && Math.abs(BB[2] - IB[2]) <= 512) return !1;
        IB[0] = Math.floor(BB[0]), IB[1] = Math.floor(BB[1]), IB[2] = Math.floor(BB[2]);
        for (const ZB of this.kinds.values()) null === ZB || void 0 === ZB || ZB.pool.setOrigin(IB[0], IB[1], IB[2]);
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
  38562: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      f: () => vB,
      i: () => kB
    });
    const TB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      JB = [0, 1, 2, 0, 2, 3],
      oB = [4, 5];

    function GB(BB, IB, ZB, TB, JB) {
      for (let GB = 0; GB < 6; GB++) oB.includes(GB) === JB && cB(BB, IB, ZB, TB, GB)
    }

    function vB(BB, IB, ZB, TB) {
      for (let JB = 0; JB < 6; JB++) cB(BB, IB, ZB, TB, JB)
    }

    function kB(BB, IB, ZB, oB, GB) {
      for (let vB = 0; vB < 6; vB++)
        for (const kB of [0, 1]) {
          const [cB, nB, hB] = [kB + 2, kB + 1, (kB + 3) % 4], zB = BB.length / 3;
          for (const [IB, JB] of [
              [kB, nB],
              [cB, nB],
              [cB, hB],
              [kB, hB]
            ])
            for (let kB = 0; kB < 3; kB++) {
              const cB = TB[3 * (4 * vB + IB) + kB],
                nB = TB[3 * (4 * vB + JB) + kB];
              BB.push((cB + (nB - cB) * GB) * oB / 2 + ZB[kB])
            }
          for (const BB of JB) IB.push(zB + BB)
        }
    }

    function cB(BB, IB, ZB, oB, GB) {
      let [vB, kB, cB] = ZB, [nB, hB, zB] = oB;
      const FB = BB.length / 3;
      for (let JB = 4 * GB; JB < 4 * GB + 4; JB++) BB.push(TB[3 * JB] * nB / 2 + vB, TB[3 * JB + 1] * hB / 2 + kB, TB[3 * JB + 2] * zB / 2 + cB);
      for (const TB of JB) IB.push(FB + TB)
    }
  },
  38526: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => WU
    });
    var TB = ZB(63);
    const JB = [{
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
      oB = 10;
    let GB = !0;

    function vB() {
      return GB
    }

    function kB(BB) {
      GB = BB
    }
    const cB = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function nB() {
      return GB ? JB.length : oB
    }

    function hB(BB) {
      var IB, ZB;
      return null !== (IB = null === (ZB = JB[BB - 1]) || void 0 === ZB ? void 0 : ZB.reactorTier) && void 0 !== IB ? IB : 0
    }

    function zB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hB(BB) > 0;
      return ZB && !GB ? "hidden" : BB <= IB ? "open" : ZB ? IB < 5 ? "hidden" : IB < oB ? "teaser" : "locked" : "locked"
    }

    function FB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: TB,
        n: JB
      } = qB(BB);
      return {
        key: IB[TB],
        params: {
          [TB]: ZB ? String(JB) : JB
        }
      }
    }
    const NB = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function gB(BB, IB) {
      return hB(BB) > 0 && IB < oB
    }

    function qB(BB) {
      const IB = hB(BB);
      if (IB > 0) return {
        kind: "atomic",
        n: IB,
        short: `A${IB}`
      };
      const ZB = function(BB) {
        return BB >= 6 && BB <= 10 ? BB - 6 + 1 : 0
      }(BB);
      return ZB > 0 ? {
        kind: "stage",
        n: ZB,
        short: `S${ZB}`
      } : {
        kind: "tier",
        n: BB,
        short: String(BB)
      }
    }

    function yB(BB) {
      return JB[Math.max(1, Math.min(BB, JB.length)) - 1]
    }

    function UB(BB, IB) {
      return BB < IB ? function(BB) {
        var IB;
        return null !== (IB = JB[BB]) && void 0 !== IB ? IB : null
      }(BB) : null
    }
    const WB = "baf2coresubmit",
      dB = "baf2corebankpause",
      CB = "baf2coredeposit",
      QB = "baf2corechargepause";

    function sB(BB) {
      var IB;
      return null !== (IB = BB.baf2CoreOpen) && void 0 !== IB ? IB : oB
    }
    const wB = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function OB(BB) {
      return wB.includes(BB)
    }
    const YB = (BB, IB) => IB.map((IB => [IB, [BB]])),
      iB = Object.fromEntries([...YB("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...YB("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...YB("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...YB("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...YB("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...YB("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...YB("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...YB("Parts Bench", ["Focus Lens"]), ...YB("Machine Bench", ["Laser", "Collider"]), ...YB("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...YB("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...YB("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...YB("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...YB("Tool Bench", ["Mob Cage"]), ...YB("Tool Bench", ["Pocket Terminal"]), ...YB("Tool Bench", ["Comet Beacon"]), ...YB("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function pB(BB) {
      var IB;
      return null !== (IB = iB[BB]) && void 0 !== IB ? IB : ["Workbench"]
    }

    function aB(BB) {
      return pB(BB)[0]
    }
    JB.slice(1).map(((BB, IB) => `Core Tier ${IB+2}`));
    var HB = ZB(9296);
    const MB = ["on", "hud", "off"];

    function jB(BB) {
      return "on" === BB
    }
    var PB = ZB(360);
    const RB = "Mob Farm",
      rB = {
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
      mB = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      XB = {
        1: 20,
        2: 60,
        3: 120
      },
      LB = "baf2farmvoid",
      eB = "Caged ",
      uB = " Spawner Block";

    function fB(BB) {
      return `lifeform:${(0,PB.Ee)(BB)}`
    }

    function lB(BB) {
      if (!BB) return null;
      if (BB.startsWith(eB)) {
        const IB = BB.slice(6);
        return mB.includes(IB) ? IB : null
      }
      if (BB.endsWith(uB)) {
        const IB = BB.slice(0, -14);
        return void 0 !== rB[IB] ? IB : null
      }
      return null
    }

    function AB(BB) {
      return !0 === BB.mobFarm
    }

    function tB(BB, IB) {
      return XB[rB[IB]] * BB.opMs / 1e3
    }
    const bB = new Map;
    const xB = "baf2islands",
      EB = "baf2islandnew";

    function DB(BB) {
      const IB = JB.findIndex((IB => IB.unlocks.includes(BB)));
      return IB < 0 ? 1 : IB + 1
    }

    function KB(BB) {
      return Math.floor(BB).toLocaleString("en-US")
    }
    var VB = ZB(38468);
    const SB = "baf2terminaltake",
      BI = "baf2terminalput",
      II = ["one", "stack", "fill"];

    function ZI(BB, IB, ZB) {
      return `${SB} ${BB} ${IB} ${ZB}`
    }

    function TI(BB, IB, ZB) {
      return `${BI} ${BB} ${IB} ${ZB}`
    }

    function JI(BB) {
      return `${BI} ${BB}`
    }
    const oI = [
      [`${SB} `, "take"],
      [`${BI} `, "put"]
    ];

    function GI(BB) {
      const IB = oI.find((IB => {
        let [ZB] = IB;
        return BB.startsWith(ZB)
      }));
      if (!IB) return null;
      const [ZB, TB] = IB, [JB, oB, ...GB] = BB.slice(ZB.length).trim().split(" "), vB = Number(JB);
      if (!Number.isSafeInteger(vB) || vB <= 0) return null;
      if ("put" === TB && void 0 === oB) return {
        kind: "putAll",
        seq: vB
      };
      const kB = function(BB) {
        if (II.includes(BB)) return BB;
        const IB = Number(BB);
        return /^\d+$/.test(BB) && Number.isSafeInteger(IB) && IB > 0 ? IB : null
      }(null !== oB && void 0 !== oB ? oB : "");
      return null === kB || 0 === GB.length ? null : {
        kind: TB,
        seq: vB,
        mode: kB,
        item: GB.join(" ")
      }
    }

    function vI(BB, IB) {
      const ZB = "number" === typeof BB ? BB : "one" === BB ? 1 : "stack" === BB ? 99 : IB;
      return Math.min(IB, ZB)
    }

    function kI(BB, IB) {
      const ZB = BB => "number" === typeof BB ? BB : "one" === BB ? 1 : 99;
      return "fill" === BB || "fill" === IB ? "fill" : ZB(BB) + ZB(IB)
    }

    function cI(BB, IB) {
      const ZB = GI(BB),
        TB = GI(IB),
        JB = ZB && TB ? function(BB, IB) {
          return "take" === BB.kind || "take" === IB.kind ? "take" === BB.kind && "take" === IB.kind && BB.item === IB.item ? {
            ...IB,
            mode: kI(BB.mode, IB.mode)
          } : null : "putAll" === BB.kind || "putAll" === IB.kind ? {
            kind: "putAll",
            seq: IB.seq
          } : BB.item === IB.item ? {
            ...IB,
            mode: kI(BB.mode, IB.mode)
          } : null
        }(ZB, TB) : null;
      return JB ? "putAll" === (oB = JB).kind ? JI(oB.seq) : "put" === oB.kind ? TI(oB.seq, oB.mode, oB.item) : ZI(oB.seq, oB.mode, oB.item) : null;
      var oB
    }
    const nI = "baf2rx";

    function hI(BB, IB) {
      for (var ZB = arguments.length, TB = new Array(ZB > 2 ? ZB - 2 : 0), JB = 2; JB < ZB; JB++) TB[JB - 2] = arguments[JB];
      return [nI, BB[0], BB[1], BB[2], IB, ...TB].join(" ")
    }
    const zI = 2,
      FI = 4,
      NI = 8,
      gI = 16,
      qI = 32,
      yI = 64,
      UI = 128,
      WI = 256,
      dI = 512,
      CI = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      QI = [{
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
    const sI = "Biomass",
      wI = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function OI(BB) {
      return {
        input: sI,
        inputAmount: 1,
        output: BB,
        outputAmount: 1
      }
    }
    const YI = "baf2synth",
      iI = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      pI = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      aI = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      HI = function(BB, IB) {
        return {
          input: BB,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: IB,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      MI = function(BB, IB) {
        return {
          ...HI(BB, IB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      jI = pI.map((BB => MI(BB, "Biomass", 2))),
      PI = {
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
          recipes: [HI("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), HI("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), HI("Raw Gold", "Gold Grit", 2), HI("Messy Stone", "Sand"), HI("Gravel", "Sand"), HI("Raw Voltite", "Voltite Dust", 2), HI("Moonstone", "Moonstone Dust", 4), HI("Wheat Seeds", "Fertiliser"), HI("Raw Uranium", "Uranium Grit", 2), MI("Mossy Messy Stone", "Sand"), ...jI],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [HI("Iron Grit", "Iron Bar"), HI("Copper Grit", "Copper Bar"), HI("Gold Grit", "Gold Bar"), HI("Raw Iron", "Iron Bar"), HI("Raw Copper", "Copper Bar"), HI("Raw Gold", "Gold Bar"), HI("Sand", "Glass"), HI("Messy Stone", "Stone"), ...PB.Vc.map((BB => HI(BB, "Charcoal", 1, 4))), HI("Wheat", "Bread", 1, 2), ...pI.map(((BB, IB) => MI(BB, aI[IB])))],
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
          recipes: [HI("Iron Bar", "Iron Plate"), HI("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [HI("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [HI("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [HI("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), HI("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), HI("Raw Gold", "Gold Grit", 3), HI("Raw Voltite", "Voltite Dust", 3), HI("Messy Stone", "Sand", 2), HI("Gravel", "Sand", 2), HI("Moonstone", "Moonstone Dust", 6), HI("Raw Uranium", "Uranium Grit", 3), MI("Mossy Messy Stone", "Sand", 2), ...jI],
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
          table: CI
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [HI("Coal", "Diamond", 1, 24), HI("Voltite Dust", "Moonstone", 1, 12)],
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
        ...VB.h
      },
      RI = {
        Crusher: [HI("Spent Pellet", "Glow Dust"), HI("Wheat Seeds", "Biomass"), HI("Wheat", "Biomass"), HI("Dead Bush", "Biomass"), HI("Dusk Moss", "Biomass"), HI("Rotten Flesh", "Biomass"), HI("Bone", "Biomass", 2)],
        "Shatter Mill": [HI("Spent Pellet", "Glow Dust"), HI("Wheat Seeds", "Biomass"), HI("Wheat", "Biomass"), HI("Dead Bush", "Biomass"), HI("Dusk Moss", "Biomass"), HI("Rotten Flesh", "Biomass"), HI("Bone", "Biomass", 2), ...PB.Vc.map((BB => HI(BB, "Biomass")))],
        Smelter: [HI("Biomass", "Fertiliser", 2)],
        Press: [HI("Coal", "Graphite", 1, 4)]
      },
      rI = "Power Coupler",
      mI = "Advanced Coupler",
      XI = "Nova Coupler",
      LI = [{
        item: rI,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: mI,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: XI,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const eI = new Map;

    function uI(BB) {
      var IB, ZB;
      return null !== (IB = null !== (ZB = BB.fuelSlot) && void 0 !== ZB ? ZB : BB.couplerSlot) && void 0 !== IB ? IB : null
    }

    function fI(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!BB.couplable) throw new Error(`${BB.kind} takes no Power Coupler`);
      let ZB = eI.get(BB);
      ZB || (ZB = [], eI.set(BB, ZB));
      let TB = ZB[IB];
      if (!TB) {
        var JB;
        const {
          divisor: oB,
          powerPerS: GB
        } = LI[IB - 1], vB = BB.opMs / oB, kB = void 0 !== BB.fluidMade || void 0 !== BB.cryoMade ? BB.powerPerOp : GB * vB / 1e3;
        TB = {
          ...BB,
          fuelSlot: null,
          couplerSlot: null !== (JB = uI(BB)) && void 0 !== JB ? JB : void 0,
          opMs: vB,
          powerPerOp: kB,
          coupled: !0
        }, IB > 1 && (TB = {
          ...TB,
          couplerLevel: IB
        }), ZB[IB] = TB
      }
      return TB
    }
    const lI = new Map;
    const AI = new Map;

    function tI(BB, IB) {
      if (null === IB || (ZB = IB, !wI.includes(ZB))) return BB;
      var ZB;
      let TB = AI.get(IB);
      return TB || (TB = {
        ...BB,
        recipes: [OI(IB)]
      }, AI.set(IB, TB)), TB
    }

    function bI(BB) {
      return !0 === BB.synth
    }
    const xI = (BB, IB, ZB, TB) => ({
        output: BB,
        outputAmount: IB,
        tier: ZB,
        inputs: TB.map((BB => {
          let [IB, ZB] = BB;
          return {
            item: IB,
            amount: ZB
          }
        }))
      }),
      EI = Object.fromEntries([xI("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), xI("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), xI("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), xI("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), xI("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), xI("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), xI("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), xI("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), xI("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), xI("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), xI("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), xI("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), xI("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), xI("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), xI("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), xI("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), xI("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), xI("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), xI("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), xI("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), xI("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), xI("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), xI("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), xI("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), xI("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), xI("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), xI("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), xI("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), xI("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), xI("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((BB => [BB.output, BB]))),
      DI = new Map;

    function KI(BB, IB) {
      let ZB = PI[BB];
      if (IB.atomic && (ZB = function(BB) {
          const IB = RI[BB.kind];
          if (!IB) return BB;
          let ZB = lI.get(BB.kind);
          if (!ZB) {
            const TB = new Set(IB.map((BB => BB.input))),
              JB = BB.recipes.filter((BB => !TB.has(BB.input)));
            ZB = {
              ...BB,
              recipes: [...JB, ...IB]
            }, lI.set(BB.kind, ZB)
          }
          return ZB
        }(ZB)), ZB.synth) return tI(ZB, IB.taught);
      if (IB.coupled && ZB.couplable) return fI(ZB, IB.level);
      const TB = ZB.inputSlots && null !== IB.taught ? EI[IB.taught] : void 0;
      if (!TB) return ZB;
      const JB = `${BB}|${TB.output}`;
      let oB = DI.get(JB);
      return oB || (oB = {
        ...ZB,
        bench: TB
      }, DI.set(JB, oB)), oB
    }
    const VI = ["Diamond", "Moonstone"];

    function SI(BB) {
      return new Set(BB.flatMap((BB => BB.bonus ? [BB.output, BB.bonus.item] : [BB.output])).filter((BB => !VI.includes(BB))))
    }
    const BZ = Object.values(PI).flatMap((BB => BB.recipes));
    SI(BZ.filter((BB => !0 !== BB.nuclear))), SI([...BZ.filter((BB => !0 === BB.nuclear)), ...Object.values(RI).flat()]);

    function IZ(BB) {
      return null === BB.inputSlot && void 0 === BB.inputSlots && void 0 === BB.powerMade && void 0 === BB.fluidMade && !BB.treeCutter && void 0 === BB.table
    }

    function ZZ(BB) {
      return !0 === BB.treeCutter
    }
    const TZ = ["Voltite Cell"];

    function JZ(BB) {
      var IB, ZB;
      return null !== (IB = null === (ZB = BB.fuels) || void 0 === ZB ? void 0 : ZB.some((BB => TZ.includes(BB)))) && void 0 !== IB && IB
    }
    const oZ = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(PB.Vc.map((BB => [BB, 8e3]))),
        ...Object.fromEntries(PB.Fd.map((BB => [BB, 2e3]))),
        "Voltite Cell": 12e4
      },
      GZ = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      vZ = {
        "Uranium Deposit": 4e3
      };

    function kZ(BB) {
      var IB;
      return null !== (IB = Object.keys(GZ).find((IB => GZ[IB] === BB))) && void 0 !== IB ? IB : null
    }

    function cZ(BB) {
      return iI.includes(BB)
    }

    function nZ(BB) {
      return !0 !== BB.nuclear || vB()
    }
    var hZ = ZB(342);
    var zZ = ZB(9375),
      FZ = ZB(9304),
      NZ = ZB(9380),
      gZ = ZB(9373);
    const qZ = "Reactor Controller",
      yZ = "Reactor Port",
      UZ = "Battery Cell",
      WZ = ["fuel", "water", "waste"],
      dZ = {
        fuel: yZ,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      CZ = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      QZ = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      sZ = "Reactor Frame",
      wZ = "Reactor Glass",
      OZ = {
        edge: [sZ],
        cap: [wZ, yZ],
        wall: [wZ, yZ],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [qZ]
      },
      YZ = {
        edge: [UZ],
        cap: [UZ],
        wall: [UZ],
        inside: [UZ],
        ctrl: [UZ]
      },
      iZ = ["edge", "cap", "wall", "inside"],
      pZ = ["Reactor Slag"];

    function aZ(BB) {
      return pZ.includes(HZ(BB))
    }

    function HZ(BB) {
      const IB = BB.indexOf("|");
      return IB < 0 ? BB : BB.slice(0, IB)
    }

    function MZ(BB) {
      return HZ(BB) === qZ ? "reactor" : null
    }

    function jZ(BB) {
      return HZ(BB) !== yZ ? null : BB.endsWith("|Water") ? "water" : BB.endsWith("|Waste") ? "waste" : "fuel"
    }

    function PZ(BB) {
      const IB = jZ(BB);
      return null === IB ? null : mZ(dZ[WZ[(WZ.indexOf(IB) + 1) % WZ.length]], function(BB) {
        return BB.includes(RZ)
      }(BB))
    }
    const RZ = "|meta|rot1|Formed",
      rZ = new Set([sZ, wZ, yZ]);

    function mZ(BB, IB) {
      var ZB;
      const TB = HZ(BB);
      if (!rZ.has(TB)) return BB;
      if (TB !== yZ) return IB ? TB + RZ : TB;
      const JB = null !== (ZB = jZ(BB)) && void 0 !== ZB ? ZB : "fuel";
      return IB ? "fuel" === JB ? TB + RZ : `${TB}${RZ}|${"water"===JB?"Water":"Waste"}` : dZ[JB]
    }

    function XZ(BB, IB) {
      const ZB = TT(BB, IB);
      if ("Air" === ZB) return !1;
      const TB = "reactor" === BB ? OZ : YZ;
      return iZ.some((BB => TB[BB].includes(ZB))) || "reactor" === BB && pZ.includes(ZB)
    }

    function LZ(BB) {
      return QZ[BB]
    }

    function eZ(BB) {
      var IB;
      return null !== (IB = CZ[BB]) && void 0 !== IB ? IB : CZ[1]
    }

    function uZ(BB) {
      const [IB, , ZB] = eZ(BB);
      return [ZB, 0, -IB]
    }

    function fZ(BB, IB, ZB, TB, JB, oB) {
      return {
        ctrl: [BB[0], BB[1], BB[2]],
        rot: CZ[IB] ? IB : 1,
        w: ZB,
        h: TB,
        d: JB,
        cu: oB[0],
        cv: oB[1]
      }
    }

    function lZ(BB, IB) {
      return "reactor" === BB ? [Math.floor((IB - 1) / 2), 0] : [0, 0]
    }

    function AZ(BB, IB, ZB, TB, JB) {
      let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB.rot;
      if (ZB === BB.w && TB === BB.h && JB === BB.d && oB === BB.rot) return BB;
      const [GB] = lZ(IB, BB.w);
      if (BB.cu === GB && BB.cv <= 1) return fZ(BB.ctrl, oB, ZB, TB, JB, lZ(IB, ZB));
      const vB = (BB, IB) => Math.max(1, Math.min(IB, BB));
      return fZ(BB.ctrl, oB, ZB, TB, JB, [vB(BB.cu, ZB - 2), 0 === BB.cv ? 0 : vB(BB.cv, TB - 2)])
    }
    const tZ = 11,
      bZ = 2 * tZ + 1;
    new Uint8Array(bZ * bZ * bZ);

    function xZ(BB) {
      return BB.w * BB.h * BB.d
    }

    function EZ(BB) {
      const IB = uZ(BB.rot);
      return [BB.ctrl[0] - IB[0] * BB.cu, BB.ctrl[1] - BB.cv, BB.ctrl[2] - IB[2] * BB.cu]
    }

    function DZ(BB) {
      return BB.cv * BB.d * BB.w + BB.cu
    }

    function KZ(BB, IB) {
      const ZB = IB % BB.w,
        TB = Math.floor(IB / BB.w) % BB.d;
      return [ZB, Math.floor(IB / (BB.w * BB.d)), TB]
    }

    function VZ(BB, IB) {
      const [ZB, TB, JB] = KZ(BB, IB), oB = EZ(BB), GB = eZ(BB.rot), vB = uZ(BB.rot);
      return [oB[0] + vB[0] * ZB - GB[0] * JB, oB[1] + TB, oB[2] + vB[2] * ZB - GB[2] * JB]
    }

    function SZ(BB, IB) {
      const ZB = EZ(BB),
        TB = eZ(BB.rot),
        JB = uZ(BB.rot),
        oB = IB[0] - ZB[0],
        GB = IB[2] - ZB[2],
        vB = oB * JB[0] + GB * JB[2],
        kB = -(oB * TB[0] + GB * TB[2]),
        cB = IB[1] - ZB[1];
      return vB < 0 || vB >= BB.w || cB < 0 || cB >= BB.h || kB < 0 || kB >= BB.d ? -1 : (cB * BB.d + kB) * BB.w + vB
    }

    function BT(BB, IB) {
      if (IB === DZ(BB)) return "ctrl";
      const [ZB, TB, JB] = KZ(BB, IB), oB = 0 === TB || TB === BB.h - 1, GB = Number(0 === ZB || ZB === BB.w - 1) + Number(oB) + Number(0 === JB || JB === BB.d - 1);
      return GB >= 2 ? "edge" : 1 === GB ? oB ? "cap" : "wall" : "inside"
    }

    function IT(BB, IB) {
      const [ZB, TB, JB] = KZ(BB, IB);
      return 0 === ZB || ZB === BB.w - 1 || 0 === TB || TB === BB.h - 1 || 0 === JB || JB === BB.d - 1 ? -1 : ((TB - 1) * (BB.d - 2) + (JB - 1)) * (BB.w - 2) + (ZB - 1)
    }

    function ZT(BB, IB) {
      const ZB = BB.w - 2,
        TB = BB.d - 2,
        JB = IB % ZB + 1,
        oB = Math.floor(IB / ZB) % TB + 1;
      return ((Math.floor(IB / (ZB * TB)) + 1) * BB.d + oB) * BB.w + JB
    }

    function TT(BB, IB) {
      const ZB = HZ(IB);
      return "reactor" === BB && ZB === qZ ? sZ : ZB
    }

    function JT(BB, IB, ZB) {
      const TB = "ctrl" === IB ? HZ(ZB) : TT(BB, ZB);
      return ("reactor" === BB ? OZ : YZ)[IB].includes(TB) ? "ok" : "Air" === TB ? "missing" : XZ(BB, ZB) ? "wrong" : "blocked"
    }

    function oT(BB, IB) {
      return "battery" === BB ? UZ : "inside" === IB ? null : function(BB, IB) {
        if ("inside" === IB || "ctrl" === IB || "battery" === BB) return null;
        return "edge" === IB ? sZ : wZ
      }(BB, IB)
    }
    const GT = {
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
      vT = "Collider",
      kT = "Laser",
      cT = "Star Alloy",
      nT = "Glow Dust",
      hT = [vT, "_Collider Focus"];

    function zT(BB) {
      return hT.indexOf(HZ(BB))
    }

    function FT(BB) {
      return HZ(BB) === kT
    }

    function NT(BB) {
      return [
        [BB[0], BB[1], BB[2]],
        [BB[0], BB[1] + 1, BB[2]]
      ]
    }
    const gT = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function qT(BB, IB, ZB) {
      const TB = gT[IB];
      return [BB[0] + TB[0] * ZB, BB[1], BB[2] + TB[2] * ZB]
    }

    function yT(BB, IB) {
      if (IB[1] !== BB[1]) return null;
      const ZB = IB[0] - BB[0],
        TB = IB[2] - BB[2];
      if (0 !== ZB === (0 !== TB)) return null;
      const JB = Math.abs(ZB + TB);
      if (JB > GT.LASER_D) return null;
      return {
        dir: TB < 0 ? 0 : ZB > 0 ? 1 : TB > 0 ? 2 : 3,
        uG: JB
      }
    }

    function UT(BB, IB, ZB) {
      const TB = IB => Math.abs(BB[0] - IB[0]) <= 1 && Math.abs(BB[1] - IB[1]) <= 1;
      return TB(IB) || TB(ZB)
    }

    function WT(BB, IB) {
      return function(BB, IB, ZB, TB) {
        return [0, 1, 2, 3].map((JB => {
          for (let oB = 1; oB <= GT.LASER_D; oB++) {
            const GB = qT(BB, JB, oB);
            if (UT([GB[0], GB[2]], IB, ZB) || !TB(GB)) return !1
          }
          return !0
        }))
      }(NT(BB)[1], IB.spawnXZ, IB.coreXZ, (BB => BB[1] >= zZ.o && BB[1] < zZ.o + zZ.s && BB[0] >= IB.minXZ[0] && BB[0] <= IB.maxXZ[0] && BB[2] >= IB.minXZ[1] && BB[2] <= IB.maxXZ[1]))
    }
    const dT = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function CT(BB) {
      return Math.max(48 + 16 * BB, yB(BB).machineAllowance)
    }
    const QT = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function sT(BB) {
      const IB = BB.split("|")[0];
      return QT.includes(IB) ? "Solar Panel" : IB === NZ.d ? "Fluid Pipe" : zT(IB) >= 0 ? "Collider" : (ZB = IB, dT.includes(ZB) ? IB : null);
      var ZB
    }
    const wT = "buildAFactory2Game:solarPanelDescription";
    const OT = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function YT(BB, IB) {
      var ZB;
      return null !== (ZB = OT.find((ZB => {
        var TB;
        return (null !== (TB = BB.level(ZB)) && void 0 !== TB ? TB : 0) >= IB
      }))) && void 0 !== ZB ? ZB : null
    }
    const iT = "buildAFactory2Game:";
    let pT = null;
    const aT = {
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
      HT = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      MT = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      jT = {
        "Loot Chest": `${iT}lookRuinChestName`
      };

    function PT(BB) {
      return "object" === typeof BB && null !== BB && "translationKey" in BB && "string" === typeof BB.translationKey ? BB.translationKey : null
    }

    function RT(BB, IB) {
      var ZB;
      return null !== (ZB = PT(BB.displayName(IB))) && void 0 !== ZB ? ZB : `item:${(0,PB.Ee)(IB)}`
    }

    function rT(BB, IB) {
      var ZB, TB, JB, oB;
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IB;
      if ("Solar Panel" === sT(IB)) return {
        name: PT(BB.displayName("Solar Panel")),
        detail: wT,
        detailItem: null
      };
      const kB = IB.endsWith(" Ore"),
        cB = (pT ??= new Set([...Object.keys((0, FZ.e)()), ...Object.keys((0, NZ.s)())].map((BB => BB.split("|")[0]))), pT).has(IB),
        nB = kB || cB ? null : function(BB) {
          var IB;
          return BB.endsWith(" Log") && !BB.startsWith("Barkless ") ? "lookLog" : BB.endsWith(" Sapling") ? "lookSapling" : BB.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (IB = aT[BB]) && void 0 !== IB ? IB : null
        }(IB);
      if (!BB.isBlock(IB) || !kB && !cB && null === nB) return null;
      const hB = null !== (ZB = null !== (TB = jT[IB]) && void 0 !== TB ? TB : PT(null !== (JB = BB.displayName(GB)) && void 0 !== JB ? JB : BB.displayName(IB))) && void 0 !== ZB ? ZB : `item:${(0,PB.Ee)(IB)}`;
      if (null !== nB) return {
        name: hB,
        detail: `${iT}${nB}`,
        detailItem: null
      };
      const zB = null !== (oB = HT[IB]) && void 0 !== oB ? oB : vB() ? MT[IB] : void 0;
      if (cB && void 0 !== zB) return {
        name: hB,
        detail: `${iT}${zB}`,
        detailItem: null
      };
      const FB = GZ[IB];
      if (void 0 !== FB) return {
        name: hB,
        detail: `${iT}lookDeposit`,
        detailItem: RT(BB, FB)
      };
      const NB = BB.harvestLevel(IB);
      if (kB && "rock" === BB.harvestType(IB) && 0 !== NB) {
        const IB = YT(BB, null !== NB && void 0 !== NB ? NB : 0);
        if (IB === OT[0]) return {
          name: hB,
          detail: `${iT}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== IB) return {
          name: hB,
          detail: `${iT}lookPickaxe`,
          detailItem: RT(BB, IB)
        }
      }
      return {
        name: hB,
        detail: PT(BB.description(IB)),
        detailItem: null
      }
    }

    function mT(BB) {
      return BB < zZ.o - 24
    }
    const XT = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const LT = "Wrench",
      eT = "Nova Wrench";

    function uT(BB) {
      return BB === LT || BB === eT
    }
    const fT = [...zZ.J, "Belt Lift", "Belt Drop"];
    const lT = ["Belt Lift", "Belt Drop"],
      AT = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function tT(BB) {
      return BB.split("|")[0]
    }

    function bT(BB) {
      const IB = /\|rot(\d)/.exec(BB);
      return IB ? Number(IB[1]) : 1
    }

    function xT(BB) {
      return BB % 4 + 1
    }

    function ET(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === IB && "" === ZB ? BB : `${BB}|meta|rot${IB}${ZB}`
    }

    function DT(BB) {
      return tT(BB) === zZ.y ? (0, zZ.V)(BB) ? "gateRight" : "gateLeft" : (0, zZ.X)(BB)
    }

    function KT(BB) {
      const IB = tT(BB),
        ZB = bT(BB);
      if (zZ.J.includes(IB)) return (0, zZ.N)(IB, xT(ZB), null);
      if (IB === zZ.g) return (0, zZ.ab)(xT(ZB), (0, zZ.W)(BB));
      if (IB === zZ.A) {
        const TB = AT[(0, zZ.X)(BB)];
        return null === TB ? ET(IB, xT(ZB)) : ET(IB, ZB, zZ.E[TB])
      }
      return IB === zZ.y ? (0, zZ.V)(BB) ? ET(IB, xT(ZB)) : ET(IB, ZB, zZ.k) : gZ.d.includes(IB) && !lT.includes(IB) || cZ(IB) ? ET(IB, xT(ZB)) : null
    }

    function VT(BB) {
      return gZ.d.includes(BB) || cZ(BB) || null !== sT(BB)
    }

    function ST(BB) {
      return "Solar Panel" === sT(BB)
    }
    const BJ = "buildAFactory2Game:",
      IJ = {
        leftFront: `${BJ}lookSplitDetail_leftFront`,
        frontRight: `${BJ}lookSplitDetail_frontRight`,
        gateRight: `${BJ}lookGateDetail_gateRight`
      };

    function ZJ(BB, IB) {
      var ZB;
      let TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const JB = DT(BB),
        oB = null === JB ? null : `${BJ}${JB.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${JB}`,
        GB = null === JB ? null : null !== (ZB = IJ[JB]) && void 0 !== ZB ? ZB : null;
      if (uT(IB) && TB) {
        const ZB = tT(BB);
        return IB === eT && vB() && function(BB) {
          return fT.includes(tT(BB))
        }(BB) ? {
          mode: oB,
          detail: GB,
          next: `${BJ}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: oB,
          detail: GB,
          next: VT(ZB) && !ST(ZB) ? `${BJ}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const kB = uT(IB) ? KT(BB) : null;
      if (null === kB) return {
        mode: oB,
        detail: GB,
        next: null,
        nextState: null
      };
      const cB = DT(kB);
      return null === cB || bT(kB) !== bT(BB) ? {
        mode: oB,
        detail: GB,
        next: `${BJ}lookWrenchTurn`,
        nextState: null
      } : {
        mode: oB,
        detail: GB,
        next: `${BJ}lookWrenchNext`,
        nextState: `${BJ}lookWrenchState_${cB}`
      }
    }
    const TJ = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const JJ = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function oJ(BB) {
      return [0, 1, 2, 3].map((IB => 0 !== (BB & 1 << IB)))
    }

    function GJ(BB) {
      const IB = [];
      for (let ZB = 8; ZB + 2 < BB.length; ZB += 3) IB.push([BB[ZB], BB[ZB + 1], BB[ZB + 2]]);
      return {
        focus: [BB[0], BB[1], BB[2]],
        lasers: oJ(BB[3]),
        open: oJ(BB[4]),
        live: oJ(BB[5]),
        on: 1 === BB[6],
        state: JJ[BB[7]],
        blockers: IB
      }
    }
    const vJ = "Arc Caster",
      kJ = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      cJ = (Object.values(kJ), "Jet Chestplate"),
      nJ = "Nova Jet Chestplate",
      hJ = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      zJ = Object.values(hJ);

    function FJ(BB, IB, ZB) {
      return Math.min(function(BB) {
        return vB() && hB(BB) >= 5 ? 20 : 10
      }(ZB), Math.floor(function(BB, IB) {
        return Math.max(0, BB) + (vB() ? Math.max(0, IB) : 0)
      }(BB, IB) / 5))
    }

    function NJ(BB, IB, ZB) {
      const TB = FJ(IB, ZB, BB),
        JB = hB(BB),
        oB = (JB >= 3 ? 55 : JB >= 1 ? 50 : BB >= 8 ? 45 : 30) + TB,
        GB = Math.max(100 + TB, 2 * oB);
      return {
        arcDamage: oB,
        arcPierce: BB >= 7 ? 2 : 1,
        arcChain: BB >= 10,
        barrierMax: (JB >= 4 ? 100 : JB >= 2 ? 90 : BB >= 9 ? 80 : BB >= 6 ? 60 : 40) + 5 * TB,
        barrierRegenPerS: JB >= 5 ? 20 : BB >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * TB,
        novaShieldRegenPerS: 32,
        bladeDamage: GB,
        bladePunch: Math.round(.5 * GB),
        forgeRank: TB
      }
    }
    const gJ = {
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
    var qJ = ZB(36856),
      yJ = ZB(36625),
      UJ = ZB(36619),
      WJ = ZB(20),
      dJ = ZB(1711),
      CJ = ZB(1091),
      QJ = ZB.n(CJ);

    function sJ(BB) {
      return !0 === BB.field
    }
    const wJ = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function OJ(BB) {
      return wJ.has(BB) ? `buildAFactory2Game:itemPlural_${(0,PB.Ee)(BB)}` : null
    }
    var YJ = ZB(1248),
      iJ = ZB(1102),
      pJ = ZB(1979),
      aJ = ZB(1960),
      HJ = ZB(1457),
      MJ = ZB(36851),
      jJ = ZB(24),
      PJ = ZB(36846);
    const RJ = "baf2QuestView",
      rJ = "baf2PlayerY",
      mJ = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class XJ {
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
      set(BB, IB) {
        var ZB, TB, JB, oB, GB, vB, kB, cB;
        const nB = JSON.stringify(BB.baf2QuestName) === JSON.stringify(this.view.name),
          hB = new Set(this.view.rows.filter((BB => BB.done)).map((BB => BB.id))),
          zB = new Set(this.view.rows.filter((BB => BB.justFinished)).map((BB => BB.id))),
          FB = BB.baf2QuestSide,
          NB = null !== FB && !0 === BB.baf2QuestSideFocus;
        let gB = !1,
          qB = 0;
        const yB = BB.baf2QuestSteps.map((BB => {
            const IB = bJ(BB, mJ.has(BB[0]) ? BB[0] : "" + qB++),
              ZB = nB && IB.done && !hB.has(IB.id);
            return IB.justFinished = ZB || nB && IB.done && zB.has(IB.id), gB ||= ZB, IB
          })),
          UB = tJ(yB);
        UB >= 0 && !NB && (yB[UB].current = !0);
        const WB = !nB && null !== BB.baf2QuestName,
          dB = JSON.stringify(FB && [FB[0], FB[1]]),
          CB = dB === JSON.stringify(null !== (ZB = null === (TB = this.view.side) || void 0 === TB ? void 0 : TB.name) && void 0 !== ZB ? ZB : null),
          QB = null !== FB && !this.sidesSeen.has(dB);
        QB && this.sidesSeen.add(dB), this.serverTutorial = null !== (JB = BB.baf2QuestTutorial) && void 0 !== JB ? JB : "on", (null !== (oB = BB.baf2QuestTutorialSeq) && void 0 !== oB ? oB : 0) >= this.pickSeq && this.endPick();
        const sB = !nB || !CB || BB.baf2QuestTier !== this.view.tier;
        this.view = {
          name: BB.baf2QuestName,
          rows: yB,
          reward: BB.baf2QuestReward,
          goal: BB.baf2QuestGoal,
          pulse: this.view.pulse + (gB || WB ? 1 : 0),
          itemNames: IB,
          side: FB && {
            name: [FB[0], FB[1]],
            row: {
              ...bJ(FB[2], "side"),
              current: NB
            },
            goal: null !== (GB = FB[3]) && void 0 !== GB ? GB : null
          },
          sideCameUpAt: QB ? Date.now() : this.view.sideCameUpAt,
          tier: BB.baf2QuestTier,
          core: BB.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (vB = BB.baf2QuestAlso) && void 0 !== vB ? vB : [],
          depth: null !== (kB = BB.baf2QuestDepth) && void 0 !== kB ? kB : null,
          tutorial: null !== (cB = this.pickedTutorial) && void 0 !== cB ? cB : this.serverTutorial,
          tutorialKnown: !0
        }, this.Gq(), gB && this.scheduleClear(), sB && this.requestBook()
      }
      setTutorial(BB) {
        return this.endPick(), this.pickedTutorial = BB, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.Gq()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: BB
        }, this.Gq(), this.pickSeq
      }
      onPlayerY(BB) {
        const IB = Math.floor(BB);
        IB !== this.playerY && (this.playerY = IB, this.view.depth && jJ.l.Gq(rJ, IB))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(BB) {
        this.view = {
          ...this.view,
          chapters: BB.baf2BookChapters
        }, this.Gq()
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
          }, this.Gq()
        }), 2400)
      }
      Gq() {
        jJ.l.Gq(RJ, this.view, !0)
      }
    }

    function LJ(BB, IB) {
      return BB.sideCameUpAt > 0 && IB - BB.sideCameUpAt < 2400
    }

    function eJ(BB) {
      return (null === BB.name || uJ(BB)) && null === BB.side && null !== BB.chapters
    }

    function uJ(BB) {
      var IB;
      return "quest_forgeOngoing" === (null === (IB = BB.name) || void 0 === IB ? void 0 : IB[0])
    }

    function fJ(BB) {
      return BB.filter((BB => !mJ.has(BB.key)))
    }

    function lJ(BB) {
      return BB.key.startsWith("stepCraft")
    }

    function AJ(BB, IB) {
      const ZB = new Set,
        TB = BB.side ? [...BB.rows, BB.side.row] : BB.rows;
      for (const oB of TB)
        if (!oB.done) {
          !oB.item || IB && !lJ(oB) || ZB.add(oB.item);
          for (const [BB, IB, TB] of null !== (JB = oB.chips) && void 0 !== JB ? JB : []) {
            var JB;
            IB < TB && ZB.add(BB)
          }
        } return ZB
    }

    function tJ(BB) {
      const IB = BB.findIndex((BB => !BB.done && !BB.away));
      return IB >= 0 ? IB : BB.findIndex((BB => !BB.done))
    }

    function bJ(BB, IB) {
      let [ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB] = BB;
      return {
        id: IB,
        key: ZB,
        params: TB,
        item: JB,
        amount: oB,
        total: GB,
        done: vB,
        chips: null !== kB && void 0 !== kB ? kB : null,
        current: !1,
        away: !0 === cB,
        madeFor: null !== nB && void 0 !== nB ? nB : [],
        also: null !== hB && void 0 !== hB ? hB : [],
        justFinished: !1
      }
    }
    const xJ = "baf2QuestItems",
      EJ = new Set;
    let DJ = new Set,
      KJ = null;

    function VJ(BB) {
      const IB = jB(BB.tutorial),
        ZB = IB ? AJ(BB, !0) : EJ;
      "inventory" === WJ.d.get("openInGameMenuName") ? (KJ = null, (0, PJ.s)(ZB)) : KJ = ZB;
      const TB = IB ? AJ(BB, !1) : EJ;
      (0, MJ.b)(TB, DJ) || (DJ = TB, jJ.l.Gq(xJ, DJ))
    }

    function SJ() {
      return (0, HJ.e)(xJ, (() => DJ))
    }
    var Bo = ZB(34211),
      Io = ZB(3461);

    function Zo(BB) {
      const IB = (0, Io.c)(BB),
        ZB = void 0 === IB ? void 0 : (0, Bo.displayNameOf)(IB);
      return "object" === typeof ZB && null !== ZB && "translationKey" in ZB && "string" === typeof ZB.translationKey ? ZB.translationKey : `item:${(0,PB.Ee)(BB)}`
    }

    function To(BB, IB) {
      return BB(Zo(IB))
    }
    const Jo = [{
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

    function oo(BB, IB) {
      return [`Deposit Seed (${BB})`, {
        item: GZ[`${BB} Deposit`],
        amount: IB
      }]
    }
    const Go = Object.fromEntries([oo("Coal", 8), oo("Iron", 8), oo("Copper", 8), oo("Gold", 6), oo("Voltite", 4), oo("Uranium", 4)]),
      vo = "Relay Coil",
      ko = new Map;

    function co(BB) {
      let IB = ko.get(BB);
      if (!IB) {
        const ZB = Math.max(1, BB);
        IB = Jo.filter((BB => {
          var IB;
          return ZB >= BB.fromTier && ZB <= (null !== (IB = BB.untilTier) && void 0 !== IB ? IB : 1 / 0)
        })).map((BB => BB.later && ZB >= BB.later.tier ? {
          ...BB,
          weight: BB.later.weight
        } : BB)), ko.set(BB, IB)
      }
      return IB
    }

    function no(BB) {
      return co(BB).some((BB => {
        let {
          item: IB
        } = BB;
        return IB === vo
      }))
    }

    function ho(BB) {
      return BB.startsWith("Deposit Seed (")
    }

    function zo(BB, IB) {
      const ZB = co(BB);
      return IB ? ZB.filter((BB => IB(BB.item))) : ZB
    }

    function Fo(BB) {
      return BB.reduce(((BB, IB) => BB + IB.weight), 0)
    }

    function No(BB, IB) {
      const ZB = zo(BB, IB),
        TB = Fo(ZB);
      return ZB.map((BB => ({
        find: BB,
        chance: BB.weight / TB
      })))
    }
    const go = 6e4,
      qo = new Intl.NumberFormat("en-US");

    function yo(BB, IB) {
      const ZB = BB >= 10 ? Math.round(BB) : Math.round(10 * BB) / 10;
      return 0 === ZB ? "0" : `${IB}${qo.format(ZB)}`
    }

    function Uo(BB) {
      return BB < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? qo.format(BB) : BB < 1e6 ? `${BB<1e5?Math.floor(BB/100)/10:Math.floor(BB/1e3)}k` : Math.floor(BB / 1e5) / 10 + "M"
    }

    function Wo(BB) {
      return BB < 0 ? "\u2212" + -BB : String(BB)
    }

    function Co(BB, IB) {
      const ZB = Math.max(1, Math.round(IB));
      if (ZB < 60) return BB("buildAFactory2Game:durationSeconds", {
        seconds: String(ZB)
      });
      const TB = Math.round(ZB / 60);
      if (TB < 60) return BB("buildAFactory2Game:durationMinutes", {
        minutes: String(TB)
      });
      const JB = String(Math.floor(TB / 60));
      return TB % 60 === 0 ? BB("buildAFactory2Game:durationWholeHours", {
        hours: JB
      }) : BB("buildAFactory2Game:durationHours", {
        hours: JB,
        minutes: String(TB % 60)
      })
    }
    var Qo = ZB(2584);
    const so = "(max-height: 420px), (max-width: 650px)";

    function wo() {
      return (0, Qo.e)(so)
    }
    var Oo = ZB(1153);

    function Yo(BB, IB) {
      return null !== BB && BB > IB + 1
    }

    function io(BB) {
      const IB = 100 * BB;
      return String(IB <= 0 || IB >= 1 ? Math.round(IB) : Math.max(.1, Math.round(10 * IB) / 10))
    }

    function po(BB) {
      let {
        item: IB,
        amount: ZB
      } = BB;
      return (0, Oo.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, Oo.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, Oo.jsx)(pJ.e, {
            itemName: IB,
            amount: 0
          })
        }), ZB > 1 && (0, Oo.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", ZB]
        })]
      })
    }

    function ao(BB) {
      let {
        label: IB,
        names: ZB
      } = BB;
      const [JB, oB] = (0, TB.useState)(!1), GB = ZB.join(" / ");
      return (0, Oo.jsxs)(Oo.Fragment, {
        children: [(0, Oo.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: GB,
          "aria-expanded": JB,
          onClick: () => {
            oB(!JB)
          },
          children: IB
        }), JB && (0, Oo.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: GB
        })]
      })
    }

    function Ho(BB) {
      let {
        tier: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)(), {
        key: TB,
        params: JB
      } = FB(IB, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), oB = ZB(`buildAFactory2Game:${TB}`, JB);
      return (0, Oo.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, Oo.jsx)(iJ.d, {
          name: "lock"
        }), oB]
      })
    }
    const Mo = (0, TB.createContext)(null);

    function jo() {
      const {
        t: BB
      } = (0, YJ.G)(), IB = (0, TB.useContext)(Mo);
      return (0, TB.useEffect)((() => null === IB || void 0 === IB ? void 0 : IB()), [IB]), (0, Oo.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: BB("buildAFactory2Game:recipeForQuest"),
        "aria-label": BB("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function Po(BB) {
      let {
        title: IB,
        count: ZB,
        children: JB,
        startOpen: oB = !0
      } = BB;
      const {
        t: GB
      } = (0, YJ.G)(), [vB, kB] = (0, TB.useState)((() => oB && !wo())), [cB, nB] = (0, TB.useState)(0), hB = (0, TB.useCallback)((() => (nB((BB => BB + 1)), () => {
        nB((BB => BB - 1))
      })), []);
      return (0, Oo.jsxs)("div", {
        className: QJ()("Baf2Recipes", {
          Open: vB
        }),
        children: [(0, Oo.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            kB(!vB)
          },
          "aria-expanded": vB,
          children: [GB("buildAFactory2Game:recipesToggle", {
            title: IB,
            count: String(ZB)
          }), (0, Oo.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: vB ? "\u25be" : "\u25b8"
          })]
        }), vB && (0, Oo.jsxs)(Mo.Provider, {
          value: hB,
          children: [(0, Oo.jsx)("ul", {
            className: "Baf2RecipeList",
            children: JB
          }), cB > 0 && (0, Oo.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, Oo.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), GB("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Ro = "buildAFactory2Game:",
      ro = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const mo = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      Xo = {
        "Uranium Grit": oB,
        "Raw Uranium": oB
      };

    function Lo(BB) {
      var IB;
      return null !== (IB = Xo[BB]) && void 0 !== IB ? IB : Math.max(DB(BB), mo[BB] ? DB(mo[BB]) : 1, function(BB) {
        const IB = JB.findIndex((IB => IB.cost.some((IB => IB.item === BB))));
        return IB > oB ? IB : 1
      }(BB))
    }

    function eo(BB, IB) {
      return uo(IB) ? Lo(IB) : function(BB) {
        if (ro.has(BB)) return 1;
        const IB = JB.findIndex((IB => IB.newDeposits.some((IB => {
          let {
            block: ZB
          } = IB;
          return ZB === BB
        }))));
        return IB < 0 ? 1 : IB + 1
      }(BB)
    }

    function uo(BB) {
      return BB in Xo || hB(Lo(BB)) > 0
    }

    function fo(BB, IB) {
      return KI(BB, {
        coupled: !1,
        taught: null,
        atomic: vB() && IB >= 11
      }).recipes
    }

    function Ao(BB, IB) {
      const ZB = zB(BB, IB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hB(BB) > 0);
      return "open" === ZB || "locked" === ZB
    }

    function to(BB, IB) {
      return BB.map(((BB, ZB) => ({
        value: BB,
        idx: ZB,
        tier: IB(BB)
      }))).sort(((BB, IB) => BB.tier - IB.tier || BB.idx - IB.idx)).map((BB => {
        let {
          value: IB
        } = BB;
        return IB
      }))
    }

    function bo(BB, IB, ZB) {
      const TB = zB(BB, IB);
      if ("hidden" === TB || "open" === TB) return null;
      if ("teaser" === TB) return {
        tag: {
          translationKey: `${Ro}${ZB?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Ro}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const JB = FB(BB, {
          tier: ZB ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        oB = FB(BB, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Ro}${JB.key}`,
          params: JB.params
        },
        reason: {
          translationKey: `${Ro}${oB.key}`,
          params: oB.params
        }
      }
    }

    function xo(BB) {
      return !ho(BB)
    }

    function Eo(BB) {
      let {
        seconds: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)();
      return (0, Oo.jsx)(Po, {
        title: ZB("buildAFactory2Game:recipesCuts", {
          seconds: IB
        }),
        count: 1,
        children: (0, Oo.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Oo.jsx)(po, {
            item: "Maple Sapling",
            amount: 1
          }), (0, Oo.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Oo.jsx)(po, {
            item: "Maple Log",
            amount: 1
          }), (0, Oo.jsx)("span", {
            className: "Baf2RecipeName",
            children: ZB("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Do(BB) {
      let {
        fertilised: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)();
      return (0, Oo.jsxs)(Po, {
        title: ZB("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, Oo.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Oo.jsx)(po, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Oo.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Oo.jsx)(po, {
            item: "Wheat",
            amount: 1
          }), (0, Oo.jsx)(po, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Oo.jsx)("span", {
            className: "Baf2RecipeName",
            children: ZB("buildAFactory2Game:recipeField")
          })]
        }), (0, Oo.jsxs)("li", {
          className: QJ()("Baf2Recipe", {
            InUse: IB
          }),
          children: [(0, Oo.jsx)(po, {
            item: "Fertiliser",
            amount: 1
          }), (0, Oo.jsx)("span", {
            className: "Baf2RecipeName",
            children: ZB("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function Ko(BB) {
      let {
        tier: IB,
        seconds: ZB
      } = BB;
      const {
        t: TB
      } = (0, YJ.G)(), JB = function(BB) {
        return BB >= 5 ? QI : CI
      }(IB);
      return (0, Oo.jsx)(Po, {
        title: TB("buildAFactory2Game:recipesBringsUp", {
          seconds: ZB
        }),
        count: JB.length,
        children: JB.map((BB => {
          let {
            item: IB,
            chance: ZB
          } = BB;
          return (0, Oo.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Oo.jsx)(po, {
              item: IB,
              amount: 1
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeName",
              children: To(TB, IB)
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: TB("buildAFactory2Game:recipeChance", {
                percent: io(ZB)
              })
            })]
          }, IB)
        }))
      })
    }

    function Vo(BB) {
      let {
        tier: IB,
        seconds: ZB,
        noSeeds: TB
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)(), oB = SJ(), GB = No(IB, TB ? xo : void 0), vB = TB && No(IB).length > GB.length, kB = no(IB);
      return (0, Oo.jsxs)(Po, {
        title: JB("buildAFactory2Game:recipesRecycles", {
          seconds: ZB
        }),
        count: GB.length,
        children: [GB.map((BB => {
          let {
            find: IB,
            chance: ZB
          } = BB;
          return (0, Oo.jsxs)("li", {
            className: "Baf2Recipe",
            children: [oB.has(IB.item) && (0, Oo.jsx)(jo, {}), (0, Oo.jsx)(po, {
              item: IB.item,
              amount: IB.amount
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeName",
              children: To(JB, IB.item)
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: JB("buildAFactory2Game:recipeChance", {
                percent: io(ZB)
              })
            })]
          }, IB.item)
        })), vB && (0, Oo.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Oo.jsx)("span", {
            className: "Baf2RecipeName",
            children: JB("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), kB && (0, Oo.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Oo.jsx)("span", {
            className: "Baf2RecipeName",
            children: JB("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function So(BB) {
      let {
        tier: IB,
        seconds: ZB
      } = BB;
      const {
        t: TB
      } = (0, YJ.G)(), JB = Object.entries(Go).filter((BB => {
        let [, {
          item: ZB
        }] = BB;
        return Ao(Lo(ZB), IB, uo(ZB))
      }));
      return (0, Oo.jsx)(Po, {
        title: TB("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: ZB
        }),
        count: JB.length,
        children: JB.map((BB => {
          let [IB, {
            item: ZB,
            amount: JB
          }] = BB;
          return (0, Oo.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Oo.jsx)(po, {
              item: IB,
              amount: 1
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Oo.jsx)(po, {
              item: ZB,
              amount: JB
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeName",
              children: To(TB, ZB)
            })]
          }, IB)
        }))
      })
    }

    function BG(BB) {
      let {
        tier: IB,
        seconds: ZB
      } = BB;
      const {
        t: TB
      } = (0, YJ.G)(), JB = SJ(), oB = to(Object.entries(GZ).filter((BB => {
        let [ZB, TB] = BB;
        return Ao(eo(ZB, TB), IB, uo(TB))
      })), (BB => {
        let [IB, ZB] = BB;
        return eo(IB, ZB)
      }));
      return (0, Oo.jsx)(Po, {
        title: TB("buildAFactory2Game:recipesDigs", {
          seconds: ZB
        }),
        count: oB.length,
        children: oB.map((BB => {
          let [ZB, oB] = BB;
          const GB = eo(ZB, oB),
            vB = GB > IB ? GB : null,
            kB = vZ[ZB],
            cB = null === vB && JB.has(oB);
          return (0, Oo.jsxs)("li", {
            className: QJ()("Baf2Recipe", {
              Locked: null !== vB,
              Far: Yo(vB, IB)
            }),
            children: [cB && (0, Oo.jsx)(jo, {}), (0, Oo.jsx)(po, {
              item: ZB,
              amount: 1
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Oo.jsx)(po, {
              item: oB,
              amount: 1
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeName",
              children: To(TB, oB)
            }), void 0 !== kB && (0, Oo.jsx)("span", {
              className: "Baf2RecipeMore",
              children: TB("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / kB)
              })
            }), null !== vB && (0, Oo.jsx)(Ho, {
              tier: vB
            })]
          }, ZB)
        }))
      })
    }

    function IG(BB) {
      var IB;
      let {
        def: ZB,
        seconds: TB
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)();
      return (0, Oo.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Oo.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (IB = ZB.fuels) && void 0 !== IB ? IB : []).map((BB => (0, Oo.jsx)(po, {
            item: BB,
            amount: 1
          }, BB))), (0, Oo.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Oo.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Oo.jsx)(iJ.d, {
              name: "bolt"
            }), JB("buildAFactory2Game:recipePower", {
              power: KB(ZB.powerMade),
              seconds: TB
            })]
          })]
        })
      })
    }

    function ZG(BB) {
      let {
        def: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)();
      return (0, Oo.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Oo.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Oo.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Oo.jsx)(iJ.d, {
              name: "bolt"
            }), ZB("buildAFactory2Game:recipeMixer", {
              cryo: yo((0, VB.K)(IB, IB.cryoMade), "")
            })]
          })
        })
      })
    }

    function TG(BB) {
      let {
        def: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)();
      return (0, Oo.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Oo.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Oo.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Oo.jsx)(iJ.d, {
              name: "bolt"
            }), ZB("buildAFactory2Game:recipeCondenser", {
              power: yo((0, VB.K)(IB, IB.powerPerOp), ""),
              water: yo((0, VB.K)(IB, IB.fluidMade), "")
            })]
          })
        })
      })
    }

    function JG(BB) {
      let {
        kind: IB,
        def: ZB,
        input: TB,
        tier: JB,
        noSeeds: oB = !1
      } = BB;
      const GB = String(ZB.opMs / 1e3);
      return ZZ(ZB) ? (0, Oo.jsx)(Eo, {
        seconds: GB
      }) : ZB.field ? (0, Oo.jsx)(Do, {
        fertilised: null !== TB
      }) : ZB.table ? (0, Oo.jsx)(Ko, {
        tier: JB,
        seconds: GB
      }) : ZB.recycles ? (0, Oo.jsxs)(Oo.Fragment, {
        children: [(0, Oo.jsx)(Vo, {
          tier: JB,
          seconds: GB,
          noSeeds: oB
        }), (0, Oo.jsx)(So, {
          tier: JB,
          seconds: GB
        })]
      }) : IZ(ZB) ? (0, Oo.jsx)(BG, {
        tier: JB,
        seconds: GB
      }) : void 0 !== ZB.fluidMade ? (0, Oo.jsx)(TG, {
        def: ZB
      }) : void 0 !== ZB.cryoMade ? (0, Oo.jsx)(ZG, {
        def: ZB
      }) : void 0 !== ZB.powerMade ? (0, Oo.jsx)(IG, {
        def: ZB,
        seconds: GB
      }) : (0, Oo.jsx)(oG, {
        kind: IB,
        input: TB,
        tier: JB,
        seconds: GB
      })
    }

    function oG(BB) {
      let {
        kind: IB,
        input: ZB,
        tier: TB,
        seconds: JB
      } = BB;
      const {
        t: oB
      } = (0, YJ.G)(), GB = SJ(), vB = to(function(BB) {
        const IB = new Map;
        for (const JB of BB) {
          var ZB, TB;
          const BB = [JB.output, JB.outputAmount, JB.inputAmount, null === (ZB = JB.bonus) || void 0 === ZB ? void 0 : ZB.item, null === (TB = JB.bonus) || void 0 === TB ? void 0 : TB.chance].join("|"),
            oB = IB.get(BB);
          oB ? oB.inputs.push(JB.input) : IB.set(BB, {
            inputs: [JB.input],
            inputAmount: JB.inputAmount,
            output: JB.output,
            outputAmount: JB.outputAmount,
            bonus: JB.bonus
          })
        }
        return [...IB.values()]
      }(fo(IB, TB).filter(nZ)), (BB => Lo(BB.output))).filter((BB => Ao(Lo(BB.output), TB, uo(BB.output))));
      return (0, Oo.jsx)(Po, {
        title: oB("buildAFactory2Game:recipesEach", {
          seconds: JB
        }),
        count: vB.length,
        children: vB.map((BB => {
          const IB = null !== ZB && BB.inputs.includes(ZB),
            JB = BB.inputs.length > 3 ? [IB ? ZB : BB.inputs[0]] : BB.inputs,
            vB = Lo(BB.output) > TB ? Lo(BB.output) : null,
            kB = null === vB && GB.has(BB.output);
          return (0, Oo.jsxs)("li", {
            className: QJ()("Baf2Recipe", {
              InUse: IB,
              Locked: null !== vB,
              Far: Yo(vB, TB)
            }),
            children: [kB && (0, Oo.jsx)(jo, {}), JB.map(((IB, ZB) => (0, Oo.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [ZB > 0 && (0, Oo.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, Oo.jsx)(po, {
                item: IB,
                amount: BB.inputAmount
              })]
            }, IB))), JB.length < BB.inputs.length && (0, Oo.jsx)(ao, {
              label: oB("buildAFactory2Game:recipeMore", {
                count: String(BB.inputs.length - JB.length)
              }),
              names: BB.inputs.filter((BB => !JB.includes(BB))).map((BB => To(oB, BB)))
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Oo.jsx)(po, {
              item: BB.output,
              amount: BB.outputAmount
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeName",
              children: To(oB, BB.output)
            }), BB.bonus && (0, Oo.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [oB("buildAFactory2Game:recipeBonus", {
                percent: io(BB.bonus.chance)
              }), (0, Oo.jsx)(po, {
                item: BB.bonus.item,
                amount: 1
              })]
            }), null !== vB && (0, Oo.jsx)(Ho, {
              tier: vB
            })]
          }, `${BB.output}|${BB.inputs[0]}`)
        }))
      })
    }

    function GG(BB) {
      let {
        taught: IB,
        tier: ZB
      } = BB;
      const {
        t: TB
      } = (0, YJ.G)(), JB = SJ(), oB = to(Object.values(EI), (BB => BB.tier)).filter((BB => Ao(BB.tier, ZB)));
      return (0, Oo.jsx)(Po, {
        title: TB("buildAFactory2Game:benchCanMake"),
        count: oB.length,
        startOpen: !1,
        children: oB.map((BB => {
          const oB = BB.tier > ZB,
            GB = !oB && JB.has(BB.output);
          return (0, Oo.jsxs)("li", {
            className: QJ()("Baf2Recipe", {
              InUse: BB.output === IB,
              Locked: oB,
              Far: Yo(oB ? BB.tier : null, ZB)
            }),
            children: [GB && (0, Oo.jsx)(jo, {}), (0, Oo.jsx)(po, {
              item: BB.output,
              amount: BB.outputAmount
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeName",
              children: To(TB, BB.output)
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), BB.inputs.map((BB => (0, Oo.jsx)(po, {
              item: BB.item,
              amount: BB.amount
            }, BB.item))), oB && (0, Oo.jsx)(Ho, {
              tier: BB.tier
            })]
          }, BB.output)
        }))
      })
    }
    var vG, kG, cG, nG, hG;
    const zG = PI.Generator,
      FG = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      NG = 1e3 * (null !== (vG = zG.powerMade) && void 0 !== vG ? vG : 0) / zG.opMs,
      gG = Math.min(...(null !== (kG = zG.fuels) && void 0 !== kG ? kG : []).map((BB => oZ[BB]))) / 1e3,
      qG = PI["Volt Engine"],
      yG = 1e3 * (null !== (cG = qG.powerMade) && void 0 !== cG ? cG : 0) / qG.opMs,
      UG = oZ[null !== (nG = null === (hG = qG.fuels) || void 0 === hG ? void 0 : hG[0]) && void 0 !== nG ? nG : ""] / 1e3;

    function WG(BB) {
      let {
        item: IB,
        label: ZB,
        value: TB,
        note: JB,
        dim: oB
      } = BB;
      return (0, Oo.jsxs)("li", {
        className: QJ()("Baf2PowerRow", {
          Dim: oB
        }),
        children: [(0, Oo.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, Oo.jsx)(pJ.e, {
            itemName: IB,
            amount: 0
          })
        }), (0, Oo.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, Oo.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: ZB
          }), JB && (0, Oo.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: JB
          })]
        }), (0, Oo.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: TB
        })]
      })
    }

    function dG(BB, IB, ZB, TB) {
      var JB;
      const oB = void 0 === TB ? PI[BB] : function(BB, IB) {
          if (null === IB) return BB;
          let ZB = bB.get(IB);
          return ZB || (ZB = {
            ...BB,
            powerPerOp: tB(BB, IB),
            farmMob: IB
          }, bB.set(IB, ZB)), ZB
        }(PI[BB], TB),
        GB = IB && oB.couplable ? fI(oB, ZB) : oB;
      return 1e3 * (null !== (JB = GB.powerPerOp) && void 0 !== JB ? JB : 0) / GB.opMs
    }

    function CG(BB) {
      var IB, ZB, TB, JB, oB, GB, vB, kB;
      let {
        message: cB
      } = BB;
      const {
        t: nB
      } = (0, YJ.G)(), hB = (BB, IB) => nB("buildAFactory2Game:powerPerSecond", {
        rate: yo(BB, IB)
      }), [zB, FB] = cB.baf2PowerGenerators, NB = cB.baf2PowerGeneratorFuel, gB = cB.baf2PowerSunPanels, qB = null !== (IB = cB.baf2PowerSunShare) && void 0 !== IB ? IB : 1, yB = cB.baf2PowerVaults, UB = cB.baf2PowerUsers, [WB, dB] = null !== (ZB = cB.baf2PowerEngines) && void 0 !== ZB ? ZB : [0, 0], CB = null !== (TB = cB.baf2PowerEngineCells) && void 0 !== TB ? TB : 0, QB = null !== (JB = cB.baf2PowerPads) && void 0 !== JB ? JB : 0, sB = null !== (oB = cB.baf2PowerCharge) && void 0 !== oB ? oB : 0, [wB, OB] = null !== (GB = cB.baf2PowerReactors) && void 0 !== GB ? GB : [0, 0], [YB, iB] = null !== (vB = cB.baf2PowerBatteries) && void 0 !== vB ? vB : [0, 0];
      let pB = nB("buildAFactory2Game:powerEngineCells", {
        amount: String(CB)
      });
      CB > 0 && dB > 0 && (pB = nB("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(CB),
        time: Co(nB, CB * UG / dB)
      }));
      let aB = nB("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(NB)
      });
      NB > 0 && FB > 0 && (aB = nB("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(NB),
        time: Co(nB, NB * gG / FB)
      }));
      const HB = zB + WB + gB + wB;
      return (0, Oo.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, Oo.jsxs)("section", {
          children: [(0, Oo.jsxs)("h3", {
            children: [nB("buildAFactory2Game:powerMaking"), (0, Oo.jsx)("span", {
              children: hB(cB.baf2PowerMadePerS, "+")
            })]
          }), (0, Oo.jsxs)("ul", {
            children: [0 === HB && (0, Oo.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: nB("buildAFactory2Game:powerNoMakers")
            }), zB > 0 && (0, Oo.jsx)(WG, {
              item: "Generator",
              label: `${To(nB,"Generator")} \xd7${zB}`,
              note: `${nB("buildAFactory2Game:powerRunning",{amount:String(FB)})} \xb7 ${aB}`,
              value: hB(FB * NG, "+"),
              dim: 0 === FB
            }), WB > 0 && (0, Oo.jsx)(WG, {
              item: "Volt Engine",
              label: `${To(nB,"Volt Engine")} \xd7${WB}`,
              note: `${nB("buildAFactory2Game:powerRunning",{amount:String(dB)})} \xb7 ${pB}`,
              value: hB(dB * yG, "+"),
              dim: 0 === dB
            }), gB > 0 && (0, Oo.jsx)(WG, {
              item: "Solar Panel",
              label: `${To(nB,"Solar Panel")} \xd7${gB}`,
              note: nB(qB < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: hB(4 * gB * qB, "+")
            }), wB > 0 && (0, Oo.jsx)(WG, {
              item: "Reactor Frame",
              label: `${nB("buildAFactory2Game:powerReactors")} \xd7${wB}`,
              note: nB("buildAFactory2Game:powerRunning", {
                amount: String(OB)
              }),
              value: hB(null !== (kB = cB.baf2PowerReactorPerS) && void 0 !== kB ? kB : 0, "+"),
              dim: 0 === OB
            })]
          })]
        }), (0, Oo.jsxs)("section", {
          children: [(0, Oo.jsxs)("h3", {
            children: [nB("buildAFactory2Game:powerStorage"), (0, Oo.jsx)("span", {
              children: KB(cB.baf2PowerCap)
            })]
          }), (yB > 0 || YB > 0) && (0, Oo.jsxs)("ul", {
            children: [yB > 0 && (0, Oo.jsx)(WG, {
              item: "Charge Vault",
              label: `${To(nB,"Charge Vault")} \xd7${yB}`,
              value: `+${KB(8e3*yB)}`
            }), YB > 0 && (0, Oo.jsx)(WG, {
              item: "Battery Cell",
              label: `${nB("buildAFactory2Game:powerBatteries")} \xd7${YB}`,
              value: `+${KB(iB)}`
            })]
          })]
        }), (0, Oo.jsxs)("section", {
          children: [(0, Oo.jsxs)("h3", {
            children: [nB("buildAFactory2Game:powerUsing"), (0, Oo.jsx)("span", {
              children: hB(cB.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, Oo.jsxs)("ul", {
            children: [0 === UB.length && 0 === QB && 0 === sB && (0, Oo.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: nB("buildAFactory2Game:powerNoUsers")
            }), UB.map((BB => {
              let [IB, ZB, TB, JB, oB = 1, GB] = BB, vB = ZB ? nB(FG[oB - 1], {
                name: To(nB, IB)
              }) : To(nB, IB);
              return void 0 !== GB && (vB = nB("buildAFactory2Game:powerFarmName", {
                name: vB,
                mob: nB(fB(GB))
              })), (0, Oo.jsx)(WG, {
                item: IB,
                label: `${vB} \xd7${TB}`,
                note: nB("buildAFactory2Game:powerRunning", {
                  amount: String(JB)
                }),
                value: JB > 0 ? hB(JB * dG(IB, ZB, oB, GB), "\u2212") : nB("buildAFactory2Game:powerIdle"),
                dim: 0 === JB
              }, `${IB}|${ZB}|${oB}|${GB}`)
            })), QB > 0 && (0, Oo.jsx)(WG, {
              item: "Charging Pad",
              label: `${To(nB,"Charging Pad")} \xd7${QB}`,
              value: nB("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), sB > 0 && (0, Oo.jsx)(WG, {
              item: "Homestead Core",
              label: nB("buildAFactory2Game:powerCharge"),
              value: hB(sB, "\u2212")
            }), cB.baf2PowerStarved > 0 && (0, Oo.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, Oo.jsx)(iJ.d, {
                name: "triangle-exclamation"
              }), nB("buildAFactory2Game:powerStarved", {
                amount: String(cB.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var QG = ZB(4714),
      sG = ZB(1516);
    class wG {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(BB) {
        this.message = BB;
        for (const IB of this.listeners) IB()
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
    class OG extends wG {}

    function YG(BB, IB) {
      const ZB = () => {
          const ZB = BB.get();
          if (!ZB || !IB) return ZB;
          const [TB, JB, oB] = ZB.baf2PowerAt;
          return TB === IB[0] && JB === IB[1] && oB === IB[2] ? ZB : null
        },
        [JB, oB] = (0, TB.useState)(ZB);
      return (0, TB.useEffect)((() => (oB(ZB()), BB.subscribe((() => {
        oB(ZB())
      })))), [BB, ...null !== IB && void 0 !== IB ? IB : []]), JB
    }

    function iG(BB) {
      return {
        stored: BB.baf2PowerStored,
        cap: BB.baf2PowerCap,
        madePerS: BB.baf2PowerMadePerS,
        usedPerS: BB.baf2PowerUsedPerS
      }
    }

    function pG(BB) {
      let {
        stored: IB,
        cap: ZB
      } = BB;
      return (0, Oo.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, Oo.jsx)("div", {
          style: {
            width: `${Math.min(100,100*IB/Math.max(1,ZB))}%`
          }
        })
      })
    }

    function aG(BB) {
      let {
        figures: IB,
        labelled: ZB = !1
      } = BB;
      const {
        t: TB
      } = (0, YJ.G)(), JB = IB.madePerS - IB.usedPerS, {
        text: oB,
        draining: GB
      } = function(BB, IB) {
        let {
          stored: ZB,
          cap: TB,
          madePerS: JB,
          usedPerS: oB
        } = IB;
        const GB = JB - oB;
        return ZB >= TB ? {
          text: BB("buildAFactory2Game:powerFull"),
          draining: !1
        } : GB > .05 ? {
          text: BB("buildAFactory2Game:powerFullIn", {
            time: Co(BB, (TB - ZB) / GB)
          }),
          draining: !1
        } : GB < -.05 ? {
          text: BB("buildAFactory2Game:powerEmptyIn", {
            time: Co(BB, ZB / -GB)
          }),
          draining: !0
        } : {
          text: BB("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(TB, IB);
      return (0, Oo.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, Oo.jsx)(pG, {
          stored: IB.stored,
          cap: IB.cap
        }), (0, Oo.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, Oo.jsx)("span", {
            children: TB(ZB ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: KB(IB.stored),
              cap: KB(IB.cap)
            })
          }), (0, Oo.jsxs)("span", {
            className: QJ()("Baf2PowerNet", {
              Draining: GB
            }),
            children: [TB("buildAFactory2Game:powerPerSecond", {
              rate: yo(Math.abs(JB), JB < 0 ? "\u2212" : "+")
            }), " \xb7 ", oB]
          })]
        })]
      })
    }

    function HG(BB) {
      let {
        stored: IB,
        cap: ZB,
        rates: TB
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)();
      return TB ? (0, Oo.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Oo.jsx)(aG, {
          figures: {
            stored: IB,
            cap: ZB,
            madePerS: TB[0],
            usedPerS: TB[1]
          },
          labelled: !0
        })
      }) : (0, Oo.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Oo.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, Oo.jsx)(pG, {
            stored: IB,
            cap: ZB
          }), (0, Oo.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, Oo.jsx)("span", {
              children: JB("buildAFactory2Game:powerStoredLabelled", {
                stored: KB(IB),
                cap: KB(ZB)
              })
            })
          })]
        })
      })
    }

    function MG(BB) {
      let {
        store: IB,
        close: ZB
      } = BB;
      const {
        t: TB
      } = (0, YJ.G)(), JB = YG(IB);
      return (0, Oo.jsx)(QG.c, {
        close: ZB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Oo.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, Oo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Oo.jsxs)("div", {
              children: [(0, Oo.jsx)("h2", {
                id: "baf2PowerTitle",
                children: TB("buildAFactory2Game:powerTitle")
              }), (0, Oo.jsx)("p", {
                children: TB("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, Oo.jsx)(sG.l, {
              onClick: ZB
            })]
          }), JB && (0, Oo.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, Oo.jsx)(aG, {
              figures: iG(JB)
            }), (0, Oo.jsx)(CG, {
              message: JB
            })]
          })]
        })
      })
    }

    function jG(BB) {
      var IB;
      let {
        kind: ZB,
        def: JB,
        XJ: oB,
        power: GB,
        stored: vB,
        cap: kB
      } = BB;
      const {
        t: cB
      } = (0, YJ.G)(), nB = YG(GB, oB), [hB, zB] = (0, TB.useState)(!1);
      return (0, Oo.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, Oo.jsx)(JG, {
          kind: ZB,
          def: JB,
          input: null,
          tier: null !== (IB = null === nB || void 0 === nB ? void 0 : nB.baf2PowerTier) && void 0 !== IB ? IB : 1
        }), (0, Oo.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: cB("buildAFactory2Game:powerTitle")
        }), nB && (0, Oo.jsx)(aG, {
          figures: iG(nB)
        }), !nB && (0, Oo.jsx)(HG, {
          stored: vB,
          cap: kB,
          rates: null
        }), nB && (0, Oo.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            zB(!hB)
          },
          "aria-expanded": hB,
          children: cB(hB ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), nB && hB && (0, Oo.jsx)(CG, {
          message: nB
        })]
      })
    }
    const PG = 2500,
      RG = 17500,
      rG = `${CB} `;
    const mG = ["plan", "throttle"];

    function XG(BB) {
      if (BB.startsWith(`${YI} `)) return BB.slice(0, BB.lastIndexOf(" "));
      const IB = BB.split(" ");
      return IB[0] === nI && mG.includes(IB[4]) ? IB.slice(0, 5).join(" ") : null
    }
    class LG {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = BB, this.now = IB, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.AJB = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = IB()
      }
      enqueue(BB) {
        this.queue(BB, this.nextTicket());
        const IB = this.AJB + this.pending.length;
        return this.flush(), IB
      }
      track(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZB = this.nextTicket();
        if (!IB.urgent) return this.queue(BB, ZB), this.flush(), ZB;
        const {
          supersedes: TB
        } = IB;
        for (let oB = this.pending.length - 1; oB >= this.urgent; oB--) {
          const IB = this.pending[oB];
          (IB.command === BB || null !== TB && void 0 !== TB && TB(IB.command)) && (this.pending.splice(oB, 1), this.markLeft(IB.tickets))
        }
        const JB = this.pending.findIndex((IB => {
          let {
            command: ZB
          } = IB;
          return ZB === BB
        }));
        return -1 !== JB ? this.pending[JB].tickets.push(ZB) : (this.pending.splice(this.urgent, 0, {
          command: BB,
          tickets: [ZB]
        }), this.urgent += 1), this.flush(), ZB
      }
      leftAt(BB) {
        const IB = this.leftTimes.get(BB);
        return void 0 !== IB ? IB : this.pending.some((IB => {
          let {
            tickets: ZB
          } = IB;
          return ZB.includes(BB)
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
        var IB;
        return (null === (IB = this.pending.at(-1)) || void 0 === IB ? void 0 : IB.command) === BB
      }
      sent() {
        return this.AJB
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
        const IB = this.now();
        for (const ZB of BB) this.leftTimes.set(ZB, IB);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(BB, IB) {
        const ZB = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === ZB || void 0 === ZB ? void 0 : ZB.command) === BB) return void(! function(BB) {
          return BB === QB || BB.startsWith(`${dB} `) || BB.startsWith(`${LB} `)
        }(BB) ? ZB.tickets.push(IB) : (this.pending.pop(), this.markLeft([...ZB.tickets, IB])));
        const TB = void 0 === ZB ? null : cI(ZB.command, BB);
        if (null !== TB && void 0 !== ZB) return ZB.command = TB, void ZB.tickets.push(IB);
        const JB = XG(BB);
        if (null !== JB && void 0 !== ZB && XG(ZB.command) === JB) return ZB.command = BB, void ZB.tickets.push(IB);
        if (null !== ZB && void 0 !== ZB && ZB.command.startsWith(rG) && BB.startsWith(rG)) {
          const TB = BB.slice(rG.length);
          if (ZB.command.slice(rG.length).split(",").includes(TB)) return void ZB.tickets.push(IB);
          const JB = `${ZB.command},${TB}`;
          if (JB.length <= 119) return ZB.command = JB, void ZB.tickets.push(IB)
        }
        this.pending.push({
          command: BB,
          tickets: [IB]
        })
      }
      flush() {
        const BB = this.now();
        for (this.tokens = Math.min(5, this.tokens + (BB - this.refilledAt) / PG), this.refilledAt = BB; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.AJB += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: BB,
            tickets: IB
          } = this.pending.shift();
          this.markLeft(IB), this.send(BB)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * PG)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class eG {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new LG(BB, IB)
      }
      send(BB) {
        return this.queue.enqueue(BB)
      }
      sent() {
        return this.queue.sent()
      }
      track(BB, IB) {
        return this.queue.track(BB, IB)
      }
      leftAt(BB) {
        return this.queue.leftAt(BB)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(BB) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = IB, this.send(BB), this.islandEdits.count
      }
      syncIslandEdits(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: ZB
        } = this, TB = IB - ZB.lastAtMs < RG;
        ZB.count = TB ? Math.max(ZB.count, BB) : BB
      }
      clear() {
        this.queue.clear()
      }
    }
    const uG = (0, TB.createContext)(null);

    function fG() {
      const BB = (0, TB.useContext)(uG);
      if (!BB) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return BB
    }

    function lG(BB, IB) {
      return null !== IB && void 0 !== IB ? IB : 1 === BB
    }

    function AG(BB, IB) {
      return BB.every((BB => {
        var ZB;
        let [TB, , JB] = BB;
        return !lG(JB, null === (ZB = IB.get(TB)) || void 0 === ZB ? void 0 : ZB.XF)
      }))
    }

    function tG(BB, IB, ZB) {
      if (0 === BB.size) return BB;
      const TB = new Map(BB);
      for (const [JB, oB] of BB) {
        const BB = IB.find((BB => {
          let [IB] = BB;
          return IB === JB
        }));
        (!BB || oB.XF === (1 === BB[2]) || oB.atMs < ZB) && TB.delete(JB)
      }
      return TB
    }

    function bG(BB) {
      var IB;
      let {
        XJ: ZB,
        input: JB,
        drops: oB,
        seconds: GB
      } = BB;
      const {
        t: vB
      } = (0, YJ.G)(), kB = fG(), [cB, nB] = (0, TB.useState)(new Map);
      (0, TB.useEffect)((() => {
        oB && nB((BB => tG(BB, oB, Date.now() - RG)))
      }), [oB]), (0, TB.useEffect)((() => {
        const BB = function(BB, IB) {
          let ZB = null;
          for (const {
              atMs: TB
            }
            of BB.values()) ZB = null === ZB ? TB : Math.min(ZB, TB);
          return null === ZB ? null : ZB + IB
        }(cB, RG);
        if (null === BB || !oB) return;
        const IB = setTimeout((() => {
          nB((BB => tG(BB, oB, Date.now() - RG)))
        }), Math.max(0, BB - Date.now()) + 1);
        return () => {
          clearTimeout(IB)
        }
      }), [cB, oB]);
      const hB = lB(JB),
        zB = null !== hB && null !== oB && AG(oB, cB),
        FB = function(BB, IB, ZB) {
          return null === BB || null === IB || AG(IB, ZB) ? 0 : XB[rB[BB]]
        }(hB, oB, cB);
      return (0, Oo.jsxs)(Po, {
        title: vB("buildAFactory2Game:farmDropsTitle", {
          seconds: GB
        }),
        count: null !== (IB = null === oB || void 0 === oB ? void 0 : oB.length) && void 0 !== IB ? IB : 0,
        children: [FB > 0 && (0, Oo.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: vB("buildAFactory2Game:farmDropsPower", {
            power: String(FB)
          })
        }), (null === hB || !oB) && (0, Oo.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: vB("buildAFactory2Game:farmDropsEmpty")
        }), zB && (0, Oo.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: vB("buildAFactory2Game:farmDropsAllVoided")
        }), null !== hB && (null === oB || void 0 === oB ? void 0 : oB.map((BB => {
          var IB;
          let [TB, JB, oB] = BB;
          const GB = JB < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            hB = lG(oB, null === (IB = cB.get(TB)) || void 0 === IB ? void 0 : IB.XF);
          return (0, Oo.jsxs)("li", {
            className: QJ()("Baf2Recipe Baf2FarmDrop", {
              Voided: !hB
            }),
            children: [(0, Oo.jsx)(po, {
              item: TB,
              amount: 1
            }), (0, Oo.jsx)("span", {
              className: "Baf2RecipeName",
              children: To(vB, TB)
            }), (0, Oo.jsx)("span", {
              className: "Baf2FarmRate",
              children: vB(GB, {
                amount: String(JB)
              })
            }), (0, Oo.jsx)("button", {
              type: "button",
              className: QJ()("Baf2FarmToggle SmallTextBold", {
                Kept: hB
              }),
              "aria-pressed": hB,
              onClick: () => {
                nB(new Map(cB).set(TB, {
                  XF: !hB,
                  atMs: Date.now()
                })), kB.send(function(BB, IB, ZB, TB) {
                  return `${LB} ${BB} ${IB} ${ZB} ${TB}`
                }(ZB[0], ZB[1], ZB[2], TB))
              },
              children: vB(hB ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, TB)
        })))]
      })
    }
    var xG;
    const EG = String(null !== (xG = PI.Synthesizer.waterPerOp) && void 0 !== xG ? xG : 0);

    function DG(BB) {
      let {
        XJ: IB,
        taught: ZB
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)(), oB = fG(), [GB, vB] = (0, TB.useState)(null);
      (0, TB.useEffect)((() => {
        null !== GB && ZB === GB && vB(null)
      }), [GB, ZB]);
      const kB = null !== GB && void 0 !== GB ? GB : ZB;
      let cB = JB("buildAFactory2Game:synthPick");
      return null !== kB && (cB = JB("buildAFactory2Game:synthGrows", {
        name: To(JB, kB),
        input: To(JB, sI),
        water: EG
      })), (0, Oo.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, Oo.jsx)("div", {
          className: QJ()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === kB
          }),
          children: cB
        }), (0, Oo.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: wI.map(((BB, ZB) => {
            const TB = To(JB, BB),
              GB = BB === kB;
            return (0, Oo.jsx)("li", {
              children: (0, Oo.jsx)("button", {
                type: "button",
                className: QJ()("Baf2SynthTile", {
                  Selected: GB
                }),
                title: TB,
                "aria-label": TB,
                "aria-pressed": GB,
                onClick: () => {
                  GB || (vB(BB), oB.send(`${YI} ${IB[0]} ${IB[1]} ${IB[2]} ${ZB}`))
                },
                children: (0, Oo.jsx)(pJ.e, {
                  itemName: BB,
                  amount: 0
                })
              })
            }, BB)
          }))
        })]
      })
    }
    const KG = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function VG(BB) {
      let {
        kind: IB,
        tier: ZB,
        coupled: TB,
        level: JB,
        slot: oB
      } = BB;
      const {
        t: GB
      } = (0, YJ.G)(), kB = DB(rI);
      if (!TB && null !== ZB && ZB < kB) return (0, Oo.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, Oo.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, Oo.jsx)(iJ.d, {
            name: "lock"
          })
        }), (0, Oo.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: GB("buildAFactory2Game:upgradeLocked")
        }), (0, Oo.jsx)("span", {
          className: "Baf2TierTag",
          children: GB("buildAFactory2Game:tierTag", {
            tier: String(kB)
          })
        })]
      });
      const cB = function(BB, IB) {
          if (vB() && "Crusher" !== BB && null !== IB) {
            if (SG(XI, IB)) return {
              item: XI,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (SG(mI, IB)) return {
              item: mI,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: rI,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(IB, ZB),
        nB = GB(TB ? KG[JB - 1] : cB.emptyKey),
        hB = null !== ZB ? function(BB, IB, ZB, TB) {
          if (!vB() || !ZB || "Crusher" === BB || IB < 10) return null;
          const JB = DB(XI);
          if (TB < 3 && JB > 1 && (2 === TB || IB >= JB)) return {
            tier: JB,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const oB = DB(mI);
          if (1 === TB && oB > 1) return {
            tier: oB,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(IB, ZB, TB, JB) : null;
      return (0, Oo.jsxs)("div", {
        className: QJ()("Baf2UpgradeSocket", {
          Fitted: TB
        }),
        children: [(0, Oo.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [TB && oB, !TB && (0, Oo.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, Oo.jsx)(pJ.e, {
              itemName: cB.item,
              amount: 0
            })
          })]
        }), (0, Oo.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, Oo.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: GB("buildAFactory2Game:upgradeTitle")
          }), (0, Oo.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: nB
          }), TB && JB >= 2 && "Crusher" === IB && (0, Oo.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: GB("buildAFactory2Game:couplerCrusherHint")
          }), hB && null !== ZB && ZB < hB.tier && (0, Oo.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, Oo.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, Oo.jsx)(iJ.d, {
                name: "lock"
              })
            }), GB(hB.lockedKey), (0, Oo.jsx)("span", {
              className: "Baf2TierTag",
              children: GB("buildAFactory2Game:tierTag", {
                tier: String(hB.tier)
              })
            })]
          }), hB && null !== ZB && ZB >= hB.tier && (0, Oo.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: GB(hB.nextKey)
          })]
        })]
      })
    }

    function SG(BB, IB) {
      const ZB = DB(BB);
      return ZB > 1 && IB >= ZB
    }
    var Bv = ZB(37060);
    const Iv = (0, VB.K)(PI.Condenser, PI.Condenser.fluidMade),
      Zv = .05;
    class Tv extends wG {}

    function Jv(BB) {
      return yo(BB, "")
    }

    function ov(BB, IB, ZB) {
      return BB(IB ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: ZB
      })
    }

    function Gv(BB, IB, ZB, TB) {
      return ZB <= Zv && TB <= Zv ? null : TB <= Zv || ZB <= Zv ? ov(BB, IB, TB <= Zv ? yo(ZB, "+") : yo(TB, "\u2212")) : BB(IB ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: Jv(ZB),
        used: Jv(TB)
      })
    }

    function vv(BB, IB) {
      return Math.min(100, 100 * BB / Math.max(1, IB))
    }

    function kv(BB) {
      let {
        stored: IB,
        cap: ZB,
        netPerS: TB,
        rates: JB,
        cryo: oB
      } = BB;
      const {
        t: GB
      } = (0, YJ.G)(), vB = function(BB, IB, ZB, TB) {
        return ZB <= 0 ? BB("buildAFactory2Game:waterNoStorage") : IB >= ZB ? BB("buildAFactory2Game:powerFull") : TB > Zv ? BB("buildAFactory2Game:powerFullIn", {
          time: Co(BB, (ZB - IB) / TB)
        }) : TB < -.05 ? IB <= 0 ? BB("buildAFactory2Game:waterEmpty") : BB("buildAFactory2Game:powerEmptyIn", {
          time: Co(BB, IB / -TB)
        }) : BB("buildAFactory2Game:powerSteady")
      }(GB, IB, ZB, TB), kB = ZB > 0 && IB < ZB && Math.abs(TB) <= Zv, cB = GB(oB ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), nB = null !== JB ? `${JB} \xb7 ${vB}` : kB ? cB : `${cB} \xb7 ${vB}`;
      return (0, Oo.jsxs)(Oo.Fragment, {
        children: [(0, Oo.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, Oo.jsx)("div", {
            style: {
              width: `${vv(IB,ZB)}%`
            }
          })
        }), (0, Oo.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, Oo.jsx)("span", {
            children: ZB > 0 && GB("buildAFactory2Game:powerStored", {
              stored: (0, VB.W)(IB),
              cap: (0, VB.W)(ZB)
            })
          }), (0, Oo.jsx)("span", {
            className: QJ()("Baf2WaterNet", {
              Draining: TB < -.05
            }),
            children: nB
          })]
        })]
      })
    }

    function cv(BB) {
      let {
        water: IB,
        at: ZB,
        side: TB = null
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)(), oB = fG(), [GB, vB, kB] = IB;
      return (0, Oo.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, Oo.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, Oo.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: JB(null === TB ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${TB}`)
          }), (0, Oo.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              oB.send(`${VB.H} ${ZB[0]} ${ZB[1]} ${ZB[2]}${"cryoOut"===TB?" cryo":""}`)
            },
            children: JB("buildAFactory2Game:waterDetails")
          })]
        }), (0, Oo.jsx)(kv, {
          stored: GB,
          cap: vB,
          netPerS: kB,
          rates: ov(JB, "cryoOut" === TB, yo(Math.abs(kB), kB < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === TB
        })]
      })
    }

    function nv(BB, IB) {
      var ZB, TB, JB;
      const oB = !0 === IB.baf2WaterCryo,
        GB = null !== (ZB = null === (TB = IB.baf2WaterMakers.find((BB => BB[0] === (oB ? VB.e : "Condenser")))) || void 0 === TB ? void 0 : TB[1]) && void 0 !== ZB ? ZB : 0,
        vB = [],
        kB = (IB, ZB, TB) => {
          IB > 0 && vB.push(BB(1 === IB ? ZB : TB, {
            count: String(IB)
          }))
        };
      return oB ? kB(GB, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : kB(GB, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), kB(null !== (JB = IB.baf2WaterPipes) && void 0 !== JB ? JB : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), kB(IB.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), vB.join(" \xb7 ")
    }

    function hv(BB, IB) {
      if (!0 === IB.baf2WaterCryo) return function(BB, IB) {
        const ZB = PI[VB.e];
        switch (IB.baf2WaterThis) {
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
            var TB;
            const [JB, oB] = null !== (TB = IB.baf2WaterThisRates) && void 0 !== TB ? TB : [(0, VB.K)(ZB, ZB.cryoMade), (0, VB.K)(ZB, ZB.powerPerOp)];
            return !0 === IB.baf2WaterDriven ? {
              text: BB("buildAFactory2Game:cryoThisMixerDriven", {
                rate: Jv(JB)
              }),
              bad: !1
            } : {
              text: BB("buildAFactory2Game:cryoThisMixer", {
                rate: Jv(JB),
                power: Jv(oB)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: BB("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(BB, IB);
      const ZB = !0 === IB.baf2WaterDriven,
        TB = PI.Condenser;
      switch (IB.baf2WaterThis) {
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
              tank: (0, VB.W)(VB.t),
              cap: (0, VB.W)(IB.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var JB;
          const [oB, GB] = null !== (JB = IB.baf2WaterThisRates) && void 0 !== JB ? JB : [Iv, (0, VB.K)(TB, TB.powerPerOp)];
          return ZB ? {
            text: BB("buildAFactory2Game:waterThisCondenserDriven", {
              rate: Jv(oB)
            }),
            bad: !1
          } : {
            text: BB("buildAFactory2Game:waterThisCondenser", {
              rate: Jv(oB),
              power: Jv(GB)
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

    function zv(BB, IB) {
      const ZB = IB.baf2WaterMakers.some((BB => !0 === BB[5]));
      if (!0 === IB.baf2WaterCryo) {
        const TB = IB.baf2WaterUsedPerS - IB.baf2WaterMadePerS,
          JB = ZB || TB <= Zv ? 0 : (0, VB.I)(TB);
        return 0 === JB ? null : JB > 1 ? BB("buildAFactory2Game:cryoNextMixers", {
          mixers: String(JB)
        }) : BB("buildAFactory2Game:cryoNextOne")
      }
      const TB = ZB ? null : function(BB, IB) {
        const ZB = IB - BB;
        return ZB <= Zv ? null : Math.ceil(ZB / Iv)
      }(IB.baf2WaterMadePerS, IB.baf2WaterUsedPerS);
      return null === TB ? null : TB > 1 ? BB("buildAFactory2Game:waterNextCondensers", {
        condensers: String(TB)
      }) : BB("buildAFactory2Game:waterNextOne")
    }

    function Fv(BB) {
      let {
        item: IB,
        label: ZB,
        note: TB,
        value: JB,
        dim: oB,
        bad: GB
      } = BB;
      return (0, Oo.jsxs)("li", {
        className: QJ()("Baf2WaterRow", {
          Dim: oB,
          Bad: GB
        }),
        children: [(0, Oo.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, Oo.jsx)(pJ.e, {
            itemName: IB,
            amount: 0
          })
        }), (0, Oo.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, Oo.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: ZB
          }), TB && (0, Oo.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: TB
          })]
        }), (0, Oo.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: JB
        })]
      })
    }

    function Nv(BB) {
      return Bv.k[BB] ? BB : "Reactor Port"
    }

    function gv(BB) {
      let {
        message: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)(), TB = !0 === IB.baf2WaterCryo, JB = (BB, IB) => ov(ZB, TB, yo(BB, IB));
      return (0, Oo.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, Oo.jsxs)("section", {
          children: [(0, Oo.jsxs)("h3", {
            children: [ZB("buildAFactory2Game:waterMakes"), (0, Oo.jsx)("span", {
              children: JB(IB.baf2WaterMadePerS, "+")
            })]
          }), (0, Oo.jsxs)("ul", {
            children: [0 === IB.baf2WaterMakers.length && (0, Oo.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: ZB(TB ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), IB.baf2WaterMakers.map((BB => {
              let [IB, TB, oB, GB, vB, kB] = BB;
              const cB = ZB("buildAFactory2Game:powerRunning", {
                amount: String(oB)
              });
              let nB = vB > 0 ? ZB("buildAFactory2Game:waterMakerPower", {
                running: cB,
                power: Jv(vB)
              }) : cB;
              return kB && (nB = ZB(0 === oB && GB <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, Oo.jsx)(Fv, {
                item: IB,
                label: `${To(ZB,IB)} \xd7${TB}`,
                note: nB,
                value: oB > 0 || kB && GB > 0 ? JB(GB, "+") : ZB("buildAFactory2Game:powerIdle"),
                dim: 0 === oB && !kB,
                bad: kB
              }, IB)
            }))]
          })]
        }), (0, Oo.jsxs)("section", {
          children: [(0, Oo.jsxs)("h3", {
            children: [ZB("buildAFactory2Game:waterUses"), (0, Oo.jsx)("span", {
              children: JB(IB.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, Oo.jsxs)("ul", {
            children: [0 === IB.baf2WaterUsers.length && (0, Oo.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: ZB(TB ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), IB.baf2WaterUsers.map((BB => {
              let [IB, TB, oB, GB] = BB;
              const vB = Bv.k[IB] ? To(ZB, IB) : IB;
              return (0, Oo.jsx)(Fv, {
                item: Nv(IB),
                label: TB > 1 ? `${vB} \xd7${TB}` : vB,
                note: GB ? ZB("buildAFactory2Game:waterPortFirst") : void 0,
                value: oB > 0 ? JB(oB, "\u2212") : ZB("buildAFactory2Game:powerIdle"),
                dim: 0 === oB
              }, IB)
            }))]
          })]
        })]
      })
    }

    function qv(BB) {
      var IB, ZB, JB, oB, GB;
      let {
        store: vB,
        close: kB
      } = BB;
      const {
        t: cB
      } = (0, YJ.G)(), nB = function(BB) {
        const [IB, ZB] = (0, TB.useState)((() => BB.get()));
        return (0, TB.useEffect)((() => (ZB(BB.get()), BB.subscribe((() => {
          ZB(BB.get())
        })))), [BB]), IB
      }(vB), hB = null !== (IB = null === nB || void 0 === nB ? void 0 : nB.baf2WaterStored) && void 0 !== IB ? IB : 0, zB = null !== (ZB = null === nB || void 0 === nB ? void 0 : nB.baf2WaterCap) && void 0 !== ZB ? ZB : 0, FB = null !== (JB = null === nB || void 0 === nB ? void 0 : nB.baf2WaterMadePerS) && void 0 !== JB ? JB : 0, NB = null !== (oB = null === nB || void 0 === nB ? void 0 : nB.baf2WaterUsedPerS) && void 0 !== oB ? oB : 0, gB = null !== (GB = null === nB || void 0 === nB ? void 0 : nB.baf2WaterNetPerS) && void 0 !== GB ? GB : FB - NB, qB = nB && hv(cB, nB), yB = nB && zv(cB, nB), UB = !0 === (null === nB || void 0 === nB ? void 0 : nB.baf2WaterCryo);
      return (0, Oo.jsx)(QG.c, {
        close: kB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Oo.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, Oo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Oo.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== nB && zB <= 0 ? (0, Oo.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, Oo.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, Oo.jsx)(pJ.e, {
                  itemName: UB ? NZ.f : VB.j,
                  amount: 0
                })
              }), (0, Oo.jsxs)("div", {
                children: [(0, Oo.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: cB(UB ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), nB && (0, Oo.jsx)("p", {
                  children: nv(cB, nB)
                })]
              })]
            }), (0, Oo.jsx)(sG.l, {
              onClick: kB
            })]
          }), nB && qB && (0, Oo.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, Oo.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, Oo.jsx)(kv, {
                stored: hB,
                cap: zB,
                netPerS: gB,
                cryo: UB,
                rates: Gv(cB, UB, FB, NB)
              })
            }), (0, Oo.jsx)("div", {
              className: QJ()("Baf2WaterThis", {
                Bad: qB.bad
              }),
              children: qB.text
            }), nB.baf2WaterDriven && (0, Oo.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, Oo.jsx)(iJ.d, {
                name: "bolt"
              }), cB(UB ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), yB && (0, Oo.jsx)("p", {
              className: "Baf2WaterNext",
              children: yB
            }), (0, Oo.jsx)(gv, {
              message: nB
            })]
          })]
        })
      })
    }
    class yv {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(BB, IB) {
        const ZB = this.get(BB);
        ZB && null === IB.opLeftMs && null === IB.fuelLeftMs && IB.status === ZB.status ? IB = {
          ...IB,
          opLeftMs: ZB.opLeftMs,
          fuelLeftMs: ZB.fuelLeftMs,
          burning: ZB.burning
        } : this.updates++, this.pos = BB, this.view = IB;
        for (const TB of this.listeners) TB()
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

    function Uv(BB, IB, ZB, TB) {
      return "noFuel" === IB && TB && !JZ(PI[BB]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === IB && !0 === (null === ZB || void 0 === ZB ? void 0 : ZB.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === IB && !0 === (null === ZB || void 0 === ZB ? void 0 : ZB.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === IB && !0 === (null === ZB || void 0 === ZB ? void 0 : ZB.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === IB && !0 === (null === ZB || void 0 === ZB ? void 0 : ZB.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Wv(IB, ZB) ? "buildAFactory2Game:machineStatus_noInputShort" : function(BB, IB) {
        const ZB = PI[BB];
        if ("noFuel" === IB && void 0 !== ZB.fuels) return JZ(ZB) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (ZB.mobFarm && ("noInput" === IB || "badInput" === IB)) return `buildAFactory2Game:machineStatus_${IB}MobFarm`;
        if ("outputFull" === IB && (void 0 !== ZB.table || ZB.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === IB && bI(ZB)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== ZB.cryoMade && ("noInput" === IB || "noOutlet" === IB || "fluidFull" === IB)) return `buildAFactory2Game:machineStatus_${IB}Mixer`;
        return `buildAFactory2Game:machineStatus_${IB}`
      }(BB, IB)
    }

    function Wv(BB, IB) {
      return "noInput" === BB && null !== IB && void 0 !== IB && IB.input && IB.inputShort ? {
        input: IB.input,
        short: IB.inputShort
      } : null
    }

    function dv(BB) {
      return sJ(BB) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== BB.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Cv(BB) {
      const IB = (0, PB.Ee)(BB);
      return `Baf2Pane Baf2Pane${IB.charAt(0).toUpperCase()}${IB.slice(1)}`
    }

    function Qv(BB, IB) {
      const [ZB, JB] = (0, TB.useState)((() => BB.get(IB)));
      return (0, TB.useEffect)((() => {
        JB(BB.get(IB));
        const ZB = BB.subscribe((() => {
          JB(BB.get(IB))
        }));
        return () => {
          ZB(), BB.forget(IB)
        }
      }), [BB, ...IB]), ZB
    }

    function sv(BB, IB, ZB, TB) {
      const JB = PI[BB],
        oB = IB && JB.couplable ? fI(JB, ZB) : JB,
        GB = null !== TB && IZ(oB) ? function(BB, IB) {
          var ZB;
          return null !== (ZB = null !== IB && IZ(BB) ? vZ[IB] : void 0) && void 0 !== ZB ? ZB : BB.opMs
        }(oB, kZ(TB)) : oB.opMs;
      return GB === oB.opMs ? oB : {
        ...oB,
        opMs: GB
      }
    }

    function wv(BB) {
      let {
        running: IB,
        opMs: ZB,
        opLeftMs: TB,
        updateCount: JB
      } = BB;
      return (0, Oo.jsx)("div", {
        className: QJ()("Baf2MachineProgress", {
          Running: IB
        }),
        children: (0, Oo.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: ZB / 1e3 + "s",
            animationDelay: null === TB ? void 0 : (TB - ZB) / 1e3 + "s"
          }
        }, JB)
      })
    }

    function Ov(BB) {
      let {
        running: IB,
        leftMs: ZB,
        periodMs: TB,
        updateCount: JB
      } = BB;
      const {
        t: oB
      } = (0, YJ.G)(), GB = Math.min(Math.max(null !== ZB && void 0 !== ZB ? ZB : 0, 0), TB), vB = IB && GB > 0, kB = oB("buildAFactory2Game:machineBarFuel");
      return (0, Oo.jsx)("div", {
        className: QJ()("Baf2FuelBurn", {
          Draining: vB
        }),
        role: "img",
        title: kB,
        "aria-label": kB,
        children: (0, Oo.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: vB ? {
            animationDuration: TB / 1e3 + "s",
            animationDelay: (GB - TB) / 1e3 + "s"
          } : {
            transform: `scaleY(${GB/TB})`
          }
        }, JB)
      })
    }

    function Yv(BB, IB, ZB) {
      let [TB, JB] = ZB;
      const oB = 1 !== TB ? OJ(IB) : null;
      return {
        amount: TB,
        have: JB,
        item: BB(oB || Zo(IB))
      }
    }

    function iv(BB) {
      return IZ(BB) ? "buildAFactory2Game:machineBarMining" : ZZ(BB) ? "buildAFactory2Game:machineBarCutting" : void 0 !== BB.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function pv(BB) {
      var IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB, UB, WB;
      let {
        kind: dB,
        XJ: CB,
        store: QB,
        power: sB,
        renderSlot: wB
      } = BB;
      const {
        t: OB
      } = (0, YJ.G)(), YB = Qv(QB, CB), iB = PI[dB], pB = null !== (IB = null === YB || void 0 === YB ? void 0 : YB.coupled) && void 0 !== IB && IB, aB = null !== (ZB = null === YB || void 0 === YB ? void 0 : YB.couplerLevel) && void 0 !== ZB ? ZB : 1, HB = sv(dB, pB, aB, null !== (TB = null === YB || void 0 === YB || null === (JB = YB.dug) || void 0 === JB ? void 0 : JB.item) && void 0 !== TB ? TB : null), MB = null !== (oB = null === YB || void 0 === YB ? void 0 : YB.status) && void 0 !== oB ? oB : null, jB = null !== (GB = null === YB || void 0 === YB ? void 0 : YB.power) && void 0 !== GB ? GB : null, PB = null !== (vB = null === YB || void 0 === YB ? void 0 : YB.opLeftMs) && void 0 !== vB ? vB : null, RB = null !== (kB = null === YB || void 0 === YB ? void 0 : YB.dug) && void 0 !== kB ? kB : null, rB = null !== RB && IZ(iB) ? vZ[null !== (cB = kZ(RB.item)) && void 0 !== cB ? cB : ""] : void 0, mB = void 0 === rB ? null : 6e4 / rB, XB = null !== (nB = null === YB || void 0 === YB ? void 0 : YB.powerCap) && void 0 !== nB ? nB : 4e3, LB = null !== (hB = null === YB || void 0 === YB ? void 0 : YB.tier) && void 0 !== hB ? hB : null, eB = void 0 !== HB.powerMade, uB = null !== iB.fuelSlot ? wB(iB.fuelSlot) : null, fB = uI(iB), lB = !pB && !0 === (null === YB || void 0 === YB ? void 0 : YB.fuelFed), tB = !pB && !0 === (null === YB || void 0 === YB ? void 0 : YB.fuelFeeds), bB = null !== iB.fuelSlot && !pB, xB = null !== (zB = null === YB || void 0 === YB ? void 0 : YB.fuelLeftMs) && void 0 !== zB ? zB : null, EB = function(BB, IB, ZB) {
        var TB;
        const JB = null === IB ? void 0 : oZ[IB];
        return Math.max(null !== (TB = null !== JB && void 0 !== JB ? JB : ZB) && void 0 !== TB ? TB : 0, BB.opMs)
      }(HB, null !== (FB = null === YB || void 0 === YB ? void 0 : YB.burning) && void 0 !== FB ? FB : null, xB), DB = null !== (NB = null === YB || void 0 === YB ? void 0 : YB.fuelKeep) && void 0 !== NB ? NB : null, KB = null === MB ? null : Uv(dB, MB, YB, lB), VB = null === MB ? null : Wv(MB, YB);
      return (0, Oo.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, Oo.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Oo.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: OB(Zo(dB))
          }), RB && (0, Oo.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [OB("Tree Cutter" === dB ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, Oo.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Oo.jsx)(pJ.e, {
                itemName: RB.item,
                amount: 0
              })
            }), (0, Oo.jsx)(aJ.e, {
              text: RB.name
            })]
          }), null !== mB && (0, Oo.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: OB("buildAFactory2Game:machineDigsFixed", {
              perMin: String(mB)
            })
          }), (null === YB || void 0 === YB ? void 0 : YB.field) && (0, Oo.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, Oo.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Oo.jsx)(pJ.e, {
                itemName: "Wheat",
                amount: 0
              })
            }), OB("buildAFactory2Game:machineField", {
              planted: String(YB.field[0]),
              ripe: String(YB.field[1])
            })]
          }), (0, Oo.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Oo.jsxs)("div", {
              className: QJ()("Baf2MachineColumn", {
                Baf2Burns: bB
              }),
              children: [null !== HB.inputSlot && (0, Oo.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, Oo.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: OB(dv(HB))
                }), wB(HB.inputSlot)]
              }), null !== iB.fuelSlot && !pB && (0, Oo.jsxs)("div", {
                className: QJ()("Baf2MachineSlot", {
                  Baf2FuelFed: lB
                }),
                children: [(0, Oo.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [lB && (0, Oo.jsx)(iJ.d, {
                    name: "fire"
                  }), OB("buildAFactory2Game:machineFuel")]
                }), (0, Oo.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, Oo.jsx)(Ov, {
                    running: "running" === MB,
                    leftMs: xB,
                    periodMs: EB,
                    updateCount: QB.updateCount
                  }), uB]
                })]
              }), null !== iB.fuelSlot && pB && (0, Oo.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, Oo.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: OB("buildAFactory2Game:machineFuel")
                }), (0, Oo.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: OB("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": OB("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, Oo.jsx)(iJ.d, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, Oo.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, Oo.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: OB(iv(HB))
              }), (0, Oo.jsx)(wv, {
                running: "running" === MB,
                opMs: HB.opMs,
                opLeftMs: PB,
                updateCount: QB.updateCount
              })]
            }), HB.outputSlots.length > 0 && (0, Oo.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Oo.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: OB("buildAFactory2Game:machineOutput")
              }), (0, Oo.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: HB.outputSlots.map((BB => (0, Oo.jsx)("div", {
                  children: wB(BB)
                }, BB)))
              })]
            }), null !== jB && eB && (0, Oo.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, Oo.jsx)("div", {
                style: {
                  height: 100 * jB / XB + "%"
                }
              })
            })]
          }), bB && null !== DB && (0, Oo.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Oo.jsx)(iJ.d, {
              name: "arrows-rotate"
            }), OB(ZZ(HB) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(DB)
            })]
          }), (lB || tB) && (0, Oo.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Oo.jsx)(iJ.d, {
              name: "fire"
            }), OB(lB ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), iB.couplable && (0, Oo.jsx)(VG, {
            kind: dB,
            tier: LB,
            coupled: pB,
            level: aB,
            slot: fB === iB.fuelSlot ? uB : null !== fB ? wB(fB) : null
          }), null !== jB && !eB && !0 === (null === YB || void 0 === YB ? void 0 : YB.reactorPowered) && (0, Oo.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: OB("buildAFactory2Game:machineReactorPowered")
          }), null !== jB && !eB && !0 !== (null === YB || void 0 === YB ? void 0 : YB.reactorPowered) && (0, Oo.jsx)(HG, {
            stored: jB,
            cap: XB,
            rates: null !== (gB = null === YB || void 0 === YB ? void 0 : YB.powerRates) && void 0 !== gB ? gB : null
          }), (null === YB || void 0 === YB ? void 0 : YB.water) && (0, Oo.jsx)(cv, {
            water: YB.water,
            at: CB,
            side: YB.cryo ? "waterIn" : null
          }), (null === YB || void 0 === YB ? void 0 : YB.cryo) && (0, Oo.jsx)(cv, {
            water: YB.cryo,
            at: CB,
            side: "cryoOut"
          }), null !== YB && void 0 !== YB && YB.inertCoupler ? (0, Oo.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: OB("buildAFactory2Game:machineStatus_couplerOff", {
              item: To(OB, YB.inertCoupler)
            })
          }) : null !== KB && (0, Oo.jsx)("div", {
            className: QJ()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== MB
            }),
            children: OB(KB, VB ? Yv(OB, VB.input, VB.short) : void 0)
          })]
        }), (0, Oo.jsxs)("div", {
          className: QJ()("Baf2MachineSide", {
            Baf2SynthSide: bI(iB)
          }),
          children: [bI(iB) && (0, Oo.jsx)(DG, {
            XJ: CB,
            taught: null !== (qB = null === YB || void 0 === YB ? void 0 : YB.taught) && void 0 !== qB ? qB : null
          }, CB.join(",")), eB && (0, Oo.jsx)(jG, {
            kind: dB,
            def: HB,
            XJ: CB,
            power: sB,
            stored: null !== jB && void 0 !== jB ? jB : 0,
            cap: XB
          }), AB(iB) && (0, Oo.jsx)(bG, {
            XJ: CB,
            input: null !== (yB = null === YB || void 0 === YB ? void 0 : YB.input) && void 0 !== yB ? yB : null,
            drops: null !== (UB = null === YB || void 0 === YB ? void 0 : YB.farm) && void 0 !== UB ? UB : null,
            seconds: String(HB.opMs / 1e3)
          }), !eB && !AB(iB) && !bI(iB) && (0, Oo.jsx)(JG, {
            kind: dB,
            def: HB,
            input: null !== (WB = null === YB || void 0 === YB ? void 0 : YB.input) && void 0 !== WB ? WB : null,
            tier: null !== LB && void 0 !== LB ? LB : 1,
            noSeeds: !0 === (null === YB || void 0 === YB ? void 0 : YB.noSeeds)
          })]
        })]
      })
    }

    function av(BB, IB, ZB, TB) {
      var JB;
      const oB = PI[BB],
        GB = [oB.inputSlot, oB.fuelSlot, ...null !== (JB = oB.inputSlots) && void 0 !== JB ? JB : []].filter((BB => null !== BB));
      return {
        render: JB => {
          let {
            XJ: oB,
            renderSlot: GB
          } = JB;
          return (0, Oo.jsx)(uG.Provider, {
            value: TB,
            children: (0, Oo.jsx)(pv, {
              kind: BB,
              XJ: oB,
              store: IB,
              power: ZB,
              renderSlot: GB
            })
          })
        },
        quickMoveRange: GB.length > 0 ? [Math.min(...GB), Math.max(...GB) + 1] : [0, 0],
        className: Cv(BB)
      }
    }
    const Hv = "Assembler";

    function Mv(BB) {
      var IB, ZB, TB, JB, oB, GB, vB, kB, cB;
      let {
        XJ: nB,
        store: hB,
        renderSlot: zB
      } = BB;
      const {
        t: FB
      } = (0, YJ.G)(), NB = Qv(hB, nB), gB = null !== (IB = null === NB || void 0 === NB ? void 0 : NB.tier) && void 0 !== IB ? IB : 1, qB = null !== (ZB = null === NB || void 0 === NB ? void 0 : NB.taught) && void 0 !== ZB ? ZB : null, yB = KI(Hv, {
        coupled: !1,
        taught: qB
      }), UB = null !== (TB = yB.bench) && void 0 !== TB ? TB : null, WB = null !== (JB = null === NB || void 0 === NB ? void 0 : NB.status) && void 0 !== JB ? JB : null, dB = null !== (oB = null === NB || void 0 === NB ? void 0 : NB.power) && void 0 !== oB ? oB : null, CB = null !== (GB = null === NB || void 0 === NB ? void 0 : NB.powerCap) && void 0 !== GB ? GB : 4e3;
      return (0, Oo.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, Oo.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Oo.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: FB(Zo(Hv))
          }), UB && (0, Oo.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [FB("buildAFactory2Game:benchMakes"), (0, Oo.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, Oo.jsx)(pJ.e, {
                itemName: UB.output,
                amount: 0
              })
            }), (null === NB || void 0 === NB ? void 0 : NB.taughtName) && (0, Oo.jsx)(aJ.e, {
              text: NB.taughtName
            }), UB.outputAmount > 1 && (0, Oo.jsxs)("span", {
              children: ["\xd7", UB.outputAmount]
            })]
          }), !UB && (0, Oo.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: FB("buildAFactory2Game:benchTeachHint")
          }), (0, Oo.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Oo.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (vB = yB.inputSlots) && void 0 !== vB ? vB : []).map(((BB, IB) => {
                const ZB = null === UB || void 0 === UB ? void 0 : UB.inputs[IB];
                return (0, Oo.jsxs)("div", {
                  className: QJ()("Baf2BenchInput", {
                    Spare: !ZB
                  }),
                  children: [(0, Oo.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [zB(BB), ZB && (0, Oo.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, Oo.jsx)(pJ.e, {
                        itemName: ZB.item,
                        amount: 0
                      })
                    })]
                  }), (0, Oo.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: ZB ? `\xd7${ZB.amount}` : "\xa0"
                  })]
                }, BB)
              }))
            }), (0, Oo.jsx)(wv, {
              running: "running" === WB,
              opMs: yB.opMs,
              opLeftMs: null !== (kB = null === NB || void 0 === NB ? void 0 : NB.opLeftMs) && void 0 !== kB ? kB : null,
              updateCount: hB.updateCount
            }), (0, Oo.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Oo.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: FB("buildAFactory2Game:machineOutput")
              }), (0, Oo.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: yB.outputSlots.map((BB => (0, Oo.jsx)("div", {
                  children: zB(BB)
                }, BB)))
              })]
            })]
          }), null !== dB && (0, Oo.jsx)(HG, {
            stored: dB,
            cap: CB,
            rates: null !== (cB = null === NB || void 0 === NB ? void 0 : NB.powerRates) && void 0 !== cB ? cB : null
          }), null !== WB && (0, Oo.jsx)("div", {
            className: QJ()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== WB
            }),
            children: FB(Uv(Hv, WB, NB, !1))
          }), UB && UB.inputs.length > 1 && (0, Oo.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: FB("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, Oo.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, Oo.jsx)(GG, {
            taught: qB,
            tier: gB
          }), UB && (0, Oo.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: FB("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function jv(BB) {
      var IB;
      const ZB = null !== (IB = PI[Hv].inputSlots) && void 0 !== IB ? IB : [];
      return {
        render: IB => {
          let {
            XJ: ZB,
            renderSlot: TB
          } = IB;
          return (0, Oo.jsx)(Mv, {
            XJ: ZB,
            store: BB,
            renderSlot: TB
          })
        },
        quickMoveRange: [Math.min(...ZB), Math.max(...ZB) + 1],
        className: Cv(Hv)
      }
    }
    var Pv = ZB(105),
      Rv = ZB(1179),
      rv = ZB(4416);
    const mv = 600,
      Xv = .5,
      Lv = 4,
      ev = 1200,
      uv = 140,
      fv = 100,
      lv = 32,
      Av = 16,
      tv = 100.5,
      bv = 90,
      xv = 1.5,
      Ev = 50;

    function Dv(BB) {
      switch (HZ(BB)) {
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
    const Kv = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Vv(BB) {
      const IB = Math.ceil(60 * BB / fv);
      return {
        fuel: Math.max(lv, IB),
        waste: Math.max(Av, IB)
      }
    }

    function Sv(BB, IB, ZB) {
      const [TB, JB, oB] = [BB - 2, IB - 2, ZB - 2];
      return 2 * (TB * JB + JB * oB + oB * TB) * uv
    }

    function Bk(BB, IB, ZB) {
      return Math.max(0, BB - 2) * Math.max(0, IB - 2) * Math.max(0, ZB - 2)
    }

    function Ik(BB, IB) {
      const [ZB, TB, JB] = BB, oB = ZB * TB * JB, GB = new Float32Array(oB);
      let vB = 0,
        kB = 0,
        cB = 0,
        nB = 0,
        hB = 0;
      const zB = (BB, oB, GB) => BB < 0 || BB >= ZB || oB < 0 || oB >= TB || GB < 0 || GB >= JB ? 0 : IB[(oB * JB + GB) * ZB + BB];
      for (let qB = 0; qB < TB; qB++)
        for (let BB = 0; BB < JB; BB++)
          for (let TB = 0; TB < ZB; TB++) {
            const oB = (qB * JB + BB) * ZB + TB,
              FB = IB[oB];
            if (1 === FB) {
              vB++;
              let IB = 0;
              for (const [ZB, JB, oB] of Kv) {
                const GB = zB(TB + ZB, qB + JB, BB + oB);
                1 !== GB && 2 !== GB || IB++
              }
              GB[oB] = mv * (1 + Xv * Math.min(IB, Lv)), nB += GB[oB]
            } else if (2 === FB) kB++;
            else if (3 === FB) {
              cB++;
              Kv.some((IB => {
                let [ZB, JB, oB] = IB;
                return 1 === zB(TB + ZB, qB + JB, BB + oB)
              })) && (hB += ev)
            }
          }
      const FB = Sv(ZB + 2, TB + 2, JB + 2),
        NB = Math.min(nB, hB, FB),
        gB = vB > 0 ? nB * fv / vB : 0;
      return {
        rods: vB,
        graphite: kB,
        channels: cB,
        fuelHeat: nB,
        cooling: hB,
        size: FB,
        max: NB,
        vol: oB,
        powerPerUnit: gB,
        pelletsPerMin: gB > 0 ? NB / gB * 60 : 0,
        waterPerS: NB * VB.q,
        rodHeat: GB
      }
    }
    const Zk = 0,
      Tk = 1,
      Jk = 6,
      Gk = 7,
      vk = 8;

    function kk(BB, IB) {
      const [ZB, TB, JB] = BB, oB = new Uint8Array(ZB * TB * JB), GB = (BB, oB, GB) => BB < 0 || BB >= ZB || oB < 0 || oB >= TB || GB < 0 || GB >= JB ? 0 : IB[(oB * JB + GB) * ZB + BB];
      for (let vB = 0; vB < TB; vB++)
        for (let BB = 0; BB < JB; BB++)
          for (let TB = 0; TB < ZB; TB++) {
            const kB = (vB * JB + BB) * ZB + TB,
              cB = IB[kB];
            if (1 === cB) {
              let IB = 0;
              for (const [ZB, JB, oB] of Kv) {
                const kB = GB(TB + ZB, vB + JB, BB + oB);
                IB += 1 === kB || 2 === kB ? 1 : 0
              }
              oB[kB] = Tk + Math.min(IB, Lv)
            } else if (3 === cB) {
              const IB = Kv.some((IB => {
                let [ZB, JB, oB] = IB;
                return 1 === GB(TB + ZB, vB + JB, BB + oB)
              }));
              oB[kB] = IB ? Jk : Gk
            } else 2 === cB && (oB[kB] = vk)
          }
      return oB
    }

    function ck(BB) {
      return BB.fuelHeat <= BB.cooling && BB.fuelHeat <= BB.size ? "fuel" : BB.cooling <= BB.size ? "cooling" : "size"
    }
    const nk = bv;

    function hk(BB, IB, ZB) {
      return Math.round(BB * IB * ZB * 25e3 * (1 + .25 * (Math.min(BB, IB, ZB) - 2)))
    }

    function zk(BB) {
      return Math.max(0, Math.min(VB.f, BB))
    }

    function Fk(BB, IB, ZB) {
      const TB = IB * zk(ZB);
      return BB <= 0 ? 0 : TB > 0 ? Math.min(200, 100 * BB / TB) : 200
    }

    function Nk(BB, IB) {
      const ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? xv : 1;
      return Math.min(BB.fuelHeat * ZB, BB.cooling * zk(IB), BB.size * ZB)
    }

    function gk(BB) {
      return 2 + BB / 10
    }
    const qk = "buildAFactory2Game:";

    function yk(BB) {
      var IB;
      return null !== (IB = BB.baf2RxMood) && void 0 !== IB ? IB : function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const ZB = [
          ["calm", 50],
          ["warm", nk],
          ["hot", tv]
        ];
        for (const [TB, JB] of ZB)
          if (BB < JB + (TB === IB ? 3 : 0)) return TB;
        return "alarm"
      }(BB.baf2RxHeat)
    }
    const Uk = 120;

    function Wk(BB) {
      const IB = BB.baf2RxState;
      if ("running" === IB && BB.baf2RxHeat > tv) return {
        label: `${qk}rxState_tooHot`,
        tone: "bad",
        fix: `${qk}rxFix_tooHot`
      };
      switch (IB) {
        case "running":
          return {
            label: `${qk}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${qk}rxState_idle`, tone: "off", fix: `${qk}rxFix_idle`
          };
        case "scram":
          return {
            label: `${qk}rxState_scram`, tone: "off", fix: BB.baf2RxHeat < Ev ? `${qk}rxFix_scramCool` : `${qk}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${qk}rxState_${IB}`, tone: "off", fix: `${qk}rxFix_${IB}`
          };
        case "melted":
          return {
            label: `${qk}rxState_melted`, tone: "bad", fix: `${qk}rxFix_melted`
          };
        default:
          return {
            label: `${qk}rxState_${IB}`, tone: "warn", fix: `${qk}rxFix_${IB}`
          }
      }
    }

    function dk(BB) {
      const [IB, ZB, TB] = BB.baf2RxStats;
      return {
        fuelHeat: IB,
        cooling: ZB * (BB.baf2RxCryo ? Math.max(1, zk(BB.baf2RxWater / 100)) : 1),
        size: TB
      }
    }

    function Ck(BB) {
      var IB;
      const ZB = "idle" === BB.baf2RxState || "running" === BB.baf2RxState && BB.baf2RxHeat <= tv || "scram" === BB.baf2RxState && BB.baf2RxHeat < Ev;
      if (0 === (BB.baf2RxFlags & dI) || !BB.baf2RxFormed || !ZB) return null;
      const {
        fuelHeat: TB,
        cooling: JB,
        size: oB
      } = dk(BB), GB = Math.min(TB, JB, oB), vB = ck({
        fuelHeat: TB,
        cooling: JB,
        size: oB
      }), kB = "cooling" === vB && !0 === BB.baf2RxCryoOpen && !BB.baf2RxCryo, cB = null !== (IB = BB.baf2RxCells) && void 0 !== IB ? IB : "", nB = ("fuel" === vB || "cooling" === vB && !0 === BB.baf2RxCryo) && cB.length > 0 && !cB.includes(String(0)), hB = kB ? "Cryo" : "scram" === BB.baf2RxState ? "Off" : "";
      return GB < 12e3 ? {
        key: `${qk}rxGrow_${nB?"full":vB}${hB}`,
        amount: GB
      } : null
    }

    function Qk(BB, IB) {
      return BB[0] === IB[0] && BB[1] === IB[1] && BB[2] === IB[2]
    }

    function sk(BB) {
      return [...BB].sort(((BB, IB) => Number(IB[2] < IB[1]) - Number(BB[2] < BB[1])))
    }

    function wk(BB, IB) {
      return IB.some((IB => {
        let [ZB, TB] = IB;
        return !(TB <= 0) && ["edge", "cap", "wall", "inside"].some((IB => ZB === oT(BB, IB)))
      }))
    }

    function Ok(BB, IB, ZB) {
      const TB = BB.baf2RxFuel - BB.baf2RxPu > 0 ? ZB : 0;
      return {
        full: BB.baf2RxWaste > IB - 3,
        fullInS: TB > 0 ? Math.max(0, IB - BB.baf2RxWaste) / TB : null
      }
    }
    const Yk = {
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

    function ik(BB) {
      return pk[BB]
    }
    const pk = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function ak(BB) {
      let [IB, ZB, TB] = BB;
      return Math.ceil(Sv(IB, ZB, TB) * VB.q)
    }

    function Hk(BB, IB) {
      return "battery" === BB ? IB[0] * IB[1] * IB[2] : function(BB) {
        let [IB, ZB, TB] = BB;
        return IB * ZB * TB - Math.max(0, IB - 2) * Math.max(0, ZB - 2) * Math.max(0, TB - 2)
      }(IB) - 1
    }

    function Mk(BB) {
      const IB = Math.max(0, BB);
      if (IB < 10) return String(Math.round(10 * IB) / 10);
      if (IB < 1e4) return Math.round(IB).toLocaleString("en-US");
      if (IB < 1e6) return `${IB<1e5?(Math.floor(IB/100)/10).toFixed(1):Math.floor(IB/1e3)}k`;
      const ZB = IB / 1e6;
      return `${ZB<10?(Math.floor(100*ZB)/100).toFixed(2):ZB<100?(Math.floor(10*ZB)/10).toFixed(1):Math.floor(ZB)}M`
    }

    function jk(BB) {
      return BB <= 0 ? "0" : BB >= 10 ? String(Math.round(BB)) : BB.toFixed(BB >= 1 ? 1 : 2)
    }

    function Pk(BB) {
      const IB = VZ(BB, 0),
        ZB = VZ(BB, xZ(BB) - 1);
      return {
        lo: [Math.min(IB[0], ZB[0]), Math.min(IB[1], ZB[1]), Math.min(IB[2], ZB[2])],
        hi: [Math.max(IB[0], ZB[0]) + 1, Math.max(IB[1], ZB[1]) + 1, Math.max(IB[2], ZB[2]) + 1]
      }
    }

    function Rk(BB, IB, ZB) {
      const TB = [IB[0] - BB[0], IB[1] - BB[1], IB[2] - BB[2]],
        JB = [(BB[0] + IB[0]) / 2, (BB[1] + IB[1]) / 2, (BB[2] + IB[2]) / 2],
        oB = [];
      for (let GB = 0; GB < 3; GB++) {
        const vB = (GB + 1) % 3,
          kB = (GB + 2) % 3;
        for (const cB of [BB[vB], IB[vB]])
          for (const nB of [BB[kB], IB[kB]]) {
            const BB = [0, 0, 0],
              IB = [ZB, ZB, ZB];
            BB[GB] = JB[GB], IB[GB] = TB[GB] + ZB, BB[vB] = cB, BB[kB] = nB, oB.push([BB, IB])
          }
      }
      return oB
    }
    const rk = "buildAFactory2Game:",
      mk = [`${rk}colNorth`, `${rk}colEast`, `${rk}colSouth`, `${rk}colWest`];

    function Xk(BB, IB) {
      const [ZB, TB, JB] = BB.baf2ColAt;
      return `baf2col ${ZB} ${TB} ${JB} ${IB}`
    }

    function Lk(BB) {
      return function(BB) {
        if (!Number.isFinite(BB)) return "";
        const IB = Math.max(1, Math.round(BB));
        if (IB < 60) return `${IB}s`;
        const ZB = IB % 60;
        return 0 === ZB ? IB / 60 + "m" : `${Math.floor(IB/60)}m ${ZB}s`
      }(function(BB) {
        const IB = GT.FOCUS_BY_LASERS[Math.max(0, Math.min(4, BB))];
        return IB > 0 ? GT.NOVA_FOCUS / IB : 1 / 0
      }(BB))
    }

    function ek(BB) {
      const IB = Math.abs(Math.round(BB));
      return IB < 1e3 ? Math.round(BB).toLocaleString("en-US") : IB < 1e6 ? `${IB<1e5?(BB/1e3).toFixed(1).replace(/\.0$/,""):Math.round(BB/1e3)}k` : `${(BB/1e6).toFixed(IB<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function uk(BB, IB, ZB) {
      if (zT(IB) >= 0) {
        const IB = function(BB, IB) {
          return BB.find((BB => {
            let {
              focus: ZB
            } = BB;
            return ZB[0] === IB[0] && ZB[2] === IB[2] && (IB[1] === ZB[1] || IB[1] === ZB[1] - 1)
          }))
        }(BB, ZB);
        if (!IB) return null;
        const JB = function(BB) {
          let IB = 0,
            ZB = 0;
          for (let TB = 0; TB < 4; TB++) IB += BB.laser[TB] ? 1 : 0, ZB += BB.live[TB] ? 1 : 0;
          return {
            lasers: IB,
            live: ZB,
            focusPerS: GT.FOCUS_BY_LASERS[ZB],
            drawPerS: GT.LASER_DRAW * ZB
          }
        }({
          laser: IB.lasers,
          live: IB.live
        });
        if (0 === JB.lasers || "noLasers" === IB.state) return {
          key: `${rk}lookColNoLasers`
        };
        if (0 === JB.live) return {
          key: `${rk}lookColOff_blocked`
        };
        if (!(IB.on && JB.live > 0) && ("running" !== (TB = IB.state) && "slowed" !== TB)) return {
          key: `${rk}lookColOff_${IB.state}`
        };
        if (JB.live < JB.lasers) return {
          key: `${rk}lookColLasersSome`,
          params: {
            lasers: String(JB.lasers),
            live: String(JB.live)
          }
        };
        const oB = IB.open.filter(Boolean).length;
        return oB < 4 ? {
          key: `${rk}lookColLasersSpots`,
          params: {
            live: String(JB.live),
            spots: String(oB),
            time: Lk(JB.live)
          }
        } : {
          key: `${rk}lookColLasers`,
          params: {
            live: String(JB.live),
            time: Lk(JB.live)
          }
        }
      }
      var TB;
      if (!FT(IB)) return null;
      const JB = function(BB, IB) {
        for (const ZB of BB) {
          const BB = yT(ZB.focus, [IB[0], IB[1], IB[2]]);
          if (BB && BB.uG === GT.LASER_D && ZB.lasers[BB.dir]) return {
            entry: ZB,
            dir: BB.dir
          }
        }
        return null
      }(BB, ZB);
      if (!JB) return {
        key: `${rk}lookLaserNoCollider`
      };
      const {
        entry: oB,
        dir: GB
      } = JB;
      return oB.open[GB] ? oB.live[GB] ? {
        key: oB.on ? `${rk}lookLaserFiring` : `${rk}lookLaserReady`
      } : {
        key: `${rk}lookLaserBlocked`
      } : {
        key: `${rk}lookLaserClosed`
      }
    }

    function fk(BB, IB) {
      const ZB = [];
      for (let TB = 1; TB < GT.LASER_D; TB++) BB & 1 << IB * (GT.LASER_D - 1) + TB - 1 && ZB.push(TB);
      return ZB
    }
    const lk = {
      firing: `${rk}colSlotFiring`,
      ready: `${rk}colSlotReady`,
      blocked: `${rk}colSlotBlocked`,
      empty: `${rk}colSlotEmpty`,
      closed: `${rk}colSlotClosed`
    };

    function Ak(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const oB = oJ(BB),
        GB = oJ(IB),
        vB = oJ(ZB),
        kB = vB.filter(Boolean).length,
        cB = oB.filter(Boolean).length,
        nB = [0, 1, 2, 3].map((BB => GB[BB] ? oB[BB] ? vB[BB] ? TB ? "firing" : "ready" : "blocked" : (BB => fk(JB, BB).length > 0)(BB) ? "blocked" : "empty" : "closed")),
        hB = nB.indexOf("blocked"),
        zB = hB < 0 && cB > 0 ? nB.indexOf("empty") : -1;
      return nB.map(((BB, IB) => {
        const ZB = IB === hB ? {
          key: `${rk}colSlotClear`
        } : IB === zB ? {
          key: `${rk}colSlotAdd`,
          params: {
            time: Lk(Math.min(4, kB + 1))
          }
        } : null;
        return {
          dir: IB,
          tone: BB,
          title: {
            key: "blocked" !== BB || oB[IB] ? lk[BB] : `${rk}colSlotGap`,
            keys: {
              dir: mk[IB]
            }
          },
          hint: ZB
        }
      }))
    }

    function tk(BB) {
      var IB;
      return "noPower" === BB.baf2ColState && BB.baf2ColRxState ? Wk({
        baf2RxState: BB.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (IB = BB.baf2ColRxHeat) && void 0 !== IB ? IB : 0
      }) : null
    }

    function bk(BB) {
      const IB = oJ(BB.baf2ColSpots).filter(Boolean).length,
        ZB = oJ(BB.baf2ColLive);
      let TB = 0,
        JB = 0;
      return oJ(BB.baf2ColLasers).forEach(((BB, IB) => {
        BB && (TB++, JB += ZB[IB] ? 0 : 1)
      })), JB > 0 ? {
        key: `${rk}colSubSome`,
        params: {
          blocked: String(JB),
          lasers: String(TB)
        }
      } : IB < 4 ? {
        key: `${rk}colSubSpots`,
        params: {
          lasers: String(TB),
          spots: String(IB)
        }
      } : {
        key: `${rk}colSub`,
        params: {
          lasers: String(TB)
        }
      }
    }

    function xk(BB) {
      const IB = tk(BB);
      if ("idle" === BB.baf2ColRxState && IB) return {
        key: `${rk}colState_noPowerIdle`
      };
      if (IB) return {
        key: `${rk}colState_noPowerReactor`,
        keys: {
          state: IB.label
        }
      };
      if ("noInput" !== BB.baf2ColState) return {
        key: `${rk}colState_${BB.baf2ColState}`
      };
      const ZB = String(Math.max(0, GT.NOVA_SA - BB.baf2ColSa)),
        TB = String(Math.max(0, GT.NOVA_GD - BB.baf2ColGd));
      return "0" !== ZB && "0" !== TB ? {
        key: `${rk}colState_noInput`,
        params: {
          sa: ZB,
          gd: TB
        }
      } : "0" !== ZB ? {
        key: `${rk}colState_noStarAlloy`,
        params: {
          sa: ZB
        }
      } : "0" !== TB ? {
        key: `${rk}colState_noGlowDust`,
        params: {
          gd: TB
        }
      } : {
        key: `${rk}colState_running`
      }
    }

    function Ek(BB) {
      return BB.baf2ColP < 0 ? `${rk}colNext` : function(BB) {
        const IB = BB.baf2ColState;
        return BB.baf2ColP >= 0 && ("blocked" === IB || "noLasers" === IB || "noPower" === IB)
      }(BB) ? `${rk}colStalled` : null === Dk(BB) ? `${rk}colMaking` : `${rk}colNovaIn`
    }

    function Dk(BB) {
      if (BB.baf2ColP < 0 || BB.baf2ColWant <= 0) return null;
      const IB = BB.baf2ColFocusPerS * Math.min(1, BB.baf2ColDraw / BB.baf2ColWant);
      return IB > 0 ? Math.max(0, GT.NOVA_FOCUS - BB.baf2ColP) / IB : null
    }

    function Kk(BB, IB) {
      const ZB = [];
      for (let TB = 1; TB <= 3; TB++) {
        const JB = [BB[0], BB[1] - TB, BB[2]];
        if (!IB(JB)) return ZB;
        ZB.push(JB)
      }
      return []
    }

    function Vk(BB, IB) {
      const ZB = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let TB = 0; TB < 4; TB++) {
        const JB = TB,
          oB = qT(BB.focus, JB, GT.LASER_D);
        if (BB.lasers[TB] || !BB.open[TB] || !IB(oB)) continue;
        const GB = [];
        for (let ZB = 1; ZB < GT.LASER_D; ZB++) {
          const TB = qT(BB.focus, JB, ZB);
          IB(TB) || GB.push(TB)
        }
        ZB.supports.push(...Kk(oB, IB)), 0 === GB.length ? ZB.free.push(oB) : (ZB.blocked.push(oB), ZB.gaps.push(...GB))
      }
      return ZB
    }
    const Sk = GT.LASER_D - .25,
      Bc = 4,
      Ic = 2,
      Zc = 16;
    const Tc = {
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
        blendMode: rv.g.Standard,
        soft: !0
      },
      Jc = {
        green: Tc,
        pink: {
          ...Tc,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function oc(BB, IB) {
      const ZB = {
        ...IB.params
      };
      for (const [JB, oB] of Object.entries(null !== (TB = IB.keys) && void 0 !== TB ? TB : {})) {
        var TB;
        ZB[JB] = BB(oB)
      }
      return ZB
    }
    const Gc = "buildAFactory2Game:",
      vc = 2 * GT.LASER_D + 1,
      kc = GT.LASER_D;

    function cc(BB) {
      return BB(`${Gc}colFocusTip`, {
        need: ek(GT.NOVA_FOCUS)
      })
    }

    function nc(BB, IB) {
      return BB(IB.key, oc(BB, IB))
    }

    function hc(BB) {
      const IB = BB.getStatus();
      return {
        status: IB,
        entry: IB ? BB.entryAtRoot(IB.baf2ColAt) : void 0
      }
    }

    function zc(BB, IB) {
      return {
        left: 100 * (kc + BB) / vc + "%",
        top: 100 * (kc + IB) / vc + "%"
      }
    }

    function Fc(BB) {
      let {
        status: IB,
        entry: ZB
      } = BB;
      const TB = oJ(IB.baf2ColLasers),
        JB = oJ(IB.baf2ColSpots),
        oB = oJ(IB.baf2ColLive),
        GB = !0 === (null === ZB || void 0 === ZB ? void 0 : ZB.on),
        vB = GT.LASER_D,
        kB = [];
      for (let FB = 0; FB < 4; FB++) {
        const [BB, , IB] = gT[FB];
        if (oB[FB]) {
          const ZB = 100 * (vB - 1) / vc,
            TB = BB + IB > 0 ? 100 * (kc + 1) / vc : 100 * (kc - (vB - 1)) / vc,
            JB = 100 * (kc + .35) / vc,
            oB = 30 / vc,
            cB = 0 !== BB ? {
              left: `${TB}%`,
              width: `${ZB}%`,
              top: `${JB}%`,
              height: `${oB}%`
            } : {
              top: `${TB}%`,
              height: `${ZB}%`,
              left: `${JB}%`,
              width: `${oB}%`
            };
          kB.push((0, Oo.jsx)("i", {
            className: QJ()("Baf2ColDiagramBeam", {
              Off: !GB
            }),
            style: cB
          }, `beam${FB}`))
        }
        const ZB = TB[FB] ? "Baf2ColDiagramLaser" : JB[FB] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        kB.push((0, Oo.jsx)("i", {
          className: ZB,
          style: zc(BB * vB, IB * vB)
        }, `spot${FB}`))
      }
      for (let FB = 0; FB < 4; FB++) {
        if (TB[FB] || !JB[FB]) continue;
        const [BB, , ZB] = gT[FB];
        for (const TB of fk(null !== (cB = IB.baf2ColGaps) && void 0 !== cB ? cB : 0, FB)) {
          var cB;
          kB.push((0, Oo.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: zc(BB * TB, ZB * TB)
          }, `gap${FB},${TB}`))
        }
      }
      for (const [FB, , NB] of null !== (nB = null === ZB || void 0 === ZB ? void 0 : ZB.blockers) && void 0 !== nB ? nB : []) {
        var nB, hB, zB;
        const BB = FB - (null !== (hB = null === ZB || void 0 === ZB ? void 0 : ZB.focus[0]) && void 0 !== hB ? hB : 0),
          IB = NB - (null !== (zB = null === ZB || void 0 === ZB ? void 0 : ZB.focus[2]) && void 0 !== zB ? zB : 0);
        kB.push((0, Oo.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: zc(BB, IB)
        }, `block${BB},${IB}`))
      }
      return (0, Oo.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [kB, (0, Oo.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function Nc(BB) {
      let {
        status: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)(), TB = oJ(IB.baf2ColLive).filter(Boolean).length;
      return (0, Oo.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, Oo.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: cc(ZB),
          children: ZB(`${Gc}colLadder`)
        }), (0, Oo.jsx)("ul", {
          children: [1, 2, 3, 4].map((BB => (0, Oo.jsx)("li", {
            className: QJ()({
              On: BB === TB
            }),
            children: ZB(`${Gc}colLadderChip`, {
              lasers: String(BB),
              time: Lk(BB)
            })
          }, BB)))
        })]
      })
    }

    function gc(BB) {
      let {
        item: IB,
        sv: ZB,
        need: TB,
        cap: JB
      } = BB;
      const {
        t: oB
      } = (0, YJ.G)(), GB = Math.min(ZB, TB);
      return (0, Oo.jsxs)("li", {
        className: QJ()("Baf2ColTile", {
          Short: ZB < TB
        }),
        children: [(0, Oo.jsx)(qc, {
          item: IB
        }), (0, Oo.jsx)("b", {
          className: "Baf2ColTileValue",
          children: oB(`${Gc}colOutOf`, {
            amount: String(GB),
            cap: String(TB)
          })
        }), (0, Oo.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, Oo.jsx)("i", {
            style: {
              width: 100 * GB / TB + "%"
            }
          })
        }), ZB > TB && (0, Oo.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: oB(`${Gc}colIntakeHeld`, {
            amount: String(ZB),
            cap: String(JB)
          })
        })]
      })
    }

    function qc(BB) {
      let {
        item: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)();
      return (0, Oo.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, Oo.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, Oo.jsx)(pJ.e, {
            itemName: IB,
            amount: 0
          })
        }), (0, Oo.jsx)("span", {
          className: "Baf2ColTileName",
          children: To(ZB, IB)
        })]
      })
    }

    function yc(BB) {
      switch (BB.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function Uc(BB) {
      var IB, ZB, JB;
      let {
        store: oB,
        close: GB
      } = BB;
      const {
        t: vB
      } = (0, YJ.G)(), kB = fG(), {
        status: cB,
        entry: nB
      } = function(BB) {
        const [IB, ZB] = (0, TB.useState)((() => hc(BB)));
        return (0, TB.useEffect)((() => (ZB(hc(BB)), BB.subscribe((() => {
          ZB(hc(BB))
        })))), [BB]), IB
      }(oB), [hB, zB] = (0, TB.useState)(null), FB = null === cB || void 0 === cB ? void 0 : cB.baf2ColHold;
      (0, TB.useEffect)((() => {
        zB(null)
      }), [FB]);
      const NB = (0, TB.useRef)({
          p: -1,
          n: 0
        }),
        gB = null !== (IB = null === cB || void 0 === cB ? void 0 : cB.baf2ColP) && void 0 !== IB ? IB : -1;
      gB < NB.current.p && NB.current.n++, NB.current.p = gB;
      const qB = (0, TB.useRef)(null),
        [yB] = (0, TB.useState)((() => {
          return (BB = oB.heldAtOpen()) === cT || BB === nT ? {
            key: `${rk}colBeltItIn`,
            item: BB
          } : null;
          var BB
        }));
      if (!cB) return null;
      const UB = cB.baf2ColMember,
        WB = cB.baf2ColP >= 0,
        dB = function(BB, IB) {
          if (BB.baf2ColP >= 0 && BB.baf2ColDraw > 0) {
            const IB = BB.baf2ColWant > 0 ? Math.min(1, BB.baf2ColDraw / BB.baf2ColWant) : 0;
            return {
              focus: BB.baf2ColFocusPerS * IB,
              draw: BB.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === BB.baf2ColState && IB && IB.draw > 0 ? {
            ...IB,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(cB, qB.current);
      qB.current = dB.draw > 0 ? dB : null;
      const CB = "slowed" === cB.baf2ColState || "noPower" === cB.baf2ColState,
        QB = Dk(cB),
        sB = null !== hB && void 0 !== hB ? hB : cB.baf2ColHold,
        wB = function(BB) {
          var IB, ZB;
          return "idle" === BB.baf2ColRxState ? null : null !== (IB = null === (ZB = tk(BB)) || void 0 === ZB ? void 0 : ZB.fix) && void 0 !== IB ? IB : null
        }(cB),
        OB = null === wB && null === yB ? function(BB) {
          var IB;
          const ZB = BB.baf2ColSentTo;
          if (!ZB) return null;
          const TB = null !== (IB = BB.baf2ColSentHeld) && void 0 !== IB ? IB : null;
          return {
            key: null === TB ? `${rk}colNovaSentToMachine` : `${rk}colNovaSentTo`,
            target: ZB,
            sv: TB
          }
        }(cB) : null,
        YB = WB ? vB(`${Gc}colFocusOf`, {
          focus: ek(cB.baf2ColP),
          need: ek(GT.NOVA_FOCUS)
        }) : null;
      return (0, Oo.jsx)(QG.c, {
        close: GB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, Oo.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, Oo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Oo.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, Oo.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Oo.jsx)(pJ.e, {
                  itemName: vT,
                  amount: 0
                })
              }), (0, Oo.jsxs)("div", {
                children: [(0, Oo.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: To(vB, vT)
                }), (0, Oo.jsx)("p", {
                  children: nc(vB, bk(cB))
                })]
              })]
            }), (0, Oo.jsx)(sG.l, {
              onClick: GB
            })]
          }), (0, Oo.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, Oo.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, Oo.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, Oo.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: vB(Ek(cB), {
                    time: null === QB ? "" : Co(vB, QB)
                  })
                }), (0, Oo.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, Oo.jsx)("i", {
                    style: {
                      width: (WB ? 100 * cB.baf2ColP / GT.NOVA_FOCUS : 0) + "%"
                    }
                  }, NB.current.n)
                }), (0, Oo.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, Oo.jsxs)("span", {
                    title: cc(vB),
                    children: [(0, Oo.jsx)("b", {
                      children: ek(dB.focus)
                    }), " ", vB(`${Gc}colFocusPerS`)]
                  }), (0, Oo.jsxs)("span", {
                    className: QJ()("Baf2ColDraw", {
                      Short: CB
                    }),
                    children: [(0, Oo.jsx)(iJ.d, {
                      name: "bolt"
                    }), CB ? vB(`${Gc}colDrawOf`, {
                      draw: ek(cB.baf2ColDraw),
                      want: ek(cB.baf2ColWant)
                    }) : vB(`${Gc}colPowerPerS`, {
                      rate: ek(dB.draw)
                    })]
                  }), null !== YB && (0, Oo.jsx)("span", {
                    className: "Soft",
                    children: YB
                  })]
                })]
              }), (0, Oo.jsx)("p", {
                className: QJ()("Baf2ColState", yc(cB)),
                children: nc(vB, xk(cB))
              }), null !== wB && (0, Oo.jsx)("p", {
                className: "Baf2ColStateFix",
                children: vB(wB)
              }), null === wB && null !== yB && (0, Oo.jsx)("p", {
                className: "Baf2ColStateFix",
                children: vB(yB.key, {
                  item: To(vB, yB.item)
                })
              }), OB && (0, Oo.jsx)("p", {
                className: "Baf2ColStateFix",
                children: vB(OB.key, {
                  target: To(vB, OB.target),
                  amount: String(null !== (ZB = OB.sv) && void 0 !== ZB ? ZB : 0)
                })
              }), (0, Oo.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, Oo.jsx)(gc, {
                  item: cT,
                  sv: cB.baf2ColSa,
                  need: GT.NOVA_SA,
                  cap: GT.SA_CAP
                }), (0, Oo.jsx)(gc, {
                  item: nT,
                  sv: cB.baf2ColGd,
                  need: GT.NOVA_GD,
                  cap: GT.GD_CAP
                }), (0, Oo.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, Oo.jsx)(qc, {
                    item: "Nova Matter"
                  }), (0, Oo.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: vB(`${Gc}colNovaHeld`, {
                      amount: String(cB.baf2ColOut),
                      cap: String(GT.OUT_CAP)
                    })
                  }), UB && (0, Oo.jsx)(sG.p, {
                    className: "Baf2ColTake",
                    disabled: 0 === cB.baf2ColOut,
                    onClick: () => {
                      kB.send(Xk(cB, "take"))
                    },
                    children: vB(`${Gc}colTake`)
                  })]
                })]
              }), UB && (0, Oo.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": sB,
                className: QJ()("Baf2ColHold", {
                  On: sB
                }),
                onClick: BB => {
                  BB.detail > 0 && BB.currentTarget.blur(), zB(!sB), kB.send(Xk(cB, "hold " + (sB ? 0 : 1)))
                },
                children: [(0, Oo.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, Oo.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, Oo.jsx)("b", {
                    children: vB(`${Gc}colHold`)
                  }), (0, Oo.jsx)("span", {
                    children: vB(`${Gc}colHoldNote`)
                  })]
                })]
              })]
            }), (0, Oo.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, Oo.jsx)(Fc, {
                status: cB,
                entry: nB
              }), (0, Oo.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Ak(cB.baf2ColLasers, cB.baf2ColSpots, cB.baf2ColLive, dB.beamsOn, null !== (JB = cB.baf2ColGaps) && void 0 !== JB ? JB : 0).map((BB => (0, Oo.jsxs)("li", {
                  className: BB.tone,
                  children: [(0, Oo.jsx)("b", {
                    children: nc(vB, BB.title)
                  }), null !== BB.hint && (0, Oo.jsx)("span", {
                    children: nc(vB, BB.hint)
                  })]
                }, BB.dir)))
              }), (0, Oo.jsx)(Nc, {
                status: cB
              })]
            })]
          })]
        })
      })
    }
    const Wc = "buildAFactory2Game:",
      dc = 36e5,
      Cc = 864e5;

    function Qc(BB, IB, ZB) {
      return Math.max(0, Math.ceil((BB + IB - Math.max(ZB, BB)) / 1e3))
    }

    function sc(BB) {
      return BB.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function wc(BB) {
      return "Homestead" === BB
    }

    function Oc(BB) {
      return function(BB) {
        let IB = 0;
        for (const ZB of BB) {
          const BB = /^Island ([1-9]\d{0,5})$/.exec(ZB);
          BB && (IB = Math.max(IB, Number(BB[1])))
        }
        return `Island ${IB+1}`
      }(BB.map((BB => BB.baf2IslandName)))
    }

    function Yc(BB, IB) {
      return function(BB) {
        return `${Wc}islandsBlocked${BB[0].toUpperCase()}${BB.slice(1)}`
      }("degraded" === BB && 0 === IB ? "stuck" : BB)
    }

    function ic(BB) {
      return BB.filter((BB => {
        var IB;
        return !BB.baf2IslandActive && void 0 === BB.baf2IslandUnreadable && void 0 === (null === (IB = BB.baf2IslandCoop) || void 0 === IB ? void 0 : IB.baf2CoopState)
      })).length
    }

    function pc(BB) {
      return "coopMoving" === BB || "coopUnreachable" === BB
    }

    function ac(BB, IB) {
      const ZB = IB > 0;
      return {
        change: null === BB && !ZB,
        switch: (null === BB || "degraded" === BB || pc(BB)) && !ZB,
        rename: "loading" !== BB && "degraded" !== BB && "stuck" !== BB
      }
    }

    function Hc(BB, IB) {
      return void 0 === BB || "corrupt" === BB && IB
    }
    const Mc = RG;

    function jc(BB, IB, ZB) {
      if (null !== BB && void 0 !== BB && BB.untilGone) {
        var TB;
        return !("dismiss" === BB.untilGone && void 0 === (null === (TB = IB.baf2IslandCoop) || void 0 === TB ? void 0 : TB.baf2CoopState)) && ZB - BB.atMs < 32500
      }
      return void 0 !== BB && ZB - BB.atMs < Mc && IB.baf2IslandName === BB.from
    }
    const Pc = RG;

    function Rc(BB) {
      return "core" === (null === BB || void 0 === BB ? void 0 : BB.kind) ? BB.core : "islands" === (null === BB || void 0 === BB ? void 0 : BB.kind) ? BB.backToCore : void 0
    }

    function rc(BB) {
      return `\0${BB}\0`
    }

    function mc(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const TB = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const oB of Object.keys(ZB)) TB[oB] = rc(oB);
      let JB = Object.keys(TB).length > 0 ? BB(IB, TB) : BB(IB);
      for (const [oB, GB] of Object.entries(ZB)) JB = JB.split(rc(oB)).join(GB);
      return JB
    }

    function Xc(BB, IB) {
      return BB ? IB ? "enabled" : "disabled" : "hidden"
    }
    const Lc = {
      removed: `${Wc}islandsCoopRemoved`,
      deleted: `${Wc}islandsCoopDeleted`,
      notReady: `${Wc}islandsCoopNotReady`,
      gone: `${Wc}islandsCoopGone`
    };

    function ec(BB) {
      var IB;
      return "member" !== (null === (IB = BB.baf2IslandCoop) || void 0 === IB ? void 0 : IB.baf2CoopRole) && "newer" !== BB.baf2IslandUnreadable
    }

    function uc(BB, IB, ZB, TB, JB, oB) {
      const GB = BB.baf2IslandActive,
        vB = BB.baf2IslandUnreadable,
        kB = BB.baf2IslandCoop,
        cB = function(BB, IB, ZB) {
          return {
            switch: BB.switch && void 0 === IB,
            delete: BB.change && Hc(IB, ZB)
          }
        }(IB, vB, TB),
        nB = GB && void 0 !== kB && void 0 === kB.baf2CoopState && "coopUnreachable" === oB,
        hB = {
          switch: Xc((!GB || nB) && void 0 === vB, nB || cB.switch),
          switchLabel: nB ? "tryAgain" : "switch",
          rename: Xc(!0, IB.rename),
          delete: Xc(!GB, cB.delete),
          deleteWaits: !GB && Hc(vB, TB),
          people: Xc(void 0 !== BB.baf2IslandInvitable || JB && GB && void 0 === vB && void 0 === kB, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        zB = !GB && cB.delete;
      if (void 0 === kB) return ZB ? {
        ...hB,
        delete: Xc(!GB, !1),
        deleteWaits: !1,
        note: zB ? {
          key: `${Wc}islandsCoopKeepOwn`
        } : null
      } : hB;
      const FB = kB.baf2CoopState,
        NB = kB.baf2CoopMembers.length > 1,
        gB = {
          ...hB,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== FB && "member" === kB.baf2CoopRole) return {
        ...gB,
        dismiss: Xc(!0, IB.rename),
        note: {
          key: Lc[FB],
          names: {
            owner: kB.baf2CoopOwner
          }
        }
      };
      if (void 0 !== FB) {
        let BB = {
          key: `${Wc}islandsCoopOwnLost`
        };
        return zB && NB ? BB = {
          key: `${Wc}islandsCoopDeleteMembers`
        } : zB && ZB && (BB = {
          key: `${Wc}islandsCoopKeepOwn`
        }), {
          ...gB,
          delete: Xc(!GB, cB.delete && !NB && !ZB),
          deleteWaits: hB.deleteWaits && !NB && !ZB,
          note: BB
        }
      }
      if ("member" === kB.baf2CoopRole) return {
        ...hB,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: Xc(!0, GB ? IB.switch : IB.rename)
      };
      const qB = kB.baf2CoopManageHere;
      let yB = null;
      var UB;
      qB || GB ? zB && NB ? yB = {
        key: `${Wc}islandsCoopDeleteMembers`
      } : zB && ZB && (yB = {
        key: `${Wc}islandsCoopKeepOwn`
      }) : yB = {
        key: null !== (UB = kB.baf2CoopLeft) && void 0 !== UB && UB.length ? `${Wc}islandsCoopManageThereClaim` : `${Wc}islandsCoopManageThere`
      };
      return {
        ...hB,
        rename: Xc(!0, IB.rename && qB),
        delete: Xc(!GB, cB.delete && !NB && !ZB),
        deleteWaits: hB.deleteWaits && !NB && !ZB,
        people: "enabled",
        peopleLabel: "players",
        unshare: Xc(qB && GB && !NB, IB.change),
        remove: qB,
        note: yB
      }
    }

    function fc(BB) {
      var IB;
      const ZB = BB.baf2IslandCoop;
      if ("owner" !== (null === ZB || void 0 === ZB ? void 0 : ZB.baf2CoopRole) || void 0 !== ZB.baf2CoopState || null === (IB = ZB.baf2CoopLeft) || void 0 === IB || !IB.length) return null;
      const TB = BB.baf2IslandActive && ZB.baf2CoopManageHere;
      return {
        left: ZB.baf2CoopLeft,
        claim: TB,
        goThere: !TB && ZB.baf2CoopManageHere
      }
    }

    function lc(BB) {
      return BB.baf2CoopMembers.length >= BB.baf2CoopMax
    }

    function Ac(BB, IB, ZB) {
      return void 0 !== BB && IB < BB.answer && ZB - BB.atMs < Mc
    }
    const tc = "buildAFactory2Game:";

    function bc(BB, IB) {
      return {
        onKeyDown: ZB => {
          ZB.stopPropagation(), ZB.nativeEvent.isComposing || 229 === ZB.nativeEvent.keyCode || ("Enter" === ZB.key ? (ZB.preventDefault(), BB()) : "Escape" === ZB.key && (ZB.preventDefault(), IB()))
        }
      }
    }

    function xc(BB) {
      return {
        onKeyDown: IB => {
          "Escape" !== IB.key || IB.nativeEvent.isComposing || (IB.preventDefault(), IB.stopPropagation(), BB())
        }
      }
    }

    function Ec(BB) {
      BB.currentTarget.select()
    }

    function Dc(BB, IB) {
      (0, TB.useEffect)((() => {
        var ZB;
        BB && (null === (ZB = IB.current) || void 0 === ZB || ZB.scrollIntoView({
          block: "nearest"
        }))
      }), [BB, IB])
    }

    function Kc(BB) {
      const [IB, ZB] = (0, TB.useState)(null);
      return (0, TB.useEffect)((() => {
        const IB = document.querySelector(".UiRequests"),
          TB = BB.current;
        if (!IB || !TB || "undefined" === typeof ResizeObserver) return;
        const JB = () => {
          const BB = IB.getBoundingClientRect(),
            JB = TB.getBoundingClientRect(),
            oB = TB.parentElement,
            GB = oB && parseFloat(getComputedStyle(oB).paddingTop) || 0,
            vB = function(BB, IB, ZB, TB) {
              if (!BB || BB.height <= 0 || BB.right <= IB.left || BB.left >= IB.right) return null;
              const JB = Math.max(TB, BB.bottom + 8);
              return {
                marginTop: Math.round(JB - TB),
                maxHeight: Math.max(0, Math.floor(ZB - JB - TB))
              }
            }(BB, JB, window.innerHeight, GB);
          ZB((BB => (null === BB || void 0 === BB ? void 0 : BB.marginTop) === (null === vB || void 0 === vB ? void 0 : vB.marginTop) && (null === BB || void 0 === BB ? void 0 : BB.maxHeight) === (null === vB || void 0 === vB ? void 0 : vB.maxHeight) ? BB : vB))
        };
        JB();
        const oB = new ResizeObserver(JB);
        return oB.observe(IB), window.addEventListener("resize", JB), () => {
          oB.disconnect(), window.removeEventListener("resize", JB)
        }
      }), [BB]), IB
    }

    function Vc() {
      (0, TB.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function Sc(BB) {
      (0, TB.useEffect)((() => {
        var IB;
        null === (IB = BB.current) || void 0 === IB || IB.focus()
      }), [BB])
    }

    function Bn(BB) {
      const [IB, ZB] = (0, TB.useState)(Date.now);
      return (0, TB.useEffect)((() => {
        const IB = window.setInterval((() => {
          ZB(Date.now())
        }), BB);
        return () => {
          window.clearInterval(IB)
        }
      }), [BB]), IB
    }

    function In(BB) {
      let {
        tier: IB,
        t: ZB
      } = BB;
      const {
        kind: TB,
        short: JB
      } = qB(IB), oB = FB(IB, NB), GB = ZB(`${tc}${oB.key}`, {
        ...oB.params,
        name: ZB(`${tc}${yB(IB).nameKey}`)
      });
      return (0, Oo.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, Oo.jsx)("span", {
          className: QJ()("Baf2IslandTierPip", {
            Stage: "tier" !== TB
          }),
          "aria-hidden": "true",
          children: JB
        }), GB]
      })
    }

    function Zn(BB) {
      let {
        note: IB,
        className: ZB,
        t: TB
      } = BB;
      return (0, Oo.jsx)("p", {
        className: QJ()("Baf2IslandNote", ZB),
        children: mc(TB, IB.key, IB.names, IB.params)
      })
    }
    const Tn = "buildAFactory2Game:";

    function Jn(BB) {
      let {
        message: IB,
        arrivedAtMs: ZB,
        close: JB,
        leave: oB
      } = BB;
      const GB = fG(),
        {
          t: vB
        } = (0, YJ.G)(),
        kB = Bn(1e3),
        cB = (0, TB.useRef)(null);
      Vc(), (0, TB.useEffect)((() => {
        var BB;
        null === (BB = cB.current) || void 0 === BB || BB.focus()
      }), []);
      const nB = Qc(ZB, IB.baf2TransferInMs, kB),
        hB = ZB + IB.baf2TransferInMs - 1e3,
        [zB, FB] = (0, TB.useState)(null);
      (0, TB.useEffect)((() => {
        const BB = window.setTimeout((() => {
          FB(hB)
        }), Math.max(0, hB - Date.now()));
        return () => {
          window.clearTimeout(BB)
        }
      }), [hB]);
      const NB = zB === hB || kB >= hB,
        gB = IB.baf2TransferIsland,
        qB = IB.baf2TransferOwner;
      return (0, Oo.jsx)(QG.c, {
        close: JB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Oo.jsxs)("section", {
          ref: cB,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, Oo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Oo.jsxs)("div", {
              children: [(0, Oo.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === qB ? mc(vB, `${Tn}islandsTransferOwn`, {
                  island: gB
                }) : mc(vB, `${Tn}islandsTransfer`, {
                  island: gB,
                  owner: qB
                })
              }), (0, Oo.jsx)("p", {
                children: NB ? vB(`${Tn}islandsTransferNow`) : vB(`${Tn}islandsTransferIn`, {
                  time: Co(vB, nB)
                })
              })]
            }), (0, Oo.jsx)(sG.l, {
              ariaLabel: vB(`${Tn}islandsClose`),
              onClick: JB
            })]
          }), !NB && (0, Oo.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, Oo.jsx)("p", {
              className: "Baf2TransferNote",
              children: vB(`${Tn}islandsTransferNote`)
            }), (0, Oo.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, Oo.jsx)(sG.g, {
                onClick: () => {
                  GB.send("baf2coopstay"), oB()
                },
                children: vB(`${Tn}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var Gn = ZB(1507),
      vn = ZB(1191),
      kn = ZB.n(vn);
    const cn = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const nn = "buildAFactory2Game:",
      hn = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function zn(BB, IB, ZB) {
      return void 0 === IB ? ZB : "string" === typeof IB ? IB : Array.isArray(IB) ? IB.map((IB => "string" === typeof IB ? IB : "translationKey" in IB ? BB(IB.translationKey) : "")).join("") : BB(IB.translationKey)
    }

    function Fn(BB) {
      const IB = {};
      for (const [ZB, TB] of Object.entries(null !== BB && void 0 !== BB ? BB : {})) IB[ZB] = TB < 0 ? Wo(TB) : TB.toLocaleString("en-US");
      return IB
    }

    function Nn(BB, IB) {
      const ZB = IB ? "touch" : "mouse";
      return {
        use: BB(`${nn}lookUse_${ZB}`),
        Use: BB(`${nn}lookUseStart_${ZB}`)
      }
    }
    const gn = (0, TB.memo)((function(BB) {
      let {
        item: IB
      } = BB;
      return (0, Oo.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, Oo.jsx)(pJ.e, {
          itemName: IB,
          amount: 0
        })
      })
    }));

    function qn(BB) {
      let {
        label: IB,
        percent: ZB,
        progress: TB
      } = BB;
      return (0, Oo.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, Oo.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${IB}: ${TB}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": ZB,
          children: (0, Oo.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${ZB}%`
            }
          })
        }), (0, Oo.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: TB
        })]
      })
    }

    function yn(BB) {
      let {
        chips: IB
      } = BB;
      return (0, Oo.jsx)("span", {
        className: "Baf2QuestChips",
        children: IB.map((BB => {
          let [IB, ZB, TB] = BB;
          const JB = ZB >= TB;
          return (0, Oo.jsxs)("span", {
            className: QJ()("Baf2QuestChip", {
              Met: JB
            }),
            children: [(0, Oo.jsx)(gn, {
              item: IB
            }), (0, Oo.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: JB ? `\u2713${TB}` : `${ZB}/${TB}`
            })]
          }, IB)
        }))
      })
    }

    function Un(BB, IB) {
      const {
        key: ZB,
        params: TB
      } = FB(IB, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return BB(`${nn}${ZB}`, {
        ...TB,
        name: BB(`${nn}${yB(IB).nameKey}`)
      })
    }

    function Wn(BB) {
      let {
        core: IB,
        t: ZB
      } = BB;
      const [TB, JB] = IB, oB = JB > 0 ? Math.floor(100 * TB / JB) : 100;
      return (0, Oo.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": ZB(`${nn}questCoreLabel`, {
          have: String(TB),
          need: String(JB)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": oB,
        children: [(0, Oo.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: ZB(`${nn}questCore`, {
            percent: String(oB)
          })
        }), (0, Oo.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, Oo.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${oB}%`
            }
          })
        })]
      })
    }

    function dn(BB) {
      let {
        rows: IB,
        t: ZB
      } = BB;
      const TB = IB.filter((BB => BB.done)).length;
      return (0, Oo.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": ZB(`${nn}questStepsProgress`, {
          done: String(TB),
          total: String(IB.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": IB.length,
        "aria-valuenow": TB,
        children: IB.map((BB => (0, Oo.jsx)("span", {
          className: QJ()("Baf2QuestSegment", {
            Done: BB.done,
            Current: BB.current
          })
        }, BB.id)))
      })
    }
    const Cn = (0, TB.memo)(sn, Qn);

    function Qn(BB, IB) {
      const ZB = ZB => BB.view.itemNames[ZB] === IB.view.itemNames[ZB];
      return BB.t === IB.t && BB.extra === IB.extra && (null === BB.row.item || ZB(BB.row.item)) && BB.row.madeFor.every(ZB) && BB.row.also.every(ZB) && kn()(BB.row, IB.row)
    }

    function sn(BB) {
      let {
        row: IB,
        view: ZB,
        t: TB,
        extra: JB
      } = BB;
      const {
        isTouchScreen: oB
      } = (0, WJ.o)(["isTouchScreen"]), GB = IB.item ? function(BB, IB, ZB) {
        return 1 !== ZB && cn.has(BB) ? OJ(IB) : null
      }(IB.key, IB.item, IB.total) : null, vB = GB ? TB(GB) : IB.item ? zn(TB, ZB.itemNames[IB.item], IB.item) : "", kB = IB.also.map((BB => zn(TB, ZB.itemNames[BB], BB))), cB = kB.join(", "), nB = function(BB, IB) {
        var ZB;
        return IB.length < 2 ? null !== (ZB = IB[0]) && void 0 !== ZB ? ZB : "" : BB(`${nn}listAnd`, {
          rest: IB.slice(0, -1).join(BB(`${nn}listComma`)),
          last: IB[IB.length - 1]
        })
      }(TB, [vB, ...kB]), hB = TB(`${nn}${IB.key}`, {
        ...Nn(TB, oB),
        ...Fn(IB.params),
        item: vB,
        also: cB,
        itemList: nB,
        total: String(IB.total)
      }), [zB, ...FB] = hB.split("\n"), NB = IB.total > 1 && !IB.done && !IB.away;
      return (0, Oo.jsxs)("li", {
        className: QJ()("Baf2QuestStep", {
          Done: IB.done,
          Current: IB.current,
          JustFinished: IB.justFinished,
          Away: IB.away
        }),
        children: [!IB.done && null !== IB.item && (0, Oo.jsx)(gn, {
          item: IB.item
        }), (IB.done || null === IB.item) && (0, Oo.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: IB.done ? "\u2713" : "\u25cb"
        }), (0, Oo.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Oo.jsx)("strong", {
            children: zB
          }), FB.length > 0 && (0, Oo.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: FB.join(" ")
          }), !IB.done && IB.madeFor.length > 0 && (0, Oo.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: TB("buildAFactory2Game:questRowFor", {
              items: IB.madeFor.map((BB => zn(TB, ZB.itemNames[BB], BB))).join(" \u2192 ")
            })
          }), NB && (0, Oo.jsx)(qn, {
            label: zB,
            percent: Math.round(100 * IB.amount / IB.total),
            progress: `${IB.amount.toLocaleString("en-US")}/${IB.total.toLocaleString("en-US")}`
          }), !IB.done && !IB.away && IB.chips && IB.chips.length > 0 && (0, Oo.jsx)(yn, {
            chips: IB.chips
          }), JB]
        })]
      })
    }
    const wn = "buildAFactory2Game:",
      On = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      Yn = {
        on: `${wn}tutorialButtonOn`,
        hud: `${wn}tutorialButtonHud`,
        off: `${wn}tutorialButtonOff`
      },
      pn = {
        on: `${wn}tutorialPickedOn`,
        hud: `${wn}tutorialPickedHud`,
        off: `${wn}tutorialPickedOff`
      };
    class an {
      constructor(BB, IB, ZB) {
        this.commands = BB, this.quests = IB, this.toasts = ZB
      }
      next() {
        const BB = function(BB) {
            return MB[(MB.indexOf(BB) + 1) % MB.length]
          }(this.quests.get().tutorial),
          IB = this.quests.setTutorial(BB);
        this.commands.send(`baf2tutorial ${BB} ${IB}`), this.toasts.show({
          baf2ToastText: [(0, PB.de)({
            translationKey: pn[BB]
          }, PB.P.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function Hn(BB, IB) {
      let [ZB, TB] = IB;
      return BB(`${nn}${ZB}`, Fn(TB))
    }

    function Mn(BB) {
      let [IB, ZB] = BB;
      return IB + JSON.stringify(ZB)
    }

    function jn(BB) {
      let {
        goal: IB,
        t: ZB
      } = BB;
      return IB ? (0, Oo.jsx)("span", {
        className: "Baf2BookGoal",
        children: ZB(`${nn}${IB}`)
      }) : null
    }

    function Pn(BB) {
      let {
        view: IB,
        t: ZB
      } = BB;
      if (!IB.name) return null;
      const TB = fJ(IB.rows);
      return (0, Oo.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, Oo.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: ZB(`${nn}currentQuest`)
        }), (0, Oo.jsx)("strong", {
          className: "Baf2BookTitle",
          children: Hn(ZB, IB.name)
        }), (0, Oo.jsx)(jn, {
          goal: IB.goal,
          t: ZB
        }), TB.length > 1 && (0, Oo.jsx)(dn, {
          rows: TB,
          t: ZB
        }), (0, Oo.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: IB.rows.map((BB => (0, Oo.jsx)(Cn, {
            row: BB,
            view: IB,
            t: ZB
          }, BB.id)))
        }), IB.reward && (0, Oo.jsxs)("span", {
          className: "Baf2BookReward",
          children: [ZB(`${nn}questReward`), (0, Oo.jsx)(gn, {
            item: IB.reward
          }), zn(ZB, IB.itemNames[IB.reward], IB.reward)]
        })]
      })
    }

    function Rn(BB) {
      let {
        quest: IB,
        upcoming: ZB,
        t: TB
      } = BB;
      return (0, Oo.jsxs)("li", {
        className: QJ()("Baf2BookQuest", {
          Done: IB[3],
          Upcoming: ZB
        }),
        children: [(0, Oo.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: IB[3] ? "\u2713" : "\u25cb"
        }), (0, Oo.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, Oo.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Hn(TB, IB)
          }), (0, Oo.jsx)(jn, {
            goal: IB[2],
            t: TB
          })]
        })]
      })
    }

    function rn(BB) {
      let {
        done: IB,
        total: ZB,
        t: TB
      } = BB;
      const JB = ZB > 0 ? Math.round(100 * IB / ZB) : 0,
        oB = TB(`${nn}questBookChapterProgress`, {
          done: String(IB),
          total: String(ZB)
        });
      return (0, Oo.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, Oo.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": oB,
          "aria-valuemin": 0,
          "aria-valuemax": ZB,
          "aria-valuenow": IB,
          children: (0, Oo.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${JB}%`
            }
          })
        }), (0, Oo.jsx)("span", {
          className: "Baf2BookProgressText",
          children: oB
        })]
      })
    }

    function mn(BB) {
      let {
        view: IB,
        tier: ZB,
        quests: TB,
        t: JB
      } = BB;
      const oB = ZB === IB.tier,
        GB = (null !== TB && void 0 !== TB ? TB : []).filter((BB => !BB[4])),
        vB = (null !== TB && void 0 !== TB ? TB : []).filter((BB => BB[4])),
        kB = GB.filter((BB => BB[3])).length,
        cB = oB && IB.name ? Mn(IB.name) : null,
        nB = GB.findIndex((BB => !BB[3] && Mn(BB) === cB));
      return (0, Oo.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, Oo.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, Oo.jsx)("h3", {
            children: Un(JB, ZB)
          }), GB.length > 0 && (0, Oo.jsx)(rn, {
            done: kB,
            total: GB.length,
            t: JB
          }), oB && IB.core && (0, Oo.jsx)(Wn, {
            core: IB.core,
            t: JB
          })]
        }), (0, Oo.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === TB && oB && (0, Oo.jsx)(Pn, {
            view: IB,
            t: JB
          }), GB.map(((BB, ZB) => ZB === nB ? (0, Oo.jsx)(Pn, {
            view: IB,
            t: JB
          }, Mn(BB)) : (0, Oo.jsx)(Rn, {
            quest: BB,
            upcoming: !BB[3],
            t: JB
          }, Mn(BB))))]
        }), oB && IB.side && (0, Oo.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, Oo.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: JB(`${nn}questSide`)
          }), (0, Oo.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Hn(JB, IB.side.name)
          }), (0, Oo.jsx)(jn, {
            goal: IB.side.goal,
            t: JB
          }), (0, Oo.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, Oo.jsx)(Cn, {
              row: IB.side.row,
              view: IB,
              t: JB
            })
          })]
        }), vB.length > 0 && (0, Oo.jsxs)(Oo.Fragment, {
          children: [(0, Oo.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: JB(`${nn}questBookSidesDone`)
          }), (0, Oo.jsx)("ol", {
            className: "Baf2BookQuests",
            children: vB.map((BB => (0, Oo.jsx)(Rn, {
              quest: BB,
              upcoming: !1,
              t: JB
            }, Mn(BB))))
          })]
        })]
      })
    }

    function Xn(BB) {
      var IB, ZB, oB;
      let {
        store: GB,
        tutorial: vB,
        close: kB
      } = BB;
      const {
        t: cB
      } = (0, YJ.G)(), hB = (0, Gn.h)(RJ, GB.get()), zB = null !== (IB = hB.tier) && void 0 !== IB ? IB : 1, [FB, NB] = (0, TB.useState)(null), yB = (null === FB || void 0 === FB ? void 0 : FB.at) === zB ? FB.tier : zB, UB = (0, TB.useRef)(null), WB = null !== hB.chapters;
      (0, TB.useEffect)((() => {
        var BB;
        UB.current && (UB.current.scrollTop = 0);
        const IB = null === (BB = UB.current) || void 0 === BB ? void 0 : BB.querySelector(".Baf2BookQuest.Current");
        if (UB.current && IB) {
          const BB = IB.getBoundingClientRect().bottom - UB.current.getBoundingClientRect().bottom;
          BB > 0 && (UB.current.scrollTop += Math.min(BB, IB.getBoundingClientRect().top - UB.current.getBoundingClientRect().top))
        }
      }), [yB, WB]);
      const dB = null === (ZB = hB.chapters) || void 0 === ZB ? void 0 : ZB.find((BB => {
        let [IB] = BB;
        return IB === yB
      }));
      return (0, Oo.jsx)(QG.c, {
        close: kB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Oo.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: hn,
          children: [(0, Oo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Oo.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: cB(`${nn}questBookTitle`)
            }), (0, Oo.jsx)(sG.p, {
              className: "Baf2BookTutorialButton",
              disabled: !hB.tutorialKnown,
              ariaLabel: cB(Yn[hB.tutorial]),
              title: cB(Yn[hB.tutorial]),
              onClick: () => {
                vB.next()
              },
              children: (0, Oo.jsx)(iJ.d, {
                name: On[hB.tutorial]
              })
            }), (0, Oo.jsx)(sG.l, {
              onClick: kB
            })]
          }), (0, Oo.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": cB(`${nn}questBookChapters`),
            "data-pad-initial-area": !0,
            children: JB.slice(0, nB()).map(((BB, IB) => {
              const ZB = IB + 1,
                {
                  kind: TB,
                  short: JB
                } = qB(ZB),
                oB = gB(ZB, zB),
                GB = oB ? cB(`${nn}coreAtomicHidden`) : Un(cB, ZB);
              return (0, Oo.jsx)("li", {
                children: (0, Oo.jsx)("button", {
                  type: "button",
                  className: QJ()({
                    Stage: "tier" !== TB,
                    Atomic: "atomic" === TB,
                    Current: ZB === zB,
                    Selected: ZB === yB
                  }),
                  disabled: ZB > zB,
                  "aria-pressed": ZB === yB,
                  "aria-label": GB,
                  title: oB ? void 0 : GB,
                  onClick: () => {
                    NB({
                      tier: ZB,
                      at: zB
                    })
                  },
                  children: oB ? "?" : JB
                })
              }, BB.nameKey)
            }))
          }), (0, Oo.jsxs)("div", {
            ref: UB,
            className: "Baf2BookBody",
            children: [eJ(hB) && yB === zB && (0, Oo.jsx)("p", {
              className: "Baf2BookEmpty",
              children: cB(`${nn}questBookAllDone`)
            }), (0, Oo.jsx)(mn, {
              view: hB,
              tier: yB,
              quests: null !== (oB = null === dB || void 0 === dB ? void 0 : dB[1]) && void 0 !== oB ? oB : null,
              t: cB
            })]
          })]
        })
      })
    }
    const Ln = "buildAFactory2Game:";

    function en(BB) {
      let {
        tiers: IB,
        from: ZB,
        tier: TB,
        shown: JB,
        TF: oB
      } = BB;
      const {
        t: GB
      } = (0, YJ.G)(), vB = IB.map(((BB, IB) => {
        const vB = ZB + IB,
          {
            kind: kB,
            short: cB
          } = qB(vB),
          nB = gB(vB, TB);
        return (0, Oo.jsx)("li", {
          children: (0, Oo.jsx)("button", {
            type: "button",
            className: QJ()({
              Stage: "tier" !== kB,
              Silhouette: nB,
              Reached: vB <= TB,
              Current: vB === TB,
              Next: vB === TB + 1,
              Selected: vB === JB
            }),
            disabled: nB,
            "aria-pressed": vB === JB,
            "aria-label": nB ? GB(`${Ln}coreAtomicHidden`) : void 0,
            title: nB ? void 0 : GB(`${Ln}${BB.nameKey}`),
            onClick: () => {
              oB(vB)
            },
            children: nB ? "?" : cB
          })
        }, BB.nameKey)
      }));
      return (0, Oo.jsx)(Oo.Fragment, {
        children: vB
      })
    }

    function un(BB) {
      let {
        id: IB,
        label: ZB,
        tiers: TB,
        from: JB,
        ...oB
      } = BB;
      return (0, Oo.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, Oo.jsx)("span", {
          id: IB,
          className: "Baf2CoreLadderLabel",
          children: ZB
        }), (0, Oo.jsx)("ol", {
          "aria-labelledby": IB,
          children: (0, Oo.jsx)(en, {
            ...oB,
            tiers: TB,
            from: JB
          })
        })]
      })
    }

    function fn(BB) {
      const {
        t: IB
      } = (0, YJ.G)(), ZB = JB.findIndex((BB => void 0 !== BB.stage)), TB = JB.findIndex((BB => void 0 !== BB.reactorTier)), oB = ZB < 0 ? JB : JB.slice(0, ZB), GB = ZB < 0 ? [] : JB.slice(ZB, TB < 0 ? void 0 : TB), kB = TB < 0 || !vB() ? [] : JB.slice(TB);
      return (0, Oo.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, Oo.jsx)(un, {
          ...BB,
          id: "baf2CoreTiersLabel",
          label: IB(`${Ln}coreTiersLabel`),
          tiers: oB,
          from: 1
        }), GB.length > 0 && (0, Oo.jsx)(un, {
          ...BB,
          id: "baf2CoreStagesLabel",
          label: IB(`${Ln}coreStagesLabel`),
          tiers: GB,
          from: ZB + 1
        }), kB.length > 0 && (0, Oo.jsx)(un, {
          ...BB,
          id: "baf2CoreAtomicLabel",
          label: IB(`${Ln}coreAtomicLabel`),
          tiers: kB,
          from: TB + 1
        })]
      })
    }
    const An = "buildAFactory2Game:";

    function tn(BB) {
      let {
        item: IB,
        itemNames: ZB,
        children: TB
      } = BB;
      return (0, Oo.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Oo.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Oo.jsx)(pJ.e, {
            itemName: IB,
            amount: 0
          })
        }), (0, Oo.jsx)(aJ.e, {
          text: ZB[IB]
        }), TB]
      })
    }

    function bn(BB) {
      const IB = new Map;
      for (const {
          block: TB
        }
        of BB.newDeposits) {
        var ZB;
        IB.set(TB, (null !== (ZB = IB.get(TB)) && void 0 !== ZB ? ZB : 0) + 1)
      }
      return [...IB]
    }

    function xn(BB) {
      let {
        value: IB,
        label: ZB,
        more: TB
      } = BB;
      return (0, Oo.jsxs)("li", {
        children: [(0, Oo.jsx)("strong", {
          children: IB
        }), (0, Oo.jsx)("span", {
          children: ZB
        }), TB > 0 && (0, Oo.jsxs)("em", {
          children: ["+", TB]
        })]
      })
    }

    function En(BB) {
      let {
        items: IB,
        itemNames: ZB
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)(), [oB, GB] = (0, TB.useState)(null), vB = null !== oB && IB.includes(oB) ? oB : null;
      return (0, Oo.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, Oo.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: JB(`${An}coreRewardUnlocks`)
        }), (0, Oo.jsx)("ul", {
          children: IB.map((BB => (0, Oo.jsx)("li", {
            children: (0, Oo.jsx)("button", {
              type: "button",
              className: QJ()("Baf2PanelIcon", {
                Picked: BB === vB
              }),
              title: To(JB, BB),
              "aria-label": To(JB, BB),
              "aria-pressed": BB === vB,
              onClick: () => {
                GB(BB === vB ? null : BB)
              },
              children: (0, Oo.jsx)(pJ.e, {
                itemName: BB,
                amount: 0
              })
            })
          }, BB)))
        }), (0, Oo.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== vB && (0, Oo.jsxs)(Oo.Fragment, {
            children: [(0, Oo.jsx)(aJ.e, {
              text: ZB[vB]
            }), " \xb7 ", (0, Oo.jsx)(aJ.e, {
              text: ZB[aB(vB)]
            })]
          }), null === vB && JB(`${An}coreRecipeTap`)]
        })]
      })
    }

    function Dn(BB) {
      var IB, ZB;
      let {
        def: TB,
        tier: JB,
        itemNames: oB
      } = BB;
      const {
        t: GB
      } = (0, YJ.G)(), vB = JB > 1 ? yB(JB - 1) : void 0, kB = Math.round(2 * TB.islandRadius), cB = vB ? Math.round(2 * vB.islandRadius) : kB, nB = JB >= 3 ? CT(JB) : null;
      return (0, Oo.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, Oo.jsxs)("ul", {
          className: QJ()("Baf2CoreStats", {
            Four: null !== nB
          }),
          children: [(0, Oo.jsx)(xn, {
            value: `${kB}\xd7${kB}`,
            label: GB(`${An}coreStatIsland`),
            more: kB - cB
          }), (0, Oo.jsx)(xn, {
            value: String(TB.machineAllowance),
            label: GB(`${An}coreStatMachines`),
            more: TB.machineAllowance - (null !== (IB = null === vB || void 0 === vB ? void 0 : vB.machineAllowance) && void 0 !== IB ? IB : TB.machineAllowance)
          }), (0, Oo.jsx)(xn, {
            value: String(TB.beltAllowance),
            label: GB(`${An}coreStatBelts`),
            more: TB.beltAllowance - (null !== (ZB = null === vB || void 0 === vB ? void 0 : vB.beltAllowance) && void 0 !== ZB ? ZB : TB.beltAllowance)
          }), null !== nB && (0, Oo.jsx)(xn, {
            value: String(nB),
            label: GB(`${An}coreStatStorage`),
            more: nB - (vB ? CT(JB - 1) : nB)
          })]
        }), TB.reward && (0, Oo.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Oo.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: GB(`${An}coreRewardItem`)
          }), (0, Oo.jsx)(tn, {
            item: TB.reward,
            itemNames: oB
          })]
        }), TB.newDeposits.length > 0 && (0, Oo.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Oo.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: GB(TB.newDeposits.length > 1 ? `${An}coreRewardDeposits` : `${An}coreRewardDeposit`)
          }), bn(TB).map((BB => {
            let [IB, ZB] = BB;
            return (0, Oo.jsx)(tn, {
              item: IB,
              itemNames: oB,
              children: ZB > 1 && ` \xd7${ZB}`
            }, IB)
          }))]
        }), TB.unlocks.length > 0 && (0, Oo.jsx)(En, {
          items: TB.unlocks,
          itemNames: oB
        }), (0, Oo.jsx)(Kn, {
          tier: JB
        })]
      })
    }

    function Kn(BB) {
      let {
        tier: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)(), TB = gJ[IB];
      if (!TB) return null;
      const JB = NJ(IB, 0, 0).barrierMax !== NJ(IB - 1, 0, 0).barrierMax;
      return (0, Oo.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Oo.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Oo.jsx)(pJ.e, {
            itemName: JB ? kJ.Chestplate : vJ,
            amount: 0
          })
        }), ZB(`${An}gearPerkLine`, {
          perk: ZB(`${An}${TB}`)
        })]
      })
    }

    function Vn(BB, IB) {
      return null === BB ? IB : BB.value
    }

    function Sn(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === BB || ZB - BB.atMs >= TB ? null : JB(BB.value, IB) ? BB.armed ? null : BB : BB.armed ? BB : {
        ...BB,
        armed: !0
      }
    }

    function Bh(BB, IB) {
      const ZB = IB.filter((IB => {
        var ZB;
        return !1 !== (null === (ZB = BB.get(IB)) || void 0 === ZB ? void 0 : ZB.value)
      }));
      for (const [TB, JB] of BB) JB.value && !IB.includes(TB) && ZB.push(TB);
      return ZB
    }

    function Ih(BB, IB, ZB, JB) {
      const [oB, GB] = (0, TB.useState)((() => new Map)), vB = () => {
        GB((IB => function(BB, IB, ZB, TB) {
          var JB;
          let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            GB = null;
          for (const [vB, kB] of BB) {
            const JB = Sn(kB, IB(vB), ZB, TB, oB);
            JB !== kB && (GB ??= new Map(BB), null === JB ? GB.delete(vB) : GB.set(vB, JB))
          }
          return null !== (JB = GB) && void 0 !== JB ? JB : BB
        }(IB, BB, Date.now(), ZB, JB)))
      };
      (0, TB.useEffect)((() => {
        vB()
      }), [IB, ZB]), (0, TB.useEffect)((() => {
        if (0 === oB.size) return;
        const BB = Math.min(...[...oB.values()].map((BB => BB.atMs))),
          IB = setTimeout(vB, Math.max(0, BB + ZB - Date.now()) + 1);
        return () => {
          clearTimeout(IB)
        }
      }), [oB, IB, ZB]);
      return [oB, (IB, ZB) => {
        GB((TB => {
          const oB = new Map(TB);
          return oB.set(IB, function(BB, IB, ZB) {
            return {
              value: BB,
              atMs: ZB,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(BB, IB)
            }
          }(ZB, BB(IB), Date.now(), JB)), oB
        }))
      }]
    }
    const Zh = "buildAFactory2Game:";

    function Th(BB) {
      let {
        message: IB,
        itemNames: ZB
      } = BB;
      const JB = fG(),
        {
          t: oB
        } = (0, YJ.G)(),
        [GB, vB] = (0, TB.useState)(!1),
        [kB, cB] = function(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RG;
          const [ZB, TB] = Ih((IB => BB.includes(IB)), BB, IB, Object.is);
          return [Bh(ZB, BB), TB]
        }(IB.baf2CoreBankPaused),
        nB = new Set(kB),
        hB = [...IB.baf2CoreBanked];
      for (const TB of nB) hB.some((BB => {
        let [IB] = BB;
        return IB === TB
      })) || hB.push([TB, 0]);
      return 0 === hB.length ? null : (0, Oo.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, Oo.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": GB,
          onClick: () => {
            vB(!GB)
          },
          children: [(0, Oo.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: oB(`${Zh}coreBankedLater`)
          }), (0, Oo.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: hB.map((BB => {
              let [IB, ZB] = BB;
              const TB = nB.has(IB);
              return (0, Oo.jsxs)("span", {
                className: QJ()({
                  Paused: TB
                }),
                title: TB ? oB(`${Zh}coreBankPausedTag`) : void 0,
                children: [(0, Oo.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, Oo.jsx)(pJ.e, {
                    itemName: IB,
                    amount: 0
                  })
                }), ZB, TB && (0, Oo.jsx)(iJ.d, {
                  name: "pause"
                })]
              }, IB)
            }))
          }), (0, Oo.jsx)(iJ.d, {
            name: GB ? "angle-up" : "angle-down"
          })]
        }), GB && (0, Oo.jsxs)(Oo.Fragment, {
          children: [(0, Oo.jsx)("ul", {
            children: hB.map((BB => {
              let [IB, TB] = BB;
              const GB = nB.has(IB);
              return (0, Oo.jsxs)("li", {
                children: [(0, Oo.jsxs)(tn, {
                  item: IB,
                  itemNames: ZB,
                  children: [(0, Oo.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: TB
                  }), GB && (0, Oo.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: oB(`${Zh}coreBankPausedTag`)
                  })]
                }), (0, Oo.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, Oo.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === TB,
                    onClick: () => {
                      JB.send(`baf2corewithdraw ${TB} ${IB}`)
                    },
                    children: oB(`${Zh}coreTake`)
                  }), (0, Oo.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      JB.send(`${dB} ${IB}`), cB(IB, !GB)
                    },
                    children: oB(GB ? `${Zh}coreBankResume` : `${Zh}coreBankStop`)
                  })]
                })]
              }, IB)
            }))
          }), (0, Oo.jsx)("p", {
            className: "Baf2CoreHint",
            children: oB(`${Zh}coreBankNote`)
          })]
        })]
      })
    }
    const Jh = "buildAFactory2Game:";

    function oh(BB) {
      const IB = Math.max(0, Math.floor(BB));
      return `${Math.floor(IB/60)}:${String(IB%60).padStart(2,"0")}`
    }

    function Gh(BB) {
      let {
        item: IB
      } = BB;
      return (0, Oo.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, Oo.jsx)(pJ.e, {
          itemName: IB,
          amount: 0
        })
      })
    }

    function vh() {
      return (0, Oo.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, Oo.jsx)(iJ.d, {
          name: "bolt"
        })
      })
    }

    function kh(BB) {
      let {
        charge: IB,
        hint: ZB,
        itemNames: TB
      } = BB;
      const JB = fG(),
        {
          t: oB
        } = (0, YJ.G)(),
        [GB, vB, kB, cB, nB, hB, zB] = IB,
        [FB, NB] = function(BB) {
          var IB;
          let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RG,
            TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [JB, oB] = Ih((() => BB), BB, ZB, TB);
          return [Vn(null !== (IB = JB.get("")) && void 0 !== IB ? IB : null, BB), BB => {
            oB("", BB)
          }]
        }(zB),
        gB = FB === zB ? hB : !FB,
        qB = cB >= nB,
        yB = GB.find((BB => {
          let [, IB, ZB] = BB;
          return ZB < .9 * IB
        }));
      let UB = `${Jh}coreChargeWaiting`,
        WB = {};
      return qB ? UB = `${Jh}coreChargeDone` : FB ? UB = `${Jh}coreChargeStopped` : gB && ZB ? (UB = `${Jh}${ZB[0]}`, WB = {
        item: To(oB, ZB[1])
      }) : gB && yB ? (UB = `${Jh}coreChargeShort`, WB = {
        item: To(oB, yB[0])
      }) : gB && vB > 0 && !kB ? UB = `${Jh}coreChargePower` : gB && (UB = `${Jh}coreChargeRunning`), (0, Oo.jsxs)("div", {
        className: QJ()("Baf2CoreCharge", {
          Waiting: !gB && !qB,
          Done: qB
        }),
        children: [(0, Oo.jsxs)("h4", {
          children: [oB(`${Jh}coreChargeTitle`), (0, Oo.jsx)("span", {
            children: oB(`${Jh}coreChargeProgress`, {
              done: oh(cB),
              need: oh(nB)
            })
          })]
        }), (0, Oo.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, Oo.jsx)("div", {
            style: {
              width: 100 * Math.min(cB, nB) / nB + "%"
            }
          })
        }), (0, Oo.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [GB.map((BB => {
            var IB;
            let [ZB, JB, GB] = BB;
            const vB = GB >= .9 * JB;
            return (0, Oo.jsxs)("li", {
              className: QJ()({
                Done: vB,
                Short: gB && !vB
              }),
              children: [(0, Oo.jsx)(Gh, {
                item: ZB
              }), (0, Oo.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, Oo.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Oo.jsx)(aJ.e, {
                    text: null !== (IB = TB[ZB]) && void 0 !== IB ? IB : ZB
                  }), (0, Oo.jsx)("span", {
                    children: oB(`${Jh}coreChargeItem`, {
                      now: String(GB),
                      need: String(JB)
                    })
                  })]
                }), (0, Oo.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, Oo.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*GB/JB)}%`
                    }
                  })
                })]
              })]
            }, ZB)
          })), vB > 0 && (0, Oo.jsxs)("li", {
            className: QJ()("Baf2CoreChargePower", {
              Short: gB && !kB
            }),
            children: [(0, Oo.jsx)(vh, {}), (0, Oo.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Oo.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Oo.jsx)("span", {
                  children: oB(`${Jh}coreChargePowerRow`, {
                    power: KB(vB)
                  })
                })
              })
            })]
          })]
        }), (0, Oo.jsx)("p", {
          className: "Baf2CoreHint",
          children: oB(UB, WB)
        }), !qB && (gB || FB) && (0, Oo.jsx)("button", {
          type: "button",
          className: QJ()("Baf2CoreChargeToggle", {
            Stopped: FB
          }),
          onClick: () => {
            JB.send(QB), NB(!FB)
          },
          children: oB(FB ? `${Jh}coreChargeRestart` : `${Jh}coreChargeStop`)
        })]
      })
    }

    function ch(BB) {
      let {
        charge: IB,
        reached: ZB,
        itemNames: TB
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)();
      return (0, Oo.jsxs)("div", {
        className: QJ()("Baf2CoreCharge", {
          Done: ZB
        }),
        children: [(0, Oo.jsxs)("h4", {
          children: [JB(`${Jh}coreChargeTitle`), (0, Oo.jsx)("span", {
            children: JB(`${Jh}coreChargeSpecTime`, {
              time: oh(IB.seconds)
            })
          })]
        }), (0, Oo.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [IB.items.map((BB => {
            var IB;
            let {
              item: oB,
              amount: GB
            } = BB;
            return (0, Oo.jsxs)("li", {
              className: QJ()({
                Done: ZB
              }),
              children: [(0, Oo.jsx)(Gh, {
                item: oB
              }), (0, Oo.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, Oo.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Oo.jsx)(aJ.e, {
                    text: null !== (IB = TB[oB]) && void 0 !== IB ? IB : oB
                  }), (0, Oo.jsx)("span", {
                    children: JB(`${Jh}coreChargeSpecItem`, {
                      need: String(GB)
                    })
                  })]
                })
              })]
            }, oB)
          })), IB.powerPerS > 0 && (0, Oo.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, Oo.jsx)(vh, {}), (0, Oo.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Oo.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Oo.jsx)("span", {
                  children: JB(`${Jh}coreChargePowerRow`, {
                    power: KB(IB.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const nh = "buildAFactory2Game:";

    function hh(BB) {
      let {
        def: IB,
        reached: ZB,
        banked: TB,
        itemNames: JB
      } = BB;
      const {
        t: oB
      } = (0, YJ.G)();
      return (0, Oo.jsx)("ul", {
        className: "Baf2CoreCost",
        children: IB.cost.map((BB => {
          let {
            item: IB,
            amount: GB
          } = BB;
          const vB = ZB ? 0 : TB(IB);
          return (0, Oo.jsx)("li", {
            children: (0, Oo.jsx)(tn, {
              item: IB,
              itemNames: JB,
              children: (0, Oo.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: vB > 0 ? oB(`${nh}coreBankedFor`, {
                  amount: String(vB),
                  total: String(GB)
                }) : `\xd7${GB}`
              })
            })
          }, IB)
        }))
      })
    }

    function zh(BB, IB) {
      if (IB >= nB()) return BB(`${nh}coreMaxTier`);
      const ZB = cB[IB + 1];
      return ZB && !ZB.startsWith("upgradeCore") ? BB(`${nh}coreGateQuest`, {
        quest: BB(`${nh}quest_${ZB}`)
      }) : BB(`${nh}coreGateClosed`)
    }

    function Fh() {
      const {
        t: BB
      } = (0, YJ.G)(), IB = fG(), ZB = (0, TB.useRef)(null), JB = (0, TB.useRef)(Date.now());
      return Dc(!0, ZB), (0, Oo.jsx)("div", {
        ref: ZB,
        className: "Baf2CoreGrow",
        children: (0, Oo.jsx)(sG.p, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - JB.current >= 600 && IB.send(WB)
          },
          children: BB(`${nh}coreGrow`)
        })
      })
    }

    function Nh(BB) {
      let {
        message: IB,
        itemNames: ZB,
        next: TB
      } = BB;
      const JB = fG(),
        {
          t: oB
        } = (0, YJ.G)(),
        GB = IB.baf2CoreTier,
        vB = IB.baf2CoreReady,
        kB = IB.baf2CoreNeeds.filter((BB => {
          let [, IB, ZB, TB] = BB;
          return TB > 0 && IB < ZB
        })),
        cB = IB.baf2CoreNeeds.every((BB => {
          let [, IB, ZB] = BB;
          return IB >= ZB
        })),
        nB = IB.baf2CoreKeep;
      return (0, Oo.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, Oo.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [vB && (0, Oo.jsx)(Fh, {}), (0, Oo.jsx)("h3", {
            children: oB(`${nh}coreBring`)
          }), (0, Oo.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: IB.baf2CoreNeeds.map((BB => {
              let [IB, TB, GB, vB] = BB;
              return (0, Oo.jsxs)("li", {
                className: QJ()({
                  Done: TB >= GB
                }),
                children: [(0, Oo.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, Oo.jsx)(pJ.e, {
                    itemName: IB,
                    amount: 0
                  })
                }), (0, Oo.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, Oo.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, Oo.jsx)(aJ.e, {
                      text: ZB[IB]
                    }), (0, Oo.jsxs)("span", {
                      children: [TB, "/", GB]
                    })]
                  }), (0, Oo.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, Oo.jsx)("div", {
                      style: {
                        width: 100 * TB / GB + "%"
                      }
                    }), vB > 0 && (0, Oo.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * vB / GB + "%"
                      }
                    })]
                  })]
                }), vB > 0 && TB < GB && (0, Oo.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    JB.send(`${CB} ${IB}`)
                  },
                  children: oB(`${nh}coreDeposit`, {
                    amount: String(vB)
                  })
                })]
              }, IB)
            }))
          }), IB.baf2CoreCharge && (0, Oo.jsx)(kh, {
            charge: IB.baf2CoreCharge,
            hint: IB.baf2CoreChargeHint,
            itemNames: ZB
          }), !vB && kB.length > 1 && (0, Oo.jsx)(sG.p, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              JB.send(WB)
            },
            children: oB(`${nh}coreHandOver`)
          }), !vB && void 0 !== nB && (0, Oo.jsx)("p", {
            className: "Baf2CoreHint",
            children: oB(`${nh}coreKeepRest`, {
              item: To(oB, nB)
            })
          }), !vB && !cB && 0 === kB.length && void 0 === nB && (0, Oo.jsx)("p", {
            className: "Baf2CoreHint",
            children: oB(`${nh}coreNothingHeld`)
          }), (0, Oo.jsx)(Th, {
            message: IB,
            itemNames: ZB
          })]
        }), (0, Oo.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Oo.jsx)("h3", {
            children: oB(`${nh}coreRewards`)
          }), (0, Oo.jsx)(Dn, {
            def: TB,
            tier: GB + 1,
            itemNames: ZB
          })]
        })]
      })
    }

    function gh(BB) {
      let {
        message: IB,
        itemNames: ZB,
        shown: TB
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)(), oB = IB.baf2CoreTier, GB = yB(TB), vB = TB <= oB, kB = new Map(IB.baf2CoreBanked), cB = !UB(oB, sB(IB)) && TB === oB;
      return (0, Oo.jsxs)("div", {
        className: QJ()("Baf2CoreBody", {
          Locked: !vB
        }),
        children: [(0, Oo.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Oo.jsx)("h3", {
            children: JB(vB ? `${nh}coreItTook` : `${nh}coreItNeeds`)
          }), 0 === GB.cost.length && (0, Oo.jsx)("p", {
            className: "Baf2CoreHint",
            children: JB(`${nh}coreTierStart`)
          }), GB.cost.length > 0 && (0, Oo.jsx)(hh, {
            def: GB,
            reached: vB,
            banked: BB => {
              var IB;
              return function(BB, IB, ZB, TB) {
                let JB = BB;
                for (let GB = IB + 2; GB <= ZB; GB++) {
                  var oB;
                  const BB = yB(GB).cost.find((BB => BB.item === TB)),
                    IB = Math.min(JB, null !== (oB = null === BB || void 0 === BB ? void 0 : BB.amount) && void 0 !== oB ? oB : 0);
                  if (GB === ZB) return IB;
                  JB -= IB
                }
                return 0
              }(null !== (IB = kB.get(BB)) && void 0 !== IB ? IB : 0, oB, TB, BB)
            },
            itemNames: ZB
          }), GB.charge && (0, Oo.jsx)(ch, {
            charge: GB.charge,
            reached: vB,
            itemNames: ZB
          }), cB && (0, Oo.jsxs)(Oo.Fragment, {
            children: [(0, Oo.jsx)("p", {
              className: "Baf2CoreHint",
              children: zh(JB, oB)
            }), (0, Oo.jsx)(Th, {
              message: IB,
              itemNames: ZB
            })]
          })]
        }), (0, Oo.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Oo.jsx)("h3", {
            children: JB(vB ? `${nh}coreGave` : `${nh}coreLockedRewards`)
          }), (0, Oo.jsx)(Dn, {
            def: GB,
            tier: TB,
            itemNames: ZB
          })]
        })]
      })
    }

    function qh(BB, IB) {
      const {
        key: ZB,
        params: TB
      } = FB(IB - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return BB(`${nh}${ZB}`, TB)
    }
    const yh = "buildAFactory2Game:",
      Uh = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Wh = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function dh(BB) {
      let {
        view: IB,
        close: ZB,
        askIslands: JB
      } = BB;
      const {
        t: oB
      } = (0, YJ.G)(), [GB, vB] = (0, TB.useState)(!1);
      (0, TB.useEffect)((() => {
        if (!GB) return;
        const BB = window.setTimeout((() => {
          vB(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(BB)
        }
      }), [GB]);
      const {
        message: kB,
        itemNames: cB
      } = IB, nB = kB.baf2CoreTier, hB = yB(nB), zB = UB(nB, sB(kB)), [gB, qB] = kB.baf2CoreMachines, [WB, dB] = kB.baf2CoreBelts, CB = kB.baf2CoreStorage, QB = kB.baf2CoreReady, [wB, OB] = (0, TB.useState)(null), YB = (null === wB || void 0 === wB ? void 0 : wB.at) === nB && wB.ready === QB ? wB.tier : zB ? nB + 1 : nB;
      let iB = "coreTierLocked";
      YB <= nB ? iB = "coreTierReached" : YB === nB + 1 && (iB = "coreTierNext");
      const pB = oB(`${yh}${yB(YB).nameKey}`),
        aB = YB === nB + 1 ? zB : null,
        HB = FB(YB, {
          tier: iB,
          stage: Uh[iB],
          atomic: Wh[iB]
        }),
        MB = oB(`${yh}${HB.key}`, {
          ...HB.params,
          name: pB
        }),
        jB = FB(nB, NB),
        PB = oB(`${yh}${jB.key}`, {
          ...jB.params,
          name: oB(`${yh}${hB.nameKey}`)
        });
      return (0, Oo.jsx)(QG.c, {
        close: ZB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, Oo.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, Oo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Oo.jsxs)("div", {
              children: [(0, Oo.jsx)("h2", {
                id: "baf2CoreTitle",
                children: oB(`${yh}coreTitle`)
              }), void 0 !== kB.baf2CoreIslandName && (0, Oo.jsx)("p", {
                className: "Baf2CoreIsland",
                children: kB.baf2CoreIslandName
              }), (0, Oo.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, Oo.jsx)("span", {
                  children: PB
                }), (0, Oo.jsx)("span", {
                  className: QJ()({
                    Full: gB >= qB
                  }),
                  children: oB(`${yh}coreMachineCount`, {
                    amount: String(gB),
                    total: String(qB)
                  })
                }), (0, Oo.jsx)("span", {
                  className: QJ()({
                    Full: WB >= dB
                  }),
                  children: oB(`${yh}coreBeltCount`, {
                    amount: String(WB),
                    total: String(dB)
                  })
                }), void 0 !== CB && (0, Oo.jsx)("span", {
                  className: QJ()({
                    Full: CB[0] >= CB[1]
                  }),
                  children: oB(`${yh}coreStorageCount`, {
                    amount: String(CB[0]),
                    total: String(CB[1])
                  })
                })]
              })]
            }), (0, Oo.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [kB.baf2CoreIslands && (0, Oo.jsx)(sG.g, {
                className: "Baf2CoreIslandsButton",
                disabled: GB,
                onClick: () => {
                  vB(!0), JB()
                },
                children: oB(`${yh}islandsOpenButton`)
              }), (0, Oo.jsx)(sG.l, {
                onClick: ZB
              })]
            })]
          }), (0, Oo.jsx)(fn, {
            tier: nB,
            shown: YB,
            TF: BB => {
              OB({
                tier: BB,
                at: nB,
                ready: QB
              })
            }
          }), (0, Oo.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [MB, YB > nB + 1 && (0, Oo.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: qh(oB, YB)
            })]
          }), 6 === YB && YB > nB && (0, Oo.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: oB(`${yh}coreStagesNote`)
          }), 11 === YB && YB > nB && (0, Oo.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: oB(`${yh}coreAtomicNote`)
          }), aB && (0, Oo.jsx)(Nh, {
            message: kB,
            itemNames: cB,
            next: aB
          }), !aB && (0, Oo.jsx)(gh, {
            message: kB,
            itemNames: cB,
            shown: YB
          })]
        })
      })
    }
    const Ch = {
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
    const Qh = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: vo,
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

    function sh(BB) {
      return BB.baf2DropCometOreOnly ? "dropCometOre" : BB.baf2DropCometIsotope ? "seed" === BB.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function wh(BB) {
      let {
        message: IB,
        quests: ZB,
        close: JB,
        leave: oB
      } = BB;
      const GB = fG(),
        {
          t: vB
        } = (0, YJ.G)(),
        kB = (0, Gn.h)(RJ, ZB.get()),
        cB = function(BB) {
          var IB;
          if (!jB(BB.tutorial)) return null;
          const ZB = BB.rows.find((BB => BB.current)),
            TB = ZB ? Ch[ZB.key] : void 0;
          return null !== (IB = null !== TB && void 0 !== TB ? TB : BB.side ? Ch[BB.side.row.key] : void 0) && void 0 !== IB ? IB : null
        }(kB),
        nB = null === kB.tier || no(kB.tier),
        hB = nB ? Qh : Qh.filter((BB => {
          let {
            item: IB
          } = BB;
          return IB !== vo
        })),
        [zB, FB] = (0, TB.useState)(null),
        NB = null !== zB && void 0 !== zB ? zB : !IB.baf2DropFoundSalvage && nB,
        gB = IB.baf2DropRuinDistance,
        qB = IB.baf2DropComet,
        yB = IB.baf2DropOldWorks,
        UB = IB.baf2DropGrove,
        WB = function(BB) {
          return 2 + Number(void 0 !== BB.baf2DropComet) + Number(!!BB.baf2DropOwedComet || void 0 !== BB.baf2DropOwedWaitMinutes) + Number(void 0 !== BB.baf2DropDigDistance) + Number(void 0 !== BB.baf2DropOldWorks) + Number(void 0 !== BB.baf2DropGrove)
        }(IB),
        dB = BB => {
          GB.send(function(BB) {
            return `baf2drop ${BB}`
          }(BB)), oB()
        };
      let CB = vB("buildAFactory2Game:dropRuinNone");
      if (null !== gB) {
        let BB = IB.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        IB.baf2DropRuinOldWorks && (BB = "dropRuinOldWorks");
        const ZB = void 0 === IB.baf2DropRuinCluster ? vB("buildAFactory2Game:dropRuinOpen") : vB("buildAFactory2Game:dropRuinCluster", {
          count: String(IB.baf2DropRuinCluster)
        });
        CB = `${vB(`buildAFactory2Game:${BB}`,{distance:String(gB)})} ${ZB}`
      }
      let QB = vB("buildAFactory2Game:dropBelowDescription");
      void 0 !== IB.baf2DropBelowLook && (QB = vB("buildAFactory2Game:dropBelowLook", {
        look: vB(IB.baf2DropBelowLook)
      }));
      const sB = "buildAFactory2Game:wildsRegion_survivorGrove" === IB.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        wB = Co(vB, 60 * function(BB) {
          const [IB, ZB] = (0, TB.useState)((() => Date.now())), [JB, oB] = (0, TB.useState)(IB);
          return (0, TB.useEffect)((() => {
            const BB = Date.now();
            ZB(BB), oB(BB)
          }), [BB]), (0, TB.useEffect)((() => {
            const BB = window.setInterval((() => {
              oB(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(BB)
            }
          }), []), Math.max(1, BB.baf2DropRenewMinutes - Math.floor((JB - IB) / 6e4))
        }(IB)),
        OB = function(BB, IB, ZB) {
          return "ruin" === BB && !ZB || "owed" === BB && !IB.baf2DropOwedComet ? null : BB
        }(cB, IB, null !== gB),
        YB = function(BB) {
          for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
          return QJ()("Baf2DropTile", ...ZB, {
            Wanted: OB === BB
          })
        };
      return (0, Oo.jsx)(QG.c, {
        close: JB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Oo.jsxs)("section", {
          className: QJ()("Baf2Panel Baf2DropMap", {
            Many: WB >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, Oo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Oo.jsxs)("div", {
              children: [(0, Oo.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: vB("buildAFactory2Game:dropMapTitle")
              }), (0, Oo.jsx)("p", {
                children: vB("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, Oo.jsx)(sG.l, {
              onClick: JB
            })]
          }), (0, Oo.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== qB && (0, Oo.jsxs)(sG.A, {
              className: YB("comet", "Baf2DropComet"),
              onClick: () => {
                dB("comet")
              },
              children: [(0, Oo.jsx)("strong", {
                children: vB("buildAFactory2Game:dropComet")
              }), (0, Oo.jsx)("span", {
                children: vB(`buildAFactory2Game:${sh(IB)}`, {
                  distance: String(qB)
                })
              })]
            }), IB.baf2DropOwedComet && (0, Oo.jsxs)(sG.A, {
              className: YB("owed", "Baf2DropComet"),
              onClick: () => {
                dB("owed")
              },
              children: [(0, Oo.jsx)("strong", {
                children: vB("buildAFactory2Game:dropOwedComet")
              }), (0, Oo.jsx)("span", {
                children: IB.baf2DropOwedIsotope ? vB("buildAFactory2Game:dropOwedIsotopeDescription") : vB("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== IB.baf2DropOwedWaitMinutes && (0, Oo.jsxs)(sG.A, {
              className: YB("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, Oo.jsx)("strong", {
                children: vB("buildAFactory2Game:dropOwedComet")
              }), (0, Oo.jsx)("span", {
                children: vB("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(IB.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, Oo.jsxs)(sG.g, {
              className: YB("below"),
              onClick: () => {
                dB("below")
              },
              children: [(0, Oo.jsx)("strong", {
                children: vB("buildAFactory2Game:dropBelow")
              }), (0, Oo.jsx)("span", {
                children: QB
              })]
            }), void 0 !== IB.baf2DropDigDistance && (0, Oo.jsxs)(sG.s, {
              className: YB("dig"),
              onClick: () => {
                dB("dig")
              },
              children: [(0, Oo.jsx)("strong", {
                children: vB("buildAFactory2Game:dropDig")
              }), (0, Oo.jsx)("span", {
                children: vB("buildAFactory2Game:dropDigDescription", {
                  distance: String(IB.baf2DropDigDistance),
                  y: Wo(IB.baf2DropDigY)
                })
              })]
            }), void 0 !== UB && (0, Oo.jsxs)(sG.s, {
              className: YB("grove", "Baf2DropGrove"),
              onClick: () => {
                dB("grove")
              },
              children: [(0, Oo.jsx)("strong", {
                children: vB("buildAFactory2Game:dropGrove")
              }), (0, Oo.jsx)("span", {
                children: vB(`buildAFactory2Game:${sB}`, {
                  distance: String(UB)
                })
              })]
            }), (0, Oo.jsxs)(sG.p, {
              className: YB("ruin"),
              disabled: null === gB,
              onClick: () => {
                dB("ruin")
              },
              children: [(0, Oo.jsx)("strong", {
                children: vB("buildAFactory2Game:dropRuin")
              }), (0, Oo.jsx)("span", {
                children: CB
              })]
            }), void 0 !== yB && (0, Oo.jsxs)(sG.M, {
              className: YB("works"),
              onClick: () => {
                dB("works")
              },
              children: [(0, Oo.jsx)("strong", {
                children: vB("buildAFactory2Game:dropOldWorks")
              }), (0, Oo.jsx)("span", {
                children: vB("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(yB)
                })
              })]
            })]
          }), (0, Oo.jsx)("p", {
            className: "Baf2DropRenew",
            children: vB("buildAFactory2Game:dropRenew", {
              time: wB
            })
          }), (0, Oo.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: NB,
            onToggle: BB => {
              BB.currentTarget.open !== NB && FB(BB.currentTarget.open)
            },
            children: [(0, Oo.jsx)("summary", {
              children: vB("buildAFactory2Game:dropSalvageWhat")
            }), (0, Oo.jsx)("p", {
              children: vB("buildAFactory2Game:dropSalvageIntro")
            }), (0, Oo.jsx)("ul", {
              children: hB.map((BB => {
                let {
                  item: IB,
                  nameKey: ZB,
                  useKey: TB,
                  params: JB
                } = BB;
                return (0, Oo.jsxs)("li", {
                  children: [(0, Oo.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, Oo.jsx)(pJ.e, {
                      itemName: IB,
                      amount: 0
                    })
                  }), (0, Oo.jsxs)("span", {
                    children: [(0, Oo.jsx)("strong", {
                      children: vB(ZB)
                    }), ": ", vB(TB, JB)]
                  })]
                }, IB)
              }))
            })]
          })]
        })
      })
    }
    const Oh = "buildAFactory2Game:";

    function Yh(BB, IB) {
      return BB.sendIslandEdit(`baf2coopleave ${IB.baf2IslandId}`)
    }

    function ih(BB) {
      let {
        card: IB,
        canRename: ZB,
        done: JB,
        t: oB
      } = BB;
      const GB = fG(),
        [vB, kB] = (0, TB.useState)(IB.baf2IslandName),
        cB = sc(vB),
        nB = "" === cB || wc(cB),
        hB = () => {
          !nB && ZB && (cB !== IB.baf2IslandName ? JB(GB.sendIslandEdit(`baf2islandrename ${IB.baf2IslandId} ${cB}`)) : JB(null))
        },
        zB = () => {
          JB(null)
        };
      return (0, Oo.jsxs)("div", {
        className: "Baf2IslandForm",
        ...xc(zB),
        children: [(0, Oo.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [oB(`${Oh}islandsRenameLabel`), (0, Oo.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: vB,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Ec,
            onChange: BB => {
              kB(BB.target.value)
            },
            ...bc(hB, zB)
          })]
        }), "" === cB && (0, Oo.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: oB(`${Oh}islandsRenameEmpty`)
        }), wc(cB) && (0, Oo.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: oB(`${Oh}islandsNameReserved`)
        }), (0, Oo.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Oo.jsx)(sG.s, {
            disabled: nB || !ZB,
            onClick: hB,
            children: oB(`${Oh}islandsRenameSave`)
          }), (0, Oo.jsx)(sG.g, {
            onClick: zB,
            children: oB(`${Oh}islandsCancel`)
          })]
        })]
      })
    }

    function ph(BB) {
      let {
        card: IB,
        canDelete: ZB,
        done: JB,
        t: oB
      } = BB;
      const GB = fG(),
        [vB, kB] = (0, TB.useState)(""),
        cB = function(BB, IB) {
          return sc(BB).toLowerCase() === sc(IB).toLowerCase()
        }(vB, IB.baf2IslandName),
        nB = () => {
          cB && ZB && JB(GB.sendIslandEdit(`baf2islanddelete ${IB.baf2IslandId}`))
        },
        hB = () => {
          JB(null)
        },
        zB = rc("name"),
        [FB, NB = ""] = oB(`${Oh}islandsDeleteConfirm`, {
          name: zB
        }).split(zB);
      return (0, Oo.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...xc(hB),
        children: [(0, Oo.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, Oo.jsxs)("span", {
            children: [FB, (0, Oo.jsx)("strong", {
              children: IB.baf2IslandName
            }), NB]
          }), (0, Oo.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: vB,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Ec,
            onChange: BB => {
              kB(BB.target.value)
            },
            ...bc(nB, hB)
          })]
        }), fc(IB) && (0, Oo.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: oB(`${Oh}islandsDeleteLeftBack`)
        }), (0, Oo.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Oo.jsx)(sG.M, {
            disabled: !cB || !ZB,
            onClick: nB,
            children: oB(`${Oh}islandsDeleteForGood`)
          }), (0, Oo.jsx)(sG.g, {
            onClick: hB,
            children: oB(`${Oh}islandsCancel`)
          })]
        })]
      })
    }

    function ah(BB) {
      let {
        members: IB,
        t: ZB
      } = BB;
      const TB = IB.length;
      return (0, Oo.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, Oo.jsxs)("span", {
          children: [1 === TB ? ZB(`${Oh}islandsPlayersOne`) : ZB(`${Oh}islandsPlayers`, {
            count: String(TB)
          }), " "]
        }), IB.map(((BB, IB) => (0, Oo.jsxs)("span", {
          className: QJ()("Baf2IslandMember", {
            Here: BB.baf2MemberHere
          }),
          title: BB.baf2MemberHere ? ZB(`${Oh}islandsPlayerHere`) : void 0,
          children: [BB.baf2MemberName, IB < TB - 1 ? ", " : ""]
        }, BB.baf2MemberKey)))]
      })
    }

    function Hh(BB) {
      let {
        card: IB,
        answered: ZB,
        nowMs: JB,
        t: oB
      } = BB;
      const GB = fG(),
        [vB, kB] = (0, TB.useState)(new Map),
        cB = fc(IB);
      if (!cB) return null;
      return (0, Oo.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, Oo.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: oB(`${Oh}islandsLeftTitle`)
        }), (0, Oo.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: cB.left.map((BB => {
            const TB = BB.baf2LeftKey,
              nB = Ac(vB.get(TB), ZB, JB),
              hB = function(BB) {
                return 1 === BB ? [`${Wc}islandsLeftItemsOne`] : [`${Wc}islandsLeftItems`, {
                  count: String(BB)
                }]
              }(BB.baf2LeftItems);
            return (0, Oo.jsx)("li", {
              className: QJ()("Baf2IslandPerson", {
                Pending: nB
              }),
              children: (0, Oo.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Oo.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: BB.baf2LeftName
                }), (0, Oo.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: oB(hB[0], hB[1])
                }), cB.claim && (0, Oo.jsx)(sG.s, {
                  className: "Baf2IslandPersonButton",
                  disabled: nB,
                  onClick: () => {
                    (BB => {
                      const ZB = GB.sendIslandEdit(`baf2coopclaim ${IB.baf2IslandId} ${BB}`);
                      kB((IB => new Map(IB).set(BB, {
                        atMs: Date.now(),
                        answer: ZB
                      })))
                    })(TB)
                  },
                  children: oB(`${Oh}islandsClaim`)
                })]
              })
            }, TB)
          }))
        }), cB.goThere && (0, Oo.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: oB(`${Oh}islandsClaimGoThere`)
        })]
      })
    }

    function Mh(BB) {
      let {
        card: IB,
        view: ZB,
        blocked: JB,
        maxIslands: oB,
        answered: GB,
        nowMs: vB,
        done: kB,
        openSocial: cB,
        t: nB
      } = BB;
      const hB = fG(),
        [zB, FB] = (0, TB.useState)(new Map),
        [NB, gB] = (0, TB.useState)(new Map),
        [qB, yB] = (0, TB.useState)(null),
        UB = (0, TB.useRef)(null);
      Sc(UB);
      const WB = IB.baf2IslandId,
        dB = IB.baf2IslandCoop,
        CB = null !== dB && void 0 !== dB && dB.baf2CoopMembers.some((BB => BB.baf2MemberKey === qB)) ? qB : null,
        QB = function(BB, IB) {
          const ZB = BB.baf2IslandCoop;
          return ZB && lc(ZB) || null !== IB ? void 0 : BB.baf2IslandInvitable
        }(IB, JB),
        sB = function(BB, IB) {
          const ZB = BB.baf2IslandCoop;
          return ZB && lc(ZB) ? {
            key: `${Wc}islandsCoopFull`,
            params: {
              max: String(ZB.baf2CoopMax)
            }
          } : void 0 !== BB.baf2IslandInvitable && null === IB || ZB && !ZB.baf2CoopManageHere ? null : "degraded" === IB || "stuck" === IB ? {
            key: `${Wc}islandsInviteNotLoaded`
          } : null === IB || function(BB) {
            return "notHome" === BB || "wilds" === BB || "visiting" === BB
          }(IB) || pc(IB) ? {
            key: `${Wc}islandsInviteGoThere`
          } : {
            key: `${Wc}islandsInviteBusy`
          }
        }(IB, JB),
        wB = () => {
          var BB;
          yB(null), null === (BB = UB.current) || void 0 === BB || BB.focus()
        };
      return (0, Oo.jsxs)("div", {
        ref: UB,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...xc(null === CB ? kB : wB),
        children: [dB && (0, Oo.jsxs)(Oo.Fragment, {
          children: [(0, Oo.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: nB(`${Oh}islandsPlayersTitle`, {
              count: String(dB.baf2CoopMembers.length),
              max: String(dB.baf2CoopMax)
            })
          }), (0, Oo.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: dB.baf2CoopMembers.map(((BB, IB) => {
              const TB = BB.baf2MemberKey,
                JB = Ac(zB.get(TB), GB, vB);
              return (0, Oo.jsxs)("li", {
                className: QJ()("Baf2IslandPerson", {
                  Pending: JB
                }),
                children: [(0, Oo.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, Oo.jsx)("span", {
                    className: QJ()("Baf2IslandPersonName", {
                      Here: BB.baf2MemberHere
                    }),
                    children: BB.baf2MemberName
                  }), BB.baf2MemberHere && (0, Oo.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: nB(`${Oh}islandsPlayerHere`)
                  }), 0 === IB && (0, Oo.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: nB(`${Oh}islandsPlayerOwner`)
                  }), ZB.remove && IB > 0 && !JB && CB !== TB && (0, Oo.jsx)(sG.N, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var BB;
                      yB(TB), null === (BB = UB.current) || void 0 === BB || BB.focus()
                    },
                    children: nB(`${Oh}islandsRemove`)
                  })]
                }), CB === TB && (0, Oo.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, Oo.jsx)("p", {
                    children: mc(nB, `${Oh}islandsRemoveConfirm`, {
                      player: BB.baf2MemberName
                    })
                  }), (0, Oo.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, Oo.jsx)(sG.M, {
                      onClick: () => {
                        (BB => {
                          const IB = hB.sendIslandEdit(`baf2coopremove ${WB} ${BB.baf2MemberKey}`);
                          FB((ZB => new Map(ZB).set(BB.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: IB
                          }))), wB()
                        })(BB)
                      },
                      children: nB(`${Oh}islandsRemoveYes`)
                    }), (0, Oo.jsx)(sG.g, {
                      onClick: wB,
                      children: nB(`${Oh}islandsCancel`)
                    })]
                  })]
                })]
              }, TB)
            }))
          })]
        }), (void 0 !== QB || null !== sB) && (0, Oo.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: nB(`${Oh}islandsInviteTitle`)
        }), !dB && (void 0 !== QB || null !== sB) && (0, Oo.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: nB(`${Oh}islandsInviteShareNote`)
        }), 0 === (null === QB || void 0 === QB ? void 0 : QB.length) && (0, Oo.jsx)(jh, {
          openSocial: cB,
          t: nB
        }), void 0 !== QB && QB.length > 0 && (0, Oo.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: QB.map((BB => {
            const IB = !0 === BB.baf2InvitableSent || Ac(NB.get(BB.baf2InvitableId), GB, vB);
            return (0, Oo.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, Oo.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Oo.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: BB.baf2InvitableName
                }), BB.baf2InvitableFull && !IB && (0, Oo.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: nB(`${Oh}islandsInviteTheirFull`, {
                    max: String(oB)
                  })
                }), (IB || !BB.baf2InvitableFull) && (0, Oo.jsx)(sG.s, {
                  className: "Baf2IslandPersonButton",
                  disabled: IB,
                  onClick: () => {
                    (BB => {
                      const IB = hB.sendIslandEdit(`baf2coopinvite ${WB} ${BB}`);
                      gB((ZB => new Map(ZB).set(BB, {
                        atMs: Date.now(),
                        answer: IB
                      })))
                    })(BB.baf2InvitableId)
                  },
                  children: nB(IB ? `${Oh}islandsInvited` : `${Oh}islandsInvite`)
                })]
              })
            }, BB.baf2InvitableId)
          }))
        }), sB && (0, Oo.jsx)(Zn, {
          note: sB,
          t: nB
        }), (0, Oo.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Oo.jsx)(sG.g, {
            onClick: kB,
            children: nB(`${Oh}islandsDone`)
          })
        })]
      })
    }

    function jh(BB) {
      let {
        openSocial: IB,
        t: ZB
      } = BB;
      return (0, Oo.jsxs)(Oo.Fragment, {
        children: [(0, Oo.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ZB(IB ? `${Oh}islandsInviteNobody` : `${Oh}islandsInviteNobodyGuest`)
        }), IB && (0, Oo.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Oo.jsx)(sG.g, {
            onClick: IB,
            children: ZB("socialBar:social")
          })
        })]
      })
    }

    function Ph(BB) {
      let {
        className: IB,
        text: ZB,
        ConfirmButton: JB,
        confirmLabel: oB,
        canConfirm: GB,
        send: vB,
        done: kB,
        t: cB
      } = BB;
      const nB = (0, TB.useRef)(null);
      Sc(nB);
      const hB = () => {
        kB(null)
      };
      return (0, Oo.jsxs)("div", {
        ref: nB,
        tabIndex: -1,
        className: QJ()("Baf2IslandForm", IB),
        ...xc(hB),
        children: [(0, Oo.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: ZB
        }), (0, Oo.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Oo.jsx)(JB, {
            disabled: !GB,
            onClick: () => {
              GB && kB(vB())
            },
            children: oB
          }), (0, Oo.jsx)(sG.g, {
            onClick: hB,
            children: cB(`${Oh}islandsCancel`)
          })]
        })]
      })
    }

    function Rh(BB) {
      return "hidden" !== BB
    }

    function rh(BB) {
      var IB, ZB;
      let {
        card: JB,
        keepOwn: oB,
        blocked: GB,
        maxIslands: vB,
        serverNowMs: kB,
        nowMs: cB,
        actions: nB,
        full: hB,
        waits: zB,
        answered: FB,
        mode: NB,
        setMode: gB,
        pending: qB,
        onSent: yB,
        switchTo: UB,
        leave: WB,
        coopOn: dB,
        openSocial: CB,
        t: QB
      } = BB;
      const sB = fG(),
        wB = JB.baf2IslandActive,
        OB = wB ? null : function(BB, IB) {
          if (BB <= 0) return null;
          const ZB = IB - BB;
          if (ZB < go) return [`${Wc}islandsPlayedJustNow`];
          if (ZB < dc) return [`${Wc}islandsPlayedMinutes`, {
            minutes: String(Math.floor(ZB / go))
          }];
          if (ZB < Cc) return [`${Wc}islandsPlayedHours`, {
            hours: String(Math.floor(ZB / dc))
          }];
          const TB = Math.floor(ZB / Cc);
          return 1 === TB ? [`${Wc}islandsPlayedDay`] : [`${Wc}islandsPlayedDays`, {
            days: String(TB)
          }]
        }(JB.baf2IslandLastPlayedMs, kB),
        YB = void 0 === (iB = JB.baf2IslandItems) ? null : 0 === iB ? [`${Wc}islandsItemsNone`] : 1 === iB ? [`${Wc}islandsItemsOne`] : [`${Wc}islandsItems`, {
          count: String(iB)
        }];
      var iB;
      const pB = function(BB) {
          return BB ? 1 === BB ? [`${Wc}islandsWaitingOne`] : [`${Wc}islandsWaiting`, {
            count: String(BB)
          }] : null
        }(JB.baf2IslandWaiting),
        aB = JB.baf2IslandUnreadable,
        HB = JB.baf2IslandCoop,
        MB = uc(JB, nB, oB, hB, dB, GB),
        jB = (0, TB.useRef)(null);
      Dc(null !== NB, jB);
      const PB = () => {
          var BB;
          gB(null), null === (BB = jB.current) || void 0 === BB || BB.focus()
        },
        RB = (BB, IB) => {
          PB(), null !== BB && yB(BB, IB)
        },
        rB = (BB, IB) => QB(`${Oh}${BB}`, {
          time: Co(QB, IB)
        });
      return (0, Oo.jsxs)("li", {
        ref: jB,
        tabIndex: -1,
        className: QJ()("Baf2IslandCard", {
          Active: wB,
          Pending: qB,
          Shared: void 0 !== HB
        }),
        children: [(0, Oo.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, Oo.jsx)("strong", {
            className: "Baf2IslandName",
            children: JB.baf2IslandName
          }), wB && (0, Oo.jsx)("span", {
            className: "Baf2IslandBadge",
            children: QB(`${Oh}islandsOnThis`)
          }), HB && (0, Oo.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: QB(`${Oh}islandsShared`)
          })]
        }), "member" === (null === HB || void 0 === HB ? void 0 : HB.baf2CoopRole) && (0, Oo.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: mc(QB, `${Oh}islandsSharedBy`, {
            owner: HB.baf2CoopOwner
          })
        }), void 0 !== aB && (0, Oo.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: QB("newer" === aB ? `${Oh}islandsUnreadable` : `${Oh}islandsDamaged`)
        }), "corrupt" === aB && hB && (0, Oo.jsx)("p", {
          className: "Baf2IslandStats",
          children: QB(`${Oh}islandsDamagedFull`)
        }), void 0 === aB && (0, Oo.jsxs)(Oo.Fragment, {
          children: [(0, Oo.jsx)(In, {
            tier: JB.baf2IslandTier,
            t: QB
          }), (0, Oo.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, Oo.jsx)("span", {
              children: 1 === JB.baf2IslandQuestsDone ? QB(`${Oh}islandsQuestsDoneOne`) : QB(`${Oh}islandsQuestsDone`, {
                count: String(JB.baf2IslandQuestsDone)
              })
            }), (0, Oo.jsx)("span", {
              children: 1 === JB.baf2IslandMachines ? QB(`${Oh}islandsMachinesOne`) : QB(`${Oh}islandsMachines`, {
                count: String(JB.baf2IslandMachines)
              })
            }), YB && (0, Oo.jsx)("span", {
              children: QB(YB[0], YB[1])
            }), pB && (0, Oo.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: QB(pB[0], pB[1])
            }), OB && (0, Oo.jsx)("span", {
              children: QB(OB[0], OB[1])
            })]
          })]
        }), HB && void 0 === HB.baf2CoopState && "people" !== NB && (0, Oo.jsx)(ah, {
          members: HB.baf2CoopMembers,
          t: QB
        }), null === NB && (0, Oo.jsx)(Hh, {
          card: JB,
          answered: FB,
          nowMs: cB,
          t: QB
        }), MB.note && (0, Oo.jsx)(Zn, {
          note: MB.note,
          className: QJ()({
            Unreachable: void 0 !== (null === HB || void 0 === HB ? void 0 : HB.baf2CoopState)
          }),
          t: QB
        }), "rename" === NB && (0, Oo.jsx)(ih, {
          card: JB,
          canRename: "enabled" === MB.rename,
          done: RB,
          t: QB
        }), "delete" === NB && (0, Oo.jsx)(ph, {
          card: JB,
          canDelete: "enabled" === MB.delete,
          done: BB => {
            RB(BB, HB ? "delete" : void 0)
          },
          t: QB
        }), "people" === NB && (0, Oo.jsx)(Mh, {
          card: JB,
          view: MB,
          blocked: GB,
          maxIslands: vB,
          answered: FB,
          nowMs: cB,
          done: PB,
          openSocial: CB,
          t: QB
        }), "leave" === NB && (0, Oo.jsx)(Ph, {
          className: "Leave",
          text: mc(QB, `${Oh}islandsLeaveConfirm`, {
            island: JB.baf2IslandName,
            owner: null !== (IB = null === (ZB = JB.baf2IslandCoop) || void 0 === ZB ? void 0 : ZB.baf2CoopOwner) && void 0 !== IB ? IB : ""
          }),
          ConfirmButton: sG.M,
          confirmLabel: QB(`${Oh}islandsLeaveYes`),
          canConfirm: "enabled" === MB.leave,
          send: () => Yh(sB, JB),
          done: BB => {
            RB(BB, "leave"), null !== BB && wB && WB()
          },
          t: QB
        }), "unshare" === NB && (0, Oo.jsx)(Ph, {
          className: "Unshare",
          text: mc(QB, `${Oh}islandsStopSharingConfirm`, {
            island: JB.baf2IslandName
          }),
          ConfirmButton: sG.s,
          confirmLabel: QB(`${Oh}islandsStopSharing`),
          canConfirm: "enabled" === MB.unshare,
          send: () => sB.sendIslandEdit(`baf2coopunshare ${JB.baf2IslandId}`),
          done: BB => {
            RB(BB), null !== BB && WB()
          },
          t: QB
        }), null === NB && !qB && (0, Oo.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": JB.baf2IslandName,
          children: [Rh(MB.switch) && (0, Oo.jsx)(sG.s, {
            disabled: "enabled" !== MB.switch,
            onClick: UB,
            children: "tryAgain" === MB.switchLabel ? QB(`${Oh}islandsTryAgain`) : zB.switch > 0 ? rB("islandsSwitchIn", zB.switch) : QB(`${Oh}islandsSwitch`)
          }), Rh(MB.rename) && (0, Oo.jsx)(sG.g, {
            disabled: "enabled" !== MB.rename,
            onClick: () => {
              gB("rename")
            },
            children: QB(`${Oh}islandsRename`)
          }), Rh(MB.people) && (0, Oo.jsx)(sG.g, {
            disabled: "enabled" !== MB.people,
            onClick: () => {
              gB("people")
            },
            children: QB("players" === MB.peopleLabel ? `${Oh}islandsPlayersButton` : `${Oh}islandsInviteButton`)
          }), Rh(MB.unshare) && (0, Oo.jsx)(sG.g, {
            disabled: "enabled" !== MB.unshare,
            onClick: () => {
              gB("unshare")
            },
            children: QB(`${Oh}islandsStopSharing`)
          }), Rh(MB.dismiss) && (0, Oo.jsx)(sG.g, {
            disabled: "enabled" !== MB.dismiss,
            onClick: () => {
              yB(Yh(sB, JB), "dismiss"), wB && WB()
            },
            children: QB(`${Oh}islandsDismiss`)
          }), Rh(MB.leave) && (0, Oo.jsx)(sG.N, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== MB.leave,
            onClick: () => {
              gB("leave")
            },
            children: wB && zB.switch > 0 ? rB("islandsLeaveIn", zB.switch) : QB(`${Oh}islandsLeave`)
          }), Rh(MB.delete) && (0, Oo.jsx)(sG.N, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== MB.delete,
            onClick: () => {
              gB("delete")
            },
            children: zB.change > 0 && MB.deleteWaits ? rB("islandsDeleteIn", zB.change) : QB(`${Oh}islandsDelete`)
          })]
        })]
      })
    }
    const mh = "buildAFactory2Game:";

    function Xh(BB) {
      let {
        invite: IB,
        actions: ZB,
        full: JB,
        maxIslands: oB,
        waitSeconds: GB,
        focus: vB,
        focused: kB,
        join: cB,
        decline: nB,
        t: hB
      } = BB;
      const [zB, FB] = (0, TB.useState)(!1), NB = (0, TB.useRef)(null);
      Dc(zB, NB), (0, TB.useEffect)((() => {
        var BB;
        vB && (FB(!0), null === (BB = NB.current) || void 0 === BB || BB.focus(), kB())
      }), [vB, kB]);
      const gB = function(BB, IB, ZB, TB, JB) {
          return ZB ? {
            join: !1,
            note: {
              key: `${Wc}islandsJoinTooMany`,
              params: {
                max: String(TB)
              }
            }
          } : BB.baf2InvitePlayers >= JB ? {
            join: !1,
            note: {
              key: `${Wc}islandsJoinFull`
            }
          } : {
            join: IB.switch,
            note: null
          }
        }(IB, ZB, JB, oB, 10),
        qB = IB.baf2InviteIsland,
        yB = IB.baf2InvitePlayers,
        UB = () => {
          var BB;
          FB(!1), null === (BB = NB.current) || void 0 === BB || BB.focus()
        },
        WB = GB > 0 && null === gB.note ? hB(`${mh}islandsJoinIn`, {
          time: Co(hB, GB)
        }) : hB(`${mh}islandsJoin`);
      return (0, Oo.jsxs)("li", {
        ref: NB,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...zB ? xc(UB) : {},
        children: [(0, Oo.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, Oo.jsx)("strong", {
            className: "Baf2IslandName",
            children: qB
          })
        }), (0, Oo.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: mc(hB, `${mh}islandsInvitedBy`, {
            owner: IB.baf2InviteOwner
          })
        }), (0, Oo.jsx)(In, {
          tier: IB.baf2InviteTier,
          t: hB
        }), (0, Oo.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, Oo.jsx)("span", {
            children: 1 === yB ? hB(`${mh}islandsPlayersCountOne`) : hB(`${mh}islandsPlayersCount`, {
              count: String(yB)
            })
          })
        }), gB.note && (0, Oo.jsx)(Zn, {
          note: gB.note,
          t: hB
        }), zB && (0, Oo.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: mc(hB, `${mh}islandsJoinConfirm`, {
            island: qB
          })
        }), !zB && (0, Oo.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": qB,
          children: [(0, Oo.jsx)(sG.s, {
            disabled: !gB.join,
            onClick: () => {
              var BB;
              FB(!0), null === (BB = NB.current) || void 0 === BB || BB.focus()
            },
            children: WB
          }), (0, Oo.jsx)(sG.g, {
            onClick: nB,
            children: hB(`${mh}islandsDecline`)
          })]
        }), zB && (0, Oo.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Oo.jsx)(sG.s, {
            disabled: !gB.join,
            onClick: cB,
            children: hB(`${mh}islandsJoinYes`)
          }), (0, Oo.jsx)(sG.g, {
            onClick: UB,
            children: hB(`${mh}islandsCancel`)
          })]
        })]
      })
    }

    function Lh(BB) {
      let {
        invites: IB,
        actions: ZB,
        full: TB,
        maxIslands: JB,
        waitSeconds: oB,
        focus: GB,
        focused: vB,
        leave: kB,
        declined: cB,
        t: nB
      } = BB;
      const hB = fG();
      return (0, Oo.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, Oo.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: nB(`${mh}islandsInvitesTitle`)
        }), (0, Oo.jsx)("ul", {
          className: "Baf2IslandCards",
          children: IB.map((BB => {
            const IB = BB.baf2InviteId;
            return (0, Oo.jsx)(Xh, {
              invite: BB,
              actions: ZB,
              full: TB,
              maxIslands: JB,
              waitSeconds: oB,
              focus: GB === IB,
              focused: vB,
              join: () => {
                hB.send(`baf2coopaccept ${IB}`), kB()
              },
              decline: () => {
                hB.send(`baf2coopdecline ${IB}`), cB(IB)
              },
              t: nB
            }, IB)
          }))
        })]
      })
    }
    const eh = "buildAFactory2Game:";

    function uh(BB) {
      let {
        cards: IB,
        activeName: ZB,
        canStart: JB,
        waitSeconds: oB,
        leave: GB,
        t: vB
      } = BB;
      const kB = fG(),
        [cB, nB] = (0, TB.useState)(!1),
        [hB, zB] = (0, TB.useState)(""),
        FB = (0, TB.useRef)(null);
      Dc(cB, FB), (0, TB.useEffect)((() => {
        var BB;
        cB && (null === (BB = FB.current) || void 0 === BB || BB.focus())
      }), [cB]);
      const NB = Oc(IB),
        gB = sc(hB),
        qB = wc(gB),
        yB = () => {
          JB && !qB && (kB.send("" === gB || gB === NB ? EB : `${EB} ${gB}`), GB())
        },
        UB = () => {
          var BB;
          nB(!1), null === (BB = FB.current) || void 0 === BB || BB.focus()
        };
      return (0, Oo.jsxs)("li", {
        ref: FB,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...cB ? xc(UB) : {},
        children: [(0, Oo.jsx)("strong", {
          className: "Baf2IslandName",
          children: vB(`${eh}islandsNewTitle`)
        }), !cB && (0, Oo.jsx)("p", {
          className: "Baf2IslandStats",
          children: vB(`${eh}islandsNewNote`)
        }), cB && (0, Oo.jsxs)(Oo.Fragment, {
          children: [(0, Oo.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: mc(vB, `${eh}islandsNewConfirm`, {
              name: ZB
            })
          }), (0, Oo.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [vB(`${eh}islandsNewNameLabel`), (0, Oo.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: hB,
              placeholder: NB,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: Ec,
              onChange: BB => {
                zB(BB.target.value)
              },
              ...bc(yB, UB)
            })]
          }), qB && (0, Oo.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: vB(`${eh}islandsNameReserved`)
          })]
        }), (0, Oo.jsxs)("div", {
          className: QJ()("Baf2IslandButtons", {
            Stacked: cB
          }),
          children: [(0, Oo.jsx)(sG.s, {
            disabled: !JB || cB && qB,
            onClick: () => {
              if (!cB) return zB(NB), void nB(!0);
              yB()
            },
            children: oB > 0 ? vB(`${eh}islandsNewIn`, {
              time: Co(vB, oB)
            }) : vB(cB ? `${eh}islandsNewConfirmButton` : `${eh}islandsNew`)
          }), cB && (0, Oo.jsx)(sG.g, {
            onClick: UB,
            children: vB(`${eh}islandsCancel`)
          })]
        })]
      })
    }

    function fh(BB) {
      var IB, ZB;
      let {
        message: JB,
        arrivedAtMs: oB,
        close: GB,
        leave: vB,
        openSocial: kB
      } = BB;
      const cB = fG(),
        {
          t: nB
        } = (0, YJ.G)(),
        hB = Bn(1e3),
        [zB, FB] = (0, TB.useState)(null),
        [NB, gB] = (0, TB.useState)(new Map),
        [qB, yB] = (0, TB.useState)(new Set),
        UB = JB.baf2IslandCards,
        WB = function(BB, IB, ZB, TB) {
          return (null !== BB && void 0 !== BB ? BB : []).filter((BB => IB + BB.baf2InviteLeftMs > ZB && !TB.has(BB.baf2InviteId)))
        }(JB.baf2IslandsInvites, oB, hB, qB),
        dB = WB.map((BB => BB.baf2InviteId)).join(" "),
        CB = (0, TB.useRef)(null),
        QB = Kc(CB);
      Vc(), (0, TB.useEffect)((() => {
        var BB, IB;
        null !== (BB = CB.current) && void 0 !== BB && BB.contains(document.activeElement) || (null === (IB = CB.current) || void 0 === IB || IB.focus())
      }), [JB, dB]), (0, TB.useEffect)((() => {
        gB((BB => function(BB, IB, ZB, TB) {
          const JB = new Map;
          for (const oB of IB) {
            const IB = BB.get(oB.baf2IslandId);
            IB && (void 0 !== IB.untilGone || TB < IB.answer) && jc(IB, oB, ZB) && JB.set(oB.baf2IslandId, IB)
          }
          return JB.size === BB.size ? BB : JB
        }(BB, JB.baf2IslandCards, Date.now(), JB.baf2IslandsAnswered)))
      }), [JB]);
      const sB = Qc(oB, JB.baf2IslandsWaitMs, hB),
        wB = JB.baf2IslandsBlocked,
        OB = ac(wB, sB),
        YB = function(BB, IB) {
          const ZB = ac(BB, 0);
          return {
            switch: ZB.switch ? IB : 0,
            change: ZB.change ? IB : 0
          }
        }(wB, sB),
        iB = UB.length >= JB.baf2IslandsMax,
        pB = UB.length > 0,
        aB = function(BB, IB, ZB) {
          return BB + Math.max(0, ZB - IB)
        }(JB.baf2IslandsNowMs, oB, hB),
        HB = null !== (IB = null === (ZB = UB.find((BB => BB.baf2IslandActive))) || void 0 === ZB ? void 0 : ZB.baf2IslandName) && void 0 !== IB ? IB : "",
        MB = function(BB) {
          const IB = BB.filter(ec).length;
          return IB <= 1 && IB < BB.length
        }(UB),
        jB = !0 === JB.baf2IslandsCoop,
        PB = function(BB, IB) {
          const ZB = BB.find((BB => BB.baf2IslandActive)),
            TB = null === ZB || void 0 === ZB ? void 0 : ZB.baf2IslandCoop;
          return ZB && "member" === (null === TB || void 0 === TB ? void 0 : TB.baf2CoopRole) ? {
            key: `${Wc}islandsKeepOwnMember`,
            names: {
              owner: TB.baf2CoopOwner,
              island: ZB.baf2IslandName
            }
          } : {
            key: IB ? `${Wc}islandsKeepOwn` : `${Wc}islandsKeepOwnSolo`
          }
        }(UB, jB),
        [RB, rB] = (0, TB.useState)(null);
      (0, TB.useEffect)((() => {
        void 0 !== JB.baf2IslandsFocusInvite && rB(JB.baf2IslandsFocusInvite)
      }), [JB]);
      const mB = (0, TB.useCallback)((() => {
          rB(null)
        }), []),
        XB = zB ? UB.find((BB => BB.baf2IslandId === zB.id)) : void 0,
        LB = zB && XB && "hidden" !== uc(XB, OB, MB, iB, jB, wB)[zB.mode] ? zB : null;
      return (0, Oo.jsx)(QG.c, {
        close: GB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Oo.jsxs)("section", {
          ref: CB,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: QB ? {
            marginTop: `${QB.marginTop}px`,
            maxHeight: `${QB.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, Oo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Oo.jsxs)("div", {
              children: [(0, Oo.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: nB(`${eh}islandsTitle`)
              }), pB && (0, Oo.jsx)("p", {
                children: nB(`${eh}islandsSubtitle`, {
                  count: String(UB.length),
                  max: String(JB.baf2IslandsMax)
                })
              })]
            }), (0, Oo.jsx)(sG.l, {
              ariaLabel: nB(`${eh}islandsClose`),
              onClick: GB
            })]
          }), (0, Oo.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== wB && (0, Oo.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: mc(nB, Yc(wB, ic(UB)), {
                island: HB
              })
            }), pB && WB.length > 0 && (0, Oo.jsx)(Lh, {
              invites: WB,
              actions: OB,
              full: iB,
              maxIslands: JB.baf2IslandsMax,
              waitSeconds: YB.switch,
              focus: RB,
              focused: mB,
              leave: vB,
              declined: BB => {
                yB((IB => new Set(IB).add(BB)))
              },
              t: nB
            }), pB && (0, Oo.jsxs)(Oo.Fragment, {
              children: [iB && (0, Oo.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: nB(`${eh}islandsFull`, {
                  max: String(JB.baf2IslandsMax)
                })
              }), (0, Oo.jsx)("p", {
                className: "Baf2IslandsNote",
                children: mc(nB, PB.key, PB.names)
              }), (0, Oo.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [UB.map((BB => {
                  const IB = BB.baf2IslandId;
                  return (0, Oo.jsx)(rh, {
                    card: BB,
                    keepOwn: MB,
                    coopOn: jB,
                    openSocial: kB,
                    blocked: wB,
                    maxIslands: JB.baf2IslandsMax,
                    serverNowMs: aB,
                    nowMs: hB,
                    actions: OB,
                    full: iB,
                    waits: YB,
                    answered: JB.baf2IslandsAnswered,
                    mode: (null === LB || void 0 === LB ? void 0 : LB.id) === IB ? LB.mode : null,
                    setMode: BB => {
                      FB(null === BB ? null : {
                        id: IB,
                        mode: BB
                      })
                    },
                    pending: jc(NB.get(IB), BB, hB),
                    onSent: (ZB, TB) => {
                      gB((JB => {
                        const oB = {
                          atMs: Date.now(),
                          from: BB.baf2IslandName,
                          answer: ZB
                        };
                        return new Map(JB).set(IB, TB ? {
                          ...oB,
                          untilGone: TB
                        } : oB)
                      }))
                    },
                    leave: vB,
                    switchTo: () => {
                      cB.send(`baf2islandswitch ${IB}`), vB()
                    },
                    t: nB
                  }, IB)
                })), !iB && (0, Oo.jsx)(uh, {
                  cards: UB,
                  activeName: HB,
                  canStart: OB.change,
                  waitSeconds: YB.change,
                  leave: vB,
                  t: nB
                })]
              })]
            })]
          })]
        })
      })
    }
    var lh = ZB(5177);
    const Ah = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        YT: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      th = Object.keys(Ah),
      bh = new Set([...Object.keys(EI), ...[...PI.Press.recipes, ...PI["Wire Mill"].recipes].map((BB => BB.output))]),
      xh = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      Eh = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      Dh = / Bar$|Alloy$/,
      Kh = /Porkchop|Beef|Mutton|Venison|Steak/,
      Vh = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const Sh = (0, TB.memo)((function(BB) {
      let {
        item: IB,
        name: ZB,
        amount: TB,
        selected: JB,
        small: oB,
        onPick: GB
      } = BB;
      return (0, Oo.jsxs)("button", {
        type: "button",
        className: QJ()("Baf2TermTile", {
          On: JB,
          Small: oB
        }),
        "aria-label": `${ZB}: ${TB}`,
        "aria-pressed": JB,
        onClick: () => {
          GB(IB)
        },
        children: [(0, Oo.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, Oo.jsx)(pJ.e, {
            itemName: IB,
            amount: 0
          })
        }), (0, Oo.jsx)("span", {
          className: "Baf2TermCount",
          children: Uo(TB, 1e4)
        }), !oB && (0, Oo.jsx)("span", {
          className: "Baf2TermName",
          children: ZB
        })]
      })
    }));

    function Bz(BB) {
      let {
        store: IB,
        close: ZB,
        send: JB
      } = BB;
      const {
        t: oB
      } = (0, YJ.G)(), {
        isTouchScreen: GB
      } = (0, WJ.o)(["isTouchScreen"]);
      ! function(BB) {
        const [IB, ZB] = (0, TB.useState)(BB.version);
        (0, TB.useEffect)((() => (ZB(BB.version), BB.subscribe((() => {
          ZB(BB.version)
        })))), [BB])
      }(IB);
      const [vB, kB] = (0, TB.useState)("all"), [cB, nB] = (0, TB.useState)(!1), [hB, zB] = (0, TB.useState)(""), [FB, NB] = (0, TB.useState)(""), [gB, qB] = (0, TB.useState)(null), [yB, UB] = (0, TB.useState)(!1), [WB, dB, CB] = function() {
        const BB = (0, TB.useRef)(null),
          [IB, ZB] = (0, TB.useState)(!1),
          JB = () => {
            const IB = BB.current;
            ZB(null !== IB && IB.scrollLeft + IB.clientWidth < IB.scrollWidth - 1)
          };
        return (0, TB.useEffect)(JB), (0, TB.useEffect)((() => {
          const IB = BB.current;
          if (!IB) return;
          const ZB = new ResizeObserver(JB);
          return ZB.observe(IB), () => {
            ZB.disconnect()
          }
        }), []), [BB, IB, JB]
      }(), QB = (0, TB.useMemo)((() => new Map), [oB]), sB = BB => {
        let IB = QB.get(BB);
        return void 0 === IB && (IB = function(BB, IB) {
          const ZB = /^(.+) \((.+)\)$/.exec(BB);
          return ZB ? IB(ZB[2], ZB[1]) : BB
        }(To(oB, BB), ((BB, IB) => oB("buildAFactory2Game:terminalTileKind", {
          kind: BB,
          base: IB
        }))), QB.set(BB, IB)), IB
      }, wB = IB.isReadOnly(), OB = yB && !wB, YB = IB.recent(), iB = IB.items(), pB = FB.trim().toLowerCase(), aB = OB ? IB.heldItems(gB) : ("recent" === vB ? YB : iB).filter((BB => {
        const IB = sB(BB);
        return ("all" === vB || "recent" === vB || function(BB) {
          return ho(BB) ? "farm" : xh.test(BB) ? "nuclear" : Dh.test(BB) ? "bars" : Kh.test(BB) ? "farm" : Eh.test(BB) ? "YT" : bh.has(BB) ? "parts" : Vh.test(BB) ? "farm" : "other"
        }(BB) === vB) && ("" === pB || IB.toLowerCase().includes(pB)) && ("" === hB || IB.toUpperCase().startsWith(hB))
      })), HB = new Set(iB.map((BB => sB(BB).charAt(0).toUpperCase()))), MB = BB => OB ? IB.heldAmount(BB) : IB.amount(BB), jB = !OB && "recent" !== vB && YB.length > 0, PB = function(BB, IB) {
        return null !== BB && IB.includes(BB) ? BB : null
      }(gB, jB ? [...aB, ...YB] : aB), RB = null === PB ? 0 : IB.amount(PB), rB = null === PB ? 0 : MB(PB), mB = (0, TB.useCallback)((BB => {
        qB((IB => IB === BB ? null : BB))
      }), []), XB = BB => rB > 0 || OB && null === PB && "fill" === BB && aB.length > 0, LB = OB ? [
        ["one", oB("buildAFactory2Game:terminalStoreOne")],
        ["stack", oB("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", oB(null === PB ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", oB("buildAFactory2Game:terminalTakeOne")],
        ["stack", oB("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", oB("buildAFactory2Game:terminalFill")]
      ], eB = OB ? oB("buildAFactory2Game:terminalStoreEmpty") : "" !== hB ? oB("buildAFactory2Game:terminalEmptyLetter", {
        letter: hB
      }) : "" !== pB ? oB("buildAFactory2Game:terminalEmptySearch", {
        query: FB
      }) : oB("buildAFactory2Game:terminalEmpty");
      return (0, Oo.jsx)(QG.c, {
        close: ZB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, Oo.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, Oo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Oo.jsxs)("div", {
              children: [(0, Oo.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: oB(IB.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, Oo.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, Oo.jsx)("span", {
                  className: QJ()({
                    Off: OB
                  }),
                  children: oB("buildAFactory2Game:terminalSubtitle", {
                    count: String(IB.siloCount())
                  })
                }), !wB && (0, Oo.jsx)("span", {
                  className: QJ()({
                    Off: !OB
                  }),
                  children: oB("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !wB && (0, Oo.jsx)(lh.d, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: oB("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: oB("buildAFactory2Game:terminalModeStore")
              }],
              value: OB ? "store" : "take",
              onChange: BB => {
                UB("store" === BB), qB(null)
              },
              ariaLabel: oB("buildAFactory2Game:terminalModes")
            }), (0, Oo.jsx)(sG.l, {
              onClick: ZB
            })]
          }), (0, Oo.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, Oo.jsxs)("div", {
              className: QJ()("Baf2TermTools", {
                Hidden: OB
              }),
              children: [(0, Oo.jsx)("div", {
                ref: WB,
                className: QJ()("Baf2TermChips", {
                  MoreRight: dB
                }),
                onScroll: CB,
                children: cB ? (0, Oo.jsxs)(Oo.Fragment, {
                  children: [(0, Oo.jsx)("button", {
                    type: "button",
                    "aria-label": oB("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      nB(!1), zB("")
                    },
                    children: "\u2190"
                  }), [...HB].sort().map((BB => (0, Oo.jsx)("button", {
                    type: "button",
                    className: QJ()({
                      On: hB === BB
                    }),
                    onClick: () => {
                      zB(hB === BB ? "" : BB)
                    },
                    children: BB
                  }, BB)))]
                }) : (0, Oo.jsxs)(Oo.Fragment, {
                  children: [(0, Oo.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      nB(!0)
                    },
                    children: oB("buildAFactory2Game:terminalLetters")
                  }), th.map((BB => (0, Oo.jsx)("button", {
                    type: "button",
                    className: QJ()({
                      On: vB === BB
                    }),
                    onClick: () => {
                      kB(BB)
                    },
                    children: oB(Ah[BB])
                  }, BB)))]
                })
              }), !GB && (0, Oo.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: FB,
                placeholder: oB("buildAFactory2Game:terminalSearch"),
                "aria-label": oB("buildAFactory2Game:terminalSearch"),
                onChange: BB => {
                  NB(BB.target.value)
                },
                onKeyDown: BB => {
                  BB.stopPropagation()
                }
              }), (0, Oo.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": oB("buildAFactory2Game:terminalResort"),
                title: oB("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  IB.resort()
                },
                children: "\u21c5"
              })]
            }), jB && (0, Oo.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, Oo.jsx)("span", {
                children: oB(Ah.recent)
              }), YB.map((BB => (0, Oo.jsx)(Sh, {
                item: BB,
                name: sB(BB),
                amount: IB.amount(BB),
                selected: PB === BB,
                small: !0,
                onPick: mB
              }, BB)))]
            }), (0, Oo.jsx)("div", {
              className: "Baf2TermTiles",
              children: aB.length > 0 ? aB.map((BB => (0, Oo.jsx)(Sh, {
                item: BB,
                name: sB(BB),
                amount: MB(BB),
                selected: PB === BB,
                onPick: mB
              }, BB))) : (0, Oo.jsx)("p", {
                className: "Baf2TermEmpty",
                children: eB
              })
            }), (0, Oo.jsxs)("div", {
              className: QJ()("Baf2TermActions", {
                Hidden: OB && 0 === aB.length
              }),
              children: [(0, Oo.jsx)("span", {
                className: "Baf2TermPicked",
                children: wB ? (0, Oo.jsxs)(Oo.Fragment, {
                  children: [null !== PB && RB > 0 ? sB(PB) : oB("buildAFactory2Game:terminalVisiting"), (0, Oo.jsx)("small", {
                    children: oB("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== PB ? (0, Oo.jsxs)(Oo.Fragment, {
                  children: [sB(PB), (0, Oo.jsx)("small", {
                    children: oB("buildAFactory2Game:terminalStored", {
                      amount: RB.toLocaleString()
                    })
                  })]
                }) : oB(OB ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !wB && LB.map((BB => {
                let [ZB, TB] = BB;
                const oB = "fill" === ZB ? sG.p : sG.g;
                return (0, Oo.jsx)(oB, {
                  className: "Baf2TermTake",
                  disabled: !XB(ZB),
                  onClick: () => {
                    (BB => {
                      XB(BB) && JB(null === PB ? IB.putAll() : OB ? IB.put(BB, PB) : IB.take(BB, PB))
                    })(ZB)
                  },
                  children: TB
                }, ZB)
              }))]
            })]
          })]
        })
      })
    }

    function Iz(BB) {
      let {
        kind: IB,
        icon: ZB,
        label: TB,
        number: JB,
        preview: oB,
        note: GB,
        tone: vB = null,
        share: kB,
        onExplain: cB
      } = BB;
      return (0, Oo.jsxs)("button", {
        type: "button",
        className: QJ()("NxLane", IB, {
          Warn: "warn" === vB,
          Danger: "danger" === vB
        }),
        onClick: cB,
        children: [(0, Oo.jsxs)("span", {
          className: "NxLaneHead",
          children: [ZB, (0, Oo.jsx)("span", {
            className: "NxLaneLabel",
            children: TB
          })]
        }), (0, Oo.jsxs)("span", {
          className: "NxLaneNum",
          children: [JB, oB && (0, Oo.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", oB]
          })]
        }), (0, Oo.jsx)("span", {
          className: "NxLaneNote",
          children: GB
        }), void 0 !== kB && (0, Oo.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, kB)) + "%"
          }
        })]
      })
    }

    function Zz(BB) {
      let {
        kind: IB,
        step: ZB,
        short: TB,
        planned: JB
      } = BB;
      return (0, Oo.jsx)("i", {
        className: QJ()("NxPipe", IB, `Step${ZB}`, {
          Short: TB,
          Planned: JB
        }),
        "aria-hidden": "true"
      })
    }

    function Tz(BB) {
      let {
        max: IB,
        bands: ZB,
        ticks: TB,
        now: JB,
        settle: oB,
        settleTone: GB,
        onExplain: vB
      } = BB;
      const kB = BB => Math.max(0, Math.min(IB, BB)) / IB * 100 + "%";
      let cB = 0;
      return (0, Oo.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: vB,
        children: [(0, Oo.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [ZB.map((BB => {
            const IB = {
              bottom: kB(cB),
              height: `calc(${kB(BB.upTo)} - ${kB(cB)})`
            };
            return cB = BB.upTo, (0, Oo.jsx)("i", {
              className: QJ()("NxGaugeBand", BB.kind),
              style: IB
            }, BB.kind)
          })), null !== JB && (0, Oo.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: kB(JB)
            }
          }), void 0 !== oB && null !== oB && (0, Oo.jsx)("i", {
            className: QJ()("NxGaugeSettle", {
              Bad: "bad" === GB
            }),
            style: {
              bottom: kB(oB)
            }
          })]
        }), (0, Oo.jsx)("span", {
          className: "NxGaugeTicks",
          children: TB.map((BB => (0, Oo.jsx)("small", {
            style: {
              bottom: kB(BB)
            },
            children: BB
          }, BB)))
        })]
      })
    }

    function Jz(BB) {
      const [IB, ZB] = (0, TB.useState)(null), [JB, oB] = (0, TB.useState)((() => {
        try {
          return null === window.localStorage.getItem(BB)
        } catch {
          return !1
        }
      })), GB = (0, TB.useRef)(null);
      (0, TB.useEffect)((() => () => {
        null !== GB.current && clearTimeout(GB.current)
      }), []);
      const vB = (0, TB.useCallback)((IB => {
          ZB(IB), oB(!1);
          try {
            window.localStorage.setItem(BB, "1")
          } catch {}
          null !== GB.current && clearTimeout(GB.current), GB.current = setTimeout((() => {
            GB.current = null, ZB(null)
          }), 5e3)
        }), [BB]),
        kB = (0, TB.useCallback)(((IB, ZB) => {
          const TB = `${BB}:${IB}`;
          try {
            if (null !== window.localStorage.getItem(TB)) return;
            window.localStorage.setItem(TB, "1")
          } catch {
            return
          }
          vB(ZB)
        }), [vB, BB]);
      return {
        explained: IB,
        hinting: JB,
        explain: vB,
        explainOnce: kB
      }
    }

    function oz(BB) {
      let {
        text: IB,
        tone: ZB,
        explained: TB
      } = BB;
      return (0, Oo.jsxs)("p", {
        className: QJ()("NxStatus", null === TB ? ZB : "Explain"),
        "aria-live": "polite",
        children: [null !== TB && (0, Oo.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== TB && void 0 !== TB ? TB : IB]
      })
    }
    const Gz = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function vz(BB, IB) {
      const ZB = Number(BB[IB]);
      return 1 === ZB || 2 === ZB || 3 === ZB ? ZB : 0
    }

    function kz(BB) {
      return !!wk("reactor", BB.baf2RxNeed) || void 0 !== BB.baf2RxLayout && BB.baf2RxNeed.some((BB => {
        let [IB, ZB] = BB;
        return ZB > 0 && Gz.includes(IB)
      }))
    }
    const cz = "buildAFactory2Game:";

    function nz(BB) {
      let {
        status: IB,
        store: ZB,
        busy: TB
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)();
      return function(BB) {
        return 0 !== (BB.baf2RxFlags & gI) && (!BB.baf2RxFormed || void 0 !== BB.baf2RxLayout)
      }(IB) ? (0, Oo.jsx)(sG.p, {
        disabled: !kz(IB) || TB,
        onClick: () => {
          ZB.tap("fill", (() => {
            ZB.send("fill")
          }))
        },
        children: JB(void 0 !== IB.baf2RxLayout ? `${cz}rxFillLayout` : `${cz}rxFill`)
      }) : null
    }

    function hz(BB) {
      let {
        status: IB,
        store: ZB,
        readOnly: JB,
        bare: oB = !1
      } = BB;
      const {
        t: GB
      } = (0, YJ.G)(), vB = IB.baf2RxLayout, [kB, cB, nB] = IB.baf2RxDims, hB = (0, TB.useMemo)((() => {
        if (void 0 === vB) return 0;
        const BB = Uint8Array.from(vB, ((BB, IB) => vz(vB, IB)));
        return Ik([kB - 2, cB - 2, nB - 2], BB).max
      }), [vB, kB, cB, nB]);
      return void 0 === vB ? null : (0, Oo.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!oB && (0, Oo.jsx)("span", {
          className: "Baf2RxHint",
          children: GB(`${cz}rxLayoutLine`, {
            amount: Mk(hB)
          })
        }), !JB && (0, Oo.jsx)(sG.g, {
          onClick: () => {
            ZB.send("layout", 0)
          },
          children: GB(`${cz}rxLayoutHide`)
        })]
      })
    }
    const zz = "buildAFactory2Game:",
      Fz = {
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

    function Nz(BB) {
      let {
        id: IB,
        title: ZB,
        body: TB,
        bodyParams: JB,
        yes: oB,
        cancel: GB,
        confirm: vB
      } = BB;
      const {
        t: kB
      } = (0, YJ.G)();
      return (0, Oo.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": IB,
        children: [(0, Oo.jsx)("h3", {
          id: IB,
          children: kB(ZB)
        }), (0, Oo.jsx)("p", {
          children: kB(TB, JB)
        }), (0, Oo.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, Oo.jsx)(sG.k, {
            onClick: GB,
            children: kB(`${zz}rxCancel`)
          }), (0, Oo.jsx)(sG.M, {
            onClick: vB,
            children: kB(oB)
          })]
        })]
      })
    }

    function gz(BB) {
      const [IB, ZB] = (0, TB.useState)((() => BB.get()));
      return (0, TB.useEffect)((() => (ZB(BB.get()), BB.subscribe((() => {
        ZB(BB.get())
      })))), [BB]), IB
    }

    function qz(BB) {
      let {
        kind: IB,
        cap: ZB,
        busy: JB = !1,
        whyNot: oB = null,
        apart: GB
      } = BB;
      const {
        t: vB
      } = (0, YJ.G)(), [kB, cB] = (0, TB.useState)(!1), nB = null !== oB, hB = (0, TB.useRef)(null);
      if ((0, TB.useEffect)((() => {
          nB && cB(!1)
        }), [nB]), (0, TB.useLayoutEffect)((() => {
          var BB;
          const IB = null === (BB = hB.current) || void 0 === BB ? void 0 : BB.firstElementChild;
          nB ? null === IB || void 0 === IB || IB.setAttribute("aria-disabled", "true") : JB || null === IB || void 0 === IB || IB.removeAttribute("aria-disabled")
        })), !kB || nB) return (0, Oo.jsx)("span", {
        ref: hB,
        className: "Baf2RxApartWrap",
        children: (0, Oo.jsx)(sG.k, {
          disabled: JB,
          className: QJ()({
            Baf2RxNotYet: nB
          }),
          onClick: () => {
            oB ? oB() : cB(!0)
          },
          children: vB(`${zz}rxApart`)
        })
      });
      const zB = "battery" === IB,
        FB = void 0 === ZB ? `${zz}batApartConfirmBodyPlan` : `${zz}batApartConfirmBody`;
      return (0, Oo.jsx)(Nz, {
        id: `baf2ApartTitle_${IB}`,
        title: zB ? `${zz}batApartConfirmTitle` : `${zz}rxApartConfirmTitle`,
        body: zB ? FB : `${zz}rxApartConfirmBody`,
        bodyParams: void 0 === ZB ? void 0 : {
          cap: ZB
        },
        yes: `${zz}rxApart`,
        cancel: () => {
          cB(!1)
        },
        confirm: () => {
          cB(!1), GB()
        }
      })
    }

    function yz(BB) {
      let {
        mood: IB,
        big: ZB
      } = BB;
      const TB = Fz[IB],
        JB = [];
      return TB.rows.forEach(((BB, IB) => {
        for (let ZB = 0; ZB < BB.length; ZB++) "." !== BB[ZB] && JB.push((0, Oo.jsx)("rect", {
          x: ZB + 1,
          y: IB + 1,
          width: 1,
          height: 1,
          fill: "w" === BB[ZB] ? "#8fd3ff" : TB.colour
        }, `${ZB},${IB}`))
      })), (0, Oo.jsxs)("svg", {
        className: QJ()("Baf2RxFace", {
          Big: ZB,
          Alarm: "alarm" === IB
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, Oo.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, Oo.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), JB]
      })
    }

    function Uz(BB) {
      return yo(BB, "+").replace("+", "")
    }

    function Wz(BB) {
      let {
        kind: IB,
        dims: ZB,
        cap: TB,
        disabled: JB,
        compact: oB,
        resize: GB
      } = BB;
      const {
        t: vB
      } = (0, YJ.G)(), {
        min: kB,
        max: cB
      } = LZ(IB), nB = Math.min(TB, cB), hB = [`${zz}rxWide`, `${zz}rxTall`, `${zz}rxDeep`], zB = {
        w: String(ZB[0]),
        h: String(ZB[1]),
        d: String(ZB[2]),
        blocks: String(Hk(IB, ZB))
      };
      return (0, Oo.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, Oo.jsx)("div", {
          className: "Baf2RxSteppers",
          children: ZB.map(((BB, IB) => {
            const oB = TB => {
                const JB = [ZB[0], ZB[1], ZB[2]];
                JB[IB] = BB + TB, GB(JB)
              },
              zB = BB >= nB;
            return (0, Oo.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, Oo.jsx)("button", {
                type: "button",
                "aria-label": vB(`${zz}rxSmaller`),
                disabled: JB || BB <= kB,
                onClick: () => {
                  oB(-1)
                },
                children: "\u2212"
              }), (0, Oo.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [BB, (0, Oo.jsx)("small", {
                  children: vB(hB[IB])
                })]
              }), (0, Oo.jsx)("button", {
                type: "button",
                "aria-label": vB(`${zz}rxBigger`),
                disabled: JB || zB,
                onClick: () => {
                  oB(1)
                },
                children: zB && TB < cB ? "\ud83d\udd12" : "+"
              })]
            }, hB[IB])
          }))
        }), !oB && (0, Oo.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === IB ? vB(`${zz}rxSizeLine`, {
            ...zB,
            water: String(ak(ZB))
          }) : vB(`${zz}batSizeLine`, zB)
        })]
      })
    }

    function dz(BB) {
      let {
        on: IB,
        label: ZB,
        disabled: TB,
        locked: JB,
        pending: oB,
        toggle: GB
      } = BB;
      return (0, Oo.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": IB,
        disabled: TB,
        "aria-disabled": JB || void 0,
        className: QJ()("Baf2RxSwitch", {
          On: IB,
          Locked: JB,
          Pending: oB
        }),
        onClick: GB,
        children: [(0, Oo.jsx)("span", {
          className: "Baf2RxKnob"
        }), ZB]
      })
    }
    const Cz = "buildAFactory2Game:",
      Qz = .95;

    function sz(BB, IB) {
      return 0 !== (BB.baf2RxFlags & IB)
    }

    function wz(BB) {
      return "cryo" === BB ? VB.n : VB.q
    }

    function Oz(BB) {
      var IB, ZB, TB, JB, oB, GB, vB, kB, cB;
      return BB.baf2RxCryo ? {
        gF: "cryo",
        usePerS: null !== (JB = BB.baf2RxCryoUse) && void 0 !== JB ? JB : 0,
        needPerS: null !== (oB = BB.baf2RxCryoNeed) && void 0 !== oB ? oB : 0,
        inPerS: null !== (GB = BB.baf2RxCryoIn) && void 0 !== GB ? GB : 0,
        stored: null !== (vB = BB.baf2RxCryoStored) && void 0 !== vB ? vB : 0,
        makersShort: null !== (kB = BB.baf2RxMixersShort) && void 0 !== kB ? kB : 0,
        waterBeside: null !== (cB = BB.baf2RxWaterUse) && void 0 !== cB ? cB : 0,
        pct: BB.baf2RxWater
      } : {
        gF: "water",
        usePerS: null !== (IB = BB.baf2RxWaterUse) && void 0 !== IB ? IB : 0,
        needPerS: null !== (ZB = BB.baf2RxWaterNeed) && void 0 !== ZB ? ZB : 0,
        inPerS: BB.baf2RxWaterIn,
        stored: BB.baf2RxWaterStored,
        makersShort: null !== (TB = BB.baf2RxCondensersShort) && void 0 !== TB ? TB : 0,
        waterBeside: 0,
        pct: BB.baf2RxWater
      }
    }

    function Yz(BB) {
      const IB = "running" === BB.baf2RxState || "idle" === BB.baf2RxState;
      return BB.baf2RxFormed && BB.baf2RxTarget !== BB.baf2RxThrottle && IB ? iz(BB, BB.baf2RxTarget) : null
    }

    function iz(BB, IB) {
      const [ZB, TB, JB, , , , oB, , GB] = BB.baf2RxStats, vB = sz(BB, FI), kB = Oz(BB), cB = kB.pct / 100, {
        gen: nB,
        out: hB,
        load: zB
      } = function(BB, IB, ZB, TB) {
        const JB = ZB ? xv : 1,
          oB = Math.min(BB.fuelHeat * JB * Math.max(0, Math.min(1, IB)), BB.size * JB);
        return {
          gen: oB,
          out: oB,
          load: Fk(oB, BB.cooling, TB)
        }
      }({
        fuelHeat: ZB,
        cooling: TB,
        size: JB
      }, IB / 100, vB, cB), FB = gk(oB || Bk(...BB.baf2RxDims)), NB = BB.baf2RxHeat, gB = Math.abs(zB - NB), qB = function(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : VB.q;
        const oB = ZB ? xv : 1,
          GB = Math.min(BB.fuelHeat * oB * IB / 100, BB.size * oB),
          vB = GB,
          kB = BB.fuelHeat * oB,
          cB = BB.cooling * zk(TB.pct / 100),
          nB = kB > 0 && cB < BB.size * oB ? Math.floor(100 * cB / kB) : 100,
          hB = GB * JB - TB.inPerS;
        return {
          out: vB,
          hotAbove: nB >= 100 ? null : Math.max(0, nB),
          waterSecs: TB.pct >= 100 && hB > 1e-6 ? Math.max(0, TB.stored) / hB : null
        }
      }({
        fuelHeat: ZB,
        cooling: TB,
        size: JB
      }, IB, vB, {
        pct: kB.pct,
        inPerS: kB.inPerS,
        stored: kB.stored
      }, wz(kB.gF));
      return {
        pct: IB,
        out: hB,
        coolPerS: nB * wz(kB.gF),
        pelletsPerMin: GB > 0 ? hB / GB * 60 : 0,
        settle: zB,
        settleS: gB > 2 ? FB * Math.log(gB / 2) : 0,
        overheatS: zB > 100 && NB < 100 ? FB * Math.log((zB - NB) / (zB - 100)) : null,
        hotAbove: qB.hotAbove,
        coolantSecs: qB.waterSecs
      }
    }

    function pz(BB) {
      return BB.baf2RxThrottle <= 0 && "running" !== BB.baf2RxState ? 0 : iz(BB, BB.baf2RxTarget).pelletsPerMin / 60
    }

    function az(BB, IB) {
      if (BB <= 0 || IB <= 0) return 0;
      const ZB = BB / IB;
      return ZB < .25 ? 1 : ZB < .5 ? 2 : ZB < .8 ? 3 : 4
    }

    function Hz(BB, IB) {
      const ZB = {};
      for (const [TB, JB] of Object.entries(IB.params)) ZB[TB] = "time" === TB ? Co(BB, JB) : "amount" === TB ? Mk(JB) : String(Math.round(JB));
      return BB(IB.key, ZB)
    }

    function Mz(BB, IB) {
      return {
        key: `${Cz}${BB}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: IB
      }
    }

    function jz(BB) {
      var IB;
      const ZB = sz(BB, FI),
        TB = "running" === BB.baf2RxState,
        JB = Wk(BB),
        oB = BB.baf2RxHeat;
      var GB;
      if (TB && oB > tv) return {
        key: null !== (GB = JB.fix) && void 0 !== GB ? GB : `${Cz}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const vB = TB ? iz(BB, BB.baf2RxTarget).coolantSecs : null,
        kB = "cryo" === Oz(BB).gF;
      if (null !== vB && vB >= 1 && vB <= 30) return Mz(kB ? "rxWarnCryo" : "rxWarnWater", "bad");
      const cB = Vv(Bk(...BB.baf2RxDims)).waste,
        nB = TB ? Ok(BB, cB, pz(BB)).fullInS : null;
      if (null !== nB && nB <= 120 && BB.baf2RxWaste >= .5 * cB) return Mz("rxWarnWaste", "warn");
      if (null !== vB && vB >= 1) return Mz(kB ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: vB
      });
      const hB = "noWater" === BB.baf2RxState && oB > tv;
      if (BB.baf2RxDamage >= 1 && !hB) return Mz("rxDamagedHeals", "warn", {
        pct: BB.baf2RxDamage
      });
      if (BB.baf2RxCryoCut) return Mz("rxFix_cryoCut", "warn");
      const zB = Oz(BB);
      if ("noWater" === BB.baf2RxState && "cryo" === zB.gF) return Mz("noWater" === BB.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const FB = JB.fix === `${Cz}rxFix_scramCool` || "idle" === BB.baf2RxState && BB.baf2RxTarget <= 0;
      if (FB && BB.baf2RxFuel <= 0) return Mz("rxFix_noFuel", "warn");
      if (FB && BB.baf2RxWaterIn <= 0 && (null !== (IB = BB.baf2RxCryoIn) && void 0 !== IB ? IB : 0) <= 0) return Mz("rxFix_noWater", "warn");
      const NB = JB.fix === `${Cz}rxFix_scramCool` ? Ck(BB) : null;
      if (null !== NB) return {
        key: NB.key,
        params: {
          amount: NB.amount
        },
        tone: "info"
      };
      if ("running" !== BB.baf2RxState && "idle" !== BB.baf2RxState && null !== JB.fix) return {
        key: JB.fix,
        params: {},
        tone: "scram" === BB.baf2RxState ? "info" : hB ? "bad" : "warn"
      };
      var gB;
      if ("idle" === BB.baf2RxState && BB.baf2RxTarget <= 0) return {
        key: null !== (gB = JB.fix) && void 0 !== gB ? gB : `${Cz}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const qB = BB.baf2RxCryoStarved;
      if ("cryo" === zB.gF && qB && zB.needPerS > 0 && zB.usePerS < Qz * zB.needPerS) return Mz("noWater" === qB ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const yB = "cryo" === zB.gF,
        UB = zB.needPerS > 0 && zB.usePerS < Qz * zB.needPerS;
      if (yB ? UB || zB.makersShort > 0 && zB.pct < 100 : zB.pct < 100) {
        const IB = yB && UB ? Math.floor(100 * zB.usePerS / zB.needPerS) : Math.min(100, zB.pct);
        if (zB.makersShort > 0) {
          return Mz(`${yB?"rxCryoShortLine":"rxWaterShortLine"}${1===zB.makersShort?"One":""}${!yB&&BB.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: IB,
            count: zB.makersShort
          })
        }
        return Mz(yB ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: IB
        })
      }
      const WB = function(BB) {
        const [IB, ZB, TB] = BB.baf2RxStats, JB = Oz(BB), oB = Nk({
          fuelHeat: IB,
          cooling: ZB,
          size: TB
        }, "cryo" === JB.gF ? VB.f : 1, !0);
        return Math.max(0, oB * wz(JB.gF) - JB.inPerS)
      }(BB);
      if (ZB && WB > 0) return Mz("cryo" === zB.gF ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(WB)
      });
      if (oB >= nk) return Mz("rxHotLine", "warn");
      const dB = iz(BB, BB.baf2RxTarget);
      var CB;
      if (null !== dB.overheatS) return Mz("rxWillOverheat", "bad", {
        pct: BB.baf2RxTarget,
        time: dB.overheatS,
        safe: null !== (CB = dB.hotAbove) && void 0 !== CB ? CB : 100
      });
      if (Math.abs(dB.settle - oB) >= 3) return Mz("rxSettling", "info", {
        pct: BB.baf2RxTarget,
        heat: Math.round(dB.settle),
        time: dB.settleS
      });
      const QB = Ck(BB);
      if (null !== QB) return {
        key: QB.key,
        params: {
          amount: QB.amount
        },
        tone: "info"
      };
      const sB = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== IB && ("running" !== IB || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === BB.rods ? `${qk}rxLimitNoRods` : `${qk}rxLimit_${ck(BB)}`
      }({
        rods: BB.baf2RxStats[3],
        ...dk(BB)
      }, BB.baf2RxState, BB.baf2RxOut >= Qz * BB.baf2RxMaxNow, !1);
      if (sB === `${Cz}rxLimit_size`) {
        const [IB, , ZB, TB] = BB.baf2RxStats, JB = TB > 0 && IB > 0 ? Math.ceil(ZB / (IB / TB) - 1e-9) : TB, oB = BB.baf2RxDims.every((BB => BB >= LZ("reactor").max));
        if (JB < TB) return Mz(oB ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: JB,
          have: TB
        });
        if (oB) return Mz("rxLimit_sizeMax", "info")
      }
      return null !== sB ? {
        key: sB,
        params: {},
        tone: "info"
      } : Mz("rxSteady", "ok", {
        pct: BB.baf2RxTarget
      })
    }

    function Pz(BB) {
      var IB;
      if (BB.melted) return Mz("rxMeltedBody", "bad");
      if (-1 === BB.bad) return Mz("rxFix_noRoom", "warn");
      if (BB.bad > 0) return Mz(1 === BB.bad ? "rxBadOne" : "rxBad", "warn", {
        count: BB.bad
      });
      if (BB.left > 0) {
        const IB = 1 === BB.left ? "One" : "";
        return Mz(BB.canFill ? `rxPlanLeft${IB}` : `rxPlanLeftNoFill${IB}`, "info", {
          count: BB.left
        })
      }
      if (0 === BB.rods) return Mz("rxLimitNoRods", "warn");
      const ZB = null !== (IB = BB.idle) && void 0 !== IB ? IB : 0;
      return ZB > 0 ? Mz(1 === ZB ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: ZB
      }) : Mz("rxPlanReady", "ok")
    }

    function Rz(BB) {
      return Math.floor(Math.max(0, BB[1] - 1) / 2)
    }

    function rz(BB) {
      if (BB >= Tk && BB < Jk) {
        const IB = BB - Tk;
        return {
          key: 0 === IB ? `${Cz}rxWhy_rodAlone` : 1 === IB ? `${Cz}rxWhy_rodOne` : `${Cz}rxWhy_rod`,
          params: {
            count: String(IB),
            heat: String(mv * (1 + Xv * IB))
          }
        }
      }
      return BB === Jk ? {
        key: `${Cz}rxWhy_channel`,
        params: {
          amount: String(ev)
        }
      } : BB === Gk ? {
        key: `${Cz}rxWhy_deadChannel`,
        params: {}
      } : BB === vk ? {
        key: `${Cz}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Cz}rxWhy_core`,
        params: {}
      }
    }
    const mz = "buildAFactory2Game:";

    function Xz(BB, IB) {
      return 0 !== (BB.baf2RxFlags & IB)
    }

    function Lz(BB) {
      let {
        status: IB,
        pending: ZB,
        store: TB,
        explain: JB
      } = BB;
      const {
        t: oB
      } = (0, YJ.G)(), GB = Xz(IB, zI), vB = IB.baf2RxTarget, kB = IB.baf2RxThrottle, cB = function(BB) {
        return {
          press: () => {
            BB.throttlePress()
          },
          drag: IB => {
            BB.throttleDrag(IB)
          },
          release: () => {
            BB.throttleRelease()
          }
        }
      }(TB), nB = null === (hB = iz(IB, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, hB - 10),
        red: hB
      };
      var hB;
      return (0, Oo.jsxs)("div", {
        className: QJ()("Baf2RxThrottle", {
          Off: GB
        }),
        onClick: () => {
          GB && JB(`${mz}rxWhy_startFirst`)
        },
        children: [(0, Oo.jsx)("span", {
          className: "HideNarrow",
          children: oB(`${mz}rxThrottle`)
        }), (0, Oo.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, Oo.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: vB,
            disabled: GB,
            style: GB ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": oB(`${mz}rxThrottle`),
            onPointerDown: () => {
              cB.press();
              const BB = () => {
                window.removeEventListener("pointerup", BB), window.removeEventListener("pointercancel", BB), cB.release()
              };
              window.addEventListener("pointerup", BB), window.addEventListener("pointercancel", BB)
            },
            onKeyUp: cB.release,
            onChange: BB => {
              cB.drag(Number(BB.target.value))
            }
          }), (0, Oo.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${nB.amber}%, #ffb020 ${nB.amber}% ${nB.red}%, #ff3b30 ${nB.red}%)`
            },
            "aria-hidden": "true"
          }), (0, Oo.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${kB}% + ${8*(1-kB/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, Oo.jsxs)("b", {
          children: [`${vB}%`, (0, Oo.jsx)("i", {
            className: QJ()("Baf2RxPendingDot", {
              On: ZB
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function ez(BB) {
      let {
        status: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)(), TB = iz(IB, IB.baf2RxTarget), JB = Oz(IB).gF, oB = ZB("cryo" === JB ? `${mz}rxRateCryo` : `${mz}rxRateWater`, {
        rate: Uz(TB.coolPerS)
      }), GB = ZB(`${mz}rxChain`, {
        pct: String(IB.baf2RxTarget),
        out: Mk(TB.out),
        heat: String(Math.round(TB.settle)),
        coolant: oB
      }), vB = null !== TB.coolantSecs ? TB.coolantSecs >= 1 ? ZB("cryo" === JB ? `${mz}rxThrottleCryoOut` : `${mz}rxThrottleWaterOut`, {
        time: Co(ZB, TB.coolantSecs)
      }) : ZB("cryo" === JB ? `${mz}rxThrottleCryoDry` : `${mz}rxThrottleWaterDry`) : null;
      return (0, Oo.jsxs)("p", {
        className: "Baf2RxChain",
        children: [GB, null !== vB ? (0, Oo.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", vB]
        }) : (0, Oo.jsxs)("span", {
          children: [" \xb7 ", ZB(`${mz}rxChainPellets`, {
            amount: jk(TB.pelletsPerMin)
          })]
        })]
      })
    }

    function uz(BB) {
      let {
        view: IB,
        store: ZB,
        explain: JB,
        explainOnce: oB
      } = BB;
      const {
        t: GB
      } = (0, YJ.G)(), {
        status: vB
      } = IB, [kB, cB] = (0, TB.useState)(!1), nB = Xz(vB, zI), zB = Xz(vB, FI), FB = !Xz(vB, qI), NB = vB.baf2RxHeat > 100;
      return (0, Oo.jsxs)(Oo.Fragment, {
        children: [(0, Oo.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, Oo.jsx)(Lz, {
            status: vB,
            pending: IB.throttlePending,
            store: ZB,
            explain: JB
          }), (0, Oo.jsx)(dz, {
            on: zB,
            label: zB ? GB(`${mz}rxOdLeft`, {
              time: Co(GB, vB.baf2RxOdLeft)
            }) : GB(`${mz}rxOverdrive`),
            locked: FB,
            pending: 0 !== (IB.pendingFlags & FI),
            toggle: () => {
              FB ? JB(`${mz}rxOverdriveTier`, {
                amount: String(hB(13))
              }) : zB ? ZB.setFlag(FI, !1) : IB.odConfirmed ? ZB.setFlag(FI, !0) : cB(!0)
            }
          }), nB || IB.startGuard ? (0, Oo.jsx)(sG.s, {
            disabled: IB.busy.has("start") || IB.startGuard,
            onClick: () => {
              ZB.tap("start", (() => {
                ZB.setFlag(zI, !1)
              }))
            },
            children: GB(IB.startGuard ? `${mz}rxStarting` : `${mz}rxStart`)
          }) : (0, Oo.jsx)("span", {
            className: QJ()("Baf2RxScram", {
              Pulse: NB
            }),
            children: (0, Oo.jsx)(sG.M, {
              onClick: () => {
                ZB.shutDown()
              },
              children: GB(`${mz}rxScram`)
            })
          })]
        }), (0, Oo.jsx)(ez, {
          status: vB
        }), kB && (0, Oo.jsx)(Nz, {
          id: "baf2RxOdTitle",
          title: `${mz}rxOdConfirmTitle`,
          body: `${mz}rxOdConfirmBody`,
          yes: `${mz}rxOdConfirm`,
          cancel: () => {
            cB(!1)
          },
          confirm: () => {
            cB(!1), ZB.tap("odConfirm", (() => {
              ZB.confirmOverdrive(), ZB.setFlag(FI, !0)
            })), oB(`${mz}rxWhy_overdrive`)
          }
        })]
      })
    }

    function fz(BB) {
      let {
        view: IB,
        store: ZB,
        keepSize: TB
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)(), {
        status: oB
      } = IB;
      return (0, Oo.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, Oo.jsx)(Wz, {
          kind: "reactor",
          dims: IB.dims,
          cap: oB.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: BB => {
            ZB.resize(BB)
          }
        }), TB ? (0, Oo.jsx)(sG.k, {
          onClick: TB,
          children: JB(`${mz}rxKeepSize`)
        }) : (0, Oo.jsxs)(Oo.Fragment, {
          children: [(0, Oo.jsx)(dz, {
            on: IB.guide,
            label: JB(`${mz}rxGuide`),
            toggle: () => {
              ZB.toggleGuide()
            }
          }), Xz(oB, UI) && (0, Oo.jsx)(dz, {
            on: IB.starter,
            label: JB(`${mz}rxStarter`),
            toggle: () => {
              ZB.toggleStarter()
            }
          }), (0, Oo.jsx)(nz, {
            status: oB,
            store: ZB,
            busy: IB.busy.has("fill")
          })]
        })]
      })
    }

    function lz(BB) {
      let {
        need: IB,
        kind: ZB = "reactor",
        explain: TB
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)(), oB = IB.length <= 3, GB = IB.reduce(((BB, IB) => {
        let [, ZB] = IB;
        return BB + ZB
      }), 0);
      return (0, Oo.jsxs)("div", {
        className: QJ()("Baf2RxParts", {
          Compact: !oB
        }),
        onClick: () => {
          TB("battery" === ZB ? `${mz}batWhy_store` : `${mz}rxShellHint`)
        },
        children: [GB > 0 && (0, Oo.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === GB ? JB(`${mz}rxBlocksOne`) : JB(`${mz}rxBlocks`, {
            blocks: String(GB)
          })
        }), 0 === IB.length ? (0, Oo.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: JB("battery" === ZB ? `${mz}batPartsDone` : `${mz}rxShellDone`)
        }) : sk(IB).map((BB => {
          let [IB, ZB, TB] = BB;
          const GB = function(BB) {
            const IB = pk[BB];
            if (void 0 === IB) return null;
            const [ZB, TB, JB] = Yk[IB].colour.map((BB => Math.round(255 * BB)));
            return `rgb(${ZB}, ${TB}, ${JB})`
          }(IB);
          return (0, Oo.jsxs)("span", {
            className: "Baf2RxChip",
            title: To(JB, IB),
            children: [(0, Oo.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === GB ? {
                visibility: "hidden"
              } : {
                background: GB
              },
              title: JB(`${mz}rxShopGhost`)
            }), (0, Oo.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, Oo.jsx)(pJ.e, {
                itemName: IB,
                amount: 0
              })
            }), (0, Oo.jsx)("span", {
              className: "Baf2RxChipName",
              children: oB ? `${ZB} ${vB=To(JB,IB),vB.replace(/^(Reactor|Battery) (?=\S)/,"")}` : ZB
            }), TB >= ZB ? (0, Oo.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, Oo.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: oB ? JB(`${mz}rxShopShort`, {
                count: String(ZB - TB)
              }) : "\u2212" + (ZB - TB)
            })]
          }, IB);
          var vB
        }))]
      })
    }
    const Az = "buildAFactory2Game:";

    function tz(BB) {
      var IB, ZB, JB, oB, GB, vB, kB;
      let {
        store: cB,
        close: nB
      } = BB;
      const {
        t: hB
      } = (0, YJ.G)(), zB = fG(), FB = gz(cB), {
        explained: NB,
        explain: gB
      } = Jz("baf2RxExplained"), qB = (0, TB.useCallback)(((BB, IB) => {
        gB(hB(BB, IB))
      }), [gB, hB]), yB = null === FB || void 0 === FB ? void 0 : FB.status, UB = !0 === (null === yB || void 0 === yB ? void 0 : yB.baf2BatReadOnly), WB = BB => {
        yB && zB.send(hI(yB.baf2BatAt, BB))
      }, [dB, CB, QB] = null !== (IB = null === FB || void 0 === FB ? void 0 : FB.dims) && void 0 !== IB ? IB : [0, 0, 0], sB = Mk(null !== (ZB = null === FB || void 0 === FB ? void 0 : FB.ah) && void 0 !== ZB ? ZB : 0), wB = !0 === (null === yB || void 0 === yB ? void 0 : yB.baf2BatFormed), OB = null !== (JB = null === yB || void 0 === yB ? void 0 : yB.baf2BatStored) && void 0 !== JB ? JB : 0, YB = Math.max(1, null !== (oB = null === yB || void 0 === yB ? void 0 : yB.baf2BatIslandCap) && void 0 !== oB ? oB : 1), iB = Math.min(100, 100 * OB / YB), pB = null === yB || void 0 === yB ? void 0 : yB.baf2BatNetPerS, aB = function(BB, IB, ZB) {
        return ZB > 0 && IB >= ZB ? "full" : void 0 !== BB && BB >= .05 ? "charging" : void 0 !== BB && BB <= -.05 && IB > 0 ? "draining" : "steady"
      }(pB, OB, null !== (GB = null === yB || void 0 === yB ? void 0 : yB.baf2BatIslandCap) && void 0 !== GB ? GB : 0), HB = null !== (vB = null === yB || void 0 === yB ? void 0 : yB.baf2BatMadePerS) && void 0 !== vB ? vB : 0, MB = null !== (kB = null === yB || void 0 === yB ? void 0 : yB.baf2BatUsedPerS) && void 0 !== kB ? kB : 0;
      let jB, PB = {},
        RB = "info";
      if (yB)
        if (wB) "charging" === aB ? (jB = `${Az}batLine_charging`, PB = {
          time: Co(hB, (YB - OB) / Math.max(.05, null !== pB && void 0 !== pB ? pB : 0))
        }, RB = "ok") : "draining" === aB ? (jB = `${Az}batLine_draining`, PB = {
          time: Co(hB, OB / Math.max(.05, -(null !== pB && void 0 !== pB ? pB : 0)))
        }, RB = "warn") : jB = "full" === aB ? `${Az}batLine_full` : OB <= 0 && MB > 0 ? `${Az}batLine_empty` : `${Az}batLine_steady`;
        else {
          var rB;
          const BB = Pz({
            left: yB.baf2BatNeed.reduce(((BB, IB) => {
              let [, ZB] = IB;
              return BB + ZB
            }), 0),
            bad: yB.baf2BatBad,
            rods: 1,
            canFill: !0 === yB.baf2BatCanFill,
            melted: !1
          });
          jB = BB.key, PB = {
            count: String(null !== (rB = BB.params.count) && void 0 !== rB ? rB : 0)
          }, RB = BB.tone
        }
      else jB = `${Az}batLine_steady`;
      const mB = Math.max(HB, MB, 1);
      return (0, Oo.jsx)(QG.c, {
        close: nB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Oo.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, Oo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Oo.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Oo.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Oo.jsx)(pJ.e, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, Oo.jsxs)("div", {
                children: [(0, Oo.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: hB(`${Az}batTitle`)
                }), yB && (0, Oo.jsxs)("p", {
                  className: QJ()("Baf2RxSubtitle", {
                    good: wB && "charging" === aB,
                    warn: wB && "draining" === aB
                  }),
                  children: [dB, "\xd7", CB, "\xd7", QB, " \xb7 ", hB(wB ? `${Az}batState_${aB}` : `${Az}rxSubPlanShort`)]
                })]
              })]
            }), (0, Oo.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [yB && !UB && (0, Oo.jsx)(qz, {
                kind: "battery",
                cap: wB ? sB : void 0,
                busy: null === FB || void 0 === FB ? void 0 : FB.busy.has("apart"),
                apart: () => {
                  cB.tap("apart", (() => {
                    WB("apart")
                  }))
                }
              }), (0, Oo.jsx)(sG.l, {
                onClick: nB
              })]
            })]
          }), FB && yB && (0, Oo.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, Oo.jsxs)("div", {
              className: QJ()("Baf2RxFlow Baf2BatFlow", {
                Plan: !wB
              }),
              children: [(0, Oo.jsx)(Iz, {
                kind: "Power",
                label: hB(`${Az}batMade`),
                number: wB ? `\u26a1 ${Mk(HB)}/s` : "\u2014",
                note: hB(`${Az}batMadeNote`),
                share: wB ? HB / mB : void 0,
                onExplain: () => {
                  qB(`${Az}batWhy_made`)
                }
              }), (0, Oo.jsx)(Zz, {
                kind: "Power",
                step: wB ? az(HB, mB) : 0,
                planned: !wB
              }), (0, Oo.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  qB(`${Az}batWhy_store`)
                },
                children: [(0, Oo.jsx)(Tz, {
                  max: 100,
                  bands: [{
                    upTo: wB ? iB : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, Oo.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, Oo.jsx)("b", {
                    className: "Baf2BatStored",
                    children: wB ? hB(`${Az}batStoredOf`, {
                      amount: Mk(OB),
                      cap: Mk(yB.baf2BatIslandCap)
                    }) : hB(`${Az}batWillHold`, {
                      cap: sB
                    })
                  }), (0, Oo.jsx)("span", {
                    children: hB(`${Az}batAdds`, {
                      cap: sB
                    })
                  }), wB && (0, Oo.jsx)("small", {
                    children: hB(`${Az}batBreakNote`, {
                      cap: sB
                    })
                  })]
                })]
              }), (0, Oo.jsx)(Zz, {
                kind: "Power",
                step: wB ? az(MB, mB) : 0,
                planned: !wB
              }), (0, Oo.jsx)(Iz, {
                kind: "Power",
                label: hB(`${Az}batUsed`),
                number: wB ? `\u26a1 ${Mk(MB)}/s` : "\u2014",
                note: hB(`${Az}batUsedNote`),
                share: wB ? MB / mB : void 0,
                onExplain: () => {
                  qB(`${Az}batWhy_used`)
                }
              })]
            }), (0, Oo.jsx)(oz, {
              text: hB(jB, PB),
              tone: RB,
              explained: NB
            }), UB ? (0, Oo.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: hB(`${Az}rxNotYours`)
            }) : !wB && (0, Oo.jsxs)(Oo.Fragment, {
              children: [(0, Oo.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, Oo.jsx)(Wz, {
                  kind: "battery",
                  dims: FB.dims,
                  cap: yB.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: BB => {
                    cB.resize(BB)
                  }
                }), (0, Oo.jsx)(dz, {
                  on: FB.guide,
                  label: hB(`${Az}rxGuide`),
                  toggle: () => {
                    cB.toggleGuide()
                  }
                }), yB.baf2BatCanFill && (0, Oo.jsx)(sG.p, {
                  disabled: !wk("battery", yB.baf2BatNeed) || FB.busy.has("fill"),
                  onClick: () => {
                    cB.tap("fill", (() => {
                      WB("fill")
                    }))
                  },
                  children: hB(`${Az}rxFill`)
                })]
              }), (0, Oo.jsx)(lz, {
                need: yB.baf2BatNeed,
                kind: "battery",
                explain: qB
              })]
            })]
          })]
        })
      })
    }
    const bz = "buildAFactory2Game:",
      xz = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function Ez(BB, IB) {
      return BB === Zk ? null : IB ? "#4a4440" : BB < Jk ? xz[BB - Tk] : BB === Jk ? "#3fd0f0" : BB === Gk ? "#2c3e4c" : "#55585e"
    }

    function Dz(BB) {
      let {
        inner: IB,
        looks: ZB,
        layer: TB,
        setLayer: JB,
        glow: oB,
        melted: GB,
        explain: vB
      } = BB;
      const {
        t: kB
      } = (0, YJ.G)(), [cB, nB, hB] = IB, zB = Math.max(0, Math.min(nB - 1, TB)), FB = [];
      for (let gB = 0; gB < hB; gB++)
        for (let BB = 0; BB < cB; BB++) {
          var NB;
          const IB = null !== (NB = ZB[(zB * hB + gB) * cB + BB]) && void 0 !== NB ? NB : Zk,
            TB = Ez(IB, GB),
            JB = IB >= Tk && IB < Jk;
          FB.push(null === TB ? (0, Oo.jsx)("circle", {
            cx: BB + .5,
            cy: gB + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${BB},${gB}`) : (0, Oo.jsx)("rect", {
            x: BB + .06,
            y: gB + .06,
            width: .88,
            height: .88,
            fill: TB,
            opacity: JB && !GB ? .5 + .5 * oB : 1,
            onClick: BB => {
              BB.stopPropagation();
              const ZB = rz(IB);
              vB(ZB.key, ZB.params)
            }
          }, `${BB},${gB}`))
        }
      return (0, Oo.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, Oo.jsx)("svg", {
          className: QJ()("Baf2RxMapGrid", {
            Melted: GB
          }),
          viewBox: `0 0 ${Math.max(1,cB)} ${Math.max(1,hB)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": kB(`${bz}rxWhy_core`),
          onClick: () => {
            vB(`${bz}rxWhy_core`, {})
          },
          children: FB
        }), nB > 1 && (0, Oo.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, Oo.jsx)("button", {
            type: "button",
            "aria-label": kB(`${bz}rxLayerDown`),
            disabled: zB <= 0,
            onClick: () => {
              JB(zB - 1)
            },
            children: "\u25bc"
          }), (0, Oo.jsxs)("span", {
            children: [(0, Oo.jsx)("span", {
              className: "HideNarrow",
              children: kB(`${bz}rxLayer`, {
                n: String(zB + 1),
                of: String(nB)
              })
            }), (0, Oo.jsx)("span", {
              className: "ShowNarrow",
              children: kB(`${bz}rxLayerShort`, {
                n: String(zB + 1),
                of: String(nB)
              })
            })]
          }), (0, Oo.jsx)("button", {
            type: "button",
            "aria-label": kB(`${bz}rxLayerUp`),
            disabled: zB >= nB - 1,
            onClick: () => {
              JB(zB + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Kz = "buildAFactory2Game:",
      Vz = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: bv,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Uk,
        kind: "red"
      }],
      Sz = [50, bv, 100];

    function BF(BB) {
      let {
        stats: IB,
        t: ZB,
        explain: TB
      } = BB;
      const JB = ck(IB),
        oB = Math.max(1, IB.fuelHeat, IB.cooling, IB.size),
        GB = [
          ["fuel", `${Kz}rxBarRods`, IB.fuelHeat],
          ["cooling", `${Kz}rxBarCooling`, IB.cooling],
          ["size", `${Kz}rxBarSize`, IB.size]
        ];
      return (0, Oo.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          TB(`${Kz}rxWhy_bars`)
        },
        children: [(0, Oo.jsx)("span", {
          className: "Baf2RxMostLine",
          children: ZB(`${Kz}rxMost`, {
            amount: Mk(Math.min(IB.fuelHeat, IB.cooling, IB.size))
          })
        }), (0, Oo.jsx)("span", {
          className: "Baf2RxMostBars",
          children: GB.map((BB => {
            let [IB, TB, GB] = BB;
            return (0, Oo.jsxs)("span", {
              className: QJ()("Baf2RxMostBar", IB, {
                Low: IB === JB
              }),
              children: [(0, Oo.jsx)("small", {
                children: ZB(TB)
              }), (0, Oo.jsx)("i", {
                children: (0, Oo.jsx)("b", {
                  style: {
                    width: 100 * GB / oB + "%"
                  }
                })
              })]
            }, IB)
          }))
        })]
      })
    }

    function IF(BB) {
      var IB;
      let {
        view: ZB,
        heat: JB,
        settle: oB,
        settleLine: GB,
        settleBad: vB,
        explain: kB
      } = BB;
      const {
        t: cB
      } = (0, YJ.G)(), {
        status: nB
      } = ZB, hB = nB.baf2RxAt.join(","), [zB, FB] = (0, TB.useState)((() => Rz(ZB.inner)));
      (0, TB.useEffect)((() => {
        FB(Rz(ZB.inner))
      }), [hB, ZB.inner[1]]);
      const NB = null !== (IB = ZB.plan) && void 0 !== IB ? IB : dk(nB),
        gB = ZB.plan ? ZB.plan.powerPerUnit : nB.baf2RxStats[8],
        qB = null === JB ? null : "alarm" === (yB = yk(nB)) ? "red" : "hot" === yB ? "hot" : "warm" === yB ? "warm" : "cold";
      var yB;
      const UB = !nB.baf2RxFormed && function(BB, IB) {
          return 0 !== (BB.baf2RxFlags & IB)
        }(nB, NI),
        WB = nB.baf2RxDamage,
        dB = nB.baf2RxDamageTrend;
      return (0, Oo.jsxs)("div", {
        className: QJ()("Baf2RxCore", null !== qB && void 0 !== qB ? qB : "plan"),
        children: [(0, Oo.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, Oo.jsx)(Dz, {
            inner: ZB.inner,
            looks: ZB.looks,
            layer: zB,
            setLayer: FB,
            glow: nB.baf2RxFormed ? nB.baf2RxThrottle / 100 : 1,
            melted: UB,
            explain: kB
          }), (0, Oo.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              kB(`${Kz}rxWhy_heat`)
            },
            children: [null !== JB ? (0, Oo.jsxs)(Oo.Fragment, {
              children: [(0, Oo.jsx)("b", {
                children: cB(`${Kz}rxHeatPct`, {
                  pct: String(JB)
                })
              }), (0, Oo.jsx)("span", {
                className: QJ()("Baf2RxBand", qB),
                children: cB(`${Kz}rxBand_${qB}`)
              })]
            }) : (0, Oo.jsx)("b", {
              children: cB(`${Kz}rxHeat`)
            }), null !== GB && (0, Oo.jsx)("span", {
              className: QJ()("Baf2RxSettle", {
                Bad: vB
              }),
              children: GB
            }), WB >= 1 && (0, Oo.jsxs)("span", {
              className: QJ()("Baf2RxDamage", dB),
              children: [cB(`${Kz}rxDamageLine`, {
                pct: String(WB)
              }), " \xb7 ", cB(`${Kz}rxDamage_${dB}`), (0, Oo.jsx)("i", {
                children: (0, Oo.jsx)("b", {
                  style: {
                    width: `${Math.min(100,WB)}%`
                  }
                })
              })]
            })]
          }), (0, Oo.jsx)(Tz, {
            max: Uk,
            bands: Vz,
            ticks: Sz,
            now: JB,
            settle: oB,
            settleTone: vB ? "bad" : null,
            onExplain: () => {
              kB(`${Kz}rxWhy_heat`)
            }
          })]
        }), (0, Oo.jsx)(BF, {
          stats: NB,
          t: cB,
          explain: kB
        }), gB > 0 && (0, Oo.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            kB(`${Kz}rxWhy_perPellet`)
          },
          children: cB(`${Kz}rxPerPellet`, {
            amount: Mk(gB)
          })
        })]
      })
    }

    function ZF(BB, IB) {
      var ZB;
      if (!BB.baf2RxStore) return {
        note: IB(`${Kz}rxUpTo`, {
          amount: Mk(BB.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [TB, JB] = BB.baf2RxStore, oB = JB > 0 ? TB / JB : 0, GB = String(Math.floor(100 * oB)), vB = null !== (ZB = BB.baf2RxStoreNetPerS) && void 0 !== ZB ? ZB : 0, kB = function(BB) {
        var IB, ZB;
        const [TB, JB] = null !== (IB = BB.baf2RxStore) && void 0 !== IB ? IB : [0, 0], oB = null !== (ZB = BB.baf2RxStoreNetPerS) && void 0 !== ZB ? ZB : 0;
        return JB > 0 && TB >= JB - 1 ? "running" === BB.baf2RxState ? `${Cz}rxStoreFull` : `${Cz}rxStoreFullOnly` : oB > .05 ? `${Cz}rxStoreLine` : oB < -.05 ? "running" === BB.baf2RxState ? `${Cz}rxStoreUsesMore` : `${Cz}rxStoreDraining` : `${Cz}rxStorePct`
      }(BB);
      return {
        note: IB(kB, kB === `${Kz}rxStoreLine` ? {
          pct: GB,
          time: Co(IB, (JB - TB) / vB)
        } : {
          pct: GB
        }),
        share: oB
      }
    }

    function TF(BB) {
      let {
        view: IB,
        explain: ZB,
        preview: TB
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)(), {
        status: oB
      } = IB, GB = Vv(Bk(...IB.dims)), vB = pz(oB), kB = Math.min(Math.round(oB.baf2RxFuel), GB.fuel), cB = "running" === oB.baf2RxState, nB = cB ? az(oB.baf2RxOut, oB.baf2RxMaxNow) : 0, hB = function(BB, IB, ZB) {
        const TB = Oz(BB),
          JB = "cryo" === TB.gF,
          oB = ZB ? ZB.coolantSecs : TB.pct >= 100 && BB.baf2RxOut >= 1 ? iz(BB, BB.baf2RxThrottle).coolantSecs : null;
        let GB, vB = !1;
        if (TB.pct < 100) {
          const ZB = 1 === TB.makersShort,
            oB = !JB && BB.baf2RxCryoOpen ? "OrCryo" : "";
          GB = TB.makersShort > 0 ? IB(JB ? `${Kz}rxCryoAddMixer${ZB?"":"s"}` : `${Kz}rxWaterAddCondenser${ZB?"":"s"}${oB}`, {
            count: String(TB.makersShort)
          }) : IB(`${Kz}rxWaterNeeds`, {
            rate: Uz(TB.needPerS)
          })
        } else if (null !== oB) GB = IB(`${Kz}rxWaterRunsOut`, {
          time: Co(IB, oB)
        });
        else if (TB.waterBeside > 0) GB = IB(`${Kz}rxCryoPlusWater`, {
          rate: Uz(TB.waterBeside)
        });
        else {
          const BB = function(BB) {
            return BB.inPerS <= 0 ? "rxWaterNoSupply" : BB.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(TB);
          vB = "rxWaterNoSupply" === BB, GB = IB(`${Kz}${BB}`, {
            amount: Mk(TB.stored)
          })
        }
        return {
          kind: JB ? "Cryo" : "Water",
          label: IB(JB ? `${Kz}rxCryo` : `${Kz}rxWater`),
          number: `${Uz(TB.usePerS)}/s`,
          preview: ZB ? `${Uz(ZB.coolPerS)}/s` : null,
          note: GB,
          tone: "noWater" === BB.baf2RxState ? "danger" : vB ? "warn" : (kB = TB.pct, cB = oB, kB < 100 ? "danger" : null === cB ? null : cB < 300 ? "danger" : "warn"),
          share: TB.pct / 100,
          why: JB ? `${Kz}rxWhy_cryo` : `${Kz}rxWhy_water`,
          short: TB.pct < 100
        };
        var kB, cB
      }(oB, JB, TB), zB = Ok(oB, GB.waste, vB), FB = ZF(oB, JB), NB = iz(oB, oB.baf2RxTarget), gB = cB && Math.abs(NB.settle - oB.baf2RxHeat) >= 3, qB = TB ? TB.pelletsPerMin / 60 : null;
      return (0, Oo.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, Oo.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Oo.jsx)(Iz, {
            kind: "Fuel",
            label: JB(`${Kz}rxFuel`),
            number: String(kB),
            preview: null !== qB && qB > 0 && oB.baf2RxFuel > 0 ? Co(JB, oB.baf2RxFuel / qB) : null,
            note: oB.baf2RxFuel <= 0 ? JB(`${Kz}rxFuelEmpty`) : vB > 0 ? JB(`${Kz}rxFuelLeft`, {
              time: Co(JB, oB.baf2RxFuel / vB)
            }) : JB(1 === kB ? `${Kz}rxFuelPellet` : `${Kz}rxFuelPellets`),
            tone: "noFuel" === oB.baf2RxState ? "danger" : oB.baf2RxFuel < 2 ? "warn" : null,
            share: oB.baf2RxFuel / GB.fuel,
            onExplain: () => {
              ZB(`${Kz}rxWhy_fuel`)
            }
          }), (0, Oo.jsx)(Iz, {
            kind: hB.kind,
            label: hB.label,
            number: hB.number,
            preview: hB.preview,
            note: hB.note,
            tone: hB.tone,
            share: hB.share,
            onExplain: () => {
              ZB(hB.why)
            }
          })]
        }), (0, Oo.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Oo.jsx)(Zz, {
            kind: "Fuel",
            step: nB,
            short: "noFuel" === oB.baf2RxState
          }), (0, Oo.jsx)(Zz, {
            kind: hB.kind,
            step: nB,
            short: hB.short || "noWater" === oB.baf2RxState
          })]
        }), (0, Oo.jsx)(IF, {
          view: IB,
          heat: oB.baf2RxHeat,
          settle: Math.min(Uk, NB.settle),
          settleLine: gB ? JB(`${Kz}rxHeatSettles`, {
            pct: String(Math.round(NB.settle)),
            time: Co(JB, NB.settleS)
          }) : null,
          settleBad: NB.settle > 100,
          explain: ZB
        }), (0, Oo.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Oo.jsx)(Zz, {
            kind: "Power",
            step: nB
          }), (0, Oo.jsx)(Zz, {
            kind: "Waste",
            step: cB && oB.baf2RxFuel - oB.baf2RxPu > 0 ? nB : 0,
            short: zB.full
          })]
        }), (0, Oo.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Oo.jsx)(Iz, {
            kind: "Power",
            label: JB(`${Kz}rxPowerOut`),
            number: `\u26a1 ${Mk(oB.baf2RxOut)}/s`,
            preview: TB ? Mk(TB.out) : null,
            note: FB.note,
            share: FB.share,
            onExplain: () => {
              ZB(`${Kz}rxWhy_power`)
            }
          }), (0, Oo.jsx)(Iz, {
            kind: "Waste",
            label: JB(`${Kz}rxWaste`),
            number: `${Math.floor(oB.baf2RxWaste)}/${GB.waste}`,
            note: zB.full ? JB(`${Kz}rxWasteFull`) : null !== zB.fullInS ? JB(`${Kz}rxWasteFullIn`, {
              time: Co(JB, zB.fullInS)
            }) : JB(`${Kz}rxWasteSpent`),
            tone: "wasteFull" === oB.baf2RxState ? "danger" : zB.full ? "warn" : null,
            share: oB.baf2RxWaste / GB.waste,
            onExplain: () => {
              ZB(`${Kz}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function JF(BB) {
      let {
        view: IB,
        explain: ZB
      } = BB;
      const {
        t: TB
      } = (0, YJ.G)(), JB = IB.plan;
      if (!JB) return null;
      const oB = JB.fuelHeat <= 0 ? null : JB.cooling > 0 ? Math.min(Uk, 100 * JB.fuelHeat / JB.cooling) : Uk,
        GB = TB(`${Kz}rxPlanAtFull`);
      return (0, Oo.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, Oo.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Oo.jsx)(Iz, {
            kind: "Fuel",
            label: TB(`${Kz}rxFuel`),
            number: TB(`${Kz}rxPlanPerMin`, {
              amount: jk(JB.pelletsPerMin)
            }),
            note: TB(`${Kz}rxPlanPellets`),
            onExplain: () => {
              ZB(`${Kz}rxWhy_fuel`)
            }
          }), (0, Oo.jsx)(Iz, {
            kind: "Water",
            label: TB(`${Kz}rxWater`),
            number: `${Uz(JB.waterPerS)}/s`,
            note: IB.status.baf2RxCryoOpen && JB.waterPerS > 0 ? TB(`${Kz}rxPlanOrCryo`, {
              rate: Uz(Nk(JB, VB.f) * VB.n)
            }) : GB,
            onExplain: () => {
              ZB(`${Kz}rxWhy_water`)
            }
          })]
        }), (0, Oo.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Oo.jsx)(Zz, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, Oo.jsx)(Zz, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, Oo.jsx)(IF, {
          view: IB,
          heat: null,
          settle: oB,
          settleLine: null === oB ? null : TB(`${Kz}rxPlanHeat`, {
            pct: String(Math.round(oB))
          }),
          settleBad: null !== oB && oB > 100,
          explain: ZB
        }), (0, Oo.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Oo.jsx)(Zz, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, Oo.jsx)(Zz, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, Oo.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Oo.jsx)(Iz, {
            kind: "Power",
            label: TB(`${Kz}rxPowerOut`),
            number: `\u26a1 ${Mk(JB.max)}/s`,
            note: GB,
            onExplain: () => {
              ZB(`${Kz}rxWhy_power`)
            }
          }), (0, Oo.jsx)(Iz, {
            kind: "Waste",
            label: TB(`${Kz}rxWaste`),
            number: TB(`${Kz}rxPlanPerMin`, {
              amount: jk(JB.pelletsPerMin)
            }),
            note: TB(`${Kz}rxWasteSpent`),
            onExplain: () => {
              ZB(`${Kz}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const oF = "buildAFactory2Game:",
      GF = {
        key: `${oF}rxWaiting`,
        params: {},
        tone: "info"
      };

    function vF(BB, IB) {
      return 0 !== (BB.baf2RxFlags & IB)
    }

    function kF(BB) {
      var IB, ZB;
      let {
        store: JB,
        close: oB
      } = BB;
      const {
        t: GB
      } = (0, YJ.G)(), vB = gz(JB), {
        explained: kB,
        hinting: cB,
        explain: nB,
        explainOnce: hB
      } = Jz("baf2RxExplained"), zB = (0, TB.useCallback)(((BB, IB) => {
        nB(GB(BB, IB))
      }), [nB, GB]), FB = (0, TB.useCallback)(((BB, IB) => {
        hB(BB, GB(BB, IB))
      }), [hB, GB]), [NB, gB] = (0, TB.useState)(!1), [qB, yB] = (0, TB.useState)(!1), UB = null === vB || void 0 === vB ? void 0 : vB.status, WB = null === UB || void 0 === UB ? void 0 : UB.baf2RxAt.join(","), dB = !0 === (null === UB || void 0 === UB ? void 0 : UB.baf2RxFormed);
      (0, TB.useEffect)((() => {
        yB(!1), gB(!1)
      }), [WB, dB]), (0, TB.useEffect)((() => (JB.opened(), () => {
        JB.closed()
      })), [JB]);
      const CB = void 0 !== UB && vF(UB, yI),
        QB = UB ? dB ? yk(UB) : null !== vB && void 0 !== vB && vB.plan ? function(BB, IB) {
          if (BB <= 0) return "off";
          if (IB <= 0) return "alarm";
          const ZB = 100 * BB / IB;
          return ZB < 50 ? "calm" : ZB < nk ? "warm" : ZB <= 100 ? "hot" : "alarm"
        }(vB.plan.fuelHeat, vB.plan.cooling) : "off" : "off",
        sB = UB ? Wk(UB) : null,
        wB = vB ? vB.waiting ? GF : dB ? jz(vB.status) : function(BB) {
          var IB, ZB;
          const {
            status: TB
          } = BB;
          return Pz({
            left: TB.baf2RxNeed.reduce(((BB, IB) => {
              let [, ZB] = IB;
              return BB + ZB
            }), 0),
            bad: TB.baf2RxBad,
            rods: null !== (IB = null === (ZB = BB.plan) || void 0 === ZB ? void 0 : ZB.rods) && void 0 !== IB ? IB : 0,
            canFill: vF(TB, gI),
            melted: vF(TB, NI),
            idle: BB.looks.reduce(((BB, IB) => BB + (IB === Gk ? 1 : 0)), 0)
          })
        }(vB) : null,
        OB = cB && null !== wB && ("ok" === wB.tone || "info" === wB.tone),
        YB = UB ? function(BB) {
          const IB = 0 !== (BB.baf2RxFlags & zI),
            ZB = BB.baf2RxHeat < Ev;
          return 0 !== (BB.baf2RxFlags & NI) || ZB && (IB || !BB.baf2RxFormed) ? null : BB.baf2RxFormed && !IB ? {
            key: `${qk}rxApartScram`,
            params: {}
          } : {
            key: `${qk}rxApartCooling`,
            params: {
              pct: String(Ev)
            }
          }
        }(UB) : null,
        [iB, pB, aB] = null !== (IB = null === vB || void 0 === vB ? void 0 : vB.dims) && void 0 !== IB ? IB : [0, 0, 0],
        HB = `${iB}\xd7${pB}\xd7${aB}`;
      return (0, Oo.jsx)(QG.c, {
        close: oB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Oo.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, Oo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Oo.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Oo.jsx)(yz, {
                mood: QB
              }), (0, Oo.jsxs)("div", {
                children: [(0, Oo.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: GB(`${oF}rxTitle`)
                }), vB && (0, Oo.jsxs)("p", {
                  className: QJ()("Baf2RxSubtitle", dB && (null === sB || void 0 === sB ? void 0 : sB.tone)),
                  children: [dB && !CB ? (0, Oo.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": GB(`${oF}rxChangeSize`),
                    onClick: () => {
                      if (!UB) return;
                      const BB = vF(UB, zI);
                      var IB;
                      (IB = {
                        scram: BB,
                        heat: UB.baf2RxHeat
                      }).scram && IB.heat < Ev ? gB(!0) : zB(BB ? `${oF}rxResizeCooling` : `${oF}rxResizeHot`, {
                        pct: String(Ev)
                      })
                    },
                    children: [HB, " \u270e"]
                  }) : HB, " \xb7 ", GB(dB ? null !== (ZB = null === sB || void 0 === sB ? void 0 : sB.label) && void 0 !== ZB ? ZB : `${oF}rxState_running` : `${oF}rxSubPlanShort`)]
                })]
              })]
            }), (0, Oo.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [vB && !CB && (0, Oo.jsx)(qz, {
                kind: "reactor",
                busy: vB.busy.has("apart"),
                whyNot: YB ? () => {
                  zB(YB.key, YB.params)
                } : null,
                apart: () => {
                  JB.tap("apart", (() => {
                    JB.send("apart")
                  }))
                }
              }), (0, Oo.jsx)(sG.l, {
                onClick: oB
              })]
            })]
          }), vB && wB && (0, Oo.jsxs)("div", {
            className: "Baf2RxBody",
            children: [dB ? (0, Oo.jsx)(TF, {
              view: vB,
              explain: zB,
              preview: Yz(vB.status)
            }) : (0, Oo.jsx)(JF, {
              view: vB,
              explain: zB
            }), (0, Oo.jsx)(oz, {
              text: OB ? `${Hz(GB,wB)} ${GB(`${oF}rxTapHint`)}` : Hz(GB, wB),
              tone: wB.tone,
              explained: kB
            }), CB ? (0, Oo.jsxs)(Oo.Fragment, {
              children: [(0, Oo.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: GB(`${oF}rxNotYours`)
              }), (0, Oo.jsx)(hz, {
                status: vB.status,
                store: JB,
                readOnly: !0
              })]
            }) : dB && !qB ? (0, Oo.jsxs)(Oo.Fragment, {
              children: [(0, Oo.jsx)(uz, {
                view: vB,
                store: JB,
                explain: zB,
                explainOnce: FB
              }), void 0 !== vB.status.baf2RxLayout && kz(vB.status) && (0, Oo.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, Oo.jsx)(hz, {
                  status: vB.status,
                  store: JB,
                  readOnly: !1,
                  bare: !0
                }), (0, Oo.jsx)(nz, {
                  status: vB.status,
                  store: JB,
                  busy: vB.busy.has("fill")
                })]
              })]
            }) : (0, Oo.jsxs)(Oo.Fragment, {
              children: [(0, Oo.jsx)(fz, {
                view: vB,
                store: JB,
                keepSize: dB ? () => {
                  yB(!1)
                } : void 0
              }), Qk(vB.dims, vB.status.baf2RxDims) && (0, Oo.jsx)(lz, {
                need: vB.status.baf2RxNeed,
                explain: zB
              }), (0, Oo.jsx)(hz, {
                status: vB.status,
                store: JB,
                readOnly: !1
              })]
            }), NB && (0, Oo.jsx)(Nz, {
              id: "baf2ResizeTitle",
              title: `${oF}rxResizeConfirmTitle`,
              body: `${oF}rxResizeConfirmBody`,
              yes: `${oF}rxChangeSize`,
              cancel: () => {
                gB(!1)
              },
              confirm: () => {
                gB(!1), yB(!0)
              }
            })]
          })]
        })
      })
    }
    class cF {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(BB) {
        this.view = BB;
        for (const IB of this.listeners) IB()
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

    function nF(BB) {
      let {
        commands: IB,
        store: ZB,
        power: JB,
        water: oB,
        reactor: GB,
        battery: vB,
        collider: kB,
        terminal: cB,
        quests: nB,
        tutorial: hB,
        close: zB,
        leave: FB,
        askIslands: NB,
        showCore: gB,
        openSocial: qB
      } = BB;
      const {
        userContext: yB
      } = (0, Rv.d)(), UB = Pv.featureFlags.useSocialFeatures && yB.isLoggedIn(), [WB, dB] = (0, TB.useState)((() => ZB.get()));
      (0, TB.useEffect)((() => ZB.subscribe((() => {
        dB(ZB.get())
      }))), [ZB]);
      const CB = "islands" === (null === WB || void 0 === WB ? void 0 : WB.kind) ? WB.backToCore : void 0;
      return (0, Oo.jsxs)(uG.Provider, {
        value: IB,
        children: ["core" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, Oo.jsx)(dh, {
          view: WB.core,
          close: zB,
          askIslands: NB
        }), "dropMap" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, Oo.jsx)(wh, {
          message: WB.dropMap,
          quests: nB,
          close: zB,
          leave: FB
        }), "islands" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, Oo.jsx)(fh, {
          message: WB.islands,
          arrivedAtMs: WB.arrivedAtMs,
          close: CB ? () => {
            gB(CB)
          } : zB,
          leave: FB,
          openSocial: UB ? qB : null
        }), "quests" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, Oo.jsx)(Xn, {
          store: nB,
          tutorial: hB,
          close: zB
        }), "transfer" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, Oo.jsx)(Jn, {
          message: WB.transfer,
          arrivedAtMs: WB.arrivedAtMs,
          close: zB,
          leave: FB
        }), "power" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, Oo.jsx)(MG, {
          store: JB,
          close: zB
        }), "water" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, Oo.jsx)(qv, {
          store: oB,
          close: zB
        }), "reactor" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, Oo.jsx)(kF, {
          store: GB,
          close: zB
        }), "battery" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, Oo.jsx)(tz, {
          store: vB,
          close: zB
        }), "collider" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, Oo.jsx)(Uc, {
          store: kB,
          close: zB
        }), "terminal" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, Oo.jsx)(Bz, {
          store: cB,
          close: zB,
          send: BB => {
            IB.send(BB)
          }
        })]
      })
    }
    var hF = ZB(38532);

    function zF(BB, IB) {
      return BB.distSq - IB.distSq
    }
    class FF {
      constructor() {
        this.list = [], this.pool = []
      }
      add(BB, IB, ZB, TB) {
        let JB = this.pool[this.list.length];
        JB || (JB = {
          x: 0,
          y: 0,
          distSq: 0,
          element: IB,
          liftRem: ZB,
          dot: TB
        }, this.pool.push(JB)), JB.x = BB.x, JB.y = BB.y, JB.distSq = BB.distSq, JB.element = IB, JB.liftRem = ZB, JB.dot = TB, this.list.push(JB)
      }
    }
    class NF {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = BB, this.sizes = new WeakMap, this.observer = new ResizeObserver((BB => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const IB of BB) {
            const BB = IB.borderBoxSize[0];
            "dot" !== IB.target.dataset.crowded && 0 !== BB.inlineSize && 0 !== BB.blockSize && this.sizes.set(IB.target, {
              width: BB.inlineSize,
              height: BB.blockSize
            })
          }
        })), this.remPx = 16, this.XF = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.kU = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.kU)
      }
      observe(BB) {
        this.observer.observe(BB)
      }
      unobserve(BB) {
        this.observer.unobserve(BB)
      }
      run(BB) {
        const IB = BB.list;
        IB.sort(zF);
        const ZB = this.pxPerVw,
          TB = this.pxPerVh;
        this.XF.length = 0, this.hud && this.XF.push(...this.hud.boxes(performance.now()));
        for (const oB of IB) {
          var JB;
          const BB = this.sizes.get(oB.element);
          let IB = "no";
          if (BB && BB.width > 0) {
            const JB = oB.x * ZB,
              GB = oB.y * TB - oB.liftRem * this.remPx;
            this.fit(JB, GB, BB.width, BB.height) || (IB = oB.dot && this.fit(JB, GB, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (JB = oB.element.dataset.crowded) && void 0 !== JB ? JB : "no") !== IB && ("no" === IB ? delete oB.element.dataset.crowded : oB.element.dataset.crowded = IB), "hidden" !== IB && (0, hF.d)(oB.element, oB.x, oB.y)
        }
        IB.length = 0
      }
      fit(BB, IB, ZB, TB) {
        const JB = BB - ZB / 2,
          oB = BB + ZB / 2,
          GB = IB - TB,
          vB = this.XF;
        for (let kB = 0; kB < vB.length; kB += 4)
          if (JB < vB[kB + 1] - 2 && oB > vB[kB] + 2 && GB < vB[kB + 3] - 2 && IB > vB[kB + 2] + 2) return !1;
        return vB.push(JB, oB, GB, IB), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.kU)
      }
    }
    const gF = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class qF {
      constructor() {
        this.cards = gF.map((BB => document.getElementsByClassName(BB))), this.watched = gF.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(BB) {
        BB - this.refreshedAt > 1e3 && (this.refreshedAt = BB, this.stale = !0);
        for (let ZB = 0; ZB < this.cards.length; ZB++) {
          var IB;
          const BB = null !== (IB = this.cards[ZB][0]) && void 0 !== IB ? IB : null;
          BB !== this.watched[ZB] && this.watch(ZB, BB)
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
        for (const IB of this.watched) {
          if (!IB || IB.closest(".NoRoom")) continue;
          const ZB = IB.getBoundingClientRect();
          let TB = ZB.top,
            JB = ZB.bottom;
          if (IB === this.watched[0] && this.hud) {
            const BB = this.hud.getBoundingClientRect();
            TB = Math.max(TB, BB.top), JB = Math.min(JB, BB.bottom)
          }
          ZB.width > 0 && JB > TB && BB.push(ZB.left, ZB.right, TB, JB)
        }
      }
      watch(BB, IB) {
        const ZB = this.watched[BB];
        var TB, JB;
        (ZB && this.sizes.unobserve(ZB), this.watched[BB] = IB, this.stale = !0, IB && this.sizes.observe(IB), 0 === BB) && (null === (TB = this.hud) || void 0 === TB || TB.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (JB = null === IB || void 0 === IB ? void 0 : IB.closest(".Baf2QuestHud")) && void 0 !== JB ? JB : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var yF = ZB(38539);
    class UF {
      constructor(BB) {
        this.onElement = BB, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(BB) {
        const IB = [];
        for (let ZB = 0; ZB + 4 < BB.length; ZB += 5) {
          const TB = [BB[ZB], BB[ZB + 1], BB[ZB + 2]];
          IB.push({
            key: TB.join(","),
            pos: TB,
            status: TJ[BB[ZB + 3]],
            kind: iI[BB[ZB + 4]]
          })
        }
        this.markers = IB, this.keys = new Set(IB.map((BB => {
          let {
            key: IB
          } = BB;
          return IB
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
        let IB = this.refs.get(BB);
        return IB || (IB = IB => {
          const ZB = this.elements.get(BB);
          var TB, JB;
          ZB && (null === (TB = this.onElement) || void 0 === TB || TB.call(this, ZB, !1));
          IB ? (this.elements.set(BB, IB), null === (JB = this.onElement) || void 0 === JB || JB.call(this, IB, !0)) : (this.elements.delete(BB), this.refs.delete(BB))
        }, this.refs.set(BB, IB)), IB
      }
      onAfterRender(BB, IB, ZB) {
        for (const TB of this.markers) {
          const JB = this.elements.get(TB.key);
          if (!JB) continue;
          const oB = (0, yF.b)(JB, BB, IB, TB.pos, 1.05, 24);
          oB && ZB.add(oB, JB, .45, !0)
        }
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
    }
    const WF = {
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
    const dF = (0, TB.memo)((function(BB) {
        let {
          status: IB,
          kind: ZB,
          bindRef: TB
        } = BB;
        const {
          t: JB
        } = (0, YJ.G)(), oB = function(BB, IB) {
          var ZB;
          if ("noFuel" === BB) {
            var TB, JB;
            const BB = null === (TB = PI[IB]) || void 0 === TB || null === (JB = TB.fuels) || void 0 === JB ? void 0 : JB.find((BB => TZ.includes(BB)));
            return null !== BB && void 0 !== BB ? BB : WF.noFuel
          }
          return void 0 !== (null === (ZB = PI[IB]) || void 0 === ZB ? void 0 : ZB.cryoMade) ? "noOutlet" === BB ? "Fluid Pipe" : "noInput" === BB ? "Biomass" : WF[BB] : WF[BB]
        }(IB, ZB);
        return (0, Oo.jsxs)("div", {
          className: QJ()("Baf2StallMarker", IB),
          ref: TB,
          hidden: !0,
          children: [oB && (0, Oo.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, Oo.jsx)(pJ.e, {
              itemName: oB,
              amount: 0
            })
          }), (0, Oo.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === IB ? "?" : "!"
          }), (0, Oo.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: JB(`buildAFactory2Game:stallTag_${IB}`)
          })]
        })
      })),
      CF = (0, TB.memo)((function(BB) {
        let {
          controller: IB
        } = BB;
        const [ZB, JB] = (0, TB.useState)((() => IB.get()));
        return (0, TB.useEffect)((() => (JB(IB.get()), IB.subscribe((() => {
          JB(IB.get())
        })))), [IB]), (0, Oo.jsx)("div", {
          className: "Baf2StallMarkers",
          children: ZB.map((BB => (0, Oo.jsx)(dF, {
            status: BB.status,
            kind: BB.kind,
            bindRef: IB.bind(BB.key)
          }, BB.key)))
        })
      })),
      QF = gZ.l + 150;
    class sF {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(BB, IB) {
        const ZB = IB - BB;
        null === this.offset || ZB < this.offset ? this.offset = ZB : this.offset = Math.min(ZB, this.offset + .02 * (IB - this.sampledAt)), this.sampledAt = IB
      }
      toLocal(BB) {
        var IB;
        return BB + (null !== (IB = this.offset) && void 0 !== IB ? IB : 0) + QF
      }
    }
    var wF = ZB(38547);
    const OF = 15 * Math.PI / 180,
      YF = Math.SQRT2,
      iF = [4, 2];

    function pF(BB, IB) {
      const ZB = [1 / 0, 1 / 0, 1 / 0],
        TB = [-1 / 0, -1 / 0, -1 / 0];
      for (const kB of BB)
        for (let BB = 0; BB < 3; BB++) ZB[BB] = Math.min(ZB[BB], kB[BB]), TB[BB] = Math.max(TB[BB], kB[BB]);
      const JB = (ZB[0] + TB[0]) / 2,
        oB = (ZB[1] + TB[1]) / 2,
        GB = (ZB[2] + TB[2]) / 2;
      let vB = 0;
      for (const kB of BB) vB = Math.max(vB, Math.hypot(kB[0] - JB, kB[1] - oB, kB[2] - GB));
      return {
        x: JB,
        y: oB,
        z: GB,
        r: vB + IB
      }
    }

    function aF(BB, IB, ZB) {
      const TB = IB.x - BB.x,
        JB = IB.y - BB.y,
        oB = IB.z - BB.z,
        GB = Math.sqrt(TB * TB + JB * JB + oB * oB);
      if (GB <= IB.r + 8) return 1;
      const vB = IB.r / GB,
        kB = Math.sqrt(1 - vB * vB),
        cB = kB < -BB.cosHalf,
        nB = (TB * BB.dx + JB * BB.dy + oB * BB.dz) / GB;
      if (!cB && nB < BB.cosHalf * kB - BB.sinHalf * vB) return 0;
      const hB = ZB * YF * BB.frameMs * BB.pxPerBlock / (GB - IB.r);
      for (let zB = 0; zB < iF.length; zB++)
        if (hB * iF[zB] <= 1) return iF[zB];
      return 1
    }

    function HF(BB, IB) {
      return {
        name: BB,
        at: IB,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const MF = [0, 0, 0];

    function jF(BB, IB, ZB) {
      let [, TB, JB, oB, GB, vB] = IB;
      const kB = gZ.f * (null !== GB && void 0 !== GB ? GB : 1),
        cB = [];
      for (let FB = 0; FB < TB.length; FB += 3) cB.push([TB[FB] + .5, TB[FB + 1] + .65, TB[FB + 2] + .5]);
      const nB = [];
      for (let FB = 0; FB < cB.length - 1; FB++) {
        const [BB, IB] = [cB[FB], cB[FB + 1]];
        nB.push([(BB[0] + IB[0]) / 2, (BB[1] + IB[1]) / 2, (BB[2] + IB[2]) / 2])
      }
      const hB = cB.slice(1, -1),
        zB = new Uint8Array(hB.length);
      for (const FB of null !== vB && void 0 !== vB ? vB : []) zB[FB >> 1] |= 1 & FB ? 2 : 1;
      return {
        island: BB,
        length: hB.length,
        loop: oB,
        cellsPerMs: kB,
        edges: nB,
        pg: hB,
        bounds: pF([...nB, ...hB], .3),
        changed: !0,
        culled: !1,
        hide: zB,
        items: JB.map((BB => {
          let [IB, TB] = BB;
          return HF(IB, (0, gZ.z)(IB, TB, ZB, kB).at)
        }))
      }
    }

    function PF(BB, IB) {
      const {
        items: ZB
      } = BB;
      if (0 === ZB.length) return;
      const TB = BB.length / BB.cellsPerMs,
        JB = Math.floor((IB - ZB[0].at) / TB) - 1;
      if (JB > 0)
        for (const oB of ZB) oB.at += JB * TB
    }

    function RF(BB, IB) {
      const ZB = Math.min(Math.floor(IB), BB.length - 1),
        TB = BB.hide[ZB];
      return 0 !== TB && 0 !== (TB & (IB - ZB < .5 ? 1 : 2))
    }

    function rF(BB, IB) {
      const ZB = Math.min(Math.floor(IB), BB.length - 1),
        TB = IB - ZB,
        JB = TB < .5,
        oB = JB ? BB.edges[ZB] : BB.pg[ZB],
        GB = JB ? BB.pg[ZB] : BB.edges[ZB + 1],
        vB = JB ? 2 * TB : 2 * TB - 1;
      MF[0] = oB[0] + (GB[0] - oB[0]) * vB, MF[1] = oB[1] + (GB[1] - oB[1]) * vB, MF[2] = oB[2] + (GB[2] - oB[2]) * vB
    }
    const mF = Math.PI / 4;
    class XF {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new sF, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.kU = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(BB) {
        const IB = performance.now();
        this.clock.sample(BB.baf2BeltLinesAt, IB), this.queue(BB.baf2BeltLinesAt, BB, 0, null, null, 0), this.applyDue(IB)
      }
      onMoves(BB) {
        const IB = performance.now(),
          ZB = BB.baf2BeltMovesAt;
        this.clock.sample(ZB, IB);
        for (const [TB, JB, oB, GB] of BB.baf2BeltMoveList) null === JB ? this.queue(ZB - oB, null, TB, null, null, null !== GB && void 0 !== GB ? GB : 0) : this.queue(ZB - oB, null, TB, JB, null !== GB && void 0 !== GB ? GB : null, 0);
        this.applyDue(IB)
      }
      start(BB) {
        this.pool = new wF.e(BB, {
          scale: .3,
          yaw: mF
        }, 64), this.kU(), window.addEventListener("resize", this.kU)
      }
      onAfterRender(BB) {
        const {
          pool: IB
        } = this;
        if (!IB) return;
        const ZB = performance.now(),
          TB = ZB - this.lastRenderAt;
        this.lastRenderAt = ZB, TB < 100 && (this.frameMs += .1 * (TB - this.frameMs));
        const JB = ZB + this.frameMs;
        this.applyDue(JB);
        const oB = BB.cameraPosition,
          GB = IB.follow(oB);
        this.setView(BB, oB);
        const vB = this.frame++;
        for (let kB = 0; kB < this.shown.length; kB++) {
          const BB = this.shown[kB],
            ZB = aF(this.view, BB.bounds, BB.cellsPerMs),
            TB = BB.culled && 0 !== ZB;
          if (BB.culled = 0 === ZB, !GB && !BB.changed && !TB && (0 === ZB || (vB + kB) % ZB !== 0)) continue;
          BB.changed = !1, BB.loop && (PF(BB, JB), (0, gZ.w)(BB.items, BB.length, JB, BB.cellsPerMs));
          let oB = BB.length;
          for (let vB = 0; vB < BB.items.length; vB++) {
            const ZB = BB.items[vB],
              TB = (0, gZ.C)(ZB.at, oB, JB, BB.cellsPerMs);
            if (oB = TB - gZ.q, RF(BB, TB)) {
              null === ZB.kind || ZB.hidden || (ZB.kind.hide(ZB.slot), ZB.hidden = !0);
              continue
            }
            let kB = ZB.kind;
            if (null === kB) {
              if (kB = IB.kindOf(ZB.name), null === kB) continue;
              ZB.kind = kB, ZB.slot = kB.take(), ZB.hidden = !0, ZB.drawn = NaN
            } else if (TB === ZB.drawn && !ZB.hidden && !GB) continue;
            rF(BB, TB), kB.write(ZB.slot, MF[0], MF[1], MF[2]), ZB.hidden = !1, ZB.drawn = TB
          }
        }
        IB.commit()
      }
      dispose() {
        var BB;
        window.removeEventListener("resize", this.kU), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (BB = this.pool) || void 0 === BB || BB.dispose(), this.pool = null
      }
      setView(BB, IB) {
        const {
          cameraDir: ZB,
          lastDir: TB
        } = this, JB = BB.cameraDirection;
        for (let nB = 0; nB < 3; nB++) TB[nB] = ZB[nB], ZB[nB] = JB[nB];
        const oB = ZB[0] * TB[0] + ZB[1] * TB[1] + ZB[2] * TB[2],
          GB = Number.isNaN(oB) ? 0 : Math.acos(Math.min(1, Math.max(-1, oB))),
          {
            width: vB,
            height: kB
          } = this,
          cB = BB.tanHalfFovX;
        ! function(BB, IB, ZB, TB, JB, oB, GB) {
          let vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          BB.x = IB[0], BB.y = IB[1], BB.z = IB[2], BB.dx = ZB[0], BB.dy = ZB[1], BB.dz = ZB[2];
          const kB = Math.min(Math.PI, Math.atan(Math.sqrt(TB * TB + JB * JB)) + OF + vB);
          BB.cosHalf = Math.cos(kB), BB.sinHalf = Math.sin(kB), BB.pxPerBlock = oB / (2 * JB), BB.frameMs = GB
        }(this.view, IB, ZB, cB, cB * kB / vB, kB * window.devicePixelRatio, this.frameMs, GB)
      }
      queue(BB, IB, ZB, TB, JB, oB) {
        const GB = Math.max(this.clock.toLocal(BB), this.lastPendingAt);
        this.lastPendingAt = GB, this.pending.push({
          at: GB,
          lines: IB,
          line: ZB,
          name: TB,
          pos: JB,
          idx: oB
        })
      }
      applyDue(BB) {
        const {
          pending: IB
        } = this;
        for (; this.pendingHead < IB.length && IB[this.pendingHead].at <= BB;) {
          const BB = IB[this.pendingHead++];
          if (BB.lines) this.applyLines(BB.lines, BB.at), BB.lines = null;
          else {
            const IB = this.lines.get(BB.line);
            IB && this.applyMove(IB, BB, BB.at)
          }
        }
        this.pendingHead === IB.length ? (IB.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > IB.length && (IB.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(BB, IB) {
        this.clearIsland(BB.baf2BeltIsland);
        for (const ZB of BB.baf2BeltLineList) this.lines.set(ZB[0], jF(BB.baf2BeltIsland, ZB, IB));
        this.shown = [...this.lines.values()]
      }
      applyMove(BB, IB, ZB) {
        let {
          name: TB,
          pos: JB,
          idx: oB
        } = IB;
        BB.changed = !0, BB.loop && (PF(BB, ZB), (0, gZ.w)(BB.items, BB.length, ZB, BB.cellsPerMs)), null !== TB && null !== JB ? (0, gZ.x)(BB.items, BB.length, HF(TB, ZB), JB, ZB, BB.cellsPerMs) : null !== TB ? BB.items.push(HF(TB, ZB)) : BB.items.length > oB && this.release((0, gZ.F)(BB.items, BB.length, ZB, BB.cellsPerMs, oB))
      }
      clearIsland(BB) {
        for (const [IB, ZB] of this.lines)
          if (ZB.island === BB) {
            for (const BB of ZB.items) this.release(BB);
            this.lines.delete(IB)
          }
      }
      release(BB) {
        null !== BB.kind && (BB.kind.release(BB.slot), BB.kind = null, BB.slot = -1, BB.hidden = !0, BB.drawn = NaN)
      }
    }
    var LF = ZB(36613),
      eF = ZB(38557);

    function uF(BB) {
      let {
        depth: IB,
        store: ZB,
        t: JB
      } = BB;
      const oB = function(BB) {
        const [IB, ZB] = (0, TB.useState)(BB.lastPlayerY());
        return (0, Gn.d)(rJ, ZB), (0, TB.useEffect)((() => {
          ZB(BB.lastPlayerY())
        }), [BB]), IB
      }(ZB);
      if (null === oB) return null;
      const [GB, vB] = IB, kB = oB > GB ? GB : null !== vB && oB < vB ? vB : null, cB = {
        y: Wo(oB),
        target: null === kB ? "" : Wo(kB)
      };
      return (0, Oo.jsx)("span", {
        className: QJ()("Baf2QuestDepth", {
          Reached: null === kB
        }),
        children: JB(`${nn}${null===kB?"questDepthReached":"questDepth"}`, cB)
      })
    }

    function fF(BB) {
      let {
        also: IB,
        view: ZB,
        t: TB
      } = BB;
      return (0, Oo.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, Oo.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, Oo.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Oo.jsx)("strong", {
            children: TB(`${nn}questAlsoDownHere`)
          }), (0, Oo.jsx)("span", {
            className: "Baf2QuestChips",
            children: IB.map((BB => {
              let [IB, JB, oB, GB] = BB;
              return (0, Oo.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": TB(`${nn}questAlsoItem`, {
                  item: zn(TB, ZB.itemNames[IB], IB),
                  have: String(JB),
                  need: String(oB)
                }),
                children: [(0, Oo.jsx)(gn, {
                  item: IB
                }), (0, Oo.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${JB}/${oB}`
                }), null !== GB && (0, Oo.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: TB(`${nn}questAlsoDepth`, {
                    y: Wo(GB)
                  })
                })]
              }, IB)
            }))
          })]
        })]
      })
    }
    var lF = ZB(3589);

    function AF(BB) {
      let {
        expanded: IB,
        inventoryOpen: ZB,
        children: JB
      } = BB;
      const oB = (0, TB.useRef)(null);
      return (0, TB.useEffect)((() => {
        const BB = oB.current,
          IB = null === BB || void 0 === BB ? void 0 : BB.closest(".RightElements"),
          TB = null === BB || void 0 === BB ? void 0 : BB.firstElementChild;
        if (!BB || !IB || !TB) return;
        return (0, eF.e)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [IB, TB], (() => {
          const JB = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === JB.length) return;
          const oB = Math.max(...JB.map((BB => BB.getBoundingClientRect().bottom))),
            GB = IB.getBoundingClientRect(),
            vB = ZB ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (vB) {
            const IB = parseFloat(getComputedStyle(TB).marginLeft) + parseFloat(getComputedStyle(TB).marginRight),
              ZB = GB.right - vB.getBoundingClientRect().right - 8 - IB;
            BB.style.setProperty("--baf2-quest-room", `${ZB}px`), BB.classList.toggle("NoRoom", ZB < 150)
          } else BB.style.removeProperty("--baf2-quest-room"), BB.classList.remove("NoRoom");
          const kB = oB - GB.top + 8,
            cB = function(BB, IB, ZB) {
              const TB = IB.getBoundingClientRect(),
                JB = BB.getBoundingClientRect(),
                oB = (0, lF.i)(JB.left, JB.right, TB.top + ZB);
              if (null !== oB && oB < TB.bottom) return oB - TB.top;
              return TB.height - (parseFloat(getComputedStyle(IB).paddingBottom) || 0)
            }(BB, IB, kB) - 8,
            nB = window.innerHeight / 2 - GB.top,
            {
              top: hB,
              maxHeight: zB
            } = function(BB, IB, ZB, TB, JB) {
              const oB = Math.min(ZB, Math.max(0, IB - BB)),
                GB = JB ? BB : Math.max(BB, Math.min(TB - oB / 2, IB - oB));
              return {
                top: GB,
                maxHeight: Math.max(0, IB - GB)
              }
            }(kB, cB, function(BB) {
              const IB = BB.firstElementChild,
                ZB = IB ? IB.scrollHeight - IB.clientHeight : 0;
              return BB.getBoundingClientRect().height + Math.max(0, ZB)
            }(TB), nB, wo());
          BB.style.top = `${hB}px`, BB.style.maxHeight = `${zB}px`
        }))
      }), [ZB]), (0, Oo.jsx)("div", {
        ref: oB,
        className: QJ()("Baf2QuestHud", {
          Expanded: IB
        }),
        children: JB
      })
    }

    function tF(BB) {
      let {
        amount: IB,
        t: ZB
      } = BB;
      return (0, Oo.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, Oo.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, Oo.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: ZB(`${nn}questStepsDone`, {
            amount: String(IB)
          })
        })]
      })
    }

    function bF(BB) {
      let {
        pulse: IB
      } = BB;
      return 0 === IB ? null : (0, Oo.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, IB)
    }

    function xF(BB) {
      var IB;
      let {
        store: ZB
      } = BB;
      const JB = (0, Gn.h)(RJ, ZB.get()),
        [oB, GB] = (0, TB.useState)(!1),
        {
          t: vB
        } = (0, YJ.G)(),
        kB = (0, Qo.i)(so),
        {
          openInGameMenuName: cB,
          openEverythingMenuName: nB
        } = (0, WJ.o)(["openInGameMenuName", "openEverythingMenuName"]),
        hB = "inventory" === cB && null === nB,
        zB = null !== cB && !hB || null !== nB;
      if (! function(BB) {
          return null !== BB.name || null !== BB.side
        }(JB) || zB || "off" === JB.tutorial) return null;
      const FB = fJ(JB.rows),
        NB = FB.filter((BB => BB.done)).length,
        gB = function(BB, IB) {
          const ZB = tJ(BB);
          let TB = 0;
          return BB.filter(((BB, JB) => !!BB.justFinished || !(BB.done || JB < ZB || TB > IB) && (TB++, !0)))
        }(JB.rows, kB ? 0 : 2),
        qB = kB ? gB : function(BB, IB) {
          const ZB = IB.filter((BB => !BB.justFinished));
          if (ZB.length < 2) return [...IB];
          const TB = BB.indexOf(ZB[0]),
            JB = BB.indexOf(ZB[ZB.length - 1]),
            oB = new Set(fJ(BB));
          return BB.filter(((BB, ZB) => IB.includes(BB) || BB.done && oB.has(BB) && ZB > TB && ZB < JB))
        }(JB.rows, gB),
        yB = oB ? JB.rows : qB,
        UB = oB || kB ? [] : function(BB, IB) {
          const ZB = new Array(IB.length + 1).fill(0),
            TB = new Set(fJ(BB));
          let JB = 0;
          for (const oB of BB) JB < IB.length && oB === IB[JB] ? JB++ : oB.done && TB.has(oB) && ZB[JB]++;
          return ZB
        }(JB.rows, qB),
        WB = oB || qB.length < JB.rows.length || null !== JB.reward,
        dB = uJ(JB),
        CB = dB ? vB(`${nn}questLineComplete`) : JB.tier ? Un(vB, JB.tier) : vB(`${nn}currentQuest`),
        QB = function(BB) {
          var IB, ZB;
          if (uJ(BB)) return null;
          const TB = null === (IB = BB.chapters) || void 0 === IB ? void 0 : IB.find((IB => {
            let [ZB] = IB;
            return ZB === BB.tier
          }));
          if (!TB) return null;
          const JB = TB[1].filter((BB => !BB[4]));
          if (0 === JB.length) return null;
          const oB = null === (ZB = BB.name) || void 0 === ZB ? void 0 : ZB[0],
            GB = BB => JB.findIndex((IB => IB[0] === oB && (!BB || !IB[3]))),
            vB = GB(!0),
            kB = vB >= 0 ? vB : GB(!1);
          if (kB >= 0) return [kB + 1, JB.length];
          const cB = JB.filter((BB => BB[3])).length;
          return [Math.min(cB + 1, JB.length), JB.length]
        }(JB);
      return (0, Oo.jsx)(LF.h, {
        placement: "topRight",
        children: (0, Oo.jsx)(AF, {
          expanded: oB,
          inventoryOpen: hB,
          children: (0, Oo.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: hn,
            children: [null !== JB.name && (0, Oo.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, Oo.jsx)(bF, {
                pulse: JB.pulse
              }), (0, Oo.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, Oo.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [CB, QB && (0, Oo.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": vB(`${nn}questPlaceLabel`, {
                      n: String(QB[0]),
                      total: String(QB[1])
                    }),
                    children: vB(`${nn}questPlace`, {
                      n: String(QB[0]),
                      total: String(QB[1])
                    })
                  }), JB.tier && JB.core && !dB && (0, Oo.jsx)(Wn, {
                    core: JB.core,
                    t: vB
                  })]
                })
              }), (0, Oo.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: vB(`${nn}${JB.name[0]}`, Fn(JB.name[1]))
              }), (FB.length > 1 || WB) && (0, Oo.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [FB.length > 1 && (0, Oo.jsx)(dn, {
                  rows: FB,
                  t: vB
                }), WB && (0, Oo.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": oB,
                  onClick: () => {
                    GB(!oB)
                  },
                  children: [(0, Oo.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: vB(`${nn}questStepsToggle`, {
                      done: String(NB),
                      total: String(FB.length)
                    })
                  }), (0, Oo.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: oB ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, Oo.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [yB.map(((BB, IB) => {
                  var oB;
                  const GB = BB.current && JB.depth;
                  return (0, Oo.jsxs)(TB.Fragment, {
                    children: [(null !== (oB = UB[IB]) && void 0 !== oB ? oB : 0) > 0 && (0, Oo.jsx)(tF, {
                      amount: UB[IB],
                      t: vB
                    }), (0, Oo.jsx)(Cn, {
                      row: BB,
                      view: JB,
                      t: vB,
                      extra: GB && (0, Oo.jsx)(uF, {
                        depth: GB,
                        store: ZB,
                        t: vB
                      })
                    })]
                  }, BB.id)
                })), (null !== (IB = UB[yB.length]) && void 0 !== IB ? IB : 0) > 0 && (0, Oo.jsx)(tF, {
                  amount: UB[yB.length],
                  t: vB
                }), JB.also.length > 0 && (0, Oo.jsx)(fF, {
                  also: JB.also,
                  view: JB,
                  t: vB
                })]
              }), oB && JB.reward && (0, Oo.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [vB(`${nn}questReward`), (0, Oo.jsx)(gn, {
                  item: JB.reward
                }), zn(vB, JB.itemNames[JB.reward], JB.reward)]
              })]
            }), JB.side && (0, Oo.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [LJ(JB, Date.now()) && (0, Oo.jsx)(bF, {
                pulse: JB.sideCameUpAt
              }), (0, Oo.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: vB(`${nn}questSide`)
              }), (0, Oo.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: vB(`${nn}${JB.side.name[0]}`, Fn(JB.side.name[1]))
              }), (0, Oo.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, Oo.jsx)(Cn, {
                  row: JB.side.row,
                  view: JB,
                  t: vB
                })
              })]
            })]
          })
        })
      })
    }
    const EF = "baf2ToastView";
    class DF {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = BB, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: BB,
          holdMs: IB
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const BB = this.dropCovered();
          BB && this.show(BB.message, BB.holdMs)
        }), 250));
        const ZB = this.dropCovered();
        null !== ZB && (ZB.holdMs > 0 || "baf2ToastCelebrate" === ZB.message.baf2ToastStyle) && "baf2ToastCelebrate" !== BB.baf2ToastStyle && this.show(ZB.message, ZB.holdMs);
        const TB = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== BB.baf2ToastStyle && TB > 0) return this.pending = {
          message: BB,
          holdMs: IB
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const BB = this.pending;
          this.pending = null, BB && this.present(BB.message, BB.holdMs)
        }), TB));
        this.present(BB, IB)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(BB, IB) {
        this.clearTimers(), this.pending = null;
        const ZB = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: BB.baf2ToastText,
          style: BB.baf2ToastStyle,
          swapped: ZB,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === BB.baf2ToastStyle ? 1500 : IB), this.Gq();
        const TB = Math.min(8e3, Math.max(1e3, BB.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), TB)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.Gq(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Gq()
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
      Gq() {
        jJ.l.Gq(EF, this.view, !0)
      }
    }
    var KF = ZB(82);
    const VF = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function SF(BB) {
      let {
        store: IB
      } = BB;
      const ZB = (0, Gn.h)(EF, IB.get()),
        {
          openInGameMenuName: TB,
          openEverythingMenuName: JB
        } = (0, WJ.o)(["openInGameMenuName", "openEverythingMenuName"]),
        oB = ZB && (0, Oo.jsxs)("div", {
          className: QJ()("Baf2Toast", VF[ZB.style], {
            Swapped: ZB.swapped,
            Leaving: ZB.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === ZB.style && (0, Oo.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, Oo.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, Oo.jsx)(aJ.e, {
              text: ZB.text
            })
          })]
        }, ZB.id);
      return null !== TB && null === JB ? (0, KF.createPortal)((0, Oo.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: oB
      }), document.body) : (0, Oo.jsx)(LF.h, {
        children: oB
      })
    }
    const BN = "baf2AreaView";
    class IN {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.sv = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.sv = null
      }
      arrive(BB, IB) {
        IB && function(BB) {
          return "home" === BB.baf2AreaPlace && void 0 !== BB.baf2AreaNameText
        }(BB) ? this.sv = BB : this.show(BB)
      }
      release() {
        const BB = this.sv;
        null !== BB && this.show(BB)
      }
      show(BB) {
        this.clearTimer(), this.sv = null;
        const IB = void 0 === BB.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: BB,
          ms: IB
        }, this.Gq(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Gq()
        }), IB)
      }
      dispose() {
        this.clearTimer(), this.sv = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      Gq() {
        jJ.l.Gq(BN, this.view, !0)
      }
    }

    function ZN(BB) {
      var IB;
      let {
        store: ZB
      } = BB;
      const {
        t: TB
      } = (0, YJ.G)(), JB = (0, Gn.h)(BN, ZB.get());
      if (!JB) return null;
      const {
        area: oB
      } = JB, GB = oB.baf2AreaResetMinutes;
      return (0, Oo.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": oB.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${JB.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Oo.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), oB.baf2AreaHeading && (0, Oo.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: TB(oB.baf2AreaHeading)
        }), (0, Oo.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (IB = oB.baf2AreaNameText) && void 0 !== IB ? IB : TB(oB.baf2AreaName)
        }), oB.baf2AreaNote && (0, Oo.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: TB(oB.baf2AreaNote)
        }), void 0 !== GB && (0, Oo.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: TB("buildAFactory2Game:areaWildsReset", {
            time: Co(TB, 60 * GB)
          })
        })]
      }, JB.id)
    }
    const TN = "baf2GearGauge";
    class JN {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      rU(BB) {
        var IB;
        if (this.clearLinger(), null === BB.gearPowerKind) return void this.set(null);
        const ZB = "jetpack" === BB.gearPowerKind && (TB = BB.gearChargeState, JB = BB.gearCharge, "flying" === TB || "charging" === TB || "outOfCharge" === TB || "ceiling" === TB || "offPlot" === TB || "noPower" === TB && JB <= 0);
        var TB, JB;
        const oB = !0 === (null === (IB = this.view) || void 0 === IB ? void 0 : IB.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          GB = ZB || "jetpack" === BB.gearPowerKind && oB;
        this.set({
          gauge: BB,
          jetShown: GB
        }), GB && !ZB && (this.lingerTimer = setTimeout((() => {
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
        this.view = BB, jJ.l.Gq(TN, BB, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const oN = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function GN(BB) {
      let {
        store: IB
      } = BB;
      const ZB = (0, Gn.h)(TN, IB.get());
      return ZB ? "jetpack" === ZB.gauge.gearPowerKind ? (0, Oo.jsx)(vN, {
        view: ZB
      }) : (0, Oo.jsx)(kN, {
        gauge: ZB.gauge
      }) : null
    }

    function vN(BB) {
      let {
        view: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)(), {
        gauge: TB
      } = IB, JB = TB.gearChargeMax > 0 ? Math.max(0, Math.min(1, TB.gearCharge / TB.gearChargeMax)) : 0, oB = oN[TB.gearChargeState], GB = oB ? ZB(oB) : null;
      return (0, Oo.jsxs)("div", {
        className: QJ()("Baf2JetArc", {
          Shown: IB.jetShown,
          Low: JB < .2,
          Warm: JB >= .2 && JB < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - JB)
        },
        "aria-hidden": !IB.jetShown,
        children: [(0, Oo.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, Oo.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: cN,
            pathLength: 100
          }), (0, Oo.jsx)("path", {
            className: "Baf2JetArcFill",
            d: cN,
            pathLength: 100
          })]
        }), (0, Oo.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * JB), "%"]
        }), GB && (0, Oo.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: GB
        })]
      })
    }

    function kN(BB) {
      let {
        gauge: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)(), TB = function(BB, IB) {
        switch (IB.gearPowerKind) {
          case "skyPack":
            return BB("buildAFactory2Game:gearSkyPack", {
              charge: IB.gearCharge,
              max: IB.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return BB("buildAFactory2Game:gearIslandDraw", {
              power: KB(IB.gearIslandPower),
              cost: KB(IB.gearCostPerUse)
            });
          case "barrier":
            return BB("buildAFactory2Game:gearBarrier", {
              shield: Math.round(IB.gearCharge),
              max: IB.gearChargeMax,
              power: KB(IB.gearIslandPower)
            });
          default:
            return null
        }
      }(ZB, IB);
      return null === TB ? null : (0, Oo.jsx)(LF.h, {
        children: (0, Oo.jsx)("div", {
          className: QJ()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === IB.gearChargeState || "outOfCharge" === IB.gearChargeState
          }),
          role: "status",
          children: TB
        })
      })
    }
    const cN = (() => {
      const BB = BB => {
        const IB = BB * Math.PI / 180;
        return `${(40*Math.cos(IB)).toFixed(2)} ${(40*Math.sin(IB)).toFixed(2)}`
      };
      return `M ${BB(160)} A 40 40 0 1 1 ${BB(380)}`
    })();
    class nN {
      constructor(BB) {
        this.onElement = BB, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      rU(BB) {
        let IB = BB.baf2LabelsReset || BB.baf2LabelsIsland !== this.island;
        IB && (this.labels.clear(), this.island = BB.baf2LabelsIsland);
        for (const [ZB, TB, JB, oB, GB] of BB.baf2LabelsList) {
          const BB = `${ZB},${TB},${JB}`,
            vB = this.labels.get(BB);
          null === oB ? IB = this.labels.delete(BB) || IB : vB && vB.item === oB && (vB.count === GB || vB.count >= 0 && GB >= 0) ? vB.count !== GB && (vB.count = GB, this.writeCount(BB, GB)) : (this.labels.set(BB, {
            key: BB,
            pos: [ZB, TB, JB],
            item: oB,
            count: GB
          }), this.writeCount(BB, GB), IB = !0)
        }
        if (this.changes++, IB) {
          this.snapshot = [...this.labels.values()];
          for (const BB of this.listeners) BB()
        }
      }
      bindCount(BB) {
        const IB = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${BB}`;
        let ZB = this.countRefs.get(IB);
        return ZB || (ZB = ZB => {
          var TB, JB;
          ZB ? (this.countElements.set(IB, ZB), this.writeCount(BB, null !== (TB = null === (JB = this.labels.get(BB)) || void 0 === JB ? void 0 : JB.count) && void 0 !== TB ? TB : -1)) : (this.countElements.delete(IB), this.countRefs.delete(IB))
        }, this.countRefs.set(IB, ZB)), ZB
      }
      setCountWords(BB) {
        this.countWords = BB;
        for (const [IB, ZB] of this.labels) this.writePart(`words|${IB}`, BB(ZB.count), ZB.count)
      }
      writeCount(BB, IB) {
        this.writePart(`bare|${BB}`, Uo(IB), IB), this.countElements.has(`words|${BB}`) && this.writePart(`words|${BB}`, this.countWords(IB), IB)
      }
      writePart(BB, IB, ZB) {
        const TB = this.countElements.get(BB);
        if (!TB || ZB < 0) return;
        const JB = TB.firstChild;
        JB && 3 === JB.nodeType && !JB.nextSibling ? JB.nodeValue !== IB && (JB.nodeValue = IB) : TB.textContent !== IB && (TB.textContent = IB)
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
        let IB = this.refs.get(BB);
        return IB || (IB = IB => {
          const ZB = this.elements.get(BB);
          var TB, JB;
          ZB && (null === (TB = this.onElement) || void 0 === TB || TB.call(this, ZB, !1));
          IB ? (this.elements.set(BB, IB), null === (JB = this.onElement) || void 0 === JB || JB.call(this, IB, !0)) : (this.elements.delete(BB), this.refs.delete(BB))
        }, this.refs.set(BB, IB)), IB
      }
      onAfterRender(BB, IB, ZB, TB) {
        for (const JB of this.snapshot) {
          const oB = this.elements.get(JB.key);
          if (!oB) continue;
          if (TB(JB.key)) {
            (0, hF.f)(oB, !0);
            continue
          }
          const GB = (0, yF.b)(oB, BB, IB, JB.pos, 1.1, 24);
          GB && ZB.add(GB, oB, 0, !1)
        }
      }
    }
    const hN = (0, TB.memo)((function(BB) {
        let {
          item: IB
        } = BB;
        return (0, Oo.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, Oo.jsx)(pJ.e, {
            itemName: IB,
            amount: 0
          })
        })
      })),
      zN = (0, TB.memo)((function(BB) {
        let {
          label: IB,
          bindRef: ZB,
          countRef: TB,
          wordsRef: JB
        } = BB;
        return (0, Oo.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: ZB,
          hidden: !0,
          children: [(0, Oo.jsx)(hN, {
            item: IB.item
          }), IB.count >= 0 && (0, Oo.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, Oo.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: JB
            }), (0, Oo.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: TB
            })]
          })]
        })
      })),
      FN = (0, TB.memo)((function(BB) {
        let {
          store: IB
        } = BB;
        const {
          t: ZB
        } = (0, YJ.G)(), [JB, oB] = (0, TB.useState)((() => IB.list()));
        return (0, TB.useEffect)((() => (oB(IB.list()), IB.subscribe((() => {
          oB(IB.list())
        })))), [IB]), (0, TB.useEffect)((() => {
          IB.setCountWords((BB => ZB("buildAFactory2Game:labelSiloCount", {
            count: Uo(BB)
          })))
        }), [IB, ZB]), (0, Oo.jsx)("div", {
          className: "Baf2IslandLabels",
          children: JB.map((BB => -2 === BB.count ? null : (0, Oo.jsx)(zN, {
            label: BB,
            bindRef: IB.bind(BB.key),
            countRef: IB.bindCount(BB.key),
            wordsRef: IB.bindCount(BB.key, "words")
          }, BB.key)))
        })
      })),
      NN = {
        read: () => !0,
        write: () => {}
      };

    function gN(BB) {
      return `${BB[0]},${BB[1]},${BB[2]}`
    }

    function qN(BB) {
      let [IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB, zB] = BB;
      const FB = void 0 === hB || void 0 === zB ? function(BB) {
        return [Math.floor((BB - 1) / 2), 0]
      }(oB) : [hB, zB];
      return {
        kind: 0 === kB ? "reactor" : "battery",
        box: fZ([IB, ZB, TB], JB, oB, GB, vB, FB),
        formed: 1 === cB,
        level: nB
      }
    }
    class yN {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NN;
        this.guideSetting = BB, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = BB.read()
      }
      rU(BB) {
        var IB;
        const ZB = new Map;
        for (const TB of BB.baf2RxPlanList) {
          const BB = qN(TB);
          ZB.set(gN(BB.box.ctrl), BB)
        }
        this.plans = ZB, this.layouts = new Map((null !== (IB = BB.baf2RxLayouts) && void 0 !== IB ? IB : []).map((BB => {
          let [IB, ZB, TB, JB] = BB;
          return [gN([IB, ZB, TB]), JB]
        }))), this.predicted.clear(), BB.baf2RxFormedAt && (this.formed = {
          ctrl: BB.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const TB of [...this.startersOff]) {
          const BB = ZB.get(TB);
          BB && !BB.formed || this.startersOff.delete(TB)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((BB => this.planByKey(BB)))
      }
      planAt(BB) {
        return this.planByKey(gN(BB))
      }
      predictSize(BB, IB) {
        this.predicted.set(gN(BB), IB), this.changed()
      }
      unpredict(BB) {
        this.predicted.delete(gN(BB)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(BB) {
        var IB;
        const ZB = gN(BB);
        return this.predicted.has(ZB) ? null : null !== (IB = this.layouts.get(ZB)) && void 0 !== IB ? IB : null
      }
      showsStarter(BB) {
        return !this.startersOff.has(gN(BB))
      }
      setStarter(BB, IB) {
        const ZB = gN(BB);
        IB ? this.startersOff.delete(ZB) : this.startersOff.add(ZB), this.changed()
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
        const IB = this.plans.get(BB);
        if (!IB) return null;
        const ZB = this.predicted.get(BB);
        return ZB ? {
          ...IB,
          box: AZ(IB.box, IB.kind, ZB[0], ZB[1], ZB[2])
        } : IB
      }
      changed() {
        this.version++;
        for (const BB of this.listeners) BB()
      }
    }
    var UN = ZB(201);
    const WN = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function dN(BB, IB, ZB, TB) {
      const JB = BB.length / 3;
      for (let oB = 0; oB < WN.length / 3; oB++) BB.push(WN[3 * oB] * TB[0] / 2 + ZB[0], WN[3 * oB + 1] * TB[1] / 2 + ZB[1], WN[3 * oB + 2] * TB[2] / 2 + ZB[2]);
      for (let oB = JB; oB < JB + 24; oB += 4) IB.push(oB, oB + 1, oB + 2, oB, oB + 2, oB + 3)
    }

    function CN(BB, IB, ZB) {
      const TB = IB[0][0],
        JB = [],
        oB = [];
      for (const [GB, vB] of IB) dN(JB, oB, [GB[0] - TB[0], GB[1] - TB[1], GB[2] - TB[2]], vB);
      return BB.createGameMesh({
        positions: JB,
        indices: oB
      }, ZB, TB)
    }

    function QN(BB, IB) {
      const ZB = BB.w - 2,
        TB = BB.d - 2;
      return 1 === function(BB, IB, ZB, TB) {
        const [JB, oB, GB] = BB;
        if (Number(JB <= 2) + Number(oB <= 2) + Number(GB <= 2) >= 2) return function(BB, IB, ZB) {
          return (BB + IB + ZB) % 2 === 0 ? 1 : 3
        }(IB, ZB, TB);
        const [vB, kB] = JB >= oB && JB >= GB ? [ZB, TB] : oB >= GB ? [IB, TB] : [IB, ZB];
        return vB % 2 === 0 && kB % 2 === 0 ? 1 : 3
      }([ZB, BB.h - 2, TB], IB % ZB, Math.floor(IB / (ZB * TB)), Math.floor(IB / ZB) % TB) ? "rod" : "channel"
    }

    function sN(BB, IB, ZB) {
      if ("reactor" !== BB.kind || BB.formed || !IB) return !1;
      const TB = xZ(BB.box);
      for (let JB = 0; JB < TB; JB++) {
        const BB = ZB(JB);
        if (null !== BB && aZ(BB)) return !1
      }
      return !0
    }

    function wN(BB, IB, ZB, TB, JB) {
      var oB;
      let GB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const vB = BT(BB.box, IB),
        kB = JT(BB.kind, vB, ZB);
      if ("wrong" === kB || "blocked" === kB) return "wrong";
      if (!JB) return null;
      if ("inside" === vB && "reactor" === BB.kind && "Air" === HZ(ZB)) {
        if (null !== GB) {
          var cB;
          const ZB = Gz[vz(GB, IT(BB.box, IB))];
          return ZB && null !== (cB = ik(ZB)) && void 0 !== cB ? cB : null
        }
        if (TB) return QN(BB.box, IT(BB.box, IB))
      }
      if ("missing" !== kB) return null;
      const nB = oT(BB.kind, vB);
      return null === nB ? null : null !== (oB = ik(nB)) && void 0 !== oB ? oB : null
    }
    const ON = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function YN(BB, IB, ZB) {
      const TB = ZB => {
        const TB = IB(VZ(BB.box, ZB));
        return null !== TB && function(BB, IB) {
          return "reactor" !== BB.kind || IB !== DZ(BB.box) && "inside" !== BT(BB.box, IB)
        }(BB, ZB) && "ok" !== JT(BB.kind, BT(BB.box, ZB), TB)
      };
      if (ZB) {
        const oB = SZ(BB.box, [Math.floor(ZB[0]), Math.floor(ZB[1]), Math.floor(ZB[2])]);
        if (oB >= 0 && (TB(oB) || (JB = oB, "reactor" === BB.kind && "inside" === BT(BB.box, JB) && "Air" === IB(VZ(BB.box, JB))))) return oB
      }
      var JB;
      const oB = xZ(BB.box);
      for (let GB = 0; GB < oB; GB++)
        if (TB(GB)) return GB;
      return -1
    }

    function iN(BB, IB) {
      return Math.floor(IB / (BB.w * BB.d))
    }

    function pN(BB, IB, ZB) {
      return ZB >= 0 && iN(BB, IB) > iN(BB, ZB)
    }

    function aN(BB, IB) {
      return IB >= 0 && BB.h >= 3 && iN(BB, IB) === BB.h - 1
    }

    function HN(BB) {
      const IB = HZ(BB);
      return IB === UZ || "Collider" === IB || "Laser" === IB || IB.startsWith("_Collider ")
    }

    function MN(BB, IB, ZB, TB) {
      if (TB(BB)) return null;
      if (!ON.every((IB => {
          let [TB, JB, oB] = IB;
          const GB = ZB([BB[0] + TB, BB[1] + JB, BB[2] + oB]);
          return null !== GB && !XZ("reactor", GB) && "reactor" !== MZ(GB)
        }))) return null;
      const JB = LZ("reactor").min,
        oB = fZ([BB[0], BB[1], BB[2]], function(BB, IB) {
          const ZB = IB[0] - (BB[0] + .5),
            TB = IB[2] - (BB[2] + .5);
          return Math.abs(ZB) >= Math.abs(TB) ? ZB >= 0 ? 2 : 4 : TB >= 0 ? 1 : 3
        }(BB, IB), JB, JB, JB, lZ("reactor", JB)),
        GB = DZ(oB);
      let vB = !0;
      for (let kB = 0; kB < xZ(oB) && vB; kB++) {
        if (kB === GB) continue;
        const BB = VZ(oB, kB),
          IB = ZB(BB);
        vB = !TB(BB) && (null === IB || !HN(IB))
      }
      return {
        box: oB,
        fits: vB
      }
    }
    const jN = Yk,
      PN = "baf2Goal",
      RN = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      rN = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      mN = .4;

    function XN(BB, IB) {
      let [ZB, TB, JB] = BB;
      const oB = Rk([ZB - .02, TB - .02, JB - .02], [ZB + 1.02, TB + 1.02, JB + 1.02], .07);
      return IB && (oB.push([
        [ZB + .5, TB + 1 + .7, JB + .5],
        [.08, 1.4, .08]
      ]), oB.push([
        [ZB + .5, TB + 1 + 1.4 + .2, JB + .5],
        [mN, mN, mN]
      ])), oB
    }

    function LN(BB, IB) {
      let [ZB, TB, JB] = IB;
      return BB.isBlockInLoadedChunk(ZB, TB, JB) ? BB.blockIdToBlockName(BB.getBlockId(ZB, TB, JB)) : null
    }
    let eN = null;
    const uN = new Set;
    let fN = null;

    function lN(BB) {
      eN = BB;
      for (const IB of uN) IB(BB)
    }
    class AN {
      constructor(BB) {
        var IB;
        this.plans = BB, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (IB = BB => {
          var IB, ZB;
          this.setGoal(null !== (IB = null === BB || void 0 === BB ? void 0 : BB.goal) && void 0 !== IB ? IB : null, null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.startsBattery) && void 0 !== ZB && ZB)
        }, fN ??= [jJ.l.subscribe("setDirectionArrow", (BB => {
          let {
            id: IB,
            position: ZB,
            text: TB
          } = BB;
          IB === PN && lN({
            goal: [Math.floor(ZB[0]), Math.floor(ZB[1]), Math.floor(ZB[2])],
            startsBattery: JSON.stringify(null !== TB && void 0 !== TB ? TB : null).includes("arrowStartBattery")
          })
        })), jJ.l.subscribe("clearDirectionArrow", (BB => {
          let {
            id: IB
          } = BB;
          null !== IB && IB !== PN || lN(null)
        }))], uN.add(IB), IB(eN), () => {
          uN.delete(IB)
        })
      }
      onAfterRender(BB, IB) {
        const ZB = performance.now();
        if (this.cues.length > 0) {
          const IB = .55 + .45 * Math.sin(ZB / 1100 * Math.PI * 2);
          for (const ZB of this.cues) BB.setGameMesh(ZB, {
            visibility: IB
          })
        }
        if (ZB - this.lastCheckMs < 150) return;
        this.lastCheckMs = ZB;
        const TB = this.plans.all().filter((BB => {
            const [ZB, TB, JB] = BB.box.ctrl;
            return (!BB.formed || null !== this.plans.layoutOf(BB.box.ctrl)) && (ZB - IB[0]) ** 2 + (TB - IB[1]) ** 2 + (JB - IB[2]) ** 2 <= 2304
          })),
          JB = function(BB, IB) {
            const ZB = UN.f.YN,
              TB = new Map;
            for (const oB of IB) {
              const IB = VZ(oB.box, 0),
                GB = VZ(oB.box, xZ(oB.box) - 1),
                vB = [Math.min(IB[0], GB[0]), Math.min(IB[1], GB[1]), Math.min(IB[2], GB[2])].map((BB => Math.floor(BB / ZB))),
                kB = [Math.max(IB[0], GB[0]), Math.max(IB[1], GB[1]), Math.max(IB[2], GB[2])].map((BB => Math.floor(BB / ZB)));
              for (let ZB = vB[0]; ZB <= kB[0]; ZB++)
                for (let IB = vB[1]; IB <= kB[1]; IB++)
                  for (let oB = vB[2]; oB <= kB[2]; oB++) {
                    var JB;
                    TB.set(`${ZB},${IB},${oB}`, null !== (JB = BB.getChunkVersion(ZB, IB, oB)) && void 0 !== JB ? JB : -1)
                  }
            }
            return TB
          }(BB, TB);
        this.plans.getVersion() === this.storeVersion && (function(BB, IB) {
          if (BB.size !== IB.size) return !1;
          for (const [ZB, TB] of BB)
            if (IB.get(ZB) !== TB) return !1;
          return !0
        }(JB, this.chunkVersions) || ZB - this.lastRescanMs < 600) || (this.lastRescanMs = ZB, this.storeVersion = this.plans.getVersion(), this.chunkVersions = JB, this.redraw(BB, TB))
      }
      dispose(BB) {
        this.unwatch(), eN = null, this.clearMeshes(BB), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(BB, IB) {
        var ZB;
        (null === BB || void 0 === BB ? void 0 : BB.join()) === (null === (ZB = this.goal) || void 0 === ZB ? void 0 : ZB.join()) && IB === this.startsBattery || (this.goal = BB, this.startsBattery = IB, this.storeVersion = -1)
      }
      redraw(BB, IB) {
        const ZB = IB => LN(BB, IB),
          TB = new Map,
          JB = [],
          oB = this.plans.guideOn();
        for (const cB of IB) {
          const BB = oB && sN(cB, this.plans.showsStarter(cB.box.ctrl), (BB => ZB(VZ(cB.box, BB)))),
            IB = "reactor" === cB.kind ? this.plans.layoutOf(cB.box.ctrl) : null,
            GB = oB && !cB.formed ? YN(cB, ZB, this.goal) : -1;
          GB >= 0 && JB.push([VZ(cB.box, GB), aN(cB.box, GB)]);
          const vB = xZ(cB.box);
          for (let JB = 0; JB < vB; JB++) {
            const vB = VZ(cB.box, JB),
              kB = ZB(vB),
              nB = null === kB ? null : wN(cB, JB, kB, BB, oB, IB);
            if (null !== nB) {
              const BB = "wrong" !== nB && pN(cB.box, JB, GB),
                IB = BB ? `${nB}Dim` : nB;
              let ZB = TB.get(IB);
              ZB || (ZB = {
                draw: {
                  ghost: nB,
                  dim: BB
                },
                list: []
              }, TB.set(IB, ZB)), ZB.list.push(vB)
            }
          }
        }
        if (oB && this.startsBattery && this.goal) {
          const [BB, IB, JB] = this.goal, oB = [];
          for (const [TB, GB, vB] of RN) {
            const kB = [BB + TB, IB + GB, JB + vB];
            "Air" === ZB(kB) && oB.push(kB)
          }
          if (oB.length > 0) {
            var GB;
            const BB = null !== (GB = TB.get("cell")) && void 0 !== GB ? GB : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            BB.list.push(...oB), TB.set("cell", BB)
          }
        }
        const vB = [...TB.keys()].sort(),
          kB = [...vB.map((BB => `${BB}:${TB.get(BB).list.join(";")}`)), `cue:${JB.join(";")}`].join("|");
        if (kB !== this.shownKey) {
          this.shownKey = kB, this.clearMeshes(BB);
          for (const IB of vB) {
            const {
              draw: ZB,
              list: JB
            } = TB.get(IB);
            this.meshes.push(this.build(BB, ZB, JB))
          }
          for (const [IB, ZB] of JB) this.cues.push(CN(BB, XN(IB, ZB), rN))
        }
      }
      build(BB, IB, ZB) {
        let {
          ghost: TB,
          dim: JB
        } = IB;
        const {
          size: oB,
          colour: GB,
          alpha: vB
        } = jN[TB], kB = ZB[0], cB = [], nB = [];
        for (const [hB, zB, FB] of ZB) dN(cB, nB, [hB - kB[0] + .5, zB - kB[1] + .5, FB - kB[2] + .5], [oB, oB, oB]);
        return BB.createGameMesh({
          positions: cB,
          indices: nB
        }, {
          rgb: GB,
          alpha: vB * (JB ? .3 : 1)
        }, kB)
      }
      clearMeshes(BB) {
        for (const IB of [...this.meshes, ...this.cues]) BB.disposeGameMesh(IB);
        this.meshes = [], this.cues = []
      }
    }
    const tN = [.56, .83, 1],
      bN = [1, .3, .25];
    class xN {
      constructor(BB) {
        this.plans = BB, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(BB, IB, ZB) {
        var TB;
        const JB = performance.now();
        if (JB - this.lastCheckMs < 150) return;
        this.lastCheckMs = JB;
        const oB = IB => LN(BB, IB),
          GB = null === (TB = BB.FZB(IB)) || void 0 === TB ? void 0 : TB.name,
          vB = GB && "Reactor Frame" === HZ(GB) ? BB.getTargetedBlock() : null,
          kB = vB ? [vB.oq[0], vB.oq[1], vB.oq[2]] : null,
          cB = null !== kB && "Air" === oB(kB) && kB.every(((BB, IB) => Math.abs(BB + .5 - ZB[IB]) <= 8)) ? MN(kB, ZB, oB, (BB => this.inPlan(BB))) : null,
          nB = cB ? `${cB.box.ctrl.join()}|${cB.box.rot}|${cB.fits}` : "";
        nB !== this.shownKey && this.show(BB, nB, cB)
      }
      dispose(BB) {
        this.clear(BB), this.shownKey = ""
      }
      inPlan(BB) {
        return this.plans.all().some((IB => SZ(IB.box, BB) >= 0))
      }
      show(BB, IB, ZB) {
        if (this.clear(BB), this.shownKey = IB, !ZB) return;
        const {
          box: TB,
          fits: JB
        } = ZB, oB = JB ? tN : bN, {
          lo: GB,
          hi: vB
        } = Pk(TB);
        this.meshes.push(CN(BB, Rk(GB, vB, .05), {
          rgb: oB,
          alpha: 1
        }));
        const kB = [],
          cB = VZ(TB, 0)[1];
        for (let nB = 0; nB < TB.w * TB.d; nB++) {
          const [BB, , IB] = VZ(TB, nB);
          kB.push([
            [BB + .5, cB + .02 + .01, IB + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(CN(BB, kB, {
          rgb: oB,
          alpha: .25
        }))
      }
      clear(BB) {
        for (const IB of this.meshes) BB.disposeGameMesh(IB);
        this.meshes = []
      }
    }
    const EN = "buildAFactory2Game:";

    function DN(BB, IB, ZB) {
      const TB = BB => {
          const [ZB, TB, JB] = BB.box.ctrl;
          return ZB === IB[0] && TB === IB[1] && JB === IB[2]
        },
        JB = BB.find((BB => TB(BB) || SZ(BB.box, IB) >= 0));
      if (!JB) return null;
      const oB = function(BB, IB, ZB) {
        const {
          w: TB,
          h: JB,
          d: oB
        } = BB.box, GB = "reactor" === BB.kind ? `${EN}rxTitle` : `${EN}batTitle`;
        if (BB.formed) return {
          key: `${EN}lookPlanFormed`,
          kindKey: GB,
          w: TB,
          h: JB,
          d: oB,
          count: 0
        };
        let vB = 0,
          kB = 0;
        for (let nB = 0; nB < xZ(BB.box); nB++) {
          const IB = ZB(VZ(BB.box, nB)),
            TB = null === IB ? "ok" : JT(BB.kind, BT(BB.box, nB), IB);
          vB += "missing" === TB ? 1 : 0, kB += "wrong" === TB || "blocked" === TB ? 1 : 0
        }
        const cB = function(BB, IB, ZB) {
          if (IB < 0 || null === ZB) return;
          const TB = BT(BB.box, IB),
            JB = JT(BB.kind, TB, ZB);
          return "blocked" === JB ? `${EN}lookWhy_blocked` : "wrong" === JB ? "ctrl" === TB ? `${EN}lookWhy_ctrl` : `${EN}lookWhy_reactor_${TB}` : void 0
        }(BB, SZ(BB.box, IB), ZB([IB[0], IB[1], IB[2]]));
        if (vB > 0) return {
          key: `${EN}lookPlanToBuild`,
          kindKey: GB,
          w: TB,
          h: JB,
          d: oB,
          count: vB,
          why: cB
        };
        if (kB > 0) return {
          key: `${EN}lookPlanTakeOut`,
          kindKey: GB,
          w: TB,
          h: JB,
          d: oB,
          count: kB,
          why: cB
        };
        return {
          key: "reactor" === BB.kind ? `${EN}lookPlanNoRods` : `${EN}lookPlanDone`,
          kindKey: GB,
          w: TB,
          h: JB,
          d: oB,
          count: 0
        }
      }(JB, IB, ZB);
      return "reactor" === JB.kind && TB(JB) ? {
        ...oB,
        ctrl: !0
      } : oB
    }

    function KN(BB, IB) {
      return BB === IB || null !== BB && null !== IB && BB.key === IB.key && BB.kindKey === IB.kindKey && BB.w === IB.w && BB.h === IB.h && BB.d === IB.d && BB.count === IB.count && BB.why === IB.why && BB.ctrl === IB.ctrl
    }

    function VN() {
      return performance.now()
    }
    class SN {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VN;
        this.ticket = BB, this.sent = IB, this.backstopMs = ZB, this.now = TB, this.queuedAt = void 0, this.queuedAt = TB()
      }
      answered() {
        const BB = this.now(),
          IB = this.sent.leftAt(this.ticket);
        return null !== IB && BB - IB > 4e3 || BB - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Bg {
      constructor() {
        this.echoes = []
      }
      add(BB) {
        this.echoes = this.echoes.filter((BB => !BB.answered())), this.echoes.push(BB)
      }
      answered() {
        var BB, IB;
        return null === (BB = null === (IB = this.echoes.at(-1)) || void 0 === IB ? void 0 : IB.answered()) || void 0 === BB || BB
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((BB => BB.answered()))
      }
      age() {
        var BB, IB;
        return null !== (BB = null === (IB = this.echoes.at(-1)) || void 0 === IB ? void 0 : IB.age()) && void 0 !== BB ? BB : null
      }
      clear() {
        this.echoes = []
      }
    }
    class Ig {
      constructor(BB) {
        this.send = BB, this.value = null, this.sent = null, this.echoes = new Bg, this.down = !1, this.timer = null
      }
      shown(BB) {
        return null === this.value ? BB : this.down || this.value !== this.sent ? this.value : BB === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), BB) : this.value
      }
      pendingFor(BB) {
        return null !== this.value && this.value === this.sent && BB !== this.value ? this.echoes.age() : null
      }
      assume(BB, IB) {
        this.disarm(), this.down = !1, this.value = BB, this.sent = BB, this.echoes.clear(), this.echoes.add(IB)
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
    class Zg {
      constructor() {
        this.pending = new Map
      }
      set(BB, IB, ZB) {
        var TB;
        const JB = null !== (TB = this.pending.get(BB)) && void 0 !== TB ? TB : {
          on: IB,
          echoes: new Bg
        };
        JB.on = IB, JB.echoes.add(ZB), this.pending.set(BB, JB)
      }
      shown(BB) {
        let IB = BB;
        for (const [ZB, {
            on: TB,
            echoes: JB
          }] of this.pending) 0 !== (BB & ZB) === TB && JB.agreeCounts() || JB.answered() ? this.pending.delete(ZB) : IB = TB ? IB | ZB : IB & ~ZB;
        return IB
      }
      pendingMask() {
        let BB = 0;
        for (const IB of this.pending.keys()) BB |= IB;
        return BB
      }
      pendingFor(BB) {
        let IB = null;
        for (const [TB, {
            on: JB,
            echoes: oB
          }] of this.pending) {
          if (void 0 !== BB && 0 !== (BB & TB) === JB) continue;
          const GB = oB.age();
          var ZB;
          if (null !== GB) IB = Math.max(null !== (ZB = IB) && void 0 !== ZB ? ZB : 0, GB)
        }
        return IB
      }
      clear() {
        this.pending.clear()
      }
    }
    class Tg {
      constructor() {
        this.dims = null, this.echoes = new Bg, this.unmet = null
      }
      shown(BB) {
        var IB;
        return this.dims && (Jg(this.dims, BB) && this.echoes.agreeCounts() || this.echoes.answered()) && (Jg(this.dims, BB) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (IB = this.dims) && void 0 !== IB ? IB : BB
      }
      takeUnmet() {
        const BB = this.unmet;
        return this.unmet = null, BB
      }
      set(BB, IB) {
        this.dims = BB, this.echoes.add(IB)
      }
      pendingFor(BB) {
        return null === this.dims || BB && Jg(this.dims, BB) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function Jg(BB, IB) {
      return BB[0] === IB[0] && BB[1] === IB[1] && BB[2] === IB[2]
    }
    class og {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VN;
        this.now = BB, this.taps = new Map
      }
      tap(BB, IB, ZB) {
        return !this.busy(BB) && (this.taps.set(BB, {
          at: this.now(),
          done: IB
        }), ZB(), !0)
      }
      settle(BB) {
        for (const [IB, ZB] of [...this.taps]) ZB.done(BB) && this.taps.delete(IB)
      }
      busy(BB) {
        const IB = this.taps.get(BB);
        return !!IB && (!(this.now() - IB.at >= 3e3) || (this.taps.delete(BB), !1))
      }
      busyIds() {
        const BB = new Set;
        for (const IB of [...this.taps.keys()]) this.busy(IB) && BB.add(IB);
        return BB
      }
      clear() {
        this.taps.clear()
      }
    }

    function Gg(BB) {
      return {
        send: IB => BB.track(IB),
        sendUrgent: (IB, ZB) => BB.track(IB, {
          urgent: !0,
          supersedes: ZB
        }),
        leftAt: IB => BB.leftAt(IB),
        holdReserve: () => BB.holdUrgentReserve(),
        answerMs: RG
      }
    }

    function vg() {
      return performance.now()
    }

    function kg(BB) {
      const IB = BB.baf2RxNeed.map((BB => {
        let [IB, ZB] = BB;
        return [IB, ZB]
      }));
      return JSON.stringify([BB.baf2RxFormed, IB, BB.baf2RxBad, BB.baf2RxCells])
    }

    function cg(BB, IB) {
      const ZB = 0 !== (IB & zI),
        TB = 0 !== (BB.baf2RxFlags & zI);
      return !ZB || TB || "running" !== BB.baf2RxState && "idle" !== BB.baf2RxState ? !ZB && TB && "scram" === BB.baf2RxState && BB.baf2RxFuel > 0 ? "idle" : BB.baf2RxState : "scram"
    }

    function ng(BB) {
      return JSON.stringify([BB.baf2BatFormed, BB.baf2BatNeed, BB.baf2BatBad])
    }

    function hg(BB) {
      return BB.join(",")
    }
    class zg {
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
    class Fg {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(BB, IB) {
        this.lastAt = BB, this.lastUntil = BB + IB
      }
      answered(BB) {
        return this.lastAt >= BB || BB < this.lastUntil
      }
    }
    class Ng {
      constructor(BB, IB) {
        this.link = BB, this.now = IB, this.hold = new Tg, this.picked = null, this.notTaken = null
      }
      shown(BB) {
        const IB = this.hold.shown(BB);
        if (this.hold.takeUnmet() && this.picked) {
          var ZB;
          const {
            plans: IB,
            ctrl: TB,
            at: JB
          } = this.picked;
          this.picked = null, IB.unpredict(TB), null === (ZB = this.notTaken) || void 0 === ZB || ZB.call(this, BB, JB)
        }
        return IB
      }
      pendingFor(BB) {
        return this.hold.pendingFor(BB)
      }
      TF(BB, IB, ZB) {
        BB.predictSize(IB, ZB), this.picked = {
          plans: BB,
          ctrl: IB,
          at: this.now()
        };
        const TB = this.link.send(hI(IB, "plan", ...ZB));
        this.hold.set(ZB, new SN(TB, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class gg {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vg;
        this.plans = BB, this.readInterior = IB, this.link = ZB, this.now = TB, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Zg, this.throttle = void 0, this.oneShots = void 0, this.listeners = new zg, this.redraw = null, this.releaseReserve = null, this.size = new Ng(ZB, TB), this.oneShots = new og(TB), this.throttle = new Ig((BB => this.echo(this.link.send(this.command("throttle", BB)))))
      }
      set(BB) {
        !BB.baf2RxOpen && this.raw && hg(this.raw.baf2RxAt) === hg(BB.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(BB), this.Gq(BB)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(BB) {
        this.size.notTaken = BB
      }
      resize(BB) {
        this.raw && (this.size.TF(this.plans, this.raw.baf2RxAt, BB), this.Gq(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const BB = this.raw.baf2RxAt;
        this.plans.setStarter(BB, !this.plans.showsStarter(BB)), this.Gq(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.Gq(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.Gq(this.raw)
      }
      send(BB) {
        if (this.raw) {
          for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
          this.link.send(this.command(BB, ...ZB))
        }
      }
      tap(BB, IB) {
        this.raw && this.oneShots.tap(BB, function(BB, IB) {
          if ("start" === BB) return BB => 0 === (BB.baf2RxFlags & zI);
          if ("odConfirm" === BB) return BB => 0 !== (BB.baf2RxFlags & FI);
          const ZB = kg(IB);
          return BB => kg(BB) !== ZB
        }(BB, this.raw), IB) && ("start" === BB && (this.startedAt = this.now()), this.Gq(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(zI, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(BB, IB) {
        if (!this.raw) return;
        const ZB = BB === zI ? this.command(IB ? "scram" : "start") : this.command("od", IB ? 1 : 0),
          TB = IB && BB === zI,
          JB = `${nI} ${this.raw.baf2RxAt.join(" ")} `,
          oB = this.echo(TB ? this.link.sendUrgent(ZB, (BB => {
            const IB = BB.startsWith(JB) ? BB.slice(JB.length).split(" ")[0] : null;
            return "throttle" === IB || "start" === IB
          })) : this.link.send(ZB));
        this.flags.set(BB, IB, oB), TB && this.throttle.assume(0, oB), this.Gq(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(BB) {
        this.throttle.drag(BB), this.raw && this.Gq(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.Gq(this.raw)
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
        for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
        return hI(this.raw.baf2RxAt, BB, ...ZB)
      }
      echo(BB) {
        return new SN(BB, this.link, this.link.answerMs, this.now)
      }
      Gq(BB) {
        var IB;
        this.raw = BB;
        const ZB = this.flags.shown(BB.baf2RxFlags),
          TB = {
            ...BB,
            baf2RxFlags: ZB,
            baf2RxTarget: this.throttle.shown(BB.baf2RxTarget),
            baf2RxState: cg(BB, ZB)
          },
          JB = this.size.shown(TB.baf2RxDims),
          oB = this.throttle.pendingFor(),
          GB = [this.throttle.pendingFor(BB.baf2RxTarget), this.flags.pendingFor(BB.baf2RxFlags), this.size.pendingFor(BB.baf2RxDims)].filter((BB => null !== BB)),
          vB = GB.length > 0 ? Math.max(...GB) : null,
          kB = this.oneShots.busyIds(),
          cB = TB.baf2RxAt;
        let nB, hB, zB = null,
          FB = [Math.max(0, JB[0] - 2), Math.max(0, JB[1] - 2), Math.max(0, JB[2] - 2)];
        if (TB.baf2RxFormed) {
          const [BB, IB, ZB] = TB.baf2RxDims;
          FB = [Math.max(0, BB - 2), Math.max(0, IB - 2), Math.max(0, ZB - 2)], nB = Array.from(TB.baf2RxCells, Number), hB = `${FB.join(",")}:${TB.baf2RxCells}`
        } else {
          var NB;
          const BB = null === (NB = this.plans.planAt(cB)) || void 0 === NB ? void 0 : NB.box,
            IB = BB ? AZ(BB, "reactor", ...JB) : fZ(cB, 1, ...JB, lZ("reactor", JB[0])),
            ZB = this.readInterior(IB);
          zB = Ik(FB, ZB), nB = ZB, hB = `${FB.join(",")}:${ZB.join("")}`
        }(null === (IB = this.looksOf) || void 0 === IB ? void 0 : IB.key) !== hB && (this.looksOf = {
          key: hB,
          looks: kk(FB, nB)
        }), this.view = {
          status: TB,
          dims: JB,
          plan: zB,
          inner: FB,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(cB),
          odConfirmed: this.odConfirmed || 0 !== (TB.baf2RxFlags & WI),
          guide: this.plans.guideOn(),
          throttlePending: null !== oB,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== vB && vB >= 5e3,
          busy: kB,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== vB || kB.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.Gq(this.raw)
        }), 250))
      }
    }
    class qg {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vg;
        this.plans = BB, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new zg, this.redraw = null, this.size = new Ng(IB, ZB), this.oneShots = new og(ZB)
      }
      set(BB) {
        !BB.baf2BatOpen && this.view && hg(this.view.status.baf2BatAt) === hg(BB.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(BB), this.Gq(BB)
      }
      tap(BB, IB) {
        if (!this.view) return;
        const ZB = ng(this.view.status);
        this.oneShots.tap(BB, (BB => ng(BB) !== ZB), IB) && this.Gq(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(BB) {
        this.size.notTaken = BB
      }
      resize(BB) {
        this.view && (this.size.TF(this.plans, this.view.status.baf2BatAt, BB), this.Gq(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.Gq(this.view.status)
      }
      subscribe(BB) {
        return this.listeners.subscribe(BB)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      Gq(BB) {
        const IB = this.size.shown(BB.baf2BatDims),
          ZB = this.oneShots.busyIds();
        this.view = {
          status: BB,
          dims: IB,
          ah: Qk(IB, BB.baf2BatDims) ? BB.baf2BatCapacity : hk(...IB),
          guide: this.plans.guideOn(),
          busy: ZB
        }, this.listeners.notify(), ZB.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.Gq(this.view.status)
        }), 250))
      }
    }
    const yg = "buildAFactory2Game:";

    function Ug() {
      var BB;
      const IB = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!IB) return null;
      const ZB = IB.querySelector(".ExitButton");
      return function(BB, IB) {
        const ZB = IB ? IB.left - 8 : BB.right;
        return {
          left: BB.left,
          top: BB.top,
          width: Math.max(0, ZB - BB.left),
          height: BB.height
        }
      }(IB.getBoundingClientRect(), null !== (BB = null === ZB || void 0 === ZB ? void 0 : ZB.getBoundingClientRect()) && void 0 !== BB ? BB : null)
    }
    const Wg = (0, TB.memo)((function(BB) {
      let {
        store: IB
      } = BB;
      const {
        t: ZB
      } = (0, YJ.G)(), [JB, oB] = (0, TB.useState)((() => IB.get())), [GB, vB] = (0, TB.useState)((() => performance.now()));
      (0, TB.useEffect)((() => (oB(IB.get()), IB.subscribe((() => {
        oB(IB.get()), vB(performance.now())
      })))), [IB]);
      const {
        alarm: kB,
        boomAt: cB
      } = JB, nB = null !== kB && null !== kB.secs, [hB, zB] = (0, TB.useState)(null);
      (0, TB.useEffect)((() => {
        if (!nB) return;
        zB(Ug());
        const BB = setInterval((() => {
          vB(performance.now()), zB(Ug())
        }), 250);
        return () => {
          clearInterval(BB)
        }
      }), [nB]);
      const [FB, NB] = (0, TB.useState)(!1);
      return (0, TB.useEffect)((() => {
        if (cB === -1 / 0) return;
        NB(!0);
        const BB = setTimeout((() => {
          NB(!1)
        }), 1300);
        return () => {
          clearTimeout(BB)
        }
      }), [cB]), (0, Oo.jsxs)(Oo.Fragment, {
        children: [null !== kB && (0, Oo.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: ZB(kB.hot ? `${yg}rxAlarmSiren` : `${yg}rxAlarmDamaged`, {
            amount: String(kB.damage)
          })
        }), null !== kB && null !== kB.secs && (0, Oo.jsx)("div", {
          className: hB ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== hB && void 0 !== hB ? hB : void 0,
          "aria-live": "assertive",
          children: ZB(`${yg}rxAlarmCountdown`, {
            amount: String((gB = kB.secs, qB = GB - kB.receivedAt, Math.max(1, Math.ceil(gB - qB / 1e3))))
          })
        }), FB && (0, Oo.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var gB, qB
    }));
    class dg {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      rU(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const ZB = BB.baf2RxAlarmAt.join(",");
        let TB = this.snapshot.boomAt;
        if (BB.baf2RxAlarmBoom) this.byReactor.delete(ZB), TB = IB;
        else if (BB.baf2RxAlarmDamage <= 0) this.byReactor.delete(ZB);
        else {
          var JB;
          this.byReactor.set(ZB, {
            damage: BB.baf2RxAlarmDamage,
            secs: null !== (JB = BB.baf2RxAlarmSecs) && void 0 !== JB ? JB : null,
            hot: !0 === BB.baf2RxAlarmHot,
            receivedAt: IB
          })
        }
        this.Gq(TB)
      }
      retain(BB) {
        let IB = !1;
        for (const ZB of [...this.byReactor.keys()]) BB.has(ZB) || (this.byReactor.delete(ZB), IB = !0);
        IB && this.Gq(this.snapshot.boomAt)
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
      Gq(BB) {
        let IB = null;
        for (const ZB of this.byReactor.values())(!IB || ZB.damage > IB.damage) && (IB = ZB);
        this.snapshot = {
          alarm: IB,
          boomAt: BB
        };
        for (const ZB of this.listeners) ZB()
      }
    }
    const Cg = {
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

    function Qg(BB) {
      return [BB[0], BB[1], BB[2]]
    }

    function sg(BB) {
      return `${BB[0]},${BB[1]},${BB[2]}`
    }
    class wg {
      constructor(BB) {
        if (this.plans = BB, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var BB;
            return {
              active: this.glows.flatMap((BB => {
                let {
                  record: IB
                } = BB;
                return IB ? [IB] : []
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
      check(BB, IB, ZB) {
        const TB = new Set(IB.map((BB => sg(BB.box.ctrl))));
        for (const GB of function(BB, IB) {
            const ZB = [],
              TB = new Map(BB);
            BB.clear();
            for (const JB of IB) {
              const IB = gN(JB.box.ctrl),
                oB = JB.formed ? JB.level : 0;
              BB.set(IB, oB), oB > 0 && 0 === TB.get(IB) && ZB.push(JB)
            }
            return ZB
          }(this.levels, this.plans.all())) TB.has(sg(GB.box.ctrl)) && this.show(BB, GB, "on", ZB);
        const JB = this.plans.lastFormed();
        if (null === JB || JB.receivedAt <= this.flashedAt) return null;
        this.flashedAt = JB.receivedAt;
        const oB = function(BB, IB) {
          var ZB;
          const TB = gN(BB);
          return null !== (ZB = IB.find((BB => gN(BB.box.ctrl) === TB))) && void 0 !== ZB ? ZB : null
        }(JB.ctrl, IB);
        return oB && this.show(BB, oB, "formed", ZB), oB
      }
      fade(BB, IB) {
        0 !== this.glows.length && (this.glows = this.glows.filter((ZB => {
          let {
            mesh: TB,
            glow: JB,
            startMs: oB,
            record: GB
          } = ZB;
          const vB = (IB - oB) / Cg[JB].ms;
          return vB >= 1 ? (BB.disposeGameMesh(TB), GB && (GB.endMs = IB), !1) : (BB.setGameMesh(TB, {
            visibility: "formed" === JB ? 1 - vB : Math.sin(Math.PI * vB)
          }), !0)
        })))
      }
      dispose(BB) {
        for (const {
            mesh: ZB
          }
          of this.glows) BB.disposeGameMesh(ZB);
        this.glows = [], this.levels.clear();
        const IB = "undefined" !== typeof window ? window : null;
        (null === IB || void 0 === IB ? void 0 : IB.baf2Glows) === this.devAccessor && delete IB.baf2Glows
      }
      show(BB, IB, ZB, TB) {
        const {
          lo: JB,
          hi: oB
        } = Pk(IB.box);
        let GB = null;
        this.devLog && (GB = {
          glow: ZB,
          ctrl: Qg(IB.box.ctrl),
          lo: Qg(JB),
          hi: Qg(oB),
          startMs: TB,
          endMs: null
        }, this.devLog.push(GB), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(BB, ZB, Rk(JB, oB, Cg[ZB].thick)),
          glow: ZB,
          startMs: TB,
          record: GB
        })
      }
      build(BB, IB, ZB) {
        const TB = CN(BB, ZB, {
          rgb: Cg[IB].colour,
          alpha: 1
        });
        return BB.setGameMesh(TB, {
          visibility: 0
        }), TB
      }
    }
    const Og = 1 / .6,
      Yg = {
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
        blendMode: rv.g.Standard,
        soft: !0
      },
      ig = {
        ...Yg,
        size: [.25, .4],
        count: 2
      };

    function pg(BB) {
      return {
        colours: [BB, BB],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: rv.g.Add,
        soft: !1
      }
    }
    const ag = pg([150, 225, 255]),
      Hg = pg([185, 145, 255]),
      Mg = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function jg(BB) {
      const IB = PI[BB];
      return null === IB.fuelSlot || JZ(IB) ? Mg.includes(BB) ? Hg : ag : Yg
    }
    const Pg = {
        kind: "smokePuff"
      },
      Rg = [.2, .025, .2];

    function rg(BB, IB) {
      const [
        [ZB, TB, JB],
        [oB, GB, vB]
      ] = BB.colours;
      return {
        texture: BB.soft ? Pg : "square_particle",
        ah: IB,
        minLifeTime: BB.life[0] / Og,
        maxLifeTime: BB.life[1] / Og,
        minEmitPower: BB.power[0] * Og,
        maxEmitPower: BB.power[1] * Og,
        minSize: BB.size[0],
        maxSize: BB.size[1],
        emitRate: 0,
        gravity: [0, BB.lift * Og * Og, 0],
        dir1: [-BB.spread, 1, -BB.spread],
        dir2: [BB.spread, 1, BB.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [ZB, TB, JB, BB.alpha],
          maxColor: [oB, GB, vB, BB.alpha]
        }, {
          timeFraction: 1,
          minColor: [ZB, TB, JB, 0],
          maxColor: [oB, GB, vB, 0]
        }],
        blendMode: BB.blendMode
      }
    }
    class mg {
      constructor(BB) {
        this.fixed = BB, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(BB, IB, ZB) {
        var TB;
        if (ZB === this.lastFrame) return !1;
        this.lastFrame = ZB;
        const JB = this.at;
        JB[0] = IB[0] + .5, JB[1] = IB[1] + 1.025, JB[2] = IB[2] + .5;
        const oB = null !== (TB = this.fixed) && void 0 !== TB ? TB : vB() ? ig : Yg;
        let GB = this.particles.get(oB);
        return GB || (GB = BB.createParticles(function(BB) {
          return rg(BB, Math.ceil(12 * BB.count * BB.life[1]) + BB.count)
        }(oB), {
          pos: JB,
          half: Rg
        }), this.particles.set(oB, GB)), GB.moveTo(JB), GB.emit(oB.count), !0
      }
      dispose() {
        for (const BB of this.particles.values()) BB.stop();
        this.particles.clear()
      }
    }
    class Xg {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(BB) {
        this.indexed = !0;
        for (const IB of iI) {
          const ZB = jg(IB);
          for (let TB = 1; TB <= 4; TB++) {
            const JB = BB.blockNameToBlockId(`${IB}|meta|rot${TB}|Running`, !0);
            if (null === JB) continue;
            let oB = this.pufferIndexByStyle.get(ZB);
            void 0 === oB && (oB = this.pufferList.push(new mg(ZB === Yg ? null : ZB)) - 1, this.pufferIndexByStyle.set(ZB, oB)), this.pufferIndexById[JB] = oB + 1
          }
        }
      }
      onAfterRender(BB, IB) {
        this.indexed || this.index(BB);
        const ZB = performance.now(),
          TB = 0 === this.lastMs ? 0 : Math.min(ZB - this.lastMs, 250) / 1e3;
        this.lastMs = ZB, this.frame++, BB.particlesEnabled() ? (this.scan(BB, IB), this.puff(BB, TB)) : this.sources = []
      }
      dispose() {
        for (const BB of this.pufferList) BB.dispose();
        this.sources = [], this.found = []
      }
      scan(BB, IB) {
        0 === this.scanRow && (this.origin = [Math.floor(IB[0]) - 12, Math.floor(IB[1]) - 6, Math.floor(IB[2]) - 12]);
        const ZB = Math.min(this.scanRow + 16, 325),
          [TB, JB, oB] = this.origin,
          GB = this.hits;
        GB.length = 0;
        for (let vB = this.scanRow; vB < ZB; vB++) {
          const IB = TB + vB % 25,
            ZB = JB + Math.floor(vB / 25);
          BB.scanBlocks(IB, ZB, oB, IB + 1, ZB + 1, oB + 25, this.pufferIndexById, GB)
        }
        for (let vB = 0; vB < GB.length; vB += 4) {
          const BB = GB[vB + 3];
          this.found.push({
            pos: [GB[vB], GB[vB + 1], GB[vB + 2]],
            KG: BB,
            puffer: this.pufferList[this.pufferIndexById[BB] - 1]
          })
        }
        this.scanRow = ZB, 325 === ZB && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(BB, IB) {
        const ZB = this.sources.length;
        if (0 !== ZB) {
          this.budget = Math.min(this.budget + Math.min(ZB / 1.2, 12) * IB, 2);
          for (let IB = 0; IB < ZB && this.budget >= 1; IB++) {
            const IB = this.sources[this.cursor % ZB];
            this.cursor = (this.cursor + 1) % ZB, BB.getBlockId(IB.pos[0], IB.pos[1], IB.pos[2]) === IB.KG && (IB.puffer.puff(BB, IB.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Lg = {
        ...pg([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      eg = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function ug(BB) {
      return 0 === BB.spots.length ? 0 : Math.min(1 * BB.level, 4)
    }

    function fg(BB) {
      return 0 === BB.glass.length ? 0 : Math.min(.75 * BB.level, 3)
    }

    function lg(BB) {
      return `${BB.ctrl.join(",")}:${BB.rot}:${BB.cu},${BB.cv}:${BB.w},${BB.h},${BB.d}`
    }

    function Ag(BB, IB) {
      const ZB = IB.w - 2,
        TB = IB.h - 2,
        JB = IB.d - 2,
        oB = [];
      for (let GB = 0; GB < ZB * TB * JB; GB++) {
        const vB = GB % ZB,
          kB = Math.floor(GB / ZB) % JB,
          cB = Math.floor(GB / (ZB * JB));
        if (vB > 0 && vB < ZB - 1 && kB > 0 && kB < JB - 1 && cB > 0 && cB < TB - 1) continue;
        const nB = VZ(IB, ZT(IB, GB)),
          hB = LN(BB, nB);
        if (null !== hB && "Fuel Rod" === HZ(hB))
          for (const IB of eg) {
            const ZB = [nB[0] + IB[0], nB[1] + IB[1], nB[2] + IB[2]];
            bg(BB, ZB) && oB.push(xg(ZB, IB))
          }
      }
      return oB
    }

    function tg(BB, IB) {
      const {
        lo: ZB,
        hi: TB
      } = Pk(IB), JB = [];
      for (let oB = ZB[0]; oB < TB[0]; oB++)
        for (let IB = ZB[1]; IB < TB[1]; IB++) {
          const GB = oB === ZB[0] || oB === TB[0] - 1 || IB === ZB[1] || IB === TB[1] - 1 ? 1 : Math.max(1, TB[2] - 1 - ZB[2]);
          for (let vB = ZB[2]; vB < TB[2]; vB += GB) {
            const GB = [oB, IB, vB];
            if (!bg(BB, GB)) continue;
            const kB = oB === ZB[0] ? eg[1] : oB === TB[0] - 1 ? eg[0] : vB === ZB[2] ? eg[5] : vB === TB[2] - 1 ? eg[4] : IB === ZB[1] ? eg[3] : eg[2];
            JB.push(xg(GB, kB))
          }
        }
      return JB
    }

    function bg(BB, IB) {
      const ZB = LN(BB, IB);
      return null !== ZB && "Reactor Glass" === HZ(ZB)
    }

    function xg(BB, IB) {
      return [
        [BB[0] + .5 + .55 * IB[0], BB[1] + .5 + .55 * IB[1], BB[2] + .5 + .55 * IB[2]],
        [0 === IB[0] ? .4 : .02, 0 === IB[1] ? .4 : .02, 0 === IB[2] ? .4 : .02]
      ]
    }
    class Eg {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(BB, IB, ZB, TB) {
        const JB = [],
          oB = new Set;
        for (const cB of IB) {
          var GB, vB, kB;
          const {
            box: IB
          } = cB;
          if ("reactor" !== cB.kind || cB.level <= 0 || (IB.ctrl[0] - ZB[0]) ** 2 + (IB.ctrl[1] - ZB[1]) ** 2 + (IB.ctrl[2] - ZB[2]) ** 2 > 576) continue;
          const nB = lg(IB);
          oB.add(nB);
          let hB = this.spots.get(nB);
          if ((!hB || TB - hB.at > 3e3) && (hB = {
              at: TB,
              spots: Ag(BB, IB),
              glass: tg(BB, IB)
            }, this.spots.set(nB, hB)), 0 === hB.spots.length && 0 === hB.glass.length) continue;
          const zB = this.sparking.find((BB => BB.key === nB));
          JB.push({
            key: nB,
            level: cB.level,
            spots: hB.spots,
            glass: hB.glass,
            budget: null !== (GB = null === zB || void 0 === zB ? void 0 : zB.budget) && void 0 !== GB ? GB : 0,
            cursor: null !== (vB = null === zB || void 0 === zB ? void 0 : zB.cursor) && void 0 !== vB ? vB : 0,
            glassBudget: null !== (kB = null === zB || void 0 === zB ? void 0 : zB.glassBudget) && void 0 !== kB ? kB : 0
          })
        }
        for (const cB of this.spots.keys()) oB.has(cB) || this.spots.delete(cB);
        this.sparking = JB
      }
      emit(BB, IB, ZB) {
        var TB;
        if (0 === this.sparking.length || !BB.particlesEnabled() || ZB === this.lastFrame) return;
        this.lastFrame = ZB;
        let JB = 0,
          oB = 0;
        for (const NB of this.sparking) JB += ug(NB), oB += fg(NB);
        const GB = JB > 8 ? 8 / JB : 1,
          vB = oB > 6 ? 6 / oB : 1;
        let kB, cB = null,
          nB = null;
        for (const NB of this.sparking) NB.budget = Math.min(NB.budget + ug(NB) * GB * IB, 2), NB.budget >= 1 && (!cB || NB.budget > cB.budget) && (cB = NB), NB.glassBudget = Math.min(NB.glassBudget + fg(NB) * vB * IB, 2), NB.glassBudget >= 1 && (!nB || NB.glassBudget > nB.glassBudget) && (nB = NB);
        if (cB) cB.budget--, kB = cB.spots[cB.cursor++ % cB.spots.length];
        else {
          if (!nB) return;
          nB.glassBudget--, kB = nB.glass[Math.floor(Math.random() * nB.glass.length)]
        }
        const [hB, zB] = kB, FB = null !== (TB = this.emitter) && void 0 !== TB ? TB : this.create(BB, hB, zB);
        FB.moveTo(hB, zB), FB.emit(Lg.count)
      }
      dispose() {
        var BB;
        null === (BB = this.emitter) || void 0 === BB || BB.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(BB, IB, ZB) {
        const TB = Math.ceil(14 * Lg.count * Lg.life[1]) + Lg.count;
        return this.emitter = BB.createParticles(rg(Lg, TB), {
          pos: IB,
          half: ZB
        }), this.emitter
      }
    }
    const Dg = [2, 3.2],
      Kg = 1 / 3,
      Vg = 1 / .6,
      Sg = {
        texture: Pg,
        ah: Math.ceil(18 * Dg[1]) + 4,
        minLifeTime: Dg[0] / Vg,
        maxLifeTime: Dg[1] / Vg,
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
        blendMode: rv.g.Standard
      };
    class Bq {
      constructor(BB) {
        this.plans = BB, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new Eg, this.frame = 0, this.outline = new wg(BB)
      }
      onAfterRender(BB, IB, ZB) {
        const TB = performance.now(),
          JB = 0 === this.lastMs ? 0 : Math.min(TB - this.lastMs, 250) / 1e3;
        if (this.lastMs = TB, this.outline.fade(BB, TB), this.puff(BB, JB, ZB), this.sparks.emit(BB, JB, this.frame++), TB - this.lastCheckMs < 150) return;
        this.lastCheckMs = TB;
        const oB = this.plans.all().filter((BB => BB.formed && Iq(BB.box.ctrl, ZB) <= 4096));
        this.plumes = oB.filter((BB => "reactor" === BB.kind && BB.level > 0)).map((BB => ({
          box: BB.box,
          level: BB.level
        }))), this.updateHums(BB, IB, oB, ZB), this.sparks.update(BB, oB, ZB, TB), this.chimeFormed(BB, IB, oB, TB)
      }
      dispose(BB) {
        var IB;
        this.outline.dispose(BB), null === (IB = this.steam) || void 0 === IB || IB.dispose(), this.steam = null, this.sparks.dispose();
        for (const ZB of this.hums.values()) ZB.stop();
        this.hums.clear()
      }
      chimeFormed(BB, IB, ZB, TB) {
        const JB = this.outline.check(BB, ZB, TB);
        JB && BB.playSound(IB, "exp_levelup", .6, 1, {
          JB: [JB.box.ctrl[0] + .5, JB.box.ctrl[1], JB.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(BB, IB, ZB) {
        const TB = this.plumes;
        if (0 === TB.length || !BB.particlesEnabled()) return void(this.plumeBudget = 0);
        const JB = TB.reduce(((BB, IB) => BB + 3 * IB.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + JB * IB, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let oB = this.plumeCursor % (JB / 3);
        this.plumeCursor++;
        let GB = TB[0];
        for (const hB of TB) {
          if (oB < hB.level) {
            GB = hB;
            break
          }
          oB -= hB.level
        }
        const {
          lo: vB,
          hi: kB
        } = Pk(GB.box);
        if (function(BB, IB, ZB) {
            const TB = Math.max(BB[0] - ZB[0], 0, ZB[0] - IB[0]),
              JB = Math.max(BB[2] - ZB[2], 0, ZB[2] - IB[2]);
            return Math.hypot(TB, ZB[1] - IB[1], JB)
          }(vB, kB, ZB) < 6 && Math.random() > Kg) return;
        const cB = [(vB[0] + kB[0]) / 2, kB[1] + .05, (vB[2] + kB[2]) / 2],
          nB = [(kB[0] - vB[0]) / 2 - .5, .05, (kB[2] - vB[2]) / 2 - .5];
        this.steam ??= BB.createParticles(Sg, {
          pos: cB,
          half: nB
        }), this.steam.moveTo(cB, nB), this.steam.emit(1)
      }
      updateHums(BB, IB, ZB, TB) {
        const JB = new Map;
        for (const GB of ZB) "reactor" === GB.kind && GB.level > 0 && Iq(GB.box.ctrl, TB) <= 576 && JB.set(`${oB=GB.box.ctrl,`${oB[0]},${oB[1]},${oB[2]}`}:${GB.level}`, GB);
        var oB;
        for (const [GB, vB] of this.hums) JB.has(GB) || (vB.stop(), this.hums.delete(GB));
        for (const [GB, vB] of JB) {
          if (this.hums.has(GB)) continue;
          const {
            lo: ZB,
            hi: TB
          } = Pk(vB.box), JB = [(ZB[0] + TB[0]) / 2, ZB[1], (ZB[2] + TB[2]) / 2], oB = BB.playSound(IB, "rocketEngineLoop", .08 + .06 * vB.level, .55, {
            JB: JB,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          oB && this.hums.set(GB, oB)
        }
      }
    }

    function Iq(BB, IB) {
      return (BB[0] - IB[0]) ** 2 + (BB[1] - IB[1]) ** 2 + (BB[2] - IB[2]) ** 2
    }
    class Zq {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      rU(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const TB = [BB.baf2BombAt[0], BB.baf2BombAt[1], BB.baf2BombAt[2]],
          JB = BB.baf2BombR;
        if (BB.baf2BombBoom) {
          const BB = Math.hypot(IB[0] - TB[0], IB[1] - TB[1], IB[2] - TB[2]);
          this.Gq({
            fuse: null,
            blast: {
              at: TB,
              r: JB,
              receivedAt: ZB,
              distance: BB,
              flash: BB <= 3 * JB
            }
          })
        } else this.Gq({
          ...this.snapshot,
          fuse: BB.baf2BombMs > 0 ? {
            at: TB,
            r: JB,
            endsAt: ZB + BB.baf2BombMs
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
      Gq(BB) {
        this.snapshot = BB;
        for (const IB of this.listeners) IB()
      }
    }
    const Tq = (0, TB.memo)((function(BB) {
      var IB;
      let {
        store: ZB
      } = BB;
      const {
        t: JB
      } = (0, YJ.G)(), [oB, GB] = (0, TB.useState)((() => ZB.get())), [vB, kB] = (0, TB.useState)((() => performance.now()));
      (0, TB.useEffect)((() => (GB(ZB.get()), ZB.subscribe((() => {
        GB(ZB.get()), kB(performance.now())
      })))), [ZB]);
      const {
        fuse: cB,
        blast: nB
      } = oB;
      (0, TB.useEffect)((() => {
        if (!cB) return;
        const BB = setInterval((() => {
          kB(performance.now())
        }), 250);
        return () => {
          clearInterval(BB)
        }
      }), [cB]);
      const [hB, zB] = (0, TB.useState)(!1);
      (0, TB.useEffect)((() => {
        if (null === nB || void 0 === nB || !nB.flash) return;
        zB(!0);
        const BB = setTimeout((() => {
          zB(!1)
        }), 2500);
        return () => {
          clearTimeout(BB)
        }
      }), [nB]);
      const FB = cB ? function(BB, IB) {
        return BB.endsAt <= IB ? 0 : Math.ceil((BB.endsAt - IB) / 1e3)
      }(cB, vB) : 0;
      return (0, Oo.jsxs)(Oo.Fragment, {
        children: [FB > 0 && (0, Oo.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: JB("buildAFactory2Game:bombCountdown", {
            amount: String(FB),
            radius: String(null !== (IB = null === cB || void 0 === cB ? void 0 : cB.r) && void 0 !== IB ? IB : 0)
          })
        }), hB && (0, Oo.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Jq(BB) {
      const IB = Math.min(4, Math.max(1, BB / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * BB / 4)),
        capSpread: Math.min(5 * BB / 8, 24 * IB),
        capThick: 6 * IB,
        stemHalfWidth: 3 * IB,
        puffScale: IB
      }
    }
    class oq {
      constructor() {
        this.sv = !1
      }
      hold(BB) {
        BB.getCameraFar() < 1e3 && (BB.setCameraFar(1e3), this.sv = !0)
      }
      release(BB) {
        this.sv && (this.sv = !1, BB.setCameraFar(null))
      }
    }
    const Gq = 1 / .6,
      vq = [.2, .1, .2],
      kq = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      cq = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: rv.g.Standard,
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
      nq = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: rv.g.Standard,
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
      hq = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: rv.g.Standard,
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
      zq = {
        texture: Pg,
        ah: Math.ceil(120) + 4,
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
        blendMode: rv.g.Add
      };
    class Fq {
      constructor(BB) {
        this.store = BB, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new oq, this.timers = []
      }
      onAfterRender(BB, IB) {
        const ZB = performance.now(),
          TB = 0 === this.lastMs ? 0 : Math.min(ZB - this.lastMs, 250) / 1e3;
        this.lastMs = ZB;
        const {
          fuse: JB,
          blast: oB
        } = this.store.get();
        null !== oB && oB !== this.shownBlast && (this.shownBlast = oB, this.startBlast(BB, IB, oB, ZB));
        const GB = BB.particlesEnabled();
        null !== JB && JB.endsAt > ZB && GB ? this.emitBeacon(BB, JB, TB, ZB) : this.beaconBudget = 0, null !== this.cloud && (ZB - this.cloud.startMs > 33e3 ? this.disposeCloud(BB) : (this.far.hold(BB), GB && this.emitCloud(BB, TB, ZB)))
      }
      dispose(BB) {
        var IB;
        null === (IB = this.beacon) || void 0 === IB || IB.dispose(), this.beacon = null, this.disposeCloud(BB);
        for (const ZB of this.timers) clearTimeout(ZB);
        this.timers.length = 0
      }
      emitBeacon(BB, IB, ZB, TB) {
        const JB = IB.endsAt - TB < 5e3 ? 350 : 1e3,
          oB = .5 + .5 * Math.sin(2 * Math.PI * TB / JB);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * oB * ZB, 4), this.beaconBudget < 1) return;
        const GB = Math.floor(this.beaconBudget);
        this.beaconBudget -= GB;
        const [vB, kB, cB] = IB.at, nB = [vB + .5, kB + 1.1, cB + .5];
        this.beacon ??= BB.createParticles(zq, {
          pos: nB,
          half: vq
        }), this.beacon.moveTo(nB), this.beacon.emit(GB)
      }
      startBlast(BB, IB, ZB, TB) {
        var JB;
        null === (JB = this.beacon) || void 0 === JB || JB.dispose(), this.beacon = null, this.disposeCloud(BB);
        const oB = (0, Pv.isMobile)() ? .5 : 1;
        this.streams = [cq, nq, hq].map((BB => {
          const IB = Math.round(BB.count * oB);
          return {
            spec: BB,
            particles: null,
            rate: IB / ((BB.toMs - BB.fromMs) / 1e3),
            budget: 0,
            left: IB
          }
        })), this.cloud = {
          blast: ZB,
          startMs: TB
        };
        const GB = Math.max(.25, 1 - ZB.distance / (6 * ZB.r)),
          vB = ZB.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [ZB, TB, JB] of kq) gq(BB, IB, ZB, GB * TB, JB)
        }), vB))
      }
      emitCloud(BB, IB, ZB) {
        const {
          blast: TB,
          startMs: JB
        } = this.cloud, oB = ZB - JB, [GB, vB, kB] = TB.at, cB = Jq(TB.r);
        for (const nB of this.streams) {
          const {
            spec: ZB
          } = nB;
          if (nB.left <= 0 || oB < ZB.fromMs) continue;
          nB.budget += nB.rate * IB;
          const JB = Math.min(Math.floor(nB.budget), nB.left);
          if (JB < 1) continue;
          nB.budget -= JB, nB.left -= JB;
          const hB = nB.particles ??= this.createStream(BB, ZB, TB);
          if (ZB === cq) {
            const BB = cB.stemHalfWidth;
            hB.moveTo([GB, vB + 1, kB], [BB, 1, BB])
          } else if (ZB === nq) {
            const BB = cB.capSpread * Math.min(1, (oB - ZB.fromMs) / 3e3),
              IB = Math.sqrt(Math.random()),
              TB = 2 * Math.random() * Math.PI,
              JB = Math.cos(TB) * IB,
              nB = Math.sin(TB) * IB,
              zB = GB + JB * BB,
              FB = kB + nB * BB,
              NB = cB.capThick,
              gB = vB + cB.capHeight + NB * (1 - IB * IB) * 2;
            hB.setDirections([.7 * JB, .05, .7 * nB], [JB, .2, nB]), hB.moveTo([zB, gB, FB], [NB, NB, NB])
          } else {
            this.ringAngle += 2.39996;
            const BB = Math.cos(this.ringAngle),
              IB = Math.sin(this.ringAngle);
            hB.setDirections([BB, .05, IB], [BB, .1, IB]), hB.moveTo([GB + 2 * BB, vB + .5, kB + 2 * IB], [0, .5, 0])
          }
          hB.emit(JB)
        }
      }
      createStream(BB, IB, ZB) {
        const {
          r: TB
        } = ZB, JB = Math.max(IB.life[0], TB / 25), oB = IB === hq ? [.9 * JB, JB] : IB.life, GB = Jq(TB), vB = IB === hq ? 1 : GB.puffScale, kB = {
          texture: Pg,
          ah: IB.count + 4,
          minLifeTime: oB[0] / Gq,
          maxLifeTime: oB[1] / Gq,
          minSize: IB.size[0] * vB,
          maxSize: IB.size[1] * vB,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, IB.gravity * Gq * Gq, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: IB.from[0],
            maxColor: IB.from[1]
          }, {
            timeFraction: .6,
            minColor: Nq(IB.from[0], IB.to[0]),
            maxColor: Nq(IB.from[1], IB.to[1])
          }, {
            timeFraction: 1,
            minColor: IB.to[0],
            maxColor: IB.to[1]
          }],
          blendMode: IB.blend
        };
        if (IB === cq) {
          const BB = GB.capHeight / ((oB[0] + oB[1]) / 2);
          kB.minEmitPower = .9 * BB * Gq, kB.maxEmitPower = 1.05 * BB * Gq, kB.dir1 = [-.1, 1, -.1], kB.dir2 = [.1, 1, .1]
        } else IB === nq ? (kB.minEmitPower = 1.2, kB.maxEmitPower = 2, kB.dir1 = [-1, .05, -1], kB.dir2 = [1, .2, 1]) : (kB.minEmitPower = 39.583333333333336, kB.maxEmitPower = 41.66666666666667, kB.dir1 = [1, 0, 0], kB.dir2 = [1, 0, 0]);
        return BB.createParticles(kB, {
          pos: ZB.at
        })
      }
      disposeCloud(BB) {
        for (const ZB of this.streams) {
          var IB;
          null === (IB = ZB.particles) || void 0 === IB || IB.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(BB)
      }
    }

    function Nq(BB, IB) {
      return [(BB[0] + IB[0]) / 2, (BB[1] + IB[1]) / 2, (BB[2] + IB[2]) / 2, .75 * BB[3]]
    }

    function gq(BB, IB, ZB, TB, JB) {
      try {
        BB.playSound(IB, ZB, TB, JB)
      } catch (oB) {
        console.error(oB)
      }
    }
    const qq = {
        ah: 720,
        perS: 100
      },
      yq = {
        ah: 320,
        perS: 44
      };
    class Uq {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(BB, IB) {
        this.zone = {
          centre: [...BB.centre],
          r: BB.r,
          band: BB.band ? [BB.band[0], BB.band[1]] : void 0
        }, this.endsAt = IB
      }
      stop() {
        this.zone = null
      }
      rU(BB, IB) {
        const {
          baf2FalloutMs: ZB,
          baf2FalloutAt: TB,
          baf2FalloutR: JB,
          baf2FalloutY: oB
        } = BB;
        ZB > 0 && TB && void 0 !== JB ? this.start({
          centre: TB,
          r: JB,
          band: oB
        }, IB + ZB) : this.stop()
      }
      perS(BB, IB, ZB) {
        const TB = this.zone;
        if (!TB) return 0;
        const JB = this.endsAt - BB;
        return JB <= 0 ? (this.zone = null, 0) : TB.band && (IB[1] < TB.band[0] || IB[1] > TB.band[1]) || Math.hypot(IB[0] - TB.centre[0], IB[2] - TB.centre[2]) > TB.r ? 0 : ZB.perS * Math.min(1, JB / 5e3)
      }
    }
    const Wq = [5, 7],
      dq = [24, 8, 24],
      Cq = .5,
      Qq = 1 / .6,
      sq = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class wq {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Pv.isMobile)();
        this.state = new Uq, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(BB) {
          return BB ? yq : qq
        }(BB)
      }
      startFallout(BB, IB) {
        this.state.start(BB, IB)
      }
      stopFallout() {
        this.state.stop()
      }
      rU(BB) {
        this.state.rU(BB, performance.now())
      }
      onAfterRender(BB, IB) {
        var ZB;
        const TB = performance.now(),
          JB = 0 === this.lastMs ? 0 : Math.min(TB - this.lastMs, 250) / 1e3;
        this.lastMs = TB;
        const oB = this.state.perS(TB, IB, this.tier);
        if (oB <= 0 || !BB.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + oB * JB, oB / 4);
        const GB = Math.floor(this.budget);
        if (GB < 1) return;
        this.budget -= GB;
        const vB = this.at;
        vB[0] = IB[0], vB[1] = IB[1] + 12, vB[2] = IB[2];
        const kB = null !== (ZB = this.systems) && void 0 !== ZB ? ZB : this.create(BB, vB),
          cB = this.amounts;
        cB[0] = 0, cB[1] = 0;
        for (let nB = 0; nB < GB; nB++) cB[Math.random() < .3 ? 1 : 0]++;
        for (let nB = 0; nB < kB.length; nB++) cB[nB] > 0 && (kB[nB].moveTo(vB, dq), kB[nB].emit(cB[nB]))
      }
      dispose() {
        for (const IB of null !== (BB = this.systems) && void 0 !== BB ? BB : []) {
          var BB;
          IB.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(BB, IB) {
        return this.systems = sq.map((ZB => {
          let {
            rgba: [TB, JB, oB, GB],
            share: vB
          } = ZB;
          const kB = {
            texture: "square_particle",
            ah: Math.ceil(this.tier.ah * vB),
            minLifeTime: Wq[0] / Qq,
            maxLifeTime: Wq[1] / Qq,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Cq, -1, Cq],
            colorGradients: [{
              timeFraction: 0,
              minColor: [TB, JB, oB, 0]
            }, {
              timeFraction: .15,
              minColor: [TB, JB, oB, GB]
            }, {
              timeFraction: .8,
              minColor: [TB, JB, oB, GB]
            }, {
              timeFraction: 1,
              minColor: [TB, JB, oB, 0]
            }],
            blendMode: rv.g.Standard
          };
          return BB.createParticles(kB, {
            pos: IB,
            half: dq
          })
        })), this.systems
      }
    }
    const Oq = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Yq(BB) {
      const IB = /\|rot(\d)/.exec(BB);
      return Oq[IB ? Number(IB[1]) : 1]
    }
    var iq = ZB(663),
      pq = ZB(38504);
    const aq = new Set(iq.m);

    function Hq(BB) {
      if (-2 !== BB.count) return null;
      const IB = lB(BB.item);
      return null !== IB && aq.has(IB) ? IB : null
    }

    function Mq(BB) {
      const {
        width: IB,
        height: ZB
      } = (0, pq.c)(BB).hitBoxDimensions;
      return .55 / Math.max(IB, ZB)
    }

    function jq(BB, IB, ZB) {
      if (!ZB) return !1;
      const TB = BB[0] + .5 - IB[0],
        JB = BB[1] + .5 - IB[1],
        oB = BB[2] + .5 - IB[2];
      return TB * TB + JB * JB + oB * oB <= 576
    }

    function Pq(BB, IB) {
      return Math.atan2(BB[0], BB[2]) + Math.PI + IB
    }

    function Rq(BB, IB) {
      const ZB = 2 * Math.PI;
      return (BB + ZB * IB / 1e4) % ZB
    }
    class rq {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = BB, this.now = IB, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = BB.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(BB, IB) {
        if (0 === this.farms.size) return;
        const ZB = this.now(),
          TB = Number.isNaN(this.frameMs) ? 0 : Math.min(ZB - this.frameMs, 100);
        this.frameMs = ZB, ZB - this.checkedMs >= 1e3 && (this.checkedMs = ZB, this.check(BB, IB));
        for (const JB of this.farms.values()) JB.shown && JB.running && null !== JB.model && TB > 0 && (JB.spin = Rq(JB.spin, TB), JB.model.setPose(JB.feet, Pq(JB.front, JB.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const BB of this.farms.values()) this.drop(BB);
        this.farms.clear()
      }
      sync() {
        const BB = new Set;
        for (const IB of this.labels.list()) {
          const ZB = Hq(IB);
          if (null === ZB) continue;
          BB.add(IB.key);
          const TB = this.farms.get(IB.key);
          if ((null === TB || void 0 === TB ? void 0 : TB.mob) === ZB) continue;
          TB && this.drop(TB);
          const [JB, oB, GB] = IB.pos;
          this.farms.set(IB.key, {
            pos: IB.pos,
            feet: [JB + .5, oB + 1, GB + .5],
            mob: ZB,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [IB, ZB] of this.farms) BB.has(IB) || (this.drop(ZB), this.farms.delete(IB));
        this.checkedMs = -1 / 0
      }
      check(BB, IB) {
        for (const ZB of this.farms.values()) {
          const [TB, JB, oB] = ZB.pos, GB = LN(BB, ZB.pos);
          null !== GB && HZ(GB) === RB && jq(ZB.pos, IB, "Air" === LN(BB, [TB, JB + 1, oB])) ? (ZB.running = GB.endsWith("|Running"), ZB.front = Yq(GB), null === ZB.model && (ZB.model = BB.createMobModel(ZB.mob, Mq(ZB.mob)), null === ZB.model) || (ZB.model.setPose(ZB.feet, Pq(ZB.front, ZB.spin)), ZB.shown || (ZB.model.setVisible(!0), ZB.shown = !0))) : (ZB.shown && null !== ZB.model && ZB.model.setVisible(!1), ZB.shown = !1)
        }
      }
      drop(BB) {
        var IB;
        null === (IB = BB.model) || void 0 === IB || IB.dispose(), BB.model = null, BB.shown = !1
      }
    }
    class mq {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(BB) {
        var IB;
        this.island = BB.baf2ColIsland, this.islandSite = (IB = BB.baf2ColSite) && 8 === IB.length ? {
          spawnXZ: [IB[0], IB[1]],
          coreXZ: [IB[2], IB[3]],
          minXZ: [IB[4], IB[5]],
          maxXZ: [IB[6], IB[7]]
        } : null, this.views = BB.baf2ColList.map((BB => ({
          entry: GJ(BB)
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
        var IB;
        return null === (IB = this.views.find((IB => {
          let {
            entry: ZB
          } = IB;
          return ZB.focus[0] === BB[0] && ZB.focus[1] === BB[1] + 1 && ZB.focus[2] === BB[2]
        }))) || void 0 === IB ? void 0 : IB.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(BB, IB) {
        return uk(this.entries(), BB, IB)
      }
      lookSource() {
        return {
          handles: BB => zT(BB) >= 0 || FT(BB),
          line: (BB, IB) => this.lookLine(BB, IB),
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
    const Xq = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((BB => BB / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((BB => [BB, BB + 1, BB + 2, BB, BB + 2, BB + 3]))
    };

    function Lq(BB, IB, ZB, TB, JB, oB, GB) {
      let vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const kB = Math.cos(vB),
        cB = Math.sin(vB),
        nB = BB.positions.length / 3,
        {
          positions: hB,
          indices: zB
        } = Xq;
      for (let FB = 0; FB < hB.length; FB += 3) {
        const vB = hB[FB] * JB,
          nB = hB[FB + 2] * GB;
        BB.positions.push(IB + vB * kB + nB * cB, ZB + hB[FB + 1] * oB, TB - vB * cB + nB * kB)
      }
      for (const FB of zB) BB.indices.push(nB + FB)
    }

    function eq(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return IB < 1 ? {
        rgb: BB,
        alpha: IB
      } : {
        rgb: BB,
        alpha: 1,
        opaque: !0
      }
    }
    class uq {
      constructor(BB, IB) {
        this.style = BB, this.perSource = IB, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(BB) {
        this.sources = BB, 0 === BB.length && (this.budget = 0)
      }
      Iz(BB, IB, ZB) {
        const TB = this.sources.length;
        if (0 !== TB) {
          var JB, oB;
          this.budget = Math.min(this.budget + (JB = TB, oB = this.perSource, Math.min(JB * oB, Zc) * IB), 2);
          for (let IB = 0; IB < TB && this.budget >= 1; IB++) {
            const IB = this.sources[this.cursor % TB];
            this.cursor = (this.cursor + 1) % TB;
            if (!(Math.max(Math.abs(IB.x - ZB[0]), Math.abs(IB.y - ZB[1]), Math.abs(IB.z - ZB[2])) > 32)) return this.puff(BB, IB), void this.budget--
          }
        }
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.dispose(), this.particles = null, this.sources = []
      }
      puff(BB, IB) {
        let {
          x: ZB,
          y: TB,
          z: JB,
          h: oB,
          faces: GB
        } = IB;
        const vB = function(BB, IB, ZB, TB, JB) {
            const [oB, GB, vB] = JB[Math.floor(Math.random() * JB.length)], kB = .04, cB = (BB, IB, ZB) => BB > 0 ? IB + ZB + kB : BB < 0 ? IB - kB : IB + .1, nB = (BB, IB, ZB) => BB > 0 ? IB + ZB + kB : BB < 0 ? IB - kB : IB + ZB - .1, hB = [cB(oB, BB, 1), cB(GB, IB, TB), cB(vB, ZB, 1)], zB = [nB(oB, BB, 1), nB(GB, IB, TB), nB(vB, ZB, 1)];
            return {
              pos: [(hB[0] + zB[0]) / 2, (hB[1] + zB[1]) / 2, (hB[2] + zB[2]) / 2],
              half: [(zB[0] - hB[0]) / 2, (zB[1] - hB[1]) / 2, (zB[2] - hB[2]) / 2],
              out: [oB, GB, vB]
            }
          }(ZB, TB, JB, oB, GB),
          {
            style: kB
          } = this,
          cB = this.particles ??= BB.createParticles(rg(kB, Math.ceil(kB.count * Zc * kB.life[1]) + 4), vB);
        cB.moveTo(vB.pos, vB.half);
        const [nB, hB, zB] = vB.out, FB = kB.spread;
        cB.setDirections([nB - FB, .6 + hB, zB - FB], [nB + FB, 1 + hB, zB + FB]), cB.emit(kB.count)
      }
    }
    const fq = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class lq {
      constructor() {
        this.green = new uq(Jc.green, Bc), this.pink = new uq(Jc.pink, Ic), this.colliders = [], this.lastMs = 0
      }
      setSources(BB) {
        this.colliders = BB;
        const IB = [],
          ZB = [];
        for (const TB of BB) {
          const [BB, JB, oB] = TB.focus;
          IB.push({
            x: BB,
            y: JB - 1,
            z: oB,
            h: 2,
            faces: fq
          });
          for (let IB = 0; IB < 4; IB++) {
            if (!TB.live[IB]) continue;
            const [BB, JB, oB] = qT(TB.focus, IB, GT.LASER_D), [GB, , vB] = gT[IB], kB = fq.filter((BB => BB[0] !== GB || BB[2] !== vB || 0 !== BB[1]));
            ZB.push({
              x: BB,
              y: JB,
              z: oB,
              h: 1,
              faces: kB
            })
          }
        }
        this.green.setSources(IB), this.pink.setSources(ZB)
      }
      onAfterRender(BB) {
        const IB = performance.now(),
          ZB = 0 === this.lastMs ? 0 : Math.min(IB - this.lastMs, 250) / 1e3;
        if (this.lastMs = IB, 0 === this.colliders.length || !BB.particlesEnabled()) return;
        const TB = BB.getCameraPosition();
        this.green.Iz(BB, ZB, TB), this.pink.Iz(BB, ZB, TB)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Aq = 1.04,
      tq = eq([1, 120 / 255, 220 / 255]),
      bq = eq([1, .25, .25], .35);
    class xq {
      constructor(BB) {
        this.store = BB, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new lq
      }
      onAfterRender(BB) {
        this.store.version() !== this.builtVersion && this.rebuild(BB);
        const IB = performance.now();
        for (const ZB of this.beams) {
          const TB = 1 + .35 * Math.sin(IB / 700 * Math.PI * 2 + ZB.phase);
          BB.setGameMesh(ZB.mesh, {
            scale: [ZB.alongX ? 1 : TB, TB, ZB.alongX ? TB : 1]
          })
        }
        this.glow.onAfterRender(BB)
      }
      dispose(BB) {
        this.clear(BB), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(BB) {
        this.clear(BB), this.builtVersion = this.store.version();
        const IB = [];
        for (const {
            entry: ZB
          }
          of this.store.colliders()) ZB.on && ZB.live.some(Boolean) && (this.addBeams(BB, ZB), IB.push(ZB)), ZB.blockers.length > 0 && this.addMarkers(BB, ZB);
        this.glow.setSources(IB)
      }
      addBeams(BB, IB) {
        const [ZB, TB, JB] = IB.focus, oB = Sk - .25, GB = (.25 + Sk) / 2;
        for (let vB = 0; vB < 4; vB++) {
          if (!IB.live[vB]) continue;
          const [kB, , cB] = gT[vB], nB = 0 !== kB, hB = {
            positions: [],
            indices: []
          };
          Lq(hB, 0, 0, 0, nB ? oB : .2, .2, nB ? .2 : oB);
          const zB = [ZB + .5 + kB * GB, TB + .5, JB + .5 + cB * GB],
            FB = BB.createGameMesh(hB, tq, zB);
          this.meshes.push(FB), this.beams.push({
            mesh: FB,
            alongX: nB,
            phase: vB * Math.PI / 2
          })
        }
      }
      addMarkers(BB, IB) {
        const ZB = IB.blockers[0],
          TB = {
            positions: [],
            indices: []
          };
        for (const [JB, oB, GB] of IB.blockers) Lq(TB, JB - ZB[0] + .5, oB - ZB[1] + .5, GB - ZB[2] + .5, Aq, Aq, Aq);
        this.meshes.push(BB.createGameMesh(TB, bq, ZB))
      }
      clear(BB) {
        for (const IB of this.meshes) BB.disposeGameMesh(IB);
        this.meshes = [], this.beams = []
      }
    }
    const Eq = [.56, .83, 1],
      Dq = [1, .73, .08],
      Kq = [1, .25, .25],
      Vq = [.85, .85, .85],
      Sq = [.3, .45, .6];

    function By(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const GB = JB / 2,
        vB = JB + oB;
      for (const kB of [-GB, GB])
        for (const JB of [-GB, GB]) Lq(BB, IB, ZB + kB, TB + JB, vB, oB, oB), Lq(BB, IB + kB, ZB, TB + JB, oB, vB, oB), Lq(BB, IB + kB, ZB + JB, TB, oB, oB, vB)
    }

    function Iy(BB) {
      return IB => BB.isBlockInLoadedChunk(IB[0], IB[1], IB[2]) && 0 === BB.getBlockId(IB[0], IB[1], IB[2])
    }

    function Zy(BB) {
      return BB.map((BB => {
        let {
          free: IB,
          blocked: ZB,
          gaps: TB,
          supports: JB
        } = BB;
        return `${IB.join(";")}|${ZB.join(";")}|${TB.join(";")}|${JB.join(";")}`
      })).join("/")
    }

    function Ty(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const oB = IB[0],
        GB = {
          positions: [],
          indices: []
        };
      for (const [vB, kB, cB] of IB) By(GB, vB - oB[0] + .5, kB - oB[1] + .5, cB - oB[2] + .5, TB, JB);
      return BB.createGameMesh(GB, ZB, oB)
    }
    class Jy {
      constructor(BB) {
        this.store = BB, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(BB, IB, ZB) {
        var TB;
        const JB = null === (TB = BB.FZB(IB)) || void 0 === TB ? void 0 : TB.name;
        if (JB !== kT && JB !== vT) return void("" !== this.shownKey && this.show(BB, "", []));
        const oB = performance.now();
        if (oB - this.lastCheckMs >= 200 && (this.lastCheckMs = oB, JB === kT ? this.check(BB, ZB) : this.preview(BB, ZB)), this.pulses.length > 0) {
          const IB = 1 + .12 * Math.sin(oB / 1e3 * 1.25 * Math.PI * 2),
            ZB = [IB, IB, IB];
          for (const TB of this.pulses) BB.setGameMesh(TB, {
            scale: ZB
          })
        }
      }
      dispose(BB) {
        this.clear(BB), this.shownKey = ""
      }
      check(BB, IB) {
        const ZB = Iy(BB),
          TB = [];
        for (const {
            entry: oB
          }
          of this.store.colliders()) {
          oB.focus.every(((BB, ZB) => Math.abs(BB + .5 - IB[ZB]) <= GT.GHOST_REACH)) && TB.push(Vk(oB, ZB))
        }
        const JB = Zy(TB);
        JB !== this.shownKey && this.show(BB, JB, TB)
      }
      preview(BB, IB) {
        const ZB = BB.getTargetedBlock(),
          TB = ZB ? [ZB.oq[0], ZB.oq[1], ZB.oq[2]] : null,
          JB = null !== TB && TB.every(((BB, ZB) => Math.abs(BB + .5 - IB[ZB]) <= 8)),
          oB = this.store.site(),
          GB = JB && oB ? function(BB, IB, ZB) {
            const TB = NT(BB);
            if (!TB.every(IB)) return null;
            const JB = WT(BB, ZB);
            return {
              column: TB,
              spots: Vk({
                focus: TB[1],
                lasers: [!1, !1, !1, !1],
                open: JB,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, IB),
              fits: JB.filter(Boolean).length >= GT.MIN_SPOTS
            }
          }(TB, Iy(BB), oB) : null,
          vB = GB ? [GB.spots] : [],
          kB = GB ? `preview ${TB.join(",")}|${GB.fits}|${Zy(vB)}` : "";
        var cB, nB;
        kB !== this.shownKey && this.show(BB, kB, vB, null !== (cB = null === GB || void 0 === GB ? void 0 : GB.column) && void 0 !== cB ? cB : [], null === (nB = null === GB || void 0 === GB ? void 0 : GB.fits) || void 0 === nB || nB)
      }
      show(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          JB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(BB), this.shownKey = IB, TB.length > 0 && this.meshes.push(Ty(BB, TB, eq(JB ? Vq : Kq)));
        for (const {
            free: oB,
            blocked: GB,
            gaps: vB,
            supports: kB
          }
          of ZB) {
          for (const [IB, ZB, TB] of oB) {
            const JB = {
              positions: [],
              indices: []
            };
            By(JB, 0, 0, 0);
            const oB = BB.createGameMesh(JB, eq(Eq), [IB + .5, ZB + .5, TB + .5]);
            this.meshes.push(oB), this.pulses.push(oB)
          }
          GB.length > 0 && this.meshes.push(Ty(BB, GB, eq(Dq))), vB.length > 0 && this.meshes.push(Ty(BB, vB, eq(Kq), 1.06, .07)), kB.length > 0 && this.meshes.push(Ty(BB, kB, eq(Sq)))
        }
      }
      clear(BB) {
        for (const IB of this.meshes) BB.disposeGameMesh(IB);
        this.meshes = [], this.pulses = []
      }
    }
    class oy {
      constructor() {
        this.stored = new Map, this.sv = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(BB) {
        if (!BB.baf2TermOpen) return !1;
        BB.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [IB, ZB] of BB.baf2TermItems) ZB > 0 ? this.stored.set(IB, ZB) : this.stored.delete(IB);
        if (BB.baf2TermHeld && (this.sv = new Map(BB.baf2TermHeld)), this.pending = this.pending.filter((IB => IB.seq > BB.baf2TermAcked)), this.silos = BB.baf2TermSilos, this.readOnly = BB.baf2TermReadOnly, this.pocket = !0 === BB.baf2TermPocket, BB.baf2TermReset) this.resort();
        else {
          const BB = new Set(this.order);
          for (const IB of this.stored.keys()) BB.has(IB) || this.order.push(IB)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((BB, IB) => this.amount(IB) - this.amount(BB) || BB.localeCompare(IB))), this.changed()
      }
      take(BB, IB) {
        const ZB = vI(BB, this.amount(IB));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: IB,
          amount: ZB,
          put: !1
        }), this.recents = [IB, ...this.recents.filter((BB => BB !== IB))].slice(0, 6), this.changed(), ZI(this.seq, BB, IB)
      }
      put(BB, IB) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: IB,
          amount: vI(BB, this.heldAmount(IB)),
          put: !0
        }), this.changed(), TI(this.seq, BB, IB)
      }
      putAll() {
        this.seq++;
        for (const BB of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: BB,
          amount: this.heldAmount(BB),
          put: !0
        });
        return this.changed(), JI(this.seq)
      }
      amount(BB) {
        var IB;
        let ZB = null !== (IB = this.stored.get(BB)) && void 0 !== IB ? IB : 0;
        for (const TB of this.pending) TB.item === BB && (ZB += TB.put ? TB.amount : -TB.amount);
        return Math.max(0, ZB)
      }
      heldAmount(BB) {
        var IB;
        let ZB = null !== (IB = this.sv.get(BB)) && void 0 !== IB ? IB : 0;
        for (const TB of this.pending) TB.put && TB.item === BB && (ZB -= TB.amount);
        return Math.max(0, ZB)
      }
      heldItems() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((IB => IB === BB || this.heldAmount(IB) > 0))
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
    var Gy = ZB(38466);
    const vy = {
      isBlock: BB => void 0 !== HB.f[BB],
      harvestType: BB => {
        var IB;
        return null === (IB = HB.f[BB]) || void 0 === IB ? void 0 : IB.harvestType
      },
      harvestLevel: BB => {
        var IB;
        return null === (IB = HB.f[BB]) || void 0 === IB ? void 0 : IB.harvestLevel
      },
      dropsNothing: BB => {
        var IB;
        return null === (null === (IB = HB.f[BB]) || void 0 === IB ? void 0 : IB.drops)
      },
      displayName: BB => {
        var IB;
        return null === (IB = Bv.k[BB]) || void 0 === IB ? void 0 : IB.displayName
      },
      description: BB => {
        var IB;
        return null === (IB = Bv.k[BB]) || void 0 === IB ? void 0 : IB.description
      },
      harvests: BB => {
        var IB;
        return null === (IB = Bv.k[BB]) || void 0 === IB ? void 0 : IB.harvests
      },
      level: BB => {
        var IB;
        return null === (IB = Bv.k[BB]) || void 0 === IB ? void 0 : IB.level
      }
    };

    function ky(BB, IB, ZB) {
      return function(BB, IB, ZB, TB) {
        var JB, oB;
        const GB = IB.split("|")[0],
          vB = BB.isBlock(IB) ? IB : BB.isBlock(GB) ? GB : null;
        if (null === vB || "rock" !== BB.harvestType(vB) || BB.dropsNothing(vB) && !XT.has(GB)) return null;
        const kB = ZB && "rock" === BB.harvests(ZB) ? null !== (JB = BB.level(ZB)) && void 0 !== JB ? JB : 0 : null,
          cB = null !== (oB = null !== TB && void 0 !== TB ? TB : BB.harvestLevel(vB)) && void 0 !== oB ? oB : 0;
        return (null !== kB ? cB <= kB : 0 === BB.harvestLevel(vB)) ? null : YT(BB, cB)
      }(vy, BB, IB, ZB)
    }

    function cy(BB, IB) {
      return function(BB, IB, ZB) {
        if (IB === OT[0]) return [(0, PB.de)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, PB.P.whiteUiText)];
        const TB = ZB.split("|")[0],
          JB = BB.isBlock(TB) ? BB.displayName(TB) : void 0,
          oB = "string" === typeof JB ? JB : JB && "translationKey" in JB ? `$t(${JB.translationKey})` : TB;
        return [(0, PB.de)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: oB
          }
        }, PB.P.whiteUiText), (0, PB.de)({
          translationKey: `item:${(0,PB.Ee)(IB)}`
        }, PB.P.yellowUiText)]
      }(vy, BB, IB)
    }
    const ny = "buildAFactory2Game:";
    const hy = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function zy(BB) {
      return BB.endsWith(" Ore")
    }
    const Fy = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Ny = [],
      gy = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Fy,
        plan: null,
        atomic: Ny
      },
      qy = "buildAFactory2Game:",
      yy = new Set(["Splitter", "Sorting Gate"]),
      Uy = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class Wy {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = BB, this.planAt = IB, this.tierOf = ZB, this.KG = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.sv = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = gy, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(BB, IB, ZB) {
        var TB, JB, oB;
        let GB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const vB = null !== (TB = null === (JB = BB.FZB(IB)) || void 0 === JB ? void 0 : JB.name) && void 0 !== TB ? TB : null,
          kB = BB.isPlayerCrouching(IB),
          cB = 0 === ZB ? null : this.resolve(BB, ZB),
          nB = null !== cB && null !== GB && yy.has(cB.rootName) && function(BB, IB) {
            return Uy.some((ZB => {
              let [TB, JB] = ZB;
              const oB = BB.getBlockId(IB[0] + TB, IB[1], IB[2] + JB);
              return 0 !== oB && "Express Belt" === BB.getMetaInfo(oB).rootName
            }))
          }(BB, GB),
          hB = this.updatePlan(0 === ZB ? null : GB),
          zB = this.tierOf(),
          FB = null === GB ? null : (0, Gy.e)(ZB),
          NB = null !== FB && null !== GB && (0, Gy.f)(function(BB) {
            return (IB, ZB, TB) => BB.getBlockId(IB, ZB, TB)
          }(BB), GB[0], GB[1], GB[2], FB),
          gB = this.readAfloat(BB, ZB, GB);
        if (ZB === this.KG && NB === this.missesMaker && gB === this.afloat && vB === this.sv && kB === this.crouching && nB === this.express && zB === this.tier && !hB && (!this.targetsLive || !this.liveMoved(GB))) return;
        this.KG = ZB, this.missesMaker = NB, this.afloat = gB, this.sv = vB, this.crouching = kB, this.express = nB;
        const qB = nB && cB ? function(BB) {
          if (null === BB.info) return null;
          return BB.express ??= {
            ...BB.info,
            detail: `${qy}lookKeepsUpExpress`,
            detailItem: null
          }, BB.express
        }(cB) : null !== cB && NB && null !== FB ? this.besideMaker(cB, ZB, FB) : null !== cB && gB ? this.hanging(cB) : null !== (oB = null === cB || void 0 === cB ? void 0 : cB.info) && void 0 !== oB ? oB : null;
        this.tier = zB;
        const yB = cB && qB ? function(BB, IB) {
          var ZB, TB;
          const JB = HB.f[BB];
          if (!BB.endsWith(" Ore") || "rock" !== (null === JB || void 0 === JB ? void 0 : JB.harvestType) || 0 === JB.harvestLevel) return null;
          const oB = null !== (ZB = JB.harvestLevel) && void 0 !== ZB ? ZB : 0,
            GB = IB ? Bv.k[IB] : void 0;
          if ("rock" === (null === GB || void 0 === GB ? void 0 : GB.harvests) && (null !== (TB = GB.level) && void 0 !== TB ? TB : 0) >= oB) return null;
          const vB = (kB = oB, YT(vy, kB));
          var kB;
          if (null === vB) return null;
          const cB = Zo(vB),
            nB = /^[AEIOU]/.test(vB) ? "An" : "";
          if ("rock" === (null === GB || void 0 === GB ? void 0 : GB.harvests) && IB) return {
            key: `${qy}lookToolTooWeak${nB}`,
            sv: Zo(IB),
            needed: cB
          };
          return {
            key: vB === OT[0] ? `${qy}lookNeedAnyPickaxe` : `${qy}lookNeedPickaxe${nB}`,
            sv: null,
            needed: cB
          }
        }(cB.rootName, vB) : null;
        this.targetsLive = !0 === (null === cB || void 0 === cB ? void 0 : cB.live) && null !== GB;
        let UB = null;
        this.targetsLive && cB && GB && this.live && (this.livePos[0] = GB[0], this.livePos[1] = GB[1], this.livePos[2] = GB[2], this.liveVersion = this.live.version(), UB = this.live.line(cB.rootName, GB));
        const WB = null === qB ? Fy : function(BB, IB, ZB) {
            const TB = function(BB, IB, ZB) {
              const TB = jZ(BB);
              if (null === TB) return null;
              const JB = `${ny}lookPortMode_${TB}`,
                oB = uT(IB);
              if (oB && ZB) return {
                mode: null,
                detail: JB,
                next: `${ny}lookWrenchPickUp`,
                nextState: null
              };
              const GB = PZ(BB),
                vB = null === GB ? null : jZ(GB);
              return null === vB ? {
                mode: null,
                detail: JB,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: JB,
                next: oB ? `${ny}lookWrenchNext` : `${ny}lookPortWrench`,
                nextState: `${ny}lookPortState_${vB}`
              }
            }(BB, IB, ZB);
            if (null !== TB) return TB;
            const JB = ZJ(BB, IB, ZB);
            return null === JB.mode && null === JB.next ? Fy : JB
          }(BB.blockIdToBlockName(ZB), vB, kB),
          dB = this.plan,
          CB = cB && qB ? this.rowsOf(cB.rootName, zB) : Ny,
          QB = this.snapshot;
        if (!(null === qB ? !QB.visible : QB.visible && qB === QB.info && (sB = yB, wB = QB.tool, sB === wB || null !== sB && null !== wB && sB.key === wB.key && sB.sv === wB.sv && sB.needed === wB.needed) && function(BB, IB) {
            return BB === IB || null !== BB && null !== IB && BB.key === IB.key && JSON.stringify([BB.params, BB.keys]) === JSON.stringify([IB.params, IB.keys])
          }(UB, QB.live) && function(BB, IB) {
            return BB.mode === IB.mode && BB.detail === IB.detail && BB.next === IB.next && BB.nextState === IB.nextState
          }(WB, QB.wrench) && KN(dB, QB.plan) && CB === QB.atomic)) {
          var sB, wB;
          this.snapshot = null === qB ? {
            ...QB,
            visible: !1
          } : {
            info: qB,
            visible: !0,
            tool: yB,
            live: UB,
            wrench: WB,
            plan: dB,
            atomic: CB
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = gy, this.KG = 0, this.sv = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(BB, IB, ZB) {
        if (null === ZB || 0 === IB || !vB() || !zy(this.resolve(BB, IB).rootName)) return !1;
        const TB = `${ZB[0]},${ZB[1]},${ZB[2]},${IB}`,
          JB = performance.now();
        return TB === this.afloatKey && JB - this.afloatAt < dy ? this.afloat : (this.afloatKey = TB, this.afloatAt = JB, function(BB, IB) {
          for (const [ZB, TB, JB] of hy) {
            const oB = IB(BB[0] + ZB, BB[1] + TB, BB[2] + JB);
            if (void 0 === oB || null !== oB && !zy(oB)) return !1
          }
          return !0
        }(ZB, ((IB, ZB, TB) => function(BB, IB, ZB, TB) {
          if (!BB.isBlockInLoadedChunk(IB, ZB, TB)) return;
          const JB = BB.getBlockId(IB, ZB, TB);
          return 0 === JB ? null : BB.getMetaInfo(JB).rootName
        }(BB, IB, ZB, TB))))
      }
      liveMoved(BB) {
        var IB;
        const {
          livePos: ZB
        } = this;
        return null === BB || BB[0] !== ZB[0] || BB[1] !== ZB[1] || BB[2] !== ZB[2] || (null === (IB = this.live) || void 0 === IB ? void 0 : IB.version()) !== this.liveVersion
      }
      updatePlan(BB) {
        const IB = null === BB ? "" : BB.join(","),
          ZB = performance.now();
        if (IB === this.planPos && ZB - this.planMs < 250) return !1;
        this.planPos = IB, this.planMs = ZB;
        const TB = null === BB ? null : this.planAt([BB[0], BB[1], BB[2]]),
          JB = !KN(TB, this.plan);
        return this.plan = TB, JB
      }
      besideMaker(BB, IB, ZB) {
        let {
          info: TB
        } = BB;
        if (null === TB) return null;
        let JB = this.besideMakerById.get(IB);
        if (void 0 === JB) {
          const BB = "cryo" === ZB ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          JB = {
            ...TB,
            detail: `${qy}${BB}`,
            detailItem: null
          }, this.besideMakerById.set(IB, JB)
        }
        return JB
      }
      hanging(BB) {
        let {
          info: IB,
          rootName: ZB
        } = BB;
        if (null === IB) return null;
        let TB = this.afloatByRoot.get(ZB);
        return void 0 === TB && (TB = {
          ...IB,
          detail: `${qy}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(ZB, TB)), TB
      }
      rowsOf(BB, IB) {
        if (null === IB) return Ny;
        const ZB = `${BB}|${IB}`;
        let TB = this.rowsByKey.get(ZB);
        if (void 0 === TB) {
          const JB = function(BB, IB) {
            var ZB;
            if (!(BB in PI)) return [];
            const TB = null !== (ZB = RI[BB]) && void 0 !== ZB ? ZB : [],
              JB = new Map;
            for (const GB of fo(BB, IB))
              if ((TB.includes(GB) || uo(GB.output) && Lo(GB.output) > DB(BB)) && Lo(GB.output) <= IB) {
                var oB;
                const BB = null !== (oB = JB.get(GB.output)) && void 0 !== oB ? oB : [];
                BB.push(GB.input), JB.set(GB.output, BB)
              } return to([...JB], (BB => {
              let [IB] = BB;
              return -Lo(IB)
            })).map((BB => {
              let [IB, ZB] = BB;
              return {
                output: IB,
                inputs: ZB
              }
            }))
          }(BB, IB);
          TB = JB.length > 0 ? JB : Ny, this.rowsByKey.set(ZB, TB)
        }
        return TB
      }
      resolve(BB, IB) {
        const {
          rootId: ZB,
          rootName: TB
        } = BB.getMetaInfo(IB), JB = (0, NZ.j)(TB) ? IB : ZB;
        let oB = this.byRootId.get(JB);
        const GB = vB();
        if (void 0 === oB || oB.nuclear !== GB) {
          var kB;
          const ZB = function(BB) {
            return rT(vy, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB)
          }(TB, BB.blockIdToBlockName(IB));
          oB = {
            info: ZB,
            rootName: TB,
            live: null !== ZB && !0 === (null === (kB = this.live) || void 0 === kB ? void 0 : kB.handles(TB)),
            nuclear: GB
          }, this.byRootId.set(JB, oB)
        }
        return oB
      }
    }
    const dy = 500;
    const Cy = (0, TB.memo)((function(BB) {
      var IB, ZB;
      let {
        store: JB
      } = BB;
      const {
        t: oB
      } = (0, YJ.G)(), [GB, vB] = (0, TB.useState)((() => JB.get()));
      (0, TB.useEffect)((() => (vB(JB.get()), JB.subscribe((() => {
        vB(JB.get())
      })))), [JB]);
      const {
        openInGameMenuName: kB,
        openEverythingMenuName: cB,
        isTouchScreen: nB
      } = (0, WJ.o)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: hB,
        tool: zB,
        live: FB,
        wrench: NB,
        atomic: gB
      } = GB, qB = GB.visible && null === kB && null === cB;
      if (null === hB) return null;
      const yB = null !== NB.detail ? oB(NB.detail) : null !== (IB = GB.plan) && void 0 !== IB && IB.ctrl ? oB("buildAFactory2Game:lookPlanCtrl") : null !== hB.detail ? oB(hB.detail, null === hB.detailItem ? void 0 : {
        item: oB(hB.detailItem)
      }) : null;
      return (0, Oo.jsxs)("div", {
        className: QJ()("Baf2LookTarget", {
          Visible: qB
        }),
        "aria-hidden": !qB,
        children: [(0, Oo.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: oB(hB.name)
        }), null !== GB.plan && (0, Oo.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: oB(GB.plan.key, {
            kind: oB(GB.plan.kindKey),
            w: String(GB.plan.w),
            h: String(GB.plan.h),
            d: String(GB.plan.d),
            count: String(GB.plan.count)
          })
        }), void 0 !== (null === (ZB = GB.plan) || void 0 === ZB ? void 0 : ZB.why) && (0, Oo.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: oB(GB.plan.why)
        }), null !== NB.mode && (0, Oo.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: oB(NB.mode)
        }), null !== zB ? (0, Oo.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: oB(zB.key, {
            item: oB(zB.needed),
            sv: null === zB.sv ? "" : oB(zB.sv)
          })
        }) : null !== FB ? (0, Oo.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: oB(FB.key, oc(oB, FB))
        }) : null !== yB && (0, Oo.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: yB
        }), gB.length > 0 && (0, Oo.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: oB("buildAFactory2Game:lookAtomicRecipes", {
            list: gB.map((BB => {
              let {
                output: IB,
                inputs: ZB
              } = BB;
              const TB = ZB.length > 1 ? ` ${oB("buildAFactory2Game:recipeMore",{count:String(ZB.length-1)})}` : "";
              return `${oB(Zo(ZB[0]))}${TB} \u2192 ${oB(Zo(IB))}`
            })).join(", ")
          })
        }), null !== NB.next && (0, Oo.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: oB(NB.next, {
            state: null === NB.nextState ? "" : oB(NB.nextState),
            use: oB(nB ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Qy = ZB(38562);
    const sy = [],
      wy = [
        [0, -1, 0]
      ];

    function Oy(BB) {
      const IB = [BB];
      for (let ZB = 1; ZB <= 4; ZB++) ZB > 1 && IB.push(`${BB}|meta|rot${ZB}`), IB.push(`${BB}|meta|rot${ZB}|Running`);
      return IB
    }

    function Yy(BB, IB) {
      return [Math.floor(BB[0] / IB), Math.floor(BB[1] / IB), Math.floor(BB[2] / IB)]
    }

    function iy(BB, IB, ZB) {
      return `${BB},${IB},${ZB}`
    }

    function py(BB) {
      const IB = BB.split("|")[0];
      if (!cZ(IB)) return sy;
      const ZB = PI[IB];
      if (IZ(ZB)) return wy;
      const TB = Yq(BB);
      return ZZ(ZB) ? [
        [-TB[0], -TB[1], -TB[2]]
      ] : sJ(ZB) ? function(BB, IB) {
        const ZB = BB[0] - 2 * IB[0],
          TB = BB[2] - 2 * IB[2],
          JB = [];
        for (let oB = -1; oB <= 1; oB++)
          for (let IB = -1; IB <= 1; IB++) JB.push([ZB + oB, BB[1], TB + IB]);
        return JB
      }([0, 0, 0], TB) : sy
    }
    const ay = [.5, .5, .5],
      Hy = [.2, .8, .3],
      My = [.45, 1, .5];
    class jy {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(BB) {
        this.indexed = !0;
        for (const IB of iI)
          for (const ZB of Oy(IB)) {
            const IB = BB.blockNameToBlockId(ZB, !0),
              TB = py(ZB);
            null !== IB && TB.length > 0 && (this.offsetsList.push(TB), this.offsetsIndexById[IB] = this.offsetsList.length)
          }
      }
      onAfterRender(BB, IB) {
        this.indexed || this.index(BB);
        const ZB = performance.now();
        if (ZB - this.lastCheckMs < 100) return;
        this.lastCheckMs = ZB, this.checks++;
        const TB = UN.f.YN,
          [JB, oB, GB] = Yy(IB, TB);
        let vB = !1;
        const kB = [];
        let cB = 0;
        for (let nB = JB - 2; nB <= JB + 2; nB++)
          for (let IB = oB - 1; IB <= oB + 1; IB++)
            for (let JB = GB - 2; JB <= GB + 2; JB++) {
              const oB = cB++,
                GB = iy(nB, IB, JB),
                hB = BB.getChunkVersion(nB, IB, JB);
              let zB = this.chunks.get(GB);
              null !== hB ? (zB || (zB = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(GB, zB)), zB.seenAt = this.checks, zB.checkedVersion !== hB && (zB.checkedVersion = hB, vB = !0), zB.scannedVersion !== hB && ZB - zB.scannedAt >= 500 && kB.push({
                slot: oB,
                entry: zB,
                origin: [nB * TB, IB * TB, JB * TB]
              })) : (vB ||= void 0 !== zB, this.chunks.delete(GB))
            }
        this.scanDue(BB, kB) && (vB = !0);
        for (const [nB, hB] of this.chunks) hB.seenAt !== this.checks && (vB ||= hB.machines.length > 0, this.chunks.delete(nB));
        for (const nB of this.chunks.values())
          for (const [IB, ZB, TB] of nB.cellChunks)(Math.abs(IB - JB) > 2 || Math.abs(ZB - oB) > 1 || Math.abs(TB - GB) > 2) && this.watchCellChunk(BB, IB, ZB, TB) && (vB = !0);
        for (const [nB, hB] of this.cellChunks) hB.seenAt !== this.checks && this.cellChunks.delete(nB);
        vB && this.refresh(BB)
      }
      dispose(BB) {
        this.clearMeshes(BB), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(BB, IB) {
        const ZB = Math.max(IB.findIndex((BB => {
          let {
            slot: IB
          } = BB;
          return IB >= this.scanFrom
        })), 0);
        let TB = 96;
        for (let JB = 0; JB < IB.length; JB++) {
          const {
            slot: oB,
            entry: GB,
            origin: vB
          } = IB[(ZB + JB) % IB.length];
          if (TB -= this.scan(BB, GB, vB), TB <= 0) {
            this.scanFrom = oB + 1;
            break
          }
        }
        return IB.length > 0
      }
      scan(BB, IB, ZB) {
        let [TB, JB, oB] = ZB;
        const GB = UN.f.YN,
          vB = this.hits;
        vB.length = 0;
        const kB = BB.scanBlocks(TB, JB, oB, TB + GB, JB + GB, oB + GB, this.offsetsIndexById, vB),
          cB = [];
        for (let nB = 0; nB < vB.length; nB += 4) cB.push({
          pos: [vB[nB], vB[nB + 1], vB[nB + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[vB[nB + 3]] - 1]
        });
        return IB.machines = cB, IB.cellChunks = function(BB, IB) {
          const ZB = new Set,
            TB = [];
          for (const {
              pos: JB,
              offsets: oB
            }
            of BB)
            for (const [BB, GB, vB] of oB) {
              const oB = Yy([JB[0] + BB, JB[1] + GB, JB[2] + vB], IB),
                kB = iy(...oB);
              ZB.has(kB) || (ZB.add(kB), TB.push(oB))
            }
          return TB
        }(cB, GB), IB.scannedVersion = IB.checkedVersion, IB.scannedAt = performance.now(), Math.max(kB, 1)
      }
      watchCellChunk(BB, IB, ZB, TB) {
        const JB = iy(IB, ZB, TB),
          oB = BB.getChunkVersion(IB, ZB, TB),
          GB = this.cellChunks.get(JB);
        return null === oB ? this.cellChunks.delete(JB) : (null === GB || void 0 === GB ? void 0 : GB.version) === oB ? (GB.seenAt = this.checks, !1) : (this.cellChunks.set(JB, {
          version: oB,
          seenAt: this.checks
        }), !0)
      }
      refresh(BB) {
        const IB = function(BB, IB) {
            const ZB = new Set,
              TB = [];
            for (const {
                pos: JB,
                offsets: oB
              }
              of BB)
              for (const [BB, GB, vB] of oB) {
                const oB = JB[0] + BB,
                  kB = JB[1] + GB,
                  cB = JB[2] + vB,
                  nB = `${oB},${kB},${cB}`;
                ZB.has(nB) || (ZB.add(nB), IB(oB, kB, cB) && TB.push([oB, kB, cB]))
              }
            return TB
          }([...this.chunks.values()].flatMap((BB => BB.machines)), ((IB, ZB, TB) => BB.isBlockInLoadedChunk(IB, ZB, TB) && 0 === BB.getBlockId(IB, ZB, TB))),
          ZB = IB.join(";");
        ZB !== this.shownKey && (this.shownKey = ZB, this.clearMeshes(BB), IB.length > 0 && (this.meshes = [this.build(BB, IB, !1), this.build(BB, IB, !0)]))
      }
      build(BB, IB, ZB) {
        const TB = IB[0],
          JB = [],
          oB = [];
        for (const [GB, vB, kB] of IB)(0, Qy.d)(JB, oB, [GB - TB[0] + .5, vB - TB[1] + .5, kB - TB[2] + .5], ay, ZB);
        return BB.createGameMesh({
          positions: JB,
          indices: oB
        }, {
          rgb: ZB ? My : Hy,
          alpha: .4
        }, TB)
      }
      clearMeshes(BB) {
        for (const IB of this.meshes) BB.disposeGameMesh(IB);
        this.meshes = []
      }
    }
    const Py = 1 / .6,
      Ry = 200,
      ry = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      my = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Xy = 2 * Math.PI / 3;
    class Ly {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ry;
        this.style = BB, this.particles = null, this.points = new Float32Array(800), this.budget = Ry, this.lastMs = 0
      }
      static blade() {
        return new Ly(my)
      }
      rU(BB, IB) {
        const ZB = Math.min(IB.arcStruck, IB.arcPoints.length);
        this.draw(BB, [IB.arcFrom, ...IB.arcPoints], IB.arcPoints.slice(0, ZB))
      }
      onBlade(BB, IB) {
        const [ZB, TB, JB] = IB.bladeCentre, [oB, GB] = IB.bladeFacing, vB = ZB - 1.5 * oB, kB = JB - 1.5 * GB, cB = Math.atan2(GB, oB), nB = [];
        for (let hB = 0; hB <= 8; hB++) {
          const BB = cB - Xy / 2 + Xy * hB / 8;
          nB.push([vB + 2.5 * Math.cos(BB), TB, kB + 2.5 * Math.sin(BB)])
        }
        this.draw(BB, nB, IB.bladeStruck)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
      draw(BB, IB, ZB) {
        if (!BB.particlesEnabled() || IB.length < 2) return;
        const TB = performance.now();
        this.budget = Math.min(Ry, this.budget + (TB - this.lastMs) / 1e3 * Ry), this.lastMs = TB;
        const JB = [];
        let oB = 0,
          GB = IB[0];
        for (const yB of IB.slice(1)) {
          const BB = Math.min(48, Math.round(Math.hypot(yB[0] - GB[0], yB[1] - GB[1], yB[2] - GB[2]) * this.style.perBlock));
          JB.push([GB, yB, BB]), oB += BB, GB = yB
        }
        const vB = ZB.length;
        oB += 10 * vB;
        const kB = oB > this.budget ? this.budget / oB : 1;
        if (0 === oB || kB * oB < 1) return;
        const cB = IB[0],
          [nB, hB, zB] = cB,
          FB = this.points;
        let NB = 0;
        const gB = (BB, IB, ZB, TB) => {
          const JB = 4 * NB;
          FB[JB] = BB - nB, FB[JB + 1] = IB - hB, FB[JB + 2] = ZB - zB, FB[JB + 3] = TB, NB++
        };
        JB.forEach(((BB, IB) => {
          let [ZB, TB, JB] = BB;
          const oB = Math.min(Math.floor(JB * kB), Ry - NB),
            GB = Math.hypot(TB[0] - ZB[0], TB[1] - ZB[1], TB[2] - ZB[2]),
            vB = 0 === IB && GB > 0 ? Math.min(.5, .1 * GB) / GB : 0;
          for (let kB = 0; kB < oB; kB++) {
            const BB = vB + (kB + .5) / oB * (1 - vB);
            gB(ZB[0] + (TB[0] - ZB[0]) * BB, ZB[1] + (TB[1] - ZB[1]) * BB, ZB[2] + (TB[2] - ZB[2]) * BB, .15)
          }
        }));
        const qB = Math.floor(10 * kB);
        for (let yB = 0; yB < vB; yB++) {
          const [BB, IB, TB] = ZB[yB];
          for (let ZB = 0; ZB < qB && NB < Ry; ZB++) gB(BB, IB, TB, 2.5)
        }
        this.budget -= NB, this.particles ??= BB.createParticles(function(BB) {
          const [IB, ZB] = BB.colours;
          return {
            texture: "square_particle",
            ah: 400,
            minLifeTime: BB.life[0] / Py,
            maxLifeTime: BB.life[1] / Py,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [IB[0], IB[1], IB[2], 1],
              maxColor: [ZB[0], ZB[1], ZB[2], 1]
            }, {
              timeFraction: 1,
              minColor: [IB[0], IB[1], IB[2], 0],
              maxColor: [ZB[0], ZB[1], ZB[2], 0]
            }],
            blendMode: rv.g.Add
          }
        }(this.style), {
          pos: cB
        }), this.particles.emitPoints(cB, FB, NB)
      }
    }
    const ey = new Set(["Sky Spring"]);

    function uy(BB, IB, ZB) {
      const TB = BB.split("|")[0];
      return "Air" !== IB || ZB || ! function(BB) {
        const IB = BB.split("|")[0];
        return void 0 !== GZ[IB] || ey.has(IB)
      }(TB) ? null : BB
    }
    class fy {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(BB) {
        const IB = BB - this.lastTapAt >= 300;
        return this.lastTapAt = BB, IB
      }
    }
    class ly {
      constructor() {
        this.presses = new fy, this.predicted = null
      }
      tap(BB, IB) {
        const ZB = this.presses.isNewPress(IB);
        return ZB && (this.predicted = {
          station: BB,
          at: IB
        }), ZB
      }
      consumeServerOpen(BB, IB) {
        const ZB = this.predicted;
        return !(null === ZB || ZB.station !== BB || IB - ZB.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Ay {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(BB, IB) {
        return BB && (this.thrustAt = IB), IB - this.thrustAt < 200
      }
    }
    const ty = [.1, .05, .1],
      by = {
        texture: "effect_5",
        ah: Math.ceil(48),
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
        blendMode: rv.g.OneOne
      };
    class xy {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Ay, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      rU(BB, IB) {
        for (const [ZB, TB] of IB.baf2JetFlames) BB.isLocalPlayer(ZB) || (TB ? this.lit.add(ZB) : this.lit.delete(ZB))
      }
      onAfterRender(BB, IB) {
        const ZB = performance.now(),
          TB = this.hold.lit(this.selfThrusting(BB, IB), ZB);
        for (const [JB, oB] of this.flames)(JB === IB ? TB : this.lit.has(JB)) || this.setEmitting(oB, !1), JB === IB || BB.getPositionView(JB) ? !oB.emitting && ZB - oB.offAt >= 1300 && (oB.particles.stop(), this.flames.delete(JB)) : (oB.particles.dispose(), this.flames.delete(JB), this.lit.delete(JB));
        TB && this.draw(BB, IB, IB);
        for (const JB of this.lit) this.draw(BB, IB, JB)
      }
      dispose() {
        for (const BB of this.flames.values()) BB.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(BB, IB) {
        var ZB;
        const TB = BB.getLocalPlayerMovement();
        return !!TB && (null !== (JB = {
          option: null !== (ZB = BB.getClientOption(IB, "jumpHoldThrust")) && void 0 !== ZB ? ZB : null,
          jumping: TB.jumpHeld,
          onGround: TB.onGround,
          alive: BB.isAlive(IB)
        }).option && JB.option.maxUpSpeed >= 0 && JB.jumping && !JB.onGround && JB.alive);
        var JB
      }
      draw(BB, IB, ZB) {
        var TB, JB;
        const oB = this.pos;
        if (!BB.readDrawnPosition(ZB, oB)) return;
        const GB = BB.readDrawnPosition(IB, this.camera) ? this.camera : oB;
        if (!((oB[0] - GB[0]) ** 2 + (oB[1] - GB[1]) ** 2 + (oB[2] - GB[2]) ** 2 < 1600) || !BB.particlesEnabled()) {
          const BB = this.flames.get(ZB);
          return void(BB && this.setEmitting(BB, !1))
        }
        const vB = null !== (TB = this.flames.get(ZB)) && void 0 !== TB ? TB : this.create(BB, ZB, oB),
          kB = null !== (JB = BB.getDrawnHeading(ZB)) && void 0 !== JB ? JB : 0,
          cB = this.at;
        cB[0] = oB[0] - .35 * Math.sin(kB), cB[1] = oB[1] + 1.05, cB[2] = oB[2] - .35 * Math.cos(kB), vB.particles.moveTo(cB), this.setEmitting(vB, !0)
      }
      setEmitting(BB, IB) {
        BB.emitting !== IB && (BB.emitting = IB, IB || (BB.offAt = performance.now()), BB.particles.setEmitRate(IB ? 60 : 0))
      }
      create(BB, IB, ZB) {
        const TB = {
          particles: BB.createParticles(by, {
            pos: ZB,
            half: ty
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(IB, TB), TB
      }
    }

    function Ey(BB) {
      return "Reactor Frame" === TT("reactor", BB)
    }

    function Dy(BB) {
      return XZ("reactor", BB) && !Ey(BB) && (BB.startsWith("Reactor Glass") || BB.startsWith("Reactor Port"))
    }
    const Ky = "baf2Goal";
    class Vy {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [jJ.l.subscribe("setDirectionArrow", (BB => {
          let {
            id: IB,
            position: ZB
          } = BB;
          IB === Ky && (this.goal = ZB, this.checkedAt = -1 / 0)
        })), jJ.l.subscribe("clearDirectionArrow", (BB => {
          let {
            id: IB
          } = BB;
          null !== IB && IB !== Ky || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const BB of this.subs) jJ.l.unsubscribe(BB)
      }
      sideOf(BB, IB, ZB, TB) {
        const JB = this.goal;
        if (!JB) return 0;
        ZB - this.checkedAt > 1e3 && (this.checkedAt = ZB, this.open = function(BB, IB) {
          const [ZB, TB, JB] = BB.map(Math.floor);
          if (!Dy(IB(ZB, TB, JB))) return null;
          for (const [oB, GB] of [
              [1, 0],
              [0, 1]
            ]) {
            const BB = IB(ZB + oB, TB, JB + GB),
              vB = IB(ZB - oB, TB, JB - GB);
            if (Ey(vB) && Dy(BB)) return [oB, 0, GB];
            if (Ey(BB) && Dy(vB)) return [0 - oB, 0, 0 - GB]
          }
          return null
        }(JB, ((IB, ZB, TB) => BB.blockIdToBlockName(BB.getBlockId(IB, ZB, TB)))));
        const oB = this.open;
        if (!oB) return 0;
        const GB = TB(JB);
        if (Math.abs(GB.x - IB.x) > .05 || Math.abs(GB.y - IB.y) > .05) return 0;
        const vB = TB([JB[0] + oB[0], JB[1], JB[2] + oB[2]]).x - GB.x;
        return Math.abs(vB) < .3 ? 0 : vB > 0 ? 1 : -1
      }
    }
    class Sy {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new Vy, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.WN = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.kU = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((BB => {
          for (const IB of BB) IB.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(IB.target, IB.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.WN || this.clear()
        }, window.addEventListener("resize", this.kU)
      }
      onAfterRender(BB, IB) {
        var ZB;
        this.api = BB, this.project = null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.projectWorldPosToScreenPos) && void 0 !== ZB ? ZB : null, this.queued || this.WN || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.WN = !0;
        for (const BB of this.moved.keys()) BB.style.transform = "";
        this.moved.clear();
        for (const BB of this.sideLabels.keys()) BB.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.kU)
      }
      clear() {
        for (const oB of this.moved.keys()) oB.isConnected || this.moved.delete(oB);
        for (const oB of this.sideLabels.keys()) oB.isConnected || this.sideLabels.delete(oB);
        if (0 === this.arrows.length) return;
        const BB = performance.now(),
          IB = BB - this.refreshedAt > 1e3;
        IB && (this.refreshedAt = BB, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const ZB = this.trackerBox(),
          TB = this.barsBox(),
          JB = this.toastBox(IB);
        (ZB || TB || JB) && IB && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let oB = 0; oB < this.arrows.length; oB++) {
          const IB = this.arrows[oB];
          this.labelOffsets.set(IB, this.runLabelAside(IB, BB));
          const GB = (ZB ? this.shiftLeftOf(IB, ZB) : 0) || this.shiftOnScreen(IB),
            vB = Math.min(TB ? this.liftAbove(IB, TB, GB) : 0, JB ? this.liftAbove(IB, JB, GB) : 0),
            kB = this.moved.get(IB);
          if (0 !== GB || 0 !== vB) {
            const BB = 0 === vB ? `translateX(${GB}px)` : `translate(${GB}px, ${vB}px)`;
            kB !== BB && (IB.style.transform = BB, this.moved.set(IB, BB))
          } else void 0 !== kB && (IB.style.transform = "", this.moved.delete(IB))
        }
      }
      trackerBox() {
        var BB, IB;
        const ZB = null !== (BB = this.tracker) && void 0 !== BB && BB.isConnected ? this.tracker : null !== (IB = this.trackers[0]) && void 0 !== IB ? IB : null;
        if (ZB !== this.tracker && this.watch(ZB), this.boxStale && ZB) {
          var TB, JB, oB;
          this.boxStale = !1;
          const BB = ZB.closest(".NoRoom") ? null : ZB.getBoundingClientRect(),
            IB = BB && BB.width > 0 ? null === (TB = this.hud) || void 0 === TB ? void 0 : TB.getBoundingClientRect() : void 0,
            GB = BB && IB ? Math.max(BB.top, IB.top) : null !== (JB = null === BB || void 0 === BB ? void 0 : BB.top) && void 0 !== JB ? JB : 0,
            vB = BB && IB ? Math.min(BB.bottom, IB.bottom) : null !== (oB = null === BB || void 0 === BB ? void 0 : BB.bottom) && void 0 !== oB ? oB : 0;
          this.box = BB && BB.width > 0 && vB > GB ? {
            left: BB.left,
            top: GB,
            right: BB.right,
            bottom: vB
          } : null
        }
        return ZB ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var BB;
          this.barsStale = !1;
          const IB = null === (BB = this.statBars[0]) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
          this.bars = IB && IB.width > 0 && IB.height > 0 ? {
            left: IB.left,
            top: IB.top,
            right: IB.right,
            bottom: IB.bottom
          } : null
        }
        return this.bars
      }
      toastBox(BB) {
        var IB;
        const ZB = null !== (IB = this.toasts[0]) && void 0 !== IB ? IB : null;
        if (ZB !== this.toastEl || BB && ZB) {
          this.toastEl = ZB;
          const BB = null === ZB || void 0 === ZB ? void 0 : ZB.getBoundingClientRect();
          this.toast = BB && BB.width > 0 && BB.height > 0 ? {
            left: BB.left,
            top: BB.top,
            right: BB.right,
            bottom: BB.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(BB, IB, ZB) {
        var TB;
        const JB = this.anchorOf(BB);
        if (!JB) return 0;
        const oB = JB.x + ZB + (null !== (TB = this.labelOffsets.get(BB)) && void 0 !== TB ? TB : 0),
          {
            halfWidth: GB,
            labelled: vB
          } = this.extentOf(BB),
          kB = JB.y + this.em * (vB ? 6.2 : 3);
        return kB < IB.top - 6 || oB + GB < IB.left - 6 || oB - GB > IB.right + 6 ? 0 : IB.top - 6 - kB
      }
      watch(BB) {
        var IB, ZB;
        this.tracker && this.sizes.unobserve(this.tracker), null === (IB = this.hud) || void 0 === IB || IB.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = BB, this.hud = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.closest(".Baf2QuestHud")) && void 0 !== ZB ? ZB : null, this.box = null, this.boxStale = !0, BB && this.sizes.observe(BB), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(BB, IB) {
        var ZB;
        const TB = this.anchorOf(BB);
        if (!TB) return 0;
        const {
          y: JB
        } = TB, oB = TB.x + (null !== (ZB = this.labelOffsets.get(BB)) && void 0 !== ZB ? ZB : 0), GB = this.em, {
          halfWidth: vB,
          labelled: kB
        } = this.extentOf(BB), cB = JB - GB, nB = oB + vB;
        return JB + GB * (kB ? 6.2 : 3) < IB.top || cB > IB.bottom || nB < IB.left - 6 || oB - vB > IB.right ? 0 : Math.max(IB.left - 6 - nB, 6 - (oB - vB))
      }
      shiftOnScreen(BB) {
        var IB;
        const ZB = this.anchorOf(BB);
        if (!ZB) return 0;
        const {
          halfWidth: TB
        } = this.extentOf(BB), JB = ZB.x + (null !== (IB = this.labelOffsets.get(BB)) && void 0 !== IB ? IB : 0), oB = JB + TB - (this.innerWidth - 6);
        return oB > 0 ? -oB : Math.max(0, 6 - (JB - TB))
      }
      runLabelAside(BB, IB) {
        var ZB;
        let TB = null;
        for (let GB = 0; GB < BB.children.length; GB++) BB.children[GB].classList.contains("DirectionArrowLabel") && (TB = BB.children[GB]);
        if (!TB) return 0;
        const JB = BB.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(BB) : null,
          oB = (JB && this.api ? this.side.sideOf(this.api, {
            x: JB.x / this.innerWidth * 100,
            y: JB.y / this.innerHeight * 100
          }, IB, this.project) : 0) * this.halfWidthOf(TB);
        return oB !== (null !== (ZB = this.sideLabels.get(TB)) && void 0 !== ZB ? ZB : 0) && (TB.style.transform = 0 === oB ? "" : `translateX(-50%) translateX(${oB}px)`, 0 === oB ? this.sideLabels.delete(TB) : this.sideLabels.set(TB, oB)), oB
      }
      extentOf(BB) {
        let IB = this.em,
          ZB = !1;
        for (let TB = 0; TB < BB.children.length; TB++) {
          const JB = BB.children[TB],
            oB = JB.classList.contains("DirectionArrowLabel");
          ZB ||= oB, (oB || JB.classList.contains("DirectionArrowDistance")) && (IB = Math.max(IB, this.halfWidthOf(JB)))
        }
        return {
          halfWidth: IB,
          labelled: ZB
        }
      }
      halfWidthOf(BB) {
        let IB = this.halfWidths.get(BB);
        return void 0 === IB && (IB = BB.offsetWidth / 2, this.halfWidths.set(BB, IB), this.sizes.observe(BB), this.labels.add(BB)), IB
      }
      forgetGoneLabels() {
        for (const BB of this.labels) BB.isConnected || (this.sizes.unobserve(BB), this.halfWidths.delete(BB), this.labels.delete(BB))
      }
      anchorOf(BB) {
        const IB = BB.style.translate,
          ZB = this.anchors.get(BB);
        if (ZB && ZB.translate === IB && ZB.innerWidth === this.innerWidth && ZB.innerHeight === this.innerHeight) return ZB;
        const TB = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(IB);
        if (!TB) return null;
        const JB = {
          translate: IB,
          x: parseFloat(TB[1]) / 100 * this.innerWidth,
          y: parseFloat(TB[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(BB, JB), JB
      }
    }
    const BU = "Baf2ArrowText";

    function IU(BB, IB) {
      const ZB = BB.rows.find((BB => BB.current));
      return jB(BB.tutorial) && null !== ZB && void 0 !== ZB && ZB.item && lJ(ZB) && pB(ZB.item).includes(IB) ? ZB.item : null
    }
    const ZU = new class {
      constructor(BB) {
        this.select = BB, this.picks = new Map
      }
      open(BB, IB, ZB) {
        const TB = IU(IB, BB);
        null !== TB && this.TF(BB, TB, ZB)
      }
      follow(BB, IB) {
        if (vB())
          for (const [ZB, {
              item: TB,
              had: JB
            }] of this.picks) {
            const oB = IU(BB, ZB);
            oB !== TB && (null !== oB && IB(TB) > JB ? this.TF(ZB, oB, IB) : this.picks.delete(ZB))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      TF(BB, IB, ZB) {
        this.picks.set(BB, {
          item: IB,
          had: ZB(IB)
        }), this.select(BB, IB)
      }
    }(PJ.o);

    function TU(BB) {
      return IB => {
        let ZB = 0;
        for (const TB of BB.getInventoryItems())(null === TB || void 0 === TB ? void 0 : TB.name) === IB && (ZB += null === TB.amount ? 1 : Math.max(TB.amount, 0));
        return ZB
      }
    }

    function JU(BB, IB, ZB, TB) {
      BB.getClientOption(IB, "canCraft") && "inventory" !== WJ.d.get("openInGameMenuName") && (ZU.open(ZB, TB.get(), TU(BB)), jJ.l.Gq("toggleMenu", `inventory|${ZB}`))
    }
    let oU = null,
      GU = !1;

    function vU(BB) {
      const IB = wo();
      BB === oU && IB === GU || (oU = BB, GU = IB, (0, PJ.r)(function(BB, IB) {
        const ZB = new Map;
        for (let TB = BB + 1; TB <= JB.length; TB++) {
          const JB = bo(TB, BB, IB);
          if (JB)
            for (const IB of yB(TB).unlocks) ZB.set(IB, {
              ...JB,
              stepsAway: TB - BB
            })
        }
        return ZB
      }(BB, IB)))
    }

    function kU() {
      return BB = () => {
        null !== oU && vU(oU)
      }, (0, Qo.l)(so, BB);
      var BB
    }

    function cU() {
      return (0, PJ.w)(to(Object.keys(iB), Lo)), () => {
        (0, PJ.w)([])
      }
    }

    function nU(BB, IB, ZB) {
      var TB, JB;
      const oB = BB.getTargetedBlock();
      if (!oB || ! function(BB, IB, ZB) {
          if ("Chest" !== IB) return !1;
          const TB = BB.split("|")[0];
          if (!cZ(TB) || 0 === PI[TB].outputSlots.length) return !1;
          const JB = Yq(BB);
          return ZB[0] === JB[0] && ZB[1] === JB[1] && ZB[2] === JB[2]
        }(ZB, null === (TB = BB.FZB(IB)) || void 0 === TB ? void 0 : TB.name, oB.normal)) return !1;
      const [GB, vB, kB] = oB.oq, cB = BB.getBlockId(GB, vB, kB);
      return 0 === cB || !0 === (null === (JB = HB.f[cB]) || void 0 === JB ? void 0 : JB.canBePlacedOver)
    }
    var hU = ZB(36783);
    const zU = new Set(gZ.d);
    class FU {
      constructor(BB) {
        this.toasts = BB, this.lastAt = -1 / 0
      }
      onAltAction(BB, IB, ZB) {
        const TB = BB.getTargetedBlock();
        if (!TB || function(BB) {
            const IB = BB.split("|")[0];
            return cZ(IB) || null !== sT(IB) || OB(IB) || gZ.d.includes(IB)
          }(ZB) && !zU.has(ZB.split("|")[0])) return;
        const JB = BB.FZB(IB);
        if (!JB || !zU.has(JB.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const oB = JB.typeObj.id,
          [GB, vB, kB] = TB.oq,
          cB = BB.getBlockId(GB, vB, kB),
          nB = HB.f[cB];
        (0 === cB || null !== nB && void 0 !== nB && nB.gF || null !== nB && void 0 !== nB && nB.canBePlacedOver) && BB.isSolidToPlayerBlockId(oB) && BB.canModifyBlockAt(GB, vB, kB) && BB.HIB(GB, vB, kB, oB) && !BB.HIB(GB, vB, kB, oB, IB) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, PB.de)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, PB.P.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class NU {
      constructor(BB) {
        this.show = BB, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(BB, IB, ZB) {
        var TB;
        if (!IB) return this.started = null, void this.gatedThisHold.clear();
        if (!BB) return void(this.started = null);
        const JB = `${BB.x},${BB.y},${BB.z},${BB.sv}`;
        if (JB === this.started) return;
        this.started = JB;
        const oB = mT(BB.y) ? ky(BB.block, BB.sv, BB.level) : null;
        if (null === oB || this.gatedThisHold.has(JB)) return;
        this.gatedThisHold.add(JB);
        const GB = BB.block.split("|")[0];
        ZB - (null !== (TB = this.hintedAt.get(GB)) && void 0 !== TB ? TB : -1 / 0) < 5e3 || (this.hintedAt.set(GB, ZB), this.show({
          baf2ToastText: cy(oB, BB.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var gU = ZB(36);

    function qU(BB, IB) {
      const ZB = [...BB.baf2CoreBankPaused];
      for (const [JB] of BB.baf2CoreBanked) ZB.push(JB);
      for (const GB of JB) {
        for (const {
            item: BB
          }
          of GB.cost) ZB.push(BB);
        for (const BB of GB.newDeposits) ZB.push(BB.block);
        for (const BB of GB.unlocks) ZB.push(BB, aB(BB));
        GB.reward && ZB.push(GB.reward);
        for (const {
            item: BB
          }
          of null !== (TB = null === (oB = GB.charge) || void 0 === oB ? void 0 : oB.items) && void 0 !== TB ? TB : []) {
          var TB, oB;
          ZB.push(BB)
        }
      }
      return {
        message: BB,
        itemNames: IB([...new Set(ZB)])
      }
    }
    const yU = "baf2MultiblockGuide";
    const UU = new Map;
    const WU = function(BB, IB, ZB, JB) {
      let {
        localPlayerId: oB
      } = JB;
      const GB = new yv,
        vB = new cF,
        cB = new qF,
        nB = new NF(cB),
        hB = (BB, IB) => {
          IB ? nB.observe(BB) : nB.unobserve(BB)
        },
        zB = new FF,
        FB = new UF(hB),
        NB = BB => FB.covers(BB),
        gB = new XF;
      let qB;
      const yB = new eG((BB => {
          qB.sendCommand(BB)
        })),
        UB = () => {
          yB.send("baf2questbook")
        },
        WB = BB => function(BB, IB, ZB) {
          const TB = {};
          for (const JB of ZB) {
            let ZB = UU.get(JB);
            void 0 === ZB && (ZB = BB.getItemStat(IB, JB, "displayName"), UU.set(JB, ZB)), TB[JB] = ZB
          }
          return TB
        }(qB, oB, BB),
        dB = new XJ(UB),
        CB = new DF((() => WJ.d.get("loadingOverlayVisible"))),
        QB = new an(yB, dB, CB),
        sB = new IN,
        wB = new FU(CB),
        YB = new NU((BB => {
          CB.show(BB, BB.baf2ToastMs)
        })),
        iB = new nN(hB),
        pB = new rq(iB),
        aB = new OG,
        MB = new oy,
        jB = new Tv,
        rB = new yN({
          read: () => !1 !== gU.m.getItem(yU),
          write: BB => {
            gU.m.setItem(yU, BB)
          }
        }),
        mB = new AN(rB),
        XB = new xN(rB),
        LB = new gg(rB, (BB => function(BB, IB) {
          const ZB = Bk(IB.w, IB.h, IB.d),
            TB = new Uint8Array(ZB);
          for (let JB = 0; JB < ZB; JB++) {
            const ZB = LN(BB, VZ(IB, ZT(IB, JB)));
            TB[JB] = null === ZB ? 0 : Dv(ZB)
          }
          return TB
        }(qB, BB)), Gg(yB)),
        eB = new qg(rB, Gg(yB)),
        uB = new Fg,
        AB = (BB, IB) => {
          let [ZB, TB, JB] = BB;
          uB.answered(IB) || CB.show({
            baf2ToastText: [(0, PB.de)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: ZB,
                h: TB,
                d: JB
              }
            }, PB.P.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      LB.onSizeNotTaken(AB), eB.onSizeNotTaken(AB);
      const tB = new dg,
        bB = new Bq(rB),
        EB = new Zq,
        DB = new Fq(EB),
        KB = new wq,
        SB = new mq,
        BI = new xq(SB),
        II = new Jy(SB),
        ZI = SB.lookSource(),
        TI = new Wy({
          handles: BB => ZI.handles(BB) || BB === RB,
          line: (BB, IB) => BB === RB ? function(BB, IB, ZB) {
            var TB;
            const JB = lB(null === (TB = IB.at(ZB)) || void 0 === TB ? void 0 : TB.item);
            return null === JB ? {
              key: `${qy}lookFarmEmpty`
            } : {
              key: BB.blockIdToBlockName(BB.getBlockId(ZB[0], ZB[1], ZB[2])).endsWith("|Running") ? `${qy}lookFarmRunning` : `${qy}lookFarmWaiting`,
              keys: {
                mob: fB(JB)
              }
            }
          }(qB, iB, IB) : ZI.line(BB, IB),
          version: () => ZI.version() + iB.version()
        }, (BB => DN(rB.all(), BB, (BB => LN(qB, BB)))), (() => dB.get().tier)),
        JI = new Xg,
        oI = new jy,
        GI = new Ly,
        vI = Ly.blade(),
        kI = new xy,
        cI = new JN,
        nI = new Sy,
        zI = new ly,
        FI = new fy;
      let NI = -1 / 0,
        gI = 0,
        qI = -1 / 0,
        yI = -1 / 0;
      const UI = () => {
          yB.send("baf2islandsclose"), yI = Date.now()
        },
        WI = [];

      function dI(BB) {
        var IB, ZB, TB, JB, oB, GB, kB;
        "core" === (null === (IB = vB.get()) || void 0 === IB ? void 0 : IB.kind) && "core" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && yB.send("baf2coreclose"), "power" === (null === (ZB = vB.get()) || void 0 === ZB ? void 0 : ZB.kind) && "power" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && yB.send("baf2powerclose"), "water" === (null === (TB = vB.get()) || void 0 === TB ? void 0 : TB.kind) && "water" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && yB.send(VB.x), "terminal" === (null === (JB = vB.get()) || void 0 === JB ? void 0 : JB.kind) && "terminal" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && yB.send("baf2terminalclose"), "islands" === (null === (oB = vB.get()) || void 0 === oB ? void 0 : oB.kind) && "islands" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && UI();
        const cB = SB.getStatus();
        "collider" === (null === (GB = vB.get()) || void 0 === GB ? void 0 : GB.kind) && "collider" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && cB && yB.send(Xk(cB, "close"));
        const nB = BB => "reactor" === BB || "battery" === BB;
        if (nB(null === (kB = vB.get()) || void 0 === kB ? void 0 : kB.kind) && !nB(null === BB || void 0 === BB ? void 0 : BB.kind)) {
          var hB, zB, FB;
          const BB = "reactor" === (null === (hB = vB.get()) || void 0 === hB ? void 0 : hB.kind) ? null === (zB = LB.get()) || void 0 === zB ? void 0 : zB.status.baf2RxAt : null === (FB = eB.get()) || void 0 === FB ? void 0 : FB.status.baf2BatAt;
          BB && yB.send(hI(BB, "close"))
        }
        "quests" === (null === BB || void 0 === BB ? void 0 : BB.kind) && UB(), vB.set(BB), null === BB && sB.release()
      }

      function CI() {
        (0, UJ.f)(), dI(null)
      }
      let QI = new Set,
        sI = !1;
      const wI = {
        onCreate: BB => {
          qB = BB, qB.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const IB of iI) {
            const BB = PI[IB].inputSlots ? jv(GB) : av(IB, GB, aB, yB);
            WI.push((0, qJ.f)(IB, BB))
          }
          WI.push((0, UJ.x)((0, TB.createElement)(TB.Fragment, null, (0, TB.createElement)(CF, {
            controller: FB
          }), (0, TB.createElement)(FN, {
            store: iB
          }), (0, TB.createElement)(Cy, {
            store: TI
          }), (0, TB.createElement)(xF, {
            store: dB
          }), (0, TB.createElement)(SF, {
            store: CB
          }), (0, TB.createElement)(ZN, {
            store: sB
          }), (0, TB.createElement)(GN, {
            store: cI
          }), (0, TB.createElement)(Wg, {
            store: tB
          }), (0, TB.createElement)(Tq, {
            store: EB
          })), {
            content: (0, TB.createElement)(nF, {
              commands: yB,
              store: vB,
              power: aB,
              water: jB,
              reactor: LB,
              battery: eB,
              collider: SB,
              terminal: MB,
              quests: dB,
              tutorial: QB,
              close: UJ.i,
              leave: () => {
                sB.dropHeld(), (0, UJ.f)()
              },
              askIslands: () => {
                yI = -1 / 0, NI = Date.now(), gI = yB.send(xB)
              },
              openSocial: () => {
                (0, UJ.f)(), WJ.d.set({
                  openEverythingMenuName: hZ.q.SOCIAL
                })
              },
              showCore: BB => {
                dI({
                  kind: "core",
                  core: BB
                }), yB.send("baf2corereopen")
              }
            }),
            onClose: () => {
              dI(null)
            }
          })), WI.push((0, yJ.s)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              dI({
                kind: "quests"
              }), (0, UJ.t)()
            }
          })), WI.push(function(BB, IB) {
            let ZB = null,
              TB = () => {};
            const JB = IB => {
              var JB;
              let {
                tutorial: oB,
                tutorialKnown: GB
              } = IB;
              (null === (JB = ZB) || void 0 === JB ? void 0 : JB.tutorial) === oB && ZB.tutorialKnown === GB || (ZB = {
                tutorial: oB,
                tutorialKnown: GB
              }, TB = (0, yJ.s)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: Yn[oB],
                icon: {
                  kind: "icon",
                  name: On[oB]
                },
                iconOnly: !0,
                disabled: !GB,
                className: "Baf2TutorialButton",
                onClick: () => {
                  BB.next()
                }
              }))
            };
            JB(IB.get());
            const oB = jJ.l.subscribe(RJ, JB);
            return () => {
              jJ.l.unsubscribe(oB), TB()
            }
          }(QB, dB)), sI = !1, WI.push(kU()), WI.push(cU()), WI.push(function() {
            const BB = jJ.l.subscribe(RJ, VJ),
              IB = () => {
                if (KJ) {
                  const BB = KJ;
                  KJ = null, (0, PJ.s)(BB)
                }
              },
              ZB = jJ.l.subscribe("toggleMenu", (BB => {
                "inventory" === (null === BB || void 0 === BB ? void 0 : BB.split("|")[0]) && IB()
              })),
              TB = jJ.l.subscribe("appManagerUpdated|openInGameMenuName", (BB => {
                "inventory" === BB && IB()
              }));
            return () => {
              jJ.l.unsubscribe(BB), jJ.l.unsubscribe(ZB), jJ.l.unsubscribe(TB)
            }
          }()), WI.push(function(BB) {
            const IB = TU(BB),
              ZB = jJ.l.subscribe(RJ, (BB => {
                ZU.follow(BB, IB)
              }));
            return () => {
              jJ.l.unsubscribe(ZB), ZU.clear()
            }
          }(qB)), WI.push(function() {
            const BB = document.documentElement,
              IB = (0, eF.e)(".InvenBodyRight", [], (() => {
                const IB = document.querySelector(".InvenBodyRight");
                IB && BB.style.setProperty("--baf2-backpack-width", `${IB.offsetWidth}px`)
              }));
            return () => {
              IB(), BB.style.removeProperty("--baf2-backpack-width")
            }
          }()), WI.push(function() {
            const BB = document.documentElement;
            return BB.classList.add(BU), () => {
              BB.classList.remove(BU)
            }
          }()), WI.push((() => {
            nB.dispose(), cB.dispose()
          })), gB.start(qB), WI.push((() => {
            gB.dispose(), kI.dispose(), pB.dispose()
          }))
        },
        onClose: () => {
          (0, PJ.s)([]), KJ = null, DJ = new Set, oU = null, (0, PJ.r)(new Map), UU.clear();
          for (const BB of WI) BB();
          dB.dispose(), TI.dispose(), CB.dispose(), sB.dispose(), JI.dispose(), oI.dispose(qB), mB.dispose(qB), XB.dispose(qB), bB.dispose(qB), DB.dispose(qB), EB.dispose(), KB.dispose(), rB.dispose(), LB.dispose(), eB.dispose(), tB.dispose(), GI.dispose(), vI.dispose(), cI.dispose(), BI.dispose(qB), II.dispose(qB), SB.dispose(), nI.dispose(), yB.clear()
        },
        onAfterRender: (BB, IB) => {
          var ZB, TB, JB;
          try {
            gB.onAfterRender(IB)
          } catch (cB) {
            console.error("Error drawing BAF2 belt items", cB)
          }
          try {
            kI.onAfterRender(qB, oB)
          } catch (cB) {
            console.error("Error drawing BAF2 jet flames", cB)
          }
          sI || (sI = !0, yB.send("baf2clientready"));
          const GB = qB.getPositionView(oB);
          FB.onAfterRender(IB, GB, zB), iB.onAfterRender(IB, GB, zB, NB), nB.run(zB), JI.onAfterRender(qB, GB), oI.onAfterRender(qB, GB), pB.onAfterRender(qB, GB), mB.onAfterRender(qB, GB), XB.onAfterRender(qB, oB, GB), bB.onAfterRender(qB, oB, GB), DB.onAfterRender(qB, oB), KB.onAfterRender(qB, GB), dB.onPlayerY(GB[1]), BI.onAfterRender(qB), II.onAfterRender(qB, oB, GB);
          const kB = qB.getTargetedBlock();
          TI.onAfterRender(qB, oB, null !== (ZB = null === kB || void 0 === kB ? void 0 : kB.n_) && void 0 !== ZB ? ZB : 0, null !== (TB = null === kB || void 0 === kB ? void 0 : kB.position) && void 0 !== TB ? TB : null), nI.onAfterRender(qB, IB), YB.onMining(function(BB, IB) {
            var ZB, TB;
            const JB = BB.getMiningBlock();
            if (!JB) return null;
            const oB = (0, HB.e)(BB.getBlockId(JB[0], JB[1], JB[2])),
              GB = null !== (ZB = null === (TB = BB.FZB(IB)) || void 0 === TB ? void 0 : TB.name) && void 0 !== ZB ? ZB : null,
              vB = BB.getItemStat(IB, oB.split("|")[0], "harvestLevel");
            return {
              block: oB,
              x: JB[0],
              y: JB[1],
              z: JB[2],
              sv: GB,
              level: vB
            }
          }(qB, oB), qB.isMining(), performance.now()), "dropMap" === (null === (JB = vB.get()) || void 0 === JB ? void 0 : JB.kind) && mT(GB[1]) && CI()
        },
        onPlayerChangeBlock: (BB, IB, ZB, TB, JB, GB) => {
          BB === oB && function(BB, IB, ZB, TB, JB, oB, GB) {
            const vB = uy(oB, GB, BB.isPlayerCrouching(IB));
            if (null === vB) return;
            if (BB.UH(ZB, TB, JB, vB), !BB.getClientOption(IB, "canPickUpItems")) return;
            const kB = GZ[vB.split("|")[0]];
            var cB, nB, hB;
            void 0 !== kB && (cB = BB.getInventoryItems(), nB = kB, hB = UN.f.maxItemStackSize, BB.getInventoryFreeSlotCount(IB) > 0 || cB.some((BB => null !== BB && BB.name === nB && null !== BB.amount && BB.amount < hB))) && BB.playSound(IB, (0, hU.f)("pickUp"), .5, 1)
          }(qB, BB, IB, ZB, TB, JB, GB)
        },
        onPlayerAltAction: (BB, IB, ZB, TB, JB) => {
          var GB, vB;
          if (!qB.getClientOption(oB, "canPickUpItems")) return;
          const kB = null !== (GB = null === (vB = qB.FZB(oB)) || void 0 === vB ? void 0 : vB.name) && void 0 !== GB ? GB : null,
            cB = function(BB, IB) {
              const ZB = BB.split("|")[0];
              return OB(ZB) && IB !== vJ && "Sky Pack" !== IB ? ZB : null
            }(JB, kB);
          if (null !== cB) return void(zI.tap(cB, performance.now()) && JU(qB, oB, cB, dB));
          if (!uT(kB)) return;
          const nB = FI.isNewPress(performance.now()),
            hB = function(BB, IB, ZB) {
              return !uT(IB) || ZB ? null : KT(BB)
            }(JB, kB, qB.isPlayerCrouching(oB));
          null !== hB && nB && qB.UH(IB, ZB, TB, hB)
        },
        onPlayerAttemptAltAction: (BB, IB, ZB, TB, JB) => {
          if (function(BB, IB, ZB, TB, JB) {
              "Workbench" === TB.split("|")[0] && BB.getClientOption(ZB, "canCraft") && (ZU.open("Workbench", JB.get(), TU(BB)), IB.send("baf2station Workbench"))
            }(qB, yB, oB, JB, dB), nU(qB, oB, JB)) return "preventAction";
          wB.onAltAction(qB, oB, JB)
        },
        onReceivedMessageFromServer: (BB, IB) => {
          if ("baf2MachineStatus" === BB) {
            var ZB, TB, JB, cB, nB, hB, zB, NB, UB, QB, wB, OB, YB, pB, HB, PB;
            const BB = IB,
              oB = BB.baf2MachineTaught;
            GB.set(BB.baf2MachinePos, {
              status: BB.baf2MachineStatus,
              power: null !== (ZB = BB.baf2MachinePower) && void 0 !== ZB ? ZB : null,
              opLeftMs: null !== (TB = BB.baf2MachineOpLeftMs) && void 0 !== TB ? TB : null,
              dug: BB.baf2MachineYield ? {
                item: BB.baf2MachineYield,
                name: WB([BB.baf2MachineYield])[BB.baf2MachineYield]
              } : null,
              powerCap: null !== (JB = BB.baf2MachinePowerCap) && void 0 !== JB ? JB : null,
              powerRates: null !== (cB = BB.baf2MachinePowerRates) && void 0 !== cB ? cB : null,
              coupled: !0 === BB.baf2MachineCoupled,
              couplerLevel: null !== (nB = BB.baf2MachineCoupler) && void 0 !== nB ? nB : 1,
              taught: oB,
              taughtName: oB ? WB([oB])[oB] : null,
              tier: null !== (hB = BB.baf2MachineTier) && void 0 !== hB ? hB : null,
              input: null !== (zB = BB.baf2MachineInput) && void 0 !== zB ? zB : null,
              inertCoupler: null !== (NB = BB.baf2MachineInertCoupler) && void 0 !== NB ? NB : null,
              inputShort: null !== (UB = BB.baf2MachineInputShort) && void 0 !== UB ? UB : null,
              field: null !== (QB = BB.baf2MachineField) && void 0 !== QB ? QB : null,
              noSeeds: !0 === BB.baf2MachineNoSeeds,
              fuelFed: !0 === BB.baf2MachineFuelFed,
              fuelFeeds: !0 === BB.baf2MachineFuelFeeds,
              coreFull: !0 === BB.baf2MachineCoreFull,
              waterUnpowered: !0 === BB.baf2MachineWaterUnpowered,
              powerShort: !0 === BB.baf2MachinePowerShort,
              powerWait: !0 === BB.baf2MachinePowerWait,
              reactorPowered: !0 === BB.baf2MachineReactorPowered,
              fuelLeftMs: null !== (wB = BB.baf2MachineFuelLeftMs) && void 0 !== wB ? wB : null,
              burning: null !== (OB = BB.baf2MachineBurning) && void 0 !== OB ? OB : null,
              fuelKeep: null !== (YB = BB.baf2MachineFuelKeep) && void 0 !== YB ? YB : null,
              water: null !== (pB = BB.baf2MachineWater) && void 0 !== pB ? pB : null,
              farm: null !== (HB = BB.baf2MachineFarm) && void 0 !== HB ? HB : null,
              cryo: null !== (PB = BB.baf2MachineCryo) && void 0 !== PB ? PB : null
            })
          } else if ("baf2StationOpen" === BB) {
            const BB = IB.baf2Station;
            zI.consumeServerOpen(BB, performance.now()) || JU(qB, oB, BB, dB)
          } else if ("baf2Power" === BB) {
            const BB = IB;
            aB.set(BB), BB.baf2PowerOpen && (dI({
              kind: "power"
            }), (0, UJ.t)())
          } else if (BB === VB.E) {
            const BB = IB;
            jB.set(BB), BB.baf2WaterOpen && (dI({
              kind: "water"
            }), (0, UJ.t)())
          } else if ("baf2RxPlans" === BB) {
            var RB, mB, XB;
            const BB = IB;
            rB.rU(BB);
            const ZB = new Set(BB.baf2RxPlanList.map((BB => {
              let [IB, ZB, TB] = BB;
              return `${IB},${ZB},${TB}`
            })));
            tB.retain(ZB);
            const TB = null === (RB = vB.get()) || void 0 === RB ? void 0 : RB.kind,
              JB = "reactor" === TB ? null === (mB = LB.get()) || void 0 === mB ? void 0 : mB.status.baf2RxAt : "battery" === TB ? null === (XB = eB.get()) || void 0 === XB ? void 0 : XB.status.baf2BatAt : void 0;
            JB && QI.has(JB.join(",")) && !ZB.has(JB.join(",")) && CI(), QI = ZB
          } else if ("baf2RxStatus" === BB) {
            const BB = IB;
            LB.set(BB), BB.baf2RxOpen && (dI({
              kind: "reactor"
            }), (0, UJ.t)())
          } else if ("baf2BatStatus" === BB) {
            const BB = IB;
            eB.set(BB), BB.baf2BatOpen && (dI({
              kind: "battery"
            }), (0, UJ.t)())
          } else if ("baf2RxAlarm" === BB) tB.rU(IB);
          else if ("baf2Bomb" === BB) EB.rU(IB, qB.getPositionView(oB));
          else if ("baf2Fallout" === BB) KB.rU(IB);
          else if ("baf2ColBeams" === BB) SB.onBeams(IB);
          else if ("baf2ColStatus" === BB) {
            const BB = IB;
            var fB, lB;
            if (SB.onStatus(BB), BB.baf2ColOpen) SB.onOpen(null !== (fB = null === (lB = qB.FZB(oB)) || void 0 === lB ? void 0 : lB.name) && void 0 !== fB ? fB : null), dI({
              kind: "collider"
            }), (0, UJ.t)()
          } else if ("baf2Terminal" === BB) {
            const BB = IB;
            var AB;
            if (MB.apply(BB)) BB.baf2TermReset && (dI({
              kind: "terminal"
            }), (0, UJ.t)());
            else "terminal" === (null === (AB = vB.get()) || void 0 === AB ? void 0 : AB.kind) && (vB.set(null), (0, UJ.f)())
          } else if ("baf2Core" === BB) {
            var bB;
            const BB = IB;
            if (kB(!0 === BB.baf2CoreNuclear), function(BB, IB) {
                return "core" === (null === BB || void 0 === BB ? void 0 : BB.kind) && IB.baf2CoreTier > BB.core.message.baf2CoreTier
              }(vB.get(), BB)) return void(0, UJ.f)();
            if (BB.baf2CoreRefresh && "core" !== (null === (bB = vB.get()) || void 0 === bB ? void 0 : bB.kind)) return;
            dI({
              kind: "core",
              core: qU(BB, WB)
            }), BB.baf2CoreRefresh || (0, UJ.t)()
          } else if ("baf2WrenchUndo" === BB) {
            const {
              baf2WrenchPos: BB,
              baf2WrenchBlock: ZB
            } = IB;
            qB.UH(BB[0], BB[1], BB[2], ZB)
          } else if ("baf2Toast" === BB) {
            const BB = IB;
            uB.heard(performance.now(), BB.baf2ToastMs), CB.show(BB)
          } else if ("baf2Area" === BB) sB.arrive(IB, null !== vB.get());
          else if ("baf2Quest" === BB) {
            const BB = IB;
            kB(!0 === BB.baf2QuestNuclear), dB.set(BB, function(BB, IB) {
              var ZB, TB, JB, oB, GB;
              const vB = [];
              for (const [, , nB, , , , , , hB, zB] of BB.baf2QuestSteps) null !== nB && vB.push(nB), vB.push(...null !== hB && void 0 !== hB ? hB : [], ...null !== zB && void 0 !== zB ? zB : []);
              BB.baf2QuestReward && vB.push(BB.baf2QuestReward);
              const kB = null === (ZB = BB.baf2QuestSide) || void 0 === ZB ? void 0 : ZB[2][2];
              kB && vB.push(kB), vB.push(...null !== (TB = null === (JB = BB.baf2QuestSide) || void 0 === JB ? void 0 : JB[2][8]) && void 0 !== TB ? TB : [], ...null !== (oB = null === (GB = BB.baf2QuestSide) || void 0 === GB ? void 0 : GB[2][9]) && void 0 !== oB ? oB : []);
              for (const [nB] of null !== (cB = BB.baf2QuestAlso) && void 0 !== cB ? cB : []) {
                var cB;
                vB.push(nB)
              }
              return IB(vB)
            }(BB, WB)), vU(BB.baf2QuestTier)
          } else if ("baf2Route" === BB) ! function(BB, IB) {
            let {
              baf2RouteCells: ZB,
              baf2RouteInto: TB
            } = IB;
            0 !== ZB.length && TB ? BB.setRouteChevrons({
              cells: ZB.map(((BB, IB) => {
                const [JB, , oB] = function(BB, IB, ZB) {
                  const TB = ZB + 1 < BB.length ? BB[ZB + 1] : IB;
                  return [TB[0] - BB[ZB][0], 0, TB[2] - BB[ZB][2]]
                }(ZB, TB, IB);
                return {
                  pos: BB,
                  way: [JB, oB]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : BB.setRouteChevrons(null)
          }(qB, IB);
          else if ("baf2QuestBook" === BB) dB.setBook(IB);
          else if ("baf2Stalls" === BB) FB.set(IB.baf2StallCells);
          else if (BB === gZ.o) gB.onMoves(IB);
          else if (BB === gZ.i) gB.onLines(IB);
          else if ("baf2Labels" === BB) iB.rU(IB);
          else if ("baf2DropMap" === BB) dI({
            kind: "dropMap",
            dropMap: IB
          }), (0, UJ.t)();
          else if ("baf2Islands" === BB) {
            var DB, BI;
            const BB = IB;
            if (yB.syncIslandEdits(BB.baf2IslandsAnswered), !BB.baf2IslandsOpen && "islands" !== (null === (DB = vB.get()) || void 0 === DB ? void 0 : DB.kind)) return;
            if (BB.baf2IslandsOpen) {
              var II, ZI;
              const IB = WJ.d.get("openEverythingMenuName"),
                ZB = yB.sent() >= gI,
                TB = "other" !== (FI = {
                  askedAtMs: NI,
                  askSent: ZB,
                  reaskedAtMs: qI,
                  nowMs: Date.now(),
                  panel: null !== (II = null === (ZI = vB.get()) || void 0 === ZI ? void 0 : ZI.kind) && void 0 !== II ? II : null,
                  inGameMenu: WJ.d.get("openInGameMenuName"),
                  everythingMenu: null === IB ? null : IB === hZ.q.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== BB.baf2IslandsFocusInvite
                }).everythingMenu && (!!FI.focusInvite || "islands" === FI.panel && "clientGame" === FI.inGameMenu || !(FI.nowMs - FI.reaskedAtMs < Pc) && (FI.askSent && FI.nowMs - FI.askedAtMs < Pc ? "core" === FI.panel && "clientGame" === FI.inGameMenu && null === FI.everythingMenu : "shop" === FI.everythingMenu || null === FI.inGameMenu));
              if (ZB && (NI = -1 / 0), qI = -1 / 0, !TB) return void UI()
            }
            const ZB = (JI = BB.baf2IslandsOpen, oI = "islands" === (null === (BI = vB.get()) || void 0 === BI ? void 0 : BI.kind), nI = yI, hI = Date.now(), JI && !oI && hI - nI < Pc);
            dI({
              kind: "islands",
              islands: BB,
              arrivedAtMs: Date.now(),
              backToCore: Rc(vB.get())
            }), ZB && (yI = -1 / 0, qI = Date.now(), yB.send(xB)), BB.baf2IslandsOpen && ("clientGame" !== WJ.d.get("openInGameMenuName") && (0, dJ.d)(), (0, UJ.t)())
          } else if ("baf2CoopTransfer" === BB) {
            var TI;
            const BB = IB;
            BB.baf2TransferOn ? (dI({
              kind: "transfer",
              transfer: BB,
              arrivedAtMs: Date.now()
            }), (0, UJ.t)()) : "transfer" === (null === (TI = vB.get()) || void 0 === TI ? void 0 : TI.kind) && (0, UJ.f)()
          } else "baf2IslandLeft" === BB ? (sB.dropHeld(), null !== vB.get() && CI(), "inventory" === WJ.d.get("openInGameMenuName") && (0, dJ.d)()) : "baf2Arc" === BB ? GI.rU(qB, IB) : "baf2Blade" === BB ? vI.onBlade(qB, IB) : "baf2JetFlame" === BB ? kI.rU(qB, IB) : "baf2GearPower" === BB && cI.rU(IB);
          var JI, oI, nI, hI, FI
        }
      };
      return wI
    }
  },
  38557: (BB, IB, ZB) => {
    function TB(BB, IB, ZB) {
      const TB = new Set,
        JB = new ResizeObserver(ZB),
        oB = () => {
          const IB = new Set(document.querySelectorAll(BB));
          let oB = !1;
          for (const BB of TB) IB.has(BB) || (JB.unobserve(BB), TB.delete(BB), oB = !0);
          for (const BB of IB) TB.has(BB) || (JB.observe(BB), GB.observe(BB, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), TB.add(BB));
          oB && ZB()
        },
        GB = new MutationObserver((IB => {
          IB.some((BB => "attributes" === BB.type)) && ZB(), IB.some((IB => function(BB, IB, ZB) {
            if ("childList" !== BB.type) return !1;
            for (const TB of BB.addedNodes)
              if (TB instanceof Element && (TB.matches(IB) || TB.querySelector(IB))) return !0;
            for (const TB of BB.removedNodes)
              if (TB instanceof Element)
                for (const BB of ZB)
                  if (TB.contains(BB)) return !0;
            return !1
          }(IB, BB, TB))) && oB()
        }));
      GB.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const vB of IB) JB.observe(vB);
      return window.addEventListener("resize", ZB), oB(), ZB(), () => {
        JB.disconnect(), GB.disconnect(), window.removeEventListener("resize", ZB)
      }
    }
    ZB.d(IB, {
      e: () => TB
    })
  },
  38539: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB
    });
    var TB = ZB(38532);
    const JB = 5,
      oB = [0, 0, 0],
      GB = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function vB(BB, IB, ZB, vB, kB, cB) {
      let [nB, hB, zB] = vB;
      const FB = (nB + .5 - ZB[0]) ** 2 + (hB - ZB[1]) ** 2 + (zB + .5 - ZB[2]) ** 2;
      let NB = null;
      FB <= cB ** 2 && (oB[0] = nB + .5, oB[1] = hB + kB, oB[2] = zB + .5, NB = IB.projectWorldPosToViewport(oB));
      const gB = null !== NB && NB.x > -JB && NB.x < 100 + JB && NB.y > -JB && NB.y < 100 + JB;
      return (0, TB.f)(BB, !gB), gB ? (GB.x = NB.x, GB.y = NB.y, GB.distSq = FB, GB) : null
    }
  },
  38532: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      f: () => oB
    });
    const TB = new WeakMap;

    function JB(BB) {
      let IB = TB.get(BB);
      return IB || (IB = {
        hidden: BB.hidden,
        x: NaN,
        y: NaN
      }, TB.set(BB, IB)), IB
    }

    function oB(BB, IB) {
      const ZB = JB(BB);
      ZB.hidden !== IB && (ZB.hidden = IB, BB.hidden = IB)
    }

    function GB(BB, IB, ZB) {
      const TB = JB(BB);
      TB.x === IB && TB.y === ZB || (TB.x = IB, TB.y = ZB, BB.style.translate = `${IB}vw ${ZB}vh`)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);