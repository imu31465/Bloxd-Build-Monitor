export const id = 12;
export const ids = [12];
export const modules = {
  37179: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(37188);
    const hy = [0, 0, 0];
    class fy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hy;
        this.pool = yb, this.origin = bb, this.count = 0, this.free = []
      }
      take() {
        var yb;
        const bb = null !== (yb = this.free.pop()) && void 0 !== yb ? yb : this.count++;
        return bb >= this.pool.Hy && this.pool.grow(Math.max(2 * this.pool.Hy, bb + 1)), this.hide(bb), bb
      }
      release(yb) {
        this.hide(yb), this.free.push(yb)
      }
      write(yb, bb, Wy, hy) {
        const {
          records: fy
        } = this.pool, {
          origin: Zy
        } = this, cb = yb * Uy.d;
        fy[cb] = bb - Zy[0], fy[cb + 1] = Wy - Zy[1], fy[cb + 2] = hy - Zy[2], fy[cb + Uy.h] = 0, this.pool.markDirty(yb)
      }
      hide(yb) {
        this.pool.records[yb * Uy.d + Uy.h] = 1, this.pool.markDirty(yb)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Zy {
      constructor(yb, bb, Wy) {
        this.api = yb, this.model = bb, this.initialCapacity = Wy, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(yb) {
        let bb = this.kinds.get(yb);
        if (void 0 === bb) {
          const Wy = this.api.createInstancePool({
            ...this.model,
            item: yb
          }, this.initialCapacity);
          null === Wy || void 0 === Wy || Wy.setOrigin(this.origin[0], this.origin[1], this.origin[2]), bb = Wy && new fy(Wy, this.origin), this.kinds.set(yb, bb)
        }
        return bb
      }
      follow(yb) {
        const {
          origin: bb
        } = this;
        if (Math.abs(yb[0] - bb[0]) <= 512 && Math.abs(yb[1] - bb[1]) <= 512 && Math.abs(yb[2] - bb[2]) <= 512) return !1;
        bb[0] = Math.floor(yb[0]), bb[1] = Math.floor(yb[1]), bb[2] = Math.floor(yb[2]);
        for (const Wy of this.kinds.values()) null === Wy || void 0 === Wy || Wy.pool.setOrigin(bb[0], bb[1], bb[2]);
        return !0
      }
      commit() {
        for (const yb of this.kinds.values()) null === yb || void 0 === yb || yb.commit()
      }
      dispose() {
        for (const yb of this.kinds.values()) null === yb || void 0 === yb || yb.dispose();
        this.kinds.clear()
      }
    }
  },
  37914: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Ky
    });
    const Uy = "Pipe",
      hy = "Extractor Pipe",
      fy = (new Set([Uy, hy]), new Set([Uy, hy, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var Zy = Wy(37179);
    class cb {
      constructor(yb) {
        this.api = yb, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Zy.c(yb, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(yb) {
        if (yb.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${yb.id} with < 2 waypoints`);
        const bb = this.kinds.kindOf(yb.itemName);
        if (!bb) return void(this.unshown.has(yb.itemName) || (this.unshown.add(yb.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${yb.itemName}"`)));
        this.remove(yb.id);
        const Wy = function(yb) {
          return (yb.waypoints.length - 1) / 2 * 1e3
        }(yb);
        if (Date.now() - yb.startTimeMs > Wy + 2e3) return;
        const Uy = bb.take();
        this.items.set(yb.id, {
          kind: bb,
          slot: Uy,
          waypoints: yb.waypoints,
          startTimeMs: yb.startTimeMs,
          durationMs: Wy
        })
      }
      onEnd(yb) {
        this.remove(yb.id)
      }
      FE() {
        if (0 === this.items.size) return void this.kinds.commit();
        const yb = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [bb, Wy] of this.items) yb - Wy.startTimeMs > Wy.durationMs + 2e3 ? this.remove(bb) : this.write(Wy, yb);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(yb) {
        const bb = this.items.get(yb);
        bb && (bb.kind.release(bb.slot), this.items.delete(yb))
      }
      write(yb, bb) {
        const Wy = yb.waypoints.length - 1;
        let Uy = (bb - yb.startTimeMs) / yb.durationMs;
        Uy < 0 ? Uy = 0 : Uy > 1 && (Uy = 1);
        const hy = Uy * Wy;
        let fy = Math.floor(hy);
        fy >= Wy && (fy = Wy - 1);
        const Zy = hy - fy,
          [cb, Py, oy] = yb.waypoints[fy],
          [By, Ky, ey] = yb.waypoints[fy + 1];
        yb.kind.write(yb.slot, cb + (By - cb) * Zy + .5, Py + (Ky - Py) * Zy + .5, oy + (ey - oy) * Zy + .5)
      }
    }
    const Py = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      oy = new Set(Py);
    class By {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(yb) {
        this.api = yb, this.pipeVisualizer = new cb(yb)
      }
      onClose() {
        var yb;
        null === (yb = this.pipeVisualizer) || void 0 === yb || yb.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(yb, bb) {
        const {
          pipeVisualizer: Wy
        } = this;
        if (Wy)
          if ("pipeItemSpawnBatch" === yb)
            for (const Uy of bb.items) Wy.onSpawn(Uy);
          else if ("pipeItemEndBatch" === yb)
          for (const Uy of bb.items) Wy.onEnd(Uy)
      }
      FE() {
        var yb;
        null === (yb = this.pipeVisualizer) || void 0 === yb || yb.FE()
      }
      onPlayerAttemptAltAction(yb, bb, Wy, Uy, hy, Zy) {
        var cb;
        if (!oy.has(this.api.getMetaInfo(hy).rootName)) return;
        const Py = null === (cb = this.api.MPy(yb)) || void 0 === cb ? void 0 : cb.name;
        return void 0 !== Py && fy.has(Py) ? "preventAction" : void 0
      }
    }
    const Ky = function(yb, bb, Wy) {
      if ("survivalFactory" !== Wy && "survivalFactoryPersistent" !== Wy) {
        return {}
      }
      const Uy = new By;
      return {
        onCreate: yb => {
          Uy.onCreate(yb)
        },
        onClose: () => {
          Uy.onClose()
        },
        onReceivedMessageFromServer: (yb, bb) => {
          Uy.onReceivedMessageFromServer(yb, bb)
        },
        Zb: () => {
          Uy.FE()
        },
        altVetoBlocks: Py,
        onPlayerAttemptAltAction: (yb, bb, Wy, hy, fy, Zy) => Uy.onPlayerAttemptAltAction(yb, bb, Wy, hy, fy, Zy)
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);