export const id = 225;
export const ids = [225];
export const modules = {
  36698: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      d: () => ZT,
      h: () => cT,
      j: () => nT,
      l: () => LT,
      n: () => vT,
      p: () => lT,
      r: () => qT,
      s: () => BT,
      v: () => fT
    });
    var WT = mT(25),
      zT = mT(31);
    const MT = "clientGameInventoryButtonsChanged",
      gT = new Map;

    function nT() {
      return [...gT.values()].sort(((TT, UT) => {
        var mT, WT;
        return (null !== (mT = TT.order) && void 0 !== mT ? mT : 0) - (null !== (WT = UT.order) && void 0 !== WT ? WT : 0)
      }))
    }
    let HT = null;

    function kT(TT) {
      HT = TT
    }
    let jT = !1;

    function lT(TT) {
      jT = !0;
      try {
        TT.onClick()
      } finally {
        jT = !1
      }
      TT.panel && "clientGame" === WT.b.get("openInGameMenuName") && kT(TT.id)
    }

    function LT() {
      return jT
    }

    function pT() {
      return nT().filter((TT => TT.panel && !TT.disabled))
    }

    function BT(TT) {
      const UT = pT(),
        mT = UT.findIndex((TT => TT.id === HT));
      return !(mT < 0 || UT.length < 2) && (lT(UT[(mT + TT + UT.length) % UT.length]), !0)
    }

    function ZT() {
      return null !== HT && pT().length > 1
    }

    function cT() {
      kT(null)
    }

    function vT() {
      "inventory" !== WT.b.get("openInGameMenuName") && kT(null)
    }

    function fT() {
      const TT = HT;
      return kT(null), TT
    }

    function qT(TT) {
      return gT.set(TT.id, TT), zT.j.EZ(MT, nT(), !0), () => {
        gT.get(TT.id) === TT && (gT.delete(TT.id), zT.j.EZ(MT, nT()))
      }
    }
  },
  36693: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      d: () => cT,
      f: () => vT,
      i: () => LT,
      j: () => kT,
      l: () => ZT,
      n: () => pT,
      q: () => jT
    });
    var WT = mT(25),
      zT = mT(31),
      MT = mT(1388),
      gT = mT(36698);
    const nT = "clientGameUiChanged";
    let HT = null;

    function kT() {
      return HT
    }

    function jT(TT, UT) {
      const mT = {
        content: TT,
        menu: UT
      };
      return HT = mT, zT.j.EZ(nT, HT, !0), () => {
        HT === mT && (HT = null, BT = !1, cT(), zT.j.EZ(nT, null))
      }
    }
    let lT = null;

    function LT() {
      return lT
    }

    function pT(TT) {
      return lT = TT, () => {
        lT === TT && (lT = null)
      }
    }
    let BT = !1;

    function ZT() {
      const TT = WT.b.get("openInGameMenuName");
      "clientGame" !== TT && (BT = "inventory" === TT), (0, gT.l)() || (0, gT.h)(), (0, MT.s)(MT.d), WT.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function cT() {
      fT(!1)
    }

    function vT() {
      fT(BT)
    }

    function fT(TT) {
      "clientGame" === WT.b.get("openInGameMenuName") && WT.b.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, gT.h)(), BT = !1
    }
  },
  38633: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(38641);
    const zT = [0, 0, 0];
    class MT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT;
        this.pool = TT, this.origin = UT, this.count = 0, this.free = []
      }
      take() {
        var TT;
        const UT = null !== (TT = this.free.pop()) && void 0 !== TT ? TT : this.count++;
        return UT >= this.pool.fl && this.pool.grow(Math.max(2 * this.pool.fl, UT + 1)), this.hide(UT), UT
      }
      release(TT) {
        this.hide(TT), this.free.push(TT)
      }
      write(TT, UT, mT, zT) {
        const {
          records: MT
        } = this.pool, {
          origin: gT
        } = this, nT = TT * WT.b;
        MT[nT] = UT - gT[0], MT[nT + 1] = mT - gT[1], MT[nT + 2] = zT - gT[2], MT[nT + WT.f] = 0, this.pool.markDirty(TT)
      }
      hide(TT) {
        this.pool.records[TT * WT.b + WT.f] = 1, this.pool.markDirty(TT)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class gT {
      constructor(TT, UT, mT) {
        this.api = TT, this.model = UT, this.initialCapacity = mT, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(TT) {
        let UT = this.kinds.get(TT);
        if (void 0 === UT) {
          const mT = this.api.createInstancePool({
            ...this.model,
            item: TT
          }, this.initialCapacity);
          null === mT || void 0 === mT || mT.setOrigin(this.origin[0], this.origin[1], this.origin[2]), UT = mT && new MT(mT, this.origin), this.kinds.set(TT, UT)
        }
        return UT
      }
      follow(TT) {
        const {
          origin: UT
        } = this;
        if (Math.abs(TT[0] - UT[0]) <= 512 && Math.abs(TT[1] - UT[1]) <= 512 && Math.abs(TT[2] - UT[2]) <= 512) return !1;
        UT[0] = Math.floor(TT[0]), UT[1] = Math.floor(TT[1]), UT[2] = Math.floor(TT[2]);
        for (const mT of this.kinds.values()) null === mT || void 0 === mT || mT.pool.setOrigin(UT[0], UT[1], UT[2]);
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
  38658: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      e: () => nT,
      h: () => HT
    });
    const WT = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      zT = [0, 1, 2, 0, 2, 3],
      MT = [4, 5];

    function gT(TT, UT, mT, WT, zT) {
      for (let gT = 0; gT < 6; gT++) MT.includes(gT) === zT && kT(TT, UT, mT, WT, gT)
    }

    function nT(TT, UT, mT, WT) {
      for (let zT = 0; zT < 6; zT++) kT(TT, UT, mT, WT, zT)
    }

    function HT(TT, UT, mT, MT, gT) {
      for (let nT = 0; nT < 6; nT++)
        for (const HT of [0, 1]) {
          const [kT, jT, lT] = [HT + 2, HT + 1, (HT + 3) % 4], LT = TT.length / 3;
          for (const [UT, zT] of [
              [HT, jT],
              [kT, jT],
              [kT, lT],
              [HT, lT]
            ])
            for (let HT = 0; HT < 3; HT++) {
              const kT = WT[3 * (4 * nT + UT) + HT],
                jT = WT[3 * (4 * nT + zT) + HT];
              TT.push((kT + (jT - kT) * gT) * MT / 2 + mT[HT])
            }
          for (const TT of zT) UT.push(LT + TT)
        }
    }

    function kT(TT, UT, mT, MT, gT) {
      let [nT, HT, kT] = mT, [jT, lT, LT] = MT;
      const pT = TT.length / 3;
      for (let zT = 4 * gT; zT < 4 * gT + 4; zT++) TT.push(WT[3 * zT] * jT / 2 + nT, WT[3 * zT + 1] * lT / 2 + HT, WT[3 * zT + 2] * LT / 2 + kT);
      for (const WT of zT) UT.push(pT + WT)
    }
  },
  38616: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => bf
    });
    var WT = mT(63);
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
      MT = 10;
    let gT = !0;

    function nT() {
      return gT
    }

    function HT(TT) {
      gT = TT
    }
    const kT = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function jT() {
      return gT ? zT.length : MT
    }

    function lT(TT) {
      var UT, mT;
      return null !== (UT = null === (mT = zT[TT - 1]) || void 0 === mT ? void 0 : mT.reactorTier) && void 0 !== UT ? UT : 0
    }

    function LT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lT(TT) > 0;
      return mT && !gT ? "hidden" : TT <= UT ? "open" : mT ? UT < 5 ? "hidden" : UT < MT ? "teaser" : "locked" : "locked"
    }

    function pT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: WT,
        n: zT
      } = cT(TT);
      return {
        key: UT[WT],
        params: {
          [WT]: mT ? String(zT) : zT
        }
      }
    }
    const BT = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function ZT(TT, UT) {
      return lT(TT) > 0 && UT < MT
    }

    function cT(TT) {
      const UT = lT(TT);
      if (UT > 0) return {
        kind: "atomic",
        n: UT,
        short: `A${UT}`
      };
      const mT = function(TT) {
        return TT >= 6 && TT <= 10 ? TT - 6 + 1 : 0
      }(TT);
      return mT > 0 ? {
        kind: "stage",
        n: mT,
        short: `S${mT}`
      } : {
        kind: "tier",
        n: TT,
        short: String(TT)
      }
    }

    function vT(TT) {
      return zT[Math.max(1, Math.min(TT, zT.length)) - 1]
    }

    function fT(TT, UT) {
      return TT < UT ? function(TT) {
        var UT;
        return null !== (UT = zT[TT]) && void 0 !== UT ? UT : null
      }(TT) : null
    }
    const qT = "baf2coresubmit",
      iT = "baf2corebankpause",
      bT = "baf2coredeposit",
      OT = "baf2corechargepause";

    function eT(TT) {
      var UT;
      return null !== (UT = TT.baf2CoreOpen) && void 0 !== UT ? UT : MT
    }
    const YT = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function JT(TT) {
      return YT.includes(TT)
    }
    const xT = (TT, UT) => UT.map((UT => [UT, [TT]])),
      dT = Object.fromEntries([...xT("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...xT("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...xT("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...xT("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...xT("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...xT("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...xT("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...xT("Parts Bench", ["Focus Lens"]), ...xT("Machine Bench", ["Laser", "Collider"]), ...xT("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...xT("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...xT("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...xT("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...xT("Tool Bench", ["Mob Cage"]), ...xT("Tool Bench", ["Pocket Terminal"]), ...xT("Tool Bench", ["Comet Beacon"]), ...xT("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function wT(TT) {
      var UT;
      return null !== (UT = dT[TT]) && void 0 !== UT ? UT : ["Workbench"]
    }

    function tT(TT) {
      return wT(TT)[0]
    }
    zT.slice(1).map(((TT, UT) => `Core Tier ${UT+2}`));
    var aT = mT(9330);
    const yT = ["on", "hud", "off"];

    function XT(TT) {
      return "on" === TT
    }
    var IT = mT(366);
    const QT = "Mob Farm",
      sT = {
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
      FT = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      PT = {
        1: 20,
        2: 60,
        3: 120
      },
      VT = "baf2farmvoid",
      uT = "Caged ",
      CT = " Spawner Block";

    function rT(TT) {
      return `lifeform:${(0,IT._e)(TT)}`
    }

    function KT(TT) {
      if (!TT) return null;
      if (TT.startsWith(uT)) {
        const UT = TT.slice(6);
        return FT.includes(UT) ? UT : null
      }
      if (TT.endsWith(CT)) {
        const UT = TT.slice(0, -14);
        return void 0 !== sT[UT] ? UT : null
      }
      return null
    }

    function ST(TT) {
      return !0 === TT.mobFarm
    }

    function GT(TT, UT) {
      return PT[sT[UT]] * TT.opMs / 1e3
    }
    const NT = new Map;
    const ET = "baf2islands",
      hT = "baf2islandnew";

    function DT(TT) {
      const UT = zT.findIndex((UT => UT.unlocks.includes(TT)));
      return UT < 0 ? 1 : UT + 1
    }

    function oT(TT) {
      return Math.floor(TT).toLocaleString("en-US")
    }
    var AT = mT(38553);
    const RT = "baf2terminaltake",
      TU = "baf2terminalput",
      UU = ["one", "stack", "fill"];

    function mU(TT, UT, mT) {
      return `${RT} ${TT} ${UT} ${mT}`
    }

    function WU(TT, UT, mT) {
      return `${TU} ${TT} ${UT} ${mT}`
    }

    function zU(TT) {
      return `${TU} ${TT}`
    }
    const MU = [
      [`${RT} `, "take"],
      [`${TU} `, "put"]
    ];

    function gU(TT) {
      const UT = MU.find((UT => {
        let [mT] = UT;
        return TT.startsWith(mT)
      }));
      if (!UT) return null;
      const [mT, WT] = UT, [zT, MT, ...gT] = TT.slice(mT.length).trim().split(" "), nT = Number(zT);
      if (!Number.isSafeInteger(nT) || nT <= 0) return null;
      if ("put" === WT && void 0 === MT) return {
        kind: "putAll",
        seq: nT
      };
      const HT = function(TT) {
        if (UU.includes(TT)) return TT;
        const UT = Number(TT);
        return /^\d+$/.test(TT) && Number.isSafeInteger(UT) && UT > 0 ? UT : null
      }(null !== MT && void 0 !== MT ? MT : "");
      return null === HT || 0 === gT.length ? null : {
        kind: WT,
        seq: nT,
        mode: HT,
        item: gT.join(" ")
      }
    }

    function nU(TT, UT) {
      const mT = "number" === typeof TT ? TT : "one" === TT ? 1 : "stack" === TT ? 99 : UT;
      return Math.min(UT, mT)
    }

    function HU(TT, UT) {
      const mT = TT => "number" === typeof TT ? TT : "one" === TT ? 1 : 99;
      return "fill" === TT || "fill" === UT ? "fill" : mT(TT) + mT(UT)
    }

    function kU(TT, UT) {
      const mT = gU(TT),
        WT = gU(UT),
        zT = mT && WT ? function(TT, UT) {
          return "take" === TT.kind || "take" === UT.kind ? "take" === TT.kind && "take" === UT.kind && TT.item === UT.item ? {
            ...UT,
            mode: HU(TT.mode, UT.mode)
          } : null : "putAll" === TT.kind || "putAll" === UT.kind ? {
            kind: "putAll",
            seq: UT.seq
          } : TT.item === UT.item ? {
            ...UT,
            mode: HU(TT.mode, UT.mode)
          } : null
        }(mT, WT) : null;
      return zT ? "putAll" === (MT = zT).kind ? zU(MT.seq) : "put" === MT.kind ? WU(MT.seq, MT.mode, MT.item) : mU(MT.seq, MT.mode, MT.item) : null;
      var MT
    }
    const jU = "baf2rx";

    function lU(TT, UT) {
      for (var mT = arguments.length, WT = new Array(mT > 2 ? mT - 2 : 0), zT = 2; zT < mT; zT++) WT[zT - 2] = arguments[zT];
      return [jU, TT[0], TT[1], TT[2], UT, ...WT].join(" ")
    }
    const LU = 2,
      pU = 4,
      BU = 8,
      ZU = 16,
      cU = 32,
      vU = 64,
      fU = 128,
      qU = 256,
      iU = 512,
      bU = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      OU = [{
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
    const eU = "Biomass",
      YU = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function JU(TT) {
      return {
        input: eU,
        inputAmount: 1,
        output: TT,
        outputAmount: 1
      }
    }
    const xU = "baf2synth",
      dU = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      wU = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      tU = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      aU = function(TT, UT) {
        return {
          input: TT,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: UT,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      yU = function(TT, UT) {
        return {
          ...aU(TT, UT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      XU = wU.map((TT => yU(TT, "Biomass", 2))),
      IU = {
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
          recipes: [aU("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), aU("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), aU("Raw Gold", "Gold Grit", 2), aU("Messy Stone", "Sand"), aU("Gravel", "Sand"), aU("Raw Voltite", "Voltite Dust", 2), aU("Moonstone", "Moonstone Dust", 4), aU("Wheat Seeds", "Fertiliser"), aU("Raw Uranium", "Uranium Grit", 2), yU("Mossy Messy Stone", "Sand"), ...XU],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [aU("Iron Grit", "Iron Bar"), aU("Copper Grit", "Copper Bar"), aU("Gold Grit", "Gold Bar"), aU("Raw Iron", "Iron Bar"), aU("Raw Copper", "Copper Bar"), aU("Raw Gold", "Gold Bar"), aU("Sand", "Glass"), aU("Messy Stone", "Stone"), ...IT.nd.map((TT => aU(TT, "Charcoal", 1, 4))), aU("Wheat", "Bread", 1, 2), ...wU.map(((TT, UT) => yU(TT, tU[UT])))],
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
          recipes: [aU("Iron Bar", "Iron Plate"), aU("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [aU("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [aU("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [aU("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), aU("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), aU("Raw Gold", "Gold Grit", 3), aU("Raw Voltite", "Voltite Dust", 3), aU("Messy Stone", "Sand", 2), aU("Gravel", "Sand", 2), aU("Moonstone", "Moonstone Dust", 6), aU("Raw Uranium", "Uranium Grit", 3), yU("Mossy Messy Stone", "Sand", 2), ...XU],
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
          table: bU
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [aU("Coal", "Diamond", 1, 24), aU("Voltite Dust", "Moonstone", 1, 12)],
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
        ...AT.g
      },
      QU = {
        Crusher: [aU("Spent Pellet", "Glow Dust"), aU("Wheat Seeds", "Biomass"), aU("Wheat", "Biomass"), aU("Dead Bush", "Biomass"), aU("Dusk Moss", "Biomass"), aU("Rotten Flesh", "Biomass"), aU("Bone", "Biomass", 2)],
        "Shatter Mill": [aU("Spent Pellet", "Glow Dust"), aU("Wheat Seeds", "Biomass"), aU("Wheat", "Biomass"), aU("Dead Bush", "Biomass"), aU("Dusk Moss", "Biomass"), aU("Rotten Flesh", "Biomass"), aU("Bone", "Biomass", 2), ...IT.nd.map((TT => aU(TT, "Biomass")))],
        Smelter: [aU("Biomass", "Fertiliser", 2)],
        Press: [aU("Coal", "Graphite", 1, 4)]
      },
      sU = "Power Coupler",
      FU = "Advanced Coupler",
      PU = "Nova Coupler",
      VU = [{
        item: sU,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: FU,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: PU,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const uU = new Map;

    function CU(TT) {
      var UT, mT;
      return null !== (UT = null !== (mT = TT.fuelSlot) && void 0 !== mT ? mT : TT.couplerSlot) && void 0 !== UT ? UT : null
    }

    function rU(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!TT.couplable) throw new Error(`${TT.kind} takes no Power Coupler`);
      let mT = uU.get(TT);
      mT || (mT = [], uU.set(TT, mT));
      let WT = mT[UT];
      if (!WT) {
        var zT;
        const {
          divisor: MT,
          powerPerS: gT
        } = VU[UT - 1], nT = TT.opMs / MT, HT = void 0 !== TT.fluidMade || void 0 !== TT.cryoMade ? TT.powerPerOp : gT * nT / 1e3;
        WT = {
          ...TT,
          fuelSlot: null,
          couplerSlot: null !== (zT = CU(TT)) && void 0 !== zT ? zT : void 0,
          opMs: nT,
          powerPerOp: HT,
          coupled: !0
        }, UT > 1 && (WT = {
          ...WT,
          couplerLevel: UT
        }), mT[UT] = WT
      }
      return WT
    }
    const KU = new Map;
    const SU = new Map;

    function GU(TT, UT) {
      if (null === UT || (mT = UT, !YU.includes(mT))) return TT;
      var mT;
      let WT = SU.get(UT);
      return WT || (WT = {
        ...TT,
        recipes: [JU(UT)]
      }, SU.set(UT, WT)), WT
    }

    function NU(TT) {
      return !0 === TT.synth
    }
    const EU = (TT, UT, mT, WT) => ({
        output: TT,
        outputAmount: UT,
        tier: mT,
        inputs: WT.map((TT => {
          let [UT, mT] = TT;
          return {
            item: UT,
            amount: mT
          }
        }))
      }),
      hU = Object.fromEntries([EU("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), EU("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), EU("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), EU("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), EU("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), EU("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), EU("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), EU("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), EU("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), EU("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), EU("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), EU("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), EU("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), EU("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), EU("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), EU("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), EU("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), EU("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), EU("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), EU("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), EU("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), EU("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), EU("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), EU("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), EU("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), EU("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), EU("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), EU("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), EU("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), EU("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((TT => [TT.output, TT]))),
      DU = new Map;

    function oU(TT, UT) {
      let mT = IU[TT];
      if (UT.atomic && (mT = function(TT) {
          const UT = QU[TT.kind];
          if (!UT) return TT;
          let mT = KU.get(TT.kind);
          if (!mT) {
            const WT = new Set(UT.map((TT => TT.input))),
              zT = TT.recipes.filter((TT => !WT.has(TT.input)));
            mT = {
              ...TT,
              recipes: [...zT, ...UT]
            }, KU.set(TT.kind, mT)
          }
          return mT
        }(mT)), mT.synth) return GU(mT, UT.taught);
      if (UT.coupled && mT.couplable) return rU(mT, UT.level);
      const WT = mT.inputSlots && null !== UT.taught ? hU[UT.taught] : void 0;
      if (!WT) return mT;
      const zT = `${TT}|${WT.output}`;
      let MT = DU.get(zT);
      return MT || (MT = {
        ...mT,
        bench: WT
      }, DU.set(zT, MT)), MT
    }
    const AU = ["Diamond", "Moonstone"];

    function RU(TT) {
      return new Set(TT.flatMap((TT => TT.bonus ? [TT.output, TT.bonus.item] : [TT.output])).filter((TT => !AU.includes(TT))))
    }
    const Tm = Object.values(IU).flatMap((TT => TT.recipes));
    RU(Tm.filter((TT => !0 !== TT.nuclear))), RU([...Tm.filter((TT => !0 === TT.nuclear)), ...Object.values(QU).flat()]);

    function Um(TT) {
      return null === TT.inputSlot && void 0 === TT.inputSlots && void 0 === TT.powerMade && void 0 === TT.fluidMade && !TT.treeCutter && void 0 === TT.table
    }

    function mm(TT) {
      return !0 === TT.treeCutter
    }
    const Wm = ["Voltite Cell"];

    function zm(TT) {
      var UT, mT;
      return null !== (UT = null === (mT = TT.fuels) || void 0 === mT ? void 0 : mT.some((TT => Wm.includes(TT)))) && void 0 !== UT && UT
    }
    const Mm = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(IT.nd.map((TT => [TT, 8e3]))),
        ...Object.fromEntries(IT.Qd.map((TT => [TT, 2e3]))),
        "Voltite Cell": 12e4
      },
      gm = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      nm = {
        "Uranium Deposit": 4e3
      };

    function Hm(TT) {
      var UT;
      return null !== (UT = Object.keys(gm).find((UT => gm[UT] === TT))) && void 0 !== UT ? UT : null
    }

    function km(TT) {
      return dU.includes(TT)
    }

    function jm(TT) {
      return !0 !== TT.nuclear || nT()
    }
    var lm = mT(351);
    var Lm = mT(9402),
      pm = mT(9344),
      Bm = mT(9406),
      Zm = mT(9393);
    const cm = "Reactor Controller",
      fm = "Reactor Port",
      qm = "Battery Cell",
      im = ["fuel", "water", "waste"],
      bm = {
        fuel: fm,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Om = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      em = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Ym = "Reactor Frame",
      Jm = "Reactor Glass",
      xm = {
        edge: [Ym],
        cap: [Jm, fm],
        wall: [Jm, fm],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [cm]
      },
      dm = {
        edge: [qm],
        cap: [qm],
        wall: [qm],
        inside: [qm],
        ctrl: [qm]
      },
      wm = ["edge", "cap", "wall", "inside"],
      tm = ["Reactor Slag"];

    function am(TT) {
      return tm.includes(ym(TT))
    }

    function ym(TT) {
      const UT = TT.indexOf("|");
      return UT < 0 ? TT : TT.slice(0, UT)
    }

    function Xm(TT) {
      return ym(TT) === cm ? "reactor" : null
    }

    function Im(TT) {
      return ym(TT) !== fm ? null : TT.endsWith("|Water") ? "water" : TT.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Qm(TT) {
      const UT = Im(TT);
      return null === UT ? null : Pm(bm[im[(im.indexOf(UT) + 1) % im.length]], function(TT) {
        return TT.includes(sm)
      }(TT))
    }
    const sm = "|meta|rot1|Formed",
      Fm = new Set([Ym, Jm, fm]);

    function Pm(TT, UT) {
      var mT;
      const WT = ym(TT);
      if (!Fm.has(WT)) return TT;
      if (WT !== fm) return UT ? WT + sm : WT;
      const zT = null !== (mT = Im(TT)) && void 0 !== mT ? mT : "fuel";
      return UT ? "fuel" === zT ? WT + sm : `${WT}${sm}|${"water"===zT?"Water":"Waste"}` : bm[zT]
    }

    function Vm(TT, UT) {
      const mT = zW(TT, UT);
      if ("Air" === mT) return !1;
      const WT = "reactor" === TT ? xm : dm;
      return wm.some((TT => WT[TT].includes(mT))) || "reactor" === TT && tm.includes(mT)
    }

    function um(TT) {
      return em[TT]
    }

    function Cm(TT) {
      var UT;
      return null !== (UT = Om[TT]) && void 0 !== UT ? UT : Om[1]
    }

    function rm(TT) {
      const [UT, , mT] = Cm(TT);
      return [mT, 0, -UT]
    }

    function Km(TT, UT, mT, WT, zT, MT) {
      return {
        ctrl: [TT[0], TT[1], TT[2]],
        rot: Om[UT] ? UT : 1,
        w: mT,
        h: WT,
        d: zT,
        cu: MT[0],
        cv: MT[1]
      }
    }

    function Sm(TT, UT) {
      return "reactor" === TT ? [Math.floor((UT - 1) / 2), 0] : [0, 0]
    }

    function Gm(TT, UT, mT, WT, zT) {
      let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT.rot;
      if (mT === TT.w && WT === TT.h && zT === TT.d && MT === TT.rot) return TT;
      const [gT] = Sm(UT, TT.w);
      if (TT.cu === gT && TT.cv <= 1) return Km(TT.ctrl, MT, mT, WT, zT, Sm(UT, mT));
      const nT = (TT, UT) => Math.max(1, Math.min(UT, TT));
      return Km(TT.ctrl, MT, mT, WT, zT, [nT(TT.cu, mT - 2), 0 === TT.cv ? 0 : nT(TT.cv, WT - 2)])
    }
    const Nm = 11,
      Em = 2 * Nm + 1;
    new Uint8Array(Em * Em * Em);

    function hm(TT) {
      return TT.w * TT.h * TT.d
    }

    function Dm(TT) {
      const UT = rm(TT.rot);
      return [TT.ctrl[0] - UT[0] * TT.cu, TT.ctrl[1] - TT.cv, TT.ctrl[2] - UT[2] * TT.cu]
    }

    function om(TT) {
      return TT.cv * TT.d * TT.w + TT.cu
    }

    function Am(TT, UT) {
      const mT = UT % TT.w,
        WT = Math.floor(UT / TT.w) % TT.d;
      return [mT, Math.floor(UT / (TT.w * TT.d)), WT]
    }

    function Rm(TT, UT) {
      const [mT, WT, zT] = Am(TT, UT), MT = Dm(TT), gT = Cm(TT.rot), nT = rm(TT.rot);
      return [MT[0] + nT[0] * mT - gT[0] * zT, MT[1] + WT, MT[2] + nT[2] * mT - gT[2] * zT]
    }

    function TW(TT, UT) {
      const mT = Dm(TT),
        WT = Cm(TT.rot),
        zT = rm(TT.rot),
        MT = UT[0] - mT[0],
        gT = UT[2] - mT[2],
        nT = MT * zT[0] + gT * zT[2],
        HT = -(MT * WT[0] + gT * WT[2]),
        kT = UT[1] - mT[1];
      return nT < 0 || nT >= TT.w || kT < 0 || kT >= TT.h || HT < 0 || HT >= TT.d ? -1 : (kT * TT.d + HT) * TT.w + nT
    }

    function UW(TT, UT) {
      if (UT === om(TT)) return "ctrl";
      const [mT, WT, zT] = Am(TT, UT), MT = 0 === WT || WT === TT.h - 1, gT = Number(0 === mT || mT === TT.w - 1) + Number(MT) + Number(0 === zT || zT === TT.d - 1);
      return gT >= 2 ? "edge" : 1 === gT ? MT ? "cap" : "wall" : "inside"
    }

    function mW(TT, UT) {
      const [mT, WT, zT] = Am(TT, UT);
      return 0 === mT || mT === TT.w - 1 || 0 === WT || WT === TT.h - 1 || 0 === zT || zT === TT.d - 1 ? -1 : ((WT - 1) * (TT.d - 2) + (zT - 1)) * (TT.w - 2) + (mT - 1)
    }

    function WW(TT, UT) {
      const mT = TT.w - 2,
        WT = TT.d - 2,
        zT = UT % mT + 1,
        MT = Math.floor(UT / mT) % WT + 1;
      return ((Math.floor(UT / (mT * WT)) + 1) * TT.d + MT) * TT.w + zT
    }

    function zW(TT, UT) {
      const mT = ym(UT);
      return "reactor" === TT && mT === cm ? Ym : mT
    }

    function MW(TT, UT, mT) {
      const WT = "ctrl" === UT ? ym(mT) : zW(TT, mT);
      return ("reactor" === TT ? xm : dm)[UT].includes(WT) ? "ok" : "Air" === WT ? "missing" : Vm(TT, mT) ? "wrong" : "blocked"
    }

    function gW(TT, UT) {
      return "battery" === TT ? qm : "inside" === UT ? null : function(TT, UT) {
        if ("inside" === UT || "ctrl" === UT || "battery" === TT) return null;
        return "edge" === UT ? Ym : Jm
      }(TT, UT)
    }
    const nW = {
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
      HW = "Collider",
      kW = "Laser",
      jW = "Star Alloy",
      lW = "Glow Dust",
      LW = [HW, "_Collider Focus"];

    function pW(TT) {
      return LW.indexOf(ym(TT))
    }

    function BW(TT) {
      return ym(TT) === kW
    }

    function ZW(TT) {
      return [
        [TT[0], TT[1], TT[2]],
        [TT[0], TT[1] + 1, TT[2]]
      ]
    }
    const cW = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function vW(TT, UT, mT) {
      const WT = cW[UT];
      return [TT[0] + WT[0] * mT, TT[1], TT[2] + WT[2] * mT]
    }

    function fW(TT, UT) {
      if (UT[1] !== TT[1]) return null;
      const mT = UT[0] - TT[0],
        WT = UT[2] - TT[2];
      if (0 !== mT === (0 !== WT)) return null;
      const zT = Math.abs(mT + WT);
      if (zT > nW.LASER_D) return null;
      return {
        dir: WT < 0 ? 0 : mT > 0 ? 1 : WT > 0 ? 2 : 3,
        sg: zT
      }
    }

    function qW(TT, UT, mT) {
      const WT = UT => Math.abs(TT[0] - UT[0]) <= 1 && Math.abs(TT[1] - UT[1]) <= 1;
      return WT(UT) || WT(mT)
    }

    function iW(TT, UT) {
      return function(TT, UT, mT, WT) {
        return [0, 1, 2, 3].map((zT => {
          for (let MT = 1; MT <= nW.LASER_D; MT++) {
            const gT = vW(TT, zT, MT);
            if (qW([gT[0], gT[2]], UT, mT) || !WT(gT)) return !1
          }
          return !0
        }))
      }(ZW(TT)[1], UT.spawnXZ, UT.coreXZ, (TT => TT[1] >= Lm.p && TT[1] < Lm.p + Lm.t && TT[0] >= UT.minXZ[0] && TT[0] <= UT.maxXZ[0] && TT[2] >= UT.minXZ[1] && TT[2] <= UT.maxXZ[1]))
    }
    const bW = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function OW(TT) {
      return Math.max(48 + 16 * TT, vT(TT).machineAllowance)
    }
    const eW = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function YW(TT) {
      const UT = TT.split("|")[0];
      return eW.includes(UT) ? "Solar Panel" : UT === Bm.d ? "Fluid Pipe" : pW(UT) >= 0 ? "Collider" : (mT = UT, bW.includes(mT) ? UT : null);
      var mT
    }
    const JW = "buildAFactory2Game:solarPanelDescription";
    const xW = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function dW(TT, UT) {
      var mT;
      return null !== (mT = xW.find((mT => {
        var WT;
        return (null !== (WT = TT.level(mT)) && void 0 !== WT ? WT : 0) >= UT
      }))) && void 0 !== mT ? mT : null
    }
    const wW = "buildAFactory2Game:";
    let tW = null;
    const aW = {
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
      yW = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      XW = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      IW = {
        "Loot Chest": `${wW}lookRuinChestName`
      };

    function QW(TT) {
      return "object" === typeof TT && null !== TT && "translationKey" in TT && "string" === typeof TT.translationKey ? TT.translationKey : null
    }

    function sW(TT, UT) {
      var mT;
      return null !== (mT = QW(TT.displayName(UT))) && void 0 !== mT ? mT : `item:${(0,IT._e)(UT)}`
    }

    function FW(TT, UT) {
      var mT, WT, zT, MT;
      let gT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UT;
      if ("Solar Panel" === YW(UT)) return {
        name: QW(TT.displayName("Solar Panel")),
        detail: JW,
        detailItem: null
      };
      const HT = UT.endsWith(" Ore"),
        kT = (tW ??= new Set([...Object.keys((0, pm.j)()), ...Object.keys((0, Bm.p)())].map((TT => TT.split("|")[0]))), tW).has(UT),
        jT = HT || kT ? null : function(TT) {
          var UT;
          return TT.endsWith(" Log") && !TT.startsWith("Barkless ") ? "lookLog" : TT.endsWith(" Sapling") ? "lookSapling" : TT.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (UT = aW[TT]) && void 0 !== UT ? UT : null
        }(UT);
      if (!TT.isBlock(UT) || !HT && !kT && null === jT) return null;
      const lT = null !== (mT = null !== (WT = IW[UT]) && void 0 !== WT ? WT : QW(null !== (zT = TT.displayName(gT)) && void 0 !== zT ? zT : TT.displayName(UT))) && void 0 !== mT ? mT : `item:${(0,IT._e)(UT)}`;
      if (null !== jT) return {
        name: lT,
        detail: `${wW}${jT}`,
        detailItem: null
      };
      const LT = null !== (MT = yW[UT]) && void 0 !== MT ? MT : nT() ? XW[UT] : void 0;
      if (kT && void 0 !== LT) return {
        name: lT,
        detail: `${wW}${LT}`,
        detailItem: null
      };
      const pT = gm[UT];
      if (void 0 !== pT) return {
        name: lT,
        detail: `${wW}lookDeposit`,
        detailItem: sW(TT, pT)
      };
      const BT = TT.harvestLevel(UT);
      if (HT && "rock" === TT.harvestType(UT) && 0 !== BT) {
        const UT = dW(TT, null !== BT && void 0 !== BT ? BT : 0);
        if (UT === xW[0]) return {
          name: lT,
          detail: `${wW}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== UT) return {
          name: lT,
          detail: `${wW}lookPickaxe`,
          detailItem: sW(TT, UT)
        }
      }
      return {
        name: lT,
        detail: QW(TT.description(UT)),
        detailItem: null
      }
    }

    function PW(TT) {
      return TT < Lm.p - 24
    }
    const VW = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const uW = "Wrench",
      CW = "Nova Wrench";

    function rW(TT) {
      return TT === uW || TT === CW
    }
    const KW = [...Lm.O, "Belt Lift", "Belt Drop"];
    const SW = ["Belt Lift", "Belt Drop"],
      GW = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function NW(TT) {
      return TT.split("|")[0]
    }

    function EW(TT) {
      const UT = /\|rot(\d)/.exec(TT);
      return UT ? Number(UT[1]) : 1
    }

    function hW(TT) {
      return TT % 4 + 1
    }

    function DW(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === UT && "" === mT ? TT : `${TT}|meta|rot${UT}${mT}`
    }

    function oW(TT) {
      return NW(TT) === Lm.C ? (0, Lm.U)(TT) ? "gateRight" : "gateLeft" : (0, Lm._)(TT)
    }

    function AW(TT) {
      const UT = NW(TT),
        mT = EW(TT);
      if (Lm.O.includes(UT)) return (0, Lm.Q)(UT, hW(mT), null);
      if (UT === Lm.j) return (0, Lm.bb)(hW(mT), (0, Lm.X)(TT));
      if (UT === Lm.F) {
        const WT = GW[(0, Lm._)(TT)];
        return null === WT ? DW(UT, hW(mT)) : DW(UT, mT, Lm.I[WT])
      }
      return UT === Lm.C ? (0, Lm.U)(TT) ? DW(UT, hW(mT)) : DW(UT, mT, Lm.n) : Zm.c.includes(UT) && !SW.includes(UT) || km(UT) ? DW(UT, hW(mT)) : null
    }

    function RW(TT) {
      return Zm.c.includes(TT) || km(TT) || null !== YW(TT)
    }

    function Tz(TT) {
      return "Solar Panel" === YW(TT)
    }
    const Uz = "buildAFactory2Game:",
      mz = {
        leftFront: `${Uz}lookSplitDetail_leftFront`,
        frontRight: `${Uz}lookSplitDetail_frontRight`,
        gateRight: `${Uz}lookGateDetail_gateRight`
      };

    function Wz(TT, UT) {
      var mT;
      let WT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const zT = oW(TT),
        MT = null === zT ? null : `${Uz}${zT.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${zT}`,
        gT = null === zT ? null : null !== (mT = mz[zT]) && void 0 !== mT ? mT : null;
      if (rW(UT) && WT) {
        const mT = NW(TT);
        return UT === CW && nT() && function(TT) {
          return KW.includes(NW(TT))
        }(TT) ? {
          mode: MT,
          detail: gT,
          next: `${Uz}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: MT,
          detail: gT,
          next: RW(mT) && !Tz(mT) ? `${Uz}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const HT = rW(UT) ? AW(TT) : null;
      if (null === HT) return {
        mode: MT,
        detail: gT,
        next: null,
        nextState: null
      };
      const kT = oW(HT);
      return null === kT || EW(HT) !== EW(TT) ? {
        mode: MT,
        detail: gT,
        next: `${Uz}lookWrenchTurn`,
        nextState: null
      } : {
        mode: MT,
        detail: gT,
        next: `${Uz}lookWrenchNext`,
        nextState: `${Uz}lookWrenchState_${kT}`
      }
    }
    const zz = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const Mz = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function gz(TT) {
      return [0, 1, 2, 3].map((UT => 0 !== (TT & 1 << UT)))
    }

    function nz(TT) {
      const UT = [];
      for (let mT = 8; mT + 2 < TT.length; mT += 3) UT.push([TT[mT], TT[mT + 1], TT[mT + 2]]);
      return {
        focus: [TT[0], TT[1], TT[2]],
        lasers: gz(TT[3]),
        open: gz(TT[4]),
        live: gz(TT[5]),
        on: 1 === TT[6],
        state: Mz[TT[7]],
        blockers: UT
      }
    }
    const Hz = "Arc Caster",
      kz = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      jz = (Object.values(kz), "Jet Chestplate"),
      lz = "Nova Jet Chestplate",
      Lz = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      pz = Object.values(Lz);

    function Bz(TT, UT, mT) {
      return Math.min(function(TT) {
        return nT() && lT(TT) >= 5 ? 20 : 10
      }(mT), Math.floor(function(TT, UT) {
        return Math.max(0, TT) + (nT() ? Math.max(0, UT) : 0)
      }(TT, UT) / 5))
    }

    function Zz(TT, UT, mT) {
      const WT = Bz(UT, mT, TT),
        zT = lT(TT),
        MT = (zT >= 3 ? 55 : zT >= 1 ? 50 : TT >= 8 ? 45 : 30) + WT,
        gT = Math.max(100 + WT, 2 * MT);
      return {
        arcDamage: MT,
        arcPierce: TT >= 7 ? 2 : 1,
        arcChain: TT >= 10,
        barrierMax: (zT >= 4 ? 100 : zT >= 2 ? 90 : TT >= 9 ? 80 : TT >= 6 ? 60 : 40) + 5 * WT,
        barrierRegenPerS: zT >= 5 ? 20 : TT >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * WT,
        novaShieldRegenPerS: 32,
        bladeDamage: gT,
        bladePunch: Math.round(.5 * gT),
        forgeRank: WT
      }
    }
    const cz = {
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
    var vz = mT(36923),
      fz = mT(36698),
      qz = mT(36693),
      iz = mT(25),
      bz = mT(1752),
      Oz = mT(1126),
      ez = mT.n(Oz);

    function Yz(TT) {
      return !0 === TT.field
    }
    const Jz = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function xz(TT) {
      return Jz.has(TT) ? `buildAFactory2Game:itemPlural_${(0,IT._e)(TT)}` : null
    }
    var dz = mT(1288),
      wz = mT(1135),
      tz = mT(2034),
      az = mT(2023),
      yz = mT(1515),
      Xz = mT(36921),
      Iz = mT(31),
      Qz = mT(36918);
    const sz = "baf2QuestView",
      Fz = "baf2PlayerY",
      Pz = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class Vz {
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
      set(TT, UT) {
        var mT, WT, zT, MT, gT, nT, HT, kT;
        const jT = JSON.stringify(TT.baf2QuestName) === JSON.stringify(this.view.name),
          lT = new Set(this.view.rows.filter((TT => TT.done)).map((TT => TT.id))),
          LT = new Set(this.view.rows.filter((TT => TT.justFinished)).map((TT => TT.id))),
          pT = TT.baf2QuestSide,
          BT = null !== pT && !0 === TT.baf2QuestSideFocus;
        let ZT = !1,
          cT = 0;
        const vT = TT.baf2QuestSteps.map((TT => {
            const UT = Ez(TT, Pz.has(TT[0]) ? TT[0] : "" + cT++),
              mT = jT && UT.done && !lT.has(UT.id);
            return UT.justFinished = mT || jT && UT.done && LT.has(UT.id), ZT ||= mT, UT
          })),
          fT = Nz(vT);
        fT >= 0 && !BT && (vT[fT].current = !0);
        const qT = !jT && null !== TT.baf2QuestName,
          iT = JSON.stringify(pT && [pT[0], pT[1]]),
          bT = iT === JSON.stringify(null !== (mT = null === (WT = this.view.side) || void 0 === WT ? void 0 : WT.name) && void 0 !== mT ? mT : null),
          OT = null !== pT && !this.sidesSeen.has(iT);
        OT && this.sidesSeen.add(iT), this.serverTutorial = null !== (zT = TT.baf2QuestTutorial) && void 0 !== zT ? zT : "on", (null !== (MT = TT.baf2QuestTutorialSeq) && void 0 !== MT ? MT : 0) >= this.pickSeq && this.endPick();
        const eT = !jT || !bT || TT.baf2QuestTier !== this.view.tier;
        this.view = {
          name: TT.baf2QuestName,
          rows: vT,
          reward: TT.baf2QuestReward,
          goal: TT.baf2QuestGoal,
          pulse: this.view.pulse + (ZT || qT ? 1 : 0),
          itemNames: UT,
          side: pT && {
            name: [pT[0], pT[1]],
            row: {
              ...Ez(pT[2], "side"),
              current: BT
            },
            goal: null !== (gT = pT[3]) && void 0 !== gT ? gT : null
          },
          sideCameUpAt: OT ? Date.now() : this.view.sideCameUpAt,
          tier: TT.baf2QuestTier,
          core: TT.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (nT = TT.baf2QuestAlso) && void 0 !== nT ? nT : [],
          depth: null !== (HT = TT.baf2QuestDepth) && void 0 !== HT ? HT : null,
          tutorial: null !== (kT = this.pickedTutorial) && void 0 !== kT ? kT : this.serverTutorial,
          tutorialKnown: !0
        }, this.EZ(), ZT && this.scheduleClear(), eT && this.requestBook()
      }
      setTutorial(TT) {
        return this.endPick(), this.pickedTutorial = TT, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.EZ()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: TT
        }, this.EZ(), this.pickSeq
      }
      onPlayerY(TT) {
        const UT = Math.floor(TT);
        UT !== this.playerY && (this.playerY = UT, this.view.depth && Iz.j.EZ(Fz, UT))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(TT) {
        this.view = {
          ...this.view,
          chapters: TT.baf2BookChapters
        }, this.EZ()
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
          }, this.EZ()
        }), 2400)
      }
      EZ() {
        Iz.j.EZ(sz, this.view, !0)
      }
    }

    function uz(TT, UT) {
      return TT.sideCameUpAt > 0 && UT - TT.sideCameUpAt < 2400
    }

    function Cz(TT) {
      return (null === TT.name || rz(TT)) && null === TT.side && null !== TT.chapters
    }

    function rz(TT) {
      var UT;
      return "quest_forgeOngoing" === (null === (UT = TT.name) || void 0 === UT ? void 0 : UT[0])
    }

    function Kz(TT) {
      return TT.filter((TT => !Pz.has(TT.key)))
    }

    function Sz(TT) {
      return TT.key.startsWith("stepCraft")
    }

    function Gz(TT, UT) {
      const mT = new Set,
        WT = TT.side ? [...TT.rows, TT.side.row] : TT.rows;
      for (const MT of WT)
        if (!MT.done) {
          !MT.item || UT && !Sz(MT) || mT.add(MT.item);
          for (const [TT, UT, WT] of null !== (zT = MT.chips) && void 0 !== zT ? zT : []) {
            var zT;
            UT < WT && mT.add(TT)
          }
        } return mT
    }

    function Nz(TT) {
      const UT = TT.findIndex((TT => !TT.done && !TT.away));
      return UT >= 0 ? UT : TT.findIndex((TT => !TT.done))
    }

    function Ez(TT, UT) {
      let [mT, WT, zT, MT, gT, nT, HT, kT, jT, lT] = TT;
      return {
        id: UT,
        key: mT,
        params: WT,
        item: zT,
        amount: MT,
        total: gT,
        done: nT,
        chips: null !== HT && void 0 !== HT ? HT : null,
        current: !1,
        away: !0 === kT,
        madeFor: null !== jT && void 0 !== jT ? jT : [],
        also: null !== lT && void 0 !== lT ? lT : [],
        justFinished: !1
      }
    }
    const hz = "baf2QuestItems",
      Dz = new Set;
    let oz = new Set,
      Az = null;

    function Rz(TT) {
      const UT = XT(TT.tutorial),
        mT = UT ? Gz(TT, !0) : Dz;
      "inventory" === iz.b.get("openInGameMenuName") ? (Az = null, (0, Qz.u)(mT)) : Az = mT;
      const WT = UT ? Gz(TT, !1) : Dz;
      (0, Xz.e)(WT, oz) || (oz = WT, Iz.j.EZ(hz, oz))
    }

    function TM() {
      return (0, yz.c)(hz, (() => oz))
    }
    var UM = mT(34291),
      mM = mT(3411);

    function WM(TT) {
      const UT = (0, mM.c)(TT),
        mT = void 0 === UT ? void 0 : (0, UM.displayNameOf)(UT);
      return "object" === typeof mT && null !== mT && "translationKey" in mT && "string" === typeof mT.translationKey ? mT.translationKey : `item:${(0,IT._e)(TT)}`
    }

    function zM(TT, UT) {
      return TT(WM(UT))
    }
    const MM = [{
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

    function gM(TT, UT) {
      return [`Deposit Seed (${TT})`, {
        item: gm[`${TT} Deposit`],
        amount: UT
      }]
    }
    const nM = Object.fromEntries([gM("Coal", 8), gM("Iron", 8), gM("Copper", 8), gM("Gold", 6), gM("Voltite", 4), gM("Uranium", 4)]),
      HM = "Relay Coil",
      kM = new Map;

    function jM(TT) {
      let UT = kM.get(TT);
      if (!UT) {
        const mT = Math.max(1, TT);
        UT = MM.filter((TT => {
          var UT;
          return mT >= TT.fromTier && mT <= (null !== (UT = TT.untilTier) && void 0 !== UT ? UT : 1 / 0)
        })).map((TT => TT.later && mT >= TT.later.tier ? {
          ...TT,
          weight: TT.later.weight
        } : TT)), kM.set(TT, UT)
      }
      return UT
    }

    function lM(TT) {
      return jM(TT).some((TT => {
        let {
          item: UT
        } = TT;
        return UT === HM
      }))
    }

    function LM(TT) {
      return TT.startsWith("Deposit Seed (")
    }

    function pM(TT, UT) {
      const mT = jM(TT);
      return UT ? mT.filter((TT => UT(TT.item))) : mT
    }

    function BM(TT) {
      return TT.reduce(((TT, UT) => TT + UT.weight), 0)
    }

    function ZM(TT, UT) {
      const mT = pM(TT, UT),
        WT = BM(mT);
      return mT.map((TT => ({
        find: TT,
        chance: TT.weight / WT
      })))
    }
    const cM = 6e4,
      vM = new Intl.NumberFormat("en-US");

    function fM(TT, UT) {
      const mT = TT >= 10 ? Math.round(TT) : Math.round(10 * TT) / 10;
      return 0 === mT ? "0" : `${UT}${vM.format(mT)}`
    }

    function qM(TT) {
      return TT < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? vM.format(TT) : TT < 1e6 ? `${TT<1e5?Math.floor(TT/100)/10:Math.floor(TT/1e3)}k` : Math.floor(TT / 1e5) / 10 + "M"
    }

    function iM(TT) {
      return TT < 0 ? "\u2212" + -TT : String(TT)
    }

    function bM(TT, UT) {
      const mT = Math.max(1, Math.round(UT));
      if (mT < 60) return TT("buildAFactory2Game:durationSeconds", {
        seconds: String(mT)
      });
      const WT = Math.round(mT / 60);
      if (WT < 60) return TT("buildAFactory2Game:durationMinutes", {
        minutes: String(WT)
      });
      const zT = String(Math.floor(WT / 60));
      return WT % 60 === 0 ? TT("buildAFactory2Game:durationWholeHours", {
        hours: zT
      }) : TT("buildAFactory2Game:durationHours", {
        hours: zT,
        minutes: String(WT % 60)
      })
    }
    var OM = mT(2605);
    const eM = "(max-height: 420px), (max-width: 650px)";

    function YM() {
      return (0, OM.c)(eM)
    }
    var JM = mT(1188);

    function xM(TT, UT) {
      return null !== TT && TT > UT + 1
    }

    function dM(TT) {
      const UT = 100 * TT;
      return String(UT <= 0 || UT >= 1 ? Math.round(UT) : Math.max(.1, Math.round(10 * UT) / 10))
    }

    function wM(TT) {
      let {
        item: UT,
        amount: mT
      } = TT;
      return (0, JM.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, JM.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, JM.jsx)(tz.b, {
            itemName: UT,
            amount: 0
          })
        }), mT > 1 && (0, JM.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", mT]
        })]
      })
    }

    function tM(TT) {
      let {
        label: UT,
        names: mT
      } = TT;
      const [zT, MT] = (0, WT.useState)(!1), gT = mT.join(" / ");
      return (0, JM.jsxs)(JM.Fragment, {
        children: [(0, JM.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: gT,
          "aria-expanded": zT,
          onClick: () => {
            MT(!zT)
          },
          children: UT
        }), zT && (0, JM.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: gT
        })]
      })
    }

    function aM(TT) {
      let {
        tier: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)(), {
        key: WT,
        params: zT
      } = pT(UT, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), MT = mT(`buildAFactory2Game:${WT}`, zT);
      return (0, JM.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, JM.jsx)(wz.c, {
          name: "lock"
        }), MT]
      })
    }
    const yM = (0, WT.createContext)(null);

    function XM() {
      const {
        t: TT
      } = (0, dz.z)(), UT = (0, WT.useContext)(yM);
      return (0, WT.useEffect)((() => null === UT || void 0 === UT ? void 0 : UT()), [UT]), (0, JM.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: TT("buildAFactory2Game:recipeForQuest"),
        "aria-label": TT("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function IM(TT) {
      let {
        title: UT,
        count: mT,
        children: zT,
        startOpen: MT = !0
      } = TT;
      const {
        t: gT
      } = (0, dz.z)(), [nT, HT] = (0, WT.useState)((() => MT && !YM())), [kT, jT] = (0, WT.useState)(0), lT = (0, WT.useCallback)((() => (jT((TT => TT + 1)), () => {
        jT((TT => TT - 1))
      })), []);
      return (0, JM.jsxs)("div", {
        className: ez()("Baf2Recipes", {
          Open: nT
        }),
        children: [(0, JM.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            HT(!nT)
          },
          "aria-expanded": nT,
          children: [gT("buildAFactory2Game:recipesToggle", {
            title: UT,
            count: String(mT)
          }), (0, JM.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: nT ? "\u25be" : "\u25b8"
          })]
        }), nT && (0, JM.jsxs)(yM.Provider, {
          value: lT,
          children: [(0, JM.jsx)("ul", {
            className: "Baf2RecipeList",
            children: zT
          }), kT > 0 && (0, JM.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, JM.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), gT("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const QM = "buildAFactory2Game:",
      sM = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const FM = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      PM = {
        "Uranium Grit": MT,
        "Raw Uranium": MT
      };

    function VM(TT) {
      var UT;
      return null !== (UT = PM[TT]) && void 0 !== UT ? UT : Math.max(DT(TT), FM[TT] ? DT(FM[TT]) : 1, function(TT) {
        const UT = zT.findIndex((UT => UT.cost.some((UT => UT.item === TT))));
        return UT > MT ? UT : 1
      }(TT))
    }

    function uM(TT, UT) {
      return CM(UT) ? VM(UT) : function(TT) {
        if (sM.has(TT)) return 1;
        const UT = zT.findIndex((UT => UT.newDeposits.some((UT => {
          let {
            block: mT
          } = UT;
          return mT === TT
        }))));
        return UT < 0 ? 1 : UT + 1
      }(TT)
    }

    function CM(TT) {
      return TT in PM || lT(VM(TT)) > 0
    }

    function rM(TT, UT) {
      return oU(TT, {
        coupled: !1,
        taught: null,
        atomic: nT() && UT >= 11
      }).recipes
    }

    function KM(TT, UT) {
      const mT = LT(TT, UT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lT(TT) > 0);
      return "open" === mT || "locked" === mT
    }

    function SM(TT, UT) {
      return TT.map(((TT, mT) => ({
        value: TT,
        idx: mT,
        tier: UT(TT)
      }))).sort(((TT, UT) => TT.tier - UT.tier || TT.idx - UT.idx)).map((TT => {
        let {
          value: UT
        } = TT;
        return UT
      }))
    }

    function GM(TT, UT, mT) {
      const WT = LT(TT, UT);
      if ("hidden" === WT || "open" === WT) return null;
      if ("teaser" === WT) return {
        tag: {
          translationKey: `${QM}${mT?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${QM}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const zT = pT(TT, {
          tier: mT ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        MT = pT(TT, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${QM}${zT.key}`,
          params: zT.params
        },
        reason: {
          translationKey: `${QM}${MT.key}`,
          params: MT.params
        }
      }
    }

    function NM(TT) {
      return !LM(TT)
    }

    function EM(TT) {
      let {
        seconds: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)();
      return (0, JM.jsx)(IM, {
        title: mT("buildAFactory2Game:recipesCuts", {
          seconds: UT
        }),
        count: 1,
        children: (0, JM.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, JM.jsx)(wM, {
            item: "Maple Sapling",
            amount: 1
          }), (0, JM.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, JM.jsx)(wM, {
            item: "Maple Log",
            amount: 1
          }), (0, JM.jsx)("span", {
            className: "Baf2RecipeName",
            children: mT("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function hM(TT) {
      let {
        fertilised: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)();
      return (0, JM.jsxs)(IM, {
        title: mT("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, JM.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, JM.jsx)(wM, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, JM.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, JM.jsx)(wM, {
            item: "Wheat",
            amount: 1
          }), (0, JM.jsx)(wM, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, JM.jsx)("span", {
            className: "Baf2RecipeName",
            children: mT("buildAFactory2Game:recipeField")
          })]
        }), (0, JM.jsxs)("li", {
          className: ez()("Baf2Recipe", {
            InUse: UT
          }),
          children: [(0, JM.jsx)(wM, {
            item: "Fertiliser",
            amount: 1
          }), (0, JM.jsx)("span", {
            className: "Baf2RecipeName",
            children: mT("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function DM(TT) {
      let {
        tier: UT,
        seconds: mT
      } = TT;
      const {
        t: WT
      } = (0, dz.z)(), zT = function(TT) {
        return TT >= 5 ? OU : bU
      }(UT);
      return (0, JM.jsx)(IM, {
        title: WT("buildAFactory2Game:recipesBringsUp", {
          seconds: mT
        }),
        count: zT.length,
        children: zT.map((TT => {
          let {
            item: UT,
            chance: mT
          } = TT;
          return (0, JM.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, JM.jsx)(wM, {
              item: UT,
              amount: 1
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeName",
              children: zM(WT, UT)
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: WT("buildAFactory2Game:recipeChance", {
                percent: dM(mT)
              })
            })]
          }, UT)
        }))
      })
    }

    function oM(TT) {
      let {
        tier: UT,
        seconds: mT,
        noSeeds: WT
      } = TT;
      const {
        t: zT
      } = (0, dz.z)(), MT = TM(), gT = ZM(UT, WT ? NM : void 0), nT = WT && ZM(UT).length > gT.length, HT = lM(UT);
      return (0, JM.jsxs)(IM, {
        title: zT("buildAFactory2Game:recipesRecycles", {
          seconds: mT
        }),
        count: gT.length,
        children: [gT.map((TT => {
          let {
            find: UT,
            chance: mT
          } = TT;
          return (0, JM.jsxs)("li", {
            className: "Baf2Recipe",
            children: [MT.has(UT.item) && (0, JM.jsx)(XM, {}), (0, JM.jsx)(wM, {
              item: UT.item,
              amount: UT.amount
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeName",
              children: zM(zT, UT.item)
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: zT("buildAFactory2Game:recipeChance", {
                percent: dM(mT)
              })
            })]
          }, UT.item)
        })), nT && (0, JM.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, JM.jsx)("span", {
            className: "Baf2RecipeName",
            children: zT("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), HT && (0, JM.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, JM.jsx)("span", {
            className: "Baf2RecipeName",
            children: zT("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function AM(TT) {
      let {
        tier: UT,
        seconds: mT
      } = TT;
      const {
        t: WT
      } = (0, dz.z)(), zT = Object.entries(nM).filter((TT => {
        let [, {
          item: mT
        }] = TT;
        return KM(VM(mT), UT, CM(mT))
      }));
      return (0, JM.jsx)(IM, {
        title: WT("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: mT
        }),
        count: zT.length,
        children: zT.map((TT => {
          let [UT, {
            item: mT,
            amount: zT
          }] = TT;
          return (0, JM.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, JM.jsx)(wM, {
              item: UT,
              amount: 1
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, JM.jsx)(wM, {
              item: mT,
              amount: zT
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeName",
              children: zM(WT, mT)
            })]
          }, UT)
        }))
      })
    }

    function RM(TT) {
      let {
        tier: UT,
        seconds: mT
      } = TT;
      const {
        t: WT
      } = (0, dz.z)(), zT = TM(), MT = SM(Object.entries(gm).filter((TT => {
        let [mT, WT] = TT;
        return KM(uM(mT, WT), UT, CM(WT))
      })), (TT => {
        let [UT, mT] = TT;
        return uM(UT, mT)
      }));
      return (0, JM.jsx)(IM, {
        title: WT("buildAFactory2Game:recipesDigs", {
          seconds: mT
        }),
        count: MT.length,
        children: MT.map((TT => {
          let [mT, MT] = TT;
          const gT = uM(mT, MT),
            nT = gT > UT ? gT : null,
            HT = nm[mT],
            kT = null === nT && zT.has(MT);
          return (0, JM.jsxs)("li", {
            className: ez()("Baf2Recipe", {
              Locked: null !== nT,
              Far: xM(nT, UT)
            }),
            children: [kT && (0, JM.jsx)(XM, {}), (0, JM.jsx)(wM, {
              item: mT,
              amount: 1
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, JM.jsx)(wM, {
              item: MT,
              amount: 1
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeName",
              children: zM(WT, MT)
            }), void 0 !== HT && (0, JM.jsx)("span", {
              className: "Baf2RecipeMore",
              children: WT("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / HT)
              })
            }), null !== nT && (0, JM.jsx)(aM, {
              tier: nT
            })]
          }, mT)
        }))
      })
    }

    function Tg(TT) {
      var UT;
      let {
        def: mT,
        seconds: WT
      } = TT;
      const {
        t: zT
      } = (0, dz.z)();
      return (0, JM.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, JM.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (UT = mT.fuels) && void 0 !== UT ? UT : []).map((TT => (0, JM.jsx)(wM, {
            item: TT,
            amount: 1
          }, TT))), (0, JM.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, JM.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, JM.jsx)(wz.c, {
              name: "bolt"
            }), zT("buildAFactory2Game:recipePower", {
              power: oT(mT.powerMade),
              seconds: WT
            })]
          })]
        })
      })
    }

    function Ug(TT) {
      let {
        def: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)();
      return (0, JM.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, JM.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, JM.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, JM.jsx)(wz.c, {
              name: "bolt"
            }), mT("buildAFactory2Game:recipeMixer", {
              cryo: fM((0, AT.G)(UT, UT.cryoMade), "")
            })]
          })
        })
      })
    }

    function mg(TT) {
      let {
        def: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)();
      return (0, JM.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, JM.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, JM.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, JM.jsx)(wz.c, {
              name: "bolt"
            }), mT("buildAFactory2Game:recipeCondenser", {
              power: fM((0, AT.G)(UT, UT.powerPerOp), ""),
              water: fM((0, AT.G)(UT, UT.fluidMade), "")
            })]
          })
        })
      })
    }

    function Wg(TT) {
      let {
        kind: UT,
        def: mT,
        input: WT,
        tier: zT,
        noSeeds: MT = !1
      } = TT;
      const gT = String(mT.opMs / 1e3);
      return mm(mT) ? (0, JM.jsx)(EM, {
        seconds: gT
      }) : mT.field ? (0, JM.jsx)(hM, {
        fertilised: null !== WT
      }) : mT.table ? (0, JM.jsx)(DM, {
        tier: zT,
        seconds: gT
      }) : mT.recycles ? (0, JM.jsxs)(JM.Fragment, {
        children: [(0, JM.jsx)(oM, {
          tier: zT,
          seconds: gT,
          noSeeds: MT
        }), (0, JM.jsx)(AM, {
          tier: zT,
          seconds: gT
        })]
      }) : Um(mT) ? (0, JM.jsx)(RM, {
        tier: zT,
        seconds: gT
      }) : void 0 !== mT.fluidMade ? (0, JM.jsx)(mg, {
        def: mT
      }) : void 0 !== mT.cryoMade ? (0, JM.jsx)(Ug, {
        def: mT
      }) : void 0 !== mT.powerMade ? (0, JM.jsx)(Tg, {
        def: mT,
        seconds: gT
      }) : (0, JM.jsx)(zg, {
        kind: UT,
        input: WT,
        tier: zT,
        seconds: gT
      })
    }

    function zg(TT) {
      let {
        kind: UT,
        input: mT,
        tier: WT,
        seconds: zT
      } = TT;
      const {
        t: MT
      } = (0, dz.z)(), gT = TM(), nT = SM(function(TT) {
        const UT = new Map;
        for (const zT of TT) {
          var mT, WT;
          const TT = [zT.output, zT.outputAmount, zT.inputAmount, null === (mT = zT.bonus) || void 0 === mT ? void 0 : mT.item, null === (WT = zT.bonus) || void 0 === WT ? void 0 : WT.chance].join("|"),
            MT = UT.get(TT);
          MT ? MT.inputs.push(zT.input) : UT.set(TT, {
            inputs: [zT.input],
            inputAmount: zT.inputAmount,
            output: zT.output,
            outputAmount: zT.outputAmount,
            bonus: zT.bonus
          })
        }
        return [...UT.values()]
      }(rM(UT, WT).filter(jm)), (TT => VM(TT.output))).filter((TT => KM(VM(TT.output), WT, CM(TT.output))));
      return (0, JM.jsx)(IM, {
        title: MT("buildAFactory2Game:recipesEach", {
          seconds: zT
        }),
        count: nT.length,
        children: nT.map((TT => {
          const UT = null !== mT && TT.inputs.includes(mT),
            zT = TT.inputs.length > 3 ? [UT ? mT : TT.inputs[0]] : TT.inputs,
            nT = VM(TT.output) > WT ? VM(TT.output) : null,
            HT = null === nT && gT.has(TT.output);
          return (0, JM.jsxs)("li", {
            className: ez()("Baf2Recipe", {
              InUse: UT,
              Locked: null !== nT,
              Far: xM(nT, WT)
            }),
            children: [HT && (0, JM.jsx)(XM, {}), zT.map(((UT, mT) => (0, JM.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [mT > 0 && (0, JM.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, JM.jsx)(wM, {
                item: UT,
                amount: TT.inputAmount
              })]
            }, UT))), zT.length < TT.inputs.length && (0, JM.jsx)(tM, {
              label: MT("buildAFactory2Game:recipeMore", {
                count: String(TT.inputs.length - zT.length)
              }),
              names: TT.inputs.filter((TT => !zT.includes(TT))).map((TT => zM(MT, TT)))
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, JM.jsx)(wM, {
              item: TT.output,
              amount: TT.outputAmount
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeName",
              children: zM(MT, TT.output)
            }), TT.bonus && (0, JM.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [MT("buildAFactory2Game:recipeBonus", {
                percent: dM(TT.bonus.chance)
              }), (0, JM.jsx)(wM, {
                item: TT.bonus.item,
                amount: 1
              })]
            }), null !== nT && (0, JM.jsx)(aM, {
              tier: nT
            })]
          }, `${TT.output}|${TT.inputs[0]}`)
        }))
      })
    }

    function Mg(TT) {
      let {
        taught: UT,
        tier: mT
      } = TT;
      const {
        t: WT
      } = (0, dz.z)(), zT = TM(), MT = SM(Object.values(hU), (TT => TT.tier)).filter((TT => KM(TT.tier, mT)));
      return (0, JM.jsx)(IM, {
        title: WT("buildAFactory2Game:benchCanMake"),
        count: MT.length,
        startOpen: !1,
        children: MT.map((TT => {
          const MT = TT.tier > mT,
            gT = !MT && zT.has(TT.output);
          return (0, JM.jsxs)("li", {
            className: ez()("Baf2Recipe", {
              InUse: TT.output === UT,
              Locked: MT,
              Far: xM(MT ? TT.tier : null, mT)
            }),
            children: [gT && (0, JM.jsx)(XM, {}), (0, JM.jsx)(wM, {
              item: TT.output,
              amount: TT.outputAmount
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeName",
              children: zM(WT, TT.output)
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), TT.inputs.map((TT => (0, JM.jsx)(wM, {
              item: TT.item,
              amount: TT.amount
            }, TT.item))), MT && (0, JM.jsx)(aM, {
              tier: TT.tier
            })]
          }, TT.output)
        }))
      })
    }
    var gg, ng, Hg, kg, jg;
    const lg = IU.Generator,
      Lg = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      pg = 1e3 * (null !== (gg = lg.powerMade) && void 0 !== gg ? gg : 0) / lg.opMs,
      Bg = Math.min(...(null !== (ng = lg.fuels) && void 0 !== ng ? ng : []).map((TT => Mm[TT]))) / 1e3,
      Zg = IU["Volt Engine"],
      cg = 1e3 * (null !== (Hg = Zg.powerMade) && void 0 !== Hg ? Hg : 0) / Zg.opMs,
      vg = Mm[null !== (kg = null === (jg = Zg.fuels) || void 0 === jg ? void 0 : jg[0]) && void 0 !== kg ? kg : ""] / 1e3;

    function fg(TT) {
      let {
        item: UT,
        label: mT,
        value: WT,
        note: zT,
        dim: MT
      } = TT;
      return (0, JM.jsxs)("li", {
        className: ez()("Baf2PowerRow", {
          Dim: MT
        }),
        children: [(0, JM.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, JM.jsx)(tz.b, {
            itemName: UT,
            amount: 0
          })
        }), (0, JM.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, JM.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: mT
          }), zT && (0, JM.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: zT
          })]
        }), (0, JM.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: WT
        })]
      })
    }

    function qg(TT, UT, mT, WT) {
      var zT;
      const MT = void 0 === WT ? IU[TT] : function(TT, UT) {
          if (null === UT) return TT;
          let mT = NT.get(UT);
          return mT || (mT = {
            ...TT,
            powerPerOp: GT(TT, UT),
            farmMob: UT
          }, NT.set(UT, mT)), mT
        }(IU[TT], WT),
        gT = UT && MT.couplable ? rU(MT, mT) : MT;
      return 1e3 * (null !== (zT = gT.powerPerOp) && void 0 !== zT ? zT : 0) / gT.opMs
    }

    function ig(TT) {
      var UT, mT, WT, zT, MT, gT, nT, HT;
      let {
        message: kT
      } = TT;
      const {
        t: jT
      } = (0, dz.z)(), lT = (TT, UT) => jT("buildAFactory2Game:powerPerSecond", {
        rate: fM(TT, UT)
      }), [LT, pT] = kT.baf2PowerGenerators, BT = kT.baf2PowerGeneratorFuel, ZT = kT.baf2PowerSunPanels, cT = null !== (UT = kT.baf2PowerSunShare) && void 0 !== UT ? UT : 1, vT = kT.baf2PowerVaults, fT = kT.baf2PowerUsers, [qT, iT] = null !== (mT = kT.baf2PowerEngines) && void 0 !== mT ? mT : [0, 0], bT = null !== (WT = kT.baf2PowerEngineCells) && void 0 !== WT ? WT : 0, OT = null !== (zT = kT.baf2PowerPads) && void 0 !== zT ? zT : 0, eT = null !== (MT = kT.baf2PowerCharge) && void 0 !== MT ? MT : 0, [YT, JT] = null !== (gT = kT.baf2PowerReactors) && void 0 !== gT ? gT : [0, 0], [xT, dT] = null !== (nT = kT.baf2PowerBatteries) && void 0 !== nT ? nT : [0, 0];
      let wT = jT("buildAFactory2Game:powerEngineCells", {
        amount: String(bT)
      });
      bT > 0 && iT > 0 && (wT = jT("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(bT),
        time: bM(jT, bT * vg / iT)
      }));
      let tT = jT("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(BT)
      });
      BT > 0 && pT > 0 && (tT = jT("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(BT),
        time: bM(jT, BT * Bg / pT)
      }));
      const aT = LT + qT + ZT + YT;
      return (0, JM.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, JM.jsxs)("section", {
          children: [(0, JM.jsxs)("h3", {
            children: [jT("buildAFactory2Game:powerMaking"), (0, JM.jsx)("span", {
              children: lT(kT.baf2PowerMadePerS, "+")
            })]
          }), (0, JM.jsxs)("ul", {
            children: [0 === aT && (0, JM.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: jT("buildAFactory2Game:powerNoMakers")
            }), LT > 0 && (0, JM.jsx)(fg, {
              item: "Generator",
              label: `${zM(jT,"Generator")} \xd7${LT}`,
              note: `${jT("buildAFactory2Game:powerRunning",{amount:String(pT)})} \xb7 ${tT}`,
              value: lT(pT * pg, "+"),
              dim: 0 === pT
            }), qT > 0 && (0, JM.jsx)(fg, {
              item: "Volt Engine",
              label: `${zM(jT,"Volt Engine")} \xd7${qT}`,
              note: `${jT("buildAFactory2Game:powerRunning",{amount:String(iT)})} \xb7 ${wT}`,
              value: lT(iT * cg, "+"),
              dim: 0 === iT
            }), ZT > 0 && (0, JM.jsx)(fg, {
              item: "Solar Panel",
              label: `${zM(jT,"Solar Panel")} \xd7${ZT}`,
              note: jT(cT < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: lT(4 * ZT * cT, "+")
            }), YT > 0 && (0, JM.jsx)(fg, {
              item: "Reactor Frame",
              label: `${jT("buildAFactory2Game:powerReactors")} \xd7${YT}`,
              note: jT("buildAFactory2Game:powerRunning", {
                amount: String(JT)
              }),
              value: lT(null !== (HT = kT.baf2PowerReactorPerS) && void 0 !== HT ? HT : 0, "+"),
              dim: 0 === JT
            })]
          })]
        }), (0, JM.jsxs)("section", {
          children: [(0, JM.jsxs)("h3", {
            children: [jT("buildAFactory2Game:powerStorage"), (0, JM.jsx)("span", {
              children: oT(kT.baf2PowerCap)
            })]
          }), (vT > 0 || xT > 0) && (0, JM.jsxs)("ul", {
            children: [vT > 0 && (0, JM.jsx)(fg, {
              item: "Charge Vault",
              label: `${zM(jT,"Charge Vault")} \xd7${vT}`,
              value: `+${oT(8e3*vT)}`
            }), xT > 0 && (0, JM.jsx)(fg, {
              item: "Battery Cell",
              label: `${jT("buildAFactory2Game:powerBatteries")} \xd7${xT}`,
              value: `+${oT(dT)}`
            })]
          })]
        }), (0, JM.jsxs)("section", {
          children: [(0, JM.jsxs)("h3", {
            children: [jT("buildAFactory2Game:powerUsing"), (0, JM.jsx)("span", {
              children: lT(kT.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, JM.jsxs)("ul", {
            children: [0 === fT.length && 0 === OT && 0 === eT && (0, JM.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: jT("buildAFactory2Game:powerNoUsers")
            }), fT.map((TT => {
              let [UT, mT, WT, zT, MT = 1, gT] = TT, nT = mT ? jT(Lg[MT - 1], {
                name: zM(jT, UT)
              }) : zM(jT, UT);
              return void 0 !== gT && (nT = jT("buildAFactory2Game:powerFarmName", {
                name: nT,
                mob: jT(rT(gT))
              })), (0, JM.jsx)(fg, {
                item: UT,
                label: `${nT} \xd7${WT}`,
                note: jT("buildAFactory2Game:powerRunning", {
                  amount: String(zT)
                }),
                value: zT > 0 ? lT(zT * qg(UT, mT, MT, gT), "\u2212") : jT("buildAFactory2Game:powerIdle"),
                dim: 0 === zT
              }, `${UT}|${mT}|${MT}|${gT}`)
            })), OT > 0 && (0, JM.jsx)(fg, {
              item: "Charging Pad",
              label: `${zM(jT,"Charging Pad")} \xd7${OT}`,
              value: jT("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), eT > 0 && (0, JM.jsx)(fg, {
              item: "Homestead Core",
              label: jT("buildAFactory2Game:powerCharge"),
              value: lT(eT, "\u2212")
            }), kT.baf2PowerStarved > 0 && (0, JM.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, JM.jsx)(wz.c, {
                name: "triangle-exclamation"
              }), jT("buildAFactory2Game:powerStarved", {
                amount: String(kT.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var bg = mT(4639),
      Og = mT(1569);
    class eg {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(TT) {
        this.message = TT;
        for (const UT of this.listeners) UT()
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
    class Yg extends eg {}

    function Jg(TT, UT) {
      const mT = () => {
          const mT = TT.get();
          if (!mT || !UT) return mT;
          const [WT, zT, MT] = mT.baf2PowerAt;
          return WT === UT[0] && zT === UT[1] && MT === UT[2] ? mT : null
        },
        [zT, MT] = (0, WT.useState)(mT);
      return (0, WT.useEffect)((() => (MT(mT()), TT.subscribe((() => {
        MT(mT())
      })))), [TT, ...null !== UT && void 0 !== UT ? UT : []]), zT
    }

    function xg(TT) {
      return {
        stored: TT.baf2PowerStored,
        cap: TT.baf2PowerCap,
        madePerS: TT.baf2PowerMadePerS,
        usedPerS: TT.baf2PowerUsedPerS
      }
    }

    function dg(TT) {
      let {
        stored: UT,
        cap: mT
      } = TT;
      return (0, JM.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, JM.jsx)("div", {
          style: {
            width: `${Math.min(100,100*UT/Math.max(1,mT))}%`
          }
        })
      })
    }

    function wg(TT) {
      let {
        figures: UT,
        labelled: mT = !1
      } = TT;
      const {
        t: WT
      } = (0, dz.z)(), zT = UT.madePerS - UT.usedPerS, {
        text: MT,
        draining: gT
      } = function(TT, UT) {
        let {
          stored: mT,
          cap: WT,
          madePerS: zT,
          usedPerS: MT
        } = UT;
        const gT = zT - MT;
        return mT >= WT ? {
          text: TT("buildAFactory2Game:powerFull"),
          draining: !1
        } : gT > .05 ? {
          text: TT("buildAFactory2Game:powerFullIn", {
            time: bM(TT, (WT - mT) / gT)
          }),
          draining: !1
        } : gT < -.05 ? {
          text: TT("buildAFactory2Game:powerEmptyIn", {
            time: bM(TT, mT / -gT)
          }),
          draining: !0
        } : {
          text: TT("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(WT, UT);
      return (0, JM.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, JM.jsx)(dg, {
          stored: UT.stored,
          cap: UT.cap
        }), (0, JM.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, JM.jsx)("span", {
            children: WT(mT ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: oT(UT.stored),
              cap: oT(UT.cap)
            })
          }), (0, JM.jsxs)("span", {
            className: ez()("Baf2PowerNet", {
              Draining: gT
            }),
            children: [WT("buildAFactory2Game:powerPerSecond", {
              rate: fM(Math.abs(zT), zT < 0 ? "\u2212" : "+")
            }), " \xb7 ", MT]
          })]
        })]
      })
    }

    function tg(TT) {
      let {
        stored: UT,
        cap: mT,
        rates: WT
      } = TT;
      const {
        t: zT
      } = (0, dz.z)();
      return WT ? (0, JM.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, JM.jsx)(wg, {
          figures: {
            stored: UT,
            cap: mT,
            madePerS: WT[0],
            usedPerS: WT[1]
          },
          labelled: !0
        })
      }) : (0, JM.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, JM.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, JM.jsx)(dg, {
            stored: UT,
            cap: mT
          }), (0, JM.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, JM.jsx)("span", {
              children: zT("buildAFactory2Game:powerStoredLabelled", {
                stored: oT(UT),
                cap: oT(mT)
              })
            })
          })]
        })
      })
    }

    function ag(TT) {
      let {
        store: UT,
        close: mT
      } = TT;
      const {
        t: WT
      } = (0, dz.z)(), zT = Jg(UT);
      return (0, JM.jsx)(bg.e, {
        close: mT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, JM.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, JM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JM.jsxs)("div", {
              children: [(0, JM.jsx)("h2", {
                id: "baf2PowerTitle",
                children: WT("buildAFactory2Game:powerTitle")
              }), (0, JM.jsx)("p", {
                children: WT("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, JM.jsx)(Og.k, {
              onClick: mT
            })]
          }), zT && (0, JM.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, JM.jsx)(wg, {
              figures: xg(zT)
            }), (0, JM.jsx)(ig, {
              message: zT
            })]
          })]
        })
      })
    }

    function yg(TT) {
      var UT;
      let {
        kind: mT,
        def: zT,
        Kz: MT,
        power: gT,
        stored: nT,
        cap: HT
      } = TT;
      const {
        t: kT
      } = (0, dz.z)(), jT = Jg(gT, MT), [lT, LT] = (0, WT.useState)(!1);
      return (0, JM.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, JM.jsx)(Wg, {
          kind: mT,
          def: zT,
          input: null,
          tier: null !== (UT = null === jT || void 0 === jT ? void 0 : jT.baf2PowerTier) && void 0 !== UT ? UT : 1
        }), (0, JM.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: kT("buildAFactory2Game:powerTitle")
        }), jT && (0, JM.jsx)(wg, {
          figures: xg(jT)
        }), !jT && (0, JM.jsx)(tg, {
          stored: nT,
          cap: HT,
          rates: null
        }), jT && (0, JM.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            LT(!lT)
          },
          "aria-expanded": lT,
          children: kT(lT ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), jT && lT && (0, JM.jsx)(ig, {
          message: jT
        })]
      })
    }
    const Xg = 2500,
      Ig = 17500,
      Qg = `${bT} `;
    const sg = ["plan", "throttle"];

    function Fg(TT) {
      if (TT.startsWith(`${xU} `)) return TT.slice(0, TT.lastIndexOf(" "));
      const UT = TT.split(" ");
      return UT[0] === jU && sg.includes(UT[4]) ? UT.slice(0, 5).join(" ") : null
    }
    class Pg {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = TT, this.now = UT, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.FzT = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = UT()
      }
      enqueue(TT) {
        this.queue(TT, this.nextTicket());
        const UT = this.FzT + this.pending.length;
        return this.flush(), UT
      }
      track(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const mT = this.nextTicket();
        if (!UT.urgent) return this.queue(TT, mT), this.flush(), mT;
        const {
          supersedes: WT
        } = UT;
        for (let MT = this.pending.length - 1; MT >= this.urgent; MT--) {
          const UT = this.pending[MT];
          (UT.command === TT || null !== WT && void 0 !== WT && WT(UT.command)) && (this.pending.splice(MT, 1), this.markLeft(UT.tickets))
        }
        const zT = this.pending.findIndex((UT => {
          let {
            command: mT
          } = UT;
          return mT === TT
        }));
        return -1 !== zT ? this.pending[zT].tickets.push(mT) : (this.pending.splice(this.urgent, 0, {
          command: TT,
          tickets: [mT]
        }), this.urgent += 1), this.flush(), mT
      }
      leftAt(TT) {
        const UT = this.leftTimes.get(TT);
        return void 0 !== UT ? UT : this.pending.some((UT => {
          let {
            tickets: mT
          } = UT;
          return mT.includes(TT)
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
        var UT;
        return (null === (UT = this.pending.at(-1)) || void 0 === UT ? void 0 : UT.command) === TT
      }
      sent() {
        return this.FzT
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
        const UT = this.now();
        for (const mT of TT) this.leftTimes.set(mT, UT);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(TT, UT) {
        const mT = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === mT || void 0 === mT ? void 0 : mT.command) === TT) return void(! function(TT) {
          return TT === OT || TT.startsWith(`${iT} `) || TT.startsWith(`${VT} `)
        }(TT) ? mT.tickets.push(UT) : (this.pending.pop(), this.markLeft([...mT.tickets, UT])));
        const WT = void 0 === mT ? null : kU(mT.command, TT);
        if (null !== WT && void 0 !== mT) return mT.command = WT, void mT.tickets.push(UT);
        const zT = Fg(TT);
        if (null !== zT && void 0 !== mT && Fg(mT.command) === zT) return mT.command = TT, void mT.tickets.push(UT);
        if (null !== mT && void 0 !== mT && mT.command.startsWith(Qg) && TT.startsWith(Qg)) {
          const WT = TT.slice(Qg.length);
          if (mT.command.slice(Qg.length).split(",").includes(WT)) return void mT.tickets.push(UT);
          const zT = `${mT.command},${WT}`;
          if (zT.length <= 119) return mT.command = zT, void mT.tickets.push(UT)
        }
        this.pending.push({
          command: TT,
          tickets: [UT]
        })
      }
      flush() {
        const TT = this.now();
        for (this.tokens = Math.min(5, this.tokens + (TT - this.refilledAt) / Xg), this.refilledAt = TT; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.FzT += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: TT,
            tickets: UT
          } = this.pending.shift();
          this.markLeft(UT), this.send(TT)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * Xg)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Vg {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new Pg(TT, UT)
      }
      send(TT) {
        return this.queue.enqueue(TT)
      }
      sent() {
        return this.queue.sent()
      }
      track(TT, UT) {
        return this.queue.track(TT, UT)
      }
      leftAt(TT) {
        return this.queue.leftAt(TT)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(TT) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = UT, this.send(TT), this.islandEdits.count
      }
      syncIslandEdits(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: mT
        } = this, WT = UT - mT.lastAtMs < Ig;
        mT.count = WT ? Math.max(mT.count, TT) : TT
      }
      clear() {
        this.queue.clear()
      }
    }
    const ug = (0, WT.createContext)(null);

    function Cg() {
      const TT = (0, WT.useContext)(ug);
      if (!TT) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return TT
    }

    function rg(TT, UT) {
      return null !== UT && void 0 !== UT ? UT : 1 === TT
    }

    function Kg(TT, UT) {
      return TT.every((TT => {
        var mT;
        let [WT, , zT] = TT;
        return !rg(zT, null === (mT = UT.get(WT)) || void 0 === mT ? void 0 : mT.Jp)
      }))
    }

    function Sg(TT, UT, mT) {
      if (0 === TT.size) return TT;
      const WT = new Map(TT);
      for (const [zT, MT] of TT) {
        const TT = UT.find((TT => {
          let [UT] = TT;
          return UT === zT
        }));
        (!TT || MT.Jp === (1 === TT[2]) || MT.atMs < mT) && WT.delete(zT)
      }
      return WT
    }

    function Gg(TT) {
      var UT;
      let {
        Kz: mT,
        input: zT,
        drops: MT,
        seconds: gT
      } = TT;
      const {
        t: nT
      } = (0, dz.z)(), HT = Cg(), [kT, jT] = (0, WT.useState)(new Map);
      (0, WT.useEffect)((() => {
        MT && jT((TT => Sg(TT, MT, Date.now() - Ig)))
      }), [MT]), (0, WT.useEffect)((() => {
        const TT = function(TT, UT) {
          let mT = null;
          for (const {
              atMs: WT
            }
            of TT.values()) mT = null === mT ? WT : Math.min(mT, WT);
          return null === mT ? null : mT + UT
        }(kT, Ig);
        if (null === TT || !MT) return;
        const UT = setTimeout((() => {
          jT((TT => Sg(TT, MT, Date.now() - Ig)))
        }), Math.max(0, TT - Date.now()) + 1);
        return () => {
          clearTimeout(UT)
        }
      }), [kT, MT]);
      const lT = KT(zT),
        LT = null !== lT && null !== MT && Kg(MT, kT),
        pT = function(TT, UT, mT) {
          return null === TT || null === UT || Kg(UT, mT) ? 0 : PT[sT[TT]]
        }(lT, MT, kT);
      return (0, JM.jsxs)(IM, {
        title: nT("buildAFactory2Game:farmDropsTitle", {
          seconds: gT
        }),
        count: null !== (UT = null === MT || void 0 === MT ? void 0 : MT.length) && void 0 !== UT ? UT : 0,
        children: [pT > 0 && (0, JM.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: nT("buildAFactory2Game:farmDropsPower", {
            power: String(pT)
          })
        }), (null === lT || !MT) && (0, JM.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: nT("buildAFactory2Game:farmDropsEmpty")
        }), LT && (0, JM.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: nT("buildAFactory2Game:farmDropsAllVoided")
        }), null !== lT && (null === MT || void 0 === MT ? void 0 : MT.map((TT => {
          var UT;
          let [WT, zT, MT] = TT;
          const gT = zT < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            lT = rg(MT, null === (UT = kT.get(WT)) || void 0 === UT ? void 0 : UT.Jp);
          return (0, JM.jsxs)("li", {
            className: ez()("Baf2Recipe Baf2FarmDrop", {
              Voided: !lT
            }),
            children: [(0, JM.jsx)(wM, {
              item: WT,
              amount: 1
            }), (0, JM.jsx)("span", {
              className: "Baf2RecipeName",
              children: zM(nT, WT)
            }), (0, JM.jsx)("span", {
              className: "Baf2FarmRate",
              children: nT(gT, {
                amount: String(zT)
              })
            }), (0, JM.jsx)("button", {
              type: "button",
              className: ez()("Baf2FarmToggle SmallTextBold", {
                Kept: lT
              }),
              "aria-pressed": lT,
              onClick: () => {
                jT(new Map(kT).set(WT, {
                  Jp: !lT,
                  atMs: Date.now()
                })), HT.send(function(TT, UT, mT, WT) {
                  return `${VT} ${TT} ${UT} ${mT} ${WT}`
                }(mT[0], mT[1], mT[2], WT))
              },
              children: nT(lT ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, WT)
        })))]
      })
    }
    var Ng;
    const Eg = String(null !== (Ng = IU.Synthesizer.waterPerOp) && void 0 !== Ng ? Ng : 0);

    function hg(TT) {
      let {
        Kz: UT,
        taught: mT
      } = TT;
      const {
        t: zT
      } = (0, dz.z)(), MT = Cg(), [gT, nT] = (0, WT.useState)(null);
      (0, WT.useEffect)((() => {
        null !== gT && mT === gT && nT(null)
      }), [gT, mT]);
      const HT = null !== gT && void 0 !== gT ? gT : mT;
      let kT = zT("buildAFactory2Game:synthPick");
      return null !== HT && (kT = zT("buildAFactory2Game:synthGrows", {
        name: zM(zT, HT),
        input: zM(zT, eU),
        water: Eg
      })), (0, JM.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, JM.jsx)("div", {
          className: ez()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === HT
          }),
          children: kT
        }), (0, JM.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: YU.map(((TT, mT) => {
            const WT = zM(zT, TT),
              gT = TT === HT;
            return (0, JM.jsx)("li", {
              children: (0, JM.jsx)("button", {
                type: "button",
                className: ez()("Baf2SynthTile", {
                  Selected: gT
                }),
                title: WT,
                "aria-label": WT,
                "aria-pressed": gT,
                onClick: () => {
                  gT || (nT(TT), MT.send(`${xU} ${UT[0]} ${UT[1]} ${UT[2]} ${mT}`))
                },
                children: (0, JM.jsx)(tz.b, {
                  itemName: TT,
                  amount: 0
                })
              })
            }, TT)
          }))
        })]
      })
    }
    const Dg = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function og(TT) {
      let {
        kind: UT,
        tier: mT,
        coupled: WT,
        level: zT,
        slot: MT
      } = TT;
      const {
        t: gT
      } = (0, dz.z)(), HT = DT(sU);
      if (!WT && null !== mT && mT < HT) return (0, JM.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, JM.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, JM.jsx)(wz.c, {
            name: "lock"
          })
        }), (0, JM.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: gT("buildAFactory2Game:upgradeLocked")
        }), (0, JM.jsx)("span", {
          className: "Baf2TierTag",
          children: gT("buildAFactory2Game:tierTag", {
            tier: String(HT)
          })
        })]
      });
      const kT = function(TT, UT) {
          if (nT() && "Crusher" !== TT && null !== UT) {
            if (Ag(PU, UT)) return {
              item: PU,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (Ag(FU, UT)) return {
              item: FU,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: sU,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(UT, mT),
        jT = gT(WT ? Dg[zT - 1] : kT.emptyKey),
        lT = null !== mT ? function(TT, UT, mT, WT) {
          if (!nT() || !mT || "Crusher" === TT || UT < 10) return null;
          const zT = DT(PU);
          if (WT < 3 && zT > 1 && (2 === WT || UT >= zT)) return {
            tier: zT,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const MT = DT(FU);
          if (1 === WT && MT > 1) return {
            tier: MT,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(UT, mT, WT, zT) : null;
      return (0, JM.jsxs)("div", {
        className: ez()("Baf2UpgradeSocket", {
          Fitted: WT
        }),
        children: [(0, JM.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [WT && MT, !WT && (0, JM.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, JM.jsx)(tz.b, {
              itemName: kT.item,
              amount: 0
            })
          })]
        }), (0, JM.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, JM.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: gT("buildAFactory2Game:upgradeTitle")
          }), (0, JM.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: jT
          }), WT && zT >= 2 && "Crusher" === UT && (0, JM.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: gT("buildAFactory2Game:couplerCrusherHint")
          }), lT && null !== mT && mT < lT.tier && (0, JM.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, JM.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, JM.jsx)(wz.c, {
                name: "lock"
              })
            }), gT(lT.lockedKey), (0, JM.jsx)("span", {
              className: "Baf2TierTag",
              children: gT("buildAFactory2Game:tierTag", {
                tier: String(lT.tier)
              })
            })]
          }), lT && null !== mT && mT >= lT.tier && (0, JM.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: gT(lT.nextKey)
          })]
        })]
      })
    }

    function Ag(TT, UT) {
      const mT = DT(TT);
      return mT > 1 && UT >= mT
    }
    var Rg = mT(37125);
    const Tn = (0, AT.G)(IU.Condenser, IU.Condenser.fluidMade),
      Un = .05;
    class mn extends eg {}

    function Wn(TT) {
      return fM(TT, "")
    }

    function zn(TT, UT, mT) {
      return TT(UT ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: mT
      })
    }

    function Mn(TT, UT, mT, WT) {
      return mT <= Un && WT <= Un ? null : WT <= Un || mT <= Un ? zn(TT, UT, WT <= Un ? fM(mT, "+") : fM(WT, "\u2212")) : TT(UT ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: Wn(mT),
        used: Wn(WT)
      })
    }

    function gn(TT, UT) {
      return Math.min(100, 100 * TT / Math.max(1, UT))
    }

    function nn(TT) {
      let {
        stored: UT,
        cap: mT,
        netPerS: WT,
        rates: zT,
        cryo: MT
      } = TT;
      const {
        t: gT
      } = (0, dz.z)(), nT = function(TT, UT, mT, WT) {
        return mT <= 0 ? TT("buildAFactory2Game:waterNoStorage") : UT >= mT ? TT("buildAFactory2Game:powerFull") : WT > Un ? TT("buildAFactory2Game:powerFullIn", {
          time: bM(TT, (mT - UT) / WT)
        }) : WT < -.05 ? UT <= 0 ? TT("buildAFactory2Game:waterEmpty") : TT("buildAFactory2Game:powerEmptyIn", {
          time: bM(TT, UT / -WT)
        }) : TT("buildAFactory2Game:powerSteady")
      }(gT, UT, mT, WT), HT = mT > 0 && UT < mT && Math.abs(WT) <= Un, kT = gT(MT ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), jT = null !== zT ? `${zT} \xb7 ${nT}` : HT ? kT : `${kT} \xb7 ${nT}`;
      return (0, JM.jsxs)(JM.Fragment, {
        children: [(0, JM.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, JM.jsx)("div", {
            style: {
              width: `${gn(UT,mT)}%`
            }
          })
        }), (0, JM.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, JM.jsx)("span", {
            children: mT > 0 && gT("buildAFactory2Game:powerStored", {
              stored: (0, AT.O)(UT),
              cap: (0, AT.O)(mT)
            })
          }), (0, JM.jsx)("span", {
            className: ez()("Baf2WaterNet", {
              Draining: WT < -.05
            }),
            children: jT
          })]
        })]
      })
    }

    function Hn(TT) {
      let {
        water: UT,
        at: mT,
        side: WT = null
      } = TT;
      const {
        t: zT
      } = (0, dz.z)(), MT = Cg(), [gT, nT, HT] = UT;
      return (0, JM.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, JM.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, JM.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: zT(null === WT ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${WT}`)
          }), (0, JM.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              MT.send(`${AT.B} ${mT[0]} ${mT[1]} ${mT[2]}${"cryoOut"===WT?" cryo":""}`)
            },
            children: zT("buildAFactory2Game:waterDetails")
          })]
        }), (0, JM.jsx)(nn, {
          stored: gT,
          cap: nT,
          netPerS: HT,
          rates: zn(zT, "cryoOut" === WT, fM(Math.abs(HT), HT < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === WT
        })]
      })
    }

    function kn(TT, UT) {
      var mT, WT, zT;
      const MT = !0 === UT.baf2WaterCryo,
        gT = null !== (mT = null === (WT = UT.baf2WaterMakers.find((TT => TT[0] === (MT ? AT.b : "Condenser")))) || void 0 === WT ? void 0 : WT[1]) && void 0 !== mT ? mT : 0,
        nT = [],
        HT = (UT, mT, WT) => {
          UT > 0 && nT.push(TT(1 === UT ? mT : WT, {
            count: String(UT)
          }))
        };
      return MT ? HT(gT, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : HT(gT, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), HT(null !== (zT = UT.baf2WaterPipes) && void 0 !== zT ? zT : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), HT(UT.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), nT.join(" \xb7 ")
    }

    function jn(TT, UT) {
      if (!0 === UT.baf2WaterCryo) return function(TT, UT) {
        const mT = IU[AT.b];
        switch (UT.baf2WaterThis) {
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
            var WT;
            const [zT, MT] = null !== (WT = UT.baf2WaterThisRates) && void 0 !== WT ? WT : [(0, AT.G)(mT, mT.cryoMade), (0, AT.G)(mT, mT.powerPerOp)];
            return !0 === UT.baf2WaterDriven ? {
              text: TT("buildAFactory2Game:cryoThisMixerDriven", {
                rate: Wn(zT)
              }),
              bad: !1
            } : {
              text: TT("buildAFactory2Game:cryoThisMixer", {
                rate: Wn(zT),
                power: Wn(MT)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: TT("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(TT, UT);
      const mT = !0 === UT.baf2WaterDriven,
        WT = IU.Condenser;
      switch (UT.baf2WaterThis) {
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
              tank: (0, AT.O)(AT.s),
              cap: (0, AT.O)(UT.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var zT;
          const [MT, gT] = null !== (zT = UT.baf2WaterThisRates) && void 0 !== zT ? zT : [Tn, (0, AT.G)(WT, WT.powerPerOp)];
          return mT ? {
            text: TT("buildAFactory2Game:waterThisCondenserDriven", {
              rate: Wn(MT)
            }),
            bad: !1
          } : {
            text: TT("buildAFactory2Game:waterThisCondenser", {
              rate: Wn(MT),
              power: Wn(gT)
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

    function Ln(TT, UT) {
      const mT = UT.baf2WaterMakers.some((TT => !0 === TT[5]));
      if (!0 === UT.baf2WaterCryo) {
        const WT = UT.baf2WaterUsedPerS - UT.baf2WaterMadePerS,
          zT = mT || WT <= Un ? 0 : (0, AT.E)(WT);
        return 0 === zT ? null : zT > 1 ? TT("buildAFactory2Game:cryoNextMixers", {
          mixers: String(zT)
        }) : TT("buildAFactory2Game:cryoNextOne")
      }
      const WT = mT ? null : function(TT, UT) {
        const mT = UT - TT;
        return mT <= Un ? null : Math.ceil(mT / Tn)
      }(UT.baf2WaterMadePerS, UT.baf2WaterUsedPerS);
      return null === WT ? null : WT > 1 ? TT("buildAFactory2Game:waterNextCondensers", {
        condensers: String(WT)
      }) : TT("buildAFactory2Game:waterNextOne")
    }

    function pn(TT) {
      let {
        item: UT,
        label: mT,
        note: WT,
        value: zT,
        dim: MT,
        bad: gT
      } = TT;
      return (0, JM.jsxs)("li", {
        className: ez()("Baf2WaterRow", {
          Dim: MT,
          Bad: gT
        }),
        children: [(0, JM.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, JM.jsx)(tz.b, {
            itemName: UT,
            amount: 0
          })
        }), (0, JM.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, JM.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: mT
          }), WT && (0, JM.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: WT
          })]
        }), (0, JM.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: zT
        })]
      })
    }

    function Bn(TT) {
      return Rg.n[TT] ? TT : "Reactor Port"
    }

    function Zn(TT) {
      let {
        message: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)(), WT = !0 === UT.baf2WaterCryo, zT = (TT, UT) => zn(mT, WT, fM(TT, UT));
      return (0, JM.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, JM.jsxs)("section", {
          children: [(0, JM.jsxs)("h3", {
            children: [mT("buildAFactory2Game:waterMakes"), (0, JM.jsx)("span", {
              children: zT(UT.baf2WaterMadePerS, "+")
            })]
          }), (0, JM.jsxs)("ul", {
            children: [0 === UT.baf2WaterMakers.length && (0, JM.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: mT(WT ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), UT.baf2WaterMakers.map((TT => {
              let [UT, WT, MT, gT, nT, HT] = TT;
              const kT = mT("buildAFactory2Game:powerRunning", {
                amount: String(MT)
              });
              let jT = nT > 0 ? mT("buildAFactory2Game:waterMakerPower", {
                running: kT,
                power: Wn(nT)
              }) : kT;
              return HT && (jT = mT(0 === MT && gT <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, JM.jsx)(pn, {
                item: UT,
                label: `${zM(mT,UT)} \xd7${WT}`,
                note: jT,
                value: MT > 0 || HT && gT > 0 ? zT(gT, "+") : mT("buildAFactory2Game:powerIdle"),
                dim: 0 === MT && !HT,
                bad: HT
              }, UT)
            }))]
          })]
        }), (0, JM.jsxs)("section", {
          children: [(0, JM.jsxs)("h3", {
            children: [mT("buildAFactory2Game:waterUses"), (0, JM.jsx)("span", {
              children: zT(UT.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, JM.jsxs)("ul", {
            children: [0 === UT.baf2WaterUsers.length && (0, JM.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: mT(WT ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), UT.baf2WaterUsers.map((TT => {
              let [UT, WT, MT, gT] = TT;
              const nT = Rg.n[UT] ? zM(mT, UT) : UT;
              return (0, JM.jsx)(pn, {
                item: Bn(UT),
                label: WT > 1 ? `${nT} \xd7${WT}` : nT,
                note: gT ? mT("buildAFactory2Game:waterPortFirst") : void 0,
                value: MT > 0 ? zT(MT, "\u2212") : mT("buildAFactory2Game:powerIdle"),
                dim: 0 === MT
              }, UT)
            }))]
          })]
        })]
      })
    }

    function cn(TT) {
      var UT, mT, zT, MT, gT;
      let {
        store: nT,
        close: HT
      } = TT;
      const {
        t: kT
      } = (0, dz.z)(), jT = function(TT) {
        const [UT, mT] = (0, WT.useState)((() => TT.get()));
        return (0, WT.useEffect)((() => (mT(TT.get()), TT.subscribe((() => {
          mT(TT.get())
        })))), [TT]), UT
      }(nT), lT = null !== (UT = null === jT || void 0 === jT ? void 0 : jT.baf2WaterStored) && void 0 !== UT ? UT : 0, LT = null !== (mT = null === jT || void 0 === jT ? void 0 : jT.baf2WaterCap) && void 0 !== mT ? mT : 0, pT = null !== (zT = null === jT || void 0 === jT ? void 0 : jT.baf2WaterMadePerS) && void 0 !== zT ? zT : 0, BT = null !== (MT = null === jT || void 0 === jT ? void 0 : jT.baf2WaterUsedPerS) && void 0 !== MT ? MT : 0, ZT = null !== (gT = null === jT || void 0 === jT ? void 0 : jT.baf2WaterNetPerS) && void 0 !== gT ? gT : pT - BT, cT = jT && jn(kT, jT), vT = jT && Ln(kT, jT), fT = !0 === (null === jT || void 0 === jT ? void 0 : jT.baf2WaterCryo);
      return (0, JM.jsx)(bg.e, {
        close: HT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, JM.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, JM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JM.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== jT && LT <= 0 ? (0, JM.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, JM.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, JM.jsx)(tz.b, {
                  itemName: fT ? Bm.h : AT.h,
                  amount: 0
                })
              }), (0, JM.jsxs)("div", {
                children: [(0, JM.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: kT(fT ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), jT && (0, JM.jsx)("p", {
                  children: kn(kT, jT)
                })]
              })]
            }), (0, JM.jsx)(Og.k, {
              onClick: HT
            })]
          }), jT && cT && (0, JM.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, JM.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, JM.jsx)(nn, {
                stored: lT,
                cap: LT,
                netPerS: ZT,
                cryo: fT,
                rates: Mn(kT, fT, pT, BT)
              })
            }), (0, JM.jsx)("div", {
              className: ez()("Baf2WaterThis", {
                Bad: cT.bad
              }),
              children: cT.text
            }), jT.baf2WaterDriven && (0, JM.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, JM.jsx)(wz.c, {
                name: "bolt"
              }), kT(fT ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), vT && (0, JM.jsx)("p", {
              className: "Baf2WaterNext",
              children: vT
            }), (0, JM.jsx)(Zn, {
              message: jT
            })]
          })]
        })
      })
    }
    class vn {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(TT, UT) {
        const mT = this.get(TT);
        mT && null === UT.opLeftMs && null === UT.fuelLeftMs && UT.status === mT.status ? UT = {
          ...UT,
          opLeftMs: mT.opLeftMs,
          fuelLeftMs: mT.fuelLeftMs,
          burning: mT.burning
        } : this.updates++, this.pos = TT, this.view = UT;
        for (const WT of this.listeners) WT()
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

    function fn(TT, UT, mT, WT) {
      return "noFuel" === UT && WT && !zm(IU[TT]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === UT && !0 === (null === mT || void 0 === mT ? void 0 : mT.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === UT && !0 === (null === mT || void 0 === mT ? void 0 : mT.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === UT && !0 === (null === mT || void 0 === mT ? void 0 : mT.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === UT && !0 === (null === mT || void 0 === mT ? void 0 : mT.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : qn(UT, mT) ? "buildAFactory2Game:machineStatus_noInputShort" : function(TT, UT) {
        const mT = IU[TT];
        if ("noFuel" === UT && void 0 !== mT.fuels) return zm(mT) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (mT.mobFarm && ("noInput" === UT || "badInput" === UT)) return `buildAFactory2Game:machineStatus_${UT}MobFarm`;
        if ("outputFull" === UT && (void 0 !== mT.table || mT.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === UT && NU(mT)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== mT.cryoMade && ("noInput" === UT || "noOutlet" === UT || "fluidFull" === UT)) return `buildAFactory2Game:machineStatus_${UT}Mixer`;
        return `buildAFactory2Game:machineStatus_${UT}`
      }(TT, UT)
    }

    function qn(TT, UT) {
      return "noInput" === TT && null !== UT && void 0 !== UT && UT.input && UT.inputShort ? {
        input: UT.input,
        short: UT.inputShort
      } : null
    }

    function bn(TT) {
      return Yz(TT) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== TT.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function On(TT) {
      const UT = (0, IT._e)(TT);
      return `Baf2Pane Baf2Pane${UT.charAt(0).toUpperCase()}${UT.slice(1)}`
    }

    function en(TT, UT) {
      const [mT, zT] = (0, WT.useState)((() => TT.get(UT)));
      return (0, WT.useEffect)((() => {
        zT(TT.get(UT));
        const mT = TT.subscribe((() => {
          zT(TT.get(UT))
        }));
        return () => {
          mT(), TT.forget(UT)
        }
      }), [TT, ...UT]), mT
    }

    function Yn(TT, UT, mT, WT) {
      const zT = IU[TT],
        MT = UT && zT.couplable ? rU(zT, mT) : zT,
        gT = null !== WT && Um(MT) ? function(TT, UT) {
          var mT;
          return null !== (mT = null !== UT && Um(TT) ? nm[UT] : void 0) && void 0 !== mT ? mT : TT.opMs
        }(MT, Hm(WT)) : MT.opMs;
      return gT === MT.opMs ? MT : {
        ...MT,
        opMs: gT
      }
    }

    function Jn(TT) {
      let {
        running: UT,
        opMs: mT,
        opLeftMs: WT,
        updateCount: zT
      } = TT;
      return (0, JM.jsx)("div", {
        className: ez()("Baf2MachineProgress", {
          Running: UT
        }),
        children: (0, JM.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: mT / 1e3 + "s",
            animationDelay: null === WT ? void 0 : (WT - mT) / 1e3 + "s"
          }
        }, zT)
      })
    }

    function xn(TT) {
      let {
        running: UT,
        leftMs: mT,
        periodMs: WT,
        updateCount: zT
      } = TT;
      const {
        t: MT
      } = (0, dz.z)(), gT = Math.min(Math.max(null !== mT && void 0 !== mT ? mT : 0, 0), WT), nT = UT && gT > 0, HT = MT("buildAFactory2Game:machineBarFuel");
      return (0, JM.jsx)("div", {
        className: ez()("Baf2FuelBurn", {
          Draining: nT
        }),
        role: "img",
        title: HT,
        "aria-label": HT,
        children: (0, JM.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: nT ? {
            animationDuration: WT / 1e3 + "s",
            animationDelay: (gT - WT) / 1e3 + "s"
          } : {
            transform: `scaleY(${gT/WT})`
          }
        }, zT)
      })
    }

    function dn(TT, UT, mT) {
      let [WT, zT] = mT;
      const MT = 1 !== WT ? xz(UT) : null;
      return {
        amount: WT,
        have: zT,
        item: TT(MT || WM(UT))
      }
    }

    function wn(TT) {
      return Um(TT) ? "buildAFactory2Game:machineBarMining" : mm(TT) ? "buildAFactory2Game:machineBarCutting" : void 0 !== TT.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function tn(TT) {
      var UT, mT, WT, zT, MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT, vT, fT, qT;
      let {
        kind: iT,
        Kz: bT,
        store: OT,
        power: eT,
        renderSlot: YT
      } = TT;
      const {
        t: JT
      } = (0, dz.z)(), xT = en(OT, bT), dT = IU[iT], wT = null !== (UT = null === xT || void 0 === xT ? void 0 : xT.coupled) && void 0 !== UT && UT, tT = null !== (mT = null === xT || void 0 === xT ? void 0 : xT.couplerLevel) && void 0 !== mT ? mT : 1, aT = Yn(iT, wT, tT, null !== (WT = null === xT || void 0 === xT || null === (zT = xT.dug) || void 0 === zT ? void 0 : zT.item) && void 0 !== WT ? WT : null), yT = null !== (MT = null === xT || void 0 === xT ? void 0 : xT.status) && void 0 !== MT ? MT : null, XT = null !== (gT = null === xT || void 0 === xT ? void 0 : xT.power) && void 0 !== gT ? gT : null, IT = null !== (nT = null === xT || void 0 === xT ? void 0 : xT.opLeftMs) && void 0 !== nT ? nT : null, QT = null !== (HT = null === xT || void 0 === xT ? void 0 : xT.dug) && void 0 !== HT ? HT : null, sT = null !== QT && Um(dT) ? nm[null !== (kT = Hm(QT.item)) && void 0 !== kT ? kT : ""] : void 0, FT = void 0 === sT ? null : 6e4 / sT, PT = null !== (jT = null === xT || void 0 === xT ? void 0 : xT.powerCap) && void 0 !== jT ? jT : 4e3, VT = null !== (lT = null === xT || void 0 === xT ? void 0 : xT.tier) && void 0 !== lT ? lT : null, uT = void 0 !== aT.powerMade, CT = null !== dT.fuelSlot ? YT(dT.fuelSlot) : null, rT = CU(dT), KT = !wT && !0 === (null === xT || void 0 === xT ? void 0 : xT.fuelFed), GT = !wT && !0 === (null === xT || void 0 === xT ? void 0 : xT.fuelFeeds), NT = null !== dT.fuelSlot && !wT, ET = null !== (LT = null === xT || void 0 === xT ? void 0 : xT.fuelLeftMs) && void 0 !== LT ? LT : null, hT = function(TT, UT, mT) {
        var WT;
        const zT = null === UT ? void 0 : Mm[UT];
        return Math.max(null !== (WT = null !== zT && void 0 !== zT ? zT : mT) && void 0 !== WT ? WT : 0, TT.opMs)
      }(aT, null !== (pT = null === xT || void 0 === xT ? void 0 : xT.burning) && void 0 !== pT ? pT : null, ET), DT = null !== (BT = null === xT || void 0 === xT ? void 0 : xT.fuelKeep) && void 0 !== BT ? BT : null, oT = null === yT ? null : fn(iT, yT, xT, KT), AT = null === yT ? null : qn(yT, xT);
      return (0, JM.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, JM.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, JM.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: JT(WM(iT))
          }), QT && (0, JM.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [JT("Tree Cutter" === iT ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, JM.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, JM.jsx)(tz.b, {
                itemName: QT.item,
                amount: 0
              })
            }), (0, JM.jsx)(az.e, {
              text: QT.name
            })]
          }), null !== FT && (0, JM.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: JT("buildAFactory2Game:machineDigsFixed", {
              perMin: String(FT)
            })
          }), (null === xT || void 0 === xT ? void 0 : xT.field) && (0, JM.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, JM.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, JM.jsx)(tz.b, {
                itemName: "Wheat",
                amount: 0
              })
            }), JT("buildAFactory2Game:machineField", {
              planted: String(xT.field[0]),
              ripe: String(xT.field[1])
            })]
          }), (0, JM.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, JM.jsxs)("div", {
              className: ez()("Baf2MachineColumn", {
                Baf2Burns: NT
              }),
              children: [null !== aT.inputSlot && (0, JM.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, JM.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: JT(bn(aT))
                }), YT(aT.inputSlot)]
              }), null !== dT.fuelSlot && !wT && (0, JM.jsxs)("div", {
                className: ez()("Baf2MachineSlot", {
                  Baf2FuelFed: KT
                }),
                children: [(0, JM.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [KT && (0, JM.jsx)(wz.c, {
                    name: "fire"
                  }), JT("buildAFactory2Game:machineFuel")]
                }), (0, JM.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, JM.jsx)(xn, {
                    running: "running" === yT,
                    leftMs: ET,
                    periodMs: hT,
                    updateCount: OT.updateCount
                  }), CT]
                })]
              }), null !== dT.fuelSlot && wT && (0, JM.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, JM.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: JT("buildAFactory2Game:machineFuel")
                }), (0, JM.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: JT("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": JT("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, JM.jsx)(wz.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, JM.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, JM.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: JT(wn(aT))
              }), (0, JM.jsx)(Jn, {
                running: "running" === yT,
                opMs: aT.opMs,
                opLeftMs: IT,
                updateCount: OT.updateCount
              })]
            }), aT.outputSlots.length > 0 && (0, JM.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, JM.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: JT("buildAFactory2Game:machineOutput")
              }), (0, JM.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: aT.outputSlots.map((TT => (0, JM.jsx)("div", {
                  children: YT(TT)
                }, TT)))
              })]
            }), null !== XT && uT && (0, JM.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, JM.jsx)("div", {
                style: {
                  height: 100 * XT / PT + "%"
                }
              })
            })]
          }), NT && null !== DT && (0, JM.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, JM.jsx)(wz.c, {
              name: "arrows-rotate"
            }), JT(mm(aT) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(DT)
            })]
          }), (KT || GT) && (0, JM.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, JM.jsx)(wz.c, {
              name: "fire"
            }), JT(KT ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), dT.couplable && (0, JM.jsx)(og, {
            kind: iT,
            tier: VT,
            coupled: wT,
            level: tT,
            slot: rT === dT.fuelSlot ? CT : null !== rT ? YT(rT) : null
          }), null !== XT && !uT && !0 === (null === xT || void 0 === xT ? void 0 : xT.reactorPowered) && (0, JM.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: JT("buildAFactory2Game:machineReactorPowered")
          }), null !== XT && !uT && !0 !== (null === xT || void 0 === xT ? void 0 : xT.reactorPowered) && (0, JM.jsx)(tg, {
            stored: XT,
            cap: PT,
            rates: null !== (ZT = null === xT || void 0 === xT ? void 0 : xT.powerRates) && void 0 !== ZT ? ZT : null
          }), (null === xT || void 0 === xT ? void 0 : xT.water) && (0, JM.jsx)(Hn, {
            water: xT.water,
            at: bT,
            side: xT.cryo ? "waterIn" : null
          }), (null === xT || void 0 === xT ? void 0 : xT.cryo) && (0, JM.jsx)(Hn, {
            water: xT.cryo,
            at: bT,
            side: "cryoOut"
          }), null !== xT && void 0 !== xT && xT.inertCoupler ? (0, JM.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: JT("buildAFactory2Game:machineStatus_couplerOff", {
              item: zM(JT, xT.inertCoupler)
            })
          }) : null !== oT && (0, JM.jsx)("div", {
            className: ez()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== yT
            }),
            children: JT(oT, AT ? dn(JT, AT.input, AT.short) : void 0)
          })]
        }), (0, JM.jsxs)("div", {
          className: ez()("Baf2MachineSide", {
            Baf2SynthSide: NU(dT)
          }),
          children: [NU(dT) && (0, JM.jsx)(hg, {
            Kz: bT,
            taught: null !== (cT = null === xT || void 0 === xT ? void 0 : xT.taught) && void 0 !== cT ? cT : null
          }, bT.join(",")), uT && (0, JM.jsx)(yg, {
            kind: iT,
            def: aT,
            Kz: bT,
            power: eT,
            stored: null !== XT && void 0 !== XT ? XT : 0,
            cap: PT
          }), ST(dT) && (0, JM.jsx)(Gg, {
            Kz: bT,
            input: null !== (vT = null === xT || void 0 === xT ? void 0 : xT.input) && void 0 !== vT ? vT : null,
            drops: null !== (fT = null === xT || void 0 === xT ? void 0 : xT.farm) && void 0 !== fT ? fT : null,
            seconds: String(aT.opMs / 1e3)
          }), !uT && !ST(dT) && !NU(dT) && (0, JM.jsx)(Wg, {
            kind: iT,
            def: aT,
            input: null !== (qT = null === xT || void 0 === xT ? void 0 : xT.input) && void 0 !== qT ? qT : null,
            tier: null !== VT && void 0 !== VT ? VT : 1,
            noSeeds: !0 === (null === xT || void 0 === xT ? void 0 : xT.noSeeds)
          })]
        })]
      })
    }

    function an(TT, UT, mT, WT) {
      var zT;
      const MT = IU[TT],
        gT = [MT.inputSlot, MT.fuelSlot, ...null !== (zT = MT.inputSlots) && void 0 !== zT ? zT : []].filter((TT => null !== TT));
      return {
        render: zT => {
          let {
            Kz: MT,
            renderSlot: gT
          } = zT;
          return (0, JM.jsx)(ug.Provider, {
            value: WT,
            children: (0, JM.jsx)(tn, {
              kind: TT,
              Kz: MT,
              store: UT,
              power: mT,
              renderSlot: gT
            })
          })
        },
        quickMoveRange: gT.length > 0 ? [Math.min(...gT), Math.max(...gT) + 1] : [0, 0],
        className: On(TT)
      }
    }
    const yn = "Assembler";

    function Xn(TT) {
      var UT, mT, WT, zT, MT, gT, nT, HT, kT;
      let {
        Kz: jT,
        store: lT,
        renderSlot: LT
      } = TT;
      const {
        t: pT
      } = (0, dz.z)(), BT = en(lT, jT), ZT = null !== (UT = null === BT || void 0 === BT ? void 0 : BT.tier) && void 0 !== UT ? UT : 1, cT = null !== (mT = null === BT || void 0 === BT ? void 0 : BT.taught) && void 0 !== mT ? mT : null, vT = oU(yn, {
        coupled: !1,
        taught: cT
      }), fT = null !== (WT = vT.bench) && void 0 !== WT ? WT : null, qT = null !== (zT = null === BT || void 0 === BT ? void 0 : BT.status) && void 0 !== zT ? zT : null, iT = null !== (MT = null === BT || void 0 === BT ? void 0 : BT.power) && void 0 !== MT ? MT : null, bT = null !== (gT = null === BT || void 0 === BT ? void 0 : BT.powerCap) && void 0 !== gT ? gT : 4e3;
      return (0, JM.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, JM.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, JM.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: pT(WM(yn))
          }), fT && (0, JM.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [pT("buildAFactory2Game:benchMakes"), (0, JM.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, JM.jsx)(tz.b, {
                itemName: fT.output,
                amount: 0
              })
            }), (null === BT || void 0 === BT ? void 0 : BT.taughtName) && (0, JM.jsx)(az.e, {
              text: BT.taughtName
            }), fT.outputAmount > 1 && (0, JM.jsxs)("span", {
              children: ["\xd7", fT.outputAmount]
            })]
          }), !fT && (0, JM.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: pT("buildAFactory2Game:benchTeachHint")
          }), (0, JM.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, JM.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (nT = vT.inputSlots) && void 0 !== nT ? nT : []).map(((TT, UT) => {
                const mT = null === fT || void 0 === fT ? void 0 : fT.inputs[UT];
                return (0, JM.jsxs)("div", {
                  className: ez()("Baf2BenchInput", {
                    Spare: !mT
                  }),
                  children: [(0, JM.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [LT(TT), mT && (0, JM.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, JM.jsx)(tz.b, {
                        itemName: mT.item,
                        amount: 0
                      })
                    })]
                  }), (0, JM.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: mT ? `\xd7${mT.amount}` : "\xa0"
                  })]
                }, TT)
              }))
            }), (0, JM.jsx)(Jn, {
              running: "running" === qT,
              opMs: vT.opMs,
              opLeftMs: null !== (HT = null === BT || void 0 === BT ? void 0 : BT.opLeftMs) && void 0 !== HT ? HT : null,
              updateCount: lT.updateCount
            }), (0, JM.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, JM.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: pT("buildAFactory2Game:machineOutput")
              }), (0, JM.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: vT.outputSlots.map((TT => (0, JM.jsx)("div", {
                  children: LT(TT)
                }, TT)))
              })]
            })]
          }), null !== iT && (0, JM.jsx)(tg, {
            stored: iT,
            cap: bT,
            rates: null !== (kT = null === BT || void 0 === BT ? void 0 : BT.powerRates) && void 0 !== kT ? kT : null
          }), null !== qT && (0, JM.jsx)("div", {
            className: ez()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== qT
            }),
            children: pT(fn(yn, qT, BT, !1))
          }), fT && fT.inputs.length > 1 && (0, JM.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: pT("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, JM.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, JM.jsx)(Mg, {
            taught: cT,
            tier: ZT
          }), fT && (0, JM.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: pT("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function In(TT) {
      var UT;
      const mT = null !== (UT = IU[yn].inputSlots) && void 0 !== UT ? UT : [];
      return {
        render: UT => {
          let {
            Kz: mT,
            renderSlot: WT
          } = UT;
          return (0, JM.jsx)(Xn, {
            Kz: mT,
            store: TT,
            renderSlot: WT
          })
        },
        quickMoveRange: [Math.min(...mT), Math.max(...mT) + 1],
        className: On(yn)
      }
    }
    var Qn = mT(102),
      sn = mT(1225),
      Fn = mT(4328);
    const Pn = 600,
      Vn = .5,
      un = 4,
      Cn = 1200,
      rn = 140,
      Kn = 100,
      Sn = 32,
      Gn = 16,
      Nn = 100.5,
      En = 90,
      hn = 1.5,
      Dn = 50;

    function An(TT) {
      switch (ym(TT)) {
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
    const Rn = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function TH(TT) {
      const UT = Math.ceil(60 * TT / Kn);
      return {
        fuel: Math.max(Sn, UT),
        waste: Math.max(Gn, UT)
      }
    }

    function UH(TT, UT, mT) {
      const [WT, zT, MT] = [TT - 2, UT - 2, mT - 2];
      return 2 * (WT * zT + zT * MT + MT * WT) * rn
    }

    function mH(TT, UT, mT) {
      return Math.max(0, TT - 2) * Math.max(0, UT - 2) * Math.max(0, mT - 2)
    }

    function WH(TT, UT) {
      const [mT, WT, zT] = TT, MT = mT * WT * zT, gT = new Float32Array(MT);
      let nT = 0,
        HT = 0,
        kT = 0,
        jT = 0,
        lT = 0;
      const LT = (TT, MT, gT) => TT < 0 || TT >= mT || MT < 0 || MT >= WT || gT < 0 || gT >= zT ? 0 : UT[(MT * zT + gT) * mT + TT];
      for (let cT = 0; cT < WT; cT++)
        for (let TT = 0; TT < zT; TT++)
          for (let WT = 0; WT < mT; WT++) {
            const MT = (cT * zT + TT) * mT + WT,
              pT = UT[MT];
            if (1 === pT) {
              nT++;
              let UT = 0;
              for (const [mT, zT, MT] of Rn) {
                const gT = LT(WT + mT, cT + zT, TT + MT);
                1 !== gT && 2 !== gT || UT++
              }
              gT[MT] = Pn * (1 + Vn * Math.min(UT, un)), jT += gT[MT]
            } else if (2 === pT) HT++;
            else if (3 === pT) {
              kT++;
              Rn.some((UT => {
                let [mT, zT, MT] = UT;
                return 1 === LT(WT + mT, cT + zT, TT + MT)
              })) && (lT += Cn)
            }
          }
      const pT = UH(mT + 2, WT + 2, zT + 2),
        BT = Math.min(jT, lT, pT),
        ZT = nT > 0 ? jT * Kn / nT : 0;
      return {
        rods: nT,
        graphite: HT,
        channels: kT,
        fuelHeat: jT,
        cooling: lT,
        size: pT,
        max: BT,
        vol: MT,
        powerPerUnit: ZT,
        pelletsPerMin: ZT > 0 ? BT / ZT * 60 : 0,
        waterPerS: BT * AT.o,
        rodHeat: gT
      }
    }
    const zH = 0,
      MH = 1,
      gH = 6,
      nH = 7,
      HH = 8;

    function kH(TT, UT) {
      const [mT, WT, zT] = TT, MT = new Uint8Array(mT * WT * zT), gT = (TT, MT, gT) => TT < 0 || TT >= mT || MT < 0 || MT >= WT || gT < 0 || gT >= zT ? 0 : UT[(MT * zT + gT) * mT + TT];
      for (let nT = 0; nT < WT; nT++)
        for (let TT = 0; TT < zT; TT++)
          for (let WT = 0; WT < mT; WT++) {
            const HT = (nT * zT + TT) * mT + WT,
              kT = UT[HT];
            if (1 === kT) {
              let UT = 0;
              for (const [mT, zT, MT] of Rn) {
                const HT = gT(WT + mT, nT + zT, TT + MT);
                UT += 1 === HT || 2 === HT ? 1 : 0
              }
              MT[HT] = MH + Math.min(UT, un)
            } else if (3 === kT) {
              const UT = Rn.some((UT => {
                let [mT, zT, MT] = UT;
                return 1 === gT(WT + mT, nT + zT, TT + MT)
              }));
              MT[HT] = UT ? gH : nH
            } else 2 === kT && (MT[HT] = HH)
          }
      return MT
    }

    function jH(TT) {
      return TT.fuelHeat <= TT.cooling && TT.fuelHeat <= TT.size ? "fuel" : TT.cooling <= TT.size ? "cooling" : "size"
    }
    const lH = En;

    function LH(TT, UT, mT) {
      return Math.round(TT * UT * mT * 25e3 * (1 + .25 * (Math.min(TT, UT, mT) - 2)))
    }

    function pH(TT) {
      return Math.max(0, Math.min(AT.f, TT))
    }

    function BH(TT, UT, mT) {
      const WT = UT * pH(mT);
      return TT <= 0 ? 0 : WT > 0 ? Math.min(200, 100 * TT / WT) : 200
    }

    function ZH(TT, UT) {
      const mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? hn : 1;
      return Math.min(TT.fuelHeat * mT, TT.cooling * pH(UT), TT.size * mT)
    }

    function cH(TT) {
      return 2 + TT / 10
    }
    const vH = "buildAFactory2Game:";

    function fH(TT) {
      var UT;
      return null !== (UT = TT.baf2RxMood) && void 0 !== UT ? UT : function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const mT = [
          ["calm", 50],
          ["warm", lH],
          ["hot", Nn]
        ];
        for (const [WT, zT] of mT)
          if (TT < zT + (WT === UT ? 3 : 0)) return WT;
        return "alarm"
      }(TT.baf2RxHeat)
    }
    const qH = 120;

    function iH(TT) {
      const UT = TT.baf2RxState;
      if ("running" === UT && TT.baf2RxHeat > Nn) return {
        label: `${vH}rxState_tooHot`,
        tone: "bad",
        fix: `${vH}rxFix_tooHot`
      };
      switch (UT) {
        case "running":
          return {
            label: `${vH}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${vH}rxState_idle`, tone: "off", fix: `${vH}rxFix_idle`
          };
        case "scram":
          return {
            label: `${vH}rxState_scram`, tone: "off", fix: TT.baf2RxHeat < Dn ? `${vH}rxFix_scramCool` : `${vH}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${vH}rxState_${UT}`, tone: "off", fix: `${vH}rxFix_${UT}`
          };
        case "melted":
          return {
            label: `${vH}rxState_melted`, tone: "bad", fix: `${vH}rxFix_melted`
          };
        default:
          return {
            label: `${vH}rxState_${UT}`, tone: "warn", fix: `${vH}rxFix_${UT}`
          }
      }
    }

    function bH(TT) {
      const [UT, mT, WT] = TT.baf2RxStats;
      return {
        fuelHeat: UT,
        cooling: mT * (TT.baf2RxCryo ? Math.max(1, pH(TT.baf2RxWater / 100)) : 1),
        size: WT
      }
    }

    function OH(TT) {
      var UT;
      const mT = "idle" === TT.baf2RxState || "running" === TT.baf2RxState && TT.baf2RxHeat <= Nn || "scram" === TT.baf2RxState && TT.baf2RxHeat < Dn;
      if (0 === (TT.baf2RxFlags & iU) || !TT.baf2RxFormed || !mT) return null;
      const {
        fuelHeat: WT,
        cooling: zT,
        size: MT
      } = bH(TT), gT = Math.min(WT, zT, MT), nT = jH({
        fuelHeat: WT,
        cooling: zT,
        size: MT
      }), HT = "cooling" === nT && !0 === TT.baf2RxCryoOpen && !TT.baf2RxCryo, kT = null !== (UT = TT.baf2RxCells) && void 0 !== UT ? UT : "", jT = ("fuel" === nT || "cooling" === nT && !0 === TT.baf2RxCryo) && kT.length > 0 && !kT.includes(String(0)), lT = HT ? "Cryo" : "scram" === TT.baf2RxState ? "Off" : "";
      return gT < 12e3 ? {
        key: `${vH}rxGrow_${jT?"full":nT}${lT}`,
        amount: gT
      } : null
    }

    function eH(TT, UT) {
      return TT[0] === UT[0] && TT[1] === UT[1] && TT[2] === UT[2]
    }

    function YH(TT) {
      return [...TT].sort(((TT, UT) => Number(UT[2] < UT[1]) - Number(TT[2] < TT[1])))
    }

    function JH(TT, UT) {
      return UT.some((UT => {
        let [mT, WT] = UT;
        return !(WT <= 0) && ["edge", "cap", "wall", "inside"].some((UT => mT === gW(TT, UT)))
      }))
    }

    function xH(TT, UT, mT) {
      const WT = TT.baf2RxFuel - TT.baf2RxPu > 0 ? mT : 0;
      return {
        full: TT.baf2RxWaste > UT - 3,
        fullInS: WT > 0 ? Math.max(0, UT - TT.baf2RxWaste) / WT : null
      }
    }
    const dH = {
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

    function wH(TT) {
      return tH[TT]
    }
    const tH = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function aH(TT) {
      let [UT, mT, WT] = TT;
      return Math.ceil(UH(UT, mT, WT) * AT.o)
    }

    function yH(TT, UT) {
      return "battery" === TT ? UT[0] * UT[1] * UT[2] : function(TT) {
        let [UT, mT, WT] = TT;
        return UT * mT * WT - Math.max(0, UT - 2) * Math.max(0, mT - 2) * Math.max(0, WT - 2)
      }(UT) - 1
    }

    function XH(TT) {
      const UT = Math.max(0, TT);
      if (UT < 10) return String(Math.round(10 * UT) / 10);
      if (UT < 1e4) return Math.round(UT).toLocaleString("en-US");
      if (UT < 1e6) return `${UT<1e5?(Math.floor(UT/100)/10).toFixed(1):Math.floor(UT/1e3)}k`;
      const mT = UT / 1e6;
      return `${mT<10?(Math.floor(100*mT)/100).toFixed(2):mT<100?(Math.floor(10*mT)/10).toFixed(1):Math.floor(mT)}M`
    }

    function IH(TT) {
      return TT <= 0 ? "0" : TT >= 10 ? String(Math.round(TT)) : TT.toFixed(TT >= 1 ? 1 : 2)
    }

    function QH(TT) {
      const UT = Rm(TT, 0),
        mT = Rm(TT, hm(TT) - 1);
      return {
        lo: [Math.min(UT[0], mT[0]), Math.min(UT[1], mT[1]), Math.min(UT[2], mT[2])],
        hi: [Math.max(UT[0], mT[0]) + 1, Math.max(UT[1], mT[1]) + 1, Math.max(UT[2], mT[2]) + 1]
      }
    }

    function sH(TT, UT, mT) {
      const WT = [UT[0] - TT[0], UT[1] - TT[1], UT[2] - TT[2]],
        zT = [(TT[0] + UT[0]) / 2, (TT[1] + UT[1]) / 2, (TT[2] + UT[2]) / 2],
        MT = [];
      for (let gT = 0; gT < 3; gT++) {
        const nT = (gT + 1) % 3,
          HT = (gT + 2) % 3;
        for (const kT of [TT[nT], UT[nT]])
          for (const jT of [TT[HT], UT[HT]]) {
            const TT = [0, 0, 0],
              UT = [mT, mT, mT];
            TT[gT] = zT[gT], UT[gT] = WT[gT] + mT, TT[nT] = kT, TT[HT] = jT, MT.push([TT, UT])
          }
      }
      return MT
    }
    const FH = "buildAFactory2Game:",
      PH = [`${FH}colNorth`, `${FH}colEast`, `${FH}colSouth`, `${FH}colWest`];

    function VH(TT, UT) {
      const [mT, WT, zT] = TT.baf2ColAt;
      return `baf2col ${mT} ${WT} ${zT} ${UT}`
    }

    function uH(TT) {
      return function(TT) {
        if (!Number.isFinite(TT)) return "";
        const UT = Math.max(1, Math.round(TT));
        if (UT < 60) return `${UT}s`;
        const mT = UT % 60;
        return 0 === mT ? UT / 60 + "m" : `${Math.floor(UT/60)}m ${mT}s`
      }(function(TT) {
        const UT = nW.FOCUS_BY_LASERS[Math.max(0, Math.min(4, TT))];
        return UT > 0 ? nW.NOVA_FOCUS / UT : 1 / 0
      }(TT))
    }

    function CH(TT) {
      const UT = Math.abs(Math.round(TT));
      return UT < 1e3 ? Math.round(TT).toLocaleString("en-US") : UT < 1e6 ? `${UT<1e5?(TT/1e3).toFixed(1).replace(/\.0$/,""):Math.round(TT/1e3)}k` : `${(TT/1e6).toFixed(UT<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function rH(TT, UT, mT) {
      if (pW(UT) >= 0) {
        const UT = function(TT, UT) {
          return TT.find((TT => {
            let {
              focus: mT
            } = TT;
            return mT[0] === UT[0] && mT[2] === UT[2] && (UT[1] === mT[1] || UT[1] === mT[1] - 1)
          }))
        }(TT, mT);
        if (!UT) return null;
        const zT = function(TT) {
          let UT = 0,
            mT = 0;
          for (let WT = 0; WT < 4; WT++) UT += TT.laser[WT] ? 1 : 0, mT += TT.live[WT] ? 1 : 0;
          return {
            lasers: UT,
            live: mT,
            focusPerS: nW.FOCUS_BY_LASERS[mT],
            drawPerS: nW.LASER_DRAW * mT
          }
        }({
          laser: UT.lasers,
          live: UT.live
        });
        if (0 === zT.lasers || "noLasers" === UT.state) return {
          key: `${FH}lookColNoLasers`
        };
        if (0 === zT.live) return {
          key: `${FH}lookColOff_blocked`
        };
        if (!(UT.on && zT.live > 0) && ("running" !== (WT = UT.state) && "slowed" !== WT)) return {
          key: `${FH}lookColOff_${UT.state}`
        };
        if (zT.live < zT.lasers) return {
          key: `${FH}lookColLasersSome`,
          params: {
            lasers: String(zT.lasers),
            live: String(zT.live)
          }
        };
        const MT = UT.open.filter(Boolean).length;
        return MT < 4 ? {
          key: `${FH}lookColLasersSpots`,
          params: {
            live: String(zT.live),
            spots: String(MT),
            time: uH(zT.live)
          }
        } : {
          key: `${FH}lookColLasers`,
          params: {
            live: String(zT.live),
            time: uH(zT.live)
          }
        }
      }
      var WT;
      if (!BW(UT)) return null;
      const zT = function(TT, UT) {
        for (const mT of TT) {
          const TT = fW(mT.focus, [UT[0], UT[1], UT[2]]);
          if (TT && TT.sg === nW.LASER_D && mT.lasers[TT.dir]) return {
            entry: mT,
            dir: TT.dir
          }
        }
        return null
      }(TT, mT);
      if (!zT) return {
        key: `${FH}lookLaserNoCollider`
      };
      const {
        entry: MT,
        dir: gT
      } = zT;
      return MT.open[gT] ? MT.live[gT] ? {
        key: MT.on ? `${FH}lookLaserFiring` : `${FH}lookLaserReady`
      } : {
        key: `${FH}lookLaserBlocked`
      } : {
        key: `${FH}lookLaserClosed`
      }
    }

    function KH(TT, UT) {
      const mT = [];
      for (let WT = 1; WT < nW.LASER_D; WT++) TT & 1 << UT * (nW.LASER_D - 1) + WT - 1 && mT.push(WT);
      return mT
    }
    const SH = {
      firing: `${FH}colSlotFiring`,
      ready: `${FH}colSlotReady`,
      blocked: `${FH}colSlotBlocked`,
      empty: `${FH}colSlotEmpty`,
      closed: `${FH}colSlotClosed`
    };

    function GH(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const MT = gz(TT),
        gT = gz(UT),
        nT = gz(mT),
        HT = nT.filter(Boolean).length,
        kT = MT.filter(Boolean).length,
        jT = [0, 1, 2, 3].map((TT => gT[TT] ? MT[TT] ? nT[TT] ? WT ? "firing" : "ready" : "blocked" : (TT => KH(zT, TT).length > 0)(TT) ? "blocked" : "empty" : "closed")),
        lT = jT.indexOf("blocked"),
        LT = lT < 0 && kT > 0 ? jT.indexOf("empty") : -1;
      return jT.map(((TT, UT) => {
        const mT = UT === lT ? {
          key: `${FH}colSlotClear`
        } : UT === LT ? {
          key: `${FH}colSlotAdd`,
          params: {
            time: uH(Math.min(4, HT + 1))
          }
        } : null;
        return {
          dir: UT,
          tone: TT,
          title: {
            key: "blocked" !== TT || MT[UT] ? SH[TT] : `${FH}colSlotGap`,
            keys: {
              dir: PH[UT]
            }
          },
          hint: mT
        }
      }))
    }

    function NH(TT) {
      var UT;
      return "noPower" === TT.baf2ColState && TT.baf2ColRxState ? iH({
        baf2RxState: TT.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (UT = TT.baf2ColRxHeat) && void 0 !== UT ? UT : 0
      }) : null
    }

    function EH(TT) {
      const UT = gz(TT.baf2ColSpots).filter(Boolean).length,
        mT = gz(TT.baf2ColLive);
      let WT = 0,
        zT = 0;
      return gz(TT.baf2ColLasers).forEach(((TT, UT) => {
        TT && (WT++, zT += mT[UT] ? 0 : 1)
      })), zT > 0 ? {
        key: `${FH}colSubSome`,
        params: {
          blocked: String(zT),
          lasers: String(WT)
        }
      } : UT < 4 ? {
        key: `${FH}colSubSpots`,
        params: {
          lasers: String(WT),
          spots: String(UT)
        }
      } : {
        key: `${FH}colSub`,
        params: {
          lasers: String(WT)
        }
      }
    }

    function hH(TT) {
      const UT = NH(TT);
      if ("idle" === TT.baf2ColRxState && UT) return {
        key: `${FH}colState_noPowerIdle`
      };
      if (UT) return {
        key: `${FH}colState_noPowerReactor`,
        keys: {
          state: UT.label
        }
      };
      if ("noInput" !== TT.baf2ColState) return {
        key: `${FH}colState_${TT.baf2ColState}`
      };
      const mT = String(Math.max(0, nW.NOVA_SA - TT.baf2ColSa)),
        WT = String(Math.max(0, nW.NOVA_GD - TT.baf2ColGd));
      return "0" !== mT && "0" !== WT ? {
        key: `${FH}colState_noInput`,
        params: {
          sa: mT,
          gd: WT
        }
      } : "0" !== mT ? {
        key: `${FH}colState_noStarAlloy`,
        params: {
          sa: mT
        }
      } : "0" !== WT ? {
        key: `${FH}colState_noGlowDust`,
        params: {
          gd: WT
        }
      } : {
        key: `${FH}colState_running`
      }
    }

    function DH(TT) {
      return TT.baf2ColP < 0 ? `${FH}colNext` : function(TT) {
        const UT = TT.baf2ColState;
        return TT.baf2ColP >= 0 && ("blocked" === UT || "noLasers" === UT || "noPower" === UT)
      }(TT) ? `${FH}colStalled` : null === oH(TT) ? `${FH}colMaking` : `${FH}colNovaIn`
    }

    function oH(TT) {
      if (TT.baf2ColP < 0 || TT.baf2ColWant <= 0) return null;
      const UT = TT.baf2ColFocusPerS * Math.min(1, TT.baf2ColDraw / TT.baf2ColWant);
      return UT > 0 ? Math.max(0, nW.NOVA_FOCUS - TT.baf2ColP) / UT : null
    }

    function AH(TT, UT) {
      const mT = [];
      for (let WT = 1; WT <= 3; WT++) {
        const zT = [TT[0], TT[1] - WT, TT[2]];
        if (!UT(zT)) return mT;
        mT.push(zT)
      }
      return []
    }

    function RH(TT, UT) {
      const mT = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let WT = 0; WT < 4; WT++) {
        const zT = WT,
          MT = vW(TT.focus, zT, nW.LASER_D);
        if (TT.lasers[WT] || !TT.open[WT] || !UT(MT)) continue;
        const gT = [];
        for (let mT = 1; mT < nW.LASER_D; mT++) {
          const WT = vW(TT.focus, zT, mT);
          UT(WT) || gT.push(WT)
        }
        mT.supports.push(...AH(MT, UT)), 0 === gT.length ? mT.free.push(MT) : (mT.blocked.push(MT), mT.gaps.push(...gT))
      }
      return mT
    }
    const Tk = nW.LASER_D - .25,
      Uk = 4,
      mk = 2,
      Wk = 16;
    const zk = {
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
        blendMode: Fn.e.Standard,
        soft: !0
      },
      Mk = {
        green: zk,
        pink: {
          ...zk,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function gk(TT, UT) {
      const mT = {
        ...UT.params
      };
      for (const [zT, MT] of Object.entries(null !== (WT = UT.keys) && void 0 !== WT ? WT : {})) {
        var WT;
        mT[zT] = TT(MT)
      }
      return mT
    }
    const nk = "buildAFactory2Game:",
      Hk = 2 * nW.LASER_D + 1,
      kk = nW.LASER_D;

    function jk(TT) {
      return TT(`${nk}colFocusTip`, {
        need: CH(nW.NOVA_FOCUS)
      })
    }

    function lk(TT, UT) {
      return TT(UT.key, gk(TT, UT))
    }

    function Lk(TT) {
      const UT = TT.getStatus();
      return {
        status: UT,
        entry: UT ? TT.entryAtRoot(UT.baf2ColAt) : void 0
      }
    }

    function pk(TT, UT) {
      return {
        left: 100 * (kk + TT) / Hk + "%",
        top: 100 * (kk + UT) / Hk + "%"
      }
    }

    function Bk(TT) {
      let {
        status: UT,
        entry: mT
      } = TT;
      const WT = gz(UT.baf2ColLasers),
        zT = gz(UT.baf2ColSpots),
        MT = gz(UT.baf2ColLive),
        gT = !0 === (null === mT || void 0 === mT ? void 0 : mT.on),
        nT = nW.LASER_D,
        HT = [];
      for (let pT = 0; pT < 4; pT++) {
        const [TT, , UT] = cW[pT];
        if (MT[pT]) {
          const mT = 100 * (nT - 1) / Hk,
            WT = TT + UT > 0 ? 100 * (kk + 1) / Hk : 100 * (kk - (nT - 1)) / Hk,
            zT = 100 * (kk + .35) / Hk,
            MT = 30 / Hk,
            kT = 0 !== TT ? {
              left: `${WT}%`,
              width: `${mT}%`,
              top: `${zT}%`,
              height: `${MT}%`
            } : {
              top: `${WT}%`,
              height: `${mT}%`,
              left: `${zT}%`,
              width: `${MT}%`
            };
          HT.push((0, JM.jsx)("i", {
            className: ez()("Baf2ColDiagramBeam", {
              Off: !gT
            }),
            style: kT
          }, `beam${pT}`))
        }
        const mT = WT[pT] ? "Baf2ColDiagramLaser" : zT[pT] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        HT.push((0, JM.jsx)("i", {
          className: mT,
          style: pk(TT * nT, UT * nT)
        }, `spot${pT}`))
      }
      for (let pT = 0; pT < 4; pT++) {
        if (WT[pT] || !zT[pT]) continue;
        const [TT, , mT] = cW[pT];
        for (const WT of KH(null !== (kT = UT.baf2ColGaps) && void 0 !== kT ? kT : 0, pT)) {
          var kT;
          HT.push((0, JM.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: pk(TT * WT, mT * WT)
          }, `gap${pT},${WT}`))
        }
      }
      for (const [pT, , BT] of null !== (jT = null === mT || void 0 === mT ? void 0 : mT.blockers) && void 0 !== jT ? jT : []) {
        var jT, lT, LT;
        const TT = pT - (null !== (lT = null === mT || void 0 === mT ? void 0 : mT.focus[0]) && void 0 !== lT ? lT : 0),
          UT = BT - (null !== (LT = null === mT || void 0 === mT ? void 0 : mT.focus[2]) && void 0 !== LT ? LT : 0);
        HT.push((0, JM.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: pk(TT, UT)
        }, `block${TT},${UT}`))
      }
      return (0, JM.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [HT, (0, JM.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function Zk(TT) {
      let {
        status: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)(), WT = gz(UT.baf2ColLive).filter(Boolean).length;
      return (0, JM.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, JM.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: jk(mT),
          children: mT(`${nk}colLadder`)
        }), (0, JM.jsx)("ul", {
          children: [1, 2, 3, 4].map((TT => (0, JM.jsx)("li", {
            className: ez()({
              On: TT === WT
            }),
            children: mT(`${nk}colLadderChip`, {
              lasers: String(TT),
              time: uH(TT)
            })
          }, TT)))
        })]
      })
    }

    function ck(TT) {
      let {
        item: UT,
        fn: mT,
        need: WT,
        cap: zT
      } = TT;
      const {
        t: MT
      } = (0, dz.z)(), gT = Math.min(mT, WT);
      return (0, JM.jsxs)("li", {
        className: ez()("Baf2ColTile", {
          Short: mT < WT
        }),
        children: [(0, JM.jsx)(vk, {
          item: UT
        }), (0, JM.jsx)("b", {
          className: "Baf2ColTileValue",
          children: MT(`${nk}colOutOf`, {
            amount: String(gT),
            cap: String(WT)
          })
        }), (0, JM.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, JM.jsx)("i", {
            style: {
              width: 100 * gT / WT + "%"
            }
          })
        }), mT > WT && (0, JM.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: MT(`${nk}colIntakeHeld`, {
            amount: String(mT),
            cap: String(zT)
          })
        })]
      })
    }

    function vk(TT) {
      let {
        item: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)();
      return (0, JM.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, JM.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, JM.jsx)(tz.b, {
            itemName: UT,
            amount: 0
          })
        }), (0, JM.jsx)("span", {
          className: "Baf2ColTileName",
          children: zM(mT, UT)
        })]
      })
    }

    function fk(TT) {
      switch (TT.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function qk(TT) {
      var UT, mT, zT;
      let {
        store: MT,
        close: gT
      } = TT;
      const {
        t: nT
      } = (0, dz.z)(), HT = Cg(), {
        status: kT,
        entry: jT
      } = function(TT) {
        const [UT, mT] = (0, WT.useState)((() => Lk(TT)));
        return (0, WT.useEffect)((() => (mT(Lk(TT)), TT.subscribe((() => {
          mT(Lk(TT))
        })))), [TT]), UT
      }(MT), [lT, LT] = (0, WT.useState)(null), pT = null === kT || void 0 === kT ? void 0 : kT.baf2ColHold;
      (0, WT.useEffect)((() => {
        LT(null)
      }), [pT]);
      const BT = (0, WT.useRef)({
          p: -1,
          n: 0
        }),
        ZT = null !== (UT = null === kT || void 0 === kT ? void 0 : kT.baf2ColP) && void 0 !== UT ? UT : -1;
      ZT < BT.current.p && BT.current.n++, BT.current.p = ZT;
      const cT = (0, WT.useRef)(null),
        [vT] = (0, WT.useState)((() => {
          return (TT = MT.heldAtOpen()) === jW || TT === lW ? {
            key: `${FH}colBeltItIn`,
            item: TT
          } : null;
          var TT
        }));
      if (!kT) return null;
      const fT = kT.baf2ColMember,
        qT = kT.baf2ColP >= 0,
        iT = function(TT, UT) {
          if (TT.baf2ColP >= 0 && TT.baf2ColDraw > 0) {
            const UT = TT.baf2ColWant > 0 ? Math.min(1, TT.baf2ColDraw / TT.baf2ColWant) : 0;
            return {
              focus: TT.baf2ColFocusPerS * UT,
              draw: TT.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === TT.baf2ColState && UT && UT.draw > 0 ? {
            ...UT,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(kT, cT.current);
      cT.current = iT.draw > 0 ? iT : null;
      const bT = "slowed" === kT.baf2ColState || "noPower" === kT.baf2ColState,
        OT = oH(kT),
        eT = null !== lT && void 0 !== lT ? lT : kT.baf2ColHold,
        YT = function(TT) {
          var UT, mT;
          return "idle" === TT.baf2ColRxState ? null : null !== (UT = null === (mT = NH(TT)) || void 0 === mT ? void 0 : mT.fix) && void 0 !== UT ? UT : null
        }(kT),
        JT = null === YT && null === vT ? function(TT) {
          var UT;
          const mT = TT.baf2ColSentTo;
          if (!mT) return null;
          const WT = null !== (UT = TT.baf2ColSentHeld) && void 0 !== UT ? UT : null;
          return {
            key: null === WT ? `${FH}colNovaSentToMachine` : `${FH}colNovaSentTo`,
            target: mT,
            fn: WT
          }
        }(kT) : null,
        xT = qT ? nT(`${nk}colFocusOf`, {
          focus: CH(kT.baf2ColP),
          need: CH(nW.NOVA_FOCUS)
        }) : null;
      return (0, JM.jsx)(bg.e, {
        close: gT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, JM.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, JM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JM.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, JM.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, JM.jsx)(tz.b, {
                  itemName: HW,
                  amount: 0
                })
              }), (0, JM.jsxs)("div", {
                children: [(0, JM.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: zM(nT, HW)
                }), (0, JM.jsx)("p", {
                  children: lk(nT, EH(kT))
                })]
              })]
            }), (0, JM.jsx)(Og.k, {
              onClick: gT
            })]
          }), (0, JM.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, JM.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, JM.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, JM.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: nT(DH(kT), {
                    time: null === OT ? "" : bM(nT, OT)
                  })
                }), (0, JM.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, JM.jsx)("i", {
                    style: {
                      width: (qT ? 100 * kT.baf2ColP / nW.NOVA_FOCUS : 0) + "%"
                    }
                  }, BT.current.n)
                }), (0, JM.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, JM.jsxs)("span", {
                    title: jk(nT),
                    children: [(0, JM.jsx)("b", {
                      children: CH(iT.focus)
                    }), " ", nT(`${nk}colFocusPerS`)]
                  }), (0, JM.jsxs)("span", {
                    className: ez()("Baf2ColDraw", {
                      Short: bT
                    }),
                    children: [(0, JM.jsx)(wz.c, {
                      name: "bolt"
                    }), bT ? nT(`${nk}colDrawOf`, {
                      draw: CH(kT.baf2ColDraw),
                      want: CH(kT.baf2ColWant)
                    }) : nT(`${nk}colPowerPerS`, {
                      rate: CH(iT.draw)
                    })]
                  }), null !== xT && (0, JM.jsx)("span", {
                    className: "Soft",
                    children: xT
                  })]
                })]
              }), (0, JM.jsx)("p", {
                className: ez()("Baf2ColState", fk(kT)),
                children: lk(nT, hH(kT))
              }), null !== YT && (0, JM.jsx)("p", {
                className: "Baf2ColStateFix",
                children: nT(YT)
              }), null === YT && null !== vT && (0, JM.jsx)("p", {
                className: "Baf2ColStateFix",
                children: nT(vT.key, {
                  item: zM(nT, vT.item)
                })
              }), JT && (0, JM.jsx)("p", {
                className: "Baf2ColStateFix",
                children: nT(JT.key, {
                  target: zM(nT, JT.target),
                  amount: String(null !== (mT = JT.fn) && void 0 !== mT ? mT : 0)
                })
              }), (0, JM.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, JM.jsx)(ck, {
                  item: jW,
                  fn: kT.baf2ColSa,
                  need: nW.NOVA_SA,
                  cap: nW.SA_CAP
                }), (0, JM.jsx)(ck, {
                  item: lW,
                  fn: kT.baf2ColGd,
                  need: nW.NOVA_GD,
                  cap: nW.GD_CAP
                }), (0, JM.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, JM.jsx)(vk, {
                    item: "Nova Matter"
                  }), (0, JM.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: nT(`${nk}colNovaHeld`, {
                      amount: String(kT.baf2ColOut),
                      cap: String(nW.OUT_CAP)
                    })
                  }), fT && (0, JM.jsx)(Og.l, {
                    className: "Baf2ColTake",
                    disabled: 0 === kT.baf2ColOut,
                    onClick: () => {
                      HT.send(VH(kT, "take"))
                    },
                    children: nT(`${nk}colTake`)
                  })]
                })]
              }), fT && (0, JM.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": eT,
                className: ez()("Baf2ColHold", {
                  On: eT
                }),
                onClick: TT => {
                  TT.detail > 0 && TT.currentTarget.blur(), LT(!eT), HT.send(VH(kT, "hold " + (eT ? 0 : 1)))
                },
                children: [(0, JM.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, JM.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, JM.jsx)("b", {
                    children: nT(`${nk}colHold`)
                  }), (0, JM.jsx)("span", {
                    children: nT(`${nk}colHoldNote`)
                  })]
                })]
              })]
            }), (0, JM.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, JM.jsx)(Bk, {
                status: kT,
                entry: jT
              }), (0, JM.jsx)("ul", {
                className: "Baf2ColSlots",
                children: GH(kT.baf2ColLasers, kT.baf2ColSpots, kT.baf2ColLive, iT.beamsOn, null !== (zT = kT.baf2ColGaps) && void 0 !== zT ? zT : 0).map((TT => (0, JM.jsxs)("li", {
                  className: TT.tone,
                  children: [(0, JM.jsx)("b", {
                    children: lk(nT, TT.title)
                  }), null !== TT.hint && (0, JM.jsx)("span", {
                    children: lk(nT, TT.hint)
                  })]
                }, TT.dir)))
              }), (0, JM.jsx)(Zk, {
                status: kT
              })]
            })]
          })]
        })
      })
    }
    const ik = "buildAFactory2Game:",
      bk = 36e5,
      Ok = 864e5;

    function ek(TT, UT, mT) {
      return Math.max(0, Math.ceil((TT + UT - Math.max(mT, TT)) / 1e3))
    }

    function Yk(TT) {
      return TT.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function Jk(TT) {
      return "Homestead" === TT
    }

    function xk(TT) {
      return function(TT) {
        let UT = 0;
        for (const mT of TT) {
          const TT = /^Island ([1-9]\d{0,5})$/.exec(mT);
          TT && (UT = Math.max(UT, Number(TT[1])))
        }
        return `Island ${UT+1}`
      }(TT.map((TT => TT.baf2IslandName)))
    }

    function dk(TT, UT) {
      return function(TT) {
        return `${ik}islandsBlocked${TT[0].toUpperCase()}${TT.slice(1)}`
      }("degraded" === TT && 0 === UT ? "stuck" : TT)
    }

    function wk(TT) {
      return TT.filter((TT => {
        var UT;
        return !TT.baf2IslandActive && void 0 === TT.baf2IslandUnreadable && void 0 === (null === (UT = TT.baf2IslandCoop) || void 0 === UT ? void 0 : UT.baf2CoopState)
      })).length
    }

    function tk(TT) {
      return "coopMoving" === TT || "coopUnreachable" === TT
    }

    function ak(TT, UT) {
      const mT = UT > 0;
      return {
        change: null === TT && !mT,
        switch: (null === TT || "degraded" === TT || tk(TT)) && !mT,
        rename: "loading" !== TT && "degraded" !== TT && "stuck" !== TT
      }
    }

    function yk(TT, UT) {
      return void 0 === TT || "corrupt" === TT && UT
    }
    const Xk = Ig;

    function Ik(TT, UT, mT) {
      if (null !== TT && void 0 !== TT && TT.untilGone) {
        var WT;
        return !("dismiss" === TT.untilGone && void 0 === (null === (WT = UT.baf2IslandCoop) || void 0 === WT ? void 0 : WT.baf2CoopState)) && mT - TT.atMs < 32500
      }
      return void 0 !== TT && mT - TT.atMs < Xk && UT.baf2IslandName === TT.from
    }
    const Qk = Ig;

    function sk(TT) {
      return "core" === (null === TT || void 0 === TT ? void 0 : TT.kind) ? TT.core : "islands" === (null === TT || void 0 === TT ? void 0 : TT.kind) ? TT.backToCore : void 0
    }

    function Fk(TT) {
      return `\0${TT}\0`
    }

    function Pk(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const WT = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const MT of Object.keys(mT)) WT[MT] = Fk(MT);
      let zT = Object.keys(WT).length > 0 ? TT(UT, WT) : TT(UT);
      for (const [MT, gT] of Object.entries(mT)) zT = zT.split(Fk(MT)).join(gT);
      return zT
    }

    function Vk(TT, UT) {
      return TT ? UT ? "enabled" : "disabled" : "hidden"
    }
    const uk = {
      removed: `${ik}islandsCoopRemoved`,
      deleted: `${ik}islandsCoopDeleted`,
      notReady: `${ik}islandsCoopNotReady`,
      gone: `${ik}islandsCoopGone`
    };

    function Ck(TT) {
      var UT;
      return "member" !== (null === (UT = TT.baf2IslandCoop) || void 0 === UT ? void 0 : UT.baf2CoopRole) && "newer" !== TT.baf2IslandUnreadable
    }

    function rk(TT, UT, mT, WT, zT, MT) {
      const gT = TT.baf2IslandActive,
        nT = TT.baf2IslandUnreadable,
        HT = TT.baf2IslandCoop,
        kT = function(TT, UT, mT) {
          return {
            switch: TT.switch && void 0 === UT,
            delete: TT.change && yk(UT, mT)
          }
        }(UT, nT, WT),
        jT = gT && void 0 !== HT && void 0 === HT.baf2CoopState && "coopUnreachable" === MT,
        lT = {
          switch: Vk((!gT || jT) && void 0 === nT, jT || kT.switch),
          switchLabel: jT ? "tryAgain" : "switch",
          rename: Vk(!0, UT.rename),
          delete: Vk(!gT, kT.delete),
          deleteWaits: !gT && yk(nT, WT),
          people: Vk(void 0 !== TT.baf2IslandInvitable || zT && gT && void 0 === nT && void 0 === HT, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        LT = !gT && kT.delete;
      if (void 0 === HT) return mT ? {
        ...lT,
        delete: Vk(!gT, !1),
        deleteWaits: !1,
        note: LT ? {
          key: `${ik}islandsCoopKeepOwn`
        } : null
      } : lT;
      const pT = HT.baf2CoopState,
        BT = HT.baf2CoopMembers.length > 1,
        ZT = {
          ...lT,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== pT && "member" === HT.baf2CoopRole) return {
        ...ZT,
        dismiss: Vk(!0, UT.rename),
        note: {
          key: uk[pT],
          names: {
            owner: HT.baf2CoopOwner
          }
        }
      };
      if (void 0 !== pT) {
        let TT = {
          key: `${ik}islandsCoopOwnLost`
        };
        return LT && BT ? TT = {
          key: `${ik}islandsCoopDeleteMembers`
        } : LT && mT && (TT = {
          key: `${ik}islandsCoopKeepOwn`
        }), {
          ...ZT,
          delete: Vk(!gT, kT.delete && !BT && !mT),
          deleteWaits: lT.deleteWaits && !BT && !mT,
          note: TT
        }
      }
      if ("member" === HT.baf2CoopRole) return {
        ...lT,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: Vk(!0, gT ? UT.switch : UT.rename)
      };
      const cT = HT.baf2CoopManageHere;
      let vT = null;
      var fT;
      cT || gT ? LT && BT ? vT = {
        key: `${ik}islandsCoopDeleteMembers`
      } : LT && mT && (vT = {
        key: `${ik}islandsCoopKeepOwn`
      }) : vT = {
        key: null !== (fT = HT.baf2CoopLeft) && void 0 !== fT && fT.length ? `${ik}islandsCoopManageThereClaim` : `${ik}islandsCoopManageThere`
      };
      return {
        ...lT,
        rename: Vk(!0, UT.rename && cT),
        delete: Vk(!gT, kT.delete && !BT && !mT),
        deleteWaits: lT.deleteWaits && !BT && !mT,
        people: "enabled",
        peopleLabel: "players",
        unshare: Vk(cT && gT && !BT, UT.change),
        remove: cT,
        note: vT
      }
    }

    function Kk(TT) {
      var UT;
      const mT = TT.baf2IslandCoop;
      if ("owner" !== (null === mT || void 0 === mT ? void 0 : mT.baf2CoopRole) || void 0 !== mT.baf2CoopState || null === (UT = mT.baf2CoopLeft) || void 0 === UT || !UT.length) return null;
      const WT = TT.baf2IslandActive && mT.baf2CoopManageHere;
      return {
        left: mT.baf2CoopLeft,
        claim: WT,
        goThere: !WT && mT.baf2CoopManageHere
      }
    }

    function Sk(TT) {
      return TT.baf2CoopMembers.length >= TT.baf2CoopMax
    }

    function Gk(TT, UT, mT) {
      return void 0 !== TT && UT < TT.answer && mT - TT.atMs < Xk
    }
    const Nk = "buildAFactory2Game:";

    function Ek(TT, UT) {
      return {
        onKeyDown: mT => {
          mT.stopPropagation(), mT.nativeEvent.isComposing || 229 === mT.nativeEvent.keyCode || ("Enter" === mT.key ? (mT.preventDefault(), TT()) : "Escape" === mT.key && (mT.preventDefault(), UT()))
        }
      }
    }

    function hk(TT) {
      return {
        onKeyDown: UT => {
          "Escape" !== UT.key || UT.nativeEvent.isComposing || (UT.preventDefault(), UT.stopPropagation(), TT())
        }
      }
    }

    function Dk(TT) {
      TT.currentTarget.select()
    }

    function Ak(TT, UT) {
      (0, WT.useEffect)((() => {
        var mT;
        TT && (null === (mT = UT.current) || void 0 === mT || mT.scrollIntoView({
          block: "nearest"
        }))
      }), [TT, UT])
    }

    function Rk(TT) {
      const [UT, mT] = (0, WT.useState)(null);
      return (0, WT.useEffect)((() => {
        const UT = document.querySelector(".UiRequests"),
          WT = TT.current;
        if (!UT || !WT || "undefined" === typeof ResizeObserver) return;
        const zT = () => {
          const TT = UT.getBoundingClientRect(),
            zT = WT.getBoundingClientRect(),
            MT = WT.parentElement,
            gT = MT && parseFloat(getComputedStyle(MT).paddingTop) || 0,
            nT = function(TT, UT, mT, WT) {
              if (!TT || TT.height <= 0 || TT.right <= UT.left || TT.left >= UT.right) return null;
              const zT = Math.max(WT, TT.bottom + 8);
              return {
                marginTop: Math.round(zT - WT),
                maxHeight: Math.max(0, Math.floor(mT - zT - WT))
              }
            }(TT, zT, window.innerHeight, gT);
          mT((TT => (null === TT || void 0 === TT ? void 0 : TT.marginTop) === (null === nT || void 0 === nT ? void 0 : nT.marginTop) && (null === TT || void 0 === TT ? void 0 : TT.maxHeight) === (null === nT || void 0 === nT ? void 0 : nT.maxHeight) ? TT : nT))
        };
        zT();
        const MT = new ResizeObserver(zT);
        return MT.observe(UT), window.addEventListener("resize", zT), () => {
          MT.disconnect(), window.removeEventListener("resize", zT)
        }
      }), [TT]), UT
    }

    function Tj() {
      (0, WT.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function Uj(TT) {
      (0, WT.useEffect)((() => {
        var UT;
        null === (UT = TT.current) || void 0 === UT || UT.focus()
      }), [TT])
    }

    function mj(TT) {
      const [UT, mT] = (0, WT.useState)(Date.now);
      return (0, WT.useEffect)((() => {
        const UT = window.setInterval((() => {
          mT(Date.now())
        }), TT);
        return () => {
          window.clearInterval(UT)
        }
      }), [TT]), UT
    }

    function Wj(TT) {
      let {
        tier: UT,
        t: mT
      } = TT;
      const {
        kind: WT,
        short: zT
      } = cT(UT), MT = pT(UT, BT), gT = mT(`${Nk}${MT.key}`, {
        ...MT.params,
        name: mT(`${Nk}${vT(UT).nameKey}`)
      });
      return (0, JM.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, JM.jsx)("span", {
          className: ez()("Baf2IslandTierPip", {
            Stage: "tier" !== WT
          }),
          "aria-hidden": "true",
          children: zT
        }), gT]
      })
    }

    function zj(TT) {
      let {
        note: UT,
        className: mT,
        t: WT
      } = TT;
      return (0, JM.jsx)("p", {
        className: ez()("Baf2IslandNote", mT),
        children: Pk(WT, UT.key, UT.names, UT.params)
      })
    }
    const Mj = "buildAFactory2Game:";

    function gj(TT) {
      let {
        message: UT,
        arrivedAtMs: mT,
        close: zT,
        leave: MT
      } = TT;
      const gT = Cg(),
        {
          t: nT
        } = (0, dz.z)(),
        HT = mj(1e3),
        kT = (0, WT.useRef)(null);
      Tj(), (0, WT.useEffect)((() => {
        var TT;
        null === (TT = kT.current) || void 0 === TT || TT.focus()
      }), []);
      const jT = ek(mT, UT.baf2TransferInMs, HT),
        lT = mT + UT.baf2TransferInMs - 1e3,
        [LT, pT] = (0, WT.useState)(null);
      (0, WT.useEffect)((() => {
        const TT = window.setTimeout((() => {
          pT(lT)
        }), Math.max(0, lT - Date.now()));
        return () => {
          window.clearTimeout(TT)
        }
      }), [lT]);
      const BT = LT === lT || HT >= lT,
        ZT = UT.baf2TransferIsland,
        cT = UT.baf2TransferOwner;
      return (0, JM.jsx)(bg.e, {
        close: zT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, JM.jsxs)("section", {
          ref: kT,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, JM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JM.jsxs)("div", {
              children: [(0, JM.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === cT ? Pk(nT, `${Mj}islandsTransferOwn`, {
                  island: ZT
                }) : Pk(nT, `${Mj}islandsTransfer`, {
                  island: ZT,
                  owner: cT
                })
              }), (0, JM.jsx)("p", {
                children: BT ? nT(`${Mj}islandsTransferNow`) : nT(`${Mj}islandsTransferIn`, {
                  time: bM(nT, jT)
                })
              })]
            }), (0, JM.jsx)(Og.k, {
              ariaLabel: nT(`${Mj}islandsClose`),
              onClick: zT
            })]
          }), !BT && (0, JM.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, JM.jsx)("p", {
              className: "Baf2TransferNote",
              children: nT(`${Mj}islandsTransferNote`)
            }), (0, JM.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, JM.jsx)(Og.e, {
                onClick: () => {
                  gT.send("baf2coopstay"), MT()
                },
                children: nT(`${Mj}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var nj = mT(1567),
      Hj = mT(1234),
      kj = mT.n(Hj);
    const jj = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const lj = "buildAFactory2Game:",
      Lj = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function pj(TT, UT, mT) {
      return void 0 === UT ? mT : "string" === typeof UT ? UT : Array.isArray(UT) ? UT.map((UT => "string" === typeof UT ? UT : "translationKey" in UT ? TT(UT.translationKey) : "")).join("") : TT(UT.translationKey)
    }

    function Bj(TT) {
      const UT = {};
      for (const [mT, WT] of Object.entries(null !== TT && void 0 !== TT ? TT : {})) UT[mT] = WT < 0 ? iM(WT) : WT.toLocaleString("en-US");
      return UT
    }

    function Zj(TT, UT) {
      const mT = UT ? "touch" : "mouse";
      return {
        use: TT(`${lj}lookUse_${mT}`),
        Use: TT(`${lj}lookUseStart_${mT}`)
      }
    }
    const cj = (0, WT.memo)((function(TT) {
      let {
        item: UT
      } = TT;
      return (0, JM.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, JM.jsx)(tz.b, {
          itemName: UT,
          amount: 0
        })
      })
    }));

    function vj(TT) {
      let {
        label: UT,
        percent: mT,
        progress: WT
      } = TT;
      return (0, JM.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, JM.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${UT}: ${WT}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": mT,
          children: (0, JM.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${mT}%`
            }
          })
        }), (0, JM.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: WT
        })]
      })
    }

    function fj(TT) {
      let {
        chips: UT
      } = TT;
      return (0, JM.jsx)("span", {
        className: "Baf2QuestChips",
        children: UT.map((TT => {
          let [UT, mT, WT] = TT;
          const zT = mT >= WT;
          return (0, JM.jsxs)("span", {
            className: ez()("Baf2QuestChip", {
              Met: zT
            }),
            children: [(0, JM.jsx)(cj, {
              item: UT
            }), (0, JM.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: zT ? `\u2713${WT}` : `${mT}/${WT}`
            })]
          }, UT)
        }))
      })
    }

    function qj(TT, UT) {
      const {
        key: mT,
        params: WT
      } = pT(UT, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return TT(`${lj}${mT}`, {
        ...WT,
        name: TT(`${lj}${vT(UT).nameKey}`)
      })
    }

    function ij(TT) {
      let {
        core: UT,
        t: mT
      } = TT;
      const [WT, zT] = UT, MT = zT > 0 ? Math.floor(100 * WT / zT) : 100;
      return (0, JM.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": mT(`${lj}questCoreLabel`, {
          have: String(WT),
          need: String(zT)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": MT,
        children: [(0, JM.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: mT(`${lj}questCore`, {
            percent: String(MT)
          })
        }), (0, JM.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, JM.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${MT}%`
            }
          })
        })]
      })
    }

    function bj(TT) {
      let {
        rows: UT,
        t: mT
      } = TT;
      const WT = UT.filter((TT => TT.done)).length;
      return (0, JM.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": mT(`${lj}questStepsProgress`, {
          done: String(WT),
          total: String(UT.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": UT.length,
        "aria-valuenow": WT,
        children: UT.map((TT => (0, JM.jsx)("span", {
          className: ez()("Baf2QuestSegment", {
            Done: TT.done,
            Current: TT.current
          })
        }, TT.id)))
      })
    }
    const Oj = (0, WT.memo)(Yj, ej);

    function ej(TT, UT) {
      const mT = mT => TT.view.itemNames[mT] === UT.view.itemNames[mT];
      return TT.t === UT.t && TT.extra === UT.extra && (null === TT.row.item || mT(TT.row.item)) && TT.row.madeFor.every(mT) && TT.row.also.every(mT) && kj()(TT.row, UT.row)
    }

    function Yj(TT) {
      let {
        row: UT,
        view: mT,
        t: WT,
        extra: zT
      } = TT;
      const {
        isTouchScreen: MT
      } = (0, iz.h)(["isTouchScreen"]), gT = UT.item ? function(TT, UT, mT) {
        return 1 !== mT && jj.has(TT) ? xz(UT) : null
      }(UT.key, UT.item, UT.total) : null, nT = gT ? WT(gT) : UT.item ? pj(WT, mT.itemNames[UT.item], UT.item) : "", HT = UT.also.map((TT => pj(WT, mT.itemNames[TT], TT))), kT = HT.join(", "), jT = function(TT, UT) {
        var mT;
        return UT.length < 2 ? null !== (mT = UT[0]) && void 0 !== mT ? mT : "" : TT(`${lj}listAnd`, {
          rest: UT.slice(0, -1).join(TT(`${lj}listComma`)),
          last: UT[UT.length - 1]
        })
      }(WT, [nT, ...HT]), lT = WT(`${lj}${UT.key}`, {
        ...Zj(WT, MT),
        ...Bj(UT.params),
        item: nT,
        also: kT,
        itemList: jT,
        total: String(UT.total)
      }), [LT, ...pT] = lT.split("\n"), BT = UT.total > 1 && !UT.done && !UT.away;
      return (0, JM.jsxs)("li", {
        className: ez()("Baf2QuestStep", {
          Done: UT.done,
          Current: UT.current,
          JustFinished: UT.justFinished,
          Away: UT.away
        }),
        children: [!UT.done && null !== UT.item && (0, JM.jsx)(cj, {
          item: UT.item
        }), (UT.done || null === UT.item) && (0, JM.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: UT.done ? "\u2713" : "\u25cb"
        }), (0, JM.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, JM.jsx)("strong", {
            children: LT
          }), pT.length > 0 && (0, JM.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: pT.join(" ")
          }), !UT.done && UT.madeFor.length > 0 && (0, JM.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: WT("buildAFactory2Game:questRowFor", {
              items: UT.madeFor.map((TT => pj(WT, mT.itemNames[TT], TT))).join(" \u2192 ")
            })
          }), BT && (0, JM.jsx)(vj, {
            label: LT,
            percent: Math.round(100 * UT.amount / UT.total),
            progress: `${UT.amount.toLocaleString("en-US")}/${UT.total.toLocaleString("en-US")}`
          }), !UT.done && !UT.away && UT.chips && UT.chips.length > 0 && (0, JM.jsx)(fj, {
            chips: UT.chips
          }), zT]
        })]
      })
    }
    const Jj = "buildAFactory2Game:",
      xj = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      dj = {
        on: `${Jj}tutorialButtonOn`,
        hud: `${Jj}tutorialButtonHud`,
        off: `${Jj}tutorialButtonOff`
      },
      wj = {
        on: `${Jj}tutorialPickedOn`,
        hud: `${Jj}tutorialPickedHud`,
        off: `${Jj}tutorialPickedOff`
      };
    class tj {
      constructor(TT, UT, mT) {
        this.commands = TT, this.quests = UT, this.toasts = mT
      }
      next() {
        const TT = function(TT) {
            return yT[(yT.indexOf(TT) + 1) % yT.length]
          }(this.quests.get().tutorial),
          UT = this.quests.setTutorial(TT);
        this.commands.send(`baf2tutorial ${TT} ${UT}`), this.toasts.show({
          baf2ToastText: [(0, IT.se)({
            translationKey: wj[TT]
          }, IT.R.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function aj(TT, UT) {
      let [mT, WT] = UT;
      return TT(`${lj}${mT}`, Bj(WT))
    }

    function yj(TT) {
      let [UT, mT] = TT;
      return UT + JSON.stringify(mT)
    }

    function Xj(TT) {
      let {
        goal: UT,
        t: mT
      } = TT;
      return UT ? (0, JM.jsx)("span", {
        className: "Baf2BookGoal",
        children: mT(`${lj}${UT}`)
      }) : null
    }

    function Ij(TT) {
      let {
        view: UT,
        t: mT
      } = TT;
      if (!UT.name) return null;
      const WT = Kz(UT.rows);
      return (0, JM.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, JM.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: mT(`${lj}currentQuest`)
        }), (0, JM.jsx)("strong", {
          className: "Baf2BookTitle",
          children: aj(mT, UT.name)
        }), (0, JM.jsx)(Xj, {
          goal: UT.goal,
          t: mT
        }), WT.length > 1 && (0, JM.jsx)(bj, {
          rows: WT,
          t: mT
        }), (0, JM.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: UT.rows.map((TT => (0, JM.jsx)(Oj, {
            row: TT,
            view: UT,
            t: mT
          }, TT.id)))
        }), UT.reward && (0, JM.jsxs)("span", {
          className: "Baf2BookReward",
          children: [mT(`${lj}questReward`), (0, JM.jsx)(cj, {
            item: UT.reward
          }), pj(mT, UT.itemNames[UT.reward], UT.reward)]
        })]
      })
    }

    function Qj(TT) {
      let {
        quest: UT,
        upcoming: mT,
        t: WT
      } = TT;
      return (0, JM.jsxs)("li", {
        className: ez()("Baf2BookQuest", {
          Done: UT[3],
          Upcoming: mT
        }),
        children: [(0, JM.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: UT[3] ? "\u2713" : "\u25cb"
        }), (0, JM.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, JM.jsx)("strong", {
            className: "Baf2BookTitle",
            children: aj(WT, UT)
          }), (0, JM.jsx)(Xj, {
            goal: UT[2],
            t: WT
          })]
        })]
      })
    }

    function sj(TT) {
      let {
        done: UT,
        total: mT,
        t: WT
      } = TT;
      const zT = mT > 0 ? Math.round(100 * UT / mT) : 0,
        MT = WT(`${lj}questBookChapterProgress`, {
          done: String(UT),
          total: String(mT)
        });
      return (0, JM.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, JM.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": MT,
          "aria-valuemin": 0,
          "aria-valuemax": mT,
          "aria-valuenow": UT,
          children: (0, JM.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${zT}%`
            }
          })
        }), (0, JM.jsx)("span", {
          className: "Baf2BookProgressText",
          children: MT
        })]
      })
    }

    function Fj(TT) {
      let {
        view: UT,
        tier: mT,
        quests: WT,
        t: zT
      } = TT;
      const MT = mT === UT.tier,
        gT = (null !== WT && void 0 !== WT ? WT : []).filter((TT => !TT[4])),
        nT = (null !== WT && void 0 !== WT ? WT : []).filter((TT => TT[4])),
        HT = gT.filter((TT => TT[3])).length,
        kT = MT && UT.name ? yj(UT.name) : null,
        jT = gT.findIndex((TT => !TT[3] && yj(TT) === kT));
      return (0, JM.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, JM.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, JM.jsx)("h3", {
            children: qj(zT, mT)
          }), gT.length > 0 && (0, JM.jsx)(sj, {
            done: HT,
            total: gT.length,
            t: zT
          }), MT && UT.core && (0, JM.jsx)(ij, {
            core: UT.core,
            t: zT
          })]
        }), (0, JM.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === WT && MT && (0, JM.jsx)(Ij, {
            view: UT,
            t: zT
          }), gT.map(((TT, mT) => mT === jT ? (0, JM.jsx)(Ij, {
            view: UT,
            t: zT
          }, yj(TT)) : (0, JM.jsx)(Qj, {
            quest: TT,
            upcoming: !TT[3],
            t: zT
          }, yj(TT))))]
        }), MT && UT.side && (0, JM.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, JM.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: zT(`${lj}questSide`)
          }), (0, JM.jsx)("strong", {
            className: "Baf2BookTitle",
            children: aj(zT, UT.side.name)
          }), (0, JM.jsx)(Xj, {
            goal: UT.side.goal,
            t: zT
          }), (0, JM.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, JM.jsx)(Oj, {
              row: UT.side.row,
              view: UT,
              t: zT
            })
          })]
        }), nT.length > 0 && (0, JM.jsxs)(JM.Fragment, {
          children: [(0, JM.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: zT(`${lj}questBookSidesDone`)
          }), (0, JM.jsx)("ol", {
            className: "Baf2BookQuests",
            children: nT.map((TT => (0, JM.jsx)(Qj, {
              quest: TT,
              upcoming: !1,
              t: zT
            }, yj(TT))))
          })]
        })]
      })
    }

    function Pj(TT) {
      var UT, mT, MT;
      let {
        store: gT,
        tutorial: nT,
        close: HT
      } = TT;
      const {
        t: kT
      } = (0, dz.z)(), lT = (0, nj.j)(sz, gT.get()), LT = null !== (UT = lT.tier) && void 0 !== UT ? UT : 1, [pT, BT] = (0, WT.useState)(null), vT = (null === pT || void 0 === pT ? void 0 : pT.at) === LT ? pT.tier : LT, fT = (0, WT.useRef)(null), qT = null !== lT.chapters;
      (0, WT.useEffect)((() => {
        var TT;
        fT.current && (fT.current.scrollTop = 0);
        const UT = null === (TT = fT.current) || void 0 === TT ? void 0 : TT.querySelector(".Baf2BookQuest.Current");
        if (fT.current && UT) {
          const TT = UT.getBoundingClientRect().bottom - fT.current.getBoundingClientRect().bottom;
          TT > 0 && (fT.current.scrollTop += Math.min(TT, UT.getBoundingClientRect().top - fT.current.getBoundingClientRect().top))
        }
      }), [vT, qT]);
      const iT = null === (mT = lT.chapters) || void 0 === mT ? void 0 : mT.find((TT => {
        let [UT] = TT;
        return UT === vT
      }));
      return (0, JM.jsx)(bg.e, {
        close: HT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, JM.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: Lj,
          children: [(0, JM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JM.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: kT(`${lj}questBookTitle`)
            }), (0, JM.jsx)(Og.l, {
              className: "Baf2BookTutorialButton",
              disabled: !lT.tutorialKnown,
              ariaLabel: kT(dj[lT.tutorial]),
              title: kT(dj[lT.tutorial]),
              onClick: () => {
                nT.next()
              },
              children: (0, JM.jsx)(wz.c, {
                name: xj[lT.tutorial]
              })
            }), (0, JM.jsx)(Og.k, {
              onClick: HT
            })]
          }), (0, JM.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": kT(`${lj}questBookChapters`),
            "data-pad-initial-area": !0,
            children: zT.slice(0, jT()).map(((TT, UT) => {
              const mT = UT + 1,
                {
                  kind: WT,
                  short: zT
                } = cT(mT),
                MT = ZT(mT, LT),
                gT = MT ? kT(`${lj}coreAtomicHidden`) : qj(kT, mT);
              return (0, JM.jsx)("li", {
                children: (0, JM.jsx)("button", {
                  type: "button",
                  className: ez()({
                    Stage: "tier" !== WT,
                    Atomic: "atomic" === WT,
                    Current: mT === LT,
                    Selected: mT === vT
                  }),
                  disabled: mT > LT,
                  "aria-pressed": mT === vT,
                  "aria-label": gT,
                  title: MT ? void 0 : gT,
                  onClick: () => {
                    BT({
                      tier: mT,
                      at: LT
                    })
                  },
                  children: MT ? "?" : zT
                })
              }, TT.nameKey)
            }))
          }), (0, JM.jsxs)("div", {
            ref: fT,
            className: "Baf2BookBody",
            children: [Cz(lT) && vT === LT && (0, JM.jsx)("p", {
              className: "Baf2BookEmpty",
              children: kT(`${lj}questBookAllDone`)
            }), (0, JM.jsx)(Fj, {
              view: lT,
              tier: vT,
              quests: null !== (MT = null === iT || void 0 === iT ? void 0 : iT[1]) && void 0 !== MT ? MT : null,
              t: kT
            })]
          })]
        })
      })
    }
    const Vj = "buildAFactory2Game:";

    function uj(TT) {
      let {
        tiers: UT,
        from: mT,
        tier: WT,
        shown: zT,
        VL: MT
      } = TT;
      const {
        t: gT
      } = (0, dz.z)(), nT = UT.map(((TT, UT) => {
        const nT = mT + UT,
          {
            kind: HT,
            short: kT
          } = cT(nT),
          jT = ZT(nT, WT);
        return (0, JM.jsx)("li", {
          children: (0, JM.jsx)("button", {
            type: "button",
            className: ez()({
              Stage: "tier" !== HT,
              Silhouette: jT,
              Reached: nT <= WT,
              Current: nT === WT,
              Next: nT === WT + 1,
              Selected: nT === zT
            }),
            disabled: jT,
            "aria-pressed": nT === zT,
            "aria-label": jT ? gT(`${Vj}coreAtomicHidden`) : void 0,
            title: jT ? void 0 : gT(`${Vj}${TT.nameKey}`),
            onClick: () => {
              MT(nT)
            },
            children: jT ? "?" : kT
          })
        }, TT.nameKey)
      }));
      return (0, JM.jsx)(JM.Fragment, {
        children: nT
      })
    }

    function Cj(TT) {
      let {
        id: UT,
        label: mT,
        tiers: WT,
        from: zT,
        ...MT
      } = TT;
      return (0, JM.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, JM.jsx)("span", {
          id: UT,
          className: "Baf2CoreLadderLabel",
          children: mT
        }), (0, JM.jsx)("ol", {
          "aria-labelledby": UT,
          children: (0, JM.jsx)(uj, {
            ...MT,
            tiers: WT,
            from: zT
          })
        })]
      })
    }

    function rj(TT) {
      const {
        t: UT
      } = (0, dz.z)(), mT = zT.findIndex((TT => void 0 !== TT.stage)), WT = zT.findIndex((TT => void 0 !== TT.reactorTier)), MT = mT < 0 ? zT : zT.slice(0, mT), gT = mT < 0 ? [] : zT.slice(mT, WT < 0 ? void 0 : WT), HT = WT < 0 || !nT() ? [] : zT.slice(WT);
      return (0, JM.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, JM.jsx)(Cj, {
          ...TT,
          id: "baf2CoreTiersLabel",
          label: UT(`${Vj}coreTiersLabel`),
          tiers: MT,
          from: 1
        }), gT.length > 0 && (0, JM.jsx)(Cj, {
          ...TT,
          id: "baf2CoreStagesLabel",
          label: UT(`${Vj}coreStagesLabel`),
          tiers: gT,
          from: mT + 1
        }), HT.length > 0 && (0, JM.jsx)(Cj, {
          ...TT,
          id: "baf2CoreAtomicLabel",
          label: UT(`${Vj}coreAtomicLabel`),
          tiers: HT,
          from: WT + 1
        })]
      })
    }
    const Kj = "buildAFactory2Game:";

    function Sj(TT) {
      let {
        item: UT,
        itemNames: mT,
        children: WT
      } = TT;
      return (0, JM.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, JM.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, JM.jsx)(tz.b, {
            itemName: UT,
            amount: 0
          })
        }), (0, JM.jsx)(az.e, {
          text: mT[UT]
        }), WT]
      })
    }

    function Gj(TT) {
      const UT = new Map;
      for (const {
          block: WT
        }
        of TT.newDeposits) {
        var mT;
        UT.set(WT, (null !== (mT = UT.get(WT)) && void 0 !== mT ? mT : 0) + 1)
      }
      return [...UT]
    }

    function Nj(TT) {
      let {
        value: UT,
        label: mT,
        more: WT
      } = TT;
      return (0, JM.jsxs)("li", {
        children: [(0, JM.jsx)("strong", {
          children: UT
        }), (0, JM.jsx)("span", {
          children: mT
        }), WT > 0 && (0, JM.jsxs)("em", {
          children: ["+", WT]
        })]
      })
    }

    function Ej(TT) {
      let {
        items: UT,
        itemNames: mT
      } = TT;
      const {
        t: zT
      } = (0, dz.z)(), [MT, gT] = (0, WT.useState)(null), nT = null !== MT && UT.includes(MT) ? MT : null;
      return (0, JM.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, JM.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: zT(`${Kj}coreRewardUnlocks`)
        }), (0, JM.jsx)("ul", {
          children: UT.map((TT => (0, JM.jsx)("li", {
            children: (0, JM.jsx)("button", {
              type: "button",
              className: ez()("Baf2PanelIcon", {
                Picked: TT === nT
              }),
              title: zM(zT, TT),
              "aria-label": zM(zT, TT),
              "aria-pressed": TT === nT,
              onClick: () => {
                gT(TT === nT ? null : TT)
              },
              children: (0, JM.jsx)(tz.b, {
                itemName: TT,
                amount: 0
              })
            })
          }, TT)))
        }), (0, JM.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== nT && (0, JM.jsxs)(JM.Fragment, {
            children: [(0, JM.jsx)(az.e, {
              text: mT[nT]
            }), " \xb7 ", (0, JM.jsx)(az.e, {
              text: mT[tT(nT)]
            })]
          }), null === nT && zT(`${Kj}coreRecipeTap`)]
        })]
      })
    }

    function hj(TT) {
      var UT, mT;
      let {
        def: WT,
        tier: zT,
        itemNames: MT
      } = TT;
      const {
        t: gT
      } = (0, dz.z)(), nT = zT > 1 ? vT(zT - 1) : void 0, HT = Math.round(2 * WT.islandRadius), kT = nT ? Math.round(2 * nT.islandRadius) : HT, jT = zT >= 3 ? OW(zT) : null;
      return (0, JM.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, JM.jsxs)("ul", {
          className: ez()("Baf2CoreStats", {
            Four: null !== jT
          }),
          children: [(0, JM.jsx)(Nj, {
            value: `${HT}\xd7${HT}`,
            label: gT(`${Kj}coreStatIsland`),
            more: HT - kT
          }), (0, JM.jsx)(Nj, {
            value: String(WT.machineAllowance),
            label: gT(`${Kj}coreStatMachines`),
            more: WT.machineAllowance - (null !== (UT = null === nT || void 0 === nT ? void 0 : nT.machineAllowance) && void 0 !== UT ? UT : WT.machineAllowance)
          }), (0, JM.jsx)(Nj, {
            value: String(WT.beltAllowance),
            label: gT(`${Kj}coreStatBelts`),
            more: WT.beltAllowance - (null !== (mT = null === nT || void 0 === nT ? void 0 : nT.beltAllowance) && void 0 !== mT ? mT : WT.beltAllowance)
          }), null !== jT && (0, JM.jsx)(Nj, {
            value: String(jT),
            label: gT(`${Kj}coreStatStorage`),
            more: jT - (nT ? OW(zT - 1) : jT)
          })]
        }), WT.reward && (0, JM.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, JM.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: gT(`${Kj}coreRewardItem`)
          }), (0, JM.jsx)(Sj, {
            item: WT.reward,
            itemNames: MT
          })]
        }), WT.newDeposits.length > 0 && (0, JM.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, JM.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: gT(WT.newDeposits.length > 1 ? `${Kj}coreRewardDeposits` : `${Kj}coreRewardDeposit`)
          }), Gj(WT).map((TT => {
            let [UT, mT] = TT;
            return (0, JM.jsx)(Sj, {
              item: UT,
              itemNames: MT,
              children: mT > 1 && ` \xd7${mT}`
            }, UT)
          }))]
        }), WT.unlocks.length > 0 && (0, JM.jsx)(Ej, {
          items: WT.unlocks,
          itemNames: MT
        }), (0, JM.jsx)(Dj, {
          tier: zT
        })]
      })
    }

    function Dj(TT) {
      let {
        tier: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)(), WT = cz[UT];
      if (!WT) return null;
      const zT = Zz(UT, 0, 0).barrierMax !== Zz(UT - 1, 0, 0).barrierMax;
      return (0, JM.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, JM.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, JM.jsx)(tz.b, {
            itemName: zT ? kz.Chestplate : Hz,
            amount: 0
          })
        }), mT(`${Kj}gearPerkLine`, {
          perk: mT(`${Kj}${WT}`)
        })]
      })
    }

    function oj(TT, UT) {
      return null === TT ? UT : TT.value
    }

    function Aj(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === TT || mT - TT.atMs >= WT ? null : zT(TT.value, UT) ? TT.armed ? null : TT : TT.armed ? TT : {
        ...TT,
        armed: !0
      }
    }

    function Rj(TT, UT) {
      const mT = UT.filter((UT => {
        var mT;
        return !1 !== (null === (mT = TT.get(UT)) || void 0 === mT ? void 0 : mT.value)
      }));
      for (const [WT, zT] of TT) zT.value && !UT.includes(WT) && mT.push(WT);
      return mT
    }

    function Tl(TT, UT, mT, zT) {
      const [MT, gT] = (0, WT.useState)((() => new Map)), nT = () => {
        gT((UT => function(TT, UT, mT, WT) {
          var zT;
          let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            gT = null;
          for (const [nT, HT] of TT) {
            const zT = Aj(HT, UT(nT), mT, WT, MT);
            zT !== HT && (gT ??= new Map(TT), null === zT ? gT.delete(nT) : gT.set(nT, zT))
          }
          return null !== (zT = gT) && void 0 !== zT ? zT : TT
        }(UT, TT, Date.now(), mT, zT)))
      };
      (0, WT.useEffect)((() => {
        nT()
      }), [UT, mT]), (0, WT.useEffect)((() => {
        if (0 === MT.size) return;
        const TT = Math.min(...[...MT.values()].map((TT => TT.atMs))),
          UT = setTimeout(nT, Math.max(0, TT + mT - Date.now()) + 1);
        return () => {
          clearTimeout(UT)
        }
      }), [MT, UT, mT]);
      return [MT, (UT, mT) => {
        gT((WT => {
          const MT = new Map(WT);
          return MT.set(UT, function(TT, UT, mT) {
            return {
              value: TT,
              atMs: mT,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(TT, UT)
            }
          }(mT, TT(UT), Date.now(), zT)), MT
        }))
      }]
    }
    const Ul = "buildAFactory2Game:";

    function ml(TT) {
      let {
        message: UT,
        itemNames: mT
      } = TT;
      const zT = Cg(),
        {
          t: MT
        } = (0, dz.z)(),
        [gT, nT] = (0, WT.useState)(!1),
        [HT, kT] = function(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ig;
          const [mT, WT] = Tl((UT => TT.includes(UT)), TT, UT, Object.is);
          return [Rj(mT, TT), WT]
        }(UT.baf2CoreBankPaused),
        jT = new Set(HT),
        lT = [...UT.baf2CoreBanked];
      for (const WT of jT) lT.some((TT => {
        let [UT] = TT;
        return UT === WT
      })) || lT.push([WT, 0]);
      return 0 === lT.length ? null : (0, JM.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, JM.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": gT,
          onClick: () => {
            nT(!gT)
          },
          children: [(0, JM.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: MT(`${Ul}coreBankedLater`)
          }), (0, JM.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: lT.map((TT => {
              let [UT, mT] = TT;
              const WT = jT.has(UT);
              return (0, JM.jsxs)("span", {
                className: ez()({
                  Paused: WT
                }),
                title: WT ? MT(`${Ul}coreBankPausedTag`) : void 0,
                children: [(0, JM.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, JM.jsx)(tz.b, {
                    itemName: UT,
                    amount: 0
                  })
                }), mT, WT && (0, JM.jsx)(wz.c, {
                  name: "pause"
                })]
              }, UT)
            }))
          }), (0, JM.jsx)(wz.c, {
            name: gT ? "angle-up" : "angle-down"
          })]
        }), gT && (0, JM.jsxs)(JM.Fragment, {
          children: [(0, JM.jsx)("ul", {
            children: lT.map((TT => {
              let [UT, WT] = TT;
              const gT = jT.has(UT);
              return (0, JM.jsxs)("li", {
                children: [(0, JM.jsxs)(Sj, {
                  item: UT,
                  itemNames: mT,
                  children: [(0, JM.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: WT
                  }), gT && (0, JM.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: MT(`${Ul}coreBankPausedTag`)
                  })]
                }), (0, JM.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, JM.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === WT,
                    onClick: () => {
                      zT.send(`baf2corewithdraw ${WT} ${UT}`)
                    },
                    children: MT(`${Ul}coreTake`)
                  }), (0, JM.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      zT.send(`${iT} ${UT}`), kT(UT, !gT)
                    },
                    children: MT(gT ? `${Ul}coreBankResume` : `${Ul}coreBankStop`)
                  })]
                })]
              }, UT)
            }))
          }), (0, JM.jsx)("p", {
            className: "Baf2CoreHint",
            children: MT(`${Ul}coreBankNote`)
          })]
        })]
      })
    }
    const Wl = "buildAFactory2Game:";

    function zl(TT) {
      const UT = Math.max(0, Math.floor(TT));
      return `${Math.floor(UT/60)}:${String(UT%60).padStart(2,"0")}`
    }

    function Ml(TT) {
      let {
        item: UT
      } = TT;
      return (0, JM.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, JM.jsx)(tz.b, {
          itemName: UT,
          amount: 0
        })
      })
    }

    function gl() {
      return (0, JM.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, JM.jsx)(wz.c, {
          name: "bolt"
        })
      })
    }

    function nl(TT) {
      let {
        charge: UT,
        hint: mT,
        itemNames: WT
      } = TT;
      const zT = Cg(),
        {
          t: MT
        } = (0, dz.z)(),
        [gT, nT, HT, kT, jT, lT, LT] = UT,
        [pT, BT] = function(TT) {
          var UT;
          let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ig,
            WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [zT, MT] = Tl((() => TT), TT, mT, WT);
          return [oj(null !== (UT = zT.get("")) && void 0 !== UT ? UT : null, TT), TT => {
            MT("", TT)
          }]
        }(LT),
        ZT = pT === LT ? lT : !pT,
        cT = kT >= jT,
        vT = gT.find((TT => {
          let [, UT, mT] = TT;
          return mT < .9 * UT
        }));
      let fT = `${Wl}coreChargeWaiting`,
        qT = {};
      return cT ? fT = `${Wl}coreChargeDone` : pT ? fT = `${Wl}coreChargeStopped` : ZT && mT ? (fT = `${Wl}${mT[0]}`, qT = {
        item: zM(MT, mT[1])
      }) : ZT && vT ? (fT = `${Wl}coreChargeShort`, qT = {
        item: zM(MT, vT[0])
      }) : ZT && nT > 0 && !HT ? fT = `${Wl}coreChargePower` : ZT && (fT = `${Wl}coreChargeRunning`), (0, JM.jsxs)("div", {
        className: ez()("Baf2CoreCharge", {
          Waiting: !ZT && !cT,
          Done: cT
        }),
        children: [(0, JM.jsxs)("h4", {
          children: [MT(`${Wl}coreChargeTitle`), (0, JM.jsx)("span", {
            children: MT(`${Wl}coreChargeProgress`, {
              done: zl(kT),
              need: zl(jT)
            })
          })]
        }), (0, JM.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, JM.jsx)("div", {
            style: {
              width: 100 * Math.min(kT, jT) / jT + "%"
            }
          })
        }), (0, JM.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [gT.map((TT => {
            var UT;
            let [mT, zT, gT] = TT;
            const nT = gT >= .9 * zT;
            return (0, JM.jsxs)("li", {
              className: ez()({
                Done: nT,
                Short: ZT && !nT
              }),
              children: [(0, JM.jsx)(Ml, {
                item: mT
              }), (0, JM.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, JM.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, JM.jsx)(az.e, {
                    text: null !== (UT = WT[mT]) && void 0 !== UT ? UT : mT
                  }), (0, JM.jsx)("span", {
                    children: MT(`${Wl}coreChargeItem`, {
                      now: String(gT),
                      need: String(zT)
                    })
                  })]
                }), (0, JM.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, JM.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*gT/zT)}%`
                    }
                  })
                })]
              })]
            }, mT)
          })), nT > 0 && (0, JM.jsxs)("li", {
            className: ez()("Baf2CoreChargePower", {
              Short: ZT && !HT
            }),
            children: [(0, JM.jsx)(gl, {}), (0, JM.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, JM.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, JM.jsx)("span", {
                  children: MT(`${Wl}coreChargePowerRow`, {
                    power: oT(nT)
                  })
                })
              })
            })]
          })]
        }), (0, JM.jsx)("p", {
          className: "Baf2CoreHint",
          children: MT(fT, qT)
        }), !cT && (ZT || pT) && (0, JM.jsx)("button", {
          type: "button",
          className: ez()("Baf2CoreChargeToggle", {
            Stopped: pT
          }),
          onClick: () => {
            zT.send(OT), BT(!pT)
          },
          children: MT(pT ? `${Wl}coreChargeRestart` : `${Wl}coreChargeStop`)
        })]
      })
    }

    function Hl(TT) {
      let {
        charge: UT,
        reached: mT,
        itemNames: WT
      } = TT;
      const {
        t: zT
      } = (0, dz.z)();
      return (0, JM.jsxs)("div", {
        className: ez()("Baf2CoreCharge", {
          Done: mT
        }),
        children: [(0, JM.jsxs)("h4", {
          children: [zT(`${Wl}coreChargeTitle`), (0, JM.jsx)("span", {
            children: zT(`${Wl}coreChargeSpecTime`, {
              time: zl(UT.seconds)
            })
          })]
        }), (0, JM.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [UT.items.map((TT => {
            var UT;
            let {
              item: MT,
              amount: gT
            } = TT;
            return (0, JM.jsxs)("li", {
              className: ez()({
                Done: mT
              }),
              children: [(0, JM.jsx)(Ml, {
                item: MT
              }), (0, JM.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, JM.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, JM.jsx)(az.e, {
                    text: null !== (UT = WT[MT]) && void 0 !== UT ? UT : MT
                  }), (0, JM.jsx)("span", {
                    children: zT(`${Wl}coreChargeSpecItem`, {
                      need: String(gT)
                    })
                  })]
                })
              })]
            }, MT)
          })), UT.powerPerS > 0 && (0, JM.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, JM.jsx)(gl, {}), (0, JM.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, JM.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, JM.jsx)("span", {
                  children: zT(`${Wl}coreChargePowerRow`, {
                    power: oT(UT.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const kl = "buildAFactory2Game:";

    function jl(TT) {
      let {
        def: UT,
        reached: mT,
        banked: WT,
        itemNames: zT
      } = TT;
      const {
        t: MT
      } = (0, dz.z)();
      return (0, JM.jsx)("ul", {
        className: "Baf2CoreCost",
        children: UT.cost.map((TT => {
          let {
            item: UT,
            amount: gT
          } = TT;
          const nT = mT ? 0 : WT(UT);
          return (0, JM.jsx)("li", {
            children: (0, JM.jsx)(Sj, {
              item: UT,
              itemNames: zT,
              children: (0, JM.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: nT > 0 ? MT(`${kl}coreBankedFor`, {
                  amount: String(nT),
                  total: String(gT)
                }) : `\xd7${gT}`
              })
            })
          }, UT)
        }))
      })
    }

    function ll(TT, UT) {
      if (UT >= jT()) return TT(`${kl}coreMaxTier`);
      const mT = kT[UT + 1];
      return mT && !mT.startsWith("upgradeCore") ? TT(`${kl}coreGateQuest`, {
        quest: TT(`${kl}quest_${mT}`)
      }) : TT(`${kl}coreGateClosed`)
    }

    function Ll() {
      const {
        t: TT
      } = (0, dz.z)(), UT = Cg(), mT = (0, WT.useRef)(null), zT = (0, WT.useRef)(Date.now());
      return Ak(!0, mT), (0, JM.jsx)("div", {
        ref: mT,
        className: "Baf2CoreGrow",
        children: (0, JM.jsx)(Og.l, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - zT.current >= 600 && UT.send(qT)
          },
          children: TT(`${kl}coreGrow`)
        })
      })
    }

    function pl(TT) {
      let {
        message: UT,
        itemNames: mT,
        next: WT
      } = TT;
      const zT = Cg(),
        {
          t: MT
        } = (0, dz.z)(),
        gT = UT.baf2CoreTier,
        nT = UT.baf2CoreReady,
        HT = UT.baf2CoreNeeds.filter((TT => {
          let [, UT, mT, WT] = TT;
          return WT > 0 && UT < mT
        })),
        kT = UT.baf2CoreNeeds.every((TT => {
          let [, UT, mT] = TT;
          return UT >= mT
        })),
        jT = UT.baf2CoreKeep;
      return (0, JM.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, JM.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [nT && (0, JM.jsx)(Ll, {}), (0, JM.jsx)("h3", {
            children: MT(`${kl}coreBring`)
          }), (0, JM.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: UT.baf2CoreNeeds.map((TT => {
              let [UT, WT, gT, nT] = TT;
              return (0, JM.jsxs)("li", {
                className: ez()({
                  Done: WT >= gT
                }),
                children: [(0, JM.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, JM.jsx)(tz.b, {
                    itemName: UT,
                    amount: 0
                  })
                }), (0, JM.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, JM.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, JM.jsx)(az.e, {
                      text: mT[UT]
                    }), (0, JM.jsxs)("span", {
                      children: [WT, "/", gT]
                    })]
                  }), (0, JM.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, JM.jsx)("div", {
                      style: {
                        width: 100 * WT / gT + "%"
                      }
                    }), nT > 0 && (0, JM.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * nT / gT + "%"
                      }
                    })]
                  })]
                }), nT > 0 && WT < gT && (0, JM.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    zT.send(`${bT} ${UT}`)
                  },
                  children: MT(`${kl}coreDeposit`, {
                    amount: String(nT)
                  })
                })]
              }, UT)
            }))
          }), UT.baf2CoreCharge && (0, JM.jsx)(nl, {
            charge: UT.baf2CoreCharge,
            hint: UT.baf2CoreChargeHint,
            itemNames: mT
          }), !nT && HT.length > 1 && (0, JM.jsx)(Og.l, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              zT.send(qT)
            },
            children: MT(`${kl}coreHandOver`)
          }), !nT && void 0 !== jT && (0, JM.jsx)("p", {
            className: "Baf2CoreHint",
            children: MT(`${kl}coreKeepRest`, {
              item: zM(MT, jT)
            })
          }), !nT && !kT && 0 === HT.length && void 0 === jT && (0, JM.jsx)("p", {
            className: "Baf2CoreHint",
            children: MT(`${kl}coreNothingHeld`)
          }), (0, JM.jsx)(ml, {
            message: UT,
            itemNames: mT
          })]
        }), (0, JM.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, JM.jsx)("h3", {
            children: MT(`${kl}coreRewards`)
          }), (0, JM.jsx)(hj, {
            def: WT,
            tier: gT + 1,
            itemNames: mT
          })]
        })]
      })
    }

    function Bl(TT) {
      let {
        message: UT,
        itemNames: mT,
        shown: WT
      } = TT;
      const {
        t: zT
      } = (0, dz.z)(), MT = UT.baf2CoreTier, gT = vT(WT), nT = WT <= MT, HT = new Map(UT.baf2CoreBanked), kT = !fT(MT, eT(UT)) && WT === MT;
      return (0, JM.jsxs)("div", {
        className: ez()("Baf2CoreBody", {
          Locked: !nT
        }),
        children: [(0, JM.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, JM.jsx)("h3", {
            children: zT(nT ? `${kl}coreItTook` : `${kl}coreItNeeds`)
          }), 0 === gT.cost.length && (0, JM.jsx)("p", {
            className: "Baf2CoreHint",
            children: zT(`${kl}coreTierStart`)
          }), gT.cost.length > 0 && (0, JM.jsx)(jl, {
            def: gT,
            reached: nT,
            banked: TT => {
              var UT;
              return function(TT, UT, mT, WT) {
                let zT = TT;
                for (let gT = UT + 2; gT <= mT; gT++) {
                  var MT;
                  const TT = vT(gT).cost.find((TT => TT.item === WT)),
                    UT = Math.min(zT, null !== (MT = null === TT || void 0 === TT ? void 0 : TT.amount) && void 0 !== MT ? MT : 0);
                  if (gT === mT) return UT;
                  zT -= UT
                }
                return 0
              }(null !== (UT = HT.get(TT)) && void 0 !== UT ? UT : 0, MT, WT, TT)
            },
            itemNames: mT
          }), gT.charge && (0, JM.jsx)(Hl, {
            charge: gT.charge,
            reached: nT,
            itemNames: mT
          }), kT && (0, JM.jsxs)(JM.Fragment, {
            children: [(0, JM.jsx)("p", {
              className: "Baf2CoreHint",
              children: ll(zT, MT)
            }), (0, JM.jsx)(ml, {
              message: UT,
              itemNames: mT
            })]
          })]
        }), (0, JM.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, JM.jsx)("h3", {
            children: zT(nT ? `${kl}coreGave` : `${kl}coreLockedRewards`)
          }), (0, JM.jsx)(hj, {
            def: gT,
            tier: WT,
            itemNames: mT
          })]
        })]
      })
    }

    function Zl(TT, UT) {
      const {
        key: mT,
        params: WT
      } = pT(UT - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return TT(`${kl}${mT}`, WT)
    }
    const cl = "buildAFactory2Game:",
      vl = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      fl = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function ql(TT) {
      let {
        view: UT,
        close: mT,
        askIslands: zT
      } = TT;
      const {
        t: MT
      } = (0, dz.z)(), [gT, nT] = (0, WT.useState)(!1);
      (0, WT.useEffect)((() => {
        if (!gT) return;
        const TT = window.setTimeout((() => {
          nT(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(TT)
        }
      }), [gT]);
      const {
        message: HT,
        itemNames: kT
      } = UT, jT = HT.baf2CoreTier, lT = vT(jT), LT = fT(jT, eT(HT)), [ZT, cT] = HT.baf2CoreMachines, [qT, iT] = HT.baf2CoreBelts, bT = HT.baf2CoreStorage, OT = HT.baf2CoreReady, [YT, JT] = (0, WT.useState)(null), xT = (null === YT || void 0 === YT ? void 0 : YT.at) === jT && YT.ready === OT ? YT.tier : LT ? jT + 1 : jT;
      let dT = "coreTierLocked";
      xT <= jT ? dT = "coreTierReached" : xT === jT + 1 && (dT = "coreTierNext");
      const wT = MT(`${cl}${vT(xT).nameKey}`),
        tT = xT === jT + 1 ? LT : null,
        aT = pT(xT, {
          tier: dT,
          stage: vl[dT],
          atomic: fl[dT]
        }),
        yT = MT(`${cl}${aT.key}`, {
          ...aT.params,
          name: wT
        }),
        XT = pT(jT, BT),
        IT = MT(`${cl}${XT.key}`, {
          ...XT.params,
          name: MT(`${cl}${lT.nameKey}`)
        });
      return (0, JM.jsx)(bg.e, {
        close: mT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, JM.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, JM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JM.jsxs)("div", {
              children: [(0, JM.jsx)("h2", {
                id: "baf2CoreTitle",
                children: MT(`${cl}coreTitle`)
              }), void 0 !== HT.baf2CoreIslandName && (0, JM.jsx)("p", {
                className: "Baf2CoreIsland",
                children: HT.baf2CoreIslandName
              }), (0, JM.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, JM.jsx)("span", {
                  children: IT
                }), (0, JM.jsx)("span", {
                  className: ez()({
                    Full: ZT >= cT
                  }),
                  children: MT(`${cl}coreMachineCount`, {
                    amount: String(ZT),
                    total: String(cT)
                  })
                }), (0, JM.jsx)("span", {
                  className: ez()({
                    Full: qT >= iT
                  }),
                  children: MT(`${cl}coreBeltCount`, {
                    amount: String(qT),
                    total: String(iT)
                  })
                }), void 0 !== bT && (0, JM.jsx)("span", {
                  className: ez()({
                    Full: bT[0] >= bT[1]
                  }),
                  children: MT(`${cl}coreStorageCount`, {
                    amount: String(bT[0]),
                    total: String(bT[1])
                  })
                })]
              })]
            }), (0, JM.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [HT.baf2CoreIslands && (0, JM.jsx)(Og.e, {
                className: "Baf2CoreIslandsButton",
                disabled: gT,
                onClick: () => {
                  nT(!0), zT()
                },
                children: MT(`${cl}islandsOpenButton`)
              }), (0, JM.jsx)(Og.k, {
                onClick: mT
              })]
            })]
          }), (0, JM.jsx)(rj, {
            tier: jT,
            shown: xT,
            VL: TT => {
              JT({
                tier: TT,
                at: jT,
                ready: OT
              })
            }
          }), (0, JM.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [yT, xT > jT + 1 && (0, JM.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: Zl(MT, xT)
            })]
          }), 6 === xT && xT > jT && (0, JM.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: MT(`${cl}coreStagesNote`)
          }), 11 === xT && xT > jT && (0, JM.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: MT(`${cl}coreAtomicNote`)
          }), tT && (0, JM.jsx)(pl, {
            message: HT,
            itemNames: kT,
            next: tT
          }), !tT && (0, JM.jsx)(Bl, {
            message: HT,
            itemNames: kT,
            shown: xT
          })]
        })
      })
    }
    const il = {
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
    const bl = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: HM,
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

    function Ol(TT) {
      return TT.baf2DropCometOreOnly ? "dropCometOre" : TT.baf2DropCometIsotope ? "seed" === TT.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function el(TT) {
      let {
        message: UT,
        quests: mT,
        close: zT,
        leave: MT
      } = TT;
      const gT = Cg(),
        {
          t: nT
        } = (0, dz.z)(),
        HT = (0, nj.j)(sz, mT.get()),
        kT = function(TT) {
          var UT;
          if (!XT(TT.tutorial)) return null;
          const mT = TT.rows.find((TT => TT.current)),
            WT = mT ? il[mT.key] : void 0;
          return null !== (UT = null !== WT && void 0 !== WT ? WT : TT.side ? il[TT.side.row.key] : void 0) && void 0 !== UT ? UT : null
        }(HT),
        jT = null === HT.tier || lM(HT.tier),
        lT = jT ? bl : bl.filter((TT => {
          let {
            item: UT
          } = TT;
          return UT !== HM
        })),
        [LT, pT] = (0, WT.useState)(null),
        BT = null !== LT && void 0 !== LT ? LT : !UT.baf2DropFoundSalvage && jT,
        ZT = UT.baf2DropRuinDistance,
        cT = UT.baf2DropComet,
        vT = UT.baf2DropOldWorks,
        fT = UT.baf2DropGrove,
        qT = function(TT) {
          return 2 + Number(void 0 !== TT.baf2DropComet) + Number(!!TT.baf2DropOwedComet || void 0 !== TT.baf2DropOwedWaitMinutes) + Number(void 0 !== TT.baf2DropDigDistance) + Number(void 0 !== TT.baf2DropOldWorks) + Number(void 0 !== TT.baf2DropGrove)
        }(UT),
        iT = TT => {
          gT.send(function(TT) {
            return `baf2drop ${TT}`
          }(TT)), MT()
        };
      let bT = nT("buildAFactory2Game:dropRuinNone");
      if (null !== ZT) {
        let TT = UT.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        UT.baf2DropRuinOldWorks && (TT = "dropRuinOldWorks");
        const mT = void 0 === UT.baf2DropRuinCluster ? nT("buildAFactory2Game:dropRuinOpen") : nT("buildAFactory2Game:dropRuinCluster", {
          count: String(UT.baf2DropRuinCluster)
        });
        bT = `${nT(`buildAFactory2Game:${TT}`,{distance:String(ZT)})} ${mT}`
      }
      let OT = nT("buildAFactory2Game:dropBelowDescription");
      void 0 !== UT.baf2DropBelowLook && (OT = nT("buildAFactory2Game:dropBelowLook", {
        look: nT(UT.baf2DropBelowLook)
      }));
      const eT = "buildAFactory2Game:wildsRegion_survivorGrove" === UT.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        YT = bM(nT, 60 * function(TT) {
          const [UT, mT] = (0, WT.useState)((() => Date.now())), [zT, MT] = (0, WT.useState)(UT);
          return (0, WT.useEffect)((() => {
            const TT = Date.now();
            mT(TT), MT(TT)
          }), [TT]), (0, WT.useEffect)((() => {
            const TT = window.setInterval((() => {
              MT(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(TT)
            }
          }), []), Math.max(1, TT.baf2DropRenewMinutes - Math.floor((zT - UT) / 6e4))
        }(UT)),
        JT = function(TT, UT, mT) {
          return "ruin" === TT && !mT || "owed" === TT && !UT.baf2DropOwedComet ? null : TT
        }(kT, UT, null !== ZT),
        xT = function(TT) {
          for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
          return ez()("Baf2DropTile", ...mT, {
            Wanted: JT === TT
          })
        };
      return (0, JM.jsx)(bg.e, {
        close: zT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, JM.jsxs)("section", {
          className: ez()("Baf2Panel Baf2DropMap", {
            Many: qT >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, JM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JM.jsxs)("div", {
              children: [(0, JM.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: nT("buildAFactory2Game:dropMapTitle")
              }), (0, JM.jsx)("p", {
                children: nT("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, JM.jsx)(Og.k, {
              onClick: zT
            })]
          }), (0, JM.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== cT && (0, JM.jsxs)(Og.x, {
              className: xT("comet", "Baf2DropComet"),
              onClick: () => {
                iT("comet")
              },
              children: [(0, JM.jsx)("strong", {
                children: nT("buildAFactory2Game:dropComet")
              }), (0, JM.jsx)("span", {
                children: nT(`buildAFactory2Game:${Ol(UT)}`, {
                  distance: String(cT)
                })
              })]
            }), UT.baf2DropOwedComet && (0, JM.jsxs)(Og.x, {
              className: xT("owed", "Baf2DropComet"),
              onClick: () => {
                iT("owed")
              },
              children: [(0, JM.jsx)("strong", {
                children: nT("buildAFactory2Game:dropOwedComet")
              }), (0, JM.jsx)("span", {
                children: UT.baf2DropOwedIsotope ? nT("buildAFactory2Game:dropOwedIsotopeDescription") : nT("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== UT.baf2DropOwedWaitMinutes && (0, JM.jsxs)(Og.x, {
              className: xT("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, JM.jsx)("strong", {
                children: nT("buildAFactory2Game:dropOwedComet")
              }), (0, JM.jsx)("span", {
                children: nT("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(UT.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, JM.jsxs)(Og.e, {
              className: xT("below"),
              onClick: () => {
                iT("below")
              },
              children: [(0, JM.jsx)("strong", {
                children: nT("buildAFactory2Game:dropBelow")
              }), (0, JM.jsx)("span", {
                children: OT
              })]
            }), void 0 !== UT.baf2DropDigDistance && (0, JM.jsxs)(Og.s, {
              className: xT("dig"),
              onClick: () => {
                iT("dig")
              },
              children: [(0, JM.jsx)("strong", {
                children: nT("buildAFactory2Game:dropDig")
              }), (0, JM.jsx)("span", {
                children: nT("buildAFactory2Game:dropDigDescription", {
                  distance: String(UT.baf2DropDigDistance),
                  y: iM(UT.baf2DropDigY)
                })
              })]
            }), void 0 !== fT && (0, JM.jsxs)(Og.s, {
              className: xT("grove", "Baf2DropGrove"),
              onClick: () => {
                iT("grove")
              },
              children: [(0, JM.jsx)("strong", {
                children: nT("buildAFactory2Game:dropGrove")
              }), (0, JM.jsx)("span", {
                children: nT(`buildAFactory2Game:${eT}`, {
                  distance: String(fT)
                })
              })]
            }), (0, JM.jsxs)(Og.l, {
              className: xT("ruin"),
              disabled: null === ZT,
              onClick: () => {
                iT("ruin")
              },
              children: [(0, JM.jsx)("strong", {
                children: nT("buildAFactory2Game:dropRuin")
              }), (0, JM.jsx)("span", {
                children: bT
              })]
            }), void 0 !== vT && (0, JM.jsxs)(Og.I, {
              className: xT("works"),
              onClick: () => {
                iT("works")
              },
              children: [(0, JM.jsx)("strong", {
                children: nT("buildAFactory2Game:dropOldWorks")
              }), (0, JM.jsx)("span", {
                children: nT("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(vT)
                })
              })]
            })]
          }), (0, JM.jsx)("p", {
            className: "Baf2DropRenew",
            children: nT("buildAFactory2Game:dropRenew", {
              time: YT
            })
          }), (0, JM.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: BT,
            onToggle: TT => {
              TT.currentTarget.open !== BT && pT(TT.currentTarget.open)
            },
            children: [(0, JM.jsx)("summary", {
              children: nT("buildAFactory2Game:dropSalvageWhat")
            }), (0, JM.jsx)("p", {
              children: nT("buildAFactory2Game:dropSalvageIntro")
            }), (0, JM.jsx)("ul", {
              children: lT.map((TT => {
                let {
                  item: UT,
                  nameKey: mT,
                  useKey: WT,
                  params: zT
                } = TT;
                return (0, JM.jsxs)("li", {
                  children: [(0, JM.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, JM.jsx)(tz.b, {
                      itemName: UT,
                      amount: 0
                    })
                  }), (0, JM.jsxs)("span", {
                    children: [(0, JM.jsx)("strong", {
                      children: nT(mT)
                    }), ": ", nT(WT, zT)]
                  })]
                }, UT)
              }))
            })]
          })]
        })
      })
    }
    const Yl = "buildAFactory2Game:";

    function Jl(TT, UT) {
      return TT.sendIslandEdit(`baf2coopleave ${UT.baf2IslandId}`)
    }

    function xl(TT) {
      let {
        card: UT,
        canRename: mT,
        done: zT,
        t: MT
      } = TT;
      const gT = Cg(),
        [nT, HT] = (0, WT.useState)(UT.baf2IslandName),
        kT = Yk(nT),
        jT = "" === kT || Jk(kT),
        lT = () => {
          !jT && mT && (kT !== UT.baf2IslandName ? zT(gT.sendIslandEdit(`baf2islandrename ${UT.baf2IslandId} ${kT}`)) : zT(null))
        },
        LT = () => {
          zT(null)
        };
      return (0, JM.jsxs)("div", {
        className: "Baf2IslandForm",
        ...hk(LT),
        children: [(0, JM.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [MT(`${Yl}islandsRenameLabel`), (0, JM.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: nT,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Dk,
            onChange: TT => {
              HT(TT.target.value)
            },
            ...Ek(lT, LT)
          })]
        }), "" === kT && (0, JM.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: MT(`${Yl}islandsRenameEmpty`)
        }), Jk(kT) && (0, JM.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: MT(`${Yl}islandsNameReserved`)
        }), (0, JM.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, JM.jsx)(Og.s, {
            disabled: jT || !mT,
            onClick: lT,
            children: MT(`${Yl}islandsRenameSave`)
          }), (0, JM.jsx)(Og.e, {
            onClick: LT,
            children: MT(`${Yl}islandsCancel`)
          })]
        })]
      })
    }

    function dl(TT) {
      let {
        card: UT,
        canDelete: mT,
        done: zT,
        t: MT
      } = TT;
      const gT = Cg(),
        [nT, HT] = (0, WT.useState)(""),
        kT = function(TT, UT) {
          return Yk(TT).toLowerCase() === Yk(UT).toLowerCase()
        }(nT, UT.baf2IslandName),
        jT = () => {
          kT && mT && zT(gT.sendIslandEdit(`baf2islanddelete ${UT.baf2IslandId}`))
        },
        lT = () => {
          zT(null)
        },
        LT = Fk("name"),
        [pT, BT = ""] = MT(`${Yl}islandsDeleteConfirm`, {
          name: LT
        }).split(LT);
      return (0, JM.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...hk(lT),
        children: [(0, JM.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, JM.jsxs)("span", {
            children: [pT, (0, JM.jsx)("strong", {
              children: UT.baf2IslandName
            }), BT]
          }), (0, JM.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: nT,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Dk,
            onChange: TT => {
              HT(TT.target.value)
            },
            ...Ek(jT, lT)
          })]
        }), Kk(UT) && (0, JM.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: MT(`${Yl}islandsDeleteLeftBack`)
        }), (0, JM.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, JM.jsx)(Og.I, {
            disabled: !kT || !mT,
            onClick: jT,
            children: MT(`${Yl}islandsDeleteForGood`)
          }), (0, JM.jsx)(Og.e, {
            onClick: lT,
            children: MT(`${Yl}islandsCancel`)
          })]
        })]
      })
    }

    function wl(TT) {
      let {
        members: UT,
        t: mT
      } = TT;
      const WT = UT.length;
      return (0, JM.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, JM.jsxs)("span", {
          children: [1 === WT ? mT(`${Yl}islandsPlayersOne`) : mT(`${Yl}islandsPlayers`, {
            count: String(WT)
          }), " "]
        }), UT.map(((TT, UT) => (0, JM.jsxs)("span", {
          className: ez()("Baf2IslandMember", {
            Here: TT.baf2MemberHere
          }),
          title: TT.baf2MemberHere ? mT(`${Yl}islandsPlayerHere`) : void 0,
          children: [TT.baf2MemberName, UT < WT - 1 ? ", " : ""]
        }, TT.baf2MemberKey)))]
      })
    }

    function tl(TT) {
      let {
        card: UT,
        answered: mT,
        nowMs: zT,
        t: MT
      } = TT;
      const gT = Cg(),
        [nT, HT] = (0, WT.useState)(new Map),
        kT = Kk(UT);
      if (!kT) return null;
      return (0, JM.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, JM.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: MT(`${Yl}islandsLeftTitle`)
        }), (0, JM.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: kT.left.map((TT => {
            const WT = TT.baf2LeftKey,
              jT = Gk(nT.get(WT), mT, zT),
              lT = function(TT) {
                return 1 === TT ? [`${ik}islandsLeftItemsOne`] : [`${ik}islandsLeftItems`, {
                  count: String(TT)
                }]
              }(TT.baf2LeftItems);
            return (0, JM.jsx)("li", {
              className: ez()("Baf2IslandPerson", {
                Pending: jT
              }),
              children: (0, JM.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, JM.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: TT.baf2LeftName
                }), (0, JM.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: MT(lT[0], lT[1])
                }), kT.claim && (0, JM.jsx)(Og.s, {
                  className: "Baf2IslandPersonButton",
                  disabled: jT,
                  onClick: () => {
                    (TT => {
                      const mT = gT.sendIslandEdit(`baf2coopclaim ${UT.baf2IslandId} ${TT}`);
                      HT((UT => new Map(UT).set(TT, {
                        atMs: Date.now(),
                        answer: mT
                      })))
                    })(WT)
                  },
                  children: MT(`${Yl}islandsClaim`)
                })]
              })
            }, WT)
          }))
        }), kT.goThere && (0, JM.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: MT(`${Yl}islandsClaimGoThere`)
        })]
      })
    }

    function al(TT) {
      let {
        card: UT,
        view: mT,
        blocked: zT,
        maxIslands: MT,
        answered: gT,
        nowMs: nT,
        done: HT,
        openSocial: kT,
        t: jT
      } = TT;
      const lT = Cg(),
        [LT, pT] = (0, WT.useState)(new Map),
        [BT, ZT] = (0, WT.useState)(new Map),
        [cT, vT] = (0, WT.useState)(null),
        fT = (0, WT.useRef)(null);
      Uj(fT);
      const qT = UT.baf2IslandId,
        iT = UT.baf2IslandCoop,
        bT = null !== iT && void 0 !== iT && iT.baf2CoopMembers.some((TT => TT.baf2MemberKey === cT)) ? cT : null,
        OT = function(TT, UT) {
          const mT = TT.baf2IslandCoop;
          return mT && Sk(mT) || null !== UT ? void 0 : TT.baf2IslandInvitable
        }(UT, zT),
        eT = function(TT, UT) {
          const mT = TT.baf2IslandCoop;
          return mT && Sk(mT) ? {
            key: `${ik}islandsCoopFull`,
            params: {
              max: String(mT.baf2CoopMax)
            }
          } : void 0 !== TT.baf2IslandInvitable && null === UT || mT && !mT.baf2CoopManageHere ? null : "degraded" === UT || "stuck" === UT ? {
            key: `${ik}islandsInviteNotLoaded`
          } : null === UT || function(TT) {
            return "notHome" === TT || "wilds" === TT || "visiting" === TT
          }(UT) || tk(UT) ? {
            key: `${ik}islandsInviteGoThere`
          } : {
            key: `${ik}islandsInviteBusy`
          }
        }(UT, zT),
        YT = () => {
          var TT;
          vT(null), null === (TT = fT.current) || void 0 === TT || TT.focus()
        };
      return (0, JM.jsxs)("div", {
        ref: fT,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...hk(null === bT ? HT : YT),
        children: [iT && (0, JM.jsxs)(JM.Fragment, {
          children: [(0, JM.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: jT(`${Yl}islandsPlayersTitle`, {
              count: String(iT.baf2CoopMembers.length),
              max: String(iT.baf2CoopMax)
            })
          }), (0, JM.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: iT.baf2CoopMembers.map(((TT, UT) => {
              const WT = TT.baf2MemberKey,
                zT = Gk(LT.get(WT), gT, nT);
              return (0, JM.jsxs)("li", {
                className: ez()("Baf2IslandPerson", {
                  Pending: zT
                }),
                children: [(0, JM.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, JM.jsx)("span", {
                    className: ez()("Baf2IslandPersonName", {
                      Here: TT.baf2MemberHere
                    }),
                    children: TT.baf2MemberName
                  }), TT.baf2MemberHere && (0, JM.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: jT(`${Yl}islandsPlayerHere`)
                  }), 0 === UT && (0, JM.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: jT(`${Yl}islandsPlayerOwner`)
                  }), mT.remove && UT > 0 && !zT && bT !== WT && (0, JM.jsx)(Og.J, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var TT;
                      vT(WT), null === (TT = fT.current) || void 0 === TT || TT.focus()
                    },
                    children: jT(`${Yl}islandsRemove`)
                  })]
                }), bT === WT && (0, JM.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, JM.jsx)("p", {
                    children: Pk(jT, `${Yl}islandsRemoveConfirm`, {
                      player: TT.baf2MemberName
                    })
                  }), (0, JM.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, JM.jsx)(Og.I, {
                      onClick: () => {
                        (TT => {
                          const UT = lT.sendIslandEdit(`baf2coopremove ${qT} ${TT.baf2MemberKey}`);
                          pT((mT => new Map(mT).set(TT.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: UT
                          }))), YT()
                        })(TT)
                      },
                      children: jT(`${Yl}islandsRemoveYes`)
                    }), (0, JM.jsx)(Og.e, {
                      onClick: YT,
                      children: jT(`${Yl}islandsCancel`)
                    })]
                  })]
                })]
              }, WT)
            }))
          })]
        }), (void 0 !== OT || null !== eT) && (0, JM.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: jT(`${Yl}islandsInviteTitle`)
        }), !iT && (void 0 !== OT || null !== eT) && (0, JM.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: jT(`${Yl}islandsInviteShareNote`)
        }), 0 === (null === OT || void 0 === OT ? void 0 : OT.length) && (0, JM.jsx)(yl, {
          openSocial: kT,
          t: jT
        }), void 0 !== OT && OT.length > 0 && (0, JM.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: OT.map((TT => {
            const UT = !0 === TT.baf2InvitableSent || Gk(BT.get(TT.baf2InvitableId), gT, nT);
            return (0, JM.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, JM.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, JM.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: TT.baf2InvitableName
                }), TT.baf2InvitableFull && !UT && (0, JM.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: jT(`${Yl}islandsInviteTheirFull`, {
                    max: String(MT)
                  })
                }), (UT || !TT.baf2InvitableFull) && (0, JM.jsx)(Og.s, {
                  className: "Baf2IslandPersonButton",
                  disabled: UT,
                  onClick: () => {
                    (TT => {
                      const UT = lT.sendIslandEdit(`baf2coopinvite ${qT} ${TT}`);
                      ZT((mT => new Map(mT).set(TT, {
                        atMs: Date.now(),
                        answer: UT
                      })))
                    })(TT.baf2InvitableId)
                  },
                  children: jT(UT ? `${Yl}islandsInvited` : `${Yl}islandsInvite`)
                })]
              })
            }, TT.baf2InvitableId)
          }))
        }), eT && (0, JM.jsx)(zj, {
          note: eT,
          t: jT
        }), (0, JM.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, JM.jsx)(Og.e, {
            onClick: HT,
            children: jT(`${Yl}islandsDone`)
          })
        })]
      })
    }

    function yl(TT) {
      let {
        openSocial: UT,
        t: mT
      } = TT;
      return (0, JM.jsxs)(JM.Fragment, {
        children: [(0, JM.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: mT(UT ? `${Yl}islandsInviteNobody` : `${Yl}islandsInviteNobodyGuest`)
        }), UT && (0, JM.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, JM.jsx)(Og.e, {
            onClick: UT,
            children: mT("socialBar:social")
          })
        })]
      })
    }

    function Xl(TT) {
      let {
        className: UT,
        text: mT,
        ConfirmButton: zT,
        confirmLabel: MT,
        canConfirm: gT,
        send: nT,
        done: HT,
        t: kT
      } = TT;
      const jT = (0, WT.useRef)(null);
      Uj(jT);
      const lT = () => {
        HT(null)
      };
      return (0, JM.jsxs)("div", {
        ref: jT,
        tabIndex: -1,
        className: ez()("Baf2IslandForm", UT),
        ...hk(lT),
        children: [(0, JM.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: mT
        }), (0, JM.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, JM.jsx)(zT, {
            disabled: !gT,
            onClick: () => {
              gT && HT(nT())
            },
            children: MT
          }), (0, JM.jsx)(Og.e, {
            onClick: lT,
            children: kT(`${Yl}islandsCancel`)
          })]
        })]
      })
    }

    function Il(TT) {
      return "hidden" !== TT
    }

    function Ql(TT) {
      var UT, mT;
      let {
        card: zT,
        keepOwn: MT,
        blocked: gT,
        maxIslands: nT,
        serverNowMs: HT,
        nowMs: kT,
        actions: jT,
        full: lT,
        waits: LT,
        answered: pT,
        mode: BT,
        setMode: ZT,
        pending: cT,
        onSent: vT,
        switchTo: fT,
        leave: qT,
        coopOn: iT,
        openSocial: bT,
        t: OT
      } = TT;
      const eT = Cg(),
        YT = zT.baf2IslandActive,
        JT = YT ? null : function(TT, UT) {
          if (TT <= 0) return null;
          const mT = UT - TT;
          if (mT < cM) return [`${ik}islandsPlayedJustNow`];
          if (mT < bk) return [`${ik}islandsPlayedMinutes`, {
            minutes: String(Math.floor(mT / cM))
          }];
          if (mT < Ok) return [`${ik}islandsPlayedHours`, {
            hours: String(Math.floor(mT / bk))
          }];
          const WT = Math.floor(mT / Ok);
          return 1 === WT ? [`${ik}islandsPlayedDay`] : [`${ik}islandsPlayedDays`, {
            days: String(WT)
          }]
        }(zT.baf2IslandLastPlayedMs, HT),
        xT = void 0 === (dT = zT.baf2IslandItems) ? null : 0 === dT ? [`${ik}islandsItemsNone`] : 1 === dT ? [`${ik}islandsItemsOne`] : [`${ik}islandsItems`, {
          count: String(dT)
        }];
      var dT;
      const wT = function(TT) {
          return TT ? 1 === TT ? [`${ik}islandsWaitingOne`] : [`${ik}islandsWaiting`, {
            count: String(TT)
          }] : null
        }(zT.baf2IslandWaiting),
        tT = zT.baf2IslandUnreadable,
        aT = zT.baf2IslandCoop,
        yT = rk(zT, jT, MT, lT, iT, gT),
        XT = (0, WT.useRef)(null);
      Ak(null !== BT, XT);
      const IT = () => {
          var TT;
          ZT(null), null === (TT = XT.current) || void 0 === TT || TT.focus()
        },
        QT = (TT, UT) => {
          IT(), null !== TT && vT(TT, UT)
        },
        sT = (TT, UT) => OT(`${Yl}${TT}`, {
          time: bM(OT, UT)
        });
      return (0, JM.jsxs)("li", {
        ref: XT,
        tabIndex: -1,
        className: ez()("Baf2IslandCard", {
          Active: YT,
          Pending: cT,
          Shared: void 0 !== aT
        }),
        children: [(0, JM.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, JM.jsx)("strong", {
            className: "Baf2IslandName",
            children: zT.baf2IslandName
          }), YT && (0, JM.jsx)("span", {
            className: "Baf2IslandBadge",
            children: OT(`${Yl}islandsOnThis`)
          }), aT && (0, JM.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: OT(`${Yl}islandsShared`)
          })]
        }), "member" === (null === aT || void 0 === aT ? void 0 : aT.baf2CoopRole) && (0, JM.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Pk(OT, `${Yl}islandsSharedBy`, {
            owner: aT.baf2CoopOwner
          })
        }), void 0 !== tT && (0, JM.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: OT("newer" === tT ? `${Yl}islandsUnreadable` : `${Yl}islandsDamaged`)
        }), "corrupt" === tT && lT && (0, JM.jsx)("p", {
          className: "Baf2IslandStats",
          children: OT(`${Yl}islandsDamagedFull`)
        }), void 0 === tT && (0, JM.jsxs)(JM.Fragment, {
          children: [(0, JM.jsx)(Wj, {
            tier: zT.baf2IslandTier,
            t: OT
          }), (0, JM.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, JM.jsx)("span", {
              children: 1 === zT.baf2IslandQuestsDone ? OT(`${Yl}islandsQuestsDoneOne`) : OT(`${Yl}islandsQuestsDone`, {
                count: String(zT.baf2IslandQuestsDone)
              })
            }), (0, JM.jsx)("span", {
              children: 1 === zT.baf2IslandMachines ? OT(`${Yl}islandsMachinesOne`) : OT(`${Yl}islandsMachines`, {
                count: String(zT.baf2IslandMachines)
              })
            }), xT && (0, JM.jsx)("span", {
              children: OT(xT[0], xT[1])
            }), wT && (0, JM.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: OT(wT[0], wT[1])
            }), JT && (0, JM.jsx)("span", {
              children: OT(JT[0], JT[1])
            })]
          })]
        }), aT && void 0 === aT.baf2CoopState && "people" !== BT && (0, JM.jsx)(wl, {
          members: aT.baf2CoopMembers,
          t: OT
        }), null === BT && (0, JM.jsx)(tl, {
          card: zT,
          answered: pT,
          nowMs: kT,
          t: OT
        }), yT.note && (0, JM.jsx)(zj, {
          note: yT.note,
          className: ez()({
            Unreachable: void 0 !== (null === aT || void 0 === aT ? void 0 : aT.baf2CoopState)
          }),
          t: OT
        }), "rename" === BT && (0, JM.jsx)(xl, {
          card: zT,
          canRename: "enabled" === yT.rename,
          done: QT,
          t: OT
        }), "delete" === BT && (0, JM.jsx)(dl, {
          card: zT,
          canDelete: "enabled" === yT.delete,
          done: TT => {
            QT(TT, aT ? "delete" : void 0)
          },
          t: OT
        }), "people" === BT && (0, JM.jsx)(al, {
          card: zT,
          view: yT,
          blocked: gT,
          maxIslands: nT,
          answered: pT,
          nowMs: kT,
          done: IT,
          openSocial: bT,
          t: OT
        }), "leave" === BT && (0, JM.jsx)(Xl, {
          className: "Leave",
          text: Pk(OT, `${Yl}islandsLeaveConfirm`, {
            island: zT.baf2IslandName,
            owner: null !== (UT = null === (mT = zT.baf2IslandCoop) || void 0 === mT ? void 0 : mT.baf2CoopOwner) && void 0 !== UT ? UT : ""
          }),
          ConfirmButton: Og.I,
          confirmLabel: OT(`${Yl}islandsLeaveYes`),
          canConfirm: "enabled" === yT.leave,
          send: () => Jl(eT, zT),
          done: TT => {
            QT(TT, "leave"), null !== TT && YT && qT()
          },
          t: OT
        }), "unshare" === BT && (0, JM.jsx)(Xl, {
          className: "Unshare",
          text: Pk(OT, `${Yl}islandsStopSharingConfirm`, {
            island: zT.baf2IslandName
          }),
          ConfirmButton: Og.s,
          confirmLabel: OT(`${Yl}islandsStopSharing`),
          canConfirm: "enabled" === yT.unshare,
          send: () => eT.sendIslandEdit(`baf2coopunshare ${zT.baf2IslandId}`),
          done: TT => {
            QT(TT), null !== TT && qT()
          },
          t: OT
        }), null === BT && !cT && (0, JM.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": zT.baf2IslandName,
          children: [Il(yT.switch) && (0, JM.jsx)(Og.s, {
            disabled: "enabled" !== yT.switch,
            onClick: fT,
            children: "tryAgain" === yT.switchLabel ? OT(`${Yl}islandsTryAgain`) : LT.switch > 0 ? sT("islandsSwitchIn", LT.switch) : OT(`${Yl}islandsSwitch`)
          }), Il(yT.rename) && (0, JM.jsx)(Og.e, {
            disabled: "enabled" !== yT.rename,
            onClick: () => {
              ZT("rename")
            },
            children: OT(`${Yl}islandsRename`)
          }), Il(yT.people) && (0, JM.jsx)(Og.e, {
            disabled: "enabled" !== yT.people,
            onClick: () => {
              ZT("people")
            },
            children: OT("players" === yT.peopleLabel ? `${Yl}islandsPlayersButton` : `${Yl}islandsInviteButton`)
          }), Il(yT.unshare) && (0, JM.jsx)(Og.e, {
            disabled: "enabled" !== yT.unshare,
            onClick: () => {
              ZT("unshare")
            },
            children: OT(`${Yl}islandsStopSharing`)
          }), Il(yT.dismiss) && (0, JM.jsx)(Og.e, {
            disabled: "enabled" !== yT.dismiss,
            onClick: () => {
              vT(Jl(eT, zT), "dismiss"), YT && qT()
            },
            children: OT(`${Yl}islandsDismiss`)
          }), Il(yT.leave) && (0, JM.jsx)(Og.J, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== yT.leave,
            onClick: () => {
              ZT("leave")
            },
            children: YT && LT.switch > 0 ? sT("islandsLeaveIn", LT.switch) : OT(`${Yl}islandsLeave`)
          }), Il(yT.delete) && (0, JM.jsx)(Og.J, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== yT.delete,
            onClick: () => {
              ZT("delete")
            },
            children: LT.change > 0 && yT.deleteWaits ? sT("islandsDeleteIn", LT.change) : OT(`${Yl}islandsDelete`)
          })]
        })]
      })
    }
    const sl = "buildAFactory2Game:";

    function Fl(TT) {
      let {
        invite: UT,
        actions: mT,
        full: zT,
        maxIslands: MT,
        waitSeconds: gT,
        focus: nT,
        focused: HT,
        join: kT,
        decline: jT,
        t: lT
      } = TT;
      const [LT, pT] = (0, WT.useState)(!1), BT = (0, WT.useRef)(null);
      Ak(LT, BT), (0, WT.useEffect)((() => {
        var TT;
        nT && (pT(!0), null === (TT = BT.current) || void 0 === TT || TT.focus(), HT())
      }), [nT, HT]);
      const ZT = function(TT, UT, mT, WT, zT) {
          return mT ? {
            join: !1,
            note: {
              key: `${ik}islandsJoinTooMany`,
              params: {
                max: String(WT)
              }
            }
          } : TT.baf2InvitePlayers >= zT ? {
            join: !1,
            note: {
              key: `${ik}islandsJoinFull`
            }
          } : {
            join: UT.switch,
            note: null
          }
        }(UT, mT, zT, MT, 10),
        cT = UT.baf2InviteIsland,
        vT = UT.baf2InvitePlayers,
        fT = () => {
          var TT;
          pT(!1), null === (TT = BT.current) || void 0 === TT || TT.focus()
        },
        qT = gT > 0 && null === ZT.note ? lT(`${sl}islandsJoinIn`, {
          time: bM(lT, gT)
        }) : lT(`${sl}islandsJoin`);
      return (0, JM.jsxs)("li", {
        ref: BT,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...LT ? hk(fT) : {},
        children: [(0, JM.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, JM.jsx)("strong", {
            className: "Baf2IslandName",
            children: cT
          })
        }), (0, JM.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Pk(lT, `${sl}islandsInvitedBy`, {
            owner: UT.baf2InviteOwner
          })
        }), (0, JM.jsx)(Wj, {
          tier: UT.baf2InviteTier,
          t: lT
        }), (0, JM.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, JM.jsx)("span", {
            children: 1 === vT ? lT(`${sl}islandsPlayersCountOne`) : lT(`${sl}islandsPlayersCount`, {
              count: String(vT)
            })
          })
        }), ZT.note && (0, JM.jsx)(zj, {
          note: ZT.note,
          t: lT
        }), LT && (0, JM.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Pk(lT, `${sl}islandsJoinConfirm`, {
            island: cT
          })
        }), !LT && (0, JM.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": cT,
          children: [(0, JM.jsx)(Og.s, {
            disabled: !ZT.join,
            onClick: () => {
              var TT;
              pT(!0), null === (TT = BT.current) || void 0 === TT || TT.focus()
            },
            children: qT
          }), (0, JM.jsx)(Og.e, {
            onClick: jT,
            children: lT(`${sl}islandsDecline`)
          })]
        }), LT && (0, JM.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, JM.jsx)(Og.s, {
            disabled: !ZT.join,
            onClick: kT,
            children: lT(`${sl}islandsJoinYes`)
          }), (0, JM.jsx)(Og.e, {
            onClick: fT,
            children: lT(`${sl}islandsCancel`)
          })]
        })]
      })
    }

    function Pl(TT) {
      let {
        invites: UT,
        actions: mT,
        full: WT,
        maxIslands: zT,
        waitSeconds: MT,
        focus: gT,
        focused: nT,
        leave: HT,
        declined: kT,
        t: jT
      } = TT;
      const lT = Cg();
      return (0, JM.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, JM.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: jT(`${sl}islandsInvitesTitle`)
        }), (0, JM.jsx)("ul", {
          className: "Baf2IslandCards",
          children: UT.map((TT => {
            const UT = TT.baf2InviteId;
            return (0, JM.jsx)(Fl, {
              invite: TT,
              actions: mT,
              full: WT,
              maxIslands: zT,
              waitSeconds: MT,
              focus: gT === UT,
              focused: nT,
              join: () => {
                lT.send(`baf2coopaccept ${UT}`), HT()
              },
              decline: () => {
                lT.send(`baf2coopdecline ${UT}`), kT(UT)
              },
              t: jT
            }, UT)
          }))
        })]
      })
    }
    const Vl = "buildAFactory2Game:";

    function ul(TT) {
      let {
        cards: UT,
        activeName: mT,
        canStart: zT,
        waitSeconds: MT,
        leave: gT,
        t: nT
      } = TT;
      const HT = Cg(),
        [kT, jT] = (0, WT.useState)(!1),
        [lT, LT] = (0, WT.useState)(""),
        pT = (0, WT.useRef)(null);
      Ak(kT, pT), (0, WT.useEffect)((() => {
        var TT;
        kT && (null === (TT = pT.current) || void 0 === TT || TT.focus())
      }), [kT]);
      const BT = xk(UT),
        ZT = Yk(lT),
        cT = Jk(ZT),
        vT = () => {
          zT && !cT && (HT.send("" === ZT || ZT === BT ? hT : `${hT} ${ZT}`), gT())
        },
        fT = () => {
          var TT;
          jT(!1), null === (TT = pT.current) || void 0 === TT || TT.focus()
        };
      return (0, JM.jsxs)("li", {
        ref: pT,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...kT ? hk(fT) : {},
        children: [(0, JM.jsx)("strong", {
          className: "Baf2IslandName",
          children: nT(`${Vl}islandsNewTitle`)
        }), !kT && (0, JM.jsx)("p", {
          className: "Baf2IslandStats",
          children: nT(`${Vl}islandsNewNote`)
        }), kT && (0, JM.jsxs)(JM.Fragment, {
          children: [(0, JM.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Pk(nT, `${Vl}islandsNewConfirm`, {
              name: mT
            })
          }), (0, JM.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [nT(`${Vl}islandsNewNameLabel`), (0, JM.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: lT,
              placeholder: BT,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: Dk,
              onChange: TT => {
                LT(TT.target.value)
              },
              ...Ek(vT, fT)
            })]
          }), cT && (0, JM.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: nT(`${Vl}islandsNameReserved`)
          })]
        }), (0, JM.jsxs)("div", {
          className: ez()("Baf2IslandButtons", {
            Stacked: kT
          }),
          children: [(0, JM.jsx)(Og.s, {
            disabled: !zT || kT && cT,
            onClick: () => {
              if (!kT) return LT(BT), void jT(!0);
              vT()
            },
            children: MT > 0 ? nT(`${Vl}islandsNewIn`, {
              time: bM(nT, MT)
            }) : nT(kT ? `${Vl}islandsNewConfirmButton` : `${Vl}islandsNew`)
          }), kT && (0, JM.jsx)(Og.e, {
            onClick: fT,
            children: nT(`${Vl}islandsCancel`)
          })]
        })]
      })
    }

    function Cl(TT) {
      var UT, mT;
      let {
        message: zT,
        arrivedAtMs: MT,
        close: gT,
        leave: nT,
        openSocial: HT
      } = TT;
      const kT = Cg(),
        {
          t: jT
        } = (0, dz.z)(),
        lT = mj(1e3),
        [LT, pT] = (0, WT.useState)(null),
        [BT, ZT] = (0, WT.useState)(new Map),
        [cT, vT] = (0, WT.useState)(new Set),
        fT = zT.baf2IslandCards,
        qT = function(TT, UT, mT, WT) {
          return (null !== TT && void 0 !== TT ? TT : []).filter((TT => UT + TT.baf2InviteLeftMs > mT && !WT.has(TT.baf2InviteId)))
        }(zT.baf2IslandsInvites, MT, lT, cT),
        iT = qT.map((TT => TT.baf2InviteId)).join(" "),
        bT = (0, WT.useRef)(null),
        OT = Rk(bT);
      Tj(), (0, WT.useEffect)((() => {
        var TT, UT;
        null !== (TT = bT.current) && void 0 !== TT && TT.contains(document.activeElement) || (null === (UT = bT.current) || void 0 === UT || UT.focus())
      }), [zT, iT]), (0, WT.useEffect)((() => {
        ZT((TT => function(TT, UT, mT, WT) {
          const zT = new Map;
          for (const MT of UT) {
            const UT = TT.get(MT.baf2IslandId);
            UT && (void 0 !== UT.untilGone || WT < UT.answer) && Ik(UT, MT, mT) && zT.set(MT.baf2IslandId, UT)
          }
          return zT.size === TT.size ? TT : zT
        }(TT, zT.baf2IslandCards, Date.now(), zT.baf2IslandsAnswered)))
      }), [zT]);
      const eT = ek(MT, zT.baf2IslandsWaitMs, lT),
        YT = zT.baf2IslandsBlocked,
        JT = ak(YT, eT),
        xT = function(TT, UT) {
          const mT = ak(TT, 0);
          return {
            switch: mT.switch ? UT : 0,
            change: mT.change ? UT : 0
          }
        }(YT, eT),
        dT = fT.length >= zT.baf2IslandsMax,
        wT = fT.length > 0,
        tT = function(TT, UT, mT) {
          return TT + Math.max(0, mT - UT)
        }(zT.baf2IslandsNowMs, MT, lT),
        aT = null !== (UT = null === (mT = fT.find((TT => TT.baf2IslandActive))) || void 0 === mT ? void 0 : mT.baf2IslandName) && void 0 !== UT ? UT : "",
        yT = function(TT) {
          const UT = TT.filter(Ck).length;
          return UT <= 1 && UT < TT.length
        }(fT),
        XT = !0 === zT.baf2IslandsCoop,
        IT = function(TT, UT) {
          const mT = TT.find((TT => TT.baf2IslandActive)),
            WT = null === mT || void 0 === mT ? void 0 : mT.baf2IslandCoop;
          return mT && "member" === (null === WT || void 0 === WT ? void 0 : WT.baf2CoopRole) ? {
            key: `${ik}islandsKeepOwnMember`,
            names: {
              owner: WT.baf2CoopOwner,
              island: mT.baf2IslandName
            }
          } : {
            key: UT ? `${ik}islandsKeepOwn` : `${ik}islandsKeepOwnSolo`
          }
        }(fT, XT),
        [QT, sT] = (0, WT.useState)(null);
      (0, WT.useEffect)((() => {
        void 0 !== zT.baf2IslandsFocusInvite && sT(zT.baf2IslandsFocusInvite)
      }), [zT]);
      const FT = (0, WT.useCallback)((() => {
          sT(null)
        }), []),
        PT = LT ? fT.find((TT => TT.baf2IslandId === LT.id)) : void 0,
        VT = LT && PT && "hidden" !== rk(PT, JT, yT, dT, XT, YT)[LT.mode] ? LT : null;
      return (0, JM.jsx)(bg.e, {
        close: gT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, JM.jsxs)("section", {
          ref: bT,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: OT ? {
            marginTop: `${OT.marginTop}px`,
            maxHeight: `${OT.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, JM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JM.jsxs)("div", {
              children: [(0, JM.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: jT(`${Vl}islandsTitle`)
              }), wT && (0, JM.jsx)("p", {
                children: jT(`${Vl}islandsSubtitle`, {
                  count: String(fT.length),
                  max: String(zT.baf2IslandsMax)
                })
              })]
            }), (0, JM.jsx)(Og.k, {
              ariaLabel: jT(`${Vl}islandsClose`),
              onClick: gT
            })]
          }), (0, JM.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== YT && (0, JM.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Pk(jT, dk(YT, wk(fT)), {
                island: aT
              })
            }), wT && qT.length > 0 && (0, JM.jsx)(Pl, {
              invites: qT,
              actions: JT,
              full: dT,
              maxIslands: zT.baf2IslandsMax,
              waitSeconds: xT.switch,
              focus: QT,
              focused: FT,
              leave: nT,
              declined: TT => {
                vT((UT => new Set(UT).add(TT)))
              },
              t: jT
            }), wT && (0, JM.jsxs)(JM.Fragment, {
              children: [dT && (0, JM.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: jT(`${Vl}islandsFull`, {
                  max: String(zT.baf2IslandsMax)
                })
              }), (0, JM.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Pk(jT, IT.key, IT.names)
              }), (0, JM.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [fT.map((TT => {
                  const UT = TT.baf2IslandId;
                  return (0, JM.jsx)(Ql, {
                    card: TT,
                    keepOwn: yT,
                    coopOn: XT,
                    openSocial: HT,
                    blocked: YT,
                    maxIslands: zT.baf2IslandsMax,
                    serverNowMs: tT,
                    nowMs: lT,
                    actions: JT,
                    full: dT,
                    waits: xT,
                    answered: zT.baf2IslandsAnswered,
                    mode: (null === VT || void 0 === VT ? void 0 : VT.id) === UT ? VT.mode : null,
                    setMode: TT => {
                      pT(null === TT ? null : {
                        id: UT,
                        mode: TT
                      })
                    },
                    pending: Ik(BT.get(UT), TT, lT),
                    onSent: (mT, WT) => {
                      ZT((zT => {
                        const MT = {
                          atMs: Date.now(),
                          from: TT.baf2IslandName,
                          answer: mT
                        };
                        return new Map(zT).set(UT, WT ? {
                          ...MT,
                          untilGone: WT
                        } : MT)
                      }))
                    },
                    leave: nT,
                    switchTo: () => {
                      kT.send(`baf2islandswitch ${UT}`), nT()
                    },
                    t: jT
                  }, UT)
                })), !dT && (0, JM.jsx)(ul, {
                  cards: fT,
                  activeName: aT,
                  canStart: JT.change,
                  waitSeconds: xT.change,
                  leave: nT,
                  t: jT
                })]
              })]
            })]
          })]
        })
      })
    }
    var rl = mT(5116);
    const Kl = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        dW: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      Sl = Object.keys(Kl),
      Gl = new Set([...Object.keys(hU), ...[...IU.Press.recipes, ...IU["Wire Mill"].recipes].map((TT => TT.output))]),
      Nl = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      El = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      hl = / Bar$|Alloy$/,
      Dl = /Porkchop|Beef|Mutton|Venison|Steak/,
      ol = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const Al = (0, WT.memo)((function(TT) {
      let {
        item: UT,
        name: mT,
        amount: WT,
        selected: zT,
        small: MT,
        onPick: gT
      } = TT;
      return (0, JM.jsxs)("button", {
        type: "button",
        className: ez()("Baf2TermTile", {
          On: zT,
          Small: MT
        }),
        "aria-label": `${mT}: ${WT}`,
        "aria-pressed": zT,
        onClick: () => {
          gT(UT)
        },
        children: [(0, JM.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, JM.jsx)(tz.b, {
            itemName: UT,
            amount: 0
          })
        }), (0, JM.jsx)("span", {
          className: "Baf2TermCount",
          children: qM(WT, 1e4)
        }), !MT && (0, JM.jsx)("span", {
          className: "Baf2TermName",
          children: mT
        })]
      })
    }));

    function Rl(TT) {
      let {
        store: UT,
        close: mT,
        send: zT
      } = TT;
      const {
        t: MT
      } = (0, dz.z)(), {
        isTouchScreen: gT
      } = (0, iz.h)(["isTouchScreen"]);
      ! function(TT) {
        const [UT, mT] = (0, WT.useState)(TT.version);
        (0, WT.useEffect)((() => (mT(TT.version), TT.subscribe((() => {
          mT(TT.version)
        })))), [TT])
      }(UT);
      const [nT, HT] = (0, WT.useState)("all"), [kT, jT] = (0, WT.useState)(!1), [lT, LT] = (0, WT.useState)(""), [pT, BT] = (0, WT.useState)(""), [ZT, cT] = (0, WT.useState)(null), [vT, fT] = (0, WT.useState)(!1), [qT, iT, bT] = function() {
        const TT = (0, WT.useRef)(null),
          [UT, mT] = (0, WT.useState)(!1),
          zT = () => {
            const UT = TT.current;
            mT(null !== UT && UT.scrollLeft + UT.clientWidth < UT.scrollWidth - 1)
          };
        return (0, WT.useEffect)(zT), (0, WT.useEffect)((() => {
          const UT = TT.current;
          if (!UT) return;
          const mT = new ResizeObserver(zT);
          return mT.observe(UT), () => {
            mT.disconnect()
          }
        }), []), [TT, UT, zT]
      }(), OT = (0, WT.useMemo)((() => new Map), [MT]), eT = TT => {
        let UT = OT.get(TT);
        return void 0 === UT && (UT = function(TT, UT) {
          const mT = /^(.+) \((.+)\)$/.exec(TT);
          return mT ? UT(mT[2], mT[1]) : TT
        }(zM(MT, TT), ((TT, UT) => MT("buildAFactory2Game:terminalTileKind", {
          kind: TT,
          base: UT
        }))), OT.set(TT, UT)), UT
      }, YT = UT.isReadOnly(), JT = vT && !YT, xT = UT.recent(), dT = UT.items(), wT = pT.trim().toLowerCase(), tT = JT ? UT.heldItems(ZT) : ("recent" === nT ? xT : dT).filter((TT => {
        const UT = eT(TT);
        return ("all" === nT || "recent" === nT || function(TT) {
          return LM(TT) ? "farm" : Nl.test(TT) ? "nuclear" : hl.test(TT) ? "bars" : Dl.test(TT) ? "farm" : El.test(TT) ? "dW" : Gl.has(TT) ? "parts" : ol.test(TT) ? "farm" : "other"
        }(TT) === nT) && ("" === wT || UT.toLowerCase().includes(wT)) && ("" === lT || UT.toUpperCase().startsWith(lT))
      })), aT = new Set(dT.map((TT => eT(TT).charAt(0).toUpperCase()))), yT = TT => JT ? UT.heldAmount(TT) : UT.amount(TT), XT = !JT && "recent" !== nT && xT.length > 0, IT = function(TT, UT) {
        return null !== TT && UT.includes(TT) ? TT : null
      }(ZT, XT ? [...tT, ...xT] : tT), QT = null === IT ? 0 : UT.amount(IT), sT = null === IT ? 0 : yT(IT), FT = (0, WT.useCallback)((TT => {
        cT((UT => UT === TT ? null : TT))
      }), []), PT = TT => sT > 0 || JT && null === IT && "fill" === TT && tT.length > 0, VT = JT ? [
        ["one", MT("buildAFactory2Game:terminalStoreOne")],
        ["stack", MT("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", MT(null === IT ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", MT("buildAFactory2Game:terminalTakeOne")],
        ["stack", MT("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", MT("buildAFactory2Game:terminalFill")]
      ], uT = JT ? MT("buildAFactory2Game:terminalStoreEmpty") : "" !== lT ? MT("buildAFactory2Game:terminalEmptyLetter", {
        letter: lT
      }) : "" !== wT ? MT("buildAFactory2Game:terminalEmptySearch", {
        query: pT
      }) : MT("buildAFactory2Game:terminalEmpty");
      return (0, JM.jsx)(bg.e, {
        close: mT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, JM.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, JM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JM.jsxs)("div", {
              children: [(0, JM.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: MT(UT.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, JM.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, JM.jsx)("span", {
                  className: ez()({
                    Off: JT
                  }),
                  children: MT("buildAFactory2Game:terminalSubtitle", {
                    count: String(UT.siloCount())
                  })
                }), !YT && (0, JM.jsx)("span", {
                  className: ez()({
                    Off: !JT
                  }),
                  children: MT("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !YT && (0, JM.jsx)(rl.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: MT("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: MT("buildAFactory2Game:terminalModeStore")
              }],
              value: JT ? "store" : "take",
              onChange: TT => {
                fT("store" === TT), cT(null)
              },
              ariaLabel: MT("buildAFactory2Game:terminalModes")
            }), (0, JM.jsx)(Og.k, {
              onClick: mT
            })]
          }), (0, JM.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, JM.jsxs)("div", {
              className: ez()("Baf2TermTools", {
                Hidden: JT
              }),
              children: [(0, JM.jsx)("div", {
                ref: qT,
                className: ez()("Baf2TermChips", {
                  MoreRight: iT
                }),
                onScroll: bT,
                children: kT ? (0, JM.jsxs)(JM.Fragment, {
                  children: [(0, JM.jsx)("button", {
                    type: "button",
                    "aria-label": MT("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      jT(!1), LT("")
                    },
                    children: "\u2190"
                  }), [...aT].sort().map((TT => (0, JM.jsx)("button", {
                    type: "button",
                    className: ez()({
                      On: lT === TT
                    }),
                    onClick: () => {
                      LT(lT === TT ? "" : TT)
                    },
                    children: TT
                  }, TT)))]
                }) : (0, JM.jsxs)(JM.Fragment, {
                  children: [(0, JM.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      jT(!0)
                    },
                    children: MT("buildAFactory2Game:terminalLetters")
                  }), Sl.map((TT => (0, JM.jsx)("button", {
                    type: "button",
                    className: ez()({
                      On: nT === TT
                    }),
                    onClick: () => {
                      HT(TT)
                    },
                    children: MT(Kl[TT])
                  }, TT)))]
                })
              }), !gT && (0, JM.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: pT,
                placeholder: MT("buildAFactory2Game:terminalSearch"),
                "aria-label": MT("buildAFactory2Game:terminalSearch"),
                onChange: TT => {
                  BT(TT.target.value)
                },
                onKeyDown: TT => {
                  TT.stopPropagation()
                }
              }), (0, JM.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": MT("buildAFactory2Game:terminalResort"),
                title: MT("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  UT.resort()
                },
                children: "\u21c5"
              })]
            }), XT && (0, JM.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, JM.jsx)("span", {
                children: MT(Kl.recent)
              }), xT.map((TT => (0, JM.jsx)(Al, {
                item: TT,
                name: eT(TT),
                amount: UT.amount(TT),
                selected: IT === TT,
                small: !0,
                onPick: FT
              }, TT)))]
            }), (0, JM.jsx)("div", {
              className: "Baf2TermTiles",
              children: tT.length > 0 ? tT.map((TT => (0, JM.jsx)(Al, {
                item: TT,
                name: eT(TT),
                amount: yT(TT),
                selected: IT === TT,
                onPick: FT
              }, TT))) : (0, JM.jsx)("p", {
                className: "Baf2TermEmpty",
                children: uT
              })
            }), (0, JM.jsxs)("div", {
              className: ez()("Baf2TermActions", {
                Hidden: JT && 0 === tT.length
              }),
              children: [(0, JM.jsx)("span", {
                className: "Baf2TermPicked",
                children: YT ? (0, JM.jsxs)(JM.Fragment, {
                  children: [null !== IT && QT > 0 ? eT(IT) : MT("buildAFactory2Game:terminalVisiting"), (0, JM.jsx)("small", {
                    children: MT("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== IT ? (0, JM.jsxs)(JM.Fragment, {
                  children: [eT(IT), (0, JM.jsx)("small", {
                    children: MT("buildAFactory2Game:terminalStored", {
                      amount: QT.toLocaleString()
                    })
                  })]
                }) : MT(JT ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !YT && VT.map((TT => {
                let [mT, WT] = TT;
                const MT = "fill" === mT ? Og.l : Og.e;
                return (0, JM.jsx)(MT, {
                  className: "Baf2TermTake",
                  disabled: !PT(mT),
                  onClick: () => {
                    (TT => {
                      PT(TT) && zT(null === IT ? UT.putAll() : JT ? UT.put(TT, IT) : UT.take(TT, IT))
                    })(mT)
                  },
                  children: WT
                }, mT)
              }))]
            })]
          })]
        })
      })
    }

    function TL(TT) {
      let {
        kind: UT,
        icon: mT,
        label: WT,
        number: zT,
        preview: MT,
        note: gT,
        tone: nT = null,
        share: HT,
        onExplain: kT
      } = TT;
      return (0, JM.jsxs)("button", {
        type: "button",
        className: ez()("NxLane", UT, {
          Warn: "warn" === nT,
          Danger: "danger" === nT
        }),
        onClick: kT,
        children: [(0, JM.jsxs)("span", {
          className: "NxLaneHead",
          children: [mT, (0, JM.jsx)("span", {
            className: "NxLaneLabel",
            children: WT
          })]
        }), (0, JM.jsxs)("span", {
          className: "NxLaneNum",
          children: [zT, MT && (0, JM.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", MT]
          })]
        }), (0, JM.jsx)("span", {
          className: "NxLaneNote",
          children: gT
        }), void 0 !== HT && (0, JM.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, HT)) + "%"
          }
        })]
      })
    }

    function UL(TT) {
      let {
        kind: UT,
        step: mT,
        short: WT,
        planned: zT
      } = TT;
      return (0, JM.jsx)("i", {
        className: ez()("NxPipe", UT, `Step${mT}`, {
          Short: WT,
          Planned: zT
        }),
        "aria-hidden": "true"
      })
    }

    function mL(TT) {
      let {
        max: UT,
        bands: mT,
        ticks: WT,
        now: zT,
        settle: MT,
        settleTone: gT,
        onExplain: nT
      } = TT;
      const HT = TT => Math.max(0, Math.min(UT, TT)) / UT * 100 + "%";
      let kT = 0;
      return (0, JM.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: nT,
        children: [(0, JM.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [mT.map((TT => {
            const UT = {
              bottom: HT(kT),
              height: `calc(${HT(TT.upTo)} - ${HT(kT)})`
            };
            return kT = TT.upTo, (0, JM.jsx)("i", {
              className: ez()("NxGaugeBand", TT.kind),
              style: UT
            }, TT.kind)
          })), null !== zT && (0, JM.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: HT(zT)
            }
          }), void 0 !== MT && null !== MT && (0, JM.jsx)("i", {
            className: ez()("NxGaugeSettle", {
              Bad: "bad" === gT
            }),
            style: {
              bottom: HT(MT)
            }
          })]
        }), (0, JM.jsx)("span", {
          className: "NxGaugeTicks",
          children: WT.map((TT => (0, JM.jsx)("small", {
            style: {
              bottom: HT(TT)
            },
            children: TT
          }, TT)))
        })]
      })
    }

    function WL(TT) {
      const [UT, mT] = (0, WT.useState)(null), [zT, MT] = (0, WT.useState)((() => {
        try {
          return null === window.localStorage.getItem(TT)
        } catch {
          return !1
        }
      })), gT = (0, WT.useRef)(null);
      (0, WT.useEffect)((() => () => {
        null !== gT.current && clearTimeout(gT.current)
      }), []);
      const nT = (0, WT.useCallback)((UT => {
          mT(UT), MT(!1);
          try {
            window.localStorage.setItem(TT, "1")
          } catch {}
          null !== gT.current && clearTimeout(gT.current), gT.current = setTimeout((() => {
            gT.current = null, mT(null)
          }), 5e3)
        }), [TT]),
        HT = (0, WT.useCallback)(((UT, mT) => {
          const WT = `${TT}:${UT}`;
          try {
            if (null !== window.localStorage.getItem(WT)) return;
            window.localStorage.setItem(WT, "1")
          } catch {
            return
          }
          nT(mT)
        }), [nT, TT]);
      return {
        explained: UT,
        hinting: zT,
        explain: nT,
        explainOnce: HT
      }
    }

    function zL(TT) {
      let {
        text: UT,
        tone: mT,
        explained: WT
      } = TT;
      return (0, JM.jsxs)("p", {
        className: ez()("NxStatus", null === WT ? mT : "Explain"),
        "aria-live": "polite",
        children: [null !== WT && (0, JM.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== WT && void 0 !== WT ? WT : UT]
      })
    }
    const ML = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function gL(TT, UT) {
      const mT = Number(TT[UT]);
      return 1 === mT || 2 === mT || 3 === mT ? mT : 0
    }

    function nL(TT) {
      return !!JH("reactor", TT.baf2RxNeed) || void 0 !== TT.baf2RxLayout && TT.baf2RxNeed.some((TT => {
        let [UT, mT] = TT;
        return mT > 0 && ML.includes(UT)
      }))
    }
    const HL = "buildAFactory2Game:";

    function kL(TT) {
      let {
        status: UT,
        store: mT,
        busy: WT
      } = TT;
      const {
        t: zT
      } = (0, dz.z)();
      return function(TT) {
        return 0 !== (TT.baf2RxFlags & ZU) && (!TT.baf2RxFormed || void 0 !== TT.baf2RxLayout)
      }(UT) ? (0, JM.jsx)(Og.l, {
        disabled: !nL(UT) || WT,
        onClick: () => {
          mT.tap("fill", (() => {
            mT.send("fill")
          }))
        },
        children: zT(void 0 !== UT.baf2RxLayout ? `${HL}rxFillLayout` : `${HL}rxFill`)
      }) : null
    }

    function jL(TT) {
      let {
        status: UT,
        store: mT,
        readOnly: zT,
        bare: MT = !1
      } = TT;
      const {
        t: gT
      } = (0, dz.z)(), nT = UT.baf2RxLayout, [HT, kT, jT] = UT.baf2RxDims, lT = (0, WT.useMemo)((() => {
        if (void 0 === nT) return 0;
        const TT = Uint8Array.from(nT, ((TT, UT) => gL(nT, UT)));
        return WH([HT - 2, kT - 2, jT - 2], TT).max
      }), [nT, HT, kT, jT]);
      return void 0 === nT ? null : (0, JM.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!MT && (0, JM.jsx)("span", {
          className: "Baf2RxHint",
          children: gT(`${HL}rxLayoutLine`, {
            amount: XH(lT)
          })
        }), !zT && (0, JM.jsx)(Og.e, {
          onClick: () => {
            mT.send("layout", 0)
          },
          children: gT(`${HL}rxLayoutHide`)
        })]
      })
    }
    const lL = "buildAFactory2Game:",
      LL = {
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

    function pL(TT) {
      let {
        id: UT,
        title: mT,
        body: WT,
        bodyParams: zT,
        yes: MT,
        cancel: gT,
        confirm: nT
      } = TT;
      const {
        t: HT
      } = (0, dz.z)();
      return (0, JM.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": UT,
        children: [(0, JM.jsx)("h3", {
          id: UT,
          children: HT(mT)
        }), (0, JM.jsx)("p", {
          children: HT(WT, zT)
        }), (0, JM.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, JM.jsx)(Og.g, {
            onClick: gT,
            children: HT(`${lL}rxCancel`)
          }), (0, JM.jsx)(Og.I, {
            onClick: nT,
            children: HT(MT)
          })]
        })]
      })
    }

    function BL(TT) {
      const [UT, mT] = (0, WT.useState)((() => TT.get()));
      return (0, WT.useEffect)((() => (mT(TT.get()), TT.subscribe((() => {
        mT(TT.get())
      })))), [TT]), UT
    }

    function ZL(TT) {
      let {
        kind: UT,
        cap: mT,
        busy: zT = !1,
        whyNot: MT = null,
        apart: gT
      } = TT;
      const {
        t: nT
      } = (0, dz.z)(), [HT, kT] = (0, WT.useState)(!1), jT = null !== MT, lT = (0, WT.useRef)(null);
      if ((0, WT.useEffect)((() => {
          jT && kT(!1)
        }), [jT]), (0, WT.useLayoutEffect)((() => {
          var TT;
          const UT = null === (TT = lT.current) || void 0 === TT ? void 0 : TT.firstElementChild;
          jT ? null === UT || void 0 === UT || UT.setAttribute("aria-disabled", "true") : zT || null === UT || void 0 === UT || UT.removeAttribute("aria-disabled")
        })), !HT || jT) return (0, JM.jsx)("span", {
        ref: lT,
        className: "Baf2RxApartWrap",
        children: (0, JM.jsx)(Og.g, {
          disabled: zT,
          className: ez()({
            Baf2RxNotYet: jT
          }),
          onClick: () => {
            MT ? MT() : kT(!0)
          },
          children: nT(`${lL}rxApart`)
        })
      });
      const LT = "battery" === UT,
        pT = void 0 === mT ? `${lL}batApartConfirmBodyPlan` : `${lL}batApartConfirmBody`;
      return (0, JM.jsx)(pL, {
        id: `baf2ApartTitle_${UT}`,
        title: LT ? `${lL}batApartConfirmTitle` : `${lL}rxApartConfirmTitle`,
        body: LT ? pT : `${lL}rxApartConfirmBody`,
        bodyParams: void 0 === mT ? void 0 : {
          cap: mT
        },
        yes: `${lL}rxApart`,
        cancel: () => {
          kT(!1)
        },
        confirm: () => {
          kT(!1), gT()
        }
      })
    }

    function cL(TT) {
      let {
        mood: UT,
        big: mT
      } = TT;
      const WT = LL[UT],
        zT = [];
      return WT.rows.forEach(((TT, UT) => {
        for (let mT = 0; mT < TT.length; mT++) "." !== TT[mT] && zT.push((0, JM.jsx)("rect", {
          x: mT + 1,
          y: UT + 1,
          width: 1,
          height: 1,
          fill: "w" === TT[mT] ? "#8fd3ff" : WT.colour
        }, `${mT},${UT}`))
      })), (0, JM.jsxs)("svg", {
        className: ez()("Baf2RxFace", {
          Big: mT,
          Alarm: "alarm" === UT
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, JM.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, JM.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), zT]
      })
    }

    function vL(TT) {
      return fM(TT, "+").replace("+", "")
    }

    function fL(TT) {
      let {
        kind: UT,
        dims: mT,
        cap: WT,
        disabled: zT,
        compact: MT,
        resize: gT
      } = TT;
      const {
        t: nT
      } = (0, dz.z)(), {
        min: HT,
        max: kT
      } = um(UT), jT = Math.min(WT, kT), lT = [`${lL}rxWide`, `${lL}rxTall`, `${lL}rxDeep`], LT = {
        w: String(mT[0]),
        h: String(mT[1]),
        d: String(mT[2]),
        blocks: String(yH(UT, mT))
      };
      return (0, JM.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, JM.jsx)("div", {
          className: "Baf2RxSteppers",
          children: mT.map(((TT, UT) => {
            const MT = WT => {
                const zT = [mT[0], mT[1], mT[2]];
                zT[UT] = TT + WT, gT(zT)
              },
              LT = TT >= jT;
            return (0, JM.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, JM.jsx)("button", {
                type: "button",
                "aria-label": nT(`${lL}rxSmaller`),
                disabled: zT || TT <= HT,
                onClick: () => {
                  MT(-1)
                },
                children: "\u2212"
              }), (0, JM.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [TT, (0, JM.jsx)("small", {
                  children: nT(lT[UT])
                })]
              }), (0, JM.jsx)("button", {
                type: "button",
                "aria-label": nT(`${lL}rxBigger`),
                disabled: zT || LT,
                onClick: () => {
                  MT(1)
                },
                children: LT && WT < kT ? "\ud83d\udd12" : "+"
              })]
            }, lT[UT])
          }))
        }), !MT && (0, JM.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === UT ? nT(`${lL}rxSizeLine`, {
            ...LT,
            water: String(aH(mT))
          }) : nT(`${lL}batSizeLine`, LT)
        })]
      })
    }

    function qL(TT) {
      let {
        on: UT,
        label: mT,
        disabled: WT,
        locked: zT,
        pending: MT,
        toggle: gT
      } = TT;
      return (0, JM.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": UT,
        disabled: WT,
        "aria-disabled": zT || void 0,
        className: ez()("Baf2RxSwitch", {
          On: UT,
          Locked: zT,
          Pending: MT
        }),
        onClick: gT,
        children: [(0, JM.jsx)("span", {
          className: "Baf2RxKnob"
        }), mT]
      })
    }
    const iL = "buildAFactory2Game:",
      bL = .95;

    function OL(TT, UT) {
      return 0 !== (TT.baf2RxFlags & UT)
    }

    function eL(TT) {
      return "cryo" === TT ? AT.l : AT.o
    }

    function YL(TT) {
      var UT, mT, WT, zT, MT, gT, nT, HT, kT;
      return TT.baf2RxCryo ? {
        RL: "cryo",
        usePerS: null !== (zT = TT.baf2RxCryoUse) && void 0 !== zT ? zT : 0,
        needPerS: null !== (MT = TT.baf2RxCryoNeed) && void 0 !== MT ? MT : 0,
        inPerS: null !== (gT = TT.baf2RxCryoIn) && void 0 !== gT ? gT : 0,
        stored: null !== (nT = TT.baf2RxCryoStored) && void 0 !== nT ? nT : 0,
        makersShort: null !== (HT = TT.baf2RxMixersShort) && void 0 !== HT ? HT : 0,
        waterBeside: null !== (kT = TT.baf2RxWaterUse) && void 0 !== kT ? kT : 0,
        pct: TT.baf2RxWater
      } : {
        RL: "water",
        usePerS: null !== (UT = TT.baf2RxWaterUse) && void 0 !== UT ? UT : 0,
        needPerS: null !== (mT = TT.baf2RxWaterNeed) && void 0 !== mT ? mT : 0,
        inPerS: TT.baf2RxWaterIn,
        stored: TT.baf2RxWaterStored,
        makersShort: null !== (WT = TT.baf2RxCondensersShort) && void 0 !== WT ? WT : 0,
        waterBeside: 0,
        pct: TT.baf2RxWater
      }
    }

    function JL(TT) {
      const UT = "running" === TT.baf2RxState || "idle" === TT.baf2RxState;
      return TT.baf2RxFormed && TT.baf2RxTarget !== TT.baf2RxThrottle && UT ? xL(TT, TT.baf2RxTarget) : null
    }

    function xL(TT, UT) {
      const [mT, WT, zT, , , , MT, , gT] = TT.baf2RxStats, nT = OL(TT, pU), HT = YL(TT), kT = HT.pct / 100, {
        gen: jT,
        out: lT,
        load: LT
      } = function(TT, UT, mT, WT) {
        const zT = mT ? hn : 1,
          MT = Math.min(TT.fuelHeat * zT * Math.max(0, Math.min(1, UT)), TT.size * zT);
        return {
          gen: MT,
          out: MT,
          load: BH(MT, TT.cooling, WT)
        }
      }({
        fuelHeat: mT,
        cooling: WT,
        size: zT
      }, UT / 100, nT, kT), pT = cH(MT || mH(...TT.baf2RxDims)), BT = TT.baf2RxHeat, ZT = Math.abs(LT - BT), cT = function(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : AT.o;
        const MT = mT ? hn : 1,
          gT = Math.min(TT.fuelHeat * MT * UT / 100, TT.size * MT),
          nT = gT,
          HT = TT.fuelHeat * MT,
          kT = TT.cooling * pH(WT.pct / 100),
          jT = HT > 0 && kT < TT.size * MT ? Math.floor(100 * kT / HT) : 100,
          lT = gT * zT - WT.inPerS;
        return {
          out: nT,
          hotAbove: jT >= 100 ? null : Math.max(0, jT),
          waterSecs: WT.pct >= 100 && lT > 1e-6 ? Math.max(0, WT.stored) / lT : null
        }
      }({
        fuelHeat: mT,
        cooling: WT,
        size: zT
      }, UT, nT, {
        pct: HT.pct,
        inPerS: HT.inPerS,
        stored: HT.stored
      }, eL(HT.RL));
      return {
        pct: UT,
        out: lT,
        coolPerS: jT * eL(HT.RL),
        pelletsPerMin: gT > 0 ? lT / gT * 60 : 0,
        settle: LT,
        settleS: ZT > 2 ? pT * Math.log(ZT / 2) : 0,
        overheatS: LT > 100 && BT < 100 ? pT * Math.log((LT - BT) / (LT - 100)) : null,
        hotAbove: cT.hotAbove,
        coolantSecs: cT.waterSecs
      }
    }

    function dL(TT) {
      return TT.baf2RxThrottle <= 0 && "running" !== TT.baf2RxState ? 0 : xL(TT, TT.baf2RxTarget).pelletsPerMin / 60
    }

    function wL(TT, UT) {
      if (TT <= 0 || UT <= 0) return 0;
      const mT = TT / UT;
      return mT < .25 ? 1 : mT < .5 ? 2 : mT < .8 ? 3 : 4
    }

    function tL(TT, UT) {
      const mT = {};
      for (const [WT, zT] of Object.entries(UT.params)) mT[WT] = "time" === WT ? bM(TT, zT) : "amount" === WT ? XH(zT) : String(Math.round(zT));
      return TT(UT.key, mT)
    }

    function aL(TT, UT) {
      return {
        key: `${iL}${TT}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: UT
      }
    }

    function yL(TT) {
      var UT;
      const mT = OL(TT, pU),
        WT = "running" === TT.baf2RxState,
        zT = iH(TT),
        MT = TT.baf2RxHeat;
      var gT;
      if (WT && MT > Nn) return {
        key: null !== (gT = zT.fix) && void 0 !== gT ? gT : `${iL}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const nT = WT ? xL(TT, TT.baf2RxTarget).coolantSecs : null,
        HT = "cryo" === YL(TT).RL;
      if (null !== nT && nT >= 1 && nT <= 30) return aL(HT ? "rxWarnCryo" : "rxWarnWater", "bad");
      const kT = TH(mH(...TT.baf2RxDims)).waste,
        jT = WT ? xH(TT, kT, dL(TT)).fullInS : null;
      if (null !== jT && jT <= 120 && TT.baf2RxWaste >= .5 * kT) return aL("rxWarnWaste", "warn");
      if (null !== nT && nT >= 1) return aL(HT ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: nT
      });
      const lT = "noWater" === TT.baf2RxState && MT > Nn;
      if (TT.baf2RxDamage >= 1 && !lT) return aL("rxDamagedHeals", "warn", {
        pct: TT.baf2RxDamage
      });
      if (TT.baf2RxCryoCut) return aL("rxFix_cryoCut", "warn");
      const LT = YL(TT);
      if ("noWater" === TT.baf2RxState && "cryo" === LT.RL) return aL("noWater" === TT.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const pT = zT.fix === `${iL}rxFix_scramCool` || "idle" === TT.baf2RxState && TT.baf2RxTarget <= 0;
      if (pT && TT.baf2RxFuel <= 0) return aL("rxFix_noFuel", "warn");
      if (pT && TT.baf2RxWaterIn <= 0 && (null !== (UT = TT.baf2RxCryoIn) && void 0 !== UT ? UT : 0) <= 0) return aL("rxFix_noWater", "warn");
      const BT = zT.fix === `${iL}rxFix_scramCool` ? OH(TT) : null;
      if (null !== BT) return {
        key: BT.key,
        params: {
          amount: BT.amount
        },
        tone: "info"
      };
      if ("running" !== TT.baf2RxState && "idle" !== TT.baf2RxState && null !== zT.fix) return {
        key: zT.fix,
        params: {},
        tone: "scram" === TT.baf2RxState ? "info" : lT ? "bad" : "warn"
      };
      var ZT;
      if ("idle" === TT.baf2RxState && TT.baf2RxTarget <= 0) return {
        key: null !== (ZT = zT.fix) && void 0 !== ZT ? ZT : `${iL}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const cT = TT.baf2RxCryoStarved;
      if ("cryo" === LT.RL && cT && LT.needPerS > 0 && LT.usePerS < bL * LT.needPerS) return aL("noWater" === cT ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const vT = "cryo" === LT.RL,
        fT = LT.needPerS > 0 && LT.usePerS < bL * LT.needPerS;
      if (vT ? fT || LT.makersShort > 0 && LT.pct < 100 : LT.pct < 100) {
        const UT = vT && fT ? Math.floor(100 * LT.usePerS / LT.needPerS) : Math.min(100, LT.pct);
        if (LT.makersShort > 0) {
          return aL(`${vT?"rxCryoShortLine":"rxWaterShortLine"}${1===LT.makersShort?"One":""}${!vT&&TT.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: UT,
            count: LT.makersShort
          })
        }
        return aL(vT ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: UT
        })
      }
      const qT = function(TT) {
        const [UT, mT, WT] = TT.baf2RxStats, zT = YL(TT), MT = ZH({
          fuelHeat: UT,
          cooling: mT,
          size: WT
        }, "cryo" === zT.RL ? AT.f : 1, !0);
        return Math.max(0, MT * eL(zT.RL) - zT.inPerS)
      }(TT);
      if (mT && qT > 0) return aL("cryo" === LT.RL ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(qT)
      });
      if (MT >= lH) return aL("rxHotLine", "warn");
      const iT = xL(TT, TT.baf2RxTarget);
      var bT;
      if (null !== iT.overheatS) return aL("rxWillOverheat", "bad", {
        pct: TT.baf2RxTarget,
        time: iT.overheatS,
        safe: null !== (bT = iT.hotAbove) && void 0 !== bT ? bT : 100
      });
      if (Math.abs(iT.settle - MT) >= 3) return aL("rxSettling", "info", {
        pct: TT.baf2RxTarget,
        heat: Math.round(iT.settle),
        time: iT.settleS
      });
      const OT = OH(TT);
      if (null !== OT) return {
        key: OT.key,
        params: {
          amount: OT.amount
        },
        tone: "info"
      };
      const eT = function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== UT && ("running" !== UT || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === TT.rods ? `${vH}rxLimitNoRods` : `${vH}rxLimit_${jH(TT)}`
      }({
        rods: TT.baf2RxStats[3],
        ...bH(TT)
      }, TT.baf2RxState, TT.baf2RxOut >= bL * TT.baf2RxMaxNow, !1);
      if (eT === `${iL}rxLimit_size`) {
        const [UT, , mT, WT] = TT.baf2RxStats, zT = WT > 0 && UT > 0 ? Math.ceil(mT / (UT / WT) - 1e-9) : WT, MT = TT.baf2RxDims.every((TT => TT >= um("reactor").max));
        if (zT < WT) return aL(MT ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: zT,
          have: WT
        });
        if (MT) return aL("rxLimit_sizeMax", "info")
      }
      return null !== eT ? {
        key: eT,
        params: {},
        tone: "info"
      } : aL("rxSteady", "ok", {
        pct: TT.baf2RxTarget
      })
    }

    function XL(TT) {
      var UT;
      if (TT.melted) return aL("rxMeltedBody", "bad");
      if (-1 === TT.bad) return aL("rxFix_noRoom", "warn");
      if (TT.bad > 0) return aL(1 === TT.bad ? "rxBadOne" : "rxBad", "warn", {
        count: TT.bad
      });
      if (TT.left > 0) {
        const UT = 1 === TT.left ? "One" : "";
        return aL(TT.canFill ? `rxPlanLeft${UT}` : `rxPlanLeftNoFill${UT}`, "info", {
          count: TT.left
        })
      }
      if (0 === TT.rods) return aL("rxLimitNoRods", "warn");
      const mT = null !== (UT = TT.idle) && void 0 !== UT ? UT : 0;
      return mT > 0 ? aL(1 === mT ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: mT
      }) : aL("rxPlanReady", "ok")
    }

    function IL(TT) {
      return Math.floor(Math.max(0, TT[1] - 1) / 2)
    }

    function QL(TT) {
      if (TT >= MH && TT < gH) {
        const UT = TT - MH;
        return {
          key: 0 === UT ? `${iL}rxWhy_rodAlone` : 1 === UT ? `${iL}rxWhy_rodOne` : `${iL}rxWhy_rod`,
          params: {
            count: String(UT),
            heat: String(Pn * (1 + Vn * UT))
          }
        }
      }
      return TT === gH ? {
        key: `${iL}rxWhy_channel`,
        params: {
          amount: String(Cn)
        }
      } : TT === nH ? {
        key: `${iL}rxWhy_deadChannel`,
        params: {}
      } : TT === HH ? {
        key: `${iL}rxWhy_graphite`,
        params: {}
      } : {
        key: `${iL}rxWhy_core`,
        params: {}
      }
    }
    const sL = "buildAFactory2Game:";

    function FL(TT, UT) {
      return 0 !== (TT.baf2RxFlags & UT)
    }

    function PL(TT) {
      let {
        status: UT,
        pending: mT,
        store: WT,
        explain: zT
      } = TT;
      const {
        t: MT
      } = (0, dz.z)(), gT = FL(UT, LU), nT = UT.baf2RxTarget, HT = UT.baf2RxThrottle, kT = function(TT) {
        return {
          press: () => {
            TT.throttlePress()
          },
          drag: UT => {
            TT.throttleDrag(UT)
          },
          release: () => {
            TT.throttleRelease()
          }
        }
      }(WT), jT = null === (lT = xL(UT, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, lT - 10),
        red: lT
      };
      var lT;
      return (0, JM.jsxs)("div", {
        className: ez()("Baf2RxThrottle", {
          Off: gT
        }),
        onClick: () => {
          gT && zT(`${sL}rxWhy_startFirst`)
        },
        children: [(0, JM.jsx)("span", {
          className: "HideNarrow",
          children: MT(`${sL}rxThrottle`)
        }), (0, JM.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, JM.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: nT,
            disabled: gT,
            style: gT ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": MT(`${sL}rxThrottle`),
            onPointerDown: () => {
              kT.press();
              const TT = () => {
                window.removeEventListener("pointerup", TT), window.removeEventListener("pointercancel", TT), kT.release()
              };
              window.addEventListener("pointerup", TT), window.addEventListener("pointercancel", TT)
            },
            onKeyUp: kT.release,
            onChange: TT => {
              kT.drag(Number(TT.target.value))
            }
          }), (0, JM.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${jT.amber}%, #ffb020 ${jT.amber}% ${jT.red}%, #ff3b30 ${jT.red}%)`
            },
            "aria-hidden": "true"
          }), (0, JM.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${HT}% + ${8*(1-HT/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, JM.jsxs)("b", {
          children: [`${nT}%`, (0, JM.jsx)("i", {
            className: ez()("Baf2RxPendingDot", {
              On: mT
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function VL(TT) {
      let {
        status: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)(), WT = xL(UT, UT.baf2RxTarget), zT = YL(UT).RL, MT = mT("cryo" === zT ? `${sL}rxRateCryo` : `${sL}rxRateWater`, {
        rate: vL(WT.coolPerS)
      }), gT = mT(`${sL}rxChain`, {
        pct: String(UT.baf2RxTarget),
        out: XH(WT.out),
        heat: String(Math.round(WT.settle)),
        coolant: MT
      }), nT = null !== WT.coolantSecs ? WT.coolantSecs >= 1 ? mT("cryo" === zT ? `${sL}rxThrottleCryoOut` : `${sL}rxThrottleWaterOut`, {
        time: bM(mT, WT.coolantSecs)
      }) : mT("cryo" === zT ? `${sL}rxThrottleCryoDry` : `${sL}rxThrottleWaterDry`) : null;
      return (0, JM.jsxs)("p", {
        className: "Baf2RxChain",
        children: [gT, null !== nT ? (0, JM.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", nT]
        }) : (0, JM.jsxs)("span", {
          children: [" \xb7 ", mT(`${sL}rxChainPellets`, {
            amount: IH(WT.pelletsPerMin)
          })]
        })]
      })
    }

    function uL(TT) {
      let {
        view: UT,
        store: mT,
        explain: zT,
        explainOnce: MT
      } = TT;
      const {
        t: gT
      } = (0, dz.z)(), {
        status: nT
      } = UT, [HT, kT] = (0, WT.useState)(!1), jT = FL(nT, LU), LT = FL(nT, pU), pT = !FL(nT, cU), BT = nT.baf2RxHeat > 100;
      return (0, JM.jsxs)(JM.Fragment, {
        children: [(0, JM.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, JM.jsx)(PL, {
            status: nT,
            pending: UT.throttlePending,
            store: mT,
            explain: zT
          }), (0, JM.jsx)(qL, {
            on: LT,
            label: LT ? gT(`${sL}rxOdLeft`, {
              time: bM(gT, nT.baf2RxOdLeft)
            }) : gT(`${sL}rxOverdrive`),
            locked: pT,
            pending: 0 !== (UT.pendingFlags & pU),
            toggle: () => {
              pT ? zT(`${sL}rxOverdriveTier`, {
                amount: String(lT(13))
              }) : LT ? mT.setFlag(pU, !1) : UT.odConfirmed ? mT.setFlag(pU, !0) : kT(!0)
            }
          }), jT || UT.startGuard ? (0, JM.jsx)(Og.s, {
            disabled: UT.busy.has("start") || UT.startGuard,
            onClick: () => {
              mT.tap("start", (() => {
                mT.setFlag(LU, !1)
              }))
            },
            children: gT(UT.startGuard ? `${sL}rxStarting` : `${sL}rxStart`)
          }) : (0, JM.jsx)("span", {
            className: ez()("Baf2RxScram", {
              Pulse: BT
            }),
            children: (0, JM.jsx)(Og.I, {
              onClick: () => {
                mT.shutDown()
              },
              children: gT(`${sL}rxScram`)
            })
          })]
        }), (0, JM.jsx)(VL, {
          status: nT
        }), HT && (0, JM.jsx)(pL, {
          id: "baf2RxOdTitle",
          title: `${sL}rxOdConfirmTitle`,
          body: `${sL}rxOdConfirmBody`,
          yes: `${sL}rxOdConfirm`,
          cancel: () => {
            kT(!1)
          },
          confirm: () => {
            kT(!1), mT.tap("odConfirm", (() => {
              mT.confirmOverdrive(), mT.setFlag(pU, !0)
            })), MT(`${sL}rxWhy_overdrive`)
          }
        })]
      })
    }

    function CL(TT) {
      let {
        view: UT,
        store: mT,
        keepSize: WT
      } = TT;
      const {
        t: zT
      } = (0, dz.z)(), {
        status: MT
      } = UT;
      return (0, JM.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, JM.jsx)(fL, {
          kind: "reactor",
          dims: UT.dims,
          cap: MT.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: TT => {
            mT.resize(TT)
          }
        }), WT ? (0, JM.jsx)(Og.g, {
          onClick: WT,
          children: zT(`${sL}rxKeepSize`)
        }) : (0, JM.jsxs)(JM.Fragment, {
          children: [(0, JM.jsx)(qL, {
            on: UT.guide,
            label: zT(`${sL}rxGuide`),
            toggle: () => {
              mT.toggleGuide()
            }
          }), FL(MT, fU) && (0, JM.jsx)(qL, {
            on: UT.starter,
            label: zT(`${sL}rxStarter`),
            toggle: () => {
              mT.toggleStarter()
            }
          }), (0, JM.jsx)(kL, {
            status: MT,
            store: mT,
            busy: UT.busy.has("fill")
          })]
        })]
      })
    }

    function rL(TT) {
      let {
        need: UT,
        kind: mT = "reactor",
        explain: WT
      } = TT;
      const {
        t: zT
      } = (0, dz.z)(), MT = UT.length <= 3, gT = UT.reduce(((TT, UT) => {
        let [, mT] = UT;
        return TT + mT
      }), 0);
      return (0, JM.jsxs)("div", {
        className: ez()("Baf2RxParts", {
          Compact: !MT
        }),
        onClick: () => {
          WT("battery" === mT ? `${sL}batWhy_store` : `${sL}rxShellHint`)
        },
        children: [gT > 0 && (0, JM.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === gT ? zT(`${sL}rxBlocksOne`) : zT(`${sL}rxBlocks`, {
            blocks: String(gT)
          })
        }), 0 === UT.length ? (0, JM.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: zT("battery" === mT ? `${sL}batPartsDone` : `${sL}rxShellDone`)
        }) : YH(UT).map((TT => {
          let [UT, mT, WT] = TT;
          const gT = function(TT) {
            const UT = tH[TT];
            if (void 0 === UT) return null;
            const [mT, WT, zT] = dH[UT].colour.map((TT => Math.round(255 * TT)));
            return `rgb(${mT}, ${WT}, ${zT})`
          }(UT);
          return (0, JM.jsxs)("span", {
            className: "Baf2RxChip",
            title: zM(zT, UT),
            children: [(0, JM.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === gT ? {
                visibility: "hidden"
              } : {
                background: gT
              },
              title: zT(`${sL}rxShopGhost`)
            }), (0, JM.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, JM.jsx)(tz.b, {
                itemName: UT,
                amount: 0
              })
            }), (0, JM.jsx)("span", {
              className: "Baf2RxChipName",
              children: MT ? `${mT} ${nT=zM(zT,UT),nT.replace(/^(Reactor|Battery) (?=\S)/,"")}` : mT
            }), WT >= mT ? (0, JM.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, JM.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: MT ? zT(`${sL}rxShopShort`, {
                count: String(mT - WT)
              }) : "\u2212" + (mT - WT)
            })]
          }, UT);
          var nT
        }))]
      })
    }
    const KL = "buildAFactory2Game:";

    function SL(TT) {
      var UT, mT, zT, MT, gT, nT, HT;
      let {
        store: kT,
        close: jT
      } = TT;
      const {
        t: lT
      } = (0, dz.z)(), LT = Cg(), pT = BL(kT), {
        explained: BT,
        explain: ZT
      } = WL("baf2RxExplained"), cT = (0, WT.useCallback)(((TT, UT) => {
        ZT(lT(TT, UT))
      }), [ZT, lT]), vT = null === pT || void 0 === pT ? void 0 : pT.status, fT = !0 === (null === vT || void 0 === vT ? void 0 : vT.baf2BatReadOnly), qT = TT => {
        vT && LT.send(lU(vT.baf2BatAt, TT))
      }, [iT, bT, OT] = null !== (UT = null === pT || void 0 === pT ? void 0 : pT.dims) && void 0 !== UT ? UT : [0, 0, 0], eT = XH(null !== (mT = null === pT || void 0 === pT ? void 0 : pT.fl) && void 0 !== mT ? mT : 0), YT = !0 === (null === vT || void 0 === vT ? void 0 : vT.baf2BatFormed), JT = null !== (zT = null === vT || void 0 === vT ? void 0 : vT.baf2BatStored) && void 0 !== zT ? zT : 0, xT = Math.max(1, null !== (MT = null === vT || void 0 === vT ? void 0 : vT.baf2BatIslandCap) && void 0 !== MT ? MT : 1), dT = Math.min(100, 100 * JT / xT), wT = null === vT || void 0 === vT ? void 0 : vT.baf2BatNetPerS, tT = function(TT, UT, mT) {
        return mT > 0 && UT >= mT ? "full" : void 0 !== TT && TT >= .05 ? "charging" : void 0 !== TT && TT <= -.05 && UT > 0 ? "draining" : "steady"
      }(wT, JT, null !== (gT = null === vT || void 0 === vT ? void 0 : vT.baf2BatIslandCap) && void 0 !== gT ? gT : 0), aT = null !== (nT = null === vT || void 0 === vT ? void 0 : vT.baf2BatMadePerS) && void 0 !== nT ? nT : 0, yT = null !== (HT = null === vT || void 0 === vT ? void 0 : vT.baf2BatUsedPerS) && void 0 !== HT ? HT : 0;
      let XT, IT = {},
        QT = "info";
      if (vT)
        if (YT) "charging" === tT ? (XT = `${KL}batLine_charging`, IT = {
          time: bM(lT, (xT - JT) / Math.max(.05, null !== wT && void 0 !== wT ? wT : 0))
        }, QT = "ok") : "draining" === tT ? (XT = `${KL}batLine_draining`, IT = {
          time: bM(lT, JT / Math.max(.05, -(null !== wT && void 0 !== wT ? wT : 0)))
        }, QT = "warn") : XT = "full" === tT ? `${KL}batLine_full` : JT <= 0 && yT > 0 ? `${KL}batLine_empty` : `${KL}batLine_steady`;
        else {
          var sT;
          const TT = XL({
            left: vT.baf2BatNeed.reduce(((TT, UT) => {
              let [, mT] = UT;
              return TT + mT
            }), 0),
            bad: vT.baf2BatBad,
            rods: 1,
            canFill: !0 === vT.baf2BatCanFill,
            melted: !1
          });
          XT = TT.key, IT = {
            count: String(null !== (sT = TT.params.count) && void 0 !== sT ? sT : 0)
          }, QT = TT.tone
        }
      else XT = `${KL}batLine_steady`;
      const FT = Math.max(aT, yT, 1);
      return (0, JM.jsx)(bg.e, {
        close: jT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, JM.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, JM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JM.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, JM.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, JM.jsx)(tz.b, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, JM.jsxs)("div", {
                children: [(0, JM.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: lT(`${KL}batTitle`)
                }), vT && (0, JM.jsxs)("p", {
                  className: ez()("Baf2RxSubtitle", {
                    good: YT && "charging" === tT,
                    warn: YT && "draining" === tT
                  }),
                  children: [iT, "\xd7", bT, "\xd7", OT, " \xb7 ", lT(YT ? `${KL}batState_${tT}` : `${KL}rxSubPlanShort`)]
                })]
              })]
            }), (0, JM.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [vT && !fT && (0, JM.jsx)(ZL, {
                kind: "battery",
                cap: YT ? eT : void 0,
                busy: null === pT || void 0 === pT ? void 0 : pT.busy.has("apart"),
                apart: () => {
                  kT.tap("apart", (() => {
                    qT("apart")
                  }))
                }
              }), (0, JM.jsx)(Og.k, {
                onClick: jT
              })]
            })]
          }), pT && vT && (0, JM.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, JM.jsxs)("div", {
              className: ez()("Baf2RxFlow Baf2BatFlow", {
                Plan: !YT
              }),
              children: [(0, JM.jsx)(TL, {
                kind: "Power",
                label: lT(`${KL}batMade`),
                number: YT ? `\u26a1 ${XH(aT)}/s` : "\u2014",
                note: lT(`${KL}batMadeNote`),
                share: YT ? aT / FT : void 0,
                onExplain: () => {
                  cT(`${KL}batWhy_made`)
                }
              }), (0, JM.jsx)(UL, {
                kind: "Power",
                step: YT ? wL(aT, FT) : 0,
                planned: !YT
              }), (0, JM.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  cT(`${KL}batWhy_store`)
                },
                children: [(0, JM.jsx)(mL, {
                  max: 100,
                  bands: [{
                    upTo: YT ? dT : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, JM.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, JM.jsx)("b", {
                    className: "Baf2BatStored",
                    children: YT ? lT(`${KL}batStoredOf`, {
                      amount: XH(JT),
                      cap: XH(vT.baf2BatIslandCap)
                    }) : lT(`${KL}batWillHold`, {
                      cap: eT
                    })
                  }), (0, JM.jsx)("span", {
                    children: lT(`${KL}batAdds`, {
                      cap: eT
                    })
                  }), YT && (0, JM.jsx)("small", {
                    children: lT(`${KL}batBreakNote`, {
                      cap: eT
                    })
                  })]
                })]
              }), (0, JM.jsx)(UL, {
                kind: "Power",
                step: YT ? wL(yT, FT) : 0,
                planned: !YT
              }), (0, JM.jsx)(TL, {
                kind: "Power",
                label: lT(`${KL}batUsed`),
                number: YT ? `\u26a1 ${XH(yT)}/s` : "\u2014",
                note: lT(`${KL}batUsedNote`),
                share: YT ? yT / FT : void 0,
                onExplain: () => {
                  cT(`${KL}batWhy_used`)
                }
              })]
            }), (0, JM.jsx)(zL, {
              text: lT(XT, IT),
              tone: QT,
              explained: BT
            }), fT ? (0, JM.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: lT(`${KL}rxNotYours`)
            }) : !YT && (0, JM.jsxs)(JM.Fragment, {
              children: [(0, JM.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, JM.jsx)(fL, {
                  kind: "battery",
                  dims: pT.dims,
                  cap: vT.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: TT => {
                    kT.resize(TT)
                  }
                }), (0, JM.jsx)(qL, {
                  on: pT.guide,
                  label: lT(`${KL}rxGuide`),
                  toggle: () => {
                    kT.toggleGuide()
                  }
                }), vT.baf2BatCanFill && (0, JM.jsx)(Og.l, {
                  disabled: !JH("battery", vT.baf2BatNeed) || pT.busy.has("fill"),
                  onClick: () => {
                    kT.tap("fill", (() => {
                      qT("fill")
                    }))
                  },
                  children: lT(`${KL}rxFill`)
                })]
              }), (0, JM.jsx)(rL, {
                need: vT.baf2BatNeed,
                kind: "battery",
                explain: cT
              })]
            })]
          })]
        })
      })
    }
    const GL = "buildAFactory2Game:",
      NL = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function EL(TT, UT) {
      return TT === zH ? null : UT ? "#4a4440" : TT < gH ? NL[TT - MH] : TT === gH ? "#3fd0f0" : TT === nH ? "#2c3e4c" : "#55585e"
    }

    function hL(TT) {
      let {
        inner: UT,
        looks: mT,
        layer: WT,
        setLayer: zT,
        glow: MT,
        melted: gT,
        explain: nT
      } = TT;
      const {
        t: HT
      } = (0, dz.z)(), [kT, jT, lT] = UT, LT = Math.max(0, Math.min(jT - 1, WT)), pT = [];
      for (let ZT = 0; ZT < lT; ZT++)
        for (let TT = 0; TT < kT; TT++) {
          var BT;
          const UT = null !== (BT = mT[(LT * lT + ZT) * kT + TT]) && void 0 !== BT ? BT : zH,
            WT = EL(UT, gT),
            zT = UT >= MH && UT < gH;
          pT.push(null === WT ? (0, JM.jsx)("circle", {
            cx: TT + .5,
            cy: ZT + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${TT},${ZT}`) : (0, JM.jsx)("rect", {
            x: TT + .06,
            y: ZT + .06,
            width: .88,
            height: .88,
            fill: WT,
            opacity: zT && !gT ? .5 + .5 * MT : 1,
            onClick: TT => {
              TT.stopPropagation();
              const mT = QL(UT);
              nT(mT.key, mT.params)
            }
          }, `${TT},${ZT}`))
        }
      return (0, JM.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, JM.jsx)("svg", {
          className: ez()("Baf2RxMapGrid", {
            Melted: gT
          }),
          viewBox: `0 0 ${Math.max(1,kT)} ${Math.max(1,lT)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": HT(`${GL}rxWhy_core`),
          onClick: () => {
            nT(`${GL}rxWhy_core`, {})
          },
          children: pT
        }), jT > 1 && (0, JM.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, JM.jsx)("button", {
            type: "button",
            "aria-label": HT(`${GL}rxLayerDown`),
            disabled: LT <= 0,
            onClick: () => {
              zT(LT - 1)
            },
            children: "\u25bc"
          }), (0, JM.jsxs)("span", {
            children: [(0, JM.jsx)("span", {
              className: "HideNarrow",
              children: HT(`${GL}rxLayer`, {
                n: String(LT + 1),
                of: String(jT)
              })
            }), (0, JM.jsx)("span", {
              className: "ShowNarrow",
              children: HT(`${GL}rxLayerShort`, {
                n: String(LT + 1),
                of: String(jT)
              })
            })]
          }), (0, JM.jsx)("button", {
            type: "button",
            "aria-label": HT(`${GL}rxLayerUp`),
            disabled: LT >= jT - 1,
            onClick: () => {
              zT(LT + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const DL = "buildAFactory2Game:",
      oL = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: En,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: qH,
        kind: "red"
      }],
      AL = [50, En, 100];

    function RL(TT) {
      let {
        stats: UT,
        t: mT,
        explain: WT
      } = TT;
      const zT = jH(UT),
        MT = Math.max(1, UT.fuelHeat, UT.cooling, UT.size),
        gT = [
          ["fuel", `${DL}rxBarRods`, UT.fuelHeat],
          ["cooling", `${DL}rxBarCooling`, UT.cooling],
          ["size", `${DL}rxBarSize`, UT.size]
        ];
      return (0, JM.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          WT(`${DL}rxWhy_bars`)
        },
        children: [(0, JM.jsx)("span", {
          className: "Baf2RxMostLine",
          children: mT(`${DL}rxMost`, {
            amount: XH(Math.min(UT.fuelHeat, UT.cooling, UT.size))
          })
        }), (0, JM.jsx)("span", {
          className: "Baf2RxMostBars",
          children: gT.map((TT => {
            let [UT, WT, gT] = TT;
            return (0, JM.jsxs)("span", {
              className: ez()("Baf2RxMostBar", UT, {
                Low: UT === zT
              }),
              children: [(0, JM.jsx)("small", {
                children: mT(WT)
              }), (0, JM.jsx)("i", {
                children: (0, JM.jsx)("b", {
                  style: {
                    width: 100 * gT / MT + "%"
                  }
                })
              })]
            }, UT)
          }))
        })]
      })
    }

    function Tp(TT) {
      var UT;
      let {
        view: mT,
        heat: zT,
        settle: MT,
        settleLine: gT,
        settleBad: nT,
        explain: HT
      } = TT;
      const {
        t: kT
      } = (0, dz.z)(), {
        status: jT
      } = mT, lT = jT.baf2RxAt.join(","), [LT, pT] = (0, WT.useState)((() => IL(mT.inner)));
      (0, WT.useEffect)((() => {
        pT(IL(mT.inner))
      }), [lT, mT.inner[1]]);
      const BT = null !== (UT = mT.plan) && void 0 !== UT ? UT : bH(jT),
        ZT = mT.plan ? mT.plan.powerPerUnit : jT.baf2RxStats[8],
        cT = null === zT ? null : "alarm" === (vT = fH(jT)) ? "red" : "hot" === vT ? "hot" : "warm" === vT ? "warm" : "cold";
      var vT;
      const fT = !jT.baf2RxFormed && function(TT, UT) {
          return 0 !== (TT.baf2RxFlags & UT)
        }(jT, BU),
        qT = jT.baf2RxDamage,
        iT = jT.baf2RxDamageTrend;
      return (0, JM.jsxs)("div", {
        className: ez()("Baf2RxCore", null !== cT && void 0 !== cT ? cT : "plan"),
        children: [(0, JM.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, JM.jsx)(hL, {
            inner: mT.inner,
            looks: mT.looks,
            layer: LT,
            setLayer: pT,
            glow: jT.baf2RxFormed ? jT.baf2RxThrottle / 100 : 1,
            melted: fT,
            explain: HT
          }), (0, JM.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              HT(`${DL}rxWhy_heat`)
            },
            children: [null !== zT ? (0, JM.jsxs)(JM.Fragment, {
              children: [(0, JM.jsx)("b", {
                children: kT(`${DL}rxHeatPct`, {
                  pct: String(zT)
                })
              }), (0, JM.jsx)("span", {
                className: ez()("Baf2RxBand", cT),
                children: kT(`${DL}rxBand_${cT}`)
              })]
            }) : (0, JM.jsx)("b", {
              children: kT(`${DL}rxHeat`)
            }), null !== gT && (0, JM.jsx)("span", {
              className: ez()("Baf2RxSettle", {
                Bad: nT
              }),
              children: gT
            }), qT >= 1 && (0, JM.jsxs)("span", {
              className: ez()("Baf2RxDamage", iT),
              children: [kT(`${DL}rxDamageLine`, {
                pct: String(qT)
              }), " \xb7 ", kT(`${DL}rxDamage_${iT}`), (0, JM.jsx)("i", {
                children: (0, JM.jsx)("b", {
                  style: {
                    width: `${Math.min(100,qT)}%`
                  }
                })
              })]
            })]
          }), (0, JM.jsx)(mL, {
            max: qH,
            bands: oL,
            ticks: AL,
            now: zT,
            settle: MT,
            settleTone: nT ? "bad" : null,
            onExplain: () => {
              HT(`${DL}rxWhy_heat`)
            }
          })]
        }), (0, JM.jsx)(RL, {
          stats: BT,
          t: kT,
          explain: HT
        }), ZT > 0 && (0, JM.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            HT(`${DL}rxWhy_perPellet`)
          },
          children: kT(`${DL}rxPerPellet`, {
            amount: XH(ZT)
          })
        })]
      })
    }

    function Up(TT, UT) {
      var mT;
      if (!TT.baf2RxStore) return {
        note: UT(`${DL}rxUpTo`, {
          amount: XH(TT.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [WT, zT] = TT.baf2RxStore, MT = zT > 0 ? WT / zT : 0, gT = String(Math.floor(100 * MT)), nT = null !== (mT = TT.baf2RxStoreNetPerS) && void 0 !== mT ? mT : 0, HT = function(TT) {
        var UT, mT;
        const [WT, zT] = null !== (UT = TT.baf2RxStore) && void 0 !== UT ? UT : [0, 0], MT = null !== (mT = TT.baf2RxStoreNetPerS) && void 0 !== mT ? mT : 0;
        return zT > 0 && WT >= zT - 1 ? "running" === TT.baf2RxState ? `${iL}rxStoreFull` : `${iL}rxStoreFullOnly` : MT > .05 ? `${iL}rxStoreLine` : MT < -.05 ? "running" === TT.baf2RxState ? `${iL}rxStoreUsesMore` : `${iL}rxStoreDraining` : `${iL}rxStorePct`
      }(TT);
      return {
        note: UT(HT, HT === `${DL}rxStoreLine` ? {
          pct: gT,
          time: bM(UT, (zT - WT) / nT)
        } : {
          pct: gT
        }),
        share: MT
      }
    }

    function mp(TT) {
      let {
        view: UT,
        explain: mT,
        preview: WT
      } = TT;
      const {
        t: zT
      } = (0, dz.z)(), {
        status: MT
      } = UT, gT = TH(mH(...UT.dims)), nT = dL(MT), HT = Math.min(Math.round(MT.baf2RxFuel), gT.fuel), kT = "running" === MT.baf2RxState, jT = kT ? wL(MT.baf2RxOut, MT.baf2RxMaxNow) : 0, lT = function(TT, UT, mT) {
        const WT = YL(TT),
          zT = "cryo" === WT.RL,
          MT = mT ? mT.coolantSecs : WT.pct >= 100 && TT.baf2RxOut >= 1 ? xL(TT, TT.baf2RxThrottle).coolantSecs : null;
        let gT, nT = !1;
        if (WT.pct < 100) {
          const mT = 1 === WT.makersShort,
            MT = !zT && TT.baf2RxCryoOpen ? "OrCryo" : "";
          gT = WT.makersShort > 0 ? UT(zT ? `${DL}rxCryoAddMixer${mT?"":"s"}` : `${DL}rxWaterAddCondenser${mT?"":"s"}${MT}`, {
            count: String(WT.makersShort)
          }) : UT(`${DL}rxWaterNeeds`, {
            rate: vL(WT.needPerS)
          })
        } else if (null !== MT) gT = UT(`${DL}rxWaterRunsOut`, {
          time: bM(UT, MT)
        });
        else if (WT.waterBeside > 0) gT = UT(`${DL}rxCryoPlusWater`, {
          rate: vL(WT.waterBeside)
        });
        else {
          const TT = function(TT) {
            return TT.inPerS <= 0 ? "rxWaterNoSupply" : TT.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(WT);
          nT = "rxWaterNoSupply" === TT, gT = UT(`${DL}${TT}`, {
            amount: XH(WT.stored)
          })
        }
        return {
          kind: zT ? "Cryo" : "Water",
          label: UT(zT ? `${DL}rxCryo` : `${DL}rxWater`),
          number: `${vL(WT.usePerS)}/s`,
          preview: mT ? `${vL(mT.coolPerS)}/s` : null,
          note: gT,
          tone: "noWater" === TT.baf2RxState ? "danger" : nT ? "warn" : (HT = WT.pct, kT = MT, HT < 100 ? "danger" : null === kT ? null : kT < 300 ? "danger" : "warn"),
          share: WT.pct / 100,
          why: zT ? `${DL}rxWhy_cryo` : `${DL}rxWhy_water`,
          short: WT.pct < 100
        };
        var HT, kT
      }(MT, zT, WT), LT = xH(MT, gT.waste, nT), pT = Up(MT, zT), BT = xL(MT, MT.baf2RxTarget), ZT = kT && Math.abs(BT.settle - MT.baf2RxHeat) >= 3, cT = WT ? WT.pelletsPerMin / 60 : null;
      return (0, JM.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, JM.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, JM.jsx)(TL, {
            kind: "Fuel",
            label: zT(`${DL}rxFuel`),
            number: String(HT),
            preview: null !== cT && cT > 0 && MT.baf2RxFuel > 0 ? bM(zT, MT.baf2RxFuel / cT) : null,
            note: MT.baf2RxFuel <= 0 ? zT(`${DL}rxFuelEmpty`) : nT > 0 ? zT(`${DL}rxFuelLeft`, {
              time: bM(zT, MT.baf2RxFuel / nT)
            }) : zT(1 === HT ? `${DL}rxFuelPellet` : `${DL}rxFuelPellets`),
            tone: "noFuel" === MT.baf2RxState ? "danger" : MT.baf2RxFuel < 2 ? "warn" : null,
            share: MT.baf2RxFuel / gT.fuel,
            onExplain: () => {
              mT(`${DL}rxWhy_fuel`)
            }
          }), (0, JM.jsx)(TL, {
            kind: lT.kind,
            label: lT.label,
            number: lT.number,
            preview: lT.preview,
            note: lT.note,
            tone: lT.tone,
            share: lT.share,
            onExplain: () => {
              mT(lT.why)
            }
          })]
        }), (0, JM.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, JM.jsx)(UL, {
            kind: "Fuel",
            step: jT,
            short: "noFuel" === MT.baf2RxState
          }), (0, JM.jsx)(UL, {
            kind: lT.kind,
            step: jT,
            short: lT.short || "noWater" === MT.baf2RxState
          })]
        }), (0, JM.jsx)(Tp, {
          view: UT,
          heat: MT.baf2RxHeat,
          settle: Math.min(qH, BT.settle),
          settleLine: ZT ? zT(`${DL}rxHeatSettles`, {
            pct: String(Math.round(BT.settle)),
            time: bM(zT, BT.settleS)
          }) : null,
          settleBad: BT.settle > 100,
          explain: mT
        }), (0, JM.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, JM.jsx)(UL, {
            kind: "Power",
            step: jT
          }), (0, JM.jsx)(UL, {
            kind: "Waste",
            step: kT && MT.baf2RxFuel - MT.baf2RxPu > 0 ? jT : 0,
            short: LT.full
          })]
        }), (0, JM.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, JM.jsx)(TL, {
            kind: "Power",
            label: zT(`${DL}rxPowerOut`),
            number: `\u26a1 ${XH(MT.baf2RxOut)}/s`,
            preview: WT ? XH(WT.out) : null,
            note: pT.note,
            share: pT.share,
            onExplain: () => {
              mT(`${DL}rxWhy_power`)
            }
          }), (0, JM.jsx)(TL, {
            kind: "Waste",
            label: zT(`${DL}rxWaste`),
            number: `${Math.floor(MT.baf2RxWaste)}/${gT.waste}`,
            note: LT.full ? zT(`${DL}rxWasteFull`) : null !== LT.fullInS ? zT(`${DL}rxWasteFullIn`, {
              time: bM(zT, LT.fullInS)
            }) : zT(`${DL}rxWasteSpent`),
            tone: "wasteFull" === MT.baf2RxState ? "danger" : LT.full ? "warn" : null,
            share: MT.baf2RxWaste / gT.waste,
            onExplain: () => {
              mT(`${DL}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function Wp(TT) {
      let {
        view: UT,
        explain: mT
      } = TT;
      const {
        t: WT
      } = (0, dz.z)(), zT = UT.plan;
      if (!zT) return null;
      const MT = zT.fuelHeat <= 0 ? null : zT.cooling > 0 ? Math.min(qH, 100 * zT.fuelHeat / zT.cooling) : qH,
        gT = WT(`${DL}rxPlanAtFull`);
      return (0, JM.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, JM.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, JM.jsx)(TL, {
            kind: "Fuel",
            label: WT(`${DL}rxFuel`),
            number: WT(`${DL}rxPlanPerMin`, {
              amount: IH(zT.pelletsPerMin)
            }),
            note: WT(`${DL}rxPlanPellets`),
            onExplain: () => {
              mT(`${DL}rxWhy_fuel`)
            }
          }), (0, JM.jsx)(TL, {
            kind: "Water",
            label: WT(`${DL}rxWater`),
            number: `${vL(zT.waterPerS)}/s`,
            note: UT.status.baf2RxCryoOpen && zT.waterPerS > 0 ? WT(`${DL}rxPlanOrCryo`, {
              rate: vL(ZH(zT, AT.f) * AT.l)
            }) : gT,
            onExplain: () => {
              mT(`${DL}rxWhy_water`)
            }
          })]
        }), (0, JM.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, JM.jsx)(UL, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, JM.jsx)(UL, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, JM.jsx)(Tp, {
          view: UT,
          heat: null,
          settle: MT,
          settleLine: null === MT ? null : WT(`${DL}rxPlanHeat`, {
            pct: String(Math.round(MT))
          }),
          settleBad: null !== MT && MT > 100,
          explain: mT
        }), (0, JM.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, JM.jsx)(UL, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, JM.jsx)(UL, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, JM.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, JM.jsx)(TL, {
            kind: "Power",
            label: WT(`${DL}rxPowerOut`),
            number: `\u26a1 ${XH(zT.max)}/s`,
            note: gT,
            onExplain: () => {
              mT(`${DL}rxWhy_power`)
            }
          }), (0, JM.jsx)(TL, {
            kind: "Waste",
            label: WT(`${DL}rxWaste`),
            number: WT(`${DL}rxPlanPerMin`, {
              amount: IH(zT.pelletsPerMin)
            }),
            note: WT(`${DL}rxWasteSpent`),
            onExplain: () => {
              mT(`${DL}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const zp = "buildAFactory2Game:",
      Mp = {
        key: `${zp}rxWaiting`,
        params: {},
        tone: "info"
      };

    function gp(TT, UT) {
      return 0 !== (TT.baf2RxFlags & UT)
    }

    function np(TT) {
      var UT, mT;
      let {
        store: zT,
        close: MT
      } = TT;
      const {
        t: gT
      } = (0, dz.z)(), nT = BL(zT), {
        explained: HT,
        hinting: kT,
        explain: jT,
        explainOnce: lT
      } = WL("baf2RxExplained"), LT = (0, WT.useCallback)(((TT, UT) => {
        jT(gT(TT, UT))
      }), [jT, gT]), pT = (0, WT.useCallback)(((TT, UT) => {
        lT(TT, gT(TT, UT))
      }), [lT, gT]), [BT, ZT] = (0, WT.useState)(!1), [cT, vT] = (0, WT.useState)(!1), fT = null === nT || void 0 === nT ? void 0 : nT.status, qT = null === fT || void 0 === fT ? void 0 : fT.baf2RxAt.join(","), iT = !0 === (null === fT || void 0 === fT ? void 0 : fT.baf2RxFormed);
      (0, WT.useEffect)((() => {
        vT(!1), ZT(!1)
      }), [qT, iT]), (0, WT.useEffect)((() => (zT.opened(), () => {
        zT.closed()
      })), [zT]);
      const bT = void 0 !== fT && gp(fT, vU),
        OT = fT ? iT ? fH(fT) : null !== nT && void 0 !== nT && nT.plan ? function(TT, UT) {
          if (TT <= 0) return "off";
          if (UT <= 0) return "alarm";
          const mT = 100 * TT / UT;
          return mT < 50 ? "calm" : mT < lH ? "warm" : mT <= 100 ? "hot" : "alarm"
        }(nT.plan.fuelHeat, nT.plan.cooling) : "off" : "off",
        eT = fT ? iH(fT) : null,
        YT = nT ? nT.waiting ? Mp : iT ? yL(nT.status) : function(TT) {
          var UT, mT;
          const {
            status: WT
          } = TT;
          return XL({
            left: WT.baf2RxNeed.reduce(((TT, UT) => {
              let [, mT] = UT;
              return TT + mT
            }), 0),
            bad: WT.baf2RxBad,
            rods: null !== (UT = null === (mT = TT.plan) || void 0 === mT ? void 0 : mT.rods) && void 0 !== UT ? UT : 0,
            canFill: gp(WT, ZU),
            melted: gp(WT, BU),
            idle: TT.looks.reduce(((TT, UT) => TT + (UT === nH ? 1 : 0)), 0)
          })
        }(nT) : null,
        JT = kT && null !== YT && ("ok" === YT.tone || "info" === YT.tone),
        xT = fT ? function(TT) {
          const UT = 0 !== (TT.baf2RxFlags & LU),
            mT = TT.baf2RxHeat < Dn;
          return 0 !== (TT.baf2RxFlags & BU) || mT && (UT || !TT.baf2RxFormed) ? null : TT.baf2RxFormed && !UT ? {
            key: `${vH}rxApartScram`,
            params: {}
          } : {
            key: `${vH}rxApartCooling`,
            params: {
              pct: String(Dn)
            }
          }
        }(fT) : null,
        [dT, wT, tT] = null !== (UT = null === nT || void 0 === nT ? void 0 : nT.dims) && void 0 !== UT ? UT : [0, 0, 0],
        aT = `${dT}\xd7${wT}\xd7${tT}`;
      return (0, JM.jsx)(bg.e, {
        close: MT,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, JM.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, JM.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, JM.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, JM.jsx)(cL, {
                mood: OT
              }), (0, JM.jsxs)("div", {
                children: [(0, JM.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: gT(`${zp}rxTitle`)
                }), nT && (0, JM.jsxs)("p", {
                  className: ez()("Baf2RxSubtitle", iT && (null === eT || void 0 === eT ? void 0 : eT.tone)),
                  children: [iT && !bT ? (0, JM.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": gT(`${zp}rxChangeSize`),
                    onClick: () => {
                      if (!fT) return;
                      const TT = gp(fT, LU);
                      var UT;
                      (UT = {
                        scram: TT,
                        heat: fT.baf2RxHeat
                      }).scram && UT.heat < Dn ? ZT(!0) : LT(TT ? `${zp}rxResizeCooling` : `${zp}rxResizeHot`, {
                        pct: String(Dn)
                      })
                    },
                    children: [aT, " \u270e"]
                  }) : aT, " \xb7 ", gT(iT ? null !== (mT = null === eT || void 0 === eT ? void 0 : eT.label) && void 0 !== mT ? mT : `${zp}rxState_running` : `${zp}rxSubPlanShort`)]
                })]
              })]
            }), (0, JM.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [nT && !bT && (0, JM.jsx)(ZL, {
                kind: "reactor",
                busy: nT.busy.has("apart"),
                whyNot: xT ? () => {
                  LT(xT.key, xT.params)
                } : null,
                apart: () => {
                  zT.tap("apart", (() => {
                    zT.send("apart")
                  }))
                }
              }), (0, JM.jsx)(Og.k, {
                onClick: MT
              })]
            })]
          }), nT && YT && (0, JM.jsxs)("div", {
            className: "Baf2RxBody",
            children: [iT ? (0, JM.jsx)(mp, {
              view: nT,
              explain: LT,
              preview: JL(nT.status)
            }) : (0, JM.jsx)(Wp, {
              view: nT,
              explain: LT
            }), (0, JM.jsx)(zL, {
              text: JT ? `${tL(gT,YT)} ${gT(`${zp}rxTapHint`)}` : tL(gT, YT),
              tone: YT.tone,
              explained: HT
            }), bT ? (0, JM.jsxs)(JM.Fragment, {
              children: [(0, JM.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: gT(`${zp}rxNotYours`)
              }), (0, JM.jsx)(jL, {
                status: nT.status,
                store: zT,
                readOnly: !0
              })]
            }) : iT && !cT ? (0, JM.jsxs)(JM.Fragment, {
              children: [(0, JM.jsx)(uL, {
                view: nT,
                store: zT,
                explain: LT,
                explainOnce: pT
              }), void 0 !== nT.status.baf2RxLayout && nL(nT.status) && (0, JM.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, JM.jsx)(jL, {
                  status: nT.status,
                  store: zT,
                  readOnly: !1,
                  bare: !0
                }), (0, JM.jsx)(kL, {
                  status: nT.status,
                  store: zT,
                  busy: nT.busy.has("fill")
                })]
              })]
            }) : (0, JM.jsxs)(JM.Fragment, {
              children: [(0, JM.jsx)(CL, {
                view: nT,
                store: zT,
                keepSize: iT ? () => {
                  vT(!1)
                } : void 0
              }), eH(nT.dims, nT.status.baf2RxDims) && (0, JM.jsx)(rL, {
                need: nT.status.baf2RxNeed,
                explain: LT
              }), (0, JM.jsx)(jL, {
                status: nT.status,
                store: zT,
                readOnly: !1
              })]
            }), BT && (0, JM.jsx)(pL, {
              id: "baf2ResizeTitle",
              title: `${zp}rxResizeConfirmTitle`,
              body: `${zp}rxResizeConfirmBody`,
              yes: `${zp}rxChangeSize`,
              cancel: () => {
                ZT(!1)
              },
              confirm: () => {
                ZT(!1), vT(!0)
              }
            })]
          })]
        })
      })
    }
    class Hp {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(TT) {
        this.view = TT;
        for (const UT of this.listeners) UT()
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

    function kp(TT) {
      let {
        commands: UT,
        store: mT,
        power: zT,
        water: MT,
        reactor: gT,
        battery: nT,
        collider: HT,
        terminal: kT,
        quests: jT,
        tutorial: lT,
        close: LT,
        leave: pT,
        askIslands: BT,
        showCore: ZT,
        openSocial: cT
      } = TT;
      const {
        userContext: vT
      } = (0, sn.d)(), fT = Qn.featureFlags.useSocialFeatures && vT.isLoggedIn(), [qT, iT] = (0, WT.useState)((() => mT.get()));
      (0, WT.useEffect)((() => mT.subscribe((() => {
        iT(mT.get())
      }))), [mT]);
      const bT = "islands" === (null === qT || void 0 === qT ? void 0 : qT.kind) ? qT.backToCore : void 0;
      return (0, JM.jsxs)(ug.Provider, {
        value: UT,
        children: ["core" === (null === qT || void 0 === qT ? void 0 : qT.kind) && (0, JM.jsx)(ql, {
          view: qT.core,
          close: LT,
          askIslands: BT
        }), "dropMap" === (null === qT || void 0 === qT ? void 0 : qT.kind) && (0, JM.jsx)(el, {
          message: qT.dropMap,
          quests: jT,
          close: LT,
          leave: pT
        }), "islands" === (null === qT || void 0 === qT ? void 0 : qT.kind) && (0, JM.jsx)(Cl, {
          message: qT.islands,
          arrivedAtMs: qT.arrivedAtMs,
          close: bT ? () => {
            ZT(bT)
          } : LT,
          leave: pT,
          openSocial: fT ? cT : null
        }), "quests" === (null === qT || void 0 === qT ? void 0 : qT.kind) && (0, JM.jsx)(Pj, {
          store: jT,
          tutorial: lT,
          close: LT
        }), "transfer" === (null === qT || void 0 === qT ? void 0 : qT.kind) && (0, JM.jsx)(gj, {
          message: qT.transfer,
          arrivedAtMs: qT.arrivedAtMs,
          close: LT,
          leave: pT
        }), "power" === (null === qT || void 0 === qT ? void 0 : qT.kind) && (0, JM.jsx)(ag, {
          store: zT,
          close: LT
        }), "water" === (null === qT || void 0 === qT ? void 0 : qT.kind) && (0, JM.jsx)(cn, {
          store: MT,
          close: LT
        }), "reactor" === (null === qT || void 0 === qT ? void 0 : qT.kind) && (0, JM.jsx)(np, {
          store: gT,
          close: LT
        }), "battery" === (null === qT || void 0 === qT ? void 0 : qT.kind) && (0, JM.jsx)(SL, {
          store: nT,
          close: LT
        }), "collider" === (null === qT || void 0 === qT ? void 0 : qT.kind) && (0, JM.jsx)(qk, {
          store: HT,
          close: LT
        }), "terminal" === (null === qT || void 0 === qT ? void 0 : qT.kind) && (0, JM.jsx)(Rl, {
          store: kT,
          close: LT,
          send: TT => {
            UT.send(TT)
          }
        })]
      })
    }
    var jp = mT(38622);

    function lp(TT, UT) {
      return TT.distSq - UT.distSq
    }
    class Lp {
      constructor() {
        this.list = [], this.pool = []
      }
      add(TT, UT, mT, WT) {
        let zT = this.pool[this.list.length];
        zT || (zT = {
          x: 0,
          y: 0,
          distSq: 0,
          element: UT,
          liftRem: mT,
          dot: WT
        }, this.pool.push(zT)), zT.x = TT.x, zT.y = TT.y, zT.distSq = TT.distSq, zT.element = UT, zT.liftRem = mT, zT.dot = WT, this.list.push(zT)
      }
    }
    class pp {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = TT, this.sizes = new WeakMap, this.observer = new ResizeObserver((TT => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const UT of TT) {
            const TT = UT.borderBoxSize[0];
            "dot" !== UT.target.dataset.crowded && 0 !== TT.inlineSize && 0 !== TT.blockSize && this.sizes.set(UT.target, {
              width: TT.inlineSize,
              height: TT.blockSize
            })
          }
        })), this.remPx = 16, this.Jp = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.Qq = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.Qq)
      }
      observe(TT) {
        this.observer.observe(TT)
      }
      unobserve(TT) {
        this.observer.unobserve(TT)
      }
      run(TT) {
        const UT = TT.list;
        UT.sort(lp);
        const mT = this.pxPerVw,
          WT = this.pxPerVh;
        this.Jp.length = 0, this.hud && this.Jp.push(...this.hud.boxes(performance.now()));
        for (const MT of UT) {
          var zT;
          const TT = this.sizes.get(MT.element);
          let UT = "no";
          if (TT && TT.width > 0) {
            const zT = MT.x * mT,
              gT = MT.y * WT - MT.liftRem * this.remPx;
            this.fit(zT, gT, TT.width, TT.height) || (UT = MT.dot && this.fit(zT, gT, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (zT = MT.element.dataset.crowded) && void 0 !== zT ? zT : "no") !== UT && ("no" === UT ? delete MT.element.dataset.crowded : MT.element.dataset.crowded = UT), "hidden" !== UT && (0, jp.d)(MT.element, MT.x, MT.y)
        }
        UT.length = 0
      }
      fit(TT, UT, mT, WT) {
        const zT = TT - mT / 2,
          MT = TT + mT / 2,
          gT = UT - WT,
          nT = this.Jp;
        for (let HT = 0; HT < nT.length; HT += 4)
          if (zT < nT[HT + 1] - 2 && MT > nT[HT] + 2 && gT < nT[HT + 3] - 2 && UT > nT[HT + 2] + 2) return !1;
        return nT.push(zT, MT, gT, UT), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.Qq)
      }
    }
    const Bp = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class Zp {
      constructor() {
        this.cards = Bp.map((TT => document.getElementsByClassName(TT))), this.watched = Bp.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(TT) {
        TT - this.refreshedAt > 1e3 && (this.refreshedAt = TT, this.stale = !0);
        for (let mT = 0; mT < this.cards.length; mT++) {
          var UT;
          const TT = null !== (UT = this.cards[mT][0]) && void 0 !== UT ? UT : null;
          TT !== this.watched[mT] && this.watch(mT, TT)
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
        for (const UT of this.watched) {
          if (!UT || UT.closest(".NoRoom")) continue;
          const mT = UT.getBoundingClientRect();
          let WT = mT.top,
            zT = mT.bottom;
          if (UT === this.watched[0] && this.hud) {
            const TT = this.hud.getBoundingClientRect();
            WT = Math.max(WT, TT.top), zT = Math.min(zT, TT.bottom)
          }
          mT.width > 0 && zT > WT && TT.push(mT.left, mT.right, WT, zT)
        }
      }
      watch(TT, UT) {
        const mT = this.watched[TT];
        var WT, zT;
        (mT && this.sizes.unobserve(mT), this.watched[TT] = UT, this.stale = !0, UT && this.sizes.observe(UT), 0 === TT) && (null === (WT = this.hud) || void 0 === WT || WT.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (zT = null === UT || void 0 === UT ? void 0 : UT.closest(".Baf2QuestHud")) && void 0 !== zT ? zT : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var cp = mT(38624);
    class vp {
      constructor(TT) {
        this.onElement = TT, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(TT) {
        const UT = [];
        for (let mT = 0; mT + 4 < TT.length; mT += 5) {
          const WT = [TT[mT], TT[mT + 1], TT[mT + 2]];
          UT.push({
            key: WT.join(","),
            pos: WT,
            status: zz[TT[mT + 3]],
            kind: dU[TT[mT + 4]]
          })
        }
        this.markers = UT, this.keys = new Set(UT.map((TT => {
          let {
            key: UT
          } = TT;
          return UT
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
        let UT = this.refs.get(TT);
        return UT || (UT = UT => {
          const mT = this.elements.get(TT);
          var WT, zT;
          mT && (null === (WT = this.onElement) || void 0 === WT || WT.call(this, mT, !1));
          UT ? (this.elements.set(TT, UT), null === (zT = this.onElement) || void 0 === zT || zT.call(this, UT, !0)) : (this.elements.delete(TT), this.refs.delete(TT))
        }, this.refs.set(TT, UT)), UT
      }
      onAfterRender(TT, UT, mT) {
        for (const WT of this.markers) {
          const zT = this.elements.get(WT.key);
          if (!zT) continue;
          const MT = (0, cp.c)(zT, TT, UT, WT.pos, 1.05, 24);
          MT && mT.add(MT, zT, .45, !0)
        }
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
    }
    const fp = {
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
    const qp = (0, WT.memo)((function(TT) {
        let {
          status: UT,
          kind: mT,
          bindRef: WT
        } = TT;
        const {
          t: zT
        } = (0, dz.z)(), MT = function(TT, UT) {
          var mT;
          if ("noFuel" === TT) {
            var WT, zT;
            const TT = null === (WT = IU[UT]) || void 0 === WT || null === (zT = WT.fuels) || void 0 === zT ? void 0 : zT.find((TT => Wm.includes(TT)));
            return null !== TT && void 0 !== TT ? TT : fp.noFuel
          }
          return void 0 !== (null === (mT = IU[UT]) || void 0 === mT ? void 0 : mT.cryoMade) ? "noOutlet" === TT ? "Fluid Pipe" : "noInput" === TT ? "Biomass" : fp[TT] : fp[TT]
        }(UT, mT);
        return (0, JM.jsxs)("div", {
          className: ez()("Baf2StallMarker", UT),
          ref: WT,
          hidden: !0,
          children: [MT && (0, JM.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, JM.jsx)(tz.b, {
              itemName: MT,
              amount: 0
            })
          }), (0, JM.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === UT ? "?" : "!"
          }), (0, JM.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: zT(`buildAFactory2Game:stallTag_${UT}`)
          })]
        })
      })),
      ip = (0, WT.memo)((function(TT) {
        let {
          controller: UT
        } = TT;
        const [mT, zT] = (0, WT.useState)((() => UT.get()));
        return (0, WT.useEffect)((() => (zT(UT.get()), UT.subscribe((() => {
          zT(UT.get())
        })))), [UT]), (0, JM.jsx)("div", {
          className: "Baf2StallMarkers",
          children: mT.map((TT => (0, JM.jsx)(qp, {
            status: TT.status,
            kind: TT.kind,
            bindRef: UT.bind(TT.key)
          }, TT.key)))
        })
      })),
      bp = Zm.h + 150;
    class Op {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(TT, UT) {
        const mT = UT - TT;
        null === this.offset || mT < this.offset ? this.offset = mT : this.offset = Math.min(mT, this.offset + .02 * (UT - this.sampledAt)), this.sampledAt = UT
      }
      toLocal(TT) {
        var UT;
        return TT + (null !== (UT = this.offset) && void 0 !== UT ? UT : 0) + bp
      }
    }
    var ep = mT(38633);
    const Yp = 15 * Math.PI / 180,
      Jp = Math.SQRT2,
      xp = [4, 2];

    function dp(TT, UT) {
      const mT = [1 / 0, 1 / 0, 1 / 0],
        WT = [-1 / 0, -1 / 0, -1 / 0];
      for (const HT of TT)
        for (let TT = 0; TT < 3; TT++) mT[TT] = Math.min(mT[TT], HT[TT]), WT[TT] = Math.max(WT[TT], HT[TT]);
      const zT = (mT[0] + WT[0]) / 2,
        MT = (mT[1] + WT[1]) / 2,
        gT = (mT[2] + WT[2]) / 2;
      let nT = 0;
      for (const HT of TT) nT = Math.max(nT, Math.hypot(HT[0] - zT, HT[1] - MT, HT[2] - gT));
      return {
        x: zT,
        y: MT,
        z: gT,
        r: nT + UT
      }
    }

    function wp(TT, UT, mT) {
      const WT = UT.x - TT.x,
        zT = UT.y - TT.y,
        MT = UT.z - TT.z,
        gT = Math.sqrt(WT * WT + zT * zT + MT * MT);
      if (gT <= UT.r + 8) return 1;
      const nT = UT.r / gT,
        HT = Math.sqrt(1 - nT * nT),
        kT = HT < -TT.cosHalf,
        jT = (WT * TT.dx + zT * TT.dy + MT * TT.dz) / gT;
      if (!kT && jT < TT.cosHalf * HT - TT.sinHalf * nT) return 0;
      const lT = mT * Jp * TT.frameMs * TT.pxPerBlock / (gT - UT.r);
      for (let LT = 0; LT < xp.length; LT++)
        if (lT * xp[LT] <= 1) return xp[LT];
      return 1
    }

    function tp(TT, UT) {
      return {
        name: TT,
        at: UT,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const ap = [0, 0, 0];

    function yp(TT, UT, mT) {
      let [, WT, zT, MT, gT, nT] = UT;
      const HT = Zm.e * (null !== gT && void 0 !== gT ? gT : 1),
        kT = [];
      for (let pT = 0; pT < WT.length; pT += 3) kT.push([WT[pT] + .5, WT[pT + 1] + .65, WT[pT + 2] + .5]);
      const jT = [];
      for (let pT = 0; pT < kT.length - 1; pT++) {
        const [TT, UT] = [kT[pT], kT[pT + 1]];
        jT.push([(TT[0] + UT[0]) / 2, (TT[1] + UT[1]) / 2, (TT[2] + UT[2]) / 2])
      }
      const lT = kT.slice(1, -1),
        LT = new Uint8Array(lT.length);
      for (const pT of null !== nT && void 0 !== nT ? nT : []) LT[pT >> 1] |= 1 & pT ? 2 : 1;
      return {
        island: TT,
        length: lT.length,
        loop: MT,
        cellsPerMs: HT,
        edges: jT,
        fp: lT,
        bounds: dp([...jT, ...lT], .3),
        changed: !0,
        culled: !1,
        hide: LT,
        items: zT.map((TT => {
          let [UT, WT] = TT;
          return tp(UT, (0, Zm.y)(UT, WT, mT, HT).at)
        }))
      }
    }

    function Xp(TT, UT) {
      const {
        items: mT
      } = TT;
      if (0 === mT.length) return;
      const WT = TT.length / TT.cellsPerMs,
        zT = Math.floor((UT - mT[0].at) / WT) - 1;
      if (zT > 0)
        for (const MT of mT) MT.at += zT * WT
    }

    function Ip(TT, UT) {
      const mT = Math.min(Math.floor(UT), TT.length - 1),
        WT = TT.hide[mT];
      return 0 !== WT && 0 !== (WT & (UT - mT < .5 ? 1 : 2))
    }

    function Qp(TT, UT) {
      const mT = Math.min(Math.floor(UT), TT.length - 1),
        WT = UT - mT,
        zT = WT < .5,
        MT = zT ? TT.edges[mT] : TT.fp[mT],
        gT = zT ? TT.fp[mT] : TT.edges[mT + 1],
        nT = zT ? 2 * WT : 2 * WT - 1;
      ap[0] = MT[0] + (gT[0] - MT[0]) * nT, ap[1] = MT[1] + (gT[1] - MT[1]) * nT, ap[2] = MT[2] + (gT[2] - MT[2]) * nT
    }
    const sp = Math.PI / 4;
    class Fp {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Op, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.Qq = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(TT) {
        const UT = performance.now();
        this.clock.sample(TT.baf2BeltLinesAt, UT), this.queue(TT.baf2BeltLinesAt, TT, 0, null, null, 0), this.applyDue(UT)
      }
      onMoves(TT) {
        const UT = performance.now(),
          mT = TT.baf2BeltMovesAt;
        this.clock.sample(mT, UT);
        for (const [WT, zT, MT, gT] of TT.baf2BeltMoveList) null === zT ? this.queue(mT - MT, null, WT, null, null, null !== gT && void 0 !== gT ? gT : 0) : this.queue(mT - MT, null, WT, zT, null !== gT && void 0 !== gT ? gT : null, 0);
        this.applyDue(UT)
      }
      start(TT) {
        this.pool = new ep.c(TT, {
          scale: .3,
          yaw: sp
        }, 64), this.Qq(), window.addEventListener("resize", this.Qq)
      }
      onAfterRender(TT) {
        const {
          pool: UT
        } = this;
        if (!UT) return;
        const mT = performance.now(),
          WT = mT - this.lastRenderAt;
        this.lastRenderAt = mT, WT < 100 && (this.frameMs += .1 * (WT - this.frameMs));
        const zT = mT + this.frameMs;
        this.applyDue(zT);
        const MT = TT.cameraPosition,
          gT = UT.follow(MT);
        this.setView(TT, MT);
        const nT = this.frame++;
        for (let HT = 0; HT < this.shown.length; HT++) {
          const TT = this.shown[HT],
            mT = wp(this.view, TT.bounds, TT.cellsPerMs),
            WT = TT.culled && 0 !== mT;
          if (TT.culled = 0 === mT, !gT && !TT.changed && !WT && (0 === mT || (nT + HT) % mT !== 0)) continue;
          TT.changed = !1, TT.loop && (Xp(TT, zT), (0, Zm.u)(TT.items, TT.length, zT, TT.cellsPerMs));
          let MT = TT.length;
          for (let nT = 0; nT < TT.items.length; nT++) {
            const mT = TT.items[nT],
              WT = (0, Zm.z)(mT.at, MT, zT, TT.cellsPerMs);
            if (MT = WT - Zm.m, Ip(TT, WT)) {
              null === mT.kind || mT.hidden || (mT.kind.hide(mT.slot), mT.hidden = !0);
              continue
            }
            let HT = mT.kind;
            if (null === HT) {
              if (HT = UT.kindOf(mT.name), null === HT) continue;
              mT.kind = HT, mT.slot = HT.take(), mT.hidden = !0, mT.drawn = NaN
            } else if (WT === mT.drawn && !mT.hidden && !gT) continue;
            Qp(TT, WT), HT.write(mT.slot, ap[0], ap[1], ap[2]), mT.hidden = !1, mT.drawn = WT
          }
        }
        UT.commit()
      }
      dispose() {
        var TT;
        window.removeEventListener("resize", this.Qq), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (TT = this.pool) || void 0 === TT || TT.dispose(), this.pool = null
      }
      setView(TT, UT) {
        const {
          cameraDir: mT,
          lastDir: WT
        } = this, zT = TT.cameraDirection;
        for (let jT = 0; jT < 3; jT++) WT[jT] = mT[jT], mT[jT] = zT[jT];
        const MT = mT[0] * WT[0] + mT[1] * WT[1] + mT[2] * WT[2],
          gT = Number.isNaN(MT) ? 0 : Math.acos(Math.min(1, Math.max(-1, MT))),
          {
            width: nT,
            height: HT
          } = this,
          kT = TT.tanHalfFovX;
        ! function(TT, UT, mT, WT, zT, MT, gT) {
          let nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          TT.x = UT[0], TT.y = UT[1], TT.z = UT[2], TT.dx = mT[0], TT.dy = mT[1], TT.dz = mT[2];
          const HT = Math.min(Math.PI, Math.atan(Math.sqrt(WT * WT + zT * zT)) + Yp + nT);
          TT.cosHalf = Math.cos(HT), TT.sinHalf = Math.sin(HT), TT.pxPerBlock = MT / (2 * zT), TT.frameMs = gT
        }(this.view, UT, mT, kT, kT * HT / nT, HT * window.devicePixelRatio, this.frameMs, gT)
      }
      queue(TT, UT, mT, WT, zT, MT) {
        const gT = Math.max(this.clock.toLocal(TT), this.lastPendingAt);
        this.lastPendingAt = gT, this.pending.push({
          at: gT,
          lines: UT,
          line: mT,
          name: WT,
          pos: zT,
          idx: MT
        })
      }
      applyDue(TT) {
        const {
          pending: UT
        } = this;
        for (; this.pendingHead < UT.length && UT[this.pendingHead].at <= TT;) {
          const TT = UT[this.pendingHead++];
          if (TT.lines) this.applyLines(TT.lines, TT.at), TT.lines = null;
          else {
            const UT = this.lines.get(TT.line);
            UT && this.applyMove(UT, TT, TT.at)
          }
        }
        this.pendingHead === UT.length ? (UT.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > UT.length && (UT.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(TT, UT) {
        this.clearIsland(TT.baf2BeltIsland);
        for (const mT of TT.baf2BeltLineList) this.lines.set(mT[0], yp(TT.baf2BeltIsland, mT, UT));
        this.shown = [...this.lines.values()]
      }
      applyMove(TT, UT, mT) {
        let {
          name: WT,
          pos: zT,
          idx: MT
        } = UT;
        TT.changed = !0, TT.loop && (Xp(TT, mT), (0, Zm.u)(TT.items, TT.length, mT, TT.cellsPerMs)), null !== WT && null !== zT ? (0, Zm.v)(TT.items, TT.length, tp(WT, mT), zT, mT, TT.cellsPerMs) : null !== WT ? TT.items.push(tp(WT, mT)) : TT.items.length > MT && this.release((0, Zm.D)(TT.items, TT.length, mT, TT.cellsPerMs, MT))
      }
      clearIsland(TT) {
        for (const [UT, mT] of this.lines)
          if (mT.island === TT) {
            for (const TT of mT.items) this.release(TT);
            this.lines.delete(UT)
          }
      }
      release(TT) {
        null !== TT.kind && (TT.kind.release(TT.slot), TT.kind = null, TT.slot = -1, TT.hidden = !0, TT.drawn = NaN)
      }
    }
    var Pp = mT(36687),
      Vp = mT(38649);

    function Cp(TT) {
      let {
        depth: UT,
        store: mT,
        t: zT
      } = TT;
      const MT = function(TT) {
        const [UT, mT] = (0, WT.useState)(TT.lastPlayerY());
        return (0, nj.g)(Fz, mT), (0, WT.useEffect)((() => {
          mT(TT.lastPlayerY())
        }), [TT]), UT
      }(mT);
      if (null === MT) return null;
      const [gT, nT] = UT, HT = MT > gT ? gT : null !== nT && MT < nT ? nT : null, kT = {
        y: iM(MT),
        target: null === HT ? "" : iM(HT)
      };
      return (0, JM.jsx)("span", {
        className: ez()("Baf2QuestDepth", {
          Reached: null === HT
        }),
        children: zT(`${lj}${null===HT?"questDepthReached":"questDepth"}`, kT)
      })
    }

    function rp(TT) {
      let {
        also: UT,
        view: mT,
        t: WT
      } = TT;
      return (0, JM.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, JM.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, JM.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, JM.jsx)("strong", {
            children: WT(`${lj}questAlsoDownHere`)
          }), (0, JM.jsx)("span", {
            className: "Baf2QuestChips",
            children: UT.map((TT => {
              let [UT, zT, MT, gT] = TT;
              return (0, JM.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": WT(`${lj}questAlsoItem`, {
                  item: pj(WT, mT.itemNames[UT], UT),
                  have: String(zT),
                  need: String(MT)
                }),
                children: [(0, JM.jsx)(cj, {
                  item: UT
                }), (0, JM.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${zT}/${MT}`
                }), null !== gT && (0, JM.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: WT(`${lj}questAlsoDepth`, {
                    y: iM(gT)
                  })
                })]
              }, UT)
            }))
          })]
        })]
      })
    }
    var Kp = mT(3511);

    function Sp(TT) {
      let {
        expanded: UT,
        inventoryOpen: mT,
        children: zT
      } = TT;
      const MT = (0, WT.useRef)(null);
      return (0, WT.useEffect)((() => {
        const TT = MT.current,
          UT = null === TT || void 0 === TT ? void 0 : TT.closest(".RightElements"),
          WT = null === TT || void 0 === TT ? void 0 : TT.firstElementChild;
        if (!TT || !UT || !WT) return;
        return (0, Vp.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [UT, WT], (() => {
          const zT = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === zT.length) return;
          const MT = Math.max(...zT.map((TT => TT.getBoundingClientRect().bottom))),
            gT = UT.getBoundingClientRect(),
            nT = mT ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (nT) {
            const UT = parseFloat(getComputedStyle(WT).marginLeft) + parseFloat(getComputedStyle(WT).marginRight),
              mT = gT.right - nT.getBoundingClientRect().right - 8 - UT;
            TT.style.setProperty("--baf2-quest-room", `${mT}px`), TT.classList.toggle("NoRoom", mT < 150)
          } else TT.style.removeProperty("--baf2-quest-room"), TT.classList.remove("NoRoom");
          const HT = MT - gT.top + 8,
            kT = function(TT, UT, mT) {
              const WT = UT.getBoundingClientRect(),
                zT = TT.getBoundingClientRect(),
                MT = (0, Kp.e)(zT.left, zT.right, WT.top + mT);
              if (null !== MT && MT < WT.bottom) return MT - WT.top;
              return WT.height - (parseFloat(getComputedStyle(UT).paddingBottom) || 0)
            }(TT, UT, HT) - 8,
            jT = window.innerHeight / 2 - gT.top,
            {
              top: lT,
              maxHeight: LT
            } = function(TT, UT, mT, WT, zT) {
              const MT = Math.min(mT, Math.max(0, UT - TT)),
                gT = zT ? TT : Math.max(TT, Math.min(WT - MT / 2, UT - MT));
              return {
                top: gT,
                maxHeight: Math.max(0, UT - gT)
              }
            }(HT, kT, function(TT) {
              const UT = TT.firstElementChild,
                mT = UT ? UT.scrollHeight - UT.clientHeight : 0;
              return TT.getBoundingClientRect().height + Math.max(0, mT)
            }(WT), jT, YM());
          TT.style.top = `${lT}px`, TT.style.maxHeight = `${LT}px`
        }))
      }), [mT]), (0, JM.jsx)("div", {
        ref: MT,
        className: ez()("Baf2QuestHud", {
          Expanded: UT
        }),
        children: zT
      })
    }

    function Gp(TT) {
      let {
        amount: UT,
        t: mT
      } = TT;
      return (0, JM.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, JM.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, JM.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: mT(`${lj}questStepsDone`, {
            amount: String(UT)
          })
        })]
      })
    }

    function Np(TT) {
      let {
        pulse: UT
      } = TT;
      return 0 === UT ? null : (0, JM.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, UT)
    }

    function Ep(TT) {
      var UT;
      let {
        store: mT
      } = TT;
      const zT = (0, nj.j)(sz, mT.get()),
        [MT, gT] = (0, WT.useState)(!1),
        {
          t: nT
        } = (0, dz.z)(),
        HT = (0, OM.g)(eM),
        {
          openInGameMenuName: kT,
          openEverythingMenuName: jT
        } = (0, iz.h)(["openInGameMenuName", "openEverythingMenuName"]),
        lT = "inventory" === kT && null === jT,
        LT = null !== kT && !lT || null !== jT;
      if (! function(TT) {
          return null !== TT.name || null !== TT.side
        }(zT) || LT || "off" === zT.tutorial) return null;
      const pT = Kz(zT.rows),
        BT = pT.filter((TT => TT.done)).length,
        ZT = function(TT, UT) {
          const mT = Nz(TT);
          let WT = 0;
          return TT.filter(((TT, zT) => !!TT.justFinished || !(TT.done || zT < mT || WT > UT) && (WT++, !0)))
        }(zT.rows, HT ? 0 : 2),
        cT = HT ? ZT : function(TT, UT) {
          const mT = UT.filter((TT => !TT.justFinished));
          if (mT.length < 2) return [...UT];
          const WT = TT.indexOf(mT[0]),
            zT = TT.indexOf(mT[mT.length - 1]),
            MT = new Set(Kz(TT));
          return TT.filter(((TT, mT) => UT.includes(TT) || TT.done && MT.has(TT) && mT > WT && mT < zT))
        }(zT.rows, ZT),
        vT = MT ? zT.rows : cT,
        fT = MT || HT ? [] : function(TT, UT) {
          const mT = new Array(UT.length + 1).fill(0),
            WT = new Set(Kz(TT));
          let zT = 0;
          for (const MT of TT) zT < UT.length && MT === UT[zT] ? zT++ : MT.done && WT.has(MT) && mT[zT]++;
          return mT
        }(zT.rows, cT),
        qT = MT || cT.length < zT.rows.length || null !== zT.reward,
        iT = rz(zT),
        bT = iT ? nT(`${lj}questLineComplete`) : zT.tier ? qj(nT, zT.tier) : nT(`${lj}currentQuest`),
        OT = function(TT) {
          var UT, mT;
          if (rz(TT)) return null;
          const WT = null === (UT = TT.chapters) || void 0 === UT ? void 0 : UT.find((UT => {
            let [mT] = UT;
            return mT === TT.tier
          }));
          if (!WT) return null;
          const zT = WT[1].filter((TT => !TT[4]));
          if (0 === zT.length) return null;
          const MT = null === (mT = TT.name) || void 0 === mT ? void 0 : mT[0],
            gT = TT => zT.findIndex((UT => UT[0] === MT && (!TT || !UT[3]))),
            nT = gT(!0),
            HT = nT >= 0 ? nT : gT(!1);
          if (HT >= 0) return [HT + 1, zT.length];
          const kT = zT.filter((TT => TT[3])).length;
          return [Math.min(kT + 1, zT.length), zT.length]
        }(zT);
      return (0, JM.jsx)(Pp.d, {
        placement: "topRight",
        children: (0, JM.jsx)(Sp, {
          expanded: MT,
          inventoryOpen: lT,
          children: (0, JM.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: Lj,
            children: [null !== zT.name && (0, JM.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, JM.jsx)(Np, {
                pulse: zT.pulse
              }), (0, JM.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, JM.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [bT, OT && (0, JM.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": nT(`${lj}questPlaceLabel`, {
                      n: String(OT[0]),
                      total: String(OT[1])
                    }),
                    children: nT(`${lj}questPlace`, {
                      n: String(OT[0]),
                      total: String(OT[1])
                    })
                  }), zT.tier && zT.core && !iT && (0, JM.jsx)(ij, {
                    core: zT.core,
                    t: nT
                  })]
                })
              }), (0, JM.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: nT(`${lj}${zT.name[0]}`, Bj(zT.name[1]))
              }), (pT.length > 1 || qT) && (0, JM.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [pT.length > 1 && (0, JM.jsx)(bj, {
                  rows: pT,
                  t: nT
                }), qT && (0, JM.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": MT,
                  onClick: () => {
                    gT(!MT)
                  },
                  children: [(0, JM.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: nT(`${lj}questStepsToggle`, {
                      done: String(BT),
                      total: String(pT.length)
                    })
                  }), (0, JM.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: MT ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, JM.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [vT.map(((TT, UT) => {
                  var MT;
                  const gT = TT.current && zT.depth;
                  return (0, JM.jsxs)(WT.Fragment, {
                    children: [(null !== (MT = fT[UT]) && void 0 !== MT ? MT : 0) > 0 && (0, JM.jsx)(Gp, {
                      amount: fT[UT],
                      t: nT
                    }), (0, JM.jsx)(Oj, {
                      row: TT,
                      view: zT,
                      t: nT,
                      extra: gT && (0, JM.jsx)(Cp, {
                        depth: gT,
                        store: mT,
                        t: nT
                      })
                    })]
                  }, TT.id)
                })), (null !== (UT = fT[vT.length]) && void 0 !== UT ? UT : 0) > 0 && (0, JM.jsx)(Gp, {
                  amount: fT[vT.length],
                  t: nT
                }), zT.also.length > 0 && (0, JM.jsx)(rp, {
                  also: zT.also,
                  view: zT,
                  t: nT
                })]
              }), MT && zT.reward && (0, JM.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [nT(`${lj}questReward`), (0, JM.jsx)(cj, {
                  item: zT.reward
                }), pj(nT, zT.itemNames[zT.reward], zT.reward)]
              })]
            }), zT.side && (0, JM.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [uz(zT, Date.now()) && (0, JM.jsx)(Np, {
                pulse: zT.sideCameUpAt
              }), (0, JM.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: nT(`${lj}questSide`)
              }), (0, JM.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: nT(`${lj}${zT.side.name[0]}`, Bj(zT.side.name[1]))
              }), (0, JM.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, JM.jsx)(Oj, {
                  row: zT.side.row,
                  view: zT,
                  t: nT
                })
              })]
            })]
          })
        })
      })
    }
    const hp = "baf2ToastView";
    class Dp {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = TT, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: TT,
          holdMs: UT
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const TT = this.dropCovered();
          TT && this.show(TT.message, TT.holdMs)
        }), 250));
        const mT = this.dropCovered();
        null !== mT && (mT.holdMs > 0 || "baf2ToastCelebrate" === mT.message.baf2ToastStyle) && "baf2ToastCelebrate" !== TT.baf2ToastStyle && this.show(mT.message, mT.holdMs);
        const WT = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== TT.baf2ToastStyle && WT > 0) return this.pending = {
          message: TT,
          holdMs: UT
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const TT = this.pending;
          this.pending = null, TT && this.present(TT.message, TT.holdMs)
        }), WT));
        this.present(TT, UT)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(TT, UT) {
        this.clearTimers(), this.pending = null;
        const mT = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: TT.baf2ToastText,
          style: TT.baf2ToastStyle,
          swapped: mT,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === TT.baf2ToastStyle ? 1500 : UT), this.EZ();
        const WT = Math.min(8e3, Math.max(1e3, TT.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), WT)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.EZ(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.EZ()
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
      EZ() {
        Iz.j.EZ(hp, this.view, !0)
      }
    }
    var op = mT(85);
    const Ap = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function Rp(TT) {
      let {
        store: UT
      } = TT;
      const mT = (0, nj.j)(hp, UT.get()),
        {
          openInGameMenuName: WT,
          openEverythingMenuName: zT
        } = (0, iz.h)(["openInGameMenuName", "openEverythingMenuName"]),
        MT = mT && (0, JM.jsxs)("div", {
          className: ez()("Baf2Toast", Ap[mT.style], {
            Swapped: mT.swapped,
            Leaving: mT.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === mT.style && (0, JM.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, JM.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, JM.jsx)(az.e, {
              text: mT.text
            })
          })]
        }, mT.id);
      return null !== WT && null === zT ? (0, op.createPortal)((0, JM.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: MT
      }), document.body) : (0, JM.jsx)(Pp.d, {
        children: MT
      })
    }
    const TB = "baf2AreaView";
    class UB {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.fn = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.fn = null
      }
      arrive(TT, UT) {
        UT && function(TT) {
          return "home" === TT.baf2AreaPlace && void 0 !== TT.baf2AreaNameText
        }(TT) ? this.fn = TT : this.show(TT)
      }
      release() {
        const TT = this.fn;
        null !== TT && this.show(TT)
      }
      show(TT) {
        this.clearTimer(), this.fn = null;
        const UT = void 0 === TT.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: TT,
          ms: UT
        }, this.EZ(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.EZ()
        }), UT)
      }
      dispose() {
        this.clearTimer(), this.fn = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      EZ() {
        Iz.j.EZ(TB, this.view, !0)
      }
    }

    function mB(TT) {
      var UT;
      let {
        store: mT
      } = TT;
      const {
        t: WT
      } = (0, dz.z)(), zT = (0, nj.j)(TB, mT.get());
      if (!zT) return null;
      const {
        area: MT
      } = zT, gT = MT.baf2AreaResetMinutes;
      return (0, JM.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": MT.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${zT.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, JM.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), MT.baf2AreaHeading && (0, JM.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: WT(MT.baf2AreaHeading)
        }), (0, JM.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (UT = MT.baf2AreaNameText) && void 0 !== UT ? UT : WT(MT.baf2AreaName)
        }), MT.baf2AreaNote && (0, JM.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: WT(MT.baf2AreaNote)
        }), void 0 !== gT && (0, JM.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: WT("buildAFactory2Game:areaWildsReset", {
            time: bM(WT, 60 * gT)
          })
        })]
      }, zT.id)
    }
    const WB = "baf2GearGauge";
    class zB {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      LO(TT) {
        var UT;
        if (this.clearLinger(), null === TT.gearPowerKind) return void this.set(null);
        const mT = "jetpack" === TT.gearPowerKind && (WT = TT.gearChargeState, zT = TT.gearCharge, "flying" === WT || "charging" === WT || "outOfCharge" === WT || "ceiling" === WT || "offPlot" === WT || "noPower" === WT && zT <= 0);
        var WT, zT;
        const MT = !0 === (null === (UT = this.view) || void 0 === UT ? void 0 : UT.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          gT = mT || "jetpack" === TT.gearPowerKind && MT;
        this.set({
          gauge: TT,
          jetShown: gT
        }), gT && !mT && (this.lingerTimer = setTimeout((() => {
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
        this.view = TT, Iz.j.EZ(WB, TT, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const MB = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function gB(TT) {
      let {
        store: UT
      } = TT;
      const mT = (0, nj.j)(WB, UT.get());
      return mT ? "jetpack" === mT.gauge.gearPowerKind ? (0, JM.jsx)(nB, {
        view: mT
      }) : (0, JM.jsx)(HB, {
        gauge: mT.gauge
      }) : null
    }

    function nB(TT) {
      let {
        view: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)(), {
        gauge: WT
      } = UT, zT = WT.gearChargeMax > 0 ? Math.max(0, Math.min(1, WT.gearCharge / WT.gearChargeMax)) : 0, MT = MB[WT.gearChargeState], gT = MT ? mT(MT) : null;
      return (0, JM.jsxs)("div", {
        className: ez()("Baf2JetArc", {
          Shown: UT.jetShown,
          Low: zT < .2,
          Warm: zT >= .2 && zT < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - zT)
        },
        "aria-hidden": !UT.jetShown,
        children: [(0, JM.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, JM.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: kB,
            pathLength: 100
          }), (0, JM.jsx)("path", {
            className: "Baf2JetArcFill",
            d: kB,
            pathLength: 100
          })]
        }), (0, JM.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * zT), "%"]
        }), gT && (0, JM.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: gT
        })]
      })
    }

    function HB(TT) {
      let {
        gauge: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)(), WT = function(TT, UT) {
        switch (UT.gearPowerKind) {
          case "skyPack":
            return TT("buildAFactory2Game:gearSkyPack", {
              charge: UT.gearCharge,
              max: UT.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return TT("buildAFactory2Game:gearIslandDraw", {
              power: oT(UT.gearIslandPower),
              cost: oT(UT.gearCostPerUse)
            });
          case "barrier":
            return TT("buildAFactory2Game:gearBarrier", {
              shield: Math.round(UT.gearCharge),
              max: UT.gearChargeMax,
              power: oT(UT.gearIslandPower)
            });
          default:
            return null
        }
      }(mT, UT);
      return null === WT ? null : (0, JM.jsx)(Pp.d, {
        children: (0, JM.jsx)("div", {
          className: ez()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === UT.gearChargeState || "outOfCharge" === UT.gearChargeState
          }),
          role: "status",
          children: WT
        })
      })
    }
    const kB = (() => {
      const TT = TT => {
        const UT = TT * Math.PI / 180;
        return `${(40*Math.cos(UT)).toFixed(2)} ${(40*Math.sin(UT)).toFixed(2)}`
      };
      return `M ${TT(160)} A 40 40 0 1 1 ${TT(380)}`
    })();
    class jB {
      constructor(TT) {
        this.onElement = TT, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      LO(TT) {
        let UT = TT.baf2LabelsReset || TT.baf2LabelsIsland !== this.island;
        UT && (this.labels.clear(), this.island = TT.baf2LabelsIsland);
        for (const [mT, WT, zT, MT, gT] of TT.baf2LabelsList) {
          const TT = `${mT},${WT},${zT}`,
            nT = this.labels.get(TT);
          null === MT ? UT = this.labels.delete(TT) || UT : nT && nT.item === MT && (nT.count === gT || nT.count >= 0 && gT >= 0) ? nT.count !== gT && (nT.count = gT, this.writeCount(TT, gT)) : (this.labels.set(TT, {
            key: TT,
            pos: [mT, WT, zT],
            item: MT,
            count: gT
          }), this.writeCount(TT, gT), UT = !0)
        }
        if (this.changes++, UT) {
          this.snapshot = [...this.labels.values()];
          for (const TT of this.listeners) TT()
        }
      }
      bindCount(TT) {
        const UT = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${TT}`;
        let mT = this.countRefs.get(UT);
        return mT || (mT = mT => {
          var WT, zT;
          mT ? (this.countElements.set(UT, mT), this.writeCount(TT, null !== (WT = null === (zT = this.labels.get(TT)) || void 0 === zT ? void 0 : zT.count) && void 0 !== WT ? WT : -1)) : (this.countElements.delete(UT), this.countRefs.delete(UT))
        }, this.countRefs.set(UT, mT)), mT
      }
      setCountWords(TT) {
        this.countWords = TT;
        for (const [UT, mT] of this.labels) this.writePart(`words|${UT}`, TT(mT.count), mT.count)
      }
      writeCount(TT, UT) {
        this.writePart(`bare|${TT}`, qM(UT), UT), this.countElements.has(`words|${TT}`) && this.writePart(`words|${TT}`, this.countWords(UT), UT)
      }
      writePart(TT, UT, mT) {
        const WT = this.countElements.get(TT);
        if (!WT || mT < 0) return;
        const zT = WT.firstChild;
        zT && 3 === zT.nodeType && !zT.nextSibling ? zT.nodeValue !== UT && (zT.nodeValue = UT) : WT.textContent !== UT && (WT.textContent = UT)
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
        let UT = this.refs.get(TT);
        return UT || (UT = UT => {
          const mT = this.elements.get(TT);
          var WT, zT;
          mT && (null === (WT = this.onElement) || void 0 === WT || WT.call(this, mT, !1));
          UT ? (this.elements.set(TT, UT), null === (zT = this.onElement) || void 0 === zT || zT.call(this, UT, !0)) : (this.elements.delete(TT), this.refs.delete(TT))
        }, this.refs.set(TT, UT)), UT
      }
      onAfterRender(TT, UT, mT, WT) {
        for (const zT of this.snapshot) {
          const MT = this.elements.get(zT.key);
          if (!MT) continue;
          if (WT(zT.key)) {
            (0, jp.h)(MT, !0);
            continue
          }
          const gT = (0, cp.c)(MT, TT, UT, zT.pos, 1.1, 24);
          gT && mT.add(gT, MT, 0, !1)
        }
      }
    }
    const lB = (0, WT.memo)((function(TT) {
        let {
          item: UT
        } = TT;
        return (0, JM.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, JM.jsx)(tz.b, {
            itemName: UT,
            amount: 0
          })
        })
      })),
      LB = (0, WT.memo)((function(TT) {
        let {
          label: UT,
          bindRef: mT,
          countRef: WT,
          wordsRef: zT
        } = TT;
        return (0, JM.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: mT,
          hidden: !0,
          children: [(0, JM.jsx)(lB, {
            item: UT.item
          }), UT.count >= 0 && (0, JM.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, JM.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: zT
            }), (0, JM.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: WT
            })]
          })]
        })
      })),
      pB = (0, WT.memo)((function(TT) {
        let {
          store: UT
        } = TT;
        const {
          t: mT
        } = (0, dz.z)(), [zT, MT] = (0, WT.useState)((() => UT.list()));
        return (0, WT.useEffect)((() => (MT(UT.list()), UT.subscribe((() => {
          MT(UT.list())
        })))), [UT]), (0, WT.useEffect)((() => {
          UT.setCountWords((TT => mT("buildAFactory2Game:labelSiloCount", {
            count: qM(TT)
          })))
        }), [UT, mT]), (0, JM.jsx)("div", {
          className: "Baf2IslandLabels",
          children: zT.map((TT => -2 === TT.count ? null : (0, JM.jsx)(LB, {
            label: TT,
            bindRef: UT.bind(TT.key),
            countRef: UT.bindCount(TT.key),
            wordsRef: UT.bindCount(TT.key, "words")
          }, TT.key)))
        })
      })),
      BB = {
        read: () => !0,
        write: () => {}
      };

    function ZB(TT) {
      return `${TT[0]},${TT[1]},${TT[2]}`
    }

    function cB(TT) {
      let [UT, mT, WT, zT, MT, gT, nT, HT, kT, jT, lT, LT] = TT;
      const pT = void 0 === lT || void 0 === LT ? function(TT) {
        return [Math.floor((TT - 1) / 2), 0]
      }(MT) : [lT, LT];
      return {
        kind: 0 === HT ? "reactor" : "battery",
        box: Km([UT, mT, WT], zT, MT, gT, nT, pT),
        formed: 1 === kT,
        level: jT
      }
    }
    class vB {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BB;
        this.guideSetting = TT, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = TT.read()
      }
      LO(TT) {
        var UT;
        const mT = new Map;
        for (const WT of TT.baf2RxPlanList) {
          const TT = cB(WT);
          mT.set(ZB(TT.box.ctrl), TT)
        }
        this.plans = mT, this.layouts = new Map((null !== (UT = TT.baf2RxLayouts) && void 0 !== UT ? UT : []).map((TT => {
          let [UT, mT, WT, zT] = TT;
          return [ZB([UT, mT, WT]), zT]
        }))), this.predicted.clear(), TT.baf2RxFormedAt && (this.formed = {
          ctrl: TT.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const WT of [...this.startersOff]) {
          const TT = mT.get(WT);
          TT && !TT.formed || this.startersOff.delete(WT)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((TT => this.planByKey(TT)))
      }
      planAt(TT) {
        return this.planByKey(ZB(TT))
      }
      predictSize(TT, UT) {
        this.predicted.set(ZB(TT), UT), this.changed()
      }
      unpredict(TT) {
        this.predicted.delete(ZB(TT)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(TT) {
        var UT;
        const mT = ZB(TT);
        return this.predicted.has(mT) ? null : null !== (UT = this.layouts.get(mT)) && void 0 !== UT ? UT : null
      }
      showsStarter(TT) {
        return !this.startersOff.has(ZB(TT))
      }
      setStarter(TT, UT) {
        const mT = ZB(TT);
        UT ? this.startersOff.delete(mT) : this.startersOff.add(mT), this.changed()
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
        const UT = this.plans.get(TT);
        if (!UT) return null;
        const mT = this.predicted.get(TT);
        return mT ? {
          ...UT,
          box: Gm(UT.box, UT.kind, mT[0], mT[1], mT[2])
        } : UT
      }
      changed() {
        this.version++;
        for (const TT of this.listeners) TT()
      }
    }
    var fB = mT(208);
    const qB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function iB(TT, UT, mT, WT) {
      const zT = TT.length / 3;
      for (let MT = 0; MT < qB.length / 3; MT++) TT.push(qB[3 * MT] * WT[0] / 2 + mT[0], qB[3 * MT + 1] * WT[1] / 2 + mT[1], qB[3 * MT + 2] * WT[2] / 2 + mT[2]);
      for (let MT = zT; MT < zT + 24; MT += 4) UT.push(MT, MT + 1, MT + 2, MT, MT + 2, MT + 3)
    }

    function bB(TT, UT, mT) {
      const WT = UT[0][0],
        zT = [],
        MT = [];
      for (const [gT, nT] of UT) iB(zT, MT, [gT[0] - WT[0], gT[1] - WT[1], gT[2] - WT[2]], nT);
      return TT.createGameMesh({
        positions: zT,
        indices: MT
      }, mT, WT)
    }

    function OB(TT, UT) {
      const mT = TT.w - 2,
        WT = TT.d - 2;
      return 1 === function(TT, UT, mT, WT) {
        const [zT, MT, gT] = TT;
        if (Number(zT <= 2) + Number(MT <= 2) + Number(gT <= 2) >= 2) return function(TT, UT, mT) {
          return (TT + UT + mT) % 2 === 0 ? 1 : 3
        }(UT, mT, WT);
        const [nT, HT] = zT >= MT && zT >= gT ? [mT, WT] : MT >= gT ? [UT, WT] : [UT, mT];
        return nT % 2 === 0 && HT % 2 === 0 ? 1 : 3
      }([mT, TT.h - 2, WT], UT % mT, Math.floor(UT / (mT * WT)), Math.floor(UT / mT) % WT) ? "rod" : "channel"
    }

    function eB(TT, UT, mT) {
      if ("reactor" !== TT.kind || TT.formed || !UT) return !1;
      const WT = hm(TT.box);
      for (let zT = 0; zT < WT; zT++) {
        const TT = mT(zT);
        if (null !== TT && am(TT)) return !1
      }
      return !0
    }

    function YB(TT, UT, mT, WT, zT) {
      var MT;
      let gT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const nT = UW(TT.box, UT),
        HT = MW(TT.kind, nT, mT);
      if ("wrong" === HT || "blocked" === HT) return "wrong";
      if (!zT) return null;
      if ("inside" === nT && "reactor" === TT.kind && "Air" === ym(mT)) {
        if (null !== gT) {
          var kT;
          const mT = ML[gL(gT, mW(TT.box, UT))];
          return mT && null !== (kT = wH(mT)) && void 0 !== kT ? kT : null
        }
        if (WT) return OB(TT.box, mW(TT.box, UT))
      }
      if ("missing" !== HT) return null;
      const jT = gW(TT.kind, nT);
      return null === jT ? null : null !== (MT = wH(jT)) && void 0 !== MT ? MT : null
    }
    const JB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function xB(TT, UT, mT) {
      const WT = mT => {
        const WT = UT(Rm(TT.box, mT));
        return null !== WT && function(TT, UT) {
          return "reactor" !== TT.kind || UT !== om(TT.box) && "inside" !== UW(TT.box, UT)
        }(TT, mT) && "ok" !== MW(TT.kind, UW(TT.box, mT), WT)
      };
      if (mT) {
        const MT = TW(TT.box, [Math.floor(mT[0]), Math.floor(mT[1]), Math.floor(mT[2])]);
        if (MT >= 0 && (WT(MT) || (zT = MT, "reactor" === TT.kind && "inside" === UW(TT.box, zT) && "Air" === UT(Rm(TT.box, zT))))) return MT
      }
      var zT;
      const MT = hm(TT.box);
      for (let gT = 0; gT < MT; gT++)
        if (WT(gT)) return gT;
      return -1
    }

    function dB(TT, UT) {
      return Math.floor(UT / (TT.w * TT.d))
    }

    function wB(TT, UT, mT) {
      return mT >= 0 && dB(TT, UT) > dB(TT, mT)
    }

    function tB(TT, UT) {
      return UT >= 0 && TT.h >= 3 && dB(TT, UT) === TT.h - 1
    }

    function aB(TT) {
      const UT = ym(TT);
      return UT === qm || "Collider" === UT || "Laser" === UT || UT.startsWith("_Collider ")
    }

    function yB(TT, UT, mT, WT) {
      if (WT(TT)) return null;
      if (!JB.every((UT => {
          let [WT, zT, MT] = UT;
          const gT = mT([TT[0] + WT, TT[1] + zT, TT[2] + MT]);
          return null !== gT && !Vm("reactor", gT) && "reactor" !== Xm(gT)
        }))) return null;
      const zT = um("reactor").min,
        MT = Km([TT[0], TT[1], TT[2]], function(TT, UT) {
          const mT = UT[0] - (TT[0] + .5),
            WT = UT[2] - (TT[2] + .5);
          return Math.abs(mT) >= Math.abs(WT) ? mT >= 0 ? 2 : 4 : WT >= 0 ? 1 : 3
        }(TT, UT), zT, zT, zT, Sm("reactor", zT)),
        gT = om(MT);
      let nT = !0;
      for (let HT = 0; HT < hm(MT) && nT; HT++) {
        if (HT === gT) continue;
        const TT = Rm(MT, HT),
          UT = mT(TT);
        nT = !WT(TT) && (null === UT || !aB(UT))
      }
      return {
        box: MT,
        fits: nT
      }
    }
    const XB = dH,
      IB = "baf2Goal",
      QB = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      sB = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      FB = .4;

    function PB(TT, UT) {
      let [mT, WT, zT] = TT;
      const MT = sH([mT - .02, WT - .02, zT - .02], [mT + 1.02, WT + 1.02, zT + 1.02], .07);
      return UT && (MT.push([
        [mT + .5, WT + 1 + .7, zT + .5],
        [.08, 1.4, .08]
      ]), MT.push([
        [mT + .5, WT + 1 + 1.4 + .2, zT + .5],
        [FB, FB, FB]
      ])), MT
    }

    function VB(TT, UT) {
      let [mT, WT, zT] = UT;
      return TT.isBlockInLoadedChunk(mT, WT, zT) ? TT.blockIdToBlockName(TT.getBlockId(mT, WT, zT)) : null
    }
    let uB = null;
    const CB = new Set;
    let rB = null;

    function KB(TT) {
      uB = TT;
      for (const UT of CB) UT(TT)
    }
    class SB {
      constructor(TT) {
        var UT;
        this.plans = TT, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (UT = TT => {
          var UT, mT;
          this.setGoal(null !== (UT = null === TT || void 0 === TT ? void 0 : TT.goal) && void 0 !== UT ? UT : null, null !== (mT = null === TT || void 0 === TT ? void 0 : TT.startsBattery) && void 0 !== mT && mT)
        }, rB ??= [Iz.j.subscribe("setDirectionArrow", (TT => {
          let {
            id: UT,
            position: mT,
            text: WT
          } = TT;
          UT === IB && KB({
            goal: [Math.floor(mT[0]), Math.floor(mT[1]), Math.floor(mT[2])],
            startsBattery: JSON.stringify(null !== WT && void 0 !== WT ? WT : null).includes("arrowStartBattery")
          })
        })), Iz.j.subscribe("clearDirectionArrow", (TT => {
          let {
            id: UT
          } = TT;
          null !== UT && UT !== IB || KB(null)
        }))], CB.add(UT), UT(uB), () => {
          CB.delete(UT)
        })
      }
      onAfterRender(TT, UT) {
        const mT = performance.now();
        if (this.cues.length > 0) {
          const UT = .55 + .45 * Math.sin(mT / 1100 * Math.PI * 2);
          for (const mT of this.cues) TT.setGameMesh(mT, {
            visibility: UT
          })
        }
        if (mT - this.lastCheckMs < 150) return;
        this.lastCheckMs = mT;
        const WT = this.plans.all().filter((TT => {
            const [mT, WT, zT] = TT.box.ctrl;
            return (!TT.formed || null !== this.plans.layoutOf(TT.box.ctrl)) && (mT - UT[0]) ** 2 + (WT - UT[1]) ** 2 + (zT - UT[2]) ** 2 <= 2304
          })),
          zT = function(TT, UT) {
            const mT = fB.f.cB,
              WT = new Map;
            for (const MT of UT) {
              const UT = Rm(MT.box, 0),
                gT = Rm(MT.box, hm(MT.box) - 1),
                nT = [Math.min(UT[0], gT[0]), Math.min(UT[1], gT[1]), Math.min(UT[2], gT[2])].map((TT => Math.floor(TT / mT))),
                HT = [Math.max(UT[0], gT[0]), Math.max(UT[1], gT[1]), Math.max(UT[2], gT[2])].map((TT => Math.floor(TT / mT)));
              for (let mT = nT[0]; mT <= HT[0]; mT++)
                for (let UT = nT[1]; UT <= HT[1]; UT++)
                  for (let MT = nT[2]; MT <= HT[2]; MT++) {
                    var zT;
                    WT.set(`${mT},${UT},${MT}`, null !== (zT = TT.getChunkVersion(mT, UT, MT)) && void 0 !== zT ? zT : -1)
                  }
            }
            return WT
          }(TT, WT);
        this.plans.getVersion() === this.storeVersion && (function(TT, UT) {
          if (TT.size !== UT.size) return !1;
          for (const [mT, WT] of TT)
            if (UT.get(mT) !== WT) return !1;
          return !0
        }(zT, this.chunkVersions) || mT - this.lastRescanMs < 600) || (this.lastRescanMs = mT, this.storeVersion = this.plans.getVersion(), this.chunkVersions = zT, this.redraw(TT, WT))
      }
      dispose(TT) {
        this.unwatch(), uB = null, this.clearMeshes(TT), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(TT, UT) {
        var mT;
        (null === TT || void 0 === TT ? void 0 : TT.join()) === (null === (mT = this.goal) || void 0 === mT ? void 0 : mT.join()) && UT === this.startsBattery || (this.goal = TT, this.startsBattery = UT, this.storeVersion = -1)
      }
      redraw(TT, UT) {
        const mT = UT => VB(TT, UT),
          WT = new Map,
          zT = [],
          MT = this.plans.guideOn();
        for (const kT of UT) {
          const TT = MT && eB(kT, this.plans.showsStarter(kT.box.ctrl), (TT => mT(Rm(kT.box, TT)))),
            UT = "reactor" === kT.kind ? this.plans.layoutOf(kT.box.ctrl) : null,
            gT = MT && !kT.formed ? xB(kT, mT, this.goal) : -1;
          gT >= 0 && zT.push([Rm(kT.box, gT), tB(kT.box, gT)]);
          const nT = hm(kT.box);
          for (let zT = 0; zT < nT; zT++) {
            const nT = Rm(kT.box, zT),
              HT = mT(nT),
              jT = null === HT ? null : YB(kT, zT, HT, TT, MT, UT);
            if (null !== jT) {
              const TT = "wrong" !== jT && wB(kT.box, zT, gT),
                UT = TT ? `${jT}Dim` : jT;
              let mT = WT.get(UT);
              mT || (mT = {
                draw: {
                  ghost: jT,
                  dim: TT
                },
                list: []
              }, WT.set(UT, mT)), mT.list.push(nT)
            }
          }
        }
        if (MT && this.startsBattery && this.goal) {
          const [TT, UT, zT] = this.goal, MT = [];
          for (const [WT, gT, nT] of QB) {
            const HT = [TT + WT, UT + gT, zT + nT];
            "Air" === mT(HT) && MT.push(HT)
          }
          if (MT.length > 0) {
            var gT;
            const TT = null !== (gT = WT.get("cell")) && void 0 !== gT ? gT : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            TT.list.push(...MT), WT.set("cell", TT)
          }
        }
        const nT = [...WT.keys()].sort(),
          HT = [...nT.map((TT => `${TT}:${WT.get(TT).list.join(";")}`)), `cue:${zT.join(";")}`].join("|");
        if (HT !== this.shownKey) {
          this.shownKey = HT, this.clearMeshes(TT);
          for (const UT of nT) {
            const {
              draw: mT,
              list: zT
            } = WT.get(UT);
            this.meshes.push(this.build(TT, mT, zT))
          }
          for (const [UT, mT] of zT) this.cues.push(bB(TT, PB(UT, mT), sB))
        }
      }
      build(TT, UT, mT) {
        let {
          ghost: WT,
          dim: zT
        } = UT;
        const {
          size: MT,
          colour: gT,
          alpha: nT
        } = XB[WT], HT = mT[0], kT = [], jT = [];
        for (const [lT, LT, pT] of mT) iB(kT, jT, [lT - HT[0] + .5, LT - HT[1] + .5, pT - HT[2] + .5], [MT, MT, MT]);
        return TT.createGameMesh({
          positions: kT,
          indices: jT
        }, {
          rgb: gT,
          alpha: nT * (zT ? .3 : 1)
        }, HT)
      }
      clearMeshes(TT) {
        for (const UT of [...this.meshes, ...this.cues]) TT.disposeGameMesh(UT);
        this.meshes = [], this.cues = []
      }
    }
    const GB = [.56, .83, 1],
      NB = [1, .3, .25];
    class EB {
      constructor(TT) {
        this.plans = TT, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(TT, UT, mT) {
        var WT;
        const zT = performance.now();
        if (zT - this.lastCheckMs < 150) return;
        this.lastCheckMs = zT;
        const MT = UT => VB(TT, UT),
          gT = null === (WT = TT.RUT(UT)) || void 0 === WT ? void 0 : WT.name,
          nT = gT && "Reactor Frame" === ym(gT) ? TT.getTargetedBlock() : null,
          HT = nT ? [nT.NZ[0], nT.NZ[1], nT.NZ[2]] : null,
          kT = null !== HT && "Air" === MT(HT) && HT.every(((TT, UT) => Math.abs(TT + .5 - mT[UT]) <= 8)) ? yB(HT, mT, MT, (TT => this.inPlan(TT))) : null,
          jT = kT ? `${kT.box.ctrl.join()}|${kT.box.rot}|${kT.fits}` : "";
        jT !== this.shownKey && this.show(TT, jT, kT)
      }
      dispose(TT) {
        this.clear(TT), this.shownKey = ""
      }
      inPlan(TT) {
        return this.plans.all().some((UT => TW(UT.box, TT) >= 0))
      }
      show(TT, UT, mT) {
        if (this.clear(TT), this.shownKey = UT, !mT) return;
        const {
          box: WT,
          fits: zT
        } = mT, MT = zT ? GB : NB, {
          lo: gT,
          hi: nT
        } = QH(WT);
        this.meshes.push(bB(TT, sH(gT, nT, .05), {
          rgb: MT,
          alpha: 1
        }));
        const HT = [],
          kT = Rm(WT, 0)[1];
        for (let jT = 0; jT < WT.w * WT.d; jT++) {
          const [TT, , UT] = Rm(WT, jT);
          HT.push([
            [TT + .5, kT + .02 + .01, UT + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(bB(TT, HT, {
          rgb: MT,
          alpha: .25
        }))
      }
      clear(TT) {
        for (const UT of this.meshes) TT.disposeGameMesh(UT);
        this.meshes = []
      }
    }
    const hB = "buildAFactory2Game:";

    function DB(TT, UT, mT) {
      const WT = TT => {
          const [mT, WT, zT] = TT.box.ctrl;
          return mT === UT[0] && WT === UT[1] && zT === UT[2]
        },
        zT = TT.find((TT => WT(TT) || TW(TT.box, UT) >= 0));
      if (!zT) return null;
      const MT = function(TT, UT, mT) {
        const {
          w: WT,
          h: zT,
          d: MT
        } = TT.box, gT = "reactor" === TT.kind ? `${hB}rxTitle` : `${hB}batTitle`;
        if (TT.formed) return {
          key: `${hB}lookPlanFormed`,
          kindKey: gT,
          w: WT,
          h: zT,
          d: MT,
          count: 0
        };
        let nT = 0,
          HT = 0;
        for (let jT = 0; jT < hm(TT.box); jT++) {
          const UT = mT(Rm(TT.box, jT)),
            WT = null === UT ? "ok" : MW(TT.kind, UW(TT.box, jT), UT);
          nT += "missing" === WT ? 1 : 0, HT += "wrong" === WT || "blocked" === WT ? 1 : 0
        }
        const kT = function(TT, UT, mT) {
          if (UT < 0 || null === mT) return;
          const WT = UW(TT.box, UT),
            zT = MW(TT.kind, WT, mT);
          return "blocked" === zT ? `${hB}lookWhy_blocked` : "wrong" === zT ? "ctrl" === WT ? `${hB}lookWhy_ctrl` : `${hB}lookWhy_reactor_${WT}` : void 0
        }(TT, TW(TT.box, UT), mT([UT[0], UT[1], UT[2]]));
        if (nT > 0) return {
          key: `${hB}lookPlanToBuild`,
          kindKey: gT,
          w: WT,
          h: zT,
          d: MT,
          count: nT,
          why: kT
        };
        if (HT > 0) return {
          key: `${hB}lookPlanTakeOut`,
          kindKey: gT,
          w: WT,
          h: zT,
          d: MT,
          count: HT,
          why: kT
        };
        return {
          key: "reactor" === TT.kind ? `${hB}lookPlanNoRods` : `${hB}lookPlanDone`,
          kindKey: gT,
          w: WT,
          h: zT,
          d: MT,
          count: 0
        }
      }(zT, UT, mT);
      return "reactor" === zT.kind && WT(zT) ? {
        ...MT,
        ctrl: !0
      } : MT
    }

    function oB(TT, UT) {
      return TT === UT || null !== TT && null !== UT && TT.key === UT.key && TT.kindKey === UT.kindKey && TT.w === UT.w && TT.h === UT.h && TT.d === UT.d && TT.count === UT.count && TT.why === UT.why && TT.ctrl === UT.ctrl
    }

    function AB() {
      return performance.now()
    }
    class RB {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : AB;
        this.ticket = TT, this.sent = UT, this.backstopMs = mT, this.now = WT, this.queuedAt = void 0, this.queuedAt = WT()
      }
      answered() {
        const TT = this.now(),
          UT = this.sent.leftAt(this.ticket);
        return null !== UT && TT - UT > 4e3 || TT - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class TZ {
      constructor() {
        this.echoes = []
      }
      add(TT) {
        this.echoes = this.echoes.filter((TT => !TT.answered())), this.echoes.push(TT)
      }
      answered() {
        var TT, UT;
        return null === (TT = null === (UT = this.echoes.at(-1)) || void 0 === UT ? void 0 : UT.answered()) || void 0 === TT || TT
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((TT => TT.answered()))
      }
      age() {
        var TT, UT;
        return null !== (TT = null === (UT = this.echoes.at(-1)) || void 0 === UT ? void 0 : UT.age()) && void 0 !== TT ? TT : null
      }
      clear() {
        this.echoes = []
      }
    }
    class UZ {
      constructor(TT) {
        this.send = TT, this.value = null, this.sent = null, this.echoes = new TZ, this.down = !1, this.timer = null
      }
      shown(TT) {
        return null === this.value ? TT : this.down || this.value !== this.sent ? this.value : TT === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), TT) : this.value
      }
      pendingFor(TT) {
        return null !== this.value && this.value === this.sent && TT !== this.value ? this.echoes.age() : null
      }
      assume(TT, UT) {
        this.disarm(), this.down = !1, this.value = TT, this.sent = TT, this.echoes.clear(), this.echoes.add(UT)
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
    class mZ {
      constructor() {
        this.pending = new Map
      }
      set(TT, UT, mT) {
        var WT;
        const zT = null !== (WT = this.pending.get(TT)) && void 0 !== WT ? WT : {
          on: UT,
          echoes: new TZ
        };
        zT.on = UT, zT.echoes.add(mT), this.pending.set(TT, zT)
      }
      shown(TT) {
        let UT = TT;
        for (const [mT, {
            on: WT,
            echoes: zT
          }] of this.pending) 0 !== (TT & mT) === WT && zT.agreeCounts() || zT.answered() ? this.pending.delete(mT) : UT = WT ? UT | mT : UT & ~mT;
        return UT
      }
      pendingMask() {
        let TT = 0;
        for (const UT of this.pending.keys()) TT |= UT;
        return TT
      }
      pendingFor(TT) {
        let UT = null;
        for (const [WT, {
            on: zT,
            echoes: MT
          }] of this.pending) {
          if (void 0 !== TT && 0 !== (TT & WT) === zT) continue;
          const gT = MT.age();
          var mT;
          if (null !== gT) UT = Math.max(null !== (mT = UT) && void 0 !== mT ? mT : 0, gT)
        }
        return UT
      }
      clear() {
        this.pending.clear()
      }
    }
    class WZ {
      constructor() {
        this.dims = null, this.echoes = new TZ, this.unmet = null
      }
      shown(TT) {
        var UT;
        return this.dims && (zZ(this.dims, TT) && this.echoes.agreeCounts() || this.echoes.answered()) && (zZ(this.dims, TT) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (UT = this.dims) && void 0 !== UT ? UT : TT
      }
      takeUnmet() {
        const TT = this.unmet;
        return this.unmet = null, TT
      }
      set(TT, UT) {
        this.dims = TT, this.echoes.add(UT)
      }
      pendingFor(TT) {
        return null === this.dims || TT && zZ(this.dims, TT) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function zZ(TT, UT) {
      return TT[0] === UT[0] && TT[1] === UT[1] && TT[2] === UT[2]
    }
    class MZ {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AB;
        this.now = TT, this.taps = new Map
      }
      tap(TT, UT, mT) {
        return !this.busy(TT) && (this.taps.set(TT, {
          at: this.now(),
          done: UT
        }), mT(), !0)
      }
      settle(TT) {
        for (const [UT, mT] of [...this.taps]) mT.done(TT) && this.taps.delete(UT)
      }
      busy(TT) {
        const UT = this.taps.get(TT);
        return !!UT && (!(this.now() - UT.at >= 3e3) || (this.taps.delete(TT), !1))
      }
      busyIds() {
        const TT = new Set;
        for (const UT of [...this.taps.keys()]) this.busy(UT) && TT.add(UT);
        return TT
      }
      clear() {
        this.taps.clear()
      }
    }

    function gZ(TT) {
      return {
        send: UT => TT.track(UT),
        sendUrgent: (UT, mT) => TT.track(UT, {
          urgent: !0,
          supersedes: mT
        }),
        leftAt: UT => TT.leftAt(UT),
        holdReserve: () => TT.holdUrgentReserve(),
        answerMs: Ig
      }
    }

    function nZ() {
      return performance.now()
    }

    function HZ(TT) {
      const UT = TT.baf2RxNeed.map((TT => {
        let [UT, mT] = TT;
        return [UT, mT]
      }));
      return JSON.stringify([TT.baf2RxFormed, UT, TT.baf2RxBad, TT.baf2RxCells])
    }

    function kZ(TT, UT) {
      const mT = 0 !== (UT & LU),
        WT = 0 !== (TT.baf2RxFlags & LU);
      return !mT || WT || "running" !== TT.baf2RxState && "idle" !== TT.baf2RxState ? !mT && WT && "scram" === TT.baf2RxState && TT.baf2RxFuel > 0 ? "idle" : TT.baf2RxState : "scram"
    }

    function jZ(TT) {
      return JSON.stringify([TT.baf2BatFormed, TT.baf2BatNeed, TT.baf2BatBad])
    }

    function lZ(TT) {
      return TT.join(",")
    }
    class LZ {
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
    class pZ {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(TT, UT) {
        this.lastAt = TT, this.lastUntil = TT + UT
      }
      answered(TT) {
        return this.lastAt >= TT || TT < this.lastUntil
      }
    }
    class BZ {
      constructor(TT, UT) {
        this.link = TT, this.now = UT, this.hold = new WZ, this.picked = null, this.notTaken = null
      }
      shown(TT) {
        const UT = this.hold.shown(TT);
        if (this.hold.takeUnmet() && this.picked) {
          var mT;
          const {
            plans: UT,
            ctrl: WT,
            at: zT
          } = this.picked;
          this.picked = null, UT.unpredict(WT), null === (mT = this.notTaken) || void 0 === mT || mT.call(this, TT, zT)
        }
        return UT
      }
      pendingFor(TT) {
        return this.hold.pendingFor(TT)
      }
      VL(TT, UT, mT) {
        TT.predictSize(UT, mT), this.picked = {
          plans: TT,
          ctrl: UT,
          at: this.now()
        };
        const WT = this.link.send(lU(UT, "plan", ...mT));
        this.hold.set(mT, new RB(WT, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class ZZ {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nZ;
        this.plans = TT, this.readInterior = UT, this.link = mT, this.now = WT, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new mZ, this.throttle = void 0, this.oneShots = void 0, this.listeners = new LZ, this.redraw = null, this.releaseReserve = null, this.size = new BZ(mT, WT), this.oneShots = new MZ(WT), this.throttle = new UZ((TT => this.echo(this.link.send(this.command("throttle", TT)))))
      }
      set(TT) {
        !TT.baf2RxOpen && this.raw && lZ(this.raw.baf2RxAt) === lZ(TT.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(TT), this.EZ(TT)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(TT) {
        this.size.notTaken = TT
      }
      resize(TT) {
        this.raw && (this.size.VL(this.plans, this.raw.baf2RxAt, TT), this.EZ(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const TT = this.raw.baf2RxAt;
        this.plans.setStarter(TT, !this.plans.showsStarter(TT)), this.EZ(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.EZ(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.EZ(this.raw)
      }
      send(TT) {
        if (this.raw) {
          for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
          this.link.send(this.command(TT, ...mT))
        }
      }
      tap(TT, UT) {
        this.raw && this.oneShots.tap(TT, function(TT, UT) {
          if ("start" === TT) return TT => 0 === (TT.baf2RxFlags & LU);
          if ("odConfirm" === TT) return TT => 0 !== (TT.baf2RxFlags & pU);
          const mT = HZ(UT);
          return TT => HZ(TT) !== mT
        }(TT, this.raw), UT) && ("start" === TT && (this.startedAt = this.now()), this.EZ(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(LU, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(TT, UT) {
        if (!this.raw) return;
        const mT = TT === LU ? this.command(UT ? "scram" : "start") : this.command("od", UT ? 1 : 0),
          WT = UT && TT === LU,
          zT = `${jU} ${this.raw.baf2RxAt.join(" ")} `,
          MT = this.echo(WT ? this.link.sendUrgent(mT, (TT => {
            const UT = TT.startsWith(zT) ? TT.slice(zT.length).split(" ")[0] : null;
            return "throttle" === UT || "start" === UT
          })) : this.link.send(mT));
        this.flags.set(TT, UT, MT), WT && this.throttle.assume(0, MT), this.EZ(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(TT) {
        this.throttle.drag(TT), this.raw && this.EZ(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.EZ(this.raw)
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
        for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
        return lU(this.raw.baf2RxAt, TT, ...mT)
      }
      echo(TT) {
        return new RB(TT, this.link, this.link.answerMs, this.now)
      }
      EZ(TT) {
        var UT;
        this.raw = TT;
        const mT = this.flags.shown(TT.baf2RxFlags),
          WT = {
            ...TT,
            baf2RxFlags: mT,
            baf2RxTarget: this.throttle.shown(TT.baf2RxTarget),
            baf2RxState: kZ(TT, mT)
          },
          zT = this.size.shown(WT.baf2RxDims),
          MT = this.throttle.pendingFor(),
          gT = [this.throttle.pendingFor(TT.baf2RxTarget), this.flags.pendingFor(TT.baf2RxFlags), this.size.pendingFor(TT.baf2RxDims)].filter((TT => null !== TT)),
          nT = gT.length > 0 ? Math.max(...gT) : null,
          HT = this.oneShots.busyIds(),
          kT = WT.baf2RxAt;
        let jT, lT, LT = null,
          pT = [Math.max(0, zT[0] - 2), Math.max(0, zT[1] - 2), Math.max(0, zT[2] - 2)];
        if (WT.baf2RxFormed) {
          const [TT, UT, mT] = WT.baf2RxDims;
          pT = [Math.max(0, TT - 2), Math.max(0, UT - 2), Math.max(0, mT - 2)], jT = Array.from(WT.baf2RxCells, Number), lT = `${pT.join(",")}:${WT.baf2RxCells}`
        } else {
          var BT;
          const TT = null === (BT = this.plans.planAt(kT)) || void 0 === BT ? void 0 : BT.box,
            UT = TT ? Gm(TT, "reactor", ...zT) : Km(kT, 1, ...zT, Sm("reactor", zT[0])),
            mT = this.readInterior(UT);
          LT = WH(pT, mT), jT = mT, lT = `${pT.join(",")}:${mT.join("")}`
        }(null === (UT = this.looksOf) || void 0 === UT ? void 0 : UT.key) !== lT && (this.looksOf = {
          key: lT,
          looks: kH(pT, jT)
        }), this.view = {
          status: WT,
          dims: zT,
          plan: LT,
          inner: pT,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(kT),
          odConfirmed: this.odConfirmed || 0 !== (WT.baf2RxFlags & qU),
          guide: this.plans.guideOn(),
          throttlePending: null !== MT,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== nT && nT >= 5e3,
          busy: HT,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== nT || HT.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.EZ(this.raw)
        }), 250))
      }
    }
    class cZ {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nZ;
        this.plans = TT, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new LZ, this.redraw = null, this.size = new BZ(UT, mT), this.oneShots = new MZ(mT)
      }
      set(TT) {
        !TT.baf2BatOpen && this.view && lZ(this.view.status.baf2BatAt) === lZ(TT.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(TT), this.EZ(TT)
      }
      tap(TT, UT) {
        if (!this.view) return;
        const mT = jZ(this.view.status);
        this.oneShots.tap(TT, (TT => jZ(TT) !== mT), UT) && this.EZ(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(TT) {
        this.size.notTaken = TT
      }
      resize(TT) {
        this.view && (this.size.VL(this.plans, this.view.status.baf2BatAt, TT), this.EZ(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.EZ(this.view.status)
      }
      subscribe(TT) {
        return this.listeners.subscribe(TT)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      EZ(TT) {
        const UT = this.size.shown(TT.baf2BatDims),
          mT = this.oneShots.busyIds();
        this.view = {
          status: TT,
          dims: UT,
          fl: eH(UT, TT.baf2BatDims) ? TT.baf2BatCapacity : LH(...UT),
          guide: this.plans.guideOn(),
          busy: mT
        }, this.listeners.notify(), mT.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.EZ(this.view.status)
        }), 250))
      }
    }
    const vZ = "buildAFactory2Game:";

    function fZ() {
      var TT;
      const UT = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!UT) return null;
      const mT = UT.querySelector(".ExitButton");
      return function(TT, UT) {
        const mT = UT ? UT.left - 8 : TT.right;
        return {
          left: TT.left,
          top: TT.top,
          width: Math.max(0, mT - TT.left),
          height: TT.height
        }
      }(UT.getBoundingClientRect(), null !== (TT = null === mT || void 0 === mT ? void 0 : mT.getBoundingClientRect()) && void 0 !== TT ? TT : null)
    }
    const qZ = (0, WT.memo)((function(TT) {
      let {
        store: UT
      } = TT;
      const {
        t: mT
      } = (0, dz.z)(), [zT, MT] = (0, WT.useState)((() => UT.get())), [gT, nT] = (0, WT.useState)((() => performance.now()));
      (0, WT.useEffect)((() => (MT(UT.get()), UT.subscribe((() => {
        MT(UT.get()), nT(performance.now())
      })))), [UT]);
      const {
        alarm: HT,
        boomAt: kT
      } = zT, jT = null !== HT && null !== HT.secs, [lT, LT] = (0, WT.useState)(null);
      (0, WT.useEffect)((() => {
        if (!jT) return;
        LT(fZ());
        const TT = setInterval((() => {
          nT(performance.now()), LT(fZ())
        }), 250);
        return () => {
          clearInterval(TT)
        }
      }), [jT]);
      const [pT, BT] = (0, WT.useState)(!1);
      return (0, WT.useEffect)((() => {
        if (kT === -1 / 0) return;
        BT(!0);
        const TT = setTimeout((() => {
          BT(!1)
        }), 1300);
        return () => {
          clearTimeout(TT)
        }
      }), [kT]), (0, JM.jsxs)(JM.Fragment, {
        children: [null !== HT && (0, JM.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: mT(HT.hot ? `${vZ}rxAlarmSiren` : `${vZ}rxAlarmDamaged`, {
            amount: String(HT.damage)
          })
        }), null !== HT && null !== HT.secs && (0, JM.jsx)("div", {
          className: lT ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== lT && void 0 !== lT ? lT : void 0,
          "aria-live": "assertive",
          children: mT(`${vZ}rxAlarmCountdown`, {
            amount: String((ZT = HT.secs, cT = gT - HT.receivedAt, Math.max(1, Math.ceil(ZT - cT / 1e3))))
          })
        }), pT && (0, JM.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var ZT, cT
    }));
    class iZ {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      LO(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const mT = TT.baf2RxAlarmAt.join(",");
        let WT = this.snapshot.boomAt;
        if (TT.baf2RxAlarmBoom) this.byReactor.delete(mT), WT = UT;
        else if (TT.baf2RxAlarmDamage <= 0) this.byReactor.delete(mT);
        else {
          var zT;
          this.byReactor.set(mT, {
            damage: TT.baf2RxAlarmDamage,
            secs: null !== (zT = TT.baf2RxAlarmSecs) && void 0 !== zT ? zT : null,
            hot: !0 === TT.baf2RxAlarmHot,
            receivedAt: UT
          })
        }
        this.EZ(WT)
      }
      retain(TT) {
        let UT = !1;
        for (const mT of [...this.byReactor.keys()]) TT.has(mT) || (this.byReactor.delete(mT), UT = !0);
        UT && this.EZ(this.snapshot.boomAt)
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
      EZ(TT) {
        let UT = null;
        for (const mT of this.byReactor.values())(!UT || mT.damage > UT.damage) && (UT = mT);
        this.snapshot = {
          alarm: UT,
          boomAt: TT
        };
        for (const mT of this.listeners) mT()
      }
    }
    const bZ = {
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

    function OZ(TT) {
      return [TT[0], TT[1], TT[2]]
    }

    function eZ(TT) {
      return `${TT[0]},${TT[1]},${TT[2]}`
    }
    class YZ {
      constructor(TT) {
        if (this.plans = TT, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var TT;
            return {
              active: this.glows.flatMap((TT => {
                let {
                  record: UT
                } = TT;
                return UT ? [UT] : []
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
      check(TT, UT, mT) {
        const WT = new Set(UT.map((TT => eZ(TT.box.ctrl))));
        for (const gT of function(TT, UT) {
            const mT = [],
              WT = new Map(TT);
            TT.clear();
            for (const zT of UT) {
              const UT = ZB(zT.box.ctrl),
                MT = zT.formed ? zT.level : 0;
              TT.set(UT, MT), MT > 0 && 0 === WT.get(UT) && mT.push(zT)
            }
            return mT
          }(this.levels, this.plans.all())) WT.has(eZ(gT.box.ctrl)) && this.show(TT, gT, "on", mT);
        const zT = this.plans.lastFormed();
        if (null === zT || zT.receivedAt <= this.flashedAt) return null;
        this.flashedAt = zT.receivedAt;
        const MT = function(TT, UT) {
          var mT;
          const WT = ZB(TT);
          return null !== (mT = UT.find((TT => ZB(TT.box.ctrl) === WT))) && void 0 !== mT ? mT : null
        }(zT.ctrl, UT);
        return MT && this.show(TT, MT, "formed", mT), MT
      }
      fade(TT, UT) {
        0 !== this.glows.length && (this.glows = this.glows.filter((mT => {
          let {
            mesh: WT,
            glow: zT,
            startMs: MT,
            record: gT
          } = mT;
          const nT = (UT - MT) / bZ[zT].ms;
          return nT >= 1 ? (TT.disposeGameMesh(WT), gT && (gT.endMs = UT), !1) : (TT.setGameMesh(WT, {
            visibility: "formed" === zT ? 1 - nT : Math.sin(Math.PI * nT)
          }), !0)
        })))
      }
      dispose(TT) {
        for (const {
            mesh: mT
          }
          of this.glows) TT.disposeGameMesh(mT);
        this.glows = [], this.levels.clear();
        const UT = "undefined" !== typeof window ? window : null;
        (null === UT || void 0 === UT ? void 0 : UT.baf2Glows) === this.devAccessor && delete UT.baf2Glows
      }
      show(TT, UT, mT, WT) {
        const {
          lo: zT,
          hi: MT
        } = QH(UT.box);
        let gT = null;
        this.devLog && (gT = {
          glow: mT,
          ctrl: OZ(UT.box.ctrl),
          lo: OZ(zT),
          hi: OZ(MT),
          startMs: WT,
          endMs: null
        }, this.devLog.push(gT), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(TT, mT, sH(zT, MT, bZ[mT].thick)),
          glow: mT,
          startMs: WT,
          record: gT
        })
      }
      build(TT, UT, mT) {
        const WT = bB(TT, mT, {
          rgb: bZ[UT].colour,
          alpha: 1
        });
        return TT.setGameMesh(WT, {
          visibility: 0
        }), WT
      }
    }
    const JZ = 1 / .6,
      xZ = {
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
        blendMode: Fn.e.Standard,
        soft: !0
      },
      dZ = {
        ...xZ,
        size: [.25, .4],
        count: 2
      };

    function wZ(TT) {
      return {
        colours: [TT, TT],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Fn.e.Add,
        soft: !1
      }
    }
    const tZ = wZ([150, 225, 255]),
      aZ = wZ([185, 145, 255]),
      yZ = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function XZ(TT) {
      const UT = IU[TT];
      return null === UT.fuelSlot || zm(UT) ? yZ.includes(TT) ? aZ : tZ : xZ
    }
    const IZ = {
        kind: "smokePuff"
      },
      QZ = [.2, .025, .2];

    function sZ(TT, UT) {
      const [
        [mT, WT, zT],
        [MT, gT, nT]
      ] = TT.colours;
      return {
        texture: TT.soft ? IZ : "square_particle",
        fl: UT,
        minLifeTime: TT.life[0] / JZ,
        maxLifeTime: TT.life[1] / JZ,
        minEmitPower: TT.power[0] * JZ,
        maxEmitPower: TT.power[1] * JZ,
        minSize: TT.size[0],
        maxSize: TT.size[1],
        emitRate: 0,
        gravity: [0, TT.lift * JZ * JZ, 0],
        dir1: [-TT.spread, 1, -TT.spread],
        dir2: [TT.spread, 1, TT.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [mT, WT, zT, TT.alpha],
          maxColor: [MT, gT, nT, TT.alpha]
        }, {
          timeFraction: 1,
          minColor: [mT, WT, zT, 0],
          maxColor: [MT, gT, nT, 0]
        }],
        blendMode: TT.blendMode
      }
    }
    class FZ {
      constructor(TT) {
        this.fixed = TT, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(TT, UT, mT) {
        var WT;
        if (mT === this.lastFrame) return !1;
        this.lastFrame = mT;
        const zT = this.at;
        zT[0] = UT[0] + .5, zT[1] = UT[1] + 1.025, zT[2] = UT[2] + .5;
        const MT = null !== (WT = this.fixed) && void 0 !== WT ? WT : nT() ? dZ : xZ;
        let gT = this.particles.get(MT);
        return gT || (gT = TT.createParticles(function(TT) {
          return sZ(TT, Math.ceil(12 * TT.count * TT.life[1]) + TT.count)
        }(MT), {
          pos: zT,
          half: QZ
        }), this.particles.set(MT, gT)), gT.moveTo(zT), gT.emit(MT.count), !0
      }
      dispose() {
        for (const TT of this.particles.values()) TT.stop();
        this.particles.clear()
      }
    }
    class PZ {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(TT) {
        this.indexed = !0;
        for (const UT of dU) {
          const mT = XZ(UT);
          for (let WT = 1; WT <= 4; WT++) {
            const zT = TT.blockNameToBlockId(`${UT}|meta|rot${WT}|Running`, !0);
            if (null === zT) continue;
            let MT = this.pufferIndexByStyle.get(mT);
            void 0 === MT && (MT = this.pufferList.push(new FZ(mT === xZ ? null : mT)) - 1, this.pufferIndexByStyle.set(mT, MT)), this.pufferIndexById[zT] = MT + 1
          }
        }
      }
      onAfterRender(TT, UT) {
        this.indexed || this.index(TT);
        const mT = performance.now(),
          WT = 0 === this.lastMs ? 0 : Math.min(mT - this.lastMs, 250) / 1e3;
        this.lastMs = mT, this.frame++, TT.particlesEnabled() ? (this.scan(TT, UT), this.puff(TT, WT)) : this.sources = []
      }
      dispose() {
        for (const TT of this.pufferList) TT.dispose();
        this.sources = [], this.found = []
      }
      scan(TT, UT) {
        0 === this.scanRow && (this.origin = [Math.floor(UT[0]) - 12, Math.floor(UT[1]) - 6, Math.floor(UT[2]) - 12]);
        const mT = Math.min(this.scanRow + 16, 325),
          [WT, zT, MT] = this.origin,
          gT = this.hits;
        gT.length = 0;
        for (let nT = this.scanRow; nT < mT; nT++) {
          const UT = WT + nT % 25,
            mT = zT + Math.floor(nT / 25);
          TT.scanBlocks(UT, mT, MT, UT + 1, mT + 1, MT + 25, this.pufferIndexById, gT)
        }
        for (let nT = 0; nT < gT.length; nT += 4) {
          const TT = gT[nT + 3];
          this.found.push({
            pos: [gT[nT], gT[nT + 1], gT[nT + 2]],
            Gg: TT,
            puffer: this.pufferList[this.pufferIndexById[TT] - 1]
          })
        }
        this.scanRow = mT, 325 === mT && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(TT, UT) {
        const mT = this.sources.length;
        if (0 !== mT) {
          this.budget = Math.min(this.budget + Math.min(mT / 1.2, 12) * UT, 2);
          for (let UT = 0; UT < mT && this.budget >= 1; UT++) {
            const UT = this.sources[this.cursor % mT];
            this.cursor = (this.cursor + 1) % mT, TT.getBlockId(UT.pos[0], UT.pos[1], UT.pos[2]) === UT.Gg && (UT.puffer.puff(TT, UT.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const VZ = {
        ...wZ([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      uZ = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function CZ(TT) {
      return 0 === TT.spots.length ? 0 : Math.min(1 * TT.level, 4)
    }

    function rZ(TT) {
      return 0 === TT.glass.length ? 0 : Math.min(.75 * TT.level, 3)
    }

    function KZ(TT) {
      return `${TT.ctrl.join(",")}:${TT.rot}:${TT.cu},${TT.cv}:${TT.w},${TT.h},${TT.d}`
    }

    function SZ(TT, UT) {
      const mT = UT.w - 2,
        WT = UT.h - 2,
        zT = UT.d - 2,
        MT = [];
      for (let gT = 0; gT < mT * WT * zT; gT++) {
        const nT = gT % mT,
          HT = Math.floor(gT / mT) % zT,
          kT = Math.floor(gT / (mT * zT));
        if (nT > 0 && nT < mT - 1 && HT > 0 && HT < zT - 1 && kT > 0 && kT < WT - 1) continue;
        const jT = Rm(UT, WW(UT, gT)),
          lT = VB(TT, jT);
        if (null !== lT && "Fuel Rod" === ym(lT))
          for (const UT of uZ) {
            const mT = [jT[0] + UT[0], jT[1] + UT[1], jT[2] + UT[2]];
            NZ(TT, mT) && MT.push(EZ(mT, UT))
          }
      }
      return MT
    }

    function GZ(TT, UT) {
      const {
        lo: mT,
        hi: WT
      } = QH(UT), zT = [];
      for (let MT = mT[0]; MT < WT[0]; MT++)
        for (let UT = mT[1]; UT < WT[1]; UT++) {
          const gT = MT === mT[0] || MT === WT[0] - 1 || UT === mT[1] || UT === WT[1] - 1 ? 1 : Math.max(1, WT[2] - 1 - mT[2]);
          for (let nT = mT[2]; nT < WT[2]; nT += gT) {
            const gT = [MT, UT, nT];
            if (!NZ(TT, gT)) continue;
            const HT = MT === mT[0] ? uZ[1] : MT === WT[0] - 1 ? uZ[0] : nT === mT[2] ? uZ[5] : nT === WT[2] - 1 ? uZ[4] : UT === mT[1] ? uZ[3] : uZ[2];
            zT.push(EZ(gT, HT))
          }
        }
      return zT
    }

    function NZ(TT, UT) {
      const mT = VB(TT, UT);
      return null !== mT && "Reactor Glass" === ym(mT)
    }

    function EZ(TT, UT) {
      return [
        [TT[0] + .5 + .55 * UT[0], TT[1] + .5 + .55 * UT[1], TT[2] + .5 + .55 * UT[2]],
        [0 === UT[0] ? .4 : .02, 0 === UT[1] ? .4 : .02, 0 === UT[2] ? .4 : .02]
      ]
    }
    class hZ {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(TT, UT, mT, WT) {
        const zT = [],
          MT = new Set;
        for (const kT of UT) {
          var gT, nT, HT;
          const {
            box: UT
          } = kT;
          if ("reactor" !== kT.kind || kT.level <= 0 || (UT.ctrl[0] - mT[0]) ** 2 + (UT.ctrl[1] - mT[1]) ** 2 + (UT.ctrl[2] - mT[2]) ** 2 > 576) continue;
          const jT = KZ(UT);
          MT.add(jT);
          let lT = this.spots.get(jT);
          if ((!lT || WT - lT.at > 3e3) && (lT = {
              at: WT,
              spots: SZ(TT, UT),
              glass: GZ(TT, UT)
            }, this.spots.set(jT, lT)), 0 === lT.spots.length && 0 === lT.glass.length) continue;
          const LT = this.sparking.find((TT => TT.key === jT));
          zT.push({
            key: jT,
            level: kT.level,
            spots: lT.spots,
            glass: lT.glass,
            budget: null !== (gT = null === LT || void 0 === LT ? void 0 : LT.budget) && void 0 !== gT ? gT : 0,
            cursor: null !== (nT = null === LT || void 0 === LT ? void 0 : LT.cursor) && void 0 !== nT ? nT : 0,
            glassBudget: null !== (HT = null === LT || void 0 === LT ? void 0 : LT.glassBudget) && void 0 !== HT ? HT : 0
          })
        }
        for (const kT of this.spots.keys()) MT.has(kT) || this.spots.delete(kT);
        this.sparking = zT
      }
      emit(TT, UT, mT) {
        var WT;
        if (0 === this.sparking.length || !TT.particlesEnabled() || mT === this.lastFrame) return;
        this.lastFrame = mT;
        let zT = 0,
          MT = 0;
        for (const BT of this.sparking) zT += CZ(BT), MT += rZ(BT);
        const gT = zT > 8 ? 8 / zT : 1,
          nT = MT > 6 ? 6 / MT : 1;
        let HT, kT = null,
          jT = null;
        for (const BT of this.sparking) BT.budget = Math.min(BT.budget + CZ(BT) * gT * UT, 2), BT.budget >= 1 && (!kT || BT.budget > kT.budget) && (kT = BT), BT.glassBudget = Math.min(BT.glassBudget + rZ(BT) * nT * UT, 2), BT.glassBudget >= 1 && (!jT || BT.glassBudget > jT.glassBudget) && (jT = BT);
        if (kT) kT.budget--, HT = kT.spots[kT.cursor++ % kT.spots.length];
        else {
          if (!jT) return;
          jT.glassBudget--, HT = jT.glass[Math.floor(Math.random() * jT.glass.length)]
        }
        const [lT, LT] = HT, pT = null !== (WT = this.emitter) && void 0 !== WT ? WT : this.create(TT, lT, LT);
        pT.moveTo(lT, LT), pT.emit(VZ.count)
      }
      dispose() {
        var TT;
        null === (TT = this.emitter) || void 0 === TT || TT.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(TT, UT, mT) {
        const WT = Math.ceil(14 * VZ.count * VZ.life[1]) + VZ.count;
        return this.emitter = TT.createParticles(sZ(VZ, WT), {
          pos: UT,
          half: mT
        }), this.emitter
      }
    }
    const DZ = [2, 3.2],
      oZ = 1 / 3,
      AZ = 1 / .6,
      RZ = {
        texture: IZ,
        fl: Math.ceil(18 * DZ[1]) + 4,
        minLifeTime: DZ[0] / AZ,
        maxLifeTime: DZ[1] / AZ,
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
        blendMode: Fn.e.Standard
      };
    class Tc {
      constructor(TT) {
        this.plans = TT, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new hZ, this.frame = 0, this.outline = new YZ(TT)
      }
      onAfterRender(TT, UT, mT) {
        const WT = performance.now(),
          zT = 0 === this.lastMs ? 0 : Math.min(WT - this.lastMs, 250) / 1e3;
        if (this.lastMs = WT, this.outline.fade(TT, WT), this.puff(TT, zT, mT), this.sparks.emit(TT, zT, this.frame++), WT - this.lastCheckMs < 150) return;
        this.lastCheckMs = WT;
        const MT = this.plans.all().filter((TT => TT.formed && Uc(TT.box.ctrl, mT) <= 4096));
        this.plumes = MT.filter((TT => "reactor" === TT.kind && TT.level > 0)).map((TT => ({
          box: TT.box,
          level: TT.level
        }))), this.updateHums(TT, UT, MT, mT), this.sparks.update(TT, MT, mT, WT), this.chimeFormed(TT, UT, MT, WT)
      }
      dispose(TT) {
        var UT;
        this.outline.dispose(TT), null === (UT = this.steam) || void 0 === UT || UT.dispose(), this.steam = null, this.sparks.dispose();
        for (const mT of this.hums.values()) mT.stop();
        this.hums.clear()
      }
      chimeFormed(TT, UT, mT, WT) {
        const zT = this.outline.check(TT, mT, WT);
        zT && TT.playSound(UT, "exp_levelup", .6, 1, {
          zT: [zT.box.ctrl[0] + .5, zT.box.ctrl[1], zT.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(TT, UT, mT) {
        const WT = this.plumes;
        if (0 === WT.length || !TT.particlesEnabled()) return void(this.plumeBudget = 0);
        const zT = WT.reduce(((TT, UT) => TT + 3 * UT.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + zT * UT, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let MT = this.plumeCursor % (zT / 3);
        this.plumeCursor++;
        let gT = WT[0];
        for (const lT of WT) {
          if (MT < lT.level) {
            gT = lT;
            break
          }
          MT -= lT.level
        }
        const {
          lo: nT,
          hi: HT
        } = QH(gT.box);
        if (function(TT, UT, mT) {
            const WT = Math.max(TT[0] - mT[0], 0, mT[0] - UT[0]),
              zT = Math.max(TT[2] - mT[2], 0, mT[2] - UT[2]);
            return Math.hypot(WT, mT[1] - UT[1], zT)
          }(nT, HT, mT) < 6 && Math.random() > oZ) return;
        const kT = [(nT[0] + HT[0]) / 2, HT[1] + .05, (nT[2] + HT[2]) / 2],
          jT = [(HT[0] - nT[0]) / 2 - .5, .05, (HT[2] - nT[2]) / 2 - .5];
        this.steam ??= TT.createParticles(RZ, {
          pos: kT,
          half: jT
        }), this.steam.moveTo(kT, jT), this.steam.emit(1)
      }
      updateHums(TT, UT, mT, WT) {
        const zT = new Map;
        for (const gT of mT) "reactor" === gT.kind && gT.level > 0 && Uc(gT.box.ctrl, WT) <= 576 && zT.set(`${MT=gT.box.ctrl,`${MT[0]},${MT[1]},${MT[2]}`}:${gT.level}`, gT);
        var MT;
        for (const [gT, nT] of this.hums) zT.has(gT) || (nT.stop(), this.hums.delete(gT));
        for (const [gT, nT] of zT) {
          if (this.hums.has(gT)) continue;
          const {
            lo: mT,
            hi: WT
          } = QH(nT.box), zT = [(mT[0] + WT[0]) / 2, mT[1], (mT[2] + WT[2]) / 2], MT = TT.playSound(UT, "rocketEngineLoop", .08 + .06 * nT.level, .55, {
            zT: zT,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          MT && this.hums.set(gT, MT)
        }
      }
    }

    function Uc(TT, UT) {
      return (TT[0] - UT[0]) ** 2 + (TT[1] - UT[1]) ** 2 + (TT[2] - UT[2]) ** 2
    }
    class mc {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      LO(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const WT = [TT.baf2BombAt[0], TT.baf2BombAt[1], TT.baf2BombAt[2]],
          zT = TT.baf2BombR;
        if (TT.baf2BombBoom) {
          const TT = Math.hypot(UT[0] - WT[0], UT[1] - WT[1], UT[2] - WT[2]);
          this.EZ({
            fuse: null,
            blast: {
              at: WT,
              r: zT,
              receivedAt: mT,
              distance: TT,
              flash: TT <= 3 * zT
            }
          })
        } else this.EZ({
          ...this.snapshot,
          fuse: TT.baf2BombMs > 0 ? {
            at: WT,
            r: zT,
            endsAt: mT + TT.baf2BombMs
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
      EZ(TT) {
        this.snapshot = TT;
        for (const UT of this.listeners) UT()
      }
    }
    const Wc = (0, WT.memo)((function(TT) {
      var UT;
      let {
        store: mT
      } = TT;
      const {
        t: zT
      } = (0, dz.z)(), [MT, gT] = (0, WT.useState)((() => mT.get())), [nT, HT] = (0, WT.useState)((() => performance.now()));
      (0, WT.useEffect)((() => (gT(mT.get()), mT.subscribe((() => {
        gT(mT.get()), HT(performance.now())
      })))), [mT]);
      const {
        fuse: kT,
        blast: jT
      } = MT;
      (0, WT.useEffect)((() => {
        if (!kT) return;
        const TT = setInterval((() => {
          HT(performance.now())
        }), 250);
        return () => {
          clearInterval(TT)
        }
      }), [kT]);
      const [lT, LT] = (0, WT.useState)(!1);
      (0, WT.useEffect)((() => {
        if (null === jT || void 0 === jT || !jT.flash) return;
        LT(!0);
        const TT = setTimeout((() => {
          LT(!1)
        }), 2500);
        return () => {
          clearTimeout(TT)
        }
      }), [jT]);
      const pT = kT ? function(TT, UT) {
        return TT.endsAt <= UT ? 0 : Math.ceil((TT.endsAt - UT) / 1e3)
      }(kT, nT) : 0;
      return (0, JM.jsxs)(JM.Fragment, {
        children: [pT > 0 && (0, JM.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: zT("buildAFactory2Game:bombCountdown", {
            amount: String(pT),
            radius: String(null !== (UT = null === kT || void 0 === kT ? void 0 : kT.r) && void 0 !== UT ? UT : 0)
          })
        }), lT && (0, JM.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function zc(TT) {
      const UT = Math.min(4, Math.max(1, TT / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * TT / 4)),
        capSpread: Math.min(5 * TT / 8, 24 * UT),
        capThick: 6 * UT,
        stemHalfWidth: 3 * UT,
        puffScale: UT
      }
    }
    class Mc {
      constructor() {
        this.fn = !1
      }
      hold(TT) {
        TT.getCameraFar() < 1e3 && (TT.setCameraFar(1e3), this.fn = !0)
      }
      release(TT) {
        this.fn && (this.fn = !1, TT.setCameraFar(null))
      }
    }
    const gc = 1 / .6,
      nc = [.2, .1, .2],
      Hc = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      kc = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Fn.e.Standard,
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
      jc = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: Fn.e.Standard,
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
      lc = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Fn.e.Standard,
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
      Lc = {
        texture: IZ,
        fl: Math.ceil(120) + 4,
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
        blendMode: Fn.e.Add
      };
    class pc {
      constructor(TT) {
        this.store = TT, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Mc, this.timers = []
      }
      onAfterRender(TT, UT) {
        const mT = performance.now(),
          WT = 0 === this.lastMs ? 0 : Math.min(mT - this.lastMs, 250) / 1e3;
        this.lastMs = mT;
        const {
          fuse: zT,
          blast: MT
        } = this.store.get();
        null !== MT && MT !== this.shownBlast && (this.shownBlast = MT, this.startBlast(TT, UT, MT, mT));
        const gT = TT.particlesEnabled();
        null !== zT && zT.endsAt > mT && gT ? this.emitBeacon(TT, zT, WT, mT) : this.beaconBudget = 0, null !== this.cloud && (mT - this.cloud.startMs > 33e3 ? this.disposeCloud(TT) : (this.far.hold(TT), gT && this.emitCloud(TT, WT, mT)))
      }
      dispose(TT) {
        var UT;
        null === (UT = this.beacon) || void 0 === UT || UT.dispose(), this.beacon = null, this.disposeCloud(TT);
        for (const mT of this.timers) clearTimeout(mT);
        this.timers.length = 0
      }
      emitBeacon(TT, UT, mT, WT) {
        const zT = UT.endsAt - WT < 5e3 ? 350 : 1e3,
          MT = .5 + .5 * Math.sin(2 * Math.PI * WT / zT);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * MT * mT, 4), this.beaconBudget < 1) return;
        const gT = Math.floor(this.beaconBudget);
        this.beaconBudget -= gT;
        const [nT, HT, kT] = UT.at, jT = [nT + .5, HT + 1.1, kT + .5];
        this.beacon ??= TT.createParticles(Lc, {
          pos: jT,
          half: nc
        }), this.beacon.moveTo(jT), this.beacon.emit(gT)
      }
      startBlast(TT, UT, mT, WT) {
        var zT;
        null === (zT = this.beacon) || void 0 === zT || zT.dispose(), this.beacon = null, this.disposeCloud(TT);
        const MT = (0, Qn.isMobile)() ? .5 : 1;
        this.streams = [kc, jc, lc].map((TT => {
          const UT = Math.round(TT.count * MT);
          return {
            spec: TT,
            particles: null,
            rate: UT / ((TT.toMs - TT.fromMs) / 1e3),
            budget: 0,
            left: UT
          }
        })), this.cloud = {
          blast: mT,
          startMs: WT
        };
        const gT = Math.max(.25, 1 - mT.distance / (6 * mT.r)),
          nT = mT.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [mT, WT, zT] of Hc) Zc(TT, UT, mT, gT * WT, zT)
        }), nT))
      }
      emitCloud(TT, UT, mT) {
        const {
          blast: WT,
          startMs: zT
        } = this.cloud, MT = mT - zT, [gT, nT, HT] = WT.at, kT = zc(WT.r);
        for (const jT of this.streams) {
          const {
            spec: mT
          } = jT;
          if (jT.left <= 0 || MT < mT.fromMs) continue;
          jT.budget += jT.rate * UT;
          const zT = Math.min(Math.floor(jT.budget), jT.left);
          if (zT < 1) continue;
          jT.budget -= zT, jT.left -= zT;
          const lT = jT.particles ??= this.createStream(TT, mT, WT);
          if (mT === kc) {
            const TT = kT.stemHalfWidth;
            lT.moveTo([gT, nT + 1, HT], [TT, 1, TT])
          } else if (mT === jc) {
            const TT = kT.capSpread * Math.min(1, (MT - mT.fromMs) / 3e3),
              UT = Math.sqrt(Math.random()),
              WT = 2 * Math.random() * Math.PI,
              zT = Math.cos(WT) * UT,
              jT = Math.sin(WT) * UT,
              LT = gT + zT * TT,
              pT = HT + jT * TT,
              BT = kT.capThick,
              ZT = nT + kT.capHeight + BT * (1 - UT * UT) * 2;
            lT.setDirections([.7 * zT, .05, .7 * jT], [zT, .2, jT]), lT.moveTo([LT, ZT, pT], [BT, BT, BT])
          } else {
            this.ringAngle += 2.39996;
            const TT = Math.cos(this.ringAngle),
              UT = Math.sin(this.ringAngle);
            lT.setDirections([TT, .05, UT], [TT, .1, UT]), lT.moveTo([gT + 2 * TT, nT + .5, HT + 2 * UT], [0, .5, 0])
          }
          lT.emit(zT)
        }
      }
      createStream(TT, UT, mT) {
        const {
          r: WT
        } = mT, zT = Math.max(UT.life[0], WT / 25), MT = UT === lc ? [.9 * zT, zT] : UT.life, gT = zc(WT), nT = UT === lc ? 1 : gT.puffScale, HT = {
          texture: IZ,
          fl: UT.count + 4,
          minLifeTime: MT[0] / gc,
          maxLifeTime: MT[1] / gc,
          minSize: UT.size[0] * nT,
          maxSize: UT.size[1] * nT,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, UT.gravity * gc * gc, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: UT.from[0],
            maxColor: UT.from[1]
          }, {
            timeFraction: .6,
            minColor: Bc(UT.from[0], UT.to[0]),
            maxColor: Bc(UT.from[1], UT.to[1])
          }, {
            timeFraction: 1,
            minColor: UT.to[0],
            maxColor: UT.to[1]
          }],
          blendMode: UT.blend
        };
        if (UT === kc) {
          const TT = gT.capHeight / ((MT[0] + MT[1]) / 2);
          HT.minEmitPower = .9 * TT * gc, HT.maxEmitPower = 1.05 * TT * gc, HT.dir1 = [-.1, 1, -.1], HT.dir2 = [.1, 1, .1]
        } else UT === jc ? (HT.minEmitPower = 1.2, HT.maxEmitPower = 2, HT.dir1 = [-1, .05, -1], HT.dir2 = [1, .2, 1]) : (HT.minEmitPower = 39.583333333333336, HT.maxEmitPower = 41.66666666666667, HT.dir1 = [1, 0, 0], HT.dir2 = [1, 0, 0]);
        return TT.createParticles(HT, {
          pos: mT.at
        })
      }
      disposeCloud(TT) {
        for (const mT of this.streams) {
          var UT;
          null === (UT = mT.particles) || void 0 === UT || UT.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(TT)
      }
    }

    function Bc(TT, UT) {
      return [(TT[0] + UT[0]) / 2, (TT[1] + UT[1]) / 2, (TT[2] + UT[2]) / 2, .75 * TT[3]]
    }

    function Zc(TT, UT, mT, WT, zT) {
      try {
        TT.playSound(UT, mT, WT, zT)
      } catch (MT) {
        console.error(MT)
      }
    }
    const cc = {
        fl: 720,
        perS: 100
      },
      vc = {
        fl: 320,
        perS: 44
      };
    class fc {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(TT, UT) {
        this.zone = {
          centre: [...TT.centre],
          r: TT.r,
          band: TT.band ? [TT.band[0], TT.band[1]] : void 0
        }, this.endsAt = UT
      }
      stop() {
        this.zone = null
      }
      LO(TT, UT) {
        const {
          baf2FalloutMs: mT,
          baf2FalloutAt: WT,
          baf2FalloutR: zT,
          baf2FalloutY: MT
        } = TT;
        mT > 0 && WT && void 0 !== zT ? this.start({
          centre: WT,
          r: zT,
          band: MT
        }, UT + mT) : this.stop()
      }
      perS(TT, UT, mT) {
        const WT = this.zone;
        if (!WT) return 0;
        const zT = this.endsAt - TT;
        return zT <= 0 ? (this.zone = null, 0) : WT.band && (UT[1] < WT.band[0] || UT[1] > WT.band[1]) || Math.hypot(UT[0] - WT.centre[0], UT[2] - WT.centre[2]) > WT.r ? 0 : mT.perS * Math.min(1, zT / 5e3)
      }
    }
    const qc = [5, 7],
      ic = [24, 8, 24],
      bc = .5,
      Oc = 1 / .6,
      ec = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class Yc {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Qn.isMobile)();
        this.state = new fc, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(TT) {
          return TT ? vc : cc
        }(TT)
      }
      startFallout(TT, UT) {
        this.state.start(TT, UT)
      }
      stopFallout() {
        this.state.stop()
      }
      LO(TT) {
        this.state.LO(TT, performance.now())
      }
      onAfterRender(TT, UT) {
        var mT;
        const WT = performance.now(),
          zT = 0 === this.lastMs ? 0 : Math.min(WT - this.lastMs, 250) / 1e3;
        this.lastMs = WT;
        const MT = this.state.perS(WT, UT, this.tier);
        if (MT <= 0 || !TT.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + MT * zT, MT / 4);
        const gT = Math.floor(this.budget);
        if (gT < 1) return;
        this.budget -= gT;
        const nT = this.at;
        nT[0] = UT[0], nT[1] = UT[1] + 12, nT[2] = UT[2];
        const HT = null !== (mT = this.systems) && void 0 !== mT ? mT : this.create(TT, nT),
          kT = this.amounts;
        kT[0] = 0, kT[1] = 0;
        for (let jT = 0; jT < gT; jT++) kT[Math.random() < .3 ? 1 : 0]++;
        for (let jT = 0; jT < HT.length; jT++) kT[jT] > 0 && (HT[jT].moveTo(nT, ic), HT[jT].emit(kT[jT]))
      }
      dispose() {
        for (const UT of null !== (TT = this.systems) && void 0 !== TT ? TT : []) {
          var TT;
          UT.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(TT, UT) {
        return this.systems = ec.map((mT => {
          let {
            rgba: [WT, zT, MT, gT],
            share: nT
          } = mT;
          const HT = {
            texture: "square_particle",
            fl: Math.ceil(this.tier.fl * nT),
            minLifeTime: qc[0] / Oc,
            maxLifeTime: qc[1] / Oc,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [bc, -1, bc],
            colorGradients: [{
              timeFraction: 0,
              minColor: [WT, zT, MT, 0]
            }, {
              timeFraction: .15,
              minColor: [WT, zT, MT, gT]
            }, {
              timeFraction: .8,
              minColor: [WT, zT, MT, gT]
            }, {
              timeFraction: 1,
              minColor: [WT, zT, MT, 0]
            }],
            blendMode: Fn.e.Standard
          };
          return TT.createParticles(HT, {
            pos: UT,
            half: ic
          })
        })), this.systems
      }
    }
    const Jc = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function xc(TT) {
      const UT = /\|rot(\d)/.exec(TT);
      return Jc[UT ? Number(UT[1]) : 1]
    }
    var dc = mT(649),
      wc = mT(38598);
    const tc = new Set(dc.m);

    function ac(TT) {
      if (-2 !== TT.count) return null;
      const UT = KT(TT.item);
      return null !== UT && tc.has(UT) ? UT : null
    }

    function yc(TT) {
      const {
        width: UT,
        height: mT
      } = (0, wc.d)(TT).hitBoxDimensions;
      return .55 / Math.max(UT, mT)
    }

    function Xc(TT, UT, mT) {
      if (!mT) return !1;
      const WT = TT[0] + .5 - UT[0],
        zT = TT[1] + .5 - UT[1],
        MT = TT[2] + .5 - UT[2];
      return WT * WT + zT * zT + MT * MT <= 576
    }

    function Ic(TT, UT) {
      return Math.atan2(TT[0], TT[2]) + Math.PI + UT
    }

    function Qc(TT, UT) {
      const mT = 2 * Math.PI;
      return (TT + mT * UT / 1e4) % mT
    }
    class sc {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = TT, this.now = UT, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = TT.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(TT, UT) {
        if (0 === this.farms.size) return;
        const mT = this.now(),
          WT = Number.isNaN(this.frameMs) ? 0 : Math.min(mT - this.frameMs, 100);
        this.frameMs = mT, mT - this.checkedMs >= 1e3 && (this.checkedMs = mT, this.check(TT, UT));
        for (const zT of this.farms.values()) zT.shown && zT.running && null !== zT.model && WT > 0 && (zT.spin = Qc(zT.spin, WT), zT.model.setPose(zT.feet, Ic(zT.front, zT.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const TT of this.farms.values()) this.drop(TT);
        this.farms.clear()
      }
      sync() {
        const TT = new Set;
        for (const UT of this.labels.list()) {
          const mT = ac(UT);
          if (null === mT) continue;
          TT.add(UT.key);
          const WT = this.farms.get(UT.key);
          if ((null === WT || void 0 === WT ? void 0 : WT.mob) === mT) continue;
          WT && this.drop(WT);
          const [zT, MT, gT] = UT.pos;
          this.farms.set(UT.key, {
            pos: UT.pos,
            feet: [zT + .5, MT + 1, gT + .5],
            mob: mT,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [UT, mT] of this.farms) TT.has(UT) || (this.drop(mT), this.farms.delete(UT));
        this.checkedMs = -1 / 0
      }
      check(TT, UT) {
        for (const mT of this.farms.values()) {
          const [WT, zT, MT] = mT.pos, gT = VB(TT, mT.pos);
          null !== gT && ym(gT) === QT && Xc(mT.pos, UT, "Air" === VB(TT, [WT, zT + 1, MT])) ? (mT.running = gT.endsWith("|Running"), mT.front = xc(gT), null === mT.model && (mT.model = TT.createMobModel(mT.mob, yc(mT.mob)), null === mT.model) || (mT.model.setPose(mT.feet, Ic(mT.front, mT.spin)), mT.shown || (mT.model.setVisible(!0), mT.shown = !0))) : (mT.shown && null !== mT.model && mT.model.setVisible(!1), mT.shown = !1)
        }
      }
      drop(TT) {
        var UT;
        null === (UT = TT.model) || void 0 === UT || UT.dispose(), TT.model = null, TT.shown = !1
      }
    }
    class Fc {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(TT) {
        var UT;
        this.island = TT.baf2ColIsland, this.islandSite = (UT = TT.baf2ColSite) && 8 === UT.length ? {
          spawnXZ: [UT[0], UT[1]],
          coreXZ: [UT[2], UT[3]],
          minXZ: [UT[4], UT[5]],
          maxXZ: [UT[6], UT[7]]
        } : null, this.views = TT.baf2ColList.map((TT => ({
          entry: nz(TT)
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
        var UT;
        return null === (UT = this.views.find((UT => {
          let {
            entry: mT
          } = UT;
          return mT.focus[0] === TT[0] && mT.focus[1] === TT[1] + 1 && mT.focus[2] === TT[2]
        }))) || void 0 === UT ? void 0 : UT.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(TT, UT) {
        return rH(this.entries(), TT, UT)
      }
      lookSource() {
        return {
          handles: TT => pW(TT) >= 0 || BW(TT),
          line: (TT, UT) => this.lookLine(TT, UT),
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
    const Pc = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((TT => TT / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((TT => [TT, TT + 1, TT + 2, TT, TT + 2, TT + 3]))
    };

    function Vc(TT, UT, mT, WT, zT, MT, gT) {
      let nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const HT = Math.cos(nT),
        kT = Math.sin(nT),
        jT = TT.positions.length / 3,
        {
          positions: lT,
          indices: LT
        } = Pc;
      for (let pT = 0; pT < lT.length; pT += 3) {
        const nT = lT[pT] * zT,
          jT = lT[pT + 2] * gT;
        TT.positions.push(UT + nT * HT + jT * kT, mT + lT[pT + 1] * MT, WT - nT * kT + jT * HT)
      }
      for (const pT of LT) TT.indices.push(jT + pT)
    }

    function uc(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return UT < 1 ? {
        rgb: TT,
        alpha: UT
      } : {
        rgb: TT,
        alpha: 1,
        opaque: !0
      }
    }
    class Cc {
      constructor(TT, UT) {
        this.style = TT, this.perSource = UT, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(TT) {
        this.sources = TT, 0 === TT.length && (this.budget = 0)
      }
      Cl(TT, UT, mT) {
        const WT = this.sources.length;
        if (0 !== WT) {
          var zT, MT;
          this.budget = Math.min(this.budget + (zT = WT, MT = this.perSource, Math.min(zT * MT, Wk) * UT), 2);
          for (let UT = 0; UT < WT && this.budget >= 1; UT++) {
            const UT = this.sources[this.cursor % WT];
            this.cursor = (this.cursor + 1) % WT;
            if (!(Math.max(Math.abs(UT.x - mT[0]), Math.abs(UT.y - mT[1]), Math.abs(UT.z - mT[2])) > 32)) return this.puff(TT, UT), void this.budget--
          }
        }
      }
      dispose() {
        var TT;
        null === (TT = this.particles) || void 0 === TT || TT.dispose(), this.particles = null, this.sources = []
      }
      puff(TT, UT) {
        let {
          x: mT,
          y: WT,
          z: zT,
          h: MT,
          faces: gT
        } = UT;
        const nT = function(TT, UT, mT, WT, zT) {
            const [MT, gT, nT] = zT[Math.floor(Math.random() * zT.length)], HT = .04, kT = (TT, UT, mT) => TT > 0 ? UT + mT + HT : TT < 0 ? UT - HT : UT + .1, jT = (TT, UT, mT) => TT > 0 ? UT + mT + HT : TT < 0 ? UT - HT : UT + mT - .1, lT = [kT(MT, TT, 1), kT(gT, UT, WT), kT(nT, mT, 1)], LT = [jT(MT, TT, 1), jT(gT, UT, WT), jT(nT, mT, 1)];
            return {
              pos: [(lT[0] + LT[0]) / 2, (lT[1] + LT[1]) / 2, (lT[2] + LT[2]) / 2],
              half: [(LT[0] - lT[0]) / 2, (LT[1] - lT[1]) / 2, (LT[2] - lT[2]) / 2],
              out: [MT, gT, nT]
            }
          }(mT, WT, zT, MT, gT),
          {
            style: HT
          } = this,
          kT = this.particles ??= TT.createParticles(sZ(HT, Math.ceil(HT.count * Wk * HT.life[1]) + 4), nT);
        kT.moveTo(nT.pos, nT.half);
        const [jT, lT, LT] = nT.out, pT = HT.spread;
        kT.setDirections([jT - pT, .6 + lT, LT - pT], [jT + pT, 1 + lT, LT + pT]), kT.emit(HT.count)
      }
    }
    const rc = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Kc {
      constructor() {
        this.green = new Cc(Mk.green, Uk), this.pink = new Cc(Mk.pink, mk), this.colliders = [], this.lastMs = 0
      }
      setSources(TT) {
        this.colliders = TT;
        const UT = [],
          mT = [];
        for (const WT of TT) {
          const [TT, zT, MT] = WT.focus;
          UT.push({
            x: TT,
            y: zT - 1,
            z: MT,
            h: 2,
            faces: rc
          });
          for (let UT = 0; UT < 4; UT++) {
            if (!WT.live[UT]) continue;
            const [TT, zT, MT] = vW(WT.focus, UT, nW.LASER_D), [gT, , nT] = cW[UT], HT = rc.filter((TT => TT[0] !== gT || TT[2] !== nT || 0 !== TT[1]));
            mT.push({
              x: TT,
              y: zT,
              z: MT,
              h: 1,
              faces: HT
            })
          }
        }
        this.green.setSources(UT), this.pink.setSources(mT)
      }
      onAfterRender(TT) {
        const UT = performance.now(),
          mT = 0 === this.lastMs ? 0 : Math.min(UT - this.lastMs, 250) / 1e3;
        if (this.lastMs = UT, 0 === this.colliders.length || !TT.particlesEnabled()) return;
        const WT = TT.getCameraPosition();
        this.green.Cl(TT, mT, WT), this.pink.Cl(TT, mT, WT)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Sc = 1.04,
      Gc = uc([1, 120 / 255, 220 / 255]),
      Nc = uc([1, .25, .25], .35);
    class Ec {
      constructor(TT) {
        this.store = TT, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Kc
      }
      onAfterRender(TT) {
        this.store.version() !== this.builtVersion && this.rebuild(TT);
        const UT = performance.now();
        for (const mT of this.beams) {
          const WT = 1 + .35 * Math.sin(UT / 700 * Math.PI * 2 + mT.phase);
          TT.setGameMesh(mT.mesh, {
            scale: [mT.alongX ? 1 : WT, WT, mT.alongX ? WT : 1]
          })
        }
        this.glow.onAfterRender(TT)
      }
      dispose(TT) {
        this.clear(TT), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(TT) {
        this.clear(TT), this.builtVersion = this.store.version();
        const UT = [];
        for (const {
            entry: mT
          }
          of this.store.colliders()) mT.on && mT.live.some(Boolean) && (this.addBeams(TT, mT), UT.push(mT)), mT.blockers.length > 0 && this.addMarkers(TT, mT);
        this.glow.setSources(UT)
      }
      addBeams(TT, UT) {
        const [mT, WT, zT] = UT.focus, MT = Tk - .25, gT = (.25 + Tk) / 2;
        for (let nT = 0; nT < 4; nT++) {
          if (!UT.live[nT]) continue;
          const [HT, , kT] = cW[nT], jT = 0 !== HT, lT = {
            positions: [],
            indices: []
          };
          Vc(lT, 0, 0, 0, jT ? MT : .2, .2, jT ? .2 : MT);
          const LT = [mT + .5 + HT * gT, WT + .5, zT + .5 + kT * gT],
            pT = TT.createGameMesh(lT, Gc, LT);
          this.meshes.push(pT), this.beams.push({
            mesh: pT,
            alongX: jT,
            phase: nT * Math.PI / 2
          })
        }
      }
      addMarkers(TT, UT) {
        const mT = UT.blockers[0],
          WT = {
            positions: [],
            indices: []
          };
        for (const [zT, MT, gT] of UT.blockers) Vc(WT, zT - mT[0] + .5, MT - mT[1] + .5, gT - mT[2] + .5, Sc, Sc, Sc);
        this.meshes.push(TT.createGameMesh(WT, Nc, mT))
      }
      clear(TT) {
        for (const UT of this.meshes) TT.disposeGameMesh(UT);
        this.meshes = [], this.beams = []
      }
    }
    const hc = [.56, .83, 1],
      Dc = [1, .73, .08],
      oc = [1, .25, .25],
      Ac = [.85, .85, .85],
      Rc = [.3, .45, .6];

    function Tv(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const gT = zT / 2,
        nT = zT + MT;
      for (const HT of [-gT, gT])
        for (const zT of [-gT, gT]) Vc(TT, UT, mT + HT, WT + zT, nT, MT, MT), Vc(TT, UT + HT, mT, WT + zT, MT, nT, MT), Vc(TT, UT + HT, mT + zT, WT, MT, MT, nT)
    }

    function Uv(TT) {
      return UT => TT.isBlockInLoadedChunk(UT[0], UT[1], UT[2]) && 0 === TT.getBlockId(UT[0], UT[1], UT[2])
    }

    function mv(TT) {
      return TT.map((TT => {
        let {
          free: UT,
          blocked: mT,
          gaps: WT,
          supports: zT
        } = TT;
        return `${UT.join(";")}|${mT.join(";")}|${WT.join(";")}|${zT.join(";")}`
      })).join("/")
    }

    function Wv(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const MT = UT[0],
        gT = {
          positions: [],
          indices: []
        };
      for (const [nT, HT, kT] of UT) Tv(gT, nT - MT[0] + .5, HT - MT[1] + .5, kT - MT[2] + .5, WT, zT);
      return TT.createGameMesh(gT, mT, MT)
    }
    class zv {
      constructor(TT) {
        this.store = TT, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(TT, UT, mT) {
        var WT;
        const zT = null === (WT = TT.RUT(UT)) || void 0 === WT ? void 0 : WT.name;
        if (zT !== kW && zT !== HW) return void("" !== this.shownKey && this.show(TT, "", []));
        const MT = performance.now();
        if (MT - this.lastCheckMs >= 200 && (this.lastCheckMs = MT, zT === kW ? this.check(TT, mT) : this.preview(TT, mT)), this.pulses.length > 0) {
          const UT = 1 + .12 * Math.sin(MT / 1e3 * 1.25 * Math.PI * 2),
            mT = [UT, UT, UT];
          for (const WT of this.pulses) TT.setGameMesh(WT, {
            scale: mT
          })
        }
      }
      dispose(TT) {
        this.clear(TT), this.shownKey = ""
      }
      check(TT, UT) {
        const mT = Uv(TT),
          WT = [];
        for (const {
            entry: MT
          }
          of this.store.colliders()) {
          MT.focus.every(((TT, mT) => Math.abs(TT + .5 - UT[mT]) <= nW.GHOST_REACH)) && WT.push(RH(MT, mT))
        }
        const zT = mv(WT);
        zT !== this.shownKey && this.show(TT, zT, WT)
      }
      preview(TT, UT) {
        const mT = TT.getTargetedBlock(),
          WT = mT ? [mT.NZ[0], mT.NZ[1], mT.NZ[2]] : null,
          zT = null !== WT && WT.every(((TT, mT) => Math.abs(TT + .5 - UT[mT]) <= 8)),
          MT = this.store.site(),
          gT = zT && MT ? function(TT, UT, mT) {
            const WT = ZW(TT);
            if (!WT.every(UT)) return null;
            const zT = iW(TT, mT);
            return {
              column: WT,
              spots: RH({
                focus: WT[1],
                lasers: [!1, !1, !1, !1],
                open: zT,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, UT),
              fits: zT.filter(Boolean).length >= nW.MIN_SPOTS
            }
          }(WT, Uv(TT), MT) : null,
          nT = gT ? [gT.spots] : [],
          HT = gT ? `preview ${WT.join(",")}|${gT.fits}|${mv(nT)}` : "";
        var kT, jT;
        HT !== this.shownKey && this.show(TT, HT, nT, null !== (kT = null === gT || void 0 === gT ? void 0 : gT.column) && void 0 !== kT ? kT : [], null === (jT = null === gT || void 0 === gT ? void 0 : gT.fits) || void 0 === jT || jT)
      }
      show(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(TT), this.shownKey = UT, WT.length > 0 && this.meshes.push(Wv(TT, WT, uc(zT ? Ac : oc)));
        for (const {
            free: MT,
            blocked: gT,
            gaps: nT,
            supports: HT
          }
          of mT) {
          for (const [UT, mT, WT] of MT) {
            const zT = {
              positions: [],
              indices: []
            };
            Tv(zT, 0, 0, 0);
            const MT = TT.createGameMesh(zT, uc(hc), [UT + .5, mT + .5, WT + .5]);
            this.meshes.push(MT), this.pulses.push(MT)
          }
          gT.length > 0 && this.meshes.push(Wv(TT, gT, uc(Dc))), nT.length > 0 && this.meshes.push(Wv(TT, nT, uc(oc), 1.06, .07)), HT.length > 0 && this.meshes.push(Wv(TT, HT, uc(Rc)))
        }
      }
      clear(TT) {
        for (const UT of this.meshes) TT.disposeGameMesh(UT);
        this.meshes = [], this.pulses = []
      }
    }
    class Mv {
      constructor() {
        this.stored = new Map, this.fn = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(TT) {
        if (!TT.baf2TermOpen) return !1;
        TT.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [UT, mT] of TT.baf2TermItems) mT > 0 ? this.stored.set(UT, mT) : this.stored.delete(UT);
        if (TT.baf2TermHeld && (this.fn = new Map(TT.baf2TermHeld)), this.pending = this.pending.filter((UT => UT.seq > TT.baf2TermAcked)), this.silos = TT.baf2TermSilos, this.readOnly = TT.baf2TermReadOnly, this.pocket = !0 === TT.baf2TermPocket, TT.baf2TermReset) this.resort();
        else {
          const TT = new Set(this.order);
          for (const UT of this.stored.keys()) TT.has(UT) || this.order.push(UT)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((TT, UT) => this.amount(UT) - this.amount(TT) || TT.localeCompare(UT))), this.changed()
      }
      take(TT, UT) {
        const mT = nU(TT, this.amount(UT));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: UT,
          amount: mT,
          put: !1
        }), this.recents = [UT, ...this.recents.filter((TT => TT !== UT))].slice(0, 6), this.changed(), mU(this.seq, TT, UT)
      }
      put(TT, UT) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: UT,
          amount: nU(TT, this.heldAmount(UT)),
          put: !0
        }), this.changed(), WU(this.seq, TT, UT)
      }
      putAll() {
        this.seq++;
        for (const TT of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: TT,
          amount: this.heldAmount(TT),
          put: !0
        });
        return this.changed(), zU(this.seq)
      }
      amount(TT) {
        var UT;
        let mT = null !== (UT = this.stored.get(TT)) && void 0 !== UT ? UT : 0;
        for (const WT of this.pending) WT.item === TT && (mT += WT.put ? WT.amount : -WT.amount);
        return Math.max(0, mT)
      }
      heldAmount(TT) {
        var UT;
        let mT = null !== (UT = this.fn.get(TT)) && void 0 !== UT ? UT : 0;
        for (const WT of this.pending) WT.put && WT.item === TT && (mT -= WT.amount);
        return Math.max(0, mT)
      }
      heldItems() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((UT => UT === TT || this.heldAmount(UT) > 0))
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
    var gv = mT(38550);
    const nv = {
      isBlock: TT => void 0 !== aT.g[TT],
      harvestType: TT => {
        var UT;
        return null === (UT = aT.g[TT]) || void 0 === UT ? void 0 : UT.harvestType
      },
      harvestLevel: TT => {
        var UT;
        return null === (UT = aT.g[TT]) || void 0 === UT ? void 0 : UT.harvestLevel
      },
      dropsNothing: TT => {
        var UT;
        return null === (null === (UT = aT.g[TT]) || void 0 === UT ? void 0 : UT.drops)
      },
      displayName: TT => {
        var UT;
        return null === (UT = Rg.n[TT]) || void 0 === UT ? void 0 : UT.displayName
      },
      description: TT => {
        var UT;
        return null === (UT = Rg.n[TT]) || void 0 === UT ? void 0 : UT.description
      },
      harvests: TT => {
        var UT;
        return null === (UT = Rg.n[TT]) || void 0 === UT ? void 0 : UT.harvests
      },
      level: TT => {
        var UT;
        return null === (UT = Rg.n[TT]) || void 0 === UT ? void 0 : UT.level
      }
    };

    function Hv(TT, UT, mT) {
      return function(TT, UT, mT, WT) {
        var zT, MT;
        const gT = UT.split("|")[0],
          nT = TT.isBlock(UT) ? UT : TT.isBlock(gT) ? gT : null;
        if (null === nT || "rock" !== TT.harvestType(nT) || TT.dropsNothing(nT) && !VW.has(gT)) return null;
        const HT = mT && "rock" === TT.harvests(mT) ? null !== (zT = TT.level(mT)) && void 0 !== zT ? zT : 0 : null,
          kT = null !== (MT = null !== WT && void 0 !== WT ? WT : TT.harvestLevel(nT)) && void 0 !== MT ? MT : 0;
        return (null !== HT ? kT <= HT : 0 === TT.harvestLevel(nT)) ? null : dW(TT, kT)
      }(nv, TT, UT, mT)
    }

    function kv(TT, UT) {
      return function(TT, UT, mT) {
        if (UT === xW[0]) return [(0, IT.se)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, IT.R.whiteUiText)];
        const WT = mT.split("|")[0],
          zT = TT.isBlock(WT) ? TT.displayName(WT) : void 0,
          MT = "string" === typeof zT ? zT : zT && "translationKey" in zT ? `$t(${zT.translationKey})` : WT;
        return [(0, IT.se)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: MT
          }
        }, IT.R.whiteUiText), (0, IT.se)({
          translationKey: `item:${(0,IT._e)(UT)}`
        }, IT.R.yellowUiText)]
      }(nv, TT, UT)
    }
    const jv = "buildAFactory2Game:";
    const lv = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Lv(TT) {
      return TT.endsWith(" Ore")
    }
    const pv = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Bv = [],
      Zv = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: pv,
        plan: null,
        atomic: Bv
      },
      cv = "buildAFactory2Game:",
      vv = new Set(["Splitter", "Sorting Gate"]),
      fv = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class qv {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = TT, this.planAt = UT, this.tierOf = mT, this.Gg = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.fn = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Zv, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(TT, UT, mT) {
        var WT, zT, MT;
        let gT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const nT = null !== (WT = null === (zT = TT.RUT(UT)) || void 0 === zT ? void 0 : zT.name) && void 0 !== WT ? WT : null,
          HT = TT.isPlayerCrouching(UT),
          kT = 0 === mT ? null : this.resolve(TT, mT),
          jT = null !== kT && null !== gT && vv.has(kT.rootName) && function(TT, UT) {
            return fv.some((mT => {
              let [WT, zT] = mT;
              const MT = TT.getBlockId(UT[0] + WT, UT[1], UT[2] + zT);
              return 0 !== MT && "Express Belt" === TT.getMetaInfo(MT).rootName
            }))
          }(TT, gT),
          lT = this.updatePlan(0 === mT ? null : gT),
          LT = this.tierOf(),
          pT = null === gT ? null : (0, gv.i)(mT),
          BT = null !== pT && null !== gT && (0, gv.k)(function(TT) {
            return (UT, mT, WT) => TT.getBlockId(UT, mT, WT)
          }(TT), gT[0], gT[1], gT[2], pT),
          ZT = this.readAfloat(TT, mT, gT);
        if (mT === this.Gg && BT === this.missesMaker && ZT === this.afloat && nT === this.fn && HT === this.crouching && jT === this.express && LT === this.tier && !lT && (!this.targetsLive || !this.liveMoved(gT))) return;
        this.Gg = mT, this.missesMaker = BT, this.afloat = ZT, this.fn = nT, this.crouching = HT, this.express = jT;
        const cT = jT && kT ? function(TT) {
          if (null === TT.info) return null;
          return TT.express ??= {
            ...TT.info,
            detail: `${cv}lookKeepsUpExpress`,
            detailItem: null
          }, TT.express
        }(kT) : null !== kT && BT && null !== pT ? this.besideMaker(kT, mT, pT) : null !== kT && ZT ? this.hanging(kT) : null !== (MT = null === kT || void 0 === kT ? void 0 : kT.info) && void 0 !== MT ? MT : null;
        this.tier = LT;
        const vT = kT && cT ? function(TT, UT) {
          var mT, WT;
          const zT = aT.g[TT];
          if (!TT.endsWith(" Ore") || "rock" !== (null === zT || void 0 === zT ? void 0 : zT.harvestType) || 0 === zT.harvestLevel) return null;
          const MT = null !== (mT = zT.harvestLevel) && void 0 !== mT ? mT : 0,
            gT = UT ? Rg.n[UT] : void 0;
          if ("rock" === (null === gT || void 0 === gT ? void 0 : gT.harvests) && (null !== (WT = gT.level) && void 0 !== WT ? WT : 0) >= MT) return null;
          const nT = (HT = MT, dW(nv, HT));
          var HT;
          if (null === nT) return null;
          const kT = WM(nT),
            jT = /^[AEIOU]/.test(nT) ? "An" : "";
          if ("rock" === (null === gT || void 0 === gT ? void 0 : gT.harvests) && UT) return {
            key: `${cv}lookToolTooWeak${jT}`,
            fn: WM(UT),
            needed: kT
          };
          return {
            key: nT === xW[0] ? `${cv}lookNeedAnyPickaxe` : `${cv}lookNeedPickaxe${jT}`,
            fn: null,
            needed: kT
          }
        }(kT.rootName, nT) : null;
        this.targetsLive = !0 === (null === kT || void 0 === kT ? void 0 : kT.live) && null !== gT;
        let fT = null;
        this.targetsLive && kT && gT && this.live && (this.livePos[0] = gT[0], this.livePos[1] = gT[1], this.livePos[2] = gT[2], this.liveVersion = this.live.version(), fT = this.live.line(kT.rootName, gT));
        const qT = null === cT ? pv : function(TT, UT, mT) {
            const WT = function(TT, UT, mT) {
              const WT = Im(TT);
              if (null === WT) return null;
              const zT = `${jv}lookPortMode_${WT}`,
                MT = rW(UT);
              if (MT && mT) return {
                mode: null,
                detail: zT,
                next: `${jv}lookWrenchPickUp`,
                nextState: null
              };
              const gT = Qm(TT),
                nT = null === gT ? null : Im(gT);
              return null === nT ? {
                mode: null,
                detail: zT,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: zT,
                next: MT ? `${jv}lookWrenchNext` : `${jv}lookPortWrench`,
                nextState: `${jv}lookPortState_${nT}`
              }
            }(TT, UT, mT);
            if (null !== WT) return WT;
            const zT = Wz(TT, UT, mT);
            return null === zT.mode && null === zT.next ? pv : zT
          }(TT.blockIdToBlockName(mT), nT, HT),
          iT = this.plan,
          bT = kT && cT ? this.rowsOf(kT.rootName, LT) : Bv,
          OT = this.snapshot;
        if (!(null === cT ? !OT.visible : OT.visible && cT === OT.info && (eT = vT, YT = OT.tool, eT === YT || null !== eT && null !== YT && eT.key === YT.key && eT.fn === YT.fn && eT.needed === YT.needed) && function(TT, UT) {
            return TT === UT || null !== TT && null !== UT && TT.key === UT.key && JSON.stringify([TT.params, TT.keys]) === JSON.stringify([UT.params, UT.keys])
          }(fT, OT.live) && function(TT, UT) {
            return TT.mode === UT.mode && TT.detail === UT.detail && TT.next === UT.next && TT.nextState === UT.nextState
          }(qT, OT.wrench) && oB(iT, OT.plan) && bT === OT.atomic)) {
          var eT, YT;
          this.snapshot = null === cT ? {
            ...OT,
            visible: !1
          } : {
            info: cT,
            visible: !0,
            tool: vT,
            live: fT,
            wrench: qT,
            plan: iT,
            atomic: bT
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Zv, this.Gg = 0, this.fn = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(TT, UT, mT) {
        if (null === mT || 0 === UT || !nT() || !Lv(this.resolve(TT, UT).rootName)) return !1;
        const WT = `${mT[0]},${mT[1]},${mT[2]},${UT}`,
          zT = performance.now();
        return WT === this.afloatKey && zT - this.afloatAt < iv ? this.afloat : (this.afloatKey = WT, this.afloatAt = zT, function(TT, UT) {
          for (const [mT, WT, zT] of lv) {
            const MT = UT(TT[0] + mT, TT[1] + WT, TT[2] + zT);
            if (void 0 === MT || null !== MT && !Lv(MT)) return !1
          }
          return !0
        }(mT, ((UT, mT, WT) => function(TT, UT, mT, WT) {
          if (!TT.isBlockInLoadedChunk(UT, mT, WT)) return;
          const zT = TT.getBlockId(UT, mT, WT);
          return 0 === zT ? null : TT.getMetaInfo(zT).rootName
        }(TT, UT, mT, WT))))
      }
      liveMoved(TT) {
        var UT;
        const {
          livePos: mT
        } = this;
        return null === TT || TT[0] !== mT[0] || TT[1] !== mT[1] || TT[2] !== mT[2] || (null === (UT = this.live) || void 0 === UT ? void 0 : UT.version()) !== this.liveVersion
      }
      updatePlan(TT) {
        const UT = null === TT ? "" : TT.join(","),
          mT = performance.now();
        if (UT === this.planPos && mT - this.planMs < 250) return !1;
        this.planPos = UT, this.planMs = mT;
        const WT = null === TT ? null : this.planAt([TT[0], TT[1], TT[2]]),
          zT = !oB(WT, this.plan);
        return this.plan = WT, zT
      }
      besideMaker(TT, UT, mT) {
        let {
          info: WT
        } = TT;
        if (null === WT) return null;
        let zT = this.besideMakerById.get(UT);
        if (void 0 === zT) {
          const TT = "cryo" === mT ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          zT = {
            ...WT,
            detail: `${cv}${TT}`,
            detailItem: null
          }, this.besideMakerById.set(UT, zT)
        }
        return zT
      }
      hanging(TT) {
        let {
          info: UT,
          rootName: mT
        } = TT;
        if (null === UT) return null;
        let WT = this.afloatByRoot.get(mT);
        return void 0 === WT && (WT = {
          ...UT,
          detail: `${cv}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(mT, WT)), WT
      }
      rowsOf(TT, UT) {
        if (null === UT) return Bv;
        const mT = `${TT}|${UT}`;
        let WT = this.rowsByKey.get(mT);
        if (void 0 === WT) {
          const zT = function(TT, UT) {
            var mT;
            if (!(TT in IU)) return [];
            const WT = null !== (mT = QU[TT]) && void 0 !== mT ? mT : [],
              zT = new Map;
            for (const gT of rM(TT, UT))
              if ((WT.includes(gT) || CM(gT.output) && VM(gT.output) > DT(TT)) && VM(gT.output) <= UT) {
                var MT;
                const TT = null !== (MT = zT.get(gT.output)) && void 0 !== MT ? MT : [];
                TT.push(gT.input), zT.set(gT.output, TT)
              } return SM([...zT], (TT => {
              let [UT] = TT;
              return -VM(UT)
            })).map((TT => {
              let [UT, mT] = TT;
              return {
                output: UT,
                inputs: mT
              }
            }))
          }(TT, UT);
          WT = zT.length > 0 ? zT : Bv, this.rowsByKey.set(mT, WT)
        }
        return WT
      }
      resolve(TT, UT) {
        const {
          rootId: mT,
          rootName: WT
        } = TT.getMetaInfo(UT), zT = (0, Bm.k)(WT) ? UT : mT;
        let MT = this.byRootId.get(zT);
        const gT = nT();
        if (void 0 === MT || MT.nuclear !== gT) {
          var HT;
          const mT = function(TT) {
            return FW(nv, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT)
          }(WT, TT.blockIdToBlockName(UT));
          MT = {
            info: mT,
            rootName: WT,
            live: null !== mT && !0 === (null === (HT = this.live) || void 0 === HT ? void 0 : HT.handles(WT)),
            nuclear: gT
          }, this.byRootId.set(zT, MT)
        }
        return MT
      }
    }
    const iv = 500;
    const bv = (0, WT.memo)((function(TT) {
      var UT, mT;
      let {
        store: zT
      } = TT;
      const {
        t: MT
      } = (0, dz.z)(), [gT, nT] = (0, WT.useState)((() => zT.get()));
      (0, WT.useEffect)((() => (nT(zT.get()), zT.subscribe((() => {
        nT(zT.get())
      })))), [zT]);
      const {
        openInGameMenuName: HT,
        openEverythingMenuName: kT,
        isTouchScreen: jT
      } = (0, iz.h)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: lT,
        tool: LT,
        live: pT,
        wrench: BT,
        atomic: ZT
      } = gT, cT = gT.visible && null === HT && null === kT;
      if (null === lT) return null;
      const vT = null !== BT.detail ? MT(BT.detail) : null !== (UT = gT.plan) && void 0 !== UT && UT.ctrl ? MT("buildAFactory2Game:lookPlanCtrl") : null !== lT.detail ? MT(lT.detail, null === lT.detailItem ? void 0 : {
        item: MT(lT.detailItem)
      }) : null;
      return (0, JM.jsxs)("div", {
        className: ez()("Baf2LookTarget", {
          Visible: cT
        }),
        "aria-hidden": !cT,
        children: [(0, JM.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: MT(lT.name)
        }), null !== gT.plan && (0, JM.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: MT(gT.plan.key, {
            kind: MT(gT.plan.kindKey),
            w: String(gT.plan.w),
            h: String(gT.plan.h),
            d: String(gT.plan.d),
            count: String(gT.plan.count)
          })
        }), void 0 !== (null === (mT = gT.plan) || void 0 === mT ? void 0 : mT.why) && (0, JM.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: MT(gT.plan.why)
        }), null !== BT.mode && (0, JM.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: MT(BT.mode)
        }), null !== LT ? (0, JM.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: MT(LT.key, {
            item: MT(LT.needed),
            fn: null === LT.fn ? "" : MT(LT.fn)
          })
        }) : null !== pT ? (0, JM.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: MT(pT.key, gk(MT, pT))
        }) : null !== vT && (0, JM.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: vT
        }), ZT.length > 0 && (0, JM.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: MT("buildAFactory2Game:lookAtomicRecipes", {
            list: ZT.map((TT => {
              let {
                output: UT,
                inputs: mT
              } = TT;
              const WT = mT.length > 1 ? ` ${MT("buildAFactory2Game:recipeMore",{count:String(mT.length-1)})}` : "";
              return `${MT(WM(mT[0]))}${WT} \u2192 ${MT(WM(UT))}`
            })).join(", ")
          })
        }), null !== BT.next && (0, JM.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: MT(BT.next, {
            state: null === BT.nextState ? "" : MT(BT.nextState),
            use: MT(jT ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Ov = mT(38658);
    const ev = [],
      Yv = [
        [0, -1, 0]
      ];

    function Jv(TT) {
      const UT = [TT];
      for (let mT = 1; mT <= 4; mT++) mT > 1 && UT.push(`${TT}|meta|rot${mT}`), UT.push(`${TT}|meta|rot${mT}|Running`);
      return UT
    }

    function xv(TT, UT) {
      return [Math.floor(TT[0] / UT), Math.floor(TT[1] / UT), Math.floor(TT[2] / UT)]
    }

    function dv(TT, UT, mT) {
      return `${TT},${UT},${mT}`
    }

    function wv(TT) {
      const UT = TT.split("|")[0];
      if (!km(UT)) return ev;
      const mT = IU[UT];
      if (Um(mT)) return Yv;
      const WT = xc(TT);
      return mm(mT) ? [
        [-WT[0], -WT[1], -WT[2]]
      ] : Yz(mT) ? function(TT, UT) {
        const mT = TT[0] - 2 * UT[0],
          WT = TT[2] - 2 * UT[2],
          zT = [];
        for (let MT = -1; MT <= 1; MT++)
          for (let UT = -1; UT <= 1; UT++) zT.push([mT + MT, TT[1], WT + UT]);
        return zT
      }([0, 0, 0], WT) : ev
    }
    const tv = [.5, .5, .5],
      av = [.2, .8, .3],
      yv = [.45, 1, .5];
    class Xv {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(TT) {
        this.indexed = !0;
        for (const UT of dU)
          for (const mT of Jv(UT)) {
            const UT = TT.blockNameToBlockId(mT, !0),
              WT = wv(mT);
            null !== UT && WT.length > 0 && (this.offsetsList.push(WT), this.offsetsIndexById[UT] = this.offsetsList.length)
          }
      }
      onAfterRender(TT, UT) {
        this.indexed || this.index(TT);
        const mT = performance.now();
        if (mT - this.lastCheckMs < 100) return;
        this.lastCheckMs = mT, this.checks++;
        const WT = fB.f.cB,
          [zT, MT, gT] = xv(UT, WT);
        let nT = !1;
        const HT = [];
        let kT = 0;
        for (let jT = zT - 2; jT <= zT + 2; jT++)
          for (let UT = MT - 1; UT <= MT + 1; UT++)
            for (let zT = gT - 2; zT <= gT + 2; zT++) {
              const MT = kT++,
                gT = dv(jT, UT, zT),
                lT = TT.getChunkVersion(jT, UT, zT);
              let LT = this.chunks.get(gT);
              null !== lT ? (LT || (LT = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(gT, LT)), LT.seenAt = this.checks, LT.checkedVersion !== lT && (LT.checkedVersion = lT, nT = !0), LT.scannedVersion !== lT && mT - LT.scannedAt >= 500 && HT.push({
                slot: MT,
                entry: LT,
                origin: [jT * WT, UT * WT, zT * WT]
              })) : (nT ||= void 0 !== LT, this.chunks.delete(gT))
            }
        this.scanDue(TT, HT) && (nT = !0);
        for (const [jT, lT] of this.chunks) lT.seenAt !== this.checks && (nT ||= lT.machines.length > 0, this.chunks.delete(jT));
        for (const jT of this.chunks.values())
          for (const [UT, mT, WT] of jT.cellChunks)(Math.abs(UT - zT) > 2 || Math.abs(mT - MT) > 1 || Math.abs(WT - gT) > 2) && this.watchCellChunk(TT, UT, mT, WT) && (nT = !0);
        for (const [jT, lT] of this.cellChunks) lT.seenAt !== this.checks && this.cellChunks.delete(jT);
        nT && this.refresh(TT)
      }
      dispose(TT) {
        this.clearMeshes(TT), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(TT, UT) {
        const mT = Math.max(UT.findIndex((TT => {
          let {
            slot: UT
          } = TT;
          return UT >= this.scanFrom
        })), 0);
        let WT = 96;
        for (let zT = 0; zT < UT.length; zT++) {
          const {
            slot: MT,
            entry: gT,
            origin: nT
          } = UT[(mT + zT) % UT.length];
          if (WT -= this.scan(TT, gT, nT), WT <= 0) {
            this.scanFrom = MT + 1;
            break
          }
        }
        return UT.length > 0
      }
      scan(TT, UT, mT) {
        let [WT, zT, MT] = mT;
        const gT = fB.f.cB,
          nT = this.hits;
        nT.length = 0;
        const HT = TT.scanBlocks(WT, zT, MT, WT + gT, zT + gT, MT + gT, this.offsetsIndexById, nT),
          kT = [];
        for (let jT = 0; jT < nT.length; jT += 4) kT.push({
          pos: [nT[jT], nT[jT + 1], nT[jT + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[nT[jT + 3]] - 1]
        });
        return UT.machines = kT, UT.cellChunks = function(TT, UT) {
          const mT = new Set,
            WT = [];
          for (const {
              pos: zT,
              offsets: MT
            }
            of TT)
            for (const [TT, gT, nT] of MT) {
              const MT = xv([zT[0] + TT, zT[1] + gT, zT[2] + nT], UT),
                HT = dv(...MT);
              mT.has(HT) || (mT.add(HT), WT.push(MT))
            }
          return WT
        }(kT, gT), UT.scannedVersion = UT.checkedVersion, UT.scannedAt = performance.now(), Math.max(HT, 1)
      }
      watchCellChunk(TT, UT, mT, WT) {
        const zT = dv(UT, mT, WT),
          MT = TT.getChunkVersion(UT, mT, WT),
          gT = this.cellChunks.get(zT);
        return null === MT ? this.cellChunks.delete(zT) : (null === gT || void 0 === gT ? void 0 : gT.version) === MT ? (gT.seenAt = this.checks, !1) : (this.cellChunks.set(zT, {
          version: MT,
          seenAt: this.checks
        }), !0)
      }
      refresh(TT) {
        const UT = function(TT, UT) {
            const mT = new Set,
              WT = [];
            for (const {
                pos: zT,
                offsets: MT
              }
              of TT)
              for (const [TT, gT, nT] of MT) {
                const MT = zT[0] + TT,
                  HT = zT[1] + gT,
                  kT = zT[2] + nT,
                  jT = `${MT},${HT},${kT}`;
                mT.has(jT) || (mT.add(jT), UT(MT, HT, kT) && WT.push([MT, HT, kT]))
              }
            return WT
          }([...this.chunks.values()].flatMap((TT => TT.machines)), ((UT, mT, WT) => TT.isBlockInLoadedChunk(UT, mT, WT) && 0 === TT.getBlockId(UT, mT, WT))),
          mT = UT.join(";");
        mT !== this.shownKey && (this.shownKey = mT, this.clearMeshes(TT), UT.length > 0 && (this.meshes = [this.build(TT, UT, !1), this.build(TT, UT, !0)]))
      }
      build(TT, UT, mT) {
        const WT = UT[0],
          zT = [],
          MT = [];
        for (const [gT, nT, HT] of UT)(0, Ov.c)(zT, MT, [gT - WT[0] + .5, nT - WT[1] + .5, HT - WT[2] + .5], tv, mT);
        return TT.createGameMesh({
          positions: zT,
          indices: MT
        }, {
          rgb: mT ? yv : av,
          alpha: .4
        }, WT)
      }
      clearMeshes(TT) {
        for (const UT of this.meshes) TT.disposeGameMesh(UT);
        this.meshes = []
      }
    }
    const Iv = 1 / .6,
      Qv = 200,
      sv = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Fv = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Pv = 2 * Math.PI / 3;
    class Vv {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sv;
        this.style = TT, this.particles = null, this.points = new Float32Array(800), this.budget = Qv, this.lastMs = 0
      }
      static blade() {
        return new Vv(Fv)
      }
      LO(TT, UT) {
        const mT = Math.min(UT.arcStruck, UT.arcPoints.length);
        this.draw(TT, [UT.arcFrom, ...UT.arcPoints], UT.arcPoints.slice(0, mT))
      }
      onBlade(TT, UT) {
        const [mT, WT, zT] = UT.bladeCentre, [MT, gT] = UT.bladeFacing, nT = mT - 1.5 * MT, HT = zT - 1.5 * gT, kT = Math.atan2(gT, MT), jT = [];
        for (let lT = 0; lT <= 8; lT++) {
          const TT = kT - Pv / 2 + Pv * lT / 8;
          jT.push([nT + 2.5 * Math.cos(TT), WT, HT + 2.5 * Math.sin(TT)])
        }
        this.draw(TT, jT, UT.bladeStruck)
      }
      dispose() {
        var TT;
        null === (TT = this.particles) || void 0 === TT || TT.stop(), this.particles = null
      }
      draw(TT, UT, mT) {
        if (!TT.particlesEnabled() || UT.length < 2) return;
        const WT = performance.now();
        this.budget = Math.min(Qv, this.budget + (WT - this.lastMs) / 1e3 * Qv), this.lastMs = WT;
        const zT = [];
        let MT = 0,
          gT = UT[0];
        for (const vT of UT.slice(1)) {
          const TT = Math.min(48, Math.round(Math.hypot(vT[0] - gT[0], vT[1] - gT[1], vT[2] - gT[2]) * this.style.perBlock));
          zT.push([gT, vT, TT]), MT += TT, gT = vT
        }
        const nT = mT.length;
        MT += 10 * nT;
        const HT = MT > this.budget ? this.budget / MT : 1;
        if (0 === MT || HT * MT < 1) return;
        const kT = UT[0],
          [jT, lT, LT] = kT,
          pT = this.points;
        let BT = 0;
        const ZT = (TT, UT, mT, WT) => {
          const zT = 4 * BT;
          pT[zT] = TT - jT, pT[zT + 1] = UT - lT, pT[zT + 2] = mT - LT, pT[zT + 3] = WT, BT++
        };
        zT.forEach(((TT, UT) => {
          let [mT, WT, zT] = TT;
          const MT = Math.min(Math.floor(zT * HT), Qv - BT),
            gT = Math.hypot(WT[0] - mT[0], WT[1] - mT[1], WT[2] - mT[2]),
            nT = 0 === UT && gT > 0 ? Math.min(.5, .1 * gT) / gT : 0;
          for (let HT = 0; HT < MT; HT++) {
            const TT = nT + (HT + .5) / MT * (1 - nT);
            ZT(mT[0] + (WT[0] - mT[0]) * TT, mT[1] + (WT[1] - mT[1]) * TT, mT[2] + (WT[2] - mT[2]) * TT, .15)
          }
        }));
        const cT = Math.floor(10 * HT);
        for (let vT = 0; vT < nT; vT++) {
          const [TT, UT, WT] = mT[vT];
          for (let mT = 0; mT < cT && BT < Qv; mT++) ZT(TT, UT, WT, 2.5)
        }
        this.budget -= BT, this.particles ??= TT.createParticles(function(TT) {
          const [UT, mT] = TT.colours;
          return {
            texture: "square_particle",
            fl: 400,
            minLifeTime: TT.life[0] / Iv,
            maxLifeTime: TT.life[1] / Iv,
            minSize: TT.size[0],
            maxSize: TT.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [UT[0], UT[1], UT[2], 1],
              maxColor: [mT[0], mT[1], mT[2], 1]
            }, {
              timeFraction: 1,
              minColor: [UT[0], UT[1], UT[2], 0],
              maxColor: [mT[0], mT[1], mT[2], 0]
            }],
            blendMode: Fn.e.Add
          }
        }(this.style), {
          pos: kT
        }), this.particles.emitPoints(kT, pT, BT)
      }
    }
    const uv = new Set(["Sky Spring"]);

    function Cv(TT, UT, mT) {
      const WT = TT.split("|")[0];
      return "Air" !== UT || mT || ! function(TT) {
        const UT = TT.split("|")[0];
        return void 0 !== gm[UT] || uv.has(UT)
      }(WT) ? null : TT
    }
    class rv {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(TT) {
        const UT = TT - this.lastTapAt >= 300;
        return this.lastTapAt = TT, UT
      }
    }
    class Kv {
      constructor() {
        this.presses = new rv, this.predicted = null
      }
      tap(TT, UT) {
        const mT = this.presses.isNewPress(UT);
        return mT && (this.predicted = {
          station: TT,
          at: UT
        }), mT
      }
      consumeServerOpen(TT, UT) {
        const mT = this.predicted;
        return !(null === mT || mT.station !== TT || UT - mT.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Sv {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(TT, UT) {
        return TT && (this.thrustAt = UT), UT - this.thrustAt < 200
      }
    }
    const Gv = [.1, .05, .1],
      Nv = {
        texture: "effect_5",
        fl: Math.ceil(48),
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
        blendMode: Fn.e.OneOne
      };
    class Ev {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Sv, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      LO(TT, UT) {
        for (const [mT, WT] of UT.baf2JetFlames) TT.isLocalPlayer(mT) || (WT ? this.lit.add(mT) : this.lit.delete(mT))
      }
      onAfterRender(TT, UT) {
        const mT = performance.now(),
          WT = this.hold.lit(this.selfThrusting(TT, UT), mT);
        for (const [zT, MT] of this.flames)(zT === UT ? WT : this.lit.has(zT)) || this.setEmitting(MT, !1), zT === UT || TT.getPositionView(zT) ? !MT.emitting && mT - MT.offAt >= 1300 && (MT.particles.stop(), this.flames.delete(zT)) : (MT.particles.dispose(), this.flames.delete(zT), this.lit.delete(zT));
        WT && this.draw(TT, UT, UT);
        for (const zT of this.lit) this.draw(TT, UT, zT)
      }
      dispose() {
        for (const TT of this.flames.values()) TT.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(TT, UT) {
        var mT;
        const WT = TT.getLocalPlayerMovement();
        return !!WT && (null !== (zT = {
          option: null !== (mT = TT.getClientOption(UT, "jumpHoldThrust")) && void 0 !== mT ? mT : null,
          jumping: WT.jumpHeld,
          onGround: WT.onGround,
          alive: TT.isAlive(UT)
        }).option && zT.option.maxUpSpeed >= 0 && zT.jumping && !zT.onGround && zT.alive);
        var zT
      }
      draw(TT, UT, mT) {
        var WT, zT;
        const MT = this.pos;
        if (!TT.readDrawnPosition(mT, MT)) return;
        const gT = TT.readDrawnPosition(UT, this.camera) ? this.camera : MT;
        if (!((MT[0] - gT[0]) ** 2 + (MT[1] - gT[1]) ** 2 + (MT[2] - gT[2]) ** 2 < 1600) || !TT.particlesEnabled()) {
          const TT = this.flames.get(mT);
          return void(TT && this.setEmitting(TT, !1))
        }
        const nT = null !== (WT = this.flames.get(mT)) && void 0 !== WT ? WT : this.create(TT, mT, MT),
          HT = null !== (zT = TT.getDrawnHeading(mT)) && void 0 !== zT ? zT : 0,
          kT = this.at;
        kT[0] = MT[0] - .35 * Math.sin(HT), kT[1] = MT[1] + 1.05, kT[2] = MT[2] - .35 * Math.cos(HT), nT.particles.moveTo(kT), this.setEmitting(nT, !0)
      }
      setEmitting(TT, UT) {
        TT.emitting !== UT && (TT.emitting = UT, UT || (TT.offAt = performance.now()), TT.particles.setEmitRate(UT ? 60 : 0))
      }
      create(TT, UT, mT) {
        const WT = {
          particles: TT.createParticles(Nv, {
            pos: mT,
            half: Gv
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(UT, WT), WT
      }
    }

    function hv(TT) {
      return "Reactor Frame" === zW("reactor", TT)
    }

    function Dv(TT) {
      return Vm("reactor", TT) && !hv(TT) && (TT.startsWith("Reactor Glass") || TT.startsWith("Reactor Port"))
    }
    const ov = "baf2Goal";
    class Av {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Iz.j.subscribe("setDirectionArrow", (TT => {
          let {
            id: UT,
            position: mT
          } = TT;
          UT === ov && (this.goal = mT, this.checkedAt = -1 / 0)
        })), Iz.j.subscribe("clearDirectionArrow", (TT => {
          let {
            id: UT
          } = TT;
          null !== UT && UT !== ov || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const TT of this.subs) Iz.j.unsubscribe(TT)
      }
      sideOf(TT, UT, mT, WT) {
        const zT = this.goal;
        if (!zT) return 0;
        mT - this.checkedAt > 1e3 && (this.checkedAt = mT, this.open = function(TT, UT) {
          const [mT, WT, zT] = TT.map(Math.floor);
          if (!Dv(UT(mT, WT, zT))) return null;
          for (const [MT, gT] of [
              [1, 0],
              [0, 1]
            ]) {
            const TT = UT(mT + MT, WT, zT + gT),
              nT = UT(mT - MT, WT, zT - gT);
            if (hv(nT) && Dv(TT)) return [MT, 0, gT];
            if (hv(TT) && Dv(nT)) return [0 - MT, 0, 0 - gT]
          }
          return null
        }(zT, ((UT, mT, WT) => TT.blockIdToBlockName(TT.getBlockId(UT, mT, WT)))));
        const MT = this.open;
        if (!MT) return 0;
        const gT = WT(zT);
        if (Math.abs(gT.x - UT.x) > .05 || Math.abs(gT.y - UT.y) > .05) return 0;
        const nT = WT([zT[0] + MT[0], zT[1], zT[2] + MT[2]]).x - gT.x;
        return Math.abs(nT) < .3 ? 0 : nT > 0 ? 1 : -1
      }
    }
    class Rv {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new Av, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.kB = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.Qq = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((TT => {
          for (const UT of TT) UT.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(UT.target, UT.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.kB || this.clear()
        }, window.addEventListener("resize", this.Qq)
      }
      onAfterRender(TT, UT) {
        var mT;
        this.api = TT, this.project = null !== (mT = null === UT || void 0 === UT ? void 0 : UT.projectWorldPosToScreenPos) && void 0 !== mT ? mT : null, this.queued || this.kB || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.kB = !0;
        for (const TT of this.moved.keys()) TT.style.transform = "";
        this.moved.clear();
        for (const TT of this.sideLabels.keys()) TT.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.Qq)
      }
      clear() {
        for (const MT of this.moved.keys()) MT.isConnected || this.moved.delete(MT);
        for (const MT of this.sideLabels.keys()) MT.isConnected || this.sideLabels.delete(MT);
        if (0 === this.arrows.length) return;
        const TT = performance.now(),
          UT = TT - this.refreshedAt > 1e3;
        UT && (this.refreshedAt = TT, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const mT = this.trackerBox(),
          WT = this.barsBox(),
          zT = this.toastBox(UT);
        (mT || WT || zT) && UT && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let MT = 0; MT < this.arrows.length; MT++) {
          const UT = this.arrows[MT];
          this.labelOffsets.set(UT, this.runLabelAside(UT, TT));
          const gT = (mT ? this.shiftLeftOf(UT, mT) : 0) || this.shiftOnScreen(UT),
            nT = Math.min(WT ? this.liftAbove(UT, WT, gT) : 0, zT ? this.liftAbove(UT, zT, gT) : 0),
            HT = this.moved.get(UT);
          if (0 !== gT || 0 !== nT) {
            const TT = 0 === nT ? `translateX(${gT}px)` : `translate(${gT}px, ${nT}px)`;
            HT !== TT && (UT.style.transform = TT, this.moved.set(UT, TT))
          } else void 0 !== HT && (UT.style.transform = "", this.moved.delete(UT))
        }
      }
      trackerBox() {
        var TT, UT;
        const mT = null !== (TT = this.tracker) && void 0 !== TT && TT.isConnected ? this.tracker : null !== (UT = this.trackers[0]) && void 0 !== UT ? UT : null;
        if (mT !== this.tracker && this.watch(mT), this.boxStale && mT) {
          var WT, zT, MT;
          this.boxStale = !1;
          const TT = mT.closest(".NoRoom") ? null : mT.getBoundingClientRect(),
            UT = TT && TT.width > 0 ? null === (WT = this.hud) || void 0 === WT ? void 0 : WT.getBoundingClientRect() : void 0,
            gT = TT && UT ? Math.max(TT.top, UT.top) : null !== (zT = null === TT || void 0 === TT ? void 0 : TT.top) && void 0 !== zT ? zT : 0,
            nT = TT && UT ? Math.min(TT.bottom, UT.bottom) : null !== (MT = null === TT || void 0 === TT ? void 0 : TT.bottom) && void 0 !== MT ? MT : 0;
          this.box = TT && TT.width > 0 && nT > gT ? {
            left: TT.left,
            top: gT,
            right: TT.right,
            bottom: nT
          } : null
        }
        return mT ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var TT;
          this.barsStale = !1;
          const UT = null === (TT = this.statBars[0]) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
          this.bars = UT && UT.width > 0 && UT.height > 0 ? {
            left: UT.left,
            top: UT.top,
            right: UT.right,
            bottom: UT.bottom
          } : null
        }
        return this.bars
      }
      toastBox(TT) {
        var UT;
        const mT = null !== (UT = this.toasts[0]) && void 0 !== UT ? UT : null;
        if (mT !== this.toastEl || TT && mT) {
          this.toastEl = mT;
          const TT = null === mT || void 0 === mT ? void 0 : mT.getBoundingClientRect();
          this.toast = TT && TT.width > 0 && TT.height > 0 ? {
            left: TT.left,
            top: TT.top,
            right: TT.right,
            bottom: TT.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(TT, UT, mT) {
        var WT;
        const zT = this.anchorOf(TT);
        if (!zT) return 0;
        const MT = zT.x + mT + (null !== (WT = this.labelOffsets.get(TT)) && void 0 !== WT ? WT : 0),
          {
            halfWidth: gT,
            labelled: nT
          } = this.extentOf(TT),
          HT = zT.y + this.em * (nT ? 6.2 : 3);
        return HT < UT.top - 6 || MT + gT < UT.left - 6 || MT - gT > UT.right + 6 ? 0 : UT.top - 6 - HT
      }
      watch(TT) {
        var UT, mT;
        this.tracker && this.sizes.unobserve(this.tracker), null === (UT = this.hud) || void 0 === UT || UT.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = TT, this.hud = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.closest(".Baf2QuestHud")) && void 0 !== mT ? mT : null, this.box = null, this.boxStale = !0, TT && this.sizes.observe(TT), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(TT, UT) {
        var mT;
        const WT = this.anchorOf(TT);
        if (!WT) return 0;
        const {
          y: zT
        } = WT, MT = WT.x + (null !== (mT = this.labelOffsets.get(TT)) && void 0 !== mT ? mT : 0), gT = this.em, {
          halfWidth: nT,
          labelled: HT
        } = this.extentOf(TT), kT = zT - gT, jT = MT + nT;
        return zT + gT * (HT ? 6.2 : 3) < UT.top || kT > UT.bottom || jT < UT.left - 6 || MT - nT > UT.right ? 0 : Math.max(UT.left - 6 - jT, 6 - (MT - nT))
      }
      shiftOnScreen(TT) {
        var UT;
        const mT = this.anchorOf(TT);
        if (!mT) return 0;
        const {
          halfWidth: WT
        } = this.extentOf(TT), zT = mT.x + (null !== (UT = this.labelOffsets.get(TT)) && void 0 !== UT ? UT : 0), MT = zT + WT - (this.innerWidth - 6);
        return MT > 0 ? -MT : Math.max(0, 6 - (zT - WT))
      }
      runLabelAside(TT, UT) {
        var mT;
        let WT = null;
        for (let gT = 0; gT < TT.children.length; gT++) TT.children[gT].classList.contains("DirectionArrowLabel") && (WT = TT.children[gT]);
        if (!WT) return 0;
        const zT = TT.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(TT) : null,
          MT = (zT && this.api ? this.side.sideOf(this.api, {
            x: zT.x / this.innerWidth * 100,
            y: zT.y / this.innerHeight * 100
          }, UT, this.project) : 0) * this.halfWidthOf(WT);
        return MT !== (null !== (mT = this.sideLabels.get(WT)) && void 0 !== mT ? mT : 0) && (WT.style.transform = 0 === MT ? "" : `translateX(-50%) translateX(${MT}px)`, 0 === MT ? this.sideLabels.delete(WT) : this.sideLabels.set(WT, MT)), MT
      }
      extentOf(TT) {
        let UT = this.em,
          mT = !1;
        for (let WT = 0; WT < TT.children.length; WT++) {
          const zT = TT.children[WT],
            MT = zT.classList.contains("DirectionArrowLabel");
          mT ||= MT, (MT || zT.classList.contains("DirectionArrowDistance")) && (UT = Math.max(UT, this.halfWidthOf(zT)))
        }
        return {
          halfWidth: UT,
          labelled: mT
        }
      }
      halfWidthOf(TT) {
        let UT = this.halfWidths.get(TT);
        return void 0 === UT && (UT = TT.offsetWidth / 2, this.halfWidths.set(TT, UT), this.sizes.observe(TT), this.labels.add(TT)), UT
      }
      forgetGoneLabels() {
        for (const TT of this.labels) TT.isConnected || (this.sizes.unobserve(TT), this.halfWidths.delete(TT), this.labels.delete(TT))
      }
      anchorOf(TT) {
        const UT = TT.style.translate,
          mT = this.anchors.get(TT);
        if (mT && mT.translate === UT && mT.innerWidth === this.innerWidth && mT.innerHeight === this.innerHeight) return mT;
        const WT = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(UT);
        if (!WT) return null;
        const zT = {
          translate: UT,
          x: parseFloat(WT[1]) / 100 * this.innerWidth,
          y: parseFloat(WT[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(TT, zT), zT
      }
    }
    const Tf = "Baf2ArrowText";

    function Uf(TT, UT) {
      const mT = TT.rows.find((TT => TT.current));
      return XT(TT.tutorial) && null !== mT && void 0 !== mT && mT.item && Sz(mT) && wT(mT.item).includes(UT) ? mT.item : null
    }
    const mf = new class {
      constructor(TT) {
        this.select = TT, this.picks = new Map
      }
      open(TT, UT, mT) {
        const WT = Uf(UT, TT);
        null !== WT && this.VL(TT, WT, mT)
      }
      follow(TT, UT) {
        if (nT())
          for (const [mT, {
              item: WT,
              had: zT
            }] of this.picks) {
            const MT = Uf(TT, mT);
            MT !== WT && (null !== MT && UT(WT) > zT ? this.VL(mT, MT, UT) : this.picks.delete(mT))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      VL(TT, UT, mT) {
        this.picks.set(TT, {
          item: UT,
          had: mT(UT)
        }), this.select(TT, UT)
      }
    }(Qz.p);

    function Wf(TT) {
      return UT => {
        let mT = 0;
        for (const WT of TT.getInventoryItems())(null === WT || void 0 === WT ? void 0 : WT.name) === UT && (mT += null === WT.amount ? 1 : Math.max(WT.amount, 0));
        return mT
      }
    }

    function zf(TT, UT, mT, WT) {
      TT.getClientOption(UT, "canCraft") && "inventory" !== iz.b.get("openInGameMenuName") && (mf.open(mT, WT.get(), Wf(TT)), Iz.j.EZ("toggleMenu", `inventory|${mT}`))
    }
    let Mf = null,
      gf = !1;

    function nf(TT) {
      const UT = YM();
      TT === Mf && UT === gf || (Mf = TT, gf = UT, (0, Qz.q)(function(TT, UT) {
        const mT = new Map;
        for (let WT = TT + 1; WT <= zT.length; WT++) {
          const zT = GM(WT, TT, UT);
          if (zT)
            for (const UT of vT(WT).unlocks) mT.set(UT, {
              ...zT,
              stepsAway: WT - TT
            })
        }
        return mT
      }(TT, UT)))
    }

    function Hf() {
      return TT = () => {
        null !== Mf && nf(Mf)
      }, (0, OM.k)(eM, TT);
      var TT
    }

    function kf() {
      return (0, Qz.w)(SM(Object.keys(dT), VM)), () => {
        (0, Qz.w)([])
      }
    }

    function jf(TT, UT, mT) {
      var WT, zT;
      const MT = TT.getTargetedBlock();
      if (!MT || ! function(TT, UT, mT) {
          if ("Chest" !== UT) return !1;
          const WT = TT.split("|")[0];
          if (!km(WT) || 0 === IU[WT].outputSlots.length) return !1;
          const zT = xc(TT);
          return mT[0] === zT[0] && mT[1] === zT[1] && mT[2] === zT[2]
        }(mT, null === (WT = TT.RUT(UT)) || void 0 === WT ? void 0 : WT.name, MT.normal)) return !1;
      const [gT, nT, HT] = MT.NZ, kT = TT.getBlockId(gT, nT, HT);
      return 0 === kT || !0 === (null === (zT = aT.g[kT]) || void 0 === zT ? void 0 : zT.canBePlacedOver)
    }
    var lf = mT(36855);
    const Lf = new Set(Zm.c);
    class pf {
      constructor(TT) {
        this.toasts = TT, this.lastAt = -1 / 0
      }
      onAltAction(TT, UT, mT) {
        const WT = TT.getTargetedBlock();
        if (!WT || function(TT) {
            const UT = TT.split("|")[0];
            return km(UT) || null !== YW(UT) || JT(UT) || Zm.c.includes(UT)
          }(mT) && !Lf.has(mT.split("|")[0])) return;
        const zT = TT.RUT(UT);
        if (!zT || !Lf.has(zT.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const MT = zT.typeObj.id,
          [gT, nT, HT] = WT.NZ,
          kT = TT.getBlockId(gT, nT, HT),
          jT = aT.g[kT];
        (0 === kT || null !== jT && void 0 !== jT && jT.RL || null !== jT && void 0 !== jT && jT.canBePlacedOver) && TT.isSolidToPlayerBlockId(MT) && TT.canModifyBlockAt(gT, nT, HT) && TT.fUT(gT, nT, HT, MT) && !TT.fUT(gT, nT, HT, MT, UT) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, IT.se)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, IT.R.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Bf {
      constructor(TT) {
        this.show = TT, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(TT, UT, mT) {
        var WT;
        if (!UT) return this.started = null, void this.gatedThisHold.clear();
        if (!TT) return void(this.started = null);
        const zT = `${TT.x},${TT.y},${TT.z},${TT.fn}`;
        if (zT === this.started) return;
        this.started = zT;
        const MT = PW(TT.y) ? Hv(TT.block, TT.fn, TT.level) : null;
        if (null === MT || this.gatedThisHold.has(zT)) return;
        this.gatedThisHold.add(zT);
        const gT = TT.block.split("|")[0];
        mT - (null !== (WT = this.hintedAt.get(gT)) && void 0 !== WT ? WT : -1 / 0) < 5e3 || (this.hintedAt.set(gT, mT), this.show({
          baf2ToastText: kv(MT, TT.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var Zf = mT(44);

    function vf(TT, UT) {
      const mT = [...TT.baf2CoreBankPaused];
      for (const [zT] of TT.baf2CoreBanked) mT.push(zT);
      for (const gT of zT) {
        for (const {
            item: TT
          }
          of gT.cost) mT.push(TT);
        for (const TT of gT.newDeposits) mT.push(TT.block);
        for (const TT of gT.unlocks) mT.push(TT, tT(TT));
        gT.reward && mT.push(gT.reward);
        for (const {
            item: TT
          }
          of null !== (WT = null === (MT = gT.charge) || void 0 === MT ? void 0 : MT.items) && void 0 !== WT ? WT : []) {
          var WT, MT;
          mT.push(TT)
        }
      }
      return {
        message: TT,
        itemNames: UT([...new Set(mT)])
      }
    }
    const ff = "baf2MultiblockGuide";
    const qf = new Map;
    const bf = function(TT, UT, mT, zT) {
      let {
        localPlayerId: MT
      } = zT;
      const gT = new vn,
        nT = new Hp,
        kT = new Zp,
        jT = new pp(kT),
        lT = (TT, UT) => {
          UT ? jT.observe(TT) : jT.unobserve(TT)
        },
        LT = new Lp,
        pT = new vp(lT),
        BT = TT => pT.covers(TT),
        ZT = new Fp;
      let cT;
      const vT = new Vg((TT => {
          cT.sendCommand(TT)
        })),
        fT = () => {
          vT.send("baf2questbook")
        },
        qT = TT => function(TT, UT, mT) {
          const WT = {};
          for (const zT of mT) {
            let mT = qf.get(zT);
            void 0 === mT && (mT = TT.getItemStat(UT, zT, "displayName"), qf.set(zT, mT)), WT[zT] = mT
          }
          return WT
        }(cT, MT, TT),
        iT = new Vz(fT),
        bT = new Dp((() => iz.b.get("loadingOverlayVisible"))),
        OT = new tj(vT, iT, bT),
        eT = new UB,
        YT = new pf(bT),
        xT = new Bf((TT => {
          bT.show(TT, TT.baf2ToastMs)
        })),
        dT = new jB(lT),
        wT = new sc(dT),
        tT = new Yg,
        yT = new Mv,
        XT = new mn,
        sT = new vB({
          read: () => !1 !== Zf.l.getItem(ff),
          write: TT => {
            Zf.l.setItem(ff, TT)
          }
        }),
        FT = new SB(sT),
        PT = new EB(sT),
        VT = new ZZ(sT, (TT => function(TT, UT) {
          const mT = mH(UT.w, UT.h, UT.d),
            WT = new Uint8Array(mT);
          for (let zT = 0; zT < mT; zT++) {
            const mT = VB(TT, Rm(UT, WW(UT, zT)));
            WT[zT] = null === mT ? 0 : An(mT)
          }
          return WT
        }(cT, TT)), gZ(vT)),
        uT = new cZ(sT, gZ(vT)),
        CT = new pZ,
        ST = (TT, UT) => {
          let [mT, WT, zT] = TT;
          CT.answered(UT) || bT.show({
            baf2ToastText: [(0, IT.se)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: mT,
                h: WT,
                d: zT
              }
            }, IT.R.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      VT.onSizeNotTaken(ST), uT.onSizeNotTaken(ST);
      const GT = new iZ,
        NT = new Tc(sT),
        hT = new mc,
        DT = new pc(hT),
        oT = new Yc,
        RT = new Fc,
        TU = new Ec(RT),
        UU = new zv(RT),
        mU = RT.lookSource(),
        WU = new qv({
          handles: TT => mU.handles(TT) || TT === QT,
          line: (TT, UT) => TT === QT ? function(TT, UT, mT) {
            var WT;
            const zT = KT(null === (WT = UT.at(mT)) || void 0 === WT ? void 0 : WT.item);
            return null === zT ? {
              key: `${cv}lookFarmEmpty`
            } : {
              key: TT.blockIdToBlockName(TT.getBlockId(mT[0], mT[1], mT[2])).endsWith("|Running") ? `${cv}lookFarmRunning` : `${cv}lookFarmWaiting`,
              keys: {
                mob: rT(zT)
              }
            }
          }(cT, dT, UT) : mU.line(TT, UT),
          version: () => mU.version() + dT.version()
        }, (TT => DB(sT.all(), TT, (TT => VB(cT, TT)))), (() => iT.get().tier)),
        zU = new PZ,
        MU = new Xv,
        gU = new Vv,
        nU = Vv.blade(),
        HU = new Ev,
        kU = new zB,
        jU = new Rv,
        LU = new Kv,
        pU = new rv;
      let BU = -1 / 0,
        ZU = 0,
        cU = -1 / 0,
        vU = -1 / 0;
      const fU = () => {
          vT.send("baf2islandsclose"), vU = Date.now()
        },
        qU = [];

      function iU(TT) {
        var UT, mT, WT, zT, MT, gT, HT;
        "core" === (null === (UT = nT.get()) || void 0 === UT ? void 0 : UT.kind) && "core" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && vT.send("baf2coreclose"), "power" === (null === (mT = nT.get()) || void 0 === mT ? void 0 : mT.kind) && "power" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && vT.send("baf2powerclose"), "water" === (null === (WT = nT.get()) || void 0 === WT ? void 0 : WT.kind) && "water" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && vT.send(AT.t), "terminal" === (null === (zT = nT.get()) || void 0 === zT ? void 0 : zT.kind) && "terminal" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && vT.send("baf2terminalclose"), "islands" === (null === (MT = nT.get()) || void 0 === MT ? void 0 : MT.kind) && "islands" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && fU();
        const kT = RT.getStatus();
        "collider" === (null === (gT = nT.get()) || void 0 === gT ? void 0 : gT.kind) && "collider" !== (null === TT || void 0 === TT ? void 0 : TT.kind) && kT && vT.send(VH(kT, "close"));
        const jT = TT => "reactor" === TT || "battery" === TT;
        if (jT(null === (HT = nT.get()) || void 0 === HT ? void 0 : HT.kind) && !jT(null === TT || void 0 === TT ? void 0 : TT.kind)) {
          var lT, LT, pT;
          const TT = "reactor" === (null === (lT = nT.get()) || void 0 === lT ? void 0 : lT.kind) ? null === (LT = VT.get()) || void 0 === LT ? void 0 : LT.status.baf2RxAt : null === (pT = uT.get()) || void 0 === pT ? void 0 : pT.status.baf2BatAt;
          TT && vT.send(lU(TT, "close"))
        }
        "quests" === (null === TT || void 0 === TT ? void 0 : TT.kind) && fT(), nT.set(TT), null === TT && eT.release()
      }

      function bU() {
        (0, qz.d)(), iU(null)
      }
      let OU = new Set,
        eU = !1;
      const YU = {
        onCreate: TT => {
          cT = TT, cT.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const UT of dU) {
            const TT = IU[UT].inputSlots ? In(gT) : an(UT, gT, tT, vT);
            qU.push((0, vz.c)(UT, TT))
          }
          qU.push((0, qz.q)((0, WT.createElement)(WT.Fragment, null, (0, WT.createElement)(ip, {
            controller: pT
          }), (0, WT.createElement)(pB, {
            store: dT
          }), (0, WT.createElement)(bv, {
            store: WU
          }), (0, WT.createElement)(Ep, {
            store: iT
          }), (0, WT.createElement)(Rp, {
            store: bT
          }), (0, WT.createElement)(mB, {
            store: eT
          }), (0, WT.createElement)(gB, {
            store: kU
          }), (0, WT.createElement)(qZ, {
            store: GT
          }), (0, WT.createElement)(Wc, {
            store: hT
          })), {
            content: (0, WT.createElement)(kp, {
              commands: vT,
              store: nT,
              power: tT,
              water: XT,
              reactor: VT,
              battery: uT,
              collider: RT,
              terminal: yT,
              quests: iT,
              tutorial: OT,
              close: qz.f,
              leave: () => {
                eT.dropHeld(), (0, qz.d)()
              },
              askIslands: () => {
                vU = -1 / 0, BU = Date.now(), ZU = vT.send(ET)
              },
              openSocial: () => {
                (0, qz.d)(), iz.b.set({
                  openEverythingMenuName: lm.k.SOCIAL
                })
              },
              showCore: TT => {
                iU({
                  kind: "core",
                  core: TT
                }), vT.send("baf2corereopen")
              }
            }),
            onClose: () => {
              iU(null)
            }
          })), qU.push((0, fz.r)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              iU({
                kind: "quests"
              }), (0, qz.l)()
            }
          })), qU.push(function(TT, UT) {
            let mT = null,
              WT = () => {};
            const zT = UT => {
              var zT;
              let {
                tutorial: MT,
                tutorialKnown: gT
              } = UT;
              (null === (zT = mT) || void 0 === zT ? void 0 : zT.tutorial) === MT && mT.tutorialKnown === gT || (mT = {
                tutorial: MT,
                tutorialKnown: gT
              }, WT = (0, fz.r)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: dj[MT],
                icon: {
                  kind: "icon",
                  name: xj[MT]
                },
                iconOnly: !0,
                disabled: !gT,
                className: "Baf2TutorialButton",
                onClick: () => {
                  TT.next()
                }
              }))
            };
            zT(UT.get());
            const MT = Iz.j.subscribe(sz, zT);
            return () => {
              Iz.j.unsubscribe(MT), WT()
            }
          }(OT, iT)), eU = !1, qU.push(Hf()), qU.push(kf()), qU.push(function() {
            const TT = Iz.j.subscribe(sz, Rz),
              UT = () => {
                if (Az) {
                  const TT = Az;
                  Az = null, (0, Qz.u)(TT)
                }
              },
              mT = Iz.j.subscribe("toggleMenu", (TT => {
                "inventory" === (null === TT || void 0 === TT ? void 0 : TT.split("|")[0]) && UT()
              })),
              WT = Iz.j.subscribe("appManagerUpdated|openInGameMenuName", (TT => {
                "inventory" === TT && UT()
              }));
            return () => {
              Iz.j.unsubscribe(TT), Iz.j.unsubscribe(mT), Iz.j.unsubscribe(WT)
            }
          }()), qU.push(function(TT) {
            const UT = Wf(TT),
              mT = Iz.j.subscribe(sz, (TT => {
                mf.follow(TT, UT)
              }));
            return () => {
              Iz.j.unsubscribe(mT), mf.clear()
            }
          }(cT)), qU.push(function() {
            const TT = document.documentElement,
              UT = (0, Vp.d)(".InvenBodyRight", [], (() => {
                const UT = document.querySelector(".InvenBodyRight");
                UT && TT.style.setProperty("--baf2-backpack-width", `${UT.offsetWidth}px`)
              }));
            return () => {
              UT(), TT.style.removeProperty("--baf2-backpack-width")
            }
          }()), qU.push(function() {
            const TT = document.documentElement;
            return TT.classList.add(Tf), () => {
              TT.classList.remove(Tf)
            }
          }()), qU.push((() => {
            jT.dispose(), kT.dispose()
          })), ZT.start(cT), qU.push((() => {
            ZT.dispose(), HU.dispose(), wT.dispose()
          }))
        },
        onClose: () => {
          (0, Qz.u)([]), Az = null, oz = new Set, Mf = null, (0, Qz.q)(new Map), qf.clear();
          for (const TT of qU) TT();
          iT.dispose(), WU.dispose(), bT.dispose(), eT.dispose(), zU.dispose(), MU.dispose(cT), FT.dispose(cT), PT.dispose(cT), NT.dispose(cT), DT.dispose(cT), hT.dispose(), oT.dispose(), sT.dispose(), VT.dispose(), uT.dispose(), GT.dispose(), gU.dispose(), nU.dispose(), kU.dispose(), TU.dispose(cT), UU.dispose(cT), RT.dispose(), jU.dispose(), vT.clear()
        },
        onAfterRender: (TT, UT) => {
          var mT, WT, zT;
          try {
            ZT.onAfterRender(UT)
          } catch (kT) {
            console.error("Error drawing BAF2 belt items", kT)
          }
          try {
            HU.onAfterRender(cT, MT)
          } catch (kT) {
            console.error("Error drawing BAF2 jet flames", kT)
          }
          eU || (eU = !0, vT.send("baf2clientready"));
          const gT = cT.getPositionView(MT);
          pT.onAfterRender(UT, gT, LT), dT.onAfterRender(UT, gT, LT, BT), jT.run(LT), zU.onAfterRender(cT, gT), MU.onAfterRender(cT, gT), wT.onAfterRender(cT, gT), FT.onAfterRender(cT, gT), PT.onAfterRender(cT, MT, gT), NT.onAfterRender(cT, MT, gT), DT.onAfterRender(cT, MT), oT.onAfterRender(cT, gT), iT.onPlayerY(gT[1]), TU.onAfterRender(cT), UU.onAfterRender(cT, MT, gT);
          const HT = cT.getTargetedBlock();
          WU.onAfterRender(cT, MT, null !== (mT = null === HT || void 0 === HT ? void 0 : HT.oR) && void 0 !== mT ? mT : 0, null !== (WT = null === HT || void 0 === HT ? void 0 : HT.position) && void 0 !== WT ? WT : null), jU.onAfterRender(cT, UT), xT.onMining(function(TT, UT) {
            var mT, WT;
            const zT = TT.getMiningBlock();
            if (!zT) return null;
            const MT = (0, aT.e)(TT.getBlockId(zT[0], zT[1], zT[2])),
              gT = null !== (mT = null === (WT = TT.RUT(UT)) || void 0 === WT ? void 0 : WT.name) && void 0 !== mT ? mT : null,
              nT = TT.getItemStat(UT, MT.split("|")[0], "harvestLevel");
            return {
              block: MT,
              x: zT[0],
              y: zT[1],
              z: zT[2],
              fn: gT,
              level: nT
            }
          }(cT, MT), cT.isMining(), performance.now()), "dropMap" === (null === (zT = nT.get()) || void 0 === zT ? void 0 : zT.kind) && PW(gT[1]) && bU()
        },
        onPlayerChangeBlock: (TT, UT, mT, WT, zT, gT) => {
          TT === MT && function(TT, UT, mT, WT, zT, MT, gT) {
            const nT = Cv(MT, gT, TT.isPlayerCrouching(UT));
            if (null === nT) return;
            if (TT.EQ(mT, WT, zT, nT), !TT.getClientOption(UT, "canPickUpItems")) return;
            const HT = gm[nT.split("|")[0]];
            var kT, jT, lT;
            void 0 !== HT && (kT = TT.getInventoryItems(), jT = HT, lT = fB.f.maxItemStackSize, TT.getInventoryFreeSlotCount(UT) > 0 || kT.some((TT => null !== TT && TT.name === jT && null !== TT.amount && TT.amount < lT))) && TT.playSound(UT, (0, lf.d)("pickUp"), .5, 1)
          }(cT, TT, UT, mT, WT, zT, gT)
        },
        onPlayerAltAction: (TT, UT, mT, WT, zT) => {
          var gT, nT;
          if (!cT.getClientOption(MT, "canPickUpItems")) return;
          const HT = null !== (gT = null === (nT = cT.RUT(MT)) || void 0 === nT ? void 0 : nT.name) && void 0 !== gT ? gT : null,
            kT = function(TT, UT) {
              const mT = TT.split("|")[0];
              return JT(mT) && UT !== Hz && "Sky Pack" !== UT ? mT : null
            }(zT, HT);
          if (null !== kT) return void(LU.tap(kT, performance.now()) && zf(cT, MT, kT, iT));
          if (!rW(HT)) return;
          const jT = pU.isNewPress(performance.now()),
            lT = function(TT, UT, mT) {
              return !rW(UT) || mT ? null : AW(TT)
            }(zT, HT, cT.isPlayerCrouching(MT));
          null !== lT && jT && cT.EQ(UT, mT, WT, lT)
        },
        onPlayerAttemptAltAction: (TT, UT, mT, WT, zT) => {
          if (function(TT, UT, mT, WT, zT) {
              "Workbench" === WT.split("|")[0] && TT.getClientOption(mT, "canCraft") && (mf.open("Workbench", zT.get(), Wf(TT)), UT.send("baf2station Workbench"))
            }(cT, vT, MT, zT, iT), jf(cT, MT, zT)) return "preventAction";
          YT.onAltAction(cT, MT, zT)
        },
        onReceivedMessageFromServer: (TT, UT) => {
          if ("baf2MachineStatus" === TT) {
            var mT, WT, zT, kT, jT, lT, LT, BT, fT, OT, YT, JT, xT, wT, aT, IT;
            const TT = UT,
              MT = TT.baf2MachineTaught;
            gT.set(TT.baf2MachinePos, {
              status: TT.baf2MachineStatus,
              power: null !== (mT = TT.baf2MachinePower) && void 0 !== mT ? mT : null,
              opLeftMs: null !== (WT = TT.baf2MachineOpLeftMs) && void 0 !== WT ? WT : null,
              dug: TT.baf2MachineYield ? {
                item: TT.baf2MachineYield,
                name: qT([TT.baf2MachineYield])[TT.baf2MachineYield]
              } : null,
              powerCap: null !== (zT = TT.baf2MachinePowerCap) && void 0 !== zT ? zT : null,
              powerRates: null !== (kT = TT.baf2MachinePowerRates) && void 0 !== kT ? kT : null,
              coupled: !0 === TT.baf2MachineCoupled,
              couplerLevel: null !== (jT = TT.baf2MachineCoupler) && void 0 !== jT ? jT : 1,
              taught: MT,
              taughtName: MT ? qT([MT])[MT] : null,
              tier: null !== (lT = TT.baf2MachineTier) && void 0 !== lT ? lT : null,
              input: null !== (LT = TT.baf2MachineInput) && void 0 !== LT ? LT : null,
              inertCoupler: null !== (BT = TT.baf2MachineInertCoupler) && void 0 !== BT ? BT : null,
              inputShort: null !== (fT = TT.baf2MachineInputShort) && void 0 !== fT ? fT : null,
              field: null !== (OT = TT.baf2MachineField) && void 0 !== OT ? OT : null,
              noSeeds: !0 === TT.baf2MachineNoSeeds,
              fuelFed: !0 === TT.baf2MachineFuelFed,
              fuelFeeds: !0 === TT.baf2MachineFuelFeeds,
              coreFull: !0 === TT.baf2MachineCoreFull,
              waterUnpowered: !0 === TT.baf2MachineWaterUnpowered,
              powerShort: !0 === TT.baf2MachinePowerShort,
              powerWait: !0 === TT.baf2MachinePowerWait,
              reactorPowered: !0 === TT.baf2MachineReactorPowered,
              fuelLeftMs: null !== (YT = TT.baf2MachineFuelLeftMs) && void 0 !== YT ? YT : null,
              burning: null !== (JT = TT.baf2MachineBurning) && void 0 !== JT ? JT : null,
              fuelKeep: null !== (xT = TT.baf2MachineFuelKeep) && void 0 !== xT ? xT : null,
              water: null !== (wT = TT.baf2MachineWater) && void 0 !== wT ? wT : null,
              farm: null !== (aT = TT.baf2MachineFarm) && void 0 !== aT ? aT : null,
              cryo: null !== (IT = TT.baf2MachineCryo) && void 0 !== IT ? IT : null
            })
          } else if ("baf2StationOpen" === TT) {
            const TT = UT.baf2Station;
            LU.consumeServerOpen(TT, performance.now()) || zf(cT, MT, TT, iT)
          } else if ("baf2Power" === TT) {
            const TT = UT;
            tT.set(TT), TT.baf2PowerOpen && (iU({
              kind: "power"
            }), (0, qz.l)())
          } else if (TT === AT.y) {
            const TT = UT;
            XT.set(TT), TT.baf2WaterOpen && (iU({
              kind: "water"
            }), (0, qz.l)())
          } else if ("baf2RxPlans" === TT) {
            var QT, FT, PT;
            const TT = UT;
            sT.LO(TT);
            const mT = new Set(TT.baf2RxPlanList.map((TT => {
              let [UT, mT, WT] = TT;
              return `${UT},${mT},${WT}`
            })));
            GT.retain(mT);
            const WT = null === (QT = nT.get()) || void 0 === QT ? void 0 : QT.kind,
              zT = "reactor" === WT ? null === (FT = VT.get()) || void 0 === FT ? void 0 : FT.status.baf2RxAt : "battery" === WT ? null === (PT = uT.get()) || void 0 === PT ? void 0 : PT.status.baf2BatAt : void 0;
            zT && OU.has(zT.join(",")) && !mT.has(zT.join(",")) && bU(), OU = mT
          } else if ("baf2RxStatus" === TT) {
            const TT = UT;
            VT.set(TT), TT.baf2RxOpen && (iU({
              kind: "reactor"
            }), (0, qz.l)())
          } else if ("baf2BatStatus" === TT) {
            const TT = UT;
            uT.set(TT), TT.baf2BatOpen && (iU({
              kind: "battery"
            }), (0, qz.l)())
          } else if ("baf2RxAlarm" === TT) GT.LO(UT);
          else if ("baf2Bomb" === TT) hT.LO(UT, cT.getPositionView(MT));
          else if ("baf2Fallout" === TT) oT.LO(UT);
          else if ("baf2ColBeams" === TT) RT.onBeams(UT);
          else if ("baf2ColStatus" === TT) {
            const TT = UT;
            var rT, KT;
            if (RT.onStatus(TT), TT.baf2ColOpen) RT.onOpen(null !== (rT = null === (KT = cT.RUT(MT)) || void 0 === KT ? void 0 : KT.name) && void 0 !== rT ? rT : null), iU({
              kind: "collider"
            }), (0, qz.l)()
          } else if ("baf2Terminal" === TT) {
            const TT = UT;
            var ST;
            if (yT.apply(TT)) TT.baf2TermReset && (iU({
              kind: "terminal"
            }), (0, qz.l)());
            else "terminal" === (null === (ST = nT.get()) || void 0 === ST ? void 0 : ST.kind) && (nT.set(null), (0, qz.d)())
          } else if ("baf2Core" === TT) {
            var NT;
            const TT = UT;
            if (HT(!0 === TT.baf2CoreNuclear), function(TT, UT) {
                return "core" === (null === TT || void 0 === TT ? void 0 : TT.kind) && UT.baf2CoreTier > TT.core.message.baf2CoreTier
              }(nT.get(), TT)) return void(0, qz.d)();
            if (TT.baf2CoreRefresh && "core" !== (null === (NT = nT.get()) || void 0 === NT ? void 0 : NT.kind)) return;
            iU({
              kind: "core",
              core: vf(TT, qT)
            }), TT.baf2CoreRefresh || (0, qz.l)()
          } else if ("baf2WrenchUndo" === TT) {
            const {
              baf2WrenchPos: TT,
              baf2WrenchBlock: mT
            } = UT;
            cT.EQ(TT[0], TT[1], TT[2], mT)
          } else if ("baf2Toast" === TT) {
            const TT = UT;
            CT.heard(performance.now(), TT.baf2ToastMs), bT.show(TT)
          } else if ("baf2Area" === TT) eT.arrive(UT, null !== nT.get());
          else if ("baf2Quest" === TT) {
            const TT = UT;
            HT(!0 === TT.baf2QuestNuclear), iT.set(TT, function(TT, UT) {
              var mT, WT, zT, MT, gT;
              const nT = [];
              for (const [, , jT, , , , , , lT, LT] of TT.baf2QuestSteps) null !== jT && nT.push(jT), nT.push(...null !== lT && void 0 !== lT ? lT : [], ...null !== LT && void 0 !== LT ? LT : []);
              TT.baf2QuestReward && nT.push(TT.baf2QuestReward);
              const HT = null === (mT = TT.baf2QuestSide) || void 0 === mT ? void 0 : mT[2][2];
              HT && nT.push(HT), nT.push(...null !== (WT = null === (zT = TT.baf2QuestSide) || void 0 === zT ? void 0 : zT[2][8]) && void 0 !== WT ? WT : [], ...null !== (MT = null === (gT = TT.baf2QuestSide) || void 0 === gT ? void 0 : gT[2][9]) && void 0 !== MT ? MT : []);
              for (const [jT] of null !== (kT = TT.baf2QuestAlso) && void 0 !== kT ? kT : []) {
                var kT;
                nT.push(jT)
              }
              return UT(nT)
            }(TT, qT)), nf(TT.baf2QuestTier)
          } else if ("baf2Route" === TT) ! function(TT, UT) {
            let {
              baf2RouteCells: mT,
              baf2RouteInto: WT
            } = UT;
            0 !== mT.length && WT ? TT.setRouteChevrons({
              cells: mT.map(((TT, UT) => {
                const [zT, , MT] = function(TT, UT, mT) {
                  const WT = mT + 1 < TT.length ? TT[mT + 1] : UT;
                  return [WT[0] - TT[mT][0], 0, WT[2] - TT[mT][2]]
                }(mT, WT, UT);
                return {
                  pos: TT,
                  way: [zT, MT]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : TT.setRouteChevrons(null)
          }(cT, UT);
          else if ("baf2QuestBook" === TT) iT.setBook(UT);
          else if ("baf2Stalls" === TT) pT.set(UT.baf2StallCells);
          else if (TT === Zm.k) ZT.onMoves(UT);
          else if (TT === Zm.g) ZT.onLines(UT);
          else if ("baf2Labels" === TT) dT.LO(UT);
          else if ("baf2DropMap" === TT) iU({
            kind: "dropMap",
            dropMap: UT
          }), (0, qz.l)();
          else if ("baf2Islands" === TT) {
            var DT, TU;
            const TT = UT;
            if (vT.syncIslandEdits(TT.baf2IslandsAnswered), !TT.baf2IslandsOpen && "islands" !== (null === (DT = nT.get()) || void 0 === DT ? void 0 : DT.kind)) return;
            if (TT.baf2IslandsOpen) {
              var UU, mU;
              const UT = iz.b.get("openEverythingMenuName"),
                mT = vT.sent() >= ZU,
                WT = "other" !== (pU = {
                  askedAtMs: BU,
                  askSent: mT,
                  reaskedAtMs: cU,
                  nowMs: Date.now(),
                  panel: null !== (UU = null === (mU = nT.get()) || void 0 === mU ? void 0 : mU.kind) && void 0 !== UU ? UU : null,
                  inGameMenu: iz.b.get("openInGameMenuName"),
                  everythingMenu: null === UT ? null : UT === lm.k.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== TT.baf2IslandsFocusInvite
                }).everythingMenu && (!!pU.focusInvite || "islands" === pU.panel && "clientGame" === pU.inGameMenu || !(pU.nowMs - pU.reaskedAtMs < Qk) && (pU.askSent && pU.nowMs - pU.askedAtMs < Qk ? "core" === pU.panel && "clientGame" === pU.inGameMenu && null === pU.everythingMenu : "shop" === pU.everythingMenu || null === pU.inGameMenu));
              if (mT && (BU = -1 / 0), cU = -1 / 0, !WT) return void fU()
            }
            const mT = (zU = TT.baf2IslandsOpen, MU = "islands" === (null === (TU = nT.get()) || void 0 === TU ? void 0 : TU.kind), jU = vU, lU = Date.now(), zU && !MU && lU - jU < Qk);
            iU({
              kind: "islands",
              islands: TT,
              arrivedAtMs: Date.now(),
              backToCore: sk(nT.get())
            }), mT && (vU = -1 / 0, cU = Date.now(), vT.send(ET)), TT.baf2IslandsOpen && ("clientGame" !== iz.b.get("openInGameMenuName") && (0, bz.c)(), (0, qz.l)())
          } else if ("baf2CoopTransfer" === TT) {
            var WU;
            const TT = UT;
            TT.baf2TransferOn ? (iU({
              kind: "transfer",
              transfer: TT,
              arrivedAtMs: Date.now()
            }), (0, qz.l)()) : "transfer" === (null === (WU = nT.get()) || void 0 === WU ? void 0 : WU.kind) && (0, qz.d)()
          } else "baf2IslandLeft" === TT ? (eT.dropHeld(), null !== nT.get() && bU(), "inventory" === iz.b.get("openInGameMenuName") && (0, bz.c)()) : "baf2Arc" === TT ? gU.LO(cT, UT) : "baf2Blade" === TT ? nU.onBlade(cT, UT) : "baf2JetFlame" === TT ? HU.LO(cT, UT) : "baf2GearPower" === TT && kU.LO(UT);
          var zU, MU, jU, lU, pU
        }
      };
      return YU
    }
  },
  38649: (TT, UT, mT) => {
    function WT(TT, UT, mT) {
      const WT = new Set,
        zT = new ResizeObserver(mT),
        MT = () => {
          const UT = new Set(document.querySelectorAll(TT));
          let MT = !1;
          for (const TT of WT) UT.has(TT) || (zT.unobserve(TT), WT.delete(TT), MT = !0);
          for (const TT of UT) WT.has(TT) || (zT.observe(TT), gT.observe(TT, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), WT.add(TT));
          MT && mT()
        },
        gT = new MutationObserver((UT => {
          UT.some((TT => "attributes" === TT.type)) && mT(), UT.some((UT => function(TT, UT, mT) {
            if ("childList" !== TT.type) return !1;
            for (const WT of TT.addedNodes)
              if (WT instanceof Element && (WT.matches(UT) || WT.querySelector(UT))) return !0;
            for (const WT of TT.removedNodes)
              if (WT instanceof Element)
                for (const TT of mT)
                  if (WT.contains(TT)) return !0;
            return !1
          }(UT, TT, WT))) && MT()
        }));
      gT.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const nT of UT) zT.observe(nT);
      return window.addEventListener("resize", mT), MT(), mT(), () => {
        zT.disconnect(), gT.disconnect(), window.removeEventListener("resize", mT)
      }
    }
    mT.d(UT, {
      d: () => WT
    })
  },
  38624: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT
    });
    var WT = mT(38622);
    const zT = 5,
      MT = [0, 0, 0],
      gT = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function nT(TT, UT, mT, nT, HT, kT) {
      let [jT, lT, LT] = nT;
      const pT = (jT + .5 - mT[0]) ** 2 + (lT - mT[1]) ** 2 + (LT + .5 - mT[2]) ** 2;
      let BT = null;
      pT <= kT ** 2 && (MT[0] = jT + .5, MT[1] = lT + HT, MT[2] = LT + .5, BT = UT.projectWorldPosToViewport(MT));
      const ZT = null !== BT && BT.x > -zT && BT.x < 100 + zT && BT.y > -zT && BT.y < 100 + zT;
      return (0, WT.h)(TT, !ZT), ZT ? (gT.x = BT.x, gT.y = BT.y, gT.distSq = pT, gT) : null
    }
  },
  38622: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      h: () => MT
    });
    const WT = new WeakMap;

    function zT(TT) {
      let UT = WT.get(TT);
      return UT || (UT = {
        hidden: TT.hidden,
        x: NaN,
        y: NaN
      }, WT.set(TT, UT)), UT
    }

    function MT(TT, UT) {
      const mT = zT(TT);
      mT.hidden !== UT && (mT.hidden = UT, TT.hidden = UT)
    }

    function gT(TT, UT, mT) {
      const WT = zT(TT);
      WT.x === UT && WT.y === mT || (WT.x = UT, WT.y = mT, TT.style.translate = `${UT}vw ${mT}vh`)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);