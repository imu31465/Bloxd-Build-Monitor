export const id = 12;
export const ids = [12];
export const modules = {
  38113: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    var kb = sb(38117);
    const Wb = [0, 0, 0];
    class ab {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wb;
        this.pool = bb, this.origin = cb, this.count = 0, this.free = []
      }
      take() {
        var bb;
        const cb = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.count++;
        return cb >= this.pool.GM && this.pool.grow(Math.max(2 * this.pool.GM, cb + 1)), this.hide(cb), cb
      }
      release(bb) {
        this.hide(bb), this.free.push(bb)
      }
      write(bb, cb, sb, Wb) {
        const {
          records: ab
        } = this.pool, {
          origin: Tb
        } = this, Ub = bb * kb.b;
        ab[Ub] = cb - Tb[0], ab[Ub + 1] = sb - Tb[1], ab[Ub + 2] = Wb - Tb[2], ab[Ub + kb.e] = 0, this.pool.markDirty(bb)
      }
      hide(bb) {
        this.pool.records[bb * kb.b + kb.e] = 1, this.pool.markDirty(bb)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Tb {
      constructor(bb, cb, sb) {
        this.api = bb, this.model = cb, this.initialCapacity = sb, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(bb) {
        let cb = this.kinds.get(bb);
        if (void 0 === cb) {
          const sb = this.api.createInstancePool({
            ...this.model,
            item: bb
          }, this.initialCapacity);
          null === sb || void 0 === sb || sb.setOrigin(this.origin[0], this.origin[1], this.origin[2]), cb = sb && new ab(sb, this.origin), this.kinds.set(bb, cb)
        }
        return cb
      }
      follow(bb) {
        const {
          origin: cb
        } = this;
        if (Math.abs(bb[0] - cb[0]) <= 512 && Math.abs(bb[1] - cb[1]) <= 512 && Math.abs(bb[2] - cb[2]) <= 512) return !1;
        cb[0] = Math.floor(bb[0]), cb[1] = Math.floor(bb[1]), cb[2] = Math.floor(bb[2]);
        for (const sb of this.kinds.values()) null === sb || void 0 === sb || sb.pool.setOrigin(cb[0], cb[1], cb[2]);
        return !0
      }
      commit() {
        for (const bb of this.kinds.values()) null === bb || void 0 === bb || bb.commit()
      }
      dispose() {
        for (const bb of this.kinds.values()) null === bb || void 0 === bb || bb.dispose();
        this.kinds.clear()
      }
    }
  },
  38841: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Mb
    });
    const kb = "Pipe",
      Wb = "Extractor Pipe",
      ab = (new Set([kb, Wb]), new Set([kb, Wb, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var Tb = sb(38113);
    class Ub {
      constructor(bb) {
        this.api = bb, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Tb.e(bb, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(bb) {
        if (bb.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${bb.id} with < 2 waypoints`);
        const cb = this.kinds.kindOf(bb.itemName);
        if (!cb) return void(this.unshown.has(bb.itemName) || (this.unshown.add(bb.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${bb.itemName}"`)));
        this.remove(bb.id);
        const sb = function(bb) {
          return (bb.waypoints.length - 1) / 2 * 1e3
        }(bb);
        if (Date.now() - bb.startTimeMs > sb + 2e3) return;
        const kb = cb.take();
        this.items.set(bb.id, {
          kind: cb,
          slot: kb,
          waypoints: bb.waypoints,
          startTimeMs: bb.startTimeMs,
          durationMs: sb
        })
      }
      onEnd(bb) {
        this.remove(bb.id)
      }
      RC() {
        if (0 === this.items.size) return void this.kinds.commit();
        const bb = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [cb, sb] of this.items) bb - sb.startTimeMs > sb.durationMs + 2e3 ? this.remove(cb) : this.write(sb, bb);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(bb) {
        const cb = this.items.get(bb);
        cb && (cb.kind.release(cb.slot), this.items.delete(bb))
      }
      write(bb, cb) {
        const sb = bb.waypoints.length - 1;
        let kb = (cb - bb.startTimeMs) / bb.durationMs;
        kb < 0 ? kb = 0 : kb > 1 && (kb = 1);
        const Wb = kb * sb;
        let ab = Math.floor(Wb);
        ab >= sb && (ab = sb - 1);
        const Tb = Wb - ab,
          [Ub, Ib, Hb] = bb.waypoints[ab],
          [fb, Mb, Xb] = bb.waypoints[ab + 1];
        bb.kind.write(bb.slot, Ub + (fb - Ub) * Tb + .5, Ib + (Mb - Ib) * Tb + .5, Hb + (Xb - Hb) * Tb + .5)
      }
    }
    const Ib = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Hb = new Set(Ib);
    class fb {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(bb) {
        this.api = bb, this.pipeVisualizer = new Ub(bb)
      }
      onClose() {
        var bb;
        null === (bb = this.pipeVisualizer) || void 0 === bb || bb.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(bb, cb) {
        const {
          pipeVisualizer: sb
        } = this;
        if (sb)
          if ("pipeItemSpawnBatch" === bb)
            for (const kb of cb.items) sb.onSpawn(kb);
          else if ("pipeItemEndBatch" === bb)
          for (const kb of cb.items) sb.onEnd(kb)
      }
      RC() {
        var bb;
        null === (bb = this.pipeVisualizer) || void 0 === bb || bb.RC()
      }
      onPlayerAttemptAltAction(bb, cb, sb, kb, Wb, Tb) {
        var Ub;
        if (!Hb.has(this.api.getMetaInfo(Wb).rootName)) return;
        const Ib = null === (Ub = this.api.Xcb(bb)) || void 0 === Ub ? void 0 : Ub.name;
        return void 0 !== Ib && ab.has(Ib) ? "preventAction" : void 0
      }
    }
    const Mb = function(bb, cb, sb) {
      if ("survivalFactory" !== sb && "survivalFactoryPersistent" !== sb) {
        return {}
      }
      const kb = new fb;
      return {
        onCreate: bb => {
          kb.onCreate(bb)
        },
        onClose: () => {
          kb.onClose()
        },
        onReceivedMessageFromServer: (bb, cb) => {
          kb.onReceivedMessageFromServer(bb, cb)
        },
        aX: () => {
          kb.RC()
        },
        altVetoBlocks: Ib,
        onPlayerAttemptAltAction: (bb, cb, sb, Wb, ab, Tb) => kb.onPlayerAttemptAltAction(bb, cb, sb, Wb, ab, Tb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);