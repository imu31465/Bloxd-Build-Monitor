export const id = 225;
export const ids = [225];
export const modules = {
  36804: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => yp,
      E: () => tp,
      b: () => Ip,
      d: () => Up,
      f: () => wp,
      j: () => xp,
      n: () => Pp,
      q: () => vp,
      u: () => Ap,
      w: () => Hp
    });
    var Op = cp(25),
      op = cp(34);
    const Ip = "clientGameInventoryButtonsChanged",
      Sp = new Map;

    function xp() {
      return [...Sp.values()].sort(((pp, ip) => {
        var cp, Op;
        return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
      }))
    }
    let Lp = null;

    function Yp(pp) {
      Lp = pp
    }
    let Dp = !1;

    function Ap(pp) {
      Dp = !0;
      try {
        pp.onClick()
      } finally {
        Dp = !1
      }
      pp.panel && "clientGame" === Op.c.get("openInGameMenuName") && Yp(pp.id)
    }

    function Pp() {
      return Dp
    }

    function Wp() {
      return xp().filter((pp => pp.panel && !pp.disabled))
    }

    function yp(pp) {
      const ip = Wp(),
        cp = ip.findIndex((pp => pp.id === Lp));
      return !(cp < 0 || ip.length < 2) && (Ap(ip[(cp + pp + ip.length) % ip.length]), !0)
    }

    function Up() {
      return null !== Lp && Wp().length > 1
    }

    function wp() {
      Yp(null)
    }

    function vp() {
      "inventory" !== Op.c.get("openInGameMenuName") && Yp(null)
    }

    function tp() {
      const pp = Lp;
      return Yp(null), pp
    }

    function Hp(pp) {
      return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
        Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
      }
    }
  },
  36799: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Dp,
      d: () => xp,
      h: () => wp,
      l: () => vp,
      o: () => Pp,
      s: () => Yp,
      t: () => Up,
      x: () => Wp
    });
    var Op = cp(25),
      op = cp(34),
      Ip = cp(1308),
      Sp = cp(36804);
    const xp = "clientGameUiChanged";
    let Lp = null;

    function Yp() {
      return Lp
    }

    function Dp(pp, ip) {
      const cp = {
        content: pp,
        menu: ip
      };
      return Lp = cp, op.m.GA(xp, Lp, !0), () => {
        Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
      }
    }
    let Ap = null;

    function Pp() {
      return Ap
    }

    function Wp(pp) {
      return Ap = pp, () => {
        Ap === pp && (Ap = null)
      }
    }
    let yp = !1;

    function Up() {
      const pp = Op.c.get("openInGameMenuName");
      "clientGame" !== pp && (yp = "inventory" === pp), (0, Sp.n)() || (0, Sp.f)(), (0, Ip.s)(Ip.c), Op.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wp() {
      tp(!1)
    }

    function vp() {
      tp(yp)
    }

    function tp(pp) {
      "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
        openInGameMenuName: pp ? "inventory" : null
      }), pp || (0, Sp.f)(), yp = !1
    }
  },
  38724: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(38726);
    const op = [0, 0, 0];
    class Ip {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op;
        this.pool = pp, this.origin = ip, this.count = 0, this.free = []
      }
      take() {
        var pp;
        const ip = null !== (pp = this.free.pop()) && void 0 !== pp ? pp : this.count++;
        return ip >= this.pool.TA && this.pool.grow(Math.max(2 * this.pool.TA, ip + 1)), this.hide(ip), ip
      }
      release(pp) {
        this.hide(pp), this.free.push(pp)
      }
      write(pp, ip, cp, op) {
        const {
          records: Ip
        } = this.pool, {
          origin: Sp
        } = this, xp = pp * Op.e;
        Ip[xp] = ip - Sp[0], Ip[xp + 1] = cp - Sp[1], Ip[xp + 2] = op - Sp[2], Ip[xp + Op.h] = 0, this.pool.markDirty(pp)
      }
      hide(pp) {
        this.pool.records[pp * Op.e + Op.h] = 1, this.pool.markDirty(pp)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Sp {
      constructor(pp, ip, cp) {
        this.api = pp, this.model = ip, this.initialCapacity = cp, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(pp) {
        let ip = this.kinds.get(pp);
        if (void 0 === ip) {
          const cp = this.api.createInstancePool({
            ...this.model,
            item: pp
          }, this.initialCapacity);
          null === cp || void 0 === cp || cp.setOrigin(this.origin[0], this.origin[1], this.origin[2]), ip = cp && new Ip(cp, this.origin), this.kinds.set(pp, ip)
        }
        return ip
      }
      follow(pp) {
        const {
          origin: ip
        } = this;
        if (Math.abs(pp[0] - ip[0]) <= 512 && Math.abs(pp[1] - ip[1]) <= 512 && Math.abs(pp[2] - ip[2]) <= 512) return !1;
        ip[0] = Math.floor(pp[0]), ip[1] = Math.floor(pp[1]), ip[2] = Math.floor(pp[2]);
        for (const cp of this.kinds.values()) null === cp || void 0 === cp || cp.pool.setOrigin(ip[0], ip[1], ip[2]);
        return !0
      }
      commit() {
        for (const pp of this.kinds.values()) null === pp || void 0 === pp || pp.commit()
      }
      dispose() {
        for (const pp of this.kinds.values()) null === pp || void 0 === pp || pp.dispose();
        this.kinds.clear()
      }
    }
  },
  38736: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      e: () => xp,
      i: () => Lp
    });
    const Op = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      op = [0, 1, 2, 0, 2, 3],
      Ip = [4, 5];

    function Sp(pp, ip, cp, Op, op) {
      for (let Sp = 0; Sp < 6; Sp++) Ip.includes(Sp) === op && Yp(pp, ip, cp, Op, Sp)
    }

    function xp(pp, ip, cp, Op) {
      for (let op = 0; op < 6; op++) Yp(pp, ip, cp, Op, op)
    }

    function Lp(pp, ip, cp, Ip, Sp) {
      for (let xp = 0; xp < 6; xp++)
        for (const Lp of [0, 1]) {
          const [Yp, Dp, Ap] = [Lp + 2, Lp + 1, (Lp + 3) % 4], Pp = pp.length / 3;
          for (const [ip, op] of [
              [Lp, Dp],
              [Yp, Dp],
              [Yp, Ap],
              [Lp, Ap]
            ])
            for (let Lp = 0; Lp < 3; Lp++) {
              const Yp = Op[3 * (4 * xp + ip) + Lp],
                Dp = Op[3 * (4 * xp + op) + Lp];
              pp.push((Yp + (Dp - Yp) * Sp) * Ip / 2 + cp[Lp])
            }
          for (const pp of op) ip.push(Pp + pp)
        }
    }

    function Yp(pp, ip, cp, Ip, Sp) {
      let [xp, Lp, Yp] = cp, [Dp, Ap, Pp] = Ip;
      const Wp = pp.length / 3;
      for (let op = 4 * Sp; op < 4 * Sp + 4; op++) pp.push(Op[3 * op] * Dp / 2 + xp, Op[3 * op + 1] * Ap / 2 + Lp, Op[3 * op + 2] * Pp / 2 + Yp);
      for (const Op of op) ip.push(Wp + Op)
    }
  },
  38704: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Ht
    });
    var Op = cp(62);
    const op = [{
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
      Ip = 10;
    let Sp = !0;

    function xp() {
      return Sp
    }

    function Lp(pp) {
      Sp = pp
    }
    const Yp = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function Dp() {
      return Sp ? op.length : Ip
    }

    function Ap(pp) {
      var ip, cp;
      return null !== (ip = null === (cp = op[pp - 1]) || void 0 === cp ? void 0 : cp.reactorTier) && void 0 !== ip ? ip : 0
    }

    function Pp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ap(pp) > 0;
      return cp && !Sp ? "hidden" : pp <= ip ? "open" : cp ? ip < 5 ? "hidden" : ip < Ip ? "teaser" : "locked" : "locked"
    }

    function Wp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: Op,
        n: op
      } = wp(pp);
      return {
        key: ip[Op],
        params: {
          [Op]: cp ? String(op) : op
        }
      }
    }
    const yp = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function Up(pp, ip) {
      return Ap(pp) > 0 && ip < Ip
    }

    function wp(pp) {
      const ip = Ap(pp);
      if (ip > 0) return {
        kind: "atomic",
        n: ip,
        short: `A${ip}`
      };
      const cp = function(pp) {
        return pp >= 6 && pp <= 10 ? pp - 6 + 1 : 0
      }(pp);
      return cp > 0 ? {
        kind: "stage",
        n: cp,
        short: `S${cp}`
      } : {
        kind: "tier",
        n: pp,
        short: String(pp)
      }
    }

    function vp(pp) {
      return op[Math.max(1, Math.min(pp, op.length)) - 1]
    }

    function tp(pp, ip) {
      return pp < ip ? function(pp) {
        var ip;
        return null !== (ip = op[pp]) && void 0 !== ip ? ip : null
      }(pp) : null
    }
    const Hp = "baf2coresubmit",
      dp = "baf2corebankpause",
      ep = "baf2coredeposit",
      jp = "baf2corechargepause";

    function kp(pp) {
      var ip;
      return null !== (ip = pp.baf2CoreOpen) && void 0 !== ip ? ip : Ip
    }
    const mp = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function Rp(pp) {
      return mp.includes(pp)
    }
    const qp = (pp, ip) => ip.map((ip => [ip, [pp]])),
      Mp = Object.fromEntries([...qp("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...qp("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...qp("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...qp("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...qp("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...qp("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...qp("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...qp("Parts Bench", ["Focus Lens"]), ...qp("Machine Bench", ["Laser", "Collider"]), ...qp("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...qp("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...qp("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...qp("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...qp("Tool Bench", ["Mob Cage"]), ...qp("Tool Bench", ["Pocket Terminal"]), ...qp("Tool Bench", ["Comet Beacon"]), ...qp("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function Cp(pp) {
      var ip;
      return null !== (ip = Mp[pp]) && void 0 !== ip ? ip : ["Workbench"]
    }

    function Ep(pp) {
      return Cp(pp)[0]
    }
    op.slice(1).map(((pp, ip) => `Core Tier ${ip+2}`));
    var Xp = cp(9338);
    const lp = ["on", "hud", "off"];

    function Qp(pp) {
      return "on" === pp
    }
    var Jp = cp(337);
    const Bp = "Mob Farm",
      Np = {
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
      Tp = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      fp = {
        1: 20,
        2: 60,
        3: 120
      },
      bp = "baf2farmvoid",
      hp = "Caged ",
      ap = " Spawner Block";

    function np(pp) {
      return `lifeform:${(0,Jp.qe)(pp)}`
    }

    function Fp(pp) {
      if (!pp) return null;
      if (pp.startsWith(hp)) {
        const ip = pp.slice(6);
        return Tp.includes(ip) ? ip : null
      }
      if (pp.endsWith(ap)) {
        const ip = pp.slice(0, -14);
        return void 0 !== Np[ip] ? ip : null
      }
      return null
    }

    function gp(pp) {
      return !0 === pp.mobFarm
    }

    function Gp(pp, ip) {
      return fp[Np[ip]] * pp.opMs / 1e3
    }
    const rp = new Map;
    const Zp = "baf2islands",
      zp = "baf2islandnew";

    function sp(pp) {
      const ip = op.findIndex((ip => ip.unlocks.includes(pp)));
      return ip < 0 ? 1 : ip + 1
    }

    function Kp(pp) {
      return Math.floor(pp).toLocaleString("en-US")
    }
    var Vp = cp(38636);
    const ii = "baf2terminaltake",
      ci = "baf2terminalput",
      Oi = ["one", "stack", "fill"];

    function oi(pp, ip, cp) {
      return `${ii} ${pp} ${ip} ${cp}`
    }

    function Ii(pp, ip, cp) {
      return `${ci} ${pp} ${ip} ${cp}`
    }

    function Si(pp) {
      return `${ci} ${pp}`
    }
    const xi = [
      [`${ii} `, "take"],
      [`${ci} `, "put"]
    ];

    function Li(pp) {
      const ip = xi.find((ip => {
        let [cp] = ip;
        return pp.startsWith(cp)
      }));
      if (!ip) return null;
      const [cp, Op] = ip, [op, Ip, ...Sp] = pp.slice(cp.length).trim().split(" "), xp = Number(op);
      if (!Number.isSafeInteger(xp) || xp <= 0) return null;
      if ("put" === Op && void 0 === Ip) return {
        kind: "putAll",
        seq: xp
      };
      const Lp = function(pp) {
        if (Oi.includes(pp)) return pp;
        const ip = Number(pp);
        return /^\d+$/.test(pp) && Number.isSafeInteger(ip) && ip > 0 ? ip : null
      }(null !== Ip && void 0 !== Ip ? Ip : "");
      return null === Lp || 0 === Sp.length ? null : {
        kind: Op,
        seq: xp,
        mode: Lp,
        item: Sp.join(" ")
      }
    }

    function Yi(pp, ip) {
      const cp = "number" === typeof pp ? pp : "one" === pp ? 1 : "stack" === pp ? 99 : ip;
      return Math.min(ip, cp)
    }

    function Di(pp, ip) {
      const cp = pp => "number" === typeof pp ? pp : "one" === pp ? 1 : 99;
      return "fill" === pp || "fill" === ip ? "fill" : cp(pp) + cp(ip)
    }

    function Ai(pp, ip) {
      const cp = Li(pp),
        Op = Li(ip),
        op = cp && Op ? function(pp, ip) {
          return "take" === pp.kind || "take" === ip.kind ? "take" === pp.kind && "take" === ip.kind && pp.item === ip.item ? {
            ...ip,
            mode: Di(pp.mode, ip.mode)
          } : null : "putAll" === pp.kind || "putAll" === ip.kind ? {
            kind: "putAll",
            seq: ip.seq
          } : pp.item === ip.item ? {
            ...ip,
            mode: Di(pp.mode, ip.mode)
          } : null
        }(cp, Op) : null;
      return op ? "putAll" === (Ip = op).kind ? Si(Ip.seq) : "put" === Ip.kind ? Ii(Ip.seq, Ip.mode, Ip.item) : oi(Ip.seq, Ip.mode, Ip.item) : null;
      var Ip
    }
    const Pi = "baf2rx";

    function Wi(pp, ip) {
      for (var cp = arguments.length, Op = new Array(cp > 2 ? cp - 2 : 0), op = 2; op < cp; op++) Op[op - 2] = arguments[op];
      return [Pi, pp[0], pp[1], pp[2], ip, ...Op].join(" ")
    }
    const yi = 2,
      Ui = 4,
      wi = 8,
      vi = 16,
      ti = 32,
      Hi = 64,
      di = 128,
      ei = 256,
      ui = 512,
      ji = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      ki = [{
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
    const mi = "Biomass",
      Ri = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function qi(pp) {
      return {
        input: mi,
        inputAmount: 1,
        output: pp,
        outputAmount: 1
      }
    }
    const Mi = "baf2synth",
      Ci = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      Ei = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Xi = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      li = function(pp, ip) {
        return {
          input: pp,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: ip,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      Qi = function(pp, ip) {
        return {
          ...li(pp, ip, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      Ji = Ei.map((pp => Qi(pp, "Biomass", 2))),
      Bi = {
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
          recipes: [li("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), li("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), li("Raw Gold", "Gold Grit", 2), li("Messy Stone", "Sand"), li("Gravel", "Sand"), li("Raw Voltite", "Voltite Dust", 2), li("Moonstone", "Moonstone Dust", 4), li("Wheat Seeds", "Fertiliser"), li("Raw Uranium", "Uranium Grit", 2), Qi("Mossy Messy Stone", "Sand"), ...Ji],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [li("Iron Grit", "Iron Bar"), li("Copper Grit", "Copper Bar"), li("Gold Grit", "Gold Bar"), li("Raw Iron", "Iron Bar"), li("Raw Copper", "Copper Bar"), li("Raw Gold", "Gold Bar"), li("Sand", "Glass"), li("Messy Stone", "Stone"), ...Jp.Ic.map((pp => li(pp, "Charcoal", 1, 4))), li("Wheat", "Bread", 1, 2), ...Ei.map(((pp, ip) => Qi(pp, Xi[ip])))],
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
          recipes: [li("Iron Bar", "Iron Plate"), li("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [li("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [li("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [li("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), li("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), li("Raw Gold", "Gold Grit", 3), li("Raw Voltite", "Voltite Dust", 3), li("Messy Stone", "Sand", 2), li("Gravel", "Sand", 2), li("Moonstone", "Moonstone Dust", 6), li("Raw Uranium", "Uranium Grit", 3), Qi("Mossy Messy Stone", "Sand", 2), ...Ji],
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
          table: ji
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [li("Coal", "Diamond", 1, 24), li("Voltite Dust", "Moonstone", 1, 12)],
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
        ...Vp.h
      },
      Ni = {
        Crusher: [li("Spent Pellet", "Glow Dust"), li("Wheat Seeds", "Biomass"), li("Wheat", "Biomass"), li("Dead Bush", "Biomass"), li("Dusk Moss", "Biomass"), li("Rotten Flesh", "Biomass"), li("Bone", "Biomass", 2)],
        "Shatter Mill": [li("Spent Pellet", "Glow Dust"), li("Wheat Seeds", "Biomass"), li("Wheat", "Biomass"), li("Dead Bush", "Biomass"), li("Dusk Moss", "Biomass"), li("Rotten Flesh", "Biomass"), li("Bone", "Biomass", 2), ...Jp.Ic.map((pp => li(pp, "Biomass")))],
        Smelter: [li("Biomass", "Fertiliser", 2)],
        Press: [li("Coal", "Graphite", 1, 4)]
      },
      Ti = "Power Coupler",
      fi = "Advanced Coupler",
      bi = "Nova Coupler",
      ai = [{
        item: Ti,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: fi,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: bi,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const ni = new Map;

    function Fi(pp) {
      var ip, cp;
      return null !== (ip = null !== (cp = pp.fuelSlot) && void 0 !== cp ? cp : pp.couplerSlot) && void 0 !== ip ? ip : null
    }

    function gi(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!pp.couplable) throw new Error(`${pp.kind} takes no Power Coupler`);
      let cp = ni.get(pp);
      cp || (cp = [], ni.set(pp, cp));
      let Op = cp[ip];
      if (!Op) {
        var op;
        const {
          divisor: Ip,
          powerPerS: Sp
        } = ai[ip - 1], xp = pp.opMs / Ip, Lp = void 0 !== pp.fluidMade || void 0 !== pp.cryoMade ? pp.powerPerOp : Sp * xp / 1e3;
        Op = {
          ...pp,
          fuelSlot: null,
          couplerSlot: null !== (op = Fi(pp)) && void 0 !== op ? op : void 0,
          opMs: xp,
          powerPerOp: Lp,
          coupled: !0
        }, ip > 1 && (Op = {
          ...Op,
          couplerLevel: ip
        }), cp[ip] = Op
      }
      return Op
    }
    const Gi = new Map;
    const ri = new Map;

    function Zi(pp, ip) {
      if (null === ip || (cp = ip, !Ri.includes(cp))) return pp;
      var cp;
      let Op = ri.get(ip);
      return Op || (Op = {
        ...pp,
        recipes: [qi(ip)]
      }, ri.set(ip, Op)), Op
    }

    function zi(pp) {
      return !0 === pp.synth
    }
    const si = (pp, ip, cp, Op) => ({
        output: pp,
        outputAmount: ip,
        tier: cp,
        inputs: Op.map((pp => {
          let [ip, cp] = pp;
          return {
            item: ip,
            amount: cp
          }
        }))
      }),
      Ki = Object.fromEntries([si("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), si("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), si("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), si("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), si("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), si("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), si("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), si("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), si("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), si("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), si("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), si("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), si("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), si("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), si("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), si("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), si("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), si("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), si("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), si("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), si("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), si("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), si("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), si("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), si("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), si("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), si("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), si("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), si("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), si("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((pp => [pp.output, pp]))),
      Vi = new Map;

    function pc(pp, ip) {
      let cp = Bi[pp];
      if (ip.atomic && (cp = function(pp) {
          const ip = Ni[pp.kind];
          if (!ip) return pp;
          let cp = Gi.get(pp.kind);
          if (!cp) {
            const Op = new Set(ip.map((pp => pp.input))),
              op = pp.recipes.filter((pp => !Op.has(pp.input)));
            cp = {
              ...pp,
              recipes: [...op, ...ip]
            }, Gi.set(pp.kind, cp)
          }
          return cp
        }(cp)), cp.synth) return Zi(cp, ip.taught);
      if (ip.coupled && cp.couplable) return gi(cp, ip.level);
      const Op = cp.inputSlots && null !== ip.taught ? Ki[ip.taught] : void 0;
      if (!Op) return cp;
      const op = `${pp}|${Op.output}`;
      let Ip = Vi.get(op);
      return Ip || (Ip = {
        ...cp,
        bench: Op
      }, Vi.set(op, Ip)), Ip
    }
    const ic = ["Diamond", "Moonstone"];

    function cc(pp) {
      return new Set(pp.flatMap((pp => pp.bonus ? [pp.output, pp.bonus.item] : [pp.output])).filter((pp => !ic.includes(pp))))
    }
    const Oc = Object.values(Bi).flatMap((pp => pp.recipes));
    cc(Oc.filter((pp => !0 !== pp.nuclear))), cc([...Oc.filter((pp => !0 === pp.nuclear)), ...Object.values(Ni).flat()]);

    function oc(pp) {
      return null === pp.inputSlot && void 0 === pp.inputSlots && void 0 === pp.powerMade && void 0 === pp.fluidMade && !pp.treeCutter && void 0 === pp.table
    }

    function Ic(pp) {
      return !0 === pp.treeCutter
    }
    const Sc = ["Voltite Cell"];

    function xc(pp) {
      var ip, cp;
      return null !== (ip = null === (cp = pp.fuels) || void 0 === cp ? void 0 : cp.some((pp => Sc.includes(pp)))) && void 0 !== ip && ip
    }
    const Lc = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(Jp.Ic.map((pp => [pp, 8e3]))),
        ...Object.fromEntries(Jp.md.map((pp => [pp, 2e3]))),
        "Voltite Cell": 12e4
      },
      Yc = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Dc = {
        "Uranium Deposit": 4e3
      };

    function Ac(pp) {
      var ip;
      return null !== (ip = Object.keys(Yc).find((ip => Yc[ip] === pp))) && void 0 !== ip ? ip : null
    }

    function Pc(pp) {
      return Ci.includes(pp)
    }

    function Wc(pp) {
      return !0 !== pp.nuclear || xp()
    }
    var yc = cp(322);
    var Uc = cp(9422),
      wc = cp(9348),
      vc = cp(9427),
      tc = cp(9414);
    const Hc = "Reactor Controller",
      dc = "Reactor Port",
      ec = "Battery Cell",
      uc = ["fuel", "water", "waste"],
      jc = {
        fuel: dc,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      kc = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      mc = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Rc = "Reactor Frame",
      qc = "Reactor Glass",
      Mc = {
        edge: [Rc],
        cap: [qc, dc],
        wall: [qc, dc],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [Hc]
      },
      Cc = {
        edge: [ec],
        cap: [ec],
        wall: [ec],
        inside: [ec],
        ctrl: [ec]
      },
      Ec = ["edge", "cap", "wall", "inside"],
      Xc = ["Reactor Slag"];

    function lc(pp) {
      return Xc.includes(Qc(pp))
    }

    function Qc(pp) {
      const ip = pp.indexOf("|");
      return ip < 0 ? pp : pp.slice(0, ip)
    }

    function Jc(pp) {
      return Qc(pp) === Hc ? "reactor" : null
    }

    function Bc(pp) {
      return Qc(pp) !== dc ? null : pp.endsWith("|Water") ? "water" : pp.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Nc(pp) {
      const ip = Bc(pp);
      return null === ip ? null : bc(jc[uc[(uc.indexOf(ip) + 1) % uc.length]], function(pp) {
        return pp.includes(Tc)
      }(pp))
    }
    const Tc = "|meta|rot1|Formed",
      fc = new Set([Rc, qc, dc]);

    function bc(pp, ip) {
      var cp;
      const Op = Qc(pp);
      if (!fc.has(Op)) return pp;
      if (Op !== dc) return ip ? Op + Tc : Op;
      const op = null !== (cp = Bc(pp)) && void 0 !== cp ? cp : "fuel";
      return ip ? "fuel" === op ? Op + Tc : `${Op}${Tc}|${"water"===op?"Water":"Waste"}` : jc[op]
    }

    function hc(pp, ip) {
      const cp = SO(pp, ip);
      if ("Air" === cp) return !1;
      const Op = "reactor" === pp ? Mc : Cc;
      return Ec.some((pp => Op[pp].includes(cp))) || "reactor" === pp && Xc.includes(cp)
    }

    function ac(pp) {
      return mc[pp]
    }

    function nc(pp) {
      var ip;
      return null !== (ip = kc[pp]) && void 0 !== ip ? ip : kc[1]
    }

    function Fc(pp) {
      const [ip, , cp] = nc(pp);
      return [cp, 0, -ip]
    }

    function gc(pp, ip, cp, Op, op, Ip) {
      return {
        ctrl: [pp[0], pp[1], pp[2]],
        rot: kc[ip] ? ip : 1,
        w: cp,
        h: Op,
        d: op,
        cu: Ip[0],
        cv: Ip[1]
      }
    }

    function Gc(pp, ip) {
      return "reactor" === pp ? [Math.floor((ip - 1) / 2), 0] : [0, 0]
    }

    function rc(pp, ip, cp, Op, op) {
      let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : pp.rot;
      if (cp === pp.w && Op === pp.h && op === pp.d && Ip === pp.rot) return pp;
      const [Sp] = Gc(ip, pp.w);
      if (pp.cu === Sp && pp.cv <= 1) return gc(pp.ctrl, Ip, cp, Op, op, Gc(ip, cp));
      const xp = (pp, ip) => Math.max(1, Math.min(ip, pp));
      return gc(pp.ctrl, Ip, cp, Op, op, [xp(pp.cu, cp - 2), 0 === pp.cv ? 0 : xp(pp.cv, Op - 2)])
    }
    const Zc = 11,
      zc = 2 * Zc + 1;
    new Uint8Array(zc * zc * zc);

    function sc(pp) {
      return pp.w * pp.h * pp.d
    }

    function Kc(pp) {
      const ip = Fc(pp.rot);
      return [pp.ctrl[0] - ip[0] * pp.cu, pp.ctrl[1] - pp.cv, pp.ctrl[2] - ip[2] * pp.cu]
    }

    function Vc(pp) {
      return pp.cv * pp.d * pp.w + pp.cu
    }

    function pO(pp, ip) {
      const cp = ip % pp.w,
        Op = Math.floor(ip / pp.w) % pp.d;
      return [cp, Math.floor(ip / (pp.w * pp.d)), Op]
    }

    function iO(pp, ip) {
      const [cp, Op, op] = pO(pp, ip), Ip = Kc(pp), Sp = nc(pp.rot), xp = Fc(pp.rot);
      return [Ip[0] + xp[0] * cp - Sp[0] * op, Ip[1] + Op, Ip[2] + xp[2] * cp - Sp[2] * op]
    }

    function cO(pp, ip) {
      const cp = Kc(pp),
        Op = nc(pp.rot),
        op = Fc(pp.rot),
        Ip = ip[0] - cp[0],
        Sp = ip[2] - cp[2],
        xp = Ip * op[0] + Sp * op[2],
        Lp = -(Ip * Op[0] + Sp * Op[2]),
        Yp = ip[1] - cp[1];
      return xp < 0 || xp >= pp.w || Yp < 0 || Yp >= pp.h || Lp < 0 || Lp >= pp.d ? -1 : (Yp * pp.d + Lp) * pp.w + xp
    }

    function OO(pp, ip) {
      if (ip === Vc(pp)) return "ctrl";
      const [cp, Op, op] = pO(pp, ip), Ip = 0 === Op || Op === pp.h - 1, Sp = Number(0 === cp || cp === pp.w - 1) + Number(Ip) + Number(0 === op || op === pp.d - 1);
      return Sp >= 2 ? "edge" : 1 === Sp ? Ip ? "cap" : "wall" : "inside"
    }

    function oO(pp, ip) {
      const [cp, Op, op] = pO(pp, ip);
      return 0 === cp || cp === pp.w - 1 || 0 === Op || Op === pp.h - 1 || 0 === op || op === pp.d - 1 ? -1 : ((Op - 1) * (pp.d - 2) + (op - 1)) * (pp.w - 2) + (cp - 1)
    }

    function IO(pp, ip) {
      const cp = pp.w - 2,
        Op = pp.d - 2,
        op = ip % cp + 1,
        Ip = Math.floor(ip / cp) % Op + 1;
      return ((Math.floor(ip / (cp * Op)) + 1) * pp.d + Ip) * pp.w + op
    }

    function SO(pp, ip) {
      const cp = Qc(ip);
      return "reactor" === pp && cp === Hc ? Rc : cp
    }

    function xO(pp, ip, cp) {
      const Op = "ctrl" === ip ? Qc(cp) : SO(pp, cp);
      return ("reactor" === pp ? Mc : Cc)[ip].includes(Op) ? "ok" : "Air" === Op ? "missing" : hc(pp, cp) ? "wrong" : "blocked"
    }

    function LO(pp, ip) {
      return "battery" === pp ? ec : "inside" === ip ? null : function(pp, ip) {
        if ("inside" === ip || "ctrl" === ip || "battery" === pp) return null;
        return "edge" === ip ? Rc : qc
      }(pp, ip)
    }
    const YO = {
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
      DO = "Collider",
      AO = "Laser",
      PO = "Star Alloy",
      WO = "Glow Dust",
      yO = [DO, "_Collider Focus"];

    function UO(pp) {
      return yO.indexOf(Qc(pp))
    }

    function wO(pp) {
      return Qc(pp) === AO
    }

    function vO(pp) {
      return [
        [pp[0], pp[1], pp[2]],
        [pp[0], pp[1] + 1, pp[2]]
      ]
    }
    const tO = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function HO(pp, ip, cp) {
      const Op = tO[ip];
      return [pp[0] + Op[0] * cp, pp[1], pp[2] + Op[2] * cp]
    }

    function dO(pp, ip) {
      if (ip[1] !== pp[1]) return null;
      const cp = ip[0] - pp[0],
        Op = ip[2] - pp[2];
      if (0 !== cp === (0 !== Op)) return null;
      const op = Math.abs(cp + Op);
      if (op > YO.LASER_D) return null;
      return {
        dir: Op < 0 ? 0 : cp > 0 ? 1 : Op > 0 ? 2 : 3,
        Yx: op
      }
    }

    function eO(pp, ip, cp) {
      const Op = ip => Math.abs(pp[0] - ip[0]) <= 1 && Math.abs(pp[1] - ip[1]) <= 1;
      return Op(ip) || Op(cp)
    }

    function uO(pp, ip) {
      return function(pp, ip, cp, Op) {
        return [0, 1, 2, 3].map((op => {
          for (let Ip = 1; Ip <= YO.LASER_D; Ip++) {
            const Sp = HO(pp, op, Ip);
            if (eO([Sp[0], Sp[2]], ip, cp) || !Op(Sp)) return !1
          }
          return !0
        }))
      }(vO(pp)[1], ip.spawnXZ, ip.coreXZ, (pp => pp[1] >= Uc.v && pp[1] < Uc.v + Uc.w && pp[0] >= ip.minXZ[0] && pp[0] <= ip.maxXZ[0] && pp[2] >= ip.minXZ[1] && pp[2] <= ip.maxXZ[1]))
    }
    const jO = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function kO(pp) {
      return Math.max(48 + 16 * pp, vp(pp).machineAllowance)
    }
    const mO = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function RO(pp) {
      const ip = pp.split("|")[0];
      return mO.includes(ip) ? "Solar Panel" : ip === vc.c ? "Fluid Pipe" : UO(ip) >= 0 ? "Collider" : (cp = ip, jO.includes(cp) ? ip : null);
      var cp
    }
    const qO = "buildAFactory2Game:solarPanelDescription";
    const MO = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function CO(pp, ip) {
      var cp;
      return null !== (cp = MO.find((cp => {
        var Op;
        return (null !== (Op = pp.level(cp)) && void 0 !== Op ? Op : 0) >= ip
      }))) && void 0 !== cp ? cp : null
    }
    const EO = "buildAFactory2Game:";
    let XO = null;
    const lO = {
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
      QO = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      JO = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      BO = {
        "Loot Chest": `${EO}lookRuinChestName`
      };

    function NO(pp) {
      return "object" === typeof pp && null !== pp && "translationKey" in pp && "string" === typeof pp.translationKey ? pp.translationKey : null
    }

    function TO(pp, ip) {
      var cp;
      return null !== (cp = NO(pp.displayName(ip))) && void 0 !== cp ? cp : `item:${(0,Jp.qe)(ip)}`
    }

    function fO(pp, ip) {
      var cp, Op, op, Ip;
      let Sp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip;
      if ("Solar Panel" === RO(ip)) return {
        name: NO(pp.displayName("Solar Panel")),
        detail: qO,
        detailItem: null
      };
      const Lp = ip.endsWith(" Ore"),
        Yp = (XO ??= new Set([...Object.keys((0, wc.l)()), ...Object.keys((0, vc.o)())].map((pp => pp.split("|")[0]))), XO).has(ip),
        Dp = Lp || Yp ? null : function(pp) {
          var ip;
          return pp.endsWith(" Log") && !pp.startsWith("Barkless ") ? "lookLog" : pp.endsWith(" Sapling") ? "lookSapling" : pp.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (ip = lO[pp]) && void 0 !== ip ? ip : null
        }(ip);
      if (!pp.isBlock(ip) || !Lp && !Yp && null === Dp) return null;
      const Ap = null !== (cp = null !== (Op = BO[ip]) && void 0 !== Op ? Op : NO(null !== (op = pp.displayName(Sp)) && void 0 !== op ? op : pp.displayName(ip))) && void 0 !== cp ? cp : `item:${(0,Jp.qe)(ip)}`;
      if (null !== Dp) return {
        name: Ap,
        detail: `${EO}${Dp}`,
        detailItem: null
      };
      const Pp = null !== (Ip = QO[ip]) && void 0 !== Ip ? Ip : xp() ? JO[ip] : void 0;
      if (Yp && void 0 !== Pp) return {
        name: Ap,
        detail: `${EO}${Pp}`,
        detailItem: null
      };
      const Wp = Yc[ip];
      if (void 0 !== Wp) return {
        name: Ap,
        detail: `${EO}lookDeposit`,
        detailItem: TO(pp, Wp)
      };
      const yp = pp.harvestLevel(ip);
      if (Lp && "rock" === pp.harvestType(ip) && 0 !== yp) {
        const ip = CO(pp, null !== yp && void 0 !== yp ? yp : 0);
        if (ip === MO[0]) return {
          name: Ap,
          detail: `${EO}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== ip) return {
          name: Ap,
          detail: `${EO}lookPickaxe`,
          detailItem: TO(pp, ip)
        }
      }
      return {
        name: Ap,
        detail: NO(pp.description(ip)),
        detailItem: null
      }
    }

    function bO(pp) {
      return pp < Uc.v - 24
    }
    const hO = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const aO = "Wrench",
      nO = "Nova Wrench";

    function FO(pp) {
      return pp === aO || pp === nO
    }
    const gO = [...Uc.N, "Belt Lift", "Belt Drop"];
    const GO = ["Belt Lift", "Belt Drop"],
      rO = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function ZO(pp) {
      return pp.split("|")[0]
    }

    function zO(pp) {
      const ip = /\|rot(\d)/.exec(pp);
      return ip ? Number(ip[1]) : 1
    }

    function sO(pp) {
      return pp % 4 + 1
    }

    function KO(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === ip && "" === cp ? pp : `${pp}|meta|rot${ip}${cp}`
    }

    function VO(pp) {
      return ZO(pp) === Uc.C ? (0, Uc.T)(pp) ? "gateRight" : "gateLeft" : (0, Uc.W)(pp)
    }

    function po(pp) {
      const ip = ZO(pp),
        cp = zO(pp);
      if (Uc.N.includes(ip)) return (0, Uc.P)(ip, sO(cp), null);
      if (ip === Uc.l) return (0, Uc.ab)(sO(cp), (0, Uc.U)(pp));
      if (ip === Uc.D) {
        const Op = rO[(0, Uc.W)(pp)];
        return null === Op ? KO(ip, sO(cp)) : KO(ip, cp, Uc.F[Op])
      }
      return ip === Uc.C ? (0, Uc.T)(pp) ? KO(ip, sO(cp)) : KO(ip, cp, Uc.r) : tc.b.includes(ip) && !GO.includes(ip) || Pc(ip) ? KO(ip, sO(cp)) : null
    }

    function io(pp) {
      return tc.b.includes(pp) || Pc(pp) || null !== RO(pp)
    }

    function co(pp) {
      return "Solar Panel" === RO(pp)
    }
    const Oo = "buildAFactory2Game:",
      oo = {
        leftFront: `${Oo}lookSplitDetail_leftFront`,
        frontRight: `${Oo}lookSplitDetail_frontRight`,
        gateRight: `${Oo}lookGateDetail_gateRight`
      };

    function Io(pp, ip) {
      var cp;
      let Op = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const op = VO(pp),
        Ip = null === op ? null : `${Oo}${op.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${op}`,
        Sp = null === op ? null : null !== (cp = oo[op]) && void 0 !== cp ? cp : null;
      if (FO(ip) && Op) {
        const cp = ZO(pp);
        return ip === nO && xp() && function(pp) {
          return gO.includes(ZO(pp))
        }(pp) ? {
          mode: Ip,
          detail: Sp,
          next: `${Oo}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: Ip,
          detail: Sp,
          next: io(cp) && !co(cp) ? `${Oo}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const Lp = FO(ip) ? po(pp) : null;
      if (null === Lp) return {
        mode: Ip,
        detail: Sp,
        next: null,
        nextState: null
      };
      const Yp = VO(Lp);
      return null === Yp || zO(Lp) !== zO(pp) ? {
        mode: Ip,
        detail: Sp,
        next: `${Oo}lookWrenchTurn`,
        nextState: null
      } : {
        mode: Ip,
        detail: Sp,
        next: `${Oo}lookWrenchNext`,
        nextState: `${Oo}lookWrenchState_${Yp}`
      }
    }
    const So = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const xo = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function Lo(pp) {
      return [0, 1, 2, 3].map((ip => 0 !== (pp & 1 << ip)))
    }

    function Yo(pp) {
      const ip = [];
      for (let cp = 8; cp + 2 < pp.length; cp += 3) ip.push([pp[cp], pp[cp + 1], pp[cp + 2]]);
      return {
        focus: [pp[0], pp[1], pp[2]],
        lasers: Lo(pp[3]),
        open: Lo(pp[4]),
        live: Lo(pp[5]),
        on: 1 === pp[6],
        state: xo[pp[7]],
        blockers: ip
      }
    }
    const Do = "Arc Caster",
      Ao = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      Po = (Object.values(Ao), "Jet Chestplate"),
      Wo = "Nova Jet Chestplate",
      yo = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Uo = Object.values(yo);

    function wo(pp, ip, cp) {
      return Math.min(function(pp) {
        return xp() && Ap(pp) >= 5 ? 20 : 10
      }(cp), Math.floor(function(pp, ip) {
        return Math.max(0, pp) + (xp() ? Math.max(0, ip) : 0)
      }(pp, ip) / 5))
    }

    function vo(pp, ip, cp) {
      const Op = wo(ip, cp, pp),
        op = Ap(pp),
        Ip = (op >= 3 ? 55 : op >= 1 ? 50 : pp >= 8 ? 45 : 30) + Op,
        Sp = Math.max(100 + Op, 2 * Ip);
      return {
        arcDamage: Ip,
        arcPierce: pp >= 7 ? 2 : 1,
        arcChain: pp >= 10,
        barrierMax: (op >= 4 ? 100 : op >= 2 ? 90 : pp >= 9 ? 80 : pp >= 6 ? 60 : 40) + 5 * Op,
        barrierRegenPerS: op >= 5 ? 20 : pp >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * Op,
        novaShieldRegenPerS: 32,
        bladeDamage: Sp,
        bladePunch: Math.round(.5 * Sp),
        forgeRank: Op
      }
    }
    const to = {
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
    var Ho = cp(37032),
      eo = cp(36804),
      uo = cp(36799),
      jo = cp(25),
      ko = cp(1650),
      mo = cp(1049),
      Ro = cp.n(mo);

    function qo(pp) {
      return !0 === pp.field
    }
    const Mo = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function Co(pp) {
      return Mo.has(pp) ? `buildAFactory2Game:itemPlural_${(0,Jp.qe)(pp)}` : null
    }
    var Eo = cp(1201),
      Xo = cp(1060),
      Qo = cp(1941),
      Jo = cp(1929),
      Bo = cp(1424),
      No = cp(37025),
      To = cp(34),
      fo = cp(37021);
    const bo = "baf2QuestView",
      ho = "baf2PlayerY",
      ao = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class no {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = pp, this.view = {
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
      set(pp, ip) {
        var cp, Op, op, Ip, Sp, xp, Lp, Yp;
        const Dp = JSON.stringify(pp.baf2QuestName) === JSON.stringify(this.view.name),
          Ap = new Set(this.view.rows.filter((pp => pp.done)).map((pp => pp.id))),
          Pp = new Set(this.view.rows.filter((pp => pp.justFinished)).map((pp => pp.id))),
          Wp = pp.baf2QuestSide,
          yp = null !== Wp && !0 === pp.baf2QuestSideFocus;
        let Up = !1,
          wp = 0;
        const vp = pp.baf2QuestSteps.map((pp => {
            const ip = Ko(pp, ao.has(pp[0]) ? pp[0] : "" + wp++),
              cp = Dp && ip.done && !Ap.has(ip.id);
            return ip.justFinished = cp || Dp && ip.done && Pp.has(ip.id), Up ||= cp, ip
          })),
          tp = so(vp);
        tp >= 0 && !yp && (vp[tp].current = !0);
        const Hp = !Dp && null !== pp.baf2QuestName,
          dp = JSON.stringify(Wp && [Wp[0], Wp[1]]),
          ep = dp === JSON.stringify(null !== (cp = null === (Op = this.view.side) || void 0 === Op ? void 0 : Op.name) && void 0 !== cp ? cp : null),
          jp = null !== Wp && !this.sidesSeen.has(dp);
        jp && this.sidesSeen.add(dp), this.serverTutorial = null !== (op = pp.baf2QuestTutorial) && void 0 !== op ? op : "on", (null !== (Ip = pp.baf2QuestTutorialSeq) && void 0 !== Ip ? Ip : 0) >= this.pickSeq && this.endPick();
        const kp = !Dp || !ep || pp.baf2QuestTier !== this.view.tier;
        this.view = {
          name: pp.baf2QuestName,
          rows: vp,
          reward: pp.baf2QuestReward,
          goal: pp.baf2QuestGoal,
          pulse: this.view.pulse + (Up || Hp ? 1 : 0),
          itemNames: ip,
          side: Wp && {
            name: [Wp[0], Wp[1]],
            row: {
              ...Ko(Wp[2], "side"),
              current: yp
            },
            goal: null !== (Sp = Wp[3]) && void 0 !== Sp ? Sp : null
          },
          sideCameUpAt: jp ? Date.now() : this.view.sideCameUpAt,
          tier: pp.baf2QuestTier,
          core: pp.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (xp = pp.baf2QuestAlso) && void 0 !== xp ? xp : [],
          depth: null !== (Lp = pp.baf2QuestDepth) && void 0 !== Lp ? Lp : null,
          tutorial: null !== (Yp = this.pickedTutorial) && void 0 !== Yp ? Yp : this.serverTutorial,
          tutorialKnown: !0
        }, this.GA(), Up && this.scheduleClear(), kp && this.requestBook()
      }
      setTutorial(pp) {
        return this.endPick(), this.pickedTutorial = pp, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.GA()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: pp
        }, this.GA(), this.pickSeq
      }
      onPlayerY(pp) {
        const ip = Math.floor(pp);
        ip !== this.playerY && (this.playerY = ip, this.view.depth && To.m.GA(ho, ip))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(pp) {
        this.view = {
          ...this.view,
          chapters: pp.baf2BookChapters
        }, this.GA()
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
            rows: this.view.rows.map((pp => pp.justFinished ? {
              ...pp,
              justFinished: !1
            } : pp))
          }, this.GA()
        }), 2400)
      }
      GA() {
        To.m.GA(bo, this.view, !0)
      }
    }

    function Fo(pp, ip) {
      return pp.sideCameUpAt > 0 && ip - pp.sideCameUpAt < 2400
    }

    function go(pp) {
      return (null === pp.name || Go(pp)) && null === pp.side && null !== pp.chapters
    }

    function Go(pp) {
      var ip;
      return "quest_forgeOngoing" === (null === (ip = pp.name) || void 0 === ip ? void 0 : ip[0])
    }

    function ro(pp) {
      return pp.filter((pp => !ao.has(pp.key)))
    }

    function Zo(pp) {
      return pp.key.startsWith("stepCraft")
    }

    function zo(pp, ip) {
      const cp = new Set,
        Op = pp.side ? [...pp.rows, pp.side.row] : pp.rows;
      for (const Ip of Op)
        if (!Ip.done) {
          !Ip.item || ip && !Zo(Ip) || cp.add(Ip.item);
          for (const [pp, ip, Op] of null !== (op = Ip.chips) && void 0 !== op ? op : []) {
            var op;
            ip < Op && cp.add(pp)
          }
        } return cp
    }

    function so(pp) {
      const ip = pp.findIndex((pp => !pp.done && !pp.away));
      return ip >= 0 ? ip : pp.findIndex((pp => !pp.done))
    }

    function Ko(pp, ip) {
      let [cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap] = pp;
      return {
        id: ip,
        key: cp,
        params: Op,
        item: op,
        amount: Ip,
        total: Sp,
        done: xp,
        chips: null !== Lp && void 0 !== Lp ? Lp : null,
        current: !1,
        away: !0 === Yp,
        madeFor: null !== Dp && void 0 !== Dp ? Dp : [],
        also: null !== Ap && void 0 !== Ap ? Ap : [],
        justFinished: !1
      }
    }
    const Vo = "baf2QuestItems",
      pI = new Set;
    let iI = new Set,
      cI = null;

    function OI(pp) {
      const ip = Qp(pp.tutorial),
        cp = ip ? zo(pp, !0) : pI;
      "inventory" === jo.c.get("openInGameMenuName") ? (cI = null, (0, fo.y)(cp)) : cI = cp;
      const Op = ip ? zo(pp, !1) : pI;
      (0, No.b)(Op, iI) || (iI = Op, To.m.GA(Vo, iI))
    }

    function oI() {
      return (0, Bo.d)(Vo, (() => iI))
    }
    var II = cp(34448),
      SI = cp(3400);

    function xI(pp) {
      const ip = (0, SI.c)(pp),
        cp = void 0 === ip ? void 0 : (0, II.displayNameOf)(ip);
      return "object" === typeof cp && null !== cp && "translationKey" in cp && "string" === typeof cp.translationKey ? cp.translationKey : `item:${(0,Jp.qe)(pp)}`
    }

    function LI(pp, ip) {
      return pp(xI(ip))
    }
    const YI = [{
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

    function DI(pp, ip) {
      return [`Deposit Seed (${pp})`, {
        item: Yc[`${pp} Deposit`],
        amount: ip
      }]
    }
    const AI = Object.fromEntries([DI("Coal", 8), DI("Iron", 8), DI("Copper", 8), DI("Gold", 6), DI("Voltite", 4), DI("Uranium", 4)]),
      PI = "Relay Coil",
      WI = new Map;

    function yI(pp) {
      let ip = WI.get(pp);
      if (!ip) {
        const cp = Math.max(1, pp);
        ip = YI.filter((pp => {
          var ip;
          return cp >= pp.fromTier && cp <= (null !== (ip = pp.untilTier) && void 0 !== ip ? ip : 1 / 0)
        })).map((pp => pp.later && cp >= pp.later.tier ? {
          ...pp,
          weight: pp.later.weight
        } : pp)), WI.set(pp, ip)
      }
      return ip
    }

    function UI(pp) {
      return yI(pp).some((pp => {
        let {
          item: ip
        } = pp;
        return ip === PI
      }))
    }

    function wI(pp) {
      return pp.startsWith("Deposit Seed (")
    }

    function vI(pp, ip) {
      const cp = yI(pp);
      return ip ? cp.filter((pp => ip(pp.item))) : cp
    }

    function tI(pp) {
      return pp.reduce(((pp, ip) => pp + ip.weight), 0)
    }

    function HI(pp, ip) {
      const cp = vI(pp, ip),
        Op = tI(cp);
      return cp.map((pp => ({
        find: pp,
        chance: pp.weight / Op
      })))
    }
    const dI = 6e4,
      eI = new Intl.NumberFormat("en-US");

    function uI(pp, ip) {
      const cp = pp >= 10 ? Math.round(pp) : Math.round(10 * pp) / 10;
      return 0 === cp ? "0" : `${ip}${eI.format(cp)}`
    }

    function jI(pp) {
      return pp < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? eI.format(pp) : pp < 1e6 ? `${pp<1e5?Math.floor(pp/100)/10:Math.floor(pp/1e3)}k` : Math.floor(pp / 1e5) / 10 + "M"
    }

    function kI(pp) {
      return pp < 0 ? "\u2212" + -pp : String(pp)
    }

    function mI(pp, ip) {
      const cp = Math.max(1, Math.round(ip));
      if (cp < 60) return pp("buildAFactory2Game:durationSeconds", {
        seconds: String(cp)
      });
      const Op = Math.round(cp / 60);
      if (Op < 60) return pp("buildAFactory2Game:durationMinutes", {
        minutes: String(Op)
      });
      const op = String(Math.floor(Op / 60));
      return Op % 60 === 0 ? pp("buildAFactory2Game:durationWholeHours", {
        hours: op
      }) : pp("buildAFactory2Game:durationHours", {
        hours: op,
        minutes: String(Op % 60)
      })
    }
    var RI = cp(2539);
    const qI = "(max-height: 420px), (max-width: 650px)";

    function MI() {
      return (0, RI.b)(qI)
    }
    var CI = cp(1112);

    function EI(pp, ip) {
      return null !== pp && pp > ip + 1
    }

    function XI(pp) {
      const ip = 100 * pp;
      return String(ip <= 0 || ip >= 1 ? Math.round(ip) : Math.max(.1, Math.round(10 * ip) / 10))
    }

    function lI(pp) {
      let {
        item: ip,
        amount: cp
      } = pp;
      return (0, CI.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, CI.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, CI.jsx)(Qo.d, {
            itemName: ip,
            amount: 0
          })
        }), cp > 1 && (0, CI.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", cp]
        })]
      })
    }

    function QI(pp) {
      let {
        label: ip,
        names: cp
      } = pp;
      const [op, Ip] = (0, Op.useState)(!1), Sp = cp.join(" / ");
      return (0, CI.jsxs)(CI.Fragment, {
        children: [(0, CI.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: Sp,
          "aria-expanded": op,
          onClick: () => {
            Ip(!op)
          },
          children: ip
        }), op && (0, CI.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: Sp
        })]
      })
    }

    function JI(pp) {
      let {
        tier: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)(), {
        key: Op,
        params: op
      } = Wp(ip, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), Ip = cp(`buildAFactory2Game:${Op}`, op);
      return (0, CI.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, CI.jsx)(Xo.d, {
          name: "lock"
        }), Ip]
      })
    }
    const BI = (0, Op.createContext)(null);

    function NI() {
      const {
        t: pp
      } = (0, Eo.H)(), ip = (0, Op.useContext)(BI);
      return (0, Op.useEffect)((() => null === ip || void 0 === ip ? void 0 : ip()), [ip]), (0, CI.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: pp("buildAFactory2Game:recipeForQuest"),
        "aria-label": pp("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function TI(pp) {
      let {
        title: ip,
        count: cp,
        children: op,
        startOpen: Ip = !0
      } = pp;
      const {
        t: Sp
      } = (0, Eo.H)(), [xp, Lp] = (0, Op.useState)((() => Ip && !MI())), [Yp, Dp] = (0, Op.useState)(0), Ap = (0, Op.useCallback)((() => (Dp((pp => pp + 1)), () => {
        Dp((pp => pp - 1))
      })), []);
      return (0, CI.jsxs)("div", {
        className: Ro()("Baf2Recipes", {
          Open: xp
        }),
        children: [(0, CI.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            Lp(!xp)
          },
          "aria-expanded": xp,
          children: [Sp("buildAFactory2Game:recipesToggle", {
            title: ip,
            count: String(cp)
          }), (0, CI.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: xp ? "\u25be" : "\u25b8"
          })]
        }), xp && (0, CI.jsxs)(BI.Provider, {
          value: Ap,
          children: [(0, CI.jsx)("ul", {
            className: "Baf2RecipeList",
            children: op
          }), Yp > 0 && (0, CI.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, CI.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), Sp("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const fI = "buildAFactory2Game:",
      bI = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const hI = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      aI = {
        "Uranium Grit": Ip,
        "Raw Uranium": Ip
      };

    function nI(pp) {
      var ip;
      return null !== (ip = aI[pp]) && void 0 !== ip ? ip : Math.max(sp(pp), hI[pp] ? sp(hI[pp]) : 1, function(pp) {
        const ip = op.findIndex((ip => ip.cost.some((ip => ip.item === pp))));
        return ip > Ip ? ip : 1
      }(pp))
    }

    function FI(pp, ip) {
      return gI(ip) ? nI(ip) : function(pp) {
        if (bI.has(pp)) return 1;
        const ip = op.findIndex((ip => ip.newDeposits.some((ip => {
          let {
            block: cp
          } = ip;
          return cp === pp
        }))));
        return ip < 0 ? 1 : ip + 1
      }(pp)
    }

    function gI(pp) {
      return pp in aI || Ap(nI(pp)) > 0
    }

    function GI(pp, ip) {
      return pc(pp, {
        coupled: !1,
        taught: null,
        atomic: xp() && ip >= 11
      }).recipes
    }

    function rI(pp, ip) {
      const cp = Pp(pp, ip, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ap(pp) > 0);
      return "open" === cp || "locked" === cp
    }

    function ZI(pp, ip) {
      return pp.map(((pp, cp) => ({
        value: pp,
        idx: cp,
        tier: ip(pp)
      }))).sort(((pp, ip) => pp.tier - ip.tier || pp.idx - ip.idx)).map((pp => {
        let {
          value: ip
        } = pp;
        return ip
      }))
    }

    function zI(pp, ip, cp) {
      const Op = Pp(pp, ip);
      if ("hidden" === Op || "open" === Op) return null;
      if ("teaser" === Op) return {
        tag: {
          translationKey: `${fI}${cp?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${fI}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const op = Wp(pp, {
          tier: cp ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        Ip = Wp(pp, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${fI}${op.key}`,
          params: op.params
        },
        reason: {
          translationKey: `${fI}${Ip.key}`,
          params: Ip.params
        }
      }
    }

    function sI(pp) {
      return !wI(pp)
    }

    function KI(pp) {
      let {
        seconds: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)();
      return (0, CI.jsx)(TI, {
        title: cp("buildAFactory2Game:recipesCuts", {
          seconds: ip
        }),
        count: 1,
        children: (0, CI.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, CI.jsx)(lI, {
            item: "Maple Sapling",
            amount: 1
          }), (0, CI.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, CI.jsx)(lI, {
            item: "Maple Log",
            amount: 1
          }), (0, CI.jsx)("span", {
            className: "Baf2RecipeName",
            children: cp("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function VI(pp) {
      let {
        fertilised: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)();
      return (0, CI.jsxs)(TI, {
        title: cp("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, CI.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, CI.jsx)(lI, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, CI.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, CI.jsx)(lI, {
            item: "Wheat",
            amount: 1
          }), (0, CI.jsx)(lI, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, CI.jsx)("span", {
            className: "Baf2RecipeName",
            children: cp("buildAFactory2Game:recipeField")
          })]
        }), (0, CI.jsxs)("li", {
          className: Ro()("Baf2Recipe", {
            InUse: ip
          }),
          children: [(0, CI.jsx)(lI, {
            item: "Fertiliser",
            amount: 1
          }), (0, CI.jsx)("span", {
            className: "Baf2RecipeName",
            children: cp("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function pS(pp) {
      let {
        tier: ip,
        seconds: cp
      } = pp;
      const {
        t: Op
      } = (0, Eo.H)(), op = function(pp) {
        return pp >= 5 ? ki : ji
      }(ip);
      return (0, CI.jsx)(TI, {
        title: Op("buildAFactory2Game:recipesBringsUp", {
          seconds: cp
        }),
        count: op.length,
        children: op.map((pp => {
          let {
            item: ip,
            chance: cp
          } = pp;
          return (0, CI.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, CI.jsx)(lI, {
              item: ip,
              amount: 1
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeName",
              children: LI(Op, ip)
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: Op("buildAFactory2Game:recipeChance", {
                percent: XI(cp)
              })
            })]
          }, ip)
        }))
      })
    }

    function iS(pp) {
      let {
        tier: ip,
        seconds: cp,
        noSeeds: Op
      } = pp;
      const {
        t: op
      } = (0, Eo.H)(), Ip = oI(), Sp = HI(ip, Op ? sI : void 0), xp = Op && HI(ip).length > Sp.length, Lp = UI(ip);
      return (0, CI.jsxs)(TI, {
        title: op("buildAFactory2Game:recipesRecycles", {
          seconds: cp
        }),
        count: Sp.length,
        children: [Sp.map((pp => {
          let {
            find: ip,
            chance: cp
          } = pp;
          return (0, CI.jsxs)("li", {
            className: "Baf2Recipe",
            children: [Ip.has(ip.item) && (0, CI.jsx)(NI, {}), (0, CI.jsx)(lI, {
              item: ip.item,
              amount: ip.amount
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeName",
              children: LI(op, ip.item)
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: op("buildAFactory2Game:recipeChance", {
                percent: XI(cp)
              })
            })]
          }, ip.item)
        })), xp && (0, CI.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, CI.jsx)("span", {
            className: "Baf2RecipeName",
            children: op("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), Lp && (0, CI.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, CI.jsx)("span", {
            className: "Baf2RecipeName",
            children: op("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function cS(pp) {
      let {
        tier: ip,
        seconds: cp
      } = pp;
      const {
        t: Op
      } = (0, Eo.H)(), op = Object.entries(AI).filter((pp => {
        let [, {
          item: cp
        }] = pp;
        return rI(nI(cp), ip, gI(cp))
      }));
      return (0, CI.jsx)(TI, {
        title: Op("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: cp
        }),
        count: op.length,
        children: op.map((pp => {
          let [ip, {
            item: cp,
            amount: op
          }] = pp;
          return (0, CI.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, CI.jsx)(lI, {
              item: ip,
              amount: 1
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, CI.jsx)(lI, {
              item: cp,
              amount: op
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeName",
              children: LI(Op, cp)
            })]
          }, ip)
        }))
      })
    }

    function OS(pp) {
      let {
        tier: ip,
        seconds: cp
      } = pp;
      const {
        t: Op
      } = (0, Eo.H)(), op = oI(), Ip = ZI(Object.entries(Yc).filter((pp => {
        let [cp, Op] = pp;
        return rI(FI(cp, Op), ip, gI(Op))
      })), (pp => {
        let [ip, cp] = pp;
        return FI(ip, cp)
      }));
      return (0, CI.jsx)(TI, {
        title: Op("buildAFactory2Game:recipesDigs", {
          seconds: cp
        }),
        count: Ip.length,
        children: Ip.map((pp => {
          let [cp, Ip] = pp;
          const Sp = FI(cp, Ip),
            xp = Sp > ip ? Sp : null,
            Lp = Dc[cp],
            Yp = null === xp && op.has(Ip);
          return (0, CI.jsxs)("li", {
            className: Ro()("Baf2Recipe", {
              Locked: null !== xp,
              Far: EI(xp, ip)
            }),
            children: [Yp && (0, CI.jsx)(NI, {}), (0, CI.jsx)(lI, {
              item: cp,
              amount: 1
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, CI.jsx)(lI, {
              item: Ip,
              amount: 1
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeName",
              children: LI(Op, Ip)
            }), void 0 !== Lp && (0, CI.jsx)("span", {
              className: "Baf2RecipeMore",
              children: Op("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / Lp)
              })
            }), null !== xp && (0, CI.jsx)(JI, {
              tier: xp
            })]
          }, cp)
        }))
      })
    }

    function oS(pp) {
      var ip;
      let {
        def: cp,
        seconds: Op
      } = pp;
      const {
        t: op
      } = (0, Eo.H)();
      return (0, CI.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, CI.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (ip = cp.fuels) && void 0 !== ip ? ip : []).map((pp => (0, CI.jsx)(lI, {
            item: pp,
            amount: 1
          }, pp))), (0, CI.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, CI.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, CI.jsx)(Xo.d, {
              name: "bolt"
            }), op("buildAFactory2Game:recipePower", {
              power: Kp(cp.powerMade),
              seconds: Op
            })]
          })]
        })
      })
    }

    function IS(pp) {
      let {
        def: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)();
      return (0, CI.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, CI.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, CI.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, CI.jsx)(Xo.d, {
              name: "bolt"
            }), cp("buildAFactory2Game:recipeMixer", {
              cryo: uI((0, Vp.z)(ip, ip.cryoMade), "")
            })]
          })
        })
      })
    }

    function SS(pp) {
      let {
        def: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)();
      return (0, CI.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, CI.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, CI.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, CI.jsx)(Xo.d, {
              name: "bolt"
            }), cp("buildAFactory2Game:recipeCondenser", {
              power: uI((0, Vp.z)(ip, ip.powerPerOp), ""),
              water: uI((0, Vp.z)(ip, ip.fluidMade), "")
            })]
          })
        })
      })
    }

    function xS(pp) {
      let {
        kind: ip,
        def: cp,
        input: Op,
        tier: op,
        noSeeds: Ip = !1
      } = pp;
      const Sp = String(cp.opMs / 1e3);
      return Ic(cp) ? (0, CI.jsx)(KI, {
        seconds: Sp
      }) : cp.field ? (0, CI.jsx)(VI, {
        fertilised: null !== Op
      }) : cp.table ? (0, CI.jsx)(pS, {
        tier: op,
        seconds: Sp
      }) : cp.recycles ? (0, CI.jsxs)(CI.Fragment, {
        children: [(0, CI.jsx)(iS, {
          tier: op,
          seconds: Sp,
          noSeeds: Ip
        }), (0, CI.jsx)(cS, {
          tier: op,
          seconds: Sp
        })]
      }) : oc(cp) ? (0, CI.jsx)(OS, {
        tier: op,
        seconds: Sp
      }) : void 0 !== cp.fluidMade ? (0, CI.jsx)(SS, {
        def: cp
      }) : void 0 !== cp.cryoMade ? (0, CI.jsx)(IS, {
        def: cp
      }) : void 0 !== cp.powerMade ? (0, CI.jsx)(oS, {
        def: cp,
        seconds: Sp
      }) : (0, CI.jsx)(LS, {
        kind: ip,
        input: Op,
        tier: op,
        seconds: Sp
      })
    }

    function LS(pp) {
      let {
        kind: ip,
        input: cp,
        tier: Op,
        seconds: op
      } = pp;
      const {
        t: Ip
      } = (0, Eo.H)(), Sp = oI(), xp = ZI(function(pp) {
        const ip = new Map;
        for (const op of pp) {
          var cp, Op;
          const pp = [op.output, op.outputAmount, op.inputAmount, null === (cp = op.bonus) || void 0 === cp ? void 0 : cp.item, null === (Op = op.bonus) || void 0 === Op ? void 0 : Op.chance].join("|"),
            Ip = ip.get(pp);
          Ip ? Ip.inputs.push(op.input) : ip.set(pp, {
            inputs: [op.input],
            inputAmount: op.inputAmount,
            output: op.output,
            outputAmount: op.outputAmount,
            bonus: op.bonus
          })
        }
        return [...ip.values()]
      }(GI(ip, Op).filter(Wc)), (pp => nI(pp.output))).filter((pp => rI(nI(pp.output), Op, gI(pp.output))));
      return (0, CI.jsx)(TI, {
        title: Ip("buildAFactory2Game:recipesEach", {
          seconds: op
        }),
        count: xp.length,
        children: xp.map((pp => {
          const ip = null !== cp && pp.inputs.includes(cp),
            op = pp.inputs.length > 3 ? [ip ? cp : pp.inputs[0]] : pp.inputs,
            xp = nI(pp.output) > Op ? nI(pp.output) : null,
            Lp = null === xp && Sp.has(pp.output);
          return (0, CI.jsxs)("li", {
            className: Ro()("Baf2Recipe", {
              InUse: ip,
              Locked: null !== xp,
              Far: EI(xp, Op)
            }),
            children: [Lp && (0, CI.jsx)(NI, {}), op.map(((ip, cp) => (0, CI.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [cp > 0 && (0, CI.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, CI.jsx)(lI, {
                item: ip,
                amount: pp.inputAmount
              })]
            }, ip))), op.length < pp.inputs.length && (0, CI.jsx)(QI, {
              label: Ip("buildAFactory2Game:recipeMore", {
                count: String(pp.inputs.length - op.length)
              }),
              names: pp.inputs.filter((pp => !op.includes(pp))).map((pp => LI(Ip, pp)))
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, CI.jsx)(lI, {
              item: pp.output,
              amount: pp.outputAmount
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeName",
              children: LI(Ip, pp.output)
            }), pp.bonus && (0, CI.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [Ip("buildAFactory2Game:recipeBonus", {
                percent: XI(pp.bonus.chance)
              }), (0, CI.jsx)(lI, {
                item: pp.bonus.item,
                amount: 1
              })]
            }), null !== xp && (0, CI.jsx)(JI, {
              tier: xp
            })]
          }, `${pp.output}|${pp.inputs[0]}`)
        }))
      })
    }

    function YS(pp) {
      let {
        taught: ip,
        tier: cp
      } = pp;
      const {
        t: Op
      } = (0, Eo.H)(), op = oI(), Ip = ZI(Object.values(Ki), (pp => pp.tier)).filter((pp => rI(pp.tier, cp)));
      return (0, CI.jsx)(TI, {
        title: Op("buildAFactory2Game:benchCanMake"),
        count: Ip.length,
        startOpen: !1,
        children: Ip.map((pp => {
          const Ip = pp.tier > cp,
            Sp = !Ip && op.has(pp.output);
          return (0, CI.jsxs)("li", {
            className: Ro()("Baf2Recipe", {
              InUse: pp.output === ip,
              Locked: Ip,
              Far: EI(Ip ? pp.tier : null, cp)
            }),
            children: [Sp && (0, CI.jsx)(NI, {}), (0, CI.jsx)(lI, {
              item: pp.output,
              amount: pp.outputAmount
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeName",
              children: LI(Op, pp.output)
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), pp.inputs.map((pp => (0, CI.jsx)(lI, {
              item: pp.item,
              amount: pp.amount
            }, pp.item))), Ip && (0, CI.jsx)(JI, {
              tier: pp.tier
            })]
          }, pp.output)
        }))
      })
    }
    var DS, AS, PS, WS, yS;
    const US = Bi.Generator,
      wS = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      vS = 1e3 * (null !== (DS = US.powerMade) && void 0 !== DS ? DS : 0) / US.opMs,
      tS = Math.min(...(null !== (AS = US.fuels) && void 0 !== AS ? AS : []).map((pp => Lc[pp]))) / 1e3,
      HS = Bi["Volt Engine"],
      dS = 1e3 * (null !== (PS = HS.powerMade) && void 0 !== PS ? PS : 0) / HS.opMs,
      eS = Lc[null !== (WS = null === (yS = HS.fuels) || void 0 === yS ? void 0 : yS[0]) && void 0 !== WS ? WS : ""] / 1e3;

    function uS(pp) {
      let {
        item: ip,
        label: cp,
        value: Op,
        note: op,
        dim: Ip
      } = pp;
      return (0, CI.jsxs)("li", {
        className: Ro()("Baf2PowerRow", {
          Dim: Ip
        }),
        children: [(0, CI.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, CI.jsx)(Qo.d, {
            itemName: ip,
            amount: 0
          })
        }), (0, CI.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, CI.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: cp
          }), op && (0, CI.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: op
          })]
        }), (0, CI.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: Op
        })]
      })
    }

    function jS(pp, ip, cp, Op) {
      var op;
      const Ip = void 0 === Op ? Bi[pp] : function(pp, ip) {
          if (null === ip) return pp;
          let cp = rp.get(ip);
          return cp || (cp = {
            ...pp,
            powerPerOp: Gp(pp, ip),
            farmMob: ip
          }, rp.set(ip, cp)), cp
        }(Bi[pp], Op),
        Sp = ip && Ip.couplable ? gi(Ip, cp) : Ip;
      return 1e3 * (null !== (op = Sp.powerPerOp) && void 0 !== op ? op : 0) / Sp.opMs
    }

    function kS(pp) {
      var ip, cp, Op, op, Ip, Sp, xp, Lp;
      let {
        message: Yp
      } = pp;
      const {
        t: Dp
      } = (0, Eo.H)(), Ap = (pp, ip) => Dp("buildAFactory2Game:powerPerSecond", {
        rate: uI(pp, ip)
      }), [Pp, Wp] = Yp.baf2PowerGenerators, yp = Yp.baf2PowerGeneratorFuel, Up = Yp.baf2PowerSunPanels, wp = null !== (ip = Yp.baf2PowerSunShare) && void 0 !== ip ? ip : 1, vp = Yp.baf2PowerVaults, tp = Yp.baf2PowerUsers, [Hp, dp] = null !== (cp = Yp.baf2PowerEngines) && void 0 !== cp ? cp : [0, 0], ep = null !== (Op = Yp.baf2PowerEngineCells) && void 0 !== Op ? Op : 0, jp = null !== (op = Yp.baf2PowerPads) && void 0 !== op ? op : 0, kp = null !== (Ip = Yp.baf2PowerCharge) && void 0 !== Ip ? Ip : 0, [mp, Rp] = null !== (Sp = Yp.baf2PowerReactors) && void 0 !== Sp ? Sp : [0, 0], [qp, Mp] = null !== (xp = Yp.baf2PowerBatteries) && void 0 !== xp ? xp : [0, 0];
      let Cp = Dp("buildAFactory2Game:powerEngineCells", {
        amount: String(ep)
      });
      ep > 0 && dp > 0 && (Cp = Dp("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(ep),
        time: mI(Dp, ep * eS / dp)
      }));
      let Ep = Dp("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(yp)
      });
      yp > 0 && Wp > 0 && (Ep = Dp("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(yp),
        time: mI(Dp, yp * tS / Wp)
      }));
      const Xp = Pp + Hp + Up + mp;
      return (0, CI.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, CI.jsxs)("section", {
          children: [(0, CI.jsxs)("h3", {
            children: [Dp("buildAFactory2Game:powerMaking"), (0, CI.jsx)("span", {
              children: Ap(Yp.baf2PowerMadePerS, "+")
            })]
          }), (0, CI.jsxs)("ul", {
            children: [0 === Xp && (0, CI.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Dp("buildAFactory2Game:powerNoMakers")
            }), Pp > 0 && (0, CI.jsx)(uS, {
              item: "Generator",
              label: `${LI(Dp,"Generator")} \xd7${Pp}`,
              note: `${Dp("buildAFactory2Game:powerRunning",{amount:String(Wp)})} \xb7 ${Ep}`,
              value: Ap(Wp * vS, "+"),
              dim: 0 === Wp
            }), Hp > 0 && (0, CI.jsx)(uS, {
              item: "Volt Engine",
              label: `${LI(Dp,"Volt Engine")} \xd7${Hp}`,
              note: `${Dp("buildAFactory2Game:powerRunning",{amount:String(dp)})} \xb7 ${Cp}`,
              value: Ap(dp * dS, "+"),
              dim: 0 === dp
            }), Up > 0 && (0, CI.jsx)(uS, {
              item: "Solar Panel",
              label: `${LI(Dp,"Solar Panel")} \xd7${Up}`,
              note: Dp(wp < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: Ap(4 * Up * wp, "+")
            }), mp > 0 && (0, CI.jsx)(uS, {
              item: "Reactor Frame",
              label: `${Dp("buildAFactory2Game:powerReactors")} \xd7${mp}`,
              note: Dp("buildAFactory2Game:powerRunning", {
                amount: String(Rp)
              }),
              value: Ap(null !== (Lp = Yp.baf2PowerReactorPerS) && void 0 !== Lp ? Lp : 0, "+"),
              dim: 0 === Rp
            })]
          })]
        }), (0, CI.jsxs)("section", {
          children: [(0, CI.jsxs)("h3", {
            children: [Dp("buildAFactory2Game:powerStorage"), (0, CI.jsx)("span", {
              children: Kp(Yp.baf2PowerCap)
            })]
          }), (vp > 0 || qp > 0) && (0, CI.jsxs)("ul", {
            children: [vp > 0 && (0, CI.jsx)(uS, {
              item: "Charge Vault",
              label: `${LI(Dp,"Charge Vault")} \xd7${vp}`,
              value: `+${Kp(8e3*vp)}`
            }), qp > 0 && (0, CI.jsx)(uS, {
              item: "Battery Cell",
              label: `${Dp("buildAFactory2Game:powerBatteries")} \xd7${qp}`,
              value: `+${Kp(Mp)}`
            })]
          })]
        }), (0, CI.jsxs)("section", {
          children: [(0, CI.jsxs)("h3", {
            children: [Dp("buildAFactory2Game:powerUsing"), (0, CI.jsx)("span", {
              children: Ap(Yp.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, CI.jsxs)("ul", {
            children: [0 === tp.length && 0 === jp && 0 === kp && (0, CI.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: Dp("buildAFactory2Game:powerNoUsers")
            }), tp.map((pp => {
              let [ip, cp, Op, op, Ip = 1, Sp] = pp, xp = cp ? Dp(wS[Ip - 1], {
                name: LI(Dp, ip)
              }) : LI(Dp, ip);
              return void 0 !== Sp && (xp = Dp("buildAFactory2Game:powerFarmName", {
                name: xp,
                mob: Dp(np(Sp))
              })), (0, CI.jsx)(uS, {
                item: ip,
                label: `${xp} \xd7${Op}`,
                note: Dp("buildAFactory2Game:powerRunning", {
                  amount: String(op)
                }),
                value: op > 0 ? Ap(op * jS(ip, cp, Ip, Sp), "\u2212") : Dp("buildAFactory2Game:powerIdle"),
                dim: 0 === op
              }, `${ip}|${cp}|${Ip}|${Sp}`)
            })), jp > 0 && (0, CI.jsx)(uS, {
              item: "Charging Pad",
              label: `${LI(Dp,"Charging Pad")} \xd7${jp}`,
              value: Dp("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), kp > 0 && (0, CI.jsx)(uS, {
              item: "Homestead Core",
              label: Dp("buildAFactory2Game:powerCharge"),
              value: Ap(kp, "\u2212")
            }), Yp.baf2PowerStarved > 0 && (0, CI.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, CI.jsx)(Xo.d, {
                name: "triangle-exclamation"
              }), Dp("buildAFactory2Game:powerStarved", {
                amount: String(Yp.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var mS = cp(4621),
      RS = cp(1480);
    class qS {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(pp) {
        this.message = pp;
        for (const ip of this.listeners) ip()
      }
      get() {
        return this.message
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
    }
    class MS extends qS {}

    function CS(pp, ip) {
      const cp = () => {
          const cp = pp.get();
          if (!cp || !ip) return cp;
          const [Op, op, Ip] = cp.baf2PowerAt;
          return Op === ip[0] && op === ip[1] && Ip === ip[2] ? cp : null
        },
        [op, Ip] = (0, Op.useState)(cp);
      return (0, Op.useEffect)((() => (Ip(cp()), pp.subscribe((() => {
        Ip(cp())
      })))), [pp, ...null !== ip && void 0 !== ip ? ip : []]), op
    }

    function ES(pp) {
      return {
        stored: pp.baf2PowerStored,
        cap: pp.baf2PowerCap,
        madePerS: pp.baf2PowerMadePerS,
        usedPerS: pp.baf2PowerUsedPerS
      }
    }

    function XS(pp) {
      let {
        stored: ip,
        cap: cp
      } = pp;
      return (0, CI.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, CI.jsx)("div", {
          style: {
            width: `${Math.min(100,100*ip/Math.max(1,cp))}%`
          }
        })
      })
    }

    function lS(pp) {
      let {
        figures: ip,
        labelled: cp = !1
      } = pp;
      const {
        t: Op
      } = (0, Eo.H)(), op = ip.madePerS - ip.usedPerS, {
        text: Ip,
        draining: Sp
      } = function(pp, ip) {
        let {
          stored: cp,
          cap: Op,
          madePerS: op,
          usedPerS: Ip
        } = ip;
        const Sp = op - Ip;
        return cp >= Op ? {
          text: pp("buildAFactory2Game:powerFull"),
          draining: !1
        } : Sp > .05 ? {
          text: pp("buildAFactory2Game:powerFullIn", {
            time: mI(pp, (Op - cp) / Sp)
          }),
          draining: !1
        } : Sp < -.05 ? {
          text: pp("buildAFactory2Game:powerEmptyIn", {
            time: mI(pp, cp / -Sp)
          }),
          draining: !0
        } : {
          text: pp("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(Op, ip);
      return (0, CI.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, CI.jsx)(XS, {
          stored: ip.stored,
          cap: ip.cap
        }), (0, CI.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, CI.jsx)("span", {
            children: Op(cp ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: Kp(ip.stored),
              cap: Kp(ip.cap)
            })
          }), (0, CI.jsxs)("span", {
            className: Ro()("Baf2PowerNet", {
              Draining: Sp
            }),
            children: [Op("buildAFactory2Game:powerPerSecond", {
              rate: uI(Math.abs(op), op < 0 ? "\u2212" : "+")
            }), " \xb7 ", Ip]
          })]
        })]
      })
    }

    function QS(pp) {
      let {
        stored: ip,
        cap: cp,
        rates: Op
      } = pp;
      const {
        t: op
      } = (0, Eo.H)();
      return Op ? (0, CI.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, CI.jsx)(lS, {
          figures: {
            stored: ip,
            cap: cp,
            madePerS: Op[0],
            usedPerS: Op[1]
          },
          labelled: !0
        })
      }) : (0, CI.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, CI.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, CI.jsx)(XS, {
            stored: ip,
            cap: cp
          }), (0, CI.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, CI.jsx)("span", {
              children: op("buildAFactory2Game:powerStoredLabelled", {
                stored: Kp(ip),
                cap: Kp(cp)
              })
            })
          })]
        })
      })
    }

    function JS(pp) {
      let {
        store: ip,
        close: cp
      } = pp;
      const {
        t: Op
      } = (0, Eo.H)(), op = CS(ip);
      return (0, CI.jsx)(mS.c, {
        close: cp,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, CI.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, CI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CI.jsxs)("div", {
              children: [(0, CI.jsx)("h2", {
                id: "baf2PowerTitle",
                children: Op("buildAFactory2Game:powerTitle")
              }), (0, CI.jsx)("p", {
                children: Op("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, CI.jsx)(RS.l, {
              onClick: cp
            })]
          }), op && (0, CI.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, CI.jsx)(lS, {
              figures: ES(op)
            }), (0, CI.jsx)(kS, {
              message: op
            })]
          })]
        })
      })
    }

    function BS(pp) {
      var ip;
      let {
        kind: cp,
        def: op,
        WI: Ip,
        power: Sp,
        stored: xp,
        cap: Lp
      } = pp;
      const {
        t: Yp
      } = (0, Eo.H)(), Dp = CS(Sp, Ip), [Ap, Pp] = (0, Op.useState)(!1);
      return (0, CI.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, CI.jsx)(xS, {
          kind: cp,
          def: op,
          input: null,
          tier: null !== (ip = null === Dp || void 0 === Dp ? void 0 : Dp.baf2PowerTier) && void 0 !== ip ? ip : 1
        }), (0, CI.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: Yp("buildAFactory2Game:powerTitle")
        }), Dp && (0, CI.jsx)(lS, {
          figures: ES(Dp)
        }), !Dp && (0, CI.jsx)(QS, {
          stored: xp,
          cap: Lp,
          rates: null
        }), Dp && (0, CI.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            Pp(!Ap)
          },
          "aria-expanded": Ap,
          children: Yp(Ap ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), Dp && Ap && (0, CI.jsx)(kS, {
          message: Dp
        })]
      })
    }
    const NS = 2500,
      TS = 17500,
      fS = `${ep} `;
    const bS = ["plan", "throttle"];

    function hS(pp) {
      if (pp.startsWith(`${Mi} `)) return pp.slice(0, pp.lastIndexOf(" "));
      const ip = pp.split(" ");
      return ip[0] === Pi && bS.includes(ip[4]) ? ip.slice(0, 5).join(" ") : null
    }
    class aS {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = pp, this.now = ip, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.YIp = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = ip()
      }
      enqueue(pp) {
        this.queue(pp, this.nextTicket());
        const ip = this.YIp + this.pending.length;
        return this.flush(), ip
      }
      track(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cp = this.nextTicket();
        if (!ip.urgent) return this.queue(pp, cp), this.flush(), cp;
        const {
          supersedes: Op
        } = ip;
        for (let Ip = this.pending.length - 1; Ip >= this.urgent; Ip--) {
          const ip = this.pending[Ip];
          (ip.command === pp || null !== Op && void 0 !== Op && Op(ip.command)) && (this.pending.splice(Ip, 1), this.markLeft(ip.tickets))
        }
        const op = this.pending.findIndex((ip => {
          let {
            command: cp
          } = ip;
          return cp === pp
        }));
        return -1 !== op ? this.pending[op].tickets.push(cp) : (this.pending.splice(this.urgent, 0, {
          command: pp,
          tickets: [cp]
        }), this.urgent += 1), this.flush(), cp
      }
      leftAt(pp) {
        const ip = this.leftTimes.get(pp);
        return void 0 !== ip ? ip : this.pending.some((ip => {
          let {
            tickets: cp
          } = ip;
          return cp.includes(pp)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let pp = !0;
        return () => {
          pp && (pp = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(pp) {
        var ip;
        return (null === (ip = this.pending.at(-1)) || void 0 === ip ? void 0 : ip.command) === pp
      }
      sent() {
        return this.YIp
      }
      clear() {
        for (const {
            tickets: pp
          }
          of this.pending) this.markLeft(pp);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(pp) {
        const ip = this.now();
        for (const cp of pp) this.leftTimes.set(cp, ip);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(pp, ip) {
        const cp = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === cp || void 0 === cp ? void 0 : cp.command) === pp) return void(! function(pp) {
          return pp === jp || pp.startsWith(`${dp} `) || pp.startsWith(`${bp} `)
        }(pp) ? cp.tickets.push(ip) : (this.pending.pop(), this.markLeft([...cp.tickets, ip])));
        const Op = void 0 === cp ? null : Ai(cp.command, pp);
        if (null !== Op && void 0 !== cp) return cp.command = Op, void cp.tickets.push(ip);
        const op = hS(pp);
        if (null !== op && void 0 !== cp && hS(cp.command) === op) return cp.command = pp, void cp.tickets.push(ip);
        if (null !== cp && void 0 !== cp && cp.command.startsWith(fS) && pp.startsWith(fS)) {
          const Op = pp.slice(fS.length);
          if (cp.command.slice(fS.length).split(",").includes(Op)) return void cp.tickets.push(ip);
          const op = `${cp.command},${Op}`;
          if (op.length <= 119) return cp.command = op, void cp.tickets.push(ip)
        }
        this.pending.push({
          command: pp,
          tickets: [ip]
        })
      }
      flush() {
        const pp = this.now();
        for (this.tokens = Math.min(5, this.tokens + (pp - this.refilledAt) / NS), this.refilledAt = pp; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.YIp += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: pp,
            tickets: ip
          } = this.pending.shift();
          this.markLeft(ip), this.send(pp)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * NS)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class nS {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new aS(pp, ip)
      }
      send(pp) {
        return this.queue.enqueue(pp)
      }
      sent() {
        return this.queue.sent()
      }
      track(pp, ip) {
        return this.queue.track(pp, ip)
      }
      leftAt(pp) {
        return this.queue.leftAt(pp)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(pp) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = ip, this.send(pp), this.islandEdits.count
      }
      syncIslandEdits(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: cp
        } = this, Op = ip - cp.lastAtMs < TS;
        cp.count = Op ? Math.max(cp.count, pp) : pp
      }
      clear() {
        this.queue.clear()
      }
    }
    const FS = (0, Op.createContext)(null);

    function gS() {
      const pp = (0, Op.useContext)(FS);
      if (!pp) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return pp
    }

    function GS(pp, ip) {
      return null !== ip && void 0 !== ip ? ip : 1 === pp
    }

    function rS(pp, ip) {
      return pp.every((pp => {
        var cp;
        let [Op, , op] = pp;
        return !GS(op, null === (cp = ip.get(Op)) || void 0 === cp ? void 0 : cp.aW)
      }))
    }

    function ZS(pp, ip, cp) {
      if (0 === pp.size) return pp;
      const Op = new Map(pp);
      for (const [op, Ip] of pp) {
        const pp = ip.find((pp => {
          let [ip] = pp;
          return ip === op
        }));
        (!pp || Ip.aW === (1 === pp[2]) || Ip.atMs < cp) && Op.delete(op)
      }
      return Op
    }

    function zS(pp) {
      var ip;
      let {
        WI: cp,
        input: op,
        drops: Ip,
        seconds: Sp
      } = pp;
      const {
        t: xp
      } = (0, Eo.H)(), Lp = gS(), [Yp, Dp] = (0, Op.useState)(new Map);
      (0, Op.useEffect)((() => {
        Ip && Dp((pp => ZS(pp, Ip, Date.now() - TS)))
      }), [Ip]), (0, Op.useEffect)((() => {
        const pp = function(pp, ip) {
          let cp = null;
          for (const {
              atMs: Op
            }
            of pp.values()) cp = null === cp ? Op : Math.min(cp, Op);
          return null === cp ? null : cp + ip
        }(Yp, TS);
        if (null === pp || !Ip) return;
        const ip = setTimeout((() => {
          Dp((pp => ZS(pp, Ip, Date.now() - TS)))
        }), Math.max(0, pp - Date.now()) + 1);
        return () => {
          clearTimeout(ip)
        }
      }), [Yp, Ip]);
      const Ap = Fp(op),
        Pp = null !== Ap && null !== Ip && rS(Ip, Yp),
        Wp = function(pp, ip, cp) {
          return null === pp || null === ip || rS(ip, cp) ? 0 : fp[Np[pp]]
        }(Ap, Ip, Yp);
      return (0, CI.jsxs)(TI, {
        title: xp("buildAFactory2Game:farmDropsTitle", {
          seconds: Sp
        }),
        count: null !== (ip = null === Ip || void 0 === Ip ? void 0 : Ip.length) && void 0 !== ip ? ip : 0,
        children: [Wp > 0 && (0, CI.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: xp("buildAFactory2Game:farmDropsPower", {
            power: String(Wp)
          })
        }), (null === Ap || !Ip) && (0, CI.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: xp("buildAFactory2Game:farmDropsEmpty")
        }), Pp && (0, CI.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: xp("buildAFactory2Game:farmDropsAllVoided")
        }), null !== Ap && (null === Ip || void 0 === Ip ? void 0 : Ip.map((pp => {
          var ip;
          let [Op, op, Ip] = pp;
          const Sp = op < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            Ap = GS(Ip, null === (ip = Yp.get(Op)) || void 0 === ip ? void 0 : ip.aW);
          return (0, CI.jsxs)("li", {
            className: Ro()("Baf2Recipe Baf2FarmDrop", {
              Voided: !Ap
            }),
            children: [(0, CI.jsx)(lI, {
              item: Op,
              amount: 1
            }), (0, CI.jsx)("span", {
              className: "Baf2RecipeName",
              children: LI(xp, Op)
            }), (0, CI.jsx)("span", {
              className: "Baf2FarmRate",
              children: xp(Sp, {
                amount: String(op)
              })
            }), (0, CI.jsx)("button", {
              type: "button",
              className: Ro()("Baf2FarmToggle SmallTextBold", {
                Kept: Ap
              }),
              "aria-pressed": Ap,
              onClick: () => {
                Dp(new Map(Yp).set(Op, {
                  aW: !Ap,
                  atMs: Date.now()
                })), Lp.send(function(pp, ip, cp, Op) {
                  return `${bp} ${pp} ${ip} ${cp} ${Op}`
                }(cp[0], cp[1], cp[2], Op))
              },
              children: xp(Ap ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, Op)
        })))]
      })
    }
    var sS;
    const KS = String(null !== (sS = Bi.Synthesizer.waterPerOp) && void 0 !== sS ? sS : 0);

    function VS(pp) {
      let {
        WI: ip,
        taught: cp
      } = pp;
      const {
        t: op
      } = (0, Eo.H)(), Ip = gS(), [Sp, xp] = (0, Op.useState)(null);
      (0, Op.useEffect)((() => {
        null !== Sp && cp === Sp && xp(null)
      }), [Sp, cp]);
      const Lp = null !== Sp && void 0 !== Sp ? Sp : cp;
      let Yp = op("buildAFactory2Game:synthPick");
      return null !== Lp && (Yp = op("buildAFactory2Game:synthGrows", {
        name: LI(op, Lp),
        input: LI(op, mi),
        water: KS
      })), (0, CI.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, CI.jsx)("div", {
          className: Ro()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === Lp
          }),
          children: Yp
        }), (0, CI.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: Ri.map(((pp, cp) => {
            const Op = LI(op, pp),
              Sp = pp === Lp;
            return (0, CI.jsx)("li", {
              children: (0, CI.jsx)("button", {
                type: "button",
                className: Ro()("Baf2SynthTile", {
                  Selected: Sp
                }),
                title: Op,
                "aria-label": Op,
                "aria-pressed": Sp,
                onClick: () => {
                  Sp || (xp(pp), Ip.send(`${Mi} ${ip[0]} ${ip[1]} ${ip[2]} ${cp}`))
                },
                children: (0, CI.jsx)(Qo.d, {
                  itemName: pp,
                  amount: 0
                })
              })
            }, pp)
          }))
        })]
      })
    }
    const px = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function ix(pp) {
      let {
        kind: ip,
        tier: cp,
        coupled: Op,
        level: op,
        slot: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Eo.H)(), Lp = sp(Ti);
      if (!Op && null !== cp && cp < Lp) return (0, CI.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, CI.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, CI.jsx)(Xo.d, {
            name: "lock"
          })
        }), (0, CI.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: Sp("buildAFactory2Game:upgradeLocked")
        }), (0, CI.jsx)("span", {
          className: "Baf2TierTag",
          children: Sp("buildAFactory2Game:tierTag", {
            tier: String(Lp)
          })
        })]
      });
      const Yp = function(pp, ip) {
          if (xp() && "Crusher" !== pp && null !== ip) {
            if (cx(bi, ip)) return {
              item: bi,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (cx(fi, ip)) return {
              item: fi,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Ti,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(ip, cp),
        Dp = Sp(Op ? px[op - 1] : Yp.emptyKey),
        Ap = null !== cp ? function(pp, ip, cp, Op) {
          if (!xp() || !cp || "Crusher" === pp || ip < 10) return null;
          const op = sp(bi);
          if (Op < 3 && op > 1 && (2 === Op || ip >= op)) return {
            tier: op,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const Ip = sp(fi);
          if (1 === Op && Ip > 1) return {
            tier: Ip,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(ip, cp, Op, op) : null;
      return (0, CI.jsxs)("div", {
        className: Ro()("Baf2UpgradeSocket", {
          Fitted: Op
        }),
        children: [(0, CI.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [Op && Ip, !Op && (0, CI.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, CI.jsx)(Qo.d, {
              itemName: Yp.item,
              amount: 0
            })
          })]
        }), (0, CI.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, CI.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: Sp("buildAFactory2Game:upgradeTitle")
          }), (0, CI.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Dp
          }), Op && op >= 2 && "Crusher" === ip && (0, CI.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: Sp("buildAFactory2Game:couplerCrusherHint")
          }), Ap && null !== cp && cp < Ap.tier && (0, CI.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, CI.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, CI.jsx)(Xo.d, {
                name: "lock"
              })
            }), Sp(Ap.lockedKey), (0, CI.jsx)("span", {
              className: "Baf2TierTag",
              children: Sp("buildAFactory2Game:tierTag", {
                tier: String(Ap.tier)
              })
            })]
          }), Ap && null !== cp && cp >= Ap.tier && (0, CI.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: Sp(Ap.nextKey)
          })]
        })]
      })
    }

    function cx(pp, ip) {
      const cp = sp(pp);
      return cp > 1 && ip >= cp
    }
    var Ox = cp(37246);
    const ox = (0, Vp.z)(Bi.Condenser, Bi.Condenser.fluidMade),
      Ix = .05;
    class Sx extends qS {}

    function xx(pp) {
      return uI(pp, "")
    }

    function Lx(pp, ip, cp) {
      return pp(ip ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: cp
      })
    }

    function Yx(pp, ip, cp, Op) {
      return cp <= Ix && Op <= Ix ? null : Op <= Ix || cp <= Ix ? Lx(pp, ip, Op <= Ix ? uI(cp, "+") : uI(Op, "\u2212")) : pp(ip ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: xx(cp),
        used: xx(Op)
      })
    }

    function Dx(pp, ip) {
      return Math.min(100, 100 * pp / Math.max(1, ip))
    }

    function Ax(pp) {
      let {
        stored: ip,
        cap: cp,
        netPerS: Op,
        rates: op,
        cryo: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Eo.H)(), xp = function(pp, ip, cp, Op) {
        return cp <= 0 ? pp("buildAFactory2Game:waterNoStorage") : ip >= cp ? pp("buildAFactory2Game:powerFull") : Op > Ix ? pp("buildAFactory2Game:powerFullIn", {
          time: mI(pp, (cp - ip) / Op)
        }) : Op < -.05 ? ip <= 0 ? pp("buildAFactory2Game:waterEmpty") : pp("buildAFactory2Game:powerEmptyIn", {
          time: mI(pp, ip / -Op)
        }) : pp("buildAFactory2Game:powerSteady")
      }(Sp, ip, cp, Op), Lp = cp > 0 && ip < cp && Math.abs(Op) <= Ix, Yp = Sp(Ip ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), Dp = null !== op ? `${op} \xb7 ${xp}` : Lp ? Yp : `${Yp} \xb7 ${xp}`;
      return (0, CI.jsxs)(CI.Fragment, {
        children: [(0, CI.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, CI.jsx)("div", {
            style: {
              width: `${Dx(ip,cp)}%`
            }
          })
        }), (0, CI.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, CI.jsx)("span", {
            children: cp > 0 && Sp("buildAFactory2Game:powerStored", {
              stored: (0, Vp.J)(ip),
              cap: (0, Vp.J)(cp)
            })
          }), (0, CI.jsx)("span", {
            className: Ro()("Baf2WaterNet", {
              Draining: Op < -.05
            }),
            children: Dp
          })]
        })]
      })
    }

    function Px(pp) {
      let {
        water: ip,
        at: cp,
        side: Op = null
      } = pp;
      const {
        t: op
      } = (0, Eo.H)(), Ip = gS(), [Sp, xp, Lp] = ip;
      return (0, CI.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, CI.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, CI.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: op(null === Op ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${Op}`)
          }), (0, CI.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              Ip.send(`${Vp.x} ${cp[0]} ${cp[1]} ${cp[2]}${"cryoOut"===Op?" cryo":""}`)
            },
            children: op("buildAFactory2Game:waterDetails")
          })]
        }), (0, CI.jsx)(Ax, {
          stored: Sp,
          cap: xp,
          netPerS: Lp,
          rates: Lx(op, "cryoOut" === Op, uI(Math.abs(Lp), Lp < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === Op
        })]
      })
    }

    function Wx(pp, ip) {
      var cp, Op, op;
      const Ip = !0 === ip.baf2WaterCryo,
        Sp = null !== (cp = null === (Op = ip.baf2WaterMakers.find((pp => pp[0] === (Ip ? Vp.b : "Condenser")))) || void 0 === Op ? void 0 : Op[1]) && void 0 !== cp ? cp : 0,
        xp = [],
        Lp = (ip, cp, Op) => {
          ip > 0 && xp.push(pp(1 === ip ? cp : Op, {
            count: String(ip)
          }))
        };
      return Ip ? Lp(Sp, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : Lp(Sp, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), Lp(null !== (op = ip.baf2WaterPipes) && void 0 !== op ? op : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), Lp(ip.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), xp.join(" \xb7 ")
    }

    function yx(pp, ip) {
      if (!0 === ip.baf2WaterCryo) return function(pp, ip) {
        const cp = Bi[Vp.b];
        switch (ip.baf2WaterThis) {
          case "pipe":
            return {
              text: pp("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: pp("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: pp("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: pp("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: pp("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: pp("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: pp("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var Op;
            const [op, Ip] = null !== (Op = ip.baf2WaterThisRates) && void 0 !== Op ? Op : [(0, Vp.z)(cp, cp.cryoMade), (0, Vp.z)(cp, cp.powerPerOp)];
            return !0 === ip.baf2WaterDriven ? {
              text: pp("buildAFactory2Game:cryoThisMixerDriven", {
                rate: xx(op)
              }),
              bad: !1
            } : {
              text: pp("buildAFactory2Game:cryoThisMixer", {
                rate: xx(op),
                power: xx(Ip)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: pp("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(pp, ip);
      const cp = !0 === ip.baf2WaterDriven,
        Op = Bi.Condenser;
      switch (ip.baf2WaterThis) {
        case "pipe":
          return {
            text: pp("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: pp("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: pp("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: pp("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: pp("buildAFactory2Game:waterThisTank", {
              tank: (0, Vp.J)(Vp.o),
              cap: (0, Vp.J)(ip.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var op;
          const [Ip, Sp] = null !== (op = ip.baf2WaterThisRates) && void 0 !== op ? op : [ox, (0, Vp.z)(Op, Op.powerPerOp)];
          return cp ? {
            text: pp("buildAFactory2Game:waterThisCondenserDriven", {
              rate: xx(Ip)
            }),
            bad: !1
          } : {
            text: pp("buildAFactory2Game:waterThisCondenser", {
              rate: xx(Ip),
              power: xx(Sp)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: pp("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function Ux(pp, ip) {
      const cp = ip.baf2WaterMakers.some((pp => !0 === pp[5]));
      if (!0 === ip.baf2WaterCryo) {
        const Op = ip.baf2WaterUsedPerS - ip.baf2WaterMadePerS,
          op = cp || Op <= Ix ? 0 : (0, Vp.y)(Op);
        return 0 === op ? null : op > 1 ? pp("buildAFactory2Game:cryoNextMixers", {
          mixers: String(op)
        }) : pp("buildAFactory2Game:cryoNextOne")
      }
      const Op = cp ? null : function(pp, ip) {
        const cp = ip - pp;
        return cp <= Ix ? null : Math.ceil(cp / ox)
      }(ip.baf2WaterMadePerS, ip.baf2WaterUsedPerS);
      return null === Op ? null : Op > 1 ? pp("buildAFactory2Game:waterNextCondensers", {
        condensers: String(Op)
      }) : pp("buildAFactory2Game:waterNextOne")
    }

    function wx(pp) {
      let {
        item: ip,
        label: cp,
        note: Op,
        value: op,
        dim: Ip,
        bad: Sp
      } = pp;
      return (0, CI.jsxs)("li", {
        className: Ro()("Baf2WaterRow", {
          Dim: Ip,
          Bad: Sp
        }),
        children: [(0, CI.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, CI.jsx)(Qo.d, {
            itemName: ip,
            amount: 0
          })
        }), (0, CI.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, CI.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: cp
          }), Op && (0, CI.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: Op
          })]
        }), (0, CI.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: op
        })]
      })
    }

    function vx(pp) {
      return Ox.m[pp] ? pp : "Reactor Port"
    }

    function tx(pp) {
      let {
        message: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)(), Op = !0 === ip.baf2WaterCryo, op = (pp, ip) => Lx(cp, Op, uI(pp, ip));
      return (0, CI.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, CI.jsxs)("section", {
          children: [(0, CI.jsxs)("h3", {
            children: [cp("buildAFactory2Game:waterMakes"), (0, CI.jsx)("span", {
              children: op(ip.baf2WaterMadePerS, "+")
            })]
          }), (0, CI.jsxs)("ul", {
            children: [0 === ip.baf2WaterMakers.length && (0, CI.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: cp(Op ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), ip.baf2WaterMakers.map((pp => {
              let [ip, Op, Ip, Sp, xp, Lp] = pp;
              const Yp = cp("buildAFactory2Game:powerRunning", {
                amount: String(Ip)
              });
              let Dp = xp > 0 ? cp("buildAFactory2Game:waterMakerPower", {
                running: Yp,
                power: xx(xp)
              }) : Yp;
              return Lp && (Dp = cp(0 === Ip && Sp <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, CI.jsx)(wx, {
                item: ip,
                label: `${LI(cp,ip)} \xd7${Op}`,
                note: Dp,
                value: Ip > 0 || Lp && Sp > 0 ? op(Sp, "+") : cp("buildAFactory2Game:powerIdle"),
                dim: 0 === Ip && !Lp,
                bad: Lp
              }, ip)
            }))]
          })]
        }), (0, CI.jsxs)("section", {
          children: [(0, CI.jsxs)("h3", {
            children: [cp("buildAFactory2Game:waterUses"), (0, CI.jsx)("span", {
              children: op(ip.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, CI.jsxs)("ul", {
            children: [0 === ip.baf2WaterUsers.length && (0, CI.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: cp(Op ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), ip.baf2WaterUsers.map((pp => {
              let [ip, Op, Ip, Sp] = pp;
              const xp = Ox.m[ip] ? LI(cp, ip) : ip;
              return (0, CI.jsx)(wx, {
                item: vx(ip),
                label: Op > 1 ? `${xp} \xd7${Op}` : xp,
                note: Sp ? cp("buildAFactory2Game:waterPortFirst") : void 0,
                value: Ip > 0 ? op(Ip, "\u2212") : cp("buildAFactory2Game:powerIdle"),
                dim: 0 === Ip
              }, ip)
            }))]
          })]
        })]
      })
    }

    function Hx(pp) {
      var ip, cp, op, Ip, Sp;
      let {
        store: xp,
        close: Lp
      } = pp;
      const {
        t: Yp
      } = (0, Eo.H)(), Dp = function(pp) {
        const [ip, cp] = (0, Op.useState)((() => pp.get()));
        return (0, Op.useEffect)((() => (cp(pp.get()), pp.subscribe((() => {
          cp(pp.get())
        })))), [pp]), ip
      }(xp), Ap = null !== (ip = null === Dp || void 0 === Dp ? void 0 : Dp.baf2WaterStored) && void 0 !== ip ? ip : 0, Pp = null !== (cp = null === Dp || void 0 === Dp ? void 0 : Dp.baf2WaterCap) && void 0 !== cp ? cp : 0, Wp = null !== (op = null === Dp || void 0 === Dp ? void 0 : Dp.baf2WaterMadePerS) && void 0 !== op ? op : 0, yp = null !== (Ip = null === Dp || void 0 === Dp ? void 0 : Dp.baf2WaterUsedPerS) && void 0 !== Ip ? Ip : 0, Up = null !== (Sp = null === Dp || void 0 === Dp ? void 0 : Dp.baf2WaterNetPerS) && void 0 !== Sp ? Sp : Wp - yp, wp = Dp && yx(Yp, Dp), vp = Dp && Ux(Yp, Dp), tp = !0 === (null === Dp || void 0 === Dp ? void 0 : Dp.baf2WaterCryo);
      return (0, CI.jsx)(mS.c, {
        close: Lp,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, CI.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, CI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CI.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== Dp && Pp <= 0 ? (0, CI.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, CI.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, CI.jsx)(Qo.d, {
                  itemName: tp ? vc.d : Vp.i,
                  amount: 0
                })
              }), (0, CI.jsxs)("div", {
                children: [(0, CI.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: Yp(tp ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), Dp && (0, CI.jsx)("p", {
                  children: Wx(Yp, Dp)
                })]
              })]
            }), (0, CI.jsx)(RS.l, {
              onClick: Lp
            })]
          }), Dp && wp && (0, CI.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, CI.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, CI.jsx)(Ax, {
                stored: Ap,
                cap: Pp,
                netPerS: Up,
                cryo: tp,
                rates: Yx(Yp, tp, Wp, yp)
              })
            }), (0, CI.jsx)("div", {
              className: Ro()("Baf2WaterThis", {
                Bad: wp.bad
              }),
              children: wp.text
            }), Dp.baf2WaterDriven && (0, CI.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, CI.jsx)(Xo.d, {
                name: "bolt"
              }), Yp(tp ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), vp && (0, CI.jsx)("p", {
              className: "Baf2WaterNext",
              children: vp
            }), (0, CI.jsx)(tx, {
              message: Dp
            })]
          })]
        })
      })
    }
    class dx {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(pp, ip) {
        const cp = this.get(pp);
        cp && null === ip.opLeftMs && null === ip.fuelLeftMs && ip.status === cp.status ? ip = {
          ...ip,
          opLeftMs: cp.opLeftMs,
          fuelLeftMs: cp.fuelLeftMs,
          burning: cp.burning
        } : this.updates++, this.pos = pp, this.view = ip;
        for (const Op of this.listeners) Op()
      }
      get(pp) {
        return null !== this.pos && this.pos[0] === pp[0] && this.pos[1] === pp[1] && this.pos[2] === pp[2] ? this.view : null
      }
      forget(pp) {
        null !== this.get(pp) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
    }

    function ex(pp, ip, cp, Op) {
      return "noFuel" === ip && Op && !xc(Bi[pp]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === ip && !0 === (null === cp || void 0 === cp ? void 0 : cp.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === ip && !0 === (null === cp || void 0 === cp ? void 0 : cp.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === ip && !0 === (null === cp || void 0 === cp ? void 0 : cp.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === ip && !0 === (null === cp || void 0 === cp ? void 0 : cp.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : ux(ip, cp) ? "buildAFactory2Game:machineStatus_noInputShort" : function(pp, ip) {
        const cp = Bi[pp];
        if ("noFuel" === ip && void 0 !== cp.fuels) return xc(cp) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (cp.mobFarm && ("noInput" === ip || "badInput" === ip)) return `buildAFactory2Game:machineStatus_${ip}MobFarm`;
        if ("outputFull" === ip && (void 0 !== cp.table || cp.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === ip && zi(cp)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== cp.cryoMade && ("noInput" === ip || "noOutlet" === ip || "fluidFull" === ip)) return `buildAFactory2Game:machineStatus_${ip}Mixer`;
        return `buildAFactory2Game:machineStatus_${ip}`
      }(pp, ip)
    }

    function ux(pp, ip) {
      return "noInput" === pp && null !== ip && void 0 !== ip && ip.input && ip.inputShort ? {
        input: ip.input,
        short: ip.inputShort
      } : null
    }

    function jx(pp) {
      return qo(pp) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== pp.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function kx(pp) {
      const ip = (0, Jp.qe)(pp);
      return `Baf2Pane Baf2Pane${ip.charAt(0).toUpperCase()}${ip.slice(1)}`
    }

    function mx(pp, ip) {
      const [cp, op] = (0, Op.useState)((() => pp.get(ip)));
      return (0, Op.useEffect)((() => {
        op(pp.get(ip));
        const cp = pp.subscribe((() => {
          op(pp.get(ip))
        }));
        return () => {
          cp(), pp.forget(ip)
        }
      }), [pp, ...ip]), cp
    }

    function Rx(pp, ip, cp, Op) {
      const op = Bi[pp],
        Ip = ip && op.couplable ? gi(op, cp) : op,
        Sp = null !== Op && oc(Ip) ? function(pp, ip) {
          var cp;
          return null !== (cp = null !== ip && oc(pp) ? Dc[ip] : void 0) && void 0 !== cp ? cp : pp.opMs
        }(Ip, Ac(Op)) : Ip.opMs;
      return Sp === Ip.opMs ? Ip : {
        ...Ip,
        opMs: Sp
      }
    }

    function qx(pp) {
      let {
        running: ip,
        opMs: cp,
        opLeftMs: Op,
        updateCount: op
      } = pp;
      return (0, CI.jsx)("div", {
        className: Ro()("Baf2MachineProgress", {
          Running: ip
        }),
        children: (0, CI.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: cp / 1e3 + "s",
            animationDelay: null === Op ? void 0 : (Op - cp) / 1e3 + "s"
          }
        }, op)
      })
    }

    function Mx(pp) {
      let {
        running: ip,
        leftMs: cp,
        periodMs: Op,
        updateCount: op
      } = pp;
      const {
        t: Ip
      } = (0, Eo.H)(), Sp = Math.min(Math.max(null !== cp && void 0 !== cp ? cp : 0, 0), Op), xp = ip && Sp > 0, Lp = Ip("buildAFactory2Game:machineBarFuel");
      return (0, CI.jsx)("div", {
        className: Ro()("Baf2FuelBurn", {
          Draining: xp
        }),
        role: "img",
        title: Lp,
        "aria-label": Lp,
        children: (0, CI.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: xp ? {
            animationDuration: Op / 1e3 + "s",
            animationDelay: (Sp - Op) / 1e3 + "s"
          } : {
            transform: `scaleY(${Sp/Op})`
          }
        }, op)
      })
    }

    function Cx(pp, ip, cp) {
      let [Op, op] = cp;
      const Ip = 1 !== Op ? Co(ip) : null;
      return {
        amount: Op,
        have: op,
        item: pp(Ip || xI(ip))
      }
    }

    function Ex(pp) {
      return oc(pp) ? "buildAFactory2Game:machineBarMining" : Ic(pp) ? "buildAFactory2Game:machineBarCutting" : void 0 !== pp.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Xx(pp) {
      var ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp;
      let {
        kind: dp,
        WI: ep,
        store: jp,
        power: kp,
        renderSlot: mp
      } = pp;
      const {
        t: Rp
      } = (0, Eo.H)(), qp = mx(jp, ep), Mp = Bi[dp], Cp = null !== (ip = null === qp || void 0 === qp ? void 0 : qp.coupled) && void 0 !== ip && ip, Ep = null !== (cp = null === qp || void 0 === qp ? void 0 : qp.couplerLevel) && void 0 !== cp ? cp : 1, Xp = Rx(dp, Cp, Ep, null !== (Op = null === qp || void 0 === qp || null === (op = qp.dug) || void 0 === op ? void 0 : op.item) && void 0 !== Op ? Op : null), lp = null !== (Ip = null === qp || void 0 === qp ? void 0 : qp.status) && void 0 !== Ip ? Ip : null, Qp = null !== (Sp = null === qp || void 0 === qp ? void 0 : qp.power) && void 0 !== Sp ? Sp : null, Jp = null !== (xp = null === qp || void 0 === qp ? void 0 : qp.opLeftMs) && void 0 !== xp ? xp : null, Bp = null !== (Lp = null === qp || void 0 === qp ? void 0 : qp.dug) && void 0 !== Lp ? Lp : null, Np = null !== Bp && oc(Mp) ? Dc[null !== (Yp = Ac(Bp.item)) && void 0 !== Yp ? Yp : ""] : void 0, Tp = void 0 === Np ? null : 6e4 / Np, fp = null !== (Dp = null === qp || void 0 === qp ? void 0 : qp.powerCap) && void 0 !== Dp ? Dp : 4e3, bp = null !== (Ap = null === qp || void 0 === qp ? void 0 : qp.tier) && void 0 !== Ap ? Ap : null, hp = void 0 !== Xp.powerMade, ap = null !== Mp.fuelSlot ? mp(Mp.fuelSlot) : null, np = Fi(Mp), Fp = !Cp && !0 === (null === qp || void 0 === qp ? void 0 : qp.fuelFed), Gp = !Cp && !0 === (null === qp || void 0 === qp ? void 0 : qp.fuelFeeds), rp = null !== Mp.fuelSlot && !Cp, Zp = null !== (Pp = null === qp || void 0 === qp ? void 0 : qp.fuelLeftMs) && void 0 !== Pp ? Pp : null, zp = function(pp, ip, cp) {
        var Op;
        const op = null === ip ? void 0 : Lc[ip];
        return Math.max(null !== (Op = null !== op && void 0 !== op ? op : cp) && void 0 !== Op ? Op : 0, pp.opMs)
      }(Xp, null !== (Wp = null === qp || void 0 === qp ? void 0 : qp.burning) && void 0 !== Wp ? Wp : null, Zp), sp = null !== (yp = null === qp || void 0 === qp ? void 0 : qp.fuelKeep) && void 0 !== yp ? yp : null, Kp = null === lp ? null : ex(dp, lp, qp, Fp), Vp = null === lp ? null : ux(lp, qp);
      return (0, CI.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, CI.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, CI.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Rp(xI(dp))
          }), Bp && (0, CI.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [Rp("Tree Cutter" === dp ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, CI.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, CI.jsx)(Qo.d, {
                itemName: Bp.item,
                amount: 0
              })
            }), (0, CI.jsx)(Jo.e, {
              text: Bp.name
            })]
          }), null !== Tp && (0, CI.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: Rp("buildAFactory2Game:machineDigsFixed", {
              perMin: String(Tp)
            })
          }), (null === qp || void 0 === qp ? void 0 : qp.field) && (0, CI.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, CI.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, CI.jsx)(Qo.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), Rp("buildAFactory2Game:machineField", {
              planted: String(qp.field[0]),
              ripe: String(qp.field[1])
            })]
          }), (0, CI.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, CI.jsxs)("div", {
              className: Ro()("Baf2MachineColumn", {
                Baf2Burns: rp
              }),
              children: [null !== Xp.inputSlot && (0, CI.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, CI.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Rp(jx(Xp))
                }), mp(Xp.inputSlot)]
              }), null !== Mp.fuelSlot && !Cp && (0, CI.jsxs)("div", {
                className: Ro()("Baf2MachineSlot", {
                  Baf2FuelFed: Fp
                }),
                children: [(0, CI.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [Fp && (0, CI.jsx)(Xo.d, {
                    name: "fire"
                  }), Rp("buildAFactory2Game:machineFuel")]
                }), (0, CI.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, CI.jsx)(Mx, {
                    running: "running" === lp,
                    leftMs: Zp,
                    periodMs: zp,
                    updateCount: jp.updateCount
                  }), ap]
                })]
              }), null !== Mp.fuelSlot && Cp && (0, CI.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, CI.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: Rp("buildAFactory2Game:machineFuel")
                }), (0, CI.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: Rp("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": Rp("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, CI.jsx)(Xo.d, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, CI.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, CI.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Rp(Ex(Xp))
              }), (0, CI.jsx)(qx, {
                running: "running" === lp,
                opMs: Xp.opMs,
                opLeftMs: Jp,
                updateCount: jp.updateCount
              })]
            }), Xp.outputSlots.length > 0 && (0, CI.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, CI.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Rp("buildAFactory2Game:machineOutput")
              }), (0, CI.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: Xp.outputSlots.map((pp => (0, CI.jsx)("div", {
                  children: mp(pp)
                }, pp)))
              })]
            }), null !== Qp && hp && (0, CI.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, CI.jsx)("div", {
                style: {
                  height: 100 * Qp / fp + "%"
                }
              })
            })]
          }), rp && null !== sp && (0, CI.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, CI.jsx)(Xo.d, {
              name: "arrows-rotate"
            }), Rp(Ic(Xp) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(sp)
            })]
          }), (Fp || Gp) && (0, CI.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, CI.jsx)(Xo.d, {
              name: "fire"
            }), Rp(Fp ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), Mp.couplable && (0, CI.jsx)(ix, {
            kind: dp,
            tier: bp,
            coupled: Cp,
            level: Ep,
            slot: np === Mp.fuelSlot ? ap : null !== np ? mp(np) : null
          }), null !== Qp && !hp && !0 === (null === qp || void 0 === qp ? void 0 : qp.reactorPowered) && (0, CI.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: Rp("buildAFactory2Game:machineReactorPowered")
          }), null !== Qp && !hp && !0 !== (null === qp || void 0 === qp ? void 0 : qp.reactorPowered) && (0, CI.jsx)(QS, {
            stored: Qp,
            cap: fp,
            rates: null !== (Up = null === qp || void 0 === qp ? void 0 : qp.powerRates) && void 0 !== Up ? Up : null
          }), (null === qp || void 0 === qp ? void 0 : qp.water) && (0, CI.jsx)(Px, {
            water: qp.water,
            at: ep,
            side: qp.cryo ? "waterIn" : null
          }), (null === qp || void 0 === qp ? void 0 : qp.cryo) && (0, CI.jsx)(Px, {
            water: qp.cryo,
            at: ep,
            side: "cryoOut"
          }), null !== qp && void 0 !== qp && qp.inertCoupler ? (0, CI.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: Rp("buildAFactory2Game:machineStatus_couplerOff", {
              item: LI(Rp, qp.inertCoupler)
            })
          }) : null !== Kp && (0, CI.jsx)("div", {
            className: Ro()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== lp
            }),
            children: Rp(Kp, Vp ? Cx(Rp, Vp.input, Vp.short) : void 0)
          })]
        }), (0, CI.jsxs)("div", {
          className: Ro()("Baf2MachineSide", {
            Baf2SynthSide: zi(Mp)
          }),
          children: [zi(Mp) && (0, CI.jsx)(VS, {
            WI: ep,
            taught: null !== (wp = null === qp || void 0 === qp ? void 0 : qp.taught) && void 0 !== wp ? wp : null
          }, ep.join(",")), hp && (0, CI.jsx)(BS, {
            kind: dp,
            def: Xp,
            WI: ep,
            power: kp,
            stored: null !== Qp && void 0 !== Qp ? Qp : 0,
            cap: fp
          }), gp(Mp) && (0, CI.jsx)(zS, {
            WI: ep,
            input: null !== (vp = null === qp || void 0 === qp ? void 0 : qp.input) && void 0 !== vp ? vp : null,
            drops: null !== (tp = null === qp || void 0 === qp ? void 0 : qp.farm) && void 0 !== tp ? tp : null,
            seconds: String(Xp.opMs / 1e3)
          }), !hp && !gp(Mp) && !zi(Mp) && (0, CI.jsx)(xS, {
            kind: dp,
            def: Xp,
            input: null !== (Hp = null === qp || void 0 === qp ? void 0 : qp.input) && void 0 !== Hp ? Hp : null,
            tier: null !== bp && void 0 !== bp ? bp : 1,
            noSeeds: !0 === (null === qp || void 0 === qp ? void 0 : qp.noSeeds)
          })]
        })]
      })
    }

    function lx(pp, ip, cp, Op) {
      var op;
      const Ip = Bi[pp],
        Sp = [Ip.inputSlot, Ip.fuelSlot, ...null !== (op = Ip.inputSlots) && void 0 !== op ? op : []].filter((pp => null !== pp));
      return {
        render: op => {
          let {
            WI: Ip,
            renderSlot: Sp
          } = op;
          return (0, CI.jsx)(FS.Provider, {
            value: Op,
            children: (0, CI.jsx)(Xx, {
              kind: pp,
              WI: Ip,
              store: ip,
              power: cp,
              renderSlot: Sp
            })
          })
        },
        quickMoveRange: Sp.length > 0 ? [Math.min(...Sp), Math.max(...Sp) + 1] : [0, 0],
        className: kx(pp)
      }
    }
    const Qx = "Assembler";

    function Jx(pp) {
      var ip, cp, Op, op, Ip, Sp, xp, Lp, Yp;
      let {
        WI: Dp,
        store: Ap,
        renderSlot: Pp
      } = pp;
      const {
        t: Wp
      } = (0, Eo.H)(), yp = mx(Ap, Dp), Up = null !== (ip = null === yp || void 0 === yp ? void 0 : yp.tier) && void 0 !== ip ? ip : 1, wp = null !== (cp = null === yp || void 0 === yp ? void 0 : yp.taught) && void 0 !== cp ? cp : null, vp = pc(Qx, {
        coupled: !1,
        taught: wp
      }), tp = null !== (Op = vp.bench) && void 0 !== Op ? Op : null, Hp = null !== (op = null === yp || void 0 === yp ? void 0 : yp.status) && void 0 !== op ? op : null, dp = null !== (Ip = null === yp || void 0 === yp ? void 0 : yp.power) && void 0 !== Ip ? Ip : null, ep = null !== (Sp = null === yp || void 0 === yp ? void 0 : yp.powerCap) && void 0 !== Sp ? Sp : 4e3;
      return (0, CI.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, CI.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, CI.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: Wp(xI(Qx))
          }), tp && (0, CI.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [Wp("buildAFactory2Game:benchMakes"), (0, CI.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, CI.jsx)(Qo.d, {
                itemName: tp.output,
                amount: 0
              })
            }), (null === yp || void 0 === yp ? void 0 : yp.taughtName) && (0, CI.jsx)(Jo.e, {
              text: yp.taughtName
            }), tp.outputAmount > 1 && (0, CI.jsxs)("span", {
              children: ["\xd7", tp.outputAmount]
            })]
          }), !tp && (0, CI.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: Wp("buildAFactory2Game:benchTeachHint")
          }), (0, CI.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, CI.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (xp = vp.inputSlots) && void 0 !== xp ? xp : []).map(((pp, ip) => {
                const cp = null === tp || void 0 === tp ? void 0 : tp.inputs[ip];
                return (0, CI.jsxs)("div", {
                  className: Ro()("Baf2BenchInput", {
                    Spare: !cp
                  }),
                  children: [(0, CI.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [Pp(pp), cp && (0, CI.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, CI.jsx)(Qo.d, {
                        itemName: cp.item,
                        amount: 0
                      })
                    })]
                  }), (0, CI.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: cp ? `\xd7${cp.amount}` : "\xa0"
                  })]
                }, pp)
              }))
            }), (0, CI.jsx)(qx, {
              running: "running" === Hp,
              opMs: vp.opMs,
              opLeftMs: null !== (Lp = null === yp || void 0 === yp ? void 0 : yp.opLeftMs) && void 0 !== Lp ? Lp : null,
              updateCount: Ap.updateCount
            }), (0, CI.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, CI.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: Wp("buildAFactory2Game:machineOutput")
              }), (0, CI.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: vp.outputSlots.map((pp => (0, CI.jsx)("div", {
                  children: Pp(pp)
                }, pp)))
              })]
            })]
          }), null !== dp && (0, CI.jsx)(QS, {
            stored: dp,
            cap: ep,
            rates: null !== (Yp = null === yp || void 0 === yp ? void 0 : yp.powerRates) && void 0 !== Yp ? Yp : null
          }), null !== Hp && (0, CI.jsx)("div", {
            className: Ro()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== Hp
            }),
            children: Wp(ex(Qx, Hp, yp, !1))
          }), tp && tp.inputs.length > 1 && (0, CI.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: Wp("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, CI.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, CI.jsx)(YS, {
            taught: wp,
            tier: Up
          }), tp && (0, CI.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: Wp("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Bx(pp) {
      var ip;
      const cp = null !== (ip = Bi[Qx].inputSlots) && void 0 !== ip ? ip : [];
      return {
        render: ip => {
          let {
            WI: cp,
            renderSlot: Op
          } = ip;
          return (0, CI.jsx)(Jx, {
            WI: cp,
            store: pp,
            renderSlot: Op
          })
        },
        quickMoveRange: [Math.min(...cp), Math.max(...cp) + 1],
        className: kx(Qx)
      }
    }
    var Nx = cp(104),
      Tx = cp(1141),
      fx = cp(4341);
    const bx = 600,
      hx = .5,
      ax = 4,
      nx = 1200,
      Fx = 140,
      gx = 100,
      Gx = 32,
      rx = 16,
      Zx = 100.5,
      zx = 90,
      sx = 1.5,
      Kx = 50;

    function Vx(pp) {
      switch (Qc(pp)) {
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
    const pL = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function iL(pp) {
      const ip = Math.ceil(60 * pp / gx);
      return {
        fuel: Math.max(Gx, ip),
        waste: Math.max(rx, ip)
      }
    }

    function cL(pp, ip, cp) {
      const [Op, op, Ip] = [pp - 2, ip - 2, cp - 2];
      return 2 * (Op * op + op * Ip + Ip * Op) * Fx
    }

    function OL(pp, ip, cp) {
      return Math.max(0, pp - 2) * Math.max(0, ip - 2) * Math.max(0, cp - 2)
    }

    function oL(pp, ip) {
      const [cp, Op, op] = pp, Ip = cp * Op * op, Sp = new Float32Array(Ip);
      let xp = 0,
        Lp = 0,
        Yp = 0,
        Dp = 0,
        Ap = 0;
      const Pp = (pp, Ip, Sp) => pp < 0 || pp >= cp || Ip < 0 || Ip >= Op || Sp < 0 || Sp >= op ? 0 : ip[(Ip * op + Sp) * cp + pp];
      for (let wp = 0; wp < Op; wp++)
        for (let pp = 0; pp < op; pp++)
          for (let Op = 0; Op < cp; Op++) {
            const Ip = (wp * op + pp) * cp + Op,
              Wp = ip[Ip];
            if (1 === Wp) {
              xp++;
              let ip = 0;
              for (const [cp, op, Ip] of pL) {
                const Sp = Pp(Op + cp, wp + op, pp + Ip);
                1 !== Sp && 2 !== Sp || ip++
              }
              Sp[Ip] = bx * (1 + hx * Math.min(ip, ax)), Dp += Sp[Ip]
            } else if (2 === Wp) Lp++;
            else if (3 === Wp) {
              Yp++;
              pL.some((ip => {
                let [cp, op, Ip] = ip;
                return 1 === Pp(Op + cp, wp + op, pp + Ip)
              })) && (Ap += nx)
            }
          }
      const Wp = cL(cp + 2, Op + 2, op + 2),
        yp = Math.min(Dp, Ap, Wp),
        Up = xp > 0 ? Dp * gx / xp : 0;
      return {
        rods: xp,
        graphite: Lp,
        channels: Yp,
        fuelHeat: Dp,
        cooling: Ap,
        size: Wp,
        max: yp,
        vol: Ip,
        powerPerUnit: Up,
        pelletsPerMin: Up > 0 ? yp / Up * 60 : 0,
        waterPerS: yp * Vp.m,
        rodHeat: Sp
      }
    }
    const IL = 0,
      SL = 1,
      xL = 6,
      LL = 7,
      YL = 8;

    function DL(pp, ip) {
      const [cp, Op, op] = pp, Ip = new Uint8Array(cp * Op * op), Sp = (pp, Ip, Sp) => pp < 0 || pp >= cp || Ip < 0 || Ip >= Op || Sp < 0 || Sp >= op ? 0 : ip[(Ip * op + Sp) * cp + pp];
      for (let xp = 0; xp < Op; xp++)
        for (let pp = 0; pp < op; pp++)
          for (let Op = 0; Op < cp; Op++) {
            const Lp = (xp * op + pp) * cp + Op,
              Yp = ip[Lp];
            if (1 === Yp) {
              let ip = 0;
              for (const [cp, op, Ip] of pL) {
                const Lp = Sp(Op + cp, xp + op, pp + Ip);
                ip += 1 === Lp || 2 === Lp ? 1 : 0
              }
              Ip[Lp] = SL + Math.min(ip, ax)
            } else if (3 === Yp) {
              const ip = pL.some((ip => {
                let [cp, op, Ip] = ip;
                return 1 === Sp(Op + cp, xp + op, pp + Ip)
              }));
              Ip[Lp] = ip ? xL : LL
            } else 2 === Yp && (Ip[Lp] = YL)
          }
      return Ip
    }

    function AL(pp) {
      return pp.fuelHeat <= pp.cooling && pp.fuelHeat <= pp.size ? "fuel" : pp.cooling <= pp.size ? "cooling" : "size"
    }
    const PL = zx;

    function WL(pp, ip, cp) {
      return Math.round(pp * ip * cp * 25e3 * (1 + .25 * (Math.min(pp, ip, cp) - 2)))
    }

    function yL(pp) {
      return Math.max(0, Math.min(Vp.e, pp))
    }

    function UL(pp, ip, cp) {
      const Op = ip * yL(cp);
      return pp <= 0 ? 0 : Op > 0 ? Math.min(200, 100 * pp / Op) : 200
    }

    function wL(pp, ip) {
      const cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? sx : 1;
      return Math.min(pp.fuelHeat * cp, pp.cooling * yL(ip), pp.size * cp)
    }

    function vL(pp) {
      return 2 + pp / 10
    }
    const tL = "buildAFactory2Game:";

    function HL(pp) {
      var ip;
      return null !== (ip = pp.baf2RxMood) && void 0 !== ip ? ip : function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const cp = [
          ["calm", 50],
          ["warm", PL],
          ["hot", Zx]
        ];
        for (const [Op, op] of cp)
          if (pp < op + (Op === ip ? 3 : 0)) return Op;
        return "alarm"
      }(pp.baf2RxHeat)
    }
    const dL = 120;

    function eL(pp) {
      const ip = pp.baf2RxState;
      if ("running" === ip && pp.baf2RxHeat > Zx) return {
        label: `${tL}rxState_tooHot`,
        tone: "bad",
        fix: `${tL}rxFix_tooHot`
      };
      switch (ip) {
        case "running":
          return {
            label: `${tL}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${tL}rxState_idle`, tone: "off", fix: `${tL}rxFix_idle`
          };
        case "scram":
          return {
            label: `${tL}rxState_scram`, tone: "off", fix: pp.baf2RxHeat < Kx ? `${tL}rxFix_scramCool` : `${tL}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${tL}rxState_${ip}`, tone: "off", fix: `${tL}rxFix_${ip}`
          };
        case "melted":
          return {
            label: `${tL}rxState_melted`, tone: "bad", fix: `${tL}rxFix_melted`
          };
        default:
          return {
            label: `${tL}rxState_${ip}`, tone: "warn", fix: `${tL}rxFix_${ip}`
          }
      }
    }

    function uL(pp) {
      const [ip, cp, Op] = pp.baf2RxStats;
      return {
        fuelHeat: ip,
        cooling: cp * (pp.baf2RxCryo ? Math.max(1, yL(pp.baf2RxWater / 100)) : 1),
        size: Op
      }
    }

    function jL(pp) {
      var ip;
      const cp = "idle" === pp.baf2RxState || "running" === pp.baf2RxState && pp.baf2RxHeat <= Zx || "scram" === pp.baf2RxState && pp.baf2RxHeat < Kx;
      if (0 === (pp.baf2RxFlags & ui) || !pp.baf2RxFormed || !cp) return null;
      const {
        fuelHeat: Op,
        cooling: op,
        size: Ip
      } = uL(pp), Sp = Math.min(Op, op, Ip), xp = AL({
        fuelHeat: Op,
        cooling: op,
        size: Ip
      }), Lp = "cooling" === xp && !0 === pp.baf2RxCryoOpen && !pp.baf2RxCryo, Yp = null !== (ip = pp.baf2RxCells) && void 0 !== ip ? ip : "", Dp = ("fuel" === xp || "cooling" === xp && !0 === pp.baf2RxCryo) && Yp.length > 0 && !Yp.includes(String(0)), Ap = Lp ? "Cryo" : "scram" === pp.baf2RxState ? "Off" : "";
      return Sp < 12e3 ? {
        key: `${tL}rxGrow_${Dp?"full":xp}${Ap}`,
        amount: Sp
      } : null
    }

    function kL(pp, ip) {
      return pp[0] === ip[0] && pp[1] === ip[1] && pp[2] === ip[2]
    }

    function mL(pp) {
      return [...pp].sort(((pp, ip) => Number(ip[2] < ip[1]) - Number(pp[2] < pp[1])))
    }

    function RL(pp, ip) {
      return ip.some((ip => {
        let [cp, Op] = ip;
        return !(Op <= 0) && ["edge", "cap", "wall", "inside"].some((ip => cp === LO(pp, ip)))
      }))
    }

    function qL(pp, ip, cp) {
      const Op = pp.baf2RxFuel - pp.baf2RxPu > 0 ? cp : 0;
      return {
        full: pp.baf2RxWaste > ip - 3,
        fullInS: Op > 0 ? Math.max(0, ip - pp.baf2RxWaste) / Op : null
      }
    }
    const ML = {
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

    function CL(pp) {
      return EL[pp]
    }
    const EL = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function XL(pp) {
      let [ip, cp, Op] = pp;
      return Math.ceil(cL(ip, cp, Op) * Vp.m)
    }

    function lL(pp, ip) {
      return "battery" === pp ? ip[0] * ip[1] * ip[2] : function(pp) {
        let [ip, cp, Op] = pp;
        return ip * cp * Op - Math.max(0, ip - 2) * Math.max(0, cp - 2) * Math.max(0, Op - 2)
      }(ip) - 1
    }

    function QL(pp) {
      const ip = Math.max(0, pp);
      if (ip < 10) return String(Math.round(10 * ip) / 10);
      if (ip < 1e4) return Math.round(ip).toLocaleString("en-US");
      if (ip < 1e6) return `${ip<1e5?(Math.floor(ip/100)/10).toFixed(1):Math.floor(ip/1e3)}k`;
      const cp = ip / 1e6;
      return `${cp<10?(Math.floor(100*cp)/100).toFixed(2):cp<100?(Math.floor(10*cp)/10).toFixed(1):Math.floor(cp)}M`
    }

    function JL(pp) {
      return pp <= 0 ? "0" : pp >= 10 ? String(Math.round(pp)) : pp.toFixed(pp >= 1 ? 1 : 2)
    }

    function BL(pp) {
      const ip = iO(pp, 0),
        cp = iO(pp, sc(pp) - 1);
      return {
        lo: [Math.min(ip[0], cp[0]), Math.min(ip[1], cp[1]), Math.min(ip[2], cp[2])],
        hi: [Math.max(ip[0], cp[0]) + 1, Math.max(ip[1], cp[1]) + 1, Math.max(ip[2], cp[2]) + 1]
      }
    }

    function NL(pp, ip, cp) {
      const Op = [ip[0] - pp[0], ip[1] - pp[1], ip[2] - pp[2]],
        op = [(pp[0] + ip[0]) / 2, (pp[1] + ip[1]) / 2, (pp[2] + ip[2]) / 2],
        Ip = [];
      for (let Sp = 0; Sp < 3; Sp++) {
        const xp = (Sp + 1) % 3,
          Lp = (Sp + 2) % 3;
        for (const Yp of [pp[xp], ip[xp]])
          for (const Dp of [pp[Lp], ip[Lp]]) {
            const pp = [0, 0, 0],
              ip = [cp, cp, cp];
            pp[Sp] = op[Sp], ip[Sp] = Op[Sp] + cp, pp[xp] = Yp, pp[Lp] = Dp, Ip.push([pp, ip])
          }
      }
      return Ip
    }
    const TL = "buildAFactory2Game:",
      fL = [`${TL}colNorth`, `${TL}colEast`, `${TL}colSouth`, `${TL}colWest`];

    function bL(pp, ip) {
      const [cp, Op, op] = pp.baf2ColAt;
      return `baf2col ${cp} ${Op} ${op} ${ip}`
    }

    function hL(pp) {
      return function(pp) {
        if (!Number.isFinite(pp)) return "";
        const ip = Math.max(1, Math.round(pp));
        if (ip < 60) return `${ip}s`;
        const cp = ip % 60;
        return 0 === cp ? ip / 60 + "m" : `${Math.floor(ip/60)}m ${cp}s`
      }(function(pp) {
        const ip = YO.FOCUS_BY_LASERS[Math.max(0, Math.min(4, pp))];
        return ip > 0 ? YO.NOVA_FOCUS / ip : 1 / 0
      }(pp))
    }

    function aL(pp) {
      const ip = Math.abs(Math.round(pp));
      return ip < 1e3 ? Math.round(pp).toLocaleString("en-US") : ip < 1e6 ? `${ip<1e5?(pp/1e3).toFixed(1).replace(/\.0$/,""):Math.round(pp/1e3)}k` : `${(pp/1e6).toFixed(ip<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function nL(pp, ip, cp) {
      if (UO(ip) >= 0) {
        const ip = function(pp, ip) {
          return pp.find((pp => {
            let {
              focus: cp
            } = pp;
            return cp[0] === ip[0] && cp[2] === ip[2] && (ip[1] === cp[1] || ip[1] === cp[1] - 1)
          }))
        }(pp, cp);
        if (!ip) return null;
        const op = function(pp) {
          let ip = 0,
            cp = 0;
          for (let Op = 0; Op < 4; Op++) ip += pp.laser[Op] ? 1 : 0, cp += pp.live[Op] ? 1 : 0;
          return {
            lasers: ip,
            live: cp,
            focusPerS: YO.FOCUS_BY_LASERS[cp],
            drawPerS: YO.LASER_DRAW * cp
          }
        }({
          laser: ip.lasers,
          live: ip.live
        });
        if (0 === op.lasers || "noLasers" === ip.state) return {
          key: `${TL}lookColNoLasers`
        };
        if (0 === op.live) return {
          key: `${TL}lookColOff_blocked`
        };
        if (!(ip.on && op.live > 0) && ("running" !== (Op = ip.state) && "slowed" !== Op)) return {
          key: `${TL}lookColOff_${ip.state}`
        };
        if (op.live < op.lasers) return {
          key: `${TL}lookColLasersSome`,
          params: {
            lasers: String(op.lasers),
            live: String(op.live)
          }
        };
        const Ip = ip.open.filter(Boolean).length;
        return Ip < 4 ? {
          key: `${TL}lookColLasersSpots`,
          params: {
            live: String(op.live),
            spots: String(Ip),
            time: hL(op.live)
          }
        } : {
          key: `${TL}lookColLasers`,
          params: {
            live: String(op.live),
            time: hL(op.live)
          }
        }
      }
      var Op;
      if (!wO(ip)) return null;
      const op = function(pp, ip) {
        for (const cp of pp) {
          const pp = dO(cp.focus, [ip[0], ip[1], ip[2]]);
          if (pp && pp.Yx === YO.LASER_D && cp.lasers[pp.dir]) return {
            entry: cp,
            dir: pp.dir
          }
        }
        return null
      }(pp, cp);
      if (!op) return {
        key: `${TL}lookLaserNoCollider`
      };
      const {
        entry: Ip,
        dir: Sp
      } = op;
      return Ip.open[Sp] ? Ip.live[Sp] ? {
        key: Ip.on ? `${TL}lookLaserFiring` : `${TL}lookLaserReady`
      } : {
        key: `${TL}lookLaserBlocked`
      } : {
        key: `${TL}lookLaserClosed`
      }
    }

    function FL(pp, ip) {
      const cp = [];
      for (let Op = 1; Op < YO.LASER_D; Op++) pp & 1 << ip * (YO.LASER_D - 1) + Op - 1 && cp.push(Op);
      return cp
    }
    const gL = {
      firing: `${TL}colSlotFiring`,
      ready: `${TL}colSlotReady`,
      blocked: `${TL}colSlotBlocked`,
      empty: `${TL}colSlotEmpty`,
      closed: `${TL}colSlotClosed`
    };

    function GL(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const Ip = Lo(pp),
        Sp = Lo(ip),
        xp = Lo(cp),
        Lp = xp.filter(Boolean).length,
        Yp = Ip.filter(Boolean).length,
        Dp = [0, 1, 2, 3].map((pp => Sp[pp] ? Ip[pp] ? xp[pp] ? Op ? "firing" : "ready" : "blocked" : (pp => FL(op, pp).length > 0)(pp) ? "blocked" : "empty" : "closed")),
        Ap = Dp.indexOf("blocked"),
        Pp = Ap < 0 && Yp > 0 ? Dp.indexOf("empty") : -1;
      return Dp.map(((pp, ip) => {
        const cp = ip === Ap ? {
          key: `${TL}colSlotClear`
        } : ip === Pp ? {
          key: `${TL}colSlotAdd`,
          params: {
            time: hL(Math.min(4, Lp + 1))
          }
        } : null;
        return {
          dir: ip,
          tone: pp,
          title: {
            key: "blocked" !== pp || Ip[ip] ? gL[pp] : `${TL}colSlotGap`,
            keys: {
              dir: fL[ip]
            }
          },
          hint: cp
        }
      }))
    }

    function rL(pp) {
      var ip;
      return "noPower" === pp.baf2ColState && pp.baf2ColRxState ? eL({
        baf2RxState: pp.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (ip = pp.baf2ColRxHeat) && void 0 !== ip ? ip : 0
      }) : null
    }

    function ZL(pp) {
      const ip = Lo(pp.baf2ColSpots).filter(Boolean).length,
        cp = Lo(pp.baf2ColLive);
      let Op = 0,
        op = 0;
      return Lo(pp.baf2ColLasers).forEach(((pp, ip) => {
        pp && (Op++, op += cp[ip] ? 0 : 1)
      })), op > 0 ? {
        key: `${TL}colSubSome`,
        params: {
          blocked: String(op),
          lasers: String(Op)
        }
      } : ip < 4 ? {
        key: `${TL}colSubSpots`,
        params: {
          lasers: String(Op),
          spots: String(ip)
        }
      } : {
        key: `${TL}colSub`,
        params: {
          lasers: String(Op)
        }
      }
    }

    function zL(pp) {
      const ip = rL(pp);
      if ("idle" === pp.baf2ColRxState && ip) return {
        key: `${TL}colState_noPowerIdle`
      };
      if (ip) return {
        key: `${TL}colState_noPowerReactor`,
        keys: {
          state: ip.label
        }
      };
      if ("noInput" !== pp.baf2ColState) return {
        key: `${TL}colState_${pp.baf2ColState}`
      };
      const cp = String(Math.max(0, YO.NOVA_SA - pp.baf2ColSa)),
        Op = String(Math.max(0, YO.NOVA_GD - pp.baf2ColGd));
      return "0" !== cp && "0" !== Op ? {
        key: `${TL}colState_noInput`,
        params: {
          sa: cp,
          gd: Op
        }
      } : "0" !== cp ? {
        key: `${TL}colState_noStarAlloy`,
        params: {
          sa: cp
        }
      } : "0" !== Op ? {
        key: `${TL}colState_noGlowDust`,
        params: {
          gd: Op
        }
      } : {
        key: `${TL}colState_running`
      }
    }

    function sL(pp) {
      return pp.baf2ColP < 0 ? `${TL}colNext` : function(pp) {
        const ip = pp.baf2ColState;
        return pp.baf2ColP >= 0 && ("blocked" === ip || "noLasers" === ip || "noPower" === ip)
      }(pp) ? `${TL}colStalled` : null === KL(pp) ? `${TL}colMaking` : `${TL}colNovaIn`
    }

    function KL(pp) {
      if (pp.baf2ColP < 0 || pp.baf2ColWant <= 0) return null;
      const ip = pp.baf2ColFocusPerS * Math.min(1, pp.baf2ColDraw / pp.baf2ColWant);
      return ip > 0 ? Math.max(0, YO.NOVA_FOCUS - pp.baf2ColP) / ip : null
    }

    function VL(pp, ip) {
      const cp = [];
      for (let Op = 1; Op <= 3; Op++) {
        const op = [pp[0], pp[1] - Op, pp[2]];
        if (!ip(op)) return cp;
        cp.push(op)
      }
      return []
    }

    function pY(pp, ip) {
      const cp = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let Op = 0; Op < 4; Op++) {
        const op = Op,
          Ip = HO(pp.focus, op, YO.LASER_D);
        if (pp.lasers[Op] || !pp.open[Op] || !ip(Ip)) continue;
        const Sp = [];
        for (let cp = 1; cp < YO.LASER_D; cp++) {
          const Op = HO(pp.focus, op, cp);
          ip(Op) || Sp.push(Op)
        }
        cp.supports.push(...VL(Ip, ip)), 0 === Sp.length ? cp.free.push(Ip) : (cp.blocked.push(Ip), cp.gaps.push(...Sp))
      }
      return cp
    }
    const iY = YO.LASER_D - .25,
      cY = 4,
      OY = 2,
      oY = 16;
    const IY = {
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
        blendMode: fx.g.Standard,
        soft: !0
      },
      SY = {
        green: IY,
        pink: {
          ...IY,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function xY(pp, ip) {
      const cp = {
        ...ip.params
      };
      for (const [op, Ip] of Object.entries(null !== (Op = ip.keys) && void 0 !== Op ? Op : {})) {
        var Op;
        cp[op] = pp(Ip)
      }
      return cp
    }
    const LY = "buildAFactory2Game:",
      YY = 2 * YO.LASER_D + 1,
      DY = YO.LASER_D;

    function AY(pp) {
      return pp(`${LY}colFocusTip`, {
        need: aL(YO.NOVA_FOCUS)
      })
    }

    function PY(pp, ip) {
      return pp(ip.key, xY(pp, ip))
    }

    function WY(pp) {
      const ip = pp.getStatus();
      return {
        status: ip,
        entry: ip ? pp.entryAtRoot(ip.baf2ColAt) : void 0
      }
    }

    function yY(pp, ip) {
      return {
        left: 100 * (DY + pp) / YY + "%",
        top: 100 * (DY + ip) / YY + "%"
      }
    }

    function UY(pp) {
      let {
        status: ip,
        entry: cp
      } = pp;
      const Op = Lo(ip.baf2ColLasers),
        op = Lo(ip.baf2ColSpots),
        Ip = Lo(ip.baf2ColLive),
        Sp = !0 === (null === cp || void 0 === cp ? void 0 : cp.on),
        xp = YO.LASER_D,
        Lp = [];
      for (let Wp = 0; Wp < 4; Wp++) {
        const [pp, , ip] = tO[Wp];
        if (Ip[Wp]) {
          const cp = 100 * (xp - 1) / YY,
            Op = pp + ip > 0 ? 100 * (DY + 1) / YY : 100 * (DY - (xp - 1)) / YY,
            op = 100 * (DY + .35) / YY,
            Ip = 30 / YY,
            Yp = 0 !== pp ? {
              left: `${Op}%`,
              width: `${cp}%`,
              top: `${op}%`,
              height: `${Ip}%`
            } : {
              top: `${Op}%`,
              height: `${cp}%`,
              left: `${op}%`,
              width: `${Ip}%`
            };
          Lp.push((0, CI.jsx)("i", {
            className: Ro()("Baf2ColDiagramBeam", {
              Off: !Sp
            }),
            style: Yp
          }, `beam${Wp}`))
        }
        const cp = Op[Wp] ? "Baf2ColDiagramLaser" : op[Wp] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        Lp.push((0, CI.jsx)("i", {
          className: cp,
          style: yY(pp * xp, ip * xp)
        }, `spot${Wp}`))
      }
      for (let Wp = 0; Wp < 4; Wp++) {
        if (Op[Wp] || !op[Wp]) continue;
        const [pp, , cp] = tO[Wp];
        for (const Op of FL(null !== (Yp = ip.baf2ColGaps) && void 0 !== Yp ? Yp : 0, Wp)) {
          var Yp;
          Lp.push((0, CI.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: yY(pp * Op, cp * Op)
          }, `gap${Wp},${Op}`))
        }
      }
      for (const [Wp, , yp] of null !== (Dp = null === cp || void 0 === cp ? void 0 : cp.blockers) && void 0 !== Dp ? Dp : []) {
        var Dp, Ap, Pp;
        const pp = Wp - (null !== (Ap = null === cp || void 0 === cp ? void 0 : cp.focus[0]) && void 0 !== Ap ? Ap : 0),
          ip = yp - (null !== (Pp = null === cp || void 0 === cp ? void 0 : cp.focus[2]) && void 0 !== Pp ? Pp : 0);
        Lp.push((0, CI.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: yY(pp, ip)
        }, `block${pp},${ip}`))
      }
      return (0, CI.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [Lp, (0, CI.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function wY(pp) {
      let {
        status: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)(), Op = Lo(ip.baf2ColLive).filter(Boolean).length;
      return (0, CI.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, CI.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: AY(cp),
          children: cp(`${LY}colLadder`)
        }), (0, CI.jsx)("ul", {
          children: [1, 2, 3, 4].map((pp => (0, CI.jsx)("li", {
            className: Ro()({
              On: pp === Op
            }),
            children: cp(`${LY}colLadderChip`, {
              lasers: String(pp),
              time: hL(pp)
            })
          }, pp)))
        })]
      })
    }

    function vY(pp) {
      let {
        item: ip,
        sx: cp,
        need: Op,
        cap: op
      } = pp;
      const {
        t: Ip
      } = (0, Eo.H)(), Sp = Math.min(cp, Op);
      return (0, CI.jsxs)("li", {
        className: Ro()("Baf2ColTile", {
          Short: cp < Op
        }),
        children: [(0, CI.jsx)(tY, {
          item: ip
        }), (0, CI.jsx)("b", {
          className: "Baf2ColTileValue",
          children: Ip(`${LY}colOutOf`, {
            amount: String(Sp),
            cap: String(Op)
          })
        }), (0, CI.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, CI.jsx)("i", {
            style: {
              width: 100 * Sp / Op + "%"
            }
          })
        }), cp > Op && (0, CI.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: Ip(`${LY}colIntakeHeld`, {
            amount: String(cp),
            cap: String(op)
          })
        })]
      })
    }

    function tY(pp) {
      let {
        item: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)();
      return (0, CI.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, CI.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, CI.jsx)(Qo.d, {
            itemName: ip,
            amount: 0
          })
        }), (0, CI.jsx)("span", {
          className: "Baf2ColTileName",
          children: LI(cp, ip)
        })]
      })
    }

    function HY(pp) {
      switch (pp.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function dY(pp) {
      var ip, cp, op;
      let {
        store: Ip,
        close: Sp
      } = pp;
      const {
        t: xp
      } = (0, Eo.H)(), Lp = gS(), {
        status: Yp,
        entry: Dp
      } = function(pp) {
        const [ip, cp] = (0, Op.useState)((() => WY(pp)));
        return (0, Op.useEffect)((() => (cp(WY(pp)), pp.subscribe((() => {
          cp(WY(pp))
        })))), [pp]), ip
      }(Ip), [Ap, Pp] = (0, Op.useState)(null), Wp = null === Yp || void 0 === Yp ? void 0 : Yp.baf2ColHold;
      (0, Op.useEffect)((() => {
        Pp(null)
      }), [Wp]);
      const yp = (0, Op.useRef)({
          p: -1,
          n: 0
        }),
        Up = null !== (ip = null === Yp || void 0 === Yp ? void 0 : Yp.baf2ColP) && void 0 !== ip ? ip : -1;
      Up < yp.current.p && yp.current.n++, yp.current.p = Up;
      const wp = (0, Op.useRef)(null),
        [vp] = (0, Op.useState)((() => {
          return (pp = Ip.heldAtOpen()) === PO || pp === WO ? {
            key: `${TL}colBeltItIn`,
            item: pp
          } : null;
          var pp
        }));
      if (!Yp) return null;
      const tp = Yp.baf2ColMember,
        Hp = Yp.baf2ColP >= 0,
        dp = function(pp, ip) {
          if (pp.baf2ColP >= 0 && pp.baf2ColDraw > 0) {
            const ip = pp.baf2ColWant > 0 ? Math.min(1, pp.baf2ColDraw / pp.baf2ColWant) : 0;
            return {
              focus: pp.baf2ColFocusPerS * ip,
              draw: pp.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === pp.baf2ColState && ip && ip.draw > 0 ? {
            ...ip,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(Yp, wp.current);
      wp.current = dp.draw > 0 ? dp : null;
      const ep = "slowed" === Yp.baf2ColState || "noPower" === Yp.baf2ColState,
        jp = KL(Yp),
        kp = null !== Ap && void 0 !== Ap ? Ap : Yp.baf2ColHold,
        mp = function(pp) {
          var ip, cp;
          return "idle" === pp.baf2ColRxState ? null : null !== (ip = null === (cp = rL(pp)) || void 0 === cp ? void 0 : cp.fix) && void 0 !== ip ? ip : null
        }(Yp),
        Rp = null === mp && null === vp ? function(pp) {
          var ip;
          const cp = pp.baf2ColSentTo;
          if (!cp) return null;
          const Op = null !== (ip = pp.baf2ColSentHeld) && void 0 !== ip ? ip : null;
          return {
            key: null === Op ? `${TL}colNovaSentToMachine` : `${TL}colNovaSentTo`,
            target: cp,
            sx: Op
          }
        }(Yp) : null,
        qp = Hp ? xp(`${LY}colFocusOf`, {
          focus: aL(Yp.baf2ColP),
          need: aL(YO.NOVA_FOCUS)
        }) : null;
      return (0, CI.jsx)(mS.c, {
        close: Sp,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, CI.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, CI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CI.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, CI.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, CI.jsx)(Qo.d, {
                  itemName: DO,
                  amount: 0
                })
              }), (0, CI.jsxs)("div", {
                children: [(0, CI.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: LI(xp, DO)
                }), (0, CI.jsx)("p", {
                  children: PY(xp, ZL(Yp))
                })]
              })]
            }), (0, CI.jsx)(RS.l, {
              onClick: Sp
            })]
          }), (0, CI.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, CI.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, CI.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, CI.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: xp(sL(Yp), {
                    time: null === jp ? "" : mI(xp, jp)
                  })
                }), (0, CI.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, CI.jsx)("i", {
                    style: {
                      width: (Hp ? 100 * Yp.baf2ColP / YO.NOVA_FOCUS : 0) + "%"
                    }
                  }, yp.current.n)
                }), (0, CI.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, CI.jsxs)("span", {
                    title: AY(xp),
                    children: [(0, CI.jsx)("b", {
                      children: aL(dp.focus)
                    }), " ", xp(`${LY}colFocusPerS`)]
                  }), (0, CI.jsxs)("span", {
                    className: Ro()("Baf2ColDraw", {
                      Short: ep
                    }),
                    children: [(0, CI.jsx)(Xo.d, {
                      name: "bolt"
                    }), ep ? xp(`${LY}colDrawOf`, {
                      draw: aL(Yp.baf2ColDraw),
                      want: aL(Yp.baf2ColWant)
                    }) : xp(`${LY}colPowerPerS`, {
                      rate: aL(dp.draw)
                    })]
                  }), null !== qp && (0, CI.jsx)("span", {
                    className: "Soft",
                    children: qp
                  })]
                })]
              }), (0, CI.jsx)("p", {
                className: Ro()("Baf2ColState", HY(Yp)),
                children: PY(xp, zL(Yp))
              }), null !== mp && (0, CI.jsx)("p", {
                className: "Baf2ColStateFix",
                children: xp(mp)
              }), null === mp && null !== vp && (0, CI.jsx)("p", {
                className: "Baf2ColStateFix",
                children: xp(vp.key, {
                  item: LI(xp, vp.item)
                })
              }), Rp && (0, CI.jsx)("p", {
                className: "Baf2ColStateFix",
                children: xp(Rp.key, {
                  target: LI(xp, Rp.target),
                  amount: String(null !== (cp = Rp.sx) && void 0 !== cp ? cp : 0)
                })
              }), (0, CI.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, CI.jsx)(vY, {
                  item: PO,
                  sx: Yp.baf2ColSa,
                  need: YO.NOVA_SA,
                  cap: YO.SA_CAP
                }), (0, CI.jsx)(vY, {
                  item: WO,
                  sx: Yp.baf2ColGd,
                  need: YO.NOVA_GD,
                  cap: YO.GD_CAP
                }), (0, CI.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, CI.jsx)(tY, {
                    item: "Nova Matter"
                  }), (0, CI.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: xp(`${LY}colNovaHeld`, {
                      amount: String(Yp.baf2ColOut),
                      cap: String(YO.OUT_CAP)
                    })
                  }), tp && (0, CI.jsx)(RS.o, {
                    className: "Baf2ColTake",
                    disabled: 0 === Yp.baf2ColOut,
                    onClick: () => {
                      Lp.send(bL(Yp, "take"))
                    },
                    children: xp(`${LY}colTake`)
                  })]
                })]
              }), tp && (0, CI.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": kp,
                className: Ro()("Baf2ColHold", {
                  On: kp
                }),
                onClick: pp => {
                  pp.detail > 0 && pp.currentTarget.blur(), Pp(!kp), Lp.send(bL(Yp, "hold " + (kp ? 0 : 1)))
                },
                children: [(0, CI.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, CI.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, CI.jsx)("b", {
                    children: xp(`${LY}colHold`)
                  }), (0, CI.jsx)("span", {
                    children: xp(`${LY}colHoldNote`)
                  })]
                })]
              })]
            }), (0, CI.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, CI.jsx)(UY, {
                status: Yp,
                entry: Dp
              }), (0, CI.jsx)("ul", {
                className: "Baf2ColSlots",
                children: GL(Yp.baf2ColLasers, Yp.baf2ColSpots, Yp.baf2ColLive, dp.beamsOn, null !== (op = Yp.baf2ColGaps) && void 0 !== op ? op : 0).map((pp => (0, CI.jsxs)("li", {
                  className: pp.tone,
                  children: [(0, CI.jsx)("b", {
                    children: PY(xp, pp.title)
                  }), null !== pp.hint && (0, CI.jsx)("span", {
                    children: PY(xp, pp.hint)
                  })]
                }, pp.dir)))
              }), (0, CI.jsx)(wY, {
                status: Yp
              })]
            })]
          })]
        })
      })
    }
    const eY = "buildAFactory2Game:",
      uY = 36e5,
      jY = 864e5;

    function kY(pp, ip, cp) {
      return Math.max(0, Math.ceil((pp + ip - Math.max(cp, pp)) / 1e3))
    }

    function mY(pp) {
      return pp.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function RY(pp) {
      return "Homestead" === pp
    }

    function qY(pp) {
      return function(pp) {
        let ip = 0;
        for (const cp of pp) {
          const pp = /^Island ([1-9]\d{0,5})$/.exec(cp);
          pp && (ip = Math.max(ip, Number(pp[1])))
        }
        return `Island ${ip+1}`
      }(pp.map((pp => pp.baf2IslandName)))
    }

    function MY(pp, ip) {
      return function(pp) {
        return `${eY}islandsBlocked${pp[0].toUpperCase()}${pp.slice(1)}`
      }("degraded" === pp && 0 === ip ? "stuck" : pp)
    }

    function CY(pp) {
      return pp.filter((pp => {
        var ip;
        return !pp.baf2IslandActive && void 0 === pp.baf2IslandUnreadable && void 0 === (null === (ip = pp.baf2IslandCoop) || void 0 === ip ? void 0 : ip.baf2CoopState)
      })).length
    }

    function EY(pp) {
      return "coopMoving" === pp || "coopUnreachable" === pp
    }

    function XY(pp, ip) {
      const cp = ip > 0;
      return {
        change: null === pp && !cp,
        switch: (null === pp || "degraded" === pp || EY(pp)) && !cp,
        rename: "loading" !== pp && "degraded" !== pp && "stuck" !== pp
      }
    }

    function lY(pp, ip) {
      return void 0 === pp || "corrupt" === pp && ip
    }
    const QY = TS;

    function JY(pp, ip, cp) {
      if (null !== pp && void 0 !== pp && pp.untilGone) {
        var Op;
        return !("dismiss" === pp.untilGone && void 0 === (null === (Op = ip.baf2IslandCoop) || void 0 === Op ? void 0 : Op.baf2CoopState)) && cp - pp.atMs < 32500
      }
      return void 0 !== pp && cp - pp.atMs < QY && ip.baf2IslandName === pp.from
    }
    const BY = TS;

    function NY(pp) {
      return "core" === (null === pp || void 0 === pp ? void 0 : pp.kind) ? pp.core : "islands" === (null === pp || void 0 === pp ? void 0 : pp.kind) ? pp.backToCore : void 0
    }

    function TY(pp) {
      return `\0${pp}\0`
    }

    function fY(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Op = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const Ip of Object.keys(cp)) Op[Ip] = TY(Ip);
      let op = Object.keys(Op).length > 0 ? pp(ip, Op) : pp(ip);
      for (const [Ip, Sp] of Object.entries(cp)) op = op.split(TY(Ip)).join(Sp);
      return op
    }

    function bY(pp, ip) {
      return pp ? ip ? "enabled" : "disabled" : "hidden"
    }
    const hY = {
      removed: `${eY}islandsCoopRemoved`,
      deleted: `${eY}islandsCoopDeleted`,
      notReady: `${eY}islandsCoopNotReady`,
      gone: `${eY}islandsCoopGone`
    };

    function aY(pp) {
      var ip;
      return "member" !== (null === (ip = pp.baf2IslandCoop) || void 0 === ip ? void 0 : ip.baf2CoopRole) && "newer" !== pp.baf2IslandUnreadable
    }

    function nY(pp, ip, cp, Op, op, Ip) {
      const Sp = pp.baf2IslandActive,
        xp = pp.baf2IslandUnreadable,
        Lp = pp.baf2IslandCoop,
        Yp = function(pp, ip, cp) {
          return {
            switch: pp.switch && void 0 === ip,
            delete: pp.change && lY(ip, cp)
          }
        }(ip, xp, Op),
        Dp = Sp && void 0 !== Lp && void 0 === Lp.baf2CoopState && "coopUnreachable" === Ip,
        Ap = {
          switch: bY((!Sp || Dp) && void 0 === xp, Dp || Yp.switch),
          switchLabel: Dp ? "tryAgain" : "switch",
          rename: bY(!0, ip.rename),
          delete: bY(!Sp, Yp.delete),
          deleteWaits: !Sp && lY(xp, Op),
          people: bY(void 0 !== pp.baf2IslandInvitable || op && Sp && void 0 === xp && void 0 === Lp, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        Pp = !Sp && Yp.delete;
      if (void 0 === Lp) return cp ? {
        ...Ap,
        delete: bY(!Sp, !1),
        deleteWaits: !1,
        note: Pp ? {
          key: `${eY}islandsCoopKeepOwn`
        } : null
      } : Ap;
      const Wp = Lp.baf2CoopState,
        yp = Lp.baf2CoopMembers.length > 1,
        Up = {
          ...Ap,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== Wp && "member" === Lp.baf2CoopRole) return {
        ...Up,
        dismiss: bY(!0, ip.rename),
        note: {
          key: hY[Wp],
          names: {
            owner: Lp.baf2CoopOwner
          }
        }
      };
      if (void 0 !== Wp) {
        let pp = {
          key: `${eY}islandsCoopOwnLost`
        };
        return Pp && yp ? pp = {
          key: `${eY}islandsCoopDeleteMembers`
        } : Pp && cp && (pp = {
          key: `${eY}islandsCoopKeepOwn`
        }), {
          ...Up,
          delete: bY(!Sp, Yp.delete && !yp && !cp),
          deleteWaits: Ap.deleteWaits && !yp && !cp,
          note: pp
        }
      }
      if ("member" === Lp.baf2CoopRole) return {
        ...Ap,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: bY(!0, Sp ? ip.switch : ip.rename)
      };
      const wp = Lp.baf2CoopManageHere;
      let vp = null;
      var tp;
      wp || Sp ? Pp && yp ? vp = {
        key: `${eY}islandsCoopDeleteMembers`
      } : Pp && cp && (vp = {
        key: `${eY}islandsCoopKeepOwn`
      }) : vp = {
        key: null !== (tp = Lp.baf2CoopLeft) && void 0 !== tp && tp.length ? `${eY}islandsCoopManageThereClaim` : `${eY}islandsCoopManageThere`
      };
      return {
        ...Ap,
        rename: bY(!0, ip.rename && wp),
        delete: bY(!Sp, Yp.delete && !yp && !cp),
        deleteWaits: Ap.deleteWaits && !yp && !cp,
        people: "enabled",
        peopleLabel: "players",
        unshare: bY(wp && Sp && !yp, ip.change),
        remove: wp,
        note: vp
      }
    }

    function FY(pp) {
      var ip;
      const cp = pp.baf2IslandCoop;
      if ("owner" !== (null === cp || void 0 === cp ? void 0 : cp.baf2CoopRole) || void 0 !== cp.baf2CoopState || null === (ip = cp.baf2CoopLeft) || void 0 === ip || !ip.length) return null;
      const Op = pp.baf2IslandActive && cp.baf2CoopManageHere;
      return {
        left: cp.baf2CoopLeft,
        claim: Op,
        goThere: !Op && cp.baf2CoopManageHere
      }
    }

    function gY(pp) {
      return pp.baf2CoopMembers.length >= pp.baf2CoopMax
    }

    function GY(pp, ip, cp) {
      return void 0 !== pp && ip < pp.answer && cp - pp.atMs < QY
    }
    const rY = "buildAFactory2Game:";

    function ZY(pp, ip) {
      return {
        onKeyDown: cp => {
          cp.stopPropagation(), cp.nativeEvent.isComposing || 229 === cp.nativeEvent.keyCode || ("Enter" === cp.key ? (cp.preventDefault(), pp()) : "Escape" === cp.key && (cp.preventDefault(), ip()))
        }
      }
    }

    function zY(pp) {
      return {
        onKeyDown: ip => {
          "Escape" !== ip.key || ip.nativeEvent.isComposing || (ip.preventDefault(), ip.stopPropagation(), pp())
        }
      }
    }

    function sY(pp) {
      pp.currentTarget.select()
    }

    function KY(pp, ip) {
      (0, Op.useEffect)((() => {
        var cp;
        pp && (null === (cp = ip.current) || void 0 === cp || cp.scrollIntoView({
          block: "nearest"
        }))
      }), [pp, ip])
    }

    function VY(pp) {
      const [ip, cp] = (0, Op.useState)(null);
      return (0, Op.useEffect)((() => {
        const ip = document.querySelector(".UiRequests"),
          Op = pp.current;
        if (!ip || !Op || "undefined" === typeof ResizeObserver) return;
        const op = () => {
          const pp = ip.getBoundingClientRect(),
            op = Op.getBoundingClientRect(),
            Ip = Op.parentElement,
            Sp = Ip && parseFloat(getComputedStyle(Ip).paddingTop) || 0,
            xp = function(pp, ip, cp, Op) {
              if (!pp || pp.height <= 0 || pp.right <= ip.left || pp.left >= ip.right) return null;
              const op = Math.max(Op, pp.bottom + 8);
              return {
                marginTop: Math.round(op - Op),
                maxHeight: Math.max(0, Math.floor(cp - op - Op))
              }
            }(pp, op, window.innerHeight, Sp);
          cp((pp => (null === pp || void 0 === pp ? void 0 : pp.marginTop) === (null === xp || void 0 === xp ? void 0 : xp.marginTop) && (null === pp || void 0 === pp ? void 0 : pp.maxHeight) === (null === xp || void 0 === xp ? void 0 : xp.maxHeight) ? pp : xp))
        };
        op();
        const Ip = new ResizeObserver(op);
        return Ip.observe(ip), window.addEventListener("resize", op), () => {
          Ip.disconnect(), window.removeEventListener("resize", op)
        }
      }), [pp]), ip
    }

    function pD() {
      (0, Op.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function iD(pp) {
      (0, Op.useEffect)((() => {
        var ip;
        null === (ip = pp.current) || void 0 === ip || ip.focus()
      }), [pp])
    }

    function cD(pp) {
      const [ip, cp] = (0, Op.useState)(Date.now);
      return (0, Op.useEffect)((() => {
        const ip = window.setInterval((() => {
          cp(Date.now())
        }), pp);
        return () => {
          window.clearInterval(ip)
        }
      }), [pp]), ip
    }

    function OD(pp) {
      let {
        tier: ip,
        t: cp
      } = pp;
      const {
        kind: Op,
        short: op
      } = wp(ip), Ip = Wp(ip, yp), Sp = cp(`${rY}${Ip.key}`, {
        ...Ip.params,
        name: cp(`${rY}${vp(ip).nameKey}`)
      });
      return (0, CI.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, CI.jsx)("span", {
          className: Ro()("Baf2IslandTierPip", {
            Stage: "tier" !== Op
          }),
          "aria-hidden": "true",
          children: op
        }), Sp]
      })
    }

    function oD(pp) {
      let {
        note: ip,
        className: cp,
        t: Op
      } = pp;
      return (0, CI.jsx)("p", {
        className: Ro()("Baf2IslandNote", cp),
        children: fY(Op, ip.key, ip.names, ip.params)
      })
    }
    const ID = "buildAFactory2Game:";

    function SD(pp) {
      let {
        message: ip,
        arrivedAtMs: cp,
        close: op,
        leave: Ip
      } = pp;
      const Sp = gS(),
        {
          t: xp
        } = (0, Eo.H)(),
        Lp = cD(1e3),
        Yp = (0, Op.useRef)(null);
      pD(), (0, Op.useEffect)((() => {
        var pp;
        null === (pp = Yp.current) || void 0 === pp || pp.focus()
      }), []);
      const Dp = kY(cp, ip.baf2TransferInMs, Lp),
        Ap = cp + ip.baf2TransferInMs - 1e3,
        [Pp, Wp] = (0, Op.useState)(null);
      (0, Op.useEffect)((() => {
        const pp = window.setTimeout((() => {
          Wp(Ap)
        }), Math.max(0, Ap - Date.now()));
        return () => {
          window.clearTimeout(pp)
        }
      }), [Ap]);
      const yp = Pp === Ap || Lp >= Ap,
        Up = ip.baf2TransferIsland,
        wp = ip.baf2TransferOwner;
      return (0, CI.jsx)(mS.c, {
        close: op,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, CI.jsxs)("section", {
          ref: Yp,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, CI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CI.jsxs)("div", {
              children: [(0, CI.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === wp ? fY(xp, `${ID}islandsTransferOwn`, {
                  island: Up
                }) : fY(xp, `${ID}islandsTransfer`, {
                  island: Up,
                  owner: wp
                })
              }), (0, CI.jsx)("p", {
                children: yp ? xp(`${ID}islandsTransferNow`) : xp(`${ID}islandsTransferIn`, {
                  time: mI(xp, Dp)
                })
              })]
            }), (0, CI.jsx)(RS.l, {
              ariaLabel: xp(`${ID}islandsClose`),
              onClick: op
            })]
          }), !yp && (0, CI.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, CI.jsx)("p", {
              className: "Baf2TransferNote",
              children: xp(`${ID}islandsTransferNote`)
            }), (0, CI.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, CI.jsx)(RS.f, {
                onClick: () => {
                  Sp.send("baf2coopstay"), Ip()
                },
                children: xp(`${ID}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var xD = cp(1476),
      LD = cp(1151),
      YD = cp.n(LD);
    const DD = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const AD = "buildAFactory2Game:",
      PD = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function WD(pp, ip, cp) {
      return void 0 === ip ? cp : "string" === typeof ip ? ip : Array.isArray(ip) ? ip.map((ip => "string" === typeof ip ? ip : "translationKey" in ip ? pp(ip.translationKey) : "")).join("") : pp(ip.translationKey)
    }

    function yD(pp) {
      const ip = {};
      for (const [cp, Op] of Object.entries(null !== pp && void 0 !== pp ? pp : {})) ip[cp] = Op < 0 ? kI(Op) : Op.toLocaleString("en-US");
      return ip
    }

    function UD(pp, ip) {
      const cp = ip ? "touch" : "mouse";
      return {
        use: pp(`${AD}lookUse_${cp}`),
        Use: pp(`${AD}lookUseStart_${cp}`)
      }
    }
    const wD = (0, Op.memo)((function(pp) {
      let {
        item: ip
      } = pp;
      return (0, CI.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, CI.jsx)(Qo.d, {
          itemName: ip,
          amount: 0
        })
      })
    }));

    function vD(pp) {
      let {
        label: ip,
        percent: cp,
        progress: Op
      } = pp;
      return (0, CI.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, CI.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${ip}: ${Op}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": cp,
          children: (0, CI.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${cp}%`
            }
          })
        }), (0, CI.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: Op
        })]
      })
    }

    function tD(pp) {
      let {
        chips: ip
      } = pp;
      return (0, CI.jsx)("span", {
        className: "Baf2QuestChips",
        children: ip.map((pp => {
          let [ip, cp, Op] = pp;
          const op = cp >= Op;
          return (0, CI.jsxs)("span", {
            className: Ro()("Baf2QuestChip", {
              Met: op
            }),
            children: [(0, CI.jsx)(wD, {
              item: ip
            }), (0, CI.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: op ? `\u2713${Op}` : `${cp}/${Op}`
            })]
          }, ip)
        }))
      })
    }

    function HD(pp, ip) {
      const {
        key: cp,
        params: Op
      } = Wp(ip, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return pp(`${AD}${cp}`, {
        ...Op,
        name: pp(`${AD}${vp(ip).nameKey}`)
      })
    }

    function dD(pp) {
      let {
        core: ip,
        t: cp
      } = pp;
      const [Op, op] = ip, Ip = op > 0 ? Math.floor(100 * Op / op) : 100;
      return (0, CI.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": cp(`${AD}questCoreLabel`, {
          have: String(Op),
          need: String(op)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Ip,
        children: [(0, CI.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: cp(`${AD}questCore`, {
            percent: String(Ip)
          })
        }), (0, CI.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, CI.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${Ip}%`
            }
          })
        })]
      })
    }

    function eD(pp) {
      let {
        rows: ip,
        t: cp
      } = pp;
      const Op = ip.filter((pp => pp.done)).length;
      return (0, CI.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": cp(`${AD}questStepsProgress`, {
          done: String(Op),
          total: String(ip.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": ip.length,
        "aria-valuenow": Op,
        children: ip.map((pp => (0, CI.jsx)("span", {
          className: Ro()("Baf2QuestSegment", {
            Done: pp.done,
            Current: pp.current
          })
        }, pp.id)))
      })
    }
    const uD = (0, Op.memo)(kD, jD);

    function jD(pp, ip) {
      const cp = cp => pp.view.itemNames[cp] === ip.view.itemNames[cp];
      return pp.t === ip.t && pp.extra === ip.extra && (null === pp.row.item || cp(pp.row.item)) && pp.row.madeFor.every(cp) && pp.row.also.every(cp) && YD()(pp.row, ip.row)
    }

    function kD(pp) {
      let {
        row: ip,
        view: cp,
        t: Op,
        extra: op
      } = pp;
      const {
        isTouchScreen: Ip
      } = (0, jo.o)(["isTouchScreen"]), Sp = ip.item ? function(pp, ip, cp) {
        return 1 !== cp && DD.has(pp) ? Co(ip) : null
      }(ip.key, ip.item, ip.total) : null, xp = Sp ? Op(Sp) : ip.item ? WD(Op, cp.itemNames[ip.item], ip.item) : "", Lp = ip.also.map((pp => WD(Op, cp.itemNames[pp], pp))), Yp = Lp.join(", "), Dp = function(pp, ip) {
        var cp;
        return ip.length < 2 ? null !== (cp = ip[0]) && void 0 !== cp ? cp : "" : pp(`${AD}listAnd`, {
          rest: ip.slice(0, -1).join(pp(`${AD}listComma`)),
          last: ip[ip.length - 1]
        })
      }(Op, [xp, ...Lp]), Ap = Op(`${AD}${ip.key}`, {
        ...UD(Op, Ip),
        ...yD(ip.params),
        item: xp,
        also: Yp,
        itemList: Dp,
        total: String(ip.total)
      }), [Pp, ...Wp] = Ap.split("\n"), yp = ip.total > 1 && !ip.done && !ip.away;
      return (0, CI.jsxs)("li", {
        className: Ro()("Baf2QuestStep", {
          Done: ip.done,
          Current: ip.current,
          JustFinished: ip.justFinished,
          Away: ip.away
        }),
        children: [!ip.done && null !== ip.item && (0, CI.jsx)(wD, {
          item: ip.item
        }), (ip.done || null === ip.item) && (0, CI.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: ip.done ? "\u2713" : "\u25cb"
        }), (0, CI.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, CI.jsx)("strong", {
            children: Pp
          }), Wp.length > 0 && (0, CI.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Wp.join(" ")
          }), !ip.done && ip.madeFor.length > 0 && (0, CI.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: Op("buildAFactory2Game:questRowFor", {
              items: ip.madeFor.map((pp => WD(Op, cp.itemNames[pp], pp))).join(" \u2192 ")
            })
          }), yp && (0, CI.jsx)(vD, {
            label: Pp,
            percent: Math.round(100 * ip.amount / ip.total),
            progress: `${ip.amount.toLocaleString("en-US")}/${ip.total.toLocaleString("en-US")}`
          }), !ip.done && !ip.away && ip.chips && ip.chips.length > 0 && (0, CI.jsx)(tD, {
            chips: ip.chips
          }), op]
        })]
      })
    }
    const mD = "buildAFactory2Game:",
      RD = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      qD = {
        on: `${mD}tutorialButtonOn`,
        hud: `${mD}tutorialButtonHud`,
        off: `${mD}tutorialButtonOff`
      },
      MD = {
        on: `${mD}tutorialPickedOn`,
        hud: `${mD}tutorialPickedHud`,
        off: `${mD}tutorialPickedOff`
      };
    class CD {
      constructor(pp, ip, cp) {
        this.commands = pp, this.quests = ip, this.toasts = cp
      }
      next() {
        const pp = function(pp) {
            return lp[(lp.indexOf(pp) + 1) % lp.length]
          }(this.quests.get().tutorial),
          ip = this.quests.setTutorial(pp);
        this.commands.send(`baf2tutorial ${pp} ${ip}`), this.toasts.show({
          baf2ToastText: [(0, Jp.Nd)({
            translationKey: MD[pp]
          }, Jp.N.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function ED(pp, ip) {
      let [cp, Op] = ip;
      return pp(`${AD}${cp}`, yD(Op))
    }

    function XD(pp) {
      let [ip, cp] = pp;
      return ip + JSON.stringify(cp)
    }

    function lD(pp) {
      let {
        goal: ip,
        t: cp
      } = pp;
      return ip ? (0, CI.jsx)("span", {
        className: "Baf2BookGoal",
        children: cp(`${AD}${ip}`)
      }) : null
    }

    function QD(pp) {
      let {
        view: ip,
        t: cp
      } = pp;
      if (!ip.name) return null;
      const Op = ro(ip.rows);
      return (0, CI.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, CI.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: cp(`${AD}currentQuest`)
        }), (0, CI.jsx)("strong", {
          className: "Baf2BookTitle",
          children: ED(cp, ip.name)
        }), (0, CI.jsx)(lD, {
          goal: ip.goal,
          t: cp
        }), Op.length > 1 && (0, CI.jsx)(eD, {
          rows: Op,
          t: cp
        }), (0, CI.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: ip.rows.map((pp => (0, CI.jsx)(uD, {
            row: pp,
            view: ip,
            t: cp
          }, pp.id)))
        }), ip.reward && (0, CI.jsxs)("span", {
          className: "Baf2BookReward",
          children: [cp(`${AD}questReward`), (0, CI.jsx)(wD, {
            item: ip.reward
          }), WD(cp, ip.itemNames[ip.reward], ip.reward)]
        })]
      })
    }

    function JD(pp) {
      let {
        quest: ip,
        upcoming: cp,
        t: Op
      } = pp;
      return (0, CI.jsxs)("li", {
        className: Ro()("Baf2BookQuest", {
          Done: ip[3],
          Upcoming: cp
        }),
        children: [(0, CI.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: ip[3] ? "\u2713" : "\u25cb"
        }), (0, CI.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, CI.jsx)("strong", {
            className: "Baf2BookTitle",
            children: ED(Op, ip)
          }), (0, CI.jsx)(lD, {
            goal: ip[2],
            t: Op
          })]
        })]
      })
    }

    function BD(pp) {
      let {
        done: ip,
        total: cp,
        t: Op
      } = pp;
      const op = cp > 0 ? Math.round(100 * ip / cp) : 0,
        Ip = Op(`${AD}questBookChapterProgress`, {
          done: String(ip),
          total: String(cp)
        });
      return (0, CI.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, CI.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": Ip,
          "aria-valuemin": 0,
          "aria-valuemax": cp,
          "aria-valuenow": ip,
          children: (0, CI.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${op}%`
            }
          })
        }), (0, CI.jsx)("span", {
          className: "Baf2BookProgressText",
          children: Ip
        })]
      })
    }

    function ND(pp) {
      let {
        view: ip,
        tier: cp,
        quests: Op,
        t: op
      } = pp;
      const Ip = cp === ip.tier,
        Sp = (null !== Op && void 0 !== Op ? Op : []).filter((pp => !pp[4])),
        xp = (null !== Op && void 0 !== Op ? Op : []).filter((pp => pp[4])),
        Lp = Sp.filter((pp => pp[3])).length,
        Yp = Ip && ip.name ? XD(ip.name) : null,
        Dp = Sp.findIndex((pp => !pp[3] && XD(pp) === Yp));
      return (0, CI.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, CI.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, CI.jsx)("h3", {
            children: HD(op, cp)
          }), Sp.length > 0 && (0, CI.jsx)(BD, {
            done: Lp,
            total: Sp.length,
            t: op
          }), Ip && ip.core && (0, CI.jsx)(dD, {
            core: ip.core,
            t: op
          })]
        }), (0, CI.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === Op && Ip && (0, CI.jsx)(QD, {
            view: ip,
            t: op
          }), Sp.map(((pp, cp) => cp === Dp ? (0, CI.jsx)(QD, {
            view: ip,
            t: op
          }, XD(pp)) : (0, CI.jsx)(JD, {
            quest: pp,
            upcoming: !pp[3],
            t: op
          }, XD(pp))))]
        }), Ip && ip.side && (0, CI.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, CI.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: op(`${AD}questSide`)
          }), (0, CI.jsx)("strong", {
            className: "Baf2BookTitle",
            children: ED(op, ip.side.name)
          }), (0, CI.jsx)(lD, {
            goal: ip.side.goal,
            t: op
          }), (0, CI.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, CI.jsx)(uD, {
              row: ip.side.row,
              view: ip,
              t: op
            })
          })]
        }), xp.length > 0 && (0, CI.jsxs)(CI.Fragment, {
          children: [(0, CI.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: op(`${AD}questBookSidesDone`)
          }), (0, CI.jsx)("ol", {
            className: "Baf2BookQuests",
            children: xp.map((pp => (0, CI.jsx)(JD, {
              quest: pp,
              upcoming: !1,
              t: op
            }, XD(pp))))
          })]
        })]
      })
    }

    function TD(pp) {
      var ip, cp, Ip;
      let {
        store: Sp,
        tutorial: xp,
        close: Lp
      } = pp;
      const {
        t: Yp
      } = (0, Eo.H)(), Ap = (0, xD.i)(bo, Sp.get()), Pp = null !== (ip = Ap.tier) && void 0 !== ip ? ip : 1, [Wp, yp] = (0, Op.useState)(null), vp = (null === Wp || void 0 === Wp ? void 0 : Wp.at) === Pp ? Wp.tier : Pp, tp = (0, Op.useRef)(null), Hp = null !== Ap.chapters;
      (0, Op.useEffect)((() => {
        var pp;
        tp.current && (tp.current.scrollTop = 0);
        const ip = null === (pp = tp.current) || void 0 === pp ? void 0 : pp.querySelector(".Baf2BookQuest.Current");
        if (tp.current && ip) {
          const pp = ip.getBoundingClientRect().bottom - tp.current.getBoundingClientRect().bottom;
          pp > 0 && (tp.current.scrollTop += Math.min(pp, ip.getBoundingClientRect().top - tp.current.getBoundingClientRect().top))
        }
      }), [vp, Hp]);
      const dp = null === (cp = Ap.chapters) || void 0 === cp ? void 0 : cp.find((pp => {
        let [ip] = pp;
        return ip === vp
      }));
      return (0, CI.jsx)(mS.c, {
        close: Lp,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, CI.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: PD,
          children: [(0, CI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CI.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: Yp(`${AD}questBookTitle`)
            }), (0, CI.jsx)(RS.o, {
              className: "Baf2BookTutorialButton",
              disabled: !Ap.tutorialKnown,
              ariaLabel: Yp(qD[Ap.tutorial]),
              title: Yp(qD[Ap.tutorial]),
              onClick: () => {
                xp.next()
              },
              children: (0, CI.jsx)(Xo.d, {
                name: RD[Ap.tutorial]
              })
            }), (0, CI.jsx)(RS.l, {
              onClick: Lp
            })]
          }), (0, CI.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": Yp(`${AD}questBookChapters`),
            "data-pad-initial-area": !0,
            children: op.slice(0, Dp()).map(((pp, ip) => {
              const cp = ip + 1,
                {
                  kind: Op,
                  short: op
                } = wp(cp),
                Ip = Up(cp, Pp),
                Sp = Ip ? Yp(`${AD}coreAtomicHidden`) : HD(Yp, cp);
              return (0, CI.jsx)("li", {
                children: (0, CI.jsx)("button", {
                  type: "button",
                  className: Ro()({
                    Stage: "tier" !== Op,
                    Atomic: "atomic" === Op,
                    Current: cp === Pp,
                    Selected: cp === vp
                  }),
                  disabled: cp > Pp,
                  "aria-pressed": cp === vp,
                  "aria-label": Sp,
                  title: Ip ? void 0 : Sp,
                  onClick: () => {
                    yp({
                      tier: cp,
                      at: Pp
                    })
                  },
                  children: Ip ? "?" : op
                })
              }, pp.nameKey)
            }))
          }), (0, CI.jsxs)("div", {
            ref: tp,
            className: "Baf2BookBody",
            children: [go(Ap) && vp === Pp && (0, CI.jsx)("p", {
              className: "Baf2BookEmpty",
              children: Yp(`${AD}questBookAllDone`)
            }), (0, CI.jsx)(ND, {
              view: Ap,
              tier: vp,
              quests: null !== (Ip = null === dp || void 0 === dp ? void 0 : dp[1]) && void 0 !== Ip ? Ip : null,
              t: Yp
            })]
          })]
        })
      })
    }
    const fD = "buildAFactory2Game:";

    function bD(pp) {
      let {
        tiers: ip,
        from: cp,
        tier: Op,
        shown: op,
        SW: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Eo.H)(), xp = ip.map(((pp, ip) => {
        const xp = cp + ip,
          {
            kind: Lp,
            short: Yp
          } = wp(xp),
          Dp = Up(xp, Op);
        return (0, CI.jsx)("li", {
          children: (0, CI.jsx)("button", {
            type: "button",
            className: Ro()({
              Stage: "tier" !== Lp,
              Silhouette: Dp,
              Reached: xp <= Op,
              Current: xp === Op,
              Next: xp === Op + 1,
              Selected: xp === op
            }),
            disabled: Dp,
            "aria-pressed": xp === op,
            "aria-label": Dp ? Sp(`${fD}coreAtomicHidden`) : void 0,
            title: Dp ? void 0 : Sp(`${fD}${pp.nameKey}`),
            onClick: () => {
              Ip(xp)
            },
            children: Dp ? "?" : Yp
          })
        }, pp.nameKey)
      }));
      return (0, CI.jsx)(CI.Fragment, {
        children: xp
      })
    }

    function hD(pp) {
      let {
        id: ip,
        label: cp,
        tiers: Op,
        from: op,
        ...Ip
      } = pp;
      return (0, CI.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, CI.jsx)("span", {
          id: ip,
          className: "Baf2CoreLadderLabel",
          children: cp
        }), (0, CI.jsx)("ol", {
          "aria-labelledby": ip,
          children: (0, CI.jsx)(bD, {
            ...Ip,
            tiers: Op,
            from: op
          })
        })]
      })
    }

    function aD(pp) {
      const {
        t: ip
      } = (0, Eo.H)(), cp = op.findIndex((pp => void 0 !== pp.stage)), Op = op.findIndex((pp => void 0 !== pp.reactorTier)), Ip = cp < 0 ? op : op.slice(0, cp), Sp = cp < 0 ? [] : op.slice(cp, Op < 0 ? void 0 : Op), Lp = Op < 0 || !xp() ? [] : op.slice(Op);
      return (0, CI.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, CI.jsx)(hD, {
          ...pp,
          id: "baf2CoreTiersLabel",
          label: ip(`${fD}coreTiersLabel`),
          tiers: Ip,
          from: 1
        }), Sp.length > 0 && (0, CI.jsx)(hD, {
          ...pp,
          id: "baf2CoreStagesLabel",
          label: ip(`${fD}coreStagesLabel`),
          tiers: Sp,
          from: cp + 1
        }), Lp.length > 0 && (0, CI.jsx)(hD, {
          ...pp,
          id: "baf2CoreAtomicLabel",
          label: ip(`${fD}coreAtomicLabel`),
          tiers: Lp,
          from: Op + 1
        })]
      })
    }
    const nD = "buildAFactory2Game:";

    function FD(pp) {
      let {
        item: ip,
        itemNames: cp,
        children: Op
      } = pp;
      return (0, CI.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, CI.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, CI.jsx)(Qo.d, {
            itemName: ip,
            amount: 0
          })
        }), (0, CI.jsx)(Jo.e, {
          text: cp[ip]
        }), Op]
      })
    }

    function gD(pp) {
      const ip = new Map;
      for (const {
          block: Op
        }
        of pp.newDeposits) {
        var cp;
        ip.set(Op, (null !== (cp = ip.get(Op)) && void 0 !== cp ? cp : 0) + 1)
      }
      return [...ip]
    }

    function GD(pp) {
      let {
        value: ip,
        label: cp,
        more: Op
      } = pp;
      return (0, CI.jsxs)("li", {
        children: [(0, CI.jsx)("strong", {
          children: ip
        }), (0, CI.jsx)("span", {
          children: cp
        }), Op > 0 && (0, CI.jsxs)("em", {
          children: ["+", Op]
        })]
      })
    }

    function rD(pp) {
      let {
        items: ip,
        itemNames: cp
      } = pp;
      const {
        t: op
      } = (0, Eo.H)(), [Ip, Sp] = (0, Op.useState)(null), xp = null !== Ip && ip.includes(Ip) ? Ip : null;
      return (0, CI.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, CI.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: op(`${nD}coreRewardUnlocks`)
        }), (0, CI.jsx)("ul", {
          children: ip.map((pp => (0, CI.jsx)("li", {
            children: (0, CI.jsx)("button", {
              type: "button",
              className: Ro()("Baf2PanelIcon", {
                Picked: pp === xp
              }),
              title: LI(op, pp),
              "aria-label": LI(op, pp),
              "aria-pressed": pp === xp,
              onClick: () => {
                Sp(pp === xp ? null : pp)
              },
              children: (0, CI.jsx)(Qo.d, {
                itemName: pp,
                amount: 0
              })
            })
          }, pp)))
        }), (0, CI.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== xp && (0, CI.jsxs)(CI.Fragment, {
            children: [(0, CI.jsx)(Jo.e, {
              text: cp[xp]
            }), " \xb7 ", (0, CI.jsx)(Jo.e, {
              text: cp[Ep(xp)]
            })]
          }), null === xp && op(`${nD}coreRecipeTap`)]
        })]
      })
    }

    function ZD(pp) {
      var ip, cp;
      let {
        def: Op,
        tier: op,
        itemNames: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Eo.H)(), xp = op > 1 ? vp(op - 1) : void 0, Lp = Math.round(2 * Op.islandRadius), Yp = xp ? Math.round(2 * xp.islandRadius) : Lp, Dp = op >= 3 ? kO(op) : null;
      return (0, CI.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, CI.jsxs)("ul", {
          className: Ro()("Baf2CoreStats", {
            Four: null !== Dp
          }),
          children: [(0, CI.jsx)(GD, {
            value: `${Lp}\xd7${Lp}`,
            label: Sp(`${nD}coreStatIsland`),
            more: Lp - Yp
          }), (0, CI.jsx)(GD, {
            value: String(Op.machineAllowance),
            label: Sp(`${nD}coreStatMachines`),
            more: Op.machineAllowance - (null !== (ip = null === xp || void 0 === xp ? void 0 : xp.machineAllowance) && void 0 !== ip ? ip : Op.machineAllowance)
          }), (0, CI.jsx)(GD, {
            value: String(Op.beltAllowance),
            label: Sp(`${nD}coreStatBelts`),
            more: Op.beltAllowance - (null !== (cp = null === xp || void 0 === xp ? void 0 : xp.beltAllowance) && void 0 !== cp ? cp : Op.beltAllowance)
          }), null !== Dp && (0, CI.jsx)(GD, {
            value: String(Dp),
            label: Sp(`${nD}coreStatStorage`),
            more: Dp - (xp ? kO(op - 1) : Dp)
          })]
        }), Op.reward && (0, CI.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, CI.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Sp(`${nD}coreRewardItem`)
          }), (0, CI.jsx)(FD, {
            item: Op.reward,
            itemNames: Ip
          })]
        }), Op.newDeposits.length > 0 && (0, CI.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, CI.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: Sp(Op.newDeposits.length > 1 ? `${nD}coreRewardDeposits` : `${nD}coreRewardDeposit`)
          }), gD(Op).map((pp => {
            let [ip, cp] = pp;
            return (0, CI.jsx)(FD, {
              item: ip,
              itemNames: Ip,
              children: cp > 1 && ` \xd7${cp}`
            }, ip)
          }))]
        }), Op.unlocks.length > 0 && (0, CI.jsx)(rD, {
          items: Op.unlocks,
          itemNames: Ip
        }), (0, CI.jsx)(zD, {
          tier: op
        })]
      })
    }

    function zD(pp) {
      let {
        tier: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)(), Op = to[ip];
      if (!Op) return null;
      const op = vo(ip, 0, 0).barrierMax !== vo(ip - 1, 0, 0).barrierMax;
      return (0, CI.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, CI.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, CI.jsx)(Qo.d, {
            itemName: op ? Ao.Chestplate : Do,
            amount: 0
          })
        }), cp(`${nD}gearPerkLine`, {
          perk: cp(`${nD}${Op}`)
        })]
      })
    }

    function sD(pp, ip) {
      return null === pp ? ip : pp.value
    }

    function KD(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === pp || cp - pp.atMs >= Op ? null : op(pp.value, ip) ? pp.armed ? null : pp : pp.armed ? pp : {
        ...pp,
        armed: !0
      }
    }

    function VD(pp, ip) {
      const cp = ip.filter((ip => {
        var cp;
        return !1 !== (null === (cp = pp.get(ip)) || void 0 === cp ? void 0 : cp.value)
      }));
      for (const [Op, op] of pp) op.value && !ip.includes(Op) && cp.push(Op);
      return cp
    }

    function pA(pp, ip, cp, op) {
      const [Ip, Sp] = (0, Op.useState)((() => new Map)), xp = () => {
        Sp((ip => function(pp, ip, cp, Op) {
          var op;
          let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            Sp = null;
          for (const [xp, Lp] of pp) {
            const op = KD(Lp, ip(xp), cp, Op, Ip);
            op !== Lp && (Sp ??= new Map(pp), null === op ? Sp.delete(xp) : Sp.set(xp, op))
          }
          return null !== (op = Sp) && void 0 !== op ? op : pp
        }(ip, pp, Date.now(), cp, op)))
      };
      (0, Op.useEffect)((() => {
        xp()
      }), [ip, cp]), (0, Op.useEffect)((() => {
        if (0 === Ip.size) return;
        const pp = Math.min(...[...Ip.values()].map((pp => pp.atMs))),
          ip = setTimeout(xp, Math.max(0, pp + cp - Date.now()) + 1);
        return () => {
          clearTimeout(ip)
        }
      }), [Ip, ip, cp]);
      return [Ip, (ip, cp) => {
        Sp((Op => {
          const Ip = new Map(Op);
          return Ip.set(ip, function(pp, ip, cp) {
            return {
              value: pp,
              atMs: cp,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(pp, ip)
            }
          }(cp, pp(ip), Date.now(), op)), Ip
        }))
      }]
    }
    const iA = "buildAFactory2Game:";

    function cA(pp) {
      let {
        message: ip,
        itemNames: cp
      } = pp;
      const op = gS(),
        {
          t: Ip
        } = (0, Eo.H)(),
        [Sp, xp] = (0, Op.useState)(!1),
        [Lp, Yp] = function(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TS;
          const [cp, Op] = pA((ip => pp.includes(ip)), pp, ip, Object.is);
          return [VD(cp, pp), Op]
        }(ip.baf2CoreBankPaused),
        Dp = new Set(Lp),
        Ap = [...ip.baf2CoreBanked];
      for (const Op of Dp) Ap.some((pp => {
        let [ip] = pp;
        return ip === Op
      })) || Ap.push([Op, 0]);
      return 0 === Ap.length ? null : (0, CI.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, CI.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": Sp,
          onClick: () => {
            xp(!Sp)
          },
          children: [(0, CI.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: Ip(`${iA}coreBankedLater`)
          }), (0, CI.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: Ap.map((pp => {
              let [ip, cp] = pp;
              const Op = Dp.has(ip);
              return (0, CI.jsxs)("span", {
                className: Ro()({
                  Paused: Op
                }),
                title: Op ? Ip(`${iA}coreBankPausedTag`) : void 0,
                children: [(0, CI.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, CI.jsx)(Qo.d, {
                    itemName: ip,
                    amount: 0
                  })
                }), cp, Op && (0, CI.jsx)(Xo.d, {
                  name: "pause"
                })]
              }, ip)
            }))
          }), (0, CI.jsx)(Xo.d, {
            name: Sp ? "angle-up" : "angle-down"
          })]
        }), Sp && (0, CI.jsxs)(CI.Fragment, {
          children: [(0, CI.jsx)("ul", {
            children: Ap.map((pp => {
              let [ip, Op] = pp;
              const Sp = Dp.has(ip);
              return (0, CI.jsxs)("li", {
                children: [(0, CI.jsxs)(FD, {
                  item: ip,
                  itemNames: cp,
                  children: [(0, CI.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: Op
                  }), Sp && (0, CI.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: Ip(`${iA}coreBankPausedTag`)
                  })]
                }), (0, CI.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, CI.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === Op,
                    onClick: () => {
                      op.send(`baf2corewithdraw ${Op} ${ip}`)
                    },
                    children: Ip(`${iA}coreTake`)
                  }), (0, CI.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      op.send(`${dp} ${ip}`), Yp(ip, !Sp)
                    },
                    children: Ip(Sp ? `${iA}coreBankResume` : `${iA}coreBankStop`)
                  })]
                })]
              }, ip)
            }))
          }), (0, CI.jsx)("p", {
            className: "Baf2CoreHint",
            children: Ip(`${iA}coreBankNote`)
          })]
        })]
      })
    }
    const OA = "buildAFactory2Game:";

    function oA(pp) {
      const ip = Math.max(0, Math.floor(pp));
      return `${Math.floor(ip/60)}:${String(ip%60).padStart(2,"0")}`
    }

    function IA(pp) {
      let {
        item: ip
      } = pp;
      return (0, CI.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, CI.jsx)(Qo.d, {
          itemName: ip,
          amount: 0
        })
      })
    }

    function SA() {
      return (0, CI.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, CI.jsx)(Xo.d, {
          name: "bolt"
        })
      })
    }

    function xA(pp) {
      let {
        charge: ip,
        hint: cp,
        itemNames: Op
      } = pp;
      const op = gS(),
        {
          t: Ip
        } = (0, Eo.H)(),
        [Sp, xp, Lp, Yp, Dp, Ap, Pp] = ip,
        [Wp, yp] = function(pp) {
          var ip;
          let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TS,
            Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [op, Ip] = pA((() => pp), pp, cp, Op);
          return [sD(null !== (ip = op.get("")) && void 0 !== ip ? ip : null, pp), pp => {
            Ip("", pp)
          }]
        }(Pp),
        Up = Wp === Pp ? Ap : !Wp,
        wp = Yp >= Dp,
        vp = Sp.find((pp => {
          let [, ip, cp] = pp;
          return cp < .9 * ip
        }));
      let tp = `${OA}coreChargeWaiting`,
        Hp = {};
      return wp ? tp = `${OA}coreChargeDone` : Wp ? tp = `${OA}coreChargeStopped` : Up && cp ? (tp = `${OA}${cp[0]}`, Hp = {
        item: LI(Ip, cp[1])
      }) : Up && vp ? (tp = `${OA}coreChargeShort`, Hp = {
        item: LI(Ip, vp[0])
      }) : Up && xp > 0 && !Lp ? tp = `${OA}coreChargePower` : Up && (tp = `${OA}coreChargeRunning`), (0, CI.jsxs)("div", {
        className: Ro()("Baf2CoreCharge", {
          Waiting: !Up && !wp,
          Done: wp
        }),
        children: [(0, CI.jsxs)("h4", {
          children: [Ip(`${OA}coreChargeTitle`), (0, CI.jsx)("span", {
            children: Ip(`${OA}coreChargeProgress`, {
              done: oA(Yp),
              need: oA(Dp)
            })
          })]
        }), (0, CI.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, CI.jsx)("div", {
            style: {
              width: 100 * Math.min(Yp, Dp) / Dp + "%"
            }
          })
        }), (0, CI.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [Sp.map((pp => {
            var ip;
            let [cp, op, Sp] = pp;
            const xp = Sp >= .9 * op;
            return (0, CI.jsxs)("li", {
              className: Ro()({
                Done: xp,
                Short: Up && !xp
              }),
              children: [(0, CI.jsx)(IA, {
                item: cp
              }), (0, CI.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, CI.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, CI.jsx)(Jo.e, {
                    text: null !== (ip = Op[cp]) && void 0 !== ip ? ip : cp
                  }), (0, CI.jsx)("span", {
                    children: Ip(`${OA}coreChargeItem`, {
                      now: String(Sp),
                      need: String(op)
                    })
                  })]
                }), (0, CI.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, CI.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*Sp/op)}%`
                    }
                  })
                })]
              })]
            }, cp)
          })), xp > 0 && (0, CI.jsxs)("li", {
            className: Ro()("Baf2CoreChargePower", {
              Short: Up && !Lp
            }),
            children: [(0, CI.jsx)(SA, {}), (0, CI.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, CI.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, CI.jsx)("span", {
                  children: Ip(`${OA}coreChargePowerRow`, {
                    power: Kp(xp)
                  })
                })
              })
            })]
          })]
        }), (0, CI.jsx)("p", {
          className: "Baf2CoreHint",
          children: Ip(tp, Hp)
        }), !wp && (Up || Wp) && (0, CI.jsx)("button", {
          type: "button",
          className: Ro()("Baf2CoreChargeToggle", {
            Stopped: Wp
          }),
          onClick: () => {
            op.send(jp), yp(!Wp)
          },
          children: Ip(Wp ? `${OA}coreChargeRestart` : `${OA}coreChargeStop`)
        })]
      })
    }

    function LA(pp) {
      let {
        charge: ip,
        reached: cp,
        itemNames: Op
      } = pp;
      const {
        t: op
      } = (0, Eo.H)();
      return (0, CI.jsxs)("div", {
        className: Ro()("Baf2CoreCharge", {
          Done: cp
        }),
        children: [(0, CI.jsxs)("h4", {
          children: [op(`${OA}coreChargeTitle`), (0, CI.jsx)("span", {
            children: op(`${OA}coreChargeSpecTime`, {
              time: oA(ip.seconds)
            })
          })]
        }), (0, CI.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [ip.items.map((pp => {
            var ip;
            let {
              item: Ip,
              amount: Sp
            } = pp;
            return (0, CI.jsxs)("li", {
              className: Ro()({
                Done: cp
              }),
              children: [(0, CI.jsx)(IA, {
                item: Ip
              }), (0, CI.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, CI.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, CI.jsx)(Jo.e, {
                    text: null !== (ip = Op[Ip]) && void 0 !== ip ? ip : Ip
                  }), (0, CI.jsx)("span", {
                    children: op(`${OA}coreChargeSpecItem`, {
                      need: String(Sp)
                    })
                  })]
                })
              })]
            }, Ip)
          })), ip.powerPerS > 0 && (0, CI.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, CI.jsx)(SA, {}), (0, CI.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, CI.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, CI.jsx)("span", {
                  children: op(`${OA}coreChargePowerRow`, {
                    power: Kp(ip.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const YA = "buildAFactory2Game:";

    function DA(pp) {
      let {
        def: ip,
        reached: cp,
        banked: Op,
        itemNames: op
      } = pp;
      const {
        t: Ip
      } = (0, Eo.H)();
      return (0, CI.jsx)("ul", {
        className: "Baf2CoreCost",
        children: ip.cost.map((pp => {
          let {
            item: ip,
            amount: Sp
          } = pp;
          const xp = cp ? 0 : Op(ip);
          return (0, CI.jsx)("li", {
            children: (0, CI.jsx)(FD, {
              item: ip,
              itemNames: op,
              children: (0, CI.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: xp > 0 ? Ip(`${YA}coreBankedFor`, {
                  amount: String(xp),
                  total: String(Sp)
                }) : `\xd7${Sp}`
              })
            })
          }, ip)
        }))
      })
    }

    function AA(pp, ip) {
      if (ip >= Dp()) return pp(`${YA}coreMaxTier`);
      const cp = Yp[ip + 1];
      return cp && !cp.startsWith("upgradeCore") ? pp(`${YA}coreGateQuest`, {
        quest: pp(`${YA}quest_${cp}`)
      }) : pp(`${YA}coreGateClosed`)
    }

    function PA() {
      const {
        t: pp
      } = (0, Eo.H)(), ip = gS(), cp = (0, Op.useRef)(null), op = (0, Op.useRef)(Date.now());
      return KY(!0, cp), (0, CI.jsx)("div", {
        ref: cp,
        className: "Baf2CoreGrow",
        children: (0, CI.jsx)(RS.o, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - op.current >= 600 && ip.send(Hp)
          },
          children: pp(`${YA}coreGrow`)
        })
      })
    }

    function WA(pp) {
      let {
        message: ip,
        itemNames: cp,
        next: Op
      } = pp;
      const op = gS(),
        {
          t: Ip
        } = (0, Eo.H)(),
        Sp = ip.baf2CoreTier,
        xp = ip.baf2CoreReady,
        Lp = ip.baf2CoreNeeds.filter((pp => {
          let [, ip, cp, Op] = pp;
          return Op > 0 && ip < cp
        })),
        Yp = ip.baf2CoreNeeds.every((pp => {
          let [, ip, cp] = pp;
          return ip >= cp
        })),
        Dp = ip.baf2CoreKeep;
      return (0, CI.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, CI.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [xp && (0, CI.jsx)(PA, {}), (0, CI.jsx)("h3", {
            children: Ip(`${YA}coreBring`)
          }), (0, CI.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: ip.baf2CoreNeeds.map((pp => {
              let [ip, Op, Sp, xp] = pp;
              return (0, CI.jsxs)("li", {
                className: Ro()({
                  Done: Op >= Sp
                }),
                children: [(0, CI.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, CI.jsx)(Qo.d, {
                    itemName: ip,
                    amount: 0
                  })
                }), (0, CI.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, CI.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, CI.jsx)(Jo.e, {
                      text: cp[ip]
                    }), (0, CI.jsxs)("span", {
                      children: [Op, "/", Sp]
                    })]
                  }), (0, CI.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, CI.jsx)("div", {
                      style: {
                        width: 100 * Op / Sp + "%"
                      }
                    }), xp > 0 && (0, CI.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * xp / Sp + "%"
                      }
                    })]
                  })]
                }), xp > 0 && Op < Sp && (0, CI.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    op.send(`${ep} ${ip}`)
                  },
                  children: Ip(`${YA}coreDeposit`, {
                    amount: String(xp)
                  })
                })]
              }, ip)
            }))
          }), ip.baf2CoreCharge && (0, CI.jsx)(xA, {
            charge: ip.baf2CoreCharge,
            hint: ip.baf2CoreChargeHint,
            itemNames: cp
          }), !xp && Lp.length > 1 && (0, CI.jsx)(RS.o, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              op.send(Hp)
            },
            children: Ip(`${YA}coreHandOver`)
          }), !xp && void 0 !== Dp && (0, CI.jsx)("p", {
            className: "Baf2CoreHint",
            children: Ip(`${YA}coreKeepRest`, {
              item: LI(Ip, Dp)
            })
          }), !xp && !Yp && 0 === Lp.length && void 0 === Dp && (0, CI.jsx)("p", {
            className: "Baf2CoreHint",
            children: Ip(`${YA}coreNothingHeld`)
          }), (0, CI.jsx)(cA, {
            message: ip,
            itemNames: cp
          })]
        }), (0, CI.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, CI.jsx)("h3", {
            children: Ip(`${YA}coreRewards`)
          }), (0, CI.jsx)(ZD, {
            def: Op,
            tier: Sp + 1,
            itemNames: cp
          })]
        })]
      })
    }

    function yA(pp) {
      let {
        message: ip,
        itemNames: cp,
        shown: Op
      } = pp;
      const {
        t: op
      } = (0, Eo.H)(), Ip = ip.baf2CoreTier, Sp = vp(Op), xp = Op <= Ip, Lp = new Map(ip.baf2CoreBanked), Yp = !tp(Ip, kp(ip)) && Op === Ip;
      return (0, CI.jsxs)("div", {
        className: Ro()("Baf2CoreBody", {
          Locked: !xp
        }),
        children: [(0, CI.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, CI.jsx)("h3", {
            children: op(xp ? `${YA}coreItTook` : `${YA}coreItNeeds`)
          }), 0 === Sp.cost.length && (0, CI.jsx)("p", {
            className: "Baf2CoreHint",
            children: op(`${YA}coreTierStart`)
          }), Sp.cost.length > 0 && (0, CI.jsx)(DA, {
            def: Sp,
            reached: xp,
            banked: pp => {
              var ip;
              return function(pp, ip, cp, Op) {
                let op = pp;
                for (let Sp = ip + 2; Sp <= cp; Sp++) {
                  var Ip;
                  const pp = vp(Sp).cost.find((pp => pp.item === Op)),
                    ip = Math.min(op, null !== (Ip = null === pp || void 0 === pp ? void 0 : pp.amount) && void 0 !== Ip ? Ip : 0);
                  if (Sp === cp) return ip;
                  op -= ip
                }
                return 0
              }(null !== (ip = Lp.get(pp)) && void 0 !== ip ? ip : 0, Ip, Op, pp)
            },
            itemNames: cp
          }), Sp.charge && (0, CI.jsx)(LA, {
            charge: Sp.charge,
            reached: xp,
            itemNames: cp
          }), Yp && (0, CI.jsxs)(CI.Fragment, {
            children: [(0, CI.jsx)("p", {
              className: "Baf2CoreHint",
              children: AA(op, Ip)
            }), (0, CI.jsx)(cA, {
              message: ip,
              itemNames: cp
            })]
          })]
        }), (0, CI.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, CI.jsx)("h3", {
            children: op(xp ? `${YA}coreGave` : `${YA}coreLockedRewards`)
          }), (0, CI.jsx)(ZD, {
            def: Sp,
            tier: Op,
            itemNames: cp
          })]
        })]
      })
    }

    function UA(pp, ip) {
      const {
        key: cp,
        params: Op
      } = Wp(ip - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return pp(`${YA}${cp}`, Op)
    }
    const wA = "buildAFactory2Game:",
      vA = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      tA = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function HA(pp) {
      let {
        view: ip,
        close: cp,
        askIslands: op
      } = pp;
      const {
        t: Ip
      } = (0, Eo.H)(), [Sp, xp] = (0, Op.useState)(!1);
      (0, Op.useEffect)((() => {
        if (!Sp) return;
        const pp = window.setTimeout((() => {
          xp(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(pp)
        }
      }), [Sp]);
      const {
        message: Lp,
        itemNames: Yp
      } = ip, Dp = Lp.baf2CoreTier, Ap = vp(Dp), Pp = tp(Dp, kp(Lp)), [Up, wp] = Lp.baf2CoreMachines, [Hp, dp] = Lp.baf2CoreBelts, ep = Lp.baf2CoreStorage, jp = Lp.baf2CoreReady, [mp, Rp] = (0, Op.useState)(null), qp = (null === mp || void 0 === mp ? void 0 : mp.at) === Dp && mp.ready === jp ? mp.tier : Pp ? Dp + 1 : Dp;
      let Mp = "coreTierLocked";
      qp <= Dp ? Mp = "coreTierReached" : qp === Dp + 1 && (Mp = "coreTierNext");
      const Cp = Ip(`${wA}${vp(qp).nameKey}`),
        Ep = qp === Dp + 1 ? Pp : null,
        Xp = Wp(qp, {
          tier: Mp,
          stage: vA[Mp],
          atomic: tA[Mp]
        }),
        lp = Ip(`${wA}${Xp.key}`, {
          ...Xp.params,
          name: Cp
        }),
        Qp = Wp(Dp, yp),
        Jp = Ip(`${wA}${Qp.key}`, {
          ...Qp.params,
          name: Ip(`${wA}${Ap.nameKey}`)
        });
      return (0, CI.jsx)(mS.c, {
        close: cp,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, CI.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, CI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CI.jsxs)("div", {
              children: [(0, CI.jsx)("h2", {
                id: "baf2CoreTitle",
                children: Ip(`${wA}coreTitle`)
              }), void 0 !== Lp.baf2CoreIslandName && (0, CI.jsx)("p", {
                className: "Baf2CoreIsland",
                children: Lp.baf2CoreIslandName
              }), (0, CI.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, CI.jsx)("span", {
                  children: Jp
                }), (0, CI.jsx)("span", {
                  className: Ro()({
                    Full: Up >= wp
                  }),
                  children: Ip(`${wA}coreMachineCount`, {
                    amount: String(Up),
                    total: String(wp)
                  })
                }), (0, CI.jsx)("span", {
                  className: Ro()({
                    Full: Hp >= dp
                  }),
                  children: Ip(`${wA}coreBeltCount`, {
                    amount: String(Hp),
                    total: String(dp)
                  })
                }), void 0 !== ep && (0, CI.jsx)("span", {
                  className: Ro()({
                    Full: ep[0] >= ep[1]
                  }),
                  children: Ip(`${wA}coreStorageCount`, {
                    amount: String(ep[0]),
                    total: String(ep[1])
                  })
                })]
              })]
            }), (0, CI.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [Lp.baf2CoreIslands && (0, CI.jsx)(RS.f, {
                className: "Baf2CoreIslandsButton",
                disabled: Sp,
                onClick: () => {
                  xp(!0), op()
                },
                children: Ip(`${wA}islandsOpenButton`)
              }), (0, CI.jsx)(RS.l, {
                onClick: cp
              })]
            })]
          }), (0, CI.jsx)(aD, {
            tier: Dp,
            shown: qp,
            SW: pp => {
              Rp({
                tier: pp,
                at: Dp,
                ready: jp
              })
            }
          }), (0, CI.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [lp, qp > Dp + 1 && (0, CI.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: UA(Ip, qp)
            })]
          }), 6 === qp && qp > Dp && (0, CI.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Ip(`${wA}coreStagesNote`)
          }), 11 === qp && qp > Dp && (0, CI.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: Ip(`${wA}coreAtomicNote`)
          }), Ep && (0, CI.jsx)(WA, {
            message: Lp,
            itemNames: Yp,
            next: Ep
          }), !Ep && (0, CI.jsx)(yA, {
            message: Lp,
            itemNames: Yp,
            shown: qp
          })]
        })
      })
    }
    const dA = {
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
    const eA = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: PI,
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

    function uA(pp) {
      return pp.baf2DropCometOreOnly ? "dropCometOre" : pp.baf2DropCometIsotope ? "seed" === pp.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function jA(pp) {
      let {
        message: ip,
        quests: cp,
        close: op,
        leave: Ip
      } = pp;
      const Sp = gS(),
        {
          t: xp
        } = (0, Eo.H)(),
        Lp = (0, xD.i)(bo, cp.get()),
        Yp = function(pp) {
          var ip;
          if (!Qp(pp.tutorial)) return null;
          const cp = pp.rows.find((pp => pp.current)),
            Op = cp ? dA[cp.key] : void 0;
          return null !== (ip = null !== Op && void 0 !== Op ? Op : pp.side ? dA[pp.side.row.key] : void 0) && void 0 !== ip ? ip : null
        }(Lp),
        Dp = null === Lp.tier || UI(Lp.tier),
        Ap = Dp ? eA : eA.filter((pp => {
          let {
            item: ip
          } = pp;
          return ip !== PI
        })),
        [Pp, Wp] = (0, Op.useState)(null),
        yp = null !== Pp && void 0 !== Pp ? Pp : !ip.baf2DropFoundSalvage && Dp,
        Up = ip.baf2DropRuinDistance,
        wp = ip.baf2DropComet,
        vp = ip.baf2DropOldWorks,
        tp = ip.baf2DropGrove,
        Hp = function(pp) {
          return 2 + Number(void 0 !== pp.baf2DropComet) + Number(!!pp.baf2DropOwedComet || void 0 !== pp.baf2DropOwedWaitMinutes) + Number(void 0 !== pp.baf2DropDigDistance) + Number(void 0 !== pp.baf2DropOldWorks) + Number(void 0 !== pp.baf2DropGrove)
        }(ip),
        dp = pp => {
          Sp.send(function(pp) {
            return `baf2drop ${pp}`
          }(pp)), Ip()
        };
      let ep = xp("buildAFactory2Game:dropRuinNone");
      if (null !== Up) {
        let pp = ip.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        ip.baf2DropRuinOldWorks && (pp = "dropRuinOldWorks");
        const cp = void 0 === ip.baf2DropRuinCluster ? xp("buildAFactory2Game:dropRuinOpen") : xp("buildAFactory2Game:dropRuinCluster", {
          count: String(ip.baf2DropRuinCluster)
        });
        ep = `${xp(`buildAFactory2Game:${pp}`,{distance:String(Up)})} ${cp}`
      }
      let jp = xp("buildAFactory2Game:dropBelowDescription");
      void 0 !== ip.baf2DropBelowLook && (jp = xp("buildAFactory2Game:dropBelowLook", {
        look: xp(ip.baf2DropBelowLook)
      }));
      const kp = "buildAFactory2Game:wildsRegion_survivorGrove" === ip.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        mp = mI(xp, 60 * function(pp) {
          const [ip, cp] = (0, Op.useState)((() => Date.now())), [op, Ip] = (0, Op.useState)(ip);
          return (0, Op.useEffect)((() => {
            const pp = Date.now();
            cp(pp), Ip(pp)
          }), [pp]), (0, Op.useEffect)((() => {
            const pp = window.setInterval((() => {
              Ip(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(pp)
            }
          }), []), Math.max(1, pp.baf2DropRenewMinutes - Math.floor((op - ip) / 6e4))
        }(ip)),
        Rp = function(pp, ip, cp) {
          return "ruin" === pp && !cp || "owed" === pp && !ip.baf2DropOwedComet ? null : pp
        }(Yp, ip, null !== Up),
        qp = function(pp) {
          for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
          return Ro()("Baf2DropTile", ...cp, {
            Wanted: Rp === pp
          })
        };
      return (0, CI.jsx)(mS.c, {
        close: op,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, CI.jsxs)("section", {
          className: Ro()("Baf2Panel Baf2DropMap", {
            Many: Hp >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, CI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CI.jsxs)("div", {
              children: [(0, CI.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: xp("buildAFactory2Game:dropMapTitle")
              }), (0, CI.jsx)("p", {
                children: xp("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, CI.jsx)(RS.l, {
              onClick: op
            })]
          }), (0, CI.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== wp && (0, CI.jsxs)(RS.y, {
              className: qp("comet", "Baf2DropComet"),
              onClick: () => {
                dp("comet")
              },
              children: [(0, CI.jsx)("strong", {
                children: xp("buildAFactory2Game:dropComet")
              }), (0, CI.jsx)("span", {
                children: xp(`buildAFactory2Game:${uA(ip)}`, {
                  distance: String(wp)
                })
              })]
            }), ip.baf2DropOwedComet && (0, CI.jsxs)(RS.y, {
              className: qp("owed", "Baf2DropComet"),
              onClick: () => {
                dp("owed")
              },
              children: [(0, CI.jsx)("strong", {
                children: xp("buildAFactory2Game:dropOwedComet")
              }), (0, CI.jsx)("span", {
                children: ip.baf2DropOwedIsotope ? xp("buildAFactory2Game:dropOwedIsotopeDescription") : xp("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== ip.baf2DropOwedWaitMinutes && (0, CI.jsxs)(RS.y, {
              className: qp("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, CI.jsx)("strong", {
                children: xp("buildAFactory2Game:dropOwedComet")
              }), (0, CI.jsx)("span", {
                children: xp("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(ip.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, CI.jsxs)(RS.f, {
              className: qp("below"),
              onClick: () => {
                dp("below")
              },
              children: [(0, CI.jsx)("strong", {
                children: xp("buildAFactory2Game:dropBelow")
              }), (0, CI.jsx)("span", {
                children: jp
              })]
            }), void 0 !== ip.baf2DropDigDistance && (0, CI.jsxs)(RS.w, {
              className: qp("dig"),
              onClick: () => {
                dp("dig")
              },
              children: [(0, CI.jsx)("strong", {
                children: xp("buildAFactory2Game:dropDig")
              }), (0, CI.jsx)("span", {
                children: xp("buildAFactory2Game:dropDigDescription", {
                  distance: String(ip.baf2DropDigDistance),
                  y: kI(ip.baf2DropDigY)
                })
              })]
            }), void 0 !== tp && (0, CI.jsxs)(RS.w, {
              className: qp("grove", "Baf2DropGrove"),
              onClick: () => {
                dp("grove")
              },
              children: [(0, CI.jsx)("strong", {
                children: xp("buildAFactory2Game:dropGrove")
              }), (0, CI.jsx)("span", {
                children: xp(`buildAFactory2Game:${kp}`, {
                  distance: String(tp)
                })
              })]
            }), (0, CI.jsxs)(RS.o, {
              className: qp("ruin"),
              disabled: null === Up,
              onClick: () => {
                dp("ruin")
              },
              children: [(0, CI.jsx)("strong", {
                children: xp("buildAFactory2Game:dropRuin")
              }), (0, CI.jsx)("span", {
                children: ep
              })]
            }), void 0 !== vp && (0, CI.jsxs)(RS.K, {
              className: qp("works"),
              onClick: () => {
                dp("works")
              },
              children: [(0, CI.jsx)("strong", {
                children: xp("buildAFactory2Game:dropOldWorks")
              }), (0, CI.jsx)("span", {
                children: xp("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(vp)
                })
              })]
            })]
          }), (0, CI.jsx)("p", {
            className: "Baf2DropRenew",
            children: xp("buildAFactory2Game:dropRenew", {
              time: mp
            })
          }), (0, CI.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: yp,
            onToggle: pp => {
              pp.currentTarget.open !== yp && Wp(pp.currentTarget.open)
            },
            children: [(0, CI.jsx)("summary", {
              children: xp("buildAFactory2Game:dropSalvageWhat")
            }), (0, CI.jsx)("p", {
              children: xp("buildAFactory2Game:dropSalvageIntro")
            }), (0, CI.jsx)("ul", {
              children: Ap.map((pp => {
                let {
                  item: ip,
                  nameKey: cp,
                  useKey: Op,
                  params: op
                } = pp;
                return (0, CI.jsxs)("li", {
                  children: [(0, CI.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, CI.jsx)(Qo.d, {
                      itemName: ip,
                      amount: 0
                    })
                  }), (0, CI.jsxs)("span", {
                    children: [(0, CI.jsx)("strong", {
                      children: xp(cp)
                    }), ": ", xp(Op, op)]
                  })]
                }, ip)
              }))
            })]
          })]
        })
      })
    }
    const kA = "buildAFactory2Game:";

    function mA(pp, ip) {
      return pp.sendIslandEdit(`baf2coopleave ${ip.baf2IslandId}`)
    }

    function RA(pp) {
      let {
        card: ip,
        canRename: cp,
        done: op,
        t: Ip
      } = pp;
      const Sp = gS(),
        [xp, Lp] = (0, Op.useState)(ip.baf2IslandName),
        Yp = mY(xp),
        Dp = "" === Yp || RY(Yp),
        Ap = () => {
          !Dp && cp && (Yp !== ip.baf2IslandName ? op(Sp.sendIslandEdit(`baf2islandrename ${ip.baf2IslandId} ${Yp}`)) : op(null))
        },
        Pp = () => {
          op(null)
        };
      return (0, CI.jsxs)("div", {
        className: "Baf2IslandForm",
        ...zY(Pp),
        children: [(0, CI.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [Ip(`${kA}islandsRenameLabel`), (0, CI.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: xp,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: sY,
            onChange: pp => {
              Lp(pp.target.value)
            },
            ...ZY(Ap, Pp)
          })]
        }), "" === Yp && (0, CI.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Ip(`${kA}islandsRenameEmpty`)
        }), RY(Yp) && (0, CI.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: Ip(`${kA}islandsNameReserved`)
        }), (0, CI.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, CI.jsx)(RS.w, {
            disabled: Dp || !cp,
            onClick: Ap,
            children: Ip(`${kA}islandsRenameSave`)
          }), (0, CI.jsx)(RS.f, {
            onClick: Pp,
            children: Ip(`${kA}islandsCancel`)
          })]
        })]
      })
    }

    function qA(pp) {
      let {
        card: ip,
        canDelete: cp,
        done: op,
        t: Ip
      } = pp;
      const Sp = gS(),
        [xp, Lp] = (0, Op.useState)(""),
        Yp = function(pp, ip) {
          return mY(pp).toLowerCase() === mY(ip).toLowerCase()
        }(xp, ip.baf2IslandName),
        Dp = () => {
          Yp && cp && op(Sp.sendIslandEdit(`baf2islanddelete ${ip.baf2IslandId}`))
        },
        Ap = () => {
          op(null)
        },
        Pp = TY("name"),
        [Wp, yp = ""] = Ip(`${kA}islandsDeleteConfirm`, {
          name: Pp
        }).split(Pp);
      return (0, CI.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...zY(Ap),
        children: [(0, CI.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, CI.jsxs)("span", {
            children: [Wp, (0, CI.jsx)("strong", {
              children: ip.baf2IslandName
            }), yp]
          }), (0, CI.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: xp,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: sY,
            onChange: pp => {
              Lp(pp.target.value)
            },
            ...ZY(Dp, Ap)
          })]
        }), FY(ip) && (0, CI.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Ip(`${kA}islandsDeleteLeftBack`)
        }), (0, CI.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, CI.jsx)(RS.K, {
            disabled: !Yp || !cp,
            onClick: Dp,
            children: Ip(`${kA}islandsDeleteForGood`)
          }), (0, CI.jsx)(RS.f, {
            onClick: Ap,
            children: Ip(`${kA}islandsCancel`)
          })]
        })]
      })
    }

    function MA(pp) {
      let {
        members: ip,
        t: cp
      } = pp;
      const Op = ip.length;
      return (0, CI.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, CI.jsxs)("span", {
          children: [1 === Op ? cp(`${kA}islandsPlayersOne`) : cp(`${kA}islandsPlayers`, {
            count: String(Op)
          }), " "]
        }), ip.map(((pp, ip) => (0, CI.jsxs)("span", {
          className: Ro()("Baf2IslandMember", {
            Here: pp.baf2MemberHere
          }),
          title: pp.baf2MemberHere ? cp(`${kA}islandsPlayerHere`) : void 0,
          children: [pp.baf2MemberName, ip < Op - 1 ? ", " : ""]
        }, pp.baf2MemberKey)))]
      })
    }

    function CA(pp) {
      let {
        card: ip,
        answered: cp,
        nowMs: op,
        t: Ip
      } = pp;
      const Sp = gS(),
        [xp, Lp] = (0, Op.useState)(new Map),
        Yp = FY(ip);
      if (!Yp) return null;
      return (0, CI.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, CI.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Ip(`${kA}islandsLeftTitle`)
        }), (0, CI.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: Yp.left.map((pp => {
            const Op = pp.baf2LeftKey,
              Dp = GY(xp.get(Op), cp, op),
              Ap = function(pp) {
                return 1 === pp ? [`${eY}islandsLeftItemsOne`] : [`${eY}islandsLeftItems`, {
                  count: String(pp)
                }]
              }(pp.baf2LeftItems);
            return (0, CI.jsx)("li", {
              className: Ro()("Baf2IslandPerson", {
                Pending: Dp
              }),
              children: (0, CI.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, CI.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: pp.baf2LeftName
                }), (0, CI.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Ip(Ap[0], Ap[1])
                }), Yp.claim && (0, CI.jsx)(RS.w, {
                  className: "Baf2IslandPersonButton",
                  disabled: Dp,
                  onClick: () => {
                    (pp => {
                      const cp = Sp.sendIslandEdit(`baf2coopclaim ${ip.baf2IslandId} ${pp}`);
                      Lp((ip => new Map(ip).set(pp, {
                        atMs: Date.now(),
                        answer: cp
                      })))
                    })(Op)
                  },
                  children: Ip(`${kA}islandsClaim`)
                })]
              })
            }, Op)
          }))
        }), Yp.goThere && (0, CI.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Ip(`${kA}islandsClaimGoThere`)
        })]
      })
    }

    function EA(pp) {
      let {
        card: ip,
        view: cp,
        blocked: op,
        maxIslands: Ip,
        answered: Sp,
        nowMs: xp,
        done: Lp,
        openSocial: Yp,
        t: Dp
      } = pp;
      const Ap = gS(),
        [Pp, Wp] = (0, Op.useState)(new Map),
        [yp, Up] = (0, Op.useState)(new Map),
        [wp, vp] = (0, Op.useState)(null),
        tp = (0, Op.useRef)(null);
      iD(tp);
      const Hp = ip.baf2IslandId,
        dp = ip.baf2IslandCoop,
        ep = null !== dp && void 0 !== dp && dp.baf2CoopMembers.some((pp => pp.baf2MemberKey === wp)) ? wp : null,
        jp = function(pp, ip) {
          const cp = pp.baf2IslandCoop;
          return cp && gY(cp) || null !== ip ? void 0 : pp.baf2IslandInvitable
        }(ip, op),
        kp = function(pp, ip) {
          const cp = pp.baf2IslandCoop;
          return cp && gY(cp) ? {
            key: `${eY}islandsCoopFull`,
            params: {
              max: String(cp.baf2CoopMax)
            }
          } : void 0 !== pp.baf2IslandInvitable && null === ip || cp && !cp.baf2CoopManageHere ? null : "degraded" === ip || "stuck" === ip ? {
            key: `${eY}islandsInviteNotLoaded`
          } : null === ip || function(pp) {
            return "notHome" === pp || "wilds" === pp || "visiting" === pp
          }(ip) || EY(ip) ? {
            key: `${eY}islandsInviteGoThere`
          } : {
            key: `${eY}islandsInviteBusy`
          }
        }(ip, op),
        mp = () => {
          var pp;
          vp(null), null === (pp = tp.current) || void 0 === pp || pp.focus()
        };
      return (0, CI.jsxs)("div", {
        ref: tp,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...zY(null === ep ? Lp : mp),
        children: [dp && (0, CI.jsxs)(CI.Fragment, {
          children: [(0, CI.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: Dp(`${kA}islandsPlayersTitle`, {
              count: String(dp.baf2CoopMembers.length),
              max: String(dp.baf2CoopMax)
            })
          }), (0, CI.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: dp.baf2CoopMembers.map(((pp, ip) => {
              const Op = pp.baf2MemberKey,
                op = GY(Pp.get(Op), Sp, xp);
              return (0, CI.jsxs)("li", {
                className: Ro()("Baf2IslandPerson", {
                  Pending: op
                }),
                children: [(0, CI.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, CI.jsx)("span", {
                    className: Ro()("Baf2IslandPersonName", {
                      Here: pp.baf2MemberHere
                    }),
                    children: pp.baf2MemberName
                  }), pp.baf2MemberHere && (0, CI.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: Dp(`${kA}islandsPlayerHere`)
                  }), 0 === ip && (0, CI.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: Dp(`${kA}islandsPlayerOwner`)
                  }), cp.remove && ip > 0 && !op && ep !== Op && (0, CI.jsx)(RS.N, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var pp;
                      vp(Op), null === (pp = tp.current) || void 0 === pp || pp.focus()
                    },
                    children: Dp(`${kA}islandsRemove`)
                  })]
                }), ep === Op && (0, CI.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, CI.jsx)("p", {
                    children: fY(Dp, `${kA}islandsRemoveConfirm`, {
                      player: pp.baf2MemberName
                    })
                  }), (0, CI.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, CI.jsx)(RS.K, {
                      onClick: () => {
                        (pp => {
                          const ip = Ap.sendIslandEdit(`baf2coopremove ${Hp} ${pp.baf2MemberKey}`);
                          Wp((cp => new Map(cp).set(pp.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: ip
                          }))), mp()
                        })(pp)
                      },
                      children: Dp(`${kA}islandsRemoveYes`)
                    }), (0, CI.jsx)(RS.f, {
                      onClick: mp,
                      children: Dp(`${kA}islandsCancel`)
                    })]
                  })]
                })]
              }, Op)
            }))
          })]
        }), (void 0 !== jp || null !== kp) && (0, CI.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: Dp(`${kA}islandsInviteTitle`)
        }), !dp && (void 0 !== jp || null !== kp) && (0, CI.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: Dp(`${kA}islandsInviteShareNote`)
        }), 0 === (null === jp || void 0 === jp ? void 0 : jp.length) && (0, CI.jsx)(XA, {
          openSocial: Yp,
          t: Dp
        }), void 0 !== jp && jp.length > 0 && (0, CI.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: jp.map((pp => {
            const ip = !0 === pp.baf2InvitableSent || GY(yp.get(pp.baf2InvitableId), Sp, xp);
            return (0, CI.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, CI.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, CI.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: pp.baf2InvitableName
                }), pp.baf2InvitableFull && !ip && (0, CI.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: Dp(`${kA}islandsInviteTheirFull`, {
                    max: String(Ip)
                  })
                }), (ip || !pp.baf2InvitableFull) && (0, CI.jsx)(RS.w, {
                  className: "Baf2IslandPersonButton",
                  disabled: ip,
                  onClick: () => {
                    (pp => {
                      const ip = Ap.sendIslandEdit(`baf2coopinvite ${Hp} ${pp}`);
                      Up((cp => new Map(cp).set(pp, {
                        atMs: Date.now(),
                        answer: ip
                      })))
                    })(pp.baf2InvitableId)
                  },
                  children: Dp(ip ? `${kA}islandsInvited` : `${kA}islandsInvite`)
                })]
              })
            }, pp.baf2InvitableId)
          }))
        }), kp && (0, CI.jsx)(oD, {
          note: kp,
          t: Dp
        }), (0, CI.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, CI.jsx)(RS.f, {
            onClick: Lp,
            children: Dp(`${kA}islandsDone`)
          })
        })]
      })
    }

    function XA(pp) {
      let {
        openSocial: ip,
        t: cp
      } = pp;
      return (0, CI.jsxs)(CI.Fragment, {
        children: [(0, CI.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: cp(ip ? `${kA}islandsInviteNobody` : `${kA}islandsInviteNobodyGuest`)
        }), ip && (0, CI.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, CI.jsx)(RS.f, {
            onClick: ip,
            children: cp("socialBar:social")
          })
        })]
      })
    }

    function lA(pp) {
      let {
        className: ip,
        text: cp,
        ConfirmButton: op,
        confirmLabel: Ip,
        canConfirm: Sp,
        send: xp,
        done: Lp,
        t: Yp
      } = pp;
      const Dp = (0, Op.useRef)(null);
      iD(Dp);
      const Ap = () => {
        Lp(null)
      };
      return (0, CI.jsxs)("div", {
        ref: Dp,
        tabIndex: -1,
        className: Ro()("Baf2IslandForm", ip),
        ...zY(Ap),
        children: [(0, CI.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: cp
        }), (0, CI.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, CI.jsx)(op, {
            disabled: !Sp,
            onClick: () => {
              Sp && Lp(xp())
            },
            children: Ip
          }), (0, CI.jsx)(RS.f, {
            onClick: Ap,
            children: Yp(`${kA}islandsCancel`)
          })]
        })]
      })
    }

    function QA(pp) {
      return "hidden" !== pp
    }

    function JA(pp) {
      var ip, cp;
      let {
        card: op,
        keepOwn: Ip,
        blocked: Sp,
        maxIslands: xp,
        serverNowMs: Lp,
        nowMs: Yp,
        actions: Dp,
        full: Ap,
        waits: Pp,
        answered: Wp,
        mode: yp,
        setMode: Up,
        pending: wp,
        onSent: vp,
        switchTo: tp,
        leave: Hp,
        coopOn: dp,
        openSocial: ep,
        t: jp
      } = pp;
      const kp = gS(),
        mp = op.baf2IslandActive,
        Rp = mp ? null : function(pp, ip) {
          if (pp <= 0) return null;
          const cp = ip - pp;
          if (cp < dI) return [`${eY}islandsPlayedJustNow`];
          if (cp < uY) return [`${eY}islandsPlayedMinutes`, {
            minutes: String(Math.floor(cp / dI))
          }];
          if (cp < jY) return [`${eY}islandsPlayedHours`, {
            hours: String(Math.floor(cp / uY))
          }];
          const Op = Math.floor(cp / jY);
          return 1 === Op ? [`${eY}islandsPlayedDay`] : [`${eY}islandsPlayedDays`, {
            days: String(Op)
          }]
        }(op.baf2IslandLastPlayedMs, Lp),
        qp = void 0 === (Mp = op.baf2IslandItems) ? null : 0 === Mp ? [`${eY}islandsItemsNone`] : 1 === Mp ? [`${eY}islandsItemsOne`] : [`${eY}islandsItems`, {
          count: String(Mp)
        }];
      var Mp;
      const Cp = function(pp) {
          return pp ? 1 === pp ? [`${eY}islandsWaitingOne`] : [`${eY}islandsWaiting`, {
            count: String(pp)
          }] : null
        }(op.baf2IslandWaiting),
        Ep = op.baf2IslandUnreadable,
        Xp = op.baf2IslandCoop,
        lp = nY(op, Dp, Ip, Ap, dp, Sp),
        Qp = (0, Op.useRef)(null);
      KY(null !== yp, Qp);
      const Jp = () => {
          var pp;
          Up(null), null === (pp = Qp.current) || void 0 === pp || pp.focus()
        },
        Bp = (pp, ip) => {
          Jp(), null !== pp && vp(pp, ip)
        },
        Np = (pp, ip) => jp(`${kA}${pp}`, {
          time: mI(jp, ip)
        });
      return (0, CI.jsxs)("li", {
        ref: Qp,
        tabIndex: -1,
        className: Ro()("Baf2IslandCard", {
          Active: mp,
          Pending: wp,
          Shared: void 0 !== Xp
        }),
        children: [(0, CI.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, CI.jsx)("strong", {
            className: "Baf2IslandName",
            children: op.baf2IslandName
          }), mp && (0, CI.jsx)("span", {
            className: "Baf2IslandBadge",
            children: jp(`${kA}islandsOnThis`)
          }), Xp && (0, CI.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: jp(`${kA}islandsShared`)
          })]
        }), "member" === (null === Xp || void 0 === Xp ? void 0 : Xp.baf2CoopRole) && (0, CI.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: fY(jp, `${kA}islandsSharedBy`, {
            owner: Xp.baf2CoopOwner
          })
        }), void 0 !== Ep && (0, CI.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: jp("newer" === Ep ? `${kA}islandsUnreadable` : `${kA}islandsDamaged`)
        }), "corrupt" === Ep && Ap && (0, CI.jsx)("p", {
          className: "Baf2IslandStats",
          children: jp(`${kA}islandsDamagedFull`)
        }), void 0 === Ep && (0, CI.jsxs)(CI.Fragment, {
          children: [(0, CI.jsx)(OD, {
            tier: op.baf2IslandTier,
            t: jp
          }), (0, CI.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, CI.jsx)("span", {
              children: 1 === op.baf2IslandQuestsDone ? jp(`${kA}islandsQuestsDoneOne`) : jp(`${kA}islandsQuestsDone`, {
                count: String(op.baf2IslandQuestsDone)
              })
            }), (0, CI.jsx)("span", {
              children: 1 === op.baf2IslandMachines ? jp(`${kA}islandsMachinesOne`) : jp(`${kA}islandsMachines`, {
                count: String(op.baf2IslandMachines)
              })
            }), qp && (0, CI.jsx)("span", {
              children: jp(qp[0], qp[1])
            }), Cp && (0, CI.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: jp(Cp[0], Cp[1])
            }), Rp && (0, CI.jsx)("span", {
              children: jp(Rp[0], Rp[1])
            })]
          })]
        }), Xp && void 0 === Xp.baf2CoopState && "people" !== yp && (0, CI.jsx)(MA, {
          members: Xp.baf2CoopMembers,
          t: jp
        }), null === yp && (0, CI.jsx)(CA, {
          card: op,
          answered: Wp,
          nowMs: Yp,
          t: jp
        }), lp.note && (0, CI.jsx)(oD, {
          note: lp.note,
          className: Ro()({
            Unreachable: void 0 !== (null === Xp || void 0 === Xp ? void 0 : Xp.baf2CoopState)
          }),
          t: jp
        }), "rename" === yp && (0, CI.jsx)(RA, {
          card: op,
          canRename: "enabled" === lp.rename,
          done: Bp,
          t: jp
        }), "delete" === yp && (0, CI.jsx)(qA, {
          card: op,
          canDelete: "enabled" === lp.delete,
          done: pp => {
            Bp(pp, Xp ? "delete" : void 0)
          },
          t: jp
        }), "people" === yp && (0, CI.jsx)(EA, {
          card: op,
          view: lp,
          blocked: Sp,
          maxIslands: xp,
          answered: Wp,
          nowMs: Yp,
          done: Jp,
          openSocial: ep,
          t: jp
        }), "leave" === yp && (0, CI.jsx)(lA, {
          className: "Leave",
          text: fY(jp, `${kA}islandsLeaveConfirm`, {
            island: op.baf2IslandName,
            owner: null !== (ip = null === (cp = op.baf2IslandCoop) || void 0 === cp ? void 0 : cp.baf2CoopOwner) && void 0 !== ip ? ip : ""
          }),
          ConfirmButton: RS.K,
          confirmLabel: jp(`${kA}islandsLeaveYes`),
          canConfirm: "enabled" === lp.leave,
          send: () => mA(kp, op),
          done: pp => {
            Bp(pp, "leave"), null !== pp && mp && Hp()
          },
          t: jp
        }), "unshare" === yp && (0, CI.jsx)(lA, {
          className: "Unshare",
          text: fY(jp, `${kA}islandsStopSharingConfirm`, {
            island: op.baf2IslandName
          }),
          ConfirmButton: RS.w,
          confirmLabel: jp(`${kA}islandsStopSharing`),
          canConfirm: "enabled" === lp.unshare,
          send: () => kp.sendIslandEdit(`baf2coopunshare ${op.baf2IslandId}`),
          done: pp => {
            Bp(pp), null !== pp && Hp()
          },
          t: jp
        }), null === yp && !wp && (0, CI.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": op.baf2IslandName,
          children: [QA(lp.switch) && (0, CI.jsx)(RS.w, {
            disabled: "enabled" !== lp.switch,
            onClick: tp,
            children: "tryAgain" === lp.switchLabel ? jp(`${kA}islandsTryAgain`) : Pp.switch > 0 ? Np("islandsSwitchIn", Pp.switch) : jp(`${kA}islandsSwitch`)
          }), QA(lp.rename) && (0, CI.jsx)(RS.f, {
            disabled: "enabled" !== lp.rename,
            onClick: () => {
              Up("rename")
            },
            children: jp(`${kA}islandsRename`)
          }), QA(lp.people) && (0, CI.jsx)(RS.f, {
            disabled: "enabled" !== lp.people,
            onClick: () => {
              Up("people")
            },
            children: jp("players" === lp.peopleLabel ? `${kA}islandsPlayersButton` : `${kA}islandsInviteButton`)
          }), QA(lp.unshare) && (0, CI.jsx)(RS.f, {
            disabled: "enabled" !== lp.unshare,
            onClick: () => {
              Up("unshare")
            },
            children: jp(`${kA}islandsStopSharing`)
          }), QA(lp.dismiss) && (0, CI.jsx)(RS.f, {
            disabled: "enabled" !== lp.dismiss,
            onClick: () => {
              vp(mA(kp, op), "dismiss"), mp && Hp()
            },
            children: jp(`${kA}islandsDismiss`)
          }), QA(lp.leave) && (0, CI.jsx)(RS.N, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== lp.leave,
            onClick: () => {
              Up("leave")
            },
            children: mp && Pp.switch > 0 ? Np("islandsLeaveIn", Pp.switch) : jp(`${kA}islandsLeave`)
          }), QA(lp.delete) && (0, CI.jsx)(RS.N, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== lp.delete,
            onClick: () => {
              Up("delete")
            },
            children: Pp.change > 0 && lp.deleteWaits ? Np("islandsDeleteIn", Pp.change) : jp(`${kA}islandsDelete`)
          })]
        })]
      })
    }
    const BA = "buildAFactory2Game:";

    function NA(pp) {
      let {
        invite: ip,
        actions: cp,
        full: op,
        maxIslands: Ip,
        waitSeconds: Sp,
        focus: xp,
        focused: Lp,
        join: Yp,
        decline: Dp,
        t: Ap
      } = pp;
      const [Pp, Wp] = (0, Op.useState)(!1), yp = (0, Op.useRef)(null);
      KY(Pp, yp), (0, Op.useEffect)((() => {
        var pp;
        xp && (Wp(!0), null === (pp = yp.current) || void 0 === pp || pp.focus(), Lp())
      }), [xp, Lp]);
      const Up = function(pp, ip, cp, Op, op) {
          return cp ? {
            join: !1,
            note: {
              key: `${eY}islandsJoinTooMany`,
              params: {
                max: String(Op)
              }
            }
          } : pp.baf2InvitePlayers >= op ? {
            join: !1,
            note: {
              key: `${eY}islandsJoinFull`
            }
          } : {
            join: ip.switch,
            note: null
          }
        }(ip, cp, op, Ip, 10),
        wp = ip.baf2InviteIsland,
        vp = ip.baf2InvitePlayers,
        tp = () => {
          var pp;
          Wp(!1), null === (pp = yp.current) || void 0 === pp || pp.focus()
        },
        Hp = Sp > 0 && null === Up.note ? Ap(`${BA}islandsJoinIn`, {
          time: mI(Ap, Sp)
        }) : Ap(`${BA}islandsJoin`);
      return (0, CI.jsxs)("li", {
        ref: yp,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...Pp ? zY(tp) : {},
        children: [(0, CI.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, CI.jsx)("strong", {
            className: "Baf2IslandName",
            children: wp
          })
        }), (0, CI.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: fY(Ap, `${BA}islandsInvitedBy`, {
            owner: ip.baf2InviteOwner
          })
        }), (0, CI.jsx)(OD, {
          tier: ip.baf2InviteTier,
          t: Ap
        }), (0, CI.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, CI.jsx)("span", {
            children: 1 === vp ? Ap(`${BA}islandsPlayersCountOne`) : Ap(`${BA}islandsPlayersCount`, {
              count: String(vp)
            })
          })
        }), Up.note && (0, CI.jsx)(oD, {
          note: Up.note,
          t: Ap
        }), Pp && (0, CI.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: fY(Ap, `${BA}islandsJoinConfirm`, {
            island: wp
          })
        }), !Pp && (0, CI.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": wp,
          children: [(0, CI.jsx)(RS.w, {
            disabled: !Up.join,
            onClick: () => {
              var pp;
              Wp(!0), null === (pp = yp.current) || void 0 === pp || pp.focus()
            },
            children: Hp
          }), (0, CI.jsx)(RS.f, {
            onClick: Dp,
            children: Ap(`${BA}islandsDecline`)
          })]
        }), Pp && (0, CI.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, CI.jsx)(RS.w, {
            disabled: !Up.join,
            onClick: Yp,
            children: Ap(`${BA}islandsJoinYes`)
          }), (0, CI.jsx)(RS.f, {
            onClick: tp,
            children: Ap(`${BA}islandsCancel`)
          })]
        })]
      })
    }

    function TA(pp) {
      let {
        invites: ip,
        actions: cp,
        full: Op,
        maxIslands: op,
        waitSeconds: Ip,
        focus: Sp,
        focused: xp,
        leave: Lp,
        declined: Yp,
        t: Dp
      } = pp;
      const Ap = gS();
      return (0, CI.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, CI.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: Dp(`${BA}islandsInvitesTitle`)
        }), (0, CI.jsx)("ul", {
          className: "Baf2IslandCards",
          children: ip.map((pp => {
            const ip = pp.baf2InviteId;
            return (0, CI.jsx)(NA, {
              invite: pp,
              actions: cp,
              full: Op,
              maxIslands: op,
              waitSeconds: Ip,
              focus: Sp === ip,
              focused: xp,
              join: () => {
                Ap.send(`baf2coopaccept ${ip}`), Lp()
              },
              decline: () => {
                Ap.send(`baf2coopdecline ${ip}`), Yp(ip)
              },
              t: Dp
            }, ip)
          }))
        })]
      })
    }
    const fA = "buildAFactory2Game:";

    function bA(pp) {
      let {
        cards: ip,
        activeName: cp,
        canStart: op,
        waitSeconds: Ip,
        leave: Sp,
        t: xp
      } = pp;
      const Lp = gS(),
        [Yp, Dp] = (0, Op.useState)(!1),
        [Ap, Pp] = (0, Op.useState)(""),
        Wp = (0, Op.useRef)(null);
      KY(Yp, Wp), (0, Op.useEffect)((() => {
        var pp;
        Yp && (null === (pp = Wp.current) || void 0 === pp || pp.focus())
      }), [Yp]);
      const yp = qY(ip),
        Up = mY(Ap),
        wp = RY(Up),
        vp = () => {
          op && !wp && (Lp.send("" === Up || Up === yp ? zp : `${zp} ${Up}`), Sp())
        },
        tp = () => {
          var pp;
          Dp(!1), null === (pp = Wp.current) || void 0 === pp || pp.focus()
        };
      return (0, CI.jsxs)("li", {
        ref: Wp,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...Yp ? zY(tp) : {},
        children: [(0, CI.jsx)("strong", {
          className: "Baf2IslandName",
          children: xp(`${fA}islandsNewTitle`)
        }), !Yp && (0, CI.jsx)("p", {
          className: "Baf2IslandStats",
          children: xp(`${fA}islandsNewNote`)
        }), Yp && (0, CI.jsxs)(CI.Fragment, {
          children: [(0, CI.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: fY(xp, `${fA}islandsNewConfirm`, {
              name: cp
            })
          }), (0, CI.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [xp(`${fA}islandsNewNameLabel`), (0, CI.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: Ap,
              placeholder: yp,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: sY,
              onChange: pp => {
                Pp(pp.target.value)
              },
              ...ZY(vp, tp)
            })]
          }), wp && (0, CI.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: xp(`${fA}islandsNameReserved`)
          })]
        }), (0, CI.jsxs)("div", {
          className: Ro()("Baf2IslandButtons", {
            Stacked: Yp
          }),
          children: [(0, CI.jsx)(RS.w, {
            disabled: !op || Yp && wp,
            onClick: () => {
              if (!Yp) return Pp(yp), void Dp(!0);
              vp()
            },
            children: Ip > 0 ? xp(`${fA}islandsNewIn`, {
              time: mI(xp, Ip)
            }) : xp(Yp ? `${fA}islandsNewConfirmButton` : `${fA}islandsNew`)
          }), Yp && (0, CI.jsx)(RS.f, {
            onClick: tp,
            children: xp(`${fA}islandsCancel`)
          })]
        })]
      })
    }

    function hA(pp) {
      var ip, cp;
      let {
        message: op,
        arrivedAtMs: Ip,
        close: Sp,
        leave: xp,
        openSocial: Lp
      } = pp;
      const Yp = gS(),
        {
          t: Dp
        } = (0, Eo.H)(),
        Ap = cD(1e3),
        [Pp, Wp] = (0, Op.useState)(null),
        [yp, Up] = (0, Op.useState)(new Map),
        [wp, vp] = (0, Op.useState)(new Set),
        tp = op.baf2IslandCards,
        Hp = function(pp, ip, cp, Op) {
          return (null !== pp && void 0 !== pp ? pp : []).filter((pp => ip + pp.baf2InviteLeftMs > cp && !Op.has(pp.baf2InviteId)))
        }(op.baf2IslandsInvites, Ip, Ap, wp),
        dp = Hp.map((pp => pp.baf2InviteId)).join(" "),
        ep = (0, Op.useRef)(null),
        jp = VY(ep);
      pD(), (0, Op.useEffect)((() => {
        var pp, ip;
        null !== (pp = ep.current) && void 0 !== pp && pp.contains(document.activeElement) || (null === (ip = ep.current) || void 0 === ip || ip.focus())
      }), [op, dp]), (0, Op.useEffect)((() => {
        Up((pp => function(pp, ip, cp, Op) {
          const op = new Map;
          for (const Ip of ip) {
            const ip = pp.get(Ip.baf2IslandId);
            ip && (void 0 !== ip.untilGone || Op < ip.answer) && JY(ip, Ip, cp) && op.set(Ip.baf2IslandId, ip)
          }
          return op.size === pp.size ? pp : op
        }(pp, op.baf2IslandCards, Date.now(), op.baf2IslandsAnswered)))
      }), [op]);
      const kp = kY(Ip, op.baf2IslandsWaitMs, Ap),
        mp = op.baf2IslandsBlocked,
        Rp = XY(mp, kp),
        qp = function(pp, ip) {
          const cp = XY(pp, 0);
          return {
            switch: cp.switch ? ip : 0,
            change: cp.change ? ip : 0
          }
        }(mp, kp),
        Mp = tp.length >= op.baf2IslandsMax,
        Cp = tp.length > 0,
        Ep = function(pp, ip, cp) {
          return pp + Math.max(0, cp - ip)
        }(op.baf2IslandsNowMs, Ip, Ap),
        Xp = null !== (ip = null === (cp = tp.find((pp => pp.baf2IslandActive))) || void 0 === cp ? void 0 : cp.baf2IslandName) && void 0 !== ip ? ip : "",
        lp = function(pp) {
          const ip = pp.filter(aY).length;
          return ip <= 1 && ip < pp.length
        }(tp),
        Qp = !0 === op.baf2IslandsCoop,
        Jp = function(pp, ip) {
          const cp = pp.find((pp => pp.baf2IslandActive)),
            Op = null === cp || void 0 === cp ? void 0 : cp.baf2IslandCoop;
          return cp && "member" === (null === Op || void 0 === Op ? void 0 : Op.baf2CoopRole) ? {
            key: `${eY}islandsKeepOwnMember`,
            names: {
              owner: Op.baf2CoopOwner,
              island: cp.baf2IslandName
            }
          } : {
            key: ip ? `${eY}islandsKeepOwn` : `${eY}islandsKeepOwnSolo`
          }
        }(tp, Qp),
        [Bp, Np] = (0, Op.useState)(null);
      (0, Op.useEffect)((() => {
        void 0 !== op.baf2IslandsFocusInvite && Np(op.baf2IslandsFocusInvite)
      }), [op]);
      const Tp = (0, Op.useCallback)((() => {
          Np(null)
        }), []),
        fp = Pp ? tp.find((pp => pp.baf2IslandId === Pp.id)) : void 0,
        bp = Pp && fp && "hidden" !== nY(fp, Rp, lp, Mp, Qp, mp)[Pp.mode] ? Pp : null;
      return (0, CI.jsx)(mS.c, {
        close: Sp,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, CI.jsxs)("section", {
          ref: ep,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: jp ? {
            marginTop: `${jp.marginTop}px`,
            maxHeight: `${jp.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, CI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CI.jsxs)("div", {
              children: [(0, CI.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: Dp(`${fA}islandsTitle`)
              }), Cp && (0, CI.jsx)("p", {
                children: Dp(`${fA}islandsSubtitle`, {
                  count: String(tp.length),
                  max: String(op.baf2IslandsMax)
                })
              })]
            }), (0, CI.jsx)(RS.l, {
              ariaLabel: Dp(`${fA}islandsClose`),
              onClick: Sp
            })]
          }), (0, CI.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== mp && (0, CI.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: fY(Dp, MY(mp, CY(tp)), {
                island: Xp
              })
            }), Cp && Hp.length > 0 && (0, CI.jsx)(TA, {
              invites: Hp,
              actions: Rp,
              full: Mp,
              maxIslands: op.baf2IslandsMax,
              waitSeconds: qp.switch,
              focus: Bp,
              focused: Tp,
              leave: xp,
              declined: pp => {
                vp((ip => new Set(ip).add(pp)))
              },
              t: Dp
            }), Cp && (0, CI.jsxs)(CI.Fragment, {
              children: [Mp && (0, CI.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: Dp(`${fA}islandsFull`, {
                  max: String(op.baf2IslandsMax)
                })
              }), (0, CI.jsx)("p", {
                className: "Baf2IslandsNote",
                children: fY(Dp, Jp.key, Jp.names)
              }), (0, CI.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [tp.map((pp => {
                  const ip = pp.baf2IslandId;
                  return (0, CI.jsx)(JA, {
                    card: pp,
                    keepOwn: lp,
                    coopOn: Qp,
                    openSocial: Lp,
                    blocked: mp,
                    maxIslands: op.baf2IslandsMax,
                    serverNowMs: Ep,
                    nowMs: Ap,
                    actions: Rp,
                    full: Mp,
                    waits: qp,
                    answered: op.baf2IslandsAnswered,
                    mode: (null === bp || void 0 === bp ? void 0 : bp.id) === ip ? bp.mode : null,
                    setMode: pp => {
                      Wp(null === pp ? null : {
                        id: ip,
                        mode: pp
                      })
                    },
                    pending: JY(yp.get(ip), pp, Ap),
                    onSent: (cp, Op) => {
                      Up((op => {
                        const Ip = {
                          atMs: Date.now(),
                          from: pp.baf2IslandName,
                          answer: cp
                        };
                        return new Map(op).set(ip, Op ? {
                          ...Ip,
                          untilGone: Op
                        } : Ip)
                      }))
                    },
                    leave: xp,
                    switchTo: () => {
                      Yp.send(`baf2islandswitch ${ip}`), xp()
                    },
                    t: Dp
                  }, ip)
                })), !Mp && (0, CI.jsx)(bA, {
                  cards: tp,
                  activeName: Xp,
                  canStart: Rp.change,
                  waitSeconds: qp.change,
                  leave: xp,
                  t: Dp
                })]
              })]
            })]
          })]
        })
      })
    }
    var aA = cp(5146);
    const nA = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        aO: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      FA = Object.keys(nA),
      gA = new Set([...Object.keys(Ki), ...[...Bi.Press.recipes, ...Bi["Wire Mill"].recipes].map((pp => pp.output))]),
      GA = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      rA = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      ZA = / Bar$|Alloy$/,
      zA = /Porkchop|Beef|Mutton|Venison|Steak/,
      sA = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const KA = (0, Op.memo)((function(pp) {
      let {
        item: ip,
        name: cp,
        amount: Op,
        selected: op,
        small: Ip,
        onPick: Sp
      } = pp;
      return (0, CI.jsxs)("button", {
        type: "button",
        className: Ro()("Baf2TermTile", {
          On: op,
          Small: Ip
        }),
        "aria-label": `${cp}: ${Op}`,
        "aria-pressed": op,
        onClick: () => {
          Sp(ip)
        },
        children: [(0, CI.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, CI.jsx)(Qo.d, {
            itemName: ip,
            amount: 0
          })
        }), (0, CI.jsx)("span", {
          className: "Baf2TermCount",
          children: jI(Op, 1e4)
        }), !Ip && (0, CI.jsx)("span", {
          className: "Baf2TermName",
          children: cp
        })]
      })
    }));

    function VA(pp) {
      let {
        store: ip,
        close: cp,
        send: op
      } = pp;
      const {
        t: Ip
      } = (0, Eo.H)(), {
        isTouchScreen: Sp
      } = (0, jo.o)(["isTouchScreen"]);
      ! function(pp) {
        const [ip, cp] = (0, Op.useState)(pp.version);
        (0, Op.useEffect)((() => (cp(pp.version), pp.subscribe((() => {
          cp(pp.version)
        })))), [pp])
      }(ip);
      const [xp, Lp] = (0, Op.useState)("all"), [Yp, Dp] = (0, Op.useState)(!1), [Ap, Pp] = (0, Op.useState)(""), [Wp, yp] = (0, Op.useState)(""), [Up, wp] = (0, Op.useState)(null), [vp, tp] = (0, Op.useState)(!1), [Hp, dp, ep] = function() {
        const pp = (0, Op.useRef)(null),
          [ip, cp] = (0, Op.useState)(!1),
          op = () => {
            const ip = pp.current;
            cp(null !== ip && ip.scrollLeft + ip.clientWidth < ip.scrollWidth - 1)
          };
        return (0, Op.useEffect)(op), (0, Op.useEffect)((() => {
          const ip = pp.current;
          if (!ip) return;
          const cp = new ResizeObserver(op);
          return cp.observe(ip), () => {
            cp.disconnect()
          }
        }), []), [pp, ip, op]
      }(), jp = (0, Op.useMemo)((() => new Map), [Ip]), kp = pp => {
        let ip = jp.get(pp);
        return void 0 === ip && (ip = function(pp, ip) {
          const cp = /^(.+) \((.+)\)$/.exec(pp);
          return cp ? ip(cp[2], cp[1]) : pp
        }(LI(Ip, pp), ((pp, ip) => Ip("buildAFactory2Game:terminalTileKind", {
          kind: pp,
          base: ip
        }))), jp.set(pp, ip)), ip
      }, mp = ip.isReadOnly(), Rp = vp && !mp, qp = ip.recent(), Mp = ip.items(), Cp = Wp.trim().toLowerCase(), Ep = Rp ? ip.heldItems(Up) : ("recent" === xp ? qp : Mp).filter((pp => {
        const ip = kp(pp);
        return ("all" === xp || "recent" === xp || function(pp) {
          return wI(pp) ? "farm" : GA.test(pp) ? "nuclear" : ZA.test(pp) ? "bars" : zA.test(pp) ? "farm" : rA.test(pp) ? "aO" : gA.has(pp) ? "parts" : sA.test(pp) ? "farm" : "other"
        }(pp) === xp) && ("" === Cp || ip.toLowerCase().includes(Cp)) && ("" === Ap || ip.toUpperCase().startsWith(Ap))
      })), Xp = new Set(Mp.map((pp => kp(pp).charAt(0).toUpperCase()))), lp = pp => Rp ? ip.heldAmount(pp) : ip.amount(pp), Qp = !Rp && "recent" !== xp && qp.length > 0, Jp = function(pp, ip) {
        return null !== pp && ip.includes(pp) ? pp : null
      }(Up, Qp ? [...Ep, ...qp] : Ep), Bp = null === Jp ? 0 : ip.amount(Jp), Np = null === Jp ? 0 : lp(Jp), Tp = (0, Op.useCallback)((pp => {
        wp((ip => ip === pp ? null : pp))
      }), []), fp = pp => Np > 0 || Rp && null === Jp && "fill" === pp && Ep.length > 0, bp = Rp ? [
        ["one", Ip("buildAFactory2Game:terminalStoreOne")],
        ["stack", Ip("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", Ip(null === Jp ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", Ip("buildAFactory2Game:terminalTakeOne")],
        ["stack", Ip("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", Ip("buildAFactory2Game:terminalFill")]
      ], hp = Rp ? Ip("buildAFactory2Game:terminalStoreEmpty") : "" !== Ap ? Ip("buildAFactory2Game:terminalEmptyLetter", {
        letter: Ap
      }) : "" !== Cp ? Ip("buildAFactory2Game:terminalEmptySearch", {
        query: Wp
      }) : Ip("buildAFactory2Game:terminalEmpty");
      return (0, CI.jsx)(mS.c, {
        close: cp,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, CI.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, CI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CI.jsxs)("div", {
              children: [(0, CI.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: Ip(ip.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, CI.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, CI.jsx)("span", {
                  className: Ro()({
                    Off: Rp
                  }),
                  children: Ip("buildAFactory2Game:terminalSubtitle", {
                    count: String(ip.siloCount())
                  })
                }), !mp && (0, CI.jsx)("span", {
                  className: Ro()({
                    Off: !Rp
                  }),
                  children: Ip("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !mp && (0, CI.jsx)(aA.b, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: Ip("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: Ip("buildAFactory2Game:terminalModeStore")
              }],
              value: Rp ? "store" : "take",
              onChange: pp => {
                tp("store" === pp), wp(null)
              },
              ariaLabel: Ip("buildAFactory2Game:terminalModes")
            }), (0, CI.jsx)(RS.l, {
              onClick: cp
            })]
          }), (0, CI.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, CI.jsxs)("div", {
              className: Ro()("Baf2TermTools", {
                Hidden: Rp
              }),
              children: [(0, CI.jsx)("div", {
                ref: Hp,
                className: Ro()("Baf2TermChips", {
                  MoreRight: dp
                }),
                onScroll: ep,
                children: Yp ? (0, CI.jsxs)(CI.Fragment, {
                  children: [(0, CI.jsx)("button", {
                    type: "button",
                    "aria-label": Ip("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      Dp(!1), Pp("")
                    },
                    children: "\u2190"
                  }), [...Xp].sort().map((pp => (0, CI.jsx)("button", {
                    type: "button",
                    className: Ro()({
                      On: Ap === pp
                    }),
                    onClick: () => {
                      Pp(Ap === pp ? "" : pp)
                    },
                    children: pp
                  }, pp)))]
                }) : (0, CI.jsxs)(CI.Fragment, {
                  children: [(0, CI.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      Dp(!0)
                    },
                    children: Ip("buildAFactory2Game:terminalLetters")
                  }), FA.map((pp => (0, CI.jsx)("button", {
                    type: "button",
                    className: Ro()({
                      On: xp === pp
                    }),
                    onClick: () => {
                      Lp(pp)
                    },
                    children: Ip(nA[pp])
                  }, pp)))]
                })
              }), !Sp && (0, CI.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: Wp,
                placeholder: Ip("buildAFactory2Game:terminalSearch"),
                "aria-label": Ip("buildAFactory2Game:terminalSearch"),
                onChange: pp => {
                  yp(pp.target.value)
                },
                onKeyDown: pp => {
                  pp.stopPropagation()
                }
              }), (0, CI.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": Ip("buildAFactory2Game:terminalResort"),
                title: Ip("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  ip.resort()
                },
                children: "\u21c5"
              })]
            }), Qp && (0, CI.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, CI.jsx)("span", {
                children: Ip(nA.recent)
              }), qp.map((pp => (0, CI.jsx)(KA, {
                item: pp,
                name: kp(pp),
                amount: ip.amount(pp),
                selected: Jp === pp,
                small: !0,
                onPick: Tp
              }, pp)))]
            }), (0, CI.jsx)("div", {
              className: "Baf2TermTiles",
              children: Ep.length > 0 ? Ep.map((pp => (0, CI.jsx)(KA, {
                item: pp,
                name: kp(pp),
                amount: lp(pp),
                selected: Jp === pp,
                onPick: Tp
              }, pp))) : (0, CI.jsx)("p", {
                className: "Baf2TermEmpty",
                children: hp
              })
            }), (0, CI.jsxs)("div", {
              className: Ro()("Baf2TermActions", {
                Hidden: Rp && 0 === Ep.length
              }),
              children: [(0, CI.jsx)("span", {
                className: "Baf2TermPicked",
                children: mp ? (0, CI.jsxs)(CI.Fragment, {
                  children: [null !== Jp && Bp > 0 ? kp(Jp) : Ip("buildAFactory2Game:terminalVisiting"), (0, CI.jsx)("small", {
                    children: Ip("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== Jp ? (0, CI.jsxs)(CI.Fragment, {
                  children: [kp(Jp), (0, CI.jsx)("small", {
                    children: Ip("buildAFactory2Game:terminalStored", {
                      amount: Bp.toLocaleString()
                    })
                  })]
                }) : Ip(Rp ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !mp && bp.map((pp => {
                let [cp, Op] = pp;
                const Ip = "fill" === cp ? RS.o : RS.f;
                return (0, CI.jsx)(Ip, {
                  className: "Baf2TermTake",
                  disabled: !fp(cp),
                  onClick: () => {
                    (pp => {
                      fp(pp) && op(null === Jp ? ip.putAll() : Rp ? ip.put(pp, Jp) : ip.take(pp, Jp))
                    })(cp)
                  },
                  children: Op
                }, cp)
              }))]
            })]
          })]
        })
      })
    }

    function pP(pp) {
      let {
        kind: ip,
        icon: cp,
        label: Op,
        number: op,
        preview: Ip,
        note: Sp,
        tone: xp = null,
        share: Lp,
        onExplain: Yp
      } = pp;
      return (0, CI.jsxs)("button", {
        type: "button",
        className: Ro()("NxLane", ip, {
          Warn: "warn" === xp,
          Danger: "danger" === xp
        }),
        onClick: Yp,
        children: [(0, CI.jsxs)("span", {
          className: "NxLaneHead",
          children: [cp, (0, CI.jsx)("span", {
            className: "NxLaneLabel",
            children: Op
          })]
        }), (0, CI.jsxs)("span", {
          className: "NxLaneNum",
          children: [op, Ip && (0, CI.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", Ip]
          })]
        }), (0, CI.jsx)("span", {
          className: "NxLaneNote",
          children: Sp
        }), void 0 !== Lp && (0, CI.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, Lp)) + "%"
          }
        })]
      })
    }

    function iP(pp) {
      let {
        kind: ip,
        step: cp,
        short: Op,
        planned: op
      } = pp;
      return (0, CI.jsx)("i", {
        className: Ro()("NxPipe", ip, `Step${cp}`, {
          Short: Op,
          Planned: op
        }),
        "aria-hidden": "true"
      })
    }

    function cP(pp) {
      let {
        max: ip,
        bands: cp,
        ticks: Op,
        now: op,
        settle: Ip,
        settleTone: Sp,
        onExplain: xp
      } = pp;
      const Lp = pp => Math.max(0, Math.min(ip, pp)) / ip * 100 + "%";
      let Yp = 0;
      return (0, CI.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: xp,
        children: [(0, CI.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [cp.map((pp => {
            const ip = {
              bottom: Lp(Yp),
              height: `calc(${Lp(pp.upTo)} - ${Lp(Yp)})`
            };
            return Yp = pp.upTo, (0, CI.jsx)("i", {
              className: Ro()("NxGaugeBand", pp.kind),
              style: ip
            }, pp.kind)
          })), null !== op && (0, CI.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: Lp(op)
            }
          }), void 0 !== Ip && null !== Ip && (0, CI.jsx)("i", {
            className: Ro()("NxGaugeSettle", {
              Bad: "bad" === Sp
            }),
            style: {
              bottom: Lp(Ip)
            }
          })]
        }), (0, CI.jsx)("span", {
          className: "NxGaugeTicks",
          children: Op.map((pp => (0, CI.jsx)("small", {
            style: {
              bottom: Lp(pp)
            },
            children: pp
          }, pp)))
        })]
      })
    }

    function OP(pp) {
      const [ip, cp] = (0, Op.useState)(null), [op, Ip] = (0, Op.useState)((() => {
        try {
          return null === window.localStorage.getItem(pp)
        } catch {
          return !1
        }
      })), Sp = (0, Op.useRef)(null);
      (0, Op.useEffect)((() => () => {
        null !== Sp.current && clearTimeout(Sp.current)
      }), []);
      const xp = (0, Op.useCallback)((ip => {
          cp(ip), Ip(!1);
          try {
            window.localStorage.setItem(pp, "1")
          } catch {}
          null !== Sp.current && clearTimeout(Sp.current), Sp.current = setTimeout((() => {
            Sp.current = null, cp(null)
          }), 5e3)
        }), [pp]),
        Lp = (0, Op.useCallback)(((ip, cp) => {
          const Op = `${pp}:${ip}`;
          try {
            if (null !== window.localStorage.getItem(Op)) return;
            window.localStorage.setItem(Op, "1")
          } catch {
            return
          }
          xp(cp)
        }), [xp, pp]);
      return {
        explained: ip,
        hinting: op,
        explain: xp,
        explainOnce: Lp
      }
    }

    function oP(pp) {
      let {
        text: ip,
        tone: cp,
        explained: Op
      } = pp;
      return (0, CI.jsxs)("p", {
        className: Ro()("NxStatus", null === Op ? cp : "Explain"),
        "aria-live": "polite",
        children: [null !== Op && (0, CI.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== Op && void 0 !== Op ? Op : ip]
      })
    }
    const IP = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function SP(pp, ip) {
      const cp = Number(pp[ip]);
      return 1 === cp || 2 === cp || 3 === cp ? cp : 0
    }

    function xP(pp) {
      return !!RL("reactor", pp.baf2RxNeed) || void 0 !== pp.baf2RxLayout && pp.baf2RxNeed.some((pp => {
        let [ip, cp] = pp;
        return cp > 0 && IP.includes(ip)
      }))
    }
    const LP = "buildAFactory2Game:";

    function YP(pp) {
      let {
        status: ip,
        store: cp,
        busy: Op
      } = pp;
      const {
        t: op
      } = (0, Eo.H)();
      return function(pp) {
        return 0 !== (pp.baf2RxFlags & vi) && (!pp.baf2RxFormed || void 0 !== pp.baf2RxLayout)
      }(ip) ? (0, CI.jsx)(RS.o, {
        disabled: !xP(ip) || Op,
        onClick: () => {
          cp.tap("fill", (() => {
            cp.send("fill")
          }))
        },
        children: op(void 0 !== ip.baf2RxLayout ? `${LP}rxFillLayout` : `${LP}rxFill`)
      }) : null
    }

    function DP(pp) {
      let {
        status: ip,
        store: cp,
        readOnly: op,
        bare: Ip = !1
      } = pp;
      const {
        t: Sp
      } = (0, Eo.H)(), xp = ip.baf2RxLayout, [Lp, Yp, Dp] = ip.baf2RxDims, Ap = (0, Op.useMemo)((() => {
        if (void 0 === xp) return 0;
        const pp = Uint8Array.from(xp, ((pp, ip) => SP(xp, ip)));
        return oL([Lp - 2, Yp - 2, Dp - 2], pp).max
      }), [xp, Lp, Yp, Dp]);
      return void 0 === xp ? null : (0, CI.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!Ip && (0, CI.jsx)("span", {
          className: "Baf2RxHint",
          children: Sp(`${LP}rxLayoutLine`, {
            amount: QL(Ap)
          })
        }), !op && (0, CI.jsx)(RS.f, {
          onClick: () => {
            cp.send("layout", 0)
          },
          children: Sp(`${LP}rxLayoutHide`)
        })]
      })
    }
    const AP = "buildAFactory2Game:",
      PP = {
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

    function WP(pp) {
      let {
        id: ip,
        title: cp,
        body: Op,
        bodyParams: op,
        yes: Ip,
        cancel: Sp,
        confirm: xp
      } = pp;
      const {
        t: Lp
      } = (0, Eo.H)();
      return (0, CI.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": ip,
        children: [(0, CI.jsx)("h3", {
          id: ip,
          children: Lp(cp)
        }), (0, CI.jsx)("p", {
          children: Lp(Op, op)
        }), (0, CI.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, CI.jsx)(RS.j, {
            onClick: Sp,
            children: Lp(`${AP}rxCancel`)
          }), (0, CI.jsx)(RS.K, {
            onClick: xp,
            children: Lp(Ip)
          })]
        })]
      })
    }

    function yP(pp) {
      const [ip, cp] = (0, Op.useState)((() => pp.get()));
      return (0, Op.useEffect)((() => (cp(pp.get()), pp.subscribe((() => {
        cp(pp.get())
      })))), [pp]), ip
    }

    function UP(pp) {
      let {
        kind: ip,
        cap: cp,
        busy: op = !1,
        whyNot: Ip = null,
        apart: Sp
      } = pp;
      const {
        t: xp
      } = (0, Eo.H)(), [Lp, Yp] = (0, Op.useState)(!1), Dp = null !== Ip, Ap = (0, Op.useRef)(null);
      if ((0, Op.useEffect)((() => {
          Dp && Yp(!1)
        }), [Dp]), (0, Op.useLayoutEffect)((() => {
          var pp;
          const ip = null === (pp = Ap.current) || void 0 === pp ? void 0 : pp.firstElementChild;
          Dp ? null === ip || void 0 === ip || ip.setAttribute("aria-disabled", "true") : op || null === ip || void 0 === ip || ip.removeAttribute("aria-disabled")
        })), !Lp || Dp) return (0, CI.jsx)("span", {
        ref: Ap,
        className: "Baf2RxApartWrap",
        children: (0, CI.jsx)(RS.j, {
          disabled: op,
          className: Ro()({
            Baf2RxNotYet: Dp
          }),
          onClick: () => {
            Ip ? Ip() : Yp(!0)
          },
          children: xp(`${AP}rxApart`)
        })
      });
      const Pp = "battery" === ip,
        Wp = void 0 === cp ? `${AP}batApartConfirmBodyPlan` : `${AP}batApartConfirmBody`;
      return (0, CI.jsx)(WP, {
        id: `baf2ApartTitle_${ip}`,
        title: Pp ? `${AP}batApartConfirmTitle` : `${AP}rxApartConfirmTitle`,
        body: Pp ? Wp : `${AP}rxApartConfirmBody`,
        bodyParams: void 0 === cp ? void 0 : {
          cap: cp
        },
        yes: `${AP}rxApart`,
        cancel: () => {
          Yp(!1)
        },
        confirm: () => {
          Yp(!1), Sp()
        }
      })
    }

    function wP(pp) {
      let {
        mood: ip,
        big: cp
      } = pp;
      const Op = PP[ip],
        op = [];
      return Op.rows.forEach(((pp, ip) => {
        for (let cp = 0; cp < pp.length; cp++) "." !== pp[cp] && op.push((0, CI.jsx)("rect", {
          x: cp + 1,
          y: ip + 1,
          width: 1,
          height: 1,
          fill: "w" === pp[cp] ? "#8fd3ff" : Op.colour
        }, `${cp},${ip}`))
      })), (0, CI.jsxs)("svg", {
        className: Ro()("Baf2RxFace", {
          Big: cp,
          Alarm: "alarm" === ip
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, CI.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, CI.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), op]
      })
    }

    function vP(pp) {
      return uI(pp, "+").replace("+", "")
    }

    function tP(pp) {
      let {
        kind: ip,
        dims: cp,
        cap: Op,
        disabled: op,
        compact: Ip,
        resize: Sp
      } = pp;
      const {
        t: xp
      } = (0, Eo.H)(), {
        min: Lp,
        max: Yp
      } = ac(ip), Dp = Math.min(Op, Yp), Ap = [`${AP}rxWide`, `${AP}rxTall`, `${AP}rxDeep`], Pp = {
        w: String(cp[0]),
        h: String(cp[1]),
        d: String(cp[2]),
        blocks: String(lL(ip, cp))
      };
      return (0, CI.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, CI.jsx)("div", {
          className: "Baf2RxSteppers",
          children: cp.map(((pp, ip) => {
            const Ip = Op => {
                const op = [cp[0], cp[1], cp[2]];
                op[ip] = pp + Op, Sp(op)
              },
              Pp = pp >= Dp;
            return (0, CI.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, CI.jsx)("button", {
                type: "button",
                "aria-label": xp(`${AP}rxSmaller`),
                disabled: op || pp <= Lp,
                onClick: () => {
                  Ip(-1)
                },
                children: "\u2212"
              }), (0, CI.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [pp, (0, CI.jsx)("small", {
                  children: xp(Ap[ip])
                })]
              }), (0, CI.jsx)("button", {
                type: "button",
                "aria-label": xp(`${AP}rxBigger`),
                disabled: op || Pp,
                onClick: () => {
                  Ip(1)
                },
                children: Pp && Op < Yp ? "\ud83d\udd12" : "+"
              })]
            }, Ap[ip])
          }))
        }), !Ip && (0, CI.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === ip ? xp(`${AP}rxSizeLine`, {
            ...Pp,
            water: String(XL(cp))
          }) : xp(`${AP}batSizeLine`, Pp)
        })]
      })
    }

    function HP(pp) {
      let {
        on: ip,
        label: cp,
        disabled: Op,
        locked: op,
        pending: Ip,
        toggle: Sp
      } = pp;
      return (0, CI.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": ip,
        disabled: Op,
        "aria-disabled": op || void 0,
        className: Ro()("Baf2RxSwitch", {
          On: ip,
          Locked: op,
          Pending: Ip
        }),
        onClick: Sp,
        children: [(0, CI.jsx)("span", {
          className: "Baf2RxKnob"
        }), cp]
      })
    }
    const dP = "buildAFactory2Game:",
      eP = .95;

    function uP(pp, ip) {
      return 0 !== (pp.baf2RxFlags & ip)
    }

    function jP(pp) {
      return "cryo" === pp ? Vp.k : Vp.m
    }

    function kP(pp) {
      var ip, cp, Op, op, Ip, Sp, xp, Lp, Yp;
      return pp.baf2RxCryo ? {
        tW: "cryo",
        usePerS: null !== (op = pp.baf2RxCryoUse) && void 0 !== op ? op : 0,
        needPerS: null !== (Ip = pp.baf2RxCryoNeed) && void 0 !== Ip ? Ip : 0,
        inPerS: null !== (Sp = pp.baf2RxCryoIn) && void 0 !== Sp ? Sp : 0,
        stored: null !== (xp = pp.baf2RxCryoStored) && void 0 !== xp ? xp : 0,
        makersShort: null !== (Lp = pp.baf2RxMixersShort) && void 0 !== Lp ? Lp : 0,
        waterBeside: null !== (Yp = pp.baf2RxWaterUse) && void 0 !== Yp ? Yp : 0,
        pct: pp.baf2RxWater
      } : {
        tW: "water",
        usePerS: null !== (ip = pp.baf2RxWaterUse) && void 0 !== ip ? ip : 0,
        needPerS: null !== (cp = pp.baf2RxWaterNeed) && void 0 !== cp ? cp : 0,
        inPerS: pp.baf2RxWaterIn,
        stored: pp.baf2RxWaterStored,
        makersShort: null !== (Op = pp.baf2RxCondensersShort) && void 0 !== Op ? Op : 0,
        waterBeside: 0,
        pct: pp.baf2RxWater
      }
    }

    function mP(pp) {
      const ip = "running" === pp.baf2RxState || "idle" === pp.baf2RxState;
      return pp.baf2RxFormed && pp.baf2RxTarget !== pp.baf2RxThrottle && ip ? RP(pp, pp.baf2RxTarget) : null
    }

    function RP(pp, ip) {
      const [cp, Op, op, , , , Ip, , Sp] = pp.baf2RxStats, xp = uP(pp, Ui), Lp = kP(pp), Yp = Lp.pct / 100, {
        gen: Dp,
        out: Ap,
        load: Pp
      } = function(pp, ip, cp, Op) {
        const op = cp ? sx : 1,
          Ip = Math.min(pp.fuelHeat * op * Math.max(0, Math.min(1, ip)), pp.size * op);
        return {
          gen: Ip,
          out: Ip,
          load: UL(Ip, pp.cooling, Op)
        }
      }({
        fuelHeat: cp,
        cooling: Op,
        size: op
      }, ip / 100, xp, Yp), Wp = vL(Ip || OL(...pp.baf2RxDims)), yp = pp.baf2RxHeat, Up = Math.abs(Pp - yp), wp = function(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Vp.m;
        const Ip = cp ? sx : 1,
          Sp = Math.min(pp.fuelHeat * Ip * ip / 100, pp.size * Ip),
          xp = Sp,
          Lp = pp.fuelHeat * Ip,
          Yp = pp.cooling * yL(Op.pct / 100),
          Dp = Lp > 0 && Yp < pp.size * Ip ? Math.floor(100 * Yp / Lp) : 100,
          Ap = Sp * op - Op.inPerS;
        return {
          out: xp,
          hotAbove: Dp >= 100 ? null : Math.max(0, Dp),
          waterSecs: Op.pct >= 100 && Ap > 1e-6 ? Math.max(0, Op.stored) / Ap : null
        }
      }({
        fuelHeat: cp,
        cooling: Op,
        size: op
      }, ip, xp, {
        pct: Lp.pct,
        inPerS: Lp.inPerS,
        stored: Lp.stored
      }, jP(Lp.tW));
      return {
        pct: ip,
        out: Ap,
        coolPerS: Dp * jP(Lp.tW),
        pelletsPerMin: Sp > 0 ? Ap / Sp * 60 : 0,
        settle: Pp,
        settleS: Up > 2 ? Wp * Math.log(Up / 2) : 0,
        overheatS: Pp > 100 && yp < 100 ? Wp * Math.log((Pp - yp) / (Pp - 100)) : null,
        hotAbove: wp.hotAbove,
        coolantSecs: wp.waterSecs
      }
    }

    function qP(pp) {
      return pp.baf2RxThrottle <= 0 && "running" !== pp.baf2RxState ? 0 : RP(pp, pp.baf2RxTarget).pelletsPerMin / 60
    }

    function MP(pp, ip) {
      if (pp <= 0 || ip <= 0) return 0;
      const cp = pp / ip;
      return cp < .25 ? 1 : cp < .5 ? 2 : cp < .8 ? 3 : 4
    }

    function CP(pp, ip) {
      const cp = {};
      for (const [Op, op] of Object.entries(ip.params)) cp[Op] = "time" === Op ? mI(pp, op) : "amount" === Op ? QL(op) : String(Math.round(op));
      return pp(ip.key, cp)
    }

    function EP(pp, ip) {
      return {
        key: `${dP}${pp}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: ip
      }
    }

    function XP(pp) {
      var ip;
      const cp = uP(pp, Ui),
        Op = "running" === pp.baf2RxState,
        op = eL(pp),
        Ip = pp.baf2RxHeat;
      var Sp;
      if (Op && Ip > Zx) return {
        key: null !== (Sp = op.fix) && void 0 !== Sp ? Sp : `${dP}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const xp = Op ? RP(pp, pp.baf2RxTarget).coolantSecs : null,
        Lp = "cryo" === kP(pp).tW;
      if (null !== xp && xp >= 1 && xp <= 30) return EP(Lp ? "rxWarnCryo" : "rxWarnWater", "bad");
      const Yp = iL(OL(...pp.baf2RxDims)).waste,
        Dp = Op ? qL(pp, Yp, qP(pp)).fullInS : null;
      if (null !== Dp && Dp <= 120 && pp.baf2RxWaste >= .5 * Yp) return EP("rxWarnWaste", "warn");
      if (null !== xp && xp >= 1) return EP(Lp ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: xp
      });
      const Ap = "noWater" === pp.baf2RxState && Ip > Zx;
      if (pp.baf2RxDamage >= 1 && !Ap) return EP("rxDamagedHeals", "warn", {
        pct: pp.baf2RxDamage
      });
      if (pp.baf2RxCryoCut) return EP("rxFix_cryoCut", "warn");
      const Pp = kP(pp);
      if ("noWater" === pp.baf2RxState && "cryo" === Pp.tW) return EP("noWater" === pp.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const Wp = op.fix === `${dP}rxFix_scramCool` || "idle" === pp.baf2RxState && pp.baf2RxTarget <= 0;
      if (Wp && pp.baf2RxFuel <= 0) return EP("rxFix_noFuel", "warn");
      if (Wp && pp.baf2RxWaterIn <= 0 && (null !== (ip = pp.baf2RxCryoIn) && void 0 !== ip ? ip : 0) <= 0) return EP("rxFix_noWater", "warn");
      const yp = op.fix === `${dP}rxFix_scramCool` ? jL(pp) : null;
      if (null !== yp) return {
        key: yp.key,
        params: {
          amount: yp.amount
        },
        tone: "info"
      };
      if ("running" !== pp.baf2RxState && "idle" !== pp.baf2RxState && null !== op.fix) return {
        key: op.fix,
        params: {},
        tone: "scram" === pp.baf2RxState ? "info" : Ap ? "bad" : "warn"
      };
      var Up;
      if ("idle" === pp.baf2RxState && pp.baf2RxTarget <= 0) return {
        key: null !== (Up = op.fix) && void 0 !== Up ? Up : `${dP}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const wp = pp.baf2RxCryoStarved;
      if ("cryo" === Pp.tW && wp && Pp.needPerS > 0 && Pp.usePerS < eP * Pp.needPerS) return EP("noWater" === wp ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const vp = "cryo" === Pp.tW,
        tp = Pp.needPerS > 0 && Pp.usePerS < eP * Pp.needPerS;
      if (vp ? tp || Pp.makersShort > 0 && Pp.pct < 100 : Pp.pct < 100) {
        const ip = vp && tp ? Math.floor(100 * Pp.usePerS / Pp.needPerS) : Math.min(100, Pp.pct);
        if (Pp.makersShort > 0) {
          return EP(`${vp?"rxCryoShortLine":"rxWaterShortLine"}${1===Pp.makersShort?"One":""}${!vp&&pp.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: ip,
            count: Pp.makersShort
          })
        }
        return EP(vp ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: ip
        })
      }
      const Hp = function(pp) {
        const [ip, cp, Op] = pp.baf2RxStats, op = kP(pp), Ip = wL({
          fuelHeat: ip,
          cooling: cp,
          size: Op
        }, "cryo" === op.tW ? Vp.e : 1, !0);
        return Math.max(0, Ip * jP(op.tW) - op.inPerS)
      }(pp);
      if (cp && Hp > 0) return EP("cryo" === Pp.tW ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(Hp)
      });
      if (Ip >= PL) return EP("rxHotLine", "warn");
      const dp = RP(pp, pp.baf2RxTarget);
      var ep;
      if (null !== dp.overheatS) return EP("rxWillOverheat", "bad", {
        pct: pp.baf2RxTarget,
        time: dp.overheatS,
        safe: null !== (ep = dp.hotAbove) && void 0 !== ep ? ep : 100
      });
      if (Math.abs(dp.settle - Ip) >= 3) return EP("rxSettling", "info", {
        pct: pp.baf2RxTarget,
        heat: Math.round(dp.settle),
        time: dp.settleS
      });
      const jp = jL(pp);
      if (null !== jp) return {
        key: jp.key,
        params: {
          amount: jp.amount
        },
        tone: "info"
      };
      const kp = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== ip && ("running" !== ip || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === pp.rods ? `${tL}rxLimitNoRods` : `${tL}rxLimit_${AL(pp)}`
      }({
        rods: pp.baf2RxStats[3],
        ...uL(pp)
      }, pp.baf2RxState, pp.baf2RxOut >= eP * pp.baf2RxMaxNow, !1);
      if (kp === `${dP}rxLimit_size`) {
        const [ip, , cp, Op] = pp.baf2RxStats, op = Op > 0 && ip > 0 ? Math.ceil(cp / (ip / Op) - 1e-9) : Op, Ip = pp.baf2RxDims.every((pp => pp >= ac("reactor").max));
        if (op < Op) return EP(Ip ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: op,
          have: Op
        });
        if (Ip) return EP("rxLimit_sizeMax", "info")
      }
      return null !== kp ? {
        key: kp,
        params: {},
        tone: "info"
      } : EP("rxSteady", "ok", {
        pct: pp.baf2RxTarget
      })
    }

    function lP(pp) {
      var ip;
      if (pp.melted) return EP("rxMeltedBody", "bad");
      if (-1 === pp.bad) return EP("rxFix_noRoom", "warn");
      if (pp.bad > 0) return EP(1 === pp.bad ? "rxBadOne" : "rxBad", "warn", {
        count: pp.bad
      });
      if (pp.left > 0) {
        const ip = 1 === pp.left ? "One" : "";
        return EP(pp.canFill ? `rxPlanLeft${ip}` : `rxPlanLeftNoFill${ip}`, "info", {
          count: pp.left
        })
      }
      if (0 === pp.rods) return EP("rxLimitNoRods", "warn");
      const cp = null !== (ip = pp.idle) && void 0 !== ip ? ip : 0;
      return cp > 0 ? EP(1 === cp ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: cp
      }) : EP("rxPlanReady", "ok")
    }

    function QP(pp) {
      return Math.floor(Math.max(0, pp[1] - 1) / 2)
    }

    function JP(pp) {
      if (pp >= SL && pp < xL) {
        const ip = pp - SL;
        return {
          key: 0 === ip ? `${dP}rxWhy_rodAlone` : 1 === ip ? `${dP}rxWhy_rodOne` : `${dP}rxWhy_rod`,
          params: {
            count: String(ip),
            heat: String(bx * (1 + hx * ip))
          }
        }
      }
      return pp === xL ? {
        key: `${dP}rxWhy_channel`,
        params: {
          amount: String(nx)
        }
      } : pp === LL ? {
        key: `${dP}rxWhy_deadChannel`,
        params: {}
      } : pp === YL ? {
        key: `${dP}rxWhy_graphite`,
        params: {}
      } : {
        key: `${dP}rxWhy_core`,
        params: {}
      }
    }
    const BP = "buildAFactory2Game:";

    function NP(pp, ip) {
      return 0 !== (pp.baf2RxFlags & ip)
    }

    function TP(pp) {
      let {
        status: ip,
        pending: cp,
        store: Op,
        explain: op
      } = pp;
      const {
        t: Ip
      } = (0, Eo.H)(), Sp = NP(ip, yi), xp = ip.baf2RxTarget, Lp = ip.baf2RxThrottle, Yp = function(pp) {
        return {
          press: () => {
            pp.throttlePress()
          },
          drag: ip => {
            pp.throttleDrag(ip)
          },
          release: () => {
            pp.throttleRelease()
          }
        }
      }(Op), Dp = null === (Ap = RP(ip, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, Ap - 10),
        red: Ap
      };
      var Ap;
      return (0, CI.jsxs)("div", {
        className: Ro()("Baf2RxThrottle", {
          Off: Sp
        }),
        onClick: () => {
          Sp && op(`${BP}rxWhy_startFirst`)
        },
        children: [(0, CI.jsx)("span", {
          className: "HideNarrow",
          children: Ip(`${BP}rxThrottle`)
        }), (0, CI.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, CI.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: xp,
            disabled: Sp,
            style: Sp ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": Ip(`${BP}rxThrottle`),
            onPointerDown: () => {
              Yp.press();
              const pp = () => {
                window.removeEventListener("pointerup", pp), window.removeEventListener("pointercancel", pp), Yp.release()
              };
              window.addEventListener("pointerup", pp), window.addEventListener("pointercancel", pp)
            },
            onKeyUp: Yp.release,
            onChange: pp => {
              Yp.drag(Number(pp.target.value))
            }
          }), (0, CI.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${Dp.amber}%, #ffb020 ${Dp.amber}% ${Dp.red}%, #ff3b30 ${Dp.red}%)`
            },
            "aria-hidden": "true"
          }), (0, CI.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${Lp}% + ${8*(1-Lp/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, CI.jsxs)("b", {
          children: [`${xp}%`, (0, CI.jsx)("i", {
            className: Ro()("Baf2RxPendingDot", {
              On: cp
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function fP(pp) {
      let {
        status: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)(), Op = RP(ip, ip.baf2RxTarget), op = kP(ip).tW, Ip = cp("cryo" === op ? `${BP}rxRateCryo` : `${BP}rxRateWater`, {
        rate: vP(Op.coolPerS)
      }), Sp = cp(`${BP}rxChain`, {
        pct: String(ip.baf2RxTarget),
        out: QL(Op.out),
        heat: String(Math.round(Op.settle)),
        coolant: Ip
      }), xp = null !== Op.coolantSecs ? Op.coolantSecs >= 1 ? cp("cryo" === op ? `${BP}rxThrottleCryoOut` : `${BP}rxThrottleWaterOut`, {
        time: mI(cp, Op.coolantSecs)
      }) : cp("cryo" === op ? `${BP}rxThrottleCryoDry` : `${BP}rxThrottleWaterDry`) : null;
      return (0, CI.jsxs)("p", {
        className: "Baf2RxChain",
        children: [Sp, null !== xp ? (0, CI.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", xp]
        }) : (0, CI.jsxs)("span", {
          children: [" \xb7 ", cp(`${BP}rxChainPellets`, {
            amount: JL(Op.pelletsPerMin)
          })]
        })]
      })
    }

    function bP(pp) {
      let {
        view: ip,
        store: cp,
        explain: op,
        explainOnce: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Eo.H)(), {
        status: xp
      } = ip, [Lp, Yp] = (0, Op.useState)(!1), Dp = NP(xp, yi), Pp = NP(xp, Ui), Wp = !NP(xp, ti), yp = xp.baf2RxHeat > 100;
      return (0, CI.jsxs)(CI.Fragment, {
        children: [(0, CI.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, CI.jsx)(TP, {
            status: xp,
            pending: ip.throttlePending,
            store: cp,
            explain: op
          }), (0, CI.jsx)(HP, {
            on: Pp,
            label: Pp ? Sp(`${BP}rxOdLeft`, {
              time: mI(Sp, xp.baf2RxOdLeft)
            }) : Sp(`${BP}rxOverdrive`),
            locked: Wp,
            pending: 0 !== (ip.pendingFlags & Ui),
            toggle: () => {
              Wp ? op(`${BP}rxOverdriveTier`, {
                amount: String(Ap(13))
              }) : Pp ? cp.setFlag(Ui, !1) : ip.odConfirmed ? cp.setFlag(Ui, !0) : Yp(!0)
            }
          }), Dp || ip.startGuard ? (0, CI.jsx)(RS.w, {
            disabled: ip.busy.has("start") || ip.startGuard,
            onClick: () => {
              cp.tap("start", (() => {
                cp.setFlag(yi, !1)
              }))
            },
            children: Sp(ip.startGuard ? `${BP}rxStarting` : `${BP}rxStart`)
          }) : (0, CI.jsx)("span", {
            className: Ro()("Baf2RxScram", {
              Pulse: yp
            }),
            children: (0, CI.jsx)(RS.K, {
              onClick: () => {
                cp.shutDown()
              },
              children: Sp(`${BP}rxScram`)
            })
          })]
        }), (0, CI.jsx)(fP, {
          status: xp
        }), Lp && (0, CI.jsx)(WP, {
          id: "baf2RxOdTitle",
          title: `${BP}rxOdConfirmTitle`,
          body: `${BP}rxOdConfirmBody`,
          yes: `${BP}rxOdConfirm`,
          cancel: () => {
            Yp(!1)
          },
          confirm: () => {
            Yp(!1), cp.tap("odConfirm", (() => {
              cp.confirmOverdrive(), cp.setFlag(Ui, !0)
            })), Ip(`${BP}rxWhy_overdrive`)
          }
        })]
      })
    }

    function hP(pp) {
      let {
        view: ip,
        store: cp,
        keepSize: Op
      } = pp;
      const {
        t: op
      } = (0, Eo.H)(), {
        status: Ip
      } = ip;
      return (0, CI.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, CI.jsx)(tP, {
          kind: "reactor",
          dims: ip.dims,
          cap: Ip.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: pp => {
            cp.resize(pp)
          }
        }), Op ? (0, CI.jsx)(RS.j, {
          onClick: Op,
          children: op(`${BP}rxKeepSize`)
        }) : (0, CI.jsxs)(CI.Fragment, {
          children: [(0, CI.jsx)(HP, {
            on: ip.guide,
            label: op(`${BP}rxGuide`),
            toggle: () => {
              cp.toggleGuide()
            }
          }), NP(Ip, di) && (0, CI.jsx)(HP, {
            on: ip.starter,
            label: op(`${BP}rxStarter`),
            toggle: () => {
              cp.toggleStarter()
            }
          }), (0, CI.jsx)(YP, {
            status: Ip,
            store: cp,
            busy: ip.busy.has("fill")
          })]
        })]
      })
    }

    function aP(pp) {
      let {
        need: ip,
        kind: cp = "reactor",
        explain: Op
      } = pp;
      const {
        t: op
      } = (0, Eo.H)(), Ip = ip.length <= 3, Sp = ip.reduce(((pp, ip) => {
        let [, cp] = ip;
        return pp + cp
      }), 0);
      return (0, CI.jsxs)("div", {
        className: Ro()("Baf2RxParts", {
          Compact: !Ip
        }),
        onClick: () => {
          Op("battery" === cp ? `${BP}batWhy_store` : `${BP}rxShellHint`)
        },
        children: [Sp > 0 && (0, CI.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === Sp ? op(`${BP}rxBlocksOne`) : op(`${BP}rxBlocks`, {
            blocks: String(Sp)
          })
        }), 0 === ip.length ? (0, CI.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: op("battery" === cp ? `${BP}batPartsDone` : `${BP}rxShellDone`)
        }) : mL(ip).map((pp => {
          let [ip, cp, Op] = pp;
          const Sp = function(pp) {
            const ip = EL[pp];
            if (void 0 === ip) return null;
            const [cp, Op, op] = ML[ip].colour.map((pp => Math.round(255 * pp)));
            return `rgb(${cp}, ${Op}, ${op})`
          }(ip);
          return (0, CI.jsxs)("span", {
            className: "Baf2RxChip",
            title: LI(op, ip),
            children: [(0, CI.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === Sp ? {
                visibility: "hidden"
              } : {
                background: Sp
              },
              title: op(`${BP}rxShopGhost`)
            }), (0, CI.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, CI.jsx)(Qo.d, {
                itemName: ip,
                amount: 0
              })
            }), (0, CI.jsx)("span", {
              className: "Baf2RxChipName",
              children: Ip ? `${cp} ${xp=LI(op,ip),xp.replace(/^(Reactor|Battery) (?=\S)/,"")}` : cp
            }), Op >= cp ? (0, CI.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, CI.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: Ip ? op(`${BP}rxShopShort`, {
                count: String(cp - Op)
              }) : "\u2212" + (cp - Op)
            })]
          }, ip);
          var xp
        }))]
      })
    }
    const nP = "buildAFactory2Game:";

    function FP(pp) {
      var ip, cp, op, Ip, Sp, xp, Lp;
      let {
        store: Yp,
        close: Dp
      } = pp;
      const {
        t: Ap
      } = (0, Eo.H)(), Pp = gS(), Wp = yP(Yp), {
        explained: yp,
        explain: Up
      } = OP("baf2RxExplained"), wp = (0, Op.useCallback)(((pp, ip) => {
        Up(Ap(pp, ip))
      }), [Up, Ap]), vp = null === Wp || void 0 === Wp ? void 0 : Wp.status, tp = !0 === (null === vp || void 0 === vp ? void 0 : vp.baf2BatReadOnly), Hp = pp => {
        vp && Pp.send(Wi(vp.baf2BatAt, pp))
      }, [dp, ep, jp] = null !== (ip = null === Wp || void 0 === Wp ? void 0 : Wp.dims) && void 0 !== ip ? ip : [0, 0, 0], kp = QL(null !== (cp = null === Wp || void 0 === Wp ? void 0 : Wp.TA) && void 0 !== cp ? cp : 0), mp = !0 === (null === vp || void 0 === vp ? void 0 : vp.baf2BatFormed), Rp = null !== (op = null === vp || void 0 === vp ? void 0 : vp.baf2BatStored) && void 0 !== op ? op : 0, qp = Math.max(1, null !== (Ip = null === vp || void 0 === vp ? void 0 : vp.baf2BatIslandCap) && void 0 !== Ip ? Ip : 1), Mp = Math.min(100, 100 * Rp / qp), Cp = null === vp || void 0 === vp ? void 0 : vp.baf2BatNetPerS, Ep = function(pp, ip, cp) {
        return cp > 0 && ip >= cp ? "full" : void 0 !== pp && pp >= .05 ? "charging" : void 0 !== pp && pp <= -.05 && ip > 0 ? "draining" : "steady"
      }(Cp, Rp, null !== (Sp = null === vp || void 0 === vp ? void 0 : vp.baf2BatIslandCap) && void 0 !== Sp ? Sp : 0), Xp = null !== (xp = null === vp || void 0 === vp ? void 0 : vp.baf2BatMadePerS) && void 0 !== xp ? xp : 0, lp = null !== (Lp = null === vp || void 0 === vp ? void 0 : vp.baf2BatUsedPerS) && void 0 !== Lp ? Lp : 0;
      let Qp, Jp = {},
        Bp = "info";
      if (vp)
        if (mp) "charging" === Ep ? (Qp = `${nP}batLine_charging`, Jp = {
          time: mI(Ap, (qp - Rp) / Math.max(.05, null !== Cp && void 0 !== Cp ? Cp : 0))
        }, Bp = "ok") : "draining" === Ep ? (Qp = `${nP}batLine_draining`, Jp = {
          time: mI(Ap, Rp / Math.max(.05, -(null !== Cp && void 0 !== Cp ? Cp : 0)))
        }, Bp = "warn") : Qp = "full" === Ep ? `${nP}batLine_full` : Rp <= 0 && lp > 0 ? `${nP}batLine_empty` : `${nP}batLine_steady`;
        else {
          var Np;
          const pp = lP({
            left: vp.baf2BatNeed.reduce(((pp, ip) => {
              let [, cp] = ip;
              return pp + cp
            }), 0),
            bad: vp.baf2BatBad,
            rods: 1,
            canFill: !0 === vp.baf2BatCanFill,
            melted: !1
          });
          Qp = pp.key, Jp = {
            count: String(null !== (Np = pp.params.count) && void 0 !== Np ? Np : 0)
          }, Bp = pp.tone
        }
      else Qp = `${nP}batLine_steady`;
      const Tp = Math.max(Xp, lp, 1);
      return (0, CI.jsx)(mS.c, {
        close: Dp,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, CI.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, CI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CI.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, CI.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, CI.jsx)(Qo.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, CI.jsxs)("div", {
                children: [(0, CI.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: Ap(`${nP}batTitle`)
                }), vp && (0, CI.jsxs)("p", {
                  className: Ro()("Baf2RxSubtitle", {
                    good: mp && "charging" === Ep,
                    warn: mp && "draining" === Ep
                  }),
                  children: [dp, "\xd7", ep, "\xd7", jp, " \xb7 ", Ap(mp ? `${nP}batState_${Ep}` : `${nP}rxSubPlanShort`)]
                })]
              })]
            }), (0, CI.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [vp && !tp && (0, CI.jsx)(UP, {
                kind: "battery",
                cap: mp ? kp : void 0,
                busy: null === Wp || void 0 === Wp ? void 0 : Wp.busy.has("apart"),
                apart: () => {
                  Yp.tap("apart", (() => {
                    Hp("apart")
                  }))
                }
              }), (0, CI.jsx)(RS.l, {
                onClick: Dp
              })]
            })]
          }), Wp && vp && (0, CI.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, CI.jsxs)("div", {
              className: Ro()("Baf2RxFlow Baf2BatFlow", {
                Plan: !mp
              }),
              children: [(0, CI.jsx)(pP, {
                kind: "Power",
                label: Ap(`${nP}batMade`),
                number: mp ? `\u26a1 ${QL(Xp)}/s` : "\u2014",
                note: Ap(`${nP}batMadeNote`),
                share: mp ? Xp / Tp : void 0,
                onExplain: () => {
                  wp(`${nP}batWhy_made`)
                }
              }), (0, CI.jsx)(iP, {
                kind: "Power",
                step: mp ? MP(Xp, Tp) : 0,
                planned: !mp
              }), (0, CI.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  wp(`${nP}batWhy_store`)
                },
                children: [(0, CI.jsx)(cP, {
                  max: 100,
                  bands: [{
                    upTo: mp ? Mp : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, CI.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, CI.jsx)("b", {
                    className: "Baf2BatStored",
                    children: mp ? Ap(`${nP}batStoredOf`, {
                      amount: QL(Rp),
                      cap: QL(vp.baf2BatIslandCap)
                    }) : Ap(`${nP}batWillHold`, {
                      cap: kp
                    })
                  }), (0, CI.jsx)("span", {
                    children: Ap(`${nP}batAdds`, {
                      cap: kp
                    })
                  }), mp && (0, CI.jsx)("small", {
                    children: Ap(`${nP}batBreakNote`, {
                      cap: kp
                    })
                  })]
                })]
              }), (0, CI.jsx)(iP, {
                kind: "Power",
                step: mp ? MP(lp, Tp) : 0,
                planned: !mp
              }), (0, CI.jsx)(pP, {
                kind: "Power",
                label: Ap(`${nP}batUsed`),
                number: mp ? `\u26a1 ${QL(lp)}/s` : "\u2014",
                note: Ap(`${nP}batUsedNote`),
                share: mp ? lp / Tp : void 0,
                onExplain: () => {
                  wp(`${nP}batWhy_used`)
                }
              })]
            }), (0, CI.jsx)(oP, {
              text: Ap(Qp, Jp),
              tone: Bp,
              explained: yp
            }), tp ? (0, CI.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: Ap(`${nP}rxNotYours`)
            }) : !mp && (0, CI.jsxs)(CI.Fragment, {
              children: [(0, CI.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, CI.jsx)(tP, {
                  kind: "battery",
                  dims: Wp.dims,
                  cap: vp.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: pp => {
                    Yp.resize(pp)
                  }
                }), (0, CI.jsx)(HP, {
                  on: Wp.guide,
                  label: Ap(`${nP}rxGuide`),
                  toggle: () => {
                    Yp.toggleGuide()
                  }
                }), vp.baf2BatCanFill && (0, CI.jsx)(RS.o, {
                  disabled: !RL("battery", vp.baf2BatNeed) || Wp.busy.has("fill"),
                  onClick: () => {
                    Yp.tap("fill", (() => {
                      Hp("fill")
                    }))
                  },
                  children: Ap(`${nP}rxFill`)
                })]
              }), (0, CI.jsx)(aP, {
                need: vp.baf2BatNeed,
                kind: "battery",
                explain: wp
              })]
            })]
          })]
        })
      })
    }
    const gP = "buildAFactory2Game:",
      GP = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function rP(pp, ip) {
      return pp === IL ? null : ip ? "#4a4440" : pp < xL ? GP[pp - SL] : pp === xL ? "#3fd0f0" : pp === LL ? "#2c3e4c" : "#55585e"
    }

    function ZP(pp) {
      let {
        inner: ip,
        looks: cp,
        layer: Op,
        setLayer: op,
        glow: Ip,
        melted: Sp,
        explain: xp
      } = pp;
      const {
        t: Lp
      } = (0, Eo.H)(), [Yp, Dp, Ap] = ip, Pp = Math.max(0, Math.min(Dp - 1, Op)), Wp = [];
      for (let Up = 0; Up < Ap; Up++)
        for (let pp = 0; pp < Yp; pp++) {
          var yp;
          const ip = null !== (yp = cp[(Pp * Ap + Up) * Yp + pp]) && void 0 !== yp ? yp : IL,
            Op = rP(ip, Sp),
            op = ip >= SL && ip < xL;
          Wp.push(null === Op ? (0, CI.jsx)("circle", {
            cx: pp + .5,
            cy: Up + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${pp},${Up}`) : (0, CI.jsx)("rect", {
            x: pp + .06,
            y: Up + .06,
            width: .88,
            height: .88,
            fill: Op,
            opacity: op && !Sp ? .5 + .5 * Ip : 1,
            onClick: pp => {
              pp.stopPropagation();
              const cp = JP(ip);
              xp(cp.key, cp.params)
            }
          }, `${pp},${Up}`))
        }
      return (0, CI.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, CI.jsx)("svg", {
          className: Ro()("Baf2RxMapGrid", {
            Melted: Sp
          }),
          viewBox: `0 0 ${Math.max(1,Yp)} ${Math.max(1,Ap)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": Lp(`${gP}rxWhy_core`),
          onClick: () => {
            xp(`${gP}rxWhy_core`, {})
          },
          children: Wp
        }), Dp > 1 && (0, CI.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, CI.jsx)("button", {
            type: "button",
            "aria-label": Lp(`${gP}rxLayerDown`),
            disabled: Pp <= 0,
            onClick: () => {
              op(Pp - 1)
            },
            children: "\u25bc"
          }), (0, CI.jsxs)("span", {
            children: [(0, CI.jsx)("span", {
              className: "HideNarrow",
              children: Lp(`${gP}rxLayer`, {
                n: String(Pp + 1),
                of: String(Dp)
              })
            }), (0, CI.jsx)("span", {
              className: "ShowNarrow",
              children: Lp(`${gP}rxLayerShort`, {
                n: String(Pp + 1),
                of: String(Dp)
              })
            })]
          }), (0, CI.jsx)("button", {
            type: "button",
            "aria-label": Lp(`${gP}rxLayerUp`),
            disabled: Pp >= Dp - 1,
            onClick: () => {
              op(Pp + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const zP = "buildAFactory2Game:",
      sP = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: zx,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: dL,
        kind: "red"
      }],
      KP = [50, zx, 100];

    function VP(pp) {
      let {
        stats: ip,
        t: cp,
        explain: Op
      } = pp;
      const op = AL(ip),
        Ip = Math.max(1, ip.fuelHeat, ip.cooling, ip.size),
        Sp = [
          ["fuel", `${zP}rxBarRods`, ip.fuelHeat],
          ["cooling", `${zP}rxBarCooling`, ip.cooling],
          ["size", `${zP}rxBarSize`, ip.size]
        ];
      return (0, CI.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          Op(`${zP}rxWhy_bars`)
        },
        children: [(0, CI.jsx)("span", {
          className: "Baf2RxMostLine",
          children: cp(`${zP}rxMost`, {
            amount: QL(Math.min(ip.fuelHeat, ip.cooling, ip.size))
          })
        }), (0, CI.jsx)("span", {
          className: "Baf2RxMostBars",
          children: Sp.map((pp => {
            let [ip, Op, Sp] = pp;
            return (0, CI.jsxs)("span", {
              className: Ro()("Baf2RxMostBar", ip, {
                Low: ip === op
              }),
              children: [(0, CI.jsx)("small", {
                children: cp(Op)
              }), (0, CI.jsx)("i", {
                children: (0, CI.jsx)("b", {
                  style: {
                    width: 100 * Sp / Ip + "%"
                  }
                })
              })]
            }, ip)
          }))
        })]
      })
    }

    function pW(pp) {
      var ip;
      let {
        view: cp,
        heat: op,
        settle: Ip,
        settleLine: Sp,
        settleBad: xp,
        explain: Lp
      } = pp;
      const {
        t: Yp
      } = (0, Eo.H)(), {
        status: Dp
      } = cp, Ap = Dp.baf2RxAt.join(","), [Pp, Wp] = (0, Op.useState)((() => QP(cp.inner)));
      (0, Op.useEffect)((() => {
        Wp(QP(cp.inner))
      }), [Ap, cp.inner[1]]);
      const yp = null !== (ip = cp.plan) && void 0 !== ip ? ip : uL(Dp),
        Up = cp.plan ? cp.plan.powerPerUnit : Dp.baf2RxStats[8],
        wp = null === op ? null : "alarm" === (vp = HL(Dp)) ? "red" : "hot" === vp ? "hot" : "warm" === vp ? "warm" : "cold";
      var vp;
      const tp = !Dp.baf2RxFormed && function(pp, ip) {
          return 0 !== (pp.baf2RxFlags & ip)
        }(Dp, wi),
        Hp = Dp.baf2RxDamage,
        dp = Dp.baf2RxDamageTrend;
      return (0, CI.jsxs)("div", {
        className: Ro()("Baf2RxCore", null !== wp && void 0 !== wp ? wp : "plan"),
        children: [(0, CI.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, CI.jsx)(ZP, {
            inner: cp.inner,
            looks: cp.looks,
            layer: Pp,
            setLayer: Wp,
            glow: Dp.baf2RxFormed ? Dp.baf2RxThrottle / 100 : 1,
            melted: tp,
            explain: Lp
          }), (0, CI.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              Lp(`${zP}rxWhy_heat`)
            },
            children: [null !== op ? (0, CI.jsxs)(CI.Fragment, {
              children: [(0, CI.jsx)("b", {
                children: Yp(`${zP}rxHeatPct`, {
                  pct: String(op)
                })
              }), (0, CI.jsx)("span", {
                className: Ro()("Baf2RxBand", wp),
                children: Yp(`${zP}rxBand_${wp}`)
              })]
            }) : (0, CI.jsx)("b", {
              children: Yp(`${zP}rxHeat`)
            }), null !== Sp && (0, CI.jsx)("span", {
              className: Ro()("Baf2RxSettle", {
                Bad: xp
              }),
              children: Sp
            }), Hp >= 1 && (0, CI.jsxs)("span", {
              className: Ro()("Baf2RxDamage", dp),
              children: [Yp(`${zP}rxDamageLine`, {
                pct: String(Hp)
              }), " \xb7 ", Yp(`${zP}rxDamage_${dp}`), (0, CI.jsx)("i", {
                children: (0, CI.jsx)("b", {
                  style: {
                    width: `${Math.min(100,Hp)}%`
                  }
                })
              })]
            })]
          }), (0, CI.jsx)(cP, {
            max: dL,
            bands: sP,
            ticks: KP,
            now: op,
            settle: Ip,
            settleTone: xp ? "bad" : null,
            onExplain: () => {
              Lp(`${zP}rxWhy_heat`)
            }
          })]
        }), (0, CI.jsx)(VP, {
          stats: yp,
          t: Yp,
          explain: Lp
        }), Up > 0 && (0, CI.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            Lp(`${zP}rxWhy_perPellet`)
          },
          children: Yp(`${zP}rxPerPellet`, {
            amount: QL(Up)
          })
        })]
      })
    }

    function iW(pp, ip) {
      var cp;
      if (!pp.baf2RxStore) return {
        note: ip(`${zP}rxUpTo`, {
          amount: QL(pp.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [Op, op] = pp.baf2RxStore, Ip = op > 0 ? Op / op : 0, Sp = String(Math.floor(100 * Ip)), xp = null !== (cp = pp.baf2RxStoreNetPerS) && void 0 !== cp ? cp : 0, Lp = function(pp) {
        var ip, cp;
        const [Op, op] = null !== (ip = pp.baf2RxStore) && void 0 !== ip ? ip : [0, 0], Ip = null !== (cp = pp.baf2RxStoreNetPerS) && void 0 !== cp ? cp : 0;
        return op > 0 && Op >= op - 1 ? "running" === pp.baf2RxState ? `${dP}rxStoreFull` : `${dP}rxStoreFullOnly` : Ip > .05 ? `${dP}rxStoreLine` : Ip < -.05 ? "running" === pp.baf2RxState ? `${dP}rxStoreUsesMore` : `${dP}rxStoreDraining` : `${dP}rxStorePct`
      }(pp);
      return {
        note: ip(Lp, Lp === `${zP}rxStoreLine` ? {
          pct: Sp,
          time: mI(ip, (op - Op) / xp)
        } : {
          pct: Sp
        }),
        share: Ip
      }
    }

    function cW(pp) {
      let {
        view: ip,
        explain: cp,
        preview: Op
      } = pp;
      const {
        t: op
      } = (0, Eo.H)(), {
        status: Ip
      } = ip, Sp = iL(OL(...ip.dims)), xp = qP(Ip), Lp = Math.min(Math.round(Ip.baf2RxFuel), Sp.fuel), Yp = "running" === Ip.baf2RxState, Dp = Yp ? MP(Ip.baf2RxOut, Ip.baf2RxMaxNow) : 0, Ap = function(pp, ip, cp) {
        const Op = kP(pp),
          op = "cryo" === Op.tW,
          Ip = cp ? cp.coolantSecs : Op.pct >= 100 && pp.baf2RxOut >= 1 ? RP(pp, pp.baf2RxThrottle).coolantSecs : null;
        let Sp, xp = !1;
        if (Op.pct < 100) {
          const cp = 1 === Op.makersShort,
            Ip = !op && pp.baf2RxCryoOpen ? "OrCryo" : "";
          Sp = Op.makersShort > 0 ? ip(op ? `${zP}rxCryoAddMixer${cp?"":"s"}` : `${zP}rxWaterAddCondenser${cp?"":"s"}${Ip}`, {
            count: String(Op.makersShort)
          }) : ip(`${zP}rxWaterNeeds`, {
            rate: vP(Op.needPerS)
          })
        } else if (null !== Ip) Sp = ip(`${zP}rxWaterRunsOut`, {
          time: mI(ip, Ip)
        });
        else if (Op.waterBeside > 0) Sp = ip(`${zP}rxCryoPlusWater`, {
          rate: vP(Op.waterBeside)
        });
        else {
          const pp = function(pp) {
            return pp.inPerS <= 0 ? "rxWaterNoSupply" : pp.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(Op);
          xp = "rxWaterNoSupply" === pp, Sp = ip(`${zP}${pp}`, {
            amount: QL(Op.stored)
          })
        }
        return {
          kind: op ? "Cryo" : "Water",
          label: ip(op ? `${zP}rxCryo` : `${zP}rxWater`),
          number: `${vP(Op.usePerS)}/s`,
          preview: cp ? `${vP(cp.coolPerS)}/s` : null,
          note: Sp,
          tone: "noWater" === pp.baf2RxState ? "danger" : xp ? "warn" : (Lp = Op.pct, Yp = Ip, Lp < 100 ? "danger" : null === Yp ? null : Yp < 300 ? "danger" : "warn"),
          share: Op.pct / 100,
          why: op ? `${zP}rxWhy_cryo` : `${zP}rxWhy_water`,
          short: Op.pct < 100
        };
        var Lp, Yp
      }(Ip, op, Op), Pp = qL(Ip, Sp.waste, xp), Wp = iW(Ip, op), yp = RP(Ip, Ip.baf2RxTarget), Up = Yp && Math.abs(yp.settle - Ip.baf2RxHeat) >= 3, wp = Op ? Op.pelletsPerMin / 60 : null;
      return (0, CI.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, CI.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, CI.jsx)(pP, {
            kind: "Fuel",
            label: op(`${zP}rxFuel`),
            number: String(Lp),
            preview: null !== wp && wp > 0 && Ip.baf2RxFuel > 0 ? mI(op, Ip.baf2RxFuel / wp) : null,
            note: Ip.baf2RxFuel <= 0 ? op(`${zP}rxFuelEmpty`) : xp > 0 ? op(`${zP}rxFuelLeft`, {
              time: mI(op, Ip.baf2RxFuel / xp)
            }) : op(1 === Lp ? `${zP}rxFuelPellet` : `${zP}rxFuelPellets`),
            tone: "noFuel" === Ip.baf2RxState ? "danger" : Ip.baf2RxFuel < 2 ? "warn" : null,
            share: Ip.baf2RxFuel / Sp.fuel,
            onExplain: () => {
              cp(`${zP}rxWhy_fuel`)
            }
          }), (0, CI.jsx)(pP, {
            kind: Ap.kind,
            label: Ap.label,
            number: Ap.number,
            preview: Ap.preview,
            note: Ap.note,
            tone: Ap.tone,
            share: Ap.share,
            onExplain: () => {
              cp(Ap.why)
            }
          })]
        }), (0, CI.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, CI.jsx)(iP, {
            kind: "Fuel",
            step: Dp,
            short: "noFuel" === Ip.baf2RxState
          }), (0, CI.jsx)(iP, {
            kind: Ap.kind,
            step: Dp,
            short: Ap.short || "noWater" === Ip.baf2RxState
          })]
        }), (0, CI.jsx)(pW, {
          view: ip,
          heat: Ip.baf2RxHeat,
          settle: Math.min(dL, yp.settle),
          settleLine: Up ? op(`${zP}rxHeatSettles`, {
            pct: String(Math.round(yp.settle)),
            time: mI(op, yp.settleS)
          }) : null,
          settleBad: yp.settle > 100,
          explain: cp
        }), (0, CI.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, CI.jsx)(iP, {
            kind: "Power",
            step: Dp
          }), (0, CI.jsx)(iP, {
            kind: "Waste",
            step: Yp && Ip.baf2RxFuel - Ip.baf2RxPu > 0 ? Dp : 0,
            short: Pp.full
          })]
        }), (0, CI.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, CI.jsx)(pP, {
            kind: "Power",
            label: op(`${zP}rxPowerOut`),
            number: `\u26a1 ${QL(Ip.baf2RxOut)}/s`,
            preview: Op ? QL(Op.out) : null,
            note: Wp.note,
            share: Wp.share,
            onExplain: () => {
              cp(`${zP}rxWhy_power`)
            }
          }), (0, CI.jsx)(pP, {
            kind: "Waste",
            label: op(`${zP}rxWaste`),
            number: `${Math.floor(Ip.baf2RxWaste)}/${Sp.waste}`,
            note: Pp.full ? op(`${zP}rxWasteFull`) : null !== Pp.fullInS ? op(`${zP}rxWasteFullIn`, {
              time: mI(op, Pp.fullInS)
            }) : op(`${zP}rxWasteSpent`),
            tone: "wasteFull" === Ip.baf2RxState ? "danger" : Pp.full ? "warn" : null,
            share: Ip.baf2RxWaste / Sp.waste,
            onExplain: () => {
              cp(`${zP}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function OW(pp) {
      let {
        view: ip,
        explain: cp
      } = pp;
      const {
        t: Op
      } = (0, Eo.H)(), op = ip.plan;
      if (!op) return null;
      const Ip = op.fuelHeat <= 0 ? null : op.cooling > 0 ? Math.min(dL, 100 * op.fuelHeat / op.cooling) : dL,
        Sp = Op(`${zP}rxPlanAtFull`);
      return (0, CI.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, CI.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, CI.jsx)(pP, {
            kind: "Fuel",
            label: Op(`${zP}rxFuel`),
            number: Op(`${zP}rxPlanPerMin`, {
              amount: JL(op.pelletsPerMin)
            }),
            note: Op(`${zP}rxPlanPellets`),
            onExplain: () => {
              cp(`${zP}rxWhy_fuel`)
            }
          }), (0, CI.jsx)(pP, {
            kind: "Water",
            label: Op(`${zP}rxWater`),
            number: `${vP(op.waterPerS)}/s`,
            note: ip.status.baf2RxCryoOpen && op.waterPerS > 0 ? Op(`${zP}rxPlanOrCryo`, {
              rate: vP(wL(op, Vp.e) * Vp.k)
            }) : Sp,
            onExplain: () => {
              cp(`${zP}rxWhy_water`)
            }
          })]
        }), (0, CI.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, CI.jsx)(iP, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, CI.jsx)(iP, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, CI.jsx)(pW, {
          view: ip,
          heat: null,
          settle: Ip,
          settleLine: null === Ip ? null : Op(`${zP}rxPlanHeat`, {
            pct: String(Math.round(Ip))
          }),
          settleBad: null !== Ip && Ip > 100,
          explain: cp
        }), (0, CI.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, CI.jsx)(iP, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, CI.jsx)(iP, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, CI.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, CI.jsx)(pP, {
            kind: "Power",
            label: Op(`${zP}rxPowerOut`),
            number: `\u26a1 ${QL(op.max)}/s`,
            note: Sp,
            onExplain: () => {
              cp(`${zP}rxWhy_power`)
            }
          }), (0, CI.jsx)(pP, {
            kind: "Waste",
            label: Op(`${zP}rxWaste`),
            number: Op(`${zP}rxPlanPerMin`, {
              amount: JL(op.pelletsPerMin)
            }),
            note: Op(`${zP}rxWasteSpent`),
            onExplain: () => {
              cp(`${zP}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const oW = "buildAFactory2Game:",
      IW = {
        key: `${oW}rxWaiting`,
        params: {},
        tone: "info"
      };

    function SW(pp, ip) {
      return 0 !== (pp.baf2RxFlags & ip)
    }

    function xW(pp) {
      var ip, cp;
      let {
        store: op,
        close: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Eo.H)(), xp = yP(op), {
        explained: Lp,
        hinting: Yp,
        explain: Dp,
        explainOnce: Ap
      } = OP("baf2RxExplained"), Pp = (0, Op.useCallback)(((pp, ip) => {
        Dp(Sp(pp, ip))
      }), [Dp, Sp]), Wp = (0, Op.useCallback)(((pp, ip) => {
        Ap(pp, Sp(pp, ip))
      }), [Ap, Sp]), [yp, Up] = (0, Op.useState)(!1), [wp, vp] = (0, Op.useState)(!1), tp = null === xp || void 0 === xp ? void 0 : xp.status, Hp = null === tp || void 0 === tp ? void 0 : tp.baf2RxAt.join(","), dp = !0 === (null === tp || void 0 === tp ? void 0 : tp.baf2RxFormed);
      (0, Op.useEffect)((() => {
        vp(!1), Up(!1)
      }), [Hp, dp]), (0, Op.useEffect)((() => (op.opened(), () => {
        op.closed()
      })), [op]);
      const ep = void 0 !== tp && SW(tp, Hi),
        jp = tp ? dp ? HL(tp) : null !== xp && void 0 !== xp && xp.plan ? function(pp, ip) {
          if (pp <= 0) return "off";
          if (ip <= 0) return "alarm";
          const cp = 100 * pp / ip;
          return cp < 50 ? "calm" : cp < PL ? "warm" : cp <= 100 ? "hot" : "alarm"
        }(xp.plan.fuelHeat, xp.plan.cooling) : "off" : "off",
        kp = tp ? eL(tp) : null,
        mp = xp ? xp.waiting ? IW : dp ? XP(xp.status) : function(pp) {
          var ip, cp;
          const {
            status: Op
          } = pp;
          return lP({
            left: Op.baf2RxNeed.reduce(((pp, ip) => {
              let [, cp] = ip;
              return pp + cp
            }), 0),
            bad: Op.baf2RxBad,
            rods: null !== (ip = null === (cp = pp.plan) || void 0 === cp ? void 0 : cp.rods) && void 0 !== ip ? ip : 0,
            canFill: SW(Op, vi),
            melted: SW(Op, wi),
            idle: pp.looks.reduce(((pp, ip) => pp + (ip === LL ? 1 : 0)), 0)
          })
        }(xp) : null,
        Rp = Yp && null !== mp && ("ok" === mp.tone || "info" === mp.tone),
        qp = tp ? function(pp) {
          const ip = 0 !== (pp.baf2RxFlags & yi),
            cp = pp.baf2RxHeat < Kx;
          return 0 !== (pp.baf2RxFlags & wi) || cp && (ip || !pp.baf2RxFormed) ? null : pp.baf2RxFormed && !ip ? {
            key: `${tL}rxApartScram`,
            params: {}
          } : {
            key: `${tL}rxApartCooling`,
            params: {
              pct: String(Kx)
            }
          }
        }(tp) : null,
        [Mp, Cp, Ep] = null !== (ip = null === xp || void 0 === xp ? void 0 : xp.dims) && void 0 !== ip ? ip : [0, 0, 0],
        Xp = `${Mp}\xd7${Cp}\xd7${Ep}`;
      return (0, CI.jsx)(mS.c, {
        close: Ip,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, CI.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, CI.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, CI.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, CI.jsx)(wP, {
                mood: jp
              }), (0, CI.jsxs)("div", {
                children: [(0, CI.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: Sp(`${oW}rxTitle`)
                }), xp && (0, CI.jsxs)("p", {
                  className: Ro()("Baf2RxSubtitle", dp && (null === kp || void 0 === kp ? void 0 : kp.tone)),
                  children: [dp && !ep ? (0, CI.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": Sp(`${oW}rxChangeSize`),
                    onClick: () => {
                      if (!tp) return;
                      const pp = SW(tp, yi);
                      var ip;
                      (ip = {
                        scram: pp,
                        heat: tp.baf2RxHeat
                      }).scram && ip.heat < Kx ? Up(!0) : Pp(pp ? `${oW}rxResizeCooling` : `${oW}rxResizeHot`, {
                        pct: String(Kx)
                      })
                    },
                    children: [Xp, " \u270e"]
                  }) : Xp, " \xb7 ", Sp(dp ? null !== (cp = null === kp || void 0 === kp ? void 0 : kp.label) && void 0 !== cp ? cp : `${oW}rxState_running` : `${oW}rxSubPlanShort`)]
                })]
              })]
            }), (0, CI.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [xp && !ep && (0, CI.jsx)(UP, {
                kind: "reactor",
                busy: xp.busy.has("apart"),
                whyNot: qp ? () => {
                  Pp(qp.key, qp.params)
                } : null,
                apart: () => {
                  op.tap("apart", (() => {
                    op.send("apart")
                  }))
                }
              }), (0, CI.jsx)(RS.l, {
                onClick: Ip
              })]
            })]
          }), xp && mp && (0, CI.jsxs)("div", {
            className: "Baf2RxBody",
            children: [dp ? (0, CI.jsx)(cW, {
              view: xp,
              explain: Pp,
              preview: mP(xp.status)
            }) : (0, CI.jsx)(OW, {
              view: xp,
              explain: Pp
            }), (0, CI.jsx)(oP, {
              text: Rp ? `${CP(Sp,mp)} ${Sp(`${oW}rxTapHint`)}` : CP(Sp, mp),
              tone: mp.tone,
              explained: Lp
            }), ep ? (0, CI.jsxs)(CI.Fragment, {
              children: [(0, CI.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: Sp(`${oW}rxNotYours`)
              }), (0, CI.jsx)(DP, {
                status: xp.status,
                store: op,
                readOnly: !0
              })]
            }) : dp && !wp ? (0, CI.jsxs)(CI.Fragment, {
              children: [(0, CI.jsx)(bP, {
                view: xp,
                store: op,
                explain: Pp,
                explainOnce: Wp
              }), void 0 !== xp.status.baf2RxLayout && xP(xp.status) && (0, CI.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, CI.jsx)(DP, {
                  status: xp.status,
                  store: op,
                  readOnly: !1,
                  bare: !0
                }), (0, CI.jsx)(YP, {
                  status: xp.status,
                  store: op,
                  busy: xp.busy.has("fill")
                })]
              })]
            }) : (0, CI.jsxs)(CI.Fragment, {
              children: [(0, CI.jsx)(hP, {
                view: xp,
                store: op,
                keepSize: dp ? () => {
                  vp(!1)
                } : void 0
              }), kL(xp.dims, xp.status.baf2RxDims) && (0, CI.jsx)(aP, {
                need: xp.status.baf2RxNeed,
                explain: Pp
              }), (0, CI.jsx)(DP, {
                status: xp.status,
                store: op,
                readOnly: !1
              })]
            }), yp && (0, CI.jsx)(WP, {
              id: "baf2ResizeTitle",
              title: `${oW}rxResizeConfirmTitle`,
              body: `${oW}rxResizeConfirmBody`,
              yes: `${oW}rxChangeSize`,
              cancel: () => {
                Up(!1)
              },
              confirm: () => {
                Up(!1), vp(!0)
              }
            })]
          })]
        })
      })
    }
    class LW {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(pp) {
        this.view = pp;
        for (const ip of this.listeners) ip()
      }
      get() {
        return this.view
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
    }

    function YW(pp) {
      let {
        commands: ip,
        store: cp,
        power: op,
        water: Ip,
        reactor: Sp,
        battery: xp,
        collider: Lp,
        terminal: Yp,
        quests: Dp,
        tutorial: Ap,
        close: Pp,
        leave: Wp,
        askIslands: yp,
        showCore: Up,
        openSocial: wp
      } = pp;
      const {
        userContext: vp
      } = (0, Tx.b)(), tp = Nx.featureFlags.useSocialFeatures && vp.isLoggedIn(), [Hp, dp] = (0, Op.useState)((() => cp.get()));
      (0, Op.useEffect)((() => cp.subscribe((() => {
        dp(cp.get())
      }))), [cp]);
      const ep = "islands" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) ? Hp.backToCore : void 0;
      return (0, CI.jsxs)(FS.Provider, {
        value: ip,
        children: ["core" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) && (0, CI.jsx)(HA, {
          view: Hp.core,
          close: Pp,
          askIslands: yp
        }), "dropMap" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) && (0, CI.jsx)(jA, {
          message: Hp.dropMap,
          quests: Dp,
          close: Pp,
          leave: Wp
        }), "islands" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) && (0, CI.jsx)(hA, {
          message: Hp.islands,
          arrivedAtMs: Hp.arrivedAtMs,
          close: ep ? () => {
            Up(ep)
          } : Pp,
          leave: Wp,
          openSocial: tp ? wp : null
        }), "quests" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) && (0, CI.jsx)(TD, {
          store: Dp,
          tutorial: Ap,
          close: Pp
        }), "transfer" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) && (0, CI.jsx)(SD, {
          message: Hp.transfer,
          arrivedAtMs: Hp.arrivedAtMs,
          close: Pp,
          leave: Wp
        }), "power" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) && (0, CI.jsx)(JS, {
          store: op,
          close: Pp
        }), "water" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) && (0, CI.jsx)(Hx, {
          store: Ip,
          close: Pp
        }), "reactor" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) && (0, CI.jsx)(xW, {
          store: Sp,
          close: Pp
        }), "battery" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) && (0, CI.jsx)(FP, {
          store: xp,
          close: Pp
        }), "collider" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) && (0, CI.jsx)(dY, {
          store: Lp,
          close: Pp
        }), "terminal" === (null === Hp || void 0 === Hp ? void 0 : Hp.kind) && (0, CI.jsx)(VA, {
          store: Yp,
          close: Pp,
          send: pp => {
            ip.send(pp)
          }
        })]
      })
    }
    var DW = cp(38712);

    function AW(pp, ip) {
      return pp.distSq - ip.distSq
    }
    class PW {
      constructor() {
        this.list = [], this.pool = []
      }
      add(pp, ip, cp, Op) {
        let op = this.pool[this.list.length];
        op || (op = {
          x: 0,
          y: 0,
          distSq: 0,
          element: ip,
          liftRem: cp,
          dot: Op
        }, this.pool.push(op)), op.x = pp.x, op.y = pp.y, op.distSq = pp.distSq, op.element = ip, op.liftRem = cp, op.dot = Op, this.list.push(op)
      }
    }
    class WW {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = pp, this.sizes = new WeakMap, this.observer = new ResizeObserver((pp => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const ip of pp) {
            const pp = ip.borderBoxSize[0];
            "dot" !== ip.target.dataset.crowded && 0 !== pp.inlineSize && 0 !== pp.blockSize && this.sizes.set(ip.target, {
              width: pp.inlineSize,
              height: pp.blockSize
            })
          }
        })), this.remPx = 16, this.aW = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.mH = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.mH)
      }
      observe(pp) {
        this.observer.observe(pp)
      }
      unobserve(pp) {
        this.observer.unobserve(pp)
      }
      run(pp) {
        const ip = pp.list;
        ip.sort(AW);
        const cp = this.pxPerVw,
          Op = this.pxPerVh;
        this.aW.length = 0, this.hud && this.aW.push(...this.hud.boxes(performance.now()));
        for (const Ip of ip) {
          var op;
          const pp = this.sizes.get(Ip.element);
          let ip = "no";
          if (pp && pp.width > 0) {
            const op = Ip.x * cp,
              Sp = Ip.y * Op - Ip.liftRem * this.remPx;
            this.fit(op, Sp, pp.width, pp.height) || (ip = Ip.dot && this.fit(op, Sp, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (op = Ip.element.dataset.crowded) && void 0 !== op ? op : "no") !== ip && ("no" === ip ? delete Ip.element.dataset.crowded : Ip.element.dataset.crowded = ip), "hidden" !== ip && (0, DW.b)(Ip.element, Ip.x, Ip.y)
        }
        ip.length = 0
      }
      fit(pp, ip, cp, Op) {
        const op = pp - cp / 2,
          Ip = pp + cp / 2,
          Sp = ip - Op,
          xp = this.aW;
        for (let Lp = 0; Lp < xp.length; Lp += 4)
          if (op < xp[Lp + 1] - 2 && Ip > xp[Lp] + 2 && Sp < xp[Lp + 3] - 2 && ip > xp[Lp + 2] + 2) return !1;
        return xp.push(op, Ip, Sp, ip), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.mH)
      }
    }
    const yW = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class UW {
      constructor() {
        this.cards = yW.map((pp => document.getElementsByClassName(pp))), this.watched = yW.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(pp) {
        pp - this.refreshedAt > 1e3 && (this.refreshedAt = pp, this.stale = !0);
        for (let cp = 0; cp < this.cards.length; cp++) {
          var ip;
          const pp = null !== (ip = this.cards[cp][0]) && void 0 !== ip ? ip : null;
          pp !== this.watched[cp] && this.watch(cp, pp)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let pp = 0; pp < this.watched.length; pp++) this.watch(pp, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const pp = this.list;
        pp.length = 0;
        for (const ip of this.watched) {
          if (!ip || ip.closest(".NoRoom")) continue;
          const cp = ip.getBoundingClientRect();
          let Op = cp.top,
            op = cp.bottom;
          if (ip === this.watched[0] && this.hud) {
            const pp = this.hud.getBoundingClientRect();
            Op = Math.max(Op, pp.top), op = Math.min(op, pp.bottom)
          }
          cp.width > 0 && op > Op && pp.push(cp.left, cp.right, Op, op)
        }
      }
      watch(pp, ip) {
        const cp = this.watched[pp];
        var Op, op;
        (cp && this.sizes.unobserve(cp), this.watched[pp] = ip, this.stale = !0, ip && this.sizes.observe(ip), 0 === pp) && (null === (Op = this.hud) || void 0 === Op || Op.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (op = null === ip || void 0 === ip ? void 0 : ip.closest(".Baf2QuestHud")) && void 0 !== op ? op : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var wW = cp(38719);
    class vW {
      constructor(pp) {
        this.onElement = pp, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(pp) {
        const ip = [];
        for (let cp = 0; cp + 4 < pp.length; cp += 5) {
          const Op = [pp[cp], pp[cp + 1], pp[cp + 2]];
          ip.push({
            key: Op.join(","),
            pos: Op,
            status: So[pp[cp + 3]],
            kind: Ci[pp[cp + 4]]
          })
        }
        this.markers = ip, this.keys = new Set(ip.map((pp => {
          let {
            key: ip
          } = pp;
          return ip
        }))), this.notify()
      }
      covers(pp) {
        return this.keys.has(pp)
      }
      get() {
        return this.markers
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      bind(pp) {
        let ip = this.refs.get(pp);
        return ip || (ip = ip => {
          const cp = this.elements.get(pp);
          var Op, op;
          cp && (null === (Op = this.onElement) || void 0 === Op || Op.call(this, cp, !1));
          ip ? (this.elements.set(pp, ip), null === (op = this.onElement) || void 0 === op || op.call(this, ip, !0)) : (this.elements.delete(pp), this.refs.delete(pp))
        }, this.refs.set(pp, ip)), ip
      }
      onAfterRender(pp, ip, cp) {
        for (const Op of this.markers) {
          const op = this.elements.get(Op.key);
          if (!op) continue;
          const Ip = (0, wW.e)(op, pp, ip, Op.pos, 1.05, 24);
          Ip && cp.add(Ip, op, .45, !0)
        }
      }
      notify() {
        for (const pp of this.listeners) pp()
      }
    }
    const tW = {
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
    const HW = (0, Op.memo)((function(pp) {
        let {
          status: ip,
          kind: cp,
          bindRef: Op
        } = pp;
        const {
          t: op
        } = (0, Eo.H)(), Ip = function(pp, ip) {
          var cp;
          if ("noFuel" === pp) {
            var Op, op;
            const pp = null === (Op = Bi[ip]) || void 0 === Op || null === (op = Op.fuels) || void 0 === op ? void 0 : op.find((pp => Sc.includes(pp)));
            return null !== pp && void 0 !== pp ? pp : tW.noFuel
          }
          return void 0 !== (null === (cp = Bi[ip]) || void 0 === cp ? void 0 : cp.cryoMade) ? "noOutlet" === pp ? "Fluid Pipe" : "noInput" === pp ? "Biomass" : tW[pp] : tW[pp]
        }(ip, cp);
        return (0, CI.jsxs)("div", {
          className: Ro()("Baf2StallMarker", ip),
          ref: Op,
          hidden: !0,
          children: [Ip && (0, CI.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, CI.jsx)(Qo.d, {
              itemName: Ip,
              amount: 0
            })
          }), (0, CI.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === ip ? "?" : "!"
          }), (0, CI.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: op(`buildAFactory2Game:stallTag_${ip}`)
          })]
        })
      })),
      dW = (0, Op.memo)((function(pp) {
        let {
          controller: ip
        } = pp;
        const [cp, op] = (0, Op.useState)((() => ip.get()));
        return (0, Op.useEffect)((() => (op(ip.get()), ip.subscribe((() => {
          op(ip.get())
        })))), [ip]), (0, CI.jsx)("div", {
          className: "Baf2StallMarkers",
          children: cp.map((pp => (0, CI.jsx)(HW, {
            status: pp.status,
            kind: pp.kind,
            bindRef: ip.bind(pp.key)
          }, pp.key)))
        })
      })),
      eW = tc.i + 150;
    class uW {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(pp, ip) {
        const cp = ip - pp;
        null === this.offset || cp < this.offset ? this.offset = cp : this.offset = Math.min(cp, this.offset + .02 * (ip - this.sampledAt)), this.sampledAt = ip
      }
      toLocal(pp) {
        var ip;
        return pp + (null !== (ip = this.offset) && void 0 !== ip ? ip : 0) + eW
      }
    }
    var jW = cp(38724);
    const kW = 15 * Math.PI / 180,
      mW = Math.SQRT2,
      RW = [4, 2];

    function qW(pp, ip) {
      const cp = [1 / 0, 1 / 0, 1 / 0],
        Op = [-1 / 0, -1 / 0, -1 / 0];
      for (const Lp of pp)
        for (let pp = 0; pp < 3; pp++) cp[pp] = Math.min(cp[pp], Lp[pp]), Op[pp] = Math.max(Op[pp], Lp[pp]);
      const op = (cp[0] + Op[0]) / 2,
        Ip = (cp[1] + Op[1]) / 2,
        Sp = (cp[2] + Op[2]) / 2;
      let xp = 0;
      for (const Lp of pp) xp = Math.max(xp, Math.hypot(Lp[0] - op, Lp[1] - Ip, Lp[2] - Sp));
      return {
        x: op,
        y: Ip,
        z: Sp,
        r: xp + ip
      }
    }

    function MW(pp, ip, cp) {
      const Op = ip.x - pp.x,
        op = ip.y - pp.y,
        Ip = ip.z - pp.z,
        Sp = Math.sqrt(Op * Op + op * op + Ip * Ip);
      if (Sp <= ip.r + 8) return 1;
      const xp = ip.r / Sp,
        Lp = Math.sqrt(1 - xp * xp),
        Yp = Lp < -pp.cosHalf,
        Dp = (Op * pp.dx + op * pp.dy + Ip * pp.dz) / Sp;
      if (!Yp && Dp < pp.cosHalf * Lp - pp.sinHalf * xp) return 0;
      const Ap = cp * mW * pp.frameMs * pp.pxPerBlock / (Sp - ip.r);
      for (let Pp = 0; Pp < RW.length; Pp++)
        if (Ap * RW[Pp] <= 1) return RW[Pp];
      return 1
    }

    function CW(pp, ip) {
      return {
        name: pp,
        at: ip,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const EW = [0, 0, 0];

    function XW(pp, ip, cp) {
      let [, Op, op, Ip, Sp, xp] = ip;
      const Lp = tc.e * (null !== Sp && void 0 !== Sp ? Sp : 1),
        Yp = [];
      for (let Wp = 0; Wp < Op.length; Wp += 3) Yp.push([Op[Wp] + .5, Op[Wp + 1] + .65, Op[Wp + 2] + .5]);
      const Dp = [];
      for (let Wp = 0; Wp < Yp.length - 1; Wp++) {
        const [pp, ip] = [Yp[Wp], Yp[Wp + 1]];
        Dp.push([(pp[0] + ip[0]) / 2, (pp[1] + ip[1]) / 2, (pp[2] + ip[2]) / 2])
      }
      const Ap = Yp.slice(1, -1),
        Pp = new Uint8Array(Ap.length);
      for (const Wp of null !== xp && void 0 !== xp ? xp : []) Pp[Wp >> 1] |= 1 & Wp ? 2 : 1;
      return {
        island: pp,
        length: Ap.length,
        loop: Ip,
        cellsPerMs: Lp,
        edges: Dp,
        rc: Ap,
        bounds: qW([...Dp, ...Ap], .3),
        changed: !0,
        culled: !1,
        hide: Pp,
        items: op.map((pp => {
          let [ip, Op] = pp;
          return CW(ip, (0, tc.z)(ip, Op, cp, Lp).at)
        }))
      }
    }

    function lW(pp, ip) {
      const {
        items: cp
      } = pp;
      if (0 === cp.length) return;
      const Op = pp.length / pp.cellsPerMs,
        op = Math.floor((ip - cp[0].at) / Op) - 1;
      if (op > 0)
        for (const Ip of cp) Ip.at += op * Op
    }

    function QW(pp, ip) {
      const cp = Math.min(Math.floor(ip), pp.length - 1),
        Op = pp.hide[cp];
      return 0 !== Op && 0 !== (Op & (ip - cp < .5 ? 1 : 2))
    }

    function JW(pp, ip) {
      const cp = Math.min(Math.floor(ip), pp.length - 1),
        Op = ip - cp,
        op = Op < .5,
        Ip = op ? pp.edges[cp] : pp.rc[cp],
        Sp = op ? pp.rc[cp] : pp.edges[cp + 1],
        xp = op ? 2 * Op : 2 * Op - 1;
      EW[0] = Ip[0] + (Sp[0] - Ip[0]) * xp, EW[1] = Ip[1] + (Sp[1] - Ip[1]) * xp, EW[2] = Ip[2] + (Sp[2] - Ip[2]) * xp
    }
    const BW = Math.PI / 4;
    class NW {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new uW, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.mH = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(pp) {
        const ip = performance.now();
        this.clock.sample(pp.baf2BeltLinesAt, ip), this.queue(pp.baf2BeltLinesAt, pp, 0, null, null, 0), this.applyDue(ip)
      }
      onMoves(pp) {
        const ip = performance.now(),
          cp = pp.baf2BeltMovesAt;
        this.clock.sample(cp, ip);
        for (const [Op, op, Ip, Sp] of pp.baf2BeltMoveList) null === op ? this.queue(cp - Ip, null, Op, null, null, null !== Sp && void 0 !== Sp ? Sp : 0) : this.queue(cp - Ip, null, Op, op, null !== Sp && void 0 !== Sp ? Sp : null, 0);
        this.applyDue(ip)
      }
      start(pp) {
        this.pool = new jW.b(pp, {
          scale: .3,
          yaw: BW
        }, 64), this.mH(), window.addEventListener("resize", this.mH)
      }
      onAfterRender(pp) {
        const {
          pool: ip
        } = this;
        if (!ip) return;
        const cp = performance.now(),
          Op = cp - this.lastRenderAt;
        this.lastRenderAt = cp, Op < 100 && (this.frameMs += .1 * (Op - this.frameMs));
        const op = cp + this.frameMs;
        this.applyDue(op);
        const Ip = pp.cameraPosition,
          Sp = ip.follow(Ip);
        this.setView(pp, Ip);
        const xp = this.frame++;
        for (let Lp = 0; Lp < this.shown.length; Lp++) {
          const pp = this.shown[Lp],
            cp = MW(this.view, pp.bounds, pp.cellsPerMs),
            Op = pp.culled && 0 !== cp;
          if (pp.culled = 0 === cp, !Sp && !pp.changed && !Op && (0 === cp || (xp + Lp) % cp !== 0)) continue;
          pp.changed = !1, pp.loop && (lW(pp, op), (0, tc.r)(pp.items, pp.length, op, pp.cellsPerMs));
          let Ip = pp.length;
          for (let xp = 0; xp < pp.items.length; xp++) {
            const cp = pp.items[xp],
              Op = (0, tc.D)(cp.at, Ip, op, pp.cellsPerMs);
            if (Ip = Op - tc.m, QW(pp, Op)) {
              null === cp.kind || cp.hidden || (cp.kind.hide(cp.slot), cp.hidden = !0);
              continue
            }
            let Lp = cp.kind;
            if (null === Lp) {
              if (Lp = ip.kindOf(cp.name), null === Lp) continue;
              cp.kind = Lp, cp.slot = Lp.take(), cp.hidden = !0, cp.drawn = NaN
            } else if (Op === cp.drawn && !cp.hidden && !Sp) continue;
            JW(pp, Op), Lp.write(cp.slot, EW[0], EW[1], EW[2]), cp.hidden = !1, cp.drawn = Op
          }
        }
        ip.commit()
      }
      dispose() {
        var pp;
        window.removeEventListener("resize", this.mH), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (pp = this.pool) || void 0 === pp || pp.dispose(), this.pool = null
      }
      setView(pp, ip) {
        const {
          cameraDir: cp,
          lastDir: Op
        } = this, op = pp.cameraDirection;
        for (let Dp = 0; Dp < 3; Dp++) Op[Dp] = cp[Dp], cp[Dp] = op[Dp];
        const Ip = cp[0] * Op[0] + cp[1] * Op[1] + cp[2] * Op[2],
          Sp = Number.isNaN(Ip) ? 0 : Math.acos(Math.min(1, Math.max(-1, Ip))),
          {
            width: xp,
            height: Lp
          } = this,
          Yp = pp.tanHalfFovX;
        ! function(pp, ip, cp, Op, op, Ip, Sp) {
          let xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          pp.x = ip[0], pp.y = ip[1], pp.z = ip[2], pp.dx = cp[0], pp.dy = cp[1], pp.dz = cp[2];
          const Lp = Math.min(Math.PI, Math.atan(Math.sqrt(Op * Op + op * op)) + kW + xp);
          pp.cosHalf = Math.cos(Lp), pp.sinHalf = Math.sin(Lp), pp.pxPerBlock = Ip / (2 * op), pp.frameMs = Sp
        }(this.view, ip, cp, Yp, Yp * Lp / xp, Lp * window.devicePixelRatio, this.frameMs, Sp)
      }
      queue(pp, ip, cp, Op, op, Ip) {
        const Sp = Math.max(this.clock.toLocal(pp), this.lastPendingAt);
        this.lastPendingAt = Sp, this.pending.push({
          at: Sp,
          lines: ip,
          line: cp,
          name: Op,
          pos: op,
          idx: Ip
        })
      }
      applyDue(pp) {
        const {
          pending: ip
        } = this;
        for (; this.pendingHead < ip.length && ip[this.pendingHead].at <= pp;) {
          const pp = ip[this.pendingHead++];
          if (pp.lines) this.applyLines(pp.lines, pp.at), pp.lines = null;
          else {
            const ip = this.lines.get(pp.line);
            ip && this.applyMove(ip, pp, pp.at)
          }
        }
        this.pendingHead === ip.length ? (ip.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > ip.length && (ip.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(pp, ip) {
        this.clearIsland(pp.baf2BeltIsland);
        for (const cp of pp.baf2BeltLineList) this.lines.set(cp[0], XW(pp.baf2BeltIsland, cp, ip));
        this.shown = [...this.lines.values()]
      }
      applyMove(pp, ip, cp) {
        let {
          name: Op,
          pos: op,
          idx: Ip
        } = ip;
        pp.changed = !0, pp.loop && (lW(pp, cp), (0, tc.r)(pp.items, pp.length, cp, pp.cellsPerMs)), null !== Op && null !== op ? (0, tc.v)(pp.items, pp.length, CW(Op, cp), op, cp, pp.cellsPerMs) : null !== Op ? pp.items.push(CW(Op, cp)) : pp.items.length > Ip && this.release((0, tc.G)(pp.items, pp.length, cp, pp.cellsPerMs, Ip))
      }
      clearIsland(pp) {
        for (const [ip, cp] of this.lines)
          if (cp.island === pp) {
            for (const pp of cp.items) this.release(pp);
            this.lines.delete(ip)
          }
      }
      release(pp) {
        null !== pp.kind && (pp.kind.release(pp.slot), pp.kind = null, pp.slot = -1, pp.hidden = !0, pp.drawn = NaN)
      }
    }
    var TW = cp(36791),
      fW = cp(38729);

    function bW(pp) {
      let {
        depth: ip,
        store: cp,
        t: op
      } = pp;
      const Ip = function(pp) {
        const [ip, cp] = (0, Op.useState)(pp.lastPlayerY());
        return (0, xD.f)(ho, cp), (0, Op.useEffect)((() => {
          cp(pp.lastPlayerY())
        }), [pp]), ip
      }(cp);
      if (null === Ip) return null;
      const [Sp, xp] = ip, Lp = Ip > Sp ? Sp : null !== xp && Ip < xp ? xp : null, Yp = {
        y: kI(Ip),
        target: null === Lp ? "" : kI(Lp)
      };
      return (0, CI.jsx)("span", {
        className: Ro()("Baf2QuestDepth", {
          Reached: null === Lp
        }),
        children: op(`${AD}${null===Lp?"questDepthReached":"questDepth"}`, Yp)
      })
    }

    function hW(pp) {
      let {
        also: ip,
        view: cp,
        t: Op
      } = pp;
      return (0, CI.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, CI.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, CI.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, CI.jsx)("strong", {
            children: Op(`${AD}questAlsoDownHere`)
          }), (0, CI.jsx)("span", {
            className: "Baf2QuestChips",
            children: ip.map((pp => {
              let [ip, op, Ip, Sp] = pp;
              return (0, CI.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": Op(`${AD}questAlsoItem`, {
                  item: WD(Op, cp.itemNames[ip], ip),
                  have: String(op),
                  need: String(Ip)
                }),
                children: [(0, CI.jsx)(wD, {
                  item: ip
                }), (0, CI.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${op}/${Ip}`
                }), null !== Sp && (0, CI.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: Op(`${AD}questAlsoDepth`, {
                    y: kI(Sp)
                  })
                })]
              }, ip)
            }))
          })]
        })]
      })
    }
    var aW = cp(3520);

    function nW(pp) {
      let {
        expanded: ip,
        inventoryOpen: cp,
        children: op
      } = pp;
      const Ip = (0, Op.useRef)(null);
      return (0, Op.useEffect)((() => {
        const pp = Ip.current,
          ip = null === pp || void 0 === pp ? void 0 : pp.closest(".RightElements"),
          Op = null === pp || void 0 === pp ? void 0 : pp.firstElementChild;
        if (!pp || !ip || !Op) return;
        return (0, fW.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [ip, Op], (() => {
          const op = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === op.length) return;
          const Ip = Math.max(...op.map((pp => pp.getBoundingClientRect().bottom))),
            Sp = ip.getBoundingClientRect(),
            xp = cp ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (xp) {
            const ip = parseFloat(getComputedStyle(Op).marginLeft) + parseFloat(getComputedStyle(Op).marginRight),
              cp = Sp.right - xp.getBoundingClientRect().right - 8 - ip;
            pp.style.setProperty("--baf2-quest-room", `${cp}px`), pp.classList.toggle("NoRoom", cp < 150)
          } else pp.style.removeProperty("--baf2-quest-room"), pp.classList.remove("NoRoom");
          const Lp = Ip - Sp.top + 8,
            Yp = function(pp, ip, cp) {
              const Op = ip.getBoundingClientRect(),
                op = pp.getBoundingClientRect(),
                Ip = (0, aW.i)(op.left, op.right, Op.top + cp);
              if (null !== Ip && Ip < Op.bottom) return Ip - Op.top;
              return Op.height - (parseFloat(getComputedStyle(ip).paddingBottom) || 0)
            }(pp, ip, Lp) - 8,
            Dp = window.innerHeight / 2 - Sp.top,
            {
              top: Ap,
              maxHeight: Pp
            } = function(pp, ip, cp, Op, op) {
              const Ip = Math.min(cp, Math.max(0, ip - pp)),
                Sp = op ? pp : Math.max(pp, Math.min(Op - Ip / 2, ip - Ip));
              return {
                top: Sp,
                maxHeight: Math.max(0, ip - Sp)
              }
            }(Lp, Yp, function(pp) {
              const ip = pp.firstElementChild,
                cp = ip ? ip.scrollHeight - ip.clientHeight : 0;
              return pp.getBoundingClientRect().height + Math.max(0, cp)
            }(Op), Dp, MI());
          pp.style.top = `${Ap}px`, pp.style.maxHeight = `${Pp}px`
        }))
      }), [cp]), (0, CI.jsx)("div", {
        ref: Ip,
        className: Ro()("Baf2QuestHud", {
          Expanded: ip
        }),
        children: op
      })
    }

    function FW(pp) {
      let {
        amount: ip,
        t: cp
      } = pp;
      return (0, CI.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, CI.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, CI.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: cp(`${AD}questStepsDone`, {
            amount: String(ip)
          })
        })]
      })
    }

    function gW(pp) {
      let {
        pulse: ip
      } = pp;
      return 0 === ip ? null : (0, CI.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, ip)
    }

    function GW(pp) {
      var ip;
      let {
        store: cp
      } = pp;
      const op = (0, xD.i)(bo, cp.get()),
        [Ip, Sp] = (0, Op.useState)(!1),
        {
          t: xp
        } = (0, Eo.H)(),
        Lp = (0, RI.e)(qI),
        {
          openInGameMenuName: Yp,
          openEverythingMenuName: Dp
        } = (0, jo.o)(["openInGameMenuName", "openEverythingMenuName"]),
        Ap = "inventory" === Yp && null === Dp,
        Pp = null !== Yp && !Ap || null !== Dp;
      if (! function(pp) {
          return null !== pp.name || null !== pp.side
        }(op) || Pp || "off" === op.tutorial) return null;
      const Wp = ro(op.rows),
        yp = Wp.filter((pp => pp.done)).length,
        Up = function(pp, ip) {
          const cp = so(pp);
          let Op = 0;
          return pp.filter(((pp, op) => !!pp.justFinished || !(pp.done || op < cp || Op > ip) && (Op++, !0)))
        }(op.rows, Lp ? 0 : 2),
        wp = Lp ? Up : function(pp, ip) {
          const cp = ip.filter((pp => !pp.justFinished));
          if (cp.length < 2) return [...ip];
          const Op = pp.indexOf(cp[0]),
            op = pp.indexOf(cp[cp.length - 1]),
            Ip = new Set(ro(pp));
          return pp.filter(((pp, cp) => ip.includes(pp) || pp.done && Ip.has(pp) && cp > Op && cp < op))
        }(op.rows, Up),
        vp = Ip ? op.rows : wp,
        tp = Ip || Lp ? [] : function(pp, ip) {
          const cp = new Array(ip.length + 1).fill(0),
            Op = new Set(ro(pp));
          let op = 0;
          for (const Ip of pp) op < ip.length && Ip === ip[op] ? op++ : Ip.done && Op.has(Ip) && cp[op]++;
          return cp
        }(op.rows, wp),
        Hp = Ip || wp.length < op.rows.length || null !== op.reward,
        dp = Go(op),
        ep = dp ? xp(`${AD}questLineComplete`) : op.tier ? HD(xp, op.tier) : xp(`${AD}currentQuest`),
        jp = function(pp) {
          var ip, cp;
          if (Go(pp)) return null;
          const Op = null === (ip = pp.chapters) || void 0 === ip ? void 0 : ip.find((ip => {
            let [cp] = ip;
            return cp === pp.tier
          }));
          if (!Op) return null;
          const op = Op[1].filter((pp => !pp[4]));
          if (0 === op.length) return null;
          const Ip = null === (cp = pp.name) || void 0 === cp ? void 0 : cp[0],
            Sp = pp => op.findIndex((ip => ip[0] === Ip && (!pp || !ip[3]))),
            xp = Sp(!0),
            Lp = xp >= 0 ? xp : Sp(!1);
          if (Lp >= 0) return [Lp + 1, op.length];
          const Yp = op.filter((pp => pp[3])).length;
          return [Math.min(Yp + 1, op.length), op.length]
        }(op);
      return (0, CI.jsx)(TW.h, {
        placement: "topRight",
        children: (0, CI.jsx)(nW, {
          expanded: Ip,
          inventoryOpen: Ap,
          children: (0, CI.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: PD,
            children: [null !== op.name && (0, CI.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, CI.jsx)(gW, {
                pulse: op.pulse
              }), (0, CI.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, CI.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [ep, jp && (0, CI.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": xp(`${AD}questPlaceLabel`, {
                      n: String(jp[0]),
                      total: String(jp[1])
                    }),
                    children: xp(`${AD}questPlace`, {
                      n: String(jp[0]),
                      total: String(jp[1])
                    })
                  }), op.tier && op.core && !dp && (0, CI.jsx)(dD, {
                    core: op.core,
                    t: xp
                  })]
                })
              }), (0, CI.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: xp(`${AD}${op.name[0]}`, yD(op.name[1]))
              }), (Wp.length > 1 || Hp) && (0, CI.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [Wp.length > 1 && (0, CI.jsx)(eD, {
                  rows: Wp,
                  t: xp
                }), Hp && (0, CI.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": Ip,
                  onClick: () => {
                    Sp(!Ip)
                  },
                  children: [(0, CI.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: xp(`${AD}questStepsToggle`, {
                      done: String(yp),
                      total: String(Wp.length)
                    })
                  }), (0, CI.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: Ip ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, CI.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [vp.map(((pp, ip) => {
                  var Ip;
                  const Sp = pp.current && op.depth;
                  return (0, CI.jsxs)(Op.Fragment, {
                    children: [(null !== (Ip = tp[ip]) && void 0 !== Ip ? Ip : 0) > 0 && (0, CI.jsx)(FW, {
                      amount: tp[ip],
                      t: xp
                    }), (0, CI.jsx)(uD, {
                      row: pp,
                      view: op,
                      t: xp,
                      extra: Sp && (0, CI.jsx)(bW, {
                        depth: Sp,
                        store: cp,
                        t: xp
                      })
                    })]
                  }, pp.id)
                })), (null !== (ip = tp[vp.length]) && void 0 !== ip ? ip : 0) > 0 && (0, CI.jsx)(FW, {
                  amount: tp[vp.length],
                  t: xp
                }), op.also.length > 0 && (0, CI.jsx)(hW, {
                  also: op.also,
                  view: op,
                  t: xp
                })]
              }), Ip && op.reward && (0, CI.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [xp(`${AD}questReward`), (0, CI.jsx)(wD, {
                  item: op.reward
                }), WD(xp, op.itemNames[op.reward], op.reward)]
              })]
            }), op.side && (0, CI.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [Fo(op, Date.now()) && (0, CI.jsx)(gW, {
                pulse: op.sideCameUpAt
              }), (0, CI.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: xp(`${AD}questSide`)
              }), (0, CI.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: xp(`${AD}${op.side.name[0]}`, yD(op.side.name[1]))
              }), (0, CI.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, CI.jsx)(uD, {
                  row: op.side.row,
                  view: op,
                  t: xp
                })
              })]
            })]
          })
        })
      })
    }
    const rW = "baf2ToastView";
    class ZW {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = pp, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: pp,
          holdMs: ip
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const pp = this.dropCovered();
          pp && this.show(pp.message, pp.holdMs)
        }), 250));
        const cp = this.dropCovered();
        null !== cp && (cp.holdMs > 0 || "baf2ToastCelebrate" === cp.message.baf2ToastStyle) && "baf2ToastCelebrate" !== pp.baf2ToastStyle && this.show(cp.message, cp.holdMs);
        const Op = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== pp.baf2ToastStyle && Op > 0) return this.pending = {
          message: pp,
          holdMs: ip
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const pp = this.pending;
          this.pending = null, pp && this.present(pp.message, pp.holdMs)
        }), Op));
        this.present(pp, ip)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(pp, ip) {
        this.clearTimers(), this.pending = null;
        const cp = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: pp.baf2ToastText,
          style: pp.baf2ToastStyle,
          swapped: cp,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === pp.baf2ToastStyle ? 1500 : ip), this.GA();
        const Op = Math.min(8e3, Math.max(1e3, pp.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), Op)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.GA(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.GA()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const pp = this.covering;
        return this.covering = null, pp
      }
      GA() {
        To.m.GA(rW, this.view, !0)
      }
    }
    var zW = cp(82);
    const sW = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function KW(pp) {
      let {
        store: ip
      } = pp;
      const cp = (0, xD.i)(rW, ip.get()),
        {
          openInGameMenuName: Op,
          openEverythingMenuName: op
        } = (0, jo.o)(["openInGameMenuName", "openEverythingMenuName"]),
        Ip = cp && (0, CI.jsxs)("div", {
          className: Ro()("Baf2Toast", sW[cp.style], {
            Swapped: cp.swapped,
            Leaving: cp.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === cp.style && (0, CI.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, CI.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, CI.jsx)(Jo.e, {
              text: cp.text
            })
          })]
        }, cp.id);
      return null !== Op && null === op ? (0, zW.createPortal)((0, CI.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: Ip
      }), document.body) : (0, CI.jsx)(TW.h, {
        children: Ip
      })
    }
    const VW = "baf2AreaView";
    class py {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.sx = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.sx = null
      }
      arrive(pp, ip) {
        ip && function(pp) {
          return "home" === pp.baf2AreaPlace && void 0 !== pp.baf2AreaNameText
        }(pp) ? this.sx = pp : this.show(pp)
      }
      release() {
        const pp = this.sx;
        null !== pp && this.show(pp)
      }
      show(pp) {
        this.clearTimer(), this.sx = null;
        const ip = void 0 === pp.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: pp,
          ms: ip
        }, this.GA(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.GA()
        }), ip)
      }
      dispose() {
        this.clearTimer(), this.sx = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      GA() {
        To.m.GA(VW, this.view, !0)
      }
    }

    function iy(pp) {
      var ip;
      let {
        store: cp
      } = pp;
      const {
        t: Op
      } = (0, Eo.H)(), op = (0, xD.i)(VW, cp.get());
      if (!op) return null;
      const {
        area: Ip
      } = op, Sp = Ip.baf2AreaResetMinutes;
      return (0, CI.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": Ip.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${op.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, CI.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), Ip.baf2AreaHeading && (0, CI.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: Op(Ip.baf2AreaHeading)
        }), (0, CI.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (ip = Ip.baf2AreaNameText) && void 0 !== ip ? ip : Op(Ip.baf2AreaName)
        }), Ip.baf2AreaNote && (0, CI.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: Op(Ip.baf2AreaNote)
        }), void 0 !== Sp && (0, CI.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: Op("buildAFactory2Game:areaWildsReset", {
            time: mI(Op, 60 * Sp)
          })
        })]
      }, op.id)
    }
    const cy = "baf2GearGauge";
    class Oy {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      ku(pp) {
        var ip;
        if (this.clearLinger(), null === pp.gearPowerKind) return void this.set(null);
        const cp = "jetpack" === pp.gearPowerKind && (Op = pp.gearChargeState, op = pp.gearCharge, "flying" === Op || "charging" === Op || "outOfCharge" === Op || "ceiling" === Op || "offPlot" === Op || "noPower" === Op && op <= 0);
        var Op, op;
        const Ip = !0 === (null === (ip = this.view) || void 0 === ip ? void 0 : ip.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          Sp = cp || "jetpack" === pp.gearPowerKind && Ip;
        this.set({
          gauge: pp,
          jetShown: Sp
        }), Sp && !cp && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(pp) {
        this.view = pp, To.m.GA(cy, pp, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const oy = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function Iy(pp) {
      let {
        store: ip
      } = pp;
      const cp = (0, xD.i)(cy, ip.get());
      return cp ? "jetpack" === cp.gauge.gearPowerKind ? (0, CI.jsx)(Sy, {
        view: cp
      }) : (0, CI.jsx)(xy, {
        gauge: cp.gauge
      }) : null
    }

    function Sy(pp) {
      let {
        view: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)(), {
        gauge: Op
      } = ip, op = Op.gearChargeMax > 0 ? Math.max(0, Math.min(1, Op.gearCharge / Op.gearChargeMax)) : 0, Ip = oy[Op.gearChargeState], Sp = Ip ? cp(Ip) : null;
      return (0, CI.jsxs)("div", {
        className: Ro()("Baf2JetArc", {
          Shown: ip.jetShown,
          Low: op < .2,
          Warm: op >= .2 && op < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - op)
        },
        "aria-hidden": !ip.jetShown,
        children: [(0, CI.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, CI.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Ly,
            pathLength: 100
          }), (0, CI.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Ly,
            pathLength: 100
          })]
        }), (0, CI.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * op), "%"]
        }), Sp && (0, CI.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: Sp
        })]
      })
    }

    function xy(pp) {
      let {
        gauge: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)(), Op = function(pp, ip) {
        switch (ip.gearPowerKind) {
          case "skyPack":
            return pp("buildAFactory2Game:gearSkyPack", {
              charge: ip.gearCharge,
              max: ip.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return pp("buildAFactory2Game:gearIslandDraw", {
              power: Kp(ip.gearIslandPower),
              cost: Kp(ip.gearCostPerUse)
            });
          case "barrier":
            return pp("buildAFactory2Game:gearBarrier", {
              shield: Math.round(ip.gearCharge),
              max: ip.gearChargeMax,
              power: Kp(ip.gearIslandPower)
            });
          default:
            return null
        }
      }(cp, ip);
      return null === Op ? null : (0, CI.jsx)(TW.h, {
        children: (0, CI.jsx)("div", {
          className: Ro()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === ip.gearChargeState || "outOfCharge" === ip.gearChargeState
          }),
          role: "status",
          children: Op
        })
      })
    }
    const Ly = (() => {
      const pp = pp => {
        const ip = pp * Math.PI / 180;
        return `${(40*Math.cos(ip)).toFixed(2)} ${(40*Math.sin(ip)).toFixed(2)}`
      };
      return `M ${pp(160)} A 40 40 0 1 1 ${pp(380)}`
    })();
    class Yy {
      constructor(pp) {
        this.onElement = pp, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      ku(pp) {
        let ip = pp.baf2LabelsReset || pp.baf2LabelsIsland !== this.island;
        ip && (this.labels.clear(), this.island = pp.baf2LabelsIsland);
        for (const [cp, Op, op, Ip, Sp] of pp.baf2LabelsList) {
          const pp = `${cp},${Op},${op}`,
            xp = this.labels.get(pp);
          null === Ip ? ip = this.labels.delete(pp) || ip : xp && xp.item === Ip && (xp.count === Sp || xp.count >= 0 && Sp >= 0) ? xp.count !== Sp && (xp.count = Sp, this.writeCount(pp, Sp)) : (this.labels.set(pp, {
            key: pp,
            pos: [cp, Op, op],
            item: Ip,
            count: Sp
          }), this.writeCount(pp, Sp), ip = !0)
        }
        if (this.changes++, ip) {
          this.snapshot = [...this.labels.values()];
          for (const pp of this.listeners) pp()
        }
      }
      bindCount(pp) {
        const ip = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${pp}`;
        let cp = this.countRefs.get(ip);
        return cp || (cp = cp => {
          var Op, op;
          cp ? (this.countElements.set(ip, cp), this.writeCount(pp, null !== (Op = null === (op = this.labels.get(pp)) || void 0 === op ? void 0 : op.count) && void 0 !== Op ? Op : -1)) : (this.countElements.delete(ip), this.countRefs.delete(ip))
        }, this.countRefs.set(ip, cp)), cp
      }
      setCountWords(pp) {
        this.countWords = pp;
        for (const [ip, cp] of this.labels) this.writePart(`words|${ip}`, pp(cp.count), cp.count)
      }
      writeCount(pp, ip) {
        this.writePart(`bare|${pp}`, jI(ip), ip), this.countElements.has(`words|${pp}`) && this.writePart(`words|${pp}`, this.countWords(ip), ip)
      }
      writePart(pp, ip, cp) {
        const Op = this.countElements.get(pp);
        if (!Op || cp < 0) return;
        const op = Op.firstChild;
        op && 3 === op.nodeType && !op.nextSibling ? op.nodeValue !== ip && (op.nodeValue = ip) : Op.textContent !== ip && (Op.textContent = ip)
      }
      list() {
        return this.snapshot
      }
      at(pp) {
        return this.labels.get(`${pp[0]},${pp[1]},${pp[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      bind(pp) {
        let ip = this.refs.get(pp);
        return ip || (ip = ip => {
          const cp = this.elements.get(pp);
          var Op, op;
          cp && (null === (Op = this.onElement) || void 0 === Op || Op.call(this, cp, !1));
          ip ? (this.elements.set(pp, ip), null === (op = this.onElement) || void 0 === op || op.call(this, ip, !0)) : (this.elements.delete(pp), this.refs.delete(pp))
        }, this.refs.set(pp, ip)), ip
      }
      onAfterRender(pp, ip, cp, Op) {
        for (const op of this.snapshot) {
          const Ip = this.elements.get(op.key);
          if (!Ip) continue;
          if (Op(op.key)) {
            (0, DW.d)(Ip, !0);
            continue
          }
          const Sp = (0, wW.e)(Ip, pp, ip, op.pos, 1.1, 24);
          Sp && cp.add(Sp, Ip, 0, !1)
        }
      }
    }
    const Dy = (0, Op.memo)((function(pp) {
        let {
          item: ip
        } = pp;
        return (0, CI.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, CI.jsx)(Qo.d, {
            itemName: ip,
            amount: 0
          })
        })
      })),
      Ay = (0, Op.memo)((function(pp) {
        let {
          label: ip,
          bindRef: cp,
          countRef: Op,
          wordsRef: op
        } = pp;
        return (0, CI.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: cp,
          hidden: !0,
          children: [(0, CI.jsx)(Dy, {
            item: ip.item
          }), ip.count >= 0 && (0, CI.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, CI.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: op
            }), (0, CI.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: Op
            })]
          })]
        })
      })),
      Py = (0, Op.memo)((function(pp) {
        let {
          store: ip
        } = pp;
        const {
          t: cp
        } = (0, Eo.H)(), [op, Ip] = (0, Op.useState)((() => ip.list()));
        return (0, Op.useEffect)((() => (Ip(ip.list()), ip.subscribe((() => {
          Ip(ip.list())
        })))), [ip]), (0, Op.useEffect)((() => {
          ip.setCountWords((pp => cp("buildAFactory2Game:labelSiloCount", {
            count: jI(pp)
          })))
        }), [ip, cp]), (0, CI.jsx)("div", {
          className: "Baf2IslandLabels",
          children: op.map((pp => -2 === pp.count ? null : (0, CI.jsx)(Ay, {
            label: pp,
            bindRef: ip.bind(pp.key),
            countRef: ip.bindCount(pp.key),
            wordsRef: ip.bindCount(pp.key, "words")
          }, pp.key)))
        })
      })),
      Wy = {
        read: () => !0,
        write: () => {}
      };

    function yy(pp) {
      return `${pp[0]},${pp[1]},${pp[2]}`
    }

    function Uy(pp) {
      let [ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp] = pp;
      const Wp = void 0 === Ap || void 0 === Pp ? function(pp) {
        return [Math.floor((pp - 1) / 2), 0]
      }(Ip) : [Ap, Pp];
      return {
        kind: 0 === Lp ? "reactor" : "battery",
        box: gc([ip, cp, Op], op, Ip, Sp, xp, Wp),
        formed: 1 === Yp,
        level: Dp
      }
    }
    class wy {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wy;
        this.guideSetting = pp, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = pp.read()
      }
      ku(pp) {
        var ip;
        const cp = new Map;
        for (const Op of pp.baf2RxPlanList) {
          const pp = Uy(Op);
          cp.set(yy(pp.box.ctrl), pp)
        }
        this.plans = cp, this.layouts = new Map((null !== (ip = pp.baf2RxLayouts) && void 0 !== ip ? ip : []).map((pp => {
          let [ip, cp, Op, op] = pp;
          return [yy([ip, cp, Op]), op]
        }))), this.predicted.clear(), pp.baf2RxFormedAt && (this.formed = {
          ctrl: pp.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const Op of [...this.startersOff]) {
          const pp = cp.get(Op);
          pp && !pp.formed || this.startersOff.delete(Op)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((pp => this.planByKey(pp)))
      }
      planAt(pp) {
        return this.planByKey(yy(pp))
      }
      predictSize(pp, ip) {
        this.predicted.set(yy(pp), ip), this.changed()
      }
      unpredict(pp) {
        this.predicted.delete(yy(pp)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(pp) {
        var ip;
        const cp = yy(pp);
        return this.predicted.has(cp) ? null : null !== (ip = this.layouts.get(cp)) && void 0 !== ip ? ip : null
      }
      showsStarter(pp) {
        return !this.startersOff.has(yy(pp))
      }
      setStarter(pp, ip) {
        const cp = yy(pp);
        ip ? this.startersOff.delete(cp) : this.startersOff.add(cp), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(pp) {
        this.guide = pp, this.guideSetting.write(pp), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(pp) {
        const ip = this.plans.get(pp);
        if (!ip) return null;
        const cp = this.predicted.get(pp);
        return cp ? {
          ...ip,
          box: rc(ip.box, ip.kind, cp[0], cp[1], cp[2])
        } : ip
      }
      changed() {
        this.version++;
        for (const pp of this.listeners) pp()
      }
    }
    var vy = cp(195);
    const ty = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Hy(pp, ip, cp, Op) {
      const op = pp.length / 3;
      for (let Ip = 0; Ip < ty.length / 3; Ip++) pp.push(ty[3 * Ip] * Op[0] / 2 + cp[0], ty[3 * Ip + 1] * Op[1] / 2 + cp[1], ty[3 * Ip + 2] * Op[2] / 2 + cp[2]);
      for (let Ip = op; Ip < op + 24; Ip += 4) ip.push(Ip, Ip + 1, Ip + 2, Ip, Ip + 2, Ip + 3)
    }

    function dy(pp, ip, cp) {
      const Op = ip[0][0],
        op = [],
        Ip = [];
      for (const [Sp, xp] of ip) Hy(op, Ip, [Sp[0] - Op[0], Sp[1] - Op[1], Sp[2] - Op[2]], xp);
      return pp.createGameMesh({
        positions: op,
        indices: Ip
      }, cp, Op)
    }

    function ey(pp, ip) {
      const cp = pp.w - 2,
        Op = pp.d - 2;
      return 1 === function(pp, ip, cp, Op) {
        const [op, Ip, Sp] = pp;
        if (Number(op <= 2) + Number(Ip <= 2) + Number(Sp <= 2) >= 2) return function(pp, ip, cp) {
          return (pp + ip + cp) % 2 === 0 ? 1 : 3
        }(ip, cp, Op);
        const [xp, Lp] = op >= Ip && op >= Sp ? [cp, Op] : Ip >= Sp ? [ip, Op] : [ip, cp];
        return xp % 2 === 0 && Lp % 2 === 0 ? 1 : 3
      }([cp, pp.h - 2, Op], ip % cp, Math.floor(ip / (cp * Op)), Math.floor(ip / cp) % Op) ? "rod" : "channel"
    }

    function uy(pp, ip, cp) {
      if ("reactor" !== pp.kind || pp.formed || !ip) return !1;
      const Op = sc(pp.box);
      for (let op = 0; op < Op; op++) {
        const pp = cp(op);
        if (null !== pp && lc(pp)) return !1
      }
      return !0
    }

    function jy(pp, ip, cp, Op, op) {
      var Ip;
      let Sp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const xp = OO(pp.box, ip),
        Lp = xO(pp.kind, xp, cp);
      if ("wrong" === Lp || "blocked" === Lp) return "wrong";
      if (!op) return null;
      if ("inside" === xp && "reactor" === pp.kind && "Air" === Qc(cp)) {
        if (null !== Sp) {
          var Yp;
          const cp = IP[SP(Sp, oO(pp.box, ip))];
          return cp && null !== (Yp = CL(cp)) && void 0 !== Yp ? Yp : null
        }
        if (Op) return ey(pp.box, oO(pp.box, ip))
      }
      if ("missing" !== Lp) return null;
      const Dp = LO(pp.kind, xp);
      return null === Dp ? null : null !== (Ip = CL(Dp)) && void 0 !== Ip ? Ip : null
    }
    const ky = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function my(pp, ip, cp) {
      const Op = cp => {
        const Op = ip(iO(pp.box, cp));
        return null !== Op && function(pp, ip) {
          return "reactor" !== pp.kind || ip !== Vc(pp.box) && "inside" !== OO(pp.box, ip)
        }(pp, cp) && "ok" !== xO(pp.kind, OO(pp.box, cp), Op)
      };
      if (cp) {
        const Ip = cO(pp.box, [Math.floor(cp[0]), Math.floor(cp[1]), Math.floor(cp[2])]);
        if (Ip >= 0 && (Op(Ip) || (op = Ip, "reactor" === pp.kind && "inside" === OO(pp.box, op) && "Air" === ip(iO(pp.box, op))))) return Ip
      }
      var op;
      const Ip = sc(pp.box);
      for (let Sp = 0; Sp < Ip; Sp++)
        if (Op(Sp)) return Sp;
      return -1
    }

    function Ry(pp, ip) {
      return Math.floor(ip / (pp.w * pp.d))
    }

    function qy(pp, ip, cp) {
      return cp >= 0 && Ry(pp, ip) > Ry(pp, cp)
    }

    function My(pp, ip) {
      return ip >= 0 && pp.h >= 3 && Ry(pp, ip) === pp.h - 1
    }

    function Cy(pp) {
      const ip = Qc(pp);
      return ip === ec || "Collider" === ip || "Laser" === ip || ip.startsWith("_Collider ")
    }

    function Ey(pp, ip, cp, Op) {
      if (Op(pp)) return null;
      if (!ky.every((ip => {
          let [Op, op, Ip] = ip;
          const Sp = cp([pp[0] + Op, pp[1] + op, pp[2] + Ip]);
          return null !== Sp && !hc("reactor", Sp) && "reactor" !== Jc(Sp)
        }))) return null;
      const op = ac("reactor").min,
        Ip = gc([pp[0], pp[1], pp[2]], function(pp, ip) {
          const cp = ip[0] - (pp[0] + .5),
            Op = ip[2] - (pp[2] + .5);
          return Math.abs(cp) >= Math.abs(Op) ? cp >= 0 ? 2 : 4 : Op >= 0 ? 1 : 3
        }(pp, ip), op, op, op, Gc("reactor", op)),
        Sp = Vc(Ip);
      let xp = !0;
      for (let Lp = 0; Lp < sc(Ip) && xp; Lp++) {
        if (Lp === Sp) continue;
        const pp = iO(Ip, Lp),
          ip = cp(pp);
        xp = !Op(pp) && (null === ip || !Cy(ip))
      }
      return {
        box: Ip,
        fits: xp
      }
    }
    const Xy = ML,
      ly = "baf2Goal",
      Qy = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Jy = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      By = .4;

    function Ny(pp, ip) {
      let [cp, Op, op] = pp;
      const Ip = NL([cp - .02, Op - .02, op - .02], [cp + 1.02, Op + 1.02, op + 1.02], .07);
      return ip && (Ip.push([
        [cp + .5, Op + 1 + .7, op + .5],
        [.08, 1.4, .08]
      ]), Ip.push([
        [cp + .5, Op + 1 + 1.4 + .2, op + .5],
        [By, By, By]
      ])), Ip
    }

    function Ty(pp, ip) {
      let [cp, Op, op] = ip;
      return pp.isBlockInLoadedChunk(cp, Op, op) ? pp.blockIdToBlockName(pp.getBlockId(cp, Op, op)) : null
    }
    let fy = null;
    const by = new Set;
    let hy = null;

    function ay(pp) {
      fy = pp;
      for (const ip of by) ip(pp)
    }
    class ny {
      constructor(pp) {
        var ip;
        this.plans = pp, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (ip = pp => {
          var ip, cp;
          this.setGoal(null !== (ip = null === pp || void 0 === pp ? void 0 : pp.goal) && void 0 !== ip ? ip : null, null !== (cp = null === pp || void 0 === pp ? void 0 : pp.startsBattery) && void 0 !== cp && cp)
        }, hy ??= [To.m.subscribe("setDirectionArrow", (pp => {
          let {
            id: ip,
            position: cp,
            text: Op
          } = pp;
          ip === ly && ay({
            goal: [Math.floor(cp[0]), Math.floor(cp[1]), Math.floor(cp[2])],
            startsBattery: JSON.stringify(null !== Op && void 0 !== Op ? Op : null).includes("arrowStartBattery")
          })
        })), To.m.subscribe("clearDirectionArrow", (pp => {
          let {
            id: ip
          } = pp;
          null !== ip && ip !== ly || ay(null)
        }))], by.add(ip), ip(fy), () => {
          by.delete(ip)
        })
      }
      onAfterRender(pp, ip) {
        const cp = performance.now();
        if (this.cues.length > 0) {
          const ip = .55 + .45 * Math.sin(cp / 1100 * Math.PI * 2);
          for (const cp of this.cues) pp.setGameMesh(cp, {
            visibility: ip
          })
        }
        if (cp - this.lastCheckMs < 150) return;
        this.lastCheckMs = cp;
        const Op = this.plans.all().filter((pp => {
            const [cp, Op, op] = pp.box.ctrl;
            return (!pp.formed || null !== this.plans.layoutOf(pp.box.ctrl)) && (cp - ip[0]) ** 2 + (Op - ip[1]) ** 2 + (op - ip[2]) ** 2 <= 2304
          })),
          op = function(pp, ip) {
            const cp = vy.g.Qy,
              Op = new Map;
            for (const Ip of ip) {
              const ip = iO(Ip.box, 0),
                Sp = iO(Ip.box, sc(Ip.box) - 1),
                xp = [Math.min(ip[0], Sp[0]), Math.min(ip[1], Sp[1]), Math.min(ip[2], Sp[2])].map((pp => Math.floor(pp / cp))),
                Lp = [Math.max(ip[0], Sp[0]), Math.max(ip[1], Sp[1]), Math.max(ip[2], Sp[2])].map((pp => Math.floor(pp / cp)));
              for (let cp = xp[0]; cp <= Lp[0]; cp++)
                for (let ip = xp[1]; ip <= Lp[1]; ip++)
                  for (let Ip = xp[2]; Ip <= Lp[2]; Ip++) {
                    var op;
                    Op.set(`${cp},${ip},${Ip}`, null !== (op = pp.getChunkVersion(cp, ip, Ip)) && void 0 !== op ? op : -1)
                  }
            }
            return Op
          }(pp, Op);
        this.plans.getVersion() === this.storeVersion && (function(pp, ip) {
          if (pp.size !== ip.size) return !1;
          for (const [cp, Op] of pp)
            if (ip.get(cp) !== Op) return !1;
          return !0
        }(op, this.chunkVersions) || cp - this.lastRescanMs < 600) || (this.lastRescanMs = cp, this.storeVersion = this.plans.getVersion(), this.chunkVersions = op, this.redraw(pp, Op))
      }
      dispose(pp) {
        this.unwatch(), fy = null, this.clearMeshes(pp), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(pp, ip) {
        var cp;
        (null === pp || void 0 === pp ? void 0 : pp.join()) === (null === (cp = this.goal) || void 0 === cp ? void 0 : cp.join()) && ip === this.startsBattery || (this.goal = pp, this.startsBattery = ip, this.storeVersion = -1)
      }
      redraw(pp, ip) {
        const cp = ip => Ty(pp, ip),
          Op = new Map,
          op = [],
          Ip = this.plans.guideOn();
        for (const Yp of ip) {
          const pp = Ip && uy(Yp, this.plans.showsStarter(Yp.box.ctrl), (pp => cp(iO(Yp.box, pp)))),
            ip = "reactor" === Yp.kind ? this.plans.layoutOf(Yp.box.ctrl) : null,
            Sp = Ip && !Yp.formed ? my(Yp, cp, this.goal) : -1;
          Sp >= 0 && op.push([iO(Yp.box, Sp), My(Yp.box, Sp)]);
          const xp = sc(Yp.box);
          for (let op = 0; op < xp; op++) {
            const xp = iO(Yp.box, op),
              Lp = cp(xp),
              Dp = null === Lp ? null : jy(Yp, op, Lp, pp, Ip, ip);
            if (null !== Dp) {
              const pp = "wrong" !== Dp && qy(Yp.box, op, Sp),
                ip = pp ? `${Dp}Dim` : Dp;
              let cp = Op.get(ip);
              cp || (cp = {
                draw: {
                  ghost: Dp,
                  dim: pp
                },
                list: []
              }, Op.set(ip, cp)), cp.list.push(xp)
            }
          }
        }
        if (Ip && this.startsBattery && this.goal) {
          const [pp, ip, op] = this.goal, Ip = [];
          for (const [Op, Sp, xp] of Qy) {
            const Lp = [pp + Op, ip + Sp, op + xp];
            "Air" === cp(Lp) && Ip.push(Lp)
          }
          if (Ip.length > 0) {
            var Sp;
            const pp = null !== (Sp = Op.get("cell")) && void 0 !== Sp ? Sp : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            pp.list.push(...Ip), Op.set("cell", pp)
          }
        }
        const xp = [...Op.keys()].sort(),
          Lp = [...xp.map((pp => `${pp}:${Op.get(pp).list.join(";")}`)), `cue:${op.join(";")}`].join("|");
        if (Lp !== this.shownKey) {
          this.shownKey = Lp, this.clearMeshes(pp);
          for (const ip of xp) {
            const {
              draw: cp,
              list: op
            } = Op.get(ip);
            this.meshes.push(this.build(pp, cp, op))
          }
          for (const [ip, cp] of op) this.cues.push(dy(pp, Ny(ip, cp), Jy))
        }
      }
      build(pp, ip, cp) {
        let {
          ghost: Op,
          dim: op
        } = ip;
        const {
          size: Ip,
          colour: Sp,
          alpha: xp
        } = Xy[Op], Lp = cp[0], Yp = [], Dp = [];
        for (const [Ap, Pp, Wp] of cp) Hy(Yp, Dp, [Ap - Lp[0] + .5, Pp - Lp[1] + .5, Wp - Lp[2] + .5], [Ip, Ip, Ip]);
        return pp.createGameMesh({
          positions: Yp,
          indices: Dp
        }, {
          rgb: Sp,
          alpha: xp * (op ? .3 : 1)
        }, Lp)
      }
      clearMeshes(pp) {
        for (const ip of [...this.meshes, ...this.cues]) pp.disposeGameMesh(ip);
        this.meshes = [], this.cues = []
      }
    }
    const Fy = [.56, .83, 1],
      gy = [1, .3, .25];
    class Gy {
      constructor(pp) {
        this.plans = pp, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(pp, ip, cp) {
        var Op;
        const op = performance.now();
        if (op - this.lastCheckMs < 150) return;
        this.lastCheckMs = op;
        const Ip = ip => Ty(pp, ip),
          Sp = null === (Op = pp.Acp(ip)) || void 0 === Op ? void 0 : Op.name,
          xp = Sp && "Reactor Frame" === Qc(Sp) ? pp.getTargetedBlock() : null,
          Lp = xp ? [xp.nY[0], xp.nY[1], xp.nY[2]] : null,
          Yp = null !== Lp && "Air" === Ip(Lp) && Lp.every(((pp, ip) => Math.abs(pp + .5 - cp[ip]) <= 8)) ? Ey(Lp, cp, Ip, (pp => this.inPlan(pp))) : null,
          Dp = Yp ? `${Yp.box.ctrl.join()}|${Yp.box.rot}|${Yp.fits}` : "";
        Dp !== this.shownKey && this.show(pp, Dp, Yp)
      }
      dispose(pp) {
        this.clear(pp), this.shownKey = ""
      }
      inPlan(pp) {
        return this.plans.all().some((ip => cO(ip.box, pp) >= 0))
      }
      show(pp, ip, cp) {
        if (this.clear(pp), this.shownKey = ip, !cp) return;
        const {
          box: Op,
          fits: op
        } = cp, Ip = op ? Fy : gy, {
          lo: Sp,
          hi: xp
        } = BL(Op);
        this.meshes.push(dy(pp, NL(Sp, xp, .05), {
          rgb: Ip,
          alpha: 1
        }));
        const Lp = [],
          Yp = iO(Op, 0)[1];
        for (let Dp = 0; Dp < Op.w * Op.d; Dp++) {
          const [pp, , ip] = iO(Op, Dp);
          Lp.push([
            [pp + .5, Yp + .02 + .01, ip + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(dy(pp, Lp, {
          rgb: Ip,
          alpha: .25
        }))
      }
      clear(pp) {
        for (const ip of this.meshes) pp.disposeGameMesh(ip);
        this.meshes = []
      }
    }
    const ry = "buildAFactory2Game:";

    function Zy(pp, ip, cp) {
      const Op = pp => {
          const [cp, Op, op] = pp.box.ctrl;
          return cp === ip[0] && Op === ip[1] && op === ip[2]
        },
        op = pp.find((pp => Op(pp) || cO(pp.box, ip) >= 0));
      if (!op) return null;
      const Ip = function(pp, ip, cp) {
        const {
          w: Op,
          h: op,
          d: Ip
        } = pp.box, Sp = "reactor" === pp.kind ? `${ry}rxTitle` : `${ry}batTitle`;
        if (pp.formed) return {
          key: `${ry}lookPlanFormed`,
          kindKey: Sp,
          w: Op,
          h: op,
          d: Ip,
          count: 0
        };
        let xp = 0,
          Lp = 0;
        for (let Dp = 0; Dp < sc(pp.box); Dp++) {
          const ip = cp(iO(pp.box, Dp)),
            Op = null === ip ? "ok" : xO(pp.kind, OO(pp.box, Dp), ip);
          xp += "missing" === Op ? 1 : 0, Lp += "wrong" === Op || "blocked" === Op ? 1 : 0
        }
        const Yp = function(pp, ip, cp) {
          if (ip < 0 || null === cp) return;
          const Op = OO(pp.box, ip),
            op = xO(pp.kind, Op, cp);
          return "blocked" === op ? `${ry}lookWhy_blocked` : "wrong" === op ? "ctrl" === Op ? `${ry}lookWhy_ctrl` : `${ry}lookWhy_reactor_${Op}` : void 0
        }(pp, cO(pp.box, ip), cp([ip[0], ip[1], ip[2]]));
        if (xp > 0) return {
          key: `${ry}lookPlanToBuild`,
          kindKey: Sp,
          w: Op,
          h: op,
          d: Ip,
          count: xp,
          why: Yp
        };
        if (Lp > 0) return {
          key: `${ry}lookPlanTakeOut`,
          kindKey: Sp,
          w: Op,
          h: op,
          d: Ip,
          count: Lp,
          why: Yp
        };
        return {
          key: "reactor" === pp.kind ? `${ry}lookPlanNoRods` : `${ry}lookPlanDone`,
          kindKey: Sp,
          w: Op,
          h: op,
          d: Ip,
          count: 0
        }
      }(op, ip, cp);
      return "reactor" === op.kind && Op(op) ? {
        ...Ip,
        ctrl: !0
      } : Ip
    }

    function zy(pp, ip) {
      return pp === ip || null !== pp && null !== ip && pp.key === ip.key && pp.kindKey === ip.kindKey && pp.w === ip.w && pp.h === ip.h && pp.d === ip.d && pp.count === ip.count && pp.why === ip.why && pp.ctrl === ip.ctrl
    }

    function sy() {
      return performance.now()
    }
    class Ky {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sy;
        this.ticket = pp, this.sent = ip, this.backstopMs = cp, this.now = Op, this.queuedAt = void 0, this.queuedAt = Op()
      }
      answered() {
        const pp = this.now(),
          ip = this.sent.leftAt(this.ticket);
        return null !== ip && pp - ip > 4e3 || pp - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Vy {
      constructor() {
        this.echoes = []
      }
      add(pp) {
        this.echoes = this.echoes.filter((pp => !pp.answered())), this.echoes.push(pp)
      }
      answered() {
        var pp, ip;
        return null === (pp = null === (ip = this.echoes.at(-1)) || void 0 === ip ? void 0 : ip.answered()) || void 0 === pp || pp
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((pp => pp.answered()))
      }
      age() {
        var pp, ip;
        return null !== (pp = null === (ip = this.echoes.at(-1)) || void 0 === ip ? void 0 : ip.age()) && void 0 !== pp ? pp : null
      }
      clear() {
        this.echoes = []
      }
    }
    class pU {
      constructor(pp) {
        this.send = pp, this.value = null, this.sent = null, this.echoes = new Vy, this.down = !1, this.timer = null
      }
      shown(pp) {
        return null === this.value ? pp : this.down || this.value !== this.sent ? this.value : pp === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), pp) : this.value
      }
      pendingFor(pp) {
        return null !== this.value && this.value === this.sent && pp !== this.value ? this.echoes.age() : null
      }
      assume(pp, ip) {
        this.disarm(), this.down = !1, this.value = pp, this.sent = pp, this.echoes.clear(), this.echoes.add(ip)
      }
      press() {
        this.down = !0
      }
      drag(pp) {
        this.value = pp, this.arm(this.down ? 1e3 : 400)
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
      arm(pp) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), pp)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class iU {
      constructor() {
        this.pending = new Map
      }
      set(pp, ip, cp) {
        var Op;
        const op = null !== (Op = this.pending.get(pp)) && void 0 !== Op ? Op : {
          on: ip,
          echoes: new Vy
        };
        op.on = ip, op.echoes.add(cp), this.pending.set(pp, op)
      }
      shown(pp) {
        let ip = pp;
        for (const [cp, {
            on: Op,
            echoes: op
          }] of this.pending) 0 !== (pp & cp) === Op && op.agreeCounts() || op.answered() ? this.pending.delete(cp) : ip = Op ? ip | cp : ip & ~cp;
        return ip
      }
      pendingMask() {
        let pp = 0;
        for (const ip of this.pending.keys()) pp |= ip;
        return pp
      }
      pendingFor(pp) {
        let ip = null;
        for (const [Op, {
            on: op,
            echoes: Ip
          }] of this.pending) {
          if (void 0 !== pp && 0 !== (pp & Op) === op) continue;
          const Sp = Ip.age();
          var cp;
          if (null !== Sp) ip = Math.max(null !== (cp = ip) && void 0 !== cp ? cp : 0, Sp)
        }
        return ip
      }
      clear() {
        this.pending.clear()
      }
    }
    class cU {
      constructor() {
        this.dims = null, this.echoes = new Vy, this.unmet = null
      }
      shown(pp) {
        var ip;
        return this.dims && (OU(this.dims, pp) && this.echoes.agreeCounts() || this.echoes.answered()) && (OU(this.dims, pp) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (ip = this.dims) && void 0 !== ip ? ip : pp
      }
      takeUnmet() {
        const pp = this.unmet;
        return this.unmet = null, pp
      }
      set(pp, ip) {
        this.dims = pp, this.echoes.add(ip)
      }
      pendingFor(pp) {
        return null === this.dims || pp && OU(this.dims, pp) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function OU(pp, ip) {
      return pp[0] === ip[0] && pp[1] === ip[1] && pp[2] === ip[2]
    }
    class oU {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sy;
        this.now = pp, this.taps = new Map
      }
      tap(pp, ip, cp) {
        return !this.busy(pp) && (this.taps.set(pp, {
          at: this.now(),
          done: ip
        }), cp(), !0)
      }
      settle(pp) {
        for (const [ip, cp] of [...this.taps]) cp.done(pp) && this.taps.delete(ip)
      }
      busy(pp) {
        const ip = this.taps.get(pp);
        return !!ip && (!(this.now() - ip.at >= 3e3) || (this.taps.delete(pp), !1))
      }
      busyIds() {
        const pp = new Set;
        for (const ip of [...this.taps.keys()]) this.busy(ip) && pp.add(ip);
        return pp
      }
      clear() {
        this.taps.clear()
      }
    }

    function IU(pp) {
      return {
        send: ip => pp.track(ip),
        sendUrgent: (ip, cp) => pp.track(ip, {
          urgent: !0,
          supersedes: cp
        }),
        leftAt: ip => pp.leftAt(ip),
        holdReserve: () => pp.holdUrgentReserve(),
        answerMs: TS
      }
    }

    function SU() {
      return performance.now()
    }

    function xU(pp) {
      const ip = pp.baf2RxNeed.map((pp => {
        let [ip, cp] = pp;
        return [ip, cp]
      }));
      return JSON.stringify([pp.baf2RxFormed, ip, pp.baf2RxBad, pp.baf2RxCells])
    }

    function LU(pp, ip) {
      const cp = 0 !== (ip & yi),
        Op = 0 !== (pp.baf2RxFlags & yi);
      return !cp || Op || "running" !== pp.baf2RxState && "idle" !== pp.baf2RxState ? !cp && Op && "scram" === pp.baf2RxState && pp.baf2RxFuel > 0 ? "idle" : pp.baf2RxState : "scram"
    }

    function YU(pp) {
      return JSON.stringify([pp.baf2BatFormed, pp.baf2BatNeed, pp.baf2BatBad])
    }

    function DU(pp) {
      return pp.join(",")
    }
    class AU {
      constructor() {
        this.listeners = new Set
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      notify() {
        for (const pp of this.listeners) pp()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class PU {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(pp, ip) {
        this.lastAt = pp, this.lastUntil = pp + ip
      }
      answered(pp) {
        return this.lastAt >= pp || pp < this.lastUntil
      }
    }
    class WU {
      constructor(pp, ip) {
        this.link = pp, this.now = ip, this.hold = new cU, this.picked = null, this.notTaken = null
      }
      shown(pp) {
        const ip = this.hold.shown(pp);
        if (this.hold.takeUnmet() && this.picked) {
          var cp;
          const {
            plans: ip,
            ctrl: Op,
            at: op
          } = this.picked;
          this.picked = null, ip.unpredict(Op), null === (cp = this.notTaken) || void 0 === cp || cp.call(this, pp, op)
        }
        return ip
      }
      pendingFor(pp) {
        return this.hold.pendingFor(pp)
      }
      SW(pp, ip, cp) {
        pp.predictSize(ip, cp), this.picked = {
          plans: pp,
          ctrl: ip,
          at: this.now()
        };
        const Op = this.link.send(Wi(ip, "plan", ...cp));
        this.hold.set(cp, new Ky(Op, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class yU {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SU;
        this.plans = pp, this.readInterior = ip, this.link = cp, this.now = Op, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new iU, this.throttle = void 0, this.oneShots = void 0, this.listeners = new AU, this.redraw = null, this.releaseReserve = null, this.size = new WU(cp, Op), this.oneShots = new oU(Op), this.throttle = new pU((pp => this.echo(this.link.send(this.command("throttle", pp)))))
      }
      set(pp) {
        !pp.baf2RxOpen && this.raw && DU(this.raw.baf2RxAt) === DU(pp.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(pp), this.GA(pp)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(pp) {
        this.size.notTaken = pp
      }
      resize(pp) {
        this.raw && (this.size.SW(this.plans, this.raw.baf2RxAt, pp), this.GA(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const pp = this.raw.baf2RxAt;
        this.plans.setStarter(pp, !this.plans.showsStarter(pp)), this.GA(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.GA(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.GA(this.raw)
      }
      send(pp) {
        if (this.raw) {
          for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
          this.link.send(this.command(pp, ...cp))
        }
      }
      tap(pp, ip) {
        this.raw && this.oneShots.tap(pp, function(pp, ip) {
          if ("start" === pp) return pp => 0 === (pp.baf2RxFlags & yi);
          if ("odConfirm" === pp) return pp => 0 !== (pp.baf2RxFlags & Ui);
          const cp = xU(ip);
          return pp => xU(pp) !== cp
        }(pp, this.raw), ip) && ("start" === pp && (this.startedAt = this.now()), this.GA(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(yi, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(pp, ip) {
        if (!this.raw) return;
        const cp = pp === yi ? this.command(ip ? "scram" : "start") : this.command("od", ip ? 1 : 0),
          Op = ip && pp === yi,
          op = `${Pi} ${this.raw.baf2RxAt.join(" ")} `,
          Ip = this.echo(Op ? this.link.sendUrgent(cp, (pp => {
            const ip = pp.startsWith(op) ? pp.slice(op.length).split(" ")[0] : null;
            return "throttle" === ip || "start" === ip
          })) : this.link.send(cp));
        this.flags.set(pp, ip, Ip), Op && this.throttle.assume(0, Ip), this.GA(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(pp) {
        this.throttle.drag(pp), this.raw && this.GA(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.GA(this.raw)
      }
      subscribe(pp) {
        return this.listeners.subscribe(pp)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var pp;
        this.throttle.release(), null === (pp = this.releaseReserve) || void 0 === pp || pp.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(pp) {
        for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
        return Wi(this.raw.baf2RxAt, pp, ...cp)
      }
      echo(pp) {
        return new Ky(pp, this.link, this.link.answerMs, this.now)
      }
      GA(pp) {
        var ip;
        this.raw = pp;
        const cp = this.flags.shown(pp.baf2RxFlags),
          Op = {
            ...pp,
            baf2RxFlags: cp,
            baf2RxTarget: this.throttle.shown(pp.baf2RxTarget),
            baf2RxState: LU(pp, cp)
          },
          op = this.size.shown(Op.baf2RxDims),
          Ip = this.throttle.pendingFor(),
          Sp = [this.throttle.pendingFor(pp.baf2RxTarget), this.flags.pendingFor(pp.baf2RxFlags), this.size.pendingFor(pp.baf2RxDims)].filter((pp => null !== pp)),
          xp = Sp.length > 0 ? Math.max(...Sp) : null,
          Lp = this.oneShots.busyIds(),
          Yp = Op.baf2RxAt;
        let Dp, Ap, Pp = null,
          Wp = [Math.max(0, op[0] - 2), Math.max(0, op[1] - 2), Math.max(0, op[2] - 2)];
        if (Op.baf2RxFormed) {
          const [pp, ip, cp] = Op.baf2RxDims;
          Wp = [Math.max(0, pp - 2), Math.max(0, ip - 2), Math.max(0, cp - 2)], Dp = Array.from(Op.baf2RxCells, Number), Ap = `${Wp.join(",")}:${Op.baf2RxCells}`
        } else {
          var yp;
          const pp = null === (yp = this.plans.planAt(Yp)) || void 0 === yp ? void 0 : yp.box,
            ip = pp ? rc(pp, "reactor", ...op) : gc(Yp, 1, ...op, Gc("reactor", op[0])),
            cp = this.readInterior(ip);
          Pp = oL(Wp, cp), Dp = cp, Ap = `${Wp.join(",")}:${cp.join("")}`
        }(null === (ip = this.looksOf) || void 0 === ip ? void 0 : ip.key) !== Ap && (this.looksOf = {
          key: Ap,
          looks: DL(Wp, Dp)
        }), this.view = {
          status: Op,
          dims: op,
          plan: Pp,
          inner: Wp,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(Yp),
          odConfirmed: this.odConfirmed || 0 !== (Op.baf2RxFlags & ei),
          guide: this.plans.guideOn(),
          throttlePending: null !== Ip,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== xp && xp >= 5e3,
          busy: Lp,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== xp || Lp.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.GA(this.raw)
        }), 250))
      }
    }
    class UU {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SU;
        this.plans = pp, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new AU, this.redraw = null, this.size = new WU(ip, cp), this.oneShots = new oU(cp)
      }
      set(pp) {
        !pp.baf2BatOpen && this.view && DU(this.view.status.baf2BatAt) === DU(pp.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(pp), this.GA(pp)
      }
      tap(pp, ip) {
        if (!this.view) return;
        const cp = YU(this.view.status);
        this.oneShots.tap(pp, (pp => YU(pp) !== cp), ip) && this.GA(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(pp) {
        this.size.notTaken = pp
      }
      resize(pp) {
        this.view && (this.size.SW(this.plans, this.view.status.baf2BatAt, pp), this.GA(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.GA(this.view.status)
      }
      subscribe(pp) {
        return this.listeners.subscribe(pp)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      GA(pp) {
        const ip = this.size.shown(pp.baf2BatDims),
          cp = this.oneShots.busyIds();
        this.view = {
          status: pp,
          dims: ip,
          TA: kL(ip, pp.baf2BatDims) ? pp.baf2BatCapacity : WL(...ip),
          guide: this.plans.guideOn(),
          busy: cp
        }, this.listeners.notify(), cp.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.GA(this.view.status)
        }), 250))
      }
    }
    const wU = "buildAFactory2Game:";

    function vU() {
      var pp;
      const ip = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!ip) return null;
      const cp = ip.querySelector(".ExitButton");
      return function(pp, ip) {
        const cp = ip ? ip.left - 8 : pp.right;
        return {
          left: pp.left,
          top: pp.top,
          width: Math.max(0, cp - pp.left),
          height: pp.height
        }
      }(ip.getBoundingClientRect(), null !== (pp = null === cp || void 0 === cp ? void 0 : cp.getBoundingClientRect()) && void 0 !== pp ? pp : null)
    }
    const tU = (0, Op.memo)((function(pp) {
      let {
        store: ip
      } = pp;
      const {
        t: cp
      } = (0, Eo.H)(), [op, Ip] = (0, Op.useState)((() => ip.get())), [Sp, xp] = (0, Op.useState)((() => performance.now()));
      (0, Op.useEffect)((() => (Ip(ip.get()), ip.subscribe((() => {
        Ip(ip.get()), xp(performance.now())
      })))), [ip]);
      const {
        alarm: Lp,
        boomAt: Yp
      } = op, Dp = null !== Lp && null !== Lp.secs, [Ap, Pp] = (0, Op.useState)(null);
      (0, Op.useEffect)((() => {
        if (!Dp) return;
        Pp(vU());
        const pp = setInterval((() => {
          xp(performance.now()), Pp(vU())
        }), 250);
        return () => {
          clearInterval(pp)
        }
      }), [Dp]);
      const [Wp, yp] = (0, Op.useState)(!1);
      return (0, Op.useEffect)((() => {
        if (Yp === -1 / 0) return;
        yp(!0);
        const pp = setTimeout((() => {
          yp(!1)
        }), 1300);
        return () => {
          clearTimeout(pp)
        }
      }), [Yp]), (0, CI.jsxs)(CI.Fragment, {
        children: [null !== Lp && (0, CI.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: cp(Lp.hot ? `${wU}rxAlarmSiren` : `${wU}rxAlarmDamaged`, {
            amount: String(Lp.damage)
          })
        }), null !== Lp && null !== Lp.secs && (0, CI.jsx)("div", {
          className: Ap ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== Ap && void 0 !== Ap ? Ap : void 0,
          "aria-live": "assertive",
          children: cp(`${wU}rxAlarmCountdown`, {
            amount: String((Up = Lp.secs, wp = Sp - Lp.receivedAt, Math.max(1, Math.ceil(Up - wp / 1e3))))
          })
        }), Wp && (0, CI.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var Up, wp
    }));
    class HU {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      ku(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const cp = pp.baf2RxAlarmAt.join(",");
        let Op = this.snapshot.boomAt;
        if (pp.baf2RxAlarmBoom) this.byReactor.delete(cp), Op = ip;
        else if (pp.baf2RxAlarmDamage <= 0) this.byReactor.delete(cp);
        else {
          var op;
          this.byReactor.set(cp, {
            damage: pp.baf2RxAlarmDamage,
            secs: null !== (op = pp.baf2RxAlarmSecs) && void 0 !== op ? op : null,
            hot: !0 === pp.baf2RxAlarmHot,
            receivedAt: ip
          })
        }
        this.GA(Op)
      }
      retain(pp) {
        let ip = !1;
        for (const cp of [...this.byReactor.keys()]) pp.has(cp) || (this.byReactor.delete(cp), ip = !0);
        ip && this.GA(this.snapshot.boomAt)
      }
      has(pp) {
        return this.byReactor.has(pp)
      }
      get() {
        return this.snapshot
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      GA(pp) {
        let ip = null;
        for (const cp of this.byReactor.values())(!ip || cp.damage > ip.damage) && (ip = cp);
        this.snapshot = {
          alarm: ip,
          boomAt: pp
        };
        for (const cp of this.listeners) cp()
      }
    }
    const dU = {
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

    function eU(pp) {
      return [pp[0], pp[1], pp[2]]
    }

    function uU(pp) {
      return `${pp[0]},${pp[1]},${pp[2]}`
    }
    class jU {
      constructor(pp) {
        if (this.plans = pp, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var pp;
            return {
              active: this.glows.flatMap((pp => {
                let {
                  record: ip
                } = pp;
                return ip ? [ip] : []
              })),
              log: [...null !== (pp = this.devLog) && void 0 !== pp ? pp : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var pp;
        return null !== (pp = this.devLog) && void 0 !== pp ? pp : []
      }
      check(pp, ip, cp) {
        const Op = new Set(ip.map((pp => uU(pp.box.ctrl))));
        for (const Sp of function(pp, ip) {
            const cp = [],
              Op = new Map(pp);
            pp.clear();
            for (const op of ip) {
              const ip = yy(op.box.ctrl),
                Ip = op.formed ? op.level : 0;
              pp.set(ip, Ip), Ip > 0 && 0 === Op.get(ip) && cp.push(op)
            }
            return cp
          }(this.levels, this.plans.all())) Op.has(uU(Sp.box.ctrl)) && this.show(pp, Sp, "on", cp);
        const op = this.plans.lastFormed();
        if (null === op || op.receivedAt <= this.flashedAt) return null;
        this.flashedAt = op.receivedAt;
        const Ip = function(pp, ip) {
          var cp;
          const Op = yy(pp);
          return null !== (cp = ip.find((pp => yy(pp.box.ctrl) === Op))) && void 0 !== cp ? cp : null
        }(op.ctrl, ip);
        return Ip && this.show(pp, Ip, "formed", cp), Ip
      }
      fade(pp, ip) {
        0 !== this.glows.length && (this.glows = this.glows.filter((cp => {
          let {
            mesh: Op,
            glow: op,
            startMs: Ip,
            record: Sp
          } = cp;
          const xp = (ip - Ip) / dU[op].ms;
          return xp >= 1 ? (pp.disposeGameMesh(Op), Sp && (Sp.endMs = ip), !1) : (pp.setGameMesh(Op, {
            visibility: "formed" === op ? 1 - xp : Math.sin(Math.PI * xp)
          }), !0)
        })))
      }
      dispose(pp) {
        for (const {
            mesh: cp
          }
          of this.glows) pp.disposeGameMesh(cp);
        this.glows = [], this.levels.clear();
        const ip = "undefined" !== typeof window ? window : null;
        (null === ip || void 0 === ip ? void 0 : ip.baf2Glows) === this.devAccessor && delete ip.baf2Glows
      }
      show(pp, ip, cp, Op) {
        const {
          lo: op,
          hi: Ip
        } = BL(ip.box);
        let Sp = null;
        this.devLog && (Sp = {
          glow: cp,
          ctrl: eU(ip.box.ctrl),
          lo: eU(op),
          hi: eU(Ip),
          startMs: Op,
          endMs: null
        }, this.devLog.push(Sp), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(pp, cp, NL(op, Ip, dU[cp].thick)),
          glow: cp,
          startMs: Op,
          record: Sp
        })
      }
      build(pp, ip, cp) {
        const Op = dy(pp, cp, {
          rgb: dU[ip].colour,
          alpha: 1
        });
        return pp.setGameMesh(Op, {
          visibility: 0
        }), Op
      }
    }
    const kU = 1 / .6,
      mU = {
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
        blendMode: fx.g.Standard,
        soft: !0
      },
      RU = {
        ...mU,
        size: [.25, .4],
        count: 2
      };

    function qU(pp) {
      return {
        colours: [pp, pp],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: fx.g.Add,
        soft: !1
      }
    }
    const MU = qU([150, 225, 255]),
      CU = qU([185, 145, 255]),
      EU = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function XU(pp) {
      const ip = Bi[pp];
      return null === ip.fuelSlot || xc(ip) ? EU.includes(pp) ? CU : MU : mU
    }
    const lU = {
        kind: "smokePuff"
      },
      QU = [.2, .025, .2];

    function JU(pp, ip) {
      const [
        [cp, Op, op],
        [Ip, Sp, xp]
      ] = pp.colours;
      return {
        texture: pp.soft ? lU : "square_particle",
        TA: ip,
        minLifeTime: pp.life[0] / kU,
        maxLifeTime: pp.life[1] / kU,
        minEmitPower: pp.power[0] * kU,
        maxEmitPower: pp.power[1] * kU,
        minSize: pp.size[0],
        maxSize: pp.size[1],
        emitRate: 0,
        gravity: [0, pp.lift * kU * kU, 0],
        dir1: [-pp.spread, 1, -pp.spread],
        dir2: [pp.spread, 1, pp.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [cp, Op, op, pp.alpha],
          maxColor: [Ip, Sp, xp, pp.alpha]
        }, {
          timeFraction: 1,
          minColor: [cp, Op, op, 0],
          maxColor: [Ip, Sp, xp, 0]
        }],
        blendMode: pp.blendMode
      }
    }
    class BU {
      constructor(pp) {
        this.fixed = pp, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(pp, ip, cp) {
        var Op;
        if (cp === this.lastFrame) return !1;
        this.lastFrame = cp;
        const op = this.at;
        op[0] = ip[0] + .5, op[1] = ip[1] + 1.025, op[2] = ip[2] + .5;
        const Ip = null !== (Op = this.fixed) && void 0 !== Op ? Op : xp() ? RU : mU;
        let Sp = this.particles.get(Ip);
        return Sp || (Sp = pp.createParticles(function(pp) {
          return JU(pp, Math.ceil(12 * pp.count * pp.life[1]) + pp.count)
        }(Ip), {
          pos: op,
          half: QU
        }), this.particles.set(Ip, Sp)), Sp.moveTo(op), Sp.emit(Ip.count), !0
      }
      dispose() {
        for (const pp of this.particles.values()) pp.stop();
        this.particles.clear()
      }
    }
    class NU {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(pp) {
        this.indexed = !0;
        for (const ip of Ci) {
          const cp = XU(ip);
          for (let Op = 1; Op <= 4; Op++) {
            const op = pp.blockNameToBlockId(`${ip}|meta|rot${Op}|Running`, !0);
            if (null === op) continue;
            let Ip = this.pufferIndexByStyle.get(cp);
            void 0 === Ip && (Ip = this.pufferList.push(new BU(cp === mU ? null : cp)) - 1, this.pufferIndexByStyle.set(cp, Ip)), this.pufferIndexById[op] = Ip + 1
          }
        }
      }
      onAfterRender(pp, ip) {
        this.indexed || this.index(pp);
        const cp = performance.now(),
          Op = 0 === this.lastMs ? 0 : Math.min(cp - this.lastMs, 250) / 1e3;
        this.lastMs = cp, this.frame++, pp.particlesEnabled() ? (this.scan(pp, ip), this.puff(pp, Op)) : this.sources = []
      }
      dispose() {
        for (const pp of this.pufferList) pp.dispose();
        this.sources = [], this.found = []
      }
      scan(pp, ip) {
        0 === this.scanRow && (this.origin = [Math.floor(ip[0]) - 12, Math.floor(ip[1]) - 6, Math.floor(ip[2]) - 12]);
        const cp = Math.min(this.scanRow + 16, 325),
          [Op, op, Ip] = this.origin,
          Sp = this.hits;
        Sp.length = 0;
        for (let xp = this.scanRow; xp < cp; xp++) {
          const ip = Op + xp % 25,
            cp = op + Math.floor(xp / 25);
          pp.scanBlocks(ip, cp, Ip, ip + 1, cp + 1, Ip + 25, this.pufferIndexById, Sp)
        }
        for (let xp = 0; xp < Sp.length; xp += 4) {
          const pp = Sp[xp + 3];
          this.found.push({
            pos: [Sp[xp], Sp[xp + 1], Sp[xp + 2]],
            tx: pp,
            puffer: this.pufferList[this.pufferIndexById[pp] - 1]
          })
        }
        this.scanRow = cp, 325 === cp && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(pp, ip) {
        const cp = this.sources.length;
        if (0 !== cp) {
          this.budget = Math.min(this.budget + Math.min(cp / 1.2, 12) * ip, 2);
          for (let ip = 0; ip < cp && this.budget >= 1; ip++) {
            const ip = this.sources[this.cursor % cp];
            this.cursor = (this.cursor + 1) % cp, pp.getBlockId(ip.pos[0], ip.pos[1], ip.pos[2]) === ip.tx && (ip.puffer.puff(pp, ip.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const TU = {
        ...qU([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      fU = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function bU(pp) {
      return 0 === pp.spots.length ? 0 : Math.min(1 * pp.level, 4)
    }

    function hU(pp) {
      return 0 === pp.glass.length ? 0 : Math.min(.75 * pp.level, 3)
    }

    function aU(pp) {
      return `${pp.ctrl.join(",")}:${pp.rot}:${pp.cu},${pp.cv}:${pp.w},${pp.h},${pp.d}`
    }

    function nU(pp, ip) {
      const cp = ip.w - 2,
        Op = ip.h - 2,
        op = ip.d - 2,
        Ip = [];
      for (let Sp = 0; Sp < cp * Op * op; Sp++) {
        const xp = Sp % cp,
          Lp = Math.floor(Sp / cp) % op,
          Yp = Math.floor(Sp / (cp * op));
        if (xp > 0 && xp < cp - 1 && Lp > 0 && Lp < op - 1 && Yp > 0 && Yp < Op - 1) continue;
        const Dp = iO(ip, IO(ip, Sp)),
          Ap = Ty(pp, Dp);
        if (null !== Ap && "Fuel Rod" === Qc(Ap))
          for (const ip of fU) {
            const cp = [Dp[0] + ip[0], Dp[1] + ip[1], Dp[2] + ip[2]];
            gU(pp, cp) && Ip.push(GU(cp, ip))
          }
      }
      return Ip
    }

    function FU(pp, ip) {
      const {
        lo: cp,
        hi: Op
      } = BL(ip), op = [];
      for (let Ip = cp[0]; Ip < Op[0]; Ip++)
        for (let ip = cp[1]; ip < Op[1]; ip++) {
          const Sp = Ip === cp[0] || Ip === Op[0] - 1 || ip === cp[1] || ip === Op[1] - 1 ? 1 : Math.max(1, Op[2] - 1 - cp[2]);
          for (let xp = cp[2]; xp < Op[2]; xp += Sp) {
            const Sp = [Ip, ip, xp];
            if (!gU(pp, Sp)) continue;
            const Lp = Ip === cp[0] ? fU[1] : Ip === Op[0] - 1 ? fU[0] : xp === cp[2] ? fU[5] : xp === Op[2] - 1 ? fU[4] : ip === cp[1] ? fU[3] : fU[2];
            op.push(GU(Sp, Lp))
          }
        }
      return op
    }

    function gU(pp, ip) {
      const cp = Ty(pp, ip);
      return null !== cp && "Reactor Glass" === Qc(cp)
    }

    function GU(pp, ip) {
      return [
        [pp[0] + .5 + .55 * ip[0], pp[1] + .5 + .55 * ip[1], pp[2] + .5 + .55 * ip[2]],
        [0 === ip[0] ? .4 : .02, 0 === ip[1] ? .4 : .02, 0 === ip[2] ? .4 : .02]
      ]
    }
    class rU {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(pp, ip, cp, Op) {
        const op = [],
          Ip = new Set;
        for (const Yp of ip) {
          var Sp, xp, Lp;
          const {
            box: ip
          } = Yp;
          if ("reactor" !== Yp.kind || Yp.level <= 0 || (ip.ctrl[0] - cp[0]) ** 2 + (ip.ctrl[1] - cp[1]) ** 2 + (ip.ctrl[2] - cp[2]) ** 2 > 576) continue;
          const Dp = aU(ip);
          Ip.add(Dp);
          let Ap = this.spots.get(Dp);
          if ((!Ap || Op - Ap.at > 3e3) && (Ap = {
              at: Op,
              spots: nU(pp, ip),
              glass: FU(pp, ip)
            }, this.spots.set(Dp, Ap)), 0 === Ap.spots.length && 0 === Ap.glass.length) continue;
          const Pp = this.sparking.find((pp => pp.key === Dp));
          op.push({
            key: Dp,
            level: Yp.level,
            spots: Ap.spots,
            glass: Ap.glass,
            budget: null !== (Sp = null === Pp || void 0 === Pp ? void 0 : Pp.budget) && void 0 !== Sp ? Sp : 0,
            cursor: null !== (xp = null === Pp || void 0 === Pp ? void 0 : Pp.cursor) && void 0 !== xp ? xp : 0,
            glassBudget: null !== (Lp = null === Pp || void 0 === Pp ? void 0 : Pp.glassBudget) && void 0 !== Lp ? Lp : 0
          })
        }
        for (const Yp of this.spots.keys()) Ip.has(Yp) || this.spots.delete(Yp);
        this.sparking = op
      }
      emit(pp, ip, cp) {
        var Op;
        if (0 === this.sparking.length || !pp.particlesEnabled() || cp === this.lastFrame) return;
        this.lastFrame = cp;
        let op = 0,
          Ip = 0;
        for (const yp of this.sparking) op += bU(yp), Ip += hU(yp);
        const Sp = op > 8 ? 8 / op : 1,
          xp = Ip > 6 ? 6 / Ip : 1;
        let Lp, Yp = null,
          Dp = null;
        for (const yp of this.sparking) yp.budget = Math.min(yp.budget + bU(yp) * Sp * ip, 2), yp.budget >= 1 && (!Yp || yp.budget > Yp.budget) && (Yp = yp), yp.glassBudget = Math.min(yp.glassBudget + hU(yp) * xp * ip, 2), yp.glassBudget >= 1 && (!Dp || yp.glassBudget > Dp.glassBudget) && (Dp = yp);
        if (Yp) Yp.budget--, Lp = Yp.spots[Yp.cursor++ % Yp.spots.length];
        else {
          if (!Dp) return;
          Dp.glassBudget--, Lp = Dp.glass[Math.floor(Math.random() * Dp.glass.length)]
        }
        const [Ap, Pp] = Lp, Wp = null !== (Op = this.emitter) && void 0 !== Op ? Op : this.create(pp, Ap, Pp);
        Wp.moveTo(Ap, Pp), Wp.emit(TU.count)
      }
      dispose() {
        var pp;
        null === (pp = this.emitter) || void 0 === pp || pp.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(pp, ip, cp) {
        const Op = Math.ceil(14 * TU.count * TU.life[1]) + TU.count;
        return this.emitter = pp.createParticles(JU(TU, Op), {
          pos: ip,
          half: cp
        }), this.emitter
      }
    }
    const ZU = [2, 3.2],
      zU = 1 / 3,
      sU = 1 / .6,
      KU = {
        texture: lU,
        TA: Math.ceil(18 * ZU[1]) + 4,
        minLifeTime: ZU[0] / sU,
        maxLifeTime: ZU[1] / sU,
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
        blendMode: fx.g.Standard
      };
    class VU {
      constructor(pp) {
        this.plans = pp, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new rU, this.frame = 0, this.outline = new jU(pp)
      }
      onAfterRender(pp, ip, cp) {
        const Op = performance.now(),
          op = 0 === this.lastMs ? 0 : Math.min(Op - this.lastMs, 250) / 1e3;
        if (this.lastMs = Op, this.outline.fade(pp, Op), this.puff(pp, op, cp), this.sparks.emit(pp, op, this.frame++), Op - this.lastCheckMs < 150) return;
        this.lastCheckMs = Op;
        const Ip = this.plans.all().filter((pp => pp.formed && pw(pp.box.ctrl, cp) <= 4096));
        this.plumes = Ip.filter((pp => "reactor" === pp.kind && pp.level > 0)).map((pp => ({
          box: pp.box,
          level: pp.level
        }))), this.updateHums(pp, ip, Ip, cp), this.sparks.update(pp, Ip, cp, Op), this.chimeFormed(pp, ip, Ip, Op)
      }
      dispose(pp) {
        var ip;
        this.outline.dispose(pp), null === (ip = this.steam) || void 0 === ip || ip.dispose(), this.steam = null, this.sparks.dispose();
        for (const cp of this.hums.values()) cp.stop();
        this.hums.clear()
      }
      chimeFormed(pp, ip, cp, Op) {
        const op = this.outline.check(pp, cp, Op);
        op && pp.playSound(ip, "exp_levelup", .6, 1, {
          Sp: [op.box.ctrl[0] + .5, op.box.ctrl[1], op.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(pp, ip, cp) {
        const Op = this.plumes;
        if (0 === Op.length || !pp.particlesEnabled()) return void(this.plumeBudget = 0);
        const op = Op.reduce(((pp, ip) => pp + 3 * ip.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + op * ip, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let Ip = this.plumeCursor % (op / 3);
        this.plumeCursor++;
        let Sp = Op[0];
        for (const Ap of Op) {
          if (Ip < Ap.level) {
            Sp = Ap;
            break
          }
          Ip -= Ap.level
        }
        const {
          lo: xp,
          hi: Lp
        } = BL(Sp.box);
        if (function(pp, ip, cp) {
            const Op = Math.max(pp[0] - cp[0], 0, cp[0] - ip[0]),
              op = Math.max(pp[2] - cp[2], 0, cp[2] - ip[2]);
            return Math.hypot(Op, cp[1] - ip[1], op)
          }(xp, Lp, cp) < 6 && Math.random() > zU) return;
        const Yp = [(xp[0] + Lp[0]) / 2, Lp[1] + .05, (xp[2] + Lp[2]) / 2],
          Dp = [(Lp[0] - xp[0]) / 2 - .5, .05, (Lp[2] - xp[2]) / 2 - .5];
        this.steam ??= pp.createParticles(KU, {
          pos: Yp,
          half: Dp
        }), this.steam.moveTo(Yp, Dp), this.steam.emit(1)
      }
      updateHums(pp, ip, cp, Op) {
        const op = new Map;
        for (const Sp of cp) "reactor" === Sp.kind && Sp.level > 0 && pw(Sp.box.ctrl, Op) <= 576 && op.set(`${Ip=Sp.box.ctrl,`${Ip[0]},${Ip[1]},${Ip[2]}`}:${Sp.level}`, Sp);
        var Ip;
        for (const [Sp, xp] of this.hums) op.has(Sp) || (xp.stop(), this.hums.delete(Sp));
        for (const [Sp, xp] of op) {
          if (this.hums.has(Sp)) continue;
          const {
            lo: cp,
            hi: Op
          } = BL(xp.box), op = [(cp[0] + Op[0]) / 2, cp[1], (cp[2] + Op[2]) / 2], Ip = pp.playSound(ip, "rocketEngineLoop", .08 + .06 * xp.level, .55, {
            Sp: op,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          Ip && this.hums.set(Sp, Ip)
        }
      }
    }

    function pw(pp, ip) {
      return (pp[0] - ip[0]) ** 2 + (pp[1] - ip[1]) ** 2 + (pp[2] - ip[2]) ** 2
    }
    class iw {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      ku(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const Op = [pp.baf2BombAt[0], pp.baf2BombAt[1], pp.baf2BombAt[2]],
          op = pp.baf2BombR;
        if (pp.baf2BombBoom) {
          const pp = Math.hypot(ip[0] - Op[0], ip[1] - Op[1], ip[2] - Op[2]);
          this.GA({
            fuse: null,
            blast: {
              at: Op,
              r: op,
              receivedAt: cp,
              distance: pp,
              flash: pp <= 3 * op
            }
          })
        } else this.GA({
          ...this.snapshot,
          fuse: pp.baf2BombMs > 0 ? {
            at: Op,
            r: op,
            endsAt: cp + pp.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      GA(pp) {
        this.snapshot = pp;
        for (const ip of this.listeners) ip()
      }
    }
    const Ow = (0, Op.memo)((function(pp) {
      var ip;
      let {
        store: cp
      } = pp;
      const {
        t: op
      } = (0, Eo.H)(), [Ip, Sp] = (0, Op.useState)((() => cp.get())), [xp, Lp] = (0, Op.useState)((() => performance.now()));
      (0, Op.useEffect)((() => (Sp(cp.get()), cp.subscribe((() => {
        Sp(cp.get()), Lp(performance.now())
      })))), [cp]);
      const {
        fuse: Yp,
        blast: Dp
      } = Ip;
      (0, Op.useEffect)((() => {
        if (!Yp) return;
        const pp = setInterval((() => {
          Lp(performance.now())
        }), 250);
        return () => {
          clearInterval(pp)
        }
      }), [Yp]);
      const [Ap, Pp] = (0, Op.useState)(!1);
      (0, Op.useEffect)((() => {
        if (null === Dp || void 0 === Dp || !Dp.flash) return;
        Pp(!0);
        const pp = setTimeout((() => {
          Pp(!1)
        }), 2500);
        return () => {
          clearTimeout(pp)
        }
      }), [Dp]);
      const Wp = Yp ? function(pp, ip) {
        return pp.endsAt <= ip ? 0 : Math.ceil((pp.endsAt - ip) / 1e3)
      }(Yp, xp) : 0;
      return (0, CI.jsxs)(CI.Fragment, {
        children: [Wp > 0 && (0, CI.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: op("buildAFactory2Game:bombCountdown", {
            amount: String(Wp),
            radius: String(null !== (ip = null === Yp || void 0 === Yp ? void 0 : Yp.r) && void 0 !== ip ? ip : 0)
          })
        }), Ap && (0, CI.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function ow(pp) {
      const ip = Math.min(4, Math.max(1, pp / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * pp / 4)),
        capSpread: Math.min(5 * pp / 8, 24 * ip),
        capThick: 6 * ip,
        stemHalfWidth: 3 * ip,
        puffScale: ip
      }
    }
    class Iw {
      constructor() {
        this.sx = !1
      }
      hold(pp) {
        pp.getCameraFar() < 1e3 && (pp.setCameraFar(1e3), this.sx = !0)
      }
      release(pp) {
        this.sx && (this.sx = !1, pp.setCameraFar(null))
      }
    }
    const Sw = 1 / .6,
      xw = [.2, .1, .2],
      Lw = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Yw = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: fx.g.Standard,
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
      Dw = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: fx.g.Standard,
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
      Aw = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: fx.g.Standard,
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
      Pw = {
        texture: lU,
        TA: Math.ceil(120) + 4,
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
        blendMode: fx.g.Add
      };
    class Ww {
      constructor(pp) {
        this.store = pp, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Iw, this.timers = []
      }
      onAfterRender(pp, ip) {
        const cp = performance.now(),
          Op = 0 === this.lastMs ? 0 : Math.min(cp - this.lastMs, 250) / 1e3;
        this.lastMs = cp;
        const {
          fuse: op,
          blast: Ip
        } = this.store.get();
        null !== Ip && Ip !== this.shownBlast && (this.shownBlast = Ip, this.startBlast(pp, ip, Ip, cp));
        const Sp = pp.particlesEnabled();
        null !== op && op.endsAt > cp && Sp ? this.emitBeacon(pp, op, Op, cp) : this.beaconBudget = 0, null !== this.cloud && (cp - this.cloud.startMs > 33e3 ? this.disposeCloud(pp) : (this.far.hold(pp), Sp && this.emitCloud(pp, Op, cp)))
      }
      dispose(pp) {
        var ip;
        null === (ip = this.beacon) || void 0 === ip || ip.dispose(), this.beacon = null, this.disposeCloud(pp);
        for (const cp of this.timers) clearTimeout(cp);
        this.timers.length = 0
      }
      emitBeacon(pp, ip, cp, Op) {
        const op = ip.endsAt - Op < 5e3 ? 350 : 1e3,
          Ip = .5 + .5 * Math.sin(2 * Math.PI * Op / op);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * Ip * cp, 4), this.beaconBudget < 1) return;
        const Sp = Math.floor(this.beaconBudget);
        this.beaconBudget -= Sp;
        const [xp, Lp, Yp] = ip.at, Dp = [xp + .5, Lp + 1.1, Yp + .5];
        this.beacon ??= pp.createParticles(Pw, {
          pos: Dp,
          half: xw
        }), this.beacon.moveTo(Dp), this.beacon.emit(Sp)
      }
      startBlast(pp, ip, cp, Op) {
        var op;
        null === (op = this.beacon) || void 0 === op || op.dispose(), this.beacon = null, this.disposeCloud(pp);
        const Ip = (0, Nx.isMobile)() ? .5 : 1;
        this.streams = [Yw, Dw, Aw].map((pp => {
          const ip = Math.round(pp.count * Ip);
          return {
            spec: pp,
            particles: null,
            rate: ip / ((pp.toMs - pp.fromMs) / 1e3),
            budget: 0,
            left: ip
          }
        })), this.cloud = {
          blast: cp,
          startMs: Op
        };
        const Sp = Math.max(.25, 1 - cp.distance / (6 * cp.r)),
          xp = cp.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [cp, Op, op] of Lw) Uw(pp, ip, cp, Sp * Op, op)
        }), xp))
      }
      emitCloud(pp, ip, cp) {
        const {
          blast: Op,
          startMs: op
        } = this.cloud, Ip = cp - op, [Sp, xp, Lp] = Op.at, Yp = ow(Op.r);
        for (const Dp of this.streams) {
          const {
            spec: cp
          } = Dp;
          if (Dp.left <= 0 || Ip < cp.fromMs) continue;
          Dp.budget += Dp.rate * ip;
          const op = Math.min(Math.floor(Dp.budget), Dp.left);
          if (op < 1) continue;
          Dp.budget -= op, Dp.left -= op;
          const Ap = Dp.particles ??= this.createStream(pp, cp, Op);
          if (cp === Yw) {
            const pp = Yp.stemHalfWidth;
            Ap.moveTo([Sp, xp + 1, Lp], [pp, 1, pp])
          } else if (cp === Dw) {
            const pp = Yp.capSpread * Math.min(1, (Ip - cp.fromMs) / 3e3),
              ip = Math.sqrt(Math.random()),
              Op = 2 * Math.random() * Math.PI,
              op = Math.cos(Op) * ip,
              Dp = Math.sin(Op) * ip,
              Pp = Sp + op * pp,
              Wp = Lp + Dp * pp,
              yp = Yp.capThick,
              Up = xp + Yp.capHeight + yp * (1 - ip * ip) * 2;
            Ap.setDirections([.7 * op, .05, .7 * Dp], [op, .2, Dp]), Ap.moveTo([Pp, Up, Wp], [yp, yp, yp])
          } else {
            this.ringAngle += 2.39996;
            const pp = Math.cos(this.ringAngle),
              ip = Math.sin(this.ringAngle);
            Ap.setDirections([pp, .05, ip], [pp, .1, ip]), Ap.moveTo([Sp + 2 * pp, xp + .5, Lp + 2 * ip], [0, .5, 0])
          }
          Ap.emit(op)
        }
      }
      createStream(pp, ip, cp) {
        const {
          r: Op
        } = cp, op = Math.max(ip.life[0], Op / 25), Ip = ip === Aw ? [.9 * op, op] : ip.life, Sp = ow(Op), xp = ip === Aw ? 1 : Sp.puffScale, Lp = {
          texture: lU,
          TA: ip.count + 4,
          minLifeTime: Ip[0] / Sw,
          maxLifeTime: Ip[1] / Sw,
          minSize: ip.size[0] * xp,
          maxSize: ip.size[1] * xp,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, ip.gravity * Sw * Sw, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: ip.from[0],
            maxColor: ip.from[1]
          }, {
            timeFraction: .6,
            minColor: yw(ip.from[0], ip.to[0]),
            maxColor: yw(ip.from[1], ip.to[1])
          }, {
            timeFraction: 1,
            minColor: ip.to[0],
            maxColor: ip.to[1]
          }],
          blendMode: ip.blend
        };
        if (ip === Yw) {
          const pp = Sp.capHeight / ((Ip[0] + Ip[1]) / 2);
          Lp.minEmitPower = .9 * pp * Sw, Lp.maxEmitPower = 1.05 * pp * Sw, Lp.dir1 = [-.1, 1, -.1], Lp.dir2 = [.1, 1, .1]
        } else ip === Dw ? (Lp.minEmitPower = 1.2, Lp.maxEmitPower = 2, Lp.dir1 = [-1, .05, -1], Lp.dir2 = [1, .2, 1]) : (Lp.minEmitPower = 39.583333333333336, Lp.maxEmitPower = 41.66666666666667, Lp.dir1 = [1, 0, 0], Lp.dir2 = [1, 0, 0]);
        return pp.createParticles(Lp, {
          pos: cp.at
        })
      }
      disposeCloud(pp) {
        for (const cp of this.streams) {
          var ip;
          null === (ip = cp.particles) || void 0 === ip || ip.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(pp)
      }
    }

    function yw(pp, ip) {
      return [(pp[0] + ip[0]) / 2, (pp[1] + ip[1]) / 2, (pp[2] + ip[2]) / 2, .75 * pp[3]]
    }

    function Uw(pp, ip, cp, Op, op) {
      try {
        pp.playSound(ip, cp, Op, op)
      } catch (Ip) {
        console.error(Ip)
      }
    }
    const ww = {
        TA: 720,
        perS: 100
      },
      vw = {
        TA: 320,
        perS: 44
      };
    class tw {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(pp, ip) {
        this.zone = {
          centre: [...pp.centre],
          r: pp.r,
          band: pp.band ? [pp.band[0], pp.band[1]] : void 0
        }, this.endsAt = ip
      }
      stop() {
        this.zone = null
      }
      ku(pp, ip) {
        const {
          baf2FalloutMs: cp,
          baf2FalloutAt: Op,
          baf2FalloutR: op,
          baf2FalloutY: Ip
        } = pp;
        cp > 0 && Op && void 0 !== op ? this.start({
          centre: Op,
          r: op,
          band: Ip
        }, ip + cp) : this.stop()
      }
      perS(pp, ip, cp) {
        const Op = this.zone;
        if (!Op) return 0;
        const op = this.endsAt - pp;
        return op <= 0 ? (this.zone = null, 0) : Op.band && (ip[1] < Op.band[0] || ip[1] > Op.band[1]) || Math.hypot(ip[0] - Op.centre[0], ip[2] - Op.centre[2]) > Op.r ? 0 : cp.perS * Math.min(1, op / 5e3)
      }
    }
    const Hw = [5, 7],
      dw = [24, 8, 24],
      ew = .5,
      uw = 1 / .6,
      jw = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class kw {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Nx.isMobile)();
        this.state = new tw, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(pp) {
          return pp ? vw : ww
        }(pp)
      }
      startFallout(pp, ip) {
        this.state.start(pp, ip)
      }
      stopFallout() {
        this.state.stop()
      }
      ku(pp) {
        this.state.ku(pp, performance.now())
      }
      onAfterRender(pp, ip) {
        var cp;
        const Op = performance.now(),
          op = 0 === this.lastMs ? 0 : Math.min(Op - this.lastMs, 250) / 1e3;
        this.lastMs = Op;
        const Ip = this.state.perS(Op, ip, this.tier);
        if (Ip <= 0 || !pp.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + Ip * op, Ip / 4);
        const Sp = Math.floor(this.budget);
        if (Sp < 1) return;
        this.budget -= Sp;
        const xp = this.at;
        xp[0] = ip[0], xp[1] = ip[1] + 12, xp[2] = ip[2];
        const Lp = null !== (cp = this.systems) && void 0 !== cp ? cp : this.create(pp, xp),
          Yp = this.amounts;
        Yp[0] = 0, Yp[1] = 0;
        for (let Dp = 0; Dp < Sp; Dp++) Yp[Math.random() < .3 ? 1 : 0]++;
        for (let Dp = 0; Dp < Lp.length; Dp++) Yp[Dp] > 0 && (Lp[Dp].moveTo(xp, dw), Lp[Dp].emit(Yp[Dp]))
      }
      dispose() {
        for (const ip of null !== (pp = this.systems) && void 0 !== pp ? pp : []) {
          var pp;
          ip.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(pp, ip) {
        return this.systems = jw.map((cp => {
          let {
            rgba: [Op, op, Ip, Sp],
            share: xp
          } = cp;
          const Lp = {
            texture: "square_particle",
            TA: Math.ceil(this.tier.TA * xp),
            minLifeTime: Hw[0] / uw,
            maxLifeTime: Hw[1] / uw,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [ew, -1, ew],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Op, op, Ip, 0]
            }, {
              timeFraction: .15,
              minColor: [Op, op, Ip, Sp]
            }, {
              timeFraction: .8,
              minColor: [Op, op, Ip, Sp]
            }, {
              timeFraction: 1,
              minColor: [Op, op, Ip, 0]
            }],
            blendMode: fx.g.Standard
          };
          return pp.createParticles(Lp, {
            pos: ip,
            half: dw
          })
        })), this.systems
      }
    }
    const mw = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Rw(pp) {
      const ip = /\|rot(\d)/.exec(pp);
      return mw[ip ? Number(ip[1]) : 1]
    }
    var qw = cp(636),
      Mw = cp(38690);
    const Cw = new Set(qw.o);

    function Ew(pp) {
      if (-2 !== pp.count) return null;
      const ip = Fp(pp.item);
      return null !== ip && Cw.has(ip) ? ip : null
    }

    function Xw(pp) {
      const {
        width: ip,
        height: cp
      } = (0, Mw.b)(pp).hitBoxDimensions;
      return .55 / Math.max(ip, cp)
    }

    function lw(pp, ip, cp) {
      if (!cp) return !1;
      const Op = pp[0] + .5 - ip[0],
        op = pp[1] + .5 - ip[1],
        Ip = pp[2] + .5 - ip[2];
      return Op * Op + op * op + Ip * Ip <= 576
    }

    function Qw(pp, ip) {
      return Math.atan2(pp[0], pp[2]) + Math.PI + ip
    }

    function Jw(pp, ip) {
      const cp = 2 * Math.PI;
      return (pp + cp * ip / 1e4) % cp
    }
    class Bw {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = pp, this.now = ip, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = pp.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(pp, ip) {
        if (0 === this.farms.size) return;
        const cp = this.now(),
          Op = Number.isNaN(this.frameMs) ? 0 : Math.min(cp - this.frameMs, 100);
        this.frameMs = cp, cp - this.checkedMs >= 1e3 && (this.checkedMs = cp, this.check(pp, ip));
        for (const op of this.farms.values()) op.shown && op.running && null !== op.model && Op > 0 && (op.spin = Jw(op.spin, Op), op.model.setPose(op.feet, Qw(op.front, op.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const pp of this.farms.values()) this.drop(pp);
        this.farms.clear()
      }
      sync() {
        const pp = new Set;
        for (const ip of this.labels.list()) {
          const cp = Ew(ip);
          if (null === cp) continue;
          pp.add(ip.key);
          const Op = this.farms.get(ip.key);
          if ((null === Op || void 0 === Op ? void 0 : Op.mob) === cp) continue;
          Op && this.drop(Op);
          const [op, Ip, Sp] = ip.pos;
          this.farms.set(ip.key, {
            pos: ip.pos,
            feet: [op + .5, Ip + 1, Sp + .5],
            mob: cp,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [ip, cp] of this.farms) pp.has(ip) || (this.drop(cp), this.farms.delete(ip));
        this.checkedMs = -1 / 0
      }
      check(pp, ip) {
        for (const cp of this.farms.values()) {
          const [Op, op, Ip] = cp.pos, Sp = Ty(pp, cp.pos);
          null !== Sp && Qc(Sp) === Bp && lw(cp.pos, ip, "Air" === Ty(pp, [Op, op + 1, Ip])) ? (cp.running = Sp.endsWith("|Running"), cp.front = Rw(Sp), null === cp.model && (cp.model = pp.createMobModel(cp.mob, Xw(cp.mob)), null === cp.model) || (cp.model.setPose(cp.feet, Qw(cp.front, cp.spin)), cp.shown || (cp.model.setVisible(!0), cp.shown = !0))) : (cp.shown && null !== cp.model && cp.model.setVisible(!1), cp.shown = !1)
        }
      }
      drop(pp) {
        var ip;
        null === (ip = pp.model) || void 0 === ip || ip.dispose(), pp.model = null, pp.shown = !1
      }
    }
    class Nw {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(pp) {
        var ip;
        this.island = pp.baf2ColIsland, this.islandSite = (ip = pp.baf2ColSite) && 8 === ip.length ? {
          spawnXZ: [ip[0], ip[1]],
          coreXZ: [ip[2], ip[3]],
          minXZ: [ip[4], ip[5]],
          maxXZ: [ip[6], ip[7]]
        } : null, this.views = pp.baf2ColList.map((pp => ({
          entry: Yo(pp)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(pp) {
        this.status = pp, this.emit()
      }
      onOpen(pp) {
        this.openHeld = pp
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
        return this.views.map((pp => pp.entry))
      }
      entryAtRoot(pp) {
        var ip;
        return null === (ip = this.views.find((ip => {
          let {
            entry: cp
          } = ip;
          return cp.focus[0] === pp[0] && cp.focus[1] === pp[1] + 1 && cp.focus[2] === pp[2]
        }))) || void 0 === ip ? void 0 : ip.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(pp, ip) {
        return nL(this.entries(), pp, ip)
      }
      lookSource() {
        return {
          handles: pp => UO(pp) >= 0 || wO(pp),
          line: (pp, ip) => this.lookLine(pp, ip),
          version: () => this.beamsVersion
        }
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const pp of this.listeners) pp()
      }
    }
    const Tw = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((pp => pp / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((pp => [pp, pp + 1, pp + 2, pp, pp + 2, pp + 3]))
    };

    function fw(pp, ip, cp, Op, op, Ip, Sp) {
      let xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const Lp = Math.cos(xp),
        Yp = Math.sin(xp),
        Dp = pp.positions.length / 3,
        {
          positions: Ap,
          indices: Pp
        } = Tw;
      for (let Wp = 0; Wp < Ap.length; Wp += 3) {
        const xp = Ap[Wp] * op,
          Dp = Ap[Wp + 2] * Sp;
        pp.positions.push(ip + xp * Lp + Dp * Yp, cp + Ap[Wp + 1] * Ip, Op - xp * Yp + Dp * Lp)
      }
      for (const Wp of Pp) pp.indices.push(Dp + Wp)
    }

    function bw(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return ip < 1 ? {
        rgb: pp,
        alpha: ip
      } : {
        rgb: pp,
        alpha: 1,
        opaque: !0
      }
    }
    class hw {
      constructor(pp, ip) {
        this.style = pp, this.perSource = ip, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(pp) {
        this.sources = pp, 0 === pp.length && (this.budget = 0)
      }
      LP(pp, ip, cp) {
        const Op = this.sources.length;
        if (0 !== Op) {
          var op, Ip;
          this.budget = Math.min(this.budget + (op = Op, Ip = this.perSource, Math.min(op * Ip, oY) * ip), 2);
          for (let ip = 0; ip < Op && this.budget >= 1; ip++) {
            const ip = this.sources[this.cursor % Op];
            this.cursor = (this.cursor + 1) % Op;
            if (!(Math.max(Math.abs(ip.x - cp[0]), Math.abs(ip.y - cp[1]), Math.abs(ip.z - cp[2])) > 32)) return this.puff(pp, ip), void this.budget--
          }
        }
      }
      dispose() {
        var pp;
        null === (pp = this.particles) || void 0 === pp || pp.dispose(), this.particles = null, this.sources = []
      }
      puff(pp, ip) {
        let {
          x: cp,
          y: Op,
          z: op,
          h: Ip,
          faces: Sp
        } = ip;
        const xp = function(pp, ip, cp, Op, op) {
            const [Ip, Sp, xp] = op[Math.floor(Math.random() * op.length)], Lp = .04, Yp = (pp, ip, cp) => pp > 0 ? ip + cp + Lp : pp < 0 ? ip - Lp : ip + .1, Dp = (pp, ip, cp) => pp > 0 ? ip + cp + Lp : pp < 0 ? ip - Lp : ip + cp - .1, Ap = [Yp(Ip, pp, 1), Yp(Sp, ip, Op), Yp(xp, cp, 1)], Pp = [Dp(Ip, pp, 1), Dp(Sp, ip, Op), Dp(xp, cp, 1)];
            return {
              pos: [(Ap[0] + Pp[0]) / 2, (Ap[1] + Pp[1]) / 2, (Ap[2] + Pp[2]) / 2],
              half: [(Pp[0] - Ap[0]) / 2, (Pp[1] - Ap[1]) / 2, (Pp[2] - Ap[2]) / 2],
              out: [Ip, Sp, xp]
            }
          }(cp, Op, op, Ip, Sp),
          {
            style: Lp
          } = this,
          Yp = this.particles ??= pp.createParticles(JU(Lp, Math.ceil(Lp.count * oY * Lp.life[1]) + 4), xp);
        Yp.moveTo(xp.pos, xp.half);
        const [Dp, Ap, Pp] = xp.out, Wp = Lp.spread;
        Yp.setDirections([Dp - Wp, .6 + Ap, Pp - Wp], [Dp + Wp, 1 + Ap, Pp + Wp]), Yp.emit(Lp.count)
      }
    }
    const aw = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class nw {
      constructor() {
        this.green = new hw(SY.green, cY), this.pink = new hw(SY.pink, OY), this.colliders = [], this.lastMs = 0
      }
      setSources(pp) {
        this.colliders = pp;
        const ip = [],
          cp = [];
        for (const Op of pp) {
          const [pp, op, Ip] = Op.focus;
          ip.push({
            x: pp,
            y: op - 1,
            z: Ip,
            h: 2,
            faces: aw
          });
          for (let ip = 0; ip < 4; ip++) {
            if (!Op.live[ip]) continue;
            const [pp, op, Ip] = HO(Op.focus, ip, YO.LASER_D), [Sp, , xp] = tO[ip], Lp = aw.filter((pp => pp[0] !== Sp || pp[2] !== xp || 0 !== pp[1]));
            cp.push({
              x: pp,
              y: op,
              z: Ip,
              h: 1,
              faces: Lp
            })
          }
        }
        this.green.setSources(ip), this.pink.setSources(cp)
      }
      onAfterRender(pp) {
        const ip = performance.now(),
          cp = 0 === this.lastMs ? 0 : Math.min(ip - this.lastMs, 250) / 1e3;
        if (this.lastMs = ip, 0 === this.colliders.length || !pp.particlesEnabled()) return;
        const Op = pp.getCameraPosition();
        this.green.LP(pp, cp, Op), this.pink.LP(pp, cp, Op)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Fw = 1.04,
      gw = bw([1, 120 / 255, 220 / 255]),
      Gw = bw([1, .25, .25], .35);
    class rw {
      constructor(pp) {
        this.store = pp, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new nw
      }
      onAfterRender(pp) {
        this.store.version() !== this.builtVersion && this.rebuild(pp);
        const ip = performance.now();
        for (const cp of this.beams) {
          const Op = 1 + .35 * Math.sin(ip / 700 * Math.PI * 2 + cp.phase);
          pp.setGameMesh(cp.mesh, {
            scale: [cp.alongX ? 1 : Op, Op, cp.alongX ? Op : 1]
          })
        }
        this.glow.onAfterRender(pp)
      }
      dispose(pp) {
        this.clear(pp), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(pp) {
        this.clear(pp), this.builtVersion = this.store.version();
        const ip = [];
        for (const {
            entry: cp
          }
          of this.store.colliders()) cp.on && cp.live.some(Boolean) && (this.addBeams(pp, cp), ip.push(cp)), cp.blockers.length > 0 && this.addMarkers(pp, cp);
        this.glow.setSources(ip)
      }
      addBeams(pp, ip) {
        const [cp, Op, op] = ip.focus, Ip = iY - .25, Sp = (.25 + iY) / 2;
        for (let xp = 0; xp < 4; xp++) {
          if (!ip.live[xp]) continue;
          const [Lp, , Yp] = tO[xp], Dp = 0 !== Lp, Ap = {
            positions: [],
            indices: []
          };
          fw(Ap, 0, 0, 0, Dp ? Ip : .2, .2, Dp ? .2 : Ip);
          const Pp = [cp + .5 + Lp * Sp, Op + .5, op + .5 + Yp * Sp],
            Wp = pp.createGameMesh(Ap, gw, Pp);
          this.meshes.push(Wp), this.beams.push({
            mesh: Wp,
            alongX: Dp,
            phase: xp * Math.PI / 2
          })
        }
      }
      addMarkers(pp, ip) {
        const cp = ip.blockers[0],
          Op = {
            positions: [],
            indices: []
          };
        for (const [op, Ip, Sp] of ip.blockers) fw(Op, op - cp[0] + .5, Ip - cp[1] + .5, Sp - cp[2] + .5, Fw, Fw, Fw);
        this.meshes.push(pp.createGameMesh(Op, Gw, cp))
      }
      clear(pp) {
        for (const ip of this.meshes) pp.disposeGameMesh(ip);
        this.meshes = [], this.beams = []
      }
    }
    const Zw = [.56, .83, 1],
      zw = [1, .73, .08],
      sw = [1, .25, .25],
      Kw = [.85, .85, .85],
      Vw = [.3, .45, .6];

    function pv(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const Sp = op / 2,
        xp = op + Ip;
      for (const Lp of [-Sp, Sp])
        for (const op of [-Sp, Sp]) fw(pp, ip, cp + Lp, Op + op, xp, Ip, Ip), fw(pp, ip + Lp, cp, Op + op, Ip, xp, Ip), fw(pp, ip + Lp, cp + op, Op, Ip, Ip, xp)
    }

    function iv(pp) {
      return ip => pp.isBlockInLoadedChunk(ip[0], ip[1], ip[2]) && 0 === pp.getBlockId(ip[0], ip[1], ip[2])
    }

    function cv(pp) {
      return pp.map((pp => {
        let {
          free: ip,
          blocked: cp,
          gaps: Op,
          supports: op
        } = pp;
        return `${ip.join(";")}|${cp.join(";")}|${Op.join(";")}|${op.join(";")}`
      })).join("/")
    }

    function Ov(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const Ip = ip[0],
        Sp = {
          positions: [],
          indices: []
        };
      for (const [xp, Lp, Yp] of ip) pv(Sp, xp - Ip[0] + .5, Lp - Ip[1] + .5, Yp - Ip[2] + .5, Op, op);
      return pp.createGameMesh(Sp, cp, Ip)
    }
    class ov {
      constructor(pp) {
        this.store = pp, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(pp, ip, cp) {
        var Op;
        const op = null === (Op = pp.Acp(ip)) || void 0 === Op ? void 0 : Op.name;
        if (op !== AO && op !== DO) return void("" !== this.shownKey && this.show(pp, "", []));
        const Ip = performance.now();
        if (Ip - this.lastCheckMs >= 200 && (this.lastCheckMs = Ip, op === AO ? this.check(pp, cp) : this.preview(pp, cp)), this.pulses.length > 0) {
          const ip = 1 + .12 * Math.sin(Ip / 1e3 * 1.25 * Math.PI * 2),
            cp = [ip, ip, ip];
          for (const Op of this.pulses) pp.setGameMesh(Op, {
            scale: cp
          })
        }
      }
      dispose(pp) {
        this.clear(pp), this.shownKey = ""
      }
      check(pp, ip) {
        const cp = iv(pp),
          Op = [];
        for (const {
            entry: Ip
          }
          of this.store.colliders()) {
          Ip.focus.every(((pp, cp) => Math.abs(pp + .5 - ip[cp]) <= YO.GHOST_REACH)) && Op.push(pY(Ip, cp))
        }
        const op = cv(Op);
        op !== this.shownKey && this.show(pp, op, Op)
      }
      preview(pp, ip) {
        const cp = pp.getTargetedBlock(),
          Op = cp ? [cp.nY[0], cp.nY[1], cp.nY[2]] : null,
          op = null !== Op && Op.every(((pp, cp) => Math.abs(pp + .5 - ip[cp]) <= 8)),
          Ip = this.store.site(),
          Sp = op && Ip ? function(pp, ip, cp) {
            const Op = vO(pp);
            if (!Op.every(ip)) return null;
            const op = uO(pp, cp);
            return {
              column: Op,
              spots: pY({
                focus: Op[1],
                lasers: [!1, !1, !1, !1],
                open: op,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, ip),
              fits: op.filter(Boolean).length >= YO.MIN_SPOTS
            }
          }(Op, iv(pp), Ip) : null,
          xp = Sp ? [Sp.spots] : [],
          Lp = Sp ? `preview ${Op.join(",")}|${Sp.fits}|${cv(xp)}` : "";
        var Yp, Dp;
        Lp !== this.shownKey && this.show(pp, Lp, xp, null !== (Yp = null === Sp || void 0 === Sp ? void 0 : Sp.column) && void 0 !== Yp ? Yp : [], null === (Dp = null === Sp || void 0 === Sp ? void 0 : Sp.fits) || void 0 === Dp || Dp)
      }
      show(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(pp), this.shownKey = ip, Op.length > 0 && this.meshes.push(Ov(pp, Op, bw(op ? Kw : sw)));
        for (const {
            free: Ip,
            blocked: Sp,
            gaps: xp,
            supports: Lp
          }
          of cp) {
          for (const [ip, cp, Op] of Ip) {
            const op = {
              positions: [],
              indices: []
            };
            pv(op, 0, 0, 0);
            const Ip = pp.createGameMesh(op, bw(Zw), [ip + .5, cp + .5, Op + .5]);
            this.meshes.push(Ip), this.pulses.push(Ip)
          }
          Sp.length > 0 && this.meshes.push(Ov(pp, Sp, bw(zw))), xp.length > 0 && this.meshes.push(Ov(pp, xp, bw(sw), 1.06, .07)), Lp.length > 0 && this.meshes.push(Ov(pp, Lp, bw(Vw)))
        }
      }
      clear(pp) {
        for (const ip of this.meshes) pp.disposeGameMesh(ip);
        this.meshes = [], this.pulses = []
      }
    }
    class Iv {
      constructor() {
        this.stored = new Map, this.sx = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(pp) {
        if (!pp.baf2TermOpen) return !1;
        pp.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [ip, cp] of pp.baf2TermItems) cp > 0 ? this.stored.set(ip, cp) : this.stored.delete(ip);
        if (pp.baf2TermHeld && (this.sx = new Map(pp.baf2TermHeld)), this.pending = this.pending.filter((ip => ip.seq > pp.baf2TermAcked)), this.silos = pp.baf2TermSilos, this.readOnly = pp.baf2TermReadOnly, this.pocket = !0 === pp.baf2TermPocket, pp.baf2TermReset) this.resort();
        else {
          const pp = new Set(this.order);
          for (const ip of this.stored.keys()) pp.has(ip) || this.order.push(ip)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((pp, ip) => this.amount(ip) - this.amount(pp) || pp.localeCompare(ip))), this.changed()
      }
      take(pp, ip) {
        const cp = Yi(pp, this.amount(ip));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: ip,
          amount: cp,
          put: !1
        }), this.recents = [ip, ...this.recents.filter((pp => pp !== ip))].slice(0, 6), this.changed(), oi(this.seq, pp, ip)
      }
      put(pp, ip) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: ip,
          amount: Yi(pp, this.heldAmount(ip)),
          put: !0
        }), this.changed(), Ii(this.seq, pp, ip)
      }
      putAll() {
        this.seq++;
        for (const pp of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: pp,
          amount: this.heldAmount(pp),
          put: !0
        });
        return this.changed(), Si(this.seq)
      }
      amount(pp) {
        var ip;
        let cp = null !== (ip = this.stored.get(pp)) && void 0 !== ip ? ip : 0;
        for (const Op of this.pending) Op.item === pp && (cp += Op.put ? Op.amount : -Op.amount);
        return Math.max(0, cp)
      }
      heldAmount(pp) {
        var ip;
        let cp = null !== (ip = this.sx.get(pp)) && void 0 !== ip ? ip : 0;
        for (const Op of this.pending) Op.put && Op.item === pp && (cp -= Op.amount);
        return Math.max(0, cp)
      }
      heldItems() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((ip => ip === pp || this.heldAmount(ip) > 0))
      }
      items() {
        return this.order.filter((pp => this.amount(pp) > 0))
      }
      recent() {
        return this.recents.filter((pp => this.amount(pp) > 0))
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
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      changed() {
        this.version++;
        for (const pp of this.listeners) pp()
      }
    }
    var Sv = cp(38633);
    const xv = {
      isBlock: pp => void 0 !== Xp.e[pp],
      harvestType: pp => {
        var ip;
        return null === (ip = Xp.e[pp]) || void 0 === ip ? void 0 : ip.harvestType
      },
      harvestLevel: pp => {
        var ip;
        return null === (ip = Xp.e[pp]) || void 0 === ip ? void 0 : ip.harvestLevel
      },
      dropsNothing: pp => {
        var ip;
        return null === (null === (ip = Xp.e[pp]) || void 0 === ip ? void 0 : ip.drops)
      },
      displayName: pp => {
        var ip;
        return null === (ip = Ox.m[pp]) || void 0 === ip ? void 0 : ip.displayName
      },
      description: pp => {
        var ip;
        return null === (ip = Ox.m[pp]) || void 0 === ip ? void 0 : ip.description
      },
      harvests: pp => {
        var ip;
        return null === (ip = Ox.m[pp]) || void 0 === ip ? void 0 : ip.harvests
      },
      level: pp => {
        var ip;
        return null === (ip = Ox.m[pp]) || void 0 === ip ? void 0 : ip.level
      }
    };

    function Lv(pp, ip, cp) {
      return function(pp, ip, cp, Op) {
        var op, Ip;
        const Sp = ip.split("|")[0],
          xp = pp.isBlock(ip) ? ip : pp.isBlock(Sp) ? Sp : null;
        if (null === xp || "rock" !== pp.harvestType(xp) || pp.dropsNothing(xp) && !hO.has(Sp)) return null;
        const Lp = cp && "rock" === pp.harvests(cp) ? null !== (op = pp.level(cp)) && void 0 !== op ? op : 0 : null,
          Yp = null !== (Ip = null !== Op && void 0 !== Op ? Op : pp.harvestLevel(xp)) && void 0 !== Ip ? Ip : 0;
        return (null !== Lp ? Yp <= Lp : 0 === pp.harvestLevel(xp)) ? null : CO(pp, Yp)
      }(xv, pp, ip, cp)
    }

    function Yv(pp, ip) {
      return function(pp, ip, cp) {
        if (ip === MO[0]) return [(0, Jp.Nd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, Jp.N.whiteUiText)];
        const Op = cp.split("|")[0],
          op = pp.isBlock(Op) ? pp.displayName(Op) : void 0,
          Ip = "string" === typeof op ? op : op && "translationKey" in op ? `$t(${op.translationKey})` : Op;
        return [(0, Jp.Nd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: Ip
          }
        }, Jp.N.whiteUiText), (0, Jp.Nd)({
          translationKey: `item:${(0,Jp.qe)(ip)}`
        }, Jp.N.yellowUiText)]
      }(xv, pp, ip)
    }
    const Dv = "buildAFactory2Game:";
    const Av = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Pv(pp) {
      return pp.endsWith(" Ore")
    }
    const Wv = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      yv = [],
      Uv = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Wv,
        plan: null,
        atomic: yv
      },
      wv = "buildAFactory2Game:",
      vv = new Set(["Splitter", "Sorting Gate"]),
      tv = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class Hv {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = pp, this.planAt = ip, this.tierOf = cp, this.tx = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.sx = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = Uv, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(pp, ip, cp) {
        var Op, op, Ip;
        let Sp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const xp = null !== (Op = null === (op = pp.Acp(ip)) || void 0 === op ? void 0 : op.name) && void 0 !== Op ? Op : null,
          Lp = pp.isPlayerCrouching(ip),
          Yp = 0 === cp ? null : this.resolve(pp, cp),
          Dp = null !== Yp && null !== Sp && vv.has(Yp.rootName) && function(pp, ip) {
            return tv.some((cp => {
              let [Op, op] = cp;
              const Ip = pp.getBlockId(ip[0] + Op, ip[1], ip[2] + op);
              return 0 !== Ip && "Express Belt" === pp.getMetaInfo(Ip).rootName
            }))
          }(pp, Sp),
          Ap = this.updatePlan(0 === cp ? null : Sp),
          Pp = this.tierOf(),
          Wp = null === Sp ? null : (0, Sv.e)(cp),
          yp = null !== Wp && null !== Sp && (0, Sv.h)(function(pp) {
            return (ip, cp, Op) => pp.getBlockId(ip, cp, Op)
          }(pp), Sp[0], Sp[1], Sp[2], Wp),
          Up = this.readAfloat(pp, cp, Sp);
        if (cp === this.tx && yp === this.missesMaker && Up === this.afloat && xp === this.sx && Lp === this.crouching && Dp === this.express && Pp === this.tier && !Ap && (!this.targetsLive || !this.liveMoved(Sp))) return;
        this.tx = cp, this.missesMaker = yp, this.afloat = Up, this.sx = xp, this.crouching = Lp, this.express = Dp;
        const wp = Dp && Yp ? function(pp) {
          if (null === pp.info) return null;
          return pp.express ??= {
            ...pp.info,
            detail: `${wv}lookKeepsUpExpress`,
            detailItem: null
          }, pp.express
        }(Yp) : null !== Yp && yp && null !== Wp ? this.besideMaker(Yp, cp, Wp) : null !== Yp && Up ? this.hanging(Yp) : null !== (Ip = null === Yp || void 0 === Yp ? void 0 : Yp.info) && void 0 !== Ip ? Ip : null;
        this.tier = Pp;
        const vp = Yp && wp ? function(pp, ip) {
          var cp, Op;
          const op = Xp.e[pp];
          if (!pp.endsWith(" Ore") || "rock" !== (null === op || void 0 === op ? void 0 : op.harvestType) || 0 === op.harvestLevel) return null;
          const Ip = null !== (cp = op.harvestLevel) && void 0 !== cp ? cp : 0,
            Sp = ip ? Ox.m[ip] : void 0;
          if ("rock" === (null === Sp || void 0 === Sp ? void 0 : Sp.harvests) && (null !== (Op = Sp.level) && void 0 !== Op ? Op : 0) >= Ip) return null;
          const xp = (Lp = Ip, CO(xv, Lp));
          var Lp;
          if (null === xp) return null;
          const Yp = xI(xp),
            Dp = /^[AEIOU]/.test(xp) ? "An" : "";
          if ("rock" === (null === Sp || void 0 === Sp ? void 0 : Sp.harvests) && ip) return {
            key: `${wv}lookToolTooWeak${Dp}`,
            sx: xI(ip),
            needed: Yp
          };
          return {
            key: xp === MO[0] ? `${wv}lookNeedAnyPickaxe` : `${wv}lookNeedPickaxe${Dp}`,
            sx: null,
            needed: Yp
          }
        }(Yp.rootName, xp) : null;
        this.targetsLive = !0 === (null === Yp || void 0 === Yp ? void 0 : Yp.live) && null !== Sp;
        let tp = null;
        this.targetsLive && Yp && Sp && this.live && (this.livePos[0] = Sp[0], this.livePos[1] = Sp[1], this.livePos[2] = Sp[2], this.liveVersion = this.live.version(), tp = this.live.line(Yp.rootName, Sp));
        const Hp = null === wp ? Wv : function(pp, ip, cp) {
            const Op = function(pp, ip, cp) {
              const Op = Bc(pp);
              if (null === Op) return null;
              const op = `${Dv}lookPortMode_${Op}`,
                Ip = FO(ip);
              if (Ip && cp) return {
                mode: null,
                detail: op,
                next: `${Dv}lookWrenchPickUp`,
                nextState: null
              };
              const Sp = Nc(pp),
                xp = null === Sp ? null : Bc(Sp);
              return null === xp ? {
                mode: null,
                detail: op,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: op,
                next: Ip ? `${Dv}lookWrenchNext` : `${Dv}lookPortWrench`,
                nextState: `${Dv}lookPortState_${xp}`
              }
            }(pp, ip, cp);
            if (null !== Op) return Op;
            const op = Io(pp, ip, cp);
            return null === op.mode && null === op.next ? Wv : op
          }(pp.blockIdToBlockName(cp), xp, Lp),
          dp = this.plan,
          ep = Yp && wp ? this.rowsOf(Yp.rootName, Pp) : yv,
          jp = this.snapshot;
        if (!(null === wp ? !jp.visible : jp.visible && wp === jp.info && (kp = vp, mp = jp.tool, kp === mp || null !== kp && null !== mp && kp.key === mp.key && kp.sx === mp.sx && kp.needed === mp.needed) && function(pp, ip) {
            return pp === ip || null !== pp && null !== ip && pp.key === ip.key && JSON.stringify([pp.params, pp.keys]) === JSON.stringify([ip.params, ip.keys])
          }(tp, jp.live) && function(pp, ip) {
            return pp.mode === ip.mode && pp.detail === ip.detail && pp.next === ip.next && pp.nextState === ip.nextState
          }(Hp, jp.wrench) && zy(dp, jp.plan) && ep === jp.atomic)) {
          var kp, mp;
          this.snapshot = null === wp ? {
            ...jp,
            visible: !1
          } : {
            info: wp,
            visible: !0,
            tool: vp,
            live: tp,
            wrench: Hp,
            plan: dp,
            atomic: ep
          };
          for (const pp of this.listeners) pp()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Uv, this.tx = 0, this.sx = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(pp, ip, cp) {
        if (null === cp || 0 === ip || !xp() || !Pv(this.resolve(pp, ip).rootName)) return !1;
        const Op = `${cp[0]},${cp[1]},${cp[2]},${ip}`,
          op = performance.now();
        return Op === this.afloatKey && op - this.afloatAt < dv ? this.afloat : (this.afloatKey = Op, this.afloatAt = op, function(pp, ip) {
          for (const [cp, Op, op] of Av) {
            const Ip = ip(pp[0] + cp, pp[1] + Op, pp[2] + op);
            if (void 0 === Ip || null !== Ip && !Pv(Ip)) return !1
          }
          return !0
        }(cp, ((ip, cp, Op) => function(pp, ip, cp, Op) {
          if (!pp.isBlockInLoadedChunk(ip, cp, Op)) return;
          const op = pp.getBlockId(ip, cp, Op);
          return 0 === op ? null : pp.getMetaInfo(op).rootName
        }(pp, ip, cp, Op))))
      }
      liveMoved(pp) {
        var ip;
        const {
          livePos: cp
        } = this;
        return null === pp || pp[0] !== cp[0] || pp[1] !== cp[1] || pp[2] !== cp[2] || (null === (ip = this.live) || void 0 === ip ? void 0 : ip.version()) !== this.liveVersion
      }
      updatePlan(pp) {
        const ip = null === pp ? "" : pp.join(","),
          cp = performance.now();
        if (ip === this.planPos && cp - this.planMs < 250) return !1;
        this.planPos = ip, this.planMs = cp;
        const Op = null === pp ? null : this.planAt([pp[0], pp[1], pp[2]]),
          op = !zy(Op, this.plan);
        return this.plan = Op, op
      }
      besideMaker(pp, ip, cp) {
        let {
          info: Op
        } = pp;
        if (null === Op) return null;
        let op = this.besideMakerById.get(ip);
        if (void 0 === op) {
          const pp = "cryo" === cp ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          op = {
            ...Op,
            detail: `${wv}${pp}`,
            detailItem: null
          }, this.besideMakerById.set(ip, op)
        }
        return op
      }
      hanging(pp) {
        let {
          info: ip,
          rootName: cp
        } = pp;
        if (null === ip) return null;
        let Op = this.afloatByRoot.get(cp);
        return void 0 === Op && (Op = {
          ...ip,
          detail: `${wv}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(cp, Op)), Op
      }
      rowsOf(pp, ip) {
        if (null === ip) return yv;
        const cp = `${pp}|${ip}`;
        let Op = this.rowsByKey.get(cp);
        if (void 0 === Op) {
          const op = function(pp, ip) {
            var cp;
            if (!(pp in Bi)) return [];
            const Op = null !== (cp = Ni[pp]) && void 0 !== cp ? cp : [],
              op = new Map;
            for (const Sp of GI(pp, ip))
              if ((Op.includes(Sp) || gI(Sp.output) && nI(Sp.output) > sp(pp)) && nI(Sp.output) <= ip) {
                var Ip;
                const pp = null !== (Ip = op.get(Sp.output)) && void 0 !== Ip ? Ip : [];
                pp.push(Sp.input), op.set(Sp.output, pp)
              } return ZI([...op], (pp => {
              let [ip] = pp;
              return -nI(ip)
            })).map((pp => {
              let [ip, cp] = pp;
              return {
                output: ip,
                inputs: cp
              }
            }))
          }(pp, ip);
          Op = op.length > 0 ? op : yv, this.rowsByKey.set(cp, Op)
        }
        return Op
      }
      resolve(pp, ip) {
        const {
          rootId: cp,
          rootName: Op
        } = pp.getMetaInfo(ip), op = (0, vc.i)(Op) ? ip : cp;
        let Ip = this.byRootId.get(op);
        const Sp = xp();
        if (void 0 === Ip || Ip.nuclear !== Sp) {
          var Lp;
          const cp = function(pp) {
            return fO(xv, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp)
          }(Op, pp.blockIdToBlockName(ip));
          Ip = {
            info: cp,
            rootName: Op,
            live: null !== cp && !0 === (null === (Lp = this.live) || void 0 === Lp ? void 0 : Lp.handles(Op)),
            nuclear: Sp
          }, this.byRootId.set(op, Ip)
        }
        return Ip
      }
    }
    const dv = 500;
    const ev = (0, Op.memo)((function(pp) {
      var ip, cp;
      let {
        store: op
      } = pp;
      const {
        t: Ip
      } = (0, Eo.H)(), [Sp, xp] = (0, Op.useState)((() => op.get()));
      (0, Op.useEffect)((() => (xp(op.get()), op.subscribe((() => {
        xp(op.get())
      })))), [op]);
      const {
        openInGameMenuName: Lp,
        openEverythingMenuName: Yp,
        isTouchScreen: Dp
      } = (0, jo.o)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: Ap,
        tool: Pp,
        live: Wp,
        wrench: yp,
        atomic: Up
      } = Sp, wp = Sp.visible && null === Lp && null === Yp;
      if (null === Ap) return null;
      const vp = null !== yp.detail ? Ip(yp.detail) : null !== (ip = Sp.plan) && void 0 !== ip && ip.ctrl ? Ip("buildAFactory2Game:lookPlanCtrl") : null !== Ap.detail ? Ip(Ap.detail, null === Ap.detailItem ? void 0 : {
        item: Ip(Ap.detailItem)
      }) : null;
      return (0, CI.jsxs)("div", {
        className: Ro()("Baf2LookTarget", {
          Visible: wp
        }),
        "aria-hidden": !wp,
        children: [(0, CI.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: Ip(Ap.name)
        }), null !== Sp.plan && (0, CI.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Ip(Sp.plan.key, {
            kind: Ip(Sp.plan.kindKey),
            w: String(Sp.plan.w),
            h: String(Sp.plan.h),
            d: String(Sp.plan.d),
            count: String(Sp.plan.count)
          })
        }), void 0 !== (null === (cp = Sp.plan) || void 0 === cp ? void 0 : cp.why) && (0, CI.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Ip(Sp.plan.why)
        }), null !== yp.mode && (0, CI.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Ip(yp.mode)
        }), null !== Pp ? (0, CI.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: Ip(Pp.key, {
            item: Ip(Pp.needed),
            sx: null === Pp.sx ? "" : Ip(Pp.sx)
          })
        }) : null !== Wp ? (0, CI.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Ip(Wp.key, xY(Ip, Wp))
        }) : null !== vp && (0, CI.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: vp
        }), Up.length > 0 && (0, CI.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Ip("buildAFactory2Game:lookAtomicRecipes", {
            list: Up.map((pp => {
              let {
                output: ip,
                inputs: cp
              } = pp;
              const Op = cp.length > 1 ? ` ${Ip("buildAFactory2Game:recipeMore",{count:String(cp.length-1)})}` : "";
              return `${Ip(xI(cp[0]))}${Op} \u2192 ${Ip(xI(ip))}`
            })).join(", ")
          })
        }), null !== yp.next && (0, CI.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: Ip(yp.next, {
            state: null === yp.nextState ? "" : Ip(yp.nextState),
            use: Ip(Dp ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var uv = cp(38736);
    const jv = [],
      kv = [
        [0, -1, 0]
      ];

    function mv(pp) {
      const ip = [pp];
      for (let cp = 1; cp <= 4; cp++) cp > 1 && ip.push(`${pp}|meta|rot${cp}`), ip.push(`${pp}|meta|rot${cp}|Running`);
      return ip
    }

    function Rv(pp, ip) {
      return [Math.floor(pp[0] / ip), Math.floor(pp[1] / ip), Math.floor(pp[2] / ip)]
    }

    function qv(pp, ip, cp) {
      return `${pp},${ip},${cp}`
    }

    function Mv(pp) {
      const ip = pp.split("|")[0];
      if (!Pc(ip)) return jv;
      const cp = Bi[ip];
      if (oc(cp)) return kv;
      const Op = Rw(pp);
      return Ic(cp) ? [
        [-Op[0], -Op[1], -Op[2]]
      ] : qo(cp) ? function(pp, ip) {
        const cp = pp[0] - 2 * ip[0],
          Op = pp[2] - 2 * ip[2],
          op = [];
        for (let Ip = -1; Ip <= 1; Ip++)
          for (let ip = -1; ip <= 1; ip++) op.push([cp + Ip, pp[1], Op + ip]);
        return op
      }([0, 0, 0], Op) : jv
    }
    const Cv = [.5, .5, .5],
      Ev = [.2, .8, .3],
      Xv = [.45, 1, .5];
    class lv {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(pp) {
        this.indexed = !0;
        for (const ip of Ci)
          for (const cp of mv(ip)) {
            const ip = pp.blockNameToBlockId(cp, !0),
              Op = Mv(cp);
            null !== ip && Op.length > 0 && (this.offsetsList.push(Op), this.offsetsIndexById[ip] = this.offsetsList.length)
          }
      }
      onAfterRender(pp, ip) {
        this.indexed || this.index(pp);
        const cp = performance.now();
        if (cp - this.lastCheckMs < 100) return;
        this.lastCheckMs = cp, this.checks++;
        const Op = vy.g.Qy,
          [op, Ip, Sp] = Rv(ip, Op);
        let xp = !1;
        const Lp = [];
        let Yp = 0;
        for (let Dp = op - 2; Dp <= op + 2; Dp++)
          for (let ip = Ip - 1; ip <= Ip + 1; ip++)
            for (let op = Sp - 2; op <= Sp + 2; op++) {
              const Ip = Yp++,
                Sp = qv(Dp, ip, op),
                Ap = pp.getChunkVersion(Dp, ip, op);
              let Pp = this.chunks.get(Sp);
              null !== Ap ? (Pp || (Pp = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(Sp, Pp)), Pp.seenAt = this.checks, Pp.checkedVersion !== Ap && (Pp.checkedVersion = Ap, xp = !0), Pp.scannedVersion !== Ap && cp - Pp.scannedAt >= 500 && Lp.push({
                slot: Ip,
                entry: Pp,
                origin: [Dp * Op, ip * Op, op * Op]
              })) : (xp ||= void 0 !== Pp, this.chunks.delete(Sp))
            }
        this.scanDue(pp, Lp) && (xp = !0);
        for (const [Dp, Ap] of this.chunks) Ap.seenAt !== this.checks && (xp ||= Ap.machines.length > 0, this.chunks.delete(Dp));
        for (const Dp of this.chunks.values())
          for (const [ip, cp, Op] of Dp.cellChunks)(Math.abs(ip - op) > 2 || Math.abs(cp - Ip) > 1 || Math.abs(Op - Sp) > 2) && this.watchCellChunk(pp, ip, cp, Op) && (xp = !0);
        for (const [Dp, Ap] of this.cellChunks) Ap.seenAt !== this.checks && this.cellChunks.delete(Dp);
        xp && this.refresh(pp)
      }
      dispose(pp) {
        this.clearMeshes(pp), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(pp, ip) {
        const cp = Math.max(ip.findIndex((pp => {
          let {
            slot: ip
          } = pp;
          return ip >= this.scanFrom
        })), 0);
        let Op = 96;
        for (let op = 0; op < ip.length; op++) {
          const {
            slot: Ip,
            entry: Sp,
            origin: xp
          } = ip[(cp + op) % ip.length];
          if (Op -= this.scan(pp, Sp, xp), Op <= 0) {
            this.scanFrom = Ip + 1;
            break
          }
        }
        return ip.length > 0
      }
      scan(pp, ip, cp) {
        let [Op, op, Ip] = cp;
        const Sp = vy.g.Qy,
          xp = this.hits;
        xp.length = 0;
        const Lp = pp.scanBlocks(Op, op, Ip, Op + Sp, op + Sp, Ip + Sp, this.offsetsIndexById, xp),
          Yp = [];
        for (let Dp = 0; Dp < xp.length; Dp += 4) Yp.push({
          pos: [xp[Dp], xp[Dp + 1], xp[Dp + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[xp[Dp + 3]] - 1]
        });
        return ip.machines = Yp, ip.cellChunks = function(pp, ip) {
          const cp = new Set,
            Op = [];
          for (const {
              pos: op,
              offsets: Ip
            }
            of pp)
            for (const [pp, Sp, xp] of Ip) {
              const Ip = Rv([op[0] + pp, op[1] + Sp, op[2] + xp], ip),
                Lp = qv(...Ip);
              cp.has(Lp) || (cp.add(Lp), Op.push(Ip))
            }
          return Op
        }(Yp, Sp), ip.scannedVersion = ip.checkedVersion, ip.scannedAt = performance.now(), Math.max(Lp, 1)
      }
      watchCellChunk(pp, ip, cp, Op) {
        const op = qv(ip, cp, Op),
          Ip = pp.getChunkVersion(ip, cp, Op),
          Sp = this.cellChunks.get(op);
        return null === Ip ? this.cellChunks.delete(op) : (null === Sp || void 0 === Sp ? void 0 : Sp.version) === Ip ? (Sp.seenAt = this.checks, !1) : (this.cellChunks.set(op, {
          version: Ip,
          seenAt: this.checks
        }), !0)
      }
      refresh(pp) {
        const ip = function(pp, ip) {
            const cp = new Set,
              Op = [];
            for (const {
                pos: op,
                offsets: Ip
              }
              of pp)
              for (const [pp, Sp, xp] of Ip) {
                const Ip = op[0] + pp,
                  Lp = op[1] + Sp,
                  Yp = op[2] + xp,
                  Dp = `${Ip},${Lp},${Yp}`;
                cp.has(Dp) || (cp.add(Dp), ip(Ip, Lp, Yp) && Op.push([Ip, Lp, Yp]))
              }
            return Op
          }([...this.chunks.values()].flatMap((pp => pp.machines)), ((ip, cp, Op) => pp.isBlockInLoadedChunk(ip, cp, Op) && 0 === pp.getBlockId(ip, cp, Op))),
          cp = ip.join(";");
        cp !== this.shownKey && (this.shownKey = cp, this.clearMeshes(pp), ip.length > 0 && (this.meshes = [this.build(pp, ip, !1), this.build(pp, ip, !0)]))
      }
      build(pp, ip, cp) {
        const Op = ip[0],
          op = [],
          Ip = [];
        for (const [Sp, xp, Lp] of ip)(0, uv.b)(op, Ip, [Sp - Op[0] + .5, xp - Op[1] + .5, Lp - Op[2] + .5], Cv, cp);
        return pp.createGameMesh({
          positions: op,
          indices: Ip
        }, {
          rgb: cp ? Xv : Ev,
          alpha: .4
        }, Op)
      }
      clearMeshes(pp) {
        for (const ip of this.meshes) pp.disposeGameMesh(ip);
        this.meshes = []
      }
    }
    const Qv = 1 / .6,
      Jv = 200,
      Bv = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Nv = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Tv = 2 * Math.PI / 3;
    class fv {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bv;
        this.style = pp, this.particles = null, this.points = new Float32Array(800), this.budget = Jv, this.lastMs = 0
      }
      static blade() {
        return new fv(Nv)
      }
      ku(pp, ip) {
        const cp = Math.min(ip.arcStruck, ip.arcPoints.length);
        this.draw(pp, [ip.arcFrom, ...ip.arcPoints], ip.arcPoints.slice(0, cp))
      }
      onBlade(pp, ip) {
        const [cp, Op, op] = ip.bladeCentre, [Ip, Sp] = ip.bladeFacing, xp = cp - 1.5 * Ip, Lp = op - 1.5 * Sp, Yp = Math.atan2(Sp, Ip), Dp = [];
        for (let Ap = 0; Ap <= 8; Ap++) {
          const pp = Yp - Tv / 2 + Tv * Ap / 8;
          Dp.push([xp + 2.5 * Math.cos(pp), Op, Lp + 2.5 * Math.sin(pp)])
        }
        this.draw(pp, Dp, ip.bladeStruck)
      }
      dispose() {
        var pp;
        null === (pp = this.particles) || void 0 === pp || pp.stop(), this.particles = null
      }
      draw(pp, ip, cp) {
        if (!pp.particlesEnabled() || ip.length < 2) return;
        const Op = performance.now();
        this.budget = Math.min(Jv, this.budget + (Op - this.lastMs) / 1e3 * Jv), this.lastMs = Op;
        const op = [];
        let Ip = 0,
          Sp = ip[0];
        for (const vp of ip.slice(1)) {
          const pp = Math.min(48, Math.round(Math.hypot(vp[0] - Sp[0], vp[1] - Sp[1], vp[2] - Sp[2]) * this.style.perBlock));
          op.push([Sp, vp, pp]), Ip += pp, Sp = vp
        }
        const xp = cp.length;
        Ip += 10 * xp;
        const Lp = Ip > this.budget ? this.budget / Ip : 1;
        if (0 === Ip || Lp * Ip < 1) return;
        const Yp = ip[0],
          [Dp, Ap, Pp] = Yp,
          Wp = this.points;
        let yp = 0;
        const Up = (pp, ip, cp, Op) => {
          const op = 4 * yp;
          Wp[op] = pp - Dp, Wp[op + 1] = ip - Ap, Wp[op + 2] = cp - Pp, Wp[op + 3] = Op, yp++
        };
        op.forEach(((pp, ip) => {
          let [cp, Op, op] = pp;
          const Ip = Math.min(Math.floor(op * Lp), Jv - yp),
            Sp = Math.hypot(Op[0] - cp[0], Op[1] - cp[1], Op[2] - cp[2]),
            xp = 0 === ip && Sp > 0 ? Math.min(.5, .1 * Sp) / Sp : 0;
          for (let Lp = 0; Lp < Ip; Lp++) {
            const pp = xp + (Lp + .5) / Ip * (1 - xp);
            Up(cp[0] + (Op[0] - cp[0]) * pp, cp[1] + (Op[1] - cp[1]) * pp, cp[2] + (Op[2] - cp[2]) * pp, .15)
          }
        }));
        const wp = Math.floor(10 * Lp);
        for (let vp = 0; vp < xp; vp++) {
          const [pp, ip, Op] = cp[vp];
          for (let cp = 0; cp < wp && yp < Jv; cp++) Up(pp, ip, Op, 2.5)
        }
        this.budget -= yp, this.particles ??= pp.createParticles(function(pp) {
          const [ip, cp] = pp.colours;
          return {
            texture: "square_particle",
            TA: 400,
            minLifeTime: pp.life[0] / Qv,
            maxLifeTime: pp.life[1] / Qv,
            minSize: pp.size[0],
            maxSize: pp.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [ip[0], ip[1], ip[2], 1],
              maxColor: [cp[0], cp[1], cp[2], 1]
            }, {
              timeFraction: 1,
              minColor: [ip[0], ip[1], ip[2], 0],
              maxColor: [cp[0], cp[1], cp[2], 0]
            }],
            blendMode: fx.g.Add
          }
        }(this.style), {
          pos: Yp
        }), this.particles.emitPoints(Yp, Wp, yp)
      }
    }
    const bv = new Set(["Sky Spring"]);

    function hv(pp, ip, cp) {
      const Op = pp.split("|")[0];
      return "Air" !== ip || cp || ! function(pp) {
        const ip = pp.split("|")[0];
        return void 0 !== Yc[ip] || bv.has(ip)
      }(Op) ? null : pp
    }
    class av {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(pp) {
        const ip = pp - this.lastTapAt >= 300;
        return this.lastTapAt = pp, ip
      }
    }
    class nv {
      constructor() {
        this.presses = new av, this.predicted = null
      }
      tap(pp, ip) {
        const cp = this.presses.isNewPress(ip);
        return cp && (this.predicted = {
          station: pp,
          at: ip
        }), cp
      }
      consumeServerOpen(pp, ip) {
        const cp = this.predicted;
        return !(null === cp || cp.station !== pp || ip - cp.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Fv {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(pp, ip) {
        return pp && (this.thrustAt = ip), ip - this.thrustAt < 200
      }
    }
    const gv = [.1, .05, .1],
      Gv = {
        texture: "effect_5",
        TA: Math.ceil(48),
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
        blendMode: fx.g.OneOne
      };
    class rv {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Fv, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      ku(pp, ip) {
        for (const [cp, Op] of ip.baf2JetFlames) pp.isLocalPlayer(cp) || (Op ? this.lit.add(cp) : this.lit.delete(cp))
      }
      onAfterRender(pp, ip) {
        const cp = performance.now(),
          Op = this.hold.lit(this.selfThrusting(pp, ip), cp);
        for (const [op, Ip] of this.flames)(op === ip ? Op : this.lit.has(op)) || this.setEmitting(Ip, !1), op === ip || pp.getPositionView(op) ? !Ip.emitting && cp - Ip.offAt >= 1300 && (Ip.particles.stop(), this.flames.delete(op)) : (Ip.particles.dispose(), this.flames.delete(op), this.lit.delete(op));
        Op && this.draw(pp, ip, ip);
        for (const op of this.lit) this.draw(pp, ip, op)
      }
      dispose() {
        for (const pp of this.flames.values()) pp.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(pp, ip) {
        var cp;
        const Op = pp.getLocalPlayerMovement();
        return !!Op && (null !== (op = {
          option: null !== (cp = pp.getClientOption(ip, "jumpHoldThrust")) && void 0 !== cp ? cp : null,
          jumping: Op.jumpHeld,
          onGround: Op.onGround,
          alive: pp.isAlive(ip)
        }).option && op.option.maxUpSpeed >= 0 && op.jumping && !op.onGround && op.alive);
        var op
      }
      draw(pp, ip, cp) {
        var Op, op;
        const Ip = this.pos;
        if (!pp.readDrawnPosition(cp, Ip)) return;
        const Sp = pp.readDrawnPosition(ip, this.camera) ? this.camera : Ip;
        if (!((Ip[0] - Sp[0]) ** 2 + (Ip[1] - Sp[1]) ** 2 + (Ip[2] - Sp[2]) ** 2 < 1600) || !pp.particlesEnabled()) {
          const pp = this.flames.get(cp);
          return void(pp && this.setEmitting(pp, !1))
        }
        const xp = null !== (Op = this.flames.get(cp)) && void 0 !== Op ? Op : this.create(pp, cp, Ip),
          Lp = null !== (op = pp.getDrawnHeading(cp)) && void 0 !== op ? op : 0,
          Yp = this.at;
        Yp[0] = Ip[0] - .35 * Math.sin(Lp), Yp[1] = Ip[1] + 1.05, Yp[2] = Ip[2] - .35 * Math.cos(Lp), xp.particles.moveTo(Yp), this.setEmitting(xp, !0)
      }
      setEmitting(pp, ip) {
        pp.emitting !== ip && (pp.emitting = ip, ip || (pp.offAt = performance.now()), pp.particles.setEmitRate(ip ? 60 : 0))
      }
      create(pp, ip, cp) {
        const Op = {
          particles: pp.createParticles(Gv, {
            pos: cp,
            half: gv
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(ip, Op), Op
      }
    }

    function Zv(pp) {
      return "Reactor Frame" === SO("reactor", pp)
    }

    function zv(pp) {
      return hc("reactor", pp) && !Zv(pp) && (pp.startsWith("Reactor Glass") || pp.startsWith("Reactor Port"))
    }
    const sv = "baf2Goal";
    class Kv {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [To.m.subscribe("setDirectionArrow", (pp => {
          let {
            id: ip,
            position: cp
          } = pp;
          ip === sv && (this.goal = cp, this.checkedAt = -1 / 0)
        })), To.m.subscribe("clearDirectionArrow", (pp => {
          let {
            id: ip
          } = pp;
          null !== ip && ip !== sv || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const pp of this.subs) To.m.unsubscribe(pp)
      }
      sideOf(pp, ip, cp, Op) {
        const op = this.goal;
        if (!op) return 0;
        cp - this.checkedAt > 1e3 && (this.checkedAt = cp, this.open = function(pp, ip) {
          const [cp, Op, op] = pp.map(Math.floor);
          if (!zv(ip(cp, Op, op))) return null;
          for (const [Ip, Sp] of [
              [1, 0],
              [0, 1]
            ]) {
            const pp = ip(cp + Ip, Op, op + Sp),
              xp = ip(cp - Ip, Op, op - Sp);
            if (Zv(xp) && zv(pp)) return [Ip, 0, Sp];
            if (Zv(pp) && zv(xp)) return [0 - Ip, 0, 0 - Sp]
          }
          return null
        }(op, ((ip, cp, Op) => pp.blockIdToBlockName(pp.getBlockId(ip, cp, Op)))));
        const Ip = this.open;
        if (!Ip) return 0;
        const Sp = Op(op);
        if (Math.abs(Sp.x - ip.x) > .05 || Math.abs(Sp.y - ip.y) > .05) return 0;
        const xp = Op([op[0] + Ip[0], op[1], op[2] + Ip[2]]).x - Sp.x;
        return Math.abs(xp) < .3 ? 0 : xp > 0 ? 1 : -1
      }
    }
    class Vv {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new Kv, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.Ry = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.mH = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((pp => {
          for (const ip of pp) ip.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(ip.target, ip.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.Ry || this.clear()
        }, window.addEventListener("resize", this.mH)
      }
      onAfterRender(pp, ip) {
        var cp;
        this.api = pp, this.project = null !== (cp = null === ip || void 0 === ip ? void 0 : ip.projectWorldPosToScreenPos) && void 0 !== cp ? cp : null, this.queued || this.Ry || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.Ry = !0;
        for (const pp of this.moved.keys()) pp.style.transform = "";
        this.moved.clear();
        for (const pp of this.sideLabels.keys()) pp.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.mH)
      }
      clear() {
        for (const Ip of this.moved.keys()) Ip.isConnected || this.moved.delete(Ip);
        for (const Ip of this.sideLabels.keys()) Ip.isConnected || this.sideLabels.delete(Ip);
        if (0 === this.arrows.length) return;
        const pp = performance.now(),
          ip = pp - this.refreshedAt > 1e3;
        ip && (this.refreshedAt = pp, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const cp = this.trackerBox(),
          Op = this.barsBox(),
          op = this.toastBox(ip);
        (cp || Op || op) && ip && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let Ip = 0; Ip < this.arrows.length; Ip++) {
          const ip = this.arrows[Ip];
          this.labelOffsets.set(ip, this.runLabelAside(ip, pp));
          const Sp = (cp ? this.shiftLeftOf(ip, cp) : 0) || this.shiftOnScreen(ip),
            xp = Math.min(Op ? this.liftAbove(ip, Op, Sp) : 0, op ? this.liftAbove(ip, op, Sp) : 0),
            Lp = this.moved.get(ip);
          if (0 !== Sp || 0 !== xp) {
            const pp = 0 === xp ? `translateX(${Sp}px)` : `translate(${Sp}px, ${xp}px)`;
            Lp !== pp && (ip.style.transform = pp, this.moved.set(ip, pp))
          } else void 0 !== Lp && (ip.style.transform = "", this.moved.delete(ip))
        }
      }
      trackerBox() {
        var pp, ip;
        const cp = null !== (pp = this.tracker) && void 0 !== pp && pp.isConnected ? this.tracker : null !== (ip = this.trackers[0]) && void 0 !== ip ? ip : null;
        if (cp !== this.tracker && this.watch(cp), this.boxStale && cp) {
          var Op, op, Ip;
          this.boxStale = !1;
          const pp = cp.closest(".NoRoom") ? null : cp.getBoundingClientRect(),
            ip = pp && pp.width > 0 ? null === (Op = this.hud) || void 0 === Op ? void 0 : Op.getBoundingClientRect() : void 0,
            Sp = pp && ip ? Math.max(pp.top, ip.top) : null !== (op = null === pp || void 0 === pp ? void 0 : pp.top) && void 0 !== op ? op : 0,
            xp = pp && ip ? Math.min(pp.bottom, ip.bottom) : null !== (Ip = null === pp || void 0 === pp ? void 0 : pp.bottom) && void 0 !== Ip ? Ip : 0;
          this.box = pp && pp.width > 0 && xp > Sp ? {
            left: pp.left,
            top: Sp,
            right: pp.right,
            bottom: xp
          } : null
        }
        return cp ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var pp;
          this.barsStale = !1;
          const ip = null === (pp = this.statBars[0]) || void 0 === pp ? void 0 : pp.getBoundingClientRect();
          this.bars = ip && ip.width > 0 && ip.height > 0 ? {
            left: ip.left,
            top: ip.top,
            right: ip.right,
            bottom: ip.bottom
          } : null
        }
        return this.bars
      }
      toastBox(pp) {
        var ip;
        const cp = null !== (ip = this.toasts[0]) && void 0 !== ip ? ip : null;
        if (cp !== this.toastEl || pp && cp) {
          this.toastEl = cp;
          const pp = null === cp || void 0 === cp ? void 0 : cp.getBoundingClientRect();
          this.toast = pp && pp.width > 0 && pp.height > 0 ? {
            left: pp.left,
            top: pp.top,
            right: pp.right,
            bottom: pp.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(pp, ip, cp) {
        var Op;
        const op = this.anchorOf(pp);
        if (!op) return 0;
        const Ip = op.x + cp + (null !== (Op = this.labelOffsets.get(pp)) && void 0 !== Op ? Op : 0),
          {
            halfWidth: Sp,
            labelled: xp
          } = this.extentOf(pp),
          Lp = op.y + this.em * (xp ? 6.2 : 3);
        return Lp < ip.top - 6 || Ip + Sp < ip.left - 6 || Ip - Sp > ip.right + 6 ? 0 : ip.top - 6 - Lp
      }
      watch(pp) {
        var ip, cp;
        this.tracker && this.sizes.unobserve(this.tracker), null === (ip = this.hud) || void 0 === ip || ip.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = pp, this.hud = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.closest(".Baf2QuestHud")) && void 0 !== cp ? cp : null, this.box = null, this.boxStale = !0, pp && this.sizes.observe(pp), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(pp, ip) {
        var cp;
        const Op = this.anchorOf(pp);
        if (!Op) return 0;
        const {
          y: op
        } = Op, Ip = Op.x + (null !== (cp = this.labelOffsets.get(pp)) && void 0 !== cp ? cp : 0), Sp = this.em, {
          halfWidth: xp,
          labelled: Lp
        } = this.extentOf(pp), Yp = op - Sp, Dp = Ip + xp;
        return op + Sp * (Lp ? 6.2 : 3) < ip.top || Yp > ip.bottom || Dp < ip.left - 6 || Ip - xp > ip.right ? 0 : Math.max(ip.left - 6 - Dp, 6 - (Ip - xp))
      }
      shiftOnScreen(pp) {
        var ip;
        const cp = this.anchorOf(pp);
        if (!cp) return 0;
        const {
          halfWidth: Op
        } = this.extentOf(pp), op = cp.x + (null !== (ip = this.labelOffsets.get(pp)) && void 0 !== ip ? ip : 0), Ip = op + Op - (this.innerWidth - 6);
        return Ip > 0 ? -Ip : Math.max(0, 6 - (op - Op))
      }
      runLabelAside(pp, ip) {
        var cp;
        let Op = null;
        for (let Sp = 0; Sp < pp.children.length; Sp++) pp.children[Sp].classList.contains("DirectionArrowLabel") && (Op = pp.children[Sp]);
        if (!Op) return 0;
        const op = pp.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(pp) : null,
          Ip = (op && this.api ? this.side.sideOf(this.api, {
            x: op.x / this.innerWidth * 100,
            y: op.y / this.innerHeight * 100
          }, ip, this.project) : 0) * this.halfWidthOf(Op);
        return Ip !== (null !== (cp = this.sideLabels.get(Op)) && void 0 !== cp ? cp : 0) && (Op.style.transform = 0 === Ip ? "" : `translateX(-50%) translateX(${Ip}px)`, 0 === Ip ? this.sideLabels.delete(Op) : this.sideLabels.set(Op, Ip)), Ip
      }
      extentOf(pp) {
        let ip = this.em,
          cp = !1;
        for (let Op = 0; Op < pp.children.length; Op++) {
          const op = pp.children[Op],
            Ip = op.classList.contains("DirectionArrowLabel");
          cp ||= Ip, (Ip || op.classList.contains("DirectionArrowDistance")) && (ip = Math.max(ip, this.halfWidthOf(op)))
        }
        return {
          halfWidth: ip,
          labelled: cp
        }
      }
      halfWidthOf(pp) {
        let ip = this.halfWidths.get(pp);
        return void 0 === ip && (ip = pp.offsetWidth / 2, this.halfWidths.set(pp, ip), this.sizes.observe(pp), this.labels.add(pp)), ip
      }
      forgetGoneLabels() {
        for (const pp of this.labels) pp.isConnected || (this.sizes.unobserve(pp), this.halfWidths.delete(pp), this.labels.delete(pp))
      }
      anchorOf(pp) {
        const ip = pp.style.translate,
          cp = this.anchors.get(pp);
        if (cp && cp.translate === ip && cp.innerWidth === this.innerWidth && cp.innerHeight === this.innerHeight) return cp;
        const Op = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(ip);
        if (!Op) return null;
        const op = {
          translate: ip,
          x: parseFloat(Op[1]) / 100 * this.innerWidth,
          y: parseFloat(Op[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(pp, op), op
      }
    }
    const pt = "Baf2ArrowText";

    function it(pp, ip) {
      const cp = pp.rows.find((pp => pp.current));
      return Qp(pp.tutorial) && null !== cp && void 0 !== cp && cp.item && Zo(cp) && Cp(cp.item).includes(ip) ? cp.item : null
    }
    const ct = new class {
      constructor(pp) {
        this.select = pp, this.picks = new Map
      }
      open(pp, ip, cp) {
        const Op = it(ip, pp);
        null !== Op && this.SW(pp, Op, cp)
      }
      follow(pp, ip) {
        if (xp())
          for (const [cp, {
              item: Op,
              had: op
            }] of this.picks) {
            const Ip = it(pp, cp);
            Ip !== Op && (null !== Ip && ip(Op) > op ? this.SW(cp, Ip, ip) : this.picks.delete(cp))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      SW(pp, ip, cp) {
        this.picks.set(pp, {
          item: ip,
          had: cp(ip)
        }), this.select(pp, ip)
      }
    }(fo.q);

    function Ot(pp) {
      return ip => {
        let cp = 0;
        for (const Op of pp.getInventoryItems())(null === Op || void 0 === Op ? void 0 : Op.name) === ip && (cp += null === Op.amount ? 1 : Math.max(Op.amount, 0));
        return cp
      }
    }

    function ot(pp, ip, cp, Op) {
      pp.getClientOption(ip, "canCraft") && "inventory" !== jo.c.get("openInGameMenuName") && (ct.open(cp, Op.get(), Ot(pp)), To.m.GA("toggleMenu", `inventory|${cp}`))
    }
    let It = null,
      St = !1;

    function xt(pp) {
      const ip = MI();
      pp === It && ip === St || (It = pp, St = ip, (0, fo.u)(function(pp, ip) {
        const cp = new Map;
        for (let Op = pp + 1; Op <= op.length; Op++) {
          const op = zI(Op, pp, ip);
          if (op)
            for (const ip of vp(Op).unlocks) cp.set(ip, {
              ...op,
              stepsAway: Op - pp
            })
        }
        return cp
      }(pp, ip)))
    }

    function Lt() {
      return pp = () => {
        null !== It && xt(It)
      }, (0, RI.i)(qI, pp);
      var pp
    }

    function Yt() {
      return (0, fo.C)(ZI(Object.keys(Mp), nI)), () => {
        (0, fo.C)([])
      }
    }

    function Dt(pp, ip, cp) {
      var Op, op;
      const Ip = pp.getTargetedBlock();
      if (!Ip || ! function(pp, ip, cp) {
          if ("Chest" !== ip) return !1;
          const Op = pp.split("|")[0];
          if (!Pc(Op) || 0 === Bi[Op].outputSlots.length) return !1;
          const op = Rw(pp);
          return cp[0] === op[0] && cp[1] === op[1] && cp[2] === op[2]
        }(cp, null === (Op = pp.Acp(ip)) || void 0 === Op ? void 0 : Op.name, Ip.normal)) return !1;
      const [Sp, xp, Lp] = Ip.nY, Yp = pp.getBlockId(Sp, xp, Lp);
      return 0 === Yp || !0 === (null === (op = Xp.e[Yp]) || void 0 === op ? void 0 : op.canBePlacedOver)
    }
    var At = cp(36948);
    const Pt = new Set(tc.b);
    class Wt {
      constructor(pp) {
        this.toasts = pp, this.lastAt = -1 / 0
      }
      onAltAction(pp, ip, cp) {
        const Op = pp.getTargetedBlock();
        if (!Op || function(pp) {
            const ip = pp.split("|")[0];
            return Pc(ip) || null !== RO(ip) || Rp(ip) || tc.b.includes(ip)
          }(cp) && !Pt.has(cp.split("|")[0])) return;
        const op = pp.Acp(ip);
        if (!op || !Pt.has(op.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const Ip = op.typeObj.id,
          [Sp, xp, Lp] = Op.nY,
          Yp = pp.getBlockId(Sp, xp, Lp),
          Dp = Xp.e[Yp];
        (0 === Yp || null !== Dp && void 0 !== Dp && Dp.tW || null !== Dp && void 0 !== Dp && Dp.canBePlacedOver) && pp.isSolidToPlayerBlockId(Ip) && pp.canModifyBlockAt(Sp, xp, Lp) && pp.eip(Sp, xp, Lp, Ip) && !pp.eip(Sp, xp, Lp, Ip, ip) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, Jp.Nd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, Jp.N.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class yt {
      constructor(pp) {
        this.show = pp, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(pp, ip, cp) {
        var Op;
        if (!ip) return this.started = null, void this.gatedThisHold.clear();
        if (!pp) return void(this.started = null);
        const op = `${pp.x},${pp.y},${pp.z},${pp.sx}`;
        if (op === this.started) return;
        this.started = op;
        const Ip = bO(pp.y) ? Lv(pp.block, pp.sx, pp.level) : null;
        if (null === Ip || this.gatedThisHold.has(op)) return;
        this.gatedThisHold.add(op);
        const Sp = pp.block.split("|")[0];
        cp - (null !== (Op = this.hintedAt.get(Sp)) && void 0 !== Op ? Op : -1 / 0) < 5e3 || (this.hintedAt.set(Sp, cp), this.show({
          baf2ToastText: Yv(Ip, pp.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var Ut = cp(44);

    function wt(pp, ip) {
      const cp = [...pp.baf2CoreBankPaused];
      for (const [op] of pp.baf2CoreBanked) cp.push(op);
      for (const Sp of op) {
        for (const {
            item: pp
          }
          of Sp.cost) cp.push(pp);
        for (const pp of Sp.newDeposits) cp.push(pp.block);
        for (const pp of Sp.unlocks) cp.push(pp, Ep(pp));
        Sp.reward && cp.push(Sp.reward);
        for (const {
            item: pp
          }
          of null !== (Op = null === (Ip = Sp.charge) || void 0 === Ip ? void 0 : Ip.items) && void 0 !== Op ? Op : []) {
          var Op, Ip;
          cp.push(pp)
        }
      }
      return {
        message: pp,
        itemNames: ip([...new Set(cp)])
      }
    }
    const vt = "baf2MultiblockGuide";
    const tt = new Map;
    const Ht = function(pp, ip, cp, op) {
      let {
        localPlayerId: Ip
      } = op;
      const Sp = new dx,
        xp = new LW,
        Yp = new UW,
        Dp = new WW(Yp),
        Ap = (pp, ip) => {
          ip ? Dp.observe(pp) : Dp.unobserve(pp)
        },
        Pp = new PW,
        Wp = new vW(Ap),
        yp = pp => Wp.covers(pp),
        Up = new NW;
      let wp;
      const vp = new nS((pp => {
          wp.sendCommand(pp)
        })),
        tp = () => {
          vp.send("baf2questbook")
        },
        Hp = pp => function(pp, ip, cp) {
          const Op = {};
          for (const op of cp) {
            let cp = tt.get(op);
            void 0 === cp && (cp = pp.getItemStat(ip, op, "displayName"), tt.set(op, cp)), Op[op] = cp
          }
          return Op
        }(wp, Ip, pp),
        dp = new no(tp),
        ep = new ZW((() => jo.c.get("loadingOverlayVisible"))),
        jp = new CD(vp, dp, ep),
        kp = new py,
        mp = new Wt(ep),
        qp = new yt((pp => {
          ep.show(pp, pp.baf2ToastMs)
        })),
        Mp = new Yy(Ap),
        Cp = new Bw(Mp),
        Ep = new MS,
        lp = new Iv,
        Qp = new Sx,
        Np = new wy({
          read: () => !1 !== Ut.h.getItem(vt),
          write: pp => {
            Ut.h.setItem(vt, pp)
          }
        }),
        Tp = new ny(Np),
        fp = new Gy(Np),
        bp = new yU(Np, (pp => function(pp, ip) {
          const cp = OL(ip.w, ip.h, ip.d),
            Op = new Uint8Array(cp);
          for (let op = 0; op < cp; op++) {
            const cp = Ty(pp, iO(ip, IO(ip, op)));
            Op[op] = null === cp ? 0 : Vx(cp)
          }
          return Op
        }(wp, pp)), IU(vp)),
        hp = new UU(Np, IU(vp)),
        ap = new PU,
        gp = (pp, ip) => {
          let [cp, Op, op] = pp;
          ap.answered(ip) || ep.show({
            baf2ToastText: [(0, Jp.Nd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: cp,
                h: Op,
                d: op
              }
            }, Jp.N.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      bp.onSizeNotTaken(gp), hp.onSizeNotTaken(gp);
      const Gp = new HU,
        rp = new VU(Np),
        zp = new iw,
        sp = new Ww(zp),
        Kp = new kw,
        ii = new Nw,
        ci = new rw(ii),
        Oi = new ov(ii),
        oi = ii.lookSource(),
        Ii = new Hv({
          handles: pp => oi.handles(pp) || pp === Bp,
          line: (pp, ip) => pp === Bp ? function(pp, ip, cp) {
            var Op;
            const op = Fp(null === (Op = ip.at(cp)) || void 0 === Op ? void 0 : Op.item);
            return null === op ? {
              key: `${wv}lookFarmEmpty`
            } : {
              key: pp.blockIdToBlockName(pp.getBlockId(cp[0], cp[1], cp[2])).endsWith("|Running") ? `${wv}lookFarmRunning` : `${wv}lookFarmWaiting`,
              keys: {
                mob: np(op)
              }
            }
          }(wp, Mp, ip) : oi.line(pp, ip),
          version: () => oi.version() + Mp.version()
        }, (pp => Zy(Np.all(), pp, (pp => Ty(wp, pp)))), (() => dp.get().tier)),
        Si = new NU,
        xi = new lv,
        Li = new fv,
        Yi = fv.blade(),
        Di = new rv,
        Ai = new Oy,
        Pi = new Vv,
        yi = new nv,
        Ui = new av;
      let wi = -1 / 0,
        vi = 0,
        ti = -1 / 0,
        Hi = -1 / 0;
      const di = () => {
          vp.send("baf2islandsclose"), Hi = Date.now()
        },
        ei = [];

      function ui(pp) {
        var ip, cp, Op, op, Ip, Sp, Lp;
        "core" === (null === (ip = xp.get()) || void 0 === ip ? void 0 : ip.kind) && "core" !== (null === pp || void 0 === pp ? void 0 : pp.kind) && vp.send("baf2coreclose"), "power" === (null === (cp = xp.get()) || void 0 === cp ? void 0 : cp.kind) && "power" !== (null === pp || void 0 === pp ? void 0 : pp.kind) && vp.send("baf2powerclose"), "water" === (null === (Op = xp.get()) || void 0 === Op ? void 0 : Op.kind) && "water" !== (null === pp || void 0 === pp ? void 0 : pp.kind) && vp.send(Vp.p), "terminal" === (null === (op = xp.get()) || void 0 === op ? void 0 : op.kind) && "terminal" !== (null === pp || void 0 === pp ? void 0 : pp.kind) && vp.send("baf2terminalclose"), "islands" === (null === (Ip = xp.get()) || void 0 === Ip ? void 0 : Ip.kind) && "islands" !== (null === pp || void 0 === pp ? void 0 : pp.kind) && di();
        const Yp = ii.getStatus();
        "collider" === (null === (Sp = xp.get()) || void 0 === Sp ? void 0 : Sp.kind) && "collider" !== (null === pp || void 0 === pp ? void 0 : pp.kind) && Yp && vp.send(bL(Yp, "close"));
        const Dp = pp => "reactor" === pp || "battery" === pp;
        if (Dp(null === (Lp = xp.get()) || void 0 === Lp ? void 0 : Lp.kind) && !Dp(null === pp || void 0 === pp ? void 0 : pp.kind)) {
          var Ap, Pp, Wp;
          const pp = "reactor" === (null === (Ap = xp.get()) || void 0 === Ap ? void 0 : Ap.kind) ? null === (Pp = bp.get()) || void 0 === Pp ? void 0 : Pp.status.baf2RxAt : null === (Wp = hp.get()) || void 0 === Wp ? void 0 : Wp.status.baf2BatAt;
          pp && vp.send(Wi(pp, "close"))
        }
        "quests" === (null === pp || void 0 === pp ? void 0 : pp.kind) && tp(), xp.set(pp), null === pp && kp.release()
      }

      function ji() {
        (0, uo.h)(), ui(null)
      }
      let ki = new Set,
        mi = !1;
      const Ri = {
        onCreate: pp => {
          wp = pp, wp.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const ip of Ci) {
            const pp = Bi[ip].inputSlots ? Bx(Sp) : lx(ip, Sp, Ep, vp);
            ei.push((0, Ho.g)(ip, pp))
          }
          ei.push((0, uo.A)((0, Op.createElement)(Op.Fragment, null, (0, Op.createElement)(dW, {
            controller: Wp
          }), (0, Op.createElement)(Py, {
            store: Mp
          }), (0, Op.createElement)(ev, {
            store: Ii
          }), (0, Op.createElement)(GW, {
            store: dp
          }), (0, Op.createElement)(KW, {
            store: ep
          }), (0, Op.createElement)(iy, {
            store: kp
          }), (0, Op.createElement)(Iy, {
            store: Ai
          }), (0, Op.createElement)(tU, {
            store: Gp
          }), (0, Op.createElement)(Ow, {
            store: zp
          })), {
            content: (0, Op.createElement)(YW, {
              commands: vp,
              store: xp,
              power: Ep,
              water: Qp,
              reactor: bp,
              battery: hp,
              collider: ii,
              terminal: lp,
              quests: dp,
              tutorial: jp,
              close: uo.l,
              leave: () => {
                kp.dropHeld(), (0, uo.h)()
              },
              askIslands: () => {
                Hi = -1 / 0, wi = Date.now(), vi = vp.send(Zp)
              },
              openSocial: () => {
                (0, uo.h)(), jo.c.set({
                  openEverythingMenuName: yc.n.SOCIAL
                })
              },
              showCore: pp => {
                ui({
                  kind: "core",
                  core: pp
                }), vp.send("baf2corereopen")
              }
            }),
            onClose: () => {
              ui(null)
            }
          })), ei.push((0, eo.w)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              ui({
                kind: "quests"
              }), (0, uo.t)()
            }
          })), ei.push(function(pp, ip) {
            let cp = null,
              Op = () => {};
            const op = ip => {
              var op;
              let {
                tutorial: Ip,
                tutorialKnown: Sp
              } = ip;
              (null === (op = cp) || void 0 === op ? void 0 : op.tutorial) === Ip && cp.tutorialKnown === Sp || (cp = {
                tutorial: Ip,
                tutorialKnown: Sp
              }, Op = (0, eo.w)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: qD[Ip],
                icon: {
                  kind: "icon",
                  name: RD[Ip]
                },
                iconOnly: !0,
                disabled: !Sp,
                className: "Baf2TutorialButton",
                onClick: () => {
                  pp.next()
                }
              }))
            };
            op(ip.get());
            const Ip = To.m.subscribe(bo, op);
            return () => {
              To.m.unsubscribe(Ip), Op()
            }
          }(jp, dp)), mi = !1, ei.push(Lt()), ei.push(Yt()), ei.push(function() {
            const pp = To.m.subscribe(bo, OI),
              ip = () => {
                if (cI) {
                  const pp = cI;
                  cI = null, (0, fo.y)(pp)
                }
              },
              cp = To.m.subscribe("toggleMenu", (pp => {
                "inventory" === (null === pp || void 0 === pp ? void 0 : pp.split("|")[0]) && ip()
              })),
              Op = To.m.subscribe("appManagerUpdated|openInGameMenuName", (pp => {
                "inventory" === pp && ip()
              }));
            return () => {
              To.m.unsubscribe(pp), To.m.unsubscribe(cp), To.m.unsubscribe(Op)
            }
          }()), ei.push(function(pp) {
            const ip = Ot(pp),
              cp = To.m.subscribe(bo, (pp => {
                ct.follow(pp, ip)
              }));
            return () => {
              To.m.unsubscribe(cp), ct.clear()
            }
          }(wp)), ei.push(function() {
            const pp = document.documentElement,
              ip = (0, fW.d)(".InvenBodyRight", [], (() => {
                const ip = document.querySelector(".InvenBodyRight");
                ip && pp.style.setProperty("--baf2-backpack-width", `${ip.offsetWidth}px`)
              }));
            return () => {
              ip(), pp.style.removeProperty("--baf2-backpack-width")
            }
          }()), ei.push(function() {
            const pp = document.documentElement;
            return pp.classList.add(pt), () => {
              pp.classList.remove(pt)
            }
          }()), ei.push((() => {
            Dp.dispose(), Yp.dispose()
          })), Up.start(wp), ei.push((() => {
            Up.dispose(), Di.dispose(), Cp.dispose()
          }))
        },
        onClose: () => {
          (0, fo.y)([]), cI = null, iI = new Set, It = null, (0, fo.u)(new Map), tt.clear();
          for (const pp of ei) pp();
          dp.dispose(), Ii.dispose(), ep.dispose(), kp.dispose(), Si.dispose(), xi.dispose(wp), Tp.dispose(wp), fp.dispose(wp), rp.dispose(wp), sp.dispose(wp), zp.dispose(), Kp.dispose(), Np.dispose(), bp.dispose(), hp.dispose(), Gp.dispose(), Li.dispose(), Yi.dispose(), Ai.dispose(), ci.dispose(wp), Oi.dispose(wp), ii.dispose(), Pi.dispose(), vp.clear()
        },
        onAfterRender: (pp, ip) => {
          var cp, Op, op;
          try {
            Up.onAfterRender(ip)
          } catch (Yp) {
            console.error("Error drawing BAF2 belt items", Yp)
          }
          try {
            Di.onAfterRender(wp, Ip)
          } catch (Yp) {
            console.error("Error drawing BAF2 jet flames", Yp)
          }
          mi || (mi = !0, vp.send("baf2clientready"));
          const Sp = wp.getPositionView(Ip);
          Wp.onAfterRender(ip, Sp, Pp), Mp.onAfterRender(ip, Sp, Pp, yp), Dp.run(Pp), Si.onAfterRender(wp, Sp), xi.onAfterRender(wp, Sp), Cp.onAfterRender(wp, Sp), Tp.onAfterRender(wp, Sp), fp.onAfterRender(wp, Ip, Sp), rp.onAfterRender(wp, Ip, Sp), sp.onAfterRender(wp, Ip), Kp.onAfterRender(wp, Sp), dp.onPlayerY(Sp[1]), ci.onAfterRender(wp), Oi.onAfterRender(wp, Ip, Sp);
          const Lp = wp.getTargetedBlock();
          Ii.onAfterRender(wp, Ip, null !== (cp = null === Lp || void 0 === Lp ? void 0 : Lp.KV) && void 0 !== cp ? cp : 0, null !== (Op = null === Lp || void 0 === Lp ? void 0 : Lp.position) && void 0 !== Op ? Op : null), Pi.onAfterRender(wp, ip), qp.onMining(function(pp, ip) {
            var cp, Op;
            const op = pp.getMiningBlock();
            if (!op) return null;
            const Ip = (0, Xp.d)(pp.getBlockId(op[0], op[1], op[2])),
              Sp = null !== (cp = null === (Op = pp.Acp(ip)) || void 0 === Op ? void 0 : Op.name) && void 0 !== cp ? cp : null,
              xp = pp.getItemStat(ip, Ip.split("|")[0], "harvestLevel");
            return {
              block: Ip,
              x: op[0],
              y: op[1],
              z: op[2],
              sx: Sp,
              level: xp
            }
          }(wp, Ip), wp.isMining(), performance.now()), "dropMap" === (null === (op = xp.get()) || void 0 === op ? void 0 : op.kind) && bO(Sp[1]) && ji()
        },
        onPlayerChangeBlock: (pp, ip, cp, Op, op, Sp) => {
          pp === Ip && function(pp, ip, cp, Op, op, Ip, Sp) {
            const xp = hv(Ip, Sp, pp.isPlayerCrouching(ip));
            if (null === xp) return;
            if (pp.qE(cp, Op, op, xp), !pp.getClientOption(ip, "canPickUpItems")) return;
            const Lp = Yc[xp.split("|")[0]];
            var Yp, Dp, Ap;
            void 0 !== Lp && (Yp = pp.getInventoryItems(), Dp = Lp, Ap = vy.g.maxItemStackSize, pp.getInventoryFreeSlotCount(ip) > 0 || Yp.some((pp => null !== pp && pp.name === Dp && null !== pp.amount && pp.amount < Ap))) && pp.playSound(ip, (0, At.d)("pickUp"), .5, 1)
          }(wp, pp, ip, cp, Op, op, Sp)
        },
        onPlayerAltAction: (pp, ip, cp, Op, op) => {
          var Sp, xp;
          if (!wp.getClientOption(Ip, "canPickUpItems")) return;
          const Lp = null !== (Sp = null === (xp = wp.Acp(Ip)) || void 0 === xp ? void 0 : xp.name) && void 0 !== Sp ? Sp : null,
            Yp = function(pp, ip) {
              const cp = pp.split("|")[0];
              return Rp(cp) && ip !== Do && "Sky Pack" !== ip ? cp : null
            }(op, Lp);
          if (null !== Yp) return void(yi.tap(Yp, performance.now()) && ot(wp, Ip, Yp, dp));
          if (!FO(Lp)) return;
          const Dp = Ui.isNewPress(performance.now()),
            Ap = function(pp, ip, cp) {
              return !FO(ip) || cp ? null : po(pp)
            }(op, Lp, wp.isPlayerCrouching(Ip));
          null !== Ap && Dp && wp.qE(ip, cp, Op, Ap)
        },
        onPlayerAttemptAltAction: (pp, ip, cp, Op, op) => {
          if (function(pp, ip, cp, Op, op) {
              "Workbench" === Op.split("|")[0] && pp.getClientOption(cp, "canCraft") && (ct.open("Workbench", op.get(), Ot(pp)), ip.send("baf2station Workbench"))
            }(wp, vp, Ip, op, dp), Dt(wp, Ip, op)) return "preventAction";
          mp.onAltAction(wp, Ip, op)
        },
        onReceivedMessageFromServer: (pp, ip) => {
          if ("baf2MachineStatus" === pp) {
            var cp, Op, op, Yp, Dp, Ap, Pp, yp, tp, jp, mp, Rp, qp, Cp, Xp, Jp;
            const pp = ip,
              Ip = pp.baf2MachineTaught;
            Sp.set(pp.baf2MachinePos, {
              status: pp.baf2MachineStatus,
              power: null !== (cp = pp.baf2MachinePower) && void 0 !== cp ? cp : null,
              opLeftMs: null !== (Op = pp.baf2MachineOpLeftMs) && void 0 !== Op ? Op : null,
              dug: pp.baf2MachineYield ? {
                item: pp.baf2MachineYield,
                name: Hp([pp.baf2MachineYield])[pp.baf2MachineYield]
              } : null,
              powerCap: null !== (op = pp.baf2MachinePowerCap) && void 0 !== op ? op : null,
              powerRates: null !== (Yp = pp.baf2MachinePowerRates) && void 0 !== Yp ? Yp : null,
              coupled: !0 === pp.baf2MachineCoupled,
              couplerLevel: null !== (Dp = pp.baf2MachineCoupler) && void 0 !== Dp ? Dp : 1,
              taught: Ip,
              taughtName: Ip ? Hp([Ip])[Ip] : null,
              tier: null !== (Ap = pp.baf2MachineTier) && void 0 !== Ap ? Ap : null,
              input: null !== (Pp = pp.baf2MachineInput) && void 0 !== Pp ? Pp : null,
              inertCoupler: null !== (yp = pp.baf2MachineInertCoupler) && void 0 !== yp ? yp : null,
              inputShort: null !== (tp = pp.baf2MachineInputShort) && void 0 !== tp ? tp : null,
              field: null !== (jp = pp.baf2MachineField) && void 0 !== jp ? jp : null,
              noSeeds: !0 === pp.baf2MachineNoSeeds,
              fuelFed: !0 === pp.baf2MachineFuelFed,
              fuelFeeds: !0 === pp.baf2MachineFuelFeeds,
              coreFull: !0 === pp.baf2MachineCoreFull,
              waterUnpowered: !0 === pp.baf2MachineWaterUnpowered,
              powerShort: !0 === pp.baf2MachinePowerShort,
              powerWait: !0 === pp.baf2MachinePowerWait,
              reactorPowered: !0 === pp.baf2MachineReactorPowered,
              fuelLeftMs: null !== (mp = pp.baf2MachineFuelLeftMs) && void 0 !== mp ? mp : null,
              burning: null !== (Rp = pp.baf2MachineBurning) && void 0 !== Rp ? Rp : null,
              fuelKeep: null !== (qp = pp.baf2MachineFuelKeep) && void 0 !== qp ? qp : null,
              water: null !== (Cp = pp.baf2MachineWater) && void 0 !== Cp ? Cp : null,
              farm: null !== (Xp = pp.baf2MachineFarm) && void 0 !== Xp ? Xp : null,
              cryo: null !== (Jp = pp.baf2MachineCryo) && void 0 !== Jp ? Jp : null
            })
          } else if ("baf2StationOpen" === pp) {
            const pp = ip.baf2Station;
            yi.consumeServerOpen(pp, performance.now()) || ot(wp, Ip, pp, dp)
          } else if ("baf2Power" === pp) {
            const pp = ip;
            Ep.set(pp), pp.baf2PowerOpen && (ui({
              kind: "power"
            }), (0, uo.t)())
          } else if (pp === Vp.t) {
            const pp = ip;
            Qp.set(pp), pp.baf2WaterOpen && (ui({
              kind: "water"
            }), (0, uo.t)())
          } else if ("baf2RxPlans" === pp) {
            var Bp, Tp, fp;
            const pp = ip;
            Np.ku(pp);
            const cp = new Set(pp.baf2RxPlanList.map((pp => {
              let [ip, cp, Op] = pp;
              return `${ip},${cp},${Op}`
            })));
            Gp.retain(cp);
            const Op = null === (Bp = xp.get()) || void 0 === Bp ? void 0 : Bp.kind,
              op = "reactor" === Op ? null === (Tp = bp.get()) || void 0 === Tp ? void 0 : Tp.status.baf2RxAt : "battery" === Op ? null === (fp = hp.get()) || void 0 === fp ? void 0 : fp.status.baf2BatAt : void 0;
            op && ki.has(op.join(",")) && !cp.has(op.join(",")) && ji(), ki = cp
          } else if ("baf2RxStatus" === pp) {
            const pp = ip;
            bp.set(pp), pp.baf2RxOpen && (ui({
              kind: "reactor"
            }), (0, uo.t)())
          } else if ("baf2BatStatus" === pp) {
            const pp = ip;
            hp.set(pp), pp.baf2BatOpen && (ui({
              kind: "battery"
            }), (0, uo.t)())
          } else if ("baf2RxAlarm" === pp) Gp.ku(ip);
          else if ("baf2Bomb" === pp) zp.ku(ip, wp.getPositionView(Ip));
          else if ("baf2Fallout" === pp) Kp.ku(ip);
          else if ("baf2ColBeams" === pp) ii.onBeams(ip);
          else if ("baf2ColStatus" === pp) {
            const pp = ip;
            var np, Fp;
            if (ii.onStatus(pp), pp.baf2ColOpen) ii.onOpen(null !== (np = null === (Fp = wp.Acp(Ip)) || void 0 === Fp ? void 0 : Fp.name) && void 0 !== np ? np : null), ui({
              kind: "collider"
            }), (0, uo.t)()
          } else if ("baf2Terminal" === pp) {
            const pp = ip;
            var gp;
            if (lp.apply(pp)) pp.baf2TermReset && (ui({
              kind: "terminal"
            }), (0, uo.t)());
            else "terminal" === (null === (gp = xp.get()) || void 0 === gp ? void 0 : gp.kind) && (xp.set(null), (0, uo.h)())
          } else if ("baf2Core" === pp) {
            var rp;
            const pp = ip;
            if (Lp(!0 === pp.baf2CoreNuclear), function(pp, ip) {
                return "core" === (null === pp || void 0 === pp ? void 0 : pp.kind) && ip.baf2CoreTier > pp.core.message.baf2CoreTier
              }(xp.get(), pp)) return void(0, uo.h)();
            if (pp.baf2CoreRefresh && "core" !== (null === (rp = xp.get()) || void 0 === rp ? void 0 : rp.kind)) return;
            ui({
              kind: "core",
              core: wt(pp, Hp)
            }), pp.baf2CoreRefresh || (0, uo.t)()
          } else if ("baf2WrenchUndo" === pp) {
            const {
              baf2WrenchPos: pp,
              baf2WrenchBlock: cp
            } = ip;
            wp.qE(pp[0], pp[1], pp[2], cp)
          } else if ("baf2Toast" === pp) {
            const pp = ip;
            ap.heard(performance.now(), pp.baf2ToastMs), ep.show(pp)
          } else if ("baf2Area" === pp) kp.arrive(ip, null !== xp.get());
          else if ("baf2Quest" === pp) {
            const pp = ip;
            Lp(!0 === pp.baf2QuestNuclear), dp.set(pp, function(pp, ip) {
              var cp, Op, op, Ip, Sp;
              const xp = [];
              for (const [, , Dp, , , , , , Ap, Pp] of pp.baf2QuestSteps) null !== Dp && xp.push(Dp), xp.push(...null !== Ap && void 0 !== Ap ? Ap : [], ...null !== Pp && void 0 !== Pp ? Pp : []);
              pp.baf2QuestReward && xp.push(pp.baf2QuestReward);
              const Lp = null === (cp = pp.baf2QuestSide) || void 0 === cp ? void 0 : cp[2][2];
              Lp && xp.push(Lp), xp.push(...null !== (Op = null === (op = pp.baf2QuestSide) || void 0 === op ? void 0 : op[2][8]) && void 0 !== Op ? Op : [], ...null !== (Ip = null === (Sp = pp.baf2QuestSide) || void 0 === Sp ? void 0 : Sp[2][9]) && void 0 !== Ip ? Ip : []);
              for (const [Dp] of null !== (Yp = pp.baf2QuestAlso) && void 0 !== Yp ? Yp : []) {
                var Yp;
                xp.push(Dp)
              }
              return ip(xp)
            }(pp, Hp)), xt(pp.baf2QuestTier)
          } else if ("baf2Route" === pp) ! function(pp, ip) {
            let {
              baf2RouteCells: cp,
              baf2RouteInto: Op
            } = ip;
            0 !== cp.length && Op ? pp.setRouteChevrons({
              cells: cp.map(((pp, ip) => {
                const [op, , Ip] = function(pp, ip, cp) {
                  const Op = cp + 1 < pp.length ? pp[cp + 1] : ip;
                  return [Op[0] - pp[cp][0], 0, Op[2] - pp[cp][2]]
                }(cp, Op, ip);
                return {
                  pos: pp,
                  way: [op, Ip]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : pp.setRouteChevrons(null)
          }(wp, ip);
          else if ("baf2QuestBook" === pp) dp.setBook(ip);
          else if ("baf2Stalls" === pp) Wp.set(ip.baf2StallCells);
          else if (pp === tc.l) Up.onMoves(ip);
          else if (pp === tc.g) Up.onLines(ip);
          else if ("baf2Labels" === pp) Mp.ku(ip);
          else if ("baf2DropMap" === pp) ui({
            kind: "dropMap",
            dropMap: ip
          }), (0, uo.t)();
          else if ("baf2Islands" === pp) {
            var sp, ci;
            const pp = ip;
            if (vp.syncIslandEdits(pp.baf2IslandsAnswered), !pp.baf2IslandsOpen && "islands" !== (null === (sp = xp.get()) || void 0 === sp ? void 0 : sp.kind)) return;
            if (pp.baf2IslandsOpen) {
              var Oi, oi;
              const ip = jo.c.get("openEverythingMenuName"),
                cp = vp.sent() >= vi,
                Op = "other" !== (Ui = {
                  askedAtMs: wi,
                  askSent: cp,
                  reaskedAtMs: ti,
                  nowMs: Date.now(),
                  panel: null !== (Oi = null === (oi = xp.get()) || void 0 === oi ? void 0 : oi.kind) && void 0 !== Oi ? Oi : null,
                  inGameMenu: jo.c.get("openInGameMenuName"),
                  everythingMenu: null === ip ? null : ip === yc.n.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== pp.baf2IslandsFocusInvite
                }).everythingMenu && (!!Ui.focusInvite || "islands" === Ui.panel && "clientGame" === Ui.inGameMenu || !(Ui.nowMs - Ui.reaskedAtMs < BY) && (Ui.askSent && Ui.nowMs - Ui.askedAtMs < BY ? "core" === Ui.panel && "clientGame" === Ui.inGameMenu && null === Ui.everythingMenu : "shop" === Ui.everythingMenu || null === Ui.inGameMenu));
              if (cp && (wi = -1 / 0), ti = -1 / 0, !Op) return void di()
            }
            const cp = (Si = pp.baf2IslandsOpen, xi = "islands" === (null === (ci = xp.get()) || void 0 === ci ? void 0 : ci.kind), Pi = Hi, Wi = Date.now(), Si && !xi && Wi - Pi < BY);
            ui({
              kind: "islands",
              islands: pp,
              arrivedAtMs: Date.now(),
              backToCore: NY(xp.get())
            }), cp && (Hi = -1 / 0, ti = Date.now(), vp.send(Zp)), pp.baf2IslandsOpen && ("clientGame" !== jo.c.get("openInGameMenuName") && (0, ko.e)(), (0, uo.t)())
          } else if ("baf2CoopTransfer" === pp) {
            var Ii;
            const pp = ip;
            pp.baf2TransferOn ? (ui({
              kind: "transfer",
              transfer: pp,
              arrivedAtMs: Date.now()
            }), (0, uo.t)()) : "transfer" === (null === (Ii = xp.get()) || void 0 === Ii ? void 0 : Ii.kind) && (0, uo.h)()
          } else "baf2IslandLeft" === pp ? (kp.dropHeld(), null !== xp.get() && ji(), "inventory" === jo.c.get("openInGameMenuName") && (0, ko.e)()) : "baf2Arc" === pp ? Li.ku(wp, ip) : "baf2Blade" === pp ? Yi.onBlade(wp, ip) : "baf2JetFlame" === pp ? Di.ku(wp, ip) : "baf2GearPower" === pp && Ai.ku(ip);
          var Si, xi, Pi, Wi, Ui
        }
      };
      return Ri
    }
  },
  38729: (pp, ip, cp) => {
    function Op(pp, ip, cp) {
      const Op = new Set,
        op = new ResizeObserver(cp),
        Ip = () => {
          const ip = new Set(document.querySelectorAll(pp));
          let Ip = !1;
          for (const pp of Op) ip.has(pp) || (op.unobserve(pp), Op.delete(pp), Ip = !0);
          for (const pp of ip) Op.has(pp) || (op.observe(pp), Sp.observe(pp, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Op.add(pp));
          Ip && cp()
        },
        Sp = new MutationObserver((ip => {
          ip.some((pp => "attributes" === pp.type)) && cp(), ip.some((ip => function(pp, ip, cp) {
            if ("childList" !== pp.type) return !1;
            for (const Op of pp.addedNodes)
              if (Op instanceof Element && (Op.matches(ip) || Op.querySelector(ip))) return !0;
            for (const Op of pp.removedNodes)
              if (Op instanceof Element)
                for (const pp of cp)
                  if (Op.contains(pp)) return !0;
            return !1
          }(ip, pp, Op))) && Ip()
        }));
      Sp.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const xp of ip) op.observe(xp);
      return window.addEventListener("resize", cp), Ip(), cp(), () => {
        op.disconnect(), Sp.disconnect(), window.removeEventListener("resize", cp)
      }
    }
    cp.d(ip, {
      d: () => Op
    })
  },
  38719: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp
    });
    var Op = cp(38712);
    const op = 5,
      Ip = [0, 0, 0],
      Sp = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function xp(pp, ip, cp, xp, Lp, Yp) {
      let [Dp, Ap, Pp] = xp;
      const Wp = (Dp + .5 - cp[0]) ** 2 + (Ap - cp[1]) ** 2 + (Pp + .5 - cp[2]) ** 2;
      let yp = null;
      Wp <= Yp ** 2 && (Ip[0] = Dp + .5, Ip[1] = Ap + Lp, Ip[2] = Pp + .5, yp = ip.projectWorldPosToViewport(Ip));
      const Up = null !== yp && yp.x > -op && yp.x < 100 + op && yp.y > -op && yp.y < 100 + op;
      return (0, Op.d)(pp, !Up), Up ? (Sp.x = yp.x, Sp.y = yp.y, Sp.distSq = Wp, Sp) : null
    }
  },
  38712: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      d: () => Ip
    });
    const Op = new WeakMap;

    function op(pp) {
      let ip = Op.get(pp);
      return ip || (ip = {
        hidden: pp.hidden,
        x: NaN,
        y: NaN
      }, Op.set(pp, ip)), ip
    }

    function Ip(pp, ip) {
      const cp = op(pp);
      cp.hidden !== ip && (cp.hidden = ip, pp.hidden = ip)
    }

    function Sp(pp, ip, cp) {
      const Op = op(pp);
      Op.x === ip && Op.y === cp || (Op.x = ip, Op.y = cp, pp.style.translate = `${ip}vw ${cp}vh`)
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);