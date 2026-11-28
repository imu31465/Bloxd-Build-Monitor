export const id = 12;
export const ids = [12, 13];
export const modules = {
  40044: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(40048);
    const Fd = [0, 0, 0];
    class Rd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fd;
        this.pool = dd, this.origin = Od, this.count = 0, this.free = []
      }
      take() {
        var dd;
        const Od = null !== (dd = this.free.pop()) && void 0 !== dd ? dd : this.count++;
        return Od >= this.pool.Mt && this.pool.grow(Math.max(2 * this.pool.Mt, Od + 1)), this.hide(Od), Od
      }
      release(dd) {
        this.hide(dd), this.free.push(dd)
      }
      write(dd, Od, md, Fd) {
        const {
          records: Rd
        } = this.pool, {
          origin: Xd
        } = this, Kd = dd * Wd.b;
        Rd[Kd] = Od - Xd[0], Rd[Kd + 1] = md - Xd[1], Rd[Kd + 2] = Fd - Xd[2], Rd[Kd + Wd.f] = 0, this.pool.markDirty(dd)
      }
      hide(dd) {
        this.pool.records[dd * Wd.b + Wd.f] = 1, this.pool.markDirty(dd)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Xd {
      constructor(dd, Od, md) {
        this.api = dd, this.model = Od, this.initialCapacity = md, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(dd) {
        let Od = this.kinds.get(dd);
        if (void 0 === Od) {
          const md = this.api.createInstancePool({
            ...this.model,
            item: dd
          }, this.initialCapacity);
          null === md || void 0 === md || md.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Od = md && new Rd(md, this.origin), this.kinds.set(dd, Od)
        }
        return Od
      }
      follow(dd) {
        const {
          origin: Od
        } = this;
        if (Math.abs(dd[0] - Od[0]) <= 512 && Math.abs(dd[1] - Od[1]) <= 512 && Math.abs(dd[2] - Od[2]) <= 512) return !1;
        Od[0] = Math.floor(dd[0]), Od[1] = Math.floor(dd[1]), Od[2] = Math.floor(dd[2]);
        for (const md of this.kinds.values()) null === md || void 0 === md || md.pool.setOrigin(Od[0], Od[1], Od[2]);
        return !0
      }
      commit() {
        for (const dd of this.kinds.values()) null === dd || void 0 === dd || dd.commit()
      }
      dispose() {
        for (const dd of this.kinds.values()) null === dd || void 0 === dd || dd.dispose();
        this.kinds.clear()
      }
    }
  },
  40879: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => od
    });
    const Wd = "Pipe",
      Fd = "Extractor Pipe",
      Rd = (new Set([Wd, Fd]), new Set([Wd, Fd, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var Xd = md(40044);
    class Kd {
      constructor(dd) {
        this.api = dd, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Xd.c(dd, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(dd) {
        if (dd.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${dd.id} with < 2 waypoints`);
        const Od = this.kinds.kindOf(dd.itemName);
        if (!Od) return void(this.unshown.has(dd.itemName) || (this.unshown.add(dd.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${dd.itemName}"`)));
        this.remove(dd.id);
        const md = function(dd) {
          return (dd.waypoints.length - 1) / 2 * 1e3
        }(dd);
        if (Date.now() - dd.startTimeMs > md + 2e3) return;
        const Wd = Od.take();
        this.items.set(dd.id, {
          kind: Od,
          slot: Wd,
          waypoints: dd.waypoints,
          startTimeMs: dd.startTimeMs,
          durationMs: md
        })
      }
      onEnd(dd) {
        this.remove(dd.id)
      }
      FY() {
        if (0 === this.items.size) return void this.kinds.commit();
        const dd = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [Od, md] of this.items) dd - md.startTimeMs > md.durationMs + 2e3 ? this.remove(Od) : this.write(md, dd);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(dd) {
        const Od = this.items.get(dd);
        Od && (Od.kind.release(Od.slot), this.items.delete(dd))
      }
      write(dd, Od) {
        const md = dd.waypoints.length - 1;
        let Wd = (Od - dd.startTimeMs) / dd.durationMs;
        Wd < 0 ? Wd = 0 : Wd > 1 && (Wd = 1);
        const Fd = Wd * md;
        let Rd = Math.floor(Fd);
        Rd >= md && (Rd = md - 1);
        const Xd = Fd - Rd,
          [Kd, hd, vd] = dd.waypoints[Rd],
          [Qd, td, od] = dd.waypoints[Rd + 1];
        dd.kind.write(dd.slot, Kd + (Qd - Kd) * Xd + .5, hd + (td - hd) * Xd + .5, vd + (od - vd) * Xd + .5)
      }
    }
    const hd = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      vd = new Set(hd);
    class Qd {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(dd) {
        this.api = dd, this.pipeVisualizer = new Kd(dd)
      }
      onClose() {
        var dd;
        null === (dd = this.pipeVisualizer) || void 0 === dd || dd.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(dd, Od) {
        const {
          pipeVisualizer: md
        } = this;
        if (md)
          if ("pipeItemSpawnBatch" === dd)
            for (const Wd of Od.items) md.onSpawn(Wd);
          else if ("pipeItemEndBatch" === dd)
          for (const Wd of Od.items) md.onEnd(Wd)
      }
      FY() {
        var dd;
        null === (dd = this.pipeVisualizer) || void 0 === dd || dd.FY()
      }
      onPlayerAttemptAltAction(dd, Od, md, Wd, Fd, Xd) {
        var Kd;
        if (!vd.has(this.api.getMetaInfo(Fd).rootName)) return;
        const hd = null === (Kd = this.api.NWd(dd)) || void 0 === Kd ? void 0 : Kd.name;
        return void 0 !== hd && Rd.has(hd) ? "preventAction" : void 0
      }
    }
    var td = md(40884);
    const od = function(dd, Od, md) {
      if ("smp2" === md) return (0, td.makeSmp2ClientGame)();
      if ("survivalFactory" !== md && "survivalFactoryPersistent" !== md) {
        return {}
      }
      const Wd = new Qd;
      return {
        onCreate: dd => {
          Wd.onCreate(dd)
        },
        onClose: () => {
          Wd.onClose()
        },
        onReceivedMessageFromServer: (dd, Od) => {
          Wd.onReceivedMessageFromServer(dd, Od)
        },
        Et: () => {
          Wd.FY()
        },
        altVetoBlocks: hd,
        onPlayerAttemptAltAction: (dd, Od, md, Fd, Rd, Xd) => Wd.onPlayerAttemptAltAction(dd, Od, md, Fd, Rd, Xd)
      }
    }
  },
  40887: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      c: () => Xd,
      d: () => Kd
    });
    var Wd = md(40894),
      Fd = md(32);
    const Rd = "smp2OnboardingView",
      Xd = 5e3;
    class Kd {
      constructor() {
        this.view = {
          path: null,
          reward: null
        }, this.queued = [], this.seenRewardIds = new Set, this.showing = !1, this.rewardTimer = null
      }
      get() {
        return this.view
      }
      receivePath(dd) {
        let [Od, md, Fd] = dd;
        const Rd = Wd.e[Od];
        if (void 0 === Rd) return;
        const {
          title: Xd,
          steps: Kd
        } = Wd.b[Rd];
        this.lQ({
          ...this.view,
          path: md < Kd.length ? {
            title: Xd,
            steps: Kd,
            step: md,
            progress: Fd
          } : null
        })
      }
      receiveReward(dd) {
        let [Od, md] = dd;
        const Fd = Wd.f[Od];
        if (void 0 !== Fd && !this.seenRewardIds.has(md)) {
          var Rd;
          if (this.seenRewardIds.add(md), this.queued.push({
              ...Fd,
              id: md
            }), null === this.view.reward) this.lQ({
            ...this.view,
            reward: null !== (Rd = this.queued.shift()) && void 0 !== Rd ? Rd : null
          });
          this.runTimers()
        }
      }
      setShowing(dd) {
        this.showing = dd, this.runTimers()
      }
      dispose() {
        this.clearTimers()
      }
      runTimers() {
        this.showing ? this.view.reward && null === this.rewardTimer && (this.rewardTimer = setTimeout((() => {
          var dd;
          this.rewardTimer = null, this.lQ({
            ...this.view,
            reward: null !== (dd = this.queued.shift()) && void 0 !== dd ? dd : null
          }), this.runTimers()
        }), Xd)) : this.clearTimers()
      }
      clearTimers() {
        null !== this.rewardTimer && (clearTimeout(this.rewardTimer), this.rewardTimer = null)
      }
      lQ(dd) {
        this.view = dd, Fd.j.lQ(Rd, dd)
      }
    }
  },
  40884: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      makeSmp2ClientGame: () => td
    });
    var Wd = md(66);
    const Fd = "smp2FirstSpawn",
      Rd = "smp2Path",
      Xd = "smp2Reward";
    var Kd = md(1796),
      hd = md(3697),
      vd = md(3428),
      Qd = md(40887);

    function td() {
      let dd = !1,
        Od = !1,
        td = "loading",
        od = !1;
      const Nd = () => {
          !dd || Od || od || "loading" === td || (Od = !0, (0, Kd.g)({
            id: "smp2.first_spawn",
            value: td
          }))
        },
        qd = new Qd.d;
      let Hd = null;
      return {
        onCreate: () => {
          md.e(182).then((() => md(54177))).then((dd => {
            let {
              Smp2OnboardingUi: Od
            } = dd;
            od || (Hd = (0, vd.F)((0, Wd.createElement)(Od, {
              store: qd
            })), td = "cards")
          })).catch((dd => {
            od || (td = "no_cards", console.error("SMP: couldn't load the onboarding cards" + ((0, hd.f)(dd) ? " (chunk load failed)" : ""), dd))
          })).finally(Nd)
        },
        onClose: () => {
          var dd;
          "loading" === td && (td = "no_cards"), Nd(), od = !0, null === (dd = Hd) || void 0 === dd || dd(), qd.dispose()
        },
        onReceivedMessageFromServer: (Od, md) => {
          Od === Fd ? (dd = !0, Nd()) : Od === Rd ? qd.receivePath(md) : Od === Xd && qd.receiveReward(md)
        }
      }
    }
  },
  40894: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      e: () => Wd,
      f: () => Kd,
      j: () => Xd
    });
    const Wd = ["starter_path", "portal_first"],
      Fd = "Iron Pickaxe",
      Rd = {
        starter_path: {
          title: "Starter Path",
          steps: [{
            key: "sell",
            goal: "sell",
            text: "Sell your dirt at Instant Sell",
            icon: "Dirt"
          }, {
            key: "portal",
            goal: "portal",
            text: "Jump into the portal to go out into the world",
            icon: "Compass"
          }, {
            key: "logs",
            goal: "logs",
            amount: 4,
            text: "Chop 4 logs",
            icon: "Maple Log"
          }, {
            key: "workbench",
            goal: "craft",
            item: "Workbench",
            text: "Craft a Workbench",
            icon: "Workbench"
          }, {
            key: "pickaxe",
            goal: "craft",
            item: "Wood Pickaxe",
            text: "Craft a Wood Pickaxe",
            icon: "Wood Pickaxe"
          }]
        },
        portal_first: {
          title: "First steps",
          steps: [{
            key: "portal",
            goal: "portal",
            text: "Jump into the portal to go out into the world",
            icon: "Compass"
          }, {
            key: "logs",
            goal: "logs",
            amount: 3,
            text: "Chop 3 logs",
            icon: "Maple Log"
          }]
        }
      };

    function Xd(dd) {
      return "logs" === dd.goal ? dd.amount : 1
    }
    const Kd = [{
      title: "Starter Path done!",
      text: "+100 gold. The world is yours.",
      icon: "Gold Coin"
    }, {
      title: "Starter kit",
      text: "A pickaxe, an axe and food to get you going",
      icon: "Wood Pickaxe"
    }, {
      title: "Come back tomorrow",
      text: `A free ${Fd} is waiting for you`,
      icon: Fd
    }, {
      title: "Welcome back!",
      text: `Here's your ${Fd}`,
      icon: Fd
    }, {
      title: "Nice!",
      text: "Keep exploring: the hub's traders buy what you find",
      icon: "Maple Log"
    }];
    Wd.flatMap((dd => [...Rd[dd].steps.map((Od => `${dd}:${Od.key}`)), `${dd}:done`]))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);