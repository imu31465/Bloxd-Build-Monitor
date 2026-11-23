export const id = 12;
export const ids = [12];
export const modules = {
  38494: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(38501);
    const Tk = [0, 0, 0];
    class ik {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tk;
        this.pool = kk, this.origin = Fk, this.count = 0, this.free = []
      }
      take() {
        var kk;
        const Fk = null !== (kk = this.free.pop()) && void 0 !== kk ? kk : this.count++;
        return Fk >= this.pool.St && this.pool.grow(Math.max(2 * this.pool.St, Fk + 1)), this.hide(Fk), Fk
      }
      release(kk) {
        this.hide(kk), this.free.push(kk)
      }
      write(kk, Fk, Ik, Tk) {
        const {
          records: ik
        } = this.pool, {
          origin: yk
        } = this, lk = kk * Xk.d;
        ik[lk] = Fk - yk[0], ik[lk + 1] = Ik - yk[1], ik[lk + 2] = Tk - yk[2], ik[lk + Xk.e] = 0, this.pool.markDirty(kk)
      }
      hide(kk) {
        this.pool.records[kk * Xk.d + Xk.e] = 1, this.pool.markDirty(kk)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class yk {
      constructor(kk, Fk, Ik) {
        this.api = kk, this.model = Fk, this.initialCapacity = Ik, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(kk) {
        let Fk = this.kinds.get(kk);
        if (void 0 === Fk) {
          const Ik = this.api.createInstancePool({
            ...this.model,
            item: kk
          }, this.initialCapacity);
          null === Ik || void 0 === Ik || Ik.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Fk = Ik && new ik(Ik, this.origin), this.kinds.set(kk, Fk)
        }
        return Fk
      }
      follow(kk) {
        const {
          origin: Fk
        } = this;
        if (Math.abs(kk[0] - Fk[0]) <= 512 && Math.abs(kk[1] - Fk[1]) <= 512 && Math.abs(kk[2] - Fk[2]) <= 512) return !1;
        Fk[0] = Math.floor(kk[0]), Fk[1] = Math.floor(kk[1]), Fk[2] = Math.floor(kk[2]);
        for (const Ik of this.kinds.values()) null === Ik || void 0 === Ik || Ik.pool.setOrigin(Fk[0], Fk[1], Fk[2]);
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
  39288: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => tk
    });
    const Xk = "Pipe",
      Tk = "Extractor Pipe",
      ik = (new Set([Xk, Tk]), new Set([Xk, Tk, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var yk = Ik(38494);
    class lk {
      constructor(kk) {
        this.api = kk, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new yk.d(kk, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(kk) {
        if (kk.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${kk.id} with < 2 waypoints`);
        const Fk = this.kinds.kindOf(kk.itemName);
        if (!Fk) return void(this.unshown.has(kk.itemName) || (this.unshown.add(kk.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${kk.itemName}"`)));
        this.remove(kk.id);
        const Ik = function(kk) {
          return (kk.waypoints.length - 1) / 2 * 1e3
        }(kk);
        if (Date.now() - kk.startTimeMs > Ik + 2e3) return;
        const Xk = Fk.take();
        this.items.set(kk.id, {
          kind: Fk,
          slot: Xk,
          waypoints: kk.waypoints,
          startTimeMs: kk.startTimeMs,
          durationMs: Ik
        })
      }
      onEnd(kk) {
        this.remove(kk.id)
      }
      VJ() {
        if (0 === this.items.size) return void this.kinds.commit();
        const kk = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [Fk, Ik] of this.items) kk - Ik.startTimeMs > Ik.durationMs + 2e3 ? this.remove(Fk) : this.write(Ik, kk);
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
        const Ik = kk.waypoints.length - 1;
        let Xk = (Fk - kk.startTimeMs) / kk.durationMs;
        Xk < 0 ? Xk = 0 : Xk > 1 && (Xk = 1);
        const Tk = Xk * Ik;
        let ik = Math.floor(Tk);
        ik >= Ik && (ik = Ik - 1);
        const yk = Tk - ik,
          [lk, ak, qk] = kk.waypoints[ik],
          [Lk, tk, Zk] = kk.waypoints[ik + 1];
        kk.kind.write(kk.slot, lk + (Lk - lk) * yk + .5, ak + (tk - ak) * yk + .5, qk + (Zk - qk) * yk + .5)
      }
    }
    const ak = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      qk = new Set(ak);
    class Lk {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(kk) {
        this.api = kk, this.pipeVisualizer = new lk(kk)
      }
      onClose() {
        var kk;
        null === (kk = this.pipeVisualizer) || void 0 === kk || kk.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(kk, Fk) {
        const {
          pipeVisualizer: Ik
        } = this;
        if (Ik)
          if ("pipeItemSpawnBatch" === kk)
            for (const Xk of Fk.items) Ik.onSpawn(Xk);
          else if ("pipeItemEndBatch" === kk)
          for (const Xk of Fk.items) Ik.onEnd(Xk)
      }
      VJ() {
        var kk;
        null === (kk = this.pipeVisualizer) || void 0 === kk || kk.VJ()
      }
      onPlayerAttemptAltAction(kk, Fk, Ik, Xk, Tk, yk) {
        var lk;
        if (!qk.has(this.api.getMetaInfo(Tk).rootName)) return;
        const ak = null === (lk = this.api.BFk(kk)) || void 0 === lk ? void 0 : lk.name;
        return void 0 !== ak && ik.has(ak) ? "preventAction" : void 0
      }
    }
    const tk = function(kk, Fk, Ik) {
      if ("survivalFactory" !== Ik && "survivalFactoryPersistent" !== Ik) {
        return {}
      }
      const Xk = new Lk;
      return {
        onCreate: kk => {
          Xk.onCreate(kk)
        },
        onClose: () => {
          Xk.onClose()
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          Xk.onReceivedMessageFromServer(kk, Fk)
        },
        Dt: () => {
          Xk.VJ()
        },
        altVetoBlocks: ak,
        onPlayerAttemptAltAction: (kk, Fk, Ik, Tk, ik, yk) => Xk.onPlayerAttemptAltAction(kk, Fk, Ik, Tk, ik, yk)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);