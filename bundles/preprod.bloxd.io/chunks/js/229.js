export const id = 229;
export const ids = [229];
export const modules = {
  36906: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => DQ,
      b: () => TQ,
      f: () => BQ,
      h: () => yQ,
      j: () => sQ,
      n: () => rQ,
      r: () => VQ,
      t: () => JQ,
      u: () => pQ,
      y: () => jQ
    });
    var wQ = XQ(26),
      qQ = XQ(31);
    const TQ = "clientGameInventoryButtonsChanged",
      zQ = new Map;

    function sQ() {
      return [...zQ.values()].sort(((QQ, WQ) => {
        var XQ, wQ;
        return (null !== (XQ = QQ.order) && void 0 !== XQ ? XQ : 0) - (null !== (wQ = WQ.order) && void 0 !== wQ ? wQ : 0)
      }))
    }
    let FQ = null;

    function PQ(QQ) {
      FQ = QQ
    }
    let gQ = !1;

    function JQ(QQ) {
      gQ = !0;
      try {
        QQ.onClick()
      } finally {
        gQ = !1
      }
      QQ.panel && "clientGame" === wQ.b.get("openInGameMenuName") && PQ(QQ.id)
    }

    function rQ() {
      return gQ
    }

    function IQ() {
      return sQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function jQ(QQ) {
      const WQ = IQ(),
        XQ = WQ.findIndex((QQ => QQ.id === FQ));
      return !(XQ < 0 || WQ.length < 2) && (JQ(WQ[(XQ + QQ + WQ.length) % WQ.length]), !0)
    }

    function BQ() {
      return null !== FQ && IQ().length > 1
    }

    function yQ() {
      PQ(null)
    }

    function VQ() {
      "inventory" !== wQ.b.get("openInGameMenuName") && PQ(null)
    }

    function DQ() {
      const QQ = FQ;
      return PQ(null), QQ
    }

    function pQ(QQ) {
      return zQ.set(QQ.id, QQ), qQ.k.mB(TQ, sQ(), !0), () => {
        zQ.get(QQ.id) === QQ && (zQ.delete(QQ.id), qQ.k.mB(TQ, sQ()))
      }
    }
  },
  36900: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => gQ,
      c: () => sQ,
      g: () => DQ,
      j: () => yQ,
      n: () => VQ,
      q: () => rQ,
      s: () => PQ,
      u: () => BQ,
      y: () => IQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(1335),
      zQ = XQ(36906);
    const sQ = "clientGameUiChanged";
    let FQ = null;

    function PQ() {
      return FQ
    }

    function gQ(QQ, WQ) {
      const XQ = {
        content: QQ,
        menu: WQ
      };
      return FQ = XQ, qQ.k.mB(sQ, FQ, !0), () => {
        FQ === XQ && (FQ = null, jQ = !1, yQ(), qQ.k.mB(sQ, null))
      }
    }
    let JQ = null;

    function rQ() {
      return JQ
    }

    function IQ(QQ) {
      return JQ = QQ, () => {
        JQ === QQ && (JQ = null)
      }
    }
    let jQ = !1;

    function BQ() {
      const QQ = wQ.b.get("openInGameMenuName");
      "clientGame" !== QQ && (jQ = "inventory" === QQ), (0, zQ.n)() || (0, zQ.h)(), (0, TQ.z)(TQ.e), wQ.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yQ() {
      pQ(!1)
    }

    function VQ() {
      pQ(jQ)
    }

    function DQ() {
      jQ && pQ(!1)
    }

    function pQ(QQ) {
      "clientGame" === wQ.b.get("openInGameMenuName") && wQ.b.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, zQ.h)(), jQ = !1
    }
  },
  38785: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(38792);
    const qQ = [0, 0, 0];
    class TQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ;
        this.pool = QQ, this.origin = WQ, this.count = 0, this.free = []
      }
      take() {
        var QQ;
        const WQ = null !== (QQ = this.free.pop()) && void 0 !== QQ ? QQ : this.count++;
        return WQ >= this.pool.yJ && this.pool.grow(Math.max(2 * this.pool.yJ, WQ + 1)), this.hide(WQ), WQ
      }
      release(QQ) {
        this.hide(QQ), this.free.push(QQ)
      }
      write(QQ, WQ, XQ, qQ) {
        const {
          records: TQ
        } = this.pool, {
          origin: zQ
        } = this, sQ = QQ * wQ.b;
        TQ[sQ] = WQ - zQ[0], TQ[sQ + 1] = XQ - zQ[1], TQ[sQ + 2] = qQ - zQ[2], TQ[sQ + wQ.c] = 0, this.pool.markDirty(QQ)
      }
      hide(QQ) {
        this.pool.records[QQ * wQ.b + wQ.c] = 1, this.pool.markDirty(QQ)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class zQ {
      constructor(QQ, WQ, XQ) {
        this.api = QQ, this.model = WQ, this.initialCapacity = XQ, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(QQ) {
        let WQ = this.kinds.get(QQ);
        if (void 0 === WQ) {
          const XQ = this.api.createInstancePool({
            ...this.model,
            item: QQ
          }, this.initialCapacity);
          null === XQ || void 0 === XQ || XQ.setOrigin(this.origin[0], this.origin[1], this.origin[2]), WQ = XQ && new TQ(XQ, this.origin), this.kinds.set(QQ, WQ)
        }
        return WQ
      }
      follow(QQ) {
        const {
          origin: WQ
        } = this;
        if (Math.abs(QQ[0] - WQ[0]) <= 512 && Math.abs(QQ[1] - WQ[1]) <= 512 && Math.abs(QQ[2] - WQ[2]) <= 512) return !1;
        WQ[0] = Math.floor(QQ[0]), WQ[1] = Math.floor(QQ[1]), WQ[2] = Math.floor(QQ[2]);
        for (const XQ of this.kinds.values()) null === XQ || void 0 === XQ || XQ.pool.setOrigin(WQ[0], WQ[1], WQ[2]);
        return !0
      }
      commit() {
        for (const QQ of this.kinds.values()) null === QQ || void 0 === QQ || QQ.commit()
      }
      dispose() {
        for (const QQ of this.kinds.values()) null === QQ || void 0 === QQ || QQ.dispose();
        this.kinds.clear()
      }
    }
  },
  38801: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ,
      f: () => sQ,
      i: () => FQ
    });
    const wQ = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      qQ = [0, 1, 2, 0, 2, 3],
      TQ = [4, 5];

    function zQ(QQ, WQ, XQ, wQ, qQ) {
      for (let zQ = 0; zQ < 6; zQ++) TQ.includes(zQ) === qQ && PQ(QQ, WQ, XQ, wQ, zQ)
    }

    function sQ(QQ, WQ, XQ, wQ) {
      for (let qQ = 0; qQ < 6; qQ++) PQ(QQ, WQ, XQ, wQ, qQ)
    }

    function FQ(QQ, WQ, XQ, TQ, zQ) {
      for (let sQ = 0; sQ < 6; sQ++)
        for (const FQ of [0, 1]) {
          const [PQ, gQ, JQ] = [FQ + 2, FQ + 1, (FQ + 3) % 4], rQ = QQ.length / 3;
          for (const [WQ, qQ] of [
              [FQ, gQ],
              [PQ, gQ],
              [PQ, JQ],
              [FQ, JQ]
            ])
            for (let FQ = 0; FQ < 3; FQ++) {
              const PQ = wQ[3 * (4 * sQ + WQ) + FQ],
                gQ = wQ[3 * (4 * sQ + qQ) + FQ];
              QQ.push((PQ + (gQ - PQ) * zQ) * TQ / 2 + XQ[FQ])
            }
          for (const QQ of qQ) WQ.push(rQ + QQ)
        }
    }

    function PQ(QQ, WQ, XQ, TQ, zQ) {
      let [sQ, FQ, PQ] = XQ, [gQ, JQ, rQ] = TQ;
      const IQ = QQ.length / 3;
      for (let qQ = 4 * zQ; qQ < 4 * zQ + 4; qQ++) QQ.push(wQ[3 * qQ] * gQ / 2 + sQ, wQ[3 * qQ + 1] * JQ / 2 + FQ, wQ[3 * qQ + 2] * rQ / 2 + PQ);
      for (const wQ of qQ) WQ.push(IQ + wQ)
    }
  },
  38774: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => yD
    });
    var wQ = XQ(61);
    const qQ = [{
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
      TQ = 10;
    let zQ = !0;

    function sQ() {
      return zQ
    }

    function FQ(QQ) {
      zQ = QQ
    }
    const PQ = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function gQ() {
      return zQ ? qQ.length : TQ
    }

    function JQ(QQ) {
      var WQ, XQ;
      return null !== (WQ = null === (XQ = qQ[QQ - 1]) || void 0 === XQ ? void 0 : XQ.reactorTier) && void 0 !== WQ ? WQ : 0
    }

    function rQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JQ(QQ) > 0;
      return XQ && !zQ ? "hidden" : QQ <= WQ ? "open" : XQ ? WQ < 5 ? "hidden" : WQ < TQ ? "teaser" : "locked" : "locked"
    }

    function IQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: wQ,
        n: qQ
      } = yQ(QQ);
      return {
        key: WQ[wQ],
        params: {
          [wQ]: XQ ? String(qQ) : qQ
        }
      }
    }
    const jQ = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function BQ(QQ, WQ) {
      return JQ(QQ) > 0 && WQ < TQ
    }

    function yQ(QQ) {
      const WQ = JQ(QQ);
      if (WQ > 0) return {
        kind: "atomic",
        n: WQ,
        short: `A${WQ}`
      };
      const XQ = function(QQ) {
        return QQ >= 6 && QQ <= 10 ? QQ - 6 + 1 : 0
      }(QQ);
      return XQ > 0 ? {
        kind: "stage",
        n: XQ,
        short: `S${XQ}`
      } : {
        kind: "tier",
        n: QQ,
        short: String(QQ)
      }
    }

    function VQ(QQ) {
      return qQ[Math.max(1, Math.min(QQ, qQ.length)) - 1]
    }

    function DQ(QQ, WQ) {
      return QQ < WQ ? function(QQ) {
        var WQ;
        return null !== (WQ = qQ[QQ]) && void 0 !== WQ ? WQ : null
      }(QQ) : null
    }
    const pQ = "baf2coresubmit",
      GQ = "baf2corebankpause",
      UQ = "baf2coredeposit",
      bQ = "baf2corechargepause";

    function vQ(QQ) {
      var WQ;
      return null !== (WQ = QQ.baf2CoreOpen) && void 0 !== WQ ? WQ : TQ
    }
    const dQ = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function HQ(QQ) {
      return dQ.includes(QQ)
    }
    const aQ = (QQ, WQ) => WQ.map((WQ => [WQ, [QQ]])),
      lQ = Object.fromEntries([...aQ("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...aQ("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...aQ("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...aQ("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...aQ("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...aQ("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...aQ("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...aQ("Parts Bench", ["Focus Lens"]), ...aQ("Machine Bench", ["Laser", "Collider"]), ...aQ("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...aQ("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...aQ("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...aQ("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...aQ("Tool Bench", ["Mob Cage"]), ...aQ("Tool Bench", ["Pocket Terminal"]), ...aQ("Tool Bench", ["Comet Beacon"]), ...aQ("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function hQ(QQ) {
      var WQ;
      return null !== (WQ = lQ[QQ]) && void 0 !== WQ ? WQ : ["Workbench"]
    }

    function iQ(QQ) {
      return hQ(QQ)[0]
    }
    qQ.slice(1).map(((QQ, WQ) => `Core Tier ${WQ+2}`));
    var cQ = XQ(9580);
    const AQ = ["on", "hud", "off"];

    function RQ(QQ) {
      return "on" === QQ
    }
    var EQ = XQ(402);
    const CQ = "Mob Farm",
      uQ = {
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
      LQ = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      kQ = {
        1: 20,
        2: 60,
        3: 120
      },
      fQ = "baf2farmvoid",
      SQ = "Caged ",
      tQ = " Spawner Block";

    function oQ(QQ) {
      return `lifeform:${(0,EQ.ne)(QQ)}`
    }

    function eQ(QQ) {
      if (!QQ) return null;
      if (QQ.startsWith(SQ)) {
        const WQ = QQ.slice(6);
        return LQ.includes(WQ) ? WQ : null
      }
      if (QQ.endsWith(tQ)) {
        const WQ = QQ.slice(0, -14);
        return void 0 !== uQ[WQ] ? WQ : null
      }
      return null
    }

    function nQ(QQ) {
      return !0 === QQ.mobFarm
    }

    function xQ(QQ, WQ) {
      return kQ[uQ[WQ]] * QQ.opMs / 1e3
    }
    const YQ = new Map;
    const NQ = "baf2islands",
      ZQ = "baf2islandnew";

    function OQ(QQ) {
      const WQ = qQ.findIndex((WQ => WQ.unlocks.includes(QQ)));
      return WQ < 0 ? 1 : WQ + 1
    }

    function KQ(QQ) {
      return Math.floor(QQ).toLocaleString("en-US")
    }
    var mQ = XQ(38711);
    const MQ = "baf2terminaltake",
      QW = "baf2terminalput",
      WW = ["one", "stack", "fill"];

    function XW(QQ, WQ, XQ) {
      return `${MQ} ${QQ} ${WQ} ${XQ}`
    }

    function wW(QQ, WQ, XQ) {
      return `${QW} ${QQ} ${WQ} ${XQ}`
    }

    function qW(QQ) {
      return `${QW} ${QQ}`
    }
    const TW = [
      [`${MQ} `, "take"],
      [`${QW} `, "put"]
    ];

    function zW(QQ) {
      const WQ = TW.find((WQ => {
        let [XQ] = WQ;
        return QQ.startsWith(XQ)
      }));
      if (!WQ) return null;
      const [XQ, wQ] = WQ, [qQ, TQ, ...zQ] = QQ.slice(XQ.length).trim().split(" "), sQ = Number(qQ);
      if (!Number.isSafeInteger(sQ) || sQ <= 0) return null;
      if ("put" === wQ && void 0 === TQ) return {
        kind: "putAll",
        seq: sQ
      };
      const FQ = function(QQ) {
        if (WW.includes(QQ)) return QQ;
        const WQ = Number(QQ);
        return /^\d+$/.test(QQ) && Number.isSafeInteger(WQ) && WQ > 0 ? WQ : null
      }(null !== TQ && void 0 !== TQ ? TQ : "");
      return null === FQ || 0 === zQ.length ? null : {
        kind: wQ,
        seq: sQ,
        mode: FQ,
        item: zQ.join(" ")
      }
    }

    function sW(QQ, WQ) {
      const XQ = "number" === typeof QQ ? QQ : "one" === QQ ? 1 : "stack" === QQ ? 99 : WQ;
      return Math.min(WQ, XQ)
    }

    function FW(QQ, WQ) {
      const XQ = QQ => "number" === typeof QQ ? QQ : "one" === QQ ? 1 : 99;
      return "fill" === QQ || "fill" === WQ ? "fill" : XQ(QQ) + XQ(WQ)
    }

    function PW(QQ, WQ) {
      const XQ = zW(QQ),
        wQ = zW(WQ),
        qQ = XQ && wQ ? function(QQ, WQ) {
          return "take" === QQ.kind || "take" === WQ.kind ? "take" === QQ.kind && "take" === WQ.kind && QQ.item === WQ.item ? {
            ...WQ,
            mode: FW(QQ.mode, WQ.mode)
          } : null : "putAll" === QQ.kind || "putAll" === WQ.kind ? {
            kind: "putAll",
            seq: WQ.seq
          } : QQ.item === WQ.item ? {
            ...WQ,
            mode: FW(QQ.mode, WQ.mode)
          } : null
        }(XQ, wQ) : null;
      return qQ ? "putAll" === (TQ = qQ).kind ? qW(TQ.seq) : "put" === TQ.kind ? wW(TQ.seq, TQ.mode, TQ.item) : XW(TQ.seq, TQ.mode, TQ.item) : null;
      var TQ
    }
    const gW = "baf2rx";

    function JW(QQ, WQ) {
      for (var XQ = arguments.length, wQ = new Array(XQ > 2 ? XQ - 2 : 0), qQ = 2; qQ < XQ; qQ++) wQ[qQ - 2] = arguments[qQ];
      return [gW, QQ[0], QQ[1], QQ[2], WQ, ...wQ].join(" ")
    }
    const rW = 2,
      IW = 4,
      jW = 8,
      BW = 16,
      yW = 32,
      VW = 64,
      DW = 128,
      pW = 256,
      GW = 512,
      UW = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      bW = [{
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
    const vW = "Biomass",
      dW = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function HW(QQ) {
      return {
        input: vW,
        inputAmount: 1,
        output: QQ,
        outputAmount: 1
      }
    }
    const aW = "baf2synth",
      lW = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      hW = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      iW = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      cW = function(QQ, WQ) {
        return {
          input: QQ,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: WQ,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      AW = function(QQ, WQ) {
        return {
          ...cW(QQ, WQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      RW = hW.map((QQ => AW(QQ, "Biomass", 2))),
      EW = {
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
          recipes: [cW("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), cW("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), cW("Raw Gold", "Gold Grit", 2), cW("Messy Stone", "Sand"), cW("Gravel", "Sand"), cW("Raw Voltite", "Voltite Dust", 2), cW("Moonstone", "Moonstone Dust", 4), cW("Wheat Seeds", "Fertiliser"), cW("Raw Uranium", "Uranium Grit", 2), AW("Mossy Messy Stone", "Sand"), ...RW],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [cW("Iron Grit", "Iron Bar"), cW("Copper Grit", "Copper Bar"), cW("Gold Grit", "Gold Bar"), cW("Raw Iron", "Iron Bar"), cW("Raw Copper", "Copper Bar"), cW("Raw Gold", "Gold Bar"), cW("Sand", "Glass"), cW("Messy Stone", "Stone"), ...EQ.Sc.map((QQ => cW(QQ, "Charcoal", 1, 4))), cW("Wheat", "Bread", 1, 2), ...hW.map(((QQ, WQ) => AW(QQ, iW[WQ])))],
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
          recipes: [cW("Iron Bar", "Iron Plate"), cW("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [cW("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [cW("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [cW("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), cW("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), cW("Raw Gold", "Gold Grit", 3), cW("Raw Voltite", "Voltite Dust", 3), cW("Messy Stone", "Sand", 2), cW("Gravel", "Sand", 2), cW("Moonstone", "Moonstone Dust", 6), cW("Raw Uranium", "Uranium Grit", 3), AW("Mossy Messy Stone", "Sand", 2), ...RW],
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
          table: UW
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [cW("Coal", "Diamond", 1, 24), cW("Voltite Dust", "Moonstone", 1, 12)],
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
        ...mQ.i
      },
      CW = {
        Crusher: [cW("Spent Pellet", "Glow Dust"), cW("Wheat Seeds", "Biomass"), cW("Wheat", "Biomass"), cW("Dead Bush", "Biomass"), cW("Dusk Moss", "Biomass"), cW("Rotten Flesh", "Biomass"), cW("Bone", "Biomass", 2)],
        "Shatter Mill": [cW("Spent Pellet", "Glow Dust"), cW("Wheat Seeds", "Biomass"), cW("Wheat", "Biomass"), cW("Dead Bush", "Biomass"), cW("Dusk Moss", "Biomass"), cW("Rotten Flesh", "Biomass"), cW("Bone", "Biomass", 2), ...EQ.Sc.map((QQ => cW(QQ, "Biomass")))],
        Smelter: [cW("Biomass", "Fertiliser", 2)],
        Press: [cW("Coal", "Graphite", 1, 4)]
      },
      uW = "Power Coupler",
      LW = "Advanced Coupler",
      kW = "Nova Coupler",
      fW = [{
        item: uW,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: LW,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: kW,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const SW = new Map;

    function tW(QQ) {
      var WQ, XQ;
      return null !== (WQ = null !== (XQ = QQ.fuelSlot) && void 0 !== XQ ? XQ : QQ.couplerSlot) && void 0 !== WQ ? WQ : null
    }

    function oW(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!QQ.couplable) throw new Error(`${QQ.kind} takes no Power Coupler`);
      let XQ = SW.get(QQ);
      XQ || (XQ = [], SW.set(QQ, XQ));
      let wQ = XQ[WQ];
      if (!wQ) {
        var qQ;
        const {
          divisor: TQ,
          powerPerS: zQ
        } = fW[WQ - 1], sQ = QQ.opMs / TQ, FQ = void 0 !== QQ.fluidMade || void 0 !== QQ.cryoMade ? QQ.powerPerOp : zQ * sQ / 1e3;
        wQ = {
          ...QQ,
          fuelSlot: null,
          couplerSlot: null !== (qQ = tW(QQ)) && void 0 !== qQ ? qQ : void 0,
          opMs: sQ,
          powerPerOp: FQ,
          coupled: !0
        }, WQ > 1 && (wQ = {
          ...wQ,
          couplerLevel: WQ
        }), XQ[WQ] = wQ
      }
      return wQ
    }
    const eW = new Map;
    const nW = new Map;

    function xW(QQ, WQ) {
      if (null === WQ || (XQ = WQ, !dW.includes(XQ))) return QQ;
      var XQ;
      let wQ = nW.get(WQ);
      return wQ || (wQ = {
        ...QQ,
        recipes: [HW(WQ)]
      }, nW.set(WQ, wQ)), wQ
    }

    function YW(QQ) {
      return !0 === QQ.synth
    }
    const NW = (QQ, WQ, XQ, wQ) => ({
        output: QQ,
        outputAmount: WQ,
        tier: XQ,
        inputs: wQ.map((QQ => {
          let [WQ, XQ] = QQ;
          return {
            item: WQ,
            amount: XQ
          }
        }))
      }),
      ZW = Object.fromEntries([NW("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), NW("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), NW("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), NW("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), NW("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), NW("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), NW("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), NW("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), NW("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), NW("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), NW("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), NW("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), NW("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), NW("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), NW("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), NW("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), NW("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), NW("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), NW("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), NW("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), NW("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), NW("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), NW("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), NW("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), NW("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), NW("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), NW("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), NW("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), NW("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), NW("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((QQ => [QQ.output, QQ]))),
      OW = new Map;

    function KW(QQ, WQ) {
      let XQ = EW[QQ];
      if (WQ.atomic && (XQ = function(QQ) {
          const WQ = CW[QQ.kind];
          if (!WQ) return QQ;
          let XQ = eW.get(QQ.kind);
          if (!XQ) {
            const wQ = new Set(WQ.map((QQ => QQ.input))),
              qQ = QQ.recipes.filter((QQ => !wQ.has(QQ.input)));
            XQ = {
              ...QQ,
              recipes: [...qQ, ...WQ]
            }, eW.set(QQ.kind, XQ)
          }
          return XQ
        }(XQ)), XQ.synth) return xW(XQ, WQ.taught);
      if (WQ.coupled && XQ.couplable) return oW(XQ, WQ.level);
      const wQ = XQ.inputSlots && null !== WQ.taught ? ZW[WQ.taught] : void 0;
      if (!wQ) return XQ;
      const qQ = `${QQ}|${wQ.output}`;
      let TQ = OW.get(qQ);
      return TQ || (TQ = {
        ...XQ,
        bench: wQ
      }, OW.set(qQ, TQ)), TQ
    }
    const mW = ["Diamond", "Moonstone"];

    function MW(QQ) {
      return new Set(QQ.flatMap((QQ => QQ.bonus ? [QQ.output, QQ.bonus.item] : [QQ.output])).filter((QQ => !mW.includes(QQ))))
    }
    const QX = Object.values(EW).flatMap((QQ => QQ.recipes));
    MW(QX.filter((QQ => !0 !== QQ.nuclear))), MW([...QX.filter((QQ => !0 === QQ.nuclear)), ...Object.values(CW).flat()]);

    function WX(QQ) {
      return null === QQ.inputSlot && void 0 === QQ.inputSlots && void 0 === QQ.powerMade && void 0 === QQ.fluidMade && !QQ.treeCutter && void 0 === QQ.table
    }

    function XX(QQ) {
      return !0 === QQ.treeCutter
    }
    const wX = ["Voltite Cell"];

    function qX(QQ) {
      var WQ, XQ;
      return null !== (WQ = null === (XQ = QQ.fuels) || void 0 === XQ ? void 0 : XQ.some((QQ => wX.includes(QQ)))) && void 0 !== WQ && WQ
    }
    const TX = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(EQ.Sc.map((QQ => [QQ, 8e3]))),
        ...Object.fromEntries(EQ.wd.map((QQ => [QQ, 2e3]))),
        "Voltite Cell": 12e4
      },
      zX = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      sX = {
        "Uranium Deposit": 4e3
      };

    function FX(QQ) {
      var WQ;
      return null !== (WQ = Object.keys(zX).find((WQ => zX[WQ] === QQ))) && void 0 !== WQ ? WQ : null
    }

    function PX(QQ) {
      return lW.includes(QQ)
    }

    function gX(QQ) {
      return !0 !== QQ.nuclear || sQ()
    }
    var JX = XQ(382);
    var rX = XQ(9660),
      IX = XQ(9598),
      jX = XQ(9664),
      BX = XQ(9653);
    const yX = "Reactor Controller",
      VX = "Reactor Port",
      DX = "Battery Cell",
      pX = ["fuel", "water", "waste"],
      GX = {
        fuel: VX,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      UX = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      bX = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      vX = "Reactor Frame",
      dX = "Reactor Glass",
      HX = {
        edge: [vX],
        cap: [dX, VX],
        wall: [dX, VX],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [yX]
      },
      aX = {
        edge: [DX],
        cap: [DX],
        wall: [DX],
        inside: [DX],
        ctrl: [DX]
      },
      lX = ["edge", "cap", "wall", "inside"],
      hX = ["Reactor Slag"];

    function iX(QQ) {
      return hX.includes(cX(QQ))
    }

    function cX(QQ) {
      const WQ = QQ.indexOf("|");
      return WQ < 0 ? QQ : QQ.slice(0, WQ)
    }

    function AX(QQ) {
      return cX(QQ) === yX ? "reactor" : null
    }

    function RX(QQ) {
      return cX(QQ) !== VX ? null : QQ.endsWith("|Water") ? "water" : QQ.endsWith("|Waste") ? "waste" : "fuel"
    }

    function EX(QQ) {
      const WQ = RX(QQ);
      return null === WQ ? null : LX(GX[pX[(pX.indexOf(WQ) + 1) % pX.length]], function(QQ) {
        return QQ.includes(CX)
      }(QQ))
    }
    const CX = "|meta|rot1|Formed",
      uX = new Set([vX, dX, VX]);

    function LX(QQ, WQ) {
      var XQ;
      const wQ = cX(QQ);
      if (!uX.has(wQ)) return QQ;
      if (wQ !== VX) return WQ ? wQ + CX : wQ;
      const qQ = null !== (XQ = RX(QQ)) && void 0 !== XQ ? XQ : "fuel";
      return WQ ? "fuel" === qQ ? wQ + CX : `${wQ}${CX}|${"water"===qQ?"Water":"Waste"}` : GX[qQ]
    }

    function kX(QQ, WQ) {
      const XQ = ww(QQ, WQ);
      if ("Air" === XQ) return !1;
      const wQ = "reactor" === QQ ? HX : aX;
      return lX.some((QQ => wQ[QQ].includes(XQ))) || "reactor" === QQ && hX.includes(XQ)
    }

    function fX(QQ) {
      return bX[QQ]
    }

    function SX(QQ) {
      var WQ;
      return null !== (WQ = UX[QQ]) && void 0 !== WQ ? WQ : UX[1]
    }

    function tX(QQ) {
      const [WQ, , XQ] = SX(QQ);
      return [XQ, 0, -WQ]
    }

    function oX(QQ, WQ, XQ, wQ, qQ, TQ) {
      return {
        ctrl: [QQ[0], QQ[1], QQ[2]],
        rot: UX[WQ] ? WQ : 1,
        w: XQ,
        h: wQ,
        d: qQ,
        cu: TQ[0],
        cv: TQ[1]
      }
    }

    function eX(QQ, WQ) {
      return "reactor" === QQ ? [Math.floor((WQ - 1) / 2), 0] : [0, 0]
    }

    function nX(QQ, WQ, XQ, wQ, qQ) {
      let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ.rot;
      if (XQ === QQ.w && wQ === QQ.h && qQ === QQ.d && TQ === QQ.rot) return QQ;
      const [zQ] = eX(WQ, QQ.w);
      if (QQ.cu === zQ && QQ.cv <= 1) return oX(QQ.ctrl, TQ, XQ, wQ, qQ, eX(WQ, XQ));
      const sQ = (QQ, WQ) => Math.max(1, Math.min(WQ, QQ));
      return oX(QQ.ctrl, TQ, XQ, wQ, qQ, [sQ(QQ.cu, XQ - 2), 0 === QQ.cv ? 0 : sQ(QQ.cv, wQ - 2)])
    }
    const xX = 11,
      YX = 2 * xX + 1;
    new Uint8Array(YX * YX * YX);

    function NX(QQ) {
      return QQ.w * QQ.h * QQ.d
    }

    function ZX(QQ) {
      const WQ = tX(QQ.rot);
      return [QQ.ctrl[0] - WQ[0] * QQ.cu, QQ.ctrl[1] - QQ.cv, QQ.ctrl[2] - WQ[2] * QQ.cu]
    }

    function OX(QQ) {
      return QQ.cv * QQ.d * QQ.w + QQ.cu
    }

    function KX(QQ, WQ) {
      const XQ = WQ % QQ.w,
        wQ = Math.floor(WQ / QQ.w) % QQ.d;
      return [XQ, Math.floor(WQ / (QQ.w * QQ.d)), wQ]
    }

    function mX(QQ, WQ) {
      const [XQ, wQ, qQ] = KX(QQ, WQ), TQ = ZX(QQ), zQ = SX(QQ.rot), sQ = tX(QQ.rot);
      return [TQ[0] + sQ[0] * XQ - zQ[0] * qQ, TQ[1] + wQ, TQ[2] + sQ[2] * XQ - zQ[2] * qQ]
    }

    function MX(QQ, WQ) {
      const XQ = ZX(QQ),
        wQ = SX(QQ.rot),
        qQ = tX(QQ.rot),
        TQ = WQ[0] - XQ[0],
        zQ = WQ[2] - XQ[2],
        sQ = TQ * qQ[0] + zQ * qQ[2],
        FQ = -(TQ * wQ[0] + zQ * wQ[2]),
        PQ = WQ[1] - XQ[1];
      return sQ < 0 || sQ >= QQ.w || PQ < 0 || PQ >= QQ.h || FQ < 0 || FQ >= QQ.d ? -1 : (PQ * QQ.d + FQ) * QQ.w + sQ
    }

    function Qw(QQ, WQ) {
      if (WQ === OX(QQ)) return "ctrl";
      const [XQ, wQ, qQ] = KX(QQ, WQ), TQ = 0 === wQ || wQ === QQ.h - 1, zQ = Number(0 === XQ || XQ === QQ.w - 1) + Number(TQ) + Number(0 === qQ || qQ === QQ.d - 1);
      return zQ >= 2 ? "edge" : 1 === zQ ? TQ ? "cap" : "wall" : "inside"
    }

    function Ww(QQ, WQ) {
      const [XQ, wQ, qQ] = KX(QQ, WQ);
      return 0 === XQ || XQ === QQ.w - 1 || 0 === wQ || wQ === QQ.h - 1 || 0 === qQ || qQ === QQ.d - 1 ? -1 : ((wQ - 1) * (QQ.d - 2) + (qQ - 1)) * (QQ.w - 2) + (XQ - 1)
    }

    function Xw(QQ, WQ) {
      const XQ = QQ.w - 2,
        wQ = QQ.d - 2,
        qQ = WQ % XQ + 1,
        TQ = Math.floor(WQ / XQ) % wQ + 1;
      return ((Math.floor(WQ / (XQ * wQ)) + 1) * QQ.d + TQ) * QQ.w + qQ
    }

    function ww(QQ, WQ) {
      const XQ = cX(WQ);
      return "reactor" === QQ && XQ === yX ? vX : XQ
    }

    function qw(QQ, WQ, XQ) {
      const wQ = "ctrl" === WQ ? cX(XQ) : ww(QQ, XQ);
      return ("reactor" === QQ ? HX : aX)[WQ].includes(wQ) ? "ok" : "Air" === wQ ? "missing" : kX(QQ, XQ) ? "wrong" : "blocked"
    }

    function Tw(QQ, WQ) {
      return "battery" === QQ ? DX : "inside" === WQ ? null : function(QQ, WQ) {
        if ("inside" === WQ || "ctrl" === WQ || "battery" === QQ) return null;
        return "edge" === WQ ? vX : dX
      }(QQ, WQ)
    }
    const zw = {
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
      sw = "Collider",
      Fw = "Laser",
      Pw = "Star Alloy",
      gw = "Glow Dust",
      Jw = [sw, "_Collider Focus"];

    function rw(QQ) {
      return Jw.indexOf(cX(QQ))
    }

    function Iw(QQ) {
      return cX(QQ) === Fw
    }

    function jw(QQ) {
      return [
        [QQ[0], QQ[1], QQ[2]],
        [QQ[0], QQ[1] + 1, QQ[2]]
      ]
    }
    const Bw = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function yw(QQ, WQ, XQ) {
      const wQ = Bw[WQ];
      return [QQ[0] + wQ[0] * XQ, QQ[1], QQ[2] + wQ[2] * XQ]
    }

    function Vw(QQ, WQ) {
      if (WQ[1] !== QQ[1]) return null;
      const XQ = WQ[0] - QQ[0],
        wQ = WQ[2] - QQ[2];
      if (0 !== XQ === (0 !== wQ)) return null;
      const qQ = Math.abs(XQ + wQ);
      if (qQ > zw.LASER_D) return null;
      return {
        dir: wQ < 0 ? 0 : XQ > 0 ? 1 : wQ > 0 ? 2 : 3,
        Az: qQ
      }
    }

    function Dw(QQ, WQ, XQ) {
      const wQ = WQ => Math.abs(QQ[0] - WQ[0]) <= 1 && Math.abs(QQ[1] - WQ[1]) <= 1;
      return wQ(WQ) || wQ(XQ)
    }

    function pw(QQ, WQ) {
      return function(QQ, WQ, XQ, wQ) {
        return [0, 1, 2, 3].map((qQ => {
          for (let TQ = 1; TQ <= zw.LASER_D; TQ++) {
            const zQ = yw(QQ, qQ, TQ);
            if (Dw([zQ[0], zQ[2]], WQ, XQ) || !wQ(zQ)) return !1
          }
          return !0
        }))
      }(jw(QQ)[1], WQ.spawnXZ, WQ.coreXZ, (QQ => QQ[1] >= rX.p && QQ[1] < rX.p + rX.s && QQ[0] >= WQ.minXZ[0] && QQ[0] <= WQ.maxXZ[0] && QQ[2] >= WQ.minXZ[1] && QQ[2] <= WQ.maxXZ[1]))
    }
    const Gw = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function Uw(QQ) {
      return Math.max(48 + 16 * QQ, VQ(QQ).machineAllowance)
    }
    const bw = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function vw(QQ) {
      const WQ = QQ.split("|")[0];
      return bw.includes(WQ) ? "Solar Panel" : WQ === jX.d ? "Fluid Pipe" : rw(WQ) >= 0 ? "Collider" : (XQ = WQ, Gw.includes(XQ) ? WQ : null);
      var XQ
    }
    const dw = "buildAFactory2Game:solarPanelDescription";
    const Hw = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function aw(QQ, WQ) {
      var XQ;
      return null !== (XQ = Hw.find((XQ => {
        var wQ;
        return (null !== (wQ = QQ.level(XQ)) && void 0 !== wQ ? wQ : 0) >= WQ
      }))) && void 0 !== XQ ? XQ : null
    }
    const lw = "buildAFactory2Game:";
    let hw = null;
    const iw = {
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
      Aw = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      Rw = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      Ew = {
        "Loot Chest": `${lw}lookRuinChestName`
      };

    function Cw(QQ) {
      return "object" === typeof QQ && null !== QQ && "translationKey" in QQ && "string" === typeof QQ.translationKey ? QQ.translationKey : null
    }

    function uw(QQ, WQ) {
      var XQ;
      return null !== (XQ = Cw(QQ.displayName(WQ))) && void 0 !== XQ ? XQ : `item:${(0,EQ.ne)(WQ)}`
    }

    function Lw(QQ, WQ) {
      var XQ, wQ, qQ, TQ;
      let zQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WQ;
      if ("Solar Panel" === vw(WQ)) return {
        name: Cw(QQ.displayName("Solar Panel")),
        detail: dw,
        detailItem: null
      };
      const FQ = WQ.endsWith(" Ore"),
        PQ = (hw ??= new Set([...Object.keys((0, IX.e)()), ...Object.keys((0, jX.t)())].map((QQ => QQ.split("|")[0]))), hw).has(WQ),
        gQ = FQ || PQ ? null : function(QQ) {
          var WQ;
          return QQ.endsWith(" Log") && !QQ.startsWith("Barkless ") ? "lookLog" : QQ.endsWith(" Sapling") ? "lookSapling" : QQ.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (WQ = iw[QQ]) && void 0 !== WQ ? WQ : null
        }(WQ);
      if (!QQ.isBlock(WQ) || !FQ && !PQ && null === gQ) return null;
      const JQ = null !== (XQ = null !== (wQ = Ew[WQ]) && void 0 !== wQ ? wQ : Cw(null !== (qQ = QQ.displayName(zQ)) && void 0 !== qQ ? qQ : QQ.displayName(WQ))) && void 0 !== XQ ? XQ : `item:${(0,EQ.ne)(WQ)}`;
      if (null !== gQ) return {
        name: JQ,
        detail: `${lw}${gQ}`,
        detailItem: null
      };
      const rQ = null !== (TQ = Aw[WQ]) && void 0 !== TQ ? TQ : sQ() ? Rw[WQ] : void 0;
      if (PQ && void 0 !== rQ) return {
        name: JQ,
        detail: `${lw}${rQ}`,
        detailItem: null
      };
      const IQ = zX[WQ];
      if (void 0 !== IQ) return {
        name: JQ,
        detail: `${lw}lookDeposit`,
        detailItem: uw(QQ, IQ)
      };
      const jQ = QQ.harvestLevel(WQ);
      if (FQ && "rock" === QQ.harvestType(WQ) && 0 !== jQ) {
        const WQ = aw(QQ, null !== jQ && void 0 !== jQ ? jQ : 0);
        if (WQ === Hw[0]) return {
          name: JQ,
          detail: `${lw}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== WQ) return {
          name: JQ,
          detail: `${lw}lookPickaxe`,
          detailItem: uw(QQ, WQ)
        }
      }
      return {
        name: JQ,
        detail: Cw(QQ.description(WQ)),
        detailItem: null
      }
    }

    function kw(QQ) {
      return QQ < rX.p - 24
    }
    const fw = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const Sw = "Wrench",
      tw = "Nova Wrench";

    function ow(QQ) {
      return QQ === Sw || QQ === tw
    }
    const ew = [...rX.L, "Belt Lift", "Belt Drop"];
    const nw = ["Belt Lift", "Belt Drop"],
      xw = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function Yw(QQ) {
      return QQ.split("|")[0]
    }

    function Nw(QQ) {
      const WQ = /\|rot(\d)/.exec(QQ);
      return WQ ? Number(WQ[1]) : 1
    }

    function Zw(QQ) {
      return QQ % 4 + 1
    }

    function Ow(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === WQ && "" === XQ ? QQ : `${QQ}|meta|rot${WQ}${XQ}`
    }

    function Kw(QQ) {
      return Yw(QQ) === rX.A ? (0, rX.W)(QQ) ? "gateRight" : "gateLeft" : (0, rX.cb)(QQ)
    }

    function mw(QQ) {
      const WQ = Yw(QQ),
        XQ = Nw(QQ);
      if (rX.L.includes(WQ)) return (0, rX.P)(WQ, Zw(XQ), null);
      if (WQ === rX.k) return (0, rX.gb)(Zw(XQ), (0, rX._)(QQ));
      if (WQ === rX.E) {
        const wQ = xw[(0, rX.cb)(QQ)];
        return null === wQ ? Ow(WQ, Zw(XQ)) : Ow(WQ, XQ, rX.I[wQ])
      }
      return WQ === rX.A ? (0, rX.W)(QQ) ? Ow(WQ, Zw(XQ)) : Ow(WQ, XQ, rX.m) : BX.e.includes(WQ) && !nw.includes(WQ) || PX(WQ) ? Ow(WQ, Zw(XQ)) : null
    }

    function Mw(QQ) {
      return BX.e.includes(QQ) || PX(QQ) || null !== vw(QQ)
    }

    function Qq(QQ) {
      return "Solar Panel" === vw(QQ)
    }
    const Wq = "buildAFactory2Game:",
      Xq = {
        leftFront: `${Wq}lookSplitDetail_leftFront`,
        frontRight: `${Wq}lookSplitDetail_frontRight`,
        gateRight: `${Wq}lookGateDetail_gateRight`
      };

    function wq(QQ, WQ) {
      var XQ;
      let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const qQ = Kw(QQ),
        TQ = null === qQ ? null : `${Wq}${qQ.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${qQ}`,
        zQ = null === qQ ? null : null !== (XQ = Xq[qQ]) && void 0 !== XQ ? XQ : null;
      if (ow(WQ) && wQ) {
        const XQ = Yw(QQ);
        return WQ === tw && sQ() && function(QQ) {
          return ew.includes(Yw(QQ))
        }(QQ) ? {
          mode: TQ,
          detail: zQ,
          next: `${Wq}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: TQ,
          detail: zQ,
          next: Mw(XQ) && !Qq(XQ) ? `${Wq}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const FQ = ow(WQ) ? mw(QQ) : null;
      if (null === FQ) return {
        mode: TQ,
        detail: zQ,
        next: null,
        nextState: null
      };
      const PQ = Kw(FQ);
      return null === PQ || Nw(FQ) !== Nw(QQ) ? {
        mode: TQ,
        detail: zQ,
        next: `${Wq}lookWrenchTurn`,
        nextState: null
      } : {
        mode: TQ,
        detail: zQ,
        next: `${Wq}lookWrenchNext`,
        nextState: `${Wq}lookWrenchState_${PQ}`
      }
    }
    const qq = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const Tq = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function zq(QQ) {
      return [0, 1, 2, 3].map((WQ => 0 !== (QQ & 1 << WQ)))
    }

    function sq(QQ) {
      const WQ = [];
      for (let XQ = 8; XQ + 2 < QQ.length; XQ += 3) WQ.push([QQ[XQ], QQ[XQ + 1], QQ[XQ + 2]]);
      return {
        focus: [QQ[0], QQ[1], QQ[2]],
        lasers: zq(QQ[3]),
        open: zq(QQ[4]),
        live: zq(QQ[5]),
        on: 1 === QQ[6],
        state: Tq[QQ[7]],
        blockers: WQ
      }
    }
    const Fq = "Arc Caster",
      Pq = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      gq = (Object.values(Pq), "Jet Chestplate"),
      Jq = "Nova Jet Chestplate",
      rq = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Iq = Object.values(rq);

    function jq(QQ, WQ, XQ) {
      return Math.min(function(QQ) {
        return sQ() && JQ(QQ) >= 5 ? 20 : 10
      }(XQ), Math.floor(function(QQ, WQ) {
        return Math.max(0, QQ) + (sQ() ? Math.max(0, WQ) : 0)
      }(QQ, WQ) / 5))
    }

    function Bq(QQ, WQ, XQ) {
      const wQ = jq(WQ, XQ, QQ),
        qQ = JQ(QQ),
        TQ = (qQ >= 3 ? 55 : qQ >= 1 ? 50 : QQ >= 8 ? 45 : 30) + wQ,
        zQ = Math.max(100 + wQ, 2 * TQ);
      return {
        arcDamage: TQ,
        arcPierce: QQ >= 7 ? 2 : 1,
        arcChain: QQ >= 10,
        barrierMax: (qQ >= 4 ? 100 : qQ >= 2 ? 90 : QQ >= 9 ? 80 : QQ >= 6 ? 60 : 40) + 5 * wQ,
        barrierRegenPerS: qQ >= 5 ? 20 : QQ >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * wQ,
        novaShieldRegenPerS: 32,
        bladeDamage: zQ,
        bladePunch: Math.round(.5 * zQ),
        forgeRank: wQ
      }
    }
    const yq = {
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
    var Vq = XQ(37131),
      Dq = XQ(36906),
      pq = XQ(36900),
      Gq = XQ(26),
      Uq = XQ(1698),
      bq = XQ(1081),
      vq = XQ.n(bq);

    function dq(QQ) {
      return !0 === QQ.field
    }
    const Hq = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function aq(QQ) {
      return Hq.has(QQ) ? `buildAFactory2Game:itemPlural_${(0,EQ.ne)(QQ)}` : null
    }
    var lq = XQ(1226),
      hq = XQ(1094),
      iq = XQ(1988),
      cq = XQ(1975),
      Aq = XQ(1460),
      Rq = XQ(37123),
      Eq = XQ(31),
      Cq = XQ(37114);
    const uq = "baf2QuestView",
      Lq = "baf2PlayerY",
      kq = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class fq {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = QQ, this.view = {
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
      set(QQ, WQ) {
        var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ;
        const gQ = JSON.stringify(QQ.baf2QuestName) === JSON.stringify(this.view.name),
          JQ = new Set(this.view.rows.filter((QQ => QQ.done)).map((QQ => QQ.id))),
          rQ = new Set(this.view.rows.filter((QQ => QQ.justFinished)).map((QQ => QQ.id))),
          IQ = QQ.baf2QuestSide,
          jQ = null !== IQ && !0 === QQ.baf2QuestSideFocus;
        let BQ = !1,
          yQ = 0;
        const VQ = QQ.baf2QuestSteps.map((QQ => {
            const WQ = Nq(QQ, kq.has(QQ[0]) ? QQ[0] : "" + yQ++),
              XQ = gQ && WQ.done && !JQ.has(WQ.id);
            return WQ.justFinished = XQ || gQ && WQ.done && rQ.has(WQ.id), BQ ||= XQ, WQ
          })),
          DQ = Yq(VQ);
        DQ >= 0 && !jQ && (VQ[DQ].current = !0);
        const pQ = !gQ && null !== QQ.baf2QuestName,
          GQ = JSON.stringify(IQ && [IQ[0], IQ[1]]),
          UQ = GQ === JSON.stringify(null !== (XQ = null === (wQ = this.view.side) || void 0 === wQ ? void 0 : wQ.name) && void 0 !== XQ ? XQ : null),
          bQ = null !== IQ && !this.sidesSeen.has(GQ);
        bQ && this.sidesSeen.add(GQ), this.serverTutorial = null !== (qQ = QQ.baf2QuestTutorial) && void 0 !== qQ ? qQ : "on", (null !== (TQ = QQ.baf2QuestTutorialSeq) && void 0 !== TQ ? TQ : 0) >= this.pickSeq && this.endPick();
        const vQ = !gQ || !UQ || QQ.baf2QuestTier !== this.view.tier;
        this.view = {
          name: QQ.baf2QuestName,
          rows: VQ,
          reward: QQ.baf2QuestReward,
          goal: QQ.baf2QuestGoal,
          pulse: this.view.pulse + (BQ || pQ ? 1 : 0),
          itemNames: WQ,
          side: IQ && {
            name: [IQ[0], IQ[1]],
            row: {
              ...Nq(IQ[2], "side"),
              current: jQ
            },
            goal: null !== (zQ = IQ[3]) && void 0 !== zQ ? zQ : null
          },
          sideCameUpAt: bQ ? Date.now() : this.view.sideCameUpAt,
          tier: QQ.baf2QuestTier,
          core: QQ.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (sQ = QQ.baf2QuestAlso) && void 0 !== sQ ? sQ : [],
          depth: null !== (FQ = QQ.baf2QuestDepth) && void 0 !== FQ ? FQ : null,
          tutorial: null !== (PQ = this.pickedTutorial) && void 0 !== PQ ? PQ : this.serverTutorial,
          tutorialKnown: !0
        }, this.mB(), BQ && this.scheduleClear(), vQ && this.requestBook()
      }
      setTutorial(QQ) {
        return this.endPick(), this.pickedTutorial = QQ, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.mB()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: QQ
        }, this.mB(), this.pickSeq
      }
      onPlayerY(QQ) {
        const WQ = Math.floor(QQ);
        WQ !== this.playerY && (this.playerY = WQ, this.view.depth && Eq.k.mB(Lq, WQ))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(QQ) {
        this.view = {
          ...this.view,
          chapters: QQ.baf2BookChapters
        }, this.mB()
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
            rows: this.view.rows.map((QQ => QQ.justFinished ? {
              ...QQ,
              justFinished: !1
            } : QQ))
          }, this.mB()
        }), 2400)
      }
      mB() {
        Eq.k.mB(uq, this.view, !0)
      }
    }

    function Sq(QQ, WQ) {
      return QQ.sideCameUpAt > 0 && WQ - QQ.sideCameUpAt < 2400
    }

    function tq(QQ) {
      return (null === QQ.name || oq(QQ)) && null === QQ.side && null !== QQ.chapters
    }

    function oq(QQ) {
      var WQ;
      return "quest_forgeOngoing" === (null === (WQ = QQ.name) || void 0 === WQ ? void 0 : WQ[0])
    }

    function eq(QQ) {
      return QQ.filter((QQ => !kq.has(QQ.key)))
    }

    function nq(QQ) {
      return QQ.key.startsWith("stepCraft")
    }

    function xq(QQ, WQ) {
      const XQ = new Set,
        wQ = QQ.side ? [...QQ.rows, QQ.side.row] : QQ.rows;
      for (const TQ of wQ)
        if (!TQ.done) {
          !TQ.item || WQ && !nq(TQ) || XQ.add(TQ.item);
          for (const [QQ, WQ, wQ] of null !== (qQ = TQ.chips) && void 0 !== qQ ? qQ : []) {
            var qQ;
            WQ < wQ && XQ.add(QQ)
          }
        } return XQ
    }

    function Yq(QQ) {
      const WQ = QQ.findIndex((QQ => !QQ.done && !QQ.away));
      return WQ >= 0 ? WQ : QQ.findIndex((QQ => !QQ.done))
    }

    function Nq(QQ, WQ) {
      let [XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ] = QQ;
      return {
        id: WQ,
        key: XQ,
        params: wQ,
        item: qQ,
        amount: TQ,
        total: zQ,
        done: sQ,
        chips: null !== FQ && void 0 !== FQ ? FQ : null,
        current: !1,
        away: !0 === PQ,
        madeFor: null !== gQ && void 0 !== gQ ? gQ : [],
        also: null !== JQ && void 0 !== JQ ? JQ : [],
        justFinished: !1
      }
    }
    const Zq = "baf2QuestItems",
      Oq = new Set;
    let Kq = new Set,
      mq = null;

    function Mq(QQ) {
      const WQ = RQ(QQ.tutorial),
        XQ = WQ ? xq(QQ, !0) : Oq;
      "inventory" === Gq.b.get("openInGameMenuName") ? (mq = null, (0, Cq.s)(XQ)) : mq = XQ;
      const wQ = WQ ? xq(QQ, !1) : Oq;
      (0, Rq.d)(wQ, Kq) || (Kq = wQ, Eq.k.mB(Zq, Kq))
    }

    function QT() {
      return (0, Aq.e)(Zq, (() => Kq))
    }
    var WT = XQ(34529),
      XT = XQ(3555);

    function wT(QQ) {
      const WQ = (0, XT.c)(QQ),
        XQ = void 0 === WQ ? void 0 : (0, WT.displayNameOf)(WQ);
      return "object" === typeof XQ && null !== XQ && "translationKey" in XQ && "string" === typeof XQ.translationKey ? XQ.translationKey : `item:${(0,EQ.ne)(QQ)}`
    }

    function qT(QQ, WQ) {
      return QQ(wT(WQ))
    }
    const TT = [{
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

    function zT(QQ, WQ) {
      return [`Deposit Seed (${QQ})`, {
        item: zX[`${QQ} Deposit`],
        amount: WQ
      }]
    }
    const sT = Object.fromEntries([zT("Coal", 8), zT("Iron", 8), zT("Copper", 8), zT("Gold", 6), zT("Voltite", 4), zT("Uranium", 4)]),
      FT = "Relay Coil",
      PT = new Map;

    function gT(QQ) {
      let WQ = PT.get(QQ);
      if (!WQ) {
        const XQ = Math.max(1, QQ);
        WQ = TT.filter((QQ => {
          var WQ;
          return XQ >= QQ.fromTier && XQ <= (null !== (WQ = QQ.untilTier) && void 0 !== WQ ? WQ : 1 / 0)
        })).map((QQ => QQ.later && XQ >= QQ.later.tier ? {
          ...QQ,
          weight: QQ.later.weight
        } : QQ)), PT.set(QQ, WQ)
      }
      return WQ
    }

    function JT(QQ) {
      return gT(QQ).some((QQ => {
        let {
          item: WQ
        } = QQ;
        return WQ === FT
      }))
    }

    function rT(QQ) {
      return QQ.startsWith("Deposit Seed (")
    }

    function IT(QQ, WQ) {
      const XQ = gT(QQ);
      return WQ ? XQ.filter((QQ => WQ(QQ.item))) : XQ
    }

    function jT(QQ) {
      return QQ.reduce(((QQ, WQ) => QQ + WQ.weight), 0)
    }

    function BT(QQ, WQ) {
      const XQ = IT(QQ, WQ),
        wQ = jT(XQ);
      return XQ.map((QQ => ({
        find: QQ,
        chance: QQ.weight / wQ
      })))
    }
    const yT = 6e4,
      VT = new Intl.NumberFormat("en-US");

    function DT(QQ, WQ) {
      const XQ = QQ >= 10 ? Math.round(QQ) : Math.round(10 * QQ) / 10;
      return 0 === XQ ? "0" : `${WQ}${VT.format(XQ)}`
    }

    function pT(QQ) {
      return QQ < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? VT.format(QQ) : QQ < 1e6 ? `${QQ<1e5?Math.floor(QQ/100)/10:Math.floor(QQ/1e3)}k` : Math.floor(QQ / 1e5) / 10 + "M"
    }

    function GT(QQ) {
      return QQ < 0 ? "\u2212" + -QQ : String(QQ)
    }

    function UT(QQ, WQ) {
      const XQ = Math.max(1, Math.round(WQ));
      if (XQ < 60) return QQ("buildAFactory2Game:durationSeconds", {
        seconds: String(XQ)
      });
      const wQ = Math.round(XQ / 60);
      if (wQ < 60) return QQ("buildAFactory2Game:durationMinutes", {
        minutes: String(wQ)
      });
      const qQ = String(Math.floor(wQ / 60));
      return wQ % 60 === 0 ? QQ("buildAFactory2Game:durationWholeHours", {
        hours: qQ
      }) : QQ("buildAFactory2Game:durationHours", {
        hours: qQ,
        minutes: String(wQ % 60)
      })
    }
    var bT = XQ(2578);
    const vT = "(max-height: 420px), (max-width: 650px)";

    function dT() {
      return (0, bT.d)(vT)
    }
    var HT = XQ(1145);

    function aT(QQ, WQ) {
      return null !== QQ && QQ > WQ + 1
    }

    function lT(QQ) {
      const WQ = 100 * QQ;
      return String(WQ <= 0 || WQ >= 1 ? Math.round(WQ) : Math.max(.1, Math.round(10 * WQ) / 10))
    }

    function hT(QQ) {
      let {
        item: WQ,
        amount: XQ
      } = QQ;
      return (0, HT.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, HT.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, HT.jsx)(iq.d, {
            itemName: WQ,
            amount: 0
          })
        }), XQ > 1 && (0, HT.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", XQ]
        })]
      })
    }

    function iT(QQ) {
      let {
        label: WQ,
        names: XQ
      } = QQ;
      const [qQ, TQ] = (0, wQ.useState)(!1), zQ = XQ.join(" / ");
      return (0, HT.jsxs)(HT.Fragment, {
        children: [(0, HT.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: zQ,
          "aria-expanded": qQ,
          onClick: () => {
            TQ(!qQ)
          },
          children: WQ
        }), qQ && (0, HT.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: zQ
        })]
      })
    }

    function cT(QQ) {
      let {
        tier: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)(), {
        key: wQ,
        params: qQ
      } = IQ(WQ, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), TQ = XQ(`buildAFactory2Game:${wQ}`, qQ);
      return (0, HT.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, HT.jsx)(hq.d, {
          name: "lock"
        }), TQ]
      })
    }
    const AT = (0, wQ.createContext)(null);

    function RT() {
      const {
        t: QQ
      } = (0, lq.C)(), WQ = (0, wQ.useContext)(AT);
      return (0, wQ.useEffect)((() => null === WQ || void 0 === WQ ? void 0 : WQ()), [WQ]), (0, HT.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: QQ("buildAFactory2Game:recipeForQuest"),
        "aria-label": QQ("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function ET(QQ) {
      let {
        title: WQ,
        count: XQ,
        children: qQ,
        startOpen: TQ = !0
      } = QQ;
      const {
        t: zQ
      } = (0, lq.C)(), [sQ, FQ] = (0, wQ.useState)((() => TQ && !dT())), [PQ, gQ] = (0, wQ.useState)(0), JQ = (0, wQ.useCallback)((() => (gQ((QQ => QQ + 1)), () => {
        gQ((QQ => QQ - 1))
      })), []);
      return (0, HT.jsxs)("div", {
        className: vq()("Baf2Recipes", {
          Open: sQ
        }),
        children: [(0, HT.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            FQ(!sQ)
          },
          "aria-expanded": sQ,
          children: [zQ("buildAFactory2Game:recipesToggle", {
            title: WQ,
            count: String(XQ)
          }), (0, HT.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: sQ ? "\u25be" : "\u25b8"
          })]
        }), sQ && (0, HT.jsxs)(AT.Provider, {
          value: JQ,
          children: [(0, HT.jsx)("ul", {
            className: "Baf2RecipeList",
            children: qQ
          }), PQ > 0 && (0, HT.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, HT.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), zQ("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const CT = "buildAFactory2Game:",
      uT = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const LT = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      kT = {
        "Uranium Grit": TQ,
        "Raw Uranium": TQ
      };

    function fT(QQ) {
      var WQ;
      return null !== (WQ = kT[QQ]) && void 0 !== WQ ? WQ : Math.max(OQ(QQ), LT[QQ] ? OQ(LT[QQ]) : 1, function(QQ) {
        const WQ = qQ.findIndex((WQ => WQ.cost.some((WQ => WQ.item === QQ))));
        return WQ > TQ ? WQ : 1
      }(QQ))
    }

    function ST(QQ, WQ) {
      return tT(WQ) ? fT(WQ) : function(QQ) {
        if (uT.has(QQ)) return 1;
        const WQ = qQ.findIndex((WQ => WQ.newDeposits.some((WQ => {
          let {
            block: XQ
          } = WQ;
          return XQ === QQ
        }))));
        return WQ < 0 ? 1 : WQ + 1
      }(QQ)
    }

    function tT(QQ) {
      return QQ in kT || JQ(fT(QQ)) > 0
    }

    function oT(QQ, WQ) {
      return KW(QQ, {
        coupled: !1,
        taught: null,
        atomic: sQ() && WQ >= 11
      }).recipes
    }

    function eT(QQ, WQ) {
      const XQ = rQ(QQ, WQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JQ(QQ) > 0);
      return "open" === XQ || "locked" === XQ
    }

    function nT(QQ, WQ) {
      return QQ.map(((QQ, XQ) => ({
        value: QQ,
        idx: XQ,
        tier: WQ(QQ)
      }))).sort(((QQ, WQ) => QQ.tier - WQ.tier || QQ.idx - WQ.idx)).map((QQ => {
        let {
          value: WQ
        } = QQ;
        return WQ
      }))
    }

    function xT(QQ, WQ, XQ) {
      const wQ = rQ(QQ, WQ);
      if ("hidden" === wQ || "open" === wQ) return null;
      if ("teaser" === wQ) return {
        tag: {
          translationKey: `${CT}${XQ?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${CT}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const qQ = IQ(QQ, {
          tier: XQ ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        TQ = IQ(QQ, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${CT}${qQ.key}`,
          params: qQ.params
        },
        reason: {
          translationKey: `${CT}${TQ.key}`,
          params: TQ.params
        }
      }
    }

    function YT(QQ) {
      return !rT(QQ)
    }

    function NT(QQ) {
      let {
        seconds: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)();
      return (0, HT.jsx)(ET, {
        title: XQ("buildAFactory2Game:recipesCuts", {
          seconds: WQ
        }),
        count: 1,
        children: (0, HT.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, HT.jsx)(hT, {
            item: "Maple Sapling",
            amount: 1
          }), (0, HT.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, HT.jsx)(hT, {
            item: "Maple Log",
            amount: 1
          }), (0, HT.jsx)("span", {
            className: "Baf2RecipeName",
            children: XQ("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function ZT(QQ) {
      let {
        fertilised: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)();
      return (0, HT.jsxs)(ET, {
        title: XQ("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, HT.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, HT.jsx)(hT, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, HT.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, HT.jsx)(hT, {
            item: "Wheat",
            amount: 1
          }), (0, HT.jsx)(hT, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, HT.jsx)("span", {
            className: "Baf2RecipeName",
            children: XQ("buildAFactory2Game:recipeField")
          })]
        }), (0, HT.jsxs)("li", {
          className: vq()("Baf2Recipe", {
            InUse: WQ
          }),
          children: [(0, HT.jsx)(hT, {
            item: "Fertiliser",
            amount: 1
          }), (0, HT.jsx)("span", {
            className: "Baf2RecipeName",
            children: XQ("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function OT(QQ) {
      let {
        tier: WQ,
        seconds: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, lq.C)(), qQ = function(QQ) {
        return QQ >= 5 ? bW : UW
      }(WQ);
      return (0, HT.jsx)(ET, {
        title: wQ("buildAFactory2Game:recipesBringsUp", {
          seconds: XQ
        }),
        count: qQ.length,
        children: qQ.map((QQ => {
          let {
            item: WQ,
            chance: XQ
          } = QQ;
          return (0, HT.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, HT.jsx)(hT, {
              item: WQ,
              amount: 1
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeName",
              children: qT(wQ, WQ)
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: wQ("buildAFactory2Game:recipeChance", {
                percent: lT(XQ)
              })
            })]
          }, WQ)
        }))
      })
    }

    function KT(QQ) {
      let {
        tier: WQ,
        seconds: XQ,
        noSeeds: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)(), TQ = QT(), zQ = BT(WQ, wQ ? YT : void 0), sQ = wQ && BT(WQ).length > zQ.length, FQ = JT(WQ);
      return (0, HT.jsxs)(ET, {
        title: qQ("buildAFactory2Game:recipesRecycles", {
          seconds: XQ
        }),
        count: zQ.length,
        children: [zQ.map((QQ => {
          let {
            find: WQ,
            chance: XQ
          } = QQ;
          return (0, HT.jsxs)("li", {
            className: "Baf2Recipe",
            children: [TQ.has(WQ.item) && (0, HT.jsx)(RT, {}), (0, HT.jsx)(hT, {
              item: WQ.item,
              amount: WQ.amount
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeName",
              children: qT(qQ, WQ.item)
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: qQ("buildAFactory2Game:recipeChance", {
                percent: lT(XQ)
              })
            })]
          }, WQ.item)
        })), sQ && (0, HT.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, HT.jsx)("span", {
            className: "Baf2RecipeName",
            children: qQ("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), FQ && (0, HT.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, HT.jsx)("span", {
            className: "Baf2RecipeName",
            children: qQ("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function mT(QQ) {
      let {
        tier: WQ,
        seconds: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, lq.C)(), qQ = Object.entries(sT).filter((QQ => {
        let [, {
          item: XQ
        }] = QQ;
        return eT(fT(XQ), WQ, tT(XQ))
      }));
      return (0, HT.jsx)(ET, {
        title: wQ("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: XQ
        }),
        count: qQ.length,
        children: qQ.map((QQ => {
          let [WQ, {
            item: XQ,
            amount: qQ
          }] = QQ;
          return (0, HT.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, HT.jsx)(hT, {
              item: WQ,
              amount: 1
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, HT.jsx)(hT, {
              item: XQ,
              amount: qQ
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeName",
              children: qT(wQ, XQ)
            })]
          }, WQ)
        }))
      })
    }

    function MT(QQ) {
      let {
        tier: WQ,
        seconds: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, lq.C)(), qQ = QT(), TQ = nT(Object.entries(zX).filter((QQ => {
        let [XQ, wQ] = QQ;
        return eT(ST(XQ, wQ), WQ, tT(wQ))
      })), (QQ => {
        let [WQ, XQ] = QQ;
        return ST(WQ, XQ)
      }));
      return (0, HT.jsx)(ET, {
        title: wQ("buildAFactory2Game:recipesDigs", {
          seconds: XQ
        }),
        count: TQ.length,
        children: TQ.map((QQ => {
          let [XQ, TQ] = QQ;
          const zQ = ST(XQ, TQ),
            sQ = zQ > WQ ? zQ : null,
            FQ = sX[XQ],
            PQ = null === sQ && qQ.has(TQ);
          return (0, HT.jsxs)("li", {
            className: vq()("Baf2Recipe", {
              Locked: null !== sQ,
              Far: aT(sQ, WQ)
            }),
            children: [PQ && (0, HT.jsx)(RT, {}), (0, HT.jsx)(hT, {
              item: XQ,
              amount: 1
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, HT.jsx)(hT, {
              item: TQ,
              amount: 1
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeName",
              children: qT(wQ, TQ)
            }), void 0 !== FQ && (0, HT.jsx)("span", {
              className: "Baf2RecipeMore",
              children: wQ("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / FQ)
              })
            }), null !== sQ && (0, HT.jsx)(cT, {
              tier: sQ
            })]
          }, XQ)
        }))
      })
    }

    function Qz(QQ) {
      var WQ;
      let {
        def: XQ,
        seconds: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)();
      return (0, HT.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, HT.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (WQ = XQ.fuels) && void 0 !== WQ ? WQ : []).map((QQ => (0, HT.jsx)(hT, {
            item: QQ,
            amount: 1
          }, QQ))), (0, HT.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, HT.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, HT.jsx)(hq.d, {
              name: "bolt"
            }), qQ("buildAFactory2Game:recipePower", {
              power: KQ(XQ.powerMade),
              seconds: wQ
            })]
          })]
        })
      })
    }

    function Wz(QQ) {
      let {
        def: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)();
      return (0, HT.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, HT.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, HT.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, HT.jsx)(hq.d, {
              name: "bolt"
            }), XQ("buildAFactory2Game:recipeMixer", {
              cryo: DT((0, mQ.B)(WQ, WQ.cryoMade), "")
            })]
          })
        })
      })
    }

    function Xz(QQ) {
      let {
        def: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)();
      return (0, HT.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, HT.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, HT.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, HT.jsx)(hq.d, {
              name: "bolt"
            }), XQ("buildAFactory2Game:recipeCondenser", {
              power: DT((0, mQ.B)(WQ, WQ.powerPerOp), ""),
              water: DT((0, mQ.B)(WQ, WQ.fluidMade), "")
            })]
          })
        })
      })
    }

    function wz(QQ) {
      let {
        kind: WQ,
        def: XQ,
        input: wQ,
        tier: qQ,
        noSeeds: TQ = !1
      } = QQ;
      const zQ = String(XQ.opMs / 1e3);
      return XX(XQ) ? (0, HT.jsx)(NT, {
        seconds: zQ
      }) : XQ.field ? (0, HT.jsx)(ZT, {
        fertilised: null !== wQ
      }) : XQ.table ? (0, HT.jsx)(OT, {
        tier: qQ,
        seconds: zQ
      }) : XQ.recycles ? (0, HT.jsxs)(HT.Fragment, {
        children: [(0, HT.jsx)(KT, {
          tier: qQ,
          seconds: zQ,
          noSeeds: TQ
        }), (0, HT.jsx)(mT, {
          tier: qQ,
          seconds: zQ
        })]
      }) : WX(XQ) ? (0, HT.jsx)(MT, {
        tier: qQ,
        seconds: zQ
      }) : void 0 !== XQ.fluidMade ? (0, HT.jsx)(Xz, {
        def: XQ
      }) : void 0 !== XQ.cryoMade ? (0, HT.jsx)(Wz, {
        def: XQ
      }) : void 0 !== XQ.powerMade ? (0, HT.jsx)(Qz, {
        def: XQ,
        seconds: zQ
      }) : (0, HT.jsx)(qz, {
        kind: WQ,
        input: wQ,
        tier: qQ,
        seconds: zQ
      })
    }

    function qz(QQ) {
      let {
        kind: WQ,
        input: XQ,
        tier: wQ,
        seconds: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, lq.C)(), zQ = QT(), sQ = nT(function(QQ) {
        const WQ = new Map;
        for (const qQ of QQ) {
          var XQ, wQ;
          const QQ = [qQ.output, qQ.outputAmount, qQ.inputAmount, null === (XQ = qQ.bonus) || void 0 === XQ ? void 0 : XQ.item, null === (wQ = qQ.bonus) || void 0 === wQ ? void 0 : wQ.chance].join("|"),
            TQ = WQ.get(QQ);
          TQ ? TQ.inputs.push(qQ.input) : WQ.set(QQ, {
            inputs: [qQ.input],
            inputAmount: qQ.inputAmount,
            output: qQ.output,
            outputAmount: qQ.outputAmount,
            bonus: qQ.bonus
          })
        }
        return [...WQ.values()]
      }(oT(WQ, wQ).filter(gX)), (QQ => fT(QQ.output))).filter((QQ => eT(fT(QQ.output), wQ, tT(QQ.output))));
      return (0, HT.jsx)(ET, {
        title: TQ("buildAFactory2Game:recipesEach", {
          seconds: qQ
        }),
        count: sQ.length,
        children: sQ.map((QQ => {
          const WQ = null !== XQ && QQ.inputs.includes(XQ),
            qQ = QQ.inputs.length > 3 ? [WQ ? XQ : QQ.inputs[0]] : QQ.inputs,
            sQ = fT(QQ.output) > wQ ? fT(QQ.output) : null,
            FQ = null === sQ && zQ.has(QQ.output);
          return (0, HT.jsxs)("li", {
            className: vq()("Baf2Recipe", {
              InUse: WQ,
              Locked: null !== sQ,
              Far: aT(sQ, wQ)
            }),
            children: [FQ && (0, HT.jsx)(RT, {}), qQ.map(((WQ, XQ) => (0, HT.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [XQ > 0 && (0, HT.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, HT.jsx)(hT, {
                item: WQ,
                amount: QQ.inputAmount
              })]
            }, WQ))), qQ.length < QQ.inputs.length && (0, HT.jsx)(iT, {
              label: TQ("buildAFactory2Game:recipeMore", {
                count: String(QQ.inputs.length - qQ.length)
              }),
              names: QQ.inputs.filter((QQ => !qQ.includes(QQ))).map((QQ => qT(TQ, QQ)))
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, HT.jsx)(hT, {
              item: QQ.output,
              amount: QQ.outputAmount
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeName",
              children: qT(TQ, QQ.output)
            }), QQ.bonus && (0, HT.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [TQ("buildAFactory2Game:recipeBonus", {
                percent: lT(QQ.bonus.chance)
              }), (0, HT.jsx)(hT, {
                item: QQ.bonus.item,
                amount: 1
              })]
            }), null !== sQ && (0, HT.jsx)(cT, {
              tier: sQ
            })]
          }, `${QQ.output}|${QQ.inputs[0]}`)
        }))
      })
    }

    function Tz(QQ) {
      let {
        taught: WQ,
        tier: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, lq.C)(), qQ = QT(), TQ = nT(Object.values(ZW), (QQ => QQ.tier)).filter((QQ => eT(QQ.tier, XQ)));
      return (0, HT.jsx)(ET, {
        title: wQ("buildAFactory2Game:benchCanMake"),
        count: TQ.length,
        startOpen: !1,
        children: TQ.map((QQ => {
          const TQ = QQ.tier > XQ,
            zQ = !TQ && qQ.has(QQ.output);
          return (0, HT.jsxs)("li", {
            className: vq()("Baf2Recipe", {
              InUse: QQ.output === WQ,
              Locked: TQ,
              Far: aT(TQ ? QQ.tier : null, XQ)
            }),
            children: [zQ && (0, HT.jsx)(RT, {}), (0, HT.jsx)(hT, {
              item: QQ.output,
              amount: QQ.outputAmount
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeName",
              children: qT(wQ, QQ.output)
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), QQ.inputs.map((QQ => (0, HT.jsx)(hT, {
              item: QQ.item,
              amount: QQ.amount
            }, QQ.item))), TQ && (0, HT.jsx)(cT, {
              tier: QQ.tier
            })]
          }, QQ.output)
        }))
      })
    }
    var zz, sz, Fz, Pz, gz;
    const Jz = EW.Generator,
      rz = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      Iz = 1e3 * (null !== (zz = Jz.powerMade) && void 0 !== zz ? zz : 0) / Jz.opMs,
      jz = Math.min(...(null !== (sz = Jz.fuels) && void 0 !== sz ? sz : []).map((QQ => TX[QQ]))) / 1e3,
      Bz = EW["Volt Engine"],
      yz = 1e3 * (null !== (Fz = Bz.powerMade) && void 0 !== Fz ? Fz : 0) / Bz.opMs,
      Vz = TX[null !== (Pz = null === (gz = Bz.fuels) || void 0 === gz ? void 0 : gz[0]) && void 0 !== Pz ? Pz : ""] / 1e3;

    function Dz(QQ) {
      let {
        item: WQ,
        label: XQ,
        value: wQ,
        note: qQ,
        dim: TQ
      } = QQ;
      return (0, HT.jsxs)("li", {
        className: vq()("Baf2PowerRow", {
          Dim: TQ
        }),
        children: [(0, HT.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, HT.jsx)(iq.d, {
            itemName: WQ,
            amount: 0
          })
        }), (0, HT.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, HT.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: XQ
          }), qQ && (0, HT.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: qQ
          })]
        }), (0, HT.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: wQ
        })]
      })
    }

    function pz(QQ, WQ, XQ, wQ) {
      var qQ;
      const TQ = void 0 === wQ ? EW[QQ] : function(QQ, WQ) {
          if (null === WQ) return QQ;
          let XQ = YQ.get(WQ);
          return XQ || (XQ = {
            ...QQ,
            powerPerOp: xQ(QQ, WQ),
            farmMob: WQ
          }, YQ.set(WQ, XQ)), XQ
        }(EW[QQ], wQ),
        zQ = WQ && TQ.couplable ? oW(TQ, XQ) : TQ;
      return 1e3 * (null !== (qQ = zQ.powerPerOp) && void 0 !== qQ ? qQ : 0) / zQ.opMs
    }

    function Gz(QQ) {
      var WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ;
      let {
        message: PQ
      } = QQ;
      const {
        t: gQ
      } = (0, lq.C)(), JQ = (QQ, WQ) => gQ("buildAFactory2Game:powerPerSecond", {
        rate: DT(QQ, WQ)
      }), [rQ, IQ] = PQ.baf2PowerGenerators, jQ = PQ.baf2PowerGeneratorFuel, BQ = PQ.baf2PowerSunPanels, yQ = null !== (WQ = PQ.baf2PowerSunShare) && void 0 !== WQ ? WQ : 1, VQ = PQ.baf2PowerVaults, DQ = PQ.baf2PowerUsers, [pQ, GQ] = null !== (XQ = PQ.baf2PowerEngines) && void 0 !== XQ ? XQ : [0, 0], UQ = null !== (wQ = PQ.baf2PowerEngineCells) && void 0 !== wQ ? wQ : 0, bQ = null !== (qQ = PQ.baf2PowerPads) && void 0 !== qQ ? qQ : 0, vQ = null !== (TQ = PQ.baf2PowerCharge) && void 0 !== TQ ? TQ : 0, [dQ, HQ] = null !== (zQ = PQ.baf2PowerReactors) && void 0 !== zQ ? zQ : [0, 0], [aQ, lQ] = null !== (sQ = PQ.baf2PowerBatteries) && void 0 !== sQ ? sQ : [0, 0];
      let hQ = gQ("buildAFactory2Game:powerEngineCells", {
        amount: String(UQ)
      });
      UQ > 0 && GQ > 0 && (hQ = gQ("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(UQ),
        time: UT(gQ, UQ * Vz / GQ)
      }));
      let iQ = gQ("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(jQ)
      });
      jQ > 0 && IQ > 0 && (iQ = gQ("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(jQ),
        time: UT(gQ, jQ * jz / IQ)
      }));
      const cQ = rQ + pQ + BQ + dQ;
      return (0, HT.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, HT.jsxs)("section", {
          children: [(0, HT.jsxs)("h3", {
            children: [gQ("buildAFactory2Game:powerMaking"), (0, HT.jsx)("span", {
              children: JQ(PQ.baf2PowerMadePerS, "+")
            })]
          }), (0, HT.jsxs)("ul", {
            children: [0 === cQ && (0, HT.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: gQ("buildAFactory2Game:powerNoMakers")
            }), rQ > 0 && (0, HT.jsx)(Dz, {
              item: "Generator",
              label: `${qT(gQ,"Generator")} \xd7${rQ}`,
              note: `${gQ("buildAFactory2Game:powerRunning",{amount:String(IQ)})} \xb7 ${iQ}`,
              value: JQ(IQ * Iz, "+"),
              dim: 0 === IQ
            }), pQ > 0 && (0, HT.jsx)(Dz, {
              item: "Volt Engine",
              label: `${qT(gQ,"Volt Engine")} \xd7${pQ}`,
              note: `${gQ("buildAFactory2Game:powerRunning",{amount:String(GQ)})} \xb7 ${hQ}`,
              value: JQ(GQ * yz, "+"),
              dim: 0 === GQ
            }), BQ > 0 && (0, HT.jsx)(Dz, {
              item: "Solar Panel",
              label: `${qT(gQ,"Solar Panel")} \xd7${BQ}`,
              note: gQ(yQ < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: JQ(4 * BQ * yQ, "+")
            }), dQ > 0 && (0, HT.jsx)(Dz, {
              item: "Reactor Frame",
              label: `${gQ("buildAFactory2Game:powerReactors")} \xd7${dQ}`,
              note: gQ("buildAFactory2Game:powerRunning", {
                amount: String(HQ)
              }),
              value: JQ(null !== (FQ = PQ.baf2PowerReactorPerS) && void 0 !== FQ ? FQ : 0, "+"),
              dim: 0 === HQ
            })]
          })]
        }), (0, HT.jsxs)("section", {
          children: [(0, HT.jsxs)("h3", {
            children: [gQ("buildAFactory2Game:powerStorage"), (0, HT.jsx)("span", {
              children: KQ(PQ.baf2PowerCap)
            })]
          }), (VQ > 0 || aQ > 0) && (0, HT.jsxs)("ul", {
            children: [VQ > 0 && (0, HT.jsx)(Dz, {
              item: "Charge Vault",
              label: `${qT(gQ,"Charge Vault")} \xd7${VQ}`,
              value: `+${KQ(8e3*VQ)}`
            }), aQ > 0 && (0, HT.jsx)(Dz, {
              item: "Battery Cell",
              label: `${gQ("buildAFactory2Game:powerBatteries")} \xd7${aQ}`,
              value: `+${KQ(lQ)}`
            })]
          })]
        }), (0, HT.jsxs)("section", {
          children: [(0, HT.jsxs)("h3", {
            children: [gQ("buildAFactory2Game:powerUsing"), (0, HT.jsx)("span", {
              children: JQ(PQ.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, HT.jsxs)("ul", {
            children: [0 === DQ.length && 0 === bQ && 0 === vQ && (0, HT.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: gQ("buildAFactory2Game:powerNoUsers")
            }), DQ.map((QQ => {
              let [WQ, XQ, wQ, qQ, TQ = 1, zQ] = QQ, sQ = XQ ? gQ(rz[TQ - 1], {
                name: qT(gQ, WQ)
              }) : qT(gQ, WQ);
              return void 0 !== zQ && (sQ = gQ("buildAFactory2Game:powerFarmName", {
                name: sQ,
                mob: gQ(oQ(zQ))
              })), (0, HT.jsx)(Dz, {
                item: WQ,
                label: `${sQ} \xd7${wQ}`,
                note: gQ("buildAFactory2Game:powerRunning", {
                  amount: String(qQ)
                }),
                value: qQ > 0 ? JQ(qQ * pz(WQ, XQ, TQ, zQ), "\u2212") : gQ("buildAFactory2Game:powerIdle"),
                dim: 0 === qQ
              }, `${WQ}|${XQ}|${TQ}|${zQ}`)
            })), bQ > 0 && (0, HT.jsx)(Dz, {
              item: "Charging Pad",
              label: `${qT(gQ,"Charging Pad")} \xd7${bQ}`,
              value: gQ("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), vQ > 0 && (0, HT.jsx)(Dz, {
              item: "Homestead Core",
              label: gQ("buildAFactory2Game:powerCharge"),
              value: JQ(vQ, "\u2212")
            }), PQ.baf2PowerStarved > 0 && (0, HT.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, HT.jsx)(hq.d, {
                name: "triangle-exclamation"
              }), gQ("buildAFactory2Game:powerStarved", {
                amount: String(PQ.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Uz = XQ(4851),
      bz = XQ(1507);
    class vz {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(QQ) {
        this.message = QQ;
        for (const WQ of this.listeners) WQ()
      }
      get() {
        return this.message
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
    }
    class dz extends vz {}

    function Hz(QQ, WQ) {
      const XQ = () => {
          const XQ = QQ.get();
          if (!XQ || !WQ) return XQ;
          const [wQ, qQ, TQ] = XQ.baf2PowerAt;
          return wQ === WQ[0] && qQ === WQ[1] && TQ === WQ[2] ? XQ : null
        },
        [qQ, TQ] = (0, wQ.useState)(XQ);
      return (0, wQ.useEffect)((() => (TQ(XQ()), QQ.subscribe((() => {
        TQ(XQ())
      })))), [QQ, ...null !== WQ && void 0 !== WQ ? WQ : []]), qQ
    }

    function az(QQ) {
      return {
        stored: QQ.baf2PowerStored,
        cap: QQ.baf2PowerCap,
        madePerS: QQ.baf2PowerMadePerS,
        usedPerS: QQ.baf2PowerUsedPerS
      }
    }

    function lz(QQ) {
      let {
        stored: WQ,
        cap: XQ
      } = QQ;
      return (0, HT.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, HT.jsx)("div", {
          style: {
            width: `${Math.min(100,100*WQ/Math.max(1,XQ))}%`
          }
        })
      })
    }

    function hz(QQ) {
      let {
        figures: WQ,
        labelled: XQ = !1
      } = QQ;
      const {
        t: wQ
      } = (0, lq.C)(), qQ = WQ.madePerS - WQ.usedPerS, {
        text: TQ,
        draining: zQ
      } = function(QQ, WQ) {
        let {
          stored: XQ,
          cap: wQ,
          madePerS: qQ,
          usedPerS: TQ
        } = WQ;
        const zQ = qQ - TQ;
        return XQ >= wQ ? {
          text: QQ("buildAFactory2Game:powerFull"),
          draining: !1
        } : zQ > .05 ? {
          text: QQ("buildAFactory2Game:powerFullIn", {
            time: UT(QQ, (wQ - XQ) / zQ)
          }),
          draining: !1
        } : zQ < -.05 ? {
          text: QQ("buildAFactory2Game:powerEmptyIn", {
            time: UT(QQ, XQ / -zQ)
          }),
          draining: !0
        } : {
          text: QQ("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(wQ, WQ);
      return (0, HT.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, HT.jsx)(lz, {
          stored: WQ.stored,
          cap: WQ.cap
        }), (0, HT.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, HT.jsx)("span", {
            children: wQ(XQ ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: KQ(WQ.stored),
              cap: KQ(WQ.cap)
            })
          }), (0, HT.jsxs)("span", {
            className: vq()("Baf2PowerNet", {
              Draining: zQ
            }),
            children: [wQ("buildAFactory2Game:powerPerSecond", {
              rate: DT(Math.abs(qQ), qQ < 0 ? "\u2212" : "+")
            }), " \xb7 ", TQ]
          })]
        })]
      })
    }

    function iz(QQ) {
      let {
        stored: WQ,
        cap: XQ,
        rates: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)();
      return wQ ? (0, HT.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, HT.jsx)(hz, {
          figures: {
            stored: WQ,
            cap: XQ,
            madePerS: wQ[0],
            usedPerS: wQ[1]
          },
          labelled: !0
        })
      }) : (0, HT.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, HT.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, HT.jsx)(lz, {
            stored: WQ,
            cap: XQ
          }), (0, HT.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, HT.jsx)("span", {
              children: qQ("buildAFactory2Game:powerStoredLabelled", {
                stored: KQ(WQ),
                cap: KQ(XQ)
              })
            })
          })]
        })
      })
    }

    function cz(QQ) {
      let {
        store: WQ,
        close: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, lq.C)(), qQ = Hz(WQ);
      return (0, HT.jsx)(Uz.b, {
        close: XQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, HT.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, HT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, HT.jsxs)("div", {
              children: [(0, HT.jsx)("h2", {
                id: "baf2PowerTitle",
                children: wQ("buildAFactory2Game:powerTitle")
              }), (0, HT.jsx)("p", {
                children: wQ("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, HT.jsx)(bz.o, {
              onClick: XQ
            })]
          }), qQ && (0, HT.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, HT.jsx)(hz, {
              figures: az(qQ)
            }), (0, HT.jsx)(Gz, {
              message: qQ
            })]
          })]
        })
      })
    }

    function Az(QQ) {
      var WQ;
      let {
        kind: XQ,
        def: qQ,
        Sq: TQ,
        power: zQ,
        stored: sQ,
        cap: FQ
      } = QQ;
      const {
        t: PQ
      } = (0, lq.C)(), gQ = Hz(zQ, TQ), [JQ, rQ] = (0, wQ.useState)(!1);
      return (0, HT.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, HT.jsx)(wz, {
          kind: XQ,
          def: qQ,
          input: null,
          tier: null !== (WQ = null === gQ || void 0 === gQ ? void 0 : gQ.baf2PowerTier) && void 0 !== WQ ? WQ : 1
        }), (0, HT.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: PQ("buildAFactory2Game:powerTitle")
        }), gQ && (0, HT.jsx)(hz, {
          figures: az(gQ)
        }), !gQ && (0, HT.jsx)(iz, {
          stored: sQ,
          cap: FQ,
          rates: null
        }), gQ && (0, HT.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            rQ(!JQ)
          },
          "aria-expanded": JQ,
          children: PQ(JQ ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), gQ && JQ && (0, HT.jsx)(Gz, {
          message: gQ
        })]
      })
    }
    const Rz = 2500,
      Ez = 17500,
      Cz = `${UQ} `;
    const uz = ["plan", "throttle"];

    function Lz(QQ) {
      if (QQ.startsWith(`${aW} `)) return QQ.slice(0, QQ.lastIndexOf(" "));
      const WQ = QQ.split(" ");
      return WQ[0] === gW && uz.includes(WQ[4]) ? WQ.slice(0, 5).join(" ") : null
    }
    class kz {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = QQ, this.now = WQ, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.nqQ = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = WQ()
      }
      enqueue(QQ) {
        this.queue(QQ, this.nextTicket());
        const WQ = this.nqQ + this.pending.length;
        return this.flush(), WQ
      }
      track(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const XQ = this.nextTicket();
        if (!WQ.urgent) return this.queue(QQ, XQ), this.flush(), XQ;
        const {
          supersedes: wQ
        } = WQ;
        for (let TQ = this.pending.length - 1; TQ >= this.urgent; TQ--) {
          const WQ = this.pending[TQ];
          (WQ.command === QQ || null !== wQ && void 0 !== wQ && wQ(WQ.command)) && (this.pending.splice(TQ, 1), this.markLeft(WQ.tickets))
        }
        const qQ = this.pending.findIndex((WQ => {
          let {
            command: XQ
          } = WQ;
          return XQ === QQ
        }));
        return -1 !== qQ ? this.pending[qQ].tickets.push(XQ) : (this.pending.splice(this.urgent, 0, {
          command: QQ,
          tickets: [XQ]
        }), this.urgent += 1), this.flush(), XQ
      }
      leftAt(QQ) {
        const WQ = this.leftTimes.get(QQ);
        return void 0 !== WQ ? WQ : this.pending.some((WQ => {
          let {
            tickets: XQ
          } = WQ;
          return XQ.includes(QQ)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let QQ = !0;
        return () => {
          QQ && (QQ = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(QQ) {
        var WQ;
        return (null === (WQ = this.pending.at(-1)) || void 0 === WQ ? void 0 : WQ.command) === QQ
      }
      sent() {
        return this.nqQ
      }
      clear() {
        for (const {
            tickets: QQ
          }
          of this.pending) this.markLeft(QQ);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(QQ) {
        const WQ = this.now();
        for (const XQ of QQ) this.leftTimes.set(XQ, WQ);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(QQ, WQ) {
        const XQ = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === XQ || void 0 === XQ ? void 0 : XQ.command) === QQ) return void(! function(QQ) {
          return QQ === bQ || QQ.startsWith(`${GQ} `) || QQ.startsWith(`${fQ} `)
        }(QQ) ? XQ.tickets.push(WQ) : (this.pending.pop(), this.markLeft([...XQ.tickets, WQ])));
        const wQ = void 0 === XQ ? null : PW(XQ.command, QQ);
        if (null !== wQ && void 0 !== XQ) return XQ.command = wQ, void XQ.tickets.push(WQ);
        const qQ = Lz(QQ);
        if (null !== qQ && void 0 !== XQ && Lz(XQ.command) === qQ) return XQ.command = QQ, void XQ.tickets.push(WQ);
        if (null !== XQ && void 0 !== XQ && XQ.command.startsWith(Cz) && QQ.startsWith(Cz)) {
          const wQ = QQ.slice(Cz.length);
          if (XQ.command.slice(Cz.length).split(",").includes(wQ)) return void XQ.tickets.push(WQ);
          const qQ = `${XQ.command},${wQ}`;
          if (qQ.length <= 119) return XQ.command = qQ, void XQ.tickets.push(WQ)
        }
        this.pending.push({
          command: QQ,
          tickets: [WQ]
        })
      }
      flush() {
        const QQ = this.now();
        for (this.tokens = Math.min(5, this.tokens + (QQ - this.refilledAt) / Rz), this.refilledAt = QQ; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.nqQ += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: QQ,
            tickets: WQ
          } = this.pending.shift();
          this.markLeft(WQ), this.send(QQ)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * Rz)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class fz {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new kz(QQ, WQ)
      }
      send(QQ) {
        return this.queue.enqueue(QQ)
      }
      sent() {
        return this.queue.sent()
      }
      track(QQ, WQ) {
        return this.queue.track(QQ, WQ)
      }
      leftAt(QQ) {
        return this.queue.leftAt(QQ)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(QQ) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = WQ, this.send(QQ), this.islandEdits.count
      }
      syncIslandEdits(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: XQ
        } = this, wQ = WQ - XQ.lastAtMs < Ez;
        XQ.count = wQ ? Math.max(XQ.count, QQ) : QQ
      }
      clear() {
        this.queue.clear()
      }
    }
    const Sz = (0, wQ.createContext)(null);

    function tz() {
      const QQ = (0, wQ.useContext)(Sz);
      if (!QQ) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return QQ
    }

    function oz(QQ, WQ) {
      return null !== WQ && void 0 !== WQ ? WQ : 1 === QQ
    }

    function ez(QQ, WQ) {
      return QQ.every((QQ => {
        var XQ;
        let [wQ, , qQ] = QQ;
        return !oz(qQ, null === (XQ = WQ.get(wQ)) || void 0 === XQ ? void 0 : XQ.HI)
      }))
    }

    function nz(QQ, WQ, XQ) {
      if (0 === QQ.size) return QQ;
      const wQ = new Map(QQ);
      for (const [qQ, TQ] of QQ) {
        const QQ = WQ.find((QQ => {
          let [WQ] = QQ;
          return WQ === qQ
        }));
        (!QQ || TQ.HI === (1 === QQ[2]) || TQ.atMs < XQ) && wQ.delete(qQ)
      }
      return wQ
    }

    function xz(QQ) {
      var WQ;
      let {
        Sq: XQ,
        input: qQ,
        drops: TQ,
        seconds: zQ
      } = QQ;
      const {
        t: sQ
      } = (0, lq.C)(), FQ = tz(), [PQ, gQ] = (0, wQ.useState)(new Map);
      (0, wQ.useEffect)((() => {
        TQ && gQ((QQ => nz(QQ, TQ, Date.now() - Ez)))
      }), [TQ]), (0, wQ.useEffect)((() => {
        const QQ = function(QQ, WQ) {
          let XQ = null;
          for (const {
              atMs: wQ
            }
            of QQ.values()) XQ = null === XQ ? wQ : Math.min(XQ, wQ);
          return null === XQ ? null : XQ + WQ
        }(PQ, Ez);
        if (null === QQ || !TQ) return;
        const WQ = setTimeout((() => {
          gQ((QQ => nz(QQ, TQ, Date.now() - Ez)))
        }), Math.max(0, QQ - Date.now()) + 1);
        return () => {
          clearTimeout(WQ)
        }
      }), [PQ, TQ]);
      const JQ = eQ(qQ),
        rQ = null !== JQ && null !== TQ && ez(TQ, PQ),
        IQ = function(QQ, WQ, XQ) {
          return null === QQ || null === WQ || ez(WQ, XQ) ? 0 : kQ[uQ[QQ]]
        }(JQ, TQ, PQ);
      return (0, HT.jsxs)(ET, {
        title: sQ("buildAFactory2Game:farmDropsTitle", {
          seconds: zQ
        }),
        count: null !== (WQ = null === TQ || void 0 === TQ ? void 0 : TQ.length) && void 0 !== WQ ? WQ : 0,
        children: [IQ > 0 && (0, HT.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: sQ("buildAFactory2Game:farmDropsPower", {
            power: String(IQ)
          })
        }), (null === JQ || !TQ) && (0, HT.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: sQ("buildAFactory2Game:farmDropsEmpty")
        }), rQ && (0, HT.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: sQ("buildAFactory2Game:farmDropsAllVoided")
        }), null !== JQ && (null === TQ || void 0 === TQ ? void 0 : TQ.map((QQ => {
          var WQ;
          let [wQ, qQ, TQ] = QQ;
          const zQ = qQ < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            JQ = oz(TQ, null === (WQ = PQ.get(wQ)) || void 0 === WQ ? void 0 : WQ.HI);
          return (0, HT.jsxs)("li", {
            className: vq()("Baf2Recipe Baf2FarmDrop", {
              Voided: !JQ
            }),
            children: [(0, HT.jsx)(hT, {
              item: wQ,
              amount: 1
            }), (0, HT.jsx)("span", {
              className: "Baf2RecipeName",
              children: qT(sQ, wQ)
            }), (0, HT.jsx)("span", {
              className: "Baf2FarmRate",
              children: sQ(zQ, {
                amount: String(qQ)
              })
            }), (0, HT.jsx)("button", {
              type: "button",
              className: vq()("Baf2FarmToggle SmallTextBold", {
                Kept: JQ
              }),
              "aria-pressed": JQ,
              onClick: () => {
                gQ(new Map(PQ).set(wQ, {
                  HI: !JQ,
                  atMs: Date.now()
                })), FQ.send(function(QQ, WQ, XQ, wQ) {
                  return `${fQ} ${QQ} ${WQ} ${XQ} ${wQ}`
                }(XQ[0], XQ[1], XQ[2], wQ))
              },
              children: sQ(JQ ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, wQ)
        })))]
      })
    }
    var Yz;
    const Nz = String(null !== (Yz = EW.Synthesizer.waterPerOp) && void 0 !== Yz ? Yz : 0);

    function Zz(QQ) {
      let {
        Sq: WQ,
        taught: XQ
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)(), TQ = tz(), [zQ, sQ] = (0, wQ.useState)(null);
      (0, wQ.useEffect)((() => {
        null !== zQ && XQ === zQ && sQ(null)
      }), [zQ, XQ]);
      const FQ = null !== zQ && void 0 !== zQ ? zQ : XQ;
      let PQ = qQ("buildAFactory2Game:synthPick");
      return null !== FQ && (PQ = qQ("buildAFactory2Game:synthGrows", {
        name: qT(qQ, FQ),
        input: qT(qQ, vW),
        water: Nz
      })), (0, HT.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, HT.jsx)("div", {
          className: vq()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === FQ
          }),
          children: PQ
        }), (0, HT.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: dW.map(((QQ, XQ) => {
            const wQ = qT(qQ, QQ),
              zQ = QQ === FQ;
            return (0, HT.jsx)("li", {
              children: (0, HT.jsx)("button", {
                type: "button",
                className: vq()("Baf2SynthTile", {
                  Selected: zQ
                }),
                title: wQ,
                "aria-label": wQ,
                "aria-pressed": zQ,
                onClick: () => {
                  zQ || (sQ(QQ), TQ.send(`${aW} ${WQ[0]} ${WQ[1]} ${WQ[2]} ${XQ}`))
                },
                children: (0, HT.jsx)(iq.d, {
                  itemName: QQ,
                  amount: 0
                })
              })
            }, QQ)
          }))
        })]
      })
    }
    const Oz = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function Kz(QQ) {
      let {
        kind: WQ,
        tier: XQ,
        coupled: wQ,
        level: qQ,
        slot: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, lq.C)(), FQ = OQ(uW);
      if (!wQ && null !== XQ && XQ < FQ) return (0, HT.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, HT.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, HT.jsx)(hq.d, {
            name: "lock"
          })
        }), (0, HT.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: zQ("buildAFactory2Game:upgradeLocked")
        }), (0, HT.jsx)("span", {
          className: "Baf2TierTag",
          children: zQ("buildAFactory2Game:tierTag", {
            tier: String(FQ)
          })
        })]
      });
      const PQ = function(QQ, WQ) {
          if (sQ() && "Crusher" !== QQ && null !== WQ) {
            if (mz(kW, WQ)) return {
              item: kW,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (mz(LW, WQ)) return {
              item: LW,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: uW,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(WQ, XQ),
        gQ = zQ(wQ ? Oz[qQ - 1] : PQ.emptyKey),
        JQ = null !== XQ ? function(QQ, WQ, XQ, wQ) {
          if (!sQ() || !XQ || "Crusher" === QQ || WQ < 10) return null;
          const qQ = OQ(kW);
          if (wQ < 3 && qQ > 1 && (2 === wQ || WQ >= qQ)) return {
            tier: qQ,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const TQ = OQ(LW);
          if (1 === wQ && TQ > 1) return {
            tier: TQ,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(WQ, XQ, wQ, qQ) : null;
      return (0, HT.jsxs)("div", {
        className: vq()("Baf2UpgradeSocket", {
          Fitted: wQ
        }),
        children: [(0, HT.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [wQ && TQ, !wQ && (0, HT.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, HT.jsx)(iq.d, {
              itemName: PQ.item,
              amount: 0
            })
          })]
        }), (0, HT.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, HT.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: zQ("buildAFactory2Game:upgradeTitle")
          }), (0, HT.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: gQ
          }), wQ && qQ >= 2 && "Crusher" === WQ && (0, HT.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: zQ("buildAFactory2Game:couplerCrusherHint")
          }), JQ && null !== XQ && XQ < JQ.tier && (0, HT.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, HT.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, HT.jsx)(hq.d, {
                name: "lock"
              })
            }), zQ(JQ.lockedKey), (0, HT.jsx)("span", {
              className: "Baf2TierTag",
              children: zQ("buildAFactory2Game:tierTag", {
                tier: String(JQ.tier)
              })
            })]
          }), JQ && null !== XQ && XQ >= JQ.tier && (0, HT.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: zQ(JQ.nextKey)
          })]
        })]
      })
    }

    function mz(QQ, WQ) {
      const XQ = OQ(QQ);
      return XQ > 1 && WQ >= XQ
    }
    var Mz = XQ(37311);
    const Qs = (0, mQ.B)(EW.Condenser, EW.Condenser.fluidMade),
      Ws = .05;
    class Xs extends vz {}

    function ws(QQ) {
      return DT(QQ, "")
    }

    function qs(QQ, WQ, XQ) {
      return QQ(WQ ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: XQ
      })
    }

    function Ts(QQ, WQ, XQ, wQ) {
      return XQ <= Ws && wQ <= Ws ? null : wQ <= Ws || XQ <= Ws ? qs(QQ, WQ, wQ <= Ws ? DT(XQ, "+") : DT(wQ, "\u2212")) : QQ(WQ ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: ws(XQ),
        used: ws(wQ)
      })
    }

    function zs(QQ, WQ) {
      return Math.min(100, 100 * QQ / Math.max(1, WQ))
    }

    function ss(QQ) {
      let {
        stored: WQ,
        cap: XQ,
        netPerS: wQ,
        rates: qQ,
        cryo: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, lq.C)(), sQ = function(QQ, WQ, XQ, wQ) {
        return XQ <= 0 ? QQ("buildAFactory2Game:waterNoStorage") : WQ >= XQ ? QQ("buildAFactory2Game:powerFull") : wQ > Ws ? QQ("buildAFactory2Game:powerFullIn", {
          time: UT(QQ, (XQ - WQ) / wQ)
        }) : wQ < -.05 ? WQ <= 0 ? QQ("buildAFactory2Game:waterEmpty") : QQ("buildAFactory2Game:powerEmptyIn", {
          time: UT(QQ, WQ / -wQ)
        }) : QQ("buildAFactory2Game:powerSteady")
      }(zQ, WQ, XQ, wQ), FQ = XQ > 0 && WQ < XQ && Math.abs(wQ) <= Ws, PQ = zQ(TQ ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), gQ = null !== qQ ? `${qQ} \xb7 ${sQ}` : FQ ? PQ : `${PQ} \xb7 ${sQ}`;
      return (0, HT.jsxs)(HT.Fragment, {
        children: [(0, HT.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, HT.jsx)("div", {
            style: {
              width: `${zs(WQ,XQ)}%`
            }
          })
        }), (0, HT.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, HT.jsx)("span", {
            children: XQ > 0 && zQ("buildAFactory2Game:powerStored", {
              stored: (0, mQ.J)(WQ),
              cap: (0, mQ.J)(XQ)
            })
          }), (0, HT.jsx)("span", {
            className: vq()("Baf2WaterNet", {
              Draining: wQ < -.05
            }),
            children: gQ
          })]
        })]
      })
    }

    function Fs(QQ) {
      let {
        water: WQ,
        at: XQ,
        side: wQ = null
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)(), TQ = tz(), [zQ, sQ, FQ] = WQ;
      return (0, HT.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, HT.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, HT.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: qQ(null === wQ ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${wQ}`)
          }), (0, HT.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              TQ.send(`${mQ.x} ${XQ[0]} ${XQ[1]} ${XQ[2]}${"cryoOut"===wQ?" cryo":""}`)
            },
            children: qQ("buildAFactory2Game:waterDetails")
          })]
        }), (0, HT.jsx)(ss, {
          stored: zQ,
          cap: sQ,
          netPerS: FQ,
          rates: qs(qQ, "cryoOut" === wQ, DT(Math.abs(FQ), FQ < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === wQ
        })]
      })
    }

    function Ps(QQ, WQ) {
      var XQ, wQ, qQ;
      const TQ = !0 === WQ.baf2WaterCryo,
        zQ = null !== (XQ = null === (wQ = WQ.baf2WaterMakers.find((QQ => QQ[0] === (TQ ? mQ.d : "Condenser")))) || void 0 === wQ ? void 0 : wQ[1]) && void 0 !== XQ ? XQ : 0,
        sQ = [],
        FQ = (WQ, XQ, wQ) => {
          WQ > 0 && sQ.push(QQ(1 === WQ ? XQ : wQ, {
            count: String(WQ)
          }))
        };
      return TQ ? FQ(zQ, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : FQ(zQ, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), FQ(null !== (qQ = WQ.baf2WaterPipes) && void 0 !== qQ ? qQ : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), FQ(WQ.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), sQ.join(" \xb7 ")
    }

    function gs(QQ, WQ) {
      if (!0 === WQ.baf2WaterCryo) return function(QQ, WQ) {
        const XQ = EW[mQ.d];
        switch (WQ.baf2WaterThis) {
          case "pipe":
            return {
              text: QQ("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: QQ("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: QQ("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: QQ("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: QQ("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: QQ("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: QQ("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var wQ;
            const [qQ, TQ] = null !== (wQ = WQ.baf2WaterThisRates) && void 0 !== wQ ? wQ : [(0, mQ.B)(XQ, XQ.cryoMade), (0, mQ.B)(XQ, XQ.powerPerOp)];
            return !0 === WQ.baf2WaterDriven ? {
              text: QQ("buildAFactory2Game:cryoThisMixerDriven", {
                rate: ws(qQ)
              }),
              bad: !1
            } : {
              text: QQ("buildAFactory2Game:cryoThisMixer", {
                rate: ws(qQ),
                power: ws(TQ)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: QQ("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(QQ, WQ);
      const XQ = !0 === WQ.baf2WaterDriven,
        wQ = EW.Condenser;
      switch (WQ.baf2WaterThis) {
        case "pipe":
          return {
            text: QQ("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: QQ("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: QQ("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: QQ("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: QQ("buildAFactory2Game:waterThisTank", {
              tank: (0, mQ.J)(mQ.o),
              cap: (0, mQ.J)(WQ.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var qQ;
          const [TQ, zQ] = null !== (qQ = WQ.baf2WaterThisRates) && void 0 !== qQ ? qQ : [Qs, (0, mQ.B)(wQ, wQ.powerPerOp)];
          return XQ ? {
            text: QQ("buildAFactory2Game:waterThisCondenserDriven", {
              rate: ws(TQ)
            }),
            bad: !1
          } : {
            text: QQ("buildAFactory2Game:waterThisCondenser", {
              rate: ws(TQ),
              power: ws(zQ)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: QQ("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function rs(QQ, WQ) {
      const XQ = WQ.baf2WaterMakers.some((QQ => !0 === QQ[5]));
      if (!0 === WQ.baf2WaterCryo) {
        const wQ = WQ.baf2WaterUsedPerS - WQ.baf2WaterMadePerS,
          qQ = XQ || wQ <= Ws ? 0 : (0, mQ.A)(wQ);
        return 0 === qQ ? null : qQ > 1 ? QQ("buildAFactory2Game:cryoNextMixers", {
          mixers: String(qQ)
        }) : QQ("buildAFactory2Game:cryoNextOne")
      }
      const wQ = XQ ? null : function(QQ, WQ) {
        const XQ = WQ - QQ;
        return XQ <= Ws ? null : Math.ceil(XQ / Qs)
      }(WQ.baf2WaterMadePerS, WQ.baf2WaterUsedPerS);
      return null === wQ ? null : wQ > 1 ? QQ("buildAFactory2Game:waterNextCondensers", {
        condensers: String(wQ)
      }) : QQ("buildAFactory2Game:waterNextOne")
    }

    function Is(QQ) {
      let {
        item: WQ,
        label: XQ,
        note: wQ,
        value: qQ,
        dim: TQ,
        bad: zQ
      } = QQ;
      return (0, HT.jsxs)("li", {
        className: vq()("Baf2WaterRow", {
          Dim: TQ,
          Bad: zQ
        }),
        children: [(0, HT.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, HT.jsx)(iq.d, {
            itemName: WQ,
            amount: 0
          })
        }), (0, HT.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, HT.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: XQ
          }), wQ && (0, HT.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: wQ
          })]
        }), (0, HT.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: qQ
        })]
      })
    }

    function Bs(QQ) {
      return Mz.l[QQ] ? QQ : "Reactor Port"
    }

    function ys(QQ) {
      let {
        message: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)(), wQ = !0 === WQ.baf2WaterCryo, qQ = (QQ, WQ) => qs(XQ, wQ, DT(QQ, WQ));
      return (0, HT.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, HT.jsxs)("section", {
          children: [(0, HT.jsxs)("h3", {
            children: [XQ("buildAFactory2Game:waterMakes"), (0, HT.jsx)("span", {
              children: qQ(WQ.baf2WaterMadePerS, "+")
            })]
          }), (0, HT.jsxs)("ul", {
            children: [0 === WQ.baf2WaterMakers.length && (0, HT.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: XQ(wQ ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), WQ.baf2WaterMakers.map((QQ => {
              let [WQ, wQ, TQ, zQ, sQ, FQ] = QQ;
              const PQ = XQ("buildAFactory2Game:powerRunning", {
                amount: String(TQ)
              });
              let gQ = sQ > 0 ? XQ("buildAFactory2Game:waterMakerPower", {
                running: PQ,
                power: ws(sQ)
              }) : PQ;
              return FQ && (gQ = XQ(0 === TQ && zQ <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, HT.jsx)(Is, {
                item: WQ,
                label: `${qT(XQ,WQ)} \xd7${wQ}`,
                note: gQ,
                value: TQ > 0 || FQ && zQ > 0 ? qQ(zQ, "+") : XQ("buildAFactory2Game:powerIdle"),
                dim: 0 === TQ && !FQ,
                bad: FQ
              }, WQ)
            }))]
          })]
        }), (0, HT.jsxs)("section", {
          children: [(0, HT.jsxs)("h3", {
            children: [XQ("buildAFactory2Game:waterUses"), (0, HT.jsx)("span", {
              children: qQ(WQ.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, HT.jsxs)("ul", {
            children: [0 === WQ.baf2WaterUsers.length && (0, HT.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: XQ(wQ ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), WQ.baf2WaterUsers.map((QQ => {
              let [WQ, wQ, TQ, zQ] = QQ;
              const sQ = Mz.l[WQ] ? qT(XQ, WQ) : WQ;
              return (0, HT.jsx)(Is, {
                item: Bs(WQ),
                label: wQ > 1 ? `${sQ} \xd7${wQ}` : sQ,
                note: zQ ? XQ("buildAFactory2Game:waterPortFirst") : void 0,
                value: TQ > 0 ? qQ(TQ, "\u2212") : XQ("buildAFactory2Game:powerIdle"),
                dim: 0 === TQ
              }, WQ)
            }))]
          })]
        })]
      })
    }

    function Vs(QQ) {
      var WQ, XQ, qQ, TQ, zQ;
      let {
        store: sQ,
        close: FQ
      } = QQ;
      const {
        t: PQ
      } = (0, lq.C)(), gQ = function(QQ) {
        const [WQ, XQ] = (0, wQ.useState)((() => QQ.get()));
        return (0, wQ.useEffect)((() => (XQ(QQ.get()), QQ.subscribe((() => {
          XQ(QQ.get())
        })))), [QQ]), WQ
      }(sQ), JQ = null !== (WQ = null === gQ || void 0 === gQ ? void 0 : gQ.baf2WaterStored) && void 0 !== WQ ? WQ : 0, rQ = null !== (XQ = null === gQ || void 0 === gQ ? void 0 : gQ.baf2WaterCap) && void 0 !== XQ ? XQ : 0, IQ = null !== (qQ = null === gQ || void 0 === gQ ? void 0 : gQ.baf2WaterMadePerS) && void 0 !== qQ ? qQ : 0, jQ = null !== (TQ = null === gQ || void 0 === gQ ? void 0 : gQ.baf2WaterUsedPerS) && void 0 !== TQ ? TQ : 0, BQ = null !== (zQ = null === gQ || void 0 === gQ ? void 0 : gQ.baf2WaterNetPerS) && void 0 !== zQ ? zQ : IQ - jQ, yQ = gQ && gs(PQ, gQ), VQ = gQ && rs(PQ, gQ), DQ = !0 === (null === gQ || void 0 === gQ ? void 0 : gQ.baf2WaterCryo);
      return (0, HT.jsx)(Uz.b, {
        close: FQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, HT.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, HT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, HT.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== gQ && rQ <= 0 ? (0, HT.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, HT.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, HT.jsx)(iq.d, {
                  itemName: DQ ? jX.g : mQ.k,
                  amount: 0
                })
              }), (0, HT.jsxs)("div", {
                children: [(0, HT.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: PQ(DQ ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), gQ && (0, HT.jsx)("p", {
                  children: Ps(PQ, gQ)
                })]
              })]
            }), (0, HT.jsx)(bz.o, {
              onClick: FQ
            })]
          }), gQ && yQ && (0, HT.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, HT.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, HT.jsx)(ss, {
                stored: JQ,
                cap: rQ,
                netPerS: BQ,
                cryo: DQ,
                rates: Ts(PQ, DQ, IQ, jQ)
              })
            }), (0, HT.jsx)("div", {
              className: vq()("Baf2WaterThis", {
                Bad: yQ.bad
              }),
              children: yQ.text
            }), gQ.baf2WaterDriven && (0, HT.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, HT.jsx)(hq.d, {
                name: "bolt"
              }), PQ(DQ ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), VQ && (0, HT.jsx)("p", {
              className: "Baf2WaterNext",
              children: VQ
            }), (0, HT.jsx)(ys, {
              message: gQ
            })]
          })]
        })
      })
    }
    class Ds {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(QQ, WQ) {
        const XQ = this.get(QQ);
        XQ && null === WQ.opLeftMs && null === WQ.fuelLeftMs && WQ.status === XQ.status ? WQ = {
          ...WQ,
          opLeftMs: XQ.opLeftMs,
          fuelLeftMs: XQ.fuelLeftMs,
          burning: XQ.burning
        } : this.updates++, this.pos = QQ, this.view = WQ;
        for (const wQ of this.listeners) wQ()
      }
      get(QQ) {
        return null !== this.pos && this.pos[0] === QQ[0] && this.pos[1] === QQ[1] && this.pos[2] === QQ[2] ? this.view : null
      }
      forget(QQ) {
        null !== this.get(QQ) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
    }

    function ps(QQ, WQ, XQ, wQ) {
      return "noFuel" === WQ && wQ && !qX(EW[QQ]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === WQ && !0 === (null === XQ || void 0 === XQ ? void 0 : XQ.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === WQ && !0 === (null === XQ || void 0 === XQ ? void 0 : XQ.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === WQ && !0 === (null === XQ || void 0 === XQ ? void 0 : XQ.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === WQ && !0 === (null === XQ || void 0 === XQ ? void 0 : XQ.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Gs(WQ, XQ) ? "buildAFactory2Game:machineStatus_noInputShort" : function(QQ, WQ) {
        const XQ = EW[QQ];
        if ("noFuel" === WQ && void 0 !== XQ.fuels) return qX(XQ) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (XQ.mobFarm && ("noInput" === WQ || "badInput" === WQ)) return `buildAFactory2Game:machineStatus_${WQ}MobFarm`;
        if ("outputFull" === WQ && (void 0 !== XQ.table || XQ.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === WQ && YW(XQ)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== XQ.cryoMade && ("noInput" === WQ || "noOutlet" === WQ || "fluidFull" === WQ)) return `buildAFactory2Game:machineStatus_${WQ}Mixer`;
        return `buildAFactory2Game:machineStatus_${WQ}`
      }(QQ, WQ)
    }

    function Gs(QQ, WQ) {
      return "noInput" === QQ && null !== WQ && void 0 !== WQ && WQ.input && WQ.inputShort ? {
        input: WQ.input,
        short: WQ.inputShort
      } : null
    }

    function Us(QQ) {
      return dq(QQ) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== QQ.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function bs(QQ) {
      const WQ = (0, EQ.ne)(QQ);
      return `Baf2Pane Baf2Pane${WQ.charAt(0).toUpperCase()}${WQ.slice(1)}`
    }

    function vs(QQ, WQ) {
      const [XQ, qQ] = (0, wQ.useState)((() => QQ.get(WQ)));
      return (0, wQ.useEffect)((() => {
        qQ(QQ.get(WQ));
        const XQ = QQ.subscribe((() => {
          qQ(QQ.get(WQ))
        }));
        return () => {
          XQ(), QQ.forget(WQ)
        }
      }), [QQ, ...WQ]), XQ
    }

    function ds(QQ, WQ, XQ, wQ) {
      const qQ = EW[QQ],
        TQ = WQ && qQ.couplable ? oW(qQ, XQ) : qQ,
        zQ = null !== wQ && WX(TQ) ? function(QQ, WQ) {
          var XQ;
          return null !== (XQ = null !== WQ && WX(QQ) ? sX[WQ] : void 0) && void 0 !== XQ ? XQ : QQ.opMs
        }(TQ, FX(wQ)) : TQ.opMs;
      return zQ === TQ.opMs ? TQ : {
        ...TQ,
        opMs: zQ
      }
    }

    function Hs(QQ) {
      let {
        running: WQ,
        opMs: XQ,
        opLeftMs: wQ,
        updateCount: qQ
      } = QQ;
      return (0, HT.jsx)("div", {
        className: vq()("Baf2MachineProgress", {
          Running: WQ
        }),
        children: (0, HT.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: XQ / 1e3 + "s",
            animationDelay: null === wQ ? void 0 : (wQ - XQ) / 1e3 + "s"
          }
        }, qQ)
      })
    }

    function as(QQ) {
      let {
        running: WQ,
        leftMs: XQ,
        periodMs: wQ,
        updateCount: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, lq.C)(), zQ = Math.min(Math.max(null !== XQ && void 0 !== XQ ? XQ : 0, 0), wQ), sQ = WQ && zQ > 0, FQ = TQ("buildAFactory2Game:machineBarFuel");
      return (0, HT.jsx)("div", {
        className: vq()("Baf2FuelBurn", {
          Draining: sQ
        }),
        role: "img",
        title: FQ,
        "aria-label": FQ,
        children: (0, HT.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: sQ ? {
            animationDuration: wQ / 1e3 + "s",
            animationDelay: (zQ - wQ) / 1e3 + "s"
          } : {
            transform: `scaleY(${zQ/wQ})`
          }
        }, qQ)
      })
    }

    function ls(QQ, WQ, XQ) {
      let [wQ, qQ] = XQ;
      const TQ = 1 !== wQ ? aq(WQ) : null;
      return {
        amount: wQ,
        have: qQ,
        item: QQ(TQ || wT(WQ))
      }
    }

    function hs(QQ) {
      return WX(QQ) ? "buildAFactory2Game:machineBarMining" : XX(QQ) ? "buildAFactory2Game:machineBarCutting" : void 0 !== QQ.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function is(QQ) {
      var WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ;
      let {
        kind: GQ,
        Sq: UQ,
        store: bQ,
        power: vQ,
        renderSlot: dQ
      } = QQ;
      const {
        t: HQ
      } = (0, lq.C)(), aQ = vs(bQ, UQ), lQ = EW[GQ], hQ = null !== (WQ = null === aQ || void 0 === aQ ? void 0 : aQ.coupled) && void 0 !== WQ && WQ, iQ = null !== (XQ = null === aQ || void 0 === aQ ? void 0 : aQ.couplerLevel) && void 0 !== XQ ? XQ : 1, cQ = ds(GQ, hQ, iQ, null !== (wQ = null === aQ || void 0 === aQ || null === (qQ = aQ.dug) || void 0 === qQ ? void 0 : qQ.item) && void 0 !== wQ ? wQ : null), AQ = null !== (TQ = null === aQ || void 0 === aQ ? void 0 : aQ.status) && void 0 !== TQ ? TQ : null, RQ = null !== (zQ = null === aQ || void 0 === aQ ? void 0 : aQ.power) && void 0 !== zQ ? zQ : null, EQ = null !== (sQ = null === aQ || void 0 === aQ ? void 0 : aQ.opLeftMs) && void 0 !== sQ ? sQ : null, CQ = null !== (FQ = null === aQ || void 0 === aQ ? void 0 : aQ.dug) && void 0 !== FQ ? FQ : null, uQ = null !== CQ && WX(lQ) ? sX[null !== (PQ = FX(CQ.item)) && void 0 !== PQ ? PQ : ""] : void 0, LQ = void 0 === uQ ? null : 6e4 / uQ, kQ = null !== (gQ = null === aQ || void 0 === aQ ? void 0 : aQ.powerCap) && void 0 !== gQ ? gQ : 4e3, fQ = null !== (JQ = null === aQ || void 0 === aQ ? void 0 : aQ.tier) && void 0 !== JQ ? JQ : null, SQ = void 0 !== cQ.powerMade, tQ = null !== lQ.fuelSlot ? dQ(lQ.fuelSlot) : null, oQ = tW(lQ), eQ = !hQ && !0 === (null === aQ || void 0 === aQ ? void 0 : aQ.fuelFed), xQ = !hQ && !0 === (null === aQ || void 0 === aQ ? void 0 : aQ.fuelFeeds), YQ = null !== lQ.fuelSlot && !hQ, NQ = null !== (rQ = null === aQ || void 0 === aQ ? void 0 : aQ.fuelLeftMs) && void 0 !== rQ ? rQ : null, ZQ = function(QQ, WQ, XQ) {
        var wQ;
        const qQ = null === WQ ? void 0 : TX[WQ];
        return Math.max(null !== (wQ = null !== qQ && void 0 !== qQ ? qQ : XQ) && void 0 !== wQ ? wQ : 0, QQ.opMs)
      }(cQ, null !== (IQ = null === aQ || void 0 === aQ ? void 0 : aQ.burning) && void 0 !== IQ ? IQ : null, NQ), OQ = null !== (jQ = null === aQ || void 0 === aQ ? void 0 : aQ.fuelKeep) && void 0 !== jQ ? jQ : null, KQ = null === AQ ? null : ps(GQ, AQ, aQ, eQ), mQ = null === AQ ? null : Gs(AQ, aQ);
      return (0, HT.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, HT.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, HT.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: HQ(wT(GQ))
          }), CQ && (0, HT.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [HQ("Tree Cutter" === GQ ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, HT.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, HT.jsx)(iq.d, {
                itemName: CQ.item,
                amount: 0
              })
            }), (0, HT.jsx)(cq.e, {
              text: CQ.name
            })]
          }), null !== LQ && (0, HT.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: HQ("buildAFactory2Game:machineDigsFixed", {
              perMin: String(LQ)
            })
          }), (null === aQ || void 0 === aQ ? void 0 : aQ.field) && (0, HT.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, HT.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, HT.jsx)(iq.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), HQ("buildAFactory2Game:machineField", {
              planted: String(aQ.field[0]),
              ripe: String(aQ.field[1])
            })]
          }), (0, HT.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, HT.jsxs)("div", {
              className: vq()("Baf2MachineColumn", {
                Baf2Burns: YQ
              }),
              children: [null !== cQ.inputSlot && (0, HT.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, HT.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: HQ(Us(cQ))
                }), dQ(cQ.inputSlot)]
              }), null !== lQ.fuelSlot && !hQ && (0, HT.jsxs)("div", {
                className: vq()("Baf2MachineSlot", {
                  Baf2FuelFed: eQ
                }),
                children: [(0, HT.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [eQ && (0, HT.jsx)(hq.d, {
                    name: "fire"
                  }), HQ("buildAFactory2Game:machineFuel")]
                }), (0, HT.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, HT.jsx)(as, {
                    running: "running" === AQ,
                    leftMs: NQ,
                    periodMs: ZQ,
                    updateCount: bQ.updateCount
                  }), tQ]
                })]
              }), null !== lQ.fuelSlot && hQ && (0, HT.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, HT.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: HQ("buildAFactory2Game:machineFuel")
                }), (0, HT.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: HQ("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": HQ("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, HT.jsx)(hq.d, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, HT.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, HT.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: HQ(hs(cQ))
              }), (0, HT.jsx)(Hs, {
                running: "running" === AQ,
                opMs: cQ.opMs,
                opLeftMs: EQ,
                updateCount: bQ.updateCount
              })]
            }), cQ.outputSlots.length > 0 && (0, HT.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, HT.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: HQ("buildAFactory2Game:machineOutput")
              }), (0, HT.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: cQ.outputSlots.map((QQ => (0, HT.jsx)("div", {
                  children: dQ(QQ)
                }, QQ)))
              })]
            }), null !== RQ && SQ && (0, HT.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, HT.jsx)("div", {
                style: {
                  height: 100 * RQ / kQ + "%"
                }
              })
            })]
          }), YQ && null !== OQ && (0, HT.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, HT.jsx)(hq.d, {
              name: "arrows-rotate"
            }), HQ(XX(cQ) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(OQ)
            })]
          }), (eQ || xQ) && (0, HT.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, HT.jsx)(hq.d, {
              name: "fire"
            }), HQ(eQ ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), lQ.couplable && (0, HT.jsx)(Kz, {
            kind: GQ,
            tier: fQ,
            coupled: hQ,
            level: iQ,
            slot: oQ === lQ.fuelSlot ? tQ : null !== oQ ? dQ(oQ) : null
          }), null !== RQ && !SQ && !0 === (null === aQ || void 0 === aQ ? void 0 : aQ.reactorPowered) && (0, HT.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: HQ("buildAFactory2Game:machineReactorPowered")
          }), null !== RQ && !SQ && !0 !== (null === aQ || void 0 === aQ ? void 0 : aQ.reactorPowered) && (0, HT.jsx)(iz, {
            stored: RQ,
            cap: kQ,
            rates: null !== (BQ = null === aQ || void 0 === aQ ? void 0 : aQ.powerRates) && void 0 !== BQ ? BQ : null
          }), (null === aQ || void 0 === aQ ? void 0 : aQ.water) && (0, HT.jsx)(Fs, {
            water: aQ.water,
            at: UQ,
            side: aQ.cryo ? "waterIn" : null
          }), (null === aQ || void 0 === aQ ? void 0 : aQ.cryo) && (0, HT.jsx)(Fs, {
            water: aQ.cryo,
            at: UQ,
            side: "cryoOut"
          }), null !== aQ && void 0 !== aQ && aQ.inertCoupler ? (0, HT.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: HQ("buildAFactory2Game:machineStatus_couplerOff", {
              item: qT(HQ, aQ.inertCoupler)
            })
          }) : null !== KQ && (0, HT.jsx)("div", {
            className: vq()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== AQ
            }),
            children: HQ(KQ, mQ ? ls(HQ, mQ.input, mQ.short) : void 0)
          })]
        }), (0, HT.jsxs)("div", {
          className: vq()("Baf2MachineSide", {
            Baf2SynthSide: YW(lQ)
          }),
          children: [YW(lQ) && (0, HT.jsx)(Zz, {
            Sq: UQ,
            taught: null !== (yQ = null === aQ || void 0 === aQ ? void 0 : aQ.taught) && void 0 !== yQ ? yQ : null
          }, UQ.join(",")), SQ && (0, HT.jsx)(Az, {
            kind: GQ,
            def: cQ,
            Sq: UQ,
            power: vQ,
            stored: null !== RQ && void 0 !== RQ ? RQ : 0,
            cap: kQ
          }), nQ(lQ) && (0, HT.jsx)(xz, {
            Sq: UQ,
            input: null !== (VQ = null === aQ || void 0 === aQ ? void 0 : aQ.input) && void 0 !== VQ ? VQ : null,
            drops: null !== (DQ = null === aQ || void 0 === aQ ? void 0 : aQ.farm) && void 0 !== DQ ? DQ : null,
            seconds: String(cQ.opMs / 1e3)
          }), !SQ && !nQ(lQ) && !YW(lQ) && (0, HT.jsx)(wz, {
            kind: GQ,
            def: cQ,
            input: null !== (pQ = null === aQ || void 0 === aQ ? void 0 : aQ.input) && void 0 !== pQ ? pQ : null,
            tier: null !== fQ && void 0 !== fQ ? fQ : 1,
            noSeeds: !0 === (null === aQ || void 0 === aQ ? void 0 : aQ.noSeeds)
          })]
        })]
      })
    }

    function cs(QQ, WQ, XQ, wQ) {
      var qQ;
      const TQ = EW[QQ],
        zQ = [TQ.inputSlot, TQ.fuelSlot, ...null !== (qQ = TQ.inputSlots) && void 0 !== qQ ? qQ : []].filter((QQ => null !== QQ));
      return {
        render: qQ => {
          let {
            Sq: TQ,
            renderSlot: zQ
          } = qQ;
          return (0, HT.jsx)(Sz.Provider, {
            value: wQ,
            children: (0, HT.jsx)(is, {
              kind: QQ,
              Sq: TQ,
              store: WQ,
              power: XQ,
              renderSlot: zQ
            })
          })
        },
        quickMoveRange: zQ.length > 0 ? [Math.min(...zQ), Math.max(...zQ) + 1] : [0, 0],
        className: bs(QQ)
      }
    }
    const As = "Assembler";

    function Rs(QQ) {
      var WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ;
      let {
        Sq: gQ,
        store: JQ,
        renderSlot: rQ
      } = QQ;
      const {
        t: IQ
      } = (0, lq.C)(), jQ = vs(JQ, gQ), BQ = null !== (WQ = null === jQ || void 0 === jQ ? void 0 : jQ.tier) && void 0 !== WQ ? WQ : 1, yQ = null !== (XQ = null === jQ || void 0 === jQ ? void 0 : jQ.taught) && void 0 !== XQ ? XQ : null, VQ = KW(As, {
        coupled: !1,
        taught: yQ
      }), DQ = null !== (wQ = VQ.bench) && void 0 !== wQ ? wQ : null, pQ = null !== (qQ = null === jQ || void 0 === jQ ? void 0 : jQ.status) && void 0 !== qQ ? qQ : null, GQ = null !== (TQ = null === jQ || void 0 === jQ ? void 0 : jQ.power) && void 0 !== TQ ? TQ : null, UQ = null !== (zQ = null === jQ || void 0 === jQ ? void 0 : jQ.powerCap) && void 0 !== zQ ? zQ : 4e3;
      return (0, HT.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, HT.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, HT.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: IQ(wT(As))
          }), DQ && (0, HT.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [IQ("buildAFactory2Game:benchMakes"), (0, HT.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, HT.jsx)(iq.d, {
                itemName: DQ.output,
                amount: 0
              })
            }), (null === jQ || void 0 === jQ ? void 0 : jQ.taughtName) && (0, HT.jsx)(cq.e, {
              text: jQ.taughtName
            }), DQ.outputAmount > 1 && (0, HT.jsxs)("span", {
              children: ["\xd7", DQ.outputAmount]
            })]
          }), !DQ && (0, HT.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: IQ("buildAFactory2Game:benchTeachHint")
          }), (0, HT.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, HT.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (sQ = VQ.inputSlots) && void 0 !== sQ ? sQ : []).map(((QQ, WQ) => {
                const XQ = null === DQ || void 0 === DQ ? void 0 : DQ.inputs[WQ];
                return (0, HT.jsxs)("div", {
                  className: vq()("Baf2BenchInput", {
                    Spare: !XQ
                  }),
                  children: [(0, HT.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [rQ(QQ), XQ && (0, HT.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, HT.jsx)(iq.d, {
                        itemName: XQ.item,
                        amount: 0
                      })
                    })]
                  }), (0, HT.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: XQ ? `\xd7${XQ.amount}` : "\xa0"
                  })]
                }, QQ)
              }))
            }), (0, HT.jsx)(Hs, {
              running: "running" === pQ,
              opMs: VQ.opMs,
              opLeftMs: null !== (FQ = null === jQ || void 0 === jQ ? void 0 : jQ.opLeftMs) && void 0 !== FQ ? FQ : null,
              updateCount: JQ.updateCount
            }), (0, HT.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, HT.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: IQ("buildAFactory2Game:machineOutput")
              }), (0, HT.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: VQ.outputSlots.map((QQ => (0, HT.jsx)("div", {
                  children: rQ(QQ)
                }, QQ)))
              })]
            })]
          }), null !== GQ && (0, HT.jsx)(iz, {
            stored: GQ,
            cap: UQ,
            rates: null !== (PQ = null === jQ || void 0 === jQ ? void 0 : jQ.powerRates) && void 0 !== PQ ? PQ : null
          }), null !== pQ && (0, HT.jsx)("div", {
            className: vq()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== pQ
            }),
            children: IQ(ps(As, pQ, jQ, !1))
          }), DQ && DQ.inputs.length > 1 && (0, HT.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: IQ("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, HT.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, HT.jsx)(Tz, {
            taught: yQ,
            tier: BQ
          }), DQ && (0, HT.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: IQ("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Es(QQ) {
      var WQ;
      const XQ = null !== (WQ = EW[As].inputSlots) && void 0 !== WQ ? WQ : [];
      return {
        render: WQ => {
          let {
            Sq: XQ,
            renderSlot: wQ
          } = WQ;
          return (0, HT.jsx)(Rs, {
            Sq: XQ,
            store: QQ,
            renderSlot: wQ
          })
        },
        quickMoveRange: [Math.min(...XQ), Math.max(...XQ) + 1],
        className: bs(As)
      }
    }
    var Cs = XQ(105),
      us = XQ(1162),
      Ls = XQ(4534);
    const ks = 600,
      fs = .5,
      Ss = 4,
      ts = 1200,
      os = 140,
      es = 100,
      ns = 32,
      xs = 16,
      Ys = 100.5,
      Ns = 90,
      Zs = 1.5,
      Os = 50;

    function Ks(QQ) {
      switch (cX(QQ)) {
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
    const ms = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Ms(QQ) {
      const WQ = Math.ceil(60 * QQ / es);
      return {
        fuel: Math.max(ns, WQ),
        waste: Math.max(xs, WQ)
      }
    }

    function QF(QQ, WQ, XQ) {
      const [wQ, qQ, TQ] = [QQ - 2, WQ - 2, XQ - 2];
      return 2 * (wQ * qQ + qQ * TQ + TQ * wQ) * os
    }

    function WF(QQ, WQ, XQ) {
      return Math.max(0, QQ - 2) * Math.max(0, WQ - 2) * Math.max(0, XQ - 2)
    }

    function XF(QQ, WQ) {
      const [XQ, wQ, qQ] = QQ, TQ = XQ * wQ * qQ, zQ = new Float32Array(TQ);
      let sQ = 0,
        FQ = 0,
        PQ = 0,
        gQ = 0,
        JQ = 0;
      const rQ = (QQ, TQ, zQ) => QQ < 0 || QQ >= XQ || TQ < 0 || TQ >= wQ || zQ < 0 || zQ >= qQ ? 0 : WQ[(TQ * qQ + zQ) * XQ + QQ];
      for (let yQ = 0; yQ < wQ; yQ++)
        for (let QQ = 0; QQ < qQ; QQ++)
          for (let wQ = 0; wQ < XQ; wQ++) {
            const TQ = (yQ * qQ + QQ) * XQ + wQ,
              IQ = WQ[TQ];
            if (1 === IQ) {
              sQ++;
              let WQ = 0;
              for (const [XQ, qQ, TQ] of ms) {
                const zQ = rQ(wQ + XQ, yQ + qQ, QQ + TQ);
                1 !== zQ && 2 !== zQ || WQ++
              }
              zQ[TQ] = ks * (1 + fs * Math.min(WQ, Ss)), gQ += zQ[TQ]
            } else if (2 === IQ) FQ++;
            else if (3 === IQ) {
              PQ++;
              ms.some((WQ => {
                let [XQ, qQ, TQ] = WQ;
                return 1 === rQ(wQ + XQ, yQ + qQ, QQ + TQ)
              })) && (JQ += ts)
            }
          }
      const IQ = QF(XQ + 2, wQ + 2, qQ + 2),
        jQ = Math.min(gQ, JQ, IQ),
        BQ = sQ > 0 ? gQ * es / sQ : 0;
      return {
        rods: sQ,
        graphite: FQ,
        channels: PQ,
        fuelHeat: gQ,
        cooling: JQ,
        size: IQ,
        max: jQ,
        vol: TQ,
        powerPerUnit: BQ,
        pelletsPerMin: BQ > 0 ? jQ / BQ * 60 : 0,
        waterPerS: jQ * mQ.n,
        rodHeat: zQ
      }
    }
    const wF = 0,
      qF = 1,
      TF = 6,
      zF = 7,
      sF = 8;

    function FF(QQ, WQ) {
      const [XQ, wQ, qQ] = QQ, TQ = new Uint8Array(XQ * wQ * qQ), zQ = (QQ, TQ, zQ) => QQ < 0 || QQ >= XQ || TQ < 0 || TQ >= wQ || zQ < 0 || zQ >= qQ ? 0 : WQ[(TQ * qQ + zQ) * XQ + QQ];
      for (let sQ = 0; sQ < wQ; sQ++)
        for (let QQ = 0; QQ < qQ; QQ++)
          for (let wQ = 0; wQ < XQ; wQ++) {
            const FQ = (sQ * qQ + QQ) * XQ + wQ,
              PQ = WQ[FQ];
            if (1 === PQ) {
              let WQ = 0;
              for (const [XQ, qQ, TQ] of ms) {
                const FQ = zQ(wQ + XQ, sQ + qQ, QQ + TQ);
                WQ += 1 === FQ || 2 === FQ ? 1 : 0
              }
              TQ[FQ] = qF + Math.min(WQ, Ss)
            } else if (3 === PQ) {
              const WQ = ms.some((WQ => {
                let [XQ, qQ, TQ] = WQ;
                return 1 === zQ(wQ + XQ, sQ + qQ, QQ + TQ)
              }));
              TQ[FQ] = WQ ? TF : zF
            } else 2 === PQ && (TQ[FQ] = sF)
          }
      return TQ
    }

    function PF(QQ) {
      return QQ.fuelHeat <= QQ.cooling && QQ.fuelHeat <= QQ.size ? "fuel" : QQ.cooling <= QQ.size ? "cooling" : "size"
    }
    const gF = Ns;

    function JF(QQ, WQ, XQ) {
      return Math.round(QQ * WQ * XQ * 25e3 * (1 + .25 * (Math.min(QQ, WQ, XQ) - 2)))
    }

    function rF(QQ) {
      return Math.max(0, Math.min(mQ.f, QQ))
    }

    function IF(QQ, WQ, XQ) {
      const wQ = WQ * rF(XQ);
      return QQ <= 0 ? 0 : wQ > 0 ? Math.min(200, 100 * QQ / wQ) : 200
    }

    function jF(QQ, WQ) {
      const XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? Zs : 1;
      return Math.min(QQ.fuelHeat * XQ, QQ.cooling * rF(WQ), QQ.size * XQ)
    }

    function BF(QQ) {
      return 2 + QQ / 10
    }
    const yF = "buildAFactory2Game:";

    function VF(QQ) {
      var WQ;
      return null !== (WQ = QQ.baf2RxMood) && void 0 !== WQ ? WQ : function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const XQ = [
          ["calm", 50],
          ["warm", gF],
          ["hot", Ys]
        ];
        for (const [wQ, qQ] of XQ)
          if (QQ < qQ + (wQ === WQ ? 3 : 0)) return wQ;
        return "alarm"
      }(QQ.baf2RxHeat)
    }
    const DF = 120;

    function pF(QQ) {
      const WQ = QQ.baf2RxState;
      if ("running" === WQ && QQ.baf2RxHeat > Ys) return {
        label: `${yF}rxState_tooHot`,
        tone: "bad",
        fix: `${yF}rxFix_tooHot`
      };
      switch (WQ) {
        case "running":
          return {
            label: `${yF}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${yF}rxState_idle`, tone: "off", fix: `${yF}rxFix_idle`
          };
        case "scram":
          return {
            label: `${yF}rxState_scram`, tone: "off", fix: QQ.baf2RxHeat < Os ? `${yF}rxFix_scramCool` : `${yF}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${yF}rxState_${WQ}`, tone: "off", fix: `${yF}rxFix_${WQ}`
          };
        case "melted":
          return {
            label: `${yF}rxState_melted`, tone: "bad", fix: `${yF}rxFix_melted`
          };
        default:
          return {
            label: `${yF}rxState_${WQ}`, tone: "warn", fix: `${yF}rxFix_${WQ}`
          }
      }
    }

    function GF(QQ) {
      const [WQ, XQ, wQ] = QQ.baf2RxStats;
      return {
        fuelHeat: WQ,
        cooling: XQ * (QQ.baf2RxCryo ? Math.max(1, rF(QQ.baf2RxWater / 100)) : 1),
        size: wQ
      }
    }

    function UF(QQ) {
      var WQ;
      const XQ = "idle" === QQ.baf2RxState || "running" === QQ.baf2RxState && QQ.baf2RxHeat <= Ys || "scram" === QQ.baf2RxState && QQ.baf2RxHeat < Os;
      if (0 === (QQ.baf2RxFlags & GW) || !QQ.baf2RxFormed || !XQ) return null;
      const {
        fuelHeat: wQ,
        cooling: qQ,
        size: TQ
      } = GF(QQ), zQ = Math.min(wQ, qQ, TQ), sQ = PF({
        fuelHeat: wQ,
        cooling: qQ,
        size: TQ
      }), FQ = "cooling" === sQ && !0 === QQ.baf2RxCryoOpen && !QQ.baf2RxCryo, PQ = null !== (WQ = QQ.baf2RxCells) && void 0 !== WQ ? WQ : "", gQ = ("fuel" === sQ || "cooling" === sQ && !0 === QQ.baf2RxCryo) && PQ.length > 0 && !PQ.includes(String(0)), JQ = FQ ? "Cryo" : "scram" === QQ.baf2RxState ? "Off" : "";
      return zQ < 12e3 ? {
        key: `${yF}rxGrow_${gQ?"full":sQ}${JQ}`,
        amount: zQ
      } : null
    }

    function bF(QQ, WQ) {
      return QQ[0] === WQ[0] && QQ[1] === WQ[1] && QQ[2] === WQ[2]
    }

    function vF(QQ) {
      return [...QQ].sort(((QQ, WQ) => Number(WQ[2] < WQ[1]) - Number(QQ[2] < QQ[1])))
    }

    function dF(QQ, WQ) {
      return WQ.some((WQ => {
        let [XQ, wQ] = WQ;
        return !(wQ <= 0) && ["edge", "cap", "wall", "inside"].some((WQ => XQ === Tw(QQ, WQ)))
      }))
    }

    function HF(QQ, WQ, XQ) {
      const wQ = QQ.baf2RxFuel - QQ.baf2RxPu > 0 ? XQ : 0;
      return {
        full: QQ.baf2RxWaste > WQ - 3,
        fullInS: wQ > 0 ? Math.max(0, WQ - QQ.baf2RxWaste) / wQ : null
      }
    }
    const aF = {
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

    function lF(QQ) {
      return hF[QQ]
    }
    const hF = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function iF(QQ) {
      let [WQ, XQ, wQ] = QQ;
      return Math.ceil(QF(WQ, XQ, wQ) * mQ.n)
    }

    function cF(QQ, WQ) {
      return "battery" === QQ ? WQ[0] * WQ[1] * WQ[2] : function(QQ) {
        let [WQ, XQ, wQ] = QQ;
        return WQ * XQ * wQ - Math.max(0, WQ - 2) * Math.max(0, XQ - 2) * Math.max(0, wQ - 2)
      }(WQ) - 1
    }

    function AF(QQ) {
      const WQ = Math.max(0, QQ);
      if (WQ < 10) return String(Math.round(10 * WQ) / 10);
      if (WQ < 1e4) return Math.round(WQ).toLocaleString("en-US");
      if (WQ < 1e6) return `${WQ<1e5?(Math.floor(WQ/100)/10).toFixed(1):Math.floor(WQ/1e3)}k`;
      const XQ = WQ / 1e6;
      return `${XQ<10?(Math.floor(100*XQ)/100).toFixed(2):XQ<100?(Math.floor(10*XQ)/10).toFixed(1):Math.floor(XQ)}M`
    }

    function RF(QQ) {
      return QQ <= 0 ? "0" : QQ >= 10 ? String(Math.round(QQ)) : QQ.toFixed(QQ >= 1 ? 1 : 2)
    }

    function EF(QQ) {
      const WQ = mX(QQ, 0),
        XQ = mX(QQ, NX(QQ) - 1);
      return {
        lo: [Math.min(WQ[0], XQ[0]), Math.min(WQ[1], XQ[1]), Math.min(WQ[2], XQ[2])],
        hi: [Math.max(WQ[0], XQ[0]) + 1, Math.max(WQ[1], XQ[1]) + 1, Math.max(WQ[2], XQ[2]) + 1]
      }
    }

    function CF(QQ, WQ, XQ) {
      const wQ = [WQ[0] - QQ[0], WQ[1] - QQ[1], WQ[2] - QQ[2]],
        qQ = [(QQ[0] + WQ[0]) / 2, (QQ[1] + WQ[1]) / 2, (QQ[2] + WQ[2]) / 2],
        TQ = [];
      for (let zQ = 0; zQ < 3; zQ++) {
        const sQ = (zQ + 1) % 3,
          FQ = (zQ + 2) % 3;
        for (const PQ of [QQ[sQ], WQ[sQ]])
          for (const gQ of [QQ[FQ], WQ[FQ]]) {
            const QQ = [0, 0, 0],
              WQ = [XQ, XQ, XQ];
            QQ[zQ] = qQ[zQ], WQ[zQ] = wQ[zQ] + XQ, QQ[sQ] = PQ, QQ[FQ] = gQ, TQ.push([QQ, WQ])
          }
      }
      return TQ
    }
    const uF = "buildAFactory2Game:",
      LF = [`${uF}colNorth`, `${uF}colEast`, `${uF}colSouth`, `${uF}colWest`];

    function kF(QQ, WQ) {
      const [XQ, wQ, qQ] = QQ.baf2ColAt;
      return `baf2col ${XQ} ${wQ} ${qQ} ${WQ}`
    }

    function fF(QQ) {
      return function(QQ) {
        if (!Number.isFinite(QQ)) return "";
        const WQ = Math.max(1, Math.round(QQ));
        if (WQ < 60) return `${WQ}s`;
        const XQ = WQ % 60;
        return 0 === XQ ? WQ / 60 + "m" : `${Math.floor(WQ/60)}m ${XQ}s`
      }(function(QQ) {
        const WQ = zw.FOCUS_BY_LASERS[Math.max(0, Math.min(4, QQ))];
        return WQ > 0 ? zw.NOVA_FOCUS / WQ : 1 / 0
      }(QQ))
    }

    function SF(QQ) {
      const WQ = Math.abs(Math.round(QQ));
      return WQ < 1e3 ? Math.round(QQ).toLocaleString("en-US") : WQ < 1e6 ? `${WQ<1e5?(QQ/1e3).toFixed(1).replace(/\.0$/,""):Math.round(QQ/1e3)}k` : `${(QQ/1e6).toFixed(WQ<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function tF(QQ, WQ, XQ) {
      if (rw(WQ) >= 0) {
        const WQ = function(QQ, WQ) {
          return QQ.find((QQ => {
            let {
              focus: XQ
            } = QQ;
            return XQ[0] === WQ[0] && XQ[2] === WQ[2] && (WQ[1] === XQ[1] || WQ[1] === XQ[1] - 1)
          }))
        }(QQ, XQ);
        if (!WQ) return null;
        const qQ = function(QQ) {
          let WQ = 0,
            XQ = 0;
          for (let wQ = 0; wQ < 4; wQ++) WQ += QQ.laser[wQ] ? 1 : 0, XQ += QQ.live[wQ] ? 1 : 0;
          return {
            lasers: WQ,
            live: XQ,
            focusPerS: zw.FOCUS_BY_LASERS[XQ],
            drawPerS: zw.LASER_DRAW * XQ
          }
        }({
          laser: WQ.lasers,
          live: WQ.live
        });
        if (0 === qQ.lasers || "noLasers" === WQ.state) return {
          key: `${uF}lookColNoLasers`
        };
        if (0 === qQ.live) return {
          key: `${uF}lookColOff_blocked`
        };
        if (!(WQ.on && qQ.live > 0) && ("running" !== (wQ = WQ.state) && "slowed" !== wQ)) return {
          key: `${uF}lookColOff_${WQ.state}`
        };
        if (qQ.live < qQ.lasers) return {
          key: `${uF}lookColLasersSome`,
          params: {
            lasers: String(qQ.lasers),
            live: String(qQ.live)
          }
        };
        const TQ = WQ.open.filter(Boolean).length;
        return TQ < 4 ? {
          key: `${uF}lookColLasersSpots`,
          params: {
            live: String(qQ.live),
            spots: String(TQ),
            time: fF(qQ.live)
          }
        } : {
          key: `${uF}lookColLasers`,
          params: {
            live: String(qQ.live),
            time: fF(qQ.live)
          }
        }
      }
      var wQ;
      if (!Iw(WQ)) return null;
      const qQ = function(QQ, WQ) {
        for (const XQ of QQ) {
          const QQ = Vw(XQ.focus, [WQ[0], WQ[1], WQ[2]]);
          if (QQ && QQ.Az === zw.LASER_D && XQ.lasers[QQ.dir]) return {
            entry: XQ,
            dir: QQ.dir
          }
        }
        return null
      }(QQ, XQ);
      if (!qQ) return {
        key: `${uF}lookLaserNoCollider`
      };
      const {
        entry: TQ,
        dir: zQ
      } = qQ;
      return TQ.open[zQ] ? TQ.live[zQ] ? {
        key: TQ.on ? `${uF}lookLaserFiring` : `${uF}lookLaserReady`
      } : {
        key: `${uF}lookLaserBlocked`
      } : {
        key: `${uF}lookLaserClosed`
      }
    }

    function oF(QQ, WQ) {
      const XQ = [];
      for (let wQ = 1; wQ < zw.LASER_D; wQ++) QQ & 1 << WQ * (zw.LASER_D - 1) + wQ - 1 && XQ.push(wQ);
      return XQ
    }
    const eF = {
      firing: `${uF}colSlotFiring`,
      ready: `${uF}colSlotReady`,
      blocked: `${uF}colSlotBlocked`,
      empty: `${uF}colSlotEmpty`,
      closed: `${uF}colSlotClosed`
    };

    function nF(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const TQ = zq(QQ),
        zQ = zq(WQ),
        sQ = zq(XQ),
        FQ = sQ.filter(Boolean).length,
        PQ = TQ.filter(Boolean).length,
        gQ = [0, 1, 2, 3].map((QQ => zQ[QQ] ? TQ[QQ] ? sQ[QQ] ? wQ ? "firing" : "ready" : "blocked" : (QQ => oF(qQ, QQ).length > 0)(QQ) ? "blocked" : "empty" : "closed")),
        JQ = gQ.indexOf("blocked"),
        rQ = JQ < 0 && PQ > 0 ? gQ.indexOf("empty") : -1;
      return gQ.map(((QQ, WQ) => {
        const XQ = WQ === JQ ? {
          key: `${uF}colSlotClear`
        } : WQ === rQ ? {
          key: `${uF}colSlotAdd`,
          params: {
            time: fF(Math.min(4, FQ + 1))
          }
        } : null;
        return {
          dir: WQ,
          tone: QQ,
          title: {
            key: "blocked" !== QQ || TQ[WQ] ? eF[QQ] : `${uF}colSlotGap`,
            keys: {
              dir: LF[WQ]
            }
          },
          hint: XQ
        }
      }))
    }

    function xF(QQ) {
      var WQ;
      return "noPower" === QQ.baf2ColState && QQ.baf2ColRxState ? pF({
        baf2RxState: QQ.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (WQ = QQ.baf2ColRxHeat) && void 0 !== WQ ? WQ : 0
      }) : null
    }

    function YF(QQ) {
      const WQ = zq(QQ.baf2ColSpots).filter(Boolean).length,
        XQ = zq(QQ.baf2ColLive);
      let wQ = 0,
        qQ = 0;
      return zq(QQ.baf2ColLasers).forEach(((QQ, WQ) => {
        QQ && (wQ++, qQ += XQ[WQ] ? 0 : 1)
      })), qQ > 0 ? {
        key: `${uF}colSubSome`,
        params: {
          blocked: String(qQ),
          lasers: String(wQ)
        }
      } : WQ < 4 ? {
        key: `${uF}colSubSpots`,
        params: {
          lasers: String(wQ),
          spots: String(WQ)
        }
      } : {
        key: `${uF}colSub`,
        params: {
          lasers: String(wQ)
        }
      }
    }

    function NF(QQ) {
      const WQ = xF(QQ);
      if ("idle" === QQ.baf2ColRxState && WQ) return {
        key: `${uF}colState_noPowerIdle`
      };
      if (WQ) return {
        key: `${uF}colState_noPowerReactor`,
        keys: {
          state: WQ.label
        }
      };
      if ("noInput" !== QQ.baf2ColState) return {
        key: `${uF}colState_${QQ.baf2ColState}`
      };
      const XQ = String(Math.max(0, zw.NOVA_SA - QQ.baf2ColSa)),
        wQ = String(Math.max(0, zw.NOVA_GD - QQ.baf2ColGd));
      return "0" !== XQ && "0" !== wQ ? {
        key: `${uF}colState_noInput`,
        params: {
          sa: XQ,
          gd: wQ
        }
      } : "0" !== XQ ? {
        key: `${uF}colState_noStarAlloy`,
        params: {
          sa: XQ
        }
      } : "0" !== wQ ? {
        key: `${uF}colState_noGlowDust`,
        params: {
          gd: wQ
        }
      } : {
        key: `${uF}colState_running`
      }
    }

    function ZF(QQ) {
      return QQ.baf2ColP < 0 ? `${uF}colNext` : function(QQ) {
        const WQ = QQ.baf2ColState;
        return QQ.baf2ColP >= 0 && ("blocked" === WQ || "noLasers" === WQ || "noPower" === WQ)
      }(QQ) ? `${uF}colStalled` : null === OF(QQ) ? `${uF}colMaking` : `${uF}colNovaIn`
    }

    function OF(QQ) {
      if (QQ.baf2ColP < 0 || QQ.baf2ColWant <= 0) return null;
      const WQ = QQ.baf2ColFocusPerS * Math.min(1, QQ.baf2ColDraw / QQ.baf2ColWant);
      return WQ > 0 ? Math.max(0, zw.NOVA_FOCUS - QQ.baf2ColP) / WQ : null
    }

    function KF(QQ, WQ) {
      const XQ = [];
      for (let wQ = 1; wQ <= 3; wQ++) {
        const qQ = [QQ[0], QQ[1] - wQ, QQ[2]];
        if (!WQ(qQ)) return XQ;
        XQ.push(qQ)
      }
      return []
    }

    function mF(QQ, WQ) {
      const XQ = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let wQ = 0; wQ < 4; wQ++) {
        const qQ = wQ,
          TQ = yw(QQ.focus, qQ, zw.LASER_D);
        if (QQ.lasers[wQ] || !QQ.open[wQ] || !WQ(TQ)) continue;
        const zQ = [];
        for (let XQ = 1; XQ < zw.LASER_D; XQ++) {
          const wQ = yw(QQ.focus, qQ, XQ);
          WQ(wQ) || zQ.push(wQ)
        }
        XQ.supports.push(...KF(TQ, WQ)), 0 === zQ.length ? XQ.free.push(TQ) : (XQ.blocked.push(TQ), XQ.gaps.push(...zQ))
      }
      return XQ
    }
    const MF = zw.LASER_D - .25,
      QP = 4,
      WP = 2,
      XP = 16;
    const wP = {
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
        blendMode: Ls.c.Standard,
        soft: !0
      },
      qP = {
        green: wP,
        pink: {
          ...wP,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function TP(QQ, WQ) {
      const XQ = {
        ...WQ.params
      };
      for (const [qQ, TQ] of Object.entries(null !== (wQ = WQ.keys) && void 0 !== wQ ? wQ : {})) {
        var wQ;
        XQ[qQ] = QQ(TQ)
      }
      return XQ
    }
    const zP = "buildAFactory2Game:",
      sP = 2 * zw.LASER_D + 1,
      FP = zw.LASER_D;

    function PP(QQ) {
      return QQ(`${zP}colFocusTip`, {
        need: SF(zw.NOVA_FOCUS)
      })
    }

    function gP(QQ, WQ) {
      return QQ(WQ.key, TP(QQ, WQ))
    }

    function JP(QQ) {
      const WQ = QQ.getStatus();
      return {
        status: WQ,
        entry: WQ ? QQ.entryAtRoot(WQ.baf2ColAt) : void 0
      }
    }

    function rP(QQ, WQ) {
      return {
        left: 100 * (FP + QQ) / sP + "%",
        top: 100 * (FP + WQ) / sP + "%"
      }
    }

    function IP(QQ) {
      let {
        status: WQ,
        entry: XQ
      } = QQ;
      const wQ = zq(WQ.baf2ColLasers),
        qQ = zq(WQ.baf2ColSpots),
        TQ = zq(WQ.baf2ColLive),
        zQ = !0 === (null === XQ || void 0 === XQ ? void 0 : XQ.on),
        sQ = zw.LASER_D,
        FQ = [];
      for (let IQ = 0; IQ < 4; IQ++) {
        const [QQ, , WQ] = Bw[IQ];
        if (TQ[IQ]) {
          const XQ = 100 * (sQ - 1) / sP,
            wQ = QQ + WQ > 0 ? 100 * (FP + 1) / sP : 100 * (FP - (sQ - 1)) / sP,
            qQ = 100 * (FP + .35) / sP,
            TQ = 30 / sP,
            PQ = 0 !== QQ ? {
              left: `${wQ}%`,
              width: `${XQ}%`,
              top: `${qQ}%`,
              height: `${TQ}%`
            } : {
              top: `${wQ}%`,
              height: `${XQ}%`,
              left: `${qQ}%`,
              width: `${TQ}%`
            };
          FQ.push((0, HT.jsx)("i", {
            className: vq()("Baf2ColDiagramBeam", {
              Off: !zQ
            }),
            style: PQ
          }, `beam${IQ}`))
        }
        const XQ = wQ[IQ] ? "Baf2ColDiagramLaser" : qQ[IQ] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        FQ.push((0, HT.jsx)("i", {
          className: XQ,
          style: rP(QQ * sQ, WQ * sQ)
        }, `spot${IQ}`))
      }
      for (let IQ = 0; IQ < 4; IQ++) {
        if (wQ[IQ] || !qQ[IQ]) continue;
        const [QQ, , XQ] = Bw[IQ];
        for (const wQ of oF(null !== (PQ = WQ.baf2ColGaps) && void 0 !== PQ ? PQ : 0, IQ)) {
          var PQ;
          FQ.push((0, HT.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: rP(QQ * wQ, XQ * wQ)
          }, `gap${IQ},${wQ}`))
        }
      }
      for (const [IQ, , jQ] of null !== (gQ = null === XQ || void 0 === XQ ? void 0 : XQ.blockers) && void 0 !== gQ ? gQ : []) {
        var gQ, JQ, rQ;
        const QQ = IQ - (null !== (JQ = null === XQ || void 0 === XQ ? void 0 : XQ.focus[0]) && void 0 !== JQ ? JQ : 0),
          WQ = jQ - (null !== (rQ = null === XQ || void 0 === XQ ? void 0 : XQ.focus[2]) && void 0 !== rQ ? rQ : 0);
        FQ.push((0, HT.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: rP(QQ, WQ)
        }, `block${QQ},${WQ}`))
      }
      return (0, HT.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [FQ, (0, HT.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function jP(QQ) {
      let {
        status: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)(), wQ = zq(WQ.baf2ColLive).filter(Boolean).length;
      return (0, HT.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, HT.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: PP(XQ),
          children: XQ(`${zP}colLadder`)
        }), (0, HT.jsx)("ul", {
          children: [1, 2, 3, 4].map((QQ => (0, HT.jsx)("li", {
            className: vq()({
              On: QQ === wQ
            }),
            children: XQ(`${zP}colLadderChip`, {
              lasers: String(QQ),
              time: fF(QQ)
            })
          }, QQ)))
        })]
      })
    }

    function BP(QQ) {
      let {
        item: WQ,
        Ds: XQ,
        need: wQ,
        cap: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, lq.C)(), zQ = Math.min(XQ, wQ);
      return (0, HT.jsxs)("li", {
        className: vq()("Baf2ColTile", {
          Short: XQ < wQ
        }),
        children: [(0, HT.jsx)(yP, {
          item: WQ
        }), (0, HT.jsx)("b", {
          className: "Baf2ColTileValue",
          children: TQ(`${zP}colOutOf`, {
            amount: String(zQ),
            cap: String(wQ)
          })
        }), (0, HT.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, HT.jsx)("i", {
            style: {
              width: 100 * zQ / wQ + "%"
            }
          })
        }), XQ > wQ && (0, HT.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: TQ(`${zP}colIntakeHeld`, {
            amount: String(XQ),
            cap: String(qQ)
          })
        })]
      })
    }

    function yP(QQ) {
      let {
        item: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)();
      return (0, HT.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, HT.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, HT.jsx)(iq.d, {
            itemName: WQ,
            amount: 0
          })
        }), (0, HT.jsx)("span", {
          className: "Baf2ColTileName",
          children: qT(XQ, WQ)
        })]
      })
    }

    function VP(QQ) {
      switch (QQ.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function DP(QQ) {
      var WQ, XQ, qQ;
      let {
        store: TQ,
        close: zQ
      } = QQ;
      const {
        t: sQ
      } = (0, lq.C)(), FQ = tz(), {
        status: PQ,
        entry: gQ
      } = function(QQ) {
        const [WQ, XQ] = (0, wQ.useState)((() => JP(QQ)));
        return (0, wQ.useEffect)((() => (XQ(JP(QQ)), QQ.subscribe((() => {
          XQ(JP(QQ))
        })))), [QQ]), WQ
      }(TQ), [JQ, rQ] = (0, wQ.useState)(null), IQ = null === PQ || void 0 === PQ ? void 0 : PQ.baf2ColHold;
      (0, wQ.useEffect)((() => {
        rQ(null)
      }), [IQ]);
      const jQ = (0, wQ.useRef)({
          p: -1,
          n: 0
        }),
        BQ = null !== (WQ = null === PQ || void 0 === PQ ? void 0 : PQ.baf2ColP) && void 0 !== WQ ? WQ : -1;
      BQ < jQ.current.p && jQ.current.n++, jQ.current.p = BQ;
      const yQ = (0, wQ.useRef)(null),
        [VQ] = (0, wQ.useState)((() => {
          return (QQ = TQ.heldAtOpen()) === Pw || QQ === gw ? {
            key: `${uF}colBeltItIn`,
            item: QQ
          } : null;
          var QQ
        }));
      if (!PQ) return null;
      const DQ = PQ.baf2ColMember,
        pQ = PQ.baf2ColP >= 0,
        GQ = function(QQ, WQ) {
          if (QQ.baf2ColP >= 0 && QQ.baf2ColDraw > 0) {
            const WQ = QQ.baf2ColWant > 0 ? Math.min(1, QQ.baf2ColDraw / QQ.baf2ColWant) : 0;
            return {
              focus: QQ.baf2ColFocusPerS * WQ,
              draw: QQ.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === QQ.baf2ColState && WQ && WQ.draw > 0 ? {
            ...WQ,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(PQ, yQ.current);
      yQ.current = GQ.draw > 0 ? GQ : null;
      const UQ = "slowed" === PQ.baf2ColState || "noPower" === PQ.baf2ColState,
        bQ = OF(PQ),
        vQ = null !== JQ && void 0 !== JQ ? JQ : PQ.baf2ColHold,
        dQ = function(QQ) {
          var WQ, XQ;
          return "idle" === QQ.baf2ColRxState ? null : null !== (WQ = null === (XQ = xF(QQ)) || void 0 === XQ ? void 0 : XQ.fix) && void 0 !== WQ ? WQ : null
        }(PQ),
        HQ = null === dQ && null === VQ ? function(QQ) {
          var WQ;
          const XQ = QQ.baf2ColSentTo;
          if (!XQ) return null;
          const wQ = null !== (WQ = QQ.baf2ColSentHeld) && void 0 !== WQ ? WQ : null;
          return {
            key: null === wQ ? `${uF}colNovaSentToMachine` : `${uF}colNovaSentTo`,
            target: XQ,
            Ds: wQ
          }
        }(PQ) : null,
        aQ = pQ ? sQ(`${zP}colFocusOf`, {
          focus: SF(PQ.baf2ColP),
          need: SF(zw.NOVA_FOCUS)
        }) : null;
      return (0, HT.jsx)(Uz.b, {
        close: zQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, HT.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, HT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, HT.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, HT.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, HT.jsx)(iq.d, {
                  itemName: sw,
                  amount: 0
                })
              }), (0, HT.jsxs)("div", {
                children: [(0, HT.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: qT(sQ, sw)
                }), (0, HT.jsx)("p", {
                  children: gP(sQ, YF(PQ))
                })]
              })]
            }), (0, HT.jsx)(bz.o, {
              onClick: zQ
            })]
          }), (0, HT.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, HT.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, HT.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, HT.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: sQ(ZF(PQ), {
                    time: null === bQ ? "" : UT(sQ, bQ)
                  })
                }), (0, HT.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, HT.jsx)("i", {
                    style: {
                      width: (pQ ? 100 * PQ.baf2ColP / zw.NOVA_FOCUS : 0) + "%"
                    }
                  }, jQ.current.n)
                }), (0, HT.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, HT.jsxs)("span", {
                    title: PP(sQ),
                    children: [(0, HT.jsx)("b", {
                      children: SF(GQ.focus)
                    }), " ", sQ(`${zP}colFocusPerS`)]
                  }), (0, HT.jsxs)("span", {
                    className: vq()("Baf2ColDraw", {
                      Short: UQ
                    }),
                    children: [(0, HT.jsx)(hq.d, {
                      name: "bolt"
                    }), UQ ? sQ(`${zP}colDrawOf`, {
                      draw: SF(PQ.baf2ColDraw),
                      want: SF(PQ.baf2ColWant)
                    }) : sQ(`${zP}colPowerPerS`, {
                      rate: SF(GQ.draw)
                    })]
                  }), null !== aQ && (0, HT.jsx)("span", {
                    className: "Soft",
                    children: aQ
                  })]
                })]
              }), (0, HT.jsx)("p", {
                className: vq()("Baf2ColState", VP(PQ)),
                children: gP(sQ, NF(PQ))
              }), null !== dQ && (0, HT.jsx)("p", {
                className: "Baf2ColStateFix",
                children: sQ(dQ)
              }), null === dQ && null !== VQ && (0, HT.jsx)("p", {
                className: "Baf2ColStateFix",
                children: sQ(VQ.key, {
                  item: qT(sQ, VQ.item)
                })
              }), HQ && (0, HT.jsx)("p", {
                className: "Baf2ColStateFix",
                children: sQ(HQ.key, {
                  target: qT(sQ, HQ.target),
                  amount: String(null !== (XQ = HQ.Ds) && void 0 !== XQ ? XQ : 0)
                })
              }), (0, HT.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, HT.jsx)(BP, {
                  item: Pw,
                  Ds: PQ.baf2ColSa,
                  need: zw.NOVA_SA,
                  cap: zw.SA_CAP
                }), (0, HT.jsx)(BP, {
                  item: gw,
                  Ds: PQ.baf2ColGd,
                  need: zw.NOVA_GD,
                  cap: zw.GD_CAP
                }), (0, HT.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, HT.jsx)(yP, {
                    item: "Nova Matter"
                  }), (0, HT.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: sQ(`${zP}colNovaHeld`, {
                      amount: String(PQ.baf2ColOut),
                      cap: String(zw.OUT_CAP)
                    })
                  }), DQ && (0, HT.jsx)(bz.s, {
                    className: "Baf2ColTake",
                    disabled: 0 === PQ.baf2ColOut,
                    onClick: () => {
                      FQ.send(kF(PQ, "take"))
                    },
                    children: sQ(`${zP}colTake`)
                  })]
                })]
              }), DQ && (0, HT.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": vQ,
                className: vq()("Baf2ColHold", {
                  On: vQ
                }),
                onClick: QQ => {
                  QQ.detail > 0 && QQ.currentTarget.blur(), rQ(!vQ), FQ.send(kF(PQ, "hold " + (vQ ? 0 : 1)))
                },
                children: [(0, HT.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, HT.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, HT.jsx)("b", {
                    children: sQ(`${zP}colHold`)
                  }), (0, HT.jsx)("span", {
                    children: sQ(`${zP}colHoldNote`)
                  })]
                })]
              })]
            }), (0, HT.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, HT.jsx)(IP, {
                status: PQ,
                entry: gQ
              }), (0, HT.jsx)("ul", {
                className: "Baf2ColSlots",
                children: nF(PQ.baf2ColLasers, PQ.baf2ColSpots, PQ.baf2ColLive, GQ.beamsOn, null !== (qQ = PQ.baf2ColGaps) && void 0 !== qQ ? qQ : 0).map((QQ => (0, HT.jsxs)("li", {
                  className: QQ.tone,
                  children: [(0, HT.jsx)("b", {
                    children: gP(sQ, QQ.title)
                  }), null !== QQ.hint && (0, HT.jsx)("span", {
                    children: gP(sQ, QQ.hint)
                  })]
                }, QQ.dir)))
              }), (0, HT.jsx)(jP, {
                status: PQ
              })]
            })]
          })]
        })
      })
    }
    const pP = "buildAFactory2Game:",
      GP = 36e5,
      UP = 864e5;

    function bP(QQ, WQ, XQ) {
      return Math.max(0, Math.ceil((QQ + WQ - Math.max(XQ, QQ)) / 1e3))
    }

    function vP(QQ) {
      return QQ.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function dP(QQ) {
      return "Homestead" === QQ
    }

    function HP(QQ) {
      return function(QQ) {
        let WQ = 0;
        for (const XQ of QQ) {
          const QQ = /^Island ([1-9]\d{0,5})$/.exec(XQ);
          QQ && (WQ = Math.max(WQ, Number(QQ[1])))
        }
        return `Island ${WQ+1}`
      }(QQ.map((QQ => QQ.baf2IslandName)))
    }

    function aP(QQ, WQ) {
      return function(QQ) {
        return `${pP}islandsBlocked${QQ[0].toUpperCase()}${QQ.slice(1)}`
      }("degraded" === QQ && 0 === WQ ? "stuck" : QQ)
    }

    function lP(QQ) {
      return QQ.filter((QQ => {
        var WQ;
        return !QQ.baf2IslandActive && void 0 === QQ.baf2IslandUnreadable && void 0 === (null === (WQ = QQ.baf2IslandCoop) || void 0 === WQ ? void 0 : WQ.baf2CoopState)
      })).length
    }

    function hP(QQ) {
      return "coopMoving" === QQ || "coopUnreachable" === QQ
    }

    function iP(QQ, WQ) {
      const XQ = WQ > 0;
      return {
        change: null === QQ && !XQ,
        switch: (null === QQ || "degraded" === QQ || hP(QQ)) && !XQ,
        rename: "loading" !== QQ && "degraded" !== QQ && "stuck" !== QQ
      }
    }

    function cP(QQ, WQ) {
      return void 0 === QQ || "corrupt" === QQ && WQ
    }
    const AP = Ez;

    function RP(QQ, WQ, XQ) {
      if (null !== QQ && void 0 !== QQ && QQ.untilGone) {
        var wQ;
        return !("dismiss" === QQ.untilGone && void 0 === (null === (wQ = WQ.baf2IslandCoop) || void 0 === wQ ? void 0 : wQ.baf2CoopState)) && XQ - QQ.atMs < 32500
      }
      return void 0 !== QQ && XQ - QQ.atMs < AP && WQ.baf2IslandName === QQ.from
    }
    const EP = Ez;

    function CP(QQ) {
      return "core" === (null === QQ || void 0 === QQ ? void 0 : QQ.kind) ? QQ.core : "islands" === (null === QQ || void 0 === QQ ? void 0 : QQ.kind) ? QQ.backToCore : void 0
    }

    function uP(QQ) {
      return `\0${QQ}\0`
    }

    function LP(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const wQ = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const TQ of Object.keys(XQ)) wQ[TQ] = uP(TQ);
      let qQ = Object.keys(wQ).length > 0 ? QQ(WQ, wQ) : QQ(WQ);
      for (const [TQ, zQ] of Object.entries(XQ)) qQ = qQ.split(uP(TQ)).join(zQ);
      return qQ
    }

    function kP(QQ, WQ) {
      return QQ ? WQ ? "enabled" : "disabled" : "hidden"
    }
    const fP = {
      removed: `${pP}islandsCoopRemoved`,
      deleted: `${pP}islandsCoopDeleted`,
      notReady: `${pP}islandsCoopNotReady`,
      gone: `${pP}islandsCoopGone`
    };

    function SP(QQ) {
      var WQ;
      return "member" !== (null === (WQ = QQ.baf2IslandCoop) || void 0 === WQ ? void 0 : WQ.baf2CoopRole) && "newer" !== QQ.baf2IslandUnreadable
    }

    function tP(QQ, WQ, XQ, wQ, qQ, TQ) {
      const zQ = QQ.baf2IslandActive,
        sQ = QQ.baf2IslandUnreadable,
        FQ = QQ.baf2IslandCoop,
        PQ = function(QQ, WQ, XQ) {
          return {
            switch: QQ.switch && void 0 === WQ,
            delete: QQ.change && cP(WQ, XQ)
          }
        }(WQ, sQ, wQ),
        gQ = zQ && void 0 !== FQ && void 0 === FQ.baf2CoopState && "coopUnreachable" === TQ,
        JQ = {
          switch: kP((!zQ || gQ) && void 0 === sQ, gQ || PQ.switch),
          switchLabel: gQ ? "tryAgain" : "switch",
          rename: kP(!0, WQ.rename),
          delete: kP(!zQ, PQ.delete),
          deleteWaits: !zQ && cP(sQ, wQ),
          people: kP(void 0 !== QQ.baf2IslandInvitable || qQ && zQ && void 0 === sQ && void 0 === FQ, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        rQ = !zQ && PQ.delete;
      if (void 0 === FQ) return XQ ? {
        ...JQ,
        delete: kP(!zQ, !1),
        deleteWaits: !1,
        note: rQ ? {
          key: `${pP}islandsCoopKeepOwn`
        } : null
      } : JQ;
      const IQ = FQ.baf2CoopState,
        jQ = FQ.baf2CoopMembers.length > 1,
        BQ = {
          ...JQ,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== IQ && "member" === FQ.baf2CoopRole) return {
        ...BQ,
        dismiss: kP(!0, WQ.rename),
        note: {
          key: fP[IQ],
          names: {
            owner: FQ.baf2CoopOwner
          }
        }
      };
      if (void 0 !== IQ) {
        let QQ = {
          key: `${pP}islandsCoopOwnLost`
        };
        return rQ && jQ ? QQ = {
          key: `${pP}islandsCoopDeleteMembers`
        } : rQ && XQ && (QQ = {
          key: `${pP}islandsCoopKeepOwn`
        }), {
          ...BQ,
          delete: kP(!zQ, PQ.delete && !jQ && !XQ),
          deleteWaits: JQ.deleteWaits && !jQ && !XQ,
          note: QQ
        }
      }
      if ("member" === FQ.baf2CoopRole) return {
        ...JQ,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: kP(!0, zQ ? WQ.switch : WQ.rename)
      };
      const yQ = FQ.baf2CoopManageHere;
      let VQ = null;
      var DQ;
      yQ || zQ ? rQ && jQ ? VQ = {
        key: `${pP}islandsCoopDeleteMembers`
      } : rQ && XQ && (VQ = {
        key: `${pP}islandsCoopKeepOwn`
      }) : VQ = {
        key: null !== (DQ = FQ.baf2CoopLeft) && void 0 !== DQ && DQ.length ? `${pP}islandsCoopManageThereClaim` : `${pP}islandsCoopManageThere`
      };
      return {
        ...JQ,
        rename: kP(!0, WQ.rename && yQ),
        delete: kP(!zQ, PQ.delete && !jQ && !XQ),
        deleteWaits: JQ.deleteWaits && !jQ && !XQ,
        people: "enabled",
        peopleLabel: "players",
        unshare: kP(yQ && zQ && !jQ, WQ.change),
        remove: yQ,
        note: VQ
      }
    }

    function oP(QQ) {
      var WQ;
      const XQ = QQ.baf2IslandCoop;
      if ("owner" !== (null === XQ || void 0 === XQ ? void 0 : XQ.baf2CoopRole) || void 0 !== XQ.baf2CoopState || null === (WQ = XQ.baf2CoopLeft) || void 0 === WQ || !WQ.length) return null;
      const wQ = QQ.baf2IslandActive && XQ.baf2CoopManageHere;
      return {
        left: XQ.baf2CoopLeft,
        claim: wQ,
        goThere: !wQ && XQ.baf2CoopManageHere
      }
    }

    function eP(QQ) {
      return QQ.baf2CoopMembers.length >= QQ.baf2CoopMax
    }

    function nP(QQ, WQ, XQ) {
      return void 0 !== QQ && WQ < QQ.answer && XQ - QQ.atMs < AP
    }
    const xP = "buildAFactory2Game:";

    function YP(QQ, WQ) {
      return {
        onKeyDown: XQ => {
          XQ.stopPropagation(), XQ.nativeEvent.isComposing || 229 === XQ.nativeEvent.keyCode || ("Enter" === XQ.key ? (XQ.preventDefault(), QQ()) : "Escape" === XQ.key && (XQ.preventDefault(), WQ()))
        }
      }
    }

    function NP(QQ) {
      return {
        onKeyDown: WQ => {
          "Escape" !== WQ.key || WQ.nativeEvent.isComposing || (WQ.preventDefault(), WQ.stopPropagation(), QQ())
        }
      }
    }

    function ZP(QQ) {
      QQ.currentTarget.select()
    }

    function OP(QQ, WQ) {
      (0, wQ.useEffect)((() => {
        var XQ;
        QQ && (null === (XQ = WQ.current) || void 0 === XQ || XQ.scrollIntoView({
          block: "nearest"
        }))
      }), [QQ, WQ])
    }

    function KP(QQ) {
      const [WQ, XQ] = (0, wQ.useState)(null);
      return (0, wQ.useEffect)((() => {
        const WQ = document.querySelector(".UiRequests"),
          wQ = QQ.current;
        if (!WQ || !wQ || "undefined" === typeof ResizeObserver) return;
        const qQ = () => {
          const QQ = WQ.getBoundingClientRect(),
            qQ = wQ.getBoundingClientRect(),
            TQ = wQ.parentElement,
            zQ = TQ && parseFloat(getComputedStyle(TQ).paddingTop) || 0,
            sQ = function(QQ, WQ, XQ, wQ) {
              if (!QQ || QQ.height <= 0 || QQ.right <= WQ.left || QQ.left >= WQ.right) return null;
              const qQ = Math.max(wQ, QQ.bottom + 8);
              return {
                marginTop: Math.round(qQ - wQ),
                maxHeight: Math.max(0, Math.floor(XQ - qQ - wQ))
              }
            }(QQ, qQ, window.innerHeight, zQ);
          XQ((QQ => (null === QQ || void 0 === QQ ? void 0 : QQ.marginTop) === (null === sQ || void 0 === sQ ? void 0 : sQ.marginTop) && (null === QQ || void 0 === QQ ? void 0 : QQ.maxHeight) === (null === sQ || void 0 === sQ ? void 0 : sQ.maxHeight) ? QQ : sQ))
        };
        qQ();
        const TQ = new ResizeObserver(qQ);
        return TQ.observe(WQ), window.addEventListener("resize", qQ), () => {
          TQ.disconnect(), window.removeEventListener("resize", qQ)
        }
      }), [QQ]), WQ
    }

    function mP() {
      (0, wQ.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function MP(QQ) {
      (0, wQ.useEffect)((() => {
        var WQ;
        null === (WQ = QQ.current) || void 0 === WQ || WQ.focus()
      }), [QQ])
    }

    function Qg(QQ) {
      const [WQ, XQ] = (0, wQ.useState)(Date.now);
      return (0, wQ.useEffect)((() => {
        const WQ = window.setInterval((() => {
          XQ(Date.now())
        }), QQ);
        return () => {
          window.clearInterval(WQ)
        }
      }), [QQ]), WQ
    }

    function Wg(QQ) {
      let {
        tier: WQ,
        t: XQ
      } = QQ;
      const {
        kind: wQ,
        short: qQ
      } = yQ(WQ), TQ = IQ(WQ, jQ), zQ = XQ(`${xP}${TQ.key}`, {
        ...TQ.params,
        name: XQ(`${xP}${VQ(WQ).nameKey}`)
      });
      return (0, HT.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, HT.jsx)("span", {
          className: vq()("Baf2IslandTierPip", {
            Stage: "tier" !== wQ
          }),
          "aria-hidden": "true",
          children: qQ
        }), zQ]
      })
    }

    function Xg(QQ) {
      let {
        note: WQ,
        className: XQ,
        t: wQ
      } = QQ;
      return (0, HT.jsx)("p", {
        className: vq()("Baf2IslandNote", XQ),
        children: LP(wQ, WQ.key, WQ.names, WQ.params)
      })
    }
    const wg = "buildAFactory2Game:";

    function qg(QQ) {
      let {
        message: WQ,
        arrivedAtMs: XQ,
        close: qQ,
        leave: TQ
      } = QQ;
      const zQ = tz(),
        {
          t: sQ
        } = (0, lq.C)(),
        FQ = Qg(1e3),
        PQ = (0, wQ.useRef)(null);
      mP(), (0, wQ.useEffect)((() => {
        var QQ;
        null === (QQ = PQ.current) || void 0 === QQ || QQ.focus()
      }), []);
      const gQ = bP(XQ, WQ.baf2TransferInMs, FQ),
        JQ = XQ + WQ.baf2TransferInMs - 1e3,
        [rQ, IQ] = (0, wQ.useState)(null);
      (0, wQ.useEffect)((() => {
        const QQ = window.setTimeout((() => {
          IQ(JQ)
        }), Math.max(0, JQ - Date.now()));
        return () => {
          window.clearTimeout(QQ)
        }
      }), [JQ]);
      const jQ = rQ === JQ || FQ >= JQ,
        BQ = WQ.baf2TransferIsland,
        yQ = WQ.baf2TransferOwner;
      return (0, HT.jsx)(Uz.b, {
        close: qQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, HT.jsxs)("section", {
          ref: PQ,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, HT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, HT.jsxs)("div", {
              children: [(0, HT.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === yQ ? LP(sQ, `${wg}islandsTransferOwn`, {
                  island: BQ
                }) : LP(sQ, `${wg}islandsTransfer`, {
                  island: BQ,
                  owner: yQ
                })
              }), (0, HT.jsx)("p", {
                children: jQ ? sQ(`${wg}islandsTransferNow`) : sQ(`${wg}islandsTransferIn`, {
                  time: UT(sQ, gQ)
                })
              })]
            }), (0, HT.jsx)(bz.o, {
              ariaLabel: sQ(`${wg}islandsClose`),
              onClick: qQ
            })]
          }), !jQ && (0, HT.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, HT.jsx)("p", {
              className: "Baf2TransferNote",
              children: sQ(`${wg}islandsTransferNote`)
            }), (0, HT.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, HT.jsx)(bz.h, {
                onClick: () => {
                  zQ.send("baf2coopstay"), TQ()
                },
                children: sQ(`${wg}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var Tg = XQ(1498),
      zg = XQ(1174),
      sg = XQ.n(zg);
    const Fg = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const Pg = "buildAFactory2Game:",
      gg = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function Jg(QQ, WQ, XQ) {
      return void 0 === WQ ? XQ : "string" === typeof WQ ? WQ : Array.isArray(WQ) ? WQ.map((WQ => "string" === typeof WQ ? WQ : "translationKey" in WQ ? QQ(WQ.translationKey) : "")).join("") : QQ(WQ.translationKey)
    }

    function rg(QQ) {
      const WQ = {};
      for (const [XQ, wQ] of Object.entries(null !== QQ && void 0 !== QQ ? QQ : {})) WQ[XQ] = wQ < 0 ? GT(wQ) : wQ.toLocaleString("en-US");
      return WQ
    }

    function Ig(QQ, WQ) {
      const XQ = WQ ? "touch" : "mouse";
      return {
        use: QQ(`${Pg}lookUse_${XQ}`),
        Use: QQ(`${Pg}lookUseStart_${XQ}`)
      }
    }
    const jg = (0, wQ.memo)((function(QQ) {
      let {
        item: WQ
      } = QQ;
      return (0, HT.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, HT.jsx)(iq.d, {
          itemName: WQ,
          amount: 0
        })
      })
    }));

    function Bg(QQ) {
      let {
        label: WQ,
        percent: XQ,
        progress: wQ
      } = QQ;
      return (0, HT.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, HT.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${WQ}: ${wQ}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": XQ,
          children: (0, HT.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${XQ}%`
            }
          })
        }), (0, HT.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: wQ
        })]
      })
    }

    function yg(QQ) {
      let {
        chips: WQ
      } = QQ;
      return (0, HT.jsx)("span", {
        className: "Baf2QuestChips",
        children: WQ.map((QQ => {
          let [WQ, XQ, wQ] = QQ;
          const qQ = XQ >= wQ;
          return (0, HT.jsxs)("span", {
            className: vq()("Baf2QuestChip", {
              Met: qQ
            }),
            children: [(0, HT.jsx)(jg, {
              item: WQ
            }), (0, HT.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: qQ ? `\u2713${wQ}` : `${XQ}/${wQ}`
            })]
          }, WQ)
        }))
      })
    }

    function Vg(QQ, WQ) {
      const {
        key: XQ,
        params: wQ
      } = IQ(WQ, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return QQ(`${Pg}${XQ}`, {
        ...wQ,
        name: QQ(`${Pg}${VQ(WQ).nameKey}`)
      })
    }

    function Dg(QQ) {
      let {
        core: WQ,
        t: XQ
      } = QQ;
      const [wQ, qQ] = WQ, TQ = qQ > 0 ? Math.floor(100 * wQ / qQ) : 100;
      return (0, HT.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": XQ(`${Pg}questCoreLabel`, {
          have: String(wQ),
          need: String(qQ)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": TQ,
        children: [(0, HT.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: XQ(`${Pg}questCore`, {
            percent: String(TQ)
          })
        }), (0, HT.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, HT.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${TQ}%`
            }
          })
        })]
      })
    }

    function pg(QQ) {
      let {
        rows: WQ,
        t: XQ
      } = QQ;
      const wQ = WQ.filter((QQ => QQ.done)).length;
      return (0, HT.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": XQ(`${Pg}questStepsProgress`, {
          done: String(wQ),
          total: String(WQ.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": WQ.length,
        "aria-valuenow": wQ,
        children: WQ.map((QQ => (0, HT.jsx)("span", {
          className: vq()("Baf2QuestSegment", {
            Done: QQ.done,
            Current: QQ.current
          })
        }, QQ.id)))
      })
    }
    const Gg = (0, wQ.memo)(bg, Ug);

    function Ug(QQ, WQ) {
      const XQ = XQ => QQ.view.itemNames[XQ] === WQ.view.itemNames[XQ];
      return QQ.t === WQ.t && QQ.extra === WQ.extra && (null === QQ.row.item || XQ(QQ.row.item)) && QQ.row.madeFor.every(XQ) && QQ.row.also.every(XQ) && sg()(QQ.row, WQ.row)
    }

    function bg(QQ) {
      let {
        row: WQ,
        view: XQ,
        t: wQ,
        extra: qQ
      } = QQ;
      const {
        isTouchScreen: TQ
      } = (0, Gq.n)(["isTouchScreen"]), zQ = WQ.item ? function(QQ, WQ, XQ) {
        return 1 !== XQ && Fg.has(QQ) ? aq(WQ) : null
      }(WQ.key, WQ.item, WQ.total) : null, sQ = zQ ? wQ(zQ) : WQ.item ? Jg(wQ, XQ.itemNames[WQ.item], WQ.item) : "", FQ = WQ.also.map((QQ => Jg(wQ, XQ.itemNames[QQ], QQ))), PQ = FQ.join(", "), gQ = function(QQ, WQ) {
        var XQ;
        return WQ.length < 2 ? null !== (XQ = WQ[0]) && void 0 !== XQ ? XQ : "" : QQ(`${Pg}listAnd`, {
          rest: WQ.slice(0, -1).join(QQ(`${Pg}listComma`)),
          last: WQ[WQ.length - 1]
        })
      }(wQ, [sQ, ...FQ]), JQ = wQ(`${Pg}${WQ.key}`, {
        ...Ig(wQ, TQ),
        ...rg(WQ.params),
        item: sQ,
        also: PQ,
        itemList: gQ,
        total: String(WQ.total)
      }), [rQ, ...IQ] = JQ.split("\n"), jQ = WQ.total > 1 && !WQ.done && !WQ.away;
      return (0, HT.jsxs)("li", {
        className: vq()("Baf2QuestStep", {
          Done: WQ.done,
          Current: WQ.current,
          JustFinished: WQ.justFinished,
          Away: WQ.away
        }),
        children: [!WQ.done && null !== WQ.item && (0, HT.jsx)(jg, {
          item: WQ.item
        }), (WQ.done || null === WQ.item) && (0, HT.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: WQ.done ? "\u2713" : "\u25cb"
        }), (0, HT.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, HT.jsx)("strong", {
            children: rQ
          }), IQ.length > 0 && (0, HT.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: IQ.join(" ")
          }), !WQ.done && WQ.madeFor.length > 0 && (0, HT.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: wQ("buildAFactory2Game:questRowFor", {
              items: WQ.madeFor.map((QQ => Jg(wQ, XQ.itemNames[QQ], QQ))).join(" \u2192 ")
            })
          }), jQ && (0, HT.jsx)(Bg, {
            label: rQ,
            percent: Math.round(100 * WQ.amount / WQ.total),
            progress: `${WQ.amount.toLocaleString("en-US")}/${WQ.total.toLocaleString("en-US")}`
          }), !WQ.done && !WQ.away && WQ.chips && WQ.chips.length > 0 && (0, HT.jsx)(yg, {
            chips: WQ.chips
          }), qQ]
        })]
      })
    }
    const vg = "buildAFactory2Game:",
      dg = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      Hg = {
        on: `${vg}tutorialButtonOn`,
        hud: `${vg}tutorialButtonHud`,
        off: `${vg}tutorialButtonOff`
      },
      ag = {
        on: `${vg}tutorialPickedOn`,
        hud: `${vg}tutorialPickedHud`,
        off: `${vg}tutorialPickedOff`
      };
    class lg {
      constructor(QQ, WQ, XQ) {
        this.commands = QQ, this.quests = WQ, this.toasts = XQ
      }
      next() {
        const QQ = function(QQ) {
            return AQ[(AQ.indexOf(QQ) + 1) % AQ.length]
          }(this.quests.get().tutorial),
          WQ = this.quests.setTutorial(QQ);
        this.commands.send(`baf2tutorial ${QQ} ${WQ}`), this.toasts.show({
          baf2ToastText: [(0, EQ.Sd)({
            translationKey: ag[QQ]
          }, EQ.N.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function hg(QQ, WQ) {
      let [XQ, wQ] = WQ;
      return QQ(`${Pg}${XQ}`, rg(wQ))
    }

    function ig(QQ) {
      let [WQ, XQ] = QQ;
      return WQ + JSON.stringify(XQ)
    }

    function cg(QQ) {
      let {
        goal: WQ,
        t: XQ
      } = QQ;
      return WQ ? (0, HT.jsx)("span", {
        className: "Baf2BookGoal",
        children: XQ(`${Pg}${WQ}`)
      }) : null
    }

    function Ag(QQ) {
      let {
        view: WQ,
        t: XQ
      } = QQ;
      if (!WQ.name) return null;
      const wQ = eq(WQ.rows);
      return (0, HT.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, HT.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: XQ(`${Pg}currentQuest`)
        }), (0, HT.jsx)("strong", {
          className: "Baf2BookTitle",
          children: hg(XQ, WQ.name)
        }), (0, HT.jsx)(cg, {
          goal: WQ.goal,
          t: XQ
        }), wQ.length > 1 && (0, HT.jsx)(pg, {
          rows: wQ,
          t: XQ
        }), (0, HT.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: WQ.rows.map((QQ => (0, HT.jsx)(Gg, {
            row: QQ,
            view: WQ,
            t: XQ
          }, QQ.id)))
        }), WQ.reward && (0, HT.jsxs)("span", {
          className: "Baf2BookReward",
          children: [XQ(`${Pg}questReward`), (0, HT.jsx)(jg, {
            item: WQ.reward
          }), Jg(XQ, WQ.itemNames[WQ.reward], WQ.reward)]
        })]
      })
    }

    function Rg(QQ) {
      let {
        quest: WQ,
        upcoming: XQ,
        t: wQ
      } = QQ;
      return (0, HT.jsxs)("li", {
        className: vq()("Baf2BookQuest", {
          Done: WQ[3],
          Upcoming: XQ
        }),
        children: [(0, HT.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: WQ[3] ? "\u2713" : "\u25cb"
        }), (0, HT.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, HT.jsx)("strong", {
            className: "Baf2BookTitle",
            children: hg(wQ, WQ)
          }), (0, HT.jsx)(cg, {
            goal: WQ[2],
            t: wQ
          })]
        })]
      })
    }

    function Eg(QQ) {
      let {
        done: WQ,
        total: XQ,
        t: wQ
      } = QQ;
      const qQ = XQ > 0 ? Math.round(100 * WQ / XQ) : 0,
        TQ = wQ(`${Pg}questBookChapterProgress`, {
          done: String(WQ),
          total: String(XQ)
        });
      return (0, HT.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, HT.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": TQ,
          "aria-valuemin": 0,
          "aria-valuemax": XQ,
          "aria-valuenow": WQ,
          children: (0, HT.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${qQ}%`
            }
          })
        }), (0, HT.jsx)("span", {
          className: "Baf2BookProgressText",
          children: TQ
        })]
      })
    }

    function Cg(QQ) {
      let {
        view: WQ,
        tier: XQ,
        quests: wQ,
        t: qQ
      } = QQ;
      const TQ = XQ === WQ.tier,
        zQ = (null !== wQ && void 0 !== wQ ? wQ : []).filter((QQ => !QQ[4])),
        sQ = (null !== wQ && void 0 !== wQ ? wQ : []).filter((QQ => QQ[4])),
        FQ = zQ.filter((QQ => QQ[3])).length,
        PQ = TQ && WQ.name ? ig(WQ.name) : null,
        gQ = zQ.findIndex((QQ => !QQ[3] && ig(QQ) === PQ));
      return (0, HT.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, HT.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, HT.jsx)("h3", {
            children: Vg(qQ, XQ)
          }), zQ.length > 0 && (0, HT.jsx)(Eg, {
            done: FQ,
            total: zQ.length,
            t: qQ
          }), TQ && WQ.core && (0, HT.jsx)(Dg, {
            core: WQ.core,
            t: qQ
          })]
        }), (0, HT.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === wQ && TQ && (0, HT.jsx)(Ag, {
            view: WQ,
            t: qQ
          }), zQ.map(((QQ, XQ) => XQ === gQ ? (0, HT.jsx)(Ag, {
            view: WQ,
            t: qQ
          }, ig(QQ)) : (0, HT.jsx)(Rg, {
            quest: QQ,
            upcoming: !QQ[3],
            t: qQ
          }, ig(QQ))))]
        }), TQ && WQ.side && (0, HT.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, HT.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: qQ(`${Pg}questSide`)
          }), (0, HT.jsx)("strong", {
            className: "Baf2BookTitle",
            children: hg(qQ, WQ.side.name)
          }), (0, HT.jsx)(cg, {
            goal: WQ.side.goal,
            t: qQ
          }), (0, HT.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, HT.jsx)(Gg, {
              row: WQ.side.row,
              view: WQ,
              t: qQ
            })
          })]
        }), sQ.length > 0 && (0, HT.jsxs)(HT.Fragment, {
          children: [(0, HT.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: qQ(`${Pg}questBookSidesDone`)
          }), (0, HT.jsx)("ol", {
            className: "Baf2BookQuests",
            children: sQ.map((QQ => (0, HT.jsx)(Rg, {
              quest: QQ,
              upcoming: !1,
              t: qQ
            }, ig(QQ))))
          })]
        })]
      })
    }

    function ug(QQ) {
      var WQ, XQ, TQ;
      let {
        store: zQ,
        tutorial: sQ,
        close: FQ
      } = QQ;
      const {
        t: PQ
      } = (0, lq.C)(), JQ = (0, Tg.j)(uq, zQ.get()), rQ = null !== (WQ = JQ.tier) && void 0 !== WQ ? WQ : 1, [IQ, jQ] = (0, wQ.useState)(null), VQ = (null === IQ || void 0 === IQ ? void 0 : IQ.at) === rQ ? IQ.tier : rQ, DQ = (0, wQ.useRef)(null), pQ = null !== JQ.chapters;
      (0, wQ.useEffect)((() => {
        var QQ;
        DQ.current && (DQ.current.scrollTop = 0);
        const WQ = null === (QQ = DQ.current) || void 0 === QQ ? void 0 : QQ.querySelector(".Baf2BookQuest.Current");
        if (DQ.current && WQ) {
          const QQ = WQ.getBoundingClientRect().bottom - DQ.current.getBoundingClientRect().bottom;
          QQ > 0 && (DQ.current.scrollTop += Math.min(QQ, WQ.getBoundingClientRect().top - DQ.current.getBoundingClientRect().top))
        }
      }), [VQ, pQ]);
      const GQ = null === (XQ = JQ.chapters) || void 0 === XQ ? void 0 : XQ.find((QQ => {
        let [WQ] = QQ;
        return WQ === VQ
      }));
      return (0, HT.jsx)(Uz.b, {
        close: FQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, HT.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: gg,
          children: [(0, HT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, HT.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: PQ(`${Pg}questBookTitle`)
            }), (0, HT.jsx)(bz.s, {
              className: "Baf2BookTutorialButton",
              disabled: !JQ.tutorialKnown,
              ariaLabel: PQ(Hg[JQ.tutorial]),
              title: PQ(Hg[JQ.tutorial]),
              onClick: () => {
                sQ.next()
              },
              children: (0, HT.jsx)(hq.d, {
                name: dg[JQ.tutorial]
              })
            }), (0, HT.jsx)(bz.o, {
              onClick: FQ
            })]
          }), (0, HT.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": PQ(`${Pg}questBookChapters`),
            "data-pad-initial-area": !0,
            children: qQ.slice(0, gQ()).map(((QQ, WQ) => {
              const XQ = WQ + 1,
                {
                  kind: wQ,
                  short: qQ
                } = yQ(XQ),
                TQ = BQ(XQ, rQ),
                zQ = TQ ? PQ(`${Pg}coreAtomicHidden`) : Vg(PQ, XQ);
              return (0, HT.jsx)("li", {
                children: (0, HT.jsx)("button", {
                  type: "button",
                  className: vq()({
                    Stage: "tier" !== wQ,
                    Atomic: "atomic" === wQ,
                    Current: XQ === rQ,
                    Selected: XQ === VQ
                  }),
                  disabled: XQ > rQ,
                  "aria-pressed": XQ === VQ,
                  "aria-label": zQ,
                  title: TQ ? void 0 : zQ,
                  onClick: () => {
                    jQ({
                      tier: XQ,
                      at: rQ
                    })
                  },
                  children: TQ ? "?" : qQ
                })
              }, QQ.nameKey)
            }))
          }), (0, HT.jsxs)("div", {
            ref: DQ,
            className: "Baf2BookBody",
            children: [tq(JQ) && VQ === rQ && (0, HT.jsx)("p", {
              className: "Baf2BookEmpty",
              children: PQ(`${Pg}questBookAllDone`)
            }), (0, HT.jsx)(Cg, {
              view: JQ,
              tier: VQ,
              quests: null !== (TQ = null === GQ || void 0 === GQ ? void 0 : GQ[1]) && void 0 !== TQ ? TQ : null,
              t: PQ
            })]
          })]
        })
      })
    }
    const Lg = "buildAFactory2Game:";

    function kg(QQ) {
      let {
        tiers: WQ,
        from: XQ,
        tier: wQ,
        shown: qQ,
        tr: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, lq.C)(), sQ = WQ.map(((QQ, WQ) => {
        const sQ = XQ + WQ,
          {
            kind: FQ,
            short: PQ
          } = yQ(sQ),
          gQ = BQ(sQ, wQ);
        return (0, HT.jsx)("li", {
          children: (0, HT.jsx)("button", {
            type: "button",
            className: vq()({
              Stage: "tier" !== FQ,
              Silhouette: gQ,
              Reached: sQ <= wQ,
              Current: sQ === wQ,
              Next: sQ === wQ + 1,
              Selected: sQ === qQ
            }),
            disabled: gQ,
            "aria-pressed": sQ === qQ,
            "aria-label": gQ ? zQ(`${Lg}coreAtomicHidden`) : void 0,
            title: gQ ? void 0 : zQ(`${Lg}${QQ.nameKey}`),
            onClick: () => {
              TQ(sQ)
            },
            children: gQ ? "?" : PQ
          })
        }, QQ.nameKey)
      }));
      return (0, HT.jsx)(HT.Fragment, {
        children: sQ
      })
    }

    function fg(QQ) {
      let {
        id: WQ,
        label: XQ,
        tiers: wQ,
        from: qQ,
        ...TQ
      } = QQ;
      return (0, HT.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, HT.jsx)("span", {
          id: WQ,
          className: "Baf2CoreLadderLabel",
          children: XQ
        }), (0, HT.jsx)("ol", {
          "aria-labelledby": WQ,
          children: (0, HT.jsx)(kg, {
            ...TQ,
            tiers: wQ,
            from: qQ
          })
        })]
      })
    }

    function Sg(QQ) {
      const {
        t: WQ
      } = (0, lq.C)(), XQ = qQ.findIndex((QQ => void 0 !== QQ.stage)), wQ = qQ.findIndex((QQ => void 0 !== QQ.reactorTier)), TQ = XQ < 0 ? qQ : qQ.slice(0, XQ), zQ = XQ < 0 ? [] : qQ.slice(XQ, wQ < 0 ? void 0 : wQ), FQ = wQ < 0 || !sQ() ? [] : qQ.slice(wQ);
      return (0, HT.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, HT.jsx)(fg, {
          ...QQ,
          id: "baf2CoreTiersLabel",
          label: WQ(`${Lg}coreTiersLabel`),
          tiers: TQ,
          from: 1
        }), zQ.length > 0 && (0, HT.jsx)(fg, {
          ...QQ,
          id: "baf2CoreStagesLabel",
          label: WQ(`${Lg}coreStagesLabel`),
          tiers: zQ,
          from: XQ + 1
        }), FQ.length > 0 && (0, HT.jsx)(fg, {
          ...QQ,
          id: "baf2CoreAtomicLabel",
          label: WQ(`${Lg}coreAtomicLabel`),
          tiers: FQ,
          from: wQ + 1
        })]
      })
    }
    const tg = "buildAFactory2Game:";

    function og(QQ) {
      let {
        item: WQ,
        itemNames: XQ,
        children: wQ
      } = QQ;
      return (0, HT.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, HT.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, HT.jsx)(iq.d, {
            itemName: WQ,
            amount: 0
          })
        }), (0, HT.jsx)(cq.e, {
          text: XQ[WQ]
        }), wQ]
      })
    }

    function eg(QQ) {
      const WQ = new Map;
      for (const {
          block: wQ
        }
        of QQ.newDeposits) {
        var XQ;
        WQ.set(wQ, (null !== (XQ = WQ.get(wQ)) && void 0 !== XQ ? XQ : 0) + 1)
      }
      return [...WQ]
    }

    function ng(QQ) {
      let {
        value: WQ,
        label: XQ,
        more: wQ
      } = QQ;
      return (0, HT.jsxs)("li", {
        children: [(0, HT.jsx)("strong", {
          children: WQ
        }), (0, HT.jsx)("span", {
          children: XQ
        }), wQ > 0 && (0, HT.jsxs)("em", {
          children: ["+", wQ]
        })]
      })
    }

    function xg(QQ) {
      let {
        items: WQ,
        itemNames: XQ
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)(), [TQ, zQ] = (0, wQ.useState)(null), sQ = null !== TQ && WQ.includes(TQ) ? TQ : null;
      return (0, HT.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, HT.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: qQ(`${tg}coreRewardUnlocks`)
        }), (0, HT.jsx)("ul", {
          children: WQ.map((QQ => (0, HT.jsx)("li", {
            children: (0, HT.jsx)("button", {
              type: "button",
              className: vq()("Baf2PanelIcon", {
                Picked: QQ === sQ
              }),
              title: qT(qQ, QQ),
              "aria-label": qT(qQ, QQ),
              "aria-pressed": QQ === sQ,
              onClick: () => {
                zQ(QQ === sQ ? null : QQ)
              },
              children: (0, HT.jsx)(iq.d, {
                itemName: QQ,
                amount: 0
              })
            })
          }, QQ)))
        }), (0, HT.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== sQ && (0, HT.jsxs)(HT.Fragment, {
            children: [(0, HT.jsx)(cq.e, {
              text: XQ[sQ]
            }), " \xb7 ", (0, HT.jsx)(cq.e, {
              text: XQ[iQ(sQ)]
            })]
          }), null === sQ && qQ(`${tg}coreRecipeTap`)]
        })]
      })
    }

    function Yg(QQ) {
      var WQ, XQ;
      let {
        def: wQ,
        tier: qQ,
        itemNames: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, lq.C)(), sQ = qQ > 1 ? VQ(qQ - 1) : void 0, FQ = Math.round(2 * wQ.islandRadius), PQ = sQ ? Math.round(2 * sQ.islandRadius) : FQ, gQ = qQ >= 3 ? Uw(qQ) : null;
      return (0, HT.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, HT.jsxs)("ul", {
          className: vq()("Baf2CoreStats", {
            Four: null !== gQ
          }),
          children: [(0, HT.jsx)(ng, {
            value: `${FQ}\xd7${FQ}`,
            label: zQ(`${tg}coreStatIsland`),
            more: FQ - PQ
          }), (0, HT.jsx)(ng, {
            value: String(wQ.machineAllowance),
            label: zQ(`${tg}coreStatMachines`),
            more: wQ.machineAllowance - (null !== (WQ = null === sQ || void 0 === sQ ? void 0 : sQ.machineAllowance) && void 0 !== WQ ? WQ : wQ.machineAllowance)
          }), (0, HT.jsx)(ng, {
            value: String(wQ.beltAllowance),
            label: zQ(`${tg}coreStatBelts`),
            more: wQ.beltAllowance - (null !== (XQ = null === sQ || void 0 === sQ ? void 0 : sQ.beltAllowance) && void 0 !== XQ ? XQ : wQ.beltAllowance)
          }), null !== gQ && (0, HT.jsx)(ng, {
            value: String(gQ),
            label: zQ(`${tg}coreStatStorage`),
            more: gQ - (sQ ? Uw(qQ - 1) : gQ)
          })]
        }), wQ.reward && (0, HT.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, HT.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: zQ(`${tg}coreRewardItem`)
          }), (0, HT.jsx)(og, {
            item: wQ.reward,
            itemNames: TQ
          })]
        }), wQ.newDeposits.length > 0 && (0, HT.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, HT.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: zQ(wQ.newDeposits.length > 1 ? `${tg}coreRewardDeposits` : `${tg}coreRewardDeposit`)
          }), eg(wQ).map((QQ => {
            let [WQ, XQ] = QQ;
            return (0, HT.jsx)(og, {
              item: WQ,
              itemNames: TQ,
              children: XQ > 1 && ` \xd7${XQ}`
            }, WQ)
          }))]
        }), wQ.unlocks.length > 0 && (0, HT.jsx)(xg, {
          items: wQ.unlocks,
          itemNames: TQ
        }), (0, HT.jsx)(Ng, {
          tier: qQ
        })]
      })
    }

    function Ng(QQ) {
      let {
        tier: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)(), wQ = yq[WQ];
      if (!wQ) return null;
      const qQ = Bq(WQ, 0, 0).barrierMax !== Bq(WQ - 1, 0, 0).barrierMax;
      return (0, HT.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, HT.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, HT.jsx)(iq.d, {
            itemName: qQ ? Pq.Chestplate : Fq,
            amount: 0
          })
        }), XQ(`${tg}gearPerkLine`, {
          perk: XQ(`${tg}${wQ}`)
        })]
      })
    }

    function Zg(QQ, WQ) {
      return null === QQ ? WQ : QQ.value
    }

    function Og(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === QQ || XQ - QQ.atMs >= wQ ? null : qQ(QQ.value, WQ) ? QQ.armed ? null : QQ : QQ.armed ? QQ : {
        ...QQ,
        armed: !0
      }
    }

    function Kg(QQ, WQ) {
      const XQ = WQ.filter((WQ => {
        var XQ;
        return !1 !== (null === (XQ = QQ.get(WQ)) || void 0 === XQ ? void 0 : XQ.value)
      }));
      for (const [wQ, qQ] of QQ) qQ.value && !WQ.includes(wQ) && XQ.push(wQ);
      return XQ
    }

    function mg(QQ, WQ, XQ, qQ) {
      const [TQ, zQ] = (0, wQ.useState)((() => new Map)), sQ = () => {
        zQ((WQ => function(QQ, WQ, XQ, wQ) {
          var qQ;
          let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            zQ = null;
          for (const [sQ, FQ] of QQ) {
            const qQ = Og(FQ, WQ(sQ), XQ, wQ, TQ);
            qQ !== FQ && (zQ ??= new Map(QQ), null === qQ ? zQ.delete(sQ) : zQ.set(sQ, qQ))
          }
          return null !== (qQ = zQ) && void 0 !== qQ ? qQ : QQ
        }(WQ, QQ, Date.now(), XQ, qQ)))
      };
      (0, wQ.useEffect)((() => {
        sQ()
      }), [WQ, XQ]), (0, wQ.useEffect)((() => {
        if (0 === TQ.size) return;
        const QQ = Math.min(...[...TQ.values()].map((QQ => QQ.atMs))),
          WQ = setTimeout(sQ, Math.max(0, QQ + XQ - Date.now()) + 1);
        return () => {
          clearTimeout(WQ)
        }
      }), [TQ, WQ, XQ]);
      return [TQ, (WQ, XQ) => {
        zQ((wQ => {
          const TQ = new Map(wQ);
          return TQ.set(WQ, function(QQ, WQ, XQ) {
            return {
              value: QQ,
              atMs: XQ,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(QQ, WQ)
            }
          }(XQ, QQ(WQ), Date.now(), qQ)), TQ
        }))
      }]
    }
    const Mg = "buildAFactory2Game:";

    function QJ(QQ) {
      let {
        message: WQ,
        itemNames: XQ
      } = QQ;
      const qQ = tz(),
        {
          t: TQ
        } = (0, lq.C)(),
        [zQ, sQ] = (0, wQ.useState)(!1),
        [FQ, PQ] = function(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ez;
          const [XQ, wQ] = mg((WQ => QQ.includes(WQ)), QQ, WQ, Object.is);
          return [Kg(XQ, QQ), wQ]
        }(WQ.baf2CoreBankPaused),
        gQ = new Set(FQ),
        JQ = [...WQ.baf2CoreBanked];
      for (const wQ of gQ) JQ.some((QQ => {
        let [WQ] = QQ;
        return WQ === wQ
      })) || JQ.push([wQ, 0]);
      return 0 === JQ.length ? null : (0, HT.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, HT.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": zQ,
          onClick: () => {
            sQ(!zQ)
          },
          children: [(0, HT.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: TQ(`${Mg}coreBankedLater`)
          }), (0, HT.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: JQ.map((QQ => {
              let [WQ, XQ] = QQ;
              const wQ = gQ.has(WQ);
              return (0, HT.jsxs)("span", {
                className: vq()({
                  Paused: wQ
                }),
                title: wQ ? TQ(`${Mg}coreBankPausedTag`) : void 0,
                children: [(0, HT.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, HT.jsx)(iq.d, {
                    itemName: WQ,
                    amount: 0
                  })
                }), XQ, wQ && (0, HT.jsx)(hq.d, {
                  name: "pause"
                })]
              }, WQ)
            }))
          }), (0, HT.jsx)(hq.d, {
            name: zQ ? "angle-up" : "angle-down"
          })]
        }), zQ && (0, HT.jsxs)(HT.Fragment, {
          children: [(0, HT.jsx)("ul", {
            children: JQ.map((QQ => {
              let [WQ, wQ] = QQ;
              const zQ = gQ.has(WQ);
              return (0, HT.jsxs)("li", {
                children: [(0, HT.jsxs)(og, {
                  item: WQ,
                  itemNames: XQ,
                  children: [(0, HT.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: wQ
                  }), zQ && (0, HT.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: TQ(`${Mg}coreBankPausedTag`)
                  })]
                }), (0, HT.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, HT.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === wQ,
                    onClick: () => {
                      qQ.send(`baf2corewithdraw ${wQ} ${WQ}`)
                    },
                    children: TQ(`${Mg}coreTake`)
                  }), (0, HT.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      qQ.send(`${GQ} ${WQ}`), PQ(WQ, !zQ)
                    },
                    children: TQ(zQ ? `${Mg}coreBankResume` : `${Mg}coreBankStop`)
                  })]
                })]
              }, WQ)
            }))
          }), (0, HT.jsx)("p", {
            className: "Baf2CoreHint",
            children: TQ(`${Mg}coreBankNote`)
          })]
        })]
      })
    }
    const WJ = "buildAFactory2Game:";

    function XJ(QQ) {
      const WQ = Math.max(0, Math.floor(QQ));
      return `${Math.floor(WQ/60)}:${String(WQ%60).padStart(2,"0")}`
    }

    function wJ(QQ) {
      let {
        item: WQ
      } = QQ;
      return (0, HT.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, HT.jsx)(iq.d, {
          itemName: WQ,
          amount: 0
        })
      })
    }

    function qJ() {
      return (0, HT.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, HT.jsx)(hq.d, {
          name: "bolt"
        })
      })
    }

    function TJ(QQ) {
      let {
        charge: WQ,
        hint: XQ,
        itemNames: wQ
      } = QQ;
      const qQ = tz(),
        {
          t: TQ
        } = (0, lq.C)(),
        [zQ, sQ, FQ, PQ, gQ, JQ, rQ] = WQ,
        [IQ, jQ] = function(QQ) {
          var WQ;
          let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ez,
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [qQ, TQ] = mg((() => QQ), QQ, XQ, wQ);
          return [Zg(null !== (WQ = qQ.get("")) && void 0 !== WQ ? WQ : null, QQ), QQ => {
            TQ("", QQ)
          }]
        }(rQ),
        BQ = IQ === rQ ? JQ : !IQ,
        yQ = PQ >= gQ,
        VQ = zQ.find((QQ => {
          let [, WQ, XQ] = QQ;
          return XQ < .9 * WQ
        }));
      let DQ = `${WJ}coreChargeWaiting`,
        pQ = {};
      return yQ ? DQ = `${WJ}coreChargeDone` : IQ ? DQ = `${WJ}coreChargeStopped` : BQ && XQ ? (DQ = `${WJ}${XQ[0]}`, pQ = {
        item: qT(TQ, XQ[1])
      }) : BQ && VQ ? (DQ = `${WJ}coreChargeShort`, pQ = {
        item: qT(TQ, VQ[0])
      }) : BQ && sQ > 0 && !FQ ? DQ = `${WJ}coreChargePower` : BQ && (DQ = `${WJ}coreChargeRunning`), (0, HT.jsxs)("div", {
        className: vq()("Baf2CoreCharge", {
          Waiting: !BQ && !yQ,
          Done: yQ
        }),
        children: [(0, HT.jsxs)("h4", {
          children: [TQ(`${WJ}coreChargeTitle`), (0, HT.jsx)("span", {
            children: TQ(`${WJ}coreChargeProgress`, {
              done: XJ(PQ),
              need: XJ(gQ)
            })
          })]
        }), (0, HT.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, HT.jsx)("div", {
            style: {
              width: 100 * Math.min(PQ, gQ) / gQ + "%"
            }
          })
        }), (0, HT.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [zQ.map((QQ => {
            var WQ;
            let [XQ, qQ, zQ] = QQ;
            const sQ = zQ >= .9 * qQ;
            return (0, HT.jsxs)("li", {
              className: vq()({
                Done: sQ,
                Short: BQ && !sQ
              }),
              children: [(0, HT.jsx)(wJ, {
                item: XQ
              }), (0, HT.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, HT.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, HT.jsx)(cq.e, {
                    text: null !== (WQ = wQ[XQ]) && void 0 !== WQ ? WQ : XQ
                  }), (0, HT.jsx)("span", {
                    children: TQ(`${WJ}coreChargeItem`, {
                      now: String(zQ),
                      need: String(qQ)
                    })
                  })]
                }), (0, HT.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, HT.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*zQ/qQ)}%`
                    }
                  })
                })]
              })]
            }, XQ)
          })), sQ > 0 && (0, HT.jsxs)("li", {
            className: vq()("Baf2CoreChargePower", {
              Short: BQ && !FQ
            }),
            children: [(0, HT.jsx)(qJ, {}), (0, HT.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, HT.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, HT.jsx)("span", {
                  children: TQ(`${WJ}coreChargePowerRow`, {
                    power: KQ(sQ)
                  })
                })
              })
            })]
          })]
        }), (0, HT.jsx)("p", {
          className: "Baf2CoreHint",
          children: TQ(DQ, pQ)
        }), !yQ && (BQ || IQ) && (0, HT.jsx)("button", {
          type: "button",
          className: vq()("Baf2CoreChargeToggle", {
            Stopped: IQ
          }),
          onClick: () => {
            qQ.send(bQ), jQ(!IQ)
          },
          children: TQ(IQ ? `${WJ}coreChargeRestart` : `${WJ}coreChargeStop`)
        })]
      })
    }

    function zJ(QQ) {
      let {
        charge: WQ,
        reached: XQ,
        itemNames: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)();
      return (0, HT.jsxs)("div", {
        className: vq()("Baf2CoreCharge", {
          Done: XQ
        }),
        children: [(0, HT.jsxs)("h4", {
          children: [qQ(`${WJ}coreChargeTitle`), (0, HT.jsx)("span", {
            children: qQ(`${WJ}coreChargeSpecTime`, {
              time: XJ(WQ.seconds)
            })
          })]
        }), (0, HT.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [WQ.items.map((QQ => {
            var WQ;
            let {
              item: TQ,
              amount: zQ
            } = QQ;
            return (0, HT.jsxs)("li", {
              className: vq()({
                Done: XQ
              }),
              children: [(0, HT.jsx)(wJ, {
                item: TQ
              }), (0, HT.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, HT.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, HT.jsx)(cq.e, {
                    text: null !== (WQ = wQ[TQ]) && void 0 !== WQ ? WQ : TQ
                  }), (0, HT.jsx)("span", {
                    children: qQ(`${WJ}coreChargeSpecItem`, {
                      need: String(zQ)
                    })
                  })]
                })
              })]
            }, TQ)
          })), WQ.powerPerS > 0 && (0, HT.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, HT.jsx)(qJ, {}), (0, HT.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, HT.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, HT.jsx)("span", {
                  children: qQ(`${WJ}coreChargePowerRow`, {
                    power: KQ(WQ.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const sJ = "buildAFactory2Game:";

    function FJ(QQ) {
      let {
        def: WQ,
        reached: XQ,
        banked: wQ,
        itemNames: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, lq.C)();
      return (0, HT.jsx)("ul", {
        className: "Baf2CoreCost",
        children: WQ.cost.map((QQ => {
          let {
            item: WQ,
            amount: zQ
          } = QQ;
          const sQ = XQ ? 0 : wQ(WQ);
          return (0, HT.jsx)("li", {
            children: (0, HT.jsx)(og, {
              item: WQ,
              itemNames: qQ,
              children: (0, HT.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: sQ > 0 ? TQ(`${sJ}coreBankedFor`, {
                  amount: String(sQ),
                  total: String(zQ)
                }) : `\xd7${zQ}`
              })
            })
          }, WQ)
        }))
      })
    }

    function PJ(QQ, WQ) {
      if (WQ >= gQ()) return QQ(`${sJ}coreMaxTier`);
      const XQ = PQ[WQ + 1];
      return XQ && !XQ.startsWith("upgradeCore") ? QQ(`${sJ}coreGateQuest`, {
        quest: QQ(`${sJ}quest_${XQ}`)
      }) : QQ(`${sJ}coreGateClosed`)
    }

    function gJ() {
      const {
        t: QQ
      } = (0, lq.C)(), WQ = tz(), XQ = (0, wQ.useRef)(null), qQ = (0, wQ.useRef)(Date.now());
      return OP(!0, XQ), (0, HT.jsx)("div", {
        ref: XQ,
        className: "Baf2CoreGrow",
        children: (0, HT.jsx)(bz.s, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - qQ.current >= 600 && WQ.send(pQ)
          },
          children: QQ(`${sJ}coreGrow`)
        })
      })
    }

    function JJ(QQ) {
      let {
        message: WQ,
        itemNames: XQ,
        next: wQ
      } = QQ;
      const qQ = tz(),
        {
          t: TQ
        } = (0, lq.C)(),
        zQ = WQ.baf2CoreTier,
        sQ = WQ.baf2CoreReady,
        FQ = WQ.baf2CoreNeeds.filter((QQ => {
          let [, WQ, XQ, wQ] = QQ;
          return wQ > 0 && WQ < XQ
        })),
        PQ = WQ.baf2CoreNeeds.every((QQ => {
          let [, WQ, XQ] = QQ;
          return WQ >= XQ
        })),
        gQ = WQ.baf2CoreKeep;
      return (0, HT.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, HT.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [sQ && (0, HT.jsx)(gJ, {}), (0, HT.jsx)("h3", {
            children: TQ(`${sJ}coreBring`)
          }), (0, HT.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: WQ.baf2CoreNeeds.map((QQ => {
              let [WQ, wQ, zQ, sQ] = QQ;
              return (0, HT.jsxs)("li", {
                className: vq()({
                  Done: wQ >= zQ
                }),
                children: [(0, HT.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, HT.jsx)(iq.d, {
                    itemName: WQ,
                    amount: 0
                  })
                }), (0, HT.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, HT.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, HT.jsx)(cq.e, {
                      text: XQ[WQ]
                    }), (0, HT.jsxs)("span", {
                      children: [wQ, "/", zQ]
                    })]
                  }), (0, HT.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, HT.jsx)("div", {
                      style: {
                        width: 100 * wQ / zQ + "%"
                      }
                    }), sQ > 0 && (0, HT.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * sQ / zQ + "%"
                      }
                    })]
                  })]
                }), sQ > 0 && wQ < zQ && (0, HT.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    qQ.send(`${UQ} ${WQ}`)
                  },
                  children: TQ(`${sJ}coreDeposit`, {
                    amount: String(sQ)
                  })
                })]
              }, WQ)
            }))
          }), WQ.baf2CoreCharge && (0, HT.jsx)(TJ, {
            charge: WQ.baf2CoreCharge,
            hint: WQ.baf2CoreChargeHint,
            itemNames: XQ
          }), !sQ && FQ.length > 1 && (0, HT.jsx)(bz.s, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              qQ.send(pQ)
            },
            children: TQ(`${sJ}coreHandOver`)
          }), !sQ && void 0 !== gQ && (0, HT.jsx)("p", {
            className: "Baf2CoreHint",
            children: TQ(`${sJ}coreKeepRest`, {
              item: qT(TQ, gQ)
            })
          }), !sQ && !PQ && 0 === FQ.length && void 0 === gQ && (0, HT.jsx)("p", {
            className: "Baf2CoreHint",
            children: TQ(`${sJ}coreNothingHeld`)
          }), (0, HT.jsx)(QJ, {
            message: WQ,
            itemNames: XQ
          })]
        }), (0, HT.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, HT.jsx)("h3", {
            children: TQ(`${sJ}coreRewards`)
          }), (0, HT.jsx)(Yg, {
            def: wQ,
            tier: zQ + 1,
            itemNames: XQ
          })]
        })]
      })
    }

    function rJ(QQ) {
      let {
        message: WQ,
        itemNames: XQ,
        shown: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)(), TQ = WQ.baf2CoreTier, zQ = VQ(wQ), sQ = wQ <= TQ, FQ = new Map(WQ.baf2CoreBanked), PQ = !DQ(TQ, vQ(WQ)) && wQ === TQ;
      return (0, HT.jsxs)("div", {
        className: vq()("Baf2CoreBody", {
          Locked: !sQ
        }),
        children: [(0, HT.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, HT.jsx)("h3", {
            children: qQ(sQ ? `${sJ}coreItTook` : `${sJ}coreItNeeds`)
          }), 0 === zQ.cost.length && (0, HT.jsx)("p", {
            className: "Baf2CoreHint",
            children: qQ(`${sJ}coreTierStart`)
          }), zQ.cost.length > 0 && (0, HT.jsx)(FJ, {
            def: zQ,
            reached: sQ,
            banked: QQ => {
              var WQ;
              return function(QQ, WQ, XQ, wQ) {
                let qQ = QQ;
                for (let zQ = WQ + 2; zQ <= XQ; zQ++) {
                  var TQ;
                  const QQ = VQ(zQ).cost.find((QQ => QQ.item === wQ)),
                    WQ = Math.min(qQ, null !== (TQ = null === QQ || void 0 === QQ ? void 0 : QQ.amount) && void 0 !== TQ ? TQ : 0);
                  if (zQ === XQ) return WQ;
                  qQ -= WQ
                }
                return 0
              }(null !== (WQ = FQ.get(QQ)) && void 0 !== WQ ? WQ : 0, TQ, wQ, QQ)
            },
            itemNames: XQ
          }), zQ.charge && (0, HT.jsx)(zJ, {
            charge: zQ.charge,
            reached: sQ,
            itemNames: XQ
          }), PQ && (0, HT.jsxs)(HT.Fragment, {
            children: [(0, HT.jsx)("p", {
              className: "Baf2CoreHint",
              children: PJ(qQ, TQ)
            }), (0, HT.jsx)(QJ, {
              message: WQ,
              itemNames: XQ
            })]
          })]
        }), (0, HT.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, HT.jsx)("h3", {
            children: qQ(sQ ? `${sJ}coreGave` : `${sJ}coreLockedRewards`)
          }), (0, HT.jsx)(Yg, {
            def: zQ,
            tier: wQ,
            itemNames: XQ
          })]
        })]
      })
    }

    function IJ(QQ, WQ) {
      const {
        key: XQ,
        params: wQ
      } = IQ(WQ - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return QQ(`${sJ}${XQ}`, wQ)
    }
    const jJ = "buildAFactory2Game:",
      BJ = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      yJ = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function VJ(QQ) {
      let {
        view: WQ,
        close: XQ,
        askIslands: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, lq.C)(), [zQ, sQ] = (0, wQ.useState)(!1);
      (0, wQ.useEffect)((() => {
        if (!zQ) return;
        const QQ = window.setTimeout((() => {
          sQ(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(QQ)
        }
      }), [zQ]);
      const {
        message: FQ,
        itemNames: PQ
      } = WQ, gQ = FQ.baf2CoreTier, JQ = VQ(gQ), rQ = DQ(gQ, vQ(FQ)), [BQ, yQ] = FQ.baf2CoreMachines, [pQ, GQ] = FQ.baf2CoreBelts, UQ = FQ.baf2CoreStorage, bQ = FQ.baf2CoreReady, [dQ, HQ] = (0, wQ.useState)(null), aQ = (null === dQ || void 0 === dQ ? void 0 : dQ.at) === gQ && dQ.ready === bQ ? dQ.tier : rQ ? gQ + 1 : gQ;
      let lQ = "coreTierLocked";
      aQ <= gQ ? lQ = "coreTierReached" : aQ === gQ + 1 && (lQ = "coreTierNext");
      const hQ = TQ(`${jJ}${VQ(aQ).nameKey}`),
        iQ = aQ === gQ + 1 ? rQ : null,
        cQ = IQ(aQ, {
          tier: lQ,
          stage: BJ[lQ],
          atomic: yJ[lQ]
        }),
        AQ = TQ(`${jJ}${cQ.key}`, {
          ...cQ.params,
          name: hQ
        }),
        RQ = IQ(gQ, jQ),
        EQ = TQ(`${jJ}${RQ.key}`, {
          ...RQ.params,
          name: TQ(`${jJ}${JQ.nameKey}`)
        });
      return (0, HT.jsx)(Uz.b, {
        close: XQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, HT.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, HT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, HT.jsxs)("div", {
              children: [(0, HT.jsx)("h2", {
                id: "baf2CoreTitle",
                children: TQ(`${jJ}coreTitle`)
              }), void 0 !== FQ.baf2CoreIslandName && (0, HT.jsx)("p", {
                className: "Baf2CoreIsland",
                children: FQ.baf2CoreIslandName
              }), (0, HT.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, HT.jsx)("span", {
                  children: EQ
                }), (0, HT.jsx)("span", {
                  className: vq()({
                    Full: BQ >= yQ
                  }),
                  children: TQ(`${jJ}coreMachineCount`, {
                    amount: String(BQ),
                    total: String(yQ)
                  })
                }), (0, HT.jsx)("span", {
                  className: vq()({
                    Full: pQ >= GQ
                  }),
                  children: TQ(`${jJ}coreBeltCount`, {
                    amount: String(pQ),
                    total: String(GQ)
                  })
                }), void 0 !== UQ && (0, HT.jsx)("span", {
                  className: vq()({
                    Full: UQ[0] >= UQ[1]
                  }),
                  children: TQ(`${jJ}coreStorageCount`, {
                    amount: String(UQ[0]),
                    total: String(UQ[1])
                  })
                })]
              })]
            }), (0, HT.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [FQ.baf2CoreIslands && (0, HT.jsx)(bz.h, {
                className: "Baf2CoreIslandsButton",
                disabled: zQ,
                onClick: () => {
                  sQ(!0), qQ()
                },
                children: TQ(`${jJ}islandsOpenButton`)
              }), (0, HT.jsx)(bz.o, {
                onClick: XQ
              })]
            })]
          }), (0, HT.jsx)(Sg, {
            tier: gQ,
            shown: aQ,
            tr: QQ => {
              HQ({
                tier: QQ,
                at: gQ,
                ready: bQ
              })
            }
          }), (0, HT.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [AQ, aQ > gQ + 1 && (0, HT.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: IJ(TQ, aQ)
            })]
          }), 6 === aQ && aQ > gQ && (0, HT.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: TQ(`${jJ}coreStagesNote`)
          }), 11 === aQ && aQ > gQ && (0, HT.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: TQ(`${jJ}coreAtomicNote`)
          }), iQ && (0, HT.jsx)(JJ, {
            message: FQ,
            itemNames: PQ,
            next: iQ
          }), !iQ && (0, HT.jsx)(rJ, {
            message: FQ,
            itemNames: PQ,
            shown: aQ
          })]
        })
      })
    }
    const DJ = {
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
    const pJ = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: FT,
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

    function GJ(QQ) {
      return QQ.baf2DropCometOreOnly ? "dropCometOre" : QQ.baf2DropCometIsotope ? "seed" === QQ.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function UJ(QQ) {
      let {
        message: WQ,
        quests: XQ,
        close: qQ,
        leave: TQ
      } = QQ;
      const zQ = tz(),
        {
          t: sQ
        } = (0, lq.C)(),
        FQ = (0, Tg.j)(uq, XQ.get()),
        PQ = function(QQ) {
          var WQ;
          if (!RQ(QQ.tutorial)) return null;
          const XQ = QQ.rows.find((QQ => QQ.current)),
            wQ = XQ ? DJ[XQ.key] : void 0;
          return null !== (WQ = null !== wQ && void 0 !== wQ ? wQ : QQ.side ? DJ[QQ.side.row.key] : void 0) && void 0 !== WQ ? WQ : null
        }(FQ),
        gQ = null === FQ.tier || JT(FQ.tier),
        JQ = gQ ? pJ : pJ.filter((QQ => {
          let {
            item: WQ
          } = QQ;
          return WQ !== FT
        })),
        [rQ, IQ] = (0, wQ.useState)(null),
        jQ = null !== rQ && void 0 !== rQ ? rQ : !WQ.baf2DropFoundSalvage && gQ,
        BQ = WQ.baf2DropRuinDistance,
        yQ = WQ.baf2DropComet,
        VQ = WQ.baf2DropOldWorks,
        DQ = WQ.baf2DropGrove,
        pQ = function(QQ) {
          return 2 + Number(void 0 !== QQ.baf2DropComet) + Number(!!QQ.baf2DropOwedComet || void 0 !== QQ.baf2DropOwedWaitMinutes) + Number(void 0 !== QQ.baf2DropDigDistance) + Number(void 0 !== QQ.baf2DropOldWorks) + Number(void 0 !== QQ.baf2DropGrove)
        }(WQ),
        GQ = QQ => {
          zQ.send(function(QQ) {
            return `baf2drop ${QQ}`
          }(QQ)), TQ()
        };
      let UQ = sQ("buildAFactory2Game:dropRuinNone");
      if (null !== BQ) {
        let QQ = WQ.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        WQ.baf2DropRuinOldWorks && (QQ = "dropRuinOldWorks");
        const XQ = void 0 === WQ.baf2DropRuinCluster ? sQ("buildAFactory2Game:dropRuinOpen") : sQ("buildAFactory2Game:dropRuinCluster", {
          count: String(WQ.baf2DropRuinCluster)
        });
        UQ = `${sQ(`buildAFactory2Game:${QQ}`,{distance:String(BQ)})} ${XQ}`
      }
      let bQ = sQ("buildAFactory2Game:dropBelowDescription");
      void 0 !== WQ.baf2DropBelowLook && (bQ = sQ("buildAFactory2Game:dropBelowLook", {
        look: sQ(WQ.baf2DropBelowLook)
      }));
      const vQ = "buildAFactory2Game:wildsRegion_survivorGrove" === WQ.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        dQ = UT(sQ, 60 * function(QQ) {
          const [WQ, XQ] = (0, wQ.useState)((() => Date.now())), [qQ, TQ] = (0, wQ.useState)(WQ);
          return (0, wQ.useEffect)((() => {
            const QQ = Date.now();
            XQ(QQ), TQ(QQ)
          }), [QQ]), (0, wQ.useEffect)((() => {
            const QQ = window.setInterval((() => {
              TQ(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(QQ)
            }
          }), []), Math.max(1, QQ.baf2DropRenewMinutes - Math.floor((qQ - WQ) / 6e4))
        }(WQ)),
        HQ = function(QQ, WQ, XQ) {
          return "ruin" === QQ && !XQ || "owed" === QQ && !WQ.baf2DropOwedComet ? null : QQ
        }(PQ, WQ, null !== BQ),
        aQ = function(QQ) {
          for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
          return vq()("Baf2DropTile", ...XQ, {
            Wanted: HQ === QQ
          })
        };
      return (0, HT.jsx)(Uz.b, {
        close: qQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, HT.jsxs)("section", {
          className: vq()("Baf2Panel Baf2DropMap", {
            Many: pQ >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, HT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, HT.jsxs)("div", {
              children: [(0, HT.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: sQ("buildAFactory2Game:dropMapTitle")
              }), (0, HT.jsx)("p", {
                children: sQ("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, HT.jsx)(bz.o, {
              onClick: qQ
            })]
          }), (0, HT.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== yQ && (0, HT.jsxs)(bz.G, {
              className: aQ("comet", "Baf2DropComet"),
              onClick: () => {
                GQ("comet")
              },
              children: [(0, HT.jsx)("strong", {
                children: sQ("buildAFactory2Game:dropComet")
              }), (0, HT.jsx)("span", {
                children: sQ(`buildAFactory2Game:${GJ(WQ)}`, {
                  distance: String(yQ)
                })
              })]
            }), WQ.baf2DropOwedComet && (0, HT.jsxs)(bz.G, {
              className: aQ("owed", "Baf2DropComet"),
              onClick: () => {
                GQ("owed")
              },
              children: [(0, HT.jsx)("strong", {
                children: sQ("buildAFactory2Game:dropOwedComet")
              }), (0, HT.jsx)("span", {
                children: WQ.baf2DropOwedIsotope ? sQ("buildAFactory2Game:dropOwedIsotopeDescription") : sQ("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== WQ.baf2DropOwedWaitMinutes && (0, HT.jsxs)(bz.G, {
              className: aQ("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, HT.jsx)("strong", {
                children: sQ("buildAFactory2Game:dropOwedComet")
              }), (0, HT.jsx)("span", {
                children: sQ("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(WQ.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, HT.jsxs)(bz.h, {
              className: aQ("below"),
              onClick: () => {
                GQ("below")
              },
              children: [(0, HT.jsx)("strong", {
                children: sQ("buildAFactory2Game:dropBelow")
              }), (0, HT.jsx)("span", {
                children: bQ
              })]
            }), void 0 !== WQ.baf2DropDigDistance && (0, HT.jsxs)(bz.y, {
              className: aQ("dig"),
              onClick: () => {
                GQ("dig")
              },
              children: [(0, HT.jsx)("strong", {
                children: sQ("buildAFactory2Game:dropDig")
              }), (0, HT.jsx)("span", {
                children: sQ("buildAFactory2Game:dropDigDescription", {
                  distance: String(WQ.baf2DropDigDistance),
                  y: GT(WQ.baf2DropDigY)
                })
              })]
            }), void 0 !== DQ && (0, HT.jsxs)(bz.y, {
              className: aQ("grove", "Baf2DropGrove"),
              onClick: () => {
                GQ("grove")
              },
              children: [(0, HT.jsx)("strong", {
                children: sQ("buildAFactory2Game:dropGrove")
              }), (0, HT.jsx)("span", {
                children: sQ(`buildAFactory2Game:${vQ}`, {
                  distance: String(DQ)
                })
              })]
            }), (0, HT.jsxs)(bz.s, {
              className: aQ("ruin"),
              disabled: null === BQ,
              onClick: () => {
                GQ("ruin")
              },
              children: [(0, HT.jsx)("strong", {
                children: sQ("buildAFactory2Game:dropRuin")
              }), (0, HT.jsx)("span", {
                children: UQ
              })]
            }), void 0 !== VQ && (0, HT.jsxs)(bz.P, {
              className: aQ("works"),
              onClick: () => {
                GQ("works")
              },
              children: [(0, HT.jsx)("strong", {
                children: sQ("buildAFactory2Game:dropOldWorks")
              }), (0, HT.jsx)("span", {
                children: sQ("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(VQ)
                })
              })]
            })]
          }), (0, HT.jsx)("p", {
            className: "Baf2DropRenew",
            children: sQ("buildAFactory2Game:dropRenew", {
              time: dQ
            })
          }), (0, HT.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: jQ,
            onToggle: QQ => {
              QQ.currentTarget.open !== jQ && IQ(QQ.currentTarget.open)
            },
            children: [(0, HT.jsx)("summary", {
              children: sQ("buildAFactory2Game:dropSalvageWhat")
            }), (0, HT.jsx)("p", {
              children: sQ("buildAFactory2Game:dropSalvageIntro")
            }), (0, HT.jsx)("ul", {
              children: JQ.map((QQ => {
                let {
                  item: WQ,
                  nameKey: XQ,
                  useKey: wQ,
                  params: qQ
                } = QQ;
                return (0, HT.jsxs)("li", {
                  children: [(0, HT.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, HT.jsx)(iq.d, {
                      itemName: WQ,
                      amount: 0
                    })
                  }), (0, HT.jsxs)("span", {
                    children: [(0, HT.jsx)("strong", {
                      children: sQ(XQ)
                    }), ": ", sQ(wQ, qQ)]
                  })]
                }, WQ)
              }))
            })]
          })]
        })
      })
    }
    const bJ = "buildAFactory2Game:";

    function vJ(QQ, WQ) {
      return QQ.sendIslandEdit(`baf2coopleave ${WQ.baf2IslandId}`)
    }

    function dJ(QQ) {
      let {
        card: WQ,
        canRename: XQ,
        done: qQ,
        t: TQ
      } = QQ;
      const zQ = tz(),
        [sQ, FQ] = (0, wQ.useState)(WQ.baf2IslandName),
        PQ = vP(sQ),
        gQ = "" === PQ || dP(PQ),
        JQ = () => {
          !gQ && XQ && (PQ !== WQ.baf2IslandName ? qQ(zQ.sendIslandEdit(`baf2islandrename ${WQ.baf2IslandId} ${PQ}`)) : qQ(null))
        },
        rQ = () => {
          qQ(null)
        };
      return (0, HT.jsxs)("div", {
        className: "Baf2IslandForm",
        ...NP(rQ),
        children: [(0, HT.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [TQ(`${bJ}islandsRenameLabel`), (0, HT.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: sQ,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: ZP,
            onChange: QQ => {
              FQ(QQ.target.value)
            },
            ...YP(JQ, rQ)
          })]
        }), "" === PQ && (0, HT.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: TQ(`${bJ}islandsRenameEmpty`)
        }), dP(PQ) && (0, HT.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: TQ(`${bJ}islandsNameReserved`)
        }), (0, HT.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, HT.jsx)(bz.y, {
            disabled: gQ || !XQ,
            onClick: JQ,
            children: TQ(`${bJ}islandsRenameSave`)
          }), (0, HT.jsx)(bz.h, {
            onClick: rQ,
            children: TQ(`${bJ}islandsCancel`)
          })]
        })]
      })
    }

    function HJ(QQ) {
      let {
        card: WQ,
        canDelete: XQ,
        done: qQ,
        t: TQ
      } = QQ;
      const zQ = tz(),
        [sQ, FQ] = (0, wQ.useState)(""),
        PQ = function(QQ, WQ) {
          return vP(QQ).toLowerCase() === vP(WQ).toLowerCase()
        }(sQ, WQ.baf2IslandName),
        gQ = () => {
          PQ && XQ && qQ(zQ.sendIslandEdit(`baf2islanddelete ${WQ.baf2IslandId}`))
        },
        JQ = () => {
          qQ(null)
        },
        rQ = uP("name"),
        [IQ, jQ = ""] = TQ(`${bJ}islandsDeleteConfirm`, {
          name: rQ
        }).split(rQ);
      return (0, HT.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...NP(JQ),
        children: [(0, HT.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, HT.jsxs)("span", {
            children: [IQ, (0, HT.jsx)("strong", {
              children: WQ.baf2IslandName
            }), jQ]
          }), (0, HT.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: sQ,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: ZP,
            onChange: QQ => {
              FQ(QQ.target.value)
            },
            ...YP(gQ, JQ)
          })]
        }), oP(WQ) && (0, HT.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: TQ(`${bJ}islandsDeleteLeftBack`)
        }), (0, HT.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, HT.jsx)(bz.P, {
            disabled: !PQ || !XQ,
            onClick: gQ,
            children: TQ(`${bJ}islandsDeleteForGood`)
          }), (0, HT.jsx)(bz.h, {
            onClick: JQ,
            children: TQ(`${bJ}islandsCancel`)
          })]
        })]
      })
    }

    function aJ(QQ) {
      let {
        members: WQ,
        t: XQ
      } = QQ;
      const wQ = WQ.length;
      return (0, HT.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, HT.jsxs)("span", {
          children: [1 === wQ ? XQ(`${bJ}islandsPlayersOne`) : XQ(`${bJ}islandsPlayers`, {
            count: String(wQ)
          }), " "]
        }), WQ.map(((QQ, WQ) => (0, HT.jsxs)("span", {
          className: vq()("Baf2IslandMember", {
            Here: QQ.baf2MemberHere
          }),
          title: QQ.baf2MemberHere ? XQ(`${bJ}islandsPlayerHere`) : void 0,
          children: [QQ.baf2MemberName, WQ < wQ - 1 ? ", " : ""]
        }, QQ.baf2MemberKey)))]
      })
    }

    function lJ(QQ) {
      let {
        card: WQ,
        answered: XQ,
        nowMs: qQ,
        t: TQ
      } = QQ;
      const zQ = tz(),
        [sQ, FQ] = (0, wQ.useState)(new Map),
        PQ = oP(WQ);
      if (!PQ) return null;
      return (0, HT.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, HT.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: TQ(`${bJ}islandsLeftTitle`)
        }), (0, HT.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: PQ.left.map((QQ => {
            const wQ = QQ.baf2LeftKey,
              gQ = nP(sQ.get(wQ), XQ, qQ),
              JQ = function(QQ) {
                return 1 === QQ ? [`${pP}islandsLeftItemsOne`] : [`${pP}islandsLeftItems`, {
                  count: String(QQ)
                }]
              }(QQ.baf2LeftItems);
            return (0, HT.jsx)("li", {
              className: vq()("Baf2IslandPerson", {
                Pending: gQ
              }),
              children: (0, HT.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, HT.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: QQ.baf2LeftName
                }), (0, HT.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: TQ(JQ[0], JQ[1])
                }), PQ.claim && (0, HT.jsx)(bz.y, {
                  className: "Baf2IslandPersonButton",
                  disabled: gQ,
                  onClick: () => {
                    (QQ => {
                      const XQ = zQ.sendIslandEdit(`baf2coopclaim ${WQ.baf2IslandId} ${QQ}`);
                      FQ((WQ => new Map(WQ).set(QQ, {
                        atMs: Date.now(),
                        answer: XQ
                      })))
                    })(wQ)
                  },
                  children: TQ(`${bJ}islandsClaim`)
                })]
              })
            }, wQ)
          }))
        }), PQ.goThere && (0, HT.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: TQ(`${bJ}islandsClaimGoThere`)
        })]
      })
    }

    function hJ(QQ) {
      let {
        card: WQ,
        view: XQ,
        blocked: qQ,
        maxIslands: TQ,
        answered: zQ,
        nowMs: sQ,
        done: FQ,
        openSocial: PQ,
        t: gQ
      } = QQ;
      const JQ = tz(),
        [rQ, IQ] = (0, wQ.useState)(new Map),
        [jQ, BQ] = (0, wQ.useState)(new Map),
        [yQ, VQ] = (0, wQ.useState)(null),
        DQ = (0, wQ.useRef)(null);
      MP(DQ);
      const pQ = WQ.baf2IslandId,
        GQ = WQ.baf2IslandCoop,
        UQ = null !== GQ && void 0 !== GQ && GQ.baf2CoopMembers.some((QQ => QQ.baf2MemberKey === yQ)) ? yQ : null,
        bQ = function(QQ, WQ) {
          const XQ = QQ.baf2IslandCoop;
          return XQ && eP(XQ) || null !== WQ ? void 0 : QQ.baf2IslandInvitable
        }(WQ, qQ),
        vQ = function(QQ, WQ) {
          const XQ = QQ.baf2IslandCoop;
          return XQ && eP(XQ) ? {
            key: `${pP}islandsCoopFull`,
            params: {
              max: String(XQ.baf2CoopMax)
            }
          } : void 0 !== QQ.baf2IslandInvitable && null === WQ || XQ && !XQ.baf2CoopManageHere ? null : "degraded" === WQ || "stuck" === WQ ? {
            key: `${pP}islandsInviteNotLoaded`
          } : null === WQ || function(QQ) {
            return "notHome" === QQ || "wilds" === QQ || "visiting" === QQ
          }(WQ) || hP(WQ) ? {
            key: `${pP}islandsInviteGoThere`
          } : {
            key: `${pP}islandsInviteBusy`
          }
        }(WQ, qQ),
        dQ = () => {
          var QQ;
          VQ(null), null === (QQ = DQ.current) || void 0 === QQ || QQ.focus()
        };
      return (0, HT.jsxs)("div", {
        ref: DQ,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...NP(null === UQ ? FQ : dQ),
        children: [GQ && (0, HT.jsxs)(HT.Fragment, {
          children: [(0, HT.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: gQ(`${bJ}islandsPlayersTitle`, {
              count: String(GQ.baf2CoopMembers.length),
              max: String(GQ.baf2CoopMax)
            })
          }), (0, HT.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: GQ.baf2CoopMembers.map(((QQ, WQ) => {
              const wQ = QQ.baf2MemberKey,
                qQ = nP(rQ.get(wQ), zQ, sQ);
              return (0, HT.jsxs)("li", {
                className: vq()("Baf2IslandPerson", {
                  Pending: qQ
                }),
                children: [(0, HT.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, HT.jsx)("span", {
                    className: vq()("Baf2IslandPersonName", {
                      Here: QQ.baf2MemberHere
                    }),
                    children: QQ.baf2MemberName
                  }), QQ.baf2MemberHere && (0, HT.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: gQ(`${bJ}islandsPlayerHere`)
                  }), 0 === WQ && (0, HT.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: gQ(`${bJ}islandsPlayerOwner`)
                  }), XQ.remove && WQ > 0 && !qQ && UQ !== wQ && (0, HT.jsx)(bz.Q, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var QQ;
                      VQ(wQ), null === (QQ = DQ.current) || void 0 === QQ || QQ.focus()
                    },
                    children: gQ(`${bJ}islandsRemove`)
                  })]
                }), UQ === wQ && (0, HT.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, HT.jsx)("p", {
                    children: LP(gQ, `${bJ}islandsRemoveConfirm`, {
                      player: QQ.baf2MemberName
                    })
                  }), (0, HT.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, HT.jsx)(bz.P, {
                      onClick: () => {
                        (QQ => {
                          const WQ = JQ.sendIslandEdit(`baf2coopremove ${pQ} ${QQ.baf2MemberKey}`);
                          IQ((XQ => new Map(XQ).set(QQ.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: WQ
                          }))), dQ()
                        })(QQ)
                      },
                      children: gQ(`${bJ}islandsRemoveYes`)
                    }), (0, HT.jsx)(bz.h, {
                      onClick: dQ,
                      children: gQ(`${bJ}islandsCancel`)
                    })]
                  })]
                })]
              }, wQ)
            }))
          })]
        }), (void 0 !== bQ || null !== vQ) && (0, HT.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: gQ(`${bJ}islandsInviteTitle`)
        }), !GQ && (void 0 !== bQ || null !== vQ) && (0, HT.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: gQ(`${bJ}islandsInviteShareNote`)
        }), 0 === (null === bQ || void 0 === bQ ? void 0 : bQ.length) && (0, HT.jsx)(iJ, {
          openSocial: PQ,
          t: gQ
        }), void 0 !== bQ && bQ.length > 0 && (0, HT.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: bQ.map((QQ => {
            const WQ = !0 === QQ.baf2InvitableSent || nP(jQ.get(QQ.baf2InvitableId), zQ, sQ);
            return (0, HT.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, HT.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, HT.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: QQ.baf2InvitableName
                }), QQ.baf2InvitableFull && !WQ && (0, HT.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: gQ(`${bJ}islandsInviteTheirFull`, {
                    max: String(TQ)
                  })
                }), (WQ || !QQ.baf2InvitableFull) && (0, HT.jsx)(bz.y, {
                  className: "Baf2IslandPersonButton",
                  disabled: WQ,
                  onClick: () => {
                    (QQ => {
                      const WQ = JQ.sendIslandEdit(`baf2coopinvite ${pQ} ${QQ}`);
                      BQ((XQ => new Map(XQ).set(QQ, {
                        atMs: Date.now(),
                        answer: WQ
                      })))
                    })(QQ.baf2InvitableId)
                  },
                  children: gQ(WQ ? `${bJ}islandsInvited` : `${bJ}islandsInvite`)
                })]
              })
            }, QQ.baf2InvitableId)
          }))
        }), vQ && (0, HT.jsx)(Xg, {
          note: vQ,
          t: gQ
        }), (0, HT.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, HT.jsx)(bz.h, {
            onClick: FQ,
            children: gQ(`${bJ}islandsDone`)
          })
        })]
      })
    }

    function iJ(QQ) {
      let {
        openSocial: WQ,
        t: XQ
      } = QQ;
      return (0, HT.jsxs)(HT.Fragment, {
        children: [(0, HT.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: XQ(WQ ? `${bJ}islandsInviteNobody` : `${bJ}islandsInviteNobodyGuest`)
        }), WQ && (0, HT.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, HT.jsx)(bz.h, {
            onClick: WQ,
            children: XQ("socialBar:social")
          })
        })]
      })
    }

    function cJ(QQ) {
      let {
        className: WQ,
        text: XQ,
        ConfirmButton: qQ,
        confirmLabel: TQ,
        canConfirm: zQ,
        send: sQ,
        done: FQ,
        t: PQ
      } = QQ;
      const gQ = (0, wQ.useRef)(null);
      MP(gQ);
      const JQ = () => {
        FQ(null)
      };
      return (0, HT.jsxs)("div", {
        ref: gQ,
        tabIndex: -1,
        className: vq()("Baf2IslandForm", WQ),
        ...NP(JQ),
        children: [(0, HT.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: XQ
        }), (0, HT.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, HT.jsx)(qQ, {
            disabled: !zQ,
            onClick: () => {
              zQ && FQ(sQ())
            },
            children: TQ
          }), (0, HT.jsx)(bz.h, {
            onClick: JQ,
            children: PQ(`${bJ}islandsCancel`)
          })]
        })]
      })
    }

    function AJ(QQ) {
      return "hidden" !== QQ
    }

    function RJ(QQ) {
      var WQ, XQ;
      let {
        card: qQ,
        keepOwn: TQ,
        blocked: zQ,
        maxIslands: sQ,
        serverNowMs: FQ,
        nowMs: PQ,
        actions: gQ,
        full: JQ,
        waits: rQ,
        answered: IQ,
        mode: jQ,
        setMode: BQ,
        pending: yQ,
        onSent: VQ,
        switchTo: DQ,
        leave: pQ,
        coopOn: GQ,
        openSocial: UQ,
        t: bQ
      } = QQ;
      const vQ = tz(),
        dQ = qQ.baf2IslandActive,
        HQ = dQ ? null : function(QQ, WQ) {
          if (QQ <= 0) return null;
          const XQ = WQ - QQ;
          if (XQ < yT) return [`${pP}islandsPlayedJustNow`];
          if (XQ < GP) return [`${pP}islandsPlayedMinutes`, {
            minutes: String(Math.floor(XQ / yT))
          }];
          if (XQ < UP) return [`${pP}islandsPlayedHours`, {
            hours: String(Math.floor(XQ / GP))
          }];
          const wQ = Math.floor(XQ / UP);
          return 1 === wQ ? [`${pP}islandsPlayedDay`] : [`${pP}islandsPlayedDays`, {
            days: String(wQ)
          }]
        }(qQ.baf2IslandLastPlayedMs, FQ),
        aQ = void 0 === (lQ = qQ.baf2IslandItems) ? null : 0 === lQ ? [`${pP}islandsItemsNone`] : 1 === lQ ? [`${pP}islandsItemsOne`] : [`${pP}islandsItems`, {
          count: String(lQ)
        }];
      var lQ;
      const hQ = function(QQ) {
          return QQ ? 1 === QQ ? [`${pP}islandsWaitingOne`] : [`${pP}islandsWaiting`, {
            count: String(QQ)
          }] : null
        }(qQ.baf2IslandWaiting),
        iQ = qQ.baf2IslandUnreadable,
        cQ = qQ.baf2IslandCoop,
        AQ = tP(qQ, gQ, TQ, JQ, GQ, zQ),
        RQ = (0, wQ.useRef)(null);
      OP(null !== jQ, RQ);
      const EQ = () => {
          var QQ;
          BQ(null), null === (QQ = RQ.current) || void 0 === QQ || QQ.focus()
        },
        CQ = (QQ, WQ) => {
          EQ(), null !== QQ && VQ(QQ, WQ)
        },
        uQ = (QQ, WQ) => bQ(`${bJ}${QQ}`, {
          time: UT(bQ, WQ)
        });
      return (0, HT.jsxs)("li", {
        ref: RQ,
        tabIndex: -1,
        className: vq()("Baf2IslandCard", {
          Active: dQ,
          Pending: yQ,
          Shared: void 0 !== cQ
        }),
        children: [(0, HT.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, HT.jsx)("strong", {
            className: "Baf2IslandName",
            children: qQ.baf2IslandName
          }), dQ && (0, HT.jsx)("span", {
            className: "Baf2IslandBadge",
            children: bQ(`${bJ}islandsOnThis`)
          }), cQ && (0, HT.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: bQ(`${bJ}islandsShared`)
          })]
        }), "member" === (null === cQ || void 0 === cQ ? void 0 : cQ.baf2CoopRole) && (0, HT.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: LP(bQ, `${bJ}islandsSharedBy`, {
            owner: cQ.baf2CoopOwner
          })
        }), void 0 !== iQ && (0, HT.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: bQ("newer" === iQ ? `${bJ}islandsUnreadable` : `${bJ}islandsDamaged`)
        }), "corrupt" === iQ && JQ && (0, HT.jsx)("p", {
          className: "Baf2IslandStats",
          children: bQ(`${bJ}islandsDamagedFull`)
        }), void 0 === iQ && (0, HT.jsxs)(HT.Fragment, {
          children: [(0, HT.jsx)(Wg, {
            tier: qQ.baf2IslandTier,
            t: bQ
          }), (0, HT.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, HT.jsx)("span", {
              children: 1 === qQ.baf2IslandQuestsDone ? bQ(`${bJ}islandsQuestsDoneOne`) : bQ(`${bJ}islandsQuestsDone`, {
                count: String(qQ.baf2IslandQuestsDone)
              })
            }), (0, HT.jsx)("span", {
              children: 1 === qQ.baf2IslandMachines ? bQ(`${bJ}islandsMachinesOne`) : bQ(`${bJ}islandsMachines`, {
                count: String(qQ.baf2IslandMachines)
              })
            }), aQ && (0, HT.jsx)("span", {
              children: bQ(aQ[0], aQ[1])
            }), hQ && (0, HT.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: bQ(hQ[0], hQ[1])
            }), HQ && (0, HT.jsx)("span", {
              children: bQ(HQ[0], HQ[1])
            })]
          })]
        }), cQ && void 0 === cQ.baf2CoopState && "people" !== jQ && (0, HT.jsx)(aJ, {
          members: cQ.baf2CoopMembers,
          t: bQ
        }), null === jQ && (0, HT.jsx)(lJ, {
          card: qQ,
          answered: IQ,
          nowMs: PQ,
          t: bQ
        }), AQ.note && (0, HT.jsx)(Xg, {
          note: AQ.note,
          className: vq()({
            Unreachable: void 0 !== (null === cQ || void 0 === cQ ? void 0 : cQ.baf2CoopState)
          }),
          t: bQ
        }), "rename" === jQ && (0, HT.jsx)(dJ, {
          card: qQ,
          canRename: "enabled" === AQ.rename,
          done: CQ,
          t: bQ
        }), "delete" === jQ && (0, HT.jsx)(HJ, {
          card: qQ,
          canDelete: "enabled" === AQ.delete,
          done: QQ => {
            CQ(QQ, cQ ? "delete" : void 0)
          },
          t: bQ
        }), "people" === jQ && (0, HT.jsx)(hJ, {
          card: qQ,
          view: AQ,
          blocked: zQ,
          maxIslands: sQ,
          answered: IQ,
          nowMs: PQ,
          done: EQ,
          openSocial: UQ,
          t: bQ
        }), "leave" === jQ && (0, HT.jsx)(cJ, {
          className: "Leave",
          text: LP(bQ, `${bJ}islandsLeaveConfirm`, {
            island: qQ.baf2IslandName,
            owner: null !== (WQ = null === (XQ = qQ.baf2IslandCoop) || void 0 === XQ ? void 0 : XQ.baf2CoopOwner) && void 0 !== WQ ? WQ : ""
          }),
          ConfirmButton: bz.P,
          confirmLabel: bQ(`${bJ}islandsLeaveYes`),
          canConfirm: "enabled" === AQ.leave,
          send: () => vJ(vQ, qQ),
          done: QQ => {
            CQ(QQ, "leave"), null !== QQ && dQ && pQ()
          },
          t: bQ
        }), "unshare" === jQ && (0, HT.jsx)(cJ, {
          className: "Unshare",
          text: LP(bQ, `${bJ}islandsStopSharingConfirm`, {
            island: qQ.baf2IslandName
          }),
          ConfirmButton: bz.y,
          confirmLabel: bQ(`${bJ}islandsStopSharing`),
          canConfirm: "enabled" === AQ.unshare,
          send: () => vQ.sendIslandEdit(`baf2coopunshare ${qQ.baf2IslandId}`),
          done: QQ => {
            CQ(QQ), null !== QQ && pQ()
          },
          t: bQ
        }), null === jQ && !yQ && (0, HT.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": qQ.baf2IslandName,
          children: [AJ(AQ.switch) && (0, HT.jsx)(bz.y, {
            disabled: "enabled" !== AQ.switch,
            onClick: DQ,
            children: "tryAgain" === AQ.switchLabel ? bQ(`${bJ}islandsTryAgain`) : rQ.switch > 0 ? uQ("islandsSwitchIn", rQ.switch) : bQ(`${bJ}islandsSwitch`)
          }), AJ(AQ.rename) && (0, HT.jsx)(bz.h, {
            disabled: "enabled" !== AQ.rename,
            onClick: () => {
              BQ("rename")
            },
            children: bQ(`${bJ}islandsRename`)
          }), AJ(AQ.people) && (0, HT.jsx)(bz.h, {
            disabled: "enabled" !== AQ.people,
            onClick: () => {
              BQ("people")
            },
            children: bQ("players" === AQ.peopleLabel ? `${bJ}islandsPlayersButton` : `${bJ}islandsInviteButton`)
          }), AJ(AQ.unshare) && (0, HT.jsx)(bz.h, {
            disabled: "enabled" !== AQ.unshare,
            onClick: () => {
              BQ("unshare")
            },
            children: bQ(`${bJ}islandsStopSharing`)
          }), AJ(AQ.dismiss) && (0, HT.jsx)(bz.h, {
            disabled: "enabled" !== AQ.dismiss,
            onClick: () => {
              VQ(vJ(vQ, qQ), "dismiss"), dQ && pQ()
            },
            children: bQ(`${bJ}islandsDismiss`)
          }), AJ(AQ.leave) && (0, HT.jsx)(bz.Q, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== AQ.leave,
            onClick: () => {
              BQ("leave")
            },
            children: dQ && rQ.switch > 0 ? uQ("islandsLeaveIn", rQ.switch) : bQ(`${bJ}islandsLeave`)
          }), AJ(AQ.delete) && (0, HT.jsx)(bz.Q, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== AQ.delete,
            onClick: () => {
              BQ("delete")
            },
            children: rQ.change > 0 && AQ.deleteWaits ? uQ("islandsDeleteIn", rQ.change) : bQ(`${bJ}islandsDelete`)
          })]
        })]
      })
    }
    const EJ = "buildAFactory2Game:";

    function CJ(QQ) {
      let {
        invite: WQ,
        actions: XQ,
        full: qQ,
        maxIslands: TQ,
        waitSeconds: zQ,
        focus: sQ,
        focused: FQ,
        join: PQ,
        decline: gQ,
        t: JQ
      } = QQ;
      const [rQ, IQ] = (0, wQ.useState)(!1), jQ = (0, wQ.useRef)(null);
      OP(rQ, jQ), (0, wQ.useEffect)((() => {
        var QQ;
        sQ && (IQ(!0), null === (QQ = jQ.current) || void 0 === QQ || QQ.focus(), FQ())
      }), [sQ, FQ]);
      const BQ = function(QQ, WQ, XQ, wQ, qQ) {
          return XQ ? {
            join: !1,
            note: {
              key: `${pP}islandsJoinTooMany`,
              params: {
                max: String(wQ)
              }
            }
          } : QQ.baf2InvitePlayers >= qQ ? {
            join: !1,
            note: {
              key: `${pP}islandsJoinFull`
            }
          } : {
            join: WQ.switch,
            note: null
          }
        }(WQ, XQ, qQ, TQ, 10),
        yQ = WQ.baf2InviteIsland,
        VQ = WQ.baf2InvitePlayers,
        DQ = () => {
          var QQ;
          IQ(!1), null === (QQ = jQ.current) || void 0 === QQ || QQ.focus()
        },
        pQ = zQ > 0 && null === BQ.note ? JQ(`${EJ}islandsJoinIn`, {
          time: UT(JQ, zQ)
        }) : JQ(`${EJ}islandsJoin`);
      return (0, HT.jsxs)("li", {
        ref: jQ,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...rQ ? NP(DQ) : {},
        children: [(0, HT.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, HT.jsx)("strong", {
            className: "Baf2IslandName",
            children: yQ
          })
        }), (0, HT.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: LP(JQ, `${EJ}islandsInvitedBy`, {
            owner: WQ.baf2InviteOwner
          })
        }), (0, HT.jsx)(Wg, {
          tier: WQ.baf2InviteTier,
          t: JQ
        }), (0, HT.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, HT.jsx)("span", {
            children: 1 === VQ ? JQ(`${EJ}islandsPlayersCountOne`) : JQ(`${EJ}islandsPlayersCount`, {
              count: String(VQ)
            })
          })
        }), BQ.note && (0, HT.jsx)(Xg, {
          note: BQ.note,
          t: JQ
        }), rQ && (0, HT.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: LP(JQ, `${EJ}islandsJoinConfirm`, {
            island: yQ
          })
        }), !rQ && (0, HT.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": yQ,
          children: [(0, HT.jsx)(bz.y, {
            disabled: !BQ.join,
            onClick: () => {
              var QQ;
              IQ(!0), null === (QQ = jQ.current) || void 0 === QQ || QQ.focus()
            },
            children: pQ
          }), (0, HT.jsx)(bz.h, {
            onClick: gQ,
            children: JQ(`${EJ}islandsDecline`)
          })]
        }), rQ && (0, HT.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, HT.jsx)(bz.y, {
            disabled: !BQ.join,
            onClick: PQ,
            children: JQ(`${EJ}islandsJoinYes`)
          }), (0, HT.jsx)(bz.h, {
            onClick: DQ,
            children: JQ(`${EJ}islandsCancel`)
          })]
        })]
      })
    }

    function uJ(QQ) {
      let {
        invites: WQ,
        actions: XQ,
        full: wQ,
        maxIslands: qQ,
        waitSeconds: TQ,
        focus: zQ,
        focused: sQ,
        leave: FQ,
        declined: PQ,
        t: gQ
      } = QQ;
      const JQ = tz();
      return (0, HT.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, HT.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: gQ(`${EJ}islandsInvitesTitle`)
        }), (0, HT.jsx)("ul", {
          className: "Baf2IslandCards",
          children: WQ.map((QQ => {
            const WQ = QQ.baf2InviteId;
            return (0, HT.jsx)(CJ, {
              invite: QQ,
              actions: XQ,
              full: wQ,
              maxIslands: qQ,
              waitSeconds: TQ,
              focus: zQ === WQ,
              focused: sQ,
              join: () => {
                JQ.send(`baf2coopaccept ${WQ}`), FQ()
              },
              decline: () => {
                JQ.send(`baf2coopdecline ${WQ}`), PQ(WQ)
              },
              t: gQ
            }, WQ)
          }))
        })]
      })
    }
    const LJ = "buildAFactory2Game:";

    function kJ(QQ) {
      let {
        cards: WQ,
        activeName: XQ,
        canStart: qQ,
        waitSeconds: TQ,
        leave: zQ,
        t: sQ
      } = QQ;
      const FQ = tz(),
        [PQ, gQ] = (0, wQ.useState)(!1),
        [JQ, rQ] = (0, wQ.useState)(""),
        IQ = (0, wQ.useRef)(null);
      OP(PQ, IQ), (0, wQ.useEffect)((() => {
        var QQ;
        PQ && (null === (QQ = IQ.current) || void 0 === QQ || QQ.focus())
      }), [PQ]);
      const jQ = HP(WQ),
        BQ = vP(JQ),
        yQ = dP(BQ),
        VQ = () => {
          qQ && !yQ && (FQ.send("" === BQ || BQ === jQ ? ZQ : `${ZQ} ${BQ}`), zQ())
        },
        DQ = () => {
          var QQ;
          gQ(!1), null === (QQ = IQ.current) || void 0 === QQ || QQ.focus()
        };
      return (0, HT.jsxs)("li", {
        ref: IQ,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...PQ ? NP(DQ) : {},
        children: [(0, HT.jsx)("strong", {
          className: "Baf2IslandName",
          children: sQ(`${LJ}islandsNewTitle`)
        }), !PQ && (0, HT.jsx)("p", {
          className: "Baf2IslandStats",
          children: sQ(`${LJ}islandsNewNote`)
        }), PQ && (0, HT.jsxs)(HT.Fragment, {
          children: [(0, HT.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: LP(sQ, `${LJ}islandsNewConfirm`, {
              name: XQ
            })
          }), (0, HT.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [sQ(`${LJ}islandsNewNameLabel`), (0, HT.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: JQ,
              placeholder: jQ,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: ZP,
              onChange: QQ => {
                rQ(QQ.target.value)
              },
              ...YP(VQ, DQ)
            })]
          }), yQ && (0, HT.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: sQ(`${LJ}islandsNameReserved`)
          })]
        }), (0, HT.jsxs)("div", {
          className: vq()("Baf2IslandButtons", {
            Stacked: PQ
          }),
          children: [(0, HT.jsx)(bz.y, {
            disabled: !qQ || PQ && yQ,
            onClick: () => {
              if (!PQ) return rQ(jQ), void gQ(!0);
              VQ()
            },
            children: TQ > 0 ? sQ(`${LJ}islandsNewIn`, {
              time: UT(sQ, TQ)
            }) : sQ(PQ ? `${LJ}islandsNewConfirmButton` : `${LJ}islandsNew`)
          }), PQ && (0, HT.jsx)(bz.h, {
            onClick: DQ,
            children: sQ(`${LJ}islandsCancel`)
          })]
        })]
      })
    }

    function fJ(QQ) {
      var WQ, XQ;
      let {
        message: qQ,
        arrivedAtMs: TQ,
        close: zQ,
        leave: sQ,
        openSocial: FQ
      } = QQ;
      const PQ = tz(),
        {
          t: gQ
        } = (0, lq.C)(),
        JQ = Qg(1e3),
        [rQ, IQ] = (0, wQ.useState)(null),
        [jQ, BQ] = (0, wQ.useState)(new Map),
        [yQ, VQ] = (0, wQ.useState)(new Set),
        DQ = qQ.baf2IslandCards,
        pQ = function(QQ, WQ, XQ, wQ) {
          return (null !== QQ && void 0 !== QQ ? QQ : []).filter((QQ => WQ + QQ.baf2InviteLeftMs > XQ && !wQ.has(QQ.baf2InviteId)))
        }(qQ.baf2IslandsInvites, TQ, JQ, yQ),
        GQ = pQ.map((QQ => QQ.baf2InviteId)).join(" "),
        UQ = (0, wQ.useRef)(null),
        bQ = KP(UQ);
      mP(), (0, wQ.useEffect)((() => {
        var QQ, WQ;
        null !== (QQ = UQ.current) && void 0 !== QQ && QQ.contains(document.activeElement) || (null === (WQ = UQ.current) || void 0 === WQ || WQ.focus())
      }), [qQ, GQ]), (0, wQ.useEffect)((() => {
        BQ((QQ => function(QQ, WQ, XQ, wQ) {
          const qQ = new Map;
          for (const TQ of WQ) {
            const WQ = QQ.get(TQ.baf2IslandId);
            WQ && (void 0 !== WQ.untilGone || wQ < WQ.answer) && RP(WQ, TQ, XQ) && qQ.set(TQ.baf2IslandId, WQ)
          }
          return qQ.size === QQ.size ? QQ : qQ
        }(QQ, qQ.baf2IslandCards, Date.now(), qQ.baf2IslandsAnswered)))
      }), [qQ]);
      const vQ = bP(TQ, qQ.baf2IslandsWaitMs, JQ),
        dQ = qQ.baf2IslandsBlocked,
        HQ = iP(dQ, vQ),
        aQ = function(QQ, WQ) {
          const XQ = iP(QQ, 0);
          return {
            switch: XQ.switch ? WQ : 0,
            change: XQ.change ? WQ : 0
          }
        }(dQ, vQ),
        lQ = DQ.length >= qQ.baf2IslandsMax,
        hQ = DQ.length > 0,
        iQ = function(QQ, WQ, XQ) {
          return QQ + Math.max(0, XQ - WQ)
        }(qQ.baf2IslandsNowMs, TQ, JQ),
        cQ = null !== (WQ = null === (XQ = DQ.find((QQ => QQ.baf2IslandActive))) || void 0 === XQ ? void 0 : XQ.baf2IslandName) && void 0 !== WQ ? WQ : "",
        AQ = function(QQ) {
          const WQ = QQ.filter(SP).length;
          return WQ <= 1 && WQ < QQ.length
        }(DQ),
        RQ = !0 === qQ.baf2IslandsCoop,
        EQ = function(QQ, WQ) {
          const XQ = QQ.find((QQ => QQ.baf2IslandActive)),
            wQ = null === XQ || void 0 === XQ ? void 0 : XQ.baf2IslandCoop;
          return XQ && "member" === (null === wQ || void 0 === wQ ? void 0 : wQ.baf2CoopRole) ? {
            key: `${pP}islandsKeepOwnMember`,
            names: {
              owner: wQ.baf2CoopOwner,
              island: XQ.baf2IslandName
            }
          } : {
            key: WQ ? `${pP}islandsKeepOwn` : `${pP}islandsKeepOwnSolo`
          }
        }(DQ, RQ),
        [CQ, uQ] = (0, wQ.useState)(null);
      (0, wQ.useEffect)((() => {
        void 0 !== qQ.baf2IslandsFocusInvite && uQ(qQ.baf2IslandsFocusInvite)
      }), [qQ]);
      const LQ = (0, wQ.useCallback)((() => {
          uQ(null)
        }), []),
        kQ = rQ ? DQ.find((QQ => QQ.baf2IslandId === rQ.id)) : void 0,
        fQ = rQ && kQ && "hidden" !== tP(kQ, HQ, AQ, lQ, RQ, dQ)[rQ.mode] ? rQ : null;
      return (0, HT.jsx)(Uz.b, {
        close: zQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, HT.jsxs)("section", {
          ref: UQ,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: bQ ? {
            marginTop: `${bQ.marginTop}px`,
            maxHeight: `${bQ.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, HT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, HT.jsxs)("div", {
              children: [(0, HT.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: gQ(`${LJ}islandsTitle`)
              }), hQ && (0, HT.jsx)("p", {
                children: gQ(`${LJ}islandsSubtitle`, {
                  count: String(DQ.length),
                  max: String(qQ.baf2IslandsMax)
                })
              })]
            }), (0, HT.jsx)(bz.o, {
              ariaLabel: gQ(`${LJ}islandsClose`),
              onClick: zQ
            })]
          }), (0, HT.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== dQ && (0, HT.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: LP(gQ, aP(dQ, lP(DQ)), {
                island: cQ
              })
            }), hQ && pQ.length > 0 && (0, HT.jsx)(uJ, {
              invites: pQ,
              actions: HQ,
              full: lQ,
              maxIslands: qQ.baf2IslandsMax,
              waitSeconds: aQ.switch,
              focus: CQ,
              focused: LQ,
              leave: sQ,
              declined: QQ => {
                VQ((WQ => new Set(WQ).add(QQ)))
              },
              t: gQ
            }), hQ && (0, HT.jsxs)(HT.Fragment, {
              children: [lQ && (0, HT.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: gQ(`${LJ}islandsFull`, {
                  max: String(qQ.baf2IslandsMax)
                })
              }), (0, HT.jsx)("p", {
                className: "Baf2IslandsNote",
                children: LP(gQ, EQ.key, EQ.names)
              }), (0, HT.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [DQ.map((QQ => {
                  const WQ = QQ.baf2IslandId;
                  return (0, HT.jsx)(RJ, {
                    card: QQ,
                    keepOwn: AQ,
                    coopOn: RQ,
                    openSocial: FQ,
                    blocked: dQ,
                    maxIslands: qQ.baf2IslandsMax,
                    serverNowMs: iQ,
                    nowMs: JQ,
                    actions: HQ,
                    full: lQ,
                    waits: aQ,
                    answered: qQ.baf2IslandsAnswered,
                    mode: (null === fQ || void 0 === fQ ? void 0 : fQ.id) === WQ ? fQ.mode : null,
                    setMode: QQ => {
                      IQ(null === QQ ? null : {
                        id: WQ,
                        mode: QQ
                      })
                    },
                    pending: RP(jQ.get(WQ), QQ, JQ),
                    onSent: (XQ, wQ) => {
                      BQ((qQ => {
                        const TQ = {
                          atMs: Date.now(),
                          from: QQ.baf2IslandName,
                          answer: XQ
                        };
                        return new Map(qQ).set(WQ, wQ ? {
                          ...TQ,
                          untilGone: wQ
                        } : TQ)
                      }))
                    },
                    leave: sQ,
                    switchTo: () => {
                      PQ.send(`baf2islandswitch ${WQ}`), sQ()
                    },
                    t: gQ
                  }, WQ)
                })), !lQ && (0, HT.jsx)(kJ, {
                  cards: DQ,
                  activeName: cQ,
                  canStart: HQ.change,
                  waitSeconds: aQ.change,
                  leave: sQ,
                  t: gQ
                })]
              })]
            })]
          })]
        })
      })
    }
    var SJ = XQ(5376);
    const tJ = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        Hw: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      oJ = Object.keys(tJ),
      eJ = new Set([...Object.keys(ZW), ...[...EW.Press.recipes, ...EW["Wire Mill"].recipes].map((QQ => QQ.output))]),
      nJ = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      xJ = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      YJ = / Bar$|Alloy$/,
      NJ = /Porkchop|Beef|Mutton|Venison|Steak/,
      ZJ = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const OJ = (0, wQ.memo)((function(QQ) {
      let {
        item: WQ,
        name: XQ,
        amount: wQ,
        selected: qQ,
        small: TQ,
        onPick: zQ
      } = QQ;
      return (0, HT.jsxs)("button", {
        type: "button",
        className: vq()("Baf2TermTile", {
          On: qQ,
          Small: TQ
        }),
        "aria-label": `${XQ}: ${wQ}`,
        "aria-pressed": qQ,
        onClick: () => {
          zQ(WQ)
        },
        children: [(0, HT.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, HT.jsx)(iq.d, {
            itemName: WQ,
            amount: 0
          })
        }), (0, HT.jsx)("span", {
          className: "Baf2TermCount",
          children: pT(wQ, 1e4)
        }), !TQ && (0, HT.jsx)("span", {
          className: "Baf2TermName",
          children: XQ
        })]
      })
    }));

    function KJ(QQ) {
      let {
        store: WQ,
        close: XQ,
        send: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, lq.C)(), {
        isTouchScreen: zQ
      } = (0, Gq.n)(["isTouchScreen"]);
      ! function(QQ) {
        const [WQ, XQ] = (0, wQ.useState)(QQ.version);
        (0, wQ.useEffect)((() => (XQ(QQ.version), QQ.subscribe((() => {
          XQ(QQ.version)
        })))), [QQ])
      }(WQ);
      const [sQ, FQ] = (0, wQ.useState)("all"), [PQ, gQ] = (0, wQ.useState)(!1), [JQ, rQ] = (0, wQ.useState)(""), [IQ, jQ] = (0, wQ.useState)(""), [BQ, yQ] = (0, wQ.useState)(null), [VQ, DQ] = (0, wQ.useState)(!1), [pQ, GQ, UQ] = function() {
        const QQ = (0, wQ.useRef)(null),
          [WQ, XQ] = (0, wQ.useState)(!1),
          qQ = () => {
            const WQ = QQ.current;
            XQ(null !== WQ && WQ.scrollLeft + WQ.clientWidth < WQ.scrollWidth - 1)
          };
        return (0, wQ.useEffect)(qQ), (0, wQ.useEffect)((() => {
          const WQ = QQ.current;
          if (!WQ) return;
          const XQ = new ResizeObserver(qQ);
          return XQ.observe(WQ), () => {
            XQ.disconnect()
          }
        }), []), [QQ, WQ, qQ]
      }(), bQ = (0, wQ.useMemo)((() => new Map), [TQ]), vQ = QQ => {
        let WQ = bQ.get(QQ);
        return void 0 === WQ && (WQ = function(QQ, WQ) {
          const XQ = /^(.+) \((.+)\)$/.exec(QQ);
          return XQ ? WQ(XQ[2], XQ[1]) : QQ
        }(qT(TQ, QQ), ((QQ, WQ) => TQ("buildAFactory2Game:terminalTileKind", {
          kind: QQ,
          base: WQ
        }))), bQ.set(QQ, WQ)), WQ
      }, dQ = WQ.isReadOnly(), HQ = VQ && !dQ, aQ = WQ.recent(), lQ = WQ.items(), hQ = IQ.trim().toLowerCase(), iQ = HQ ? WQ.heldItems(BQ) : ("recent" === sQ ? aQ : lQ).filter((QQ => {
        const WQ = vQ(QQ);
        return ("all" === sQ || "recent" === sQ || function(QQ) {
          return rT(QQ) ? "farm" : nJ.test(QQ) ? "nuclear" : YJ.test(QQ) ? "bars" : NJ.test(QQ) ? "farm" : xJ.test(QQ) ? "Hw" : eJ.has(QQ) ? "parts" : ZJ.test(QQ) ? "farm" : "other"
        }(QQ) === sQ) && ("" === hQ || WQ.toLowerCase().includes(hQ)) && ("" === JQ || WQ.toUpperCase().startsWith(JQ))
      })), cQ = new Set(lQ.map((QQ => vQ(QQ).charAt(0).toUpperCase()))), AQ = QQ => HQ ? WQ.heldAmount(QQ) : WQ.amount(QQ), RQ = !HQ && "recent" !== sQ && aQ.length > 0, EQ = function(QQ, WQ) {
        return null !== QQ && WQ.includes(QQ) ? QQ : null
      }(BQ, RQ ? [...iQ, ...aQ] : iQ), CQ = null === EQ ? 0 : WQ.amount(EQ), uQ = null === EQ ? 0 : AQ(EQ), LQ = (0, wQ.useCallback)((QQ => {
        yQ((WQ => WQ === QQ ? null : QQ))
      }), []), kQ = QQ => uQ > 0 || HQ && null === EQ && "fill" === QQ && iQ.length > 0, fQ = HQ ? [
        ["one", TQ("buildAFactory2Game:terminalStoreOne")],
        ["stack", TQ("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", TQ(null === EQ ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", TQ("buildAFactory2Game:terminalTakeOne")],
        ["stack", TQ("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", TQ("buildAFactory2Game:terminalFill")]
      ], SQ = HQ ? TQ("buildAFactory2Game:terminalStoreEmpty") : "" !== JQ ? TQ("buildAFactory2Game:terminalEmptyLetter", {
        letter: JQ
      }) : "" !== hQ ? TQ("buildAFactory2Game:terminalEmptySearch", {
        query: IQ
      }) : TQ("buildAFactory2Game:terminalEmpty");
      return (0, HT.jsx)(Uz.b, {
        close: XQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, HT.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, HT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, HT.jsxs)("div", {
              children: [(0, HT.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: TQ(WQ.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, HT.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, HT.jsx)("span", {
                  className: vq()({
                    Off: HQ
                  }),
                  children: TQ("buildAFactory2Game:terminalSubtitle", {
                    count: String(WQ.siloCount())
                  })
                }), !dQ && (0, HT.jsx)("span", {
                  className: vq()({
                    Off: !HQ
                  }),
                  children: TQ("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !dQ && (0, HT.jsx)(SJ.d, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: TQ("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: TQ("buildAFactory2Game:terminalModeStore")
              }],
              value: HQ ? "store" : "take",
              onChange: QQ => {
                DQ("store" === QQ), yQ(null)
              },
              ariaLabel: TQ("buildAFactory2Game:terminalModes")
            }), (0, HT.jsx)(bz.o, {
              onClick: XQ
            })]
          }), (0, HT.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, HT.jsxs)("div", {
              className: vq()("Baf2TermTools", {
                Hidden: HQ
              }),
              children: [(0, HT.jsx)("div", {
                ref: pQ,
                className: vq()("Baf2TermChips", {
                  MoreRight: GQ
                }),
                onScroll: UQ,
                children: PQ ? (0, HT.jsxs)(HT.Fragment, {
                  children: [(0, HT.jsx)("button", {
                    type: "button",
                    "aria-label": TQ("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      gQ(!1), rQ("")
                    },
                    children: "\u2190"
                  }), [...cQ].sort().map((QQ => (0, HT.jsx)("button", {
                    type: "button",
                    className: vq()({
                      On: JQ === QQ
                    }),
                    onClick: () => {
                      rQ(JQ === QQ ? "" : QQ)
                    },
                    children: QQ
                  }, QQ)))]
                }) : (0, HT.jsxs)(HT.Fragment, {
                  children: [(0, HT.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      gQ(!0)
                    },
                    children: TQ("buildAFactory2Game:terminalLetters")
                  }), oJ.map((QQ => (0, HT.jsx)("button", {
                    type: "button",
                    className: vq()({
                      On: sQ === QQ
                    }),
                    onClick: () => {
                      FQ(QQ)
                    },
                    children: TQ(tJ[QQ])
                  }, QQ)))]
                })
              }), !zQ && (0, HT.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: IQ,
                placeholder: TQ("buildAFactory2Game:terminalSearch"),
                "aria-label": TQ("buildAFactory2Game:terminalSearch"),
                onChange: QQ => {
                  jQ(QQ.target.value)
                },
                onKeyDown: QQ => {
                  QQ.stopPropagation()
                }
              }), (0, HT.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": TQ("buildAFactory2Game:terminalResort"),
                title: TQ("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  WQ.resort()
                },
                children: "\u21c5"
              })]
            }), RQ && (0, HT.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, HT.jsx)("span", {
                children: TQ(tJ.recent)
              }), aQ.map((QQ => (0, HT.jsx)(OJ, {
                item: QQ,
                name: vQ(QQ),
                amount: WQ.amount(QQ),
                selected: EQ === QQ,
                small: !0,
                onPick: LQ
              }, QQ)))]
            }), (0, HT.jsx)("div", {
              className: "Baf2TermTiles",
              children: iQ.length > 0 ? iQ.map((QQ => (0, HT.jsx)(OJ, {
                item: QQ,
                name: vQ(QQ),
                amount: AQ(QQ),
                selected: EQ === QQ,
                onPick: LQ
              }, QQ))) : (0, HT.jsx)("p", {
                className: "Baf2TermEmpty",
                children: SQ
              })
            }), (0, HT.jsxs)("div", {
              className: vq()("Baf2TermActions", {
                Hidden: HQ && 0 === iQ.length
              }),
              children: [(0, HT.jsx)("span", {
                className: "Baf2TermPicked",
                children: dQ ? (0, HT.jsxs)(HT.Fragment, {
                  children: [null !== EQ && CQ > 0 ? vQ(EQ) : TQ("buildAFactory2Game:terminalVisiting"), (0, HT.jsx)("small", {
                    children: TQ("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== EQ ? (0, HT.jsxs)(HT.Fragment, {
                  children: [vQ(EQ), (0, HT.jsx)("small", {
                    children: TQ("buildAFactory2Game:terminalStored", {
                      amount: CQ.toLocaleString()
                    })
                  })]
                }) : TQ(HQ ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !dQ && fQ.map((QQ => {
                let [XQ, wQ] = QQ;
                const TQ = "fill" === XQ ? bz.s : bz.h;
                return (0, HT.jsx)(TQ, {
                  className: "Baf2TermTake",
                  disabled: !kQ(XQ),
                  onClick: () => {
                    (QQ => {
                      kQ(QQ) && qQ(null === EQ ? WQ.putAll() : HQ ? WQ.put(QQ, EQ) : WQ.take(QQ, EQ))
                    })(XQ)
                  },
                  children: wQ
                }, XQ)
              }))]
            })]
          })]
        })
      })
    }

    function mJ(QQ) {
      let {
        kind: WQ,
        icon: XQ,
        label: wQ,
        number: qQ,
        preview: TQ,
        note: zQ,
        tone: sQ = null,
        share: FQ,
        onExplain: PQ
      } = QQ;
      return (0, HT.jsxs)("button", {
        type: "button",
        className: vq()("NxLane", WQ, {
          Warn: "warn" === sQ,
          Danger: "danger" === sQ
        }),
        onClick: PQ,
        children: [(0, HT.jsxs)("span", {
          className: "NxLaneHead",
          children: [XQ, (0, HT.jsx)("span", {
            className: "NxLaneLabel",
            children: wQ
          })]
        }), (0, HT.jsxs)("span", {
          className: "NxLaneNum",
          children: [qQ, TQ && (0, HT.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", TQ]
          })]
        }), (0, HT.jsx)("span", {
          className: "NxLaneNote",
          children: zQ
        }), void 0 !== FQ && (0, HT.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, FQ)) + "%"
          }
        })]
      })
    }

    function MJ(QQ) {
      let {
        kind: WQ,
        step: XQ,
        short: wQ,
        planned: qQ
      } = QQ;
      return (0, HT.jsx)("i", {
        className: vq()("NxPipe", WQ, `Step${XQ}`, {
          Short: wQ,
          Planned: qQ
        }),
        "aria-hidden": "true"
      })
    }

    function Qr(QQ) {
      let {
        max: WQ,
        bands: XQ,
        ticks: wQ,
        now: qQ,
        settle: TQ,
        settleTone: zQ,
        onExplain: sQ
      } = QQ;
      const FQ = QQ => Math.max(0, Math.min(WQ, QQ)) / WQ * 100 + "%";
      let PQ = 0;
      return (0, HT.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: sQ,
        children: [(0, HT.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [XQ.map((QQ => {
            const WQ = {
              bottom: FQ(PQ),
              height: `calc(${FQ(QQ.upTo)} - ${FQ(PQ)})`
            };
            return PQ = QQ.upTo, (0, HT.jsx)("i", {
              className: vq()("NxGaugeBand", QQ.kind),
              style: WQ
            }, QQ.kind)
          })), null !== qQ && (0, HT.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: FQ(qQ)
            }
          }), void 0 !== TQ && null !== TQ && (0, HT.jsx)("i", {
            className: vq()("NxGaugeSettle", {
              Bad: "bad" === zQ
            }),
            style: {
              bottom: FQ(TQ)
            }
          })]
        }), (0, HT.jsx)("span", {
          className: "NxGaugeTicks",
          children: wQ.map((QQ => (0, HT.jsx)("small", {
            style: {
              bottom: FQ(QQ)
            },
            children: QQ
          }, QQ)))
        })]
      })
    }

    function Wr(QQ) {
      const [WQ, XQ] = (0, wQ.useState)(null), [qQ, TQ] = (0, wQ.useState)((() => {
        try {
          return null === window.localStorage.getItem(QQ)
        } catch {
          return !1
        }
      })), zQ = (0, wQ.useRef)(null);
      (0, wQ.useEffect)((() => () => {
        null !== zQ.current && clearTimeout(zQ.current)
      }), []);
      const sQ = (0, wQ.useCallback)((WQ => {
          XQ(WQ), TQ(!1);
          try {
            window.localStorage.setItem(QQ, "1")
          } catch {}
          null !== zQ.current && clearTimeout(zQ.current), zQ.current = setTimeout((() => {
            zQ.current = null, XQ(null)
          }), 5e3)
        }), [QQ]),
        FQ = (0, wQ.useCallback)(((WQ, XQ) => {
          const wQ = `${QQ}:${WQ}`;
          try {
            if (null !== window.localStorage.getItem(wQ)) return;
            window.localStorage.setItem(wQ, "1")
          } catch {
            return
          }
          sQ(XQ)
        }), [sQ, QQ]);
      return {
        explained: WQ,
        hinting: qQ,
        explain: sQ,
        explainOnce: FQ
      }
    }

    function Xr(QQ) {
      let {
        text: WQ,
        tone: XQ,
        explained: wQ
      } = QQ;
      return (0, HT.jsxs)("p", {
        className: vq()("NxStatus", null === wQ ? XQ : "Explain"),
        "aria-live": "polite",
        children: [null !== wQ && (0, HT.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== wQ && void 0 !== wQ ? wQ : WQ]
      })
    }
    const wr = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function qr(QQ, WQ) {
      const XQ = Number(QQ[WQ]);
      return 1 === XQ || 2 === XQ || 3 === XQ ? XQ : 0
    }

    function Tr(QQ) {
      return !!dF("reactor", QQ.baf2RxNeed) || void 0 !== QQ.baf2RxLayout && QQ.baf2RxNeed.some((QQ => {
        let [WQ, XQ] = QQ;
        return XQ > 0 && wr.includes(WQ)
      }))
    }
    const zr = "buildAFactory2Game:";

    function sr(QQ) {
      let {
        status: WQ,
        store: XQ,
        busy: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)();
      return function(QQ) {
        return 0 !== (QQ.baf2RxFlags & BW) && (!QQ.baf2RxFormed || void 0 !== QQ.baf2RxLayout)
      }(WQ) ? (0, HT.jsx)(bz.s, {
        disabled: !Tr(WQ) || wQ,
        onClick: () => {
          XQ.tap("fill", (() => {
            XQ.send("fill")
          }))
        },
        children: qQ(void 0 !== WQ.baf2RxLayout ? `${zr}rxFillLayout` : `${zr}rxFill`)
      }) : null
    }

    function Fr(QQ) {
      let {
        status: WQ,
        store: XQ,
        readOnly: qQ,
        bare: TQ = !1
      } = QQ;
      const {
        t: zQ
      } = (0, lq.C)(), sQ = WQ.baf2RxLayout, [FQ, PQ, gQ] = WQ.baf2RxDims, JQ = (0, wQ.useMemo)((() => {
        if (void 0 === sQ) return 0;
        const QQ = Uint8Array.from(sQ, ((QQ, WQ) => qr(sQ, WQ)));
        return XF([FQ - 2, PQ - 2, gQ - 2], QQ).max
      }), [sQ, FQ, PQ, gQ]);
      return void 0 === sQ ? null : (0, HT.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!TQ && (0, HT.jsx)("span", {
          className: "Baf2RxHint",
          children: zQ(`${zr}rxLayoutLine`, {
            amount: AF(JQ)
          })
        }), !qQ && (0, HT.jsx)(bz.h, {
          onClick: () => {
            XQ.send("layout", 0)
          },
          children: zQ(`${zr}rxLayoutHide`)
        })]
      })
    }
    const Pr = "buildAFactory2Game:",
      gr = {
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

    function Jr(QQ) {
      let {
        id: WQ,
        title: XQ,
        body: wQ,
        bodyParams: qQ,
        yes: TQ,
        cancel: zQ,
        confirm: sQ
      } = QQ;
      const {
        t: FQ
      } = (0, lq.C)();
      return (0, HT.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": WQ,
        children: [(0, HT.jsx)("h3", {
          id: WQ,
          children: FQ(XQ)
        }), (0, HT.jsx)("p", {
          children: FQ(wQ, qQ)
        }), (0, HT.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, HT.jsx)(bz.l, {
            onClick: zQ,
            children: FQ(`${Pr}rxCancel`)
          }), (0, HT.jsx)(bz.P, {
            onClick: sQ,
            children: FQ(TQ)
          })]
        })]
      })
    }

    function rr(QQ) {
      const [WQ, XQ] = (0, wQ.useState)((() => QQ.get()));
      return (0, wQ.useEffect)((() => (XQ(QQ.get()), QQ.subscribe((() => {
        XQ(QQ.get())
      })))), [QQ]), WQ
    }

    function Ir(QQ) {
      let {
        kind: WQ,
        cap: XQ,
        busy: qQ = !1,
        whyNot: TQ = null,
        apart: zQ
      } = QQ;
      const {
        t: sQ
      } = (0, lq.C)(), [FQ, PQ] = (0, wQ.useState)(!1), gQ = null !== TQ, JQ = (0, wQ.useRef)(null);
      if ((0, wQ.useEffect)((() => {
          gQ && PQ(!1)
        }), [gQ]), (0, wQ.useLayoutEffect)((() => {
          var QQ;
          const WQ = null === (QQ = JQ.current) || void 0 === QQ ? void 0 : QQ.firstElementChild;
          gQ ? null === WQ || void 0 === WQ || WQ.setAttribute("aria-disabled", "true") : qQ || null === WQ || void 0 === WQ || WQ.removeAttribute("aria-disabled")
        })), !FQ || gQ) return (0, HT.jsx)("span", {
        ref: JQ,
        className: "Baf2RxApartWrap",
        children: (0, HT.jsx)(bz.l, {
          disabled: qQ,
          className: vq()({
            Baf2RxNotYet: gQ
          }),
          onClick: () => {
            TQ ? TQ() : PQ(!0)
          },
          children: sQ(`${Pr}rxApart`)
        })
      });
      const rQ = "battery" === WQ,
        IQ = void 0 === XQ ? `${Pr}batApartConfirmBodyPlan` : `${Pr}batApartConfirmBody`;
      return (0, HT.jsx)(Jr, {
        id: `baf2ApartTitle_${WQ}`,
        title: rQ ? `${Pr}batApartConfirmTitle` : `${Pr}rxApartConfirmTitle`,
        body: rQ ? IQ : `${Pr}rxApartConfirmBody`,
        bodyParams: void 0 === XQ ? void 0 : {
          cap: XQ
        },
        yes: `${Pr}rxApart`,
        cancel: () => {
          PQ(!1)
        },
        confirm: () => {
          PQ(!1), zQ()
        }
      })
    }

    function jr(QQ) {
      let {
        mood: WQ,
        big: XQ
      } = QQ;
      const wQ = gr[WQ],
        qQ = [];
      return wQ.rows.forEach(((QQ, WQ) => {
        for (let XQ = 0; XQ < QQ.length; XQ++) "." !== QQ[XQ] && qQ.push((0, HT.jsx)("rect", {
          x: XQ + 1,
          y: WQ + 1,
          width: 1,
          height: 1,
          fill: "w" === QQ[XQ] ? "#8fd3ff" : wQ.colour
        }, `${XQ},${WQ}`))
      })), (0, HT.jsxs)("svg", {
        className: vq()("Baf2RxFace", {
          Big: XQ,
          Alarm: "alarm" === WQ
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, HT.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, HT.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), qQ]
      })
    }

    function Br(QQ) {
      return DT(QQ, "+").replace("+", "")
    }

    function yr(QQ) {
      let {
        kind: WQ,
        dims: XQ,
        cap: wQ,
        disabled: qQ,
        compact: TQ,
        resize: zQ
      } = QQ;
      const {
        t: sQ
      } = (0, lq.C)(), {
        min: FQ,
        max: PQ
      } = fX(WQ), gQ = Math.min(wQ, PQ), JQ = [`${Pr}rxWide`, `${Pr}rxTall`, `${Pr}rxDeep`], rQ = {
        w: String(XQ[0]),
        h: String(XQ[1]),
        d: String(XQ[2]),
        blocks: String(cF(WQ, XQ))
      };
      return (0, HT.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, HT.jsx)("div", {
          className: "Baf2RxSteppers",
          children: XQ.map(((QQ, WQ) => {
            const TQ = wQ => {
                const qQ = [XQ[0], XQ[1], XQ[2]];
                qQ[WQ] = QQ + wQ, zQ(qQ)
              },
              rQ = QQ >= gQ;
            return (0, HT.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, HT.jsx)("button", {
                type: "button",
                "aria-label": sQ(`${Pr}rxSmaller`),
                disabled: qQ || QQ <= FQ,
                onClick: () => {
                  TQ(-1)
                },
                children: "\u2212"
              }), (0, HT.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [QQ, (0, HT.jsx)("small", {
                  children: sQ(JQ[WQ])
                })]
              }), (0, HT.jsx)("button", {
                type: "button",
                "aria-label": sQ(`${Pr}rxBigger`),
                disabled: qQ || rQ,
                onClick: () => {
                  TQ(1)
                },
                children: rQ && wQ < PQ ? "\ud83d\udd12" : "+"
              })]
            }, JQ[WQ])
          }))
        }), !TQ && (0, HT.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === WQ ? sQ(`${Pr}rxSizeLine`, {
            ...rQ,
            water: String(iF(XQ))
          }) : sQ(`${Pr}batSizeLine`, rQ)
        })]
      })
    }

    function Vr(QQ) {
      let {
        on: WQ,
        label: XQ,
        disabled: wQ,
        locked: qQ,
        pending: TQ,
        toggle: zQ
      } = QQ;
      return (0, HT.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": WQ,
        disabled: wQ,
        "aria-disabled": qQ || void 0,
        className: vq()("Baf2RxSwitch", {
          On: WQ,
          Locked: qQ,
          Pending: TQ
        }),
        onClick: zQ,
        children: [(0, HT.jsx)("span", {
          className: "Baf2RxKnob"
        }), XQ]
      })
    }
    const Dr = "buildAFactory2Game:",
      pr = .95;

    function Gr(QQ, WQ) {
      return 0 !== (QQ.baf2RxFlags & WQ)
    }

    function Ur(QQ) {
      return "cryo" === QQ ? mQ.l : mQ.n
    }

    function br(QQ) {
      var WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ;
      return QQ.baf2RxCryo ? {
        XI: "cryo",
        usePerS: null !== (qQ = QQ.baf2RxCryoUse) && void 0 !== qQ ? qQ : 0,
        needPerS: null !== (TQ = QQ.baf2RxCryoNeed) && void 0 !== TQ ? TQ : 0,
        inPerS: null !== (zQ = QQ.baf2RxCryoIn) && void 0 !== zQ ? zQ : 0,
        stored: null !== (sQ = QQ.baf2RxCryoStored) && void 0 !== sQ ? sQ : 0,
        makersShort: null !== (FQ = QQ.baf2RxMixersShort) && void 0 !== FQ ? FQ : 0,
        waterBeside: null !== (PQ = QQ.baf2RxWaterUse) && void 0 !== PQ ? PQ : 0,
        pct: QQ.baf2RxWater
      } : {
        XI: "water",
        usePerS: null !== (WQ = QQ.baf2RxWaterUse) && void 0 !== WQ ? WQ : 0,
        needPerS: null !== (XQ = QQ.baf2RxWaterNeed) && void 0 !== XQ ? XQ : 0,
        inPerS: QQ.baf2RxWaterIn,
        stored: QQ.baf2RxWaterStored,
        makersShort: null !== (wQ = QQ.baf2RxCondensersShort) && void 0 !== wQ ? wQ : 0,
        waterBeside: 0,
        pct: QQ.baf2RxWater
      }
    }

    function vr(QQ) {
      const WQ = "running" === QQ.baf2RxState || "idle" === QQ.baf2RxState;
      return QQ.baf2RxFormed && QQ.baf2RxTarget !== QQ.baf2RxThrottle && WQ ? dr(QQ, QQ.baf2RxTarget) : null
    }

    function dr(QQ, WQ) {
      const [XQ, wQ, qQ, , , , TQ, , zQ] = QQ.baf2RxStats, sQ = Gr(QQ, IW), FQ = br(QQ), PQ = FQ.pct / 100, {
        gen: gQ,
        out: JQ,
        load: rQ
      } = function(QQ, WQ, XQ, wQ) {
        const qQ = XQ ? Zs : 1,
          TQ = Math.min(QQ.fuelHeat * qQ * Math.max(0, Math.min(1, WQ)), QQ.size * qQ);
        return {
          gen: TQ,
          out: TQ,
          load: IF(TQ, QQ.cooling, wQ)
        }
      }({
        fuelHeat: XQ,
        cooling: wQ,
        size: qQ
      }, WQ / 100, sQ, PQ), IQ = BF(TQ || WF(...QQ.baf2RxDims)), jQ = QQ.baf2RxHeat, BQ = Math.abs(rQ - jQ), yQ = function(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : mQ.n;
        const TQ = XQ ? Zs : 1,
          zQ = Math.min(QQ.fuelHeat * TQ * WQ / 100, QQ.size * TQ),
          sQ = zQ,
          FQ = QQ.fuelHeat * TQ,
          PQ = QQ.cooling * rF(wQ.pct / 100),
          gQ = FQ > 0 && PQ < QQ.size * TQ ? Math.floor(100 * PQ / FQ) : 100,
          JQ = zQ * qQ - wQ.inPerS;
        return {
          out: sQ,
          hotAbove: gQ >= 100 ? null : Math.max(0, gQ),
          waterSecs: wQ.pct >= 100 && JQ > 1e-6 ? Math.max(0, wQ.stored) / JQ : null
        }
      }({
        fuelHeat: XQ,
        cooling: wQ,
        size: qQ
      }, WQ, sQ, {
        pct: FQ.pct,
        inPerS: FQ.inPerS,
        stored: FQ.stored
      }, Ur(FQ.XI));
      return {
        pct: WQ,
        out: JQ,
        coolPerS: gQ * Ur(FQ.XI),
        pelletsPerMin: zQ > 0 ? JQ / zQ * 60 : 0,
        settle: rQ,
        settleS: BQ > 2 ? IQ * Math.log(BQ / 2) : 0,
        overheatS: rQ > 100 && jQ < 100 ? IQ * Math.log((rQ - jQ) / (rQ - 100)) : null,
        hotAbove: yQ.hotAbove,
        coolantSecs: yQ.waterSecs
      }
    }

    function Hr(QQ) {
      return QQ.baf2RxThrottle <= 0 && "running" !== QQ.baf2RxState ? 0 : dr(QQ, QQ.baf2RxTarget).pelletsPerMin / 60
    }

    function ar(QQ, WQ) {
      if (QQ <= 0 || WQ <= 0) return 0;
      const XQ = QQ / WQ;
      return XQ < .25 ? 1 : XQ < .5 ? 2 : XQ < .8 ? 3 : 4
    }

    function lr(QQ, WQ) {
      const XQ = {};
      for (const [wQ, qQ] of Object.entries(WQ.params)) XQ[wQ] = "time" === wQ ? UT(QQ, qQ) : "amount" === wQ ? AF(qQ) : String(Math.round(qQ));
      return QQ(WQ.key, XQ)
    }

    function hr(QQ, WQ) {
      return {
        key: `${Dr}${QQ}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: WQ
      }
    }

    function ir(QQ) {
      var WQ;
      const XQ = Gr(QQ, IW),
        wQ = "running" === QQ.baf2RxState,
        qQ = pF(QQ),
        TQ = QQ.baf2RxHeat;
      var zQ;
      if (wQ && TQ > Ys) return {
        key: null !== (zQ = qQ.fix) && void 0 !== zQ ? zQ : `${Dr}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const sQ = wQ ? dr(QQ, QQ.baf2RxTarget).coolantSecs : null,
        FQ = "cryo" === br(QQ).XI;
      if (null !== sQ && sQ >= 1 && sQ <= 30) return hr(FQ ? "rxWarnCryo" : "rxWarnWater", "bad");
      const PQ = Ms(WF(...QQ.baf2RxDims)).waste,
        gQ = wQ ? HF(QQ, PQ, Hr(QQ)).fullInS : null;
      if (null !== gQ && gQ <= 120 && QQ.baf2RxWaste >= .5 * PQ) return hr("rxWarnWaste", "warn");
      if (null !== sQ && sQ >= 1) return hr(FQ ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: sQ
      });
      const JQ = "noWater" === QQ.baf2RxState && TQ > Ys;
      if (QQ.baf2RxDamage >= 1 && !JQ) return hr("rxDamagedHeals", "warn", {
        pct: QQ.baf2RxDamage
      });
      if (QQ.baf2RxCryoCut) return hr("rxFix_cryoCut", "warn");
      const rQ = br(QQ);
      if ("noWater" === QQ.baf2RxState && "cryo" === rQ.XI) return hr("noWater" === QQ.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const IQ = qQ.fix === `${Dr}rxFix_scramCool` || "idle" === QQ.baf2RxState && QQ.baf2RxTarget <= 0;
      if (IQ && QQ.baf2RxFuel <= 0) return hr("rxFix_noFuel", "warn");
      if (IQ && QQ.baf2RxWaterIn <= 0 && (null !== (WQ = QQ.baf2RxCryoIn) && void 0 !== WQ ? WQ : 0) <= 0) return hr("rxFix_noWater", "warn");
      const jQ = qQ.fix === `${Dr}rxFix_scramCool` ? UF(QQ) : null;
      if (null !== jQ) return {
        key: jQ.key,
        params: {
          amount: jQ.amount
        },
        tone: "info"
      };
      if ("running" !== QQ.baf2RxState && "idle" !== QQ.baf2RxState && null !== qQ.fix) return {
        key: qQ.fix,
        params: {},
        tone: "scram" === QQ.baf2RxState ? "info" : JQ ? "bad" : "warn"
      };
      var BQ;
      if ("idle" === QQ.baf2RxState && QQ.baf2RxTarget <= 0) return {
        key: null !== (BQ = qQ.fix) && void 0 !== BQ ? BQ : `${Dr}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const yQ = QQ.baf2RxCryoStarved;
      if ("cryo" === rQ.XI && yQ && rQ.needPerS > 0 && rQ.usePerS < pr * rQ.needPerS) return hr("noWater" === yQ ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const VQ = "cryo" === rQ.XI,
        DQ = rQ.needPerS > 0 && rQ.usePerS < pr * rQ.needPerS;
      if (VQ ? DQ || rQ.makersShort > 0 && rQ.pct < 100 : rQ.pct < 100) {
        const WQ = VQ && DQ ? Math.floor(100 * rQ.usePerS / rQ.needPerS) : Math.min(100, rQ.pct);
        if (rQ.makersShort > 0) {
          return hr(`${VQ?"rxCryoShortLine":"rxWaterShortLine"}${1===rQ.makersShort?"One":""}${!VQ&&QQ.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: WQ,
            count: rQ.makersShort
          })
        }
        return hr(VQ ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: WQ
        })
      }
      const pQ = function(QQ) {
        const [WQ, XQ, wQ] = QQ.baf2RxStats, qQ = br(QQ), TQ = jF({
          fuelHeat: WQ,
          cooling: XQ,
          size: wQ
        }, "cryo" === qQ.XI ? mQ.f : 1, !0);
        return Math.max(0, TQ * Ur(qQ.XI) - qQ.inPerS)
      }(QQ);
      if (XQ && pQ > 0) return hr("cryo" === rQ.XI ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(pQ)
      });
      if (TQ >= gF) return hr("rxHotLine", "warn");
      const GQ = dr(QQ, QQ.baf2RxTarget);
      var UQ;
      if (null !== GQ.overheatS) return hr("rxWillOverheat", "bad", {
        pct: QQ.baf2RxTarget,
        time: GQ.overheatS,
        safe: null !== (UQ = GQ.hotAbove) && void 0 !== UQ ? UQ : 100
      });
      if (Math.abs(GQ.settle - TQ) >= 3) return hr("rxSettling", "info", {
        pct: QQ.baf2RxTarget,
        heat: Math.round(GQ.settle),
        time: GQ.settleS
      });
      const bQ = UF(QQ);
      if (null !== bQ) return {
        key: bQ.key,
        params: {
          amount: bQ.amount
        },
        tone: "info"
      };
      const vQ = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== WQ && ("running" !== WQ || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === QQ.rods ? `${yF}rxLimitNoRods` : `${yF}rxLimit_${PF(QQ)}`
      }({
        rods: QQ.baf2RxStats[3],
        ...GF(QQ)
      }, QQ.baf2RxState, QQ.baf2RxOut >= pr * QQ.baf2RxMaxNow, !1);
      if (vQ === `${Dr}rxLimit_size`) {
        const [WQ, , XQ, wQ] = QQ.baf2RxStats, qQ = wQ > 0 && WQ > 0 ? Math.ceil(XQ / (WQ / wQ) - 1e-9) : wQ, TQ = QQ.baf2RxDims.every((QQ => QQ >= fX("reactor").max));
        if (qQ < wQ) return hr(TQ ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: qQ,
          have: wQ
        });
        if (TQ) return hr("rxLimit_sizeMax", "info")
      }
      return null !== vQ ? {
        key: vQ,
        params: {},
        tone: "info"
      } : hr("rxSteady", "ok", {
        pct: QQ.baf2RxTarget
      })
    }

    function cr(QQ) {
      var WQ;
      if (QQ.melted) return hr("rxMeltedBody", "bad");
      if (-1 === QQ.bad) return hr("rxFix_noRoom", "warn");
      if (QQ.bad > 0) return hr(1 === QQ.bad ? "rxBadOne" : "rxBad", "warn", {
        count: QQ.bad
      });
      if (QQ.left > 0) {
        const WQ = 1 === QQ.left ? "One" : "";
        return hr(QQ.canFill ? `rxPlanLeft${WQ}` : `rxPlanLeftNoFill${WQ}`, "info", {
          count: QQ.left
        })
      }
      if (0 === QQ.rods) return hr("rxLimitNoRods", "warn");
      const XQ = null !== (WQ = QQ.idle) && void 0 !== WQ ? WQ : 0;
      return XQ > 0 ? hr(1 === XQ ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: XQ
      }) : hr("rxPlanReady", "ok")
    }

    function Ar(QQ) {
      return Math.floor(Math.max(0, QQ[1] - 1) / 2)
    }

    function Rr(QQ) {
      if (QQ >= qF && QQ < TF) {
        const WQ = QQ - qF;
        return {
          key: 0 === WQ ? `${Dr}rxWhy_rodAlone` : 1 === WQ ? `${Dr}rxWhy_rodOne` : `${Dr}rxWhy_rod`,
          params: {
            count: String(WQ),
            heat: String(ks * (1 + fs * WQ))
          }
        }
      }
      return QQ === TF ? {
        key: `${Dr}rxWhy_channel`,
        params: {
          amount: String(ts)
        }
      } : QQ === zF ? {
        key: `${Dr}rxWhy_deadChannel`,
        params: {}
      } : QQ === sF ? {
        key: `${Dr}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Dr}rxWhy_core`,
        params: {}
      }
    }
    const Er = "buildAFactory2Game:";

    function Cr(QQ, WQ) {
      return 0 !== (QQ.baf2RxFlags & WQ)
    }

    function ur(QQ) {
      let {
        status: WQ,
        pending: XQ,
        store: wQ,
        explain: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, lq.C)(), zQ = Cr(WQ, rW), sQ = WQ.baf2RxTarget, FQ = WQ.baf2RxThrottle, PQ = function(QQ) {
        return {
          press: () => {
            QQ.throttlePress()
          },
          drag: WQ => {
            QQ.throttleDrag(WQ)
          },
          release: () => {
            QQ.throttleRelease()
          }
        }
      }(wQ), gQ = null === (JQ = dr(WQ, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, JQ - 10),
        red: JQ
      };
      var JQ;
      return (0, HT.jsxs)("div", {
        className: vq()("Baf2RxThrottle", {
          Off: zQ
        }),
        onClick: () => {
          zQ && qQ(`${Er}rxWhy_startFirst`)
        },
        children: [(0, HT.jsx)("span", {
          className: "HideNarrow",
          children: TQ(`${Er}rxThrottle`)
        }), (0, HT.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, HT.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: sQ,
            disabled: zQ,
            style: zQ ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": TQ(`${Er}rxThrottle`),
            onPointerDown: () => {
              PQ.press();
              const QQ = () => {
                window.removeEventListener("pointerup", QQ), window.removeEventListener("pointercancel", QQ), PQ.release()
              };
              window.addEventListener("pointerup", QQ), window.addEventListener("pointercancel", QQ)
            },
            onKeyUp: PQ.release,
            onChange: QQ => {
              PQ.drag(Number(QQ.target.value))
            }
          }), (0, HT.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${gQ.amber}%, #ffb020 ${gQ.amber}% ${gQ.red}%, #ff3b30 ${gQ.red}%)`
            },
            "aria-hidden": "true"
          }), (0, HT.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${FQ}% + ${8*(1-FQ/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, HT.jsxs)("b", {
          children: [`${sQ}%`, (0, HT.jsx)("i", {
            className: vq()("Baf2RxPendingDot", {
              On: XQ
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function Lr(QQ) {
      let {
        status: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)(), wQ = dr(WQ, WQ.baf2RxTarget), qQ = br(WQ).XI, TQ = XQ("cryo" === qQ ? `${Er}rxRateCryo` : `${Er}rxRateWater`, {
        rate: Br(wQ.coolPerS)
      }), zQ = XQ(`${Er}rxChain`, {
        pct: String(WQ.baf2RxTarget),
        out: AF(wQ.out),
        heat: String(Math.round(wQ.settle)),
        coolant: TQ
      }), sQ = null !== wQ.coolantSecs ? wQ.coolantSecs >= 1 ? XQ("cryo" === qQ ? `${Er}rxThrottleCryoOut` : `${Er}rxThrottleWaterOut`, {
        time: UT(XQ, wQ.coolantSecs)
      }) : XQ("cryo" === qQ ? `${Er}rxThrottleCryoDry` : `${Er}rxThrottleWaterDry`) : null;
      return (0, HT.jsxs)("p", {
        className: "Baf2RxChain",
        children: [zQ, null !== sQ ? (0, HT.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", sQ]
        }) : (0, HT.jsxs)("span", {
          children: [" \xb7 ", XQ(`${Er}rxChainPellets`, {
            amount: RF(wQ.pelletsPerMin)
          })]
        })]
      })
    }

    function kr(QQ) {
      let {
        view: WQ,
        store: XQ,
        explain: qQ,
        explainOnce: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, lq.C)(), {
        status: sQ
      } = WQ, [FQ, PQ] = (0, wQ.useState)(!1), gQ = Cr(sQ, rW), rQ = Cr(sQ, IW), IQ = !Cr(sQ, yW), jQ = sQ.baf2RxHeat > 100;
      return (0, HT.jsxs)(HT.Fragment, {
        children: [(0, HT.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, HT.jsx)(ur, {
            status: sQ,
            pending: WQ.throttlePending,
            store: XQ,
            explain: qQ
          }), (0, HT.jsx)(Vr, {
            on: rQ,
            label: rQ ? zQ(`${Er}rxOdLeft`, {
              time: UT(zQ, sQ.baf2RxOdLeft)
            }) : zQ(`${Er}rxOverdrive`),
            locked: IQ,
            pending: 0 !== (WQ.pendingFlags & IW),
            toggle: () => {
              IQ ? qQ(`${Er}rxOverdriveTier`, {
                amount: String(JQ(13))
              }) : rQ ? XQ.setFlag(IW, !1) : WQ.odConfirmed ? XQ.setFlag(IW, !0) : PQ(!0)
            }
          }), gQ || WQ.startGuard ? (0, HT.jsx)(bz.y, {
            disabled: WQ.busy.has("start") || WQ.startGuard,
            onClick: () => {
              XQ.tap("start", (() => {
                XQ.setFlag(rW, !1)
              }))
            },
            children: zQ(WQ.startGuard ? `${Er}rxStarting` : `${Er}rxStart`)
          }) : (0, HT.jsx)("span", {
            className: vq()("Baf2RxScram", {
              Pulse: jQ
            }),
            children: (0, HT.jsx)(bz.P, {
              onClick: () => {
                XQ.shutDown()
              },
              children: zQ(`${Er}rxScram`)
            })
          })]
        }), (0, HT.jsx)(Lr, {
          status: sQ
        }), FQ && (0, HT.jsx)(Jr, {
          id: "baf2RxOdTitle",
          title: `${Er}rxOdConfirmTitle`,
          body: `${Er}rxOdConfirmBody`,
          yes: `${Er}rxOdConfirm`,
          cancel: () => {
            PQ(!1)
          },
          confirm: () => {
            PQ(!1), XQ.tap("odConfirm", (() => {
              XQ.confirmOverdrive(), XQ.setFlag(IW, !0)
            })), TQ(`${Er}rxWhy_overdrive`)
          }
        })]
      })
    }

    function fr(QQ) {
      let {
        view: WQ,
        store: XQ,
        keepSize: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)(), {
        status: TQ
      } = WQ;
      return (0, HT.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, HT.jsx)(yr, {
          kind: "reactor",
          dims: WQ.dims,
          cap: TQ.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: QQ => {
            XQ.resize(QQ)
          }
        }), wQ ? (0, HT.jsx)(bz.l, {
          onClick: wQ,
          children: qQ(`${Er}rxKeepSize`)
        }) : (0, HT.jsxs)(HT.Fragment, {
          children: [(0, HT.jsx)(Vr, {
            on: WQ.guide,
            label: qQ(`${Er}rxGuide`),
            toggle: () => {
              XQ.toggleGuide()
            }
          }), Cr(TQ, DW) && (0, HT.jsx)(Vr, {
            on: WQ.starter,
            label: qQ(`${Er}rxStarter`),
            toggle: () => {
              XQ.toggleStarter()
            }
          }), (0, HT.jsx)(sr, {
            status: TQ,
            store: XQ,
            busy: WQ.busy.has("fill")
          })]
        })]
      })
    }

    function Sr(QQ) {
      let {
        need: WQ,
        kind: XQ = "reactor",
        explain: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)(), TQ = WQ.length <= 3, zQ = WQ.reduce(((QQ, WQ) => {
        let [, XQ] = WQ;
        return QQ + XQ
      }), 0);
      return (0, HT.jsxs)("div", {
        className: vq()("Baf2RxParts", {
          Compact: !TQ
        }),
        onClick: () => {
          wQ("battery" === XQ ? `${Er}batWhy_store` : `${Er}rxShellHint`)
        },
        children: [zQ > 0 && (0, HT.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === zQ ? qQ(`${Er}rxBlocksOne`) : qQ(`${Er}rxBlocks`, {
            blocks: String(zQ)
          })
        }), 0 === WQ.length ? (0, HT.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: qQ("battery" === XQ ? `${Er}batPartsDone` : `${Er}rxShellDone`)
        }) : vF(WQ).map((QQ => {
          let [WQ, XQ, wQ] = QQ;
          const zQ = function(QQ) {
            const WQ = hF[QQ];
            if (void 0 === WQ) return null;
            const [XQ, wQ, qQ] = aF[WQ].colour.map((QQ => Math.round(255 * QQ)));
            return `rgb(${XQ}, ${wQ}, ${qQ})`
          }(WQ);
          return (0, HT.jsxs)("span", {
            className: "Baf2RxChip",
            title: qT(qQ, WQ),
            children: [(0, HT.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === zQ ? {
                visibility: "hidden"
              } : {
                background: zQ
              },
              title: qQ(`${Er}rxShopGhost`)
            }), (0, HT.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, HT.jsx)(iq.d, {
                itemName: WQ,
                amount: 0
              })
            }), (0, HT.jsx)("span", {
              className: "Baf2RxChipName",
              children: TQ ? `${XQ} ${sQ=qT(qQ,WQ),sQ.replace(/^(Reactor|Battery) (?=\S)/,"")}` : XQ
            }), wQ >= XQ ? (0, HT.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, HT.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: TQ ? qQ(`${Er}rxShopShort`, {
                count: String(XQ - wQ)
              }) : "\u2212" + (XQ - wQ)
            })]
          }, WQ);
          var sQ
        }))]
      })
    }
    const tr = "buildAFactory2Game:";

    function or(QQ) {
      var WQ, XQ, qQ, TQ, zQ, sQ, FQ;
      let {
        store: PQ,
        close: gQ
      } = QQ;
      const {
        t: JQ
      } = (0, lq.C)(), rQ = tz(), IQ = rr(PQ), {
        explained: jQ,
        explain: BQ
      } = Wr("baf2RxExplained"), yQ = (0, wQ.useCallback)(((QQ, WQ) => {
        BQ(JQ(QQ, WQ))
      }), [BQ, JQ]), VQ = null === IQ || void 0 === IQ ? void 0 : IQ.status, DQ = !0 === (null === VQ || void 0 === VQ ? void 0 : VQ.baf2BatReadOnly), pQ = QQ => {
        VQ && rQ.send(JW(VQ.baf2BatAt, QQ))
      }, [GQ, UQ, bQ] = null !== (WQ = null === IQ || void 0 === IQ ? void 0 : IQ.dims) && void 0 !== WQ ? WQ : [0, 0, 0], vQ = AF(null !== (XQ = null === IQ || void 0 === IQ ? void 0 : IQ.yJ) && void 0 !== XQ ? XQ : 0), dQ = !0 === (null === VQ || void 0 === VQ ? void 0 : VQ.baf2BatFormed), HQ = null !== (qQ = null === VQ || void 0 === VQ ? void 0 : VQ.baf2BatStored) && void 0 !== qQ ? qQ : 0, aQ = Math.max(1, null !== (TQ = null === VQ || void 0 === VQ ? void 0 : VQ.baf2BatIslandCap) && void 0 !== TQ ? TQ : 1), lQ = Math.min(100, 100 * HQ / aQ), hQ = null === VQ || void 0 === VQ ? void 0 : VQ.baf2BatNetPerS, iQ = function(QQ, WQ, XQ) {
        return XQ > 0 && WQ >= XQ ? "full" : void 0 !== QQ && QQ >= .05 ? "charging" : void 0 !== QQ && QQ <= -.05 && WQ > 0 ? "draining" : "steady"
      }(hQ, HQ, null !== (zQ = null === VQ || void 0 === VQ ? void 0 : VQ.baf2BatIslandCap) && void 0 !== zQ ? zQ : 0), cQ = null !== (sQ = null === VQ || void 0 === VQ ? void 0 : VQ.baf2BatMadePerS) && void 0 !== sQ ? sQ : 0, AQ = null !== (FQ = null === VQ || void 0 === VQ ? void 0 : VQ.baf2BatUsedPerS) && void 0 !== FQ ? FQ : 0;
      let RQ, EQ = {},
        CQ = "info";
      if (VQ)
        if (dQ) "charging" === iQ ? (RQ = `${tr}batLine_charging`, EQ = {
          time: UT(JQ, (aQ - HQ) / Math.max(.05, null !== hQ && void 0 !== hQ ? hQ : 0))
        }, CQ = "ok") : "draining" === iQ ? (RQ = `${tr}batLine_draining`, EQ = {
          time: UT(JQ, HQ / Math.max(.05, -(null !== hQ && void 0 !== hQ ? hQ : 0)))
        }, CQ = "warn") : RQ = "full" === iQ ? `${tr}batLine_full` : HQ <= 0 && AQ > 0 ? `${tr}batLine_empty` : `${tr}batLine_steady`;
        else {
          var uQ;
          const QQ = cr({
            left: VQ.baf2BatNeed.reduce(((QQ, WQ) => {
              let [, XQ] = WQ;
              return QQ + XQ
            }), 0),
            bad: VQ.baf2BatBad,
            rods: 1,
            canFill: !0 === VQ.baf2BatCanFill,
            melted: !1
          });
          RQ = QQ.key, EQ = {
            count: String(null !== (uQ = QQ.params.count) && void 0 !== uQ ? uQ : 0)
          }, CQ = QQ.tone
        }
      else RQ = `${tr}batLine_steady`;
      const LQ = Math.max(cQ, AQ, 1);
      return (0, HT.jsx)(Uz.b, {
        close: gQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, HT.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, HT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, HT.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, HT.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, HT.jsx)(iq.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, HT.jsxs)("div", {
                children: [(0, HT.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: JQ(`${tr}batTitle`)
                }), VQ && (0, HT.jsxs)("p", {
                  className: vq()("Baf2RxSubtitle", {
                    good: dQ && "charging" === iQ,
                    warn: dQ && "draining" === iQ
                  }),
                  children: [GQ, "\xd7", UQ, "\xd7", bQ, " \xb7 ", JQ(dQ ? `${tr}batState_${iQ}` : `${tr}rxSubPlanShort`)]
                })]
              })]
            }), (0, HT.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [VQ && !DQ && (0, HT.jsx)(Ir, {
                kind: "battery",
                cap: dQ ? vQ : void 0,
                busy: null === IQ || void 0 === IQ ? void 0 : IQ.busy.has("apart"),
                apart: () => {
                  PQ.tap("apart", (() => {
                    pQ("apart")
                  }))
                }
              }), (0, HT.jsx)(bz.o, {
                onClick: gQ
              })]
            })]
          }), IQ && VQ && (0, HT.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, HT.jsxs)("div", {
              className: vq()("Baf2RxFlow Baf2BatFlow", {
                Plan: !dQ
              }),
              children: [(0, HT.jsx)(mJ, {
                kind: "Power",
                label: JQ(`${tr}batMade`),
                number: dQ ? `\u26a1 ${AF(cQ)}/s` : "\u2014",
                note: JQ(`${tr}batMadeNote`),
                share: dQ ? cQ / LQ : void 0,
                onExplain: () => {
                  yQ(`${tr}batWhy_made`)
                }
              }), (0, HT.jsx)(MJ, {
                kind: "Power",
                step: dQ ? ar(cQ, LQ) : 0,
                planned: !dQ
              }), (0, HT.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  yQ(`${tr}batWhy_store`)
                },
                children: [(0, HT.jsx)(Qr, {
                  max: 100,
                  bands: [{
                    upTo: dQ ? lQ : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, HT.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, HT.jsx)("b", {
                    className: "Baf2BatStored",
                    children: dQ ? JQ(`${tr}batStoredOf`, {
                      amount: AF(HQ),
                      cap: AF(VQ.baf2BatIslandCap)
                    }) : JQ(`${tr}batWillHold`, {
                      cap: vQ
                    })
                  }), (0, HT.jsx)("span", {
                    children: JQ(`${tr}batAdds`, {
                      cap: vQ
                    })
                  }), dQ && (0, HT.jsx)("small", {
                    children: JQ(`${tr}batBreakNote`, {
                      cap: vQ
                    })
                  })]
                })]
              }), (0, HT.jsx)(MJ, {
                kind: "Power",
                step: dQ ? ar(AQ, LQ) : 0,
                planned: !dQ
              }), (0, HT.jsx)(mJ, {
                kind: "Power",
                label: JQ(`${tr}batUsed`),
                number: dQ ? `\u26a1 ${AF(AQ)}/s` : "\u2014",
                note: JQ(`${tr}batUsedNote`),
                share: dQ ? AQ / LQ : void 0,
                onExplain: () => {
                  yQ(`${tr}batWhy_used`)
                }
              })]
            }), (0, HT.jsx)(Xr, {
              text: JQ(RQ, EQ),
              tone: CQ,
              explained: jQ
            }), DQ ? (0, HT.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: JQ(`${tr}rxNotYours`)
            }) : !dQ && (0, HT.jsxs)(HT.Fragment, {
              children: [(0, HT.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, HT.jsx)(yr, {
                  kind: "battery",
                  dims: IQ.dims,
                  cap: VQ.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: QQ => {
                    PQ.resize(QQ)
                  }
                }), (0, HT.jsx)(Vr, {
                  on: IQ.guide,
                  label: JQ(`${tr}rxGuide`),
                  toggle: () => {
                    PQ.toggleGuide()
                  }
                }), VQ.baf2BatCanFill && (0, HT.jsx)(bz.s, {
                  disabled: !dF("battery", VQ.baf2BatNeed) || IQ.busy.has("fill"),
                  onClick: () => {
                    PQ.tap("fill", (() => {
                      pQ("fill")
                    }))
                  },
                  children: JQ(`${tr}rxFill`)
                })]
              }), (0, HT.jsx)(Sr, {
                need: VQ.baf2BatNeed,
                kind: "battery",
                explain: yQ
              })]
            })]
          })]
        })
      })
    }
    const er = "buildAFactory2Game:",
      nr = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function xr(QQ, WQ) {
      return QQ === wF ? null : WQ ? "#4a4440" : QQ < TF ? nr[QQ - qF] : QQ === TF ? "#3fd0f0" : QQ === zF ? "#2c3e4c" : "#55585e"
    }

    function Yr(QQ) {
      let {
        inner: WQ,
        looks: XQ,
        layer: wQ,
        setLayer: qQ,
        glow: TQ,
        melted: zQ,
        explain: sQ
      } = QQ;
      const {
        t: FQ
      } = (0, lq.C)(), [PQ, gQ, JQ] = WQ, rQ = Math.max(0, Math.min(gQ - 1, wQ)), IQ = [];
      for (let BQ = 0; BQ < JQ; BQ++)
        for (let QQ = 0; QQ < PQ; QQ++) {
          var jQ;
          const WQ = null !== (jQ = XQ[(rQ * JQ + BQ) * PQ + QQ]) && void 0 !== jQ ? jQ : wF,
            wQ = xr(WQ, zQ),
            qQ = WQ >= qF && WQ < TF;
          IQ.push(null === wQ ? (0, HT.jsx)("circle", {
            cx: QQ + .5,
            cy: BQ + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${QQ},${BQ}`) : (0, HT.jsx)("rect", {
            x: QQ + .06,
            y: BQ + .06,
            width: .88,
            height: .88,
            fill: wQ,
            opacity: qQ && !zQ ? .5 + .5 * TQ : 1,
            onClick: QQ => {
              QQ.stopPropagation();
              const XQ = Rr(WQ);
              sQ(XQ.key, XQ.params)
            }
          }, `${QQ},${BQ}`))
        }
      return (0, HT.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, HT.jsx)("svg", {
          className: vq()("Baf2RxMapGrid", {
            Melted: zQ
          }),
          viewBox: `0 0 ${Math.max(1,PQ)} ${Math.max(1,JQ)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": FQ(`${er}rxWhy_core`),
          onClick: () => {
            sQ(`${er}rxWhy_core`, {})
          },
          children: IQ
        }), gQ > 1 && (0, HT.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, HT.jsx)("button", {
            type: "button",
            "aria-label": FQ(`${er}rxLayerDown`),
            disabled: rQ <= 0,
            onClick: () => {
              qQ(rQ - 1)
            },
            children: "\u25bc"
          }), (0, HT.jsxs)("span", {
            children: [(0, HT.jsx)("span", {
              className: "HideNarrow",
              children: FQ(`${er}rxLayer`, {
                n: String(rQ + 1),
                of: String(gQ)
              })
            }), (0, HT.jsx)("span", {
              className: "ShowNarrow",
              children: FQ(`${er}rxLayerShort`, {
                n: String(rQ + 1),
                of: String(gQ)
              })
            })]
          }), (0, HT.jsx)("button", {
            type: "button",
            "aria-label": FQ(`${er}rxLayerUp`),
            disabled: rQ >= gQ - 1,
            onClick: () => {
              qQ(rQ + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Nr = "buildAFactory2Game:",
      Zr = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Ns,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: DF,
        kind: "red"
      }],
      Or = [50, Ns, 100];

    function Kr(QQ) {
      let {
        stats: WQ,
        t: XQ,
        explain: wQ
      } = QQ;
      const qQ = PF(WQ),
        TQ = Math.max(1, WQ.fuelHeat, WQ.cooling, WQ.size),
        zQ = [
          ["fuel", `${Nr}rxBarRods`, WQ.fuelHeat],
          ["cooling", `${Nr}rxBarCooling`, WQ.cooling],
          ["size", `${Nr}rxBarSize`, WQ.size]
        ];
      return (0, HT.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          wQ(`${Nr}rxWhy_bars`)
        },
        children: [(0, HT.jsx)("span", {
          className: "Baf2RxMostLine",
          children: XQ(`${Nr}rxMost`, {
            amount: AF(Math.min(WQ.fuelHeat, WQ.cooling, WQ.size))
          })
        }), (0, HT.jsx)("span", {
          className: "Baf2RxMostBars",
          children: zQ.map((QQ => {
            let [WQ, wQ, zQ] = QQ;
            return (0, HT.jsxs)("span", {
              className: vq()("Baf2RxMostBar", WQ, {
                Low: WQ === qQ
              }),
              children: [(0, HT.jsx)("small", {
                children: XQ(wQ)
              }), (0, HT.jsx)("i", {
                children: (0, HT.jsx)("b", {
                  style: {
                    width: 100 * zQ / TQ + "%"
                  }
                })
              })]
            }, WQ)
          }))
        })]
      })
    }

    function mr(QQ) {
      var WQ;
      let {
        view: XQ,
        heat: qQ,
        settle: TQ,
        settleLine: zQ,
        settleBad: sQ,
        explain: FQ
      } = QQ;
      const {
        t: PQ
      } = (0, lq.C)(), {
        status: gQ
      } = XQ, JQ = gQ.baf2RxAt.join(","), [rQ, IQ] = (0, wQ.useState)((() => Ar(XQ.inner)));
      (0, wQ.useEffect)((() => {
        IQ(Ar(XQ.inner))
      }), [JQ, XQ.inner[1]]);
      const jQ = null !== (WQ = XQ.plan) && void 0 !== WQ ? WQ : GF(gQ),
        BQ = XQ.plan ? XQ.plan.powerPerUnit : gQ.baf2RxStats[8],
        yQ = null === qQ ? null : "alarm" === (VQ = VF(gQ)) ? "red" : "hot" === VQ ? "hot" : "warm" === VQ ? "warm" : "cold";
      var VQ;
      const DQ = !gQ.baf2RxFormed && function(QQ, WQ) {
          return 0 !== (QQ.baf2RxFlags & WQ)
        }(gQ, jW),
        pQ = gQ.baf2RxDamage,
        GQ = gQ.baf2RxDamageTrend;
      return (0, HT.jsxs)("div", {
        className: vq()("Baf2RxCore", null !== yQ && void 0 !== yQ ? yQ : "plan"),
        children: [(0, HT.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, HT.jsx)(Yr, {
            inner: XQ.inner,
            looks: XQ.looks,
            layer: rQ,
            setLayer: IQ,
            glow: gQ.baf2RxFormed ? gQ.baf2RxThrottle / 100 : 1,
            melted: DQ,
            explain: FQ
          }), (0, HT.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              FQ(`${Nr}rxWhy_heat`)
            },
            children: [null !== qQ ? (0, HT.jsxs)(HT.Fragment, {
              children: [(0, HT.jsx)("b", {
                children: PQ(`${Nr}rxHeatPct`, {
                  pct: String(qQ)
                })
              }), (0, HT.jsx)("span", {
                className: vq()("Baf2RxBand", yQ),
                children: PQ(`${Nr}rxBand_${yQ}`)
              })]
            }) : (0, HT.jsx)("b", {
              children: PQ(`${Nr}rxHeat`)
            }), null !== zQ && (0, HT.jsx)("span", {
              className: vq()("Baf2RxSettle", {
                Bad: sQ
              }),
              children: zQ
            }), pQ >= 1 && (0, HT.jsxs)("span", {
              className: vq()("Baf2RxDamage", GQ),
              children: [PQ(`${Nr}rxDamageLine`, {
                pct: String(pQ)
              }), " \xb7 ", PQ(`${Nr}rxDamage_${GQ}`), (0, HT.jsx)("i", {
                children: (0, HT.jsx)("b", {
                  style: {
                    width: `${Math.min(100,pQ)}%`
                  }
                })
              })]
            })]
          }), (0, HT.jsx)(Qr, {
            max: DF,
            bands: Zr,
            ticks: Or,
            now: qQ,
            settle: TQ,
            settleTone: sQ ? "bad" : null,
            onExplain: () => {
              FQ(`${Nr}rxWhy_heat`)
            }
          })]
        }), (0, HT.jsx)(Kr, {
          stats: jQ,
          t: PQ,
          explain: FQ
        }), BQ > 0 && (0, HT.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            FQ(`${Nr}rxWhy_perPellet`)
          },
          children: PQ(`${Nr}rxPerPellet`, {
            amount: AF(BQ)
          })
        })]
      })
    }

    function Mr(QQ, WQ) {
      var XQ;
      if (!QQ.baf2RxStore) return {
        note: WQ(`${Nr}rxUpTo`, {
          amount: AF(QQ.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [wQ, qQ] = QQ.baf2RxStore, TQ = qQ > 0 ? wQ / qQ : 0, zQ = String(Math.floor(100 * TQ)), sQ = null !== (XQ = QQ.baf2RxStoreNetPerS) && void 0 !== XQ ? XQ : 0, FQ = function(QQ) {
        var WQ, XQ;
        const [wQ, qQ] = null !== (WQ = QQ.baf2RxStore) && void 0 !== WQ ? WQ : [0, 0], TQ = null !== (XQ = QQ.baf2RxStoreNetPerS) && void 0 !== XQ ? XQ : 0;
        return qQ > 0 && wQ >= qQ - 1 ? "running" === QQ.baf2RxState ? `${Dr}rxStoreFull` : `${Dr}rxStoreFullOnly` : TQ > .05 ? `${Dr}rxStoreLine` : TQ < -.05 ? "running" === QQ.baf2RxState ? `${Dr}rxStoreUsesMore` : `${Dr}rxStoreDraining` : `${Dr}rxStorePct`
      }(QQ);
      return {
        note: WQ(FQ, FQ === `${Nr}rxStoreLine` ? {
          pct: zQ,
          time: UT(WQ, (qQ - wQ) / sQ)
        } : {
          pct: zQ
        }),
        share: TQ
      }
    }

    function QI(QQ) {
      let {
        view: WQ,
        explain: XQ,
        preview: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)(), {
        status: TQ
      } = WQ, zQ = Ms(WF(...WQ.dims)), sQ = Hr(TQ), FQ = Math.min(Math.round(TQ.baf2RxFuel), zQ.fuel), PQ = "running" === TQ.baf2RxState, gQ = PQ ? ar(TQ.baf2RxOut, TQ.baf2RxMaxNow) : 0, JQ = function(QQ, WQ, XQ) {
        const wQ = br(QQ),
          qQ = "cryo" === wQ.XI,
          TQ = XQ ? XQ.coolantSecs : wQ.pct >= 100 && QQ.baf2RxOut >= 1 ? dr(QQ, QQ.baf2RxThrottle).coolantSecs : null;
        let zQ, sQ = !1;
        if (wQ.pct < 100) {
          const XQ = 1 === wQ.makersShort,
            TQ = !qQ && QQ.baf2RxCryoOpen ? "OrCryo" : "";
          zQ = wQ.makersShort > 0 ? WQ(qQ ? `${Nr}rxCryoAddMixer${XQ?"":"s"}` : `${Nr}rxWaterAddCondenser${XQ?"":"s"}${TQ}`, {
            count: String(wQ.makersShort)
          }) : WQ(`${Nr}rxWaterNeeds`, {
            rate: Br(wQ.needPerS)
          })
        } else if (null !== TQ) zQ = WQ(`${Nr}rxWaterRunsOut`, {
          time: UT(WQ, TQ)
        });
        else if (wQ.waterBeside > 0) zQ = WQ(`${Nr}rxCryoPlusWater`, {
          rate: Br(wQ.waterBeside)
        });
        else {
          const QQ = function(QQ) {
            return QQ.inPerS <= 0 ? "rxWaterNoSupply" : QQ.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(wQ);
          sQ = "rxWaterNoSupply" === QQ, zQ = WQ(`${Nr}${QQ}`, {
            amount: AF(wQ.stored)
          })
        }
        return {
          kind: qQ ? "Cryo" : "Water",
          label: WQ(qQ ? `${Nr}rxCryo` : `${Nr}rxWater`),
          number: `${Br(wQ.usePerS)}/s`,
          preview: XQ ? `${Br(XQ.coolPerS)}/s` : null,
          note: zQ,
          tone: "noWater" === QQ.baf2RxState ? "danger" : sQ ? "warn" : (FQ = wQ.pct, PQ = TQ, FQ < 100 ? "danger" : null === PQ ? null : PQ < 300 ? "danger" : "warn"),
          share: wQ.pct / 100,
          why: qQ ? `${Nr}rxWhy_cryo` : `${Nr}rxWhy_water`,
          short: wQ.pct < 100
        };
        var FQ, PQ
      }(TQ, qQ, wQ), rQ = HF(TQ, zQ.waste, sQ), IQ = Mr(TQ, qQ), jQ = dr(TQ, TQ.baf2RxTarget), BQ = PQ && Math.abs(jQ.settle - TQ.baf2RxHeat) >= 3, yQ = wQ ? wQ.pelletsPerMin / 60 : null;
      return (0, HT.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, HT.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, HT.jsx)(mJ, {
            kind: "Fuel",
            label: qQ(`${Nr}rxFuel`),
            number: String(FQ),
            preview: null !== yQ && yQ > 0 && TQ.baf2RxFuel > 0 ? UT(qQ, TQ.baf2RxFuel / yQ) : null,
            note: TQ.baf2RxFuel <= 0 ? qQ(`${Nr}rxFuelEmpty`) : sQ > 0 ? qQ(`${Nr}rxFuelLeft`, {
              time: UT(qQ, TQ.baf2RxFuel / sQ)
            }) : qQ(1 === FQ ? `${Nr}rxFuelPellet` : `${Nr}rxFuelPellets`),
            tone: "noFuel" === TQ.baf2RxState ? "danger" : TQ.baf2RxFuel < 2 ? "warn" : null,
            share: TQ.baf2RxFuel / zQ.fuel,
            onExplain: () => {
              XQ(`${Nr}rxWhy_fuel`)
            }
          }), (0, HT.jsx)(mJ, {
            kind: JQ.kind,
            label: JQ.label,
            number: JQ.number,
            preview: JQ.preview,
            note: JQ.note,
            tone: JQ.tone,
            share: JQ.share,
            onExplain: () => {
              XQ(JQ.why)
            }
          })]
        }), (0, HT.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, HT.jsx)(MJ, {
            kind: "Fuel",
            step: gQ,
            short: "noFuel" === TQ.baf2RxState
          }), (0, HT.jsx)(MJ, {
            kind: JQ.kind,
            step: gQ,
            short: JQ.short || "noWater" === TQ.baf2RxState
          })]
        }), (0, HT.jsx)(mr, {
          view: WQ,
          heat: TQ.baf2RxHeat,
          settle: Math.min(DF, jQ.settle),
          settleLine: BQ ? qQ(`${Nr}rxHeatSettles`, {
            pct: String(Math.round(jQ.settle)),
            time: UT(qQ, jQ.settleS)
          }) : null,
          settleBad: jQ.settle > 100,
          explain: XQ
        }), (0, HT.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, HT.jsx)(MJ, {
            kind: "Power",
            step: gQ
          }), (0, HT.jsx)(MJ, {
            kind: "Waste",
            step: PQ && TQ.baf2RxFuel - TQ.baf2RxPu > 0 ? gQ : 0,
            short: rQ.full
          })]
        }), (0, HT.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, HT.jsx)(mJ, {
            kind: "Power",
            label: qQ(`${Nr}rxPowerOut`),
            number: `\u26a1 ${AF(TQ.baf2RxOut)}/s`,
            preview: wQ ? AF(wQ.out) : null,
            note: IQ.note,
            share: IQ.share,
            onExplain: () => {
              XQ(`${Nr}rxWhy_power`)
            }
          }), (0, HT.jsx)(mJ, {
            kind: "Waste",
            label: qQ(`${Nr}rxWaste`),
            number: `${Math.floor(TQ.baf2RxWaste)}/${zQ.waste}`,
            note: rQ.full ? qQ(`${Nr}rxWasteFull`) : null !== rQ.fullInS ? qQ(`${Nr}rxWasteFullIn`, {
              time: UT(qQ, rQ.fullInS)
            }) : qQ(`${Nr}rxWasteSpent`),
            tone: "wasteFull" === TQ.baf2RxState ? "danger" : rQ.full ? "warn" : null,
            share: TQ.baf2RxWaste / zQ.waste,
            onExplain: () => {
              XQ(`${Nr}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function WI(QQ) {
      let {
        view: WQ,
        explain: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, lq.C)(), qQ = WQ.plan;
      if (!qQ) return null;
      const TQ = qQ.fuelHeat <= 0 ? null : qQ.cooling > 0 ? Math.min(DF, 100 * qQ.fuelHeat / qQ.cooling) : DF,
        zQ = wQ(`${Nr}rxPlanAtFull`);
      return (0, HT.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, HT.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, HT.jsx)(mJ, {
            kind: "Fuel",
            label: wQ(`${Nr}rxFuel`),
            number: wQ(`${Nr}rxPlanPerMin`, {
              amount: RF(qQ.pelletsPerMin)
            }),
            note: wQ(`${Nr}rxPlanPellets`),
            onExplain: () => {
              XQ(`${Nr}rxWhy_fuel`)
            }
          }), (0, HT.jsx)(mJ, {
            kind: "Water",
            label: wQ(`${Nr}rxWater`),
            number: `${Br(qQ.waterPerS)}/s`,
            note: WQ.status.baf2RxCryoOpen && qQ.waterPerS > 0 ? wQ(`${Nr}rxPlanOrCryo`, {
              rate: Br(jF(qQ, mQ.f) * mQ.l)
            }) : zQ,
            onExplain: () => {
              XQ(`${Nr}rxWhy_water`)
            }
          })]
        }), (0, HT.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, HT.jsx)(MJ, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, HT.jsx)(MJ, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, HT.jsx)(mr, {
          view: WQ,
          heat: null,
          settle: TQ,
          settleLine: null === TQ ? null : wQ(`${Nr}rxPlanHeat`, {
            pct: String(Math.round(TQ))
          }),
          settleBad: null !== TQ && TQ > 100,
          explain: XQ
        }), (0, HT.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, HT.jsx)(MJ, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, HT.jsx)(MJ, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, HT.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, HT.jsx)(mJ, {
            kind: "Power",
            label: wQ(`${Nr}rxPowerOut`),
            number: `\u26a1 ${AF(qQ.max)}/s`,
            note: zQ,
            onExplain: () => {
              XQ(`${Nr}rxWhy_power`)
            }
          }), (0, HT.jsx)(mJ, {
            kind: "Waste",
            label: wQ(`${Nr}rxWaste`),
            number: wQ(`${Nr}rxPlanPerMin`, {
              amount: RF(qQ.pelletsPerMin)
            }),
            note: wQ(`${Nr}rxWasteSpent`),
            onExplain: () => {
              XQ(`${Nr}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const XI = "buildAFactory2Game:",
      wI = {
        key: `${XI}rxWaiting`,
        params: {},
        tone: "info"
      };

    function qI(QQ, WQ) {
      return 0 !== (QQ.baf2RxFlags & WQ)
    }

    function TI(QQ) {
      var WQ, XQ;
      let {
        store: qQ,
        close: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, lq.C)(), sQ = rr(qQ), {
        explained: FQ,
        hinting: PQ,
        explain: gQ,
        explainOnce: JQ
      } = Wr("baf2RxExplained"), rQ = (0, wQ.useCallback)(((QQ, WQ) => {
        gQ(zQ(QQ, WQ))
      }), [gQ, zQ]), IQ = (0, wQ.useCallback)(((QQ, WQ) => {
        JQ(QQ, zQ(QQ, WQ))
      }), [JQ, zQ]), [jQ, BQ] = (0, wQ.useState)(!1), [yQ, VQ] = (0, wQ.useState)(!1), DQ = null === sQ || void 0 === sQ ? void 0 : sQ.status, pQ = null === DQ || void 0 === DQ ? void 0 : DQ.baf2RxAt.join(","), GQ = !0 === (null === DQ || void 0 === DQ ? void 0 : DQ.baf2RxFormed);
      (0, wQ.useEffect)((() => {
        VQ(!1), BQ(!1)
      }), [pQ, GQ]), (0, wQ.useEffect)((() => (qQ.opened(), () => {
        qQ.closed()
      })), [qQ]);
      const UQ = void 0 !== DQ && qI(DQ, VW),
        bQ = DQ ? GQ ? VF(DQ) : null !== sQ && void 0 !== sQ && sQ.plan ? function(QQ, WQ) {
          if (QQ <= 0) return "off";
          if (WQ <= 0) return "alarm";
          const XQ = 100 * QQ / WQ;
          return XQ < 50 ? "calm" : XQ < gF ? "warm" : XQ <= 100 ? "hot" : "alarm"
        }(sQ.plan.fuelHeat, sQ.plan.cooling) : "off" : "off",
        vQ = DQ ? pF(DQ) : null,
        dQ = sQ ? sQ.waiting ? wI : GQ ? ir(sQ.status) : function(QQ) {
          var WQ, XQ;
          const {
            status: wQ
          } = QQ;
          return cr({
            left: wQ.baf2RxNeed.reduce(((QQ, WQ) => {
              let [, XQ] = WQ;
              return QQ + XQ
            }), 0),
            bad: wQ.baf2RxBad,
            rods: null !== (WQ = null === (XQ = QQ.plan) || void 0 === XQ ? void 0 : XQ.rods) && void 0 !== WQ ? WQ : 0,
            canFill: qI(wQ, BW),
            melted: qI(wQ, jW),
            idle: QQ.looks.reduce(((QQ, WQ) => QQ + (WQ === zF ? 1 : 0)), 0)
          })
        }(sQ) : null,
        HQ = PQ && null !== dQ && ("ok" === dQ.tone || "info" === dQ.tone),
        aQ = DQ ? function(QQ) {
          const WQ = 0 !== (QQ.baf2RxFlags & rW),
            XQ = QQ.baf2RxHeat < Os;
          return 0 !== (QQ.baf2RxFlags & jW) || XQ && (WQ || !QQ.baf2RxFormed) ? null : QQ.baf2RxFormed && !WQ ? {
            key: `${yF}rxApartScram`,
            params: {}
          } : {
            key: `${yF}rxApartCooling`,
            params: {
              pct: String(Os)
            }
          }
        }(DQ) : null,
        [lQ, hQ, iQ] = null !== (WQ = null === sQ || void 0 === sQ ? void 0 : sQ.dims) && void 0 !== WQ ? WQ : [0, 0, 0],
        cQ = `${lQ}\xd7${hQ}\xd7${iQ}`;
      return (0, HT.jsx)(Uz.b, {
        close: TQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, HT.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, HT.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, HT.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, HT.jsx)(jr, {
                mood: bQ
              }), (0, HT.jsxs)("div", {
                children: [(0, HT.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: zQ(`${XI}rxTitle`)
                }), sQ && (0, HT.jsxs)("p", {
                  className: vq()("Baf2RxSubtitle", GQ && (null === vQ || void 0 === vQ ? void 0 : vQ.tone)),
                  children: [GQ && !UQ ? (0, HT.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": zQ(`${XI}rxChangeSize`),
                    onClick: () => {
                      if (!DQ) return;
                      const QQ = qI(DQ, rW);
                      var WQ;
                      (WQ = {
                        scram: QQ,
                        heat: DQ.baf2RxHeat
                      }).scram && WQ.heat < Os ? BQ(!0) : rQ(QQ ? `${XI}rxResizeCooling` : `${XI}rxResizeHot`, {
                        pct: String(Os)
                      })
                    },
                    children: [cQ, " \u270e"]
                  }) : cQ, " \xb7 ", zQ(GQ ? null !== (XQ = null === vQ || void 0 === vQ ? void 0 : vQ.label) && void 0 !== XQ ? XQ : `${XI}rxState_running` : `${XI}rxSubPlanShort`)]
                })]
              })]
            }), (0, HT.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [sQ && !UQ && (0, HT.jsx)(Ir, {
                kind: "reactor",
                busy: sQ.busy.has("apart"),
                whyNot: aQ ? () => {
                  rQ(aQ.key, aQ.params)
                } : null,
                apart: () => {
                  qQ.tap("apart", (() => {
                    qQ.send("apart")
                  }))
                }
              }), (0, HT.jsx)(bz.o, {
                onClick: TQ
              })]
            })]
          }), sQ && dQ && (0, HT.jsxs)("div", {
            className: "Baf2RxBody",
            children: [GQ ? (0, HT.jsx)(QI, {
              view: sQ,
              explain: rQ,
              preview: vr(sQ.status)
            }) : (0, HT.jsx)(WI, {
              view: sQ,
              explain: rQ
            }), (0, HT.jsx)(Xr, {
              text: HQ ? `${lr(zQ,dQ)} ${zQ(`${XI}rxTapHint`)}` : lr(zQ, dQ),
              tone: dQ.tone,
              explained: FQ
            }), UQ ? (0, HT.jsxs)(HT.Fragment, {
              children: [(0, HT.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: zQ(`${XI}rxNotYours`)
              }), (0, HT.jsx)(Fr, {
                status: sQ.status,
                store: qQ,
                readOnly: !0
              })]
            }) : GQ && !yQ ? (0, HT.jsxs)(HT.Fragment, {
              children: [(0, HT.jsx)(kr, {
                view: sQ,
                store: qQ,
                explain: rQ,
                explainOnce: IQ
              }), void 0 !== sQ.status.baf2RxLayout && Tr(sQ.status) && (0, HT.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, HT.jsx)(Fr, {
                  status: sQ.status,
                  store: qQ,
                  readOnly: !1,
                  bare: !0
                }), (0, HT.jsx)(sr, {
                  status: sQ.status,
                  store: qQ,
                  busy: sQ.busy.has("fill")
                })]
              })]
            }) : (0, HT.jsxs)(HT.Fragment, {
              children: [(0, HT.jsx)(fr, {
                view: sQ,
                store: qQ,
                keepSize: GQ ? () => {
                  VQ(!1)
                } : void 0
              }), bF(sQ.dims, sQ.status.baf2RxDims) && (0, HT.jsx)(Sr, {
                need: sQ.status.baf2RxNeed,
                explain: rQ
              }), (0, HT.jsx)(Fr, {
                status: sQ.status,
                store: qQ,
                readOnly: !1
              })]
            }), jQ && (0, HT.jsx)(Jr, {
              id: "baf2ResizeTitle",
              title: `${XI}rxResizeConfirmTitle`,
              body: `${XI}rxResizeConfirmBody`,
              yes: `${XI}rxChangeSize`,
              cancel: () => {
                BQ(!1)
              },
              confirm: () => {
                BQ(!1), VQ(!0)
              }
            })]
          })]
        })
      })
    }
    class zI {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(QQ) {
        this.view = QQ;
        for (const WQ of this.listeners) WQ()
      }
      get() {
        return this.view
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
    }

    function sI(QQ) {
      let {
        commands: WQ,
        store: XQ,
        power: qQ,
        water: TQ,
        reactor: zQ,
        battery: sQ,
        collider: FQ,
        terminal: PQ,
        quests: gQ,
        tutorial: JQ,
        close: rQ,
        leave: IQ,
        askIslands: jQ,
        showCore: BQ,
        openSocial: yQ
      } = QQ;
      const {
        userContext: VQ
      } = (0, us.c)(), DQ = Cs.featureFlags.useSocialFeatures && VQ.isLoggedIn(), [pQ, GQ] = (0, wQ.useState)((() => XQ.get()));
      (0, wQ.useEffect)((() => XQ.subscribe((() => {
        GQ(XQ.get())
      }))), [XQ]);
      const UQ = "islands" === (null === pQ || void 0 === pQ ? void 0 : pQ.kind) ? pQ.backToCore : void 0;
      return (0, HT.jsxs)(Sz.Provider, {
        value: WQ,
        children: ["core" === (null === pQ || void 0 === pQ ? void 0 : pQ.kind) && (0, HT.jsx)(VJ, {
          view: pQ.core,
          close: rQ,
          askIslands: jQ
        }), "dropMap" === (null === pQ || void 0 === pQ ? void 0 : pQ.kind) && (0, HT.jsx)(UJ, {
          message: pQ.dropMap,
          quests: gQ,
          close: rQ,
          leave: IQ
        }), "islands" === (null === pQ || void 0 === pQ ? void 0 : pQ.kind) && (0, HT.jsx)(fJ, {
          message: pQ.islands,
          arrivedAtMs: pQ.arrivedAtMs,
          close: UQ ? () => {
            BQ(UQ)
          } : rQ,
          leave: IQ,
          openSocial: DQ ? yQ : null
        }), "quests" === (null === pQ || void 0 === pQ ? void 0 : pQ.kind) && (0, HT.jsx)(ug, {
          store: gQ,
          tutorial: JQ,
          close: rQ
        }), "transfer" === (null === pQ || void 0 === pQ ? void 0 : pQ.kind) && (0, HT.jsx)(qg, {
          message: pQ.transfer,
          arrivedAtMs: pQ.arrivedAtMs,
          close: rQ,
          leave: IQ
        }), "power" === (null === pQ || void 0 === pQ ? void 0 : pQ.kind) && (0, HT.jsx)(cz, {
          store: qQ,
          close: rQ
        }), "water" === (null === pQ || void 0 === pQ ? void 0 : pQ.kind) && (0, HT.jsx)(Vs, {
          store: TQ,
          close: rQ
        }), "reactor" === (null === pQ || void 0 === pQ ? void 0 : pQ.kind) && (0, HT.jsx)(TI, {
          store: zQ,
          close: rQ
        }), "battery" === (null === pQ || void 0 === pQ ? void 0 : pQ.kind) && (0, HT.jsx)(or, {
          store: sQ,
          close: rQ
        }), "collider" === (null === pQ || void 0 === pQ ? void 0 : pQ.kind) && (0, HT.jsx)(DP, {
          store: FQ,
          close: rQ
        }), "terminal" === (null === pQ || void 0 === pQ ? void 0 : pQ.kind) && (0, HT.jsx)(KJ, {
          store: PQ,
          close: rQ,
          send: QQ => {
            WQ.send(QQ)
          }
        })]
      })
    }
    var FI = XQ(38777);

    function PI(QQ, WQ) {
      return QQ.distSq - WQ.distSq
    }
    class gI {
      constructor() {
        this.list = [], this.pool = []
      }
      add(QQ, WQ, XQ, wQ) {
        let qQ = this.pool[this.list.length];
        qQ || (qQ = {
          x: 0,
          y: 0,
          distSq: 0,
          element: WQ,
          liftRem: XQ,
          dot: wQ
        }, this.pool.push(qQ)), qQ.x = QQ.x, qQ.y = QQ.y, qQ.distSq = QQ.distSq, qQ.element = WQ, qQ.liftRem = XQ, qQ.dot = wQ, this.list.push(qQ)
      }
    }
    class JI {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = QQ, this.sizes = new WeakMap, this.observer = new ResizeObserver((QQ => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const WQ of QQ) {
            const QQ = WQ.borderBoxSize[0];
            "dot" !== WQ.target.dataset.crowded && 0 !== QQ.inlineSize && 0 !== QQ.blockSize && this.sizes.set(WQ.target, {
              width: QQ.inlineSize,
              height: QQ.blockSize
            })
          }
        })), this.remPx = 16, this.HI = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.cV = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.cV)
      }
      observe(QQ) {
        this.observer.observe(QQ)
      }
      unobserve(QQ) {
        this.observer.unobserve(QQ)
      }
      run(QQ) {
        const WQ = QQ.list;
        WQ.sort(PI);
        const XQ = this.pxPerVw,
          wQ = this.pxPerVh;
        this.HI.length = 0, this.hud && this.HI.push(...this.hud.boxes(performance.now()));
        for (const TQ of WQ) {
          var qQ;
          const QQ = this.sizes.get(TQ.element);
          let WQ = "no";
          if (QQ && QQ.width > 0) {
            const qQ = TQ.x * XQ,
              zQ = TQ.y * wQ - TQ.liftRem * this.remPx;
            this.fit(qQ, zQ, QQ.width, QQ.height) || (WQ = TQ.dot && this.fit(qQ, zQ, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (qQ = TQ.element.dataset.crowded) && void 0 !== qQ ? qQ : "no") !== WQ && ("no" === WQ ? delete TQ.element.dataset.crowded : TQ.element.dataset.crowded = WQ), "hidden" !== WQ && (0, FI.d)(TQ.element, TQ.x, TQ.y)
        }
        WQ.length = 0
      }
      fit(QQ, WQ, XQ, wQ) {
        const qQ = QQ - XQ / 2,
          TQ = QQ + XQ / 2,
          zQ = WQ - wQ,
          sQ = this.HI;
        for (let FQ = 0; FQ < sQ.length; FQ += 4)
          if (qQ < sQ[FQ + 1] - 2 && TQ > sQ[FQ] + 2 && zQ < sQ[FQ + 3] - 2 && WQ > sQ[FQ + 2] + 2) return !1;
        return sQ.push(qQ, TQ, zQ, WQ), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.cV)
      }
    }
    const rI = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class II {
      constructor() {
        this.cards = rI.map((QQ => document.getElementsByClassName(QQ))), this.watched = rI.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(QQ) {
        QQ - this.refreshedAt > 1e3 && (this.refreshedAt = QQ, this.stale = !0);
        for (let XQ = 0; XQ < this.cards.length; XQ++) {
          var WQ;
          const QQ = null !== (WQ = this.cards[XQ][0]) && void 0 !== WQ ? WQ : null;
          QQ !== this.watched[XQ] && this.watch(XQ, QQ)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let QQ = 0; QQ < this.watched.length; QQ++) this.watch(QQ, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const QQ = this.list;
        QQ.length = 0;
        for (const WQ of this.watched) {
          if (!WQ || WQ.closest(".NoRoom")) continue;
          const XQ = WQ.getBoundingClientRect();
          let wQ = XQ.top,
            qQ = XQ.bottom;
          if (WQ === this.watched[0] && this.hud) {
            const QQ = this.hud.getBoundingClientRect();
            wQ = Math.max(wQ, QQ.top), qQ = Math.min(qQ, QQ.bottom)
          }
          XQ.width > 0 && qQ > wQ && QQ.push(XQ.left, XQ.right, wQ, qQ)
        }
      }
      watch(QQ, WQ) {
        const XQ = this.watched[QQ];
        var wQ, qQ;
        (XQ && this.sizes.unobserve(XQ), this.watched[QQ] = WQ, this.stale = !0, WQ && this.sizes.observe(WQ), 0 === QQ) && (null === (wQ = this.hud) || void 0 === wQ || wQ.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (qQ = null === WQ || void 0 === WQ ? void 0 : WQ.closest(".Baf2QuestHud")) && void 0 !== qQ ? qQ : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var jI = XQ(38782);
    class BI {
      constructor(QQ) {
        this.onElement = QQ, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(QQ) {
        const WQ = [];
        for (let XQ = 0; XQ + 4 < QQ.length; XQ += 5) {
          const wQ = [QQ[XQ], QQ[XQ + 1], QQ[XQ + 2]];
          WQ.push({
            key: wQ.join(","),
            pos: wQ,
            status: qq[QQ[XQ + 3]],
            kind: lW[QQ[XQ + 4]]
          })
        }
        this.markers = WQ, this.keys = new Set(WQ.map((QQ => {
          let {
            key: WQ
          } = QQ;
          return WQ
        }))), this.notify()
      }
      covers(QQ) {
        return this.keys.has(QQ)
      }
      get() {
        return this.markers
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      bind(QQ) {
        let WQ = this.refs.get(QQ);
        return WQ || (WQ = WQ => {
          const XQ = this.elements.get(QQ);
          var wQ, qQ;
          XQ && (null === (wQ = this.onElement) || void 0 === wQ || wQ.call(this, XQ, !1));
          WQ ? (this.elements.set(QQ, WQ), null === (qQ = this.onElement) || void 0 === qQ || qQ.call(this, WQ, !0)) : (this.elements.delete(QQ), this.refs.delete(QQ))
        }, this.refs.set(QQ, WQ)), WQ
      }
      onAfterRender(QQ, WQ, XQ) {
        for (const wQ of this.markers) {
          const qQ = this.elements.get(wQ.key);
          if (!qQ) continue;
          const TQ = (0, jI.b)(qQ, QQ, WQ, wQ.pos, 1.05, 24);
          TQ && XQ.add(TQ, qQ, .45, !0)
        }
      }
      notify() {
        for (const QQ of this.listeners) QQ()
      }
    }
    const yI = {
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
    const VI = (0, wQ.memo)((function(QQ) {
        let {
          status: WQ,
          kind: XQ,
          bindRef: wQ
        } = QQ;
        const {
          t: qQ
        } = (0, lq.C)(), TQ = function(QQ, WQ) {
          var XQ;
          if ("noFuel" === QQ) {
            var wQ, qQ;
            const QQ = null === (wQ = EW[WQ]) || void 0 === wQ || null === (qQ = wQ.fuels) || void 0 === qQ ? void 0 : qQ.find((QQ => wX.includes(QQ)));
            return null !== QQ && void 0 !== QQ ? QQ : yI.noFuel
          }
          return void 0 !== (null === (XQ = EW[WQ]) || void 0 === XQ ? void 0 : XQ.cryoMade) ? "noOutlet" === QQ ? "Fluid Pipe" : "noInput" === QQ ? "Biomass" : yI[QQ] : yI[QQ]
        }(WQ, XQ);
        return (0, HT.jsxs)("div", {
          className: vq()("Baf2StallMarker", WQ),
          ref: wQ,
          hidden: !0,
          children: [TQ && (0, HT.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, HT.jsx)(iq.d, {
              itemName: TQ,
              amount: 0
            })
          }), (0, HT.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === WQ ? "?" : "!"
          }), (0, HT.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: qQ(`buildAFactory2Game:stallTag_${WQ}`)
          })]
        })
      })),
      DI = (0, wQ.memo)((function(QQ) {
        let {
          controller: WQ
        } = QQ;
        const [XQ, qQ] = (0, wQ.useState)((() => WQ.get()));
        return (0, wQ.useEffect)((() => (qQ(WQ.get()), WQ.subscribe((() => {
          qQ(WQ.get())
        })))), [WQ]), (0, HT.jsx)("div", {
          className: "Baf2StallMarkers",
          children: XQ.map((QQ => (0, HT.jsx)(VI, {
            status: QQ.status,
            kind: QQ.kind,
            bindRef: WQ.bind(QQ.key)
          }, QQ.key)))
        })
      })),
      pI = BX.k + 150;
    class GI {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(QQ, WQ) {
        const XQ = WQ - QQ;
        null === this.offset || XQ < this.offset ? this.offset = XQ : this.offset = Math.min(XQ, this.offset + .02 * (WQ - this.sampledAt)), this.sampledAt = WQ
      }
      toLocal(QQ) {
        var WQ;
        return QQ + (null !== (WQ = this.offset) && void 0 !== WQ ? WQ : 0) + pI
      }
    }
    var UI = XQ(38785);
    const bI = 15 * Math.PI / 180,
      vI = Math.SQRT2,
      dI = [4, 2];

    function HI(QQ, WQ) {
      const XQ = [1 / 0, 1 / 0, 1 / 0],
        wQ = [-1 / 0, -1 / 0, -1 / 0];
      for (const FQ of QQ)
        for (let QQ = 0; QQ < 3; QQ++) XQ[QQ] = Math.min(XQ[QQ], FQ[QQ]), wQ[QQ] = Math.max(wQ[QQ], FQ[QQ]);
      const qQ = (XQ[0] + wQ[0]) / 2,
        TQ = (XQ[1] + wQ[1]) / 2,
        zQ = (XQ[2] + wQ[2]) / 2;
      let sQ = 0;
      for (const FQ of QQ) sQ = Math.max(sQ, Math.hypot(FQ[0] - qQ, FQ[1] - TQ, FQ[2] - zQ));
      return {
        x: qQ,
        y: TQ,
        z: zQ,
        r: sQ + WQ
      }
    }

    function aI(QQ, WQ, XQ) {
      const wQ = WQ.x - QQ.x,
        qQ = WQ.y - QQ.y,
        TQ = WQ.z - QQ.z,
        zQ = Math.sqrt(wQ * wQ + qQ * qQ + TQ * TQ);
      if (zQ <= WQ.r + 8) return 1;
      const sQ = WQ.r / zQ,
        FQ = Math.sqrt(1 - sQ * sQ),
        PQ = FQ < -QQ.cosHalf,
        gQ = (wQ * QQ.dx + qQ * QQ.dy + TQ * QQ.dz) / zQ;
      if (!PQ && gQ < QQ.cosHalf * FQ - QQ.sinHalf * sQ) return 0;
      const JQ = XQ * vI * QQ.frameMs * QQ.pxPerBlock / (zQ - WQ.r);
      for (let rQ = 0; rQ < dI.length; rQ++)
        if (JQ * dI[rQ] <= 1) return dI[rQ];
      return 1
    }

    function lI(QQ, WQ) {
      return {
        name: QQ,
        at: WQ,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const hI = [0, 0, 0];

    function iI(QQ, WQ, XQ) {
      let [, wQ, qQ, TQ, zQ, sQ] = WQ;
      const FQ = BX.f * (null !== zQ && void 0 !== zQ ? zQ : 1),
        PQ = [];
      for (let IQ = 0; IQ < wQ.length; IQ += 3) PQ.push([wQ[IQ] + .5, wQ[IQ + 1] + .65, wQ[IQ + 2] + .5]);
      const gQ = [];
      for (let IQ = 0; IQ < PQ.length - 1; IQ++) {
        const [QQ, WQ] = [PQ[IQ], PQ[IQ + 1]];
        gQ.push([(QQ[0] + WQ[0]) / 2, (QQ[1] + WQ[1]) / 2, (QQ[2] + WQ[2]) / 2])
      }
      const JQ = PQ.slice(1, -1),
        rQ = new Uint8Array(JQ.length);
      for (const IQ of null !== sQ && void 0 !== sQ ? sQ : []) rQ[IQ >> 1] |= 1 & IQ ? 2 : 1;
      return {
        island: QQ,
        length: JQ.length,
        loop: TQ,
        cellsPerMs: FQ,
        edges: gQ,
        nB: JQ,
        bounds: HI([...gQ, ...JQ], .3),
        changed: !0,
        culled: !1,
        hide: rQ,
        items: qQ.map((QQ => {
          let [WQ, wQ] = QQ;
          return lI(WQ, (0, BX.w)(WQ, wQ, XQ, FQ).at)
        }))
      }
    }

    function cI(QQ, WQ) {
      const {
        items: XQ
      } = QQ;
      if (0 === XQ.length) return;
      const wQ = QQ.length / QQ.cellsPerMs,
        qQ = Math.floor((WQ - XQ[0].at) / wQ) - 1;
      if (qQ > 0)
        for (const TQ of XQ) TQ.at += qQ * wQ
    }

    function AI(QQ, WQ) {
      const XQ = Math.min(Math.floor(WQ), QQ.length - 1),
        wQ = QQ.hide[XQ];
      return 0 !== wQ && 0 !== (wQ & (WQ - XQ < .5 ? 1 : 2))
    }

    function RI(QQ, WQ) {
      const XQ = Math.min(Math.floor(WQ), QQ.length - 1),
        wQ = WQ - XQ,
        qQ = wQ < .5,
        TQ = qQ ? QQ.edges[XQ] : QQ.nB[XQ],
        zQ = qQ ? QQ.nB[XQ] : QQ.edges[XQ + 1],
        sQ = qQ ? 2 * wQ : 2 * wQ - 1;
      hI[0] = TQ[0] + (zQ[0] - TQ[0]) * sQ, hI[1] = TQ[1] + (zQ[1] - TQ[1]) * sQ, hI[2] = TQ[2] + (zQ[2] - TQ[2]) * sQ
    }
    const EI = Math.PI / 4;
    class CI {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new GI, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.cV = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(QQ) {
        const WQ = performance.now();
        this.clock.sample(QQ.baf2BeltLinesAt, WQ), this.queue(QQ.baf2BeltLinesAt, QQ, 0, null, null, 0), this.applyDue(WQ)
      }
      onMoves(QQ) {
        const WQ = performance.now(),
          XQ = QQ.baf2BeltMovesAt;
        this.clock.sample(XQ, WQ);
        for (const [wQ, qQ, TQ, zQ] of QQ.baf2BeltMoveList) null === qQ ? this.queue(XQ - TQ, null, wQ, null, null, null !== zQ && void 0 !== zQ ? zQ : 0) : this.queue(XQ - TQ, null, wQ, qQ, null !== zQ && void 0 !== zQ ? zQ : null, 0);
        this.applyDue(WQ)
      }
      start(QQ) {
        this.pool = new UI.e(QQ, {
          scale: .3,
          yaw: EI
        }, 64), this.cV(), window.addEventListener("resize", this.cV)
      }
      onAfterRender(QQ) {
        const {
          pool: WQ
        } = this;
        if (!WQ) return;
        const XQ = performance.now(),
          wQ = XQ - this.lastRenderAt;
        this.lastRenderAt = XQ, wQ < 100 && (this.frameMs += .1 * (wQ - this.frameMs));
        const qQ = XQ + this.frameMs;
        this.applyDue(qQ);
        const TQ = QQ.cameraPosition,
          zQ = WQ.follow(TQ);
        this.setView(QQ, TQ);
        const sQ = this.frame++;
        for (let FQ = 0; FQ < this.shown.length; FQ++) {
          const QQ = this.shown[FQ],
            XQ = aI(this.view, QQ.bounds, QQ.cellsPerMs),
            wQ = QQ.culled && 0 !== XQ;
          if (QQ.culled = 0 === XQ, !zQ && !QQ.changed && !wQ && (0 === XQ || (sQ + FQ) % XQ !== 0)) continue;
          QQ.changed = !1, QQ.loop && (cI(QQ, qQ), (0, BX.s)(QQ.items, QQ.length, qQ, QQ.cellsPerMs));
          let TQ = QQ.length;
          for (let sQ = 0; sQ < QQ.items.length; sQ++) {
            const XQ = QQ.items[sQ],
              wQ = (0, BX.x)(XQ.at, TQ, qQ, QQ.cellsPerMs);
            if (TQ = wQ - BX.m, AI(QQ, wQ)) {
              null === XQ.kind || XQ.hidden || (XQ.kind.hide(XQ.slot), XQ.hidden = !0);
              continue
            }
            let FQ = XQ.kind;
            if (null === FQ) {
              if (FQ = WQ.kindOf(XQ.name), null === FQ) continue;
              XQ.kind = FQ, XQ.slot = FQ.take(), XQ.hidden = !0, XQ.drawn = NaN
            } else if (wQ === XQ.drawn && !XQ.hidden && !zQ) continue;
            RI(QQ, wQ), FQ.write(XQ.slot, hI[0], hI[1], hI[2]), XQ.hidden = !1, XQ.drawn = wQ
          }
        }
        WQ.commit()
      }
      dispose() {
        var QQ;
        window.removeEventListener("resize", this.cV), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (QQ = this.pool) || void 0 === QQ || QQ.dispose(), this.pool = null
      }
      setView(QQ, WQ) {
        const {
          cameraDir: XQ,
          lastDir: wQ
        } = this, qQ = QQ.cameraDirection;
        for (let gQ = 0; gQ < 3; gQ++) wQ[gQ] = XQ[gQ], XQ[gQ] = qQ[gQ];
        const TQ = XQ[0] * wQ[0] + XQ[1] * wQ[1] + XQ[2] * wQ[2],
          zQ = Number.isNaN(TQ) ? 0 : Math.acos(Math.min(1, Math.max(-1, TQ))),
          {
            width: sQ,
            height: FQ
          } = this,
          PQ = QQ.tanHalfFovX;
        ! function(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
          let sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          QQ.x = WQ[0], QQ.y = WQ[1], QQ.z = WQ[2], QQ.dx = XQ[0], QQ.dy = XQ[1], QQ.dz = XQ[2];
          const FQ = Math.min(Math.PI, Math.atan(Math.sqrt(wQ * wQ + qQ * qQ)) + bI + sQ);
          QQ.cosHalf = Math.cos(FQ), QQ.sinHalf = Math.sin(FQ), QQ.pxPerBlock = TQ / (2 * qQ), QQ.frameMs = zQ
        }(this.view, WQ, XQ, PQ, PQ * FQ / sQ, FQ * window.devicePixelRatio, this.frameMs, zQ)
      }
      queue(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = Math.max(this.clock.toLocal(QQ), this.lastPendingAt);
        this.lastPendingAt = zQ, this.pending.push({
          at: zQ,
          lines: WQ,
          line: XQ,
          name: wQ,
          pos: qQ,
          idx: TQ
        })
      }
      applyDue(QQ) {
        const {
          pending: WQ
        } = this;
        for (; this.pendingHead < WQ.length && WQ[this.pendingHead].at <= QQ;) {
          const QQ = WQ[this.pendingHead++];
          if (QQ.lines) this.applyLines(QQ.lines, QQ.at), QQ.lines = null;
          else {
            const WQ = this.lines.get(QQ.line);
            WQ && this.applyMove(WQ, QQ, QQ.at)
          }
        }
        this.pendingHead === WQ.length ? (WQ.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > WQ.length && (WQ.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(QQ, WQ) {
        this.clearIsland(QQ.baf2BeltIsland);
        for (const XQ of QQ.baf2BeltLineList) this.lines.set(XQ[0], iI(QQ.baf2BeltIsland, XQ, WQ));
        this.shown = [...this.lines.values()]
      }
      applyMove(QQ, WQ, XQ) {
        let {
          name: wQ,
          pos: qQ,
          idx: TQ
        } = WQ;
        QQ.changed = !0, QQ.loop && (cI(QQ, XQ), (0, BX.s)(QQ.items, QQ.length, XQ, QQ.cellsPerMs)), null !== wQ && null !== qQ ? (0, BX.u)(QQ.items, QQ.length, lI(wQ, XQ), qQ, XQ, QQ.cellsPerMs) : null !== wQ ? QQ.items.push(lI(wQ, XQ)) : QQ.items.length > TQ && this.release((0, BX.z)(QQ.items, QQ.length, XQ, QQ.cellsPerMs, TQ))
      }
      clearIsland(QQ) {
        for (const [WQ, XQ] of this.lines)
          if (XQ.island === QQ) {
            for (const QQ of XQ.items) this.release(QQ);
            this.lines.delete(WQ)
          }
      }
      release(QQ) {
        null !== QQ.kind && (QQ.kind.release(QQ.slot), QQ.kind = null, QQ.slot = -1, QQ.hidden = !0, QQ.drawn = NaN)
      }
    }
    var uI = XQ(36891),
      LI = XQ(38797);

    function kI(QQ) {
      let {
        depth: WQ,
        store: XQ,
        t: qQ
      } = QQ;
      const TQ = function(QQ) {
        const [WQ, XQ] = (0, wQ.useState)(QQ.lastPlayerY());
        return (0, Tg.f)(Lq, XQ), (0, wQ.useEffect)((() => {
          XQ(QQ.lastPlayerY())
        }), [QQ]), WQ
      }(XQ);
      if (null === TQ) return null;
      const [zQ, sQ] = WQ, FQ = TQ > zQ ? zQ : null !== sQ && TQ < sQ ? sQ : null, PQ = {
        y: GT(TQ),
        target: null === FQ ? "" : GT(FQ)
      };
      return (0, HT.jsx)("span", {
        className: vq()("Baf2QuestDepth", {
          Reached: null === FQ
        }),
        children: qQ(`${Pg}${null===FQ?"questDepthReached":"questDepth"}`, PQ)
      })
    }

    function fI(QQ) {
      let {
        also: WQ,
        view: XQ,
        t: wQ
      } = QQ;
      return (0, HT.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, HT.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, HT.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, HT.jsx)("strong", {
            children: wQ(`${Pg}questAlsoDownHere`)
          }), (0, HT.jsx)("span", {
            className: "Baf2QuestChips",
            children: WQ.map((QQ => {
              let [WQ, qQ, TQ, zQ] = QQ;
              return (0, HT.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": wQ(`${Pg}questAlsoItem`, {
                  item: Jg(wQ, XQ.itemNames[WQ], WQ),
                  have: String(qQ),
                  need: String(TQ)
                }),
                children: [(0, HT.jsx)(jg, {
                  item: WQ
                }), (0, HT.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${qQ}/${TQ}`
                }), null !== zQ && (0, HT.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: wQ(`${Pg}questAlsoDepth`, {
                    y: GT(zQ)
                  })
                })]
              }, WQ)
            }))
          })]
        })]
      })
    }
    var SI = XQ(3678);

    function tI(QQ) {
      let {
        expanded: WQ,
        inventoryOpen: XQ,
        children: qQ
      } = QQ;
      const TQ = (0, wQ.useRef)(null);
      return (0, wQ.useEffect)((() => {
        const QQ = TQ.current,
          WQ = null === QQ || void 0 === QQ ? void 0 : QQ.closest(".RightElements"),
          wQ = null === QQ || void 0 === QQ ? void 0 : QQ.firstElementChild;
        if (!QQ || !WQ || !wQ) return;
        return (0, LI.c)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [WQ, wQ], (() => {
          const qQ = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === qQ.length) return;
          const TQ = Math.max(...qQ.map((QQ => QQ.getBoundingClientRect().bottom))),
            zQ = WQ.getBoundingClientRect(),
            sQ = XQ ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (sQ) {
            const WQ = parseFloat(getComputedStyle(wQ).marginLeft) + parseFloat(getComputedStyle(wQ).marginRight),
              XQ = zQ.right - sQ.getBoundingClientRect().right - 8 - WQ;
            QQ.style.setProperty("--baf2-quest-room", `${XQ}px`), QQ.classList.toggle("NoRoom", XQ < 150)
          } else QQ.style.removeProperty("--baf2-quest-room"), QQ.classList.remove("NoRoom");
          const FQ = TQ - zQ.top + 8,
            PQ = function(QQ, WQ, XQ) {
              const wQ = WQ.getBoundingClientRect(),
                qQ = QQ.getBoundingClientRect(),
                TQ = (0, SI.h)(qQ.left, qQ.right, wQ.top + XQ);
              if (null !== TQ && TQ < wQ.bottom) return TQ - wQ.top;
              return wQ.height - (parseFloat(getComputedStyle(WQ).paddingBottom) || 0)
            }(QQ, WQ, FQ) - 8,
            gQ = window.innerHeight / 2 - zQ.top,
            {
              top: JQ,
              maxHeight: rQ
            } = function(QQ, WQ, XQ, wQ, qQ) {
              const TQ = Math.min(XQ, Math.max(0, WQ - QQ)),
                zQ = qQ ? QQ : Math.max(QQ, Math.min(wQ - TQ / 2, WQ - TQ));
              return {
                top: zQ,
                maxHeight: Math.max(0, WQ - zQ)
              }
            }(FQ, PQ, function(QQ) {
              const WQ = QQ.firstElementChild,
                XQ = WQ ? WQ.scrollHeight - WQ.clientHeight : 0;
              return QQ.getBoundingClientRect().height + Math.max(0, XQ)
            }(wQ), gQ, dT());
          QQ.style.top = `${JQ}px`, QQ.style.maxHeight = `${rQ}px`
        }))
      }), [XQ]), (0, HT.jsx)("div", {
        ref: TQ,
        className: vq()("Baf2QuestHud", {
          Expanded: WQ
        }),
        children: qQ
      })
    }

    function oI(QQ) {
      let {
        amount: WQ,
        t: XQ
      } = QQ;
      return (0, HT.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, HT.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, HT.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: XQ(`${Pg}questStepsDone`, {
            amount: String(WQ)
          })
        })]
      })
    }

    function eI(QQ) {
      let {
        pulse: WQ
      } = QQ;
      return 0 === WQ ? null : (0, HT.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, WQ)
    }

    function nI(QQ) {
      var WQ;
      let {
        store: XQ
      } = QQ;
      const qQ = (0, Tg.j)(uq, XQ.get()),
        [TQ, zQ] = (0, wQ.useState)(!1),
        {
          t: sQ
        } = (0, lq.C)(),
        FQ = (0, bT.h)(vT),
        {
          openInGameMenuName: PQ,
          openEverythingMenuName: gQ
        } = (0, Gq.n)(["openInGameMenuName", "openEverythingMenuName"]),
        JQ = "inventory" === PQ && null === gQ,
        rQ = null !== PQ && !JQ || null !== gQ;
      if (! function(QQ) {
          return null !== QQ.name || null !== QQ.side
        }(qQ) || rQ || "off" === qQ.tutorial) return null;
      const IQ = eq(qQ.rows),
        jQ = IQ.filter((QQ => QQ.done)).length,
        BQ = function(QQ, WQ) {
          const XQ = Yq(QQ);
          let wQ = 0;
          return QQ.filter(((QQ, qQ) => !!QQ.justFinished || !(QQ.done || qQ < XQ || wQ > WQ) && (wQ++, !0)))
        }(qQ.rows, FQ ? 0 : 2),
        yQ = FQ ? BQ : function(QQ, WQ) {
          const XQ = WQ.filter((QQ => !QQ.justFinished));
          if (XQ.length < 2) return [...WQ];
          const wQ = QQ.indexOf(XQ[0]),
            qQ = QQ.indexOf(XQ[XQ.length - 1]),
            TQ = new Set(eq(QQ));
          return QQ.filter(((QQ, XQ) => WQ.includes(QQ) || QQ.done && TQ.has(QQ) && XQ > wQ && XQ < qQ))
        }(qQ.rows, BQ),
        VQ = TQ ? qQ.rows : yQ,
        DQ = TQ || FQ ? [] : function(QQ, WQ) {
          const XQ = new Array(WQ.length + 1).fill(0),
            wQ = new Set(eq(QQ));
          let qQ = 0;
          for (const TQ of QQ) qQ < WQ.length && TQ === WQ[qQ] ? qQ++ : TQ.done && wQ.has(TQ) && XQ[qQ]++;
          return XQ
        }(qQ.rows, yQ),
        pQ = TQ || yQ.length < qQ.rows.length || null !== qQ.reward,
        GQ = oq(qQ),
        UQ = GQ ? sQ(`${Pg}questLineComplete`) : qQ.tier ? Vg(sQ, qQ.tier) : sQ(`${Pg}currentQuest`),
        bQ = function(QQ) {
          var WQ, XQ;
          if (oq(QQ)) return null;
          const wQ = null === (WQ = QQ.chapters) || void 0 === WQ ? void 0 : WQ.find((WQ => {
            let [XQ] = WQ;
            return XQ === QQ.tier
          }));
          if (!wQ) return null;
          const qQ = wQ[1].filter((QQ => !QQ[4]));
          if (0 === qQ.length) return null;
          const TQ = null === (XQ = QQ.name) || void 0 === XQ ? void 0 : XQ[0],
            zQ = QQ => qQ.findIndex((WQ => WQ[0] === TQ && (!QQ || !WQ[3]))),
            sQ = zQ(!0),
            FQ = sQ >= 0 ? sQ : zQ(!1);
          if (FQ >= 0) return [FQ + 1, qQ.length];
          const PQ = qQ.filter((QQ => QQ[3])).length;
          return [Math.min(PQ + 1, qQ.length), qQ.length]
        }(qQ);
      return (0, HT.jsx)(uI.g, {
        placement: "topRight",
        children: (0, HT.jsx)(tI, {
          expanded: TQ,
          inventoryOpen: JQ,
          children: (0, HT.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: gg,
            children: [null !== qQ.name && (0, HT.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, HT.jsx)(eI, {
                pulse: qQ.pulse
              }), (0, HT.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, HT.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [UQ, bQ && (0, HT.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": sQ(`${Pg}questPlaceLabel`, {
                      n: String(bQ[0]),
                      total: String(bQ[1])
                    }),
                    children: sQ(`${Pg}questPlace`, {
                      n: String(bQ[0]),
                      total: String(bQ[1])
                    })
                  }), qQ.tier && qQ.core && !GQ && (0, HT.jsx)(Dg, {
                    core: qQ.core,
                    t: sQ
                  })]
                })
              }), (0, HT.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: sQ(`${Pg}${qQ.name[0]}`, rg(qQ.name[1]))
              }), (IQ.length > 1 || pQ) && (0, HT.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [IQ.length > 1 && (0, HT.jsx)(pg, {
                  rows: IQ,
                  t: sQ
                }), pQ && (0, HT.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": TQ,
                  onClick: () => {
                    zQ(!TQ)
                  },
                  children: [(0, HT.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: sQ(`${Pg}questStepsToggle`, {
                      done: String(jQ),
                      total: String(IQ.length)
                    })
                  }), (0, HT.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: TQ ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, HT.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [VQ.map(((QQ, WQ) => {
                  var TQ;
                  const zQ = QQ.current && qQ.depth;
                  return (0, HT.jsxs)(wQ.Fragment, {
                    children: [(null !== (TQ = DQ[WQ]) && void 0 !== TQ ? TQ : 0) > 0 && (0, HT.jsx)(oI, {
                      amount: DQ[WQ],
                      t: sQ
                    }), (0, HT.jsx)(Gg, {
                      row: QQ,
                      view: qQ,
                      t: sQ,
                      extra: zQ && (0, HT.jsx)(kI, {
                        depth: zQ,
                        store: XQ,
                        t: sQ
                      })
                    })]
                  }, QQ.id)
                })), (null !== (WQ = DQ[VQ.length]) && void 0 !== WQ ? WQ : 0) > 0 && (0, HT.jsx)(oI, {
                  amount: DQ[VQ.length],
                  t: sQ
                }), qQ.also.length > 0 && (0, HT.jsx)(fI, {
                  also: qQ.also,
                  view: qQ,
                  t: sQ
                })]
              }), TQ && qQ.reward && (0, HT.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [sQ(`${Pg}questReward`), (0, HT.jsx)(jg, {
                  item: qQ.reward
                }), Jg(sQ, qQ.itemNames[qQ.reward], qQ.reward)]
              })]
            }), qQ.side && (0, HT.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [Sq(qQ, Date.now()) && (0, HT.jsx)(eI, {
                pulse: qQ.sideCameUpAt
              }), (0, HT.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: sQ(`${Pg}questSide`)
              }), (0, HT.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: sQ(`${Pg}${qQ.side.name[0]}`, rg(qQ.side.name[1]))
              }), (0, HT.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, HT.jsx)(Gg, {
                  row: qQ.side.row,
                  view: qQ,
                  t: sQ
                })
              })]
            })]
          })
        })
      })
    }
    const xI = "baf2ToastView";
    class YI {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = QQ, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: QQ,
          holdMs: WQ
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const QQ = this.dropCovered();
          QQ && this.show(QQ.message, QQ.holdMs)
        }), 250));
        const XQ = this.dropCovered();
        null !== XQ && (XQ.holdMs > 0 || "baf2ToastCelebrate" === XQ.message.baf2ToastStyle) && "baf2ToastCelebrate" !== QQ.baf2ToastStyle && this.show(XQ.message, XQ.holdMs);
        const wQ = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== QQ.baf2ToastStyle && wQ > 0) return this.pending = {
          message: QQ,
          holdMs: WQ
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const QQ = this.pending;
          this.pending = null, QQ && this.present(QQ.message, QQ.holdMs)
        }), wQ));
        this.present(QQ, WQ)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(QQ, WQ) {
        this.clearTimers(), this.pending = null;
        const XQ = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: QQ.baf2ToastText,
          style: QQ.baf2ToastStyle,
          swapped: XQ,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === QQ.baf2ToastStyle ? 1500 : WQ), this.mB();
        const wQ = Math.min(8e3, Math.max(1e3, QQ.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), wQ)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.mB(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.mB()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const QQ = this.covering;
        return this.covering = null, QQ
      }
      mB() {
        Eq.k.mB(xI, this.view, !0)
      }
    }
    var NI = XQ(78);
    const ZI = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function OI(QQ) {
      let {
        store: WQ
      } = QQ;
      const XQ = (0, Tg.j)(xI, WQ.get()),
        {
          openInGameMenuName: wQ,
          openEverythingMenuName: qQ
        } = (0, Gq.n)(["openInGameMenuName", "openEverythingMenuName"]),
        TQ = XQ && (0, HT.jsxs)("div", {
          className: vq()("Baf2Toast", ZI[XQ.style], {
            Swapped: XQ.swapped,
            Leaving: XQ.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === XQ.style && (0, HT.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, HT.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, HT.jsx)(cq.e, {
              text: XQ.text
            })
          })]
        }, XQ.id);
      return null !== wQ && null === qQ ? (0, NI.createPortal)((0, HT.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: TQ
      }), document.body) : (0, HT.jsx)(uI.g, {
        children: TQ
      })
    }
    const KI = "baf2AreaView";
    class mI {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.Ds = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.Ds = null
      }
      arrive(QQ, WQ) {
        WQ && function(QQ) {
          return "home" === QQ.baf2AreaPlace && void 0 !== QQ.baf2AreaNameText
        }(QQ) ? this.Ds = QQ : this.show(QQ)
      }
      release() {
        const QQ = this.Ds;
        null !== QQ && this.show(QQ)
      }
      show(QQ) {
        this.clearTimer(), this.Ds = null;
        const WQ = void 0 === QQ.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: QQ,
          ms: WQ
        }, this.mB(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.mB()
        }), WQ)
      }
      dispose() {
        this.clearTimer(), this.Ds = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      mB() {
        Eq.k.mB(KI, this.view, !0)
      }
    }

    function MI(QQ) {
      var WQ;
      let {
        store: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, lq.C)(), qQ = (0, Tg.j)(KI, XQ.get());
      if (!qQ) return null;
      const {
        area: TQ
      } = qQ, zQ = TQ.baf2AreaResetMinutes;
      return (0, HT.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": TQ.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${qQ.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, HT.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), TQ.baf2AreaHeading && (0, HT.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: wQ(TQ.baf2AreaHeading)
        }), (0, HT.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (WQ = TQ.baf2AreaNameText) && void 0 !== WQ ? WQ : wQ(TQ.baf2AreaName)
        }), TQ.baf2AreaNote && (0, HT.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: wQ(TQ.baf2AreaNote)
        }), void 0 !== zQ && (0, HT.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: wQ("buildAFactory2Game:areaWildsReset", {
            time: UT(wQ, 60 * zQ)
          })
        })]
      }, qQ.id)
    }
    const Qj = "baf2GearGauge";
    class Wj {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      KV(QQ) {
        var WQ;
        if (this.clearLinger(), null === QQ.gearPowerKind) return void this.set(null);
        const XQ = "jetpack" === QQ.gearPowerKind && (wQ = QQ.gearChargeState, qQ = QQ.gearCharge, "flying" === wQ || "charging" === wQ || "outOfCharge" === wQ || "ceiling" === wQ || "offPlot" === wQ || "noPower" === wQ && qQ <= 0);
        var wQ, qQ;
        const TQ = !0 === (null === (WQ = this.view) || void 0 === WQ ? void 0 : WQ.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          zQ = XQ || "jetpack" === QQ.gearPowerKind && TQ;
        this.set({
          gauge: QQ,
          jetShown: zQ
        }), zQ && !XQ && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(QQ) {
        this.view = QQ, Eq.k.mB(Qj, QQ, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const Xj = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function wj(QQ) {
      let {
        store: WQ
      } = QQ;
      const XQ = (0, Tg.j)(Qj, WQ.get());
      return XQ ? "jetpack" === XQ.gauge.gearPowerKind ? (0, HT.jsx)(qj, {
        view: XQ
      }) : (0, HT.jsx)(Tj, {
        gauge: XQ.gauge
      }) : null
    }

    function qj(QQ) {
      let {
        view: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)(), {
        gauge: wQ
      } = WQ, qQ = wQ.gearChargeMax > 0 ? Math.max(0, Math.min(1, wQ.gearCharge / wQ.gearChargeMax)) : 0, TQ = Xj[wQ.gearChargeState], zQ = TQ ? XQ(TQ) : null;
      return (0, HT.jsxs)("div", {
        className: vq()("Baf2JetArc", {
          Shown: WQ.jetShown,
          Low: qQ < .2,
          Warm: qQ >= .2 && qQ < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - qQ)
        },
        "aria-hidden": !WQ.jetShown,
        children: [(0, HT.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, HT.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: zj,
            pathLength: 100
          }), (0, HT.jsx)("path", {
            className: "Baf2JetArcFill",
            d: zj,
            pathLength: 100
          })]
        }), (0, HT.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * qQ), "%"]
        }), zQ && (0, HT.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: zQ
        })]
      })
    }

    function Tj(QQ) {
      let {
        gauge: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)(), wQ = function(QQ, WQ) {
        switch (WQ.gearPowerKind) {
          case "skyPack":
            return QQ("buildAFactory2Game:gearSkyPack", {
              charge: WQ.gearCharge,
              max: WQ.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return QQ("buildAFactory2Game:gearIslandDraw", {
              power: KQ(WQ.gearIslandPower),
              cost: KQ(WQ.gearCostPerUse)
            });
          case "barrier":
            return QQ("buildAFactory2Game:gearBarrier", {
              shield: Math.round(WQ.gearCharge),
              max: WQ.gearChargeMax,
              power: KQ(WQ.gearIslandPower)
            });
          default:
            return null
        }
      }(XQ, WQ);
      return null === wQ ? null : (0, HT.jsx)(uI.g, {
        children: (0, HT.jsx)("div", {
          className: vq()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === WQ.gearChargeState || "outOfCharge" === WQ.gearChargeState
          }),
          role: "status",
          children: wQ
        })
      })
    }
    const zj = (() => {
      const QQ = QQ => {
        const WQ = QQ * Math.PI / 180;
        return `${(40*Math.cos(WQ)).toFixed(2)} ${(40*Math.sin(WQ)).toFixed(2)}`
      };
      return `M ${QQ(160)} A 40 40 0 1 1 ${QQ(380)}`
    })();
    class sj {
      constructor(QQ) {
        this.onElement = QQ, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      KV(QQ) {
        let WQ = QQ.baf2LabelsReset || QQ.baf2LabelsIsland !== this.island;
        WQ && (this.labels.clear(), this.island = QQ.baf2LabelsIsland);
        for (const [XQ, wQ, qQ, TQ, zQ] of QQ.baf2LabelsList) {
          const QQ = `${XQ},${wQ},${qQ}`,
            sQ = this.labels.get(QQ);
          null === TQ ? WQ = this.labels.delete(QQ) || WQ : sQ && sQ.item === TQ && (sQ.count === zQ || sQ.count >= 0 && zQ >= 0) ? sQ.count !== zQ && (sQ.count = zQ, this.writeCount(QQ, zQ)) : (this.labels.set(QQ, {
            key: QQ,
            pos: [XQ, wQ, qQ],
            item: TQ,
            count: zQ
          }), this.writeCount(QQ, zQ), WQ = !0)
        }
        if (this.changes++, WQ) {
          this.snapshot = [...this.labels.values()];
          for (const QQ of this.listeners) QQ()
        }
      }
      bindCount(QQ) {
        const WQ = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${QQ}`;
        let XQ = this.countRefs.get(WQ);
        return XQ || (XQ = XQ => {
          var wQ, qQ;
          XQ ? (this.countElements.set(WQ, XQ), this.writeCount(QQ, null !== (wQ = null === (qQ = this.labels.get(QQ)) || void 0 === qQ ? void 0 : qQ.count) && void 0 !== wQ ? wQ : -1)) : (this.countElements.delete(WQ), this.countRefs.delete(WQ))
        }, this.countRefs.set(WQ, XQ)), XQ
      }
      setCountWords(QQ) {
        this.countWords = QQ;
        for (const [WQ, XQ] of this.labels) this.writePart(`words|${WQ}`, QQ(XQ.count), XQ.count)
      }
      writeCount(QQ, WQ) {
        this.writePart(`bare|${QQ}`, pT(WQ), WQ), this.countElements.has(`words|${QQ}`) && this.writePart(`words|${QQ}`, this.countWords(WQ), WQ)
      }
      writePart(QQ, WQ, XQ) {
        const wQ = this.countElements.get(QQ);
        if (!wQ || XQ < 0) return;
        const qQ = wQ.firstChild;
        qQ && 3 === qQ.nodeType && !qQ.nextSibling ? qQ.nodeValue !== WQ && (qQ.nodeValue = WQ) : wQ.textContent !== WQ && (wQ.textContent = WQ)
      }
      list() {
        return this.snapshot
      }
      at(QQ) {
        return this.labels.get(`${QQ[0]},${QQ[1]},${QQ[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      bind(QQ) {
        let WQ = this.refs.get(QQ);
        return WQ || (WQ = WQ => {
          const XQ = this.elements.get(QQ);
          var wQ, qQ;
          XQ && (null === (wQ = this.onElement) || void 0 === wQ || wQ.call(this, XQ, !1));
          WQ ? (this.elements.set(QQ, WQ), null === (qQ = this.onElement) || void 0 === qQ || qQ.call(this, WQ, !0)) : (this.elements.delete(QQ), this.refs.delete(QQ))
        }, this.refs.set(QQ, WQ)), WQ
      }
      onAfterRender(QQ, WQ, XQ, wQ) {
        for (const qQ of this.snapshot) {
          const TQ = this.elements.get(qQ.key);
          if (!TQ) continue;
          if (wQ(qQ.key)) {
            (0, FI.h)(TQ, !0);
            continue
          }
          const zQ = (0, jI.b)(TQ, QQ, WQ, qQ.pos, 1.1, 24);
          zQ && XQ.add(zQ, TQ, 0, !1)
        }
      }
    }
    const Fj = (0, wQ.memo)((function(QQ) {
        let {
          item: WQ
        } = QQ;
        return (0, HT.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, HT.jsx)(iq.d, {
            itemName: WQ,
            amount: 0
          })
        })
      })),
      Pj = (0, wQ.memo)((function(QQ) {
        let {
          label: WQ,
          bindRef: XQ,
          countRef: wQ,
          wordsRef: qQ
        } = QQ;
        return (0, HT.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: XQ,
          hidden: !0,
          children: [(0, HT.jsx)(Fj, {
            item: WQ.item
          }), WQ.count >= 0 && (0, HT.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, HT.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: qQ
            }), (0, HT.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: wQ
            })]
          })]
        })
      })),
      gj = (0, wQ.memo)((function(QQ) {
        let {
          store: WQ
        } = QQ;
        const {
          t: XQ
        } = (0, lq.C)(), [qQ, TQ] = (0, wQ.useState)((() => WQ.list()));
        return (0, wQ.useEffect)((() => (TQ(WQ.list()), WQ.subscribe((() => {
          TQ(WQ.list())
        })))), [WQ]), (0, wQ.useEffect)((() => {
          WQ.setCountWords((QQ => XQ("buildAFactory2Game:labelSiloCount", {
            count: pT(QQ)
          })))
        }), [WQ, XQ]), (0, HT.jsx)("div", {
          className: "Baf2IslandLabels",
          children: qQ.map((QQ => -2 === QQ.count ? null : (0, HT.jsx)(Pj, {
            label: QQ,
            bindRef: WQ.bind(QQ.key),
            countRef: WQ.bindCount(QQ.key),
            wordsRef: WQ.bindCount(QQ.key, "words")
          }, QQ.key)))
        })
      })),
      Jj = {
        read: () => !0,
        write: () => {}
      };

    function rj(QQ) {
      return `${QQ[0]},${QQ[1]},${QQ[2]}`
    }

    function Ij(QQ) {
      let [WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ] = QQ;
      const IQ = void 0 === JQ || void 0 === rQ ? function(QQ) {
        return [Math.floor((QQ - 1) / 2), 0]
      }(TQ) : [JQ, rQ];
      return {
        kind: 0 === FQ ? "reactor" : "battery",
        box: oX([WQ, XQ, wQ], qQ, TQ, zQ, sQ, IQ),
        formed: 1 === PQ,
        level: gQ
      }
    }
    class jj {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jj;
        this.guideSetting = QQ, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = QQ.read()
      }
      KV(QQ) {
        var WQ;
        const XQ = new Map;
        for (const wQ of QQ.baf2RxPlanList) {
          const QQ = Ij(wQ);
          XQ.set(rj(QQ.box.ctrl), QQ)
        }
        this.plans = XQ, this.layouts = new Map((null !== (WQ = QQ.baf2RxLayouts) && void 0 !== WQ ? WQ : []).map((QQ => {
          let [WQ, XQ, wQ, qQ] = QQ;
          return [rj([WQ, XQ, wQ]), qQ]
        }))), this.predicted.clear(), QQ.baf2RxFormedAt && (this.formed = {
          ctrl: QQ.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const wQ of [...this.startersOff]) {
          const QQ = XQ.get(wQ);
          QQ && !QQ.formed || this.startersOff.delete(wQ)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((QQ => this.planByKey(QQ)))
      }
      planAt(QQ) {
        return this.planByKey(rj(QQ))
      }
      predictSize(QQ, WQ) {
        this.predicted.set(rj(QQ), WQ), this.changed()
      }
      unpredict(QQ) {
        this.predicted.delete(rj(QQ)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(QQ) {
        var WQ;
        const XQ = rj(QQ);
        return this.predicted.has(XQ) ? null : null !== (WQ = this.layouts.get(XQ)) && void 0 !== WQ ? WQ : null
      }
      showsStarter(QQ) {
        return !this.startersOff.has(rj(QQ))
      }
      setStarter(QQ, WQ) {
        const XQ = rj(QQ);
        WQ ? this.startersOff.delete(XQ) : this.startersOff.add(XQ), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(QQ) {
        this.guide = QQ, this.guideSetting.write(QQ), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(QQ) {
        const WQ = this.plans.get(QQ);
        if (!WQ) return null;
        const XQ = this.predicted.get(QQ);
        return XQ ? {
          ...WQ,
          box: nX(WQ.box, WQ.kind, XQ[0], XQ[1], XQ[2])
        } : WQ
      }
      changed() {
        this.version++;
        for (const QQ of this.listeners) QQ()
      }
    }
    var Bj = XQ(231);
    const yj = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Vj(QQ, WQ, XQ, wQ) {
      const qQ = QQ.length / 3;
      for (let TQ = 0; TQ < yj.length / 3; TQ++) QQ.push(yj[3 * TQ] * wQ[0] / 2 + XQ[0], yj[3 * TQ + 1] * wQ[1] / 2 + XQ[1], yj[3 * TQ + 2] * wQ[2] / 2 + XQ[2]);
      for (let TQ = qQ; TQ < qQ + 24; TQ += 4) WQ.push(TQ, TQ + 1, TQ + 2, TQ, TQ + 2, TQ + 3)
    }

    function Dj(QQ, WQ, XQ) {
      const wQ = WQ[0][0],
        qQ = [],
        TQ = [];
      for (const [zQ, sQ] of WQ) Vj(qQ, TQ, [zQ[0] - wQ[0], zQ[1] - wQ[1], zQ[2] - wQ[2]], sQ);
      return QQ.createGameMesh({
        positions: qQ,
        indices: TQ
      }, XQ, wQ)
    }

    function pj(QQ, WQ) {
      const XQ = QQ.w - 2,
        wQ = QQ.d - 2;
      return 1 === function(QQ, WQ, XQ, wQ) {
        const [qQ, TQ, zQ] = QQ;
        if (Number(qQ <= 2) + Number(TQ <= 2) + Number(zQ <= 2) >= 2) return function(QQ, WQ, XQ) {
          return (QQ + WQ + XQ) % 2 === 0 ? 1 : 3
        }(WQ, XQ, wQ);
        const [sQ, FQ] = qQ >= TQ && qQ >= zQ ? [XQ, wQ] : TQ >= zQ ? [WQ, wQ] : [WQ, XQ];
        return sQ % 2 === 0 && FQ % 2 === 0 ? 1 : 3
      }([XQ, QQ.h - 2, wQ], WQ % XQ, Math.floor(WQ / (XQ * wQ)), Math.floor(WQ / XQ) % wQ) ? "rod" : "channel"
    }

    function Gj(QQ, WQ, XQ) {
      if ("reactor" !== QQ.kind || QQ.formed || !WQ) return !1;
      const wQ = NX(QQ.box);
      for (let qQ = 0; qQ < wQ; qQ++) {
        const QQ = XQ(qQ);
        if (null !== QQ && iX(QQ)) return !1
      }
      return !0
    }

    function Uj(QQ, WQ, XQ, wQ, qQ) {
      var TQ;
      let zQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const sQ = Qw(QQ.box, WQ),
        FQ = qw(QQ.kind, sQ, XQ);
      if ("wrong" === FQ || "blocked" === FQ) return "wrong";
      if (!qQ) return null;
      if ("inside" === sQ && "reactor" === QQ.kind && "Air" === cX(XQ)) {
        if (null !== zQ) {
          var PQ;
          const XQ = wr[qr(zQ, Ww(QQ.box, WQ))];
          return XQ && null !== (PQ = lF(XQ)) && void 0 !== PQ ? PQ : null
        }
        if (wQ) return pj(QQ.box, Ww(QQ.box, WQ))
      }
      if ("missing" !== FQ) return null;
      const gQ = Tw(QQ.kind, sQ);
      return null === gQ ? null : null !== (TQ = lF(gQ)) && void 0 !== TQ ? TQ : null
    }
    const bj = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function vj(QQ, WQ, XQ) {
      const wQ = XQ => {
        const wQ = WQ(mX(QQ.box, XQ));
        return null !== wQ && function(QQ, WQ) {
          return "reactor" !== QQ.kind || WQ !== OX(QQ.box) && "inside" !== Qw(QQ.box, WQ)
        }(QQ, XQ) && "ok" !== qw(QQ.kind, Qw(QQ.box, XQ), wQ)
      };
      if (XQ) {
        const TQ = MX(QQ.box, [Math.floor(XQ[0]), Math.floor(XQ[1]), Math.floor(XQ[2])]);
        if (TQ >= 0 && (wQ(TQ) || (qQ = TQ, "reactor" === QQ.kind && "inside" === Qw(QQ.box, qQ) && "Air" === WQ(mX(QQ.box, qQ))))) return TQ
      }
      var qQ;
      const TQ = NX(QQ.box);
      for (let zQ = 0; zQ < TQ; zQ++)
        if (wQ(zQ)) return zQ;
      return -1
    }

    function dj(QQ, WQ) {
      return Math.floor(WQ / (QQ.w * QQ.d))
    }

    function Hj(QQ, WQ, XQ) {
      return XQ >= 0 && dj(QQ, WQ) > dj(QQ, XQ)
    }

    function aj(QQ, WQ) {
      return WQ >= 0 && QQ.h >= 3 && dj(QQ, WQ) === QQ.h - 1
    }

    function lj(QQ) {
      const WQ = cX(QQ);
      return WQ === DX || "Collider" === WQ || "Laser" === WQ || WQ.startsWith("_Collider ")
    }

    function hj(QQ, WQ, XQ, wQ) {
      if (wQ(QQ)) return null;
      if (!bj.every((WQ => {
          let [wQ, qQ, TQ] = WQ;
          const zQ = XQ([QQ[0] + wQ, QQ[1] + qQ, QQ[2] + TQ]);
          return null !== zQ && !kX("reactor", zQ) && "reactor" !== AX(zQ)
        }))) return null;
      const qQ = fX("reactor").min,
        TQ = oX([QQ[0], QQ[1], QQ[2]], function(QQ, WQ) {
          const XQ = WQ[0] - (QQ[0] + .5),
            wQ = WQ[2] - (QQ[2] + .5);
          return Math.abs(XQ) >= Math.abs(wQ) ? XQ >= 0 ? 2 : 4 : wQ >= 0 ? 1 : 3
        }(QQ, WQ), qQ, qQ, qQ, eX("reactor", qQ)),
        zQ = OX(TQ);
      let sQ = !0;
      for (let FQ = 0; FQ < NX(TQ) && sQ; FQ++) {
        if (FQ === zQ) continue;
        const QQ = mX(TQ, FQ),
          WQ = XQ(QQ);
        sQ = !wQ(QQ) && (null === WQ || !lj(WQ))
      }
      return {
        box: TQ,
        fits: sQ
      }
    }
    const ij = aF,
      cj = "baf2Goal",
      Aj = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Rj = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Ej = .4;

    function Cj(QQ, WQ) {
      let [XQ, wQ, qQ] = QQ;
      const TQ = CF([XQ - .02, wQ - .02, qQ - .02], [XQ + 1.02, wQ + 1.02, qQ + 1.02], .07);
      return WQ && (TQ.push([
        [XQ + .5, wQ + 1 + .7, qQ + .5],
        [.08, 1.4, .08]
      ]), TQ.push([
        [XQ + .5, wQ + 1 + 1.4 + .2, qQ + .5],
        [Ej, Ej, Ej]
      ])), TQ
    }

    function uj(QQ, WQ) {
      let [XQ, wQ, qQ] = WQ;
      return QQ.isBlockInLoadedChunk(XQ, wQ, qQ) ? QQ.blockIdToBlockName(QQ.getBlockId(XQ, wQ, qQ)) : null
    }
    let Lj = null;
    const kj = new Set;
    let fj = null;

    function Sj(QQ) {
      Lj = QQ;
      for (const WQ of kj) WQ(QQ)
    }
    class tj {
      constructor(QQ) {
        var WQ;
        this.plans = QQ, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (WQ = QQ => {
          var WQ, XQ;
          this.setGoal(null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.goal) && void 0 !== WQ ? WQ : null, null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.startsBattery) && void 0 !== XQ && XQ)
        }, fj ??= [Eq.k.subscribe("setDirectionArrow", (QQ => {
          let {
            id: WQ,
            position: XQ,
            text: wQ
          } = QQ;
          WQ === cj && Sj({
            goal: [Math.floor(XQ[0]), Math.floor(XQ[1]), Math.floor(XQ[2])],
            startsBattery: JSON.stringify(null !== wQ && void 0 !== wQ ? wQ : null).includes("arrowStartBattery")
          })
        })), Eq.k.subscribe("clearDirectionArrow", (QQ => {
          let {
            id: WQ
          } = QQ;
          null !== WQ && WQ !== cj || Sj(null)
        }))], kj.add(WQ), WQ(Lj), () => {
          kj.delete(WQ)
        })
      }
      onAfterRender(QQ, WQ) {
        const XQ = performance.now();
        if (this.cues.length > 0) {
          const WQ = .55 + .45 * Math.sin(XQ / 1100 * Math.PI * 2);
          for (const XQ of this.cues) QQ.setGameMesh(XQ, {
            visibility: WQ
          })
        }
        if (XQ - this.lastCheckMs < 150) return;
        this.lastCheckMs = XQ;
        const wQ = this.plans.all().filter((QQ => {
            const [XQ, wQ, qQ] = QQ.box.ctrl;
            return (!QQ.formed || null !== this.plans.layoutOf(QQ.box.ctrl)) && (XQ - WQ[0]) ** 2 + (wQ - WQ[1]) ** 2 + (qQ - WQ[2]) ** 2 <= 2304
          })),
          qQ = function(QQ, WQ) {
            const XQ = Bj.h.Ij,
              wQ = new Map;
            for (const TQ of WQ) {
              const WQ = mX(TQ.box, 0),
                zQ = mX(TQ.box, NX(TQ.box) - 1),
                sQ = [Math.min(WQ[0], zQ[0]), Math.min(WQ[1], zQ[1]), Math.min(WQ[2], zQ[2])].map((QQ => Math.floor(QQ / XQ))),
                FQ = [Math.max(WQ[0], zQ[0]), Math.max(WQ[1], zQ[1]), Math.max(WQ[2], zQ[2])].map((QQ => Math.floor(QQ / XQ)));
              for (let XQ = sQ[0]; XQ <= FQ[0]; XQ++)
                for (let WQ = sQ[1]; WQ <= FQ[1]; WQ++)
                  for (let TQ = sQ[2]; TQ <= FQ[2]; TQ++) {
                    var qQ;
                    wQ.set(`${XQ},${WQ},${TQ}`, null !== (qQ = QQ.getChunkVersion(XQ, WQ, TQ)) && void 0 !== qQ ? qQ : -1)
                  }
            }
            return wQ
          }(QQ, wQ);
        this.plans.getVersion() === this.storeVersion && (function(QQ, WQ) {
          if (QQ.size !== WQ.size) return !1;
          for (const [XQ, wQ] of QQ)
            if (WQ.get(XQ) !== wQ) return !1;
          return !0
        }(qQ, this.chunkVersions) || XQ - this.lastRescanMs < 600) || (this.lastRescanMs = XQ, this.storeVersion = this.plans.getVersion(), this.chunkVersions = qQ, this.redraw(QQ, wQ))
      }
      dispose(QQ) {
        this.unwatch(), Lj = null, this.clearMeshes(QQ), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(QQ, WQ) {
        var XQ;
        (null === QQ || void 0 === QQ ? void 0 : QQ.join()) === (null === (XQ = this.goal) || void 0 === XQ ? void 0 : XQ.join()) && WQ === this.startsBattery || (this.goal = QQ, this.startsBattery = WQ, this.storeVersion = -1)
      }
      redraw(QQ, WQ) {
        const XQ = WQ => uj(QQ, WQ),
          wQ = new Map,
          qQ = [],
          TQ = this.plans.guideOn();
        for (const PQ of WQ) {
          const QQ = TQ && Gj(PQ, this.plans.showsStarter(PQ.box.ctrl), (QQ => XQ(mX(PQ.box, QQ)))),
            WQ = "reactor" === PQ.kind ? this.plans.layoutOf(PQ.box.ctrl) : null,
            zQ = TQ && !PQ.formed ? vj(PQ, XQ, this.goal) : -1;
          zQ >= 0 && qQ.push([mX(PQ.box, zQ), aj(PQ.box, zQ)]);
          const sQ = NX(PQ.box);
          for (let qQ = 0; qQ < sQ; qQ++) {
            const sQ = mX(PQ.box, qQ),
              FQ = XQ(sQ),
              gQ = null === FQ ? null : Uj(PQ, qQ, FQ, QQ, TQ, WQ);
            if (null !== gQ) {
              const QQ = "wrong" !== gQ && Hj(PQ.box, qQ, zQ),
                WQ = QQ ? `${gQ}Dim` : gQ;
              let XQ = wQ.get(WQ);
              XQ || (XQ = {
                draw: {
                  ghost: gQ,
                  dim: QQ
                },
                list: []
              }, wQ.set(WQ, XQ)), XQ.list.push(sQ)
            }
          }
        }
        if (TQ && this.startsBattery && this.goal) {
          const [QQ, WQ, qQ] = this.goal, TQ = [];
          for (const [wQ, zQ, sQ] of Aj) {
            const FQ = [QQ + wQ, WQ + zQ, qQ + sQ];
            "Air" === XQ(FQ) && TQ.push(FQ)
          }
          if (TQ.length > 0) {
            var zQ;
            const QQ = null !== (zQ = wQ.get("cell")) && void 0 !== zQ ? zQ : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            QQ.list.push(...TQ), wQ.set("cell", QQ)
          }
        }
        const sQ = [...wQ.keys()].sort(),
          FQ = [...sQ.map((QQ => `${QQ}:${wQ.get(QQ).list.join(";")}`)), `cue:${qQ.join(";")}`].join("|");
        if (FQ !== this.shownKey) {
          this.shownKey = FQ, this.clearMeshes(QQ);
          for (const WQ of sQ) {
            const {
              draw: XQ,
              list: qQ
            } = wQ.get(WQ);
            this.meshes.push(this.build(QQ, XQ, qQ))
          }
          for (const [WQ, XQ] of qQ) this.cues.push(Dj(QQ, Cj(WQ, XQ), Rj))
        }
      }
      build(QQ, WQ, XQ) {
        let {
          ghost: wQ,
          dim: qQ
        } = WQ;
        const {
          size: TQ,
          colour: zQ,
          alpha: sQ
        } = ij[wQ], FQ = XQ[0], PQ = [], gQ = [];
        for (const [JQ, rQ, IQ] of XQ) Vj(PQ, gQ, [JQ - FQ[0] + .5, rQ - FQ[1] + .5, IQ - FQ[2] + .5], [TQ, TQ, TQ]);
        return QQ.createGameMesh({
          positions: PQ,
          indices: gQ
        }, {
          rgb: zQ,
          alpha: sQ * (qQ ? .3 : 1)
        }, FQ)
      }
      clearMeshes(QQ) {
        for (const WQ of [...this.meshes, ...this.cues]) QQ.disposeGameMesh(WQ);
        this.meshes = [], this.cues = []
      }
    }
    const oj = [.56, .83, 1],
      ej = [1, .3, .25];
    class nj {
      constructor(QQ) {
        this.plans = QQ, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(QQ, WQ, XQ) {
        var wQ;
        const qQ = performance.now();
        if (qQ - this.lastCheckMs < 150) return;
        this.lastCheckMs = qQ;
        const TQ = WQ => uj(QQ, WQ),
          zQ = null === (wQ = QQ.wXQ(WQ)) || void 0 === wQ ? void 0 : wQ.name,
          sQ = zQ && "Reactor Frame" === cX(zQ) ? QQ.getTargetedBlock() : null,
          FQ = sQ ? [sQ.OB[0], sQ.OB[1], sQ.OB[2]] : null,
          PQ = null !== FQ && "Air" === TQ(FQ) && FQ.every(((QQ, WQ) => Math.abs(QQ + .5 - XQ[WQ]) <= 8)) ? hj(FQ, XQ, TQ, (QQ => this.inPlan(QQ))) : null,
          gQ = PQ ? `${PQ.box.ctrl.join()}|${PQ.box.rot}|${PQ.fits}` : "";
        gQ !== this.shownKey && this.show(QQ, gQ, PQ)
      }
      dispose(QQ) {
        this.clear(QQ), this.shownKey = ""
      }
      inPlan(QQ) {
        return this.plans.all().some((WQ => MX(WQ.box, QQ) >= 0))
      }
      show(QQ, WQ, XQ) {
        if (this.clear(QQ), this.shownKey = WQ, !XQ) return;
        const {
          box: wQ,
          fits: qQ
        } = XQ, TQ = qQ ? oj : ej, {
          lo: zQ,
          hi: sQ
        } = EF(wQ);
        this.meshes.push(Dj(QQ, CF(zQ, sQ, .05), {
          rgb: TQ,
          alpha: 1
        }));
        const FQ = [],
          PQ = mX(wQ, 0)[1];
        for (let gQ = 0; gQ < wQ.w * wQ.d; gQ++) {
          const [QQ, , WQ] = mX(wQ, gQ);
          FQ.push([
            [QQ + .5, PQ + .02 + .01, WQ + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(Dj(QQ, FQ, {
          rgb: TQ,
          alpha: .25
        }))
      }
      clear(QQ) {
        for (const WQ of this.meshes) QQ.disposeGameMesh(WQ);
        this.meshes = []
      }
    }
    const xj = "buildAFactory2Game:";

    function Yj(QQ, WQ, XQ) {
      const wQ = QQ => {
          const [XQ, wQ, qQ] = QQ.box.ctrl;
          return XQ === WQ[0] && wQ === WQ[1] && qQ === WQ[2]
        },
        qQ = QQ.find((QQ => wQ(QQ) || MX(QQ.box, WQ) >= 0));
      if (!qQ) return null;
      const TQ = function(QQ, WQ, XQ) {
        const {
          w: wQ,
          h: qQ,
          d: TQ
        } = QQ.box, zQ = "reactor" === QQ.kind ? `${xj}rxTitle` : `${xj}batTitle`;
        if (QQ.formed) return {
          key: `${xj}lookPlanFormed`,
          kindKey: zQ,
          w: wQ,
          h: qQ,
          d: TQ,
          count: 0
        };
        let sQ = 0,
          FQ = 0;
        for (let gQ = 0; gQ < NX(QQ.box); gQ++) {
          const WQ = XQ(mX(QQ.box, gQ)),
            wQ = null === WQ ? "ok" : qw(QQ.kind, Qw(QQ.box, gQ), WQ);
          sQ += "missing" === wQ ? 1 : 0, FQ += "wrong" === wQ || "blocked" === wQ ? 1 : 0
        }
        const PQ = function(QQ, WQ, XQ) {
          if (WQ < 0 || null === XQ) return;
          const wQ = Qw(QQ.box, WQ),
            qQ = qw(QQ.kind, wQ, XQ);
          return "blocked" === qQ ? `${xj}lookWhy_blocked` : "wrong" === qQ ? "ctrl" === wQ ? `${xj}lookWhy_ctrl` : `${xj}lookWhy_reactor_${wQ}` : void 0
        }(QQ, MX(QQ.box, WQ), XQ([WQ[0], WQ[1], WQ[2]]));
        if (sQ > 0) return {
          key: `${xj}lookPlanToBuild`,
          kindKey: zQ,
          w: wQ,
          h: qQ,
          d: TQ,
          count: sQ,
          why: PQ
        };
        if (FQ > 0) return {
          key: `${xj}lookPlanTakeOut`,
          kindKey: zQ,
          w: wQ,
          h: qQ,
          d: TQ,
          count: FQ,
          why: PQ
        };
        return {
          key: "reactor" === QQ.kind ? `${xj}lookPlanNoRods` : `${xj}lookPlanDone`,
          kindKey: zQ,
          w: wQ,
          h: qQ,
          d: TQ,
          count: 0
        }
      }(qQ, WQ, XQ);
      return "reactor" === qQ.kind && wQ(qQ) ? {
        ...TQ,
        ctrl: !0
      } : TQ
    }

    function Nj(QQ, WQ) {
      return QQ === WQ || null !== QQ && null !== WQ && QQ.key === WQ.key && QQ.kindKey === WQ.kindKey && QQ.w === WQ.w && QQ.h === WQ.h && QQ.d === WQ.d && QQ.count === WQ.count && QQ.why === WQ.why && QQ.ctrl === WQ.ctrl
    }

    function Zj() {
      return performance.now()
    }
    class Oj {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Zj;
        this.ticket = QQ, this.sent = WQ, this.backstopMs = XQ, this.now = wQ, this.queuedAt = void 0, this.queuedAt = wQ()
      }
      answered() {
        const QQ = this.now(),
          WQ = this.sent.leftAt(this.ticket);
        return null !== WQ && QQ - WQ > 4e3 || QQ - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Kj {
      constructor() {
        this.echoes = []
      }
      add(QQ) {
        this.echoes = this.echoes.filter((QQ => !QQ.answered())), this.echoes.push(QQ)
      }
      answered() {
        var QQ, WQ;
        return null === (QQ = null === (WQ = this.echoes.at(-1)) || void 0 === WQ ? void 0 : WQ.answered()) || void 0 === QQ || QQ
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((QQ => QQ.answered()))
      }
      age() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.echoes.at(-1)) || void 0 === WQ ? void 0 : WQ.age()) && void 0 !== QQ ? QQ : null
      }
      clear() {
        this.echoes = []
      }
    }
    class mj {
      constructor(QQ) {
        this.send = QQ, this.value = null, this.sent = null, this.echoes = new Kj, this.down = !1, this.timer = null
      }
      shown(QQ) {
        return null === this.value ? QQ : this.down || this.value !== this.sent ? this.value : QQ === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), QQ) : this.value
      }
      pendingFor(QQ) {
        return null !== this.value && this.value === this.sent && QQ !== this.value ? this.echoes.age() : null
      }
      assume(QQ, WQ) {
        this.disarm(), this.down = !1, this.value = QQ, this.sent = QQ, this.echoes.clear(), this.echoes.add(WQ)
      }
      press() {
        this.down = !0
      }
      drag(QQ) {
        this.value = QQ, this.arm(this.down ? 1e3 : 400)
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
      arm(QQ) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), QQ)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class Mj {
      constructor() {
        this.pending = new Map
      }
      set(QQ, WQ, XQ) {
        var wQ;
        const qQ = null !== (wQ = this.pending.get(QQ)) && void 0 !== wQ ? wQ : {
          on: WQ,
          echoes: new Kj
        };
        qQ.on = WQ, qQ.echoes.add(XQ), this.pending.set(QQ, qQ)
      }
      shown(QQ) {
        let WQ = QQ;
        for (const [XQ, {
            on: wQ,
            echoes: qQ
          }] of this.pending) 0 !== (QQ & XQ) === wQ && qQ.agreeCounts() || qQ.answered() ? this.pending.delete(XQ) : WQ = wQ ? WQ | XQ : WQ & ~XQ;
        return WQ
      }
      pendingMask() {
        let QQ = 0;
        for (const WQ of this.pending.keys()) QQ |= WQ;
        return QQ
      }
      pendingFor(QQ) {
        let WQ = null;
        for (const [wQ, {
            on: qQ,
            echoes: TQ
          }] of this.pending) {
          if (void 0 !== QQ && 0 !== (QQ & wQ) === qQ) continue;
          const zQ = TQ.age();
          var XQ;
          if (null !== zQ) WQ = Math.max(null !== (XQ = WQ) && void 0 !== XQ ? XQ : 0, zQ)
        }
        return WQ
      }
      clear() {
        this.pending.clear()
      }
    }
    class QB {
      constructor() {
        this.dims = null, this.echoes = new Kj, this.unmet = null
      }
      shown(QQ) {
        var WQ;
        return this.dims && (WB(this.dims, QQ) && this.echoes.agreeCounts() || this.echoes.answered()) && (WB(this.dims, QQ) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (WQ = this.dims) && void 0 !== WQ ? WQ : QQ
      }
      takeUnmet() {
        const QQ = this.unmet;
        return this.unmet = null, QQ
      }
      set(QQ, WQ) {
        this.dims = QQ, this.echoes.add(WQ)
      }
      pendingFor(QQ) {
        return null === this.dims || QQ && WB(this.dims, QQ) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function WB(QQ, WQ) {
      return QQ[0] === WQ[0] && QQ[1] === WQ[1] && QQ[2] === WQ[2]
    }
    class XB {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zj;
        this.now = QQ, this.taps = new Map
      }
      tap(QQ, WQ, XQ) {
        return !this.busy(QQ) && (this.taps.set(QQ, {
          at: this.now(),
          done: WQ
        }), XQ(), !0)
      }
      settle(QQ) {
        for (const [WQ, XQ] of [...this.taps]) XQ.done(QQ) && this.taps.delete(WQ)
      }
      busy(QQ) {
        const WQ = this.taps.get(QQ);
        return !!WQ && (!(this.now() - WQ.at >= 3e3) || (this.taps.delete(QQ), !1))
      }
      busyIds() {
        const QQ = new Set;
        for (const WQ of [...this.taps.keys()]) this.busy(WQ) && QQ.add(WQ);
        return QQ
      }
      clear() {
        this.taps.clear()
      }
    }

    function wB(QQ) {
      return {
        send: WQ => QQ.track(WQ),
        sendUrgent: (WQ, XQ) => QQ.track(WQ, {
          urgent: !0,
          supersedes: XQ
        }),
        leftAt: WQ => QQ.leftAt(WQ),
        holdReserve: () => QQ.holdUrgentReserve(),
        answerMs: Ez
      }
    }

    function qB() {
      return performance.now()
    }

    function TB(QQ) {
      const WQ = QQ.baf2RxNeed.map((QQ => {
        let [WQ, XQ] = QQ;
        return [WQ, XQ]
      }));
      return JSON.stringify([QQ.baf2RxFormed, WQ, QQ.baf2RxBad, QQ.baf2RxCells])
    }

    function zB(QQ, WQ) {
      const XQ = 0 !== (WQ & rW),
        wQ = 0 !== (QQ.baf2RxFlags & rW);
      return !XQ || wQ || "running" !== QQ.baf2RxState && "idle" !== QQ.baf2RxState ? !XQ && wQ && "scram" === QQ.baf2RxState && QQ.baf2RxFuel > 0 ? "idle" : QQ.baf2RxState : "scram"
    }

    function sB(QQ) {
      return JSON.stringify([QQ.baf2BatFormed, QQ.baf2BatNeed, QQ.baf2BatBad])
    }

    function FB(QQ) {
      return QQ.join(",")
    }
    class PB {
      constructor() {
        this.listeners = new Set
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      notify() {
        for (const QQ of this.listeners) QQ()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class gB {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(QQ, WQ) {
        this.lastAt = QQ, this.lastUntil = QQ + WQ
      }
      answered(QQ) {
        return this.lastAt >= QQ || QQ < this.lastUntil
      }
    }
    class JB {
      constructor(QQ, WQ) {
        this.link = QQ, this.now = WQ, this.hold = new QB, this.picked = null, this.notTaken = null
      }
      shown(QQ) {
        const WQ = this.hold.shown(QQ);
        if (this.hold.takeUnmet() && this.picked) {
          var XQ;
          const {
            plans: WQ,
            ctrl: wQ,
            at: qQ
          } = this.picked;
          this.picked = null, WQ.unpredict(wQ), null === (XQ = this.notTaken) || void 0 === XQ || XQ.call(this, QQ, qQ)
        }
        return WQ
      }
      pendingFor(QQ) {
        return this.hold.pendingFor(QQ)
      }
      tr(QQ, WQ, XQ) {
        QQ.predictSize(WQ, XQ), this.picked = {
          plans: QQ,
          ctrl: WQ,
          at: this.now()
        };
        const wQ = this.link.send(JW(WQ, "plan", ...XQ));
        this.hold.set(XQ, new Oj(wQ, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class rB {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qB;
        this.plans = QQ, this.readInterior = WQ, this.link = XQ, this.now = wQ, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Mj, this.throttle = void 0, this.oneShots = void 0, this.listeners = new PB, this.redraw = null, this.releaseReserve = null, this.size = new JB(XQ, wQ), this.oneShots = new XB(wQ), this.throttle = new mj((QQ => this.echo(this.link.send(this.command("throttle", QQ)))))
      }
      set(QQ) {
        !QQ.baf2RxOpen && this.raw && FB(this.raw.baf2RxAt) === FB(QQ.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(QQ), this.mB(QQ)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(QQ) {
        this.size.notTaken = QQ
      }
      resize(QQ) {
        this.raw && (this.size.tr(this.plans, this.raw.baf2RxAt, QQ), this.mB(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const QQ = this.raw.baf2RxAt;
        this.plans.setStarter(QQ, !this.plans.showsStarter(QQ)), this.mB(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.mB(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.mB(this.raw)
      }
      send(QQ) {
        if (this.raw) {
          for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
          this.link.send(this.command(QQ, ...XQ))
        }
      }
      tap(QQ, WQ) {
        this.raw && this.oneShots.tap(QQ, function(QQ, WQ) {
          if ("start" === QQ) return QQ => 0 === (QQ.baf2RxFlags & rW);
          if ("odConfirm" === QQ) return QQ => 0 !== (QQ.baf2RxFlags & IW);
          const XQ = TB(WQ);
          return QQ => TB(QQ) !== XQ
        }(QQ, this.raw), WQ) && ("start" === QQ && (this.startedAt = this.now()), this.mB(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(rW, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(QQ, WQ) {
        if (!this.raw) return;
        const XQ = QQ === rW ? this.command(WQ ? "scram" : "start") : this.command("od", WQ ? 1 : 0),
          wQ = WQ && QQ === rW,
          qQ = `${gW} ${this.raw.baf2RxAt.join(" ")} `,
          TQ = this.echo(wQ ? this.link.sendUrgent(XQ, (QQ => {
            const WQ = QQ.startsWith(qQ) ? QQ.slice(qQ.length).split(" ")[0] : null;
            return "throttle" === WQ || "start" === WQ
          })) : this.link.send(XQ));
        this.flags.set(QQ, WQ, TQ), wQ && this.throttle.assume(0, TQ), this.mB(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(QQ) {
        this.throttle.drag(QQ), this.raw && this.mB(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.mB(this.raw)
      }
      subscribe(QQ) {
        return this.listeners.subscribe(QQ)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var QQ;
        this.throttle.release(), null === (QQ = this.releaseReserve) || void 0 === QQ || QQ.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(QQ) {
        for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
        return JW(this.raw.baf2RxAt, QQ, ...XQ)
      }
      echo(QQ) {
        return new Oj(QQ, this.link, this.link.answerMs, this.now)
      }
      mB(QQ) {
        var WQ;
        this.raw = QQ;
        const XQ = this.flags.shown(QQ.baf2RxFlags),
          wQ = {
            ...QQ,
            baf2RxFlags: XQ,
            baf2RxTarget: this.throttle.shown(QQ.baf2RxTarget),
            baf2RxState: zB(QQ, XQ)
          },
          qQ = this.size.shown(wQ.baf2RxDims),
          TQ = this.throttle.pendingFor(),
          zQ = [this.throttle.pendingFor(QQ.baf2RxTarget), this.flags.pendingFor(QQ.baf2RxFlags), this.size.pendingFor(QQ.baf2RxDims)].filter((QQ => null !== QQ)),
          sQ = zQ.length > 0 ? Math.max(...zQ) : null,
          FQ = this.oneShots.busyIds(),
          PQ = wQ.baf2RxAt;
        let gQ, JQ, rQ = null,
          IQ = [Math.max(0, qQ[0] - 2), Math.max(0, qQ[1] - 2), Math.max(0, qQ[2] - 2)];
        if (wQ.baf2RxFormed) {
          const [QQ, WQ, XQ] = wQ.baf2RxDims;
          IQ = [Math.max(0, QQ - 2), Math.max(0, WQ - 2), Math.max(0, XQ - 2)], gQ = Array.from(wQ.baf2RxCells, Number), JQ = `${IQ.join(",")}:${wQ.baf2RxCells}`
        } else {
          var jQ;
          const QQ = null === (jQ = this.plans.planAt(PQ)) || void 0 === jQ ? void 0 : jQ.box,
            WQ = QQ ? nX(QQ, "reactor", ...qQ) : oX(PQ, 1, ...qQ, eX("reactor", qQ[0])),
            XQ = this.readInterior(WQ);
          rQ = XF(IQ, XQ), gQ = XQ, JQ = `${IQ.join(",")}:${XQ.join("")}`
        }(null === (WQ = this.looksOf) || void 0 === WQ ? void 0 : WQ.key) !== JQ && (this.looksOf = {
          key: JQ,
          looks: FF(IQ, gQ)
        }), this.view = {
          status: wQ,
          dims: qQ,
          plan: rQ,
          inner: IQ,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(PQ),
          odConfirmed: this.odConfirmed || 0 !== (wQ.baf2RxFlags & pW),
          guide: this.plans.guideOn(),
          throttlePending: null !== TQ,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== sQ && sQ >= 5e3,
          busy: FQ,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== sQ || FQ.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.mB(this.raw)
        }), 250))
      }
    }
    class IB {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qB;
        this.plans = QQ, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new PB, this.redraw = null, this.size = new JB(WQ, XQ), this.oneShots = new XB(XQ)
      }
      set(QQ) {
        !QQ.baf2BatOpen && this.view && FB(this.view.status.baf2BatAt) === FB(QQ.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(QQ), this.mB(QQ)
      }
      tap(QQ, WQ) {
        if (!this.view) return;
        const XQ = sB(this.view.status);
        this.oneShots.tap(QQ, (QQ => sB(QQ) !== XQ), WQ) && this.mB(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(QQ) {
        this.size.notTaken = QQ
      }
      resize(QQ) {
        this.view && (this.size.tr(this.plans, this.view.status.baf2BatAt, QQ), this.mB(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.mB(this.view.status)
      }
      subscribe(QQ) {
        return this.listeners.subscribe(QQ)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      mB(QQ) {
        const WQ = this.size.shown(QQ.baf2BatDims),
          XQ = this.oneShots.busyIds();
        this.view = {
          status: QQ,
          dims: WQ,
          yJ: bF(WQ, QQ.baf2BatDims) ? QQ.baf2BatCapacity : JF(...WQ),
          guide: this.plans.guideOn(),
          busy: XQ
        }, this.listeners.notify(), XQ.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.mB(this.view.status)
        }), 250))
      }
    }
    const jB = "buildAFactory2Game:";

    function BB() {
      var QQ;
      const WQ = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!WQ) return null;
      const XQ = WQ.querySelector(".ExitButton");
      return function(QQ, WQ) {
        const XQ = WQ ? WQ.left - 8 : QQ.right;
        return {
          left: QQ.left,
          top: QQ.top,
          width: Math.max(0, XQ - QQ.left),
          height: QQ.height
        }
      }(WQ.getBoundingClientRect(), null !== (QQ = null === XQ || void 0 === XQ ? void 0 : XQ.getBoundingClientRect()) && void 0 !== QQ ? QQ : null)
    }
    const yB = (0, wQ.memo)((function(QQ) {
      let {
        store: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, lq.C)(), [qQ, TQ] = (0, wQ.useState)((() => WQ.get())), [zQ, sQ] = (0, wQ.useState)((() => performance.now()));
      (0, wQ.useEffect)((() => (TQ(WQ.get()), WQ.subscribe((() => {
        TQ(WQ.get()), sQ(performance.now())
      })))), [WQ]);
      const {
        alarm: FQ,
        boomAt: PQ
      } = qQ, gQ = null !== FQ && null !== FQ.secs, [JQ, rQ] = (0, wQ.useState)(null);
      (0, wQ.useEffect)((() => {
        if (!gQ) return;
        rQ(BB());
        const QQ = setInterval((() => {
          sQ(performance.now()), rQ(BB())
        }), 250);
        return () => {
          clearInterval(QQ)
        }
      }), [gQ]);
      const [IQ, jQ] = (0, wQ.useState)(!1);
      return (0, wQ.useEffect)((() => {
        if (PQ === -1 / 0) return;
        jQ(!0);
        const QQ = setTimeout((() => {
          jQ(!1)
        }), 1300);
        return () => {
          clearTimeout(QQ)
        }
      }), [PQ]), (0, HT.jsxs)(HT.Fragment, {
        children: [null !== FQ && (0, HT.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: XQ(FQ.hot ? `${jB}rxAlarmSiren` : `${jB}rxAlarmDamaged`, {
            amount: String(FQ.damage)
          })
        }), null !== FQ && null !== FQ.secs && (0, HT.jsx)("div", {
          className: JQ ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== JQ && void 0 !== JQ ? JQ : void 0,
          "aria-live": "assertive",
          children: XQ(`${jB}rxAlarmCountdown`, {
            amount: String((BQ = FQ.secs, yQ = zQ - FQ.receivedAt, Math.max(1, Math.ceil(BQ - yQ / 1e3))))
          })
        }), IQ && (0, HT.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var BQ, yQ
    }));
    class VB {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      KV(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const XQ = QQ.baf2RxAlarmAt.join(",");
        let wQ = this.snapshot.boomAt;
        if (QQ.baf2RxAlarmBoom) this.byReactor.delete(XQ), wQ = WQ;
        else if (QQ.baf2RxAlarmDamage <= 0) this.byReactor.delete(XQ);
        else {
          var qQ;
          this.byReactor.set(XQ, {
            damage: QQ.baf2RxAlarmDamage,
            secs: null !== (qQ = QQ.baf2RxAlarmSecs) && void 0 !== qQ ? qQ : null,
            hot: !0 === QQ.baf2RxAlarmHot,
            receivedAt: WQ
          })
        }
        this.mB(wQ)
      }
      retain(QQ) {
        let WQ = !1;
        for (const XQ of [...this.byReactor.keys()]) QQ.has(XQ) || (this.byReactor.delete(XQ), WQ = !0);
        WQ && this.mB(this.snapshot.boomAt)
      }
      has(QQ) {
        return this.byReactor.has(QQ)
      }
      get() {
        return this.snapshot
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      mB(QQ) {
        let WQ = null;
        for (const XQ of this.byReactor.values())(!WQ || XQ.damage > WQ.damage) && (WQ = XQ);
        this.snapshot = {
          alarm: WQ,
          boomAt: QQ
        };
        for (const XQ of this.listeners) XQ()
      }
    }
    const DB = {
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

    function pB(QQ) {
      return [QQ[0], QQ[1], QQ[2]]
    }

    function GB(QQ) {
      return `${QQ[0]},${QQ[1]},${QQ[2]}`
    }
    class UB {
      constructor(QQ) {
        if (this.plans = QQ, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var QQ;
            return {
              active: this.glows.flatMap((QQ => {
                let {
                  record: WQ
                } = QQ;
                return WQ ? [WQ] : []
              })),
              log: [...null !== (QQ = this.devLog) && void 0 !== QQ ? QQ : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var QQ;
        return null !== (QQ = this.devLog) && void 0 !== QQ ? QQ : []
      }
      check(QQ, WQ, XQ) {
        const wQ = new Set(WQ.map((QQ => GB(QQ.box.ctrl))));
        for (const zQ of function(QQ, WQ) {
            const XQ = [],
              wQ = new Map(QQ);
            QQ.clear();
            for (const qQ of WQ) {
              const WQ = rj(qQ.box.ctrl),
                TQ = qQ.formed ? qQ.level : 0;
              QQ.set(WQ, TQ), TQ > 0 && 0 === wQ.get(WQ) && XQ.push(qQ)
            }
            return XQ
          }(this.levels, this.plans.all())) wQ.has(GB(zQ.box.ctrl)) && this.show(QQ, zQ, "on", XQ);
        const qQ = this.plans.lastFormed();
        if (null === qQ || qQ.receivedAt <= this.flashedAt) return null;
        this.flashedAt = qQ.receivedAt;
        const TQ = function(QQ, WQ) {
          var XQ;
          const wQ = rj(QQ);
          return null !== (XQ = WQ.find((QQ => rj(QQ.box.ctrl) === wQ))) && void 0 !== XQ ? XQ : null
        }(qQ.ctrl, WQ);
        return TQ && this.show(QQ, TQ, "formed", XQ), TQ
      }
      fade(QQ, WQ) {
        0 !== this.glows.length && (this.glows = this.glows.filter((XQ => {
          let {
            mesh: wQ,
            glow: qQ,
            startMs: TQ,
            record: zQ
          } = XQ;
          const sQ = (WQ - TQ) / DB[qQ].ms;
          return sQ >= 1 ? (QQ.disposeGameMesh(wQ), zQ && (zQ.endMs = WQ), !1) : (QQ.setGameMesh(wQ, {
            visibility: "formed" === qQ ? 1 - sQ : Math.sin(Math.PI * sQ)
          }), !0)
        })))
      }
      dispose(QQ) {
        for (const {
            mesh: XQ
          }
          of this.glows) QQ.disposeGameMesh(XQ);
        this.glows = [], this.levels.clear();
        const WQ = "undefined" !== typeof window ? window : null;
        (null === WQ || void 0 === WQ ? void 0 : WQ.baf2Glows) === this.devAccessor && delete WQ.baf2Glows
      }
      show(QQ, WQ, XQ, wQ) {
        const {
          lo: qQ,
          hi: TQ
        } = EF(WQ.box);
        let zQ = null;
        this.devLog && (zQ = {
          glow: XQ,
          ctrl: pB(WQ.box.ctrl),
          lo: pB(qQ),
          hi: pB(TQ),
          startMs: wQ,
          endMs: null
        }, this.devLog.push(zQ), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(QQ, XQ, CF(qQ, TQ, DB[XQ].thick)),
          glow: XQ,
          startMs: wQ,
          record: zQ
        })
      }
      build(QQ, WQ, XQ) {
        const wQ = Dj(QQ, XQ, {
          rgb: DB[WQ].colour,
          alpha: 1
        });
        return QQ.setGameMesh(wQ, {
          visibility: 0
        }), wQ
      }
    }
    const bB = 1 / .6,
      vB = {
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
        blendMode: Ls.c.Standard,
        soft: !0
      },
      dB = {
        ...vB,
        size: [.25, .4],
        count: 2
      };

    function HB(QQ) {
      return {
        colours: [QQ, QQ],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Ls.c.Add,
        soft: !1
      }
    }
    const aB = HB([150, 225, 255]),
      lB = HB([185, 145, 255]),
      hB = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function iB(QQ) {
      const WQ = EW[QQ];
      return null === WQ.fuelSlot || qX(WQ) ? hB.includes(QQ) ? lB : aB : vB
    }
    const cB = {
        kind: "smokePuff"
      },
      AB = [.2, .025, .2];

    function RB(QQ, WQ) {
      const [
        [XQ, wQ, qQ],
        [TQ, zQ, sQ]
      ] = QQ.colours;
      return {
        texture: QQ.soft ? cB : "square_particle",
        yJ: WQ,
        minLifeTime: QQ.life[0] / bB,
        maxLifeTime: QQ.life[1] / bB,
        minEmitPower: QQ.power[0] * bB,
        maxEmitPower: QQ.power[1] * bB,
        minSize: QQ.size[0],
        maxSize: QQ.size[1],
        emitRate: 0,
        gravity: [0, QQ.lift * bB * bB, 0],
        dir1: [-QQ.spread, 1, -QQ.spread],
        dir2: [QQ.spread, 1, QQ.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [XQ, wQ, qQ, QQ.alpha],
          maxColor: [TQ, zQ, sQ, QQ.alpha]
        }, {
          timeFraction: 1,
          minColor: [XQ, wQ, qQ, 0],
          maxColor: [TQ, zQ, sQ, 0]
        }],
        blendMode: QQ.blendMode
      }
    }
    class EB {
      constructor(QQ) {
        this.fixed = QQ, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(QQ, WQ, XQ) {
        var wQ;
        if (XQ === this.lastFrame) return !1;
        this.lastFrame = XQ;
        const qQ = this.at;
        qQ[0] = WQ[0] + .5, qQ[1] = WQ[1] + 1.025, qQ[2] = WQ[2] + .5;
        const TQ = null !== (wQ = this.fixed) && void 0 !== wQ ? wQ : sQ() ? dB : vB;
        let zQ = this.particles.get(TQ);
        return zQ || (zQ = QQ.createParticles(function(QQ) {
          return RB(QQ, Math.ceil(12 * QQ.count * QQ.life[1]) + QQ.count)
        }(TQ), {
          pos: qQ,
          half: AB
        }), this.particles.set(TQ, zQ)), zQ.moveTo(qQ), zQ.emit(TQ.count), !0
      }
      dispose() {
        for (const QQ of this.particles.values()) QQ.stop();
        this.particles.clear()
      }
    }
    class CB {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(QQ) {
        this.indexed = !0;
        for (const WQ of lW) {
          const XQ = iB(WQ);
          for (let wQ = 1; wQ <= 4; wQ++) {
            const qQ = QQ.blockNameToBlockId(`${WQ}|meta|rot${wQ}|Running`, !0);
            if (null === qQ) continue;
            let TQ = this.pufferIndexByStyle.get(XQ);
            void 0 === TQ && (TQ = this.pufferList.push(new EB(XQ === vB ? null : XQ)) - 1, this.pufferIndexByStyle.set(XQ, TQ)), this.pufferIndexById[qQ] = TQ + 1
          }
        }
      }
      onAfterRender(QQ, WQ) {
        this.indexed || this.index(QQ);
        const XQ = performance.now(),
          wQ = 0 === this.lastMs ? 0 : Math.min(XQ - this.lastMs, 250) / 1e3;
        this.lastMs = XQ, this.frame++, QQ.particlesEnabled() ? (this.scan(QQ, WQ), this.puff(QQ, wQ)) : this.sources = []
      }
      dispose() {
        for (const QQ of this.pufferList) QQ.dispose();
        this.sources = [], this.found = []
      }
      scan(QQ, WQ) {
        0 === this.scanRow && (this.origin = [Math.floor(WQ[0]) - 12, Math.floor(WQ[1]) - 6, Math.floor(WQ[2]) - 12]);
        const XQ = Math.min(this.scanRow + 16, 325),
          [wQ, qQ, TQ] = this.origin,
          zQ = this.hits;
        zQ.length = 0;
        for (let sQ = this.scanRow; sQ < XQ; sQ++) {
          const WQ = wQ + sQ % 25,
            XQ = qQ + Math.floor(sQ / 25);
          QQ.scanBlocks(WQ, XQ, TQ, WQ + 1, XQ + 1, TQ + 25, this.pufferIndexById, zQ)
        }
        for (let sQ = 0; sQ < zQ.length; sQ += 4) {
          const QQ = zQ[sQ + 3];
          this.found.push({
            pos: [zQ[sQ], zQ[sQ + 1], zQ[sQ + 2]],
            ez: QQ,
            puffer: this.pufferList[this.pufferIndexById[QQ] - 1]
          })
        }
        this.scanRow = XQ, 325 === XQ && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(QQ, WQ) {
        const XQ = this.sources.length;
        if (0 !== XQ) {
          this.budget = Math.min(this.budget + Math.min(XQ / 1.2, 12) * WQ, 2);
          for (let WQ = 0; WQ < XQ && this.budget >= 1; WQ++) {
            const WQ = this.sources[this.cursor % XQ];
            this.cursor = (this.cursor + 1) % XQ, QQ.getBlockId(WQ.pos[0], WQ.pos[1], WQ.pos[2]) === WQ.ez && (WQ.puffer.puff(QQ, WQ.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const uB = {
        ...HB([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      LB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function kB(QQ) {
      return 0 === QQ.spots.length ? 0 : Math.min(1 * QQ.level, 4)
    }

    function fB(QQ) {
      return 0 === QQ.glass.length ? 0 : Math.min(.75 * QQ.level, 3)
    }

    function SB(QQ) {
      return `${QQ.ctrl.join(",")}:${QQ.rot}:${QQ.cu},${QQ.cv}:${QQ.w},${QQ.h},${QQ.d}`
    }

    function tB(QQ, WQ) {
      const XQ = WQ.w - 2,
        wQ = WQ.h - 2,
        qQ = WQ.d - 2,
        TQ = [];
      for (let zQ = 0; zQ < XQ * wQ * qQ; zQ++) {
        const sQ = zQ % XQ,
          FQ = Math.floor(zQ / XQ) % qQ,
          PQ = Math.floor(zQ / (XQ * qQ));
        if (sQ > 0 && sQ < XQ - 1 && FQ > 0 && FQ < qQ - 1 && PQ > 0 && PQ < wQ - 1) continue;
        const gQ = mX(WQ, Xw(WQ, zQ)),
          JQ = uj(QQ, gQ);
        if (null !== JQ && "Fuel Rod" === cX(JQ))
          for (const WQ of LB) {
            const XQ = [gQ[0] + WQ[0], gQ[1] + WQ[1], gQ[2] + WQ[2]];
            eB(QQ, XQ) && TQ.push(nB(XQ, WQ))
          }
      }
      return TQ
    }

    function oB(QQ, WQ) {
      const {
        lo: XQ,
        hi: wQ
      } = EF(WQ), qQ = [];
      for (let TQ = XQ[0]; TQ < wQ[0]; TQ++)
        for (let WQ = XQ[1]; WQ < wQ[1]; WQ++) {
          const zQ = TQ === XQ[0] || TQ === wQ[0] - 1 || WQ === XQ[1] || WQ === wQ[1] - 1 ? 1 : Math.max(1, wQ[2] - 1 - XQ[2]);
          for (let sQ = XQ[2]; sQ < wQ[2]; sQ += zQ) {
            const zQ = [TQ, WQ, sQ];
            if (!eB(QQ, zQ)) continue;
            const FQ = TQ === XQ[0] ? LB[1] : TQ === wQ[0] - 1 ? LB[0] : sQ === XQ[2] ? LB[5] : sQ === wQ[2] - 1 ? LB[4] : WQ === XQ[1] ? LB[3] : LB[2];
            qQ.push(nB(zQ, FQ))
          }
        }
      return qQ
    }

    function eB(QQ, WQ) {
      const XQ = uj(QQ, WQ);
      return null !== XQ && "Reactor Glass" === cX(XQ)
    }

    function nB(QQ, WQ) {
      return [
        [QQ[0] + .5 + .55 * WQ[0], QQ[1] + .5 + .55 * WQ[1], QQ[2] + .5 + .55 * WQ[2]],
        [0 === WQ[0] ? .4 : .02, 0 === WQ[1] ? .4 : .02, 0 === WQ[2] ? .4 : .02]
      ]
    }
    class xB {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(QQ, WQ, XQ, wQ) {
        const qQ = [],
          TQ = new Set;
        for (const PQ of WQ) {
          var zQ, sQ, FQ;
          const {
            box: WQ
          } = PQ;
          if ("reactor" !== PQ.kind || PQ.level <= 0 || (WQ.ctrl[0] - XQ[0]) ** 2 + (WQ.ctrl[1] - XQ[1]) ** 2 + (WQ.ctrl[2] - XQ[2]) ** 2 > 576) continue;
          const gQ = SB(WQ);
          TQ.add(gQ);
          let JQ = this.spots.get(gQ);
          if ((!JQ || wQ - JQ.at > 3e3) && (JQ = {
              at: wQ,
              spots: tB(QQ, WQ),
              glass: oB(QQ, WQ)
            }, this.spots.set(gQ, JQ)), 0 === JQ.spots.length && 0 === JQ.glass.length) continue;
          const rQ = this.sparking.find((QQ => QQ.key === gQ));
          qQ.push({
            key: gQ,
            level: PQ.level,
            spots: JQ.spots,
            glass: JQ.glass,
            budget: null !== (zQ = null === rQ || void 0 === rQ ? void 0 : rQ.budget) && void 0 !== zQ ? zQ : 0,
            cursor: null !== (sQ = null === rQ || void 0 === rQ ? void 0 : rQ.cursor) && void 0 !== sQ ? sQ : 0,
            glassBudget: null !== (FQ = null === rQ || void 0 === rQ ? void 0 : rQ.glassBudget) && void 0 !== FQ ? FQ : 0
          })
        }
        for (const PQ of this.spots.keys()) TQ.has(PQ) || this.spots.delete(PQ);
        this.sparking = qQ
      }
      emit(QQ, WQ, XQ) {
        var wQ;
        if (0 === this.sparking.length || !QQ.particlesEnabled() || XQ === this.lastFrame) return;
        this.lastFrame = XQ;
        let qQ = 0,
          TQ = 0;
        for (const jQ of this.sparking) qQ += kB(jQ), TQ += fB(jQ);
        const zQ = qQ > 8 ? 8 / qQ : 1,
          sQ = TQ > 6 ? 6 / TQ : 1;
        let FQ, PQ = null,
          gQ = null;
        for (const jQ of this.sparking) jQ.budget = Math.min(jQ.budget + kB(jQ) * zQ * WQ, 2), jQ.budget >= 1 && (!PQ || jQ.budget > PQ.budget) && (PQ = jQ), jQ.glassBudget = Math.min(jQ.glassBudget + fB(jQ) * sQ * WQ, 2), jQ.glassBudget >= 1 && (!gQ || jQ.glassBudget > gQ.glassBudget) && (gQ = jQ);
        if (PQ) PQ.budget--, FQ = PQ.spots[PQ.cursor++ % PQ.spots.length];
        else {
          if (!gQ) return;
          gQ.glassBudget--, FQ = gQ.glass[Math.floor(Math.random() * gQ.glass.length)]
        }
        const [JQ, rQ] = FQ, IQ = null !== (wQ = this.emitter) && void 0 !== wQ ? wQ : this.create(QQ, JQ, rQ);
        IQ.moveTo(JQ, rQ), IQ.emit(uB.count)
      }
      dispose() {
        var QQ;
        null === (QQ = this.emitter) || void 0 === QQ || QQ.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(QQ, WQ, XQ) {
        const wQ = Math.ceil(14 * uB.count * uB.life[1]) + uB.count;
        return this.emitter = QQ.createParticles(RB(uB, wQ), {
          pos: WQ,
          half: XQ
        }), this.emitter
      }
    }
    const YB = [2, 3.2],
      NB = 1 / 3,
      ZB = 1 / .6,
      OB = {
        texture: cB,
        yJ: Math.ceil(18 * YB[1]) + 4,
        minLifeTime: YB[0] / ZB,
        maxLifeTime: YB[1] / ZB,
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
        blendMode: Ls.c.Standard
      };
    class KB {
      constructor(QQ) {
        this.plans = QQ, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new xB, this.frame = 0, this.outline = new UB(QQ)
      }
      onAfterRender(QQ, WQ, XQ) {
        const wQ = performance.now(),
          qQ = 0 === this.lastMs ? 0 : Math.min(wQ - this.lastMs, 250) / 1e3;
        if (this.lastMs = wQ, this.outline.fade(QQ, wQ), this.puff(QQ, qQ, XQ), this.sparks.emit(QQ, qQ, this.frame++), wQ - this.lastCheckMs < 150) return;
        this.lastCheckMs = wQ;
        const TQ = this.plans.all().filter((QQ => QQ.formed && mB(QQ.box.ctrl, XQ) <= 4096));
        this.plumes = TQ.filter((QQ => "reactor" === QQ.kind && QQ.level > 0)).map((QQ => ({
          box: QQ.box,
          level: QQ.level
        }))), this.updateHums(QQ, WQ, TQ, XQ), this.sparks.update(QQ, TQ, XQ, wQ), this.chimeFormed(QQ, WQ, TQ, wQ)
      }
      dispose(QQ) {
        var WQ;
        this.outline.dispose(QQ), null === (WQ = this.steam) || void 0 === WQ || WQ.dispose(), this.steam = null, this.sparks.dispose();
        for (const XQ of this.hums.values()) XQ.stop();
        this.hums.clear()
      }
      chimeFormed(QQ, WQ, XQ, wQ) {
        const qQ = this.outline.check(QQ, XQ, wQ);
        qQ && QQ.playSound(WQ, "exp_levelup", .6, 1, {
          qQ: [qQ.box.ctrl[0] + .5, qQ.box.ctrl[1], qQ.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(QQ, WQ, XQ) {
        const wQ = this.plumes;
        if (0 === wQ.length || !QQ.particlesEnabled()) return void(this.plumeBudget = 0);
        const qQ = wQ.reduce(((QQ, WQ) => QQ + 3 * WQ.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + qQ * WQ, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let TQ = this.plumeCursor % (qQ / 3);
        this.plumeCursor++;
        let zQ = wQ[0];
        for (const JQ of wQ) {
          if (TQ < JQ.level) {
            zQ = JQ;
            break
          }
          TQ -= JQ.level
        }
        const {
          lo: sQ,
          hi: FQ
        } = EF(zQ.box);
        if (function(QQ, WQ, XQ) {
            const wQ = Math.max(QQ[0] - XQ[0], 0, XQ[0] - WQ[0]),
              qQ = Math.max(QQ[2] - XQ[2], 0, XQ[2] - WQ[2]);
            return Math.hypot(wQ, XQ[1] - WQ[1], qQ)
          }(sQ, FQ, XQ) < 6 && Math.random() > NB) return;
        const PQ = [(sQ[0] + FQ[0]) / 2, FQ[1] + .05, (sQ[2] + FQ[2]) / 2],
          gQ = [(FQ[0] - sQ[0]) / 2 - .5, .05, (FQ[2] - sQ[2]) / 2 - .5];
        this.steam ??= QQ.createParticles(OB, {
          pos: PQ,
          half: gQ
        }), this.steam.moveTo(PQ, gQ), this.steam.emit(1)
      }
      updateHums(QQ, WQ, XQ, wQ) {
        const qQ = new Map;
        for (const zQ of XQ) "reactor" === zQ.kind && zQ.level > 0 && mB(zQ.box.ctrl, wQ) <= 576 && qQ.set(`${TQ=zQ.box.ctrl,`${TQ[0]},${TQ[1]},${TQ[2]}`}:${zQ.level}`, zQ);
        var TQ;
        for (const [zQ, sQ] of this.hums) qQ.has(zQ) || (sQ.stop(), this.hums.delete(zQ));
        for (const [zQ, sQ] of qQ) {
          if (this.hums.has(zQ)) continue;
          const {
            lo: XQ,
            hi: wQ
          } = EF(sQ.box), qQ = [(XQ[0] + wQ[0]) / 2, XQ[1], (XQ[2] + wQ[2]) / 2], TQ = QQ.playSound(WQ, "rocketEngineLoop", .08 + .06 * sQ.level, .55, {
            qQ: qQ,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          TQ && this.hums.set(zQ, TQ)
        }
      }
    }

    function mB(QQ, WQ) {
      return (QQ[0] - WQ[0]) ** 2 + (QQ[1] - WQ[1]) ** 2 + (QQ[2] - WQ[2]) ** 2
    }
    class MB {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      KV(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const wQ = [QQ.baf2BombAt[0], QQ.baf2BombAt[1], QQ.baf2BombAt[2]],
          qQ = QQ.baf2BombR;
        if (QQ.baf2BombBoom) {
          const QQ = Math.hypot(WQ[0] - wQ[0], WQ[1] - wQ[1], WQ[2] - wQ[2]);
          this.mB({
            fuse: null,
            blast: {
              at: wQ,
              r: qQ,
              receivedAt: XQ,
              distance: QQ,
              flash: QQ <= 3 * qQ
            }
          })
        } else this.mB({
          ...this.snapshot,
          fuse: QQ.baf2BombMs > 0 ? {
            at: wQ,
            r: qQ,
            endsAt: XQ + QQ.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      mB(QQ) {
        this.snapshot = QQ;
        for (const WQ of this.listeners) WQ()
      }
    }
    const Qy = (0, wQ.memo)((function(QQ) {
      var WQ;
      let {
        store: XQ
      } = QQ;
      const {
        t: qQ
      } = (0, lq.C)(), [TQ, zQ] = (0, wQ.useState)((() => XQ.get())), [sQ, FQ] = (0, wQ.useState)((() => performance.now()));
      (0, wQ.useEffect)((() => (zQ(XQ.get()), XQ.subscribe((() => {
        zQ(XQ.get()), FQ(performance.now())
      })))), [XQ]);
      const {
        fuse: PQ,
        blast: gQ
      } = TQ;
      (0, wQ.useEffect)((() => {
        if (!PQ) return;
        const QQ = setInterval((() => {
          FQ(performance.now())
        }), 250);
        return () => {
          clearInterval(QQ)
        }
      }), [PQ]);
      const [JQ, rQ] = (0, wQ.useState)(!1);
      (0, wQ.useEffect)((() => {
        if (null === gQ || void 0 === gQ || !gQ.flash) return;
        rQ(!0);
        const QQ = setTimeout((() => {
          rQ(!1)
        }), 2500);
        return () => {
          clearTimeout(QQ)
        }
      }), [gQ]);
      const IQ = PQ ? function(QQ, WQ) {
        return QQ.endsAt <= WQ ? 0 : Math.ceil((QQ.endsAt - WQ) / 1e3)
      }(PQ, sQ) : 0;
      return (0, HT.jsxs)(HT.Fragment, {
        children: [IQ > 0 && (0, HT.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: qQ("buildAFactory2Game:bombCountdown", {
            amount: String(IQ),
            radius: String(null !== (WQ = null === PQ || void 0 === PQ ? void 0 : PQ.r) && void 0 !== WQ ? WQ : 0)
          })
        }), JQ && (0, HT.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Wy(QQ) {
      const WQ = Math.min(4, Math.max(1, QQ / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * QQ / 4)),
        capSpread: Math.min(5 * QQ / 8, 24 * WQ),
        capThick: 6 * WQ,
        stemHalfWidth: 3 * WQ,
        puffScale: WQ
      }
    }
    class Xy {
      constructor() {
        this.Ds = !1
      }
      hold(QQ) {
        QQ.getCameraFar() < 1e3 && (QQ.setCameraFar(1e3), this.Ds = !0)
      }
      release(QQ) {
        this.Ds && (this.Ds = !1, QQ.setCameraFar(null))
      }
    }
    const wy = 1 / .6,
      qy = [.2, .1, .2],
      Ty = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      zy = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Ls.c.Standard,
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
        blend: Ls.c.Standard,
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
      Fy = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Ls.c.Standard,
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
      Py = {
        texture: cB,
        yJ: Math.ceil(120) + 4,
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
        blendMode: Ls.c.Add
      };
    class gy {
      constructor(QQ) {
        this.store = QQ, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Xy, this.timers = []
      }
      onAfterRender(QQ, WQ) {
        const XQ = performance.now(),
          wQ = 0 === this.lastMs ? 0 : Math.min(XQ - this.lastMs, 250) / 1e3;
        this.lastMs = XQ;
        const {
          fuse: qQ,
          blast: TQ
        } = this.store.get();
        null !== TQ && TQ !== this.shownBlast && (this.shownBlast = TQ, this.startBlast(QQ, WQ, TQ, XQ));
        const zQ = QQ.particlesEnabled();
        null !== qQ && qQ.endsAt > XQ && zQ ? this.emitBeacon(QQ, qQ, wQ, XQ) : this.beaconBudget = 0, null !== this.cloud && (XQ - this.cloud.startMs > 33e3 ? this.disposeCloud(QQ) : (this.far.hold(QQ), zQ && this.emitCloud(QQ, wQ, XQ)))
      }
      dispose(QQ) {
        var WQ;
        null === (WQ = this.beacon) || void 0 === WQ || WQ.dispose(), this.beacon = null, this.disposeCloud(QQ);
        for (const XQ of this.timers) clearTimeout(XQ);
        this.timers.length = 0
      }
      emitBeacon(QQ, WQ, XQ, wQ) {
        const qQ = WQ.endsAt - wQ < 5e3 ? 350 : 1e3,
          TQ = .5 + .5 * Math.sin(2 * Math.PI * wQ / qQ);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * TQ * XQ, 4), this.beaconBudget < 1) return;
        const zQ = Math.floor(this.beaconBudget);
        this.beaconBudget -= zQ;
        const [sQ, FQ, PQ] = WQ.at, gQ = [sQ + .5, FQ + 1.1, PQ + .5];
        this.beacon ??= QQ.createParticles(Py, {
          pos: gQ,
          half: qy
        }), this.beacon.moveTo(gQ), this.beacon.emit(zQ)
      }
      startBlast(QQ, WQ, XQ, wQ) {
        var qQ;
        null === (qQ = this.beacon) || void 0 === qQ || qQ.dispose(), this.beacon = null, this.disposeCloud(QQ);
        const TQ = (0, Cs.isMobile)() ? .5 : 1;
        this.streams = [zy, sy, Fy].map((QQ => {
          const WQ = Math.round(QQ.count * TQ);
          return {
            spec: QQ,
            particles: null,
            rate: WQ / ((QQ.toMs - QQ.fromMs) / 1e3),
            budget: 0,
            left: WQ
          }
        })), this.cloud = {
          blast: XQ,
          startMs: wQ
        };
        const zQ = Math.max(.25, 1 - XQ.distance / (6 * XQ.r)),
          sQ = XQ.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [XQ, wQ, qQ] of Ty) ry(QQ, WQ, XQ, zQ * wQ, qQ)
        }), sQ))
      }
      emitCloud(QQ, WQ, XQ) {
        const {
          blast: wQ,
          startMs: qQ
        } = this.cloud, TQ = XQ - qQ, [zQ, sQ, FQ] = wQ.at, PQ = Wy(wQ.r);
        for (const gQ of this.streams) {
          const {
            spec: XQ
          } = gQ;
          if (gQ.left <= 0 || TQ < XQ.fromMs) continue;
          gQ.budget += gQ.rate * WQ;
          const qQ = Math.min(Math.floor(gQ.budget), gQ.left);
          if (qQ < 1) continue;
          gQ.budget -= qQ, gQ.left -= qQ;
          const JQ = gQ.particles ??= this.createStream(QQ, XQ, wQ);
          if (XQ === zy) {
            const QQ = PQ.stemHalfWidth;
            JQ.moveTo([zQ, sQ + 1, FQ], [QQ, 1, QQ])
          } else if (XQ === sy) {
            const QQ = PQ.capSpread * Math.min(1, (TQ - XQ.fromMs) / 3e3),
              WQ = Math.sqrt(Math.random()),
              wQ = 2 * Math.random() * Math.PI,
              qQ = Math.cos(wQ) * WQ,
              gQ = Math.sin(wQ) * WQ,
              rQ = zQ + qQ * QQ,
              IQ = FQ + gQ * QQ,
              jQ = PQ.capThick,
              BQ = sQ + PQ.capHeight + jQ * (1 - WQ * WQ) * 2;
            JQ.setDirections([.7 * qQ, .05, .7 * gQ], [qQ, .2, gQ]), JQ.moveTo([rQ, BQ, IQ], [jQ, jQ, jQ])
          } else {
            this.ringAngle += 2.39996;
            const QQ = Math.cos(this.ringAngle),
              WQ = Math.sin(this.ringAngle);
            JQ.setDirections([QQ, .05, WQ], [QQ, .1, WQ]), JQ.moveTo([zQ + 2 * QQ, sQ + .5, FQ + 2 * WQ], [0, .5, 0])
          }
          JQ.emit(qQ)
        }
      }
      createStream(QQ, WQ, XQ) {
        const {
          r: wQ
        } = XQ, qQ = Math.max(WQ.life[0], wQ / 25), TQ = WQ === Fy ? [.9 * qQ, qQ] : WQ.life, zQ = Wy(wQ), sQ = WQ === Fy ? 1 : zQ.puffScale, FQ = {
          texture: cB,
          yJ: WQ.count + 4,
          minLifeTime: TQ[0] / wy,
          maxLifeTime: TQ[1] / wy,
          minSize: WQ.size[0] * sQ,
          maxSize: WQ.size[1] * sQ,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, WQ.gravity * wy * wy, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: WQ.from[0],
            maxColor: WQ.from[1]
          }, {
            timeFraction: .6,
            minColor: Jy(WQ.from[0], WQ.to[0]),
            maxColor: Jy(WQ.from[1], WQ.to[1])
          }, {
            timeFraction: 1,
            minColor: WQ.to[0],
            maxColor: WQ.to[1]
          }],
          blendMode: WQ.blend
        };
        if (WQ === zy) {
          const QQ = zQ.capHeight / ((TQ[0] + TQ[1]) / 2);
          FQ.minEmitPower = .9 * QQ * wy, FQ.maxEmitPower = 1.05 * QQ * wy, FQ.dir1 = [-.1, 1, -.1], FQ.dir2 = [.1, 1, .1]
        } else WQ === sy ? (FQ.minEmitPower = 1.2, FQ.maxEmitPower = 2, FQ.dir1 = [-1, .05, -1], FQ.dir2 = [1, .2, 1]) : (FQ.minEmitPower = 39.583333333333336, FQ.maxEmitPower = 41.66666666666667, FQ.dir1 = [1, 0, 0], FQ.dir2 = [1, 0, 0]);
        return QQ.createParticles(FQ, {
          pos: XQ.at
        })
      }
      disposeCloud(QQ) {
        for (const XQ of this.streams) {
          var WQ;
          null === (WQ = XQ.particles) || void 0 === WQ || WQ.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(QQ)
      }
    }

    function Jy(QQ, WQ) {
      return [(QQ[0] + WQ[0]) / 2, (QQ[1] + WQ[1]) / 2, (QQ[2] + WQ[2]) / 2, .75 * QQ[3]]
    }

    function ry(QQ, WQ, XQ, wQ, qQ) {
      try {
        QQ.playSound(WQ, XQ, wQ, qQ)
      } catch (TQ) {
        console.error(TQ)
      }
    }
    const Iy = {
        yJ: 720,
        perS: 100
      },
      jy = {
        yJ: 320,
        perS: 44
      };
    class By {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(QQ, WQ) {
        this.zone = {
          centre: [...QQ.centre],
          r: QQ.r,
          band: QQ.band ? [QQ.band[0], QQ.band[1]] : void 0
        }, this.endsAt = WQ
      }
      stop() {
        this.zone = null
      }
      KV(QQ, WQ) {
        const {
          baf2FalloutMs: XQ,
          baf2FalloutAt: wQ,
          baf2FalloutR: qQ,
          baf2FalloutY: TQ
        } = QQ;
        XQ > 0 && wQ && void 0 !== qQ ? this.start({
          centre: wQ,
          r: qQ,
          band: TQ
        }, WQ + XQ) : this.stop()
      }
      perS(QQ, WQ, XQ) {
        const wQ = this.zone;
        if (!wQ) return 0;
        const qQ = this.endsAt - QQ;
        return qQ <= 0 ? (this.zone = null, 0) : wQ.band && (WQ[1] < wQ.band[0] || WQ[1] > wQ.band[1]) || Math.hypot(WQ[0] - wQ.centre[0], WQ[2] - wQ.centre[2]) > wQ.r ? 0 : XQ.perS * Math.min(1, qQ / 5e3)
      }
    }
    const yy = [5, 7],
      Vy = [24, 8, 24],
      Dy = .5,
      py = 1 / .6,
      Gy = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class Uy {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Cs.isMobile)();
        this.state = new By, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(QQ) {
          return QQ ? jy : Iy
        }(QQ)
      }
      startFallout(QQ, WQ) {
        this.state.start(QQ, WQ)
      }
      stopFallout() {
        this.state.stop()
      }
      KV(QQ) {
        this.state.KV(QQ, performance.now())
      }
      onAfterRender(QQ, WQ) {
        var XQ;
        const wQ = performance.now(),
          qQ = 0 === this.lastMs ? 0 : Math.min(wQ - this.lastMs, 250) / 1e3;
        this.lastMs = wQ;
        const TQ = this.state.perS(wQ, WQ, this.tier);
        if (TQ <= 0 || !QQ.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + TQ * qQ, TQ / 4);
        const zQ = Math.floor(this.budget);
        if (zQ < 1) return;
        this.budget -= zQ;
        const sQ = this.at;
        sQ[0] = WQ[0], sQ[1] = WQ[1] + 12, sQ[2] = WQ[2];
        const FQ = null !== (XQ = this.systems) && void 0 !== XQ ? XQ : this.create(QQ, sQ),
          PQ = this.amounts;
        PQ[0] = 0, PQ[1] = 0;
        for (let gQ = 0; gQ < zQ; gQ++) PQ[Math.random() < .3 ? 1 : 0]++;
        for (let gQ = 0; gQ < FQ.length; gQ++) PQ[gQ] > 0 && (FQ[gQ].moveTo(sQ, Vy), FQ[gQ].emit(PQ[gQ]))
      }
      dispose() {
        for (const WQ of null !== (QQ = this.systems) && void 0 !== QQ ? QQ : []) {
          var QQ;
          WQ.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(QQ, WQ) {
        return this.systems = Gy.map((XQ => {
          let {
            rgba: [wQ, qQ, TQ, zQ],
            share: sQ
          } = XQ;
          const FQ = {
            texture: "square_particle",
            yJ: Math.ceil(this.tier.yJ * sQ),
            minLifeTime: yy[0] / py,
            maxLifeTime: yy[1] / py,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Dy, -1, Dy],
            colorGradients: [{
              timeFraction: 0,
              minColor: [wQ, qQ, TQ, 0]
            }, {
              timeFraction: .15,
              minColor: [wQ, qQ, TQ, zQ]
            }, {
              timeFraction: .8,
              minColor: [wQ, qQ, TQ, zQ]
            }, {
              timeFraction: 1,
              minColor: [wQ, qQ, TQ, 0]
            }],
            blendMode: Ls.c.Standard
          };
          return QQ.createParticles(FQ, {
            pos: WQ,
            half: Vy
          })
        })), this.systems
      }
    }
    const by = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function vy(QQ) {
      const WQ = /\|rot(\d)/.exec(QQ);
      return by[WQ ? Number(WQ[1]) : 1]
    }
    var dy = XQ(658),
      Hy = XQ(38756);
    const ay = new Set(dy.j);

    function ly(QQ) {
      if (-2 !== QQ.count) return null;
      const WQ = eQ(QQ.item);
      return null !== WQ && ay.has(WQ) ? WQ : null
    }

    function hy(QQ) {
      const {
        width: WQ,
        height: XQ
      } = (0, Hy.c)(QQ).hitBoxDimensions;
      return .55 / Math.max(WQ, XQ)
    }

    function iy(QQ, WQ, XQ) {
      if (!XQ) return !1;
      const wQ = QQ[0] + .5 - WQ[0],
        qQ = QQ[1] + .5 - WQ[1],
        TQ = QQ[2] + .5 - WQ[2];
      return wQ * wQ + qQ * qQ + TQ * TQ <= 576
    }

    function cy(QQ, WQ) {
      return Math.atan2(QQ[0], QQ[2]) + Math.PI + WQ
    }

    function Ay(QQ, WQ) {
      const XQ = 2 * Math.PI;
      return (QQ + XQ * WQ / 1e4) % XQ
    }
    class Ry {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = QQ, this.now = WQ, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = QQ.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(QQ, WQ) {
        if (0 === this.farms.size) return;
        const XQ = this.now(),
          wQ = Number.isNaN(this.frameMs) ? 0 : Math.min(XQ - this.frameMs, 100);
        this.frameMs = XQ, XQ - this.checkedMs >= 1e3 && (this.checkedMs = XQ, this.check(QQ, WQ));
        for (const qQ of this.farms.values()) qQ.shown && qQ.running && null !== qQ.model && wQ > 0 && (qQ.spin = Ay(qQ.spin, wQ), qQ.model.setPose(qQ.feet, cy(qQ.front, qQ.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const QQ of this.farms.values()) this.drop(QQ);
        this.farms.clear()
      }
      sync() {
        const QQ = new Set;
        for (const WQ of this.labels.list()) {
          const XQ = ly(WQ);
          if (null === XQ) continue;
          QQ.add(WQ.key);
          const wQ = this.farms.get(WQ.key);
          if ((null === wQ || void 0 === wQ ? void 0 : wQ.mob) === XQ) continue;
          wQ && this.drop(wQ);
          const [qQ, TQ, zQ] = WQ.pos;
          this.farms.set(WQ.key, {
            pos: WQ.pos,
            feet: [qQ + .5, TQ + 1, zQ + .5],
            mob: XQ,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [WQ, XQ] of this.farms) QQ.has(WQ) || (this.drop(XQ), this.farms.delete(WQ));
        this.checkedMs = -1 / 0
      }
      check(QQ, WQ) {
        for (const XQ of this.farms.values()) {
          const [wQ, qQ, TQ] = XQ.pos, zQ = uj(QQ, XQ.pos);
          null !== zQ && cX(zQ) === CQ && iy(XQ.pos, WQ, "Air" === uj(QQ, [wQ, qQ + 1, TQ])) ? (XQ.running = zQ.endsWith("|Running"), XQ.front = vy(zQ), null === XQ.model && (XQ.model = QQ.createMobModel(XQ.mob, hy(XQ.mob)), null === XQ.model) || (XQ.model.setPose(XQ.feet, cy(XQ.front, XQ.spin)), XQ.shown || (XQ.model.setVisible(!0), XQ.shown = !0))) : (XQ.shown && null !== XQ.model && XQ.model.setVisible(!1), XQ.shown = !1)
        }
      }
      drop(QQ) {
        var WQ;
        null === (WQ = QQ.model) || void 0 === WQ || WQ.dispose(), QQ.model = null, QQ.shown = !1
      }
    }
    class Ey {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(QQ) {
        var WQ;
        this.island = QQ.baf2ColIsland, this.islandSite = (WQ = QQ.baf2ColSite) && 8 === WQ.length ? {
          spawnXZ: [WQ[0], WQ[1]],
          coreXZ: [WQ[2], WQ[3]],
          minXZ: [WQ[4], WQ[5]],
          maxXZ: [WQ[6], WQ[7]]
        } : null, this.views = QQ.baf2ColList.map((QQ => ({
          entry: sq(QQ)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(QQ) {
        this.status = QQ, this.emit()
      }
      onOpen(QQ) {
        this.openHeld = QQ
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
        return this.views.map((QQ => QQ.entry))
      }
      entryAtRoot(QQ) {
        var WQ;
        return null === (WQ = this.views.find((WQ => {
          let {
            entry: XQ
          } = WQ;
          return XQ.focus[0] === QQ[0] && XQ.focus[1] === QQ[1] + 1 && XQ.focus[2] === QQ[2]
        }))) || void 0 === WQ ? void 0 : WQ.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(QQ, WQ) {
        return tF(this.entries(), QQ, WQ)
      }
      lookSource() {
        return {
          handles: QQ => rw(QQ) >= 0 || Iw(QQ),
          line: (QQ, WQ) => this.lookLine(QQ, WQ),
          version: () => this.beamsVersion
        }
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const QQ of this.listeners) QQ()
      }
    }
    const Cy = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((QQ => QQ / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((QQ => [QQ, QQ + 1, QQ + 2, QQ, QQ + 2, QQ + 3]))
    };

    function uy(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      let sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const FQ = Math.cos(sQ),
        PQ = Math.sin(sQ),
        gQ = QQ.positions.length / 3,
        {
          positions: JQ,
          indices: rQ
        } = Cy;
      for (let IQ = 0; IQ < JQ.length; IQ += 3) {
        const sQ = JQ[IQ] * qQ,
          gQ = JQ[IQ + 2] * zQ;
        QQ.positions.push(WQ + sQ * FQ + gQ * PQ, XQ + JQ[IQ + 1] * TQ, wQ - sQ * PQ + gQ * FQ)
      }
      for (const IQ of rQ) QQ.indices.push(gQ + IQ)
    }

    function Ly(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return WQ < 1 ? {
        rgb: QQ,
        alpha: WQ
      } : {
        rgb: QQ,
        alpha: 1,
        opaque: !0
      }
    }
    class ky {
      constructor(QQ, WQ) {
        this.style = QQ, this.perSource = WQ, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(QQ) {
        this.sources = QQ, 0 === QQ.length && (this.budget = 0)
      }
      fJ(QQ, WQ, XQ) {
        const wQ = this.sources.length;
        if (0 !== wQ) {
          var qQ, TQ;
          this.budget = Math.min(this.budget + (qQ = wQ, TQ = this.perSource, Math.min(qQ * TQ, XP) * WQ), 2);
          for (let WQ = 0; WQ < wQ && this.budget >= 1; WQ++) {
            const WQ = this.sources[this.cursor % wQ];
            this.cursor = (this.cursor + 1) % wQ;
            if (!(Math.max(Math.abs(WQ.x - XQ[0]), Math.abs(WQ.y - XQ[1]), Math.abs(WQ.z - XQ[2])) > 32)) return this.puff(QQ, WQ), void this.budget--
          }
        }
      }
      dispose() {
        var QQ;
        null === (QQ = this.particles) || void 0 === QQ || QQ.dispose(), this.particles = null, this.sources = []
      }
      puff(QQ, WQ) {
        let {
          x: XQ,
          y: wQ,
          z: qQ,
          h: TQ,
          faces: zQ
        } = WQ;
        const sQ = function(QQ, WQ, XQ, wQ, qQ) {
            const [TQ, zQ, sQ] = qQ[Math.floor(Math.random() * qQ.length)], FQ = .04, PQ = (QQ, WQ, XQ) => QQ > 0 ? WQ + XQ + FQ : QQ < 0 ? WQ - FQ : WQ + .1, gQ = (QQ, WQ, XQ) => QQ > 0 ? WQ + XQ + FQ : QQ < 0 ? WQ - FQ : WQ + XQ - .1, JQ = [PQ(TQ, QQ, 1), PQ(zQ, WQ, wQ), PQ(sQ, XQ, 1)], rQ = [gQ(TQ, QQ, 1), gQ(zQ, WQ, wQ), gQ(sQ, XQ, 1)];
            return {
              pos: [(JQ[0] + rQ[0]) / 2, (JQ[1] + rQ[1]) / 2, (JQ[2] + rQ[2]) / 2],
              half: [(rQ[0] - JQ[0]) / 2, (rQ[1] - JQ[1]) / 2, (rQ[2] - JQ[2]) / 2],
              out: [TQ, zQ, sQ]
            }
          }(XQ, wQ, qQ, TQ, zQ),
          {
            style: FQ
          } = this,
          PQ = this.particles ??= QQ.createParticles(RB(FQ, Math.ceil(FQ.count * XP * FQ.life[1]) + 4), sQ);
        PQ.moveTo(sQ.pos, sQ.half);
        const [gQ, JQ, rQ] = sQ.out, IQ = FQ.spread;
        PQ.setDirections([gQ - IQ, .6 + JQ, rQ - IQ], [gQ + IQ, 1 + JQ, rQ + IQ]), PQ.emit(FQ.count)
      }
    }
    const fy = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Sy {
      constructor() {
        this.green = new ky(qP.green, QP), this.pink = new ky(qP.pink, WP), this.colliders = [], this.lastMs = 0
      }
      setSources(QQ) {
        this.colliders = QQ;
        const WQ = [],
          XQ = [];
        for (const wQ of QQ) {
          const [QQ, qQ, TQ] = wQ.focus;
          WQ.push({
            x: QQ,
            y: qQ - 1,
            z: TQ,
            h: 2,
            faces: fy
          });
          for (let WQ = 0; WQ < 4; WQ++) {
            if (!wQ.live[WQ]) continue;
            const [QQ, qQ, TQ] = yw(wQ.focus, WQ, zw.LASER_D), [zQ, , sQ] = Bw[WQ], FQ = fy.filter((QQ => QQ[0] !== zQ || QQ[2] !== sQ || 0 !== QQ[1]));
            XQ.push({
              x: QQ,
              y: qQ,
              z: TQ,
              h: 1,
              faces: FQ
            })
          }
        }
        this.green.setSources(WQ), this.pink.setSources(XQ)
      }
      onAfterRender(QQ) {
        const WQ = performance.now(),
          XQ = 0 === this.lastMs ? 0 : Math.min(WQ - this.lastMs, 250) / 1e3;
        if (this.lastMs = WQ, 0 === this.colliders.length || !QQ.particlesEnabled()) return;
        const wQ = QQ.getCameraPosition();
        this.green.fJ(QQ, XQ, wQ), this.pink.fJ(QQ, XQ, wQ)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const ty = 1.04,
      oy = Ly([1, 120 / 255, 220 / 255]),
      ey = Ly([1, .25, .25], .35);
    class ny {
      constructor(QQ) {
        this.store = QQ, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Sy
      }
      onAfterRender(QQ) {
        this.store.version() !== this.builtVersion && this.rebuild(QQ);
        const WQ = performance.now();
        for (const XQ of this.beams) {
          const wQ = 1 + .35 * Math.sin(WQ / 700 * Math.PI * 2 + XQ.phase);
          QQ.setGameMesh(XQ.mesh, {
            scale: [XQ.alongX ? 1 : wQ, wQ, XQ.alongX ? wQ : 1]
          })
        }
        this.glow.onAfterRender(QQ)
      }
      dispose(QQ) {
        this.clear(QQ), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(QQ) {
        this.clear(QQ), this.builtVersion = this.store.version();
        const WQ = [];
        for (const {
            entry: XQ
          }
          of this.store.colliders()) XQ.on && XQ.live.some(Boolean) && (this.addBeams(QQ, XQ), WQ.push(XQ)), XQ.blockers.length > 0 && this.addMarkers(QQ, XQ);
        this.glow.setSources(WQ)
      }
      addBeams(QQ, WQ) {
        const [XQ, wQ, qQ] = WQ.focus, TQ = MF - .25, zQ = (.25 + MF) / 2;
        for (let sQ = 0; sQ < 4; sQ++) {
          if (!WQ.live[sQ]) continue;
          const [FQ, , PQ] = Bw[sQ], gQ = 0 !== FQ, JQ = {
            positions: [],
            indices: []
          };
          uy(JQ, 0, 0, 0, gQ ? TQ : .2, .2, gQ ? .2 : TQ);
          const rQ = [XQ + .5 + FQ * zQ, wQ + .5, qQ + .5 + PQ * zQ],
            IQ = QQ.createGameMesh(JQ, oy, rQ);
          this.meshes.push(IQ), this.beams.push({
            mesh: IQ,
            alongX: gQ,
            phase: sQ * Math.PI / 2
          })
        }
      }
      addMarkers(QQ, WQ) {
        const XQ = WQ.blockers[0],
          wQ = {
            positions: [],
            indices: []
          };
        for (const [qQ, TQ, zQ] of WQ.blockers) uy(wQ, qQ - XQ[0] + .5, TQ - XQ[1] + .5, zQ - XQ[2] + .5, ty, ty, ty);
        this.meshes.push(QQ.createGameMesh(wQ, ey, XQ))
      }
      clear(QQ) {
        for (const WQ of this.meshes) QQ.disposeGameMesh(WQ);
        this.meshes = [], this.beams = []
      }
    }
    const xy = [.56, .83, 1],
      Yy = [1, .73, .08],
      Ny = [1, .25, .25],
      Zy = [.85, .85, .85],
      Oy = [.3, .45, .6];

    function Ky(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const zQ = qQ / 2,
        sQ = qQ + TQ;
      for (const FQ of [-zQ, zQ])
        for (const qQ of [-zQ, zQ]) uy(QQ, WQ, XQ + FQ, wQ + qQ, sQ, TQ, TQ), uy(QQ, WQ + FQ, XQ, wQ + qQ, TQ, sQ, TQ), uy(QQ, WQ + FQ, XQ + qQ, wQ, TQ, TQ, sQ)
    }

    function my(QQ) {
      return WQ => QQ.isBlockInLoadedChunk(WQ[0], WQ[1], WQ[2]) && 0 === QQ.getBlockId(WQ[0], WQ[1], WQ[2])
    }

    function My(QQ) {
      return QQ.map((QQ => {
        let {
          free: WQ,
          blocked: XQ,
          gaps: wQ,
          supports: qQ
        } = QQ;
        return `${WQ.join(";")}|${XQ.join(";")}|${wQ.join(";")}|${qQ.join(";")}`
      })).join("/")
    }

    function QV(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const TQ = WQ[0],
        zQ = {
          positions: [],
          indices: []
        };
      for (const [sQ, FQ, PQ] of WQ) Ky(zQ, sQ - TQ[0] + .5, FQ - TQ[1] + .5, PQ - TQ[2] + .5, wQ, qQ);
      return QQ.createGameMesh(zQ, XQ, TQ)
    }
    class WV {
      constructor(QQ) {
        this.store = QQ, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(QQ, WQ, XQ) {
        var wQ;
        const qQ = null === (wQ = QQ.wXQ(WQ)) || void 0 === wQ ? void 0 : wQ.name;
        if (qQ !== Fw && qQ !== sw) return void("" !== this.shownKey && this.show(QQ, "", []));
        const TQ = performance.now();
        if (TQ - this.lastCheckMs >= 200 && (this.lastCheckMs = TQ, qQ === Fw ? this.check(QQ, XQ) : this.preview(QQ, XQ)), this.pulses.length > 0) {
          const WQ = 1 + .12 * Math.sin(TQ / 1e3 * 1.25 * Math.PI * 2),
            XQ = [WQ, WQ, WQ];
          for (const wQ of this.pulses) QQ.setGameMesh(wQ, {
            scale: XQ
          })
        }
      }
      dispose(QQ) {
        this.clear(QQ), this.shownKey = ""
      }
      check(QQ, WQ) {
        const XQ = my(QQ),
          wQ = [];
        for (const {
            entry: TQ
          }
          of this.store.colliders()) {
          TQ.focus.every(((QQ, XQ) => Math.abs(QQ + .5 - WQ[XQ]) <= zw.GHOST_REACH)) && wQ.push(mF(TQ, XQ))
        }
        const qQ = My(wQ);
        qQ !== this.shownKey && this.show(QQ, qQ, wQ)
      }
      preview(QQ, WQ) {
        const XQ = QQ.getTargetedBlock(),
          wQ = XQ ? [XQ.OB[0], XQ.OB[1], XQ.OB[2]] : null,
          qQ = null !== wQ && wQ.every(((QQ, XQ) => Math.abs(QQ + .5 - WQ[XQ]) <= 8)),
          TQ = this.store.site(),
          zQ = qQ && TQ ? function(QQ, WQ, XQ) {
            const wQ = jw(QQ);
            if (!wQ.every(WQ)) return null;
            const qQ = pw(QQ, XQ);
            return {
              column: wQ,
              spots: mF({
                focus: wQ[1],
                lasers: [!1, !1, !1, !1],
                open: qQ,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, WQ),
              fits: qQ.filter(Boolean).length >= zw.MIN_SPOTS
            }
          }(wQ, my(QQ), TQ) : null,
          sQ = zQ ? [zQ.spots] : [],
          FQ = zQ ? `preview ${wQ.join(",")}|${zQ.fits}|${My(sQ)}` : "";
        var PQ, gQ;
        FQ !== this.shownKey && this.show(QQ, FQ, sQ, null !== (PQ = null === zQ || void 0 === zQ ? void 0 : zQ.column) && void 0 !== PQ ? PQ : [], null === (gQ = null === zQ || void 0 === zQ ? void 0 : zQ.fits) || void 0 === gQ || gQ)
      }
      show(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(QQ), this.shownKey = WQ, wQ.length > 0 && this.meshes.push(QV(QQ, wQ, Ly(qQ ? Zy : Ny)));
        for (const {
            free: TQ,
            blocked: zQ,
            gaps: sQ,
            supports: FQ
          }
          of XQ) {
          for (const [WQ, XQ, wQ] of TQ) {
            const qQ = {
              positions: [],
              indices: []
            };
            Ky(qQ, 0, 0, 0);
            const TQ = QQ.createGameMesh(qQ, Ly(xy), [WQ + .5, XQ + .5, wQ + .5]);
            this.meshes.push(TQ), this.pulses.push(TQ)
          }
          zQ.length > 0 && this.meshes.push(QV(QQ, zQ, Ly(Yy))), sQ.length > 0 && this.meshes.push(QV(QQ, sQ, Ly(Ny), 1.06, .07)), FQ.length > 0 && this.meshes.push(QV(QQ, FQ, Ly(Oy)))
        }
      }
      clear(QQ) {
        for (const WQ of this.meshes) QQ.disposeGameMesh(WQ);
        this.meshes = [], this.pulses = []
      }
    }
    class XV {
      constructor() {
        this.stored = new Map, this.Ds = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(QQ) {
        if (!QQ.baf2TermOpen) return !1;
        QQ.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [WQ, XQ] of QQ.baf2TermItems) XQ > 0 ? this.stored.set(WQ, XQ) : this.stored.delete(WQ);
        if (QQ.baf2TermHeld && (this.Ds = new Map(QQ.baf2TermHeld)), this.pending = this.pending.filter((WQ => WQ.seq > QQ.baf2TermAcked)), this.silos = QQ.baf2TermSilos, this.readOnly = QQ.baf2TermReadOnly, this.pocket = !0 === QQ.baf2TermPocket, QQ.baf2TermReset) this.resort();
        else {
          const QQ = new Set(this.order);
          for (const WQ of this.stored.keys()) QQ.has(WQ) || this.order.push(WQ)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((QQ, WQ) => this.amount(WQ) - this.amount(QQ) || QQ.localeCompare(WQ))), this.changed()
      }
      take(QQ, WQ) {
        const XQ = sW(QQ, this.amount(WQ));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: WQ,
          amount: XQ,
          put: !1
        }), this.recents = [WQ, ...this.recents.filter((QQ => QQ !== WQ))].slice(0, 6), this.changed(), XW(this.seq, QQ, WQ)
      }
      put(QQ, WQ) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: WQ,
          amount: sW(QQ, this.heldAmount(WQ)),
          put: !0
        }), this.changed(), wW(this.seq, QQ, WQ)
      }
      putAll() {
        this.seq++;
        for (const QQ of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: QQ,
          amount: this.heldAmount(QQ),
          put: !0
        });
        return this.changed(), qW(this.seq)
      }
      amount(QQ) {
        var WQ;
        let XQ = null !== (WQ = this.stored.get(QQ)) && void 0 !== WQ ? WQ : 0;
        for (const wQ of this.pending) wQ.item === QQ && (XQ += wQ.put ? wQ.amount : -wQ.amount);
        return Math.max(0, XQ)
      }
      heldAmount(QQ) {
        var WQ;
        let XQ = null !== (WQ = this.Ds.get(QQ)) && void 0 !== WQ ? WQ : 0;
        for (const wQ of this.pending) wQ.put && wQ.item === QQ && (XQ -= wQ.amount);
        return Math.max(0, XQ)
      }
      heldItems() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((WQ => WQ === QQ || this.heldAmount(WQ) > 0))
      }
      items() {
        return this.order.filter((QQ => this.amount(QQ) > 0))
      }
      recent() {
        return this.recents.filter((QQ => this.amount(QQ) > 0))
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
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      changed() {
        this.version++;
        for (const QQ of this.listeners) QQ()
      }
    }
    var wV = XQ(38703);
    const qV = {
      isBlock: QQ => void 0 !== cQ.h[QQ],
      harvestType: QQ => {
        var WQ;
        return null === (WQ = cQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.harvestType
      },
      harvestLevel: QQ => {
        var WQ;
        return null === (WQ = cQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.harvestLevel
      },
      dropsNothing: QQ => {
        var WQ;
        return null === (null === (WQ = cQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.drops)
      },
      displayName: QQ => {
        var WQ;
        return null === (WQ = Mz.l[QQ]) || void 0 === WQ ? void 0 : WQ.displayName
      },
      description: QQ => {
        var WQ;
        return null === (WQ = Mz.l[QQ]) || void 0 === WQ ? void 0 : WQ.description
      },
      harvests: QQ => {
        var WQ;
        return null === (WQ = Mz.l[QQ]) || void 0 === WQ ? void 0 : WQ.harvests
      },
      level: QQ => {
        var WQ;
        return null === (WQ = Mz.l[QQ]) || void 0 === WQ ? void 0 : WQ.level
      }
    };

    function TV(QQ, WQ, XQ) {
      return function(QQ, WQ, XQ, wQ) {
        var qQ, TQ;
        const zQ = WQ.split("|")[0],
          sQ = QQ.isBlock(WQ) ? WQ : QQ.isBlock(zQ) ? zQ : null;
        if (null === sQ || "rock" !== QQ.harvestType(sQ) || QQ.dropsNothing(sQ) && !fw.has(zQ)) return null;
        const FQ = XQ && "rock" === QQ.harvests(XQ) ? null !== (qQ = QQ.level(XQ)) && void 0 !== qQ ? qQ : 0 : null,
          PQ = null !== (TQ = null !== wQ && void 0 !== wQ ? wQ : QQ.harvestLevel(sQ)) && void 0 !== TQ ? TQ : 0;
        return (null !== FQ ? PQ <= FQ : 0 === QQ.harvestLevel(sQ)) ? null : aw(QQ, PQ)
      }(qV, QQ, WQ, XQ)
    }

    function zV(QQ, WQ) {
      return function(QQ, WQ, XQ) {
        if (WQ === Hw[0]) return [(0, EQ.Sd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, EQ.N.whiteUiText)];
        const wQ = XQ.split("|")[0],
          qQ = QQ.isBlock(wQ) ? QQ.displayName(wQ) : void 0,
          TQ = "string" === typeof qQ ? qQ : qQ && "translationKey" in qQ ? `$t(${qQ.translationKey})` : wQ;
        return [(0, EQ.Sd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: TQ
          }
        }, EQ.N.whiteUiText), (0, EQ.Sd)({
          translationKey: `item:${(0,EQ.ne)(WQ)}`
        }, EQ.N.yellowUiText)]
      }(qV, QQ, WQ)
    }
    const sV = "buildAFactory2Game:";
    const FV = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function PV(QQ) {
      return QQ.endsWith(" Ore")
    }
    const gV = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      JV = [],
      rV = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: gV,
        plan: null,
        atomic: JV
      },
      IV = "buildAFactory2Game:",
      jV = new Set(["Splitter", "Sorting Gate"]),
      BV = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class yV {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = QQ, this.planAt = WQ, this.tierOf = XQ, this.ez = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Ds = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = rV, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(QQ, WQ, XQ) {
        var wQ, qQ, TQ;
        let zQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const sQ = null !== (wQ = null === (qQ = QQ.wXQ(WQ)) || void 0 === qQ ? void 0 : qQ.name) && void 0 !== wQ ? wQ : null,
          FQ = QQ.isPlayerCrouching(WQ),
          PQ = 0 === XQ ? null : this.resolve(QQ, XQ),
          gQ = null !== PQ && null !== zQ && jV.has(PQ.rootName) && function(QQ, WQ) {
            return BV.some((XQ => {
              let [wQ, qQ] = XQ;
              const TQ = QQ.getBlockId(WQ[0] + wQ, WQ[1], WQ[2] + qQ);
              return 0 !== TQ && "Express Belt" === QQ.getMetaInfo(TQ).rootName
            }))
          }(QQ, zQ),
          JQ = this.updatePlan(0 === XQ ? null : zQ),
          rQ = this.tierOf(),
          IQ = null === zQ ? null : (0, wV.c)(XQ),
          jQ = null !== IQ && null !== zQ && (0, wV.g)(function(QQ) {
            return (WQ, XQ, wQ) => QQ.getBlockId(WQ, XQ, wQ)
          }(QQ), zQ[0], zQ[1], zQ[2], IQ),
          BQ = this.readAfloat(QQ, XQ, zQ);
        if (XQ === this.ez && jQ === this.missesMaker && BQ === this.afloat && sQ === this.Ds && FQ === this.crouching && gQ === this.express && rQ === this.tier && !JQ && (!this.targetsLive || !this.liveMoved(zQ))) return;
        this.ez = XQ, this.missesMaker = jQ, this.afloat = BQ, this.Ds = sQ, this.crouching = FQ, this.express = gQ;
        const yQ = gQ && PQ ? function(QQ) {
          if (null === QQ.info) return null;
          return QQ.express ??= {
            ...QQ.info,
            detail: `${IV}lookKeepsUpExpress`,
            detailItem: null
          }, QQ.express
        }(PQ) : null !== PQ && jQ && null !== IQ ? this.besideMaker(PQ, XQ, IQ) : null !== PQ && BQ ? this.hanging(PQ) : null !== (TQ = null === PQ || void 0 === PQ ? void 0 : PQ.info) && void 0 !== TQ ? TQ : null;
        this.tier = rQ;
        const VQ = PQ && yQ ? function(QQ, WQ) {
          var XQ, wQ;
          const qQ = cQ.h[QQ];
          if (!QQ.endsWith(" Ore") || "rock" !== (null === qQ || void 0 === qQ ? void 0 : qQ.harvestType) || 0 === qQ.harvestLevel) return null;
          const TQ = null !== (XQ = qQ.harvestLevel) && void 0 !== XQ ? XQ : 0,
            zQ = WQ ? Mz.l[WQ] : void 0;
          if ("rock" === (null === zQ || void 0 === zQ ? void 0 : zQ.harvests) && (null !== (wQ = zQ.level) && void 0 !== wQ ? wQ : 0) >= TQ) return null;
          const sQ = (FQ = TQ, aw(qV, FQ));
          var FQ;
          if (null === sQ) return null;
          const PQ = wT(sQ),
            gQ = /^[AEIOU]/.test(sQ) ? "An" : "";
          if ("rock" === (null === zQ || void 0 === zQ ? void 0 : zQ.harvests) && WQ) return {
            key: `${IV}lookToolTooWeak${gQ}`,
            Ds: wT(WQ),
            needed: PQ
          };
          return {
            key: sQ === Hw[0] ? `${IV}lookNeedAnyPickaxe` : `${IV}lookNeedPickaxe${gQ}`,
            Ds: null,
            needed: PQ
          }
        }(PQ.rootName, sQ) : null;
        this.targetsLive = !0 === (null === PQ || void 0 === PQ ? void 0 : PQ.live) && null !== zQ;
        let DQ = null;
        this.targetsLive && PQ && zQ && this.live && (this.livePos[0] = zQ[0], this.livePos[1] = zQ[1], this.livePos[2] = zQ[2], this.liveVersion = this.live.version(), DQ = this.live.line(PQ.rootName, zQ));
        const pQ = null === yQ ? gV : function(QQ, WQ, XQ) {
            const wQ = function(QQ, WQ, XQ) {
              const wQ = RX(QQ);
              if (null === wQ) return null;
              const qQ = `${sV}lookPortMode_${wQ}`,
                TQ = ow(WQ);
              if (TQ && XQ) return {
                mode: null,
                detail: qQ,
                next: `${sV}lookWrenchPickUp`,
                nextState: null
              };
              const zQ = EX(QQ),
                sQ = null === zQ ? null : RX(zQ);
              return null === sQ ? {
                mode: null,
                detail: qQ,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: qQ,
                next: TQ ? `${sV}lookWrenchNext` : `${sV}lookPortWrench`,
                nextState: `${sV}lookPortState_${sQ}`
              }
            }(QQ, WQ, XQ);
            if (null !== wQ) return wQ;
            const qQ = wq(QQ, WQ, XQ);
            return null === qQ.mode && null === qQ.next ? gV : qQ
          }(QQ.blockIdToBlockName(XQ), sQ, FQ),
          GQ = this.plan,
          UQ = PQ && yQ ? this.rowsOf(PQ.rootName, rQ) : JV,
          bQ = this.snapshot;
        if (!(null === yQ ? !bQ.visible : bQ.visible && yQ === bQ.info && (vQ = VQ, dQ = bQ.tool, vQ === dQ || null !== vQ && null !== dQ && vQ.key === dQ.key && vQ.Ds === dQ.Ds && vQ.needed === dQ.needed) && function(QQ, WQ) {
            return QQ === WQ || null !== QQ && null !== WQ && QQ.key === WQ.key && JSON.stringify([QQ.params, QQ.keys]) === JSON.stringify([WQ.params, WQ.keys])
          }(DQ, bQ.live) && function(QQ, WQ) {
            return QQ.mode === WQ.mode && QQ.detail === WQ.detail && QQ.next === WQ.next && QQ.nextState === WQ.nextState
          }(pQ, bQ.wrench) && Nj(GQ, bQ.plan) && UQ === bQ.atomic)) {
          var vQ, dQ;
          this.snapshot = null === yQ ? {
            ...bQ,
            visible: !1
          } : {
            info: yQ,
            visible: !0,
            tool: VQ,
            live: DQ,
            wrench: pQ,
            plan: GQ,
            atomic: UQ
          };
          for (const QQ of this.listeners) QQ()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = rV, this.ez = 0, this.Ds = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(QQ, WQ, XQ) {
        if (null === XQ || 0 === WQ || !sQ() || !PV(this.resolve(QQ, WQ).rootName)) return !1;
        const wQ = `${XQ[0]},${XQ[1]},${XQ[2]},${WQ}`,
          qQ = performance.now();
        return wQ === this.afloatKey && qQ - this.afloatAt < VV ? this.afloat : (this.afloatKey = wQ, this.afloatAt = qQ, function(QQ, WQ) {
          for (const [XQ, wQ, qQ] of FV) {
            const TQ = WQ(QQ[0] + XQ, QQ[1] + wQ, QQ[2] + qQ);
            if (void 0 === TQ || null !== TQ && !PV(TQ)) return !1
          }
          return !0
        }(XQ, ((WQ, XQ, wQ) => function(QQ, WQ, XQ, wQ) {
          if (!QQ.isBlockInLoadedChunk(WQ, XQ, wQ)) return;
          const qQ = QQ.getBlockId(WQ, XQ, wQ);
          return 0 === qQ ? null : QQ.getMetaInfo(qQ).rootName
        }(QQ, WQ, XQ, wQ))))
      }
      liveMoved(QQ) {
        var WQ;
        const {
          livePos: XQ
        } = this;
        return null === QQ || QQ[0] !== XQ[0] || QQ[1] !== XQ[1] || QQ[2] !== XQ[2] || (null === (WQ = this.live) || void 0 === WQ ? void 0 : WQ.version()) !== this.liveVersion
      }
      updatePlan(QQ) {
        const WQ = null === QQ ? "" : QQ.join(","),
          XQ = performance.now();
        if (WQ === this.planPos && XQ - this.planMs < 250) return !1;
        this.planPos = WQ, this.planMs = XQ;
        const wQ = null === QQ ? null : this.planAt([QQ[0], QQ[1], QQ[2]]),
          qQ = !Nj(wQ, this.plan);
        return this.plan = wQ, qQ
      }
      besideMaker(QQ, WQ, XQ) {
        let {
          info: wQ
        } = QQ;
        if (null === wQ) return null;
        let qQ = this.besideMakerById.get(WQ);
        if (void 0 === qQ) {
          const QQ = "cryo" === XQ ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          qQ = {
            ...wQ,
            detail: `${IV}${QQ}`,
            detailItem: null
          }, this.besideMakerById.set(WQ, qQ)
        }
        return qQ
      }
      hanging(QQ) {
        let {
          info: WQ,
          rootName: XQ
        } = QQ;
        if (null === WQ) return null;
        let wQ = this.afloatByRoot.get(XQ);
        return void 0 === wQ && (wQ = {
          ...WQ,
          detail: `${IV}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(XQ, wQ)), wQ
      }
      rowsOf(QQ, WQ) {
        if (null === WQ) return JV;
        const XQ = `${QQ}|${WQ}`;
        let wQ = this.rowsByKey.get(XQ);
        if (void 0 === wQ) {
          const qQ = function(QQ, WQ) {
            var XQ;
            if (!(QQ in EW)) return [];
            const wQ = null !== (XQ = CW[QQ]) && void 0 !== XQ ? XQ : [],
              qQ = new Map;
            for (const zQ of oT(QQ, WQ))
              if ((wQ.includes(zQ) || tT(zQ.output) && fT(zQ.output) > OQ(QQ)) && fT(zQ.output) <= WQ) {
                var TQ;
                const QQ = null !== (TQ = qQ.get(zQ.output)) && void 0 !== TQ ? TQ : [];
                QQ.push(zQ.input), qQ.set(zQ.output, QQ)
              } return nT([...qQ], (QQ => {
              let [WQ] = QQ;
              return -fT(WQ)
            })).map((QQ => {
              let [WQ, XQ] = QQ;
              return {
                output: WQ,
                inputs: XQ
              }
            }))
          }(QQ, WQ);
          wQ = qQ.length > 0 ? qQ : JV, this.rowsByKey.set(XQ, wQ)
        }
        return wQ
      }
      resolve(QQ, WQ) {
        const {
          rootId: XQ,
          rootName: wQ
        } = QQ.getMetaInfo(WQ), qQ = (0, jX.n)(wQ) ? WQ : XQ;
        let TQ = this.byRootId.get(qQ);
        const zQ = sQ();
        if (void 0 === TQ || TQ.nuclear !== zQ) {
          var FQ;
          const XQ = function(QQ) {
            return Lw(qV, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ)
          }(wQ, QQ.blockIdToBlockName(WQ));
          TQ = {
            info: XQ,
            rootName: wQ,
            live: null !== XQ && !0 === (null === (FQ = this.live) || void 0 === FQ ? void 0 : FQ.handles(wQ)),
            nuclear: zQ
          }, this.byRootId.set(qQ, TQ)
        }
        return TQ
      }
    }
    const VV = 500;
    const DV = (0, wQ.memo)((function(QQ) {
      var WQ, XQ;
      let {
        store: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, lq.C)(), [zQ, sQ] = (0, wQ.useState)((() => qQ.get()));
      (0, wQ.useEffect)((() => (sQ(qQ.get()), qQ.subscribe((() => {
        sQ(qQ.get())
      })))), [qQ]);
      const {
        openInGameMenuName: FQ,
        openEverythingMenuName: PQ,
        isTouchScreen: gQ
      } = (0, Gq.n)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: JQ,
        tool: rQ,
        live: IQ,
        wrench: jQ,
        atomic: BQ
      } = zQ, yQ = zQ.visible && null === FQ && null === PQ;
      if (null === JQ) return null;
      const VQ = null !== jQ.detail ? TQ(jQ.detail) : null !== (WQ = zQ.plan) && void 0 !== WQ && WQ.ctrl ? TQ("buildAFactory2Game:lookPlanCtrl") : null !== JQ.detail ? TQ(JQ.detail, null === JQ.detailItem ? void 0 : {
        item: TQ(JQ.detailItem)
      }) : null;
      return (0, HT.jsxs)("div", {
        className: vq()("Baf2LookTarget", {
          Visible: yQ
        }),
        "aria-hidden": !yQ,
        children: [(0, HT.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: TQ(JQ.name)
        }), null !== zQ.plan && (0, HT.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: TQ(zQ.plan.key, {
            kind: TQ(zQ.plan.kindKey),
            w: String(zQ.plan.w),
            h: String(zQ.plan.h),
            d: String(zQ.plan.d),
            count: String(zQ.plan.count)
          })
        }), void 0 !== (null === (XQ = zQ.plan) || void 0 === XQ ? void 0 : XQ.why) && (0, HT.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: TQ(zQ.plan.why)
        }), null !== jQ.mode && (0, HT.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: TQ(jQ.mode)
        }), null !== rQ ? (0, HT.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: TQ(rQ.key, {
            item: TQ(rQ.needed),
            Ds: null === rQ.Ds ? "" : TQ(rQ.Ds)
          })
        }) : null !== IQ ? (0, HT.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: TQ(IQ.key, TP(TQ, IQ))
        }) : null !== VQ && (0, HT.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: VQ
        }), BQ.length > 0 && (0, HT.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: TQ("buildAFactory2Game:lookAtomicRecipes", {
            list: BQ.map((QQ => {
              let {
                output: WQ,
                inputs: XQ
              } = QQ;
              const wQ = XQ.length > 1 ? ` ${TQ("buildAFactory2Game:recipeMore",{count:String(XQ.length-1)})}` : "";
              return `${TQ(wT(XQ[0]))}${wQ} \u2192 ${TQ(wT(WQ))}`
            })).join(", ")
          })
        }), null !== jQ.next && (0, HT.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: TQ(jQ.next, {
            state: null === jQ.nextState ? "" : TQ(jQ.nextState),
            use: TQ(gQ ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var pV = XQ(38801);
    const GV = [],
      UV = [
        [0, -1, 0]
      ];

    function bV(QQ) {
      const WQ = [QQ];
      for (let XQ = 1; XQ <= 4; XQ++) XQ > 1 && WQ.push(`${QQ}|meta|rot${XQ}`), WQ.push(`${QQ}|meta|rot${XQ}|Running`);
      return WQ
    }

    function vV(QQ, WQ) {
      return [Math.floor(QQ[0] / WQ), Math.floor(QQ[1] / WQ), Math.floor(QQ[2] / WQ)]
    }

    function dV(QQ, WQ, XQ) {
      return `${QQ},${WQ},${XQ}`
    }

    function HV(QQ) {
      const WQ = QQ.split("|")[0];
      if (!PX(WQ)) return GV;
      const XQ = EW[WQ];
      if (WX(XQ)) return UV;
      const wQ = vy(QQ);
      return XX(XQ) ? [
        [-wQ[0], -wQ[1], -wQ[2]]
      ] : dq(XQ) ? function(QQ, WQ) {
        const XQ = QQ[0] - 2 * WQ[0],
          wQ = QQ[2] - 2 * WQ[2],
          qQ = [];
        for (let TQ = -1; TQ <= 1; TQ++)
          for (let WQ = -1; WQ <= 1; WQ++) qQ.push([XQ + TQ, QQ[1], wQ + WQ]);
        return qQ
      }([0, 0, 0], wQ) : GV
    }
    const aV = [.5, .5, .5],
      lV = [.2, .8, .3],
      hV = [.45, 1, .5];
    class iV {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(QQ) {
        this.indexed = !0;
        for (const WQ of lW)
          for (const XQ of bV(WQ)) {
            const WQ = QQ.blockNameToBlockId(XQ, !0),
              wQ = HV(XQ);
            null !== WQ && wQ.length > 0 && (this.offsetsList.push(wQ), this.offsetsIndexById[WQ] = this.offsetsList.length)
          }
      }
      onAfterRender(QQ, WQ) {
        this.indexed || this.index(QQ);
        const XQ = performance.now();
        if (XQ - this.lastCheckMs < 100) return;
        this.lastCheckMs = XQ, this.checks++;
        const wQ = Bj.h.Ij,
          [qQ, TQ, zQ] = vV(WQ, wQ);
        let sQ = !1;
        const FQ = [];
        let PQ = 0;
        for (let gQ = qQ - 2; gQ <= qQ + 2; gQ++)
          for (let WQ = TQ - 1; WQ <= TQ + 1; WQ++)
            for (let qQ = zQ - 2; qQ <= zQ + 2; qQ++) {
              const TQ = PQ++,
                zQ = dV(gQ, WQ, qQ),
                JQ = QQ.getChunkVersion(gQ, WQ, qQ);
              let rQ = this.chunks.get(zQ);
              null !== JQ ? (rQ || (rQ = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(zQ, rQ)), rQ.seenAt = this.checks, rQ.checkedVersion !== JQ && (rQ.checkedVersion = JQ, sQ = !0), rQ.scannedVersion !== JQ && XQ - rQ.scannedAt >= 500 && FQ.push({
                slot: TQ,
                entry: rQ,
                origin: [gQ * wQ, WQ * wQ, qQ * wQ]
              })) : (sQ ||= void 0 !== rQ, this.chunks.delete(zQ))
            }
        this.scanDue(QQ, FQ) && (sQ = !0);
        for (const [gQ, JQ] of this.chunks) JQ.seenAt !== this.checks && (sQ ||= JQ.machines.length > 0, this.chunks.delete(gQ));
        for (const gQ of this.chunks.values())
          for (const [WQ, XQ, wQ] of gQ.cellChunks)(Math.abs(WQ - qQ) > 2 || Math.abs(XQ - TQ) > 1 || Math.abs(wQ - zQ) > 2) && this.watchCellChunk(QQ, WQ, XQ, wQ) && (sQ = !0);
        for (const [gQ, JQ] of this.cellChunks) JQ.seenAt !== this.checks && this.cellChunks.delete(gQ);
        sQ && this.refresh(QQ)
      }
      dispose(QQ) {
        this.clearMeshes(QQ), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(QQ, WQ) {
        const XQ = Math.max(WQ.findIndex((QQ => {
          let {
            slot: WQ
          } = QQ;
          return WQ >= this.scanFrom
        })), 0);
        let wQ = 96;
        for (let qQ = 0; qQ < WQ.length; qQ++) {
          const {
            slot: TQ,
            entry: zQ,
            origin: sQ
          } = WQ[(XQ + qQ) % WQ.length];
          if (wQ -= this.scan(QQ, zQ, sQ), wQ <= 0) {
            this.scanFrom = TQ + 1;
            break
          }
        }
        return WQ.length > 0
      }
      scan(QQ, WQ, XQ) {
        let [wQ, qQ, TQ] = XQ;
        const zQ = Bj.h.Ij,
          sQ = this.hits;
        sQ.length = 0;
        const FQ = QQ.scanBlocks(wQ, qQ, TQ, wQ + zQ, qQ + zQ, TQ + zQ, this.offsetsIndexById, sQ),
          PQ = [];
        for (let gQ = 0; gQ < sQ.length; gQ += 4) PQ.push({
          pos: [sQ[gQ], sQ[gQ + 1], sQ[gQ + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[sQ[gQ + 3]] - 1]
        });
        return WQ.machines = PQ, WQ.cellChunks = function(QQ, WQ) {
          const XQ = new Set,
            wQ = [];
          for (const {
              pos: qQ,
              offsets: TQ
            }
            of QQ)
            for (const [QQ, zQ, sQ] of TQ) {
              const TQ = vV([qQ[0] + QQ, qQ[1] + zQ, qQ[2] + sQ], WQ),
                FQ = dV(...TQ);
              XQ.has(FQ) || (XQ.add(FQ), wQ.push(TQ))
            }
          return wQ
        }(PQ, zQ), WQ.scannedVersion = WQ.checkedVersion, WQ.scannedAt = performance.now(), Math.max(FQ, 1)
      }
      watchCellChunk(QQ, WQ, XQ, wQ) {
        const qQ = dV(WQ, XQ, wQ),
          TQ = QQ.getChunkVersion(WQ, XQ, wQ),
          zQ = this.cellChunks.get(qQ);
        return null === TQ ? this.cellChunks.delete(qQ) : (null === zQ || void 0 === zQ ? void 0 : zQ.version) === TQ ? (zQ.seenAt = this.checks, !1) : (this.cellChunks.set(qQ, {
          version: TQ,
          seenAt: this.checks
        }), !0)
      }
      refresh(QQ) {
        const WQ = function(QQ, WQ) {
            const XQ = new Set,
              wQ = [];
            for (const {
                pos: qQ,
                offsets: TQ
              }
              of QQ)
              for (const [QQ, zQ, sQ] of TQ) {
                const TQ = qQ[0] + QQ,
                  FQ = qQ[1] + zQ,
                  PQ = qQ[2] + sQ,
                  gQ = `${TQ},${FQ},${PQ}`;
                XQ.has(gQ) || (XQ.add(gQ), WQ(TQ, FQ, PQ) && wQ.push([TQ, FQ, PQ]))
              }
            return wQ
          }([...this.chunks.values()].flatMap((QQ => QQ.machines)), ((WQ, XQ, wQ) => QQ.isBlockInLoadedChunk(WQ, XQ, wQ) && 0 === QQ.getBlockId(WQ, XQ, wQ))),
          XQ = WQ.join(";");
        XQ !== this.shownKey && (this.shownKey = XQ, this.clearMeshes(QQ), WQ.length > 0 && (this.meshes = [this.build(QQ, WQ, !1), this.build(QQ, WQ, !0)]))
      }
      build(QQ, WQ, XQ) {
        const wQ = WQ[0],
          qQ = [],
          TQ = [];
        for (const [zQ, sQ, FQ] of WQ)(0, pV.e)(qQ, TQ, [zQ - wQ[0] + .5, sQ - wQ[1] + .5, FQ - wQ[2] + .5], aV, XQ);
        return QQ.createGameMesh({
          positions: qQ,
          indices: TQ
        }, {
          rgb: XQ ? hV : lV,
          alpha: .4
        }, wQ)
      }
      clearMeshes(QQ) {
        for (const WQ of this.meshes) QQ.disposeGameMesh(WQ);
        this.meshes = []
      }
    }
    const cV = 1 / .6,
      AV = 200,
      RV = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      EV = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      CV = 2 * Math.PI / 3;
    class uV {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RV;
        this.style = QQ, this.particles = null, this.points = new Float32Array(800), this.budget = AV, this.lastMs = 0
      }
      static blade() {
        return new uV(EV)
      }
      KV(QQ, WQ) {
        const XQ = Math.min(WQ.arcStruck, WQ.arcPoints.length);
        this.draw(QQ, [WQ.arcFrom, ...WQ.arcPoints], WQ.arcPoints.slice(0, XQ))
      }
      onBlade(QQ, WQ) {
        const [XQ, wQ, qQ] = WQ.bladeCentre, [TQ, zQ] = WQ.bladeFacing, sQ = XQ - 1.5 * TQ, FQ = qQ - 1.5 * zQ, PQ = Math.atan2(zQ, TQ), gQ = [];
        for (let JQ = 0; JQ <= 8; JQ++) {
          const QQ = PQ - CV / 2 + CV * JQ / 8;
          gQ.push([sQ + 2.5 * Math.cos(QQ), wQ, FQ + 2.5 * Math.sin(QQ)])
        }
        this.draw(QQ, gQ, WQ.bladeStruck)
      }
      dispose() {
        var QQ;
        null === (QQ = this.particles) || void 0 === QQ || QQ.stop(), this.particles = null
      }
      draw(QQ, WQ, XQ) {
        if (!QQ.particlesEnabled() || WQ.length < 2) return;
        const wQ = performance.now();
        this.budget = Math.min(AV, this.budget + (wQ - this.lastMs) / 1e3 * AV), this.lastMs = wQ;
        const qQ = [];
        let TQ = 0,
          zQ = WQ[0];
        for (const VQ of WQ.slice(1)) {
          const QQ = Math.min(48, Math.round(Math.hypot(VQ[0] - zQ[0], VQ[1] - zQ[1], VQ[2] - zQ[2]) * this.style.perBlock));
          qQ.push([zQ, VQ, QQ]), TQ += QQ, zQ = VQ
        }
        const sQ = XQ.length;
        TQ += 10 * sQ;
        const FQ = TQ > this.budget ? this.budget / TQ : 1;
        if (0 === TQ || FQ * TQ < 1) return;
        const PQ = WQ[0],
          [gQ, JQ, rQ] = PQ,
          IQ = this.points;
        let jQ = 0;
        const BQ = (QQ, WQ, XQ, wQ) => {
          const qQ = 4 * jQ;
          IQ[qQ] = QQ - gQ, IQ[qQ + 1] = WQ - JQ, IQ[qQ + 2] = XQ - rQ, IQ[qQ + 3] = wQ, jQ++
        };
        qQ.forEach(((QQ, WQ) => {
          let [XQ, wQ, qQ] = QQ;
          const TQ = Math.min(Math.floor(qQ * FQ), AV - jQ),
            zQ = Math.hypot(wQ[0] - XQ[0], wQ[1] - XQ[1], wQ[2] - XQ[2]),
            sQ = 0 === WQ && zQ > 0 ? Math.min(.5, .1 * zQ) / zQ : 0;
          for (let FQ = 0; FQ < TQ; FQ++) {
            const QQ = sQ + (FQ + .5) / TQ * (1 - sQ);
            BQ(XQ[0] + (wQ[0] - XQ[0]) * QQ, XQ[1] + (wQ[1] - XQ[1]) * QQ, XQ[2] + (wQ[2] - XQ[2]) * QQ, .15)
          }
        }));
        const yQ = Math.floor(10 * FQ);
        for (let VQ = 0; VQ < sQ; VQ++) {
          const [QQ, WQ, wQ] = XQ[VQ];
          for (let XQ = 0; XQ < yQ && jQ < AV; XQ++) BQ(QQ, WQ, wQ, 2.5)
        }
        this.budget -= jQ, this.particles ??= QQ.createParticles(function(QQ) {
          const [WQ, XQ] = QQ.colours;
          return {
            texture: "square_particle",
            yJ: 400,
            minLifeTime: QQ.life[0] / cV,
            maxLifeTime: QQ.life[1] / cV,
            minSize: QQ.size[0],
            maxSize: QQ.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [WQ[0], WQ[1], WQ[2], 1],
              maxColor: [XQ[0], XQ[1], XQ[2], 1]
            }, {
              timeFraction: 1,
              minColor: [WQ[0], WQ[1], WQ[2], 0],
              maxColor: [XQ[0], XQ[1], XQ[2], 0]
            }],
            blendMode: Ls.c.Add
          }
        }(this.style), {
          pos: PQ
        }), this.particles.emitPoints(PQ, IQ, jQ)
      }
    }
    const LV = new Set(["Sky Spring"]);

    function kV(QQ, WQ, XQ) {
      const wQ = QQ.split("|")[0];
      return "Air" !== WQ || XQ || ! function(QQ) {
        const WQ = QQ.split("|")[0];
        return void 0 !== zX[WQ] || LV.has(WQ)
      }(wQ) ? null : QQ
    }
    class fV {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(QQ) {
        const WQ = QQ - this.lastTapAt >= 300;
        return this.lastTapAt = QQ, WQ
      }
    }
    class SV {
      constructor() {
        this.presses = new fV, this.predicted = null
      }
      tap(QQ, WQ) {
        const XQ = this.presses.isNewPress(WQ);
        return XQ && (this.predicted = {
          station: QQ,
          at: WQ
        }), XQ
      }
      consumeServerOpen(QQ, WQ) {
        const XQ = this.predicted;
        return !(null === XQ || XQ.station !== QQ || WQ - XQ.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class tV {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(QQ, WQ) {
        return QQ && (this.thrustAt = WQ), WQ - this.thrustAt < 200
      }
    }
    const oV = [.1, .05, .1],
      eV = {
        texture: "effect_5",
        yJ: Math.ceil(48),
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
        blendMode: Ls.c.OneOne
      };
    class nV {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new tV, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      KV(QQ, WQ) {
        for (const [XQ, wQ] of WQ.baf2JetFlames) QQ.isLocalPlayer(XQ) || (wQ ? this.lit.add(XQ) : this.lit.delete(XQ))
      }
      onAfterRender(QQ, WQ) {
        const XQ = performance.now(),
          wQ = this.hold.lit(this.selfThrusting(QQ, WQ), XQ);
        for (const [qQ, TQ] of this.flames)(qQ === WQ ? wQ : this.lit.has(qQ)) || this.setEmitting(TQ, !1), qQ === WQ || QQ.getPositionView(qQ) ? !TQ.emitting && XQ - TQ.offAt >= 1300 && (TQ.particles.stop(), this.flames.delete(qQ)) : (TQ.particles.dispose(), this.flames.delete(qQ), this.lit.delete(qQ));
        wQ && this.draw(QQ, WQ, WQ);
        for (const qQ of this.lit) this.draw(QQ, WQ, qQ)
      }
      dispose() {
        for (const QQ of this.flames.values()) QQ.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(QQ, WQ) {
        var XQ;
        const wQ = QQ.getLocalPlayerMovement();
        return !!wQ && (null !== (qQ = {
          option: null !== (XQ = QQ.getClientOption(WQ, "jumpHoldThrust")) && void 0 !== XQ ? XQ : null,
          jumping: wQ.jumpHeld,
          onGround: wQ.onGround,
          alive: QQ.isAlive(WQ)
        }).option && qQ.option.maxUpSpeed >= 0 && qQ.jumping && !qQ.onGround && qQ.alive);
        var qQ
      }
      draw(QQ, WQ, XQ) {
        var wQ, qQ;
        const TQ = this.pos;
        if (!QQ.readDrawnPosition(XQ, TQ)) return;
        const zQ = QQ.readDrawnPosition(WQ, this.camera) ? this.camera : TQ;
        if (!((TQ[0] - zQ[0]) ** 2 + (TQ[1] - zQ[1]) ** 2 + (TQ[2] - zQ[2]) ** 2 < 1600) || !QQ.particlesEnabled()) {
          const QQ = this.flames.get(XQ);
          return void(QQ && this.setEmitting(QQ, !1))
        }
        const sQ = null !== (wQ = this.flames.get(XQ)) && void 0 !== wQ ? wQ : this.create(QQ, XQ, TQ),
          FQ = null !== (qQ = QQ.getDrawnHeading(XQ)) && void 0 !== qQ ? qQ : 0,
          PQ = this.at;
        PQ[0] = TQ[0] - .35 * Math.sin(FQ), PQ[1] = TQ[1] + 1.05, PQ[2] = TQ[2] - .35 * Math.cos(FQ), sQ.particles.moveTo(PQ), this.setEmitting(sQ, !0)
      }
      setEmitting(QQ, WQ) {
        QQ.emitting !== WQ && (QQ.emitting = WQ, WQ || (QQ.offAt = performance.now()), QQ.particles.setEmitRate(WQ ? 60 : 0))
      }
      create(QQ, WQ, XQ) {
        const wQ = {
          particles: QQ.createParticles(eV, {
            pos: XQ,
            half: oV
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(WQ, wQ), wQ
      }
    }

    function xV(QQ) {
      return "Reactor Frame" === ww("reactor", QQ)
    }

    function YV(QQ) {
      return kX("reactor", QQ) && !xV(QQ) && (QQ.startsWith("Reactor Glass") || QQ.startsWith("Reactor Port"))
    }
    const NV = "baf2Goal";
    class ZV {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Eq.k.subscribe("setDirectionArrow", (QQ => {
          let {
            id: WQ,
            position: XQ
          } = QQ;
          WQ === NV && (this.goal = XQ, this.checkedAt = -1 / 0)
        })), Eq.k.subscribe("clearDirectionArrow", (QQ => {
          let {
            id: WQ
          } = QQ;
          null !== WQ && WQ !== NV || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const QQ of this.subs) Eq.k.unsubscribe(QQ)
      }
      sideOf(QQ, WQ, XQ, wQ) {
        const qQ = this.goal;
        if (!qQ) return 0;
        XQ - this.checkedAt > 1e3 && (this.checkedAt = XQ, this.open = function(QQ, WQ) {
          const [XQ, wQ, qQ] = QQ.map(Math.floor);
          if (!YV(WQ(XQ, wQ, qQ))) return null;
          for (const [TQ, zQ] of [
              [1, 0],
              [0, 1]
            ]) {
            const QQ = WQ(XQ + TQ, wQ, qQ + zQ),
              sQ = WQ(XQ - TQ, wQ, qQ - zQ);
            if (xV(sQ) && YV(QQ)) return [TQ, 0, zQ];
            if (xV(QQ) && YV(sQ)) return [0 - TQ, 0, 0 - zQ]
          }
          return null
        }(qQ, ((WQ, XQ, wQ) => QQ.blockIdToBlockName(QQ.getBlockId(WQ, XQ, wQ)))));
        const TQ = this.open;
        if (!TQ) return 0;
        const zQ = wQ(qQ);
        if (Math.abs(zQ.x - WQ.x) > .05 || Math.abs(zQ.y - WQ.y) > .05) return 0;
        const sQ = wQ([qQ[0] + TQ[0], qQ[1], qQ[2] + TQ[2]]).x - zQ.x;
        return Math.abs(sQ) < .3 ? 0 : sQ > 0 ? 1 : -1
      }
    }
    class OV {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new ZV, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.zj = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.cV = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((QQ => {
          for (const WQ of QQ) WQ.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(WQ.target, WQ.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.zj || this.clear()
        }, window.addEventListener("resize", this.cV)
      }
      onAfterRender(QQ, WQ) {
        var XQ;
        this.api = QQ, this.project = null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.projectWorldPosToScreenPos) && void 0 !== XQ ? XQ : null, this.queued || this.zj || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.zj = !0;
        for (const QQ of this.moved.keys()) QQ.style.transform = "";
        this.moved.clear();
        for (const QQ of this.sideLabels.keys()) QQ.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.cV)
      }
      clear() {
        for (const TQ of this.moved.keys()) TQ.isConnected || this.moved.delete(TQ);
        for (const TQ of this.sideLabels.keys()) TQ.isConnected || this.sideLabels.delete(TQ);
        if (0 === this.arrows.length) return;
        const QQ = performance.now(),
          WQ = QQ - this.refreshedAt > 1e3;
        WQ && (this.refreshedAt = QQ, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const XQ = this.trackerBox(),
          wQ = this.barsBox(),
          qQ = this.toastBox(WQ);
        (XQ || wQ || qQ) && WQ && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let TQ = 0; TQ < this.arrows.length; TQ++) {
          const WQ = this.arrows[TQ];
          this.labelOffsets.set(WQ, this.runLabelAside(WQ, QQ));
          const zQ = (XQ ? this.shiftLeftOf(WQ, XQ) : 0) || this.shiftOnScreen(WQ),
            sQ = Math.min(wQ ? this.liftAbove(WQ, wQ, zQ) : 0, qQ ? this.liftAbove(WQ, qQ, zQ) : 0),
            FQ = this.moved.get(WQ);
          if (0 !== zQ || 0 !== sQ) {
            const QQ = 0 === sQ ? `translateX(${zQ}px)` : `translate(${zQ}px, ${sQ}px)`;
            FQ !== QQ && (WQ.style.transform = QQ, this.moved.set(WQ, QQ))
          } else void 0 !== FQ && (WQ.style.transform = "", this.moved.delete(WQ))
        }
      }
      trackerBox() {
        var QQ, WQ;
        const XQ = null !== (QQ = this.tracker) && void 0 !== QQ && QQ.isConnected ? this.tracker : null !== (WQ = this.trackers[0]) && void 0 !== WQ ? WQ : null;
        if (XQ !== this.tracker && this.watch(XQ), this.boxStale && XQ) {
          var wQ, qQ, TQ;
          this.boxStale = !1;
          const QQ = XQ.closest(".NoRoom") ? null : XQ.getBoundingClientRect(),
            WQ = QQ && QQ.width > 0 ? null === (wQ = this.hud) || void 0 === wQ ? void 0 : wQ.getBoundingClientRect() : void 0,
            zQ = QQ && WQ ? Math.max(QQ.top, WQ.top) : null !== (qQ = null === QQ || void 0 === QQ ? void 0 : QQ.top) && void 0 !== qQ ? qQ : 0,
            sQ = QQ && WQ ? Math.min(QQ.bottom, WQ.bottom) : null !== (TQ = null === QQ || void 0 === QQ ? void 0 : QQ.bottom) && void 0 !== TQ ? TQ : 0;
          this.box = QQ && QQ.width > 0 && sQ > zQ ? {
            left: QQ.left,
            top: zQ,
            right: QQ.right,
            bottom: sQ
          } : null
        }
        return XQ ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var QQ;
          this.barsStale = !1;
          const WQ = null === (QQ = this.statBars[0]) || void 0 === QQ ? void 0 : QQ.getBoundingClientRect();
          this.bars = WQ && WQ.width > 0 && WQ.height > 0 ? {
            left: WQ.left,
            top: WQ.top,
            right: WQ.right,
            bottom: WQ.bottom
          } : null
        }
        return this.bars
      }
      toastBox(QQ) {
        var WQ;
        const XQ = null !== (WQ = this.toasts[0]) && void 0 !== WQ ? WQ : null;
        if (XQ !== this.toastEl || QQ && XQ) {
          this.toastEl = XQ;
          const QQ = null === XQ || void 0 === XQ ? void 0 : XQ.getBoundingClientRect();
          this.toast = QQ && QQ.width > 0 && QQ.height > 0 ? {
            left: QQ.left,
            top: QQ.top,
            right: QQ.right,
            bottom: QQ.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(QQ, WQ, XQ) {
        var wQ;
        const qQ = this.anchorOf(QQ);
        if (!qQ) return 0;
        const TQ = qQ.x + XQ + (null !== (wQ = this.labelOffsets.get(QQ)) && void 0 !== wQ ? wQ : 0),
          {
            halfWidth: zQ,
            labelled: sQ
          } = this.extentOf(QQ),
          FQ = qQ.y + this.em * (sQ ? 6.2 : 3);
        return FQ < WQ.top - 6 || TQ + zQ < WQ.left - 6 || TQ - zQ > WQ.right + 6 ? 0 : WQ.top - 6 - FQ
      }
      watch(QQ) {
        var WQ, XQ;
        this.tracker && this.sizes.unobserve(this.tracker), null === (WQ = this.hud) || void 0 === WQ || WQ.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = QQ, this.hud = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.closest(".Baf2QuestHud")) && void 0 !== XQ ? XQ : null, this.box = null, this.boxStale = !0, QQ && this.sizes.observe(QQ), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(QQ, WQ) {
        var XQ;
        const wQ = this.anchorOf(QQ);
        if (!wQ) return 0;
        const {
          y: qQ
        } = wQ, TQ = wQ.x + (null !== (XQ = this.labelOffsets.get(QQ)) && void 0 !== XQ ? XQ : 0), zQ = this.em, {
          halfWidth: sQ,
          labelled: FQ
        } = this.extentOf(QQ), PQ = qQ - zQ, gQ = TQ + sQ;
        return qQ + zQ * (FQ ? 6.2 : 3) < WQ.top || PQ > WQ.bottom || gQ < WQ.left - 6 || TQ - sQ > WQ.right ? 0 : Math.max(WQ.left - 6 - gQ, 6 - (TQ - sQ))
      }
      shiftOnScreen(QQ) {
        var WQ;
        const XQ = this.anchorOf(QQ);
        if (!XQ) return 0;
        const {
          halfWidth: wQ
        } = this.extentOf(QQ), qQ = XQ.x + (null !== (WQ = this.labelOffsets.get(QQ)) && void 0 !== WQ ? WQ : 0), TQ = qQ + wQ - (this.innerWidth - 6);
        return TQ > 0 ? -TQ : Math.max(0, 6 - (qQ - wQ))
      }
      runLabelAside(QQ, WQ) {
        var XQ;
        let wQ = null;
        for (let zQ = 0; zQ < QQ.children.length; zQ++) QQ.children[zQ].classList.contains("DirectionArrowLabel") && (wQ = QQ.children[zQ]);
        if (!wQ) return 0;
        const qQ = QQ.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(QQ) : null,
          TQ = (qQ && this.api ? this.side.sideOf(this.api, {
            x: qQ.x / this.innerWidth * 100,
            y: qQ.y / this.innerHeight * 100
          }, WQ, this.project) : 0) * this.halfWidthOf(wQ);
        return TQ !== (null !== (XQ = this.sideLabels.get(wQ)) && void 0 !== XQ ? XQ : 0) && (wQ.style.transform = 0 === TQ ? "" : `translateX(-50%) translateX(${TQ}px)`, 0 === TQ ? this.sideLabels.delete(wQ) : this.sideLabels.set(wQ, TQ)), TQ
      }
      extentOf(QQ) {
        let WQ = this.em,
          XQ = !1;
        for (let wQ = 0; wQ < QQ.children.length; wQ++) {
          const qQ = QQ.children[wQ],
            TQ = qQ.classList.contains("DirectionArrowLabel");
          XQ ||= TQ, (TQ || qQ.classList.contains("DirectionArrowDistance")) && (WQ = Math.max(WQ, this.halfWidthOf(qQ)))
        }
        return {
          halfWidth: WQ,
          labelled: XQ
        }
      }
      halfWidthOf(QQ) {
        let WQ = this.halfWidths.get(QQ);
        return void 0 === WQ && (WQ = QQ.offsetWidth / 2, this.halfWidths.set(QQ, WQ), this.sizes.observe(QQ), this.labels.add(QQ)), WQ
      }
      forgetGoneLabels() {
        for (const QQ of this.labels) QQ.isConnected || (this.sizes.unobserve(QQ), this.halfWidths.delete(QQ), this.labels.delete(QQ))
      }
      anchorOf(QQ) {
        const WQ = QQ.style.translate,
          XQ = this.anchors.get(QQ);
        if (XQ && XQ.translate === WQ && XQ.innerWidth === this.innerWidth && XQ.innerHeight === this.innerHeight) return XQ;
        const wQ = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(WQ);
        if (!wQ) return null;
        const qQ = {
          translate: WQ,
          x: parseFloat(wQ[1]) / 100 * this.innerWidth,
          y: parseFloat(wQ[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(QQ, qQ), qQ
      }
    }
    const KV = "Baf2ArrowText";

    function mV(QQ, WQ) {
      const XQ = QQ.rows.find((QQ => QQ.current));
      return RQ(QQ.tutorial) && null !== XQ && void 0 !== XQ && XQ.item && nq(XQ) && hQ(XQ.item).includes(WQ) ? XQ.item : null
    }
    const MV = new class {
      constructor(QQ) {
        this.select = QQ, this.picks = new Map
      }
      open(QQ, WQ, XQ) {
        const wQ = mV(WQ, QQ);
        null !== wQ && this.tr(QQ, wQ, XQ)
      }
      follow(QQ, WQ) {
        if (sQ())
          for (const [XQ, {
              item: wQ,
              had: qQ
            }] of this.picks) {
            const TQ = mV(QQ, XQ);
            TQ !== wQ && (null !== TQ && WQ(wQ) > qQ ? this.tr(XQ, TQ, WQ) : this.picks.delete(XQ))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      tr(QQ, WQ, XQ) {
        this.picks.set(QQ, {
          item: WQ,
          had: XQ(WQ)
        }), this.select(QQ, WQ)
      }
    }(Cq.o);

    function QD(QQ) {
      return WQ => {
        let XQ = 0;
        for (const wQ of QQ.getInventoryItems())(null === wQ || void 0 === wQ ? void 0 : wQ.name) === WQ && (XQ += null === wQ.amount ? 1 : Math.max(wQ.amount, 0));
        return XQ
      }
    }

    function WD(QQ, WQ, XQ, wQ) {
      QQ.getClientOption(WQ, "canCraft") && "inventory" !== Gq.b.get("openInGameMenuName") && (MV.open(XQ, wQ.get(), QD(QQ)), Eq.k.mB("toggleMenu", `inventory|${XQ}`))
    }
    let XD = null,
      wD = !1;

    function qD(QQ) {
      const WQ = dT();
      QQ === XD && WQ === wD || (XD = QQ, wD = WQ, (0, Cq.r)(function(QQ, WQ) {
        const XQ = new Map;
        for (let wQ = QQ + 1; wQ <= qQ.length; wQ++) {
          const qQ = xT(wQ, QQ, WQ);
          if (qQ)
            for (const WQ of VQ(wQ).unlocks) XQ.set(WQ, {
              ...qQ,
              stepsAway: wQ - QQ
            })
        }
        return XQ
      }(QQ, WQ)))
    }

    function TD() {
      return QQ = () => {
        null !== XD && qD(XD)
      }, (0, bT.i)(vT, QQ);
      var QQ
    }

    function zD() {
      return (0, Cq.w)(nT(Object.keys(lQ), fT)), () => {
        (0, Cq.w)([])
      }
    }

    function sD(QQ, WQ, XQ) {
      var wQ, qQ;
      const TQ = QQ.getTargetedBlock();
      if (!TQ || ! function(QQ, WQ, XQ) {
          if ("Chest" !== WQ) return !1;
          const wQ = QQ.split("|")[0];
          if (!PX(wQ) || 0 === EW[wQ].outputSlots.length) return !1;
          const qQ = vy(QQ);
          return XQ[0] === qQ[0] && XQ[1] === qQ[1] && XQ[2] === qQ[2]
        }(XQ, null === (wQ = QQ.wXQ(WQ)) || void 0 === wQ ? void 0 : wQ.name, TQ.normal)) return !1;
      const [zQ, sQ, FQ] = TQ.OB, PQ = QQ.getBlockId(zQ, sQ, FQ);
      return 0 === PQ || !0 === (null === (qQ = cQ.h[PQ]) || void 0 === qQ ? void 0 : qQ.canBePlacedOver)
    }
    var FD = XQ(37049);
    const PD = new Set(BX.e);
    class gD {
      constructor(QQ) {
        this.toasts = QQ, this.lastAt = -1 / 0
      }
      onAltAction(QQ, WQ, XQ) {
        const wQ = QQ.getTargetedBlock();
        if (!wQ || function(QQ) {
            const WQ = QQ.split("|")[0];
            return PX(WQ) || null !== vw(WQ) || HQ(WQ) || BX.e.includes(WQ)
          }(XQ) && !PD.has(XQ.split("|")[0])) return;
        const qQ = QQ.wXQ(WQ);
        if (!qQ || !PD.has(qQ.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const TQ = qQ.typeObj.id,
          [zQ, sQ, FQ] = wQ.OB,
          PQ = QQ.getBlockId(zQ, sQ, FQ),
          gQ = cQ.h[PQ];
        (0 === PQ || null !== gQ && void 0 !== gQ && gQ.XI || null !== gQ && void 0 !== gQ && gQ.canBePlacedOver) && QQ.isSolidToPlayerBlockId(TQ) && QQ.canModifyBlockAt(zQ, sQ, FQ) && QQ.vWQ(zQ, sQ, FQ, TQ) && !QQ.vWQ(zQ, sQ, FQ, TQ, WQ) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, EQ.Sd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, EQ.N.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class JD {
      constructor(QQ) {
        this.show = QQ, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(QQ, WQ, XQ) {
        var wQ;
        if (!WQ) return this.started = null, void this.gatedThisHold.clear();
        if (!QQ) return void(this.started = null);
        const qQ = `${QQ.x},${QQ.y},${QQ.z},${QQ.Ds}`;
        if (qQ === this.started) return;
        this.started = qQ;
        const TQ = kw(QQ.y) ? TV(QQ.block, QQ.Ds, QQ.level) : null;
        if (null === TQ || this.gatedThisHold.has(qQ)) return;
        this.gatedThisHold.add(qQ);
        const zQ = QQ.block.split("|")[0];
        XQ - (null !== (wQ = this.hintedAt.get(zQ)) && void 0 !== wQ ? wQ : -1 / 0) < 5e3 || (this.hintedAt.set(zQ, XQ), this.show({
          baf2ToastText: zV(TQ, QQ.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var rD = XQ(43);

    function ID(QQ, WQ) {
      const XQ = [...QQ.baf2CoreBankPaused];
      for (const [qQ] of QQ.baf2CoreBanked) XQ.push(qQ);
      for (const zQ of qQ) {
        for (const {
            item: QQ
          }
          of zQ.cost) XQ.push(QQ);
        for (const QQ of zQ.newDeposits) XQ.push(QQ.block);
        for (const QQ of zQ.unlocks) XQ.push(QQ, iQ(QQ));
        zQ.reward && XQ.push(zQ.reward);
        for (const {
            item: QQ
          }
          of null !== (wQ = null === (TQ = zQ.charge) || void 0 === TQ ? void 0 : TQ.items) && void 0 !== wQ ? wQ : []) {
          var wQ, TQ;
          XQ.push(QQ)
        }
      }
      return {
        message: QQ,
        itemNames: WQ([...new Set(XQ)])
      }
    }
    const jD = "baf2MultiblockGuide";
    const BD = new Map;
    const yD = function(QQ, WQ, XQ, qQ) {
      let {
        localPlayerId: TQ
      } = qQ;
      const zQ = new Ds,
        sQ = new zI,
        PQ = new II,
        gQ = new JI(PQ),
        JQ = (QQ, WQ) => {
          WQ ? gQ.observe(QQ) : gQ.unobserve(QQ)
        },
        rQ = new gI,
        IQ = new BI(JQ),
        jQ = QQ => IQ.covers(QQ),
        BQ = new CI;
      let yQ;
      const VQ = new fz((QQ => {
          yQ.sendCommand(QQ)
        })),
        DQ = () => {
          VQ.send("baf2questbook")
        },
        pQ = QQ => function(QQ, WQ, XQ) {
          const wQ = {};
          for (const qQ of XQ) {
            let XQ = BD.get(qQ);
            void 0 === XQ && (XQ = QQ.getItemStat(WQ, qQ, "displayName"), BD.set(qQ, XQ)), wQ[qQ] = XQ
          }
          return wQ
        }(yQ, TQ, QQ),
        GQ = new fq(DQ),
        UQ = new YI((() => Gq.b.get("loadingOverlayVisible"))),
        bQ = new lg(VQ, GQ, UQ),
        vQ = new mI,
        dQ = new gD(UQ),
        aQ = new JD((QQ => {
          UQ.show(QQ, QQ.baf2ToastMs)
        })),
        lQ = new sj(JQ),
        hQ = new Ry(lQ),
        iQ = new dz,
        AQ = new XV,
        RQ = new Xs,
        uQ = new jj({
          read: () => !1 !== rD.i.getItem(jD),
          write: QQ => {
            rD.i.setItem(jD, QQ)
          }
        }),
        LQ = new tj(uQ),
        kQ = new nj(uQ),
        fQ = new rB(uQ, (QQ => function(QQ, WQ) {
          const XQ = WF(WQ.w, WQ.h, WQ.d),
            wQ = new Uint8Array(XQ);
          for (let qQ = 0; qQ < XQ; qQ++) {
            const XQ = uj(QQ, mX(WQ, Xw(WQ, qQ)));
            wQ[qQ] = null === XQ ? 0 : Ks(XQ)
          }
          return wQ
        }(yQ, QQ)), wB(VQ)),
        SQ = new IB(uQ, wB(VQ)),
        tQ = new gB,
        nQ = (QQ, WQ) => {
          let [XQ, wQ, qQ] = QQ;
          tQ.answered(WQ) || UQ.show({
            baf2ToastText: [(0, EQ.Sd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: XQ,
                h: wQ,
                d: qQ
              }
            }, EQ.N.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      fQ.onSizeNotTaken(nQ), SQ.onSizeNotTaken(nQ);
      const xQ = new VB,
        YQ = new KB(uQ),
        ZQ = new MB,
        OQ = new gy(ZQ),
        KQ = new Uy,
        MQ = new Ey,
        QW = new ny(MQ),
        WW = new WV(MQ),
        XW = MQ.lookSource(),
        wW = new yV({
          handles: QQ => XW.handles(QQ) || QQ === CQ,
          line: (QQ, WQ) => QQ === CQ ? function(QQ, WQ, XQ) {
            var wQ;
            const qQ = eQ(null === (wQ = WQ.at(XQ)) || void 0 === wQ ? void 0 : wQ.item);
            return null === qQ ? {
              key: `${IV}lookFarmEmpty`
            } : {
              key: QQ.blockIdToBlockName(QQ.getBlockId(XQ[0], XQ[1], XQ[2])).endsWith("|Running") ? `${IV}lookFarmRunning` : `${IV}lookFarmWaiting`,
              keys: {
                mob: oQ(qQ)
              }
            }
          }(yQ, lQ, WQ) : XW.line(QQ, WQ),
          version: () => XW.version() + lQ.version()
        }, (QQ => Yj(uQ.all(), QQ, (QQ => uj(yQ, QQ)))), (() => GQ.get().tier)),
        qW = new CB,
        TW = new iV,
        zW = new uV,
        sW = uV.blade(),
        FW = new nV,
        PW = new Wj,
        gW = new OV,
        rW = new SV,
        IW = new fV;
      let jW = -1 / 0,
        BW = 0,
        yW = -1 / 0,
        VW = -1 / 0;
      const DW = () => {
          VQ.send("baf2islandsclose"), VW = Date.now()
        },
        pW = [];

      function GW(QQ) {
        var WQ, XQ, wQ, qQ, TQ, zQ, FQ;
        "core" === (null === (WQ = sQ.get()) || void 0 === WQ ? void 0 : WQ.kind) && "core" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && VQ.send("baf2coreclose"), "power" === (null === (XQ = sQ.get()) || void 0 === XQ ? void 0 : XQ.kind) && "power" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && VQ.send("baf2powerclose"), "water" === (null === (wQ = sQ.get()) || void 0 === wQ ? void 0 : wQ.kind) && "water" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && VQ.send(mQ.r), "terminal" === (null === (qQ = sQ.get()) || void 0 === qQ ? void 0 : qQ.kind) && "terminal" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && VQ.send("baf2terminalclose"), "islands" === (null === (TQ = sQ.get()) || void 0 === TQ ? void 0 : TQ.kind) && "islands" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && DW();
        const PQ = MQ.getStatus();
        "collider" === (null === (zQ = sQ.get()) || void 0 === zQ ? void 0 : zQ.kind) && "collider" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && PQ && VQ.send(kF(PQ, "close"));
        const gQ = QQ => "reactor" === QQ || "battery" === QQ;
        if (gQ(null === (FQ = sQ.get()) || void 0 === FQ ? void 0 : FQ.kind) && !gQ(null === QQ || void 0 === QQ ? void 0 : QQ.kind)) {
          var JQ, rQ, IQ;
          const QQ = "reactor" === (null === (JQ = sQ.get()) || void 0 === JQ ? void 0 : JQ.kind) ? null === (rQ = fQ.get()) || void 0 === rQ ? void 0 : rQ.status.baf2RxAt : null === (IQ = SQ.get()) || void 0 === IQ ? void 0 : IQ.status.baf2BatAt;
          QQ && VQ.send(JW(QQ, "close"))
        }
        "quests" === (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && DQ(), sQ.set(QQ), null === QQ && vQ.release()
      }

      function UW() {
        (0, pq.j)(), GW(null)
      }
      let bW = new Set,
        vW = !1;
      const dW = {
        onCreate: QQ => {
          yQ = QQ, yQ.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const WQ of lW) {
            const QQ = EW[WQ].inputSlots ? Es(zQ) : cs(WQ, zQ, iQ, VQ);
            pW.push((0, Vq.g)(WQ, QQ))
          }
          pW.push((0, pq.A)((0, wQ.createElement)(wQ.Fragment, null, (0, wQ.createElement)(DI, {
            controller: IQ
          }), (0, wQ.createElement)(gj, {
            store: lQ
          }), (0, wQ.createElement)(DV, {
            store: wW
          }), (0, wQ.createElement)(nI, {
            store: GQ
          }), (0, wQ.createElement)(OI, {
            store: UQ
          }), (0, wQ.createElement)(MI, {
            store: vQ
          }), (0, wQ.createElement)(wj, {
            store: PW
          }), (0, wQ.createElement)(yB, {
            store: xQ
          }), (0, wQ.createElement)(Qy, {
            store: ZQ
          })), {
            content: (0, wQ.createElement)(sI, {
              commands: VQ,
              store: sQ,
              power: iQ,
              water: RQ,
              reactor: fQ,
              battery: SQ,
              collider: MQ,
              terminal: AQ,
              quests: GQ,
              tutorial: bQ,
              close: pq.n,
              leave: () => {
                vQ.dropHeld(), (0, pq.j)()
              },
              askIslands: () => {
                VW = -1 / 0, jW = Date.now(), BW = VQ.send(NQ)
              },
              openSocial: () => {
                (0, pq.j)(), Gq.b.set({
                  openEverythingMenuName: JX.r.SOCIAL
                })
              },
              showCore: QQ => {
                GW({
                  kind: "core",
                  core: QQ
                }), VQ.send("baf2corereopen")
              }
            }),
            onClose: () => {
              GW(null)
            }
          })), pW.push((0, Dq.u)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              GW({
                kind: "quests"
              }), (0, pq.u)()
            }
          })), pW.push(function(QQ, WQ) {
            let XQ = null,
              wQ = () => {};
            const qQ = WQ => {
              var qQ;
              let {
                tutorial: TQ,
                tutorialKnown: zQ
              } = WQ;
              (null === (qQ = XQ) || void 0 === qQ ? void 0 : qQ.tutorial) === TQ && XQ.tutorialKnown === zQ || (XQ = {
                tutorial: TQ,
                tutorialKnown: zQ
              }, wQ = (0, Dq.u)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: Hg[TQ],
                icon: {
                  kind: "icon",
                  name: dg[TQ]
                },
                iconOnly: !0,
                disabled: !zQ,
                className: "Baf2TutorialButton",
                onClick: () => {
                  QQ.next()
                }
              }))
            };
            qQ(WQ.get());
            const TQ = Eq.k.subscribe(uq, qQ);
            return () => {
              Eq.k.unsubscribe(TQ), wQ()
            }
          }(bQ, GQ)), vW = !1, pW.push(TD()), pW.push(zD()), pW.push(function() {
            const QQ = Eq.k.subscribe(uq, Mq),
              WQ = () => {
                if (mq) {
                  const QQ = mq;
                  mq = null, (0, Cq.s)(QQ)
                }
              },
              XQ = Eq.k.subscribe("toggleMenu", (QQ => {
                "inventory" === (null === QQ || void 0 === QQ ? void 0 : QQ.split("|")[0]) && WQ()
              })),
              wQ = Eq.k.subscribe("appManagerUpdated|openInGameMenuName", (QQ => {
                "inventory" === QQ && WQ()
              }));
            return () => {
              Eq.k.unsubscribe(QQ), Eq.k.unsubscribe(XQ), Eq.k.unsubscribe(wQ)
            }
          }()), pW.push(function(QQ) {
            const WQ = QD(QQ),
              XQ = Eq.k.subscribe(uq, (QQ => {
                MV.follow(QQ, WQ)
              }));
            return () => {
              Eq.k.unsubscribe(XQ), MV.clear()
            }
          }(yQ)), pW.push(function() {
            const QQ = document.documentElement,
              WQ = (0, LI.c)(".InvenBodyRight", [], (() => {
                const WQ = document.querySelector(".InvenBodyRight");
                WQ && QQ.style.setProperty("--baf2-backpack-width", `${WQ.offsetWidth}px`)
              }));
            return () => {
              WQ(), QQ.style.removeProperty("--baf2-backpack-width")
            }
          }()), pW.push(function() {
            const QQ = document.documentElement;
            return QQ.classList.add(KV), () => {
              QQ.classList.remove(KV)
            }
          }()), pW.push((() => {
            gQ.dispose(), PQ.dispose()
          })), BQ.start(yQ), pW.push((() => {
            BQ.dispose(), FW.dispose(), hQ.dispose()
          }))
        },
        onClose: () => {
          (0, Cq.s)([]), mq = null, Kq = new Set, XD = null, (0, Cq.r)(new Map), BD.clear();
          for (const QQ of pW) QQ();
          GQ.dispose(), wW.dispose(), UQ.dispose(), vQ.dispose(), qW.dispose(), TW.dispose(yQ), LQ.dispose(yQ), kQ.dispose(yQ), YQ.dispose(yQ), OQ.dispose(yQ), ZQ.dispose(), KQ.dispose(), uQ.dispose(), fQ.dispose(), SQ.dispose(), xQ.dispose(), zW.dispose(), sW.dispose(), PW.dispose(), QW.dispose(yQ), WW.dispose(yQ), MQ.dispose(), gW.dispose(), VQ.clear()
        },
        onAfterRender: (QQ, WQ) => {
          var XQ, wQ, qQ;
          try {
            BQ.onAfterRender(WQ)
          } catch (PQ) {
            console.error("Error drawing BAF2 belt items", PQ)
          }
          try {
            FW.onAfterRender(yQ, TQ)
          } catch (PQ) {
            console.error("Error drawing BAF2 jet flames", PQ)
          }
          vW || (vW = !0, VQ.send("baf2clientready"));
          const zQ = yQ.getPositionView(TQ);
          IQ.onAfterRender(WQ, zQ, rQ), lQ.onAfterRender(WQ, zQ, rQ, jQ), gQ.run(rQ), qW.onAfterRender(yQ, zQ), TW.onAfterRender(yQ, zQ), hQ.onAfterRender(yQ, zQ), LQ.onAfterRender(yQ, zQ), kQ.onAfterRender(yQ, TQ, zQ), YQ.onAfterRender(yQ, TQ, zQ), OQ.onAfterRender(yQ, TQ), KQ.onAfterRender(yQ, zQ), GQ.onPlayerY(zQ[1]), QW.onAfterRender(yQ), WW.onAfterRender(yQ, TQ, zQ);
          const FQ = yQ.getTargetedBlock();
          wW.onAfterRender(yQ, TQ, null !== (XQ = null === FQ || void 0 === FQ ? void 0 : FQ.w6) && void 0 !== XQ ? XQ : 0, null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.position) && void 0 !== wQ ? wQ : null), gW.onAfterRender(yQ, WQ), aQ.onMining(function(QQ, WQ) {
            var XQ, wQ;
            const qQ = QQ.getMiningBlock();
            if (!qQ) return null;
            const TQ = (0, cQ.f)(QQ.getBlockId(qQ[0], qQ[1], qQ[2])),
              zQ = null !== (XQ = null === (wQ = QQ.wXQ(WQ)) || void 0 === wQ ? void 0 : wQ.name) && void 0 !== XQ ? XQ : null,
              sQ = QQ.getItemStat(WQ, TQ.split("|")[0], "harvestLevel");
            return {
              block: TQ,
              x: qQ[0],
              y: qQ[1],
              z: qQ[2],
              Ds: zQ,
              level: sQ
            }
          }(yQ, TQ), yQ.isMining(), performance.now()), "dropMap" === (null === (qQ = sQ.get()) || void 0 === qQ ? void 0 : qQ.kind) && kw(zQ[1]) && UW()
        },
        onPlayerChangeBlock: (QQ, WQ, XQ, wQ, qQ, zQ) => {
          QQ === TQ && function(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
            const sQ = kV(TQ, zQ, QQ.isPlayerCrouching(WQ));
            if (null === sQ) return;
            if (QQ.hA(XQ, wQ, qQ, sQ), !QQ.getClientOption(WQ, "canPickUpItems")) return;
            const FQ = zX[sQ.split("|")[0]];
            var PQ, gQ, JQ;
            void 0 !== FQ && (PQ = QQ.getInventoryItems(), gQ = FQ, JQ = Bj.h.maxItemStackSize, QQ.getInventoryFreeSlotCount(WQ) > 0 || PQ.some((QQ => null !== QQ && QQ.name === gQ && null !== QQ.amount && QQ.amount < JQ))) && QQ.playSound(WQ, (0, FD.d)("pickUp"), .5, 1)
          }(yQ, QQ, WQ, XQ, wQ, qQ, zQ)
        },
        onPlayerAltAction: (QQ, WQ, XQ, wQ, qQ) => {
          var zQ, sQ;
          if (!yQ.getClientOption(TQ, "canPickUpItems")) return;
          const FQ = null !== (zQ = null === (sQ = yQ.wXQ(TQ)) || void 0 === sQ ? void 0 : sQ.name) && void 0 !== zQ ? zQ : null,
            PQ = function(QQ, WQ) {
              const XQ = QQ.split("|")[0];
              return HQ(XQ) && WQ !== Fq && "Sky Pack" !== WQ ? XQ : null
            }(qQ, FQ);
          if (null !== PQ) return void(rW.tap(PQ, performance.now()) && WD(yQ, TQ, PQ, GQ));
          if (!ow(FQ)) return;
          const gQ = IW.isNewPress(performance.now()),
            JQ = function(QQ, WQ, XQ) {
              return !ow(WQ) || XQ ? null : mw(QQ)
            }(qQ, FQ, yQ.isPlayerCrouching(TQ));
          null !== JQ && gQ && yQ.hA(WQ, XQ, wQ, JQ)
        },
        onPlayerAttemptAltAction: (QQ, WQ, XQ, wQ, qQ) => {
          if (function(QQ, WQ, XQ, wQ, qQ) {
              "Workbench" === wQ.split("|")[0] && QQ.getClientOption(XQ, "canCraft") && (MV.open("Workbench", qQ.get(), QD(QQ)), WQ.send("baf2station Workbench"))
            }(yQ, VQ, TQ, qQ, GQ), sD(yQ, TQ, qQ)) return "preventAction";
          dQ.onAltAction(yQ, TQ, qQ)
        },
        onReceivedMessageFromServer: (QQ, WQ) => {
          if ("baf2MachineStatus" === QQ) {
            var XQ, wQ, qQ, PQ, gQ, JQ, rQ, jQ, DQ, bQ, dQ, HQ, aQ, hQ, cQ, EQ;
            const QQ = WQ,
              TQ = QQ.baf2MachineTaught;
            zQ.set(QQ.baf2MachinePos, {
              status: QQ.baf2MachineStatus,
              power: null !== (XQ = QQ.baf2MachinePower) && void 0 !== XQ ? XQ : null,
              opLeftMs: null !== (wQ = QQ.baf2MachineOpLeftMs) && void 0 !== wQ ? wQ : null,
              dug: QQ.baf2MachineYield ? {
                item: QQ.baf2MachineYield,
                name: pQ([QQ.baf2MachineYield])[QQ.baf2MachineYield]
              } : null,
              powerCap: null !== (qQ = QQ.baf2MachinePowerCap) && void 0 !== qQ ? qQ : null,
              powerRates: null !== (PQ = QQ.baf2MachinePowerRates) && void 0 !== PQ ? PQ : null,
              coupled: !0 === QQ.baf2MachineCoupled,
              couplerLevel: null !== (gQ = QQ.baf2MachineCoupler) && void 0 !== gQ ? gQ : 1,
              taught: TQ,
              taughtName: TQ ? pQ([TQ])[TQ] : null,
              tier: null !== (JQ = QQ.baf2MachineTier) && void 0 !== JQ ? JQ : null,
              input: null !== (rQ = QQ.baf2MachineInput) && void 0 !== rQ ? rQ : null,
              inertCoupler: null !== (jQ = QQ.baf2MachineInertCoupler) && void 0 !== jQ ? jQ : null,
              inputShort: null !== (DQ = QQ.baf2MachineInputShort) && void 0 !== DQ ? DQ : null,
              field: null !== (bQ = QQ.baf2MachineField) && void 0 !== bQ ? bQ : null,
              noSeeds: !0 === QQ.baf2MachineNoSeeds,
              fuelFed: !0 === QQ.baf2MachineFuelFed,
              fuelFeeds: !0 === QQ.baf2MachineFuelFeeds,
              coreFull: !0 === QQ.baf2MachineCoreFull,
              waterUnpowered: !0 === QQ.baf2MachineWaterUnpowered,
              powerShort: !0 === QQ.baf2MachinePowerShort,
              powerWait: !0 === QQ.baf2MachinePowerWait,
              reactorPowered: !0 === QQ.baf2MachineReactorPowered,
              fuelLeftMs: null !== (dQ = QQ.baf2MachineFuelLeftMs) && void 0 !== dQ ? dQ : null,
              burning: null !== (HQ = QQ.baf2MachineBurning) && void 0 !== HQ ? HQ : null,
              fuelKeep: null !== (aQ = QQ.baf2MachineFuelKeep) && void 0 !== aQ ? aQ : null,
              water: null !== (hQ = QQ.baf2MachineWater) && void 0 !== hQ ? hQ : null,
              farm: null !== (cQ = QQ.baf2MachineFarm) && void 0 !== cQ ? cQ : null,
              cryo: null !== (EQ = QQ.baf2MachineCryo) && void 0 !== EQ ? EQ : null
            })
          } else if ("baf2StationOpen" === QQ) {
            const QQ = WQ.baf2Station;
            rW.consumeServerOpen(QQ, performance.now()) || WD(yQ, TQ, QQ, GQ)
          } else if ("baf2Power" === QQ) {
            const QQ = WQ;
            iQ.set(QQ), QQ.baf2PowerOpen && (GW({
              kind: "power"
            }), (0, pq.u)())
          } else if (QQ === mQ.w) {
            const QQ = WQ;
            RQ.set(QQ), QQ.baf2WaterOpen && (GW({
              kind: "water"
            }), (0, pq.u)())
          } else if ("baf2RxPlans" === QQ) {
            var CQ, LQ, kQ;
            const QQ = WQ;
            uQ.KV(QQ);
            const XQ = new Set(QQ.baf2RxPlanList.map((QQ => {
              let [WQ, XQ, wQ] = QQ;
              return `${WQ},${XQ},${wQ}`
            })));
            xQ.retain(XQ);
            const wQ = null === (CQ = sQ.get()) || void 0 === CQ ? void 0 : CQ.kind,
              qQ = "reactor" === wQ ? null === (LQ = fQ.get()) || void 0 === LQ ? void 0 : LQ.status.baf2RxAt : "battery" === wQ ? null === (kQ = SQ.get()) || void 0 === kQ ? void 0 : kQ.status.baf2BatAt : void 0;
            qQ && bW.has(qQ.join(",")) && !XQ.has(qQ.join(",")) && UW(), bW = XQ
          } else if ("baf2RxStatus" === QQ) {
            const QQ = WQ;
            fQ.set(QQ), QQ.baf2RxOpen && (GW({
              kind: "reactor"
            }), (0, pq.u)())
          } else if ("baf2BatStatus" === QQ) {
            const QQ = WQ;
            SQ.set(QQ), QQ.baf2BatOpen && (GW({
              kind: "battery"
            }), (0, pq.u)())
          } else if ("baf2RxAlarm" === QQ) xQ.KV(WQ);
          else if ("baf2Bomb" === QQ) ZQ.KV(WQ, yQ.getPositionView(TQ));
          else if ("baf2Fallout" === QQ) KQ.KV(WQ);
          else if ("baf2ColBeams" === QQ) MQ.onBeams(WQ);
          else if ("baf2ColStatus" === QQ) {
            const QQ = WQ;
            var oQ, eQ;
            if (MQ.onStatus(QQ), QQ.baf2ColOpen) MQ.onOpen(null !== (oQ = null === (eQ = yQ.wXQ(TQ)) || void 0 === eQ ? void 0 : eQ.name) && void 0 !== oQ ? oQ : null), GW({
              kind: "collider"
            }), (0, pq.u)()
          } else if ("baf2Terminal" === QQ) {
            const QQ = WQ;
            var nQ;
            if (AQ.apply(QQ)) QQ.baf2TermReset && (GW({
              kind: "terminal"
            }), (0, pq.u)());
            else "terminal" === (null === (nQ = sQ.get()) || void 0 === nQ ? void 0 : nQ.kind) && (sQ.set(null), (0, pq.j)())
          } else if ("baf2Core" === QQ) {
            var YQ;
            const QQ = WQ;
            if (FQ(!0 === QQ.baf2CoreNuclear), function(QQ, WQ) {
                return "core" === (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && WQ.baf2CoreTier > QQ.core.message.baf2CoreTier
              }(sQ.get(), QQ)) return void(0, pq.j)();
            if (QQ.baf2CoreRefresh && "core" !== (null === (YQ = sQ.get()) || void 0 === YQ ? void 0 : YQ.kind)) return;
            GW({
              kind: "core",
              core: ID(QQ, pQ)
            }), QQ.baf2CoreRefresh || (0, pq.u)()
          } else if ("baf2WrenchUndo" === QQ) {
            const {
              baf2WrenchPos: QQ,
              baf2WrenchBlock: XQ
            } = WQ;
            yQ.hA(QQ[0], QQ[1], QQ[2], XQ)
          } else if ("baf2Toast" === QQ) {
            const QQ = WQ;
            tQ.heard(performance.now(), QQ.baf2ToastMs), UQ.show(QQ)
          } else if ("baf2Area" === QQ) vQ.arrive(WQ, null !== sQ.get());
          else if ("baf2Quest" === QQ) {
            const QQ = WQ;
            FQ(!0 === QQ.baf2QuestNuclear), GQ.set(QQ, function(QQ, WQ) {
              var XQ, wQ, qQ, TQ, zQ;
              const sQ = [];
              for (const [, , gQ, , , , , , JQ, rQ] of QQ.baf2QuestSteps) null !== gQ && sQ.push(gQ), sQ.push(...null !== JQ && void 0 !== JQ ? JQ : [], ...null !== rQ && void 0 !== rQ ? rQ : []);
              QQ.baf2QuestReward && sQ.push(QQ.baf2QuestReward);
              const FQ = null === (XQ = QQ.baf2QuestSide) || void 0 === XQ ? void 0 : XQ[2][2];
              FQ && sQ.push(FQ), sQ.push(...null !== (wQ = null === (qQ = QQ.baf2QuestSide) || void 0 === qQ ? void 0 : qQ[2][8]) && void 0 !== wQ ? wQ : [], ...null !== (TQ = null === (zQ = QQ.baf2QuestSide) || void 0 === zQ ? void 0 : zQ[2][9]) && void 0 !== TQ ? TQ : []);
              for (const [gQ] of null !== (PQ = QQ.baf2QuestAlso) && void 0 !== PQ ? PQ : []) {
                var PQ;
                sQ.push(gQ)
              }
              return WQ(sQ)
            }(QQ, pQ)), qD(QQ.baf2QuestTier)
          } else if ("baf2Route" === QQ) ! function(QQ, WQ) {
            let {
              baf2RouteCells: XQ,
              baf2RouteInto: wQ
            } = WQ;
            0 !== XQ.length && wQ ? QQ.setRouteChevrons({
              cells: XQ.map(((QQ, WQ) => {
                const [qQ, , TQ] = function(QQ, WQ, XQ) {
                  const wQ = XQ + 1 < QQ.length ? QQ[XQ + 1] : WQ;
                  return [wQ[0] - QQ[XQ][0], 0, wQ[2] - QQ[XQ][2]]
                }(XQ, wQ, WQ);
                return {
                  pos: QQ,
                  way: [qQ, TQ]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : QQ.setRouteChevrons(null)
          }(yQ, WQ);
          else if ("baf2QuestBook" === QQ) GQ.setBook(WQ);
          else if ("baf2Stalls" === QQ) IQ.set(WQ.baf2StallCells);
          else if (QQ === BX.l) BQ.onMoves(WQ);
          else if (QQ === BX.j) BQ.onLines(WQ);
          else if ("baf2Labels" === QQ) lQ.KV(WQ);
          else if ("baf2DropMap" === QQ) GW({
            kind: "dropMap",
            dropMap: WQ
          }), (0, pq.u)();
          else if ("baf2Islands" === QQ) {
            var OQ, QW;
            const QQ = WQ;
            if (VQ.syncIslandEdits(QQ.baf2IslandsAnswered), !QQ.baf2IslandsOpen && "islands" !== (null === (OQ = sQ.get()) || void 0 === OQ ? void 0 : OQ.kind)) return;
            if (QQ.baf2IslandsOpen) {
              var WW, XW;
              const WQ = Gq.b.get("openEverythingMenuName"),
                XQ = VQ.sent() >= BW,
                wQ = "other" !== (IW = {
                  askedAtMs: jW,
                  askSent: XQ,
                  reaskedAtMs: yW,
                  nowMs: Date.now(),
                  panel: null !== (WW = null === (XW = sQ.get()) || void 0 === XW ? void 0 : XW.kind) && void 0 !== WW ? WW : null,
                  inGameMenu: Gq.b.get("openInGameMenuName"),
                  everythingMenu: null === WQ ? null : WQ === JX.r.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== QQ.baf2IslandsFocusInvite
                }).everythingMenu && (!!IW.focusInvite || "islands" === IW.panel && "clientGame" === IW.inGameMenu || !(IW.nowMs - IW.reaskedAtMs < EP) && (IW.askSent && IW.nowMs - IW.askedAtMs < EP ? "core" === IW.panel && "clientGame" === IW.inGameMenu && null === IW.everythingMenu : "shop" === IW.everythingMenu || null === IW.inGameMenu));
              if (XQ && (jW = -1 / 0), yW = -1 / 0, !wQ) return void DW()
            }
            const XQ = (qW = QQ.baf2IslandsOpen, TW = "islands" === (null === (QW = sQ.get()) || void 0 === QW ? void 0 : QW.kind), gW = VW, JW = Date.now(), qW && !TW && JW - gW < EP);
            GW({
              kind: "islands",
              islands: QQ,
              arrivedAtMs: Date.now(),
              backToCore: CP(sQ.get())
            }), XQ && (VW = -1 / 0, yW = Date.now(), VQ.send(NQ)), QQ.baf2IslandsOpen && ("clientGame" !== Gq.b.get("openInGameMenuName") && (0, Uq.e)(), (0, pq.u)())
          } else if ("baf2CoopTransfer" === QQ) {
            var wW;
            const QQ = WQ;
            QQ.baf2TransferOn ? (GW({
              kind: "transfer",
              transfer: QQ,
              arrivedAtMs: Date.now()
            }), (0, pq.u)()) : "transfer" === (null === (wW = sQ.get()) || void 0 === wW ? void 0 : wW.kind) && (0, pq.j)()
          } else "baf2IslandLeft" === QQ ? (vQ.dropHeld(), null !== sQ.get() && UW(), "inventory" === Gq.b.get("openInGameMenuName") && (0, Uq.e)()) : "baf2Arc" === QQ ? zW.KV(yQ, WQ) : "baf2Blade" === QQ ? sW.onBlade(yQ, WQ) : "baf2JetFlame" === QQ ? FW.KV(yQ, WQ) : "baf2GearPower" === QQ && PW.KV(WQ);
          var qW, TW, gW, JW, IW
        }
      };
      return dW
    }
  },
  38797: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ) {
      const wQ = new Set,
        qQ = new ResizeObserver(XQ),
        TQ = () => {
          const WQ = new Set(document.querySelectorAll(QQ));
          let TQ = !1;
          for (const QQ of wQ) WQ.has(QQ) || (qQ.unobserve(QQ), wQ.delete(QQ), TQ = !0);
          for (const QQ of WQ) wQ.has(QQ) || (qQ.observe(QQ), zQ.observe(QQ, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), wQ.add(QQ));
          TQ && XQ()
        },
        zQ = new MutationObserver((WQ => {
          WQ.some((QQ => "attributes" === QQ.type)) && XQ(), WQ.some((WQ => function(QQ, WQ, XQ) {
            if ("childList" !== QQ.type) return !1;
            for (const wQ of QQ.addedNodes)
              if (wQ instanceof Element && (wQ.matches(WQ) || wQ.querySelector(WQ))) return !0;
            for (const wQ of QQ.removedNodes)
              if (wQ instanceof Element)
                for (const QQ of XQ)
                  if (wQ.contains(QQ)) return !0;
            return !1
          }(WQ, QQ, wQ))) && TQ()
        }));
      zQ.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const sQ of WQ) qQ.observe(sQ);
      return window.addEventListener("resize", XQ), TQ(), XQ(), () => {
        qQ.disconnect(), zQ.disconnect(), window.removeEventListener("resize", XQ)
      }
    }
    XQ.d(WQ, {
      c: () => wQ
    })
  },
  38782: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ
    });
    var wQ = XQ(38777);
    const qQ = 5,
      TQ = [0, 0, 0],
      zQ = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function sQ(QQ, WQ, XQ, sQ, FQ, PQ) {
      let [gQ, JQ, rQ] = sQ;
      const IQ = (gQ + .5 - XQ[0]) ** 2 + (JQ - XQ[1]) ** 2 + (rQ + .5 - XQ[2]) ** 2;
      let jQ = null;
      IQ <= PQ ** 2 && (TQ[0] = gQ + .5, TQ[1] = JQ + FQ, TQ[2] = rQ + .5, jQ = WQ.projectWorldPosToViewport(TQ));
      const BQ = null !== jQ && jQ.x > -qQ && jQ.x < 100 + qQ && jQ.y > -qQ && jQ.y < 100 + qQ;
      return (0, wQ.h)(QQ, !BQ), BQ ? (zQ.x = jQ.x, zQ.y = jQ.y, zQ.distSq = IQ, zQ) : null
    }
  },
  38777: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      h: () => TQ
    });
    const wQ = new WeakMap;

    function qQ(QQ) {
      let WQ = wQ.get(QQ);
      return WQ || (WQ = {
        hidden: QQ.hidden,
        x: NaN,
        y: NaN
      }, wQ.set(QQ, WQ)), WQ
    }

    function TQ(QQ, WQ) {
      const XQ = qQ(QQ);
      XQ.hidden !== WQ && (XQ.hidden = WQ, QQ.hidden = WQ)
    }

    function zQ(QQ, WQ, XQ) {
      const wQ = qQ(QQ);
      wQ.x === WQ && wQ.y === XQ || (wQ.x = WQ, wQ.y = XQ, QQ.style.translate = `${WQ}vw ${XQ}vh`)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);