export const id = 12;
export const ids = [12];
export const modules = {
  38029: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv
    });
    var hv = Pv(38036);
    const Sv = [0, 0, 0];
    class ev {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sv;
        this.pool = vv, this.origin = zv, this.count = 0, this.free = []
      }
      take() {
        var vv;
        const zv = null !== (vv = this.free.pop()) && void 0 !== vv ? vv : this.count++;
        return zv >= this.pool.GT && this.pool.grow(Math.max(2 * this.pool.GT, zv + 1)), this.hide(zv), zv
      }
      release(vv) {
        this.hide(vv), this.free.push(vv)
      }
      write(vv, zv, Pv, Sv) {
        const {
          records: ev
        } = this.pool, {
          origin: gv
        } = this, pv = vv * hv.b;
        ev[pv] = zv - gv[0], ev[pv + 1] = Pv - gv[1], ev[pv + 2] = Sv - gv[2], ev[pv + hv.e] = 0, this.pool.markDirty(vv)
      }
      hide(vv) {
        this.pool.records[vv * hv.b + hv.e] = 1, this.pool.markDirty(vv)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class gv {
      constructor(vv, zv, Pv) {
        this.api = vv, this.model = zv, this.initialCapacity = Pv, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(vv) {
        let zv = this.kinds.get(vv);
        if (void 0 === zv) {
          const Pv = this.api.createInstancePool({
            ...this.model,
            item: vv
          }, this.initialCapacity);
          null === Pv || void 0 === Pv || Pv.setOrigin(this.origin[0], this.origin[1], this.origin[2]), zv = Pv && new ev(Pv, this.origin), this.kinds.set(vv, zv)
        }
        return zv
      }
      follow(vv) {
        const {
          origin: zv
        } = this;
        if (Math.abs(vv[0] - zv[0]) <= 512 && Math.abs(vv[1] - zv[1]) <= 512 && Math.abs(vv[2] - zv[2]) <= 512) return !1;
        zv[0] = Math.floor(vv[0]), zv[1] = Math.floor(vv[1]), zv[2] = Math.floor(vv[2]);
        for (const Pv of this.kinds.values()) null === Pv || void 0 === Pv || Pv.pool.setOrigin(zv[0], zv[1], zv[2]);
        return !0
      }
      commit() {
        for (const vv of this.kinds.values()) null === vv || void 0 === vv || vv.commit()
      }
      dispose() {
        for (const vv of this.kinds.values()) null === vv || void 0 === vv || vv.dispose();
        this.kinds.clear()
      }
    }
  },
  38768: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => Tv
    });
    const hv = "Pipe",
      Sv = "Extractor Pipe",
      ev = (new Set([hv, Sv]), new Set([hv, Sv, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var gv = Pv(38029);
    class pv {
      constructor(vv) {
        this.api = vv, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new gv.e(vv, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(vv) {
        if (vv.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${vv.id} with < 2 waypoints`);
        const zv = this.kinds.kindOf(vv.itemName);
        if (!zv) return void(this.unshown.has(vv.itemName) || (this.unshown.add(vv.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${vv.itemName}"`)));
        this.remove(vv.id);
        const Pv = function(vv) {
          return (vv.waypoints.length - 1) / 2 * 1e3
        }(vv);
        if (Date.now() - vv.startTimeMs > Pv + 2e3) return;
        const hv = zv.take();
        this.items.set(vv.id, {
          kind: zv,
          slot: hv,
          waypoints: vv.waypoints,
          startTimeMs: vv.startTimeMs,
          durationMs: Pv
        })
      }
      onEnd(vv) {
        this.remove(vv.id)
      }
      xG() {
        if (0 === this.items.size) return void this.kinds.commit();
        const vv = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [zv, Pv] of this.items) vv - Pv.startTimeMs > Pv.durationMs + 2e3 ? this.remove(zv) : this.write(Pv, vv);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(vv) {
        const zv = this.items.get(vv);
        zv && (zv.kind.release(zv.slot), this.items.delete(vv))
      }
      write(vv, zv) {
        const Pv = vv.waypoints.length - 1;
        let hv = (zv - vv.startTimeMs) / vv.durationMs;
        hv < 0 ? hv = 0 : hv > 1 && (hv = 1);
        const Sv = hv * Pv;
        let ev = Math.floor(Sv);
        ev >= Pv && (ev = Pv - 1);
        const gv = Sv - ev,
          [pv, dv, Nv] = vv.waypoints[ev],
          [lv, Tv, Wv] = vv.waypoints[ev + 1];
        vv.kind.write(vv.slot, pv + (lv - pv) * gv + .5, dv + (Tv - dv) * gv + .5, Nv + (Wv - Nv) * gv + .5)
      }
    }
    const dv = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Nv = new Set(dv);
    class lv {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(vv) {
        this.api = vv, this.pipeVisualizer = new pv(vv)
      }
      onClose() {
        var vv;
        null === (vv = this.pipeVisualizer) || void 0 === vv || vv.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(vv, zv) {
        const {
          pipeVisualizer: Pv
        } = this;
        if (Pv)
          if ("pipeItemSpawnBatch" === vv)
            for (const hv of zv.items) Pv.onSpawn(hv);
          else if ("pipeItemEndBatch" === vv)
          for (const hv of zv.items) Pv.onEnd(hv)
      }
      xG() {
        var vv;
        null === (vv = this.pipeVisualizer) || void 0 === vv || vv.xG()
      }
      onPlayerAttemptAltAction(vv, zv, Pv, hv, Sv, gv) {
        var pv;
        if (!Nv.has(this.api.getMetaInfo(Sv).rootName)) return;
        const dv = null === (pv = this.api.Avv(vv)) || void 0 === pv ? void 0 : pv.name;
        return void 0 !== dv && ev.has(dv) ? "preventAction" : void 0
      }
    }
    const Tv = function(vv, zv, Pv) {
      if ("survivalFactory" !== Pv && "survivalFactoryPersistent" !== Pv) {
        return {}
      }
      const hv = new lv;
      return {
        onCreate: vv => {
          hv.onCreate(vv)
        },
        onClose: () => {
          hv.onClose()
        },
        onReceivedMessageFromServer: (vv, zv) => {
          hv.onReceivedMessageFromServer(vv, zv)
        },
        MT: () => {
          hv.xG()
        },
        altVetoBlocks: dv,
        onPlayerAttemptAltAction: (vv, zv, Pv, Sv, ev, gv) => hv.onPlayerAttemptAltAction(vv, zv, Pv, Sv, ev, gv)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);