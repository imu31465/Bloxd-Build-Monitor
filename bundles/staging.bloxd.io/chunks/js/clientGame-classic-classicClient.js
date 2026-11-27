export const id = 12;
export const ids = [12, 13];
export const modules = {
  40027: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(40031);
    const Wr = [0, 0, 0];
    class ar {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr;
        this.pool = rr, this.origin = Sr, this.count = 0, this.free = []
      }
      take() {
        var rr;
        const Sr = null !== (rr = this.free.pop()) && void 0 !== rr ? rr : this.count++;
        return Sr >= this.pool.sx && this.pool.grow(Math.max(2 * this.pool.sx, Sr + 1)), this.hide(Sr), Sr
      }
      release(rr) {
        this.hide(rr), this.free.push(rr)
      }
      write(rr, Sr, Qr, Wr) {
        const {
          records: ar
        } = this.pool, {
          origin: jr
        } = this, Ir = rr * Zr.b;
        ar[Ir] = Sr - jr[0], ar[Ir + 1] = Qr - jr[1], ar[Ir + 2] = Wr - jr[2], ar[Ir + Zr.c] = 0, this.pool.markDirty(rr)
      }
      hide(rr) {
        this.pool.records[rr * Zr.b + Zr.c] = 1, this.pool.markDirty(rr)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class jr {
      constructor(rr, Sr, Qr) {
        this.api = rr, this.model = Sr, this.initialCapacity = Qr, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(rr) {
        let Sr = this.kinds.get(rr);
        if (void 0 === Sr) {
          const Qr = this.api.createInstancePool({
            ...this.model,
            item: rr
          }, this.initialCapacity);
          null === Qr || void 0 === Qr || Qr.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Sr = Qr && new ar(Qr, this.origin), this.kinds.set(rr, Sr)
        }
        return Sr
      }
      follow(rr) {
        const {
          origin: Sr
        } = this;
        if (Math.abs(rr[0] - Sr[0]) <= 512 && Math.abs(rr[1] - Sr[1]) <= 512 && Math.abs(rr[2] - Sr[2]) <= 512) return !1;
        Sr[0] = Math.floor(rr[0]), Sr[1] = Math.floor(rr[1]), Sr[2] = Math.floor(rr[2]);
        for (const Qr of this.kinds.values()) null === Qr || void 0 === Qr || Qr.pool.setOrigin(Sr[0], Sr[1], Sr[2]);
        return !0
      }
      commit() {
        for (const rr of this.kinds.values()) null === rr || void 0 === rr || rr.commit()
      }
      dispose() {
        for (const rr of this.kinds.values()) null === rr || void 0 === rr || rr.dispose();
        this.kinds.clear()
      }
    }
  },
  40862: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => mr
    });
    const Zr = "Pipe",
      Wr = "Extractor Pipe",
      ar = (new Set([Zr, Wr]), new Set([Zr, Wr, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var jr = Qr(40027);
    class Ir {
      constructor(rr) {
        this.api = rr, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new jr.c(rr, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(rr) {
        if (rr.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${rr.id} with < 2 waypoints`);
        const Sr = this.kinds.kindOf(rr.itemName);
        if (!Sr) return void(this.unshown.has(rr.itemName) || (this.unshown.add(rr.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${rr.itemName}"`)));
        this.remove(rr.id);
        const Qr = function(rr) {
          return (rr.waypoints.length - 1) / 2 * 1e3
        }(rr);
        if (Date.now() - rr.startTimeMs > Qr + 2e3) return;
        const Zr = Sr.take();
        this.items.set(rr.id, {
          kind: Sr,
          slot: Zr,
          waypoints: rr.waypoints,
          startTimeMs: rr.startTimeMs,
          durationMs: Qr
        })
      }
      onEnd(rr) {
        this.remove(rr.id)
      }
      FY() {
        if (0 === this.items.size) return void this.kinds.commit();
        const rr = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [Sr, Qr] of this.items) rr - Qr.startTimeMs > Qr.durationMs + 2e3 ? this.remove(Sr) : this.write(Qr, rr);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(rr) {
        const Sr = this.items.get(rr);
        Sr && (Sr.kind.release(Sr.slot), this.items.delete(rr))
      }
      write(rr, Sr) {
        const Qr = rr.waypoints.length - 1;
        let Zr = (Sr - rr.startTimeMs) / rr.durationMs;
        Zr < 0 ? Zr = 0 : Zr > 1 && (Zr = 1);
        const Wr = Zr * Qr;
        let ar = Math.floor(Wr);
        ar >= Qr && (ar = Qr - 1);
        const jr = Wr - ar,
          [Ir, fr, Er] = rr.waypoints[ar],
          [pr, xr, mr] = rr.waypoints[ar + 1];
        rr.kind.write(rr.slot, Ir + (pr - Ir) * jr + .5, fr + (xr - fr) * jr + .5, Er + (mr - Er) * jr + .5)
      }
    }
    const fr = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Er = new Set(fr);
    class pr {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(rr) {
        this.api = rr, this.pipeVisualizer = new Ir(rr)
      }
      onClose() {
        var rr;
        null === (rr = this.pipeVisualizer) || void 0 === rr || rr.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(rr, Sr) {
        const {
          pipeVisualizer: Qr
        } = this;
        if (Qr)
          if ("pipeItemSpawnBatch" === rr)
            for (const Zr of Sr.items) Qr.onSpawn(Zr);
          else if ("pipeItemEndBatch" === rr)
          for (const Zr of Sr.items) Qr.onEnd(Zr)
      }
      FY() {
        var rr;
        null === (rr = this.pipeVisualizer) || void 0 === rr || rr.FY()
      }
      onPlayerAttemptAltAction(rr, Sr, Qr, Zr, Wr, jr) {
        var Ir;
        if (!Er.has(this.api.getMetaInfo(Wr).rootName)) return;
        const fr = null === (Ir = this.api.XQr(rr)) || void 0 === Ir ? void 0 : Ir.name;
        return void 0 !== fr && ar.has(fr) ? "preventAction" : void 0
      }
    }
    var xr = Qr(40866);
    const mr = function(rr, Sr, Qr) {
      if ("smp2" === Qr) return (0, xr.makeSmp2ClientGame)();
      if ("survivalFactory" !== Qr && "survivalFactoryPersistent" !== Qr) {
        return {}
      }
      const Zr = new pr;
      return {
        onCreate: rr => {
          Zr.onCreate(rr)
        },
        onClose: () => {
          Zr.onClose()
        },
        onReceivedMessageFromServer: (rr, Sr) => {
          Zr.onReceivedMessageFromServer(rr, Sr)
        },
        lx: () => {
          Zr.FY()
        },
        altVetoBlocks: fr,
        onPlayerAttemptAltAction: (rr, Sr, Qr, Wr, ar, jr) => Zr.onPlayerAttemptAltAction(rr, Sr, Qr, Wr, ar, jr)
      }
    }
  },
  40873: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      e: () => jr,
      h: () => Ir
    });
    var Zr = Qr(40876),
      Wr = Qr(34);
    const ar = "smp2OnboardingView",
      jr = 5e3;
    class Ir {
      constructor() {
        this.view = {
          path: null,
          reward: null
        }, this.queued = [], this.seenRewardIds = new Set, this.showing = !1, this.rewardTimer = null
      }
      get() {
        return this.view
      }
      receivePath(rr) {
        let [Sr, Qr, Wr] = rr;
        const ar = Zr.h[Sr];
        if (void 0 === ar) return;
        const {
          title: jr,
          steps: Ir
        } = Zr.e[ar];
        this.Jp({
          ...this.view,
          path: Qr < Ir.length ? {
            title: jr,
            steps: Ir,
            step: Qr,
            progress: Wr
          } : null
        })
      }
      receiveReward(rr) {
        let [Sr, Qr] = rr;
        const Wr = Zr.j[Sr];
        if (void 0 !== Wr && !this.seenRewardIds.has(Qr)) {
          var ar;
          if (this.seenRewardIds.add(Qr), this.queued.push({
              ...Wr,
              id: Qr
            }), null === this.view.reward) this.Jp({
            ...this.view,
            reward: null !== (ar = this.queued.shift()) && void 0 !== ar ? ar : null
          });
          this.runTimers()
        }
      }
      setShowing(rr) {
        this.showing = rr, this.runTimers()
      }
      dispose() {
        this.clearTimers()
      }
      runTimers() {
        this.showing ? this.view.reward && null === this.rewardTimer && (this.rewardTimer = setTimeout((() => {
          var rr;
          this.rewardTimer = null, this.Jp({
            ...this.view,
            reward: null !== (rr = this.queued.shift()) && void 0 !== rr ? rr : null
          }), this.runTimers()
        }), jr)) : this.clearTimers()
      }
      clearTimers() {
        null !== this.rewardTimer && (clearTimeout(this.rewardTimer), this.rewardTimer = null)
      }
      Jp(rr) {
        this.view = rr, Wr.i.Jp(ar, rr)
      }
    }
  },
  40866: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      makeSmp2ClientGame: () => xr
    });
    var Zr = Qr(72);
    const Wr = "smp2FirstSpawn",
      ar = "smp2Path",
      jr = "smp2Reward";
    var Ir = Qr(1788),
      fr = Qr(3677),
      Er = Qr(3425),
      pr = Qr(40873);

    function xr() {
      let rr = !1,
        Sr = !1,
        xr = "loading",
        mr = !1;
      const Nr = () => {
          !rr || Sr || mr || "loading" === xr || (Sr = !0, (0, Ir.e)({
            id: "smp2.first_spawn",
            value: xr
          }))
        },
        Ur = new pr.h;
      let tr = null;
      return {
        onCreate: () => {
          Qr.e(182).then((() => Qr(54288))).then((rr => {
            let {
              Smp2OnboardingUi: Sr
            } = rr;
            mr || (tr = (0, Er.H)((0, Zr.createElement)(Sr, {
              store: Ur
            })), xr = "cards")
          })).catch((rr => {
            mr || (xr = "no_cards", console.error("SMP: couldn't load the onboarding cards" + ((0, fr.d)(rr) ? " (chunk load failed)" : ""), rr))
          })).finally(Nr)
        },
        onClose: () => {
          var rr;
          "loading" === xr && (xr = "no_cards"), Nr(), mr = !0, null === (rr = tr) || void 0 === rr || rr(), Ur.dispose()
        },
        onReceivedMessageFromServer: (Sr, Qr) => {
          Sr === Wr ? (rr = !0, Nr()) : Sr === ar ? Ur.receivePath(Qr) : Sr === jr && Ur.receiveReward(Qr)
        }
      }
    }
  },
  40876: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      h: () => Zr,
      j: () => Ir,
      n: () => jr
    });
    const Zr = ["starter_path", "portal_first"],
      Wr = "Iron Pickaxe",
      ar = {
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

    function jr(rr) {
      return "logs" === rr.goal ? rr.amount : 1
    }
    const Ir = [{
      title: "Starter Path done!",
      text: "+100 gold. The world is yours.",
      icon: "Gold Coin"
    }, {
      title: "Starter kit",
      text: "A pickaxe, an axe and food to get you going",
      icon: "Wood Pickaxe"
    }, {
      title: "Come back tomorrow",
      text: `A free ${Wr} is waiting for you`,
      icon: Wr
    }, {
      title: "Welcome back!",
      text: `Here's your ${Wr}`,
      icon: Wr
    }, {
      title: "Nice!",
      text: "Keep exploring: the hub's traders buy what you find",
      icon: "Maple Log"
    }];
    Zr.flatMap((rr => [...ar[rr].steps.map((Sr => `${rr}:${Sr.key}`)), `${rr}:done`]))
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);