export const id = 12;
export const ids = [12];
export const modules = {
  38547: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(38555);
    const JB = [0, 0, 0];
    class oB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JB;
        this.pool = BB, this.origin = IB, this.count = 0, this.free = []
      }
      take() {
        var BB;
        const IB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.count++;
        return IB >= this.pool.ah && this.pool.grow(Math.max(2 * this.pool.ah, IB + 1)), this.hide(IB), IB
      }
      release(BB) {
        this.hide(BB), this.free.push(BB)
      }
      write(BB, IB, ZB, JB) {
        const {
          records: oB
        } = this.pool, {
          origin: GB
        } = this, vB = BB * TB.b;
        oB[vB] = IB - GB[0], oB[vB + 1] = ZB - GB[1], oB[vB + 2] = JB - GB[2], oB[vB + TB.f] = 0, this.pool.markDirty(BB)
      }
      hide(BB) {
        this.pool.records[BB * TB.b + TB.f] = 1, this.pool.markDirty(BB)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class GB {
      constructor(BB, IB, ZB) {
        this.api = BB, this.model = IB, this.initialCapacity = ZB, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(BB) {
        let IB = this.kinds.get(BB);
        if (void 0 === IB) {
          const ZB = this.api.createInstancePool({
            ...this.model,
            item: BB
          }, this.initialCapacity);
          null === ZB || void 0 === ZB || ZB.setOrigin(this.origin[0], this.origin[1], this.origin[2]), IB = ZB && new oB(ZB, this.origin), this.kinds.set(BB, IB)
        }
        return IB
      }
      follow(BB) {
        const {
          origin: IB
        } = this;
        if (Math.abs(BB[0] - IB[0]) <= 512 && Math.abs(BB[1] - IB[1]) <= 512 && Math.abs(BB[2] - IB[2]) <= 512) return !1;
        IB[0] = Math.floor(BB[0]), IB[1] = Math.floor(BB[1]), IB[2] = Math.floor(BB[2]);
        for (const ZB of this.kinds.values()) null === ZB || void 0 === ZB || ZB.pool.setOrigin(IB[0], IB[1], IB[2]);
        return !0
      }
      commit() {
        for (const BB of this.kinds.values()) null === BB || void 0 === BB || BB.commit()
      }
      dispose() {
        for (const BB of this.kinds.values()) null === BB || void 0 === BB || BB.dispose();
        this.kinds.clear()
      }
    }
  },
  39350: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => hB
    });
    const TB = "Pipe",
      JB = "Extractor Pipe",
      oB = (new Set([TB, JB]), new Set([TB, JB, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var GB = ZB(38547);
    class vB {
      constructor(BB) {
        this.api = BB, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new GB.e(BB, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(BB) {
        if (BB.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${BB.id} with < 2 waypoints`);
        const IB = this.kinds.kindOf(BB.itemName);
        if (!IB) return void(this.unshown.has(BB.itemName) || (this.unshown.add(BB.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${BB.itemName}"`)));
        this.remove(BB.id);
        const ZB = function(BB) {
          return (BB.waypoints.length - 1) / 2 * 1e3
        }(BB);
        if (Date.now() - BB.startTimeMs > ZB + 2e3) return;
        const TB = IB.take();
        this.items.set(BB.id, {
          kind: IB,
          slot: TB,
          waypoints: BB.waypoints,
          startTimeMs: BB.startTimeMs,
          durationMs: ZB
        })
      }
      onEnd(BB) {
        this.remove(BB.id)
      }
      dU() {
        if (0 === this.items.size) return void this.kinds.commit();
        const BB = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [IB, ZB] of this.items) BB - ZB.startTimeMs > ZB.durationMs + 2e3 ? this.remove(IB) : this.write(ZB, BB);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(BB) {
        const IB = this.items.get(BB);
        IB && (IB.kind.release(IB.slot), this.items.delete(BB))
      }
      write(BB, IB) {
        const ZB = BB.waypoints.length - 1;
        let TB = (IB - BB.startTimeMs) / BB.durationMs;
        TB < 0 ? TB = 0 : TB > 1 && (TB = 1);
        const JB = TB * ZB;
        let oB = Math.floor(JB);
        oB >= ZB && (oB = ZB - 1);
        const GB = JB - oB,
          [vB, kB, cB] = BB.waypoints[oB],
          [nB, hB, zB] = BB.waypoints[oB + 1];
        BB.kind.write(BB.slot, vB + (nB - vB) * GB + .5, kB + (hB - kB) * GB + .5, cB + (zB - cB) * GB + .5)
      }
    }
    const kB = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      cB = new Set(kB);
    class nB {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(BB) {
        this.api = BB, this.pipeVisualizer = new vB(BB)
      }
      onClose() {
        var BB;
        null === (BB = this.pipeVisualizer) || void 0 === BB || BB.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(BB, IB) {
        const {
          pipeVisualizer: ZB
        } = this;
        if (ZB)
          if ("pipeItemSpawnBatch" === BB)
            for (const TB of IB.items) ZB.onSpawn(TB);
          else if ("pipeItemEndBatch" === BB)
          for (const TB of IB.items) ZB.onEnd(TB)
      }
      dU() {
        var BB;
        null === (BB = this.pipeVisualizer) || void 0 === BB || BB.dU()
      }
      onPlayerAttemptAltAction(BB, IB, ZB, TB, JB, GB) {
        var vB;
        if (!cB.has(this.api.getMetaInfo(JB).rootName)) return;
        const kB = null === (vB = this.api.FZB(BB)) || void 0 === vB ? void 0 : vB.name;
        return void 0 !== kB && oB.has(kB) ? "preventAction" : void 0
      }
    }
    const hB = function(BB, IB, ZB) {
      if ("survivalFactory" !== ZB && "survivalFactoryPersistent" !== ZB) {
        return {}
      }
      const TB = new nB;
      return {
        onCreate: BB => {
          TB.onCreate(BB)
        },
        onClose: () => {
          TB.onClose()
        },
        onReceivedMessageFromServer: (BB, IB) => {
          TB.onReceivedMessageFromServer(BB, IB)
        },
        Iz: () => {
          TB.dU()
        },
        altVetoBlocks: kB,
        onPlayerAttemptAltAction: (BB, IB, ZB, JB, oB, GB) => TB.onPlayerAttemptAltAction(BB, IB, ZB, JB, oB, GB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);