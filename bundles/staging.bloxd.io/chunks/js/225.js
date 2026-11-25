export const id = 225;
export const ids = [225];
export const modules = {
  36955: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG,
      f: () => hG,
      h: () => dG,
      j: () => kG,
      k: () => fG,
      m: () => JG,
      p: () => pG,
      r: () => zG,
      t: () => KG,
      x: () => rG
    });
    var wG = ZG(17),
      SG = ZG(19);
    const LG = "clientGameInventoryButtonsChanged",
      yG = new Map;

    function kG() {
      return [...yG.values()].sort(((GG, bG) => {
        var ZG, wG;
        return (null !== (ZG = GG.order) && void 0 !== ZG ? ZG : 0) - (null !== (wG = bG.order) && void 0 !== wG ? wG : 0)
      }))
    }
    let UG = null;

    function YG(GG) {
      UG = GG
    }
    let VG = !1;

    function pG(GG) {
      VG = !0;
      try {
        GG.onClick()
      } finally {
        VG = !1
      }
      GG.panel && "clientGame" === wG.e.get("openInGameMenuName") && YG(GG.id)
    }

    function fG() {
      return VG
    }

    function QG() {
      return kG().filter((GG => GG.panel && !GG.disabled))
    }

    function KG(GG) {
      const bG = QG(),
        ZG = bG.findIndex((GG => GG.id === UG));
      return !(ZG < 0 || bG.length < 2) && (pG(bG[(ZG + GG + bG.length) % bG.length]), !0)
    }

    function hG() {
      return null !== UG && QG().length > 1
    }

    function dG() {
      YG(null)
    }

    function JG() {
      "inventory" !== wG.e.get("openInGameMenuName") && YG(null)
    }

    function rG() {
      const GG = UG;
      return YG(null), GG
    }

    function zG(GG) {
      return yG.set(GG.id, GG), SG.l.xh(LG, kG(), !0), () => {
        yG.get(GG.id) === GG && (yG.delete(GG.id), SG.l.xh(LG, kG()))
      }
    }
  },
  36951: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      f: () => dG,
      i: () => JG,
      j: () => fG,
      l: () => YG,
      m: () => hG,
      n: () => QG,
      q: () => VG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(1251),
      yG = ZG(36955);
    const kG = "clientGameUiChanged";
    let UG = null;

    function YG() {
      return UG
    }

    function VG(GG, bG) {
      const ZG = {
        content: GG,
        menu: bG
      };
      return UG = ZG, SG.l.xh(kG, UG, !0), () => {
        UG === ZG && (UG = null, KG = !1, dG(), SG.l.xh(kG, null))
      }
    }
    let pG = null;

    function fG() {
      return pG
    }

    function QG(GG) {
      return pG = GG, () => {
        pG === GG && (pG = null)
      }
    }
    let KG = !1;

    function hG() {
      const GG = wG.e.get("openInGameMenuName");
      "clientGame" !== GG && (KG = "inventory" === GG), (0, yG.k)() || (0, yG.h)(), (0, LG.z)(LG.e), wG.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dG() {
      rG(!1)
    }

    function JG() {
      rG(KG)
    }

    function rG(GG) {
      "clientGame" === wG.e.get("openInGameMenuName") && wG.e.set({
        openInGameMenuName: GG ? "inventory" : null
      }), GG || (0, yG.h)(), KG = !1
    }
  },
  38912: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG
    });
    var wG = ZG(38917);
    const SG = [0, 0, 0];
    class LG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SG;
        this.pool = GG, this.origin = bG, this.count = 0, this.free = []
      }
      take() {
        var GG;
        const bG = null !== (GG = this.free.pop()) && void 0 !== GG ? GG : this.count++;
        return bG >= this.pool.rp && this.pool.grow(Math.max(2 * this.pool.rp, bG + 1)), this.hide(bG), bG
      }
      release(GG) {
        this.hide(GG), this.free.push(GG)
      }
      write(GG, bG, ZG, SG) {
        const {
          records: LG
        } = this.pool, {
          origin: yG
        } = this, kG = GG * wG.b;
        LG[kG] = bG - yG[0], LG[kG + 1] = ZG - yG[1], LG[kG + 2] = SG - yG[2], LG[kG + wG.e] = 0, this.pool.markDirty(GG)
      }
      hide(GG) {
        this.pool.records[GG * wG.b + wG.e] = 1, this.pool.markDirty(GG)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class yG {
      constructor(GG, bG, ZG) {
        this.api = GG, this.model = bG, this.initialCapacity = ZG, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(GG) {
        let bG = this.kinds.get(GG);
        if (void 0 === bG) {
          const ZG = this.api.createInstancePool({
            ...this.model,
            item: GG
          }, this.initialCapacity);
          null === ZG || void 0 === ZG || ZG.setOrigin(this.origin[0], this.origin[1], this.origin[2]), bG = ZG && new LG(ZG, this.origin), this.kinds.set(GG, bG)
        }
        return bG
      }
      follow(GG) {
        const {
          origin: bG
        } = this;
        if (Math.abs(GG[0] - bG[0]) <= 512 && Math.abs(GG[1] - bG[1]) <= 512 && Math.abs(GG[2] - bG[2]) <= 512) return !1;
        bG[0] = Math.floor(GG[0]), bG[1] = Math.floor(GG[1]), bG[2] = Math.floor(GG[2]);
        for (const ZG of this.kinds.values()) null === ZG || void 0 === ZG || ZG.pool.setOrigin(bG[0], bG[1], bG[2]);
        return !0
      }
      commit() {
        for (const GG of this.kinds.values()) null === GG || void 0 === GG || GG.commit()
      }
      dispose() {
        for (const GG of this.kinds.values()) null === GG || void 0 === GG || GG.dispose();
        this.kinds.clear()
      }
    }
  },
  38933: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      g: () => kG,
      i: () => UG
    });
    const wG = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      SG = [0, 1, 2, 0, 2, 3],
      LG = [4, 5];

    function yG(GG, bG, ZG, wG, SG) {
      for (let yG = 0; yG < 6; yG++) LG.includes(yG) === SG && YG(GG, bG, ZG, wG, yG)
    }

    function kG(GG, bG, ZG, wG) {
      for (let SG = 0; SG < 6; SG++) YG(GG, bG, ZG, wG, SG)
    }

    function UG(GG, bG, ZG, LG, yG) {
      for (let kG = 0; kG < 6; kG++)
        for (const UG of [0, 1]) {
          const [YG, VG, pG] = [UG + 2, UG + 1, (UG + 3) % 4], fG = GG.length / 3;
          for (const [bG, SG] of [
              [UG, VG],
              [YG, VG],
              [YG, pG],
              [UG, pG]
            ])
            for (let UG = 0; UG < 3; UG++) {
              const YG = wG[3 * (4 * kG + bG) + UG],
                VG = wG[3 * (4 * kG + SG) + UG];
              GG.push((YG + (VG - YG) * yG) * LG / 2 + ZG[UG])
            }
          for (const GG of SG) bG.push(fG + GG)
        }
    }

    function YG(GG, bG, ZG, LG, yG) {
      let [kG, UG, YG] = ZG, [VG, pG, fG] = LG;
      const QG = GG.length / 3;
      for (let SG = 4 * yG; SG < 4 * yG + 4; SG++) GG.push(wG[3 * SG] * VG / 2 + kG, wG[3 * SG + 1] * pG / 2 + UG, wG[3 * SG + 2] * fG / 2 + YG);
      for (const wG of SG) bG.push(QG + wG)
    }
  },
  38899: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => Er
    });
    var wG = ZG(51);
    const SG = [{
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
      LG = 10;
    let yG = !0;

    function kG() {
      return yG
    }

    function UG(GG) {
      yG = GG
    }
    const YG = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function VG() {
      return yG ? SG.length : LG
    }

    function pG(GG) {
      var bG, ZG;
      return null !== (bG = null === (ZG = SG[GG - 1]) || void 0 === ZG ? void 0 : ZG.reactorTier) && void 0 !== bG ? bG : 0
    }

    function fG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pG(GG) > 0;
      return ZG && !yG ? "hidden" : GG <= bG ? "open" : ZG ? bG < 5 ? "hidden" : bG < LG ? "teaser" : "locked" : "locked"
    }

    function QG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: wG,
        n: SG
      } = dG(GG);
      return {
        key: bG[wG],
        params: {
          [wG]: ZG ? String(SG) : SG
        }
      }
    }
    const KG = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function hG(GG, bG) {
      return pG(GG) > 0 && bG < LG
    }

    function dG(GG) {
      const bG = pG(GG);
      if (bG > 0) return {
        kind: "atomic",
        n: bG,
        short: `A${bG}`
      };
      const ZG = function(GG) {
        return GG >= 6 && GG <= 10 ? GG - 6 + 1 : 0
      }(GG);
      return ZG > 0 ? {
        kind: "stage",
        n: ZG,
        short: `S${ZG}`
      } : {
        kind: "tier",
        n: GG,
        short: String(GG)
      }
    }

    function JG(GG) {
      return SG[Math.max(1, Math.min(GG, SG.length)) - 1]
    }

    function rG(GG, bG) {
      return GG < bG ? function(GG) {
        var bG;
        return null !== (bG = SG[GG]) && void 0 !== bG ? bG : null
      }(GG) : null
    }
    const zG = "baf2coresubmit",
      EG = "baf2corebankpause",
      oG = "baf2coredeposit",
      XG = "baf2corechargepause";

    function uG(GG) {
      var bG;
      return null !== (bG = GG.baf2CoreOpen) && void 0 !== bG ? bG : LG
    }
    const iG = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function CG(GG) {
      return iG.includes(GG)
    }
    const WG = (GG, bG) => bG.map((bG => [bG, [GG]])),
      mG = Object.fromEntries([...WG("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...WG("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...WG("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...WG("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...WG("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...WG("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...WG("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...WG("Parts Bench", ["Focus Lens"]), ...WG("Machine Bench", ["Laser", "Collider"]), ...WG("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...WG("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...WG("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...WG("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...WG("Tool Bench", ["Mob Cage"]), ...WG("Tool Bench", ["Pocket Terminal"]), ...WG("Tool Bench", ["Comet Beacon"]), ...WG("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function IG(GG) {
      var bG;
      return null !== (bG = mG[GG]) && void 0 !== bG ? bG : ["Workbench"]
    }

    function FG(GG) {
      return IG(GG)[0]
    }
    SG.slice(1).map(((GG, bG) => `Core Tier ${bG+2}`));
    var vG = ZG(9249);
    const aG = ["on", "hud", "off"];

    function cG(GG) {
      return "on" === GG
    }
    var lG = ZG(352);
    const jG = "Mob Farm",
      PG = {
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
      MG = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      AG = {
        1: 20,
        2: 60,
        3: 120
      },
      sG = "baf2farmvoid",
      qG = "Caged ",
      nG = " Spawner Block";

    function gG(GG) {
      return `lifeform:${(0,lG.Se)(GG)}`
    }

    function eG(GG) {
      if (!GG) return null;
      if (GG.startsWith(qG)) {
        const bG = GG.slice(6);
        return MG.includes(bG) ? bG : null
      }
      if (GG.endsWith(nG)) {
        const bG = GG.slice(0, -14);
        return void 0 !== PG[bG] ? bG : null
      }
      return null
    }

    function RG(GG) {
      return !0 === GG.mobFarm
    }

    function TG(GG, bG) {
      return AG[PG[bG]] * GG.opMs / 1e3
    }
    const HG = new Map;
    const tG = "baf2islands",
      DG = "baf2islandnew";

    function NG(GG) {
      const bG = SG.findIndex((bG => bG.unlocks.includes(GG)));
      return bG < 0 ? 1 : bG + 1
    }

    function OG(GG) {
      return Math.floor(GG).toLocaleString("en-US")
    }
    var xG = ZG(38837);
    const BG = "baf2terminaltake",
      Gb = "baf2terminalput",
      bb = ["one", "stack", "fill"];

    function Zb(GG, bG, ZG) {
      return `${BG} ${GG} ${bG} ${ZG}`
    }

    function wb(GG, bG, ZG) {
      return `${Gb} ${GG} ${bG} ${ZG}`
    }

    function Sb(GG) {
      return `${Gb} ${GG}`
    }
    const Lb = [
      [`${BG} `, "take"],
      [`${Gb} `, "put"]
    ];

    function yb(GG) {
      const bG = Lb.find((bG => {
        let [ZG] = bG;
        return GG.startsWith(ZG)
      }));
      if (!bG) return null;
      const [ZG, wG] = bG, [SG, LG, ...yG] = GG.slice(ZG.length).trim().split(" "), kG = Number(SG);
      if (!Number.isSafeInteger(kG) || kG <= 0) return null;
      if ("put" === wG && void 0 === LG) return {
        kind: "putAll",
        seq: kG
      };
      const UG = function(GG) {
        if (bb.includes(GG)) return GG;
        const bG = Number(GG);
        return /^\d+$/.test(GG) && Number.isSafeInteger(bG) && bG > 0 ? bG : null
      }(null !== LG && void 0 !== LG ? LG : "");
      return null === UG || 0 === yG.length ? null : {
        kind: wG,
        seq: kG,
        mode: UG,
        item: yG.join(" ")
      }
    }

    function kb(GG, bG) {
      const ZG = "number" === typeof GG ? GG : "one" === GG ? 1 : "stack" === GG ? 99 : bG;
      return Math.min(bG, ZG)
    }

    function Ub(GG, bG) {
      const ZG = GG => "number" === typeof GG ? GG : "one" === GG ? 1 : 99;
      return "fill" === GG || "fill" === bG ? "fill" : ZG(GG) + ZG(bG)
    }

    function Yb(GG, bG) {
      const ZG = yb(GG),
        wG = yb(bG),
        SG = ZG && wG ? function(GG, bG) {
          return "take" === GG.kind || "take" === bG.kind ? "take" === GG.kind && "take" === bG.kind && GG.item === bG.item ? {
            ...bG,
            mode: Ub(GG.mode, bG.mode)
          } : null : "putAll" === GG.kind || "putAll" === bG.kind ? {
            kind: "putAll",
            seq: bG.seq
          } : GG.item === bG.item ? {
            ...bG,
            mode: Ub(GG.mode, bG.mode)
          } : null
        }(ZG, wG) : null;
      return SG ? "putAll" === (LG = SG).kind ? Sb(LG.seq) : "put" === LG.kind ? wb(LG.seq, LG.mode, LG.item) : Zb(LG.seq, LG.mode, LG.item) : null;
      var LG
    }
    const Vb = "baf2rx";

    function pb(GG, bG) {
      for (var ZG = arguments.length, wG = new Array(ZG > 2 ? ZG - 2 : 0), SG = 2; SG < ZG; SG++) wG[SG - 2] = arguments[SG];
      return [Vb, GG[0], GG[1], GG[2], bG, ...wG].join(" ")
    }
    const fb = 2,
      Qb = 4,
      Kb = 8,
      hb = 16,
      db = 32,
      Jb = 64,
      rb = 128,
      zb = 256,
      Eb = 512,
      ob = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Xb = [{
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
    const ub = "Biomass",
      ib = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function Cb(GG) {
      return {
        input: ub,
        inputAmount: 1,
        output: GG,
        outputAmount: 1
      }
    }
    const Wb = "baf2synth",
      mb = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      Ib = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Fb = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      vb = function(GG, bG) {
        return {
          input: GG,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: bG,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      ab = function(GG, bG) {
        return {
          ...vb(GG, bG, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      cb = Ib.map((GG => ab(GG, "Biomass", 2))),
      lb = {
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
          recipes: [vb("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), vb("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), vb("Raw Gold", "Gold Grit", 2), vb("Messy Stone", "Sand"), vb("Gravel", "Sand"), vb("Raw Voltite", "Voltite Dust", 2), vb("Moonstone", "Moonstone Dust", 4), vb("Wheat Seeds", "Fertiliser"), vb("Raw Uranium", "Uranium Grit", 2), ab("Mossy Messy Stone", "Sand"), ...cb],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [vb("Iron Grit", "Iron Bar"), vb("Copper Grit", "Copper Bar"), vb("Gold Grit", "Gold Bar"), vb("Raw Iron", "Iron Bar"), vb("Raw Copper", "Copper Bar"), vb("Raw Gold", "Gold Bar"), vb("Sand", "Glass"), vb("Messy Stone", "Stone"), ...lG.id.map((GG => vb(GG, "Charcoal", 1, 4))), vb("Wheat", "Bread", 1, 2), ...Ib.map(((GG, bG) => ab(GG, Fb[bG])))],
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
          recipes: [vb("Iron Bar", "Iron Plate"), vb("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [vb("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [vb("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [vb("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), vb("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), vb("Raw Gold", "Gold Grit", 3), vb("Raw Voltite", "Voltite Dust", 3), vb("Messy Stone", "Sand", 2), vb("Gravel", "Sand", 2), vb("Moonstone", "Moonstone Dust", 6), vb("Raw Uranium", "Uranium Grit", 3), ab("Mossy Messy Stone", "Sand", 2), ...cb],
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
          table: ob
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [vb("Coal", "Diamond", 1, 24), vb("Voltite Dust", "Moonstone", 1, 12)],
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
        ...xG.f
      },
      jb = {
        Crusher: [vb("Spent Pellet", "Glow Dust"), vb("Wheat Seeds", "Biomass"), vb("Wheat", "Biomass"), vb("Dead Bush", "Biomass"), vb("Dusk Moss", "Biomass"), vb("Rotten Flesh", "Biomass"), vb("Bone", "Biomass", 2)],
        "Shatter Mill": [vb("Spent Pellet", "Glow Dust"), vb("Wheat Seeds", "Biomass"), vb("Wheat", "Biomass"), vb("Dead Bush", "Biomass"), vb("Dusk Moss", "Biomass"), vb("Rotten Flesh", "Biomass"), vb("Bone", "Biomass", 2), ...lG.id.map((GG => vb(GG, "Biomass")))],
        Smelter: [vb("Biomass", "Fertiliser", 2)],
        Press: [vb("Coal", "Graphite", 1, 4)]
      },
      Pb = "Power Coupler",
      Mb = "Advanced Coupler",
      Ab = "Nova Coupler",
      sb = [{
        item: Pb,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: Mb,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: Ab,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const qb = new Map;

    function nb(GG) {
      var bG, ZG;
      return null !== (bG = null !== (ZG = GG.fuelSlot) && void 0 !== ZG ? ZG : GG.couplerSlot) && void 0 !== bG ? bG : null
    }

    function gb(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!GG.couplable) throw new Error(`${GG.kind} takes no Power Coupler`);
      let ZG = qb.get(GG);
      ZG || (ZG = [], qb.set(GG, ZG));
      let wG = ZG[bG];
      if (!wG) {
        var SG;
        const {
          divisor: LG,
          powerPerS: yG
        } = sb[bG - 1], kG = GG.opMs / LG, UG = void 0 !== GG.fluidMade || void 0 !== GG.cryoMade ? GG.powerPerOp : yG * kG / 1e3;
        wG = {
          ...GG,
          fuelSlot: null,
          couplerSlot: null !== (SG = nb(GG)) && void 0 !== SG ? SG : void 0,
          opMs: kG,
          powerPerOp: UG,
          coupled: !0
        }, bG > 1 && (wG = {
          ...wG,
          couplerLevel: bG
        }), ZG[bG] = wG
      }
      return wG
    }
    const eb = new Map;
    const Rb = new Map;

    function Tb(GG, bG) {
      if (null === bG || (ZG = bG, !ib.includes(ZG))) return GG;
      var ZG;
      let wG = Rb.get(bG);
      return wG || (wG = {
        ...GG,
        recipes: [Cb(bG)]
      }, Rb.set(bG, wG)), wG
    }

    function Hb(GG) {
      return !0 === GG.synth
    }
    const tb = (GG, bG, ZG, wG) => ({
        output: GG,
        outputAmount: bG,
        tier: ZG,
        inputs: wG.map((GG => {
          let [bG, ZG] = GG;
          return {
            item: bG,
            amount: ZG
          }
        }))
      }),
      Db = Object.fromEntries([tb("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), tb("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), tb("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), tb("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), tb("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), tb("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), tb("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), tb("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), tb("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), tb("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), tb("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), tb("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), tb("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), tb("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), tb("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), tb("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), tb("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), tb("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), tb("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), tb("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), tb("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), tb("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), tb("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), tb("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), tb("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), tb("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), tb("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), tb("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), tb("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), tb("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((GG => [GG.output, GG]))),
      Nb = new Map;

    function Ob(GG, bG) {
      let ZG = lb[GG];
      if (bG.atomic && (ZG = function(GG) {
          const bG = jb[GG.kind];
          if (!bG) return GG;
          let ZG = eb.get(GG.kind);
          if (!ZG) {
            const wG = new Set(bG.map((GG => GG.input))),
              SG = GG.recipes.filter((GG => !wG.has(GG.input)));
            ZG = {
              ...GG,
              recipes: [...SG, ...bG]
            }, eb.set(GG.kind, ZG)
          }
          return ZG
        }(ZG)), ZG.synth) return Tb(ZG, bG.taught);
      if (bG.coupled && ZG.couplable) return gb(ZG, bG.level);
      const wG = ZG.inputSlots && null !== bG.taught ? Db[bG.taught] : void 0;
      if (!wG) return ZG;
      const SG = `${GG}|${wG.output}`;
      let LG = Nb.get(SG);
      return LG || (LG = {
        ...ZG,
        bench: wG
      }, Nb.set(SG, LG)), LG
    }
    const xb = ["Diamond", "Moonstone"];

    function Bb(GG) {
      return new Set(GG.flatMap((GG => GG.bonus ? [GG.output, GG.bonus.item] : [GG.output])).filter((GG => !xb.includes(GG))))
    }
    const GZ = Object.values(lb).flatMap((GG => GG.recipes));
    Bb(GZ.filter((GG => !0 !== GG.nuclear))), Bb([...GZ.filter((GG => !0 === GG.nuclear)), ...Object.values(jb).flat()]);

    function bZ(GG) {
      return null === GG.inputSlot && void 0 === GG.inputSlots && void 0 === GG.powerMade && void 0 === GG.fluidMade && !GG.treeCutter && void 0 === GG.table
    }

    function ZZ(GG) {
      return !0 === GG.treeCutter
    }
    const wZ = ["Voltite Cell"];

    function SZ(GG) {
      var bG, ZG;
      return null !== (bG = null === (ZG = GG.fuels) || void 0 === ZG ? void 0 : ZG.some((GG => wZ.includes(GG)))) && void 0 !== bG && bG
    }
    const LZ = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(lG.id.map((GG => [GG, 8e3]))),
        ...Object.fromEntries(lG.Xd.map((GG => [GG, 2e3]))),
        "Voltite Cell": 12e4
      },
      yZ = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      kZ = {
        "Uranium Deposit": 4e3
      };

    function UZ(GG) {
      var bG;
      return null !== (bG = Object.keys(yZ).find((bG => yZ[bG] === GG))) && void 0 !== bG ? bG : null
    }

    function YZ(GG) {
      return mb.includes(GG)
    }

    function VZ(GG) {
      return !0 !== GG.nuclear || kG()
    }
    var pZ = ZG(333);
    var fZ = ZG(9334),
      QZ = ZG(9266),
      KZ = ZG(9341),
      hZ = ZG(9328);
    const dZ = "Reactor Controller",
      JZ = "Reactor Port",
      rZ = "Battery Cell",
      zZ = ["fuel", "water", "waste"],
      EZ = {
        fuel: JZ,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      oZ = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      XZ = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      uZ = "Reactor Frame",
      iZ = "Reactor Glass",
      CZ = {
        edge: [uZ],
        cap: [iZ, JZ],
        wall: [iZ, JZ],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [dZ]
      },
      WZ = {
        edge: [rZ],
        cap: [rZ],
        wall: [rZ],
        inside: [rZ],
        ctrl: [rZ]
      },
      mZ = ["edge", "cap", "wall", "inside"],
      IZ = ["Reactor Slag"];

    function FZ(GG) {
      return IZ.includes(vZ(GG))
    }

    function vZ(GG) {
      const bG = GG.indexOf("|");
      return bG < 0 ? GG : GG.slice(0, bG)
    }

    function aZ(GG) {
      return vZ(GG) === dZ ? "reactor" : null
    }

    function cZ(GG) {
      return vZ(GG) !== JZ ? null : GG.endsWith("|Water") ? "water" : GG.endsWith("|Waste") ? "waste" : "fuel"
    }

    function lZ(GG) {
      const bG = cZ(GG);
      return null === bG ? null : MZ(EZ[zZ[(zZ.indexOf(bG) + 1) % zZ.length]], function(GG) {
        return GG.includes(jZ)
      }(GG))
    }
    const jZ = "|meta|rot1|Formed",
      PZ = new Set([uZ, iZ, JZ]);

    function MZ(GG, bG) {
      var ZG;
      const wG = vZ(GG);
      if (!PZ.has(wG)) return GG;
      if (wG !== JZ) return bG ? wG + jZ : wG;
      const SG = null !== (ZG = cZ(GG)) && void 0 !== ZG ? ZG : "fuel";
      return bG ? "fuel" === SG ? wG + jZ : `${wG}${jZ}|${"water"===SG?"Water":"Waste"}` : EZ[SG]
    }

    function AZ(GG, bG) {
      const ZG = ww(GG, bG);
      if ("Air" === ZG) return !1;
      const wG = "reactor" === GG ? CZ : WZ;
      return mZ.some((GG => wG[GG].includes(ZG))) || "reactor" === GG && IZ.includes(ZG)
    }

    function sZ(GG) {
      return XZ[GG]
    }

    function qZ(GG) {
      var bG;
      return null !== (bG = oZ[GG]) && void 0 !== bG ? bG : oZ[1]
    }

    function nZ(GG) {
      const [bG, , ZG] = qZ(GG);
      return [ZG, 0, -bG]
    }

    function gZ(GG, bG, ZG, wG, SG, LG) {
      return {
        ctrl: [GG[0], GG[1], GG[2]],
        rot: oZ[bG] ? bG : 1,
        w: ZG,
        h: wG,
        d: SG,
        cu: LG[0],
        cv: LG[1]
      }
    }

    function eZ(GG, bG) {
      return "reactor" === GG ? [Math.floor((bG - 1) / 2), 0] : [0, 0]
    }

    function RZ(GG, bG, ZG, wG, SG) {
      let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : GG.rot;
      if (ZG === GG.w && wG === GG.h && SG === GG.d && LG === GG.rot) return GG;
      const [yG] = eZ(bG, GG.w);
      if (GG.cu === yG && GG.cv <= 1) return gZ(GG.ctrl, LG, ZG, wG, SG, eZ(bG, ZG));
      const kG = (GG, bG) => Math.max(1, Math.min(bG, GG));
      return gZ(GG.ctrl, LG, ZG, wG, SG, [kG(GG.cu, ZG - 2), 0 === GG.cv ? 0 : kG(GG.cv, wG - 2)])
    }
    const TZ = 11,
      HZ = 2 * TZ + 1;
    new Uint8Array(HZ * HZ * HZ);

    function tZ(GG) {
      return GG.w * GG.h * GG.d
    }

    function DZ(GG) {
      const bG = nZ(GG.rot);
      return [GG.ctrl[0] - bG[0] * GG.cu, GG.ctrl[1] - GG.cv, GG.ctrl[2] - bG[2] * GG.cu]
    }

    function NZ(GG) {
      return GG.cv * GG.d * GG.w + GG.cu
    }

    function OZ(GG, bG) {
      const ZG = bG % GG.w,
        wG = Math.floor(bG / GG.w) % GG.d;
      return [ZG, Math.floor(bG / (GG.w * GG.d)), wG]
    }

    function xZ(GG, bG) {
      const [ZG, wG, SG] = OZ(GG, bG), LG = DZ(GG), yG = qZ(GG.rot), kG = nZ(GG.rot);
      return [LG[0] + kG[0] * ZG - yG[0] * SG, LG[1] + wG, LG[2] + kG[2] * ZG - yG[2] * SG]
    }

    function BZ(GG, bG) {
      const ZG = DZ(GG),
        wG = qZ(GG.rot),
        SG = nZ(GG.rot),
        LG = bG[0] - ZG[0],
        yG = bG[2] - ZG[2],
        kG = LG * SG[0] + yG * SG[2],
        UG = -(LG * wG[0] + yG * wG[2]),
        YG = bG[1] - ZG[1];
      return kG < 0 || kG >= GG.w || YG < 0 || YG >= GG.h || UG < 0 || UG >= GG.d ? -1 : (YG * GG.d + UG) * GG.w + kG
    }

    function Gw(GG, bG) {
      if (bG === NZ(GG)) return "ctrl";
      const [ZG, wG, SG] = OZ(GG, bG), LG = 0 === wG || wG === GG.h - 1, yG = Number(0 === ZG || ZG === GG.w - 1) + Number(LG) + Number(0 === SG || SG === GG.d - 1);
      return yG >= 2 ? "edge" : 1 === yG ? LG ? "cap" : "wall" : "inside"
    }

    function bw(GG, bG) {
      const [ZG, wG, SG] = OZ(GG, bG);
      return 0 === ZG || ZG === GG.w - 1 || 0 === wG || wG === GG.h - 1 || 0 === SG || SG === GG.d - 1 ? -1 : ((wG - 1) * (GG.d - 2) + (SG - 1)) * (GG.w - 2) + (ZG - 1)
    }

    function Zw(GG, bG) {
      const ZG = GG.w - 2,
        wG = GG.d - 2,
        SG = bG % ZG + 1,
        LG = Math.floor(bG / ZG) % wG + 1;
      return ((Math.floor(bG / (ZG * wG)) + 1) * GG.d + LG) * GG.w + SG
    }

    function ww(GG, bG) {
      const ZG = vZ(bG);
      return "reactor" === GG && ZG === dZ ? uZ : ZG
    }

    function Sw(GG, bG, ZG) {
      const wG = "ctrl" === bG ? vZ(ZG) : ww(GG, ZG);
      return ("reactor" === GG ? CZ : WZ)[bG].includes(wG) ? "ok" : "Air" === wG ? "missing" : AZ(GG, ZG) ? "wrong" : "blocked"
    }

    function Lw(GG, bG) {
      return "battery" === GG ? rZ : "inside" === bG ? null : function(GG, bG) {
        if ("inside" === bG || "ctrl" === bG || "battery" === GG) return null;
        return "edge" === bG ? uZ : iZ
      }(GG, bG)
    }
    const yw = {
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
      kw = "Collider",
      Uw = "Laser",
      Yw = "Star Alloy",
      Vw = "Glow Dust",
      pw = [kw, "_Collider Focus"];

    function fw(GG) {
      return pw.indexOf(vZ(GG))
    }

    function Qw(GG) {
      return vZ(GG) === Uw
    }

    function Kw(GG) {
      return [
        [GG[0], GG[1], GG[2]],
        [GG[0], GG[1] + 1, GG[2]]
      ]
    }
    const hw = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function dw(GG, bG, ZG) {
      const wG = hw[bG];
      return [GG[0] + wG[0] * ZG, GG[1], GG[2] + wG[2] * ZG]
    }

    function Jw(GG, bG) {
      if (bG[1] !== GG[1]) return null;
      const ZG = bG[0] - GG[0],
        wG = bG[2] - GG[2];
      if (0 !== ZG === (0 !== wG)) return null;
      const SG = Math.abs(ZG + wG);
      if (SG > yw.LASER_D) return null;
      return {
        dir: wG < 0 ? 0 : ZG > 0 ? 1 : wG > 0 ? 2 : 3,
        ey: SG
      }
    }

    function rw(GG, bG, ZG) {
      const wG = bG => Math.abs(GG[0] - bG[0]) <= 1 && Math.abs(GG[1] - bG[1]) <= 1;
      return wG(bG) || wG(ZG)
    }

    function zw(GG, bG) {
      return function(GG, bG, ZG, wG) {
        return [0, 1, 2, 3].map((SG => {
          for (let LG = 1; LG <= yw.LASER_D; LG++) {
            const yG = dw(GG, SG, LG);
            if (rw([yG[0], yG[2]], bG, ZG) || !wG(yG)) return !1
          }
          return !0
        }))
      }(Kw(GG)[1], bG.spawnXZ, bG.coreXZ, (GG => GG[1] >= fZ.n && GG[1] < fZ.n + fZ.q && GG[0] >= bG.minXZ[0] && GG[0] <= bG.maxXZ[0] && GG[2] >= bG.minXZ[1] && GG[2] <= bG.maxXZ[1]))
    }
    const Ew = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function ow(GG) {
      return Math.max(48 + 16 * GG, JG(GG).machineAllowance)
    }
    const Xw = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function uw(GG) {
      const bG = GG.split("|")[0];
      return Xw.includes(bG) ? "Solar Panel" : bG === KZ.e ? "Fluid Pipe" : fw(bG) >= 0 ? "Collider" : (ZG = bG, Ew.includes(ZG) ? bG : null);
      var ZG
    }
    const iw = "buildAFactory2Game:solarPanelDescription";
    const Cw = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function Ww(GG, bG) {
      var ZG;
      return null !== (ZG = Cw.find((ZG => {
        var wG;
        return (null !== (wG = GG.level(ZG)) && void 0 !== wG ? wG : 0) >= bG
      }))) && void 0 !== ZG ? ZG : null
    }
    const mw = "buildAFactory2Game:";
    let Iw = null;
    const Fw = {
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
      vw = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      aw = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      lw = {
        "Loot Chest": `${mw}lookRuinChestName`
      };

    function jw(GG) {
      return "object" === typeof GG && null !== GG && "translationKey" in GG && "string" === typeof GG.translationKey ? GG.translationKey : null
    }

    function Pw(GG, bG) {
      var ZG;
      return null !== (ZG = jw(GG.displayName(bG))) && void 0 !== ZG ? ZG : `item:${(0,lG.Se)(bG)}`
    }

    function Mw(GG, bG) {
      var ZG, wG, SG, LG;
      let yG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bG;
      if ("Solar Panel" === uw(bG)) return {
        name: jw(GG.displayName("Solar Panel")),
        detail: iw,
        detailItem: null
      };
      const UG = bG.endsWith(" Ore"),
        YG = (Iw ??= new Set([...Object.keys((0, QZ.f)()), ...Object.keys((0, KZ.s)())].map((GG => GG.split("|")[0]))), Iw).has(bG),
        VG = UG || YG ? null : function(GG) {
          var bG;
          return GG.endsWith(" Log") && !GG.startsWith("Barkless ") ? "lookLog" : GG.endsWith(" Sapling") ? "lookSapling" : GG.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (bG = Fw[GG]) && void 0 !== bG ? bG : null
        }(bG);
      if (!GG.isBlock(bG) || !UG && !YG && null === VG) return null;
      const pG = null !== (ZG = null !== (wG = lw[bG]) && void 0 !== wG ? wG : jw(null !== (SG = GG.displayName(yG)) && void 0 !== SG ? SG : GG.displayName(bG))) && void 0 !== ZG ? ZG : `item:${(0,lG.Se)(bG)}`;
      if (null !== VG) return {
        name: pG,
        detail: `${mw}${VG}`,
        detailItem: null
      };
      const fG = null !== (LG = vw[bG]) && void 0 !== LG ? LG : kG() ? aw[bG] : void 0;
      if (YG && void 0 !== fG) return {
        name: pG,
        detail: `${mw}${fG}`,
        detailItem: null
      };
      const QG = yZ[bG];
      if (void 0 !== QG) return {
        name: pG,
        detail: `${mw}lookDeposit`,
        detailItem: Pw(GG, QG)
      };
      const KG = GG.harvestLevel(bG);
      if (UG && "rock" === GG.harvestType(bG) && 0 !== KG) {
        const bG = Ww(GG, null !== KG && void 0 !== KG ? KG : 0);
        if (bG === Cw[0]) return {
          name: pG,
          detail: `${mw}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== bG) return {
          name: pG,
          detail: `${mw}lookPickaxe`,
          detailItem: Pw(GG, bG)
        }
      }
      return {
        name: pG,
        detail: jw(GG.description(bG)),
        detailItem: null
      }
    }

    function Aw(GG) {
      return GG < fZ.n - 24
    }
    const sw = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const qw = "Wrench",
      nw = "Nova Wrench";

    function gw(GG) {
      return GG === qw || GG === nw
    }
    const ew = [...fZ.G, "Belt Lift", "Belt Drop"];
    const Rw = ["Belt Lift", "Belt Drop"],
      Tw = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function Hw(GG) {
      return GG.split("|")[0]
    }

    function tw(GG) {
      const bG = /\|rot(\d)/.exec(GG);
      return bG ? Number(bG[1]) : 1
    }

    function Dw(GG) {
      return GG % 4 + 1
    }

    function Nw(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === bG && "" === ZG ? GG : `${GG}|meta|rot${bG}${ZG}`
    }

    function Ow(GG) {
      return Hw(GG) === fZ.w ? (0, fZ.O)(GG) ? "gateRight" : "gateLeft" : (0, fZ.R)(GG)
    }

    function xw(GG) {
      const bG = Hw(GG),
        ZG = tw(GG);
      if (fZ.G.includes(bG)) return (0, fZ.K)(bG, Dw(ZG), null);
      if (bG === fZ.g) return (0, fZ.V)(Dw(ZG), (0, fZ.Q)(GG));
      if (bG === fZ.y) {
        const wG = Tw[(0, fZ.R)(GG)];
        return null === wG ? Nw(bG, Dw(ZG)) : Nw(bG, ZG, fZ.A[wG])
      }
      return bG === fZ.w ? (0, fZ.O)(GG) ? Nw(bG, Dw(ZG)) : Nw(bG, ZG, fZ.l) : hZ.c.includes(bG) && !Rw.includes(bG) || YZ(bG) ? Nw(bG, Dw(ZG)) : null
    }

    function Bw(GG) {
      return hZ.c.includes(GG) || YZ(GG) || null !== uw(GG)
    }

    function GS(GG) {
      return "Solar Panel" === uw(GG)
    }
    const bS = "buildAFactory2Game:",
      ZS = {
        leftFront: `${bS}lookSplitDetail_leftFront`,
        frontRight: `${bS}lookSplitDetail_frontRight`,
        gateRight: `${bS}lookGateDetail_gateRight`
      };

    function wS(GG, bG) {
      var ZG;
      let wG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const SG = Ow(GG),
        LG = null === SG ? null : `${bS}${SG.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${SG}`,
        yG = null === SG ? null : null !== (ZG = ZS[SG]) && void 0 !== ZG ? ZG : null;
      if (gw(bG) && wG) {
        const ZG = Hw(GG);
        return bG === nw && kG() && function(GG) {
          return ew.includes(Hw(GG))
        }(GG) ? {
          mode: LG,
          detail: yG,
          next: `${bS}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: LG,
          detail: yG,
          next: Bw(ZG) && !GS(ZG) ? `${bS}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const UG = gw(bG) ? xw(GG) : null;
      if (null === UG) return {
        mode: LG,
        detail: yG,
        next: null,
        nextState: null
      };
      const YG = Ow(UG);
      return null === YG || tw(UG) !== tw(GG) ? {
        mode: LG,
        detail: yG,
        next: `${bS}lookWrenchTurn`,
        nextState: null
      } : {
        mode: LG,
        detail: yG,
        next: `${bS}lookWrenchNext`,
        nextState: `${bS}lookWrenchState_${YG}`
      }
    }
    const SS = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const LS = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function yS(GG) {
      return [0, 1, 2, 3].map((bG => 0 !== (GG & 1 << bG)))
    }

    function kS(GG) {
      const bG = [];
      for (let ZG = 8; ZG + 2 < GG.length; ZG += 3) bG.push([GG[ZG], GG[ZG + 1], GG[ZG + 2]]);
      return {
        focus: [GG[0], GG[1], GG[2]],
        lasers: yS(GG[3]),
        open: yS(GG[4]),
        live: yS(GG[5]),
        on: 1 === GG[6],
        state: LS[GG[7]],
        blockers: bG
      }
    }
    const US = "Arc Caster",
      YS = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      VS = (Object.values(YS), "Jet Chestplate"),
      pS = "Nova Jet Chestplate",
      fS = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      QS = Object.values(fS);

    function KS(GG, bG, ZG) {
      return Math.min(function(GG) {
        return kG() && pG(GG) >= 5 ? 20 : 10
      }(ZG), Math.floor(function(GG, bG) {
        return Math.max(0, GG) + (kG() ? Math.max(0, bG) : 0)
      }(GG, bG) / 5))
    }

    function hS(GG, bG, ZG) {
      const wG = KS(bG, ZG, GG),
        SG = pG(GG),
        LG = (SG >= 3 ? 55 : SG >= 1 ? 50 : GG >= 8 ? 45 : 30) + wG,
        yG = Math.max(100 + wG, 2 * LG);
      return {
        arcDamage: LG,
        arcPierce: GG >= 7 ? 2 : 1,
        arcChain: GG >= 10,
        barrierMax: (SG >= 4 ? 100 : SG >= 2 ? 90 : GG >= 9 ? 80 : GG >= 6 ? 60 : 40) + 5 * wG,
        barrierRegenPerS: SG >= 5 ? 20 : GG >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * wG,
        novaShieldRegenPerS: 32,
        bladeDamage: yG,
        bladePunch: Math.round(.5 * yG),
        forgeRank: wG
      }
    }
    const dS = {
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
    var JS = ZG(37180),
      rS = ZG(36955),
      zS = ZG(36951),
      ES = ZG(17),
      oS = ZG(1579),
      XS = ZG(1006),
      uS = ZG.n(XS);

    function iS(GG) {
      return !0 === GG.field
    }
    const CS = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function WS(GG) {
      return CS.has(GG) ? `buildAFactory2Game:itemPlural_${(0,lG.Se)(GG)}` : null
    }
    var mS = ZG(1151),
      IS = ZG(1016),
      FS = ZG(1889),
      vS = ZG(1876),
      aS = ZG(1348),
      cS = ZG(37176),
      lS = ZG(19),
      jS = ZG(37171);
    const PS = "baf2QuestView",
      MS = "baf2PlayerY",
      AS = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class sS {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = GG, this.view = {
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
      set(GG, bG) {
        var ZG, wG, SG, LG, yG, kG, UG, YG;
        const VG = JSON.stringify(GG.baf2QuestName) === JSON.stringify(this.view.name),
          pG = new Set(this.view.rows.filter((GG => GG.done)).map((GG => GG.id))),
          fG = new Set(this.view.rows.filter((GG => GG.justFinished)).map((GG => GG.id))),
          QG = GG.baf2QuestSide,
          KG = null !== QG && !0 === GG.baf2QuestSideFocus;
        let hG = !1,
          dG = 0;
        const JG = GG.baf2QuestSteps.map((GG => {
            const bG = tS(GG, AS.has(GG[0]) ? GG[0] : "" + dG++),
              ZG = VG && bG.done && !pG.has(bG.id);
            return bG.justFinished = ZG || VG && bG.done && fG.has(bG.id), hG ||= ZG, bG
          })),
          rG = HS(JG);
        rG >= 0 && !KG && (JG[rG].current = !0);
        const zG = !VG && null !== GG.baf2QuestName,
          EG = JSON.stringify(QG && [QG[0], QG[1]]),
          oG = EG === JSON.stringify(null !== (ZG = null === (wG = this.view.side) || void 0 === wG ? void 0 : wG.name) && void 0 !== ZG ? ZG : null),
          XG = null !== QG && !this.sidesSeen.has(EG);
        XG && this.sidesSeen.add(EG), this.serverTutorial = null !== (SG = GG.baf2QuestTutorial) && void 0 !== SG ? SG : "on", (null !== (LG = GG.baf2QuestTutorialSeq) && void 0 !== LG ? LG : 0) >= this.pickSeq && this.endPick();
        const uG = !VG || !oG || GG.baf2QuestTier !== this.view.tier;
        this.view = {
          name: GG.baf2QuestName,
          rows: JG,
          reward: GG.baf2QuestReward,
          goal: GG.baf2QuestGoal,
          pulse: this.view.pulse + (hG || zG ? 1 : 0),
          itemNames: bG,
          side: QG && {
            name: [QG[0], QG[1]],
            row: {
              ...tS(QG[2], "side"),
              current: KG
            },
            goal: null !== (yG = QG[3]) && void 0 !== yG ? yG : null
          },
          sideCameUpAt: XG ? Date.now() : this.view.sideCameUpAt,
          tier: GG.baf2QuestTier,
          core: GG.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (kG = GG.baf2QuestAlso) && void 0 !== kG ? kG : [],
          depth: null !== (UG = GG.baf2QuestDepth) && void 0 !== UG ? UG : null,
          tutorial: null !== (YG = this.pickedTutorial) && void 0 !== YG ? YG : this.serverTutorial,
          tutorialKnown: !0
        }, this.xh(), hG && this.scheduleClear(), uG && this.requestBook()
      }
      setTutorial(GG) {
        return this.endPick(), this.pickedTutorial = GG, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.xh()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: GG
        }, this.xh(), this.pickSeq
      }
      onPlayerY(GG) {
        const bG = Math.floor(GG);
        bG !== this.playerY && (this.playerY = bG, this.view.depth && lS.l.xh(MS, bG))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(GG) {
        this.view = {
          ...this.view,
          chapters: GG.baf2BookChapters
        }, this.xh()
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
            rows: this.view.rows.map((GG => GG.justFinished ? {
              ...GG,
              justFinished: !1
            } : GG))
          }, this.xh()
        }), 2400)
      }
      xh() {
        lS.l.xh(PS, this.view, !0)
      }
    }

    function qS(GG, bG) {
      return GG.sideCameUpAt > 0 && bG - GG.sideCameUpAt < 2400
    }

    function nS(GG) {
      return (null === GG.name || gS(GG)) && null === GG.side && null !== GG.chapters
    }

    function gS(GG) {
      var bG;
      return "quest_forgeOngoing" === (null === (bG = GG.name) || void 0 === bG ? void 0 : bG[0])
    }

    function eS(GG) {
      return GG.filter((GG => !AS.has(GG.key)))
    }

    function RS(GG) {
      return GG.key.startsWith("stepCraft")
    }

    function TS(GG, bG) {
      const ZG = new Set,
        wG = GG.side ? [...GG.rows, GG.side.row] : GG.rows;
      for (const LG of wG)
        if (!LG.done) {
          !LG.item || bG && !RS(LG) || ZG.add(LG.item);
          for (const [GG, bG, wG] of null !== (SG = LG.chips) && void 0 !== SG ? SG : []) {
            var SG;
            bG < wG && ZG.add(GG)
          }
        } return ZG
    }

    function HS(GG) {
      const bG = GG.findIndex((GG => !GG.done && !GG.away));
      return bG >= 0 ? bG : GG.findIndex((GG => !GG.done))
    }

    function tS(GG, bG) {
      let [ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG] = GG;
      return {
        id: bG,
        key: ZG,
        params: wG,
        item: SG,
        amount: LG,
        total: yG,
        done: kG,
        chips: null !== UG && void 0 !== UG ? UG : null,
        current: !1,
        away: !0 === YG,
        madeFor: null !== VG && void 0 !== VG ? VG : [],
        also: null !== pG && void 0 !== pG ? pG : [],
        justFinished: !1
      }
    }
    const DS = "baf2QuestItems",
      NS = new Set;
    let OS = new Set,
      xS = null;

    function BS(GG) {
      const bG = cG(GG.tutorial),
        ZG = bG ? TS(GG, !0) : NS;
      "inventory" === ES.e.get("openInGameMenuName") ? (xS = null, (0, jS.p)(ZG)) : xS = ZG;
      const wG = bG ? TS(GG, !1) : NS;
      (0, cS.e)(wG, OS) || (OS = wG, lS.l.xh(DS, OS))
    }

    function GL() {
      return (0, aS.e)(DS, (() => OS))
    }
    var bL = ZG(34492),
      ZL = ZG(3267);

    function wL(GG) {
      const bG = (0, ZL.c)(GG),
        ZG = void 0 === bG ? void 0 : (0, bL.displayNameOf)(bG);
      return "object" === typeof ZG && null !== ZG && "translationKey" in ZG && "string" === typeof ZG.translationKey ? ZG.translationKey : `item:${(0,lG.Se)(GG)}`
    }

    function SL(GG, bG) {
      return GG(wL(bG))
    }
    const LL = [{
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

    function yL(GG, bG) {
      return [`Deposit Seed (${GG})`, {
        item: yZ[`${GG} Deposit`],
        amount: bG
      }]
    }
    const kL = Object.fromEntries([yL("Coal", 8), yL("Iron", 8), yL("Copper", 8), yL("Gold", 6), yL("Voltite", 4), yL("Uranium", 4)]),
      UL = "Relay Coil",
      YL = new Map;

    function VL(GG) {
      let bG = YL.get(GG);
      if (!bG) {
        const ZG = Math.max(1, GG);
        bG = LL.filter((GG => {
          var bG;
          return ZG >= GG.fromTier && ZG <= (null !== (bG = GG.untilTier) && void 0 !== bG ? bG : 1 / 0)
        })).map((GG => GG.later && ZG >= GG.later.tier ? {
          ...GG,
          weight: GG.later.weight
        } : GG)), YL.set(GG, bG)
      }
      return bG
    }

    function pL(GG) {
      return VL(GG).some((GG => {
        let {
          item: bG
        } = GG;
        return bG === UL
      }))
    }

    function fL(GG) {
      return GG.startsWith("Deposit Seed (")
    }

    function QL(GG, bG) {
      const ZG = VL(GG);
      return bG ? ZG.filter((GG => bG(GG.item))) : ZG
    }

    function KL(GG) {
      return GG.reduce(((GG, bG) => GG + bG.weight), 0)
    }

    function hL(GG, bG) {
      const ZG = QL(GG, bG),
        wG = KL(ZG);
      return ZG.map((GG => ({
        find: GG,
        chance: GG.weight / wG
      })))
    }
    const dL = 6e4,
      JL = new Intl.NumberFormat("en-US");

    function rL(GG, bG) {
      const ZG = GG >= 10 ? Math.round(GG) : Math.round(10 * GG) / 10;
      return 0 === ZG ? "0" : `${bG}${JL.format(ZG)}`
    }

    function zL(GG) {
      return GG < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? JL.format(GG) : GG < 1e6 ? `${GG<1e5?Math.floor(GG/100)/10:Math.floor(GG/1e3)}k` : Math.floor(GG / 1e5) / 10 + "M"
    }

    function EL(GG) {
      return GG < 0 ? "\u2212" + -GG : String(GG)
    }

    function oL(GG, bG) {
      const ZG = Math.max(1, Math.round(bG));
      if (ZG < 60) return GG("buildAFactory2Game:durationSeconds", {
        seconds: String(ZG)
      });
      const wG = Math.round(ZG / 60);
      if (wG < 60) return GG("buildAFactory2Game:durationMinutes", {
        minutes: String(wG)
      });
      const SG = String(Math.floor(wG / 60));
      return wG % 60 === 0 ? GG("buildAFactory2Game:durationWholeHours", {
        hours: SG
      }) : GG("buildAFactory2Game:durationHours", {
        hours: SG,
        minutes: String(wG % 60)
      })
    }
    var XL = ZG(2458);
    const uL = "(max-height: 420px), (max-width: 650px)";

    function iL() {
      return (0, XL.d)(uL)
    }
    var CL = ZG(1067);

    function WL(GG, bG) {
      return null !== GG && GG > bG + 1
    }

    function mL(GG) {
      const bG = 100 * GG;
      return String(bG <= 0 || bG >= 1 ? Math.round(bG) : Math.max(.1, Math.round(10 * bG) / 10))
    }

    function IL(GG) {
      let {
        item: bG,
        amount: ZG
      } = GG;
      return (0, CL.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, CL.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, CL.jsx)(FS.b, {
            itemName: bG,
            amount: 0
          })
        }), ZG > 1 && (0, CL.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", ZG]
        })]
      })
    }

    function FL(GG) {
      let {
        label: bG,
        names: ZG
      } = GG;
      const [SG, LG] = (0, wG.useState)(!1), yG = ZG.join(" / ");
      return (0, CL.jsxs)(CL.Fragment, {
        children: [(0, CL.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: yG,
          "aria-expanded": SG,
          onClick: () => {
            LG(!SG)
          },
          children: bG
        }), SG && (0, CL.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: yG
        })]
      })
    }

    function vL(GG) {
      let {
        tier: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)(), {
        key: wG,
        params: SG
      } = QG(bG, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), LG = ZG(`buildAFactory2Game:${wG}`, SG);
      return (0, CL.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, CL.jsx)(IS.c, {
          name: "lock"
        }), LG]
      })
    }
    const aL = (0, wG.createContext)(null);

    function cL() {
      const {
        t: GG
      } = (0, mS.w)(), bG = (0, wG.useContext)(aL);
      return (0, wG.useEffect)((() => null === bG || void 0 === bG ? void 0 : bG()), [bG]), (0, CL.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: GG("buildAFactory2Game:recipeForQuest"),
        "aria-label": GG("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function lL(GG) {
      let {
        title: bG,
        count: ZG,
        children: SG,
        startOpen: LG = !0
      } = GG;
      const {
        t: yG
      } = (0, mS.w)(), [kG, UG] = (0, wG.useState)((() => LG && !iL())), [YG, VG] = (0, wG.useState)(0), pG = (0, wG.useCallback)((() => (VG((GG => GG + 1)), () => {
        VG((GG => GG - 1))
      })), []);
      return (0, CL.jsxs)("div", {
        className: uS()("Baf2Recipes", {
          Open: kG
        }),
        children: [(0, CL.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            UG(!kG)
          },
          "aria-expanded": kG,
          children: [yG("buildAFactory2Game:recipesToggle", {
            title: bG,
            count: String(ZG)
          }), (0, CL.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: kG ? "\u25be" : "\u25b8"
          })]
        }), kG && (0, CL.jsxs)(aL.Provider, {
          value: pG,
          children: [(0, CL.jsx)("ul", {
            className: "Baf2RecipeList",
            children: SG
          }), YG > 0 && (0, CL.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, CL.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), yG("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const jL = "buildAFactory2Game:",
      PL = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const ML = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      AL = {
        "Uranium Grit": LG,
        "Raw Uranium": LG
      };

    function sL(GG) {
      var bG;
      return null !== (bG = AL[GG]) && void 0 !== bG ? bG : Math.max(NG(GG), ML[GG] ? NG(ML[GG]) : 1, function(GG) {
        const bG = SG.findIndex((bG => bG.cost.some((bG => bG.item === GG))));
        return bG > LG ? bG : 1
      }(GG))
    }

    function qL(GG, bG) {
      return nL(bG) ? sL(bG) : function(GG) {
        if (PL.has(GG)) return 1;
        const bG = SG.findIndex((bG => bG.newDeposits.some((bG => {
          let {
            block: ZG
          } = bG;
          return ZG === GG
        }))));
        return bG < 0 ? 1 : bG + 1
      }(GG)
    }

    function nL(GG) {
      return GG in AL || pG(sL(GG)) > 0
    }

    function gL(GG, bG) {
      return Ob(GG, {
        coupled: !1,
        taught: null,
        atomic: kG() && bG >= 11
      }).recipes
    }

    function eL(GG, bG) {
      const ZG = fG(GG, bG, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pG(GG) > 0);
      return "open" === ZG || "locked" === ZG
    }

    function RL(GG, bG) {
      return GG.map(((GG, ZG) => ({
        value: GG,
        idx: ZG,
        tier: bG(GG)
      }))).sort(((GG, bG) => GG.tier - bG.tier || GG.idx - bG.idx)).map((GG => {
        let {
          value: bG
        } = GG;
        return bG
      }))
    }

    function TL(GG, bG, ZG) {
      const wG = fG(GG, bG);
      if ("hidden" === wG || "open" === wG) return null;
      if ("teaser" === wG) return {
        tag: {
          translationKey: `${jL}${ZG?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${jL}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const SG = QG(GG, {
          tier: ZG ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        LG = QG(GG, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${jL}${SG.key}`,
          params: SG.params
        },
        reason: {
          translationKey: `${jL}${LG.key}`,
          params: LG.params
        }
      }
    }

    function HL(GG) {
      return !fL(GG)
    }

    function tL(GG) {
      let {
        seconds: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)();
      return (0, CL.jsx)(lL, {
        title: ZG("buildAFactory2Game:recipesCuts", {
          seconds: bG
        }),
        count: 1,
        children: (0, CL.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, CL.jsx)(IL, {
            item: "Maple Sapling",
            amount: 1
          }), (0, CL.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, CL.jsx)(IL, {
            item: "Maple Log",
            amount: 1
          }), (0, CL.jsx)("span", {
            className: "Baf2RecipeName",
            children: ZG("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function DL(GG) {
      let {
        fertilised: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)();
      return (0, CL.jsxs)(lL, {
        title: ZG("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, CL.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, CL.jsx)(IL, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, CL.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, CL.jsx)(IL, {
            item: "Wheat",
            amount: 1
          }), (0, CL.jsx)(IL, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, CL.jsx)("span", {
            className: "Baf2RecipeName",
            children: ZG("buildAFactory2Game:recipeField")
          })]
        }), (0, CL.jsxs)("li", {
          className: uS()("Baf2Recipe", {
            InUse: bG
          }),
          children: [(0, CL.jsx)(IL, {
            item: "Fertiliser",
            amount: 1
          }), (0, CL.jsx)("span", {
            className: "Baf2RecipeName",
            children: ZG("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function NL(GG) {
      let {
        tier: bG,
        seconds: ZG
      } = GG;
      const {
        t: wG
      } = (0, mS.w)(), SG = function(GG) {
        return GG >= 5 ? Xb : ob
      }(bG);
      return (0, CL.jsx)(lL, {
        title: wG("buildAFactory2Game:recipesBringsUp", {
          seconds: ZG
        }),
        count: SG.length,
        children: SG.map((GG => {
          let {
            item: bG,
            chance: ZG
          } = GG;
          return (0, CL.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, CL.jsx)(IL, {
              item: bG,
              amount: 1
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeName",
              children: SL(wG, bG)
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: wG("buildAFactory2Game:recipeChance", {
                percent: mL(ZG)
              })
            })]
          }, bG)
        }))
      })
    }

    function OL(GG) {
      let {
        tier: bG,
        seconds: ZG,
        noSeeds: wG
      } = GG;
      const {
        t: SG
      } = (0, mS.w)(), LG = GL(), yG = hL(bG, wG ? HL : void 0), kG = wG && hL(bG).length > yG.length, UG = pL(bG);
      return (0, CL.jsxs)(lL, {
        title: SG("buildAFactory2Game:recipesRecycles", {
          seconds: ZG
        }),
        count: yG.length,
        children: [yG.map((GG => {
          let {
            find: bG,
            chance: ZG
          } = GG;
          return (0, CL.jsxs)("li", {
            className: "Baf2Recipe",
            children: [LG.has(bG.item) && (0, CL.jsx)(cL, {}), (0, CL.jsx)(IL, {
              item: bG.item,
              amount: bG.amount
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeName",
              children: SL(SG, bG.item)
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: SG("buildAFactory2Game:recipeChance", {
                percent: mL(ZG)
              })
            })]
          }, bG.item)
        })), kG && (0, CL.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, CL.jsx)("span", {
            className: "Baf2RecipeName",
            children: SG("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), UG && (0, CL.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, CL.jsx)("span", {
            className: "Baf2RecipeName",
            children: SG("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function xL(GG) {
      let {
        tier: bG,
        seconds: ZG
      } = GG;
      const {
        t: wG
      } = (0, mS.w)(), SG = Object.entries(kL).filter((GG => {
        let [, {
          item: ZG
        }] = GG;
        return eL(sL(ZG), bG, nL(ZG))
      }));
      return (0, CL.jsx)(lL, {
        title: wG("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: ZG
        }),
        count: SG.length,
        children: SG.map((GG => {
          let [bG, {
            item: ZG,
            amount: SG
          }] = GG;
          return (0, CL.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, CL.jsx)(IL, {
              item: bG,
              amount: 1
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, CL.jsx)(IL, {
              item: ZG,
              amount: SG
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeName",
              children: SL(wG, ZG)
            })]
          }, bG)
        }))
      })
    }

    function BL(GG) {
      let {
        tier: bG,
        seconds: ZG
      } = GG;
      const {
        t: wG
      } = (0, mS.w)(), SG = GL(), LG = RL(Object.entries(yZ).filter((GG => {
        let [ZG, wG] = GG;
        return eL(qL(ZG, wG), bG, nL(wG))
      })), (GG => {
        let [bG, ZG] = GG;
        return qL(bG, ZG)
      }));
      return (0, CL.jsx)(lL, {
        title: wG("buildAFactory2Game:recipesDigs", {
          seconds: ZG
        }),
        count: LG.length,
        children: LG.map((GG => {
          let [ZG, LG] = GG;
          const yG = qL(ZG, LG),
            kG = yG > bG ? yG : null,
            UG = kZ[ZG],
            YG = null === kG && SG.has(LG);
          return (0, CL.jsxs)("li", {
            className: uS()("Baf2Recipe", {
              Locked: null !== kG,
              Far: WL(kG, bG)
            }),
            children: [YG && (0, CL.jsx)(cL, {}), (0, CL.jsx)(IL, {
              item: ZG,
              amount: 1
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, CL.jsx)(IL, {
              item: LG,
              amount: 1
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeName",
              children: SL(wG, LG)
            }), void 0 !== UG && (0, CL.jsx)("span", {
              className: "Baf2RecipeMore",
              children: wG("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / UG)
              })
            }), null !== kG && (0, CL.jsx)(vL, {
              tier: kG
            })]
          }, ZG)
        }))
      })
    }

    function Gy(GG) {
      var bG;
      let {
        def: ZG,
        seconds: wG
      } = GG;
      const {
        t: SG
      } = (0, mS.w)();
      return (0, CL.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, CL.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (bG = ZG.fuels) && void 0 !== bG ? bG : []).map((GG => (0, CL.jsx)(IL, {
            item: GG,
            amount: 1
          }, GG))), (0, CL.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, CL.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, CL.jsx)(IS.c, {
              name: "bolt"
            }), SG("buildAFactory2Game:recipePower", {
              power: OG(ZG.powerMade),
              seconds: wG
            })]
          })]
        })
      })
    }

    function by(GG) {
      let {
        def: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)();
      return (0, CL.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, CL.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, CL.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, CL.jsx)(IS.c, {
              name: "bolt"
            }), ZG("buildAFactory2Game:recipeMixer", {
              cryo: rL((0, xG.z)(bG, bG.cryoMade), "")
            })]
          })
        })
      })
    }

    function Zy(GG) {
      let {
        def: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)();
      return (0, CL.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, CL.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, CL.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, CL.jsx)(IS.c, {
              name: "bolt"
            }), ZG("buildAFactory2Game:recipeCondenser", {
              power: rL((0, xG.z)(bG, bG.powerPerOp), ""),
              water: rL((0, xG.z)(bG, bG.fluidMade), "")
            })]
          })
        })
      })
    }

    function wy(GG) {
      let {
        kind: bG,
        def: ZG,
        input: wG,
        tier: SG,
        noSeeds: LG = !1
      } = GG;
      const yG = String(ZG.opMs / 1e3);
      return ZZ(ZG) ? (0, CL.jsx)(tL, {
        seconds: yG
      }) : ZG.field ? (0, CL.jsx)(DL, {
        fertilised: null !== wG
      }) : ZG.table ? (0, CL.jsx)(NL, {
        tier: SG,
        seconds: yG
      }) : ZG.recycles ? (0, CL.jsxs)(CL.Fragment, {
        children: [(0, CL.jsx)(OL, {
          tier: SG,
          seconds: yG,
          noSeeds: LG
        }), (0, CL.jsx)(xL, {
          tier: SG,
          seconds: yG
        })]
      }) : bZ(ZG) ? (0, CL.jsx)(BL, {
        tier: SG,
        seconds: yG
      }) : void 0 !== ZG.fluidMade ? (0, CL.jsx)(Zy, {
        def: ZG
      }) : void 0 !== ZG.cryoMade ? (0, CL.jsx)(by, {
        def: ZG
      }) : void 0 !== ZG.powerMade ? (0, CL.jsx)(Gy, {
        def: ZG,
        seconds: yG
      }) : (0, CL.jsx)(Sy, {
        kind: bG,
        input: wG,
        tier: SG,
        seconds: yG
      })
    }

    function Sy(GG) {
      let {
        kind: bG,
        input: ZG,
        tier: wG,
        seconds: SG
      } = GG;
      const {
        t: LG
      } = (0, mS.w)(), yG = GL(), kG = RL(function(GG) {
        const bG = new Map;
        for (const SG of GG) {
          var ZG, wG;
          const GG = [SG.output, SG.outputAmount, SG.inputAmount, null === (ZG = SG.bonus) || void 0 === ZG ? void 0 : ZG.item, null === (wG = SG.bonus) || void 0 === wG ? void 0 : wG.chance].join("|"),
            LG = bG.get(GG);
          LG ? LG.inputs.push(SG.input) : bG.set(GG, {
            inputs: [SG.input],
            inputAmount: SG.inputAmount,
            output: SG.output,
            outputAmount: SG.outputAmount,
            bonus: SG.bonus
          })
        }
        return [...bG.values()]
      }(gL(bG, wG).filter(VZ)), (GG => sL(GG.output))).filter((GG => eL(sL(GG.output), wG, nL(GG.output))));
      return (0, CL.jsx)(lL, {
        title: LG("buildAFactory2Game:recipesEach", {
          seconds: SG
        }),
        count: kG.length,
        children: kG.map((GG => {
          const bG = null !== ZG && GG.inputs.includes(ZG),
            SG = GG.inputs.length > 3 ? [bG ? ZG : GG.inputs[0]] : GG.inputs,
            kG = sL(GG.output) > wG ? sL(GG.output) : null,
            UG = null === kG && yG.has(GG.output);
          return (0, CL.jsxs)("li", {
            className: uS()("Baf2Recipe", {
              InUse: bG,
              Locked: null !== kG,
              Far: WL(kG, wG)
            }),
            children: [UG && (0, CL.jsx)(cL, {}), SG.map(((bG, ZG) => (0, CL.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [ZG > 0 && (0, CL.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, CL.jsx)(IL, {
                item: bG,
                amount: GG.inputAmount
              })]
            }, bG))), SG.length < GG.inputs.length && (0, CL.jsx)(FL, {
              label: LG("buildAFactory2Game:recipeMore", {
                count: String(GG.inputs.length - SG.length)
              }),
              names: GG.inputs.filter((GG => !SG.includes(GG))).map((GG => SL(LG, GG)))
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, CL.jsx)(IL, {
              item: GG.output,
              amount: GG.outputAmount
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeName",
              children: SL(LG, GG.output)
            }), GG.bonus && (0, CL.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [LG("buildAFactory2Game:recipeBonus", {
                percent: mL(GG.bonus.chance)
              }), (0, CL.jsx)(IL, {
                item: GG.bonus.item,
                amount: 1
              })]
            }), null !== kG && (0, CL.jsx)(vL, {
              tier: kG
            })]
          }, `${GG.output}|${GG.inputs[0]}`)
        }))
      })
    }

    function Ly(GG) {
      let {
        taught: bG,
        tier: ZG
      } = GG;
      const {
        t: wG
      } = (0, mS.w)(), SG = GL(), LG = RL(Object.values(Db), (GG => GG.tier)).filter((GG => eL(GG.tier, ZG)));
      return (0, CL.jsx)(lL, {
        title: wG("buildAFactory2Game:benchCanMake"),
        count: LG.length,
        startOpen: !1,
        children: LG.map((GG => {
          const LG = GG.tier > ZG,
            yG = !LG && SG.has(GG.output);
          return (0, CL.jsxs)("li", {
            className: uS()("Baf2Recipe", {
              InUse: GG.output === bG,
              Locked: LG,
              Far: WL(LG ? GG.tier : null, ZG)
            }),
            children: [yG && (0, CL.jsx)(cL, {}), (0, CL.jsx)(IL, {
              item: GG.output,
              amount: GG.outputAmount
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeName",
              children: SL(wG, GG.output)
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), GG.inputs.map((GG => (0, CL.jsx)(IL, {
              item: GG.item,
              amount: GG.amount
            }, GG.item))), LG && (0, CL.jsx)(vL, {
              tier: GG.tier
            })]
          }, GG.output)
        }))
      })
    }
    var yy, ky, Uy, Yy, Vy;
    const py = lb.Generator,
      fy = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      Qy = 1e3 * (null !== (yy = py.powerMade) && void 0 !== yy ? yy : 0) / py.opMs,
      Ky = Math.min(...(null !== (ky = py.fuels) && void 0 !== ky ? ky : []).map((GG => LZ[GG]))) / 1e3,
      hy = lb["Volt Engine"],
      dy = 1e3 * (null !== (Uy = hy.powerMade) && void 0 !== Uy ? Uy : 0) / hy.opMs,
      Jy = LZ[null !== (Yy = null === (Vy = hy.fuels) || void 0 === Vy ? void 0 : Vy[0]) && void 0 !== Yy ? Yy : ""] / 1e3;

    function ry(GG) {
      let {
        item: bG,
        label: ZG,
        value: wG,
        note: SG,
        dim: LG
      } = GG;
      return (0, CL.jsxs)("li", {
        className: uS()("Baf2PowerRow", {
          Dim: LG
        }),
        children: [(0, CL.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, CL.jsx)(FS.b, {
            itemName: bG,
            amount: 0
          })
        }), (0, CL.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, CL.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: ZG
          }), SG && (0, CL.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: SG
          })]
        }), (0, CL.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: wG
        })]
      })
    }

    function zy(GG, bG, ZG, wG) {
      var SG;
      const LG = void 0 === wG ? lb[GG] : function(GG, bG) {
          if (null === bG) return GG;
          let ZG = HG.get(bG);
          return ZG || (ZG = {
            ...GG,
            powerPerOp: TG(GG, bG),
            farmMob: bG
          }, HG.set(bG, ZG)), ZG
        }(lb[GG], wG),
        yG = bG && LG.couplable ? gb(LG, ZG) : LG;
      return 1e3 * (null !== (SG = yG.powerPerOp) && void 0 !== SG ? SG : 0) / yG.opMs
    }

    function Ey(GG) {
      var bG, ZG, wG, SG, LG, yG, kG, UG;
      let {
        message: YG
      } = GG;
      const {
        t: VG
      } = (0, mS.w)(), pG = (GG, bG) => VG("buildAFactory2Game:powerPerSecond", {
        rate: rL(GG, bG)
      }), [fG, QG] = YG.baf2PowerGenerators, KG = YG.baf2PowerGeneratorFuel, hG = YG.baf2PowerSunPanels, dG = null !== (bG = YG.baf2PowerSunShare) && void 0 !== bG ? bG : 1, JG = YG.baf2PowerVaults, rG = YG.baf2PowerUsers, [zG, EG] = null !== (ZG = YG.baf2PowerEngines) && void 0 !== ZG ? ZG : [0, 0], oG = null !== (wG = YG.baf2PowerEngineCells) && void 0 !== wG ? wG : 0, XG = null !== (SG = YG.baf2PowerPads) && void 0 !== SG ? SG : 0, uG = null !== (LG = YG.baf2PowerCharge) && void 0 !== LG ? LG : 0, [iG, CG] = null !== (yG = YG.baf2PowerReactors) && void 0 !== yG ? yG : [0, 0], [WG, mG] = null !== (kG = YG.baf2PowerBatteries) && void 0 !== kG ? kG : [0, 0];
      let IG = VG("buildAFactory2Game:powerEngineCells", {
        amount: String(oG)
      });
      oG > 0 && EG > 0 && (IG = VG("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(oG),
        time: oL(VG, oG * Jy / EG)
      }));
      let FG = VG("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(KG)
      });
      KG > 0 && QG > 0 && (FG = VG("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(KG),
        time: oL(VG, KG * Ky / QG)
      }));
      const vG = fG + zG + hG + iG;
      return (0, CL.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, CL.jsxs)("section", {
          children: [(0, CL.jsxs)("h3", {
            children: [VG("buildAFactory2Game:powerMaking"), (0, CL.jsx)("span", {
              children: pG(YG.baf2PowerMadePerS, "+")
            })]
          }), (0, CL.jsxs)("ul", {
            children: [0 === vG && (0, CL.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: VG("buildAFactory2Game:powerNoMakers")
            }), fG > 0 && (0, CL.jsx)(ry, {
              item: "Generator",
              label: `${SL(VG,"Generator")} \xd7${fG}`,
              note: `${VG("buildAFactory2Game:powerRunning",{amount:String(QG)})} \xb7 ${FG}`,
              value: pG(QG * Qy, "+"),
              dim: 0 === QG
            }), zG > 0 && (0, CL.jsx)(ry, {
              item: "Volt Engine",
              label: `${SL(VG,"Volt Engine")} \xd7${zG}`,
              note: `${VG("buildAFactory2Game:powerRunning",{amount:String(EG)})} \xb7 ${IG}`,
              value: pG(EG * dy, "+"),
              dim: 0 === EG
            }), hG > 0 && (0, CL.jsx)(ry, {
              item: "Solar Panel",
              label: `${SL(VG,"Solar Panel")} \xd7${hG}`,
              note: VG(dG < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: pG(4 * hG * dG, "+")
            }), iG > 0 && (0, CL.jsx)(ry, {
              item: "Reactor Frame",
              label: `${VG("buildAFactory2Game:powerReactors")} \xd7${iG}`,
              note: VG("buildAFactory2Game:powerRunning", {
                amount: String(CG)
              }),
              value: pG(null !== (UG = YG.baf2PowerReactorPerS) && void 0 !== UG ? UG : 0, "+"),
              dim: 0 === CG
            })]
          })]
        }), (0, CL.jsxs)("section", {
          children: [(0, CL.jsxs)("h3", {
            children: [VG("buildAFactory2Game:powerStorage"), (0, CL.jsx)("span", {
              children: OG(YG.baf2PowerCap)
            })]
          }), (JG > 0 || WG > 0) && (0, CL.jsxs)("ul", {
            children: [JG > 0 && (0, CL.jsx)(ry, {
              item: "Charge Vault",
              label: `${SL(VG,"Charge Vault")} \xd7${JG}`,
              value: `+${OG(8e3*JG)}`
            }), WG > 0 && (0, CL.jsx)(ry, {
              item: "Battery Cell",
              label: `${VG("buildAFactory2Game:powerBatteries")} \xd7${WG}`,
              value: `+${OG(mG)}`
            })]
          })]
        }), (0, CL.jsxs)("section", {
          children: [(0, CL.jsxs)("h3", {
            children: [VG("buildAFactory2Game:powerUsing"), (0, CL.jsx)("span", {
              children: pG(YG.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, CL.jsxs)("ul", {
            children: [0 === rG.length && 0 === XG && 0 === uG && (0, CL.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: VG("buildAFactory2Game:powerNoUsers")
            }), rG.map((GG => {
              let [bG, ZG, wG, SG, LG = 1, yG] = GG, kG = ZG ? VG(fy[LG - 1], {
                name: SL(VG, bG)
              }) : SL(VG, bG);
              return void 0 !== yG && (kG = VG("buildAFactory2Game:powerFarmName", {
                name: kG,
                mob: VG(gG(yG))
              })), (0, CL.jsx)(ry, {
                item: bG,
                label: `${kG} \xd7${wG}`,
                note: VG("buildAFactory2Game:powerRunning", {
                  amount: String(SG)
                }),
                value: SG > 0 ? pG(SG * zy(bG, ZG, LG, yG), "\u2212") : VG("buildAFactory2Game:powerIdle"),
                dim: 0 === SG
              }, `${bG}|${ZG}|${LG}|${yG}`)
            })), XG > 0 && (0, CL.jsx)(ry, {
              item: "Charging Pad",
              label: `${SL(VG,"Charging Pad")} \xd7${XG}`,
              value: VG("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), uG > 0 && (0, CL.jsx)(ry, {
              item: "Homestead Core",
              label: VG("buildAFactory2Game:powerCharge"),
              value: pG(uG, "\u2212")
            }), YG.baf2PowerStarved > 0 && (0, CL.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, CL.jsx)(IS.c, {
                name: "triangle-exclamation"
              }), VG("buildAFactory2Game:powerStarved", {
                amount: String(YG.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var oy = ZG(4549),
      Xy = ZG(1393);
    class uy {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(GG) {
        this.message = GG;
        for (const bG of this.listeners) bG()
      }
      get() {
        return this.message
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
    }
    class iy extends uy {}

    function Cy(GG, bG) {
      const ZG = () => {
          const ZG = GG.get();
          if (!ZG || !bG) return ZG;
          const [wG, SG, LG] = ZG.baf2PowerAt;
          return wG === bG[0] && SG === bG[1] && LG === bG[2] ? ZG : null
        },
        [SG, LG] = (0, wG.useState)(ZG);
      return (0, wG.useEffect)((() => (LG(ZG()), GG.subscribe((() => {
        LG(ZG())
      })))), [GG, ...null !== bG && void 0 !== bG ? bG : []]), SG
    }

    function Wy(GG) {
      return {
        stored: GG.baf2PowerStored,
        cap: GG.baf2PowerCap,
        madePerS: GG.baf2PowerMadePerS,
        usedPerS: GG.baf2PowerUsedPerS
      }
    }

    function my(GG) {
      let {
        stored: bG,
        cap: ZG
      } = GG;
      return (0, CL.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, CL.jsx)("div", {
          style: {
            width: `${Math.min(100,100*bG/Math.max(1,ZG))}%`
          }
        })
      })
    }

    function Iy(GG) {
      let {
        figures: bG,
        labelled: ZG = !1
      } = GG;
      const {
        t: wG
      } = (0, mS.w)(), SG = bG.madePerS - bG.usedPerS, {
        text: LG,
        draining: yG
      } = function(GG, bG) {
        let {
          stored: ZG,
          cap: wG,
          madePerS: SG,
          usedPerS: LG
        } = bG;
        const yG = SG - LG;
        return ZG >= wG ? {
          text: GG("buildAFactory2Game:powerFull"),
          draining: !1
        } : yG > .05 ? {
          text: GG("buildAFactory2Game:powerFullIn", {
            time: oL(GG, (wG - ZG) / yG)
          }),
          draining: !1
        } : yG < -.05 ? {
          text: GG("buildAFactory2Game:powerEmptyIn", {
            time: oL(GG, ZG / -yG)
          }),
          draining: !0
        } : {
          text: GG("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(wG, bG);
      return (0, CL.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, CL.jsx)(my, {
          stored: bG.stored,
          cap: bG.cap
        }), (0, CL.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, CL.jsx)("span", {
            children: wG(ZG ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: OG(bG.stored),
              cap: OG(bG.cap)
            })
          }), (0, CL.jsxs)("span", {
            className: uS()("Baf2PowerNet", {
              Draining: yG
            }),
            children: [wG("buildAFactory2Game:powerPerSecond", {
              rate: rL(Math.abs(SG), SG < 0 ? "\u2212" : "+")
            }), " \xb7 ", LG]
          })]
        })]
      })
    }

    function Fy(GG) {
      let {
        stored: bG,
        cap: ZG,
        rates: wG
      } = GG;
      const {
        t: SG
      } = (0, mS.w)();
      return wG ? (0, CL.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, CL.jsx)(Iy, {
          figures: {
            stored: bG,
            cap: ZG,
            madePerS: wG[0],
            usedPerS: wG[1]
          },
          labelled: !0
        })
      }) : (0, CL.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, CL.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, CL.jsx)(my, {
            stored: bG,
            cap: ZG
          }), (0, CL.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, CL.jsx)("span", {
              children: SG("buildAFactory2Game:powerStoredLabelled", {
                stored: OG(bG),
                cap: OG(ZG)
              })
            })
          })]
        })
      })
    }

    function vy(GG) {
      let {
        store: bG,
        close: ZG
      } = GG;
      const {
        t: wG
      } = (0, mS.w)(), SG = Cy(bG);
      return (0, CL.jsx)(oy.b, {
        close: ZG,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, CL.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, CL.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CL.jsxs)("div", {
              children: [(0, CL.jsx)("h2", {
                id: "baf2PowerTitle",
                children: wG("buildAFactory2Game:powerTitle")
              }), (0, CL.jsx)("p", {
                children: wG("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, CL.jsx)(Xy.j, {
              onClick: ZG
            })]
          }), SG && (0, CL.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, CL.jsx)(Iy, {
              figures: Wy(SG)
            }), (0, CL.jsx)(Ey, {
              message: SG
            })]
          })]
        })
      })
    }

    function ay(GG) {
      var bG;
      let {
        kind: ZG,
        def: SG,
        eS: LG,
        power: yG,
        stored: kG,
        cap: UG
      } = GG;
      const {
        t: YG
      } = (0, mS.w)(), VG = Cy(yG, LG), [pG, fG] = (0, wG.useState)(!1);
      return (0, CL.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, CL.jsx)(wy, {
          kind: ZG,
          def: SG,
          input: null,
          tier: null !== (bG = null === VG || void 0 === VG ? void 0 : VG.baf2PowerTier) && void 0 !== bG ? bG : 1
        }), (0, CL.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: YG("buildAFactory2Game:powerTitle")
        }), VG && (0, CL.jsx)(Iy, {
          figures: Wy(VG)
        }), !VG && (0, CL.jsx)(Fy, {
          stored: kG,
          cap: UG,
          rates: null
        }), VG && (0, CL.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            fG(!pG)
          },
          "aria-expanded": pG,
          children: YG(pG ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), VG && pG && (0, CL.jsx)(Ey, {
          message: VG
        })]
      })
    }
    const cy = 2500,
      ly = 17500,
      jy = `${oG} `;
    const Py = ["plan", "throttle"];

    function My(GG) {
      if (GG.startsWith(`${Wb} `)) return GG.slice(0, GG.lastIndexOf(" "));
      const bG = GG.split(" ");
      return bG[0] === Vb && Py.includes(bG[4]) ? bG.slice(0, 5).join(" ") : null
    }
    class Ay {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = GG, this.now = bG, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.nSG = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = bG()
      }
      enqueue(GG) {
        this.queue(GG, this.nextTicket());
        const bG = this.nSG + this.pending.length;
        return this.flush(), bG
      }
      track(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZG = this.nextTicket();
        if (!bG.urgent) return this.queue(GG, ZG), this.flush(), ZG;
        const {
          supersedes: wG
        } = bG;
        for (let LG = this.pending.length - 1; LG >= this.urgent; LG--) {
          const bG = this.pending[LG];
          (bG.command === GG || null !== wG && void 0 !== wG && wG(bG.command)) && (this.pending.splice(LG, 1), this.markLeft(bG.tickets))
        }
        const SG = this.pending.findIndex((bG => {
          let {
            command: ZG
          } = bG;
          return ZG === GG
        }));
        return -1 !== SG ? this.pending[SG].tickets.push(ZG) : (this.pending.splice(this.urgent, 0, {
          command: GG,
          tickets: [ZG]
        }), this.urgent += 1), this.flush(), ZG
      }
      leftAt(GG) {
        const bG = this.leftTimes.get(GG);
        return void 0 !== bG ? bG : this.pending.some((bG => {
          let {
            tickets: ZG
          } = bG;
          return ZG.includes(GG)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let GG = !0;
        return () => {
          GG && (GG = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(GG) {
        var bG;
        return (null === (bG = this.pending.at(-1)) || void 0 === bG ? void 0 : bG.command) === GG
      }
      sent() {
        return this.nSG
      }
      clear() {
        for (const {
            tickets: GG
          }
          of this.pending) this.markLeft(GG);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(GG) {
        const bG = this.now();
        for (const ZG of GG) this.leftTimes.set(ZG, bG);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(GG, bG) {
        const ZG = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === ZG || void 0 === ZG ? void 0 : ZG.command) === GG) return void(! function(GG) {
          return GG === XG || GG.startsWith(`${EG} `) || GG.startsWith(`${sG} `)
        }(GG) ? ZG.tickets.push(bG) : (this.pending.pop(), this.markLeft([...ZG.tickets, bG])));
        const wG = void 0 === ZG ? null : Yb(ZG.command, GG);
        if (null !== wG && void 0 !== ZG) return ZG.command = wG, void ZG.tickets.push(bG);
        const SG = My(GG);
        if (null !== SG && void 0 !== ZG && My(ZG.command) === SG) return ZG.command = GG, void ZG.tickets.push(bG);
        if (null !== ZG && void 0 !== ZG && ZG.command.startsWith(jy) && GG.startsWith(jy)) {
          const wG = GG.slice(jy.length);
          if (ZG.command.slice(jy.length).split(",").includes(wG)) return void ZG.tickets.push(bG);
          const SG = `${ZG.command},${wG}`;
          if (SG.length <= 119) return ZG.command = SG, void ZG.tickets.push(bG)
        }
        this.pending.push({
          command: GG,
          tickets: [bG]
        })
      }
      flush() {
        const GG = this.now();
        for (this.tokens = Math.min(5, this.tokens + (GG - this.refilledAt) / cy), this.refilledAt = GG; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.nSG += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: GG,
            tickets: bG
          } = this.pending.shift();
          this.markLeft(bG), this.send(GG)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * cy)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class sy {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new Ay(GG, bG)
      }
      send(GG) {
        return this.queue.enqueue(GG)
      }
      sent() {
        return this.queue.sent()
      }
      track(GG, bG) {
        return this.queue.track(GG, bG)
      }
      leftAt(GG) {
        return this.queue.leftAt(GG)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(GG) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = bG, this.send(GG), this.islandEdits.count
      }
      syncIslandEdits(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: ZG
        } = this, wG = bG - ZG.lastAtMs < ly;
        ZG.count = wG ? Math.max(ZG.count, GG) : GG
      }
      clear() {
        this.queue.clear()
      }
    }
    const qy = (0, wG.createContext)(null);

    function ny() {
      const GG = (0, wG.useContext)(qy);
      if (!GG) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return GG
    }

    function gy(GG, bG) {
      return null !== bG && void 0 !== bG ? bG : 1 === GG
    }

    function ey(GG, bG) {
      return GG.every((GG => {
        var ZG;
        let [wG, , SG] = GG;
        return !gy(SG, null === (ZG = bG.get(wG)) || void 0 === ZG ? void 0 : ZG.vQ)
      }))
    }

    function Ry(GG, bG, ZG) {
      if (0 === GG.size) return GG;
      const wG = new Map(GG);
      for (const [SG, LG] of GG) {
        const GG = bG.find((GG => {
          let [bG] = GG;
          return bG === SG
        }));
        (!GG || LG.vQ === (1 === GG[2]) || LG.atMs < ZG) && wG.delete(SG)
      }
      return wG
    }

    function Ty(GG) {
      var bG;
      let {
        eS: ZG,
        input: SG,
        drops: LG,
        seconds: yG
      } = GG;
      const {
        t: kG
      } = (0, mS.w)(), UG = ny(), [YG, VG] = (0, wG.useState)(new Map);
      (0, wG.useEffect)((() => {
        LG && VG((GG => Ry(GG, LG, Date.now() - ly)))
      }), [LG]), (0, wG.useEffect)((() => {
        const GG = function(GG, bG) {
          let ZG = null;
          for (const {
              atMs: wG
            }
            of GG.values()) ZG = null === ZG ? wG : Math.min(ZG, wG);
          return null === ZG ? null : ZG + bG
        }(YG, ly);
        if (null === GG || !LG) return;
        const bG = setTimeout((() => {
          VG((GG => Ry(GG, LG, Date.now() - ly)))
        }), Math.max(0, GG - Date.now()) + 1);
        return () => {
          clearTimeout(bG)
        }
      }), [YG, LG]);
      const pG = eG(SG),
        fG = null !== pG && null !== LG && ey(LG, YG),
        QG = function(GG, bG, ZG) {
          return null === GG || null === bG || ey(bG, ZG) ? 0 : AG[PG[GG]]
        }(pG, LG, YG);
      return (0, CL.jsxs)(lL, {
        title: kG("buildAFactory2Game:farmDropsTitle", {
          seconds: yG
        }),
        count: null !== (bG = null === LG || void 0 === LG ? void 0 : LG.length) && void 0 !== bG ? bG : 0,
        children: [QG > 0 && (0, CL.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: kG("buildAFactory2Game:farmDropsPower", {
            power: String(QG)
          })
        }), (null === pG || !LG) && (0, CL.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: kG("buildAFactory2Game:farmDropsEmpty")
        }), fG && (0, CL.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: kG("buildAFactory2Game:farmDropsAllVoided")
        }), null !== pG && (null === LG || void 0 === LG ? void 0 : LG.map((GG => {
          var bG;
          let [wG, SG, LG] = GG;
          const yG = SG < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            pG = gy(LG, null === (bG = YG.get(wG)) || void 0 === bG ? void 0 : bG.vQ);
          return (0, CL.jsxs)("li", {
            className: uS()("Baf2Recipe Baf2FarmDrop", {
              Voided: !pG
            }),
            children: [(0, CL.jsx)(IL, {
              item: wG,
              amount: 1
            }), (0, CL.jsx)("span", {
              className: "Baf2RecipeName",
              children: SL(kG, wG)
            }), (0, CL.jsx)("span", {
              className: "Baf2FarmRate",
              children: kG(yG, {
                amount: String(SG)
              })
            }), (0, CL.jsx)("button", {
              type: "button",
              className: uS()("Baf2FarmToggle SmallTextBold", {
                Kept: pG
              }),
              "aria-pressed": pG,
              onClick: () => {
                VG(new Map(YG).set(wG, {
                  vQ: !pG,
                  atMs: Date.now()
                })), UG.send(function(GG, bG, ZG, wG) {
                  return `${sG} ${GG} ${bG} ${ZG} ${wG}`
                }(ZG[0], ZG[1], ZG[2], wG))
              },
              children: kG(pG ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, wG)
        })))]
      })
    }
    var Hy;
    const ty = String(null !== (Hy = lb.Synthesizer.waterPerOp) && void 0 !== Hy ? Hy : 0);

    function Dy(GG) {
      let {
        eS: bG,
        taught: ZG
      } = GG;
      const {
        t: SG
      } = (0, mS.w)(), LG = ny(), [yG, kG] = (0, wG.useState)(null);
      (0, wG.useEffect)((() => {
        null !== yG && ZG === yG && kG(null)
      }), [yG, ZG]);
      const UG = null !== yG && void 0 !== yG ? yG : ZG;
      let YG = SG("buildAFactory2Game:synthPick");
      return null !== UG && (YG = SG("buildAFactory2Game:synthGrows", {
        name: SL(SG, UG),
        input: SL(SG, ub),
        water: ty
      })), (0, CL.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, CL.jsx)("div", {
          className: uS()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === UG
          }),
          children: YG
        }), (0, CL.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: ib.map(((GG, ZG) => {
            const wG = SL(SG, GG),
              yG = GG === UG;
            return (0, CL.jsx)("li", {
              children: (0, CL.jsx)("button", {
                type: "button",
                className: uS()("Baf2SynthTile", {
                  Selected: yG
                }),
                title: wG,
                "aria-label": wG,
                "aria-pressed": yG,
                onClick: () => {
                  yG || (kG(GG), LG.send(`${Wb} ${bG[0]} ${bG[1]} ${bG[2]} ${ZG}`))
                },
                children: (0, CL.jsx)(FS.b, {
                  itemName: GG,
                  amount: 0
                })
              })
            }, GG)
          }))
        })]
      })
    }
    const Ny = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function Oy(GG) {
      let {
        kind: bG,
        tier: ZG,
        coupled: wG,
        level: SG,
        slot: LG
      } = GG;
      const {
        t: yG
      } = (0, mS.w)(), UG = NG(Pb);
      if (!wG && null !== ZG && ZG < UG) return (0, CL.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, CL.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, CL.jsx)(IS.c, {
            name: "lock"
          })
        }), (0, CL.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: yG("buildAFactory2Game:upgradeLocked")
        }), (0, CL.jsx)("span", {
          className: "Baf2TierTag",
          children: yG("buildAFactory2Game:tierTag", {
            tier: String(UG)
          })
        })]
      });
      const YG = function(GG, bG) {
          if (kG() && "Crusher" !== GG && null !== bG) {
            if (xy(Ab, bG)) return {
              item: Ab,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (xy(Mb, bG)) return {
              item: Mb,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Pb,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(bG, ZG),
        VG = yG(wG ? Ny[SG - 1] : YG.emptyKey),
        pG = null !== ZG ? function(GG, bG, ZG, wG) {
          if (!kG() || !ZG || "Crusher" === GG || bG < 10) return null;
          const SG = NG(Ab);
          if (wG < 3 && SG > 1 && (2 === wG || bG >= SG)) return {
            tier: SG,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const LG = NG(Mb);
          if (1 === wG && LG > 1) return {
            tier: LG,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(bG, ZG, wG, SG) : null;
      return (0, CL.jsxs)("div", {
        className: uS()("Baf2UpgradeSocket", {
          Fitted: wG
        }),
        children: [(0, CL.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [wG && LG, !wG && (0, CL.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, CL.jsx)(FS.b, {
              itemName: YG.item,
              amount: 0
            })
          })]
        }), (0, CL.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, CL.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: yG("buildAFactory2Game:upgradeTitle")
          }), (0, CL.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: VG
          }), wG && SG >= 2 && "Crusher" === bG && (0, CL.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: yG("buildAFactory2Game:couplerCrusherHint")
          }), pG && null !== ZG && ZG < pG.tier && (0, CL.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, CL.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, CL.jsx)(IS.c, {
                name: "lock"
              })
            }), yG(pG.lockedKey), (0, CL.jsx)("span", {
              className: "Baf2TierTag",
              children: yG("buildAFactory2Game:tierTag", {
                tier: String(pG.tier)
              })
            })]
          }), pG && null !== ZG && ZG >= pG.tier && (0, CL.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: yG(pG.nextKey)
          })]
        })]
      })
    }

    function xy(GG, bG) {
      const ZG = NG(GG);
      return ZG > 1 && bG >= ZG
    }
    var By = ZG(37396);
    const Gk = (0, xG.z)(lb.Condenser, lb.Condenser.fluidMade),
      bk = .05;
    class Zk extends uy {}

    function wk(GG) {
      return rL(GG, "")
    }

    function Sk(GG, bG, ZG) {
      return GG(bG ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: ZG
      })
    }

    function Lk(GG, bG, ZG, wG) {
      return ZG <= bk && wG <= bk ? null : wG <= bk || ZG <= bk ? Sk(GG, bG, wG <= bk ? rL(ZG, "+") : rL(wG, "\u2212")) : GG(bG ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: wk(ZG),
        used: wk(wG)
      })
    }

    function yk(GG, bG) {
      return Math.min(100, 100 * GG / Math.max(1, bG))
    }

    function kk(GG) {
      let {
        stored: bG,
        cap: ZG,
        netPerS: wG,
        rates: SG,
        cryo: LG
      } = GG;
      const {
        t: yG
      } = (0, mS.w)(), kG = function(GG, bG, ZG, wG) {
        return ZG <= 0 ? GG("buildAFactory2Game:waterNoStorage") : bG >= ZG ? GG("buildAFactory2Game:powerFull") : wG > bk ? GG("buildAFactory2Game:powerFullIn", {
          time: oL(GG, (ZG - bG) / wG)
        }) : wG < -.05 ? bG <= 0 ? GG("buildAFactory2Game:waterEmpty") : GG("buildAFactory2Game:powerEmptyIn", {
          time: oL(GG, bG / -wG)
        }) : GG("buildAFactory2Game:powerSteady")
      }(yG, bG, ZG, wG), UG = ZG > 0 && bG < ZG && Math.abs(wG) <= bk, YG = yG(LG ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), VG = null !== SG ? `${SG} \xb7 ${kG}` : UG ? YG : `${YG} \xb7 ${kG}`;
      return (0, CL.jsxs)(CL.Fragment, {
        children: [(0, CL.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, CL.jsx)("div", {
            style: {
              width: `${yk(bG,ZG)}%`
            }
          })
        }), (0, CL.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, CL.jsx)("span", {
            children: ZG > 0 && yG("buildAFactory2Game:powerStored", {
              stored: (0, xG.K)(bG),
              cap: (0, xG.K)(ZG)
            })
          }), (0, CL.jsx)("span", {
            className: uS()("Baf2WaterNet", {
              Draining: wG < -.05
            }),
            children: VG
          })]
        })]
      })
    }

    function Uk(GG) {
      let {
        water: bG,
        at: ZG,
        side: wG = null
      } = GG;
      const {
        t: SG
      } = (0, mS.w)(), LG = ny(), [yG, kG, UG] = bG;
      return (0, CL.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, CL.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, CL.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: SG(null === wG ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${wG}`)
          }), (0, CL.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              LG.send(`${xG.x} ${ZG[0]} ${ZG[1]} ${ZG[2]}${"cryoOut"===wG?" cryo":""}`)
            },
            children: SG("buildAFactory2Game:waterDetails")
          })]
        }), (0, CL.jsx)(kk, {
          stored: yG,
          cap: kG,
          netPerS: UG,
          rates: Sk(SG, "cryoOut" === wG, rL(Math.abs(UG), UG < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === wG
        })]
      })
    }

    function Yk(GG, bG) {
      var ZG, wG, SG;
      const LG = !0 === bG.baf2WaterCryo,
        yG = null !== (ZG = null === (wG = bG.baf2WaterMakers.find((GG => GG[0] === (LG ? xG.d : "Condenser")))) || void 0 === wG ? void 0 : wG[1]) && void 0 !== ZG ? ZG : 0,
        kG = [],
        UG = (bG, ZG, wG) => {
          bG > 0 && kG.push(GG(1 === bG ? ZG : wG, {
            count: String(bG)
          }))
        };
      return LG ? UG(yG, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : UG(yG, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), UG(null !== (SG = bG.baf2WaterPipes) && void 0 !== SG ? SG : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), UG(bG.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), kG.join(" \xb7 ")
    }

    function Vk(GG, bG) {
      if (!0 === bG.baf2WaterCryo) return function(GG, bG) {
        const ZG = lb[xG.d];
        switch (bG.baf2WaterThis) {
          case "pipe":
            return {
              text: GG("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: GG("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: GG("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: GG("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: GG("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: GG("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: GG("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var wG;
            const [SG, LG] = null !== (wG = bG.baf2WaterThisRates) && void 0 !== wG ? wG : [(0, xG.z)(ZG, ZG.cryoMade), (0, xG.z)(ZG, ZG.powerPerOp)];
            return !0 === bG.baf2WaterDriven ? {
              text: GG("buildAFactory2Game:cryoThisMixerDriven", {
                rate: wk(SG)
              }),
              bad: !1
            } : {
              text: GG("buildAFactory2Game:cryoThisMixer", {
                rate: wk(SG),
                power: wk(LG)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: GG("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(GG, bG);
      const ZG = !0 === bG.baf2WaterDriven,
        wG = lb.Condenser;
      switch (bG.baf2WaterThis) {
        case "pipe":
          return {
            text: GG("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: GG("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: GG("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: GG("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: GG("buildAFactory2Game:waterThisTank", {
              tank: (0, xG.K)(xG.m),
              cap: (0, xG.K)(bG.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var SG;
          const [LG, yG] = null !== (SG = bG.baf2WaterThisRates) && void 0 !== SG ? SG : [Gk, (0, xG.z)(wG, wG.powerPerOp)];
          return ZG ? {
            text: GG("buildAFactory2Game:waterThisCondenserDriven", {
              rate: wk(LG)
            }),
            bad: !1
          } : {
            text: GG("buildAFactory2Game:waterThisCondenser", {
              rate: wk(LG),
              power: wk(yG)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: GG("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function pk(GG, bG) {
      const ZG = bG.baf2WaterMakers.some((GG => !0 === GG[5]));
      if (!0 === bG.baf2WaterCryo) {
        const wG = bG.baf2WaterUsedPerS - bG.baf2WaterMadePerS,
          SG = ZG || wG <= bk ? 0 : (0, xG.y)(wG);
        return 0 === SG ? null : SG > 1 ? GG("buildAFactory2Game:cryoNextMixers", {
          mixers: String(SG)
        }) : GG("buildAFactory2Game:cryoNextOne")
      }
      const wG = ZG ? null : function(GG, bG) {
        const ZG = bG - GG;
        return ZG <= bk ? null : Math.ceil(ZG / Gk)
      }(bG.baf2WaterMadePerS, bG.baf2WaterUsedPerS);
      return null === wG ? null : wG > 1 ? GG("buildAFactory2Game:waterNextCondensers", {
        condensers: String(wG)
      }) : GG("buildAFactory2Game:waterNextOne")
    }

    function fk(GG) {
      let {
        item: bG,
        label: ZG,
        note: wG,
        value: SG,
        dim: LG,
        bad: yG
      } = GG;
      return (0, CL.jsxs)("li", {
        className: uS()("Baf2WaterRow", {
          Dim: LG,
          Bad: yG
        }),
        children: [(0, CL.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, CL.jsx)(FS.b, {
            itemName: bG,
            amount: 0
          })
        }), (0, CL.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, CL.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: ZG
          }), wG && (0, CL.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: wG
          })]
        }), (0, CL.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: SG
        })]
      })
    }

    function Qk(GG) {
      return By.l[GG] ? GG : "Reactor Port"
    }

    function Kk(GG) {
      let {
        message: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)(), wG = !0 === bG.baf2WaterCryo, SG = (GG, bG) => Sk(ZG, wG, rL(GG, bG));
      return (0, CL.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, CL.jsxs)("section", {
          children: [(0, CL.jsxs)("h3", {
            children: [ZG("buildAFactory2Game:waterMakes"), (0, CL.jsx)("span", {
              children: SG(bG.baf2WaterMadePerS, "+")
            })]
          }), (0, CL.jsxs)("ul", {
            children: [0 === bG.baf2WaterMakers.length && (0, CL.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: ZG(wG ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), bG.baf2WaterMakers.map((GG => {
              let [bG, wG, LG, yG, kG, UG] = GG;
              const YG = ZG("buildAFactory2Game:powerRunning", {
                amount: String(LG)
              });
              let VG = kG > 0 ? ZG("buildAFactory2Game:waterMakerPower", {
                running: YG,
                power: wk(kG)
              }) : YG;
              return UG && (VG = ZG(0 === LG && yG <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, CL.jsx)(fk, {
                item: bG,
                label: `${SL(ZG,bG)} \xd7${wG}`,
                note: VG,
                value: LG > 0 || UG && yG > 0 ? SG(yG, "+") : ZG("buildAFactory2Game:powerIdle"),
                dim: 0 === LG && !UG,
                bad: UG
              }, bG)
            }))]
          })]
        }), (0, CL.jsxs)("section", {
          children: [(0, CL.jsxs)("h3", {
            children: [ZG("buildAFactory2Game:waterUses"), (0, CL.jsx)("span", {
              children: SG(bG.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, CL.jsxs)("ul", {
            children: [0 === bG.baf2WaterUsers.length && (0, CL.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: ZG(wG ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), bG.baf2WaterUsers.map((GG => {
              let [bG, wG, LG, yG] = GG;
              const kG = By.l[bG] ? SL(ZG, bG) : bG;
              return (0, CL.jsx)(fk, {
                item: Qk(bG),
                label: wG > 1 ? `${kG} \xd7${wG}` : kG,
                note: yG ? ZG("buildAFactory2Game:waterPortFirst") : void 0,
                value: LG > 0 ? SG(LG, "\u2212") : ZG("buildAFactory2Game:powerIdle"),
                dim: 0 === LG
              }, bG)
            }))]
          })]
        })]
      })
    }

    function hk(GG) {
      var bG, ZG, SG, LG, yG;
      let {
        store: kG,
        close: UG
      } = GG;
      const {
        t: YG
      } = (0, mS.w)(), VG = function(GG) {
        const [bG, ZG] = (0, wG.useState)((() => GG.get()));
        return (0, wG.useEffect)((() => (ZG(GG.get()), GG.subscribe((() => {
          ZG(GG.get())
        })))), [GG]), bG
      }(kG), pG = null !== (bG = null === VG || void 0 === VG ? void 0 : VG.baf2WaterStored) && void 0 !== bG ? bG : 0, fG = null !== (ZG = null === VG || void 0 === VG ? void 0 : VG.baf2WaterCap) && void 0 !== ZG ? ZG : 0, QG = null !== (SG = null === VG || void 0 === VG ? void 0 : VG.baf2WaterMadePerS) && void 0 !== SG ? SG : 0, KG = null !== (LG = null === VG || void 0 === VG ? void 0 : VG.baf2WaterUsedPerS) && void 0 !== LG ? LG : 0, hG = null !== (yG = null === VG || void 0 === VG ? void 0 : VG.baf2WaterNetPerS) && void 0 !== yG ? yG : QG - KG, dG = VG && Vk(YG, VG), JG = VG && pk(YG, VG), rG = !0 === (null === VG || void 0 === VG ? void 0 : VG.baf2WaterCryo);
      return (0, CL.jsx)(oy.b, {
        close: UG,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, CL.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, CL.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CL.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== VG && fG <= 0 ? (0, CL.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, CL.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, CL.jsx)(FS.b, {
                  itemName: rG ? KZ.f : xG.g,
                  amount: 0
                })
              }), (0, CL.jsxs)("div", {
                children: [(0, CL.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: YG(rG ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), VG && (0, CL.jsx)("p", {
                  children: Yk(YG, VG)
                })]
              })]
            }), (0, CL.jsx)(Xy.j, {
              onClick: UG
            })]
          }), VG && dG && (0, CL.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, CL.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, CL.jsx)(kk, {
                stored: pG,
                cap: fG,
                netPerS: hG,
                cryo: rG,
                rates: Lk(YG, rG, QG, KG)
              })
            }), (0, CL.jsx)("div", {
              className: uS()("Baf2WaterThis", {
                Bad: dG.bad
              }),
              children: dG.text
            }), VG.baf2WaterDriven && (0, CL.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, CL.jsx)(IS.c, {
                name: "bolt"
              }), YG(rG ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), JG && (0, CL.jsx)("p", {
              className: "Baf2WaterNext",
              children: JG
            }), (0, CL.jsx)(Kk, {
              message: VG
            })]
          })]
        })
      })
    }
    class dk {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(GG, bG) {
        const ZG = this.get(GG);
        ZG && null === bG.opLeftMs && null === bG.fuelLeftMs && bG.status === ZG.status ? bG = {
          ...bG,
          opLeftMs: ZG.opLeftMs,
          fuelLeftMs: ZG.fuelLeftMs,
          burning: ZG.burning
        } : this.updates++, this.pos = GG, this.view = bG;
        for (const wG of this.listeners) wG()
      }
      get(GG) {
        return null !== this.pos && this.pos[0] === GG[0] && this.pos[1] === GG[1] && this.pos[2] === GG[2] ? this.view : null
      }
      forget(GG) {
        null !== this.get(GG) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
    }

    function Jk(GG, bG, ZG, wG) {
      return "noFuel" === bG && wG && !SZ(lb[GG]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === bG && !0 === (null === ZG || void 0 === ZG ? void 0 : ZG.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === bG && !0 === (null === ZG || void 0 === ZG ? void 0 : ZG.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === bG && !0 === (null === ZG || void 0 === ZG ? void 0 : ZG.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === bG && !0 === (null === ZG || void 0 === ZG ? void 0 : ZG.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : rk(bG, ZG) ? "buildAFactory2Game:machineStatus_noInputShort" : function(GG, bG) {
        const ZG = lb[GG];
        if ("noFuel" === bG && void 0 !== ZG.fuels) return SZ(ZG) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (ZG.mobFarm && ("noInput" === bG || "badInput" === bG)) return `buildAFactory2Game:machineStatus_${bG}MobFarm`;
        if ("outputFull" === bG && (void 0 !== ZG.table || ZG.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === bG && Hb(ZG)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== ZG.cryoMade && ("noInput" === bG || "noOutlet" === bG || "fluidFull" === bG)) return `buildAFactory2Game:machineStatus_${bG}Mixer`;
        return `buildAFactory2Game:machineStatus_${bG}`
      }(GG, bG)
    }

    function rk(GG, bG) {
      return "noInput" === GG && null !== bG && void 0 !== bG && bG.input && bG.inputShort ? {
        input: bG.input,
        short: bG.inputShort
      } : null
    }

    function zk(GG) {
      return iS(GG) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== GG.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Ek(GG) {
      const bG = (0, lG.Se)(GG);
      return `Baf2Pane Baf2Pane${bG.charAt(0).toUpperCase()}${bG.slice(1)}`
    }

    function Xk(GG, bG) {
      const [ZG, SG] = (0, wG.useState)((() => GG.get(bG)));
      return (0, wG.useEffect)((() => {
        SG(GG.get(bG));
        const ZG = GG.subscribe((() => {
          SG(GG.get(bG))
        }));
        return () => {
          ZG(), GG.forget(bG)
        }
      }), [GG, ...bG]), ZG
    }

    function uk(GG, bG, ZG, wG) {
      const SG = lb[GG],
        LG = bG && SG.couplable ? gb(SG, ZG) : SG,
        yG = null !== wG && bZ(LG) ? function(GG, bG) {
          var ZG;
          return null !== (ZG = null !== bG && bZ(GG) ? kZ[bG] : void 0) && void 0 !== ZG ? ZG : GG.opMs
        }(LG, UZ(wG)) : LG.opMs;
      return yG === LG.opMs ? LG : {
        ...LG,
        opMs: yG
      }
    }

    function ik(GG) {
      let {
        running: bG,
        opMs: ZG,
        opLeftMs: wG,
        updateCount: SG
      } = GG;
      return (0, CL.jsx)("div", {
        className: uS()("Baf2MachineProgress", {
          Running: bG
        }),
        children: (0, CL.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: ZG / 1e3 + "s",
            animationDelay: null === wG ? void 0 : (wG - ZG) / 1e3 + "s"
          }
        }, SG)
      })
    }

    function Ck(GG) {
      let {
        running: bG,
        leftMs: ZG,
        periodMs: wG,
        updateCount: SG
      } = GG;
      const {
        t: LG
      } = (0, mS.w)(), yG = Math.min(Math.max(null !== ZG && void 0 !== ZG ? ZG : 0, 0), wG), kG = bG && yG > 0, UG = LG("buildAFactory2Game:machineBarFuel");
      return (0, CL.jsx)("div", {
        className: uS()("Baf2FuelBurn", {
          Draining: kG
        }),
        role: "img",
        title: UG,
        "aria-label": UG,
        children: (0, CL.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: kG ? {
            animationDuration: wG / 1e3 + "s",
            animationDelay: (yG - wG) / 1e3 + "s"
          } : {
            transform: `scaleY(${yG/wG})`
          }
        }, SG)
      })
    }

    function Wk(GG, bG, ZG) {
      let [wG, SG] = ZG;
      const LG = 1 !== wG ? WS(bG) : null;
      return {
        amount: wG,
        have: SG,
        item: GG(LG || wL(bG))
      }
    }

    function mk(GG) {
      return bZ(GG) ? "buildAFactory2Game:machineBarMining" : ZZ(GG) ? "buildAFactory2Game:machineBarCutting" : void 0 !== GG.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Ik(GG) {
      var bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG, rG, zG;
      let {
        kind: EG,
        eS: oG,
        store: XG,
        power: uG,
        renderSlot: iG
      } = GG;
      const {
        t: CG
      } = (0, mS.w)(), WG = Xk(XG, oG), mG = lb[EG], IG = null !== (bG = null === WG || void 0 === WG ? void 0 : WG.coupled) && void 0 !== bG && bG, FG = null !== (ZG = null === WG || void 0 === WG ? void 0 : WG.couplerLevel) && void 0 !== ZG ? ZG : 1, vG = uk(EG, IG, FG, null !== (wG = null === WG || void 0 === WG || null === (SG = WG.dug) || void 0 === SG ? void 0 : SG.item) && void 0 !== wG ? wG : null), aG = null !== (LG = null === WG || void 0 === WG ? void 0 : WG.status) && void 0 !== LG ? LG : null, cG = null !== (yG = null === WG || void 0 === WG ? void 0 : WG.power) && void 0 !== yG ? yG : null, lG = null !== (kG = null === WG || void 0 === WG ? void 0 : WG.opLeftMs) && void 0 !== kG ? kG : null, jG = null !== (UG = null === WG || void 0 === WG ? void 0 : WG.dug) && void 0 !== UG ? UG : null, PG = null !== jG && bZ(mG) ? kZ[null !== (YG = UZ(jG.item)) && void 0 !== YG ? YG : ""] : void 0, MG = void 0 === PG ? null : 6e4 / PG, AG = null !== (VG = null === WG || void 0 === WG ? void 0 : WG.powerCap) && void 0 !== VG ? VG : 4e3, sG = null !== (pG = null === WG || void 0 === WG ? void 0 : WG.tier) && void 0 !== pG ? pG : null, qG = void 0 !== vG.powerMade, nG = null !== mG.fuelSlot ? iG(mG.fuelSlot) : null, gG = nb(mG), eG = !IG && !0 === (null === WG || void 0 === WG ? void 0 : WG.fuelFed), TG = !IG && !0 === (null === WG || void 0 === WG ? void 0 : WG.fuelFeeds), HG = null !== mG.fuelSlot && !IG, tG = null !== (fG = null === WG || void 0 === WG ? void 0 : WG.fuelLeftMs) && void 0 !== fG ? fG : null, DG = function(GG, bG, ZG) {
        var wG;
        const SG = null === bG ? void 0 : LZ[bG];
        return Math.max(null !== (wG = null !== SG && void 0 !== SG ? SG : ZG) && void 0 !== wG ? wG : 0, GG.opMs)
      }(vG, null !== (QG = null === WG || void 0 === WG ? void 0 : WG.burning) && void 0 !== QG ? QG : null, tG), NG = null !== (KG = null === WG || void 0 === WG ? void 0 : WG.fuelKeep) && void 0 !== KG ? KG : null, OG = null === aG ? null : Jk(EG, aG, WG, eG), xG = null === aG ? null : rk(aG, WG);
      return (0, CL.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, CL.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, CL.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: CG(wL(EG))
          }), jG && (0, CL.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [CG("Tree Cutter" === EG ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, CL.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, CL.jsx)(FS.b, {
                itemName: jG.item,
                amount: 0
              })
            }), (0, CL.jsx)(vS.c, {
              text: jG.name
            })]
          }), null !== MG && (0, CL.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: CG("buildAFactory2Game:machineDigsFixed", {
              perMin: String(MG)
            })
          }), (null === WG || void 0 === WG ? void 0 : WG.field) && (0, CL.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, CL.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, CL.jsx)(FS.b, {
                itemName: "Wheat",
                amount: 0
              })
            }), CG("buildAFactory2Game:machineField", {
              planted: String(WG.field[0]),
              ripe: String(WG.field[1])
            })]
          }), (0, CL.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, CL.jsxs)("div", {
              className: uS()("Baf2MachineColumn", {
                Baf2Burns: HG
              }),
              children: [null !== vG.inputSlot && (0, CL.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, CL.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: CG(zk(vG))
                }), iG(vG.inputSlot)]
              }), null !== mG.fuelSlot && !IG && (0, CL.jsxs)("div", {
                className: uS()("Baf2MachineSlot", {
                  Baf2FuelFed: eG
                }),
                children: [(0, CL.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [eG && (0, CL.jsx)(IS.c, {
                    name: "fire"
                  }), CG("buildAFactory2Game:machineFuel")]
                }), (0, CL.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, CL.jsx)(Ck, {
                    running: "running" === aG,
                    leftMs: tG,
                    periodMs: DG,
                    updateCount: XG.updateCount
                  }), nG]
                })]
              }), null !== mG.fuelSlot && IG && (0, CL.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, CL.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: CG("buildAFactory2Game:machineFuel")
                }), (0, CL.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: CG("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": CG("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, CL.jsx)(IS.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, CL.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, CL.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: CG(mk(vG))
              }), (0, CL.jsx)(ik, {
                running: "running" === aG,
                opMs: vG.opMs,
                opLeftMs: lG,
                updateCount: XG.updateCount
              })]
            }), vG.outputSlots.length > 0 && (0, CL.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, CL.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: CG("buildAFactory2Game:machineOutput")
              }), (0, CL.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: vG.outputSlots.map((GG => (0, CL.jsx)("div", {
                  children: iG(GG)
                }, GG)))
              })]
            }), null !== cG && qG && (0, CL.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, CL.jsx)("div", {
                style: {
                  height: 100 * cG / AG + "%"
                }
              })
            })]
          }), HG && null !== NG && (0, CL.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, CL.jsx)(IS.c, {
              name: "arrows-rotate"
            }), CG(ZZ(vG) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(NG)
            })]
          }), (eG || TG) && (0, CL.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, CL.jsx)(IS.c, {
              name: "fire"
            }), CG(eG ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), mG.couplable && (0, CL.jsx)(Oy, {
            kind: EG,
            tier: sG,
            coupled: IG,
            level: FG,
            slot: gG === mG.fuelSlot ? nG : null !== gG ? iG(gG) : null
          }), null !== cG && !qG && !0 === (null === WG || void 0 === WG ? void 0 : WG.reactorPowered) && (0, CL.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: CG("buildAFactory2Game:machineReactorPowered")
          }), null !== cG && !qG && !0 !== (null === WG || void 0 === WG ? void 0 : WG.reactorPowered) && (0, CL.jsx)(Fy, {
            stored: cG,
            cap: AG,
            rates: null !== (hG = null === WG || void 0 === WG ? void 0 : WG.powerRates) && void 0 !== hG ? hG : null
          }), (null === WG || void 0 === WG ? void 0 : WG.water) && (0, CL.jsx)(Uk, {
            water: WG.water,
            at: oG,
            side: WG.cryo ? "waterIn" : null
          }), (null === WG || void 0 === WG ? void 0 : WG.cryo) && (0, CL.jsx)(Uk, {
            water: WG.cryo,
            at: oG,
            side: "cryoOut"
          }), null !== WG && void 0 !== WG && WG.inertCoupler ? (0, CL.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: CG("buildAFactory2Game:machineStatus_couplerOff", {
              item: SL(CG, WG.inertCoupler)
            })
          }) : null !== OG && (0, CL.jsx)("div", {
            className: uS()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== aG
            }),
            children: CG(OG, xG ? Wk(CG, xG.input, xG.short) : void 0)
          })]
        }), (0, CL.jsxs)("div", {
          className: uS()("Baf2MachineSide", {
            Baf2SynthSide: Hb(mG)
          }),
          children: [Hb(mG) && (0, CL.jsx)(Dy, {
            eS: oG,
            taught: null !== (dG = null === WG || void 0 === WG ? void 0 : WG.taught) && void 0 !== dG ? dG : null
          }, oG.join(",")), qG && (0, CL.jsx)(ay, {
            kind: EG,
            def: vG,
            eS: oG,
            power: uG,
            stored: null !== cG && void 0 !== cG ? cG : 0,
            cap: AG
          }), RG(mG) && (0, CL.jsx)(Ty, {
            eS: oG,
            input: null !== (JG = null === WG || void 0 === WG ? void 0 : WG.input) && void 0 !== JG ? JG : null,
            drops: null !== (rG = null === WG || void 0 === WG ? void 0 : WG.farm) && void 0 !== rG ? rG : null,
            seconds: String(vG.opMs / 1e3)
          }), !qG && !RG(mG) && !Hb(mG) && (0, CL.jsx)(wy, {
            kind: EG,
            def: vG,
            input: null !== (zG = null === WG || void 0 === WG ? void 0 : WG.input) && void 0 !== zG ? zG : null,
            tier: null !== sG && void 0 !== sG ? sG : 1,
            noSeeds: !0 === (null === WG || void 0 === WG ? void 0 : WG.noSeeds)
          })]
        })]
      })
    }

    function Fk(GG, bG, ZG, wG) {
      var SG;
      const LG = lb[GG],
        yG = [LG.inputSlot, LG.fuelSlot, ...null !== (SG = LG.inputSlots) && void 0 !== SG ? SG : []].filter((GG => null !== GG));
      return {
        render: SG => {
          let {
            eS: LG,
            renderSlot: yG
          } = SG;
          return (0, CL.jsx)(qy.Provider, {
            value: wG,
            children: (0, CL.jsx)(Ik, {
              kind: GG,
              eS: LG,
              store: bG,
              power: ZG,
              renderSlot: yG
            })
          })
        },
        quickMoveRange: yG.length > 0 ? [Math.min(...yG), Math.max(...yG) + 1] : [0, 0],
        className: Ek(GG)
      }
    }
    const vk = "Assembler";

    function ak(GG) {
      var bG, ZG, wG, SG, LG, yG, kG, UG, YG;
      let {
        eS: VG,
        store: pG,
        renderSlot: fG
      } = GG;
      const {
        t: QG
      } = (0, mS.w)(), KG = Xk(pG, VG), hG = null !== (bG = null === KG || void 0 === KG ? void 0 : KG.tier) && void 0 !== bG ? bG : 1, dG = null !== (ZG = null === KG || void 0 === KG ? void 0 : KG.taught) && void 0 !== ZG ? ZG : null, JG = Ob(vk, {
        coupled: !1,
        taught: dG
      }), rG = null !== (wG = JG.bench) && void 0 !== wG ? wG : null, zG = null !== (SG = null === KG || void 0 === KG ? void 0 : KG.status) && void 0 !== SG ? SG : null, EG = null !== (LG = null === KG || void 0 === KG ? void 0 : KG.power) && void 0 !== LG ? LG : null, oG = null !== (yG = null === KG || void 0 === KG ? void 0 : KG.powerCap) && void 0 !== yG ? yG : 4e3;
      return (0, CL.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, CL.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, CL.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: QG(wL(vk))
          }), rG && (0, CL.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [QG("buildAFactory2Game:benchMakes"), (0, CL.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, CL.jsx)(FS.b, {
                itemName: rG.output,
                amount: 0
              })
            }), (null === KG || void 0 === KG ? void 0 : KG.taughtName) && (0, CL.jsx)(vS.c, {
              text: KG.taughtName
            }), rG.outputAmount > 1 && (0, CL.jsxs)("span", {
              children: ["\xd7", rG.outputAmount]
            })]
          }), !rG && (0, CL.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: QG("buildAFactory2Game:benchTeachHint")
          }), (0, CL.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, CL.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (kG = JG.inputSlots) && void 0 !== kG ? kG : []).map(((GG, bG) => {
                const ZG = null === rG || void 0 === rG ? void 0 : rG.inputs[bG];
                return (0, CL.jsxs)("div", {
                  className: uS()("Baf2BenchInput", {
                    Spare: !ZG
                  }),
                  children: [(0, CL.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [fG(GG), ZG && (0, CL.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, CL.jsx)(FS.b, {
                        itemName: ZG.item,
                        amount: 0
                      })
                    })]
                  }), (0, CL.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: ZG ? `\xd7${ZG.amount}` : "\xa0"
                  })]
                }, GG)
              }))
            }), (0, CL.jsx)(ik, {
              running: "running" === zG,
              opMs: JG.opMs,
              opLeftMs: null !== (UG = null === KG || void 0 === KG ? void 0 : KG.opLeftMs) && void 0 !== UG ? UG : null,
              updateCount: pG.updateCount
            }), (0, CL.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, CL.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: QG("buildAFactory2Game:machineOutput")
              }), (0, CL.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: JG.outputSlots.map((GG => (0, CL.jsx)("div", {
                  children: fG(GG)
                }, GG)))
              })]
            })]
          }), null !== EG && (0, CL.jsx)(Fy, {
            stored: EG,
            cap: oG,
            rates: null !== (YG = null === KG || void 0 === KG ? void 0 : KG.powerRates) && void 0 !== YG ? YG : null
          }), null !== zG && (0, CL.jsx)("div", {
            className: uS()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== zG
            }),
            children: QG(Jk(vk, zG, KG, !1))
          }), rG && rG.inputs.length > 1 && (0, CL.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: QG("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, CL.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, CL.jsx)(Ly, {
            taught: dG,
            tier: hG
          }), rG && (0, CL.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: QG("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function ck(GG) {
      var bG;
      const ZG = null !== (bG = lb[vk].inputSlots) && void 0 !== bG ? bG : [];
      return {
        render: bG => {
          let {
            eS: ZG,
            renderSlot: wG
          } = bG;
          return (0, CL.jsx)(ak, {
            eS: ZG,
            store: GG,
            renderSlot: wG
          })
        },
        quickMoveRange: [Math.min(...ZG), Math.max(...ZG) + 1],
        className: Ek(vk)
      }
    }
    var lk = ZG(80),
      jk = ZG(1092),
      Pk = ZG(4255);
    const Mk = 600,
      Ak = .5,
      sk = 4,
      qk = 1200,
      nk = 140,
      gk = 100,
      ek = 32,
      Rk = 16,
      Tk = 100.5,
      Hk = 90,
      tk = 1.5,
      Dk = 50;

    function Nk(GG) {
      switch (vZ(GG)) {
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
    const Ok = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function xk(GG) {
      const bG = Math.ceil(60 * GG / gk);
      return {
        fuel: Math.max(ek, bG),
        waste: Math.max(Rk, bG)
      }
    }

    function Bk(GG, bG, ZG) {
      const [wG, SG, LG] = [GG - 2, bG - 2, ZG - 2];
      return 2 * (wG * SG + SG * LG + LG * wG) * nk
    }

    function GU(GG, bG, ZG) {
      return Math.max(0, GG - 2) * Math.max(0, bG - 2) * Math.max(0, ZG - 2)
    }

    function bU(GG, bG) {
      const [ZG, wG, SG] = GG, LG = ZG * wG * SG, yG = new Float32Array(LG);
      let kG = 0,
        UG = 0,
        YG = 0,
        VG = 0,
        pG = 0;
      const fG = (GG, LG, yG) => GG < 0 || GG >= ZG || LG < 0 || LG >= wG || yG < 0 || yG >= SG ? 0 : bG[(LG * SG + yG) * ZG + GG];
      for (let dG = 0; dG < wG; dG++)
        for (let GG = 0; GG < SG; GG++)
          for (let wG = 0; wG < ZG; wG++) {
            const LG = (dG * SG + GG) * ZG + wG,
              QG = bG[LG];
            if (1 === QG) {
              kG++;
              let bG = 0;
              for (const [ZG, SG, LG] of Ok) {
                const yG = fG(wG + ZG, dG + SG, GG + LG);
                1 !== yG && 2 !== yG || bG++
              }
              yG[LG] = Mk * (1 + Ak * Math.min(bG, sk)), VG += yG[LG]
            } else if (2 === QG) UG++;
            else if (3 === QG) {
              YG++;
              Ok.some((bG => {
                let [ZG, SG, LG] = bG;
                return 1 === fG(wG + ZG, dG + SG, GG + LG)
              })) && (pG += qk)
            }
          }
      const QG = Bk(ZG + 2, wG + 2, SG + 2),
        KG = Math.min(VG, pG, QG),
        hG = kG > 0 ? VG * gk / kG : 0;
      return {
        rods: kG,
        graphite: UG,
        channels: YG,
        fuelHeat: VG,
        cooling: pG,
        size: QG,
        max: KG,
        vol: LG,
        powerPerUnit: hG,
        pelletsPerMin: hG > 0 ? KG / hG * 60 : 0,
        waterPerS: KG * xG.k,
        rodHeat: yG
      }
    }
    const ZU = 0,
      wU = 1,
      SU = 6,
      LU = 7,
      yU = 8;

    function kU(GG, bG) {
      const [ZG, wG, SG] = GG, LG = new Uint8Array(ZG * wG * SG), yG = (GG, LG, yG) => GG < 0 || GG >= ZG || LG < 0 || LG >= wG || yG < 0 || yG >= SG ? 0 : bG[(LG * SG + yG) * ZG + GG];
      for (let kG = 0; kG < wG; kG++)
        for (let GG = 0; GG < SG; GG++)
          for (let wG = 0; wG < ZG; wG++) {
            const UG = (kG * SG + GG) * ZG + wG,
              YG = bG[UG];
            if (1 === YG) {
              let bG = 0;
              for (const [ZG, SG, LG] of Ok) {
                const UG = yG(wG + ZG, kG + SG, GG + LG);
                bG += 1 === UG || 2 === UG ? 1 : 0
              }
              LG[UG] = wU + Math.min(bG, sk)
            } else if (3 === YG) {
              const bG = Ok.some((bG => {
                let [ZG, SG, LG] = bG;
                return 1 === yG(wG + ZG, kG + SG, GG + LG)
              }));
              LG[UG] = bG ? SU : LU
            } else 2 === YG && (LG[UG] = yU)
          }
      return LG
    }

    function UU(GG) {
      return GG.fuelHeat <= GG.cooling && GG.fuelHeat <= GG.size ? "fuel" : GG.cooling <= GG.size ? "cooling" : "size"
    }
    const YU = Hk;

    function VU(GG, bG, ZG) {
      return Math.round(GG * bG * ZG * 25e3 * (1 + .25 * (Math.min(GG, bG, ZG) - 2)))
    }

    function pU(GG) {
      return Math.max(0, Math.min(xG.e, GG))
    }

    function fU(GG, bG, ZG) {
      const wG = bG * pU(ZG);
      return GG <= 0 ? 0 : wG > 0 ? Math.min(200, 100 * GG / wG) : 200
    }

    function QU(GG, bG) {
      const ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? tk : 1;
      return Math.min(GG.fuelHeat * ZG, GG.cooling * pU(bG), GG.size * ZG)
    }

    function KU(GG) {
      return 2 + GG / 10
    }
    const hU = "buildAFactory2Game:";

    function dU(GG) {
      var bG;
      return null !== (bG = GG.baf2RxMood) && void 0 !== bG ? bG : function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const ZG = [
          ["calm", 50],
          ["warm", YU],
          ["hot", Tk]
        ];
        for (const [wG, SG] of ZG)
          if (GG < SG + (wG === bG ? 3 : 0)) return wG;
        return "alarm"
      }(GG.baf2RxHeat)
    }
    const JU = 120;

    function rU(GG) {
      const bG = GG.baf2RxState;
      if ("running" === bG && GG.baf2RxHeat > Tk) return {
        label: `${hU}rxState_tooHot`,
        tone: "bad",
        fix: `${hU}rxFix_tooHot`
      };
      switch (bG) {
        case "running":
          return {
            label: `${hU}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${hU}rxState_idle`, tone: "off", fix: `${hU}rxFix_idle`
          };
        case "scram":
          return {
            label: `${hU}rxState_scram`, tone: "off", fix: GG.baf2RxHeat < Dk ? `${hU}rxFix_scramCool` : `${hU}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${hU}rxState_${bG}`, tone: "off", fix: `${hU}rxFix_${bG}`
          };
        case "melted":
          return {
            label: `${hU}rxState_melted`, tone: "bad", fix: `${hU}rxFix_melted`
          };
        default:
          return {
            label: `${hU}rxState_${bG}`, tone: "warn", fix: `${hU}rxFix_${bG}`
          }
      }
    }

    function zU(GG) {
      const [bG, ZG, wG] = GG.baf2RxStats;
      return {
        fuelHeat: bG,
        cooling: ZG * (GG.baf2RxCryo ? Math.max(1, pU(GG.baf2RxWater / 100)) : 1),
        size: wG
      }
    }

    function EU(GG) {
      var bG;
      const ZG = "idle" === GG.baf2RxState || "running" === GG.baf2RxState && GG.baf2RxHeat <= Tk || "scram" === GG.baf2RxState && GG.baf2RxHeat < Dk;
      if (0 === (GG.baf2RxFlags & Eb) || !GG.baf2RxFormed || !ZG) return null;
      const {
        fuelHeat: wG,
        cooling: SG,
        size: LG
      } = zU(GG), yG = Math.min(wG, SG, LG), kG = UU({
        fuelHeat: wG,
        cooling: SG,
        size: LG
      }), UG = "cooling" === kG && !0 === GG.baf2RxCryoOpen && !GG.baf2RxCryo, YG = null !== (bG = GG.baf2RxCells) && void 0 !== bG ? bG : "", VG = ("fuel" === kG || "cooling" === kG && !0 === GG.baf2RxCryo) && YG.length > 0 && !YG.includes(String(0)), pG = UG ? "Cryo" : "scram" === GG.baf2RxState ? "Off" : "";
      return yG < 12e3 ? {
        key: `${hU}rxGrow_${VG?"full":kG}${pG}`,
        amount: yG
      } : null
    }

    function oU(GG, bG) {
      return GG[0] === bG[0] && GG[1] === bG[1] && GG[2] === bG[2]
    }

    function XU(GG) {
      return [...GG].sort(((GG, bG) => Number(bG[2] < bG[1]) - Number(GG[2] < GG[1])))
    }

    function uU(GG, bG) {
      return bG.some((bG => {
        let [ZG, wG] = bG;
        return !(wG <= 0) && ["edge", "cap", "wall", "inside"].some((bG => ZG === Lw(GG, bG)))
      }))
    }

    function iU(GG, bG, ZG) {
      const wG = GG.baf2RxFuel - GG.baf2RxPu > 0 ? ZG : 0;
      return {
        full: GG.baf2RxWaste > bG - 3,
        fullInS: wG > 0 ? Math.max(0, bG - GG.baf2RxWaste) / wG : null
      }
    }
    const CU = {
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

    function WU(GG) {
      return mU[GG]
    }
    const mU = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function IU(GG) {
      let [bG, ZG, wG] = GG;
      return Math.ceil(Bk(bG, ZG, wG) * xG.k)
    }

    function FU(GG, bG) {
      return "battery" === GG ? bG[0] * bG[1] * bG[2] : function(GG) {
        let [bG, ZG, wG] = GG;
        return bG * ZG * wG - Math.max(0, bG - 2) * Math.max(0, ZG - 2) * Math.max(0, wG - 2)
      }(bG) - 1
    }

    function vU(GG) {
      const bG = Math.max(0, GG);
      if (bG < 10) return String(Math.round(10 * bG) / 10);
      if (bG < 1e4) return Math.round(bG).toLocaleString("en-US");
      if (bG < 1e6) return `${bG<1e5?(Math.floor(bG/100)/10).toFixed(1):Math.floor(bG/1e3)}k`;
      const ZG = bG / 1e6;
      return `${ZG<10?(Math.floor(100*ZG)/100).toFixed(2):ZG<100?(Math.floor(10*ZG)/10).toFixed(1):Math.floor(ZG)}M`
    }

    function aU(GG) {
      return GG <= 0 ? "0" : GG >= 10 ? String(Math.round(GG)) : GG.toFixed(GG >= 1 ? 1 : 2)
    }

    function cU(GG) {
      const bG = xZ(GG, 0),
        ZG = xZ(GG, tZ(GG) - 1);
      return {
        lo: [Math.min(bG[0], ZG[0]), Math.min(bG[1], ZG[1]), Math.min(bG[2], ZG[2])],
        hi: [Math.max(bG[0], ZG[0]) + 1, Math.max(bG[1], ZG[1]) + 1, Math.max(bG[2], ZG[2]) + 1]
      }
    }

    function lU(GG, bG, ZG) {
      const wG = [bG[0] - GG[0], bG[1] - GG[1], bG[2] - GG[2]],
        SG = [(GG[0] + bG[0]) / 2, (GG[1] + bG[1]) / 2, (GG[2] + bG[2]) / 2],
        LG = [];
      for (let yG = 0; yG < 3; yG++) {
        const kG = (yG + 1) % 3,
          UG = (yG + 2) % 3;
        for (const YG of [GG[kG], bG[kG]])
          for (const VG of [GG[UG], bG[UG]]) {
            const GG = [0, 0, 0],
              bG = [ZG, ZG, ZG];
            GG[yG] = SG[yG], bG[yG] = wG[yG] + ZG, GG[kG] = YG, GG[UG] = VG, LG.push([GG, bG])
          }
      }
      return LG
    }
    const jU = "buildAFactory2Game:",
      PU = [`${jU}colNorth`, `${jU}colEast`, `${jU}colSouth`, `${jU}colWest`];

    function MU(GG, bG) {
      const [ZG, wG, SG] = GG.baf2ColAt;
      return `baf2col ${ZG} ${wG} ${SG} ${bG}`
    }

    function AU(GG) {
      return function(GG) {
        if (!Number.isFinite(GG)) return "";
        const bG = Math.max(1, Math.round(GG));
        if (bG < 60) return `${bG}s`;
        const ZG = bG % 60;
        return 0 === ZG ? bG / 60 + "m" : `${Math.floor(bG/60)}m ${ZG}s`
      }(function(GG) {
        const bG = yw.FOCUS_BY_LASERS[Math.max(0, Math.min(4, GG))];
        return bG > 0 ? yw.NOVA_FOCUS / bG : 1 / 0
      }(GG))
    }

    function sU(GG) {
      const bG = Math.abs(Math.round(GG));
      return bG < 1e3 ? Math.round(GG).toLocaleString("en-US") : bG < 1e6 ? `${bG<1e5?(GG/1e3).toFixed(1).replace(/\.0$/,""):Math.round(GG/1e3)}k` : `${(GG/1e6).toFixed(bG<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function qU(GG, bG, ZG) {
      if (fw(bG) >= 0) {
        const bG = function(GG, bG) {
          return GG.find((GG => {
            let {
              focus: ZG
            } = GG;
            return ZG[0] === bG[0] && ZG[2] === bG[2] && (bG[1] === ZG[1] || bG[1] === ZG[1] - 1)
          }))
        }(GG, ZG);
        if (!bG) return null;
        const SG = function(GG) {
          let bG = 0,
            ZG = 0;
          for (let wG = 0; wG < 4; wG++) bG += GG.laser[wG] ? 1 : 0, ZG += GG.live[wG] ? 1 : 0;
          return {
            lasers: bG,
            live: ZG,
            focusPerS: yw.FOCUS_BY_LASERS[ZG],
            drawPerS: yw.LASER_DRAW * ZG
          }
        }({
          laser: bG.lasers,
          live: bG.live
        });
        if (0 === SG.lasers || "noLasers" === bG.state) return {
          key: `${jU}lookColNoLasers`
        };
        if (0 === SG.live) return {
          key: `${jU}lookColOff_blocked`
        };
        if (!(bG.on && SG.live > 0) && ("running" !== (wG = bG.state) && "slowed" !== wG)) return {
          key: `${jU}lookColOff_${bG.state}`
        };
        if (SG.live < SG.lasers) return {
          key: `${jU}lookColLasersSome`,
          params: {
            lasers: String(SG.lasers),
            live: String(SG.live)
          }
        };
        const LG = bG.open.filter(Boolean).length;
        return LG < 4 ? {
          key: `${jU}lookColLasersSpots`,
          params: {
            live: String(SG.live),
            spots: String(LG),
            time: AU(SG.live)
          }
        } : {
          key: `${jU}lookColLasers`,
          params: {
            live: String(SG.live),
            time: AU(SG.live)
          }
        }
      }
      var wG;
      if (!Qw(bG)) return null;
      const SG = function(GG, bG) {
        for (const ZG of GG) {
          const GG = Jw(ZG.focus, [bG[0], bG[1], bG[2]]);
          if (GG && GG.ey === yw.LASER_D && ZG.lasers[GG.dir]) return {
            entry: ZG,
            dir: GG.dir
          }
        }
        return null
      }(GG, ZG);
      if (!SG) return {
        key: `${jU}lookLaserNoCollider`
      };
      const {
        entry: LG,
        dir: yG
      } = SG;
      return LG.open[yG] ? LG.live[yG] ? {
        key: LG.on ? `${jU}lookLaserFiring` : `${jU}lookLaserReady`
      } : {
        key: `${jU}lookLaserBlocked`
      } : {
        key: `${jU}lookLaserClosed`
      }
    }

    function nU(GG, bG) {
      const ZG = [];
      for (let wG = 1; wG < yw.LASER_D; wG++) GG & 1 << bG * (yw.LASER_D - 1) + wG - 1 && ZG.push(wG);
      return ZG
    }
    const gU = {
      firing: `${jU}colSlotFiring`,
      ready: `${jU}colSlotReady`,
      blocked: `${jU}colSlotBlocked`,
      empty: `${jU}colSlotEmpty`,
      closed: `${jU}colSlotClosed`
    };

    function eU(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const LG = yS(GG),
        yG = yS(bG),
        kG = yS(ZG),
        UG = kG.filter(Boolean).length,
        YG = LG.filter(Boolean).length,
        VG = [0, 1, 2, 3].map((GG => yG[GG] ? LG[GG] ? kG[GG] ? wG ? "firing" : "ready" : "blocked" : (GG => nU(SG, GG).length > 0)(GG) ? "blocked" : "empty" : "closed")),
        pG = VG.indexOf("blocked"),
        fG = pG < 0 && YG > 0 ? VG.indexOf("empty") : -1;
      return VG.map(((GG, bG) => {
        const ZG = bG === pG ? {
          key: `${jU}colSlotClear`
        } : bG === fG ? {
          key: `${jU}colSlotAdd`,
          params: {
            time: AU(Math.min(4, UG + 1))
          }
        } : null;
        return {
          dir: bG,
          tone: GG,
          title: {
            key: "blocked" !== GG || LG[bG] ? gU[GG] : `${jU}colSlotGap`,
            keys: {
              dir: PU[bG]
            }
          },
          hint: ZG
        }
      }))
    }

    function RU(GG) {
      var bG;
      return "noPower" === GG.baf2ColState && GG.baf2ColRxState ? rU({
        baf2RxState: GG.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (bG = GG.baf2ColRxHeat) && void 0 !== bG ? bG : 0
      }) : null
    }

    function TU(GG) {
      const bG = yS(GG.baf2ColSpots).filter(Boolean).length,
        ZG = yS(GG.baf2ColLive);
      let wG = 0,
        SG = 0;
      return yS(GG.baf2ColLasers).forEach(((GG, bG) => {
        GG && (wG++, SG += ZG[bG] ? 0 : 1)
      })), SG > 0 ? {
        key: `${jU}colSubSome`,
        params: {
          blocked: String(SG),
          lasers: String(wG)
        }
      } : bG < 4 ? {
        key: `${jU}colSubSpots`,
        params: {
          lasers: String(wG),
          spots: String(bG)
        }
      } : {
        key: `${jU}colSub`,
        params: {
          lasers: String(wG)
        }
      }
    }

    function HU(GG) {
      const bG = RU(GG);
      if ("idle" === GG.baf2ColRxState && bG) return {
        key: `${jU}colState_noPowerIdle`
      };
      if (bG) return {
        key: `${jU}colState_noPowerReactor`,
        keys: {
          state: bG.label
        }
      };
      if ("noInput" !== GG.baf2ColState) return {
        key: `${jU}colState_${GG.baf2ColState}`
      };
      const ZG = String(Math.max(0, yw.NOVA_SA - GG.baf2ColSa)),
        wG = String(Math.max(0, yw.NOVA_GD - GG.baf2ColGd));
      return "0" !== ZG && "0" !== wG ? {
        key: `${jU}colState_noInput`,
        params: {
          sa: ZG,
          gd: wG
        }
      } : "0" !== ZG ? {
        key: `${jU}colState_noStarAlloy`,
        params: {
          sa: ZG
        }
      } : "0" !== wG ? {
        key: `${jU}colState_noGlowDust`,
        params: {
          gd: wG
        }
      } : {
        key: `${jU}colState_running`
      }
    }

    function tU(GG) {
      return GG.baf2ColP < 0 ? `${jU}colNext` : function(GG) {
        const bG = GG.baf2ColState;
        return GG.baf2ColP >= 0 && ("blocked" === bG || "noLasers" === bG || "noPower" === bG)
      }(GG) ? `${jU}colStalled` : null === DU(GG) ? `${jU}colMaking` : `${jU}colNovaIn`
    }

    function DU(GG) {
      if (GG.baf2ColP < 0 || GG.baf2ColWant <= 0) return null;
      const bG = GG.baf2ColFocusPerS * Math.min(1, GG.baf2ColDraw / GG.baf2ColWant);
      return bG > 0 ? Math.max(0, yw.NOVA_FOCUS - GG.baf2ColP) / bG : null
    }

    function NU(GG, bG) {
      const ZG = [];
      for (let wG = 1; wG <= 3; wG++) {
        const SG = [GG[0], GG[1] - wG, GG[2]];
        if (!bG(SG)) return ZG;
        ZG.push(SG)
      }
      return []
    }

    function OU(GG, bG) {
      const ZG = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let wG = 0; wG < 4; wG++) {
        const SG = wG,
          LG = dw(GG.focus, SG, yw.LASER_D);
        if (GG.lasers[wG] || !GG.open[wG] || !bG(LG)) continue;
        const yG = [];
        for (let ZG = 1; ZG < yw.LASER_D; ZG++) {
          const wG = dw(GG.focus, SG, ZG);
          bG(wG) || yG.push(wG)
        }
        ZG.supports.push(...NU(LG, bG)), 0 === yG.length ? ZG.free.push(LG) : (ZG.blocked.push(LG), ZG.gaps.push(...yG))
      }
      return ZG
    }
    const xU = yw.LASER_D - .25,
      BU = 4,
      GY = 2,
      bY = 16;
    const ZY = {
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
        blendMode: Pk.c.Standard,
        soft: !0
      },
      wY = {
        green: ZY,
        pink: {
          ...ZY,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function SY(GG, bG) {
      const ZG = {
        ...bG.params
      };
      for (const [SG, LG] of Object.entries(null !== (wG = bG.keys) && void 0 !== wG ? wG : {})) {
        var wG;
        ZG[SG] = GG(LG)
      }
      return ZG
    }
    const LY = "buildAFactory2Game:",
      yY = 2 * yw.LASER_D + 1,
      kY = yw.LASER_D;

    function UY(GG) {
      return GG(`${LY}colFocusTip`, {
        need: sU(yw.NOVA_FOCUS)
      })
    }

    function YY(GG, bG) {
      return GG(bG.key, SY(GG, bG))
    }

    function VY(GG) {
      const bG = GG.getStatus();
      return {
        status: bG,
        entry: bG ? GG.entryAtRoot(bG.baf2ColAt) : void 0
      }
    }

    function pY(GG, bG) {
      return {
        left: 100 * (kY + GG) / yY + "%",
        top: 100 * (kY + bG) / yY + "%"
      }
    }

    function fY(GG) {
      let {
        status: bG,
        entry: ZG
      } = GG;
      const wG = yS(bG.baf2ColLasers),
        SG = yS(bG.baf2ColSpots),
        LG = yS(bG.baf2ColLive),
        yG = !0 === (null === ZG || void 0 === ZG ? void 0 : ZG.on),
        kG = yw.LASER_D,
        UG = [];
      for (let QG = 0; QG < 4; QG++) {
        const [GG, , bG] = hw[QG];
        if (LG[QG]) {
          const ZG = 100 * (kG - 1) / yY,
            wG = GG + bG > 0 ? 100 * (kY + 1) / yY : 100 * (kY - (kG - 1)) / yY,
            SG = 100 * (kY + .35) / yY,
            LG = 30 / yY,
            YG = 0 !== GG ? {
              left: `${wG}%`,
              width: `${ZG}%`,
              top: `${SG}%`,
              height: `${LG}%`
            } : {
              top: `${wG}%`,
              height: `${ZG}%`,
              left: `${SG}%`,
              width: `${LG}%`
            };
          UG.push((0, CL.jsx)("i", {
            className: uS()("Baf2ColDiagramBeam", {
              Off: !yG
            }),
            style: YG
          }, `beam${QG}`))
        }
        const ZG = wG[QG] ? "Baf2ColDiagramLaser" : SG[QG] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        UG.push((0, CL.jsx)("i", {
          className: ZG,
          style: pY(GG * kG, bG * kG)
        }, `spot${QG}`))
      }
      for (let QG = 0; QG < 4; QG++) {
        if (wG[QG] || !SG[QG]) continue;
        const [GG, , ZG] = hw[QG];
        for (const wG of nU(null !== (YG = bG.baf2ColGaps) && void 0 !== YG ? YG : 0, QG)) {
          var YG;
          UG.push((0, CL.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: pY(GG * wG, ZG * wG)
          }, `gap${QG},${wG}`))
        }
      }
      for (const [QG, , KG] of null !== (VG = null === ZG || void 0 === ZG ? void 0 : ZG.blockers) && void 0 !== VG ? VG : []) {
        var VG, pG, fG;
        const GG = QG - (null !== (pG = null === ZG || void 0 === ZG ? void 0 : ZG.focus[0]) && void 0 !== pG ? pG : 0),
          bG = KG - (null !== (fG = null === ZG || void 0 === ZG ? void 0 : ZG.focus[2]) && void 0 !== fG ? fG : 0);
        UG.push((0, CL.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: pY(GG, bG)
        }, `block${GG},${bG}`))
      }
      return (0, CL.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [UG, (0, CL.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function QY(GG) {
      let {
        status: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)(), wG = yS(bG.baf2ColLive).filter(Boolean).length;
      return (0, CL.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, CL.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: UY(ZG),
          children: ZG(`${LY}colLadder`)
        }), (0, CL.jsx)("ul", {
          children: [1, 2, 3, 4].map((GG => (0, CL.jsx)("li", {
            className: uS()({
              On: GG === wG
            }),
            children: ZG(`${LY}colLadderChip`, {
              lasers: String(GG),
              time: AU(GG)
            })
          }, GG)))
        })]
      })
    }

    function KY(GG) {
      let {
        item: bG,
        Ik: ZG,
        need: wG,
        cap: SG
      } = GG;
      const {
        t: LG
      } = (0, mS.w)(), yG = Math.min(ZG, wG);
      return (0, CL.jsxs)("li", {
        className: uS()("Baf2ColTile", {
          Short: ZG < wG
        }),
        children: [(0, CL.jsx)(hY, {
          item: bG
        }), (0, CL.jsx)("b", {
          className: "Baf2ColTileValue",
          children: LG(`${LY}colOutOf`, {
            amount: String(yG),
            cap: String(wG)
          })
        }), (0, CL.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, CL.jsx)("i", {
            style: {
              width: 100 * yG / wG + "%"
            }
          })
        }), ZG > wG && (0, CL.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: LG(`${LY}colIntakeHeld`, {
            amount: String(ZG),
            cap: String(SG)
          })
        })]
      })
    }

    function hY(GG) {
      let {
        item: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)();
      return (0, CL.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, CL.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, CL.jsx)(FS.b, {
            itemName: bG,
            amount: 0
          })
        }), (0, CL.jsx)("span", {
          className: "Baf2ColTileName",
          children: SL(ZG, bG)
        })]
      })
    }

    function dY(GG) {
      switch (GG.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function JY(GG) {
      var bG, ZG, SG;
      let {
        store: LG,
        close: yG
      } = GG;
      const {
        t: kG
      } = (0, mS.w)(), UG = ny(), {
        status: YG,
        entry: VG
      } = function(GG) {
        const [bG, ZG] = (0, wG.useState)((() => VY(GG)));
        return (0, wG.useEffect)((() => (ZG(VY(GG)), GG.subscribe((() => {
          ZG(VY(GG))
        })))), [GG]), bG
      }(LG), [pG, fG] = (0, wG.useState)(null), QG = null === YG || void 0 === YG ? void 0 : YG.baf2ColHold;
      (0, wG.useEffect)((() => {
        fG(null)
      }), [QG]);
      const KG = (0, wG.useRef)({
          p: -1,
          n: 0
        }),
        hG = null !== (bG = null === YG || void 0 === YG ? void 0 : YG.baf2ColP) && void 0 !== bG ? bG : -1;
      hG < KG.current.p && KG.current.n++, KG.current.p = hG;
      const dG = (0, wG.useRef)(null),
        [JG] = (0, wG.useState)((() => {
          return (GG = LG.heldAtOpen()) === Yw || GG === Vw ? {
            key: `${jU}colBeltItIn`,
            item: GG
          } : null;
          var GG
        }));
      if (!YG) return null;
      const rG = YG.baf2ColMember,
        zG = YG.baf2ColP >= 0,
        EG = function(GG, bG) {
          if (GG.baf2ColP >= 0 && GG.baf2ColDraw > 0) {
            const bG = GG.baf2ColWant > 0 ? Math.min(1, GG.baf2ColDraw / GG.baf2ColWant) : 0;
            return {
              focus: GG.baf2ColFocusPerS * bG,
              draw: GG.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === GG.baf2ColState && bG && bG.draw > 0 ? {
            ...bG,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(YG, dG.current);
      dG.current = EG.draw > 0 ? EG : null;
      const oG = "slowed" === YG.baf2ColState || "noPower" === YG.baf2ColState,
        XG = DU(YG),
        uG = null !== pG && void 0 !== pG ? pG : YG.baf2ColHold,
        iG = function(GG) {
          var bG, ZG;
          return "idle" === GG.baf2ColRxState ? null : null !== (bG = null === (ZG = RU(GG)) || void 0 === ZG ? void 0 : ZG.fix) && void 0 !== bG ? bG : null
        }(YG),
        CG = null === iG && null === JG ? function(GG) {
          var bG;
          const ZG = GG.baf2ColSentTo;
          if (!ZG) return null;
          const wG = null !== (bG = GG.baf2ColSentHeld) && void 0 !== bG ? bG : null;
          return {
            key: null === wG ? `${jU}colNovaSentToMachine` : `${jU}colNovaSentTo`,
            target: ZG,
            Ik: wG
          }
        }(YG) : null,
        WG = zG ? kG(`${LY}colFocusOf`, {
          focus: sU(YG.baf2ColP),
          need: sU(yw.NOVA_FOCUS)
        }) : null;
      return (0, CL.jsx)(oy.b, {
        close: yG,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, CL.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, CL.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CL.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, CL.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, CL.jsx)(FS.b, {
                  itemName: kw,
                  amount: 0
                })
              }), (0, CL.jsxs)("div", {
                children: [(0, CL.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: SL(kG, kw)
                }), (0, CL.jsx)("p", {
                  children: YY(kG, TU(YG))
                })]
              })]
            }), (0, CL.jsx)(Xy.j, {
              onClick: yG
            })]
          }), (0, CL.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, CL.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, CL.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, CL.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: kG(tU(YG), {
                    time: null === XG ? "" : oL(kG, XG)
                  })
                }), (0, CL.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, CL.jsx)("i", {
                    style: {
                      width: (zG ? 100 * YG.baf2ColP / yw.NOVA_FOCUS : 0) + "%"
                    }
                  }, KG.current.n)
                }), (0, CL.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, CL.jsxs)("span", {
                    title: UY(kG),
                    children: [(0, CL.jsx)("b", {
                      children: sU(EG.focus)
                    }), " ", kG(`${LY}colFocusPerS`)]
                  }), (0, CL.jsxs)("span", {
                    className: uS()("Baf2ColDraw", {
                      Short: oG
                    }),
                    children: [(0, CL.jsx)(IS.c, {
                      name: "bolt"
                    }), oG ? kG(`${LY}colDrawOf`, {
                      draw: sU(YG.baf2ColDraw),
                      want: sU(YG.baf2ColWant)
                    }) : kG(`${LY}colPowerPerS`, {
                      rate: sU(EG.draw)
                    })]
                  }), null !== WG && (0, CL.jsx)("span", {
                    className: "Soft",
                    children: WG
                  })]
                })]
              }), (0, CL.jsx)("p", {
                className: uS()("Baf2ColState", dY(YG)),
                children: YY(kG, HU(YG))
              }), null !== iG && (0, CL.jsx)("p", {
                className: "Baf2ColStateFix",
                children: kG(iG)
              }), null === iG && null !== JG && (0, CL.jsx)("p", {
                className: "Baf2ColStateFix",
                children: kG(JG.key, {
                  item: SL(kG, JG.item)
                })
              }), CG && (0, CL.jsx)("p", {
                className: "Baf2ColStateFix",
                children: kG(CG.key, {
                  target: SL(kG, CG.target),
                  amount: String(null !== (ZG = CG.Ik) && void 0 !== ZG ? ZG : 0)
                })
              }), (0, CL.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, CL.jsx)(KY, {
                  item: Yw,
                  Ik: YG.baf2ColSa,
                  need: yw.NOVA_SA,
                  cap: yw.SA_CAP
                }), (0, CL.jsx)(KY, {
                  item: Vw,
                  Ik: YG.baf2ColGd,
                  need: yw.NOVA_GD,
                  cap: yw.GD_CAP
                }), (0, CL.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, CL.jsx)(hY, {
                    item: "Nova Matter"
                  }), (0, CL.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: kG(`${LY}colNovaHeld`, {
                      amount: String(YG.baf2ColOut),
                      cap: String(yw.OUT_CAP)
                    })
                  }), rG && (0, CL.jsx)(Xy.k, {
                    className: "Baf2ColTake",
                    disabled: 0 === YG.baf2ColOut,
                    onClick: () => {
                      UG.send(MU(YG, "take"))
                    },
                    children: kG(`${LY}colTake`)
                  })]
                })]
              }), rG && (0, CL.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": uG,
                className: uS()("Baf2ColHold", {
                  On: uG
                }),
                onClick: GG => {
                  GG.detail > 0 && GG.currentTarget.blur(), fG(!uG), UG.send(MU(YG, "hold " + (uG ? 0 : 1)))
                },
                children: [(0, CL.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, CL.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, CL.jsx)("b", {
                    children: kG(`${LY}colHold`)
                  }), (0, CL.jsx)("span", {
                    children: kG(`${LY}colHoldNote`)
                  })]
                })]
              })]
            }), (0, CL.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, CL.jsx)(fY, {
                status: YG,
                entry: VG
              }), (0, CL.jsx)("ul", {
                className: "Baf2ColSlots",
                children: eU(YG.baf2ColLasers, YG.baf2ColSpots, YG.baf2ColLive, EG.beamsOn, null !== (SG = YG.baf2ColGaps) && void 0 !== SG ? SG : 0).map((GG => (0, CL.jsxs)("li", {
                  className: GG.tone,
                  children: [(0, CL.jsx)("b", {
                    children: YY(kG, GG.title)
                  }), null !== GG.hint && (0, CL.jsx)("span", {
                    children: YY(kG, GG.hint)
                  })]
                }, GG.dir)))
              }), (0, CL.jsx)(QY, {
                status: YG
              })]
            })]
          })]
        })
      })
    }
    const rY = "buildAFactory2Game:",
      zY = 36e5,
      EY = 864e5;

    function oY(GG, bG, ZG) {
      return Math.max(0, Math.ceil((GG + bG - Math.max(ZG, GG)) / 1e3))
    }

    function XY(GG) {
      return GG.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function uY(GG) {
      return "Homestead" === GG
    }

    function iY(GG) {
      return function(GG) {
        let bG = 0;
        for (const ZG of GG) {
          const GG = /^Island ([1-9]\d{0,5})$/.exec(ZG);
          GG && (bG = Math.max(bG, Number(GG[1])))
        }
        return `Island ${bG+1}`
      }(GG.map((GG => GG.baf2IslandName)))
    }

    function CY(GG, bG) {
      return function(GG) {
        return `${rY}islandsBlocked${GG[0].toUpperCase()}${GG.slice(1)}`
      }("degraded" === GG && 0 === bG ? "stuck" : GG)
    }

    function WY(GG) {
      return GG.filter((GG => {
        var bG;
        return !GG.baf2IslandActive && void 0 === GG.baf2IslandUnreadable && void 0 === (null === (bG = GG.baf2IslandCoop) || void 0 === bG ? void 0 : bG.baf2CoopState)
      })).length
    }

    function mY(GG) {
      return "coopMoving" === GG || "coopUnreachable" === GG
    }

    function IY(GG, bG) {
      const ZG = bG > 0;
      return {
        change: null === GG && !ZG,
        switch: (null === GG || "degraded" === GG || mY(GG)) && !ZG,
        rename: "loading" !== GG && "degraded" !== GG && "stuck" !== GG
      }
    }

    function FY(GG, bG) {
      return void 0 === GG || "corrupt" === GG && bG
    }
    const vY = ly;

    function aY(GG, bG, ZG) {
      if (null !== GG && void 0 !== GG && GG.untilGone) {
        var wG;
        return !("dismiss" === GG.untilGone && void 0 === (null === (wG = bG.baf2IslandCoop) || void 0 === wG ? void 0 : wG.baf2CoopState)) && ZG - GG.atMs < 32500
      }
      return void 0 !== GG && ZG - GG.atMs < vY && bG.baf2IslandName === GG.from
    }
    const cY = ly;

    function lY(GG) {
      return "core" === (null === GG || void 0 === GG ? void 0 : GG.kind) ? GG.core : "islands" === (null === GG || void 0 === GG ? void 0 : GG.kind) ? GG.backToCore : void 0
    }

    function jY(GG) {
      return `\0${GG}\0`
    }

    function PY(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const wG = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const LG of Object.keys(ZG)) wG[LG] = jY(LG);
      let SG = Object.keys(wG).length > 0 ? GG(bG, wG) : GG(bG);
      for (const [LG, yG] of Object.entries(ZG)) SG = SG.split(jY(LG)).join(yG);
      return SG
    }

    function MY(GG, bG) {
      return GG ? bG ? "enabled" : "disabled" : "hidden"
    }
    const AY = {
      removed: `${rY}islandsCoopRemoved`,
      deleted: `${rY}islandsCoopDeleted`,
      notReady: `${rY}islandsCoopNotReady`,
      gone: `${rY}islandsCoopGone`
    };

    function sY(GG) {
      var bG;
      return "member" !== (null === (bG = GG.baf2IslandCoop) || void 0 === bG ? void 0 : bG.baf2CoopRole) && "newer" !== GG.baf2IslandUnreadable
    }

    function qY(GG, bG, ZG, wG, SG, LG) {
      const yG = GG.baf2IslandActive,
        kG = GG.baf2IslandUnreadable,
        UG = GG.baf2IslandCoop,
        YG = function(GG, bG, ZG) {
          return {
            switch: GG.switch && void 0 === bG,
            delete: GG.change && FY(bG, ZG)
          }
        }(bG, kG, wG),
        VG = yG && void 0 !== UG && void 0 === UG.baf2CoopState && "coopUnreachable" === LG,
        pG = {
          switch: MY((!yG || VG) && void 0 === kG, VG || YG.switch),
          switchLabel: VG ? "tryAgain" : "switch",
          rename: MY(!0, bG.rename),
          delete: MY(!yG, YG.delete),
          deleteWaits: !yG && FY(kG, wG),
          people: MY(void 0 !== GG.baf2IslandInvitable || SG && yG && void 0 === kG && void 0 === UG, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        fG = !yG && YG.delete;
      if (void 0 === UG) return ZG ? {
        ...pG,
        delete: MY(!yG, !1),
        deleteWaits: !1,
        note: fG ? {
          key: `${rY}islandsCoopKeepOwn`
        } : null
      } : pG;
      const QG = UG.baf2CoopState,
        KG = UG.baf2CoopMembers.length > 1,
        hG = {
          ...pG,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== QG && "member" === UG.baf2CoopRole) return {
        ...hG,
        dismiss: MY(!0, bG.rename),
        note: {
          key: AY[QG],
          names: {
            owner: UG.baf2CoopOwner
          }
        }
      };
      if (void 0 !== QG) {
        let GG = {
          key: `${rY}islandsCoopOwnLost`
        };
        return fG && KG ? GG = {
          key: `${rY}islandsCoopDeleteMembers`
        } : fG && ZG && (GG = {
          key: `${rY}islandsCoopKeepOwn`
        }), {
          ...hG,
          delete: MY(!yG, YG.delete && !KG && !ZG),
          deleteWaits: pG.deleteWaits && !KG && !ZG,
          note: GG
        }
      }
      if ("member" === UG.baf2CoopRole) return {
        ...pG,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: MY(!0, yG ? bG.switch : bG.rename)
      };
      const dG = UG.baf2CoopManageHere;
      let JG = null;
      var rG;
      dG || yG ? fG && KG ? JG = {
        key: `${rY}islandsCoopDeleteMembers`
      } : fG && ZG && (JG = {
        key: `${rY}islandsCoopKeepOwn`
      }) : JG = {
        key: null !== (rG = UG.baf2CoopLeft) && void 0 !== rG && rG.length ? `${rY}islandsCoopManageThereClaim` : `${rY}islandsCoopManageThere`
      };
      return {
        ...pG,
        rename: MY(!0, bG.rename && dG),
        delete: MY(!yG, YG.delete && !KG && !ZG),
        deleteWaits: pG.deleteWaits && !KG && !ZG,
        people: "enabled",
        peopleLabel: "players",
        unshare: MY(dG && yG && !KG, bG.change),
        remove: dG,
        note: JG
      }
    }

    function nY(GG) {
      var bG;
      const ZG = GG.baf2IslandCoop;
      if ("owner" !== (null === ZG || void 0 === ZG ? void 0 : ZG.baf2CoopRole) || void 0 !== ZG.baf2CoopState || null === (bG = ZG.baf2CoopLeft) || void 0 === bG || !bG.length) return null;
      const wG = GG.baf2IslandActive && ZG.baf2CoopManageHere;
      return {
        left: ZG.baf2CoopLeft,
        claim: wG,
        goThere: !wG && ZG.baf2CoopManageHere
      }
    }

    function gY(GG) {
      return GG.baf2CoopMembers.length >= GG.baf2CoopMax
    }

    function eY(GG, bG, ZG) {
      return void 0 !== GG && bG < GG.answer && ZG - GG.atMs < vY
    }
    const RY = "buildAFactory2Game:";

    function TY(GG, bG) {
      return {
        onKeyDown: ZG => {
          ZG.stopPropagation(), ZG.nativeEvent.isComposing || 229 === ZG.nativeEvent.keyCode || ("Enter" === ZG.key ? (ZG.preventDefault(), GG()) : "Escape" === ZG.key && (ZG.preventDefault(), bG()))
        }
      }
    }

    function HY(GG) {
      return {
        onKeyDown: bG => {
          "Escape" !== bG.key || bG.nativeEvent.isComposing || (bG.preventDefault(), bG.stopPropagation(), GG())
        }
      }
    }

    function tY(GG) {
      GG.currentTarget.select()
    }

    function DY(GG, bG) {
      (0, wG.useEffect)((() => {
        var ZG;
        GG && (null === (ZG = bG.current) || void 0 === ZG || ZG.scrollIntoView({
          block: "nearest"
        }))
      }), [GG, bG])
    }

    function NY(GG) {
      const [bG, ZG] = (0, wG.useState)(null);
      return (0, wG.useEffect)((() => {
        const bG = document.querySelector(".UiRequests"),
          wG = GG.current;
        if (!bG || !wG || "undefined" === typeof ResizeObserver) return;
        const SG = () => {
          const GG = bG.getBoundingClientRect(),
            SG = wG.getBoundingClientRect(),
            LG = wG.parentElement,
            yG = LG && parseFloat(getComputedStyle(LG).paddingTop) || 0,
            kG = function(GG, bG, ZG, wG) {
              if (!GG || GG.height <= 0 || GG.right <= bG.left || GG.left >= bG.right) return null;
              const SG = Math.max(wG, GG.bottom + 8);
              return {
                marginTop: Math.round(SG - wG),
                maxHeight: Math.max(0, Math.floor(ZG - SG - wG))
              }
            }(GG, SG, window.innerHeight, yG);
          ZG((GG => (null === GG || void 0 === GG ? void 0 : GG.marginTop) === (null === kG || void 0 === kG ? void 0 : kG.marginTop) && (null === GG || void 0 === GG ? void 0 : GG.maxHeight) === (null === kG || void 0 === kG ? void 0 : kG.maxHeight) ? GG : kG))
        };
        SG();
        const LG = new ResizeObserver(SG);
        return LG.observe(bG), window.addEventListener("resize", SG), () => {
          LG.disconnect(), window.removeEventListener("resize", SG)
        }
      }), [GG]), bG
    }

    function OY() {
      (0, wG.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function xY(GG) {
      (0, wG.useEffect)((() => {
        var bG;
        null === (bG = GG.current) || void 0 === bG || bG.focus()
      }), [GG])
    }

    function BY(GG) {
      const [bG, ZG] = (0, wG.useState)(Date.now);
      return (0, wG.useEffect)((() => {
        const bG = window.setInterval((() => {
          ZG(Date.now())
        }), GG);
        return () => {
          window.clearInterval(bG)
        }
      }), [GG]), bG
    }

    function GV(GG) {
      let {
        tier: bG,
        t: ZG
      } = GG;
      const {
        kind: wG,
        short: SG
      } = dG(bG), LG = QG(bG, KG), yG = ZG(`${RY}${LG.key}`, {
        ...LG.params,
        name: ZG(`${RY}${JG(bG).nameKey}`)
      });
      return (0, CL.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, CL.jsx)("span", {
          className: uS()("Baf2IslandTierPip", {
            Stage: "tier" !== wG
          }),
          "aria-hidden": "true",
          children: SG
        }), yG]
      })
    }

    function bV(GG) {
      let {
        note: bG,
        className: ZG,
        t: wG
      } = GG;
      return (0, CL.jsx)("p", {
        className: uS()("Baf2IslandNote", ZG),
        children: PY(wG, bG.key, bG.names, bG.params)
      })
    }
    const ZV = "buildAFactory2Game:";

    function wV(GG) {
      let {
        message: bG,
        arrivedAtMs: ZG,
        close: SG,
        leave: LG
      } = GG;
      const yG = ny(),
        {
          t: kG
        } = (0, mS.w)(),
        UG = BY(1e3),
        YG = (0, wG.useRef)(null);
      OY(), (0, wG.useEffect)((() => {
        var GG;
        null === (GG = YG.current) || void 0 === GG || GG.focus()
      }), []);
      const VG = oY(ZG, bG.baf2TransferInMs, UG),
        pG = ZG + bG.baf2TransferInMs - 1e3,
        [fG, QG] = (0, wG.useState)(null);
      (0, wG.useEffect)((() => {
        const GG = window.setTimeout((() => {
          QG(pG)
        }), Math.max(0, pG - Date.now()));
        return () => {
          window.clearTimeout(GG)
        }
      }), [pG]);
      const KG = fG === pG || UG >= pG,
        hG = bG.baf2TransferIsland,
        dG = bG.baf2TransferOwner;
      return (0, CL.jsx)(oy.b, {
        close: SG,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, CL.jsxs)("section", {
          ref: YG,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, CL.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CL.jsxs)("div", {
              children: [(0, CL.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === dG ? PY(kG, `${ZV}islandsTransferOwn`, {
                  island: hG
                }) : PY(kG, `${ZV}islandsTransfer`, {
                  island: hG,
                  owner: dG
                })
              }), (0, CL.jsx)("p", {
                children: KG ? kG(`${ZV}islandsTransferNow`) : kG(`${ZV}islandsTransferIn`, {
                  time: oL(kG, VG)
                })
              })]
            }), (0, CL.jsx)(Xy.j, {
              ariaLabel: kG(`${ZV}islandsClose`),
              onClick: SG
            })]
          }), !KG && (0, CL.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, CL.jsx)("p", {
              className: "Baf2TransferNote",
              children: kG(`${ZV}islandsTransferNote`)
            }), (0, CL.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, CL.jsx)(Xy.d, {
                onClick: () => {
                  yG.send("baf2coopstay"), LG()
                },
                children: kG(`${ZV}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var SV = ZG(1389),
      LV = ZG(1101),
      yV = ZG.n(LV);
    const kV = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const UV = "buildAFactory2Game:",
      YV = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function VV(GG, bG, ZG) {
      return void 0 === bG ? ZG : "string" === typeof bG ? bG : Array.isArray(bG) ? bG.map((bG => "string" === typeof bG ? bG : "translationKey" in bG ? GG(bG.translationKey) : "")).join("") : GG(bG.translationKey)
    }

    function pV(GG) {
      const bG = {};
      for (const [ZG, wG] of Object.entries(null !== GG && void 0 !== GG ? GG : {})) bG[ZG] = wG < 0 ? EL(wG) : wG.toLocaleString("en-US");
      return bG
    }

    function fV(GG, bG) {
      const ZG = bG ? "touch" : "mouse";
      return {
        use: GG(`${UV}lookUse_${ZG}`),
        Use: GG(`${UV}lookUseStart_${ZG}`)
      }
    }
    const QV = (0, wG.memo)((function(GG) {
      let {
        item: bG
      } = GG;
      return (0, CL.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, CL.jsx)(FS.b, {
          itemName: bG,
          amount: 0
        })
      })
    }));

    function KV(GG) {
      let {
        label: bG,
        percent: ZG,
        progress: wG
      } = GG;
      return (0, CL.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, CL.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${bG}: ${wG}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": ZG,
          children: (0, CL.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${ZG}%`
            }
          })
        }), (0, CL.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: wG
        })]
      })
    }

    function hV(GG) {
      let {
        chips: bG
      } = GG;
      return (0, CL.jsx)("span", {
        className: "Baf2QuestChips",
        children: bG.map((GG => {
          let [bG, ZG, wG] = GG;
          const SG = ZG >= wG;
          return (0, CL.jsxs)("span", {
            className: uS()("Baf2QuestChip", {
              Met: SG
            }),
            children: [(0, CL.jsx)(QV, {
              item: bG
            }), (0, CL.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: SG ? `\u2713${wG}` : `${ZG}/${wG}`
            })]
          }, bG)
        }))
      })
    }

    function dV(GG, bG) {
      const {
        key: ZG,
        params: wG
      } = QG(bG, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return GG(`${UV}${ZG}`, {
        ...wG,
        name: GG(`${UV}${JG(bG).nameKey}`)
      })
    }

    function JV(GG) {
      let {
        core: bG,
        t: ZG
      } = GG;
      const [wG, SG] = bG, LG = SG > 0 ? Math.floor(100 * wG / SG) : 100;
      return (0, CL.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": ZG(`${UV}questCoreLabel`, {
          have: String(wG),
          need: String(SG)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": LG,
        children: [(0, CL.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: ZG(`${UV}questCore`, {
            percent: String(LG)
          })
        }), (0, CL.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, CL.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${LG}%`
            }
          })
        })]
      })
    }

    function rV(GG) {
      let {
        rows: bG,
        t: ZG
      } = GG;
      const wG = bG.filter((GG => GG.done)).length;
      return (0, CL.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": ZG(`${UV}questStepsProgress`, {
          done: String(wG),
          total: String(bG.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": bG.length,
        "aria-valuenow": wG,
        children: bG.map((GG => (0, CL.jsx)("span", {
          className: uS()("Baf2QuestSegment", {
            Done: GG.done,
            Current: GG.current
          })
        }, GG.id)))
      })
    }
    const zV = (0, wG.memo)(oV, EV);

    function EV(GG, bG) {
      const ZG = ZG => GG.view.itemNames[ZG] === bG.view.itemNames[ZG];
      return GG.t === bG.t && GG.extra === bG.extra && (null === GG.row.item || ZG(GG.row.item)) && GG.row.madeFor.every(ZG) && GG.row.also.every(ZG) && yV()(GG.row, bG.row)
    }

    function oV(GG) {
      let {
        row: bG,
        view: ZG,
        t: wG,
        extra: SG
      } = GG;
      const {
        isTouchScreen: LG
      } = (0, ES.o)(["isTouchScreen"]), yG = bG.item ? function(GG, bG, ZG) {
        return 1 !== ZG && kV.has(GG) ? WS(bG) : null
      }(bG.key, bG.item, bG.total) : null, kG = yG ? wG(yG) : bG.item ? VV(wG, ZG.itemNames[bG.item], bG.item) : "", UG = bG.also.map((GG => VV(wG, ZG.itemNames[GG], GG))), YG = UG.join(", "), VG = function(GG, bG) {
        var ZG;
        return bG.length < 2 ? null !== (ZG = bG[0]) && void 0 !== ZG ? ZG : "" : GG(`${UV}listAnd`, {
          rest: bG.slice(0, -1).join(GG(`${UV}listComma`)),
          last: bG[bG.length - 1]
        })
      }(wG, [kG, ...UG]), pG = wG(`${UV}${bG.key}`, {
        ...fV(wG, LG),
        ...pV(bG.params),
        item: kG,
        also: YG,
        itemList: VG,
        total: String(bG.total)
      }), [fG, ...QG] = pG.split("\n"), KG = bG.total > 1 && !bG.done && !bG.away;
      return (0, CL.jsxs)("li", {
        className: uS()("Baf2QuestStep", {
          Done: bG.done,
          Current: bG.current,
          JustFinished: bG.justFinished,
          Away: bG.away
        }),
        children: [!bG.done && null !== bG.item && (0, CL.jsx)(QV, {
          item: bG.item
        }), (bG.done || null === bG.item) && (0, CL.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: bG.done ? "\u2713" : "\u25cb"
        }), (0, CL.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, CL.jsx)("strong", {
            children: fG
          }), QG.length > 0 && (0, CL.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: QG.join(" ")
          }), !bG.done && bG.madeFor.length > 0 && (0, CL.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: wG("buildAFactory2Game:questRowFor", {
              items: bG.madeFor.map((GG => VV(wG, ZG.itemNames[GG], GG))).join(" \u2192 ")
            })
          }), KG && (0, CL.jsx)(KV, {
            label: fG,
            percent: Math.round(100 * bG.amount / bG.total),
            progress: `${bG.amount.toLocaleString("en-US")}/${bG.total.toLocaleString("en-US")}`
          }), !bG.done && !bG.away && bG.chips && bG.chips.length > 0 && (0, CL.jsx)(hV, {
            chips: bG.chips
          }), SG]
        })]
      })
    }
    const XV = "buildAFactory2Game:",
      uV = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      iV = {
        on: `${XV}tutorialButtonOn`,
        hud: `${XV}tutorialButtonHud`,
        off: `${XV}tutorialButtonOff`
      },
      CV = {
        on: `${XV}tutorialPickedOn`,
        hud: `${XV}tutorialPickedHud`,
        off: `${XV}tutorialPickedOff`
      };
    class WV {
      constructor(GG, bG, ZG) {
        this.commands = GG, this.quests = bG, this.toasts = ZG
      }
      next() {
        const GG = function(GG) {
            return aG[(aG.indexOf(GG) + 1) % aG.length]
          }(this.quests.get().tutorial),
          bG = this.quests.setTutorial(GG);
        this.commands.send(`baf2tutorial ${GG} ${bG}`), this.toasts.show({
          baf2ToastText: [(0, lG.ue)({
            translationKey: CV[GG]
          }, lG.O.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function mV(GG, bG) {
      let [ZG, wG] = bG;
      return GG(`${UV}${ZG}`, pV(wG))
    }

    function IV(GG) {
      let [bG, ZG] = GG;
      return bG + JSON.stringify(ZG)
    }

    function FV(GG) {
      let {
        goal: bG,
        t: ZG
      } = GG;
      return bG ? (0, CL.jsx)("span", {
        className: "Baf2BookGoal",
        children: ZG(`${UV}${bG}`)
      }) : null
    }

    function vV(GG) {
      let {
        view: bG,
        t: ZG
      } = GG;
      if (!bG.name) return null;
      const wG = eS(bG.rows);
      return (0, CL.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, CL.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: ZG(`${UV}currentQuest`)
        }), (0, CL.jsx)("strong", {
          className: "Baf2BookTitle",
          children: mV(ZG, bG.name)
        }), (0, CL.jsx)(FV, {
          goal: bG.goal,
          t: ZG
        }), wG.length > 1 && (0, CL.jsx)(rV, {
          rows: wG,
          t: ZG
        }), (0, CL.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: bG.rows.map((GG => (0, CL.jsx)(zV, {
            row: GG,
            view: bG,
            t: ZG
          }, GG.id)))
        }), bG.reward && (0, CL.jsxs)("span", {
          className: "Baf2BookReward",
          children: [ZG(`${UV}questReward`), (0, CL.jsx)(QV, {
            item: bG.reward
          }), VV(ZG, bG.itemNames[bG.reward], bG.reward)]
        })]
      })
    }

    function aV(GG) {
      let {
        quest: bG,
        upcoming: ZG,
        t: wG
      } = GG;
      return (0, CL.jsxs)("li", {
        className: uS()("Baf2BookQuest", {
          Done: bG[3],
          Upcoming: ZG
        }),
        children: [(0, CL.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: bG[3] ? "\u2713" : "\u25cb"
        }), (0, CL.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, CL.jsx)("strong", {
            className: "Baf2BookTitle",
            children: mV(wG, bG)
          }), (0, CL.jsx)(FV, {
            goal: bG[2],
            t: wG
          })]
        })]
      })
    }

    function cV(GG) {
      let {
        done: bG,
        total: ZG,
        t: wG
      } = GG;
      const SG = ZG > 0 ? Math.round(100 * bG / ZG) : 0,
        LG = wG(`${UV}questBookChapterProgress`, {
          done: String(bG),
          total: String(ZG)
        });
      return (0, CL.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, CL.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": LG,
          "aria-valuemin": 0,
          "aria-valuemax": ZG,
          "aria-valuenow": bG,
          children: (0, CL.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${SG}%`
            }
          })
        }), (0, CL.jsx)("span", {
          className: "Baf2BookProgressText",
          children: LG
        })]
      })
    }

    function lV(GG) {
      let {
        view: bG,
        tier: ZG,
        quests: wG,
        t: SG
      } = GG;
      const LG = ZG === bG.tier,
        yG = (null !== wG && void 0 !== wG ? wG : []).filter((GG => !GG[4])),
        kG = (null !== wG && void 0 !== wG ? wG : []).filter((GG => GG[4])),
        UG = yG.filter((GG => GG[3])).length,
        YG = LG && bG.name ? IV(bG.name) : null,
        VG = yG.findIndex((GG => !GG[3] && IV(GG) === YG));
      return (0, CL.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, CL.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, CL.jsx)("h3", {
            children: dV(SG, ZG)
          }), yG.length > 0 && (0, CL.jsx)(cV, {
            done: UG,
            total: yG.length,
            t: SG
          }), LG && bG.core && (0, CL.jsx)(JV, {
            core: bG.core,
            t: SG
          })]
        }), (0, CL.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === wG && LG && (0, CL.jsx)(vV, {
            view: bG,
            t: SG
          }), yG.map(((GG, ZG) => ZG === VG ? (0, CL.jsx)(vV, {
            view: bG,
            t: SG
          }, IV(GG)) : (0, CL.jsx)(aV, {
            quest: GG,
            upcoming: !GG[3],
            t: SG
          }, IV(GG))))]
        }), LG && bG.side && (0, CL.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, CL.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: SG(`${UV}questSide`)
          }), (0, CL.jsx)("strong", {
            className: "Baf2BookTitle",
            children: mV(SG, bG.side.name)
          }), (0, CL.jsx)(FV, {
            goal: bG.side.goal,
            t: SG
          }), (0, CL.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, CL.jsx)(zV, {
              row: bG.side.row,
              view: bG,
              t: SG
            })
          })]
        }), kG.length > 0 && (0, CL.jsxs)(CL.Fragment, {
          children: [(0, CL.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: SG(`${UV}questBookSidesDone`)
          }), (0, CL.jsx)("ol", {
            className: "Baf2BookQuests",
            children: kG.map((GG => (0, CL.jsx)(aV, {
              quest: GG,
              upcoming: !1,
              t: SG
            }, IV(GG))))
          })]
        })]
      })
    }

    function jV(GG) {
      var bG, ZG, LG;
      let {
        store: yG,
        tutorial: kG,
        close: UG
      } = GG;
      const {
        t: YG
      } = (0, mS.w)(), pG = (0, SV.j)(PS, yG.get()), fG = null !== (bG = pG.tier) && void 0 !== bG ? bG : 1, [QG, KG] = (0, wG.useState)(null), JG = (null === QG || void 0 === QG ? void 0 : QG.at) === fG ? QG.tier : fG, rG = (0, wG.useRef)(null), zG = null !== pG.chapters;
      (0, wG.useEffect)((() => {
        var GG;
        rG.current && (rG.current.scrollTop = 0);
        const bG = null === (GG = rG.current) || void 0 === GG ? void 0 : GG.querySelector(".Baf2BookQuest.Current");
        if (rG.current && bG) {
          const GG = bG.getBoundingClientRect().bottom - rG.current.getBoundingClientRect().bottom;
          GG > 0 && (rG.current.scrollTop += Math.min(GG, bG.getBoundingClientRect().top - rG.current.getBoundingClientRect().top))
        }
      }), [JG, zG]);
      const EG = null === (ZG = pG.chapters) || void 0 === ZG ? void 0 : ZG.find((GG => {
        let [bG] = GG;
        return bG === JG
      }));
      return (0, CL.jsx)(oy.b, {
        close: UG,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, CL.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: YV,
          children: [(0, CL.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CL.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: YG(`${UV}questBookTitle`)
            }), (0, CL.jsx)(Xy.k, {
              className: "Baf2BookTutorialButton",
              disabled: !pG.tutorialKnown,
              ariaLabel: YG(iV[pG.tutorial]),
              title: YG(iV[pG.tutorial]),
              onClick: () => {
                kG.next()
              },
              children: (0, CL.jsx)(IS.c, {
                name: uV[pG.tutorial]
              })
            }), (0, CL.jsx)(Xy.j, {
              onClick: UG
            })]
          }), (0, CL.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": YG(`${UV}questBookChapters`),
            "data-pad-initial-area": !0,
            children: SG.slice(0, VG()).map(((GG, bG) => {
              const ZG = bG + 1,
                {
                  kind: wG,
                  short: SG
                } = dG(ZG),
                LG = hG(ZG, fG),
                yG = LG ? YG(`${UV}coreAtomicHidden`) : dV(YG, ZG);
              return (0, CL.jsx)("li", {
                children: (0, CL.jsx)("button", {
                  type: "button",
                  className: uS()({
                    Stage: "tier" !== wG,
                    Atomic: "atomic" === wG,
                    Current: ZG === fG,
                    Selected: ZG === JG
                  }),
                  disabled: ZG > fG,
                  "aria-pressed": ZG === JG,
                  "aria-label": yG,
                  title: LG ? void 0 : yG,
                  onClick: () => {
                    KG({
                      tier: ZG,
                      at: fG
                    })
                  },
                  children: LG ? "?" : SG
                })
              }, GG.nameKey)
            }))
          }), (0, CL.jsxs)("div", {
            ref: rG,
            className: "Baf2BookBody",
            children: [nS(pG) && JG === fG && (0, CL.jsx)("p", {
              className: "Baf2BookEmpty",
              children: YG(`${UV}questBookAllDone`)
            }), (0, CL.jsx)(lV, {
              view: pG,
              tier: JG,
              quests: null !== (LG = null === EG || void 0 === EG ? void 0 : EG[1]) && void 0 !== LG ? LG : null,
              t: YG
            })]
          })]
        })
      })
    }
    const PV = "buildAFactory2Game:";

    function MV(GG) {
      let {
        tiers: bG,
        from: ZG,
        tier: wG,
        shown: SG,
        Df: LG
      } = GG;
      const {
        t: yG
      } = (0, mS.w)(), kG = bG.map(((GG, bG) => {
        const kG = ZG + bG,
          {
            kind: UG,
            short: YG
          } = dG(kG),
          VG = hG(kG, wG);
        return (0, CL.jsx)("li", {
          children: (0, CL.jsx)("button", {
            type: "button",
            className: uS()({
              Stage: "tier" !== UG,
              Silhouette: VG,
              Reached: kG <= wG,
              Current: kG === wG,
              Next: kG === wG + 1,
              Selected: kG === SG
            }),
            disabled: VG,
            "aria-pressed": kG === SG,
            "aria-label": VG ? yG(`${PV}coreAtomicHidden`) : void 0,
            title: VG ? void 0 : yG(`${PV}${GG.nameKey}`),
            onClick: () => {
              LG(kG)
            },
            children: VG ? "?" : YG
          })
        }, GG.nameKey)
      }));
      return (0, CL.jsx)(CL.Fragment, {
        children: kG
      })
    }

    function AV(GG) {
      let {
        id: bG,
        label: ZG,
        tiers: wG,
        from: SG,
        ...LG
      } = GG;
      return (0, CL.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, CL.jsx)("span", {
          id: bG,
          className: "Baf2CoreLadderLabel",
          children: ZG
        }), (0, CL.jsx)("ol", {
          "aria-labelledby": bG,
          children: (0, CL.jsx)(MV, {
            ...LG,
            tiers: wG,
            from: SG
          })
        })]
      })
    }

    function sV(GG) {
      const {
        t: bG
      } = (0, mS.w)(), ZG = SG.findIndex((GG => void 0 !== GG.stage)), wG = SG.findIndex((GG => void 0 !== GG.reactorTier)), LG = ZG < 0 ? SG : SG.slice(0, ZG), yG = ZG < 0 ? [] : SG.slice(ZG, wG < 0 ? void 0 : wG), UG = wG < 0 || !kG() ? [] : SG.slice(wG);
      return (0, CL.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, CL.jsx)(AV, {
          ...GG,
          id: "baf2CoreTiersLabel",
          label: bG(`${PV}coreTiersLabel`),
          tiers: LG,
          from: 1
        }), yG.length > 0 && (0, CL.jsx)(AV, {
          ...GG,
          id: "baf2CoreStagesLabel",
          label: bG(`${PV}coreStagesLabel`),
          tiers: yG,
          from: ZG + 1
        }), UG.length > 0 && (0, CL.jsx)(AV, {
          ...GG,
          id: "baf2CoreAtomicLabel",
          label: bG(`${PV}coreAtomicLabel`),
          tiers: UG,
          from: wG + 1
        })]
      })
    }
    const qV = "buildAFactory2Game:";

    function nV(GG) {
      let {
        item: bG,
        itemNames: ZG,
        children: wG
      } = GG;
      return (0, CL.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, CL.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, CL.jsx)(FS.b, {
            itemName: bG,
            amount: 0
          })
        }), (0, CL.jsx)(vS.c, {
          text: ZG[bG]
        }), wG]
      })
    }

    function gV(GG) {
      const bG = new Map;
      for (const {
          block: wG
        }
        of GG.newDeposits) {
        var ZG;
        bG.set(wG, (null !== (ZG = bG.get(wG)) && void 0 !== ZG ? ZG : 0) + 1)
      }
      return [...bG]
    }

    function eV(GG) {
      let {
        value: bG,
        label: ZG,
        more: wG
      } = GG;
      return (0, CL.jsxs)("li", {
        children: [(0, CL.jsx)("strong", {
          children: bG
        }), (0, CL.jsx)("span", {
          children: ZG
        }), wG > 0 && (0, CL.jsxs)("em", {
          children: ["+", wG]
        })]
      })
    }

    function RV(GG) {
      let {
        items: bG,
        itemNames: ZG
      } = GG;
      const {
        t: SG
      } = (0, mS.w)(), [LG, yG] = (0, wG.useState)(null), kG = null !== LG && bG.includes(LG) ? LG : null;
      return (0, CL.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, CL.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: SG(`${qV}coreRewardUnlocks`)
        }), (0, CL.jsx)("ul", {
          children: bG.map((GG => (0, CL.jsx)("li", {
            children: (0, CL.jsx)("button", {
              type: "button",
              className: uS()("Baf2PanelIcon", {
                Picked: GG === kG
              }),
              title: SL(SG, GG),
              "aria-label": SL(SG, GG),
              "aria-pressed": GG === kG,
              onClick: () => {
                yG(GG === kG ? null : GG)
              },
              children: (0, CL.jsx)(FS.b, {
                itemName: GG,
                amount: 0
              })
            })
          }, GG)))
        }), (0, CL.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== kG && (0, CL.jsxs)(CL.Fragment, {
            children: [(0, CL.jsx)(vS.c, {
              text: ZG[kG]
            }), " \xb7 ", (0, CL.jsx)(vS.c, {
              text: ZG[FG(kG)]
            })]
          }), null === kG && SG(`${qV}coreRecipeTap`)]
        })]
      })
    }

    function TV(GG) {
      var bG, ZG;
      let {
        def: wG,
        tier: SG,
        itemNames: LG
      } = GG;
      const {
        t: yG
      } = (0, mS.w)(), kG = SG > 1 ? JG(SG - 1) : void 0, UG = Math.round(2 * wG.islandRadius), YG = kG ? Math.round(2 * kG.islandRadius) : UG, VG = SG >= 3 ? ow(SG) : null;
      return (0, CL.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, CL.jsxs)("ul", {
          className: uS()("Baf2CoreStats", {
            Four: null !== VG
          }),
          children: [(0, CL.jsx)(eV, {
            value: `${UG}\xd7${UG}`,
            label: yG(`${qV}coreStatIsland`),
            more: UG - YG
          }), (0, CL.jsx)(eV, {
            value: String(wG.machineAllowance),
            label: yG(`${qV}coreStatMachines`),
            more: wG.machineAllowance - (null !== (bG = null === kG || void 0 === kG ? void 0 : kG.machineAllowance) && void 0 !== bG ? bG : wG.machineAllowance)
          }), (0, CL.jsx)(eV, {
            value: String(wG.beltAllowance),
            label: yG(`${qV}coreStatBelts`),
            more: wG.beltAllowance - (null !== (ZG = null === kG || void 0 === kG ? void 0 : kG.beltAllowance) && void 0 !== ZG ? ZG : wG.beltAllowance)
          }), null !== VG && (0, CL.jsx)(eV, {
            value: String(VG),
            label: yG(`${qV}coreStatStorage`),
            more: VG - (kG ? ow(SG - 1) : VG)
          })]
        }), wG.reward && (0, CL.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, CL.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: yG(`${qV}coreRewardItem`)
          }), (0, CL.jsx)(nV, {
            item: wG.reward,
            itemNames: LG
          })]
        }), wG.newDeposits.length > 0 && (0, CL.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, CL.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: yG(wG.newDeposits.length > 1 ? `${qV}coreRewardDeposits` : `${qV}coreRewardDeposit`)
          }), gV(wG).map((GG => {
            let [bG, ZG] = GG;
            return (0, CL.jsx)(nV, {
              item: bG,
              itemNames: LG,
              children: ZG > 1 && ` \xd7${ZG}`
            }, bG)
          }))]
        }), wG.unlocks.length > 0 && (0, CL.jsx)(RV, {
          items: wG.unlocks,
          itemNames: LG
        }), (0, CL.jsx)(HV, {
          tier: SG
        })]
      })
    }

    function HV(GG) {
      let {
        tier: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)(), wG = dS[bG];
      if (!wG) return null;
      const SG = hS(bG, 0, 0).barrierMax !== hS(bG - 1, 0, 0).barrierMax;
      return (0, CL.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, CL.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, CL.jsx)(FS.b, {
            itemName: SG ? YS.Chestplate : US,
            amount: 0
          })
        }), ZG(`${qV}gearPerkLine`, {
          perk: ZG(`${qV}${wG}`)
        })]
      })
    }

    function tV(GG, bG) {
      return null === GG ? bG : GG.value
    }

    function DV(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === GG || ZG - GG.atMs >= wG ? null : SG(GG.value, bG) ? GG.armed ? null : GG : GG.armed ? GG : {
        ...GG,
        armed: !0
      }
    }

    function NV(GG, bG) {
      const ZG = bG.filter((bG => {
        var ZG;
        return !1 !== (null === (ZG = GG.get(bG)) || void 0 === ZG ? void 0 : ZG.value)
      }));
      for (const [wG, SG] of GG) SG.value && !bG.includes(wG) && ZG.push(wG);
      return ZG
    }

    function OV(GG, bG, ZG, SG) {
      const [LG, yG] = (0, wG.useState)((() => new Map)), kG = () => {
        yG((bG => function(GG, bG, ZG, wG) {
          var SG;
          let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            yG = null;
          for (const [kG, UG] of GG) {
            const SG = DV(UG, bG(kG), ZG, wG, LG);
            SG !== UG && (yG ??= new Map(GG), null === SG ? yG.delete(kG) : yG.set(kG, SG))
          }
          return null !== (SG = yG) && void 0 !== SG ? SG : GG
        }(bG, GG, Date.now(), ZG, SG)))
      };
      (0, wG.useEffect)((() => {
        kG()
      }), [bG, ZG]), (0, wG.useEffect)((() => {
        if (0 === LG.size) return;
        const GG = Math.min(...[...LG.values()].map((GG => GG.atMs))),
          bG = setTimeout(kG, Math.max(0, GG + ZG - Date.now()) + 1);
        return () => {
          clearTimeout(bG)
        }
      }), [LG, bG, ZG]);
      return [LG, (bG, ZG) => {
        yG((wG => {
          const LG = new Map(wG);
          return LG.set(bG, function(GG, bG, ZG) {
            return {
              value: GG,
              atMs: ZG,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(GG, bG)
            }
          }(ZG, GG(bG), Date.now(), SG)), LG
        }))
      }]
    }
    const xV = "buildAFactory2Game:";

    function BV(GG) {
      let {
        message: bG,
        itemNames: ZG
      } = GG;
      const SG = ny(),
        {
          t: LG
        } = (0, mS.w)(),
        [yG, kG] = (0, wG.useState)(!1),
        [UG, YG] = function(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ly;
          const [ZG, wG] = OV((bG => GG.includes(bG)), GG, bG, Object.is);
          return [NV(ZG, GG), wG]
        }(bG.baf2CoreBankPaused),
        VG = new Set(UG),
        pG = [...bG.baf2CoreBanked];
      for (const wG of VG) pG.some((GG => {
        let [bG] = GG;
        return bG === wG
      })) || pG.push([wG, 0]);
      return 0 === pG.length ? null : (0, CL.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, CL.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": yG,
          onClick: () => {
            kG(!yG)
          },
          children: [(0, CL.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: LG(`${xV}coreBankedLater`)
          }), (0, CL.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: pG.map((GG => {
              let [bG, ZG] = GG;
              const wG = VG.has(bG);
              return (0, CL.jsxs)("span", {
                className: uS()({
                  Paused: wG
                }),
                title: wG ? LG(`${xV}coreBankPausedTag`) : void 0,
                children: [(0, CL.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, CL.jsx)(FS.b, {
                    itemName: bG,
                    amount: 0
                  })
                }), ZG, wG && (0, CL.jsx)(IS.c, {
                  name: "pause"
                })]
              }, bG)
            }))
          }), (0, CL.jsx)(IS.c, {
            name: yG ? "angle-up" : "angle-down"
          })]
        }), yG && (0, CL.jsxs)(CL.Fragment, {
          children: [(0, CL.jsx)("ul", {
            children: pG.map((GG => {
              let [bG, wG] = GG;
              const yG = VG.has(bG);
              return (0, CL.jsxs)("li", {
                children: [(0, CL.jsxs)(nV, {
                  item: bG,
                  itemNames: ZG,
                  children: [(0, CL.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: wG
                  }), yG && (0, CL.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: LG(`${xV}coreBankPausedTag`)
                  })]
                }), (0, CL.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, CL.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === wG,
                    onClick: () => {
                      SG.send(`baf2corewithdraw ${wG} ${bG}`)
                    },
                    children: LG(`${xV}coreTake`)
                  }), (0, CL.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      SG.send(`${EG} ${bG}`), YG(bG, !yG)
                    },
                    children: LG(yG ? `${xV}coreBankResume` : `${xV}coreBankStop`)
                  })]
                })]
              }, bG)
            }))
          }), (0, CL.jsx)("p", {
            className: "Baf2CoreHint",
            children: LG(`${xV}coreBankNote`)
          })]
        })]
      })
    }
    const Gp = "buildAFactory2Game:";

    function bp(GG) {
      const bG = Math.max(0, Math.floor(GG));
      return `${Math.floor(bG/60)}:${String(bG%60).padStart(2,"0")}`
    }

    function Zp(GG) {
      let {
        item: bG
      } = GG;
      return (0, CL.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, CL.jsx)(FS.b, {
          itemName: bG,
          amount: 0
        })
      })
    }

    function wp() {
      return (0, CL.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, CL.jsx)(IS.c, {
          name: "bolt"
        })
      })
    }

    function Sp(GG) {
      let {
        charge: bG,
        hint: ZG,
        itemNames: wG
      } = GG;
      const SG = ny(),
        {
          t: LG
        } = (0, mS.w)(),
        [yG, kG, UG, YG, VG, pG, fG] = bG,
        [QG, KG] = function(GG) {
          var bG;
          let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ly,
            wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [SG, LG] = OV((() => GG), GG, ZG, wG);
          return [tV(null !== (bG = SG.get("")) && void 0 !== bG ? bG : null, GG), GG => {
            LG("", GG)
          }]
        }(fG),
        hG = QG === fG ? pG : !QG,
        dG = YG >= VG,
        JG = yG.find((GG => {
          let [, bG, ZG] = GG;
          return ZG < .9 * bG
        }));
      let rG = `${Gp}coreChargeWaiting`,
        zG = {};
      return dG ? rG = `${Gp}coreChargeDone` : QG ? rG = `${Gp}coreChargeStopped` : hG && ZG ? (rG = `${Gp}${ZG[0]}`, zG = {
        item: SL(LG, ZG[1])
      }) : hG && JG ? (rG = `${Gp}coreChargeShort`, zG = {
        item: SL(LG, JG[0])
      }) : hG && kG > 0 && !UG ? rG = `${Gp}coreChargePower` : hG && (rG = `${Gp}coreChargeRunning`), (0, CL.jsxs)("div", {
        className: uS()("Baf2CoreCharge", {
          Waiting: !hG && !dG,
          Done: dG
        }),
        children: [(0, CL.jsxs)("h4", {
          children: [LG(`${Gp}coreChargeTitle`), (0, CL.jsx)("span", {
            children: LG(`${Gp}coreChargeProgress`, {
              done: bp(YG),
              need: bp(VG)
            })
          })]
        }), (0, CL.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, CL.jsx)("div", {
            style: {
              width: 100 * Math.min(YG, VG) / VG + "%"
            }
          })
        }), (0, CL.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [yG.map((GG => {
            var bG;
            let [ZG, SG, yG] = GG;
            const kG = yG >= .9 * SG;
            return (0, CL.jsxs)("li", {
              className: uS()({
                Done: kG,
                Short: hG && !kG
              }),
              children: [(0, CL.jsx)(Zp, {
                item: ZG
              }), (0, CL.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, CL.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, CL.jsx)(vS.c, {
                    text: null !== (bG = wG[ZG]) && void 0 !== bG ? bG : ZG
                  }), (0, CL.jsx)("span", {
                    children: LG(`${Gp}coreChargeItem`, {
                      now: String(yG),
                      need: String(SG)
                    })
                  })]
                }), (0, CL.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, CL.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*yG/SG)}%`
                    }
                  })
                })]
              })]
            }, ZG)
          })), kG > 0 && (0, CL.jsxs)("li", {
            className: uS()("Baf2CoreChargePower", {
              Short: hG && !UG
            }),
            children: [(0, CL.jsx)(wp, {}), (0, CL.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, CL.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, CL.jsx)("span", {
                  children: LG(`${Gp}coreChargePowerRow`, {
                    power: OG(kG)
                  })
                })
              })
            })]
          })]
        }), (0, CL.jsx)("p", {
          className: "Baf2CoreHint",
          children: LG(rG, zG)
        }), !dG && (hG || QG) && (0, CL.jsx)("button", {
          type: "button",
          className: uS()("Baf2CoreChargeToggle", {
            Stopped: QG
          }),
          onClick: () => {
            SG.send(XG), KG(!QG)
          },
          children: LG(QG ? `${Gp}coreChargeRestart` : `${Gp}coreChargeStop`)
        })]
      })
    }

    function Lp(GG) {
      let {
        charge: bG,
        reached: ZG,
        itemNames: wG
      } = GG;
      const {
        t: SG
      } = (0, mS.w)();
      return (0, CL.jsxs)("div", {
        className: uS()("Baf2CoreCharge", {
          Done: ZG
        }),
        children: [(0, CL.jsxs)("h4", {
          children: [SG(`${Gp}coreChargeTitle`), (0, CL.jsx)("span", {
            children: SG(`${Gp}coreChargeSpecTime`, {
              time: bp(bG.seconds)
            })
          })]
        }), (0, CL.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [bG.items.map((GG => {
            var bG;
            let {
              item: LG,
              amount: yG
            } = GG;
            return (0, CL.jsxs)("li", {
              className: uS()({
                Done: ZG
              }),
              children: [(0, CL.jsx)(Zp, {
                item: LG
              }), (0, CL.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, CL.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, CL.jsx)(vS.c, {
                    text: null !== (bG = wG[LG]) && void 0 !== bG ? bG : LG
                  }), (0, CL.jsx)("span", {
                    children: SG(`${Gp}coreChargeSpecItem`, {
                      need: String(yG)
                    })
                  })]
                })
              })]
            }, LG)
          })), bG.powerPerS > 0 && (0, CL.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, CL.jsx)(wp, {}), (0, CL.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, CL.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, CL.jsx)("span", {
                  children: SG(`${Gp}coreChargePowerRow`, {
                    power: OG(bG.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const yp = "buildAFactory2Game:";

    function kp(GG) {
      let {
        def: bG,
        reached: ZG,
        banked: wG,
        itemNames: SG
      } = GG;
      const {
        t: LG
      } = (0, mS.w)();
      return (0, CL.jsx)("ul", {
        className: "Baf2CoreCost",
        children: bG.cost.map((GG => {
          let {
            item: bG,
            amount: yG
          } = GG;
          const kG = ZG ? 0 : wG(bG);
          return (0, CL.jsx)("li", {
            children: (0, CL.jsx)(nV, {
              item: bG,
              itemNames: SG,
              children: (0, CL.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: kG > 0 ? LG(`${yp}coreBankedFor`, {
                  amount: String(kG),
                  total: String(yG)
                }) : `\xd7${yG}`
              })
            })
          }, bG)
        }))
      })
    }

    function Up(GG, bG) {
      if (bG >= VG()) return GG(`${yp}coreMaxTier`);
      const ZG = YG[bG + 1];
      return ZG && !ZG.startsWith("upgradeCore") ? GG(`${yp}coreGateQuest`, {
        quest: GG(`${yp}quest_${ZG}`)
      }) : GG(`${yp}coreGateClosed`)
    }

    function Yp() {
      const {
        t: GG
      } = (0, mS.w)(), bG = ny(), ZG = (0, wG.useRef)(null), SG = (0, wG.useRef)(Date.now());
      return DY(!0, ZG), (0, CL.jsx)("div", {
        ref: ZG,
        className: "Baf2CoreGrow",
        children: (0, CL.jsx)(Xy.k, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - SG.current >= 600 && bG.send(zG)
          },
          children: GG(`${yp}coreGrow`)
        })
      })
    }

    function Vp(GG) {
      let {
        message: bG,
        itemNames: ZG,
        next: wG
      } = GG;
      const SG = ny(),
        {
          t: LG
        } = (0, mS.w)(),
        yG = bG.baf2CoreTier,
        kG = bG.baf2CoreReady,
        UG = bG.baf2CoreNeeds.filter((GG => {
          let [, bG, ZG, wG] = GG;
          return wG > 0 && bG < ZG
        })),
        YG = bG.baf2CoreNeeds.every((GG => {
          let [, bG, ZG] = GG;
          return bG >= ZG
        })),
        VG = bG.baf2CoreKeep;
      return (0, CL.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, CL.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [kG && (0, CL.jsx)(Yp, {}), (0, CL.jsx)("h3", {
            children: LG(`${yp}coreBring`)
          }), (0, CL.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: bG.baf2CoreNeeds.map((GG => {
              let [bG, wG, yG, kG] = GG;
              return (0, CL.jsxs)("li", {
                className: uS()({
                  Done: wG >= yG
                }),
                children: [(0, CL.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, CL.jsx)(FS.b, {
                    itemName: bG,
                    amount: 0
                  })
                }), (0, CL.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, CL.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, CL.jsx)(vS.c, {
                      text: ZG[bG]
                    }), (0, CL.jsxs)("span", {
                      children: [wG, "/", yG]
                    })]
                  }), (0, CL.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, CL.jsx)("div", {
                      style: {
                        width: 100 * wG / yG + "%"
                      }
                    }), kG > 0 && (0, CL.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * kG / yG + "%"
                      }
                    })]
                  })]
                }), kG > 0 && wG < yG && (0, CL.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    SG.send(`${oG} ${bG}`)
                  },
                  children: LG(`${yp}coreDeposit`, {
                    amount: String(kG)
                  })
                })]
              }, bG)
            }))
          }), bG.baf2CoreCharge && (0, CL.jsx)(Sp, {
            charge: bG.baf2CoreCharge,
            hint: bG.baf2CoreChargeHint,
            itemNames: ZG
          }), !kG && UG.length > 1 && (0, CL.jsx)(Xy.k, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              SG.send(zG)
            },
            children: LG(`${yp}coreHandOver`)
          }), !kG && void 0 !== VG && (0, CL.jsx)("p", {
            className: "Baf2CoreHint",
            children: LG(`${yp}coreKeepRest`, {
              item: SL(LG, VG)
            })
          }), !kG && !YG && 0 === UG.length && void 0 === VG && (0, CL.jsx)("p", {
            className: "Baf2CoreHint",
            children: LG(`${yp}coreNothingHeld`)
          }), (0, CL.jsx)(BV, {
            message: bG,
            itemNames: ZG
          })]
        }), (0, CL.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, CL.jsx)("h3", {
            children: LG(`${yp}coreRewards`)
          }), (0, CL.jsx)(TV, {
            def: wG,
            tier: yG + 1,
            itemNames: ZG
          })]
        })]
      })
    }

    function pp(GG) {
      let {
        message: bG,
        itemNames: ZG,
        shown: wG
      } = GG;
      const {
        t: SG
      } = (0, mS.w)(), LG = bG.baf2CoreTier, yG = JG(wG), kG = wG <= LG, UG = new Map(bG.baf2CoreBanked), YG = !rG(LG, uG(bG)) && wG === LG;
      return (0, CL.jsxs)("div", {
        className: uS()("Baf2CoreBody", {
          Locked: !kG
        }),
        children: [(0, CL.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, CL.jsx)("h3", {
            children: SG(kG ? `${yp}coreItTook` : `${yp}coreItNeeds`)
          }), 0 === yG.cost.length && (0, CL.jsx)("p", {
            className: "Baf2CoreHint",
            children: SG(`${yp}coreTierStart`)
          }), yG.cost.length > 0 && (0, CL.jsx)(kp, {
            def: yG,
            reached: kG,
            banked: GG => {
              var bG;
              return function(GG, bG, ZG, wG) {
                let SG = GG;
                for (let yG = bG + 2; yG <= ZG; yG++) {
                  var LG;
                  const GG = JG(yG).cost.find((GG => GG.item === wG)),
                    bG = Math.min(SG, null !== (LG = null === GG || void 0 === GG ? void 0 : GG.amount) && void 0 !== LG ? LG : 0);
                  if (yG === ZG) return bG;
                  SG -= bG
                }
                return 0
              }(null !== (bG = UG.get(GG)) && void 0 !== bG ? bG : 0, LG, wG, GG)
            },
            itemNames: ZG
          }), yG.charge && (0, CL.jsx)(Lp, {
            charge: yG.charge,
            reached: kG,
            itemNames: ZG
          }), YG && (0, CL.jsxs)(CL.Fragment, {
            children: [(0, CL.jsx)("p", {
              className: "Baf2CoreHint",
              children: Up(SG, LG)
            }), (0, CL.jsx)(BV, {
              message: bG,
              itemNames: ZG
            })]
          })]
        }), (0, CL.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, CL.jsx)("h3", {
            children: SG(kG ? `${yp}coreGave` : `${yp}coreLockedRewards`)
          }), (0, CL.jsx)(TV, {
            def: yG,
            tier: wG,
            itemNames: ZG
          })]
        })]
      })
    }

    function fp(GG, bG) {
      const {
        key: ZG,
        params: wG
      } = QG(bG - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return GG(`${yp}${ZG}`, wG)
    }
    const Qp = "buildAFactory2Game:",
      Kp = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      hp = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function dp(GG) {
      let {
        view: bG,
        close: ZG,
        askIslands: SG
      } = GG;
      const {
        t: LG
      } = (0, mS.w)(), [yG, kG] = (0, wG.useState)(!1);
      (0, wG.useEffect)((() => {
        if (!yG) return;
        const GG = window.setTimeout((() => {
          kG(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(GG)
        }
      }), [yG]);
      const {
        message: UG,
        itemNames: YG
      } = bG, VG = UG.baf2CoreTier, pG = JG(VG), fG = rG(VG, uG(UG)), [hG, dG] = UG.baf2CoreMachines, [zG, EG] = UG.baf2CoreBelts, oG = UG.baf2CoreStorage, XG = UG.baf2CoreReady, [iG, CG] = (0, wG.useState)(null), WG = (null === iG || void 0 === iG ? void 0 : iG.at) === VG && iG.ready === XG ? iG.tier : fG ? VG + 1 : VG;
      let mG = "coreTierLocked";
      WG <= VG ? mG = "coreTierReached" : WG === VG + 1 && (mG = "coreTierNext");
      const IG = LG(`${Qp}${JG(WG).nameKey}`),
        FG = WG === VG + 1 ? fG : null,
        vG = QG(WG, {
          tier: mG,
          stage: Kp[mG],
          atomic: hp[mG]
        }),
        aG = LG(`${Qp}${vG.key}`, {
          ...vG.params,
          name: IG
        }),
        cG = QG(VG, KG),
        lG = LG(`${Qp}${cG.key}`, {
          ...cG.params,
          name: LG(`${Qp}${pG.nameKey}`)
        });
      return (0, CL.jsx)(oy.b, {
        close: ZG,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, CL.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, CL.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CL.jsxs)("div", {
              children: [(0, CL.jsx)("h2", {
                id: "baf2CoreTitle",
                children: LG(`${Qp}coreTitle`)
              }), void 0 !== UG.baf2CoreIslandName && (0, CL.jsx)("p", {
                className: "Baf2CoreIsland",
                children: UG.baf2CoreIslandName
              }), (0, CL.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, CL.jsx)("span", {
                  children: lG
                }), (0, CL.jsx)("span", {
                  className: uS()({
                    Full: hG >= dG
                  }),
                  children: LG(`${Qp}coreMachineCount`, {
                    amount: String(hG),
                    total: String(dG)
                  })
                }), (0, CL.jsx)("span", {
                  className: uS()({
                    Full: zG >= EG
                  }),
                  children: LG(`${Qp}coreBeltCount`, {
                    amount: String(zG),
                    total: String(EG)
                  })
                }), void 0 !== oG && (0, CL.jsx)("span", {
                  className: uS()({
                    Full: oG[0] >= oG[1]
                  }),
                  children: LG(`${Qp}coreStorageCount`, {
                    amount: String(oG[0]),
                    total: String(oG[1])
                  })
                })]
              })]
            }), (0, CL.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [UG.baf2CoreIslands && (0, CL.jsx)(Xy.d, {
                className: "Baf2CoreIslandsButton",
                disabled: yG,
                onClick: () => {
                  kG(!0), SG()
                },
                children: LG(`${Qp}islandsOpenButton`)
              }), (0, CL.jsx)(Xy.j, {
                onClick: ZG
              })]
            })]
          }), (0, CL.jsx)(sV, {
            tier: VG,
            shown: WG,
            Df: GG => {
              CG({
                tier: GG,
                at: VG,
                ready: XG
              })
            }
          }), (0, CL.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [aG, WG > VG + 1 && (0, CL.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: fp(LG, WG)
            })]
          }), 6 === WG && WG > VG && (0, CL.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: LG(`${Qp}coreStagesNote`)
          }), 11 === WG && WG > VG && (0, CL.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: LG(`${Qp}coreAtomicNote`)
          }), FG && (0, CL.jsx)(Vp, {
            message: UG,
            itemNames: YG,
            next: FG
          }), !FG && (0, CL.jsx)(pp, {
            message: UG,
            itemNames: YG,
            shown: WG
          })]
        })
      })
    }
    const Jp = {
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
    const rp = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: UL,
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

    function zp(GG) {
      return GG.baf2DropCometOreOnly ? "dropCometOre" : GG.baf2DropCometIsotope ? "seed" === GG.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function Ep(GG) {
      let {
        message: bG,
        quests: ZG,
        close: SG,
        leave: LG
      } = GG;
      const yG = ny(),
        {
          t: kG
        } = (0, mS.w)(),
        UG = (0, SV.j)(PS, ZG.get()),
        YG = function(GG) {
          var bG;
          if (!cG(GG.tutorial)) return null;
          const ZG = GG.rows.find((GG => GG.current)),
            wG = ZG ? Jp[ZG.key] : void 0;
          return null !== (bG = null !== wG && void 0 !== wG ? wG : GG.side ? Jp[GG.side.row.key] : void 0) && void 0 !== bG ? bG : null
        }(UG),
        VG = null === UG.tier || pL(UG.tier),
        pG = VG ? rp : rp.filter((GG => {
          let {
            item: bG
          } = GG;
          return bG !== UL
        })),
        [fG, QG] = (0, wG.useState)(null),
        KG = null !== fG && void 0 !== fG ? fG : !bG.baf2DropFoundSalvage && VG,
        hG = bG.baf2DropRuinDistance,
        dG = bG.baf2DropComet,
        JG = bG.baf2DropOldWorks,
        rG = bG.baf2DropGrove,
        zG = function(GG) {
          return 2 + Number(void 0 !== GG.baf2DropComet) + Number(!!GG.baf2DropOwedComet || void 0 !== GG.baf2DropOwedWaitMinutes) + Number(void 0 !== GG.baf2DropDigDistance) + Number(void 0 !== GG.baf2DropOldWorks) + Number(void 0 !== GG.baf2DropGrove)
        }(bG),
        EG = GG => {
          yG.send(function(GG) {
            return `baf2drop ${GG}`
          }(GG)), LG()
        };
      let oG = kG("buildAFactory2Game:dropRuinNone");
      if (null !== hG) {
        let GG = bG.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        bG.baf2DropRuinOldWorks && (GG = "dropRuinOldWorks");
        const ZG = void 0 === bG.baf2DropRuinCluster ? kG("buildAFactory2Game:dropRuinOpen") : kG("buildAFactory2Game:dropRuinCluster", {
          count: String(bG.baf2DropRuinCluster)
        });
        oG = `${kG(`buildAFactory2Game:${GG}`,{distance:String(hG)})} ${ZG}`
      }
      let XG = kG("buildAFactory2Game:dropBelowDescription");
      void 0 !== bG.baf2DropBelowLook && (XG = kG("buildAFactory2Game:dropBelowLook", {
        look: kG(bG.baf2DropBelowLook)
      }));
      const uG = "buildAFactory2Game:wildsRegion_survivorGrove" === bG.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        iG = oL(kG, 60 * function(GG) {
          const [bG, ZG] = (0, wG.useState)((() => Date.now())), [SG, LG] = (0, wG.useState)(bG);
          return (0, wG.useEffect)((() => {
            const GG = Date.now();
            ZG(GG), LG(GG)
          }), [GG]), (0, wG.useEffect)((() => {
            const GG = window.setInterval((() => {
              LG(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(GG)
            }
          }), []), Math.max(1, GG.baf2DropRenewMinutes - Math.floor((SG - bG) / 6e4))
        }(bG)),
        CG = function(GG, bG, ZG) {
          return "ruin" === GG && !ZG || "owed" === GG && !bG.baf2DropOwedComet ? null : GG
        }(YG, bG, null !== hG),
        WG = function(GG) {
          for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
          return uS()("Baf2DropTile", ...ZG, {
            Wanted: CG === GG
          })
        };
      return (0, CL.jsx)(oy.b, {
        close: SG,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, CL.jsxs)("section", {
          className: uS()("Baf2Panel Baf2DropMap", {
            Many: zG >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, CL.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CL.jsxs)("div", {
              children: [(0, CL.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: kG("buildAFactory2Game:dropMapTitle")
              }), (0, CL.jsx)("p", {
                children: kG("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, CL.jsx)(Xy.j, {
              onClick: SG
            })]
          }), (0, CL.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== dG && (0, CL.jsxs)(Xy.r, {
              className: WG("comet", "Baf2DropComet"),
              onClick: () => {
                EG("comet")
              },
              children: [(0, CL.jsx)("strong", {
                children: kG("buildAFactory2Game:dropComet")
              }), (0, CL.jsx)("span", {
                children: kG(`buildAFactory2Game:${zp(bG)}`, {
                  distance: String(dG)
                })
              })]
            }), bG.baf2DropOwedComet && (0, CL.jsxs)(Xy.r, {
              className: WG("owed", "Baf2DropComet"),
              onClick: () => {
                EG("owed")
              },
              children: [(0, CL.jsx)("strong", {
                children: kG("buildAFactory2Game:dropOwedComet")
              }), (0, CL.jsx)("span", {
                children: bG.baf2DropOwedIsotope ? kG("buildAFactory2Game:dropOwedIsotopeDescription") : kG("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== bG.baf2DropOwedWaitMinutes && (0, CL.jsxs)(Xy.r, {
              className: WG("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, CL.jsx)("strong", {
                children: kG("buildAFactory2Game:dropOwedComet")
              }), (0, CL.jsx)("span", {
                children: kG("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(bG.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, CL.jsxs)(Xy.d, {
              className: WG("below"),
              onClick: () => {
                EG("below")
              },
              children: [(0, CL.jsx)("strong", {
                children: kG("buildAFactory2Game:dropBelow")
              }), (0, CL.jsx)("span", {
                children: XG
              })]
            }), void 0 !== bG.baf2DropDigDistance && (0, CL.jsxs)(Xy.n, {
              className: WG("dig"),
              onClick: () => {
                EG("dig")
              },
              children: [(0, CL.jsx)("strong", {
                children: kG("buildAFactory2Game:dropDig")
              }), (0, CL.jsx)("span", {
                children: kG("buildAFactory2Game:dropDigDescription", {
                  distance: String(bG.baf2DropDigDistance),
                  y: EL(bG.baf2DropDigY)
                })
              })]
            }), void 0 !== rG && (0, CL.jsxs)(Xy.n, {
              className: WG("grove", "Baf2DropGrove"),
              onClick: () => {
                EG("grove")
              },
              children: [(0, CL.jsx)("strong", {
                children: kG("buildAFactory2Game:dropGrove")
              }), (0, CL.jsx)("span", {
                children: kG(`buildAFactory2Game:${uG}`, {
                  distance: String(rG)
                })
              })]
            }), (0, CL.jsxs)(Xy.k, {
              className: WG("ruin"),
              disabled: null === hG,
              onClick: () => {
                EG("ruin")
              },
              children: [(0, CL.jsx)("strong", {
                children: kG("buildAFactory2Game:dropRuin")
              }), (0, CL.jsx)("span", {
                children: oG
              })]
            }), void 0 !== JG && (0, CL.jsxs)(Xy.C, {
              className: WG("works"),
              onClick: () => {
                EG("works")
              },
              children: [(0, CL.jsx)("strong", {
                children: kG("buildAFactory2Game:dropOldWorks")
              }), (0, CL.jsx)("span", {
                children: kG("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(JG)
                })
              })]
            })]
          }), (0, CL.jsx)("p", {
            className: "Baf2DropRenew",
            children: kG("buildAFactory2Game:dropRenew", {
              time: iG
            })
          }), (0, CL.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: KG,
            onToggle: GG => {
              GG.currentTarget.open !== KG && QG(GG.currentTarget.open)
            },
            children: [(0, CL.jsx)("summary", {
              children: kG("buildAFactory2Game:dropSalvageWhat")
            }), (0, CL.jsx)("p", {
              children: kG("buildAFactory2Game:dropSalvageIntro")
            }), (0, CL.jsx)("ul", {
              children: pG.map((GG => {
                let {
                  item: bG,
                  nameKey: ZG,
                  useKey: wG,
                  params: SG
                } = GG;
                return (0, CL.jsxs)("li", {
                  children: [(0, CL.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, CL.jsx)(FS.b, {
                      itemName: bG,
                      amount: 0
                    })
                  }), (0, CL.jsxs)("span", {
                    children: [(0, CL.jsx)("strong", {
                      children: kG(ZG)
                    }), ": ", kG(wG, SG)]
                  })]
                }, bG)
              }))
            })]
          })]
        })
      })
    }
    const op = "buildAFactory2Game:";

    function Xp(GG, bG) {
      return GG.sendIslandEdit(`baf2coopleave ${bG.baf2IslandId}`)
    }

    function ip(GG) {
      let {
        card: bG,
        canRename: ZG,
        done: SG,
        t: LG
      } = GG;
      const yG = ny(),
        [kG, UG] = (0, wG.useState)(bG.baf2IslandName),
        YG = XY(kG),
        VG = "" === YG || uY(YG),
        pG = () => {
          !VG && ZG && (YG !== bG.baf2IslandName ? SG(yG.sendIslandEdit(`baf2islandrename ${bG.baf2IslandId} ${YG}`)) : SG(null))
        },
        fG = () => {
          SG(null)
        };
      return (0, CL.jsxs)("div", {
        className: "Baf2IslandForm",
        ...HY(fG),
        children: [(0, CL.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [LG(`${op}islandsRenameLabel`), (0, CL.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: kG,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: tY,
            onChange: GG => {
              UG(GG.target.value)
            },
            ...TY(pG, fG)
          })]
        }), "" === YG && (0, CL.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: LG(`${op}islandsRenameEmpty`)
        }), uY(YG) && (0, CL.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: LG(`${op}islandsNameReserved`)
        }), (0, CL.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, CL.jsx)(Xy.n, {
            disabled: VG || !ZG,
            onClick: pG,
            children: LG(`${op}islandsRenameSave`)
          }), (0, CL.jsx)(Xy.d, {
            onClick: fG,
            children: LG(`${op}islandsCancel`)
          })]
        })]
      })
    }

    function Cp(GG) {
      let {
        card: bG,
        canDelete: ZG,
        done: SG,
        t: LG
      } = GG;
      const yG = ny(),
        [kG, UG] = (0, wG.useState)(""),
        YG = function(GG, bG) {
          return XY(GG).toLowerCase() === XY(bG).toLowerCase()
        }(kG, bG.baf2IslandName),
        VG = () => {
          YG && ZG && SG(yG.sendIslandEdit(`baf2islanddelete ${bG.baf2IslandId}`))
        },
        pG = () => {
          SG(null)
        },
        fG = jY("name"),
        [QG, KG = ""] = LG(`${op}islandsDeleteConfirm`, {
          name: fG
        }).split(fG);
      return (0, CL.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...HY(pG),
        children: [(0, CL.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, CL.jsxs)("span", {
            children: [QG, (0, CL.jsx)("strong", {
              children: bG.baf2IslandName
            }), KG]
          }), (0, CL.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: kG,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: tY,
            onChange: GG => {
              UG(GG.target.value)
            },
            ...TY(VG, pG)
          })]
        }), nY(bG) && (0, CL.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: LG(`${op}islandsDeleteLeftBack`)
        }), (0, CL.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, CL.jsx)(Xy.C, {
            disabled: !YG || !ZG,
            onClick: VG,
            children: LG(`${op}islandsDeleteForGood`)
          }), (0, CL.jsx)(Xy.d, {
            onClick: pG,
            children: LG(`${op}islandsCancel`)
          })]
        })]
      })
    }

    function Wp(GG) {
      let {
        members: bG,
        t: ZG
      } = GG;
      const wG = bG.length;
      return (0, CL.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, CL.jsxs)("span", {
          children: [1 === wG ? ZG(`${op}islandsPlayersOne`) : ZG(`${op}islandsPlayers`, {
            count: String(wG)
          }), " "]
        }), bG.map(((GG, bG) => (0, CL.jsxs)("span", {
          className: uS()("Baf2IslandMember", {
            Here: GG.baf2MemberHere
          }),
          title: GG.baf2MemberHere ? ZG(`${op}islandsPlayerHere`) : void 0,
          children: [GG.baf2MemberName, bG < wG - 1 ? ", " : ""]
        }, GG.baf2MemberKey)))]
      })
    }

    function mp(GG) {
      let {
        card: bG,
        answered: ZG,
        nowMs: SG,
        t: LG
      } = GG;
      const yG = ny(),
        [kG, UG] = (0, wG.useState)(new Map),
        YG = nY(bG);
      if (!YG) return null;
      return (0, CL.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, CL.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: LG(`${op}islandsLeftTitle`)
        }), (0, CL.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: YG.left.map((GG => {
            const wG = GG.baf2LeftKey,
              VG = eY(kG.get(wG), ZG, SG),
              pG = function(GG) {
                return 1 === GG ? [`${rY}islandsLeftItemsOne`] : [`${rY}islandsLeftItems`, {
                  count: String(GG)
                }]
              }(GG.baf2LeftItems);
            return (0, CL.jsx)("li", {
              className: uS()("Baf2IslandPerson", {
                Pending: VG
              }),
              children: (0, CL.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, CL.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: GG.baf2LeftName
                }), (0, CL.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: LG(pG[0], pG[1])
                }), YG.claim && (0, CL.jsx)(Xy.n, {
                  className: "Baf2IslandPersonButton",
                  disabled: VG,
                  onClick: () => {
                    (GG => {
                      const ZG = yG.sendIslandEdit(`baf2coopclaim ${bG.baf2IslandId} ${GG}`);
                      UG((bG => new Map(bG).set(GG, {
                        atMs: Date.now(),
                        answer: ZG
                      })))
                    })(wG)
                  },
                  children: LG(`${op}islandsClaim`)
                })]
              })
            }, wG)
          }))
        }), YG.goThere && (0, CL.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: LG(`${op}islandsClaimGoThere`)
        })]
      })
    }

    function Ip(GG) {
      let {
        card: bG,
        view: ZG,
        blocked: SG,
        maxIslands: LG,
        answered: yG,
        nowMs: kG,
        done: UG,
        openSocial: YG,
        t: VG
      } = GG;
      const pG = ny(),
        [fG, QG] = (0, wG.useState)(new Map),
        [KG, hG] = (0, wG.useState)(new Map),
        [dG, JG] = (0, wG.useState)(null),
        rG = (0, wG.useRef)(null);
      xY(rG);
      const zG = bG.baf2IslandId,
        EG = bG.baf2IslandCoop,
        oG = null !== EG && void 0 !== EG && EG.baf2CoopMembers.some((GG => GG.baf2MemberKey === dG)) ? dG : null,
        XG = function(GG, bG) {
          const ZG = GG.baf2IslandCoop;
          return ZG && gY(ZG) || null !== bG ? void 0 : GG.baf2IslandInvitable
        }(bG, SG),
        uG = function(GG, bG) {
          const ZG = GG.baf2IslandCoop;
          return ZG && gY(ZG) ? {
            key: `${rY}islandsCoopFull`,
            params: {
              max: String(ZG.baf2CoopMax)
            }
          } : void 0 !== GG.baf2IslandInvitable && null === bG || ZG && !ZG.baf2CoopManageHere ? null : "degraded" === bG || "stuck" === bG ? {
            key: `${rY}islandsInviteNotLoaded`
          } : null === bG || function(GG) {
            return "notHome" === GG || "wilds" === GG || "visiting" === GG
          }(bG) || mY(bG) ? {
            key: `${rY}islandsInviteGoThere`
          } : {
            key: `${rY}islandsInviteBusy`
          }
        }(bG, SG),
        iG = () => {
          var GG;
          JG(null), null === (GG = rG.current) || void 0 === GG || GG.focus()
        };
      return (0, CL.jsxs)("div", {
        ref: rG,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...HY(null === oG ? UG : iG),
        children: [EG && (0, CL.jsxs)(CL.Fragment, {
          children: [(0, CL.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: VG(`${op}islandsPlayersTitle`, {
              count: String(EG.baf2CoopMembers.length),
              max: String(EG.baf2CoopMax)
            })
          }), (0, CL.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: EG.baf2CoopMembers.map(((GG, bG) => {
              const wG = GG.baf2MemberKey,
                SG = eY(fG.get(wG), yG, kG);
              return (0, CL.jsxs)("li", {
                className: uS()("Baf2IslandPerson", {
                  Pending: SG
                }),
                children: [(0, CL.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, CL.jsx)("span", {
                    className: uS()("Baf2IslandPersonName", {
                      Here: GG.baf2MemberHere
                    }),
                    children: GG.baf2MemberName
                  }), GG.baf2MemberHere && (0, CL.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: VG(`${op}islandsPlayerHere`)
                  }), 0 === bG && (0, CL.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: VG(`${op}islandsPlayerOwner`)
                  }), ZG.remove && bG > 0 && !SG && oG !== wG && (0, CL.jsx)(Xy.E, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var GG;
                      JG(wG), null === (GG = rG.current) || void 0 === GG || GG.focus()
                    },
                    children: VG(`${op}islandsRemove`)
                  })]
                }), oG === wG && (0, CL.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, CL.jsx)("p", {
                    children: PY(VG, `${op}islandsRemoveConfirm`, {
                      player: GG.baf2MemberName
                    })
                  }), (0, CL.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, CL.jsx)(Xy.C, {
                      onClick: () => {
                        (GG => {
                          const bG = pG.sendIslandEdit(`baf2coopremove ${zG} ${GG.baf2MemberKey}`);
                          QG((ZG => new Map(ZG).set(GG.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: bG
                          }))), iG()
                        })(GG)
                      },
                      children: VG(`${op}islandsRemoveYes`)
                    }), (0, CL.jsx)(Xy.d, {
                      onClick: iG,
                      children: VG(`${op}islandsCancel`)
                    })]
                  })]
                })]
              }, wG)
            }))
          })]
        }), (void 0 !== XG || null !== uG) && (0, CL.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: VG(`${op}islandsInviteTitle`)
        }), !EG && (void 0 !== XG || null !== uG) && (0, CL.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: VG(`${op}islandsInviteShareNote`)
        }), 0 === (null === XG || void 0 === XG ? void 0 : XG.length) && (0, CL.jsx)(Fp, {
          openSocial: YG,
          t: VG
        }), void 0 !== XG && XG.length > 0 && (0, CL.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: XG.map((GG => {
            const bG = !0 === GG.baf2InvitableSent || eY(KG.get(GG.baf2InvitableId), yG, kG);
            return (0, CL.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, CL.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, CL.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: GG.baf2InvitableName
                }), GG.baf2InvitableFull && !bG && (0, CL.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: VG(`${op}islandsInviteTheirFull`, {
                    max: String(LG)
                  })
                }), (bG || !GG.baf2InvitableFull) && (0, CL.jsx)(Xy.n, {
                  className: "Baf2IslandPersonButton",
                  disabled: bG,
                  onClick: () => {
                    (GG => {
                      const bG = pG.sendIslandEdit(`baf2coopinvite ${zG} ${GG}`);
                      hG((ZG => new Map(ZG).set(GG, {
                        atMs: Date.now(),
                        answer: bG
                      })))
                    })(GG.baf2InvitableId)
                  },
                  children: VG(bG ? `${op}islandsInvited` : `${op}islandsInvite`)
                })]
              })
            }, GG.baf2InvitableId)
          }))
        }), uG && (0, CL.jsx)(bV, {
          note: uG,
          t: VG
        }), (0, CL.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, CL.jsx)(Xy.d, {
            onClick: UG,
            children: VG(`${op}islandsDone`)
          })
        })]
      })
    }

    function Fp(GG) {
      let {
        openSocial: bG,
        t: ZG
      } = GG;
      return (0, CL.jsxs)(CL.Fragment, {
        children: [(0, CL.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ZG(bG ? `${op}islandsInviteNobody` : `${op}islandsInviteNobodyGuest`)
        }), bG && (0, CL.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, CL.jsx)(Xy.d, {
            onClick: bG,
            children: ZG("socialBar:social")
          })
        })]
      })
    }

    function vp(GG) {
      let {
        className: bG,
        text: ZG,
        ConfirmButton: SG,
        confirmLabel: LG,
        canConfirm: yG,
        send: kG,
        done: UG,
        t: YG
      } = GG;
      const VG = (0, wG.useRef)(null);
      xY(VG);
      const pG = () => {
        UG(null)
      };
      return (0, CL.jsxs)("div", {
        ref: VG,
        tabIndex: -1,
        className: uS()("Baf2IslandForm", bG),
        ...HY(pG),
        children: [(0, CL.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: ZG
        }), (0, CL.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, CL.jsx)(SG, {
            disabled: !yG,
            onClick: () => {
              yG && UG(kG())
            },
            children: LG
          }), (0, CL.jsx)(Xy.d, {
            onClick: pG,
            children: YG(`${op}islandsCancel`)
          })]
        })]
      })
    }

    function ap(GG) {
      return "hidden" !== GG
    }

    function cp(GG) {
      var bG, ZG;
      let {
        card: SG,
        keepOwn: LG,
        blocked: yG,
        maxIslands: kG,
        serverNowMs: UG,
        nowMs: YG,
        actions: VG,
        full: pG,
        waits: fG,
        answered: QG,
        mode: KG,
        setMode: hG,
        pending: dG,
        onSent: JG,
        switchTo: rG,
        leave: zG,
        coopOn: EG,
        openSocial: oG,
        t: XG
      } = GG;
      const uG = ny(),
        iG = SG.baf2IslandActive,
        CG = iG ? null : function(GG, bG) {
          if (GG <= 0) return null;
          const ZG = bG - GG;
          if (ZG < dL) return [`${rY}islandsPlayedJustNow`];
          if (ZG < zY) return [`${rY}islandsPlayedMinutes`, {
            minutes: String(Math.floor(ZG / dL))
          }];
          if (ZG < EY) return [`${rY}islandsPlayedHours`, {
            hours: String(Math.floor(ZG / zY))
          }];
          const wG = Math.floor(ZG / EY);
          return 1 === wG ? [`${rY}islandsPlayedDay`] : [`${rY}islandsPlayedDays`, {
            days: String(wG)
          }]
        }(SG.baf2IslandLastPlayedMs, UG),
        WG = void 0 === (mG = SG.baf2IslandItems) ? null : 0 === mG ? [`${rY}islandsItemsNone`] : 1 === mG ? [`${rY}islandsItemsOne`] : [`${rY}islandsItems`, {
          count: String(mG)
        }];
      var mG;
      const IG = function(GG) {
          return GG ? 1 === GG ? [`${rY}islandsWaitingOne`] : [`${rY}islandsWaiting`, {
            count: String(GG)
          }] : null
        }(SG.baf2IslandWaiting),
        FG = SG.baf2IslandUnreadable,
        vG = SG.baf2IslandCoop,
        aG = qY(SG, VG, LG, pG, EG, yG),
        cG = (0, wG.useRef)(null);
      DY(null !== KG, cG);
      const lG = () => {
          var GG;
          hG(null), null === (GG = cG.current) || void 0 === GG || GG.focus()
        },
        jG = (GG, bG) => {
          lG(), null !== GG && JG(GG, bG)
        },
        PG = (GG, bG) => XG(`${op}${GG}`, {
          time: oL(XG, bG)
        });
      return (0, CL.jsxs)("li", {
        ref: cG,
        tabIndex: -1,
        className: uS()("Baf2IslandCard", {
          Active: iG,
          Pending: dG,
          Shared: void 0 !== vG
        }),
        children: [(0, CL.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, CL.jsx)("strong", {
            className: "Baf2IslandName",
            children: SG.baf2IslandName
          }), iG && (0, CL.jsx)("span", {
            className: "Baf2IslandBadge",
            children: XG(`${op}islandsOnThis`)
          }), vG && (0, CL.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: XG(`${op}islandsShared`)
          })]
        }), "member" === (null === vG || void 0 === vG ? void 0 : vG.baf2CoopRole) && (0, CL.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: PY(XG, `${op}islandsSharedBy`, {
            owner: vG.baf2CoopOwner
          })
        }), void 0 !== FG && (0, CL.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: XG("newer" === FG ? `${op}islandsUnreadable` : `${op}islandsDamaged`)
        }), "corrupt" === FG && pG && (0, CL.jsx)("p", {
          className: "Baf2IslandStats",
          children: XG(`${op}islandsDamagedFull`)
        }), void 0 === FG && (0, CL.jsxs)(CL.Fragment, {
          children: [(0, CL.jsx)(GV, {
            tier: SG.baf2IslandTier,
            t: XG
          }), (0, CL.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, CL.jsx)("span", {
              children: 1 === SG.baf2IslandQuestsDone ? XG(`${op}islandsQuestsDoneOne`) : XG(`${op}islandsQuestsDone`, {
                count: String(SG.baf2IslandQuestsDone)
              })
            }), (0, CL.jsx)("span", {
              children: 1 === SG.baf2IslandMachines ? XG(`${op}islandsMachinesOne`) : XG(`${op}islandsMachines`, {
                count: String(SG.baf2IslandMachines)
              })
            }), WG && (0, CL.jsx)("span", {
              children: XG(WG[0], WG[1])
            }), IG && (0, CL.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: XG(IG[0], IG[1])
            }), CG && (0, CL.jsx)("span", {
              children: XG(CG[0], CG[1])
            })]
          })]
        }), vG && void 0 === vG.baf2CoopState && "people" !== KG && (0, CL.jsx)(Wp, {
          members: vG.baf2CoopMembers,
          t: XG
        }), null === KG && (0, CL.jsx)(mp, {
          card: SG,
          answered: QG,
          nowMs: YG,
          t: XG
        }), aG.note && (0, CL.jsx)(bV, {
          note: aG.note,
          className: uS()({
            Unreachable: void 0 !== (null === vG || void 0 === vG ? void 0 : vG.baf2CoopState)
          }),
          t: XG
        }), "rename" === KG && (0, CL.jsx)(ip, {
          card: SG,
          canRename: "enabled" === aG.rename,
          done: jG,
          t: XG
        }), "delete" === KG && (0, CL.jsx)(Cp, {
          card: SG,
          canDelete: "enabled" === aG.delete,
          done: GG => {
            jG(GG, vG ? "delete" : void 0)
          },
          t: XG
        }), "people" === KG && (0, CL.jsx)(Ip, {
          card: SG,
          view: aG,
          blocked: yG,
          maxIslands: kG,
          answered: QG,
          nowMs: YG,
          done: lG,
          openSocial: oG,
          t: XG
        }), "leave" === KG && (0, CL.jsx)(vp, {
          className: "Leave",
          text: PY(XG, `${op}islandsLeaveConfirm`, {
            island: SG.baf2IslandName,
            owner: null !== (bG = null === (ZG = SG.baf2IslandCoop) || void 0 === ZG ? void 0 : ZG.baf2CoopOwner) && void 0 !== bG ? bG : ""
          }),
          ConfirmButton: Xy.C,
          confirmLabel: XG(`${op}islandsLeaveYes`),
          canConfirm: "enabled" === aG.leave,
          send: () => Xp(uG, SG),
          done: GG => {
            jG(GG, "leave"), null !== GG && iG && zG()
          },
          t: XG
        }), "unshare" === KG && (0, CL.jsx)(vp, {
          className: "Unshare",
          text: PY(XG, `${op}islandsStopSharingConfirm`, {
            island: SG.baf2IslandName
          }),
          ConfirmButton: Xy.n,
          confirmLabel: XG(`${op}islandsStopSharing`),
          canConfirm: "enabled" === aG.unshare,
          send: () => uG.sendIslandEdit(`baf2coopunshare ${SG.baf2IslandId}`),
          done: GG => {
            jG(GG), null !== GG && zG()
          },
          t: XG
        }), null === KG && !dG && (0, CL.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": SG.baf2IslandName,
          children: [ap(aG.switch) && (0, CL.jsx)(Xy.n, {
            disabled: "enabled" !== aG.switch,
            onClick: rG,
            children: "tryAgain" === aG.switchLabel ? XG(`${op}islandsTryAgain`) : fG.switch > 0 ? PG("islandsSwitchIn", fG.switch) : XG(`${op}islandsSwitch`)
          }), ap(aG.rename) && (0, CL.jsx)(Xy.d, {
            disabled: "enabled" !== aG.rename,
            onClick: () => {
              hG("rename")
            },
            children: XG(`${op}islandsRename`)
          }), ap(aG.people) && (0, CL.jsx)(Xy.d, {
            disabled: "enabled" !== aG.people,
            onClick: () => {
              hG("people")
            },
            children: XG("players" === aG.peopleLabel ? `${op}islandsPlayersButton` : `${op}islandsInviteButton`)
          }), ap(aG.unshare) && (0, CL.jsx)(Xy.d, {
            disabled: "enabled" !== aG.unshare,
            onClick: () => {
              hG("unshare")
            },
            children: XG(`${op}islandsStopSharing`)
          }), ap(aG.dismiss) && (0, CL.jsx)(Xy.d, {
            disabled: "enabled" !== aG.dismiss,
            onClick: () => {
              JG(Xp(uG, SG), "dismiss"), iG && zG()
            },
            children: XG(`${op}islandsDismiss`)
          }), ap(aG.leave) && (0, CL.jsx)(Xy.E, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== aG.leave,
            onClick: () => {
              hG("leave")
            },
            children: iG && fG.switch > 0 ? PG("islandsLeaveIn", fG.switch) : XG(`${op}islandsLeave`)
          }), ap(aG.delete) && (0, CL.jsx)(Xy.E, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== aG.delete,
            onClick: () => {
              hG("delete")
            },
            children: fG.change > 0 && aG.deleteWaits ? PG("islandsDeleteIn", fG.change) : XG(`${op}islandsDelete`)
          })]
        })]
      })
    }
    const lp = "buildAFactory2Game:";

    function jp(GG) {
      let {
        invite: bG,
        actions: ZG,
        full: SG,
        maxIslands: LG,
        waitSeconds: yG,
        focus: kG,
        focused: UG,
        join: YG,
        decline: VG,
        t: pG
      } = GG;
      const [fG, QG] = (0, wG.useState)(!1), KG = (0, wG.useRef)(null);
      DY(fG, KG), (0, wG.useEffect)((() => {
        var GG;
        kG && (QG(!0), null === (GG = KG.current) || void 0 === GG || GG.focus(), UG())
      }), [kG, UG]);
      const hG = function(GG, bG, ZG, wG, SG) {
          return ZG ? {
            join: !1,
            note: {
              key: `${rY}islandsJoinTooMany`,
              params: {
                max: String(wG)
              }
            }
          } : GG.baf2InvitePlayers >= SG ? {
            join: !1,
            note: {
              key: `${rY}islandsJoinFull`
            }
          } : {
            join: bG.switch,
            note: null
          }
        }(bG, ZG, SG, LG, 10),
        dG = bG.baf2InviteIsland,
        JG = bG.baf2InvitePlayers,
        rG = () => {
          var GG;
          QG(!1), null === (GG = KG.current) || void 0 === GG || GG.focus()
        },
        zG = yG > 0 && null === hG.note ? pG(`${lp}islandsJoinIn`, {
          time: oL(pG, yG)
        }) : pG(`${lp}islandsJoin`);
      return (0, CL.jsxs)("li", {
        ref: KG,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...fG ? HY(rG) : {},
        children: [(0, CL.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, CL.jsx)("strong", {
            className: "Baf2IslandName",
            children: dG
          })
        }), (0, CL.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: PY(pG, `${lp}islandsInvitedBy`, {
            owner: bG.baf2InviteOwner
          })
        }), (0, CL.jsx)(GV, {
          tier: bG.baf2InviteTier,
          t: pG
        }), (0, CL.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, CL.jsx)("span", {
            children: 1 === JG ? pG(`${lp}islandsPlayersCountOne`) : pG(`${lp}islandsPlayersCount`, {
              count: String(JG)
            })
          })
        }), hG.note && (0, CL.jsx)(bV, {
          note: hG.note,
          t: pG
        }), fG && (0, CL.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: PY(pG, `${lp}islandsJoinConfirm`, {
            island: dG
          })
        }), !fG && (0, CL.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": dG,
          children: [(0, CL.jsx)(Xy.n, {
            disabled: !hG.join,
            onClick: () => {
              var GG;
              QG(!0), null === (GG = KG.current) || void 0 === GG || GG.focus()
            },
            children: zG
          }), (0, CL.jsx)(Xy.d, {
            onClick: VG,
            children: pG(`${lp}islandsDecline`)
          })]
        }), fG && (0, CL.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, CL.jsx)(Xy.n, {
            disabled: !hG.join,
            onClick: YG,
            children: pG(`${lp}islandsJoinYes`)
          }), (0, CL.jsx)(Xy.d, {
            onClick: rG,
            children: pG(`${lp}islandsCancel`)
          })]
        })]
      })
    }

    function Pp(GG) {
      let {
        invites: bG,
        actions: ZG,
        full: wG,
        maxIslands: SG,
        waitSeconds: LG,
        focus: yG,
        focused: kG,
        leave: UG,
        declined: YG,
        t: VG
      } = GG;
      const pG = ny();
      return (0, CL.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, CL.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: VG(`${lp}islandsInvitesTitle`)
        }), (0, CL.jsx)("ul", {
          className: "Baf2IslandCards",
          children: bG.map((GG => {
            const bG = GG.baf2InviteId;
            return (0, CL.jsx)(jp, {
              invite: GG,
              actions: ZG,
              full: wG,
              maxIslands: SG,
              waitSeconds: LG,
              focus: yG === bG,
              focused: kG,
              join: () => {
                pG.send(`baf2coopaccept ${bG}`), UG()
              },
              decline: () => {
                pG.send(`baf2coopdecline ${bG}`), YG(bG)
              },
              t: VG
            }, bG)
          }))
        })]
      })
    }
    const Mp = "buildAFactory2Game:";

    function Ap(GG) {
      let {
        cards: bG,
        activeName: ZG,
        canStart: SG,
        waitSeconds: LG,
        leave: yG,
        t: kG
      } = GG;
      const UG = ny(),
        [YG, VG] = (0, wG.useState)(!1),
        [pG, fG] = (0, wG.useState)(""),
        QG = (0, wG.useRef)(null);
      DY(YG, QG), (0, wG.useEffect)((() => {
        var GG;
        YG && (null === (GG = QG.current) || void 0 === GG || GG.focus())
      }), [YG]);
      const KG = iY(bG),
        hG = XY(pG),
        dG = uY(hG),
        JG = () => {
          SG && !dG && (UG.send("" === hG || hG === KG ? DG : `${DG} ${hG}`), yG())
        },
        rG = () => {
          var GG;
          VG(!1), null === (GG = QG.current) || void 0 === GG || GG.focus()
        };
      return (0, CL.jsxs)("li", {
        ref: QG,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...YG ? HY(rG) : {},
        children: [(0, CL.jsx)("strong", {
          className: "Baf2IslandName",
          children: kG(`${Mp}islandsNewTitle`)
        }), !YG && (0, CL.jsx)("p", {
          className: "Baf2IslandStats",
          children: kG(`${Mp}islandsNewNote`)
        }), YG && (0, CL.jsxs)(CL.Fragment, {
          children: [(0, CL.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: PY(kG, `${Mp}islandsNewConfirm`, {
              name: ZG
            })
          }), (0, CL.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [kG(`${Mp}islandsNewNameLabel`), (0, CL.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: pG,
              placeholder: KG,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: tY,
              onChange: GG => {
                fG(GG.target.value)
              },
              ...TY(JG, rG)
            })]
          }), dG && (0, CL.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: kG(`${Mp}islandsNameReserved`)
          })]
        }), (0, CL.jsxs)("div", {
          className: uS()("Baf2IslandButtons", {
            Stacked: YG
          }),
          children: [(0, CL.jsx)(Xy.n, {
            disabled: !SG || YG && dG,
            onClick: () => {
              if (!YG) return fG(KG), void VG(!0);
              JG()
            },
            children: LG > 0 ? kG(`${Mp}islandsNewIn`, {
              time: oL(kG, LG)
            }) : kG(YG ? `${Mp}islandsNewConfirmButton` : `${Mp}islandsNew`)
          }), YG && (0, CL.jsx)(Xy.d, {
            onClick: rG,
            children: kG(`${Mp}islandsCancel`)
          })]
        })]
      })
    }

    function sp(GG) {
      var bG, ZG;
      let {
        message: SG,
        arrivedAtMs: LG,
        close: yG,
        leave: kG,
        openSocial: UG
      } = GG;
      const YG = ny(),
        {
          t: VG
        } = (0, mS.w)(),
        pG = BY(1e3),
        [fG, QG] = (0, wG.useState)(null),
        [KG, hG] = (0, wG.useState)(new Map),
        [dG, JG] = (0, wG.useState)(new Set),
        rG = SG.baf2IslandCards,
        zG = function(GG, bG, ZG, wG) {
          return (null !== GG && void 0 !== GG ? GG : []).filter((GG => bG + GG.baf2InviteLeftMs > ZG && !wG.has(GG.baf2InviteId)))
        }(SG.baf2IslandsInvites, LG, pG, dG),
        EG = zG.map((GG => GG.baf2InviteId)).join(" "),
        oG = (0, wG.useRef)(null),
        XG = NY(oG);
      OY(), (0, wG.useEffect)((() => {
        var GG, bG;
        null !== (GG = oG.current) && void 0 !== GG && GG.contains(document.activeElement) || (null === (bG = oG.current) || void 0 === bG || bG.focus())
      }), [SG, EG]), (0, wG.useEffect)((() => {
        hG((GG => function(GG, bG, ZG, wG) {
          const SG = new Map;
          for (const LG of bG) {
            const bG = GG.get(LG.baf2IslandId);
            bG && (void 0 !== bG.untilGone || wG < bG.answer) && aY(bG, LG, ZG) && SG.set(LG.baf2IslandId, bG)
          }
          return SG.size === GG.size ? GG : SG
        }(GG, SG.baf2IslandCards, Date.now(), SG.baf2IslandsAnswered)))
      }), [SG]);
      const uG = oY(LG, SG.baf2IslandsWaitMs, pG),
        iG = SG.baf2IslandsBlocked,
        CG = IY(iG, uG),
        WG = function(GG, bG) {
          const ZG = IY(GG, 0);
          return {
            switch: ZG.switch ? bG : 0,
            change: ZG.change ? bG : 0
          }
        }(iG, uG),
        mG = rG.length >= SG.baf2IslandsMax,
        IG = rG.length > 0,
        FG = function(GG, bG, ZG) {
          return GG + Math.max(0, ZG - bG)
        }(SG.baf2IslandsNowMs, LG, pG),
        vG = null !== (bG = null === (ZG = rG.find((GG => GG.baf2IslandActive))) || void 0 === ZG ? void 0 : ZG.baf2IslandName) && void 0 !== bG ? bG : "",
        aG = function(GG) {
          const bG = GG.filter(sY).length;
          return bG <= 1 && bG < GG.length
        }(rG),
        cG = !0 === SG.baf2IslandsCoop,
        lG = function(GG, bG) {
          const ZG = GG.find((GG => GG.baf2IslandActive)),
            wG = null === ZG || void 0 === ZG ? void 0 : ZG.baf2IslandCoop;
          return ZG && "member" === (null === wG || void 0 === wG ? void 0 : wG.baf2CoopRole) ? {
            key: `${rY}islandsKeepOwnMember`,
            names: {
              owner: wG.baf2CoopOwner,
              island: ZG.baf2IslandName
            }
          } : {
            key: bG ? `${rY}islandsKeepOwn` : `${rY}islandsKeepOwnSolo`
          }
        }(rG, cG),
        [jG, PG] = (0, wG.useState)(null);
      (0, wG.useEffect)((() => {
        void 0 !== SG.baf2IslandsFocusInvite && PG(SG.baf2IslandsFocusInvite)
      }), [SG]);
      const MG = (0, wG.useCallback)((() => {
          PG(null)
        }), []),
        AG = fG ? rG.find((GG => GG.baf2IslandId === fG.id)) : void 0,
        sG = fG && AG && "hidden" !== qY(AG, CG, aG, mG, cG, iG)[fG.mode] ? fG : null;
      return (0, CL.jsx)(oy.b, {
        close: yG,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, CL.jsxs)("section", {
          ref: oG,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: XG ? {
            marginTop: `${XG.marginTop}px`,
            maxHeight: `${XG.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, CL.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CL.jsxs)("div", {
              children: [(0, CL.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: VG(`${Mp}islandsTitle`)
              }), IG && (0, CL.jsx)("p", {
                children: VG(`${Mp}islandsSubtitle`, {
                  count: String(rG.length),
                  max: String(SG.baf2IslandsMax)
                })
              })]
            }), (0, CL.jsx)(Xy.j, {
              ariaLabel: VG(`${Mp}islandsClose`),
              onClick: yG
            })]
          }), (0, CL.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== iG && (0, CL.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: PY(VG, CY(iG, WY(rG)), {
                island: vG
              })
            }), IG && zG.length > 0 && (0, CL.jsx)(Pp, {
              invites: zG,
              actions: CG,
              full: mG,
              maxIslands: SG.baf2IslandsMax,
              waitSeconds: WG.switch,
              focus: jG,
              focused: MG,
              leave: kG,
              declined: GG => {
                JG((bG => new Set(bG).add(GG)))
              },
              t: VG
            }), IG && (0, CL.jsxs)(CL.Fragment, {
              children: [mG && (0, CL.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: VG(`${Mp}islandsFull`, {
                  max: String(SG.baf2IslandsMax)
                })
              }), (0, CL.jsx)("p", {
                className: "Baf2IslandsNote",
                children: PY(VG, lG.key, lG.names)
              }), (0, CL.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [rG.map((GG => {
                  const bG = GG.baf2IslandId;
                  return (0, CL.jsx)(cp, {
                    card: GG,
                    keepOwn: aG,
                    coopOn: cG,
                    openSocial: UG,
                    blocked: iG,
                    maxIslands: SG.baf2IslandsMax,
                    serverNowMs: FG,
                    nowMs: pG,
                    actions: CG,
                    full: mG,
                    waits: WG,
                    answered: SG.baf2IslandsAnswered,
                    mode: (null === sG || void 0 === sG ? void 0 : sG.id) === bG ? sG.mode : null,
                    setMode: GG => {
                      QG(null === GG ? null : {
                        id: bG,
                        mode: GG
                      })
                    },
                    pending: aY(KG.get(bG), GG, pG),
                    onSent: (ZG, wG) => {
                      hG((SG => {
                        const LG = {
                          atMs: Date.now(),
                          from: GG.baf2IslandName,
                          answer: ZG
                        };
                        return new Map(SG).set(bG, wG ? {
                          ...LG,
                          untilGone: wG
                        } : LG)
                      }))
                    },
                    leave: kG,
                    switchTo: () => {
                      YG.send(`baf2islandswitch ${bG}`), kG()
                    },
                    t: VG
                  }, bG)
                })), !mG && (0, CL.jsx)(Ap, {
                  cards: rG,
                  activeName: vG,
                  canStart: CG.change,
                  waitSeconds: WG.change,
                  leave: kG,
                  t: VG
                })]
              })]
            })]
          })]
        })
      })
    }
    var qp = ZG(5039);
    const np = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        Iw: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      gp = Object.keys(np),
      ep = new Set([...Object.keys(Db), ...[...lb.Press.recipes, ...lb["Wire Mill"].recipes].map((GG => GG.output))]),
      Rp = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      Tp = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      Hp = / Bar$|Alloy$/,
      tp = /Porkchop|Beef|Mutton|Venison|Steak/,
      Dp = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const Np = (0, wG.memo)((function(GG) {
      let {
        item: bG,
        name: ZG,
        amount: wG,
        selected: SG,
        small: LG,
        onPick: yG
      } = GG;
      return (0, CL.jsxs)("button", {
        type: "button",
        className: uS()("Baf2TermTile", {
          On: SG,
          Small: LG
        }),
        "aria-label": `${ZG}: ${wG}`,
        "aria-pressed": SG,
        onClick: () => {
          yG(bG)
        },
        children: [(0, CL.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, CL.jsx)(FS.b, {
            itemName: bG,
            amount: 0
          })
        }), (0, CL.jsx)("span", {
          className: "Baf2TermCount",
          children: zL(wG, 1e4)
        }), !LG && (0, CL.jsx)("span", {
          className: "Baf2TermName",
          children: ZG
        })]
      })
    }));

    function Op(GG) {
      let {
        store: bG,
        close: ZG,
        send: SG
      } = GG;
      const {
        t: LG
      } = (0, mS.w)(), {
        isTouchScreen: yG
      } = (0, ES.o)(["isTouchScreen"]);
      ! function(GG) {
        const [bG, ZG] = (0, wG.useState)(GG.version);
        (0, wG.useEffect)((() => (ZG(GG.version), GG.subscribe((() => {
          ZG(GG.version)
        })))), [GG])
      }(bG);
      const [kG, UG] = (0, wG.useState)("all"), [YG, VG] = (0, wG.useState)(!1), [pG, fG] = (0, wG.useState)(""), [QG, KG] = (0, wG.useState)(""), [hG, dG] = (0, wG.useState)(null), [JG, rG] = (0, wG.useState)(!1), [zG, EG, oG] = function() {
        const GG = (0, wG.useRef)(null),
          [bG, ZG] = (0, wG.useState)(!1),
          SG = () => {
            const bG = GG.current;
            ZG(null !== bG && bG.scrollLeft + bG.clientWidth < bG.scrollWidth - 1)
          };
        return (0, wG.useEffect)(SG), (0, wG.useEffect)((() => {
          const bG = GG.current;
          if (!bG) return;
          const ZG = new ResizeObserver(SG);
          return ZG.observe(bG), () => {
            ZG.disconnect()
          }
        }), []), [GG, bG, SG]
      }(), XG = (0, wG.useMemo)((() => new Map), [LG]), uG = GG => {
        let bG = XG.get(GG);
        return void 0 === bG && (bG = function(GG, bG) {
          const ZG = /^(.+) \((.+)\)$/.exec(GG);
          return ZG ? bG(ZG[2], ZG[1]) : GG
        }(SL(LG, GG), ((GG, bG) => LG("buildAFactory2Game:terminalTileKind", {
          kind: GG,
          base: bG
        }))), XG.set(GG, bG)), bG
      }, iG = bG.isReadOnly(), CG = JG && !iG, WG = bG.recent(), mG = bG.items(), IG = QG.trim().toLowerCase(), FG = CG ? bG.heldItems(hG) : ("recent" === kG ? WG : mG).filter((GG => {
        const bG = uG(GG);
        return ("all" === kG || "recent" === kG || function(GG) {
          return fL(GG) ? "farm" : Rp.test(GG) ? "nuclear" : Hp.test(GG) ? "bars" : tp.test(GG) ? "farm" : Tp.test(GG) ? "Iw" : ep.has(GG) ? "parts" : Dp.test(GG) ? "farm" : "other"
        }(GG) === kG) && ("" === IG || bG.toLowerCase().includes(IG)) && ("" === pG || bG.toUpperCase().startsWith(pG))
      })), vG = new Set(mG.map((GG => uG(GG).charAt(0).toUpperCase()))), aG = GG => CG ? bG.heldAmount(GG) : bG.amount(GG), cG = !CG && "recent" !== kG && WG.length > 0, lG = function(GG, bG) {
        return null !== GG && bG.includes(GG) ? GG : null
      }(hG, cG ? [...FG, ...WG] : FG), jG = null === lG ? 0 : bG.amount(lG), PG = null === lG ? 0 : aG(lG), MG = (0, wG.useCallback)((GG => {
        dG((bG => bG === GG ? null : GG))
      }), []), AG = GG => PG > 0 || CG && null === lG && "fill" === GG && FG.length > 0, sG = CG ? [
        ["one", LG("buildAFactory2Game:terminalStoreOne")],
        ["stack", LG("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", LG(null === lG ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", LG("buildAFactory2Game:terminalTakeOne")],
        ["stack", LG("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", LG("buildAFactory2Game:terminalFill")]
      ], qG = CG ? LG("buildAFactory2Game:terminalStoreEmpty") : "" !== pG ? LG("buildAFactory2Game:terminalEmptyLetter", {
        letter: pG
      }) : "" !== IG ? LG("buildAFactory2Game:terminalEmptySearch", {
        query: QG
      }) : LG("buildAFactory2Game:terminalEmpty");
      return (0, CL.jsx)(oy.b, {
        close: ZG,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, CL.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, CL.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CL.jsxs)("div", {
              children: [(0, CL.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: LG(bG.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, CL.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, CL.jsx)("span", {
                  className: uS()({
                    Off: CG
                  }),
                  children: LG("buildAFactory2Game:terminalSubtitle", {
                    count: String(bG.siloCount())
                  })
                }), !iG && (0, CL.jsx)("span", {
                  className: uS()({
                    Off: !CG
                  }),
                  children: LG("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !iG && (0, CL.jsx)(qp.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: LG("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: LG("buildAFactory2Game:terminalModeStore")
              }],
              value: CG ? "store" : "take",
              onChange: GG => {
                rG("store" === GG), dG(null)
              },
              ariaLabel: LG("buildAFactory2Game:terminalModes")
            }), (0, CL.jsx)(Xy.j, {
              onClick: ZG
            })]
          }), (0, CL.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, CL.jsxs)("div", {
              className: uS()("Baf2TermTools", {
                Hidden: CG
              }),
              children: [(0, CL.jsx)("div", {
                ref: zG,
                className: uS()("Baf2TermChips", {
                  MoreRight: EG
                }),
                onScroll: oG,
                children: YG ? (0, CL.jsxs)(CL.Fragment, {
                  children: [(0, CL.jsx)("button", {
                    type: "button",
                    "aria-label": LG("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      VG(!1), fG("")
                    },
                    children: "\u2190"
                  }), [...vG].sort().map((GG => (0, CL.jsx)("button", {
                    type: "button",
                    className: uS()({
                      On: pG === GG
                    }),
                    onClick: () => {
                      fG(pG === GG ? "" : GG)
                    },
                    children: GG
                  }, GG)))]
                }) : (0, CL.jsxs)(CL.Fragment, {
                  children: [(0, CL.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      VG(!0)
                    },
                    children: LG("buildAFactory2Game:terminalLetters")
                  }), gp.map((GG => (0, CL.jsx)("button", {
                    type: "button",
                    className: uS()({
                      On: kG === GG
                    }),
                    onClick: () => {
                      UG(GG)
                    },
                    children: LG(np[GG])
                  }, GG)))]
                })
              }), !yG && (0, CL.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: QG,
                placeholder: LG("buildAFactory2Game:terminalSearch"),
                "aria-label": LG("buildAFactory2Game:terminalSearch"),
                onChange: GG => {
                  KG(GG.target.value)
                },
                onKeyDown: GG => {
                  GG.stopPropagation()
                }
              }), (0, CL.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": LG("buildAFactory2Game:terminalResort"),
                title: LG("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  bG.resort()
                },
                children: "\u21c5"
              })]
            }), cG && (0, CL.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, CL.jsx)("span", {
                children: LG(np.recent)
              }), WG.map((GG => (0, CL.jsx)(Np, {
                item: GG,
                name: uG(GG),
                amount: bG.amount(GG),
                selected: lG === GG,
                small: !0,
                onPick: MG
              }, GG)))]
            }), (0, CL.jsx)("div", {
              className: "Baf2TermTiles",
              children: FG.length > 0 ? FG.map((GG => (0, CL.jsx)(Np, {
                item: GG,
                name: uG(GG),
                amount: aG(GG),
                selected: lG === GG,
                onPick: MG
              }, GG))) : (0, CL.jsx)("p", {
                className: "Baf2TermEmpty",
                children: qG
              })
            }), (0, CL.jsxs)("div", {
              className: uS()("Baf2TermActions", {
                Hidden: CG && 0 === FG.length
              }),
              children: [(0, CL.jsx)("span", {
                className: "Baf2TermPicked",
                children: iG ? (0, CL.jsxs)(CL.Fragment, {
                  children: [null !== lG && jG > 0 ? uG(lG) : LG("buildAFactory2Game:terminalVisiting"), (0, CL.jsx)("small", {
                    children: LG("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== lG ? (0, CL.jsxs)(CL.Fragment, {
                  children: [uG(lG), (0, CL.jsx)("small", {
                    children: LG("buildAFactory2Game:terminalStored", {
                      amount: jG.toLocaleString()
                    })
                  })]
                }) : LG(CG ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !iG && sG.map((GG => {
                let [ZG, wG] = GG;
                const LG = "fill" === ZG ? Xy.k : Xy.d;
                return (0, CL.jsx)(LG, {
                  className: "Baf2TermTake",
                  disabled: !AG(ZG),
                  onClick: () => {
                    (GG => {
                      AG(GG) && SG(null === lG ? bG.putAll() : CG ? bG.put(GG, lG) : bG.take(GG, lG))
                    })(ZG)
                  },
                  children: wG
                }, ZG)
              }))]
            })]
          })]
        })
      })
    }

    function xp(GG) {
      let {
        kind: bG,
        icon: ZG,
        label: wG,
        number: SG,
        preview: LG,
        note: yG,
        tone: kG = null,
        share: UG,
        onExplain: YG
      } = GG;
      return (0, CL.jsxs)("button", {
        type: "button",
        className: uS()("NxLane", bG, {
          Warn: "warn" === kG,
          Danger: "danger" === kG
        }),
        onClick: YG,
        children: [(0, CL.jsxs)("span", {
          className: "NxLaneHead",
          children: [ZG, (0, CL.jsx)("span", {
            className: "NxLaneLabel",
            children: wG
          })]
        }), (0, CL.jsxs)("span", {
          className: "NxLaneNum",
          children: [SG, LG && (0, CL.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", LG]
          })]
        }), (0, CL.jsx)("span", {
          className: "NxLaneNote",
          children: yG
        }), void 0 !== UG && (0, CL.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, UG)) + "%"
          }
        })]
      })
    }

    function Bp(GG) {
      let {
        kind: bG,
        step: ZG,
        short: wG,
        planned: SG
      } = GG;
      return (0, CL.jsx)("i", {
        className: uS()("NxPipe", bG, `Step${ZG}`, {
          Short: wG,
          Planned: SG
        }),
        "aria-hidden": "true"
      })
    }

    function Gf(GG) {
      let {
        max: bG,
        bands: ZG,
        ticks: wG,
        now: SG,
        settle: LG,
        settleTone: yG,
        onExplain: kG
      } = GG;
      const UG = GG => Math.max(0, Math.min(bG, GG)) / bG * 100 + "%";
      let YG = 0;
      return (0, CL.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: kG,
        children: [(0, CL.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [ZG.map((GG => {
            const bG = {
              bottom: UG(YG),
              height: `calc(${UG(GG.upTo)} - ${UG(YG)})`
            };
            return YG = GG.upTo, (0, CL.jsx)("i", {
              className: uS()("NxGaugeBand", GG.kind),
              style: bG
            }, GG.kind)
          })), null !== SG && (0, CL.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: UG(SG)
            }
          }), void 0 !== LG && null !== LG && (0, CL.jsx)("i", {
            className: uS()("NxGaugeSettle", {
              Bad: "bad" === yG
            }),
            style: {
              bottom: UG(LG)
            }
          })]
        }), (0, CL.jsx)("span", {
          className: "NxGaugeTicks",
          children: wG.map((GG => (0, CL.jsx)("small", {
            style: {
              bottom: UG(GG)
            },
            children: GG
          }, GG)))
        })]
      })
    }

    function bf(GG) {
      const [bG, ZG] = (0, wG.useState)(null), [SG, LG] = (0, wG.useState)((() => {
        try {
          return null === window.localStorage.getItem(GG)
        } catch {
          return !1
        }
      })), yG = (0, wG.useRef)(null);
      (0, wG.useEffect)((() => () => {
        null !== yG.current && clearTimeout(yG.current)
      }), []);
      const kG = (0, wG.useCallback)((bG => {
          ZG(bG), LG(!1);
          try {
            window.localStorage.setItem(GG, "1")
          } catch {}
          null !== yG.current && clearTimeout(yG.current), yG.current = setTimeout((() => {
            yG.current = null, ZG(null)
          }), 5e3)
        }), [GG]),
        UG = (0, wG.useCallback)(((bG, ZG) => {
          const wG = `${GG}:${bG}`;
          try {
            if (null !== window.localStorage.getItem(wG)) return;
            window.localStorage.setItem(wG, "1")
          } catch {
            return
          }
          kG(ZG)
        }), [kG, GG]);
      return {
        explained: bG,
        hinting: SG,
        explain: kG,
        explainOnce: UG
      }
    }

    function Zf(GG) {
      let {
        text: bG,
        tone: ZG,
        explained: wG
      } = GG;
      return (0, CL.jsxs)("p", {
        className: uS()("NxStatus", null === wG ? ZG : "Explain"),
        "aria-live": "polite",
        children: [null !== wG && (0, CL.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== wG && void 0 !== wG ? wG : bG]
      })
    }
    const wf = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function Sf(GG, bG) {
      const ZG = Number(GG[bG]);
      return 1 === ZG || 2 === ZG || 3 === ZG ? ZG : 0
    }

    function Lf(GG) {
      return !!uU("reactor", GG.baf2RxNeed) || void 0 !== GG.baf2RxLayout && GG.baf2RxNeed.some((GG => {
        let [bG, ZG] = GG;
        return ZG > 0 && wf.includes(bG)
      }))
    }
    const yf = "buildAFactory2Game:";

    function kf(GG) {
      let {
        status: bG,
        store: ZG,
        busy: wG
      } = GG;
      const {
        t: SG
      } = (0, mS.w)();
      return function(GG) {
        return 0 !== (GG.baf2RxFlags & hb) && (!GG.baf2RxFormed || void 0 !== GG.baf2RxLayout)
      }(bG) ? (0, CL.jsx)(Xy.k, {
        disabled: !Lf(bG) || wG,
        onClick: () => {
          ZG.tap("fill", (() => {
            ZG.send("fill")
          }))
        },
        children: SG(void 0 !== bG.baf2RxLayout ? `${yf}rxFillLayout` : `${yf}rxFill`)
      }) : null
    }

    function Uf(GG) {
      let {
        status: bG,
        store: ZG,
        readOnly: SG,
        bare: LG = !1
      } = GG;
      const {
        t: yG
      } = (0, mS.w)(), kG = bG.baf2RxLayout, [UG, YG, VG] = bG.baf2RxDims, pG = (0, wG.useMemo)((() => {
        if (void 0 === kG) return 0;
        const GG = Uint8Array.from(kG, ((GG, bG) => Sf(kG, bG)));
        return bU([UG - 2, YG - 2, VG - 2], GG).max
      }), [kG, UG, YG, VG]);
      return void 0 === kG ? null : (0, CL.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!LG && (0, CL.jsx)("span", {
          className: "Baf2RxHint",
          children: yG(`${yf}rxLayoutLine`, {
            amount: vU(pG)
          })
        }), !SG && (0, CL.jsx)(Xy.d, {
          onClick: () => {
            ZG.send("layout", 0)
          },
          children: yG(`${yf}rxLayoutHide`)
        })]
      })
    }
    const Yf = "buildAFactory2Game:",
      Vf = {
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

    function pf(GG) {
      let {
        id: bG,
        title: ZG,
        body: wG,
        bodyParams: SG,
        yes: LG,
        cancel: yG,
        confirm: kG
      } = GG;
      const {
        t: UG
      } = (0, mS.w)();
      return (0, CL.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": bG,
        children: [(0, CL.jsx)("h3", {
          id: bG,
          children: UG(ZG)
        }), (0, CL.jsx)("p", {
          children: UG(wG, SG)
        }), (0, CL.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, CL.jsx)(Xy.h, {
            onClick: yG,
            children: UG(`${Yf}rxCancel`)
          }), (0, CL.jsx)(Xy.C, {
            onClick: kG,
            children: UG(LG)
          })]
        })]
      })
    }

    function ff(GG) {
      const [bG, ZG] = (0, wG.useState)((() => GG.get()));
      return (0, wG.useEffect)((() => (ZG(GG.get()), GG.subscribe((() => {
        ZG(GG.get())
      })))), [GG]), bG
    }

    function Qf(GG) {
      let {
        kind: bG,
        cap: ZG,
        busy: SG = !1,
        whyNot: LG = null,
        apart: yG
      } = GG;
      const {
        t: kG
      } = (0, mS.w)(), [UG, YG] = (0, wG.useState)(!1), VG = null !== LG, pG = (0, wG.useRef)(null);
      if ((0, wG.useEffect)((() => {
          VG && YG(!1)
        }), [VG]), (0, wG.useLayoutEffect)((() => {
          var GG;
          const bG = null === (GG = pG.current) || void 0 === GG ? void 0 : GG.firstElementChild;
          VG ? null === bG || void 0 === bG || bG.setAttribute("aria-disabled", "true") : SG || null === bG || void 0 === bG || bG.removeAttribute("aria-disabled")
        })), !UG || VG) return (0, CL.jsx)("span", {
        ref: pG,
        className: "Baf2RxApartWrap",
        children: (0, CL.jsx)(Xy.h, {
          disabled: SG,
          className: uS()({
            Baf2RxNotYet: VG
          }),
          onClick: () => {
            LG ? LG() : YG(!0)
          },
          children: kG(`${Yf}rxApart`)
        })
      });
      const fG = "battery" === bG,
        QG = void 0 === ZG ? `${Yf}batApartConfirmBodyPlan` : `${Yf}batApartConfirmBody`;
      return (0, CL.jsx)(pf, {
        id: `baf2ApartTitle_${bG}`,
        title: fG ? `${Yf}batApartConfirmTitle` : `${Yf}rxApartConfirmTitle`,
        body: fG ? QG : `${Yf}rxApartConfirmBody`,
        bodyParams: void 0 === ZG ? void 0 : {
          cap: ZG
        },
        yes: `${Yf}rxApart`,
        cancel: () => {
          YG(!1)
        },
        confirm: () => {
          YG(!1), yG()
        }
      })
    }

    function Kf(GG) {
      let {
        mood: bG,
        big: ZG
      } = GG;
      const wG = Vf[bG],
        SG = [];
      return wG.rows.forEach(((GG, bG) => {
        for (let ZG = 0; ZG < GG.length; ZG++) "." !== GG[ZG] && SG.push((0, CL.jsx)("rect", {
          x: ZG + 1,
          y: bG + 1,
          width: 1,
          height: 1,
          fill: "w" === GG[ZG] ? "#8fd3ff" : wG.colour
        }, `${ZG},${bG}`))
      })), (0, CL.jsxs)("svg", {
        className: uS()("Baf2RxFace", {
          Big: ZG,
          Alarm: "alarm" === bG
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, CL.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, CL.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), SG]
      })
    }

    function hf(GG) {
      return rL(GG, "+").replace("+", "")
    }

    function df(GG) {
      let {
        kind: bG,
        dims: ZG,
        cap: wG,
        disabled: SG,
        compact: LG,
        resize: yG
      } = GG;
      const {
        t: kG
      } = (0, mS.w)(), {
        min: UG,
        max: YG
      } = sZ(bG), VG = Math.min(wG, YG), pG = [`${Yf}rxWide`, `${Yf}rxTall`, `${Yf}rxDeep`], fG = {
        w: String(ZG[0]),
        h: String(ZG[1]),
        d: String(ZG[2]),
        blocks: String(FU(bG, ZG))
      };
      return (0, CL.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, CL.jsx)("div", {
          className: "Baf2RxSteppers",
          children: ZG.map(((GG, bG) => {
            const LG = wG => {
                const SG = [ZG[0], ZG[1], ZG[2]];
                SG[bG] = GG + wG, yG(SG)
              },
              fG = GG >= VG;
            return (0, CL.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, CL.jsx)("button", {
                type: "button",
                "aria-label": kG(`${Yf}rxSmaller`),
                disabled: SG || GG <= UG,
                onClick: () => {
                  LG(-1)
                },
                children: "\u2212"
              }), (0, CL.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [GG, (0, CL.jsx)("small", {
                  children: kG(pG[bG])
                })]
              }), (0, CL.jsx)("button", {
                type: "button",
                "aria-label": kG(`${Yf}rxBigger`),
                disabled: SG || fG,
                onClick: () => {
                  LG(1)
                },
                children: fG && wG < YG ? "\ud83d\udd12" : "+"
              })]
            }, pG[bG])
          }))
        }), !LG && (0, CL.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === bG ? kG(`${Yf}rxSizeLine`, {
            ...fG,
            water: String(IU(ZG))
          }) : kG(`${Yf}batSizeLine`, fG)
        })]
      })
    }

    function Jf(GG) {
      let {
        on: bG,
        label: ZG,
        disabled: wG,
        locked: SG,
        pending: LG,
        toggle: yG
      } = GG;
      return (0, CL.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": bG,
        disabled: wG,
        "aria-disabled": SG || void 0,
        className: uS()("Baf2RxSwitch", {
          On: bG,
          Locked: SG,
          Pending: LG
        }),
        onClick: yG,
        children: [(0, CL.jsx)("span", {
          className: "Baf2RxKnob"
        }), ZG]
      })
    }
    const rf = "buildAFactory2Game:",
      zf = .95;

    function Ef(GG, bG) {
      return 0 !== (GG.baf2RxFlags & bG)
    }

    function of(GG) {
      return "cryo" === GG ? xG.j : xG.k
    }

    function Xf(GG) {
      var bG, ZG, wG, SG, LG, yG, kG, UG, YG;
      return GG.baf2RxCryo ? {
        UQ: "cryo",
        usePerS: null !== (SG = GG.baf2RxCryoUse) && void 0 !== SG ? SG : 0,
        needPerS: null !== (LG = GG.baf2RxCryoNeed) && void 0 !== LG ? LG : 0,
        inPerS: null !== (yG = GG.baf2RxCryoIn) && void 0 !== yG ? yG : 0,
        stored: null !== (kG = GG.baf2RxCryoStored) && void 0 !== kG ? kG : 0,
        makersShort: null !== (UG = GG.baf2RxMixersShort) && void 0 !== UG ? UG : 0,
        waterBeside: null !== (YG = GG.baf2RxWaterUse) && void 0 !== YG ? YG : 0,
        pct: GG.baf2RxWater
      } : {
        UQ: "water",
        usePerS: null !== (bG = GG.baf2RxWaterUse) && void 0 !== bG ? bG : 0,
        needPerS: null !== (ZG = GG.baf2RxWaterNeed) && void 0 !== ZG ? ZG : 0,
        inPerS: GG.baf2RxWaterIn,
        stored: GG.baf2RxWaterStored,
        makersShort: null !== (wG = GG.baf2RxCondensersShort) && void 0 !== wG ? wG : 0,
        waterBeside: 0,
        pct: GG.baf2RxWater
      }
    }

    function uf(GG) {
      const bG = "running" === GG.baf2RxState || "idle" === GG.baf2RxState;
      return GG.baf2RxFormed && GG.baf2RxTarget !== GG.baf2RxThrottle && bG ? Cf(GG, GG.baf2RxTarget) : null
    }

    function Cf(GG, bG) {
      const [ZG, wG, SG, , , , LG, , yG] = GG.baf2RxStats, kG = Ef(GG, Qb), UG = Xf(GG), YG = UG.pct / 100, {
        gen: VG,
        out: pG,
        load: fG
      } = function(GG, bG, ZG, wG) {
        const SG = ZG ? tk : 1,
          LG = Math.min(GG.fuelHeat * SG * Math.max(0, Math.min(1, bG)), GG.size * SG);
        return {
          gen: LG,
          out: LG,
          load: fU(LG, GG.cooling, wG)
        }
      }({
        fuelHeat: ZG,
        cooling: wG,
        size: SG
      }, bG / 100, kG, YG), QG = KU(LG || GU(...GG.baf2RxDims)), KG = GG.baf2RxHeat, hG = Math.abs(fG - KG), dG = function(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : xG.k;
        const LG = ZG ? tk : 1,
          yG = Math.min(GG.fuelHeat * LG * bG / 100, GG.size * LG),
          kG = yG,
          UG = GG.fuelHeat * LG,
          YG = GG.cooling * pU(wG.pct / 100),
          VG = UG > 0 && YG < GG.size * LG ? Math.floor(100 * YG / UG) : 100,
          pG = yG * SG - wG.inPerS;
        return {
          out: kG,
          hotAbove: VG >= 100 ? null : Math.max(0, VG),
          waterSecs: wG.pct >= 100 && pG > 1e-6 ? Math.max(0, wG.stored) / pG : null
        }
      }({
        fuelHeat: ZG,
        cooling: wG,
        size: SG
      }, bG, kG, {
        pct: UG.pct,
        inPerS: UG.inPerS,
        stored: UG.stored
      }, of(UG.UQ));
      return {
        pct: bG,
        out: pG,
        coolPerS: VG * of(UG.UQ),
        pelletsPerMin: yG > 0 ? pG / yG * 60 : 0,
        settle: fG,
        settleS: hG > 2 ? QG * Math.log(hG / 2) : 0,
        overheatS: fG > 100 && KG < 100 ? QG * Math.log((fG - KG) / (fG - 100)) : null,
        hotAbove: dG.hotAbove,
        coolantSecs: dG.waterSecs
      }
    }

    function Wf(GG) {
      return GG.baf2RxThrottle <= 0 && "running" !== GG.baf2RxState ? 0 : Cf(GG, GG.baf2RxTarget).pelletsPerMin / 60
    }

    function mf(GG, bG) {
      if (GG <= 0 || bG <= 0) return 0;
      const ZG = GG / bG;
      return ZG < .25 ? 1 : ZG < .5 ? 2 : ZG < .8 ? 3 : 4
    }

    function If(GG, bG) {
      const ZG = {};
      for (const [wG, SG] of Object.entries(bG.params)) ZG[wG] = "time" === wG ? oL(GG, SG) : "amount" === wG ? vU(SG) : String(Math.round(SG));
      return GG(bG.key, ZG)
    }

    function Ff(GG, bG) {
      return {
        key: `${rf}${GG}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: bG
      }
    }

    function vf(GG) {
      var bG;
      const ZG = Ef(GG, Qb),
        wG = "running" === GG.baf2RxState,
        SG = rU(GG),
        LG = GG.baf2RxHeat;
      var yG;
      if (wG && LG > Tk) return {
        key: null !== (yG = SG.fix) && void 0 !== yG ? yG : `${rf}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const kG = wG ? Cf(GG, GG.baf2RxTarget).coolantSecs : null,
        UG = "cryo" === Xf(GG).UQ;
      if (null !== kG && kG >= 1 && kG <= 30) return Ff(UG ? "rxWarnCryo" : "rxWarnWater", "bad");
      const YG = xk(GU(...GG.baf2RxDims)).waste,
        VG = wG ? iU(GG, YG, Wf(GG)).fullInS : null;
      if (null !== VG && VG <= 120 && GG.baf2RxWaste >= .5 * YG) return Ff("rxWarnWaste", "warn");
      if (null !== kG && kG >= 1) return Ff(UG ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: kG
      });
      const pG = "noWater" === GG.baf2RxState && LG > Tk;
      if (GG.baf2RxDamage >= 1 && !pG) return Ff("rxDamagedHeals", "warn", {
        pct: GG.baf2RxDamage
      });
      if (GG.baf2RxCryoCut) return Ff("rxFix_cryoCut", "warn");
      const fG = Xf(GG);
      if ("noWater" === GG.baf2RxState && "cryo" === fG.UQ) return Ff("noWater" === GG.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const QG = SG.fix === `${rf}rxFix_scramCool` || "idle" === GG.baf2RxState && GG.baf2RxTarget <= 0;
      if (QG && GG.baf2RxFuel <= 0) return Ff("rxFix_noFuel", "warn");
      if (QG && GG.baf2RxWaterIn <= 0 && (null !== (bG = GG.baf2RxCryoIn) && void 0 !== bG ? bG : 0) <= 0) return Ff("rxFix_noWater", "warn");
      const KG = SG.fix === `${rf}rxFix_scramCool` ? EU(GG) : null;
      if (null !== KG) return {
        key: KG.key,
        params: {
          amount: KG.amount
        },
        tone: "info"
      };
      if ("running" !== GG.baf2RxState && "idle" !== GG.baf2RxState && null !== SG.fix) return {
        key: SG.fix,
        params: {},
        tone: "scram" === GG.baf2RxState ? "info" : pG ? "bad" : "warn"
      };
      var hG;
      if ("idle" === GG.baf2RxState && GG.baf2RxTarget <= 0) return {
        key: null !== (hG = SG.fix) && void 0 !== hG ? hG : `${rf}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const dG = GG.baf2RxCryoStarved;
      if ("cryo" === fG.UQ && dG && fG.needPerS > 0 && fG.usePerS < zf * fG.needPerS) return Ff("noWater" === dG ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const JG = "cryo" === fG.UQ,
        rG = fG.needPerS > 0 && fG.usePerS < zf * fG.needPerS;
      if (JG ? rG || fG.makersShort > 0 && fG.pct < 100 : fG.pct < 100) {
        const bG = JG && rG ? Math.floor(100 * fG.usePerS / fG.needPerS) : Math.min(100, fG.pct);
        if (fG.makersShort > 0) {
          return Ff(`${JG?"rxCryoShortLine":"rxWaterShortLine"}${1===fG.makersShort?"One":""}${!JG&&GG.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: bG,
            count: fG.makersShort
          })
        }
        return Ff(JG ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: bG
        })
      }
      const zG = function(GG) {
        const [bG, ZG, wG] = GG.baf2RxStats, SG = Xf(GG), LG = QU({
          fuelHeat: bG,
          cooling: ZG,
          size: wG
        }, "cryo" === SG.UQ ? xG.e : 1, !0);
        return Math.max(0, LG * of(SG.UQ) - SG.inPerS)
      }(GG);
      if (ZG && zG > 0) return Ff("cryo" === fG.UQ ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(zG)
      });
      if (LG >= YU) return Ff("rxHotLine", "warn");
      const EG = Cf(GG, GG.baf2RxTarget);
      var oG;
      if (null !== EG.overheatS) return Ff("rxWillOverheat", "bad", {
        pct: GG.baf2RxTarget,
        time: EG.overheatS,
        safe: null !== (oG = EG.hotAbove) && void 0 !== oG ? oG : 100
      });
      if (Math.abs(EG.settle - LG) >= 3) return Ff("rxSettling", "info", {
        pct: GG.baf2RxTarget,
        heat: Math.round(EG.settle),
        time: EG.settleS
      });
      const XG = EU(GG);
      if (null !== XG) return {
        key: XG.key,
        params: {
          amount: XG.amount
        },
        tone: "info"
      };
      const uG = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== bG && ("running" !== bG || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === GG.rods ? `${hU}rxLimitNoRods` : `${hU}rxLimit_${UU(GG)}`
      }({
        rods: GG.baf2RxStats[3],
        ...zU(GG)
      }, GG.baf2RxState, GG.baf2RxOut >= zf * GG.baf2RxMaxNow, !1);
      if (uG === `${rf}rxLimit_size`) {
        const [bG, , ZG, wG] = GG.baf2RxStats, SG = wG > 0 && bG > 0 ? Math.ceil(ZG / (bG / wG) - 1e-9) : wG, LG = GG.baf2RxDims.every((GG => GG >= sZ("reactor").max));
        if (SG < wG) return Ff(LG ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: SG,
          have: wG
        });
        if (LG) return Ff("rxLimit_sizeMax", "info")
      }
      return null !== uG ? {
        key: uG,
        params: {},
        tone: "info"
      } : Ff("rxSteady", "ok", {
        pct: GG.baf2RxTarget
      })
    }

    function af(GG) {
      var bG;
      if (GG.melted) return Ff("rxMeltedBody", "bad");
      if (-1 === GG.bad) return Ff("rxFix_noRoom", "warn");
      if (GG.bad > 0) return Ff(1 === GG.bad ? "rxBadOne" : "rxBad", "warn", {
        count: GG.bad
      });
      if (GG.left > 0) {
        const bG = 1 === GG.left ? "One" : "";
        return Ff(GG.canFill ? `rxPlanLeft${bG}` : `rxPlanLeftNoFill${bG}`, "info", {
          count: GG.left
        })
      }
      if (0 === GG.rods) return Ff("rxLimitNoRods", "warn");
      const ZG = null !== (bG = GG.idle) && void 0 !== bG ? bG : 0;
      return ZG > 0 ? Ff(1 === ZG ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: ZG
      }) : Ff("rxPlanReady", "ok")
    }

    function lf(GG) {
      return Math.floor(Math.max(0, GG[1] - 1) / 2)
    }

    function jf(GG) {
      if (GG >= wU && GG < SU) {
        const bG = GG - wU;
        return {
          key: 0 === bG ? `${rf}rxWhy_rodAlone` : 1 === bG ? `${rf}rxWhy_rodOne` : `${rf}rxWhy_rod`,
          params: {
            count: String(bG),
            heat: String(Mk * (1 + Ak * bG))
          }
        }
      }
      return GG === SU ? {
        key: `${rf}rxWhy_channel`,
        params: {
          amount: String(qk)
        }
      } : GG === LU ? {
        key: `${rf}rxWhy_deadChannel`,
        params: {}
      } : GG === yU ? {
        key: `${rf}rxWhy_graphite`,
        params: {}
      } : {
        key: `${rf}rxWhy_core`,
        params: {}
      }
    }
    const Pf = "buildAFactory2Game:";

    function Mf(GG, bG) {
      return 0 !== (GG.baf2RxFlags & bG)
    }

    function Af(GG) {
      let {
        status: bG,
        pending: ZG,
        store: wG,
        explain: SG
      } = GG;
      const {
        t: LG
      } = (0, mS.w)(), yG = Mf(bG, fb), kG = bG.baf2RxTarget, UG = bG.baf2RxThrottle, YG = function(GG) {
        return {
          press: () => {
            GG.throttlePress()
          },
          drag: bG => {
            GG.throttleDrag(bG)
          },
          release: () => {
            GG.throttleRelease()
          }
        }
      }(wG), VG = null === (pG = Cf(bG, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, pG - 10),
        red: pG
      };
      var pG;
      return (0, CL.jsxs)("div", {
        className: uS()("Baf2RxThrottle", {
          Off: yG
        }),
        onClick: () => {
          yG && SG(`${Pf}rxWhy_startFirst`)
        },
        children: [(0, CL.jsx)("span", {
          className: "HideNarrow",
          children: LG(`${Pf}rxThrottle`)
        }), (0, CL.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, CL.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: kG,
            disabled: yG,
            style: yG ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": LG(`${Pf}rxThrottle`),
            onPointerDown: () => {
              YG.press();
              const GG = () => {
                window.removeEventListener("pointerup", GG), window.removeEventListener("pointercancel", GG), YG.release()
              };
              window.addEventListener("pointerup", GG), window.addEventListener("pointercancel", GG)
            },
            onKeyUp: YG.release,
            onChange: GG => {
              YG.drag(Number(GG.target.value))
            }
          }), (0, CL.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${VG.amber}%, #ffb020 ${VG.amber}% ${VG.red}%, #ff3b30 ${VG.red}%)`
            },
            "aria-hidden": "true"
          }), (0, CL.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${UG}% + ${8*(1-UG/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, CL.jsxs)("b", {
          children: [`${kG}%`, (0, CL.jsx)("i", {
            className: uS()("Baf2RxPendingDot", {
              On: ZG
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function sf(GG) {
      let {
        status: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)(), wG = Cf(bG, bG.baf2RxTarget), SG = Xf(bG).UQ, LG = ZG("cryo" === SG ? `${Pf}rxRateCryo` : `${Pf}rxRateWater`, {
        rate: hf(wG.coolPerS)
      }), yG = ZG(`${Pf}rxChain`, {
        pct: String(bG.baf2RxTarget),
        out: vU(wG.out),
        heat: String(Math.round(wG.settle)),
        coolant: LG
      }), kG = null !== wG.coolantSecs ? wG.coolantSecs >= 1 ? ZG("cryo" === SG ? `${Pf}rxThrottleCryoOut` : `${Pf}rxThrottleWaterOut`, {
        time: oL(ZG, wG.coolantSecs)
      }) : ZG("cryo" === SG ? `${Pf}rxThrottleCryoDry` : `${Pf}rxThrottleWaterDry`) : null;
      return (0, CL.jsxs)("p", {
        className: "Baf2RxChain",
        children: [yG, null !== kG ? (0, CL.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", kG]
        }) : (0, CL.jsxs)("span", {
          children: [" \xb7 ", ZG(`${Pf}rxChainPellets`, {
            amount: aU(wG.pelletsPerMin)
          })]
        })]
      })
    }

    function qf(GG) {
      let {
        view: bG,
        store: ZG,
        explain: SG,
        explainOnce: LG
      } = GG;
      const {
        t: yG
      } = (0, mS.w)(), {
        status: kG
      } = bG, [UG, YG] = (0, wG.useState)(!1), VG = Mf(kG, fb), fG = Mf(kG, Qb), QG = !Mf(kG, db), KG = kG.baf2RxHeat > 100;
      return (0, CL.jsxs)(CL.Fragment, {
        children: [(0, CL.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, CL.jsx)(Af, {
            status: kG,
            pending: bG.throttlePending,
            store: ZG,
            explain: SG
          }), (0, CL.jsx)(Jf, {
            on: fG,
            label: fG ? yG(`${Pf}rxOdLeft`, {
              time: oL(yG, kG.baf2RxOdLeft)
            }) : yG(`${Pf}rxOverdrive`),
            locked: QG,
            pending: 0 !== (bG.pendingFlags & Qb),
            toggle: () => {
              QG ? SG(`${Pf}rxOverdriveTier`, {
                amount: String(pG(13))
              }) : fG ? ZG.setFlag(Qb, !1) : bG.odConfirmed ? ZG.setFlag(Qb, !0) : YG(!0)
            }
          }), VG || bG.startGuard ? (0, CL.jsx)(Xy.n, {
            disabled: bG.busy.has("start") || bG.startGuard,
            onClick: () => {
              ZG.tap("start", (() => {
                ZG.setFlag(fb, !1)
              }))
            },
            children: yG(bG.startGuard ? `${Pf}rxStarting` : `${Pf}rxStart`)
          }) : (0, CL.jsx)("span", {
            className: uS()("Baf2RxScram", {
              Pulse: KG
            }),
            children: (0, CL.jsx)(Xy.C, {
              onClick: () => {
                ZG.shutDown()
              },
              children: yG(`${Pf}rxScram`)
            })
          })]
        }), (0, CL.jsx)(sf, {
          status: kG
        }), UG && (0, CL.jsx)(pf, {
          id: "baf2RxOdTitle",
          title: `${Pf}rxOdConfirmTitle`,
          body: `${Pf}rxOdConfirmBody`,
          yes: `${Pf}rxOdConfirm`,
          cancel: () => {
            YG(!1)
          },
          confirm: () => {
            YG(!1), ZG.tap("odConfirm", (() => {
              ZG.confirmOverdrive(), ZG.setFlag(Qb, !0)
            })), LG(`${Pf}rxWhy_overdrive`)
          }
        })]
      })
    }

    function nf(GG) {
      let {
        view: bG,
        store: ZG,
        keepSize: wG
      } = GG;
      const {
        t: SG
      } = (0, mS.w)(), {
        status: LG
      } = bG;
      return (0, CL.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, CL.jsx)(df, {
          kind: "reactor",
          dims: bG.dims,
          cap: LG.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: GG => {
            ZG.resize(GG)
          }
        }), wG ? (0, CL.jsx)(Xy.h, {
          onClick: wG,
          children: SG(`${Pf}rxKeepSize`)
        }) : (0, CL.jsxs)(CL.Fragment, {
          children: [(0, CL.jsx)(Jf, {
            on: bG.guide,
            label: SG(`${Pf}rxGuide`),
            toggle: () => {
              ZG.toggleGuide()
            }
          }), Mf(LG, rb) && (0, CL.jsx)(Jf, {
            on: bG.starter,
            label: SG(`${Pf}rxStarter`),
            toggle: () => {
              ZG.toggleStarter()
            }
          }), (0, CL.jsx)(kf, {
            status: LG,
            store: ZG,
            busy: bG.busy.has("fill")
          })]
        })]
      })
    }

    function gf(GG) {
      let {
        need: bG,
        kind: ZG = "reactor",
        explain: wG
      } = GG;
      const {
        t: SG
      } = (0, mS.w)(), LG = bG.length <= 3, yG = bG.reduce(((GG, bG) => {
        let [, ZG] = bG;
        return GG + ZG
      }), 0);
      return (0, CL.jsxs)("div", {
        className: uS()("Baf2RxParts", {
          Compact: !LG
        }),
        onClick: () => {
          wG("battery" === ZG ? `${Pf}batWhy_store` : `${Pf}rxShellHint`)
        },
        children: [yG > 0 && (0, CL.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === yG ? SG(`${Pf}rxBlocksOne`) : SG(`${Pf}rxBlocks`, {
            blocks: String(yG)
          })
        }), 0 === bG.length ? (0, CL.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: SG("battery" === ZG ? `${Pf}batPartsDone` : `${Pf}rxShellDone`)
        }) : XU(bG).map((GG => {
          let [bG, ZG, wG] = GG;
          const yG = function(GG) {
            const bG = mU[GG];
            if (void 0 === bG) return null;
            const [ZG, wG, SG] = CU[bG].colour.map((GG => Math.round(255 * GG)));
            return `rgb(${ZG}, ${wG}, ${SG})`
          }(bG);
          return (0, CL.jsxs)("span", {
            className: "Baf2RxChip",
            title: SL(SG, bG),
            children: [(0, CL.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === yG ? {
                visibility: "hidden"
              } : {
                background: yG
              },
              title: SG(`${Pf}rxShopGhost`)
            }), (0, CL.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, CL.jsx)(FS.b, {
                itemName: bG,
                amount: 0
              })
            }), (0, CL.jsx)("span", {
              className: "Baf2RxChipName",
              children: LG ? `${ZG} ${kG=SL(SG,bG),kG.replace(/^(Reactor|Battery) (?=\S)/,"")}` : ZG
            }), wG >= ZG ? (0, CL.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, CL.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: LG ? SG(`${Pf}rxShopShort`, {
                count: String(ZG - wG)
              }) : "\u2212" + (ZG - wG)
            })]
          }, bG);
          var kG
        }))]
      })
    }
    const ef = "buildAFactory2Game:";

    function Rf(GG) {
      var bG, ZG, SG, LG, yG, kG, UG;
      let {
        store: YG,
        close: VG
      } = GG;
      const {
        t: pG
      } = (0, mS.w)(), fG = ny(), QG = ff(YG), {
        explained: KG,
        explain: hG
      } = bf("baf2RxExplained"), dG = (0, wG.useCallback)(((GG, bG) => {
        hG(pG(GG, bG))
      }), [hG, pG]), JG = null === QG || void 0 === QG ? void 0 : QG.status, rG = !0 === (null === JG || void 0 === JG ? void 0 : JG.baf2BatReadOnly), zG = GG => {
        JG && fG.send(pb(JG.baf2BatAt, GG))
      }, [EG, oG, XG] = null !== (bG = null === QG || void 0 === QG ? void 0 : QG.dims) && void 0 !== bG ? bG : [0, 0, 0], uG = vU(null !== (ZG = null === QG || void 0 === QG ? void 0 : QG.rp) && void 0 !== ZG ? ZG : 0), iG = !0 === (null === JG || void 0 === JG ? void 0 : JG.baf2BatFormed), CG = null !== (SG = null === JG || void 0 === JG ? void 0 : JG.baf2BatStored) && void 0 !== SG ? SG : 0, WG = Math.max(1, null !== (LG = null === JG || void 0 === JG ? void 0 : JG.baf2BatIslandCap) && void 0 !== LG ? LG : 1), mG = Math.min(100, 100 * CG / WG), IG = null === JG || void 0 === JG ? void 0 : JG.baf2BatNetPerS, FG = function(GG, bG, ZG) {
        return ZG > 0 && bG >= ZG ? "full" : void 0 !== GG && GG >= .05 ? "charging" : void 0 !== GG && GG <= -.05 && bG > 0 ? "draining" : "steady"
      }(IG, CG, null !== (yG = null === JG || void 0 === JG ? void 0 : JG.baf2BatIslandCap) && void 0 !== yG ? yG : 0), vG = null !== (kG = null === JG || void 0 === JG ? void 0 : JG.baf2BatMadePerS) && void 0 !== kG ? kG : 0, aG = null !== (UG = null === JG || void 0 === JG ? void 0 : JG.baf2BatUsedPerS) && void 0 !== UG ? UG : 0;
      let cG, lG = {},
        jG = "info";
      if (JG)
        if (iG) "charging" === FG ? (cG = `${ef}batLine_charging`, lG = {
          time: oL(pG, (WG - CG) / Math.max(.05, null !== IG && void 0 !== IG ? IG : 0))
        }, jG = "ok") : "draining" === FG ? (cG = `${ef}batLine_draining`, lG = {
          time: oL(pG, CG / Math.max(.05, -(null !== IG && void 0 !== IG ? IG : 0)))
        }, jG = "warn") : cG = "full" === FG ? `${ef}batLine_full` : CG <= 0 && aG > 0 ? `${ef}batLine_empty` : `${ef}batLine_steady`;
        else {
          var PG;
          const GG = af({
            left: JG.baf2BatNeed.reduce(((GG, bG) => {
              let [, ZG] = bG;
              return GG + ZG
            }), 0),
            bad: JG.baf2BatBad,
            rods: 1,
            canFill: !0 === JG.baf2BatCanFill,
            melted: !1
          });
          cG = GG.key, lG = {
            count: String(null !== (PG = GG.params.count) && void 0 !== PG ? PG : 0)
          }, jG = GG.tone
        }
      else cG = `${ef}batLine_steady`;
      const MG = Math.max(vG, aG, 1);
      return (0, CL.jsx)(oy.b, {
        close: VG,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, CL.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, CL.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CL.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, CL.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, CL.jsx)(FS.b, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, CL.jsxs)("div", {
                children: [(0, CL.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: pG(`${ef}batTitle`)
                }), JG && (0, CL.jsxs)("p", {
                  className: uS()("Baf2RxSubtitle", {
                    good: iG && "charging" === FG,
                    warn: iG && "draining" === FG
                  }),
                  children: [EG, "\xd7", oG, "\xd7", XG, " \xb7 ", pG(iG ? `${ef}batState_${FG}` : `${ef}rxSubPlanShort`)]
                })]
              })]
            }), (0, CL.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [JG && !rG && (0, CL.jsx)(Qf, {
                kind: "battery",
                cap: iG ? uG : void 0,
                busy: null === QG || void 0 === QG ? void 0 : QG.busy.has("apart"),
                apart: () => {
                  YG.tap("apart", (() => {
                    zG("apart")
                  }))
                }
              }), (0, CL.jsx)(Xy.j, {
                onClick: VG
              })]
            })]
          }), QG && JG && (0, CL.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, CL.jsxs)("div", {
              className: uS()("Baf2RxFlow Baf2BatFlow", {
                Plan: !iG
              }),
              children: [(0, CL.jsx)(xp, {
                kind: "Power",
                label: pG(`${ef}batMade`),
                number: iG ? `\u26a1 ${vU(vG)}/s` : "\u2014",
                note: pG(`${ef}batMadeNote`),
                share: iG ? vG / MG : void 0,
                onExplain: () => {
                  dG(`${ef}batWhy_made`)
                }
              }), (0, CL.jsx)(Bp, {
                kind: "Power",
                step: iG ? mf(vG, MG) : 0,
                planned: !iG
              }), (0, CL.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  dG(`${ef}batWhy_store`)
                },
                children: [(0, CL.jsx)(Gf, {
                  max: 100,
                  bands: [{
                    upTo: iG ? mG : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, CL.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, CL.jsx)("b", {
                    className: "Baf2BatStored",
                    children: iG ? pG(`${ef}batStoredOf`, {
                      amount: vU(CG),
                      cap: vU(JG.baf2BatIslandCap)
                    }) : pG(`${ef}batWillHold`, {
                      cap: uG
                    })
                  }), (0, CL.jsx)("span", {
                    children: pG(`${ef}batAdds`, {
                      cap: uG
                    })
                  }), iG && (0, CL.jsx)("small", {
                    children: pG(`${ef}batBreakNote`, {
                      cap: uG
                    })
                  })]
                })]
              }), (0, CL.jsx)(Bp, {
                kind: "Power",
                step: iG ? mf(aG, MG) : 0,
                planned: !iG
              }), (0, CL.jsx)(xp, {
                kind: "Power",
                label: pG(`${ef}batUsed`),
                number: iG ? `\u26a1 ${vU(aG)}/s` : "\u2014",
                note: pG(`${ef}batUsedNote`),
                share: iG ? aG / MG : void 0,
                onExplain: () => {
                  dG(`${ef}batWhy_used`)
                }
              })]
            }), (0, CL.jsx)(Zf, {
              text: pG(cG, lG),
              tone: jG,
              explained: KG
            }), rG ? (0, CL.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: pG(`${ef}rxNotYours`)
            }) : !iG && (0, CL.jsxs)(CL.Fragment, {
              children: [(0, CL.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, CL.jsx)(df, {
                  kind: "battery",
                  dims: QG.dims,
                  cap: JG.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: GG => {
                    YG.resize(GG)
                  }
                }), (0, CL.jsx)(Jf, {
                  on: QG.guide,
                  label: pG(`${ef}rxGuide`),
                  toggle: () => {
                    YG.toggleGuide()
                  }
                }), JG.baf2BatCanFill && (0, CL.jsx)(Xy.k, {
                  disabled: !uU("battery", JG.baf2BatNeed) || QG.busy.has("fill"),
                  onClick: () => {
                    YG.tap("fill", (() => {
                      zG("fill")
                    }))
                  },
                  children: pG(`${ef}rxFill`)
                })]
              }), (0, CL.jsx)(gf, {
                need: JG.baf2BatNeed,
                kind: "battery",
                explain: dG
              })]
            })]
          })]
        })
      })
    }
    const Tf = "buildAFactory2Game:",
      Hf = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function tf(GG, bG) {
      return GG === ZU ? null : bG ? "#4a4440" : GG < SU ? Hf[GG - wU] : GG === SU ? "#3fd0f0" : GG === LU ? "#2c3e4c" : "#55585e"
    }

    function Df(GG) {
      let {
        inner: bG,
        looks: ZG,
        layer: wG,
        setLayer: SG,
        glow: LG,
        melted: yG,
        explain: kG
      } = GG;
      const {
        t: UG
      } = (0, mS.w)(), [YG, VG, pG] = bG, fG = Math.max(0, Math.min(VG - 1, wG)), QG = [];
      for (let hG = 0; hG < pG; hG++)
        for (let GG = 0; GG < YG; GG++) {
          var KG;
          const bG = null !== (KG = ZG[(fG * pG + hG) * YG + GG]) && void 0 !== KG ? KG : ZU,
            wG = tf(bG, yG),
            SG = bG >= wU && bG < SU;
          QG.push(null === wG ? (0, CL.jsx)("circle", {
            cx: GG + .5,
            cy: hG + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${GG},${hG}`) : (0, CL.jsx)("rect", {
            x: GG + .06,
            y: hG + .06,
            width: .88,
            height: .88,
            fill: wG,
            opacity: SG && !yG ? .5 + .5 * LG : 1,
            onClick: GG => {
              GG.stopPropagation();
              const ZG = jf(bG);
              kG(ZG.key, ZG.params)
            }
          }, `${GG},${hG}`))
        }
      return (0, CL.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, CL.jsx)("svg", {
          className: uS()("Baf2RxMapGrid", {
            Melted: yG
          }),
          viewBox: `0 0 ${Math.max(1,YG)} ${Math.max(1,pG)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": UG(`${Tf}rxWhy_core`),
          onClick: () => {
            kG(`${Tf}rxWhy_core`, {})
          },
          children: QG
        }), VG > 1 && (0, CL.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, CL.jsx)("button", {
            type: "button",
            "aria-label": UG(`${Tf}rxLayerDown`),
            disabled: fG <= 0,
            onClick: () => {
              SG(fG - 1)
            },
            children: "\u25bc"
          }), (0, CL.jsxs)("span", {
            children: [(0, CL.jsx)("span", {
              className: "HideNarrow",
              children: UG(`${Tf}rxLayer`, {
                n: String(fG + 1),
                of: String(VG)
              })
            }), (0, CL.jsx)("span", {
              className: "ShowNarrow",
              children: UG(`${Tf}rxLayerShort`, {
                n: String(fG + 1),
                of: String(VG)
              })
            })]
          }), (0, CL.jsx)("button", {
            type: "button",
            "aria-label": UG(`${Tf}rxLayerUp`),
            disabled: fG >= VG - 1,
            onClick: () => {
              SG(fG + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Nf = "buildAFactory2Game:",
      Of = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Hk,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: JU,
        kind: "red"
      }],
      xf = [50, Hk, 100];

    function Bf(GG) {
      let {
        stats: bG,
        t: ZG,
        explain: wG
      } = GG;
      const SG = UU(bG),
        LG = Math.max(1, bG.fuelHeat, bG.cooling, bG.size),
        yG = [
          ["fuel", `${Nf}rxBarRods`, bG.fuelHeat],
          ["cooling", `${Nf}rxBarCooling`, bG.cooling],
          ["size", `${Nf}rxBarSize`, bG.size]
        ];
      return (0, CL.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          wG(`${Nf}rxWhy_bars`)
        },
        children: [(0, CL.jsx)("span", {
          className: "Baf2RxMostLine",
          children: ZG(`${Nf}rxMost`, {
            amount: vU(Math.min(bG.fuelHeat, bG.cooling, bG.size))
          })
        }), (0, CL.jsx)("span", {
          className: "Baf2RxMostBars",
          children: yG.map((GG => {
            let [bG, wG, yG] = GG;
            return (0, CL.jsxs)("span", {
              className: uS()("Baf2RxMostBar", bG, {
                Low: bG === SG
              }),
              children: [(0, CL.jsx)("small", {
                children: ZG(wG)
              }), (0, CL.jsx)("i", {
                children: (0, CL.jsx)("b", {
                  style: {
                    width: 100 * yG / LG + "%"
                  }
                })
              })]
            }, bG)
          }))
        })]
      })
    }

    function GQ(GG) {
      var bG;
      let {
        view: ZG,
        heat: SG,
        settle: LG,
        settleLine: yG,
        settleBad: kG,
        explain: UG
      } = GG;
      const {
        t: YG
      } = (0, mS.w)(), {
        status: VG
      } = ZG, pG = VG.baf2RxAt.join(","), [fG, QG] = (0, wG.useState)((() => lf(ZG.inner)));
      (0, wG.useEffect)((() => {
        QG(lf(ZG.inner))
      }), [pG, ZG.inner[1]]);
      const KG = null !== (bG = ZG.plan) && void 0 !== bG ? bG : zU(VG),
        hG = ZG.plan ? ZG.plan.powerPerUnit : VG.baf2RxStats[8],
        dG = null === SG ? null : "alarm" === (JG = dU(VG)) ? "red" : "hot" === JG ? "hot" : "warm" === JG ? "warm" : "cold";
      var JG;
      const rG = !VG.baf2RxFormed && function(GG, bG) {
          return 0 !== (GG.baf2RxFlags & bG)
        }(VG, Kb),
        zG = VG.baf2RxDamage,
        EG = VG.baf2RxDamageTrend;
      return (0, CL.jsxs)("div", {
        className: uS()("Baf2RxCore", null !== dG && void 0 !== dG ? dG : "plan"),
        children: [(0, CL.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, CL.jsx)(Df, {
            inner: ZG.inner,
            looks: ZG.looks,
            layer: fG,
            setLayer: QG,
            glow: VG.baf2RxFormed ? VG.baf2RxThrottle / 100 : 1,
            melted: rG,
            explain: UG
          }), (0, CL.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              UG(`${Nf}rxWhy_heat`)
            },
            children: [null !== SG ? (0, CL.jsxs)(CL.Fragment, {
              children: [(0, CL.jsx)("b", {
                children: YG(`${Nf}rxHeatPct`, {
                  pct: String(SG)
                })
              }), (0, CL.jsx)("span", {
                className: uS()("Baf2RxBand", dG),
                children: YG(`${Nf}rxBand_${dG}`)
              })]
            }) : (0, CL.jsx)("b", {
              children: YG(`${Nf}rxHeat`)
            }), null !== yG && (0, CL.jsx)("span", {
              className: uS()("Baf2RxSettle", {
                Bad: kG
              }),
              children: yG
            }), zG >= 1 && (0, CL.jsxs)("span", {
              className: uS()("Baf2RxDamage", EG),
              children: [YG(`${Nf}rxDamageLine`, {
                pct: String(zG)
              }), " \xb7 ", YG(`${Nf}rxDamage_${EG}`), (0, CL.jsx)("i", {
                children: (0, CL.jsx)("b", {
                  style: {
                    width: `${Math.min(100,zG)}%`
                  }
                })
              })]
            })]
          }), (0, CL.jsx)(Gf, {
            max: JU,
            bands: Of,
            ticks: xf,
            now: SG,
            settle: LG,
            settleTone: kG ? "bad" : null,
            onExplain: () => {
              UG(`${Nf}rxWhy_heat`)
            }
          })]
        }), (0, CL.jsx)(Bf, {
          stats: KG,
          t: YG,
          explain: UG
        }), hG > 0 && (0, CL.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            UG(`${Nf}rxWhy_perPellet`)
          },
          children: YG(`${Nf}rxPerPellet`, {
            amount: vU(hG)
          })
        })]
      })
    }

    function bQ(GG, bG) {
      var ZG;
      if (!GG.baf2RxStore) return {
        note: bG(`${Nf}rxUpTo`, {
          amount: vU(GG.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [wG, SG] = GG.baf2RxStore, LG = SG > 0 ? wG / SG : 0, yG = String(Math.floor(100 * LG)), kG = null !== (ZG = GG.baf2RxStoreNetPerS) && void 0 !== ZG ? ZG : 0, UG = function(GG) {
        var bG, ZG;
        const [wG, SG] = null !== (bG = GG.baf2RxStore) && void 0 !== bG ? bG : [0, 0], LG = null !== (ZG = GG.baf2RxStoreNetPerS) && void 0 !== ZG ? ZG : 0;
        return SG > 0 && wG >= SG - 1 ? "running" === GG.baf2RxState ? `${rf}rxStoreFull` : `${rf}rxStoreFullOnly` : LG > .05 ? `${rf}rxStoreLine` : LG < -.05 ? "running" === GG.baf2RxState ? `${rf}rxStoreUsesMore` : `${rf}rxStoreDraining` : `${rf}rxStorePct`
      }(GG);
      return {
        note: bG(UG, UG === `${Nf}rxStoreLine` ? {
          pct: yG,
          time: oL(bG, (SG - wG) / kG)
        } : {
          pct: yG
        }),
        share: LG
      }
    }

    function ZQ(GG) {
      let {
        view: bG,
        explain: ZG,
        preview: wG
      } = GG;
      const {
        t: SG
      } = (0, mS.w)(), {
        status: LG
      } = bG, yG = xk(GU(...bG.dims)), kG = Wf(LG), UG = Math.min(Math.round(LG.baf2RxFuel), yG.fuel), YG = "running" === LG.baf2RxState, VG = YG ? mf(LG.baf2RxOut, LG.baf2RxMaxNow) : 0, pG = function(GG, bG, ZG) {
        const wG = Xf(GG),
          SG = "cryo" === wG.UQ,
          LG = ZG ? ZG.coolantSecs : wG.pct >= 100 && GG.baf2RxOut >= 1 ? Cf(GG, GG.baf2RxThrottle).coolantSecs : null;
        let yG, kG = !1;
        if (wG.pct < 100) {
          const ZG = 1 === wG.makersShort,
            LG = !SG && GG.baf2RxCryoOpen ? "OrCryo" : "";
          yG = wG.makersShort > 0 ? bG(SG ? `${Nf}rxCryoAddMixer${ZG?"":"s"}` : `${Nf}rxWaterAddCondenser${ZG?"":"s"}${LG}`, {
            count: String(wG.makersShort)
          }) : bG(`${Nf}rxWaterNeeds`, {
            rate: hf(wG.needPerS)
          })
        } else if (null !== LG) yG = bG(`${Nf}rxWaterRunsOut`, {
          time: oL(bG, LG)
        });
        else if (wG.waterBeside > 0) yG = bG(`${Nf}rxCryoPlusWater`, {
          rate: hf(wG.waterBeside)
        });
        else {
          const GG = function(GG) {
            return GG.inPerS <= 0 ? "rxWaterNoSupply" : GG.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(wG);
          kG = "rxWaterNoSupply" === GG, yG = bG(`${Nf}${GG}`, {
            amount: vU(wG.stored)
          })
        }
        return {
          kind: SG ? "Cryo" : "Water",
          label: bG(SG ? `${Nf}rxCryo` : `${Nf}rxWater`),
          number: `${hf(wG.usePerS)}/s`,
          preview: ZG ? `${hf(ZG.coolPerS)}/s` : null,
          note: yG,
          tone: "noWater" === GG.baf2RxState ? "danger" : kG ? "warn" : (UG = wG.pct, YG = LG, UG < 100 ? "danger" : null === YG ? null : YG < 300 ? "danger" : "warn"),
          share: wG.pct / 100,
          why: SG ? `${Nf}rxWhy_cryo` : `${Nf}rxWhy_water`,
          short: wG.pct < 100
        };
        var UG, YG
      }(LG, SG, wG), fG = iU(LG, yG.waste, kG), QG = bQ(LG, SG), KG = Cf(LG, LG.baf2RxTarget), hG = YG && Math.abs(KG.settle - LG.baf2RxHeat) >= 3, dG = wG ? wG.pelletsPerMin / 60 : null;
      return (0, CL.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, CL.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, CL.jsx)(xp, {
            kind: "Fuel",
            label: SG(`${Nf}rxFuel`),
            number: String(UG),
            preview: null !== dG && dG > 0 && LG.baf2RxFuel > 0 ? oL(SG, LG.baf2RxFuel / dG) : null,
            note: LG.baf2RxFuel <= 0 ? SG(`${Nf}rxFuelEmpty`) : kG > 0 ? SG(`${Nf}rxFuelLeft`, {
              time: oL(SG, LG.baf2RxFuel / kG)
            }) : SG(1 === UG ? `${Nf}rxFuelPellet` : `${Nf}rxFuelPellets`),
            tone: "noFuel" === LG.baf2RxState ? "danger" : LG.baf2RxFuel < 2 ? "warn" : null,
            share: LG.baf2RxFuel / yG.fuel,
            onExplain: () => {
              ZG(`${Nf}rxWhy_fuel`)
            }
          }), (0, CL.jsx)(xp, {
            kind: pG.kind,
            label: pG.label,
            number: pG.number,
            preview: pG.preview,
            note: pG.note,
            tone: pG.tone,
            share: pG.share,
            onExplain: () => {
              ZG(pG.why)
            }
          })]
        }), (0, CL.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, CL.jsx)(Bp, {
            kind: "Fuel",
            step: VG,
            short: "noFuel" === LG.baf2RxState
          }), (0, CL.jsx)(Bp, {
            kind: pG.kind,
            step: VG,
            short: pG.short || "noWater" === LG.baf2RxState
          })]
        }), (0, CL.jsx)(GQ, {
          view: bG,
          heat: LG.baf2RxHeat,
          settle: Math.min(JU, KG.settle),
          settleLine: hG ? SG(`${Nf}rxHeatSettles`, {
            pct: String(Math.round(KG.settle)),
            time: oL(SG, KG.settleS)
          }) : null,
          settleBad: KG.settle > 100,
          explain: ZG
        }), (0, CL.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, CL.jsx)(Bp, {
            kind: "Power",
            step: VG
          }), (0, CL.jsx)(Bp, {
            kind: "Waste",
            step: YG && LG.baf2RxFuel - LG.baf2RxPu > 0 ? VG : 0,
            short: fG.full
          })]
        }), (0, CL.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, CL.jsx)(xp, {
            kind: "Power",
            label: SG(`${Nf}rxPowerOut`),
            number: `\u26a1 ${vU(LG.baf2RxOut)}/s`,
            preview: wG ? vU(wG.out) : null,
            note: QG.note,
            share: QG.share,
            onExplain: () => {
              ZG(`${Nf}rxWhy_power`)
            }
          }), (0, CL.jsx)(xp, {
            kind: "Waste",
            label: SG(`${Nf}rxWaste`),
            number: `${Math.floor(LG.baf2RxWaste)}/${yG.waste}`,
            note: fG.full ? SG(`${Nf}rxWasteFull`) : null !== fG.fullInS ? SG(`${Nf}rxWasteFullIn`, {
              time: oL(SG, fG.fullInS)
            }) : SG(`${Nf}rxWasteSpent`),
            tone: "wasteFull" === LG.baf2RxState ? "danger" : fG.full ? "warn" : null,
            share: LG.baf2RxWaste / yG.waste,
            onExplain: () => {
              ZG(`${Nf}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function wQ(GG) {
      let {
        view: bG,
        explain: ZG
      } = GG;
      const {
        t: wG
      } = (0, mS.w)(), SG = bG.plan;
      if (!SG) return null;
      const LG = SG.fuelHeat <= 0 ? null : SG.cooling > 0 ? Math.min(JU, 100 * SG.fuelHeat / SG.cooling) : JU,
        yG = wG(`${Nf}rxPlanAtFull`);
      return (0, CL.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, CL.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, CL.jsx)(xp, {
            kind: "Fuel",
            label: wG(`${Nf}rxFuel`),
            number: wG(`${Nf}rxPlanPerMin`, {
              amount: aU(SG.pelletsPerMin)
            }),
            note: wG(`${Nf}rxPlanPellets`),
            onExplain: () => {
              ZG(`${Nf}rxWhy_fuel`)
            }
          }), (0, CL.jsx)(xp, {
            kind: "Water",
            label: wG(`${Nf}rxWater`),
            number: `${hf(SG.waterPerS)}/s`,
            note: bG.status.baf2RxCryoOpen && SG.waterPerS > 0 ? wG(`${Nf}rxPlanOrCryo`, {
              rate: hf(QU(SG, xG.e) * xG.j)
            }) : yG,
            onExplain: () => {
              ZG(`${Nf}rxWhy_water`)
            }
          })]
        }), (0, CL.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, CL.jsx)(Bp, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, CL.jsx)(Bp, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, CL.jsx)(GQ, {
          view: bG,
          heat: null,
          settle: LG,
          settleLine: null === LG ? null : wG(`${Nf}rxPlanHeat`, {
            pct: String(Math.round(LG))
          }),
          settleBad: null !== LG && LG > 100,
          explain: ZG
        }), (0, CL.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, CL.jsx)(Bp, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, CL.jsx)(Bp, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, CL.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, CL.jsx)(xp, {
            kind: "Power",
            label: wG(`${Nf}rxPowerOut`),
            number: `\u26a1 ${vU(SG.max)}/s`,
            note: yG,
            onExplain: () => {
              ZG(`${Nf}rxWhy_power`)
            }
          }), (0, CL.jsx)(xp, {
            kind: "Waste",
            label: wG(`${Nf}rxWaste`),
            number: wG(`${Nf}rxPlanPerMin`, {
              amount: aU(SG.pelletsPerMin)
            }),
            note: wG(`${Nf}rxWasteSpent`),
            onExplain: () => {
              ZG(`${Nf}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const SQ = "buildAFactory2Game:",
      LQ = {
        key: `${SQ}rxWaiting`,
        params: {},
        tone: "info"
      };

    function yQ(GG, bG) {
      return 0 !== (GG.baf2RxFlags & bG)
    }

    function kQ(GG) {
      var bG, ZG;
      let {
        store: SG,
        close: LG
      } = GG;
      const {
        t: yG
      } = (0, mS.w)(), kG = ff(SG), {
        explained: UG,
        hinting: YG,
        explain: VG,
        explainOnce: pG
      } = bf("baf2RxExplained"), fG = (0, wG.useCallback)(((GG, bG) => {
        VG(yG(GG, bG))
      }), [VG, yG]), QG = (0, wG.useCallback)(((GG, bG) => {
        pG(GG, yG(GG, bG))
      }), [pG, yG]), [KG, hG] = (0, wG.useState)(!1), [dG, JG] = (0, wG.useState)(!1), rG = null === kG || void 0 === kG ? void 0 : kG.status, zG = null === rG || void 0 === rG ? void 0 : rG.baf2RxAt.join(","), EG = !0 === (null === rG || void 0 === rG ? void 0 : rG.baf2RxFormed);
      (0, wG.useEffect)((() => {
        JG(!1), hG(!1)
      }), [zG, EG]), (0, wG.useEffect)((() => (SG.opened(), () => {
        SG.closed()
      })), [SG]);
      const oG = void 0 !== rG && yQ(rG, Jb),
        XG = rG ? EG ? dU(rG) : null !== kG && void 0 !== kG && kG.plan ? function(GG, bG) {
          if (GG <= 0) return "off";
          if (bG <= 0) return "alarm";
          const ZG = 100 * GG / bG;
          return ZG < 50 ? "calm" : ZG < YU ? "warm" : ZG <= 100 ? "hot" : "alarm"
        }(kG.plan.fuelHeat, kG.plan.cooling) : "off" : "off",
        uG = rG ? rU(rG) : null,
        iG = kG ? kG.waiting ? LQ : EG ? vf(kG.status) : function(GG) {
          var bG, ZG;
          const {
            status: wG
          } = GG;
          return af({
            left: wG.baf2RxNeed.reduce(((GG, bG) => {
              let [, ZG] = bG;
              return GG + ZG
            }), 0),
            bad: wG.baf2RxBad,
            rods: null !== (bG = null === (ZG = GG.plan) || void 0 === ZG ? void 0 : ZG.rods) && void 0 !== bG ? bG : 0,
            canFill: yQ(wG, hb),
            melted: yQ(wG, Kb),
            idle: GG.looks.reduce(((GG, bG) => GG + (bG === LU ? 1 : 0)), 0)
          })
        }(kG) : null,
        CG = YG && null !== iG && ("ok" === iG.tone || "info" === iG.tone),
        WG = rG ? function(GG) {
          const bG = 0 !== (GG.baf2RxFlags & fb),
            ZG = GG.baf2RxHeat < Dk;
          return 0 !== (GG.baf2RxFlags & Kb) || ZG && (bG || !GG.baf2RxFormed) ? null : GG.baf2RxFormed && !bG ? {
            key: `${hU}rxApartScram`,
            params: {}
          } : {
            key: `${hU}rxApartCooling`,
            params: {
              pct: String(Dk)
            }
          }
        }(rG) : null,
        [mG, IG, FG] = null !== (bG = null === kG || void 0 === kG ? void 0 : kG.dims) && void 0 !== bG ? bG : [0, 0, 0],
        vG = `${mG}\xd7${IG}\xd7${FG}`;
      return (0, CL.jsx)(oy.b, {
        close: LG,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, CL.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, CL.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CL.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, CL.jsx)(Kf, {
                mood: XG
              }), (0, CL.jsxs)("div", {
                children: [(0, CL.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: yG(`${SQ}rxTitle`)
                }), kG && (0, CL.jsxs)("p", {
                  className: uS()("Baf2RxSubtitle", EG && (null === uG || void 0 === uG ? void 0 : uG.tone)),
                  children: [EG && !oG ? (0, CL.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": yG(`${SQ}rxChangeSize`),
                    onClick: () => {
                      if (!rG) return;
                      const GG = yQ(rG, fb);
                      var bG;
                      (bG = {
                        scram: GG,
                        heat: rG.baf2RxHeat
                      }).scram && bG.heat < Dk ? hG(!0) : fG(GG ? `${SQ}rxResizeCooling` : `${SQ}rxResizeHot`, {
                        pct: String(Dk)
                      })
                    },
                    children: [vG, " \u270e"]
                  }) : vG, " \xb7 ", yG(EG ? null !== (ZG = null === uG || void 0 === uG ? void 0 : uG.label) && void 0 !== ZG ? ZG : `${SQ}rxState_running` : `${SQ}rxSubPlanShort`)]
                })]
              })]
            }), (0, CL.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [kG && !oG && (0, CL.jsx)(Qf, {
                kind: "reactor",
                busy: kG.busy.has("apart"),
                whyNot: WG ? () => {
                  fG(WG.key, WG.params)
                } : null,
                apart: () => {
                  SG.tap("apart", (() => {
                    SG.send("apart")
                  }))
                }
              }), (0, CL.jsx)(Xy.j, {
                onClick: LG
              })]
            })]
          }), kG && iG && (0, CL.jsxs)("div", {
            className: "Baf2RxBody",
            children: [EG ? (0, CL.jsx)(ZQ, {
              view: kG,
              explain: fG,
              preview: uf(kG.status)
            }) : (0, CL.jsx)(wQ, {
              view: kG,
              explain: fG
            }), (0, CL.jsx)(Zf, {
              text: CG ? `${If(yG,iG)} ${yG(`${SQ}rxTapHint`)}` : If(yG, iG),
              tone: iG.tone,
              explained: UG
            }), oG ? (0, CL.jsxs)(CL.Fragment, {
              children: [(0, CL.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: yG(`${SQ}rxNotYours`)
              }), (0, CL.jsx)(Uf, {
                status: kG.status,
                store: SG,
                readOnly: !0
              })]
            }) : EG && !dG ? (0, CL.jsxs)(CL.Fragment, {
              children: [(0, CL.jsx)(qf, {
                view: kG,
                store: SG,
                explain: fG,
                explainOnce: QG
              }), void 0 !== kG.status.baf2RxLayout && Lf(kG.status) && (0, CL.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, CL.jsx)(Uf, {
                  status: kG.status,
                  store: SG,
                  readOnly: !1,
                  bare: !0
                }), (0, CL.jsx)(kf, {
                  status: kG.status,
                  store: SG,
                  busy: kG.busy.has("fill")
                })]
              })]
            }) : (0, CL.jsxs)(CL.Fragment, {
              children: [(0, CL.jsx)(nf, {
                view: kG,
                store: SG,
                keepSize: EG ? () => {
                  JG(!1)
                } : void 0
              }), oU(kG.dims, kG.status.baf2RxDims) && (0, CL.jsx)(gf, {
                need: kG.status.baf2RxNeed,
                explain: fG
              }), (0, CL.jsx)(Uf, {
                status: kG.status,
                store: SG,
                readOnly: !1
              })]
            }), KG && (0, CL.jsx)(pf, {
              id: "baf2ResizeTitle",
              title: `${SQ}rxResizeConfirmTitle`,
              body: `${SQ}rxResizeConfirmBody`,
              yes: `${SQ}rxChangeSize`,
              cancel: () => {
                hG(!1)
              },
              confirm: () => {
                hG(!1), JG(!0)
              }
            })]
          })]
        })
      })
    }
    class UQ {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(GG) {
        this.view = GG;
        for (const bG of this.listeners) bG()
      }
      get() {
        return this.view
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
    }

    function YQ(GG) {
      let {
        commands: bG,
        store: ZG,
        power: SG,
        water: LG,
        reactor: yG,
        battery: kG,
        collider: UG,
        terminal: YG,
        quests: VG,
        tutorial: pG,
        close: fG,
        leave: QG,
        askIslands: KG,
        showCore: hG,
        openSocial: dG
      } = GG;
      const {
        userContext: JG
      } = (0, jk.e)(), rG = lk.featureFlags.useSocialFeatures && JG.isLoggedIn(), [zG, EG] = (0, wG.useState)((() => ZG.get()));
      (0, wG.useEffect)((() => ZG.subscribe((() => {
        EG(ZG.get())
      }))), [ZG]);
      const oG = "islands" === (null === zG || void 0 === zG ? void 0 : zG.kind) ? zG.backToCore : void 0;
      return (0, CL.jsxs)(qy.Provider, {
        value: bG,
        children: ["core" === (null === zG || void 0 === zG ? void 0 : zG.kind) && (0, CL.jsx)(dp, {
          view: zG.core,
          close: fG,
          askIslands: KG
        }), "dropMap" === (null === zG || void 0 === zG ? void 0 : zG.kind) && (0, CL.jsx)(Ep, {
          message: zG.dropMap,
          quests: VG,
          close: fG,
          leave: QG
        }), "islands" === (null === zG || void 0 === zG ? void 0 : zG.kind) && (0, CL.jsx)(sp, {
          message: zG.islands,
          arrivedAtMs: zG.arrivedAtMs,
          close: oG ? () => {
            hG(oG)
          } : fG,
          leave: QG,
          openSocial: rG ? dG : null
        }), "quests" === (null === zG || void 0 === zG ? void 0 : zG.kind) && (0, CL.jsx)(jV, {
          store: VG,
          tutorial: pG,
          close: fG
        }), "transfer" === (null === zG || void 0 === zG ? void 0 : zG.kind) && (0, CL.jsx)(wV, {
          message: zG.transfer,
          arrivedAtMs: zG.arrivedAtMs,
          close: fG,
          leave: QG
        }), "power" === (null === zG || void 0 === zG ? void 0 : zG.kind) && (0, CL.jsx)(vy, {
          store: SG,
          close: fG
        }), "water" === (null === zG || void 0 === zG ? void 0 : zG.kind) && (0, CL.jsx)(hk, {
          store: LG,
          close: fG
        }), "reactor" === (null === zG || void 0 === zG ? void 0 : zG.kind) && (0, CL.jsx)(kQ, {
          store: yG,
          close: fG
        }), "battery" === (null === zG || void 0 === zG ? void 0 : zG.kind) && (0, CL.jsx)(Rf, {
          store: kG,
          close: fG
        }), "collider" === (null === zG || void 0 === zG ? void 0 : zG.kind) && (0, CL.jsx)(JY, {
          store: UG,
          close: fG
        }), "terminal" === (null === zG || void 0 === zG ? void 0 : zG.kind) && (0, CL.jsx)(Op, {
          store: YG,
          close: fG,
          send: GG => {
            bG.send(GG)
          }
        })]
      })
    }
    var VQ = ZG(38901);

    function pQ(GG, bG) {
      return GG.distSq - bG.distSq
    }
    class fQ {
      constructor() {
        this.list = [], this.pool = []
      }
      add(GG, bG, ZG, wG) {
        let SG = this.pool[this.list.length];
        SG || (SG = {
          x: 0,
          y: 0,
          distSq: 0,
          element: bG,
          liftRem: ZG,
          dot: wG
        }, this.pool.push(SG)), SG.x = GG.x, SG.y = GG.y, SG.distSq = GG.distSq, SG.element = bG, SG.liftRem = ZG, SG.dot = wG, this.list.push(SG)
      }
    }
    class QQ {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = GG, this.sizes = new WeakMap, this.observer = new ResizeObserver((GG => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const bG of GG) {
            const GG = bG.borderBoxSize[0];
            "dot" !== bG.target.dataset.crowded && 0 !== GG.inlineSize && 0 !== GG.blockSize && this.sizes.set(bG.target, {
              width: GG.inlineSize,
              height: GG.blockSize
            })
          }
        })), this.remPx = 16, this.vQ = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.PJ = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.PJ)
      }
      observe(GG) {
        this.observer.observe(GG)
      }
      unobserve(GG) {
        this.observer.unobserve(GG)
      }
      run(GG) {
        const bG = GG.list;
        bG.sort(pQ);
        const ZG = this.pxPerVw,
          wG = this.pxPerVh;
        this.vQ.length = 0, this.hud && this.vQ.push(...this.hud.boxes(performance.now()));
        for (const LG of bG) {
          var SG;
          const GG = this.sizes.get(LG.element);
          let bG = "no";
          if (GG && GG.width > 0) {
            const SG = LG.x * ZG,
              yG = LG.y * wG - LG.liftRem * this.remPx;
            this.fit(SG, yG, GG.width, GG.height) || (bG = LG.dot && this.fit(SG, yG, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (SG = LG.element.dataset.crowded) && void 0 !== SG ? SG : "no") !== bG && ("no" === bG ? delete LG.element.dataset.crowded : LG.element.dataset.crowded = bG), "hidden" !== bG && (0, VQ.d)(LG.element, LG.x, LG.y)
        }
        bG.length = 0
      }
      fit(GG, bG, ZG, wG) {
        const SG = GG - ZG / 2,
          LG = GG + ZG / 2,
          yG = bG - wG,
          kG = this.vQ;
        for (let UG = 0; UG < kG.length; UG += 4)
          if (SG < kG[UG + 1] - 2 && LG > kG[UG] + 2 && yG < kG[UG + 3] - 2 && bG > kG[UG + 2] + 2) return !1;
        return kG.push(SG, LG, yG, bG), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.PJ)
      }
    }
    const KQ = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class hQ {
      constructor() {
        this.cards = KQ.map((GG => document.getElementsByClassName(GG))), this.watched = KQ.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(GG) {
        GG - this.refreshedAt > 1e3 && (this.refreshedAt = GG, this.stale = !0);
        for (let ZG = 0; ZG < this.cards.length; ZG++) {
          var bG;
          const GG = null !== (bG = this.cards[ZG][0]) && void 0 !== bG ? bG : null;
          GG !== this.watched[ZG] && this.watch(ZG, GG)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let GG = 0; GG < this.watched.length; GG++) this.watch(GG, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const GG = this.list;
        GG.length = 0;
        for (const bG of this.watched) {
          if (!bG || bG.closest(".NoRoom")) continue;
          const ZG = bG.getBoundingClientRect();
          let wG = ZG.top,
            SG = ZG.bottom;
          if (bG === this.watched[0] && this.hud) {
            const GG = this.hud.getBoundingClientRect();
            wG = Math.max(wG, GG.top), SG = Math.min(SG, GG.bottom)
          }
          ZG.width > 0 && SG > wG && GG.push(ZG.left, ZG.right, wG, SG)
        }
      }
      watch(GG, bG) {
        const ZG = this.watched[GG];
        var wG, SG;
        (ZG && this.sizes.unobserve(ZG), this.watched[GG] = bG, this.stale = !0, bG && this.sizes.observe(bG), 0 === GG) && (null === (wG = this.hud) || void 0 === wG || wG.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (SG = null === bG || void 0 === bG ? void 0 : bG.closest(".Baf2QuestHud")) && void 0 !== SG ? SG : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var dQ = ZG(38909);
    class JQ {
      constructor(GG) {
        this.onElement = GG, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(GG) {
        const bG = [];
        for (let ZG = 0; ZG + 4 < GG.length; ZG += 5) {
          const wG = [GG[ZG], GG[ZG + 1], GG[ZG + 2]];
          bG.push({
            key: wG.join(","),
            pos: wG,
            status: SS[GG[ZG + 3]],
            kind: mb[GG[ZG + 4]]
          })
        }
        this.markers = bG, this.keys = new Set(bG.map((GG => {
          let {
            key: bG
          } = GG;
          return bG
        }))), this.notify()
      }
      covers(GG) {
        return this.keys.has(GG)
      }
      get() {
        return this.markers
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      bind(GG) {
        let bG = this.refs.get(GG);
        return bG || (bG = bG => {
          const ZG = this.elements.get(GG);
          var wG, SG;
          ZG && (null === (wG = this.onElement) || void 0 === wG || wG.call(this, ZG, !1));
          bG ? (this.elements.set(GG, bG), null === (SG = this.onElement) || void 0 === SG || SG.call(this, bG, !0)) : (this.elements.delete(GG), this.refs.delete(GG))
        }, this.refs.set(GG, bG)), bG
      }
      onAfterRender(GG, bG, ZG) {
        for (const wG of this.markers) {
          const SG = this.elements.get(wG.key);
          if (!SG) continue;
          const LG = (0, dQ.e)(SG, GG, bG, wG.pos, 1.05, 24);
          LG && ZG.add(LG, SG, .45, !0)
        }
      }
      notify() {
        for (const GG of this.listeners) GG()
      }
    }
    const rQ = {
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
    const zQ = (0, wG.memo)((function(GG) {
        let {
          status: bG,
          kind: ZG,
          bindRef: wG
        } = GG;
        const {
          t: SG
        } = (0, mS.w)(), LG = function(GG, bG) {
          var ZG;
          if ("noFuel" === GG) {
            var wG, SG;
            const GG = null === (wG = lb[bG]) || void 0 === wG || null === (SG = wG.fuels) || void 0 === SG ? void 0 : SG.find((GG => wZ.includes(GG)));
            return null !== GG && void 0 !== GG ? GG : rQ.noFuel
          }
          return void 0 !== (null === (ZG = lb[bG]) || void 0 === ZG ? void 0 : ZG.cryoMade) ? "noOutlet" === GG ? "Fluid Pipe" : "noInput" === GG ? "Biomass" : rQ[GG] : rQ[GG]
        }(bG, ZG);
        return (0, CL.jsxs)("div", {
          className: uS()("Baf2StallMarker", bG),
          ref: wG,
          hidden: !0,
          children: [LG && (0, CL.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, CL.jsx)(FS.b, {
              itemName: LG,
              amount: 0
            })
          }), (0, CL.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === bG ? "?" : "!"
          }), (0, CL.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: SG(`buildAFactory2Game:stallTag_${bG}`)
          })]
        })
      })),
      EQ = (0, wG.memo)((function(GG) {
        let {
          controller: bG
        } = GG;
        const [ZG, SG] = (0, wG.useState)((() => bG.get()));
        return (0, wG.useEffect)((() => (SG(bG.get()), bG.subscribe((() => {
          SG(bG.get())
        })))), [bG]), (0, CL.jsx)("div", {
          className: "Baf2StallMarkers",
          children: ZG.map((GG => (0, CL.jsx)(zQ, {
            status: GG.status,
            kind: GG.kind,
            bindRef: bG.bind(GG.key)
          }, GG.key)))
        })
      })),
      oQ = hZ.l + 150;
    class XQ {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(GG, bG) {
        const ZG = bG - GG;
        null === this.offset || ZG < this.offset ? this.offset = ZG : this.offset = Math.min(ZG, this.offset + .02 * (bG - this.sampledAt)), this.sampledAt = bG
      }
      toLocal(GG) {
        var bG;
        return GG + (null !== (bG = this.offset) && void 0 !== bG ? bG : 0) + oQ
      }
    }
    var uQ = ZG(38912);
    const iQ = 15 * Math.PI / 180,
      CQ = Math.SQRT2,
      WQ = [4, 2];

    function mQ(GG, bG) {
      const ZG = [1 / 0, 1 / 0, 1 / 0],
        wG = [-1 / 0, -1 / 0, -1 / 0];
      for (const UG of GG)
        for (let GG = 0; GG < 3; GG++) ZG[GG] = Math.min(ZG[GG], UG[GG]), wG[GG] = Math.max(wG[GG], UG[GG]);
      const SG = (ZG[0] + wG[0]) / 2,
        LG = (ZG[1] + wG[1]) / 2,
        yG = (ZG[2] + wG[2]) / 2;
      let kG = 0;
      for (const UG of GG) kG = Math.max(kG, Math.hypot(UG[0] - SG, UG[1] - LG, UG[2] - yG));
      return {
        x: SG,
        y: LG,
        z: yG,
        r: kG + bG
      }
    }

    function IQ(GG, bG, ZG) {
      const wG = bG.x - GG.x,
        SG = bG.y - GG.y,
        LG = bG.z - GG.z,
        yG = Math.sqrt(wG * wG + SG * SG + LG * LG);
      if (yG <= bG.r + 8) return 1;
      const kG = bG.r / yG,
        UG = Math.sqrt(1 - kG * kG),
        YG = UG < -GG.cosHalf,
        VG = (wG * GG.dx + SG * GG.dy + LG * GG.dz) / yG;
      if (!YG && VG < GG.cosHalf * UG - GG.sinHalf * kG) return 0;
      const pG = ZG * CQ * GG.frameMs * GG.pxPerBlock / (yG - bG.r);
      for (let fG = 0; fG < WQ.length; fG++)
        if (pG * WQ[fG] <= 1) return WQ[fG];
      return 1
    }

    function FQ(GG, bG) {
      return {
        name: GG,
        at: bG,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const vQ = [0, 0, 0];

    function aQ(GG, bG, ZG) {
      let [, wG, SG, LG, yG, kG] = bG;
      const UG = hZ.f * (null !== yG && void 0 !== yG ? yG : 1),
        YG = [];
      for (let QG = 0; QG < wG.length; QG += 3) YG.push([wG[QG] + .5, wG[QG + 1] + .65, wG[QG + 2] + .5]);
      const VG = [];
      for (let QG = 0; QG < YG.length - 1; QG++) {
        const [GG, bG] = [YG[QG], YG[QG + 1]];
        VG.push([(GG[0] + bG[0]) / 2, (GG[1] + bG[1]) / 2, (GG[2] + bG[2]) / 2])
      }
      const pG = YG.slice(1, -1),
        fG = new Uint8Array(pG.length);
      for (const QG of null !== kG && void 0 !== kG ? kG : []) fG[QG >> 1] |= 1 & QG ? 2 : 1;
      return {
        island: GG,
        length: pG.length,
        loop: LG,
        cellsPerMs: UG,
        edges: VG,
        fp: pG,
        bounds: mQ([...VG, ...pG], .3),
        changed: !0,
        culled: !1,
        hide: fG,
        items: SG.map((GG => {
          let [bG, wG] = GG;
          return FQ(bG, (0, hZ.B)(bG, wG, ZG, UG).at)
        }))
      }
    }

    function cQ(GG, bG) {
      const {
        items: ZG
      } = GG;
      if (0 === ZG.length) return;
      const wG = GG.length / GG.cellsPerMs,
        SG = Math.floor((bG - ZG[0].at) / wG) - 1;
      if (SG > 0)
        for (const LG of ZG) LG.at += SG * wG
    }

    function lQ(GG, bG) {
      const ZG = Math.min(Math.floor(bG), GG.length - 1),
        wG = GG.hide[ZG];
      return 0 !== wG && 0 !== (wG & (bG - ZG < .5 ? 1 : 2))
    }

    function jQ(GG, bG) {
      const ZG = Math.min(Math.floor(bG), GG.length - 1),
        wG = bG - ZG,
        SG = wG < .5,
        LG = SG ? GG.edges[ZG] : GG.fp[ZG],
        yG = SG ? GG.fp[ZG] : GG.edges[ZG + 1],
        kG = SG ? 2 * wG : 2 * wG - 1;
      vQ[0] = LG[0] + (yG[0] - LG[0]) * kG, vQ[1] = LG[1] + (yG[1] - LG[1]) * kG, vQ[2] = LG[2] + (yG[2] - LG[2]) * kG
    }
    const PQ = Math.PI / 4;
    class MQ {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new XQ, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.PJ = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(GG) {
        const bG = performance.now();
        this.clock.sample(GG.baf2BeltLinesAt, bG), this.queue(GG.baf2BeltLinesAt, GG, 0, null, null, 0), this.applyDue(bG)
      }
      onMoves(GG) {
        const bG = performance.now(),
          ZG = GG.baf2BeltMovesAt;
        this.clock.sample(ZG, bG);
        for (const [wG, SG, LG, yG] of GG.baf2BeltMoveList) null === SG ? this.queue(ZG - LG, null, wG, null, null, null !== yG && void 0 !== yG ? yG : 0) : this.queue(ZG - LG, null, wG, SG, null !== yG && void 0 !== yG ? yG : null, 0);
        this.applyDue(bG)
      }
      start(GG) {
        this.pool = new uQ.d(GG, {
          scale: .3,
          yaw: PQ
        }, 64), this.PJ(), window.addEventListener("resize", this.PJ)
      }
      onAfterRender(GG) {
        const {
          pool: bG
        } = this;
        if (!bG) return;
        const ZG = performance.now(),
          wG = ZG - this.lastRenderAt;
        this.lastRenderAt = ZG, wG < 100 && (this.frameMs += .1 * (wG - this.frameMs));
        const SG = ZG + this.frameMs;
        this.applyDue(SG);
        const LG = GG.cameraPosition,
          yG = bG.follow(LG);
        this.setView(GG, LG);
        const kG = this.frame++;
        for (let UG = 0; UG < this.shown.length; UG++) {
          const GG = this.shown[UG],
            ZG = IQ(this.view, GG.bounds, GG.cellsPerMs),
            wG = GG.culled && 0 !== ZG;
          if (GG.culled = 0 === ZG, !yG && !GG.changed && !wG && (0 === ZG || (kG + UG) % ZG !== 0)) continue;
          GG.changed = !1, GG.loop && (cQ(GG, SG), (0, hZ.z)(GG.items, GG.length, SG, GG.cellsPerMs));
          let LG = GG.length;
          for (let kG = 0; kG < GG.items.length; kG++) {
            const ZG = GG.items[kG],
              wG = (0, hZ.D)(ZG.at, LG, SG, GG.cellsPerMs);
            if (LG = wG - hZ.q, lQ(GG, wG)) {
              null === ZG.kind || ZG.hidden || (ZG.kind.hide(ZG.slot), ZG.hidden = !0);
              continue
            }
            let UG = ZG.kind;
            if (null === UG) {
              if (UG = bG.kindOf(ZG.name), null === UG) continue;
              ZG.kind = UG, ZG.slot = UG.take(), ZG.hidden = !0, ZG.drawn = NaN
            } else if (wG === ZG.drawn && !ZG.hidden && !yG) continue;
            jQ(GG, wG), UG.write(ZG.slot, vQ[0], vQ[1], vQ[2]), ZG.hidden = !1, ZG.drawn = wG
          }
        }
        bG.commit()
      }
      dispose() {
        var GG;
        window.removeEventListener("resize", this.PJ), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (GG = this.pool) || void 0 === GG || GG.dispose(), this.pool = null
      }
      setView(GG, bG) {
        const {
          cameraDir: ZG,
          lastDir: wG
        } = this, SG = GG.cameraDirection;
        for (let VG = 0; VG < 3; VG++) wG[VG] = ZG[VG], ZG[VG] = SG[VG];
        const LG = ZG[0] * wG[0] + ZG[1] * wG[1] + ZG[2] * wG[2],
          yG = Number.isNaN(LG) ? 0 : Math.acos(Math.min(1, Math.max(-1, LG))),
          {
            width: kG,
            height: UG
          } = this,
          YG = GG.tanHalfFovX;
        ! function(GG, bG, ZG, wG, SG, LG, yG) {
          let kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          GG.x = bG[0], GG.y = bG[1], GG.z = bG[2], GG.dx = ZG[0], GG.dy = ZG[1], GG.dz = ZG[2];
          const UG = Math.min(Math.PI, Math.atan(Math.sqrt(wG * wG + SG * SG)) + iQ + kG);
          GG.cosHalf = Math.cos(UG), GG.sinHalf = Math.sin(UG), GG.pxPerBlock = LG / (2 * SG), GG.frameMs = yG
        }(this.view, bG, ZG, YG, YG * UG / kG, UG * window.devicePixelRatio, this.frameMs, yG)
      }
      queue(GG, bG, ZG, wG, SG, LG) {
        const yG = Math.max(this.clock.toLocal(GG), this.lastPendingAt);
        this.lastPendingAt = yG, this.pending.push({
          at: yG,
          lines: bG,
          line: ZG,
          name: wG,
          pos: SG,
          idx: LG
        })
      }
      applyDue(GG) {
        const {
          pending: bG
        } = this;
        for (; this.pendingHead < bG.length && bG[this.pendingHead].at <= GG;) {
          const GG = bG[this.pendingHead++];
          if (GG.lines) this.applyLines(GG.lines, GG.at), GG.lines = null;
          else {
            const bG = this.lines.get(GG.line);
            bG && this.applyMove(bG, GG, GG.at)
          }
        }
        this.pendingHead === bG.length ? (bG.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > bG.length && (bG.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(GG, bG) {
        this.clearIsland(GG.baf2BeltIsland);
        for (const ZG of GG.baf2BeltLineList) this.lines.set(ZG[0], aQ(GG.baf2BeltIsland, ZG, bG));
        this.shown = [...this.lines.values()]
      }
      applyMove(GG, bG, ZG) {
        let {
          name: wG,
          pos: SG,
          idx: LG
        } = bG;
        GG.changed = !0, GG.loop && (cQ(GG, ZG), (0, hZ.z)(GG.items, GG.length, ZG, GG.cellsPerMs)), null !== wG && null !== SG ? (0, hZ.A)(GG.items, GG.length, FQ(wG, ZG), SG, ZG, GG.cellsPerMs) : null !== wG ? GG.items.push(FQ(wG, ZG)) : GG.items.length > LG && this.release((0, hZ.H)(GG.items, GG.length, ZG, GG.cellsPerMs, LG))
      }
      clearIsland(GG) {
        for (const [bG, ZG] of this.lines)
          if (ZG.island === GG) {
            for (const GG of ZG.items) this.release(GG);
            this.lines.delete(bG)
          }
      }
      release(GG) {
        null !== GG.kind && (GG.kind.release(GG.slot), GG.kind = null, GG.slot = -1, GG.hidden = !0, GG.drawn = NaN)
      }
    }
    var AQ = ZG(36946),
      sQ = ZG(38925);

    function qQ(GG) {
      let {
        depth: bG,
        store: ZG,
        t: SG
      } = GG;
      const LG = function(GG) {
        const [bG, ZG] = (0, wG.useState)(GG.lastPlayerY());
        return (0, SV.g)(MS, ZG), (0, wG.useEffect)((() => {
          ZG(GG.lastPlayerY())
        }), [GG]), bG
      }(ZG);
      if (null === LG) return null;
      const [yG, kG] = bG, UG = LG > yG ? yG : null !== kG && LG < kG ? kG : null, YG = {
        y: EL(LG),
        target: null === UG ? "" : EL(UG)
      };
      return (0, CL.jsx)("span", {
        className: uS()("Baf2QuestDepth", {
          Reached: null === UG
        }),
        children: SG(`${UV}${null===UG?"questDepthReached":"questDepth"}`, YG)
      })
    }

    function nQ(GG) {
      let {
        also: bG,
        view: ZG,
        t: wG
      } = GG;
      return (0, CL.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, CL.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, CL.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, CL.jsx)("strong", {
            children: wG(`${UV}questAlsoDownHere`)
          }), (0, CL.jsx)("span", {
            className: "Baf2QuestChips",
            children: bG.map((GG => {
              let [bG, SG, LG, yG] = GG;
              return (0, CL.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": wG(`${UV}questAlsoItem`, {
                  item: VV(wG, ZG.itemNames[bG], bG),
                  have: String(SG),
                  need: String(LG)
                }),
                children: [(0, CL.jsx)(QV, {
                  item: bG
                }), (0, CL.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${SG}/${LG}`
                }), null !== yG && (0, CL.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: wG(`${UV}questAlsoDepth`, {
                    y: EL(yG)
                  })
                })]
              }, bG)
            }))
          })]
        })]
      })
    }
    var gQ = ZG(3395);

    function eQ(GG) {
      let {
        expanded: bG,
        inventoryOpen: ZG,
        children: SG
      } = GG;
      const LG = (0, wG.useRef)(null);
      return (0, wG.useEffect)((() => {
        const GG = LG.current,
          bG = null === GG || void 0 === GG ? void 0 : GG.closest(".RightElements"),
          wG = null === GG || void 0 === GG ? void 0 : GG.firstElementChild;
        if (!GG || !bG || !wG) return;
        return (0, sQ.c)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [bG, wG], (() => {
          const SG = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === SG.length) return;
          const LG = Math.max(...SG.map((GG => GG.getBoundingClientRect().bottom))),
            yG = bG.getBoundingClientRect(),
            kG = ZG ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (kG) {
            const bG = parseFloat(getComputedStyle(wG).marginLeft) + parseFloat(getComputedStyle(wG).marginRight),
              ZG = yG.right - kG.getBoundingClientRect().right - 8 - bG;
            GG.style.setProperty("--baf2-quest-room", `${ZG}px`), GG.classList.toggle("NoRoom", ZG < 150)
          } else GG.style.removeProperty("--baf2-quest-room"), GG.classList.remove("NoRoom");
          const UG = LG - yG.top + 8,
            YG = function(GG, bG, ZG) {
              const wG = bG.getBoundingClientRect(),
                SG = GG.getBoundingClientRect(),
                LG = (0, gQ.f)(SG.left, SG.right, wG.top + ZG);
              if (null !== LG && LG < wG.bottom) return LG - wG.top;
              return wG.height - (parseFloat(getComputedStyle(bG).paddingBottom) || 0)
            }(GG, bG, UG) - 8,
            VG = window.innerHeight / 2 - yG.top,
            {
              top: pG,
              maxHeight: fG
            } = function(GG, bG, ZG, wG, SG) {
              const LG = Math.min(ZG, Math.max(0, bG - GG)),
                yG = SG ? GG : Math.max(GG, Math.min(wG - LG / 2, bG - LG));
              return {
                top: yG,
                maxHeight: Math.max(0, bG - yG)
              }
            }(UG, YG, function(GG) {
              const bG = GG.firstElementChild,
                ZG = bG ? bG.scrollHeight - bG.clientHeight : 0;
              return GG.getBoundingClientRect().height + Math.max(0, ZG)
            }(wG), VG, iL());
          GG.style.top = `${pG}px`, GG.style.maxHeight = `${fG}px`
        }))
      }), [ZG]), (0, CL.jsx)("div", {
        ref: LG,
        className: uS()("Baf2QuestHud", {
          Expanded: bG
        }),
        children: SG
      })
    }

    function RQ(GG) {
      let {
        amount: bG,
        t: ZG
      } = GG;
      return (0, CL.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, CL.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, CL.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: ZG(`${UV}questStepsDone`, {
            amount: String(bG)
          })
        })]
      })
    }

    function TQ(GG) {
      let {
        pulse: bG
      } = GG;
      return 0 === bG ? null : (0, CL.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, bG)
    }

    function HQ(GG) {
      var bG;
      let {
        store: ZG
      } = GG;
      const SG = (0, SV.j)(PS, ZG.get()),
        [LG, yG] = (0, wG.useState)(!1),
        {
          t: kG
        } = (0, mS.w)(),
        UG = (0, XL.h)(uL),
        {
          openInGameMenuName: YG,
          openEverythingMenuName: VG
        } = (0, ES.o)(["openInGameMenuName", "openEverythingMenuName"]),
        pG = "inventory" === YG && null === VG,
        fG = null !== YG && !pG || null !== VG;
      if (! function(GG) {
          return null !== GG.name || null !== GG.side
        }(SG) || fG || "off" === SG.tutorial) return null;
      const QG = eS(SG.rows),
        KG = QG.filter((GG => GG.done)).length,
        hG = function(GG, bG) {
          const ZG = HS(GG);
          let wG = 0;
          return GG.filter(((GG, SG) => !!GG.justFinished || !(GG.done || SG < ZG || wG > bG) && (wG++, !0)))
        }(SG.rows, UG ? 0 : 2),
        dG = UG ? hG : function(GG, bG) {
          const ZG = bG.filter((GG => !GG.justFinished));
          if (ZG.length < 2) return [...bG];
          const wG = GG.indexOf(ZG[0]),
            SG = GG.indexOf(ZG[ZG.length - 1]),
            LG = new Set(eS(GG));
          return GG.filter(((GG, ZG) => bG.includes(GG) || GG.done && LG.has(GG) && ZG > wG && ZG < SG))
        }(SG.rows, hG),
        JG = LG ? SG.rows : dG,
        rG = LG || UG ? [] : function(GG, bG) {
          const ZG = new Array(bG.length + 1).fill(0),
            wG = new Set(eS(GG));
          let SG = 0;
          for (const LG of GG) SG < bG.length && LG === bG[SG] ? SG++ : LG.done && wG.has(LG) && ZG[SG]++;
          return ZG
        }(SG.rows, dG),
        zG = LG || dG.length < SG.rows.length || null !== SG.reward,
        EG = gS(SG),
        oG = EG ? kG(`${UV}questLineComplete`) : SG.tier ? dV(kG, SG.tier) : kG(`${UV}currentQuest`),
        XG = function(GG) {
          var bG, ZG;
          if (gS(GG)) return null;
          const wG = null === (bG = GG.chapters) || void 0 === bG ? void 0 : bG.find((bG => {
            let [ZG] = bG;
            return ZG === GG.tier
          }));
          if (!wG) return null;
          const SG = wG[1].filter((GG => !GG[4]));
          if (0 === SG.length) return null;
          const LG = null === (ZG = GG.name) || void 0 === ZG ? void 0 : ZG[0],
            yG = GG => SG.findIndex((bG => bG[0] === LG && (!GG || !bG[3]))),
            kG = yG(!0),
            UG = kG >= 0 ? kG : yG(!1);
          if (UG >= 0) return [UG + 1, SG.length];
          const YG = SG.filter((GG => GG[3])).length;
          return [Math.min(YG + 1, SG.length), SG.length]
        }(SG);
      return (0, CL.jsx)(AQ.d, {
        placement: "topRight",
        children: (0, CL.jsx)(eQ, {
          expanded: LG,
          inventoryOpen: pG,
          children: (0, CL.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: YV,
            children: [null !== SG.name && (0, CL.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, CL.jsx)(TQ, {
                pulse: SG.pulse
              }), (0, CL.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, CL.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [oG, XG && (0, CL.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": kG(`${UV}questPlaceLabel`, {
                      n: String(XG[0]),
                      total: String(XG[1])
                    }),
                    children: kG(`${UV}questPlace`, {
                      n: String(XG[0]),
                      total: String(XG[1])
                    })
                  }), SG.tier && SG.core && !EG && (0, CL.jsx)(JV, {
                    core: SG.core,
                    t: kG
                  })]
                })
              }), (0, CL.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: kG(`${UV}${SG.name[0]}`, pV(SG.name[1]))
              }), (QG.length > 1 || zG) && (0, CL.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [QG.length > 1 && (0, CL.jsx)(rV, {
                  rows: QG,
                  t: kG
                }), zG && (0, CL.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": LG,
                  onClick: () => {
                    yG(!LG)
                  },
                  children: [(0, CL.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: kG(`${UV}questStepsToggle`, {
                      done: String(KG),
                      total: String(QG.length)
                    })
                  }), (0, CL.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: LG ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, CL.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [JG.map(((GG, bG) => {
                  var LG;
                  const yG = GG.current && SG.depth;
                  return (0, CL.jsxs)(wG.Fragment, {
                    children: [(null !== (LG = rG[bG]) && void 0 !== LG ? LG : 0) > 0 && (0, CL.jsx)(RQ, {
                      amount: rG[bG],
                      t: kG
                    }), (0, CL.jsx)(zV, {
                      row: GG,
                      view: SG,
                      t: kG,
                      extra: yG && (0, CL.jsx)(qQ, {
                        depth: yG,
                        store: ZG,
                        t: kG
                      })
                    })]
                  }, GG.id)
                })), (null !== (bG = rG[JG.length]) && void 0 !== bG ? bG : 0) > 0 && (0, CL.jsx)(RQ, {
                  amount: rG[JG.length],
                  t: kG
                }), SG.also.length > 0 && (0, CL.jsx)(nQ, {
                  also: SG.also,
                  view: SG,
                  t: kG
                })]
              }), LG && SG.reward && (0, CL.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [kG(`${UV}questReward`), (0, CL.jsx)(QV, {
                  item: SG.reward
                }), VV(kG, SG.itemNames[SG.reward], SG.reward)]
              })]
            }), SG.side && (0, CL.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [qS(SG, Date.now()) && (0, CL.jsx)(TQ, {
                pulse: SG.sideCameUpAt
              }), (0, CL.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: kG(`${UV}questSide`)
              }), (0, CL.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: kG(`${UV}${SG.side.name[0]}`, pV(SG.side.name[1]))
              }), (0, CL.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, CL.jsx)(zV, {
                  row: SG.side.row,
                  view: SG,
                  t: kG
                })
              })]
            })]
          })
        })
      })
    }
    const tQ = "baf2ToastView";
    class DQ {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = GG, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: GG,
          holdMs: bG
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const GG = this.dropCovered();
          GG && this.show(GG.message, GG.holdMs)
        }), 250));
        const ZG = this.dropCovered();
        null !== ZG && (ZG.holdMs > 0 || "baf2ToastCelebrate" === ZG.message.baf2ToastStyle) && "baf2ToastCelebrate" !== GG.baf2ToastStyle && this.show(ZG.message, ZG.holdMs);
        const wG = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== GG.baf2ToastStyle && wG > 0) return this.pending = {
          message: GG,
          holdMs: bG
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const GG = this.pending;
          this.pending = null, GG && this.present(GG.message, GG.holdMs)
        }), wG));
        this.present(GG, bG)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(GG, bG) {
        this.clearTimers(), this.pending = null;
        const ZG = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: GG.baf2ToastText,
          style: GG.baf2ToastStyle,
          swapped: ZG,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === GG.baf2ToastStyle ? 1500 : bG), this.xh();
        const wG = Math.min(8e3, Math.max(1e3, GG.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), wG)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.xh(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.xh()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const GG = this.covering;
        return this.covering = null, GG
      }
      xh() {
        lS.l.xh(tQ, this.view, !0)
      }
    }
    var NQ = ZG(59);
    const OQ = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function xQ(GG) {
      let {
        store: bG
      } = GG;
      const ZG = (0, SV.j)(tQ, bG.get()),
        {
          openInGameMenuName: wG,
          openEverythingMenuName: SG
        } = (0, ES.o)(["openInGameMenuName", "openEverythingMenuName"]),
        LG = ZG && (0, CL.jsxs)("div", {
          className: uS()("Baf2Toast", OQ[ZG.style], {
            Swapped: ZG.swapped,
            Leaving: ZG.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === ZG.style && (0, CL.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, CL.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, CL.jsx)(vS.c, {
              text: ZG.text
            })
          })]
        }, ZG.id);
      return null !== wG && null === SG ? (0, NQ.createPortal)((0, CL.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: LG
      }), document.body) : (0, CL.jsx)(AQ.d, {
        children: LG
      })
    }
    const BQ = "baf2AreaView";
    class GK {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.Ik = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.Ik = null
      }
      arrive(GG, bG) {
        bG && function(GG) {
          return "home" === GG.baf2AreaPlace && void 0 !== GG.baf2AreaNameText
        }(GG) ? this.Ik = GG : this.show(GG)
      }
      release() {
        const GG = this.Ik;
        null !== GG && this.show(GG)
      }
      show(GG) {
        this.clearTimer(), this.Ik = null;
        const bG = void 0 === GG.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: GG,
          ms: bG
        }, this.xh(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.xh()
        }), bG)
      }
      dispose() {
        this.clearTimer(), this.Ik = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      xh() {
        lS.l.xh(BQ, this.view, !0)
      }
    }

    function bK(GG) {
      var bG;
      let {
        store: ZG
      } = GG;
      const {
        t: wG
      } = (0, mS.w)(), SG = (0, SV.j)(BQ, ZG.get());
      if (!SG) return null;
      const {
        area: LG
      } = SG, yG = LG.baf2AreaResetMinutes;
      return (0, CL.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": LG.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${SG.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, CL.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), LG.baf2AreaHeading && (0, CL.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: wG(LG.baf2AreaHeading)
        }), (0, CL.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (bG = LG.baf2AreaNameText) && void 0 !== bG ? bG : wG(LG.baf2AreaName)
        }), LG.baf2AreaNote && (0, CL.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: wG(LG.baf2AreaNote)
        }), void 0 !== yG && (0, CL.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: wG("buildAFactory2Game:areaWildsReset", {
            time: oL(wG, 60 * yG)
          })
        })]
      }, SG.id)
    }
    const ZK = "baf2GearGauge";
    class wK {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      OJ(GG) {
        var bG;
        if (this.clearLinger(), null === GG.gearPowerKind) return void this.set(null);
        const ZG = "jetpack" === GG.gearPowerKind && (wG = GG.gearChargeState, SG = GG.gearCharge, "flying" === wG || "charging" === wG || "outOfCharge" === wG || "ceiling" === wG || "offPlot" === wG || "noPower" === wG && SG <= 0);
        var wG, SG;
        const LG = !0 === (null === (bG = this.view) || void 0 === bG ? void 0 : bG.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          yG = ZG || "jetpack" === GG.gearPowerKind && LG;
        this.set({
          gauge: GG,
          jetShown: yG
        }), yG && !ZG && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(GG) {
        this.view = GG, lS.l.xh(ZK, GG, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const SK = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function LK(GG) {
      let {
        store: bG
      } = GG;
      const ZG = (0, SV.j)(ZK, bG.get());
      return ZG ? "jetpack" === ZG.gauge.gearPowerKind ? (0, CL.jsx)(yK, {
        view: ZG
      }) : (0, CL.jsx)(kK, {
        gauge: ZG.gauge
      }) : null
    }

    function yK(GG) {
      let {
        view: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)(), {
        gauge: wG
      } = bG, SG = wG.gearChargeMax > 0 ? Math.max(0, Math.min(1, wG.gearCharge / wG.gearChargeMax)) : 0, LG = SK[wG.gearChargeState], yG = LG ? ZG(LG) : null;
      return (0, CL.jsxs)("div", {
        className: uS()("Baf2JetArc", {
          Shown: bG.jetShown,
          Low: SG < .2,
          Warm: SG >= .2 && SG < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - SG)
        },
        "aria-hidden": !bG.jetShown,
        children: [(0, CL.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, CL.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: UK,
            pathLength: 100
          }), (0, CL.jsx)("path", {
            className: "Baf2JetArcFill",
            d: UK,
            pathLength: 100
          })]
        }), (0, CL.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * SG), "%"]
        }), yG && (0, CL.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: yG
        })]
      })
    }

    function kK(GG) {
      let {
        gauge: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)(), wG = function(GG, bG) {
        switch (bG.gearPowerKind) {
          case "skyPack":
            return GG("buildAFactory2Game:gearSkyPack", {
              charge: bG.gearCharge,
              max: bG.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return GG("buildAFactory2Game:gearIslandDraw", {
              power: OG(bG.gearIslandPower),
              cost: OG(bG.gearCostPerUse)
            });
          case "barrier":
            return GG("buildAFactory2Game:gearBarrier", {
              shield: Math.round(bG.gearCharge),
              max: bG.gearChargeMax,
              power: OG(bG.gearIslandPower)
            });
          default:
            return null
        }
      }(ZG, bG);
      return null === wG ? null : (0, CL.jsx)(AQ.d, {
        children: (0, CL.jsx)("div", {
          className: uS()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === bG.gearChargeState || "outOfCharge" === bG.gearChargeState
          }),
          role: "status",
          children: wG
        })
      })
    }
    const UK = (() => {
      const GG = GG => {
        const bG = GG * Math.PI / 180;
        return `${(40*Math.cos(bG)).toFixed(2)} ${(40*Math.sin(bG)).toFixed(2)}`
      };
      return `M ${GG(160)} A 40 40 0 1 1 ${GG(380)}`
    })();
    class YK {
      constructor(GG) {
        this.onElement = GG, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      OJ(GG) {
        let bG = GG.baf2LabelsReset || GG.baf2LabelsIsland !== this.island;
        bG && (this.labels.clear(), this.island = GG.baf2LabelsIsland);
        for (const [ZG, wG, SG, LG, yG] of GG.baf2LabelsList) {
          const GG = `${ZG},${wG},${SG}`,
            kG = this.labels.get(GG);
          null === LG ? bG = this.labels.delete(GG) || bG : kG && kG.item === LG && (kG.count === yG || kG.count >= 0 && yG >= 0) ? kG.count !== yG && (kG.count = yG, this.writeCount(GG, yG)) : (this.labels.set(GG, {
            key: GG,
            pos: [ZG, wG, SG],
            item: LG,
            count: yG
          }), this.writeCount(GG, yG), bG = !0)
        }
        if (this.changes++, bG) {
          this.snapshot = [...this.labels.values()];
          for (const GG of this.listeners) GG()
        }
      }
      bindCount(GG) {
        const bG = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${GG}`;
        let ZG = this.countRefs.get(bG);
        return ZG || (ZG = ZG => {
          var wG, SG;
          ZG ? (this.countElements.set(bG, ZG), this.writeCount(GG, null !== (wG = null === (SG = this.labels.get(GG)) || void 0 === SG ? void 0 : SG.count) && void 0 !== wG ? wG : -1)) : (this.countElements.delete(bG), this.countRefs.delete(bG))
        }, this.countRefs.set(bG, ZG)), ZG
      }
      setCountWords(GG) {
        this.countWords = GG;
        for (const [bG, ZG] of this.labels) this.writePart(`words|${bG}`, GG(ZG.count), ZG.count)
      }
      writeCount(GG, bG) {
        this.writePart(`bare|${GG}`, zL(bG), bG), this.countElements.has(`words|${GG}`) && this.writePart(`words|${GG}`, this.countWords(bG), bG)
      }
      writePart(GG, bG, ZG) {
        const wG = this.countElements.get(GG);
        if (!wG || ZG < 0) return;
        const SG = wG.firstChild;
        SG && 3 === SG.nodeType && !SG.nextSibling ? SG.nodeValue !== bG && (SG.nodeValue = bG) : wG.textContent !== bG && (wG.textContent = bG)
      }
      list() {
        return this.snapshot
      }
      at(GG) {
        return this.labels.get(`${GG[0]},${GG[1]},${GG[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      bind(GG) {
        let bG = this.refs.get(GG);
        return bG || (bG = bG => {
          const ZG = this.elements.get(GG);
          var wG, SG;
          ZG && (null === (wG = this.onElement) || void 0 === wG || wG.call(this, ZG, !1));
          bG ? (this.elements.set(GG, bG), null === (SG = this.onElement) || void 0 === SG || SG.call(this, bG, !0)) : (this.elements.delete(GG), this.refs.delete(GG))
        }, this.refs.set(GG, bG)), bG
      }
      onAfterRender(GG, bG, ZG, wG) {
        for (const SG of this.snapshot) {
          const LG = this.elements.get(SG.key);
          if (!LG) continue;
          if (wG(SG.key)) {
            (0, VQ.g)(LG, !0);
            continue
          }
          const yG = (0, dQ.e)(LG, GG, bG, SG.pos, 1.1, 24);
          yG && ZG.add(yG, LG, 0, !1)
        }
      }
    }
    const VK = (0, wG.memo)((function(GG) {
        let {
          item: bG
        } = GG;
        return (0, CL.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, CL.jsx)(FS.b, {
            itemName: bG,
            amount: 0
          })
        })
      })),
      pK = (0, wG.memo)((function(GG) {
        let {
          label: bG,
          bindRef: ZG,
          countRef: wG,
          wordsRef: SG
        } = GG;
        return (0, CL.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: ZG,
          hidden: !0,
          children: [(0, CL.jsx)(VK, {
            item: bG.item
          }), bG.count >= 0 && (0, CL.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, CL.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: SG
            }), (0, CL.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: wG
            })]
          })]
        })
      })),
      fK = (0, wG.memo)((function(GG) {
        let {
          store: bG
        } = GG;
        const {
          t: ZG
        } = (0, mS.w)(), [SG, LG] = (0, wG.useState)((() => bG.list()));
        return (0, wG.useEffect)((() => (LG(bG.list()), bG.subscribe((() => {
          LG(bG.list())
        })))), [bG]), (0, wG.useEffect)((() => {
          bG.setCountWords((GG => ZG("buildAFactory2Game:labelSiloCount", {
            count: zL(GG)
          })))
        }), [bG, ZG]), (0, CL.jsx)("div", {
          className: "Baf2IslandLabels",
          children: SG.map((GG => -2 === GG.count ? null : (0, CL.jsx)(pK, {
            label: GG,
            bindRef: bG.bind(GG.key),
            countRef: bG.bindCount(GG.key),
            wordsRef: bG.bindCount(GG.key, "words")
          }, GG.key)))
        })
      })),
      QK = {
        read: () => !0,
        write: () => {}
      };

    function KK(GG) {
      return `${GG[0]},${GG[1]},${GG[2]}`
    }

    function hK(GG) {
      let [bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG] = GG;
      const QG = void 0 === pG || void 0 === fG ? function(GG) {
        return [Math.floor((GG - 1) / 2), 0]
      }(LG) : [pG, fG];
      return {
        kind: 0 === UG ? "reactor" : "battery",
        box: gZ([bG, ZG, wG], SG, LG, yG, kG, QG),
        formed: 1 === YG,
        level: VG
      }
    }
    class dK {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QK;
        this.guideSetting = GG, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = GG.read()
      }
      OJ(GG) {
        var bG;
        const ZG = new Map;
        for (const wG of GG.baf2RxPlanList) {
          const GG = hK(wG);
          ZG.set(KK(GG.box.ctrl), GG)
        }
        this.plans = ZG, this.layouts = new Map((null !== (bG = GG.baf2RxLayouts) && void 0 !== bG ? bG : []).map((GG => {
          let [bG, ZG, wG, SG] = GG;
          return [KK([bG, ZG, wG]), SG]
        }))), this.predicted.clear(), GG.baf2RxFormedAt && (this.formed = {
          ctrl: GG.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const wG of [...this.startersOff]) {
          const GG = ZG.get(wG);
          GG && !GG.formed || this.startersOff.delete(wG)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((GG => this.planByKey(GG)))
      }
      planAt(GG) {
        return this.planByKey(KK(GG))
      }
      predictSize(GG, bG) {
        this.predicted.set(KK(GG), bG), this.changed()
      }
      unpredict(GG) {
        this.predicted.delete(KK(GG)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(GG) {
        var bG;
        const ZG = KK(GG);
        return this.predicted.has(ZG) ? null : null !== (bG = this.layouts.get(ZG)) && void 0 !== bG ? bG : null
      }
      showsStarter(GG) {
        return !this.startersOff.has(KK(GG))
      }
      setStarter(GG, bG) {
        const ZG = KK(GG);
        bG ? this.startersOff.delete(ZG) : this.startersOff.add(ZG), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(GG) {
        this.guide = GG, this.guideSetting.write(GG), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(GG) {
        const bG = this.plans.get(GG);
        if (!bG) return null;
        const ZG = this.predicted.get(GG);
        return ZG ? {
          ...bG,
          box: RZ(bG.box, bG.kind, ZG[0], ZG[1], ZG[2])
        } : bG
      }
      changed() {
        this.version++;
        for (const GG of this.listeners) GG()
      }
    }
    var JK = ZG(188);
    const rK = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function zK(GG, bG, ZG, wG) {
      const SG = GG.length / 3;
      for (let LG = 0; LG < rK.length / 3; LG++) GG.push(rK[3 * LG] * wG[0] / 2 + ZG[0], rK[3 * LG + 1] * wG[1] / 2 + ZG[1], rK[3 * LG + 2] * wG[2] / 2 + ZG[2]);
      for (let LG = SG; LG < SG + 24; LG += 4) bG.push(LG, LG + 1, LG + 2, LG, LG + 2, LG + 3)
    }

    function EK(GG, bG, ZG) {
      const wG = bG[0][0],
        SG = [],
        LG = [];
      for (const [yG, kG] of bG) zK(SG, LG, [yG[0] - wG[0], yG[1] - wG[1], yG[2] - wG[2]], kG);
      return GG.createGameMesh({
        positions: SG,
        indices: LG
      }, ZG, wG)
    }

    function oK(GG, bG) {
      const ZG = GG.w - 2,
        wG = GG.d - 2;
      return 1 === function(GG, bG, ZG, wG) {
        const [SG, LG, yG] = GG;
        if (Number(SG <= 2) + Number(LG <= 2) + Number(yG <= 2) >= 2) return function(GG, bG, ZG) {
          return (GG + bG + ZG) % 2 === 0 ? 1 : 3
        }(bG, ZG, wG);
        const [kG, UG] = SG >= LG && SG >= yG ? [ZG, wG] : LG >= yG ? [bG, wG] : [bG, ZG];
        return kG % 2 === 0 && UG % 2 === 0 ? 1 : 3
      }([ZG, GG.h - 2, wG], bG % ZG, Math.floor(bG / (ZG * wG)), Math.floor(bG / ZG) % wG) ? "rod" : "channel"
    }

    function XK(GG, bG, ZG) {
      if ("reactor" !== GG.kind || GG.formed || !bG) return !1;
      const wG = tZ(GG.box);
      for (let SG = 0; SG < wG; SG++) {
        const GG = ZG(SG);
        if (null !== GG && FZ(GG)) return !1
      }
      return !0
    }

    function uK(GG, bG, ZG, wG, SG) {
      var LG;
      let yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const kG = Gw(GG.box, bG),
        UG = Sw(GG.kind, kG, ZG);
      if ("wrong" === UG || "blocked" === UG) return "wrong";
      if (!SG) return null;
      if ("inside" === kG && "reactor" === GG.kind && "Air" === vZ(ZG)) {
        if (null !== yG) {
          var YG;
          const ZG = wf[Sf(yG, bw(GG.box, bG))];
          return ZG && null !== (YG = WU(ZG)) && void 0 !== YG ? YG : null
        }
        if (wG) return oK(GG.box, bw(GG.box, bG))
      }
      if ("missing" !== UG) return null;
      const VG = Lw(GG.kind, kG);
      return null === VG ? null : null !== (LG = WU(VG)) && void 0 !== LG ? LG : null
    }
    const iK = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function CK(GG, bG, ZG) {
      const wG = ZG => {
        const wG = bG(xZ(GG.box, ZG));
        return null !== wG && function(GG, bG) {
          return "reactor" !== GG.kind || bG !== NZ(GG.box) && "inside" !== Gw(GG.box, bG)
        }(GG, ZG) && "ok" !== Sw(GG.kind, Gw(GG.box, ZG), wG)
      };
      if (ZG) {
        const LG = BZ(GG.box, [Math.floor(ZG[0]), Math.floor(ZG[1]), Math.floor(ZG[2])]);
        if (LG >= 0 && (wG(LG) || (SG = LG, "reactor" === GG.kind && "inside" === Gw(GG.box, SG) && "Air" === bG(xZ(GG.box, SG))))) return LG
      }
      var SG;
      const LG = tZ(GG.box);
      for (let yG = 0; yG < LG; yG++)
        if (wG(yG)) return yG;
      return -1
    }

    function WK(GG, bG) {
      return Math.floor(bG / (GG.w * GG.d))
    }

    function mK(GG, bG, ZG) {
      return ZG >= 0 && WK(GG, bG) > WK(GG, ZG)
    }

    function IK(GG, bG) {
      return bG >= 0 && GG.h >= 3 && WK(GG, bG) === GG.h - 1
    }

    function FK(GG) {
      const bG = vZ(GG);
      return bG === rZ || "Collider" === bG || "Laser" === bG || bG.startsWith("_Collider ")
    }

    function vK(GG, bG, ZG, wG) {
      if (wG(GG)) return null;
      if (!iK.every((bG => {
          let [wG, SG, LG] = bG;
          const yG = ZG([GG[0] + wG, GG[1] + SG, GG[2] + LG]);
          return null !== yG && !AZ("reactor", yG) && "reactor" !== aZ(yG)
        }))) return null;
      const SG = sZ("reactor").min,
        LG = gZ([GG[0], GG[1], GG[2]], function(GG, bG) {
          const ZG = bG[0] - (GG[0] + .5),
            wG = bG[2] - (GG[2] + .5);
          return Math.abs(ZG) >= Math.abs(wG) ? ZG >= 0 ? 2 : 4 : wG >= 0 ? 1 : 3
        }(GG, bG), SG, SG, SG, eZ("reactor", SG)),
        yG = NZ(LG);
      let kG = !0;
      for (let UG = 0; UG < tZ(LG) && kG; UG++) {
        if (UG === yG) continue;
        const GG = xZ(LG, UG),
          bG = ZG(GG);
        kG = !wG(GG) && (null === bG || !FK(bG))
      }
      return {
        box: LG,
        fits: kG
      }
    }
    const aK = CU,
      cK = "baf2Goal",
      lK = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      jK = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      PK = .4;

    function MK(GG, bG) {
      let [ZG, wG, SG] = GG;
      const LG = lU([ZG - .02, wG - .02, SG - .02], [ZG + 1.02, wG + 1.02, SG + 1.02], .07);
      return bG && (LG.push([
        [ZG + .5, wG + 1 + .7, SG + .5],
        [.08, 1.4, .08]
      ]), LG.push([
        [ZG + .5, wG + 1 + 1.4 + .2, SG + .5],
        [PK, PK, PK]
      ])), LG
    }

    function AK(GG, bG) {
      let [ZG, wG, SG] = bG;
      return GG.isBlockInLoadedChunk(ZG, wG, SG) ? GG.blockIdToBlockName(GG.getBlockId(ZG, wG, SG)) : null
    }
    let sK = null;
    const qK = new Set;
    let nK = null;

    function gK(GG) {
      sK = GG;
      for (const bG of qK) bG(GG)
    }
    class eK {
      constructor(GG) {
        var bG;
        this.plans = GG, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (bG = GG => {
          var bG, ZG;
          this.setGoal(null !== (bG = null === GG || void 0 === GG ? void 0 : GG.goal) && void 0 !== bG ? bG : null, null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.startsBattery) && void 0 !== ZG && ZG)
        }, nK ??= [lS.l.subscribe("setDirectionArrow", (GG => {
          let {
            id: bG,
            position: ZG,
            text: wG
          } = GG;
          bG === cK && gK({
            goal: [Math.floor(ZG[0]), Math.floor(ZG[1]), Math.floor(ZG[2])],
            startsBattery: JSON.stringify(null !== wG && void 0 !== wG ? wG : null).includes("arrowStartBattery")
          })
        })), lS.l.subscribe("clearDirectionArrow", (GG => {
          let {
            id: bG
          } = GG;
          null !== bG && bG !== cK || gK(null)
        }))], qK.add(bG), bG(sK), () => {
          qK.delete(bG)
        })
      }
      onAfterRender(GG, bG) {
        const ZG = performance.now();
        if (this.cues.length > 0) {
          const bG = .55 + .45 * Math.sin(ZG / 1100 * Math.PI * 2);
          for (const ZG of this.cues) GG.setGameMesh(ZG, {
            visibility: bG
          })
        }
        if (ZG - this.lastCheckMs < 150) return;
        this.lastCheckMs = ZG;
        const wG = this.plans.all().filter((GG => {
            const [ZG, wG, SG] = GG.box.ctrl;
            return (!GG.formed || null !== this.plans.layoutOf(GG.box.ctrl)) && (ZG - bG[0]) ** 2 + (wG - bG[1]) ** 2 + (SG - bG[2]) ** 2 <= 2304
          })),
          SG = function(GG, bG) {
            const ZG = JK.d.rK,
              wG = new Map;
            for (const LG of bG) {
              const bG = xZ(LG.box, 0),
                yG = xZ(LG.box, tZ(LG.box) - 1),
                kG = [Math.min(bG[0], yG[0]), Math.min(bG[1], yG[1]), Math.min(bG[2], yG[2])].map((GG => Math.floor(GG / ZG))),
                UG = [Math.max(bG[0], yG[0]), Math.max(bG[1], yG[1]), Math.max(bG[2], yG[2])].map((GG => Math.floor(GG / ZG)));
              for (let ZG = kG[0]; ZG <= UG[0]; ZG++)
                for (let bG = kG[1]; bG <= UG[1]; bG++)
                  for (let LG = kG[2]; LG <= UG[2]; LG++) {
                    var SG;
                    wG.set(`${ZG},${bG},${LG}`, null !== (SG = GG.getChunkVersion(ZG, bG, LG)) && void 0 !== SG ? SG : -1)
                  }
            }
            return wG
          }(GG, wG);
        this.plans.getVersion() === this.storeVersion && (function(GG, bG) {
          if (GG.size !== bG.size) return !1;
          for (const [ZG, wG] of GG)
            if (bG.get(ZG) !== wG) return !1;
          return !0
        }(SG, this.chunkVersions) || ZG - this.lastRescanMs < 600) || (this.lastRescanMs = ZG, this.storeVersion = this.plans.getVersion(), this.chunkVersions = SG, this.redraw(GG, wG))
      }
      dispose(GG) {
        this.unwatch(), sK = null, this.clearMeshes(GG), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(GG, bG) {
        var ZG;
        (null === GG || void 0 === GG ? void 0 : GG.join()) === (null === (ZG = this.goal) || void 0 === ZG ? void 0 : ZG.join()) && bG === this.startsBattery || (this.goal = GG, this.startsBattery = bG, this.storeVersion = -1)
      }
      redraw(GG, bG) {
        const ZG = bG => AK(GG, bG),
          wG = new Map,
          SG = [],
          LG = this.plans.guideOn();
        for (const YG of bG) {
          const GG = LG && XK(YG, this.plans.showsStarter(YG.box.ctrl), (GG => ZG(xZ(YG.box, GG)))),
            bG = "reactor" === YG.kind ? this.plans.layoutOf(YG.box.ctrl) : null,
            yG = LG && !YG.formed ? CK(YG, ZG, this.goal) : -1;
          yG >= 0 && SG.push([xZ(YG.box, yG), IK(YG.box, yG)]);
          const kG = tZ(YG.box);
          for (let SG = 0; SG < kG; SG++) {
            const kG = xZ(YG.box, SG),
              UG = ZG(kG),
              VG = null === UG ? null : uK(YG, SG, UG, GG, LG, bG);
            if (null !== VG) {
              const GG = "wrong" !== VG && mK(YG.box, SG, yG),
                bG = GG ? `${VG}Dim` : VG;
              let ZG = wG.get(bG);
              ZG || (ZG = {
                draw: {
                  ghost: VG,
                  dim: GG
                },
                list: []
              }, wG.set(bG, ZG)), ZG.list.push(kG)
            }
          }
        }
        if (LG && this.startsBattery && this.goal) {
          const [GG, bG, SG] = this.goal, LG = [];
          for (const [wG, yG, kG] of lK) {
            const UG = [GG + wG, bG + yG, SG + kG];
            "Air" === ZG(UG) && LG.push(UG)
          }
          if (LG.length > 0) {
            var yG;
            const GG = null !== (yG = wG.get("cell")) && void 0 !== yG ? yG : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            GG.list.push(...LG), wG.set("cell", GG)
          }
        }
        const kG = [...wG.keys()].sort(),
          UG = [...kG.map((GG => `${GG}:${wG.get(GG).list.join(";")}`)), `cue:${SG.join(";")}`].join("|");
        if (UG !== this.shownKey) {
          this.shownKey = UG, this.clearMeshes(GG);
          for (const bG of kG) {
            const {
              draw: ZG,
              list: SG
            } = wG.get(bG);
            this.meshes.push(this.build(GG, ZG, SG))
          }
          for (const [bG, ZG] of SG) this.cues.push(EK(GG, MK(bG, ZG), jK))
        }
      }
      build(GG, bG, ZG) {
        let {
          ghost: wG,
          dim: SG
        } = bG;
        const {
          size: LG,
          colour: yG,
          alpha: kG
        } = aK[wG], UG = ZG[0], YG = [], VG = [];
        for (const [pG, fG, QG] of ZG) zK(YG, VG, [pG - UG[0] + .5, fG - UG[1] + .5, QG - UG[2] + .5], [LG, LG, LG]);
        return GG.createGameMesh({
          positions: YG,
          indices: VG
        }, {
          rgb: yG,
          alpha: kG * (SG ? .3 : 1)
        }, UG)
      }
      clearMeshes(GG) {
        for (const bG of [...this.meshes, ...this.cues]) GG.disposeGameMesh(bG);
        this.meshes = [], this.cues = []
      }
    }
    const RK = [.56, .83, 1],
      TK = [1, .3, .25];
    class HK {
      constructor(GG) {
        this.plans = GG, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(GG, bG, ZG) {
        var wG;
        const SG = performance.now();
        if (SG - this.lastCheckMs < 150) return;
        this.lastCheckMs = SG;
        const LG = bG => AK(GG, bG),
          yG = null === (wG = GG.YZG(bG)) || void 0 === wG ? void 0 : wG.name,
          kG = yG && "Reactor Frame" === vZ(yG) ? GG.getTargetedBlock() : null,
          UG = kG ? [kG.Oh[0], kG.Oh[1], kG.Oh[2]] : null,
          YG = null !== UG && "Air" === LG(UG) && UG.every(((GG, bG) => Math.abs(GG + .5 - ZG[bG]) <= 8)) ? vK(UG, ZG, LG, (GG => this.inPlan(GG))) : null,
          VG = YG ? `${YG.box.ctrl.join()}|${YG.box.rot}|${YG.fits}` : "";
        VG !== this.shownKey && this.show(GG, VG, YG)
      }
      dispose(GG) {
        this.clear(GG), this.shownKey = ""
      }
      inPlan(GG) {
        return this.plans.all().some((bG => BZ(bG.box, GG) >= 0))
      }
      show(GG, bG, ZG) {
        if (this.clear(GG), this.shownKey = bG, !ZG) return;
        const {
          box: wG,
          fits: SG
        } = ZG, LG = SG ? RK : TK, {
          lo: yG,
          hi: kG
        } = cU(wG);
        this.meshes.push(EK(GG, lU(yG, kG, .05), {
          rgb: LG,
          alpha: 1
        }));
        const UG = [],
          YG = xZ(wG, 0)[1];
        for (let VG = 0; VG < wG.w * wG.d; VG++) {
          const [GG, , bG] = xZ(wG, VG);
          UG.push([
            [GG + .5, YG + .02 + .01, bG + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(EK(GG, UG, {
          rgb: LG,
          alpha: .25
        }))
      }
      clear(GG) {
        for (const bG of this.meshes) GG.disposeGameMesh(bG);
        this.meshes = []
      }
    }
    const tK = "buildAFactory2Game:";

    function DK(GG, bG, ZG) {
      const wG = GG => {
          const [ZG, wG, SG] = GG.box.ctrl;
          return ZG === bG[0] && wG === bG[1] && SG === bG[2]
        },
        SG = GG.find((GG => wG(GG) || BZ(GG.box, bG) >= 0));
      if (!SG) return null;
      const LG = function(GG, bG, ZG) {
        const {
          w: wG,
          h: SG,
          d: LG
        } = GG.box, yG = "reactor" === GG.kind ? `${tK}rxTitle` : `${tK}batTitle`;
        if (GG.formed) return {
          key: `${tK}lookPlanFormed`,
          kindKey: yG,
          w: wG,
          h: SG,
          d: LG,
          count: 0
        };
        let kG = 0,
          UG = 0;
        for (let VG = 0; VG < tZ(GG.box); VG++) {
          const bG = ZG(xZ(GG.box, VG)),
            wG = null === bG ? "ok" : Sw(GG.kind, Gw(GG.box, VG), bG);
          kG += "missing" === wG ? 1 : 0, UG += "wrong" === wG || "blocked" === wG ? 1 : 0
        }
        const YG = function(GG, bG, ZG) {
          if (bG < 0 || null === ZG) return;
          const wG = Gw(GG.box, bG),
            SG = Sw(GG.kind, wG, ZG);
          return "blocked" === SG ? `${tK}lookWhy_blocked` : "wrong" === SG ? "ctrl" === wG ? `${tK}lookWhy_ctrl` : `${tK}lookWhy_reactor_${wG}` : void 0
        }(GG, BZ(GG.box, bG), ZG([bG[0], bG[1], bG[2]]));
        if (kG > 0) return {
          key: `${tK}lookPlanToBuild`,
          kindKey: yG,
          w: wG,
          h: SG,
          d: LG,
          count: kG,
          why: YG
        };
        if (UG > 0) return {
          key: `${tK}lookPlanTakeOut`,
          kindKey: yG,
          w: wG,
          h: SG,
          d: LG,
          count: UG,
          why: YG
        };
        return {
          key: "reactor" === GG.kind ? `${tK}lookPlanNoRods` : `${tK}lookPlanDone`,
          kindKey: yG,
          w: wG,
          h: SG,
          d: LG,
          count: 0
        }
      }(SG, bG, ZG);
      return "reactor" === SG.kind && wG(SG) ? {
        ...LG,
        ctrl: !0
      } : LG
    }

    function NK(GG, bG) {
      return GG === bG || null !== GG && null !== bG && GG.key === bG.key && GG.kindKey === bG.kindKey && GG.w === bG.w && GG.h === bG.h && GG.d === bG.d && GG.count === bG.count && GG.why === bG.why && GG.ctrl === bG.ctrl
    }

    function OK() {
      return performance.now()
    }
    class xK {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OK;
        this.ticket = GG, this.sent = bG, this.backstopMs = ZG, this.now = wG, this.queuedAt = void 0, this.queuedAt = wG()
      }
      answered() {
        const GG = this.now(),
          bG = this.sent.leftAt(this.ticket);
        return null !== bG && GG - bG > 4e3 || GG - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class BK {
      constructor() {
        this.echoes = []
      }
      add(GG) {
        this.echoes = this.echoes.filter((GG => !GG.answered())), this.echoes.push(GG)
      }
      answered() {
        var GG, bG;
        return null === (GG = null === (bG = this.echoes.at(-1)) || void 0 === bG ? void 0 : bG.answered()) || void 0 === GG || GG
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((GG => GG.answered()))
      }
      age() {
        var GG, bG;
        return null !== (GG = null === (bG = this.echoes.at(-1)) || void 0 === bG ? void 0 : bG.age()) && void 0 !== GG ? GG : null
      }
      clear() {
        this.echoes = []
      }
    }
    class Gh {
      constructor(GG) {
        this.send = GG, this.value = null, this.sent = null, this.echoes = new BK, this.down = !1, this.timer = null
      }
      shown(GG) {
        return null === this.value ? GG : this.down || this.value !== this.sent ? this.value : GG === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), GG) : this.value
      }
      pendingFor(GG) {
        return null !== this.value && this.value === this.sent && GG !== this.value ? this.echoes.age() : null
      }
      assume(GG, bG) {
        this.disarm(), this.down = !1, this.value = GG, this.sent = GG, this.echoes.clear(), this.echoes.add(bG)
      }
      press() {
        this.down = !0
      }
      drag(GG) {
        this.value = GG, this.arm(this.down ? 1e3 : 400)
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
      arm(GG) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), GG)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class bh {
      constructor() {
        this.pending = new Map
      }
      set(GG, bG, ZG) {
        var wG;
        const SG = null !== (wG = this.pending.get(GG)) && void 0 !== wG ? wG : {
          on: bG,
          echoes: new BK
        };
        SG.on = bG, SG.echoes.add(ZG), this.pending.set(GG, SG)
      }
      shown(GG) {
        let bG = GG;
        for (const [ZG, {
            on: wG,
            echoes: SG
          }] of this.pending) 0 !== (GG & ZG) === wG && SG.agreeCounts() || SG.answered() ? this.pending.delete(ZG) : bG = wG ? bG | ZG : bG & ~ZG;
        return bG
      }
      pendingMask() {
        let GG = 0;
        for (const bG of this.pending.keys()) GG |= bG;
        return GG
      }
      pendingFor(GG) {
        let bG = null;
        for (const [wG, {
            on: SG,
            echoes: LG
          }] of this.pending) {
          if (void 0 !== GG && 0 !== (GG & wG) === SG) continue;
          const yG = LG.age();
          var ZG;
          if (null !== yG) bG = Math.max(null !== (ZG = bG) && void 0 !== ZG ? ZG : 0, yG)
        }
        return bG
      }
      clear() {
        this.pending.clear()
      }
    }
    class Zh {
      constructor() {
        this.dims = null, this.echoes = new BK, this.unmet = null
      }
      shown(GG) {
        var bG;
        return this.dims && (wh(this.dims, GG) && this.echoes.agreeCounts() || this.echoes.answered()) && (wh(this.dims, GG) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (bG = this.dims) && void 0 !== bG ? bG : GG
      }
      takeUnmet() {
        const GG = this.unmet;
        return this.unmet = null, GG
      }
      set(GG, bG) {
        this.dims = GG, this.echoes.add(bG)
      }
      pendingFor(GG) {
        return null === this.dims || GG && wh(this.dims, GG) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function wh(GG, bG) {
      return GG[0] === bG[0] && GG[1] === bG[1] && GG[2] === bG[2]
    }
    class Sh {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OK;
        this.now = GG, this.taps = new Map
      }
      tap(GG, bG, ZG) {
        return !this.busy(GG) && (this.taps.set(GG, {
          at: this.now(),
          done: bG
        }), ZG(), !0)
      }
      settle(GG) {
        for (const [bG, ZG] of [...this.taps]) ZG.done(GG) && this.taps.delete(bG)
      }
      busy(GG) {
        const bG = this.taps.get(GG);
        return !!bG && (!(this.now() - bG.at >= 3e3) || (this.taps.delete(GG), !1))
      }
      busyIds() {
        const GG = new Set;
        for (const bG of [...this.taps.keys()]) this.busy(bG) && GG.add(bG);
        return GG
      }
      clear() {
        this.taps.clear()
      }
    }

    function Lh(GG) {
      return {
        send: bG => GG.track(bG),
        sendUrgent: (bG, ZG) => GG.track(bG, {
          urgent: !0,
          supersedes: ZG
        }),
        leftAt: bG => GG.leftAt(bG),
        holdReserve: () => GG.holdUrgentReserve(),
        answerMs: ly
      }
    }

    function yh() {
      return performance.now()
    }

    function kh(GG) {
      const bG = GG.baf2RxNeed.map((GG => {
        let [bG, ZG] = GG;
        return [bG, ZG]
      }));
      return JSON.stringify([GG.baf2RxFormed, bG, GG.baf2RxBad, GG.baf2RxCells])
    }

    function Uh(GG, bG) {
      const ZG = 0 !== (bG & fb),
        wG = 0 !== (GG.baf2RxFlags & fb);
      return !ZG || wG || "running" !== GG.baf2RxState && "idle" !== GG.baf2RxState ? !ZG && wG && "scram" === GG.baf2RxState && GG.baf2RxFuel > 0 ? "idle" : GG.baf2RxState : "scram"
    }

    function Yh(GG) {
      return JSON.stringify([GG.baf2BatFormed, GG.baf2BatNeed, GG.baf2BatBad])
    }

    function Vh(GG) {
      return GG.join(",")
    }
    class ph {
      constructor() {
        this.listeners = new Set
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      notify() {
        for (const GG of this.listeners) GG()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class fh {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(GG, bG) {
        this.lastAt = GG, this.lastUntil = GG + bG
      }
      answered(GG) {
        return this.lastAt >= GG || GG < this.lastUntil
      }
    }
    class Qh {
      constructor(GG, bG) {
        this.link = GG, this.now = bG, this.hold = new Zh, this.picked = null, this.notTaken = null
      }
      shown(GG) {
        const bG = this.hold.shown(GG);
        if (this.hold.takeUnmet() && this.picked) {
          var ZG;
          const {
            plans: bG,
            ctrl: wG,
            at: SG
          } = this.picked;
          this.picked = null, bG.unpredict(wG), null === (ZG = this.notTaken) || void 0 === ZG || ZG.call(this, GG, SG)
        }
        return bG
      }
      pendingFor(GG) {
        return this.hold.pendingFor(GG)
      }
      Df(GG, bG, ZG) {
        GG.predictSize(bG, ZG), this.picked = {
          plans: GG,
          ctrl: bG,
          at: this.now()
        };
        const wG = this.link.send(pb(bG, "plan", ...ZG));
        this.hold.set(ZG, new xK(wG, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class Kh {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yh;
        this.plans = GG, this.readInterior = bG, this.link = ZG, this.now = wG, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new bh, this.throttle = void 0, this.oneShots = void 0, this.listeners = new ph, this.redraw = null, this.releaseReserve = null, this.size = new Qh(ZG, wG), this.oneShots = new Sh(wG), this.throttle = new Gh((GG => this.echo(this.link.send(this.command("throttle", GG)))))
      }
      set(GG) {
        !GG.baf2RxOpen && this.raw && Vh(this.raw.baf2RxAt) === Vh(GG.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(GG), this.xh(GG)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(GG) {
        this.size.notTaken = GG
      }
      resize(GG) {
        this.raw && (this.size.Df(this.plans, this.raw.baf2RxAt, GG), this.xh(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const GG = this.raw.baf2RxAt;
        this.plans.setStarter(GG, !this.plans.showsStarter(GG)), this.xh(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.xh(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.xh(this.raw)
      }
      send(GG) {
        if (this.raw) {
          for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
          this.link.send(this.command(GG, ...ZG))
        }
      }
      tap(GG, bG) {
        this.raw && this.oneShots.tap(GG, function(GG, bG) {
          if ("start" === GG) return GG => 0 === (GG.baf2RxFlags & fb);
          if ("odConfirm" === GG) return GG => 0 !== (GG.baf2RxFlags & Qb);
          const ZG = kh(bG);
          return GG => kh(GG) !== ZG
        }(GG, this.raw), bG) && ("start" === GG && (this.startedAt = this.now()), this.xh(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(fb, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(GG, bG) {
        if (!this.raw) return;
        const ZG = GG === fb ? this.command(bG ? "scram" : "start") : this.command("od", bG ? 1 : 0),
          wG = bG && GG === fb,
          SG = `${Vb} ${this.raw.baf2RxAt.join(" ")} `,
          LG = this.echo(wG ? this.link.sendUrgent(ZG, (GG => {
            const bG = GG.startsWith(SG) ? GG.slice(SG.length).split(" ")[0] : null;
            return "throttle" === bG || "start" === bG
          })) : this.link.send(ZG));
        this.flags.set(GG, bG, LG), wG && this.throttle.assume(0, LG), this.xh(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(GG) {
        this.throttle.drag(GG), this.raw && this.xh(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.xh(this.raw)
      }
      subscribe(GG) {
        return this.listeners.subscribe(GG)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var GG;
        this.throttle.release(), null === (GG = this.releaseReserve) || void 0 === GG || GG.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(GG) {
        for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
        return pb(this.raw.baf2RxAt, GG, ...ZG)
      }
      echo(GG) {
        return new xK(GG, this.link, this.link.answerMs, this.now)
      }
      xh(GG) {
        var bG;
        this.raw = GG;
        const ZG = this.flags.shown(GG.baf2RxFlags),
          wG = {
            ...GG,
            baf2RxFlags: ZG,
            baf2RxTarget: this.throttle.shown(GG.baf2RxTarget),
            baf2RxState: Uh(GG, ZG)
          },
          SG = this.size.shown(wG.baf2RxDims),
          LG = this.throttle.pendingFor(),
          yG = [this.throttle.pendingFor(GG.baf2RxTarget), this.flags.pendingFor(GG.baf2RxFlags), this.size.pendingFor(GG.baf2RxDims)].filter((GG => null !== GG)),
          kG = yG.length > 0 ? Math.max(...yG) : null,
          UG = this.oneShots.busyIds(),
          YG = wG.baf2RxAt;
        let VG, pG, fG = null,
          QG = [Math.max(0, SG[0] - 2), Math.max(0, SG[1] - 2), Math.max(0, SG[2] - 2)];
        if (wG.baf2RxFormed) {
          const [GG, bG, ZG] = wG.baf2RxDims;
          QG = [Math.max(0, GG - 2), Math.max(0, bG - 2), Math.max(0, ZG - 2)], VG = Array.from(wG.baf2RxCells, Number), pG = `${QG.join(",")}:${wG.baf2RxCells}`
        } else {
          var KG;
          const GG = null === (KG = this.plans.planAt(YG)) || void 0 === KG ? void 0 : KG.box,
            bG = GG ? RZ(GG, "reactor", ...SG) : gZ(YG, 1, ...SG, eZ("reactor", SG[0])),
            ZG = this.readInterior(bG);
          fG = bU(QG, ZG), VG = ZG, pG = `${QG.join(",")}:${ZG.join("")}`
        }(null === (bG = this.looksOf) || void 0 === bG ? void 0 : bG.key) !== pG && (this.looksOf = {
          key: pG,
          looks: kU(QG, VG)
        }), this.view = {
          status: wG,
          dims: SG,
          plan: fG,
          inner: QG,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(YG),
          odConfirmed: this.odConfirmed || 0 !== (wG.baf2RxFlags & zb),
          guide: this.plans.guideOn(),
          throttlePending: null !== LG,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== kG && kG >= 5e3,
          busy: UG,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== kG || UG.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.xh(this.raw)
        }), 250))
      }
    }
    class hh {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yh;
        this.plans = GG, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new ph, this.redraw = null, this.size = new Qh(bG, ZG), this.oneShots = new Sh(ZG)
      }
      set(GG) {
        !GG.baf2BatOpen && this.view && Vh(this.view.status.baf2BatAt) === Vh(GG.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(GG), this.xh(GG)
      }
      tap(GG, bG) {
        if (!this.view) return;
        const ZG = Yh(this.view.status);
        this.oneShots.tap(GG, (GG => Yh(GG) !== ZG), bG) && this.xh(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(GG) {
        this.size.notTaken = GG
      }
      resize(GG) {
        this.view && (this.size.Df(this.plans, this.view.status.baf2BatAt, GG), this.xh(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.xh(this.view.status)
      }
      subscribe(GG) {
        return this.listeners.subscribe(GG)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      xh(GG) {
        const bG = this.size.shown(GG.baf2BatDims),
          ZG = this.oneShots.busyIds();
        this.view = {
          status: GG,
          dims: bG,
          rp: oU(bG, GG.baf2BatDims) ? GG.baf2BatCapacity : VU(...bG),
          guide: this.plans.guideOn(),
          busy: ZG
        }, this.listeners.notify(), ZG.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.xh(this.view.status)
        }), 250))
      }
    }
    const dh = "buildAFactory2Game:";

    function Jh() {
      var GG;
      const bG = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!bG) return null;
      const ZG = bG.querySelector(".ExitButton");
      return function(GG, bG) {
        const ZG = bG ? bG.left - 8 : GG.right;
        return {
          left: GG.left,
          top: GG.top,
          width: Math.max(0, ZG - GG.left),
          height: GG.height
        }
      }(bG.getBoundingClientRect(), null !== (GG = null === ZG || void 0 === ZG ? void 0 : ZG.getBoundingClientRect()) && void 0 !== GG ? GG : null)
    }
    const rh = (0, wG.memo)((function(GG) {
      let {
        store: bG
      } = GG;
      const {
        t: ZG
      } = (0, mS.w)(), [SG, LG] = (0, wG.useState)((() => bG.get())), [yG, kG] = (0, wG.useState)((() => performance.now()));
      (0, wG.useEffect)((() => (LG(bG.get()), bG.subscribe((() => {
        LG(bG.get()), kG(performance.now())
      })))), [bG]);
      const {
        alarm: UG,
        boomAt: YG
      } = SG, VG = null !== UG && null !== UG.secs, [pG, fG] = (0, wG.useState)(null);
      (0, wG.useEffect)((() => {
        if (!VG) return;
        fG(Jh());
        const GG = setInterval((() => {
          kG(performance.now()), fG(Jh())
        }), 250);
        return () => {
          clearInterval(GG)
        }
      }), [VG]);
      const [QG, KG] = (0, wG.useState)(!1);
      return (0, wG.useEffect)((() => {
        if (YG === -1 / 0) return;
        KG(!0);
        const GG = setTimeout((() => {
          KG(!1)
        }), 1300);
        return () => {
          clearTimeout(GG)
        }
      }), [YG]), (0, CL.jsxs)(CL.Fragment, {
        children: [null !== UG && (0, CL.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: ZG(UG.hot ? `${dh}rxAlarmSiren` : `${dh}rxAlarmDamaged`, {
            amount: String(UG.damage)
          })
        }), null !== UG && null !== UG.secs && (0, CL.jsx)("div", {
          className: pG ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== pG && void 0 !== pG ? pG : void 0,
          "aria-live": "assertive",
          children: ZG(`${dh}rxAlarmCountdown`, {
            amount: String((hG = UG.secs, dG = yG - UG.receivedAt, Math.max(1, Math.ceil(hG - dG / 1e3))))
          })
        }), QG && (0, CL.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var hG, dG
    }));
    class zh {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      OJ(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const ZG = GG.baf2RxAlarmAt.join(",");
        let wG = this.snapshot.boomAt;
        if (GG.baf2RxAlarmBoom) this.byReactor.delete(ZG), wG = bG;
        else if (GG.baf2RxAlarmDamage <= 0) this.byReactor.delete(ZG);
        else {
          var SG;
          this.byReactor.set(ZG, {
            damage: GG.baf2RxAlarmDamage,
            secs: null !== (SG = GG.baf2RxAlarmSecs) && void 0 !== SG ? SG : null,
            hot: !0 === GG.baf2RxAlarmHot,
            receivedAt: bG
          })
        }
        this.xh(wG)
      }
      retain(GG) {
        let bG = !1;
        for (const ZG of [...this.byReactor.keys()]) GG.has(ZG) || (this.byReactor.delete(ZG), bG = !0);
        bG && this.xh(this.snapshot.boomAt)
      }
      has(GG) {
        return this.byReactor.has(GG)
      }
      get() {
        return this.snapshot
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      xh(GG) {
        let bG = null;
        for (const ZG of this.byReactor.values())(!bG || ZG.damage > bG.damage) && (bG = ZG);
        this.snapshot = {
          alarm: bG,
          boomAt: GG
        };
        for (const ZG of this.listeners) ZG()
      }
    }
    const Eh = {
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

    function oh(GG) {
      return [GG[0], GG[1], GG[2]]
    }

    function Xh(GG) {
      return `${GG[0]},${GG[1]},${GG[2]}`
    }
    class uh {
      constructor(GG) {
        if (this.plans = GG, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var GG;
            return {
              active: this.glows.flatMap((GG => {
                let {
                  record: bG
                } = GG;
                return bG ? [bG] : []
              })),
              log: [...null !== (GG = this.devLog) && void 0 !== GG ? GG : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var GG;
        return null !== (GG = this.devLog) && void 0 !== GG ? GG : []
      }
      check(GG, bG, ZG) {
        const wG = new Set(bG.map((GG => Xh(GG.box.ctrl))));
        for (const yG of function(GG, bG) {
            const ZG = [],
              wG = new Map(GG);
            GG.clear();
            for (const SG of bG) {
              const bG = KK(SG.box.ctrl),
                LG = SG.formed ? SG.level : 0;
              GG.set(bG, LG), LG > 0 && 0 === wG.get(bG) && ZG.push(SG)
            }
            return ZG
          }(this.levels, this.plans.all())) wG.has(Xh(yG.box.ctrl)) && this.show(GG, yG, "on", ZG);
        const SG = this.plans.lastFormed();
        if (null === SG || SG.receivedAt <= this.flashedAt) return null;
        this.flashedAt = SG.receivedAt;
        const LG = function(GG, bG) {
          var ZG;
          const wG = KK(GG);
          return null !== (ZG = bG.find((GG => KK(GG.box.ctrl) === wG))) && void 0 !== ZG ? ZG : null
        }(SG.ctrl, bG);
        return LG && this.show(GG, LG, "formed", ZG), LG
      }
      fade(GG, bG) {
        0 !== this.glows.length && (this.glows = this.glows.filter((ZG => {
          let {
            mesh: wG,
            glow: SG,
            startMs: LG,
            record: yG
          } = ZG;
          const kG = (bG - LG) / Eh[SG].ms;
          return kG >= 1 ? (GG.disposeGameMesh(wG), yG && (yG.endMs = bG), !1) : (GG.setGameMesh(wG, {
            visibility: "formed" === SG ? 1 - kG : Math.sin(Math.PI * kG)
          }), !0)
        })))
      }
      dispose(GG) {
        for (const {
            mesh: ZG
          }
          of this.glows) GG.disposeGameMesh(ZG);
        this.glows = [], this.levels.clear();
        const bG = "undefined" !== typeof window ? window : null;
        (null === bG || void 0 === bG ? void 0 : bG.baf2Glows) === this.devAccessor && delete bG.baf2Glows
      }
      show(GG, bG, ZG, wG) {
        const {
          lo: SG,
          hi: LG
        } = cU(bG.box);
        let yG = null;
        this.devLog && (yG = {
          glow: ZG,
          ctrl: oh(bG.box.ctrl),
          lo: oh(SG),
          hi: oh(LG),
          startMs: wG,
          endMs: null
        }, this.devLog.push(yG), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(GG, ZG, lU(SG, LG, Eh[ZG].thick)),
          glow: ZG,
          startMs: wG,
          record: yG
        })
      }
      build(GG, bG, ZG) {
        const wG = EK(GG, ZG, {
          rgb: Eh[bG].colour,
          alpha: 1
        });
        return GG.setGameMesh(wG, {
          visibility: 0
        }), wG
      }
    }
    const ih = 1 / .6,
      Ch = {
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
        blendMode: Pk.c.Standard,
        soft: !0
      },
      Wh = {
        ...Ch,
        size: [.25, .4],
        count: 2
      };

    function mh(GG) {
      return {
        colours: [GG, GG],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Pk.c.Add,
        soft: !1
      }
    }
    const Ih = mh([150, 225, 255]),
      Fh = mh([185, 145, 255]),
      vh = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function ah(GG) {
      const bG = lb[GG];
      return null === bG.fuelSlot || SZ(bG) ? vh.includes(GG) ? Fh : Ih : Ch
    }
    const ch = {
        kind: "smokePuff"
      },
      lh = [.2, .025, .2];

    function jh(GG, bG) {
      const [
        [ZG, wG, SG],
        [LG, yG, kG]
      ] = GG.colours;
      return {
        texture: GG.soft ? ch : "square_particle",
        rp: bG,
        minLifeTime: GG.life[0] / ih,
        maxLifeTime: GG.life[1] / ih,
        minEmitPower: GG.power[0] * ih,
        maxEmitPower: GG.power[1] * ih,
        minSize: GG.size[0],
        maxSize: GG.size[1],
        emitRate: 0,
        gravity: [0, GG.lift * ih * ih, 0],
        dir1: [-GG.spread, 1, -GG.spread],
        dir2: [GG.spread, 1, GG.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [ZG, wG, SG, GG.alpha],
          maxColor: [LG, yG, kG, GG.alpha]
        }, {
          timeFraction: 1,
          minColor: [ZG, wG, SG, 0],
          maxColor: [LG, yG, kG, 0]
        }],
        blendMode: GG.blendMode
      }
    }
    class Ph {
      constructor(GG) {
        this.fixed = GG, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(GG, bG, ZG) {
        var wG;
        if (ZG === this.lastFrame) return !1;
        this.lastFrame = ZG;
        const SG = this.at;
        SG[0] = bG[0] + .5, SG[1] = bG[1] + 1.025, SG[2] = bG[2] + .5;
        const LG = null !== (wG = this.fixed) && void 0 !== wG ? wG : kG() ? Wh : Ch;
        let yG = this.particles.get(LG);
        return yG || (yG = GG.createParticles(function(GG) {
          return jh(GG, Math.ceil(12 * GG.count * GG.life[1]) + GG.count)
        }(LG), {
          pos: SG,
          half: lh
        }), this.particles.set(LG, yG)), yG.moveTo(SG), yG.emit(LG.count), !0
      }
      dispose() {
        for (const GG of this.particles.values()) GG.stop();
        this.particles.clear()
      }
    }
    class Mh {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(GG) {
        this.indexed = !0;
        for (const bG of mb) {
          const ZG = ah(bG);
          for (let wG = 1; wG <= 4; wG++) {
            const SG = GG.blockNameToBlockId(`${bG}|meta|rot${wG}|Running`, !0);
            if (null === SG) continue;
            let LG = this.pufferIndexByStyle.get(ZG);
            void 0 === LG && (LG = this.pufferList.push(new Ph(ZG === Ch ? null : ZG)) - 1, this.pufferIndexByStyle.set(ZG, LG)), this.pufferIndexById[SG] = LG + 1
          }
        }
      }
      onAfterRender(GG, bG) {
        this.indexed || this.index(GG);
        const ZG = performance.now(),
          wG = 0 === this.lastMs ? 0 : Math.min(ZG - this.lastMs, 250) / 1e3;
        this.lastMs = ZG, this.frame++, GG.particlesEnabled() ? (this.scan(GG, bG), this.puff(GG, wG)) : this.sources = []
      }
      dispose() {
        for (const GG of this.pufferList) GG.dispose();
        this.sources = [], this.found = []
      }
      scan(GG, bG) {
        0 === this.scanRow && (this.origin = [Math.floor(bG[0]) - 12, Math.floor(bG[1]) - 6, Math.floor(bG[2]) - 12]);
        const ZG = Math.min(this.scanRow + 16, 325),
          [wG, SG, LG] = this.origin,
          yG = this.hits;
        yG.length = 0;
        for (let kG = this.scanRow; kG < ZG; kG++) {
          const bG = wG + kG % 25,
            ZG = SG + Math.floor(kG / 25);
          GG.scanBlocks(bG, ZG, LG, bG + 1, ZG + 1, LG + 25, this.pufferIndexById, yG)
        }
        for (let kG = 0; kG < yG.length; kG += 4) {
          const GG = yG[kG + 3];
          this.found.push({
            pos: [yG[kG], yG[kG + 1], yG[kG + 2]],
            Gk: GG,
            puffer: this.pufferList[this.pufferIndexById[GG] - 1]
          })
        }
        this.scanRow = ZG, 325 === ZG && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(GG, bG) {
        const ZG = this.sources.length;
        if (0 !== ZG) {
          this.budget = Math.min(this.budget + Math.min(ZG / 1.2, 12) * bG, 2);
          for (let bG = 0; bG < ZG && this.budget >= 1; bG++) {
            const bG = this.sources[this.cursor % ZG];
            this.cursor = (this.cursor + 1) % ZG, GG.getBlockId(bG.pos[0], bG.pos[1], bG.pos[2]) === bG.Gk && (bG.puffer.puff(GG, bG.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Ah = {
        ...mh([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      sh = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function qh(GG) {
      return 0 === GG.spots.length ? 0 : Math.min(1 * GG.level, 4)
    }

    function nh(GG) {
      return 0 === GG.glass.length ? 0 : Math.min(.75 * GG.level, 3)
    }

    function gh(GG) {
      return `${GG.ctrl.join(",")}:${GG.rot}:${GG.cu},${GG.cv}:${GG.w},${GG.h},${GG.d}`
    }

    function eh(GG, bG) {
      const ZG = bG.w - 2,
        wG = bG.h - 2,
        SG = bG.d - 2,
        LG = [];
      for (let yG = 0; yG < ZG * wG * SG; yG++) {
        const kG = yG % ZG,
          UG = Math.floor(yG / ZG) % SG,
          YG = Math.floor(yG / (ZG * SG));
        if (kG > 0 && kG < ZG - 1 && UG > 0 && UG < SG - 1 && YG > 0 && YG < wG - 1) continue;
        const VG = xZ(bG, Zw(bG, yG)),
          pG = AK(GG, VG);
        if (null !== pG && "Fuel Rod" === vZ(pG))
          for (const bG of sh) {
            const ZG = [VG[0] + bG[0], VG[1] + bG[1], VG[2] + bG[2]];
            Th(GG, ZG) && LG.push(Hh(ZG, bG))
          }
      }
      return LG
    }

    function Rh(GG, bG) {
      const {
        lo: ZG,
        hi: wG
      } = cU(bG), SG = [];
      for (let LG = ZG[0]; LG < wG[0]; LG++)
        for (let bG = ZG[1]; bG < wG[1]; bG++) {
          const yG = LG === ZG[0] || LG === wG[0] - 1 || bG === ZG[1] || bG === wG[1] - 1 ? 1 : Math.max(1, wG[2] - 1 - ZG[2]);
          for (let kG = ZG[2]; kG < wG[2]; kG += yG) {
            const yG = [LG, bG, kG];
            if (!Th(GG, yG)) continue;
            const UG = LG === ZG[0] ? sh[1] : LG === wG[0] - 1 ? sh[0] : kG === ZG[2] ? sh[5] : kG === wG[2] - 1 ? sh[4] : bG === ZG[1] ? sh[3] : sh[2];
            SG.push(Hh(yG, UG))
          }
        }
      return SG
    }

    function Th(GG, bG) {
      const ZG = AK(GG, bG);
      return null !== ZG && "Reactor Glass" === vZ(ZG)
    }

    function Hh(GG, bG) {
      return [
        [GG[0] + .5 + .55 * bG[0], GG[1] + .5 + .55 * bG[1], GG[2] + .5 + .55 * bG[2]],
        [0 === bG[0] ? .4 : .02, 0 === bG[1] ? .4 : .02, 0 === bG[2] ? .4 : .02]
      ]
    }
    class th {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(GG, bG, ZG, wG) {
        const SG = [],
          LG = new Set;
        for (const YG of bG) {
          var yG, kG, UG;
          const {
            box: bG
          } = YG;
          if ("reactor" !== YG.kind || YG.level <= 0 || (bG.ctrl[0] - ZG[0]) ** 2 + (bG.ctrl[1] - ZG[1]) ** 2 + (bG.ctrl[2] - ZG[2]) ** 2 > 576) continue;
          const VG = gh(bG);
          LG.add(VG);
          let pG = this.spots.get(VG);
          if ((!pG || wG - pG.at > 3e3) && (pG = {
              at: wG,
              spots: eh(GG, bG),
              glass: Rh(GG, bG)
            }, this.spots.set(VG, pG)), 0 === pG.spots.length && 0 === pG.glass.length) continue;
          const fG = this.sparking.find((GG => GG.key === VG));
          SG.push({
            key: VG,
            level: YG.level,
            spots: pG.spots,
            glass: pG.glass,
            budget: null !== (yG = null === fG || void 0 === fG ? void 0 : fG.budget) && void 0 !== yG ? yG : 0,
            cursor: null !== (kG = null === fG || void 0 === fG ? void 0 : fG.cursor) && void 0 !== kG ? kG : 0,
            glassBudget: null !== (UG = null === fG || void 0 === fG ? void 0 : fG.glassBudget) && void 0 !== UG ? UG : 0
          })
        }
        for (const YG of this.spots.keys()) LG.has(YG) || this.spots.delete(YG);
        this.sparking = SG
      }
      emit(GG, bG, ZG) {
        var wG;
        if (0 === this.sparking.length || !GG.particlesEnabled() || ZG === this.lastFrame) return;
        this.lastFrame = ZG;
        let SG = 0,
          LG = 0;
        for (const KG of this.sparking) SG += qh(KG), LG += nh(KG);
        const yG = SG > 8 ? 8 / SG : 1,
          kG = LG > 6 ? 6 / LG : 1;
        let UG, YG = null,
          VG = null;
        for (const KG of this.sparking) KG.budget = Math.min(KG.budget + qh(KG) * yG * bG, 2), KG.budget >= 1 && (!YG || KG.budget > YG.budget) && (YG = KG), KG.glassBudget = Math.min(KG.glassBudget + nh(KG) * kG * bG, 2), KG.glassBudget >= 1 && (!VG || KG.glassBudget > VG.glassBudget) && (VG = KG);
        if (YG) YG.budget--, UG = YG.spots[YG.cursor++ % YG.spots.length];
        else {
          if (!VG) return;
          VG.glassBudget--, UG = VG.glass[Math.floor(Math.random() * VG.glass.length)]
        }
        const [pG, fG] = UG, QG = null !== (wG = this.emitter) && void 0 !== wG ? wG : this.create(GG, pG, fG);
        QG.moveTo(pG, fG), QG.emit(Ah.count)
      }
      dispose() {
        var GG;
        null === (GG = this.emitter) || void 0 === GG || GG.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(GG, bG, ZG) {
        const wG = Math.ceil(14 * Ah.count * Ah.life[1]) + Ah.count;
        return this.emitter = GG.createParticles(jh(Ah, wG), {
          pos: bG,
          half: ZG
        }), this.emitter
      }
    }
    const Dh = [2, 3.2],
      Nh = 1 / 3,
      Oh = 1 / .6,
      xh = {
        texture: ch,
        rp: Math.ceil(18 * Dh[1]) + 4,
        minLifeTime: Dh[0] / Oh,
        maxLifeTime: Dh[1] / Oh,
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
        blendMode: Pk.c.Standard
      };
    class Bh {
      constructor(GG) {
        this.plans = GG, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new th, this.frame = 0, this.outline = new uh(GG)
      }
      onAfterRender(GG, bG, ZG) {
        const wG = performance.now(),
          SG = 0 === this.lastMs ? 0 : Math.min(wG - this.lastMs, 250) / 1e3;
        if (this.lastMs = wG, this.outline.fade(GG, wG), this.puff(GG, SG, ZG), this.sparks.emit(GG, SG, this.frame++), wG - this.lastCheckMs < 150) return;
        this.lastCheckMs = wG;
        const LG = this.plans.all().filter((GG => GG.formed && Gd(GG.box.ctrl, ZG) <= 4096));
        this.plumes = LG.filter((GG => "reactor" === GG.kind && GG.level > 0)).map((GG => ({
          box: GG.box,
          level: GG.level
        }))), this.updateHums(GG, bG, LG, ZG), this.sparks.update(GG, LG, ZG, wG), this.chimeFormed(GG, bG, LG, wG)
      }
      dispose(GG) {
        var bG;
        this.outline.dispose(GG), null === (bG = this.steam) || void 0 === bG || bG.dispose(), this.steam = null, this.sparks.dispose();
        for (const ZG of this.hums.values()) ZG.stop();
        this.hums.clear()
      }
      chimeFormed(GG, bG, ZG, wG) {
        const SG = this.outline.check(GG, ZG, wG);
        SG && GG.playSound(bG, "exp_levelup", .6, 1, {
          SG: [SG.box.ctrl[0] + .5, SG.box.ctrl[1], SG.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(GG, bG, ZG) {
        const wG = this.plumes;
        if (0 === wG.length || !GG.particlesEnabled()) return void(this.plumeBudget = 0);
        const SG = wG.reduce(((GG, bG) => GG + 3 * bG.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + SG * bG, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let LG = this.plumeCursor % (SG / 3);
        this.plumeCursor++;
        let yG = wG[0];
        for (const pG of wG) {
          if (LG < pG.level) {
            yG = pG;
            break
          }
          LG -= pG.level
        }
        const {
          lo: kG,
          hi: UG
        } = cU(yG.box);
        if (function(GG, bG, ZG) {
            const wG = Math.max(GG[0] - ZG[0], 0, ZG[0] - bG[0]),
              SG = Math.max(GG[2] - ZG[2], 0, ZG[2] - bG[2]);
            return Math.hypot(wG, ZG[1] - bG[1], SG)
          }(kG, UG, ZG) < 6 && Math.random() > Nh) return;
        const YG = [(kG[0] + UG[0]) / 2, UG[1] + .05, (kG[2] + UG[2]) / 2],
          VG = [(UG[0] - kG[0]) / 2 - .5, .05, (UG[2] - kG[2]) / 2 - .5];
        this.steam ??= GG.createParticles(xh, {
          pos: YG,
          half: VG
        }), this.steam.moveTo(YG, VG), this.steam.emit(1)
      }
      updateHums(GG, bG, ZG, wG) {
        const SG = new Map;
        for (const yG of ZG) "reactor" === yG.kind && yG.level > 0 && Gd(yG.box.ctrl, wG) <= 576 && SG.set(`${LG=yG.box.ctrl,`${LG[0]},${LG[1]},${LG[2]}`}:${yG.level}`, yG);
        var LG;
        for (const [yG, kG] of this.hums) SG.has(yG) || (kG.stop(), this.hums.delete(yG));
        for (const [yG, kG] of SG) {
          if (this.hums.has(yG)) continue;
          const {
            lo: ZG,
            hi: wG
          } = cU(kG.box), SG = [(ZG[0] + wG[0]) / 2, ZG[1], (ZG[2] + wG[2]) / 2], LG = GG.playSound(bG, "rocketEngineLoop", .08 + .06 * kG.level, .55, {
            SG: SG,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          LG && this.hums.set(yG, LG)
        }
      }
    }

    function Gd(GG, bG) {
      return (GG[0] - bG[0]) ** 2 + (GG[1] - bG[1]) ** 2 + (GG[2] - bG[2]) ** 2
    }
    class bd {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      OJ(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const wG = [GG.baf2BombAt[0], GG.baf2BombAt[1], GG.baf2BombAt[2]],
          SG = GG.baf2BombR;
        if (GG.baf2BombBoom) {
          const GG = Math.hypot(bG[0] - wG[0], bG[1] - wG[1], bG[2] - wG[2]);
          this.xh({
            fuse: null,
            blast: {
              at: wG,
              r: SG,
              receivedAt: ZG,
              distance: GG,
              flash: GG <= 3 * SG
            }
          })
        } else this.xh({
          ...this.snapshot,
          fuse: GG.baf2BombMs > 0 ? {
            at: wG,
            r: SG,
            endsAt: ZG + GG.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      xh(GG) {
        this.snapshot = GG;
        for (const bG of this.listeners) bG()
      }
    }
    const Zd = (0, wG.memo)((function(GG) {
      var bG;
      let {
        store: ZG
      } = GG;
      const {
        t: SG
      } = (0, mS.w)(), [LG, yG] = (0, wG.useState)((() => ZG.get())), [kG, UG] = (0, wG.useState)((() => performance.now()));
      (0, wG.useEffect)((() => (yG(ZG.get()), ZG.subscribe((() => {
        yG(ZG.get()), UG(performance.now())
      })))), [ZG]);
      const {
        fuse: YG,
        blast: VG
      } = LG;
      (0, wG.useEffect)((() => {
        if (!YG) return;
        const GG = setInterval((() => {
          UG(performance.now())
        }), 250);
        return () => {
          clearInterval(GG)
        }
      }), [YG]);
      const [pG, fG] = (0, wG.useState)(!1);
      (0, wG.useEffect)((() => {
        if (null === VG || void 0 === VG || !VG.flash) return;
        fG(!0);
        const GG = setTimeout((() => {
          fG(!1)
        }), 2500);
        return () => {
          clearTimeout(GG)
        }
      }), [VG]);
      const QG = YG ? function(GG, bG) {
        return GG.endsAt <= bG ? 0 : Math.ceil((GG.endsAt - bG) / 1e3)
      }(YG, kG) : 0;
      return (0, CL.jsxs)(CL.Fragment, {
        children: [QG > 0 && (0, CL.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: SG("buildAFactory2Game:bombCountdown", {
            amount: String(QG),
            radius: String(null !== (bG = null === YG || void 0 === YG ? void 0 : YG.r) && void 0 !== bG ? bG : 0)
          })
        }), pG && (0, CL.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function wd(GG) {
      const bG = Math.min(4, Math.max(1, GG / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * GG / 4)),
        capSpread: Math.min(5 * GG / 8, 24 * bG),
        capThick: 6 * bG,
        stemHalfWidth: 3 * bG,
        puffScale: bG
      }
    }
    class Sd {
      constructor() {
        this.Ik = !1
      }
      hold(GG) {
        GG.getCameraFar() < 1e3 && (GG.setCameraFar(1e3), this.Ik = !0)
      }
      release(GG) {
        this.Ik && (this.Ik = !1, GG.setCameraFar(null))
      }
    }
    const Ld = 1 / .6,
      yd = [.2, .1, .2],
      kd = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Ud = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Pk.c.Standard,
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
      Yd = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: Pk.c.Standard,
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
      Vd = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Pk.c.Standard,
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
      pd = {
        texture: ch,
        rp: Math.ceil(120) + 4,
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
        blendMode: Pk.c.Add
      };
    class fd {
      constructor(GG) {
        this.store = GG, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Sd, this.timers = []
      }
      onAfterRender(GG, bG) {
        const ZG = performance.now(),
          wG = 0 === this.lastMs ? 0 : Math.min(ZG - this.lastMs, 250) / 1e3;
        this.lastMs = ZG;
        const {
          fuse: SG,
          blast: LG
        } = this.store.get();
        null !== LG && LG !== this.shownBlast && (this.shownBlast = LG, this.startBlast(GG, bG, LG, ZG));
        const yG = GG.particlesEnabled();
        null !== SG && SG.endsAt > ZG && yG ? this.emitBeacon(GG, SG, wG, ZG) : this.beaconBudget = 0, null !== this.cloud && (ZG - this.cloud.startMs > 33e3 ? this.disposeCloud(GG) : (this.far.hold(GG), yG && this.emitCloud(GG, wG, ZG)))
      }
      dispose(GG) {
        var bG;
        null === (bG = this.beacon) || void 0 === bG || bG.dispose(), this.beacon = null, this.disposeCloud(GG);
        for (const ZG of this.timers) clearTimeout(ZG);
        this.timers.length = 0
      }
      emitBeacon(GG, bG, ZG, wG) {
        const SG = bG.endsAt - wG < 5e3 ? 350 : 1e3,
          LG = .5 + .5 * Math.sin(2 * Math.PI * wG / SG);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * LG * ZG, 4), this.beaconBudget < 1) return;
        const yG = Math.floor(this.beaconBudget);
        this.beaconBudget -= yG;
        const [kG, UG, YG] = bG.at, VG = [kG + .5, UG + 1.1, YG + .5];
        this.beacon ??= GG.createParticles(pd, {
          pos: VG,
          half: yd
        }), this.beacon.moveTo(VG), this.beacon.emit(yG)
      }
      startBlast(GG, bG, ZG, wG) {
        var SG;
        null === (SG = this.beacon) || void 0 === SG || SG.dispose(), this.beacon = null, this.disposeCloud(GG);
        const LG = (0, lk.isMobile)() ? .5 : 1;
        this.streams = [Ud, Yd, Vd].map((GG => {
          const bG = Math.round(GG.count * LG);
          return {
            spec: GG,
            particles: null,
            rate: bG / ((GG.toMs - GG.fromMs) / 1e3),
            budget: 0,
            left: bG
          }
        })), this.cloud = {
          blast: ZG,
          startMs: wG
        };
        const yG = Math.max(.25, 1 - ZG.distance / (6 * ZG.r)),
          kG = ZG.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [ZG, wG, SG] of kd) Kd(GG, bG, ZG, yG * wG, SG)
        }), kG))
      }
      emitCloud(GG, bG, ZG) {
        const {
          blast: wG,
          startMs: SG
        } = this.cloud, LG = ZG - SG, [yG, kG, UG] = wG.at, YG = wd(wG.r);
        for (const VG of this.streams) {
          const {
            spec: ZG
          } = VG;
          if (VG.left <= 0 || LG < ZG.fromMs) continue;
          VG.budget += VG.rate * bG;
          const SG = Math.min(Math.floor(VG.budget), VG.left);
          if (SG < 1) continue;
          VG.budget -= SG, VG.left -= SG;
          const pG = VG.particles ??= this.createStream(GG, ZG, wG);
          if (ZG === Ud) {
            const GG = YG.stemHalfWidth;
            pG.moveTo([yG, kG + 1, UG], [GG, 1, GG])
          } else if (ZG === Yd) {
            const GG = YG.capSpread * Math.min(1, (LG - ZG.fromMs) / 3e3),
              bG = Math.sqrt(Math.random()),
              wG = 2 * Math.random() * Math.PI,
              SG = Math.cos(wG) * bG,
              VG = Math.sin(wG) * bG,
              fG = yG + SG * GG,
              QG = UG + VG * GG,
              KG = YG.capThick,
              hG = kG + YG.capHeight + KG * (1 - bG * bG) * 2;
            pG.setDirections([.7 * SG, .05, .7 * VG], [SG, .2, VG]), pG.moveTo([fG, hG, QG], [KG, KG, KG])
          } else {
            this.ringAngle += 2.39996;
            const GG = Math.cos(this.ringAngle),
              bG = Math.sin(this.ringAngle);
            pG.setDirections([GG, .05, bG], [GG, .1, bG]), pG.moveTo([yG + 2 * GG, kG + .5, UG + 2 * bG], [0, .5, 0])
          }
          pG.emit(SG)
        }
      }
      createStream(GG, bG, ZG) {
        const {
          r: wG
        } = ZG, SG = Math.max(bG.life[0], wG / 25), LG = bG === Vd ? [.9 * SG, SG] : bG.life, yG = wd(wG), kG = bG === Vd ? 1 : yG.puffScale, UG = {
          texture: ch,
          rp: bG.count + 4,
          minLifeTime: LG[0] / Ld,
          maxLifeTime: LG[1] / Ld,
          minSize: bG.size[0] * kG,
          maxSize: bG.size[1] * kG,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, bG.gravity * Ld * Ld, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: bG.from[0],
            maxColor: bG.from[1]
          }, {
            timeFraction: .6,
            minColor: Qd(bG.from[0], bG.to[0]),
            maxColor: Qd(bG.from[1], bG.to[1])
          }, {
            timeFraction: 1,
            minColor: bG.to[0],
            maxColor: bG.to[1]
          }],
          blendMode: bG.blend
        };
        if (bG === Ud) {
          const GG = yG.capHeight / ((LG[0] + LG[1]) / 2);
          UG.minEmitPower = .9 * GG * Ld, UG.maxEmitPower = 1.05 * GG * Ld, UG.dir1 = [-.1, 1, -.1], UG.dir2 = [.1, 1, .1]
        } else bG === Yd ? (UG.minEmitPower = 1.2, UG.maxEmitPower = 2, UG.dir1 = [-1, .05, -1], UG.dir2 = [1, .2, 1]) : (UG.minEmitPower = 39.583333333333336, UG.maxEmitPower = 41.66666666666667, UG.dir1 = [1, 0, 0], UG.dir2 = [1, 0, 0]);
        return GG.createParticles(UG, {
          pos: ZG.at
        })
      }
      disposeCloud(GG) {
        for (const ZG of this.streams) {
          var bG;
          null === (bG = ZG.particles) || void 0 === bG || bG.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(GG)
      }
    }

    function Qd(GG, bG) {
      return [(GG[0] + bG[0]) / 2, (GG[1] + bG[1]) / 2, (GG[2] + bG[2]) / 2, .75 * GG[3]]
    }

    function Kd(GG, bG, ZG, wG, SG) {
      try {
        GG.playSound(bG, ZG, wG, SG)
      } catch (LG) {
        console.error(LG)
      }
    }
    const hd = {
        rp: 720,
        perS: 100
      },
      dd = {
        rp: 320,
        perS: 44
      };
    class Jd {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(GG, bG) {
        this.zone = {
          centre: [...GG.centre],
          r: GG.r,
          band: GG.band ? [GG.band[0], GG.band[1]] : void 0
        }, this.endsAt = bG
      }
      stop() {
        this.zone = null
      }
      OJ(GG, bG) {
        const {
          baf2FalloutMs: ZG,
          baf2FalloutAt: wG,
          baf2FalloutR: SG,
          baf2FalloutY: LG
        } = GG;
        ZG > 0 && wG && void 0 !== SG ? this.start({
          centre: wG,
          r: SG,
          band: LG
        }, bG + ZG) : this.stop()
      }
      perS(GG, bG, ZG) {
        const wG = this.zone;
        if (!wG) return 0;
        const SG = this.endsAt - GG;
        return SG <= 0 ? (this.zone = null, 0) : wG.band && (bG[1] < wG.band[0] || bG[1] > wG.band[1]) || Math.hypot(bG[0] - wG.centre[0], bG[2] - wG.centre[2]) > wG.r ? 0 : ZG.perS * Math.min(1, SG / 5e3)
      }
    }
    const rd = [5, 7],
      zd = [24, 8, 24],
      Ed = .5,
      od = 1 / .6,
      Xd = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class ud {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lk.isMobile)();
        this.state = new Jd, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(GG) {
          return GG ? dd : hd
        }(GG)
      }
      startFallout(GG, bG) {
        this.state.start(GG, bG)
      }
      stopFallout() {
        this.state.stop()
      }
      OJ(GG) {
        this.state.OJ(GG, performance.now())
      }
      onAfterRender(GG, bG) {
        var ZG;
        const wG = performance.now(),
          SG = 0 === this.lastMs ? 0 : Math.min(wG - this.lastMs, 250) / 1e3;
        this.lastMs = wG;
        const LG = this.state.perS(wG, bG, this.tier);
        if (LG <= 0 || !GG.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + LG * SG, LG / 4);
        const yG = Math.floor(this.budget);
        if (yG < 1) return;
        this.budget -= yG;
        const kG = this.at;
        kG[0] = bG[0], kG[1] = bG[1] + 12, kG[2] = bG[2];
        const UG = null !== (ZG = this.systems) && void 0 !== ZG ? ZG : this.create(GG, kG),
          YG = this.amounts;
        YG[0] = 0, YG[1] = 0;
        for (let VG = 0; VG < yG; VG++) YG[Math.random() < .3 ? 1 : 0]++;
        for (let VG = 0; VG < UG.length; VG++) YG[VG] > 0 && (UG[VG].moveTo(kG, zd), UG[VG].emit(YG[VG]))
      }
      dispose() {
        for (const bG of null !== (GG = this.systems) && void 0 !== GG ? GG : []) {
          var GG;
          bG.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(GG, bG) {
        return this.systems = Xd.map((ZG => {
          let {
            rgba: [wG, SG, LG, yG],
            share: kG
          } = ZG;
          const UG = {
            texture: "square_particle",
            rp: Math.ceil(this.tier.rp * kG),
            minLifeTime: rd[0] / od,
            maxLifeTime: rd[1] / od,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Ed, -1, Ed],
            colorGradients: [{
              timeFraction: 0,
              minColor: [wG, SG, LG, 0]
            }, {
              timeFraction: .15,
              minColor: [wG, SG, LG, yG]
            }, {
              timeFraction: .8,
              minColor: [wG, SG, LG, yG]
            }, {
              timeFraction: 1,
              minColor: [wG, SG, LG, 0]
            }],
            blendMode: Pk.c.Standard
          };
          return GG.createParticles(UG, {
            pos: bG,
            half: zd
          })
        })), this.systems
      }
    }
    const Cd = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Wd(GG) {
      const bG = /\|rot(\d)/.exec(GG);
      return Cd[bG ? Number(bG[1]) : 1]
    }
    var md = ZG(595),
      Id = ZG(38874);
    const Fd = new Set(md.o);

    function vd(GG) {
      if (-2 !== GG.count) return null;
      const bG = eG(GG.item);
      return null !== bG && Fd.has(bG) ? bG : null
    }

    function cd(GG) {
      const {
        width: bG,
        height: ZG
      } = (0, Id.e)(GG).hitBoxDimensions;
      return .55 / Math.max(bG, ZG)
    }

    function ld(GG, bG, ZG) {
      if (!ZG) return !1;
      const wG = GG[0] + .5 - bG[0],
        SG = GG[1] + .5 - bG[1],
        LG = GG[2] + .5 - bG[2];
      return wG * wG + SG * SG + LG * LG <= 576
    }

    function jd(GG, bG) {
      return Math.atan2(GG[0], GG[2]) + Math.PI + bG
    }

    function Pd(GG, bG) {
      const ZG = 2 * Math.PI;
      return (GG + ZG * bG / 1e4) % ZG
    }
    class Md {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = GG, this.now = bG, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = GG.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(GG, bG) {
        if (0 === this.farms.size) return;
        const ZG = this.now(),
          wG = Number.isNaN(this.frameMs) ? 0 : Math.min(ZG - this.frameMs, 100);
        this.frameMs = ZG, ZG - this.checkedMs >= 1e3 && (this.checkedMs = ZG, this.check(GG, bG));
        for (const SG of this.farms.values()) SG.shown && SG.running && null !== SG.model && wG > 0 && (SG.spin = Pd(SG.spin, wG), SG.model.setPose(SG.feet, jd(SG.front, SG.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const GG of this.farms.values()) this.drop(GG);
        this.farms.clear()
      }
      sync() {
        const GG = new Set;
        for (const bG of this.labels.list()) {
          const ZG = vd(bG);
          if (null === ZG) continue;
          GG.add(bG.key);
          const wG = this.farms.get(bG.key);
          if ((null === wG || void 0 === wG ? void 0 : wG.mob) === ZG) continue;
          wG && this.drop(wG);
          const [SG, LG, yG] = bG.pos;
          this.farms.set(bG.key, {
            pos: bG.pos,
            feet: [SG + .5, LG + 1, yG + .5],
            mob: ZG,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [bG, ZG] of this.farms) GG.has(bG) || (this.drop(ZG), this.farms.delete(bG));
        this.checkedMs = -1 / 0
      }
      check(GG, bG) {
        for (const ZG of this.farms.values()) {
          const [wG, SG, LG] = ZG.pos, yG = AK(GG, ZG.pos);
          null !== yG && vZ(yG) === jG && ld(ZG.pos, bG, "Air" === AK(GG, [wG, SG + 1, LG])) ? (ZG.running = yG.endsWith("|Running"), ZG.front = Wd(yG), null === ZG.model && (ZG.model = GG.createMobModel(ZG.mob, cd(ZG.mob)), null === ZG.model) || (ZG.model.setPose(ZG.feet, jd(ZG.front, ZG.spin)), ZG.shown || (ZG.model.setVisible(!0), ZG.shown = !0))) : (ZG.shown && null !== ZG.model && ZG.model.setVisible(!1), ZG.shown = !1)
        }
      }
      drop(GG) {
        var bG;
        null === (bG = GG.model) || void 0 === bG || bG.dispose(), GG.model = null, GG.shown = !1
      }
    }
    class Ad {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(GG) {
        var bG;
        this.island = GG.baf2ColIsland, this.islandSite = (bG = GG.baf2ColSite) && 8 === bG.length ? {
          spawnXZ: [bG[0], bG[1]],
          coreXZ: [bG[2], bG[3]],
          minXZ: [bG[4], bG[5]],
          maxXZ: [bG[6], bG[7]]
        } : null, this.views = GG.baf2ColList.map((GG => ({
          entry: kS(GG)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(GG) {
        this.status = GG, this.emit()
      }
      onOpen(GG) {
        this.openHeld = GG
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
        return this.views.map((GG => GG.entry))
      }
      entryAtRoot(GG) {
        var bG;
        return null === (bG = this.views.find((bG => {
          let {
            entry: ZG
          } = bG;
          return ZG.focus[0] === GG[0] && ZG.focus[1] === GG[1] + 1 && ZG.focus[2] === GG[2]
        }))) || void 0 === bG ? void 0 : bG.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(GG, bG) {
        return qU(this.entries(), GG, bG)
      }
      lookSource() {
        return {
          handles: GG => fw(GG) >= 0 || Qw(GG),
          line: (GG, bG) => this.lookLine(GG, bG),
          version: () => this.beamsVersion
        }
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const GG of this.listeners) GG()
      }
    }
    const sd = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((GG => GG / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((GG => [GG, GG + 1, GG + 2, GG, GG + 2, GG + 3]))
    };

    function qd(GG, bG, ZG, wG, SG, LG, yG) {
      let kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const UG = Math.cos(kG),
        YG = Math.sin(kG),
        VG = GG.positions.length / 3,
        {
          positions: pG,
          indices: fG
        } = sd;
      for (let QG = 0; QG < pG.length; QG += 3) {
        const kG = pG[QG] * SG,
          VG = pG[QG + 2] * yG;
        GG.positions.push(bG + kG * UG + VG * YG, ZG + pG[QG + 1] * LG, wG - kG * YG + VG * UG)
      }
      for (const QG of fG) GG.indices.push(VG + QG)
    }

    function nd(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return bG < 1 ? {
        rgb: GG,
        alpha: bG
      } : {
        rgb: GG,
        alpha: 1,
        opaque: !0
      }
    }
    class gd {
      constructor(GG, bG) {
        this.style = GG, this.perSource = bG, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(GG) {
        this.sources = GG, 0 === GG.length && (this.budget = 0)
      }
      Tp(GG, bG, ZG) {
        const wG = this.sources.length;
        if (0 !== wG) {
          var SG, LG;
          this.budget = Math.min(this.budget + (SG = wG, LG = this.perSource, Math.min(SG * LG, bY) * bG), 2);
          for (let bG = 0; bG < wG && this.budget >= 1; bG++) {
            const bG = this.sources[this.cursor % wG];
            this.cursor = (this.cursor + 1) % wG;
            if (!(Math.max(Math.abs(bG.x - ZG[0]), Math.abs(bG.y - ZG[1]), Math.abs(bG.z - ZG[2])) > 32)) return this.puff(GG, bG), void this.budget--
          }
        }
      }
      dispose() {
        var GG;
        null === (GG = this.particles) || void 0 === GG || GG.dispose(), this.particles = null, this.sources = []
      }
      puff(GG, bG) {
        let {
          x: ZG,
          y: wG,
          z: SG,
          h: LG,
          faces: yG
        } = bG;
        const kG = function(GG, bG, ZG, wG, SG) {
            const [LG, yG, kG] = SG[Math.floor(Math.random() * SG.length)], UG = .04, YG = (GG, bG, ZG) => GG > 0 ? bG + ZG + UG : GG < 0 ? bG - UG : bG + .1, VG = (GG, bG, ZG) => GG > 0 ? bG + ZG + UG : GG < 0 ? bG - UG : bG + ZG - .1, pG = [YG(LG, GG, 1), YG(yG, bG, wG), YG(kG, ZG, 1)], fG = [VG(LG, GG, 1), VG(yG, bG, wG), VG(kG, ZG, 1)];
            return {
              pos: [(pG[0] + fG[0]) / 2, (pG[1] + fG[1]) / 2, (pG[2] + fG[2]) / 2],
              half: [(fG[0] - pG[0]) / 2, (fG[1] - pG[1]) / 2, (fG[2] - pG[2]) / 2],
              out: [LG, yG, kG]
            }
          }(ZG, wG, SG, LG, yG),
          {
            style: UG
          } = this,
          YG = this.particles ??= GG.createParticles(jh(UG, Math.ceil(UG.count * bY * UG.life[1]) + 4), kG);
        YG.moveTo(kG.pos, kG.half);
        const [VG, pG, fG] = kG.out, QG = UG.spread;
        YG.setDirections([VG - QG, .6 + pG, fG - QG], [VG + QG, 1 + pG, fG + QG]), YG.emit(UG.count)
      }
    }
    const ed = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Rd {
      constructor() {
        this.green = new gd(wY.green, BU), this.pink = new gd(wY.pink, GY), this.colliders = [], this.lastMs = 0
      }
      setSources(GG) {
        this.colliders = GG;
        const bG = [],
          ZG = [];
        for (const wG of GG) {
          const [GG, SG, LG] = wG.focus;
          bG.push({
            x: GG,
            y: SG - 1,
            z: LG,
            h: 2,
            faces: ed
          });
          for (let bG = 0; bG < 4; bG++) {
            if (!wG.live[bG]) continue;
            const [GG, SG, LG] = dw(wG.focus, bG, yw.LASER_D), [yG, , kG] = hw[bG], UG = ed.filter((GG => GG[0] !== yG || GG[2] !== kG || 0 !== GG[1]));
            ZG.push({
              x: GG,
              y: SG,
              z: LG,
              h: 1,
              faces: UG
            })
          }
        }
        this.green.setSources(bG), this.pink.setSources(ZG)
      }
      onAfterRender(GG) {
        const bG = performance.now(),
          ZG = 0 === this.lastMs ? 0 : Math.min(bG - this.lastMs, 250) / 1e3;
        if (this.lastMs = bG, 0 === this.colliders.length || !GG.particlesEnabled()) return;
        const wG = GG.getCameraPosition();
        this.green.Tp(GG, ZG, wG), this.pink.Tp(GG, ZG, wG)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Td = 1.04,
      Hd = nd([1, 120 / 255, 220 / 255]),
      td = nd([1, .25, .25], .35);
    class Dd {
      constructor(GG) {
        this.store = GG, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Rd
      }
      onAfterRender(GG) {
        this.store.version() !== this.builtVersion && this.rebuild(GG);
        const bG = performance.now();
        for (const ZG of this.beams) {
          const wG = 1 + .35 * Math.sin(bG / 700 * Math.PI * 2 + ZG.phase);
          GG.setGameMesh(ZG.mesh, {
            scale: [ZG.alongX ? 1 : wG, wG, ZG.alongX ? wG : 1]
          })
        }
        this.glow.onAfterRender(GG)
      }
      dispose(GG) {
        this.clear(GG), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(GG) {
        this.clear(GG), this.builtVersion = this.store.version();
        const bG = [];
        for (const {
            entry: ZG
          }
          of this.store.colliders()) ZG.on && ZG.live.some(Boolean) && (this.addBeams(GG, ZG), bG.push(ZG)), ZG.blockers.length > 0 && this.addMarkers(GG, ZG);
        this.glow.setSources(bG)
      }
      addBeams(GG, bG) {
        const [ZG, wG, SG] = bG.focus, LG = xU - .25, yG = (.25 + xU) / 2;
        for (let kG = 0; kG < 4; kG++) {
          if (!bG.live[kG]) continue;
          const [UG, , YG] = hw[kG], VG = 0 !== UG, pG = {
            positions: [],
            indices: []
          };
          qd(pG, 0, 0, 0, VG ? LG : .2, .2, VG ? .2 : LG);
          const fG = [ZG + .5 + UG * yG, wG + .5, SG + .5 + YG * yG],
            QG = GG.createGameMesh(pG, Hd, fG);
          this.meshes.push(QG), this.beams.push({
            mesh: QG,
            alongX: VG,
            phase: kG * Math.PI / 2
          })
        }
      }
      addMarkers(GG, bG) {
        const ZG = bG.blockers[0],
          wG = {
            positions: [],
            indices: []
          };
        for (const [SG, LG, yG] of bG.blockers) qd(wG, SG - ZG[0] + .5, LG - ZG[1] + .5, yG - ZG[2] + .5, Td, Td, Td);
        this.meshes.push(GG.createGameMesh(wG, td, ZG))
      }
      clear(GG) {
        for (const bG of this.meshes) GG.disposeGameMesh(bG);
        this.meshes = [], this.beams = []
      }
    }
    const Nd = [.56, .83, 1],
      Od = [1, .73, .08],
      xd = [1, .25, .25],
      Bd = [.85, .85, .85],
      GJ = [.3, .45, .6];

    function bJ(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const yG = SG / 2,
        kG = SG + LG;
      for (const UG of [-yG, yG])
        for (const SG of [-yG, yG]) qd(GG, bG, ZG + UG, wG + SG, kG, LG, LG), qd(GG, bG + UG, ZG, wG + SG, LG, kG, LG), qd(GG, bG + UG, ZG + SG, wG, LG, LG, kG)
    }

    function ZJ(GG) {
      return bG => GG.isBlockInLoadedChunk(bG[0], bG[1], bG[2]) && 0 === GG.getBlockId(bG[0], bG[1], bG[2])
    }

    function wJ(GG) {
      return GG.map((GG => {
        let {
          free: bG,
          blocked: ZG,
          gaps: wG,
          supports: SG
        } = GG;
        return `${bG.join(";")}|${ZG.join(";")}|${wG.join(";")}|${SG.join(";")}`
      })).join("/")
    }

    function SJ(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const LG = bG[0],
        yG = {
          positions: [],
          indices: []
        };
      for (const [kG, UG, YG] of bG) bJ(yG, kG - LG[0] + .5, UG - LG[1] + .5, YG - LG[2] + .5, wG, SG);
      return GG.createGameMesh(yG, ZG, LG)
    }
    class LJ {
      constructor(GG) {
        this.store = GG, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(GG, bG, ZG) {
        var wG;
        const SG = null === (wG = GG.YZG(bG)) || void 0 === wG ? void 0 : wG.name;
        if (SG !== Uw && SG !== kw) return void("" !== this.shownKey && this.show(GG, "", []));
        const LG = performance.now();
        if (LG - this.lastCheckMs >= 200 && (this.lastCheckMs = LG, SG === Uw ? this.check(GG, ZG) : this.preview(GG, ZG)), this.pulses.length > 0) {
          const bG = 1 + .12 * Math.sin(LG / 1e3 * 1.25 * Math.PI * 2),
            ZG = [bG, bG, bG];
          for (const wG of this.pulses) GG.setGameMesh(wG, {
            scale: ZG
          })
        }
      }
      dispose(GG) {
        this.clear(GG), this.shownKey = ""
      }
      check(GG, bG) {
        const ZG = ZJ(GG),
          wG = [];
        for (const {
            entry: LG
          }
          of this.store.colliders()) {
          LG.focus.every(((GG, ZG) => Math.abs(GG + .5 - bG[ZG]) <= yw.GHOST_REACH)) && wG.push(OU(LG, ZG))
        }
        const SG = wJ(wG);
        SG !== this.shownKey && this.show(GG, SG, wG)
      }
      preview(GG, bG) {
        const ZG = GG.getTargetedBlock(),
          wG = ZG ? [ZG.Oh[0], ZG.Oh[1], ZG.Oh[2]] : null,
          SG = null !== wG && wG.every(((GG, ZG) => Math.abs(GG + .5 - bG[ZG]) <= 8)),
          LG = this.store.site(),
          yG = SG && LG ? function(GG, bG, ZG) {
            const wG = Kw(GG);
            if (!wG.every(bG)) return null;
            const SG = zw(GG, ZG);
            return {
              column: wG,
              spots: OU({
                focus: wG[1],
                lasers: [!1, !1, !1, !1],
                open: SG,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, bG),
              fits: SG.filter(Boolean).length >= yw.MIN_SPOTS
            }
          }(wG, ZJ(GG), LG) : null,
          kG = yG ? [yG.spots] : [],
          UG = yG ? `preview ${wG.join(",")}|${yG.fits}|${wJ(kG)}` : "";
        var YG, VG;
        UG !== this.shownKey && this.show(GG, UG, kG, null !== (YG = null === yG || void 0 === yG ? void 0 : yG.column) && void 0 !== YG ? YG : [], null === (VG = null === yG || void 0 === yG ? void 0 : yG.fits) || void 0 === VG || VG)
      }
      show(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          SG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(GG), this.shownKey = bG, wG.length > 0 && this.meshes.push(SJ(GG, wG, nd(SG ? Bd : xd)));
        for (const {
            free: LG,
            blocked: yG,
            gaps: kG,
            supports: UG
          }
          of ZG) {
          for (const [bG, ZG, wG] of LG) {
            const SG = {
              positions: [],
              indices: []
            };
            bJ(SG, 0, 0, 0);
            const LG = GG.createGameMesh(SG, nd(Nd), [bG + .5, ZG + .5, wG + .5]);
            this.meshes.push(LG), this.pulses.push(LG)
          }
          yG.length > 0 && this.meshes.push(SJ(GG, yG, nd(Od))), kG.length > 0 && this.meshes.push(SJ(GG, kG, nd(xd), 1.06, .07)), UG.length > 0 && this.meshes.push(SJ(GG, UG, nd(GJ)))
        }
      }
      clear(GG) {
        for (const bG of this.meshes) GG.disposeGameMesh(bG);
        this.meshes = [], this.pulses = []
      }
    }
    class yJ {
      constructor() {
        this.stored = new Map, this.Ik = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(GG) {
        if (!GG.baf2TermOpen) return !1;
        GG.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [bG, ZG] of GG.baf2TermItems) ZG > 0 ? this.stored.set(bG, ZG) : this.stored.delete(bG);
        if (GG.baf2TermHeld && (this.Ik = new Map(GG.baf2TermHeld)), this.pending = this.pending.filter((bG => bG.seq > GG.baf2TermAcked)), this.silos = GG.baf2TermSilos, this.readOnly = GG.baf2TermReadOnly, this.pocket = !0 === GG.baf2TermPocket, GG.baf2TermReset) this.resort();
        else {
          const GG = new Set(this.order);
          for (const bG of this.stored.keys()) GG.has(bG) || this.order.push(bG)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((GG, bG) => this.amount(bG) - this.amount(GG) || GG.localeCompare(bG))), this.changed()
      }
      take(GG, bG) {
        const ZG = kb(GG, this.amount(bG));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: bG,
          amount: ZG,
          put: !1
        }), this.recents = [bG, ...this.recents.filter((GG => GG !== bG))].slice(0, 6), this.changed(), Zb(this.seq, GG, bG)
      }
      put(GG, bG) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: bG,
          amount: kb(GG, this.heldAmount(bG)),
          put: !0
        }), this.changed(), wb(this.seq, GG, bG)
      }
      putAll() {
        this.seq++;
        for (const GG of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: GG,
          amount: this.heldAmount(GG),
          put: !0
        });
        return this.changed(), Sb(this.seq)
      }
      amount(GG) {
        var bG;
        let ZG = null !== (bG = this.stored.get(GG)) && void 0 !== bG ? bG : 0;
        for (const wG of this.pending) wG.item === GG && (ZG += wG.put ? wG.amount : -wG.amount);
        return Math.max(0, ZG)
      }
      heldAmount(GG) {
        var bG;
        let ZG = null !== (bG = this.Ik.get(GG)) && void 0 !== bG ? bG : 0;
        for (const wG of this.pending) wG.put && wG.item === GG && (ZG -= wG.amount);
        return Math.max(0, ZG)
      }
      heldItems() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((bG => bG === GG || this.heldAmount(bG) > 0))
      }
      items() {
        return this.order.filter((GG => this.amount(GG) > 0))
      }
      recent() {
        return this.recents.filter((GG => this.amount(GG) > 0))
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
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      changed() {
        this.version++;
        for (const GG of this.listeners) GG()
      }
    }
    var kJ = ZG(38829);
    const UJ = {
      isBlock: GG => void 0 !== vG.l[GG],
      harvestType: GG => {
        var bG;
        return null === (bG = vG.l[GG]) || void 0 === bG ? void 0 : bG.harvestType
      },
      harvestLevel: GG => {
        var bG;
        return null === (bG = vG.l[GG]) || void 0 === bG ? void 0 : bG.harvestLevel
      },
      dropsNothing: GG => {
        var bG;
        return null === (null === (bG = vG.l[GG]) || void 0 === bG ? void 0 : bG.drops)
      },
      displayName: GG => {
        var bG;
        return null === (bG = By.l[GG]) || void 0 === bG ? void 0 : bG.displayName
      },
      description: GG => {
        var bG;
        return null === (bG = By.l[GG]) || void 0 === bG ? void 0 : bG.description
      },
      harvests: GG => {
        var bG;
        return null === (bG = By.l[GG]) || void 0 === bG ? void 0 : bG.harvests
      },
      level: GG => {
        var bG;
        return null === (bG = By.l[GG]) || void 0 === bG ? void 0 : bG.level
      }
    };

    function YJ(GG, bG, ZG) {
      return function(GG, bG, ZG, wG) {
        var SG, LG;
        const yG = bG.split("|")[0],
          kG = GG.isBlock(bG) ? bG : GG.isBlock(yG) ? yG : null;
        if (null === kG || "rock" !== GG.harvestType(kG) || GG.dropsNothing(kG) && !sw.has(yG)) return null;
        const UG = ZG && "rock" === GG.harvests(ZG) ? null !== (SG = GG.level(ZG)) && void 0 !== SG ? SG : 0 : null,
          YG = null !== (LG = null !== wG && void 0 !== wG ? wG : GG.harvestLevel(kG)) && void 0 !== LG ? LG : 0;
        return (null !== UG ? YG <= UG : 0 === GG.harvestLevel(kG)) ? null : Ww(GG, YG)
      }(UJ, GG, bG, ZG)
    }

    function VJ(GG, bG) {
      return function(GG, bG, ZG) {
        if (bG === Cw[0]) return [(0, lG.ue)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, lG.O.whiteUiText)];
        const wG = ZG.split("|")[0],
          SG = GG.isBlock(wG) ? GG.displayName(wG) : void 0,
          LG = "string" === typeof SG ? SG : SG && "translationKey" in SG ? `$t(${SG.translationKey})` : wG;
        return [(0, lG.ue)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: LG
          }
        }, lG.O.whiteUiText), (0, lG.ue)({
          translationKey: `item:${(0,lG.Se)(bG)}`
        }, lG.O.yellowUiText)]
      }(UJ, GG, bG)
    }
    const pJ = "buildAFactory2Game:";
    const fJ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function QJ(GG) {
      return GG.endsWith(" Ore")
    }
    const KJ = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      hJ = [],
      dJ = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: KJ,
        plan: null,
        atomic: hJ
      },
      JJ = "buildAFactory2Game:",
      rJ = new Set(["Splitter", "Sorting Gate"]),
      zJ = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class EJ {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = GG, this.planAt = bG, this.tierOf = ZG, this.Gk = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Ik = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = dJ, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(GG, bG, ZG) {
        var wG, SG, LG;
        let yG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const kG = null !== (wG = null === (SG = GG.YZG(bG)) || void 0 === SG ? void 0 : SG.name) && void 0 !== wG ? wG : null,
          UG = GG.isPlayerCrouching(bG),
          YG = 0 === ZG ? null : this.resolve(GG, ZG),
          VG = null !== YG && null !== yG && rJ.has(YG.rootName) && function(GG, bG) {
            return zJ.some((ZG => {
              let [wG, SG] = ZG;
              const LG = GG.getBlockId(bG[0] + wG, bG[1], bG[2] + SG);
              return 0 !== LG && "Express Belt" === GG.getMetaInfo(LG).rootName
            }))
          }(GG, yG),
          pG = this.updatePlan(0 === ZG ? null : yG),
          fG = this.tierOf(),
          QG = null === yG ? null : (0, kJ.c)(ZG),
          KG = null !== QG && null !== yG && (0, kJ.g)(function(GG) {
            return (bG, ZG, wG) => GG.getBlockId(bG, ZG, wG)
          }(GG), yG[0], yG[1], yG[2], QG),
          hG = this.readAfloat(GG, ZG, yG);
        if (ZG === this.Gk && KG === this.missesMaker && hG === this.afloat && kG === this.Ik && UG === this.crouching && VG === this.express && fG === this.tier && !pG && (!this.targetsLive || !this.liveMoved(yG))) return;
        this.Gk = ZG, this.missesMaker = KG, this.afloat = hG, this.Ik = kG, this.crouching = UG, this.express = VG;
        const dG = VG && YG ? function(GG) {
          if (null === GG.info) return null;
          return GG.express ??= {
            ...GG.info,
            detail: `${JJ}lookKeepsUpExpress`,
            detailItem: null
          }, GG.express
        }(YG) : null !== YG && KG && null !== QG ? this.besideMaker(YG, ZG, QG) : null !== YG && hG ? this.hanging(YG) : null !== (LG = null === YG || void 0 === YG ? void 0 : YG.info) && void 0 !== LG ? LG : null;
        this.tier = fG;
        const JG = YG && dG ? function(GG, bG) {
          var ZG, wG;
          const SG = vG.l[GG];
          if (!GG.endsWith(" Ore") || "rock" !== (null === SG || void 0 === SG ? void 0 : SG.harvestType) || 0 === SG.harvestLevel) return null;
          const LG = null !== (ZG = SG.harvestLevel) && void 0 !== ZG ? ZG : 0,
            yG = bG ? By.l[bG] : void 0;
          if ("rock" === (null === yG || void 0 === yG ? void 0 : yG.harvests) && (null !== (wG = yG.level) && void 0 !== wG ? wG : 0) >= LG) return null;
          const kG = (UG = LG, Ww(UJ, UG));
          var UG;
          if (null === kG) return null;
          const YG = wL(kG),
            VG = /^[AEIOU]/.test(kG) ? "An" : "";
          if ("rock" === (null === yG || void 0 === yG ? void 0 : yG.harvests) && bG) return {
            key: `${JJ}lookToolTooWeak${VG}`,
            Ik: wL(bG),
            needed: YG
          };
          return {
            key: kG === Cw[0] ? `${JJ}lookNeedAnyPickaxe` : `${JJ}lookNeedPickaxe${VG}`,
            Ik: null,
            needed: YG
          }
        }(YG.rootName, kG) : null;
        this.targetsLive = !0 === (null === YG || void 0 === YG ? void 0 : YG.live) && null !== yG;
        let rG = null;
        this.targetsLive && YG && yG && this.live && (this.livePos[0] = yG[0], this.livePos[1] = yG[1], this.livePos[2] = yG[2], this.liveVersion = this.live.version(), rG = this.live.line(YG.rootName, yG));
        const zG = null === dG ? KJ : function(GG, bG, ZG) {
            const wG = function(GG, bG, ZG) {
              const wG = cZ(GG);
              if (null === wG) return null;
              const SG = `${pJ}lookPortMode_${wG}`,
                LG = gw(bG);
              if (LG && ZG) return {
                mode: null,
                detail: SG,
                next: `${pJ}lookWrenchPickUp`,
                nextState: null
              };
              const yG = lZ(GG),
                kG = null === yG ? null : cZ(yG);
              return null === kG ? {
                mode: null,
                detail: SG,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: SG,
                next: LG ? `${pJ}lookWrenchNext` : `${pJ}lookPortWrench`,
                nextState: `${pJ}lookPortState_${kG}`
              }
            }(GG, bG, ZG);
            if (null !== wG) return wG;
            const SG = wS(GG, bG, ZG);
            return null === SG.mode && null === SG.next ? KJ : SG
          }(GG.blockIdToBlockName(ZG), kG, UG),
          EG = this.plan,
          oG = YG && dG ? this.rowsOf(YG.rootName, fG) : hJ,
          XG = this.snapshot;
        if (!(null === dG ? !XG.visible : XG.visible && dG === XG.info && (uG = JG, iG = XG.tool, uG === iG || null !== uG && null !== iG && uG.key === iG.key && uG.Ik === iG.Ik && uG.needed === iG.needed) && function(GG, bG) {
            return GG === bG || null !== GG && null !== bG && GG.key === bG.key && JSON.stringify([GG.params, GG.keys]) === JSON.stringify([bG.params, bG.keys])
          }(rG, XG.live) && function(GG, bG) {
            return GG.mode === bG.mode && GG.detail === bG.detail && GG.next === bG.next && GG.nextState === bG.nextState
          }(zG, XG.wrench) && NK(EG, XG.plan) && oG === XG.atomic)) {
          var uG, iG;
          this.snapshot = null === dG ? {
            ...XG,
            visible: !1
          } : {
            info: dG,
            visible: !0,
            tool: JG,
            live: rG,
            wrench: zG,
            plan: EG,
            atomic: oG
          };
          for (const GG of this.listeners) GG()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = dJ, this.Gk = 0, this.Ik = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(GG, bG, ZG) {
        if (null === ZG || 0 === bG || !kG() || !QJ(this.resolve(GG, bG).rootName)) return !1;
        const wG = `${ZG[0]},${ZG[1]},${ZG[2]},${bG}`,
          SG = performance.now();
        return wG === this.afloatKey && SG - this.afloatAt < oJ ? this.afloat : (this.afloatKey = wG, this.afloatAt = SG, function(GG, bG) {
          for (const [ZG, wG, SG] of fJ) {
            const LG = bG(GG[0] + ZG, GG[1] + wG, GG[2] + SG);
            if (void 0 === LG || null !== LG && !QJ(LG)) return !1
          }
          return !0
        }(ZG, ((bG, ZG, wG) => function(GG, bG, ZG, wG) {
          if (!GG.isBlockInLoadedChunk(bG, ZG, wG)) return;
          const SG = GG.getBlockId(bG, ZG, wG);
          return 0 === SG ? null : GG.getMetaInfo(SG).rootName
        }(GG, bG, ZG, wG))))
      }
      liveMoved(GG) {
        var bG;
        const {
          livePos: ZG
        } = this;
        return null === GG || GG[0] !== ZG[0] || GG[1] !== ZG[1] || GG[2] !== ZG[2] || (null === (bG = this.live) || void 0 === bG ? void 0 : bG.version()) !== this.liveVersion
      }
      updatePlan(GG) {
        const bG = null === GG ? "" : GG.join(","),
          ZG = performance.now();
        if (bG === this.planPos && ZG - this.planMs < 250) return !1;
        this.planPos = bG, this.planMs = ZG;
        const wG = null === GG ? null : this.planAt([GG[0], GG[1], GG[2]]),
          SG = !NK(wG, this.plan);
        return this.plan = wG, SG
      }
      besideMaker(GG, bG, ZG) {
        let {
          info: wG
        } = GG;
        if (null === wG) return null;
        let SG = this.besideMakerById.get(bG);
        if (void 0 === SG) {
          const GG = "cryo" === ZG ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          SG = {
            ...wG,
            detail: `${JJ}${GG}`,
            detailItem: null
          }, this.besideMakerById.set(bG, SG)
        }
        return SG
      }
      hanging(GG) {
        let {
          info: bG,
          rootName: ZG
        } = GG;
        if (null === bG) return null;
        let wG = this.afloatByRoot.get(ZG);
        return void 0 === wG && (wG = {
          ...bG,
          detail: `${JJ}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(ZG, wG)), wG
      }
      rowsOf(GG, bG) {
        if (null === bG) return hJ;
        const ZG = `${GG}|${bG}`;
        let wG = this.rowsByKey.get(ZG);
        if (void 0 === wG) {
          const SG = function(GG, bG) {
            var ZG;
            if (!(GG in lb)) return [];
            const wG = null !== (ZG = jb[GG]) && void 0 !== ZG ? ZG : [],
              SG = new Map;
            for (const yG of gL(GG, bG))
              if ((wG.includes(yG) || nL(yG.output) && sL(yG.output) > NG(GG)) && sL(yG.output) <= bG) {
                var LG;
                const GG = null !== (LG = SG.get(yG.output)) && void 0 !== LG ? LG : [];
                GG.push(yG.input), SG.set(yG.output, GG)
              } return RL([...SG], (GG => {
              let [bG] = GG;
              return -sL(bG)
            })).map((GG => {
              let [bG, ZG] = GG;
              return {
                output: bG,
                inputs: ZG
              }
            }))
          }(GG, bG);
          wG = SG.length > 0 ? SG : hJ, this.rowsByKey.set(ZG, wG)
        }
        return wG
      }
      resolve(GG, bG) {
        const {
          rootId: ZG,
          rootName: wG
        } = GG.getMetaInfo(bG), SG = (0, KZ.l)(wG) ? bG : ZG;
        let LG = this.byRootId.get(SG);
        const yG = kG();
        if (void 0 === LG || LG.nuclear !== yG) {
          var UG;
          const ZG = function(GG) {
            return Mw(UJ, GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG)
          }(wG, GG.blockIdToBlockName(bG));
          LG = {
            info: ZG,
            rootName: wG,
            live: null !== ZG && !0 === (null === (UG = this.live) || void 0 === UG ? void 0 : UG.handles(wG)),
            nuclear: yG
          }, this.byRootId.set(SG, LG)
        }
        return LG
      }
    }
    const oJ = 500;
    const XJ = (0, wG.memo)((function(GG) {
      var bG, ZG;
      let {
        store: SG
      } = GG;
      const {
        t: LG
      } = (0, mS.w)(), [yG, kG] = (0, wG.useState)((() => SG.get()));
      (0, wG.useEffect)((() => (kG(SG.get()), SG.subscribe((() => {
        kG(SG.get())
      })))), [SG]);
      const {
        openInGameMenuName: UG,
        openEverythingMenuName: YG,
        isTouchScreen: VG
      } = (0, ES.o)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: pG,
        tool: fG,
        live: QG,
        wrench: KG,
        atomic: hG
      } = yG, dG = yG.visible && null === UG && null === YG;
      if (null === pG) return null;
      const JG = null !== KG.detail ? LG(KG.detail) : null !== (bG = yG.plan) && void 0 !== bG && bG.ctrl ? LG("buildAFactory2Game:lookPlanCtrl") : null !== pG.detail ? LG(pG.detail, null === pG.detailItem ? void 0 : {
        item: LG(pG.detailItem)
      }) : null;
      return (0, CL.jsxs)("div", {
        className: uS()("Baf2LookTarget", {
          Visible: dG
        }),
        "aria-hidden": !dG,
        children: [(0, CL.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: LG(pG.name)
        }), null !== yG.plan && (0, CL.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: LG(yG.plan.key, {
            kind: LG(yG.plan.kindKey),
            w: String(yG.plan.w),
            h: String(yG.plan.h),
            d: String(yG.plan.d),
            count: String(yG.plan.count)
          })
        }), void 0 !== (null === (ZG = yG.plan) || void 0 === ZG ? void 0 : ZG.why) && (0, CL.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: LG(yG.plan.why)
        }), null !== KG.mode && (0, CL.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: LG(KG.mode)
        }), null !== fG ? (0, CL.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: LG(fG.key, {
            item: LG(fG.needed),
            Ik: null === fG.Ik ? "" : LG(fG.Ik)
          })
        }) : null !== QG ? (0, CL.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: LG(QG.key, SY(LG, QG))
        }) : null !== JG && (0, CL.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: JG
        }), hG.length > 0 && (0, CL.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: LG("buildAFactory2Game:lookAtomicRecipes", {
            list: hG.map((GG => {
              let {
                output: bG,
                inputs: ZG
              } = GG;
              const wG = ZG.length > 1 ? ` ${LG("buildAFactory2Game:recipeMore",{count:String(ZG.length-1)})}` : "";
              return `${LG(wL(ZG[0]))}${wG} \u2192 ${LG(wL(bG))}`
            })).join(", ")
          })
        }), null !== KG.next && (0, CL.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: LG(KG.next, {
            state: null === KG.nextState ? "" : LG(KG.nextState),
            use: LG(VG ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var uJ = ZG(38933);
    const iJ = [],
      CJ = [
        [0, -1, 0]
      ];

    function WJ(GG) {
      const bG = [GG];
      for (let ZG = 1; ZG <= 4; ZG++) ZG > 1 && bG.push(`${GG}|meta|rot${ZG}`), bG.push(`${GG}|meta|rot${ZG}|Running`);
      return bG
    }

    function mJ(GG, bG) {
      return [Math.floor(GG[0] / bG), Math.floor(GG[1] / bG), Math.floor(GG[2] / bG)]
    }

    function IJ(GG, bG, ZG) {
      return `${GG},${bG},${ZG}`
    }

    function FJ(GG) {
      const bG = GG.split("|")[0];
      if (!YZ(bG)) return iJ;
      const ZG = lb[bG];
      if (bZ(ZG)) return CJ;
      const wG = Wd(GG);
      return ZZ(ZG) ? [
        [-wG[0], -wG[1], -wG[2]]
      ] : iS(ZG) ? function(GG, bG) {
        const ZG = GG[0] - 2 * bG[0],
          wG = GG[2] - 2 * bG[2],
          SG = [];
        for (let LG = -1; LG <= 1; LG++)
          for (let bG = -1; bG <= 1; bG++) SG.push([ZG + LG, GG[1], wG + bG]);
        return SG
      }([0, 0, 0], wG) : iJ
    }
    const vJ = [.5, .5, .5],
      aJ = [.2, .8, .3],
      cJ = [.45, 1, .5];
    class lJ {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(GG) {
        this.indexed = !0;
        for (const bG of mb)
          for (const ZG of WJ(bG)) {
            const bG = GG.blockNameToBlockId(ZG, !0),
              wG = FJ(ZG);
            null !== bG && wG.length > 0 && (this.offsetsList.push(wG), this.offsetsIndexById[bG] = this.offsetsList.length)
          }
      }
      onAfterRender(GG, bG) {
        this.indexed || this.index(GG);
        const ZG = performance.now();
        if (ZG - this.lastCheckMs < 100) return;
        this.lastCheckMs = ZG, this.checks++;
        const wG = JK.d.rK,
          [SG, LG, yG] = mJ(bG, wG);
        let kG = !1;
        const UG = [];
        let YG = 0;
        for (let VG = SG - 2; VG <= SG + 2; VG++)
          for (let bG = LG - 1; bG <= LG + 1; bG++)
            for (let SG = yG - 2; SG <= yG + 2; SG++) {
              const LG = YG++,
                yG = IJ(VG, bG, SG),
                pG = GG.getChunkVersion(VG, bG, SG);
              let fG = this.chunks.get(yG);
              null !== pG ? (fG || (fG = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(yG, fG)), fG.seenAt = this.checks, fG.checkedVersion !== pG && (fG.checkedVersion = pG, kG = !0), fG.scannedVersion !== pG && ZG - fG.scannedAt >= 500 && UG.push({
                slot: LG,
                entry: fG,
                origin: [VG * wG, bG * wG, SG * wG]
              })) : (kG ||= void 0 !== fG, this.chunks.delete(yG))
            }
        this.scanDue(GG, UG) && (kG = !0);
        for (const [VG, pG] of this.chunks) pG.seenAt !== this.checks && (kG ||= pG.machines.length > 0, this.chunks.delete(VG));
        for (const VG of this.chunks.values())
          for (const [bG, ZG, wG] of VG.cellChunks)(Math.abs(bG - SG) > 2 || Math.abs(ZG - LG) > 1 || Math.abs(wG - yG) > 2) && this.watchCellChunk(GG, bG, ZG, wG) && (kG = !0);
        for (const [VG, pG] of this.cellChunks) pG.seenAt !== this.checks && this.cellChunks.delete(VG);
        kG && this.refresh(GG)
      }
      dispose(GG) {
        this.clearMeshes(GG), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(GG, bG) {
        const ZG = Math.max(bG.findIndex((GG => {
          let {
            slot: bG
          } = GG;
          return bG >= this.scanFrom
        })), 0);
        let wG = 96;
        for (let SG = 0; SG < bG.length; SG++) {
          const {
            slot: LG,
            entry: yG,
            origin: kG
          } = bG[(ZG + SG) % bG.length];
          if (wG -= this.scan(GG, yG, kG), wG <= 0) {
            this.scanFrom = LG + 1;
            break
          }
        }
        return bG.length > 0
      }
      scan(GG, bG, ZG) {
        let [wG, SG, LG] = ZG;
        const yG = JK.d.rK,
          kG = this.hits;
        kG.length = 0;
        const UG = GG.scanBlocks(wG, SG, LG, wG + yG, SG + yG, LG + yG, this.offsetsIndexById, kG),
          YG = [];
        for (let VG = 0; VG < kG.length; VG += 4) YG.push({
          pos: [kG[VG], kG[VG + 1], kG[VG + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[kG[VG + 3]] - 1]
        });
        return bG.machines = YG, bG.cellChunks = function(GG, bG) {
          const ZG = new Set,
            wG = [];
          for (const {
              pos: SG,
              offsets: LG
            }
            of GG)
            for (const [GG, yG, kG] of LG) {
              const LG = mJ([SG[0] + GG, SG[1] + yG, SG[2] + kG], bG),
                UG = IJ(...LG);
              ZG.has(UG) || (ZG.add(UG), wG.push(LG))
            }
          return wG
        }(YG, yG), bG.scannedVersion = bG.checkedVersion, bG.scannedAt = performance.now(), Math.max(UG, 1)
      }
      watchCellChunk(GG, bG, ZG, wG) {
        const SG = IJ(bG, ZG, wG),
          LG = GG.getChunkVersion(bG, ZG, wG),
          yG = this.cellChunks.get(SG);
        return null === LG ? this.cellChunks.delete(SG) : (null === yG || void 0 === yG ? void 0 : yG.version) === LG ? (yG.seenAt = this.checks, !1) : (this.cellChunks.set(SG, {
          version: LG,
          seenAt: this.checks
        }), !0)
      }
      refresh(GG) {
        const bG = function(GG, bG) {
            const ZG = new Set,
              wG = [];
            for (const {
                pos: SG,
                offsets: LG
              }
              of GG)
              for (const [GG, yG, kG] of LG) {
                const LG = SG[0] + GG,
                  UG = SG[1] + yG,
                  YG = SG[2] + kG,
                  VG = `${LG},${UG},${YG}`;
                ZG.has(VG) || (ZG.add(VG), bG(LG, UG, YG) && wG.push([LG, UG, YG]))
              }
            return wG
          }([...this.chunks.values()].flatMap((GG => GG.machines)), ((bG, ZG, wG) => GG.isBlockInLoadedChunk(bG, ZG, wG) && 0 === GG.getBlockId(bG, ZG, wG))),
          ZG = bG.join(";");
        ZG !== this.shownKey && (this.shownKey = ZG, this.clearMeshes(GG), bG.length > 0 && (this.meshes = [this.build(GG, bG, !1), this.build(GG, bG, !0)]))
      }
      build(GG, bG, ZG) {
        const wG = bG[0],
          SG = [],
          LG = [];
        for (const [yG, kG, UG] of bG)(0, uJ.d)(SG, LG, [yG - wG[0] + .5, kG - wG[1] + .5, UG - wG[2] + .5], vJ, ZG);
        return GG.createGameMesh({
          positions: SG,
          indices: LG
        }, {
          rgb: ZG ? cJ : aJ,
          alpha: .4
        }, wG)
      }
      clearMeshes(GG) {
        for (const bG of this.meshes) GG.disposeGameMesh(bG);
        this.meshes = []
      }
    }
    const jJ = 1 / .6,
      PJ = 200,
      MJ = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      AJ = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      sJ = 2 * Math.PI / 3;
    class qJ {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MJ;
        this.style = GG, this.particles = null, this.points = new Float32Array(800), this.budget = PJ, this.lastMs = 0
      }
      static blade() {
        return new qJ(AJ)
      }
      OJ(GG, bG) {
        const ZG = Math.min(bG.arcStruck, bG.arcPoints.length);
        this.draw(GG, [bG.arcFrom, ...bG.arcPoints], bG.arcPoints.slice(0, ZG))
      }
      onBlade(GG, bG) {
        const [ZG, wG, SG] = bG.bladeCentre, [LG, yG] = bG.bladeFacing, kG = ZG - 1.5 * LG, UG = SG - 1.5 * yG, YG = Math.atan2(yG, LG), VG = [];
        for (let pG = 0; pG <= 8; pG++) {
          const GG = YG - sJ / 2 + sJ * pG / 8;
          VG.push([kG + 2.5 * Math.cos(GG), wG, UG + 2.5 * Math.sin(GG)])
        }
        this.draw(GG, VG, bG.bladeStruck)
      }
      dispose() {
        var GG;
        null === (GG = this.particles) || void 0 === GG || GG.stop(), this.particles = null
      }
      draw(GG, bG, ZG) {
        if (!GG.particlesEnabled() || bG.length < 2) return;
        const wG = performance.now();
        this.budget = Math.min(PJ, this.budget + (wG - this.lastMs) / 1e3 * PJ), this.lastMs = wG;
        const SG = [];
        let LG = 0,
          yG = bG[0];
        for (const JG of bG.slice(1)) {
          const GG = Math.min(48, Math.round(Math.hypot(JG[0] - yG[0], JG[1] - yG[1], JG[2] - yG[2]) * this.style.perBlock));
          SG.push([yG, JG, GG]), LG += GG, yG = JG
        }
        const kG = ZG.length;
        LG += 10 * kG;
        const UG = LG > this.budget ? this.budget / LG : 1;
        if (0 === LG || UG * LG < 1) return;
        const YG = bG[0],
          [VG, pG, fG] = YG,
          QG = this.points;
        let KG = 0;
        const hG = (GG, bG, ZG, wG) => {
          const SG = 4 * KG;
          QG[SG] = GG - VG, QG[SG + 1] = bG - pG, QG[SG + 2] = ZG - fG, QG[SG + 3] = wG, KG++
        };
        SG.forEach(((GG, bG) => {
          let [ZG, wG, SG] = GG;
          const LG = Math.min(Math.floor(SG * UG), PJ - KG),
            yG = Math.hypot(wG[0] - ZG[0], wG[1] - ZG[1], wG[2] - ZG[2]),
            kG = 0 === bG && yG > 0 ? Math.min(.5, .1 * yG) / yG : 0;
          for (let UG = 0; UG < LG; UG++) {
            const GG = kG + (UG + .5) / LG * (1 - kG);
            hG(ZG[0] + (wG[0] - ZG[0]) * GG, ZG[1] + (wG[1] - ZG[1]) * GG, ZG[2] + (wG[2] - ZG[2]) * GG, .15)
          }
        }));
        const dG = Math.floor(10 * UG);
        for (let JG = 0; JG < kG; JG++) {
          const [GG, bG, wG] = ZG[JG];
          for (let ZG = 0; ZG < dG && KG < PJ; ZG++) hG(GG, bG, wG, 2.5)
        }
        this.budget -= KG, this.particles ??= GG.createParticles(function(GG) {
          const [bG, ZG] = GG.colours;
          return {
            texture: "square_particle",
            rp: 400,
            minLifeTime: GG.life[0] / jJ,
            maxLifeTime: GG.life[1] / jJ,
            minSize: GG.size[0],
            maxSize: GG.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [bG[0], bG[1], bG[2], 1],
              maxColor: [ZG[0], ZG[1], ZG[2], 1]
            }, {
              timeFraction: 1,
              minColor: [bG[0], bG[1], bG[2], 0],
              maxColor: [ZG[0], ZG[1], ZG[2], 0]
            }],
            blendMode: Pk.c.Add
          }
        }(this.style), {
          pos: YG
        }), this.particles.emitPoints(YG, QG, KG)
      }
    }
    const nJ = new Set(["Sky Spring"]);

    function gJ(GG, bG, ZG) {
      const wG = GG.split("|")[0];
      return "Air" !== bG || ZG || ! function(GG) {
        const bG = GG.split("|")[0];
        return void 0 !== yZ[bG] || nJ.has(bG)
      }(wG) ? null : GG
    }
    class eJ {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(GG) {
        const bG = GG - this.lastTapAt >= 300;
        return this.lastTapAt = GG, bG
      }
    }
    class RJ {
      constructor() {
        this.presses = new eJ, this.predicted = null
      }
      tap(GG, bG) {
        const ZG = this.presses.isNewPress(bG);
        return ZG && (this.predicted = {
          station: GG,
          at: bG
        }), ZG
      }
      consumeServerOpen(GG, bG) {
        const ZG = this.predicted;
        return !(null === ZG || ZG.station !== GG || bG - ZG.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class TJ {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(GG, bG) {
        return GG && (this.thrustAt = bG), bG - this.thrustAt < 200
      }
    }
    const HJ = [.1, .05, .1],
      tJ = {
        texture: "effect_5",
        rp: Math.ceil(48),
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
        blendMode: Pk.c.OneOne
      };
    class DJ {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new TJ, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      OJ(GG, bG) {
        for (const [ZG, wG] of bG.baf2JetFlames) GG.isLocalPlayer(ZG) || (wG ? this.lit.add(ZG) : this.lit.delete(ZG))
      }
      onAfterRender(GG, bG) {
        const ZG = performance.now(),
          wG = this.hold.lit(this.selfThrusting(GG, bG), ZG);
        for (const [SG, LG] of this.flames)(SG === bG ? wG : this.lit.has(SG)) || this.setEmitting(LG, !1), SG === bG || GG.getPositionView(SG) ? !LG.emitting && ZG - LG.offAt >= 1300 && (LG.particles.stop(), this.flames.delete(SG)) : (LG.particles.dispose(), this.flames.delete(SG), this.lit.delete(SG));
        wG && this.draw(GG, bG, bG);
        for (const SG of this.lit) this.draw(GG, bG, SG)
      }
      dispose() {
        for (const GG of this.flames.values()) GG.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(GG, bG) {
        var ZG;
        const wG = GG.getLocalPlayerMovement();
        return !!wG && (null !== (SG = {
          option: null !== (ZG = GG.getClientOption(bG, "jumpHoldThrust")) && void 0 !== ZG ? ZG : null,
          jumping: wG.jumpHeld,
          onGround: wG.onGround,
          alive: GG.isAlive(bG)
        }).option && SG.option.maxUpSpeed >= 0 && SG.jumping && !SG.onGround && SG.alive);
        var SG
      }
      draw(GG, bG, ZG) {
        var wG, SG;
        const LG = this.pos;
        if (!GG.readDrawnPosition(ZG, LG)) return;
        const yG = GG.readDrawnPosition(bG, this.camera) ? this.camera : LG;
        if (!((LG[0] - yG[0]) ** 2 + (LG[1] - yG[1]) ** 2 + (LG[2] - yG[2]) ** 2 < 1600) || !GG.particlesEnabled()) {
          const GG = this.flames.get(ZG);
          return void(GG && this.setEmitting(GG, !1))
        }
        const kG = null !== (wG = this.flames.get(ZG)) && void 0 !== wG ? wG : this.create(GG, ZG, LG),
          UG = null !== (SG = GG.getDrawnHeading(ZG)) && void 0 !== SG ? SG : 0,
          YG = this.at;
        YG[0] = LG[0] - .35 * Math.sin(UG), YG[1] = LG[1] + 1.05, YG[2] = LG[2] - .35 * Math.cos(UG), kG.particles.moveTo(YG), this.setEmitting(kG, !0)
      }
      setEmitting(GG, bG) {
        GG.emitting !== bG && (GG.emitting = bG, bG || (GG.offAt = performance.now()), GG.particles.setEmitRate(bG ? 60 : 0))
      }
      create(GG, bG, ZG) {
        const wG = {
          particles: GG.createParticles(tJ, {
            pos: ZG,
            half: HJ
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(bG, wG), wG
      }
    }

    function NJ(GG) {
      return "Reactor Frame" === ww("reactor", GG)
    }

    function OJ(GG) {
      return AZ("reactor", GG) && !NJ(GG) && (GG.startsWith("Reactor Glass") || GG.startsWith("Reactor Port"))
    }
    const xJ = "baf2Goal";
    class BJ {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [lS.l.subscribe("setDirectionArrow", (GG => {
          let {
            id: bG,
            position: ZG
          } = GG;
          bG === xJ && (this.goal = ZG, this.checkedAt = -1 / 0)
        })), lS.l.subscribe("clearDirectionArrow", (GG => {
          let {
            id: bG
          } = GG;
          null !== bG && bG !== xJ || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const GG of this.subs) lS.l.unsubscribe(GG)
      }
      sideOf(GG, bG, ZG, wG) {
        const SG = this.goal;
        if (!SG) return 0;
        ZG - this.checkedAt > 1e3 && (this.checkedAt = ZG, this.open = function(GG, bG) {
          const [ZG, wG, SG] = GG.map(Math.floor);
          if (!OJ(bG(ZG, wG, SG))) return null;
          for (const [LG, yG] of [
              [1, 0],
              [0, 1]
            ]) {
            const GG = bG(ZG + LG, wG, SG + yG),
              kG = bG(ZG - LG, wG, SG - yG);
            if (NJ(kG) && OJ(GG)) return [LG, 0, yG];
            if (NJ(GG) && OJ(kG)) return [0 - LG, 0, 0 - yG]
          }
          return null
        }(SG, ((bG, ZG, wG) => GG.blockIdToBlockName(GG.getBlockId(bG, ZG, wG)))));
        const LG = this.open;
        if (!LG) return 0;
        const yG = wG(SG);
        if (Math.abs(yG.x - bG.x) > .05 || Math.abs(yG.y - bG.y) > .05) return 0;
        const kG = wG([SG[0] + LG[0], SG[1], SG[2] + LG[2]]).x - yG.x;
        return Math.abs(kG) < .3 ? 0 : kG > 0 ? 1 : -1
      }
    }
    class Gr {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new BJ, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.pK = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.PJ = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((GG => {
          for (const bG of GG) bG.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(bG.target, bG.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.pK || this.clear()
        }, window.addEventListener("resize", this.PJ)
      }
      onAfterRender(GG, bG) {
        var ZG;
        this.api = GG, this.project = null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.projectWorldPosToScreenPos) && void 0 !== ZG ? ZG : null, this.queued || this.pK || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.pK = !0;
        for (const GG of this.moved.keys()) GG.style.transform = "";
        this.moved.clear();
        for (const GG of this.sideLabels.keys()) GG.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.PJ)
      }
      clear() {
        for (const LG of this.moved.keys()) LG.isConnected || this.moved.delete(LG);
        for (const LG of this.sideLabels.keys()) LG.isConnected || this.sideLabels.delete(LG);
        if (0 === this.arrows.length) return;
        const GG = performance.now(),
          bG = GG - this.refreshedAt > 1e3;
        bG && (this.refreshedAt = GG, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const ZG = this.trackerBox(),
          wG = this.barsBox(),
          SG = this.toastBox(bG);
        (ZG || wG || SG) && bG && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let LG = 0; LG < this.arrows.length; LG++) {
          const bG = this.arrows[LG];
          this.labelOffsets.set(bG, this.runLabelAside(bG, GG));
          const yG = (ZG ? this.shiftLeftOf(bG, ZG) : 0) || this.shiftOnScreen(bG),
            kG = Math.min(wG ? this.liftAbove(bG, wG, yG) : 0, SG ? this.liftAbove(bG, SG, yG) : 0),
            UG = this.moved.get(bG);
          if (0 !== yG || 0 !== kG) {
            const GG = 0 === kG ? `translateX(${yG}px)` : `translate(${yG}px, ${kG}px)`;
            UG !== GG && (bG.style.transform = GG, this.moved.set(bG, GG))
          } else void 0 !== UG && (bG.style.transform = "", this.moved.delete(bG))
        }
      }
      trackerBox() {
        var GG, bG;
        const ZG = null !== (GG = this.tracker) && void 0 !== GG && GG.isConnected ? this.tracker : null !== (bG = this.trackers[0]) && void 0 !== bG ? bG : null;
        if (ZG !== this.tracker && this.watch(ZG), this.boxStale && ZG) {
          var wG, SG, LG;
          this.boxStale = !1;
          const GG = ZG.closest(".NoRoom") ? null : ZG.getBoundingClientRect(),
            bG = GG && GG.width > 0 ? null === (wG = this.hud) || void 0 === wG ? void 0 : wG.getBoundingClientRect() : void 0,
            yG = GG && bG ? Math.max(GG.top, bG.top) : null !== (SG = null === GG || void 0 === GG ? void 0 : GG.top) && void 0 !== SG ? SG : 0,
            kG = GG && bG ? Math.min(GG.bottom, bG.bottom) : null !== (LG = null === GG || void 0 === GG ? void 0 : GG.bottom) && void 0 !== LG ? LG : 0;
          this.box = GG && GG.width > 0 && kG > yG ? {
            left: GG.left,
            top: yG,
            right: GG.right,
            bottom: kG
          } : null
        }
        return ZG ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var GG;
          this.barsStale = !1;
          const bG = null === (GG = this.statBars[0]) || void 0 === GG ? void 0 : GG.getBoundingClientRect();
          this.bars = bG && bG.width > 0 && bG.height > 0 ? {
            left: bG.left,
            top: bG.top,
            right: bG.right,
            bottom: bG.bottom
          } : null
        }
        return this.bars
      }
      toastBox(GG) {
        var bG;
        const ZG = null !== (bG = this.toasts[0]) && void 0 !== bG ? bG : null;
        if (ZG !== this.toastEl || GG && ZG) {
          this.toastEl = ZG;
          const GG = null === ZG || void 0 === ZG ? void 0 : ZG.getBoundingClientRect();
          this.toast = GG && GG.width > 0 && GG.height > 0 ? {
            left: GG.left,
            top: GG.top,
            right: GG.right,
            bottom: GG.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(GG, bG, ZG) {
        var wG;
        const SG = this.anchorOf(GG);
        if (!SG) return 0;
        const LG = SG.x + ZG + (null !== (wG = this.labelOffsets.get(GG)) && void 0 !== wG ? wG : 0),
          {
            halfWidth: yG,
            labelled: kG
          } = this.extentOf(GG),
          UG = SG.y + this.em * (kG ? 6.2 : 3);
        return UG < bG.top - 6 || LG + yG < bG.left - 6 || LG - yG > bG.right + 6 ? 0 : bG.top - 6 - UG
      }
      watch(GG) {
        var bG, ZG;
        this.tracker && this.sizes.unobserve(this.tracker), null === (bG = this.hud) || void 0 === bG || bG.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = GG, this.hud = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.closest(".Baf2QuestHud")) && void 0 !== ZG ? ZG : null, this.box = null, this.boxStale = !0, GG && this.sizes.observe(GG), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(GG, bG) {
        var ZG;
        const wG = this.anchorOf(GG);
        if (!wG) return 0;
        const {
          y: SG
        } = wG, LG = wG.x + (null !== (ZG = this.labelOffsets.get(GG)) && void 0 !== ZG ? ZG : 0), yG = this.em, {
          halfWidth: kG,
          labelled: UG
        } = this.extentOf(GG), YG = SG - yG, VG = LG + kG;
        return SG + yG * (UG ? 6.2 : 3) < bG.top || YG > bG.bottom || VG < bG.left - 6 || LG - kG > bG.right ? 0 : Math.max(bG.left - 6 - VG, 6 - (LG - kG))
      }
      shiftOnScreen(GG) {
        var bG;
        const ZG = this.anchorOf(GG);
        if (!ZG) return 0;
        const {
          halfWidth: wG
        } = this.extentOf(GG), SG = ZG.x + (null !== (bG = this.labelOffsets.get(GG)) && void 0 !== bG ? bG : 0), LG = SG + wG - (this.innerWidth - 6);
        return LG > 0 ? -LG : Math.max(0, 6 - (SG - wG))
      }
      runLabelAside(GG, bG) {
        var ZG;
        let wG = null;
        for (let yG = 0; yG < GG.children.length; yG++) GG.children[yG].classList.contains("DirectionArrowLabel") && (wG = GG.children[yG]);
        if (!wG) return 0;
        const SG = GG.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(GG) : null,
          LG = (SG && this.api ? this.side.sideOf(this.api, {
            x: SG.x / this.innerWidth * 100,
            y: SG.y / this.innerHeight * 100
          }, bG, this.project) : 0) * this.halfWidthOf(wG);
        return LG !== (null !== (ZG = this.sideLabels.get(wG)) && void 0 !== ZG ? ZG : 0) && (wG.style.transform = 0 === LG ? "" : `translateX(-50%) translateX(${LG}px)`, 0 === LG ? this.sideLabels.delete(wG) : this.sideLabels.set(wG, LG)), LG
      }
      extentOf(GG) {
        let bG = this.em,
          ZG = !1;
        for (let wG = 0; wG < GG.children.length; wG++) {
          const SG = GG.children[wG],
            LG = SG.classList.contains("DirectionArrowLabel");
          ZG ||= LG, (LG || SG.classList.contains("DirectionArrowDistance")) && (bG = Math.max(bG, this.halfWidthOf(SG)))
        }
        return {
          halfWidth: bG,
          labelled: ZG
        }
      }
      halfWidthOf(GG) {
        let bG = this.halfWidths.get(GG);
        return void 0 === bG && (bG = GG.offsetWidth / 2, this.halfWidths.set(GG, bG), this.sizes.observe(GG), this.labels.add(GG)), bG
      }
      forgetGoneLabels() {
        for (const GG of this.labels) GG.isConnected || (this.sizes.unobserve(GG), this.halfWidths.delete(GG), this.labels.delete(GG))
      }
      anchorOf(GG) {
        const bG = GG.style.translate,
          ZG = this.anchors.get(GG);
        if (ZG && ZG.translate === bG && ZG.innerWidth === this.innerWidth && ZG.innerHeight === this.innerHeight) return ZG;
        const wG = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(bG);
        if (!wG) return null;
        const SG = {
          translate: bG,
          x: parseFloat(wG[1]) / 100 * this.innerWidth,
          y: parseFloat(wG[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(GG, SG), SG
      }
    }
    const br = "Baf2ArrowText";

    function Zr(GG, bG) {
      const ZG = GG.rows.find((GG => GG.current));
      return cG(GG.tutorial) && null !== ZG && void 0 !== ZG && ZG.item && RS(ZG) && IG(ZG.item).includes(bG) ? ZG.item : null
    }
    const wr = new class {
      constructor(GG) {
        this.select = GG, this.picks = new Map
      }
      open(GG, bG, ZG) {
        const wG = Zr(bG, GG);
        null !== wG && this.Df(GG, wG, ZG)
      }
      follow(GG, bG) {
        if (kG())
          for (const [ZG, {
              item: wG,
              had: SG
            }] of this.picks) {
            const LG = Zr(GG, ZG);
            LG !== wG && (null !== LG && bG(wG) > SG ? this.Df(ZG, LG, bG) : this.picks.delete(ZG))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Df(GG, bG, ZG) {
        this.picks.set(GG, {
          item: bG,
          had: ZG(bG)
        }), this.select(GG, bG)
      }
    }(jS.l);

    function Sr(GG) {
      return bG => {
        let ZG = 0;
        for (const wG of GG.getInventoryItems())(null === wG || void 0 === wG ? void 0 : wG.name) === bG && (ZG += null === wG.amount ? 1 : Math.max(wG.amount, 0));
        return ZG
      }
    }

    function Lr(GG, bG, ZG, wG) {
      GG.getClientOption(bG, "canCraft") && "inventory" !== ES.e.get("openInGameMenuName") && (wr.open(ZG, wG.get(), Sr(GG)), lS.l.xh("toggleMenu", `inventory|${ZG}`))
    }
    let yr = null,
      kr = !1;

    function Ur(GG) {
      const bG = iL();
      GG === yr && bG === kr || (yr = GG, kr = bG, (0, jS.n)(function(GG, bG) {
        const ZG = new Map;
        for (let wG = GG + 1; wG <= SG.length; wG++) {
          const SG = TL(wG, GG, bG);
          if (SG)
            for (const bG of JG(wG).unlocks) ZG.set(bG, {
              ...SG,
              stepsAway: wG - GG
            })
        }
        return ZG
      }(GG, bG)))
    }

    function Yr() {
      return GG = () => {
        null !== yr && Ur(yr)
      }, (0, XL.j)(uL, GG);
      var GG
    }

    function Vr() {
      return (0, jS.q)(RL(Object.keys(mG), sL)), () => {
        (0, jS.q)([])
      }
    }

    function pr(GG, bG, ZG) {
      var wG, SG;
      const LG = GG.getTargetedBlock();
      if (!LG || ! function(GG, bG, ZG) {
          if ("Chest" !== bG) return !1;
          const wG = GG.split("|")[0];
          if (!YZ(wG) || 0 === lb[wG].outputSlots.length) return !1;
          const SG = Wd(GG);
          return ZG[0] === SG[0] && ZG[1] === SG[1] && ZG[2] === SG[2]
        }(ZG, null === (wG = GG.YZG(bG)) || void 0 === wG ? void 0 : wG.name, LG.normal)) return !1;
      const [yG, kG, UG] = LG.Oh, YG = GG.getBlockId(yG, kG, UG);
      return 0 === YG || !0 === (null === (SG = vG.l[YG]) || void 0 === SG ? void 0 : SG.canBePlacedOver)
    }
    var fr = ZG(37105);
    const Qr = new Set(hZ.c);
    class Kr {
      constructor(GG) {
        this.toasts = GG, this.lastAt = -1 / 0
      }
      onAltAction(GG, bG, ZG) {
        const wG = GG.getTargetedBlock();
        if (!wG || function(GG) {
            const bG = GG.split("|")[0];
            return YZ(bG) || null !== uw(bG) || CG(bG) || hZ.c.includes(bG)
          }(ZG) && !Qr.has(ZG.split("|")[0])) return;
        const SG = GG.YZG(bG);
        if (!SG || !Qr.has(SG.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const LG = SG.typeObj.id,
          [yG, kG, UG] = wG.Oh,
          YG = GG.getBlockId(yG, kG, UG),
          VG = vG.l[YG];
        (0 === YG || null !== VG && void 0 !== VG && VG.UQ || null !== VG && void 0 !== VG && VG.canBePlacedOver) && GG.isSolidToPlayerBlockId(LG) && GG.canModifyBlockAt(yG, kG, UG) && GG.vbG(yG, kG, UG, LG) && !GG.vbG(yG, kG, UG, LG, bG) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, lG.ue)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, lG.O.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class hr {
      constructor(GG) {
        this.show = GG, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(GG, bG, ZG) {
        var wG;
        if (!bG) return this.started = null, void this.gatedThisHold.clear();
        if (!GG) return void(this.started = null);
        const SG = `${GG.x},${GG.y},${GG.z},${GG.Ik}`;
        if (SG === this.started) return;
        this.started = SG;
        const LG = Aw(GG.y) ? YJ(GG.block, GG.Ik, GG.level) : null;
        if (null === LG || this.gatedThisHold.has(SG)) return;
        this.gatedThisHold.add(SG);
        const yG = GG.block.split("|")[0];
        ZG - (null !== (wG = this.hintedAt.get(yG)) && void 0 !== wG ? wG : -1 / 0) < 5e3 || (this.hintedAt.set(yG, ZG), this.show({
          baf2ToastText: VJ(LG, GG.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var dr = ZG(29);

    function Jr(GG, bG) {
      const ZG = [...GG.baf2CoreBankPaused];
      for (const [SG] of GG.baf2CoreBanked) ZG.push(SG);
      for (const yG of SG) {
        for (const {
            item: GG
          }
          of yG.cost) ZG.push(GG);
        for (const GG of yG.newDeposits) ZG.push(GG.block);
        for (const GG of yG.unlocks) ZG.push(GG, FG(GG));
        yG.reward && ZG.push(yG.reward);
        for (const {
            item: GG
          }
          of null !== (wG = null === (LG = yG.charge) || void 0 === LG ? void 0 : LG.items) && void 0 !== wG ? wG : []) {
          var wG, LG;
          ZG.push(GG)
        }
      }
      return {
        message: GG,
        itemNames: bG([...new Set(ZG)])
      }
    }
    const rr = "baf2MultiblockGuide";
    const zr = new Map;
    const Er = function(GG, bG, ZG, SG) {
      let {
        localPlayerId: LG
      } = SG;
      const yG = new dk,
        kG = new UQ,
        YG = new hQ,
        VG = new QQ(YG),
        pG = (GG, bG) => {
          bG ? VG.observe(GG) : VG.unobserve(GG)
        },
        fG = new fQ,
        QG = new JQ(pG),
        KG = GG => QG.covers(GG),
        hG = new MQ;
      let dG;
      const JG = new sy((GG => {
          dG.sendCommand(GG)
        })),
        rG = () => {
          JG.send("baf2questbook")
        },
        zG = GG => function(GG, bG, ZG) {
          const wG = {};
          for (const SG of ZG) {
            let ZG = zr.get(SG);
            void 0 === ZG && (ZG = GG.getItemStat(bG, SG, "displayName"), zr.set(SG, ZG)), wG[SG] = ZG
          }
          return wG
        }(dG, LG, GG),
        EG = new sS(rG),
        oG = new DQ((() => ES.e.get("loadingOverlayVisible"))),
        XG = new WV(JG, EG, oG),
        uG = new GK,
        iG = new Kr(oG),
        WG = new hr((GG => {
          oG.show(GG, GG.baf2ToastMs)
        })),
        mG = new YK(pG),
        IG = new Md(mG),
        FG = new iy,
        aG = new yJ,
        cG = new Zk,
        PG = new dK({
          read: () => !1 !== dr.h.getItem(rr),
          write: GG => {
            dr.h.setItem(rr, GG)
          }
        }),
        MG = new eK(PG),
        AG = new HK(PG),
        sG = new Kh(PG, (GG => function(GG, bG) {
          const ZG = GU(bG.w, bG.h, bG.d),
            wG = new Uint8Array(ZG);
          for (let SG = 0; SG < ZG; SG++) {
            const ZG = AK(GG, xZ(bG, Zw(bG, SG)));
            wG[SG] = null === ZG ? 0 : Nk(ZG)
          }
          return wG
        }(dG, GG)), Lh(JG)),
        qG = new hh(PG, Lh(JG)),
        nG = new fh,
        RG = (GG, bG) => {
          let [ZG, wG, SG] = GG;
          nG.answered(bG) || oG.show({
            baf2ToastText: [(0, lG.ue)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: ZG,
                h: wG,
                d: SG
              }
            }, lG.O.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      sG.onSizeNotTaken(RG), qG.onSizeNotTaken(RG);
      const TG = new zh,
        HG = new Bh(PG),
        DG = new bd,
        NG = new fd(DG),
        OG = new ud,
        BG = new Ad,
        Gb = new Dd(BG),
        bb = new LJ(BG),
        Zb = BG.lookSource(),
        wb = new EJ({
          handles: GG => Zb.handles(GG) || GG === jG,
          line: (GG, bG) => GG === jG ? function(GG, bG, ZG) {
            var wG;
            const SG = eG(null === (wG = bG.at(ZG)) || void 0 === wG ? void 0 : wG.item);
            return null === SG ? {
              key: `${JJ}lookFarmEmpty`
            } : {
              key: GG.blockIdToBlockName(GG.getBlockId(ZG[0], ZG[1], ZG[2])).endsWith("|Running") ? `${JJ}lookFarmRunning` : `${JJ}lookFarmWaiting`,
              keys: {
                mob: gG(SG)
              }
            }
          }(dG, mG, bG) : Zb.line(GG, bG),
          version: () => Zb.version() + mG.version()
        }, (GG => DK(PG.all(), GG, (GG => AK(dG, GG)))), (() => EG.get().tier)),
        Sb = new Mh,
        Lb = new lJ,
        yb = new qJ,
        kb = qJ.blade(),
        Ub = new DJ,
        Yb = new wK,
        Vb = new Gr,
        fb = new RJ,
        Qb = new eJ;
      let Kb = -1 / 0,
        hb = 0,
        db = -1 / 0,
        Jb = -1 / 0;
      const rb = () => {
          JG.send("baf2islandsclose"), Jb = Date.now()
        },
        zb = [];

      function Eb(GG) {
        var bG, ZG, wG, SG, LG, yG, UG;
        "core" === (null === (bG = kG.get()) || void 0 === bG ? void 0 : bG.kind) && "core" !== (null === GG || void 0 === GG ? void 0 : GG.kind) && JG.send("baf2coreclose"), "power" === (null === (ZG = kG.get()) || void 0 === ZG ? void 0 : ZG.kind) && "power" !== (null === GG || void 0 === GG ? void 0 : GG.kind) && JG.send("baf2powerclose"), "water" === (null === (wG = kG.get()) || void 0 === wG ? void 0 : wG.kind) && "water" !== (null === GG || void 0 === GG ? void 0 : GG.kind) && JG.send(xG.o), "terminal" === (null === (SG = kG.get()) || void 0 === SG ? void 0 : SG.kind) && "terminal" !== (null === GG || void 0 === GG ? void 0 : GG.kind) && JG.send("baf2terminalclose"), "islands" === (null === (LG = kG.get()) || void 0 === LG ? void 0 : LG.kind) && "islands" !== (null === GG || void 0 === GG ? void 0 : GG.kind) && rb();
        const YG = BG.getStatus();
        "collider" === (null === (yG = kG.get()) || void 0 === yG ? void 0 : yG.kind) && "collider" !== (null === GG || void 0 === GG ? void 0 : GG.kind) && YG && JG.send(MU(YG, "close"));
        const VG = GG => "reactor" === GG || "battery" === GG;
        if (VG(null === (UG = kG.get()) || void 0 === UG ? void 0 : UG.kind) && !VG(null === GG || void 0 === GG ? void 0 : GG.kind)) {
          var pG, fG, QG;
          const GG = "reactor" === (null === (pG = kG.get()) || void 0 === pG ? void 0 : pG.kind) ? null === (fG = sG.get()) || void 0 === fG ? void 0 : fG.status.baf2RxAt : null === (QG = qG.get()) || void 0 === QG ? void 0 : QG.status.baf2BatAt;
          GG && JG.send(pb(GG, "close"))
        }
        "quests" === (null === GG || void 0 === GG ? void 0 : GG.kind) && rG(), kG.set(GG), null === GG && uG.release()
      }

      function ob() {
        (0, zS.f)(), Eb(null)
      }
      let Xb = new Set,
        ub = !1;
      const ib = {
        onCreate: GG => {
          dG = GG, dG.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const bG of mb) {
            const GG = lb[bG].inputSlots ? ck(yG) : Fk(bG, yG, FG, JG);
            zb.push((0, JS.g)(bG, GG))
          }
          zb.push((0, zS.q)((0, wG.createElement)(wG.Fragment, null, (0, wG.createElement)(EQ, {
            controller: QG
          }), (0, wG.createElement)(fK, {
            store: mG
          }), (0, wG.createElement)(XJ, {
            store: wb
          }), (0, wG.createElement)(HQ, {
            store: EG
          }), (0, wG.createElement)(xQ, {
            store: oG
          }), (0, wG.createElement)(bK, {
            store: uG
          }), (0, wG.createElement)(LK, {
            store: Yb
          }), (0, wG.createElement)(rh, {
            store: TG
          }), (0, wG.createElement)(Zd, {
            store: DG
          })), {
            content: (0, wG.createElement)(YQ, {
              commands: JG,
              store: kG,
              power: FG,
              water: cG,
              reactor: sG,
              battery: qG,
              collider: BG,
              terminal: aG,
              quests: EG,
              tutorial: XG,
              close: zS.i,
              leave: () => {
                uG.dropHeld(), (0, zS.f)()
              },
              askIslands: () => {
                Jb = -1 / 0, Kb = Date.now(), hb = JG.send(tG)
              },
              openSocial: () => {
                (0, zS.f)(), ES.e.set({
                  openEverythingMenuName: pZ.u.SOCIAL
                })
              },
              showCore: GG => {
                Eb({
                  kind: "core",
                  core: GG
                }), JG.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Eb(null)
            }
          })), zb.push((0, rS.r)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Eb({
                kind: "quests"
              }), (0, zS.m)()
            }
          })), zb.push(function(GG, bG) {
            let ZG = null,
              wG = () => {};
            const SG = bG => {
              var SG;
              let {
                tutorial: LG,
                tutorialKnown: yG
              } = bG;
              (null === (SG = ZG) || void 0 === SG ? void 0 : SG.tutorial) === LG && ZG.tutorialKnown === yG || (ZG = {
                tutorial: LG,
                tutorialKnown: yG
              }, wG = (0, rS.r)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: iV[LG],
                icon: {
                  kind: "icon",
                  name: uV[LG]
                },
                iconOnly: !0,
                disabled: !yG,
                className: "Baf2TutorialButton",
                onClick: () => {
                  GG.next()
                }
              }))
            };
            SG(bG.get());
            const LG = lS.l.subscribe(PS, SG);
            return () => {
              lS.l.unsubscribe(LG), wG()
            }
          }(XG, EG)), ub = !1, zb.push(Yr()), zb.push(Vr()), zb.push(function() {
            const GG = lS.l.subscribe(PS, BS),
              bG = () => {
                if (xS) {
                  const GG = xS;
                  xS = null, (0, jS.p)(GG)
                }
              },
              ZG = lS.l.subscribe("toggleMenu", (GG => {
                "inventory" === (null === GG || void 0 === GG ? void 0 : GG.split("|")[0]) && bG()
              })),
              wG = lS.l.subscribe("appManagerUpdated|openInGameMenuName", (GG => {
                "inventory" === GG && bG()
              }));
            return () => {
              lS.l.unsubscribe(GG), lS.l.unsubscribe(ZG), lS.l.unsubscribe(wG)
            }
          }()), zb.push(function(GG) {
            const bG = Sr(GG),
              ZG = lS.l.subscribe(PS, (GG => {
                wr.follow(GG, bG)
              }));
            return () => {
              lS.l.unsubscribe(ZG), wr.clear()
            }
          }(dG)), zb.push(function() {
            const GG = document.documentElement,
              bG = (0, sQ.c)(".InvenBodyRight", [], (() => {
                const bG = document.querySelector(".InvenBodyRight");
                bG && GG.style.setProperty("--baf2-backpack-width", `${bG.offsetWidth}px`)
              }));
            return () => {
              bG(), GG.style.removeProperty("--baf2-backpack-width")
            }
          }()), zb.push(function() {
            const GG = document.documentElement;
            return GG.classList.add(br), () => {
              GG.classList.remove(br)
            }
          }()), zb.push((() => {
            VG.dispose(), YG.dispose()
          })), hG.start(dG), zb.push((() => {
            hG.dispose(), Ub.dispose(), IG.dispose()
          }))
        },
        onClose: () => {
          (0, jS.p)([]), xS = null, OS = new Set, yr = null, (0, jS.n)(new Map), zr.clear();
          for (const GG of zb) GG();
          EG.dispose(), wb.dispose(), oG.dispose(), uG.dispose(), Sb.dispose(), Lb.dispose(dG), MG.dispose(dG), AG.dispose(dG), HG.dispose(dG), NG.dispose(dG), DG.dispose(), OG.dispose(), PG.dispose(), sG.dispose(), qG.dispose(), TG.dispose(), yb.dispose(), kb.dispose(), Yb.dispose(), Gb.dispose(dG), bb.dispose(dG), BG.dispose(), Vb.dispose(), JG.clear()
        },
        onAfterRender: (GG, bG) => {
          var ZG, wG, SG;
          try {
            hG.onAfterRender(bG)
          } catch (YG) {
            console.error("Error drawing BAF2 belt items", YG)
          }
          try {
            Ub.onAfterRender(dG, LG)
          } catch (YG) {
            console.error("Error drawing BAF2 jet flames", YG)
          }
          ub || (ub = !0, JG.send("baf2clientready"));
          const yG = dG.getPositionView(LG);
          QG.onAfterRender(bG, yG, fG), mG.onAfterRender(bG, yG, fG, KG), VG.run(fG), Sb.onAfterRender(dG, yG), Lb.onAfterRender(dG, yG), IG.onAfterRender(dG, yG), MG.onAfterRender(dG, yG), AG.onAfterRender(dG, LG, yG), HG.onAfterRender(dG, LG, yG), NG.onAfterRender(dG, LG), OG.onAfterRender(dG, yG), EG.onPlayerY(yG[1]), Gb.onAfterRender(dG), bb.onAfterRender(dG, LG, yG);
          const UG = dG.getTargetedBlock();
          wb.onAfterRender(dG, LG, null !== (ZG = null === UG || void 0 === UG ? void 0 : UG.K9) && void 0 !== ZG ? ZG : 0, null !== (wG = null === UG || void 0 === UG ? void 0 : UG.position) && void 0 !== wG ? wG : null), Vb.onAfterRender(dG, bG), WG.onMining(function(GG, bG) {
            var ZG, wG;
            const SG = GG.getMiningBlock();
            if (!SG) return null;
            const LG = (0, vG.i)(GG.getBlockId(SG[0], SG[1], SG[2])),
              yG = null !== (ZG = null === (wG = GG.YZG(bG)) || void 0 === wG ? void 0 : wG.name) && void 0 !== ZG ? ZG : null,
              kG = GG.getItemStat(bG, LG.split("|")[0], "harvestLevel");
            return {
              block: LG,
              x: SG[0],
              y: SG[1],
              z: SG[2],
              Ik: yG,
              level: kG
            }
          }(dG, LG), dG.isMining(), performance.now()), "dropMap" === (null === (SG = kG.get()) || void 0 === SG ? void 0 : SG.kind) && Aw(yG[1]) && ob()
        },
        onPlayerChangeBlock: (GG, bG, ZG, wG, SG, yG) => {
          GG === LG && function(GG, bG, ZG, wG, SG, LG, yG) {
            const kG = gJ(LG, yG, GG.isPlayerCrouching(bG));
            if (null === kG) return;
            if (GG.HI(ZG, wG, SG, kG), !GG.getClientOption(bG, "canPickUpItems")) return;
            const UG = yZ[kG.split("|")[0]];
            var YG, VG, pG;
            void 0 !== UG && (YG = GG.getInventoryItems(), VG = UG, pG = JK.d.maxItemStackSize, GG.getInventoryFreeSlotCount(bG) > 0 || YG.some((GG => null !== GG && GG.name === VG && null !== GG.amount && GG.amount < pG))) && GG.playSound(bG, (0, fr.g)("pickUp"), .5, 1)
          }(dG, GG, bG, ZG, wG, SG, yG)
        },
        onPlayerAltAction: (GG, bG, ZG, wG, SG) => {
          var yG, kG;
          if (!dG.getClientOption(LG, "canPickUpItems")) return;
          const UG = null !== (yG = null === (kG = dG.YZG(LG)) || void 0 === kG ? void 0 : kG.name) && void 0 !== yG ? yG : null,
            YG = function(GG, bG) {
              const ZG = GG.split("|")[0];
              return CG(ZG) && bG !== US && "Sky Pack" !== bG ? ZG : null
            }(SG, UG);
          if (null !== YG) return void(fb.tap(YG, performance.now()) && Lr(dG, LG, YG, EG));
          if (!gw(UG)) return;
          const VG = Qb.isNewPress(performance.now()),
            pG = function(GG, bG, ZG) {
              return !gw(bG) || ZG ? null : xw(GG)
            }(SG, UG, dG.isPlayerCrouching(LG));
          null !== pG && VG && dG.HI(bG, ZG, wG, pG)
        },
        onPlayerAttemptAltAction: (GG, bG, ZG, wG, SG) => {
          if (function(GG, bG, ZG, wG, SG) {
              "Workbench" === wG.split("|")[0] && GG.getClientOption(ZG, "canCraft") && (wr.open("Workbench", SG.get(), Sr(GG)), bG.send("baf2station Workbench"))
            }(dG, JG, LG, SG, EG), pr(dG, LG, SG)) return "preventAction";
          iG.onAltAction(dG, LG, SG)
        },
        onReceivedMessageFromServer: (GG, bG) => {
          if ("baf2MachineStatus" === GG) {
            var ZG, wG, SG, YG, VG, pG, fG, KG, rG, XG, iG, CG, WG, IG, vG, lG;
            const GG = bG,
              LG = GG.baf2MachineTaught;
            yG.set(GG.baf2MachinePos, {
              status: GG.baf2MachineStatus,
              power: null !== (ZG = GG.baf2MachinePower) && void 0 !== ZG ? ZG : null,
              opLeftMs: null !== (wG = GG.baf2MachineOpLeftMs) && void 0 !== wG ? wG : null,
              dug: GG.baf2MachineYield ? {
                item: GG.baf2MachineYield,
                name: zG([GG.baf2MachineYield])[GG.baf2MachineYield]
              } : null,
              powerCap: null !== (SG = GG.baf2MachinePowerCap) && void 0 !== SG ? SG : null,
              powerRates: null !== (YG = GG.baf2MachinePowerRates) && void 0 !== YG ? YG : null,
              coupled: !0 === GG.baf2MachineCoupled,
              couplerLevel: null !== (VG = GG.baf2MachineCoupler) && void 0 !== VG ? VG : 1,
              taught: LG,
              taughtName: LG ? zG([LG])[LG] : null,
              tier: null !== (pG = GG.baf2MachineTier) && void 0 !== pG ? pG : null,
              input: null !== (fG = GG.baf2MachineInput) && void 0 !== fG ? fG : null,
              inertCoupler: null !== (KG = GG.baf2MachineInertCoupler) && void 0 !== KG ? KG : null,
              inputShort: null !== (rG = GG.baf2MachineInputShort) && void 0 !== rG ? rG : null,
              field: null !== (XG = GG.baf2MachineField) && void 0 !== XG ? XG : null,
              noSeeds: !0 === GG.baf2MachineNoSeeds,
              fuelFed: !0 === GG.baf2MachineFuelFed,
              fuelFeeds: !0 === GG.baf2MachineFuelFeeds,
              coreFull: !0 === GG.baf2MachineCoreFull,
              waterUnpowered: !0 === GG.baf2MachineWaterUnpowered,
              powerShort: !0 === GG.baf2MachinePowerShort,
              powerWait: !0 === GG.baf2MachinePowerWait,
              reactorPowered: !0 === GG.baf2MachineReactorPowered,
              fuelLeftMs: null !== (iG = GG.baf2MachineFuelLeftMs) && void 0 !== iG ? iG : null,
              burning: null !== (CG = GG.baf2MachineBurning) && void 0 !== CG ? CG : null,
              fuelKeep: null !== (WG = GG.baf2MachineFuelKeep) && void 0 !== WG ? WG : null,
              water: null !== (IG = GG.baf2MachineWater) && void 0 !== IG ? IG : null,
              farm: null !== (vG = GG.baf2MachineFarm) && void 0 !== vG ? vG : null,
              cryo: null !== (lG = GG.baf2MachineCryo) && void 0 !== lG ? lG : null
            })
          } else if ("baf2StationOpen" === GG) {
            const GG = bG.baf2Station;
            fb.consumeServerOpen(GG, performance.now()) || Lr(dG, LG, GG, EG)
          } else if ("baf2Power" === GG) {
            const GG = bG;
            FG.set(GG), GG.baf2PowerOpen && (Eb({
              kind: "power"
            }), (0, zS.m)())
          } else if (GG === xG.t) {
            const GG = bG;
            cG.set(GG), GG.baf2WaterOpen && (Eb({
              kind: "water"
            }), (0, zS.m)())
          } else if ("baf2RxPlans" === GG) {
            var jG, MG, AG;
            const GG = bG;
            PG.OJ(GG);
            const ZG = new Set(GG.baf2RxPlanList.map((GG => {
              let [bG, ZG, wG] = GG;
              return `${bG},${ZG},${wG}`
            })));
            TG.retain(ZG);
            const wG = null === (jG = kG.get()) || void 0 === jG ? void 0 : jG.kind,
              SG = "reactor" === wG ? null === (MG = sG.get()) || void 0 === MG ? void 0 : MG.status.baf2RxAt : "battery" === wG ? null === (AG = qG.get()) || void 0 === AG ? void 0 : AG.status.baf2BatAt : void 0;
            SG && Xb.has(SG.join(",")) && !ZG.has(SG.join(",")) && ob(), Xb = ZG
          } else if ("baf2RxStatus" === GG) {
            const GG = bG;
            sG.set(GG), GG.baf2RxOpen && (Eb({
              kind: "reactor"
            }), (0, zS.m)())
          } else if ("baf2BatStatus" === GG) {
            const GG = bG;
            qG.set(GG), GG.baf2BatOpen && (Eb({
              kind: "battery"
            }), (0, zS.m)())
          } else if ("baf2RxAlarm" === GG) TG.OJ(bG);
          else if ("baf2Bomb" === GG) DG.OJ(bG, dG.getPositionView(LG));
          else if ("baf2Fallout" === GG) OG.OJ(bG);
          else if ("baf2ColBeams" === GG) BG.onBeams(bG);
          else if ("baf2ColStatus" === GG) {
            const GG = bG;
            var gG, eG;
            if (BG.onStatus(GG), GG.baf2ColOpen) BG.onOpen(null !== (gG = null === (eG = dG.YZG(LG)) || void 0 === eG ? void 0 : eG.name) && void 0 !== gG ? gG : null), Eb({
              kind: "collider"
            }), (0, zS.m)()
          } else if ("baf2Terminal" === GG) {
            const GG = bG;
            var RG;
            if (aG.apply(GG)) GG.baf2TermReset && (Eb({
              kind: "terminal"
            }), (0, zS.m)());
            else "terminal" === (null === (RG = kG.get()) || void 0 === RG ? void 0 : RG.kind) && (kG.set(null), (0, zS.f)())
          } else if ("baf2Core" === GG) {
            var HG;
            const GG = bG;
            if (UG(!0 === GG.baf2CoreNuclear), function(GG, bG) {
                return "core" === (null === GG || void 0 === GG ? void 0 : GG.kind) && bG.baf2CoreTier > GG.core.message.baf2CoreTier
              }(kG.get(), GG)) return void(0, zS.f)();
            if (GG.baf2CoreRefresh && "core" !== (null === (HG = kG.get()) || void 0 === HG ? void 0 : HG.kind)) return;
            Eb({
              kind: "core",
              core: Jr(GG, zG)
            }), GG.baf2CoreRefresh || (0, zS.m)()
          } else if ("baf2WrenchUndo" === GG) {
            const {
              baf2WrenchPos: GG,
              baf2WrenchBlock: ZG
            } = bG;
            dG.HI(GG[0], GG[1], GG[2], ZG)
          } else if ("baf2Toast" === GG) {
            const GG = bG;
            nG.heard(performance.now(), GG.baf2ToastMs), oG.show(GG)
          } else if ("baf2Area" === GG) uG.arrive(bG, null !== kG.get());
          else if ("baf2Quest" === GG) {
            const GG = bG;
            UG(!0 === GG.baf2QuestNuclear), EG.set(GG, function(GG, bG) {
              var ZG, wG, SG, LG, yG;
              const kG = [];
              for (const [, , VG, , , , , , pG, fG] of GG.baf2QuestSteps) null !== VG && kG.push(VG), kG.push(...null !== pG && void 0 !== pG ? pG : [], ...null !== fG && void 0 !== fG ? fG : []);
              GG.baf2QuestReward && kG.push(GG.baf2QuestReward);
              const UG = null === (ZG = GG.baf2QuestSide) || void 0 === ZG ? void 0 : ZG[2][2];
              UG && kG.push(UG), kG.push(...null !== (wG = null === (SG = GG.baf2QuestSide) || void 0 === SG ? void 0 : SG[2][8]) && void 0 !== wG ? wG : [], ...null !== (LG = null === (yG = GG.baf2QuestSide) || void 0 === yG ? void 0 : yG[2][9]) && void 0 !== LG ? LG : []);
              for (const [VG] of null !== (YG = GG.baf2QuestAlso) && void 0 !== YG ? YG : []) {
                var YG;
                kG.push(VG)
              }
              return bG(kG)
            }(GG, zG)), Ur(GG.baf2QuestTier)
          } else if ("baf2Route" === GG) ! function(GG, bG) {
            let {
              baf2RouteCells: ZG,
              baf2RouteInto: wG
            } = bG;
            0 !== ZG.length && wG ? GG.setRouteChevrons({
              cells: ZG.map(((GG, bG) => {
                const [SG, , LG] = function(GG, bG, ZG) {
                  const wG = ZG + 1 < GG.length ? GG[ZG + 1] : bG;
                  return [wG[0] - GG[ZG][0], 0, wG[2] - GG[ZG][2]]
                }(ZG, wG, bG);
                return {
                  pos: GG,
                  way: [SG, LG]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : GG.setRouteChevrons(null)
          }(dG, bG);
          else if ("baf2QuestBook" === GG) EG.setBook(bG);
          else if ("baf2Stalls" === GG) QG.set(bG.baf2StallCells);
          else if (GG === hZ.o) hG.onMoves(bG);
          else if (GG === hZ.i) hG.onLines(bG);
          else if ("baf2Labels" === GG) mG.OJ(bG);
          else if ("baf2DropMap" === GG) Eb({
            kind: "dropMap",
            dropMap: bG
          }), (0, zS.m)();
          else if ("baf2Islands" === GG) {
            var NG, Gb;
            const GG = bG;
            if (JG.syncIslandEdits(GG.baf2IslandsAnswered), !GG.baf2IslandsOpen && "islands" !== (null === (NG = kG.get()) || void 0 === NG ? void 0 : NG.kind)) return;
            if (GG.baf2IslandsOpen) {
              var bb, Zb;
              const bG = ES.e.get("openEverythingMenuName"),
                ZG = JG.sent() >= hb,
                wG = "other" !== (Qb = {
                  askedAtMs: Kb,
                  askSent: ZG,
                  reaskedAtMs: db,
                  nowMs: Date.now(),
                  panel: null !== (bb = null === (Zb = kG.get()) || void 0 === Zb ? void 0 : Zb.kind) && void 0 !== bb ? bb : null,
                  inGameMenu: ES.e.get("openInGameMenuName"),
                  everythingMenu: null === bG ? null : bG === pZ.u.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== GG.baf2IslandsFocusInvite
                }).everythingMenu && (!!Qb.focusInvite || "islands" === Qb.panel && "clientGame" === Qb.inGameMenu || !(Qb.nowMs - Qb.reaskedAtMs < cY) && (Qb.askSent && Qb.nowMs - Qb.askedAtMs < cY ? "core" === Qb.panel && "clientGame" === Qb.inGameMenu && null === Qb.everythingMenu : "shop" === Qb.everythingMenu || null === Qb.inGameMenu));
              if (ZG && (Kb = -1 / 0), db = -1 / 0, !wG) return void rb()
            }
            const ZG = (Sb = GG.baf2IslandsOpen, Lb = "islands" === (null === (Gb = kG.get()) || void 0 === Gb ? void 0 : Gb.kind), Vb = Jb, pb = Date.now(), Sb && !Lb && pb - Vb < cY);
            Eb({
              kind: "islands",
              islands: GG,
              arrivedAtMs: Date.now(),
              backToCore: lY(kG.get())
            }), ZG && (Jb = -1 / 0, db = Date.now(), JG.send(tG)), GG.baf2IslandsOpen && ("clientGame" !== ES.e.get("openInGameMenuName") && (0, oS.h)(), (0, zS.m)())
          } else if ("baf2CoopTransfer" === GG) {
            var wb;
            const GG = bG;
            GG.baf2TransferOn ? (Eb({
              kind: "transfer",
              transfer: GG,
              arrivedAtMs: Date.now()
            }), (0, zS.m)()) : "transfer" === (null === (wb = kG.get()) || void 0 === wb ? void 0 : wb.kind) && (0, zS.f)()
          } else "baf2IslandLeft" === GG ? (uG.dropHeld(), null !== kG.get() && ob(), "inventory" === ES.e.get("openInGameMenuName") && (0, oS.h)()) : "baf2Arc" === GG ? yb.OJ(dG, bG) : "baf2Blade" === GG ? kb.onBlade(dG, bG) : "baf2JetFlame" === GG ? Ub.OJ(dG, bG) : "baf2GearPower" === GG && Yb.OJ(bG);
          var Sb, Lb, Vb, pb, Qb
        }
      };
      return ib
    }
  },
  38925: (GG, bG, ZG) => {
    function wG(GG, bG, ZG) {
      const wG = new Set,
        SG = new ResizeObserver(ZG),
        LG = () => {
          const bG = new Set(document.querySelectorAll(GG));
          let LG = !1;
          for (const GG of wG) bG.has(GG) || (SG.unobserve(GG), wG.delete(GG), LG = !0);
          for (const GG of bG) wG.has(GG) || (SG.observe(GG), yG.observe(GG, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), wG.add(GG));
          LG && ZG()
        },
        yG = new MutationObserver((bG => {
          bG.some((GG => "attributes" === GG.type)) && ZG(), bG.some((bG => function(GG, bG, ZG) {
            if ("childList" !== GG.type) return !1;
            for (const wG of GG.addedNodes)
              if (wG instanceof Element && (wG.matches(bG) || wG.querySelector(bG))) return !0;
            for (const wG of GG.removedNodes)
              if (wG instanceof Element)
                for (const GG of ZG)
                  if (wG.contains(GG)) return !0;
            return !1
          }(bG, GG, wG))) && LG()
        }));
      yG.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const kG of bG) SG.observe(kG);
      return window.addEventListener("resize", ZG), LG(), ZG(), () => {
        SG.disconnect(), yG.disconnect(), window.removeEventListener("resize", ZG)
      }
    }
    ZG.d(bG, {
      c: () => wG
    })
  },
  38909: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG
    });
    var wG = ZG(38901);
    const SG = 5,
      LG = [0, 0, 0],
      yG = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function kG(GG, bG, ZG, kG, UG, YG) {
      let [VG, pG, fG] = kG;
      const QG = (VG + .5 - ZG[0]) ** 2 + (pG - ZG[1]) ** 2 + (fG + .5 - ZG[2]) ** 2;
      let KG = null;
      QG <= YG ** 2 && (LG[0] = VG + .5, LG[1] = pG + UG, LG[2] = fG + .5, KG = bG.projectWorldPosToViewport(LG));
      const hG = null !== KG && KG.x > -SG && KG.x < 100 + SG && KG.y > -SG && KG.y < 100 + SG;
      return (0, wG.g)(GG, !hG), hG ? (yG.x = KG.x, yG.y = KG.y, yG.distSq = QG, yG) : null
    }
  },
  38901: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      g: () => LG
    });
    const wG = new WeakMap;

    function SG(GG) {
      let bG = wG.get(GG);
      return bG || (bG = {
        hidden: GG.hidden,
        x: NaN,
        y: NaN
      }, wG.set(GG, bG)), bG
    }

    function LG(GG, bG) {
      const ZG = SG(GG);
      ZG.hidden !== bG && (ZG.hidden = bG, GG.hidden = bG)
    }

    function yG(GG, bG, ZG) {
      const wG = SG(GG);
      wG.x === bG && wG.y === ZG || (wG.x = bG, wG.y = ZG, GG.style.translate = `${bG}vw ${ZG}vh`)
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);