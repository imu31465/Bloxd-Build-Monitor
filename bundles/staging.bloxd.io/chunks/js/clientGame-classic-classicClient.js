export const id = 12;
export const ids = [12];
export const modules = {
  38048: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(38052);
    const pU = [0, 0, 0];
    class EU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pU;
        this.pool = UU, this.origin = RU, this.count = 0, this.free = []
      }
      take() {
        var UU;
        const RU = null !== (UU = this.free.pop()) && void 0 !== UU ? UU : this.count++;
        return RU >= this.pool.hG && this.pool.grow(Math.max(2 * this.pool.hG, RU + 1)), this.hide(RU), RU
      }
      release(UU) {
        this.hide(UU), this.free.push(UU)
      }
      write(UU, RU, gU, pU) {
        const {
          records: EU
        } = this.pool, {
          origin: PU
        } = this, TU = UU * tU.d;
        EU[TU] = RU - PU[0], EU[TU + 1] = gU - PU[1], EU[TU + 2] = pU - PU[2], EU[TU + tU.g] = 0, this.pool.markDirty(UU)
      }
      hide(UU) {
        this.pool.records[UU * tU.d + tU.g] = 1, this.pool.markDirty(UU)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class PU {
      constructor(UU, RU, gU) {
        this.api = UU, this.model = RU, this.initialCapacity = gU, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(UU) {
        let RU = this.kinds.get(UU);
        if (void 0 === RU) {
          const gU = this.api.createInstancePool({
            ...this.model,
            item: UU
          }, this.initialCapacity);
          null === gU || void 0 === gU || gU.setOrigin(this.origin[0], this.origin[1], this.origin[2]), RU = gU && new EU(gU, this.origin), this.kinds.set(UU, RU)
        }
        return RU
      }
      follow(UU) {
        const {
          origin: RU
        } = this;
        if (Math.abs(UU[0] - RU[0]) <= 512 && Math.abs(UU[1] - RU[1]) <= 512 && Math.abs(UU[2] - RU[2]) <= 512) return !1;
        RU[0] = Math.floor(UU[0]), RU[1] = Math.floor(UU[1]), RU[2] = Math.floor(UU[2]);
        for (const gU of this.kinds.values()) null === gU || void 0 === gU || gU.pool.setOrigin(RU[0], RU[1], RU[2]);
        return !0
      }
      commit() {
        for (const UU of this.kinds.values()) null === UU || void 0 === UU || UU.commit()
      }
      dispose() {
        for (const UU of this.kinds.values()) null === UU || void 0 === UU || UU.dispose();
        this.kinds.clear()
      }
    }
  },
  38814: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => GU
    });
    const tU = "Pipe",
      pU = "Extractor Pipe",
      EU = (new Set([tU, pU]), new Set([tU, pU, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var PU = gU(38048);
    class TU {
      constructor(UU) {
        this.api = UU, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new PU.d(UU, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(UU) {
        if (UU.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${UU.id} with < 2 waypoints`);
        const RU = this.kinds.kindOf(UU.itemName);
        if (!RU) return void(this.unshown.has(UU.itemName) || (this.unshown.add(UU.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${UU.itemName}"`)));
        this.remove(UU.id);
        const gU = function(UU) {
          return (UU.waypoints.length - 1) / 2 * 1e3
        }(UU);
        if (Date.now() - UU.startTimeMs > gU + 2e3) return;
        const tU = RU.take();
        this.items.set(UU.id, {
          kind: RU,
          slot: tU,
          waypoints: UU.waypoints,
          startTimeMs: UU.startTimeMs,
          durationMs: gU
        })
      }
      onEnd(UU) {
        this.remove(UU.id)
      }
      Bx() {
        if (0 === this.items.size) return void this.kinds.commit();
        const UU = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [RU, gU] of this.items) UU - gU.startTimeMs > gU.durationMs + 2e3 ? this.remove(RU) : this.write(gU, UU);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(UU) {
        const RU = this.items.get(UU);
        RU && (RU.kind.release(RU.slot), this.items.delete(UU))
      }
      write(UU, RU) {
        const gU = UU.waypoints.length - 1;
        let tU = (RU - UU.startTimeMs) / UU.durationMs;
        tU < 0 ? tU = 0 : tU > 1 && (tU = 1);
        const pU = tU * gU;
        let EU = Math.floor(pU);
        EU >= gU && (EU = gU - 1);
        const PU = pU - EU,
          [TU, qU, KU] = UU.waypoints[EU],
          [cU, GU, jU] = UU.waypoints[EU + 1];
        UU.kind.write(UU.slot, TU + (cU - TU) * PU + .5, qU + (GU - qU) * PU + .5, KU + (jU - KU) * PU + .5)
      }
    }
    const qU = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      KU = new Set(qU);
    class cU {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(UU) {
        this.api = UU, this.pipeVisualizer = new TU(UU)
      }
      onClose() {
        var UU;
        null === (UU = this.pipeVisualizer) || void 0 === UU || UU.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(UU, RU) {
        const {
          pipeVisualizer: gU
        } = this;
        if (gU)
          if ("pipeItemSpawnBatch" === UU)
            for (const tU of RU.items) gU.onSpawn(tU);
          else if ("pipeItemEndBatch" === UU)
          for (const tU of RU.items) gU.onEnd(tU)
      }
      Bx() {
        var UU;
        null === (UU = this.pipeVisualizer) || void 0 === UU || UU.Bx()
      }
      onPlayerAttemptAltAction(UU, RU, gU, tU, pU, PU) {
        var TU;
        if (!KU.has(this.api.getMetaInfo(pU).rootName)) return;
        const qU = null === (TU = this.api.QRU(UU)) || void 0 === TU ? void 0 : TU.name;
        return void 0 !== qU && EU.has(qU) ? "preventAction" : void 0
      }
    }
    const GU = function(UU, RU, gU) {
      if ("survivalFactory" !== gU && "survivalFactoryPersistent" !== gU) {
        return {}
      }
      const tU = new cU;
      return {
        onCreate: UU => {
          tU.onCreate(UU)
        },
        onClose: () => {
          tU.onClose()
        },
        onReceivedMessageFromServer: (UU, RU) => {
          tU.onReceivedMessageFromServer(UU, RU)
        },
        HG: () => {
          tU.Bx()
        },
        altVetoBlocks: qU,
        onPlayerAttemptAltAction: (UU, RU, gU, pU, EU, PU) => tU.onPlayerAttemptAltAction(UU, RU, gU, pU, EU, PU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);