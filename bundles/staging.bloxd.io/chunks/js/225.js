export const id = 225;
export const ids = [225];
export const modules = {
  36867: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => ft,
      E: () => Mt,
      d: () => Dt,
      f: () => wt,
      j: () => yt,
      n: () => dt,
      q: () => lt,
      t: () => Nt,
      w: () => Qt,
      y: () => bt
    });
    var Ot = Vt(26),
      qt = Vt(31);
    const Dt = "clientGameInventoryButtonsChanged",
      mt = new Map;

    function dt() {
      return [...mt.values()].sort(((tt, et) => {
        var Vt, Ot;
        return (null !== (Vt = tt.order) && void 0 !== Vt ? Vt : 0) - (null !== (Ot = et.order) && void 0 !== Ot ? Ot : 0)
      }))
    }
    let jt = null;

    function Ht(tt) {
      jt = tt
    }
    let Xt = !1;

    function Qt(tt) {
      Xt = !0;
      try {
        tt.onClick()
      } finally {
        Xt = !1
      }
      tt.panel && "clientGame" === Ot.b.get("openInGameMenuName") && Ht(tt.id)
    }

    function lt() {
      return Xt
    }

    function Et() {
      return dt().filter((tt => tt.panel && !tt.disabled))
    }

    function ft(tt) {
      const et = Et(),
        Vt = et.findIndex((tt => tt.id === jt));
      return !(Vt < 0 || et.length < 2) && (Qt(et[(Vt + tt + et.length) % et.length]), !0)
    }

    function wt() {
      return null !== jt && Et().length > 1
    }

    function yt() {
      Ht(null)
    }

    function Nt() {
      "inventory" !== Ot.b.get("openInGameMenuName") && Ht(null)
    }

    function Mt() {
      const tt = jt;
      return Ht(null), tt
    }

    function bt(tt) {
      return mt.set(tt.id, tt), qt.j.sw(Dt, dt(), !0), () => {
        mt.get(tt.id) === tt && (mt.delete(tt.id), qt.j.sw(Dt, dt()))
      }
    }
  },
  36861: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      c: () => yt,
      g: () => Nt,
      i: () => lt,
      l: () => Ht,
      m: () => wt,
      o: () => Et,
      q: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(1387),
      mt = Vt(36867);
    const dt = "clientGameUiChanged";
    let jt = null;

    function Ht() {
      return jt
    }

    function Xt(tt, et) {
      const Vt = {
        content: tt,
        menu: et
      };
      return jt = Vt, qt.j.sw(dt, jt, !0), () => {
        jt === Vt && (jt = null, ft = !1, yt(), qt.j.sw(dt, null))
      }
    }
    let Qt = null;

    function lt() {
      return Qt
    }

    function Et(tt) {
      return Qt = tt, () => {
        Qt === tt && (Qt = null)
      }
    }
    let ft = !1;

    function wt() {
      const tt = Ot.b.get("openInGameMenuName");
      "clientGame" !== tt && (ft = "inventory" === tt), (0, mt.q)() || (0, mt.j)(), (0, Dt.p)(Dt.c), Ot.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yt() {
      Mt(!1)
    }

    function Nt() {
      Mt(ft)
    }

    function Mt(tt) {
      "clientGame" === Ot.b.get("openInGameMenuName") && Ot.b.set({
        openInGameMenuName: tt ? "inventory" : null
      }), tt || (0, mt.j)(), ft = !1
    }
  },
  38724: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(38728);
    const qt = [0, 0, 0];
    class Dt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qt;
        this.pool = tt, this.origin = et, this.count = 0, this.free = []
      }
      take() {
        var tt;
        const et = null !== (tt = this.free.pop()) && void 0 !== tt ? tt : this.count++;
        return et >= this.pool.uQ && this.pool.grow(Math.max(2 * this.pool.uQ, et + 1)), this.hide(et), et
      }
      release(tt) {
        this.hide(tt), this.free.push(tt)
      }
      write(tt, et, Vt, qt) {
        const {
          records: Dt
        } = this.pool, {
          origin: mt
        } = this, dt = tt * Ot.d;
        Dt[dt] = et - mt[0], Dt[dt + 1] = Vt - mt[1], Dt[dt + 2] = qt - mt[2], Dt[dt + Ot.f] = 0, this.pool.markDirty(tt)
      }
      hide(tt) {
        this.pool.records[tt * Ot.d + Ot.f] = 1, this.pool.markDirty(tt)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class mt {
      constructor(tt, et, Vt) {
        this.api = tt, this.model = et, this.initialCapacity = Vt, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(tt) {
        let et = this.kinds.get(tt);
        if (void 0 === et) {
          const Vt = this.api.createInstancePool({
            ...this.model,
            item: tt
          }, this.initialCapacity);
          null === Vt || void 0 === Vt || Vt.setOrigin(this.origin[0], this.origin[1], this.origin[2]), et = Vt && new Dt(Vt, this.origin), this.kinds.set(tt, et)
        }
        return et
      }
      follow(tt) {
        const {
          origin: et
        } = this;
        if (Math.abs(tt[0] - et[0]) <= 512 && Math.abs(tt[1] - et[1]) <= 512 && Math.abs(tt[2] - et[2]) <= 512) return !1;
        et[0] = Math.floor(tt[0]), et[1] = Math.floor(tt[1]), et[2] = Math.floor(tt[2]);
        for (const Vt of this.kinds.values()) null === Vt || void 0 === Vt || Vt.pool.setOrigin(et[0], et[1], et[2]);
        return !0
      }
      commit() {
        for (const tt of this.kinds.values()) null === tt || void 0 === tt || tt.commit()
      }
      dispose() {
        for (const tt of this.kinds.values()) null === tt || void 0 === tt || tt.dispose();
        this.kinds.clear()
      }
    }
  },
  38741: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt,
      g: () => dt,
      j: () => jt
    });
    const Ot = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      qt = [0, 1, 2, 0, 2, 3],
      Dt = [4, 5];

    function mt(tt, et, Vt, Ot, qt) {
      for (let mt = 0; mt < 6; mt++) Dt.includes(mt) === qt && Ht(tt, et, Vt, Ot, mt)
    }

    function dt(tt, et, Vt, Ot) {
      for (let qt = 0; qt < 6; qt++) Ht(tt, et, Vt, Ot, qt)
    }

    function jt(tt, et, Vt, Dt, mt) {
      for (let dt = 0; dt < 6; dt++)
        for (const jt of [0, 1]) {
          const [Ht, Xt, Qt] = [jt + 2, jt + 1, (jt + 3) % 4], lt = tt.length / 3;
          for (const [et, qt] of [
              [jt, Xt],
              [Ht, Xt],
              [Ht, Qt],
              [jt, Qt]
            ])
            for (let jt = 0; jt < 3; jt++) {
              const Ht = Ot[3 * (4 * dt + et) + jt],
                Xt = Ot[3 * (4 * dt + qt) + jt];
              tt.push((Ht + (Xt - Ht) * mt) * Dt / 2 + Vt[jt])
            }
          for (const tt of qt) et.push(lt + tt)
        }
    }

    function Ht(tt, et, Vt, Dt, mt) {
      let [dt, jt, Ht] = Vt, [Xt, Qt, lt] = Dt;
      const Et = tt.length / 3;
      for (let qt = 4 * mt; qt < 4 * mt + 4; qt++) tt.push(Ot[3 * qt] * Xt / 2 + dt, Ot[3 * qt + 1] * Qt / 2 + jt, Ot[3 * qt + 2] * lt / 2 + Ht);
      for (const Ot of qt) et.push(Et + Ot)
    }
  },
  38708: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => ba
    });
    var Ot = Vt(63);
    const qt = [{
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
      Dt = 10;
    let mt = !0;

    function dt() {
      return mt
    }

    function jt(tt) {
      mt = tt
    }
    const Ht = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function Xt() {
      return mt ? qt.length : Dt
    }

    function Qt(tt) {
      var et, Vt;
      return null !== (et = null === (Vt = qt[tt - 1]) || void 0 === Vt ? void 0 : Vt.reactorTier) && void 0 !== et ? et : 0
    }

    function lt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qt(tt) > 0;
      return Vt && !mt ? "hidden" : tt <= et ? "open" : Vt ? et < 5 ? "hidden" : et < Dt ? "teaser" : "locked" : "locked"
    }

    function Et(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Ot,
        n: qt
      } = yt(tt);
      return {
        key: et[Ot],
        params: {
          [Ot]: Vt ? String(qt) : qt
        }
      }
    }
    const ft = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function wt(tt, et) {
      return Qt(tt) > 0 && et < Dt
    }

    function yt(tt) {
      const et = Qt(tt);
      if (et > 0) return {
        kind: "atomic",
        n: et,
        short: `A${et}`
      };
      const Vt = function(tt) {
        return tt >= 6 && tt <= 10 ? tt - 6 + 1 : 0
      }(tt);
      return Vt > 0 ? {
        kind: "stage",
        n: Vt,
        short: `S${Vt}`
      } : {
        kind: "tier",
        n: tt,
        short: String(tt)
      }
    }

    function Nt(tt) {
      return qt[Math.max(1, Math.min(tt, qt.length)) - 1]
    }

    function Mt(tt, et) {
      return tt < et ? function(tt) {
        var et;
        return null !== (et = qt[tt]) && void 0 !== et ? et : null
      }(tt) : null
    }
    const bt = "baf2coresubmit",
      Jt = "baf2corebankpause",
      Ct = "baf2coredeposit",
      ut = "baf2corechargepause";

    function Kt(tt) {
      var et;
      return null !== (et = tt.baf2CoreOpen) && void 0 !== et ? et : Dt
    }
    const ht = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function vt(tt) {
      return ht.includes(tt)
    }
    const Wt = (tt, et) => et.map((et => [et, [tt]])),
      St = Object.fromEntries([...Wt("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...Wt("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...Wt("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...Wt("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...Wt("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...Wt("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...Wt("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...Wt("Parts Bench", ["Focus Lens"]), ...Wt("Machine Bench", ["Laser", "Collider"]), ...Wt("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...Wt("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...Wt("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...Wt("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...Wt("Tool Bench", ["Mob Cage"]), ...Wt("Tool Bench", ["Pocket Terminal"]), ...Wt("Tool Bench", ["Comet Beacon"]), ...Wt("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function ct(tt) {
      var et;
      return null !== (et = St[tt]) && void 0 !== et ? et : ["Workbench"]
    }

    function Rt(tt) {
      return ct(tt)[0]
    }
    qt.slice(1).map(((tt, et) => `Core Tier ${et+2}`));
    var It = Vt(9425);
    const Pt = ["on", "hud", "off"];

    function Zt(tt) {
      return "on" === tt
    }
    var Lt = Vt(391);
    const Ft = "Mob Farm",
      kt = {
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
      Gt = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      zt = {
        1: 20,
        2: 60,
        3: 120
      },
      ot = "baf2farmvoid",
      rt = "Caged ",
      Ut = " Spawner Block";

    function At(tt) {
      return `lifeform:${(0,Lt.Pe)(tt)}`
    }

    function it(tt) {
      if (!tt) return null;
      if (tt.startsWith(rt)) {
        const et = tt.slice(6);
        return Gt.includes(et) ? et : null
      }
      if (tt.endsWith(Ut)) {
        const et = tt.slice(0, -14);
        return void 0 !== kt[et] ? et : null
      }
      return null
    }

    function Yt(tt) {
      return !0 === tt.mobFarm
    }

    function Bt(tt, et) {
      return zt[kt[et]] * tt.opMs / 1e3
    }
    const pt = new Map;
    const xt = "baf2islands",
      Tt = "baf2islandnew";

    function gt(tt) {
      const et = qt.findIndex((et => et.unlocks.includes(tt)));
      return et < 0 ? 1 : et + 1
    }

    function st(tt) {
      return Math.floor(tt).toLocaleString("en-US")
    }
    var nt = Vt(38641);
    const te = "baf2terminaltake",
      ee = "baf2terminalput",
      Ve = ["one", "stack", "fill"];

    function Oe(tt, et, Vt) {
      return `${te} ${tt} ${et} ${Vt}`
    }

    function qe(tt, et, Vt) {
      return `${ee} ${tt} ${et} ${Vt}`
    }

    function De(tt) {
      return `${ee} ${tt}`
    }
    const me = [
      [`${te} `, "take"],
      [`${ee} `, "put"]
    ];

    function de(tt) {
      const et = me.find((et => {
        let [Vt] = et;
        return tt.startsWith(Vt)
      }));
      if (!et) return null;
      const [Vt, Ot] = et, [qt, Dt, ...mt] = tt.slice(Vt.length).trim().split(" "), dt = Number(qt);
      if (!Number.isSafeInteger(dt) || dt <= 0) return null;
      if ("put" === Ot && void 0 === Dt) return {
        kind: "putAll",
        seq: dt
      };
      const jt = function(tt) {
        if (Ve.includes(tt)) return tt;
        const et = Number(tt);
        return /^\d+$/.test(tt) && Number.isSafeInteger(et) && et > 0 ? et : null
      }(null !== Dt && void 0 !== Dt ? Dt : "");
      return null === jt || 0 === mt.length ? null : {
        kind: Ot,
        seq: dt,
        mode: jt,
        item: mt.join(" ")
      }
    }

    function je(tt, et) {
      const Vt = "number" === typeof tt ? tt : "one" === tt ? 1 : "stack" === tt ? 99 : et;
      return Math.min(et, Vt)
    }

    function He(tt, et) {
      const Vt = tt => "number" === typeof tt ? tt : "one" === tt ? 1 : 99;
      return "fill" === tt || "fill" === et ? "fill" : Vt(tt) + Vt(et)
    }

    function Xe(tt, et) {
      const Vt = de(tt),
        Ot = de(et),
        qt = Vt && Ot ? function(tt, et) {
          return "take" === tt.kind || "take" === et.kind ? "take" === tt.kind && "take" === et.kind && tt.item === et.item ? {
            ...et,
            mode: He(tt.mode, et.mode)
          } : null : "putAll" === tt.kind || "putAll" === et.kind ? {
            kind: "putAll",
            seq: et.seq
          } : tt.item === et.item ? {
            ...et,
            mode: He(tt.mode, et.mode)
          } : null
        }(Vt, Ot) : null;
      return qt ? "putAll" === (Dt = qt).kind ? De(Dt.seq) : "put" === Dt.kind ? qe(Dt.seq, Dt.mode, Dt.item) : Oe(Dt.seq, Dt.mode, Dt.item) : null;
      var Dt
    }
    const Qe = "baf2rx";

    function le(tt, et) {
      for (var Vt = arguments.length, Ot = new Array(Vt > 2 ? Vt - 2 : 0), qt = 2; qt < Vt; qt++) Ot[qt - 2] = arguments[qt];
      return [Qe, tt[0], tt[1], tt[2], et, ...Ot].join(" ")
    }
    const Ee = 2,
      fe = 4,
      we = 8,
      ye = 16,
      Ne = 32,
      ae = 64,
      Me = 128,
      be = 256,
      Je = 512,
      Ce = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      ue = [{
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
    const Ke = "Biomass",
      he = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function ve(tt) {
      return {
        input: Ke,
        inputAmount: 1,
        output: tt,
        outputAmount: 1
      }
    }
    const We = "baf2synth",
      Se = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      ce = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Re = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      Ie = function(tt, et) {
        return {
          input: tt,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: et,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Pe = function(tt, et) {
        return {
          ...Ie(tt, et, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      Ze = ce.map((tt => Pe(tt, "Biomass", 2))),
      Le = {
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
          recipes: [Ie("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), Ie("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), Ie("Raw Gold", "Gold Grit", 2), Ie("Messy Stone", "Sand"), Ie("Gravel", "Sand"), Ie("Raw Voltite", "Voltite Dust", 2), Ie("Moonstone", "Moonstone Dust", 4), Ie("Wheat Seeds", "Fertiliser"), Ie("Raw Uranium", "Uranium Grit", 2), Pe("Mossy Messy Stone", "Sand"), ...Ze],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Ie("Iron Grit", "Iron Bar"), Ie("Copper Grit", "Copper Bar"), Ie("Gold Grit", "Gold Bar"), Ie("Raw Iron", "Iron Bar"), Ie("Raw Copper", "Copper Bar"), Ie("Raw Gold", "Gold Bar"), Ie("Sand", "Glass"), Ie("Messy Stone", "Stone"), ...Lt._c.map((tt => Ie(tt, "Charcoal", 1, 4))), Ie("Wheat", "Bread", 1, 2), ...ce.map(((tt, et) => Pe(tt, Re[et])))],
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
          recipes: [Ie("Iron Bar", "Iron Plate"), Ie("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Ie("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [Ie("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [Ie("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), Ie("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), Ie("Raw Gold", "Gold Grit", 3), Ie("Raw Voltite", "Voltite Dust", 3), Ie("Messy Stone", "Sand", 2), Ie("Gravel", "Sand", 2), Ie("Moonstone", "Moonstone Dust", 6), Ie("Raw Uranium", "Uranium Grit", 3), Pe("Mossy Messy Stone", "Sand", 2), ...Ze],
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
          table: Ce
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Ie("Coal", "Diamond", 1, 24), Ie("Voltite Dust", "Moonstone", 1, 12)],
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
        ...nt.j
      },
      Fe = {
        Crusher: [Ie("Spent Pellet", "Glow Dust"), Ie("Wheat Seeds", "Biomass"), Ie("Wheat", "Biomass"), Ie("Dead Bush", "Biomass"), Ie("Dusk Moss", "Biomass"), Ie("Rotten Flesh", "Biomass"), Ie("Bone", "Biomass", 2)],
        "Shatter Mill": [Ie("Spent Pellet", "Glow Dust"), Ie("Wheat Seeds", "Biomass"), Ie("Wheat", "Biomass"), Ie("Dead Bush", "Biomass"), Ie("Dusk Moss", "Biomass"), Ie("Rotten Flesh", "Biomass"), Ie("Bone", "Biomass", 2), ...Lt._c.map((tt => Ie(tt, "Biomass")))],
        Smelter: [Ie("Biomass", "Fertiliser", 2)],
        Press: [Ie("Coal", "Graphite", 1, 4)]
      },
      ke = "Power Coupler",
      Ge = "Advanced Coupler",
      ze = "Nova Coupler",
      oe = [{
        item: ke,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: Ge,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: ze,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const re = new Map;

    function Ue(tt) {
      var et, Vt;
      return null !== (et = null !== (Vt = tt.fuelSlot) && void 0 !== Vt ? Vt : tt.couplerSlot) && void 0 !== et ? et : null
    }

    function Ae(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!tt.couplable) throw new Error(`${tt.kind} takes no Power Coupler`);
      let Vt = re.get(tt);
      Vt || (Vt = [], re.set(tt, Vt));
      let Ot = Vt[et];
      if (!Ot) {
        var qt;
        const {
          divisor: Dt,
          powerPerS: mt
        } = oe[et - 1], dt = tt.opMs / Dt, jt = void 0 !== tt.fluidMade || void 0 !== tt.cryoMade ? tt.powerPerOp : mt * dt / 1e3;
        Ot = {
          ...tt,
          fuelSlot: null,
          couplerSlot: null !== (qt = Ue(tt)) && void 0 !== qt ? qt : void 0,
          opMs: dt,
          powerPerOp: jt,
          coupled: !0
        }, et > 1 && (Ot = {
          ...Ot,
          couplerLevel: et
        }), Vt[et] = Ot
      }
      return Ot
    }
    const ie = new Map;
    const Ye = new Map;

    function Be(tt, et) {
      if (null === et || (Vt = et, !he.includes(Vt))) return tt;
      var Vt;
      let Ot = Ye.get(et);
      return Ot || (Ot = {
        ...tt,
        recipes: [ve(et)]
      }, Ye.set(et, Ot)), Ot
    }

    function pe(tt) {
      return !0 === tt.synth
    }
    const xe = (tt, et, Vt, Ot) => ({
        output: tt,
        outputAmount: et,
        tier: Vt,
        inputs: Ot.map((tt => {
          let [et, Vt] = tt;
          return {
            item: et,
            amount: Vt
          }
        }))
      }),
      Te = Object.fromEntries([xe("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), xe("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), xe("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), xe("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), xe("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), xe("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), xe("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), xe("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), xe("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), xe("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), xe("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), xe("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), xe("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), xe("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), xe("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), xe("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), xe("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), xe("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), xe("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), xe("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), xe("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), xe("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), xe("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), xe("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), xe("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), xe("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), xe("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), xe("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), xe("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), xe("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((tt => [tt.output, tt]))),
      ge = new Map;

    function se(tt, et) {
      let Vt = Le[tt];
      if (et.atomic && (Vt = function(tt) {
          const et = Fe[tt.kind];
          if (!et) return tt;
          let Vt = ie.get(tt.kind);
          if (!Vt) {
            const Ot = new Set(et.map((tt => tt.input))),
              qt = tt.recipes.filter((tt => !Ot.has(tt.input)));
            Vt = {
              ...tt,
              recipes: [...qt, ...et]
            }, ie.set(tt.kind, Vt)
          }
          return Vt
        }(Vt)), Vt.synth) return Be(Vt, et.taught);
      if (et.coupled && Vt.couplable) return Ae(Vt, et.level);
      const Ot = Vt.inputSlots && null !== et.taught ? Te[et.taught] : void 0;
      if (!Ot) return Vt;
      const qt = `${tt}|${Ot.output}`;
      let Dt = ge.get(qt);
      return Dt || (Dt = {
        ...Vt,
        bench: Ot
      }, ge.set(qt, Dt)), Dt
    }
    const ne = ["Diamond", "Moonstone"];

    function tV(tt) {
      return new Set(tt.flatMap((tt => tt.bonus ? [tt.output, tt.bonus.item] : [tt.output])).filter((tt => !ne.includes(tt))))
    }
    const eV = Object.values(Le).flatMap((tt => tt.recipes));
    tV(eV.filter((tt => !0 !== tt.nuclear))), tV([...eV.filter((tt => !0 === tt.nuclear)), ...Object.values(Fe).flat()]);

    function VV(tt) {
      return null === tt.inputSlot && void 0 === tt.inputSlots && void 0 === tt.powerMade && void 0 === tt.fluidMade && !tt.treeCutter && void 0 === tt.table
    }

    function OV(tt) {
      return !0 === tt.treeCutter
    }
    const qV = ["Voltite Cell"];

    function DV(tt) {
      var et, Vt;
      return null !== (et = null === (Vt = tt.fuels) || void 0 === Vt ? void 0 : Vt.some((tt => qV.includes(tt)))) && void 0 !== et && et
    }
    const mV = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Lt._c.map((tt => [tt, 8e3]))),
        ...Object.fromEntries(Lt.Od.map((tt => [tt, 2e3]))),
        "Voltite Cell": 12e4
      },
      dV = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      jV = {
        "Uranium Deposit": 4e3
      };

    function HV(tt) {
      var et;
      return null !== (et = Object.keys(dV).find((et => dV[et] === tt))) && void 0 !== et ? et : null
    }

    function XV(tt) {
      return Se.includes(tt)
    }

    function QV(tt) {
      return !0 !== tt.nuclear || dt()
    }
    var lV = Vt(377);
    var EV = Vt(9492),
      fV = Vt(9432),
      wV = Vt(9497),
      yV = Vt(9489);
    const NV = "Reactor Controller",
      aV = "Reactor Port",
      MV = "Battery Cell",
      bV = ["fuel", "water", "waste"],
      JV = {
        fuel: aV,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      CV = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      uV = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      KV = "Reactor Frame",
      hV = "Reactor Glass",
      vV = {
        edge: [KV],
        cap: [hV, aV],
        wall: [hV, aV],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [NV]
      },
      WV = {
        edge: [MV],
        cap: [MV],
        wall: [MV],
        inside: [MV],
        ctrl: [MV]
      },
      SV = ["edge", "cap", "wall", "inside"],
      cV = ["Reactor Slag"];

    function RV(tt) {
      return cV.includes(IV(tt))
    }

    function IV(tt) {
      const et = tt.indexOf("|");
      return et < 0 ? tt : tt.slice(0, et)
    }

    function PV(tt) {
      return IV(tt) === NV ? "reactor" : null
    }

    function ZV(tt) {
      return IV(tt) !== aV ? null : tt.endsWith("|Water") ? "water" : tt.endsWith("|Waste") ? "waste" : "fuel"
    }

    function LV(tt) {
      const et = ZV(tt);
      return null === et ? null : GV(JV[bV[(bV.indexOf(et) + 1) % bV.length]], function(tt) {
        return tt.includes(FV)
      }(tt))
    }
    const FV = "|meta|rot1|Formed",
      kV = new Set([KV, hV, aV]);

    function GV(tt, et) {
      var Vt;
      const Ot = IV(tt);
      if (!kV.has(Ot)) return tt;
      if (Ot !== aV) return et ? Ot + FV : Ot;
      const qt = null !== (Vt = ZV(tt)) && void 0 !== Vt ? Vt : "fuel";
      return et ? "fuel" === qt ? Ot + FV : `${Ot}${FV}|${"water"===qt?"Water":"Waste"}` : JV[qt]
    }

    function zV(tt, et) {
      const Vt = qO(tt, et);
      if ("Air" === Vt) return !1;
      const Ot = "reactor" === tt ? vV : WV;
      return SV.some((tt => Ot[tt].includes(Vt))) || "reactor" === tt && cV.includes(Vt)
    }

    function oV(tt) {
      return uV[tt]
    }

    function rV(tt) {
      var et;
      return null !== (et = CV[tt]) && void 0 !== et ? et : CV[1]
    }

    function UV(tt) {
      const [et, , Vt] = rV(tt);
      return [Vt, 0, -et]
    }

    function AV(tt, et, Vt, Ot, qt, Dt) {
      return {
        ctrl: [tt[0], tt[1], tt[2]],
        rot: CV[et] ? et : 1,
        w: Vt,
        h: Ot,
        d: qt,
        cu: Dt[0],
        cv: Dt[1]
      }
    }

    function iV(tt, et) {
      return "reactor" === tt ? [Math.floor((et - 1) / 2), 0] : [0, 0]
    }

    function YV(tt, et, Vt, Ot, qt) {
      let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : tt.rot;
      if (Vt === tt.w && Ot === tt.h && qt === tt.d && Dt === tt.rot) return tt;
      const [mt] = iV(et, tt.w);
      if (tt.cu === mt && tt.cv <= 1) return AV(tt.ctrl, Dt, Vt, Ot, qt, iV(et, Vt));
      const dt = (tt, et) => Math.max(1, Math.min(et, tt));
      return AV(tt.ctrl, Dt, Vt, Ot, qt, [dt(tt.cu, Vt - 2), 0 === tt.cv ? 0 : dt(tt.cv, Ot - 2)])
    }
    const BV = 11,
      pV = 2 * BV + 1;
    new Uint8Array(pV * pV * pV);

    function xV(tt) {
      return tt.w * tt.h * tt.d
    }

    function TV(tt) {
      const et = UV(tt.rot);
      return [tt.ctrl[0] - et[0] * tt.cu, tt.ctrl[1] - tt.cv, tt.ctrl[2] - et[2] * tt.cu]
    }

    function gV(tt) {
      return tt.cv * tt.d * tt.w + tt.cu
    }

    function sV(tt, et) {
      const Vt = et % tt.w,
        Ot = Math.floor(et / tt.w) % tt.d;
      return [Vt, Math.floor(et / (tt.w * tt.d)), Ot]
    }

    function nV(tt, et) {
      const [Vt, Ot, qt] = sV(tt, et), Dt = TV(tt), mt = rV(tt.rot), dt = UV(tt.rot);
      return [Dt[0] + dt[0] * Vt - mt[0] * qt, Dt[1] + Ot, Dt[2] + dt[2] * Vt - mt[2] * qt]
    }

    function tO(tt, et) {
      const Vt = TV(tt),
        Ot = rV(tt.rot),
        qt = UV(tt.rot),
        Dt = et[0] - Vt[0],
        mt = et[2] - Vt[2],
        dt = Dt * qt[0] + mt * qt[2],
        jt = -(Dt * Ot[0] + mt * Ot[2]),
        Ht = et[1] - Vt[1];
      return dt < 0 || dt >= tt.w || Ht < 0 || Ht >= tt.h || jt < 0 || jt >= tt.d ? -1 : (Ht * tt.d + jt) * tt.w + dt
    }

    function eO(tt, et) {
      if (et === gV(tt)) return "ctrl";
      const [Vt, Ot, qt] = sV(tt, et), Dt = 0 === Ot || Ot === tt.h - 1, mt = Number(0 === Vt || Vt === tt.w - 1) + Number(Dt) + Number(0 === qt || qt === tt.d - 1);
      return mt >= 2 ? "edge" : 1 === mt ? Dt ? "cap" : "wall" : "inside"
    }

    function VO(tt, et) {
      const [Vt, Ot, qt] = sV(tt, et);
      return 0 === Vt || Vt === tt.w - 1 || 0 === Ot || Ot === tt.h - 1 || 0 === qt || qt === tt.d - 1 ? -1 : ((Ot - 1) * (tt.d - 2) + (qt - 1)) * (tt.w - 2) + (Vt - 1)
    }

    function OO(tt, et) {
      const Vt = tt.w - 2,
        Ot = tt.d - 2,
        qt = et % Vt + 1,
        Dt = Math.floor(et / Vt) % Ot + 1;
      return ((Math.floor(et / (Vt * Ot)) + 1) * tt.d + Dt) * tt.w + qt
    }

    function qO(tt, et) {
      const Vt = IV(et);
      return "reactor" === tt && Vt === NV ? KV : Vt
    }

    function DO(tt, et, Vt) {
      const Ot = "ctrl" === et ? IV(Vt) : qO(tt, Vt);
      return ("reactor" === tt ? vV : WV)[et].includes(Ot) ? "ok" : "Air" === Ot ? "missing" : zV(tt, Vt) ? "wrong" : "blocked"
    }

    function mO(tt, et) {
      return "battery" === tt ? MV : "inside" === et ? null : function(tt, et) {
        if ("inside" === et || "ctrl" === et || "battery" === tt) return null;
        return "edge" === et ? KV : hV
      }(tt, et)
    }
    const dO = {
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
      jO = "Collider",
      HO = "Laser",
      XO = "Star Alloy",
      QO = "Glow Dust",
      lO = [jO, "_Collider Focus"];

    function EO(tt) {
      return lO.indexOf(IV(tt))
    }

    function fO(tt) {
      return IV(tt) === HO
    }

    function wO(tt) {
      return [
        [tt[0], tt[1], tt[2]],
        [tt[0], tt[1] + 1, tt[2]]
      ]
    }
    const yO = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function NO(tt, et, Vt) {
      const Ot = yO[et];
      return [tt[0] + Ot[0] * Vt, tt[1], tt[2] + Ot[2] * Vt]
    }

    function aO(tt, et) {
      if (et[1] !== tt[1]) return null;
      const Vt = et[0] - tt[0],
        Ot = et[2] - tt[2];
      if (0 !== Vt === (0 !== Ot)) return null;
      const qt = Math.abs(Vt + Ot);
      if (qt > dO.LASER_D) return null;
      return {
        dir: Ot < 0 ? 0 : Vt > 0 ? 1 : Ot > 0 ? 2 : 3,
        pm: qt
      }
    }

    function MO(tt, et, Vt) {
      const Ot = et => Math.abs(tt[0] - et[0]) <= 1 && Math.abs(tt[1] - et[1]) <= 1;
      return Ot(et) || Ot(Vt)
    }

    function bO(tt, et) {
      return function(tt, et, Vt, Ot) {
        return [0, 1, 2, 3].map((qt => {
          for (let Dt = 1; Dt <= dO.LASER_D; Dt++) {
            const mt = NO(tt, qt, Dt);
            if (MO([mt[0], mt[2]], et, Vt) || !Ot(mt)) return !1
          }
          return !0
        }))
      }(wO(tt)[1], et.spawnXZ, et.coreXZ, (tt => tt[1] >= EV.l && tt[1] < EV.l + EV.n && tt[0] >= et.minXZ[0] && tt[0] <= et.maxXZ[0] && tt[2] >= et.minXZ[1] && tt[2] <= et.maxXZ[1]))
    }
    const JO = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function CO(tt) {
      return Math.max(48 + 16 * tt, Nt(tt).machineAllowance)
    }
    const uO = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function KO(tt) {
      const et = tt.split("|")[0];
      return uO.includes(et) ? "Solar Panel" : et === wV.e ? "Fluid Pipe" : EO(et) >= 0 ? "Collider" : (Vt = et, JO.includes(Vt) ? et : null);
      var Vt
    }
    const hO = "buildAFactory2Game:solarPanelDescription";
    const vO = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function WO(tt, et) {
      var Vt;
      return null !== (Vt = vO.find((Vt => {
        var Ot;
        return (null !== (Ot = tt.level(Vt)) && void 0 !== Ot ? Ot : 0) >= et
      }))) && void 0 !== Vt ? Vt : null
    }
    const SO = "buildAFactory2Game:";
    let cO = null;
    const RO = {
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
      IO = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      PO = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      ZO = {
        "Loot Chest": `${SO}lookRuinChestName`
      };

    function LO(tt) {
      return "object" === typeof tt && null !== tt && "translationKey" in tt && "string" === typeof tt.translationKey ? tt.translationKey : null
    }

    function FO(tt, et) {
      var Vt;
      return null !== (Vt = LO(tt.displayName(et))) && void 0 !== Vt ? Vt : `item:${(0,Lt.Pe)(et)}`
    }

    function kO(tt, et) {
      var Vt, Ot, qt, Dt;
      let mt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : et;
      if ("Solar Panel" === KO(et)) return {
        name: LO(tt.displayName("Solar Panel")),
        detail: hO,
        detailItem: null
      };
      const jt = et.endsWith(" Ore"),
        Ht = (cO ??= new Set([...Object.keys((0, fV.g)()), ...Object.keys((0, wV.s)())].map((tt => tt.split("|")[0]))), cO).has(et),
        Xt = jt || Ht ? null : function(tt) {
          var et;
          return tt.endsWith(" Log") && !tt.startsWith("Barkless ") ? "lookLog" : tt.endsWith(" Sapling") ? "lookSapling" : tt.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (et = RO[tt]) && void 0 !== et ? et : null
        }(et);
      if (!tt.isBlock(et) || !jt && !Ht && null === Xt) return null;
      const Qt = null !== (Vt = null !== (Ot = ZO[et]) && void 0 !== Ot ? Ot : LO(null !== (qt = tt.displayName(mt)) && void 0 !== qt ? qt : tt.displayName(et))) && void 0 !== Vt ? Vt : `item:${(0,Lt.Pe)(et)}`;
      if (null !== Xt) return {
        name: Qt,
        detail: `${SO}${Xt}`,
        detailItem: null
      };
      const lt = null !== (Dt = IO[et]) && void 0 !== Dt ? Dt : dt() ? PO[et] : void 0;
      if (Ht && void 0 !== lt) return {
        name: Qt,
        detail: `${SO}${lt}`,
        detailItem: null
      };
      const Et = dV[et];
      if (void 0 !== Et) return {
        name: Qt,
        detail: `${SO}lookDeposit`,
        detailItem: FO(tt, Et)
      };
      const ft = tt.harvestLevel(et);
      if (jt && "rock" === tt.harvestType(et) && 0 !== ft) {
        const et = WO(tt, null !== ft && void 0 !== ft ? ft : 0);
        if (et === vO[0]) return {
          name: Qt,
          detail: `${SO}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== et) return {
          name: Qt,
          detail: `${SO}lookPickaxe`,
          detailItem: FO(tt, et)
        }
      }
      return {
        name: Qt,
        detail: LO(tt.description(et)),
        detailItem: null
      }
    }

    function GO(tt) {
      return tt < EV.l - 24
    }
    const zO = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const oO = "Wrench",
      rO = "Nova Wrench";

    function UO(tt) {
      return tt === oO || tt === rO
    }
    const AO = [...EV.C, "Belt Lift", "Belt Drop"];
    const iO = ["Belt Lift", "Belt Drop"],
      YO = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function BO(tt) {
      return tt.split("|")[0]
    }

    function pO(tt) {
      const et = /\|rot(\d)/.exec(tt);
      return et ? Number(et[1]) : 1
    }

    function xO(tt) {
      return tt % 4 + 1
    }

    function TO(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === et && "" === Vt ? tt : `${tt}|meta|rot${et}${Vt}`
    }

    function gO(tt) {
      return BO(tt) === EV.s ? (0, EV.J)(tt) ? "gateRight" : "gateLeft" : (0, EV.N)(tt)
    }

    function sO(tt) {
      const et = BO(tt),
        Vt = pO(tt);
      if (EV.C.includes(et)) return (0, EV.D)(et, xO(Vt), null);
      if (et === EV.f) return (0, EV.S)(xO(Vt), (0, EV.L)(tt));
      if (et === EV.v) {
        const Ot = YO[(0, EV.N)(tt)];
        return null === Ot ? TO(et, xO(Vt)) : TO(et, Vt, EV.x[Ot])
      }
      return et === EV.s ? (0, EV.J)(tt) ? TO(et, xO(Vt)) : TO(et, Vt, EV.h) : yV.d.includes(et) && !iO.includes(et) || XV(et) ? TO(et, xO(Vt)) : null
    }

    function nO(tt) {
      return yV.d.includes(tt) || XV(tt) || null !== KO(tt)
    }

    function tq(tt) {
      return "Solar Panel" === KO(tt)
    }
    const eq = "buildAFactory2Game:",
      Vq = {
        leftFront: `${eq}lookSplitDetail_leftFront`,
        frontRight: `${eq}lookSplitDetail_frontRight`,
        gateRight: `${eq}lookGateDetail_gateRight`
      };

    function Oq(tt, et) {
      var Vt;
      let Ot = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const qt = gO(tt),
        Dt = null === qt ? null : `${eq}${qt.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${qt}`,
        mt = null === qt ? null : null !== (Vt = Vq[qt]) && void 0 !== Vt ? Vt : null;
      if (UO(et) && Ot) {
        const Vt = BO(tt);
        return et === rO && dt() && function(tt) {
          return AO.includes(BO(tt))
        }(tt) ? {
          mode: Dt,
          detail: mt,
          next: `${eq}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: Dt,
          detail: mt,
          next: nO(Vt) && !tq(Vt) ? `${eq}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const jt = UO(et) ? sO(tt) : null;
      if (null === jt) return {
        mode: Dt,
        detail: mt,
        next: null,
        nextState: null
      };
      const Ht = gO(jt);
      return null === Ht || pO(jt) !== pO(tt) ? {
        mode: Dt,
        detail: mt,
        next: `${eq}lookWrenchTurn`,
        nextState: null
      } : {
        mode: Dt,
        detail: mt,
        next: `${eq}lookWrenchNext`,
        nextState: `${eq}lookWrenchState_${Ht}`
      }
    }
    const qq = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const Dq = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function mq(tt) {
      return [0, 1, 2, 3].map((et => 0 !== (tt & 1 << et)))
    }

    function dq(tt) {
      const et = [];
      for (let Vt = 8; Vt + 2 < tt.length; Vt += 3) et.push([tt[Vt], tt[Vt + 1], tt[Vt + 2]]);
      return {
        focus: [tt[0], tt[1], tt[2]],
        lasers: mq(tt[3]),
        open: mq(tt[4]),
        live: mq(tt[5]),
        on: 1 === tt[6],
        state: Dq[tt[7]],
        blockers: et
      }
    }
    const jq = "Arc Caster",
      Hq = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      Xq = (Object.values(Hq), "Jet Chestplate"),
      Qq = "Nova Jet Chestplate",
      lq = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Eq = Object.values(lq);

    function fq(tt, et, Vt) {
      return Math.min(function(tt) {
        return dt() && Qt(tt) >= 5 ? 20 : 10
      }(Vt), Math.floor(function(tt, et) {
        return Math.max(0, tt) + (dt() ? Math.max(0, et) : 0)
      }(tt, et) / 5))
    }

    function wq(tt, et, Vt) {
      const Ot = fq(et, Vt, tt),
        qt = Qt(tt),
        Dt = (qt >= 3 ? 55 : qt >= 1 ? 50 : tt >= 8 ? 45 : 30) + Ot,
        mt = Math.max(100 + Ot, 2 * Dt);
      return {
        arcDamage: Dt,
        arcPierce: tt >= 7 ? 2 : 1,
        arcChain: tt >= 10,
        barrierMax: (qt >= 4 ? 100 : qt >= 2 ? 90 : tt >= 9 ? 80 : tt >= 6 ? 60 : 40) + 5 * Ot,
        barrierRegenPerS: qt >= 5 ? 20 : tt >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Ot,
        novaShieldRegenPerS: 32,
        bladeDamage: mt,
        bladePunch: Math.round(.5 * mt),
        forgeRank: Ot
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
    var Nq = Vt(37060),
      aq = Vt(36867),
      Mq = Vt(36861),
      bq = Vt(26),
      Jq = Vt(1732),
      Cq = Vt(1140),
      uq = Vt.n(Cq);

    function Kq(tt) {
      return !0 === tt.field
    }
    const hq = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function vq(tt) {
      return hq.has(tt) ? `buildAFactory2Game:itemPlural_${(0,Lt.Pe)(tt)}` : null
    }
    var Wq = Vt(1286),
      Sq = Vt(1152),
      cq = Vt(2018),
      Rq = Vt(2001),
      Iq = Vt(1499),
      Pq = Vt(37055),
      Zq = Vt(31),
      Lq = Vt(37053);
    const Fq = "baf2QuestView",
      kq = "baf2PlayerY",
      Gq = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class zq {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = tt, this.view = {
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
      set(tt, et) {
        var Vt, Ot, qt, Dt, mt, dt, jt, Ht;
        const Xt = JSON.stringify(tt.baf2QuestName) === JSON.stringify(this.view.name),
          Qt = new Set(this.view.rows.filter((tt => tt.done)).map((tt => tt.id))),
          lt = new Set(this.view.rows.filter((tt => tt.justFinished)).map((tt => tt.id))),
          Et = tt.baf2QuestSide,
          ft = null !== Et && !0 === tt.baf2QuestSideFocus;
        let wt = !1,
          yt = 0;
        const Nt = tt.baf2QuestSteps.map((tt => {
            const et = pq(tt, Gq.has(tt[0]) ? tt[0] : "" + yt++),
              Vt = Xt && et.done && !Qt.has(et.id);
            return et.justFinished = Vt || Xt && et.done && lt.has(et.id), wt ||= Vt, et
          })),
          Mt = Bq(Nt);
        Mt >= 0 && !ft && (Nt[Mt].current = !0);
        const bt = !Xt && null !== tt.baf2QuestName,
          Jt = JSON.stringify(Et && [Et[0], Et[1]]),
          Ct = Jt === JSON.stringify(null !== (Vt = null === (Ot = this.view.side) || void 0 === Ot ? void 0 : Ot.name) && void 0 !== Vt ? Vt : null),
          ut = null !== Et && !this.sidesSeen.has(Jt);
        ut && this.sidesSeen.add(Jt), this.serverTutorial = null !== (qt = tt.baf2QuestTutorial) && void 0 !== qt ? qt : "on", (null !== (Dt = tt.baf2QuestTutorialSeq) && void 0 !== Dt ? Dt : 0) >= this.pickSeq && this.endPick();
        const Kt = !Xt || !Ct || tt.baf2QuestTier !== this.view.tier;
        this.view = {
          name: tt.baf2QuestName,
          rows: Nt,
          reward: tt.baf2QuestReward,
          goal: tt.baf2QuestGoal,
          pulse: this.view.pulse + (wt || bt ? 1 : 0),
          itemNames: et,
          side: Et && {
            name: [Et[0], Et[1]],
            row: {
              ...pq(Et[2], "side"),
              current: ft
            },
            goal: null !== (mt = Et[3]) && void 0 !== mt ? mt : null
          },
          sideCameUpAt: ut ? Date.now() : this.view.sideCameUpAt,
          tier: tt.baf2QuestTier,
          core: tt.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (dt = tt.baf2QuestAlso) && void 0 !== dt ? dt : [],
          depth: null !== (jt = tt.baf2QuestDepth) && void 0 !== jt ? jt : null,
          tutorial: null !== (Ht = this.pickedTutorial) && void 0 !== Ht ? Ht : this.serverTutorial,
          tutorialKnown: !0
        }, this.sw(), wt && this.scheduleClear(), Kt && this.requestBook()
      }
      setTutorial(tt) {
        return this.endPick(), this.pickedTutorial = tt, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.sw()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: tt
        }, this.sw(), this.pickSeq
      }
      onPlayerY(tt) {
        const et = Math.floor(tt);
        et !== this.playerY && (this.playerY = et, this.view.depth && Zq.j.sw(kq, et))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(tt) {
        this.view = {
          ...this.view,
          chapters: tt.baf2BookChapters
        }, this.sw()
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
            rows: this.view.rows.map((tt => tt.justFinished ? {
              ...tt,
              justFinished: !1
            } : tt))
          }, this.sw()
        }), 2400)
      }
      sw() {
        Zq.j.sw(Fq, this.view, !0)
      }
    }

    function oq(tt, et) {
      return tt.sideCameUpAt > 0 && et - tt.sideCameUpAt < 2400
    }

    function rq(tt) {
      return (null === tt.name || Uq(tt)) && null === tt.side && null !== tt.chapters
    }

    function Uq(tt) {
      var et;
      return "quest_forgeOngoing" === (null === (et = tt.name) || void 0 === et ? void 0 : et[0])
    }

    function Aq(tt) {
      return tt.filter((tt => !Gq.has(tt.key)))
    }

    function iq(tt) {
      return tt.key.startsWith("stepCraft")
    }

    function Yq(tt, et) {
      const Vt = new Set,
        Ot = tt.side ? [...tt.rows, tt.side.row] : tt.rows;
      for (const Dt of Ot)
        if (!Dt.done) {
          !Dt.item || et && !iq(Dt) || Vt.add(Dt.item);
          for (const [tt, et, Ot] of null !== (qt = Dt.chips) && void 0 !== qt ? qt : []) {
            var qt;
            et < Ot && Vt.add(tt)
          }
        } return Vt
    }

    function Bq(tt) {
      const et = tt.findIndex((tt => !tt.done && !tt.away));
      return et >= 0 ? et : tt.findIndex((tt => !tt.done))
    }

    function pq(tt, et) {
      let [Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt] = tt;
      return {
        id: et,
        key: Vt,
        params: Ot,
        item: qt,
        amount: Dt,
        total: mt,
        done: dt,
        chips: null !== jt && void 0 !== jt ? jt : null,
        current: !1,
        away: !0 === Ht,
        madeFor: null !== Xt && void 0 !== Xt ? Xt : [],
        also: null !== Qt && void 0 !== Qt ? Qt : [],
        justFinished: !1
      }
    }
    const xq = "baf2QuestItems",
      Tq = new Set;
    let gq = new Set,
      sq = null;

    function nq(tt) {
      const et = Zt(tt.tutorial),
        Vt = et ? Yq(tt, !0) : Tq;
      "inventory" === bq.b.get("openInGameMenuName") ? (sq = null, (0, Lq.v)(Vt)) : sq = Vt;
      const Ot = et ? Yq(tt, !1) : Tq;
      (0, Pq.e)(Ot, gq) || (gq = Ot, Zq.j.sw(xq, gq))
    }

    function tD() {
      return (0, Iq.d)(xq, (() => gq))
    }
    var eD = Vt(34399),
      VD = Vt(3346);

    function OD(tt) {
      const et = (0, VD.b)(tt),
        Vt = void 0 === et ? void 0 : (0, eD.displayNameOf)(et);
      return "object" === typeof Vt && null !== Vt && "translationKey" in Vt && "string" === typeof Vt.translationKey ? Vt.translationKey : `item:${(0,Lt.Pe)(tt)}`
    }

    function qD(tt, et) {
      return tt(OD(et))
    }
    const DD = [{
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

    function mD(tt, et) {
      return [`Deposit Seed (${tt})`, {
        item: dV[`${tt} Deposit`],
        amount: et
      }]
    }
    const dD = Object.fromEntries([mD("Coal", 8), mD("Iron", 8), mD("Copper", 8), mD("Gold", 6), mD("Voltite", 4), mD("Uranium", 4)]),
      jD = "Relay Coil",
      HD = new Map;

    function XD(tt) {
      let et = HD.get(tt);
      if (!et) {
        const Vt = Math.max(1, tt);
        et = DD.filter((tt => {
          var et;
          return Vt >= tt.fromTier && Vt <= (null !== (et = tt.untilTier) && void 0 !== et ? et : 1 / 0)
        })).map((tt => tt.later && Vt >= tt.later.tier ? {
          ...tt,
          weight: tt.later.weight
        } : tt)), HD.set(tt, et)
      }
      return et
    }

    function QD(tt) {
      return XD(tt).some((tt => {
        let {
          item: et
        } = tt;
        return et === jD
      }))
    }

    function lD(tt) {
      return tt.startsWith("Deposit Seed (")
    }

    function ED(tt, et) {
      const Vt = XD(tt);
      return et ? Vt.filter((tt => et(tt.item))) : Vt
    }

    function fD(tt) {
      return tt.reduce(((tt, et) => tt + et.weight), 0)
    }

    function wD(tt, et) {
      const Vt = ED(tt, et),
        Ot = fD(Vt);
      return Vt.map((tt => ({
        find: tt,
        chance: tt.weight / Ot
      })))
    }
    const yD = 6e4,
      ND = new Intl.NumberFormat("en-US");

    function aD(tt, et) {
      const Vt = tt >= 10 ? Math.round(tt) : Math.round(10 * tt) / 10;
      return 0 === Vt ? "0" : `${et}${ND.format(Vt)}`
    }

    function MD(tt) {
      return tt < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? ND.format(tt) : tt < 1e6 ? `${tt<1e5?Math.floor(tt/100)/10:Math.floor(tt/1e3)}k` : Math.floor(tt / 1e5) / 10 + "M"
    }

    function bD(tt) {
      return tt < 0 ? "\u2212" + -tt : String(tt)
    }

    function JD(tt, et) {
      const Vt = Math.max(1, Math.round(et));
      if (Vt < 60) return tt("buildAFactory2Game:durationSeconds", {
        seconds: String(Vt)
      });
      const Ot = Math.round(Vt / 60);
      if (Ot < 60) return tt("buildAFactory2Game:durationMinutes", {
        minutes: String(Ot)
      });
      const qt = String(Math.floor(Ot / 60));
      return Ot % 60 === 0 ? tt("buildAFactory2Game:durationWholeHours", {
        hours: qt
      }) : tt("buildAFactory2Game:durationHours", {
        hours: qt,
        minutes: String(Ot % 60)
      })
    }
    var CD = Vt(2564);
    const uD = "(max-height: 420px), (max-width: 650px)";

    function KD() {
      return (0, CD.d)(uD)
    }
    var hD = Vt(1188);

    function vD(tt, et) {
      return null !== tt && tt > et + 1
    }

    function WD(tt) {
      const et = 100 * tt;
      return String(et <= 0 || et >= 1 ? Math.round(et) : Math.max(.1, Math.round(10 * et) / 10))
    }

    function SD(tt) {
      let {
        item: et,
        amount: Vt
      } = tt;
      return (0, hD.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, hD.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, hD.jsx)(cq.e, {
            itemName: et,
            amount: 0
          })
        }), Vt > 1 && (0, hD.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", Vt]
        })]
      })
    }

    function cD(tt) {
      let {
        label: et,
        names: Vt
      } = tt;
      const [qt, Dt] = (0, Ot.useState)(!1), mt = Vt.join(" / ");
      return (0, hD.jsxs)(hD.Fragment, {
        children: [(0, hD.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: mt,
          "aria-expanded": qt,
          onClick: () => {
            Dt(!qt)
          },
          children: et
        }), qt && (0, hD.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: mt
        })]
      })
    }

    function RD(tt) {
      let {
        tier: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)(), {
        key: Ot,
        params: qt
      } = Et(et, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), Dt = Vt(`buildAFactory2Game:${Ot}`, qt);
      return (0, hD.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, hD.jsx)(Sq.b, {
          name: "lock"
        }), Dt]
      })
    }
    const ID = (0, Ot.createContext)(null);

    function PD() {
      const {
        t: tt
      } = (0, Wq.H)(), et = (0, Ot.useContext)(ID);
      return (0, Ot.useEffect)((() => null === et || void 0 === et ? void 0 : et()), [et]), (0, hD.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: tt("buildAFactory2Game:recipeForQuest"),
        "aria-label": tt("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function ZD(tt) {
      let {
        title: et,
        count: Vt,
        children: qt,
        startOpen: Dt = !0
      } = tt;
      const {
        t: mt
      } = (0, Wq.H)(), [dt, jt] = (0, Ot.useState)((() => Dt && !KD())), [Ht, Xt] = (0, Ot.useState)(0), Qt = (0, Ot.useCallback)((() => (Xt((tt => tt + 1)), () => {
        Xt((tt => tt - 1))
      })), []);
      return (0, hD.jsxs)("div", {
        className: uq()("Baf2Recipes", {
          Open: dt
        }),
        children: [(0, hD.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            jt(!dt)
          },
          "aria-expanded": dt,
          children: [mt("buildAFactory2Game:recipesToggle", {
            title: et,
            count: String(Vt)
          }), (0, hD.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: dt ? "\u25be" : "\u25b8"
          })]
        }), dt && (0, hD.jsxs)(ID.Provider, {
          value: Qt,
          children: [(0, hD.jsx)("ul", {
            className: "Baf2RecipeList",
            children: qt
          }), Ht > 0 && (0, hD.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, hD.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), mt("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const LD = "buildAFactory2Game:",
      FD = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const kD = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      GD = {
        "Uranium Grit": Dt,
        "Raw Uranium": Dt
      };

    function zD(tt) {
      var et;
      return null !== (et = GD[tt]) && void 0 !== et ? et : Math.max(gt(tt), kD[tt] ? gt(kD[tt]) : 1, function(tt) {
        const et = qt.findIndex((et => et.cost.some((et => et.item === tt))));
        return et > Dt ? et : 1
      }(tt))
    }

    function oD(tt, et) {
      return rD(et) ? zD(et) : function(tt) {
        if (FD.has(tt)) return 1;
        const et = qt.findIndex((et => et.newDeposits.some((et => {
          let {
            block: Vt
          } = et;
          return Vt === tt
        }))));
        return et < 0 ? 1 : et + 1
      }(tt)
    }

    function rD(tt) {
      return tt in GD || Qt(zD(tt)) > 0
    }

    function UD(tt, et) {
      return se(tt, {
        coupled: !1,
        taught: null,
        atomic: dt() && et >= 11
      }).recipes
    }

    function AD(tt, et) {
      const Vt = lt(tt, et, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qt(tt) > 0);
      return "open" === Vt || "locked" === Vt
    }

    function iD(tt, et) {
      return tt.map(((tt, Vt) => ({
        value: tt,
        idx: Vt,
        tier: et(tt)
      }))).sort(((tt, et) => tt.tier - et.tier || tt.idx - et.idx)).map((tt => {
        let {
          value: et
        } = tt;
        return et
      }))
    }

    function YD(tt, et, Vt) {
      const Ot = lt(tt, et);
      if ("hidden" === Ot || "open" === Ot) return null;
      if ("teaser" === Ot) return {
        tag: {
          translationKey: `${LD}${Vt?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${LD}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const qt = Et(tt, {
          tier: Vt ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        Dt = Et(tt, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${LD}${qt.key}`,
          params: qt.params
        },
        reason: {
          translationKey: `${LD}${Dt.key}`,
          params: Dt.params
        }
      }
    }

    function BD(tt) {
      return !lD(tt)
    }

    function pD(tt) {
      let {
        seconds: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)();
      return (0, hD.jsx)(ZD, {
        title: Vt("buildAFactory2Game:recipesCuts", {
          seconds: et
        }),
        count: 1,
        children: (0, hD.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, hD.jsx)(SD, {
            item: "Maple Sapling",
            amount: 1
          }), (0, hD.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, hD.jsx)(SD, {
            item: "Maple Log",
            amount: 1
          }), (0, hD.jsx)("span", {
            className: "Baf2RecipeName",
            children: Vt("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function xD(tt) {
      let {
        fertilised: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)();
      return (0, hD.jsxs)(ZD, {
        title: Vt("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, hD.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, hD.jsx)(SD, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, hD.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, hD.jsx)(SD, {
            item: "Wheat",
            amount: 1
          }), (0, hD.jsx)(SD, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, hD.jsx)("span", {
            className: "Baf2RecipeName",
            children: Vt("buildAFactory2Game:recipeField")
          })]
        }), (0, hD.jsxs)("li", {
          className: uq()("Baf2Recipe", {
            InUse: et
          }),
          children: [(0, hD.jsx)(SD, {
            item: "Fertiliser",
            amount: 1
          }), (0, hD.jsx)("span", {
            className: "Baf2RecipeName",
            children: Vt("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function TD(tt) {
      let {
        tier: et,
        seconds: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Wq.H)(), qt = function(tt) {
        return tt >= 5 ? ue : Ce
      }(et);
      return (0, hD.jsx)(ZD, {
        title: Ot("buildAFactory2Game:recipesBringsUp", {
          seconds: Vt
        }),
        count: qt.length,
        children: qt.map((tt => {
          let {
            item: et,
            chance: Vt
          } = tt;
          return (0, hD.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, hD.jsx)(SD, {
              item: et,
              amount: 1
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeName",
              children: qD(Ot, et)
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Ot("buildAFactory2Game:recipeChance", {
                percent: WD(Vt)
              })
            })]
          }, et)
        }))
      })
    }

    function gD(tt) {
      let {
        tier: et,
        seconds: Vt,
        noSeeds: Ot
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)(), Dt = tD(), mt = wD(et, Ot ? BD : void 0), dt = Ot && wD(et).length > mt.length, jt = QD(et);
      return (0, hD.jsxs)(ZD, {
        title: qt("buildAFactory2Game:recipesRecycles", {
          seconds: Vt
        }),
        count: mt.length,
        children: [mt.map((tt => {
          let {
            find: et,
            chance: Vt
          } = tt;
          return (0, hD.jsxs)("li", {
            className: "Baf2Recipe",
            children: [Dt.has(et.item) && (0, hD.jsx)(PD, {}), (0, hD.jsx)(SD, {
              item: et.item,
              amount: et.amount
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeName",
              children: qD(qt, et.item)
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: qt("buildAFactory2Game:recipeChance", {
                percent: WD(Vt)
              })
            })]
          }, et.item)
        })), dt && (0, hD.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, hD.jsx)("span", {
            className: "Baf2RecipeName",
            children: qt("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), jt && (0, hD.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, hD.jsx)("span", {
            className: "Baf2RecipeName",
            children: qt("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function sD(tt) {
      let {
        tier: et,
        seconds: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Wq.H)(), qt = Object.entries(dD).filter((tt => {
        let [, {
          item: Vt
        }] = tt;
        return AD(zD(Vt), et, rD(Vt))
      }));
      return (0, hD.jsx)(ZD, {
        title: Ot("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: Vt
        }),
        count: qt.length,
        children: qt.map((tt => {
          let [et, {
            item: Vt,
            amount: qt
          }] = tt;
          return (0, hD.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, hD.jsx)(SD, {
              item: et,
              amount: 1
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, hD.jsx)(SD, {
              item: Vt,
              amount: qt
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeName",
              children: qD(Ot, Vt)
            })]
          }, et)
        }))
      })
    }

    function nD(tt) {
      let {
        tier: et,
        seconds: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Wq.H)(), qt = tD(), Dt = iD(Object.entries(dV).filter((tt => {
        let [Vt, Ot] = tt;
        return AD(oD(Vt, Ot), et, rD(Ot))
      })), (tt => {
        let [et, Vt] = tt;
        return oD(et, Vt)
      }));
      return (0, hD.jsx)(ZD, {
        title: Ot("buildAFactory2Game:recipesDigs", {
          seconds: Vt
        }),
        count: Dt.length,
        children: Dt.map((tt => {
          let [Vt, Dt] = tt;
          const mt = oD(Vt, Dt),
            dt = mt > et ? mt : null,
            jt = jV[Vt],
            Ht = null === dt && qt.has(Dt);
          return (0, hD.jsxs)("li", {
            className: uq()("Baf2Recipe", {
              Locked: null !== dt,
              Far: vD(dt, et)
            }),
            children: [Ht && (0, hD.jsx)(PD, {}), (0, hD.jsx)(SD, {
              item: Vt,
              amount: 1
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, hD.jsx)(SD, {
              item: Dt,
              amount: 1
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeName",
              children: qD(Ot, Dt)
            }), void 0 !== jt && (0, hD.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Ot("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / jt)
              })
            }), null !== dt && (0, hD.jsx)(RD, {
              tier: dt
            })]
          }, Vt)
        }))
      })
    }

    function tm(tt) {
      var et;
      let {
        def: Vt,
        seconds: Ot
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)();
      return (0, hD.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, hD.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (et = Vt.fuels) && void 0 !== et ? et : []).map((tt => (0, hD.jsx)(SD, {
            item: tt,
            amount: 1
          }, tt))), (0, hD.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, hD.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, hD.jsx)(Sq.b, {
              name: "bolt"
            }), qt("buildAFactory2Game:recipePower", {
              power: st(Vt.powerMade),
              seconds: Ot
            })]
          })]
        })
      })
    }

    function em(tt) {
      let {
        def: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)();
      return (0, hD.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, hD.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, hD.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, hD.jsx)(Sq.b, {
              name: "bolt"
            }), Vt("buildAFactory2Game:recipeMixer", {
              cryo: aD((0, nt.I)(et, et.cryoMade), "")
            })]
          })
        })
      })
    }

    function Vm(tt) {
      let {
        def: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)();
      return (0, hD.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, hD.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, hD.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, hD.jsx)(Sq.b, {
              name: "bolt"
            }), Vt("buildAFactory2Game:recipeCondenser", {
              power: aD((0, nt.I)(et, et.powerPerOp), ""),
              water: aD((0, nt.I)(et, et.fluidMade), "")
            })]
          })
        })
      })
    }

    function Om(tt) {
      let {
        kind: et,
        def: Vt,
        input: Ot,
        tier: qt,
        noSeeds: Dt = !1
      } = tt;
      const mt = String(Vt.opMs / 1e3);
      return OV(Vt) ? (0, hD.jsx)(pD, {
        seconds: mt
      }) : Vt.field ? (0, hD.jsx)(xD, {
        fertilised: null !== Ot
      }) : Vt.table ? (0, hD.jsx)(TD, {
        tier: qt,
        seconds: mt
      }) : Vt.recycles ? (0, hD.jsxs)(hD.Fragment, {
        children: [(0, hD.jsx)(gD, {
          tier: qt,
          seconds: mt,
          noSeeds: Dt
        }), (0, hD.jsx)(sD, {
          tier: qt,
          seconds: mt
        })]
      }) : VV(Vt) ? (0, hD.jsx)(nD, {
        tier: qt,
        seconds: mt
      }) : void 0 !== Vt.fluidMade ? (0, hD.jsx)(Vm, {
        def: Vt
      }) : void 0 !== Vt.cryoMade ? (0, hD.jsx)(em, {
        def: Vt
      }) : void 0 !== Vt.powerMade ? (0, hD.jsx)(tm, {
        def: Vt,
        seconds: mt
      }) : (0, hD.jsx)(qm, {
        kind: et,
        input: Ot,
        tier: qt,
        seconds: mt
      })
    }

    function qm(tt) {
      let {
        kind: et,
        input: Vt,
        tier: Ot,
        seconds: qt
      } = tt;
      const {
        t: Dt
      } = (0, Wq.H)(), mt = tD(), dt = iD(function(tt) {
        const et = new Map;
        for (const qt of tt) {
          var Vt, Ot;
          const tt = [qt.output, qt.outputAmount, qt.inputAmount, null === (Vt = qt.bonus) || void 0 === Vt ? void 0 : Vt.item, null === (Ot = qt.bonus) || void 0 === Ot ? void 0 : Ot.chance].join("|"),
            Dt = et.get(tt);
          Dt ? Dt.inputs.push(qt.input) : et.set(tt, {
            inputs: [qt.input],
            inputAmount: qt.inputAmount,
            output: qt.output,
            outputAmount: qt.outputAmount,
            bonus: qt.bonus
          })
        }
        return [...et.values()]
      }(UD(et, Ot).filter(QV)), (tt => zD(tt.output))).filter((tt => AD(zD(tt.output), Ot, rD(tt.output))));
      return (0, hD.jsx)(ZD, {
        title: Dt("buildAFactory2Game:recipesEach", {
          seconds: qt
        }),
        count: dt.length,
        children: dt.map((tt => {
          const et = null !== Vt && tt.inputs.includes(Vt),
            qt = tt.inputs.length > 3 ? [et ? Vt : tt.inputs[0]] : tt.inputs,
            dt = zD(tt.output) > Ot ? zD(tt.output) : null,
            jt = null === dt && mt.has(tt.output);
          return (0, hD.jsxs)("li", {
            className: uq()("Baf2Recipe", {
              InUse: et,
              Locked: null !== dt,
              Far: vD(dt, Ot)
            }),
            children: [jt && (0, hD.jsx)(PD, {}), qt.map(((et, Vt) => (0, hD.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [Vt > 0 && (0, hD.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, hD.jsx)(SD, {
                item: et,
                amount: tt.inputAmount
              })]
            }, et))), qt.length < tt.inputs.length && (0, hD.jsx)(cD, {
              label: Dt("buildAFactory2Game:recipeMore", {
                count: String(tt.inputs.length - qt.length)
              }),
              names: tt.inputs.filter((tt => !qt.includes(tt))).map((tt => qD(Dt, tt)))
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, hD.jsx)(SD, {
              item: tt.output,
              amount: tt.outputAmount
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeName",
              children: qD(Dt, tt.output)
            }), tt.bonus && (0, hD.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [Dt("buildAFactory2Game:recipeBonus", {
                percent: WD(tt.bonus.chance)
              }), (0, hD.jsx)(SD, {
                item: tt.bonus.item,
                amount: 1
              })]
            }), null !== dt && (0, hD.jsx)(RD, {
              tier: dt
            })]
          }, `${tt.output}|${tt.inputs[0]}`)
        }))
      })
    }

    function Dm(tt) {
      let {
        taught: et,
        tier: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Wq.H)(), qt = tD(), Dt = iD(Object.values(Te), (tt => tt.tier)).filter((tt => AD(tt.tier, Vt)));
      return (0, hD.jsx)(ZD, {
        title: Ot("buildAFactory2Game:benchCanMake"),
        count: Dt.length,
        startOpen: !1,
        children: Dt.map((tt => {
          const Dt = tt.tier > Vt,
            mt = !Dt && qt.has(tt.output);
          return (0, hD.jsxs)("li", {
            className: uq()("Baf2Recipe", {
              InUse: tt.output === et,
              Locked: Dt,
              Far: vD(Dt ? tt.tier : null, Vt)
            }),
            children: [mt && (0, hD.jsx)(PD, {}), (0, hD.jsx)(SD, {
              item: tt.output,
              amount: tt.outputAmount
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeName",
              children: qD(Ot, tt.output)
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), tt.inputs.map((tt => (0, hD.jsx)(SD, {
              item: tt.item,
              amount: tt.amount
            }, tt.item))), Dt && (0, hD.jsx)(RD, {
              tier: tt.tier
            })]
          }, tt.output)
        }))
      })
    }
    var mm, dm, jm, Hm, Xm;
    const Qm = Le.Generator,
      lm = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      Em = 1e3 * (null !== (mm = Qm.powerMade) && void 0 !== mm ? mm : 0) / Qm.opMs,
      fm = Math.min(...(null !== (dm = Qm.fuels) && void 0 !== dm ? dm : []).map((tt => mV[tt]))) / 1e3,
      wm = Le["Volt Engine"],
      ym = 1e3 * (null !== (jm = wm.powerMade) && void 0 !== jm ? jm : 0) / wm.opMs,
      Nm = mV[null !== (Hm = null === (Xm = wm.fuels) || void 0 === Xm ? void 0 : Xm[0]) && void 0 !== Hm ? Hm : ""] / 1e3;

    function am(tt) {
      let {
        item: et,
        label: Vt,
        value: Ot,
        note: qt,
        dim: Dt
      } = tt;
      return (0, hD.jsxs)("li", {
        className: uq()("Baf2PowerRow", {
          Dim: Dt
        }),
        children: [(0, hD.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, hD.jsx)(cq.e, {
            itemName: et,
            amount: 0
          })
        }), (0, hD.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, hD.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: Vt
          }), qt && (0, hD.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: qt
          })]
        }), (0, hD.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Ot
        })]
      })
    }

    function Mm(tt, et, Vt, Ot) {
      var qt;
      const Dt = void 0 === Ot ? Le[tt] : function(tt, et) {
          if (null === et) return tt;
          let Vt = pt.get(et);
          return Vt || (Vt = {
            ...tt,
            powerPerOp: Bt(tt, et),
            farmMob: et
          }, pt.set(et, Vt)), Vt
        }(Le[tt], Ot),
        mt = et && Dt.couplable ? Ae(Dt, Vt) : Dt;
      return 1e3 * (null !== (qt = mt.powerPerOp) && void 0 !== qt ? qt : 0) / mt.opMs
    }

    function bm(tt) {
      var et, Vt, Ot, qt, Dt, mt, dt, jt;
      let {
        message: Ht
      } = tt;
      const {
        t: Xt
      } = (0, Wq.H)(), Qt = (tt, et) => Xt("buildAFactory2Game:powerPerSecond", {
        rate: aD(tt, et)
      }), [lt, Et] = Ht.baf2PowerGenerators, ft = Ht.baf2PowerGeneratorFuel, wt = Ht.baf2PowerSunPanels, yt = null !== (et = Ht.baf2PowerSunShare) && void 0 !== et ? et : 1, Nt = Ht.baf2PowerVaults, Mt = Ht.baf2PowerUsers, [bt, Jt] = null !== (Vt = Ht.baf2PowerEngines) && void 0 !== Vt ? Vt : [0, 0], Ct = null !== (Ot = Ht.baf2PowerEngineCells) && void 0 !== Ot ? Ot : 0, ut = null !== (qt = Ht.baf2PowerPads) && void 0 !== qt ? qt : 0, Kt = null !== (Dt = Ht.baf2PowerCharge) && void 0 !== Dt ? Dt : 0, [ht, vt] = null !== (mt = Ht.baf2PowerReactors) && void 0 !== mt ? mt : [0, 0], [Wt, St] = null !== (dt = Ht.baf2PowerBatteries) && void 0 !== dt ? dt : [0, 0];
      let ct = Xt("buildAFactory2Game:powerEngineCells", {
        amount: String(Ct)
      });
      Ct > 0 && Jt > 0 && (ct = Xt("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(Ct),
        time: JD(Xt, Ct * Nm / Jt)
      }));
      let Rt = Xt("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(ft)
      });
      ft > 0 && Et > 0 && (Rt = Xt("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(ft),
        time: JD(Xt, ft * fm / Et)
      }));
      const It = lt + bt + wt + ht;
      return (0, hD.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, hD.jsxs)("section", {
          children: [(0, hD.jsxs)("h3", {
            children: [Xt("buildAFactory2Game:powerMaking"), (0, hD.jsx)("span", {
              children: Qt(Ht.baf2PowerMadePerS, "+")
            })]
          }), (0, hD.jsxs)("ul", {
            children: [0 === It && (0, hD.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Xt("buildAFactory2Game:powerNoMakers")
            }), lt > 0 && (0, hD.jsx)(am, {
              item: "Generator",
              label: `${qD(Xt,"Generator")} \xd7${lt}`,
              note: `${Xt("buildAFactory2Game:powerRunning",{amount:String(Et)})} \xb7 ${Rt}`,
              value: Qt(Et * Em, "+"),
              dim: 0 === Et
            }), bt > 0 && (0, hD.jsx)(am, {
              item: "Volt Engine",
              label: `${qD(Xt,"Volt Engine")} \xd7${bt}`,
              note: `${Xt("buildAFactory2Game:powerRunning",{amount:String(Jt)})} \xb7 ${ct}`,
              value: Qt(Jt * ym, "+"),
              dim: 0 === Jt
            }), wt > 0 && (0, hD.jsx)(am, {
              item: "Solar Panel",
              label: `${qD(Xt,"Solar Panel")} \xd7${wt}`,
              note: Xt(yt < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Qt(4 * wt * yt, "+")
            }), ht > 0 && (0, hD.jsx)(am, {
              item: "Reactor Frame",
              label: `${Xt("buildAFactory2Game:powerReactors")} \xd7${ht}`,
              note: Xt("buildAFactory2Game:powerRunning", {
                amount: String(vt)
              }),
              value: Qt(null !== (jt = Ht.baf2PowerReactorPerS) && void 0 !== jt ? jt : 0, "+"),
              dim: 0 === vt
            })]
          })]
        }), (0, hD.jsxs)("section", {
          children: [(0, hD.jsxs)("h3", {
            children: [Xt("buildAFactory2Game:powerStorage"), (0, hD.jsx)("span", {
              children: st(Ht.baf2PowerCap)
            })]
          }), (Nt > 0 || Wt > 0) && (0, hD.jsxs)("ul", {
            children: [Nt > 0 && (0, hD.jsx)(am, {
              item: "Charge Vault",
              label: `${qD(Xt,"Charge Vault")} \xd7${Nt}`,
              value: `+${st(8e3*Nt)}`
            }), Wt > 0 && (0, hD.jsx)(am, {
              item: "Battery Cell",
              label: `${Xt("buildAFactory2Game:powerBatteries")} \xd7${Wt}`,
              value: `+${st(St)}`
            })]
          })]
        }), (0, hD.jsxs)("section", {
          children: [(0, hD.jsxs)("h3", {
            children: [Xt("buildAFactory2Game:powerUsing"), (0, hD.jsx)("span", {
              children: Qt(Ht.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, hD.jsxs)("ul", {
            children: [0 === Mt.length && 0 === ut && 0 === Kt && (0, hD.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Xt("buildAFactory2Game:powerNoUsers")
            }), Mt.map((tt => {
              let [et, Vt, Ot, qt, Dt = 1, mt] = tt, dt = Vt ? Xt(lm[Dt - 1], {
                name: qD(Xt, et)
              }) : qD(Xt, et);
              return void 0 !== mt && (dt = Xt("buildAFactory2Game:powerFarmName", {
                name: dt,
                mob: Xt(At(mt))
              })), (0, hD.jsx)(am, {
                item: et,
                label: `${dt} \xd7${Ot}`,
                note: Xt("buildAFactory2Game:powerRunning", {
                  amount: String(qt)
                }),
                value: qt > 0 ? Qt(qt * Mm(et, Vt, Dt, mt), "\u2212") : Xt("buildAFactory2Game:powerIdle"),
                dim: 0 === qt
              }, `${et}|${Vt}|${Dt}|${mt}`)
            })), ut > 0 && (0, hD.jsx)(am, {
              item: "Charging Pad",
              label: `${qD(Xt,"Charging Pad")} \xd7${ut}`,
              value: Xt("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), Kt > 0 && (0, hD.jsx)(am, {
              item: "Homestead Core",
              label: Xt("buildAFactory2Game:powerCharge"),
              value: Qt(Kt, "\u2212")
            }), Ht.baf2PowerStarved > 0 && (0, hD.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, hD.jsx)(Sq.b, {
                name: "triangle-exclamation"
              }), Xt("buildAFactory2Game:powerStarved", {
                amount: String(Ht.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Jm = Vt(4665),
      Cm = Vt(1556);
    class um {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(tt) {
        this.message = tt;
        for (const et of this.listeners) et()
      }
      get() {
        return this.message
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
    }
    class Km extends um {}

    function hm(tt, et) {
      const Vt = () => {
          const Vt = tt.get();
          if (!Vt || !et) return Vt;
          const [Ot, qt, Dt] = Vt.baf2PowerAt;
          return Ot === et[0] && qt === et[1] && Dt === et[2] ? Vt : null
        },
        [qt, Dt] = (0, Ot.useState)(Vt);
      return (0, Ot.useEffect)((() => (Dt(Vt()), tt.subscribe((() => {
        Dt(Vt())
      })))), [tt, ...null !== et && void 0 !== et ? et : []]), qt
    }

    function Wm(tt) {
      return {
        stored: tt.baf2PowerStored,
        cap: tt.baf2PowerCap,
        madePerS: tt.baf2PowerMadePerS,
        usedPerS: tt.baf2PowerUsedPerS
      }
    }

    function Sm(tt) {
      let {
        stored: et,
        cap: Vt
      } = tt;
      return (0, hD.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, hD.jsx)("div", {
          style: {
            width: `${Math.min(100,100*et/Math.max(1,Vt))}%`
          }
        })
      })
    }

    function cm(tt) {
      let {
        figures: et,
        labelled: Vt = !1
      } = tt;
      const {
        t: Ot
      } = (0, Wq.H)(), qt = et.madePerS - et.usedPerS, {
        text: Dt,
        draining: mt
      } = function(tt, et) {
        let {
          stored: Vt,
          cap: Ot,
          madePerS: qt,
          usedPerS: Dt
        } = et;
        const mt = qt - Dt;
        return Vt >= Ot ? {
          text: tt("buildAFactory2Game:powerFull"),
          draining: !1
        } : mt > .05 ? {
          text: tt("buildAFactory2Game:powerFullIn", {
            time: JD(tt, (Ot - Vt) / mt)
          }),
          draining: !1
        } : mt < -.05 ? {
          text: tt("buildAFactory2Game:powerEmptyIn", {
            time: JD(tt, Vt / -mt)
          }),
          draining: !0
        } : {
          text: tt("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Ot, et);
      return (0, hD.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, hD.jsx)(Sm, {
          stored: et.stored,
          cap: et.cap
        }), (0, hD.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, hD.jsx)("span", {
            children: Ot(Vt ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: st(et.stored),
              cap: st(et.cap)
            })
          }), (0, hD.jsxs)("span", {
            className: uq()("Baf2PowerNet", {
              Draining: mt
            }),
            children: [Ot("buildAFactory2Game:powerPerSecond", {
              rate: aD(Math.abs(qt), qt < 0 ? "\u2212" : "+")
            }), " \xb7 ", Dt]
          })]
        })]
      })
    }

    function Rm(tt) {
      let {
        stored: et,
        cap: Vt,
        rates: Ot
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)();
      return Ot ? (0, hD.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, hD.jsx)(cm, {
          figures: {
            stored: et,
            cap: Vt,
            madePerS: Ot[0],
            usedPerS: Ot[1]
          },
          labelled: !0
        })
      }) : (0, hD.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, hD.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, hD.jsx)(Sm, {
            stored: et,
            cap: Vt
          }), (0, hD.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, hD.jsx)("span", {
              children: qt("buildAFactory2Game:powerStoredLabelled", {
                stored: st(et),
                cap: st(Vt)
              })
            })
          })]
        })
      })
    }

    function Im(tt) {
      let {
        store: et,
        close: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Wq.H)(), qt = hm(et);
      return (0, hD.jsx)(Jm.c, {
        close: Vt,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, hD.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, hD.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, hD.jsxs)("div", {
              children: [(0, hD.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Ot("buildAFactory2Game:powerTitle")
              }), (0, hD.jsx)("p", {
                children: Ot("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, hD.jsx)(Cm.j, {
              onClick: Vt
            })]
          }), qt && (0, hD.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, hD.jsx)(cm, {
              figures: Wm(qt)
            }), (0, hD.jsx)(bm, {
              message: qt
            })]
          })]
        })
      })
    }

    function Pm(tt) {
      var et;
      let {
        kind: Vt,
        def: qt,
        Tq: Dt,
        power: mt,
        stored: dt,
        cap: jt
      } = tt;
      const {
        t: Ht
      } = (0, Wq.H)(), Xt = hm(mt, Dt), [Qt, lt] = (0, Ot.useState)(!1);
      return (0, hD.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, hD.jsx)(Om, {
          kind: Vt,
          def: qt,
          input: null,
          tier: null !== (et = null === Xt || void 0 === Xt ? void 0 : Xt.baf2PowerTier) && void 0 !== et ? et : 1
        }), (0, hD.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Ht("buildAFactory2Game:powerTitle")
        }), Xt && (0, hD.jsx)(cm, {
          figures: Wm(Xt)
        }), !Xt && (0, hD.jsx)(Rm, {
          stored: dt,
          cap: jt,
          rates: null
        }), Xt && (0, hD.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            lt(!Qt)
          },
          "aria-expanded": Qt,
          children: Ht(Qt ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), Xt && Qt && (0, hD.jsx)(bm, {
          message: Xt
        })]
      })
    }
    const Zm = 2500,
      Lm = 17500,
      Fm = `${Ct} `;
    const km = ["plan", "throttle"];

    function Gm(tt) {
      if (tt.startsWith(`${We} `)) return tt.slice(0, tt.lastIndexOf(" "));
      const et = tt.split(" ");
      return et[0] === Qe && km.includes(et[4]) ? et.slice(0, 5).join(" ") : null
    }
    class zm {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = tt, this.now = et, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.sqt = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = et()
      }
      enqueue(tt) {
        this.queue(tt, this.nextTicket());
        const et = this.sqt + this.pending.length;
        return this.flush(), et
      }
      track(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Vt = this.nextTicket();
        if (!et.urgent) return this.queue(tt, Vt), this.flush(), Vt;
        const {
          supersedes: Ot
        } = et;
        for (let Dt = this.pending.length - 1; Dt >= this.urgent; Dt--) {
          const et = this.pending[Dt];
          (et.command === tt || null !== Ot && void 0 !== Ot && Ot(et.command)) && (this.pending.splice(Dt, 1), this.markLeft(et.tickets))
        }
        const qt = this.pending.findIndex((et => {
          let {
            command: Vt
          } = et;
          return Vt === tt
        }));
        return -1 !== qt ? this.pending[qt].tickets.push(Vt) : (this.pending.splice(this.urgent, 0, {
          command: tt,
          tickets: [Vt]
        }), this.urgent += 1), this.flush(), Vt
      }
      leftAt(tt) {
        const et = this.leftTimes.get(tt);
        return void 0 !== et ? et : this.pending.some((et => {
          let {
            tickets: Vt
          } = et;
          return Vt.includes(tt)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let tt = !0;
        return () => {
          tt && (tt = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(tt) {
        var et;
        return (null === (et = this.pending.at(-1)) || void 0 === et ? void 0 : et.command) === tt
      }
      sent() {
        return this.sqt
      }
      clear() {
        for (const {
            tickets: tt
          }
          of this.pending) this.markLeft(tt);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(tt) {
        const et = this.now();
        for (const Vt of tt) this.leftTimes.set(Vt, et);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(tt, et) {
        const Vt = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === Vt || void 0 === Vt ? void 0 : Vt.command) === tt) return void(! function(tt) {
          return tt === ut || tt.startsWith(`${Jt} `) || tt.startsWith(`${ot} `)
        }(tt) ? Vt.tickets.push(et) : (this.pending.pop(), this.markLeft([...Vt.tickets, et])));
        const Ot = void 0 === Vt ? null : Xe(Vt.command, tt);
        if (null !== Ot && void 0 !== Vt) return Vt.command = Ot, void Vt.tickets.push(et);
        const qt = Gm(tt);
        if (null !== qt && void 0 !== Vt && Gm(Vt.command) === qt) return Vt.command = tt, void Vt.tickets.push(et);
        if (null !== Vt && void 0 !== Vt && Vt.command.startsWith(Fm) && tt.startsWith(Fm)) {
          const Ot = tt.slice(Fm.length);
          if (Vt.command.slice(Fm.length).split(",").includes(Ot)) return void Vt.tickets.push(et);
          const qt = `${Vt.command},${Ot}`;
          if (qt.length <= 119) return Vt.command = qt, void Vt.tickets.push(et)
        }
        this.pending.push({
          command: tt,
          tickets: [et]
        })
      }
      flush() {
        const tt = this.now();
        for (this.tokens = Math.min(5, this.tokens + (tt - this.refilledAt) / Zm), this.refilledAt = tt; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.sqt += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: tt,
            tickets: et
          } = this.pending.shift();
          this.markLeft(et), this.send(tt)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * Zm)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class om {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new zm(tt, et)
      }
      send(tt) {
        return this.queue.enqueue(tt)
      }
      sent() {
        return this.queue.sent()
      }
      track(tt, et) {
        return this.queue.track(tt, et)
      }
      leftAt(tt) {
        return this.queue.leftAt(tt)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(tt) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = et, this.send(tt), this.islandEdits.count
      }
      syncIslandEdits(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: Vt
        } = this, Ot = et - Vt.lastAtMs < Lm;
        Vt.count = Ot ? Math.max(Vt.count, tt) : tt
      }
      clear() {
        this.queue.clear()
      }
    }
    const rm = (0, Ot.createContext)(null);

    function Um() {
      const tt = (0, Ot.useContext)(rm);
      if (!tt) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return tt
    }

    function Am(tt, et) {
      return null !== et && void 0 !== et ? et : 1 === tt
    }

    function im(tt, et) {
      return tt.every((tt => {
        var Vt;
        let [Ot, , qt] = tt;
        return !Am(qt, null === (Vt = et.get(Ot)) || void 0 === Vt ? void 0 : Vt.hE)
      }))
    }

    function Ym(tt, et, Vt) {
      if (0 === tt.size) return tt;
      const Ot = new Map(tt);
      for (const [qt, Dt] of tt) {
        const tt = et.find((tt => {
          let [et] = tt;
          return et === qt
        }));
        (!tt || Dt.hE === (1 === tt[2]) || Dt.atMs < Vt) && Ot.delete(qt)
      }
      return Ot
    }

    function Bm(tt) {
      var et;
      let {
        Tq: Vt,
        input: qt,
        drops: Dt,
        seconds: mt
      } = tt;
      const {
        t: dt
      } = (0, Wq.H)(), jt = Um(), [Ht, Xt] = (0, Ot.useState)(new Map);
      (0, Ot.useEffect)((() => {
        Dt && Xt((tt => Ym(tt, Dt, Date.now() - Lm)))
      }), [Dt]), (0, Ot.useEffect)((() => {
        const tt = function(tt, et) {
          let Vt = null;
          for (const {
              atMs: Ot
            }
            of tt.values()) Vt = null === Vt ? Ot : Math.min(Vt, Ot);
          return null === Vt ? null : Vt + et
        }(Ht, Lm);
        if (null === tt || !Dt) return;
        const et = setTimeout((() => {
          Xt((tt => Ym(tt, Dt, Date.now() - Lm)))
        }), Math.max(0, tt - Date.now()) + 1);
        return () => {
          clearTimeout(et)
        }
      }), [Ht, Dt]);
      const Qt = it(qt),
        lt = null !== Qt && null !== Dt && im(Dt, Ht),
        Et = function(tt, et, Vt) {
          return null === tt || null === et || im(et, Vt) ? 0 : zt[kt[tt]]
        }(Qt, Dt, Ht);
      return (0, hD.jsxs)(ZD, {
        title: dt("buildAFactory2Game:farmDropsTitle", {
          seconds: mt
        }),
        count: null !== (et = null === Dt || void 0 === Dt ? void 0 : Dt.length) && void 0 !== et ? et : 0,
        children: [Et > 0 && (0, hD.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: dt("buildAFactory2Game:farmDropsPower", {
            power: String(Et)
          })
        }), (null === Qt || !Dt) && (0, hD.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: dt("buildAFactory2Game:farmDropsEmpty")
        }), lt && (0, hD.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: dt("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Qt && (null === Dt || void 0 === Dt ? void 0 : Dt.map((tt => {
          var et;
          let [Ot, qt, Dt] = tt;
          const mt = qt < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Qt = Am(Dt, null === (et = Ht.get(Ot)) || void 0 === et ? void 0 : et.hE);
          return (0, hD.jsxs)("li", {
            className: uq()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Qt
            }),
            children: [(0, hD.jsx)(SD, {
              item: Ot,
              amount: 1
            }), (0, hD.jsx)("span", {
              className: "Baf2RecipeName",
              children: qD(dt, Ot)
            }), (0, hD.jsx)("span", {
              className: "Baf2FarmRate",
              children: dt(mt, {
                amount: String(qt)
              })
            }), (0, hD.jsx)("button", {
              type: "button",
              className: uq()("Baf2FarmToggle SmallTextBold", {
                Kept: Qt
              }),
              "aria-pressed": Qt,
              onClick: () => {
                Xt(new Map(Ht).set(Ot, {
                  hE: !Qt,
                  atMs: Date.now()
                })), jt.send(function(tt, et, Vt, Ot) {
                  return `${ot} ${tt} ${et} ${Vt} ${Ot}`
                }(Vt[0], Vt[1], Vt[2], Ot))
              },
              children: dt(Qt ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Ot)
        })))]
      })
    }
    var pm;
    const xm = String(null !== (pm = Le.Synthesizer.waterPerOp) && void 0 !== pm ? pm : 0);

    function Tm(tt) {
      let {
        Tq: et,
        taught: Vt
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)(), Dt = Um(), [mt, dt] = (0, Ot.useState)(null);
      (0, Ot.useEffect)((() => {
        null !== mt && Vt === mt && dt(null)
      }), [mt, Vt]);
      const jt = null !== mt && void 0 !== mt ? mt : Vt;
      let Ht = qt("buildAFactory2Game:synthPick");
      return null !== jt && (Ht = qt("buildAFactory2Game:synthGrows", {
        name: qD(qt, jt),
        input: qD(qt, Ke),
        water: xm
      })), (0, hD.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, hD.jsx)("div", {
          className: uq()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === jt
          }),
          children: Ht
        }), (0, hD.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: he.map(((tt, Vt) => {
            const Ot = qD(qt, tt),
              mt = tt === jt;
            return (0, hD.jsx)("li", {
              children: (0, hD.jsx)("button", {
                type: "button",
                className: uq()("Baf2SynthTile", {
                  Selected: mt
                }),
                title: Ot,
                "aria-label": Ot,
                "aria-pressed": mt,
                onClick: () => {
                  mt || (dt(tt), Dt.send(`${We} ${et[0]} ${et[1]} ${et[2]} ${Vt}`))
                },
                children: (0, hD.jsx)(cq.e, {
                  itemName: tt,
                  amount: 0
                })
              })
            }, tt)
          }))
        })]
      })
    }
    const gm = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function sm(tt) {
      let {
        kind: et,
        tier: Vt,
        coupled: Ot,
        level: qt,
        slot: Dt
      } = tt;
      const {
        t: mt
      } = (0, Wq.H)(), jt = gt(ke);
      if (!Ot && null !== Vt && Vt < jt) return (0, hD.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, hD.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, hD.jsx)(Sq.b, {
            name: "lock"
          })
        }), (0, hD.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: mt("buildAFactory2Game:upgradeLocked")
        }), (0, hD.jsx)("span", {
          className: "Baf2TierTag",
          children: mt("buildAFactory2Game:tierTag", {
            tier: String(jt)
          })
        })]
      });
      const Ht = function(tt, et) {
          if (dt() && "Crusher" !== tt && null !== et) {
            if (nm(ze, et)) return {
              item: ze,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (nm(Ge, et)) return {
              item: Ge,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: ke,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(et, Vt),
        Xt = mt(Ot ? gm[qt - 1] : Ht.emptyKey),
        Qt = null !== Vt ? function(tt, et, Vt, Ot) {
          if (!dt() || !Vt || "Crusher" === tt || et < 10) return null;
          const qt = gt(ze);
          if (Ot < 3 && qt > 1 && (2 === Ot || et >= qt)) return {
            tier: qt,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const Dt = gt(Ge);
          if (1 === Ot && Dt > 1) return {
            tier: Dt,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(et, Vt, Ot, qt) : null;
      return (0, hD.jsxs)("div", {
        className: uq()("Baf2UpgradeSocket", {
          Fitted: Ot
        }),
        children: [(0, hD.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Ot && Dt, !Ot && (0, hD.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, hD.jsx)(cq.e, {
              itemName: Ht.item,
              amount: 0
            })
          })]
        }), (0, hD.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, hD.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: mt("buildAFactory2Game:upgradeTitle")
          }), (0, hD.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Xt
          }), Ot && qt >= 2 && "Crusher" === et && (0, hD.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: mt("buildAFactory2Game:couplerCrusherHint")
          }), Qt && null !== Vt && Vt < Qt.tier && (0, hD.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, hD.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, hD.jsx)(Sq.b, {
                name: "lock"
              })
            }), mt(Qt.lockedKey), (0, hD.jsx)("span", {
              className: "Baf2TierTag",
              children: mt("buildAFactory2Game:tierTag", {
                tier: String(Qt.tier)
              })
            })]
          }), Qt && null !== Vt && Vt >= Qt.tier && (0, hD.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: mt(Qt.nextKey)
          })]
        })]
      })
    }

    function nm(tt, et) {
      const Vt = gt(tt);
      return Vt > 1 && et >= Vt
    }
    var td = Vt(37273);
    const ed = (0, nt.I)(Le.Condenser, Le.Condenser.fluidMade),
      Vd = .05;
    class Od extends um {}

    function qd(tt) {
      return aD(tt, "")
    }

    function Dd(tt, et, Vt) {
      return tt(et ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: Vt
      })
    }

    function md(tt, et, Vt, Ot) {
      return Vt <= Vd && Ot <= Vd ? null : Ot <= Vd || Vt <= Vd ? Dd(tt, et, Ot <= Vd ? aD(Vt, "+") : aD(Ot, "\u2212")) : tt(et ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: qd(Vt),
        used: qd(Ot)
      })
    }

    function dd(tt, et) {
      return Math.min(100, 100 * tt / Math.max(1, et))
    }

    function jd(tt) {
      let {
        stored: et,
        cap: Vt,
        netPerS: Ot,
        rates: qt,
        cryo: Dt
      } = tt;
      const {
        t: mt
      } = (0, Wq.H)(), dt = function(tt, et, Vt, Ot) {
        return Vt <= 0 ? tt("buildAFactory2Game:waterNoStorage") : et >= Vt ? tt("buildAFactory2Game:powerFull") : Ot > Vd ? tt("buildAFactory2Game:powerFullIn", {
          time: JD(tt, (Vt - et) / Ot)
        }) : Ot < -.05 ? et <= 0 ? tt("buildAFactory2Game:waterEmpty") : tt("buildAFactory2Game:powerEmptyIn", {
          time: JD(tt, et / -Ot)
        }) : tt("buildAFactory2Game:powerSteady")
      }(mt, et, Vt, Ot), jt = Vt > 0 && et < Vt && Math.abs(Ot) <= Vd, Ht = mt(Dt ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), Xt = null !== qt ? `${qt} \xb7 ${dt}` : jt ? Ht : `${Ht} \xb7 ${dt}`;
      return (0, hD.jsxs)(hD.Fragment, {
        children: [(0, hD.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, hD.jsx)("div", {
            style: {
              width: `${dd(et,Vt)}%`
            }
          })
        }), (0, hD.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, hD.jsx)("span", {
            children: Vt > 0 && mt("buildAFactory2Game:powerStored", {
              stored: (0, nt.Q)(et),
              cap: (0, nt.Q)(Vt)
            })
          }), (0, hD.jsx)("span", {
            className: uq()("Baf2WaterNet", {
              Draining: Ot < -.05
            }),
            children: Xt
          })]
        })]
      })
    }

    function Hd(tt) {
      let {
        water: et,
        at: Vt,
        side: Ot = null
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)(), Dt = Um(), [mt, dt, jt] = et;
      return (0, hD.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, hD.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, hD.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: qt(null === Ot ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Ot}`)
          }), (0, hD.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              Dt.send(`${nt.A} ${Vt[0]} ${Vt[1]} ${Vt[2]}${"cryoOut"===Ot?" cryo":""}`)
            },
            children: qt("buildAFactory2Game:waterDetails")
          })]
        }), (0, hD.jsx)(jd, {
          stored: mt,
          cap: dt,
          netPerS: jt,
          rates: Dd(qt, "cryoOut" === Ot, aD(Math.abs(jt), jt < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Ot
        })]
      })
    }

    function Xd(tt, et) {
      var Vt, Ot, qt;
      const Dt = !0 === et.baf2WaterCryo,
        mt = null !== (Vt = null === (Ot = et.baf2WaterMakers.find((tt => tt[0] === (Dt ? nt.b : "Condenser")))) || void 0 === Ot ? void 0 : Ot[1]) && void 0 !== Vt ? Vt : 0,
        dt = [],
        jt = (et, Vt, Ot) => {
          et > 0 && dt.push(tt(1 === et ? Vt : Ot, {
            count: String(et)
          }))
        };
      return Dt ? jt(mt, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : jt(mt, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), jt(null !== (qt = et.baf2WaterPipes) && void 0 !== qt ? qt : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), jt(et.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), dt.join(" \xb7 ")
    }

    function Qd(tt, et) {
      if (!0 === et.baf2WaterCryo) return function(tt, et) {
        const Vt = Le[nt.b];
        switch (et.baf2WaterThis) {
          case "pipe":
            return {
              text: tt("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: tt("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: tt("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: tt("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: tt("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: tt("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: tt("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var Ot;
            const [qt, Dt] = null !== (Ot = et.baf2WaterThisRates) && void 0 !== Ot ? Ot : [(0, nt.I)(Vt, Vt.cryoMade), (0, nt.I)(Vt, Vt.powerPerOp)];
            return !0 === et.baf2WaterDriven ? {
              text: tt("buildAFactory2Game:cryoThisMixerDriven", {
                rate: qd(qt)
              }),
              bad: !1
            } : {
              text: tt("buildAFactory2Game:cryoThisMixer", {
                rate: qd(qt),
                power: qd(Dt)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: tt("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(tt, et);
      const Vt = !0 === et.baf2WaterDriven,
        Ot = Le.Condenser;
      switch (et.baf2WaterThis) {
        case "pipe":
          return {
            text: tt("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: tt("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: tt("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: tt("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: tt("buildAFactory2Game:waterThisTank", {
              tank: (0, nt.Q)(nt.s),
              cap: (0, nt.Q)(et.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var qt;
          const [Dt, mt] = null !== (qt = et.baf2WaterThisRates) && void 0 !== qt ? qt : [ed, (0, nt.I)(Ot, Ot.powerPerOp)];
          return Vt ? {
            text: tt("buildAFactory2Game:waterThisCondenserDriven", {
              rate: qd(Dt)
            }),
            bad: !1
          } : {
            text: tt("buildAFactory2Game:waterThisCondenser", {
              rate: qd(Dt),
              power: qd(mt)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: tt("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function ld(tt, et) {
      const Vt = et.baf2WaterMakers.some((tt => !0 === tt[5]));
      if (!0 === et.baf2WaterCryo) {
        const Ot = et.baf2WaterUsedPerS - et.baf2WaterMadePerS,
          qt = Vt || Ot <= Vd ? 0 : (0, nt.E)(Ot);
        return 0 === qt ? null : qt > 1 ? tt("buildAFactory2Game:cryoNextMixers", {
          mixers: String(qt)
        }) : tt("buildAFactory2Game:cryoNextOne")
      }
      const Ot = Vt ? null : function(tt, et) {
        const Vt = et - tt;
        return Vt <= Vd ? null : Math.ceil(Vt / ed)
      }(et.baf2WaterMadePerS, et.baf2WaterUsedPerS);
      return null === Ot ? null : Ot > 1 ? tt("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Ot)
      }) : tt("buildAFactory2Game:waterNextOne")
    }

    function Ed(tt) {
      let {
        item: et,
        label: Vt,
        note: Ot,
        value: qt,
        dim: Dt,
        bad: mt
      } = tt;
      return (0, hD.jsxs)("li", {
        className: uq()("Baf2WaterRow", {
          Dim: Dt,
          Bad: mt
        }),
        children: [(0, hD.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, hD.jsx)(cq.e, {
            itemName: et,
            amount: 0
          })
        }), (0, hD.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, hD.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: Vt
          }), Ot && (0, hD.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Ot
          })]
        }), (0, hD.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: qt
        })]
      })
    }

    function fd(tt) {
      return td.o[tt] ? tt : "Reactor Port"
    }

    function wd(tt) {
      let {
        message: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)(), Ot = !0 === et.baf2WaterCryo, qt = (tt, et) => Dd(Vt, Ot, aD(tt, et));
      return (0, hD.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, hD.jsxs)("section", {
          children: [(0, hD.jsxs)("h3", {
            children: [Vt("buildAFactory2Game:waterMakes"), (0, hD.jsx)("span", {
              children: qt(et.baf2WaterMadePerS, "+")
            })]
          }), (0, hD.jsxs)("ul", {
            children: [0 === et.baf2WaterMakers.length && (0, hD.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Vt(Ot ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), et.baf2WaterMakers.map((tt => {
              let [et, Ot, Dt, mt, dt, jt] = tt;
              const Ht = Vt("buildAFactory2Game:powerRunning", {
                amount: String(Dt)
              });
              let Xt = dt > 0 ? Vt("buildAFactory2Game:waterMakerPower", {
                running: Ht,
                power: qd(dt)
              }) : Ht;
              return jt && (Xt = Vt(0 === Dt && mt <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, hD.jsx)(Ed, {
                item: et,
                label: `${qD(Vt,et)} \xd7${Ot}`,
                note: Xt,
                value: Dt > 0 || jt && mt > 0 ? qt(mt, "+") : Vt("buildAFactory2Game:powerIdle"),
                dim: 0 === Dt && !jt,
                bad: jt
              }, et)
            }))]
          })]
        }), (0, hD.jsxs)("section", {
          children: [(0, hD.jsxs)("h3", {
            children: [Vt("buildAFactory2Game:waterUses"), (0, hD.jsx)("span", {
              children: qt(et.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, hD.jsxs)("ul", {
            children: [0 === et.baf2WaterUsers.length && (0, hD.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: Vt(Ot ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), et.baf2WaterUsers.map((tt => {
              let [et, Ot, Dt, mt] = tt;
              const dt = td.o[et] ? qD(Vt, et) : et;
              return (0, hD.jsx)(Ed, {
                item: fd(et),
                label: Ot > 1 ? `${dt} \xd7${Ot}` : dt,
                note: mt ? Vt("buildAFactory2Game:waterPortFirst") : void 0,
                value: Dt > 0 ? qt(Dt, "\u2212") : Vt("buildAFactory2Game:powerIdle"),
                dim: 0 === Dt
              }, et)
            }))]
          })]
        })]
      })
    }

    function yd(tt) {
      var et, Vt, qt, Dt, mt;
      let {
        store: dt,
        close: jt
      } = tt;
      const {
        t: Ht
      } = (0, Wq.H)(), Xt = function(tt) {
        const [et, Vt] = (0, Ot.useState)((() => tt.get()));
        return (0, Ot.useEffect)((() => (Vt(tt.get()), tt.subscribe((() => {
          Vt(tt.get())
        })))), [tt]), et
      }(dt), Qt = null !== (et = null === Xt || void 0 === Xt ? void 0 : Xt.baf2WaterStored) && void 0 !== et ? et : 0, lt = null !== (Vt = null === Xt || void 0 === Xt ? void 0 : Xt.baf2WaterCap) && void 0 !== Vt ? Vt : 0, Et = null !== (qt = null === Xt || void 0 === Xt ? void 0 : Xt.baf2WaterMadePerS) && void 0 !== qt ? qt : 0, ft = null !== (Dt = null === Xt || void 0 === Xt ? void 0 : Xt.baf2WaterUsedPerS) && void 0 !== Dt ? Dt : 0, wt = null !== (mt = null === Xt || void 0 === Xt ? void 0 : Xt.baf2WaterNetPerS) && void 0 !== mt ? mt : Et - ft, yt = Xt && Qd(Ht, Xt), Nt = Xt && ld(Ht, Xt), Mt = !0 === (null === Xt || void 0 === Xt ? void 0 : Xt.baf2WaterCryo);
      return (0, hD.jsx)(Jm.c, {
        close: jt,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, hD.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, hD.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, hD.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== Xt && lt <= 0 ? (0, hD.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, hD.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, hD.jsx)(cq.e, {
                  itemName: Mt ? wV.i : nt.k,
                  amount: 0
                })
              }), (0, hD.jsxs)("div", {
                children: [(0, hD.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Ht(Mt ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), Xt && (0, hD.jsx)("p", {
                  children: Xd(Ht, Xt)
                })]
              })]
            }), (0, hD.jsx)(Cm.j, {
              onClick: jt
            })]
          }), Xt && yt && (0, hD.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, hD.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, hD.jsx)(jd, {
                stored: Qt,
                cap: lt,
                netPerS: wt,
                cryo: Mt,
                rates: md(Ht, Mt, Et, ft)
              })
            }), (0, hD.jsx)("div", {
              className: uq()("Baf2WaterThis", {
                Bad: yt.bad
              }),
              children: yt.text
            }), Xt.baf2WaterDriven && (0, hD.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, hD.jsx)(Sq.b, {
                name: "bolt"
              }), Ht(Mt ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), Nt && (0, hD.jsx)("p", {
              className: "Baf2WaterNext",
              children: Nt
            }), (0, hD.jsx)(wd, {
              message: Xt
            })]
          })]
        })
      })
    }
    class Nd {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(tt, et) {
        const Vt = this.get(tt);
        Vt && null === et.opLeftMs && null === et.fuelLeftMs && et.status === Vt.status ? et = {
          ...et,
          opLeftMs: Vt.opLeftMs,
          fuelLeftMs: Vt.fuelLeftMs,
          burning: Vt.burning
        } : this.updates++, this.pos = tt, this.view = et;
        for (const Ot of this.listeners) Ot()
      }
      get(tt) {
        return null !== this.pos && this.pos[0] === tt[0] && this.pos[1] === tt[1] && this.pos[2] === tt[2] ? this.view : null
      }
      forget(tt) {
        null !== this.get(tt) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
    }

    function Md(tt, et, Vt, Ot) {
      return "noFuel" === et && Ot && !DV(Le[tt]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === et && !0 === (null === Vt || void 0 === Vt ? void 0 : Vt.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === et && !0 === (null === Vt || void 0 === Vt ? void 0 : Vt.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === et && !0 === (null === Vt || void 0 === Vt ? void 0 : Vt.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === et && !0 === (null === Vt || void 0 === Vt ? void 0 : Vt.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : bd(et, Vt) ? "buildAFactory2Game:machineStatus_noInputShort" : function(tt, et) {
        const Vt = Le[tt];
        if ("noFuel" === et && void 0 !== Vt.fuels) return DV(Vt) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (Vt.mobFarm && ("noInput" === et || "badInput" === et)) return `buildAFactory2Game:machineStatus_${et}MobFarm`;
        if ("outputFull" === et && (void 0 !== Vt.table || Vt.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === et && pe(Vt)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== Vt.cryoMade && ("noInput" === et || "noOutlet" === et || "fluidFull" === et)) return `buildAFactory2Game:machineStatus_${et}Mixer`;
        return `buildAFactory2Game:machineStatus_${et}`
      }(tt, et)
    }

    function bd(tt, et) {
      return "noInput" === tt && null !== et && void 0 !== et && et.input && et.inputShort ? {
        input: et.input,
        short: et.inputShort
      } : null
    }

    function Jd(tt) {
      return Kq(tt) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== tt.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Cd(tt) {
      const et = (0, Lt.Pe)(tt);
      return `Baf2Pane Baf2Pane${et.charAt(0).toUpperCase()}${et.slice(1)}`
    }

    function ud(tt, et) {
      const [Vt, qt] = (0, Ot.useState)((() => tt.get(et)));
      return (0, Ot.useEffect)((() => {
        qt(tt.get(et));
        const Vt = tt.subscribe((() => {
          qt(tt.get(et))
        }));
        return () => {
          Vt(), tt.forget(et)
        }
      }), [tt, ...et]), Vt
    }

    function Kd(tt, et, Vt, Ot) {
      const qt = Le[tt],
        Dt = et && qt.couplable ? Ae(qt, Vt) : qt,
        mt = null !== Ot && VV(Dt) ? function(tt, et) {
          var Vt;
          return null !== (Vt = null !== et && VV(tt) ? jV[et] : void 0) && void 0 !== Vt ? Vt : tt.opMs
        }(Dt, HV(Ot)) : Dt.opMs;
      return mt === Dt.opMs ? Dt : {
        ...Dt,
        opMs: mt
      }
    }

    function hd(tt) {
      let {
        running: et,
        opMs: Vt,
        opLeftMs: Ot,
        updateCount: qt
      } = tt;
      return (0, hD.jsx)("div", {
        className: uq()("Baf2MachineProgress", {
          Running: et
        }),
        children: (0, hD.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: Vt / 1e3 + "s",
            animationDelay: null === Ot ? void 0 : (Ot - Vt) / 1e3 + "s"
          }
        }, qt)
      })
    }

    function vd(tt) {
      let {
        running: et,
        leftMs: Vt,
        periodMs: Ot,
        updateCount: qt
      } = tt;
      const {
        t: Dt
      } = (0, Wq.H)(), mt = Math.min(Math.max(null !== Vt && void 0 !== Vt ? Vt : 0, 0), Ot), dt = et && mt > 0, jt = Dt("buildAFactory2Game:machineBarFuel");
      return (0, hD.jsx)("div", {
        className: uq()("Baf2FuelBurn", {
          Draining: dt
        }),
        role: "img",
        title: jt,
        "aria-label": jt,
        children: (0, hD.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: dt ? {
            animationDuration: Ot / 1e3 + "s",
            animationDelay: (mt - Ot) / 1e3 + "s"
          } : {
            transform: `scaleY(${mt/Ot})`
          }
        }, qt)
      })
    }

    function Wd(tt, et, Vt) {
      let [Ot, qt] = Vt;
      const Dt = 1 !== Ot ? vq(et) : null;
      return {
        amount: Ot,
        have: qt,
        item: tt(Dt || OD(et))
      }
    }

    function Sd(tt) {
      return VV(tt) ? "buildAFactory2Game:machineBarMining" : OV(tt) ? "buildAFactory2Game:machineBarCutting" : void 0 !== tt.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function cd(tt) {
      var et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt, Mt, bt;
      let {
        kind: Jt,
        Tq: Ct,
        store: ut,
        power: Kt,
        renderSlot: ht
      } = tt;
      const {
        t: vt
      } = (0, Wq.H)(), Wt = ud(ut, Ct), St = Le[Jt], ct = null !== (et = null === Wt || void 0 === Wt ? void 0 : Wt.coupled) && void 0 !== et && et, Rt = null !== (Vt = null === Wt || void 0 === Wt ? void 0 : Wt.couplerLevel) && void 0 !== Vt ? Vt : 1, It = Kd(Jt, ct, Rt, null !== (Ot = null === Wt || void 0 === Wt || null === (qt = Wt.dug) || void 0 === qt ? void 0 : qt.item) && void 0 !== Ot ? Ot : null), Pt = null !== (Dt = null === Wt || void 0 === Wt ? void 0 : Wt.status) && void 0 !== Dt ? Dt : null, Zt = null !== (mt = null === Wt || void 0 === Wt ? void 0 : Wt.power) && void 0 !== mt ? mt : null, Lt = null !== (dt = null === Wt || void 0 === Wt ? void 0 : Wt.opLeftMs) && void 0 !== dt ? dt : null, Ft = null !== (jt = null === Wt || void 0 === Wt ? void 0 : Wt.dug) && void 0 !== jt ? jt : null, kt = null !== Ft && VV(St) ? jV[null !== (Ht = HV(Ft.item)) && void 0 !== Ht ? Ht : ""] : void 0, Gt = void 0 === kt ? null : 6e4 / kt, zt = null !== (Xt = null === Wt || void 0 === Wt ? void 0 : Wt.powerCap) && void 0 !== Xt ? Xt : 4e3, ot = null !== (Qt = null === Wt || void 0 === Wt ? void 0 : Wt.tier) && void 0 !== Qt ? Qt : null, rt = void 0 !== It.powerMade, Ut = null !== St.fuelSlot ? ht(St.fuelSlot) : null, At = Ue(St), it = !ct && !0 === (null === Wt || void 0 === Wt ? void 0 : Wt.fuelFed), Bt = !ct && !0 === (null === Wt || void 0 === Wt ? void 0 : Wt.fuelFeeds), pt = null !== St.fuelSlot && !ct, xt = null !== (lt = null === Wt || void 0 === Wt ? void 0 : Wt.fuelLeftMs) && void 0 !== lt ? lt : null, Tt = function(tt, et, Vt) {
        var Ot;
        const qt = null === et ? void 0 : mV[et];
        return Math.max(null !== (Ot = null !== qt && void 0 !== qt ? qt : Vt) && void 0 !== Ot ? Ot : 0, tt.opMs)
      }(It, null !== (Et = null === Wt || void 0 === Wt ? void 0 : Wt.burning) && void 0 !== Et ? Et : null, xt), gt = null !== (ft = null === Wt || void 0 === Wt ? void 0 : Wt.fuelKeep) && void 0 !== ft ? ft : null, st = null === Pt ? null : Md(Jt, Pt, Wt, it), nt = null === Pt ? null : bd(Pt, Wt);
      return (0, hD.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, hD.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, hD.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: vt(OD(Jt))
          }), Ft && (0, hD.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [vt("Tree Cutter" === Jt ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, hD.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, hD.jsx)(cq.e, {
                itemName: Ft.item,
                amount: 0
              })
            }), (0, hD.jsx)(Rq.e, {
              text: Ft.name
            })]
          }), null !== Gt && (0, hD.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: vt("buildAFactory2Game:machineDigsFixed", {
              perMin: String(Gt)
            })
          }), (null === Wt || void 0 === Wt ? void 0 : Wt.field) && (0, hD.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, hD.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, hD.jsx)(cq.e, {
                itemName: "Wheat",
                amount: 0
              })
            }), vt("buildAFactory2Game:machineField", {
              planted: String(Wt.field[0]),
              ripe: String(Wt.field[1])
            })]
          }), (0, hD.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, hD.jsxs)("div", {
              className: uq()("Baf2MachineColumn", {
                Baf2Burns: pt
              }),
              children: [null !== It.inputSlot && (0, hD.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, hD.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: vt(Jd(It))
                }), ht(It.inputSlot)]
              }), null !== St.fuelSlot && !ct && (0, hD.jsxs)("div", {
                className: uq()("Baf2MachineSlot", {
                  Baf2FuelFed: it
                }),
                children: [(0, hD.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [it && (0, hD.jsx)(Sq.b, {
                    name: "fire"
                  }), vt("buildAFactory2Game:machineFuel")]
                }), (0, hD.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, hD.jsx)(vd, {
                    running: "running" === Pt,
                    leftMs: xt,
                    periodMs: Tt,
                    updateCount: ut.updateCount
                  }), Ut]
                })]
              }), null !== St.fuelSlot && ct && (0, hD.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, hD.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: vt("buildAFactory2Game:machineFuel")
                }), (0, hD.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: vt("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": vt("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, hD.jsx)(Sq.b, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, hD.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, hD.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: vt(Sd(It))
              }), (0, hD.jsx)(hd, {
                running: "running" === Pt,
                opMs: It.opMs,
                opLeftMs: Lt,
                updateCount: ut.updateCount
              })]
            }), It.outputSlots.length > 0 && (0, hD.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, hD.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: vt("buildAFactory2Game:machineOutput")
              }), (0, hD.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: It.outputSlots.map((tt => (0, hD.jsx)("div", {
                  children: ht(tt)
                }, tt)))
              })]
            }), null !== Zt && rt && (0, hD.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, hD.jsx)("div", {
                style: {
                  height: 100 * Zt / zt + "%"
                }
              })
            })]
          }), pt && null !== gt && (0, hD.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, hD.jsx)(Sq.b, {
              name: "arrows-rotate"
            }), vt(OV(It) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(gt)
            })]
          }), (it || Bt) && (0, hD.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, hD.jsx)(Sq.b, {
              name: "fire"
            }), vt(it ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), St.couplable && (0, hD.jsx)(sm, {
            kind: Jt,
            tier: ot,
            coupled: ct,
            level: Rt,
            slot: At === St.fuelSlot ? Ut : null !== At ? ht(At) : null
          }), null !== Zt && !rt && !0 === (null === Wt || void 0 === Wt ? void 0 : Wt.reactorPowered) && (0, hD.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: vt("buildAFactory2Game:machineReactorPowered")
          }), null !== Zt && !rt && !0 !== (null === Wt || void 0 === Wt ? void 0 : Wt.reactorPowered) && (0, hD.jsx)(Rm, {
            stored: Zt,
            cap: zt,
            rates: null !== (wt = null === Wt || void 0 === Wt ? void 0 : Wt.powerRates) && void 0 !== wt ? wt : null
          }), (null === Wt || void 0 === Wt ? void 0 : Wt.water) && (0, hD.jsx)(Hd, {
            water: Wt.water,
            at: Ct,
            side: Wt.cryo ? "waterIn" : null
          }), (null === Wt || void 0 === Wt ? void 0 : Wt.cryo) && (0, hD.jsx)(Hd, {
            water: Wt.cryo,
            at: Ct,
            side: "cryoOut"
          }), null !== Wt && void 0 !== Wt && Wt.inertCoupler ? (0, hD.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: vt("buildAFactory2Game:machineStatus_couplerOff", {
              item: qD(vt, Wt.inertCoupler)
            })
          }) : null !== st && (0, hD.jsx)("div", {
            className: uq()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Pt
            }),
            children: vt(st, nt ? Wd(vt, nt.input, nt.short) : void 0)
          })]
        }), (0, hD.jsxs)("div", {
          className: uq()("Baf2MachineSide", {
            Baf2SynthSide: pe(St)
          }),
          children: [pe(St) && (0, hD.jsx)(Tm, {
            Tq: Ct,
            taught: null !== (yt = null === Wt || void 0 === Wt ? void 0 : Wt.taught) && void 0 !== yt ? yt : null
          }, Ct.join(",")), rt && (0, hD.jsx)(Pm, {
            kind: Jt,
            def: It,
            Tq: Ct,
            power: Kt,
            stored: null !== Zt && void 0 !== Zt ? Zt : 0,
            cap: zt
          }), Yt(St) && (0, hD.jsx)(Bm, {
            Tq: Ct,
            input: null !== (Nt = null === Wt || void 0 === Wt ? void 0 : Wt.input) && void 0 !== Nt ? Nt : null,
            drops: null !== (Mt = null === Wt || void 0 === Wt ? void 0 : Wt.farm) && void 0 !== Mt ? Mt : null,
            seconds: String(It.opMs / 1e3)
          }), !rt && !Yt(St) && !pe(St) && (0, hD.jsx)(Om, {
            kind: Jt,
            def: It,
            input: null !== (bt = null === Wt || void 0 === Wt ? void 0 : Wt.input) && void 0 !== bt ? bt : null,
            tier: null !== ot && void 0 !== ot ? ot : 1,
            noSeeds: !0 === (null === Wt || void 0 === Wt ? void 0 : Wt.noSeeds)
          })]
        })]
      })
    }

    function Rd(tt, et, Vt, Ot) {
      var qt;
      const Dt = Le[tt],
        mt = [Dt.inputSlot, Dt.fuelSlot, ...null !== (qt = Dt.inputSlots) && void 0 !== qt ? qt : []].filter((tt => null !== tt));
      return {
        render: qt => {
          let {
            Tq: Dt,
            renderSlot: mt
          } = qt;
          return (0, hD.jsx)(rm.Provider, {
            value: Ot,
            children: (0, hD.jsx)(cd, {
              kind: tt,
              Tq: Dt,
              store: et,
              power: Vt,
              renderSlot: mt
            })
          })
        },
        quickMoveRange: mt.length > 0 ? [Math.min(...mt), Math.max(...mt) + 1] : [0, 0],
        className: Cd(tt)
      }
    }
    const Id = "Assembler";

    function Pd(tt) {
      var et, Vt, Ot, qt, Dt, mt, dt, jt, Ht;
      let {
        Tq: Xt,
        store: Qt,
        renderSlot: lt
      } = tt;
      const {
        t: Et
      } = (0, Wq.H)(), ft = ud(Qt, Xt), wt = null !== (et = null === ft || void 0 === ft ? void 0 : ft.tier) && void 0 !== et ? et : 1, yt = null !== (Vt = null === ft || void 0 === ft ? void 0 : ft.taught) && void 0 !== Vt ? Vt : null, Nt = se(Id, {
        coupled: !1,
        taught: yt
      }), Mt = null !== (Ot = Nt.bench) && void 0 !== Ot ? Ot : null, bt = null !== (qt = null === ft || void 0 === ft ? void 0 : ft.status) && void 0 !== qt ? qt : null, Jt = null !== (Dt = null === ft || void 0 === ft ? void 0 : ft.power) && void 0 !== Dt ? Dt : null, Ct = null !== (mt = null === ft || void 0 === ft ? void 0 : ft.powerCap) && void 0 !== mt ? mt : 4e3;
      return (0, hD.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, hD.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, hD.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Et(OD(Id))
          }), Mt && (0, hD.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [Et("buildAFactory2Game:benchMakes"), (0, hD.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, hD.jsx)(cq.e, {
                itemName: Mt.output,
                amount: 0
              })
            }), (null === ft || void 0 === ft ? void 0 : ft.taughtName) && (0, hD.jsx)(Rq.e, {
              text: ft.taughtName
            }), Mt.outputAmount > 1 && (0, hD.jsxs)("span", {
              children: ["\xd7", Mt.outputAmount]
            })]
          }), !Mt && (0, hD.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: Et("buildAFactory2Game:benchTeachHint")
          }), (0, hD.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, hD.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (dt = Nt.inputSlots) && void 0 !== dt ? dt : []).map(((tt, et) => {
                const Vt = null === Mt || void 0 === Mt ? void 0 : Mt.inputs[et];
                return (0, hD.jsxs)("div", {
                  className: uq()("Baf2BenchInput", {
                    Spare: !Vt
                  }),
                  children: [(0, hD.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [lt(tt), Vt && (0, hD.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, hD.jsx)(cq.e, {
                        itemName: Vt.item,
                        amount: 0
                      })
                    })]
                  }), (0, hD.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: Vt ? `\xd7${Vt.amount}` : "\xa0"
                  })]
                }, tt)
              }))
            }), (0, hD.jsx)(hd, {
              running: "running" === bt,
              opMs: Nt.opMs,
              opLeftMs: null !== (jt = null === ft || void 0 === ft ? void 0 : ft.opLeftMs) && void 0 !== jt ? jt : null,
              updateCount: Qt.updateCount
            }), (0, hD.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, hD.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Et("buildAFactory2Game:machineOutput")
              }), (0, hD.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Nt.outputSlots.map((tt => (0, hD.jsx)("div", {
                  children: lt(tt)
                }, tt)))
              })]
            })]
          }), null !== Jt && (0, hD.jsx)(Rm, {
            stored: Jt,
            cap: Ct,
            rates: null !== (Ht = null === ft || void 0 === ft ? void 0 : ft.powerRates) && void 0 !== Ht ? Ht : null
          }), null !== bt && (0, hD.jsx)("div", {
            className: uq()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== bt
            }),
            children: Et(Md(Id, bt, ft, !1))
          }), Mt && Mt.inputs.length > 1 && (0, hD.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: Et("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, hD.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, hD.jsx)(Dm, {
            taught: yt,
            tier: wt
          }), Mt && (0, hD.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: Et("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Zd(tt) {
      var et;
      const Vt = null !== (et = Le[Id].inputSlots) && void 0 !== et ? et : [];
      return {
        render: et => {
          let {
            Tq: Vt,
            renderSlot: Ot
          } = et;
          return (0, hD.jsx)(Pd, {
            Tq: Vt,
            store: tt,
            renderSlot: Ot
          })
        },
        quickMoveRange: [Math.min(...Vt), Math.max(...Vt) + 1],
        className: Cd(Id)
      }
    }
    var Ld = Vt(106),
      Fd = Vt(1218),
      kd = Vt(4339);
    const Gd = 600,
      zd = .5,
      od = 4,
      rd = 1200,
      Ud = 140,
      Ad = 100,
      Yd = 32,
      Bd = 16,
      pd = 100.5,
      xd = 90,
      Td = 1.5,
      gd = 50;

    function sd(tt) {
      switch (IV(tt)) {
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
    const nd = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function tj(tt) {
      const et = Math.ceil(60 * tt / Ad);
      return {
        fuel: Math.max(Yd, et),
        waste: Math.max(Bd, et)
      }
    }

    function ej(tt, et, Vt) {
      const [Ot, qt, Dt] = [tt - 2, et - 2, Vt - 2];
      return 2 * (Ot * qt + qt * Dt + Dt * Ot) * Ud
    }

    function Vj(tt, et, Vt) {
      return Math.max(0, tt - 2) * Math.max(0, et - 2) * Math.max(0, Vt - 2)
    }

    function Oj(tt, et) {
      const [Vt, Ot, qt] = tt, Dt = Vt * Ot * qt, mt = new Float32Array(Dt);
      let dt = 0,
        jt = 0,
        Ht = 0,
        Xt = 0,
        Qt = 0;
      const lt = (tt, Dt, mt) => tt < 0 || tt >= Vt || Dt < 0 || Dt >= Ot || mt < 0 || mt >= qt ? 0 : et[(Dt * qt + mt) * Vt + tt];
      for (let yt = 0; yt < Ot; yt++)
        for (let tt = 0; tt < qt; tt++)
          for (let Ot = 0; Ot < Vt; Ot++) {
            const Dt = (yt * qt + tt) * Vt + Ot,
              Et = et[Dt];
            if (1 === Et) {
              dt++;
              let et = 0;
              for (const [Vt, qt, Dt] of nd) {
                const mt = lt(Ot + Vt, yt + qt, tt + Dt);
                1 !== mt && 2 !== mt || et++
              }
              mt[Dt] = Gd * (1 + zd * Math.min(et, od)), Xt += mt[Dt]
            } else if (2 === Et) jt++;
            else if (3 === Et) {
              Ht++;
              nd.some((et => {
                let [Vt, qt, Dt] = et;
                return 1 === lt(Ot + Vt, yt + qt, tt + Dt)
              })) && (Qt += rd)
            }
          }
      const Et = ej(Vt + 2, Ot + 2, qt + 2),
        ft = Math.min(Xt, Qt, Et),
        wt = dt > 0 ? Xt * Ad / dt : 0;
      return {
        rods: dt,
        graphite: jt,
        channels: Ht,
        fuelHeat: Xt,
        cooling: Qt,
        size: Et,
        max: ft,
        vol: Dt,
        powerPerUnit: wt,
        pelletsPerMin: wt > 0 ? ft / wt * 60 : 0,
        waterPerS: ft * nt.o,
        rodHeat: mt
      }
    }
    const qj = 0,
      Dj = 1,
      mj = 6,
      dj = 7,
      jj = 8;

    function Hj(tt, et) {
      const [Vt, Ot, qt] = tt, Dt = new Uint8Array(Vt * Ot * qt), mt = (tt, Dt, mt) => tt < 0 || tt >= Vt || Dt < 0 || Dt >= Ot || mt < 0 || mt >= qt ? 0 : et[(Dt * qt + mt) * Vt + tt];
      for (let dt = 0; dt < Ot; dt++)
        for (let tt = 0; tt < qt; tt++)
          for (let Ot = 0; Ot < Vt; Ot++) {
            const jt = (dt * qt + tt) * Vt + Ot,
              Ht = et[jt];
            if (1 === Ht) {
              let et = 0;
              for (const [Vt, qt, Dt] of nd) {
                const jt = mt(Ot + Vt, dt + qt, tt + Dt);
                et += 1 === jt || 2 === jt ? 1 : 0
              }
              Dt[jt] = Dj + Math.min(et, od)
            } else if (3 === Ht) {
              const et = nd.some((et => {
                let [Vt, qt, Dt] = et;
                return 1 === mt(Ot + Vt, dt + qt, tt + Dt)
              }));
              Dt[jt] = et ? mj : dj
            } else 2 === Ht && (Dt[jt] = jj)
          }
      return Dt
    }

    function Xj(tt) {
      return tt.fuelHeat <= tt.cooling && tt.fuelHeat <= tt.size ? "fuel" : tt.cooling <= tt.size ? "cooling" : "size"
    }
    const Qj = xd;

    function lj(tt, et, Vt) {
      return Math.round(tt * et * Vt * 25e3 * (1 + .25 * (Math.min(tt, et, Vt) - 2)))
    }

    function Ej(tt) {
      return Math.max(0, Math.min(nt.f, tt))
    }

    function fj(tt, et, Vt) {
      const Ot = et * Ej(Vt);
      return tt <= 0 ? 0 : Ot > 0 ? Math.min(200, 100 * tt / Ot) : 200
    }

    function wj(tt, et) {
      const Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? Td : 1;
      return Math.min(tt.fuelHeat * Vt, tt.cooling * Ej(et), tt.size * Vt)
    }

    function yj(tt) {
      return 2 + tt / 10
    }
    const Nj = "buildAFactory2Game:";

    function aj(tt) {
      var et;
      return null !== (et = tt.baf2RxMood) && void 0 !== et ? et : function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const Vt = [
          ["calm", 50],
          ["warm", Qj],
          ["hot", pd]
        ];
        for (const [Ot, qt] of Vt)
          if (tt < qt + (Ot === et ? 3 : 0)) return Ot;
        return "alarm"
      }(tt.baf2RxHeat)
    }
    const Mj = 120;

    function bj(tt) {
      const et = tt.baf2RxState;
      if ("running" === et && tt.baf2RxHeat > pd) return {
        label: `${Nj}rxState_tooHot`,
        tone: "bad",
        fix: `${Nj}rxFix_tooHot`
      };
      switch (et) {
        case "running":
          return {
            label: `${Nj}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Nj}rxState_idle`, tone: "off", fix: `${Nj}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Nj}rxState_scram`, tone: "off", fix: tt.baf2RxHeat < gd ? `${Nj}rxFix_scramCool` : `${Nj}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Nj}rxState_${et}`, tone: "off", fix: `${Nj}rxFix_${et}`
          };
        case "melted":
          return {
            label: `${Nj}rxState_melted`, tone: "bad", fix: `${Nj}rxFix_melted`
          };
        default:
          return {
            label: `${Nj}rxState_${et}`, tone: "warn", fix: `${Nj}rxFix_${et}`
          }
      }
    }

    function Jj(tt) {
      const [et, Vt, Ot] = tt.baf2RxStats;
      return {
        fuelHeat: et,
        cooling: Vt * (tt.baf2RxCryo ? Math.max(1, Ej(tt.baf2RxWater / 100)) : 1),
        size: Ot
      }
    }

    function Cj(tt) {
      var et;
      const Vt = "idle" === tt.baf2RxState || "running" === tt.baf2RxState && tt.baf2RxHeat <= pd || "scram" === tt.baf2RxState && tt.baf2RxHeat < gd;
      if (0 === (tt.baf2RxFlags & Je) || !tt.baf2RxFormed || !Vt) return null;
      const {
        fuelHeat: Ot,
        cooling: qt,
        size: Dt
      } = Jj(tt), mt = Math.min(Ot, qt, Dt), dt = Xj({
        fuelHeat: Ot,
        cooling: qt,
        size: Dt
      }), jt = "cooling" === dt && !0 === tt.baf2RxCryoOpen && !tt.baf2RxCryo, Ht = null !== (et = tt.baf2RxCells) && void 0 !== et ? et : "", Xt = ("fuel" === dt || "cooling" === dt && !0 === tt.baf2RxCryo) && Ht.length > 0 && !Ht.includes(String(0)), Qt = jt ? "Cryo" : "scram" === tt.baf2RxState ? "Off" : "";
      return mt < 12e3 ? {
        key: `${Nj}rxGrow_${Xt?"full":dt}${Qt}`,
        amount: mt
      } : null
    }

    function uj(tt, et) {
      return tt[0] === et[0] && tt[1] === et[1] && tt[2] === et[2]
    }

    function Kj(tt) {
      return [...tt].sort(((tt, et) => Number(et[2] < et[1]) - Number(tt[2] < tt[1])))
    }

    function hj(tt, et) {
      return et.some((et => {
        let [Vt, Ot] = et;
        return !(Ot <= 0) && ["edge", "cap", "wall", "inside"].some((et => Vt === mO(tt, et)))
      }))
    }

    function vj(tt, et, Vt) {
      const Ot = tt.baf2RxFuel - tt.baf2RxPu > 0 ? Vt : 0;
      return {
        full: tt.baf2RxWaste > et - 3,
        fullInS: Ot > 0 ? Math.max(0, et - tt.baf2RxWaste) / Ot : null
      }
    }
    const Wj = {
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

    function Sj(tt) {
      return cj[tt]
    }
    const cj = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Rj(tt) {
      let [et, Vt, Ot] = tt;
      return Math.ceil(ej(et, Vt, Ot) * nt.o)
    }

    function Ij(tt, et) {
      return "battery" === tt ? et[0] * et[1] * et[2] : function(tt) {
        let [et, Vt, Ot] = tt;
        return et * Vt * Ot - Math.max(0, et - 2) * Math.max(0, Vt - 2) * Math.max(0, Ot - 2)
      }(et) - 1
    }

    function Pj(tt) {
      const et = Math.max(0, tt);
      if (et < 10) return String(Math.round(10 * et) / 10);
      if (et < 1e4) return Math.round(et).toLocaleString("en-US");
      if (et < 1e6) return `${et<1e5?(Math.floor(et/100)/10).toFixed(1):Math.floor(et/1e3)}k`;
      const Vt = et / 1e6;
      return `${Vt<10?(Math.floor(100*Vt)/100).toFixed(2):Vt<100?(Math.floor(10*Vt)/10).toFixed(1):Math.floor(Vt)}M`
    }

    function Zj(tt) {
      return tt <= 0 ? "0" : tt >= 10 ? String(Math.round(tt)) : tt.toFixed(tt >= 1 ? 1 : 2)
    }

    function Lj(tt) {
      const et = nV(tt, 0),
        Vt = nV(tt, xV(tt) - 1);
      return {
        lo: [Math.min(et[0], Vt[0]), Math.min(et[1], Vt[1]), Math.min(et[2], Vt[2])],
        hi: [Math.max(et[0], Vt[0]) + 1, Math.max(et[1], Vt[1]) + 1, Math.max(et[2], Vt[2]) + 1]
      }
    }

    function Fj(tt, et, Vt) {
      const Ot = [et[0] - tt[0], et[1] - tt[1], et[2] - tt[2]],
        qt = [(tt[0] + et[0]) / 2, (tt[1] + et[1]) / 2, (tt[2] + et[2]) / 2],
        Dt = [];
      for (let mt = 0; mt < 3; mt++) {
        const dt = (mt + 1) % 3,
          jt = (mt + 2) % 3;
        for (const Ht of [tt[dt], et[dt]])
          for (const Xt of [tt[jt], et[jt]]) {
            const tt = [0, 0, 0],
              et = [Vt, Vt, Vt];
            tt[mt] = qt[mt], et[mt] = Ot[mt] + Vt, tt[dt] = Ht, tt[jt] = Xt, Dt.push([tt, et])
          }
      }
      return Dt
    }
    const kj = "buildAFactory2Game:",
      Gj = [`${kj}colNorth`, `${kj}colEast`, `${kj}colSouth`, `${kj}colWest`];

    function zj(tt, et) {
      const [Vt, Ot, qt] = tt.baf2ColAt;
      return `baf2col ${Vt} ${Ot} ${qt} ${et}`
    }

    function oj(tt) {
      return function(tt) {
        if (!Number.isFinite(tt)) return "";
        const et = Math.max(1, Math.round(tt));
        if (et < 60) return `${et}s`;
        const Vt = et % 60;
        return 0 === Vt ? et / 60 + "m" : `${Math.floor(et/60)}m ${Vt}s`
      }(function(tt) {
        const et = dO.FOCUS_BY_LASERS[Math.max(0, Math.min(4, tt))];
        return et > 0 ? dO.NOVA_FOCUS / et : 1 / 0
      }(tt))
    }

    function rj(tt) {
      const et = Math.abs(Math.round(tt));
      return et < 1e3 ? Math.round(tt).toLocaleString("en-US") : et < 1e6 ? `${et<1e5?(tt/1e3).toFixed(1).replace(/\.0$/,""):Math.round(tt/1e3)}k` : `${(tt/1e6).toFixed(et<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function Uj(tt, et, Vt) {
      if (EO(et) >= 0) {
        const et = function(tt, et) {
          return tt.find((tt => {
            let {
              focus: Vt
            } = tt;
            return Vt[0] === et[0] && Vt[2] === et[2] && (et[1] === Vt[1] || et[1] === Vt[1] - 1)
          }))
        }(tt, Vt);
        if (!et) return null;
        const qt = function(tt) {
          let et = 0,
            Vt = 0;
          for (let Ot = 0; Ot < 4; Ot++) et += tt.laser[Ot] ? 1 : 0, Vt += tt.live[Ot] ? 1 : 0;
          return {
            lasers: et,
            live: Vt,
            focusPerS: dO.FOCUS_BY_LASERS[Vt],
            drawPerS: dO.LASER_DRAW * Vt
          }
        }({
          laser: et.lasers,
          live: et.live
        });
        if (0 === qt.lasers || "noLasers" === et.state) return {
          key: `${kj}lookColNoLasers`
        };
        if (0 === qt.live) return {
          key: `${kj}lookColOff_blocked`
        };
        if (!(et.on && qt.live > 0) && ("running" !== (Ot = et.state) && "slowed" !== Ot)) return {
          key: `${kj}lookColOff_${et.state}`
        };
        if (qt.live < qt.lasers) return {
          key: `${kj}lookColLasersSome`,
          params: {
            lasers: String(qt.lasers),
            live: String(qt.live)
          }
        };
        const Dt = et.open.filter(Boolean).length;
        return Dt < 4 ? {
          key: `${kj}lookColLasersSpots`,
          params: {
            live: String(qt.live),
            spots: String(Dt),
            time: oj(qt.live)
          }
        } : {
          key: `${kj}lookColLasers`,
          params: {
            live: String(qt.live),
            time: oj(qt.live)
          }
        }
      }
      var Ot;
      if (!fO(et)) return null;
      const qt = function(tt, et) {
        for (const Vt of tt) {
          const tt = aO(Vt.focus, [et[0], et[1], et[2]]);
          if (tt && tt.pm === dO.LASER_D && Vt.lasers[tt.dir]) return {
            entry: Vt,
            dir: tt.dir
          }
        }
        return null
      }(tt, Vt);
      if (!qt) return {
        key: `${kj}lookLaserNoCollider`
      };
      const {
        entry: Dt,
        dir: mt
      } = qt;
      return Dt.open[mt] ? Dt.live[mt] ? {
        key: Dt.on ? `${kj}lookLaserFiring` : `${kj}lookLaserReady`
      } : {
        key: `${kj}lookLaserBlocked`
      } : {
        key: `${kj}lookLaserClosed`
      }
    }

    function Aj(tt, et) {
      const Vt = [];
      for (let Ot = 1; Ot < dO.LASER_D; Ot++) tt & 1 << et * (dO.LASER_D - 1) + Ot - 1 && Vt.push(Ot);
      return Vt
    }
    const ij = {
      firing: `${kj}colSlotFiring`,
      ready: `${kj}colSlotReady`,
      blocked: `${kj}colSlotBlocked`,
      empty: `${kj}colSlotEmpty`,
      closed: `${kj}colSlotClosed`
    };

    function Yj(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Dt = mq(tt),
        mt = mq(et),
        dt = mq(Vt),
        jt = dt.filter(Boolean).length,
        Ht = Dt.filter(Boolean).length,
        Xt = [0, 1, 2, 3].map((tt => mt[tt] ? Dt[tt] ? dt[tt] ? Ot ? "firing" : "ready" : "blocked" : (tt => Aj(qt, tt).length > 0)(tt) ? "blocked" : "empty" : "closed")),
        Qt = Xt.indexOf("blocked"),
        lt = Qt < 0 && Ht > 0 ? Xt.indexOf("empty") : -1;
      return Xt.map(((tt, et) => {
        const Vt = et === Qt ? {
          key: `${kj}colSlotClear`
        } : et === lt ? {
          key: `${kj}colSlotAdd`,
          params: {
            time: oj(Math.min(4, jt + 1))
          }
        } : null;
        return {
          dir: et,
          tone: tt,
          title: {
            key: "blocked" !== tt || Dt[et] ? ij[tt] : `${kj}colSlotGap`,
            keys: {
              dir: Gj[et]
            }
          },
          hint: Vt
        }
      }))
    }

    function Bj(tt) {
      var et;
      return "noPower" === tt.baf2ColState && tt.baf2ColRxState ? bj({
        baf2RxState: tt.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (et = tt.baf2ColRxHeat) && void 0 !== et ? et : 0
      }) : null
    }

    function pj(tt) {
      const et = mq(tt.baf2ColSpots).filter(Boolean).length,
        Vt = mq(tt.baf2ColLive);
      let Ot = 0,
        qt = 0;
      return mq(tt.baf2ColLasers).forEach(((tt, et) => {
        tt && (Ot++, qt += Vt[et] ? 0 : 1)
      })), qt > 0 ? {
        key: `${kj}colSubSome`,
        params: {
          blocked: String(qt),
          lasers: String(Ot)
        }
      } : et < 4 ? {
        key: `${kj}colSubSpots`,
        params: {
          lasers: String(Ot),
          spots: String(et)
        }
      } : {
        key: `${kj}colSub`,
        params: {
          lasers: String(Ot)
        }
      }
    }

    function xj(tt) {
      const et = Bj(tt);
      if ("idle" === tt.baf2ColRxState && et) return {
        key: `${kj}colState_noPowerIdle`
      };
      if (et) return {
        key: `${kj}colState_noPowerReactor`,
        keys: {
          state: et.label
        }
      };
      if ("noInput" !== tt.baf2ColState) return {
        key: `${kj}colState_${tt.baf2ColState}`
      };
      const Vt = String(Math.max(0, dO.NOVA_SA - tt.baf2ColSa)),
        Ot = String(Math.max(0, dO.NOVA_GD - tt.baf2ColGd));
      return "0" !== Vt && "0" !== Ot ? {
        key: `${kj}colState_noInput`,
        params: {
          sa: Vt,
          gd: Ot
        }
      } : "0" !== Vt ? {
        key: `${kj}colState_noStarAlloy`,
        params: {
          sa: Vt
        }
      } : "0" !== Ot ? {
        key: `${kj}colState_noGlowDust`,
        params: {
          gd: Ot
        }
      } : {
        key: `${kj}colState_running`
      }
    }

    function Tj(tt) {
      return tt.baf2ColP < 0 ? `${kj}colNext` : function(tt) {
        const et = tt.baf2ColState;
        return tt.baf2ColP >= 0 && ("blocked" === et || "noLasers" === et || "noPower" === et)
      }(tt) ? `${kj}colStalled` : null === gj(tt) ? `${kj}colMaking` : `${kj}colNovaIn`
    }

    function gj(tt) {
      if (tt.baf2ColP < 0 || tt.baf2ColWant <= 0) return null;
      const et = tt.baf2ColFocusPerS * Math.min(1, tt.baf2ColDraw / tt.baf2ColWant);
      return et > 0 ? Math.max(0, dO.NOVA_FOCUS - tt.baf2ColP) / et : null
    }

    function sj(tt, et) {
      const Vt = [];
      for (let Ot = 1; Ot <= 3; Ot++) {
        const qt = [tt[0], tt[1] - Ot, tt[2]];
        if (!et(qt)) return Vt;
        Vt.push(qt)
      }
      return []
    }

    function nj(tt, et) {
      const Vt = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Ot = 0; Ot < 4; Ot++) {
        const qt = Ot,
          Dt = NO(tt.focus, qt, dO.LASER_D);
        if (tt.lasers[Ot] || !tt.open[Ot] || !et(Dt)) continue;
        const mt = [];
        for (let Vt = 1; Vt < dO.LASER_D; Vt++) {
          const Ot = NO(tt.focus, qt, Vt);
          et(Ot) || mt.push(Ot)
        }
        Vt.supports.push(...sj(Dt, et)), 0 === mt.length ? Vt.free.push(Dt) : (Vt.blocked.push(Dt), Vt.gaps.push(...mt))
      }
      return Vt
    }
    const tH = dO.LASER_D - .25,
      eH = 4,
      VH = 2,
      OH = 16;
    const qH = {
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
        blendMode: kd.f.Standard,
        soft: !0
      },
      DH = {
        green: qH,
        pink: {
          ...qH,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function mH(tt, et) {
      const Vt = {
        ...et.params
      };
      for (const [qt, Dt] of Object.entries(null !== (Ot = et.keys) && void 0 !== Ot ? Ot : {})) {
        var Ot;
        Vt[qt] = tt(Dt)
      }
      return Vt
    }
    const dH = "buildAFactory2Game:",
      jH = 2 * dO.LASER_D + 1,
      HH = dO.LASER_D;

    function XH(tt) {
      return tt(`${dH}colFocusTip`, {
        need: rj(dO.NOVA_FOCUS)
      })
    }

    function QH(tt, et) {
      return tt(et.key, mH(tt, et))
    }

    function lH(tt) {
      const et = tt.getStatus();
      return {
        status: et,
        entry: et ? tt.entryAtRoot(et.baf2ColAt) : void 0
      }
    }

    function EH(tt, et) {
      return {
        left: 100 * (HH + tt) / jH + "%",
        top: 100 * (HH + et) / jH + "%"
      }
    }

    function fH(tt) {
      let {
        status: et,
        entry: Vt
      } = tt;
      const Ot = mq(et.baf2ColLasers),
        qt = mq(et.baf2ColSpots),
        Dt = mq(et.baf2ColLive),
        mt = !0 === (null === Vt || void 0 === Vt ? void 0 : Vt.on),
        dt = dO.LASER_D,
        jt = [];
      for (let Et = 0; Et < 4; Et++) {
        const [tt, , et] = yO[Et];
        if (Dt[Et]) {
          const Vt = 100 * (dt - 1) / jH,
            Ot = tt + et > 0 ? 100 * (HH + 1) / jH : 100 * (HH - (dt - 1)) / jH,
            qt = 100 * (HH + .35) / jH,
            Dt = 30 / jH,
            Ht = 0 !== tt ? {
              left: `${Ot}%`,
              width: `${Vt}%`,
              top: `${qt}%`,
              height: `${Dt}%`
            } : {
              top: `${Ot}%`,
              height: `${Vt}%`,
              left: `${qt}%`,
              width: `${Dt}%`
            };
          jt.push((0, hD.jsx)("i", {
            className: uq()("Baf2ColDiagramBeam", {
              Off: !mt
            }),
            style: Ht
          }, `beam${Et}`))
        }
        const Vt = Ot[Et] ? "Baf2ColDiagramLaser" : qt[Et] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        jt.push((0, hD.jsx)("i", {
          className: Vt,
          style: EH(tt * dt, et * dt)
        }, `spot${Et}`))
      }
      for (let Et = 0; Et < 4; Et++) {
        if (Ot[Et] || !qt[Et]) continue;
        const [tt, , Vt] = yO[Et];
        for (const Ot of Aj(null !== (Ht = et.baf2ColGaps) && void 0 !== Ht ? Ht : 0, Et)) {
          var Ht;
          jt.push((0, hD.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: EH(tt * Ot, Vt * Ot)
          }, `gap${Et},${Ot}`))
        }
      }
      for (const [Et, , ft] of null !== (Xt = null === Vt || void 0 === Vt ? void 0 : Vt.blockers) && void 0 !== Xt ? Xt : []) {
        var Xt, Qt, lt;
        const tt = Et - (null !== (Qt = null === Vt || void 0 === Vt ? void 0 : Vt.focus[0]) && void 0 !== Qt ? Qt : 0),
          et = ft - (null !== (lt = null === Vt || void 0 === Vt ? void 0 : Vt.focus[2]) && void 0 !== lt ? lt : 0);
        jt.push((0, hD.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: EH(tt, et)
        }, `block${tt},${et}`))
      }
      return (0, hD.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [jt, (0, hD.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function wH(tt) {
      let {
        status: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)(), Ot = mq(et.baf2ColLive).filter(Boolean).length;
      return (0, hD.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, hD.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: XH(Vt),
          children: Vt(`${dH}colLadder`)
        }), (0, hD.jsx)("ul", {
          children: [1, 2, 3, 4].map((tt => (0, hD.jsx)("li", {
            className: uq()({
              On: tt === Ot
            }),
            children: Vt(`${dH}colLadderChip`, {
              lasers: String(tt),
              time: oj(tt)
            })
          }, tt)))
        })]
      })
    }

    function yH(tt) {
      let {
        item: et,
        Pd: Vt,
        need: Ot,
        cap: qt
      } = tt;
      const {
        t: Dt
      } = (0, Wq.H)(), mt = Math.min(Vt, Ot);
      return (0, hD.jsxs)("li", {
        className: uq()("Baf2ColTile", {
          Short: Vt < Ot
        }),
        children: [(0, hD.jsx)(NH, {
          item: et
        }), (0, hD.jsx)("b", {
          className: "Baf2ColTileValue",
          children: Dt(`${dH}colOutOf`, {
            amount: String(mt),
            cap: String(Ot)
          })
        }), (0, hD.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, hD.jsx)("i", {
            style: {
              width: 100 * mt / Ot + "%"
            }
          })
        }), Vt > Ot && (0, hD.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: Dt(`${dH}colIntakeHeld`, {
            amount: String(Vt),
            cap: String(qt)
          })
        })]
      })
    }

    function NH(tt) {
      let {
        item: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)();
      return (0, hD.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, hD.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, hD.jsx)(cq.e, {
            itemName: et,
            amount: 0
          })
        }), (0, hD.jsx)("span", {
          className: "Baf2ColTileName",
          children: qD(Vt, et)
        })]
      })
    }

    function aH(tt) {
      switch (tt.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function MH(tt) {
      var et, Vt, qt;
      let {
        store: Dt,
        close: mt
      } = tt;
      const {
        t: dt
      } = (0, Wq.H)(), jt = Um(), {
        status: Ht,
        entry: Xt
      } = function(tt) {
        const [et, Vt] = (0, Ot.useState)((() => lH(tt)));
        return (0, Ot.useEffect)((() => (Vt(lH(tt)), tt.subscribe((() => {
          Vt(lH(tt))
        })))), [tt]), et
      }(Dt), [Qt, lt] = (0, Ot.useState)(null), Et = null === Ht || void 0 === Ht ? void 0 : Ht.baf2ColHold;
      (0, Ot.useEffect)((() => {
        lt(null)
      }), [Et]);
      const ft = (0, Ot.useRef)({
          p: -1,
          n: 0
        }),
        wt = null !== (et = null === Ht || void 0 === Ht ? void 0 : Ht.baf2ColP) && void 0 !== et ? et : -1;
      wt < ft.current.p && ft.current.n++, ft.current.p = wt;
      const yt = (0, Ot.useRef)(null),
        [Nt] = (0, Ot.useState)((() => {
          return (tt = Dt.heldAtOpen()) === XO || tt === QO ? {
            key: `${kj}colBeltItIn`,
            item: tt
          } : null;
          var tt
        }));
      if (!Ht) return null;
      const Mt = Ht.baf2ColMember,
        bt = Ht.baf2ColP >= 0,
        Jt = function(tt, et) {
          if (tt.baf2ColP >= 0 && tt.baf2ColDraw > 0) {
            const et = tt.baf2ColWant > 0 ? Math.min(1, tt.baf2ColDraw / tt.baf2ColWant) : 0;
            return {
              focus: tt.baf2ColFocusPerS * et,
              draw: tt.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === tt.baf2ColState && et && et.draw > 0 ? {
            ...et,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Ht, yt.current);
      yt.current = Jt.draw > 0 ? Jt : null;
      const Ct = "slowed" === Ht.baf2ColState || "noPower" === Ht.baf2ColState,
        ut = gj(Ht),
        Kt = null !== Qt && void 0 !== Qt ? Qt : Ht.baf2ColHold,
        ht = function(tt) {
          var et, Vt;
          return "idle" === tt.baf2ColRxState ? null : null !== (et = null === (Vt = Bj(tt)) || void 0 === Vt ? void 0 : Vt.fix) && void 0 !== et ? et : null
        }(Ht),
        vt = null === ht && null === Nt ? function(tt) {
          var et;
          const Vt = tt.baf2ColSentTo;
          if (!Vt) return null;
          const Ot = null !== (et = tt.baf2ColSentHeld) && void 0 !== et ? et : null;
          return {
            key: null === Ot ? `${kj}colNovaSentToMachine` : `${kj}colNovaSentTo`,
            target: Vt,
            Pd: Ot
          }
        }(Ht) : null,
        Wt = bt ? dt(`${dH}colFocusOf`, {
          focus: rj(Ht.baf2ColP),
          need: rj(dO.NOVA_FOCUS)
        }) : null;
      return (0, hD.jsx)(Jm.c, {
        close: mt,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, hD.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, hD.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, hD.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, hD.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, hD.jsx)(cq.e, {
                  itemName: jO,
                  amount: 0
                })
              }), (0, hD.jsxs)("div", {
                children: [(0, hD.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: qD(dt, jO)
                }), (0, hD.jsx)("p", {
                  children: QH(dt, pj(Ht))
                })]
              })]
            }), (0, hD.jsx)(Cm.j, {
              onClick: mt
            })]
          }), (0, hD.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, hD.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, hD.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, hD.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: dt(Tj(Ht), {
                    time: null === ut ? "" : JD(dt, ut)
                  })
                }), (0, hD.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, hD.jsx)("i", {
                    style: {
                      width: (bt ? 100 * Ht.baf2ColP / dO.NOVA_FOCUS : 0) + "%"
                    }
                  }, ft.current.n)
                }), (0, hD.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, hD.jsxs)("span", {
                    title: XH(dt),
                    children: [(0, hD.jsx)("b", {
                      children: rj(Jt.focus)
                    }), " ", dt(`${dH}colFocusPerS`)]
                  }), (0, hD.jsxs)("span", {
                    className: uq()("Baf2ColDraw", {
                      Short: Ct
                    }),
                    children: [(0, hD.jsx)(Sq.b, {
                      name: "bolt"
                    }), Ct ? dt(`${dH}colDrawOf`, {
                      draw: rj(Ht.baf2ColDraw),
                      want: rj(Ht.baf2ColWant)
                    }) : dt(`${dH}colPowerPerS`, {
                      rate: rj(Jt.draw)
                    })]
                  }), null !== Wt && (0, hD.jsx)("span", {
                    className: "Soft",
                    children: Wt
                  })]
                })]
              }), (0, hD.jsx)("p", {
                className: uq()("Baf2ColState", aH(Ht)),
                children: QH(dt, xj(Ht))
              }), null !== ht && (0, hD.jsx)("p", {
                className: "Baf2ColStateFix",
                children: dt(ht)
              }), null === ht && null !== Nt && (0, hD.jsx)("p", {
                className: "Baf2ColStateFix",
                children: dt(Nt.key, {
                  item: qD(dt, Nt.item)
                })
              }), vt && (0, hD.jsx)("p", {
                className: "Baf2ColStateFix",
                children: dt(vt.key, {
                  target: qD(dt, vt.target),
                  amount: String(null !== (Vt = vt.Pd) && void 0 !== Vt ? Vt : 0)
                })
              }), (0, hD.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, hD.jsx)(yH, {
                  item: XO,
                  Pd: Ht.baf2ColSa,
                  need: dO.NOVA_SA,
                  cap: dO.SA_CAP
                }), (0, hD.jsx)(yH, {
                  item: QO,
                  Pd: Ht.baf2ColGd,
                  need: dO.NOVA_GD,
                  cap: dO.GD_CAP
                }), (0, hD.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, hD.jsx)(NH, {
                    item: "Nova Matter"
                  }), (0, hD.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: dt(`${dH}colNovaHeld`, {
                      amount: String(Ht.baf2ColOut),
                      cap: String(dO.OUT_CAP)
                    })
                  }), Mt && (0, hD.jsx)(Cm.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === Ht.baf2ColOut,
                    onClick: () => {
                      jt.send(zj(Ht, "take"))
                    },
                    children: dt(`${dH}colTake`)
                  })]
                })]
              }), Mt && (0, hD.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": Kt,
                className: uq()("Baf2ColHold", {
                  On: Kt
                }),
                onClick: tt => {
                  tt.detail > 0 && tt.currentTarget.blur(), lt(!Kt), jt.send(zj(Ht, "hold " + (Kt ? 0 : 1)))
                },
                children: [(0, hD.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, hD.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, hD.jsx)("b", {
                    children: dt(`${dH}colHold`)
                  }), (0, hD.jsx)("span", {
                    children: dt(`${dH}colHoldNote`)
                  })]
                })]
              })]
            }), (0, hD.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, hD.jsx)(fH, {
                status: Ht,
                entry: Xt
              }), (0, hD.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Yj(Ht.baf2ColLasers, Ht.baf2ColSpots, Ht.baf2ColLive, Jt.beamsOn, null !== (qt = Ht.baf2ColGaps) && void 0 !== qt ? qt : 0).map((tt => (0, hD.jsxs)("li", {
                  className: tt.tone,
                  children: [(0, hD.jsx)("b", {
                    children: QH(dt, tt.title)
                  }), null !== tt.hint && (0, hD.jsx)("span", {
                    children: QH(dt, tt.hint)
                  })]
                }, tt.dir)))
              }), (0, hD.jsx)(wH, {
                status: Ht
              })]
            })]
          })]
        })
      })
    }
    const bH = "buildAFactory2Game:",
      JH = 36e5,
      CH = 864e5;

    function uH(tt, et, Vt) {
      return Math.max(0, Math.ceil((tt + et - Math.max(Vt, tt)) / 1e3))
    }

    function KH(tt) {
      return tt.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function hH(tt) {
      return "Homestead" === tt
    }

    function vH(tt) {
      return function(tt) {
        let et = 0;
        for (const Vt of tt) {
          const tt = /^Island ([1-9]\d{0,5})$/.exec(Vt);
          tt && (et = Math.max(et, Number(tt[1])))
        }
        return `Island ${et+1}`
      }(tt.map((tt => tt.baf2IslandName)))
    }

    function WH(tt, et) {
      return function(tt) {
        return `${bH}islandsBlocked${tt[0].toUpperCase()}${tt.slice(1)}`
      }("degraded" === tt && 0 === et ? "stuck" : tt)
    }

    function SH(tt) {
      return tt.filter((tt => {
        var et;
        return !tt.baf2IslandActive && void 0 === tt.baf2IslandUnreadable && void 0 === (null === (et = tt.baf2IslandCoop) || void 0 === et ? void 0 : et.baf2CoopState)
      })).length
    }

    function cH(tt) {
      return "coopMoving" === tt || "coopUnreachable" === tt
    }

    function RH(tt, et) {
      const Vt = et > 0;
      return {
        change: null === tt && !Vt,
        switch: (null === tt || "degraded" === tt || cH(tt)) && !Vt,
        rename: "loading" !== tt && "degraded" !== tt && "stuck" !== tt
      }
    }

    function IH(tt, et) {
      return void 0 === tt || "corrupt" === tt && et
    }
    const PH = Lm;

    function ZH(tt, et, Vt) {
      if (null !== tt && void 0 !== tt && tt.untilGone) {
        var Ot;
        return !("dismiss" === tt.untilGone && void 0 === (null === (Ot = et.baf2IslandCoop) || void 0 === Ot ? void 0 : Ot.baf2CoopState)) && Vt - tt.atMs < 32500
      }
      return void 0 !== tt && Vt - tt.atMs < PH && et.baf2IslandName === tt.from
    }
    const LH = Lm;

    function FH(tt) {
      return "core" === (null === tt || void 0 === tt ? void 0 : tt.kind) ? tt.core : "islands" === (null === tt || void 0 === tt ? void 0 : tt.kind) ? tt.backToCore : void 0
    }

    function kH(tt) {
      return `\0${tt}\0`
    }

    function GH(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Ot = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const Dt of Object.keys(Vt)) Ot[Dt] = kH(Dt);
      let qt = Object.keys(Ot).length > 0 ? tt(et, Ot) : tt(et);
      for (const [Dt, mt] of Object.entries(Vt)) qt = qt.split(kH(Dt)).join(mt);
      return qt
    }

    function zH(tt, et) {
      return tt ? et ? "enabled" : "disabled" : "hidden"
    }
    const oH = {
      removed: `${bH}islandsCoopRemoved`,
      deleted: `${bH}islandsCoopDeleted`,
      notReady: `${bH}islandsCoopNotReady`,
      gone: `${bH}islandsCoopGone`
    };

    function rH(tt) {
      var et;
      return "member" !== (null === (et = tt.baf2IslandCoop) || void 0 === et ? void 0 : et.baf2CoopRole) && "newer" !== tt.baf2IslandUnreadable
    }

    function UH(tt, et, Vt, Ot, qt, Dt) {
      const mt = tt.baf2IslandActive,
        dt = tt.baf2IslandUnreadable,
        jt = tt.baf2IslandCoop,
        Ht = function(tt, et, Vt) {
          return {
            switch: tt.switch && void 0 === et,
            delete: tt.change && IH(et, Vt)
          }
        }(et, dt, Ot),
        Xt = mt && void 0 !== jt && void 0 === jt.baf2CoopState && "coopUnreachable" === Dt,
        Qt = {
          switch: zH((!mt || Xt) && void 0 === dt, Xt || Ht.switch),
          switchLabel: Xt ? "tryAgain" : "switch",
          rename: zH(!0, et.rename),
          delete: zH(!mt, Ht.delete),
          deleteWaits: !mt && IH(dt, Ot),
          people: zH(void 0 !== tt.baf2IslandInvitable || qt && mt && void 0 === dt && void 0 === jt, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        lt = !mt && Ht.delete;
      if (void 0 === jt) return Vt ? {
        ...Qt,
        delete: zH(!mt, !1),
        deleteWaits: !1,
        note: lt ? {
          key: `${bH}islandsCoopKeepOwn`
        } : null
      } : Qt;
      const Et = jt.baf2CoopState,
        ft = jt.baf2CoopMembers.length > 1,
        wt = {
          ...Qt,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Et && "member" === jt.baf2CoopRole) return {
        ...wt,
        dismiss: zH(!0, et.rename),
        note: {
          key: oH[Et],
          names: {
            owner: jt.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Et) {
        let tt = {
          key: `${bH}islandsCoopOwnLost`
        };
        return lt && ft ? tt = {
          key: `${bH}islandsCoopDeleteMembers`
        } : lt && Vt && (tt = {
          key: `${bH}islandsCoopKeepOwn`
        }), {
          ...wt,
          delete: zH(!mt, Ht.delete && !ft && !Vt),
          deleteWaits: Qt.deleteWaits && !ft && !Vt,
          note: tt
        }
      }
      if ("member" === jt.baf2CoopRole) return {
        ...Qt,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: zH(!0, mt ? et.switch : et.rename)
      };
      const yt = jt.baf2CoopManageHere;
      let Nt = null;
      var Mt;
      yt || mt ? lt && ft ? Nt = {
        key: `${bH}islandsCoopDeleteMembers`
      } : lt && Vt && (Nt = {
        key: `${bH}islandsCoopKeepOwn`
      }) : Nt = {
        key: null !== (Mt = jt.baf2CoopLeft) && void 0 !== Mt && Mt.length ? `${bH}islandsCoopManageThereClaim` : `${bH}islandsCoopManageThere`
      };
      return {
        ...Qt,
        rename: zH(!0, et.rename && yt),
        delete: zH(!mt, Ht.delete && !ft && !Vt),
        deleteWaits: Qt.deleteWaits && !ft && !Vt,
        people: "enabled",
        peopleLabel: "players",
        unshare: zH(yt && mt && !ft, et.change),
        remove: yt,
        note: Nt
      }
    }

    function AH(tt) {
      var et;
      const Vt = tt.baf2IslandCoop;
      if ("owner" !== (null === Vt || void 0 === Vt ? void 0 : Vt.baf2CoopRole) || void 0 !== Vt.baf2CoopState || null === (et = Vt.baf2CoopLeft) || void 0 === et || !et.length) return null;
      const Ot = tt.baf2IslandActive && Vt.baf2CoopManageHere;
      return {
        left: Vt.baf2CoopLeft,
        claim: Ot,
        goThere: !Ot && Vt.baf2CoopManageHere
      }
    }

    function iH(tt) {
      return tt.baf2CoopMembers.length >= tt.baf2CoopMax
    }

    function YH(tt, et, Vt) {
      return void 0 !== tt && et < tt.answer && Vt - tt.atMs < PH
    }
    const BH = "buildAFactory2Game:";

    function pH(tt, et) {
      return {
        onKeyDown: Vt => {
          Vt.stopPropagation(), Vt.nativeEvent.isComposing || 229 === Vt.nativeEvent.keyCode || ("Enter" === Vt.key ? (Vt.preventDefault(), tt()) : "Escape" === Vt.key && (Vt.preventDefault(), et()))
        }
      }
    }

    function xH(tt) {
      return {
        onKeyDown: et => {
          "Escape" !== et.key || et.nativeEvent.isComposing || (et.preventDefault(), et.stopPropagation(), tt())
        }
      }
    }

    function TH(tt) {
      tt.currentTarget.select()
    }

    function gH(tt, et) {
      (0, Ot.useEffect)((() => {
        var Vt;
        tt && (null === (Vt = et.current) || void 0 === Vt || Vt.scrollIntoView({
          block: "nearest"
        }))
      }), [tt, et])
    }

    function sH(tt) {
      const [et, Vt] = (0, Ot.useState)(null);
      return (0, Ot.useEffect)((() => {
        const et = document.querySelector(".UiRequests"),
          Ot = tt.current;
        if (!et || !Ot || "undefined" === typeof ResizeObserver) return;
        const qt = () => {
          const tt = et.getBoundingClientRect(),
            qt = Ot.getBoundingClientRect(),
            Dt = Ot.parentElement,
            mt = Dt && parseFloat(getComputedStyle(Dt).paddingTop) || 0,
            dt = function(tt, et, Vt, Ot) {
              if (!tt || tt.height <= 0 || tt.right <= et.left || tt.left >= et.right) return null;
              const qt = Math.max(Ot, tt.bottom + 8);
              return {
                marginTop: Math.round(qt - Ot),
                maxHeight: Math.max(0, Math.floor(Vt - qt - Ot))
              }
            }(tt, qt, window.innerHeight, mt);
          Vt((tt => (null === tt || void 0 === tt ? void 0 : tt.marginTop) === (null === dt || void 0 === dt ? void 0 : dt.marginTop) && (null === tt || void 0 === tt ? void 0 : tt.maxHeight) === (null === dt || void 0 === dt ? void 0 : dt.maxHeight) ? tt : dt))
        };
        qt();
        const Dt = new ResizeObserver(qt);
        return Dt.observe(et), window.addEventListener("resize", qt), () => {
          Dt.disconnect(), window.removeEventListener("resize", qt)
        }
      }), [tt]), et
    }

    function nH() {
      (0, Ot.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function tX(tt) {
      (0, Ot.useEffect)((() => {
        var et;
        null === (et = tt.current) || void 0 === et || et.focus()
      }), [tt])
    }

    function eX(tt) {
      const [et, Vt] = (0, Ot.useState)(Date.now);
      return (0, Ot.useEffect)((() => {
        const et = window.setInterval((() => {
          Vt(Date.now())
        }), tt);
        return () => {
          window.clearInterval(et)
        }
      }), [tt]), et
    }

    function VX(tt) {
      let {
        tier: et,
        t: Vt
      } = tt;
      const {
        kind: Ot,
        short: qt
      } = yt(et), Dt = Et(et, ft), mt = Vt(`${BH}${Dt.key}`, {
        ...Dt.params,
        name: Vt(`${BH}${Nt(et).nameKey}`)
      });
      return (0, hD.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, hD.jsx)("span", {
          className: uq()("Baf2IslandTierPip", {
            Stage: "tier" !== Ot
          }),
          "aria-hidden": "true",
          children: qt
        }), mt]
      })
    }

    function OX(tt) {
      let {
        note: et,
        className: Vt,
        t: Ot
      } = tt;
      return (0, hD.jsx)("p", {
        className: uq()("Baf2IslandNote", Vt),
        children: GH(Ot, et.key, et.names, et.params)
      })
    }
    const qX = "buildAFactory2Game:";

    function DX(tt) {
      let {
        message: et,
        arrivedAtMs: Vt,
        close: qt,
        leave: Dt
      } = tt;
      const mt = Um(),
        {
          t: dt
        } = (0, Wq.H)(),
        jt = eX(1e3),
        Ht = (0, Ot.useRef)(null);
      nH(), (0, Ot.useEffect)((() => {
        var tt;
        null === (tt = Ht.current) || void 0 === tt || tt.focus()
      }), []);
      const Xt = uH(Vt, et.baf2TransferInMs, jt),
        Qt = Vt + et.baf2TransferInMs - 1e3,
        [lt, Et] = (0, Ot.useState)(null);
      (0, Ot.useEffect)((() => {
        const tt = window.setTimeout((() => {
          Et(Qt)
        }), Math.max(0, Qt - Date.now()));
        return () => {
          window.clearTimeout(tt)
        }
      }), [Qt]);
      const ft = lt === Qt || jt >= Qt,
        wt = et.baf2TransferIsland,
        yt = et.baf2TransferOwner;
      return (0, hD.jsx)(Jm.c, {
        close: qt,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, hD.jsxs)("section", {
          ref: Ht,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, hD.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, hD.jsxs)("div", {
              children: [(0, hD.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === yt ? GH(dt, `${qX}islandsTransferOwn`, {
                  island: wt
                }) : GH(dt, `${qX}islandsTransfer`, {
                  island: wt,
                  owner: yt
                })
              }), (0, hD.jsx)("p", {
                children: ft ? dt(`${qX}islandsTransferNow`) : dt(`${qX}islandsTransferIn`, {
                  time: JD(dt, Xt)
                })
              })]
            }), (0, hD.jsx)(Cm.j, {
              ariaLabel: dt(`${qX}islandsClose`),
              onClick: qt
            })]
          }), !ft && (0, hD.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, hD.jsx)("p", {
              className: "Baf2TransferNote",
              children: dt(`${qX}islandsTransferNote`)
            }), (0, hD.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, hD.jsx)(Cm.f, {
                onClick: () => {
                  mt.send("baf2coopstay"), Dt()
                },
                children: dt(`${qX}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var mX = Vt(1554),
      dX = Vt(1227),
      jX = Vt.n(dX);
    const HX = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const XX = "buildAFactory2Game:",
      QX = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function lX(tt, et, Vt) {
      return void 0 === et ? Vt : "string" === typeof et ? et : Array.isArray(et) ? et.map((et => "string" === typeof et ? et : "translationKey" in et ? tt(et.translationKey) : "")).join("") : tt(et.translationKey)
    }

    function EX(tt) {
      const et = {};
      for (const [Vt, Ot] of Object.entries(null !== tt && void 0 !== tt ? tt : {})) et[Vt] = Ot < 0 ? bD(Ot) : Ot.toLocaleString("en-US");
      return et
    }

    function fX(tt, et) {
      const Vt = et ? "touch" : "mouse";
      return {
        use: tt(`${XX}lookUse_${Vt}`),
        Use: tt(`${XX}lookUseStart_${Vt}`)
      }
    }
    const wX = (0, Ot.memo)((function(tt) {
      let {
        item: et
      } = tt;
      return (0, hD.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, hD.jsx)(cq.e, {
          itemName: et,
          amount: 0
        })
      })
    }));

    function yX(tt) {
      let {
        label: et,
        percent: Vt,
        progress: Ot
      } = tt;
      return (0, hD.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, hD.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${et}: ${Ot}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Vt,
          children: (0, hD.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${Vt}%`
            }
          })
        }), (0, hD.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Ot
        })]
      })
    }

    function NX(tt) {
      let {
        chips: et
      } = tt;
      return (0, hD.jsx)("span", {
        className: "Baf2QuestChips",
        children: et.map((tt => {
          let [et, Vt, Ot] = tt;
          const qt = Vt >= Ot;
          return (0, hD.jsxs)("span", {
            className: uq()("Baf2QuestChip", {
              Met: qt
            }),
            children: [(0, hD.jsx)(wX, {
              item: et
            }), (0, hD.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: qt ? `\u2713${Ot}` : `${Vt}/${Ot}`
            })]
          }, et)
        }))
      })
    }

    function aX(tt, et) {
      const {
        key: Vt,
        params: Ot
      } = Et(et, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return tt(`${XX}${Vt}`, {
        ...Ot,
        name: tt(`${XX}${Nt(et).nameKey}`)
      })
    }

    function MX(tt) {
      let {
        core: et,
        t: Vt
      } = tt;
      const [Ot, qt] = et, Dt = qt > 0 ? Math.floor(100 * Ot / qt) : 100;
      return (0, hD.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": Vt(`${XX}questCoreLabel`, {
          have: String(Ot),
          need: String(qt)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Dt,
        children: [(0, hD.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: Vt(`${XX}questCore`, {
            percent: String(Dt)
          })
        }), (0, hD.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, hD.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${Dt}%`
            }
          })
        })]
      })
    }

    function bX(tt) {
      let {
        rows: et,
        t: Vt
      } = tt;
      const Ot = et.filter((tt => tt.done)).length;
      return (0, hD.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": Vt(`${XX}questStepsProgress`, {
          done: String(Ot),
          total: String(et.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": et.length,
        "aria-valuenow": Ot,
        children: et.map((tt => (0, hD.jsx)("span", {
          className: uq()("Baf2QuestSegment", {
            Done: tt.done,
            Current: tt.current
          })
        }, tt.id)))
      })
    }
    const JX = (0, Ot.memo)(uX, CX);

    function CX(tt, et) {
      const Vt = Vt => tt.view.itemNames[Vt] === et.view.itemNames[Vt];
      return tt.t === et.t && tt.extra === et.extra && (null === tt.row.item || Vt(tt.row.item)) && tt.row.madeFor.every(Vt) && tt.row.also.every(Vt) && jX()(tt.row, et.row)
    }

    function uX(tt) {
      let {
        row: et,
        view: Vt,
        t: Ot,
        extra: qt
      } = tt;
      const {
        isTouchScreen: Dt
      } = (0, bq.k)(["isTouchScreen"]), mt = et.item ? function(tt, et, Vt) {
        return 1 !== Vt && HX.has(tt) ? vq(et) : null
      }(et.key, et.item, et.total) : null, dt = mt ? Ot(mt) : et.item ? lX(Ot, Vt.itemNames[et.item], et.item) : "", jt = et.also.map((tt => lX(Ot, Vt.itemNames[tt], tt))), Ht = jt.join(", "), Xt = function(tt, et) {
        var Vt;
        return et.length < 2 ? null !== (Vt = et[0]) && void 0 !== Vt ? Vt : "" : tt(`${XX}listAnd`, {
          rest: et.slice(0, -1).join(tt(`${XX}listComma`)),
          last: et[et.length - 1]
        })
      }(Ot, [dt, ...jt]), Qt = Ot(`${XX}${et.key}`, {
        ...fX(Ot, Dt),
        ...EX(et.params),
        item: dt,
        also: Ht,
        itemList: Xt,
        total: String(et.total)
      }), [lt, ...Et] = Qt.split("\n"), ft = et.total > 1 && !et.done && !et.away;
      return (0, hD.jsxs)("li", {
        className: uq()("Baf2QuestStep", {
          Done: et.done,
          Current: et.current,
          JustFinished: et.justFinished,
          Away: et.away
        }),
        children: [!et.done && null !== et.item && (0, hD.jsx)(wX, {
          item: et.item
        }), (et.done || null === et.item) && (0, hD.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: et.done ? "\u2713" : "\u25cb"
        }), (0, hD.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, hD.jsx)("strong", {
            children: lt
          }), Et.length > 0 && (0, hD.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Et.join(" ")
          }), !et.done && et.madeFor.length > 0 && (0, hD.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Ot("buildAFactory2Game:questRowFor", {
              items: et.madeFor.map((tt => lX(Ot, Vt.itemNames[tt], tt))).join(" \u2192 ")
            })
          }), ft && (0, hD.jsx)(yX, {
            label: lt,
            percent: Math.round(100 * et.amount / et.total),
            progress: `${et.amount.toLocaleString("en-US")}/${et.total.toLocaleString("en-US")}`
          }), !et.done && !et.away && et.chips && et.chips.length > 0 && (0, hD.jsx)(NX, {
            chips: et.chips
          }), qt]
        })]
      })
    }
    const KX = "buildAFactory2Game:",
      hX = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      vX = {
        on: `${KX}tutorialButtonOn`,
        hud: `${KX}tutorialButtonHud`,
        off: `${KX}tutorialButtonOff`
      },
      WX = {
        on: `${KX}tutorialPickedOn`,
        hud: `${KX}tutorialPickedHud`,
        off: `${KX}tutorialPickedOff`
      };
    class SX {
      constructor(tt, et, Vt) {
        this.commands = tt, this.quests = et, this.toasts = Vt
      }
      next() {
        const tt = function(tt) {
            return Pt[(Pt.indexOf(tt) + 1) % Pt.length]
          }(this.quests.get().tutorial),
          et = this.quests.setTutorial(tt);
        this.commands.send(`baf2tutorial ${tt} ${et}`), this.toasts.show({
          baf2ToastText: [(0, Lt.pe)({
            translationKey: WX[tt]
          }, Lt.P.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function cX(tt, et) {
      let [Vt, Ot] = et;
      return tt(`${XX}${Vt}`, EX(Ot))
    }

    function RX(tt) {
      let [et, Vt] = tt;
      return et + JSON.stringify(Vt)
    }

    function IX(tt) {
      let {
        goal: et,
        t: Vt
      } = tt;
      return et ? (0, hD.jsx)("span", {
        className: "Baf2BookGoal",
        children: Vt(`${XX}${et}`)
      }) : null
    }

    function PX(tt) {
      let {
        view: et,
        t: Vt
      } = tt;
      if (!et.name) return null;
      const Ot = Aq(et.rows);
      return (0, hD.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, hD.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: Vt(`${XX}currentQuest`)
        }), (0, hD.jsx)("strong", {
          className: "Baf2BookTitle",
          children: cX(Vt, et.name)
        }), (0, hD.jsx)(IX, {
          goal: et.goal,
          t: Vt
        }), Ot.length > 1 && (0, hD.jsx)(bX, {
          rows: Ot,
          t: Vt
        }), (0, hD.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: et.rows.map((tt => (0, hD.jsx)(JX, {
            row: tt,
            view: et,
            t: Vt
          }, tt.id)))
        }), et.reward && (0, hD.jsxs)("span", {
          className: "Baf2BookReward",
          children: [Vt(`${XX}questReward`), (0, hD.jsx)(wX, {
            item: et.reward
          }), lX(Vt, et.itemNames[et.reward], et.reward)]
        })]
      })
    }

    function ZX(tt) {
      let {
        quest: et,
        upcoming: Vt,
        t: Ot
      } = tt;
      return (0, hD.jsxs)("li", {
        className: uq()("Baf2BookQuest", {
          Done: et[3],
          Upcoming: Vt
        }),
        children: [(0, hD.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: et[3] ? "\u2713" : "\u25cb"
        }), (0, hD.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, hD.jsx)("strong", {
            className: "Baf2BookTitle",
            children: cX(Ot, et)
          }), (0, hD.jsx)(IX, {
            goal: et[2],
            t: Ot
          })]
        })]
      })
    }

    function LX(tt) {
      let {
        done: et,
        total: Vt,
        t: Ot
      } = tt;
      const qt = Vt > 0 ? Math.round(100 * et / Vt) : 0,
        Dt = Ot(`${XX}questBookChapterProgress`, {
          done: String(et),
          total: String(Vt)
        });
      return (0, hD.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, hD.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": Dt,
          "aria-valuemin": 0,
          "aria-valuemax": Vt,
          "aria-valuenow": et,
          children: (0, hD.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${qt}%`
            }
          })
        }), (0, hD.jsx)("span", {
          className: "Baf2BookProgressText",
          children: Dt
        })]
      })
    }

    function FX(tt) {
      let {
        view: et,
        tier: Vt,
        quests: Ot,
        t: qt
      } = tt;
      const Dt = Vt === et.tier,
        mt = (null !== Ot && void 0 !== Ot ? Ot : []).filter((tt => !tt[4])),
        dt = (null !== Ot && void 0 !== Ot ? Ot : []).filter((tt => tt[4])),
        jt = mt.filter((tt => tt[3])).length,
        Ht = Dt && et.name ? RX(et.name) : null,
        Xt = mt.findIndex((tt => !tt[3] && RX(tt) === Ht));
      return (0, hD.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, hD.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, hD.jsx)("h3", {
            children: aX(qt, Vt)
          }), mt.length > 0 && (0, hD.jsx)(LX, {
            done: jt,
            total: mt.length,
            t: qt
          }), Dt && et.core && (0, hD.jsx)(MX, {
            core: et.core,
            t: qt
          })]
        }), (0, hD.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Ot && Dt && (0, hD.jsx)(PX, {
            view: et,
            t: qt
          }), mt.map(((tt, Vt) => Vt === Xt ? (0, hD.jsx)(PX, {
            view: et,
            t: qt
          }, RX(tt)) : (0, hD.jsx)(ZX, {
            quest: tt,
            upcoming: !tt[3],
            t: qt
          }, RX(tt))))]
        }), Dt && et.side && (0, hD.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, hD.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: qt(`${XX}questSide`)
          }), (0, hD.jsx)("strong", {
            className: "Baf2BookTitle",
            children: cX(qt, et.side.name)
          }), (0, hD.jsx)(IX, {
            goal: et.side.goal,
            t: qt
          }), (0, hD.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, hD.jsx)(JX, {
              row: et.side.row,
              view: et,
              t: qt
            })
          })]
        }), dt.length > 0 && (0, hD.jsxs)(hD.Fragment, {
          children: [(0, hD.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: qt(`${XX}questBookSidesDone`)
          }), (0, hD.jsx)("ol", {
            className: "Baf2BookQuests",
            children: dt.map((tt => (0, hD.jsx)(ZX, {
              quest: tt,
              upcoming: !1,
              t: qt
            }, RX(tt))))
          })]
        })]
      })
    }

    function kX(tt) {
      var et, Vt, Dt;
      let {
        store: mt,
        tutorial: dt,
        close: jt
      } = tt;
      const {
        t: Ht
      } = (0, Wq.H)(), Qt = (0, mX.h)(Fq, mt.get()), lt = null !== (et = Qt.tier) && void 0 !== et ? et : 1, [Et, ft] = (0, Ot.useState)(null), Nt = (null === Et || void 0 === Et ? void 0 : Et.at) === lt ? Et.tier : lt, Mt = (0, Ot.useRef)(null), bt = null !== Qt.chapters;
      (0, Ot.useEffect)((() => {
        var tt;
        Mt.current && (Mt.current.scrollTop = 0);
        const et = null === (tt = Mt.current) || void 0 === tt ? void 0 : tt.querySelector(".Baf2BookQuest.Current");
        if (Mt.current && et) {
          const tt = et.getBoundingClientRect().bottom - Mt.current.getBoundingClientRect().bottom;
          tt > 0 && (Mt.current.scrollTop += Math.min(tt, et.getBoundingClientRect().top - Mt.current.getBoundingClientRect().top))
        }
      }), [Nt, bt]);
      const Jt = null === (Vt = Qt.chapters) || void 0 === Vt ? void 0 : Vt.find((tt => {
        let [et] = tt;
        return et === Nt
      }));
      return (0, hD.jsx)(Jm.c, {
        close: jt,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, hD.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: QX,
          children: [(0, hD.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, hD.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: Ht(`${XX}questBookTitle`)
            }), (0, hD.jsx)(Cm.m, {
              className: "Baf2BookTutorialButton",
              disabled: !Qt.tutorialKnown,
              ariaLabel: Ht(vX[Qt.tutorial]),
              title: Ht(vX[Qt.tutorial]),
              onClick: () => {
                dt.next()
              },
              children: (0, hD.jsx)(Sq.b, {
                name: hX[Qt.tutorial]
              })
            }), (0, hD.jsx)(Cm.j, {
              onClick: jt
            })]
          }), (0, hD.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": Ht(`${XX}questBookChapters`),
            "data-pad-initial-area": !0,
            children: qt.slice(0, Xt()).map(((tt, et) => {
              const Vt = et + 1,
                {
                  kind: Ot,
                  short: qt
                } = yt(Vt),
                Dt = wt(Vt, lt),
                mt = Dt ? Ht(`${XX}coreAtomicHidden`) : aX(Ht, Vt);
              return (0, hD.jsx)("li", {
                children: (0, hD.jsx)("button", {
                  type: "button",
                  className: uq()({
                    Stage: "tier" !== Ot,
                    Atomic: "atomic" === Ot,
                    Current: Vt === lt,
                    Selected: Vt === Nt
                  }),
                  disabled: Vt > lt,
                  "aria-pressed": Vt === Nt,
                  "aria-label": mt,
                  title: Dt ? void 0 : mt,
                  onClick: () => {
                    ft({
                      tier: Vt,
                      at: lt
                    })
                  },
                  children: Dt ? "?" : qt
                })
              }, tt.nameKey)
            }))
          }), (0, hD.jsxs)("div", {
            ref: Mt,
            className: "Baf2BookBody",
            children: [rq(Qt) && Nt === lt && (0, hD.jsx)("p", {
              className: "Baf2BookEmpty",
              children: Ht(`${XX}questBookAllDone`)
            }), (0, hD.jsx)(FX, {
              view: Qt,
              tier: Nt,
              quests: null !== (Dt = null === Jt || void 0 === Jt ? void 0 : Jt[1]) && void 0 !== Dt ? Dt : null,
              t: Ht
            })]
          })]
        })
      })
    }
    const GX = "buildAFactory2Game:";

    function zX(tt) {
      let {
        tiers: et,
        from: Vt,
        tier: Ot,
        shown: qt,
        il: Dt
      } = tt;
      const {
        t: mt
      } = (0, Wq.H)(), dt = et.map(((tt, et) => {
        const dt = Vt + et,
          {
            kind: jt,
            short: Ht
          } = yt(dt),
          Xt = wt(dt, Ot);
        return (0, hD.jsx)("li", {
          children: (0, hD.jsx)("button", {
            type: "button",
            className: uq()({
              Stage: "tier" !== jt,
              Silhouette: Xt,
              Reached: dt <= Ot,
              Current: dt === Ot,
              Next: dt === Ot + 1,
              Selected: dt === qt
            }),
            disabled: Xt,
            "aria-pressed": dt === qt,
            "aria-label": Xt ? mt(`${GX}coreAtomicHidden`) : void 0,
            title: Xt ? void 0 : mt(`${GX}${tt.nameKey}`),
            onClick: () => {
              Dt(dt)
            },
            children: Xt ? "?" : Ht
          })
        }, tt.nameKey)
      }));
      return (0, hD.jsx)(hD.Fragment, {
        children: dt
      })
    }

    function oX(tt) {
      let {
        id: et,
        label: Vt,
        tiers: Ot,
        from: qt,
        ...Dt
      } = tt;
      return (0, hD.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, hD.jsx)("span", {
          id: et,
          className: "Baf2CoreLadderLabel",
          children: Vt
        }), (0, hD.jsx)("ol", {
          "aria-labelledby": et,
          children: (0, hD.jsx)(zX, {
            ...Dt,
            tiers: Ot,
            from: qt
          })
        })]
      })
    }

    function rX(tt) {
      const {
        t: et
      } = (0, Wq.H)(), Vt = qt.findIndex((tt => void 0 !== tt.stage)), Ot = qt.findIndex((tt => void 0 !== tt.reactorTier)), Dt = Vt < 0 ? qt : qt.slice(0, Vt), mt = Vt < 0 ? [] : qt.slice(Vt, Ot < 0 ? void 0 : Ot), jt = Ot < 0 || !dt() ? [] : qt.slice(Ot);
      return (0, hD.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, hD.jsx)(oX, {
          ...tt,
          id: "baf2CoreTiersLabel",
          label: et(`${GX}coreTiersLabel`),
          tiers: Dt,
          from: 1
        }), mt.length > 0 && (0, hD.jsx)(oX, {
          ...tt,
          id: "baf2CoreStagesLabel",
          label: et(`${GX}coreStagesLabel`),
          tiers: mt,
          from: Vt + 1
        }), jt.length > 0 && (0, hD.jsx)(oX, {
          ...tt,
          id: "baf2CoreAtomicLabel",
          label: et(`${GX}coreAtomicLabel`),
          tiers: jt,
          from: Ot + 1
        })]
      })
    }
    const UX = "buildAFactory2Game:";

    function AX(tt) {
      let {
        item: et,
        itemNames: Vt,
        children: Ot
      } = tt;
      return (0, hD.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, hD.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, hD.jsx)(cq.e, {
            itemName: et,
            amount: 0
          })
        }), (0, hD.jsx)(Rq.e, {
          text: Vt[et]
        }), Ot]
      })
    }

    function iX(tt) {
      const et = new Map;
      for (const {
          block: Ot
        }
        of tt.newDeposits) {
        var Vt;
        et.set(Ot, (null !== (Vt = et.get(Ot)) && void 0 !== Vt ? Vt : 0) + 1)
      }
      return [...et]
    }

    function YX(tt) {
      let {
        value: et,
        label: Vt,
        more: Ot
      } = tt;
      return (0, hD.jsxs)("li", {
        children: [(0, hD.jsx)("strong", {
          children: et
        }), (0, hD.jsx)("span", {
          children: Vt
        }), Ot > 0 && (0, hD.jsxs)("em", {
          children: ["+", Ot]
        })]
      })
    }

    function BX(tt) {
      let {
        items: et,
        itemNames: Vt
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)(), [Dt, mt] = (0, Ot.useState)(null), dt = null !== Dt && et.includes(Dt) ? Dt : null;
      return (0, hD.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, hD.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: qt(`${UX}coreRewardUnlocks`)
        }), (0, hD.jsx)("ul", {
          children: et.map((tt => (0, hD.jsx)("li", {
            children: (0, hD.jsx)("button", {
              type: "button",
              className: uq()("Baf2PanelIcon", {
                Picked: tt === dt
              }),
              title: qD(qt, tt),
              "aria-label": qD(qt, tt),
              "aria-pressed": tt === dt,
              onClick: () => {
                mt(tt === dt ? null : tt)
              },
              children: (0, hD.jsx)(cq.e, {
                itemName: tt,
                amount: 0
              })
            })
          }, tt)))
        }), (0, hD.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== dt && (0, hD.jsxs)(hD.Fragment, {
            children: [(0, hD.jsx)(Rq.e, {
              text: Vt[dt]
            }), " \xb7 ", (0, hD.jsx)(Rq.e, {
              text: Vt[Rt(dt)]
            })]
          }), null === dt && qt(`${UX}coreRecipeTap`)]
        })]
      })
    }

    function pX(tt) {
      var et, Vt;
      let {
        def: Ot,
        tier: qt,
        itemNames: Dt
      } = tt;
      const {
        t: mt
      } = (0, Wq.H)(), dt = qt > 1 ? Nt(qt - 1) : void 0, jt = Math.round(2 * Ot.islandRadius), Ht = dt ? Math.round(2 * dt.islandRadius) : jt, Xt = qt >= 3 ? CO(qt) : null;
      return (0, hD.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, hD.jsxs)("ul", {
          className: uq()("Baf2CoreStats", {
            Four: null !== Xt
          }),
          children: [(0, hD.jsx)(YX, {
            value: `${jt}\xd7${jt}`,
            label: mt(`${UX}coreStatIsland`),
            more: jt - Ht
          }), (0, hD.jsx)(YX, {
            value: String(Ot.machineAllowance),
            label: mt(`${UX}coreStatMachines`),
            more: Ot.machineAllowance - (null !== (et = null === dt || void 0 === dt ? void 0 : dt.machineAllowance) && void 0 !== et ? et : Ot.machineAllowance)
          }), (0, hD.jsx)(YX, {
            value: String(Ot.beltAllowance),
            label: mt(`${UX}coreStatBelts`),
            more: Ot.beltAllowance - (null !== (Vt = null === dt || void 0 === dt ? void 0 : dt.beltAllowance) && void 0 !== Vt ? Vt : Ot.beltAllowance)
          }), null !== Xt && (0, hD.jsx)(YX, {
            value: String(Xt),
            label: mt(`${UX}coreStatStorage`),
            more: Xt - (dt ? CO(qt - 1) : Xt)
          })]
        }), Ot.reward && (0, hD.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, hD.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: mt(`${UX}coreRewardItem`)
          }), (0, hD.jsx)(AX, {
            item: Ot.reward,
            itemNames: Dt
          })]
        }), Ot.newDeposits.length > 0 && (0, hD.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, hD.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: mt(Ot.newDeposits.length > 1 ? `${UX}coreRewardDeposits` : `${UX}coreRewardDeposit`)
          }), iX(Ot).map((tt => {
            let [et, Vt] = tt;
            return (0, hD.jsx)(AX, {
              item: et,
              itemNames: Dt,
              children: Vt > 1 && ` \xd7${Vt}`
            }, et)
          }))]
        }), Ot.unlocks.length > 0 && (0, hD.jsx)(BX, {
          items: Ot.unlocks,
          itemNames: Dt
        }), (0, hD.jsx)(xX, {
          tier: qt
        })]
      })
    }

    function xX(tt) {
      let {
        tier: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)(), Ot = yq[et];
      if (!Ot) return null;
      const qt = wq(et, 0, 0).barrierMax !== wq(et - 1, 0, 0).barrierMax;
      return (0, hD.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, hD.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, hD.jsx)(cq.e, {
            itemName: qt ? Hq.Chestplate : jq,
            amount: 0
          })
        }), Vt(`${UX}gearPerkLine`, {
          perk: Vt(`${UX}${Ot}`)
        })]
      })
    }

    function TX(tt, et) {
      return null === tt ? et : tt.value
    }

    function gX(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === tt || Vt - tt.atMs >= Ot ? null : qt(tt.value, et) ? tt.armed ? null : tt : tt.armed ? tt : {
        ...tt,
        armed: !0
      }
    }

    function sX(tt, et) {
      const Vt = et.filter((et => {
        var Vt;
        return !1 !== (null === (Vt = tt.get(et)) || void 0 === Vt ? void 0 : Vt.value)
      }));
      for (const [Ot, qt] of tt) qt.value && !et.includes(Ot) && Vt.push(Ot);
      return Vt
    }

    function nX(tt, et, Vt, qt) {
      const [Dt, mt] = (0, Ot.useState)((() => new Map)), dt = () => {
        mt((et => function(tt, et, Vt, Ot) {
          var qt;
          let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            mt = null;
          for (const [dt, jt] of tt) {
            const qt = gX(jt, et(dt), Vt, Ot, Dt);
            qt !== jt && (mt ??= new Map(tt), null === qt ? mt.delete(dt) : mt.set(dt, qt))
          }
          return null !== (qt = mt) && void 0 !== qt ? qt : tt
        }(et, tt, Date.now(), Vt, qt)))
      };
      (0, Ot.useEffect)((() => {
        dt()
      }), [et, Vt]), (0, Ot.useEffect)((() => {
        if (0 === Dt.size) return;
        const tt = Math.min(...[...Dt.values()].map((tt => tt.atMs))),
          et = setTimeout(dt, Math.max(0, tt + Vt - Date.now()) + 1);
        return () => {
          clearTimeout(et)
        }
      }), [Dt, et, Vt]);
      return [Dt, (et, Vt) => {
        mt((Ot => {
          const Dt = new Map(Ot);
          return Dt.set(et, function(tt, et, Vt) {
            return {
              value: tt,
              atMs: Vt,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(tt, et)
            }
          }(Vt, tt(et), Date.now(), qt)), Dt
        }))
      }]
    }
    const tQ = "buildAFactory2Game:";

    function eQ(tt) {
      let {
        message: et,
        itemNames: Vt
      } = tt;
      const qt = Um(),
        {
          t: Dt
        } = (0, Wq.H)(),
        [mt, dt] = (0, Ot.useState)(!1),
        [jt, Ht] = function(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lm;
          const [Vt, Ot] = nX((et => tt.includes(et)), tt, et, Object.is);
          return [sX(Vt, tt), Ot]
        }(et.baf2CoreBankPaused),
        Xt = new Set(jt),
        Qt = [...et.baf2CoreBanked];
      for (const Ot of Xt) Qt.some((tt => {
        let [et] = tt;
        return et === Ot
      })) || Qt.push([Ot, 0]);
      return 0 === Qt.length ? null : (0, hD.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, hD.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": mt,
          onClick: () => {
            dt(!mt)
          },
          children: [(0, hD.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: Dt(`${tQ}coreBankedLater`)
          }), (0, hD.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Qt.map((tt => {
              let [et, Vt] = tt;
              const Ot = Xt.has(et);
              return (0, hD.jsxs)("span", {
                className: uq()({
                  Paused: Ot
                }),
                title: Ot ? Dt(`${tQ}coreBankPausedTag`) : void 0,
                children: [(0, hD.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, hD.jsx)(cq.e, {
                    itemName: et,
                    amount: 0
                  })
                }), Vt, Ot && (0, hD.jsx)(Sq.b, {
                  name: "pause"
                })]
              }, et)
            }))
          }), (0, hD.jsx)(Sq.b, {
            name: mt ? "angle-up" : "angle-down"
          })]
        }), mt && (0, hD.jsxs)(hD.Fragment, {
          children: [(0, hD.jsx)("ul", {
            children: Qt.map((tt => {
              let [et, Ot] = tt;
              const mt = Xt.has(et);
              return (0, hD.jsxs)("li", {
                children: [(0, hD.jsxs)(AX, {
                  item: et,
                  itemNames: Vt,
                  children: [(0, hD.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Ot
                  }), mt && (0, hD.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: Dt(`${tQ}coreBankPausedTag`)
                  })]
                }), (0, hD.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, hD.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Ot,
                    onClick: () => {
                      qt.send(`baf2corewithdraw ${Ot} ${et}`)
                    },
                    children: Dt(`${tQ}coreTake`)
                  }), (0, hD.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      qt.send(`${Jt} ${et}`), Ht(et, !mt)
                    },
                    children: Dt(mt ? `${tQ}coreBankResume` : `${tQ}coreBankStop`)
                  })]
                })]
              }, et)
            }))
          }), (0, hD.jsx)("p", {
            className: "Baf2CoreHint",
            children: Dt(`${tQ}coreBankNote`)
          })]
        })]
      })
    }
    const VQ = "buildAFactory2Game:";

    function OQ(tt) {
      const et = Math.max(0, Math.floor(tt));
      return `${Math.floor(et/60)}:${String(et%60).padStart(2,"0")}`
    }

    function qQ(tt) {
      let {
        item: et
      } = tt;
      return (0, hD.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, hD.jsx)(cq.e, {
          itemName: et,
          amount: 0
        })
      })
    }

    function DQ() {
      return (0, hD.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, hD.jsx)(Sq.b, {
          name: "bolt"
        })
      })
    }

    function mQ(tt) {
      let {
        charge: et,
        hint: Vt,
        itemNames: Ot
      } = tt;
      const qt = Um(),
        {
          t: Dt
        } = (0, Wq.H)(),
        [mt, dt, jt, Ht, Xt, Qt, lt] = et,
        [Et, ft] = function(tt) {
          var et;
          let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lm,
            Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [qt, Dt] = nX((() => tt), tt, Vt, Ot);
          return [TX(null !== (et = qt.get("")) && void 0 !== et ? et : null, tt), tt => {
            Dt("", tt)
          }]
        }(lt),
        wt = Et === lt ? Qt : !Et,
        yt = Ht >= Xt,
        Nt = mt.find((tt => {
          let [, et, Vt] = tt;
          return Vt < .9 * et
        }));
      let Mt = `${VQ}coreChargeWaiting`,
        bt = {};
      return yt ? Mt = `${VQ}coreChargeDone` : Et ? Mt = `${VQ}coreChargeStopped` : wt && Vt ? (Mt = `${VQ}${Vt[0]}`, bt = {
        item: qD(Dt, Vt[1])
      }) : wt && Nt ? (Mt = `${VQ}coreChargeShort`, bt = {
        item: qD(Dt, Nt[0])
      }) : wt && dt > 0 && !jt ? Mt = `${VQ}coreChargePower` : wt && (Mt = `${VQ}coreChargeRunning`), (0, hD.jsxs)("div", {
        className: uq()("Baf2CoreCharge", {
          Waiting: !wt && !yt,
          Done: yt
        }),
        children: [(0, hD.jsxs)("h4", {
          children: [Dt(`${VQ}coreChargeTitle`), (0, hD.jsx)("span", {
            children: Dt(`${VQ}coreChargeProgress`, {
              done: OQ(Ht),
              need: OQ(Xt)
            })
          })]
        }), (0, hD.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, hD.jsx)("div", {
            style: {
              width: 100 * Math.min(Ht, Xt) / Xt + "%"
            }
          })
        }), (0, hD.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [mt.map((tt => {
            var et;
            let [Vt, qt, mt] = tt;
            const dt = mt >= .9 * qt;
            return (0, hD.jsxs)("li", {
              className: uq()({
                Done: dt,
                Short: wt && !dt
              }),
              children: [(0, hD.jsx)(qQ, {
                item: Vt
              }), (0, hD.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, hD.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, hD.jsx)(Rq.e, {
                    text: null !== (et = Ot[Vt]) && void 0 !== et ? et : Vt
                  }), (0, hD.jsx)("span", {
                    children: Dt(`${VQ}coreChargeItem`, {
                      now: String(mt),
                      need: String(qt)
                    })
                  })]
                }), (0, hD.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, hD.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*mt/qt)}%`
                    }
                  })
                })]
              })]
            }, Vt)
          })), dt > 0 && (0, hD.jsxs)("li", {
            className: uq()("Baf2CoreChargePower", {
              Short: wt && !jt
            }),
            children: [(0, hD.jsx)(DQ, {}), (0, hD.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, hD.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, hD.jsx)("span", {
                  children: Dt(`${VQ}coreChargePowerRow`, {
                    power: st(dt)
                  })
                })
              })
            })]
          })]
        }), (0, hD.jsx)("p", {
          className: "Baf2CoreHint",
          children: Dt(Mt, bt)
        }), !yt && (wt || Et) && (0, hD.jsx)("button", {
          type: "button",
          className: uq()("Baf2CoreChargeToggle", {
            Stopped: Et
          }),
          onClick: () => {
            qt.send(ut), ft(!Et)
          },
          children: Dt(Et ? `${VQ}coreChargeRestart` : `${VQ}coreChargeStop`)
        })]
      })
    }

    function dQ(tt) {
      let {
        charge: et,
        reached: Vt,
        itemNames: Ot
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)();
      return (0, hD.jsxs)("div", {
        className: uq()("Baf2CoreCharge", {
          Done: Vt
        }),
        children: [(0, hD.jsxs)("h4", {
          children: [qt(`${VQ}coreChargeTitle`), (0, hD.jsx)("span", {
            children: qt(`${VQ}coreChargeSpecTime`, {
              time: OQ(et.seconds)
            })
          })]
        }), (0, hD.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [et.items.map((tt => {
            var et;
            let {
              item: Dt,
              amount: mt
            } = tt;
            return (0, hD.jsxs)("li", {
              className: uq()({
                Done: Vt
              }),
              children: [(0, hD.jsx)(qQ, {
                item: Dt
              }), (0, hD.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, hD.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, hD.jsx)(Rq.e, {
                    text: null !== (et = Ot[Dt]) && void 0 !== et ? et : Dt
                  }), (0, hD.jsx)("span", {
                    children: qt(`${VQ}coreChargeSpecItem`, {
                      need: String(mt)
                    })
                  })]
                })
              })]
            }, Dt)
          })), et.powerPerS > 0 && (0, hD.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, hD.jsx)(DQ, {}), (0, hD.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, hD.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, hD.jsx)("span", {
                  children: qt(`${VQ}coreChargePowerRow`, {
                    power: st(et.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const jQ = "buildAFactory2Game:";

    function HQ(tt) {
      let {
        def: et,
        reached: Vt,
        banked: Ot,
        itemNames: qt
      } = tt;
      const {
        t: Dt
      } = (0, Wq.H)();
      return (0, hD.jsx)("ul", {
        className: "Baf2CoreCost",
        children: et.cost.map((tt => {
          let {
            item: et,
            amount: mt
          } = tt;
          const dt = Vt ? 0 : Ot(et);
          return (0, hD.jsx)("li", {
            children: (0, hD.jsx)(AX, {
              item: et,
              itemNames: qt,
              children: (0, hD.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: dt > 0 ? Dt(`${jQ}coreBankedFor`, {
                  amount: String(dt),
                  total: String(mt)
                }) : `\xd7${mt}`
              })
            })
          }, et)
        }))
      })
    }

    function XQ(tt, et) {
      if (et >= Xt()) return tt(`${jQ}coreMaxTier`);
      const Vt = Ht[et + 1];
      return Vt && !Vt.startsWith("upgradeCore") ? tt(`${jQ}coreGateQuest`, {
        quest: tt(`${jQ}quest_${Vt}`)
      }) : tt(`${jQ}coreGateClosed`)
    }

    function QQ() {
      const {
        t: tt
      } = (0, Wq.H)(), et = Um(), Vt = (0, Ot.useRef)(null), qt = (0, Ot.useRef)(Date.now());
      return gH(!0, Vt), (0, hD.jsx)("div", {
        ref: Vt,
        className: "Baf2CoreGrow",
        children: (0, hD.jsx)(Cm.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - qt.current >= 600 && et.send(bt)
          },
          children: tt(`${jQ}coreGrow`)
        })
      })
    }

    function lQ(tt) {
      let {
        message: et,
        itemNames: Vt,
        next: Ot
      } = tt;
      const qt = Um(),
        {
          t: Dt
        } = (0, Wq.H)(),
        mt = et.baf2CoreTier,
        dt = et.baf2CoreReady,
        jt = et.baf2CoreNeeds.filter((tt => {
          let [, et, Vt, Ot] = tt;
          return Ot > 0 && et < Vt
        })),
        Ht = et.baf2CoreNeeds.every((tt => {
          let [, et, Vt] = tt;
          return et >= Vt
        })),
        Xt = et.baf2CoreKeep;
      return (0, hD.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, hD.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [dt && (0, hD.jsx)(QQ, {}), (0, hD.jsx)("h3", {
            children: Dt(`${jQ}coreBring`)
          }), (0, hD.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: et.baf2CoreNeeds.map((tt => {
              let [et, Ot, mt, dt] = tt;
              return (0, hD.jsxs)("li", {
                className: uq()({
                  Done: Ot >= mt
                }),
                children: [(0, hD.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, hD.jsx)(cq.e, {
                    itemName: et,
                    amount: 0
                  })
                }), (0, hD.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, hD.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, hD.jsx)(Rq.e, {
                      text: Vt[et]
                    }), (0, hD.jsxs)("span", {
                      children: [Ot, "/", mt]
                    })]
                  }), (0, hD.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, hD.jsx)("div", {
                      style: {
                        width: 100 * Ot / mt + "%"
                      }
                    }), dt > 0 && (0, hD.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * dt / mt + "%"
                      }
                    })]
                  })]
                }), dt > 0 && Ot < mt && (0, hD.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    qt.send(`${Ct} ${et}`)
                  },
                  children: Dt(`${jQ}coreDeposit`, {
                    amount: String(dt)
                  })
                })]
              }, et)
            }))
          }), et.baf2CoreCharge && (0, hD.jsx)(mQ, {
            charge: et.baf2CoreCharge,
            hint: et.baf2CoreChargeHint,
            itemNames: Vt
          }), !dt && jt.length > 1 && (0, hD.jsx)(Cm.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              qt.send(bt)
            },
            children: Dt(`${jQ}coreHandOver`)
          }), !dt && void 0 !== Xt && (0, hD.jsx)("p", {
            className: "Baf2CoreHint",
            children: Dt(`${jQ}coreKeepRest`, {
              item: qD(Dt, Xt)
            })
          }), !dt && !Ht && 0 === jt.length && void 0 === Xt && (0, hD.jsx)("p", {
            className: "Baf2CoreHint",
            children: Dt(`${jQ}coreNothingHeld`)
          }), (0, hD.jsx)(eQ, {
            message: et,
            itemNames: Vt
          })]
        }), (0, hD.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, hD.jsx)("h3", {
            children: Dt(`${jQ}coreRewards`)
          }), (0, hD.jsx)(pX, {
            def: Ot,
            tier: mt + 1,
            itemNames: Vt
          })]
        })]
      })
    }

    function EQ(tt) {
      let {
        message: et,
        itemNames: Vt,
        shown: Ot
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)(), Dt = et.baf2CoreTier, mt = Nt(Ot), dt = Ot <= Dt, jt = new Map(et.baf2CoreBanked), Ht = !Mt(Dt, Kt(et)) && Ot === Dt;
      return (0, hD.jsxs)("div", {
        className: uq()("Baf2CoreBody", {
          Locked: !dt
        }),
        children: [(0, hD.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, hD.jsx)("h3", {
            children: qt(dt ? `${jQ}coreItTook` : `${jQ}coreItNeeds`)
          }), 0 === mt.cost.length && (0, hD.jsx)("p", {
            className: "Baf2CoreHint",
            children: qt(`${jQ}coreTierStart`)
          }), mt.cost.length > 0 && (0, hD.jsx)(HQ, {
            def: mt,
            reached: dt,
            banked: tt => {
              var et;
              return function(tt, et, Vt, Ot) {
                let qt = tt;
                for (let mt = et + 2; mt <= Vt; mt++) {
                  var Dt;
                  const tt = Nt(mt).cost.find((tt => tt.item === Ot)),
                    et = Math.min(qt, null !== (Dt = null === tt || void 0 === tt ? void 0 : tt.amount) && void 0 !== Dt ? Dt : 0);
                  if (mt === Vt) return et;
                  qt -= et
                }
                return 0
              }(null !== (et = jt.get(tt)) && void 0 !== et ? et : 0, Dt, Ot, tt)
            },
            itemNames: Vt
          }), mt.charge && (0, hD.jsx)(dQ, {
            charge: mt.charge,
            reached: dt,
            itemNames: Vt
          }), Ht && (0, hD.jsxs)(hD.Fragment, {
            children: [(0, hD.jsx)("p", {
              className: "Baf2CoreHint",
              children: XQ(qt, Dt)
            }), (0, hD.jsx)(eQ, {
              message: et,
              itemNames: Vt
            })]
          })]
        }), (0, hD.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, hD.jsx)("h3", {
            children: qt(dt ? `${jQ}coreGave` : `${jQ}coreLockedRewards`)
          }), (0, hD.jsx)(pX, {
            def: mt,
            tier: Ot,
            itemNames: Vt
          })]
        })]
      })
    }

    function fQ(tt, et) {
      const {
        key: Vt,
        params: Ot
      } = Et(et - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return tt(`${jQ}${Vt}`, Ot)
    }
    const wQ = "buildAFactory2Game:",
      yQ = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      NQ = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function aQ(tt) {
      let {
        view: et,
        close: Vt,
        askIslands: qt
      } = tt;
      const {
        t: Dt
      } = (0, Wq.H)(), [mt, dt] = (0, Ot.useState)(!1);
      (0, Ot.useEffect)((() => {
        if (!mt) return;
        const tt = window.setTimeout((() => {
          dt(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(tt)
        }
      }), [mt]);
      const {
        message: jt,
        itemNames: Ht
      } = et, Xt = jt.baf2CoreTier, Qt = Nt(Xt), lt = Mt(Xt, Kt(jt)), [wt, yt] = jt.baf2CoreMachines, [bt, Jt] = jt.baf2CoreBelts, Ct = jt.baf2CoreStorage, ut = jt.baf2CoreReady, [ht, vt] = (0, Ot.useState)(null), Wt = (null === ht || void 0 === ht ? void 0 : ht.at) === Xt && ht.ready === ut ? ht.tier : lt ? Xt + 1 : Xt;
      let St = "coreTierLocked";
      Wt <= Xt ? St = "coreTierReached" : Wt === Xt + 1 && (St = "coreTierNext");
      const ct = Dt(`${wQ}${Nt(Wt).nameKey}`),
        Rt = Wt === Xt + 1 ? lt : null,
        It = Et(Wt, {
          tier: St,
          stage: yQ[St],
          atomic: NQ[St]
        }),
        Pt = Dt(`${wQ}${It.key}`, {
          ...It.params,
          name: ct
        }),
        Zt = Et(Xt, ft),
        Lt = Dt(`${wQ}${Zt.key}`, {
          ...Zt.params,
          name: Dt(`${wQ}${Qt.nameKey}`)
        });
      return (0, hD.jsx)(Jm.c, {
        close: Vt,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, hD.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, hD.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, hD.jsxs)("div", {
              children: [(0, hD.jsx)("h2", {
                id: "baf2CoreTitle",
                children: Dt(`${wQ}coreTitle`)
              }), void 0 !== jt.baf2CoreIslandName && (0, hD.jsx)("p", {
                className: "Baf2CoreIsland",
                children: jt.baf2CoreIslandName
              }), (0, hD.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, hD.jsx)("span", {
                  children: Lt
                }), (0, hD.jsx)("span", {
                  className: uq()({
                    Full: wt >= yt
                  }),
                  children: Dt(`${wQ}coreMachineCount`, {
                    amount: String(wt),
                    total: String(yt)
                  })
                }), (0, hD.jsx)("span", {
                  className: uq()({
                    Full: bt >= Jt
                  }),
                  children: Dt(`${wQ}coreBeltCount`, {
                    amount: String(bt),
                    total: String(Jt)
                  })
                }), void 0 !== Ct && (0, hD.jsx)("span", {
                  className: uq()({
                    Full: Ct[0] >= Ct[1]
                  }),
                  children: Dt(`${wQ}coreStorageCount`, {
                    amount: String(Ct[0]),
                    total: String(Ct[1])
                  })
                })]
              })]
            }), (0, hD.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [jt.baf2CoreIslands && (0, hD.jsx)(Cm.f, {
                className: "Baf2CoreIslandsButton",
                disabled: mt,
                onClick: () => {
                  dt(!0), qt()
                },
                children: Dt(`${wQ}islandsOpenButton`)
              }), (0, hD.jsx)(Cm.j, {
                onClick: Vt
              })]
            })]
          }), (0, hD.jsx)(rX, {
            tier: Xt,
            shown: Wt,
            il: tt => {
              vt({
                tier: tt,
                at: Xt,
                ready: ut
              })
            }
          }), (0, hD.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [Pt, Wt > Xt + 1 && (0, hD.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: fQ(Dt, Wt)
            })]
          }), 6 === Wt && Wt > Xt && (0, hD.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Dt(`${wQ}coreStagesNote`)
          }), 11 === Wt && Wt > Xt && (0, hD.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Dt(`${wQ}coreAtomicNote`)
          }), Rt && (0, hD.jsx)(lQ, {
            message: jt,
            itemNames: Ht,
            next: Rt
          }), !Rt && (0, hD.jsx)(EQ, {
            message: jt,
            itemNames: Ht,
            shown: Wt
          })]
        })
      })
    }
    const MQ = {
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
    const bQ = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: jD,
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

    function JQ(tt) {
      return tt.baf2DropCometOreOnly ? "dropCometOre" : tt.baf2DropCometIsotope ? "seed" === tt.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function CQ(tt) {
      let {
        message: et,
        quests: Vt,
        close: qt,
        leave: Dt
      } = tt;
      const mt = Um(),
        {
          t: dt
        } = (0, Wq.H)(),
        jt = (0, mX.h)(Fq, Vt.get()),
        Ht = function(tt) {
          var et;
          if (!Zt(tt.tutorial)) return null;
          const Vt = tt.rows.find((tt => tt.current)),
            Ot = Vt ? MQ[Vt.key] : void 0;
          return null !== (et = null !== Ot && void 0 !== Ot ? Ot : tt.side ? MQ[tt.side.row.key] : void 0) && void 0 !== et ? et : null
        }(jt),
        Xt = null === jt.tier || QD(jt.tier),
        Qt = Xt ? bQ : bQ.filter((tt => {
          let {
            item: et
          } = tt;
          return et !== jD
        })),
        [lt, Et] = (0, Ot.useState)(null),
        ft = null !== lt && void 0 !== lt ? lt : !et.baf2DropFoundSalvage && Xt,
        wt = et.baf2DropRuinDistance,
        yt = et.baf2DropComet,
        Nt = et.baf2DropOldWorks,
        Mt = et.baf2DropGrove,
        bt = function(tt) {
          return 2 + Number(void 0 !== tt.baf2DropComet) + Number(!!tt.baf2DropOwedComet || void 0 !== tt.baf2DropOwedWaitMinutes) + Number(void 0 !== tt.baf2DropDigDistance) + Number(void 0 !== tt.baf2DropOldWorks) + Number(void 0 !== tt.baf2DropGrove)
        }(et),
        Jt = tt => {
          mt.send(function(tt) {
            return `baf2drop ${tt}`
          }(tt)), Dt()
        };
      let Ct = dt("buildAFactory2Game:dropRuinNone");
      if (null !== wt) {
        let tt = et.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        et.baf2DropRuinOldWorks && (tt = "dropRuinOldWorks");
        const Vt = void 0 === et.baf2DropRuinCluster ? dt("buildAFactory2Game:dropRuinOpen") : dt("buildAFactory2Game:dropRuinCluster", {
          count: String(et.baf2DropRuinCluster)
        });
        Ct = `${dt(`buildAFactory2Game:${tt}`,{distance:String(wt)})} ${Vt}`
      }
      let ut = dt("buildAFactory2Game:dropBelowDescription");
      void 0 !== et.baf2DropBelowLook && (ut = dt("buildAFactory2Game:dropBelowLook", {
        look: dt(et.baf2DropBelowLook)
      }));
      const Kt = "buildAFactory2Game:wildsRegion_survivorGrove" === et.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        ht = JD(dt, 60 * function(tt) {
          const [et, Vt] = (0, Ot.useState)((() => Date.now())), [qt, Dt] = (0, Ot.useState)(et);
          return (0, Ot.useEffect)((() => {
            const tt = Date.now();
            Vt(tt), Dt(tt)
          }), [tt]), (0, Ot.useEffect)((() => {
            const tt = window.setInterval((() => {
              Dt(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(tt)
            }
          }), []), Math.max(1, tt.baf2DropRenewMinutes - Math.floor((qt - et) / 6e4))
        }(et)),
        vt = function(tt, et, Vt) {
          return "ruin" === tt && !Vt || "owed" === tt && !et.baf2DropOwedComet ? null : tt
        }(Ht, et, null !== wt),
        Wt = function(tt) {
          for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
          return uq()("Baf2DropTile", ...Vt, {
            Wanted: vt === tt
          })
        };
      return (0, hD.jsx)(Jm.c, {
        close: qt,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, hD.jsxs)("section", {
          className: uq()("Baf2Panel Baf2DropMap", {
            Many: bt >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, hD.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, hD.jsxs)("div", {
              children: [(0, hD.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: dt("buildAFactory2Game:dropMapTitle")
              }), (0, hD.jsx)("p", {
                children: dt("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, hD.jsx)(Cm.j, {
              onClick: qt
            })]
          }), (0, hD.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== yt && (0, hD.jsxs)(Cm.w, {
              className: Wt("comet", "Baf2DropComet"),
              onClick: () => {
                Jt("comet")
              },
              children: [(0, hD.jsx)("strong", {
                children: dt("buildAFactory2Game:dropComet")
              }), (0, hD.jsx)("span", {
                children: dt(`buildAFactory2Game:${JQ(et)}`, {
                  distance: String(yt)
                })
              })]
            }), et.baf2DropOwedComet && (0, hD.jsxs)(Cm.w, {
              className: Wt("owed", "Baf2DropComet"),
              onClick: () => {
                Jt("owed")
              },
              children: [(0, hD.jsx)("strong", {
                children: dt("buildAFactory2Game:dropOwedComet")
              }), (0, hD.jsx)("span", {
                children: et.baf2DropOwedIsotope ? dt("buildAFactory2Game:dropOwedIsotopeDescription") : dt("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== et.baf2DropOwedWaitMinutes && (0, hD.jsxs)(Cm.w, {
              className: Wt("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, hD.jsx)("strong", {
                children: dt("buildAFactory2Game:dropOwedComet")
              }), (0, hD.jsx)("span", {
                children: dt("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(et.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, hD.jsxs)(Cm.f, {
              className: Wt("below"),
              onClick: () => {
                Jt("below")
              },
              children: [(0, hD.jsx)("strong", {
                children: dt("buildAFactory2Game:dropBelow")
              }), (0, hD.jsx)("span", {
                children: ut
              })]
            }), void 0 !== et.baf2DropDigDistance && (0, hD.jsxs)(Cm.s, {
              className: Wt("dig"),
              onClick: () => {
                Jt("dig")
              },
              children: [(0, hD.jsx)("strong", {
                children: dt("buildAFactory2Game:dropDig")
              }), (0, hD.jsx)("span", {
                children: dt("buildAFactory2Game:dropDigDescription", {
                  distance: String(et.baf2DropDigDistance),
                  y: bD(et.baf2DropDigY)
                })
              })]
            }), void 0 !== Mt && (0, hD.jsxs)(Cm.s, {
              className: Wt("grove", "Baf2DropGrove"),
              onClick: () => {
                Jt("grove")
              },
              children: [(0, hD.jsx)("strong", {
                children: dt("buildAFactory2Game:dropGrove")
              }), (0, hD.jsx)("span", {
                children: dt(`buildAFactory2Game:${Kt}`, {
                  distance: String(Mt)
                })
              })]
            }), (0, hD.jsxs)(Cm.m, {
              className: Wt("ruin"),
              disabled: null === wt,
              onClick: () => {
                Jt("ruin")
              },
              children: [(0, hD.jsx)("strong", {
                children: dt("buildAFactory2Game:dropRuin")
              }), (0, hD.jsx)("span", {
                children: Ct
              })]
            }), void 0 !== Nt && (0, hD.jsxs)(Cm.G, {
              className: Wt("works"),
              onClick: () => {
                Jt("works")
              },
              children: [(0, hD.jsx)("strong", {
                children: dt("buildAFactory2Game:dropOldWorks")
              }), (0, hD.jsx)("span", {
                children: dt("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(Nt)
                })
              })]
            })]
          }), (0, hD.jsx)("p", {
            className: "Baf2DropRenew",
            children: dt("buildAFactory2Game:dropRenew", {
              time: ht
            })
          }), (0, hD.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: ft,
            onToggle: tt => {
              tt.currentTarget.open !== ft && Et(tt.currentTarget.open)
            },
            children: [(0, hD.jsx)("summary", {
              children: dt("buildAFactory2Game:dropSalvageWhat")
            }), (0, hD.jsx)("p", {
              children: dt("buildAFactory2Game:dropSalvageIntro")
            }), (0, hD.jsx)("ul", {
              children: Qt.map((tt => {
                let {
                  item: et,
                  nameKey: Vt,
                  useKey: Ot,
                  params: qt
                } = tt;
                return (0, hD.jsxs)("li", {
                  children: [(0, hD.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, hD.jsx)(cq.e, {
                      itemName: et,
                      amount: 0
                    })
                  }), (0, hD.jsxs)("span", {
                    children: [(0, hD.jsx)("strong", {
                      children: dt(Vt)
                    }), ": ", dt(Ot, qt)]
                  })]
                }, et)
              }))
            })]
          })]
        })
      })
    }
    const uQ = "buildAFactory2Game:";

    function KQ(tt, et) {
      return tt.sendIslandEdit(`baf2coopleave ${et.baf2IslandId}`)
    }

    function hQ(tt) {
      let {
        card: et,
        canRename: Vt,
        done: qt,
        t: Dt
      } = tt;
      const mt = Um(),
        [dt, jt] = (0, Ot.useState)(et.baf2IslandName),
        Ht = KH(dt),
        Xt = "" === Ht || hH(Ht),
        Qt = () => {
          !Xt && Vt && (Ht !== et.baf2IslandName ? qt(mt.sendIslandEdit(`baf2islandrename ${et.baf2IslandId} ${Ht}`)) : qt(null))
        },
        lt = () => {
          qt(null)
        };
      return (0, hD.jsxs)("div", {
        className: "Baf2IslandForm",
        ...xH(lt),
        children: [(0, hD.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [Dt(`${uQ}islandsRenameLabel`), (0, hD.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: dt,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: TH,
            onChange: tt => {
              jt(tt.target.value)
            },
            ...pH(Qt, lt)
          })]
        }), "" === Ht && (0, hD.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Dt(`${uQ}islandsRenameEmpty`)
        }), hH(Ht) && (0, hD.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Dt(`${uQ}islandsNameReserved`)
        }), (0, hD.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, hD.jsx)(Cm.s, {
            disabled: Xt || !Vt,
            onClick: Qt,
            children: Dt(`${uQ}islandsRenameSave`)
          }), (0, hD.jsx)(Cm.f, {
            onClick: lt,
            children: Dt(`${uQ}islandsCancel`)
          })]
        })]
      })
    }

    function vQ(tt) {
      let {
        card: et,
        canDelete: Vt,
        done: qt,
        t: Dt
      } = tt;
      const mt = Um(),
        [dt, jt] = (0, Ot.useState)(""),
        Ht = function(tt, et) {
          return KH(tt).toLowerCase() === KH(et).toLowerCase()
        }(dt, et.baf2IslandName),
        Xt = () => {
          Ht && Vt && qt(mt.sendIslandEdit(`baf2islanddelete ${et.baf2IslandId}`))
        },
        Qt = () => {
          qt(null)
        },
        lt = kH("name"),
        [Et, ft = ""] = Dt(`${uQ}islandsDeleteConfirm`, {
          name: lt
        }).split(lt);
      return (0, hD.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...xH(Qt),
        children: [(0, hD.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, hD.jsxs)("span", {
            children: [Et, (0, hD.jsx)("strong", {
              children: et.baf2IslandName
            }), ft]
          }), (0, hD.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: dt,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: TH,
            onChange: tt => {
              jt(tt.target.value)
            },
            ...pH(Xt, Qt)
          })]
        }), AH(et) && (0, hD.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Dt(`${uQ}islandsDeleteLeftBack`)
        }), (0, hD.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, hD.jsx)(Cm.G, {
            disabled: !Ht || !Vt,
            onClick: Xt,
            children: Dt(`${uQ}islandsDeleteForGood`)
          }), (0, hD.jsx)(Cm.f, {
            onClick: Qt,
            children: Dt(`${uQ}islandsCancel`)
          })]
        })]
      })
    }

    function WQ(tt) {
      let {
        members: et,
        t: Vt
      } = tt;
      const Ot = et.length;
      return (0, hD.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, hD.jsxs)("span", {
          children: [1 === Ot ? Vt(`${uQ}islandsPlayersOne`) : Vt(`${uQ}islandsPlayers`, {
            count: String(Ot)
          }), " "]
        }), et.map(((tt, et) => (0, hD.jsxs)("span", {
          className: uq()("Baf2IslandMember", {
            Here: tt.baf2MemberHere
          }),
          title: tt.baf2MemberHere ? Vt(`${uQ}islandsPlayerHere`) : void 0,
          children: [tt.baf2MemberName, et < Ot - 1 ? ", " : ""]
        }, tt.baf2MemberKey)))]
      })
    }

    function SQ(tt) {
      let {
        card: et,
        answered: Vt,
        nowMs: qt,
        t: Dt
      } = tt;
      const mt = Um(),
        [dt, jt] = (0, Ot.useState)(new Map),
        Ht = AH(et);
      if (!Ht) return null;
      return (0, hD.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, hD.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Dt(`${uQ}islandsLeftTitle`)
        }), (0, hD.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Ht.left.map((tt => {
            const Ot = tt.baf2LeftKey,
              Xt = YH(dt.get(Ot), Vt, qt),
              Qt = function(tt) {
                return 1 === tt ? [`${bH}islandsLeftItemsOne`] : [`${bH}islandsLeftItems`, {
                  count: String(tt)
                }]
              }(tt.baf2LeftItems);
            return (0, hD.jsx)("li", {
              className: uq()("Baf2IslandPerson", {
                Pending: Xt
              }),
              children: (0, hD.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, hD.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: tt.baf2LeftName
                }), (0, hD.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Dt(Qt[0], Qt[1])
                }), Ht.claim && (0, hD.jsx)(Cm.s, {
                  className: "Baf2IslandPersonButton",
                  disabled: Xt,
                  onClick: () => {
                    (tt => {
                      const Vt = mt.sendIslandEdit(`baf2coopclaim ${et.baf2IslandId} ${tt}`);
                      jt((et => new Map(et).set(tt, {
                        atMs: Date.now(),
                        answer: Vt
                      })))
                    })(Ot)
                  },
                  children: Dt(`${uQ}islandsClaim`)
                })]
              })
            }, Ot)
          }))
        }), Ht.goThere && (0, hD.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Dt(`${uQ}islandsClaimGoThere`)
        })]
      })
    }

    function cQ(tt) {
      let {
        card: et,
        view: Vt,
        blocked: qt,
        maxIslands: Dt,
        answered: mt,
        nowMs: dt,
        done: jt,
        openSocial: Ht,
        t: Xt
      } = tt;
      const Qt = Um(),
        [lt, Et] = (0, Ot.useState)(new Map),
        [ft, wt] = (0, Ot.useState)(new Map),
        [yt, Nt] = (0, Ot.useState)(null),
        Mt = (0, Ot.useRef)(null);
      tX(Mt);
      const bt = et.baf2IslandId,
        Jt = et.baf2IslandCoop,
        Ct = null !== Jt && void 0 !== Jt && Jt.baf2CoopMembers.some((tt => tt.baf2MemberKey === yt)) ? yt : null,
        ut = function(tt, et) {
          const Vt = tt.baf2IslandCoop;
          return Vt && iH(Vt) || null !== et ? void 0 : tt.baf2IslandInvitable
        }(et, qt),
        Kt = function(tt, et) {
          const Vt = tt.baf2IslandCoop;
          return Vt && iH(Vt) ? {
            key: `${bH}islandsCoopFull`,
            params: {
              max: String(Vt.baf2CoopMax)
            }
          } : void 0 !== tt.baf2IslandInvitable && null === et || Vt && !Vt.baf2CoopManageHere ? null : "degraded" === et || "stuck" === et ? {
            key: `${bH}islandsInviteNotLoaded`
          } : null === et || function(tt) {
            return "notHome" === tt || "wilds" === tt || "visiting" === tt
          }(et) || cH(et) ? {
            key: `${bH}islandsInviteGoThere`
          } : {
            key: `${bH}islandsInviteBusy`
          }
        }(et, qt),
        ht = () => {
          var tt;
          Nt(null), null === (tt = Mt.current) || void 0 === tt || tt.focus()
        };
      return (0, hD.jsxs)("div", {
        ref: Mt,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...xH(null === Ct ? jt : ht),
        children: [Jt && (0, hD.jsxs)(hD.Fragment, {
          children: [(0, hD.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: Xt(`${uQ}islandsPlayersTitle`, {
              count: String(Jt.baf2CoopMembers.length),
              max: String(Jt.baf2CoopMax)
            })
          }), (0, hD.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: Jt.baf2CoopMembers.map(((tt, et) => {
              const Ot = tt.baf2MemberKey,
                qt = YH(lt.get(Ot), mt, dt);
              return (0, hD.jsxs)("li", {
                className: uq()("Baf2IslandPerson", {
                  Pending: qt
                }),
                children: [(0, hD.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, hD.jsx)("span", {
                    className: uq()("Baf2IslandPersonName", {
                      Here: tt.baf2MemberHere
                    }),
                    children: tt.baf2MemberName
                  }), tt.baf2MemberHere && (0, hD.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: Xt(`${uQ}islandsPlayerHere`)
                  }), 0 === et && (0, hD.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: Xt(`${uQ}islandsPlayerOwner`)
                  }), Vt.remove && et > 0 && !qt && Ct !== Ot && (0, hD.jsx)(Cm.K, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var tt;
                      Nt(Ot), null === (tt = Mt.current) || void 0 === tt || tt.focus()
                    },
                    children: Xt(`${uQ}islandsRemove`)
                  })]
                }), Ct === Ot && (0, hD.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, hD.jsx)("p", {
                    children: GH(Xt, `${uQ}islandsRemoveConfirm`, {
                      player: tt.baf2MemberName
                    })
                  }), (0, hD.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, hD.jsx)(Cm.G, {
                      onClick: () => {
                        (tt => {
                          const et = Qt.sendIslandEdit(`baf2coopremove ${bt} ${tt.baf2MemberKey}`);
                          Et((Vt => new Map(Vt).set(tt.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: et
                          }))), ht()
                        })(tt)
                      },
                      children: Xt(`${uQ}islandsRemoveYes`)
                    }), (0, hD.jsx)(Cm.f, {
                      onClick: ht,
                      children: Xt(`${uQ}islandsCancel`)
                    })]
                  })]
                })]
              }, Ot)
            }))
          })]
        }), (void 0 !== ut || null !== Kt) && (0, hD.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Xt(`${uQ}islandsInviteTitle`)
        }), !Jt && (void 0 !== ut || null !== Kt) && (0, hD.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Xt(`${uQ}islandsInviteShareNote`)
        }), 0 === (null === ut || void 0 === ut ? void 0 : ut.length) && (0, hD.jsx)(RQ, {
          openSocial: Ht,
          t: Xt
        }), void 0 !== ut && ut.length > 0 && (0, hD.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: ut.map((tt => {
            const et = !0 === tt.baf2InvitableSent || YH(ft.get(tt.baf2InvitableId), mt, dt);
            return (0, hD.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, hD.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, hD.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: tt.baf2InvitableName
                }), tt.baf2InvitableFull && !et && (0, hD.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Xt(`${uQ}islandsInviteTheirFull`, {
                    max: String(Dt)
                  })
                }), (et || !tt.baf2InvitableFull) && (0, hD.jsx)(Cm.s, {
                  className: "Baf2IslandPersonButton",
                  disabled: et,
                  onClick: () => {
                    (tt => {
                      const et = Qt.sendIslandEdit(`baf2coopinvite ${bt} ${tt}`);
                      wt((Vt => new Map(Vt).set(tt, {
                        atMs: Date.now(),
                        answer: et
                      })))
                    })(tt.baf2InvitableId)
                  },
                  children: Xt(et ? `${uQ}islandsInvited` : `${uQ}islandsInvite`)
                })]
              })
            }, tt.baf2InvitableId)
          }))
        }), Kt && (0, hD.jsx)(OX, {
          note: Kt,
          t: Xt
        }), (0, hD.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, hD.jsx)(Cm.f, {
            onClick: jt,
            children: Xt(`${uQ}islandsDone`)
          })
        })]
      })
    }

    function RQ(tt) {
      let {
        openSocial: et,
        t: Vt
      } = tt;
      return (0, hD.jsxs)(hD.Fragment, {
        children: [(0, hD.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Vt(et ? `${uQ}islandsInviteNobody` : `${uQ}islandsInviteNobodyGuest`)
        }), et && (0, hD.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, hD.jsx)(Cm.f, {
            onClick: et,
            children: Vt("socialBar:social")
          })
        })]
      })
    }

    function IQ(tt) {
      let {
        className: et,
        text: Vt,
        ConfirmButton: qt,
        confirmLabel: Dt,
        canConfirm: mt,
        send: dt,
        done: jt,
        t: Ht
      } = tt;
      const Xt = (0, Ot.useRef)(null);
      tX(Xt);
      const Qt = () => {
        jt(null)
      };
      return (0, hD.jsxs)("div", {
        ref: Xt,
        tabIndex: -1,
        className: uq()("Baf2IslandForm", et),
        ...xH(Qt),
        children: [(0, hD.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Vt
        }), (0, hD.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, hD.jsx)(qt, {
            disabled: !mt,
            onClick: () => {
              mt && jt(dt())
            },
            children: Dt
          }), (0, hD.jsx)(Cm.f, {
            onClick: Qt,
            children: Ht(`${uQ}islandsCancel`)
          })]
        })]
      })
    }

    function PQ(tt) {
      return "hidden" !== tt
    }

    function ZQ(tt) {
      var et, Vt;
      let {
        card: qt,
        keepOwn: Dt,
        blocked: mt,
        maxIslands: dt,
        serverNowMs: jt,
        nowMs: Ht,
        actions: Xt,
        full: Qt,
        waits: lt,
        answered: Et,
        mode: ft,
        setMode: wt,
        pending: yt,
        onSent: Nt,
        switchTo: Mt,
        leave: bt,
        coopOn: Jt,
        openSocial: Ct,
        t: ut
      } = tt;
      const Kt = Um(),
        ht = qt.baf2IslandActive,
        vt = ht ? null : function(tt, et) {
          if (tt <= 0) return null;
          const Vt = et - tt;
          if (Vt < yD) return [`${bH}islandsPlayedJustNow`];
          if (Vt < JH) return [`${bH}islandsPlayedMinutes`, {
            minutes: String(Math.floor(Vt / yD))
          }];
          if (Vt < CH) return [`${bH}islandsPlayedHours`, {
            hours: String(Math.floor(Vt / JH))
          }];
          const Ot = Math.floor(Vt / CH);
          return 1 === Ot ? [`${bH}islandsPlayedDay`] : [`${bH}islandsPlayedDays`, {
            days: String(Ot)
          }]
        }(qt.baf2IslandLastPlayedMs, jt),
        Wt = void 0 === (St = qt.baf2IslandItems) ? null : 0 === St ? [`${bH}islandsItemsNone`] : 1 === St ? [`${bH}islandsItemsOne`] : [`${bH}islandsItems`, {
          count: String(St)
        }];
      var St;
      const ct = function(tt) {
          return tt ? 1 === tt ? [`${bH}islandsWaitingOne`] : [`${bH}islandsWaiting`, {
            count: String(tt)
          }] : null
        }(qt.baf2IslandWaiting),
        Rt = qt.baf2IslandUnreadable,
        It = qt.baf2IslandCoop,
        Pt = UH(qt, Xt, Dt, Qt, Jt, mt),
        Zt = (0, Ot.useRef)(null);
      gH(null !== ft, Zt);
      const Lt = () => {
          var tt;
          wt(null), null === (tt = Zt.current) || void 0 === tt || tt.focus()
        },
        Ft = (tt, et) => {
          Lt(), null !== tt && Nt(tt, et)
        },
        kt = (tt, et) => ut(`${uQ}${tt}`, {
          time: JD(ut, et)
        });
      return (0, hD.jsxs)("li", {
        ref: Zt,
        tabIndex: -1,
        className: uq()("Baf2IslandCard", {
          Active: ht,
          Pending: yt,
          Shared: void 0 !== It
        }),
        children: [(0, hD.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, hD.jsx)("strong", {
            className: "Baf2IslandName",
            children: qt.baf2IslandName
          }), ht && (0, hD.jsx)("span", {
            className: "Baf2IslandBadge",
            children: ut(`${uQ}islandsOnThis`)
          }), It && (0, hD.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: ut(`${uQ}islandsShared`)
          })]
        }), "member" === (null === It || void 0 === It ? void 0 : It.baf2CoopRole) && (0, hD.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: GH(ut, `${uQ}islandsSharedBy`, {
            owner: It.baf2CoopOwner
          })
        }), void 0 !== Rt && (0, hD.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: ut("newer" === Rt ? `${uQ}islandsUnreadable` : `${uQ}islandsDamaged`)
        }), "corrupt" === Rt && Qt && (0, hD.jsx)("p", {
          className: "Baf2IslandStats",
          children: ut(`${uQ}islandsDamagedFull`)
        }), void 0 === Rt && (0, hD.jsxs)(hD.Fragment, {
          children: [(0, hD.jsx)(VX, {
            tier: qt.baf2IslandTier,
            t: ut
          }), (0, hD.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, hD.jsx)("span", {
              children: 1 === qt.baf2IslandQuestsDone ? ut(`${uQ}islandsQuestsDoneOne`) : ut(`${uQ}islandsQuestsDone`, {
                count: String(qt.baf2IslandQuestsDone)
              })
            }), (0, hD.jsx)("span", {
              children: 1 === qt.baf2IslandMachines ? ut(`${uQ}islandsMachinesOne`) : ut(`${uQ}islandsMachines`, {
                count: String(qt.baf2IslandMachines)
              })
            }), Wt && (0, hD.jsx)("span", {
              children: ut(Wt[0], Wt[1])
            }), ct && (0, hD.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: ut(ct[0], ct[1])
            }), vt && (0, hD.jsx)("span", {
              children: ut(vt[0], vt[1])
            })]
          })]
        }), It && void 0 === It.baf2CoopState && "people" !== ft && (0, hD.jsx)(WQ, {
          members: It.baf2CoopMembers,
          t: ut
        }), null === ft && (0, hD.jsx)(SQ, {
          card: qt,
          answered: Et,
          nowMs: Ht,
          t: ut
        }), Pt.note && (0, hD.jsx)(OX, {
          note: Pt.note,
          className: uq()({
            Unreachable: void 0 !== (null === It || void 0 === It ? void 0 : It.baf2CoopState)
          }),
          t: ut
        }), "rename" === ft && (0, hD.jsx)(hQ, {
          card: qt,
          canRename: "enabled" === Pt.rename,
          done: Ft,
          t: ut
        }), "delete" === ft && (0, hD.jsx)(vQ, {
          card: qt,
          canDelete: "enabled" === Pt.delete,
          done: tt => {
            Ft(tt, It ? "delete" : void 0)
          },
          t: ut
        }), "people" === ft && (0, hD.jsx)(cQ, {
          card: qt,
          view: Pt,
          blocked: mt,
          maxIslands: dt,
          answered: Et,
          nowMs: Ht,
          done: Lt,
          openSocial: Ct,
          t: ut
        }), "leave" === ft && (0, hD.jsx)(IQ, {
          className: "Leave",
          text: GH(ut, `${uQ}islandsLeaveConfirm`, {
            island: qt.baf2IslandName,
            owner: null !== (et = null === (Vt = qt.baf2IslandCoop) || void 0 === Vt ? void 0 : Vt.baf2CoopOwner) && void 0 !== et ? et : ""
          }),
          ConfirmButton: Cm.G,
          confirmLabel: ut(`${uQ}islandsLeaveYes`),
          canConfirm: "enabled" === Pt.leave,
          send: () => KQ(Kt, qt),
          done: tt => {
            Ft(tt, "leave"), null !== tt && ht && bt()
          },
          t: ut
        }), "unshare" === ft && (0, hD.jsx)(IQ, {
          className: "Unshare",
          text: GH(ut, `${uQ}islandsStopSharingConfirm`, {
            island: qt.baf2IslandName
          }),
          ConfirmButton: Cm.s,
          confirmLabel: ut(`${uQ}islandsStopSharing`),
          canConfirm: "enabled" === Pt.unshare,
          send: () => Kt.sendIslandEdit(`baf2coopunshare ${qt.baf2IslandId}`),
          done: tt => {
            Ft(tt), null !== tt && bt()
          },
          t: ut
        }), null === ft && !yt && (0, hD.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": qt.baf2IslandName,
          children: [PQ(Pt.switch) && (0, hD.jsx)(Cm.s, {
            disabled: "enabled" !== Pt.switch,
            onClick: Mt,
            children: "tryAgain" === Pt.switchLabel ? ut(`${uQ}islandsTryAgain`) : lt.switch > 0 ? kt("islandsSwitchIn", lt.switch) : ut(`${uQ}islandsSwitch`)
          }), PQ(Pt.rename) && (0, hD.jsx)(Cm.f, {
            disabled: "enabled" !== Pt.rename,
            onClick: () => {
              wt("rename")
            },
            children: ut(`${uQ}islandsRename`)
          }), PQ(Pt.people) && (0, hD.jsx)(Cm.f, {
            disabled: "enabled" !== Pt.people,
            onClick: () => {
              wt("people")
            },
            children: ut("players" === Pt.peopleLabel ? `${uQ}islandsPlayersButton` : `${uQ}islandsInviteButton`)
          }), PQ(Pt.unshare) && (0, hD.jsx)(Cm.f, {
            disabled: "enabled" !== Pt.unshare,
            onClick: () => {
              wt("unshare")
            },
            children: ut(`${uQ}islandsStopSharing`)
          }), PQ(Pt.dismiss) && (0, hD.jsx)(Cm.f, {
            disabled: "enabled" !== Pt.dismiss,
            onClick: () => {
              Nt(KQ(Kt, qt), "dismiss"), ht && bt()
            },
            children: ut(`${uQ}islandsDismiss`)
          }), PQ(Pt.leave) && (0, hD.jsx)(Cm.K, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Pt.leave,
            onClick: () => {
              wt("leave")
            },
            children: ht && lt.switch > 0 ? kt("islandsLeaveIn", lt.switch) : ut(`${uQ}islandsLeave`)
          }), PQ(Pt.delete) && (0, hD.jsx)(Cm.K, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== Pt.delete,
            onClick: () => {
              wt("delete")
            },
            children: lt.change > 0 && Pt.deleteWaits ? kt("islandsDeleteIn", lt.change) : ut(`${uQ}islandsDelete`)
          })]
        })]
      })
    }
    const LQ = "buildAFactory2Game:";

    function FQ(tt) {
      let {
        invite: et,
        actions: Vt,
        full: qt,
        maxIslands: Dt,
        waitSeconds: mt,
        focus: dt,
        focused: jt,
        join: Ht,
        decline: Xt,
        t: Qt
      } = tt;
      const [lt, Et] = (0, Ot.useState)(!1), ft = (0, Ot.useRef)(null);
      gH(lt, ft), (0, Ot.useEffect)((() => {
        var tt;
        dt && (Et(!0), null === (tt = ft.current) || void 0 === tt || tt.focus(), jt())
      }), [dt, jt]);
      const wt = function(tt, et, Vt, Ot, qt) {
          return Vt ? {
            join: !1,
            note: {
              key: `${bH}islandsJoinTooMany`,
              params: {
                max: String(Ot)
              }
            }
          } : tt.baf2InvitePlayers >= qt ? {
            join: !1,
            note: {
              key: `${bH}islandsJoinFull`
            }
          } : {
            join: et.switch,
            note: null
          }
        }(et, Vt, qt, Dt, 10),
        yt = et.baf2InviteIsland,
        Nt = et.baf2InvitePlayers,
        Mt = () => {
          var tt;
          Et(!1), null === (tt = ft.current) || void 0 === tt || tt.focus()
        },
        bt = mt > 0 && null === wt.note ? Qt(`${LQ}islandsJoinIn`, {
          time: JD(Qt, mt)
        }) : Qt(`${LQ}islandsJoin`);
      return (0, hD.jsxs)("li", {
        ref: ft,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...lt ? xH(Mt) : {},
        children: [(0, hD.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, hD.jsx)("strong", {
            className: "Baf2IslandName",
            children: yt
          })
        }), (0, hD.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: GH(Qt, `${LQ}islandsInvitedBy`, {
            owner: et.baf2InviteOwner
          })
        }), (0, hD.jsx)(VX, {
          tier: et.baf2InviteTier,
          t: Qt
        }), (0, hD.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, hD.jsx)("span", {
            children: 1 === Nt ? Qt(`${LQ}islandsPlayersCountOne`) : Qt(`${LQ}islandsPlayersCount`, {
              count: String(Nt)
            })
          })
        }), wt.note && (0, hD.jsx)(OX, {
          note: wt.note,
          t: Qt
        }), lt && (0, hD.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: GH(Qt, `${LQ}islandsJoinConfirm`, {
            island: yt
          })
        }), !lt && (0, hD.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": yt,
          children: [(0, hD.jsx)(Cm.s, {
            disabled: !wt.join,
            onClick: () => {
              var tt;
              Et(!0), null === (tt = ft.current) || void 0 === tt || tt.focus()
            },
            children: bt
          }), (0, hD.jsx)(Cm.f, {
            onClick: Xt,
            children: Qt(`${LQ}islandsDecline`)
          })]
        }), lt && (0, hD.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, hD.jsx)(Cm.s, {
            disabled: !wt.join,
            onClick: Ht,
            children: Qt(`${LQ}islandsJoinYes`)
          }), (0, hD.jsx)(Cm.f, {
            onClick: Mt,
            children: Qt(`${LQ}islandsCancel`)
          })]
        })]
      })
    }

    function kQ(tt) {
      let {
        invites: et,
        actions: Vt,
        full: Ot,
        maxIslands: qt,
        waitSeconds: Dt,
        focus: mt,
        focused: dt,
        leave: jt,
        declined: Ht,
        t: Xt
      } = tt;
      const Qt = Um();
      return (0, hD.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, hD.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: Xt(`${LQ}islandsInvitesTitle`)
        }), (0, hD.jsx)("ul", {
          className: "Baf2IslandCards",
          children: et.map((tt => {
            const et = tt.baf2InviteId;
            return (0, hD.jsx)(FQ, {
              invite: tt,
              actions: Vt,
              full: Ot,
              maxIslands: qt,
              waitSeconds: Dt,
              focus: mt === et,
              focused: dt,
              join: () => {
                Qt.send(`baf2coopaccept ${et}`), jt()
              },
              decline: () => {
                Qt.send(`baf2coopdecline ${et}`), Ht(et)
              },
              t: Xt
            }, et)
          }))
        })]
      })
    }
    const GQ = "buildAFactory2Game:";

    function zQ(tt) {
      let {
        cards: et,
        activeName: Vt,
        canStart: qt,
        waitSeconds: Dt,
        leave: mt,
        t: dt
      } = tt;
      const jt = Um(),
        [Ht, Xt] = (0, Ot.useState)(!1),
        [Qt, lt] = (0, Ot.useState)(""),
        Et = (0, Ot.useRef)(null);
      gH(Ht, Et), (0, Ot.useEffect)((() => {
        var tt;
        Ht && (null === (tt = Et.current) || void 0 === tt || tt.focus())
      }), [Ht]);
      const ft = vH(et),
        wt = KH(Qt),
        yt = hH(wt),
        Nt = () => {
          qt && !yt && (jt.send("" === wt || wt === ft ? Tt : `${Tt} ${wt}`), mt())
        },
        Mt = () => {
          var tt;
          Xt(!1), null === (tt = Et.current) || void 0 === tt || tt.focus()
        };
      return (0, hD.jsxs)("li", {
        ref: Et,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Ht ? xH(Mt) : {},
        children: [(0, hD.jsx)("strong", {
          className: "Baf2IslandName",
          children: dt(`${GQ}islandsNewTitle`)
        }), !Ht && (0, hD.jsx)("p", {
          className: "Baf2IslandStats",
          children: dt(`${GQ}islandsNewNote`)
        }), Ht && (0, hD.jsxs)(hD.Fragment, {
          children: [(0, hD.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: GH(dt, `${GQ}islandsNewConfirm`, {
              name: Vt
            })
          }), (0, hD.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [dt(`${GQ}islandsNewNameLabel`), (0, hD.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Qt,
              placeholder: ft,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: TH,
              onChange: tt => {
                lt(tt.target.value)
              },
              ...pH(Nt, Mt)
            })]
          }), yt && (0, hD.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: dt(`${GQ}islandsNameReserved`)
          })]
        }), (0, hD.jsxs)("div", {
          className: uq()("Baf2IslandButtons", {
            Stacked: Ht
          }),
          children: [(0, hD.jsx)(Cm.s, {
            disabled: !qt || Ht && yt,
            onClick: () => {
              if (!Ht) return lt(ft), void Xt(!0);
              Nt()
            },
            children: Dt > 0 ? dt(`${GQ}islandsNewIn`, {
              time: JD(dt, Dt)
            }) : dt(Ht ? `${GQ}islandsNewConfirmButton` : `${GQ}islandsNew`)
          }), Ht && (0, hD.jsx)(Cm.f, {
            onClick: Mt,
            children: dt(`${GQ}islandsCancel`)
          })]
        })]
      })
    }

    function oQ(tt) {
      var et, Vt;
      let {
        message: qt,
        arrivedAtMs: Dt,
        close: mt,
        leave: dt,
        openSocial: jt
      } = tt;
      const Ht = Um(),
        {
          t: Xt
        } = (0, Wq.H)(),
        Qt = eX(1e3),
        [lt, Et] = (0, Ot.useState)(null),
        [ft, wt] = (0, Ot.useState)(new Map),
        [yt, Nt] = (0, Ot.useState)(new Set),
        Mt = qt.baf2IslandCards,
        bt = function(tt, et, Vt, Ot) {
          return (null !== tt && void 0 !== tt ? tt : []).filter((tt => et + tt.baf2InviteLeftMs > Vt && !Ot.has(tt.baf2InviteId)))
        }(qt.baf2IslandsInvites, Dt, Qt, yt),
        Jt = bt.map((tt => tt.baf2InviteId)).join(" "),
        Ct = (0, Ot.useRef)(null),
        ut = sH(Ct);
      nH(), (0, Ot.useEffect)((() => {
        var tt, et;
        null !== (tt = Ct.current) && void 0 !== tt && tt.contains(document.activeElement) || (null === (et = Ct.current) || void 0 === et || et.focus())
      }), [qt, Jt]), (0, Ot.useEffect)((() => {
        wt((tt => function(tt, et, Vt, Ot) {
          const qt = new Map;
          for (const Dt of et) {
            const et = tt.get(Dt.baf2IslandId);
            et && (void 0 !== et.untilGone || Ot < et.answer) && ZH(et, Dt, Vt) && qt.set(Dt.baf2IslandId, et)
          }
          return qt.size === tt.size ? tt : qt
        }(tt, qt.baf2IslandCards, Date.now(), qt.baf2IslandsAnswered)))
      }), [qt]);
      const Kt = uH(Dt, qt.baf2IslandsWaitMs, Qt),
        ht = qt.baf2IslandsBlocked,
        vt = RH(ht, Kt),
        Wt = function(tt, et) {
          const Vt = RH(tt, 0);
          return {
            switch: Vt.switch ? et : 0,
            change: Vt.change ? et : 0
          }
        }(ht, Kt),
        St = Mt.length >= qt.baf2IslandsMax,
        ct = Mt.length > 0,
        Rt = function(tt, et, Vt) {
          return tt + Math.max(0, Vt - et)
        }(qt.baf2IslandsNowMs, Dt, Qt),
        It = null !== (et = null === (Vt = Mt.find((tt => tt.baf2IslandActive))) || void 0 === Vt ? void 0 : Vt.baf2IslandName) && void 0 !== et ? et : "",
        Pt = function(tt) {
          const et = tt.filter(rH).length;
          return et <= 1 && et < tt.length
        }(Mt),
        Zt = !0 === qt.baf2IslandsCoop,
        Lt = function(tt, et) {
          const Vt = tt.find((tt => tt.baf2IslandActive)),
            Ot = null === Vt || void 0 === Vt ? void 0 : Vt.baf2IslandCoop;
          return Vt && "member" === (null === Ot || void 0 === Ot ? void 0 : Ot.baf2CoopRole) ? {
            key: `${bH}islandsKeepOwnMember`,
            names: {
              owner: Ot.baf2CoopOwner,
              island: Vt.baf2IslandName
            }
          } : {
            key: et ? `${bH}islandsKeepOwn` : `${bH}islandsKeepOwnSolo`
          }
        }(Mt, Zt),
        [Ft, kt] = (0, Ot.useState)(null);
      (0, Ot.useEffect)((() => {
        void 0 !== qt.baf2IslandsFocusInvite && kt(qt.baf2IslandsFocusInvite)
      }), [qt]);
      const Gt = (0, Ot.useCallback)((() => {
          kt(null)
        }), []),
        zt = lt ? Mt.find((tt => tt.baf2IslandId === lt.id)) : void 0,
        ot = lt && zt && "hidden" !== UH(zt, vt, Pt, St, Zt, ht)[lt.mode] ? lt : null;
      return (0, hD.jsx)(Jm.c, {
        close: mt,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, hD.jsxs)("section", {
          ref: Ct,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: ut ? {
            marginTop: `${ut.marginTop}px`,
            maxHeight: `${ut.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, hD.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, hD.jsxs)("div", {
              children: [(0, hD.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: Xt(`${GQ}islandsTitle`)
              }), ct && (0, hD.jsx)("p", {
                children: Xt(`${GQ}islandsSubtitle`, {
                  count: String(Mt.length),
                  max: String(qt.baf2IslandsMax)
                })
              })]
            }), (0, hD.jsx)(Cm.j, {
              ariaLabel: Xt(`${GQ}islandsClose`),
              onClick: mt
            })]
          }), (0, hD.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== ht && (0, hD.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: GH(Xt, WH(ht, SH(Mt)), {
                island: It
              })
            }), ct && bt.length > 0 && (0, hD.jsx)(kQ, {
              invites: bt,
              actions: vt,
              full: St,
              maxIslands: qt.baf2IslandsMax,
              waitSeconds: Wt.switch,
              focus: Ft,
              focused: Gt,
              leave: dt,
              declined: tt => {
                Nt((et => new Set(et).add(tt)))
              },
              t: Xt
            }), ct && (0, hD.jsxs)(hD.Fragment, {
              children: [St && (0, hD.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: Xt(`${GQ}islandsFull`, {
                  max: String(qt.baf2IslandsMax)
                })
              }), (0, hD.jsx)("p", {
                className: "Baf2IslandsNote",
                children: GH(Xt, Lt.key, Lt.names)
              }), (0, hD.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [Mt.map((tt => {
                  const et = tt.baf2IslandId;
                  return (0, hD.jsx)(ZQ, {
                    card: tt,
                    keepOwn: Pt,
                    coopOn: Zt,
                    openSocial: jt,
                    blocked: ht,
                    maxIslands: qt.baf2IslandsMax,
                    serverNowMs: Rt,
                    nowMs: Qt,
                    actions: vt,
                    full: St,
                    waits: Wt,
                    answered: qt.baf2IslandsAnswered,
                    mode: (null === ot || void 0 === ot ? void 0 : ot.id) === et ? ot.mode : null,
                    setMode: tt => {
                      Et(null === tt ? null : {
                        id: et,
                        mode: tt
                      })
                    },
                    pending: ZH(ft.get(et), tt, Qt),
                    onSent: (Vt, Ot) => {
                      wt((qt => {
                        const Dt = {
                          atMs: Date.now(),
                          from: tt.baf2IslandName,
                          answer: Vt
                        };
                        return new Map(qt).set(et, Ot ? {
                          ...Dt,
                          untilGone: Ot
                        } : Dt)
                      }))
                    },
                    leave: dt,
                    switchTo: () => {
                      Ht.send(`baf2islandswitch ${et}`), dt()
                    },
                    t: Xt
                  }, et)
                })), !St && (0, hD.jsx)(zQ, {
                  cards: Mt,
                  activeName: It,
                  canStart: vt.change,
                  waitSeconds: Wt.change,
                  leave: dt,
                  t: Xt
                })]
              })]
            })]
          })]
        })
      })
    }
    var rQ = Vt(5186);
    const UQ = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        kO: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      AQ = Object.keys(UQ),
      iQ = new Set([...Object.keys(Te), ...[...Le.Press.recipes, ...Le["Wire Mill"].recipes].map((tt => tt.output))]),
      YQ = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      BQ = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      pQ = / Bar$|Alloy$/,
      xQ = /Porkchop|Beef|Mutton|Venison|Steak/,
      TQ = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const gQ = (0, Ot.memo)((function(tt) {
      let {
        item: et,
        name: Vt,
        amount: Ot,
        selected: qt,
        small: Dt,
        onPick: mt
      } = tt;
      return (0, hD.jsxs)("button", {
        type: "button",
        className: uq()("Baf2TermTile", {
          On: qt,
          Small: Dt
        }),
        "aria-label": `${Vt}: ${Ot}`,
        "aria-pressed": qt,
        onClick: () => {
          mt(et)
        },
        children: [(0, hD.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, hD.jsx)(cq.e, {
            itemName: et,
            amount: 0
          })
        }), (0, hD.jsx)("span", {
          className: "Baf2TermCount",
          children: MD(Ot, 1e4)
        }), !Dt && (0, hD.jsx)("span", {
          className: "Baf2TermName",
          children: Vt
        })]
      })
    }));

    function sQ(tt) {
      let {
        store: et,
        close: Vt,
        send: qt
      } = tt;
      const {
        t: Dt
      } = (0, Wq.H)(), {
        isTouchScreen: mt
      } = (0, bq.k)(["isTouchScreen"]);
      ! function(tt) {
        const [et, Vt] = (0, Ot.useState)(tt.version);
        (0, Ot.useEffect)((() => (Vt(tt.version), tt.subscribe((() => {
          Vt(tt.version)
        })))), [tt])
      }(et);
      const [dt, jt] = (0, Ot.useState)("all"), [Ht, Xt] = (0, Ot.useState)(!1), [Qt, lt] = (0, Ot.useState)(""), [Et, ft] = (0, Ot.useState)(""), [wt, yt] = (0, Ot.useState)(null), [Nt, Mt] = (0, Ot.useState)(!1), [bt, Jt, Ct] = function() {
        const tt = (0, Ot.useRef)(null),
          [et, Vt] = (0, Ot.useState)(!1),
          qt = () => {
            const et = tt.current;
            Vt(null !== et && et.scrollLeft + et.clientWidth < et.scrollWidth - 1)
          };
        return (0, Ot.useEffect)(qt), (0, Ot.useEffect)((() => {
          const et = tt.current;
          if (!et) return;
          const Vt = new ResizeObserver(qt);
          return Vt.observe(et), () => {
            Vt.disconnect()
          }
        }), []), [tt, et, qt]
      }(), ut = (0, Ot.useMemo)((() => new Map), [Dt]), Kt = tt => {
        let et = ut.get(tt);
        return void 0 === et && (et = function(tt, et) {
          const Vt = /^(.+) \((.+)\)$/.exec(tt);
          return Vt ? et(Vt[2], Vt[1]) : tt
        }(qD(Dt, tt), ((tt, et) => Dt("buildAFactory2Game:terminalTileKind", {
          kind: tt,
          base: et
        }))), ut.set(tt, et)), et
      }, ht = et.isReadOnly(), vt = Nt && !ht, Wt = et.recent(), St = et.items(), ct = Et.trim().toLowerCase(), Rt = vt ? et.heldItems(wt) : ("recent" === dt ? Wt : St).filter((tt => {
        const et = Kt(tt);
        return ("all" === dt || "recent" === dt || function(tt) {
          return lD(tt) ? "farm" : YQ.test(tt) ? "nuclear" : pQ.test(tt) ? "bars" : xQ.test(tt) ? "farm" : BQ.test(tt) ? "kO" : iQ.has(tt) ? "parts" : TQ.test(tt) ? "farm" : "other"
        }(tt) === dt) && ("" === ct || et.toLowerCase().includes(ct)) && ("" === Qt || et.toUpperCase().startsWith(Qt))
      })), It = new Set(St.map((tt => Kt(tt).charAt(0).toUpperCase()))), Pt = tt => vt ? et.heldAmount(tt) : et.amount(tt), Zt = !vt && "recent" !== dt && Wt.length > 0, Lt = function(tt, et) {
        return null !== tt && et.includes(tt) ? tt : null
      }(wt, Zt ? [...Rt, ...Wt] : Rt), Ft = null === Lt ? 0 : et.amount(Lt), kt = null === Lt ? 0 : Pt(Lt), Gt = (0, Ot.useCallback)((tt => {
        yt((et => et === tt ? null : tt))
      }), []), zt = tt => kt > 0 || vt && null === Lt && "fill" === tt && Rt.length > 0, ot = vt ? [
        ["one", Dt("buildAFactory2Game:terminalStoreOne")],
        ["stack", Dt("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", Dt(null === Lt ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", Dt("buildAFactory2Game:terminalTakeOne")],
        ["stack", Dt("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", Dt("buildAFactory2Game:terminalFill")]
      ], rt = vt ? Dt("buildAFactory2Game:terminalStoreEmpty") : "" !== Qt ? Dt("buildAFactory2Game:terminalEmptyLetter", {
        letter: Qt
      }) : "" !== ct ? Dt("buildAFactory2Game:terminalEmptySearch", {
        query: Et
      }) : Dt("buildAFactory2Game:terminalEmpty");
      return (0, hD.jsx)(Jm.c, {
        close: Vt,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, hD.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, hD.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, hD.jsxs)("div", {
              children: [(0, hD.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: Dt(et.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, hD.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, hD.jsx)("span", {
                  className: uq()({
                    Off: vt
                  }),
                  children: Dt("buildAFactory2Game:terminalSubtitle", {
                    count: String(et.siloCount())
                  })
                }), !ht && (0, hD.jsx)("span", {
                  className: uq()({
                    Off: !vt
                  }),
                  children: Dt("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !ht && (0, hD.jsx)(rQ.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: Dt("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: Dt("buildAFactory2Game:terminalModeStore")
              }],
              value: vt ? "store" : "take",
              onChange: tt => {
                Mt("store" === tt), yt(null)
              },
              ariaLabel: Dt("buildAFactory2Game:terminalModes")
            }), (0, hD.jsx)(Cm.j, {
              onClick: Vt
            })]
          }), (0, hD.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, hD.jsxs)("div", {
              className: uq()("Baf2TermTools", {
                Hidden: vt
              }),
              children: [(0, hD.jsx)("div", {
                ref: bt,
                className: uq()("Baf2TermChips", {
                  MoreRight: Jt
                }),
                onScroll: Ct,
                children: Ht ? (0, hD.jsxs)(hD.Fragment, {
                  children: [(0, hD.jsx)("button", {
                    type: "button",
                    "aria-label": Dt("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      Xt(!1), lt("")
                    },
                    children: "\u2190"
                  }), [...It].sort().map((tt => (0, hD.jsx)("button", {
                    type: "button",
                    className: uq()({
                      On: Qt === tt
                    }),
                    onClick: () => {
                      lt(Qt === tt ? "" : tt)
                    },
                    children: tt
                  }, tt)))]
                }) : (0, hD.jsxs)(hD.Fragment, {
                  children: [(0, hD.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      Xt(!0)
                    },
                    children: Dt("buildAFactory2Game:terminalLetters")
                  }), AQ.map((tt => (0, hD.jsx)("button", {
                    type: "button",
                    className: uq()({
                      On: dt === tt
                    }),
                    onClick: () => {
                      jt(tt)
                    },
                    children: Dt(UQ[tt])
                  }, tt)))]
                })
              }), !mt && (0, hD.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: Et,
                placeholder: Dt("buildAFactory2Game:terminalSearch"),
                "aria-label": Dt("buildAFactory2Game:terminalSearch"),
                onChange: tt => {
                  ft(tt.target.value)
                },
                onKeyDown: tt => {
                  tt.stopPropagation()
                }
              }), (0, hD.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": Dt("buildAFactory2Game:terminalResort"),
                title: Dt("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  et.resort()
                },
                children: "\u21c5"
              })]
            }), Zt && (0, hD.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, hD.jsx)("span", {
                children: Dt(UQ.recent)
              }), Wt.map((tt => (0, hD.jsx)(gQ, {
                item: tt,
                name: Kt(tt),
                amount: et.amount(tt),
                selected: Lt === tt,
                small: !0,
                onPick: Gt
              }, tt)))]
            }), (0, hD.jsx)("div", {
              className: "Baf2TermTiles",
              children: Rt.length > 0 ? Rt.map((tt => (0, hD.jsx)(gQ, {
                item: tt,
                name: Kt(tt),
                amount: Pt(tt),
                selected: Lt === tt,
                onPick: Gt
              }, tt))) : (0, hD.jsx)("p", {
                className: "Baf2TermEmpty",
                children: rt
              })
            }), (0, hD.jsxs)("div", {
              className: uq()("Baf2TermActions", {
                Hidden: vt && 0 === Rt.length
              }),
              children: [(0, hD.jsx)("span", {
                className: "Baf2TermPicked",
                children: ht ? (0, hD.jsxs)(hD.Fragment, {
                  children: [null !== Lt && Ft > 0 ? Kt(Lt) : Dt("buildAFactory2Game:terminalVisiting"), (0, hD.jsx)("small", {
                    children: Dt("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Lt ? (0, hD.jsxs)(hD.Fragment, {
                  children: [Kt(Lt), (0, hD.jsx)("small", {
                    children: Dt("buildAFactory2Game:terminalStored", {
                      amount: Ft.toLocaleString()
                    })
                  })]
                }) : Dt(vt ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !ht && ot.map((tt => {
                let [Vt, Ot] = tt;
                const Dt = "fill" === Vt ? Cm.m : Cm.f;
                return (0, hD.jsx)(Dt, {
                  className: "Baf2TermTake",
                  disabled: !zt(Vt),
                  onClick: () => {
                    (tt => {
                      zt(tt) && qt(null === Lt ? et.putAll() : vt ? et.put(tt, Lt) : et.take(tt, Lt))
                    })(Vt)
                  },
                  children: Ot
                }, Vt)
              }))]
            })]
          })]
        })
      })
    }

    function nQ(tt) {
      let {
        kind: et,
        icon: Vt,
        label: Ot,
        number: qt,
        preview: Dt,
        note: mt,
        tone: dt = null,
        share: jt,
        onExplain: Ht
      } = tt;
      return (0, hD.jsxs)("button", {
        type: "button",
        className: uq()("NxLane", et, {
          Warn: "warn" === dt,
          Danger: "danger" === dt
        }),
        onClick: Ht,
        children: [(0, hD.jsxs)("span", {
          className: "NxLaneHead",
          children: [Vt, (0, hD.jsx)("span", {
            className: "NxLaneLabel",
            children: Ot
          })]
        }), (0, hD.jsxs)("span", {
          className: "NxLaneNum",
          children: [qt, Dt && (0, hD.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", Dt]
          })]
        }), (0, hD.jsx)("span", {
          className: "NxLaneNote",
          children: mt
        }), void 0 !== jt && (0, hD.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, jt)) + "%"
          }
        })]
      })
    }

    function tl(tt) {
      let {
        kind: et,
        step: Vt,
        short: Ot,
        planned: qt
      } = tt;
      return (0, hD.jsx)("i", {
        className: uq()("NxPipe", et, `Step${Vt}`, {
          Short: Ot,
          Planned: qt
        }),
        "aria-hidden": "true"
      })
    }

    function el(tt) {
      let {
        max: et,
        bands: Vt,
        ticks: Ot,
        now: qt,
        settle: Dt,
        settleTone: mt,
        onExplain: dt
      } = tt;
      const jt = tt => Math.max(0, Math.min(et, tt)) / et * 100 + "%";
      let Ht = 0;
      return (0, hD.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: dt,
        children: [(0, hD.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [Vt.map((tt => {
            const et = {
              bottom: jt(Ht),
              height: `calc(${jt(tt.upTo)} - ${jt(Ht)})`
            };
            return Ht = tt.upTo, (0, hD.jsx)("i", {
              className: uq()("NxGaugeBand", tt.kind),
              style: et
            }, tt.kind)
          })), null !== qt && (0, hD.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: jt(qt)
            }
          }), void 0 !== Dt && null !== Dt && (0, hD.jsx)("i", {
            className: uq()("NxGaugeSettle", {
              Bad: "bad" === mt
            }),
            style: {
              bottom: jt(Dt)
            }
          })]
        }), (0, hD.jsx)("span", {
          className: "NxGaugeTicks",
          children: Ot.map((tt => (0, hD.jsx)("small", {
            style: {
              bottom: jt(tt)
            },
            children: tt
          }, tt)))
        })]
      })
    }

    function Vl(tt) {
      const [et, Vt] = (0, Ot.useState)(null), [qt, Dt] = (0, Ot.useState)((() => {
        try {
          return null === window.localStorage.getItem(tt)
        } catch {
          return !1
        }
      })), mt = (0, Ot.useRef)(null);
      (0, Ot.useEffect)((() => () => {
        null !== mt.current && clearTimeout(mt.current)
      }), []);
      const dt = (0, Ot.useCallback)((et => {
          Vt(et), Dt(!1);
          try {
            window.localStorage.setItem(tt, "1")
          } catch {}
          null !== mt.current && clearTimeout(mt.current), mt.current = setTimeout((() => {
            mt.current = null, Vt(null)
          }), 5e3)
        }), [tt]),
        jt = (0, Ot.useCallback)(((et, Vt) => {
          const Ot = `${tt}:${et}`;
          try {
            if (null !== window.localStorage.getItem(Ot)) return;
            window.localStorage.setItem(Ot, "1")
          } catch {
            return
          }
          dt(Vt)
        }), [dt, tt]);
      return {
        explained: et,
        hinting: qt,
        explain: dt,
        explainOnce: jt
      }
    }

    function Ol(tt) {
      let {
        text: et,
        tone: Vt,
        explained: Ot
      } = tt;
      return (0, hD.jsxs)("p", {
        className: uq()("NxStatus", null === Ot ? Vt : "Explain"),
        "aria-live": "polite",
        children: [null !== Ot && (0, hD.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Ot && void 0 !== Ot ? Ot : et]
      })
    }
    const ql = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function Dl(tt, et) {
      const Vt = Number(tt[et]);
      return 1 === Vt || 2 === Vt || 3 === Vt ? Vt : 0
    }

    function ml(tt) {
      return !!hj("reactor", tt.baf2RxNeed) || void 0 !== tt.baf2RxLayout && tt.baf2RxNeed.some((tt => {
        let [et, Vt] = tt;
        return Vt > 0 && ql.includes(et)
      }))
    }
    const dl = "buildAFactory2Game:";

    function jl(tt) {
      let {
        status: et,
        store: Vt,
        busy: Ot
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)();
      return function(tt) {
        return 0 !== (tt.baf2RxFlags & ye) && (!tt.baf2RxFormed || void 0 !== tt.baf2RxLayout)
      }(et) ? (0, hD.jsx)(Cm.m, {
        disabled: !ml(et) || Ot,
        onClick: () => {
          Vt.tap("fill", (() => {
            Vt.send("fill")
          }))
        },
        children: qt(void 0 !== et.baf2RxLayout ? `${dl}rxFillLayout` : `${dl}rxFill`)
      }) : null
    }

    function Hl(tt) {
      let {
        status: et,
        store: Vt,
        readOnly: qt,
        bare: Dt = !1
      } = tt;
      const {
        t: mt
      } = (0, Wq.H)(), dt = et.baf2RxLayout, [jt, Ht, Xt] = et.baf2RxDims, Qt = (0, Ot.useMemo)((() => {
        if (void 0 === dt) return 0;
        const tt = Uint8Array.from(dt, ((tt, et) => Dl(dt, et)));
        return Oj([jt - 2, Ht - 2, Xt - 2], tt).max
      }), [dt, jt, Ht, Xt]);
      return void 0 === dt ? null : (0, hD.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!Dt && (0, hD.jsx)("span", {
          className: "Baf2RxHint",
          children: mt(`${dl}rxLayoutLine`, {
            amount: Pj(Qt)
          })
        }), !qt && (0, hD.jsx)(Cm.f, {
          onClick: () => {
            Vt.send("layout", 0)
          },
          children: mt(`${dl}rxLayoutHide`)
        })]
      })
    }
    const Xl = "buildAFactory2Game:",
      Ql = {
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

    function ll(tt) {
      let {
        id: et,
        title: Vt,
        body: Ot,
        bodyParams: qt,
        yes: Dt,
        cancel: mt,
        confirm: dt
      } = tt;
      const {
        t: jt
      } = (0, Wq.H)();
      return (0, hD.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": et,
        children: [(0, hD.jsx)("h3", {
          id: et,
          children: jt(Vt)
        }), (0, hD.jsx)("p", {
          children: jt(Ot, qt)
        }), (0, hD.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, hD.jsx)(Cm.g, {
            onClick: mt,
            children: jt(`${Xl}rxCancel`)
          }), (0, hD.jsx)(Cm.G, {
            onClick: dt,
            children: jt(Dt)
          })]
        })]
      })
    }

    function El(tt) {
      const [et, Vt] = (0, Ot.useState)((() => tt.get()));
      return (0, Ot.useEffect)((() => (Vt(tt.get()), tt.subscribe((() => {
        Vt(tt.get())
      })))), [tt]), et
    }

    function fl(tt) {
      let {
        kind: et,
        cap: Vt,
        busy: qt = !1,
        whyNot: Dt = null,
        apart: mt
      } = tt;
      const {
        t: dt
      } = (0, Wq.H)(), [jt, Ht] = (0, Ot.useState)(!1), Xt = null !== Dt, Qt = (0, Ot.useRef)(null);
      if ((0, Ot.useEffect)((() => {
          Xt && Ht(!1)
        }), [Xt]), (0, Ot.useLayoutEffect)((() => {
          var tt;
          const et = null === (tt = Qt.current) || void 0 === tt ? void 0 : tt.firstElementChild;
          Xt ? null === et || void 0 === et || et.setAttribute("aria-disabled", "true") : qt || null === et || void 0 === et || et.removeAttribute("aria-disabled")
        })), !jt || Xt) return (0, hD.jsx)("span", {
        ref: Qt,
        className: "Baf2RxApartWrap",
        children: (0, hD.jsx)(Cm.g, {
          disabled: qt,
          className: uq()({
            Baf2RxNotYet: Xt
          }),
          onClick: () => {
            Dt ? Dt() : Ht(!0)
          },
          children: dt(`${Xl}rxApart`)
        })
      });
      const lt = "battery" === et,
        Et = void 0 === Vt ? `${Xl}batApartConfirmBodyPlan` : `${Xl}batApartConfirmBody`;
      return (0, hD.jsx)(ll, {
        id: `baf2ApartTitle_${et}`,
        title: lt ? `${Xl}batApartConfirmTitle` : `${Xl}rxApartConfirmTitle`,
        body: lt ? Et : `${Xl}rxApartConfirmBody`,
        bodyParams: void 0 === Vt ? void 0 : {
          cap: Vt
        },
        yes: `${Xl}rxApart`,
        cancel: () => {
          Ht(!1)
        },
        confirm: () => {
          Ht(!1), mt()
        }
      })
    }

    function wl(tt) {
      let {
        mood: et,
        big: Vt
      } = tt;
      const Ot = Ql[et],
        qt = [];
      return Ot.rows.forEach(((tt, et) => {
        for (let Vt = 0; Vt < tt.length; Vt++) "." !== tt[Vt] && qt.push((0, hD.jsx)("rect", {
          x: Vt + 1,
          y: et + 1,
          width: 1,
          height: 1,
          fill: "w" === tt[Vt] ? "#8fd3ff" : Ot.colour
        }, `${Vt},${et}`))
      })), (0, hD.jsxs)("svg", {
        className: uq()("Baf2RxFace", {
          Big: Vt,
          Alarm: "alarm" === et
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, hD.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, hD.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), qt]
      })
    }

    function yl(tt) {
      return aD(tt, "+").replace("+", "")
    }

    function Nl(tt) {
      let {
        kind: et,
        dims: Vt,
        cap: Ot,
        disabled: qt,
        compact: Dt,
        resize: mt
      } = tt;
      const {
        t: dt
      } = (0, Wq.H)(), {
        min: jt,
        max: Ht
      } = oV(et), Xt = Math.min(Ot, Ht), Qt = [`${Xl}rxWide`, `${Xl}rxTall`, `${Xl}rxDeep`], lt = {
        w: String(Vt[0]),
        h: String(Vt[1]),
        d: String(Vt[2]),
        blocks: String(Ij(et, Vt))
      };
      return (0, hD.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, hD.jsx)("div", {
          className: "Baf2RxSteppers",
          children: Vt.map(((tt, et) => {
            const Dt = Ot => {
                const qt = [Vt[0], Vt[1], Vt[2]];
                qt[et] = tt + Ot, mt(qt)
              },
              lt = tt >= Xt;
            return (0, hD.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, hD.jsx)("button", {
                type: "button",
                "aria-label": dt(`${Xl}rxSmaller`),
                disabled: qt || tt <= jt,
                onClick: () => {
                  Dt(-1)
                },
                children: "\u2212"
              }), (0, hD.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [tt, (0, hD.jsx)("small", {
                  children: dt(Qt[et])
                })]
              }), (0, hD.jsx)("button", {
                type: "button",
                "aria-label": dt(`${Xl}rxBigger`),
                disabled: qt || lt,
                onClick: () => {
                  Dt(1)
                },
                children: lt && Ot < Ht ? "\ud83d\udd12" : "+"
              })]
            }, Qt[et])
          }))
        }), !Dt && (0, hD.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === et ? dt(`${Xl}rxSizeLine`, {
            ...lt,
            water: String(Rj(Vt))
          }) : dt(`${Xl}batSizeLine`, lt)
        })]
      })
    }

    function al(tt) {
      let {
        on: et,
        label: Vt,
        disabled: Ot,
        locked: qt,
        pending: Dt,
        toggle: mt
      } = tt;
      return (0, hD.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": et,
        disabled: Ot,
        "aria-disabled": qt || void 0,
        className: uq()("Baf2RxSwitch", {
          On: et,
          Locked: qt,
          Pending: Dt
        }),
        onClick: mt,
        children: [(0, hD.jsx)("span", {
          className: "Baf2RxKnob"
        }), Vt]
      })
    }
    const Ml = "buildAFactory2Game:",
      bl = .95;

    function Jl(tt, et) {
      return 0 !== (tt.baf2RxFlags & et)
    }

    function Cl(tt) {
      return "cryo" === tt ? nt.m : nt.o
    }

    function ul(tt) {
      var et, Vt, Ot, qt, Dt, mt, dt, jt, Ht;
      return tt.baf2RxCryo ? {
        OE: "cryo",
        usePerS: null !== (qt = tt.baf2RxCryoUse) && void 0 !== qt ? qt : 0,
        needPerS: null !== (Dt = tt.baf2RxCryoNeed) && void 0 !== Dt ? Dt : 0,
        inPerS: null !== (mt = tt.baf2RxCryoIn) && void 0 !== mt ? mt : 0,
        stored: null !== (dt = tt.baf2RxCryoStored) && void 0 !== dt ? dt : 0,
        makersShort: null !== (jt = tt.baf2RxMixersShort) && void 0 !== jt ? jt : 0,
        waterBeside: null !== (Ht = tt.baf2RxWaterUse) && void 0 !== Ht ? Ht : 0,
        pct: tt.baf2RxWater
      } : {
        OE: "water",
        usePerS: null !== (et = tt.baf2RxWaterUse) && void 0 !== et ? et : 0,
        needPerS: null !== (Vt = tt.baf2RxWaterNeed) && void 0 !== Vt ? Vt : 0,
        inPerS: tt.baf2RxWaterIn,
        stored: tt.baf2RxWaterStored,
        makersShort: null !== (Ot = tt.baf2RxCondensersShort) && void 0 !== Ot ? Ot : 0,
        waterBeside: 0,
        pct: tt.baf2RxWater
      }
    }

    function Kl(tt) {
      const et = "running" === tt.baf2RxState || "idle" === tt.baf2RxState;
      return tt.baf2RxFormed && tt.baf2RxTarget !== tt.baf2RxThrottle && et ? hl(tt, tt.baf2RxTarget) : null
    }

    function hl(tt, et) {
      const [Vt, Ot, qt, , , , Dt, , mt] = tt.baf2RxStats, dt = Jl(tt, fe), jt = ul(tt), Ht = jt.pct / 100, {
        gen: Xt,
        out: Qt,
        load: lt
      } = function(tt, et, Vt, Ot) {
        const qt = Vt ? Td : 1,
          Dt = Math.min(tt.fuelHeat * qt * Math.max(0, Math.min(1, et)), tt.size * qt);
        return {
          gen: Dt,
          out: Dt,
          load: fj(Dt, tt.cooling, Ot)
        }
      }({
        fuelHeat: Vt,
        cooling: Ot,
        size: qt
      }, et / 100, dt, Ht), Et = yj(Dt || Vj(...tt.baf2RxDims)), ft = tt.baf2RxHeat, wt = Math.abs(lt - ft), yt = function(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nt.o;
        const Dt = Vt ? Td : 1,
          mt = Math.min(tt.fuelHeat * Dt * et / 100, tt.size * Dt),
          dt = mt,
          jt = tt.fuelHeat * Dt,
          Ht = tt.cooling * Ej(Ot.pct / 100),
          Xt = jt > 0 && Ht < tt.size * Dt ? Math.floor(100 * Ht / jt) : 100,
          Qt = mt * qt - Ot.inPerS;
        return {
          out: dt,
          hotAbove: Xt >= 100 ? null : Math.max(0, Xt),
          waterSecs: Ot.pct >= 100 && Qt > 1e-6 ? Math.max(0, Ot.stored) / Qt : null
        }
      }({
        fuelHeat: Vt,
        cooling: Ot,
        size: qt
      }, et, dt, {
        pct: jt.pct,
        inPerS: jt.inPerS,
        stored: jt.stored
      }, Cl(jt.OE));
      return {
        pct: et,
        out: Qt,
        coolPerS: Xt * Cl(jt.OE),
        pelletsPerMin: mt > 0 ? Qt / mt * 60 : 0,
        settle: lt,
        settleS: wt > 2 ? Et * Math.log(wt / 2) : 0,
        overheatS: lt > 100 && ft < 100 ? Et * Math.log((lt - ft) / (lt - 100)) : null,
        hotAbove: yt.hotAbove,
        coolantSecs: yt.waterSecs
      }
    }

    function vl(tt) {
      return tt.baf2RxThrottle <= 0 && "running" !== tt.baf2RxState ? 0 : hl(tt, tt.baf2RxTarget).pelletsPerMin / 60
    }

    function Wl(tt, et) {
      if (tt <= 0 || et <= 0) return 0;
      const Vt = tt / et;
      return Vt < .25 ? 1 : Vt < .5 ? 2 : Vt < .8 ? 3 : 4
    }

    function Sl(tt, et) {
      const Vt = {};
      for (const [Ot, qt] of Object.entries(et.params)) Vt[Ot] = "time" === Ot ? JD(tt, qt) : "amount" === Ot ? Pj(qt) : String(Math.round(qt));
      return tt(et.key, Vt)
    }

    function cl(tt, et) {
      return {
        key: `${Ml}${tt}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: et
      }
    }

    function Rl(tt) {
      var et;
      const Vt = Jl(tt, fe),
        Ot = "running" === tt.baf2RxState,
        qt = bj(tt),
        Dt = tt.baf2RxHeat;
      var mt;
      if (Ot && Dt > pd) return {
        key: null !== (mt = qt.fix) && void 0 !== mt ? mt : `${Ml}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const dt = Ot ? hl(tt, tt.baf2RxTarget).coolantSecs : null,
        jt = "cryo" === ul(tt).OE;
      if (null !== dt && dt >= 1 && dt <= 30) return cl(jt ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Ht = tj(Vj(...tt.baf2RxDims)).waste,
        Xt = Ot ? vj(tt, Ht, vl(tt)).fullInS : null;
      if (null !== Xt && Xt <= 120 && tt.baf2RxWaste >= .5 * Ht) return cl("rxWarnWaste", "warn");
      if (null !== dt && dt >= 1) return cl(jt ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: dt
      });
      const Qt = "noWater" === tt.baf2RxState && Dt > pd;
      if (tt.baf2RxDamage >= 1 && !Qt) return cl("rxDamagedHeals", "warn", {
        pct: tt.baf2RxDamage
      });
      if (tt.baf2RxCryoCut) return cl("rxFix_cryoCut", "warn");
      const lt = ul(tt);
      if ("noWater" === tt.baf2RxState && "cryo" === lt.OE) return cl("noWater" === tt.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const Et = qt.fix === `${Ml}rxFix_scramCool` || "idle" === tt.baf2RxState && tt.baf2RxTarget <= 0;
      if (Et && tt.baf2RxFuel <= 0) return cl("rxFix_noFuel", "warn");
      if (Et && tt.baf2RxWaterIn <= 0 && (null !== (et = tt.baf2RxCryoIn) && void 0 !== et ? et : 0) <= 0) return cl("rxFix_noWater", "warn");
      const ft = qt.fix === `${Ml}rxFix_scramCool` ? Cj(tt) : null;
      if (null !== ft) return {
        key: ft.key,
        params: {
          amount: ft.amount
        },
        tone: "info"
      };
      if ("running" !== tt.baf2RxState && "idle" !== tt.baf2RxState && null !== qt.fix) return {
        key: qt.fix,
        params: {},
        tone: "scram" === tt.baf2RxState ? "info" : Qt ? "bad" : "warn"
      };
      var wt;
      if ("idle" === tt.baf2RxState && tt.baf2RxTarget <= 0) return {
        key: null !== (wt = qt.fix) && void 0 !== wt ? wt : `${Ml}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const yt = tt.baf2RxCryoStarved;
      if ("cryo" === lt.OE && yt && lt.needPerS > 0 && lt.usePerS < bl * lt.needPerS) return cl("noWater" === yt ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const Nt = "cryo" === lt.OE,
        Mt = lt.needPerS > 0 && lt.usePerS < bl * lt.needPerS;
      if (Nt ? Mt || lt.makersShort > 0 && lt.pct < 100 : lt.pct < 100) {
        const et = Nt && Mt ? Math.floor(100 * lt.usePerS / lt.needPerS) : Math.min(100, lt.pct);
        if (lt.makersShort > 0) {
          return cl(`${Nt?"rxCryoShortLine":"rxWaterShortLine"}${1===lt.makersShort?"One":""}${!Nt&&tt.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: et,
            count: lt.makersShort
          })
        }
        return cl(Nt ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: et
        })
      }
      const bt = function(tt) {
        const [et, Vt, Ot] = tt.baf2RxStats, qt = ul(tt), Dt = wj({
          fuelHeat: et,
          cooling: Vt,
          size: Ot
        }, "cryo" === qt.OE ? nt.f : 1, !0);
        return Math.max(0, Dt * Cl(qt.OE) - qt.inPerS)
      }(tt);
      if (Vt && bt > 0) return cl("cryo" === lt.OE ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(bt)
      });
      if (Dt >= Qj) return cl("rxHotLine", "warn");
      const Jt = hl(tt, tt.baf2RxTarget);
      var Ct;
      if (null !== Jt.overheatS) return cl("rxWillOverheat", "bad", {
        pct: tt.baf2RxTarget,
        time: Jt.overheatS,
        safe: null !== (Ct = Jt.hotAbove) && void 0 !== Ct ? Ct : 100
      });
      if (Math.abs(Jt.settle - Dt) >= 3) return cl("rxSettling", "info", {
        pct: tt.baf2RxTarget,
        heat: Math.round(Jt.settle),
        time: Jt.settleS
      });
      const ut = Cj(tt);
      if (null !== ut) return {
        key: ut.key,
        params: {
          amount: ut.amount
        },
        tone: "info"
      };
      const Kt = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== et && ("running" !== et || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === tt.rods ? `${Nj}rxLimitNoRods` : `${Nj}rxLimit_${Xj(tt)}`
      }({
        rods: tt.baf2RxStats[3],
        ...Jj(tt)
      }, tt.baf2RxState, tt.baf2RxOut >= bl * tt.baf2RxMaxNow, !1);
      if (Kt === `${Ml}rxLimit_size`) {
        const [et, , Vt, Ot] = tt.baf2RxStats, qt = Ot > 0 && et > 0 ? Math.ceil(Vt / (et / Ot) - 1e-9) : Ot, Dt = tt.baf2RxDims.every((tt => tt >= oV("reactor").max));
        if (qt < Ot) return cl(Dt ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: qt,
          have: Ot
        });
        if (Dt) return cl("rxLimit_sizeMax", "info")
      }
      return null !== Kt ? {
        key: Kt,
        params: {},
        tone: "info"
      } : cl("rxSteady", "ok", {
        pct: tt.baf2RxTarget
      })
    }

    function Il(tt) {
      var et;
      if (tt.melted) return cl("rxMeltedBody", "bad");
      if (-1 === tt.bad) return cl("rxFix_noRoom", "warn");
      if (tt.bad > 0) return cl(1 === tt.bad ? "rxBadOne" : "rxBad", "warn", {
        count: tt.bad
      });
      if (tt.left > 0) {
        const et = 1 === tt.left ? "One" : "";
        return cl(tt.canFill ? `rxPlanLeft${et}` : `rxPlanLeftNoFill${et}`, "info", {
          count: tt.left
        })
      }
      if (0 === tt.rods) return cl("rxLimitNoRods", "warn");
      const Vt = null !== (et = tt.idle) && void 0 !== et ? et : 0;
      return Vt > 0 ? cl(1 === Vt ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: Vt
      }) : cl("rxPlanReady", "ok")
    }

    function Pl(tt) {
      return Math.floor(Math.max(0, tt[1] - 1) / 2)
    }

    function Zl(tt) {
      if (tt >= Dj && tt < mj) {
        const et = tt - Dj;
        return {
          key: 0 === et ? `${Ml}rxWhy_rodAlone` : 1 === et ? `${Ml}rxWhy_rodOne` : `${Ml}rxWhy_rod`,
          params: {
            count: String(et),
            heat: String(Gd * (1 + zd * et))
          }
        }
      }
      return tt === mj ? {
        key: `${Ml}rxWhy_channel`,
        params: {
          amount: String(rd)
        }
      } : tt === dj ? {
        key: `${Ml}rxWhy_deadChannel`,
        params: {}
      } : tt === jj ? {
        key: `${Ml}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Ml}rxWhy_core`,
        params: {}
      }
    }
    const Ll = "buildAFactory2Game:";

    function Fl(tt, et) {
      return 0 !== (tt.baf2RxFlags & et)
    }

    function kl(tt) {
      let {
        status: et,
        pending: Vt,
        store: Ot,
        explain: qt
      } = tt;
      const {
        t: Dt
      } = (0, Wq.H)(), mt = Fl(et, Ee), dt = et.baf2RxTarget, jt = et.baf2RxThrottle, Ht = function(tt) {
        return {
          press: () => {
            tt.throttlePress()
          },
          drag: et => {
            tt.throttleDrag(et)
          },
          release: () => {
            tt.throttleRelease()
          }
        }
      }(Ot), Xt = null === (Qt = hl(et, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Qt - 10),
        red: Qt
      };
      var Qt;
      return (0, hD.jsxs)("div", {
        className: uq()("Baf2RxThrottle", {
          Off: mt
        }),
        onClick: () => {
          mt && qt(`${Ll}rxWhy_startFirst`)
        },
        children: [(0, hD.jsx)("span", {
          className: "HideNarrow",
          children: Dt(`${Ll}rxThrottle`)
        }), (0, hD.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, hD.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: dt,
            disabled: mt,
            style: mt ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": Dt(`${Ll}rxThrottle`),
            onPointerDown: () => {
              Ht.press();
              const tt = () => {
                window.removeEventListener("pointerup", tt), window.removeEventListener("pointercancel", tt), Ht.release()
              };
              window.addEventListener("pointerup", tt), window.addEventListener("pointercancel", tt)
            },
            onKeyUp: Ht.release,
            onChange: tt => {
              Ht.drag(Number(tt.target.value))
            }
          }), (0, hD.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${Xt.amber}%, #ffb020 ${Xt.amber}% ${Xt.red}%, #ff3b30 ${Xt.red}%)`
            },
            "aria-hidden": "true"
          }), (0, hD.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${jt}% + ${8*(1-jt/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, hD.jsxs)("b", {
          children: [`${dt}%`, (0, hD.jsx)("i", {
            className: uq()("Baf2RxPendingDot", {
              On: Vt
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function Gl(tt) {
      let {
        status: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)(), Ot = hl(et, et.baf2RxTarget), qt = ul(et).OE, Dt = Vt("cryo" === qt ? `${Ll}rxRateCryo` : `${Ll}rxRateWater`, {
        rate: yl(Ot.coolPerS)
      }), mt = Vt(`${Ll}rxChain`, {
        pct: String(et.baf2RxTarget),
        out: Pj(Ot.out),
        heat: String(Math.round(Ot.settle)),
        coolant: Dt
      }), dt = null !== Ot.coolantSecs ? Ot.coolantSecs >= 1 ? Vt("cryo" === qt ? `${Ll}rxThrottleCryoOut` : `${Ll}rxThrottleWaterOut`, {
        time: JD(Vt, Ot.coolantSecs)
      }) : Vt("cryo" === qt ? `${Ll}rxThrottleCryoDry` : `${Ll}rxThrottleWaterDry`) : null;
      return (0, hD.jsxs)("p", {
        className: "Baf2RxChain",
        children: [mt, null !== dt ? (0, hD.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", dt]
        }) : (0, hD.jsxs)("span", {
          children: [" \xb7 ", Vt(`${Ll}rxChainPellets`, {
            amount: Zj(Ot.pelletsPerMin)
          })]
        })]
      })
    }

    function zl(tt) {
      let {
        view: et,
        store: Vt,
        explain: qt,
        explainOnce: Dt
      } = tt;
      const {
        t: mt
      } = (0, Wq.H)(), {
        status: dt
      } = et, [jt, Ht] = (0, Ot.useState)(!1), Xt = Fl(dt, Ee), lt = Fl(dt, fe), Et = !Fl(dt, Ne), ft = dt.baf2RxHeat > 100;
      return (0, hD.jsxs)(hD.Fragment, {
        children: [(0, hD.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, hD.jsx)(kl, {
            status: dt,
            pending: et.throttlePending,
            store: Vt,
            explain: qt
          }), (0, hD.jsx)(al, {
            on: lt,
            label: lt ? mt(`${Ll}rxOdLeft`, {
              time: JD(mt, dt.baf2RxOdLeft)
            }) : mt(`${Ll}rxOverdrive`),
            locked: Et,
            pending: 0 !== (et.pendingFlags & fe),
            toggle: () => {
              Et ? qt(`${Ll}rxOverdriveTier`, {
                amount: String(Qt(13))
              }) : lt ? Vt.setFlag(fe, !1) : et.odConfirmed ? Vt.setFlag(fe, !0) : Ht(!0)
            }
          }), Xt || et.startGuard ? (0, hD.jsx)(Cm.s, {
            disabled: et.busy.has("start") || et.startGuard,
            onClick: () => {
              Vt.tap("start", (() => {
                Vt.setFlag(Ee, !1)
              }))
            },
            children: mt(et.startGuard ? `${Ll}rxStarting` : `${Ll}rxStart`)
          }) : (0, hD.jsx)("span", {
            className: uq()("Baf2RxScram", {
              Pulse: ft
            }),
            children: (0, hD.jsx)(Cm.G, {
              onClick: () => {
                Vt.shutDown()
              },
              children: mt(`${Ll}rxScram`)
            })
          })]
        }), (0, hD.jsx)(Gl, {
          status: dt
        }), jt && (0, hD.jsx)(ll, {
          id: "baf2RxOdTitle",
          title: `${Ll}rxOdConfirmTitle`,
          body: `${Ll}rxOdConfirmBody`,
          yes: `${Ll}rxOdConfirm`,
          cancel: () => {
            Ht(!1)
          },
          confirm: () => {
            Ht(!1), Vt.tap("odConfirm", (() => {
              Vt.confirmOverdrive(), Vt.setFlag(fe, !0)
            })), Dt(`${Ll}rxWhy_overdrive`)
          }
        })]
      })
    }

    function ol(tt) {
      let {
        view: et,
        store: Vt,
        keepSize: Ot
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)(), {
        status: Dt
      } = et;
      return (0, hD.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, hD.jsx)(Nl, {
          kind: "reactor",
          dims: et.dims,
          cap: Dt.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: tt => {
            Vt.resize(tt)
          }
        }), Ot ? (0, hD.jsx)(Cm.g, {
          onClick: Ot,
          children: qt(`${Ll}rxKeepSize`)
        }) : (0, hD.jsxs)(hD.Fragment, {
          children: [(0, hD.jsx)(al, {
            on: et.guide,
            label: qt(`${Ll}rxGuide`),
            toggle: () => {
              Vt.toggleGuide()
            }
          }), Fl(Dt, Me) && (0, hD.jsx)(al, {
            on: et.starter,
            label: qt(`${Ll}rxStarter`),
            toggle: () => {
              Vt.toggleStarter()
            }
          }), (0, hD.jsx)(jl, {
            status: Dt,
            store: Vt,
            busy: et.busy.has("fill")
          })]
        })]
      })
    }

    function rl(tt) {
      let {
        need: et,
        kind: Vt = "reactor",
        explain: Ot
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)(), Dt = et.length <= 3, mt = et.reduce(((tt, et) => {
        let [, Vt] = et;
        return tt + Vt
      }), 0);
      return (0, hD.jsxs)("div", {
        className: uq()("Baf2RxParts", {
          Compact: !Dt
        }),
        onClick: () => {
          Ot("battery" === Vt ? `${Ll}batWhy_store` : `${Ll}rxShellHint`)
        },
        children: [mt > 0 && (0, hD.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === mt ? qt(`${Ll}rxBlocksOne`) : qt(`${Ll}rxBlocks`, {
            blocks: String(mt)
          })
        }), 0 === et.length ? (0, hD.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: qt("battery" === Vt ? `${Ll}batPartsDone` : `${Ll}rxShellDone`)
        }) : Kj(et).map((tt => {
          let [et, Vt, Ot] = tt;
          const mt = function(tt) {
            const et = cj[tt];
            if (void 0 === et) return null;
            const [Vt, Ot, qt] = Wj[et].colour.map((tt => Math.round(255 * tt)));
            return `rgb(${Vt}, ${Ot}, ${qt})`
          }(et);
          return (0, hD.jsxs)("span", {
            className: "Baf2RxChip",
            title: qD(qt, et),
            children: [(0, hD.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === mt ? {
                visibility: "hidden"
              } : {
                background: mt
              },
              title: qt(`${Ll}rxShopGhost`)
            }), (0, hD.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, hD.jsx)(cq.e, {
                itemName: et,
                amount: 0
              })
            }), (0, hD.jsx)("span", {
              className: "Baf2RxChipName",
              children: Dt ? `${Vt} ${dt=qD(qt,et),dt.replace(/^(Reactor|Battery) (?=\S)/,"")}` : Vt
            }), Ot >= Vt ? (0, hD.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, hD.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: Dt ? qt(`${Ll}rxShopShort`, {
                count: String(Vt - Ot)
              }) : "\u2212" + (Vt - Ot)
            })]
          }, et);
          var dt
        }))]
      })
    }
    const Ul = "buildAFactory2Game:";

    function Al(tt) {
      var et, Vt, qt, Dt, mt, dt, jt;
      let {
        store: Ht,
        close: Xt
      } = tt;
      const {
        t: Qt
      } = (0, Wq.H)(), lt = Um(), Et = El(Ht), {
        explained: ft,
        explain: wt
      } = Vl("baf2RxExplained"), yt = (0, Ot.useCallback)(((tt, et) => {
        wt(Qt(tt, et))
      }), [wt, Qt]), Nt = null === Et || void 0 === Et ? void 0 : Et.status, Mt = !0 === (null === Nt || void 0 === Nt ? void 0 : Nt.baf2BatReadOnly), bt = tt => {
        Nt && lt.send(le(Nt.baf2BatAt, tt))
      }, [Jt, Ct, ut] = null !== (et = null === Et || void 0 === Et ? void 0 : Et.dims) && void 0 !== et ? et : [0, 0, 0], Kt = Pj(null !== (Vt = null === Et || void 0 === Et ? void 0 : Et.uQ) && void 0 !== Vt ? Vt : 0), ht = !0 === (null === Nt || void 0 === Nt ? void 0 : Nt.baf2BatFormed), vt = null !== (qt = null === Nt || void 0 === Nt ? void 0 : Nt.baf2BatStored) && void 0 !== qt ? qt : 0, Wt = Math.max(1, null !== (Dt = null === Nt || void 0 === Nt ? void 0 : Nt.baf2BatIslandCap) && void 0 !== Dt ? Dt : 1), St = Math.min(100, 100 * vt / Wt), ct = null === Nt || void 0 === Nt ? void 0 : Nt.baf2BatNetPerS, Rt = function(tt, et, Vt) {
        return Vt > 0 && et >= Vt ? "full" : void 0 !== tt && tt >= .05 ? "charging" : void 0 !== tt && tt <= -.05 && et > 0 ? "draining" : "steady"
      }(ct, vt, null !== (mt = null === Nt || void 0 === Nt ? void 0 : Nt.baf2BatIslandCap) && void 0 !== mt ? mt : 0), It = null !== (dt = null === Nt || void 0 === Nt ? void 0 : Nt.baf2BatMadePerS) && void 0 !== dt ? dt : 0, Pt = null !== (jt = null === Nt || void 0 === Nt ? void 0 : Nt.baf2BatUsedPerS) && void 0 !== jt ? jt : 0;
      let Zt, Lt = {},
        Ft = "info";
      if (Nt)
        if (ht) "charging" === Rt ? (Zt = `${Ul}batLine_charging`, Lt = {
          time: JD(Qt, (Wt - vt) / Math.max(.05, null !== ct && void 0 !== ct ? ct : 0))
        }, Ft = "ok") : "draining" === Rt ? (Zt = `${Ul}batLine_draining`, Lt = {
          time: JD(Qt, vt / Math.max(.05, -(null !== ct && void 0 !== ct ? ct : 0)))
        }, Ft = "warn") : Zt = "full" === Rt ? `${Ul}batLine_full` : vt <= 0 && Pt > 0 ? `${Ul}batLine_empty` : `${Ul}batLine_steady`;
        else {
          var kt;
          const tt = Il({
            left: Nt.baf2BatNeed.reduce(((tt, et) => {
              let [, Vt] = et;
              return tt + Vt
            }), 0),
            bad: Nt.baf2BatBad,
            rods: 1,
            canFill: !0 === Nt.baf2BatCanFill,
            melted: !1
          });
          Zt = tt.key, Lt = {
            count: String(null !== (kt = tt.params.count) && void 0 !== kt ? kt : 0)
          }, Ft = tt.tone
        }
      else Zt = `${Ul}batLine_steady`;
      const Gt = Math.max(It, Pt, 1);
      return (0, hD.jsx)(Jm.c, {
        close: Xt,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, hD.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, hD.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, hD.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, hD.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, hD.jsx)(cq.e, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, hD.jsxs)("div", {
                children: [(0, hD.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Qt(`${Ul}batTitle`)
                }), Nt && (0, hD.jsxs)("p", {
                  className: uq()("Baf2RxSubtitle", {
                    good: ht && "charging" === Rt,
                    warn: ht && "draining" === Rt
                  }),
                  children: [Jt, "\xd7", Ct, "\xd7", ut, " \xb7 ", Qt(ht ? `${Ul}batState_${Rt}` : `${Ul}rxSubPlanShort`)]
                })]
              })]
            }), (0, hD.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Nt && !Mt && (0, hD.jsx)(fl, {
                kind: "battery",
                cap: ht ? Kt : void 0,
                busy: null === Et || void 0 === Et ? void 0 : Et.busy.has("apart"),
                apart: () => {
                  Ht.tap("apart", (() => {
                    bt("apart")
                  }))
                }
              }), (0, hD.jsx)(Cm.j, {
                onClick: Xt
              })]
            })]
          }), Et && Nt && (0, hD.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, hD.jsxs)("div", {
              className: uq()("Baf2RxFlow Baf2BatFlow", {
                Plan: !ht
              }),
              children: [(0, hD.jsx)(nQ, {
                kind: "Power",
                label: Qt(`${Ul}batMade`),
                number: ht ? `\u26a1 ${Pj(It)}/s` : "\u2014",
                note: Qt(`${Ul}batMadeNote`),
                share: ht ? It / Gt : void 0,
                onExplain: () => {
                  yt(`${Ul}batWhy_made`)
                }
              }), (0, hD.jsx)(tl, {
                kind: "Power",
                step: ht ? Wl(It, Gt) : 0,
                planned: !ht
              }), (0, hD.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  yt(`${Ul}batWhy_store`)
                },
                children: [(0, hD.jsx)(el, {
                  max: 100,
                  bands: [{
                    upTo: ht ? St : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, hD.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, hD.jsx)("b", {
                    className: "Baf2BatStored",
                    children: ht ? Qt(`${Ul}batStoredOf`, {
                      amount: Pj(vt),
                      cap: Pj(Nt.baf2BatIslandCap)
                    }) : Qt(`${Ul}batWillHold`, {
                      cap: Kt
                    })
                  }), (0, hD.jsx)("span", {
                    children: Qt(`${Ul}batAdds`, {
                      cap: Kt
                    })
                  }), ht && (0, hD.jsx)("small", {
                    children: Qt(`${Ul}batBreakNote`, {
                      cap: Kt
                    })
                  })]
                })]
              }), (0, hD.jsx)(tl, {
                kind: "Power",
                step: ht ? Wl(Pt, Gt) : 0,
                planned: !ht
              }), (0, hD.jsx)(nQ, {
                kind: "Power",
                label: Qt(`${Ul}batUsed`),
                number: ht ? `\u26a1 ${Pj(Pt)}/s` : "\u2014",
                note: Qt(`${Ul}batUsedNote`),
                share: ht ? Pt / Gt : void 0,
                onExplain: () => {
                  yt(`${Ul}batWhy_used`)
                }
              })]
            }), (0, hD.jsx)(Ol, {
              text: Qt(Zt, Lt),
              tone: Ft,
              explained: ft
            }), Mt ? (0, hD.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Qt(`${Ul}rxNotYours`)
            }) : !ht && (0, hD.jsxs)(hD.Fragment, {
              children: [(0, hD.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, hD.jsx)(Nl, {
                  kind: "battery",
                  dims: Et.dims,
                  cap: Nt.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: tt => {
                    Ht.resize(tt)
                  }
                }), (0, hD.jsx)(al, {
                  on: Et.guide,
                  label: Qt(`${Ul}rxGuide`),
                  toggle: () => {
                    Ht.toggleGuide()
                  }
                }), Nt.baf2BatCanFill && (0, hD.jsx)(Cm.m, {
                  disabled: !hj("battery", Nt.baf2BatNeed) || Et.busy.has("fill"),
                  onClick: () => {
                    Ht.tap("fill", (() => {
                      bt("fill")
                    }))
                  },
                  children: Qt(`${Ul}rxFill`)
                })]
              }), (0, hD.jsx)(rl, {
                need: Nt.baf2BatNeed,
                kind: "battery",
                explain: yt
              })]
            })]
          })]
        })
      })
    }
    const il = "buildAFactory2Game:",
      Yl = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function Bl(tt, et) {
      return tt === qj ? null : et ? "#4a4440" : tt < mj ? Yl[tt - Dj] : tt === mj ? "#3fd0f0" : tt === dj ? "#2c3e4c" : "#55585e"
    }

    function pl(tt) {
      let {
        inner: et,
        looks: Vt,
        layer: Ot,
        setLayer: qt,
        glow: Dt,
        melted: mt,
        explain: dt
      } = tt;
      const {
        t: jt
      } = (0, Wq.H)(), [Ht, Xt, Qt] = et, lt = Math.max(0, Math.min(Xt - 1, Ot)), Et = [];
      for (let wt = 0; wt < Qt; wt++)
        for (let tt = 0; tt < Ht; tt++) {
          var ft;
          const et = null !== (ft = Vt[(lt * Qt + wt) * Ht + tt]) && void 0 !== ft ? ft : qj,
            Ot = Bl(et, mt),
            qt = et >= Dj && et < mj;
          Et.push(null === Ot ? (0, hD.jsx)("circle", {
            cx: tt + .5,
            cy: wt + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${tt},${wt}`) : (0, hD.jsx)("rect", {
            x: tt + .06,
            y: wt + .06,
            width: .88,
            height: .88,
            fill: Ot,
            opacity: qt && !mt ? .5 + .5 * Dt : 1,
            onClick: tt => {
              tt.stopPropagation();
              const Vt = Zl(et);
              dt(Vt.key, Vt.params)
            }
          }, `${tt},${wt}`))
        }
      return (0, hD.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, hD.jsx)("svg", {
          className: uq()("Baf2RxMapGrid", {
            Melted: mt
          }),
          viewBox: `0 0 ${Math.max(1,Ht)} ${Math.max(1,Qt)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": jt(`${il}rxWhy_core`),
          onClick: () => {
            dt(`${il}rxWhy_core`, {})
          },
          children: Et
        }), Xt > 1 && (0, hD.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, hD.jsx)("button", {
            type: "button",
            "aria-label": jt(`${il}rxLayerDown`),
            disabled: lt <= 0,
            onClick: () => {
              qt(lt - 1)
            },
            children: "\u25bc"
          }), (0, hD.jsxs)("span", {
            children: [(0, hD.jsx)("span", {
              className: "HideNarrow",
              children: jt(`${il}rxLayer`, {
                n: String(lt + 1),
                of: String(Xt)
              })
            }), (0, hD.jsx)("span", {
              className: "ShowNarrow",
              children: jt(`${il}rxLayerShort`, {
                n: String(lt + 1),
                of: String(Xt)
              })
            })]
          }), (0, hD.jsx)("button", {
            type: "button",
            "aria-label": jt(`${il}rxLayerUp`),
            disabled: lt >= Xt - 1,
            onClick: () => {
              qt(lt + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const xl = "buildAFactory2Game:",
      Tl = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: xd,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Mj,
        kind: "red"
      }],
      gl = [50, xd, 100];

    function sl(tt) {
      let {
        stats: et,
        t: Vt,
        explain: Ot
      } = tt;
      const qt = Xj(et),
        Dt = Math.max(1, et.fuelHeat, et.cooling, et.size),
        mt = [
          ["fuel", `${xl}rxBarRods`, et.fuelHeat],
          ["cooling", `${xl}rxBarCooling`, et.cooling],
          ["size", `${xl}rxBarSize`, et.size]
        ];
      return (0, hD.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Ot(`${xl}rxWhy_bars`)
        },
        children: [(0, hD.jsx)("span", {
          className: "Baf2RxMostLine",
          children: Vt(`${xl}rxMost`, {
            amount: Pj(Math.min(et.fuelHeat, et.cooling, et.size))
          })
        }), (0, hD.jsx)("span", {
          className: "Baf2RxMostBars",
          children: mt.map((tt => {
            let [et, Ot, mt] = tt;
            return (0, hD.jsxs)("span", {
              className: uq()("Baf2RxMostBar", et, {
                Low: et === qt
              }),
              children: [(0, hD.jsx)("small", {
                children: Vt(Ot)
              }), (0, hD.jsx)("i", {
                children: (0, hD.jsx)("b", {
                  style: {
                    width: 100 * mt / Dt + "%"
                  }
                })
              })]
            }, et)
          }))
        })]
      })
    }

    function nl(tt) {
      var et;
      let {
        view: Vt,
        heat: qt,
        settle: Dt,
        settleLine: mt,
        settleBad: dt,
        explain: jt
      } = tt;
      const {
        t: Ht
      } = (0, Wq.H)(), {
        status: Xt
      } = Vt, Qt = Xt.baf2RxAt.join(","), [lt, Et] = (0, Ot.useState)((() => Pl(Vt.inner)));
      (0, Ot.useEffect)((() => {
        Et(Pl(Vt.inner))
      }), [Qt, Vt.inner[1]]);
      const ft = null !== (et = Vt.plan) && void 0 !== et ? et : Jj(Xt),
        wt = Vt.plan ? Vt.plan.powerPerUnit : Xt.baf2RxStats[8],
        yt = null === qt ? null : "alarm" === (Nt = aj(Xt)) ? "red" : "hot" === Nt ? "hot" : "warm" === Nt ? "warm" : "cold";
      var Nt;
      const Mt = !Xt.baf2RxFormed && function(tt, et) {
          return 0 !== (tt.baf2RxFlags & et)
        }(Xt, we),
        bt = Xt.baf2RxDamage,
        Jt = Xt.baf2RxDamageTrend;
      return (0, hD.jsxs)("div", {
        className: uq()("Baf2RxCore", null !== yt && void 0 !== yt ? yt : "plan"),
        children: [(0, hD.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, hD.jsx)(pl, {
            inner: Vt.inner,
            looks: Vt.looks,
            layer: lt,
            setLayer: Et,
            glow: Xt.baf2RxFormed ? Xt.baf2RxThrottle / 100 : 1,
            melted: Mt,
            explain: jt
          }), (0, hD.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              jt(`${xl}rxWhy_heat`)
            },
            children: [null !== qt ? (0, hD.jsxs)(hD.Fragment, {
              children: [(0, hD.jsx)("b", {
                children: Ht(`${xl}rxHeatPct`, {
                  pct: String(qt)
                })
              }), (0, hD.jsx)("span", {
                className: uq()("Baf2RxBand", yt),
                children: Ht(`${xl}rxBand_${yt}`)
              })]
            }) : (0, hD.jsx)("b", {
              children: Ht(`${xl}rxHeat`)
            }), null !== mt && (0, hD.jsx)("span", {
              className: uq()("Baf2RxSettle", {
                Bad: dt
              }),
              children: mt
            }), bt >= 1 && (0, hD.jsxs)("span", {
              className: uq()("Baf2RxDamage", Jt),
              children: [Ht(`${xl}rxDamageLine`, {
                pct: String(bt)
              }), " \xb7 ", Ht(`${xl}rxDamage_${Jt}`), (0, hD.jsx)("i", {
                children: (0, hD.jsx)("b", {
                  style: {
                    width: `${Math.min(100,bt)}%`
                  }
                })
              })]
            })]
          }), (0, hD.jsx)(el, {
            max: Mj,
            bands: Tl,
            ticks: gl,
            now: qt,
            settle: Dt,
            settleTone: dt ? "bad" : null,
            onExplain: () => {
              jt(`${xl}rxWhy_heat`)
            }
          })]
        }), (0, hD.jsx)(sl, {
          stats: ft,
          t: Ht,
          explain: jt
        }), wt > 0 && (0, hD.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            jt(`${xl}rxWhy_perPellet`)
          },
          children: Ht(`${xl}rxPerPellet`, {
            amount: Pj(wt)
          })
        })]
      })
    }

    function tE(tt, et) {
      var Vt;
      if (!tt.baf2RxStore) return {
        note: et(`${xl}rxUpTo`, {
          amount: Pj(tt.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Ot, qt] = tt.baf2RxStore, Dt = qt > 0 ? Ot / qt : 0, mt = String(Math.floor(100 * Dt)), dt = null !== (Vt = tt.baf2RxStoreNetPerS) && void 0 !== Vt ? Vt : 0, jt = function(tt) {
        var et, Vt;
        const [Ot, qt] = null !== (et = tt.baf2RxStore) && void 0 !== et ? et : [0, 0], Dt = null !== (Vt = tt.baf2RxStoreNetPerS) && void 0 !== Vt ? Vt : 0;
        return qt > 0 && Ot >= qt - 1 ? "running" === tt.baf2RxState ? `${Ml}rxStoreFull` : `${Ml}rxStoreFullOnly` : Dt > .05 ? `${Ml}rxStoreLine` : Dt < -.05 ? "running" === tt.baf2RxState ? `${Ml}rxStoreUsesMore` : `${Ml}rxStoreDraining` : `${Ml}rxStorePct`
      }(tt);
      return {
        note: et(jt, jt === `${xl}rxStoreLine` ? {
          pct: mt,
          time: JD(et, (qt - Ot) / dt)
        } : {
          pct: mt
        }),
        share: Dt
      }
    }

    function eE(tt) {
      let {
        view: et,
        explain: Vt,
        preview: Ot
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)(), {
        status: Dt
      } = et, mt = tj(Vj(...et.dims)), dt = vl(Dt), jt = Math.min(Math.round(Dt.baf2RxFuel), mt.fuel), Ht = "running" === Dt.baf2RxState, Xt = Ht ? Wl(Dt.baf2RxOut, Dt.baf2RxMaxNow) : 0, Qt = function(tt, et, Vt) {
        const Ot = ul(tt),
          qt = "cryo" === Ot.OE,
          Dt = Vt ? Vt.coolantSecs : Ot.pct >= 100 && tt.baf2RxOut >= 1 ? hl(tt, tt.baf2RxThrottle).coolantSecs : null;
        let mt, dt = !1;
        if (Ot.pct < 100) {
          const Vt = 1 === Ot.makersShort,
            Dt = !qt && tt.baf2RxCryoOpen ? "OrCryo" : "";
          mt = Ot.makersShort > 0 ? et(qt ? `${xl}rxCryoAddMixer${Vt?"":"s"}` : `${xl}rxWaterAddCondenser${Vt?"":"s"}${Dt}`, {
            count: String(Ot.makersShort)
          }) : et(`${xl}rxWaterNeeds`, {
            rate: yl(Ot.needPerS)
          })
        } else if (null !== Dt) mt = et(`${xl}rxWaterRunsOut`, {
          time: JD(et, Dt)
        });
        else if (Ot.waterBeside > 0) mt = et(`${xl}rxCryoPlusWater`, {
          rate: yl(Ot.waterBeside)
        });
        else {
          const tt = function(tt) {
            return tt.inPerS <= 0 ? "rxWaterNoSupply" : tt.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Ot);
          dt = "rxWaterNoSupply" === tt, mt = et(`${xl}${tt}`, {
            amount: Pj(Ot.stored)
          })
        }
        return {
          kind: qt ? "Cryo" : "Water",
          label: et(qt ? `${xl}rxCryo` : `${xl}rxWater`),
          number: `${yl(Ot.usePerS)}/s`,
          preview: Vt ? `${yl(Vt.coolPerS)}/s` : null,
          note: mt,
          tone: "noWater" === tt.baf2RxState ? "danger" : dt ? "warn" : (jt = Ot.pct, Ht = Dt, jt < 100 ? "danger" : null === Ht ? null : Ht < 300 ? "danger" : "warn"),
          share: Ot.pct / 100,
          why: qt ? `${xl}rxWhy_cryo` : `${xl}rxWhy_water`,
          short: Ot.pct < 100
        };
        var jt, Ht
      }(Dt, qt, Ot), lt = vj(Dt, mt.waste, dt), Et = tE(Dt, qt), ft = hl(Dt, Dt.baf2RxTarget), wt = Ht && Math.abs(ft.settle - Dt.baf2RxHeat) >= 3, yt = Ot ? Ot.pelletsPerMin / 60 : null;
      return (0, hD.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, hD.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, hD.jsx)(nQ, {
            kind: "Fuel",
            label: qt(`${xl}rxFuel`),
            number: String(jt),
            preview: null !== yt && yt > 0 && Dt.baf2RxFuel > 0 ? JD(qt, Dt.baf2RxFuel / yt) : null,
            note: Dt.baf2RxFuel <= 0 ? qt(`${xl}rxFuelEmpty`) : dt > 0 ? qt(`${xl}rxFuelLeft`, {
              time: JD(qt, Dt.baf2RxFuel / dt)
            }) : qt(1 === jt ? `${xl}rxFuelPellet` : `${xl}rxFuelPellets`),
            tone: "noFuel" === Dt.baf2RxState ? "danger" : Dt.baf2RxFuel < 2 ? "warn" : null,
            share: Dt.baf2RxFuel / mt.fuel,
            onExplain: () => {
              Vt(`${xl}rxWhy_fuel`)
            }
          }), (0, hD.jsx)(nQ, {
            kind: Qt.kind,
            label: Qt.label,
            number: Qt.number,
            preview: Qt.preview,
            note: Qt.note,
            tone: Qt.tone,
            share: Qt.share,
            onExplain: () => {
              Vt(Qt.why)
            }
          })]
        }), (0, hD.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, hD.jsx)(tl, {
            kind: "Fuel",
            step: Xt,
            short: "noFuel" === Dt.baf2RxState
          }), (0, hD.jsx)(tl, {
            kind: Qt.kind,
            step: Xt,
            short: Qt.short || "noWater" === Dt.baf2RxState
          })]
        }), (0, hD.jsx)(nl, {
          view: et,
          heat: Dt.baf2RxHeat,
          settle: Math.min(Mj, ft.settle),
          settleLine: wt ? qt(`${xl}rxHeatSettles`, {
            pct: String(Math.round(ft.settle)),
            time: JD(qt, ft.settleS)
          }) : null,
          settleBad: ft.settle > 100,
          explain: Vt
        }), (0, hD.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, hD.jsx)(tl, {
            kind: "Power",
            step: Xt
          }), (0, hD.jsx)(tl, {
            kind: "Waste",
            step: Ht && Dt.baf2RxFuel - Dt.baf2RxPu > 0 ? Xt : 0,
            short: lt.full
          })]
        }), (0, hD.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, hD.jsx)(nQ, {
            kind: "Power",
            label: qt(`${xl}rxPowerOut`),
            number: `\u26a1 ${Pj(Dt.baf2RxOut)}/s`,
            preview: Ot ? Pj(Ot.out) : null,
            note: Et.note,
            share: Et.share,
            onExplain: () => {
              Vt(`${xl}rxWhy_power`)
            }
          }), (0, hD.jsx)(nQ, {
            kind: "Waste",
            label: qt(`${xl}rxWaste`),
            number: `${Math.floor(Dt.baf2RxWaste)}/${mt.waste}`,
            note: lt.full ? qt(`${xl}rxWasteFull`) : null !== lt.fullInS ? qt(`${xl}rxWasteFullIn`, {
              time: JD(qt, lt.fullInS)
            }) : qt(`${xl}rxWasteSpent`),
            tone: "wasteFull" === Dt.baf2RxState ? "danger" : lt.full ? "warn" : null,
            share: Dt.baf2RxWaste / mt.waste,
            onExplain: () => {
              Vt(`${xl}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function VE(tt) {
      let {
        view: et,
        explain: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Wq.H)(), qt = et.plan;
      if (!qt) return null;
      const Dt = qt.fuelHeat <= 0 ? null : qt.cooling > 0 ? Math.min(Mj, 100 * qt.fuelHeat / qt.cooling) : Mj,
        mt = Ot(`${xl}rxPlanAtFull`);
      return (0, hD.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, hD.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, hD.jsx)(nQ, {
            kind: "Fuel",
            label: Ot(`${xl}rxFuel`),
            number: Ot(`${xl}rxPlanPerMin`, {
              amount: Zj(qt.pelletsPerMin)
            }),
            note: Ot(`${xl}rxPlanPellets`),
            onExplain: () => {
              Vt(`${xl}rxWhy_fuel`)
            }
          }), (0, hD.jsx)(nQ, {
            kind: "Water",
            label: Ot(`${xl}rxWater`),
            number: `${yl(qt.waterPerS)}/s`,
            note: et.status.baf2RxCryoOpen && qt.waterPerS > 0 ? Ot(`${xl}rxPlanOrCryo`, {
              rate: yl(wj(qt, nt.f) * nt.m)
            }) : mt,
            onExplain: () => {
              Vt(`${xl}rxWhy_water`)
            }
          })]
        }), (0, hD.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, hD.jsx)(tl, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, hD.jsx)(tl, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, hD.jsx)(nl, {
          view: et,
          heat: null,
          settle: Dt,
          settleLine: null === Dt ? null : Ot(`${xl}rxPlanHeat`, {
            pct: String(Math.round(Dt))
          }),
          settleBad: null !== Dt && Dt > 100,
          explain: Vt
        }), (0, hD.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, hD.jsx)(tl, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, hD.jsx)(tl, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, hD.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, hD.jsx)(nQ, {
            kind: "Power",
            label: Ot(`${xl}rxPowerOut`),
            number: `\u26a1 ${Pj(qt.max)}/s`,
            note: mt,
            onExplain: () => {
              Vt(`${xl}rxWhy_power`)
            }
          }), (0, hD.jsx)(nQ, {
            kind: "Waste",
            label: Ot(`${xl}rxWaste`),
            number: Ot(`${xl}rxPlanPerMin`, {
              amount: Zj(qt.pelletsPerMin)
            }),
            note: Ot(`${xl}rxWasteSpent`),
            onExplain: () => {
              Vt(`${xl}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const OE = "buildAFactory2Game:",
      qE = {
        key: `${OE}rxWaiting`,
        params: {},
        tone: "info"
      };

    function DE(tt, et) {
      return 0 !== (tt.baf2RxFlags & et)
    }

    function mE(tt) {
      var et, Vt;
      let {
        store: qt,
        close: Dt
      } = tt;
      const {
        t: mt
      } = (0, Wq.H)(), dt = El(qt), {
        explained: jt,
        hinting: Ht,
        explain: Xt,
        explainOnce: Qt
      } = Vl("baf2RxExplained"), lt = (0, Ot.useCallback)(((tt, et) => {
        Xt(mt(tt, et))
      }), [Xt, mt]), Et = (0, Ot.useCallback)(((tt, et) => {
        Qt(tt, mt(tt, et))
      }), [Qt, mt]), [ft, wt] = (0, Ot.useState)(!1), [yt, Nt] = (0, Ot.useState)(!1), Mt = null === dt || void 0 === dt ? void 0 : dt.status, bt = null === Mt || void 0 === Mt ? void 0 : Mt.baf2RxAt.join(","), Jt = !0 === (null === Mt || void 0 === Mt ? void 0 : Mt.baf2RxFormed);
      (0, Ot.useEffect)((() => {
        Nt(!1), wt(!1)
      }), [bt, Jt]), (0, Ot.useEffect)((() => (qt.opened(), () => {
        qt.closed()
      })), [qt]);
      const Ct = void 0 !== Mt && DE(Mt, ae),
        ut = Mt ? Jt ? aj(Mt) : null !== dt && void 0 !== dt && dt.plan ? function(tt, et) {
          if (tt <= 0) return "off";
          if (et <= 0) return "alarm";
          const Vt = 100 * tt / et;
          return Vt < 50 ? "calm" : Vt < Qj ? "warm" : Vt <= 100 ? "hot" : "alarm"
        }(dt.plan.fuelHeat, dt.plan.cooling) : "off" : "off",
        Kt = Mt ? bj(Mt) : null,
        ht = dt ? dt.waiting ? qE : Jt ? Rl(dt.status) : function(tt) {
          var et, Vt;
          const {
            status: Ot
          } = tt;
          return Il({
            left: Ot.baf2RxNeed.reduce(((tt, et) => {
              let [, Vt] = et;
              return tt + Vt
            }), 0),
            bad: Ot.baf2RxBad,
            rods: null !== (et = null === (Vt = tt.plan) || void 0 === Vt ? void 0 : Vt.rods) && void 0 !== et ? et : 0,
            canFill: DE(Ot, ye),
            melted: DE(Ot, we),
            idle: tt.looks.reduce(((tt, et) => tt + (et === dj ? 1 : 0)), 0)
          })
        }(dt) : null,
        vt = Ht && null !== ht && ("ok" === ht.tone || "info" === ht.tone),
        Wt = Mt ? function(tt) {
          const et = 0 !== (tt.baf2RxFlags & Ee),
            Vt = tt.baf2RxHeat < gd;
          return 0 !== (tt.baf2RxFlags & we) || Vt && (et || !tt.baf2RxFormed) ? null : tt.baf2RxFormed && !et ? {
            key: `${Nj}rxApartScram`,
            params: {}
          } : {
            key: `${Nj}rxApartCooling`,
            params: {
              pct: String(gd)
            }
          }
        }(Mt) : null,
        [St, ct, Rt] = null !== (et = null === dt || void 0 === dt ? void 0 : dt.dims) && void 0 !== et ? et : [0, 0, 0],
        It = `${St}\xd7${ct}\xd7${Rt}`;
      return (0, hD.jsx)(Jm.c, {
        close: Dt,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, hD.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, hD.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, hD.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, hD.jsx)(wl, {
                mood: ut
              }), (0, hD.jsxs)("div", {
                children: [(0, hD.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: mt(`${OE}rxTitle`)
                }), dt && (0, hD.jsxs)("p", {
                  className: uq()("Baf2RxSubtitle", Jt && (null === Kt || void 0 === Kt ? void 0 : Kt.tone)),
                  children: [Jt && !Ct ? (0, hD.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": mt(`${OE}rxChangeSize`),
                    onClick: () => {
                      if (!Mt) return;
                      const tt = DE(Mt, Ee);
                      var et;
                      (et = {
                        scram: tt,
                        heat: Mt.baf2RxHeat
                      }).scram && et.heat < gd ? wt(!0) : lt(tt ? `${OE}rxResizeCooling` : `${OE}rxResizeHot`, {
                        pct: String(gd)
                      })
                    },
                    children: [It, " \u270e"]
                  }) : It, " \xb7 ", mt(Jt ? null !== (Vt = null === Kt || void 0 === Kt ? void 0 : Kt.label) && void 0 !== Vt ? Vt : `${OE}rxState_running` : `${OE}rxSubPlanShort`)]
                })]
              })]
            }), (0, hD.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [dt && !Ct && (0, hD.jsx)(fl, {
                kind: "reactor",
                busy: dt.busy.has("apart"),
                whyNot: Wt ? () => {
                  lt(Wt.key, Wt.params)
                } : null,
                apart: () => {
                  qt.tap("apart", (() => {
                    qt.send("apart")
                  }))
                }
              }), (0, hD.jsx)(Cm.j, {
                onClick: Dt
              })]
            })]
          }), dt && ht && (0, hD.jsxs)("div", {
            className: "Baf2RxBody",
            children: [Jt ? (0, hD.jsx)(eE, {
              view: dt,
              explain: lt,
              preview: Kl(dt.status)
            }) : (0, hD.jsx)(VE, {
              view: dt,
              explain: lt
            }), (0, hD.jsx)(Ol, {
              text: vt ? `${Sl(mt,ht)} ${mt(`${OE}rxTapHint`)}` : Sl(mt, ht),
              tone: ht.tone,
              explained: jt
            }), Ct ? (0, hD.jsxs)(hD.Fragment, {
              children: [(0, hD.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: mt(`${OE}rxNotYours`)
              }), (0, hD.jsx)(Hl, {
                status: dt.status,
                store: qt,
                readOnly: !0
              })]
            }) : Jt && !yt ? (0, hD.jsxs)(hD.Fragment, {
              children: [(0, hD.jsx)(zl, {
                view: dt,
                store: qt,
                explain: lt,
                explainOnce: Et
              }), void 0 !== dt.status.baf2RxLayout && ml(dt.status) && (0, hD.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, hD.jsx)(Hl, {
                  status: dt.status,
                  store: qt,
                  readOnly: !1,
                  bare: !0
                }), (0, hD.jsx)(jl, {
                  status: dt.status,
                  store: qt,
                  busy: dt.busy.has("fill")
                })]
              })]
            }) : (0, hD.jsxs)(hD.Fragment, {
              children: [(0, hD.jsx)(ol, {
                view: dt,
                store: qt,
                keepSize: Jt ? () => {
                  Nt(!1)
                } : void 0
              }), uj(dt.dims, dt.status.baf2RxDims) && (0, hD.jsx)(rl, {
                need: dt.status.baf2RxNeed,
                explain: lt
              }), (0, hD.jsx)(Hl, {
                status: dt.status,
                store: qt,
                readOnly: !1
              })]
            }), ft && (0, hD.jsx)(ll, {
              id: "baf2ResizeTitle",
              title: `${OE}rxResizeConfirmTitle`,
              body: `${OE}rxResizeConfirmBody`,
              yes: `${OE}rxChangeSize`,
              cancel: () => {
                wt(!1)
              },
              confirm: () => {
                wt(!1), Nt(!0)
              }
            })]
          })]
        })
      })
    }
    class dE {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(tt) {
        this.view = tt;
        for (const et of this.listeners) et()
      }
      get() {
        return this.view
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
    }

    function jE(tt) {
      let {
        commands: et,
        store: Vt,
        power: qt,
        water: Dt,
        reactor: mt,
        battery: dt,
        collider: jt,
        terminal: Ht,
        quests: Xt,
        tutorial: Qt,
        close: lt,
        leave: Et,
        askIslands: ft,
        showCore: wt,
        openSocial: yt
      } = tt;
      const {
        userContext: Nt
      } = (0, Fd.d)(), Mt = Ld.featureFlags.useSocialFeatures && Nt.isLoggedIn(), [bt, Jt] = (0, Ot.useState)((() => Vt.get()));
      (0, Ot.useEffect)((() => Vt.subscribe((() => {
        Jt(Vt.get())
      }))), [Vt]);
      const Ct = "islands" === (null === bt || void 0 === bt ? void 0 : bt.kind) ? bt.backToCore : void 0;
      return (0, hD.jsxs)(rm.Provider, {
        value: et,
        children: ["core" === (null === bt || void 0 === bt ? void 0 : bt.kind) && (0, hD.jsx)(aQ, {
          view: bt.core,
          close: lt,
          askIslands: ft
        }), "dropMap" === (null === bt || void 0 === bt ? void 0 : bt.kind) && (0, hD.jsx)(CQ, {
          message: bt.dropMap,
          quests: Xt,
          close: lt,
          leave: Et
        }), "islands" === (null === bt || void 0 === bt ? void 0 : bt.kind) && (0, hD.jsx)(oQ, {
          message: bt.islands,
          arrivedAtMs: bt.arrivedAtMs,
          close: Ct ? () => {
            wt(Ct)
          } : lt,
          leave: Et,
          openSocial: Mt ? yt : null
        }), "quests" === (null === bt || void 0 === bt ? void 0 : bt.kind) && (0, hD.jsx)(kX, {
          store: Xt,
          tutorial: Qt,
          close: lt
        }), "transfer" === (null === bt || void 0 === bt ? void 0 : bt.kind) && (0, hD.jsx)(DX, {
          message: bt.transfer,
          arrivedAtMs: bt.arrivedAtMs,
          close: lt,
          leave: Et
        }), "power" === (null === bt || void 0 === bt ? void 0 : bt.kind) && (0, hD.jsx)(Im, {
          store: qt,
          close: lt
        }), "water" === (null === bt || void 0 === bt ? void 0 : bt.kind) && (0, hD.jsx)(yd, {
          store: Dt,
          close: lt
        }), "reactor" === (null === bt || void 0 === bt ? void 0 : bt.kind) && (0, hD.jsx)(mE, {
          store: mt,
          close: lt
        }), "battery" === (null === bt || void 0 === bt ? void 0 : bt.kind) && (0, hD.jsx)(Al, {
          store: dt,
          close: lt
        }), "collider" === (null === bt || void 0 === bt ? void 0 : bt.kind) && (0, hD.jsx)(MH, {
          store: jt,
          close: lt
        }), "terminal" === (null === bt || void 0 === bt ? void 0 : bt.kind) && (0, hD.jsx)(sQ, {
          store: Ht,
          close: lt,
          send: tt => {
            et.send(tt)
          }
        })]
      })
    }
    var HE = Vt(38716);

    function XE(tt, et) {
      return tt.distSq - et.distSq
    }
    class QE {
      constructor() {
        this.list = [], this.pool = []
      }
      add(tt, et, Vt, Ot) {
        let qt = this.pool[this.list.length];
        qt || (qt = {
          x: 0,
          y: 0,
          distSq: 0,
          element: et,
          liftRem: Vt,
          dot: Ot
        }, this.pool.push(qt)), qt.x = tt.x, qt.y = tt.y, qt.distSq = tt.distSq, qt.element = et, qt.liftRem = Vt, qt.dot = Ot, this.list.push(qt)
      }
    }
    class lE {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = tt, this.sizes = new WeakMap, this.observer = new ResizeObserver((tt => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const et of tt) {
            const tt = et.borderBoxSize[0];
            "dot" !== et.target.dataset.crowded && 0 !== tt.inlineSize && 0 !== tt.blockSize && this.sizes.set(et.target, {
              width: tt.inlineSize,
              height: tt.blockSize
            })
          }
        })), this.remPx = 16, this.hE = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.iN = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.iN)
      }
      observe(tt) {
        this.observer.observe(tt)
      }
      unobserve(tt) {
        this.observer.unobserve(tt)
      }
      run(tt) {
        const et = tt.list;
        et.sort(XE);
        const Vt = this.pxPerVw,
          Ot = this.pxPerVh;
        this.hE.length = 0, this.hud && this.hE.push(...this.hud.boxes(performance.now()));
        for (const Dt of et) {
          var qt;
          const tt = this.sizes.get(Dt.element);
          let et = "no";
          if (tt && tt.width > 0) {
            const qt = Dt.x * Vt,
              mt = Dt.y * Ot - Dt.liftRem * this.remPx;
            this.fit(qt, mt, tt.width, tt.height) || (et = Dt.dot && this.fit(qt, mt, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (qt = Dt.element.dataset.crowded) && void 0 !== qt ? qt : "no") !== et && ("no" === et ? delete Dt.element.dataset.crowded : Dt.element.dataset.crowded = et), "hidden" !== et && (0, HE.e)(Dt.element, Dt.x, Dt.y)
        }
        et.length = 0
      }
      fit(tt, et, Vt, Ot) {
        const qt = tt - Vt / 2,
          Dt = tt + Vt / 2,
          mt = et - Ot,
          dt = this.hE;
        for (let jt = 0; jt < dt.length; jt += 4)
          if (qt < dt[jt + 1] - 2 && Dt > dt[jt] + 2 && mt < dt[jt + 3] - 2 && et > dt[jt + 2] + 2) return !1;
        return dt.push(qt, Dt, mt, et), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.iN)
      }
    }
    const EE = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class fE {
      constructor() {
        this.cards = EE.map((tt => document.getElementsByClassName(tt))), this.watched = EE.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(tt) {
        tt - this.refreshedAt > 1e3 && (this.refreshedAt = tt, this.stale = !0);
        for (let Vt = 0; Vt < this.cards.length; Vt++) {
          var et;
          const tt = null !== (et = this.cards[Vt][0]) && void 0 !== et ? et : null;
          tt !== this.watched[Vt] && this.watch(Vt, tt)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let tt = 0; tt < this.watched.length; tt++) this.watch(tt, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const tt = this.list;
        tt.length = 0;
        for (const et of this.watched) {
          if (!et || et.closest(".NoRoom")) continue;
          const Vt = et.getBoundingClientRect();
          let Ot = Vt.top,
            qt = Vt.bottom;
          if (et === this.watched[0] && this.hud) {
            const tt = this.hud.getBoundingClientRect();
            Ot = Math.max(Ot, tt.top), qt = Math.min(qt, tt.bottom)
          }
          Vt.width > 0 && qt > Ot && tt.push(Vt.left, Vt.right, Ot, qt)
        }
      }
      watch(tt, et) {
        const Vt = this.watched[tt];
        var Ot, qt;
        (Vt && this.sizes.unobserve(Vt), this.watched[tt] = et, this.stale = !0, et && this.sizes.observe(et), 0 === tt) && (null === (Ot = this.hud) || void 0 === Ot || Ot.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (qt = null === et || void 0 === et ? void 0 : et.closest(".Baf2QuestHud")) && void 0 !== qt ? qt : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var wE = Vt(38718);
    class yE {
      constructor(tt) {
        this.onElement = tt, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(tt) {
        const et = [];
        for (let Vt = 0; Vt + 4 < tt.length; Vt += 5) {
          const Ot = [tt[Vt], tt[Vt + 1], tt[Vt + 2]];
          et.push({
            key: Ot.join(","),
            pos: Ot,
            status: qq[tt[Vt + 3]],
            kind: Se[tt[Vt + 4]]
          })
        }
        this.markers = et, this.keys = new Set(et.map((tt => {
          let {
            key: et
          } = tt;
          return et
        }))), this.notify()
      }
      covers(tt) {
        return this.keys.has(tt)
      }
      get() {
        return this.markers
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      bind(tt) {
        let et = this.refs.get(tt);
        return et || (et = et => {
          const Vt = this.elements.get(tt);
          var Ot, qt;
          Vt && (null === (Ot = this.onElement) || void 0 === Ot || Ot.call(this, Vt, !1));
          et ? (this.elements.set(tt, et), null === (qt = this.onElement) || void 0 === qt || qt.call(this, et, !0)) : (this.elements.delete(tt), this.refs.delete(tt))
        }, this.refs.set(tt, et)), et
      }
      onAfterRender(tt, et, Vt) {
        for (const Ot of this.markers) {
          const qt = this.elements.get(Ot.key);
          if (!qt) continue;
          const Dt = (0, wE.b)(qt, tt, et, Ot.pos, 1.05, 24);
          Dt && Vt.add(Dt, qt, .45, !0)
        }
      }
      notify() {
        for (const tt of this.listeners) tt()
      }
    }
    const NE = {
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
    const aE = (0, Ot.memo)((function(tt) {
        let {
          status: et,
          kind: Vt,
          bindRef: Ot
        } = tt;
        const {
          t: qt
        } = (0, Wq.H)(), Dt = function(tt, et) {
          var Vt;
          if ("noFuel" === tt) {
            var Ot, qt;
            const tt = null === (Ot = Le[et]) || void 0 === Ot || null === (qt = Ot.fuels) || void 0 === qt ? void 0 : qt.find((tt => qV.includes(tt)));
            return null !== tt && void 0 !== tt ? tt : NE.noFuel
          }
          return void 0 !== (null === (Vt = Le[et]) || void 0 === Vt ? void 0 : Vt.cryoMade) ? "noOutlet" === tt ? "Fluid Pipe" : "noInput" === tt ? "Biomass" : NE[tt] : NE[tt]
        }(et, Vt);
        return (0, hD.jsxs)("div", {
          className: uq()("Baf2StallMarker", et),
          ref: Ot,
          hidden: !0,
          children: [Dt && (0, hD.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, hD.jsx)(cq.e, {
              itemName: Dt,
              amount: 0
            })
          }), (0, hD.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === et ? "?" : "!"
          }), (0, hD.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: qt(`buildAFactory2Game:stallTag_${et}`)
          })]
        })
      })),
      ME = (0, Ot.memo)((function(tt) {
        let {
          controller: et
        } = tt;
        const [Vt, qt] = (0, Ot.useState)((() => et.get()));
        return (0, Ot.useEffect)((() => (qt(et.get()), et.subscribe((() => {
          qt(et.get())
        })))), [et]), (0, hD.jsx)("div", {
          className: "Baf2StallMarkers",
          children: Vt.map((tt => (0, hD.jsx)(aE, {
            status: tt.status,
            kind: tt.kind,
            bindRef: et.bind(tt.key)
          }, tt.key)))
        })
      })),
      bE = yV.l + 150;
    class JE {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(tt, et) {
        const Vt = et - tt;
        null === this.offset || Vt < this.offset ? this.offset = Vt : this.offset = Math.min(Vt, this.offset + .02 * (et - this.sampledAt)), this.sampledAt = et
      }
      toLocal(tt) {
        var et;
        return tt + (null !== (et = this.offset) && void 0 !== et ? et : 0) + bE
      }
    }
    var CE = Vt(38724);
    const uE = 15 * Math.PI / 180,
      KE = Math.SQRT2,
      hE = [4, 2];

    function vE(tt, et) {
      const Vt = [1 / 0, 1 / 0, 1 / 0],
        Ot = [-1 / 0, -1 / 0, -1 / 0];
      for (const jt of tt)
        for (let tt = 0; tt < 3; tt++) Vt[tt] = Math.min(Vt[tt], jt[tt]), Ot[tt] = Math.max(Ot[tt], jt[tt]);
      const qt = (Vt[0] + Ot[0]) / 2,
        Dt = (Vt[1] + Ot[1]) / 2,
        mt = (Vt[2] + Ot[2]) / 2;
      let dt = 0;
      for (const jt of tt) dt = Math.max(dt, Math.hypot(jt[0] - qt, jt[1] - Dt, jt[2] - mt));
      return {
        x: qt,
        y: Dt,
        z: mt,
        r: dt + et
      }
    }

    function WE(tt, et, Vt) {
      const Ot = et.x - tt.x,
        qt = et.y - tt.y,
        Dt = et.z - tt.z,
        mt = Math.sqrt(Ot * Ot + qt * qt + Dt * Dt);
      if (mt <= et.r + 8) return 1;
      const dt = et.r / mt,
        jt = Math.sqrt(1 - dt * dt),
        Ht = jt < -tt.cosHalf,
        Xt = (Ot * tt.dx + qt * tt.dy + Dt * tt.dz) / mt;
      if (!Ht && Xt < tt.cosHalf * jt - tt.sinHalf * dt) return 0;
      const Qt = Vt * KE * tt.frameMs * tt.pxPerBlock / (mt - et.r);
      for (let lt = 0; lt < hE.length; lt++)
        if (Qt * hE[lt] <= 1) return hE[lt];
      return 1
    }

    function SE(tt, et) {
      return {
        name: tt,
        at: et,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const cE = [0, 0, 0];

    function RE(tt, et, Vt) {
      let [, Ot, qt, Dt, mt, dt] = et;
      const jt = yV.h * (null !== mt && void 0 !== mt ? mt : 1),
        Ht = [];
      for (let Et = 0; Et < Ot.length; Et += 3) Ht.push([Ot[Et] + .5, Ot[Et + 1] + .65, Ot[Et + 2] + .5]);
      const Xt = [];
      for (let Et = 0; Et < Ht.length - 1; Et++) {
        const [tt, et] = [Ht[Et], Ht[Et + 1]];
        Xt.push([(tt[0] + et[0]) / 2, (tt[1] + et[1]) / 2, (tt[2] + et[2]) / 2])
      }
      const Qt = Ht.slice(1, -1),
        lt = new Uint8Array(Qt.length);
      for (const Et of null !== dt && void 0 !== dt ? dt : []) lt[Et >> 1] |= 1 & Et ? 2 : 1;
      return {
        island: tt,
        length: Qt.length,
        loop: Dt,
        cellsPerMs: jt,
        edges: Xt,
        Of: Qt,
        bounds: vE([...Xt, ...Qt], .3),
        changed: !0,
        culled: !1,
        hide: lt,
        items: qt.map((tt => {
          let [et, Ot] = tt;
          return SE(et, (0, yV.F)(et, Ot, Vt, jt).at)
        }))
      }
    }

    function IE(tt, et) {
      const {
        items: Vt
      } = tt;
      if (0 === Vt.length) return;
      const Ot = tt.length / tt.cellsPerMs,
        qt = Math.floor((et - Vt[0].at) / Ot) - 1;
      if (qt > 0)
        for (const Dt of Vt) Dt.at += qt * Ot
    }

    function PE(tt, et) {
      const Vt = Math.min(Math.floor(et), tt.length - 1),
        Ot = tt.hide[Vt];
      return 0 !== Ot && 0 !== (Ot & (et - Vt < .5 ? 1 : 2))
    }

    function ZE(tt, et) {
      const Vt = Math.min(Math.floor(et), tt.length - 1),
        Ot = et - Vt,
        qt = Ot < .5,
        Dt = qt ? tt.edges[Vt] : tt.Of[Vt],
        mt = qt ? tt.Of[Vt] : tt.edges[Vt + 1],
        dt = qt ? 2 * Ot : 2 * Ot - 1;
      cE[0] = Dt[0] + (mt[0] - Dt[0]) * dt, cE[1] = Dt[1] + (mt[1] - Dt[1]) * dt, cE[2] = Dt[2] + (mt[2] - Dt[2]) * dt
    }
    const LE = Math.PI / 4;
    class FE {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new JE, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.iN = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(tt) {
        const et = performance.now();
        this.clock.sample(tt.baf2BeltLinesAt, et), this.queue(tt.baf2BeltLinesAt, tt, 0, null, null, 0), this.applyDue(et)
      }
      onMoves(tt) {
        const et = performance.now(),
          Vt = tt.baf2BeltMovesAt;
        this.clock.sample(Vt, et);
        for (const [Ot, qt, Dt, mt] of tt.baf2BeltMoveList) null === qt ? this.queue(Vt - Dt, null, Ot, null, null, null !== mt && void 0 !== mt ? mt : 0) : this.queue(Vt - Dt, null, Ot, qt, null !== mt && void 0 !== mt ? mt : null, 0);
        this.applyDue(et)
      }
      start(tt) {
        this.pool = new CE.b(tt, {
          scale: .3,
          yaw: LE
        }, 64), this.iN(), window.addEventListener("resize", this.iN)
      }
      onAfterRender(tt) {
        const {
          pool: et
        } = this;
        if (!et) return;
        const Vt = performance.now(),
          Ot = Vt - this.lastRenderAt;
        this.lastRenderAt = Vt, Ot < 100 && (this.frameMs += .1 * (Ot - this.frameMs));
        const qt = Vt + this.frameMs;
        this.applyDue(qt);
        const Dt = tt.cameraPosition,
          mt = et.follow(Dt);
        this.setView(tt, Dt);
        const dt = this.frame++;
        for (let jt = 0; jt < this.shown.length; jt++) {
          const tt = this.shown[jt],
            Vt = WE(this.view, tt.bounds, tt.cellsPerMs),
            Ot = tt.culled && 0 !== Vt;
          if (tt.culled = 0 === Vt, !mt && !tt.changed && !Ot && (0 === Vt || (dt + jt) % Vt !== 0)) continue;
          tt.changed = !1, tt.loop && (IE(tt, qt), (0, yV.z)(tt.items, tt.length, qt, tt.cellsPerMs));
          let Dt = tt.length;
          for (let dt = 0; dt < tt.items.length; dt++) {
            const Vt = tt.items[dt],
              Ot = (0, yV.H)(Vt.at, Dt, qt, tt.cellsPerMs);
            if (Dt = Ot - yV.r, PE(tt, Ot)) {
              null === Vt.kind || Vt.hidden || (Vt.kind.hide(Vt.slot), Vt.hidden = !0);
              continue
            }
            let jt = Vt.kind;
            if (null === jt) {
              if (jt = et.kindOf(Vt.name), null === jt) continue;
              Vt.kind = jt, Vt.slot = jt.take(), Vt.hidden = !0, Vt.drawn = NaN
            } else if (Ot === Vt.drawn && !Vt.hidden && !mt) continue;
            ZE(tt, Ot), jt.write(Vt.slot, cE[0], cE[1], cE[2]), Vt.hidden = !1, Vt.drawn = Ot
          }
        }
        et.commit()
      }
      dispose() {
        var tt;
        window.removeEventListener("resize", this.iN), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (tt = this.pool) || void 0 === tt || tt.dispose(), this.pool = null
      }
      setView(tt, et) {
        const {
          cameraDir: Vt,
          lastDir: Ot
        } = this, qt = tt.cameraDirection;
        for (let Xt = 0; Xt < 3; Xt++) Ot[Xt] = Vt[Xt], Vt[Xt] = qt[Xt];
        const Dt = Vt[0] * Ot[0] + Vt[1] * Ot[1] + Vt[2] * Ot[2],
          mt = Number.isNaN(Dt) ? 0 : Math.acos(Math.min(1, Math.max(-1, Dt))),
          {
            width: dt,
            height: jt
          } = this,
          Ht = tt.tanHalfFovX;
        ! function(tt, et, Vt, Ot, qt, Dt, mt) {
          let dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          tt.x = et[0], tt.y = et[1], tt.z = et[2], tt.dx = Vt[0], tt.dy = Vt[1], tt.dz = Vt[2];
          const jt = Math.min(Math.PI, Math.atan(Math.sqrt(Ot * Ot + qt * qt)) + uE + dt);
          tt.cosHalf = Math.cos(jt), tt.sinHalf = Math.sin(jt), tt.pxPerBlock = Dt / (2 * qt), tt.frameMs = mt
        }(this.view, et, Vt, Ht, Ht * jt / dt, jt * window.devicePixelRatio, this.frameMs, mt)
      }
      queue(tt, et, Vt, Ot, qt, Dt) {
        const mt = Math.max(this.clock.toLocal(tt), this.lastPendingAt);
        this.lastPendingAt = mt, this.pending.push({
          at: mt,
          lines: et,
          line: Vt,
          name: Ot,
          pos: qt,
          idx: Dt
        })
      }
      applyDue(tt) {
        const {
          pending: et
        } = this;
        for (; this.pendingHead < et.length && et[this.pendingHead].at <= tt;) {
          const tt = et[this.pendingHead++];
          if (tt.lines) this.applyLines(tt.lines, tt.at), tt.lines = null;
          else {
            const et = this.lines.get(tt.line);
            et && this.applyMove(et, tt, tt.at)
          }
        }
        this.pendingHead === et.length ? (et.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > et.length && (et.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(tt, et) {
        this.clearIsland(tt.baf2BeltIsland);
        for (const Vt of tt.baf2BeltLineList) this.lines.set(Vt[0], RE(tt.baf2BeltIsland, Vt, et));
        this.shown = [...this.lines.values()]
      }
      applyMove(tt, et, Vt) {
        let {
          name: Ot,
          pos: qt,
          idx: Dt
        } = et;
        tt.changed = !0, tt.loop && (IE(tt, Vt), (0, yV.z)(tt.items, tt.length, Vt, tt.cellsPerMs)), null !== Ot && null !== qt ? (0, yV.C)(tt.items, tt.length, SE(Ot, Vt), qt, Vt, tt.cellsPerMs) : null !== Ot ? tt.items.push(SE(Ot, Vt)) : tt.items.length > Dt && this.release((0, yV.K)(tt.items, tt.length, Vt, tt.cellsPerMs, Dt))
      }
      clearIsland(tt) {
        for (const [et, Vt] of this.lines)
          if (Vt.island === tt) {
            for (const tt of Vt.items) this.release(tt);
            this.lines.delete(et)
          }
      }
      release(tt) {
        null !== tt.kind && (tt.kind.release(tt.slot), tt.kind = null, tt.slot = -1, tt.hidden = !0, tt.drawn = NaN)
      }
    }
    var kE = Vt(36853),
      GE = Vt(38733);

    function zE(tt) {
      let {
        depth: et,
        store: Vt,
        t: qt
      } = tt;
      const Dt = function(tt) {
        const [et, Vt] = (0, Ot.useState)(tt.lastPlayerY());
        return (0, mX.f)(kq, Vt), (0, Ot.useEffect)((() => {
          Vt(tt.lastPlayerY())
        }), [tt]), et
      }(Vt);
      if (null === Dt) return null;
      const [mt, dt] = et, jt = Dt > mt ? mt : null !== dt && Dt < dt ? dt : null, Ht = {
        y: bD(Dt),
        target: null === jt ? "" : bD(jt)
      };
      return (0, hD.jsx)("span", {
        className: uq()("Baf2QuestDepth", {
          Reached: null === jt
        }),
        children: qt(`${XX}${null===jt?"questDepthReached":"questDepth"}`, Ht)
      })
    }

    function oE(tt) {
      let {
        also: et,
        view: Vt,
        t: Ot
      } = tt;
      return (0, hD.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, hD.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, hD.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, hD.jsx)("strong", {
            children: Ot(`${XX}questAlsoDownHere`)
          }), (0, hD.jsx)("span", {
            className: "Baf2QuestChips",
            children: et.map((tt => {
              let [et, qt, Dt, mt] = tt;
              return (0, hD.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Ot(`${XX}questAlsoItem`, {
                  item: lX(Ot, Vt.itemNames[et], et),
                  have: String(qt),
                  need: String(Dt)
                }),
                children: [(0, hD.jsx)(wX, {
                  item: et
                }), (0, hD.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${qt}/${Dt}`
                }), null !== mt && (0, hD.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Ot(`${XX}questAlsoDepth`, {
                    y: bD(mt)
                  })
                })]
              }, et)
            }))
          })]
        })]
      })
    }
    var rE = Vt(3478);

    function UE(tt) {
      let {
        expanded: et,
        inventoryOpen: Vt,
        children: qt
      } = tt;
      const Dt = (0, Ot.useRef)(null);
      return (0, Ot.useEffect)((() => {
        const tt = Dt.current,
          et = null === tt || void 0 === tt ? void 0 : tt.closest(".RightElements"),
          Ot = null === tt || void 0 === tt ? void 0 : tt.firstElementChild;
        if (!tt || !et || !Ot) return;
        return (0, GE.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [et, Ot], (() => {
          const qt = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === qt.length) return;
          const Dt = Math.max(...qt.map((tt => tt.getBoundingClientRect().bottom))),
            mt = et.getBoundingClientRect(),
            dt = Vt ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (dt) {
            const et = parseFloat(getComputedStyle(Ot).marginLeft) + parseFloat(getComputedStyle(Ot).marginRight),
              Vt = mt.right - dt.getBoundingClientRect().right - 8 - et;
            tt.style.setProperty("--baf2-quest-room", `${Vt}px`), tt.classList.toggle("NoRoom", Vt < 150)
          } else tt.style.removeProperty("--baf2-quest-room"), tt.classList.remove("NoRoom");
          const jt = Dt - mt.top + 8,
            Ht = function(tt, et, Vt) {
              const Ot = et.getBoundingClientRect(),
                qt = tt.getBoundingClientRect(),
                Dt = (0, rE.f)(qt.left, qt.right, Ot.top + Vt);
              if (null !== Dt && Dt < Ot.bottom) return Dt - Ot.top;
              return Ot.height - (parseFloat(getComputedStyle(et).paddingBottom) || 0)
            }(tt, et, jt) - 8,
            Xt = window.innerHeight / 2 - mt.top,
            {
              top: Qt,
              maxHeight: lt
            } = function(tt, et, Vt, Ot, qt) {
              const Dt = Math.min(Vt, Math.max(0, et - tt)),
                mt = qt ? tt : Math.max(tt, Math.min(Ot - Dt / 2, et - Dt));
              return {
                top: mt,
                maxHeight: Math.max(0, et - mt)
              }
            }(jt, Ht, function(tt) {
              const et = tt.firstElementChild,
                Vt = et ? et.scrollHeight - et.clientHeight : 0;
              return tt.getBoundingClientRect().height + Math.max(0, Vt)
            }(Ot), Xt, KD());
          tt.style.top = `${Qt}px`, tt.style.maxHeight = `${lt}px`
        }))
      }), [Vt]), (0, hD.jsx)("div", {
        ref: Dt,
        className: uq()("Baf2QuestHud", {
          Expanded: et
        }),
        children: qt
      })
    }

    function AE(tt) {
      let {
        amount: et,
        t: Vt
      } = tt;
      return (0, hD.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, hD.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, hD.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: Vt(`${XX}questStepsDone`, {
            amount: String(et)
          })
        })]
      })
    }

    function iE(tt) {
      let {
        pulse: et
      } = tt;
      return 0 === et ? null : (0, hD.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, et)
    }

    function YE(tt) {
      var et;
      let {
        store: Vt
      } = tt;
      const qt = (0, mX.h)(Fq, Vt.get()),
        [Dt, mt] = (0, Ot.useState)(!1),
        {
          t: dt
        } = (0, Wq.H)(),
        jt = (0, CD.h)(uD),
        {
          openInGameMenuName: Ht,
          openEverythingMenuName: Xt
        } = (0, bq.k)(["openInGameMenuName", "openEverythingMenuName"]),
        Qt = "inventory" === Ht && null === Xt,
        lt = null !== Ht && !Qt || null !== Xt;
      if (! function(tt) {
          return null !== tt.name || null !== tt.side
        }(qt) || lt || "off" === qt.tutorial) return null;
      const Et = Aq(qt.rows),
        ft = Et.filter((tt => tt.done)).length,
        wt = function(tt, et) {
          const Vt = Bq(tt);
          let Ot = 0;
          return tt.filter(((tt, qt) => !!tt.justFinished || !(tt.done || qt < Vt || Ot > et) && (Ot++, !0)))
        }(qt.rows, jt ? 0 : 2),
        yt = jt ? wt : function(tt, et) {
          const Vt = et.filter((tt => !tt.justFinished));
          if (Vt.length < 2) return [...et];
          const Ot = tt.indexOf(Vt[0]),
            qt = tt.indexOf(Vt[Vt.length - 1]),
            Dt = new Set(Aq(tt));
          return tt.filter(((tt, Vt) => et.includes(tt) || tt.done && Dt.has(tt) && Vt > Ot && Vt < qt))
        }(qt.rows, wt),
        Nt = Dt ? qt.rows : yt,
        Mt = Dt || jt ? [] : function(tt, et) {
          const Vt = new Array(et.length + 1).fill(0),
            Ot = new Set(Aq(tt));
          let qt = 0;
          for (const Dt of tt) qt < et.length && Dt === et[qt] ? qt++ : Dt.done && Ot.has(Dt) && Vt[qt]++;
          return Vt
        }(qt.rows, yt),
        bt = Dt || yt.length < qt.rows.length || null !== qt.reward,
        Jt = Uq(qt),
        Ct = Jt ? dt(`${XX}questLineComplete`) : qt.tier ? aX(dt, qt.tier) : dt(`${XX}currentQuest`),
        ut = function(tt) {
          var et, Vt;
          if (Uq(tt)) return null;
          const Ot = null === (et = tt.chapters) || void 0 === et ? void 0 : et.find((et => {
            let [Vt] = et;
            return Vt === tt.tier
          }));
          if (!Ot) return null;
          const qt = Ot[1].filter((tt => !tt[4]));
          if (0 === qt.length) return null;
          const Dt = null === (Vt = tt.name) || void 0 === Vt ? void 0 : Vt[0],
            mt = tt => qt.findIndex((et => et[0] === Dt && (!tt || !et[3]))),
            dt = mt(!0),
            jt = dt >= 0 ? dt : mt(!1);
          if (jt >= 0) return [jt + 1, qt.length];
          const Ht = qt.filter((tt => tt[3])).length;
          return [Math.min(Ht + 1, qt.length), qt.length]
        }(qt);
      return (0, hD.jsx)(kE.g, {
        placement: "topRight",
        children: (0, hD.jsx)(UE, {
          expanded: Dt,
          inventoryOpen: Qt,
          children: (0, hD.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: QX,
            children: [null !== qt.name && (0, hD.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, hD.jsx)(iE, {
                pulse: qt.pulse
              }), (0, hD.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, hD.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [Ct, ut && (0, hD.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": dt(`${XX}questPlaceLabel`, {
                      n: String(ut[0]),
                      total: String(ut[1])
                    }),
                    children: dt(`${XX}questPlace`, {
                      n: String(ut[0]),
                      total: String(ut[1])
                    })
                  }), qt.tier && qt.core && !Jt && (0, hD.jsx)(MX, {
                    core: qt.core,
                    t: dt
                  })]
                })
              }), (0, hD.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: dt(`${XX}${qt.name[0]}`, EX(qt.name[1]))
              }), (Et.length > 1 || bt) && (0, hD.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [Et.length > 1 && (0, hD.jsx)(bX, {
                  rows: Et,
                  t: dt
                }), bt && (0, hD.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": Dt,
                  onClick: () => {
                    mt(!Dt)
                  },
                  children: [(0, hD.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: dt(`${XX}questStepsToggle`, {
                      done: String(ft),
                      total: String(Et.length)
                    })
                  }), (0, hD.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: Dt ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, hD.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [Nt.map(((tt, et) => {
                  var Dt;
                  const mt = tt.current && qt.depth;
                  return (0, hD.jsxs)(Ot.Fragment, {
                    children: [(null !== (Dt = Mt[et]) && void 0 !== Dt ? Dt : 0) > 0 && (0, hD.jsx)(AE, {
                      amount: Mt[et],
                      t: dt
                    }), (0, hD.jsx)(JX, {
                      row: tt,
                      view: qt,
                      t: dt,
                      extra: mt && (0, hD.jsx)(zE, {
                        depth: mt,
                        store: Vt,
                        t: dt
                      })
                    })]
                  }, tt.id)
                })), (null !== (et = Mt[Nt.length]) && void 0 !== et ? et : 0) > 0 && (0, hD.jsx)(AE, {
                  amount: Mt[Nt.length],
                  t: dt
                }), qt.also.length > 0 && (0, hD.jsx)(oE, {
                  also: qt.also,
                  view: qt,
                  t: dt
                })]
              }), Dt && qt.reward && (0, hD.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [dt(`${XX}questReward`), (0, hD.jsx)(wX, {
                  item: qt.reward
                }), lX(dt, qt.itemNames[qt.reward], qt.reward)]
              })]
            }), qt.side && (0, hD.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [oq(qt, Date.now()) && (0, hD.jsx)(iE, {
                pulse: qt.sideCameUpAt
              }), (0, hD.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: dt(`${XX}questSide`)
              }), (0, hD.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: dt(`${XX}${qt.side.name[0]}`, EX(qt.side.name[1]))
              }), (0, hD.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, hD.jsx)(JX, {
                  row: qt.side.row,
                  view: qt,
                  t: dt
                })
              })]
            })]
          })
        })
      })
    }
    const BE = "baf2ToastView";
    class pE {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = tt, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: tt,
          holdMs: et
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const tt = this.dropCovered();
          tt && this.show(tt.message, tt.holdMs)
        }), 250));
        const Vt = this.dropCovered();
        null !== Vt && (Vt.holdMs > 0 || "baf2ToastCelebrate" === Vt.message.baf2ToastStyle) && "baf2ToastCelebrate" !== tt.baf2ToastStyle && this.show(Vt.message, Vt.holdMs);
        const Ot = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== tt.baf2ToastStyle && Ot > 0) return this.pending = {
          message: tt,
          holdMs: et
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const tt = this.pending;
          this.pending = null, tt && this.present(tt.message, tt.holdMs)
        }), Ot));
        this.present(tt, et)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(tt, et) {
        this.clearTimers(), this.pending = null;
        const Vt = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: tt.baf2ToastText,
          style: tt.baf2ToastStyle,
          swapped: Vt,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === tt.baf2ToastStyle ? 1500 : et), this.sw();
        const Ot = Math.min(8e3, Math.max(1e3, tt.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Ot)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.sw(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.sw()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const tt = this.covering;
        return this.covering = null, tt
      }
      sw() {
        Zq.j.sw(BE, this.view, !0)
      }
    }
    var xE = Vt(83);
    const TE = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function gE(tt) {
      let {
        store: et
      } = tt;
      const Vt = (0, mX.h)(BE, et.get()),
        {
          openInGameMenuName: Ot,
          openEverythingMenuName: qt
        } = (0, bq.k)(["openInGameMenuName", "openEverythingMenuName"]),
        Dt = Vt && (0, hD.jsxs)("div", {
          className: uq()("Baf2Toast", TE[Vt.style], {
            Swapped: Vt.swapped,
            Leaving: Vt.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === Vt.style && (0, hD.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, hD.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, hD.jsx)(Rq.e, {
              text: Vt.text
            })
          })]
        }, Vt.id);
      return null !== Ot && null === qt ? (0, xE.createPortal)((0, hD.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: Dt
      }), document.body) : (0, hD.jsx)(kE.g, {
        children: Dt
      })
    }
    const sE = "baf2AreaView";
    class nE {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.Pd = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.Pd = null
      }
      arrive(tt, et) {
        et && function(tt) {
          return "home" === tt.baf2AreaPlace && void 0 !== tt.baf2AreaNameText
        }(tt) ? this.Pd = tt : this.show(tt)
      }
      release() {
        const tt = this.Pd;
        null !== tt && this.show(tt)
      }
      show(tt) {
        this.clearTimer(), this.Pd = null;
        const et = void 0 === tt.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: tt,
          ms: et
        }, this.sw(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.sw()
        }), et)
      }
      dispose() {
        this.clearTimer(), this.Pd = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      sw() {
        Zq.j.sw(sE, this.view, !0)
      }
    }

    function tf(tt) {
      var et;
      let {
        store: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Wq.H)(), qt = (0, mX.h)(sE, Vt.get());
      if (!qt) return null;
      const {
        area: Dt
      } = qt, mt = Dt.baf2AreaResetMinutes;
      return (0, hD.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": Dt.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${qt.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, hD.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), Dt.baf2AreaHeading && (0, hD.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Ot(Dt.baf2AreaHeading)
        }), (0, hD.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (et = Dt.baf2AreaNameText) && void 0 !== et ? et : Ot(Dt.baf2AreaName)
        }), Dt.baf2AreaNote && (0, hD.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Ot(Dt.baf2AreaNote)
        }), void 0 !== mt && (0, hD.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Ot("buildAFactory2Game:areaWildsReset", {
            time: JD(Ot, 60 * mt)
          })
        })]
      }, qt.id)
    }
    const ef = "baf2GearGauge";
    class Vf {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      gM(tt) {
        var et;
        if (this.clearLinger(), null === tt.gearPowerKind) return void this.set(null);
        const Vt = "jetpack" === tt.gearPowerKind && (Ot = tt.gearChargeState, qt = tt.gearCharge, "flying" === Ot || "charging" === Ot || "outOfCharge" === Ot || "ceiling" === Ot || "offPlot" === Ot || "noPower" === Ot && qt <= 0);
        var Ot, qt;
        const Dt = !0 === (null === (et = this.view) || void 0 === et ? void 0 : et.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          mt = Vt || "jetpack" === tt.gearPowerKind && Dt;
        this.set({
          gauge: tt,
          jetShown: mt
        }), mt && !Vt && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(tt) {
        this.view = tt, Zq.j.sw(ef, tt, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const Of = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function qf(tt) {
      let {
        store: et
      } = tt;
      const Vt = (0, mX.h)(ef, et.get());
      return Vt ? "jetpack" === Vt.gauge.gearPowerKind ? (0, hD.jsx)(Df, {
        view: Vt
      }) : (0, hD.jsx)(mf, {
        gauge: Vt.gauge
      }) : null
    }

    function Df(tt) {
      let {
        view: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)(), {
        gauge: Ot
      } = et, qt = Ot.gearChargeMax > 0 ? Math.max(0, Math.min(1, Ot.gearCharge / Ot.gearChargeMax)) : 0, Dt = Of[Ot.gearChargeState], mt = Dt ? Vt(Dt) : null;
      return (0, hD.jsxs)("div", {
        className: uq()("Baf2JetArc", {
          Shown: et.jetShown,
          Low: qt < .2,
          Warm: qt >= .2 && qt < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - qt)
        },
        "aria-hidden": !et.jetShown,
        children: [(0, hD.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, hD.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: df,
            pathLength: 100
          }), (0, hD.jsx)("path", {
            className: "Baf2JetArcFill",
            d: df,
            pathLength: 100
          })]
        }), (0, hD.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * qt), "%"]
        }), mt && (0, hD.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: mt
        })]
      })
    }

    function mf(tt) {
      let {
        gauge: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)(), Ot = function(tt, et) {
        switch (et.gearPowerKind) {
          case "skyPack":
            return tt("buildAFactory2Game:gearSkyPack", {
              charge: et.gearCharge,
              max: et.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return tt("buildAFactory2Game:gearIslandDraw", {
              power: st(et.gearIslandPower),
              cost: st(et.gearCostPerUse)
            });
          case "barrier":
            return tt("buildAFactory2Game:gearBarrier", {
              shield: Math.round(et.gearCharge),
              max: et.gearChargeMax,
              power: st(et.gearIslandPower)
            });
          default:
            return null
        }
      }(Vt, et);
      return null === Ot ? null : (0, hD.jsx)(kE.g, {
        children: (0, hD.jsx)("div", {
          className: uq()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === et.gearChargeState || "outOfCharge" === et.gearChargeState
          }),
          role: "status",
          children: Ot
        })
      })
    }
    const df = (() => {
      const tt = tt => {
        const et = tt * Math.PI / 180;
        return `${(40*Math.cos(et)).toFixed(2)} ${(40*Math.sin(et)).toFixed(2)}`
      };
      return `M ${tt(160)} A 40 40 0 1 1 ${tt(380)}`
    })();
    class jf {
      constructor(tt) {
        this.onElement = tt, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      gM(tt) {
        let et = tt.baf2LabelsReset || tt.baf2LabelsIsland !== this.island;
        et && (this.labels.clear(), this.island = tt.baf2LabelsIsland);
        for (const [Vt, Ot, qt, Dt, mt] of tt.baf2LabelsList) {
          const tt = `${Vt},${Ot},${qt}`,
            dt = this.labels.get(tt);
          null === Dt ? et = this.labels.delete(tt) || et : dt && dt.item === Dt && (dt.count === mt || dt.count >= 0 && mt >= 0) ? dt.count !== mt && (dt.count = mt, this.writeCount(tt, mt)) : (this.labels.set(tt, {
            key: tt,
            pos: [Vt, Ot, qt],
            item: Dt,
            count: mt
          }), this.writeCount(tt, mt), et = !0)
        }
        if (this.changes++, et) {
          this.snapshot = [...this.labels.values()];
          for (const tt of this.listeners) tt()
        }
      }
      bindCount(tt) {
        const et = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${tt}`;
        let Vt = this.countRefs.get(et);
        return Vt || (Vt = Vt => {
          var Ot, qt;
          Vt ? (this.countElements.set(et, Vt), this.writeCount(tt, null !== (Ot = null === (qt = this.labels.get(tt)) || void 0 === qt ? void 0 : qt.count) && void 0 !== Ot ? Ot : -1)) : (this.countElements.delete(et), this.countRefs.delete(et))
        }, this.countRefs.set(et, Vt)), Vt
      }
      setCountWords(tt) {
        this.countWords = tt;
        for (const [et, Vt] of this.labels) this.writePart(`words|${et}`, tt(Vt.count), Vt.count)
      }
      writeCount(tt, et) {
        this.writePart(`bare|${tt}`, MD(et), et), this.countElements.has(`words|${tt}`) && this.writePart(`words|${tt}`, this.countWords(et), et)
      }
      writePart(tt, et, Vt) {
        const Ot = this.countElements.get(tt);
        if (!Ot || Vt < 0) return;
        const qt = Ot.firstChild;
        qt && 3 === qt.nodeType && !qt.nextSibling ? qt.nodeValue !== et && (qt.nodeValue = et) : Ot.textContent !== et && (Ot.textContent = et)
      }
      list() {
        return this.snapshot
      }
      at(tt) {
        return this.labels.get(`${tt[0]},${tt[1]},${tt[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      bind(tt) {
        let et = this.refs.get(tt);
        return et || (et = et => {
          const Vt = this.elements.get(tt);
          var Ot, qt;
          Vt && (null === (Ot = this.onElement) || void 0 === Ot || Ot.call(this, Vt, !1));
          et ? (this.elements.set(tt, et), null === (qt = this.onElement) || void 0 === qt || qt.call(this, et, !0)) : (this.elements.delete(tt), this.refs.delete(tt))
        }, this.refs.set(tt, et)), et
      }
      onAfterRender(tt, et, Vt, Ot) {
        for (const qt of this.snapshot) {
          const Dt = this.elements.get(qt.key);
          if (!Dt) continue;
          if (Ot(qt.key)) {
            (0, HE.g)(Dt, !0);
            continue
          }
          const mt = (0, wE.b)(Dt, tt, et, qt.pos, 1.1, 24);
          mt && Vt.add(mt, Dt, 0, !1)
        }
      }
    }
    const Hf = (0, Ot.memo)((function(tt) {
        let {
          item: et
        } = tt;
        return (0, hD.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, hD.jsx)(cq.e, {
            itemName: et,
            amount: 0
          })
        })
      })),
      Xf = (0, Ot.memo)((function(tt) {
        let {
          label: et,
          bindRef: Vt,
          countRef: Ot,
          wordsRef: qt
        } = tt;
        return (0, hD.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: Vt,
          hidden: !0,
          children: [(0, hD.jsx)(Hf, {
            item: et.item
          }), et.count >= 0 && (0, hD.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, hD.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: qt
            }), (0, hD.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Ot
            })]
          })]
        })
      })),
      Qf = (0, Ot.memo)((function(tt) {
        let {
          store: et
        } = tt;
        const {
          t: Vt
        } = (0, Wq.H)(), [qt, Dt] = (0, Ot.useState)((() => et.list()));
        return (0, Ot.useEffect)((() => (Dt(et.list()), et.subscribe((() => {
          Dt(et.list())
        })))), [et]), (0, Ot.useEffect)((() => {
          et.setCountWords((tt => Vt("buildAFactory2Game:labelSiloCount", {
            count: MD(tt)
          })))
        }), [et, Vt]), (0, hD.jsx)("div", {
          className: "Baf2IslandLabels",
          children: qt.map((tt => -2 === tt.count ? null : (0, hD.jsx)(Xf, {
            label: tt,
            bindRef: et.bind(tt.key),
            countRef: et.bindCount(tt.key),
            wordsRef: et.bindCount(tt.key, "words")
          }, tt.key)))
        })
      })),
      lf = {
        read: () => !0,
        write: () => {}
      };

    function Ef(tt) {
      return `${tt[0]},${tt[1]},${tt[2]}`
    }

    function ff(tt) {
      let [et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt] = tt;
      const Et = void 0 === Qt || void 0 === lt ? function(tt) {
        return [Math.floor((tt - 1) / 2), 0]
      }(Dt) : [Qt, lt];
      return {
        kind: 0 === jt ? "reactor" : "battery",
        box: AV([et, Vt, Ot], qt, Dt, mt, dt, Et),
        formed: 1 === Ht,
        level: Xt
      }
    }
    class wf {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lf;
        this.guideSetting = tt, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = tt.read()
      }
      gM(tt) {
        var et;
        const Vt = new Map;
        for (const Ot of tt.baf2RxPlanList) {
          const tt = ff(Ot);
          Vt.set(Ef(tt.box.ctrl), tt)
        }
        this.plans = Vt, this.layouts = new Map((null !== (et = tt.baf2RxLayouts) && void 0 !== et ? et : []).map((tt => {
          let [et, Vt, Ot, qt] = tt;
          return [Ef([et, Vt, Ot]), qt]
        }))), this.predicted.clear(), tt.baf2RxFormedAt && (this.formed = {
          ctrl: tt.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Ot of [...this.startersOff]) {
          const tt = Vt.get(Ot);
          tt && !tt.formed || this.startersOff.delete(Ot)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((tt => this.planByKey(tt)))
      }
      planAt(tt) {
        return this.planByKey(Ef(tt))
      }
      predictSize(tt, et) {
        this.predicted.set(Ef(tt), et), this.changed()
      }
      unpredict(tt) {
        this.predicted.delete(Ef(tt)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(tt) {
        var et;
        const Vt = Ef(tt);
        return this.predicted.has(Vt) ? null : null !== (et = this.layouts.get(Vt)) && void 0 !== et ? et : null
      }
      showsStarter(tt) {
        return !this.startersOff.has(Ef(tt))
      }
      setStarter(tt, et) {
        const Vt = Ef(tt);
        et ? this.startersOff.delete(Vt) : this.startersOff.add(Vt), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(tt) {
        this.guide = tt, this.guideSetting.write(tt), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(tt) {
        const et = this.plans.get(tt);
        if (!et) return null;
        const Vt = this.predicted.get(tt);
        return Vt ? {
          ...et,
          box: YV(et.box, et.kind, Vt[0], Vt[1], Vt[2])
        } : et
      }
      changed() {
        this.version++;
        for (const tt of this.listeners) tt()
      }
    }
    var yf = Vt(229);
    const Nf = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function af(tt, et, Vt, Ot) {
      const qt = tt.length / 3;
      for (let Dt = 0; Dt < Nf.length / 3; Dt++) tt.push(Nf[3 * Dt] * Ot[0] / 2 + Vt[0], Nf[3 * Dt + 1] * Ot[1] / 2 + Vt[1], Nf[3 * Dt + 2] * Ot[2] / 2 + Vt[2]);
      for (let Dt = qt; Dt < qt + 24; Dt += 4) et.push(Dt, Dt + 1, Dt + 2, Dt, Dt + 2, Dt + 3)
    }

    function Mf(tt, et, Vt) {
      const Ot = et[0][0],
        qt = [],
        Dt = [];
      for (const [mt, dt] of et) af(qt, Dt, [mt[0] - Ot[0], mt[1] - Ot[1], mt[2] - Ot[2]], dt);
      return tt.createGameMesh({
        positions: qt,
        indices: Dt
      }, Vt, Ot)
    }

    function bf(tt, et) {
      const Vt = tt.w - 2,
        Ot = tt.d - 2;
      return 1 === function(tt, et, Vt, Ot) {
        const [qt, Dt, mt] = tt;
        if (Number(qt <= 2) + Number(Dt <= 2) + Number(mt <= 2) >= 2) return function(tt, et, Vt) {
          return (tt + et + Vt) % 2 === 0 ? 1 : 3
        }(et, Vt, Ot);
        const [dt, jt] = qt >= Dt && qt >= mt ? [Vt, Ot] : Dt >= mt ? [et, Ot] : [et, Vt];
        return dt % 2 === 0 && jt % 2 === 0 ? 1 : 3
      }([Vt, tt.h - 2, Ot], et % Vt, Math.floor(et / (Vt * Ot)), Math.floor(et / Vt) % Ot) ? "rod" : "channel"
    }

    function Jf(tt, et, Vt) {
      if ("reactor" !== tt.kind || tt.formed || !et) return !1;
      const Ot = xV(tt.box);
      for (let qt = 0; qt < Ot; qt++) {
        const tt = Vt(qt);
        if (null !== tt && RV(tt)) return !1
      }
      return !0
    }

    function Cf(tt, et, Vt, Ot, qt) {
      var Dt;
      let mt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const dt = eO(tt.box, et),
        jt = DO(tt.kind, dt, Vt);
      if ("wrong" === jt || "blocked" === jt) return "wrong";
      if (!qt) return null;
      if ("inside" === dt && "reactor" === tt.kind && "Air" === IV(Vt)) {
        if (null !== mt) {
          var Ht;
          const Vt = ql[Dl(mt, VO(tt.box, et))];
          return Vt && null !== (Ht = Sj(Vt)) && void 0 !== Ht ? Ht : null
        }
        if (Ot) return bf(tt.box, VO(tt.box, et))
      }
      if ("missing" !== jt) return null;
      const Xt = mO(tt.kind, dt);
      return null === Xt ? null : null !== (Dt = Sj(Xt)) && void 0 !== Dt ? Dt : null
    }
    const uf = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Kf(tt, et, Vt) {
      const Ot = Vt => {
        const Ot = et(nV(tt.box, Vt));
        return null !== Ot && function(tt, et) {
          return "reactor" !== tt.kind || et !== gV(tt.box) && "inside" !== eO(tt.box, et)
        }(tt, Vt) && "ok" !== DO(tt.kind, eO(tt.box, Vt), Ot)
      };
      if (Vt) {
        const Dt = tO(tt.box, [Math.floor(Vt[0]), Math.floor(Vt[1]), Math.floor(Vt[2])]);
        if (Dt >= 0 && (Ot(Dt) || (qt = Dt, "reactor" === tt.kind && "inside" === eO(tt.box, qt) && "Air" === et(nV(tt.box, qt))))) return Dt
      }
      var qt;
      const Dt = xV(tt.box);
      for (let mt = 0; mt < Dt; mt++)
        if (Ot(mt)) return mt;
      return -1
    }

    function hf(tt, et) {
      return Math.floor(et / (tt.w * tt.d))
    }

    function vf(tt, et, Vt) {
      return Vt >= 0 && hf(tt, et) > hf(tt, Vt)
    }

    function Wf(tt, et) {
      return et >= 0 && tt.h >= 3 && hf(tt, et) === tt.h - 1
    }

    function Sf(tt) {
      const et = IV(tt);
      return et === MV || "Collider" === et || "Laser" === et || et.startsWith("_Collider ")
    }

    function Rf(tt, et, Vt, Ot) {
      if (Ot(tt)) return null;
      if (!uf.every((et => {
          let [Ot, qt, Dt] = et;
          const mt = Vt([tt[0] + Ot, tt[1] + qt, tt[2] + Dt]);
          return null !== mt && !zV("reactor", mt) && "reactor" !== PV(mt)
        }))) return null;
      const qt = oV("reactor").min,
        Dt = AV([tt[0], tt[1], tt[2]], function(tt, et) {
          const Vt = et[0] - (tt[0] + .5),
            Ot = et[2] - (tt[2] + .5);
          return Math.abs(Vt) >= Math.abs(Ot) ? Vt >= 0 ? 2 : 4 : Ot >= 0 ? 1 : 3
        }(tt, et), qt, qt, qt, iV("reactor", qt)),
        mt = gV(Dt);
      let dt = !0;
      for (let jt = 0; jt < xV(Dt) && dt; jt++) {
        if (jt === mt) continue;
        const tt = nV(Dt, jt),
          et = Vt(tt);
        dt = !Ot(tt) && (null === et || !Sf(et))
      }
      return {
        box: Dt,
        fits: dt
      }
    }
    const If = Wj,
      Pf = "baf2Goal",
      Zf = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Lf = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Ff = .4;

    function kf(tt, et) {
      let [Vt, Ot, qt] = tt;
      const Dt = Fj([Vt - .02, Ot - .02, qt - .02], [Vt + 1.02, Ot + 1.02, qt + 1.02], .07);
      return et && (Dt.push([
        [Vt + .5, Ot + 1 + .7, qt + .5],
        [.08, 1.4, .08]
      ]), Dt.push([
        [Vt + .5, Ot + 1 + 1.4 + .2, qt + .5],
        [Ff, Ff, Ff]
      ])), Dt
    }

    function Gf(tt, et) {
      let [Vt, Ot, qt] = et;
      return tt.isBlockInLoadedChunk(Vt, Ot, qt) ? tt.blockIdToBlockName(tt.getBlockId(Vt, Ot, qt)) : null
    }
    let zf = null;
    const of = new Set;
    let rf = null;

    function Uf(tt) {
      zf = tt;
      for (const et of of) et(tt)
    }
    class Af {
      constructor(tt) {
        var et;
        this.plans = tt, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (et = tt => {
          var et, Vt;
          this.setGoal(null !== (et = null === tt || void 0 === tt ? void 0 : tt.goal) && void 0 !== et ? et : null, null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.startsBattery) && void 0 !== Vt && Vt)
        }, rf ??= [Zq.j.subscribe("setDirectionArrow", (tt => {
          let {
            id: et,
            position: Vt,
            text: Ot
          } = tt;
          et === Pf && Uf({
            goal: [Math.floor(Vt[0]), Math.floor(Vt[1]), Math.floor(Vt[2])],
            startsBattery: JSON.stringify(null !== Ot && void 0 !== Ot ? Ot : null).includes("arrowStartBattery")
          })
        })), Zq.j.subscribe("clearDirectionArrow", (tt => {
          let {
            id: et
          } = tt;
          null !== et && et !== Pf || Uf(null)
        }))], of.add(et), et(zf), () => {
          of.delete(et)
        })
      }
      onAfterRender(tt, et) {
        const Vt = performance.now();
        if (this.cues.length > 0) {
          const et = .55 + .45 * Math.sin(Vt / 1100 * Math.PI * 2);
          for (const Vt of this.cues) tt.setGameMesh(Vt, {
            visibility: et
          })
        }
        if (Vt - this.lastCheckMs < 150) return;
        this.lastCheckMs = Vt;
        const Ot = this.plans.all().filter((tt => {
            const [Vt, Ot, qt] = tt.box.ctrl;
            return (!tt.formed || null !== this.plans.layoutOf(tt.box.ctrl)) && (Vt - et[0]) ** 2 + (Ot - et[1]) ** 2 + (qt - et[2]) ** 2 <= 2304
          })),
          qt = function(tt, et) {
            const Vt = yf.e.ff,
              Ot = new Map;
            for (const Dt of et) {
              const et = nV(Dt.box, 0),
                mt = nV(Dt.box, xV(Dt.box) - 1),
                dt = [Math.min(et[0], mt[0]), Math.min(et[1], mt[1]), Math.min(et[2], mt[2])].map((tt => Math.floor(tt / Vt))),
                jt = [Math.max(et[0], mt[0]), Math.max(et[1], mt[1]), Math.max(et[2], mt[2])].map((tt => Math.floor(tt / Vt)));
              for (let Vt = dt[0]; Vt <= jt[0]; Vt++)
                for (let et = dt[1]; et <= jt[1]; et++)
                  for (let Dt = dt[2]; Dt <= jt[2]; Dt++) {
                    var qt;
                    Ot.set(`${Vt},${et},${Dt}`, null !== (qt = tt.getChunkVersion(Vt, et, Dt)) && void 0 !== qt ? qt : -1)
                  }
            }
            return Ot
          }(tt, Ot);
        this.plans.getVersion() === this.storeVersion && (function(tt, et) {
          if (tt.size !== et.size) return !1;
          for (const [Vt, Ot] of tt)
            if (et.get(Vt) !== Ot) return !1;
          return !0
        }(qt, this.chunkVersions) || Vt - this.lastRescanMs < 600) || (this.lastRescanMs = Vt, this.storeVersion = this.plans.getVersion(), this.chunkVersions = qt, this.redraw(tt, Ot))
      }
      dispose(tt) {
        this.unwatch(), zf = null, this.clearMeshes(tt), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(tt, et) {
        var Vt;
        (null === tt || void 0 === tt ? void 0 : tt.join()) === (null === (Vt = this.goal) || void 0 === Vt ? void 0 : Vt.join()) && et === this.startsBattery || (this.goal = tt, this.startsBattery = et, this.storeVersion = -1)
      }
      redraw(tt, et) {
        const Vt = et => Gf(tt, et),
          Ot = new Map,
          qt = [],
          Dt = this.plans.guideOn();
        for (const Ht of et) {
          const tt = Dt && Jf(Ht, this.plans.showsStarter(Ht.box.ctrl), (tt => Vt(nV(Ht.box, tt)))),
            et = "reactor" === Ht.kind ? this.plans.layoutOf(Ht.box.ctrl) : null,
            mt = Dt && !Ht.formed ? Kf(Ht, Vt, this.goal) : -1;
          mt >= 0 && qt.push([nV(Ht.box, mt), Wf(Ht.box, mt)]);
          const dt = xV(Ht.box);
          for (let qt = 0; qt < dt; qt++) {
            const dt = nV(Ht.box, qt),
              jt = Vt(dt),
              Xt = null === jt ? null : Cf(Ht, qt, jt, tt, Dt, et);
            if (null !== Xt) {
              const tt = "wrong" !== Xt && vf(Ht.box, qt, mt),
                et = tt ? `${Xt}Dim` : Xt;
              let Vt = Ot.get(et);
              Vt || (Vt = {
                draw: {
                  ghost: Xt,
                  dim: tt
                },
                list: []
              }, Ot.set(et, Vt)), Vt.list.push(dt)
            }
          }
        }
        if (Dt && this.startsBattery && this.goal) {
          const [tt, et, qt] = this.goal, Dt = [];
          for (const [Ot, mt, dt] of Zf) {
            const jt = [tt + Ot, et + mt, qt + dt];
            "Air" === Vt(jt) && Dt.push(jt)
          }
          if (Dt.length > 0) {
            var mt;
            const tt = null !== (mt = Ot.get("cell")) && void 0 !== mt ? mt : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            tt.list.push(...Dt), Ot.set("cell", tt)
          }
        }
        const dt = [...Ot.keys()].sort(),
          jt = [...dt.map((tt => `${tt}:${Ot.get(tt).list.join(";")}`)), `cue:${qt.join(";")}`].join("|");
        if (jt !== this.shownKey) {
          this.shownKey = jt, this.clearMeshes(tt);
          for (const et of dt) {
            const {
              draw: Vt,
              list: qt
            } = Ot.get(et);
            this.meshes.push(this.build(tt, Vt, qt))
          }
          for (const [et, Vt] of qt) this.cues.push(Mf(tt, kf(et, Vt), Lf))
        }
      }
      build(tt, et, Vt) {
        let {
          ghost: Ot,
          dim: qt
        } = et;
        const {
          size: Dt,
          colour: mt,
          alpha: dt
        } = If[Ot], jt = Vt[0], Ht = [], Xt = [];
        for (const [Qt, lt, Et] of Vt) af(Ht, Xt, [Qt - jt[0] + .5, lt - jt[1] + .5, Et - jt[2] + .5], [Dt, Dt, Dt]);
        return tt.createGameMesh({
          positions: Ht,
          indices: Xt
        }, {
          rgb: mt,
          alpha: dt * (qt ? .3 : 1)
        }, jt)
      }
      clearMeshes(tt) {
        for (const et of [...this.meshes, ...this.cues]) tt.disposeGameMesh(et);
        this.meshes = [], this.cues = []
      }
    }
    const Yf = [.56, .83, 1],
      Bf = [1, .3, .25];
    class pf {
      constructor(tt) {
        this.plans = tt, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(tt, et, Vt) {
        var Ot;
        const qt = performance.now();
        if (qt - this.lastCheckMs < 150) return;
        this.lastCheckMs = qt;
        const Dt = et => Gf(tt, et),
          mt = null === (Ot = tt.bVt(et)) || void 0 === Ot ? void 0 : Ot.name,
          dt = mt && "Reactor Frame" === IV(mt) ? tt.getTargetedBlock() : null,
          jt = dt ? [dt.gw[0], dt.gw[1], dt.gw[2]] : null,
          Ht = null !== jt && "Air" === Dt(jt) && jt.every(((tt, et) => Math.abs(tt + .5 - Vt[et]) <= 8)) ? Rf(jt, Vt, Dt, (tt => this.inPlan(tt))) : null,
          Xt = Ht ? `${Ht.box.ctrl.join()}|${Ht.box.rot}|${Ht.fits}` : "";
        Xt !== this.shownKey && this.show(tt, Xt, Ht)
      }
      dispose(tt) {
        this.clear(tt), this.shownKey = ""
      }
      inPlan(tt) {
        return this.plans.all().some((et => tO(et.box, tt) >= 0))
      }
      show(tt, et, Vt) {
        if (this.clear(tt), this.shownKey = et, !Vt) return;
        const {
          box: Ot,
          fits: qt
        } = Vt, Dt = qt ? Yf : Bf, {
          lo: mt,
          hi: dt
        } = Lj(Ot);
        this.meshes.push(Mf(tt, Fj(mt, dt, .05), {
          rgb: Dt,
          alpha: 1
        }));
        const jt = [],
          Ht = nV(Ot, 0)[1];
        for (let Xt = 0; Xt < Ot.w * Ot.d; Xt++) {
          const [tt, , et] = nV(Ot, Xt);
          jt.push([
            [tt + .5, Ht + .02 + .01, et + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(Mf(tt, jt, {
          rgb: Dt,
          alpha: .25
        }))
      }
      clear(tt) {
        for (const et of this.meshes) tt.disposeGameMesh(et);
        this.meshes = []
      }
    }
    const xf = "buildAFactory2Game:";

    function Tf(tt, et, Vt) {
      const Ot = tt => {
          const [Vt, Ot, qt] = tt.box.ctrl;
          return Vt === et[0] && Ot === et[1] && qt === et[2]
        },
        qt = tt.find((tt => Ot(tt) || tO(tt.box, et) >= 0));
      if (!qt) return null;
      const Dt = function(tt, et, Vt) {
        const {
          w: Ot,
          h: qt,
          d: Dt
        } = tt.box, mt = "reactor" === tt.kind ? `${xf}rxTitle` : `${xf}batTitle`;
        if (tt.formed) return {
          key: `${xf}lookPlanFormed`,
          kindKey: mt,
          w: Ot,
          h: qt,
          d: Dt,
          count: 0
        };
        let dt = 0,
          jt = 0;
        for (let Xt = 0; Xt < xV(tt.box); Xt++) {
          const et = Vt(nV(tt.box, Xt)),
            Ot = null === et ? "ok" : DO(tt.kind, eO(tt.box, Xt), et);
          dt += "missing" === Ot ? 1 : 0, jt += "wrong" === Ot || "blocked" === Ot ? 1 : 0
        }
        const Ht = function(tt, et, Vt) {
          if (et < 0 || null === Vt) return;
          const Ot = eO(tt.box, et),
            qt = DO(tt.kind, Ot, Vt);
          return "blocked" === qt ? `${xf}lookWhy_blocked` : "wrong" === qt ? "ctrl" === Ot ? `${xf}lookWhy_ctrl` : `${xf}lookWhy_reactor_${Ot}` : void 0
        }(tt, tO(tt.box, et), Vt([et[0], et[1], et[2]]));
        if (dt > 0) return {
          key: `${xf}lookPlanToBuild`,
          kindKey: mt,
          w: Ot,
          h: qt,
          d: Dt,
          count: dt,
          why: Ht
        };
        if (jt > 0) return {
          key: `${xf}lookPlanTakeOut`,
          kindKey: mt,
          w: Ot,
          h: qt,
          d: Dt,
          count: jt,
          why: Ht
        };
        return {
          key: "reactor" === tt.kind ? `${xf}lookPlanNoRods` : `${xf}lookPlanDone`,
          kindKey: mt,
          w: Ot,
          h: qt,
          d: Dt,
          count: 0
        }
      }(qt, et, Vt);
      return "reactor" === qt.kind && Ot(qt) ? {
        ...Dt,
        ctrl: !0
      } : Dt
    }

    function gf(tt, et) {
      return tt === et || null !== tt && null !== et && tt.key === et.key && tt.kindKey === et.kindKey && tt.w === et.w && tt.h === et.h && tt.d === et.d && tt.count === et.count && tt.why === et.why && tt.ctrl === et.ctrl
    }

    function sf() {
      return performance.now()
    }
    class nf {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sf;
        this.ticket = tt, this.sent = et, this.backstopMs = Vt, this.now = Ot, this.queuedAt = void 0, this.queuedAt = Ot()
      }
      answered() {
        const tt = this.now(),
          et = this.sent.leftAt(this.ticket);
        return null !== et && tt - et > 4e3 || tt - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class tw {
      constructor() {
        this.echoes = []
      }
      add(tt) {
        this.echoes = this.echoes.filter((tt => !tt.answered())), this.echoes.push(tt)
      }
      answered() {
        var tt, et;
        return null === (tt = null === (et = this.echoes.at(-1)) || void 0 === et ? void 0 : et.answered()) || void 0 === tt || tt
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((tt => tt.answered()))
      }
      age() {
        var tt, et;
        return null !== (tt = null === (et = this.echoes.at(-1)) || void 0 === et ? void 0 : et.age()) && void 0 !== tt ? tt : null
      }
      clear() {
        this.echoes = []
      }
    }
    class ew {
      constructor(tt) {
        this.send = tt, this.value = null, this.sent = null, this.echoes = new tw, this.down = !1, this.timer = null
      }
      shown(tt) {
        return null === this.value ? tt : this.down || this.value !== this.sent ? this.value : tt === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), tt) : this.value
      }
      pendingFor(tt) {
        return null !== this.value && this.value === this.sent && tt !== this.value ? this.echoes.age() : null
      }
      assume(tt, et) {
        this.disarm(), this.down = !1, this.value = tt, this.sent = tt, this.echoes.clear(), this.echoes.add(et)
      }
      press() {
        this.down = !0
      }
      drag(tt) {
        this.value = tt, this.arm(this.down ? 1e3 : 400)
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
      arm(tt) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), tt)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class Vw {
      constructor() {
        this.pending = new Map
      }
      set(tt, et, Vt) {
        var Ot;
        const qt = null !== (Ot = this.pending.get(tt)) && void 0 !== Ot ? Ot : {
          on: et,
          echoes: new tw
        };
        qt.on = et, qt.echoes.add(Vt), this.pending.set(tt, qt)
      }
      shown(tt) {
        let et = tt;
        for (const [Vt, {
            on: Ot,
            echoes: qt
          }] of this.pending) 0 !== (tt & Vt) === Ot && qt.agreeCounts() || qt.answered() ? this.pending.delete(Vt) : et = Ot ? et | Vt : et & ~Vt;
        return et
      }
      pendingMask() {
        let tt = 0;
        for (const et of this.pending.keys()) tt |= et;
        return tt
      }
      pendingFor(tt) {
        let et = null;
        for (const [Ot, {
            on: qt,
            echoes: Dt
          }] of this.pending) {
          if (void 0 !== tt && 0 !== (tt & Ot) === qt) continue;
          const mt = Dt.age();
          var Vt;
          if (null !== mt) et = Math.max(null !== (Vt = et) && void 0 !== Vt ? Vt : 0, mt)
        }
        return et
      }
      clear() {
        this.pending.clear()
      }
    }
    class Ow {
      constructor() {
        this.dims = null, this.echoes = new tw, this.unmet = null
      }
      shown(tt) {
        var et;
        return this.dims && (qw(this.dims, tt) && this.echoes.agreeCounts() || this.echoes.answered()) && (qw(this.dims, tt) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (et = this.dims) && void 0 !== et ? et : tt
      }
      takeUnmet() {
        const tt = this.unmet;
        return this.unmet = null, tt
      }
      set(tt, et) {
        this.dims = tt, this.echoes.add(et)
      }
      pendingFor(tt) {
        return null === this.dims || tt && qw(this.dims, tt) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function qw(tt, et) {
      return tt[0] === et[0] && tt[1] === et[1] && tt[2] === et[2]
    }
    class Dw {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sf;
        this.now = tt, this.taps = new Map
      }
      tap(tt, et, Vt) {
        return !this.busy(tt) && (this.taps.set(tt, {
          at: this.now(),
          done: et
        }), Vt(), !0)
      }
      settle(tt) {
        for (const [et, Vt] of [...this.taps]) Vt.done(tt) && this.taps.delete(et)
      }
      busy(tt) {
        const et = this.taps.get(tt);
        return !!et && (!(this.now() - et.at >= 3e3) || (this.taps.delete(tt), !1))
      }
      busyIds() {
        const tt = new Set;
        for (const et of [...this.taps.keys()]) this.busy(et) && tt.add(et);
        return tt
      }
      clear() {
        this.taps.clear()
      }
    }

    function mw(tt) {
      return {
        send: et => tt.track(et),
        sendUrgent: (et, Vt) => tt.track(et, {
          urgent: !0,
          supersedes: Vt
        }),
        leftAt: et => tt.leftAt(et),
        holdReserve: () => tt.holdUrgentReserve(),
        answerMs: Lm
      }
    }

    function dw() {
      return performance.now()
    }

    function jw(tt) {
      const et = tt.baf2RxNeed.map((tt => {
        let [et, Vt] = tt;
        return [et, Vt]
      }));
      return JSON.stringify([tt.baf2RxFormed, et, tt.baf2RxBad, tt.baf2RxCells])
    }

    function Hw(tt, et) {
      const Vt = 0 !== (et & Ee),
        Ot = 0 !== (tt.baf2RxFlags & Ee);
      return !Vt || Ot || "running" !== tt.baf2RxState && "idle" !== tt.baf2RxState ? !Vt && Ot && "scram" === tt.baf2RxState && tt.baf2RxFuel > 0 ? "idle" : tt.baf2RxState : "scram"
    }

    function Xw(tt) {
      return JSON.stringify([tt.baf2BatFormed, tt.baf2BatNeed, tt.baf2BatBad])
    }

    function Qw(tt) {
      return tt.join(",")
    }
    class lw {
      constructor() {
        this.listeners = new Set
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      notify() {
        for (const tt of this.listeners) tt()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class Ew {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(tt, et) {
        this.lastAt = tt, this.lastUntil = tt + et
      }
      answered(tt) {
        return this.lastAt >= tt || tt < this.lastUntil
      }
    }
    class fw {
      constructor(tt, et) {
        this.link = tt, this.now = et, this.hold = new Ow, this.picked = null, this.notTaken = null
      }
      shown(tt) {
        const et = this.hold.shown(tt);
        if (this.hold.takeUnmet() && this.picked) {
          var Vt;
          const {
            plans: et,
            ctrl: Ot,
            at: qt
          } = this.picked;
          this.picked = null, et.unpredict(Ot), null === (Vt = this.notTaken) || void 0 === Vt || Vt.call(this, tt, qt)
        }
        return et
      }
      pendingFor(tt) {
        return this.hold.pendingFor(tt)
      }
      il(tt, et, Vt) {
        tt.predictSize(et, Vt), this.picked = {
          plans: tt,
          ctrl: et,
          at: this.now()
        };
        const Ot = this.link.send(le(et, "plan", ...Vt));
        this.hold.set(Vt, new nf(Ot, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class ww {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dw;
        this.plans = tt, this.readInterior = et, this.link = Vt, this.now = Ot, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Vw, this.throttle = void 0, this.oneShots = void 0, this.listeners = new lw, this.redraw = null, this.releaseReserve = null, this.size = new fw(Vt, Ot), this.oneShots = new Dw(Ot), this.throttle = new ew((tt => this.echo(this.link.send(this.command("throttle", tt)))))
      }
      set(tt) {
        !tt.baf2RxOpen && this.raw && Qw(this.raw.baf2RxAt) === Qw(tt.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(tt), this.sw(tt)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(tt) {
        this.size.notTaken = tt
      }
      resize(tt) {
        this.raw && (this.size.il(this.plans, this.raw.baf2RxAt, tt), this.sw(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const tt = this.raw.baf2RxAt;
        this.plans.setStarter(tt, !this.plans.showsStarter(tt)), this.sw(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.sw(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.sw(this.raw)
      }
      send(tt) {
        if (this.raw) {
          for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
          this.link.send(this.command(tt, ...Vt))
        }
      }
      tap(tt, et) {
        this.raw && this.oneShots.tap(tt, function(tt, et) {
          if ("start" === tt) return tt => 0 === (tt.baf2RxFlags & Ee);
          if ("odConfirm" === tt) return tt => 0 !== (tt.baf2RxFlags & fe);
          const Vt = jw(et);
          return tt => jw(tt) !== Vt
        }(tt, this.raw), et) && ("start" === tt && (this.startedAt = this.now()), this.sw(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(Ee, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(tt, et) {
        if (!this.raw) return;
        const Vt = tt === Ee ? this.command(et ? "scram" : "start") : this.command("od", et ? 1 : 0),
          Ot = et && tt === Ee,
          qt = `${Qe} ${this.raw.baf2RxAt.join(" ")} `,
          Dt = this.echo(Ot ? this.link.sendUrgent(Vt, (tt => {
            const et = tt.startsWith(qt) ? tt.slice(qt.length).split(" ")[0] : null;
            return "throttle" === et || "start" === et
          })) : this.link.send(Vt));
        this.flags.set(tt, et, Dt), Ot && this.throttle.assume(0, Dt), this.sw(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(tt) {
        this.throttle.drag(tt), this.raw && this.sw(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.sw(this.raw)
      }
      subscribe(tt) {
        return this.listeners.subscribe(tt)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var tt;
        this.throttle.release(), null === (tt = this.releaseReserve) || void 0 === tt || tt.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(tt) {
        for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
        return le(this.raw.baf2RxAt, tt, ...Vt)
      }
      echo(tt) {
        return new nf(tt, this.link, this.link.answerMs, this.now)
      }
      sw(tt) {
        var et;
        this.raw = tt;
        const Vt = this.flags.shown(tt.baf2RxFlags),
          Ot = {
            ...tt,
            baf2RxFlags: Vt,
            baf2RxTarget: this.throttle.shown(tt.baf2RxTarget),
            baf2RxState: Hw(tt, Vt)
          },
          qt = this.size.shown(Ot.baf2RxDims),
          Dt = this.throttle.pendingFor(),
          mt = [this.throttle.pendingFor(tt.baf2RxTarget), this.flags.pendingFor(tt.baf2RxFlags), this.size.pendingFor(tt.baf2RxDims)].filter((tt => null !== tt)),
          dt = mt.length > 0 ? Math.max(...mt) : null,
          jt = this.oneShots.busyIds(),
          Ht = Ot.baf2RxAt;
        let Xt, Qt, lt = null,
          Et = [Math.max(0, qt[0] - 2), Math.max(0, qt[1] - 2), Math.max(0, qt[2] - 2)];
        if (Ot.baf2RxFormed) {
          const [tt, et, Vt] = Ot.baf2RxDims;
          Et = [Math.max(0, tt - 2), Math.max(0, et - 2), Math.max(0, Vt - 2)], Xt = Array.from(Ot.baf2RxCells, Number), Qt = `${Et.join(",")}:${Ot.baf2RxCells}`
        } else {
          var ft;
          const tt = null === (ft = this.plans.planAt(Ht)) || void 0 === ft ? void 0 : ft.box,
            et = tt ? YV(tt, "reactor", ...qt) : AV(Ht, 1, ...qt, iV("reactor", qt[0])),
            Vt = this.readInterior(et);
          lt = Oj(Et, Vt), Xt = Vt, Qt = `${Et.join(",")}:${Vt.join("")}`
        }(null === (et = this.looksOf) || void 0 === et ? void 0 : et.key) !== Qt && (this.looksOf = {
          key: Qt,
          looks: Hj(Et, Xt)
        }), this.view = {
          status: Ot,
          dims: qt,
          plan: lt,
          inner: Et,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Ht),
          odConfirmed: this.odConfirmed || 0 !== (Ot.baf2RxFlags & be),
          guide: this.plans.guideOn(),
          throttlePending: null !== Dt,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== dt && dt >= 5e3,
          busy: jt,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== dt || jt.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.sw(this.raw)
        }), 250))
      }
    }
    class yw {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dw;
        this.plans = tt, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new lw, this.redraw = null, this.size = new fw(et, Vt), this.oneShots = new Dw(Vt)
      }
      set(tt) {
        !tt.baf2BatOpen && this.view && Qw(this.view.status.baf2BatAt) === Qw(tt.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(tt), this.sw(tt)
      }
      tap(tt, et) {
        if (!this.view) return;
        const Vt = Xw(this.view.status);
        this.oneShots.tap(tt, (tt => Xw(tt) !== Vt), et) && this.sw(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(tt) {
        this.size.notTaken = tt
      }
      resize(tt) {
        this.view && (this.size.il(this.plans, this.view.status.baf2BatAt, tt), this.sw(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.sw(this.view.status)
      }
      subscribe(tt) {
        return this.listeners.subscribe(tt)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      sw(tt) {
        const et = this.size.shown(tt.baf2BatDims),
          Vt = this.oneShots.busyIds();
        this.view = {
          status: tt,
          dims: et,
          uQ: uj(et, tt.baf2BatDims) ? tt.baf2BatCapacity : lj(...et),
          guide: this.plans.guideOn(),
          busy: Vt
        }, this.listeners.notify(), Vt.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.sw(this.view.status)
        }), 250))
      }
    }
    const Nw = "buildAFactory2Game:";

    function aw() {
      var tt;
      const et = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!et) return null;
      const Vt = et.querySelector(".ExitButton");
      return function(tt, et) {
        const Vt = et ? et.left - 8 : tt.right;
        return {
          left: tt.left,
          top: tt.top,
          width: Math.max(0, Vt - tt.left),
          height: tt.height
        }
      }(et.getBoundingClientRect(), null !== (tt = null === Vt || void 0 === Vt ? void 0 : Vt.getBoundingClientRect()) && void 0 !== tt ? tt : null)
    }
    const Mw = (0, Ot.memo)((function(tt) {
      let {
        store: et
      } = tt;
      const {
        t: Vt
      } = (0, Wq.H)(), [qt, Dt] = (0, Ot.useState)((() => et.get())), [mt, dt] = (0, Ot.useState)((() => performance.now()));
      (0, Ot.useEffect)((() => (Dt(et.get()), et.subscribe((() => {
        Dt(et.get()), dt(performance.now())
      })))), [et]);
      const {
        alarm: jt,
        boomAt: Ht
      } = qt, Xt = null !== jt && null !== jt.secs, [Qt, lt] = (0, Ot.useState)(null);
      (0, Ot.useEffect)((() => {
        if (!Xt) return;
        lt(aw());
        const tt = setInterval((() => {
          dt(performance.now()), lt(aw())
        }), 250);
        return () => {
          clearInterval(tt)
        }
      }), [Xt]);
      const [Et, ft] = (0, Ot.useState)(!1);
      return (0, Ot.useEffect)((() => {
        if (Ht === -1 / 0) return;
        ft(!0);
        const tt = setTimeout((() => {
          ft(!1)
        }), 1300);
        return () => {
          clearTimeout(tt)
        }
      }), [Ht]), (0, hD.jsxs)(hD.Fragment, {
        children: [null !== jt && (0, hD.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: Vt(jt.hot ? `${Nw}rxAlarmSiren` : `${Nw}rxAlarmDamaged`, {
            amount: String(jt.damage)
          })
        }), null !== jt && null !== jt.secs && (0, hD.jsx)("div", {
          className: Qt ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Qt && void 0 !== Qt ? Qt : void 0,
          "aria-live": "assertive",
          children: Vt(`${Nw}rxAlarmCountdown`, {
            amount: String((wt = jt.secs, yt = mt - jt.receivedAt, Math.max(1, Math.ceil(wt - yt / 1e3))))
          })
        }), Et && (0, hD.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var wt, yt
    }));
    class bw {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      gM(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Vt = tt.baf2RxAlarmAt.join(",");
        let Ot = this.snapshot.boomAt;
        if (tt.baf2RxAlarmBoom) this.byReactor.delete(Vt), Ot = et;
        else if (tt.baf2RxAlarmDamage <= 0) this.byReactor.delete(Vt);
        else {
          var qt;
          this.byReactor.set(Vt, {
            damage: tt.baf2RxAlarmDamage,
            secs: null !== (qt = tt.baf2RxAlarmSecs) && void 0 !== qt ? qt : null,
            hot: !0 === tt.baf2RxAlarmHot,
            receivedAt: et
          })
        }
        this.sw(Ot)
      }
      retain(tt) {
        let et = !1;
        for (const Vt of [...this.byReactor.keys()]) tt.has(Vt) || (this.byReactor.delete(Vt), et = !0);
        et && this.sw(this.snapshot.boomAt)
      }
      has(tt) {
        return this.byReactor.has(tt)
      }
      get() {
        return this.snapshot
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      sw(tt) {
        let et = null;
        for (const Vt of this.byReactor.values())(!et || Vt.damage > et.damage) && (et = Vt);
        this.snapshot = {
          alarm: et,
          boomAt: tt
        };
        for (const Vt of this.listeners) Vt()
      }
    }
    const Jw = {
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

    function Cw(tt) {
      return [tt[0], tt[1], tt[2]]
    }

    function uw(tt) {
      return `${tt[0]},${tt[1]},${tt[2]}`
    }
    class Kw {
      constructor(tt) {
        if (this.plans = tt, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var tt;
            return {
              active: this.glows.flatMap((tt => {
                let {
                  record: et
                } = tt;
                return et ? [et] : []
              })),
              log: [...null !== (tt = this.devLog) && void 0 !== tt ? tt : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var tt;
        return null !== (tt = this.devLog) && void 0 !== tt ? tt : []
      }
      check(tt, et, Vt) {
        const Ot = new Set(et.map((tt => uw(tt.box.ctrl))));
        for (const mt of function(tt, et) {
            const Vt = [],
              Ot = new Map(tt);
            tt.clear();
            for (const qt of et) {
              const et = Ef(qt.box.ctrl),
                Dt = qt.formed ? qt.level : 0;
              tt.set(et, Dt), Dt > 0 && 0 === Ot.get(et) && Vt.push(qt)
            }
            return Vt
          }(this.levels, this.plans.all())) Ot.has(uw(mt.box.ctrl)) && this.show(tt, mt, "on", Vt);
        const qt = this.plans.lastFormed();
        if (null === qt || qt.receivedAt <= this.flashedAt) return null;
        this.flashedAt = qt.receivedAt;
        const Dt = function(tt, et) {
          var Vt;
          const Ot = Ef(tt);
          return null !== (Vt = et.find((tt => Ef(tt.box.ctrl) === Ot))) && void 0 !== Vt ? Vt : null
        }(qt.ctrl, et);
        return Dt && this.show(tt, Dt, "formed", Vt), Dt
      }
      fade(tt, et) {
        0 !== this.glows.length && (this.glows = this.glows.filter((Vt => {
          let {
            mesh: Ot,
            glow: qt,
            startMs: Dt,
            record: mt
          } = Vt;
          const dt = (et - Dt) / Jw[qt].ms;
          return dt >= 1 ? (tt.disposeGameMesh(Ot), mt && (mt.endMs = et), !1) : (tt.setGameMesh(Ot, {
            visibility: "formed" === qt ? 1 - dt : Math.sin(Math.PI * dt)
          }), !0)
        })))
      }
      dispose(tt) {
        for (const {
            mesh: Vt
          }
          of this.glows) tt.disposeGameMesh(Vt);
        this.glows = [], this.levels.clear();
        const et = "undefined" !== typeof window ? window : null;
        (null === et || void 0 === et ? void 0 : et.baf2Glows) === this.devAccessor && delete et.baf2Glows
      }
      show(tt, et, Vt, Ot) {
        const {
          lo: qt,
          hi: Dt
        } = Lj(et.box);
        let mt = null;
        this.devLog && (mt = {
          glow: Vt,
          ctrl: Cw(et.box.ctrl),
          lo: Cw(qt),
          hi: Cw(Dt),
          startMs: Ot,
          endMs: null
        }, this.devLog.push(mt), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(tt, Vt, Fj(qt, Dt, Jw[Vt].thick)),
          glow: Vt,
          startMs: Ot,
          record: mt
        })
      }
      build(tt, et, Vt) {
        const Ot = Mf(tt, Vt, {
          rgb: Jw[et].colour,
          alpha: 1
        });
        return tt.setGameMesh(Ot, {
          visibility: 0
        }), Ot
      }
    }
    const hw = 1 / .6,
      vw = {
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
        blendMode: kd.f.Standard,
        soft: !0
      },
      Ww = {
        ...vw,
        size: [.25, .4],
        count: 2
      };

    function Sw(tt) {
      return {
        colours: [tt, tt],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: kd.f.Add,
        soft: !1
      }
    }
    const Rw = Sw([150, 225, 255]),
      Iw = Sw([185, 145, 255]),
      Pw = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function Zw(tt) {
      const et = Le[tt];
      return null === et.fuelSlot || DV(et) ? Pw.includes(tt) ? Iw : Rw : vw
    }
    const Lw = {
        kind: "smokePuff"
      },
      Fw = [.2, .025, .2];

    function kw(tt, et) {
      const [
        [Vt, Ot, qt],
        [Dt, mt, dt]
      ] = tt.colours;
      return {
        texture: tt.soft ? Lw : "square_particle",
        uQ: et,
        minLifeTime: tt.life[0] / hw,
        maxLifeTime: tt.life[1] / hw,
        minEmitPower: tt.power[0] * hw,
        maxEmitPower: tt.power[1] * hw,
        minSize: tt.size[0],
        maxSize: tt.size[1],
        emitRate: 0,
        gravity: [0, tt.lift * hw * hw, 0],
        dir1: [-tt.spread, 1, -tt.spread],
        dir2: [tt.spread, 1, tt.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [Vt, Ot, qt, tt.alpha],
          maxColor: [Dt, mt, dt, tt.alpha]
        }, {
          timeFraction: 1,
          minColor: [Vt, Ot, qt, 0],
          maxColor: [Dt, mt, dt, 0]
        }],
        blendMode: tt.blendMode
      }
    }
    class Gw {
      constructor(tt) {
        this.fixed = tt, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(tt, et, Vt) {
        var Ot;
        if (Vt === this.lastFrame) return !1;
        this.lastFrame = Vt;
        const qt = this.at;
        qt[0] = et[0] + .5, qt[1] = et[1] + 1.025, qt[2] = et[2] + .5;
        const Dt = null !== (Ot = this.fixed) && void 0 !== Ot ? Ot : dt() ? Ww : vw;
        let mt = this.particles.get(Dt);
        return mt || (mt = tt.createParticles(function(tt) {
          return kw(tt, Math.ceil(12 * tt.count * tt.life[1]) + tt.count)
        }(Dt), {
          pos: qt,
          half: Fw
        }), this.particles.set(Dt, mt)), mt.moveTo(qt), mt.emit(Dt.count), !0
      }
      dispose() {
        for (const tt of this.particles.values()) tt.stop();
        this.particles.clear()
      }
    }
    class zw {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(tt) {
        this.indexed = !0;
        for (const et of Se) {
          const Vt = Zw(et);
          for (let Ot = 1; Ot <= 4; Ot++) {
            const qt = tt.blockNameToBlockId(`${et}|meta|rot${Ot}|Running`, !0);
            if (null === qt) continue;
            let Dt = this.pufferIndexByStyle.get(Vt);
            void 0 === Dt && (Dt = this.pufferList.push(new Gw(Vt === vw ? null : Vt)) - 1, this.pufferIndexByStyle.set(Vt, Dt)), this.pufferIndexById[qt] = Dt + 1
          }
        }
      }
      onAfterRender(tt, et) {
        this.indexed || this.index(tt);
        const Vt = performance.now(),
          Ot = 0 === this.lastMs ? 0 : Math.min(Vt - this.lastMs, 250) / 1e3;
        this.lastMs = Vt, this.frame++, tt.particlesEnabled() ? (this.scan(tt, et), this.puff(tt, Ot)) : this.sources = []
      }
      dispose() {
        for (const tt of this.pufferList) tt.dispose();
        this.sources = [], this.found = []
      }
      scan(tt, et) {
        0 === this.scanRow && (this.origin = [Math.floor(et[0]) - 12, Math.floor(et[1]) - 6, Math.floor(et[2]) - 12]);
        const Vt = Math.min(this.scanRow + 16, 325),
          [Ot, qt, Dt] = this.origin,
          mt = this.hits;
        mt.length = 0;
        for (let dt = this.scanRow; dt < Vt; dt++) {
          const et = Ot + dt % 25,
            Vt = qt + Math.floor(dt / 25);
          tt.scanBlocks(et, Vt, Dt, et + 1, Vt + 1, Dt + 25, this.pufferIndexById, mt)
        }
        for (let dt = 0; dt < mt.length; dt += 4) {
          const tt = mt[dt + 3];
          this.found.push({
            pos: [mt[dt], mt[dt + 1], mt[dt + 2]],
            qd: tt,
            puffer: this.pufferList[this.pufferIndexById[tt] - 1]
          })
        }
        this.scanRow = Vt, 325 === Vt && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(tt, et) {
        const Vt = this.sources.length;
        if (0 !== Vt) {
          this.budget = Math.min(this.budget + Math.min(Vt / 1.2, 12) * et, 2);
          for (let et = 0; et < Vt && this.budget >= 1; et++) {
            const et = this.sources[this.cursor % Vt];
            this.cursor = (this.cursor + 1) % Vt, tt.getBlockId(et.pos[0], et.pos[1], et.pos[2]) === et.qd && (et.puffer.puff(tt, et.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const ow = {
        ...Sw([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      rw = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function Uw(tt) {
      return 0 === tt.spots.length ? 0 : Math.min(1 * tt.level, 4)
    }

    function Aw(tt) {
      return 0 === tt.glass.length ? 0 : Math.min(.75 * tt.level, 3)
    }

    function iw(tt) {
      return `${tt.ctrl.join(",")}:${tt.rot}:${tt.cu},${tt.cv}:${tt.w},${tt.h},${tt.d}`
    }

    function Yw(tt, et) {
      const Vt = et.w - 2,
        Ot = et.h - 2,
        qt = et.d - 2,
        Dt = [];
      for (let mt = 0; mt < Vt * Ot * qt; mt++) {
        const dt = mt % Vt,
          jt = Math.floor(mt / Vt) % qt,
          Ht = Math.floor(mt / (Vt * qt));
        if (dt > 0 && dt < Vt - 1 && jt > 0 && jt < qt - 1 && Ht > 0 && Ht < Ot - 1) continue;
        const Xt = nV(et, OO(et, mt)),
          Qt = Gf(tt, Xt);
        if (null !== Qt && "Fuel Rod" === IV(Qt))
          for (const et of rw) {
            const Vt = [Xt[0] + et[0], Xt[1] + et[1], Xt[2] + et[2]];
            pw(tt, Vt) && Dt.push(xw(Vt, et))
          }
      }
      return Dt
    }

    function Bw(tt, et) {
      const {
        lo: Vt,
        hi: Ot
      } = Lj(et), qt = [];
      for (let Dt = Vt[0]; Dt < Ot[0]; Dt++)
        for (let et = Vt[1]; et < Ot[1]; et++) {
          const mt = Dt === Vt[0] || Dt === Ot[0] - 1 || et === Vt[1] || et === Ot[1] - 1 ? 1 : Math.max(1, Ot[2] - 1 - Vt[2]);
          for (let dt = Vt[2]; dt < Ot[2]; dt += mt) {
            const mt = [Dt, et, dt];
            if (!pw(tt, mt)) continue;
            const jt = Dt === Vt[0] ? rw[1] : Dt === Ot[0] - 1 ? rw[0] : dt === Vt[2] ? rw[5] : dt === Ot[2] - 1 ? rw[4] : et === Vt[1] ? rw[3] : rw[2];
            qt.push(xw(mt, jt))
          }
        }
      return qt
    }

    function pw(tt, et) {
      const Vt = Gf(tt, et);
      return null !== Vt && "Reactor Glass" === IV(Vt)
    }

    function xw(tt, et) {
      return [
        [tt[0] + .5 + .55 * et[0], tt[1] + .5 + .55 * et[1], tt[2] + .5 + .55 * et[2]],
        [0 === et[0] ? .4 : .02, 0 === et[1] ? .4 : .02, 0 === et[2] ? .4 : .02]
      ]
    }
    class Tw {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(tt, et, Vt, Ot) {
        const qt = [],
          Dt = new Set;
        for (const Ht of et) {
          var mt, dt, jt;
          const {
            box: et
          } = Ht;
          if ("reactor" !== Ht.kind || Ht.level <= 0 || (et.ctrl[0] - Vt[0]) ** 2 + (et.ctrl[1] - Vt[1]) ** 2 + (et.ctrl[2] - Vt[2]) ** 2 > 576) continue;
          const Xt = iw(et);
          Dt.add(Xt);
          let Qt = this.spots.get(Xt);
          if ((!Qt || Ot - Qt.at > 3e3) && (Qt = {
              at: Ot,
              spots: Yw(tt, et),
              glass: Bw(tt, et)
            }, this.spots.set(Xt, Qt)), 0 === Qt.spots.length && 0 === Qt.glass.length) continue;
          const lt = this.sparking.find((tt => tt.key === Xt));
          qt.push({
            key: Xt,
            level: Ht.level,
            spots: Qt.spots,
            glass: Qt.glass,
            budget: null !== (mt = null === lt || void 0 === lt ? void 0 : lt.budget) && void 0 !== mt ? mt : 0,
            cursor: null !== (dt = null === lt || void 0 === lt ? void 0 : lt.cursor) && void 0 !== dt ? dt : 0,
            glassBudget: null !== (jt = null === lt || void 0 === lt ? void 0 : lt.glassBudget) && void 0 !== jt ? jt : 0
          })
        }
        for (const Ht of this.spots.keys()) Dt.has(Ht) || this.spots.delete(Ht);
        this.sparking = qt
      }
      emit(tt, et, Vt) {
        var Ot;
        if (0 === this.sparking.length || !tt.particlesEnabled() || Vt === this.lastFrame) return;
        this.lastFrame = Vt;
        let qt = 0,
          Dt = 0;
        for (const ft of this.sparking) qt += Uw(ft), Dt += Aw(ft);
        const mt = qt > 8 ? 8 / qt : 1,
          dt = Dt > 6 ? 6 / Dt : 1;
        let jt, Ht = null,
          Xt = null;
        for (const ft of this.sparking) ft.budget = Math.min(ft.budget + Uw(ft) * mt * et, 2), ft.budget >= 1 && (!Ht || ft.budget > Ht.budget) && (Ht = ft), ft.glassBudget = Math.min(ft.glassBudget + Aw(ft) * dt * et, 2), ft.glassBudget >= 1 && (!Xt || ft.glassBudget > Xt.glassBudget) && (Xt = ft);
        if (Ht) Ht.budget--, jt = Ht.spots[Ht.cursor++ % Ht.spots.length];
        else {
          if (!Xt) return;
          Xt.glassBudget--, jt = Xt.glass[Math.floor(Math.random() * Xt.glass.length)]
        }
        const [Qt, lt] = jt, Et = null !== (Ot = this.emitter) && void 0 !== Ot ? Ot : this.create(tt, Qt, lt);
        Et.moveTo(Qt, lt), Et.emit(ow.count)
      }
      dispose() {
        var tt;
        null === (tt = this.emitter) || void 0 === tt || tt.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(tt, et, Vt) {
        const Ot = Math.ceil(14 * ow.count * ow.life[1]) + ow.count;
        return this.emitter = tt.createParticles(kw(ow, Ot), {
          pos: et,
          half: Vt
        }), this.emitter
      }
    }
    const gw = [2, 3.2],
      sw = 1 / 3,
      nw = 1 / .6,
      ty = {
        texture: Lw,
        uQ: Math.ceil(18 * gw[1]) + 4,
        minLifeTime: gw[0] / nw,
        maxLifeTime: gw[1] / nw,
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
        blendMode: kd.f.Standard
      };
    class ey {
      constructor(tt) {
        this.plans = tt, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new Tw, this.frame = 0, this.outline = new Kw(tt)
      }
      onAfterRender(tt, et, Vt) {
        const Ot = performance.now(),
          qt = 0 === this.lastMs ? 0 : Math.min(Ot - this.lastMs, 250) / 1e3;
        if (this.lastMs = Ot, this.outline.fade(tt, Ot), this.puff(tt, qt, Vt), this.sparks.emit(tt, qt, this.frame++), Ot - this.lastCheckMs < 150) return;
        this.lastCheckMs = Ot;
        const Dt = this.plans.all().filter((tt => tt.formed && Vy(tt.box.ctrl, Vt) <= 4096));
        this.plumes = Dt.filter((tt => "reactor" === tt.kind && tt.level > 0)).map((tt => ({
          box: tt.box,
          level: tt.level
        }))), this.updateHums(tt, et, Dt, Vt), this.sparks.update(tt, Dt, Vt, Ot), this.chimeFormed(tt, et, Dt, Ot)
      }
      dispose(tt) {
        var et;
        this.outline.dispose(tt), null === (et = this.steam) || void 0 === et || et.dispose(), this.steam = null, this.sparks.dispose();
        for (const Vt of this.hums.values()) Vt.stop();
        this.hums.clear()
      }
      chimeFormed(tt, et, Vt, Ot) {
        const qt = this.outline.check(tt, Vt, Ot);
        qt && tt.playSound(et, "exp_levelup", .6, 1, {
          qt: [qt.box.ctrl[0] + .5, qt.box.ctrl[1], qt.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(tt, et, Vt) {
        const Ot = this.plumes;
        if (0 === Ot.length || !tt.particlesEnabled()) return void(this.plumeBudget = 0);
        const qt = Ot.reduce(((tt, et) => tt + 3 * et.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + qt * et, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let Dt = this.plumeCursor % (qt / 3);
        this.plumeCursor++;
        let mt = Ot[0];
        for (const Qt of Ot) {
          if (Dt < Qt.level) {
            mt = Qt;
            break
          }
          Dt -= Qt.level
        }
        const {
          lo: dt,
          hi: jt
        } = Lj(mt.box);
        if (function(tt, et, Vt) {
            const Ot = Math.max(tt[0] - Vt[0], 0, Vt[0] - et[0]),
              qt = Math.max(tt[2] - Vt[2], 0, Vt[2] - et[2]);
            return Math.hypot(Ot, Vt[1] - et[1], qt)
          }(dt, jt, Vt) < 6 && Math.random() > sw) return;
        const Ht = [(dt[0] + jt[0]) / 2, jt[1] + .05, (dt[2] + jt[2]) / 2],
          Xt = [(jt[0] - dt[0]) / 2 - .5, .05, (jt[2] - dt[2]) / 2 - .5];
        this.steam ??= tt.createParticles(ty, {
          pos: Ht,
          half: Xt
        }), this.steam.moveTo(Ht, Xt), this.steam.emit(1)
      }
      updateHums(tt, et, Vt, Ot) {
        const qt = new Map;
        for (const mt of Vt) "reactor" === mt.kind && mt.level > 0 && Vy(mt.box.ctrl, Ot) <= 576 && qt.set(`${Dt=mt.box.ctrl,`${Dt[0]},${Dt[1]},${Dt[2]}`}:${mt.level}`, mt);
        var Dt;
        for (const [mt, dt] of this.hums) qt.has(mt) || (dt.stop(), this.hums.delete(mt));
        for (const [mt, dt] of qt) {
          if (this.hums.has(mt)) continue;
          const {
            lo: Vt,
            hi: Ot
          } = Lj(dt.box), qt = [(Vt[0] + Ot[0]) / 2, Vt[1], (Vt[2] + Ot[2]) / 2], Dt = tt.playSound(et, "rocketEngineLoop", .08 + .06 * dt.level, .55, {
            qt: qt,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          Dt && this.hums.set(mt, Dt)
        }
      }
    }

    function Vy(tt, et) {
      return (tt[0] - et[0]) ** 2 + (tt[1] - et[1]) ** 2 + (tt[2] - et[2]) ** 2
    }
    class Oy {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      gM(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Ot = [tt.baf2BombAt[0], tt.baf2BombAt[1], tt.baf2BombAt[2]],
          qt = tt.baf2BombR;
        if (tt.baf2BombBoom) {
          const tt = Math.hypot(et[0] - Ot[0], et[1] - Ot[1], et[2] - Ot[2]);
          this.sw({
            fuse: null,
            blast: {
              at: Ot,
              r: qt,
              receivedAt: Vt,
              distance: tt,
              flash: tt <= 3 * qt
            }
          })
        } else this.sw({
          ...this.snapshot,
          fuse: tt.baf2BombMs > 0 ? {
            at: Ot,
            r: qt,
            endsAt: Vt + tt.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      sw(tt) {
        this.snapshot = tt;
        for (const et of this.listeners) et()
      }
    }
    const qy = (0, Ot.memo)((function(tt) {
      var et;
      let {
        store: Vt
      } = tt;
      const {
        t: qt
      } = (0, Wq.H)(), [Dt, mt] = (0, Ot.useState)((() => Vt.get())), [dt, jt] = (0, Ot.useState)((() => performance.now()));
      (0, Ot.useEffect)((() => (mt(Vt.get()), Vt.subscribe((() => {
        mt(Vt.get()), jt(performance.now())
      })))), [Vt]);
      const {
        fuse: Ht,
        blast: Xt
      } = Dt;
      (0, Ot.useEffect)((() => {
        if (!Ht) return;
        const tt = setInterval((() => {
          jt(performance.now())
        }), 250);
        return () => {
          clearInterval(tt)
        }
      }), [Ht]);
      const [Qt, lt] = (0, Ot.useState)(!1);
      (0, Ot.useEffect)((() => {
        if (null === Xt || void 0 === Xt || !Xt.flash) return;
        lt(!0);
        const tt = setTimeout((() => {
          lt(!1)
        }), 2500);
        return () => {
          clearTimeout(tt)
        }
      }), [Xt]);
      const Et = Ht ? function(tt, et) {
        return tt.endsAt <= et ? 0 : Math.ceil((tt.endsAt - et) / 1e3)
      }(Ht, dt) : 0;
      return (0, hD.jsxs)(hD.Fragment, {
        children: [Et > 0 && (0, hD.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: qt("buildAFactory2Game:bombCountdown", {
            amount: String(Et),
            radius: String(null !== (et = null === Ht || void 0 === Ht ? void 0 : Ht.r) && void 0 !== et ? et : 0)
          })
        }), Qt && (0, hD.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Dy(tt) {
      const et = Math.min(4, Math.max(1, tt / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * tt / 4)),
        capSpread: Math.min(5 * tt / 8, 24 * et),
        capThick: 6 * et,
        stemHalfWidth: 3 * et,
        puffScale: et
      }
    }
    class my {
      constructor() {
        this.Pd = !1
      }
      hold(tt) {
        tt.getCameraFar() < 1e3 && (tt.setCameraFar(1e3), this.Pd = !0)
      }
      release(tt) {
        this.Pd && (this.Pd = !1, tt.setCameraFar(null))
      }
    }
    const dy = 1 / .6,
      jy = [.2, .1, .2],
      Hy = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Xy = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: kd.f.Standard,
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
      Qy = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: kd.f.Standard,
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
      ly = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: kd.f.Standard,
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
      Ey = {
        texture: Lw,
        uQ: Math.ceil(120) + 4,
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
        blendMode: kd.f.Add
      };
    class fy {
      constructor(tt) {
        this.store = tt, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new my, this.timers = []
      }
      onAfterRender(tt, et) {
        const Vt = performance.now(),
          Ot = 0 === this.lastMs ? 0 : Math.min(Vt - this.lastMs, 250) / 1e3;
        this.lastMs = Vt;
        const {
          fuse: qt,
          blast: Dt
        } = this.store.get();
        null !== Dt && Dt !== this.shownBlast && (this.shownBlast = Dt, this.startBlast(tt, et, Dt, Vt));
        const mt = tt.particlesEnabled();
        null !== qt && qt.endsAt > Vt && mt ? this.emitBeacon(tt, qt, Ot, Vt) : this.beaconBudget = 0, null !== this.cloud && (Vt - this.cloud.startMs > 33e3 ? this.disposeCloud(tt) : (this.far.hold(tt), mt && this.emitCloud(tt, Ot, Vt)))
      }
      dispose(tt) {
        var et;
        null === (et = this.beacon) || void 0 === et || et.dispose(), this.beacon = null, this.disposeCloud(tt);
        for (const Vt of this.timers) clearTimeout(Vt);
        this.timers.length = 0
      }
      emitBeacon(tt, et, Vt, Ot) {
        const qt = et.endsAt - Ot < 5e3 ? 350 : 1e3,
          Dt = .5 + .5 * Math.sin(2 * Math.PI * Ot / qt);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * Dt * Vt, 4), this.beaconBudget < 1) return;
        const mt = Math.floor(this.beaconBudget);
        this.beaconBudget -= mt;
        const [dt, jt, Ht] = et.at, Xt = [dt + .5, jt + 1.1, Ht + .5];
        this.beacon ??= tt.createParticles(Ey, {
          pos: Xt,
          half: jy
        }), this.beacon.moveTo(Xt), this.beacon.emit(mt)
      }
      startBlast(tt, et, Vt, Ot) {
        var qt;
        null === (qt = this.beacon) || void 0 === qt || qt.dispose(), this.beacon = null, this.disposeCloud(tt);
        const Dt = (0, Ld.isMobile)() ? .5 : 1;
        this.streams = [Xy, Qy, ly].map((tt => {
          const et = Math.round(tt.count * Dt);
          return {
            spec: tt,
            particles: null,
            rate: et / ((tt.toMs - tt.fromMs) / 1e3),
            budget: 0,
            left: et
          }
        })), this.cloud = {
          blast: Vt,
          startMs: Ot
        };
        const mt = Math.max(.25, 1 - Vt.distance / (6 * Vt.r)),
          dt = Vt.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [Vt, Ot, qt] of Hy) yy(tt, et, Vt, mt * Ot, qt)
        }), dt))
      }
      emitCloud(tt, et, Vt) {
        const {
          blast: Ot,
          startMs: qt
        } = this.cloud, Dt = Vt - qt, [mt, dt, jt] = Ot.at, Ht = Dy(Ot.r);
        for (const Xt of this.streams) {
          const {
            spec: Vt
          } = Xt;
          if (Xt.left <= 0 || Dt < Vt.fromMs) continue;
          Xt.budget += Xt.rate * et;
          const qt = Math.min(Math.floor(Xt.budget), Xt.left);
          if (qt < 1) continue;
          Xt.budget -= qt, Xt.left -= qt;
          const Qt = Xt.particles ??= this.createStream(tt, Vt, Ot);
          if (Vt === Xy) {
            const tt = Ht.stemHalfWidth;
            Qt.moveTo([mt, dt + 1, jt], [tt, 1, tt])
          } else if (Vt === Qy) {
            const tt = Ht.capSpread * Math.min(1, (Dt - Vt.fromMs) / 3e3),
              et = Math.sqrt(Math.random()),
              Ot = 2 * Math.random() * Math.PI,
              qt = Math.cos(Ot) * et,
              Xt = Math.sin(Ot) * et,
              lt = mt + qt * tt,
              Et = jt + Xt * tt,
              ft = Ht.capThick,
              wt = dt + Ht.capHeight + ft * (1 - et * et) * 2;
            Qt.setDirections([.7 * qt, .05, .7 * Xt], [qt, .2, Xt]), Qt.moveTo([lt, wt, Et], [ft, ft, ft])
          } else {
            this.ringAngle += 2.39996;
            const tt = Math.cos(this.ringAngle),
              et = Math.sin(this.ringAngle);
            Qt.setDirections([tt, .05, et], [tt, .1, et]), Qt.moveTo([mt + 2 * tt, dt + .5, jt + 2 * et], [0, .5, 0])
          }
          Qt.emit(qt)
        }
      }
      createStream(tt, et, Vt) {
        const {
          r: Ot
        } = Vt, qt = Math.max(et.life[0], Ot / 25), Dt = et === ly ? [.9 * qt, qt] : et.life, mt = Dy(Ot), dt = et === ly ? 1 : mt.puffScale, jt = {
          texture: Lw,
          uQ: et.count + 4,
          minLifeTime: Dt[0] / dy,
          maxLifeTime: Dt[1] / dy,
          minSize: et.size[0] * dt,
          maxSize: et.size[1] * dt,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, et.gravity * dy * dy, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: et.from[0],
            maxColor: et.from[1]
          }, {
            timeFraction: .6,
            minColor: wy(et.from[0], et.to[0]),
            maxColor: wy(et.from[1], et.to[1])
          }, {
            timeFraction: 1,
            minColor: et.to[0],
            maxColor: et.to[1]
          }],
          blendMode: et.blend
        };
        if (et === Xy) {
          const tt = mt.capHeight / ((Dt[0] + Dt[1]) / 2);
          jt.minEmitPower = .9 * tt * dy, jt.maxEmitPower = 1.05 * tt * dy, jt.dir1 = [-.1, 1, -.1], jt.dir2 = [.1, 1, .1]
        } else et === Qy ? (jt.minEmitPower = 1.2, jt.maxEmitPower = 2, jt.dir1 = [-1, .05, -1], jt.dir2 = [1, .2, 1]) : (jt.minEmitPower = 39.583333333333336, jt.maxEmitPower = 41.66666666666667, jt.dir1 = [1, 0, 0], jt.dir2 = [1, 0, 0]);
        return tt.createParticles(jt, {
          pos: Vt.at
        })
      }
      disposeCloud(tt) {
        for (const Vt of this.streams) {
          var et;
          null === (et = Vt.particles) || void 0 === et || et.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(tt)
      }
    }

    function wy(tt, et) {
      return [(tt[0] + et[0]) / 2, (tt[1] + et[1]) / 2, (tt[2] + et[2]) / 2, .75 * tt[3]]
    }

    function yy(tt, et, Vt, Ot, qt) {
      try {
        tt.playSound(et, Vt, Ot, qt)
      } catch (Dt) {
        console.error(Dt)
      }
    }
    const Ny = {
        uQ: 720,
        perS: 100
      },
      ay = {
        uQ: 320,
        perS: 44
      };
    class My {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(tt, et) {
        this.zone = {
          centre: [...tt.centre],
          r: tt.r,
          band: tt.band ? [tt.band[0], tt.band[1]] : void 0
        }, this.endsAt = et
      }
      stop() {
        this.zone = null
      }
      gM(tt, et) {
        const {
          baf2FalloutMs: Vt,
          baf2FalloutAt: Ot,
          baf2FalloutR: qt,
          baf2FalloutY: Dt
        } = tt;
        Vt > 0 && Ot && void 0 !== qt ? this.start({
          centre: Ot,
          r: qt,
          band: Dt
        }, et + Vt) : this.stop()
      }
      perS(tt, et, Vt) {
        const Ot = this.zone;
        if (!Ot) return 0;
        const qt = this.endsAt - tt;
        return qt <= 0 ? (this.zone = null, 0) : Ot.band && (et[1] < Ot.band[0] || et[1] > Ot.band[1]) || Math.hypot(et[0] - Ot.centre[0], et[2] - Ot.centre[2]) > Ot.r ? 0 : Vt.perS * Math.min(1, qt / 5e3)
      }
    }
    const by = [5, 7],
      Jy = [24, 8, 24],
      Cy = .5,
      uy = 1 / .6,
      Ky = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class hy {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ld.isMobile)();
        this.state = new My, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(tt) {
          return tt ? ay : Ny
        }(tt)
      }
      startFallout(tt, et) {
        this.state.start(tt, et)
      }
      stopFallout() {
        this.state.stop()
      }
      gM(tt) {
        this.state.gM(tt, performance.now())
      }
      onAfterRender(tt, et) {
        var Vt;
        const Ot = performance.now(),
          qt = 0 === this.lastMs ? 0 : Math.min(Ot - this.lastMs, 250) / 1e3;
        this.lastMs = Ot;
        const Dt = this.state.perS(Ot, et, this.tier);
        if (Dt <= 0 || !tt.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + Dt * qt, Dt / 4);
        const mt = Math.floor(this.budget);
        if (mt < 1) return;
        this.budget -= mt;
        const dt = this.at;
        dt[0] = et[0], dt[1] = et[1] + 12, dt[2] = et[2];
        const jt = null !== (Vt = this.systems) && void 0 !== Vt ? Vt : this.create(tt, dt),
          Ht = this.amounts;
        Ht[0] = 0, Ht[1] = 0;
        for (let Xt = 0; Xt < mt; Xt++) Ht[Math.random() < .3 ? 1 : 0]++;
        for (let Xt = 0; Xt < jt.length; Xt++) Ht[Xt] > 0 && (jt[Xt].moveTo(dt, Jy), jt[Xt].emit(Ht[Xt]))
      }
      dispose() {
        for (const et of null !== (tt = this.systems) && void 0 !== tt ? tt : []) {
          var tt;
          et.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(tt, et) {
        return this.systems = Ky.map((Vt => {
          let {
            rgba: [Ot, qt, Dt, mt],
            share: dt
          } = Vt;
          const jt = {
            texture: "square_particle",
            uQ: Math.ceil(this.tier.uQ * dt),
            minLifeTime: by[0] / uy,
            maxLifeTime: by[1] / uy,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Cy, -1, Cy],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Ot, qt, Dt, 0]
            }, {
              timeFraction: .15,
              minColor: [Ot, qt, Dt, mt]
            }, {
              timeFraction: .8,
              minColor: [Ot, qt, Dt, mt]
            }, {
              timeFraction: 1,
              minColor: [Ot, qt, Dt, 0]
            }],
            blendMode: kd.f.Standard
          };
          return tt.createParticles(jt, {
            pos: et,
            half: Jy
          })
        })), this.systems
      }
    }
    const vy = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Wy(tt) {
      const et = /\|rot(\d)/.exec(tt);
      return vy[et ? Number(et[1]) : 1]
    }
    var Sy = Vt(707),
      cy = Vt(38690);
    const Ry = new Set(Sy.o);

    function Iy(tt) {
      if (-2 !== tt.count) return null;
      const et = it(tt.item);
      return null !== et && Ry.has(et) ? et : null
    }

    function Py(tt) {
      const {
        width: et,
        height: Vt
      } = (0, cy.c)(tt).hitBoxDimensions;
      return .55 / Math.max(et, Vt)
    }

    function Zy(tt, et, Vt) {
      if (!Vt) return !1;
      const Ot = tt[0] + .5 - et[0],
        qt = tt[1] + .5 - et[1],
        Dt = tt[2] + .5 - et[2];
      return Ot * Ot + qt * qt + Dt * Dt <= 576
    }

    function Ly(tt, et) {
      return Math.atan2(tt[0], tt[2]) + Math.PI + et
    }

    function Fy(tt, et) {
      const Vt = 2 * Math.PI;
      return (tt + Vt * et / 1e4) % Vt
    }
    class ky {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = tt, this.now = et, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = tt.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(tt, et) {
        if (0 === this.farms.size) return;
        const Vt = this.now(),
          Ot = Number.isNaN(this.frameMs) ? 0 : Math.min(Vt - this.frameMs, 100);
        this.frameMs = Vt, Vt - this.checkedMs >= 1e3 && (this.checkedMs = Vt, this.check(tt, et));
        for (const qt of this.farms.values()) qt.shown && qt.running && null !== qt.model && Ot > 0 && (qt.spin = Fy(qt.spin, Ot), qt.model.setPose(qt.feet, Ly(qt.front, qt.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const tt of this.farms.values()) this.drop(tt);
        this.farms.clear()
      }
      sync() {
        const tt = new Set;
        for (const et of this.labels.list()) {
          const Vt = Iy(et);
          if (null === Vt) continue;
          tt.add(et.key);
          const Ot = this.farms.get(et.key);
          if ((null === Ot || void 0 === Ot ? void 0 : Ot.mob) === Vt) continue;
          Ot && this.drop(Ot);
          const [qt, Dt, mt] = et.pos;
          this.farms.set(et.key, {
            pos: et.pos,
            feet: [qt + .5, Dt + 1, mt + .5],
            mob: Vt,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [et, Vt] of this.farms) tt.has(et) || (this.drop(Vt), this.farms.delete(et));
        this.checkedMs = -1 / 0
      }
      check(tt, et) {
        for (const Vt of this.farms.values()) {
          const [Ot, qt, Dt] = Vt.pos, mt = Gf(tt, Vt.pos);
          null !== mt && IV(mt) === Ft && Zy(Vt.pos, et, "Air" === Gf(tt, [Ot, qt + 1, Dt])) ? (Vt.running = mt.endsWith("|Running"), Vt.front = Wy(mt), null === Vt.model && (Vt.model = tt.createMobModel(Vt.mob, Py(Vt.mob)), null === Vt.model) || (Vt.model.setPose(Vt.feet, Ly(Vt.front, Vt.spin)), Vt.shown || (Vt.model.setVisible(!0), Vt.shown = !0))) : (Vt.shown && null !== Vt.model && Vt.model.setVisible(!1), Vt.shown = !1)
        }
      }
      drop(tt) {
        var et;
        null === (et = tt.model) || void 0 === et || et.dispose(), tt.model = null, tt.shown = !1
      }
    }
    class Gy {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(tt) {
        var et;
        this.island = tt.baf2ColIsland, this.islandSite = (et = tt.baf2ColSite) && 8 === et.length ? {
          spawnXZ: [et[0], et[1]],
          coreXZ: [et[2], et[3]],
          minXZ: [et[4], et[5]],
          maxXZ: [et[6], et[7]]
        } : null, this.views = tt.baf2ColList.map((tt => ({
          entry: dq(tt)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(tt) {
        this.status = tt, this.emit()
      }
      onOpen(tt) {
        this.openHeld = tt
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
        return this.views.map((tt => tt.entry))
      }
      entryAtRoot(tt) {
        var et;
        return null === (et = this.views.find((et => {
          let {
            entry: Vt
          } = et;
          return Vt.focus[0] === tt[0] && Vt.focus[1] === tt[1] + 1 && Vt.focus[2] === tt[2]
        }))) || void 0 === et ? void 0 : et.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(tt, et) {
        return Uj(this.entries(), tt, et)
      }
      lookSource() {
        return {
          handles: tt => EO(tt) >= 0 || fO(tt),
          line: (tt, et) => this.lookLine(tt, et),
          version: () => this.beamsVersion
        }
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const tt of this.listeners) tt()
      }
    }
    const zy = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((tt => tt / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((tt => [tt, tt + 1, tt + 2, tt, tt + 2, tt + 3]))
    };

    function oy(tt, et, Vt, Ot, qt, Dt, mt) {
      let dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const jt = Math.cos(dt),
        Ht = Math.sin(dt),
        Xt = tt.positions.length / 3,
        {
          positions: Qt,
          indices: lt
        } = zy;
      for (let Et = 0; Et < Qt.length; Et += 3) {
        const dt = Qt[Et] * qt,
          Xt = Qt[Et + 2] * mt;
        tt.positions.push(et + dt * jt + Xt * Ht, Vt + Qt[Et + 1] * Dt, Ot - dt * Ht + Xt * jt)
      }
      for (const Et of lt) tt.indices.push(Xt + Et)
    }

    function ry(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return et < 1 ? {
        rgb: tt,
        alpha: et
      } : {
        rgb: tt,
        alpha: 1,
        opaque: !0
      }
    }
    class Uy {
      constructor(tt, et) {
        this.style = tt, this.perSource = et, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(tt) {
        this.sources = tt, 0 === tt.length && (this.budget = 0)
      }
      BQ(tt, et, Vt) {
        const Ot = this.sources.length;
        if (0 !== Ot) {
          var qt, Dt;
          this.budget = Math.min(this.budget + (qt = Ot, Dt = this.perSource, Math.min(qt * Dt, OH) * et), 2);
          for (let et = 0; et < Ot && this.budget >= 1; et++) {
            const et = this.sources[this.cursor % Ot];
            this.cursor = (this.cursor + 1) % Ot;
            if (!(Math.max(Math.abs(et.x - Vt[0]), Math.abs(et.y - Vt[1]), Math.abs(et.z - Vt[2])) > 32)) return this.puff(tt, et), void this.budget--
          }
        }
      }
      dispose() {
        var tt;
        null === (tt = this.particles) || void 0 === tt || tt.dispose(), this.particles = null, this.sources = []
      }
      puff(tt, et) {
        let {
          x: Vt,
          y: Ot,
          z: qt,
          h: Dt,
          faces: mt
        } = et;
        const dt = function(tt, et, Vt, Ot, qt) {
            const [Dt, mt, dt] = qt[Math.floor(Math.random() * qt.length)], jt = .04, Ht = (tt, et, Vt) => tt > 0 ? et + Vt + jt : tt < 0 ? et - jt : et + .1, Xt = (tt, et, Vt) => tt > 0 ? et + Vt + jt : tt < 0 ? et - jt : et + Vt - .1, Qt = [Ht(Dt, tt, 1), Ht(mt, et, Ot), Ht(dt, Vt, 1)], lt = [Xt(Dt, tt, 1), Xt(mt, et, Ot), Xt(dt, Vt, 1)];
            return {
              pos: [(Qt[0] + lt[0]) / 2, (Qt[1] + lt[1]) / 2, (Qt[2] + lt[2]) / 2],
              half: [(lt[0] - Qt[0]) / 2, (lt[1] - Qt[1]) / 2, (lt[2] - Qt[2]) / 2],
              out: [Dt, mt, dt]
            }
          }(Vt, Ot, qt, Dt, mt),
          {
            style: jt
          } = this,
          Ht = this.particles ??= tt.createParticles(kw(jt, Math.ceil(jt.count * OH * jt.life[1]) + 4), dt);
        Ht.moveTo(dt.pos, dt.half);
        const [Xt, Qt, lt] = dt.out, Et = jt.spread;
        Ht.setDirections([Xt - Et, .6 + Qt, lt - Et], [Xt + Et, 1 + Qt, lt + Et]), Ht.emit(jt.count)
      }
    }
    const Ay = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class iy {
      constructor() {
        this.green = new Uy(DH.green, eH), this.pink = new Uy(DH.pink, VH), this.colliders = [], this.lastMs = 0
      }
      setSources(tt) {
        this.colliders = tt;
        const et = [],
          Vt = [];
        for (const Ot of tt) {
          const [tt, qt, Dt] = Ot.focus;
          et.push({
            x: tt,
            y: qt - 1,
            z: Dt,
            h: 2,
            faces: Ay
          });
          for (let et = 0; et < 4; et++) {
            if (!Ot.live[et]) continue;
            const [tt, qt, Dt] = NO(Ot.focus, et, dO.LASER_D), [mt, , dt] = yO[et], jt = Ay.filter((tt => tt[0] !== mt || tt[2] !== dt || 0 !== tt[1]));
            Vt.push({
              x: tt,
              y: qt,
              z: Dt,
              h: 1,
              faces: jt
            })
          }
        }
        this.green.setSources(et), this.pink.setSources(Vt)
      }
      onAfterRender(tt) {
        const et = performance.now(),
          Vt = 0 === this.lastMs ? 0 : Math.min(et - this.lastMs, 250) / 1e3;
        if (this.lastMs = et, 0 === this.colliders.length || !tt.particlesEnabled()) return;
        const Ot = tt.getCameraPosition();
        this.green.BQ(tt, Vt, Ot), this.pink.BQ(tt, Vt, Ot)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Yy = 1.04,
      By = ry([1, 120 / 255, 220 / 255]),
      py = ry([1, .25, .25], .35);
    class xy {
      constructor(tt) {
        this.store = tt, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new iy
      }
      onAfterRender(tt) {
        this.store.version() !== this.builtVersion && this.rebuild(tt);
        const et = performance.now();
        for (const Vt of this.beams) {
          const Ot = 1 + .35 * Math.sin(et / 700 * Math.PI * 2 + Vt.phase);
          tt.setGameMesh(Vt.mesh, {
            scale: [Vt.alongX ? 1 : Ot, Ot, Vt.alongX ? Ot : 1]
          })
        }
        this.glow.onAfterRender(tt)
      }
      dispose(tt) {
        this.clear(tt), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(tt) {
        this.clear(tt), this.builtVersion = this.store.version();
        const et = [];
        for (const {
            entry: Vt
          }
          of this.store.colliders()) Vt.on && Vt.live.some(Boolean) && (this.addBeams(tt, Vt), et.push(Vt)), Vt.blockers.length > 0 && this.addMarkers(tt, Vt);
        this.glow.setSources(et)
      }
      addBeams(tt, et) {
        const [Vt, Ot, qt] = et.focus, Dt = tH - .25, mt = (.25 + tH) / 2;
        for (let dt = 0; dt < 4; dt++) {
          if (!et.live[dt]) continue;
          const [jt, , Ht] = yO[dt], Xt = 0 !== jt, Qt = {
            positions: [],
            indices: []
          };
          oy(Qt, 0, 0, 0, Xt ? Dt : .2, .2, Xt ? .2 : Dt);
          const lt = [Vt + .5 + jt * mt, Ot + .5, qt + .5 + Ht * mt],
            Et = tt.createGameMesh(Qt, By, lt);
          this.meshes.push(Et), this.beams.push({
            mesh: Et,
            alongX: Xt,
            phase: dt * Math.PI / 2
          })
        }
      }
      addMarkers(tt, et) {
        const Vt = et.blockers[0],
          Ot = {
            positions: [],
            indices: []
          };
        for (const [qt, Dt, mt] of et.blockers) oy(Ot, qt - Vt[0] + .5, Dt - Vt[1] + .5, mt - Vt[2] + .5, Yy, Yy, Yy);
        this.meshes.push(tt.createGameMesh(Ot, py, Vt))
      }
      clear(tt) {
        for (const et of this.meshes) tt.disposeGameMesh(et);
        this.meshes = [], this.beams = []
      }
    }
    const Ty = [.56, .83, 1],
      gy = [1, .73, .08],
      sy = [1, .25, .25],
      ny = [.85, .85, .85],
      tN = [.3, .45, .6];

    function eN(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const mt = qt / 2,
        dt = qt + Dt;
      for (const jt of [-mt, mt])
        for (const qt of [-mt, mt]) oy(tt, et, Vt + jt, Ot + qt, dt, Dt, Dt), oy(tt, et + jt, Vt, Ot + qt, Dt, dt, Dt), oy(tt, et + jt, Vt + qt, Ot, Dt, Dt, dt)
    }

    function VN(tt) {
      return et => tt.isBlockInLoadedChunk(et[0], et[1], et[2]) && 0 === tt.getBlockId(et[0], et[1], et[2])
    }

    function ON(tt) {
      return tt.map((tt => {
        let {
          free: et,
          blocked: Vt,
          gaps: Ot,
          supports: qt
        } = tt;
        return `${et.join(";")}|${Vt.join(";")}|${Ot.join(";")}|${qt.join(";")}`
      })).join("/")
    }

    function qN(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const Dt = et[0],
        mt = {
          positions: [],
          indices: []
        };
      for (const [dt, jt, Ht] of et) eN(mt, dt - Dt[0] + .5, jt - Dt[1] + .5, Ht - Dt[2] + .5, Ot, qt);
      return tt.createGameMesh(mt, Vt, Dt)
    }
    class DN {
      constructor(tt) {
        this.store = tt, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(tt, et, Vt) {
        var Ot;
        const qt = null === (Ot = tt.bVt(et)) || void 0 === Ot ? void 0 : Ot.name;
        if (qt !== HO && qt !== jO) return void("" !== this.shownKey && this.show(tt, "", []));
        const Dt = performance.now();
        if (Dt - this.lastCheckMs >= 200 && (this.lastCheckMs = Dt, qt === HO ? this.check(tt, Vt) : this.preview(tt, Vt)), this.pulses.length > 0) {
          const et = 1 + .12 * Math.sin(Dt / 1e3 * 1.25 * Math.PI * 2),
            Vt = [et, et, et];
          for (const Ot of this.pulses) tt.setGameMesh(Ot, {
            scale: Vt
          })
        }
      }
      dispose(tt) {
        this.clear(tt), this.shownKey = ""
      }
      check(tt, et) {
        const Vt = VN(tt),
          Ot = [];
        for (const {
            entry: Dt
          }
          of this.store.colliders()) {
          Dt.focus.every(((tt, Vt) => Math.abs(tt + .5 - et[Vt]) <= dO.GHOST_REACH)) && Ot.push(nj(Dt, Vt))
        }
        const qt = ON(Ot);
        qt !== this.shownKey && this.show(tt, qt, Ot)
      }
      preview(tt, et) {
        const Vt = tt.getTargetedBlock(),
          Ot = Vt ? [Vt.gw[0], Vt.gw[1], Vt.gw[2]] : null,
          qt = null !== Ot && Ot.every(((tt, Vt) => Math.abs(tt + .5 - et[Vt]) <= 8)),
          Dt = this.store.site(),
          mt = qt && Dt ? function(tt, et, Vt) {
            const Ot = wO(tt);
            if (!Ot.every(et)) return null;
            const qt = bO(tt, Vt);
            return {
              column: Ot,
              spots: nj({
                focus: Ot[1],
                lasers: [!1, !1, !1, !1],
                open: qt,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, et),
              fits: qt.filter(Boolean).length >= dO.MIN_SPOTS
            }
          }(Ot, VN(tt), Dt) : null,
          dt = mt ? [mt.spots] : [],
          jt = mt ? `preview ${Ot.join(",")}|${mt.fits}|${ON(dt)}` : "";
        var Ht, Xt;
        jt !== this.shownKey && this.show(tt, jt, dt, null !== (Ht = null === mt || void 0 === mt ? void 0 : mt.column) && void 0 !== Ht ? Ht : [], null === (Xt = null === mt || void 0 === mt ? void 0 : mt.fits) || void 0 === Xt || Xt)
      }
      show(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          qt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(tt), this.shownKey = et, Ot.length > 0 && this.meshes.push(qN(tt, Ot, ry(qt ? ny : sy)));
        for (const {
            free: Dt,
            blocked: mt,
            gaps: dt,
            supports: jt
          }
          of Vt) {
          for (const [et, Vt, Ot] of Dt) {
            const qt = {
              positions: [],
              indices: []
            };
            eN(qt, 0, 0, 0);
            const Dt = tt.createGameMesh(qt, ry(Ty), [et + .5, Vt + .5, Ot + .5]);
            this.meshes.push(Dt), this.pulses.push(Dt)
          }
          mt.length > 0 && this.meshes.push(qN(tt, mt, ry(gy))), dt.length > 0 && this.meshes.push(qN(tt, dt, ry(sy), 1.06, .07)), jt.length > 0 && this.meshes.push(qN(tt, jt, ry(tN)))
        }
      }
      clear(tt) {
        for (const et of this.meshes) tt.disposeGameMesh(et);
        this.meshes = [], this.pulses = []
      }
    }
    class mN {
      constructor() {
        this.stored = new Map, this.Pd = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(tt) {
        if (!tt.baf2TermOpen) return !1;
        tt.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [et, Vt] of tt.baf2TermItems) Vt > 0 ? this.stored.set(et, Vt) : this.stored.delete(et);
        if (tt.baf2TermHeld && (this.Pd = new Map(tt.baf2TermHeld)), this.pending = this.pending.filter((et => et.seq > tt.baf2TermAcked)), this.silos = tt.baf2TermSilos, this.readOnly = tt.baf2TermReadOnly, this.pocket = !0 === tt.baf2TermPocket, tt.baf2TermReset) this.resort();
        else {
          const tt = new Set(this.order);
          for (const et of this.stored.keys()) tt.has(et) || this.order.push(et)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((tt, et) => this.amount(et) - this.amount(tt) || tt.localeCompare(et))), this.changed()
      }
      take(tt, et) {
        const Vt = je(tt, this.amount(et));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: et,
          amount: Vt,
          put: !1
        }), this.recents = [et, ...this.recents.filter((tt => tt !== et))].slice(0, 6), this.changed(), Oe(this.seq, tt, et)
      }
      put(tt, et) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: et,
          amount: je(tt, this.heldAmount(et)),
          put: !0
        }), this.changed(), qe(this.seq, tt, et)
      }
      putAll() {
        this.seq++;
        for (const tt of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: tt,
          amount: this.heldAmount(tt),
          put: !0
        });
        return this.changed(), De(this.seq)
      }
      amount(tt) {
        var et;
        let Vt = null !== (et = this.stored.get(tt)) && void 0 !== et ? et : 0;
        for (const Ot of this.pending) Ot.item === tt && (Vt += Ot.put ? Ot.amount : -Ot.amount);
        return Math.max(0, Vt)
      }
      heldAmount(tt) {
        var et;
        let Vt = null !== (et = this.Pd.get(tt)) && void 0 !== et ? et : 0;
        for (const Ot of this.pending) Ot.put && Ot.item === tt && (Vt -= Ot.amount);
        return Math.max(0, Vt)
      }
      heldItems() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((et => et === tt || this.heldAmount(et) > 0))
      }
      items() {
        return this.order.filter((tt => this.amount(tt) > 0))
      }
      recent() {
        return this.recents.filter((tt => this.amount(tt) > 0))
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
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      changed() {
        this.version++;
        for (const tt of this.listeners) tt()
      }
    }
    var dN = Vt(38639);
    const jN = {
      isBlock: tt => void 0 !== It.h[tt],
      harvestType: tt => {
        var et;
        return null === (et = It.h[tt]) || void 0 === et ? void 0 : et.harvestType
      },
      harvestLevel: tt => {
        var et;
        return null === (et = It.h[tt]) || void 0 === et ? void 0 : et.harvestLevel
      },
      dropsNothing: tt => {
        var et;
        return null === (null === (et = It.h[tt]) || void 0 === et ? void 0 : et.drops)
      },
      displayName: tt => {
        var et;
        return null === (et = td.o[tt]) || void 0 === et ? void 0 : et.displayName
      },
      description: tt => {
        var et;
        return null === (et = td.o[tt]) || void 0 === et ? void 0 : et.description
      },
      harvests: tt => {
        var et;
        return null === (et = td.o[tt]) || void 0 === et ? void 0 : et.harvests
      },
      level: tt => {
        var et;
        return null === (et = td.o[tt]) || void 0 === et ? void 0 : et.level
      }
    };

    function HN(tt, et, Vt) {
      return function(tt, et, Vt, Ot) {
        var qt, Dt;
        const mt = et.split("|")[0],
          dt = tt.isBlock(et) ? et : tt.isBlock(mt) ? mt : null;
        if (null === dt || "rock" !== tt.harvestType(dt) || tt.dropsNothing(dt) && !zO.has(mt)) return null;
        const jt = Vt && "rock" === tt.harvests(Vt) ? null !== (qt = tt.level(Vt)) && void 0 !== qt ? qt : 0 : null,
          Ht = null !== (Dt = null !== Ot && void 0 !== Ot ? Ot : tt.harvestLevel(dt)) && void 0 !== Dt ? Dt : 0;
        return (null !== jt ? Ht <= jt : 0 === tt.harvestLevel(dt)) ? null : WO(tt, Ht)
      }(jN, tt, et, Vt)
    }

    function XN(tt, et) {
      return function(tt, et, Vt) {
        if (et === vO[0]) return [(0, Lt.pe)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Lt.P.whiteUiText)];
        const Ot = Vt.split("|")[0],
          qt = tt.isBlock(Ot) ? tt.displayName(Ot) : void 0,
          Dt = "string" === typeof qt ? qt : qt && "translationKey" in qt ? `$t(${qt.translationKey})` : Ot;
        return [(0, Lt.pe)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: Dt
          }
        }, Lt.P.whiteUiText), (0, Lt.pe)({
          translationKey: `item:${(0,Lt.Pe)(et)}`
        }, Lt.P.yellowUiText)]
      }(jN, tt, et)
    }
    const QN = "buildAFactory2Game:";
    const lN = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function EN(tt) {
      return tt.endsWith(" Ore")
    }
    const fN = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      wN = [],
      yN = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: fN,
        plan: null,
        atomic: wN
      },
      NN = "buildAFactory2Game:",
      aN = new Set(["Splitter", "Sorting Gate"]),
      MN = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class bN {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = tt, this.planAt = et, this.tierOf = Vt, this.qd = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Pd = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = yN, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(tt, et, Vt) {
        var Ot, qt, Dt;
        let mt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const dt = null !== (Ot = null === (qt = tt.bVt(et)) || void 0 === qt ? void 0 : qt.name) && void 0 !== Ot ? Ot : null,
          jt = tt.isPlayerCrouching(et),
          Ht = 0 === Vt ? null : this.resolve(tt, Vt),
          Xt = null !== Ht && null !== mt && aN.has(Ht.rootName) && function(tt, et) {
            return MN.some((Vt => {
              let [Ot, qt] = Vt;
              const Dt = tt.getBlockId(et[0] + Ot, et[1], et[2] + qt);
              return 0 !== Dt && "Express Belt" === tt.getMetaInfo(Dt).rootName
            }))
          }(tt, mt),
          Qt = this.updatePlan(0 === Vt ? null : mt),
          lt = this.tierOf(),
          Et = null === mt ? null : (0, dN.h)(Vt),
          ft = null !== Et && null !== mt && (0, dN.i)(function(tt) {
            return (et, Vt, Ot) => tt.getBlockId(et, Vt, Ot)
          }(tt), mt[0], mt[1], mt[2], Et),
          wt = this.readAfloat(tt, Vt, mt);
        if (Vt === this.qd && ft === this.missesMaker && wt === this.afloat && dt === this.Pd && jt === this.crouching && Xt === this.express && lt === this.tier && !Qt && (!this.targetsLive || !this.liveMoved(mt))) return;
        this.qd = Vt, this.missesMaker = ft, this.afloat = wt, this.Pd = dt, this.crouching = jt, this.express = Xt;
        const yt = Xt && Ht ? function(tt) {
          if (null === tt.info) return null;
          return tt.express ??= {
            ...tt.info,
            detail: `${NN}lookKeepsUpExpress`,
            detailItem: null
          }, tt.express
        }(Ht) : null !== Ht && ft && null !== Et ? this.besideMaker(Ht, Vt, Et) : null !== Ht && wt ? this.hanging(Ht) : null !== (Dt = null === Ht || void 0 === Ht ? void 0 : Ht.info) && void 0 !== Dt ? Dt : null;
        this.tier = lt;
        const Nt = Ht && yt ? function(tt, et) {
          var Vt, Ot;
          const qt = It.h[tt];
          if (!tt.endsWith(" Ore") || "rock" !== (null === qt || void 0 === qt ? void 0 : qt.harvestType) || 0 === qt.harvestLevel) return null;
          const Dt = null !== (Vt = qt.harvestLevel) && void 0 !== Vt ? Vt : 0,
            mt = et ? td.o[et] : void 0;
          if ("rock" === (null === mt || void 0 === mt ? void 0 : mt.harvests) && (null !== (Ot = mt.level) && void 0 !== Ot ? Ot : 0) >= Dt) return null;
          const dt = (jt = Dt, WO(jN, jt));
          var jt;
          if (null === dt) return null;
          const Ht = OD(dt),
            Xt = /^[AEIOU]/.test(dt) ? "An" : "";
          if ("rock" === (null === mt || void 0 === mt ? void 0 : mt.harvests) && et) return {
            key: `${NN}lookToolTooWeak${Xt}`,
            Pd: OD(et),
            needed: Ht
          };
          return {
            key: dt === vO[0] ? `${NN}lookNeedAnyPickaxe` : `${NN}lookNeedPickaxe${Xt}`,
            Pd: null,
            needed: Ht
          }
        }(Ht.rootName, dt) : null;
        this.targetsLive = !0 === (null === Ht || void 0 === Ht ? void 0 : Ht.live) && null !== mt;
        let Mt = null;
        this.targetsLive && Ht && mt && this.live && (this.livePos[0] = mt[0], this.livePos[1] = mt[1], this.livePos[2] = mt[2], this.liveVersion = this.live.version(), Mt = this.live.line(Ht.rootName, mt));
        const bt = null === yt ? fN : function(tt, et, Vt) {
            const Ot = function(tt, et, Vt) {
              const Ot = ZV(tt);
              if (null === Ot) return null;
              const qt = `${QN}lookPortMode_${Ot}`,
                Dt = UO(et);
              if (Dt && Vt) return {
                mode: null,
                detail: qt,
                next: `${QN}lookWrenchPickUp`,
                nextState: null
              };
              const mt = LV(tt),
                dt = null === mt ? null : ZV(mt);
              return null === dt ? {
                mode: null,
                detail: qt,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: qt,
                next: Dt ? `${QN}lookWrenchNext` : `${QN}lookPortWrench`,
                nextState: `${QN}lookPortState_${dt}`
              }
            }(tt, et, Vt);
            if (null !== Ot) return Ot;
            const qt = Oq(tt, et, Vt);
            return null === qt.mode && null === qt.next ? fN : qt
          }(tt.blockIdToBlockName(Vt), dt, jt),
          Jt = this.plan,
          Ct = Ht && yt ? this.rowsOf(Ht.rootName, lt) : wN,
          ut = this.snapshot;
        if (!(null === yt ? !ut.visible : ut.visible && yt === ut.info && (Kt = Nt, ht = ut.tool, Kt === ht || null !== Kt && null !== ht && Kt.key === ht.key && Kt.Pd === ht.Pd && Kt.needed === ht.needed) && function(tt, et) {
            return tt === et || null !== tt && null !== et && tt.key === et.key && JSON.stringify([tt.params, tt.keys]) === JSON.stringify([et.params, et.keys])
          }(Mt, ut.live) && function(tt, et) {
            return tt.mode === et.mode && tt.detail === et.detail && tt.next === et.next && tt.nextState === et.nextState
          }(bt, ut.wrench) && gf(Jt, ut.plan) && Ct === ut.atomic)) {
          var Kt, ht;
          this.snapshot = null === yt ? {
            ...ut,
            visible: !1
          } : {
            info: yt,
            visible: !0,
            tool: Nt,
            live: Mt,
            wrench: bt,
            plan: Jt,
            atomic: Ct
          };
          for (const tt of this.listeners) tt()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = yN, this.qd = 0, this.Pd = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(tt, et, Vt) {
        if (null === Vt || 0 === et || !dt() || !EN(this.resolve(tt, et).rootName)) return !1;
        const Ot = `${Vt[0]},${Vt[1]},${Vt[2]},${et}`,
          qt = performance.now();
        return Ot === this.afloatKey && qt - this.afloatAt < JN ? this.afloat : (this.afloatKey = Ot, this.afloatAt = qt, function(tt, et) {
          for (const [Vt, Ot, qt] of lN) {
            const Dt = et(tt[0] + Vt, tt[1] + Ot, tt[2] + qt);
            if (void 0 === Dt || null !== Dt && !EN(Dt)) return !1
          }
          return !0
        }(Vt, ((et, Vt, Ot) => function(tt, et, Vt, Ot) {
          if (!tt.isBlockInLoadedChunk(et, Vt, Ot)) return;
          const qt = tt.getBlockId(et, Vt, Ot);
          return 0 === qt ? null : tt.getMetaInfo(qt).rootName
        }(tt, et, Vt, Ot))))
      }
      liveMoved(tt) {
        var et;
        const {
          livePos: Vt
        } = this;
        return null === tt || tt[0] !== Vt[0] || tt[1] !== Vt[1] || tt[2] !== Vt[2] || (null === (et = this.live) || void 0 === et ? void 0 : et.version()) !== this.liveVersion
      }
      updatePlan(tt) {
        const et = null === tt ? "" : tt.join(","),
          Vt = performance.now();
        if (et === this.planPos && Vt - this.planMs < 250) return !1;
        this.planPos = et, this.planMs = Vt;
        const Ot = null === tt ? null : this.planAt([tt[0], tt[1], tt[2]]),
          qt = !gf(Ot, this.plan);
        return this.plan = Ot, qt
      }
      besideMaker(tt, et, Vt) {
        let {
          info: Ot
        } = tt;
        if (null === Ot) return null;
        let qt = this.besideMakerById.get(et);
        if (void 0 === qt) {
          const tt = "cryo" === Vt ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          qt = {
            ...Ot,
            detail: `${NN}${tt}`,
            detailItem: null
          }, this.besideMakerById.set(et, qt)
        }
        return qt
      }
      hanging(tt) {
        let {
          info: et,
          rootName: Vt
        } = tt;
        if (null === et) return null;
        let Ot = this.afloatByRoot.get(Vt);
        return void 0 === Ot && (Ot = {
          ...et,
          detail: `${NN}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(Vt, Ot)), Ot
      }
      rowsOf(tt, et) {
        if (null === et) return wN;
        const Vt = `${tt}|${et}`;
        let Ot = this.rowsByKey.get(Vt);
        if (void 0 === Ot) {
          const qt = function(tt, et) {
            var Vt;
            if (!(tt in Le)) return [];
            const Ot = null !== (Vt = Fe[tt]) && void 0 !== Vt ? Vt : [],
              qt = new Map;
            for (const mt of UD(tt, et))
              if ((Ot.includes(mt) || rD(mt.output) && zD(mt.output) > gt(tt)) && zD(mt.output) <= et) {
                var Dt;
                const tt = null !== (Dt = qt.get(mt.output)) && void 0 !== Dt ? Dt : [];
                tt.push(mt.input), qt.set(mt.output, tt)
              } return iD([...qt], (tt => {
              let [et] = tt;
              return -zD(et)
            })).map((tt => {
              let [et, Vt] = tt;
              return {
                output: et,
                inputs: Vt
              }
            }))
          }(tt, et);
          Ot = qt.length > 0 ? qt : wN, this.rowsByKey.set(Vt, Ot)
        }
        return Ot
      }
      resolve(tt, et) {
        const {
          rootId: Vt,
          rootName: Ot
        } = tt.getMetaInfo(et), qt = (0, wV.n)(Ot) ? et : Vt;
        let Dt = this.byRootId.get(qt);
        const mt = dt();
        if (void 0 === Dt || Dt.nuclear !== mt) {
          var jt;
          const Vt = function(tt) {
            return kO(jN, tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt)
          }(Ot, tt.blockIdToBlockName(et));
          Dt = {
            info: Vt,
            rootName: Ot,
            live: null !== Vt && !0 === (null === (jt = this.live) || void 0 === jt ? void 0 : jt.handles(Ot)),
            nuclear: mt
          }, this.byRootId.set(qt, Dt)
        }
        return Dt
      }
    }
    const JN = 500;
    const CN = (0, Ot.memo)((function(tt) {
      var et, Vt;
      let {
        store: qt
      } = tt;
      const {
        t: Dt
      } = (0, Wq.H)(), [mt, dt] = (0, Ot.useState)((() => qt.get()));
      (0, Ot.useEffect)((() => (dt(qt.get()), qt.subscribe((() => {
        dt(qt.get())
      })))), [qt]);
      const {
        openInGameMenuName: jt,
        openEverythingMenuName: Ht,
        isTouchScreen: Xt
      } = (0, bq.k)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: Qt,
        tool: lt,
        live: Et,
        wrench: ft,
        atomic: wt
      } = mt, yt = mt.visible && null === jt && null === Ht;
      if (null === Qt) return null;
      const Nt = null !== ft.detail ? Dt(ft.detail) : null !== (et = mt.plan) && void 0 !== et && et.ctrl ? Dt("buildAFactory2Game:lookPlanCtrl") : null !== Qt.detail ? Dt(Qt.detail, null === Qt.detailItem ? void 0 : {
        item: Dt(Qt.detailItem)
      }) : null;
      return (0, hD.jsxs)("div", {
        className: uq()("Baf2LookTarget", {
          Visible: yt
        }),
        "aria-hidden": !yt,
        children: [(0, hD.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: Dt(Qt.name)
        }), null !== mt.plan && (0, hD.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Dt(mt.plan.key, {
            kind: Dt(mt.plan.kindKey),
            w: String(mt.plan.w),
            h: String(mt.plan.h),
            d: String(mt.plan.d),
            count: String(mt.plan.count)
          })
        }), void 0 !== (null === (Vt = mt.plan) || void 0 === Vt ? void 0 : Vt.why) && (0, hD.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Dt(mt.plan.why)
        }), null !== ft.mode && (0, hD.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Dt(ft.mode)
        }), null !== lt ? (0, hD.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Dt(lt.key, {
            item: Dt(lt.needed),
            Pd: null === lt.Pd ? "" : Dt(lt.Pd)
          })
        }) : null !== Et ? (0, hD.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Dt(Et.key, mH(Dt, Et))
        }) : null !== Nt && (0, hD.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Nt
        }), wt.length > 0 && (0, hD.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Dt("buildAFactory2Game:lookAtomicRecipes", {
            list: wt.map((tt => {
              let {
                output: et,
                inputs: Vt
              } = tt;
              const Ot = Vt.length > 1 ? ` ${Dt("buildAFactory2Game:recipeMore",{count:String(Vt.length-1)})}` : "";
              return `${Dt(OD(Vt[0]))}${Ot} \u2192 ${Dt(OD(et))}`
            })).join(", ")
          })
        }), null !== ft.next && (0, hD.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Dt(ft.next, {
            state: null === ft.nextState ? "" : Dt(ft.nextState),
            use: Dt(Xt ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var uN = Vt(38741);
    const KN = [],
      hN = [
        [0, -1, 0]
      ];

    function vN(tt) {
      const et = [tt];
      for (let Vt = 1; Vt <= 4; Vt++) Vt > 1 && et.push(`${tt}|meta|rot${Vt}`), et.push(`${tt}|meta|rot${Vt}|Running`);
      return et
    }

    function WN(tt, et) {
      return [Math.floor(tt[0] / et), Math.floor(tt[1] / et), Math.floor(tt[2] / et)]
    }

    function SN(tt, et, Vt) {
      return `${tt},${et},${Vt}`
    }

    function cN(tt) {
      const et = tt.split("|")[0];
      if (!XV(et)) return KN;
      const Vt = Le[et];
      if (VV(Vt)) return hN;
      const Ot = Wy(tt);
      return OV(Vt) ? [
        [-Ot[0], -Ot[1], -Ot[2]]
      ] : Kq(Vt) ? function(tt, et) {
        const Vt = tt[0] - 2 * et[0],
          Ot = tt[2] - 2 * et[2],
          qt = [];
        for (let Dt = -1; Dt <= 1; Dt++)
          for (let et = -1; et <= 1; et++) qt.push([Vt + Dt, tt[1], Ot + et]);
        return qt
      }([0, 0, 0], Ot) : KN
    }
    const RN = [.5, .5, .5],
      IN = [.2, .8, .3],
      PN = [.45, 1, .5];
    class ZN {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(tt) {
        this.indexed = !0;
        for (const et of Se)
          for (const Vt of vN(et)) {
            const et = tt.blockNameToBlockId(Vt, !0),
              Ot = cN(Vt);
            null !== et && Ot.length > 0 && (this.offsetsList.push(Ot), this.offsetsIndexById[et] = this.offsetsList.length)
          }
      }
      onAfterRender(tt, et) {
        this.indexed || this.index(tt);
        const Vt = performance.now();
        if (Vt - this.lastCheckMs < 100) return;
        this.lastCheckMs = Vt, this.checks++;
        const Ot = yf.e.ff,
          [qt, Dt, mt] = WN(et, Ot);
        let dt = !1;
        const jt = [];
        let Ht = 0;
        for (let Xt = qt - 2; Xt <= qt + 2; Xt++)
          for (let et = Dt - 1; et <= Dt + 1; et++)
            for (let qt = mt - 2; qt <= mt + 2; qt++) {
              const Dt = Ht++,
                mt = SN(Xt, et, qt),
                Qt = tt.getChunkVersion(Xt, et, qt);
              let lt = this.chunks.get(mt);
              null !== Qt ? (lt || (lt = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(mt, lt)), lt.seenAt = this.checks, lt.checkedVersion !== Qt && (lt.checkedVersion = Qt, dt = !0), lt.scannedVersion !== Qt && Vt - lt.scannedAt >= 500 && jt.push({
                slot: Dt,
                entry: lt,
                origin: [Xt * Ot, et * Ot, qt * Ot]
              })) : (dt ||= void 0 !== lt, this.chunks.delete(mt))
            }
        this.scanDue(tt, jt) && (dt = !0);
        for (const [Xt, Qt] of this.chunks) Qt.seenAt !== this.checks && (dt ||= Qt.machines.length > 0, this.chunks.delete(Xt));
        for (const Xt of this.chunks.values())
          for (const [et, Vt, Ot] of Xt.cellChunks)(Math.abs(et - qt) > 2 || Math.abs(Vt - Dt) > 1 || Math.abs(Ot - mt) > 2) && this.watchCellChunk(tt, et, Vt, Ot) && (dt = !0);
        for (const [Xt, Qt] of this.cellChunks) Qt.seenAt !== this.checks && this.cellChunks.delete(Xt);
        dt && this.refresh(tt)
      }
      dispose(tt) {
        this.clearMeshes(tt), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(tt, et) {
        const Vt = Math.max(et.findIndex((tt => {
          let {
            slot: et
          } = tt;
          return et >= this.scanFrom
        })), 0);
        let Ot = 96;
        for (let qt = 0; qt < et.length; qt++) {
          const {
            slot: Dt,
            entry: mt,
            origin: dt
          } = et[(Vt + qt) % et.length];
          if (Ot -= this.scan(tt, mt, dt), Ot <= 0) {
            this.scanFrom = Dt + 1;
            break
          }
        }
        return et.length > 0
      }
      scan(tt, et, Vt) {
        let [Ot, qt, Dt] = Vt;
        const mt = yf.e.ff,
          dt = this.hits;
        dt.length = 0;
        const jt = tt.scanBlocks(Ot, qt, Dt, Ot + mt, qt + mt, Dt + mt, this.offsetsIndexById, dt),
          Ht = [];
        for (let Xt = 0; Xt < dt.length; Xt += 4) Ht.push({
          pos: [dt[Xt], dt[Xt + 1], dt[Xt + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[dt[Xt + 3]] - 1]
        });
        return et.machines = Ht, et.cellChunks = function(tt, et) {
          const Vt = new Set,
            Ot = [];
          for (const {
              pos: qt,
              offsets: Dt
            }
            of tt)
            for (const [tt, mt, dt] of Dt) {
              const Dt = WN([qt[0] + tt, qt[1] + mt, qt[2] + dt], et),
                jt = SN(...Dt);
              Vt.has(jt) || (Vt.add(jt), Ot.push(Dt))
            }
          return Ot
        }(Ht, mt), et.scannedVersion = et.checkedVersion, et.scannedAt = performance.now(), Math.max(jt, 1)
      }
      watchCellChunk(tt, et, Vt, Ot) {
        const qt = SN(et, Vt, Ot),
          Dt = tt.getChunkVersion(et, Vt, Ot),
          mt = this.cellChunks.get(qt);
        return null === Dt ? this.cellChunks.delete(qt) : (null === mt || void 0 === mt ? void 0 : mt.version) === Dt ? (mt.seenAt = this.checks, !1) : (this.cellChunks.set(qt, {
          version: Dt,
          seenAt: this.checks
        }), !0)
      }
      refresh(tt) {
        const et = function(tt, et) {
            const Vt = new Set,
              Ot = [];
            for (const {
                pos: qt,
                offsets: Dt
              }
              of tt)
              for (const [tt, mt, dt] of Dt) {
                const Dt = qt[0] + tt,
                  jt = qt[1] + mt,
                  Ht = qt[2] + dt,
                  Xt = `${Dt},${jt},${Ht}`;
                Vt.has(Xt) || (Vt.add(Xt), et(Dt, jt, Ht) && Ot.push([Dt, jt, Ht]))
              }
            return Ot
          }([...this.chunks.values()].flatMap((tt => tt.machines)), ((et, Vt, Ot) => tt.isBlockInLoadedChunk(et, Vt, Ot) && 0 === tt.getBlockId(et, Vt, Ot))),
          Vt = et.join(";");
        Vt !== this.shownKey && (this.shownKey = Vt, this.clearMeshes(tt), et.length > 0 && (this.meshes = [this.build(tt, et, !1), this.build(tt, et, !0)]))
      }
      build(tt, et, Vt) {
        const Ot = et[0],
          qt = [],
          Dt = [];
        for (const [mt, dt, jt] of et)(0, uN.c)(qt, Dt, [mt - Ot[0] + .5, dt - Ot[1] + .5, jt - Ot[2] + .5], RN, Vt);
        return tt.createGameMesh({
          positions: qt,
          indices: Dt
        }, {
          rgb: Vt ? PN : IN,
          alpha: .4
        }, Ot)
      }
      clearMeshes(tt) {
        for (const et of this.meshes) tt.disposeGameMesh(et);
        this.meshes = []
      }
    }
    const LN = 1 / .6,
      FN = 200,
      kN = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      GN = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      zN = 2 * Math.PI / 3;
    class oN {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kN;
        this.style = tt, this.particles = null, this.points = new Float32Array(800), this.budget = FN, this.lastMs = 0
      }
      static blade() {
        return new oN(GN)
      }
      gM(tt, et) {
        const Vt = Math.min(et.arcStruck, et.arcPoints.length);
        this.draw(tt, [et.arcFrom, ...et.arcPoints], et.arcPoints.slice(0, Vt))
      }
      onBlade(tt, et) {
        const [Vt, Ot, qt] = et.bladeCentre, [Dt, mt] = et.bladeFacing, dt = Vt - 1.5 * Dt, jt = qt - 1.5 * mt, Ht = Math.atan2(mt, Dt), Xt = [];
        for (let Qt = 0; Qt <= 8; Qt++) {
          const tt = Ht - zN / 2 + zN * Qt / 8;
          Xt.push([dt + 2.5 * Math.cos(tt), Ot, jt + 2.5 * Math.sin(tt)])
        }
        this.draw(tt, Xt, et.bladeStruck)
      }
      dispose() {
        var tt;
        null === (tt = this.particles) || void 0 === tt || tt.stop(), this.particles = null
      }
      draw(tt, et, Vt) {
        if (!tt.particlesEnabled() || et.length < 2) return;
        const Ot = performance.now();
        this.budget = Math.min(FN, this.budget + (Ot - this.lastMs) / 1e3 * FN), this.lastMs = Ot;
        const qt = [];
        let Dt = 0,
          mt = et[0];
        for (const Nt of et.slice(1)) {
          const tt = Math.min(48, Math.round(Math.hypot(Nt[0] - mt[0], Nt[1] - mt[1], Nt[2] - mt[2]) * this.style.perBlock));
          qt.push([mt, Nt, tt]), Dt += tt, mt = Nt
        }
        const dt = Vt.length;
        Dt += 10 * dt;
        const jt = Dt > this.budget ? this.budget / Dt : 1;
        if (0 === Dt || jt * Dt < 1) return;
        const Ht = et[0],
          [Xt, Qt, lt] = Ht,
          Et = this.points;
        let ft = 0;
        const wt = (tt, et, Vt, Ot) => {
          const qt = 4 * ft;
          Et[qt] = tt - Xt, Et[qt + 1] = et - Qt, Et[qt + 2] = Vt - lt, Et[qt + 3] = Ot, ft++
        };
        qt.forEach(((tt, et) => {
          let [Vt, Ot, qt] = tt;
          const Dt = Math.min(Math.floor(qt * jt), FN - ft),
            mt = Math.hypot(Ot[0] - Vt[0], Ot[1] - Vt[1], Ot[2] - Vt[2]),
            dt = 0 === et && mt > 0 ? Math.min(.5, .1 * mt) / mt : 0;
          for (let jt = 0; jt < Dt; jt++) {
            const tt = dt + (jt + .5) / Dt * (1 - dt);
            wt(Vt[0] + (Ot[0] - Vt[0]) * tt, Vt[1] + (Ot[1] - Vt[1]) * tt, Vt[2] + (Ot[2] - Vt[2]) * tt, .15)
          }
        }));
        const yt = Math.floor(10 * jt);
        for (let Nt = 0; Nt < dt; Nt++) {
          const [tt, et, Ot] = Vt[Nt];
          for (let Vt = 0; Vt < yt && ft < FN; Vt++) wt(tt, et, Ot, 2.5)
        }
        this.budget -= ft, this.particles ??= tt.createParticles(function(tt) {
          const [et, Vt] = tt.colours;
          return {
            texture: "square_particle",
            uQ: 400,
            minLifeTime: tt.life[0] / LN,
            maxLifeTime: tt.life[1] / LN,
            minSize: tt.size[0],
            maxSize: tt.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [et[0], et[1], et[2], 1],
              maxColor: [Vt[0], Vt[1], Vt[2], 1]
            }, {
              timeFraction: 1,
              minColor: [et[0], et[1], et[2], 0],
              maxColor: [Vt[0], Vt[1], Vt[2], 0]
            }],
            blendMode: kd.f.Add
          }
        }(this.style), {
          pos: Ht
        }), this.particles.emitPoints(Ht, Et, ft)
      }
    }
    const rN = new Set(["Sky Spring"]);

    function UN(tt, et, Vt) {
      const Ot = tt.split("|")[0];
      return "Air" !== et || Vt || ! function(tt) {
        const et = tt.split("|")[0];
        return void 0 !== dV[et] || rN.has(et)
      }(Ot) ? null : tt
    }
    class AN {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(tt) {
        const et = tt - this.lastTapAt >= 300;
        return this.lastTapAt = tt, et
      }
    }
    class iN {
      constructor() {
        this.presses = new AN, this.predicted = null
      }
      tap(tt, et) {
        const Vt = this.presses.isNewPress(et);
        return Vt && (this.predicted = {
          station: tt,
          at: et
        }), Vt
      }
      consumeServerOpen(tt, et) {
        const Vt = this.predicted;
        return !(null === Vt || Vt.station !== tt || et - Vt.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class YN {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(tt, et) {
        return tt && (this.thrustAt = et), et - this.thrustAt < 200
      }
    }
    const BN = [.1, .05, .1],
      pN = {
        texture: "effect_5",
        uQ: Math.ceil(48),
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
        blendMode: kd.f.OneOne
      };
    class xN {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new YN, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      gM(tt, et) {
        for (const [Vt, Ot] of et.baf2JetFlames) tt.isLocalPlayer(Vt) || (Ot ? this.lit.add(Vt) : this.lit.delete(Vt))
      }
      onAfterRender(tt, et) {
        const Vt = performance.now(),
          Ot = this.hold.lit(this.selfThrusting(tt, et), Vt);
        for (const [qt, Dt] of this.flames)(qt === et ? Ot : this.lit.has(qt)) || this.setEmitting(Dt, !1), qt === et || tt.getPositionView(qt) ? !Dt.emitting && Vt - Dt.offAt >= 1300 && (Dt.particles.stop(), this.flames.delete(qt)) : (Dt.particles.dispose(), this.flames.delete(qt), this.lit.delete(qt));
        Ot && this.draw(tt, et, et);
        for (const qt of this.lit) this.draw(tt, et, qt)
      }
      dispose() {
        for (const tt of this.flames.values()) tt.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(tt, et) {
        var Vt;
        const Ot = tt.getLocalPlayerMovement();
        return !!Ot && (null !== (qt = {
          option: null !== (Vt = tt.getClientOption(et, "jumpHoldThrust")) && void 0 !== Vt ? Vt : null,
          jumping: Ot.jumpHeld,
          onGround: Ot.onGround,
          alive: tt.isAlive(et)
        }).option && qt.option.maxUpSpeed >= 0 && qt.jumping && !qt.onGround && qt.alive);
        var qt
      }
      draw(tt, et, Vt) {
        var Ot, qt;
        const Dt = this.pos;
        if (!tt.readDrawnPosition(Vt, Dt)) return;
        const mt = tt.readDrawnPosition(et, this.camera) ? this.camera : Dt;
        if (!((Dt[0] - mt[0]) ** 2 + (Dt[1] - mt[1]) ** 2 + (Dt[2] - mt[2]) ** 2 < 1600) || !tt.particlesEnabled()) {
          const tt = this.flames.get(Vt);
          return void(tt && this.setEmitting(tt, !1))
        }
        const dt = null !== (Ot = this.flames.get(Vt)) && void 0 !== Ot ? Ot : this.create(tt, Vt, Dt),
          jt = null !== (qt = tt.getDrawnHeading(Vt)) && void 0 !== qt ? qt : 0,
          Ht = this.at;
        Ht[0] = Dt[0] - .35 * Math.sin(jt), Ht[1] = Dt[1] + 1.05, Ht[2] = Dt[2] - .35 * Math.cos(jt), dt.particles.moveTo(Ht), this.setEmitting(dt, !0)
      }
      setEmitting(tt, et) {
        tt.emitting !== et && (tt.emitting = et, et || (tt.offAt = performance.now()), tt.particles.setEmitRate(et ? 60 : 0))
      }
      create(tt, et, Vt) {
        const Ot = {
          particles: tt.createParticles(pN, {
            pos: Vt,
            half: BN
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(et, Ot), Ot
      }
    }

    function TN(tt) {
      return "Reactor Frame" === qO("reactor", tt)
    }

    function gN(tt) {
      return zV("reactor", tt) && !TN(tt) && (tt.startsWith("Reactor Glass") || tt.startsWith("Reactor Port"))
    }
    const sN = "baf2Goal";
    class nN {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Zq.j.subscribe("setDirectionArrow", (tt => {
          let {
            id: et,
            position: Vt
          } = tt;
          et === sN && (this.goal = Vt, this.checkedAt = -1 / 0)
        })), Zq.j.subscribe("clearDirectionArrow", (tt => {
          let {
            id: et
          } = tt;
          null !== et && et !== sN || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const tt of this.subs) Zq.j.unsubscribe(tt)
      }
      sideOf(tt, et, Vt, Ot) {
        const qt = this.goal;
        if (!qt) return 0;
        Vt - this.checkedAt > 1e3 && (this.checkedAt = Vt, this.open = function(tt, et) {
          const [Vt, Ot, qt] = tt.map(Math.floor);
          if (!gN(et(Vt, Ot, qt))) return null;
          for (const [Dt, mt] of [
              [1, 0],
              [0, 1]
            ]) {
            const tt = et(Vt + Dt, Ot, qt + mt),
              dt = et(Vt - Dt, Ot, qt - mt);
            if (TN(dt) && gN(tt)) return [Dt, 0, mt];
            if (TN(tt) && gN(dt)) return [0 - Dt, 0, 0 - mt]
          }
          return null
        }(qt, ((et, Vt, Ot) => tt.blockIdToBlockName(tt.getBlockId(et, Vt, Ot)))));
        const Dt = this.open;
        if (!Dt) return 0;
        const mt = Ot(qt);
        if (Math.abs(mt.x - et.x) > .05 || Math.abs(mt.y - et.y) > .05) return 0;
        const dt = Ot([qt[0] + Dt[0], qt[1], qt[2] + Dt[2]]).x - mt.x;
        return Math.abs(dt) < .3 ? 0 : dt > 0 ? 1 : -1
      }
    }
    class ta {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new nN, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.df = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.iN = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((tt => {
          for (const et of tt) et.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(et.target, et.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.df || this.clear()
        }, window.addEventListener("resize", this.iN)
      }
      onAfterRender(tt, et) {
        var Vt;
        this.api = tt, this.project = null !== (Vt = null === et || void 0 === et ? void 0 : et.projectWorldPosToScreenPos) && void 0 !== Vt ? Vt : null, this.queued || this.df || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.df = !0;
        for (const tt of this.moved.keys()) tt.style.transform = "";
        this.moved.clear();
        for (const tt of this.sideLabels.keys()) tt.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.iN)
      }
      clear() {
        for (const Dt of this.moved.keys()) Dt.isConnected || this.moved.delete(Dt);
        for (const Dt of this.sideLabels.keys()) Dt.isConnected || this.sideLabels.delete(Dt);
        if (0 === this.arrows.length) return;
        const tt = performance.now(),
          et = tt - this.refreshedAt > 1e3;
        et && (this.refreshedAt = tt, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const Vt = this.trackerBox(),
          Ot = this.barsBox(),
          qt = this.toastBox(et);
        (Vt || Ot || qt) && et && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let Dt = 0; Dt < this.arrows.length; Dt++) {
          const et = this.arrows[Dt];
          this.labelOffsets.set(et, this.runLabelAside(et, tt));
          const mt = (Vt ? this.shiftLeftOf(et, Vt) : 0) || this.shiftOnScreen(et),
            dt = Math.min(Ot ? this.liftAbove(et, Ot, mt) : 0, qt ? this.liftAbove(et, qt, mt) : 0),
            jt = this.moved.get(et);
          if (0 !== mt || 0 !== dt) {
            const tt = 0 === dt ? `translateX(${mt}px)` : `translate(${mt}px, ${dt}px)`;
            jt !== tt && (et.style.transform = tt, this.moved.set(et, tt))
          } else void 0 !== jt && (et.style.transform = "", this.moved.delete(et))
        }
      }
      trackerBox() {
        var tt, et;
        const Vt = null !== (tt = this.tracker) && void 0 !== tt && tt.isConnected ? this.tracker : null !== (et = this.trackers[0]) && void 0 !== et ? et : null;
        if (Vt !== this.tracker && this.watch(Vt), this.boxStale && Vt) {
          var Ot, qt, Dt;
          this.boxStale = !1;
          const tt = Vt.closest(".NoRoom") ? null : Vt.getBoundingClientRect(),
            et = tt && tt.width > 0 ? null === (Ot = this.hud) || void 0 === Ot ? void 0 : Ot.getBoundingClientRect() : void 0,
            mt = tt && et ? Math.max(tt.top, et.top) : null !== (qt = null === tt || void 0 === tt ? void 0 : tt.top) && void 0 !== qt ? qt : 0,
            dt = tt && et ? Math.min(tt.bottom, et.bottom) : null !== (Dt = null === tt || void 0 === tt ? void 0 : tt.bottom) && void 0 !== Dt ? Dt : 0;
          this.box = tt && tt.width > 0 && dt > mt ? {
            left: tt.left,
            top: mt,
            right: tt.right,
            bottom: dt
          } : null
        }
        return Vt ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var tt;
          this.barsStale = !1;
          const et = null === (tt = this.statBars[0]) || void 0 === tt ? void 0 : tt.getBoundingClientRect();
          this.bars = et && et.width > 0 && et.height > 0 ? {
            left: et.left,
            top: et.top,
            right: et.right,
            bottom: et.bottom
          } : null
        }
        return this.bars
      }
      toastBox(tt) {
        var et;
        const Vt = null !== (et = this.toasts[0]) && void 0 !== et ? et : null;
        if (Vt !== this.toastEl || tt && Vt) {
          this.toastEl = Vt;
          const tt = null === Vt || void 0 === Vt ? void 0 : Vt.getBoundingClientRect();
          this.toast = tt && tt.width > 0 && tt.height > 0 ? {
            left: tt.left,
            top: tt.top,
            right: tt.right,
            bottom: tt.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(tt, et, Vt) {
        var Ot;
        const qt = this.anchorOf(tt);
        if (!qt) return 0;
        const Dt = qt.x + Vt + (null !== (Ot = this.labelOffsets.get(tt)) && void 0 !== Ot ? Ot : 0),
          {
            halfWidth: mt,
            labelled: dt
          } = this.extentOf(tt),
          jt = qt.y + this.em * (dt ? 6.2 : 3);
        return jt < et.top - 6 || Dt + mt < et.left - 6 || Dt - mt > et.right + 6 ? 0 : et.top - 6 - jt
      }
      watch(tt) {
        var et, Vt;
        this.tracker && this.sizes.unobserve(this.tracker), null === (et = this.hud) || void 0 === et || et.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = tt, this.hud = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.closest(".Baf2QuestHud")) && void 0 !== Vt ? Vt : null, this.box = null, this.boxStale = !0, tt && this.sizes.observe(tt), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(tt, et) {
        var Vt;
        const Ot = this.anchorOf(tt);
        if (!Ot) return 0;
        const {
          y: qt
        } = Ot, Dt = Ot.x + (null !== (Vt = this.labelOffsets.get(tt)) && void 0 !== Vt ? Vt : 0), mt = this.em, {
          halfWidth: dt,
          labelled: jt
        } = this.extentOf(tt), Ht = qt - mt, Xt = Dt + dt;
        return qt + mt * (jt ? 6.2 : 3) < et.top || Ht > et.bottom || Xt < et.left - 6 || Dt - dt > et.right ? 0 : Math.max(et.left - 6 - Xt, 6 - (Dt - dt))
      }
      shiftOnScreen(tt) {
        var et;
        const Vt = this.anchorOf(tt);
        if (!Vt) return 0;
        const {
          halfWidth: Ot
        } = this.extentOf(tt), qt = Vt.x + (null !== (et = this.labelOffsets.get(tt)) && void 0 !== et ? et : 0), Dt = qt + Ot - (this.innerWidth - 6);
        return Dt > 0 ? -Dt : Math.max(0, 6 - (qt - Ot))
      }
      runLabelAside(tt, et) {
        var Vt;
        let Ot = null;
        for (let mt = 0; mt < tt.children.length; mt++) tt.children[mt].classList.contains("DirectionArrowLabel") && (Ot = tt.children[mt]);
        if (!Ot) return 0;
        const qt = tt.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(tt) : null,
          Dt = (qt && this.api ? this.side.sideOf(this.api, {
            x: qt.x / this.innerWidth * 100,
            y: qt.y / this.innerHeight * 100
          }, et, this.project) : 0) * this.halfWidthOf(Ot);
        return Dt !== (null !== (Vt = this.sideLabels.get(Ot)) && void 0 !== Vt ? Vt : 0) && (Ot.style.transform = 0 === Dt ? "" : `translateX(-50%) translateX(${Dt}px)`, 0 === Dt ? this.sideLabels.delete(Ot) : this.sideLabels.set(Ot, Dt)), Dt
      }
      extentOf(tt) {
        let et = this.em,
          Vt = !1;
        for (let Ot = 0; Ot < tt.children.length; Ot++) {
          const qt = tt.children[Ot],
            Dt = qt.classList.contains("DirectionArrowLabel");
          Vt ||= Dt, (Dt || qt.classList.contains("DirectionArrowDistance")) && (et = Math.max(et, this.halfWidthOf(qt)))
        }
        return {
          halfWidth: et,
          labelled: Vt
        }
      }
      halfWidthOf(tt) {
        let et = this.halfWidths.get(tt);
        return void 0 === et && (et = tt.offsetWidth / 2, this.halfWidths.set(tt, et), this.sizes.observe(tt), this.labels.add(tt)), et
      }
      forgetGoneLabels() {
        for (const tt of this.labels) tt.isConnected || (this.sizes.unobserve(tt), this.halfWidths.delete(tt), this.labels.delete(tt))
      }
      anchorOf(tt) {
        const et = tt.style.translate,
          Vt = this.anchors.get(tt);
        if (Vt && Vt.translate === et && Vt.innerWidth === this.innerWidth && Vt.innerHeight === this.innerHeight) return Vt;
        const Ot = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(et);
        if (!Ot) return null;
        const qt = {
          translate: et,
          x: parseFloat(Ot[1]) / 100 * this.innerWidth,
          y: parseFloat(Ot[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(tt, qt), qt
      }
    }
    const ea = "Baf2ArrowText";

    function Va(tt, et) {
      const Vt = tt.rows.find((tt => tt.current));
      return Zt(tt.tutorial) && null !== Vt && void 0 !== Vt && Vt.item && iq(Vt) && ct(Vt.item).includes(et) ? Vt.item : null
    }
    const Oa = new class {
      constructor(tt) {
        this.select = tt, this.picks = new Map
      }
      open(tt, et, Vt) {
        const Ot = Va(et, tt);
        null !== Ot && this.il(tt, Ot, Vt)
      }
      follow(tt, et) {
        if (dt())
          for (const [Vt, {
              item: Ot,
              had: qt
            }] of this.picks) {
            const Dt = Va(tt, Vt);
            Dt !== Ot && (null !== Dt && et(Ot) > qt ? this.il(Vt, Dt, et) : this.picks.delete(Vt))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      il(tt, et, Vt) {
        this.picks.set(tt, {
          item: et,
          had: Vt(et)
        }), this.select(tt, et)
      }
    }(Lq.n);

    function qa(tt) {
      return et => {
        let Vt = 0;
        for (const Ot of tt.getInventoryItems())(null === Ot || void 0 === Ot ? void 0 : Ot.name) === et && (Vt += null === Ot.amount ? 1 : Math.max(Ot.amount, 0));
        return Vt
      }
    }

    function Da(tt, et, Vt, Ot) {
      tt.getClientOption(et, "canCraft") && "inventory" !== bq.b.get("openInGameMenuName") && (Oa.open(Vt, Ot.get(), qa(tt)), Zq.j.sw("toggleMenu", `inventory|${Vt}`))
    }
    let ma = null,
      da = !1;

    function ja(tt) {
      const et = KD();
      tt === ma && et === da || (ma = tt, da = et, (0, Lq.r)(function(tt, et) {
        const Vt = new Map;
        for (let Ot = tt + 1; Ot <= qt.length; Ot++) {
          const qt = YD(Ot, tt, et);
          if (qt)
            for (const et of Nt(Ot).unlocks) Vt.set(et, {
              ...qt,
              stepsAway: Ot - tt
            })
        }
        return Vt
      }(tt, et)))
    }

    function Ha() {
      return tt = () => {
        null !== ma && ja(ma)
      }, (0, CD.j)(uD, tt);
      var tt
    }

    function Xa() {
      return (0, Lq.y)(iD(Object.keys(St), zD)), () => {
        (0, Lq.y)([])
      }
    }

    function Qa(tt, et, Vt) {
      var Ot, qt;
      const Dt = tt.getTargetedBlock();
      if (!Dt || ! function(tt, et, Vt) {
          if ("Chest" !== et) return !1;
          const Ot = tt.split("|")[0];
          if (!XV(Ot) || 0 === Le[Ot].outputSlots.length) return !1;
          const qt = Wy(tt);
          return Vt[0] === qt[0] && Vt[1] === qt[1] && Vt[2] === qt[2]
        }(Vt, null === (Ot = tt.bVt(et)) || void 0 === Ot ? void 0 : Ot.name, Dt.normal)) return !1;
      const [mt, dt, jt] = Dt.gw, Ht = tt.getBlockId(mt, dt, jt);
      return 0 === Ht || !0 === (null === (qt = It.h[Ht]) || void 0 === qt ? void 0 : qt.canBePlacedOver)
    }
    var la = Vt(36996);
    const Ea = new Set(yV.d);
    class fa {
      constructor(tt) {
        this.toasts = tt, this.lastAt = -1 / 0
      }
      onAltAction(tt, et, Vt) {
        const Ot = tt.getTargetedBlock();
        if (!Ot || function(tt) {
            const et = tt.split("|")[0];
            return XV(et) || null !== KO(et) || vt(et) || yV.d.includes(et)
          }(Vt) && !Ea.has(Vt.split("|")[0])) return;
        const qt = tt.bVt(et);
        if (!qt || !Ea.has(qt.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const Dt = qt.typeObj.id,
          [mt, dt, jt] = Ot.gw,
          Ht = tt.getBlockId(mt, dt, jt),
          Xt = It.h[Ht];
        (0 === Ht || null !== Xt && void 0 !== Xt && Xt.OE || null !== Xt && void 0 !== Xt && Xt.canBePlacedOver) && tt.isSolidToPlayerBlockId(Dt) && tt.canModifyBlockAt(mt, dt, jt) && tt.Zet(mt, dt, jt, Dt) && !tt.Zet(mt, dt, jt, Dt, et) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Lt.pe)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Lt.P.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class wa {
      constructor(tt) {
        this.show = tt, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(tt, et, Vt) {
        var Ot;
        if (!et) return this.started = null, void this.gatedThisHold.clear();
        if (!tt) return void(this.started = null);
        const qt = `${tt.x},${tt.y},${tt.z},${tt.Pd}`;
        if (qt === this.started) return;
        this.started = qt;
        const Dt = GO(tt.y) ? HN(tt.block, tt.Pd, tt.level) : null;
        if (null === Dt || this.gatedThisHold.has(qt)) return;
        this.gatedThisHold.add(qt);
        const mt = tt.block.split("|")[0];
        Vt - (null !== (Ot = this.hintedAt.get(mt)) && void 0 !== Ot ? Ot : -1 / 0) < 5e3 || (this.hintedAt.set(mt, Vt), this.show({
          baf2ToastText: XN(Dt, tt.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var ya = Vt(39);

    function Na(tt, et) {
      const Vt = [...tt.baf2CoreBankPaused];
      for (const [qt] of tt.baf2CoreBanked) Vt.push(qt);
      for (const mt of qt) {
        for (const {
            item: tt
          }
          of mt.cost) Vt.push(tt);
        for (const tt of mt.newDeposits) Vt.push(tt.block);
        for (const tt of mt.unlocks) Vt.push(tt, Rt(tt));
        mt.reward && Vt.push(mt.reward);
        for (const {
            item: tt
          }
          of null !== (Ot = null === (Dt = mt.charge) || void 0 === Dt ? void 0 : Dt.items) && void 0 !== Ot ? Ot : []) {
          var Ot, Dt;
          Vt.push(tt)
        }
      }
      return {
        message: tt,
        itemNames: et([...new Set(Vt)])
      }
    }
    const aa = "baf2MultiblockGuide";
    const Ma = new Map;
    const ba = function(tt, et, Vt, qt) {
      let {
        localPlayerId: Dt
      } = qt;
      const mt = new Nd,
        dt = new dE,
        Ht = new fE,
        Xt = new lE(Ht),
        Qt = (tt, et) => {
          et ? Xt.observe(tt) : Xt.unobserve(tt)
        },
        lt = new QE,
        Et = new yE(Qt),
        ft = tt => Et.covers(tt),
        wt = new FE;
      let yt;
      const Nt = new om((tt => {
          yt.sendCommand(tt)
        })),
        Mt = () => {
          Nt.send("baf2questbook")
        },
        bt = tt => function(tt, et, Vt) {
          const Ot = {};
          for (const qt of Vt) {
            let Vt = Ma.get(qt);
            void 0 === Vt && (Vt = tt.getItemStat(et, qt, "displayName"), Ma.set(qt, Vt)), Ot[qt] = Vt
          }
          return Ot
        }(yt, Dt, tt),
        Jt = new zq(Mt),
        Ct = new pE((() => bq.b.get("loadingOverlayVisible"))),
        ut = new SX(Nt, Jt, Ct),
        Kt = new nE,
        ht = new fa(Ct),
        Wt = new wa((tt => {
          Ct.show(tt, tt.baf2ToastMs)
        })),
        St = new jf(Qt),
        ct = new ky(St),
        Rt = new Km,
        Pt = new mN,
        Zt = new Od,
        kt = new wf({
          read: () => !1 !== ya.e.getItem(aa),
          write: tt => {
            ya.e.setItem(aa, tt)
          }
        }),
        Gt = new Af(kt),
        zt = new pf(kt),
        ot = new ww(kt, (tt => function(tt, et) {
          const Vt = Vj(et.w, et.h, et.d),
            Ot = new Uint8Array(Vt);
          for (let qt = 0; qt < Vt; qt++) {
            const Vt = Gf(tt, nV(et, OO(et, qt)));
            Ot[qt] = null === Vt ? 0 : sd(Vt)
          }
          return Ot
        }(yt, tt)), mw(Nt)),
        rt = new yw(kt, mw(Nt)),
        Ut = new Ew,
        Yt = (tt, et) => {
          let [Vt, Ot, qt] = tt;
          Ut.answered(et) || Ct.show({
            baf2ToastText: [(0, Lt.pe)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: Vt,
                h: Ot,
                d: qt
              }
            }, Lt.P.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      ot.onSizeNotTaken(Yt), rt.onSizeNotTaken(Yt);
      const Bt = new bw,
        pt = new ey(kt),
        Tt = new Oy,
        gt = new fy(Tt),
        st = new hy,
        te = new Gy,
        ee = new xy(te),
        Ve = new DN(te),
        Oe = te.lookSource(),
        qe = new bN({
          handles: tt => Oe.handles(tt) || tt === Ft,
          line: (tt, et) => tt === Ft ? function(tt, et, Vt) {
            var Ot;
            const qt = it(null === (Ot = et.at(Vt)) || void 0 === Ot ? void 0 : Ot.item);
            return null === qt ? {
              key: `${NN}lookFarmEmpty`
            } : {
              key: tt.blockIdToBlockName(tt.getBlockId(Vt[0], Vt[1], Vt[2])).endsWith("|Running") ? `${NN}lookFarmRunning` : `${NN}lookFarmWaiting`,
              keys: {
                mob: At(qt)
              }
            }
          }(yt, St, et) : Oe.line(tt, et),
          version: () => Oe.version() + St.version()
        }, (tt => Tf(kt.all(), tt, (tt => Gf(yt, tt)))), (() => Jt.get().tier)),
        De = new zw,
        me = new ZN,
        de = new oN,
        je = oN.blade(),
        He = new xN,
        Xe = new Vf,
        Qe = new ta,
        Ee = new iN,
        fe = new AN;
      let we = -1 / 0,
        ye = 0,
        Ne = -1 / 0,
        ae = -1 / 0;
      const Me = () => {
          Nt.send("baf2islandsclose"), ae = Date.now()
        },
        be = [];

      function Je(tt) {
        var et, Vt, Ot, qt, Dt, mt, jt;
        "core" === (null === (et = dt.get()) || void 0 === et ? void 0 : et.kind) && "core" !== (null === tt || void 0 === tt ? void 0 : tt.kind) && Nt.send("baf2coreclose"), "power" === (null === (Vt = dt.get()) || void 0 === Vt ? void 0 : Vt.kind) && "power" !== (null === tt || void 0 === tt ? void 0 : tt.kind) && Nt.send("baf2powerclose"), "water" === (null === (Ot = dt.get()) || void 0 === Ot ? void 0 : Ot.kind) && "water" !== (null === tt || void 0 === tt ? void 0 : tt.kind) && Nt.send(nt.t), "terminal" === (null === (qt = dt.get()) || void 0 === qt ? void 0 : qt.kind) && "terminal" !== (null === tt || void 0 === tt ? void 0 : tt.kind) && Nt.send("baf2terminalclose"), "islands" === (null === (Dt = dt.get()) || void 0 === Dt ? void 0 : Dt.kind) && "islands" !== (null === tt || void 0 === tt ? void 0 : tt.kind) && Me();
        const Ht = te.getStatus();
        "collider" === (null === (mt = dt.get()) || void 0 === mt ? void 0 : mt.kind) && "collider" !== (null === tt || void 0 === tt ? void 0 : tt.kind) && Ht && Nt.send(zj(Ht, "close"));
        const Xt = tt => "reactor" === tt || "battery" === tt;
        if (Xt(null === (jt = dt.get()) || void 0 === jt ? void 0 : jt.kind) && !Xt(null === tt || void 0 === tt ? void 0 : tt.kind)) {
          var Qt, lt, Et;
          const tt = "reactor" === (null === (Qt = dt.get()) || void 0 === Qt ? void 0 : Qt.kind) ? null === (lt = ot.get()) || void 0 === lt ? void 0 : lt.status.baf2RxAt : null === (Et = rt.get()) || void 0 === Et ? void 0 : Et.status.baf2BatAt;
          tt && Nt.send(le(tt, "close"))
        }
        "quests" === (null === tt || void 0 === tt ? void 0 : tt.kind) && Mt(), dt.set(tt), null === tt && Kt.release()
      }

      function Ce() {
        (0, Mq.c)(), Je(null)
      }
      let ue = new Set,
        Ke = !1;
      const he = {
        onCreate: tt => {
          yt = tt, yt.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const et of Se) {
            const tt = Le[et].inputSlots ? Zd(mt) : Rd(et, mt, Rt, Nt);
            be.push((0, Nq.c)(et, tt))
          }
          be.push((0, Mq.q)((0, Ot.createElement)(Ot.Fragment, null, (0, Ot.createElement)(ME, {
            controller: Et
          }), (0, Ot.createElement)(Qf, {
            store: St
          }), (0, Ot.createElement)(CN, {
            store: qe
          }), (0, Ot.createElement)(YE, {
            store: Jt
          }), (0, Ot.createElement)(gE, {
            store: Ct
          }), (0, Ot.createElement)(tf, {
            store: Kt
          }), (0, Ot.createElement)(qf, {
            store: Xe
          }), (0, Ot.createElement)(Mw, {
            store: Bt
          }), (0, Ot.createElement)(qy, {
            store: Tt
          })), {
            content: (0, Ot.createElement)(jE, {
              commands: Nt,
              store: dt,
              power: Rt,
              water: Zt,
              reactor: ot,
              battery: rt,
              collider: te,
              terminal: Pt,
              quests: Jt,
              tutorial: ut,
              close: Mq.g,
              leave: () => {
                Kt.dropHeld(), (0, Mq.c)()
              },
              askIslands: () => {
                ae = -1 / 0, we = Date.now(), ye = Nt.send(xt)
              },
              openSocial: () => {
                (0, Mq.c)(), bq.b.set({
                  openEverythingMenuName: lV.o.SOCIAL
                })
              },
              showCore: tt => {
                Je({
                  kind: "core",
                  core: tt
                }), Nt.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Je(null)
            }
          })), be.push((0, aq.y)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Je({
                kind: "quests"
              }), (0, Mq.m)()
            }
          })), be.push(function(tt, et) {
            let Vt = null,
              Ot = () => {};
            const qt = et => {
              var qt;
              let {
                tutorial: Dt,
                tutorialKnown: mt
              } = et;
              (null === (qt = Vt) || void 0 === qt ? void 0 : qt.tutorial) === Dt && Vt.tutorialKnown === mt || (Vt = {
                tutorial: Dt,
                tutorialKnown: mt
              }, Ot = (0, aq.y)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: vX[Dt],
                icon: {
                  kind: "icon",
                  name: hX[Dt]
                },
                iconOnly: !0,
                disabled: !mt,
                className: "Baf2TutorialButton",
                onClick: () => {
                  tt.next()
                }
              }))
            };
            qt(et.get());
            const Dt = Zq.j.subscribe(Fq, qt);
            return () => {
              Zq.j.unsubscribe(Dt), Ot()
            }
          }(ut, Jt)), Ke = !1, be.push(Ha()), be.push(Xa()), be.push(function() {
            const tt = Zq.j.subscribe(Fq, nq),
              et = () => {
                if (sq) {
                  const tt = sq;
                  sq = null, (0, Lq.v)(tt)
                }
              },
              Vt = Zq.j.subscribe("toggleMenu", (tt => {
                "inventory" === (null === tt || void 0 === tt ? void 0 : tt.split("|")[0]) && et()
              })),
              Ot = Zq.j.subscribe("appManagerUpdated|openInGameMenuName", (tt => {
                "inventory" === tt && et()
              }));
            return () => {
              Zq.j.unsubscribe(tt), Zq.j.unsubscribe(Vt), Zq.j.unsubscribe(Ot)
            }
          }()), be.push(function(tt) {
            const et = qa(tt),
              Vt = Zq.j.subscribe(Fq, (tt => {
                Oa.follow(tt, et)
              }));
            return () => {
              Zq.j.unsubscribe(Vt), Oa.clear()
            }
          }(yt)), be.push(function() {
            const tt = document.documentElement,
              et = (0, GE.d)(".InvenBodyRight", [], (() => {
                const et = document.querySelector(".InvenBodyRight");
                et && tt.style.setProperty("--baf2-backpack-width", `${et.offsetWidth}px`)
              }));
            return () => {
              et(), tt.style.removeProperty("--baf2-backpack-width")
            }
          }()), be.push(function() {
            const tt = document.documentElement;
            return tt.classList.add(ea), () => {
              tt.classList.remove(ea)
            }
          }()), be.push((() => {
            Xt.dispose(), Ht.dispose()
          })), wt.start(yt), be.push((() => {
            wt.dispose(), He.dispose(), ct.dispose()
          }))
        },
        onClose: () => {
          (0, Lq.v)([]), sq = null, gq = new Set, ma = null, (0, Lq.r)(new Map), Ma.clear();
          for (const tt of be) tt();
          Jt.dispose(), qe.dispose(), Ct.dispose(), Kt.dispose(), De.dispose(), me.dispose(yt), Gt.dispose(yt), zt.dispose(yt), pt.dispose(yt), gt.dispose(yt), Tt.dispose(), st.dispose(), kt.dispose(), ot.dispose(), rt.dispose(), Bt.dispose(), de.dispose(), je.dispose(), Xe.dispose(), ee.dispose(yt), Ve.dispose(yt), te.dispose(), Qe.dispose(), Nt.clear()
        },
        onAfterRender: (tt, et) => {
          var Vt, Ot, qt;
          try {
            wt.onAfterRender(et)
          } catch (Ht) {
            console.error("Error drawing BAF2 belt items", Ht)
          }
          try {
            He.onAfterRender(yt, Dt)
          } catch (Ht) {
            console.error("Error drawing BAF2 jet flames", Ht)
          }
          Ke || (Ke = !0, Nt.send("baf2clientready"));
          const mt = yt.getPositionView(Dt);
          Et.onAfterRender(et, mt, lt), St.onAfterRender(et, mt, lt, ft), Xt.run(lt), De.onAfterRender(yt, mt), me.onAfterRender(yt, mt), ct.onAfterRender(yt, mt), Gt.onAfterRender(yt, mt), zt.onAfterRender(yt, Dt, mt), pt.onAfterRender(yt, Dt, mt), gt.onAfterRender(yt, Dt), st.onAfterRender(yt, mt), Jt.onPlayerY(mt[1]), ee.onAfterRender(yt), Ve.onAfterRender(yt, Dt, mt);
          const jt = yt.getTargetedBlock();
          qe.onAfterRender(yt, Dt, null !== (Vt = null === jt || void 0 === jt ? void 0 : jt.o3) && void 0 !== Vt ? Vt : 0, null !== (Ot = null === jt || void 0 === jt ? void 0 : jt.position) && void 0 !== Ot ? Ot : null), Qe.onAfterRender(yt, et), Wt.onMining(function(tt, et) {
            var Vt, Ot;
            const qt = tt.getMiningBlock();
            if (!qt) return null;
            const Dt = (0, It.d)(tt.getBlockId(qt[0], qt[1], qt[2])),
              mt = null !== (Vt = null === (Ot = tt.bVt(et)) || void 0 === Ot ? void 0 : Ot.name) && void 0 !== Vt ? Vt : null,
              dt = tt.getItemStat(et, Dt.split("|")[0], "harvestLevel");
            return {
              block: Dt,
              x: qt[0],
              y: qt[1],
              z: qt[2],
              Pd: mt,
              level: dt
            }
          }(yt, Dt), yt.isMining(), performance.now()), "dropMap" === (null === (qt = dt.get()) || void 0 === qt ? void 0 : qt.kind) && GO(mt[1]) && Ce()
        },
        onPlayerChangeBlock: (tt, et, Vt, Ot, qt, mt) => {
          tt === Dt && function(tt, et, Vt, Ot, qt, Dt, mt) {
            const dt = UN(Dt, mt, tt.isPlayerCrouching(et));
            if (null === dt) return;
            if (tt.fR(Vt, Ot, qt, dt), !tt.getClientOption(et, "canPickUpItems")) return;
            const jt = dV[dt.split("|")[0]];
            var Ht, Xt, Qt;
            void 0 !== jt && (Ht = tt.getInventoryItems(), Xt = jt, Qt = yf.e.maxItemStackSize, tt.getInventoryFreeSlotCount(et) > 0 || Ht.some((tt => null !== tt && tt.name === Xt && null !== tt.amount && tt.amount < Qt))) && tt.playSound(et, (0, la.g)("pickUp"), .5, 1)
          }(yt, tt, et, Vt, Ot, qt, mt)
        },
        onPlayerAltAction: (tt, et, Vt, Ot, qt) => {
          var mt, dt;
          if (!yt.getClientOption(Dt, "canPickUpItems")) return;
          const jt = null !== (mt = null === (dt = yt.bVt(Dt)) || void 0 === dt ? void 0 : dt.name) && void 0 !== mt ? mt : null,
            Ht = function(tt, et) {
              const Vt = tt.split("|")[0];
              return vt(Vt) && et !== jq && "Sky Pack" !== et ? Vt : null
            }(qt, jt);
          if (null !== Ht) return void(Ee.tap(Ht, performance.now()) && Da(yt, Dt, Ht, Jt));
          if (!UO(jt)) return;
          const Xt = fe.isNewPress(performance.now()),
            Qt = function(tt, et, Vt) {
              return !UO(et) || Vt ? null : sO(tt)
            }(qt, jt, yt.isPlayerCrouching(Dt));
          null !== Qt && Xt && yt.fR(et, Vt, Ot, Qt)
        },
        onPlayerAttemptAltAction: (tt, et, Vt, Ot, qt) => {
          if (function(tt, et, Vt, Ot, qt) {
              "Workbench" === Ot.split("|")[0] && tt.getClientOption(Vt, "canCraft") && (Oa.open("Workbench", qt.get(), qa(tt)), et.send("baf2station Workbench"))
            }(yt, Nt, Dt, qt, Jt), Qa(yt, Dt, qt)) return "preventAction";
          ht.onAltAction(yt, Dt, qt)
        },
        onReceivedMessageFromServer: (tt, et) => {
          if ("baf2MachineStatus" === tt) {
            var Vt, Ot, qt, Ht, Xt, Qt, lt, ft, Mt, ut, ht, vt, Wt, ct, It, Lt;
            const tt = et,
              Dt = tt.baf2MachineTaught;
            mt.set(tt.baf2MachinePos, {
              status: tt.baf2MachineStatus,
              power: null !== (Vt = tt.baf2MachinePower) && void 0 !== Vt ? Vt : null,
              opLeftMs: null !== (Ot = tt.baf2MachineOpLeftMs) && void 0 !== Ot ? Ot : null,
              dug: tt.baf2MachineYield ? {
                item: tt.baf2MachineYield,
                name: bt([tt.baf2MachineYield])[tt.baf2MachineYield]
              } : null,
              powerCap: null !== (qt = tt.baf2MachinePowerCap) && void 0 !== qt ? qt : null,
              powerRates: null !== (Ht = tt.baf2MachinePowerRates) && void 0 !== Ht ? Ht : null,
              coupled: !0 === tt.baf2MachineCoupled,
              couplerLevel: null !== (Xt = tt.baf2MachineCoupler) && void 0 !== Xt ? Xt : 1,
              taught: Dt,
              taughtName: Dt ? bt([Dt])[Dt] : null,
              tier: null !== (Qt = tt.baf2MachineTier) && void 0 !== Qt ? Qt : null,
              input: null !== (lt = tt.baf2MachineInput) && void 0 !== lt ? lt : null,
              inertCoupler: null !== (ft = tt.baf2MachineInertCoupler) && void 0 !== ft ? ft : null,
              inputShort: null !== (Mt = tt.baf2MachineInputShort) && void 0 !== Mt ? Mt : null,
              field: null !== (ut = tt.baf2MachineField) && void 0 !== ut ? ut : null,
              noSeeds: !0 === tt.baf2MachineNoSeeds,
              fuelFed: !0 === tt.baf2MachineFuelFed,
              fuelFeeds: !0 === tt.baf2MachineFuelFeeds,
              coreFull: !0 === tt.baf2MachineCoreFull,
              waterUnpowered: !0 === tt.baf2MachineWaterUnpowered,
              powerShort: !0 === tt.baf2MachinePowerShort,
              powerWait: !0 === tt.baf2MachinePowerWait,
              reactorPowered: !0 === tt.baf2MachineReactorPowered,
              fuelLeftMs: null !== (ht = tt.baf2MachineFuelLeftMs) && void 0 !== ht ? ht : null,
              burning: null !== (vt = tt.baf2MachineBurning) && void 0 !== vt ? vt : null,
              fuelKeep: null !== (Wt = tt.baf2MachineFuelKeep) && void 0 !== Wt ? Wt : null,
              water: null !== (ct = tt.baf2MachineWater) && void 0 !== ct ? ct : null,
              farm: null !== (It = tt.baf2MachineFarm) && void 0 !== It ? It : null,
              cryo: null !== (Lt = tt.baf2MachineCryo) && void 0 !== Lt ? Lt : null
            })
          } else if ("baf2StationOpen" === tt) {
            const tt = et.baf2Station;
            Ee.consumeServerOpen(tt, performance.now()) || Da(yt, Dt, tt, Jt)
          } else if ("baf2Power" === tt) {
            const tt = et;
            Rt.set(tt), tt.baf2PowerOpen && (Je({
              kind: "power"
            }), (0, Mq.m)())
          } else if (tt === nt.w) {
            const tt = et;
            Zt.set(tt), tt.baf2WaterOpen && (Je({
              kind: "water"
            }), (0, Mq.m)())
          } else if ("baf2RxPlans" === tt) {
            var Ft, Gt, zt;
            const tt = et;
            kt.gM(tt);
            const Vt = new Set(tt.baf2RxPlanList.map((tt => {
              let [et, Vt, Ot] = tt;
              return `${et},${Vt},${Ot}`
            })));
            Bt.retain(Vt);
            const Ot = null === (Ft = dt.get()) || void 0 === Ft ? void 0 : Ft.kind,
              qt = "reactor" === Ot ? null === (Gt = ot.get()) || void 0 === Gt ? void 0 : Gt.status.baf2RxAt : "battery" === Ot ? null === (zt = rt.get()) || void 0 === zt ? void 0 : zt.status.baf2BatAt : void 0;
            qt && ue.has(qt.join(",")) && !Vt.has(qt.join(",")) && Ce(), ue = Vt
          } else if ("baf2RxStatus" === tt) {
            const tt = et;
            ot.set(tt), tt.baf2RxOpen && (Je({
              kind: "reactor"
            }), (0, Mq.m)())
          } else if ("baf2BatStatus" === tt) {
            const tt = et;
            rt.set(tt), tt.baf2BatOpen && (Je({
              kind: "battery"
            }), (0, Mq.m)())
          } else if ("baf2RxAlarm" === tt) Bt.gM(et);
          else if ("baf2Bomb" === tt) Tt.gM(et, yt.getPositionView(Dt));
          else if ("baf2Fallout" === tt) st.gM(et);
          else if ("baf2ColBeams" === tt) te.onBeams(et);
          else if ("baf2ColStatus" === tt) {
            const tt = et;
            var At, it;
            if (te.onStatus(tt), tt.baf2ColOpen) te.onOpen(null !== (At = null === (it = yt.bVt(Dt)) || void 0 === it ? void 0 : it.name) && void 0 !== At ? At : null), Je({
              kind: "collider"
            }), (0, Mq.m)()
          } else if ("baf2Terminal" === tt) {
            const tt = et;
            var Yt;
            if (Pt.apply(tt)) tt.baf2TermReset && (Je({
              kind: "terminal"
            }), (0, Mq.m)());
            else "terminal" === (null === (Yt = dt.get()) || void 0 === Yt ? void 0 : Yt.kind) && (dt.set(null), (0, Mq.c)())
          } else if ("baf2Core" === tt) {
            var pt;
            const tt = et;
            if (jt(!0 === tt.baf2CoreNuclear), function(tt, et) {
                return "core" === (null === tt || void 0 === tt ? void 0 : tt.kind) && et.baf2CoreTier > tt.core.message.baf2CoreTier
              }(dt.get(), tt)) return void(0, Mq.c)();
            if (tt.baf2CoreRefresh && "core" !== (null === (pt = dt.get()) || void 0 === pt ? void 0 : pt.kind)) return;
            Je({
              kind: "core",
              core: Na(tt, bt)
            }), tt.baf2CoreRefresh || (0, Mq.m)()
          } else if ("baf2WrenchUndo" === tt) {
            const {
              baf2WrenchPos: tt,
              baf2WrenchBlock: Vt
            } = et;
            yt.fR(tt[0], tt[1], tt[2], Vt)
          } else if ("baf2Toast" === tt) {
            const tt = et;
            Ut.heard(performance.now(), tt.baf2ToastMs), Ct.show(tt)
          } else if ("baf2Area" === tt) Kt.arrive(et, null !== dt.get());
          else if ("baf2Quest" === tt) {
            const tt = et;
            jt(!0 === tt.baf2QuestNuclear), Jt.set(tt, function(tt, et) {
              var Vt, Ot, qt, Dt, mt;
              const dt = [];
              for (const [, , Xt, , , , , , Qt, lt] of tt.baf2QuestSteps) null !== Xt && dt.push(Xt), dt.push(...null !== Qt && void 0 !== Qt ? Qt : [], ...null !== lt && void 0 !== lt ? lt : []);
              tt.baf2QuestReward && dt.push(tt.baf2QuestReward);
              const jt = null === (Vt = tt.baf2QuestSide) || void 0 === Vt ? void 0 : Vt[2][2];
              jt && dt.push(jt), dt.push(...null !== (Ot = null === (qt = tt.baf2QuestSide) || void 0 === qt ? void 0 : qt[2][8]) && void 0 !== Ot ? Ot : [], ...null !== (Dt = null === (mt = tt.baf2QuestSide) || void 0 === mt ? void 0 : mt[2][9]) && void 0 !== Dt ? Dt : []);
              for (const [Xt] of null !== (Ht = tt.baf2QuestAlso) && void 0 !== Ht ? Ht : []) {
                var Ht;
                dt.push(Xt)
              }
              return et(dt)
            }(tt, bt)), ja(tt.baf2QuestTier)
          } else if ("baf2Route" === tt) ! function(tt, et) {
            let {
              baf2RouteCells: Vt,
              baf2RouteInto: Ot
            } = et;
            0 !== Vt.length && Ot ? tt.setRouteChevrons({
              cells: Vt.map(((tt, et) => {
                const [qt, , Dt] = function(tt, et, Vt) {
                  const Ot = Vt + 1 < tt.length ? tt[Vt + 1] : et;
                  return [Ot[0] - tt[Vt][0], 0, Ot[2] - tt[Vt][2]]
                }(Vt, Ot, et);
                return {
                  pos: tt,
                  way: [qt, Dt]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : tt.setRouteChevrons(null)
          }(yt, et);
          else if ("baf2QuestBook" === tt) Jt.setBook(et);
          else if ("baf2Stalls" === tt) Et.set(et.baf2StallCells);
          else if (tt === yV.o) wt.onMoves(et);
          else if (tt === yV.i) wt.onLines(et);
          else if ("baf2Labels" === tt) St.gM(et);
          else if ("baf2DropMap" === tt) Je({
            kind: "dropMap",
            dropMap: et
          }), (0, Mq.m)();
          else if ("baf2Islands" === tt) {
            var gt, ee;
            const tt = et;
            if (Nt.syncIslandEdits(tt.baf2IslandsAnswered), !tt.baf2IslandsOpen && "islands" !== (null === (gt = dt.get()) || void 0 === gt ? void 0 : gt.kind)) return;
            if (tt.baf2IslandsOpen) {
              var Ve, Oe;
              const et = bq.b.get("openEverythingMenuName"),
                Vt = Nt.sent() >= ye,
                Ot = "other" !== (fe = {
                  askedAtMs: we,
                  askSent: Vt,
                  reaskedAtMs: Ne,
                  nowMs: Date.now(),
                  panel: null !== (Ve = null === (Oe = dt.get()) || void 0 === Oe ? void 0 : Oe.kind) && void 0 !== Ve ? Ve : null,
                  inGameMenu: bq.b.get("openInGameMenuName"),
                  everythingMenu: null === et ? null : et === lV.o.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== tt.baf2IslandsFocusInvite
                }).everythingMenu && (!!fe.focusInvite || "islands" === fe.panel && "clientGame" === fe.inGameMenu || !(fe.nowMs - fe.reaskedAtMs < LH) && (fe.askSent && fe.nowMs - fe.askedAtMs < LH ? "core" === fe.panel && "clientGame" === fe.inGameMenu && null === fe.everythingMenu : "shop" === fe.everythingMenu || null === fe.inGameMenu));
              if (Vt && (we = -1 / 0), Ne = -1 / 0, !Ot) return void Me()
            }
            const Vt = (De = tt.baf2IslandsOpen, me = "islands" === (null === (ee = dt.get()) || void 0 === ee ? void 0 : ee.kind), Qe = ae, le = Date.now(), De && !me && le - Qe < LH);
            Je({
              kind: "islands",
              islands: tt,
              arrivedAtMs: Date.now(),
              backToCore: FH(dt.get())
            }), Vt && (ae = -1 / 0, Ne = Date.now(), Nt.send(xt)), tt.baf2IslandsOpen && ("clientGame" !== bq.b.get("openInGameMenuName") && (0, Jq.f)(), (0, Mq.m)())
          } else if ("baf2CoopTransfer" === tt) {
            var qe;
            const tt = et;
            tt.baf2TransferOn ? (Je({
              kind: "transfer",
              transfer: tt,
              arrivedAtMs: Date.now()
            }), (0, Mq.m)()) : "transfer" === (null === (qe = dt.get()) || void 0 === qe ? void 0 : qe.kind) && (0, Mq.c)()
          } else "baf2IslandLeft" === tt ? (Kt.dropHeld(), null !== dt.get() && Ce(), "inventory" === bq.b.get("openInGameMenuName") && (0, Jq.f)()) : "baf2Arc" === tt ? de.gM(yt, et) : "baf2Blade" === tt ? je.onBlade(yt, et) : "baf2JetFlame" === tt ? He.gM(yt, et) : "baf2GearPower" === tt && Xe.gM(et);
          var De, me, Qe, le, fe
        }
      };
      return he
    }
  },
  38733: (tt, et, Vt) => {
    function Ot(tt, et, Vt) {
      const Ot = new Set,
        qt = new ResizeObserver(Vt),
        Dt = () => {
          const et = new Set(document.querySelectorAll(tt));
          let Dt = !1;
          for (const tt of Ot) et.has(tt) || (qt.unobserve(tt), Ot.delete(tt), Dt = !0);
          for (const tt of et) Ot.has(tt) || (qt.observe(tt), mt.observe(tt, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Ot.add(tt));
          Dt && Vt()
        },
        mt = new MutationObserver((et => {
          et.some((tt => "attributes" === tt.type)) && Vt(), et.some((et => function(tt, et, Vt) {
            if ("childList" !== tt.type) return !1;
            for (const Ot of tt.addedNodes)
              if (Ot instanceof Element && (Ot.matches(et) || Ot.querySelector(et))) return !0;
            for (const Ot of tt.removedNodes)
              if (Ot instanceof Element)
                for (const tt of Vt)
                  if (Ot.contains(tt)) return !0;
            return !1
          }(et, tt, Ot))) && Dt()
        }));
      mt.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const dt of et) qt.observe(dt);
      return window.addEventListener("resize", Vt), Dt(), Vt(), () => {
        qt.disconnect(), mt.disconnect(), window.removeEventListener("resize", Vt)
      }
    }
    Vt.d(et, {
      d: () => Ot
    })
  },
  38718: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt
    });
    var Ot = Vt(38716);
    const qt = 5,
      Dt = [0, 0, 0],
      mt = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function dt(tt, et, Vt, dt, jt, Ht) {
      let [Xt, Qt, lt] = dt;
      const Et = (Xt + .5 - Vt[0]) ** 2 + (Qt - Vt[1]) ** 2 + (lt + .5 - Vt[2]) ** 2;
      let ft = null;
      Et <= Ht ** 2 && (Dt[0] = Xt + .5, Dt[1] = Qt + jt, Dt[2] = lt + .5, ft = et.projectWorldPosToViewport(Dt));
      const wt = null !== ft && ft.x > -qt && ft.x < 100 + qt && ft.y > -qt && ft.y < 100 + qt;
      return (0, Ot.g)(tt, !wt), wt ? (mt.x = ft.x, mt.y = ft.y, mt.distSq = Et, mt) : null
    }
  },
  38716: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      g: () => Dt
    });
    const Ot = new WeakMap;

    function qt(tt) {
      let et = Ot.get(tt);
      return et || (et = {
        hidden: tt.hidden,
        x: NaN,
        y: NaN
      }, Ot.set(tt, et)), et
    }

    function Dt(tt, et) {
      const Vt = qt(tt);
      Vt.hidden !== et && (Vt.hidden = et, tt.hidden = et)
    }

    function mt(tt, et, Vt) {
      const Ot = qt(tt);
      Ot.x === et && Ot.y === Vt || (Ot.x = et, Ot.y = Vt, tt.style.translate = `${et}vw ${Vt}vh`)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);