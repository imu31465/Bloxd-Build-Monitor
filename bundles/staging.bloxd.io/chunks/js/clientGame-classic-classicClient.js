export const id = 12;
export const ids = [12];
export const modules = {
  37450: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(37458);
    const yB = [0, 0, 0];
    class pB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yB;
        this.pool = BB, this.origin = TB, this.count = 0, this.free = []
      }
      take() {
        var BB;
        const TB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.count++;
        return TB >= this.pool.Kk && this.pool.grow(Math.max(2 * this.pool.Kk, TB + 1)), this.hide(TB), TB
      }
      release(BB) {
        this.hide(BB), this.free.push(BB)
      }
      write(BB, TB, dB, yB) {
        const {
          records: pB
        } = this.pool, {
          origin: lB
        } = this, JB = BB * VB.e;
        pB[JB] = TB - lB[0], pB[JB + 1] = dB - lB[1], pB[JB + 2] = yB - lB[2], pB[JB + VB.h] = 0, this.pool.markDirty(BB)
      }
      hide(BB) {
        this.pool.records[BB * VB.e + VB.h] = 1, this.pool.markDirty(BB)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class lB {
      constructor(BB, TB, dB) {
        this.api = BB, this.model = TB, this.initialCapacity = dB, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(BB) {
        let TB = this.kinds.get(BB);
        if (void 0 === TB) {
          const dB = this.api.createInstancePool({
            ...this.model,
            item: BB
          }, this.initialCapacity);
          null === dB || void 0 === dB || dB.setOrigin(this.origin[0], this.origin[1], this.origin[2]), TB = dB && new pB(dB, this.origin), this.kinds.set(BB, TB)
        }
        return TB
      }
      follow(BB) {
        const {
          origin: TB
        } = this;
        if (Math.abs(BB[0] - TB[0]) <= 512 && Math.abs(BB[1] - TB[1]) <= 512 && Math.abs(BB[2] - TB[2]) <= 512) return !1;
        TB[0] = Math.floor(BB[0]), TB[1] = Math.floor(BB[1]), TB[2] = Math.floor(BB[2]);
        for (const dB of this.kinds.values()) null === dB || void 0 === dB || dB.pool.setOrigin(TB[0], TB[1], TB[2]);
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
  38208: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => kB
    });
    const VB = "Pipe",
      yB = "Extractor Pipe",
      pB = (new Set([VB, yB]), new Set([VB, yB, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var lB = dB(37450);
    class JB {
      constructor(BB) {
        this.api = BB, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new lB.c(BB, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(BB) {
        if (BB.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${BB.id} with < 2 waypoints`);
        const TB = this.kinds.kindOf(BB.itemName);
        if (!TB) return void(this.unshown.has(BB.itemName) || (this.unshown.add(BB.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${BB.itemName}"`)));
        this.remove(BB.id);
        const dB = function(BB) {
          return (BB.waypoints.length - 1) / 2 * 1e3
        }(BB);
        if (Date.now() - BB.startTimeMs > dB + 2e3) return;
        const VB = TB.take();
        this.items.set(BB.id, {
          kind: TB,
          slot: VB,
          waypoints: BB.waypoints,
          startTimeMs: BB.startTimeMs,
          durationMs: dB
        })
      }
      onEnd(BB) {
        this.remove(BB.id)
      }
      WE() {
        if (0 === this.items.size) return void this.kinds.commit();
        const BB = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [TB, dB] of this.items) BB - dB.startTimeMs > dB.durationMs + 2e3 ? this.remove(TB) : this.write(dB, BB);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(BB) {
        const TB = this.items.get(BB);
        TB && (TB.kind.release(TB.slot), this.items.delete(BB))
      }
      write(BB, TB) {
        const dB = BB.waypoints.length - 1;
        let VB = (TB - BB.startTimeMs) / BB.durationMs;
        VB < 0 ? VB = 0 : VB > 1 && (VB = 1);
        const yB = VB * dB;
        let pB = Math.floor(yB);
        pB >= dB && (pB = dB - 1);
        const lB = yB - pB,
          [JB, YB, gB] = BB.waypoints[pB],
          [oB, kB, LB] = BB.waypoints[pB + 1];
        BB.kind.write(BB.slot, JB + (oB - JB) * lB + .5, YB + (kB - YB) * lB + .5, gB + (LB - gB) * lB + .5)
      }
    }
    const YB = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      gB = new Set(YB);
    class oB {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(BB) {
        this.api = BB, this.pipeVisualizer = new JB(BB)
      }
      onClose() {
        var BB;
        null === (BB = this.pipeVisualizer) || void 0 === BB || BB.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(BB, TB) {
        const {
          pipeVisualizer: dB
        } = this;
        if (dB)
          if ("pipeItemSpawnBatch" === BB)
            for (const VB of TB.items) dB.onSpawn(VB);
          else if ("pipeItemEndBatch" === BB)
          for (const VB of TB.items) dB.onEnd(VB)
      }
      WE() {
        var BB;
        null === (BB = this.pipeVisualizer) || void 0 === BB || BB.WE()
      }
      onPlayerAttemptAltAction(BB, TB, dB, VB, yB, lB) {
        var JB;
        if (!gB.has(this.api.getMetaInfo(yB).rootName)) return;
        const YB = null === (JB = this.api.gdB(BB)) || void 0 === JB ? void 0 : JB.name;
        return void 0 !== YB && pB.has(YB) ? "preventAction" : void 0
      }
    }
    const kB = function(BB, TB, dB) {
      if ("survivalFactory" !== dB && "survivalFactoryPersistent" !== dB) {
        return {}
      }
      const VB = new oB;
      return {
        onCreate: BB => {
          VB.onCreate(BB)
        },
        onClose: () => {
          VB.onClose()
        },
        onReceivedMessageFromServer: (BB, TB) => {
          VB.onReceivedMessageFromServer(BB, TB)
        },
        dL: () => {
          VB.WE()
        },
        altVetoBlocks: YB,
        onPlayerAttemptAltAction: (BB, TB, dB, yB, pB, lB) => VB.onPlayerAttemptAltAction(BB, TB, dB, yB, pB, lB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);