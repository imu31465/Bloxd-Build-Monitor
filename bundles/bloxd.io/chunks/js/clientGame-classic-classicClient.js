export const id = 12;
export const ids = [12, 13];
export const modules = {
  39736: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(39744);
    const Hb = [0, 0, 0];
    class pb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb;
        this.pool = bb, this.origin = wb, this.count = 0, this.free = []
      }
      take() {
        var bb;
        const wb = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.count++;
        return wb >= this.pool.qO && this.pool.grow(Math.max(2 * this.pool.qO, wb + 1)), this.hide(wb), wb
      }
      release(bb) {
        this.hide(bb), this.free.push(bb)
      }
      write(bb, wb, Mb, Hb) {
        const {
          records: pb
        } = this.pool, {
          origin: Vb
        } = this, gb = bb * eb.e;
        pb[gb] = wb - Vb[0], pb[gb + 1] = Mb - Vb[1], pb[gb + 2] = Hb - Vb[2], pb[gb + eb.h] = 0, this.pool.markDirty(bb)
      }
      hide(bb) {
        this.pool.records[bb * eb.e + eb.h] = 1, this.pool.markDirty(bb)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Vb {
      constructor(bb, wb, Mb) {
        this.api = bb, this.model = wb, this.initialCapacity = Mb, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(bb) {
        let wb = this.kinds.get(bb);
        if (void 0 === wb) {
          const Mb = this.api.createInstancePool({
            ...this.model,
            item: bb
          }, this.initialCapacity);
          null === Mb || void 0 === Mb || Mb.setOrigin(this.origin[0], this.origin[1], this.origin[2]), wb = Mb && new pb(Mb, this.origin), this.kinds.set(bb, wb)
        }
        return wb
      }
      follow(bb) {
        const {
          origin: wb
        } = this;
        if (Math.abs(bb[0] - wb[0]) <= 512 && Math.abs(bb[1] - wb[1]) <= 512 && Math.abs(bb[2] - wb[2]) <= 512) return !1;
        wb[0] = Math.floor(bb[0]), wb[1] = Math.floor(bb[1]), wb[2] = Math.floor(bb[2]);
        for (const Mb of this.kinds.values()) null === Mb || void 0 === Mb || Mb.pool.setOrigin(wb[0], wb[1], wb[2]);
        return !0
      }
      commit() {
        for (const bb of this.kinds.values()) null === bb || void 0 === bb || bb.commit()
      }
      dispose() {
        for (const bb of this.kinds.values()) null === bb || void 0 === bb || bb.dispose();
        this.kinds.clear()
      }
    }
  },
  40640: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Ub
    });
    const eb = "Pipe",
      Hb = "Extractor Pipe",
      pb = (new Set([eb, Hb]), new Set([eb, Hb, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var Vb = Mb(39736);
    class gb {
      constructor(bb) {
        this.api = bb, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Vb.e(bb, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(bb) {
        if (bb.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${bb.id} with < 2 waypoints`);
        const wb = this.kinds.kindOf(bb.itemName);
        if (!wb) return void(this.unshown.has(bb.itemName) || (this.unshown.add(bb.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${bb.itemName}"`)));
        this.remove(bb.id);
        const Mb = function(bb) {
          return (bb.waypoints.length - 1) / 2 * 1e3
        }(bb);
        if (Date.now() - bb.startTimeMs > Mb + 2e3) return;
        const eb = wb.take();
        this.items.set(bb.id, {
          kind: wb,
          slot: eb,
          waypoints: bb.waypoints,
          startTimeMs: bb.startTimeMs,
          durationMs: Mb
        })
      }
      onEnd(bb) {
        this.remove(bb.id)
      }
      Wm() {
        if (0 === this.items.size) return void this.kinds.commit();
        const bb = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [wb, Mb] of this.items) bb - Mb.startTimeMs > Mb.durationMs + 2e3 ? this.remove(wb) : this.write(Mb, bb);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(bb) {
        const wb = this.items.get(bb);
        wb && (wb.kind.release(wb.slot), this.items.delete(bb))
      }
      write(bb, wb) {
        const Mb = bb.waypoints.length - 1;
        let eb = (wb - bb.startTimeMs) / bb.durationMs;
        eb < 0 ? eb = 0 : eb > 1 && (eb = 1);
        const Hb = eb * Mb;
        let pb = Math.floor(Hb);
        pb >= Mb && (pb = Mb - 1);
        const Vb = Hb - pb,
          [gb, lb, Lb] = bb.waypoints[pb],
          [Ib, Ob, Ub] = bb.waypoints[pb + 1];
        bb.kind.write(bb.slot, gb + (Ib - gb) * Vb + .5, lb + (Ob - lb) * Vb + .5, Lb + (Ub - Lb) * Vb + .5)
      }
    }
    const lb = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Lb = new Set(lb);
    class Ib {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(bb) {
        this.api = bb, this.pipeVisualizer = new gb(bb)
      }
      onClose() {
        var bb;
        null === (bb = this.pipeVisualizer) || void 0 === bb || bb.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(bb, wb) {
        const {
          pipeVisualizer: Mb
        } = this;
        if (Mb)
          if ("pipeItemSpawnBatch" === bb)
            for (const eb of wb.items) Mb.onSpawn(eb);
          else if ("pipeItemEndBatch" === bb)
          for (const eb of wb.items) Mb.onEnd(eb)
      }
      Wm() {
        var bb;
        null === (bb = this.pipeVisualizer) || void 0 === bb || bb.Wm()
      }
      onPlayerAttemptAltAction(bb, wb, Mb, eb, Hb, Vb) {
        var gb;
        if (!Lb.has(this.api.getMetaInfo(Hb).rootName)) return;
        const lb = null === (gb = this.api.Leb(bb)) || void 0 === gb ? void 0 : gb.name;
        return void 0 !== lb && pb.has(lb) ? "preventAction" : void 0
      }
    }
    var Ob = Mb(40645);
    const Ub = function(bb, wb, Mb) {
      if ("smp2" === Mb) return (0, Ob.makeSmp2ClientGame)();
      if ("survivalFactory" !== Mb && "survivalFactoryPersistent" !== Mb) {
        return {}
      }
      const eb = new Ib;
      return {
        onCreate: bb => {
          eb.onCreate(bb)
        },
        onClose: () => {
          eb.onClose()
        },
        onReceivedMessageFromServer: (bb, wb) => {
          eb.onReceivedMessageFromServer(bb, wb)
        },
        sO: () => {
          eb.Wm()
        },
        altVetoBlocks: lb,
        onPlayerAttemptAltAction: (bb, wb, Mb, Hb, pb, Vb) => eb.onPlayerAttemptAltAction(bb, wb, Mb, Hb, pb, Vb)
      }
    }
  },
  40653: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      g: () => Vb,
      h: () => gb
    });
    var eb = Mb(40661),
      Hb = Mb(29);
    const pb = "smp2OnboardingView",
      Vb = 5e3;
    class gb {
      constructor() {
        this.view = {
          path: null,
          reward: null
        }, this.queued = [], this.seenRewardIds = new Set, this.showing = !1, this.rewardTimer = null
      }
      get() {
        return this.view
      }
      receivePath(bb) {
        let [wb, Mb, Hb] = bb;
        const pb = eb.g[wb];
        if (void 0 === pb) return;
        const {
          title: Vb,
          steps: gb
        } = eb.d[pb];
        this.iI({
          ...this.view,
          path: Mb < gb.length ? {
            title: Vb,
            steps: gb,
            step: Mb,
            progress: Hb
          } : null
        })
      }
      receiveReward(bb) {
        let [wb, Mb] = bb;
        const Hb = eb.k[wb];
        if (void 0 !== Hb && !this.seenRewardIds.has(Mb)) {
          var pb;
          if (this.seenRewardIds.add(Mb), this.queued.push({
              ...Hb,
              id: Mb
            }), null === this.view.reward) this.iI({
            ...this.view,
            reward: null !== (pb = this.queued.shift()) && void 0 !== pb ? pb : null
          });
          this.runTimers()
        }
      }
      setShowing(bb) {
        this.showing = bb, this.runTimers()
      }
      dispose() {
        this.clearTimers()
      }
      runTimers() {
        this.showing ? this.view.reward && null === this.rewardTimer && (this.rewardTimer = setTimeout((() => {
          var bb;
          this.rewardTimer = null, this.iI({
            ...this.view,
            reward: null !== (bb = this.queued.shift()) && void 0 !== bb ? bb : null
          }), this.runTimers()
        }), Vb)) : this.clearTimers()
      }
      clearTimers() {
        null !== this.rewardTimer && (clearTimeout(this.rewardTimer), this.rewardTimer = null)
      }
      iI(bb) {
        this.view = bb, Hb.k.iI(pb, bb)
      }
    }
  },
  40645: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      makeSmp2ClientGame: () => Ob
    });
    var eb = Mb(64);
    const Hb = "smp2FirstSpawn",
      pb = "smp2Path",
      Vb = "smp2Reward";
    var gb = Mb(1861),
      lb = Mb(3822),
      Lb = Mb(3531),
      Ib = Mb(40653);

    function Ob() {
      let bb = !1,
        wb = !1,
        Ob = "loading",
        Ub = !1;
      const tb = () => {
          !bb || wb || Ub || "loading" === Ob || (wb = !0, (0, gb.g)({
            id: "smp2.first_spawn",
            value: Ob
          }))
        },
        Cb = new Ib.h;
      let Eb = null;
      return {
        onCreate: () => {
          Mb.e(182).then((() => Mb(53979))).then((bb => {
            let {
              Smp2OnboardingUi: wb
            } = bb;
            Ub || (Eb = (0, Lb.J)((0, eb.createElement)(wb, {
              store: Cb
            })), Ob = "cards")
          })).catch((bb => {
            Ub || (Ob = "no_cards", console.error("SMP: couldn't load the onboarding cards" + ((0, lb.e)(bb) ? " (chunk load failed)" : ""), bb))
          })).finally(tb)
        },
        onClose: () => {
          var bb;
          "loading" === Ob && (Ob = "no_cards"), tb(), Ub = !0, null === (bb = Eb) || void 0 === bb || bb(), Cb.dispose()
        },
        onReceivedMessageFromServer: (wb, Mb) => {
          wb === Hb ? (bb = !0, tb()) : wb === pb ? Cb.receivePath(Mb) : wb === Vb && Cb.receiveReward(Mb)
        }
      }
    }
  },
  40661: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      g: () => eb,
      k: () => gb,
      o: () => Vb
    });
    const eb = ["starter_path", "portal_first"],
      Hb = "Iron Pickaxe",
      pb = {
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

    function Vb(bb) {
      return "logs" === bb.goal ? bb.amount : 1
    }
    const gb = [{
      title: "Starter Path done!",
      text: "+100 gold. The world is yours.",
      icon: "Gold Coin"
    }, {
      title: "Starter kit",
      text: "A pickaxe, an axe and food to get you going",
      icon: "Wood Pickaxe"
    }, {
      title: "Come back tomorrow",
      text: `A free ${Hb} is waiting for you`,
      icon: Hb
    }, {
      title: "Welcome back!",
      text: `Here's your ${Hb}`,
      icon: Hb
    }, {
      title: "Nice!",
      text: "Keep exploring: the hub's traders buy what you find",
      icon: "Maple Log"
    }];
    eb.flatMap((bb => [...pb[bb].steps.map((wb => `${bb}:${wb.key}`)), `${bb}:done`]))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);