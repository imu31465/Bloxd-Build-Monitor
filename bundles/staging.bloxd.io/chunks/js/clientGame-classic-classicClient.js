export const id = 12;
export const ids = [12, 13];
export const modules = {
  39686: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(39689);
    const tR = [0, 0, 0];
    class uR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR;
        this.pool = RR, this.origin = JR, this.count = 0, this.free = []
      }
      take() {
        var RR;
        const JR = null !== (RR = this.free.pop()) && void 0 !== RR ? RR : this.count++;
        return JR >= this.pool.hK && this.pool.grow(Math.max(2 * this.pool.hK, JR + 1)), this.hide(JR), JR
      }
      release(RR) {
        this.hide(RR), this.free.push(RR)
      }
      write(RR, JR, GR, tR) {
        const {
          records: uR
        } = this.pool, {
          origin: ZR
        } = this, qR = RR * yR.c;
        uR[qR] = JR - ZR[0], uR[qR + 1] = GR - ZR[1], uR[qR + 2] = tR - ZR[2], uR[qR + yR.f] = 0, this.pool.markDirty(RR)
      }
      hide(RR) {
        this.pool.records[RR * yR.c + yR.f] = 1, this.pool.markDirty(RR)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class ZR {
      constructor(RR, JR, GR) {
        this.api = RR, this.model = JR, this.initialCapacity = GR, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(RR) {
        let JR = this.kinds.get(RR);
        if (void 0 === JR) {
          const GR = this.api.createInstancePool({
            ...this.model,
            item: RR
          }, this.initialCapacity);
          null === GR || void 0 === GR || GR.setOrigin(this.origin[0], this.origin[1], this.origin[2]), JR = GR && new uR(GR, this.origin), this.kinds.set(RR, JR)
        }
        return JR
      }
      follow(RR) {
        const {
          origin: JR
        } = this;
        if (Math.abs(RR[0] - JR[0]) <= 512 && Math.abs(RR[1] - JR[1]) <= 512 && Math.abs(RR[2] - JR[2]) <= 512) return !1;
        JR[0] = Math.floor(RR[0]), JR[1] = Math.floor(RR[1]), JR[2] = Math.floor(RR[2]);
        for (const GR of this.kinds.values()) null === GR || void 0 === GR || GR.pool.setOrigin(JR[0], JR[1], JR[2]);
        return !0
      }
      commit() {
        for (const RR of this.kinds.values()) null === RR || void 0 === RR || RR.commit()
      }
      dispose() {
        for (const RR of this.kinds.values()) null === RR || void 0 === RR || RR.dispose();
        this.kinds.clear()
      }
    }
  },
  40546: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => wR
    });
    const yR = "Pipe",
      tR = "Extractor Pipe",
      uR = (new Set([yR, tR]), new Set([yR, tR, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var ZR = GR(39686);
    class qR {
      constructor(RR) {
        this.api = RR, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new ZR.b(RR, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(RR) {
        if (RR.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${RR.id} with < 2 waypoints`);
        const JR = this.kinds.kindOf(RR.itemName);
        if (!JR) return void(this.unshown.has(RR.itemName) || (this.unshown.add(RR.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${RR.itemName}"`)));
        this.remove(RR.id);
        const GR = function(RR) {
          return (RR.waypoints.length - 1) / 2 * 1e3
        }(RR);
        if (Date.now() - RR.startTimeMs > GR + 2e3) return;
        const yR = JR.take();
        this.items.set(RR.id, {
          kind: JR,
          slot: yR,
          waypoints: RR.waypoints,
          startTimeMs: RR.startTimeMs,
          durationMs: GR
        })
      }
      onEnd(RR) {
        this.remove(RR.id)
      }
      UW() {
        if (0 === this.items.size) return void this.kinds.commit();
        const RR = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [JR, GR] of this.items) RR - GR.startTimeMs > GR.durationMs + 2e3 ? this.remove(JR) : this.write(GR, RR);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(RR) {
        const JR = this.items.get(RR);
        JR && (JR.kind.release(JR.slot), this.items.delete(RR))
      }
      write(RR, JR) {
        const GR = RR.waypoints.length - 1;
        let yR = (JR - RR.startTimeMs) / RR.durationMs;
        yR < 0 ? yR = 0 : yR > 1 && (yR = 1);
        const tR = yR * GR;
        let uR = Math.floor(tR);
        uR >= GR && (uR = GR - 1);
        const ZR = tR - uR,
          [qR, iR, fR] = RR.waypoints[uR],
          [VR, KR, wR] = RR.waypoints[uR + 1];
        RR.kind.write(RR.slot, qR + (VR - qR) * ZR + .5, iR + (KR - iR) * ZR + .5, fR + (wR - fR) * ZR + .5)
      }
    }
    const iR = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      fR = new Set(iR);
    class VR {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(RR) {
        this.api = RR, this.pipeVisualizer = new qR(RR)
      }
      onClose() {
        var RR;
        null === (RR = this.pipeVisualizer) || void 0 === RR || RR.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(RR, JR) {
        const {
          pipeVisualizer: GR
        } = this;
        if (GR)
          if ("pipeItemSpawnBatch" === RR)
            for (const yR of JR.items) GR.onSpawn(yR);
          else if ("pipeItemEndBatch" === RR)
          for (const yR of JR.items) GR.onEnd(yR)
      }
      UW() {
        var RR;
        null === (RR = this.pipeVisualizer) || void 0 === RR || RR.UW()
      }
      onPlayerAttemptAltAction(RR, JR, GR, yR, tR, ZR) {
        var qR;
        if (!fR.has(this.api.getMetaInfo(tR).rootName)) return;
        const iR = null === (qR = this.api.uyR(RR)) || void 0 === qR ? void 0 : qR.name;
        return void 0 !== iR && uR.has(iR) ? "preventAction" : void 0
      }
    }
    var KR = GR(40555);
    const wR = function(RR, JR, GR) {
      if ("smp2" === GR) return (0, KR.makeSmp2ClientGame)();
      if ("survivalFactory" !== GR && "survivalFactoryPersistent" !== GR) {
        return {}
      }
      const yR = new VR;
      return {
        onCreate: RR => {
          yR.onCreate(RR)
        },
        onClose: () => {
          yR.onClose()
        },
        onReceivedMessageFromServer: (RR, JR) => {
          yR.onReceivedMessageFromServer(RR, JR)
        },
        gK: () => {
          yR.UW()
        },
        altVetoBlocks: iR,
        onPlayerAttemptAltAction: (RR, JR, GR, tR, uR, ZR) => yR.onPlayerAttemptAltAction(RR, JR, GR, tR, uR, ZR)
      }
    }
  },
  40562: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      i: () => ZR,
      l: () => qR
    });
    var yR = GR(40564),
      tR = GR(32);
    const uR = "smp2OnboardingView",
      ZR = 5e3;
    class qR {
      constructor() {
        this.view = {
          path: null,
          reward: null
        }, this.queued = [], this.seenRewardIds = new Set, this.showing = !1, this.rewardTimer = null
      }
      get() {
        return this.view
      }
      receivePath(RR) {
        let [JR, GR, tR] = RR;
        const uR = yR.e[JR];
        if (void 0 === uR) return;
        const {
          title: ZR,
          steps: qR
        } = yR.c[uR];
        this.JK({
          ...this.view,
          path: GR < qR.length ? {
            title: ZR,
            steps: qR,
            step: GR,
            progress: tR
          } : null
        })
      }
      receiveReward(RR) {
        let [JR, GR] = RR;
        const tR = yR.h[JR];
        if (void 0 !== tR && !this.seenRewardIds.has(GR)) {
          var uR;
          if (this.seenRewardIds.add(GR), this.queued.push({
              ...tR,
              id: GR
            }), null === this.view.reward) this.JK({
            ...this.view,
            reward: null !== (uR = this.queued.shift()) && void 0 !== uR ? uR : null
          });
          this.runTimers()
        }
      }
      setShowing(RR) {
        this.showing = RR, this.runTimers()
      }
      dispose() {
        this.clearTimers()
      }
      runTimers() {
        this.showing ? this.view.reward && null === this.rewardTimer && (this.rewardTimer = setTimeout((() => {
          var RR;
          this.rewardTimer = null, this.JK({
            ...this.view,
            reward: null !== (RR = this.queued.shift()) && void 0 !== RR ? RR : null
          }), this.runTimers()
        }), ZR)) : this.clearTimers()
      }
      clearTimers() {
        null !== this.rewardTimer && (clearTimeout(this.rewardTimer), this.rewardTimer = null)
      }
      JK(RR) {
        this.view = RR, tR.n.JK(uR, RR)
      }
    }
  },
  40555: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      makeSmp2ClientGame: () => KR
    });
    var yR = GR(66);
    const tR = "smp2FirstSpawn",
      uR = "smp2Path",
      ZR = "smp2Reward";
    var qR = GR(1841),
      iR = GR(3731),
      fR = GR(3494),
      VR = GR(40562);

    function KR() {
      let RR = !1,
        JR = !1,
        KR = "loading",
        wR = !1;
      const rR = () => {
          !RR || JR || wR || "loading" === KR || (JR = !0, (0, qR.c)({
            id: "smp2.first_spawn",
            value: KR
          }))
        },
        eR = new VR.l;
      let aR = null;
      return {
        onCreate: () => {
          GR.e(182).then((() => GR(53781))).then((RR => {
            let {
              Smp2OnboardingUi: JR
            } = RR;
            wR || (aR = (0, fR.G)((0, yR.createElement)(JR, {
              store: eR
            })), KR = "cards")
          })).catch((RR => {
            wR || (KR = "no_cards", console.error("SMP: couldn't load the onboarding cards" + ((0, iR.e)(RR) ? " (chunk load failed)" : ""), RR))
          })).finally(rR)
        },
        onClose: () => {
          var RR;
          "loading" === KR && (KR = "no_cards"), rR(), wR = !0, null === (RR = aR) || void 0 === RR || RR(), eR.dispose()
        },
        onReceivedMessageFromServer: (JR, GR) => {
          JR === tR ? (RR = !0, rR()) : JR === uR ? eR.receivePath(GR) : JR === ZR && eR.receiveReward(GR)
        }
      }
    }
  },
  40564: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => yR,
      h: () => qR,
      k: () => ZR
    });
    const yR = ["starter_path", "portal_first"],
      tR = "Iron Pickaxe",
      uR = {
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

    function ZR(RR) {
      return "logs" === RR.goal ? RR.amount : 1
    }
    const qR = [{
      title: "Starter Path done!",
      text: "+100 gold. The world is yours.",
      icon: "Gold Coin"
    }, {
      title: "Starter kit",
      text: "A pickaxe, an axe and food to get you going",
      icon: "Wood Pickaxe"
    }, {
      title: "Come back tomorrow",
      text: `A free ${tR} is waiting for you`,
      icon: tR
    }, {
      title: "Welcome back!",
      text: `Here's your ${tR}`,
      icon: tR
    }, {
      title: "Nice!",
      text: "Keep exploring: the hub's traders buy what you find",
      icon: "Maple Log"
    }];
    yR.flatMap((RR => [...uR[RR].steps.map((JR => `${RR}:${JR.key}`)), `${RR}:done`]))
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);