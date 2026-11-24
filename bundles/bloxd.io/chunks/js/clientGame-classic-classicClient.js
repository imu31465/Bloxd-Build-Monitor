export const id = 12;
export const ids = [12];
export const modules = {
  38588: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB
    });
    var QB = zB(38592);
    const nB = [0, 0, 0];
    class dB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nB;
        this.pool = BB, this.origin = jB, this.count = 0, this.free = []
      }
      take() {
        var BB;
        const jB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.count++;
        return jB >= this.pool.Ep && this.pool.grow(Math.max(2 * this.pool.Ep, jB + 1)), this.hide(jB), jB
      }
      release(BB) {
        this.hide(BB), this.free.push(BB)
      }
      write(BB, jB, zB, nB) {
        const {
          records: dB
        } = this.pool, {
          origin: IB
        } = this, NB = BB * QB.c;
        dB[NB] = jB - IB[0], dB[NB + 1] = zB - IB[1], dB[NB + 2] = nB - IB[2], dB[NB + QB.f] = 0, this.pool.markDirty(BB)
      }
      hide(BB) {
        this.pool.records[BB * QB.c + QB.f] = 1, this.pool.markDirty(BB)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class IB {
      constructor(BB, jB, zB) {
        this.api = BB, this.model = jB, this.initialCapacity = zB, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(BB) {
        let jB = this.kinds.get(BB);
        if (void 0 === jB) {
          const zB = this.api.createInstancePool({
            ...this.model,
            item: BB
          }, this.initialCapacity);
          null === zB || void 0 === zB || zB.setOrigin(this.origin[0], this.origin[1], this.origin[2]), jB = zB && new dB(zB, this.origin), this.kinds.set(BB, jB)
        }
        return jB
      }
      follow(BB) {
        const {
          origin: jB
        } = this;
        if (Math.abs(BB[0] - jB[0]) <= 512 && Math.abs(BB[1] - jB[1]) <= 512 && Math.abs(BB[2] - jB[2]) <= 512) return !1;
        jB[0] = Math.floor(BB[0]), jB[1] = Math.floor(BB[1]), jB[2] = Math.floor(BB[2]);
        for (const zB of this.kinds.values()) null === zB || void 0 === zB || zB.pool.setOrigin(jB[0], jB[1], jB[2]);
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
  39365: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => pB
    });
    const QB = "Pipe",
      nB = "Extractor Pipe",
      dB = (new Set([QB, nB]), new Set([QB, nB, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var IB = zB(38588);
    class NB {
      constructor(BB) {
        this.api = BB, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new IB.c(BB, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(BB) {
        if (BB.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${BB.id} with < 2 waypoints`);
        const jB = this.kinds.kindOf(BB.itemName);
        if (!jB) return void(this.unshown.has(BB.itemName) || (this.unshown.add(BB.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${BB.itemName}"`)));
        this.remove(BB.id);
        const zB = function(BB) {
          return (BB.waypoints.length - 1) / 2 * 1e3
        }(BB);
        if (Date.now() - BB.startTimeMs > zB + 2e3) return;
        const QB = jB.take();
        this.items.set(BB.id, {
          kind: jB,
          slot: QB,
          waypoints: BB.waypoints,
          startTimeMs: BB.startTimeMs,
          durationMs: zB
        })
      }
      onEnd(BB) {
        this.remove(BB.id)
      }
      mG() {
        if (0 === this.items.size) return void this.kinds.commit();
        const BB = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [jB, zB] of this.items) BB - zB.startTimeMs > zB.durationMs + 2e3 ? this.remove(jB) : this.write(zB, BB);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(BB) {
        const jB = this.items.get(BB);
        jB && (jB.kind.release(jB.slot), this.items.delete(BB))
      }
      write(BB, jB) {
        const zB = BB.waypoints.length - 1;
        let QB = (jB - BB.startTimeMs) / BB.durationMs;
        QB < 0 ? QB = 0 : QB > 1 && (QB = 1);
        const nB = QB * zB;
        let dB = Math.floor(nB);
        dB >= zB && (dB = zB - 1);
        const IB = nB - dB,
          [NB, uB, UB] = BB.waypoints[dB],
          [aB, pB, rB] = BB.waypoints[dB + 1];
        BB.kind.write(BB.slot, NB + (aB - NB) * IB + .5, uB + (pB - uB) * IB + .5, UB + (rB - UB) * IB + .5)
      }
    }
    const uB = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      UB = new Set(uB);
    class aB {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(BB) {
        this.api = BB, this.pipeVisualizer = new NB(BB)
      }
      onClose() {
        var BB;
        null === (BB = this.pipeVisualizer) || void 0 === BB || BB.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(BB, jB) {
        const {
          pipeVisualizer: zB
        } = this;
        if (zB)
          if ("pipeItemSpawnBatch" === BB)
            for (const QB of jB.items) zB.onSpawn(QB);
          else if ("pipeItemEndBatch" === BB)
          for (const QB of jB.items) zB.onEnd(QB)
      }
      mG() {
        var BB;
        null === (BB = this.pipeVisualizer) || void 0 === BB || BB.mG()
      }
      onPlayerAttemptAltAction(BB, jB, zB, QB, nB, IB) {
        var NB;
        if (!UB.has(this.api.getMetaInfo(nB).rootName)) return;
        const uB = null === (NB = this.api.ZjB(BB)) || void 0 === NB ? void 0 : NB.name;
        return void 0 !== uB && dB.has(uB) ? "preventAction" : void 0
      }
    }
    const pB = function(BB, jB, zB) {
      if ("survivalFactory" !== zB && "survivalFactoryPersistent" !== zB) {
        return {}
      }
      const QB = new aB;
      return {
        onCreate: BB => {
          QB.onCreate(BB)
        },
        onClose: () => {
          QB.onClose()
        },
        onReceivedMessageFromServer: (BB, jB) => {
          QB.onReceivedMessageFromServer(BB, jB)
        },
        vp: () => {
          QB.mG()
        },
        altVetoBlocks: uB,
        onPlayerAttemptAltAction: (BB, jB, zB, nB, dB, IB) => QB.onPlayerAttemptAltAction(BB, jB, zB, nB, dB, IB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);