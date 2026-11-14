export const id = 11;
export const ids = [11];
export const modules = {
  36555: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(36563);
    const CW = [0, 0, 0];
    class zR {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CW;
        this.pool = WW, this.origin = RW, this.count = 0, this.free = []
      }
      take() {
        var WW;
        const RW = null !== (WW = this.free.pop()) && void 0 !== WW ? WW : this.count++;
        return RW >= this.pool.aR && this.pool.grow(Math.max(2 * this.pool.aR, RW + 1)), this.hide(RW), RW
      }
      release(WW) {
        this.hide(WW), this.free.push(WW)
      }
      write(WW, RW, MW, CW) {
        const {
          records: zR
        } = this.pool, {
          origin: AW
        } = this, bR = WW * wW.d;
        zR[bR] = RW - AW[0], zR[bR + 1] = MW - AW[1], zR[bR + 2] = CW - AW[2], zR[bR + wW.e] = 0, this.pool.markDirty(WW)
      }
      hide(WW) {
        this.pool.records[WW * wW.d + wW.e] = 1, this.pool.markDirty(WW)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class AW {
      constructor(WW, RW, MW) {
        this.api = WW, this.model = RW, this.initialCapacity = MW, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(WW) {
        let RW = this.kinds.get(WW);
        if (void 0 === RW) {
          const MW = this.api.createInstancePool({
            ...this.model,
            item: WW
          }, this.initialCapacity);
          null === MW || void 0 === MW || MW.setOrigin(this.origin[0], this.origin[1], this.origin[2]), RW = MW && new zR(MW, this.origin), this.kinds.set(WW, RW)
        }
        return RW
      }
      follow(WW) {
        const {
          origin: RW
        } = this;
        if (Math.abs(WW[0] - RW[0]) <= 512 && Math.abs(WW[1] - RW[1]) <= 512 && Math.abs(WW[2] - RW[2]) <= 512) return !1;
        RW[0] = Math.floor(WW[0]), RW[1] = Math.floor(WW[1]), RW[2] = Math.floor(WW[2]);
        for (const MW of this.kinds.values()) null === MW || void 0 === MW || MW.pool.setOrigin(RW[0], RW[1], RW[2]);
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
  37251: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => BW
    });
    const wW = "Pipe",
      CW = "Extractor Pipe",
      zR = (new Set([wW, CW]), new Set([wW, CW, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var AW = MW(36555);
    class bR {
      constructor(WW) {
        this.api = WW, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new AW.b(WW, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(WW) {
        if (WW.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${WW.id} with < 2 waypoints`);
        const RW = this.kinds.kindOf(WW.itemName);
        if (!RW) return void(this.unshown.has(WW.itemName) || (this.unshown.add(WW.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${WW.itemName}"`)));
        this.remove(WW.id);
        const MW = function(WW) {
          return (WW.waypoints.length - 1) / 2 * 1e3
        }(WW);
        if (Date.now() - WW.startTimeMs > MW + 2e3) return;
        const wW = RW.take();
        this.items.set(WW.id, {
          kind: RW,
          slot: wW,
          waypoints: WW.waypoints,
          startTimeMs: WW.startTimeMs,
          durationMs: MW
        })
      }
      onEnd(WW) {
        this.remove(WW.id)
      }
      SF() {
        if (0 === this.items.size) return void this.kinds.commit();
        const WW = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [RW, MW] of this.items) WW - MW.startTimeMs > MW.durationMs + 2e3 ? this.remove(RW) : this.write(MW, WW);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(WW) {
        const RW = this.items.get(WW);
        RW && (RW.kind.release(RW.slot), this.items.delete(WW))
      }
      write(WW, RW) {
        const MW = WW.waypoints.length - 1;
        let wW = (RW - WW.startTimeMs) / WW.durationMs;
        wW < 0 ? wW = 0 : wW > 1 && (wW = 1);
        const CW = wW * MW;
        let zR = Math.floor(CW);
        zR >= MW && (zR = MW - 1);
        const AW = CW - zR,
          [bR, yR, NW] = WW.waypoints[zR],
          [eW, BW, tR] = WW.waypoints[zR + 1];
        WW.kind.write(WW.slot, bR + (eW - bR) * AW + .5, yR + (BW - yR) * AW + .5, NW + (tR - NW) * AW + .5)
      }
    }
    const yR = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      NW = new Set(yR);
    class eW {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(WW) {
        this.api = WW, this.pipeVisualizer = new bR(WW)
      }
      onClose() {
        var WW;
        null === (WW = this.pipeVisualizer) || void 0 === WW || WW.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(WW, RW) {
        const {
          pipeVisualizer: MW
        } = this;
        if (MW)
          if ("pipeItemSpawnBatch" === WW)
            for (const wW of RW.items) MW.onSpawn(wW);
          else if ("pipeItemEndBatch" === WW)
          for (const wW of RW.items) MW.onEnd(wW)
      }
      SF() {
        var WW;
        null === (WW = this.pipeVisualizer) || void 0 === WW || WW.SF()
      }
      onPlayerAttemptAltAction(WW, RW, MW, wW, CW, AW) {
        var bR;
        if (!NW.has(this.api.getMetaInfo(CW).rootName)) return;
        const yR = null === (bR = this.api.HbW(WW)) || void 0 === bR ? void 0 : bR.name;
        return void 0 !== yR && zR.has(yR) ? "preventAction" : void 0
      }
    }
    const BW = function(WW, RW, MW) {
      if ("survivalFactory" !== MW && "survivalFactoryPersistent" !== MW) {
        return {}
      }
      const wW = new eW;
      return {
        onCreate: WW => {
          wW.onCreate(WW)
        },
        onClose: () => {
          wW.onClose()
        },
        onReceivedMessageFromServer: (WW, RW) => {
          wW.onReceivedMessageFromServer(WW, RW)
        },
        WR: () => {
          wW.SF()
        },
        altVetoBlocks: yR,
        onPlayerAttemptAltAction: (WW, RW, MW, CW, zR, AW) => wW.onPlayerAttemptAltAction(WW, RW, MW, CW, zR, AW)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);