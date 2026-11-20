export const id = 12;
export const ids = [12];
export const modules = {
  38141: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(38146);
    const tk = [0, 0, 0];
    class ak {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tk;
        this.pool = kk, this.origin = Fk, this.count = 0, this.free = []
      }
      take() {
        var kk;
        const Fk = null !== (kk = this.free.pop()) && void 0 !== kk ? kk : this.count++;
        return Fk >= this.pool.KV && this.pool.grow(Math.max(2 * this.pool.KV, Fk + 1)), this.hide(Fk), Fk
      }
      release(kk) {
        this.hide(kk), this.free.push(kk)
      }
      write(kk, Fk, Bk, tk) {
        const {
          records: ak
        } = this.pool, {
          origin: Xk
        } = this, bk = kk * Rk.c;
        ak[bk] = Fk - Xk[0], ak[bk + 1] = Bk - Xk[1], ak[bk + 2] = tk - Xk[2], ak[bk + Rk.d] = 0, this.pool.markDirty(kk)
      }
      hide(kk) {
        this.pool.records[kk * Rk.c + Rk.d] = 1, this.pool.markDirty(kk)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Xk {
      constructor(kk, Fk, Bk) {
        this.api = kk, this.model = Fk, this.initialCapacity = Bk, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(kk) {
        let Fk = this.kinds.get(kk);
        if (void 0 === Fk) {
          const Bk = this.api.createInstancePool({
            ...this.model,
            item: kk
          }, this.initialCapacity);
          null === Bk || void 0 === Bk || Bk.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Fk = Bk && new ak(Bk, this.origin), this.kinds.set(kk, Fk)
        }
        return Fk
      }
      follow(kk) {
        const {
          origin: Fk
        } = this;
        if (Math.abs(kk[0] - Fk[0]) <= 512 && Math.abs(kk[1] - Fk[1]) <= 512 && Math.abs(kk[2] - Fk[2]) <= 512) return !1;
        Fk[0] = Math.floor(kk[0]), Fk[1] = Math.floor(kk[1]), Fk[2] = Math.floor(kk[2]);
        for (const Bk of this.kinds.values()) null === Bk || void 0 === Bk || Bk.pool.setOrigin(Fk[0], Fk[1], Fk[2]);
        return !0
      }
      commit() {
        for (const kk of this.kinds.values()) null === kk || void 0 === kk || kk.commit()
      }
      dispose() {
        for (const kk of this.kinds.values()) null === kk || void 0 === kk || kk.dispose();
        this.kinds.clear()
      }
    }
  },
  38876: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => Vk
    });
    const Rk = "Pipe",
      tk = "Extractor Pipe",
      ak = (new Set([Rk, tk]), new Set([Rk, tk, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var Xk = Bk(38141);
    class bk {
      constructor(kk) {
        this.api = kk, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Xk.d(kk, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(kk) {
        if (kk.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${kk.id} with < 2 waypoints`);
        const Fk = this.kinds.kindOf(kk.itemName);
        if (!Fk) return void(this.unshown.has(kk.itemName) || (this.unshown.add(kk.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${kk.itemName}"`)));
        this.remove(kk.id);
        const Bk = function(kk) {
          return (kk.waypoints.length - 1) / 2 * 1e3
        }(kk);
        if (Date.now() - kk.startTimeMs > Bk + 2e3) return;
        const Rk = Fk.take();
        this.items.set(kk.id, {
          kind: Fk,
          slot: Rk,
          waypoints: kk.waypoints,
          startTimeMs: kk.startTimeMs,
          durationMs: Bk
        })
      }
      onEnd(kk) {
        this.remove(kk.id)
      }
      EW() {
        if (0 === this.items.size) return void this.kinds.commit();
        const kk = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [Fk, Bk] of this.items) kk - Bk.startTimeMs > Bk.durationMs + 2e3 ? this.remove(Fk) : this.write(Bk, kk);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(kk) {
        const Fk = this.items.get(kk);
        Fk && (Fk.kind.release(Fk.slot), this.items.delete(kk))
      }
      write(kk, Fk) {
        const Bk = kk.waypoints.length - 1;
        let Rk = (Fk - kk.startTimeMs) / kk.durationMs;
        Rk < 0 ? Rk = 0 : Rk > 1 && (Rk = 1);
        const tk = Rk * Bk;
        let ak = Math.floor(tk);
        ak >= Bk && (ak = Bk - 1);
        const Xk = tk - ak,
          [bk, wk, dk] = kk.waypoints[ak],
          [sk, Vk, Jk] = kk.waypoints[ak + 1];
        kk.kind.write(kk.slot, bk + (sk - bk) * Xk + .5, wk + (Vk - wk) * Xk + .5, dk + (Jk - dk) * Xk + .5)
      }
    }
    const wk = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      dk = new Set(wk);
    class sk {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(kk) {
        this.api = kk, this.pipeVisualizer = new bk(kk)
      }
      onClose() {
        var kk;
        null === (kk = this.pipeVisualizer) || void 0 === kk || kk.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(kk, Fk) {
        const {
          pipeVisualizer: Bk
        } = this;
        if (Bk)
          if ("pipeItemSpawnBatch" === kk)
            for (const Rk of Fk.items) Bk.onSpawn(Rk);
          else if ("pipeItemEndBatch" === kk)
          for (const Rk of Fk.items) Bk.onEnd(Rk)
      }
      EW() {
        var kk;
        null === (kk = this.pipeVisualizer) || void 0 === kk || kk.EW()
      }
      onPlayerAttemptAltAction(kk, Fk, Bk, Rk, tk, Xk) {
        var bk;
        if (!dk.has(this.api.getMetaInfo(tk).rootName)) return;
        const wk = null === (bk = this.api.LFk(kk)) || void 0 === bk ? void 0 : bk.name;
        return void 0 !== wk && ak.has(wk) ? "preventAction" : void 0
      }
    }
    const Vk = function(kk, Fk, Bk) {
      if ("survivalFactory" !== Bk && "survivalFactoryPersistent" !== Bk) {
        return {}
      }
      const Rk = new sk;
      return {
        onCreate: kk => {
          Rk.onCreate(kk)
        },
        onClose: () => {
          Rk.onClose()
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          Rk.onReceivedMessageFromServer(kk, Fk)
        },
        yJ: () => {
          Rk.EW()
        },
        altVetoBlocks: wk,
        onPlayerAttemptAltAction: (kk, Fk, Bk, tk, ak, Xk) => Rk.onPlayerAttemptAltAction(kk, Fk, Bk, tk, ak, Xk)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);