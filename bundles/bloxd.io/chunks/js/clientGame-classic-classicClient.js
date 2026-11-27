export const id = 12;
export const ids = [12, 13];
export const modules = {
  39689: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW
    });
    var mW = OW(39696);
    const EW = [0, 0, 0];
    class NW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EW;
        this.pool = WW, this.origin = iW, this.count = 0, this.free = []
      }
      take() {
        var WW;
        const iW = null !== (WW = this.free.pop()) && void 0 !== WW ? WW : this.count++;
        return iW >= this.pool.aZ && this.pool.grow(Math.max(2 * this.pool.aZ, iW + 1)), this.hide(iW), iW
      }
      release(WW) {
        this.hide(WW), this.free.push(WW)
      }
      write(WW, iW, OW, EW) {
        const {
          records: NW
        } = this.pool, {
          origin: PW
        } = this, LW = WW * mW.b;
        NW[LW] = iW - PW[0], NW[LW + 1] = OW - PW[1], NW[LW + 2] = EW - PW[2], NW[LW + mW.d] = 0, this.pool.markDirty(WW)
      }
      hide(WW) {
        this.pool.records[WW * mW.b + mW.d] = 1, this.pool.markDirty(WW)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class PW {
      constructor(WW, iW, OW) {
        this.api = WW, this.model = iW, this.initialCapacity = OW, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(WW) {
        let iW = this.kinds.get(WW);
        if (void 0 === iW) {
          const OW = this.api.createInstancePool({
            ...this.model,
            item: WW
          }, this.initialCapacity);
          null === OW || void 0 === OW || OW.setOrigin(this.origin[0], this.origin[1], this.origin[2]), iW = OW && new NW(OW, this.origin), this.kinds.set(WW, iW)
        }
        return iW
      }
      follow(WW) {
        const {
          origin: iW
        } = this;
        if (Math.abs(WW[0] - iW[0]) <= 512 && Math.abs(WW[1] - iW[1]) <= 512 && Math.abs(WW[2] - iW[2]) <= 512) return !1;
        iW[0] = Math.floor(WW[0]), iW[1] = Math.floor(WW[1]), iW[2] = Math.floor(WW[2]);
        for (const OW of this.kinds.values()) null === OW || void 0 === OW || OW.pool.setOrigin(iW[0], iW[1], iW[2]);
        return !0
      }
      commit() {
        for (const WW of this.kinds.values()) null === WW || void 0 === WW || WW.commit()
      }
      dispose() {
        for (const WW of this.kinds.values()) null === WW || void 0 === WW || WW.dispose();
        this.kinds.clear()
      }
    }
  },
  40522: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => xW
    });
    const mW = "Pipe",
      EW = "Extractor Pipe",
      NW = (new Set([mW, EW]), new Set([mW, EW, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var PW = OW(39689);
    class LW {
      constructor(WW) {
        this.api = WW, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new PW.e(WW, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(WW) {
        if (WW.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${WW.id} with < 2 waypoints`);
        const iW = this.kinds.kindOf(WW.itemName);
        if (!iW) return void(this.unshown.has(WW.itemName) || (this.unshown.add(WW.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${WW.itemName}"`)));
        this.remove(WW.id);
        const OW = function(WW) {
          return (WW.waypoints.length - 1) / 2 * 1e3
        }(WW);
        if (Date.now() - WW.startTimeMs > OW + 2e3) return;
        const mW = iW.take();
        this.items.set(WW.id, {
          kind: iW,
          slot: mW,
          waypoints: WW.waypoints,
          startTimeMs: WW.startTimeMs,
          durationMs: OW
        })
      }
      onEnd(WW) {
        this.remove(WW.id)
      }
      Hk() {
        if (0 === this.items.size) return void this.kinds.commit();
        const WW = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [iW, OW] of this.items) WW - OW.startTimeMs > OW.durationMs + 2e3 ? this.remove(iW) : this.write(OW, WW);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(WW) {
        const iW = this.items.get(WW);
        iW && (iW.kind.release(iW.slot), this.items.delete(WW))
      }
      write(WW, iW) {
        const OW = WW.waypoints.length - 1;
        let mW = (iW - WW.startTimeMs) / WW.durationMs;
        mW < 0 ? mW = 0 : mW > 1 && (mW = 1);
        const EW = mW * OW;
        let NW = Math.floor(EW);
        NW >= OW && (NW = OW - 1);
        const PW = EW - NW,
          [LW, cW, wW] = WW.waypoints[NW],
          [tW, ZW, xW] = WW.waypoints[NW + 1];
        WW.kind.write(WW.slot, LW + (tW - LW) * PW + .5, cW + (ZW - cW) * PW + .5, wW + (xW - wW) * PW + .5)
      }
    }
    const cW = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      wW = new Set(cW);
    class tW {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(WW) {
        this.api = WW, this.pipeVisualizer = new LW(WW)
      }
      onClose() {
        var WW;
        null === (WW = this.pipeVisualizer) || void 0 === WW || WW.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(WW, iW) {
        const {
          pipeVisualizer: OW
        } = this;
        if (OW)
          if ("pipeItemSpawnBatch" === WW)
            for (const mW of iW.items) OW.onSpawn(mW);
          else if ("pipeItemEndBatch" === WW)
          for (const mW of iW.items) OW.onEnd(mW)
      }
      Hk() {
        var WW;
        null === (WW = this.pipeVisualizer) || void 0 === WW || WW.Hk()
      }
      onPlayerAttemptAltAction(WW, iW, OW, mW, EW, PW) {
        var LW;
        if (!wW.has(this.api.getMetaInfo(EW).rootName)) return;
        const cW = null === (LW = this.api.kOW(WW)) || void 0 === LW ? void 0 : LW.name;
        return void 0 !== cW && NW.has(cW) ? "preventAction" : void 0
      }
    }
    var ZW = OW(40525);
    const xW = function(WW, iW, OW) {
      if ("smp2" === OW) return (0, ZW.makeSmp2ClientGame)();
      if ("survivalFactory" !== OW && "survivalFactoryPersistent" !== OW) {
        return {}
      }
      const mW = new tW;
      return {
        onCreate: WW => {
          mW.onCreate(WW)
        },
        onClose: () => {
          mW.onClose()
        },
        onReceivedMessageFromServer: (WW, iW) => {
          mW.onReceivedMessageFromServer(WW, iW)
        },
        hZ: () => {
          mW.Hk()
        },
        altVetoBlocks: cW,
        onPlayerAttemptAltAction: (WW, iW, OW, EW, NW, PW) => mW.onPlayerAttemptAltAction(WW, iW, OW, EW, NW, PW)
      }
    }
  },
  40534: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => PW,
      g: () => LW
    });
    var mW = OW(40542),
      EW = OW(27);
    const NW = "smp2OnboardingView",
      PW = 5e3;
    class LW {
      constructor() {
        this.view = {
          path: null,
          reward: null
        }, this.queued = [], this.seenRewardIds = new Set, this.showing = !1, this.rewardTimer = null
      }
      get() {
        return this.view
      }
      receivePath(WW) {
        let [iW, OW, EW] = WW;
        const NW = mW.g[iW];
        if (void 0 === NW) return;
        const {
          title: PW,
          steps: LW
        } = mW.e[NW];
        this.iZ({
          ...this.view,
          path: OW < LW.length ? {
            title: PW,
            steps: LW,
            step: OW,
            progress: EW
          } : null
        })
      }
      receiveReward(WW) {
        let [iW, OW] = WW;
        const EW = mW.k[iW];
        if (void 0 !== EW && !this.seenRewardIds.has(OW)) {
          var NW;
          if (this.seenRewardIds.add(OW), this.queued.push({
              ...EW,
              id: OW
            }), null === this.view.reward) this.iZ({
            ...this.view,
            reward: null !== (NW = this.queued.shift()) && void 0 !== NW ? NW : null
          });
          this.runTimers()
        }
      }
      setShowing(WW) {
        this.showing = WW, this.runTimers()
      }
      dispose() {
        this.clearTimers()
      }
      runTimers() {
        this.showing ? this.view.reward && null === this.rewardTimer && (this.rewardTimer = setTimeout((() => {
          var WW;
          this.rewardTimer = null, this.iZ({
            ...this.view,
            reward: null !== (WW = this.queued.shift()) && void 0 !== WW ? WW : null
          }), this.runTimers()
        }), PW)) : this.clearTimers()
      }
      clearTimers() {
        null !== this.rewardTimer && (clearTimeout(this.rewardTimer), this.rewardTimer = null)
      }
      iZ(WW) {
        this.view = WW, EW.l.iZ(NW, WW)
      }
    }
  },
  40525: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      makeSmp2ClientGame: () => ZW
    });
    var mW = OW(62);
    const EW = "smp2FirstSpawn",
      NW = "smp2Path",
      PW = "smp2Reward";
    var LW = OW(1770),
      cW = OW(3637),
      wW = OW(3361),
      tW = OW(40534);

    function ZW() {
      let WW = !1,
        iW = !1,
        ZW = "loading",
        xW = !1;
      const lW = () => {
          !WW || iW || xW || "loading" === ZW || (iW = !0, (0, LW.e)({
            id: "smp2.first_spawn",
            value: ZW
          }))
        },
        AW = new tW.g;
      let bW = null;
      return {
        onCreate: () => {
          OW.e(182).then((() => OW(53936))).then((WW => {
            let {
              Smp2OnboardingUi: iW
            } = WW;
            xW || (bW = (0, wW.O)((0, mW.createElement)(iW, {
              store: AW
            })), ZW = "cards")
          })).catch((WW => {
            xW || (ZW = "no_cards", console.error("SMP: couldn't load the onboarding cards" + ((0, cW.e)(WW) ? " (chunk load failed)" : ""), WW))
          })).finally(lW)
        },
        onClose: () => {
          var WW;
          "loading" === ZW && (ZW = "no_cards"), lW(), xW = !0, null === (WW = bW) || void 0 === WW || WW(), AW.dispose()
        },
        onReceivedMessageFromServer: (iW, OW) => {
          iW === EW ? (WW = !0, lW()) : iW === NW ? AW.receivePath(OW) : iW === PW && AW.receiveReward(OW)
        }
      }
    }
  },
  40542: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      g: () => mW,
      k: () => LW,
      m: () => PW
    });
    const mW = ["starter_path", "portal_first"],
      EW = "Iron Pickaxe",
      NW = {
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

    function PW(WW) {
      return "logs" === WW.goal ? WW.amount : 1
    }
    const LW = [{
      title: "Starter Path done!",
      text: "+100 gold. The world is yours.",
      icon: "Gold Coin"
    }, {
      title: "Starter kit",
      text: "A pickaxe, an axe and food to get you going",
      icon: "Wood Pickaxe"
    }, {
      title: "Come back tomorrow",
      text: `A free ${EW} is waiting for you`,
      icon: EW
    }, {
      title: "Welcome back!",
      text: `Here's your ${EW}`,
      icon: EW
    }, {
      title: "Nice!",
      text: "Keep exploring: the hub's traders buy what you find",
      icon: "Maple Log"
    }];
    mW.flatMap((WW => [...NW[WW].steps.map((iW => `${WW}:${iW.key}`)), `${WW}:done`]))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);