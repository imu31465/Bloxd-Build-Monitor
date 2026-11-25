export const id = 225;
export const ids = [225];
export const modules = {
  36998: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      h: () => Yu,
      j: () => hu,
      k: () => lu,
      o: () => cu,
      q: () => Du,
      r: () => bu,
      t: () => Mu,
      x: () => Ou,
      y: () => gu
    });
    var su = ju(22),
      Uu = ju(24);
    const Zu = "clientGameInventoryButtonsChanged",
      Xu = new Map;

    function lu() {
      return [...Xu.values()].sort(((uu, Eu) => {
        var ju, su;
        return (null !== (ju = uu.order) && void 0 !== ju ? ju : 0) - (null !== (su = Eu.order) && void 0 !== su ? su : 0)
      }))
    }
    let qu = null;

    function fu(uu) {
      qu = uu
    }
    let Cu = !1;

    function bu(uu) {
      Cu = !0;
      try {
        uu.onClick()
      } finally {
        Cu = !1
      }
      uu.panel && "clientGame" === su.d.get("openInGameMenuName") && fu(uu.id)
    }

    function cu() {
      return Cu
    }

    function Nu() {
      return lu().filter((uu => uu.panel && !uu.disabled))
    }

    function Ou(uu) {
      const Eu = Nu(),
        ju = Eu.findIndex((uu => uu.id === qu));
      return !(ju < 0 || Eu.length < 2) && (bu(Eu[(ju + uu + Eu.length) % Eu.length]), !0)
    }

    function Yu() {
      return null !== qu && Nu().length > 1
    }

    function hu() {
      fu(null)
    }

    function Du() {
      "inventory" !== su.d.get("openInGameMenuName") && fu(null)
    }

    function gu() {
      const uu = qu;
      return fu(null), uu
    }

    function Mu(uu) {
      return Xu.set(uu.id, uu), Uu.h.TY(Zu, lu(), !0), () => {
        Xu.get(uu.id) === uu && (Xu.delete(uu.id), Uu.h.TY(Zu, lu()))
      }
    }
  },
  36992: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      e: () => hu,
      g: () => Du,
      k: () => cu,
      l: () => fu,
      m: () => Yu,
      n: () => Nu,
      o: () => Cu
    });
    var su = ju(22),
      Uu = ju(24),
      Zu = ju(1343),
      Xu = ju(36998);
    const lu = "clientGameUiChanged";
    let qu = null;

    function fu() {
      return qu
    }

    function Cu(uu, Eu) {
      const ju = {
        content: uu,
        menu: Eu
      };
      return qu = ju, Uu.h.TY(lu, qu, !0), () => {
        qu === ju && (qu = null, Ou = !1, hu(), Uu.h.TY(lu, null))
      }
    }
    let bu = null;

    function cu() {
      return bu
    }

    function Nu(uu) {
      return bu = uu, () => {
        bu === uu && (bu = null)
      }
    }
    let Ou = !1;

    function Yu() {
      const uu = su.d.get("openInGameMenuName");
      "clientGame" !== uu && (Ou = "inventory" === uu), (0, Xu.o)() || (0, Xu.j)(), (0, Zu.t)(Zu.b), su.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hu() {
      gu(!1)
    }

    function Du() {
      gu(Ou)
    }

    function gu(uu) {
      "clientGame" === su.d.get("openInGameMenuName") && su.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, Xu.j)(), Ou = !1
    }
  },
  38825: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(38828);
    const Uu = [0, 0, 0];
    class Zu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uu;
        this.pool = uu, this.origin = Eu, this.count = 0, this.free = []
      }
      take() {
        var uu;
        const Eu = null !== (uu = this.free.pop()) && void 0 !== uu ? uu : this.count++;
        return Eu >= this.pool.Mb && this.pool.grow(Math.max(2 * this.pool.Mb, Eu + 1)), this.hide(Eu), Eu
      }
      release(uu) {
        this.hide(uu), this.free.push(uu)
      }
      write(uu, Eu, ju, Uu) {
        const {
          records: Zu
        } = this.pool, {
          origin: Xu
        } = this, lu = uu * su.e;
        Zu[lu] = Eu - Xu[0], Zu[lu + 1] = ju - Xu[1], Zu[lu + 2] = Uu - Xu[2], Zu[lu + su.h] = 0, this.pool.markDirty(uu)
      }
      hide(uu) {
        this.pool.records[uu * su.e + su.h] = 1, this.pool.markDirty(uu)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Xu {
      constructor(uu, Eu, ju) {
        this.api = uu, this.model = Eu, this.initialCapacity = ju, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(uu) {
        let Eu = this.kinds.get(uu);
        if (void 0 === Eu) {
          const ju = this.api.createInstancePool({
            ...this.model,
            item: uu
          }, this.initialCapacity);
          null === ju || void 0 === ju || ju.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Eu = ju && new Zu(ju, this.origin), this.kinds.set(uu, Eu)
        }
        return Eu
      }
      follow(uu) {
        const {
          origin: Eu
        } = this;
        if (Math.abs(uu[0] - Eu[0]) <= 512 && Math.abs(uu[1] - Eu[1]) <= 512 && Math.abs(uu[2] - Eu[2]) <= 512) return !1;
        Eu[0] = Math.floor(uu[0]), Eu[1] = Math.floor(uu[1]), Eu[2] = Math.floor(uu[2]);
        for (const ju of this.kinds.values()) null === ju || void 0 === ju || ju.pool.setOrigin(Eu[0], Eu[1], Eu[2]);
        return !0
      }
      commit() {
        for (const uu of this.kinds.values()) null === uu || void 0 === uu || uu.commit()
      }
      dispose() {
        for (const uu of this.kinds.values()) null === uu || void 0 === uu || uu.dispose();
        this.kinds.clear()
      }
    }
  },
  38836: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu,
      d: () => lu,
      e: () => qu
    });
    const su = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Uu = [0, 1, 2, 0, 2, 3],
      Zu = [4, 5];

    function Xu(uu, Eu, ju, su, Uu) {
      for (let Xu = 0; Xu < 6; Xu++) Zu.includes(Xu) === Uu && fu(uu, Eu, ju, su, Xu)
    }

    function lu(uu, Eu, ju, su) {
      for (let Uu = 0; Uu < 6; Uu++) fu(uu, Eu, ju, su, Uu)
    }

    function qu(uu, Eu, ju, Zu, Xu) {
      for (let lu = 0; lu < 6; lu++)
        for (const qu of [0, 1]) {
          const [fu, Cu, bu] = [qu + 2, qu + 1, (qu + 3) % 4], cu = uu.length / 3;
          for (const [Eu, Uu] of [
              [qu, Cu],
              [fu, Cu],
              [fu, bu],
              [qu, bu]
            ])
            for (let qu = 0; qu < 3; qu++) {
              const fu = su[3 * (4 * lu + Eu) + qu],
                Cu = su[3 * (4 * lu + Uu) + qu];
              uu.push((fu + (Cu - fu) * Xu) * Zu / 2 + ju[qu])
            }
          for (const uu of Uu) Eu.push(cu + uu)
        }
    }

    function fu(uu, Eu, ju, Zu, Xu) {
      let [lu, qu, fu] = ju, [Cu, bu, cu] = Zu;
      const Nu = uu.length / 3;
      for (let Uu = 4 * Xu; Uu < 4 * Xu + 4; Uu++) uu.push(su[3 * Uu] * Cu / 2 + lu, su[3 * Uu + 1] * bu / 2 + qu, su[3 * Uu + 2] * cu / 2 + fu);
      for (const su of Uu) Eu.push(Nu + su)
    }
  },
  38811: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Dg
    });
    var su = ju(58);
    const Uu = [{
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
      Zu = 10;
    let Xu = !0;

    function lu() {
      return Xu
    }

    function qu(uu) {
      Xu = uu
    }
    const fu = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function Cu() {
      return Xu ? Uu.length : Zu
    }

    function bu(uu) {
      var Eu, ju;
      return null !== (Eu = null === (ju = Uu[uu - 1]) || void 0 === ju ? void 0 : ju.reactorTier) && void 0 !== Eu ? Eu : 0
    }

    function cu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bu(uu) > 0;
      return ju && !Xu ? "hidden" : uu <= Eu ? "open" : ju ? Eu < 5 ? "hidden" : Eu < Zu ? "teaser" : "locked" : "locked"
    }

    function Nu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: su,
        n: Uu
      } = hu(uu);
      return {
        key: Eu[su],
        params: {
          [su]: ju ? String(Uu) : Uu
        }
      }
    }
    const Ou = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Yu(uu, Eu) {
      return bu(uu) > 0 && Eu < Zu
    }

    function hu(uu) {
      const Eu = bu(uu);
      if (Eu > 0) return {
        kind: "atomic",
        n: Eu,
        short: `A${Eu}`
      };
      const ju = function(uu) {
        return uu >= 6 && uu <= 10 ? uu - 6 + 1 : 0
      }(uu);
      return ju > 0 ? {
        kind: "stage",
        n: ju,
        short: `S${ju}`
      } : {
        kind: "tier",
        n: uu,
        short: String(uu)
      }
    }

    function Du(uu) {
      return Uu[Math.max(1, Math.min(uu, Uu.length)) - 1]
    }

    function gu(uu, Eu) {
      return uu < Eu ? function(uu) {
        var Eu;
        return null !== (Eu = Uu[uu]) && void 0 !== Eu ? Eu : null
      }(uu) : null
    }
    const Mu = "baf2coresubmit",
      eu = "baf2corebankpause",
      Gu = "baf2coredeposit",
      pu = "baf2corechargepause";

    function wu(uu) {
      var Eu;
      return null !== (Eu = uu.baf2CoreOpen) && void 0 !== Eu ? Eu : Zu
    }
    const Ju = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function du(uu) {
      return Ju.includes(uu)
    }
    const au = (uu, Eu) => Eu.map((Eu => [Eu, [uu]])),
      Pu = Object.fromEntries([...au("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...au("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...au("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...au("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...au("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...au("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...au("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...au("Parts Bench", ["Focus Lens"]), ...au("Machine Bench", ["Laser", "Collider"]), ...au("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...au("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...au("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...au("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...au("Tool Bench", ["Mob Cage"]), ...au("Tool Bench", ["Pocket Terminal"]), ...au("Tool Bench", ["Comet Beacon"]), ...au("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function ou(uu) {
      var Eu;
      return null !== (Eu = Pu[uu]) && void 0 !== Eu ? Eu : ["Workbench"]
    }

    function ku(uu) {
      return ou(uu)[0]
    }
    Uu.slice(1).map(((uu, Eu) => `Core Tier ${Eu+2}`));
    var mu = ju(9409);
    const vu = ["on", "hud", "off"];

    function Ku(uu) {
      return "on" === uu
    }
    var Vu = ju(349);
    const ru = "Mob Farm",
      Qu = {
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
      iu = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      Wu = {
        1: 20,
        2: 60,
        3: 120
      },
      Su = "baf2farmvoid",
      Iu = "Caged ",
      Fu = " Spawner Block";

    function Bu(uu) {
      return `lifeform:${(0,Vu.ze)(uu)}`
    }

    function Lu(uu) {
      if (!uu) return null;
      if (uu.startsWith(Iu)) {
        const Eu = uu.slice(6);
        return iu.includes(Eu) ? Eu : null
      }
      if (uu.endsWith(Fu)) {
        const Eu = uu.slice(0, -14);
        return void 0 !== Qu[Eu] ? Eu : null
      }
      return null
    }

    function tu(uu) {
      return !0 === uu.mobFarm
    }

    function xu(uu, Eu) {
      return Wu[Qu[Eu]] * uu.opMs / 1e3
    }
    const Tu = new Map;
    const Hu = "baf2islands",
      Au = "baf2islandnew";

    function nu(uu) {
      const Eu = Uu.findIndex((Eu => Eu.unlocks.includes(uu)));
      return Eu < 0 ? 1 : Eu + 1
    }

    function yu(uu) {
      return Math.floor(uu).toLocaleString("en-US")
    }
    var zu = ju(38754);
    const Ru = "baf2terminaltake",
      uE = "baf2terminalput",
      EE = ["one", "stack", "fill"];

    function jE(uu, Eu, ju) {
      return `${Ru} ${uu} ${Eu} ${ju}`
    }

    function sE(uu, Eu, ju) {
      return `${uE} ${uu} ${Eu} ${ju}`
    }

    function UE(uu) {
      return `${uE} ${uu}`
    }
    const ZE = [
      [`${Ru} `, "take"],
      [`${uE} `, "put"]
    ];

    function XE(uu) {
      const Eu = ZE.find((Eu => {
        let [ju] = Eu;
        return uu.startsWith(ju)
      }));
      if (!Eu) return null;
      const [ju, su] = Eu, [Uu, Zu, ...Xu] = uu.slice(ju.length).trim().split(" "), lu = Number(Uu);
      if (!Number.isSafeInteger(lu) || lu <= 0) return null;
      if ("put" === su && void 0 === Zu) return {
        kind: "putAll",
        seq: lu
      };
      const qu = function(uu) {
        if (EE.includes(uu)) return uu;
        const Eu = Number(uu);
        return /^\d+$/.test(uu) && Number.isSafeInteger(Eu) && Eu > 0 ? Eu : null
      }(null !== Zu && void 0 !== Zu ? Zu : "");
      return null === qu || 0 === Xu.length ? null : {
        kind: su,
        seq: lu,
        mode: qu,
        item: Xu.join(" ")
      }
    }

    function lE(uu, Eu) {
      const ju = "number" === typeof uu ? uu : "one" === uu ? 1 : "stack" === uu ? 99 : Eu;
      return Math.min(Eu, ju)
    }

    function qE(uu, Eu) {
      const ju = uu => "number" === typeof uu ? uu : "one" === uu ? 1 : 99;
      return "fill" === uu || "fill" === Eu ? "fill" : ju(uu) + ju(Eu)
    }

    function fE(uu, Eu) {
      const ju = XE(uu),
        su = XE(Eu),
        Uu = ju && su ? function(uu, Eu) {
          return "take" === uu.kind || "take" === Eu.kind ? "take" === uu.kind && "take" === Eu.kind && uu.item === Eu.item ? {
            ...Eu,
            mode: qE(uu.mode, Eu.mode)
          } : null : "putAll" === uu.kind || "putAll" === Eu.kind ? {
            kind: "putAll",
            seq: Eu.seq
          } : uu.item === Eu.item ? {
            ...Eu,
            mode: qE(uu.mode, Eu.mode)
          } : null
        }(ju, su) : null;
      return Uu ? "putAll" === (Zu = Uu).kind ? UE(Zu.seq) : "put" === Zu.kind ? sE(Zu.seq, Zu.mode, Zu.item) : jE(Zu.seq, Zu.mode, Zu.item) : null;
      var Zu
    }
    const CE = "baf2rx";

    function bE(uu, Eu) {
      for (var ju = arguments.length, su = new Array(ju > 2 ? ju - 2 : 0), Uu = 2; Uu < ju; Uu++) su[Uu - 2] = arguments[Uu];
      return [CE, uu[0], uu[1], uu[2], Eu, ...su].join(" ")
    }
    const cE = 2,
      NE = 4,
      OE = 8,
      YE = 16,
      hE = 32,
      DE = 64,
      gE = 128,
      ME = 256,
      eE = 512,
      GE = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      pE = [{
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
    const wE = "Biomass",
      JE = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function dE(uu) {
      return {
        input: wE,
        inputAmount: 1,
        output: uu,
        outputAmount: 1
      }
    }
    const aE = "baf2synth",
      PE = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      oE = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      kE = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      mE = function(uu, Eu) {
        return {
          input: uu,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: Eu,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      vE = function(uu, Eu) {
        return {
          ...mE(uu, Eu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      KE = oE.map((uu => vE(uu, "Biomass", 2))),
      VE = {
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
          recipes: [mE("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), mE("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), mE("Raw Gold", "Gold Grit", 2), mE("Messy Stone", "Sand"), mE("Gravel", "Sand"), mE("Raw Voltite", "Voltite Dust", 2), mE("Moonstone", "Moonstone Dust", 4), mE("Wheat Seeds", "Fertiliser"), mE("Raw Uranium", "Uranium Grit", 2), vE("Mossy Messy Stone", "Sand"), ...KE],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [mE("Iron Grit", "Iron Bar"), mE("Copper Grit", "Copper Bar"), mE("Gold Grit", "Gold Bar"), mE("Raw Iron", "Iron Bar"), mE("Raw Copper", "Copper Bar"), mE("Raw Gold", "Gold Bar"), mE("Sand", "Glass"), mE("Messy Stone", "Stone"), ...Vu._c.map((uu => mE(uu, "Charcoal", 1, 4))), mE("Wheat", "Bread", 1, 2), ...oE.map(((uu, Eu) => vE(uu, kE[Eu])))],
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
          recipes: [mE("Iron Bar", "Iron Plate"), mE("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [mE("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [mE("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [mE("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), mE("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), mE("Raw Gold", "Gold Grit", 3), mE("Raw Voltite", "Voltite Dust", 3), mE("Messy Stone", "Sand", 2), mE("Gravel", "Sand", 2), mE("Moonstone", "Moonstone Dust", 6), mE("Raw Uranium", "Uranium Grit", 3), vE("Mossy Messy Stone", "Sand", 2), ...KE],
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
          table: GE
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [mE("Coal", "Diamond", 1, 24), mE("Voltite Dust", "Moonstone", 1, 12)],
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
        ...zu.f
      },
      rE = {
        Crusher: [mE("Spent Pellet", "Glow Dust"), mE("Wheat Seeds", "Biomass"), mE("Wheat", "Biomass"), mE("Dead Bush", "Biomass"), mE("Dusk Moss", "Biomass"), mE("Rotten Flesh", "Biomass"), mE("Bone", "Biomass", 2)],
        "Shatter Mill": [mE("Spent Pellet", "Glow Dust"), mE("Wheat Seeds", "Biomass"), mE("Wheat", "Biomass"), mE("Dead Bush", "Biomass"), mE("Dusk Moss", "Biomass"), mE("Rotten Flesh", "Biomass"), mE("Bone", "Biomass", 2), ...Vu._c.map((uu => mE(uu, "Biomass")))],
        Smelter: [mE("Biomass", "Fertiliser", 2)],
        Press: [mE("Coal", "Graphite", 1, 4)]
      },
      QE = "Power Coupler",
      iE = "Advanced Coupler",
      WE = "Nova Coupler",
      SE = [{
        item: QE,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: iE,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: WE,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const IE = new Map;

    function FE(uu) {
      var Eu, ju;
      return null !== (Eu = null !== (ju = uu.fuelSlot) && void 0 !== ju ? ju : uu.couplerSlot) && void 0 !== Eu ? Eu : null
    }

    function BE(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!uu.couplable) throw new Error(`${uu.kind} takes no Power Coupler`);
      let ju = IE.get(uu);
      ju || (ju = [], IE.set(uu, ju));
      let su = ju[Eu];
      if (!su) {
        var Uu;
        const {
          divisor: Zu,
          powerPerS: Xu
        } = SE[Eu - 1], lu = uu.opMs / Zu, qu = void 0 !== uu.fluidMade || void 0 !== uu.cryoMade ? uu.powerPerOp : Xu * lu / 1e3;
        su = {
          ...uu,
          fuelSlot: null,
          couplerSlot: null !== (Uu = FE(uu)) && void 0 !== Uu ? Uu : void 0,
          opMs: lu,
          powerPerOp: qu,
          coupled: !0
        }, Eu > 1 && (su = {
          ...su,
          couplerLevel: Eu
        }), ju[Eu] = su
      }
      return su
    }
    const LE = new Map;
    const tE = new Map;

    function xE(uu, Eu) {
      if (null === Eu || (ju = Eu, !JE.includes(ju))) return uu;
      var ju;
      let su = tE.get(Eu);
      return su || (su = {
        ...uu,
        recipes: [dE(Eu)]
      }, tE.set(Eu, su)), su
    }

    function TE(uu) {
      return !0 === uu.synth
    }
    const HE = (uu, Eu, ju, su) => ({
        output: uu,
        outputAmount: Eu,
        tier: ju,
        inputs: su.map((uu => {
          let [Eu, ju] = uu;
          return {
            item: Eu,
            amount: ju
          }
        }))
      }),
      AE = Object.fromEntries([HE("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), HE("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), HE("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), HE("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), HE("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), HE("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), HE("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), HE("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), HE("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), HE("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), HE("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), HE("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), HE("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), HE("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), HE("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), HE("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), HE("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), HE("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), HE("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), HE("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), HE("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), HE("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), HE("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), HE("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), HE("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), HE("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), HE("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), HE("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), HE("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), HE("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((uu => [uu.output, uu]))),
      nE = new Map;

    function yE(uu, Eu) {
      let ju = VE[uu];
      if (Eu.atomic && (ju = function(uu) {
          const Eu = rE[uu.kind];
          if (!Eu) return uu;
          let ju = LE.get(uu.kind);
          if (!ju) {
            const su = new Set(Eu.map((uu => uu.input))),
              Uu = uu.recipes.filter((uu => !su.has(uu.input)));
            ju = {
              ...uu,
              recipes: [...Uu, ...Eu]
            }, LE.set(uu.kind, ju)
          }
          return ju
        }(ju)), ju.synth) return xE(ju, Eu.taught);
      if (Eu.coupled && ju.couplable) return BE(ju, Eu.level);
      const su = ju.inputSlots && null !== Eu.taught ? AE[Eu.taught] : void 0;
      if (!su) return ju;
      const Uu = `${uu}|${su.output}`;
      let Zu = nE.get(Uu);
      return Zu || (Zu = {
        ...ju,
        bench: su
      }, nE.set(Uu, Zu)), Zu
    }
    const zE = ["Diamond", "Moonstone"];

    function RE(uu) {
      return new Set(uu.flatMap((uu => uu.bonus ? [uu.output, uu.bonus.item] : [uu.output])).filter((uu => !zE.includes(uu))))
    }
    const uj = Object.values(VE).flatMap((uu => uu.recipes));
    RE(uj.filter((uu => !0 !== uu.nuclear))), RE([...uj.filter((uu => !0 === uu.nuclear)), ...Object.values(rE).flat()]);

    function Ej(uu) {
      return null === uu.inputSlot && void 0 === uu.inputSlots && void 0 === uu.powerMade && void 0 === uu.fluidMade && !uu.treeCutter && void 0 === uu.table
    }

    function jj(uu) {
      return !0 === uu.treeCutter
    }
    const sj = ["Voltite Cell"];

    function Uj(uu) {
      var Eu, ju;
      return null !== (Eu = null === (ju = uu.fuels) || void 0 === ju ? void 0 : ju.some((uu => sj.includes(uu)))) && void 0 !== Eu && Eu
    }
    const Zj = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Vu._c.map((uu => [uu, 8e3]))),
        ...Object.fromEntries(Vu.Hd.map((uu => [uu, 2e3]))),
        "Voltite Cell": 12e4
      },
      Xj = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      lj = {
        "Uranium Deposit": 4e3
      };

    function qj(uu) {
      var Eu;
      return null !== (Eu = Object.keys(Xj).find((Eu => Xj[Eu] === uu))) && void 0 !== Eu ? Eu : null
    }

    function fj(uu) {
      return PE.includes(uu)
    }

    function Cj(uu) {
      return !0 !== uu.nuclear || lu()
    }
    var bj = ju(337);
    var cj = ju(9485),
      Nj = ju(9417),
      Oj = ju(9490),
      Yj = ju(9476);
    const hj = "Reactor Controller",
      Dj = "Reactor Port",
      gj = "Battery Cell",
      Mj = ["fuel", "water", "waste"],
      ej = {
        fuel: Dj,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Gj = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      pj = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      wj = "Reactor Frame",
      Jj = "Reactor Glass",
      dj = {
        edge: [wj],
        cap: [Jj, Dj],
        wall: [Jj, Dj],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [hj]
      },
      aj = {
        edge: [gj],
        cap: [gj],
        wall: [gj],
        inside: [gj],
        ctrl: [gj]
      },
      Pj = ["edge", "cap", "wall", "inside"],
      oj = ["Reactor Slag"];

    function kj(uu) {
      return oj.includes(mj(uu))
    }

    function mj(uu) {
      const Eu = uu.indexOf("|");
      return Eu < 0 ? uu : uu.slice(0, Eu)
    }

    function vj(uu) {
      return mj(uu) === hj ? "reactor" : null
    }

    function Kj(uu) {
      return mj(uu) !== Dj ? null : uu.endsWith("|Water") ? "water" : uu.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Vj(uu) {
      const Eu = Kj(uu);
      return null === Eu ? null : ij(ej[Mj[(Mj.indexOf(Eu) + 1) % Mj.length]], function(uu) {
        return uu.includes(rj)
      }(uu))
    }
    const rj = "|meta|rot1|Formed",
      Qj = new Set([wj, Jj, Dj]);

    function ij(uu, Eu) {
      var ju;
      const su = mj(uu);
      if (!Qj.has(su)) return uu;
      if (su !== Dj) return Eu ? su + rj : su;
      const Uu = null !== (ju = Kj(uu)) && void 0 !== ju ? ju : "fuel";
      return Eu ? "fuel" === Uu ? su + rj : `${su}${rj}|${"water"===Uu?"Water":"Waste"}` : ej[Uu]
    }

    function Wj(uu, Eu) {
      const ju = Us(uu, Eu);
      if ("Air" === ju) return !1;
      const su = "reactor" === uu ? dj : aj;
      return Pj.some((uu => su[uu].includes(ju))) || "reactor" === uu && oj.includes(ju)
    }

    function Sj(uu) {
      return pj[uu]
    }

    function Ij(uu) {
      var Eu;
      return null !== (Eu = Gj[uu]) && void 0 !== Eu ? Eu : Gj[1]
    }

    function Fj(uu) {
      const [Eu, , ju] = Ij(uu);
      return [ju, 0, -Eu]
    }

    function Bj(uu, Eu, ju, su, Uu, Zu) {
      return {
        ctrl: [uu[0], uu[1], uu[2]],
        rot: Gj[Eu] ? Eu : 1,
        w: ju,
        h: su,
        d: Uu,
        cu: Zu[0],
        cv: Zu[1]
      }
    }

    function Lj(uu, Eu) {
      return "reactor" === uu ? [Math.floor((Eu - 1) / 2), 0] : [0, 0]
    }

    function tj(uu, Eu, ju, su, Uu) {
      let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : uu.rot;
      if (ju === uu.w && su === uu.h && Uu === uu.d && Zu === uu.rot) return uu;
      const [Xu] = Lj(Eu, uu.w);
      if (uu.cu === Xu && uu.cv <= 1) return Bj(uu.ctrl, Zu, ju, su, Uu, Lj(Eu, ju));
      const lu = (uu, Eu) => Math.max(1, Math.min(Eu, uu));
      return Bj(uu.ctrl, Zu, ju, su, Uu, [lu(uu.cu, ju - 2), 0 === uu.cv ? 0 : lu(uu.cv, su - 2)])
    }
    const xj = 11,
      Tj = 2 * xj + 1;
    new Uint8Array(Tj * Tj * Tj);

    function Hj(uu) {
      return uu.w * uu.h * uu.d
    }

    function Aj(uu) {
      const Eu = Fj(uu.rot);
      return [uu.ctrl[0] - Eu[0] * uu.cu, uu.ctrl[1] - uu.cv, uu.ctrl[2] - Eu[2] * uu.cu]
    }

    function nj(uu) {
      return uu.cv * uu.d * uu.w + uu.cu
    }

    function yj(uu, Eu) {
      const ju = Eu % uu.w,
        su = Math.floor(Eu / uu.w) % uu.d;
      return [ju, Math.floor(Eu / (uu.w * uu.d)), su]
    }

    function zj(uu, Eu) {
      const [ju, su, Uu] = yj(uu, Eu), Zu = Aj(uu), Xu = Ij(uu.rot), lu = Fj(uu.rot);
      return [Zu[0] + lu[0] * ju - Xu[0] * Uu, Zu[1] + su, Zu[2] + lu[2] * ju - Xu[2] * Uu]
    }

    function Rj(uu, Eu) {
      const ju = Aj(uu),
        su = Ij(uu.rot),
        Uu = Fj(uu.rot),
        Zu = Eu[0] - ju[0],
        Xu = Eu[2] - ju[2],
        lu = Zu * Uu[0] + Xu * Uu[2],
        qu = -(Zu * su[0] + Xu * su[2]),
        fu = Eu[1] - ju[1];
      return lu < 0 || lu >= uu.w || fu < 0 || fu >= uu.h || qu < 0 || qu >= uu.d ? -1 : (fu * uu.d + qu) * uu.w + lu
    }

    function us(uu, Eu) {
      if (Eu === nj(uu)) return "ctrl";
      const [ju, su, Uu] = yj(uu, Eu), Zu = 0 === su || su === uu.h - 1, Xu = Number(0 === ju || ju === uu.w - 1) + Number(Zu) + Number(0 === Uu || Uu === uu.d - 1);
      return Xu >= 2 ? "edge" : 1 === Xu ? Zu ? "cap" : "wall" : "inside"
    }

    function Es(uu, Eu) {
      const [ju, su, Uu] = yj(uu, Eu);
      return 0 === ju || ju === uu.w - 1 || 0 === su || su === uu.h - 1 || 0 === Uu || Uu === uu.d - 1 ? -1 : ((su - 1) * (uu.d - 2) + (Uu - 1)) * (uu.w - 2) + (ju - 1)
    }

    function ss(uu, Eu) {
      const ju = uu.w - 2,
        su = uu.d - 2,
        Uu = Eu % ju + 1,
        Zu = Math.floor(Eu / ju) % su + 1;
      return ((Math.floor(Eu / (ju * su)) + 1) * uu.d + Zu) * uu.w + Uu
    }

    function Us(uu, Eu) {
      const ju = mj(Eu);
      return "reactor" === uu && ju === hj ? wj : ju
    }

    function Zs(uu, Eu, ju) {
      const su = "ctrl" === Eu ? mj(ju) : Us(uu, ju);
      return ("reactor" === uu ? dj : aj)[Eu].includes(su) ? "ok" : "Air" === su ? "missing" : Wj(uu, ju) ? "wrong" : "blocked"
    }

    function Xs(uu, Eu) {
      return "battery" === uu ? gj : "inside" === Eu ? null : function(uu, Eu) {
        if ("inside" === Eu || "ctrl" === Eu || "battery" === uu) return null;
        return "edge" === Eu ? wj : Jj
      }(uu, Eu)
    }
    const ls = {
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
      qs = "Collider",
      fs = "Laser",
      Cs = "Star Alloy",
      bs = "Glow Dust",
      cs = [qs, "_Collider Focus"];

    function Ns(uu) {
      return cs.indexOf(mj(uu))
    }

    function Os(uu) {
      return mj(uu) === fs
    }

    function Ys(uu) {
      return [
        [uu[0], uu[1], uu[2]],
        [uu[0], uu[1] + 1, uu[2]]
      ]
    }
    const hs = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function Ds(uu, Eu, ju) {
      const su = hs[Eu];
      return [uu[0] + su[0] * ju, uu[1], uu[2] + su[2] * ju]
    }

    function gs(uu, Eu) {
      if (Eu[1] !== uu[1]) return null;
      const ju = Eu[0] - uu[0],
        su = Eu[2] - uu[2];
      if (0 !== ju === (0 !== su)) return null;
      const Uu = Math.abs(ju + su);
      if (Uu > ls.LASER_D) return null;
      return {
        dir: su < 0 ? 0 : ju > 0 ? 1 : su > 0 ? 2 : 3,
        LX: Uu
      }
    }

    function Ms(uu, Eu, ju) {
      const su = Eu => Math.abs(uu[0] - Eu[0]) <= 1 && Math.abs(uu[1] - Eu[1]) <= 1;
      return su(Eu) || su(ju)
    }

    function es(uu, Eu) {
      return function(uu, Eu, ju, su) {
        return [0, 1, 2, 3].map((Uu => {
          for (let Zu = 1; Zu <= ls.LASER_D; Zu++) {
            const Xu = Ds(uu, Uu, Zu);
            if (Ms([Xu[0], Xu[2]], Eu, ju) || !su(Xu)) return !1
          }
          return !0
        }))
      }(Ys(uu)[1], Eu.spawnXZ, Eu.coreXZ, (uu => uu[1] >= cj.p && uu[1] < cj.p + cj.q && uu[0] >= Eu.minXZ[0] && uu[0] <= Eu.maxXZ[0] && uu[2] >= Eu.minXZ[1] && uu[2] <= Eu.maxXZ[1]))
    }
    const Gs = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function ps(uu) {
      return Math.max(48 + 16 * uu, Du(uu).machineAllowance)
    }
    const ws = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function ds(uu) {
      const Eu = uu.split("|")[0];
      return ws.includes(Eu) ? "Solar Panel" : Eu === Oj.c ? "Fluid Pipe" : Ns(Eu) >= 0 ? "Collider" : (ju = Eu, Gs.includes(ju) ? Eu : null);
      var ju
    }
    const as = "buildAFactory2Game:solarPanelDescription";
    const Ps = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function os(uu, Eu) {
      var ju;
      return null !== (ju = Ps.find((ju => {
        var su;
        return (null !== (su = uu.level(ju)) && void 0 !== su ? su : 0) >= Eu
      }))) && void 0 !== ju ? ju : null
    }
    const ks = "buildAFactory2Game:";
    let ms = null;
    const vs = {
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
      Ks = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      Vs = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      rs = {
        "Loot Chest": `${ks}lookRuinChestName`
      };

    function Qs(uu) {
      return "object" === typeof uu && null !== uu && "translationKey" in uu && "string" === typeof uu.translationKey ? uu.translationKey : null
    }

    function is(uu, Eu) {
      var ju;
      return null !== (ju = Qs(uu.displayName(Eu))) && void 0 !== ju ? ju : `item:${(0,Vu.ze)(Eu)}`
    }

    function Ws(uu, Eu) {
      var ju, su, Uu, Zu;
      let Xu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eu;
      if ("Solar Panel" === ds(Eu)) return {
        name: Qs(uu.displayName("Solar Panel")),
        detail: as,
        detailItem: null
      };
      const qu = Eu.endsWith(" Ore"),
        fu = (ms ??= new Set([...Object.keys((0, Nj.h)()), ...Object.keys((0, Oj.r)())].map((uu => uu.split("|")[0]))), ms).has(Eu),
        Cu = qu || fu ? null : function(uu) {
          var Eu;
          return uu.endsWith(" Log") && !uu.startsWith("Barkless ") ? "lookLog" : uu.endsWith(" Sapling") ? "lookSapling" : uu.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (Eu = vs[uu]) && void 0 !== Eu ? Eu : null
        }(Eu);
      if (!uu.isBlock(Eu) || !qu && !fu && null === Cu) return null;
      const bu = null !== (ju = null !== (su = rs[Eu]) && void 0 !== su ? su : Qs(null !== (Uu = uu.displayName(Xu)) && void 0 !== Uu ? Uu : uu.displayName(Eu))) && void 0 !== ju ? ju : `item:${(0,Vu.ze)(Eu)}`;
      if (null !== Cu) return {
        name: bu,
        detail: `${ks}${Cu}`,
        detailItem: null
      };
      const cu = null !== (Zu = Ks[Eu]) && void 0 !== Zu ? Zu : lu() ? Vs[Eu] : void 0;
      if (fu && void 0 !== cu) return {
        name: bu,
        detail: `${ks}${cu}`,
        detailItem: null
      };
      const Nu = Xj[Eu];
      if (void 0 !== Nu) return {
        name: bu,
        detail: `${ks}lookDeposit`,
        detailItem: is(uu, Nu)
      };
      const Ou = uu.harvestLevel(Eu);
      if (qu && "rock" === uu.harvestType(Eu) && 0 !== Ou) {
        const Eu = os(uu, null !== Ou && void 0 !== Ou ? Ou : 0);
        if (Eu === Ps[0]) return {
          name: bu,
          detail: `${ks}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== Eu) return {
          name: bu,
          detail: `${ks}lookPickaxe`,
          detailItem: is(uu, Eu)
        }
      }
      return {
        name: bu,
        detail: Qs(uu.description(Eu)),
        detailItem: null
      }
    }

    function Ss(uu) {
      return uu < cj.p - 24
    }
    const Is = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const Fs = "Wrench",
      Bs = "Nova Wrench";

    function Ls(uu) {
      return uu === Fs || uu === Bs
    }
    const ts = [...cj.G, "Belt Lift", "Belt Drop"];
    const xs = ["Belt Lift", "Belt Drop"],
      Ts = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function Hs(uu) {
      return uu.split("|")[0]
    }

    function As(uu) {
      const Eu = /\|rot(\d)/.exec(uu);
      return Eu ? Number(Eu[1]) : 1
    }

    function ns(uu) {
      return uu % 4 + 1
    }

    function ys(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === Eu && "" === ju ? uu : `${uu}|meta|rot${Eu}${ju}`
    }

    function zs(uu) {
      return Hs(uu) === cj.z ? (0, cj.O)(uu) ? "gateRight" : "gateLeft" : (0, cj.T)(uu)
    }

    function Rs(uu) {
      const Eu = Hs(uu),
        ju = As(uu);
      if (cj.G.includes(Eu)) return (0, cj.H)(Eu, ns(ju), null);
      if (Eu === cj.f) return (0, cj.$)(ns(ju), (0, cj.P)(uu));
      if (Eu === cj.B) {
        const su = Ts[(0, cj.T)(uu)];
        return null === su ? ys(Eu, ns(ju)) : ys(Eu, ju, cj.C[su])
      }
      return Eu === cj.z ? (0, cj.O)(uu) ? ys(Eu, ns(ju)) : ys(Eu, ju, cj.n) : Yj.b.includes(Eu) && !xs.includes(Eu) || fj(Eu) ? ys(Eu, ns(ju)) : null
    }

    function uU(uu) {
      return Yj.b.includes(uu) || fj(uu) || null !== ds(uu)
    }

    function EU(uu) {
      return "Solar Panel" === ds(uu)
    }
    const jU = "buildAFactory2Game:",
      sU = {
        leftFront: `${jU}lookSplitDetail_leftFront`,
        frontRight: `${jU}lookSplitDetail_frontRight`,
        gateRight: `${jU}lookGateDetail_gateRight`
      };

    function UU(uu, Eu) {
      var ju;
      let su = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Uu = zs(uu),
        Zu = null === Uu ? null : `${jU}${Uu.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${Uu}`,
        Xu = null === Uu ? null : null !== (ju = sU[Uu]) && void 0 !== ju ? ju : null;
      if (Ls(Eu) && su) {
        const ju = Hs(uu);
        return Eu === Bs && lu() && function(uu) {
          return ts.includes(Hs(uu))
        }(uu) ? {
          mode: Zu,
          detail: Xu,
          next: `${jU}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: Zu,
          detail: Xu,
          next: uU(ju) && !EU(ju) ? `${jU}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const qu = Ls(Eu) ? Rs(uu) : null;
      if (null === qu) return {
        mode: Zu,
        detail: Xu,
        next: null,
        nextState: null
      };
      const fu = zs(qu);
      return null === fu || As(qu) !== As(uu) ? {
        mode: Zu,
        detail: Xu,
        next: `${jU}lookWrenchTurn`,
        nextState: null
      } : {
        mode: Zu,
        detail: Xu,
        next: `${jU}lookWrenchNext`,
        nextState: `${jU}lookWrenchState_${fu}`
      }
    }
    const ZU = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const XU = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function lU(uu) {
      return [0, 1, 2, 3].map((Eu => 0 !== (uu & 1 << Eu)))
    }

    function qU(uu) {
      const Eu = [];
      for (let ju = 8; ju + 2 < uu.length; ju += 3) Eu.push([uu[ju], uu[ju + 1], uu[ju + 2]]);
      return {
        focus: [uu[0], uu[1], uu[2]],
        lasers: lU(uu[3]),
        open: lU(uu[4]),
        live: lU(uu[5]),
        on: 1 === uu[6],
        state: XU[uu[7]],
        blockers: Eu
      }
    }
    const fU = "Arc Caster",
      CU = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      bU = (Object.values(CU), "Jet Chestplate"),
      cU = "Nova Jet Chestplate",
      NU = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      OU = Object.values(NU);

    function YU(uu, Eu, ju) {
      return Math.min(function(uu) {
        return lu() && bu(uu) >= 5 ? 20 : 10
      }(ju), Math.floor(function(uu, Eu) {
        return Math.max(0, uu) + (lu() ? Math.max(0, Eu) : 0)
      }(uu, Eu) / 5))
    }

    function hU(uu, Eu, ju) {
      const su = YU(Eu, ju, uu),
        Uu = bu(uu),
        Zu = (Uu >= 3 ? 55 : Uu >= 1 ? 50 : uu >= 8 ? 45 : 30) + su,
        Xu = Math.max(100 + su, 2 * Zu);
      return {
        arcDamage: Zu,
        arcPierce: uu >= 7 ? 2 : 1,
        arcChain: uu >= 10,
        barrierMax: (Uu >= 4 ? 100 : Uu >= 2 ? 90 : uu >= 9 ? 80 : uu >= 6 ? 60 : 40) + 5 * su,
        barrierRegenPerS: Uu >= 5 ? 20 : uu >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * su,
        novaShieldRegenPerS: 32,
        bladeDamage: Xu,
        bladePunch: Math.round(.5 * Xu),
        forgeRank: su
      }
    }
    const DU = {
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
    var gU = ju(37224),
      MU = ju(36998),
      eU = ju(36992),
      GU = ju(22),
      pU = ju(1687),
      wU = ju(1105),
      JU = ju.n(wU);

    function dU(uu) {
      return !0 === uu.field
    }
    const aU = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function PU(uu) {
      return aU.has(uu) ? `buildAFactory2Game:itemPlural_${(0,Vu.ze)(uu)}` : null
    }
    var oU = ju(1244),
      kU = ju(1116),
      mU = ju(1971),
      vU = ju(1964),
      KU = ju(1448),
      VU = ju(37221),
      rU = ju(24),
      QU = ju(37217);
    const iU = "baf2QuestView",
      WU = "baf2PlayerY",
      SU = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class IU {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = uu, this.view = {
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
      set(uu, Eu) {
        var ju, su, Uu, Zu, Xu, lu, qu, fu;
        const Cu = JSON.stringify(uu.baf2QuestName) === JSON.stringify(this.view.name),
          bu = new Set(this.view.rows.filter((uu => uu.done)).map((uu => uu.id))),
          cu = new Set(this.view.rows.filter((uu => uu.justFinished)).map((uu => uu.id))),
          Nu = uu.baf2QuestSide,
          Ou = null !== Nu && !0 === uu.baf2QuestSideFocus;
        let Yu = !1,
          hu = 0;
        const Du = uu.baf2QuestSteps.map((uu => {
            const Eu = AU(uu, SU.has(uu[0]) ? uu[0] : "" + hu++),
              ju = Cu && Eu.done && !bu.has(Eu.id);
            return Eu.justFinished = ju || Cu && Eu.done && cu.has(Eu.id), Yu ||= ju, Eu
          })),
          gu = HU(Du);
        gu >= 0 && !Ou && (Du[gu].current = !0);
        const Mu = !Cu && null !== uu.baf2QuestName,
          eu = JSON.stringify(Nu && [Nu[0], Nu[1]]),
          Gu = eu === JSON.stringify(null !== (ju = null === (su = this.view.side) || void 0 === su ? void 0 : su.name) && void 0 !== ju ? ju : null),
          pu = null !== Nu && !this.sidesSeen.has(eu);
        pu && this.sidesSeen.add(eu), this.serverTutorial = null !== (Uu = uu.baf2QuestTutorial) && void 0 !== Uu ? Uu : "on", (null !== (Zu = uu.baf2QuestTutorialSeq) && void 0 !== Zu ? Zu : 0) >= this.pickSeq && this.endPick();
        const wu = !Cu || !Gu || uu.baf2QuestTier !== this.view.tier;
        this.view = {
          name: uu.baf2QuestName,
          rows: Du,
          reward: uu.baf2QuestReward,
          goal: uu.baf2QuestGoal,
          pulse: this.view.pulse + (Yu || Mu ? 1 : 0),
          itemNames: Eu,
          side: Nu && {
            name: [Nu[0], Nu[1]],
            row: {
              ...AU(Nu[2], "side"),
              current: Ou
            },
            goal: null !== (Xu = Nu[3]) && void 0 !== Xu ? Xu : null
          },
          sideCameUpAt: pu ? Date.now() : this.view.sideCameUpAt,
          tier: uu.baf2QuestTier,
          core: uu.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (lu = uu.baf2QuestAlso) && void 0 !== lu ? lu : [],
          depth: null !== (qu = uu.baf2QuestDepth) && void 0 !== qu ? qu : null,
          tutorial: null !== (fu = this.pickedTutorial) && void 0 !== fu ? fu : this.serverTutorial,
          tutorialKnown: !0
        }, this.TY(), Yu && this.scheduleClear(), wu && this.requestBook()
      }
      setTutorial(uu) {
        return this.endPick(), this.pickedTutorial = uu, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.TY()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: uu
        }, this.TY(), this.pickSeq
      }
      onPlayerY(uu) {
        const Eu = Math.floor(uu);
        Eu !== this.playerY && (this.playerY = Eu, this.view.depth && rU.h.TY(WU, Eu))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(uu) {
        this.view = {
          ...this.view,
          chapters: uu.baf2BookChapters
        }, this.TY()
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
            rows: this.view.rows.map((uu => uu.justFinished ? {
              ...uu,
              justFinished: !1
            } : uu))
          }, this.TY()
        }), 2400)
      }
      TY() {
        rU.h.TY(iU, this.view, !0)
      }
    }

    function FU(uu, Eu) {
      return uu.sideCameUpAt > 0 && Eu - uu.sideCameUpAt < 2400
    }

    function BU(uu) {
      return (null === uu.name || LU(uu)) && null === uu.side && null !== uu.chapters
    }

    function LU(uu) {
      var Eu;
      return "quest_forgeOngoing" === (null === (Eu = uu.name) || void 0 === Eu ? void 0 : Eu[0])
    }

    function tU(uu) {
      return uu.filter((uu => !SU.has(uu.key)))
    }

    function xU(uu) {
      return uu.key.startsWith("stepCraft")
    }

    function TU(uu, Eu) {
      const ju = new Set,
        su = uu.side ? [...uu.rows, uu.side.row] : uu.rows;
      for (const Zu of su)
        if (!Zu.done) {
          !Zu.item || Eu && !xU(Zu) || ju.add(Zu.item);
          for (const [uu, Eu, su] of null !== (Uu = Zu.chips) && void 0 !== Uu ? Uu : []) {
            var Uu;
            Eu < su && ju.add(uu)
          }
        } return ju
    }

    function HU(uu) {
      const Eu = uu.findIndex((uu => !uu.done && !uu.away));
      return Eu >= 0 ? Eu : uu.findIndex((uu => !uu.done))
    }

    function AU(uu, Eu) {
      let [ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu] = uu;
      return {
        id: Eu,
        key: ju,
        params: su,
        item: Uu,
        amount: Zu,
        total: Xu,
        done: lu,
        chips: null !== qu && void 0 !== qu ? qu : null,
        current: !1,
        away: !0 === fu,
        madeFor: null !== Cu && void 0 !== Cu ? Cu : [],
        also: null !== bu && void 0 !== bu ? bu : [],
        justFinished: !1
      }
    }
    const nU = "baf2QuestItems",
      yU = new Set;
    let zU = new Set,
      RU = null;

    function uZ(uu) {
      const Eu = Ku(uu.tutorial),
        ju = Eu ? TU(uu, !0) : yU;
      "inventory" === GU.d.get("openInGameMenuName") ? (RU = null, (0, QU.u)(ju)) : RU = ju;
      const su = Eu ? TU(uu, !1) : yU;
      (0, VU.e)(su, zU) || (zU = su, rU.h.TY(nU, zU))
    }

    function EZ() {
      return (0, KU.b)(nU, (() => zU))
    }
    var jZ = ju(34565),
      sZ = ju(3475);

    function UZ(uu) {
      const Eu = (0, sZ.b)(uu),
        ju = void 0 === Eu ? void 0 : (0, jZ.displayNameOf)(Eu);
      return "object" === typeof ju && null !== ju && "translationKey" in ju && "string" === typeof ju.translationKey ? ju.translationKey : `item:${(0,Vu.ze)(uu)}`
    }

    function ZZ(uu, Eu) {
      return uu(UZ(Eu))
    }
    const XZ = [{
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

    function lZ(uu, Eu) {
      return [`Deposit Seed (${uu})`, {
        item: Xj[`${uu} Deposit`],
        amount: Eu
      }]
    }
    const qZ = Object.fromEntries([lZ("Coal", 8), lZ("Iron", 8), lZ("Copper", 8), lZ("Gold", 6), lZ("Voltite", 4), lZ("Uranium", 4)]),
      fZ = "Relay Coil",
      CZ = new Map;

    function bZ(uu) {
      let Eu = CZ.get(uu);
      if (!Eu) {
        const ju = Math.max(1, uu);
        Eu = XZ.filter((uu => {
          var Eu;
          return ju >= uu.fromTier && ju <= (null !== (Eu = uu.untilTier) && void 0 !== Eu ? Eu : 1 / 0)
        })).map((uu => uu.later && ju >= uu.later.tier ? {
          ...uu,
          weight: uu.later.weight
        } : uu)), CZ.set(uu, Eu)
      }
      return Eu
    }

    function cZ(uu) {
      return bZ(uu).some((uu => {
        let {
          item: Eu
        } = uu;
        return Eu === fZ
      }))
    }

    function NZ(uu) {
      return uu.startsWith("Deposit Seed (")
    }

    function OZ(uu, Eu) {
      const ju = bZ(uu);
      return Eu ? ju.filter((uu => Eu(uu.item))) : ju
    }

    function YZ(uu) {
      return uu.reduce(((uu, Eu) => uu + Eu.weight), 0)
    }

    function hZ(uu, Eu) {
      const ju = OZ(uu, Eu),
        su = YZ(ju);
      return ju.map((uu => ({
        find: uu,
        chance: uu.weight / su
      })))
    }
    const DZ = 6e4,
      gZ = new Intl.NumberFormat("en-US");

    function MZ(uu, Eu) {
      const ju = uu >= 10 ? Math.round(uu) : Math.round(10 * uu) / 10;
      return 0 === ju ? "0" : `${Eu}${gZ.format(ju)}`
    }

    function eZ(uu) {
      return uu < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? gZ.format(uu) : uu < 1e6 ? `${uu<1e5?Math.floor(uu/100)/10:Math.floor(uu/1e3)}k` : Math.floor(uu / 1e5) / 10 + "M"
    }

    function GZ(uu) {
      return uu < 0 ? "\u2212" + -uu : String(uu)
    }

    function pZ(uu, Eu) {
      const ju = Math.max(1, Math.round(Eu));
      if (ju < 60) return uu("buildAFactory2Game:durationSeconds", {
        seconds: String(ju)
      });
      const su = Math.round(ju / 60);
      if (su < 60) return uu("buildAFactory2Game:durationMinutes", {
        minutes: String(su)
      });
      const Uu = String(Math.floor(su / 60));
      return su % 60 === 0 ? uu("buildAFactory2Game:durationWholeHours", {
        hours: Uu
      }) : uu("buildAFactory2Game:durationHours", {
        hours: Uu,
        minutes: String(su % 60)
      })
    }
    var wZ = ju(2604);
    const JZ = "(max-height: 420px), (max-width: 650px)";

    function dZ() {
      return (0, wZ.c)(JZ)
    }
    var aZ = ju(1154);

    function PZ(uu, Eu) {
      return null !== uu && uu > Eu + 1
    }

    function oZ(uu) {
      const Eu = 100 * uu;
      return String(Eu <= 0 || Eu >= 1 ? Math.round(Eu) : Math.max(.1, Math.round(10 * Eu) / 10))
    }

    function kZ(uu) {
      let {
        item: Eu,
        amount: ju
      } = uu;
      return (0, aZ.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, aZ.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, aZ.jsx)(mU.d, {
            itemName: Eu,
            amount: 0
          })
        }), ju > 1 && (0, aZ.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", ju]
        })]
      })
    }

    function mZ(uu) {
      let {
        label: Eu,
        names: ju
      } = uu;
      const [Uu, Zu] = (0, su.useState)(!1), Xu = ju.join(" / ");
      return (0, aZ.jsxs)(aZ.Fragment, {
        children: [(0, aZ.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: Xu,
          "aria-expanded": Uu,
          onClick: () => {
            Zu(!Uu)
          },
          children: Eu
        }), Uu && (0, aZ.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: Xu
        })]
      })
    }

    function vZ(uu) {
      let {
        tier: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)(), {
        key: su,
        params: Uu
      } = Nu(Eu, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), Zu = ju(`buildAFactory2Game:${su}`, Uu);
      return (0, aZ.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, aZ.jsx)(kU.e, {
          name: "lock"
        }), Zu]
      })
    }
    const KZ = (0, su.createContext)(null);

    function VZ() {
      const {
        t: uu
      } = (0, oU.A)(), Eu = (0, su.useContext)(KZ);
      return (0, su.useEffect)((() => null === Eu || void 0 === Eu ? void 0 : Eu()), [Eu]), (0, aZ.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: uu("buildAFactory2Game:recipeForQuest"),
        "aria-label": uu("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function rZ(uu) {
      let {
        title: Eu,
        count: ju,
        children: Uu,
        startOpen: Zu = !0
      } = uu;
      const {
        t: Xu
      } = (0, oU.A)(), [lu, qu] = (0, su.useState)((() => Zu && !dZ())), [fu, Cu] = (0, su.useState)(0), bu = (0, su.useCallback)((() => (Cu((uu => uu + 1)), () => {
        Cu((uu => uu - 1))
      })), []);
      return (0, aZ.jsxs)("div", {
        className: JU()("Baf2Recipes", {
          Open: lu
        }),
        children: [(0, aZ.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            qu(!lu)
          },
          "aria-expanded": lu,
          children: [Xu("buildAFactory2Game:recipesToggle", {
            title: Eu,
            count: String(ju)
          }), (0, aZ.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: lu ? "\u25be" : "\u25b8"
          })]
        }), lu && (0, aZ.jsxs)(KZ.Provider, {
          value: bu,
          children: [(0, aZ.jsx)("ul", {
            className: "Baf2RecipeList",
            children: Uu
          }), fu > 0 && (0, aZ.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, aZ.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), Xu("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const QZ = "buildAFactory2Game:",
      iZ = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const WZ = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      SZ = {
        "Uranium Grit": Zu,
        "Raw Uranium": Zu
      };

    function IZ(uu) {
      var Eu;
      return null !== (Eu = SZ[uu]) && void 0 !== Eu ? Eu : Math.max(nu(uu), WZ[uu] ? nu(WZ[uu]) : 1, function(uu) {
        const Eu = Uu.findIndex((Eu => Eu.cost.some((Eu => Eu.item === uu))));
        return Eu > Zu ? Eu : 1
      }(uu))
    }

    function FZ(uu, Eu) {
      return BZ(Eu) ? IZ(Eu) : function(uu) {
        if (iZ.has(uu)) return 1;
        const Eu = Uu.findIndex((Eu => Eu.newDeposits.some((Eu => {
          let {
            block: ju
          } = Eu;
          return ju === uu
        }))));
        return Eu < 0 ? 1 : Eu + 1
      }(uu)
    }

    function BZ(uu) {
      return uu in SZ || bu(IZ(uu)) > 0
    }

    function LZ(uu, Eu) {
      return yE(uu, {
        coupled: !1,
        taught: null,
        atomic: lu() && Eu >= 11
      }).recipes
    }

    function tZ(uu, Eu) {
      const ju = cu(uu, Eu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bu(uu) > 0);
      return "open" === ju || "locked" === ju
    }

    function xZ(uu, Eu) {
      return uu.map(((uu, ju) => ({
        value: uu,
        idx: ju,
        tier: Eu(uu)
      }))).sort(((uu, Eu) => uu.tier - Eu.tier || uu.idx - Eu.idx)).map((uu => {
        let {
          value: Eu
        } = uu;
        return Eu
      }))
    }

    function TZ(uu, Eu, ju) {
      const su = cu(uu, Eu);
      if ("hidden" === su || "open" === su) return null;
      if ("teaser" === su) return {
        tag: {
          translationKey: `${QZ}${ju?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${QZ}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const Uu = Nu(uu, {
          tier: ju ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        Zu = Nu(uu, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${QZ}${Uu.key}`,
          params: Uu.params
        },
        reason: {
          translationKey: `${QZ}${Zu.key}`,
          params: Zu.params
        }
      }
    }

    function HZ(uu) {
      return !NZ(uu)
    }

    function AZ(uu) {
      let {
        seconds: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)();
      return (0, aZ.jsx)(rZ, {
        title: ju("buildAFactory2Game:recipesCuts", {
          seconds: Eu
        }),
        count: 1,
        children: (0, aZ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, aZ.jsx)(kZ, {
            item: "Maple Sapling",
            amount: 1
          }), (0, aZ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, aZ.jsx)(kZ, {
            item: "Maple Log",
            amount: 1
          }), (0, aZ.jsx)("span", {
            className: "Baf2RecipeName",
            children: ju("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function nZ(uu) {
      let {
        fertilised: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)();
      return (0, aZ.jsxs)(rZ, {
        title: ju("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, aZ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, aZ.jsx)(kZ, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, aZ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, aZ.jsx)(kZ, {
            item: "Wheat",
            amount: 1
          }), (0, aZ.jsx)(kZ, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, aZ.jsx)("span", {
            className: "Baf2RecipeName",
            children: ju("buildAFactory2Game:recipeField")
          })]
        }), (0, aZ.jsxs)("li", {
          className: JU()("Baf2Recipe", {
            InUse: Eu
          }),
          children: [(0, aZ.jsx)(kZ, {
            item: "Fertiliser",
            amount: 1
          }), (0, aZ.jsx)("span", {
            className: "Baf2RecipeName",
            children: ju("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function yZ(uu) {
      let {
        tier: Eu,
        seconds: ju
      } = uu;
      const {
        t: su
      } = (0, oU.A)(), Uu = function(uu) {
        return uu >= 5 ? pE : GE
      }(Eu);
      return (0, aZ.jsx)(rZ, {
        title: su("buildAFactory2Game:recipesBringsUp", {
          seconds: ju
        }),
        count: Uu.length,
        children: Uu.map((uu => {
          let {
            item: Eu,
            chance: ju
          } = uu;
          return (0, aZ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, aZ.jsx)(kZ, {
              item: Eu,
              amount: 1
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: ZZ(su, Eu)
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: su("buildAFactory2Game:recipeChance", {
                percent: oZ(ju)
              })
            })]
          }, Eu)
        }))
      })
    }

    function zZ(uu) {
      let {
        tier: Eu,
        seconds: ju,
        noSeeds: su
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)(), Zu = EZ(), Xu = hZ(Eu, su ? HZ : void 0), lu = su && hZ(Eu).length > Xu.length, qu = cZ(Eu);
      return (0, aZ.jsxs)(rZ, {
        title: Uu("buildAFactory2Game:recipesRecycles", {
          seconds: ju
        }),
        count: Xu.length,
        children: [Xu.map((uu => {
          let {
            find: Eu,
            chance: ju
          } = uu;
          return (0, aZ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [Zu.has(Eu.item) && (0, aZ.jsx)(VZ, {}), (0, aZ.jsx)(kZ, {
              item: Eu.item,
              amount: Eu.amount
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: ZZ(Uu, Eu.item)
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Uu("buildAFactory2Game:recipeChance", {
                percent: oZ(ju)
              })
            })]
          }, Eu.item)
        })), lu && (0, aZ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, aZ.jsx)("span", {
            className: "Baf2RecipeName",
            children: Uu("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), qu && (0, aZ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, aZ.jsx)("span", {
            className: "Baf2RecipeName",
            children: Uu("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function RZ(uu) {
      let {
        tier: Eu,
        seconds: ju
      } = uu;
      const {
        t: su
      } = (0, oU.A)(), Uu = Object.entries(qZ).filter((uu => {
        let [, {
          item: ju
        }] = uu;
        return tZ(IZ(ju), Eu, BZ(ju))
      }));
      return (0, aZ.jsx)(rZ, {
        title: su("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: ju
        }),
        count: Uu.length,
        children: Uu.map((uu => {
          let [Eu, {
            item: ju,
            amount: Uu
          }] = uu;
          return (0, aZ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, aZ.jsx)(kZ, {
              item: Eu,
              amount: 1
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, aZ.jsx)(kZ, {
              item: ju,
              amount: Uu
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: ZZ(su, ju)
            })]
          }, Eu)
        }))
      })
    }

    function uX(uu) {
      let {
        tier: Eu,
        seconds: ju
      } = uu;
      const {
        t: su
      } = (0, oU.A)(), Uu = EZ(), Zu = xZ(Object.entries(Xj).filter((uu => {
        let [ju, su] = uu;
        return tZ(FZ(ju, su), Eu, BZ(su))
      })), (uu => {
        let [Eu, ju] = uu;
        return FZ(Eu, ju)
      }));
      return (0, aZ.jsx)(rZ, {
        title: su("buildAFactory2Game:recipesDigs", {
          seconds: ju
        }),
        count: Zu.length,
        children: Zu.map((uu => {
          let [ju, Zu] = uu;
          const Xu = FZ(ju, Zu),
            lu = Xu > Eu ? Xu : null,
            qu = lj[ju],
            fu = null === lu && Uu.has(Zu);
          return (0, aZ.jsxs)("li", {
            className: JU()("Baf2Recipe", {
              Locked: null !== lu,
              Far: PZ(lu, Eu)
            }),
            children: [fu && (0, aZ.jsx)(VZ, {}), (0, aZ.jsx)(kZ, {
              item: ju,
              amount: 1
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, aZ.jsx)(kZ, {
              item: Zu,
              amount: 1
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: ZZ(su, Zu)
            }), void 0 !== qu && (0, aZ.jsx)("span", {
              className: "Baf2RecipeMore",
              children: su("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / qu)
              })
            }), null !== lu && (0, aZ.jsx)(vZ, {
              tier: lu
            })]
          }, ju)
        }))
      })
    }

    function EX(uu) {
      var Eu;
      let {
        def: ju,
        seconds: su
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)();
      return (0, aZ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, aZ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (Eu = ju.fuels) && void 0 !== Eu ? Eu : []).map((uu => (0, aZ.jsx)(kZ, {
            item: uu,
            amount: 1
          }, uu))), (0, aZ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, aZ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, aZ.jsx)(kU.e, {
              name: "bolt"
            }), Uu("buildAFactory2Game:recipePower", {
              power: yu(ju.powerMade),
              seconds: su
            })]
          })]
        })
      })
    }

    function jX(uu) {
      let {
        def: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)();
      return (0, aZ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, aZ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, aZ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, aZ.jsx)(kU.e, {
              name: "bolt"
            }), ju("buildAFactory2Game:recipeMixer", {
              cryo: MZ((0, zu.A)(Eu, Eu.cryoMade), "")
            })]
          })
        })
      })
    }

    function sX(uu) {
      let {
        def: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)();
      return (0, aZ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, aZ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, aZ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, aZ.jsx)(kU.e, {
              name: "bolt"
            }), ju("buildAFactory2Game:recipeCondenser", {
              power: MZ((0, zu.A)(Eu, Eu.powerPerOp), ""),
              water: MZ((0, zu.A)(Eu, Eu.fluidMade), "")
            })]
          })
        })
      })
    }

    function UX(uu) {
      let {
        kind: Eu,
        def: ju,
        input: su,
        tier: Uu,
        noSeeds: Zu = !1
      } = uu;
      const Xu = String(ju.opMs / 1e3);
      return jj(ju) ? (0, aZ.jsx)(AZ, {
        seconds: Xu
      }) : ju.field ? (0, aZ.jsx)(nZ, {
        fertilised: null !== su
      }) : ju.table ? (0, aZ.jsx)(yZ, {
        tier: Uu,
        seconds: Xu
      }) : ju.recycles ? (0, aZ.jsxs)(aZ.Fragment, {
        children: [(0, aZ.jsx)(zZ, {
          tier: Uu,
          seconds: Xu,
          noSeeds: Zu
        }), (0, aZ.jsx)(RZ, {
          tier: Uu,
          seconds: Xu
        })]
      }) : Ej(ju) ? (0, aZ.jsx)(uX, {
        tier: Uu,
        seconds: Xu
      }) : void 0 !== ju.fluidMade ? (0, aZ.jsx)(sX, {
        def: ju
      }) : void 0 !== ju.cryoMade ? (0, aZ.jsx)(jX, {
        def: ju
      }) : void 0 !== ju.powerMade ? (0, aZ.jsx)(EX, {
        def: ju,
        seconds: Xu
      }) : (0, aZ.jsx)(ZX, {
        kind: Eu,
        input: su,
        tier: Uu,
        seconds: Xu
      })
    }

    function ZX(uu) {
      let {
        kind: Eu,
        input: ju,
        tier: su,
        seconds: Uu
      } = uu;
      const {
        t: Zu
      } = (0, oU.A)(), Xu = EZ(), lu = xZ(function(uu) {
        const Eu = new Map;
        for (const Uu of uu) {
          var ju, su;
          const uu = [Uu.output, Uu.outputAmount, Uu.inputAmount, null === (ju = Uu.bonus) || void 0 === ju ? void 0 : ju.item, null === (su = Uu.bonus) || void 0 === su ? void 0 : su.chance].join("|"),
            Zu = Eu.get(uu);
          Zu ? Zu.inputs.push(Uu.input) : Eu.set(uu, {
            inputs: [Uu.input],
            inputAmount: Uu.inputAmount,
            output: Uu.output,
            outputAmount: Uu.outputAmount,
            bonus: Uu.bonus
          })
        }
        return [...Eu.values()]
      }(LZ(Eu, su).filter(Cj)), (uu => IZ(uu.output))).filter((uu => tZ(IZ(uu.output), su, BZ(uu.output))));
      return (0, aZ.jsx)(rZ, {
        title: Zu("buildAFactory2Game:recipesEach", {
          seconds: Uu
        }),
        count: lu.length,
        children: lu.map((uu => {
          const Eu = null !== ju && uu.inputs.includes(ju),
            Uu = uu.inputs.length > 3 ? [Eu ? ju : uu.inputs[0]] : uu.inputs,
            lu = IZ(uu.output) > su ? IZ(uu.output) : null,
            qu = null === lu && Xu.has(uu.output);
          return (0, aZ.jsxs)("li", {
            className: JU()("Baf2Recipe", {
              InUse: Eu,
              Locked: null !== lu,
              Far: PZ(lu, su)
            }),
            children: [qu && (0, aZ.jsx)(VZ, {}), Uu.map(((Eu, ju) => (0, aZ.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [ju > 0 && (0, aZ.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, aZ.jsx)(kZ, {
                item: Eu,
                amount: uu.inputAmount
              })]
            }, Eu))), Uu.length < uu.inputs.length && (0, aZ.jsx)(mZ, {
              label: Zu("buildAFactory2Game:recipeMore", {
                count: String(uu.inputs.length - Uu.length)
              }),
              names: uu.inputs.filter((uu => !Uu.includes(uu))).map((uu => ZZ(Zu, uu)))
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, aZ.jsx)(kZ, {
              item: uu.output,
              amount: uu.outputAmount
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: ZZ(Zu, uu.output)
            }), uu.bonus && (0, aZ.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [Zu("buildAFactory2Game:recipeBonus", {
                percent: oZ(uu.bonus.chance)
              }), (0, aZ.jsx)(kZ, {
                item: uu.bonus.item,
                amount: 1
              })]
            }), null !== lu && (0, aZ.jsx)(vZ, {
              tier: lu
            })]
          }, `${uu.output}|${uu.inputs[0]}`)
        }))
      })
    }

    function XX(uu) {
      let {
        taught: Eu,
        tier: ju
      } = uu;
      const {
        t: su
      } = (0, oU.A)(), Uu = EZ(), Zu = xZ(Object.values(AE), (uu => uu.tier)).filter((uu => tZ(uu.tier, ju)));
      return (0, aZ.jsx)(rZ, {
        title: su("buildAFactory2Game:benchCanMake"),
        count: Zu.length,
        startOpen: !1,
        children: Zu.map((uu => {
          const Zu = uu.tier > ju,
            Xu = !Zu && Uu.has(uu.output);
          return (0, aZ.jsxs)("li", {
            className: JU()("Baf2Recipe", {
              InUse: uu.output === Eu,
              Locked: Zu,
              Far: PZ(Zu ? uu.tier : null, ju)
            }),
            children: [Xu && (0, aZ.jsx)(VZ, {}), (0, aZ.jsx)(kZ, {
              item: uu.output,
              amount: uu.outputAmount
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: ZZ(su, uu.output)
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), uu.inputs.map((uu => (0, aZ.jsx)(kZ, {
              item: uu.item,
              amount: uu.amount
            }, uu.item))), Zu && (0, aZ.jsx)(vZ, {
              tier: uu.tier
            })]
          }, uu.output)
        }))
      })
    }
    var lX, qX, fX, CX, bX;
    const cX = VE.Generator,
      NX = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      OX = 1e3 * (null !== (lX = cX.powerMade) && void 0 !== lX ? lX : 0) / cX.opMs,
      YX = Math.min(...(null !== (qX = cX.fuels) && void 0 !== qX ? qX : []).map((uu => Zj[uu]))) / 1e3,
      hX = VE["Volt Engine"],
      DX = 1e3 * (null !== (fX = hX.powerMade) && void 0 !== fX ? fX : 0) / hX.opMs,
      gX = Zj[null !== (CX = null === (bX = hX.fuels) || void 0 === bX ? void 0 : bX[0]) && void 0 !== CX ? CX : ""] / 1e3;

    function MX(uu) {
      let {
        item: Eu,
        label: ju,
        value: su,
        note: Uu,
        dim: Zu
      } = uu;
      return (0, aZ.jsxs)("li", {
        className: JU()("Baf2PowerRow", {
          Dim: Zu
        }),
        children: [(0, aZ.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, aZ.jsx)(mU.d, {
            itemName: Eu,
            amount: 0
          })
        }), (0, aZ.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, aZ.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: ju
          }), Uu && (0, aZ.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: Uu
          })]
        }), (0, aZ.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: su
        })]
      })
    }

    function eX(uu, Eu, ju, su) {
      var Uu;
      const Zu = void 0 === su ? VE[uu] : function(uu, Eu) {
          if (null === Eu) return uu;
          let ju = Tu.get(Eu);
          return ju || (ju = {
            ...uu,
            powerPerOp: xu(uu, Eu),
            farmMob: Eu
          }, Tu.set(Eu, ju)), ju
        }(VE[uu], su),
        Xu = Eu && Zu.couplable ? BE(Zu, ju) : Zu;
      return 1e3 * (null !== (Uu = Xu.powerPerOp) && void 0 !== Uu ? Uu : 0) / Xu.opMs
    }

    function GX(uu) {
      var Eu, ju, su, Uu, Zu, Xu, lu, qu;
      let {
        message: fu
      } = uu;
      const {
        t: Cu
      } = (0, oU.A)(), bu = (uu, Eu) => Cu("buildAFactory2Game:powerPerSecond", {
        rate: MZ(uu, Eu)
      }), [cu, Nu] = fu.baf2PowerGenerators, Ou = fu.baf2PowerGeneratorFuel, Yu = fu.baf2PowerSunPanels, hu = null !== (Eu = fu.baf2PowerSunShare) && void 0 !== Eu ? Eu : 1, Du = fu.baf2PowerVaults, gu = fu.baf2PowerUsers, [Mu, eu] = null !== (ju = fu.baf2PowerEngines) && void 0 !== ju ? ju : [0, 0], Gu = null !== (su = fu.baf2PowerEngineCells) && void 0 !== su ? su : 0, pu = null !== (Uu = fu.baf2PowerPads) && void 0 !== Uu ? Uu : 0, wu = null !== (Zu = fu.baf2PowerCharge) && void 0 !== Zu ? Zu : 0, [Ju, du] = null !== (Xu = fu.baf2PowerReactors) && void 0 !== Xu ? Xu : [0, 0], [au, Pu] = null !== (lu = fu.baf2PowerBatteries) && void 0 !== lu ? lu : [0, 0];
      let ou = Cu("buildAFactory2Game:powerEngineCells", {
        amount: String(Gu)
      });
      Gu > 0 && eu > 0 && (ou = Cu("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(Gu),
        time: pZ(Cu, Gu * gX / eu)
      }));
      let ku = Cu("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(Ou)
      });
      Ou > 0 && Nu > 0 && (ku = Cu("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(Ou),
        time: pZ(Cu, Ou * YX / Nu)
      }));
      const mu = cu + Mu + Yu + Ju;
      return (0, aZ.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, aZ.jsxs)("section", {
          children: [(0, aZ.jsxs)("h3", {
            children: [Cu("buildAFactory2Game:powerMaking"), (0, aZ.jsx)("span", {
              children: bu(fu.baf2PowerMadePerS, "+")
            })]
          }), (0, aZ.jsxs)("ul", {
            children: [0 === mu && (0, aZ.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Cu("buildAFactory2Game:powerNoMakers")
            }), cu > 0 && (0, aZ.jsx)(MX, {
              item: "Generator",
              label: `${ZZ(Cu,"Generator")} \xd7${cu}`,
              note: `${Cu("buildAFactory2Game:powerRunning",{amount:String(Nu)})} \xb7 ${ku}`,
              value: bu(Nu * OX, "+"),
              dim: 0 === Nu
            }), Mu > 0 && (0, aZ.jsx)(MX, {
              item: "Volt Engine",
              label: `${ZZ(Cu,"Volt Engine")} \xd7${Mu}`,
              note: `${Cu("buildAFactory2Game:powerRunning",{amount:String(eu)})} \xb7 ${ou}`,
              value: bu(eu * DX, "+"),
              dim: 0 === eu
            }), Yu > 0 && (0, aZ.jsx)(MX, {
              item: "Solar Panel",
              label: `${ZZ(Cu,"Solar Panel")} \xd7${Yu}`,
              note: Cu(hu < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: bu(4 * Yu * hu, "+")
            }), Ju > 0 && (0, aZ.jsx)(MX, {
              item: "Reactor Frame",
              label: `${Cu("buildAFactory2Game:powerReactors")} \xd7${Ju}`,
              note: Cu("buildAFactory2Game:powerRunning", {
                amount: String(du)
              }),
              value: bu(null !== (qu = fu.baf2PowerReactorPerS) && void 0 !== qu ? qu : 0, "+"),
              dim: 0 === du
            })]
          })]
        }), (0, aZ.jsxs)("section", {
          children: [(0, aZ.jsxs)("h3", {
            children: [Cu("buildAFactory2Game:powerStorage"), (0, aZ.jsx)("span", {
              children: yu(fu.baf2PowerCap)
            })]
          }), (Du > 0 || au > 0) && (0, aZ.jsxs)("ul", {
            children: [Du > 0 && (0, aZ.jsx)(MX, {
              item: "Charge Vault",
              label: `${ZZ(Cu,"Charge Vault")} \xd7${Du}`,
              value: `+${yu(8e3*Du)}`
            }), au > 0 && (0, aZ.jsx)(MX, {
              item: "Battery Cell",
              label: `${Cu("buildAFactory2Game:powerBatteries")} \xd7${au}`,
              value: `+${yu(Pu)}`
            })]
          })]
        }), (0, aZ.jsxs)("section", {
          children: [(0, aZ.jsxs)("h3", {
            children: [Cu("buildAFactory2Game:powerUsing"), (0, aZ.jsx)("span", {
              children: bu(fu.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, aZ.jsxs)("ul", {
            children: [0 === gu.length && 0 === pu && 0 === wu && (0, aZ.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Cu("buildAFactory2Game:powerNoUsers")
            }), gu.map((uu => {
              let [Eu, ju, su, Uu, Zu = 1, Xu] = uu, lu = ju ? Cu(NX[Zu - 1], {
                name: ZZ(Cu, Eu)
              }) : ZZ(Cu, Eu);
              return void 0 !== Xu && (lu = Cu("buildAFactory2Game:powerFarmName", {
                name: lu,
                mob: Cu(Bu(Xu))
              })), (0, aZ.jsx)(MX, {
                item: Eu,
                label: `${lu} \xd7${su}`,
                note: Cu("buildAFactory2Game:powerRunning", {
                  amount: String(Uu)
                }),
                value: Uu > 0 ? bu(Uu * eX(Eu, ju, Zu, Xu), "\u2212") : Cu("buildAFactory2Game:powerIdle"),
                dim: 0 === Uu
              }, `${Eu}|${ju}|${Zu}|${Xu}`)
            })), pu > 0 && (0, aZ.jsx)(MX, {
              item: "Charging Pad",
              label: `${ZZ(Cu,"Charging Pad")} \xd7${pu}`,
              value: Cu("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), wu > 0 && (0, aZ.jsx)(MX, {
              item: "Homestead Core",
              label: Cu("buildAFactory2Game:powerCharge"),
              value: bu(wu, "\u2212")
            }), fu.baf2PowerStarved > 0 && (0, aZ.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, aZ.jsx)(kU.e, {
                name: "triangle-exclamation"
              }), Cu("buildAFactory2Game:powerStarved", {
                amount: String(fu.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var pX = ju(4719),
      wX = ju(1506);
    class JX {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(uu) {
        this.message = uu;
        for (const Eu of this.listeners) Eu()
      }
      get() {
        return this.message
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
    }
    class dX extends JX {}

    function aX(uu, Eu) {
      const ju = () => {
          const ju = uu.get();
          if (!ju || !Eu) return ju;
          const [su, Uu, Zu] = ju.baf2PowerAt;
          return su === Eu[0] && Uu === Eu[1] && Zu === Eu[2] ? ju : null
        },
        [Uu, Zu] = (0, su.useState)(ju);
      return (0, su.useEffect)((() => (Zu(ju()), uu.subscribe((() => {
        Zu(ju())
      })))), [uu, ...null !== Eu && void 0 !== Eu ? Eu : []]), Uu
    }

    function PX(uu) {
      return {
        stored: uu.baf2PowerStored,
        cap: uu.baf2PowerCap,
        madePerS: uu.baf2PowerMadePerS,
        usedPerS: uu.baf2PowerUsedPerS
      }
    }

    function oX(uu) {
      let {
        stored: Eu,
        cap: ju
      } = uu;
      return (0, aZ.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, aZ.jsx)("div", {
          style: {
            width: `${Math.min(100,100*Eu/Math.max(1,ju))}%`
          }
        })
      })
    }

    function kX(uu) {
      let {
        figures: Eu,
        labelled: ju = !1
      } = uu;
      const {
        t: su
      } = (0, oU.A)(), Uu = Eu.madePerS - Eu.usedPerS, {
        text: Zu,
        draining: Xu
      } = function(uu, Eu) {
        let {
          stored: ju,
          cap: su,
          madePerS: Uu,
          usedPerS: Zu
        } = Eu;
        const Xu = Uu - Zu;
        return ju >= su ? {
          text: uu("buildAFactory2Game:powerFull"),
          draining: !1
        } : Xu > .05 ? {
          text: uu("buildAFactory2Game:powerFullIn", {
            time: pZ(uu, (su - ju) / Xu)
          }),
          draining: !1
        } : Xu < -.05 ? {
          text: uu("buildAFactory2Game:powerEmptyIn", {
            time: pZ(uu, ju / -Xu)
          }),
          draining: !0
        } : {
          text: uu("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(su, Eu);
      return (0, aZ.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, aZ.jsx)(oX, {
          stored: Eu.stored,
          cap: Eu.cap
        }), (0, aZ.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, aZ.jsx)("span", {
            children: su(ju ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: yu(Eu.stored),
              cap: yu(Eu.cap)
            })
          }), (0, aZ.jsxs)("span", {
            className: JU()("Baf2PowerNet", {
              Draining: Xu
            }),
            children: [su("buildAFactory2Game:powerPerSecond", {
              rate: MZ(Math.abs(Uu), Uu < 0 ? "\u2212" : "+")
            }), " \xb7 ", Zu]
          })]
        })]
      })
    }

    function mX(uu) {
      let {
        stored: Eu,
        cap: ju,
        rates: su
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)();
      return su ? (0, aZ.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, aZ.jsx)(kX, {
          figures: {
            stored: Eu,
            cap: ju,
            madePerS: su[0],
            usedPerS: su[1]
          },
          labelled: !0
        })
      }) : (0, aZ.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, aZ.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, aZ.jsx)(oX, {
            stored: Eu,
            cap: ju
          }), (0, aZ.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, aZ.jsx)("span", {
              children: Uu("buildAFactory2Game:powerStoredLabelled", {
                stored: yu(Eu),
                cap: yu(ju)
              })
            })
          })]
        })
      })
    }

    function vX(uu) {
      let {
        store: Eu,
        close: ju
      } = uu;
      const {
        t: su
      } = (0, oU.A)(), Uu = aX(Eu);
      return (0, aZ.jsx)(pX.c, {
        close: ju,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, aZ.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, aZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, aZ.jsxs)("div", {
              children: [(0, aZ.jsx)("h2", {
                id: "baf2PowerTitle",
                children: su("buildAFactory2Game:powerTitle")
              }), (0, aZ.jsx)("p", {
                children: su("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, aZ.jsx)(wX.l, {
              onClick: ju
            })]
          }), Uu && (0, aZ.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, aZ.jsx)(kX, {
              figures: PX(Uu)
            }), (0, aZ.jsx)(GX, {
              message: Uu
            })]
          })]
        })
      })
    }

    function KX(uu) {
      var Eu;
      let {
        kind: ju,
        def: Uu,
        RU: Zu,
        power: Xu,
        stored: lu,
        cap: qu
      } = uu;
      const {
        t: fu
      } = (0, oU.A)(), Cu = aX(Xu, Zu), [bu, cu] = (0, su.useState)(!1);
      return (0, aZ.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, aZ.jsx)(UX, {
          kind: ju,
          def: Uu,
          input: null,
          tier: null !== (Eu = null === Cu || void 0 === Cu ? void 0 : Cu.baf2PowerTier) && void 0 !== Eu ? Eu : 1
        }), (0, aZ.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: fu("buildAFactory2Game:powerTitle")
        }), Cu && (0, aZ.jsx)(kX, {
          figures: PX(Cu)
        }), !Cu && (0, aZ.jsx)(mX, {
          stored: lu,
          cap: qu,
          rates: null
        }), Cu && (0, aZ.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            cu(!bu)
          },
          "aria-expanded": bu,
          children: fu(bu ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), Cu && bu && (0, aZ.jsx)(GX, {
          message: Cu
        })]
      })
    }
    const VX = 2500,
      rX = 17500,
      QX = `${Gu} `;
    const iX = ["plan", "throttle"];

    function WX(uu) {
      if (uu.startsWith(`${aE} `)) return uu.slice(0, uu.lastIndexOf(" "));
      const Eu = uu.split(" ");
      return Eu[0] === CE && iX.includes(Eu[4]) ? Eu.slice(0, 5).join(" ") : null
    }
    class SX {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = uu, this.now = Eu, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.kUu = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = Eu()
      }
      enqueue(uu) {
        this.queue(uu, this.nextTicket());
        const Eu = this.kUu + this.pending.length;
        return this.flush(), Eu
      }
      track(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ju = this.nextTicket();
        if (!Eu.urgent) return this.queue(uu, ju), this.flush(), ju;
        const {
          supersedes: su
        } = Eu;
        for (let Zu = this.pending.length - 1; Zu >= this.urgent; Zu--) {
          const Eu = this.pending[Zu];
          (Eu.command === uu || null !== su && void 0 !== su && su(Eu.command)) && (this.pending.splice(Zu, 1), this.markLeft(Eu.tickets))
        }
        const Uu = this.pending.findIndex((Eu => {
          let {
            command: ju
          } = Eu;
          return ju === uu
        }));
        return -1 !== Uu ? this.pending[Uu].tickets.push(ju) : (this.pending.splice(this.urgent, 0, {
          command: uu,
          tickets: [ju]
        }), this.urgent += 1), this.flush(), ju
      }
      leftAt(uu) {
        const Eu = this.leftTimes.get(uu);
        return void 0 !== Eu ? Eu : this.pending.some((Eu => {
          let {
            tickets: ju
          } = Eu;
          return ju.includes(uu)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let uu = !0;
        return () => {
          uu && (uu = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(uu) {
        var Eu;
        return (null === (Eu = this.pending.at(-1)) || void 0 === Eu ? void 0 : Eu.command) === uu
      }
      sent() {
        return this.kUu
      }
      clear() {
        for (const {
            tickets: uu
          }
          of this.pending) this.markLeft(uu);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(uu) {
        const Eu = this.now();
        for (const ju of uu) this.leftTimes.set(ju, Eu);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(uu, Eu) {
        const ju = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === ju || void 0 === ju ? void 0 : ju.command) === uu) return void(! function(uu) {
          return uu === pu || uu.startsWith(`${eu} `) || uu.startsWith(`${Su} `)
        }(uu) ? ju.tickets.push(Eu) : (this.pending.pop(), this.markLeft([...ju.tickets, Eu])));
        const su = void 0 === ju ? null : fE(ju.command, uu);
        if (null !== su && void 0 !== ju) return ju.command = su, void ju.tickets.push(Eu);
        const Uu = WX(uu);
        if (null !== Uu && void 0 !== ju && WX(ju.command) === Uu) return ju.command = uu, void ju.tickets.push(Eu);
        if (null !== ju && void 0 !== ju && ju.command.startsWith(QX) && uu.startsWith(QX)) {
          const su = uu.slice(QX.length);
          if (ju.command.slice(QX.length).split(",").includes(su)) return void ju.tickets.push(Eu);
          const Uu = `${ju.command},${su}`;
          if (Uu.length <= 119) return ju.command = Uu, void ju.tickets.push(Eu)
        }
        this.pending.push({
          command: uu,
          tickets: [Eu]
        })
      }
      flush() {
        const uu = this.now();
        for (this.tokens = Math.min(5, this.tokens + (uu - this.refilledAt) / VX), this.refilledAt = uu; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.kUu += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: uu,
            tickets: Eu
          } = this.pending.shift();
          this.markLeft(Eu), this.send(uu)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * VX)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class IX {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new SX(uu, Eu)
      }
      send(uu) {
        return this.queue.enqueue(uu)
      }
      sent() {
        return this.queue.sent()
      }
      track(uu, Eu) {
        return this.queue.track(uu, Eu)
      }
      leftAt(uu) {
        return this.queue.leftAt(uu)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(uu) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = Eu, this.send(uu), this.islandEdits.count
      }
      syncIslandEdits(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: ju
        } = this, su = Eu - ju.lastAtMs < rX;
        ju.count = su ? Math.max(ju.count, uu) : uu
      }
      clear() {
        this.queue.clear()
      }
    }
    const FX = (0, su.createContext)(null);

    function BX() {
      const uu = (0, su.useContext)(FX);
      if (!uu) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return uu
    }

    function LX(uu, Eu) {
      return null !== Eu && void 0 !== Eu ? Eu : 1 === uu
    }

    function tX(uu, Eu) {
      return uu.every((uu => {
        var ju;
        let [su, , Uu] = uu;
        return !LX(Uu, null === (ju = Eu.get(su)) || void 0 === ju ? void 0 : ju.oN)
      }))
    }

    function xX(uu, Eu, ju) {
      if (0 === uu.size) return uu;
      const su = new Map(uu);
      for (const [Uu, Zu] of uu) {
        const uu = Eu.find((uu => {
          let [Eu] = uu;
          return Eu === Uu
        }));
        (!uu || Zu.oN === (1 === uu[2]) || Zu.atMs < ju) && su.delete(Uu)
      }
      return su
    }

    function TX(uu) {
      var Eu;
      let {
        RU: ju,
        input: Uu,
        drops: Zu,
        seconds: Xu
      } = uu;
      const {
        t: lu
      } = (0, oU.A)(), qu = BX(), [fu, Cu] = (0, su.useState)(new Map);
      (0, su.useEffect)((() => {
        Zu && Cu((uu => xX(uu, Zu, Date.now() - rX)))
      }), [Zu]), (0, su.useEffect)((() => {
        const uu = function(uu, Eu) {
          let ju = null;
          for (const {
              atMs: su
            }
            of uu.values()) ju = null === ju ? su : Math.min(ju, su);
          return null === ju ? null : ju + Eu
        }(fu, rX);
        if (null === uu || !Zu) return;
        const Eu = setTimeout((() => {
          Cu((uu => xX(uu, Zu, Date.now() - rX)))
        }), Math.max(0, uu - Date.now()) + 1);
        return () => {
          clearTimeout(Eu)
        }
      }), [fu, Zu]);
      const bu = Lu(Uu),
        cu = null !== bu && null !== Zu && tX(Zu, fu),
        Nu = function(uu, Eu, ju) {
          return null === uu || null === Eu || tX(Eu, ju) ? 0 : Wu[Qu[uu]]
        }(bu, Zu, fu);
      return (0, aZ.jsxs)(rZ, {
        title: lu("buildAFactory2Game:farmDropsTitle", {
          seconds: Xu
        }),
        count: null !== (Eu = null === Zu || void 0 === Zu ? void 0 : Zu.length) && void 0 !== Eu ? Eu : 0,
        children: [Nu > 0 && (0, aZ.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: lu("buildAFactory2Game:farmDropsPower", {
            power: String(Nu)
          })
        }), (null === bu || !Zu) && (0, aZ.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: lu("buildAFactory2Game:farmDropsEmpty")
        }), cu && (0, aZ.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: lu("buildAFactory2Game:farmDropsAllVoided")
        }), null !== bu && (null === Zu || void 0 === Zu ? void 0 : Zu.map((uu => {
          var Eu;
          let [su, Uu, Zu] = uu;
          const Xu = Uu < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            bu = LX(Zu, null === (Eu = fu.get(su)) || void 0 === Eu ? void 0 : Eu.oN);
          return (0, aZ.jsxs)("li", {
            className: JU()("Baf2Recipe Baf2FarmDrop", {
              Voided: !bu
            }),
            children: [(0, aZ.jsx)(kZ, {
              item: su,
              amount: 1
            }), (0, aZ.jsx)("span", {
              className: "Baf2RecipeName",
              children: ZZ(lu, su)
            }), (0, aZ.jsx)("span", {
              className: "Baf2FarmRate",
              children: lu(Xu, {
                amount: String(Uu)
              })
            }), (0, aZ.jsx)("button", {
              type: "button",
              className: JU()("Baf2FarmToggle SmallTextBold", {
                Kept: bu
              }),
              "aria-pressed": bu,
              onClick: () => {
                Cu(new Map(fu).set(su, {
                  oN: !bu,
                  atMs: Date.now()
                })), qu.send(function(uu, Eu, ju, su) {
                  return `${Su} ${uu} ${Eu} ${ju} ${su}`
                }(ju[0], ju[1], ju[2], su))
              },
              children: lu(bu ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, su)
        })))]
      })
    }
    var HX;
    const AX = String(null !== (HX = VE.Synthesizer.waterPerOp) && void 0 !== HX ? HX : 0);

    function nX(uu) {
      let {
        RU: Eu,
        taught: ju
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)(), Zu = BX(), [Xu, lu] = (0, su.useState)(null);
      (0, su.useEffect)((() => {
        null !== Xu && ju === Xu && lu(null)
      }), [Xu, ju]);
      const qu = null !== Xu && void 0 !== Xu ? Xu : ju;
      let fu = Uu("buildAFactory2Game:synthPick");
      return null !== qu && (fu = Uu("buildAFactory2Game:synthGrows", {
        name: ZZ(Uu, qu),
        input: ZZ(Uu, wE),
        water: AX
      })), (0, aZ.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, aZ.jsx)("div", {
          className: JU()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === qu
          }),
          children: fu
        }), (0, aZ.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: JE.map(((uu, ju) => {
            const su = ZZ(Uu, uu),
              Xu = uu === qu;
            return (0, aZ.jsx)("li", {
              children: (0, aZ.jsx)("button", {
                type: "button",
                className: JU()("Baf2SynthTile", {
                  Selected: Xu
                }),
                title: su,
                "aria-label": su,
                "aria-pressed": Xu,
                onClick: () => {
                  Xu || (lu(uu), Zu.send(`${aE} ${Eu[0]} ${Eu[1]} ${Eu[2]} ${ju}`))
                },
                children: (0, aZ.jsx)(mU.d, {
                  itemName: uu,
                  amount: 0
                })
              })
            }, uu)
          }))
        })]
      })
    }
    const yX = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function zX(uu) {
      let {
        kind: Eu,
        tier: ju,
        coupled: su,
        level: Uu,
        slot: Zu
      } = uu;
      const {
        t: Xu
      } = (0, oU.A)(), qu = nu(QE);
      if (!su && null !== ju && ju < qu) return (0, aZ.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, aZ.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, aZ.jsx)(kU.e, {
            name: "lock"
          })
        }), (0, aZ.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: Xu("buildAFactory2Game:upgradeLocked")
        }), (0, aZ.jsx)("span", {
          className: "Baf2TierTag",
          children: Xu("buildAFactory2Game:tierTag", {
            tier: String(qu)
          })
        })]
      });
      const fu = function(uu, Eu) {
          if (lu() && "Crusher" !== uu && null !== Eu) {
            if (RX(WE, Eu)) return {
              item: WE,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (RX(iE, Eu)) return {
              item: iE,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: QE,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(Eu, ju),
        Cu = Xu(su ? yX[Uu - 1] : fu.emptyKey),
        bu = null !== ju ? function(uu, Eu, ju, su) {
          if (!lu() || !ju || "Crusher" === uu || Eu < 10) return null;
          const Uu = nu(WE);
          if (su < 3 && Uu > 1 && (2 === su || Eu >= Uu)) return {
            tier: Uu,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const Zu = nu(iE);
          if (1 === su && Zu > 1) return {
            tier: Zu,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(Eu, ju, su, Uu) : null;
      return (0, aZ.jsxs)("div", {
        className: JU()("Baf2UpgradeSocket", {
          Fitted: su
        }),
        children: [(0, aZ.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [su && Zu, !su && (0, aZ.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, aZ.jsx)(mU.d, {
              itemName: fu.item,
              amount: 0
            })
          })]
        }), (0, aZ.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, aZ.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: Xu("buildAFactory2Game:upgradeTitle")
          }), (0, aZ.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Cu
          }), su && Uu >= 2 && "Crusher" === Eu && (0, aZ.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Xu("buildAFactory2Game:couplerCrusherHint")
          }), bu && null !== ju && ju < bu.tier && (0, aZ.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, aZ.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, aZ.jsx)(kU.e, {
                name: "lock"
              })
            }), Xu(bu.lockedKey), (0, aZ.jsx)("span", {
              className: "Baf2TierTag",
              children: Xu("buildAFactory2Game:tierTag", {
                tier: String(bu.tier)
              })
            })]
          }), bu && null !== ju && ju >= bu.tier && (0, aZ.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: Xu(bu.nextKey)
          })]
        })]
      })
    }

    function RX(uu, Eu) {
      const ju = nu(uu);
      return ju > 1 && Eu >= ju
    }
    var ul = ju(37428);
    const El = (0, zu.A)(VE.Condenser, VE.Condenser.fluidMade),
      jl = .05;
    class sl extends JX {}

    function Ul(uu) {
      return MZ(uu, "")
    }

    function Zl(uu, Eu, ju) {
      return uu(Eu ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: ju
      })
    }

    function Xl(uu, Eu, ju, su) {
      return ju <= jl && su <= jl ? null : su <= jl || ju <= jl ? Zl(uu, Eu, su <= jl ? MZ(ju, "+") : MZ(su, "\u2212")) : uu(Eu ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: Ul(ju),
        used: Ul(su)
      })
    }

    function ll(uu, Eu) {
      return Math.min(100, 100 * uu / Math.max(1, Eu))
    }

    function ql(uu) {
      let {
        stored: Eu,
        cap: ju,
        netPerS: su,
        rates: Uu,
        cryo: Zu
      } = uu;
      const {
        t: Xu
      } = (0, oU.A)(), lu = function(uu, Eu, ju, su) {
        return ju <= 0 ? uu("buildAFactory2Game:waterNoStorage") : Eu >= ju ? uu("buildAFactory2Game:powerFull") : su > jl ? uu("buildAFactory2Game:powerFullIn", {
          time: pZ(uu, (ju - Eu) / su)
        }) : su < -.05 ? Eu <= 0 ? uu("buildAFactory2Game:waterEmpty") : uu("buildAFactory2Game:powerEmptyIn", {
          time: pZ(uu, Eu / -su)
        }) : uu("buildAFactory2Game:powerSteady")
      }(Xu, Eu, ju, su), qu = ju > 0 && Eu < ju && Math.abs(su) <= jl, fu = Xu(Zu ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), Cu = null !== Uu ? `${Uu} \xb7 ${lu}` : qu ? fu : `${fu} \xb7 ${lu}`;
      return (0, aZ.jsxs)(aZ.Fragment, {
        children: [(0, aZ.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, aZ.jsx)("div", {
            style: {
              width: `${ll(Eu,ju)}%`
            }
          })
        }), (0, aZ.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, aZ.jsx)("span", {
            children: ju > 0 && Xu("buildAFactory2Game:powerStored", {
              stored: (0, zu.L)(Eu),
              cap: (0, zu.L)(ju)
            })
          }), (0, aZ.jsx)("span", {
            className: JU()("Baf2WaterNet", {
              Draining: su < -.05
            }),
            children: Cu
          })]
        })]
      })
    }

    function fl(uu) {
      let {
        water: Eu,
        at: ju,
        side: su = null
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)(), Zu = BX(), [Xu, lu, qu] = Eu;
      return (0, aZ.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, aZ.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, aZ.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: Uu(null === su ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${su}`)
          }), (0, aZ.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              Zu.send(`${zu.w} ${ju[0]} ${ju[1]} ${ju[2]}${"cryoOut"===su?" cryo":""}`)
            },
            children: Uu("buildAFactory2Game:waterDetails")
          })]
        }), (0, aZ.jsx)(ql, {
          stored: Xu,
          cap: lu,
          netPerS: qu,
          rates: Zl(Uu, "cryoOut" === su, MZ(Math.abs(qu), qu < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === su
        })]
      })
    }

    function Cl(uu, Eu) {
      var ju, su, Uu;
      const Zu = !0 === Eu.baf2WaterCryo,
        Xu = null !== (ju = null === (su = Eu.baf2WaterMakers.find((uu => uu[0] === (Zu ? zu.b : "Condenser")))) || void 0 === su ? void 0 : su[1]) && void 0 !== ju ? ju : 0,
        lu = [],
        qu = (Eu, ju, su) => {
          Eu > 0 && lu.push(uu(1 === Eu ? ju : su, {
            count: String(Eu)
          }))
        };
      return Zu ? qu(Xu, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : qu(Xu, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), qu(null !== (Uu = Eu.baf2WaterPipes) && void 0 !== Uu ? Uu : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), qu(Eu.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), lu.join(" \xb7 ")
    }

    function bl(uu, Eu) {
      if (!0 === Eu.baf2WaterCryo) return function(uu, Eu) {
        const ju = VE[zu.b];
        switch (Eu.baf2WaterThis) {
          case "pipe":
            return {
              text: uu("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: uu("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: uu("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: uu("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: uu("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: uu("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: uu("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var su;
            const [Uu, Zu] = null !== (su = Eu.baf2WaterThisRates) && void 0 !== su ? su : [(0, zu.A)(ju, ju.cryoMade), (0, zu.A)(ju, ju.powerPerOp)];
            return !0 === Eu.baf2WaterDriven ? {
              text: uu("buildAFactory2Game:cryoThisMixerDriven", {
                rate: Ul(Uu)
              }),
              bad: !1
            } : {
              text: uu("buildAFactory2Game:cryoThisMixer", {
                rate: Ul(Uu),
                power: Ul(Zu)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: uu("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(uu, Eu);
      const ju = !0 === Eu.baf2WaterDriven,
        su = VE.Condenser;
      switch (Eu.baf2WaterThis) {
        case "pipe":
          return {
            text: uu("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: uu("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: uu("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: uu("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: uu("buildAFactory2Game:waterThisTank", {
              tank: (0, zu.L)(zu.n),
              cap: (0, zu.L)(Eu.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var Uu;
          const [Zu, Xu] = null !== (Uu = Eu.baf2WaterThisRates) && void 0 !== Uu ? Uu : [El, (0, zu.A)(su, su.powerPerOp)];
          return ju ? {
            text: uu("buildAFactory2Game:waterThisCondenserDriven", {
              rate: Ul(Zu)
            }),
            bad: !1
          } : {
            text: uu("buildAFactory2Game:waterThisCondenser", {
              rate: Ul(Zu),
              power: Ul(Xu)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: uu("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function cl(uu, Eu) {
      const ju = Eu.baf2WaterMakers.some((uu => !0 === uu[5]));
      if (!0 === Eu.baf2WaterCryo) {
        const su = Eu.baf2WaterUsedPerS - Eu.baf2WaterMadePerS,
          Uu = ju || su <= jl ? 0 : (0, zu.y)(su);
        return 0 === Uu ? null : Uu > 1 ? uu("buildAFactory2Game:cryoNextMixers", {
          mixers: String(Uu)
        }) : uu("buildAFactory2Game:cryoNextOne")
      }
      const su = ju ? null : function(uu, Eu) {
        const ju = Eu - uu;
        return ju <= jl ? null : Math.ceil(ju / El)
      }(Eu.baf2WaterMadePerS, Eu.baf2WaterUsedPerS);
      return null === su ? null : su > 1 ? uu("buildAFactory2Game:waterNextCondensers", {
        condensers: String(su)
      }) : uu("buildAFactory2Game:waterNextOne")
    }

    function Nl(uu) {
      let {
        item: Eu,
        label: ju,
        note: su,
        value: Uu,
        dim: Zu,
        bad: Xu
      } = uu;
      return (0, aZ.jsxs)("li", {
        className: JU()("Baf2WaterRow", {
          Dim: Zu,
          Bad: Xu
        }),
        children: [(0, aZ.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, aZ.jsx)(mU.d, {
            itemName: Eu,
            amount: 0
          })
        }), (0, aZ.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, aZ.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: ju
          }), su && (0, aZ.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: su
          })]
        }), (0, aZ.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: Uu
        })]
      })
    }

    function Ol(uu) {
      return ul.l[uu] ? uu : "Reactor Port"
    }

    function Yl(uu) {
      let {
        message: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)(), su = !0 === Eu.baf2WaterCryo, Uu = (uu, Eu) => Zl(ju, su, MZ(uu, Eu));
      return (0, aZ.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, aZ.jsxs)("section", {
          children: [(0, aZ.jsxs)("h3", {
            children: [ju("buildAFactory2Game:waterMakes"), (0, aZ.jsx)("span", {
              children: Uu(Eu.baf2WaterMadePerS, "+")
            })]
          }), (0, aZ.jsxs)("ul", {
            children: [0 === Eu.baf2WaterMakers.length && (0, aZ.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: ju(su ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), Eu.baf2WaterMakers.map((uu => {
              let [Eu, su, Zu, Xu, lu, qu] = uu;
              const fu = ju("buildAFactory2Game:powerRunning", {
                amount: String(Zu)
              });
              let Cu = lu > 0 ? ju("buildAFactory2Game:waterMakerPower", {
                running: fu,
                power: Ul(lu)
              }) : fu;
              return qu && (Cu = ju(0 === Zu && Xu <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, aZ.jsx)(Nl, {
                item: Eu,
                label: `${ZZ(ju,Eu)} \xd7${su}`,
                note: Cu,
                value: Zu > 0 || qu && Xu > 0 ? Uu(Xu, "+") : ju("buildAFactory2Game:powerIdle"),
                dim: 0 === Zu && !qu,
                bad: qu
              }, Eu)
            }))]
          })]
        }), (0, aZ.jsxs)("section", {
          children: [(0, aZ.jsxs)("h3", {
            children: [ju("buildAFactory2Game:waterUses"), (0, aZ.jsx)("span", {
              children: Uu(Eu.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, aZ.jsxs)("ul", {
            children: [0 === Eu.baf2WaterUsers.length && (0, aZ.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: ju(su ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), Eu.baf2WaterUsers.map((uu => {
              let [Eu, su, Zu, Xu] = uu;
              const lu = ul.l[Eu] ? ZZ(ju, Eu) : Eu;
              return (0, aZ.jsx)(Nl, {
                item: Ol(Eu),
                label: su > 1 ? `${lu} \xd7${su}` : lu,
                note: Xu ? ju("buildAFactory2Game:waterPortFirst") : void 0,
                value: Zu > 0 ? Uu(Zu, "\u2212") : ju("buildAFactory2Game:powerIdle"),
                dim: 0 === Zu
              }, Eu)
            }))]
          })]
        })]
      })
    }

    function hl(uu) {
      var Eu, ju, Uu, Zu, Xu;
      let {
        store: lu,
        close: qu
      } = uu;
      const {
        t: fu
      } = (0, oU.A)(), Cu = function(uu) {
        const [Eu, ju] = (0, su.useState)((() => uu.get()));
        return (0, su.useEffect)((() => (ju(uu.get()), uu.subscribe((() => {
          ju(uu.get())
        })))), [uu]), Eu
      }(lu), bu = null !== (Eu = null === Cu || void 0 === Cu ? void 0 : Cu.baf2WaterStored) && void 0 !== Eu ? Eu : 0, cu = null !== (ju = null === Cu || void 0 === Cu ? void 0 : Cu.baf2WaterCap) && void 0 !== ju ? ju : 0, Nu = null !== (Uu = null === Cu || void 0 === Cu ? void 0 : Cu.baf2WaterMadePerS) && void 0 !== Uu ? Uu : 0, Ou = null !== (Zu = null === Cu || void 0 === Cu ? void 0 : Cu.baf2WaterUsedPerS) && void 0 !== Zu ? Zu : 0, Yu = null !== (Xu = null === Cu || void 0 === Cu ? void 0 : Cu.baf2WaterNetPerS) && void 0 !== Xu ? Xu : Nu - Ou, hu = Cu && bl(fu, Cu), Du = Cu && cl(fu, Cu), gu = !0 === (null === Cu || void 0 === Cu ? void 0 : Cu.baf2WaterCryo);
      return (0, aZ.jsx)(pX.c, {
        close: qu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, aZ.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, aZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, aZ.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== Cu && cu <= 0 ? (0, aZ.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, aZ.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, aZ.jsx)(mU.d, {
                  itemName: gu ? Oj.e : zu.j,
                  amount: 0
                })
              }), (0, aZ.jsxs)("div", {
                children: [(0, aZ.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: fu(gu ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), Cu && (0, aZ.jsx)("p", {
                  children: Cl(fu, Cu)
                })]
              })]
            }), (0, aZ.jsx)(wX.l, {
              onClick: qu
            })]
          }), Cu && hu && (0, aZ.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, aZ.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, aZ.jsx)(ql, {
                stored: bu,
                cap: cu,
                netPerS: Yu,
                cryo: gu,
                rates: Xl(fu, gu, Nu, Ou)
              })
            }), (0, aZ.jsx)("div", {
              className: JU()("Baf2WaterThis", {
                Bad: hu.bad
              }),
              children: hu.text
            }), Cu.baf2WaterDriven && (0, aZ.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, aZ.jsx)(kU.e, {
                name: "bolt"
              }), fu(gu ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), Du && (0, aZ.jsx)("p", {
              className: "Baf2WaterNext",
              children: Du
            }), (0, aZ.jsx)(Yl, {
              message: Cu
            })]
          })]
        })
      })
    }
    class Dl {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(uu, Eu) {
        const ju = this.get(uu);
        ju && null === Eu.opLeftMs && null === Eu.fuelLeftMs && Eu.status === ju.status ? Eu = {
          ...Eu,
          opLeftMs: ju.opLeftMs,
          fuelLeftMs: ju.fuelLeftMs,
          burning: ju.burning
        } : this.updates++, this.pos = uu, this.view = Eu;
        for (const su of this.listeners) su()
      }
      get(uu) {
        return null !== this.pos && this.pos[0] === uu[0] && this.pos[1] === uu[1] && this.pos[2] === uu[2] ? this.view : null
      }
      forget(uu) {
        null !== this.get(uu) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
    }

    function gl(uu, Eu, ju, su) {
      return "noFuel" === Eu && su && !Uj(VE[uu]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === Eu && !0 === (null === ju || void 0 === ju ? void 0 : ju.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === Eu && !0 === (null === ju || void 0 === ju ? void 0 : ju.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === Eu && !0 === (null === ju || void 0 === ju ? void 0 : ju.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === Eu && !0 === (null === ju || void 0 === ju ? void 0 : ju.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : Ml(Eu, ju) ? "buildAFactory2Game:machineStatus_noInputShort" : function(uu, Eu) {
        const ju = VE[uu];
        if ("noFuel" === Eu && void 0 !== ju.fuels) return Uj(ju) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (ju.mobFarm && ("noInput" === Eu || "badInput" === Eu)) return `buildAFactory2Game:machineStatus_${Eu}MobFarm`;
        if ("outputFull" === Eu && (void 0 !== ju.table || ju.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === Eu && TE(ju)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== ju.cryoMade && ("noInput" === Eu || "noOutlet" === Eu || "fluidFull" === Eu)) return `buildAFactory2Game:machineStatus_${Eu}Mixer`;
        return `buildAFactory2Game:machineStatus_${Eu}`
      }(uu, Eu)
    }

    function Ml(uu, Eu) {
      return "noInput" === uu && null !== Eu && void 0 !== Eu && Eu.input && Eu.inputShort ? {
        input: Eu.input,
        short: Eu.inputShort
      } : null
    }

    function el(uu) {
      return dU(uu) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== uu.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Gl(uu) {
      const Eu = (0, Vu.ze)(uu);
      return `Baf2Pane Baf2Pane${Eu.charAt(0).toUpperCase()}${Eu.slice(1)}`
    }

    function pl(uu, Eu) {
      const [ju, Uu] = (0, su.useState)((() => uu.get(Eu)));
      return (0, su.useEffect)((() => {
        Uu(uu.get(Eu));
        const ju = uu.subscribe((() => {
          Uu(uu.get(Eu))
        }));
        return () => {
          ju(), uu.forget(Eu)
        }
      }), [uu, ...Eu]), ju
    }

    function wl(uu, Eu, ju, su) {
      const Uu = VE[uu],
        Zu = Eu && Uu.couplable ? BE(Uu, ju) : Uu,
        Xu = null !== su && Ej(Zu) ? function(uu, Eu) {
          var ju;
          return null !== (ju = null !== Eu && Ej(uu) ? lj[Eu] : void 0) && void 0 !== ju ? ju : uu.opMs
        }(Zu, qj(su)) : Zu.opMs;
      return Xu === Zu.opMs ? Zu : {
        ...Zu,
        opMs: Xu
      }
    }

    function Jl(uu) {
      let {
        running: Eu,
        opMs: ju,
        opLeftMs: su,
        updateCount: Uu
      } = uu;
      return (0, aZ.jsx)("div", {
        className: JU()("Baf2MachineProgress", {
          Running: Eu
        }),
        children: (0, aZ.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: ju / 1e3 + "s",
            animationDelay: null === su ? void 0 : (su - ju) / 1e3 + "s"
          }
        }, Uu)
      })
    }

    function dl(uu) {
      let {
        running: Eu,
        leftMs: ju,
        periodMs: su,
        updateCount: Uu
      } = uu;
      const {
        t: Zu
      } = (0, oU.A)(), Xu = Math.min(Math.max(null !== ju && void 0 !== ju ? ju : 0, 0), su), lu = Eu && Xu > 0, qu = Zu("buildAFactory2Game:machineBarFuel");
      return (0, aZ.jsx)("div", {
        className: JU()("Baf2FuelBurn", {
          Draining: lu
        }),
        role: "img",
        title: qu,
        "aria-label": qu,
        children: (0, aZ.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: lu ? {
            animationDuration: su / 1e3 + "s",
            animationDelay: (Xu - su) / 1e3 + "s"
          } : {
            transform: `scaleY(${Xu/su})`
          }
        }, Uu)
      })
    }

    function al(uu, Eu, ju) {
      let [su, Uu] = ju;
      const Zu = 1 !== su ? PU(Eu) : null;
      return {
        amount: su,
        have: Uu,
        item: uu(Zu || UZ(Eu))
      }
    }

    function Pl(uu) {
      return Ej(uu) ? "buildAFactory2Game:machineBarMining" : jj(uu) ? "buildAFactory2Game:machineBarCutting" : void 0 !== uu.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function ol(uu) {
      var Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du, gu, Mu;
      let {
        kind: eu,
        RU: Gu,
        store: pu,
        power: wu,
        renderSlot: Ju
      } = uu;
      const {
        t: du
      } = (0, oU.A)(), au = pl(pu, Gu), Pu = VE[eu], ou = null !== (Eu = null === au || void 0 === au ? void 0 : au.coupled) && void 0 !== Eu && Eu, ku = null !== (ju = null === au || void 0 === au ? void 0 : au.couplerLevel) && void 0 !== ju ? ju : 1, mu = wl(eu, ou, ku, null !== (su = null === au || void 0 === au || null === (Uu = au.dug) || void 0 === Uu ? void 0 : Uu.item) && void 0 !== su ? su : null), vu = null !== (Zu = null === au || void 0 === au ? void 0 : au.status) && void 0 !== Zu ? Zu : null, Ku = null !== (Xu = null === au || void 0 === au ? void 0 : au.power) && void 0 !== Xu ? Xu : null, Vu = null !== (lu = null === au || void 0 === au ? void 0 : au.opLeftMs) && void 0 !== lu ? lu : null, ru = null !== (qu = null === au || void 0 === au ? void 0 : au.dug) && void 0 !== qu ? qu : null, Qu = null !== ru && Ej(Pu) ? lj[null !== (fu = qj(ru.item)) && void 0 !== fu ? fu : ""] : void 0, iu = void 0 === Qu ? null : 6e4 / Qu, Wu = null !== (Cu = null === au || void 0 === au ? void 0 : au.powerCap) && void 0 !== Cu ? Cu : 4e3, Su = null !== (bu = null === au || void 0 === au ? void 0 : au.tier) && void 0 !== bu ? bu : null, Iu = void 0 !== mu.powerMade, Fu = null !== Pu.fuelSlot ? Ju(Pu.fuelSlot) : null, Bu = FE(Pu), Lu = !ou && !0 === (null === au || void 0 === au ? void 0 : au.fuelFed), xu = !ou && !0 === (null === au || void 0 === au ? void 0 : au.fuelFeeds), Tu = null !== Pu.fuelSlot && !ou, Hu = null !== (cu = null === au || void 0 === au ? void 0 : au.fuelLeftMs) && void 0 !== cu ? cu : null, Au = function(uu, Eu, ju) {
        var su;
        const Uu = null === Eu ? void 0 : Zj[Eu];
        return Math.max(null !== (su = null !== Uu && void 0 !== Uu ? Uu : ju) && void 0 !== su ? su : 0, uu.opMs)
      }(mu, null !== (Nu = null === au || void 0 === au ? void 0 : au.burning) && void 0 !== Nu ? Nu : null, Hu), nu = null !== (Ou = null === au || void 0 === au ? void 0 : au.fuelKeep) && void 0 !== Ou ? Ou : null, yu = null === vu ? null : gl(eu, vu, au, Lu), zu = null === vu ? null : Ml(vu, au);
      return (0, aZ.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, aZ.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, aZ.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: du(UZ(eu))
          }), ru && (0, aZ.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [du("Tree Cutter" === eu ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, aZ.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, aZ.jsx)(mU.d, {
                itemName: ru.item,
                amount: 0
              })
            }), (0, aZ.jsx)(vU.d, {
              text: ru.name
            })]
          }), null !== iu && (0, aZ.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: du("buildAFactory2Game:machineDigsFixed", {
              perMin: String(iu)
            })
          }), (null === au || void 0 === au ? void 0 : au.field) && (0, aZ.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, aZ.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, aZ.jsx)(mU.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), du("buildAFactory2Game:machineField", {
              planted: String(au.field[0]),
              ripe: String(au.field[1])
            })]
          }), (0, aZ.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, aZ.jsxs)("div", {
              className: JU()("Baf2MachineColumn", {
                Baf2Burns: Tu
              }),
              children: [null !== mu.inputSlot && (0, aZ.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, aZ.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: du(el(mu))
                }), Ju(mu.inputSlot)]
              }), null !== Pu.fuelSlot && !ou && (0, aZ.jsxs)("div", {
                className: JU()("Baf2MachineSlot", {
                  Baf2FuelFed: Lu
                }),
                children: [(0, aZ.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [Lu && (0, aZ.jsx)(kU.e, {
                    name: "fire"
                  }), du("buildAFactory2Game:machineFuel")]
                }), (0, aZ.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, aZ.jsx)(dl, {
                    running: "running" === vu,
                    leftMs: Hu,
                    periodMs: Au,
                    updateCount: pu.updateCount
                  }), Fu]
                })]
              }), null !== Pu.fuelSlot && ou && (0, aZ.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, aZ.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: du("buildAFactory2Game:machineFuel")
                }), (0, aZ.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: du("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": du("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, aZ.jsx)(kU.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, aZ.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, aZ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: du(Pl(mu))
              }), (0, aZ.jsx)(Jl, {
                running: "running" === vu,
                opMs: mu.opMs,
                opLeftMs: Vu,
                updateCount: pu.updateCount
              })]
            }), mu.outputSlots.length > 0 && (0, aZ.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, aZ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: du("buildAFactory2Game:machineOutput")
              }), (0, aZ.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: mu.outputSlots.map((uu => (0, aZ.jsx)("div", {
                  children: Ju(uu)
                }, uu)))
              })]
            }), null !== Ku && Iu && (0, aZ.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, aZ.jsx)("div", {
                style: {
                  height: 100 * Ku / Wu + "%"
                }
              })
            })]
          }), Tu && null !== nu && (0, aZ.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, aZ.jsx)(kU.e, {
              name: "arrows-rotate"
            }), du(jj(mu) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(nu)
            })]
          }), (Lu || xu) && (0, aZ.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, aZ.jsx)(kU.e, {
              name: "fire"
            }), du(Lu ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Pu.couplable && (0, aZ.jsx)(zX, {
            kind: eu,
            tier: Su,
            coupled: ou,
            level: ku,
            slot: Bu === Pu.fuelSlot ? Fu : null !== Bu ? Ju(Bu) : null
          }), null !== Ku && !Iu && !0 === (null === au || void 0 === au ? void 0 : au.reactorPowered) && (0, aZ.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: du("buildAFactory2Game:machineReactorPowered")
          }), null !== Ku && !Iu && !0 !== (null === au || void 0 === au ? void 0 : au.reactorPowered) && (0, aZ.jsx)(mX, {
            stored: Ku,
            cap: Wu,
            rates: null !== (Yu = null === au || void 0 === au ? void 0 : au.powerRates) && void 0 !== Yu ? Yu : null
          }), (null === au || void 0 === au ? void 0 : au.water) && (0, aZ.jsx)(fl, {
            water: au.water,
            at: Gu,
            side: au.cryo ? "waterIn" : null
          }), (null === au || void 0 === au ? void 0 : au.cryo) && (0, aZ.jsx)(fl, {
            water: au.cryo,
            at: Gu,
            side: "cryoOut"
          }), null !== au && void 0 !== au && au.inertCoupler ? (0, aZ.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: du("buildAFactory2Game:machineStatus_couplerOff", {
              item: ZZ(du, au.inertCoupler)
            })
          }) : null !== yu && (0, aZ.jsx)("div", {
            className: JU()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== vu
            }),
            children: du(yu, zu ? al(du, zu.input, zu.short) : void 0)
          })]
        }), (0, aZ.jsxs)("div", {
          className: JU()("Baf2MachineSide", {
            Baf2SynthSide: TE(Pu)
          }),
          children: [TE(Pu) && (0, aZ.jsx)(nX, {
            RU: Gu,
            taught: null !== (hu = null === au || void 0 === au ? void 0 : au.taught) && void 0 !== hu ? hu : null
          }, Gu.join(",")), Iu && (0, aZ.jsx)(KX, {
            kind: eu,
            def: mu,
            RU: Gu,
            power: wu,
            stored: null !== Ku && void 0 !== Ku ? Ku : 0,
            cap: Wu
          }), tu(Pu) && (0, aZ.jsx)(TX, {
            RU: Gu,
            input: null !== (Du = null === au || void 0 === au ? void 0 : au.input) && void 0 !== Du ? Du : null,
            drops: null !== (gu = null === au || void 0 === au ? void 0 : au.farm) && void 0 !== gu ? gu : null,
            seconds: String(mu.opMs / 1e3)
          }), !Iu && !tu(Pu) && !TE(Pu) && (0, aZ.jsx)(UX, {
            kind: eu,
            def: mu,
            input: null !== (Mu = null === au || void 0 === au ? void 0 : au.input) && void 0 !== Mu ? Mu : null,
            tier: null !== Su && void 0 !== Su ? Su : 1,
            noSeeds: !0 === (null === au || void 0 === au ? void 0 : au.noSeeds)
          })]
        })]
      })
    }

    function kl(uu, Eu, ju, su) {
      var Uu;
      const Zu = VE[uu],
        Xu = [Zu.inputSlot, Zu.fuelSlot, ...null !== (Uu = Zu.inputSlots) && void 0 !== Uu ? Uu : []].filter((uu => null !== uu));
      return {
        render: Uu => {
          let {
            RU: Zu,
            renderSlot: Xu
          } = Uu;
          return (0, aZ.jsx)(FX.Provider, {
            value: su,
            children: (0, aZ.jsx)(ol, {
              kind: uu,
              RU: Zu,
              store: Eu,
              power: ju,
              renderSlot: Xu
            })
          })
        },
        quickMoveRange: Xu.length > 0 ? [Math.min(...Xu), Math.max(...Xu) + 1] : [0, 0],
        className: Gl(uu)
      }
    }
    const ml = "Assembler";

    function vl(uu) {
      var Eu, ju, su, Uu, Zu, Xu, lu, qu, fu;
      let {
        RU: Cu,
        store: bu,
        renderSlot: cu
      } = uu;
      const {
        t: Nu
      } = (0, oU.A)(), Ou = pl(bu, Cu), Yu = null !== (Eu = null === Ou || void 0 === Ou ? void 0 : Ou.tier) && void 0 !== Eu ? Eu : 1, hu = null !== (ju = null === Ou || void 0 === Ou ? void 0 : Ou.taught) && void 0 !== ju ? ju : null, Du = yE(ml, {
        coupled: !1,
        taught: hu
      }), gu = null !== (su = Du.bench) && void 0 !== su ? su : null, Mu = null !== (Uu = null === Ou || void 0 === Ou ? void 0 : Ou.status) && void 0 !== Uu ? Uu : null, eu = null !== (Zu = null === Ou || void 0 === Ou ? void 0 : Ou.power) && void 0 !== Zu ? Zu : null, Gu = null !== (Xu = null === Ou || void 0 === Ou ? void 0 : Ou.powerCap) && void 0 !== Xu ? Xu : 4e3;
      return (0, aZ.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, aZ.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, aZ.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Nu(UZ(ml))
          }), gu && (0, aZ.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [Nu("buildAFactory2Game:benchMakes"), (0, aZ.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, aZ.jsx)(mU.d, {
                itemName: gu.output,
                amount: 0
              })
            }), (null === Ou || void 0 === Ou ? void 0 : Ou.taughtName) && (0, aZ.jsx)(vU.d, {
              text: Ou.taughtName
            }), gu.outputAmount > 1 && (0, aZ.jsxs)("span", {
              children: ["\xd7", gu.outputAmount]
            })]
          }), !gu && (0, aZ.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: Nu("buildAFactory2Game:benchTeachHint")
          }), (0, aZ.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, aZ.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (lu = Du.inputSlots) && void 0 !== lu ? lu : []).map(((uu, Eu) => {
                const ju = null === gu || void 0 === gu ? void 0 : gu.inputs[Eu];
                return (0, aZ.jsxs)("div", {
                  className: JU()("Baf2BenchInput", {
                    Spare: !ju
                  }),
                  children: [(0, aZ.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [cu(uu), ju && (0, aZ.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, aZ.jsx)(mU.d, {
                        itemName: ju.item,
                        amount: 0
                      })
                    })]
                  }), (0, aZ.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: ju ? `\xd7${ju.amount}` : "\xa0"
                  })]
                }, uu)
              }))
            }), (0, aZ.jsx)(Jl, {
              running: "running" === Mu,
              opMs: Du.opMs,
              opLeftMs: null !== (qu = null === Ou || void 0 === Ou ? void 0 : Ou.opLeftMs) && void 0 !== qu ? qu : null,
              updateCount: bu.updateCount
            }), (0, aZ.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, aZ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Nu("buildAFactory2Game:machineOutput")
              }), (0, aZ.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Du.outputSlots.map((uu => (0, aZ.jsx)("div", {
                  children: cu(uu)
                }, uu)))
              })]
            })]
          }), null !== eu && (0, aZ.jsx)(mX, {
            stored: eu,
            cap: Gu,
            rates: null !== (fu = null === Ou || void 0 === Ou ? void 0 : Ou.powerRates) && void 0 !== fu ? fu : null
          }), null !== Mu && (0, aZ.jsx)("div", {
            className: JU()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Mu
            }),
            children: Nu(gl(ml, Mu, Ou, !1))
          }), gu && gu.inputs.length > 1 && (0, aZ.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: Nu("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, aZ.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, aZ.jsx)(XX, {
            taught: hu,
            tier: Yu
          }), gu && (0, aZ.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: Nu("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Kl(uu) {
      var Eu;
      const ju = null !== (Eu = VE[ml].inputSlots) && void 0 !== Eu ? Eu : [];
      return {
        render: Eu => {
          let {
            RU: ju,
            renderSlot: su
          } = Eu;
          return (0, aZ.jsx)(vl, {
            RU: ju,
            store: uu,
            renderSlot: su
          })
        },
        quickMoveRange: [Math.min(...ju), Math.max(...ju) + 1],
        className: Gl(ml)
      }
    }
    var Vl = ju(91),
      rl = ju(1178),
      Ql = ju(4427);
    const il = 600,
      Wl = .5,
      Sl = 4,
      Il = 1200,
      Fl = 140,
      Bl = 100,
      Ll = 32,
      tl = 16,
      xl = 100.5,
      Tl = 90,
      Hl = 1.5,
      Al = 50;

    function nl(uu) {
      switch (mj(uu)) {
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
    const yl = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function zl(uu) {
      const Eu = Math.ceil(60 * uu / Bl);
      return {
        fuel: Math.max(Ll, Eu),
        waste: Math.max(tl, Eu)
      }
    }

    function Rl(uu, Eu, ju) {
      const [su, Uu, Zu] = [uu - 2, Eu - 2, ju - 2];
      return 2 * (su * Uu + Uu * Zu + Zu * su) * Fl
    }

    function uq(uu, Eu, ju) {
      return Math.max(0, uu - 2) * Math.max(0, Eu - 2) * Math.max(0, ju - 2)
    }

    function Eq(uu, Eu) {
      const [ju, su, Uu] = uu, Zu = ju * su * Uu, Xu = new Float32Array(Zu);
      let lu = 0,
        qu = 0,
        fu = 0,
        Cu = 0,
        bu = 0;
      const cu = (uu, Zu, Xu) => uu < 0 || uu >= ju || Zu < 0 || Zu >= su || Xu < 0 || Xu >= Uu ? 0 : Eu[(Zu * Uu + Xu) * ju + uu];
      for (let hu = 0; hu < su; hu++)
        for (let uu = 0; uu < Uu; uu++)
          for (let su = 0; su < ju; su++) {
            const Zu = (hu * Uu + uu) * ju + su,
              Nu = Eu[Zu];
            if (1 === Nu) {
              lu++;
              let Eu = 0;
              for (const [ju, Uu, Zu] of yl) {
                const Xu = cu(su + ju, hu + Uu, uu + Zu);
                1 !== Xu && 2 !== Xu || Eu++
              }
              Xu[Zu] = il * (1 + Wl * Math.min(Eu, Sl)), Cu += Xu[Zu]
            } else if (2 === Nu) qu++;
            else if (3 === Nu) {
              fu++;
              yl.some((Eu => {
                let [ju, Uu, Zu] = Eu;
                return 1 === cu(su + ju, hu + Uu, uu + Zu)
              })) && (bu += Il)
            }
          }
      const Nu = Rl(ju + 2, su + 2, Uu + 2),
        Ou = Math.min(Cu, bu, Nu),
        Yu = lu > 0 ? Cu * Bl / lu : 0;
      return {
        rods: lu,
        graphite: qu,
        channels: fu,
        fuelHeat: Cu,
        cooling: bu,
        size: Nu,
        max: Ou,
        vol: Zu,
        powerPerUnit: Yu,
        pelletsPerMin: Yu > 0 ? Ou / Yu * 60 : 0,
        waterPerS: Ou * zu.m,
        rodHeat: Xu
      }
    }
    const jq = 0,
      sq = 1,
      Uq = 6,
      Zq = 7,
      Xq = 8;

    function lq(uu, Eu) {
      const [ju, su, Uu] = uu, Zu = new Uint8Array(ju * su * Uu), Xu = (uu, Zu, Xu) => uu < 0 || uu >= ju || Zu < 0 || Zu >= su || Xu < 0 || Xu >= Uu ? 0 : Eu[(Zu * Uu + Xu) * ju + uu];
      for (let lu = 0; lu < su; lu++)
        for (let uu = 0; uu < Uu; uu++)
          for (let su = 0; su < ju; su++) {
            const qu = (lu * Uu + uu) * ju + su,
              fu = Eu[qu];
            if (1 === fu) {
              let Eu = 0;
              for (const [ju, Uu, Zu] of yl) {
                const qu = Xu(su + ju, lu + Uu, uu + Zu);
                Eu += 1 === qu || 2 === qu ? 1 : 0
              }
              Zu[qu] = sq + Math.min(Eu, Sl)
            } else if (3 === fu) {
              const Eu = yl.some((Eu => {
                let [ju, Uu, Zu] = Eu;
                return 1 === Xu(su + ju, lu + Uu, uu + Zu)
              }));
              Zu[qu] = Eu ? Uq : Zq
            } else 2 === fu && (Zu[qu] = Xq)
          }
      return Zu
    }

    function qq(uu) {
      return uu.fuelHeat <= uu.cooling && uu.fuelHeat <= uu.size ? "fuel" : uu.cooling <= uu.size ? "cooling" : "size"
    }
    const fq = Tl;

    function Cq(uu, Eu, ju) {
      return Math.round(uu * Eu * ju * 25e3 * (1 + .25 * (Math.min(uu, Eu, ju) - 2)))
    }

    function bq(uu) {
      return Math.max(0, Math.min(zu.e, uu))
    }

    function cq(uu, Eu, ju) {
      const su = Eu * bq(ju);
      return uu <= 0 ? 0 : su > 0 ? Math.min(200, 100 * uu / su) : 200
    }

    function Nq(uu, Eu) {
      const ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? Hl : 1;
      return Math.min(uu.fuelHeat * ju, uu.cooling * bq(Eu), uu.size * ju)
    }

    function Oq(uu) {
      return 2 + uu / 10
    }
    const Yq = "buildAFactory2Game:";

    function hq(uu) {
      var Eu;
      return null !== (Eu = uu.baf2RxMood) && void 0 !== Eu ? Eu : function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const ju = [
          ["calm", 50],
          ["warm", fq],
          ["hot", xl]
        ];
        for (const [su, Uu] of ju)
          if (uu < Uu + (su === Eu ? 3 : 0)) return su;
        return "alarm"
      }(uu.baf2RxHeat)
    }
    const Dq = 120;

    function gq(uu) {
      const Eu = uu.baf2RxState;
      if ("running" === Eu && uu.baf2RxHeat > xl) return {
        label: `${Yq}rxState_tooHot`,
        tone: "bad",
        fix: `${Yq}rxFix_tooHot`
      };
      switch (Eu) {
        case "running":
          return {
            label: `${Yq}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Yq}rxState_idle`, tone: "off", fix: `${Yq}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Yq}rxState_scram`, tone: "off", fix: uu.baf2RxHeat < Al ? `${Yq}rxFix_scramCool` : `${Yq}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Yq}rxState_${Eu}`, tone: "off", fix: `${Yq}rxFix_${Eu}`
          };
        case "melted":
          return {
            label: `${Yq}rxState_melted`, tone: "bad", fix: `${Yq}rxFix_melted`
          };
        default:
          return {
            label: `${Yq}rxState_${Eu}`, tone: "warn", fix: `${Yq}rxFix_${Eu}`
          }
      }
    }

    function Mq(uu) {
      const [Eu, ju, su] = uu.baf2RxStats;
      return {
        fuelHeat: Eu,
        cooling: ju * (uu.baf2RxCryo ? Math.max(1, bq(uu.baf2RxWater / 100)) : 1),
        size: su
      }
    }

    function eq(uu) {
      var Eu;
      const ju = "idle" === uu.baf2RxState || "running" === uu.baf2RxState && uu.baf2RxHeat <= xl || "scram" === uu.baf2RxState && uu.baf2RxHeat < Al;
      if (0 === (uu.baf2RxFlags & eE) || !uu.baf2RxFormed || !ju) return null;
      const {
        fuelHeat: su,
        cooling: Uu,
        size: Zu
      } = Mq(uu), Xu = Math.min(su, Uu, Zu), lu = qq({
        fuelHeat: su,
        cooling: Uu,
        size: Zu
      }), qu = "cooling" === lu && !0 === uu.baf2RxCryoOpen && !uu.baf2RxCryo, fu = null !== (Eu = uu.baf2RxCells) && void 0 !== Eu ? Eu : "", Cu = ("fuel" === lu || "cooling" === lu && !0 === uu.baf2RxCryo) && fu.length > 0 && !fu.includes(String(0)), bu = qu ? "Cryo" : "scram" === uu.baf2RxState ? "Off" : "";
      return Xu < 12e3 ? {
        key: `${Yq}rxGrow_${Cu?"full":lu}${bu}`,
        amount: Xu
      } : null
    }

    function Gq(uu, Eu) {
      return uu[0] === Eu[0] && uu[1] === Eu[1] && uu[2] === Eu[2]
    }

    function pq(uu) {
      return [...uu].sort(((uu, Eu) => Number(Eu[2] < Eu[1]) - Number(uu[2] < uu[1])))
    }

    function wq(uu, Eu) {
      return Eu.some((Eu => {
        let [ju, su] = Eu;
        return !(su <= 0) && ["edge", "cap", "wall", "inside"].some((Eu => ju === Xs(uu, Eu)))
      }))
    }

    function Jq(uu, Eu, ju) {
      const su = uu.baf2RxFuel - uu.baf2RxPu > 0 ? ju : 0;
      return {
        full: uu.baf2RxWaste > Eu - 3,
        fullInS: su > 0 ? Math.max(0, Eu - uu.baf2RxWaste) / su : null
      }
    }
    const dq = {
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

    function aq(uu) {
      return Pq[uu]
    }
    const Pq = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function oq(uu) {
      let [Eu, ju, su] = uu;
      return Math.ceil(Rl(Eu, ju, su) * zu.m)
    }

    function kq(uu, Eu) {
      return "battery" === uu ? Eu[0] * Eu[1] * Eu[2] : function(uu) {
        let [Eu, ju, su] = uu;
        return Eu * ju * su - Math.max(0, Eu - 2) * Math.max(0, ju - 2) * Math.max(0, su - 2)
      }(Eu) - 1
    }

    function mq(uu) {
      const Eu = Math.max(0, uu);
      if (Eu < 10) return String(Math.round(10 * Eu) / 10);
      if (Eu < 1e4) return Math.round(Eu).toLocaleString("en-US");
      if (Eu < 1e6) return `${Eu<1e5?(Math.floor(Eu/100)/10).toFixed(1):Math.floor(Eu/1e3)}k`;
      const ju = Eu / 1e6;
      return `${ju<10?(Math.floor(100*ju)/100).toFixed(2):ju<100?(Math.floor(10*ju)/10).toFixed(1):Math.floor(ju)}M`
    }

    function vq(uu) {
      return uu <= 0 ? "0" : uu >= 10 ? String(Math.round(uu)) : uu.toFixed(uu >= 1 ? 1 : 2)
    }

    function Kq(uu) {
      const Eu = zj(uu, 0),
        ju = zj(uu, Hj(uu) - 1);
      return {
        lo: [Math.min(Eu[0], ju[0]), Math.min(Eu[1], ju[1]), Math.min(Eu[2], ju[2])],
        hi: [Math.max(Eu[0], ju[0]) + 1, Math.max(Eu[1], ju[1]) + 1, Math.max(Eu[2], ju[2]) + 1]
      }
    }

    function Vq(uu, Eu, ju) {
      const su = [Eu[0] - uu[0], Eu[1] - uu[1], Eu[2] - uu[2]],
        Uu = [(uu[0] + Eu[0]) / 2, (uu[1] + Eu[1]) / 2, (uu[2] + Eu[2]) / 2],
        Zu = [];
      for (let Xu = 0; Xu < 3; Xu++) {
        const lu = (Xu + 1) % 3,
          qu = (Xu + 2) % 3;
        for (const fu of [uu[lu], Eu[lu]])
          for (const Cu of [uu[qu], Eu[qu]]) {
            const uu = [0, 0, 0],
              Eu = [ju, ju, ju];
            uu[Xu] = Uu[Xu], Eu[Xu] = su[Xu] + ju, uu[lu] = fu, uu[qu] = Cu, Zu.push([uu, Eu])
          }
      }
      return Zu
    }
    const rq = "buildAFactory2Game:",
      Qq = [`${rq}colNorth`, `${rq}colEast`, `${rq}colSouth`, `${rq}colWest`];

    function iq(uu, Eu) {
      const [ju, su, Uu] = uu.baf2ColAt;
      return `baf2col ${ju} ${su} ${Uu} ${Eu}`
    }

    function Wq(uu) {
      return function(uu) {
        if (!Number.isFinite(uu)) return "";
        const Eu = Math.max(1, Math.round(uu));
        if (Eu < 60) return `${Eu}s`;
        const ju = Eu % 60;
        return 0 === ju ? Eu / 60 + "m" : `${Math.floor(Eu/60)}m ${ju}s`
      }(function(uu) {
        const Eu = ls.FOCUS_BY_LASERS[Math.max(0, Math.min(4, uu))];
        return Eu > 0 ? ls.NOVA_FOCUS / Eu : 1 / 0
      }(uu))
    }

    function Sq(uu) {
      const Eu = Math.abs(Math.round(uu));
      return Eu < 1e3 ? Math.round(uu).toLocaleString("en-US") : Eu < 1e6 ? `${Eu<1e5?(uu/1e3).toFixed(1).replace(/\.0$/,""):Math.round(uu/1e3)}k` : `${(uu/1e6).toFixed(Eu<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function Iq(uu, Eu, ju) {
      if (Ns(Eu) >= 0) {
        const Eu = function(uu, Eu) {
          return uu.find((uu => {
            let {
              focus: ju
            } = uu;
            return ju[0] === Eu[0] && ju[2] === Eu[2] && (Eu[1] === ju[1] || Eu[1] === ju[1] - 1)
          }))
        }(uu, ju);
        if (!Eu) return null;
        const Uu = function(uu) {
          let Eu = 0,
            ju = 0;
          for (let su = 0; su < 4; su++) Eu += uu.laser[su] ? 1 : 0, ju += uu.live[su] ? 1 : 0;
          return {
            lasers: Eu,
            live: ju,
            focusPerS: ls.FOCUS_BY_LASERS[ju],
            drawPerS: ls.LASER_DRAW * ju
          }
        }({
          laser: Eu.lasers,
          live: Eu.live
        });
        if (0 === Uu.lasers || "noLasers" === Eu.state) return {
          key: `${rq}lookColNoLasers`
        };
        if (0 === Uu.live) return {
          key: `${rq}lookColOff_blocked`
        };
        if (!(Eu.on && Uu.live > 0) && ("running" !== (su = Eu.state) && "slowed" !== su)) return {
          key: `${rq}lookColOff_${Eu.state}`
        };
        if (Uu.live < Uu.lasers) return {
          key: `${rq}lookColLasersSome`,
          params: {
            lasers: String(Uu.lasers),
            live: String(Uu.live)
          }
        };
        const Zu = Eu.open.filter(Boolean).length;
        return Zu < 4 ? {
          key: `${rq}lookColLasersSpots`,
          params: {
            live: String(Uu.live),
            spots: String(Zu),
            time: Wq(Uu.live)
          }
        } : {
          key: `${rq}lookColLasers`,
          params: {
            live: String(Uu.live),
            time: Wq(Uu.live)
          }
        }
      }
      var su;
      if (!Os(Eu)) return null;
      const Uu = function(uu, Eu) {
        for (const ju of uu) {
          const uu = gs(ju.focus, [Eu[0], Eu[1], Eu[2]]);
          if (uu && uu.LX === ls.LASER_D && ju.lasers[uu.dir]) return {
            entry: ju,
            dir: uu.dir
          }
        }
        return null
      }(uu, ju);
      if (!Uu) return {
        key: `${rq}lookLaserNoCollider`
      };
      const {
        entry: Zu,
        dir: Xu
      } = Uu;
      return Zu.open[Xu] ? Zu.live[Xu] ? {
        key: Zu.on ? `${rq}lookLaserFiring` : `${rq}lookLaserReady`
      } : {
        key: `${rq}lookLaserBlocked`
      } : {
        key: `${rq}lookLaserClosed`
      }
    }

    function Fq(uu, Eu) {
      const ju = [];
      for (let su = 1; su < ls.LASER_D; su++) uu & 1 << Eu * (ls.LASER_D - 1) + su - 1 && ju.push(su);
      return ju
    }
    const Bq = {
      firing: `${rq}colSlotFiring`,
      ready: `${rq}colSlotReady`,
      blocked: `${rq}colSlotBlocked`,
      empty: `${rq}colSlotEmpty`,
      closed: `${rq}colSlotClosed`
    };

    function Lq(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Zu = lU(uu),
        Xu = lU(Eu),
        lu = lU(ju),
        qu = lu.filter(Boolean).length,
        fu = Zu.filter(Boolean).length,
        Cu = [0, 1, 2, 3].map((uu => Xu[uu] ? Zu[uu] ? lu[uu] ? su ? "firing" : "ready" : "blocked" : (uu => Fq(Uu, uu).length > 0)(uu) ? "blocked" : "empty" : "closed")),
        bu = Cu.indexOf("blocked"),
        cu = bu < 0 && fu > 0 ? Cu.indexOf("empty") : -1;
      return Cu.map(((uu, Eu) => {
        const ju = Eu === bu ? {
          key: `${rq}colSlotClear`
        } : Eu === cu ? {
          key: `${rq}colSlotAdd`,
          params: {
            time: Wq(Math.min(4, qu + 1))
          }
        } : null;
        return {
          dir: Eu,
          tone: uu,
          title: {
            key: "blocked" !== uu || Zu[Eu] ? Bq[uu] : `${rq}colSlotGap`,
            keys: {
              dir: Qq[Eu]
            }
          },
          hint: ju
        }
      }))
    }

    function tq(uu) {
      var Eu;
      return "noPower" === uu.baf2ColState && uu.baf2ColRxState ? gq({
        baf2RxState: uu.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (Eu = uu.baf2ColRxHeat) && void 0 !== Eu ? Eu : 0
      }) : null
    }

    function xq(uu) {
      const Eu = lU(uu.baf2ColSpots).filter(Boolean).length,
        ju = lU(uu.baf2ColLive);
      let su = 0,
        Uu = 0;
      return lU(uu.baf2ColLasers).forEach(((uu, Eu) => {
        uu && (su++, Uu += ju[Eu] ? 0 : 1)
      })), Uu > 0 ? {
        key: `${rq}colSubSome`,
        params: {
          blocked: String(Uu),
          lasers: String(su)
        }
      } : Eu < 4 ? {
        key: `${rq}colSubSpots`,
        params: {
          lasers: String(su),
          spots: String(Eu)
        }
      } : {
        key: `${rq}colSub`,
        params: {
          lasers: String(su)
        }
      }
    }

    function Tq(uu) {
      const Eu = tq(uu);
      if ("idle" === uu.baf2ColRxState && Eu) return {
        key: `${rq}colState_noPowerIdle`
      };
      if (Eu) return {
        key: `${rq}colState_noPowerReactor`,
        keys: {
          state: Eu.label
        }
      };
      if ("noInput" !== uu.baf2ColState) return {
        key: `${rq}colState_${uu.baf2ColState}`
      };
      const ju = String(Math.max(0, ls.NOVA_SA - uu.baf2ColSa)),
        su = String(Math.max(0, ls.NOVA_GD - uu.baf2ColGd));
      return "0" !== ju && "0" !== su ? {
        key: `${rq}colState_noInput`,
        params: {
          sa: ju,
          gd: su
        }
      } : "0" !== ju ? {
        key: `${rq}colState_noStarAlloy`,
        params: {
          sa: ju
        }
      } : "0" !== su ? {
        key: `${rq}colState_noGlowDust`,
        params: {
          gd: su
        }
      } : {
        key: `${rq}colState_running`
      }
    }

    function Hq(uu) {
      return uu.baf2ColP < 0 ? `${rq}colNext` : function(uu) {
        const Eu = uu.baf2ColState;
        return uu.baf2ColP >= 0 && ("blocked" === Eu || "noLasers" === Eu || "noPower" === Eu)
      }(uu) ? `${rq}colStalled` : null === Aq(uu) ? `${rq}colMaking` : `${rq}colNovaIn`
    }

    function Aq(uu) {
      if (uu.baf2ColP < 0 || uu.baf2ColWant <= 0) return null;
      const Eu = uu.baf2ColFocusPerS * Math.min(1, uu.baf2ColDraw / uu.baf2ColWant);
      return Eu > 0 ? Math.max(0, ls.NOVA_FOCUS - uu.baf2ColP) / Eu : null
    }

    function nq(uu, Eu) {
      const ju = [];
      for (let su = 1; su <= 3; su++) {
        const Uu = [uu[0], uu[1] - su, uu[2]];
        if (!Eu(Uu)) return ju;
        ju.push(Uu)
      }
      return []
    }

    function yq(uu, Eu) {
      const ju = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let su = 0; su < 4; su++) {
        const Uu = su,
          Zu = Ds(uu.focus, Uu, ls.LASER_D);
        if (uu.lasers[su] || !uu.open[su] || !Eu(Zu)) continue;
        const Xu = [];
        for (let ju = 1; ju < ls.LASER_D; ju++) {
          const su = Ds(uu.focus, Uu, ju);
          Eu(su) || Xu.push(su)
        }
        ju.supports.push(...nq(Zu, Eu)), 0 === Xu.length ? ju.free.push(Zu) : (ju.blocked.push(Zu), ju.gaps.push(...Xu))
      }
      return ju
    }
    const zq = ls.LASER_D - .25,
      Rq = 4,
      uf = 2,
      Ef = 16;
    const jf = {
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
        blendMode: Ql.e.Standard,
        soft: !0
      },
      sf = {
        green: jf,
        pink: {
          ...jf,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function Uf(uu, Eu) {
      const ju = {
        ...Eu.params
      };
      for (const [Uu, Zu] of Object.entries(null !== (su = Eu.keys) && void 0 !== su ? su : {})) {
        var su;
        ju[Uu] = uu(Zu)
      }
      return ju
    }
    const Zf = "buildAFactory2Game:",
      Xf = 2 * ls.LASER_D + 1,
      lf = ls.LASER_D;

    function qf(uu) {
      return uu(`${Zf}colFocusTip`, {
        need: Sq(ls.NOVA_FOCUS)
      })
    }

    function ff(uu, Eu) {
      return uu(Eu.key, Uf(uu, Eu))
    }

    function Cf(uu) {
      const Eu = uu.getStatus();
      return {
        status: Eu,
        entry: Eu ? uu.entryAtRoot(Eu.baf2ColAt) : void 0
      }
    }

    function bf(uu, Eu) {
      return {
        left: 100 * (lf + uu) / Xf + "%",
        top: 100 * (lf + Eu) / Xf + "%"
      }
    }

    function Nf(uu) {
      let {
        status: Eu,
        entry: ju
      } = uu;
      const su = lU(Eu.baf2ColLasers),
        Uu = lU(Eu.baf2ColSpots),
        Zu = lU(Eu.baf2ColLive),
        Xu = !0 === (null === ju || void 0 === ju ? void 0 : ju.on),
        lu = ls.LASER_D,
        qu = [];
      for (let Nu = 0; Nu < 4; Nu++) {
        const [uu, , Eu] = hs[Nu];
        if (Zu[Nu]) {
          const ju = 100 * (lu - 1) / Xf,
            su = uu + Eu > 0 ? 100 * (lf + 1) / Xf : 100 * (lf - (lu - 1)) / Xf,
            Uu = 100 * (lf + .35) / Xf,
            Zu = 30 / Xf,
            fu = 0 !== uu ? {
              left: `${su}%`,
              width: `${ju}%`,
              top: `${Uu}%`,
              height: `${Zu}%`
            } : {
              top: `${su}%`,
              height: `${ju}%`,
              left: `${Uu}%`,
              width: `${Zu}%`
            };
          qu.push((0, aZ.jsx)("i", {
            className: JU()("Baf2ColDiagramBeam", {
              Off: !Xu
            }),
            style: fu
          }, `beam${Nu}`))
        }
        const ju = su[Nu] ? "Baf2ColDiagramLaser" : Uu[Nu] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        qu.push((0, aZ.jsx)("i", {
          className: ju,
          style: bf(uu * lu, Eu * lu)
        }, `spot${Nu}`))
      }
      for (let Nu = 0; Nu < 4; Nu++) {
        if (su[Nu] || !Uu[Nu]) continue;
        const [uu, , ju] = hs[Nu];
        for (const su of Fq(null !== (fu = Eu.baf2ColGaps) && void 0 !== fu ? fu : 0, Nu)) {
          var fu;
          qu.push((0, aZ.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: bf(uu * su, ju * su)
          }, `gap${Nu},${su}`))
        }
      }
      for (const [Nu, , Ou] of null !== (Cu = null === ju || void 0 === ju ? void 0 : ju.blockers) && void 0 !== Cu ? Cu : []) {
        var Cu, bu, cu;
        const uu = Nu - (null !== (bu = null === ju || void 0 === ju ? void 0 : ju.focus[0]) && void 0 !== bu ? bu : 0),
          Eu = Ou - (null !== (cu = null === ju || void 0 === ju ? void 0 : ju.focus[2]) && void 0 !== cu ? cu : 0);
        qu.push((0, aZ.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: bf(uu, Eu)
        }, `block${uu},${Eu}`))
      }
      return (0, aZ.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [qu, (0, aZ.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function Of(uu) {
      let {
        status: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)(), su = lU(Eu.baf2ColLive).filter(Boolean).length;
      return (0, aZ.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, aZ.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: qf(ju),
          children: ju(`${Zf}colLadder`)
        }), (0, aZ.jsx)("ul", {
          children: [1, 2, 3, 4].map((uu => (0, aZ.jsx)("li", {
            className: JU()({
              On: uu === su
            }),
            children: ju(`${Zf}colLadderChip`, {
              lasers: String(uu),
              time: Wq(uu)
            })
          }, uu)))
        })]
      })
    }

    function Yf(uu) {
      let {
        item: Eu,
        dl: ju,
        need: su,
        cap: Uu
      } = uu;
      const {
        t: Zu
      } = (0, oU.A)(), Xu = Math.min(ju, su);
      return (0, aZ.jsxs)("li", {
        className: JU()("Baf2ColTile", {
          Short: ju < su
        }),
        children: [(0, aZ.jsx)(hf, {
          item: Eu
        }), (0, aZ.jsx)("b", {
          className: "Baf2ColTileValue",
          children: Zu(`${Zf}colOutOf`, {
            amount: String(Xu),
            cap: String(su)
          })
        }), (0, aZ.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, aZ.jsx)("i", {
            style: {
              width: 100 * Xu / su + "%"
            }
          })
        }), ju > su && (0, aZ.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: Zu(`${Zf}colIntakeHeld`, {
            amount: String(ju),
            cap: String(Uu)
          })
        })]
      })
    }

    function hf(uu) {
      let {
        item: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)();
      return (0, aZ.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, aZ.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, aZ.jsx)(mU.d, {
            itemName: Eu,
            amount: 0
          })
        }), (0, aZ.jsx)("span", {
          className: "Baf2ColTileName",
          children: ZZ(ju, Eu)
        })]
      })
    }

    function Df(uu) {
      switch (uu.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function gf(uu) {
      var Eu, ju, Uu;
      let {
        store: Zu,
        close: Xu
      } = uu;
      const {
        t: lu
      } = (0, oU.A)(), qu = BX(), {
        status: fu,
        entry: Cu
      } = function(uu) {
        const [Eu, ju] = (0, su.useState)((() => Cf(uu)));
        return (0, su.useEffect)((() => (ju(Cf(uu)), uu.subscribe((() => {
          ju(Cf(uu))
        })))), [uu]), Eu
      }(Zu), [bu, cu] = (0, su.useState)(null), Nu = null === fu || void 0 === fu ? void 0 : fu.baf2ColHold;
      (0, su.useEffect)((() => {
        cu(null)
      }), [Nu]);
      const Ou = (0, su.useRef)({
          p: -1,
          n: 0
        }),
        Yu = null !== (Eu = null === fu || void 0 === fu ? void 0 : fu.baf2ColP) && void 0 !== Eu ? Eu : -1;
      Yu < Ou.current.p && Ou.current.n++, Ou.current.p = Yu;
      const hu = (0, su.useRef)(null),
        [Du] = (0, su.useState)((() => {
          return (uu = Zu.heldAtOpen()) === Cs || uu === bs ? {
            key: `${rq}colBeltItIn`,
            item: uu
          } : null;
          var uu
        }));
      if (!fu) return null;
      const gu = fu.baf2ColMember,
        Mu = fu.baf2ColP >= 0,
        eu = function(uu, Eu) {
          if (uu.baf2ColP >= 0 && uu.baf2ColDraw > 0) {
            const Eu = uu.baf2ColWant > 0 ? Math.min(1, uu.baf2ColDraw / uu.baf2ColWant) : 0;
            return {
              focus: uu.baf2ColFocusPerS * Eu,
              draw: uu.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === uu.baf2ColState && Eu && Eu.draw > 0 ? {
            ...Eu,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(fu, hu.current);
      hu.current = eu.draw > 0 ? eu : null;
      const Gu = "slowed" === fu.baf2ColState || "noPower" === fu.baf2ColState,
        pu = Aq(fu),
        wu = null !== bu && void 0 !== bu ? bu : fu.baf2ColHold,
        Ju = function(uu) {
          var Eu, ju;
          return "idle" === uu.baf2ColRxState ? null : null !== (Eu = null === (ju = tq(uu)) || void 0 === ju ? void 0 : ju.fix) && void 0 !== Eu ? Eu : null
        }(fu),
        du = null === Ju && null === Du ? function(uu) {
          var Eu;
          const ju = uu.baf2ColSentTo;
          if (!ju) return null;
          const su = null !== (Eu = uu.baf2ColSentHeld) && void 0 !== Eu ? Eu : null;
          return {
            key: null === su ? `${rq}colNovaSentToMachine` : `${rq}colNovaSentTo`,
            target: ju,
            dl: su
          }
        }(fu) : null,
        au = Mu ? lu(`${Zf}colFocusOf`, {
          focus: Sq(fu.baf2ColP),
          need: Sq(ls.NOVA_FOCUS)
        }) : null;
      return (0, aZ.jsx)(pX.c, {
        close: Xu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, aZ.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, aZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, aZ.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, aZ.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, aZ.jsx)(mU.d, {
                  itemName: qs,
                  amount: 0
                })
              }), (0, aZ.jsxs)("div", {
                children: [(0, aZ.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: ZZ(lu, qs)
                }), (0, aZ.jsx)("p", {
                  children: ff(lu, xq(fu))
                })]
              })]
            }), (0, aZ.jsx)(wX.l, {
              onClick: Xu
            })]
          }), (0, aZ.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, aZ.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, aZ.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, aZ.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: lu(Hq(fu), {
                    time: null === pu ? "" : pZ(lu, pu)
                  })
                }), (0, aZ.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, aZ.jsx)("i", {
                    style: {
                      width: (Mu ? 100 * fu.baf2ColP / ls.NOVA_FOCUS : 0) + "%"
                    }
                  }, Ou.current.n)
                }), (0, aZ.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, aZ.jsxs)("span", {
                    title: qf(lu),
                    children: [(0, aZ.jsx)("b", {
                      children: Sq(eu.focus)
                    }), " ", lu(`${Zf}colFocusPerS`)]
                  }), (0, aZ.jsxs)("span", {
                    className: JU()("Baf2ColDraw", {
                      Short: Gu
                    }),
                    children: [(0, aZ.jsx)(kU.e, {
                      name: "bolt"
                    }), Gu ? lu(`${Zf}colDrawOf`, {
                      draw: Sq(fu.baf2ColDraw),
                      want: Sq(fu.baf2ColWant)
                    }) : lu(`${Zf}colPowerPerS`, {
                      rate: Sq(eu.draw)
                    })]
                  }), null !== au && (0, aZ.jsx)("span", {
                    className: "Soft",
                    children: au
                  })]
                })]
              }), (0, aZ.jsx)("p", {
                className: JU()("Baf2ColState", Df(fu)),
                children: ff(lu, Tq(fu))
              }), null !== Ju && (0, aZ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: lu(Ju)
              }), null === Ju && null !== Du && (0, aZ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: lu(Du.key, {
                  item: ZZ(lu, Du.item)
                })
              }), du && (0, aZ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: lu(du.key, {
                  target: ZZ(lu, du.target),
                  amount: String(null !== (ju = du.dl) && void 0 !== ju ? ju : 0)
                })
              }), (0, aZ.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, aZ.jsx)(Yf, {
                  item: Cs,
                  dl: fu.baf2ColSa,
                  need: ls.NOVA_SA,
                  cap: ls.SA_CAP
                }), (0, aZ.jsx)(Yf, {
                  item: bs,
                  dl: fu.baf2ColGd,
                  need: ls.NOVA_GD,
                  cap: ls.GD_CAP
                }), (0, aZ.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, aZ.jsx)(hf, {
                    item: "Nova Matter"
                  }), (0, aZ.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: lu(`${Zf}colNovaHeld`, {
                      amount: String(fu.baf2ColOut),
                      cap: String(ls.OUT_CAP)
                    })
                  }), gu && (0, aZ.jsx)(wX.p, {
                    className: "Baf2ColTake",
                    disabled: 0 === fu.baf2ColOut,
                    onClick: () => {
                      qu.send(iq(fu, "take"))
                    },
                    children: lu(`${Zf}colTake`)
                  })]
                })]
              }), gu && (0, aZ.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": wu,
                className: JU()("Baf2ColHold", {
                  On: wu
                }),
                onClick: uu => {
                  uu.detail > 0 && uu.currentTarget.blur(), cu(!wu), qu.send(iq(fu, "hold " + (wu ? 0 : 1)))
                },
                children: [(0, aZ.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, aZ.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, aZ.jsx)("b", {
                    children: lu(`${Zf}colHold`)
                  }), (0, aZ.jsx)("span", {
                    children: lu(`${Zf}colHoldNote`)
                  })]
                })]
              })]
            }), (0, aZ.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, aZ.jsx)(Nf, {
                status: fu,
                entry: Cu
              }), (0, aZ.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Lq(fu.baf2ColLasers, fu.baf2ColSpots, fu.baf2ColLive, eu.beamsOn, null !== (Uu = fu.baf2ColGaps) && void 0 !== Uu ? Uu : 0).map((uu => (0, aZ.jsxs)("li", {
                  className: uu.tone,
                  children: [(0, aZ.jsx)("b", {
                    children: ff(lu, uu.title)
                  }), null !== uu.hint && (0, aZ.jsx)("span", {
                    children: ff(lu, uu.hint)
                  })]
                }, uu.dir)))
              }), (0, aZ.jsx)(Of, {
                status: fu
              })]
            })]
          })]
        })
      })
    }
    const Mf = "buildAFactory2Game:",
      ef = 36e5,
      Gf = 864e5;

    function pf(uu, Eu, ju) {
      return Math.max(0, Math.ceil((uu + Eu - Math.max(ju, uu)) / 1e3))
    }

    function wf(uu) {
      return uu.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function Jf(uu) {
      return "Homestead" === uu
    }

    function df(uu) {
      return function(uu) {
        let Eu = 0;
        for (const ju of uu) {
          const uu = /^Island ([1-9]\d{0,5})$/.exec(ju);
          uu && (Eu = Math.max(Eu, Number(uu[1])))
        }
        return `Island ${Eu+1}`
      }(uu.map((uu => uu.baf2IslandName)))
    }

    function af(uu, Eu) {
      return function(uu) {
        return `${Mf}islandsBlocked${uu[0].toUpperCase()}${uu.slice(1)}`
      }("degraded" === uu && 0 === Eu ? "stuck" : uu)
    }

    function Pf(uu) {
      return uu.filter((uu => {
        var Eu;
        return !uu.baf2IslandActive && void 0 === uu.baf2IslandUnreadable && void 0 === (null === (Eu = uu.baf2IslandCoop) || void 0 === Eu ? void 0 : Eu.baf2CoopState)
      })).length
    }

    function of(uu) {
      return "coopMoving" === uu || "coopUnreachable" === uu
    }

    function kf(uu, Eu) {
      const ju = Eu > 0;
      return {
        change: null === uu && !ju,
        switch: (null === uu || "degraded" === uu || of(uu)) && !ju,
        rename: "loading" !== uu && "degraded" !== uu && "stuck" !== uu
      }
    }

    function mf(uu, Eu) {
      return void 0 === uu || "corrupt" === uu && Eu
    }
    const vf = rX;

    function Kf(uu, Eu, ju) {
      if (null !== uu && void 0 !== uu && uu.untilGone) {
        var su;
        return !("dismiss" === uu.untilGone && void 0 === (null === (su = Eu.baf2IslandCoop) || void 0 === su ? void 0 : su.baf2CoopState)) && ju - uu.atMs < 32500
      }
      return void 0 !== uu && ju - uu.atMs < vf && Eu.baf2IslandName === uu.from
    }
    const Vf = rX;

    function rf(uu) {
      return "core" === (null === uu || void 0 === uu ? void 0 : uu.kind) ? uu.core : "islands" === (null === uu || void 0 === uu ? void 0 : uu.kind) ? uu.backToCore : void 0
    }

    function Qf(uu) {
      return `\0${uu}\0`
    }

    function Wf(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const su = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const Zu of Object.keys(ju)) su[Zu] = Qf(Zu);
      let Uu = Object.keys(su).length > 0 ? uu(Eu, su) : uu(Eu);
      for (const [Zu, Xu] of Object.entries(ju)) Uu = Uu.split(Qf(Zu)).join(Xu);
      return Uu
    }

    function Sf(uu, Eu) {
      return uu ? Eu ? "enabled" : "disabled" : "hidden"
    }
    const If = {
      removed: `${Mf}islandsCoopRemoved`,
      deleted: `${Mf}islandsCoopDeleted`,
      notReady: `${Mf}islandsCoopNotReady`,
      gone: `${Mf}islandsCoopGone`
    };

    function Ff(uu) {
      var Eu;
      return "member" !== (null === (Eu = uu.baf2IslandCoop) || void 0 === Eu ? void 0 : Eu.baf2CoopRole) && "newer" !== uu.baf2IslandUnreadable
    }

    function Bf(uu, Eu, ju, su, Uu, Zu) {
      const Xu = uu.baf2IslandActive,
        lu = uu.baf2IslandUnreadable,
        qu = uu.baf2IslandCoop,
        fu = function(uu, Eu, ju) {
          return {
            switch: uu.switch && void 0 === Eu,
            delete: uu.change && mf(Eu, ju)
          }
        }(Eu, lu, su),
        Cu = Xu && void 0 !== qu && void 0 === qu.baf2CoopState && "coopUnreachable" === Zu,
        bu = {
          switch: Sf((!Xu || Cu) && void 0 === lu, Cu || fu.switch),
          switchLabel: Cu ? "tryAgain" : "switch",
          rename: Sf(!0, Eu.rename),
          delete: Sf(!Xu, fu.delete),
          deleteWaits: !Xu && mf(lu, su),
          people: Sf(void 0 !== uu.baf2IslandInvitable || Uu && Xu && void 0 === lu && void 0 === qu, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        cu = !Xu && fu.delete;
      if (void 0 === qu) return ju ? {
        ...bu,
        delete: Sf(!Xu, !1),
        deleteWaits: !1,
        note: cu ? {
          key: `${Mf}islandsCoopKeepOwn`
        } : null
      } : bu;
      const Nu = qu.baf2CoopState,
        Ou = qu.baf2CoopMembers.length > 1,
        Yu = {
          ...bu,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Nu && "member" === qu.baf2CoopRole) return {
        ...Yu,
        dismiss: Sf(!0, Eu.rename),
        note: {
          key: If[Nu],
          names: {
            owner: qu.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Nu) {
        let uu = {
          key: `${Mf}islandsCoopOwnLost`
        };
        return cu && Ou ? uu = {
          key: `${Mf}islandsCoopDeleteMembers`
        } : cu && ju && (uu = {
          key: `${Mf}islandsCoopKeepOwn`
        }), {
          ...Yu,
          delete: Sf(!Xu, fu.delete && !Ou && !ju),
          deleteWaits: bu.deleteWaits && !Ou && !ju,
          note: uu
        }
      }
      if ("member" === qu.baf2CoopRole) return {
        ...bu,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: Sf(!0, Xu ? Eu.switch : Eu.rename)
      };
      const hu = qu.baf2CoopManageHere;
      let Du = null;
      var gu;
      hu || Xu ? cu && Ou ? Du = {
        key: `${Mf}islandsCoopDeleteMembers`
      } : cu && ju && (Du = {
        key: `${Mf}islandsCoopKeepOwn`
      }) : Du = {
        key: null !== (gu = qu.baf2CoopLeft) && void 0 !== gu && gu.length ? `${Mf}islandsCoopManageThereClaim` : `${Mf}islandsCoopManageThere`
      };
      return {
        ...bu,
        rename: Sf(!0, Eu.rename && hu),
        delete: Sf(!Xu, fu.delete && !Ou && !ju),
        deleteWaits: bu.deleteWaits && !Ou && !ju,
        people: "enabled",
        peopleLabel: "players",
        unshare: Sf(hu && Xu && !Ou, Eu.change),
        remove: hu,
        note: Du
      }
    }

    function Lf(uu) {
      var Eu;
      const ju = uu.baf2IslandCoop;
      if ("owner" !== (null === ju || void 0 === ju ? void 0 : ju.baf2CoopRole) || void 0 !== ju.baf2CoopState || null === (Eu = ju.baf2CoopLeft) || void 0 === Eu || !Eu.length) return null;
      const su = uu.baf2IslandActive && ju.baf2CoopManageHere;
      return {
        left: ju.baf2CoopLeft,
        claim: su,
        goThere: !su && ju.baf2CoopManageHere
      }
    }

    function tf(uu) {
      return uu.baf2CoopMembers.length >= uu.baf2CoopMax
    }

    function xf(uu, Eu, ju) {
      return void 0 !== uu && Eu < uu.answer && ju - uu.atMs < vf
    }
    const Tf = "buildAFactory2Game:";

    function Hf(uu, Eu) {
      return {
        onKeyDown: ju => {
          ju.stopPropagation(), ju.nativeEvent.isComposing || 229 === ju.nativeEvent.keyCode || ("Enter" === ju.key ? (ju.preventDefault(), uu()) : "Escape" === ju.key && (ju.preventDefault(), Eu()))
        }
      }
    }

    function Af(uu) {
      return {
        onKeyDown: Eu => {
          "Escape" !== Eu.key || Eu.nativeEvent.isComposing || (Eu.preventDefault(), Eu.stopPropagation(), uu())
        }
      }
    }

    function nf(uu) {
      uu.currentTarget.select()
    }

    function yf(uu, Eu) {
      (0, su.useEffect)((() => {
        var ju;
        uu && (null === (ju = Eu.current) || void 0 === ju || ju.scrollIntoView({
          block: "nearest"
        }))
      }), [uu, Eu])
    }

    function zf(uu) {
      const [Eu, ju] = (0, su.useState)(null);
      return (0, su.useEffect)((() => {
        const Eu = document.querySelector(".UiRequests"),
          su = uu.current;
        if (!Eu || !su || "undefined" === typeof ResizeObserver) return;
        const Uu = () => {
          const uu = Eu.getBoundingClientRect(),
            Uu = su.getBoundingClientRect(),
            Zu = su.parentElement,
            Xu = Zu && parseFloat(getComputedStyle(Zu).paddingTop) || 0,
            lu = function(uu, Eu, ju, su) {
              if (!uu || uu.height <= 0 || uu.right <= Eu.left || uu.left >= Eu.right) return null;
              const Uu = Math.max(su, uu.bottom + 8);
              return {
                marginTop: Math.round(Uu - su),
                maxHeight: Math.max(0, Math.floor(ju - Uu - su))
              }
            }(uu, Uu, window.innerHeight, Xu);
          ju((uu => (null === uu || void 0 === uu ? void 0 : uu.marginTop) === (null === lu || void 0 === lu ? void 0 : lu.marginTop) && (null === uu || void 0 === uu ? void 0 : uu.maxHeight) === (null === lu || void 0 === lu ? void 0 : lu.maxHeight) ? uu : lu))
        };
        Uu();
        const Zu = new ResizeObserver(Uu);
        return Zu.observe(Eu), window.addEventListener("resize", Uu), () => {
          Zu.disconnect(), window.removeEventListener("resize", Uu)
        }
      }), [uu]), Eu
    }

    function Rf() {
      (0, su.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function uC(uu) {
      (0, su.useEffect)((() => {
        var Eu;
        null === (Eu = uu.current) || void 0 === Eu || Eu.focus()
      }), [uu])
    }

    function EC(uu) {
      const [Eu, ju] = (0, su.useState)(Date.now);
      return (0, su.useEffect)((() => {
        const Eu = window.setInterval((() => {
          ju(Date.now())
        }), uu);
        return () => {
          window.clearInterval(Eu)
        }
      }), [uu]), Eu
    }

    function jC(uu) {
      let {
        tier: Eu,
        t: ju
      } = uu;
      const {
        kind: su,
        short: Uu
      } = hu(Eu), Zu = Nu(Eu, Ou), Xu = ju(`${Tf}${Zu.key}`, {
        ...Zu.params,
        name: ju(`${Tf}${Du(Eu).nameKey}`)
      });
      return (0, aZ.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, aZ.jsx)("span", {
          className: JU()("Baf2IslandTierPip", {
            Stage: "tier" !== su
          }),
          "aria-hidden": "true",
          children: Uu
        }), Xu]
      })
    }

    function sC(uu) {
      let {
        note: Eu,
        className: ju,
        t: su
      } = uu;
      return (0, aZ.jsx)("p", {
        className: JU()("Baf2IslandNote", ju),
        children: Wf(su, Eu.key, Eu.names, Eu.params)
      })
    }
    const UC = "buildAFactory2Game:";

    function ZC(uu) {
      let {
        message: Eu,
        arrivedAtMs: ju,
        close: Uu,
        leave: Zu
      } = uu;
      const Xu = BX(),
        {
          t: lu
        } = (0, oU.A)(),
        qu = EC(1e3),
        fu = (0, su.useRef)(null);
      Rf(), (0, su.useEffect)((() => {
        var uu;
        null === (uu = fu.current) || void 0 === uu || uu.focus()
      }), []);
      const Cu = pf(ju, Eu.baf2TransferInMs, qu),
        bu = ju + Eu.baf2TransferInMs - 1e3,
        [cu, Nu] = (0, su.useState)(null);
      (0, su.useEffect)((() => {
        const uu = window.setTimeout((() => {
          Nu(bu)
        }), Math.max(0, bu - Date.now()));
        return () => {
          window.clearTimeout(uu)
        }
      }), [bu]);
      const Ou = cu === bu || qu >= bu,
        Yu = Eu.baf2TransferIsland,
        hu = Eu.baf2TransferOwner;
      return (0, aZ.jsx)(pX.c, {
        close: Uu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, aZ.jsxs)("section", {
          ref: fu,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, aZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, aZ.jsxs)("div", {
              children: [(0, aZ.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === hu ? Wf(lu, `${UC}islandsTransferOwn`, {
                  island: Yu
                }) : Wf(lu, `${UC}islandsTransfer`, {
                  island: Yu,
                  owner: hu
                })
              }), (0, aZ.jsx)("p", {
                children: Ou ? lu(`${UC}islandsTransferNow`) : lu(`${UC}islandsTransferIn`, {
                  time: pZ(lu, Cu)
                })
              })]
            }), (0, aZ.jsx)(wX.l, {
              ariaLabel: lu(`${UC}islandsClose`),
              onClick: Uu
            })]
          }), !Ou && (0, aZ.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, aZ.jsx)("p", {
              className: "Baf2TransferNote",
              children: lu(`${UC}islandsTransferNote`)
            }), (0, aZ.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, aZ.jsx)(wX.f, {
                onClick: () => {
                  Xu.send("baf2coopstay"), Zu()
                },
                children: lu(`${UC}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var XC = ju(1499),
      lC = ju(1187),
      qC = ju.n(lC);
    const fC = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const CC = "buildAFactory2Game:",
      bC = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function cC(uu, Eu, ju) {
      return void 0 === Eu ? ju : "string" === typeof Eu ? Eu : Array.isArray(Eu) ? Eu.map((Eu => "string" === typeof Eu ? Eu : "translationKey" in Eu ? uu(Eu.translationKey) : "")).join("") : uu(Eu.translationKey)
    }

    function NC(uu) {
      const Eu = {};
      for (const [ju, su] of Object.entries(null !== uu && void 0 !== uu ? uu : {})) Eu[ju] = su < 0 ? GZ(su) : su.toLocaleString("en-US");
      return Eu
    }

    function OC(uu, Eu) {
      const ju = Eu ? "touch" : "mouse";
      return {
        use: uu(`${CC}lookUse_${ju}`),
        Use: uu(`${CC}lookUseStart_${ju}`)
      }
    }
    const YC = (0, su.memo)((function(uu) {
      let {
        item: Eu
      } = uu;
      return (0, aZ.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, aZ.jsx)(mU.d, {
          itemName: Eu,
          amount: 0
        })
      })
    }));

    function hC(uu) {
      let {
        label: Eu,
        percent: ju,
        progress: su
      } = uu;
      return (0, aZ.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, aZ.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${Eu}: ${su}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": ju,
          children: (0, aZ.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${ju}%`
            }
          })
        }), (0, aZ.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: su
        })]
      })
    }

    function DC(uu) {
      let {
        chips: Eu
      } = uu;
      return (0, aZ.jsx)("span", {
        className: "Baf2QuestChips",
        children: Eu.map((uu => {
          let [Eu, ju, su] = uu;
          const Uu = ju >= su;
          return (0, aZ.jsxs)("span", {
            className: JU()("Baf2QuestChip", {
              Met: Uu
            }),
            children: [(0, aZ.jsx)(YC, {
              item: Eu
            }), (0, aZ.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: Uu ? `\u2713${su}` : `${ju}/${su}`
            })]
          }, Eu)
        }))
      })
    }

    function gC(uu, Eu) {
      const {
        key: ju,
        params: su
      } = Nu(Eu, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return uu(`${CC}${ju}`, {
        ...su,
        name: uu(`${CC}${Du(Eu).nameKey}`)
      })
    }

    function MC(uu) {
      let {
        core: Eu,
        t: ju
      } = uu;
      const [su, Uu] = Eu, Zu = Uu > 0 ? Math.floor(100 * su / Uu) : 100;
      return (0, aZ.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": ju(`${CC}questCoreLabel`, {
          have: String(su),
          need: String(Uu)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Zu,
        children: [(0, aZ.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: ju(`${CC}questCore`, {
            percent: String(Zu)
          })
        }), (0, aZ.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, aZ.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${Zu}%`
            }
          })
        })]
      })
    }

    function eC(uu) {
      let {
        rows: Eu,
        t: ju
      } = uu;
      const su = Eu.filter((uu => uu.done)).length;
      return (0, aZ.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": ju(`${CC}questStepsProgress`, {
          done: String(su),
          total: String(Eu.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": Eu.length,
        "aria-valuenow": su,
        children: Eu.map((uu => (0, aZ.jsx)("span", {
          className: JU()("Baf2QuestSegment", {
            Done: uu.done,
            Current: uu.current
          })
        }, uu.id)))
      })
    }
    const GC = (0, su.memo)(wC, pC);

    function pC(uu, Eu) {
      const ju = ju => uu.view.itemNames[ju] === Eu.view.itemNames[ju];
      return uu.t === Eu.t && uu.extra === Eu.extra && (null === uu.row.item || ju(uu.row.item)) && uu.row.madeFor.every(ju) && uu.row.also.every(ju) && qC()(uu.row, Eu.row)
    }

    function wC(uu) {
      let {
        row: Eu,
        view: ju,
        t: su,
        extra: Uu
      } = uu;
      const {
        isTouchScreen: Zu
      } = (0, GU.l)(["isTouchScreen"]), Xu = Eu.item ? function(uu, Eu, ju) {
        return 1 !== ju && fC.has(uu) ? PU(Eu) : null
      }(Eu.key, Eu.item, Eu.total) : null, lu = Xu ? su(Xu) : Eu.item ? cC(su, ju.itemNames[Eu.item], Eu.item) : "", qu = Eu.also.map((uu => cC(su, ju.itemNames[uu], uu))), fu = qu.join(", "), Cu = function(uu, Eu) {
        var ju;
        return Eu.length < 2 ? null !== (ju = Eu[0]) && void 0 !== ju ? ju : "" : uu(`${CC}listAnd`, {
          rest: Eu.slice(0, -1).join(uu(`${CC}listComma`)),
          last: Eu[Eu.length - 1]
        })
      }(su, [lu, ...qu]), bu = su(`${CC}${Eu.key}`, {
        ...OC(su, Zu),
        ...NC(Eu.params),
        item: lu,
        also: fu,
        itemList: Cu,
        total: String(Eu.total)
      }), [cu, ...Nu] = bu.split("\n"), Ou = Eu.total > 1 && !Eu.done && !Eu.away;
      return (0, aZ.jsxs)("li", {
        className: JU()("Baf2QuestStep", {
          Done: Eu.done,
          Current: Eu.current,
          JustFinished: Eu.justFinished,
          Away: Eu.away
        }),
        children: [!Eu.done && null !== Eu.item && (0, aZ.jsx)(YC, {
          item: Eu.item
        }), (Eu.done || null === Eu.item) && (0, aZ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: Eu.done ? "\u2713" : "\u25cb"
        }), (0, aZ.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, aZ.jsx)("strong", {
            children: cu
          }), Nu.length > 0 && (0, aZ.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Nu.join(" ")
          }), !Eu.done && Eu.madeFor.length > 0 && (0, aZ.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: su("buildAFactory2Game:questRowFor", {
              items: Eu.madeFor.map((uu => cC(su, ju.itemNames[uu], uu))).join(" \u2192 ")
            })
          }), Ou && (0, aZ.jsx)(hC, {
            label: cu,
            percent: Math.round(100 * Eu.amount / Eu.total),
            progress: `${Eu.amount.toLocaleString("en-US")}/${Eu.total.toLocaleString("en-US")}`
          }), !Eu.done && !Eu.away && Eu.chips && Eu.chips.length > 0 && (0, aZ.jsx)(DC, {
            chips: Eu.chips
          }), Uu]
        })]
      })
    }
    const JC = "buildAFactory2Game:",
      dC = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      aC = {
        on: `${JC}tutorialButtonOn`,
        hud: `${JC}tutorialButtonHud`,
        off: `${JC}tutorialButtonOff`
      },
      PC = {
        on: `${JC}tutorialPickedOn`,
        hud: `${JC}tutorialPickedHud`,
        off: `${JC}tutorialPickedOff`
      };
    class oC {
      constructor(uu, Eu, ju) {
        this.commands = uu, this.quests = Eu, this.toasts = ju
      }
      next() {
        const uu = function(uu) {
            return vu[(vu.indexOf(uu) + 1) % vu.length]
          }(this.quests.get().tutorial),
          Eu = this.quests.setTutorial(uu);
        this.commands.send(`baf2tutorial ${uu} ${Eu}`), this.toasts.show({
          baf2ToastText: [(0, Vu.ae)({
            translationKey: PC[uu]
          }, Vu.G.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function kC(uu, Eu) {
      let [ju, su] = Eu;
      return uu(`${CC}${ju}`, NC(su))
    }

    function mC(uu) {
      let [Eu, ju] = uu;
      return Eu + JSON.stringify(ju)
    }

    function vC(uu) {
      let {
        goal: Eu,
        t: ju
      } = uu;
      return Eu ? (0, aZ.jsx)("span", {
        className: "Baf2BookGoal",
        children: ju(`${CC}${Eu}`)
      }) : null
    }

    function KC(uu) {
      let {
        view: Eu,
        t: ju
      } = uu;
      if (!Eu.name) return null;
      const su = tU(Eu.rows);
      return (0, aZ.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, aZ.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: ju(`${CC}currentQuest`)
        }), (0, aZ.jsx)("strong", {
          className: "Baf2BookTitle",
          children: kC(ju, Eu.name)
        }), (0, aZ.jsx)(vC, {
          goal: Eu.goal,
          t: ju
        }), su.length > 1 && (0, aZ.jsx)(eC, {
          rows: su,
          t: ju
        }), (0, aZ.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: Eu.rows.map((uu => (0, aZ.jsx)(GC, {
            row: uu,
            view: Eu,
            t: ju
          }, uu.id)))
        }), Eu.reward && (0, aZ.jsxs)("span", {
          className: "Baf2BookReward",
          children: [ju(`${CC}questReward`), (0, aZ.jsx)(YC, {
            item: Eu.reward
          }), cC(ju, Eu.itemNames[Eu.reward], Eu.reward)]
        })]
      })
    }

    function VC(uu) {
      let {
        quest: Eu,
        upcoming: ju,
        t: su
      } = uu;
      return (0, aZ.jsxs)("li", {
        className: JU()("Baf2BookQuest", {
          Done: Eu[3],
          Upcoming: ju
        }),
        children: [(0, aZ.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: Eu[3] ? "\u2713" : "\u25cb"
        }), (0, aZ.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, aZ.jsx)("strong", {
            className: "Baf2BookTitle",
            children: kC(su, Eu)
          }), (0, aZ.jsx)(vC, {
            goal: Eu[2],
            t: su
          })]
        })]
      })
    }

    function rC(uu) {
      let {
        done: Eu,
        total: ju,
        t: su
      } = uu;
      const Uu = ju > 0 ? Math.round(100 * Eu / ju) : 0,
        Zu = su(`${CC}questBookChapterProgress`, {
          done: String(Eu),
          total: String(ju)
        });
      return (0, aZ.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, aZ.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": Zu,
          "aria-valuemin": 0,
          "aria-valuemax": ju,
          "aria-valuenow": Eu,
          children: (0, aZ.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${Uu}%`
            }
          })
        }), (0, aZ.jsx)("span", {
          className: "Baf2BookProgressText",
          children: Zu
        })]
      })
    }

    function QC(uu) {
      let {
        view: Eu,
        tier: ju,
        quests: su,
        t: Uu
      } = uu;
      const Zu = ju === Eu.tier,
        Xu = (null !== su && void 0 !== su ? su : []).filter((uu => !uu[4])),
        lu = (null !== su && void 0 !== su ? su : []).filter((uu => uu[4])),
        qu = Xu.filter((uu => uu[3])).length,
        fu = Zu && Eu.name ? mC(Eu.name) : null,
        Cu = Xu.findIndex((uu => !uu[3] && mC(uu) === fu));
      return (0, aZ.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, aZ.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, aZ.jsx)("h3", {
            children: gC(Uu, ju)
          }), Xu.length > 0 && (0, aZ.jsx)(rC, {
            done: qu,
            total: Xu.length,
            t: Uu
          }), Zu && Eu.core && (0, aZ.jsx)(MC, {
            core: Eu.core,
            t: Uu
          })]
        }), (0, aZ.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === su && Zu && (0, aZ.jsx)(KC, {
            view: Eu,
            t: Uu
          }), Xu.map(((uu, ju) => ju === Cu ? (0, aZ.jsx)(KC, {
            view: Eu,
            t: Uu
          }, mC(uu)) : (0, aZ.jsx)(VC, {
            quest: uu,
            upcoming: !uu[3],
            t: Uu
          }, mC(uu))))]
        }), Zu && Eu.side && (0, aZ.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, aZ.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: Uu(`${CC}questSide`)
          }), (0, aZ.jsx)("strong", {
            className: "Baf2BookTitle",
            children: kC(Uu, Eu.side.name)
          }), (0, aZ.jsx)(vC, {
            goal: Eu.side.goal,
            t: Uu
          }), (0, aZ.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, aZ.jsx)(GC, {
              row: Eu.side.row,
              view: Eu,
              t: Uu
            })
          })]
        }), lu.length > 0 && (0, aZ.jsxs)(aZ.Fragment, {
          children: [(0, aZ.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: Uu(`${CC}questBookSidesDone`)
          }), (0, aZ.jsx)("ol", {
            className: "Baf2BookQuests",
            children: lu.map((uu => (0, aZ.jsx)(VC, {
              quest: uu,
              upcoming: !1,
              t: Uu
            }, mC(uu))))
          })]
        })]
      })
    }

    function iC(uu) {
      var Eu, ju, Zu;
      let {
        store: Xu,
        tutorial: lu,
        close: qu
      } = uu;
      const {
        t: fu
      } = (0, oU.A)(), bu = (0, XC.g)(iU, Xu.get()), cu = null !== (Eu = bu.tier) && void 0 !== Eu ? Eu : 1, [Nu, Ou] = (0, su.useState)(null), Du = (null === Nu || void 0 === Nu ? void 0 : Nu.at) === cu ? Nu.tier : cu, gu = (0, su.useRef)(null), Mu = null !== bu.chapters;
      (0, su.useEffect)((() => {
        var uu;
        gu.current && (gu.current.scrollTop = 0);
        const Eu = null === (uu = gu.current) || void 0 === uu ? void 0 : uu.querySelector(".Baf2BookQuest.Current");
        if (gu.current && Eu) {
          const uu = Eu.getBoundingClientRect().bottom - gu.current.getBoundingClientRect().bottom;
          uu > 0 && (gu.current.scrollTop += Math.min(uu, Eu.getBoundingClientRect().top - gu.current.getBoundingClientRect().top))
        }
      }), [Du, Mu]);
      const eu = null === (ju = bu.chapters) || void 0 === ju ? void 0 : ju.find((uu => {
        let [Eu] = uu;
        return Eu === Du
      }));
      return (0, aZ.jsx)(pX.c, {
        close: qu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, aZ.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: bC,
          children: [(0, aZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, aZ.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: fu(`${CC}questBookTitle`)
            }), (0, aZ.jsx)(wX.p, {
              className: "Baf2BookTutorialButton",
              disabled: !bu.tutorialKnown,
              ariaLabel: fu(aC[bu.tutorial]),
              title: fu(aC[bu.tutorial]),
              onClick: () => {
                lu.next()
              },
              children: (0, aZ.jsx)(kU.e, {
                name: dC[bu.tutorial]
              })
            }), (0, aZ.jsx)(wX.l, {
              onClick: qu
            })]
          }), (0, aZ.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": fu(`${CC}questBookChapters`),
            "data-pad-initial-area": !0,
            children: Uu.slice(0, Cu()).map(((uu, Eu) => {
              const ju = Eu + 1,
                {
                  kind: su,
                  short: Uu
                } = hu(ju),
                Zu = Yu(ju, cu),
                Xu = Zu ? fu(`${CC}coreAtomicHidden`) : gC(fu, ju);
              return (0, aZ.jsx)("li", {
                children: (0, aZ.jsx)("button", {
                  type: "button",
                  className: JU()({
                    Stage: "tier" !== su,
                    Atomic: "atomic" === su,
                    Current: ju === cu,
                    Selected: ju === Du
                  }),
                  disabled: ju > cu,
                  "aria-pressed": ju === Du,
                  "aria-label": Xu,
                  title: Zu ? void 0 : Xu,
                  onClick: () => {
                    Ou({
                      tier: ju,
                      at: cu
                    })
                  },
                  children: Zu ? "?" : Uu
                })
              }, uu.nameKey)
            }))
          }), (0, aZ.jsxs)("div", {
            ref: gu,
            className: "Baf2BookBody",
            children: [BU(bu) && Du === cu && (0, aZ.jsx)("p", {
              className: "Baf2BookEmpty",
              children: fu(`${CC}questBookAllDone`)
            }), (0, aZ.jsx)(QC, {
              view: bu,
              tier: Du,
              quests: null !== (Zu = null === eu || void 0 === eu ? void 0 : eu[1]) && void 0 !== Zu ? Zu : null,
              t: fu
            })]
          })]
        })
      })
    }
    const WC = "buildAFactory2Game:";

    function SC(uu) {
      let {
        tiers: Eu,
        from: ju,
        tier: su,
        shown: Uu,
        Hc: Zu
      } = uu;
      const {
        t: Xu
      } = (0, oU.A)(), lu = Eu.map(((uu, Eu) => {
        const lu = ju + Eu,
          {
            kind: qu,
            short: fu
          } = hu(lu),
          Cu = Yu(lu, su);
        return (0, aZ.jsx)("li", {
          children: (0, aZ.jsx)("button", {
            type: "button",
            className: JU()({
              Stage: "tier" !== qu,
              Silhouette: Cu,
              Reached: lu <= su,
              Current: lu === su,
              Next: lu === su + 1,
              Selected: lu === Uu
            }),
            disabled: Cu,
            "aria-pressed": lu === Uu,
            "aria-label": Cu ? Xu(`${WC}coreAtomicHidden`) : void 0,
            title: Cu ? void 0 : Xu(`${WC}${uu.nameKey}`),
            onClick: () => {
              Zu(lu)
            },
            children: Cu ? "?" : fu
          })
        }, uu.nameKey)
      }));
      return (0, aZ.jsx)(aZ.Fragment, {
        children: lu
      })
    }

    function IC(uu) {
      let {
        id: Eu,
        label: ju,
        tiers: su,
        from: Uu,
        ...Zu
      } = uu;
      return (0, aZ.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, aZ.jsx)("span", {
          id: Eu,
          className: "Baf2CoreLadderLabel",
          children: ju
        }), (0, aZ.jsx)("ol", {
          "aria-labelledby": Eu,
          children: (0, aZ.jsx)(SC, {
            ...Zu,
            tiers: su,
            from: Uu
          })
        })]
      })
    }

    function FC(uu) {
      const {
        t: Eu
      } = (0, oU.A)(), ju = Uu.findIndex((uu => void 0 !== uu.stage)), su = Uu.findIndex((uu => void 0 !== uu.reactorTier)), Zu = ju < 0 ? Uu : Uu.slice(0, ju), Xu = ju < 0 ? [] : Uu.slice(ju, su < 0 ? void 0 : su), qu = su < 0 || !lu() ? [] : Uu.slice(su);
      return (0, aZ.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, aZ.jsx)(IC, {
          ...uu,
          id: "baf2CoreTiersLabel",
          label: Eu(`${WC}coreTiersLabel`),
          tiers: Zu,
          from: 1
        }), Xu.length > 0 && (0, aZ.jsx)(IC, {
          ...uu,
          id: "baf2CoreStagesLabel",
          label: Eu(`${WC}coreStagesLabel`),
          tiers: Xu,
          from: ju + 1
        }), qu.length > 0 && (0, aZ.jsx)(IC, {
          ...uu,
          id: "baf2CoreAtomicLabel",
          label: Eu(`${WC}coreAtomicLabel`),
          tiers: qu,
          from: su + 1
        })]
      })
    }
    const BC = "buildAFactory2Game:";

    function LC(uu) {
      let {
        item: Eu,
        itemNames: ju,
        children: su
      } = uu;
      return (0, aZ.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, aZ.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, aZ.jsx)(mU.d, {
            itemName: Eu,
            amount: 0
          })
        }), (0, aZ.jsx)(vU.d, {
          text: ju[Eu]
        }), su]
      })
    }

    function tC(uu) {
      const Eu = new Map;
      for (const {
          block: su
        }
        of uu.newDeposits) {
        var ju;
        Eu.set(su, (null !== (ju = Eu.get(su)) && void 0 !== ju ? ju : 0) + 1)
      }
      return [...Eu]
    }

    function xC(uu) {
      let {
        value: Eu,
        label: ju,
        more: su
      } = uu;
      return (0, aZ.jsxs)("li", {
        children: [(0, aZ.jsx)("strong", {
          children: Eu
        }), (0, aZ.jsx)("span", {
          children: ju
        }), su > 0 && (0, aZ.jsxs)("em", {
          children: ["+", su]
        })]
      })
    }

    function TC(uu) {
      let {
        items: Eu,
        itemNames: ju
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)(), [Zu, Xu] = (0, su.useState)(null), lu = null !== Zu && Eu.includes(Zu) ? Zu : null;
      return (0, aZ.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, aZ.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: Uu(`${BC}coreRewardUnlocks`)
        }), (0, aZ.jsx)("ul", {
          children: Eu.map((uu => (0, aZ.jsx)("li", {
            children: (0, aZ.jsx)("button", {
              type: "button",
              className: JU()("Baf2PanelIcon", {
                Picked: uu === lu
              }),
              title: ZZ(Uu, uu),
              "aria-label": ZZ(Uu, uu),
              "aria-pressed": uu === lu,
              onClick: () => {
                Xu(uu === lu ? null : uu)
              },
              children: (0, aZ.jsx)(mU.d, {
                itemName: uu,
                amount: 0
              })
            })
          }, uu)))
        }), (0, aZ.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== lu && (0, aZ.jsxs)(aZ.Fragment, {
            children: [(0, aZ.jsx)(vU.d, {
              text: ju[lu]
            }), " \xb7 ", (0, aZ.jsx)(vU.d, {
              text: ju[ku(lu)]
            })]
          }), null === lu && Uu(`${BC}coreRecipeTap`)]
        })]
      })
    }

    function HC(uu) {
      var Eu, ju;
      let {
        def: su,
        tier: Uu,
        itemNames: Zu
      } = uu;
      const {
        t: Xu
      } = (0, oU.A)(), lu = Uu > 1 ? Du(Uu - 1) : void 0, qu = Math.round(2 * su.islandRadius), fu = lu ? Math.round(2 * lu.islandRadius) : qu, Cu = Uu >= 3 ? ps(Uu) : null;
      return (0, aZ.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, aZ.jsxs)("ul", {
          className: JU()("Baf2CoreStats", {
            Four: null !== Cu
          }),
          children: [(0, aZ.jsx)(xC, {
            value: `${qu}\xd7${qu}`,
            label: Xu(`${BC}coreStatIsland`),
            more: qu - fu
          }), (0, aZ.jsx)(xC, {
            value: String(su.machineAllowance),
            label: Xu(`${BC}coreStatMachines`),
            more: su.machineAllowance - (null !== (Eu = null === lu || void 0 === lu ? void 0 : lu.machineAllowance) && void 0 !== Eu ? Eu : su.machineAllowance)
          }), (0, aZ.jsx)(xC, {
            value: String(su.beltAllowance),
            label: Xu(`${BC}coreStatBelts`),
            more: su.beltAllowance - (null !== (ju = null === lu || void 0 === lu ? void 0 : lu.beltAllowance) && void 0 !== ju ? ju : su.beltAllowance)
          }), null !== Cu && (0, aZ.jsx)(xC, {
            value: String(Cu),
            label: Xu(`${BC}coreStatStorage`),
            more: Cu - (lu ? ps(Uu - 1) : Cu)
          })]
        }), su.reward && (0, aZ.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, aZ.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Xu(`${BC}coreRewardItem`)
          }), (0, aZ.jsx)(LC, {
            item: su.reward,
            itemNames: Zu
          })]
        }), su.newDeposits.length > 0 && (0, aZ.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, aZ.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Xu(su.newDeposits.length > 1 ? `${BC}coreRewardDeposits` : `${BC}coreRewardDeposit`)
          }), tC(su).map((uu => {
            let [Eu, ju] = uu;
            return (0, aZ.jsx)(LC, {
              item: Eu,
              itemNames: Zu,
              children: ju > 1 && ` \xd7${ju}`
            }, Eu)
          }))]
        }), su.unlocks.length > 0 && (0, aZ.jsx)(TC, {
          items: su.unlocks,
          itemNames: Zu
        }), (0, aZ.jsx)(AC, {
          tier: Uu
        })]
      })
    }

    function AC(uu) {
      let {
        tier: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)(), su = DU[Eu];
      if (!su) return null;
      const Uu = hU(Eu, 0, 0).barrierMax !== hU(Eu - 1, 0, 0).barrierMax;
      return (0, aZ.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, aZ.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, aZ.jsx)(mU.d, {
            itemName: Uu ? CU.Chestplate : fU,
            amount: 0
          })
        }), ju(`${BC}gearPerkLine`, {
          perk: ju(`${BC}${su}`)
        })]
      })
    }

    function nC(uu, Eu) {
      return null === uu ? Eu : uu.value
    }

    function yC(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === uu || ju - uu.atMs >= su ? null : Uu(uu.value, Eu) ? uu.armed ? null : uu : uu.armed ? uu : {
        ...uu,
        armed: !0
      }
    }

    function zC(uu, Eu) {
      const ju = Eu.filter((Eu => {
        var ju;
        return !1 !== (null === (ju = uu.get(Eu)) || void 0 === ju ? void 0 : ju.value)
      }));
      for (const [su, Uu] of uu) Uu.value && !Eu.includes(su) && ju.push(su);
      return ju
    }

    function RC(uu, Eu, ju, Uu) {
      const [Zu, Xu] = (0, su.useState)((() => new Map)), lu = () => {
        Xu((Eu => function(uu, Eu, ju, su) {
          var Uu;
          let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            Xu = null;
          for (const [lu, qu] of uu) {
            const Uu = yC(qu, Eu(lu), ju, su, Zu);
            Uu !== qu && (Xu ??= new Map(uu), null === Uu ? Xu.delete(lu) : Xu.set(lu, Uu))
          }
          return null !== (Uu = Xu) && void 0 !== Uu ? Uu : uu
        }(Eu, uu, Date.now(), ju, Uu)))
      };
      (0, su.useEffect)((() => {
        lu()
      }), [Eu, ju]), (0, su.useEffect)((() => {
        if (0 === Zu.size) return;
        const uu = Math.min(...[...Zu.values()].map((uu => uu.atMs))),
          Eu = setTimeout(lu, Math.max(0, uu + ju - Date.now()) + 1);
        return () => {
          clearTimeout(Eu)
        }
      }), [Zu, Eu, ju]);
      return [Zu, (Eu, ju) => {
        Xu((su => {
          const Zu = new Map(su);
          return Zu.set(Eu, function(uu, Eu, ju) {
            return {
              value: uu,
              atMs: ju,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(uu, Eu)
            }
          }(ju, uu(Eu), Date.now(), Uu)), Zu
        }))
      }]
    }
    const ub = "buildAFactory2Game:";

    function Eb(uu) {
      let {
        message: Eu,
        itemNames: ju
      } = uu;
      const Uu = BX(),
        {
          t: Zu
        } = (0, oU.A)(),
        [Xu, lu] = (0, su.useState)(!1),
        [qu, fu] = function(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rX;
          const [ju, su] = RC((Eu => uu.includes(Eu)), uu, Eu, Object.is);
          return [zC(ju, uu), su]
        }(Eu.baf2CoreBankPaused),
        Cu = new Set(qu),
        bu = [...Eu.baf2CoreBanked];
      for (const su of Cu) bu.some((uu => {
        let [Eu] = uu;
        return Eu === su
      })) || bu.push([su, 0]);
      return 0 === bu.length ? null : (0, aZ.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, aZ.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": Xu,
          onClick: () => {
            lu(!Xu)
          },
          children: [(0, aZ.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: Zu(`${ub}coreBankedLater`)
          }), (0, aZ.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: bu.map((uu => {
              let [Eu, ju] = uu;
              const su = Cu.has(Eu);
              return (0, aZ.jsxs)("span", {
                className: JU()({
                  Paused: su
                }),
                title: su ? Zu(`${ub}coreBankPausedTag`) : void 0,
                children: [(0, aZ.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, aZ.jsx)(mU.d, {
                    itemName: Eu,
                    amount: 0
                  })
                }), ju, su && (0, aZ.jsx)(kU.e, {
                  name: "pause"
                })]
              }, Eu)
            }))
          }), (0, aZ.jsx)(kU.e, {
            name: Xu ? "angle-up" : "angle-down"
          })]
        }), Xu && (0, aZ.jsxs)(aZ.Fragment, {
          children: [(0, aZ.jsx)("ul", {
            children: bu.map((uu => {
              let [Eu, su] = uu;
              const Xu = Cu.has(Eu);
              return (0, aZ.jsxs)("li", {
                children: [(0, aZ.jsxs)(LC, {
                  item: Eu,
                  itemNames: ju,
                  children: [(0, aZ.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: su
                  }), Xu && (0, aZ.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: Zu(`${ub}coreBankPausedTag`)
                  })]
                }), (0, aZ.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, aZ.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === su,
                    onClick: () => {
                      Uu.send(`baf2corewithdraw ${su} ${Eu}`)
                    },
                    children: Zu(`${ub}coreTake`)
                  }), (0, aZ.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      Uu.send(`${eu} ${Eu}`), fu(Eu, !Xu)
                    },
                    children: Zu(Xu ? `${ub}coreBankResume` : `${ub}coreBankStop`)
                  })]
                })]
              }, Eu)
            }))
          }), (0, aZ.jsx)("p", {
            className: "Baf2CoreHint",
            children: Zu(`${ub}coreBankNote`)
          })]
        })]
      })
    }
    const jb = "buildAFactory2Game:";

    function sb(uu) {
      const Eu = Math.max(0, Math.floor(uu));
      return `${Math.floor(Eu/60)}:${String(Eu%60).padStart(2,"0")}`
    }

    function Ub(uu) {
      let {
        item: Eu
      } = uu;
      return (0, aZ.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, aZ.jsx)(mU.d, {
          itemName: Eu,
          amount: 0
        })
      })
    }

    function Zb() {
      return (0, aZ.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, aZ.jsx)(kU.e, {
          name: "bolt"
        })
      })
    }

    function Xb(uu) {
      let {
        charge: Eu,
        hint: ju,
        itemNames: su
      } = uu;
      const Uu = BX(),
        {
          t: Zu
        } = (0, oU.A)(),
        [Xu, lu, qu, fu, Cu, bu, cu] = Eu,
        [Nu, Ou] = function(uu) {
          var Eu;
          let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rX,
            su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [Uu, Zu] = RC((() => uu), uu, ju, su);
          return [nC(null !== (Eu = Uu.get("")) && void 0 !== Eu ? Eu : null, uu), uu => {
            Zu("", uu)
          }]
        }(cu),
        Yu = Nu === cu ? bu : !Nu,
        hu = fu >= Cu,
        Du = Xu.find((uu => {
          let [, Eu, ju] = uu;
          return ju < .9 * Eu
        }));
      let gu = `${jb}coreChargeWaiting`,
        Mu = {};
      return hu ? gu = `${jb}coreChargeDone` : Nu ? gu = `${jb}coreChargeStopped` : Yu && ju ? (gu = `${jb}${ju[0]}`, Mu = {
        item: ZZ(Zu, ju[1])
      }) : Yu && Du ? (gu = `${jb}coreChargeShort`, Mu = {
        item: ZZ(Zu, Du[0])
      }) : Yu && lu > 0 && !qu ? gu = `${jb}coreChargePower` : Yu && (gu = `${jb}coreChargeRunning`), (0, aZ.jsxs)("div", {
        className: JU()("Baf2CoreCharge", {
          Waiting: !Yu && !hu,
          Done: hu
        }),
        children: [(0, aZ.jsxs)("h4", {
          children: [Zu(`${jb}coreChargeTitle`), (0, aZ.jsx)("span", {
            children: Zu(`${jb}coreChargeProgress`, {
              done: sb(fu),
              need: sb(Cu)
            })
          })]
        }), (0, aZ.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, aZ.jsx)("div", {
            style: {
              width: 100 * Math.min(fu, Cu) / Cu + "%"
            }
          })
        }), (0, aZ.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Xu.map((uu => {
            var Eu;
            let [ju, Uu, Xu] = uu;
            const lu = Xu >= .9 * Uu;
            return (0, aZ.jsxs)("li", {
              className: JU()({
                Done: lu,
                Short: Yu && !lu
              }),
              children: [(0, aZ.jsx)(Ub, {
                item: ju
              }), (0, aZ.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, aZ.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, aZ.jsx)(vU.d, {
                    text: null !== (Eu = su[ju]) && void 0 !== Eu ? Eu : ju
                  }), (0, aZ.jsx)("span", {
                    children: Zu(`${jb}coreChargeItem`, {
                      now: String(Xu),
                      need: String(Uu)
                    })
                  })]
                }), (0, aZ.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, aZ.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*Xu/Uu)}%`
                    }
                  })
                })]
              })]
            }, ju)
          })), lu > 0 && (0, aZ.jsxs)("li", {
            className: JU()("Baf2CoreChargePower", {
              Short: Yu && !qu
            }),
            children: [(0, aZ.jsx)(Zb, {}), (0, aZ.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, aZ.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, aZ.jsx)("span", {
                  children: Zu(`${jb}coreChargePowerRow`, {
                    power: yu(lu)
                  })
                })
              })
            })]
          })]
        }), (0, aZ.jsx)("p", {
          className: "Baf2CoreHint",
          children: Zu(gu, Mu)
        }), !hu && (Yu || Nu) && (0, aZ.jsx)("button", {
          type: "button",
          className: JU()("Baf2CoreChargeToggle", {
            Stopped: Nu
          }),
          onClick: () => {
            Uu.send(pu), Ou(!Nu)
          },
          children: Zu(Nu ? `${jb}coreChargeRestart` : `${jb}coreChargeStop`)
        })]
      })
    }

    function lb(uu) {
      let {
        charge: Eu,
        reached: ju,
        itemNames: su
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)();
      return (0, aZ.jsxs)("div", {
        className: JU()("Baf2CoreCharge", {
          Done: ju
        }),
        children: [(0, aZ.jsxs)("h4", {
          children: [Uu(`${jb}coreChargeTitle`), (0, aZ.jsx)("span", {
            children: Uu(`${jb}coreChargeSpecTime`, {
              time: sb(Eu.seconds)
            })
          })]
        }), (0, aZ.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Eu.items.map((uu => {
            var Eu;
            let {
              item: Zu,
              amount: Xu
            } = uu;
            return (0, aZ.jsxs)("li", {
              className: JU()({
                Done: ju
              }),
              children: [(0, aZ.jsx)(Ub, {
                item: Zu
              }), (0, aZ.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, aZ.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, aZ.jsx)(vU.d, {
                    text: null !== (Eu = su[Zu]) && void 0 !== Eu ? Eu : Zu
                  }), (0, aZ.jsx)("span", {
                    children: Uu(`${jb}coreChargeSpecItem`, {
                      need: String(Xu)
                    })
                  })]
                })
              })]
            }, Zu)
          })), Eu.powerPerS > 0 && (0, aZ.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, aZ.jsx)(Zb, {}), (0, aZ.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, aZ.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, aZ.jsx)("span", {
                  children: Uu(`${jb}coreChargePowerRow`, {
                    power: yu(Eu.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const qb = "buildAFactory2Game:";

    function fb(uu) {
      let {
        def: Eu,
        reached: ju,
        banked: su,
        itemNames: Uu
      } = uu;
      const {
        t: Zu
      } = (0, oU.A)();
      return (0, aZ.jsx)("ul", {
        className: "Baf2CoreCost",
        children: Eu.cost.map((uu => {
          let {
            item: Eu,
            amount: Xu
          } = uu;
          const lu = ju ? 0 : su(Eu);
          return (0, aZ.jsx)("li", {
            children: (0, aZ.jsx)(LC, {
              item: Eu,
              itemNames: Uu,
              children: (0, aZ.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: lu > 0 ? Zu(`${qb}coreBankedFor`, {
                  amount: String(lu),
                  total: String(Xu)
                }) : `\xd7${Xu}`
              })
            })
          }, Eu)
        }))
      })
    }

    function Cb(uu, Eu) {
      if (Eu >= Cu()) return uu(`${qb}coreMaxTier`);
      const ju = fu[Eu + 1];
      return ju && !ju.startsWith("upgradeCore") ? uu(`${qb}coreGateQuest`, {
        quest: uu(`${qb}quest_${ju}`)
      }) : uu(`${qb}coreGateClosed`)
    }

    function bb() {
      const {
        t: uu
      } = (0, oU.A)(), Eu = BX(), ju = (0, su.useRef)(null), Uu = (0, su.useRef)(Date.now());
      return yf(!0, ju), (0, aZ.jsx)("div", {
        ref: ju,
        className: "Baf2CoreGrow",
        children: (0, aZ.jsx)(wX.p, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - Uu.current >= 600 && Eu.send(Mu)
          },
          children: uu(`${qb}coreGrow`)
        })
      })
    }

    function cb(uu) {
      let {
        message: Eu,
        itemNames: ju,
        next: su
      } = uu;
      const Uu = BX(),
        {
          t: Zu
        } = (0, oU.A)(),
        Xu = Eu.baf2CoreTier,
        lu = Eu.baf2CoreReady,
        qu = Eu.baf2CoreNeeds.filter((uu => {
          let [, Eu, ju, su] = uu;
          return su > 0 && Eu < ju
        })),
        fu = Eu.baf2CoreNeeds.every((uu => {
          let [, Eu, ju] = uu;
          return Eu >= ju
        })),
        Cu = Eu.baf2CoreKeep;
      return (0, aZ.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, aZ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [lu && (0, aZ.jsx)(bb, {}), (0, aZ.jsx)("h3", {
            children: Zu(`${qb}coreBring`)
          }), (0, aZ.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: Eu.baf2CoreNeeds.map((uu => {
              let [Eu, su, Xu, lu] = uu;
              return (0, aZ.jsxs)("li", {
                className: JU()({
                  Done: su >= Xu
                }),
                children: [(0, aZ.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, aZ.jsx)(mU.d, {
                    itemName: Eu,
                    amount: 0
                  })
                }), (0, aZ.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, aZ.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, aZ.jsx)(vU.d, {
                      text: ju[Eu]
                    }), (0, aZ.jsxs)("span", {
                      children: [su, "/", Xu]
                    })]
                  }), (0, aZ.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, aZ.jsx)("div", {
                      style: {
                        width: 100 * su / Xu + "%"
                      }
                    }), lu > 0 && (0, aZ.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * lu / Xu + "%"
                      }
                    })]
                  })]
                }), lu > 0 && su < Xu && (0, aZ.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    Uu.send(`${Gu} ${Eu}`)
                  },
                  children: Zu(`${qb}coreDeposit`, {
                    amount: String(lu)
                  })
                })]
              }, Eu)
            }))
          }), Eu.baf2CoreCharge && (0, aZ.jsx)(Xb, {
            charge: Eu.baf2CoreCharge,
            hint: Eu.baf2CoreChargeHint,
            itemNames: ju
          }), !lu && qu.length > 1 && (0, aZ.jsx)(wX.p, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              Uu.send(Mu)
            },
            children: Zu(`${qb}coreHandOver`)
          }), !lu && void 0 !== Cu && (0, aZ.jsx)("p", {
            className: "Baf2CoreHint",
            children: Zu(`${qb}coreKeepRest`, {
              item: ZZ(Zu, Cu)
            })
          }), !lu && !fu && 0 === qu.length && void 0 === Cu && (0, aZ.jsx)("p", {
            className: "Baf2CoreHint",
            children: Zu(`${qb}coreNothingHeld`)
          }), (0, aZ.jsx)(Eb, {
            message: Eu,
            itemNames: ju
          })]
        }), (0, aZ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, aZ.jsx)("h3", {
            children: Zu(`${qb}coreRewards`)
          }), (0, aZ.jsx)(HC, {
            def: su,
            tier: Xu + 1,
            itemNames: ju
          })]
        })]
      })
    }

    function Nb(uu) {
      let {
        message: Eu,
        itemNames: ju,
        shown: su
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)(), Zu = Eu.baf2CoreTier, Xu = Du(su), lu = su <= Zu, qu = new Map(Eu.baf2CoreBanked), fu = !gu(Zu, wu(Eu)) && su === Zu;
      return (0, aZ.jsxs)("div", {
        className: JU()("Baf2CoreBody", {
          Locked: !lu
        }),
        children: [(0, aZ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, aZ.jsx)("h3", {
            children: Uu(lu ? `${qb}coreItTook` : `${qb}coreItNeeds`)
          }), 0 === Xu.cost.length && (0, aZ.jsx)("p", {
            className: "Baf2CoreHint",
            children: Uu(`${qb}coreTierStart`)
          }), Xu.cost.length > 0 && (0, aZ.jsx)(fb, {
            def: Xu,
            reached: lu,
            banked: uu => {
              var Eu;
              return function(uu, Eu, ju, su) {
                let Uu = uu;
                for (let Xu = Eu + 2; Xu <= ju; Xu++) {
                  var Zu;
                  const uu = Du(Xu).cost.find((uu => uu.item === su)),
                    Eu = Math.min(Uu, null !== (Zu = null === uu || void 0 === uu ? void 0 : uu.amount) && void 0 !== Zu ? Zu : 0);
                  if (Xu === ju) return Eu;
                  Uu -= Eu
                }
                return 0
              }(null !== (Eu = qu.get(uu)) && void 0 !== Eu ? Eu : 0, Zu, su, uu)
            },
            itemNames: ju
          }), Xu.charge && (0, aZ.jsx)(lb, {
            charge: Xu.charge,
            reached: lu,
            itemNames: ju
          }), fu && (0, aZ.jsxs)(aZ.Fragment, {
            children: [(0, aZ.jsx)("p", {
              className: "Baf2CoreHint",
              children: Cb(Uu, Zu)
            }), (0, aZ.jsx)(Eb, {
              message: Eu,
              itemNames: ju
            })]
          })]
        }), (0, aZ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, aZ.jsx)("h3", {
            children: Uu(lu ? `${qb}coreGave` : `${qb}coreLockedRewards`)
          }), (0, aZ.jsx)(HC, {
            def: Xu,
            tier: su,
            itemNames: ju
          })]
        })]
      })
    }

    function Ob(uu, Eu) {
      const {
        key: ju,
        params: su
      } = Nu(Eu - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return uu(`${qb}${ju}`, su)
    }
    const Yb = "buildAFactory2Game:",
      hb = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      Db = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function gb(uu) {
      let {
        view: Eu,
        close: ju,
        askIslands: Uu
      } = uu;
      const {
        t: Zu
      } = (0, oU.A)(), [Xu, lu] = (0, su.useState)(!1);
      (0, su.useEffect)((() => {
        if (!Xu) return;
        const uu = window.setTimeout((() => {
          lu(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(uu)
        }
      }), [Xu]);
      const {
        message: qu,
        itemNames: fu
      } = Eu, Cu = qu.baf2CoreTier, bu = Du(Cu), cu = gu(Cu, wu(qu)), [Yu, hu] = qu.baf2CoreMachines, [Mu, eu] = qu.baf2CoreBelts, Gu = qu.baf2CoreStorage, pu = qu.baf2CoreReady, [Ju, du] = (0, su.useState)(null), au = (null === Ju || void 0 === Ju ? void 0 : Ju.at) === Cu && Ju.ready === pu ? Ju.tier : cu ? Cu + 1 : Cu;
      let Pu = "coreTierLocked";
      au <= Cu ? Pu = "coreTierReached" : au === Cu + 1 && (Pu = "coreTierNext");
      const ou = Zu(`${Yb}${Du(au).nameKey}`),
        ku = au === Cu + 1 ? cu : null,
        mu = Nu(au, {
          tier: Pu,
          stage: hb[Pu],
          atomic: Db[Pu]
        }),
        vu = Zu(`${Yb}${mu.key}`, {
          ...mu.params,
          name: ou
        }),
        Ku = Nu(Cu, Ou),
        Vu = Zu(`${Yb}${Ku.key}`, {
          ...Ku.params,
          name: Zu(`${Yb}${bu.nameKey}`)
        });
      return (0, aZ.jsx)(pX.c, {
        close: ju,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, aZ.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, aZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, aZ.jsxs)("div", {
              children: [(0, aZ.jsx)("h2", {
                id: "baf2CoreTitle",
                children: Zu(`${Yb}coreTitle`)
              }), void 0 !== qu.baf2CoreIslandName && (0, aZ.jsx)("p", {
                className: "Baf2CoreIsland",
                children: qu.baf2CoreIslandName
              }), (0, aZ.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, aZ.jsx)("span", {
                  children: Vu
                }), (0, aZ.jsx)("span", {
                  className: JU()({
                    Full: Yu >= hu
                  }),
                  children: Zu(`${Yb}coreMachineCount`, {
                    amount: String(Yu),
                    total: String(hu)
                  })
                }), (0, aZ.jsx)("span", {
                  className: JU()({
                    Full: Mu >= eu
                  }),
                  children: Zu(`${Yb}coreBeltCount`, {
                    amount: String(Mu),
                    total: String(eu)
                  })
                }), void 0 !== Gu && (0, aZ.jsx)("span", {
                  className: JU()({
                    Full: Gu[0] >= Gu[1]
                  }),
                  children: Zu(`${Yb}coreStorageCount`, {
                    amount: String(Gu[0]),
                    total: String(Gu[1])
                  })
                })]
              })]
            }), (0, aZ.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [qu.baf2CoreIslands && (0, aZ.jsx)(wX.f, {
                className: "Baf2CoreIslandsButton",
                disabled: Xu,
                onClick: () => {
                  lu(!0), Uu()
                },
                children: Zu(`${Yb}islandsOpenButton`)
              }), (0, aZ.jsx)(wX.l, {
                onClick: ju
              })]
            })]
          }), (0, aZ.jsx)(FC, {
            tier: Cu,
            shown: au,
            Hc: uu => {
              du({
                tier: uu,
                at: Cu,
                ready: pu
              })
            }
          }), (0, aZ.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [vu, au > Cu + 1 && (0, aZ.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: Ob(Zu, au)
            })]
          }), 6 === au && au > Cu && (0, aZ.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Zu(`${Yb}coreStagesNote`)
          }), 11 === au && au > Cu && (0, aZ.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Zu(`${Yb}coreAtomicNote`)
          }), ku && (0, aZ.jsx)(cb, {
            message: qu,
            itemNames: fu,
            next: ku
          }), !ku && (0, aZ.jsx)(Nb, {
            message: qu,
            itemNames: fu,
            shown: au
          })]
        })
      })
    }
    const Mb = {
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
    const eb = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: fZ,
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

    function Gb(uu) {
      return uu.baf2DropCometOreOnly ? "dropCometOre" : uu.baf2DropCometIsotope ? "seed" === uu.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function pb(uu) {
      let {
        message: Eu,
        quests: ju,
        close: Uu,
        leave: Zu
      } = uu;
      const Xu = BX(),
        {
          t: lu
        } = (0, oU.A)(),
        qu = (0, XC.g)(iU, ju.get()),
        fu = function(uu) {
          var Eu;
          if (!Ku(uu.tutorial)) return null;
          const ju = uu.rows.find((uu => uu.current)),
            su = ju ? Mb[ju.key] : void 0;
          return null !== (Eu = null !== su && void 0 !== su ? su : uu.side ? Mb[uu.side.row.key] : void 0) && void 0 !== Eu ? Eu : null
        }(qu),
        Cu = null === qu.tier || cZ(qu.tier),
        bu = Cu ? eb : eb.filter((uu => {
          let {
            item: Eu
          } = uu;
          return Eu !== fZ
        })),
        [cu, Nu] = (0, su.useState)(null),
        Ou = null !== cu && void 0 !== cu ? cu : !Eu.baf2DropFoundSalvage && Cu,
        Yu = Eu.baf2DropRuinDistance,
        hu = Eu.baf2DropComet,
        Du = Eu.baf2DropOldWorks,
        gu = Eu.baf2DropGrove,
        Mu = function(uu) {
          return 2 + Number(void 0 !== uu.baf2DropComet) + Number(!!uu.baf2DropOwedComet || void 0 !== uu.baf2DropOwedWaitMinutes) + Number(void 0 !== uu.baf2DropDigDistance) + Number(void 0 !== uu.baf2DropOldWorks) + Number(void 0 !== uu.baf2DropGrove)
        }(Eu),
        eu = uu => {
          Xu.send(function(uu) {
            return `baf2drop ${uu}`
          }(uu)), Zu()
        };
      let Gu = lu("buildAFactory2Game:dropRuinNone");
      if (null !== Yu) {
        let uu = Eu.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        Eu.baf2DropRuinOldWorks && (uu = "dropRuinOldWorks");
        const ju = void 0 === Eu.baf2DropRuinCluster ? lu("buildAFactory2Game:dropRuinOpen") : lu("buildAFactory2Game:dropRuinCluster", {
          count: String(Eu.baf2DropRuinCluster)
        });
        Gu = `${lu(`buildAFactory2Game:${uu}`,{distance:String(Yu)})} ${ju}`
      }
      let pu = lu("buildAFactory2Game:dropBelowDescription");
      void 0 !== Eu.baf2DropBelowLook && (pu = lu("buildAFactory2Game:dropBelowLook", {
        look: lu(Eu.baf2DropBelowLook)
      }));
      const wu = "buildAFactory2Game:wildsRegion_survivorGrove" === Eu.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        Ju = pZ(lu, 60 * function(uu) {
          const [Eu, ju] = (0, su.useState)((() => Date.now())), [Uu, Zu] = (0, su.useState)(Eu);
          return (0, su.useEffect)((() => {
            const uu = Date.now();
            ju(uu), Zu(uu)
          }), [uu]), (0, su.useEffect)((() => {
            const uu = window.setInterval((() => {
              Zu(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(uu)
            }
          }), []), Math.max(1, uu.baf2DropRenewMinutes - Math.floor((Uu - Eu) / 6e4))
        }(Eu)),
        du = function(uu, Eu, ju) {
          return "ruin" === uu && !ju || "owed" === uu && !Eu.baf2DropOwedComet ? null : uu
        }(fu, Eu, null !== Yu),
        au = function(uu) {
          for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
          return JU()("Baf2DropTile", ...ju, {
            Wanted: du === uu
          })
        };
      return (0, aZ.jsx)(pX.c, {
        close: Uu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, aZ.jsxs)("section", {
          className: JU()("Baf2Panel Baf2DropMap", {
            Many: Mu >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, aZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, aZ.jsxs)("div", {
              children: [(0, aZ.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: lu("buildAFactory2Game:dropMapTitle")
              }), (0, aZ.jsx)("p", {
                children: lu("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, aZ.jsx)(wX.l, {
              onClick: Uu
            })]
          }), (0, aZ.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== hu && (0, aZ.jsxs)(wX.C, {
              className: au("comet", "Baf2DropComet"),
              onClick: () => {
                eu("comet")
              },
              children: [(0, aZ.jsx)("strong", {
                children: lu("buildAFactory2Game:dropComet")
              }), (0, aZ.jsx)("span", {
                children: lu(`buildAFactory2Game:${Gb(Eu)}`, {
                  distance: String(hu)
                })
              })]
            }), Eu.baf2DropOwedComet && (0, aZ.jsxs)(wX.C, {
              className: au("owed", "Baf2DropComet"),
              onClick: () => {
                eu("owed")
              },
              children: [(0, aZ.jsx)("strong", {
                children: lu("buildAFactory2Game:dropOwedComet")
              }), (0, aZ.jsx)("span", {
                children: Eu.baf2DropOwedIsotope ? lu("buildAFactory2Game:dropOwedIsotopeDescription") : lu("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== Eu.baf2DropOwedWaitMinutes && (0, aZ.jsxs)(wX.C, {
              className: au("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, aZ.jsx)("strong", {
                children: lu("buildAFactory2Game:dropOwedComet")
              }), (0, aZ.jsx)("span", {
                children: lu("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(Eu.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, aZ.jsxs)(wX.f, {
              className: au("below"),
              onClick: () => {
                eu("below")
              },
              children: [(0, aZ.jsx)("strong", {
                children: lu("buildAFactory2Game:dropBelow")
              }), (0, aZ.jsx)("span", {
                children: pu
              })]
            }), void 0 !== Eu.baf2DropDigDistance && (0, aZ.jsxs)(wX.x, {
              className: au("dig"),
              onClick: () => {
                eu("dig")
              },
              children: [(0, aZ.jsx)("strong", {
                children: lu("buildAFactory2Game:dropDig")
              }), (0, aZ.jsx)("span", {
                children: lu("buildAFactory2Game:dropDigDescription", {
                  distance: String(Eu.baf2DropDigDistance),
                  y: GZ(Eu.baf2DropDigY)
                })
              })]
            }), void 0 !== gu && (0, aZ.jsxs)(wX.x, {
              className: au("grove", "Baf2DropGrove"),
              onClick: () => {
                eu("grove")
              },
              children: [(0, aZ.jsx)("strong", {
                children: lu("buildAFactory2Game:dropGrove")
              }), (0, aZ.jsx)("span", {
                children: lu(`buildAFactory2Game:${wu}`, {
                  distance: String(gu)
                })
              })]
            }), (0, aZ.jsxs)(wX.p, {
              className: au("ruin"),
              disabled: null === Yu,
              onClick: () => {
                eu("ruin")
              },
              children: [(0, aZ.jsx)("strong", {
                children: lu("buildAFactory2Game:dropRuin")
              }), (0, aZ.jsx)("span", {
                children: Gu
              })]
            }), void 0 !== Du && (0, aZ.jsxs)(wX.R, {
              className: au("works"),
              onClick: () => {
                eu("works")
              },
              children: [(0, aZ.jsx)("strong", {
                children: lu("buildAFactory2Game:dropOldWorks")
              }), (0, aZ.jsx)("span", {
                children: lu("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(Du)
                })
              })]
            })]
          }), (0, aZ.jsx)("p", {
            className: "Baf2DropRenew",
            children: lu("buildAFactory2Game:dropRenew", {
              time: Ju
            })
          }), (0, aZ.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: Ou,
            onToggle: uu => {
              uu.currentTarget.open !== Ou && Nu(uu.currentTarget.open)
            },
            children: [(0, aZ.jsx)("summary", {
              children: lu("buildAFactory2Game:dropSalvageWhat")
            }), (0, aZ.jsx)("p", {
              children: lu("buildAFactory2Game:dropSalvageIntro")
            }), (0, aZ.jsx)("ul", {
              children: bu.map((uu => {
                let {
                  item: Eu,
                  nameKey: ju,
                  useKey: su,
                  params: Uu
                } = uu;
                return (0, aZ.jsxs)("li", {
                  children: [(0, aZ.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, aZ.jsx)(mU.d, {
                      itemName: Eu,
                      amount: 0
                    })
                  }), (0, aZ.jsxs)("span", {
                    children: [(0, aZ.jsx)("strong", {
                      children: lu(ju)
                    }), ": ", lu(su, Uu)]
                  })]
                }, Eu)
              }))
            })]
          })]
        })
      })
    }
    const wb = "buildAFactory2Game:";

    function Jb(uu, Eu) {
      return uu.sendIslandEdit(`baf2coopleave ${Eu.baf2IslandId}`)
    }

    function db(uu) {
      let {
        card: Eu,
        canRename: ju,
        done: Uu,
        t: Zu
      } = uu;
      const Xu = BX(),
        [lu, qu] = (0, su.useState)(Eu.baf2IslandName),
        fu = wf(lu),
        Cu = "" === fu || Jf(fu),
        bu = () => {
          !Cu && ju && (fu !== Eu.baf2IslandName ? Uu(Xu.sendIslandEdit(`baf2islandrename ${Eu.baf2IslandId} ${fu}`)) : Uu(null))
        },
        cu = () => {
          Uu(null)
        };
      return (0, aZ.jsxs)("div", {
        className: "Baf2IslandForm",
        ...Af(cu),
        children: [(0, aZ.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [Zu(`${wb}islandsRenameLabel`), (0, aZ.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: lu,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: nf,
            onChange: uu => {
              qu(uu.target.value)
            },
            ...Hf(bu, cu)
          })]
        }), "" === fu && (0, aZ.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Zu(`${wb}islandsRenameEmpty`)
        }), Jf(fu) && (0, aZ.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Zu(`${wb}islandsNameReserved`)
        }), (0, aZ.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, aZ.jsx)(wX.x, {
            disabled: Cu || !ju,
            onClick: bu,
            children: Zu(`${wb}islandsRenameSave`)
          }), (0, aZ.jsx)(wX.f, {
            onClick: cu,
            children: Zu(`${wb}islandsCancel`)
          })]
        })]
      })
    }

    function ab(uu) {
      let {
        card: Eu,
        canDelete: ju,
        done: Uu,
        t: Zu
      } = uu;
      const Xu = BX(),
        [lu, qu] = (0, su.useState)(""),
        fu = function(uu, Eu) {
          return wf(uu).toLowerCase() === wf(Eu).toLowerCase()
        }(lu, Eu.baf2IslandName),
        Cu = () => {
          fu && ju && Uu(Xu.sendIslandEdit(`baf2islanddelete ${Eu.baf2IslandId}`))
        },
        bu = () => {
          Uu(null)
        },
        cu = Qf("name"),
        [Nu, Ou = ""] = Zu(`${wb}islandsDeleteConfirm`, {
          name: cu
        }).split(cu);
      return (0, aZ.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...Af(bu),
        children: [(0, aZ.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, aZ.jsxs)("span", {
            children: [Nu, (0, aZ.jsx)("strong", {
              children: Eu.baf2IslandName
            }), Ou]
          }), (0, aZ.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: lu,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: nf,
            onChange: uu => {
              qu(uu.target.value)
            },
            ...Hf(Cu, bu)
          })]
        }), Lf(Eu) && (0, aZ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Zu(`${wb}islandsDeleteLeftBack`)
        }), (0, aZ.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, aZ.jsx)(wX.R, {
            disabled: !fu || !ju,
            onClick: Cu,
            children: Zu(`${wb}islandsDeleteForGood`)
          }), (0, aZ.jsx)(wX.f, {
            onClick: bu,
            children: Zu(`${wb}islandsCancel`)
          })]
        })]
      })
    }

    function Pb(uu) {
      let {
        members: Eu,
        t: ju
      } = uu;
      const su = Eu.length;
      return (0, aZ.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, aZ.jsxs)("span", {
          children: [1 === su ? ju(`${wb}islandsPlayersOne`) : ju(`${wb}islandsPlayers`, {
            count: String(su)
          }), " "]
        }), Eu.map(((uu, Eu) => (0, aZ.jsxs)("span", {
          className: JU()("Baf2IslandMember", {
            Here: uu.baf2MemberHere
          }),
          title: uu.baf2MemberHere ? ju(`${wb}islandsPlayerHere`) : void 0,
          children: [uu.baf2MemberName, Eu < su - 1 ? ", " : ""]
        }, uu.baf2MemberKey)))]
      })
    }

    function ob(uu) {
      let {
        card: Eu,
        answered: ju,
        nowMs: Uu,
        t: Zu
      } = uu;
      const Xu = BX(),
        [lu, qu] = (0, su.useState)(new Map),
        fu = Lf(Eu);
      if (!fu) return null;
      return (0, aZ.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, aZ.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Zu(`${wb}islandsLeftTitle`)
        }), (0, aZ.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: fu.left.map((uu => {
            const su = uu.baf2LeftKey,
              Cu = xf(lu.get(su), ju, Uu),
              bu = function(uu) {
                return 1 === uu ? [`${Mf}islandsLeftItemsOne`] : [`${Mf}islandsLeftItems`, {
                  count: String(uu)
                }]
              }(uu.baf2LeftItems);
            return (0, aZ.jsx)("li", {
              className: JU()("Baf2IslandPerson", {
                Pending: Cu
              }),
              children: (0, aZ.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, aZ.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: uu.baf2LeftName
                }), (0, aZ.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Zu(bu[0], bu[1])
                }), fu.claim && (0, aZ.jsx)(wX.x, {
                  className: "Baf2IslandPersonButton",
                  disabled: Cu,
                  onClick: () => {
                    (uu => {
                      const ju = Xu.sendIslandEdit(`baf2coopclaim ${Eu.baf2IslandId} ${uu}`);
                      qu((Eu => new Map(Eu).set(uu, {
                        atMs: Date.now(),
                        answer: ju
                      })))
                    })(su)
                  },
                  children: Zu(`${wb}islandsClaim`)
                })]
              })
            }, su)
          }))
        }), fu.goThere && (0, aZ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Zu(`${wb}islandsClaimGoThere`)
        })]
      })
    }

    function kb(uu) {
      let {
        card: Eu,
        view: ju,
        blocked: Uu,
        maxIslands: Zu,
        answered: Xu,
        nowMs: lu,
        done: qu,
        openSocial: fu,
        t: Cu
      } = uu;
      const bu = BX(),
        [cu, Nu] = (0, su.useState)(new Map),
        [Ou, Yu] = (0, su.useState)(new Map),
        [hu, Du] = (0, su.useState)(null),
        gu = (0, su.useRef)(null);
      uC(gu);
      const Mu = Eu.baf2IslandId,
        eu = Eu.baf2IslandCoop,
        Gu = null !== eu && void 0 !== eu && eu.baf2CoopMembers.some((uu => uu.baf2MemberKey === hu)) ? hu : null,
        pu = function(uu, Eu) {
          const ju = uu.baf2IslandCoop;
          return ju && tf(ju) || null !== Eu ? void 0 : uu.baf2IslandInvitable
        }(Eu, Uu),
        wu = function(uu, Eu) {
          const ju = uu.baf2IslandCoop;
          return ju && tf(ju) ? {
            key: `${Mf}islandsCoopFull`,
            params: {
              max: String(ju.baf2CoopMax)
            }
          } : void 0 !== uu.baf2IslandInvitable && null === Eu || ju && !ju.baf2CoopManageHere ? null : "degraded" === Eu || "stuck" === Eu ? {
            key: `${Mf}islandsInviteNotLoaded`
          } : null === Eu || function(uu) {
            return "notHome" === uu || "wilds" === uu || "visiting" === uu
          }(Eu) || of(Eu) ? {
            key: `${Mf}islandsInviteGoThere`
          } : {
            key: `${Mf}islandsInviteBusy`
          }
        }(Eu, Uu),
        Ju = () => {
          var uu;
          Du(null), null === (uu = gu.current) || void 0 === uu || uu.focus()
        };
      return (0, aZ.jsxs)("div", {
        ref: gu,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...Af(null === Gu ? qu : Ju),
        children: [eu && (0, aZ.jsxs)(aZ.Fragment, {
          children: [(0, aZ.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: Cu(`${wb}islandsPlayersTitle`, {
              count: String(eu.baf2CoopMembers.length),
              max: String(eu.baf2CoopMax)
            })
          }), (0, aZ.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: eu.baf2CoopMembers.map(((uu, Eu) => {
              const su = uu.baf2MemberKey,
                Uu = xf(cu.get(su), Xu, lu);
              return (0, aZ.jsxs)("li", {
                className: JU()("Baf2IslandPerson", {
                  Pending: Uu
                }),
                children: [(0, aZ.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, aZ.jsx)("span", {
                    className: JU()("Baf2IslandPersonName", {
                      Here: uu.baf2MemberHere
                    }),
                    children: uu.baf2MemberName
                  }), uu.baf2MemberHere && (0, aZ.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: Cu(`${wb}islandsPlayerHere`)
                  }), 0 === Eu && (0, aZ.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: Cu(`${wb}islandsPlayerOwner`)
                  }), ju.remove && Eu > 0 && !Uu && Gu !== su && (0, aZ.jsx)(wX.U, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var uu;
                      Du(su), null === (uu = gu.current) || void 0 === uu || uu.focus()
                    },
                    children: Cu(`${wb}islandsRemove`)
                  })]
                }), Gu === su && (0, aZ.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, aZ.jsx)("p", {
                    children: Wf(Cu, `${wb}islandsRemoveConfirm`, {
                      player: uu.baf2MemberName
                    })
                  }), (0, aZ.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, aZ.jsx)(wX.R, {
                      onClick: () => {
                        (uu => {
                          const Eu = bu.sendIslandEdit(`baf2coopremove ${Mu} ${uu.baf2MemberKey}`);
                          Nu((ju => new Map(ju).set(uu.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: Eu
                          }))), Ju()
                        })(uu)
                      },
                      children: Cu(`${wb}islandsRemoveYes`)
                    }), (0, aZ.jsx)(wX.f, {
                      onClick: Ju,
                      children: Cu(`${wb}islandsCancel`)
                    })]
                  })]
                })]
              }, su)
            }))
          })]
        }), (void 0 !== pu || null !== wu) && (0, aZ.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Cu(`${wb}islandsInviteTitle`)
        }), !eu && (void 0 !== pu || null !== wu) && (0, aZ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Cu(`${wb}islandsInviteShareNote`)
        }), 0 === (null === pu || void 0 === pu ? void 0 : pu.length) && (0, aZ.jsx)(mb, {
          openSocial: fu,
          t: Cu
        }), void 0 !== pu && pu.length > 0 && (0, aZ.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: pu.map((uu => {
            const Eu = !0 === uu.baf2InvitableSent || xf(Ou.get(uu.baf2InvitableId), Xu, lu);
            return (0, aZ.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, aZ.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, aZ.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: uu.baf2InvitableName
                }), uu.baf2InvitableFull && !Eu && (0, aZ.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Cu(`${wb}islandsInviteTheirFull`, {
                    max: String(Zu)
                  })
                }), (Eu || !uu.baf2InvitableFull) && (0, aZ.jsx)(wX.x, {
                  className: "Baf2IslandPersonButton",
                  disabled: Eu,
                  onClick: () => {
                    (uu => {
                      const Eu = bu.sendIslandEdit(`baf2coopinvite ${Mu} ${uu}`);
                      Yu((ju => new Map(ju).set(uu, {
                        atMs: Date.now(),
                        answer: Eu
                      })))
                    })(uu.baf2InvitableId)
                  },
                  children: Cu(Eu ? `${wb}islandsInvited` : `${wb}islandsInvite`)
                })]
              })
            }, uu.baf2InvitableId)
          }))
        }), wu && (0, aZ.jsx)(sC, {
          note: wu,
          t: Cu
        }), (0, aZ.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, aZ.jsx)(wX.f, {
            onClick: qu,
            children: Cu(`${wb}islandsDone`)
          })
        })]
      })
    }

    function mb(uu) {
      let {
        openSocial: Eu,
        t: ju
      } = uu;
      return (0, aZ.jsxs)(aZ.Fragment, {
        children: [(0, aZ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ju(Eu ? `${wb}islandsInviteNobody` : `${wb}islandsInviteNobodyGuest`)
        }), Eu && (0, aZ.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, aZ.jsx)(wX.f, {
            onClick: Eu,
            children: ju("socialBar:social")
          })
        })]
      })
    }

    function vb(uu) {
      let {
        className: Eu,
        text: ju,
        ConfirmButton: Uu,
        confirmLabel: Zu,
        canConfirm: Xu,
        send: lu,
        done: qu,
        t: fu
      } = uu;
      const Cu = (0, su.useRef)(null);
      uC(Cu);
      const bu = () => {
        qu(null)
      };
      return (0, aZ.jsxs)("div", {
        ref: Cu,
        tabIndex: -1,
        className: JU()("Baf2IslandForm", Eu),
        ...Af(bu),
        children: [(0, aZ.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: ju
        }), (0, aZ.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, aZ.jsx)(Uu, {
            disabled: !Xu,
            onClick: () => {
              Xu && qu(lu())
            },
            children: Zu
          }), (0, aZ.jsx)(wX.f, {
            onClick: bu,
            children: fu(`${wb}islandsCancel`)
          })]
        })]
      })
    }

    function Kb(uu) {
      return "hidden" !== uu
    }

    function Vb(uu) {
      var Eu, ju;
      let {
        card: Uu,
        keepOwn: Zu,
        blocked: Xu,
        maxIslands: lu,
        serverNowMs: qu,
        nowMs: fu,
        actions: Cu,
        full: bu,
        waits: cu,
        answered: Nu,
        mode: Ou,
        setMode: Yu,
        pending: hu,
        onSent: Du,
        switchTo: gu,
        leave: Mu,
        coopOn: eu,
        openSocial: Gu,
        t: pu
      } = uu;
      const wu = BX(),
        Ju = Uu.baf2IslandActive,
        du = Ju ? null : function(uu, Eu) {
          if (uu <= 0) return null;
          const ju = Eu - uu;
          if (ju < DZ) return [`${Mf}islandsPlayedJustNow`];
          if (ju < ef) return [`${Mf}islandsPlayedMinutes`, {
            minutes: String(Math.floor(ju / DZ))
          }];
          if (ju < Gf) return [`${Mf}islandsPlayedHours`, {
            hours: String(Math.floor(ju / ef))
          }];
          const su = Math.floor(ju / Gf);
          return 1 === su ? [`${Mf}islandsPlayedDay`] : [`${Mf}islandsPlayedDays`, {
            days: String(su)
          }]
        }(Uu.baf2IslandLastPlayedMs, qu),
        au = void 0 === (Pu = Uu.baf2IslandItems) ? null : 0 === Pu ? [`${Mf}islandsItemsNone`] : 1 === Pu ? [`${Mf}islandsItemsOne`] : [`${Mf}islandsItems`, {
          count: String(Pu)
        }];
      var Pu;
      const ou = function(uu) {
          return uu ? 1 === uu ? [`${Mf}islandsWaitingOne`] : [`${Mf}islandsWaiting`, {
            count: String(uu)
          }] : null
        }(Uu.baf2IslandWaiting),
        ku = Uu.baf2IslandUnreadable,
        mu = Uu.baf2IslandCoop,
        vu = Bf(Uu, Cu, Zu, bu, eu, Xu),
        Ku = (0, su.useRef)(null);
      yf(null !== Ou, Ku);
      const Vu = () => {
          var uu;
          Yu(null), null === (uu = Ku.current) || void 0 === uu || uu.focus()
        },
        ru = (uu, Eu) => {
          Vu(), null !== uu && Du(uu, Eu)
        },
        Qu = (uu, Eu) => pu(`${wb}${uu}`, {
          time: pZ(pu, Eu)
        });
      return (0, aZ.jsxs)("li", {
        ref: Ku,
        tabIndex: -1,
        className: JU()("Baf2IslandCard", {
          Active: Ju,
          Pending: hu,
          Shared: void 0 !== mu
        }),
        children: [(0, aZ.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, aZ.jsx)("strong", {
            className: "Baf2IslandName",
            children: Uu.baf2IslandName
          }), Ju && (0, aZ.jsx)("span", {
            className: "Baf2IslandBadge",
            children: pu(`${wb}islandsOnThis`)
          }), mu && (0, aZ.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: pu(`${wb}islandsShared`)
          })]
        }), "member" === (null === mu || void 0 === mu ? void 0 : mu.baf2CoopRole) && (0, aZ.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Wf(pu, `${wb}islandsSharedBy`, {
            owner: mu.baf2CoopOwner
          })
        }), void 0 !== ku && (0, aZ.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: pu("newer" === ku ? `${wb}islandsUnreadable` : `${wb}islandsDamaged`)
        }), "corrupt" === ku && bu && (0, aZ.jsx)("p", {
          className: "Baf2IslandStats",
          children: pu(`${wb}islandsDamagedFull`)
        }), void 0 === ku && (0, aZ.jsxs)(aZ.Fragment, {
          children: [(0, aZ.jsx)(jC, {
            tier: Uu.baf2IslandTier,
            t: pu
          }), (0, aZ.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, aZ.jsx)("span", {
              children: 1 === Uu.baf2IslandQuestsDone ? pu(`${wb}islandsQuestsDoneOne`) : pu(`${wb}islandsQuestsDone`, {
                count: String(Uu.baf2IslandQuestsDone)
              })
            }), (0, aZ.jsx)("span", {
              children: 1 === Uu.baf2IslandMachines ? pu(`${wb}islandsMachinesOne`) : pu(`${wb}islandsMachines`, {
                count: String(Uu.baf2IslandMachines)
              })
            }), au && (0, aZ.jsx)("span", {
              children: pu(au[0], au[1])
            }), ou && (0, aZ.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: pu(ou[0], ou[1])
            }), du && (0, aZ.jsx)("span", {
              children: pu(du[0], du[1])
            })]
          })]
        }), mu && void 0 === mu.baf2CoopState && "people" !== Ou && (0, aZ.jsx)(Pb, {
          members: mu.baf2CoopMembers,
          t: pu
        }), null === Ou && (0, aZ.jsx)(ob, {
          card: Uu,
          answered: Nu,
          nowMs: fu,
          t: pu
        }), vu.note && (0, aZ.jsx)(sC, {
          note: vu.note,
          className: JU()({
            Unreachable: void 0 !== (null === mu || void 0 === mu ? void 0 : mu.baf2CoopState)
          }),
          t: pu
        }), "rename" === Ou && (0, aZ.jsx)(db, {
          card: Uu,
          canRename: "enabled" === vu.rename,
          done: ru,
          t: pu
        }), "delete" === Ou && (0, aZ.jsx)(ab, {
          card: Uu,
          canDelete: "enabled" === vu.delete,
          done: uu => {
            ru(uu, mu ? "delete" : void 0)
          },
          t: pu
        }), "people" === Ou && (0, aZ.jsx)(kb, {
          card: Uu,
          view: vu,
          blocked: Xu,
          maxIslands: lu,
          answered: Nu,
          nowMs: fu,
          done: Vu,
          openSocial: Gu,
          t: pu
        }), "leave" === Ou && (0, aZ.jsx)(vb, {
          className: "Leave",
          text: Wf(pu, `${wb}islandsLeaveConfirm`, {
            island: Uu.baf2IslandName,
            owner: null !== (Eu = null === (ju = Uu.baf2IslandCoop) || void 0 === ju ? void 0 : ju.baf2CoopOwner) && void 0 !== Eu ? Eu : ""
          }),
          ConfirmButton: wX.R,
          confirmLabel: pu(`${wb}islandsLeaveYes`),
          canConfirm: "enabled" === vu.leave,
          send: () => Jb(wu, Uu),
          done: uu => {
            ru(uu, "leave"), null !== uu && Ju && Mu()
          },
          t: pu
        }), "unshare" === Ou && (0, aZ.jsx)(vb, {
          className: "Unshare",
          text: Wf(pu, `${wb}islandsStopSharingConfirm`, {
            island: Uu.baf2IslandName
          }),
          ConfirmButton: wX.x,
          confirmLabel: pu(`${wb}islandsStopSharing`),
          canConfirm: "enabled" === vu.unshare,
          send: () => wu.sendIslandEdit(`baf2coopunshare ${Uu.baf2IslandId}`),
          done: uu => {
            ru(uu), null !== uu && Mu()
          },
          t: pu
        }), null === Ou && !hu && (0, aZ.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": Uu.baf2IslandName,
          children: [Kb(vu.switch) && (0, aZ.jsx)(wX.x, {
            disabled: "enabled" !== vu.switch,
            onClick: gu,
            children: "tryAgain" === vu.switchLabel ? pu(`${wb}islandsTryAgain`) : cu.switch > 0 ? Qu("islandsSwitchIn", cu.switch) : pu(`${wb}islandsSwitch`)
          }), Kb(vu.rename) && (0, aZ.jsx)(wX.f, {
            disabled: "enabled" !== vu.rename,
            onClick: () => {
              Yu("rename")
            },
            children: pu(`${wb}islandsRename`)
          }), Kb(vu.people) && (0, aZ.jsx)(wX.f, {
            disabled: "enabled" !== vu.people,
            onClick: () => {
              Yu("people")
            },
            children: pu("players" === vu.peopleLabel ? `${wb}islandsPlayersButton` : `${wb}islandsInviteButton`)
          }), Kb(vu.unshare) && (0, aZ.jsx)(wX.f, {
            disabled: "enabled" !== vu.unshare,
            onClick: () => {
              Yu("unshare")
            },
            children: pu(`${wb}islandsStopSharing`)
          }), Kb(vu.dismiss) && (0, aZ.jsx)(wX.f, {
            disabled: "enabled" !== vu.dismiss,
            onClick: () => {
              Du(Jb(wu, Uu), "dismiss"), Ju && Mu()
            },
            children: pu(`${wb}islandsDismiss`)
          }), Kb(vu.leave) && (0, aZ.jsx)(wX.U, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== vu.leave,
            onClick: () => {
              Yu("leave")
            },
            children: Ju && cu.switch > 0 ? Qu("islandsLeaveIn", cu.switch) : pu(`${wb}islandsLeave`)
          }), Kb(vu.delete) && (0, aZ.jsx)(wX.U, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== vu.delete,
            onClick: () => {
              Yu("delete")
            },
            children: cu.change > 0 && vu.deleteWaits ? Qu("islandsDeleteIn", cu.change) : pu(`${wb}islandsDelete`)
          })]
        })]
      })
    }
    const rb = "buildAFactory2Game:";

    function Qb(uu) {
      let {
        invite: Eu,
        actions: ju,
        full: Uu,
        maxIslands: Zu,
        waitSeconds: Xu,
        focus: lu,
        focused: qu,
        join: fu,
        decline: Cu,
        t: bu
      } = uu;
      const [cu, Nu] = (0, su.useState)(!1), Ou = (0, su.useRef)(null);
      yf(cu, Ou), (0, su.useEffect)((() => {
        var uu;
        lu && (Nu(!0), null === (uu = Ou.current) || void 0 === uu || uu.focus(), qu())
      }), [lu, qu]);
      const Yu = function(uu, Eu, ju, su, Uu) {
          return ju ? {
            join: !1,
            note: {
              key: `${Mf}islandsJoinTooMany`,
              params: {
                max: String(su)
              }
            }
          } : uu.baf2InvitePlayers >= Uu ? {
            join: !1,
            note: {
              key: `${Mf}islandsJoinFull`
            }
          } : {
            join: Eu.switch,
            note: null
          }
        }(Eu, ju, Uu, Zu, 10),
        hu = Eu.baf2InviteIsland,
        Du = Eu.baf2InvitePlayers,
        gu = () => {
          var uu;
          Nu(!1), null === (uu = Ou.current) || void 0 === uu || uu.focus()
        },
        Mu = Xu > 0 && null === Yu.note ? bu(`${rb}islandsJoinIn`, {
          time: pZ(bu, Xu)
        }) : bu(`${rb}islandsJoin`);
      return (0, aZ.jsxs)("li", {
        ref: Ou,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...cu ? Af(gu) : {},
        children: [(0, aZ.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, aZ.jsx)("strong", {
            className: "Baf2IslandName",
            children: hu
          })
        }), (0, aZ.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Wf(bu, `${rb}islandsInvitedBy`, {
            owner: Eu.baf2InviteOwner
          })
        }), (0, aZ.jsx)(jC, {
          tier: Eu.baf2InviteTier,
          t: bu
        }), (0, aZ.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, aZ.jsx)("span", {
            children: 1 === Du ? bu(`${rb}islandsPlayersCountOne`) : bu(`${rb}islandsPlayersCount`, {
              count: String(Du)
            })
          })
        }), Yu.note && (0, aZ.jsx)(sC, {
          note: Yu.note,
          t: bu
        }), cu && (0, aZ.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Wf(bu, `${rb}islandsJoinConfirm`, {
            island: hu
          })
        }), !cu && (0, aZ.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": hu,
          children: [(0, aZ.jsx)(wX.x, {
            disabled: !Yu.join,
            onClick: () => {
              var uu;
              Nu(!0), null === (uu = Ou.current) || void 0 === uu || uu.focus()
            },
            children: Mu
          }), (0, aZ.jsx)(wX.f, {
            onClick: Cu,
            children: bu(`${rb}islandsDecline`)
          })]
        }), cu && (0, aZ.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, aZ.jsx)(wX.x, {
            disabled: !Yu.join,
            onClick: fu,
            children: bu(`${rb}islandsJoinYes`)
          }), (0, aZ.jsx)(wX.f, {
            onClick: gu,
            children: bu(`${rb}islandsCancel`)
          })]
        })]
      })
    }

    function ib(uu) {
      let {
        invites: Eu,
        actions: ju,
        full: su,
        maxIslands: Uu,
        waitSeconds: Zu,
        focus: Xu,
        focused: lu,
        leave: qu,
        declined: fu,
        t: Cu
      } = uu;
      const bu = BX();
      return (0, aZ.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, aZ.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: Cu(`${rb}islandsInvitesTitle`)
        }), (0, aZ.jsx)("ul", {
          className: "Baf2IslandCards",
          children: Eu.map((uu => {
            const Eu = uu.baf2InviteId;
            return (0, aZ.jsx)(Qb, {
              invite: uu,
              actions: ju,
              full: su,
              maxIslands: Uu,
              waitSeconds: Zu,
              focus: Xu === Eu,
              focused: lu,
              join: () => {
                bu.send(`baf2coopaccept ${Eu}`), qu()
              },
              decline: () => {
                bu.send(`baf2coopdecline ${Eu}`), fu(Eu)
              },
              t: Cu
            }, Eu)
          }))
        })]
      })
    }
    const Wb = "buildAFactory2Game:";

    function Sb(uu) {
      let {
        cards: Eu,
        activeName: ju,
        canStart: Uu,
        waitSeconds: Zu,
        leave: Xu,
        t: lu
      } = uu;
      const qu = BX(),
        [fu, Cu] = (0, su.useState)(!1),
        [bu, cu] = (0, su.useState)(""),
        Nu = (0, su.useRef)(null);
      yf(fu, Nu), (0, su.useEffect)((() => {
        var uu;
        fu && (null === (uu = Nu.current) || void 0 === uu || uu.focus())
      }), [fu]);
      const Ou = df(Eu),
        Yu = wf(bu),
        hu = Jf(Yu),
        Du = () => {
          Uu && !hu && (qu.send("" === Yu || Yu === Ou ? Au : `${Au} ${Yu}`), Xu())
        },
        gu = () => {
          var uu;
          Cu(!1), null === (uu = Nu.current) || void 0 === uu || uu.focus()
        };
      return (0, aZ.jsxs)("li", {
        ref: Nu,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...fu ? Af(gu) : {},
        children: [(0, aZ.jsx)("strong", {
          className: "Baf2IslandName",
          children: lu(`${Wb}islandsNewTitle`)
        }), !fu && (0, aZ.jsx)("p", {
          className: "Baf2IslandStats",
          children: lu(`${Wb}islandsNewNote`)
        }), fu && (0, aZ.jsxs)(aZ.Fragment, {
          children: [(0, aZ.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Wf(lu, `${Wb}islandsNewConfirm`, {
              name: ju
            })
          }), (0, aZ.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [lu(`${Wb}islandsNewNameLabel`), (0, aZ.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: bu,
              placeholder: Ou,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: nf,
              onChange: uu => {
                cu(uu.target.value)
              },
              ...Hf(Du, gu)
            })]
          }), hu && (0, aZ.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: lu(`${Wb}islandsNameReserved`)
          })]
        }), (0, aZ.jsxs)("div", {
          className: JU()("Baf2IslandButtons", {
            Stacked: fu
          }),
          children: [(0, aZ.jsx)(wX.x, {
            disabled: !Uu || fu && hu,
            onClick: () => {
              if (!fu) return cu(Ou), void Cu(!0);
              Du()
            },
            children: Zu > 0 ? lu(`${Wb}islandsNewIn`, {
              time: pZ(lu, Zu)
            }) : lu(fu ? `${Wb}islandsNewConfirmButton` : `${Wb}islandsNew`)
          }), fu && (0, aZ.jsx)(wX.f, {
            onClick: gu,
            children: lu(`${Wb}islandsCancel`)
          })]
        })]
      })
    }

    function Ib(uu) {
      var Eu, ju;
      let {
        message: Uu,
        arrivedAtMs: Zu,
        close: Xu,
        leave: lu,
        openSocial: qu
      } = uu;
      const fu = BX(),
        {
          t: Cu
        } = (0, oU.A)(),
        bu = EC(1e3),
        [cu, Nu] = (0, su.useState)(null),
        [Ou, Yu] = (0, su.useState)(new Map),
        [hu, Du] = (0, su.useState)(new Set),
        gu = Uu.baf2IslandCards,
        Mu = function(uu, Eu, ju, su) {
          return (null !== uu && void 0 !== uu ? uu : []).filter((uu => Eu + uu.baf2InviteLeftMs > ju && !su.has(uu.baf2InviteId)))
        }(Uu.baf2IslandsInvites, Zu, bu, hu),
        eu = Mu.map((uu => uu.baf2InviteId)).join(" "),
        Gu = (0, su.useRef)(null),
        pu = zf(Gu);
      Rf(), (0, su.useEffect)((() => {
        var uu, Eu;
        null !== (uu = Gu.current) && void 0 !== uu && uu.contains(document.activeElement) || (null === (Eu = Gu.current) || void 0 === Eu || Eu.focus())
      }), [Uu, eu]), (0, su.useEffect)((() => {
        Yu((uu => function(uu, Eu, ju, su) {
          const Uu = new Map;
          for (const Zu of Eu) {
            const Eu = uu.get(Zu.baf2IslandId);
            Eu && (void 0 !== Eu.untilGone || su < Eu.answer) && Kf(Eu, Zu, ju) && Uu.set(Zu.baf2IslandId, Eu)
          }
          return Uu.size === uu.size ? uu : Uu
        }(uu, Uu.baf2IslandCards, Date.now(), Uu.baf2IslandsAnswered)))
      }), [Uu]);
      const wu = pf(Zu, Uu.baf2IslandsWaitMs, bu),
        Ju = Uu.baf2IslandsBlocked,
        du = kf(Ju, wu),
        au = function(uu, Eu) {
          const ju = kf(uu, 0);
          return {
            switch: ju.switch ? Eu : 0,
            change: ju.change ? Eu : 0
          }
        }(Ju, wu),
        Pu = gu.length >= Uu.baf2IslandsMax,
        ou = gu.length > 0,
        ku = function(uu, Eu, ju) {
          return uu + Math.max(0, ju - Eu)
        }(Uu.baf2IslandsNowMs, Zu, bu),
        mu = null !== (Eu = null === (ju = gu.find((uu => uu.baf2IslandActive))) || void 0 === ju ? void 0 : ju.baf2IslandName) && void 0 !== Eu ? Eu : "",
        vu = function(uu) {
          const Eu = uu.filter(Ff).length;
          return Eu <= 1 && Eu < uu.length
        }(gu),
        Ku = !0 === Uu.baf2IslandsCoop,
        Vu = function(uu, Eu) {
          const ju = uu.find((uu => uu.baf2IslandActive)),
            su = null === ju || void 0 === ju ? void 0 : ju.baf2IslandCoop;
          return ju && "member" === (null === su || void 0 === su ? void 0 : su.baf2CoopRole) ? {
            key: `${Mf}islandsKeepOwnMember`,
            names: {
              owner: su.baf2CoopOwner,
              island: ju.baf2IslandName
            }
          } : {
            key: Eu ? `${Mf}islandsKeepOwn` : `${Mf}islandsKeepOwnSolo`
          }
        }(gu, Ku),
        [ru, Qu] = (0, su.useState)(null);
      (0, su.useEffect)((() => {
        void 0 !== Uu.baf2IslandsFocusInvite && Qu(Uu.baf2IslandsFocusInvite)
      }), [Uu]);
      const iu = (0, su.useCallback)((() => {
          Qu(null)
        }), []),
        Wu = cu ? gu.find((uu => uu.baf2IslandId === cu.id)) : void 0,
        Su = cu && Wu && "hidden" !== Bf(Wu, du, vu, Pu, Ku, Ju)[cu.mode] ? cu : null;
      return (0, aZ.jsx)(pX.c, {
        close: Xu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, aZ.jsxs)("section", {
          ref: Gu,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: pu ? {
            marginTop: `${pu.marginTop}px`,
            maxHeight: `${pu.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, aZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, aZ.jsxs)("div", {
              children: [(0, aZ.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: Cu(`${Wb}islandsTitle`)
              }), ou && (0, aZ.jsx)("p", {
                children: Cu(`${Wb}islandsSubtitle`, {
                  count: String(gu.length),
                  max: String(Uu.baf2IslandsMax)
                })
              })]
            }), (0, aZ.jsx)(wX.l, {
              ariaLabel: Cu(`${Wb}islandsClose`),
              onClick: Xu
            })]
          }), (0, aZ.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== Ju && (0, aZ.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Wf(Cu, af(Ju, Pf(gu)), {
                island: mu
              })
            }), ou && Mu.length > 0 && (0, aZ.jsx)(ib, {
              invites: Mu,
              actions: du,
              full: Pu,
              maxIslands: Uu.baf2IslandsMax,
              waitSeconds: au.switch,
              focus: ru,
              focused: iu,
              leave: lu,
              declined: uu => {
                Du((Eu => new Set(Eu).add(uu)))
              },
              t: Cu
            }), ou && (0, aZ.jsxs)(aZ.Fragment, {
              children: [Pu && (0, aZ.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: Cu(`${Wb}islandsFull`, {
                  max: String(Uu.baf2IslandsMax)
                })
              }), (0, aZ.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Wf(Cu, Vu.key, Vu.names)
              }), (0, aZ.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [gu.map((uu => {
                  const Eu = uu.baf2IslandId;
                  return (0, aZ.jsx)(Vb, {
                    card: uu,
                    keepOwn: vu,
                    coopOn: Ku,
                    openSocial: qu,
                    blocked: Ju,
                    maxIslands: Uu.baf2IslandsMax,
                    serverNowMs: ku,
                    nowMs: bu,
                    actions: du,
                    full: Pu,
                    waits: au,
                    answered: Uu.baf2IslandsAnswered,
                    mode: (null === Su || void 0 === Su ? void 0 : Su.id) === Eu ? Su.mode : null,
                    setMode: uu => {
                      Nu(null === uu ? null : {
                        id: Eu,
                        mode: uu
                      })
                    },
                    pending: Kf(Ou.get(Eu), uu, bu),
                    onSent: (ju, su) => {
                      Yu((Uu => {
                        const Zu = {
                          atMs: Date.now(),
                          from: uu.baf2IslandName,
                          answer: ju
                        };
                        return new Map(Uu).set(Eu, su ? {
                          ...Zu,
                          untilGone: su
                        } : Zu)
                      }))
                    },
                    leave: lu,
                    switchTo: () => {
                      fu.send(`baf2islandswitch ${Eu}`), lu()
                    },
                    t: Cu
                  }, Eu)
                })), !Pu && (0, aZ.jsx)(Sb, {
                  cards: gu,
                  activeName: mu,
                  canStart: du.change,
                  waitSeconds: au.change,
                  leave: lu,
                  t: Cu
                })]
              })]
            })]
          })]
        })
      })
    }
    var Fb = ju(5179);
    const Bb = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        Ss: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      Lb = Object.keys(Bb),
      tb = new Set([...Object.keys(AE), ...[...VE.Press.recipes, ...VE["Wire Mill"].recipes].map((uu => uu.output))]),
      xb = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      Tb = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      Hb = / Bar$|Alloy$/,
      Ab = /Porkchop|Beef|Mutton|Venison|Steak/,
      nb = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const yb = (0, su.memo)((function(uu) {
      let {
        item: Eu,
        name: ju,
        amount: su,
        selected: Uu,
        small: Zu,
        onPick: Xu
      } = uu;
      return (0, aZ.jsxs)("button", {
        type: "button",
        className: JU()("Baf2TermTile", {
          On: Uu,
          Small: Zu
        }),
        "aria-label": `${ju}: ${su}`,
        "aria-pressed": Uu,
        onClick: () => {
          Xu(Eu)
        },
        children: [(0, aZ.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, aZ.jsx)(mU.d, {
            itemName: Eu,
            amount: 0
          })
        }), (0, aZ.jsx)("span", {
          className: "Baf2TermCount",
          children: eZ(su, 1e4)
        }), !Zu && (0, aZ.jsx)("span", {
          className: "Baf2TermName",
          children: ju
        })]
      })
    }));

    function zb(uu) {
      let {
        store: Eu,
        close: ju,
        send: Uu
      } = uu;
      const {
        t: Zu
      } = (0, oU.A)(), {
        isTouchScreen: Xu
      } = (0, GU.l)(["isTouchScreen"]);
      ! function(uu) {
        const [Eu, ju] = (0, su.useState)(uu.version);
        (0, su.useEffect)((() => (ju(uu.version), uu.subscribe((() => {
          ju(uu.version)
        })))), [uu])
      }(Eu);
      const [lu, qu] = (0, su.useState)("all"), [fu, Cu] = (0, su.useState)(!1), [bu, cu] = (0, su.useState)(""), [Nu, Ou] = (0, su.useState)(""), [Yu, hu] = (0, su.useState)(null), [Du, gu] = (0, su.useState)(!1), [Mu, eu, Gu] = function() {
        const uu = (0, su.useRef)(null),
          [Eu, ju] = (0, su.useState)(!1),
          Uu = () => {
            const Eu = uu.current;
            ju(null !== Eu && Eu.scrollLeft + Eu.clientWidth < Eu.scrollWidth - 1)
          };
        return (0, su.useEffect)(Uu), (0, su.useEffect)((() => {
          const Eu = uu.current;
          if (!Eu) return;
          const ju = new ResizeObserver(Uu);
          return ju.observe(Eu), () => {
            ju.disconnect()
          }
        }), []), [uu, Eu, Uu]
      }(), pu = (0, su.useMemo)((() => new Map), [Zu]), wu = uu => {
        let Eu = pu.get(uu);
        return void 0 === Eu && (Eu = function(uu, Eu) {
          const ju = /^(.+) \((.+)\)$/.exec(uu);
          return ju ? Eu(ju[2], ju[1]) : uu
        }(ZZ(Zu, uu), ((uu, Eu) => Zu("buildAFactory2Game:terminalTileKind", {
          kind: uu,
          base: Eu
        }))), pu.set(uu, Eu)), Eu
      }, Ju = Eu.isReadOnly(), du = Du && !Ju, au = Eu.recent(), Pu = Eu.items(), ou = Nu.trim().toLowerCase(), ku = du ? Eu.heldItems(Yu) : ("recent" === lu ? au : Pu).filter((uu => {
        const Eu = wu(uu);
        return ("all" === lu || "recent" === lu || function(uu) {
          return NZ(uu) ? "farm" : xb.test(uu) ? "nuclear" : Hb.test(uu) ? "bars" : Ab.test(uu) ? "farm" : Tb.test(uu) ? "Ss" : tb.has(uu) ? "parts" : nb.test(uu) ? "farm" : "other"
        }(uu) === lu) && ("" === ou || Eu.toLowerCase().includes(ou)) && ("" === bu || Eu.toUpperCase().startsWith(bu))
      })), mu = new Set(Pu.map((uu => wu(uu).charAt(0).toUpperCase()))), vu = uu => du ? Eu.heldAmount(uu) : Eu.amount(uu), Ku = !du && "recent" !== lu && au.length > 0, Vu = function(uu, Eu) {
        return null !== uu && Eu.includes(uu) ? uu : null
      }(Yu, Ku ? [...ku, ...au] : ku), ru = null === Vu ? 0 : Eu.amount(Vu), Qu = null === Vu ? 0 : vu(Vu), iu = (0, su.useCallback)((uu => {
        hu((Eu => Eu === uu ? null : uu))
      }), []), Wu = uu => Qu > 0 || du && null === Vu && "fill" === uu && ku.length > 0, Su = du ? [
        ["one", Zu("buildAFactory2Game:terminalStoreOne")],
        ["stack", Zu("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", Zu(null === Vu ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", Zu("buildAFactory2Game:terminalTakeOne")],
        ["stack", Zu("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", Zu("buildAFactory2Game:terminalFill")]
      ], Iu = du ? Zu("buildAFactory2Game:terminalStoreEmpty") : "" !== bu ? Zu("buildAFactory2Game:terminalEmptyLetter", {
        letter: bu
      }) : "" !== ou ? Zu("buildAFactory2Game:terminalEmptySearch", {
        query: Nu
      }) : Zu("buildAFactory2Game:terminalEmpty");
      return (0, aZ.jsx)(pX.c, {
        close: ju,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, aZ.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, aZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, aZ.jsxs)("div", {
              children: [(0, aZ.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: Zu(Eu.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, aZ.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, aZ.jsx)("span", {
                  className: JU()({
                    Off: du
                  }),
                  children: Zu("buildAFactory2Game:terminalSubtitle", {
                    count: String(Eu.siloCount())
                  })
                }), !Ju && (0, aZ.jsx)("span", {
                  className: JU()({
                    Off: !du
                  }),
                  children: Zu("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !Ju && (0, aZ.jsx)(Fb.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: Zu("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: Zu("buildAFactory2Game:terminalModeStore")
              }],
              value: du ? "store" : "take",
              onChange: uu => {
                gu("store" === uu), hu(null)
              },
              ariaLabel: Zu("buildAFactory2Game:terminalModes")
            }), (0, aZ.jsx)(wX.l, {
              onClick: ju
            })]
          }), (0, aZ.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, aZ.jsxs)("div", {
              className: JU()("Baf2TermTools", {
                Hidden: du
              }),
              children: [(0, aZ.jsx)("div", {
                ref: Mu,
                className: JU()("Baf2TermChips", {
                  MoreRight: eu
                }),
                onScroll: Gu,
                children: fu ? (0, aZ.jsxs)(aZ.Fragment, {
                  children: [(0, aZ.jsx)("button", {
                    type: "button",
                    "aria-label": Zu("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      Cu(!1), cu("")
                    },
                    children: "\u2190"
                  }), [...mu].sort().map((uu => (0, aZ.jsx)("button", {
                    type: "button",
                    className: JU()({
                      On: bu === uu
                    }),
                    onClick: () => {
                      cu(bu === uu ? "" : uu)
                    },
                    children: uu
                  }, uu)))]
                }) : (0, aZ.jsxs)(aZ.Fragment, {
                  children: [(0, aZ.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      Cu(!0)
                    },
                    children: Zu("buildAFactory2Game:terminalLetters")
                  }), Lb.map((uu => (0, aZ.jsx)("button", {
                    type: "button",
                    className: JU()({
                      On: lu === uu
                    }),
                    onClick: () => {
                      qu(uu)
                    },
                    children: Zu(Bb[uu])
                  }, uu)))]
                })
              }), !Xu && (0, aZ.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: Nu,
                placeholder: Zu("buildAFactory2Game:terminalSearch"),
                "aria-label": Zu("buildAFactory2Game:terminalSearch"),
                onChange: uu => {
                  Ou(uu.target.value)
                },
                onKeyDown: uu => {
                  uu.stopPropagation()
                }
              }), (0, aZ.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": Zu("buildAFactory2Game:terminalResort"),
                title: Zu("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  Eu.resort()
                },
                children: "\u21c5"
              })]
            }), Ku && (0, aZ.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, aZ.jsx)("span", {
                children: Zu(Bb.recent)
              }), au.map((uu => (0, aZ.jsx)(yb, {
                item: uu,
                name: wu(uu),
                amount: Eu.amount(uu),
                selected: Vu === uu,
                small: !0,
                onPick: iu
              }, uu)))]
            }), (0, aZ.jsx)("div", {
              className: "Baf2TermTiles",
              children: ku.length > 0 ? ku.map((uu => (0, aZ.jsx)(yb, {
                item: uu,
                name: wu(uu),
                amount: vu(uu),
                selected: Vu === uu,
                onPick: iu
              }, uu))) : (0, aZ.jsx)("p", {
                className: "Baf2TermEmpty",
                children: Iu
              })
            }), (0, aZ.jsxs)("div", {
              className: JU()("Baf2TermActions", {
                Hidden: du && 0 === ku.length
              }),
              children: [(0, aZ.jsx)("span", {
                className: "Baf2TermPicked",
                children: Ju ? (0, aZ.jsxs)(aZ.Fragment, {
                  children: [null !== Vu && ru > 0 ? wu(Vu) : Zu("buildAFactory2Game:terminalVisiting"), (0, aZ.jsx)("small", {
                    children: Zu("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Vu ? (0, aZ.jsxs)(aZ.Fragment, {
                  children: [wu(Vu), (0, aZ.jsx)("small", {
                    children: Zu("buildAFactory2Game:terminalStored", {
                      amount: ru.toLocaleString()
                    })
                  })]
                }) : Zu(du ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !Ju && Su.map((uu => {
                let [ju, su] = uu;
                const Zu = "fill" === ju ? wX.p : wX.f;
                return (0, aZ.jsx)(Zu, {
                  className: "Baf2TermTake",
                  disabled: !Wu(ju),
                  onClick: () => {
                    (uu => {
                      Wu(uu) && Uu(null === Vu ? Eu.putAll() : du ? Eu.put(uu, Vu) : Eu.take(uu, Vu))
                    })(ju)
                  },
                  children: su
                }, ju)
              }))]
            })]
          })]
        })
      })
    }

    function Rb(uu) {
      let {
        kind: Eu,
        icon: ju,
        label: su,
        number: Uu,
        preview: Zu,
        note: Xu,
        tone: lu = null,
        share: qu,
        onExplain: fu
      } = uu;
      return (0, aZ.jsxs)("button", {
        type: "button",
        className: JU()("NxLane", Eu, {
          Warn: "warn" === lu,
          Danger: "danger" === lu
        }),
        onClick: fu,
        children: [(0, aZ.jsxs)("span", {
          className: "NxLaneHead",
          children: [ju, (0, aZ.jsx)("span", {
            className: "NxLaneLabel",
            children: su
          })]
        }), (0, aZ.jsxs)("span", {
          className: "NxLaneNum",
          children: [Uu, Zu && (0, aZ.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", Zu]
          })]
        }), (0, aZ.jsx)("span", {
          className: "NxLaneNote",
          children: Xu
        }), void 0 !== qu && (0, aZ.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, qu)) + "%"
          }
        })]
      })
    }

    function uc(uu) {
      let {
        kind: Eu,
        step: ju,
        short: su,
        planned: Uu
      } = uu;
      return (0, aZ.jsx)("i", {
        className: JU()("NxPipe", Eu, `Step${ju}`, {
          Short: su,
          Planned: Uu
        }),
        "aria-hidden": "true"
      })
    }

    function Ec(uu) {
      let {
        max: Eu,
        bands: ju,
        ticks: su,
        now: Uu,
        settle: Zu,
        settleTone: Xu,
        onExplain: lu
      } = uu;
      const qu = uu => Math.max(0, Math.min(Eu, uu)) / Eu * 100 + "%";
      let fu = 0;
      return (0, aZ.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: lu,
        children: [(0, aZ.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [ju.map((uu => {
            const Eu = {
              bottom: qu(fu),
              height: `calc(${qu(uu.upTo)} - ${qu(fu)})`
            };
            return fu = uu.upTo, (0, aZ.jsx)("i", {
              className: JU()("NxGaugeBand", uu.kind),
              style: Eu
            }, uu.kind)
          })), null !== Uu && (0, aZ.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: qu(Uu)
            }
          }), void 0 !== Zu && null !== Zu && (0, aZ.jsx)("i", {
            className: JU()("NxGaugeSettle", {
              Bad: "bad" === Xu
            }),
            style: {
              bottom: qu(Zu)
            }
          })]
        }), (0, aZ.jsx)("span", {
          className: "NxGaugeTicks",
          children: su.map((uu => (0, aZ.jsx)("small", {
            style: {
              bottom: qu(uu)
            },
            children: uu
          }, uu)))
        })]
      })
    }

    function jc(uu) {
      const [Eu, ju] = (0, su.useState)(null), [Uu, Zu] = (0, su.useState)((() => {
        try {
          return null === window.localStorage.getItem(uu)
        } catch {
          return !1
        }
      })), Xu = (0, su.useRef)(null);
      (0, su.useEffect)((() => () => {
        null !== Xu.current && clearTimeout(Xu.current)
      }), []);
      const lu = (0, su.useCallback)((Eu => {
          ju(Eu), Zu(!1);
          try {
            window.localStorage.setItem(uu, "1")
          } catch {}
          null !== Xu.current && clearTimeout(Xu.current), Xu.current = setTimeout((() => {
            Xu.current = null, ju(null)
          }), 5e3)
        }), [uu]),
        qu = (0, su.useCallback)(((Eu, ju) => {
          const su = `${uu}:${Eu}`;
          try {
            if (null !== window.localStorage.getItem(su)) return;
            window.localStorage.setItem(su, "1")
          } catch {
            return
          }
          lu(ju)
        }), [lu, uu]);
      return {
        explained: Eu,
        hinting: Uu,
        explain: lu,
        explainOnce: qu
      }
    }

    function sc(uu) {
      let {
        text: Eu,
        tone: ju,
        explained: su
      } = uu;
      return (0, aZ.jsxs)("p", {
        className: JU()("NxStatus", null === su ? ju : "Explain"),
        "aria-live": "polite",
        children: [null !== su && (0, aZ.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== su && void 0 !== su ? su : Eu]
      })
    }
    const Uc = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function Zc(uu, Eu) {
      const ju = Number(uu[Eu]);
      return 1 === ju || 2 === ju || 3 === ju ? ju : 0
    }

    function Xc(uu) {
      return !!wq("reactor", uu.baf2RxNeed) || void 0 !== uu.baf2RxLayout && uu.baf2RxNeed.some((uu => {
        let [Eu, ju] = uu;
        return ju > 0 && Uc.includes(Eu)
      }))
    }
    const lc = "buildAFactory2Game:";

    function qc(uu) {
      let {
        status: Eu,
        store: ju,
        busy: su
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)();
      return function(uu) {
        return 0 !== (uu.baf2RxFlags & YE) && (!uu.baf2RxFormed || void 0 !== uu.baf2RxLayout)
      }(Eu) ? (0, aZ.jsx)(wX.p, {
        disabled: !Xc(Eu) || su,
        onClick: () => {
          ju.tap("fill", (() => {
            ju.send("fill")
          }))
        },
        children: Uu(void 0 !== Eu.baf2RxLayout ? `${lc}rxFillLayout` : `${lc}rxFill`)
      }) : null
    }

    function fc(uu) {
      let {
        status: Eu,
        store: ju,
        readOnly: Uu,
        bare: Zu = !1
      } = uu;
      const {
        t: Xu
      } = (0, oU.A)(), lu = Eu.baf2RxLayout, [qu, fu, Cu] = Eu.baf2RxDims, bu = (0, su.useMemo)((() => {
        if (void 0 === lu) return 0;
        const uu = Uint8Array.from(lu, ((uu, Eu) => Zc(lu, Eu)));
        return Eq([qu - 2, fu - 2, Cu - 2], uu).max
      }), [lu, qu, fu, Cu]);
      return void 0 === lu ? null : (0, aZ.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!Zu && (0, aZ.jsx)("span", {
          className: "Baf2RxHint",
          children: Xu(`${lc}rxLayoutLine`, {
            amount: mq(bu)
          })
        }), !Uu && (0, aZ.jsx)(wX.f, {
          onClick: () => {
            ju.send("layout", 0)
          },
          children: Xu(`${lc}rxLayoutHide`)
        })]
      })
    }
    const Cc = "buildAFactory2Game:",
      bc = {
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

    function cc(uu) {
      let {
        id: Eu,
        title: ju,
        body: su,
        bodyParams: Uu,
        yes: Zu,
        cancel: Xu,
        confirm: lu
      } = uu;
      const {
        t: qu
      } = (0, oU.A)();
      return (0, aZ.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": Eu,
        children: [(0, aZ.jsx)("h3", {
          id: Eu,
          children: qu(ju)
        }), (0, aZ.jsx)("p", {
          children: qu(su, Uu)
        }), (0, aZ.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, aZ.jsx)(wX.i, {
            onClick: Xu,
            children: qu(`${Cc}rxCancel`)
          }), (0, aZ.jsx)(wX.R, {
            onClick: lu,
            children: qu(Zu)
          })]
        })]
      })
    }

    function Nc(uu) {
      const [Eu, ju] = (0, su.useState)((() => uu.get()));
      return (0, su.useEffect)((() => (ju(uu.get()), uu.subscribe((() => {
        ju(uu.get())
      })))), [uu]), Eu
    }

    function Oc(uu) {
      let {
        kind: Eu,
        cap: ju,
        busy: Uu = !1,
        whyNot: Zu = null,
        apart: Xu
      } = uu;
      const {
        t: lu
      } = (0, oU.A)(), [qu, fu] = (0, su.useState)(!1), Cu = null !== Zu, bu = (0, su.useRef)(null);
      if ((0, su.useEffect)((() => {
          Cu && fu(!1)
        }), [Cu]), (0, su.useLayoutEffect)((() => {
          var uu;
          const Eu = null === (uu = bu.current) || void 0 === uu ? void 0 : uu.firstElementChild;
          Cu ? null === Eu || void 0 === Eu || Eu.setAttribute("aria-disabled", "true") : Uu || null === Eu || void 0 === Eu || Eu.removeAttribute("aria-disabled")
        })), !qu || Cu) return (0, aZ.jsx)("span", {
        ref: bu,
        className: "Baf2RxApartWrap",
        children: (0, aZ.jsx)(wX.i, {
          disabled: Uu,
          className: JU()({
            Baf2RxNotYet: Cu
          }),
          onClick: () => {
            Zu ? Zu() : fu(!0)
          },
          children: lu(`${Cc}rxApart`)
        })
      });
      const cu = "battery" === Eu,
        Nu = void 0 === ju ? `${Cc}batApartConfirmBodyPlan` : `${Cc}batApartConfirmBody`;
      return (0, aZ.jsx)(cc, {
        id: `baf2ApartTitle_${Eu}`,
        title: cu ? `${Cc}batApartConfirmTitle` : `${Cc}rxApartConfirmTitle`,
        body: cu ? Nu : `${Cc}rxApartConfirmBody`,
        bodyParams: void 0 === ju ? void 0 : {
          cap: ju
        },
        yes: `${Cc}rxApart`,
        cancel: () => {
          fu(!1)
        },
        confirm: () => {
          fu(!1), Xu()
        }
      })
    }

    function Yc(uu) {
      let {
        mood: Eu,
        big: ju
      } = uu;
      const su = bc[Eu],
        Uu = [];
      return su.rows.forEach(((uu, Eu) => {
        for (let ju = 0; ju < uu.length; ju++) "." !== uu[ju] && Uu.push((0, aZ.jsx)("rect", {
          x: ju + 1,
          y: Eu + 1,
          width: 1,
          height: 1,
          fill: "w" === uu[ju] ? "#8fd3ff" : su.colour
        }, `${ju},${Eu}`))
      })), (0, aZ.jsxs)("svg", {
        className: JU()("Baf2RxFace", {
          Big: ju,
          Alarm: "alarm" === Eu
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, aZ.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, aZ.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), Uu]
      })
    }

    function hc(uu) {
      return MZ(uu, "+").replace("+", "")
    }

    function Dc(uu) {
      let {
        kind: Eu,
        dims: ju,
        cap: su,
        disabled: Uu,
        compact: Zu,
        resize: Xu
      } = uu;
      const {
        t: lu
      } = (0, oU.A)(), {
        min: qu,
        max: fu
      } = Sj(Eu), Cu = Math.min(su, fu), bu = [`${Cc}rxWide`, `${Cc}rxTall`, `${Cc}rxDeep`], cu = {
        w: String(ju[0]),
        h: String(ju[1]),
        d: String(ju[2]),
        blocks: String(kq(Eu, ju))
      };
      return (0, aZ.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, aZ.jsx)("div", {
          className: "Baf2RxSteppers",
          children: ju.map(((uu, Eu) => {
            const Zu = su => {
                const Uu = [ju[0], ju[1], ju[2]];
                Uu[Eu] = uu + su, Xu(Uu)
              },
              cu = uu >= Cu;
            return (0, aZ.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, aZ.jsx)("button", {
                type: "button",
                "aria-label": lu(`${Cc}rxSmaller`),
                disabled: Uu || uu <= qu,
                onClick: () => {
                  Zu(-1)
                },
                children: "\u2212"
              }), (0, aZ.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [uu, (0, aZ.jsx)("small", {
                  children: lu(bu[Eu])
                })]
              }), (0, aZ.jsx)("button", {
                type: "button",
                "aria-label": lu(`${Cc}rxBigger`),
                disabled: Uu || cu,
                onClick: () => {
                  Zu(1)
                },
                children: cu && su < fu ? "\ud83d\udd12" : "+"
              })]
            }, bu[Eu])
          }))
        }), !Zu && (0, aZ.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === Eu ? lu(`${Cc}rxSizeLine`, {
            ...cu,
            water: String(oq(ju))
          }) : lu(`${Cc}batSizeLine`, cu)
        })]
      })
    }

    function gc(uu) {
      let {
        on: Eu,
        label: ju,
        disabled: su,
        locked: Uu,
        pending: Zu,
        toggle: Xu
      } = uu;
      return (0, aZ.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": Eu,
        disabled: su,
        "aria-disabled": Uu || void 0,
        className: JU()("Baf2RxSwitch", {
          On: Eu,
          Locked: Uu,
          Pending: Zu
        }),
        onClick: Xu,
        children: [(0, aZ.jsx)("span", {
          className: "Baf2RxKnob"
        }), ju]
      })
    }
    const Mc = "buildAFactory2Game:",
      ec = .95;

    function Gc(uu, Eu) {
      return 0 !== (uu.baf2RxFlags & Eu)
    }

    function pc(uu) {
      return "cryo" === uu ? zu.l : zu.m
    }

    function wc(uu) {
      var Eu, ju, su, Uu, Zu, Xu, lu, qu, fu;
      return uu.baf2RxCryo ? {
        XN: "cryo",
        usePerS: null !== (Uu = uu.baf2RxCryoUse) && void 0 !== Uu ? Uu : 0,
        needPerS: null !== (Zu = uu.baf2RxCryoNeed) && void 0 !== Zu ? Zu : 0,
        inPerS: null !== (Xu = uu.baf2RxCryoIn) && void 0 !== Xu ? Xu : 0,
        stored: null !== (lu = uu.baf2RxCryoStored) && void 0 !== lu ? lu : 0,
        makersShort: null !== (qu = uu.baf2RxMixersShort) && void 0 !== qu ? qu : 0,
        waterBeside: null !== (fu = uu.baf2RxWaterUse) && void 0 !== fu ? fu : 0,
        pct: uu.baf2RxWater
      } : {
        XN: "water",
        usePerS: null !== (Eu = uu.baf2RxWaterUse) && void 0 !== Eu ? Eu : 0,
        needPerS: null !== (ju = uu.baf2RxWaterNeed) && void 0 !== ju ? ju : 0,
        inPerS: uu.baf2RxWaterIn,
        stored: uu.baf2RxWaterStored,
        makersShort: null !== (su = uu.baf2RxCondensersShort) && void 0 !== su ? su : 0,
        waterBeside: 0,
        pct: uu.baf2RxWater
      }
    }

    function Jc(uu) {
      const Eu = "running" === uu.baf2RxState || "idle" === uu.baf2RxState;
      return uu.baf2RxFormed && uu.baf2RxTarget !== uu.baf2RxThrottle && Eu ? dc(uu, uu.baf2RxTarget) : null
    }

    function dc(uu, Eu) {
      const [ju, su, Uu, , , , Zu, , Xu] = uu.baf2RxStats, lu = Gc(uu, NE), qu = wc(uu), fu = qu.pct / 100, {
        gen: Cu,
        out: bu,
        load: cu
      } = function(uu, Eu, ju, su) {
        const Uu = ju ? Hl : 1,
          Zu = Math.min(uu.fuelHeat * Uu * Math.max(0, Math.min(1, Eu)), uu.size * Uu);
        return {
          gen: Zu,
          out: Zu,
          load: cq(Zu, uu.cooling, su)
        }
      }({
        fuelHeat: ju,
        cooling: su,
        size: Uu
      }, Eu / 100, lu, fu), Nu = Oq(Zu || uq(...uu.baf2RxDims)), Ou = uu.baf2RxHeat, Yu = Math.abs(cu - Ou), hu = function(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zu.m;
        const Zu = ju ? Hl : 1,
          Xu = Math.min(uu.fuelHeat * Zu * Eu / 100, uu.size * Zu),
          lu = Xu,
          qu = uu.fuelHeat * Zu,
          fu = uu.cooling * bq(su.pct / 100),
          Cu = qu > 0 && fu < uu.size * Zu ? Math.floor(100 * fu / qu) : 100,
          bu = Xu * Uu - su.inPerS;
        return {
          out: lu,
          hotAbove: Cu >= 100 ? null : Math.max(0, Cu),
          waterSecs: su.pct >= 100 && bu > 1e-6 ? Math.max(0, su.stored) / bu : null
        }
      }({
        fuelHeat: ju,
        cooling: su,
        size: Uu
      }, Eu, lu, {
        pct: qu.pct,
        inPerS: qu.inPerS,
        stored: qu.stored
      }, pc(qu.XN));
      return {
        pct: Eu,
        out: bu,
        coolPerS: Cu * pc(qu.XN),
        pelletsPerMin: Xu > 0 ? bu / Xu * 60 : 0,
        settle: cu,
        settleS: Yu > 2 ? Nu * Math.log(Yu / 2) : 0,
        overheatS: cu > 100 && Ou < 100 ? Nu * Math.log((cu - Ou) / (cu - 100)) : null,
        hotAbove: hu.hotAbove,
        coolantSecs: hu.waterSecs
      }
    }

    function ac(uu) {
      return uu.baf2RxThrottle <= 0 && "running" !== uu.baf2RxState ? 0 : dc(uu, uu.baf2RxTarget).pelletsPerMin / 60
    }

    function Pc(uu, Eu) {
      if (uu <= 0 || Eu <= 0) return 0;
      const ju = uu / Eu;
      return ju < .25 ? 1 : ju < .5 ? 2 : ju < .8 ? 3 : 4
    }

    function oc(uu, Eu) {
      const ju = {};
      for (const [su, Uu] of Object.entries(Eu.params)) ju[su] = "time" === su ? pZ(uu, Uu) : "amount" === su ? mq(Uu) : String(Math.round(Uu));
      return uu(Eu.key, ju)
    }

    function kc(uu, Eu) {
      return {
        key: `${Mc}${uu}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: Eu
      }
    }

    function mc(uu) {
      var Eu;
      const ju = Gc(uu, NE),
        su = "running" === uu.baf2RxState,
        Uu = gq(uu),
        Zu = uu.baf2RxHeat;
      var Xu;
      if (su && Zu > xl) return {
        key: null !== (Xu = Uu.fix) && void 0 !== Xu ? Xu : `${Mc}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const lu = su ? dc(uu, uu.baf2RxTarget).coolantSecs : null,
        qu = "cryo" === wc(uu).XN;
      if (null !== lu && lu >= 1 && lu <= 30) return kc(qu ? "rxWarnCryo" : "rxWarnWater", "bad");
      const fu = zl(uq(...uu.baf2RxDims)).waste,
        Cu = su ? Jq(uu, fu, ac(uu)).fullInS : null;
      if (null !== Cu && Cu <= 120 && uu.baf2RxWaste >= .5 * fu) return kc("rxWarnWaste", "warn");
      if (null !== lu && lu >= 1) return kc(qu ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: lu
      });
      const bu = "noWater" === uu.baf2RxState && Zu > xl;
      if (uu.baf2RxDamage >= 1 && !bu) return kc("rxDamagedHeals", "warn", {
        pct: uu.baf2RxDamage
      });
      if (uu.baf2RxCryoCut) return kc("rxFix_cryoCut", "warn");
      const cu = wc(uu);
      if ("noWater" === uu.baf2RxState && "cryo" === cu.XN) return kc("noWater" === uu.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const Nu = Uu.fix === `${Mc}rxFix_scramCool` || "idle" === uu.baf2RxState && uu.baf2RxTarget <= 0;
      if (Nu && uu.baf2RxFuel <= 0) return kc("rxFix_noFuel", "warn");
      if (Nu && uu.baf2RxWaterIn <= 0 && (null !== (Eu = uu.baf2RxCryoIn) && void 0 !== Eu ? Eu : 0) <= 0) return kc("rxFix_noWater", "warn");
      const Ou = Uu.fix === `${Mc}rxFix_scramCool` ? eq(uu) : null;
      if (null !== Ou) return {
        key: Ou.key,
        params: {
          amount: Ou.amount
        },
        tone: "info"
      };
      if ("running" !== uu.baf2RxState && "idle" !== uu.baf2RxState && null !== Uu.fix) return {
        key: Uu.fix,
        params: {},
        tone: "scram" === uu.baf2RxState ? "info" : bu ? "bad" : "warn"
      };
      var Yu;
      if ("idle" === uu.baf2RxState && uu.baf2RxTarget <= 0) return {
        key: null !== (Yu = Uu.fix) && void 0 !== Yu ? Yu : `${Mc}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const hu = uu.baf2RxCryoStarved;
      if ("cryo" === cu.XN && hu && cu.needPerS > 0 && cu.usePerS < ec * cu.needPerS) return kc("noWater" === hu ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const Du = "cryo" === cu.XN,
        gu = cu.needPerS > 0 && cu.usePerS < ec * cu.needPerS;
      if (Du ? gu || cu.makersShort > 0 && cu.pct < 100 : cu.pct < 100) {
        const Eu = Du && gu ? Math.floor(100 * cu.usePerS / cu.needPerS) : Math.min(100, cu.pct);
        if (cu.makersShort > 0) {
          return kc(`${Du?"rxCryoShortLine":"rxWaterShortLine"}${1===cu.makersShort?"One":""}${!Du&&uu.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: Eu,
            count: cu.makersShort
          })
        }
        return kc(Du ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: Eu
        })
      }
      const Mu = function(uu) {
        const [Eu, ju, su] = uu.baf2RxStats, Uu = wc(uu), Zu = Nq({
          fuelHeat: Eu,
          cooling: ju,
          size: su
        }, "cryo" === Uu.XN ? zu.e : 1, !0);
        return Math.max(0, Zu * pc(Uu.XN) - Uu.inPerS)
      }(uu);
      if (ju && Mu > 0) return kc("cryo" === cu.XN ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Mu)
      });
      if (Zu >= fq) return kc("rxHotLine", "warn");
      const eu = dc(uu, uu.baf2RxTarget);
      var Gu;
      if (null !== eu.overheatS) return kc("rxWillOverheat", "bad", {
        pct: uu.baf2RxTarget,
        time: eu.overheatS,
        safe: null !== (Gu = eu.hotAbove) && void 0 !== Gu ? Gu : 100
      });
      if (Math.abs(eu.settle - Zu) >= 3) return kc("rxSettling", "info", {
        pct: uu.baf2RxTarget,
        heat: Math.round(eu.settle),
        time: eu.settleS
      });
      const pu = eq(uu);
      if (null !== pu) return {
        key: pu.key,
        params: {
          amount: pu.amount
        },
        tone: "info"
      };
      const wu = function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== Eu && ("running" !== Eu || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === uu.rods ? `${Yq}rxLimitNoRods` : `${Yq}rxLimit_${qq(uu)}`
      }({
        rods: uu.baf2RxStats[3],
        ...Mq(uu)
      }, uu.baf2RxState, uu.baf2RxOut >= ec * uu.baf2RxMaxNow, !1);
      if (wu === `${Mc}rxLimit_size`) {
        const [Eu, , ju, su] = uu.baf2RxStats, Uu = su > 0 && Eu > 0 ? Math.ceil(ju / (Eu / su) - 1e-9) : su, Zu = uu.baf2RxDims.every((uu => uu >= Sj("reactor").max));
        if (Uu < su) return kc(Zu ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: Uu,
          have: su
        });
        if (Zu) return kc("rxLimit_sizeMax", "info")
      }
      return null !== wu ? {
        key: wu,
        params: {},
        tone: "info"
      } : kc("rxSteady", "ok", {
        pct: uu.baf2RxTarget
      })
    }

    function vc(uu) {
      var Eu;
      if (uu.melted) return kc("rxMeltedBody", "bad");
      if (-1 === uu.bad) return kc("rxFix_noRoom", "warn");
      if (uu.bad > 0) return kc(1 === uu.bad ? "rxBadOne" : "rxBad", "warn", {
        count: uu.bad
      });
      if (uu.left > 0) {
        const Eu = 1 === uu.left ? "One" : "";
        return kc(uu.canFill ? `rxPlanLeft${Eu}` : `rxPlanLeftNoFill${Eu}`, "info", {
          count: uu.left
        })
      }
      if (0 === uu.rods) return kc("rxLimitNoRods", "warn");
      const ju = null !== (Eu = uu.idle) && void 0 !== Eu ? Eu : 0;
      return ju > 0 ? kc(1 === ju ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: ju
      }) : kc("rxPlanReady", "ok")
    }

    function Kc(uu) {
      return Math.floor(Math.max(0, uu[1] - 1) / 2)
    }

    function Vc(uu) {
      if (uu >= sq && uu < Uq) {
        const Eu = uu - sq;
        return {
          key: 0 === Eu ? `${Mc}rxWhy_rodAlone` : 1 === Eu ? `${Mc}rxWhy_rodOne` : `${Mc}rxWhy_rod`,
          params: {
            count: String(Eu),
            heat: String(il * (1 + Wl * Eu))
          }
        }
      }
      return uu === Uq ? {
        key: `${Mc}rxWhy_channel`,
        params: {
          amount: String(Il)
        }
      } : uu === Zq ? {
        key: `${Mc}rxWhy_deadChannel`,
        params: {}
      } : uu === Xq ? {
        key: `${Mc}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Mc}rxWhy_core`,
        params: {}
      }
    }
    const rc = "buildAFactory2Game:";

    function Qc(uu, Eu) {
      return 0 !== (uu.baf2RxFlags & Eu)
    }

    function ic(uu) {
      let {
        status: Eu,
        pending: ju,
        store: su,
        explain: Uu
      } = uu;
      const {
        t: Zu
      } = (0, oU.A)(), Xu = Qc(Eu, cE), lu = Eu.baf2RxTarget, qu = Eu.baf2RxThrottle, fu = function(uu) {
        return {
          press: () => {
            uu.throttlePress()
          },
          drag: Eu => {
            uu.throttleDrag(Eu)
          },
          release: () => {
            uu.throttleRelease()
          }
        }
      }(su), Cu = null === (bu = dc(Eu, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, bu - 10),
        red: bu
      };
      var bu;
      return (0, aZ.jsxs)("div", {
        className: JU()("Baf2RxThrottle", {
          Off: Xu
        }),
        onClick: () => {
          Xu && Uu(`${rc}rxWhy_startFirst`)
        },
        children: [(0, aZ.jsx)("span", {
          className: "HideNarrow",
          children: Zu(`${rc}rxThrottle`)
        }), (0, aZ.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, aZ.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: lu,
            disabled: Xu,
            style: Xu ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": Zu(`${rc}rxThrottle`),
            onPointerDown: () => {
              fu.press();
              const uu = () => {
                window.removeEventListener("pointerup", uu), window.removeEventListener("pointercancel", uu), fu.release()
              };
              window.addEventListener("pointerup", uu), window.addEventListener("pointercancel", uu)
            },
            onKeyUp: fu.release,
            onChange: uu => {
              fu.drag(Number(uu.target.value))
            }
          }), (0, aZ.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${Cu.amber}%, #ffb020 ${Cu.amber}% ${Cu.red}%, #ff3b30 ${Cu.red}%)`
            },
            "aria-hidden": "true"
          }), (0, aZ.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${qu}% + ${8*(1-qu/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, aZ.jsxs)("b", {
          children: [`${lu}%`, (0, aZ.jsx)("i", {
            className: JU()("Baf2RxPendingDot", {
              On: ju
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function Wc(uu) {
      let {
        status: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)(), su = dc(Eu, Eu.baf2RxTarget), Uu = wc(Eu).XN, Zu = ju("cryo" === Uu ? `${rc}rxRateCryo` : `${rc}rxRateWater`, {
        rate: hc(su.coolPerS)
      }), Xu = ju(`${rc}rxChain`, {
        pct: String(Eu.baf2RxTarget),
        out: mq(su.out),
        heat: String(Math.round(su.settle)),
        coolant: Zu
      }), lu = null !== su.coolantSecs ? su.coolantSecs >= 1 ? ju("cryo" === Uu ? `${rc}rxThrottleCryoOut` : `${rc}rxThrottleWaterOut`, {
        time: pZ(ju, su.coolantSecs)
      }) : ju("cryo" === Uu ? `${rc}rxThrottleCryoDry` : `${rc}rxThrottleWaterDry`) : null;
      return (0, aZ.jsxs)("p", {
        className: "Baf2RxChain",
        children: [Xu, null !== lu ? (0, aZ.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", lu]
        }) : (0, aZ.jsxs)("span", {
          children: [" \xb7 ", ju(`${rc}rxChainPellets`, {
            amount: vq(su.pelletsPerMin)
          })]
        })]
      })
    }

    function Sc(uu) {
      let {
        view: Eu,
        store: ju,
        explain: Uu,
        explainOnce: Zu
      } = uu;
      const {
        t: Xu
      } = (0, oU.A)(), {
        status: lu
      } = Eu, [qu, fu] = (0, su.useState)(!1), Cu = Qc(lu, cE), cu = Qc(lu, NE), Nu = !Qc(lu, hE), Ou = lu.baf2RxHeat > 100;
      return (0, aZ.jsxs)(aZ.Fragment, {
        children: [(0, aZ.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, aZ.jsx)(ic, {
            status: lu,
            pending: Eu.throttlePending,
            store: ju,
            explain: Uu
          }), (0, aZ.jsx)(gc, {
            on: cu,
            label: cu ? Xu(`${rc}rxOdLeft`, {
              time: pZ(Xu, lu.baf2RxOdLeft)
            }) : Xu(`${rc}rxOverdrive`),
            locked: Nu,
            pending: 0 !== (Eu.pendingFlags & NE),
            toggle: () => {
              Nu ? Uu(`${rc}rxOverdriveTier`, {
                amount: String(bu(13))
              }) : cu ? ju.setFlag(NE, !1) : Eu.odConfirmed ? ju.setFlag(NE, !0) : fu(!0)
            }
          }), Cu || Eu.startGuard ? (0, aZ.jsx)(wX.x, {
            disabled: Eu.busy.has("start") || Eu.startGuard,
            onClick: () => {
              ju.tap("start", (() => {
                ju.setFlag(cE, !1)
              }))
            },
            children: Xu(Eu.startGuard ? `${rc}rxStarting` : `${rc}rxStart`)
          }) : (0, aZ.jsx)("span", {
            className: JU()("Baf2RxScram", {
              Pulse: Ou
            }),
            children: (0, aZ.jsx)(wX.R, {
              onClick: () => {
                ju.shutDown()
              },
              children: Xu(`${rc}rxScram`)
            })
          })]
        }), (0, aZ.jsx)(Wc, {
          status: lu
        }), qu && (0, aZ.jsx)(cc, {
          id: "baf2RxOdTitle",
          title: `${rc}rxOdConfirmTitle`,
          body: `${rc}rxOdConfirmBody`,
          yes: `${rc}rxOdConfirm`,
          cancel: () => {
            fu(!1)
          },
          confirm: () => {
            fu(!1), ju.tap("odConfirm", (() => {
              ju.confirmOverdrive(), ju.setFlag(NE, !0)
            })), Zu(`${rc}rxWhy_overdrive`)
          }
        })]
      })
    }

    function Ic(uu) {
      let {
        view: Eu,
        store: ju,
        keepSize: su
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)(), {
        status: Zu
      } = Eu;
      return (0, aZ.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, aZ.jsx)(Dc, {
          kind: "reactor",
          dims: Eu.dims,
          cap: Zu.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: uu => {
            ju.resize(uu)
          }
        }), su ? (0, aZ.jsx)(wX.i, {
          onClick: su,
          children: Uu(`${rc}rxKeepSize`)
        }) : (0, aZ.jsxs)(aZ.Fragment, {
          children: [(0, aZ.jsx)(gc, {
            on: Eu.guide,
            label: Uu(`${rc}rxGuide`),
            toggle: () => {
              ju.toggleGuide()
            }
          }), Qc(Zu, gE) && (0, aZ.jsx)(gc, {
            on: Eu.starter,
            label: Uu(`${rc}rxStarter`),
            toggle: () => {
              ju.toggleStarter()
            }
          }), (0, aZ.jsx)(qc, {
            status: Zu,
            store: ju,
            busy: Eu.busy.has("fill")
          })]
        })]
      })
    }

    function Fc(uu) {
      let {
        need: Eu,
        kind: ju = "reactor",
        explain: su
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)(), Zu = Eu.length <= 3, Xu = Eu.reduce(((uu, Eu) => {
        let [, ju] = Eu;
        return uu + ju
      }), 0);
      return (0, aZ.jsxs)("div", {
        className: JU()("Baf2RxParts", {
          Compact: !Zu
        }),
        onClick: () => {
          su("battery" === ju ? `${rc}batWhy_store` : `${rc}rxShellHint`)
        },
        children: [Xu > 0 && (0, aZ.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === Xu ? Uu(`${rc}rxBlocksOne`) : Uu(`${rc}rxBlocks`, {
            blocks: String(Xu)
          })
        }), 0 === Eu.length ? (0, aZ.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: Uu("battery" === ju ? `${rc}batPartsDone` : `${rc}rxShellDone`)
        }) : pq(Eu).map((uu => {
          let [Eu, ju, su] = uu;
          const Xu = function(uu) {
            const Eu = Pq[uu];
            if (void 0 === Eu) return null;
            const [ju, su, Uu] = dq[Eu].colour.map((uu => Math.round(255 * uu)));
            return `rgb(${ju}, ${su}, ${Uu})`
          }(Eu);
          return (0, aZ.jsxs)("span", {
            className: "Baf2RxChip",
            title: ZZ(Uu, Eu),
            children: [(0, aZ.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === Xu ? {
                visibility: "hidden"
              } : {
                background: Xu
              },
              title: Uu(`${rc}rxShopGhost`)
            }), (0, aZ.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, aZ.jsx)(mU.d, {
                itemName: Eu,
                amount: 0
              })
            }), (0, aZ.jsx)("span", {
              className: "Baf2RxChipName",
              children: Zu ? `${ju} ${lu=ZZ(Uu,Eu),lu.replace(/^(Reactor|Battery) (?=\S)/,"")}` : ju
            }), su >= ju ? (0, aZ.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, aZ.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: Zu ? Uu(`${rc}rxShopShort`, {
                count: String(ju - su)
              }) : "\u2212" + (ju - su)
            })]
          }, Eu);
          var lu
        }))]
      })
    }
    const Bc = "buildAFactory2Game:";

    function Lc(uu) {
      var Eu, ju, Uu, Zu, Xu, lu, qu;
      let {
        store: fu,
        close: Cu
      } = uu;
      const {
        t: bu
      } = (0, oU.A)(), cu = BX(), Nu = Nc(fu), {
        explained: Ou,
        explain: Yu
      } = jc("baf2RxExplained"), hu = (0, su.useCallback)(((uu, Eu) => {
        Yu(bu(uu, Eu))
      }), [Yu, bu]), Du = null === Nu || void 0 === Nu ? void 0 : Nu.status, gu = !0 === (null === Du || void 0 === Du ? void 0 : Du.baf2BatReadOnly), Mu = uu => {
        Du && cu.send(bE(Du.baf2BatAt, uu))
      }, [eu, Gu, pu] = null !== (Eu = null === Nu || void 0 === Nu ? void 0 : Nu.dims) && void 0 !== Eu ? Eu : [0, 0, 0], wu = mq(null !== (ju = null === Nu || void 0 === Nu ? void 0 : Nu.Mb) && void 0 !== ju ? ju : 0), Ju = !0 === (null === Du || void 0 === Du ? void 0 : Du.baf2BatFormed), du = null !== (Uu = null === Du || void 0 === Du ? void 0 : Du.baf2BatStored) && void 0 !== Uu ? Uu : 0, au = Math.max(1, null !== (Zu = null === Du || void 0 === Du ? void 0 : Du.baf2BatIslandCap) && void 0 !== Zu ? Zu : 1), Pu = Math.min(100, 100 * du / au), ou = null === Du || void 0 === Du ? void 0 : Du.baf2BatNetPerS, ku = function(uu, Eu, ju) {
        return ju > 0 && Eu >= ju ? "full" : void 0 !== uu && uu >= .05 ? "charging" : void 0 !== uu && uu <= -.05 && Eu > 0 ? "draining" : "steady"
      }(ou, du, null !== (Xu = null === Du || void 0 === Du ? void 0 : Du.baf2BatIslandCap) && void 0 !== Xu ? Xu : 0), mu = null !== (lu = null === Du || void 0 === Du ? void 0 : Du.baf2BatMadePerS) && void 0 !== lu ? lu : 0, vu = null !== (qu = null === Du || void 0 === Du ? void 0 : Du.baf2BatUsedPerS) && void 0 !== qu ? qu : 0;
      let Ku, Vu = {},
        ru = "info";
      if (Du)
        if (Ju) "charging" === ku ? (Ku = `${Bc}batLine_charging`, Vu = {
          time: pZ(bu, (au - du) / Math.max(.05, null !== ou && void 0 !== ou ? ou : 0))
        }, ru = "ok") : "draining" === ku ? (Ku = `${Bc}batLine_draining`, Vu = {
          time: pZ(bu, du / Math.max(.05, -(null !== ou && void 0 !== ou ? ou : 0)))
        }, ru = "warn") : Ku = "full" === ku ? `${Bc}batLine_full` : du <= 0 && vu > 0 ? `${Bc}batLine_empty` : `${Bc}batLine_steady`;
        else {
          var Qu;
          const uu = vc({
            left: Du.baf2BatNeed.reduce(((uu, Eu) => {
              let [, ju] = Eu;
              return uu + ju
            }), 0),
            bad: Du.baf2BatBad,
            rods: 1,
            canFill: !0 === Du.baf2BatCanFill,
            melted: !1
          });
          Ku = uu.key, Vu = {
            count: String(null !== (Qu = uu.params.count) && void 0 !== Qu ? Qu : 0)
          }, ru = uu.tone
        }
      else Ku = `${Bc}batLine_steady`;
      const iu = Math.max(mu, vu, 1);
      return (0, aZ.jsx)(pX.c, {
        close: Cu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, aZ.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, aZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, aZ.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, aZ.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, aZ.jsx)(mU.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, aZ.jsxs)("div", {
                children: [(0, aZ.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: bu(`${Bc}batTitle`)
                }), Du && (0, aZ.jsxs)("p", {
                  className: JU()("Baf2RxSubtitle", {
                    good: Ju && "charging" === ku,
                    warn: Ju && "draining" === ku
                  }),
                  children: [eu, "\xd7", Gu, "\xd7", pu, " \xb7 ", bu(Ju ? `${Bc}batState_${ku}` : `${Bc}rxSubPlanShort`)]
                })]
              })]
            }), (0, aZ.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [Du && !gu && (0, aZ.jsx)(Oc, {
                kind: "battery",
                cap: Ju ? wu : void 0,
                busy: null === Nu || void 0 === Nu ? void 0 : Nu.busy.has("apart"),
                apart: () => {
                  fu.tap("apart", (() => {
                    Mu("apart")
                  }))
                }
              }), (0, aZ.jsx)(wX.l, {
                onClick: Cu
              })]
            })]
          }), Nu && Du && (0, aZ.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, aZ.jsxs)("div", {
              className: JU()("Baf2RxFlow Baf2BatFlow", {
                Plan: !Ju
              }),
              children: [(0, aZ.jsx)(Rb, {
                kind: "Power",
                label: bu(`${Bc}batMade`),
                number: Ju ? `\u26a1 ${mq(mu)}/s` : "\u2014",
                note: bu(`${Bc}batMadeNote`),
                share: Ju ? mu / iu : void 0,
                onExplain: () => {
                  hu(`${Bc}batWhy_made`)
                }
              }), (0, aZ.jsx)(uc, {
                kind: "Power",
                step: Ju ? Pc(mu, iu) : 0,
                planned: !Ju
              }), (0, aZ.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  hu(`${Bc}batWhy_store`)
                },
                children: [(0, aZ.jsx)(Ec, {
                  max: 100,
                  bands: [{
                    upTo: Ju ? Pu : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, aZ.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, aZ.jsx)("b", {
                    className: "Baf2BatStored",
                    children: Ju ? bu(`${Bc}batStoredOf`, {
                      amount: mq(du),
                      cap: mq(Du.baf2BatIslandCap)
                    }) : bu(`${Bc}batWillHold`, {
                      cap: wu
                    })
                  }), (0, aZ.jsx)("span", {
                    children: bu(`${Bc}batAdds`, {
                      cap: wu
                    })
                  }), Ju && (0, aZ.jsx)("small", {
                    children: bu(`${Bc}batBreakNote`, {
                      cap: wu
                    })
                  })]
                })]
              }), (0, aZ.jsx)(uc, {
                kind: "Power",
                step: Ju ? Pc(vu, iu) : 0,
                planned: !Ju
              }), (0, aZ.jsx)(Rb, {
                kind: "Power",
                label: bu(`${Bc}batUsed`),
                number: Ju ? `\u26a1 ${mq(vu)}/s` : "\u2014",
                note: bu(`${Bc}batUsedNote`),
                share: Ju ? vu / iu : void 0,
                onExplain: () => {
                  hu(`${Bc}batWhy_used`)
                }
              })]
            }), (0, aZ.jsx)(sc, {
              text: bu(Ku, Vu),
              tone: ru,
              explained: Ou
            }), gu ? (0, aZ.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: bu(`${Bc}rxNotYours`)
            }) : !Ju && (0, aZ.jsxs)(aZ.Fragment, {
              children: [(0, aZ.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, aZ.jsx)(Dc, {
                  kind: "battery",
                  dims: Nu.dims,
                  cap: Du.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: uu => {
                    fu.resize(uu)
                  }
                }), (0, aZ.jsx)(gc, {
                  on: Nu.guide,
                  label: bu(`${Bc}rxGuide`),
                  toggle: () => {
                    fu.toggleGuide()
                  }
                }), Du.baf2BatCanFill && (0, aZ.jsx)(wX.p, {
                  disabled: !wq("battery", Du.baf2BatNeed) || Nu.busy.has("fill"),
                  onClick: () => {
                    fu.tap("fill", (() => {
                      Mu("fill")
                    }))
                  },
                  children: bu(`${Bc}rxFill`)
                })]
              }), (0, aZ.jsx)(Fc, {
                need: Du.baf2BatNeed,
                kind: "battery",
                explain: hu
              })]
            })]
          })]
        })
      })
    }
    const tc = "buildAFactory2Game:",
      xc = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function Tc(uu, Eu) {
      return uu === jq ? null : Eu ? "#4a4440" : uu < Uq ? xc[uu - sq] : uu === Uq ? "#3fd0f0" : uu === Zq ? "#2c3e4c" : "#55585e"
    }

    function Hc(uu) {
      let {
        inner: Eu,
        looks: ju,
        layer: su,
        setLayer: Uu,
        glow: Zu,
        melted: Xu,
        explain: lu
      } = uu;
      const {
        t: qu
      } = (0, oU.A)(), [fu, Cu, bu] = Eu, cu = Math.max(0, Math.min(Cu - 1, su)), Nu = [];
      for (let Yu = 0; Yu < bu; Yu++)
        for (let uu = 0; uu < fu; uu++) {
          var Ou;
          const Eu = null !== (Ou = ju[(cu * bu + Yu) * fu + uu]) && void 0 !== Ou ? Ou : jq,
            su = Tc(Eu, Xu),
            Uu = Eu >= sq && Eu < Uq;
          Nu.push(null === su ? (0, aZ.jsx)("circle", {
            cx: uu + .5,
            cy: Yu + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${uu},${Yu}`) : (0, aZ.jsx)("rect", {
            x: uu + .06,
            y: Yu + .06,
            width: .88,
            height: .88,
            fill: su,
            opacity: Uu && !Xu ? .5 + .5 * Zu : 1,
            onClick: uu => {
              uu.stopPropagation();
              const ju = Vc(Eu);
              lu(ju.key, ju.params)
            }
          }, `${uu},${Yu}`))
        }
      return (0, aZ.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, aZ.jsx)("svg", {
          className: JU()("Baf2RxMapGrid", {
            Melted: Xu
          }),
          viewBox: `0 0 ${Math.max(1,fu)} ${Math.max(1,bu)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": qu(`${tc}rxWhy_core`),
          onClick: () => {
            lu(`${tc}rxWhy_core`, {})
          },
          children: Nu
        }), Cu > 1 && (0, aZ.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, aZ.jsx)("button", {
            type: "button",
            "aria-label": qu(`${tc}rxLayerDown`),
            disabled: cu <= 0,
            onClick: () => {
              Uu(cu - 1)
            },
            children: "\u25bc"
          }), (0, aZ.jsxs)("span", {
            children: [(0, aZ.jsx)("span", {
              className: "HideNarrow",
              children: qu(`${tc}rxLayer`, {
                n: String(cu + 1),
                of: String(Cu)
              })
            }), (0, aZ.jsx)("span", {
              className: "ShowNarrow",
              children: qu(`${tc}rxLayerShort`, {
                n: String(cu + 1),
                of: String(Cu)
              })
            })]
          }), (0, aZ.jsx)("button", {
            type: "button",
            "aria-label": qu(`${tc}rxLayerUp`),
            disabled: cu >= Cu - 1,
            onClick: () => {
              Uu(cu + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Ac = "buildAFactory2Game:",
      nc = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Tl,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Dq,
        kind: "red"
      }],
      yc = [50, Tl, 100];

    function zc(uu) {
      let {
        stats: Eu,
        t: ju,
        explain: su
      } = uu;
      const Uu = qq(Eu),
        Zu = Math.max(1, Eu.fuelHeat, Eu.cooling, Eu.size),
        Xu = [
          ["fuel", `${Ac}rxBarRods`, Eu.fuelHeat],
          ["cooling", `${Ac}rxBarCooling`, Eu.cooling],
          ["size", `${Ac}rxBarSize`, Eu.size]
        ];
      return (0, aZ.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          su(`${Ac}rxWhy_bars`)
        },
        children: [(0, aZ.jsx)("span", {
          className: "Baf2RxMostLine",
          children: ju(`${Ac}rxMost`, {
            amount: mq(Math.min(Eu.fuelHeat, Eu.cooling, Eu.size))
          })
        }), (0, aZ.jsx)("span", {
          className: "Baf2RxMostBars",
          children: Xu.map((uu => {
            let [Eu, su, Xu] = uu;
            return (0, aZ.jsxs)("span", {
              className: JU()("Baf2RxMostBar", Eu, {
                Low: Eu === Uu
              }),
              children: [(0, aZ.jsx)("small", {
                children: ju(su)
              }), (0, aZ.jsx)("i", {
                children: (0, aZ.jsx)("b", {
                  style: {
                    width: 100 * Xu / Zu + "%"
                  }
                })
              })]
            }, Eu)
          }))
        })]
      })
    }

    function Rc(uu) {
      var Eu;
      let {
        view: ju,
        heat: Uu,
        settle: Zu,
        settleLine: Xu,
        settleBad: lu,
        explain: qu
      } = uu;
      const {
        t: fu
      } = (0, oU.A)(), {
        status: Cu
      } = ju, bu = Cu.baf2RxAt.join(","), [cu, Nu] = (0, su.useState)((() => Kc(ju.inner)));
      (0, su.useEffect)((() => {
        Nu(Kc(ju.inner))
      }), [bu, ju.inner[1]]);
      const Ou = null !== (Eu = ju.plan) && void 0 !== Eu ? Eu : Mq(Cu),
        Yu = ju.plan ? ju.plan.powerPerUnit : Cu.baf2RxStats[8],
        hu = null === Uu ? null : "alarm" === (Du = hq(Cu)) ? "red" : "hot" === Du ? "hot" : "warm" === Du ? "warm" : "cold";
      var Du;
      const gu = !Cu.baf2RxFormed && function(uu, Eu) {
          return 0 !== (uu.baf2RxFlags & Eu)
        }(Cu, OE),
        Mu = Cu.baf2RxDamage,
        eu = Cu.baf2RxDamageTrend;
      return (0, aZ.jsxs)("div", {
        className: JU()("Baf2RxCore", null !== hu && void 0 !== hu ? hu : "plan"),
        children: [(0, aZ.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, aZ.jsx)(Hc, {
            inner: ju.inner,
            looks: ju.looks,
            layer: cu,
            setLayer: Nu,
            glow: Cu.baf2RxFormed ? Cu.baf2RxThrottle / 100 : 1,
            melted: gu,
            explain: qu
          }), (0, aZ.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              qu(`${Ac}rxWhy_heat`)
            },
            children: [null !== Uu ? (0, aZ.jsxs)(aZ.Fragment, {
              children: [(0, aZ.jsx)("b", {
                children: fu(`${Ac}rxHeatPct`, {
                  pct: String(Uu)
                })
              }), (0, aZ.jsx)("span", {
                className: JU()("Baf2RxBand", hu),
                children: fu(`${Ac}rxBand_${hu}`)
              })]
            }) : (0, aZ.jsx)("b", {
              children: fu(`${Ac}rxHeat`)
            }), null !== Xu && (0, aZ.jsx)("span", {
              className: JU()("Baf2RxSettle", {
                Bad: lu
              }),
              children: Xu
            }), Mu >= 1 && (0, aZ.jsxs)("span", {
              className: JU()("Baf2RxDamage", eu),
              children: [fu(`${Ac}rxDamageLine`, {
                pct: String(Mu)
              }), " \xb7 ", fu(`${Ac}rxDamage_${eu}`), (0, aZ.jsx)("i", {
                children: (0, aZ.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Mu)}%`
                  }
                })
              })]
            })]
          }), (0, aZ.jsx)(Ec, {
            max: Dq,
            bands: nc,
            ticks: yc,
            now: Uu,
            settle: Zu,
            settleTone: lu ? "bad" : null,
            onExplain: () => {
              qu(`${Ac}rxWhy_heat`)
            }
          })]
        }), (0, aZ.jsx)(zc, {
          stats: Ou,
          t: fu,
          explain: qu
        }), Yu > 0 && (0, aZ.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            qu(`${Ac}rxWhy_perPellet`)
          },
          children: fu(`${Ac}rxPerPellet`, {
            amount: mq(Yu)
          })
        })]
      })
    }

    function uN(uu, Eu) {
      var ju;
      if (!uu.baf2RxStore) return {
        note: Eu(`${Ac}rxUpTo`, {
          amount: mq(uu.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [su, Uu] = uu.baf2RxStore, Zu = Uu > 0 ? su / Uu : 0, Xu = String(Math.floor(100 * Zu)), lu = null !== (ju = uu.baf2RxStoreNetPerS) && void 0 !== ju ? ju : 0, qu = function(uu) {
        var Eu, ju;
        const [su, Uu] = null !== (Eu = uu.baf2RxStore) && void 0 !== Eu ? Eu : [0, 0], Zu = null !== (ju = uu.baf2RxStoreNetPerS) && void 0 !== ju ? ju : 0;
        return Uu > 0 && su >= Uu - 1 ? "running" === uu.baf2RxState ? `${Mc}rxStoreFull` : `${Mc}rxStoreFullOnly` : Zu > .05 ? `${Mc}rxStoreLine` : Zu < -.05 ? "running" === uu.baf2RxState ? `${Mc}rxStoreUsesMore` : `${Mc}rxStoreDraining` : `${Mc}rxStorePct`
      }(uu);
      return {
        note: Eu(qu, qu === `${Ac}rxStoreLine` ? {
          pct: Xu,
          time: pZ(Eu, (Uu - su) / lu)
        } : {
          pct: Xu
        }),
        share: Zu
      }
    }

    function EN(uu) {
      let {
        view: Eu,
        explain: ju,
        preview: su
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)(), {
        status: Zu
      } = Eu, Xu = zl(uq(...Eu.dims)), lu = ac(Zu), qu = Math.min(Math.round(Zu.baf2RxFuel), Xu.fuel), fu = "running" === Zu.baf2RxState, Cu = fu ? Pc(Zu.baf2RxOut, Zu.baf2RxMaxNow) : 0, bu = function(uu, Eu, ju) {
        const su = wc(uu),
          Uu = "cryo" === su.XN,
          Zu = ju ? ju.coolantSecs : su.pct >= 100 && uu.baf2RxOut >= 1 ? dc(uu, uu.baf2RxThrottle).coolantSecs : null;
        let Xu, lu = !1;
        if (su.pct < 100) {
          const ju = 1 === su.makersShort,
            Zu = !Uu && uu.baf2RxCryoOpen ? "OrCryo" : "";
          Xu = su.makersShort > 0 ? Eu(Uu ? `${Ac}rxCryoAddMixer${ju?"":"s"}` : `${Ac}rxWaterAddCondenser${ju?"":"s"}${Zu}`, {
            count: String(su.makersShort)
          }) : Eu(`${Ac}rxWaterNeeds`, {
            rate: hc(su.needPerS)
          })
        } else if (null !== Zu) Xu = Eu(`${Ac}rxWaterRunsOut`, {
          time: pZ(Eu, Zu)
        });
        else if (su.waterBeside > 0) Xu = Eu(`${Ac}rxCryoPlusWater`, {
          rate: hc(su.waterBeside)
        });
        else {
          const uu = function(uu) {
            return uu.inPerS <= 0 ? "rxWaterNoSupply" : uu.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(su);
          lu = "rxWaterNoSupply" === uu, Xu = Eu(`${Ac}${uu}`, {
            amount: mq(su.stored)
          })
        }
        return {
          kind: Uu ? "Cryo" : "Water",
          label: Eu(Uu ? `${Ac}rxCryo` : `${Ac}rxWater`),
          number: `${hc(su.usePerS)}/s`,
          preview: ju ? `${hc(ju.coolPerS)}/s` : null,
          note: Xu,
          tone: "noWater" === uu.baf2RxState ? "danger" : lu ? "warn" : (qu = su.pct, fu = Zu, qu < 100 ? "danger" : null === fu ? null : fu < 300 ? "danger" : "warn"),
          share: su.pct / 100,
          why: Uu ? `${Ac}rxWhy_cryo` : `${Ac}rxWhy_water`,
          short: su.pct < 100
        };
        var qu, fu
      }(Zu, Uu, su), cu = Jq(Zu, Xu.waste, lu), Nu = uN(Zu, Uu), Ou = dc(Zu, Zu.baf2RxTarget), Yu = fu && Math.abs(Ou.settle - Zu.baf2RxHeat) >= 3, hu = su ? su.pelletsPerMin / 60 : null;
      return (0, aZ.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, aZ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, aZ.jsx)(Rb, {
            kind: "Fuel",
            label: Uu(`${Ac}rxFuel`),
            number: String(qu),
            preview: null !== hu && hu > 0 && Zu.baf2RxFuel > 0 ? pZ(Uu, Zu.baf2RxFuel / hu) : null,
            note: Zu.baf2RxFuel <= 0 ? Uu(`${Ac}rxFuelEmpty`) : lu > 0 ? Uu(`${Ac}rxFuelLeft`, {
              time: pZ(Uu, Zu.baf2RxFuel / lu)
            }) : Uu(1 === qu ? `${Ac}rxFuelPellet` : `${Ac}rxFuelPellets`),
            tone: "noFuel" === Zu.baf2RxState ? "danger" : Zu.baf2RxFuel < 2 ? "warn" : null,
            share: Zu.baf2RxFuel / Xu.fuel,
            onExplain: () => {
              ju(`${Ac}rxWhy_fuel`)
            }
          }), (0, aZ.jsx)(Rb, {
            kind: bu.kind,
            label: bu.label,
            number: bu.number,
            preview: bu.preview,
            note: bu.note,
            tone: bu.tone,
            share: bu.share,
            onExplain: () => {
              ju(bu.why)
            }
          })]
        }), (0, aZ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, aZ.jsx)(uc, {
            kind: "Fuel",
            step: Cu,
            short: "noFuel" === Zu.baf2RxState
          }), (0, aZ.jsx)(uc, {
            kind: bu.kind,
            step: Cu,
            short: bu.short || "noWater" === Zu.baf2RxState
          })]
        }), (0, aZ.jsx)(Rc, {
          view: Eu,
          heat: Zu.baf2RxHeat,
          settle: Math.min(Dq, Ou.settle),
          settleLine: Yu ? Uu(`${Ac}rxHeatSettles`, {
            pct: String(Math.round(Ou.settle)),
            time: pZ(Uu, Ou.settleS)
          }) : null,
          settleBad: Ou.settle > 100,
          explain: ju
        }), (0, aZ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, aZ.jsx)(uc, {
            kind: "Power",
            step: Cu
          }), (0, aZ.jsx)(uc, {
            kind: "Waste",
            step: fu && Zu.baf2RxFuel - Zu.baf2RxPu > 0 ? Cu : 0,
            short: cu.full
          })]
        }), (0, aZ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, aZ.jsx)(Rb, {
            kind: "Power",
            label: Uu(`${Ac}rxPowerOut`),
            number: `\u26a1 ${mq(Zu.baf2RxOut)}/s`,
            preview: su ? mq(su.out) : null,
            note: Nu.note,
            share: Nu.share,
            onExplain: () => {
              ju(`${Ac}rxWhy_power`)
            }
          }), (0, aZ.jsx)(Rb, {
            kind: "Waste",
            label: Uu(`${Ac}rxWaste`),
            number: `${Math.floor(Zu.baf2RxWaste)}/${Xu.waste}`,
            note: cu.full ? Uu(`${Ac}rxWasteFull`) : null !== cu.fullInS ? Uu(`${Ac}rxWasteFullIn`, {
              time: pZ(Uu, cu.fullInS)
            }) : Uu(`${Ac}rxWasteSpent`),
            tone: "wasteFull" === Zu.baf2RxState ? "danger" : cu.full ? "warn" : null,
            share: Zu.baf2RxWaste / Xu.waste,
            onExplain: () => {
              ju(`${Ac}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function jN(uu) {
      let {
        view: Eu,
        explain: ju
      } = uu;
      const {
        t: su
      } = (0, oU.A)(), Uu = Eu.plan;
      if (!Uu) return null;
      const Zu = Uu.fuelHeat <= 0 ? null : Uu.cooling > 0 ? Math.min(Dq, 100 * Uu.fuelHeat / Uu.cooling) : Dq,
        Xu = su(`${Ac}rxPlanAtFull`);
      return (0, aZ.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, aZ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, aZ.jsx)(Rb, {
            kind: "Fuel",
            label: su(`${Ac}rxFuel`),
            number: su(`${Ac}rxPlanPerMin`, {
              amount: vq(Uu.pelletsPerMin)
            }),
            note: su(`${Ac}rxPlanPellets`),
            onExplain: () => {
              ju(`${Ac}rxWhy_fuel`)
            }
          }), (0, aZ.jsx)(Rb, {
            kind: "Water",
            label: su(`${Ac}rxWater`),
            number: `${hc(Uu.waterPerS)}/s`,
            note: Eu.status.baf2RxCryoOpen && Uu.waterPerS > 0 ? su(`${Ac}rxPlanOrCryo`, {
              rate: hc(Nq(Uu, zu.e) * zu.l)
            }) : Xu,
            onExplain: () => {
              ju(`${Ac}rxWhy_water`)
            }
          })]
        }), (0, aZ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, aZ.jsx)(uc, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, aZ.jsx)(uc, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, aZ.jsx)(Rc, {
          view: Eu,
          heat: null,
          settle: Zu,
          settleLine: null === Zu ? null : su(`${Ac}rxPlanHeat`, {
            pct: String(Math.round(Zu))
          }),
          settleBad: null !== Zu && Zu > 100,
          explain: ju
        }), (0, aZ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, aZ.jsx)(uc, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, aZ.jsx)(uc, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, aZ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, aZ.jsx)(Rb, {
            kind: "Power",
            label: su(`${Ac}rxPowerOut`),
            number: `\u26a1 ${mq(Uu.max)}/s`,
            note: Xu,
            onExplain: () => {
              ju(`${Ac}rxWhy_power`)
            }
          }), (0, aZ.jsx)(Rb, {
            kind: "Waste",
            label: su(`${Ac}rxWaste`),
            number: su(`${Ac}rxPlanPerMin`, {
              amount: vq(Uu.pelletsPerMin)
            }),
            note: su(`${Ac}rxWasteSpent`),
            onExplain: () => {
              ju(`${Ac}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const sN = "buildAFactory2Game:",
      UN = {
        key: `${sN}rxWaiting`,
        params: {},
        tone: "info"
      };

    function ZN(uu, Eu) {
      return 0 !== (uu.baf2RxFlags & Eu)
    }

    function XN(uu) {
      var Eu, ju;
      let {
        store: Uu,
        close: Zu
      } = uu;
      const {
        t: Xu
      } = (0, oU.A)(), lu = Nc(Uu), {
        explained: qu,
        hinting: fu,
        explain: Cu,
        explainOnce: bu
      } = jc("baf2RxExplained"), cu = (0, su.useCallback)(((uu, Eu) => {
        Cu(Xu(uu, Eu))
      }), [Cu, Xu]), Nu = (0, su.useCallback)(((uu, Eu) => {
        bu(uu, Xu(uu, Eu))
      }), [bu, Xu]), [Ou, Yu] = (0, su.useState)(!1), [hu, Du] = (0, su.useState)(!1), gu = null === lu || void 0 === lu ? void 0 : lu.status, Mu = null === gu || void 0 === gu ? void 0 : gu.baf2RxAt.join(","), eu = !0 === (null === gu || void 0 === gu ? void 0 : gu.baf2RxFormed);
      (0, su.useEffect)((() => {
        Du(!1), Yu(!1)
      }), [Mu, eu]), (0, su.useEffect)((() => (Uu.opened(), () => {
        Uu.closed()
      })), [Uu]);
      const Gu = void 0 !== gu && ZN(gu, DE),
        pu = gu ? eu ? hq(gu) : null !== lu && void 0 !== lu && lu.plan ? function(uu, Eu) {
          if (uu <= 0) return "off";
          if (Eu <= 0) return "alarm";
          const ju = 100 * uu / Eu;
          return ju < 50 ? "calm" : ju < fq ? "warm" : ju <= 100 ? "hot" : "alarm"
        }(lu.plan.fuelHeat, lu.plan.cooling) : "off" : "off",
        wu = gu ? gq(gu) : null,
        Ju = lu ? lu.waiting ? UN : eu ? mc(lu.status) : function(uu) {
          var Eu, ju;
          const {
            status: su
          } = uu;
          return vc({
            left: su.baf2RxNeed.reduce(((uu, Eu) => {
              let [, ju] = Eu;
              return uu + ju
            }), 0),
            bad: su.baf2RxBad,
            rods: null !== (Eu = null === (ju = uu.plan) || void 0 === ju ? void 0 : ju.rods) && void 0 !== Eu ? Eu : 0,
            canFill: ZN(su, YE),
            melted: ZN(su, OE),
            idle: uu.looks.reduce(((uu, Eu) => uu + (Eu === Zq ? 1 : 0)), 0)
          })
        }(lu) : null,
        du = fu && null !== Ju && ("ok" === Ju.tone || "info" === Ju.tone),
        au = gu ? function(uu) {
          const Eu = 0 !== (uu.baf2RxFlags & cE),
            ju = uu.baf2RxHeat < Al;
          return 0 !== (uu.baf2RxFlags & OE) || ju && (Eu || !uu.baf2RxFormed) ? null : uu.baf2RxFormed && !Eu ? {
            key: `${Yq}rxApartScram`,
            params: {}
          } : {
            key: `${Yq}rxApartCooling`,
            params: {
              pct: String(Al)
            }
          }
        }(gu) : null,
        [Pu, ou, ku] = null !== (Eu = null === lu || void 0 === lu ? void 0 : lu.dims) && void 0 !== Eu ? Eu : [0, 0, 0],
        mu = `${Pu}\xd7${ou}\xd7${ku}`;
      return (0, aZ.jsx)(pX.c, {
        close: Zu,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, aZ.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, aZ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, aZ.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, aZ.jsx)(Yc, {
                mood: pu
              }), (0, aZ.jsxs)("div", {
                children: [(0, aZ.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: Xu(`${sN}rxTitle`)
                }), lu && (0, aZ.jsxs)("p", {
                  className: JU()("Baf2RxSubtitle", eu && (null === wu || void 0 === wu ? void 0 : wu.tone)),
                  children: [eu && !Gu ? (0, aZ.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": Xu(`${sN}rxChangeSize`),
                    onClick: () => {
                      if (!gu) return;
                      const uu = ZN(gu, cE);
                      var Eu;
                      (Eu = {
                        scram: uu,
                        heat: gu.baf2RxHeat
                      }).scram && Eu.heat < Al ? Yu(!0) : cu(uu ? `${sN}rxResizeCooling` : `${sN}rxResizeHot`, {
                        pct: String(Al)
                      })
                    },
                    children: [mu, " \u270e"]
                  }) : mu, " \xb7 ", Xu(eu ? null !== (ju = null === wu || void 0 === wu ? void 0 : wu.label) && void 0 !== ju ? ju : `${sN}rxState_running` : `${sN}rxSubPlanShort`)]
                })]
              })]
            }), (0, aZ.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [lu && !Gu && (0, aZ.jsx)(Oc, {
                kind: "reactor",
                busy: lu.busy.has("apart"),
                whyNot: au ? () => {
                  cu(au.key, au.params)
                } : null,
                apart: () => {
                  Uu.tap("apart", (() => {
                    Uu.send("apart")
                  }))
                }
              }), (0, aZ.jsx)(wX.l, {
                onClick: Zu
              })]
            })]
          }), lu && Ju && (0, aZ.jsxs)("div", {
            className: "Baf2RxBody",
            children: [eu ? (0, aZ.jsx)(EN, {
              view: lu,
              explain: cu,
              preview: Jc(lu.status)
            }) : (0, aZ.jsx)(jN, {
              view: lu,
              explain: cu
            }), (0, aZ.jsx)(sc, {
              text: du ? `${oc(Xu,Ju)} ${Xu(`${sN}rxTapHint`)}` : oc(Xu, Ju),
              tone: Ju.tone,
              explained: qu
            }), Gu ? (0, aZ.jsxs)(aZ.Fragment, {
              children: [(0, aZ.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: Xu(`${sN}rxNotYours`)
              }), (0, aZ.jsx)(fc, {
                status: lu.status,
                store: Uu,
                readOnly: !0
              })]
            }) : eu && !hu ? (0, aZ.jsxs)(aZ.Fragment, {
              children: [(0, aZ.jsx)(Sc, {
                view: lu,
                store: Uu,
                explain: cu,
                explainOnce: Nu
              }), void 0 !== lu.status.baf2RxLayout && Xc(lu.status) && (0, aZ.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, aZ.jsx)(fc, {
                  status: lu.status,
                  store: Uu,
                  readOnly: !1,
                  bare: !0
                }), (0, aZ.jsx)(qc, {
                  status: lu.status,
                  store: Uu,
                  busy: lu.busy.has("fill")
                })]
              })]
            }) : (0, aZ.jsxs)(aZ.Fragment, {
              children: [(0, aZ.jsx)(Ic, {
                view: lu,
                store: Uu,
                keepSize: eu ? () => {
                  Du(!1)
                } : void 0
              }), Gq(lu.dims, lu.status.baf2RxDims) && (0, aZ.jsx)(Fc, {
                need: lu.status.baf2RxNeed,
                explain: cu
              }), (0, aZ.jsx)(fc, {
                status: lu.status,
                store: Uu,
                readOnly: !1
              })]
            }), Ou && (0, aZ.jsx)(cc, {
              id: "baf2ResizeTitle",
              title: `${sN}rxResizeConfirmTitle`,
              body: `${sN}rxResizeConfirmBody`,
              yes: `${sN}rxChangeSize`,
              cancel: () => {
                Yu(!1)
              },
              confirm: () => {
                Yu(!1), Du(!0)
              }
            })]
          })]
        })
      })
    }
    class lN {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(uu) {
        this.view = uu;
        for (const Eu of this.listeners) Eu()
      }
      get() {
        return this.view
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
    }

    function qN(uu) {
      let {
        commands: Eu,
        store: ju,
        power: Uu,
        water: Zu,
        reactor: Xu,
        battery: lu,
        collider: qu,
        terminal: fu,
        quests: Cu,
        tutorial: bu,
        close: cu,
        leave: Nu,
        askIslands: Ou,
        showCore: Yu,
        openSocial: hu
      } = uu;
      const {
        userContext: Du
      } = (0, rl.c)(), gu = Vl.featureFlags.useSocialFeatures && Du.isLoggedIn(), [Mu, eu] = (0, su.useState)((() => ju.get()));
      (0, su.useEffect)((() => ju.subscribe((() => {
        eu(ju.get())
      }))), [ju]);
      const Gu = "islands" === (null === Mu || void 0 === Mu ? void 0 : Mu.kind) ? Mu.backToCore : void 0;
      return (0, aZ.jsxs)(FX.Provider, {
        value: Eu,
        children: ["core" === (null === Mu || void 0 === Mu ? void 0 : Mu.kind) && (0, aZ.jsx)(gb, {
          view: Mu.core,
          close: cu,
          askIslands: Ou
        }), "dropMap" === (null === Mu || void 0 === Mu ? void 0 : Mu.kind) && (0, aZ.jsx)(pb, {
          message: Mu.dropMap,
          quests: Cu,
          close: cu,
          leave: Nu
        }), "islands" === (null === Mu || void 0 === Mu ? void 0 : Mu.kind) && (0, aZ.jsx)(Ib, {
          message: Mu.islands,
          arrivedAtMs: Mu.arrivedAtMs,
          close: Gu ? () => {
            Yu(Gu)
          } : cu,
          leave: Nu,
          openSocial: gu ? hu : null
        }), "quests" === (null === Mu || void 0 === Mu ? void 0 : Mu.kind) && (0, aZ.jsx)(iC, {
          store: Cu,
          tutorial: bu,
          close: cu
        }), "transfer" === (null === Mu || void 0 === Mu ? void 0 : Mu.kind) && (0, aZ.jsx)(ZC, {
          message: Mu.transfer,
          arrivedAtMs: Mu.arrivedAtMs,
          close: cu,
          leave: Nu
        }), "power" === (null === Mu || void 0 === Mu ? void 0 : Mu.kind) && (0, aZ.jsx)(vX, {
          store: Uu,
          close: cu
        }), "water" === (null === Mu || void 0 === Mu ? void 0 : Mu.kind) && (0, aZ.jsx)(hl, {
          store: Zu,
          close: cu
        }), "reactor" === (null === Mu || void 0 === Mu ? void 0 : Mu.kind) && (0, aZ.jsx)(XN, {
          store: Xu,
          close: cu
        }), "battery" === (null === Mu || void 0 === Mu ? void 0 : Mu.kind) && (0, aZ.jsx)(Lc, {
          store: lu,
          close: cu
        }), "collider" === (null === Mu || void 0 === Mu ? void 0 : Mu.kind) && (0, aZ.jsx)(gf, {
          store: qu,
          close: cu
        }), "terminal" === (null === Mu || void 0 === Mu ? void 0 : Mu.kind) && (0, aZ.jsx)(zb, {
          store: fu,
          close: cu,
          send: uu => {
            Eu.send(uu)
          }
        })]
      })
    }
    var fN = ju(38813);

    function CN(uu, Eu) {
      return uu.distSq - Eu.distSq
    }
    class bN {
      constructor() {
        this.list = [], this.pool = []
      }
      add(uu, Eu, ju, su) {
        let Uu = this.pool[this.list.length];
        Uu || (Uu = {
          x: 0,
          y: 0,
          distSq: 0,
          element: Eu,
          liftRem: ju,
          dot: su
        }, this.pool.push(Uu)), Uu.x = uu.x, Uu.y = uu.y, Uu.distSq = uu.distSq, Uu.element = Eu, Uu.liftRem = ju, Uu.dot = su, this.list.push(Uu)
      }
    }
    class cN {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = uu, this.sizes = new WeakMap, this.observer = new ResizeObserver((uu => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const Eu of uu) {
            const uu = Eu.borderBoxSize[0];
            "dot" !== Eu.target.dataset.crowded && 0 !== uu.inlineSize && 0 !== uu.blockSize && this.sizes.set(Eu.target, {
              width: uu.inlineSize,
              height: uu.blockSize
            })
          }
        })), this.remPx = 16, this.oN = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.rD = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.rD)
      }
      observe(uu) {
        this.observer.observe(uu)
      }
      unobserve(uu) {
        this.observer.unobserve(uu)
      }
      run(uu) {
        const Eu = uu.list;
        Eu.sort(CN);
        const ju = this.pxPerVw,
          su = this.pxPerVh;
        this.oN.length = 0, this.hud && this.oN.push(...this.hud.boxes(performance.now()));
        for (const Zu of Eu) {
          var Uu;
          const uu = this.sizes.get(Zu.element);
          let Eu = "no";
          if (uu && uu.width > 0) {
            const Uu = Zu.x * ju,
              Xu = Zu.y * su - Zu.liftRem * this.remPx;
            this.fit(Uu, Xu, uu.width, uu.height) || (Eu = Zu.dot && this.fit(Uu, Xu, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (Uu = Zu.element.dataset.crowded) && void 0 !== Uu ? Uu : "no") !== Eu && ("no" === Eu ? delete Zu.element.dataset.crowded : Zu.element.dataset.crowded = Eu), "hidden" !== Eu && (0, fN.d)(Zu.element, Zu.x, Zu.y)
        }
        Eu.length = 0
      }
      fit(uu, Eu, ju, su) {
        const Uu = uu - ju / 2,
          Zu = uu + ju / 2,
          Xu = Eu - su,
          lu = this.oN;
        for (let qu = 0; qu < lu.length; qu += 4)
          if (Uu < lu[qu + 1] - 2 && Zu > lu[qu] + 2 && Xu < lu[qu + 3] - 2 && Eu > lu[qu + 2] + 2) return !1;
        return lu.push(Uu, Zu, Xu, Eu), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.rD)
      }
    }
    const NN = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class ON {
      constructor() {
        this.cards = NN.map((uu => document.getElementsByClassName(uu))), this.watched = NN.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(uu) {
        uu - this.refreshedAt > 1e3 && (this.refreshedAt = uu, this.stale = !0);
        for (let ju = 0; ju < this.cards.length; ju++) {
          var Eu;
          const uu = null !== (Eu = this.cards[ju][0]) && void 0 !== Eu ? Eu : null;
          uu !== this.watched[ju] && this.watch(ju, uu)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let uu = 0; uu < this.watched.length; uu++) this.watch(uu, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const uu = this.list;
        uu.length = 0;
        for (const Eu of this.watched) {
          if (!Eu || Eu.closest(".NoRoom")) continue;
          const ju = Eu.getBoundingClientRect();
          let su = ju.top,
            Uu = ju.bottom;
          if (Eu === this.watched[0] && this.hud) {
            const uu = this.hud.getBoundingClientRect();
            su = Math.max(su, uu.top), Uu = Math.min(Uu, uu.bottom)
          }
          ju.width > 0 && Uu > su && uu.push(ju.left, ju.right, su, Uu)
        }
      }
      watch(uu, Eu) {
        const ju = this.watched[uu];
        var su, Uu;
        (ju && this.sizes.unobserve(ju), this.watched[uu] = Eu, this.stale = !0, Eu && this.sizes.observe(Eu), 0 === uu) && (null === (su = this.hud) || void 0 === su || su.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Uu = null === Eu || void 0 === Eu ? void 0 : Eu.closest(".Baf2QuestHud")) && void 0 !== Uu ? Uu : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var YN = ju(38820);
    class hN {
      constructor(uu) {
        this.onElement = uu, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(uu) {
        const Eu = [];
        for (let ju = 0; ju + 4 < uu.length; ju += 5) {
          const su = [uu[ju], uu[ju + 1], uu[ju + 2]];
          Eu.push({
            key: su.join(","),
            pos: su,
            status: ZU[uu[ju + 3]],
            kind: PE[uu[ju + 4]]
          })
        }
        this.markers = Eu, this.keys = new Set(Eu.map((uu => {
          let {
            key: Eu
          } = uu;
          return Eu
        }))), this.notify()
      }
      covers(uu) {
        return this.keys.has(uu)
      }
      get() {
        return this.markers
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      bind(uu) {
        let Eu = this.refs.get(uu);
        return Eu || (Eu = Eu => {
          const ju = this.elements.get(uu);
          var su, Uu;
          ju && (null === (su = this.onElement) || void 0 === su || su.call(this, ju, !1));
          Eu ? (this.elements.set(uu, Eu), null === (Uu = this.onElement) || void 0 === Uu || Uu.call(this, Eu, !0)) : (this.elements.delete(uu), this.refs.delete(uu))
        }, this.refs.set(uu, Eu)), Eu
      }
      onAfterRender(uu, Eu, ju) {
        for (const su of this.markers) {
          const Uu = this.elements.get(su.key);
          if (!Uu) continue;
          const Zu = (0, YN.c)(Uu, uu, Eu, su.pos, 1.05, 24);
          Zu && ju.add(Zu, Uu, .45, !0)
        }
      }
      notify() {
        for (const uu of this.listeners) uu()
      }
    }
    const DN = {
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
    const gN = (0, su.memo)((function(uu) {
        let {
          status: Eu,
          kind: ju,
          bindRef: su
        } = uu;
        const {
          t: Uu
        } = (0, oU.A)(), Zu = function(uu, Eu) {
          var ju;
          if ("noFuel" === uu) {
            var su, Uu;
            const uu = null === (su = VE[Eu]) || void 0 === su || null === (Uu = su.fuels) || void 0 === Uu ? void 0 : Uu.find((uu => sj.includes(uu)));
            return null !== uu && void 0 !== uu ? uu : DN.noFuel
          }
          return void 0 !== (null === (ju = VE[Eu]) || void 0 === ju ? void 0 : ju.cryoMade) ? "noOutlet" === uu ? "Fluid Pipe" : "noInput" === uu ? "Biomass" : DN[uu] : DN[uu]
        }(Eu, ju);
        return (0, aZ.jsxs)("div", {
          className: JU()("Baf2StallMarker", Eu),
          ref: su,
          hidden: !0,
          children: [Zu && (0, aZ.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, aZ.jsx)(mU.d, {
              itemName: Zu,
              amount: 0
            })
          }), (0, aZ.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === Eu ? "?" : "!"
          }), (0, aZ.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: Uu(`buildAFactory2Game:stallTag_${Eu}`)
          })]
        })
      })),
      MN = (0, su.memo)((function(uu) {
        let {
          controller: Eu
        } = uu;
        const [ju, Uu] = (0, su.useState)((() => Eu.get()));
        return (0, su.useEffect)((() => (Uu(Eu.get()), Eu.subscribe((() => {
          Uu(Eu.get())
        })))), [Eu]), (0, aZ.jsx)("div", {
          className: "Baf2StallMarkers",
          children: ju.map((uu => (0, aZ.jsx)(gN, {
            status: uu.status,
            kind: uu.kind,
            bindRef: Eu.bind(uu.key)
          }, uu.key)))
        })
      })),
      eN = Yj.i + 150;
    class GN {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(uu, Eu) {
        const ju = Eu - uu;
        null === this.offset || ju < this.offset ? this.offset = ju : this.offset = Math.min(ju, this.offset + .02 * (Eu - this.sampledAt)), this.sampledAt = Eu
      }
      toLocal(uu) {
        var Eu;
        return uu + (null !== (Eu = this.offset) && void 0 !== Eu ? Eu : 0) + eN
      }
    }
    var pN = ju(38825);
    const wN = 15 * Math.PI / 180,
      JN = Math.SQRT2,
      dN = [4, 2];

    function aN(uu, Eu) {
      const ju = [1 / 0, 1 / 0, 1 / 0],
        su = [-1 / 0, -1 / 0, -1 / 0];
      for (const qu of uu)
        for (let uu = 0; uu < 3; uu++) ju[uu] = Math.min(ju[uu], qu[uu]), su[uu] = Math.max(su[uu], qu[uu]);
      const Uu = (ju[0] + su[0]) / 2,
        Zu = (ju[1] + su[1]) / 2,
        Xu = (ju[2] + su[2]) / 2;
      let lu = 0;
      for (const qu of uu) lu = Math.max(lu, Math.hypot(qu[0] - Uu, qu[1] - Zu, qu[2] - Xu));
      return {
        x: Uu,
        y: Zu,
        z: Xu,
        r: lu + Eu
      }
    }

    function PN(uu, Eu, ju) {
      const su = Eu.x - uu.x,
        Uu = Eu.y - uu.y,
        Zu = Eu.z - uu.z,
        Xu = Math.sqrt(su * su + Uu * Uu + Zu * Zu);
      if (Xu <= Eu.r + 8) return 1;
      const lu = Eu.r / Xu,
        qu = Math.sqrt(1 - lu * lu),
        fu = qu < -uu.cosHalf,
        Cu = (su * uu.dx + Uu * uu.dy + Zu * uu.dz) / Xu;
      if (!fu && Cu < uu.cosHalf * qu - uu.sinHalf * lu) return 0;
      const bu = ju * JN * uu.frameMs * uu.pxPerBlock / (Xu - Eu.r);
      for (let cu = 0; cu < dN.length; cu++)
        if (bu * dN[cu] <= 1) return dN[cu];
      return 1
    }

    function oN(uu, Eu) {
      return {
        name: uu,
        at: Eu,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const kN = [0, 0, 0];

    function mN(uu, Eu, ju) {
      let [, su, Uu, Zu, Xu, lu] = Eu;
      const qu = Yj.d * (null !== Xu && void 0 !== Xu ? Xu : 1),
        fu = [];
      for (let Nu = 0; Nu < su.length; Nu += 3) fu.push([su[Nu] + .5, su[Nu + 1] + .65, su[Nu + 2] + .5]);
      const Cu = [];
      for (let Nu = 0; Nu < fu.length - 1; Nu++) {
        const [uu, Eu] = [fu[Nu], fu[Nu + 1]];
        Cu.push([(uu[0] + Eu[0]) / 2, (uu[1] + Eu[1]) / 2, (uu[2] + Eu[2]) / 2])
      }
      const bu = fu.slice(1, -1),
        cu = new Uint8Array(bu.length);
      for (const Nu of null !== lu && void 0 !== lu ? lu : []) cu[Nu >> 1] |= 1 & Nu ? 2 : 1;
      return {
        island: uu,
        length: bu.length,
        loop: Zu,
        cellsPerMs: qu,
        edges: Cu,
        wb: bu,
        bounds: aN([...Cu, ...bu], .3),
        changed: !0,
        culled: !1,
        hide: cu,
        items: Uu.map((uu => {
          let [Eu, su] = uu;
          return oN(Eu, (0, Yj.z)(Eu, su, ju, qu).at)
        }))
      }
    }

    function vN(uu, Eu) {
      const {
        items: ju
      } = uu;
      if (0 === ju.length) return;
      const su = uu.length / uu.cellsPerMs,
        Uu = Math.floor((Eu - ju[0].at) / su) - 1;
      if (Uu > 0)
        for (const Zu of ju) Zu.at += Uu * su
    }

    function KN(uu, Eu) {
      const ju = Math.min(Math.floor(Eu), uu.length - 1),
        su = uu.hide[ju];
      return 0 !== su && 0 !== (su & (Eu - ju < .5 ? 1 : 2))
    }

    function VN(uu, Eu) {
      const ju = Math.min(Math.floor(Eu), uu.length - 1),
        su = Eu - ju,
        Uu = su < .5,
        Zu = Uu ? uu.edges[ju] : uu.wb[ju],
        Xu = Uu ? uu.wb[ju] : uu.edges[ju + 1],
        lu = Uu ? 2 * su : 2 * su - 1;
      kN[0] = Zu[0] + (Xu[0] - Zu[0]) * lu, kN[1] = Zu[1] + (Xu[1] - Zu[1]) * lu, kN[2] = Zu[2] + (Xu[2] - Zu[2]) * lu
    }
    const rN = Math.PI / 4;
    class QN {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new GN, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.rD = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(uu) {
        const Eu = performance.now();
        this.clock.sample(uu.baf2BeltLinesAt, Eu), this.queue(uu.baf2BeltLinesAt, uu, 0, null, null, 0), this.applyDue(Eu)
      }
      onMoves(uu) {
        const Eu = performance.now(),
          ju = uu.baf2BeltMovesAt;
        this.clock.sample(ju, Eu);
        for (const [su, Uu, Zu, Xu] of uu.baf2BeltMoveList) null === Uu ? this.queue(ju - Zu, null, su, null, null, null !== Xu && void 0 !== Xu ? Xu : 0) : this.queue(ju - Zu, null, su, Uu, null !== Xu && void 0 !== Xu ? Xu : null, 0);
        this.applyDue(Eu)
      }
      start(uu) {
        this.pool = new pN.c(uu, {
          scale: .3,
          yaw: rN
        }, 64), this.rD(), window.addEventListener("resize", this.rD)
      }
      onAfterRender(uu) {
        const {
          pool: Eu
        } = this;
        if (!Eu) return;
        const ju = performance.now(),
          su = ju - this.lastRenderAt;
        this.lastRenderAt = ju, su < 100 && (this.frameMs += .1 * (su - this.frameMs));
        const Uu = ju + this.frameMs;
        this.applyDue(Uu);
        const Zu = uu.cameraPosition,
          Xu = Eu.follow(Zu);
        this.setView(uu, Zu);
        const lu = this.frame++;
        for (let qu = 0; qu < this.shown.length; qu++) {
          const uu = this.shown[qu],
            ju = PN(this.view, uu.bounds, uu.cellsPerMs),
            su = uu.culled && 0 !== ju;
          if (uu.culled = 0 === ju, !Xu && !uu.changed && !su && (0 === ju || (lu + qu) % ju !== 0)) continue;
          uu.changed = !1, uu.loop && (vN(uu, Uu), (0, Yj.t)(uu.items, uu.length, Uu, uu.cellsPerMs));
          let Zu = uu.length;
          for (let lu = 0; lu < uu.items.length; lu++) {
            const ju = uu.items[lu],
              su = (0, Yj.D)(ju.at, Zu, Uu, uu.cellsPerMs);
            if (Zu = su - Yj.m, KN(uu, su)) {
              null === ju.kind || ju.hidden || (ju.kind.hide(ju.slot), ju.hidden = !0);
              continue
            }
            let qu = ju.kind;
            if (null === qu) {
              if (qu = Eu.kindOf(ju.name), null === qu) continue;
              ju.kind = qu, ju.slot = qu.take(), ju.hidden = !0, ju.drawn = NaN
            } else if (su === ju.drawn && !ju.hidden && !Xu) continue;
            VN(uu, su), qu.write(ju.slot, kN[0], kN[1], kN[2]), ju.hidden = !1, ju.drawn = su
          }
        }
        Eu.commit()
      }
      dispose() {
        var uu;
        window.removeEventListener("resize", this.rD), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (uu = this.pool) || void 0 === uu || uu.dispose(), this.pool = null
      }
      setView(uu, Eu) {
        const {
          cameraDir: ju,
          lastDir: su
        } = this, Uu = uu.cameraDirection;
        for (let Cu = 0; Cu < 3; Cu++) su[Cu] = ju[Cu], ju[Cu] = Uu[Cu];
        const Zu = ju[0] * su[0] + ju[1] * su[1] + ju[2] * su[2],
          Xu = Number.isNaN(Zu) ? 0 : Math.acos(Math.min(1, Math.max(-1, Zu))),
          {
            width: lu,
            height: qu
          } = this,
          fu = uu.tanHalfFovX;
        ! function(uu, Eu, ju, su, Uu, Zu, Xu) {
          let lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          uu.x = Eu[0], uu.y = Eu[1], uu.z = Eu[2], uu.dx = ju[0], uu.dy = ju[1], uu.dz = ju[2];
          const qu = Math.min(Math.PI, Math.atan(Math.sqrt(su * su + Uu * Uu)) + wN + lu);
          uu.cosHalf = Math.cos(qu), uu.sinHalf = Math.sin(qu), uu.pxPerBlock = Zu / (2 * Uu), uu.frameMs = Xu
        }(this.view, Eu, ju, fu, fu * qu / lu, qu * window.devicePixelRatio, this.frameMs, Xu)
      }
      queue(uu, Eu, ju, su, Uu, Zu) {
        const Xu = Math.max(this.clock.toLocal(uu), this.lastPendingAt);
        this.lastPendingAt = Xu, this.pending.push({
          at: Xu,
          lines: Eu,
          line: ju,
          name: su,
          pos: Uu,
          idx: Zu
        })
      }
      applyDue(uu) {
        const {
          pending: Eu
        } = this;
        for (; this.pendingHead < Eu.length && Eu[this.pendingHead].at <= uu;) {
          const uu = Eu[this.pendingHead++];
          if (uu.lines) this.applyLines(uu.lines, uu.at), uu.lines = null;
          else {
            const Eu = this.lines.get(uu.line);
            Eu && this.applyMove(Eu, uu, uu.at)
          }
        }
        this.pendingHead === Eu.length ? (Eu.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > Eu.length && (Eu.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(uu, Eu) {
        this.clearIsland(uu.baf2BeltIsland);
        for (const ju of uu.baf2BeltLineList) this.lines.set(ju[0], mN(uu.baf2BeltIsland, ju, Eu));
        this.shown = [...this.lines.values()]
      }
      applyMove(uu, Eu, ju) {
        let {
          name: su,
          pos: Uu,
          idx: Zu
        } = Eu;
        uu.changed = !0, uu.loop && (vN(uu, ju), (0, Yj.t)(uu.items, uu.length, ju, uu.cellsPerMs)), null !== su && null !== Uu ? (0, Yj.v)(uu.items, uu.length, oN(su, ju), Uu, ju, uu.cellsPerMs) : null !== su ? uu.items.push(oN(su, ju)) : uu.items.length > Zu && this.release((0, Yj.E)(uu.items, uu.length, ju, uu.cellsPerMs, Zu))
      }
      clearIsland(uu) {
        for (const [Eu, ju] of this.lines)
          if (ju.island === uu) {
            for (const uu of ju.items) this.release(uu);
            this.lines.delete(Eu)
          }
      }
      release(uu) {
        null !== uu.kind && (uu.kind.release(uu.slot), uu.kind = null, uu.slot = -1, uu.hidden = !0, uu.drawn = NaN)
      }
    }
    var iN = ju(36990),
      WN = ju(38834);

    function SN(uu) {
      let {
        depth: Eu,
        store: ju,
        t: Uu
      } = uu;
      const Zu = function(uu) {
        const [Eu, ju] = (0, su.useState)(uu.lastPlayerY());
        return (0, XC.f)(WU, ju), (0, su.useEffect)((() => {
          ju(uu.lastPlayerY())
        }), [uu]), Eu
      }(ju);
      if (null === Zu) return null;
      const [Xu, lu] = Eu, qu = Zu > Xu ? Xu : null !== lu && Zu < lu ? lu : null, fu = {
        y: GZ(Zu),
        target: null === qu ? "" : GZ(qu)
      };
      return (0, aZ.jsx)("span", {
        className: JU()("Baf2QuestDepth", {
          Reached: null === qu
        }),
        children: Uu(`${CC}${null===qu?"questDepthReached":"questDepth"}`, fu)
      })
    }

    function IN(uu) {
      let {
        also: Eu,
        view: ju,
        t: su
      } = uu;
      return (0, aZ.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, aZ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, aZ.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, aZ.jsx)("strong", {
            children: su(`${CC}questAlsoDownHere`)
          }), (0, aZ.jsx)("span", {
            className: "Baf2QuestChips",
            children: Eu.map((uu => {
              let [Eu, Uu, Zu, Xu] = uu;
              return (0, aZ.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": su(`${CC}questAlsoItem`, {
                  item: cC(su, ju.itemNames[Eu], Eu),
                  have: String(Uu),
                  need: String(Zu)
                }),
                children: [(0, aZ.jsx)(YC, {
                  item: Eu
                }), (0, aZ.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${Uu}/${Zu}`
                }), null !== Xu && (0, aZ.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: su(`${CC}questAlsoDepth`, {
                    y: GZ(Xu)
                  })
                })]
              }, Eu)
            }))
          })]
        })]
      })
    }
    var FN = ju(3601);

    function BN(uu) {
      let {
        expanded: Eu,
        inventoryOpen: ju,
        children: Uu
      } = uu;
      const Zu = (0, su.useRef)(null);
      return (0, su.useEffect)((() => {
        const uu = Zu.current,
          Eu = null === uu || void 0 === uu ? void 0 : uu.closest(".RightElements"),
          su = null === uu || void 0 === uu ? void 0 : uu.firstElementChild;
        if (!uu || !Eu || !su) return;
        return (0, WN.e)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [Eu, su], (() => {
          const Uu = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === Uu.length) return;
          const Zu = Math.max(...Uu.map((uu => uu.getBoundingClientRect().bottom))),
            Xu = Eu.getBoundingClientRect(),
            lu = ju ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (lu) {
            const Eu = parseFloat(getComputedStyle(su).marginLeft) + parseFloat(getComputedStyle(su).marginRight),
              ju = Xu.right - lu.getBoundingClientRect().right - 8 - Eu;
            uu.style.setProperty("--baf2-quest-room", `${ju}px`), uu.classList.toggle("NoRoom", ju < 150)
          } else uu.style.removeProperty("--baf2-quest-room"), uu.classList.remove("NoRoom");
          const qu = Zu - Xu.top + 8,
            fu = function(uu, Eu, ju) {
              const su = Eu.getBoundingClientRect(),
                Uu = uu.getBoundingClientRect(),
                Zu = (0, FN.e)(Uu.left, Uu.right, su.top + ju);
              if (null !== Zu && Zu < su.bottom) return Zu - su.top;
              return su.height - (parseFloat(getComputedStyle(Eu).paddingBottom) || 0)
            }(uu, Eu, qu) - 8,
            Cu = window.innerHeight / 2 - Xu.top,
            {
              top: bu,
              maxHeight: cu
            } = function(uu, Eu, ju, su, Uu) {
              const Zu = Math.min(ju, Math.max(0, Eu - uu)),
                Xu = Uu ? uu : Math.max(uu, Math.min(su - Zu / 2, Eu - Zu));
              return {
                top: Xu,
                maxHeight: Math.max(0, Eu - Xu)
              }
            }(qu, fu, function(uu) {
              const Eu = uu.firstElementChild,
                ju = Eu ? Eu.scrollHeight - Eu.clientHeight : 0;
              return uu.getBoundingClientRect().height + Math.max(0, ju)
            }(su), Cu, dZ());
          uu.style.top = `${bu}px`, uu.style.maxHeight = `${cu}px`
        }))
      }), [ju]), (0, aZ.jsx)("div", {
        ref: Zu,
        className: JU()("Baf2QuestHud", {
          Expanded: Eu
        }),
        children: Uu
      })
    }

    function LN(uu) {
      let {
        amount: Eu,
        t: ju
      } = uu;
      return (0, aZ.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, aZ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, aZ.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: ju(`${CC}questStepsDone`, {
            amount: String(Eu)
          })
        })]
      })
    }

    function tN(uu) {
      let {
        pulse: Eu
      } = uu;
      return 0 === Eu ? null : (0, aZ.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, Eu)
    }

    function xN(uu) {
      var Eu;
      let {
        store: ju
      } = uu;
      const Uu = (0, XC.g)(iU, ju.get()),
        [Zu, Xu] = (0, su.useState)(!1),
        {
          t: lu
        } = (0, oU.A)(),
        qu = (0, wZ.d)(JZ),
        {
          openInGameMenuName: fu,
          openEverythingMenuName: Cu
        } = (0, GU.l)(["openInGameMenuName", "openEverythingMenuName"]),
        bu = "inventory" === fu && null === Cu,
        cu = null !== fu && !bu || null !== Cu;
      if (! function(uu) {
          return null !== uu.name || null !== uu.side
        }(Uu) || cu || "off" === Uu.tutorial) return null;
      const Nu = tU(Uu.rows),
        Ou = Nu.filter((uu => uu.done)).length,
        Yu = function(uu, Eu) {
          const ju = HU(uu);
          let su = 0;
          return uu.filter(((uu, Uu) => !!uu.justFinished || !(uu.done || Uu < ju || su > Eu) && (su++, !0)))
        }(Uu.rows, qu ? 0 : 2),
        hu = qu ? Yu : function(uu, Eu) {
          const ju = Eu.filter((uu => !uu.justFinished));
          if (ju.length < 2) return [...Eu];
          const su = uu.indexOf(ju[0]),
            Uu = uu.indexOf(ju[ju.length - 1]),
            Zu = new Set(tU(uu));
          return uu.filter(((uu, ju) => Eu.includes(uu) || uu.done && Zu.has(uu) && ju > su && ju < Uu))
        }(Uu.rows, Yu),
        Du = Zu ? Uu.rows : hu,
        gu = Zu || qu ? [] : function(uu, Eu) {
          const ju = new Array(Eu.length + 1).fill(0),
            su = new Set(tU(uu));
          let Uu = 0;
          for (const Zu of uu) Uu < Eu.length && Zu === Eu[Uu] ? Uu++ : Zu.done && su.has(Zu) && ju[Uu]++;
          return ju
        }(Uu.rows, hu),
        Mu = Zu || hu.length < Uu.rows.length || null !== Uu.reward,
        eu = LU(Uu),
        Gu = eu ? lu(`${CC}questLineComplete`) : Uu.tier ? gC(lu, Uu.tier) : lu(`${CC}currentQuest`),
        pu = function(uu) {
          var Eu, ju;
          if (LU(uu)) return null;
          const su = null === (Eu = uu.chapters) || void 0 === Eu ? void 0 : Eu.find((Eu => {
            let [ju] = Eu;
            return ju === uu.tier
          }));
          if (!su) return null;
          const Uu = su[1].filter((uu => !uu[4]));
          if (0 === Uu.length) return null;
          const Zu = null === (ju = uu.name) || void 0 === ju ? void 0 : ju[0],
            Xu = uu => Uu.findIndex((Eu => Eu[0] === Zu && (!uu || !Eu[3]))),
            lu = Xu(!0),
            qu = lu >= 0 ? lu : Xu(!1);
          if (qu >= 0) return [qu + 1, Uu.length];
          const fu = Uu.filter((uu => uu[3])).length;
          return [Math.min(fu + 1, Uu.length), Uu.length]
        }(Uu);
      return (0, aZ.jsx)(iN.h, {
        placement: "topRight",
        children: (0, aZ.jsx)(BN, {
          expanded: Zu,
          inventoryOpen: bu,
          children: (0, aZ.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: bC,
            children: [null !== Uu.name && (0, aZ.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, aZ.jsx)(tN, {
                pulse: Uu.pulse
              }), (0, aZ.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, aZ.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [Gu, pu && (0, aZ.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": lu(`${CC}questPlaceLabel`, {
                      n: String(pu[0]),
                      total: String(pu[1])
                    }),
                    children: lu(`${CC}questPlace`, {
                      n: String(pu[0]),
                      total: String(pu[1])
                    })
                  }), Uu.tier && Uu.core && !eu && (0, aZ.jsx)(MC, {
                    core: Uu.core,
                    t: lu
                  })]
                })
              }), (0, aZ.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: lu(`${CC}${Uu.name[0]}`, NC(Uu.name[1]))
              }), (Nu.length > 1 || Mu) && (0, aZ.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [Nu.length > 1 && (0, aZ.jsx)(eC, {
                  rows: Nu,
                  t: lu
                }), Mu && (0, aZ.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": Zu,
                  onClick: () => {
                    Xu(!Zu)
                  },
                  children: [(0, aZ.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: lu(`${CC}questStepsToggle`, {
                      done: String(Ou),
                      total: String(Nu.length)
                    })
                  }), (0, aZ.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: Zu ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, aZ.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [Du.map(((uu, Eu) => {
                  var Zu;
                  const Xu = uu.current && Uu.depth;
                  return (0, aZ.jsxs)(su.Fragment, {
                    children: [(null !== (Zu = gu[Eu]) && void 0 !== Zu ? Zu : 0) > 0 && (0, aZ.jsx)(LN, {
                      amount: gu[Eu],
                      t: lu
                    }), (0, aZ.jsx)(GC, {
                      row: uu,
                      view: Uu,
                      t: lu,
                      extra: Xu && (0, aZ.jsx)(SN, {
                        depth: Xu,
                        store: ju,
                        t: lu
                      })
                    })]
                  }, uu.id)
                })), (null !== (Eu = gu[Du.length]) && void 0 !== Eu ? Eu : 0) > 0 && (0, aZ.jsx)(LN, {
                  amount: gu[Du.length],
                  t: lu
                }), Uu.also.length > 0 && (0, aZ.jsx)(IN, {
                  also: Uu.also,
                  view: Uu,
                  t: lu
                })]
              }), Zu && Uu.reward && (0, aZ.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [lu(`${CC}questReward`), (0, aZ.jsx)(YC, {
                  item: Uu.reward
                }), cC(lu, Uu.itemNames[Uu.reward], Uu.reward)]
              })]
            }), Uu.side && (0, aZ.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [FU(Uu, Date.now()) && (0, aZ.jsx)(tN, {
                pulse: Uu.sideCameUpAt
              }), (0, aZ.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: lu(`${CC}questSide`)
              }), (0, aZ.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: lu(`${CC}${Uu.side.name[0]}`, NC(Uu.side.name[1]))
              }), (0, aZ.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, aZ.jsx)(GC, {
                  row: Uu.side.row,
                  view: Uu,
                  t: lu
                })
              })]
            })]
          })
        })
      })
    }
    const TN = "baf2ToastView";
    class HN {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = uu, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: uu,
          holdMs: Eu
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const uu = this.dropCovered();
          uu && this.show(uu.message, uu.holdMs)
        }), 250));
        const ju = this.dropCovered();
        null !== ju && (ju.holdMs > 0 || "baf2ToastCelebrate" === ju.message.baf2ToastStyle) && "baf2ToastCelebrate" !== uu.baf2ToastStyle && this.show(ju.message, ju.holdMs);
        const su = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== uu.baf2ToastStyle && su > 0) return this.pending = {
          message: uu,
          holdMs: Eu
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const uu = this.pending;
          this.pending = null, uu && this.present(uu.message, uu.holdMs)
        }), su));
        this.present(uu, Eu)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(uu, Eu) {
        this.clearTimers(), this.pending = null;
        const ju = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: uu.baf2ToastText,
          style: uu.baf2ToastStyle,
          swapped: ju,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === uu.baf2ToastStyle ? 1500 : Eu), this.TY();
        const su = Math.min(8e3, Math.max(1e3, uu.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), su)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.TY(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.TY()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const uu = this.covering;
        return this.covering = null, uu
      }
      TY() {
        rU.h.TY(TN, this.view, !0)
      }
    }
    var AN = ju(65);
    const nN = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function yN(uu) {
      let {
        store: Eu
      } = uu;
      const ju = (0, XC.g)(TN, Eu.get()),
        {
          openInGameMenuName: su,
          openEverythingMenuName: Uu
        } = (0, GU.l)(["openInGameMenuName", "openEverythingMenuName"]),
        Zu = ju && (0, aZ.jsxs)("div", {
          className: JU()("Baf2Toast", nN[ju.style], {
            Swapped: ju.swapped,
            Leaving: ju.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === ju.style && (0, aZ.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, aZ.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, aZ.jsx)(vU.d, {
              text: ju.text
            })
          })]
        }, ju.id);
      return null !== su && null === Uu ? (0, AN.createPortal)((0, aZ.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: Zu
      }), document.body) : (0, aZ.jsx)(iN.h, {
        children: Zu
      })
    }
    const zN = "baf2AreaView";
    class RN {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.dl = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.dl = null
      }
      arrive(uu, Eu) {
        Eu && function(uu) {
          return "home" === uu.baf2AreaPlace && void 0 !== uu.baf2AreaNameText
        }(uu) ? this.dl = uu : this.show(uu)
      }
      release() {
        const uu = this.dl;
        null !== uu && this.show(uu)
      }
      show(uu) {
        this.clearTimer(), this.dl = null;
        const Eu = void 0 === uu.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: uu,
          ms: Eu
        }, this.TY(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.TY()
        }), Eu)
      }
      dispose() {
        this.clearTimer(), this.dl = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      TY() {
        rU.h.TY(zN, this.view, !0)
      }
    }

    function uO(uu) {
      var Eu;
      let {
        store: ju
      } = uu;
      const {
        t: su
      } = (0, oU.A)(), Uu = (0, XC.g)(zN, ju.get());
      if (!Uu) return null;
      const {
        area: Zu
      } = Uu, Xu = Zu.baf2AreaResetMinutes;
      return (0, aZ.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": Zu.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${Uu.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, aZ.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), Zu.baf2AreaHeading && (0, aZ.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: su(Zu.baf2AreaHeading)
        }), (0, aZ.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (Eu = Zu.baf2AreaNameText) && void 0 !== Eu ? Eu : su(Zu.baf2AreaName)
        }), Zu.baf2AreaNote && (0, aZ.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: su(Zu.baf2AreaNote)
        }), void 0 !== Xu && (0, aZ.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: su("buildAFactory2Game:areaWildsReset", {
            time: pZ(su, 60 * Xu)
          })
        })]
      }, Uu.id)
    }
    const EO = "baf2GearGauge";
    class jO {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      gM(uu) {
        var Eu;
        if (this.clearLinger(), null === uu.gearPowerKind) return void this.set(null);
        const ju = "jetpack" === uu.gearPowerKind && (su = uu.gearChargeState, Uu = uu.gearCharge, "flying" === su || "charging" === su || "outOfCharge" === su || "ceiling" === su || "offPlot" === su || "noPower" === su && Uu <= 0);
        var su, Uu;
        const Zu = !0 === (null === (Eu = this.view) || void 0 === Eu ? void 0 : Eu.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          Xu = ju || "jetpack" === uu.gearPowerKind && Zu;
        this.set({
          gauge: uu,
          jetShown: Xu
        }), Xu && !ju && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(uu) {
        this.view = uu, rU.h.TY(EO, uu, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const sO = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function UO(uu) {
      let {
        store: Eu
      } = uu;
      const ju = (0, XC.g)(EO, Eu.get());
      return ju ? "jetpack" === ju.gauge.gearPowerKind ? (0, aZ.jsx)(ZO, {
        view: ju
      }) : (0, aZ.jsx)(XO, {
        gauge: ju.gauge
      }) : null
    }

    function ZO(uu) {
      let {
        view: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)(), {
        gauge: su
      } = Eu, Uu = su.gearChargeMax > 0 ? Math.max(0, Math.min(1, su.gearCharge / su.gearChargeMax)) : 0, Zu = sO[su.gearChargeState], Xu = Zu ? ju(Zu) : null;
      return (0, aZ.jsxs)("div", {
        className: JU()("Baf2JetArc", {
          Shown: Eu.jetShown,
          Low: Uu < .2,
          Warm: Uu >= .2 && Uu < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - Uu)
        },
        "aria-hidden": !Eu.jetShown,
        children: [(0, aZ.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, aZ.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: lO,
            pathLength: 100
          }), (0, aZ.jsx)("path", {
            className: "Baf2JetArcFill",
            d: lO,
            pathLength: 100
          })]
        }), (0, aZ.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * Uu), "%"]
        }), Xu && (0, aZ.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: Xu
        })]
      })
    }

    function XO(uu) {
      let {
        gauge: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)(), su = function(uu, Eu) {
        switch (Eu.gearPowerKind) {
          case "skyPack":
            return uu("buildAFactory2Game:gearSkyPack", {
              charge: Eu.gearCharge,
              max: Eu.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return uu("buildAFactory2Game:gearIslandDraw", {
              power: yu(Eu.gearIslandPower),
              cost: yu(Eu.gearCostPerUse)
            });
          case "barrier":
            return uu("buildAFactory2Game:gearBarrier", {
              shield: Math.round(Eu.gearCharge),
              max: Eu.gearChargeMax,
              power: yu(Eu.gearIslandPower)
            });
          default:
            return null
        }
      }(ju, Eu);
      return null === su ? null : (0, aZ.jsx)(iN.h, {
        children: (0, aZ.jsx)("div", {
          className: JU()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === Eu.gearChargeState || "outOfCharge" === Eu.gearChargeState
          }),
          role: "status",
          children: su
        })
      })
    }
    const lO = (() => {
      const uu = uu => {
        const Eu = uu * Math.PI / 180;
        return `${(40*Math.cos(Eu)).toFixed(2)} ${(40*Math.sin(Eu)).toFixed(2)}`
      };
      return `M ${uu(160)} A 40 40 0 1 1 ${uu(380)}`
    })();
    class qO {
      constructor(uu) {
        this.onElement = uu, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      gM(uu) {
        let Eu = uu.baf2LabelsReset || uu.baf2LabelsIsland !== this.island;
        Eu && (this.labels.clear(), this.island = uu.baf2LabelsIsland);
        for (const [ju, su, Uu, Zu, Xu] of uu.baf2LabelsList) {
          const uu = `${ju},${su},${Uu}`,
            lu = this.labels.get(uu);
          null === Zu ? Eu = this.labels.delete(uu) || Eu : lu && lu.item === Zu && (lu.count === Xu || lu.count >= 0 && Xu >= 0) ? lu.count !== Xu && (lu.count = Xu, this.writeCount(uu, Xu)) : (this.labels.set(uu, {
            key: uu,
            pos: [ju, su, Uu],
            item: Zu,
            count: Xu
          }), this.writeCount(uu, Xu), Eu = !0)
        }
        if (this.changes++, Eu) {
          this.snapshot = [...this.labels.values()];
          for (const uu of this.listeners) uu()
        }
      }
      bindCount(uu) {
        const Eu = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${uu}`;
        let ju = this.countRefs.get(Eu);
        return ju || (ju = ju => {
          var su, Uu;
          ju ? (this.countElements.set(Eu, ju), this.writeCount(uu, null !== (su = null === (Uu = this.labels.get(uu)) || void 0 === Uu ? void 0 : Uu.count) && void 0 !== su ? su : -1)) : (this.countElements.delete(Eu), this.countRefs.delete(Eu))
        }, this.countRefs.set(Eu, ju)), ju
      }
      setCountWords(uu) {
        this.countWords = uu;
        for (const [Eu, ju] of this.labels) this.writePart(`words|${Eu}`, uu(ju.count), ju.count)
      }
      writeCount(uu, Eu) {
        this.writePart(`bare|${uu}`, eZ(Eu), Eu), this.countElements.has(`words|${uu}`) && this.writePart(`words|${uu}`, this.countWords(Eu), Eu)
      }
      writePart(uu, Eu, ju) {
        const su = this.countElements.get(uu);
        if (!su || ju < 0) return;
        const Uu = su.firstChild;
        Uu && 3 === Uu.nodeType && !Uu.nextSibling ? Uu.nodeValue !== Eu && (Uu.nodeValue = Eu) : su.textContent !== Eu && (su.textContent = Eu)
      }
      list() {
        return this.snapshot
      }
      at(uu) {
        return this.labels.get(`${uu[0]},${uu[1]},${uu[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      bind(uu) {
        let Eu = this.refs.get(uu);
        return Eu || (Eu = Eu => {
          const ju = this.elements.get(uu);
          var su, Uu;
          ju && (null === (su = this.onElement) || void 0 === su || su.call(this, ju, !1));
          Eu ? (this.elements.set(uu, Eu), null === (Uu = this.onElement) || void 0 === Uu || Uu.call(this, Eu, !0)) : (this.elements.delete(uu), this.refs.delete(uu))
        }, this.refs.set(uu, Eu)), Eu
      }
      onAfterRender(uu, Eu, ju, su) {
        for (const Uu of this.snapshot) {
          const Zu = this.elements.get(Uu.key);
          if (!Zu) continue;
          if (su(Uu.key)) {
            (0, fN.f)(Zu, !0);
            continue
          }
          const Xu = (0, YN.c)(Zu, uu, Eu, Uu.pos, 1.1, 24);
          Xu && ju.add(Xu, Zu, 0, !1)
        }
      }
    }
    const fO = (0, su.memo)((function(uu) {
        let {
          item: Eu
        } = uu;
        return (0, aZ.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, aZ.jsx)(mU.d, {
            itemName: Eu,
            amount: 0
          })
        })
      })),
      CO = (0, su.memo)((function(uu) {
        let {
          label: Eu,
          bindRef: ju,
          countRef: su,
          wordsRef: Uu
        } = uu;
        return (0, aZ.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: ju,
          hidden: !0,
          children: [(0, aZ.jsx)(fO, {
            item: Eu.item
          }), Eu.count >= 0 && (0, aZ.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, aZ.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: Uu
            }), (0, aZ.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: su
            })]
          })]
        })
      })),
      bO = (0, su.memo)((function(uu) {
        let {
          store: Eu
        } = uu;
        const {
          t: ju
        } = (0, oU.A)(), [Uu, Zu] = (0, su.useState)((() => Eu.list()));
        return (0, su.useEffect)((() => (Zu(Eu.list()), Eu.subscribe((() => {
          Zu(Eu.list())
        })))), [Eu]), (0, su.useEffect)((() => {
          Eu.setCountWords((uu => ju("buildAFactory2Game:labelSiloCount", {
            count: eZ(uu)
          })))
        }), [Eu, ju]), (0, aZ.jsx)("div", {
          className: "Baf2IslandLabels",
          children: Uu.map((uu => -2 === uu.count ? null : (0, aZ.jsx)(CO, {
            label: uu,
            bindRef: Eu.bind(uu.key),
            countRef: Eu.bindCount(uu.key),
            wordsRef: Eu.bindCount(uu.key, "words")
          }, uu.key)))
        })
      })),
      cO = {
        read: () => !0,
        write: () => {}
      };

    function NO(uu) {
      return `${uu[0]},${uu[1]},${uu[2]}`
    }

    function OO(uu) {
      let [Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu] = uu;
      const Nu = void 0 === bu || void 0 === cu ? function(uu) {
        return [Math.floor((uu - 1) / 2), 0]
      }(Zu) : [bu, cu];
      return {
        kind: 0 === qu ? "reactor" : "battery",
        box: Bj([Eu, ju, su], Uu, Zu, Xu, lu, Nu),
        formed: 1 === fu,
        level: Cu
      }
    }
    class YO {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cO;
        this.guideSetting = uu, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = uu.read()
      }
      gM(uu) {
        var Eu;
        const ju = new Map;
        for (const su of uu.baf2RxPlanList) {
          const uu = OO(su);
          ju.set(NO(uu.box.ctrl), uu)
        }
        this.plans = ju, this.layouts = new Map((null !== (Eu = uu.baf2RxLayouts) && void 0 !== Eu ? Eu : []).map((uu => {
          let [Eu, ju, su, Uu] = uu;
          return [NO([Eu, ju, su]), Uu]
        }))), this.predicted.clear(), uu.baf2RxFormedAt && (this.formed = {
          ctrl: uu.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const su of [...this.startersOff]) {
          const uu = ju.get(su);
          uu && !uu.formed || this.startersOff.delete(su)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((uu => this.planByKey(uu)))
      }
      planAt(uu) {
        return this.planByKey(NO(uu))
      }
      predictSize(uu, Eu) {
        this.predicted.set(NO(uu), Eu), this.changed()
      }
      unpredict(uu) {
        this.predicted.delete(NO(uu)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(uu) {
        var Eu;
        const ju = NO(uu);
        return this.predicted.has(ju) ? null : null !== (Eu = this.layouts.get(ju)) && void 0 !== Eu ? Eu : null
      }
      showsStarter(uu) {
        return !this.startersOff.has(NO(uu))
      }
      setStarter(uu, Eu) {
        const ju = NO(uu);
        Eu ? this.startersOff.delete(ju) : this.startersOff.add(ju), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(uu) {
        this.guide = uu, this.guideSetting.write(uu), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(uu) {
        const Eu = this.plans.get(uu);
        if (!Eu) return null;
        const ju = this.predicted.get(uu);
        return ju ? {
          ...Eu,
          box: tj(Eu.box, Eu.kind, ju[0], ju[1], ju[2])
        } : Eu
      }
      changed() {
        this.version++;
        for (const uu of this.listeners) uu()
      }
    }
    var hO = ju(202);
    const DO = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function gO(uu, Eu, ju, su) {
      const Uu = uu.length / 3;
      for (let Zu = 0; Zu < DO.length / 3; Zu++) uu.push(DO[3 * Zu] * su[0] / 2 + ju[0], DO[3 * Zu + 1] * su[1] / 2 + ju[1], DO[3 * Zu + 2] * su[2] / 2 + ju[2]);
      for (let Zu = Uu; Zu < Uu + 24; Zu += 4) Eu.push(Zu, Zu + 1, Zu + 2, Zu, Zu + 2, Zu + 3)
    }

    function MO(uu, Eu, ju) {
      const su = Eu[0][0],
        Uu = [],
        Zu = [];
      for (const [Xu, lu] of Eu) gO(Uu, Zu, [Xu[0] - su[0], Xu[1] - su[1], Xu[2] - su[2]], lu);
      return uu.createGameMesh({
        positions: Uu,
        indices: Zu
      }, ju, su)
    }

    function eO(uu, Eu) {
      const ju = uu.w - 2,
        su = uu.d - 2;
      return 1 === function(uu, Eu, ju, su) {
        const [Uu, Zu, Xu] = uu;
        if (Number(Uu <= 2) + Number(Zu <= 2) + Number(Xu <= 2) >= 2) return function(uu, Eu, ju) {
          return (uu + Eu + ju) % 2 === 0 ? 1 : 3
        }(Eu, ju, su);
        const [lu, qu] = Uu >= Zu && Uu >= Xu ? [ju, su] : Zu >= Xu ? [Eu, su] : [Eu, ju];
        return lu % 2 === 0 && qu % 2 === 0 ? 1 : 3
      }([ju, uu.h - 2, su], Eu % ju, Math.floor(Eu / (ju * su)), Math.floor(Eu / ju) % su) ? "rod" : "channel"
    }

    function GO(uu, Eu, ju) {
      if ("reactor" !== uu.kind || uu.formed || !Eu) return !1;
      const su = Hj(uu.box);
      for (let Uu = 0; Uu < su; Uu++) {
        const uu = ju(Uu);
        if (null !== uu && kj(uu)) return !1
      }
      return !0
    }

    function pO(uu, Eu, ju, su, Uu) {
      var Zu;
      let Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const lu = us(uu.box, Eu),
        qu = Zs(uu.kind, lu, ju);
      if ("wrong" === qu || "blocked" === qu) return "wrong";
      if (!Uu) return null;
      if ("inside" === lu && "reactor" === uu.kind && "Air" === mj(ju)) {
        if (null !== Xu) {
          var fu;
          const ju = Uc[Zc(Xu, Es(uu.box, Eu))];
          return ju && null !== (fu = aq(ju)) && void 0 !== fu ? fu : null
        }
        if (su) return eO(uu.box, Es(uu.box, Eu))
      }
      if ("missing" !== qu) return null;
      const Cu = Xs(uu.kind, lu);
      return null === Cu ? null : null !== (Zu = aq(Cu)) && void 0 !== Zu ? Zu : null
    }
    const wO = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function JO(uu, Eu, ju) {
      const su = ju => {
        const su = Eu(zj(uu.box, ju));
        return null !== su && function(uu, Eu) {
          return "reactor" !== uu.kind || Eu !== nj(uu.box) && "inside" !== us(uu.box, Eu)
        }(uu, ju) && "ok" !== Zs(uu.kind, us(uu.box, ju), su)
      };
      if (ju) {
        const Zu = Rj(uu.box, [Math.floor(ju[0]), Math.floor(ju[1]), Math.floor(ju[2])]);
        if (Zu >= 0 && (su(Zu) || (Uu = Zu, "reactor" === uu.kind && "inside" === us(uu.box, Uu) && "Air" === Eu(zj(uu.box, Uu))))) return Zu
      }
      var Uu;
      const Zu = Hj(uu.box);
      for (let Xu = 0; Xu < Zu; Xu++)
        if (su(Xu)) return Xu;
      return -1
    }

    function dO(uu, Eu) {
      return Math.floor(Eu / (uu.w * uu.d))
    }

    function aO(uu, Eu, ju) {
      return ju >= 0 && dO(uu, Eu) > dO(uu, ju)
    }

    function PO(uu, Eu) {
      return Eu >= 0 && uu.h >= 3 && dO(uu, Eu) === uu.h - 1
    }

    function oO(uu) {
      const Eu = mj(uu);
      return Eu === gj || "Collider" === Eu || "Laser" === Eu || Eu.startsWith("_Collider ")
    }

    function kO(uu, Eu, ju, su) {
      if (su(uu)) return null;
      if (!wO.every((Eu => {
          let [su, Uu, Zu] = Eu;
          const Xu = ju([uu[0] + su, uu[1] + Uu, uu[2] + Zu]);
          return null !== Xu && !Wj("reactor", Xu) && "reactor" !== vj(Xu)
        }))) return null;
      const Uu = Sj("reactor").min,
        Zu = Bj([uu[0], uu[1], uu[2]], function(uu, Eu) {
          const ju = Eu[0] - (uu[0] + .5),
            su = Eu[2] - (uu[2] + .5);
          return Math.abs(ju) >= Math.abs(su) ? ju >= 0 ? 2 : 4 : su >= 0 ? 1 : 3
        }(uu, Eu), Uu, Uu, Uu, Lj("reactor", Uu)),
        Xu = nj(Zu);
      let lu = !0;
      for (let qu = 0; qu < Hj(Zu) && lu; qu++) {
        if (qu === Xu) continue;
        const uu = zj(Zu, qu),
          Eu = ju(uu);
        lu = !su(uu) && (null === Eu || !oO(Eu))
      }
      return {
        box: Zu,
        fits: lu
      }
    }
    const mO = dq,
      vO = "baf2Goal",
      KO = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      VO = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      rO = .4;

    function QO(uu, Eu) {
      let [ju, su, Uu] = uu;
      const Zu = Vq([ju - .02, su - .02, Uu - .02], [ju + 1.02, su + 1.02, Uu + 1.02], .07);
      return Eu && (Zu.push([
        [ju + .5, su + 1 + .7, Uu + .5],
        [.08, 1.4, .08]
      ]), Zu.push([
        [ju + .5, su + 1 + 1.4 + .2, Uu + .5],
        [rO, rO, rO]
      ])), Zu
    }

    function iO(uu, Eu) {
      let [ju, su, Uu] = Eu;
      return uu.isBlockInLoadedChunk(ju, su, Uu) ? uu.blockIdToBlockName(uu.getBlockId(ju, su, Uu)) : null
    }
    let WO = null;
    const SO = new Set;
    let IO = null;

    function FO(uu) {
      WO = uu;
      for (const Eu of SO) Eu(uu)
    }
    class BO {
      constructor(uu) {
        var Eu;
        this.plans = uu, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (Eu = uu => {
          var Eu, ju;
          this.setGoal(null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.goal) && void 0 !== Eu ? Eu : null, null !== (ju = null === uu || void 0 === uu ? void 0 : uu.startsBattery) && void 0 !== ju && ju)
        }, IO ??= [rU.h.subscribe("setDirectionArrow", (uu => {
          let {
            id: Eu,
            position: ju,
            text: su
          } = uu;
          Eu === vO && FO({
            goal: [Math.floor(ju[0]), Math.floor(ju[1]), Math.floor(ju[2])],
            startsBattery: JSON.stringify(null !== su && void 0 !== su ? su : null).includes("arrowStartBattery")
          })
        })), rU.h.subscribe("clearDirectionArrow", (uu => {
          let {
            id: Eu
          } = uu;
          null !== Eu && Eu !== vO || FO(null)
        }))], SO.add(Eu), Eu(WO), () => {
          SO.delete(Eu)
        })
      }
      onAfterRender(uu, Eu) {
        const ju = performance.now();
        if (this.cues.length > 0) {
          const Eu = .55 + .45 * Math.sin(ju / 1100 * Math.PI * 2);
          for (const ju of this.cues) uu.setGameMesh(ju, {
            visibility: Eu
          })
        }
        if (ju - this.lastCheckMs < 150) return;
        this.lastCheckMs = ju;
        const su = this.plans.all().filter((uu => {
            const [ju, su, Uu] = uu.box.ctrl;
            return (!uu.formed || null !== this.plans.layoutOf(uu.box.ctrl)) && (ju - Eu[0]) ** 2 + (su - Eu[1]) ** 2 + (Uu - Eu[2]) ** 2 <= 2304
          })),
          Uu = function(uu, Eu) {
            const ju = hO.e.hO,
              su = new Map;
            for (const Zu of Eu) {
              const Eu = zj(Zu.box, 0),
                Xu = zj(Zu.box, Hj(Zu.box) - 1),
                lu = [Math.min(Eu[0], Xu[0]), Math.min(Eu[1], Xu[1]), Math.min(Eu[2], Xu[2])].map((uu => Math.floor(uu / ju))),
                qu = [Math.max(Eu[0], Xu[0]), Math.max(Eu[1], Xu[1]), Math.max(Eu[2], Xu[2])].map((uu => Math.floor(uu / ju)));
              for (let ju = lu[0]; ju <= qu[0]; ju++)
                for (let Eu = lu[1]; Eu <= qu[1]; Eu++)
                  for (let Zu = lu[2]; Zu <= qu[2]; Zu++) {
                    var Uu;
                    su.set(`${ju},${Eu},${Zu}`, null !== (Uu = uu.getChunkVersion(ju, Eu, Zu)) && void 0 !== Uu ? Uu : -1)
                  }
            }
            return su
          }(uu, su);
        this.plans.getVersion() === this.storeVersion && (function(uu, Eu) {
          if (uu.size !== Eu.size) return !1;
          for (const [ju, su] of uu)
            if (Eu.get(ju) !== su) return !1;
          return !0
        }(Uu, this.chunkVersions) || ju - this.lastRescanMs < 600) || (this.lastRescanMs = ju, this.storeVersion = this.plans.getVersion(), this.chunkVersions = Uu, this.redraw(uu, su))
      }
      dispose(uu) {
        this.unwatch(), WO = null, this.clearMeshes(uu), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(uu, Eu) {
        var ju;
        (null === uu || void 0 === uu ? void 0 : uu.join()) === (null === (ju = this.goal) || void 0 === ju ? void 0 : ju.join()) && Eu === this.startsBattery || (this.goal = uu, this.startsBattery = Eu, this.storeVersion = -1)
      }
      redraw(uu, Eu) {
        const ju = Eu => iO(uu, Eu),
          su = new Map,
          Uu = [],
          Zu = this.plans.guideOn();
        for (const fu of Eu) {
          const uu = Zu && GO(fu, this.plans.showsStarter(fu.box.ctrl), (uu => ju(zj(fu.box, uu)))),
            Eu = "reactor" === fu.kind ? this.plans.layoutOf(fu.box.ctrl) : null,
            Xu = Zu && !fu.formed ? JO(fu, ju, this.goal) : -1;
          Xu >= 0 && Uu.push([zj(fu.box, Xu), PO(fu.box, Xu)]);
          const lu = Hj(fu.box);
          for (let Uu = 0; Uu < lu; Uu++) {
            const lu = zj(fu.box, Uu),
              qu = ju(lu),
              Cu = null === qu ? null : pO(fu, Uu, qu, uu, Zu, Eu);
            if (null !== Cu) {
              const uu = "wrong" !== Cu && aO(fu.box, Uu, Xu),
                Eu = uu ? `${Cu}Dim` : Cu;
              let ju = su.get(Eu);
              ju || (ju = {
                draw: {
                  ghost: Cu,
                  dim: uu
                },
                list: []
              }, su.set(Eu, ju)), ju.list.push(lu)
            }
          }
        }
        if (Zu && this.startsBattery && this.goal) {
          const [uu, Eu, Uu] = this.goal, Zu = [];
          for (const [su, Xu, lu] of KO) {
            const qu = [uu + su, Eu + Xu, Uu + lu];
            "Air" === ju(qu) && Zu.push(qu)
          }
          if (Zu.length > 0) {
            var Xu;
            const uu = null !== (Xu = su.get("cell")) && void 0 !== Xu ? Xu : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            uu.list.push(...Zu), su.set("cell", uu)
          }
        }
        const lu = [...su.keys()].sort(),
          qu = [...lu.map((uu => `${uu}:${su.get(uu).list.join(";")}`)), `cue:${Uu.join(";")}`].join("|");
        if (qu !== this.shownKey) {
          this.shownKey = qu, this.clearMeshes(uu);
          for (const Eu of lu) {
            const {
              draw: ju,
              list: Uu
            } = su.get(Eu);
            this.meshes.push(this.build(uu, ju, Uu))
          }
          for (const [Eu, ju] of Uu) this.cues.push(MO(uu, QO(Eu, ju), VO))
        }
      }
      build(uu, Eu, ju) {
        let {
          ghost: su,
          dim: Uu
        } = Eu;
        const {
          size: Zu,
          colour: Xu,
          alpha: lu
        } = mO[su], qu = ju[0], fu = [], Cu = [];
        for (const [bu, cu, Nu] of ju) gO(fu, Cu, [bu - qu[0] + .5, cu - qu[1] + .5, Nu - qu[2] + .5], [Zu, Zu, Zu]);
        return uu.createGameMesh({
          positions: fu,
          indices: Cu
        }, {
          rgb: Xu,
          alpha: lu * (Uu ? .3 : 1)
        }, qu)
      }
      clearMeshes(uu) {
        for (const Eu of [...this.meshes, ...this.cues]) uu.disposeGameMesh(Eu);
        this.meshes = [], this.cues = []
      }
    }
    const LO = [.56, .83, 1],
      tO = [1, .3, .25];
    class xO {
      constructor(uu) {
        this.plans = uu, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(uu, Eu, ju) {
        var su;
        const Uu = performance.now();
        if (Uu - this.lastCheckMs < 150) return;
        this.lastCheckMs = Uu;
        const Zu = Eu => iO(uu, Eu),
          Xu = null === (su = uu.yEu(Eu)) || void 0 === su ? void 0 : su.name,
          lu = Xu && "Reactor Frame" === mj(Xu) ? uu.getTargetedBlock() : null,
          qu = lu ? [lu.xY[0], lu.xY[1], lu.xY[2]] : null,
          fu = null !== qu && "Air" === Zu(qu) && qu.every(((uu, Eu) => Math.abs(uu + .5 - ju[Eu]) <= 8)) ? kO(qu, ju, Zu, (uu => this.inPlan(uu))) : null,
          Cu = fu ? `${fu.box.ctrl.join()}|${fu.box.rot}|${fu.fits}` : "";
        Cu !== this.shownKey && this.show(uu, Cu, fu)
      }
      dispose(uu) {
        this.clear(uu), this.shownKey = ""
      }
      inPlan(uu) {
        return this.plans.all().some((Eu => Rj(Eu.box, uu) >= 0))
      }
      show(uu, Eu, ju) {
        if (this.clear(uu), this.shownKey = Eu, !ju) return;
        const {
          box: su,
          fits: Uu
        } = ju, Zu = Uu ? LO : tO, {
          lo: Xu,
          hi: lu
        } = Kq(su);
        this.meshes.push(MO(uu, Vq(Xu, lu, .05), {
          rgb: Zu,
          alpha: 1
        }));
        const qu = [],
          fu = zj(su, 0)[1];
        for (let Cu = 0; Cu < su.w * su.d; Cu++) {
          const [uu, , Eu] = zj(su, Cu);
          qu.push([
            [uu + .5, fu + .02 + .01, Eu + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(MO(uu, qu, {
          rgb: Zu,
          alpha: .25
        }))
      }
      clear(uu) {
        for (const Eu of this.meshes) uu.disposeGameMesh(Eu);
        this.meshes = []
      }
    }
    const TO = "buildAFactory2Game:";

    function HO(uu, Eu, ju) {
      const su = uu => {
          const [ju, su, Uu] = uu.box.ctrl;
          return ju === Eu[0] && su === Eu[1] && Uu === Eu[2]
        },
        Uu = uu.find((uu => su(uu) || Rj(uu.box, Eu) >= 0));
      if (!Uu) return null;
      const Zu = function(uu, Eu, ju) {
        const {
          w: su,
          h: Uu,
          d: Zu
        } = uu.box, Xu = "reactor" === uu.kind ? `${TO}rxTitle` : `${TO}batTitle`;
        if (uu.formed) return {
          key: `${TO}lookPlanFormed`,
          kindKey: Xu,
          w: su,
          h: Uu,
          d: Zu,
          count: 0
        };
        let lu = 0,
          qu = 0;
        for (let Cu = 0; Cu < Hj(uu.box); Cu++) {
          const Eu = ju(zj(uu.box, Cu)),
            su = null === Eu ? "ok" : Zs(uu.kind, us(uu.box, Cu), Eu);
          lu += "missing" === su ? 1 : 0, qu += "wrong" === su || "blocked" === su ? 1 : 0
        }
        const fu = function(uu, Eu, ju) {
          if (Eu < 0 || null === ju) return;
          const su = us(uu.box, Eu),
            Uu = Zs(uu.kind, su, ju);
          return "blocked" === Uu ? `${TO}lookWhy_blocked` : "wrong" === Uu ? "ctrl" === su ? `${TO}lookWhy_ctrl` : `${TO}lookWhy_reactor_${su}` : void 0
        }(uu, Rj(uu.box, Eu), ju([Eu[0], Eu[1], Eu[2]]));
        if (lu > 0) return {
          key: `${TO}lookPlanToBuild`,
          kindKey: Xu,
          w: su,
          h: Uu,
          d: Zu,
          count: lu,
          why: fu
        };
        if (qu > 0) return {
          key: `${TO}lookPlanTakeOut`,
          kindKey: Xu,
          w: su,
          h: Uu,
          d: Zu,
          count: qu,
          why: fu
        };
        return {
          key: "reactor" === uu.kind ? `${TO}lookPlanNoRods` : `${TO}lookPlanDone`,
          kindKey: Xu,
          w: su,
          h: Uu,
          d: Zu,
          count: 0
        }
      }(Uu, Eu, ju);
      return "reactor" === Uu.kind && su(Uu) ? {
        ...Zu,
        ctrl: !0
      } : Zu
    }

    function AO(uu, Eu) {
      return uu === Eu || null !== uu && null !== Eu && uu.key === Eu.key && uu.kindKey === Eu.kindKey && uu.w === Eu.w && uu.h === Eu.h && uu.d === Eu.d && uu.count === Eu.count && uu.why === Eu.why && uu.ctrl === Eu.ctrl
    }

    function nO() {
      return performance.now()
    }
    class yO {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nO;
        this.ticket = uu, this.sent = Eu, this.backstopMs = ju, this.now = su, this.queuedAt = void 0, this.queuedAt = su()
      }
      answered() {
        const uu = this.now(),
          Eu = this.sent.leftAt(this.ticket);
        return null !== Eu && uu - Eu > 4e3 || uu - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class zO {
      constructor() {
        this.echoes = []
      }
      add(uu) {
        this.echoes = this.echoes.filter((uu => !uu.answered())), this.echoes.push(uu)
      }
      answered() {
        var uu, Eu;
        return null === (uu = null === (Eu = this.echoes.at(-1)) || void 0 === Eu ? void 0 : Eu.answered()) || void 0 === uu || uu
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((uu => uu.answered()))
      }
      age() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.echoes.at(-1)) || void 0 === Eu ? void 0 : Eu.age()) && void 0 !== uu ? uu : null
      }
      clear() {
        this.echoes = []
      }
    }
    class RO {
      constructor(uu) {
        this.send = uu, this.value = null, this.sent = null, this.echoes = new zO, this.down = !1, this.timer = null
      }
      shown(uu) {
        return null === this.value ? uu : this.down || this.value !== this.sent ? this.value : uu === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), uu) : this.value
      }
      pendingFor(uu) {
        return null !== this.value && this.value === this.sent && uu !== this.value ? this.echoes.age() : null
      }
      assume(uu, Eu) {
        this.disarm(), this.down = !1, this.value = uu, this.sent = uu, this.echoes.clear(), this.echoes.add(Eu)
      }
      press() {
        this.down = !0
      }
      drag(uu) {
        this.value = uu, this.arm(this.down ? 1e3 : 400)
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
      arm(uu) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), uu)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class uY {
      constructor() {
        this.pending = new Map
      }
      set(uu, Eu, ju) {
        var su;
        const Uu = null !== (su = this.pending.get(uu)) && void 0 !== su ? su : {
          on: Eu,
          echoes: new zO
        };
        Uu.on = Eu, Uu.echoes.add(ju), this.pending.set(uu, Uu)
      }
      shown(uu) {
        let Eu = uu;
        for (const [ju, {
            on: su,
            echoes: Uu
          }] of this.pending) 0 !== (uu & ju) === su && Uu.agreeCounts() || Uu.answered() ? this.pending.delete(ju) : Eu = su ? Eu | ju : Eu & ~ju;
        return Eu
      }
      pendingMask() {
        let uu = 0;
        for (const Eu of this.pending.keys()) uu |= Eu;
        return uu
      }
      pendingFor(uu) {
        let Eu = null;
        for (const [su, {
            on: Uu,
            echoes: Zu
          }] of this.pending) {
          if (void 0 !== uu && 0 !== (uu & su) === Uu) continue;
          const Xu = Zu.age();
          var ju;
          if (null !== Xu) Eu = Math.max(null !== (ju = Eu) && void 0 !== ju ? ju : 0, Xu)
        }
        return Eu
      }
      clear() {
        this.pending.clear()
      }
    }
    class EY {
      constructor() {
        this.dims = null, this.echoes = new zO, this.unmet = null
      }
      shown(uu) {
        var Eu;
        return this.dims && (jY(this.dims, uu) && this.echoes.agreeCounts() || this.echoes.answered()) && (jY(this.dims, uu) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (Eu = this.dims) && void 0 !== Eu ? Eu : uu
      }
      takeUnmet() {
        const uu = this.unmet;
        return this.unmet = null, uu
      }
      set(uu, Eu) {
        this.dims = uu, this.echoes.add(Eu)
      }
      pendingFor(uu) {
        return null === this.dims || uu && jY(this.dims, uu) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function jY(uu, Eu) {
      return uu[0] === Eu[0] && uu[1] === Eu[1] && uu[2] === Eu[2]
    }
    class sY {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nO;
        this.now = uu, this.taps = new Map
      }
      tap(uu, Eu, ju) {
        return !this.busy(uu) && (this.taps.set(uu, {
          at: this.now(),
          done: Eu
        }), ju(), !0)
      }
      settle(uu) {
        for (const [Eu, ju] of [...this.taps]) ju.done(uu) && this.taps.delete(Eu)
      }
      busy(uu) {
        const Eu = this.taps.get(uu);
        return !!Eu && (!(this.now() - Eu.at >= 3e3) || (this.taps.delete(uu), !1))
      }
      busyIds() {
        const uu = new Set;
        for (const Eu of [...this.taps.keys()]) this.busy(Eu) && uu.add(Eu);
        return uu
      }
      clear() {
        this.taps.clear()
      }
    }

    function UY(uu) {
      return {
        send: Eu => uu.track(Eu),
        sendUrgent: (Eu, ju) => uu.track(Eu, {
          urgent: !0,
          supersedes: ju
        }),
        leftAt: Eu => uu.leftAt(Eu),
        holdReserve: () => uu.holdUrgentReserve(),
        answerMs: rX
      }
    }

    function ZY() {
      return performance.now()
    }

    function XY(uu) {
      const Eu = uu.baf2RxNeed.map((uu => {
        let [Eu, ju] = uu;
        return [Eu, ju]
      }));
      return JSON.stringify([uu.baf2RxFormed, Eu, uu.baf2RxBad, uu.baf2RxCells])
    }

    function lY(uu, Eu) {
      const ju = 0 !== (Eu & cE),
        su = 0 !== (uu.baf2RxFlags & cE);
      return !ju || su || "running" !== uu.baf2RxState && "idle" !== uu.baf2RxState ? !ju && su && "scram" === uu.baf2RxState && uu.baf2RxFuel > 0 ? "idle" : uu.baf2RxState : "scram"
    }

    function qY(uu) {
      return JSON.stringify([uu.baf2BatFormed, uu.baf2BatNeed, uu.baf2BatBad])
    }

    function fY(uu) {
      return uu.join(",")
    }
    class CY {
      constructor() {
        this.listeners = new Set
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      notify() {
        for (const uu of this.listeners) uu()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class bY {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(uu, Eu) {
        this.lastAt = uu, this.lastUntil = uu + Eu
      }
      answered(uu) {
        return this.lastAt >= uu || uu < this.lastUntil
      }
    }
    class cY {
      constructor(uu, Eu) {
        this.link = uu, this.now = Eu, this.hold = new EY, this.picked = null, this.notTaken = null
      }
      shown(uu) {
        const Eu = this.hold.shown(uu);
        if (this.hold.takeUnmet() && this.picked) {
          var ju;
          const {
            plans: Eu,
            ctrl: su,
            at: Uu
          } = this.picked;
          this.picked = null, Eu.unpredict(su), null === (ju = this.notTaken) || void 0 === ju || ju.call(this, uu, Uu)
        }
        return Eu
      }
      pendingFor(uu) {
        return this.hold.pendingFor(uu)
      }
      Hc(uu, Eu, ju) {
        uu.predictSize(Eu, ju), this.picked = {
          plans: uu,
          ctrl: Eu,
          at: this.now()
        };
        const su = this.link.send(bE(Eu, "plan", ...ju));
        this.hold.set(ju, new yO(su, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class NY {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ZY;
        this.plans = uu, this.readInterior = Eu, this.link = ju, this.now = su, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new uY, this.throttle = void 0, this.oneShots = void 0, this.listeners = new CY, this.redraw = null, this.releaseReserve = null, this.size = new cY(ju, su), this.oneShots = new sY(su), this.throttle = new RO((uu => this.echo(this.link.send(this.command("throttle", uu)))))
      }
      set(uu) {
        !uu.baf2RxOpen && this.raw && fY(this.raw.baf2RxAt) === fY(uu.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(uu), this.TY(uu)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(uu) {
        this.size.notTaken = uu
      }
      resize(uu) {
        this.raw && (this.size.Hc(this.plans, this.raw.baf2RxAt, uu), this.TY(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const uu = this.raw.baf2RxAt;
        this.plans.setStarter(uu, !this.plans.showsStarter(uu)), this.TY(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.TY(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.TY(this.raw)
      }
      send(uu) {
        if (this.raw) {
          for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
          this.link.send(this.command(uu, ...ju))
        }
      }
      tap(uu, Eu) {
        this.raw && this.oneShots.tap(uu, function(uu, Eu) {
          if ("start" === uu) return uu => 0 === (uu.baf2RxFlags & cE);
          if ("odConfirm" === uu) return uu => 0 !== (uu.baf2RxFlags & NE);
          const ju = XY(Eu);
          return uu => XY(uu) !== ju
        }(uu, this.raw), Eu) && ("start" === uu && (this.startedAt = this.now()), this.TY(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(cE, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(uu, Eu) {
        if (!this.raw) return;
        const ju = uu === cE ? this.command(Eu ? "scram" : "start") : this.command("od", Eu ? 1 : 0),
          su = Eu && uu === cE,
          Uu = `${CE} ${this.raw.baf2RxAt.join(" ")} `,
          Zu = this.echo(su ? this.link.sendUrgent(ju, (uu => {
            const Eu = uu.startsWith(Uu) ? uu.slice(Uu.length).split(" ")[0] : null;
            return "throttle" === Eu || "start" === Eu
          })) : this.link.send(ju));
        this.flags.set(uu, Eu, Zu), su && this.throttle.assume(0, Zu), this.TY(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(uu) {
        this.throttle.drag(uu), this.raw && this.TY(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.TY(this.raw)
      }
      subscribe(uu) {
        return this.listeners.subscribe(uu)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var uu;
        this.throttle.release(), null === (uu = this.releaseReserve) || void 0 === uu || uu.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(uu) {
        for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
        return bE(this.raw.baf2RxAt, uu, ...ju)
      }
      echo(uu) {
        return new yO(uu, this.link, this.link.answerMs, this.now)
      }
      TY(uu) {
        var Eu;
        this.raw = uu;
        const ju = this.flags.shown(uu.baf2RxFlags),
          su = {
            ...uu,
            baf2RxFlags: ju,
            baf2RxTarget: this.throttle.shown(uu.baf2RxTarget),
            baf2RxState: lY(uu, ju)
          },
          Uu = this.size.shown(su.baf2RxDims),
          Zu = this.throttle.pendingFor(),
          Xu = [this.throttle.pendingFor(uu.baf2RxTarget), this.flags.pendingFor(uu.baf2RxFlags), this.size.pendingFor(uu.baf2RxDims)].filter((uu => null !== uu)),
          lu = Xu.length > 0 ? Math.max(...Xu) : null,
          qu = this.oneShots.busyIds(),
          fu = su.baf2RxAt;
        let Cu, bu, cu = null,
          Nu = [Math.max(0, Uu[0] - 2), Math.max(0, Uu[1] - 2), Math.max(0, Uu[2] - 2)];
        if (su.baf2RxFormed) {
          const [uu, Eu, ju] = su.baf2RxDims;
          Nu = [Math.max(0, uu - 2), Math.max(0, Eu - 2), Math.max(0, ju - 2)], Cu = Array.from(su.baf2RxCells, Number), bu = `${Nu.join(",")}:${su.baf2RxCells}`
        } else {
          var Ou;
          const uu = null === (Ou = this.plans.planAt(fu)) || void 0 === Ou ? void 0 : Ou.box,
            Eu = uu ? tj(uu, "reactor", ...Uu) : Bj(fu, 1, ...Uu, Lj("reactor", Uu[0])),
            ju = this.readInterior(Eu);
          cu = Eq(Nu, ju), Cu = ju, bu = `${Nu.join(",")}:${ju.join("")}`
        }(null === (Eu = this.looksOf) || void 0 === Eu ? void 0 : Eu.key) !== bu && (this.looksOf = {
          key: bu,
          looks: lq(Nu, Cu)
        }), this.view = {
          status: su,
          dims: Uu,
          plan: cu,
          inner: Nu,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(fu),
          odConfirmed: this.odConfirmed || 0 !== (su.baf2RxFlags & ME),
          guide: this.plans.guideOn(),
          throttlePending: null !== Zu,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== lu && lu >= 5e3,
          busy: qu,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== lu || qu.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.TY(this.raw)
        }), 250))
      }
    }
    class OY {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZY;
        this.plans = uu, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new CY, this.redraw = null, this.size = new cY(Eu, ju), this.oneShots = new sY(ju)
      }
      set(uu) {
        !uu.baf2BatOpen && this.view && fY(this.view.status.baf2BatAt) === fY(uu.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(uu), this.TY(uu)
      }
      tap(uu, Eu) {
        if (!this.view) return;
        const ju = qY(this.view.status);
        this.oneShots.tap(uu, (uu => qY(uu) !== ju), Eu) && this.TY(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(uu) {
        this.size.notTaken = uu
      }
      resize(uu) {
        this.view && (this.size.Hc(this.plans, this.view.status.baf2BatAt, uu), this.TY(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.TY(this.view.status)
      }
      subscribe(uu) {
        return this.listeners.subscribe(uu)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      TY(uu) {
        const Eu = this.size.shown(uu.baf2BatDims),
          ju = this.oneShots.busyIds();
        this.view = {
          status: uu,
          dims: Eu,
          Mb: Gq(Eu, uu.baf2BatDims) ? uu.baf2BatCapacity : Cq(...Eu),
          guide: this.plans.guideOn(),
          busy: ju
        }, this.listeners.notify(), ju.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.TY(this.view.status)
        }), 250))
      }
    }
    const YY = "buildAFactory2Game:";

    function hY() {
      var uu;
      const Eu = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!Eu) return null;
      const ju = Eu.querySelector(".ExitButton");
      return function(uu, Eu) {
        const ju = Eu ? Eu.left - 8 : uu.right;
        return {
          left: uu.left,
          top: uu.top,
          width: Math.max(0, ju - uu.left),
          height: uu.height
        }
      }(Eu.getBoundingClientRect(), null !== (uu = null === ju || void 0 === ju ? void 0 : ju.getBoundingClientRect()) && void 0 !== uu ? uu : null)
    }
    const DY = (0, su.memo)((function(uu) {
      let {
        store: Eu
      } = uu;
      const {
        t: ju
      } = (0, oU.A)(), [Uu, Zu] = (0, su.useState)((() => Eu.get())), [Xu, lu] = (0, su.useState)((() => performance.now()));
      (0, su.useEffect)((() => (Zu(Eu.get()), Eu.subscribe((() => {
        Zu(Eu.get()), lu(performance.now())
      })))), [Eu]);
      const {
        alarm: qu,
        boomAt: fu
      } = Uu, Cu = null !== qu && null !== qu.secs, [bu, cu] = (0, su.useState)(null);
      (0, su.useEffect)((() => {
        if (!Cu) return;
        cu(hY());
        const uu = setInterval((() => {
          lu(performance.now()), cu(hY())
        }), 250);
        return () => {
          clearInterval(uu)
        }
      }), [Cu]);
      const [Nu, Ou] = (0, su.useState)(!1);
      return (0, su.useEffect)((() => {
        if (fu === -1 / 0) return;
        Ou(!0);
        const uu = setTimeout((() => {
          Ou(!1)
        }), 1300);
        return () => {
          clearTimeout(uu)
        }
      }), [fu]), (0, aZ.jsxs)(aZ.Fragment, {
        children: [null !== qu && (0, aZ.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: ju(qu.hot ? `${YY}rxAlarmSiren` : `${YY}rxAlarmDamaged`, {
            amount: String(qu.damage)
          })
        }), null !== qu && null !== qu.secs && (0, aZ.jsx)("div", {
          className: bu ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== bu && void 0 !== bu ? bu : void 0,
          "aria-live": "assertive",
          children: ju(`${YY}rxAlarmCountdown`, {
            amount: String((Yu = qu.secs, hu = Xu - qu.receivedAt, Math.max(1, Math.ceil(Yu - hu / 1e3))))
          })
        }), Nu && (0, aZ.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Yu, hu
    }));
    class gY {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      gM(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const ju = uu.baf2RxAlarmAt.join(",");
        let su = this.snapshot.boomAt;
        if (uu.baf2RxAlarmBoom) this.byReactor.delete(ju), su = Eu;
        else if (uu.baf2RxAlarmDamage <= 0) this.byReactor.delete(ju);
        else {
          var Uu;
          this.byReactor.set(ju, {
            damage: uu.baf2RxAlarmDamage,
            secs: null !== (Uu = uu.baf2RxAlarmSecs) && void 0 !== Uu ? Uu : null,
            hot: !0 === uu.baf2RxAlarmHot,
            receivedAt: Eu
          })
        }
        this.TY(su)
      }
      retain(uu) {
        let Eu = !1;
        for (const ju of [...this.byReactor.keys()]) uu.has(ju) || (this.byReactor.delete(ju), Eu = !0);
        Eu && this.TY(this.snapshot.boomAt)
      }
      has(uu) {
        return this.byReactor.has(uu)
      }
      get() {
        return this.snapshot
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      TY(uu) {
        let Eu = null;
        for (const ju of this.byReactor.values())(!Eu || ju.damage > Eu.damage) && (Eu = ju);
        this.snapshot = {
          alarm: Eu,
          boomAt: uu
        };
        for (const ju of this.listeners) ju()
      }
    }
    const MY = {
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

    function eY(uu) {
      return [uu[0], uu[1], uu[2]]
    }

    function GY(uu) {
      return `${uu[0]},${uu[1]},${uu[2]}`
    }
    class pY {
      constructor(uu) {
        if (this.plans = uu, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var uu;
            return {
              active: this.glows.flatMap((uu => {
                let {
                  record: Eu
                } = uu;
                return Eu ? [Eu] : []
              })),
              log: [...null !== (uu = this.devLog) && void 0 !== uu ? uu : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var uu;
        return null !== (uu = this.devLog) && void 0 !== uu ? uu : []
      }
      check(uu, Eu, ju) {
        const su = new Set(Eu.map((uu => GY(uu.box.ctrl))));
        for (const Xu of function(uu, Eu) {
            const ju = [],
              su = new Map(uu);
            uu.clear();
            for (const Uu of Eu) {
              const Eu = NO(Uu.box.ctrl),
                Zu = Uu.formed ? Uu.level : 0;
              uu.set(Eu, Zu), Zu > 0 && 0 === su.get(Eu) && ju.push(Uu)
            }
            return ju
          }(this.levels, this.plans.all())) su.has(GY(Xu.box.ctrl)) && this.show(uu, Xu, "on", ju);
        const Uu = this.plans.lastFormed();
        if (null === Uu || Uu.receivedAt <= this.flashedAt) return null;
        this.flashedAt = Uu.receivedAt;
        const Zu = function(uu, Eu) {
          var ju;
          const su = NO(uu);
          return null !== (ju = Eu.find((uu => NO(uu.box.ctrl) === su))) && void 0 !== ju ? ju : null
        }(Uu.ctrl, Eu);
        return Zu && this.show(uu, Zu, "formed", ju), Zu
      }
      fade(uu, Eu) {
        0 !== this.glows.length && (this.glows = this.glows.filter((ju => {
          let {
            mesh: su,
            glow: Uu,
            startMs: Zu,
            record: Xu
          } = ju;
          const lu = (Eu - Zu) / MY[Uu].ms;
          return lu >= 1 ? (uu.disposeGameMesh(su), Xu && (Xu.endMs = Eu), !1) : (uu.setGameMesh(su, {
            visibility: "formed" === Uu ? 1 - lu : Math.sin(Math.PI * lu)
          }), !0)
        })))
      }
      dispose(uu) {
        for (const {
            mesh: ju
          }
          of this.glows) uu.disposeGameMesh(ju);
        this.glows = [], this.levels.clear();
        const Eu = "undefined" !== typeof window ? window : null;
        (null === Eu || void 0 === Eu ? void 0 : Eu.baf2Glows) === this.devAccessor && delete Eu.baf2Glows
      }
      show(uu, Eu, ju, su) {
        const {
          lo: Uu,
          hi: Zu
        } = Kq(Eu.box);
        let Xu = null;
        this.devLog && (Xu = {
          glow: ju,
          ctrl: eY(Eu.box.ctrl),
          lo: eY(Uu),
          hi: eY(Zu),
          startMs: su,
          endMs: null
        }, this.devLog.push(Xu), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(uu, ju, Vq(Uu, Zu, MY[ju].thick)),
          glow: ju,
          startMs: su,
          record: Xu
        })
      }
      build(uu, Eu, ju) {
        const su = MO(uu, ju, {
          rgb: MY[Eu].colour,
          alpha: 1
        });
        return uu.setGameMesh(su, {
          visibility: 0
        }), su
      }
    }
    const wY = 1 / .6,
      JY = {
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
        blendMode: Ql.e.Standard,
        soft: !0
      },
      dY = {
        ...JY,
        size: [.25, .4],
        count: 2
      };

    function aY(uu) {
      return {
        colours: [uu, uu],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Ql.e.Add,
        soft: !1
      }
    }
    const PY = aY([150, 225, 255]),
      oY = aY([185, 145, 255]),
      kY = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function mY(uu) {
      const Eu = VE[uu];
      return null === Eu.fuelSlot || Uj(Eu) ? kY.includes(uu) ? oY : PY : JY
    }
    const vY = {
        kind: "smokePuff"
      },
      KY = [.2, .025, .2];

    function VY(uu, Eu) {
      const [
        [ju, su, Uu],
        [Zu, Xu, lu]
      ] = uu.colours;
      return {
        texture: uu.soft ? vY : "square_particle",
        Mb: Eu,
        minLifeTime: uu.life[0] / wY,
        maxLifeTime: uu.life[1] / wY,
        minEmitPower: uu.power[0] * wY,
        maxEmitPower: uu.power[1] * wY,
        minSize: uu.size[0],
        maxSize: uu.size[1],
        emitRate: 0,
        gravity: [0, uu.lift * wY * wY, 0],
        dir1: [-uu.spread, 1, -uu.spread],
        dir2: [uu.spread, 1, uu.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [ju, su, Uu, uu.alpha],
          maxColor: [Zu, Xu, lu, uu.alpha]
        }, {
          timeFraction: 1,
          minColor: [ju, su, Uu, 0],
          maxColor: [Zu, Xu, lu, 0]
        }],
        blendMode: uu.blendMode
      }
    }
    class rY {
      constructor(uu) {
        this.fixed = uu, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(uu, Eu, ju) {
        var su;
        if (ju === this.lastFrame) return !1;
        this.lastFrame = ju;
        const Uu = this.at;
        Uu[0] = Eu[0] + .5, Uu[1] = Eu[1] + 1.025, Uu[2] = Eu[2] + .5;
        const Zu = null !== (su = this.fixed) && void 0 !== su ? su : lu() ? dY : JY;
        let Xu = this.particles.get(Zu);
        return Xu || (Xu = uu.createParticles(function(uu) {
          return VY(uu, Math.ceil(12 * uu.count * uu.life[1]) + uu.count)
        }(Zu), {
          pos: Uu,
          half: KY
        }), this.particles.set(Zu, Xu)), Xu.moveTo(Uu), Xu.emit(Zu.count), !0
      }
      dispose() {
        for (const uu of this.particles.values()) uu.stop();
        this.particles.clear()
      }
    }
    class QY {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(uu) {
        this.indexed = !0;
        for (const Eu of PE) {
          const ju = mY(Eu);
          for (let su = 1; su <= 4; su++) {
            const Uu = uu.blockNameToBlockId(`${Eu}|meta|rot${su}|Running`, !0);
            if (null === Uu) continue;
            let Zu = this.pufferIndexByStyle.get(ju);
            void 0 === Zu && (Zu = this.pufferList.push(new rY(ju === JY ? null : ju)) - 1, this.pufferIndexByStyle.set(ju, Zu)), this.pufferIndexById[Uu] = Zu + 1
          }
        }
      }
      onAfterRender(uu, Eu) {
        this.indexed || this.index(uu);
        const ju = performance.now(),
          su = 0 === this.lastMs ? 0 : Math.min(ju - this.lastMs, 250) / 1e3;
        this.lastMs = ju, this.frame++, uu.particlesEnabled() ? (this.scan(uu, Eu), this.puff(uu, su)) : this.sources = []
      }
      dispose() {
        for (const uu of this.pufferList) uu.dispose();
        this.sources = [], this.found = []
      }
      scan(uu, Eu) {
        0 === this.scanRow && (this.origin = [Math.floor(Eu[0]) - 12, Math.floor(Eu[1]) - 6, Math.floor(Eu[2]) - 12]);
        const ju = Math.min(this.scanRow + 16, 325),
          [su, Uu, Zu] = this.origin,
          Xu = this.hits;
        Xu.length = 0;
        for (let lu = this.scanRow; lu < ju; lu++) {
          const Eu = su + lu % 25,
            ju = Uu + Math.floor(lu / 25);
          uu.scanBlocks(Eu, ju, Zu, Eu + 1, ju + 1, Zu + 25, this.pufferIndexById, Xu)
        }
        for (let lu = 0; lu < Xu.length; lu += 4) {
          const uu = Xu[lu + 3];
          this.found.push({
            pos: [Xu[lu], Xu[lu + 1], Xu[lu + 2]],
            ul: uu,
            puffer: this.pufferList[this.pufferIndexById[uu] - 1]
          })
        }
        this.scanRow = ju, 325 === ju && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(uu, Eu) {
        const ju = this.sources.length;
        if (0 !== ju) {
          this.budget = Math.min(this.budget + Math.min(ju / 1.2, 12) * Eu, 2);
          for (let Eu = 0; Eu < ju && this.budget >= 1; Eu++) {
            const Eu = this.sources[this.cursor % ju];
            this.cursor = (this.cursor + 1) % ju, uu.getBlockId(Eu.pos[0], Eu.pos[1], Eu.pos[2]) === Eu.ul && (Eu.puffer.puff(uu, Eu.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const iY = {
        ...aY([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      WY = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function SY(uu) {
      return 0 === uu.spots.length ? 0 : Math.min(1 * uu.level, 4)
    }

    function IY(uu) {
      return 0 === uu.glass.length ? 0 : Math.min(.75 * uu.level, 3)
    }

    function FY(uu) {
      return `${uu.ctrl.join(",")}:${uu.rot}:${uu.cu},${uu.cv}:${uu.w},${uu.h},${uu.d}`
    }

    function BY(uu, Eu) {
      const ju = Eu.w - 2,
        su = Eu.h - 2,
        Uu = Eu.d - 2,
        Zu = [];
      for (let Xu = 0; Xu < ju * su * Uu; Xu++) {
        const lu = Xu % ju,
          qu = Math.floor(Xu / ju) % Uu,
          fu = Math.floor(Xu / (ju * Uu));
        if (lu > 0 && lu < ju - 1 && qu > 0 && qu < Uu - 1 && fu > 0 && fu < su - 1) continue;
        const Cu = zj(Eu, ss(Eu, Xu)),
          bu = iO(uu, Cu);
        if (null !== bu && "Fuel Rod" === mj(bu))
          for (const Eu of WY) {
            const ju = [Cu[0] + Eu[0], Cu[1] + Eu[1], Cu[2] + Eu[2]];
            tY(uu, ju) && Zu.push(xY(ju, Eu))
          }
      }
      return Zu
    }

    function LY(uu, Eu) {
      const {
        lo: ju,
        hi: su
      } = Kq(Eu), Uu = [];
      for (let Zu = ju[0]; Zu < su[0]; Zu++)
        for (let Eu = ju[1]; Eu < su[1]; Eu++) {
          const Xu = Zu === ju[0] || Zu === su[0] - 1 || Eu === ju[1] || Eu === su[1] - 1 ? 1 : Math.max(1, su[2] - 1 - ju[2]);
          for (let lu = ju[2]; lu < su[2]; lu += Xu) {
            const Xu = [Zu, Eu, lu];
            if (!tY(uu, Xu)) continue;
            const qu = Zu === ju[0] ? WY[1] : Zu === su[0] - 1 ? WY[0] : lu === ju[2] ? WY[5] : lu === su[2] - 1 ? WY[4] : Eu === ju[1] ? WY[3] : WY[2];
            Uu.push(xY(Xu, qu))
          }
        }
      return Uu
    }

    function tY(uu, Eu) {
      const ju = iO(uu, Eu);
      return null !== ju && "Reactor Glass" === mj(ju)
    }

    function xY(uu, Eu) {
      return [
        [uu[0] + .5 + .55 * Eu[0], uu[1] + .5 + .55 * Eu[1], uu[2] + .5 + .55 * Eu[2]],
        [0 === Eu[0] ? .4 : .02, 0 === Eu[1] ? .4 : .02, 0 === Eu[2] ? .4 : .02]
      ]
    }
    class TY {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(uu, Eu, ju, su) {
        const Uu = [],
          Zu = new Set;
        for (const fu of Eu) {
          var Xu, lu, qu;
          const {
            box: Eu
          } = fu;
          if ("reactor" !== fu.kind || fu.level <= 0 || (Eu.ctrl[0] - ju[0]) ** 2 + (Eu.ctrl[1] - ju[1]) ** 2 + (Eu.ctrl[2] - ju[2]) ** 2 > 576) continue;
          const Cu = FY(Eu);
          Zu.add(Cu);
          let bu = this.spots.get(Cu);
          if ((!bu || su - bu.at > 3e3) && (bu = {
              at: su,
              spots: BY(uu, Eu),
              glass: LY(uu, Eu)
            }, this.spots.set(Cu, bu)), 0 === bu.spots.length && 0 === bu.glass.length) continue;
          const cu = this.sparking.find((uu => uu.key === Cu));
          Uu.push({
            key: Cu,
            level: fu.level,
            spots: bu.spots,
            glass: bu.glass,
            budget: null !== (Xu = null === cu || void 0 === cu ? void 0 : cu.budget) && void 0 !== Xu ? Xu : 0,
            cursor: null !== (lu = null === cu || void 0 === cu ? void 0 : cu.cursor) && void 0 !== lu ? lu : 0,
            glassBudget: null !== (qu = null === cu || void 0 === cu ? void 0 : cu.glassBudget) && void 0 !== qu ? qu : 0
          })
        }
        for (const fu of this.spots.keys()) Zu.has(fu) || this.spots.delete(fu);
        this.sparking = Uu
      }
      emit(uu, Eu, ju) {
        var su;
        if (0 === this.sparking.length || !uu.particlesEnabled() || ju === this.lastFrame) return;
        this.lastFrame = ju;
        let Uu = 0,
          Zu = 0;
        for (const Ou of this.sparking) Uu += SY(Ou), Zu += IY(Ou);
        const Xu = Uu > 8 ? 8 / Uu : 1,
          lu = Zu > 6 ? 6 / Zu : 1;
        let qu, fu = null,
          Cu = null;
        for (const Ou of this.sparking) Ou.budget = Math.min(Ou.budget + SY(Ou) * Xu * Eu, 2), Ou.budget >= 1 && (!fu || Ou.budget > fu.budget) && (fu = Ou), Ou.glassBudget = Math.min(Ou.glassBudget + IY(Ou) * lu * Eu, 2), Ou.glassBudget >= 1 && (!Cu || Ou.glassBudget > Cu.glassBudget) && (Cu = Ou);
        if (fu) fu.budget--, qu = fu.spots[fu.cursor++ % fu.spots.length];
        else {
          if (!Cu) return;
          Cu.glassBudget--, qu = Cu.glass[Math.floor(Math.random() * Cu.glass.length)]
        }
        const [bu, cu] = qu, Nu = null !== (su = this.emitter) && void 0 !== su ? su : this.create(uu, bu, cu);
        Nu.moveTo(bu, cu), Nu.emit(iY.count)
      }
      dispose() {
        var uu;
        null === (uu = this.emitter) || void 0 === uu || uu.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(uu, Eu, ju) {
        const su = Math.ceil(14 * iY.count * iY.life[1]) + iY.count;
        return this.emitter = uu.createParticles(VY(iY, su), {
          pos: Eu,
          half: ju
        }), this.emitter
      }
    }
    const HY = [2, 3.2],
      AY = 1 / 3,
      nY = 1 / .6,
      yY = {
        texture: vY,
        Mb: Math.ceil(18 * HY[1]) + 4,
        minLifeTime: HY[0] / nY,
        maxLifeTime: HY[1] / nY,
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
        blendMode: Ql.e.Standard
      };
    class zY {
      constructor(uu) {
        this.plans = uu, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new TY, this.frame = 0, this.outline = new pY(uu)
      }
      onAfterRender(uu, Eu, ju) {
        const su = performance.now(),
          Uu = 0 === this.lastMs ? 0 : Math.min(su - this.lastMs, 250) / 1e3;
        if (this.lastMs = su, this.outline.fade(uu, su), this.puff(uu, Uu, ju), this.sparks.emit(uu, Uu, this.frame++), su - this.lastCheckMs < 150) return;
        this.lastCheckMs = su;
        const Zu = this.plans.all().filter((uu => uu.formed && RY(uu.box.ctrl, ju) <= 4096));
        this.plumes = Zu.filter((uu => "reactor" === uu.kind && uu.level > 0)).map((uu => ({
          box: uu.box,
          level: uu.level
        }))), this.updateHums(uu, Eu, Zu, ju), this.sparks.update(uu, Zu, ju, su), this.chimeFormed(uu, Eu, Zu, su)
      }
      dispose(uu) {
        var Eu;
        this.outline.dispose(uu), null === (Eu = this.steam) || void 0 === Eu || Eu.dispose(), this.steam = null, this.sparks.dispose();
        for (const ju of this.hums.values()) ju.stop();
        this.hums.clear()
      }
      chimeFormed(uu, Eu, ju, su) {
        const Uu = this.outline.check(uu, ju, su);
        Uu && uu.playSound(Eu, "exp_levelup", .6, 1, {
          Zu: [Uu.box.ctrl[0] + .5, Uu.box.ctrl[1], Uu.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(uu, Eu, ju) {
        const su = this.plumes;
        if (0 === su.length || !uu.particlesEnabled()) return void(this.plumeBudget = 0);
        const Uu = su.reduce(((uu, Eu) => uu + 3 * Eu.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + Uu * Eu, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let Zu = this.plumeCursor % (Uu / 3);
        this.plumeCursor++;
        let Xu = su[0];
        for (const bu of su) {
          if (Zu < bu.level) {
            Xu = bu;
            break
          }
          Zu -= bu.level
        }
        const {
          lo: lu,
          hi: qu
        } = Kq(Xu.box);
        if (function(uu, Eu, ju) {
            const su = Math.max(uu[0] - ju[0], 0, ju[0] - Eu[0]),
              Uu = Math.max(uu[2] - ju[2], 0, ju[2] - Eu[2]);
            return Math.hypot(su, ju[1] - Eu[1], Uu)
          }(lu, qu, ju) < 6 && Math.random() > AY) return;
        const fu = [(lu[0] + qu[0]) / 2, qu[1] + .05, (lu[2] + qu[2]) / 2],
          Cu = [(qu[0] - lu[0]) / 2 - .5, .05, (qu[2] - lu[2]) / 2 - .5];
        this.steam ??= uu.createParticles(yY, {
          pos: fu,
          half: Cu
        }), this.steam.moveTo(fu, Cu), this.steam.emit(1)
      }
      updateHums(uu, Eu, ju, su) {
        const Uu = new Map;
        for (const Xu of ju) "reactor" === Xu.kind && Xu.level > 0 && RY(Xu.box.ctrl, su) <= 576 && Uu.set(`${Zu=Xu.box.ctrl,`${Zu[0]},${Zu[1]},${Zu[2]}`}:${Xu.level}`, Xu);
        var Zu;
        for (const [Xu, lu] of this.hums) Uu.has(Xu) || (lu.stop(), this.hums.delete(Xu));
        for (const [Xu, lu] of Uu) {
          if (this.hums.has(Xu)) continue;
          const {
            lo: ju,
            hi: su
          } = Kq(lu.box), Uu = [(ju[0] + su[0]) / 2, ju[1], (ju[2] + su[2]) / 2], Zu = uu.playSound(Eu, "rocketEngineLoop", .08 + .06 * lu.level, .55, {
            Zu: Uu,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          Zu && this.hums.set(Xu, Zu)
        }
      }
    }

    function RY(uu, Eu) {
      return (uu[0] - Eu[0]) ** 2 + (uu[1] - Eu[1]) ** 2 + (uu[2] - Eu[2]) ** 2
    }
    class uh {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      gM(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const su = [uu.baf2BombAt[0], uu.baf2BombAt[1], uu.baf2BombAt[2]],
          Uu = uu.baf2BombR;
        if (uu.baf2BombBoom) {
          const uu = Math.hypot(Eu[0] - su[0], Eu[1] - su[1], Eu[2] - su[2]);
          this.TY({
            fuse: null,
            blast: {
              at: su,
              r: Uu,
              receivedAt: ju,
              distance: uu,
              flash: uu <= 3 * Uu
            }
          })
        } else this.TY({
          ...this.snapshot,
          fuse: uu.baf2BombMs > 0 ? {
            at: su,
            r: Uu,
            endsAt: ju + uu.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      TY(uu) {
        this.snapshot = uu;
        for (const Eu of this.listeners) Eu()
      }
    }
    const Eh = (0, su.memo)((function(uu) {
      var Eu;
      let {
        store: ju
      } = uu;
      const {
        t: Uu
      } = (0, oU.A)(), [Zu, Xu] = (0, su.useState)((() => ju.get())), [lu, qu] = (0, su.useState)((() => performance.now()));
      (0, su.useEffect)((() => (Xu(ju.get()), ju.subscribe((() => {
        Xu(ju.get()), qu(performance.now())
      })))), [ju]);
      const {
        fuse: fu,
        blast: Cu
      } = Zu;
      (0, su.useEffect)((() => {
        if (!fu) return;
        const uu = setInterval((() => {
          qu(performance.now())
        }), 250);
        return () => {
          clearInterval(uu)
        }
      }), [fu]);
      const [bu, cu] = (0, su.useState)(!1);
      (0, su.useEffect)((() => {
        if (null === Cu || void 0 === Cu || !Cu.flash) return;
        cu(!0);
        const uu = setTimeout((() => {
          cu(!1)
        }), 2500);
        return () => {
          clearTimeout(uu)
        }
      }), [Cu]);
      const Nu = fu ? function(uu, Eu) {
        return uu.endsAt <= Eu ? 0 : Math.ceil((uu.endsAt - Eu) / 1e3)
      }(fu, lu) : 0;
      return (0, aZ.jsxs)(aZ.Fragment, {
        children: [Nu > 0 && (0, aZ.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: Uu("buildAFactory2Game:bombCountdown", {
            amount: String(Nu),
            radius: String(null !== (Eu = null === fu || void 0 === fu ? void 0 : fu.r) && void 0 !== Eu ? Eu : 0)
          })
        }), bu && (0, aZ.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function jh(uu) {
      const Eu = Math.min(4, Math.max(1, uu / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * uu / 4)),
        capSpread: Math.min(5 * uu / 8, 24 * Eu),
        capThick: 6 * Eu,
        stemHalfWidth: 3 * Eu,
        puffScale: Eu
      }
    }
    class sh {
      constructor() {
        this.dl = !1
      }
      hold(uu) {
        uu.getCameraFar() < 1e3 && (uu.setCameraFar(1e3), this.dl = !0)
      }
      release(uu) {
        this.dl && (this.dl = !1, uu.setCameraFar(null))
      }
    }
    const Uh = 1 / .6,
      Zh = [.2, .1, .2],
      Xh = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      lh = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Ql.e.Standard,
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
      qh = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: Ql.e.Standard,
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
      fh = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Ql.e.Standard,
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
      Ch = {
        texture: vY,
        Mb: Math.ceil(120) + 4,
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
        blendMode: Ql.e.Add
      };
    class bh {
      constructor(uu) {
        this.store = uu, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new sh, this.timers = []
      }
      onAfterRender(uu, Eu) {
        const ju = performance.now(),
          su = 0 === this.lastMs ? 0 : Math.min(ju - this.lastMs, 250) / 1e3;
        this.lastMs = ju;
        const {
          fuse: Uu,
          blast: Zu
        } = this.store.get();
        null !== Zu && Zu !== this.shownBlast && (this.shownBlast = Zu, this.startBlast(uu, Eu, Zu, ju));
        const Xu = uu.particlesEnabled();
        null !== Uu && Uu.endsAt > ju && Xu ? this.emitBeacon(uu, Uu, su, ju) : this.beaconBudget = 0, null !== this.cloud && (ju - this.cloud.startMs > 33e3 ? this.disposeCloud(uu) : (this.far.hold(uu), Xu && this.emitCloud(uu, su, ju)))
      }
      dispose(uu) {
        var Eu;
        null === (Eu = this.beacon) || void 0 === Eu || Eu.dispose(), this.beacon = null, this.disposeCloud(uu);
        for (const ju of this.timers) clearTimeout(ju);
        this.timers.length = 0
      }
      emitBeacon(uu, Eu, ju, su) {
        const Uu = Eu.endsAt - su < 5e3 ? 350 : 1e3,
          Zu = .5 + .5 * Math.sin(2 * Math.PI * su / Uu);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * Zu * ju, 4), this.beaconBudget < 1) return;
        const Xu = Math.floor(this.beaconBudget);
        this.beaconBudget -= Xu;
        const [lu, qu, fu] = Eu.at, Cu = [lu + .5, qu + 1.1, fu + .5];
        this.beacon ??= uu.createParticles(Ch, {
          pos: Cu,
          half: Zh
        }), this.beacon.moveTo(Cu), this.beacon.emit(Xu)
      }
      startBlast(uu, Eu, ju, su) {
        var Uu;
        null === (Uu = this.beacon) || void 0 === Uu || Uu.dispose(), this.beacon = null, this.disposeCloud(uu);
        const Zu = (0, Vl.isMobile)() ? .5 : 1;
        this.streams = [lh, qh, fh].map((uu => {
          const Eu = Math.round(uu.count * Zu);
          return {
            spec: uu,
            particles: null,
            rate: Eu / ((uu.toMs - uu.fromMs) / 1e3),
            budget: 0,
            left: Eu
          }
        })), this.cloud = {
          blast: ju,
          startMs: su
        };
        const Xu = Math.max(.25, 1 - ju.distance / (6 * ju.r)),
          lu = ju.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [ju, su, Uu] of Xh) Nh(uu, Eu, ju, Xu * su, Uu)
        }), lu))
      }
      emitCloud(uu, Eu, ju) {
        const {
          blast: su,
          startMs: Uu
        } = this.cloud, Zu = ju - Uu, [Xu, lu, qu] = su.at, fu = jh(su.r);
        for (const Cu of this.streams) {
          const {
            spec: ju
          } = Cu;
          if (Cu.left <= 0 || Zu < ju.fromMs) continue;
          Cu.budget += Cu.rate * Eu;
          const Uu = Math.min(Math.floor(Cu.budget), Cu.left);
          if (Uu < 1) continue;
          Cu.budget -= Uu, Cu.left -= Uu;
          const bu = Cu.particles ??= this.createStream(uu, ju, su);
          if (ju === lh) {
            const uu = fu.stemHalfWidth;
            bu.moveTo([Xu, lu + 1, qu], [uu, 1, uu])
          } else if (ju === qh) {
            const uu = fu.capSpread * Math.min(1, (Zu - ju.fromMs) / 3e3),
              Eu = Math.sqrt(Math.random()),
              su = 2 * Math.random() * Math.PI,
              Uu = Math.cos(su) * Eu,
              Cu = Math.sin(su) * Eu,
              cu = Xu + Uu * uu,
              Nu = qu + Cu * uu,
              Ou = fu.capThick,
              Yu = lu + fu.capHeight + Ou * (1 - Eu * Eu) * 2;
            bu.setDirections([.7 * Uu, .05, .7 * Cu], [Uu, .2, Cu]), bu.moveTo([cu, Yu, Nu], [Ou, Ou, Ou])
          } else {
            this.ringAngle += 2.39996;
            const uu = Math.cos(this.ringAngle),
              Eu = Math.sin(this.ringAngle);
            bu.setDirections([uu, .05, Eu], [uu, .1, Eu]), bu.moveTo([Xu + 2 * uu, lu + .5, qu + 2 * Eu], [0, .5, 0])
          }
          bu.emit(Uu)
        }
      }
      createStream(uu, Eu, ju) {
        const {
          r: su
        } = ju, Uu = Math.max(Eu.life[0], su / 25), Zu = Eu === fh ? [.9 * Uu, Uu] : Eu.life, Xu = jh(su), lu = Eu === fh ? 1 : Xu.puffScale, qu = {
          texture: vY,
          Mb: Eu.count + 4,
          minLifeTime: Zu[0] / Uh,
          maxLifeTime: Zu[1] / Uh,
          minSize: Eu.size[0] * lu,
          maxSize: Eu.size[1] * lu,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, Eu.gravity * Uh * Uh, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: Eu.from[0],
            maxColor: Eu.from[1]
          }, {
            timeFraction: .6,
            minColor: ch(Eu.from[0], Eu.to[0]),
            maxColor: ch(Eu.from[1], Eu.to[1])
          }, {
            timeFraction: 1,
            minColor: Eu.to[0],
            maxColor: Eu.to[1]
          }],
          blendMode: Eu.blend
        };
        if (Eu === lh) {
          const uu = Xu.capHeight / ((Zu[0] + Zu[1]) / 2);
          qu.minEmitPower = .9 * uu * Uh, qu.maxEmitPower = 1.05 * uu * Uh, qu.dir1 = [-.1, 1, -.1], qu.dir2 = [.1, 1, .1]
        } else Eu === qh ? (qu.minEmitPower = 1.2, qu.maxEmitPower = 2, qu.dir1 = [-1, .05, -1], qu.dir2 = [1, .2, 1]) : (qu.minEmitPower = 39.583333333333336, qu.maxEmitPower = 41.66666666666667, qu.dir1 = [1, 0, 0], qu.dir2 = [1, 0, 0]);
        return uu.createParticles(qu, {
          pos: ju.at
        })
      }
      disposeCloud(uu) {
        for (const ju of this.streams) {
          var Eu;
          null === (Eu = ju.particles) || void 0 === Eu || Eu.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(uu)
      }
    }

    function ch(uu, Eu) {
      return [(uu[0] + Eu[0]) / 2, (uu[1] + Eu[1]) / 2, (uu[2] + Eu[2]) / 2, .75 * uu[3]]
    }

    function Nh(uu, Eu, ju, su, Uu) {
      try {
        uu.playSound(Eu, ju, su, Uu)
      } catch (Zu) {
        console.error(Zu)
      }
    }
    const Oh = {
        Mb: 720,
        perS: 100
      },
      Yh = {
        Mb: 320,
        perS: 44
      };
    class hh {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(uu, Eu) {
        this.zone = {
          centre: [...uu.centre],
          r: uu.r,
          band: uu.band ? [uu.band[0], uu.band[1]] : void 0
        }, this.endsAt = Eu
      }
      stop() {
        this.zone = null
      }
      gM(uu, Eu) {
        const {
          baf2FalloutMs: ju,
          baf2FalloutAt: su,
          baf2FalloutR: Uu,
          baf2FalloutY: Zu
        } = uu;
        ju > 0 && su && void 0 !== Uu ? this.start({
          centre: su,
          r: Uu,
          band: Zu
        }, Eu + ju) : this.stop()
      }
      perS(uu, Eu, ju) {
        const su = this.zone;
        if (!su) return 0;
        const Uu = this.endsAt - uu;
        return Uu <= 0 ? (this.zone = null, 0) : su.band && (Eu[1] < su.band[0] || Eu[1] > su.band[1]) || Math.hypot(Eu[0] - su.centre[0], Eu[2] - su.centre[2]) > su.r ? 0 : ju.perS * Math.min(1, Uu / 5e3)
      }
    }
    const Dh = [5, 7],
      gh = [24, 8, 24],
      Mh = .5,
      eh = 1 / .6,
      Gh = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class ph {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Vl.isMobile)();
        this.state = new hh, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(uu) {
          return uu ? Yh : Oh
        }(uu)
      }
      startFallout(uu, Eu) {
        this.state.start(uu, Eu)
      }
      stopFallout() {
        this.state.stop()
      }
      gM(uu) {
        this.state.gM(uu, performance.now())
      }
      onAfterRender(uu, Eu) {
        var ju;
        const su = performance.now(),
          Uu = 0 === this.lastMs ? 0 : Math.min(su - this.lastMs, 250) / 1e3;
        this.lastMs = su;
        const Zu = this.state.perS(su, Eu, this.tier);
        if (Zu <= 0 || !uu.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + Zu * Uu, Zu / 4);
        const Xu = Math.floor(this.budget);
        if (Xu < 1) return;
        this.budget -= Xu;
        const lu = this.at;
        lu[0] = Eu[0], lu[1] = Eu[1] + 12, lu[2] = Eu[2];
        const qu = null !== (ju = this.systems) && void 0 !== ju ? ju : this.create(uu, lu),
          fu = this.amounts;
        fu[0] = 0, fu[1] = 0;
        for (let Cu = 0; Cu < Xu; Cu++) fu[Math.random() < .3 ? 1 : 0]++;
        for (let Cu = 0; Cu < qu.length; Cu++) fu[Cu] > 0 && (qu[Cu].moveTo(lu, gh), qu[Cu].emit(fu[Cu]))
      }
      dispose() {
        for (const Eu of null !== (uu = this.systems) && void 0 !== uu ? uu : []) {
          var uu;
          Eu.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(uu, Eu) {
        return this.systems = Gh.map((ju => {
          let {
            rgba: [su, Uu, Zu, Xu],
            share: lu
          } = ju;
          const qu = {
            texture: "square_particle",
            Mb: Math.ceil(this.tier.Mb * lu),
            minLifeTime: Dh[0] / eh,
            maxLifeTime: Dh[1] / eh,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [Mh, -1, Mh],
            colorGradients: [{
              timeFraction: 0,
              minColor: [su, Uu, Zu, 0]
            }, {
              timeFraction: .15,
              minColor: [su, Uu, Zu, Xu]
            }, {
              timeFraction: .8,
              minColor: [su, Uu, Zu, Xu]
            }, {
              timeFraction: 1,
              minColor: [su, Uu, Zu, 0]
            }],
            blendMode: Ql.e.Standard
          };
          return uu.createParticles(qu, {
            pos: Eu,
            half: gh
          })
        })), this.systems
      }
    }
    const wh = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Jh(uu) {
      const Eu = /\|rot(\d)/.exec(uu);
      return wh[Eu ? Number(Eu[1]) : 1]
    }
    var dh = ju(645),
      ah = ju(38795);
    const Ph = new Set(dh.l);

    function oh(uu) {
      if (-2 !== uu.count) return null;
      const Eu = Lu(uu.item);
      return null !== Eu && Ph.has(Eu) ? Eu : null
    }

    function kh(uu) {
      const {
        width: Eu,
        height: ju
      } = (0, ah.b)(uu).hitBoxDimensions;
      return .55 / Math.max(Eu, ju)
    }

    function mh(uu, Eu, ju) {
      if (!ju) return !1;
      const su = uu[0] + .5 - Eu[0],
        Uu = uu[1] + .5 - Eu[1],
        Zu = uu[2] + .5 - Eu[2];
      return su * su + Uu * Uu + Zu * Zu <= 576
    }

    function vh(uu, Eu) {
      return Math.atan2(uu[0], uu[2]) + Math.PI + Eu
    }

    function Kh(uu, Eu) {
      const ju = 2 * Math.PI;
      return (uu + ju * Eu / 1e4) % ju
    }
    class Vh {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = uu, this.now = Eu, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = uu.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(uu, Eu) {
        if (0 === this.farms.size) return;
        const ju = this.now(),
          su = Number.isNaN(this.frameMs) ? 0 : Math.min(ju - this.frameMs, 100);
        this.frameMs = ju, ju - this.checkedMs >= 1e3 && (this.checkedMs = ju, this.check(uu, Eu));
        for (const Uu of this.farms.values()) Uu.shown && Uu.running && null !== Uu.model && su > 0 && (Uu.spin = Kh(Uu.spin, su), Uu.model.setPose(Uu.feet, vh(Uu.front, Uu.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const uu of this.farms.values()) this.drop(uu);
        this.farms.clear()
      }
      sync() {
        const uu = new Set;
        for (const Eu of this.labels.list()) {
          const ju = oh(Eu);
          if (null === ju) continue;
          uu.add(Eu.key);
          const su = this.farms.get(Eu.key);
          if ((null === su || void 0 === su ? void 0 : su.mob) === ju) continue;
          su && this.drop(su);
          const [Uu, Zu, Xu] = Eu.pos;
          this.farms.set(Eu.key, {
            pos: Eu.pos,
            feet: [Uu + .5, Zu + 1, Xu + .5],
            mob: ju,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [Eu, ju] of this.farms) uu.has(Eu) || (this.drop(ju), this.farms.delete(Eu));
        this.checkedMs = -1 / 0
      }
      check(uu, Eu) {
        for (const ju of this.farms.values()) {
          const [su, Uu, Zu] = ju.pos, Xu = iO(uu, ju.pos);
          null !== Xu && mj(Xu) === ru && mh(ju.pos, Eu, "Air" === iO(uu, [su, Uu + 1, Zu])) ? (ju.running = Xu.endsWith("|Running"), ju.front = Jh(Xu), null === ju.model && (ju.model = uu.createMobModel(ju.mob, kh(ju.mob)), null === ju.model) || (ju.model.setPose(ju.feet, vh(ju.front, ju.spin)), ju.shown || (ju.model.setVisible(!0), ju.shown = !0))) : (ju.shown && null !== ju.model && ju.model.setVisible(!1), ju.shown = !1)
        }
      }
      drop(uu) {
        var Eu;
        null === (Eu = uu.model) || void 0 === Eu || Eu.dispose(), uu.model = null, uu.shown = !1
      }
    }
    class rh {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(uu) {
        var Eu;
        this.island = uu.baf2ColIsland, this.islandSite = (Eu = uu.baf2ColSite) && 8 === Eu.length ? {
          spawnXZ: [Eu[0], Eu[1]],
          coreXZ: [Eu[2], Eu[3]],
          minXZ: [Eu[4], Eu[5]],
          maxXZ: [Eu[6], Eu[7]]
        } : null, this.views = uu.baf2ColList.map((uu => ({
          entry: qU(uu)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(uu) {
        this.status = uu, this.emit()
      }
      onOpen(uu) {
        this.openHeld = uu
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
        return this.views.map((uu => uu.entry))
      }
      entryAtRoot(uu) {
        var Eu;
        return null === (Eu = this.views.find((Eu => {
          let {
            entry: ju
          } = Eu;
          return ju.focus[0] === uu[0] && ju.focus[1] === uu[1] + 1 && ju.focus[2] === uu[2]
        }))) || void 0 === Eu ? void 0 : Eu.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(uu, Eu) {
        return Iq(this.entries(), uu, Eu)
      }
      lookSource() {
        return {
          handles: uu => Ns(uu) >= 0 || Os(uu),
          line: (uu, Eu) => this.lookLine(uu, Eu),
          version: () => this.beamsVersion
        }
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const uu of this.listeners) uu()
      }
    }
    const Qh = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((uu => uu / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((uu => [uu, uu + 1, uu + 2, uu, uu + 2, uu + 3]))
    };

    function ih(uu, Eu, ju, su, Uu, Zu, Xu) {
      let lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const qu = Math.cos(lu),
        fu = Math.sin(lu),
        Cu = uu.positions.length / 3,
        {
          positions: bu,
          indices: cu
        } = Qh;
      for (let Nu = 0; Nu < bu.length; Nu += 3) {
        const lu = bu[Nu] * Uu,
          Cu = bu[Nu + 2] * Xu;
        uu.positions.push(Eu + lu * qu + Cu * fu, ju + bu[Nu + 1] * Zu, su - lu * fu + Cu * qu)
      }
      for (const Nu of cu) uu.indices.push(Cu + Nu)
    }

    function Wh(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return Eu < 1 ? {
        rgb: uu,
        alpha: Eu
      } : {
        rgb: uu,
        alpha: 1,
        opaque: !0
      }
    }
    class Sh {
      constructor(uu, Eu) {
        this.style = uu, this.perSource = Eu, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(uu) {
        this.sources = uu, 0 === uu.length && (this.budget = 0)
      }
      Tb(uu, Eu, ju) {
        const su = this.sources.length;
        if (0 !== su) {
          var Uu, Zu;
          this.budget = Math.min(this.budget + (Uu = su, Zu = this.perSource, Math.min(Uu * Zu, Ef) * Eu), 2);
          for (let Eu = 0; Eu < su && this.budget >= 1; Eu++) {
            const Eu = this.sources[this.cursor % su];
            this.cursor = (this.cursor + 1) % su;
            if (!(Math.max(Math.abs(Eu.x - ju[0]), Math.abs(Eu.y - ju[1]), Math.abs(Eu.z - ju[2])) > 32)) return this.puff(uu, Eu), void this.budget--
          }
        }
      }
      dispose() {
        var uu;
        null === (uu = this.particles) || void 0 === uu || uu.dispose(), this.particles = null, this.sources = []
      }
      puff(uu, Eu) {
        let {
          x: ju,
          y: su,
          z: Uu,
          h: Zu,
          faces: Xu
        } = Eu;
        const lu = function(uu, Eu, ju, su, Uu) {
            const [Zu, Xu, lu] = Uu[Math.floor(Math.random() * Uu.length)], qu = .04, fu = (uu, Eu, ju) => uu > 0 ? Eu + ju + qu : uu < 0 ? Eu - qu : Eu + .1, Cu = (uu, Eu, ju) => uu > 0 ? Eu + ju + qu : uu < 0 ? Eu - qu : Eu + ju - .1, bu = [fu(Zu, uu, 1), fu(Xu, Eu, su), fu(lu, ju, 1)], cu = [Cu(Zu, uu, 1), Cu(Xu, Eu, su), Cu(lu, ju, 1)];
            return {
              pos: [(bu[0] + cu[0]) / 2, (bu[1] + cu[1]) / 2, (bu[2] + cu[2]) / 2],
              half: [(cu[0] - bu[0]) / 2, (cu[1] - bu[1]) / 2, (cu[2] - bu[2]) / 2],
              out: [Zu, Xu, lu]
            }
          }(ju, su, Uu, Zu, Xu),
          {
            style: qu
          } = this,
          fu = this.particles ??= uu.createParticles(VY(qu, Math.ceil(qu.count * Ef * qu.life[1]) + 4), lu);
        fu.moveTo(lu.pos, lu.half);
        const [Cu, bu, cu] = lu.out, Nu = qu.spread;
        fu.setDirections([Cu - Nu, .6 + bu, cu - Nu], [Cu + Nu, 1 + bu, cu + Nu]), fu.emit(qu.count)
      }
    }
    const Ih = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Fh {
      constructor() {
        this.green = new Sh(sf.green, Rq), this.pink = new Sh(sf.pink, uf), this.colliders = [], this.lastMs = 0
      }
      setSources(uu) {
        this.colliders = uu;
        const Eu = [],
          ju = [];
        for (const su of uu) {
          const [uu, Uu, Zu] = su.focus;
          Eu.push({
            x: uu,
            y: Uu - 1,
            z: Zu,
            h: 2,
            faces: Ih
          });
          for (let Eu = 0; Eu < 4; Eu++) {
            if (!su.live[Eu]) continue;
            const [uu, Uu, Zu] = Ds(su.focus, Eu, ls.LASER_D), [Xu, , lu] = hs[Eu], qu = Ih.filter((uu => uu[0] !== Xu || uu[2] !== lu || 0 !== uu[1]));
            ju.push({
              x: uu,
              y: Uu,
              z: Zu,
              h: 1,
              faces: qu
            })
          }
        }
        this.green.setSources(Eu), this.pink.setSources(ju)
      }
      onAfterRender(uu) {
        const Eu = performance.now(),
          ju = 0 === this.lastMs ? 0 : Math.min(Eu - this.lastMs, 250) / 1e3;
        if (this.lastMs = Eu, 0 === this.colliders.length || !uu.particlesEnabled()) return;
        const su = uu.getCameraPosition();
        this.green.Tb(uu, ju, su), this.pink.Tb(uu, ju, su)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Bh = 1.04,
      Lh = Wh([1, 120 / 255, 220 / 255]),
      th = Wh([1, .25, .25], .35);
    class xh {
      constructor(uu) {
        this.store = uu, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Fh
      }
      onAfterRender(uu) {
        this.store.version() !== this.builtVersion && this.rebuild(uu);
        const Eu = performance.now();
        for (const ju of this.beams) {
          const su = 1 + .35 * Math.sin(Eu / 700 * Math.PI * 2 + ju.phase);
          uu.setGameMesh(ju.mesh, {
            scale: [ju.alongX ? 1 : su, su, ju.alongX ? su : 1]
          })
        }
        this.glow.onAfterRender(uu)
      }
      dispose(uu) {
        this.clear(uu), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(uu) {
        this.clear(uu), this.builtVersion = this.store.version();
        const Eu = [];
        for (const {
            entry: ju
          }
          of this.store.colliders()) ju.on && ju.live.some(Boolean) && (this.addBeams(uu, ju), Eu.push(ju)), ju.blockers.length > 0 && this.addMarkers(uu, ju);
        this.glow.setSources(Eu)
      }
      addBeams(uu, Eu) {
        const [ju, su, Uu] = Eu.focus, Zu = zq - .25, Xu = (.25 + zq) / 2;
        for (let lu = 0; lu < 4; lu++) {
          if (!Eu.live[lu]) continue;
          const [qu, , fu] = hs[lu], Cu = 0 !== qu, bu = {
            positions: [],
            indices: []
          };
          ih(bu, 0, 0, 0, Cu ? Zu : .2, .2, Cu ? .2 : Zu);
          const cu = [ju + .5 + qu * Xu, su + .5, Uu + .5 + fu * Xu],
            Nu = uu.createGameMesh(bu, Lh, cu);
          this.meshes.push(Nu), this.beams.push({
            mesh: Nu,
            alongX: Cu,
            phase: lu * Math.PI / 2
          })
        }
      }
      addMarkers(uu, Eu) {
        const ju = Eu.blockers[0],
          su = {
            positions: [],
            indices: []
          };
        for (const [Uu, Zu, Xu] of Eu.blockers) ih(su, Uu - ju[0] + .5, Zu - ju[1] + .5, Xu - ju[2] + .5, Bh, Bh, Bh);
        this.meshes.push(uu.createGameMesh(su, th, ju))
      }
      clear(uu) {
        for (const Eu of this.meshes) uu.disposeGameMesh(Eu);
        this.meshes = [], this.beams = []
      }
    }
    const Th = [.56, .83, 1],
      Hh = [1, .73, .08],
      Ah = [1, .25, .25],
      nh = [.85, .85, .85],
      yh = [.3, .45, .6];

    function zh(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const Xu = Uu / 2,
        lu = Uu + Zu;
      for (const qu of [-Xu, Xu])
        for (const Uu of [-Xu, Xu]) ih(uu, Eu, ju + qu, su + Uu, lu, Zu, Zu), ih(uu, Eu + qu, ju, su + Uu, Zu, lu, Zu), ih(uu, Eu + qu, ju + Uu, su, Zu, Zu, lu)
    }

    function Rh(uu) {
      return Eu => uu.isBlockInLoadedChunk(Eu[0], Eu[1], Eu[2]) && 0 === uu.getBlockId(Eu[0], Eu[1], Eu[2])
    }

    function uD(uu) {
      return uu.map((uu => {
        let {
          free: Eu,
          blocked: ju,
          gaps: su,
          supports: Uu
        } = uu;
        return `${Eu.join(";")}|${ju.join(";")}|${su.join(";")}|${Uu.join(";")}`
      })).join("/")
    }

    function ED(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const Zu = Eu[0],
        Xu = {
          positions: [],
          indices: []
        };
      for (const [lu, qu, fu] of Eu) zh(Xu, lu - Zu[0] + .5, qu - Zu[1] + .5, fu - Zu[2] + .5, su, Uu);
      return uu.createGameMesh(Xu, ju, Zu)
    }
    class jD {
      constructor(uu) {
        this.store = uu, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(uu, Eu, ju) {
        var su;
        const Uu = null === (su = uu.yEu(Eu)) || void 0 === su ? void 0 : su.name;
        if (Uu !== fs && Uu !== qs) return void("" !== this.shownKey && this.show(uu, "", []));
        const Zu = performance.now();
        if (Zu - this.lastCheckMs >= 200 && (this.lastCheckMs = Zu, Uu === fs ? this.check(uu, ju) : this.preview(uu, ju)), this.pulses.length > 0) {
          const Eu = 1 + .12 * Math.sin(Zu / 1e3 * 1.25 * Math.PI * 2),
            ju = [Eu, Eu, Eu];
          for (const su of this.pulses) uu.setGameMesh(su, {
            scale: ju
          })
        }
      }
      dispose(uu) {
        this.clear(uu), this.shownKey = ""
      }
      check(uu, Eu) {
        const ju = Rh(uu),
          su = [];
        for (const {
            entry: Zu
          }
          of this.store.colliders()) {
          Zu.focus.every(((uu, ju) => Math.abs(uu + .5 - Eu[ju]) <= ls.GHOST_REACH)) && su.push(yq(Zu, ju))
        }
        const Uu = uD(su);
        Uu !== this.shownKey && this.show(uu, Uu, su)
      }
      preview(uu, Eu) {
        const ju = uu.getTargetedBlock(),
          su = ju ? [ju.xY[0], ju.xY[1], ju.xY[2]] : null,
          Uu = null !== su && su.every(((uu, ju) => Math.abs(uu + .5 - Eu[ju]) <= 8)),
          Zu = this.store.site(),
          Xu = Uu && Zu ? function(uu, Eu, ju) {
            const su = Ys(uu);
            if (!su.every(Eu)) return null;
            const Uu = es(uu, ju);
            return {
              column: su,
              spots: yq({
                focus: su[1],
                lasers: [!1, !1, !1, !1],
                open: Uu,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, Eu),
              fits: Uu.filter(Boolean).length >= ls.MIN_SPOTS
            }
          }(su, Rh(uu), Zu) : null,
          lu = Xu ? [Xu.spots] : [],
          qu = Xu ? `preview ${su.join(",")}|${Xu.fits}|${uD(lu)}` : "";
        var fu, Cu;
        qu !== this.shownKey && this.show(uu, qu, lu, null !== (fu = null === Xu || void 0 === Xu ? void 0 : Xu.column) && void 0 !== fu ? fu : [], null === (Cu = null === Xu || void 0 === Xu ? void 0 : Xu.fits) || void 0 === Cu || Cu)
      }
      show(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          Uu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(uu), this.shownKey = Eu, su.length > 0 && this.meshes.push(ED(uu, su, Wh(Uu ? nh : Ah)));
        for (const {
            free: Zu,
            blocked: Xu,
            gaps: lu,
            supports: qu
          }
          of ju) {
          for (const [Eu, ju, su] of Zu) {
            const Uu = {
              positions: [],
              indices: []
            };
            zh(Uu, 0, 0, 0);
            const Zu = uu.createGameMesh(Uu, Wh(Th), [Eu + .5, ju + .5, su + .5]);
            this.meshes.push(Zu), this.pulses.push(Zu)
          }
          Xu.length > 0 && this.meshes.push(ED(uu, Xu, Wh(Hh))), lu.length > 0 && this.meshes.push(ED(uu, lu, Wh(Ah), 1.06, .07)), qu.length > 0 && this.meshes.push(ED(uu, qu, Wh(yh)))
        }
      }
      clear(uu) {
        for (const Eu of this.meshes) uu.disposeGameMesh(Eu);
        this.meshes = [], this.pulses = []
      }
    }
    class sD {
      constructor() {
        this.stored = new Map, this.dl = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(uu) {
        if (!uu.baf2TermOpen) return !1;
        uu.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [Eu, ju] of uu.baf2TermItems) ju > 0 ? this.stored.set(Eu, ju) : this.stored.delete(Eu);
        if (uu.baf2TermHeld && (this.dl = new Map(uu.baf2TermHeld)), this.pending = this.pending.filter((Eu => Eu.seq > uu.baf2TermAcked)), this.silos = uu.baf2TermSilos, this.readOnly = uu.baf2TermReadOnly, this.pocket = !0 === uu.baf2TermPocket, uu.baf2TermReset) this.resort();
        else {
          const uu = new Set(this.order);
          for (const Eu of this.stored.keys()) uu.has(Eu) || this.order.push(Eu)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((uu, Eu) => this.amount(Eu) - this.amount(uu) || uu.localeCompare(Eu))), this.changed()
      }
      take(uu, Eu) {
        const ju = lE(uu, this.amount(Eu));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Eu,
          amount: ju,
          put: !1
        }), this.recents = [Eu, ...this.recents.filter((uu => uu !== Eu))].slice(0, 6), this.changed(), jE(this.seq, uu, Eu)
      }
      put(uu, Eu) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: Eu,
          amount: lE(uu, this.heldAmount(Eu)),
          put: !0
        }), this.changed(), sE(this.seq, uu, Eu)
      }
      putAll() {
        this.seq++;
        for (const uu of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: uu,
          amount: this.heldAmount(uu),
          put: !0
        });
        return this.changed(), UE(this.seq)
      }
      amount(uu) {
        var Eu;
        let ju = null !== (Eu = this.stored.get(uu)) && void 0 !== Eu ? Eu : 0;
        for (const su of this.pending) su.item === uu && (ju += su.put ? su.amount : -su.amount);
        return Math.max(0, ju)
      }
      heldAmount(uu) {
        var Eu;
        let ju = null !== (Eu = this.dl.get(uu)) && void 0 !== Eu ? Eu : 0;
        for (const su of this.pending) su.put && su.item === uu && (ju -= su.amount);
        return Math.max(0, ju)
      }
      heldItems() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((Eu => Eu === uu || this.heldAmount(Eu) > 0))
      }
      items() {
        return this.order.filter((uu => this.amount(uu) > 0))
      }
      recent() {
        return this.recents.filter((uu => this.amount(uu) > 0))
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
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      changed() {
        this.version++;
        for (const uu of this.listeners) uu()
      }
    }
    var UD = ju(38751);
    const ZD = {
      isBlock: uu => void 0 !== mu.f[uu],
      harvestType: uu => {
        var Eu;
        return null === (Eu = mu.f[uu]) || void 0 === Eu ? void 0 : Eu.harvestType
      },
      harvestLevel: uu => {
        var Eu;
        return null === (Eu = mu.f[uu]) || void 0 === Eu ? void 0 : Eu.harvestLevel
      },
      dropsNothing: uu => {
        var Eu;
        return null === (null === (Eu = mu.f[uu]) || void 0 === Eu ? void 0 : Eu.drops)
      },
      displayName: uu => {
        var Eu;
        return null === (Eu = ul.l[uu]) || void 0 === Eu ? void 0 : Eu.displayName
      },
      description: uu => {
        var Eu;
        return null === (Eu = ul.l[uu]) || void 0 === Eu ? void 0 : Eu.description
      },
      harvests: uu => {
        var Eu;
        return null === (Eu = ul.l[uu]) || void 0 === Eu ? void 0 : Eu.harvests
      },
      level: uu => {
        var Eu;
        return null === (Eu = ul.l[uu]) || void 0 === Eu ? void 0 : Eu.level
      }
    };

    function XD(uu, Eu, ju) {
      return function(uu, Eu, ju, su) {
        var Uu, Zu;
        const Xu = Eu.split("|")[0],
          lu = uu.isBlock(Eu) ? Eu : uu.isBlock(Xu) ? Xu : null;
        if (null === lu || "rock" !== uu.harvestType(lu) || uu.dropsNothing(lu) && !Is.has(Xu)) return null;
        const qu = ju && "rock" === uu.harvests(ju) ? null !== (Uu = uu.level(ju)) && void 0 !== Uu ? Uu : 0 : null,
          fu = null !== (Zu = null !== su && void 0 !== su ? su : uu.harvestLevel(lu)) && void 0 !== Zu ? Zu : 0;
        return (null !== qu ? fu <= qu : 0 === uu.harvestLevel(lu)) ? null : os(uu, fu)
      }(ZD, uu, Eu, ju)
    }

    function lD(uu, Eu) {
      return function(uu, Eu, ju) {
        if (Eu === Ps[0]) return [(0, Vu.ae)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Vu.G.whiteUiText)];
        const su = ju.split("|")[0],
          Uu = uu.isBlock(su) ? uu.displayName(su) : void 0,
          Zu = "string" === typeof Uu ? Uu : Uu && "translationKey" in Uu ? `$t(${Uu.translationKey})` : su;
        return [(0, Vu.ae)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: Zu
          }
        }, Vu.G.whiteUiText), (0, Vu.ae)({
          translationKey: `item:${(0,Vu.ze)(Eu)}`
        }, Vu.G.yellowUiText)]
      }(ZD, uu, Eu)
    }
    const qD = "buildAFactory2Game:";
    const fD = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function CD(uu) {
      return uu.endsWith(" Ore")
    }
    const bD = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      cD = [],
      ND = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: bD,
        plan: null,
        atomic: cD
      },
      OD = "buildAFactory2Game:",
      YD = new Set(["Splitter", "Sorting Gate"]),
      hD = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class DD {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = uu, this.planAt = Eu, this.tierOf = ju, this.ul = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.dl = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = ND, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(uu, Eu, ju) {
        var su, Uu, Zu;
        let Xu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const lu = null !== (su = null === (Uu = uu.yEu(Eu)) || void 0 === Uu ? void 0 : Uu.name) && void 0 !== su ? su : null,
          qu = uu.isPlayerCrouching(Eu),
          fu = 0 === ju ? null : this.resolve(uu, ju),
          Cu = null !== fu && null !== Xu && YD.has(fu.rootName) && function(uu, Eu) {
            return hD.some((ju => {
              let [su, Uu] = ju;
              const Zu = uu.getBlockId(Eu[0] + su, Eu[1], Eu[2] + Uu);
              return 0 !== Zu && "Express Belt" === uu.getMetaInfo(Zu).rootName
            }))
          }(uu, Xu),
          bu = this.updatePlan(0 === ju ? null : Xu),
          cu = this.tierOf(),
          Nu = null === Xu ? null : (0, UD.f)(ju),
          Ou = null !== Nu && null !== Xu && (0, UD.h)(function(uu) {
            return (Eu, ju, su) => uu.getBlockId(Eu, ju, su)
          }(uu), Xu[0], Xu[1], Xu[2], Nu),
          Yu = this.readAfloat(uu, ju, Xu);
        if (ju === this.ul && Ou === this.missesMaker && Yu === this.afloat && lu === this.dl && qu === this.crouching && Cu === this.express && cu === this.tier && !bu && (!this.targetsLive || !this.liveMoved(Xu))) return;
        this.ul = ju, this.missesMaker = Ou, this.afloat = Yu, this.dl = lu, this.crouching = qu, this.express = Cu;
        const hu = Cu && fu ? function(uu) {
          if (null === uu.info) return null;
          return uu.express ??= {
            ...uu.info,
            detail: `${OD}lookKeepsUpExpress`,
            detailItem: null
          }, uu.express
        }(fu) : null !== fu && Ou && null !== Nu ? this.besideMaker(fu, ju, Nu) : null !== fu && Yu ? this.hanging(fu) : null !== (Zu = null === fu || void 0 === fu ? void 0 : fu.info) && void 0 !== Zu ? Zu : null;
        this.tier = cu;
        const Du = fu && hu ? function(uu, Eu) {
          var ju, su;
          const Uu = mu.f[uu];
          if (!uu.endsWith(" Ore") || "rock" !== (null === Uu || void 0 === Uu ? void 0 : Uu.harvestType) || 0 === Uu.harvestLevel) return null;
          const Zu = null !== (ju = Uu.harvestLevel) && void 0 !== ju ? ju : 0,
            Xu = Eu ? ul.l[Eu] : void 0;
          if ("rock" === (null === Xu || void 0 === Xu ? void 0 : Xu.harvests) && (null !== (su = Xu.level) && void 0 !== su ? su : 0) >= Zu) return null;
          const lu = (qu = Zu, os(ZD, qu));
          var qu;
          if (null === lu) return null;
          const fu = UZ(lu),
            Cu = /^[AEIOU]/.test(lu) ? "An" : "";
          if ("rock" === (null === Xu || void 0 === Xu ? void 0 : Xu.harvests) && Eu) return {
            key: `${OD}lookToolTooWeak${Cu}`,
            dl: UZ(Eu),
            needed: fu
          };
          return {
            key: lu === Ps[0] ? `${OD}lookNeedAnyPickaxe` : `${OD}lookNeedPickaxe${Cu}`,
            dl: null,
            needed: fu
          }
        }(fu.rootName, lu) : null;
        this.targetsLive = !0 === (null === fu || void 0 === fu ? void 0 : fu.live) && null !== Xu;
        let gu = null;
        this.targetsLive && fu && Xu && this.live && (this.livePos[0] = Xu[0], this.livePos[1] = Xu[1], this.livePos[2] = Xu[2], this.liveVersion = this.live.version(), gu = this.live.line(fu.rootName, Xu));
        const Mu = null === hu ? bD : function(uu, Eu, ju) {
            const su = function(uu, Eu, ju) {
              const su = Kj(uu);
              if (null === su) return null;
              const Uu = `${qD}lookPortMode_${su}`,
                Zu = Ls(Eu);
              if (Zu && ju) return {
                mode: null,
                detail: Uu,
                next: `${qD}lookWrenchPickUp`,
                nextState: null
              };
              const Xu = Vj(uu),
                lu = null === Xu ? null : Kj(Xu);
              return null === lu ? {
                mode: null,
                detail: Uu,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: Uu,
                next: Zu ? `${qD}lookWrenchNext` : `${qD}lookPortWrench`,
                nextState: `${qD}lookPortState_${lu}`
              }
            }(uu, Eu, ju);
            if (null !== su) return su;
            const Uu = UU(uu, Eu, ju);
            return null === Uu.mode && null === Uu.next ? bD : Uu
          }(uu.blockIdToBlockName(ju), lu, qu),
          eu = this.plan,
          Gu = fu && hu ? this.rowsOf(fu.rootName, cu) : cD,
          pu = this.snapshot;
        if (!(null === hu ? !pu.visible : pu.visible && hu === pu.info && (wu = Du, Ju = pu.tool, wu === Ju || null !== wu && null !== Ju && wu.key === Ju.key && wu.dl === Ju.dl && wu.needed === Ju.needed) && function(uu, Eu) {
            return uu === Eu || null !== uu && null !== Eu && uu.key === Eu.key && JSON.stringify([uu.params, uu.keys]) === JSON.stringify([Eu.params, Eu.keys])
          }(gu, pu.live) && function(uu, Eu) {
            return uu.mode === Eu.mode && uu.detail === Eu.detail && uu.next === Eu.next && uu.nextState === Eu.nextState
          }(Mu, pu.wrench) && AO(eu, pu.plan) && Gu === pu.atomic)) {
          var wu, Ju;
          this.snapshot = null === hu ? {
            ...pu,
            visible: !1
          } : {
            info: hu,
            visible: !0,
            tool: Du,
            live: gu,
            wrench: Mu,
            plan: eu,
            atomic: Gu
          };
          for (const uu of this.listeners) uu()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = ND, this.ul = 0, this.dl = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(uu, Eu, ju) {
        if (null === ju || 0 === Eu || !lu() || !CD(this.resolve(uu, Eu).rootName)) return !1;
        const su = `${ju[0]},${ju[1]},${ju[2]},${Eu}`,
          Uu = performance.now();
        return su === this.afloatKey && Uu - this.afloatAt < gD ? this.afloat : (this.afloatKey = su, this.afloatAt = Uu, function(uu, Eu) {
          for (const [ju, su, Uu] of fD) {
            const Zu = Eu(uu[0] + ju, uu[1] + su, uu[2] + Uu);
            if (void 0 === Zu || null !== Zu && !CD(Zu)) return !1
          }
          return !0
        }(ju, ((Eu, ju, su) => function(uu, Eu, ju, su) {
          if (!uu.isBlockInLoadedChunk(Eu, ju, su)) return;
          const Uu = uu.getBlockId(Eu, ju, su);
          return 0 === Uu ? null : uu.getMetaInfo(Uu).rootName
        }(uu, Eu, ju, su))))
      }
      liveMoved(uu) {
        var Eu;
        const {
          livePos: ju
        } = this;
        return null === uu || uu[0] !== ju[0] || uu[1] !== ju[1] || uu[2] !== ju[2] || (null === (Eu = this.live) || void 0 === Eu ? void 0 : Eu.version()) !== this.liveVersion
      }
      updatePlan(uu) {
        const Eu = null === uu ? "" : uu.join(","),
          ju = performance.now();
        if (Eu === this.planPos && ju - this.planMs < 250) return !1;
        this.planPos = Eu, this.planMs = ju;
        const su = null === uu ? null : this.planAt([uu[0], uu[1], uu[2]]),
          Uu = !AO(su, this.plan);
        return this.plan = su, Uu
      }
      besideMaker(uu, Eu, ju) {
        let {
          info: su
        } = uu;
        if (null === su) return null;
        let Uu = this.besideMakerById.get(Eu);
        if (void 0 === Uu) {
          const uu = "cryo" === ju ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          Uu = {
            ...su,
            detail: `${OD}${uu}`,
            detailItem: null
          }, this.besideMakerById.set(Eu, Uu)
        }
        return Uu
      }
      hanging(uu) {
        let {
          info: Eu,
          rootName: ju
        } = uu;
        if (null === Eu) return null;
        let su = this.afloatByRoot.get(ju);
        return void 0 === su && (su = {
          ...Eu,
          detail: `${OD}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(ju, su)), su
      }
      rowsOf(uu, Eu) {
        if (null === Eu) return cD;
        const ju = `${uu}|${Eu}`;
        let su = this.rowsByKey.get(ju);
        if (void 0 === su) {
          const Uu = function(uu, Eu) {
            var ju;
            if (!(uu in VE)) return [];
            const su = null !== (ju = rE[uu]) && void 0 !== ju ? ju : [],
              Uu = new Map;
            for (const Xu of LZ(uu, Eu))
              if ((su.includes(Xu) || BZ(Xu.output) && IZ(Xu.output) > nu(uu)) && IZ(Xu.output) <= Eu) {
                var Zu;
                const uu = null !== (Zu = Uu.get(Xu.output)) && void 0 !== Zu ? Zu : [];
                uu.push(Xu.input), Uu.set(Xu.output, uu)
              } return xZ([...Uu], (uu => {
              let [Eu] = uu;
              return -IZ(Eu)
            })).map((uu => {
              let [Eu, ju] = uu;
              return {
                output: Eu,
                inputs: ju
              }
            }))
          }(uu, Eu);
          su = Uu.length > 0 ? Uu : cD, this.rowsByKey.set(ju, su)
        }
        return su
      }
      resolve(uu, Eu) {
        const {
          rootId: ju,
          rootName: su
        } = uu.getMetaInfo(Eu), Uu = (0, Oj.h)(su) ? Eu : ju;
        let Zu = this.byRootId.get(Uu);
        const Xu = lu();
        if (void 0 === Zu || Zu.nuclear !== Xu) {
          var qu;
          const ju = function(uu) {
            return Ws(ZD, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu)
          }(su, uu.blockIdToBlockName(Eu));
          Zu = {
            info: ju,
            rootName: su,
            live: null !== ju && !0 === (null === (qu = this.live) || void 0 === qu ? void 0 : qu.handles(su)),
            nuclear: Xu
          }, this.byRootId.set(Uu, Zu)
        }
        return Zu
      }
    }
    const gD = 500;
    const MD = (0, su.memo)((function(uu) {
      var Eu, ju;
      let {
        store: Uu
      } = uu;
      const {
        t: Zu
      } = (0, oU.A)(), [Xu, lu] = (0, su.useState)((() => Uu.get()));
      (0, su.useEffect)((() => (lu(Uu.get()), Uu.subscribe((() => {
        lu(Uu.get())
      })))), [Uu]);
      const {
        openInGameMenuName: qu,
        openEverythingMenuName: fu,
        isTouchScreen: Cu
      } = (0, GU.l)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: bu,
        tool: cu,
        live: Nu,
        wrench: Ou,
        atomic: Yu
      } = Xu, hu = Xu.visible && null === qu && null === fu;
      if (null === bu) return null;
      const Du = null !== Ou.detail ? Zu(Ou.detail) : null !== (Eu = Xu.plan) && void 0 !== Eu && Eu.ctrl ? Zu("buildAFactory2Game:lookPlanCtrl") : null !== bu.detail ? Zu(bu.detail, null === bu.detailItem ? void 0 : {
        item: Zu(bu.detailItem)
      }) : null;
      return (0, aZ.jsxs)("div", {
        className: JU()("Baf2LookTarget", {
          Visible: hu
        }),
        "aria-hidden": !hu,
        children: [(0, aZ.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: Zu(bu.name)
        }), null !== Xu.plan && (0, aZ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Zu(Xu.plan.key, {
            kind: Zu(Xu.plan.kindKey),
            w: String(Xu.plan.w),
            h: String(Xu.plan.h),
            d: String(Xu.plan.d),
            count: String(Xu.plan.count)
          })
        }), void 0 !== (null === (ju = Xu.plan) || void 0 === ju ? void 0 : ju.why) && (0, aZ.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Zu(Xu.plan.why)
        }), null !== Ou.mode && (0, aZ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Zu(Ou.mode)
        }), null !== cu ? (0, aZ.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Zu(cu.key, {
            item: Zu(cu.needed),
            dl: null === cu.dl ? "" : Zu(cu.dl)
          })
        }) : null !== Nu ? (0, aZ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Zu(Nu.key, Uf(Zu, Nu))
        }) : null !== Du && (0, aZ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Du
        }), Yu.length > 0 && (0, aZ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Zu("buildAFactory2Game:lookAtomicRecipes", {
            list: Yu.map((uu => {
              let {
                output: Eu,
                inputs: ju
              } = uu;
              const su = ju.length > 1 ? ` ${Zu("buildAFactory2Game:recipeMore",{count:String(ju.length-1)})}` : "";
              return `${Zu(UZ(ju[0]))}${su} \u2192 ${Zu(UZ(Eu))}`
            })).join(", ")
          })
        }), null !== Ou.next && (0, aZ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Zu(Ou.next, {
            state: null === Ou.nextState ? "" : Zu(Ou.nextState),
            use: Zu(Cu ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var eD = ju(38836);
    const GD = [],
      pD = [
        [0, -1, 0]
      ];

    function wD(uu) {
      const Eu = [uu];
      for (let ju = 1; ju <= 4; ju++) ju > 1 && Eu.push(`${uu}|meta|rot${ju}`), Eu.push(`${uu}|meta|rot${ju}|Running`);
      return Eu
    }

    function JD(uu, Eu) {
      return [Math.floor(uu[0] / Eu), Math.floor(uu[1] / Eu), Math.floor(uu[2] / Eu)]
    }

    function dD(uu, Eu, ju) {
      return `${uu},${Eu},${ju}`
    }

    function aD(uu) {
      const Eu = uu.split("|")[0];
      if (!fj(Eu)) return GD;
      const ju = VE[Eu];
      if (Ej(ju)) return pD;
      const su = Jh(uu);
      return jj(ju) ? [
        [-su[0], -su[1], -su[2]]
      ] : dU(ju) ? function(uu, Eu) {
        const ju = uu[0] - 2 * Eu[0],
          su = uu[2] - 2 * Eu[2],
          Uu = [];
        for (let Zu = -1; Zu <= 1; Zu++)
          for (let Eu = -1; Eu <= 1; Eu++) Uu.push([ju + Zu, uu[1], su + Eu]);
        return Uu
      }([0, 0, 0], su) : GD
    }
    const PD = [.5, .5, .5],
      oD = [.2, .8, .3],
      kD = [.45, 1, .5];
    class mD {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(uu) {
        this.indexed = !0;
        for (const Eu of PE)
          for (const ju of wD(Eu)) {
            const Eu = uu.blockNameToBlockId(ju, !0),
              su = aD(ju);
            null !== Eu && su.length > 0 && (this.offsetsList.push(su), this.offsetsIndexById[Eu] = this.offsetsList.length)
          }
      }
      onAfterRender(uu, Eu) {
        this.indexed || this.index(uu);
        const ju = performance.now();
        if (ju - this.lastCheckMs < 100) return;
        this.lastCheckMs = ju, this.checks++;
        const su = hO.e.hO,
          [Uu, Zu, Xu] = JD(Eu, su);
        let lu = !1;
        const qu = [];
        let fu = 0;
        for (let Cu = Uu - 2; Cu <= Uu + 2; Cu++)
          for (let Eu = Zu - 1; Eu <= Zu + 1; Eu++)
            for (let Uu = Xu - 2; Uu <= Xu + 2; Uu++) {
              const Zu = fu++,
                Xu = dD(Cu, Eu, Uu),
                bu = uu.getChunkVersion(Cu, Eu, Uu);
              let cu = this.chunks.get(Xu);
              null !== bu ? (cu || (cu = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(Xu, cu)), cu.seenAt = this.checks, cu.checkedVersion !== bu && (cu.checkedVersion = bu, lu = !0), cu.scannedVersion !== bu && ju - cu.scannedAt >= 500 && qu.push({
                slot: Zu,
                entry: cu,
                origin: [Cu * su, Eu * su, Uu * su]
              })) : (lu ||= void 0 !== cu, this.chunks.delete(Xu))
            }
        this.scanDue(uu, qu) && (lu = !0);
        for (const [Cu, bu] of this.chunks) bu.seenAt !== this.checks && (lu ||= bu.machines.length > 0, this.chunks.delete(Cu));
        for (const Cu of this.chunks.values())
          for (const [Eu, ju, su] of Cu.cellChunks)(Math.abs(Eu - Uu) > 2 || Math.abs(ju - Zu) > 1 || Math.abs(su - Xu) > 2) && this.watchCellChunk(uu, Eu, ju, su) && (lu = !0);
        for (const [Cu, bu] of this.cellChunks) bu.seenAt !== this.checks && this.cellChunks.delete(Cu);
        lu && this.refresh(uu)
      }
      dispose(uu) {
        this.clearMeshes(uu), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(uu, Eu) {
        const ju = Math.max(Eu.findIndex((uu => {
          let {
            slot: Eu
          } = uu;
          return Eu >= this.scanFrom
        })), 0);
        let su = 96;
        for (let Uu = 0; Uu < Eu.length; Uu++) {
          const {
            slot: Zu,
            entry: Xu,
            origin: lu
          } = Eu[(ju + Uu) % Eu.length];
          if (su -= this.scan(uu, Xu, lu), su <= 0) {
            this.scanFrom = Zu + 1;
            break
          }
        }
        return Eu.length > 0
      }
      scan(uu, Eu, ju) {
        let [su, Uu, Zu] = ju;
        const Xu = hO.e.hO,
          lu = this.hits;
        lu.length = 0;
        const qu = uu.scanBlocks(su, Uu, Zu, su + Xu, Uu + Xu, Zu + Xu, this.offsetsIndexById, lu),
          fu = [];
        for (let Cu = 0; Cu < lu.length; Cu += 4) fu.push({
          pos: [lu[Cu], lu[Cu + 1], lu[Cu + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[lu[Cu + 3]] - 1]
        });
        return Eu.machines = fu, Eu.cellChunks = function(uu, Eu) {
          const ju = new Set,
            su = [];
          for (const {
              pos: Uu,
              offsets: Zu
            }
            of uu)
            for (const [uu, Xu, lu] of Zu) {
              const Zu = JD([Uu[0] + uu, Uu[1] + Xu, Uu[2] + lu], Eu),
                qu = dD(...Zu);
              ju.has(qu) || (ju.add(qu), su.push(Zu))
            }
          return su
        }(fu, Xu), Eu.scannedVersion = Eu.checkedVersion, Eu.scannedAt = performance.now(), Math.max(qu, 1)
      }
      watchCellChunk(uu, Eu, ju, su) {
        const Uu = dD(Eu, ju, su),
          Zu = uu.getChunkVersion(Eu, ju, su),
          Xu = this.cellChunks.get(Uu);
        return null === Zu ? this.cellChunks.delete(Uu) : (null === Xu || void 0 === Xu ? void 0 : Xu.version) === Zu ? (Xu.seenAt = this.checks, !1) : (this.cellChunks.set(Uu, {
          version: Zu,
          seenAt: this.checks
        }), !0)
      }
      refresh(uu) {
        const Eu = function(uu, Eu) {
            const ju = new Set,
              su = [];
            for (const {
                pos: Uu,
                offsets: Zu
              }
              of uu)
              for (const [uu, Xu, lu] of Zu) {
                const Zu = Uu[0] + uu,
                  qu = Uu[1] + Xu,
                  fu = Uu[2] + lu,
                  Cu = `${Zu},${qu},${fu}`;
                ju.has(Cu) || (ju.add(Cu), Eu(Zu, qu, fu) && su.push([Zu, qu, fu]))
              }
            return su
          }([...this.chunks.values()].flatMap((uu => uu.machines)), ((Eu, ju, su) => uu.isBlockInLoadedChunk(Eu, ju, su) && 0 === uu.getBlockId(Eu, ju, su))),
          ju = Eu.join(";");
        ju !== this.shownKey && (this.shownKey = ju, this.clearMeshes(uu), Eu.length > 0 && (this.meshes = [this.build(uu, Eu, !1), this.build(uu, Eu, !0)]))
      }
      build(uu, Eu, ju) {
        const su = Eu[0],
          Uu = [],
          Zu = [];
        for (const [Xu, lu, qu] of Eu)(0, eD.c)(Uu, Zu, [Xu - su[0] + .5, lu - su[1] + .5, qu - su[2] + .5], PD, ju);
        return uu.createGameMesh({
          positions: Uu,
          indices: Zu
        }, {
          rgb: ju ? kD : oD,
          alpha: .4
        }, su)
      }
      clearMeshes(uu) {
        for (const Eu of this.meshes) uu.disposeGameMesh(Eu);
        this.meshes = []
      }
    }
    const vD = 1 / .6,
      KD = 200,
      VD = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      rD = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      QD = 2 * Math.PI / 3;
    class iD {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VD;
        this.style = uu, this.particles = null, this.points = new Float32Array(800), this.budget = KD, this.lastMs = 0
      }
      static blade() {
        return new iD(rD)
      }
      gM(uu, Eu) {
        const ju = Math.min(Eu.arcStruck, Eu.arcPoints.length);
        this.draw(uu, [Eu.arcFrom, ...Eu.arcPoints], Eu.arcPoints.slice(0, ju))
      }
      onBlade(uu, Eu) {
        const [ju, su, Uu] = Eu.bladeCentre, [Zu, Xu] = Eu.bladeFacing, lu = ju - 1.5 * Zu, qu = Uu - 1.5 * Xu, fu = Math.atan2(Xu, Zu), Cu = [];
        for (let bu = 0; bu <= 8; bu++) {
          const uu = fu - QD / 2 + QD * bu / 8;
          Cu.push([lu + 2.5 * Math.cos(uu), su, qu + 2.5 * Math.sin(uu)])
        }
        this.draw(uu, Cu, Eu.bladeStruck)
      }
      dispose() {
        var uu;
        null === (uu = this.particles) || void 0 === uu || uu.stop(), this.particles = null
      }
      draw(uu, Eu, ju) {
        if (!uu.particlesEnabled() || Eu.length < 2) return;
        const su = performance.now();
        this.budget = Math.min(KD, this.budget + (su - this.lastMs) / 1e3 * KD), this.lastMs = su;
        const Uu = [];
        let Zu = 0,
          Xu = Eu[0];
        for (const Du of Eu.slice(1)) {
          const uu = Math.min(48, Math.round(Math.hypot(Du[0] - Xu[0], Du[1] - Xu[1], Du[2] - Xu[2]) * this.style.perBlock));
          Uu.push([Xu, Du, uu]), Zu += uu, Xu = Du
        }
        const lu = ju.length;
        Zu += 10 * lu;
        const qu = Zu > this.budget ? this.budget / Zu : 1;
        if (0 === Zu || qu * Zu < 1) return;
        const fu = Eu[0],
          [Cu, bu, cu] = fu,
          Nu = this.points;
        let Ou = 0;
        const Yu = (uu, Eu, ju, su) => {
          const Uu = 4 * Ou;
          Nu[Uu] = uu - Cu, Nu[Uu + 1] = Eu - bu, Nu[Uu + 2] = ju - cu, Nu[Uu + 3] = su, Ou++
        };
        Uu.forEach(((uu, Eu) => {
          let [ju, su, Uu] = uu;
          const Zu = Math.min(Math.floor(Uu * qu), KD - Ou),
            Xu = Math.hypot(su[0] - ju[0], su[1] - ju[1], su[2] - ju[2]),
            lu = 0 === Eu && Xu > 0 ? Math.min(.5, .1 * Xu) / Xu : 0;
          for (let qu = 0; qu < Zu; qu++) {
            const uu = lu + (qu + .5) / Zu * (1 - lu);
            Yu(ju[0] + (su[0] - ju[0]) * uu, ju[1] + (su[1] - ju[1]) * uu, ju[2] + (su[2] - ju[2]) * uu, .15)
          }
        }));
        const hu = Math.floor(10 * qu);
        for (let Du = 0; Du < lu; Du++) {
          const [uu, Eu, su] = ju[Du];
          for (let ju = 0; ju < hu && Ou < KD; ju++) Yu(uu, Eu, su, 2.5)
        }
        this.budget -= Ou, this.particles ??= uu.createParticles(function(uu) {
          const [Eu, ju] = uu.colours;
          return {
            texture: "square_particle",
            Mb: 400,
            minLifeTime: uu.life[0] / vD,
            maxLifeTime: uu.life[1] / vD,
            minSize: uu.size[0],
            maxSize: uu.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [Eu[0], Eu[1], Eu[2], 1],
              maxColor: [ju[0], ju[1], ju[2], 1]
            }, {
              timeFraction: 1,
              minColor: [Eu[0], Eu[1], Eu[2], 0],
              maxColor: [ju[0], ju[1], ju[2], 0]
            }],
            blendMode: Ql.e.Add
          }
        }(this.style), {
          pos: fu
        }), this.particles.emitPoints(fu, Nu, Ou)
      }
    }
    const WD = new Set(["Sky Spring"]);

    function SD(uu, Eu, ju) {
      const su = uu.split("|")[0];
      return "Air" !== Eu || ju || ! function(uu) {
        const Eu = uu.split("|")[0];
        return void 0 !== Xj[Eu] || WD.has(Eu)
      }(su) ? null : uu
    }
    class ID {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(uu) {
        const Eu = uu - this.lastTapAt >= 300;
        return this.lastTapAt = uu, Eu
      }
    }
    class FD {
      constructor() {
        this.presses = new ID, this.predicted = null
      }
      tap(uu, Eu) {
        const ju = this.presses.isNewPress(Eu);
        return ju && (this.predicted = {
          station: uu,
          at: Eu
        }), ju
      }
      consumeServerOpen(uu, Eu) {
        const ju = this.predicted;
        return !(null === ju || ju.station !== uu || Eu - ju.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class BD {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(uu, Eu) {
        return uu && (this.thrustAt = Eu), Eu - this.thrustAt < 200
      }
    }
    const LD = [.1, .05, .1],
      tD = {
        texture: "effect_5",
        Mb: Math.ceil(48),
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
        blendMode: Ql.e.OneOne
      };
    class xD {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new BD, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      gM(uu, Eu) {
        for (const [ju, su] of Eu.baf2JetFlames) uu.isLocalPlayer(ju) || (su ? this.lit.add(ju) : this.lit.delete(ju))
      }
      onAfterRender(uu, Eu) {
        const ju = performance.now(),
          su = this.hold.lit(this.selfThrusting(uu, Eu), ju);
        for (const [Uu, Zu] of this.flames)(Uu === Eu ? su : this.lit.has(Uu)) || this.setEmitting(Zu, !1), Uu === Eu || uu.getPositionView(Uu) ? !Zu.emitting && ju - Zu.offAt >= 1300 && (Zu.particles.stop(), this.flames.delete(Uu)) : (Zu.particles.dispose(), this.flames.delete(Uu), this.lit.delete(Uu));
        su && this.draw(uu, Eu, Eu);
        for (const Uu of this.lit) this.draw(uu, Eu, Uu)
      }
      dispose() {
        for (const uu of this.flames.values()) uu.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(uu, Eu) {
        var ju;
        const su = uu.getLocalPlayerMovement();
        return !!su && (null !== (Uu = {
          option: null !== (ju = uu.getClientOption(Eu, "jumpHoldThrust")) && void 0 !== ju ? ju : null,
          jumping: su.jumpHeld,
          onGround: su.onGround,
          alive: uu.isAlive(Eu)
        }).option && Uu.option.maxUpSpeed >= 0 && Uu.jumping && !Uu.onGround && Uu.alive);
        var Uu
      }
      draw(uu, Eu, ju) {
        var su, Uu;
        const Zu = this.pos;
        if (!uu.readDrawnPosition(ju, Zu)) return;
        const Xu = uu.readDrawnPosition(Eu, this.camera) ? this.camera : Zu;
        if (!((Zu[0] - Xu[0]) ** 2 + (Zu[1] - Xu[1]) ** 2 + (Zu[2] - Xu[2]) ** 2 < 1600) || !uu.particlesEnabled()) {
          const uu = this.flames.get(ju);
          return void(uu && this.setEmitting(uu, !1))
        }
        const lu = null !== (su = this.flames.get(ju)) && void 0 !== su ? su : this.create(uu, ju, Zu),
          qu = null !== (Uu = uu.getDrawnHeading(ju)) && void 0 !== Uu ? Uu : 0,
          fu = this.at;
        fu[0] = Zu[0] - .35 * Math.sin(qu), fu[1] = Zu[1] + 1.05, fu[2] = Zu[2] - .35 * Math.cos(qu), lu.particles.moveTo(fu), this.setEmitting(lu, !0)
      }
      setEmitting(uu, Eu) {
        uu.emitting !== Eu && (uu.emitting = Eu, Eu || (uu.offAt = performance.now()), uu.particles.setEmitRate(Eu ? 60 : 0))
      }
      create(uu, Eu, ju) {
        const su = {
          particles: uu.createParticles(tD, {
            pos: ju,
            half: LD
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(Eu, su), su
      }
    }

    function TD(uu) {
      return "Reactor Frame" === Us("reactor", uu)
    }

    function HD(uu) {
      return Wj("reactor", uu) && !TD(uu) && (uu.startsWith("Reactor Glass") || uu.startsWith("Reactor Port"))
    }
    const AD = "baf2Goal";
    class nD {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [rU.h.subscribe("setDirectionArrow", (uu => {
          let {
            id: Eu,
            position: ju
          } = uu;
          Eu === AD && (this.goal = ju, this.checkedAt = -1 / 0)
        })), rU.h.subscribe("clearDirectionArrow", (uu => {
          let {
            id: Eu
          } = uu;
          null !== Eu && Eu !== AD || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const uu of this.subs) rU.h.unsubscribe(uu)
      }
      sideOf(uu, Eu, ju, su) {
        const Uu = this.goal;
        if (!Uu) return 0;
        ju - this.checkedAt > 1e3 && (this.checkedAt = ju, this.open = function(uu, Eu) {
          const [ju, su, Uu] = uu.map(Math.floor);
          if (!HD(Eu(ju, su, Uu))) return null;
          for (const [Zu, Xu] of [
              [1, 0],
              [0, 1]
            ]) {
            const uu = Eu(ju + Zu, su, Uu + Xu),
              lu = Eu(ju - Zu, su, Uu - Xu);
            if (TD(lu) && HD(uu)) return [Zu, 0, Xu];
            if (TD(uu) && HD(lu)) return [0 - Zu, 0, 0 - Xu]
          }
          return null
        }(Uu, ((Eu, ju, su) => uu.blockIdToBlockName(uu.getBlockId(Eu, ju, su)))));
        const Zu = this.open;
        if (!Zu) return 0;
        const Xu = su(Uu);
        if (Math.abs(Xu.x - Eu.x) > .05 || Math.abs(Xu.y - Eu.y) > .05) return 0;
        const lu = su([Uu[0] + Zu[0], Uu[1], Uu[2] + Zu[2]]).x - Xu.x;
        return Math.abs(lu) < .3 ? 0 : lu > 0 ? 1 : -1
      }
    }
    class yD {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new nD, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.fO = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.rD = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((uu => {
          for (const Eu of uu) Eu.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(Eu.target, Eu.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.fO || this.clear()
        }, window.addEventListener("resize", this.rD)
      }
      onAfterRender(uu, Eu) {
        var ju;
        this.api = uu, this.project = null !== (ju = null === Eu || void 0 === Eu ? void 0 : Eu.projectWorldPosToScreenPos) && void 0 !== ju ? ju : null, this.queued || this.fO || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.fO = !0;
        for (const uu of this.moved.keys()) uu.style.transform = "";
        this.moved.clear();
        for (const uu of this.sideLabels.keys()) uu.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.rD)
      }
      clear() {
        for (const Zu of this.moved.keys()) Zu.isConnected || this.moved.delete(Zu);
        for (const Zu of this.sideLabels.keys()) Zu.isConnected || this.sideLabels.delete(Zu);
        if (0 === this.arrows.length) return;
        const uu = performance.now(),
          Eu = uu - this.refreshedAt > 1e3;
        Eu && (this.refreshedAt = uu, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const ju = this.trackerBox(),
          su = this.barsBox(),
          Uu = this.toastBox(Eu);
        (ju || su || Uu) && Eu && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let Zu = 0; Zu < this.arrows.length; Zu++) {
          const Eu = this.arrows[Zu];
          this.labelOffsets.set(Eu, this.runLabelAside(Eu, uu));
          const Xu = (ju ? this.shiftLeftOf(Eu, ju) : 0) || this.shiftOnScreen(Eu),
            lu = Math.min(su ? this.liftAbove(Eu, su, Xu) : 0, Uu ? this.liftAbove(Eu, Uu, Xu) : 0),
            qu = this.moved.get(Eu);
          if (0 !== Xu || 0 !== lu) {
            const uu = 0 === lu ? `translateX(${Xu}px)` : `translate(${Xu}px, ${lu}px)`;
            qu !== uu && (Eu.style.transform = uu, this.moved.set(Eu, uu))
          } else void 0 !== qu && (Eu.style.transform = "", this.moved.delete(Eu))
        }
      }
      trackerBox() {
        var uu, Eu;
        const ju = null !== (uu = this.tracker) && void 0 !== uu && uu.isConnected ? this.tracker : null !== (Eu = this.trackers[0]) && void 0 !== Eu ? Eu : null;
        if (ju !== this.tracker && this.watch(ju), this.boxStale && ju) {
          var su, Uu, Zu;
          this.boxStale = !1;
          const uu = ju.closest(".NoRoom") ? null : ju.getBoundingClientRect(),
            Eu = uu && uu.width > 0 ? null === (su = this.hud) || void 0 === su ? void 0 : su.getBoundingClientRect() : void 0,
            Xu = uu && Eu ? Math.max(uu.top, Eu.top) : null !== (Uu = null === uu || void 0 === uu ? void 0 : uu.top) && void 0 !== Uu ? Uu : 0,
            lu = uu && Eu ? Math.min(uu.bottom, Eu.bottom) : null !== (Zu = null === uu || void 0 === uu ? void 0 : uu.bottom) && void 0 !== Zu ? Zu : 0;
          this.box = uu && uu.width > 0 && lu > Xu ? {
            left: uu.left,
            top: Xu,
            right: uu.right,
            bottom: lu
          } : null
        }
        return ju ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var uu;
          this.barsStale = !1;
          const Eu = null === (uu = this.statBars[0]) || void 0 === uu ? void 0 : uu.getBoundingClientRect();
          this.bars = Eu && Eu.width > 0 && Eu.height > 0 ? {
            left: Eu.left,
            top: Eu.top,
            right: Eu.right,
            bottom: Eu.bottom
          } : null
        }
        return this.bars
      }
      toastBox(uu) {
        var Eu;
        const ju = null !== (Eu = this.toasts[0]) && void 0 !== Eu ? Eu : null;
        if (ju !== this.toastEl || uu && ju) {
          this.toastEl = ju;
          const uu = null === ju || void 0 === ju ? void 0 : ju.getBoundingClientRect();
          this.toast = uu && uu.width > 0 && uu.height > 0 ? {
            left: uu.left,
            top: uu.top,
            right: uu.right,
            bottom: uu.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(uu, Eu, ju) {
        var su;
        const Uu = this.anchorOf(uu);
        if (!Uu) return 0;
        const Zu = Uu.x + ju + (null !== (su = this.labelOffsets.get(uu)) && void 0 !== su ? su : 0),
          {
            halfWidth: Xu,
            labelled: lu
          } = this.extentOf(uu),
          qu = Uu.y + this.em * (lu ? 6.2 : 3);
        return qu < Eu.top - 6 || Zu + Xu < Eu.left - 6 || Zu - Xu > Eu.right + 6 ? 0 : Eu.top - 6 - qu
      }
      watch(uu) {
        var Eu, ju;
        this.tracker && this.sizes.unobserve(this.tracker), null === (Eu = this.hud) || void 0 === Eu || Eu.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = uu, this.hud = null !== (ju = null === uu || void 0 === uu ? void 0 : uu.closest(".Baf2QuestHud")) && void 0 !== ju ? ju : null, this.box = null, this.boxStale = !0, uu && this.sizes.observe(uu), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(uu, Eu) {
        var ju;
        const su = this.anchorOf(uu);
        if (!su) return 0;
        const {
          y: Uu
        } = su, Zu = su.x + (null !== (ju = this.labelOffsets.get(uu)) && void 0 !== ju ? ju : 0), Xu = this.em, {
          halfWidth: lu,
          labelled: qu
        } = this.extentOf(uu), fu = Uu - Xu, Cu = Zu + lu;
        return Uu + Xu * (qu ? 6.2 : 3) < Eu.top || fu > Eu.bottom || Cu < Eu.left - 6 || Zu - lu > Eu.right ? 0 : Math.max(Eu.left - 6 - Cu, 6 - (Zu - lu))
      }
      shiftOnScreen(uu) {
        var Eu;
        const ju = this.anchorOf(uu);
        if (!ju) return 0;
        const {
          halfWidth: su
        } = this.extentOf(uu), Uu = ju.x + (null !== (Eu = this.labelOffsets.get(uu)) && void 0 !== Eu ? Eu : 0), Zu = Uu + su - (this.innerWidth - 6);
        return Zu > 0 ? -Zu : Math.max(0, 6 - (Uu - su))
      }
      runLabelAside(uu, Eu) {
        var ju;
        let su = null;
        for (let Xu = 0; Xu < uu.children.length; Xu++) uu.children[Xu].classList.contains("DirectionArrowLabel") && (su = uu.children[Xu]);
        if (!su) return 0;
        const Uu = uu.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(uu) : null,
          Zu = (Uu && this.api ? this.side.sideOf(this.api, {
            x: Uu.x / this.innerWidth * 100,
            y: Uu.y / this.innerHeight * 100
          }, Eu, this.project) : 0) * this.halfWidthOf(su);
        return Zu !== (null !== (ju = this.sideLabels.get(su)) && void 0 !== ju ? ju : 0) && (su.style.transform = 0 === Zu ? "" : `translateX(-50%) translateX(${Zu}px)`, 0 === Zu ? this.sideLabels.delete(su) : this.sideLabels.set(su, Zu)), Zu
      }
      extentOf(uu) {
        let Eu = this.em,
          ju = !1;
        for (let su = 0; su < uu.children.length; su++) {
          const Uu = uu.children[su],
            Zu = Uu.classList.contains("DirectionArrowLabel");
          ju ||= Zu, (Zu || Uu.classList.contains("DirectionArrowDistance")) && (Eu = Math.max(Eu, this.halfWidthOf(Uu)))
        }
        return {
          halfWidth: Eu,
          labelled: ju
        }
      }
      halfWidthOf(uu) {
        let Eu = this.halfWidths.get(uu);
        return void 0 === Eu && (Eu = uu.offsetWidth / 2, this.halfWidths.set(uu, Eu), this.sizes.observe(uu), this.labels.add(uu)), Eu
      }
      forgetGoneLabels() {
        for (const uu of this.labels) uu.isConnected || (this.sizes.unobserve(uu), this.halfWidths.delete(uu), this.labels.delete(uu))
      }
      anchorOf(uu) {
        const Eu = uu.style.translate,
          ju = this.anchors.get(uu);
        if (ju && ju.translate === Eu && ju.innerWidth === this.innerWidth && ju.innerHeight === this.innerHeight) return ju;
        const su = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(Eu);
        if (!su) return null;
        const Uu = {
          translate: Eu,
          x: parseFloat(su[1]) / 100 * this.innerWidth,
          y: parseFloat(su[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(uu, Uu), Uu
      }
    }
    const zD = "Baf2ArrowText";

    function RD(uu, Eu) {
      const ju = uu.rows.find((uu => uu.current));
      return Ku(uu.tutorial) && null !== ju && void 0 !== ju && ju.item && xU(ju) && ou(ju.item).includes(Eu) ? ju.item : null
    }
    const ug = new class {
      constructor(uu) {
        this.select = uu, this.picks = new Map
      }
      open(uu, Eu, ju) {
        const su = RD(Eu, uu);
        null !== su && this.Hc(uu, su, ju)
      }
      follow(uu, Eu) {
        if (lu())
          for (const [ju, {
              item: su,
              had: Uu
            }] of this.picks) {
            const Zu = RD(uu, ju);
            Zu !== su && (null !== Zu && Eu(su) > Uu ? this.Hc(ju, Zu, Eu) : this.picks.delete(ju))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Hc(uu, Eu, ju) {
        this.picks.set(uu, {
          item: Eu,
          had: ju(Eu)
        }), this.select(uu, Eu)
      }
    }(QU.p);

    function Eg(uu) {
      return Eu => {
        let ju = 0;
        for (const su of uu.getInventoryItems())(null === su || void 0 === su ? void 0 : su.name) === Eu && (ju += null === su.amount ? 1 : Math.max(su.amount, 0));
        return ju
      }
    }

    function jg(uu, Eu, ju, su) {
      uu.getClientOption(Eu, "canCraft") && "inventory" !== GU.d.get("openInGameMenuName") && (ug.open(ju, su.get(), Eg(uu)), rU.h.TY("toggleMenu", `inventory|${ju}`))
    }
    let sg = null,
      Ug = !1;

    function Zg(uu) {
      const Eu = dZ();
      uu === sg && Eu === Ug || (sg = uu, Ug = Eu, (0, QU.s)(function(uu, Eu) {
        const ju = new Map;
        for (let su = uu + 1; su <= Uu.length; su++) {
          const Uu = TZ(su, uu, Eu);
          if (Uu)
            for (const Eu of Du(su).unlocks) ju.set(Eu, {
              ...Uu,
              stepsAway: su - uu
            })
        }
        return ju
      }(uu, Eu)))
    }

    function Xg() {
      return uu = () => {
        null !== sg && Zg(sg)
      }, (0, wZ.f)(JZ, uu);
      var uu
    }

    function lg() {
      return (0, QU.x)(xZ(Object.keys(Pu), IZ)), () => {
        (0, QU.x)([])
      }
    }

    function qg(uu, Eu, ju) {
      var su, Uu;
      const Zu = uu.getTargetedBlock();
      if (!Zu || ! function(uu, Eu, ju) {
          if ("Chest" !== Eu) return !1;
          const su = uu.split("|")[0];
          if (!fj(su) || 0 === VE[su].outputSlots.length) return !1;
          const Uu = Jh(uu);
          return ju[0] === Uu[0] && ju[1] === Uu[1] && ju[2] === Uu[2]
        }(ju, null === (su = uu.yEu(Eu)) || void 0 === su ? void 0 : su.name, Zu.normal)) return !1;
      const [Xu, lu, qu] = Zu.xY, fu = uu.getBlockId(Xu, lu, qu);
      return 0 === fu || !0 === (null === (Uu = mu.f[fu]) || void 0 === Uu ? void 0 : Uu.canBePlacedOver)
    }
    var fg = ju(37151);
    const Cg = new Set(Yj.b);
    class bg {
      constructor(uu) {
        this.toasts = uu, this.lastAt = -1 / 0
      }
      onAltAction(uu, Eu, ju) {
        const su = uu.getTargetedBlock();
        if (!su || function(uu) {
            const Eu = uu.split("|")[0];
            return fj(Eu) || null !== ds(Eu) || du(Eu) || Yj.b.includes(Eu)
          }(ju) && !Cg.has(ju.split("|")[0])) return;
        const Uu = uu.yEu(Eu);
        if (!Uu || !Cg.has(Uu.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const Zu = Uu.typeObj.id,
          [Xu, lu, qu] = su.xY,
          fu = uu.getBlockId(Xu, lu, qu),
          Cu = mu.f[fu];
        (0 === fu || null !== Cu && void 0 !== Cu && Cu.XN || null !== Cu && void 0 !== Cu && Cu.canBePlacedOver) && uu.isSolidToPlayerBlockId(Zu) && uu.canModifyBlockAt(Xu, lu, qu) && uu.gEu(Xu, lu, qu, Zu) && !uu.gEu(Xu, lu, qu, Zu, Eu) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Vu.ae)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Vu.G.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class cg {
      constructor(uu) {
        this.show = uu, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(uu, Eu, ju) {
        var su;
        if (!Eu) return this.started = null, void this.gatedThisHold.clear();
        if (!uu) return void(this.started = null);
        const Uu = `${uu.x},${uu.y},${uu.z},${uu.dl}`;
        if (Uu === this.started) return;
        this.started = Uu;
        const Zu = Ss(uu.y) ? XD(uu.block, uu.dl, uu.level) : null;
        if (null === Zu || this.gatedThisHold.has(Uu)) return;
        this.gatedThisHold.add(Uu);
        const Xu = uu.block.split("|")[0];
        ju - (null !== (su = this.hintedAt.get(Xu)) && void 0 !== su ? su : -1 / 0) < 5e3 || (this.hintedAt.set(Xu, ju), this.show({
          baf2ToastText: lD(Zu, uu.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var Ng = ju(31);

    function Og(uu, Eu) {
      const ju = [...uu.baf2CoreBankPaused];
      for (const [Uu] of uu.baf2CoreBanked) ju.push(Uu);
      for (const Xu of Uu) {
        for (const {
            item: uu
          }
          of Xu.cost) ju.push(uu);
        for (const uu of Xu.newDeposits) ju.push(uu.block);
        for (const uu of Xu.unlocks) ju.push(uu, ku(uu));
        Xu.reward && ju.push(Xu.reward);
        for (const {
            item: uu
          }
          of null !== (su = null === (Zu = Xu.charge) || void 0 === Zu ? void 0 : Zu.items) && void 0 !== su ? su : []) {
          var su, Zu;
          ju.push(uu)
        }
      }
      return {
        message: uu,
        itemNames: Eu([...new Set(ju)])
      }
    }
    const Yg = "baf2MultiblockGuide";
    const hg = new Map;
    const Dg = function(uu, Eu, ju, Uu) {
      let {
        localPlayerId: Zu
      } = Uu;
      const Xu = new Dl,
        lu = new lN,
        fu = new ON,
        Cu = new cN(fu),
        bu = (uu, Eu) => {
          Eu ? Cu.observe(uu) : Cu.unobserve(uu)
        },
        cu = new bN,
        Nu = new hN(bu),
        Ou = uu => Nu.covers(uu),
        Yu = new QN;
      let hu;
      const Du = new IX((uu => {
          hu.sendCommand(uu)
        })),
        gu = () => {
          Du.send("baf2questbook")
        },
        Mu = uu => function(uu, Eu, ju) {
          const su = {};
          for (const Uu of ju) {
            let ju = hg.get(Uu);
            void 0 === ju && (ju = uu.getItemStat(Eu, Uu, "displayName"), hg.set(Uu, ju)), su[Uu] = ju
          }
          return su
        }(hu, Zu, uu),
        eu = new IU(gu),
        Gu = new HN((() => GU.d.get("loadingOverlayVisible"))),
        pu = new oC(Du, eu, Gu),
        wu = new RN,
        Ju = new bg(Gu),
        au = new cg((uu => {
          Gu.show(uu, uu.baf2ToastMs)
        })),
        Pu = new qO(bu),
        ou = new Vh(Pu),
        ku = new dX,
        vu = new sD,
        Ku = new sl,
        Qu = new YO({
          read: () => !1 !== Ng.k.getItem(Yg),
          write: uu => {
            Ng.k.setItem(Yg, uu)
          }
        }),
        iu = new BO(Qu),
        Wu = new xO(Qu),
        Su = new NY(Qu, (uu => function(uu, Eu) {
          const ju = uq(Eu.w, Eu.h, Eu.d),
            su = new Uint8Array(ju);
          for (let Uu = 0; Uu < ju; Uu++) {
            const ju = iO(uu, zj(Eu, ss(Eu, Uu)));
            su[Uu] = null === ju ? 0 : nl(ju)
          }
          return su
        }(hu, uu)), UY(Du)),
        Iu = new OY(Qu, UY(Du)),
        Fu = new bY,
        tu = (uu, Eu) => {
          let [ju, su, Uu] = uu;
          Fu.answered(Eu) || Gu.show({
            baf2ToastText: [(0, Vu.ae)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: ju,
                h: su,
                d: Uu
              }
            }, Vu.G.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      Su.onSizeNotTaken(tu), Iu.onSizeNotTaken(tu);
      const xu = new gY,
        Tu = new zY(Qu),
        Au = new uh,
        nu = new bh(Au),
        yu = new ph,
        Ru = new rh,
        uE = new xh(Ru),
        EE = new jD(Ru),
        jE = Ru.lookSource(),
        sE = new DD({
          handles: uu => jE.handles(uu) || uu === ru,
          line: (uu, Eu) => uu === ru ? function(uu, Eu, ju) {
            var su;
            const Uu = Lu(null === (su = Eu.at(ju)) || void 0 === su ? void 0 : su.item);
            return null === Uu ? {
              key: `${OD}lookFarmEmpty`
            } : {
              key: uu.blockIdToBlockName(uu.getBlockId(ju[0], ju[1], ju[2])).endsWith("|Running") ? `${OD}lookFarmRunning` : `${OD}lookFarmWaiting`,
              keys: {
                mob: Bu(Uu)
              }
            }
          }(hu, Pu, Eu) : jE.line(uu, Eu),
          version: () => jE.version() + Pu.version()
        }, (uu => HO(Qu.all(), uu, (uu => iO(hu, uu)))), (() => eu.get().tier)),
        UE = new QY,
        ZE = new mD,
        XE = new iD,
        lE = iD.blade(),
        qE = new xD,
        fE = new jO,
        CE = new yD,
        cE = new FD,
        NE = new ID;
      let OE = -1 / 0,
        YE = 0,
        hE = -1 / 0,
        DE = -1 / 0;
      const gE = () => {
          Du.send("baf2islandsclose"), DE = Date.now()
        },
        ME = [];

      function eE(uu) {
        var Eu, ju, su, Uu, Zu, Xu, qu;
        "core" === (null === (Eu = lu.get()) || void 0 === Eu ? void 0 : Eu.kind) && "core" !== (null === uu || void 0 === uu ? void 0 : uu.kind) && Du.send("baf2coreclose"), "power" === (null === (ju = lu.get()) || void 0 === ju ? void 0 : ju.kind) && "power" !== (null === uu || void 0 === uu ? void 0 : uu.kind) && Du.send("baf2powerclose"), "water" === (null === (su = lu.get()) || void 0 === su ? void 0 : su.kind) && "water" !== (null === uu || void 0 === uu ? void 0 : uu.kind) && Du.send(zu.r), "terminal" === (null === (Uu = lu.get()) || void 0 === Uu ? void 0 : Uu.kind) && "terminal" !== (null === uu || void 0 === uu ? void 0 : uu.kind) && Du.send("baf2terminalclose"), "islands" === (null === (Zu = lu.get()) || void 0 === Zu ? void 0 : Zu.kind) && "islands" !== (null === uu || void 0 === uu ? void 0 : uu.kind) && gE();
        const fu = Ru.getStatus();
        "collider" === (null === (Xu = lu.get()) || void 0 === Xu ? void 0 : Xu.kind) && "collider" !== (null === uu || void 0 === uu ? void 0 : uu.kind) && fu && Du.send(iq(fu, "close"));
        const Cu = uu => "reactor" === uu || "battery" === uu;
        if (Cu(null === (qu = lu.get()) || void 0 === qu ? void 0 : qu.kind) && !Cu(null === uu || void 0 === uu ? void 0 : uu.kind)) {
          var bu, cu, Nu;
          const uu = "reactor" === (null === (bu = lu.get()) || void 0 === bu ? void 0 : bu.kind) ? null === (cu = Su.get()) || void 0 === cu ? void 0 : cu.status.baf2RxAt : null === (Nu = Iu.get()) || void 0 === Nu ? void 0 : Nu.status.baf2BatAt;
          uu && Du.send(bE(uu, "close"))
        }
        "quests" === (null === uu || void 0 === uu ? void 0 : uu.kind) && gu(), lu.set(uu), null === uu && wu.release()
      }

      function GE() {
        (0, eU.e)(), eE(null)
      }
      let pE = new Set,
        wE = !1;
      const JE = {
        onCreate: uu => {
          hu = uu, hu.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const Eu of PE) {
            const uu = VE[Eu].inputSlots ? Kl(Xu) : kl(Eu, Xu, ku, Du);
            ME.push((0, gU.g)(Eu, uu))
          }
          ME.push((0, eU.o)((0, su.createElement)(su.Fragment, null, (0, su.createElement)(MN, {
            controller: Nu
          }), (0, su.createElement)(bO, {
            store: Pu
          }), (0, su.createElement)(MD, {
            store: sE
          }), (0, su.createElement)(xN, {
            store: eu
          }), (0, su.createElement)(yN, {
            store: Gu
          }), (0, su.createElement)(uO, {
            store: wu
          }), (0, su.createElement)(UO, {
            store: fE
          }), (0, su.createElement)(DY, {
            store: xu
          }), (0, su.createElement)(Eh, {
            store: Au
          })), {
            content: (0, su.createElement)(qN, {
              commands: Du,
              store: lu,
              power: ku,
              water: Ku,
              reactor: Su,
              battery: Iu,
              collider: Ru,
              terminal: vu,
              quests: eu,
              tutorial: pu,
              close: eU.g,
              leave: () => {
                wu.dropHeld(), (0, eU.e)()
              },
              askIslands: () => {
                DE = -1 / 0, OE = Date.now(), YE = Du.send(Hu)
              },
              openSocial: () => {
                (0, eU.e)(), GU.d.set({
                  openEverythingMenuName: bj.o.SOCIAL
                })
              },
              showCore: uu => {
                eE({
                  kind: "core",
                  core: uu
                }), Du.send("baf2corereopen")
              }
            }),
            onClose: () => {
              eE(null)
            }
          })), ME.push((0, MU.t)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              eE({
                kind: "quests"
              }), (0, eU.m)()
            }
          })), ME.push(function(uu, Eu) {
            let ju = null,
              su = () => {};
            const Uu = Eu => {
              var Uu;
              let {
                tutorial: Zu,
                tutorialKnown: Xu
              } = Eu;
              (null === (Uu = ju) || void 0 === Uu ? void 0 : Uu.tutorial) === Zu && ju.tutorialKnown === Xu || (ju = {
                tutorial: Zu,
                tutorialKnown: Xu
              }, su = (0, MU.t)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: aC[Zu],
                icon: {
                  kind: "icon",
                  name: dC[Zu]
                },
                iconOnly: !0,
                disabled: !Xu,
                className: "Baf2TutorialButton",
                onClick: () => {
                  uu.next()
                }
              }))
            };
            Uu(Eu.get());
            const Zu = rU.h.subscribe(iU, Uu);
            return () => {
              rU.h.unsubscribe(Zu), su()
            }
          }(pu, eu)), wE = !1, ME.push(Xg()), ME.push(lg()), ME.push(function() {
            const uu = rU.h.subscribe(iU, uZ),
              Eu = () => {
                if (RU) {
                  const uu = RU;
                  RU = null, (0, QU.u)(uu)
                }
              },
              ju = rU.h.subscribe("toggleMenu", (uu => {
                "inventory" === (null === uu || void 0 === uu ? void 0 : uu.split("|")[0]) && Eu()
              })),
              su = rU.h.subscribe("appManagerUpdated|openInGameMenuName", (uu => {
                "inventory" === uu && Eu()
              }));
            return () => {
              rU.h.unsubscribe(uu), rU.h.unsubscribe(ju), rU.h.unsubscribe(su)
            }
          }()), ME.push(function(uu) {
            const Eu = Eg(uu),
              ju = rU.h.subscribe(iU, (uu => {
                ug.follow(uu, Eu)
              }));
            return () => {
              rU.h.unsubscribe(ju), ug.clear()
            }
          }(hu)), ME.push(function() {
            const uu = document.documentElement,
              Eu = (0, WN.e)(".InvenBodyRight", [], (() => {
                const Eu = document.querySelector(".InvenBodyRight");
                Eu && uu.style.setProperty("--baf2-backpack-width", `${Eu.offsetWidth}px`)
              }));
            return () => {
              Eu(), uu.style.removeProperty("--baf2-backpack-width")
            }
          }()), ME.push(function() {
            const uu = document.documentElement;
            return uu.classList.add(zD), () => {
              uu.classList.remove(zD)
            }
          }()), ME.push((() => {
            Cu.dispose(), fu.dispose()
          })), Yu.start(hu), ME.push((() => {
            Yu.dispose(), qE.dispose(), ou.dispose()
          }))
        },
        onClose: () => {
          (0, QU.u)([]), RU = null, zU = new Set, sg = null, (0, QU.s)(new Map), hg.clear();
          for (const uu of ME) uu();
          eu.dispose(), sE.dispose(), Gu.dispose(), wu.dispose(), UE.dispose(), ZE.dispose(hu), iu.dispose(hu), Wu.dispose(hu), Tu.dispose(hu), nu.dispose(hu), Au.dispose(), yu.dispose(), Qu.dispose(), Su.dispose(), Iu.dispose(), xu.dispose(), XE.dispose(), lE.dispose(), fE.dispose(), uE.dispose(hu), EE.dispose(hu), Ru.dispose(), CE.dispose(), Du.clear()
        },
        onAfterRender: (uu, Eu) => {
          var ju, su, Uu;
          try {
            Yu.onAfterRender(Eu)
          } catch (fu) {
            console.error("Error drawing BAF2 belt items", fu)
          }
          try {
            qE.onAfterRender(hu, Zu)
          } catch (fu) {
            console.error("Error drawing BAF2 jet flames", fu)
          }
          wE || (wE = !0, Du.send("baf2clientready"));
          const Xu = hu.getPositionView(Zu);
          Nu.onAfterRender(Eu, Xu, cu), Pu.onAfterRender(Eu, Xu, cu, Ou), Cu.run(cu), UE.onAfterRender(hu, Xu), ZE.onAfterRender(hu, Xu), ou.onAfterRender(hu, Xu), iu.onAfterRender(hu, Xu), Wu.onAfterRender(hu, Zu, Xu), Tu.onAfterRender(hu, Zu, Xu), nu.onAfterRender(hu, Zu), yu.onAfterRender(hu, Xu), eu.onPlayerY(Xu[1]), uE.onAfterRender(hu), EE.onAfterRender(hu, Zu, Xu);
          const qu = hu.getTargetedBlock();
          sE.onAfterRender(hu, Zu, null !== (ju = null === qu || void 0 === qu ? void 0 : qu.I3) && void 0 !== ju ? ju : 0, null !== (su = null === qu || void 0 === qu ? void 0 : qu.position) && void 0 !== su ? su : null), CE.onAfterRender(hu, Eu), au.onMining(function(uu, Eu) {
            var ju, su;
            const Uu = uu.getMiningBlock();
            if (!Uu) return null;
            const Zu = (0, mu.e)(uu.getBlockId(Uu[0], Uu[1], Uu[2])),
              Xu = null !== (ju = null === (su = uu.yEu(Eu)) || void 0 === su ? void 0 : su.name) && void 0 !== ju ? ju : null,
              lu = uu.getItemStat(Eu, Zu.split("|")[0], "harvestLevel");
            return {
              block: Zu,
              x: Uu[0],
              y: Uu[1],
              z: Uu[2],
              dl: Xu,
              level: lu
            }
          }(hu, Zu), hu.isMining(), performance.now()), "dropMap" === (null === (Uu = lu.get()) || void 0 === Uu ? void 0 : Uu.kind) && Ss(Xu[1]) && GE()
        },
        onPlayerChangeBlock: (uu, Eu, ju, su, Uu, Xu) => {
          uu === Zu && function(uu, Eu, ju, su, Uu, Zu, Xu) {
            const lu = SD(Zu, Xu, uu.isPlayerCrouching(Eu));
            if (null === lu) return;
            if (uu.lK(ju, su, Uu, lu), !uu.getClientOption(Eu, "canPickUpItems")) return;
            const qu = Xj[lu.split("|")[0]];
            var fu, Cu, bu;
            void 0 !== qu && (fu = uu.getInventoryItems(), Cu = qu, bu = hO.e.maxItemStackSize, uu.getInventoryFreeSlotCount(Eu) > 0 || fu.some((uu => null !== uu && uu.name === Cu && null !== uu.amount && uu.amount < bu))) && uu.playSound(Eu, (0, fg.e)("pickUp"), .5, 1)
          }(hu, uu, Eu, ju, su, Uu, Xu)
        },
        onPlayerAltAction: (uu, Eu, ju, su, Uu) => {
          var Xu, lu;
          if (!hu.getClientOption(Zu, "canPickUpItems")) return;
          const qu = null !== (Xu = null === (lu = hu.yEu(Zu)) || void 0 === lu ? void 0 : lu.name) && void 0 !== Xu ? Xu : null,
            fu = function(uu, Eu) {
              const ju = uu.split("|")[0];
              return du(ju) && Eu !== fU && "Sky Pack" !== Eu ? ju : null
            }(Uu, qu);
          if (null !== fu) return void(cE.tap(fu, performance.now()) && jg(hu, Zu, fu, eu));
          if (!Ls(qu)) return;
          const Cu = NE.isNewPress(performance.now()),
            bu = function(uu, Eu, ju) {
              return !Ls(Eu) || ju ? null : Rs(uu)
            }(Uu, qu, hu.isPlayerCrouching(Zu));
          null !== bu && Cu && hu.lK(Eu, ju, su, bu)
        },
        onPlayerAttemptAltAction: (uu, Eu, ju, su, Uu) => {
          if (function(uu, Eu, ju, su, Uu) {
              "Workbench" === su.split("|")[0] && uu.getClientOption(ju, "canCraft") && (ug.open("Workbench", Uu.get(), Eg(uu)), Eu.send("baf2station Workbench"))
            }(hu, Du, Zu, Uu, eu), qg(hu, Zu, Uu)) return "preventAction";
          Ju.onAltAction(hu, Zu, Uu)
        },
        onReceivedMessageFromServer: (uu, Eu) => {
          if ("baf2MachineStatus" === uu) {
            var ju, su, Uu, fu, Cu, bu, cu, Ou, gu, pu, Ju, du, au, ou, mu, Vu;
            const uu = Eu,
              Zu = uu.baf2MachineTaught;
            Xu.set(uu.baf2MachinePos, {
              status: uu.baf2MachineStatus,
              power: null !== (ju = uu.baf2MachinePower) && void 0 !== ju ? ju : null,
              opLeftMs: null !== (su = uu.baf2MachineOpLeftMs) && void 0 !== su ? su : null,
              dug: uu.baf2MachineYield ? {
                item: uu.baf2MachineYield,
                name: Mu([uu.baf2MachineYield])[uu.baf2MachineYield]
              } : null,
              powerCap: null !== (Uu = uu.baf2MachinePowerCap) && void 0 !== Uu ? Uu : null,
              powerRates: null !== (fu = uu.baf2MachinePowerRates) && void 0 !== fu ? fu : null,
              coupled: !0 === uu.baf2MachineCoupled,
              couplerLevel: null !== (Cu = uu.baf2MachineCoupler) && void 0 !== Cu ? Cu : 1,
              taught: Zu,
              taughtName: Zu ? Mu([Zu])[Zu] : null,
              tier: null !== (bu = uu.baf2MachineTier) && void 0 !== bu ? bu : null,
              input: null !== (cu = uu.baf2MachineInput) && void 0 !== cu ? cu : null,
              inertCoupler: null !== (Ou = uu.baf2MachineInertCoupler) && void 0 !== Ou ? Ou : null,
              inputShort: null !== (gu = uu.baf2MachineInputShort) && void 0 !== gu ? gu : null,
              field: null !== (pu = uu.baf2MachineField) && void 0 !== pu ? pu : null,
              noSeeds: !0 === uu.baf2MachineNoSeeds,
              fuelFed: !0 === uu.baf2MachineFuelFed,
              fuelFeeds: !0 === uu.baf2MachineFuelFeeds,
              coreFull: !0 === uu.baf2MachineCoreFull,
              waterUnpowered: !0 === uu.baf2MachineWaterUnpowered,
              powerShort: !0 === uu.baf2MachinePowerShort,
              powerWait: !0 === uu.baf2MachinePowerWait,
              reactorPowered: !0 === uu.baf2MachineReactorPowered,
              fuelLeftMs: null !== (Ju = uu.baf2MachineFuelLeftMs) && void 0 !== Ju ? Ju : null,
              burning: null !== (du = uu.baf2MachineBurning) && void 0 !== du ? du : null,
              fuelKeep: null !== (au = uu.baf2MachineFuelKeep) && void 0 !== au ? au : null,
              water: null !== (ou = uu.baf2MachineWater) && void 0 !== ou ? ou : null,
              farm: null !== (mu = uu.baf2MachineFarm) && void 0 !== mu ? mu : null,
              cryo: null !== (Vu = uu.baf2MachineCryo) && void 0 !== Vu ? Vu : null
            })
          } else if ("baf2StationOpen" === uu) {
            const uu = Eu.baf2Station;
            cE.consumeServerOpen(uu, performance.now()) || jg(hu, Zu, uu, eu)
          } else if ("baf2Power" === uu) {
            const uu = Eu;
            ku.set(uu), uu.baf2PowerOpen && (eE({
              kind: "power"
            }), (0, eU.m)())
          } else if (uu === zu.v) {
            const uu = Eu;
            Ku.set(uu), uu.baf2WaterOpen && (eE({
              kind: "water"
            }), (0, eU.m)())
          } else if ("baf2RxPlans" === uu) {
            var ru, iu, Wu;
            const uu = Eu;
            Qu.gM(uu);
            const ju = new Set(uu.baf2RxPlanList.map((uu => {
              let [Eu, ju, su] = uu;
              return `${Eu},${ju},${su}`
            })));
            xu.retain(ju);
            const su = null === (ru = lu.get()) || void 0 === ru ? void 0 : ru.kind,
              Uu = "reactor" === su ? null === (iu = Su.get()) || void 0 === iu ? void 0 : iu.status.baf2RxAt : "battery" === su ? null === (Wu = Iu.get()) || void 0 === Wu ? void 0 : Wu.status.baf2BatAt : void 0;
            Uu && pE.has(Uu.join(",")) && !ju.has(Uu.join(",")) && GE(), pE = ju
          } else if ("baf2RxStatus" === uu) {
            const uu = Eu;
            Su.set(uu), uu.baf2RxOpen && (eE({
              kind: "reactor"
            }), (0, eU.m)())
          } else if ("baf2BatStatus" === uu) {
            const uu = Eu;
            Iu.set(uu), uu.baf2BatOpen && (eE({
              kind: "battery"
            }), (0, eU.m)())
          } else if ("baf2RxAlarm" === uu) xu.gM(Eu);
          else if ("baf2Bomb" === uu) Au.gM(Eu, hu.getPositionView(Zu));
          else if ("baf2Fallout" === uu) yu.gM(Eu);
          else if ("baf2ColBeams" === uu) Ru.onBeams(Eu);
          else if ("baf2ColStatus" === uu) {
            const uu = Eu;
            var Bu, Lu;
            if (Ru.onStatus(uu), uu.baf2ColOpen) Ru.onOpen(null !== (Bu = null === (Lu = hu.yEu(Zu)) || void 0 === Lu ? void 0 : Lu.name) && void 0 !== Bu ? Bu : null), eE({
              kind: "collider"
            }), (0, eU.m)()
          } else if ("baf2Terminal" === uu) {
            const uu = Eu;
            var tu;
            if (vu.apply(uu)) uu.baf2TermReset && (eE({
              kind: "terminal"
            }), (0, eU.m)());
            else "terminal" === (null === (tu = lu.get()) || void 0 === tu ? void 0 : tu.kind) && (lu.set(null), (0, eU.e)())
          } else if ("baf2Core" === uu) {
            var Tu;
            const uu = Eu;
            if (qu(!0 === uu.baf2CoreNuclear), function(uu, Eu) {
                return "core" === (null === uu || void 0 === uu ? void 0 : uu.kind) && Eu.baf2CoreTier > uu.core.message.baf2CoreTier
              }(lu.get(), uu)) return void(0, eU.e)();
            if (uu.baf2CoreRefresh && "core" !== (null === (Tu = lu.get()) || void 0 === Tu ? void 0 : Tu.kind)) return;
            eE({
              kind: "core",
              core: Og(uu, Mu)
            }), uu.baf2CoreRefresh || (0, eU.m)()
          } else if ("baf2WrenchUndo" === uu) {
            const {
              baf2WrenchPos: uu,
              baf2WrenchBlock: ju
            } = Eu;
            hu.lK(uu[0], uu[1], uu[2], ju)
          } else if ("baf2Toast" === uu) {
            const uu = Eu;
            Fu.heard(performance.now(), uu.baf2ToastMs), Gu.show(uu)
          } else if ("baf2Area" === uu) wu.arrive(Eu, null !== lu.get());
          else if ("baf2Quest" === uu) {
            const uu = Eu;
            qu(!0 === uu.baf2QuestNuclear), eu.set(uu, function(uu, Eu) {
              var ju, su, Uu, Zu, Xu;
              const lu = [];
              for (const [, , Cu, , , , , , bu, cu] of uu.baf2QuestSteps) null !== Cu && lu.push(Cu), lu.push(...null !== bu && void 0 !== bu ? bu : [], ...null !== cu && void 0 !== cu ? cu : []);
              uu.baf2QuestReward && lu.push(uu.baf2QuestReward);
              const qu = null === (ju = uu.baf2QuestSide) || void 0 === ju ? void 0 : ju[2][2];
              qu && lu.push(qu), lu.push(...null !== (su = null === (Uu = uu.baf2QuestSide) || void 0 === Uu ? void 0 : Uu[2][8]) && void 0 !== su ? su : [], ...null !== (Zu = null === (Xu = uu.baf2QuestSide) || void 0 === Xu ? void 0 : Xu[2][9]) && void 0 !== Zu ? Zu : []);
              for (const [Cu] of null !== (fu = uu.baf2QuestAlso) && void 0 !== fu ? fu : []) {
                var fu;
                lu.push(Cu)
              }
              return Eu(lu)
            }(uu, Mu)), Zg(uu.baf2QuestTier)
          } else if ("baf2Route" === uu) ! function(uu, Eu) {
            let {
              baf2RouteCells: ju,
              baf2RouteInto: su
            } = Eu;
            0 !== ju.length && su ? uu.setRouteChevrons({
              cells: ju.map(((uu, Eu) => {
                const [Uu, , Zu] = function(uu, Eu, ju) {
                  const su = ju + 1 < uu.length ? uu[ju + 1] : Eu;
                  return [su[0] - uu[ju][0], 0, su[2] - uu[ju][2]]
                }(ju, su, Eu);
                return {
                  pos: uu,
                  way: [Uu, Zu]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : uu.setRouteChevrons(null)
          }(hu, Eu);
          else if ("baf2QuestBook" === uu) eu.setBook(Eu);
          else if ("baf2Stalls" === uu) Nu.set(Eu.baf2StallCells);
          else if (uu === Yj.k) Yu.onMoves(Eu);
          else if (uu === Yj.e) Yu.onLines(Eu);
          else if ("baf2Labels" === uu) Pu.gM(Eu);
          else if ("baf2DropMap" === uu) eE({
            kind: "dropMap",
            dropMap: Eu
          }), (0, eU.m)();
          else if ("baf2Islands" === uu) {
            var nu, uE;
            const uu = Eu;
            if (Du.syncIslandEdits(uu.baf2IslandsAnswered), !uu.baf2IslandsOpen && "islands" !== (null === (nu = lu.get()) || void 0 === nu ? void 0 : nu.kind)) return;
            if (uu.baf2IslandsOpen) {
              var EE, jE;
              const Eu = GU.d.get("openEverythingMenuName"),
                ju = Du.sent() >= YE,
                su = "other" !== (NE = {
                  askedAtMs: OE,
                  askSent: ju,
                  reaskedAtMs: hE,
                  nowMs: Date.now(),
                  panel: null !== (EE = null === (jE = lu.get()) || void 0 === jE ? void 0 : jE.kind) && void 0 !== EE ? EE : null,
                  inGameMenu: GU.d.get("openInGameMenuName"),
                  everythingMenu: null === Eu ? null : Eu === bj.o.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== uu.baf2IslandsFocusInvite
                }).everythingMenu && (!!NE.focusInvite || "islands" === NE.panel && "clientGame" === NE.inGameMenu || !(NE.nowMs - NE.reaskedAtMs < Vf) && (NE.askSent && NE.nowMs - NE.askedAtMs < Vf ? "core" === NE.panel && "clientGame" === NE.inGameMenu && null === NE.everythingMenu : "shop" === NE.everythingMenu || null === NE.inGameMenu));
              if (ju && (OE = -1 / 0), hE = -1 / 0, !su) return void gE()
            }
            const ju = (UE = uu.baf2IslandsOpen, ZE = "islands" === (null === (uE = lu.get()) || void 0 === uE ? void 0 : uE.kind), CE = DE, bE = Date.now(), UE && !ZE && bE - CE < Vf);
            eE({
              kind: "islands",
              islands: uu,
              arrivedAtMs: Date.now(),
              backToCore: rf(lu.get())
            }), ju && (DE = -1 / 0, hE = Date.now(), Du.send(Hu)), uu.baf2IslandsOpen && ("clientGame" !== GU.d.get("openInGameMenuName") && (0, pU.h)(), (0, eU.m)())
          } else if ("baf2CoopTransfer" === uu) {
            var sE;
            const uu = Eu;
            uu.baf2TransferOn ? (eE({
              kind: "transfer",
              transfer: uu,
              arrivedAtMs: Date.now()
            }), (0, eU.m)()) : "transfer" === (null === (sE = lu.get()) || void 0 === sE ? void 0 : sE.kind) && (0, eU.e)()
          } else "baf2IslandLeft" === uu ? (wu.dropHeld(), null !== lu.get() && GE(), "inventory" === GU.d.get("openInGameMenuName") && (0, pU.h)()) : "baf2Arc" === uu ? XE.gM(hu, Eu) : "baf2Blade" === uu ? lE.onBlade(hu, Eu) : "baf2JetFlame" === uu ? qE.gM(hu, Eu) : "baf2GearPower" === uu && fE.gM(Eu);
          var UE, ZE, CE, bE, NE
        }
      };
      return JE
    }
  },
  38834: (uu, Eu, ju) => {
    function su(uu, Eu, ju) {
      const su = new Set,
        Uu = new ResizeObserver(ju),
        Zu = () => {
          const Eu = new Set(document.querySelectorAll(uu));
          let Zu = !1;
          for (const uu of su) Eu.has(uu) || (Uu.unobserve(uu), su.delete(uu), Zu = !0);
          for (const uu of Eu) su.has(uu) || (Uu.observe(uu), Xu.observe(uu, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), su.add(uu));
          Zu && ju()
        },
        Xu = new MutationObserver((Eu => {
          Eu.some((uu => "attributes" === uu.type)) && ju(), Eu.some((Eu => function(uu, Eu, ju) {
            if ("childList" !== uu.type) return !1;
            for (const su of uu.addedNodes)
              if (su instanceof Element && (su.matches(Eu) || su.querySelector(Eu))) return !0;
            for (const su of uu.removedNodes)
              if (su instanceof Element)
                for (const uu of ju)
                  if (su.contains(uu)) return !0;
            return !1
          }(Eu, uu, su))) && Zu()
        }));
      Xu.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const lu of Eu) Uu.observe(lu);
      return window.addEventListener("resize", ju), Zu(), ju(), () => {
        Uu.disconnect(), Xu.disconnect(), window.removeEventListener("resize", ju)
      }
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  38820: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu
    });
    var su = ju(38813);
    const Uu = 5,
      Zu = [0, 0, 0],
      Xu = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function lu(uu, Eu, ju, lu, qu, fu) {
      let [Cu, bu, cu] = lu;
      const Nu = (Cu + .5 - ju[0]) ** 2 + (bu - ju[1]) ** 2 + (cu + .5 - ju[2]) ** 2;
      let Ou = null;
      Nu <= fu ** 2 && (Zu[0] = Cu + .5, Zu[1] = bu + qu, Zu[2] = cu + .5, Ou = Eu.projectWorldPosToViewport(Zu));
      const Yu = null !== Ou && Ou.x > -Uu && Ou.x < 100 + Uu && Ou.y > -Uu && Ou.y < 100 + Uu;
      return (0, su.f)(uu, !Yu), Yu ? (Xu.x = Ou.x, Xu.y = Ou.y, Xu.distSq = Nu, Xu) : null
    }
  },
  38813: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      f: () => Zu
    });
    const su = new WeakMap;

    function Uu(uu) {
      let Eu = su.get(uu);
      return Eu || (Eu = {
        hidden: uu.hidden,
        x: NaN,
        y: NaN
      }, su.set(uu, Eu)), Eu
    }

    function Zu(uu, Eu) {
      const ju = Uu(uu);
      ju.hidden !== Eu && (ju.hidden = Eu, uu.hidden = Eu)
    }

    function Xu(uu, Eu, ju) {
      const su = Uu(uu);
      su.x === Eu && su.y === ju || (su.x = Eu, su.y = ju, uu.style.translate = `${Eu}vw ${ju}vh`)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);