export const id = 12;
export const ids = [12];
export const modules = {
  38123: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(38128);
    const Ob = [0, 0, 0];
    class Gb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ob;
        this.pool = bb, this.origin = ub, this.count = 0, this.free = []
      }
      take() {
        var bb;
        const ub = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.count++;
        return ub >= this.pool.LH && this.pool.grow(Math.max(2 * this.pool.LH, ub + 1)), this.hide(ub), ub
      }
      release(bb) {
        this.hide(bb), this.free.push(bb)
      }
      write(bb, ub, hb, Ob) {
        const {
          records: Gb
        } = this.pool, {
          origin: Ub
        } = this, Lb = bb * Bb.d;
        Gb[Lb] = ub - Ub[0], Gb[Lb + 1] = hb - Ub[1], Gb[Lb + 2] = Ob - Ub[2], Gb[Lb + Bb.h] = 0, this.pool.markDirty(bb)
      }
      hide(bb) {
        this.pool.records[bb * Bb.d + Bb.h] = 1, this.pool.markDirty(bb)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Ub {
      constructor(bb, ub, hb) {
        this.api = bb, this.model = ub, this.initialCapacity = hb, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(bb) {
        let ub = this.kinds.get(bb);
        if (void 0 === ub) {
          const hb = this.api.createInstancePool({
            ...this.model,
            item: bb
          }, this.initialCapacity);
          null === hb || void 0 === hb || hb.setOrigin(this.origin[0], this.origin[1], this.origin[2]), ub = hb && new Gb(hb, this.origin), this.kinds.set(bb, ub)
        }
        return ub
      }
      follow(bb) {
        const {
          origin: ub
        } = this;
        if (Math.abs(bb[0] - ub[0]) <= 512 && Math.abs(bb[1] - ub[1]) <= 512 && Math.abs(bb[2] - ub[2]) <= 512) return !1;
        ub[0] = Math.floor(bb[0]), ub[1] = Math.floor(bb[1]), ub[2] = Math.floor(bb[2]);
        for (const hb of this.kinds.values()) null === hb || void 0 === hb || hb.pool.setOrigin(ub[0], ub[1], ub[2]);
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
  38882: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Hb
    });
    const Bb = "Pipe",
      Ob = "Extractor Pipe",
      Gb = (new Set([Bb, Ob]), new Set([Bb, Ob, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var Ub = hb(38123);
    class Lb {
      constructor(bb) {
        this.api = bb, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Ub.b(bb, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(bb) {
        if (bb.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${bb.id} with < 2 waypoints`);
        const ub = this.kinds.kindOf(bb.itemName);
        if (!ub) return void(this.unshown.has(bb.itemName) || (this.unshown.add(bb.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${bb.itemName}"`)));
        this.remove(bb.id);
        const hb = function(bb) {
          return (bb.waypoints.length - 1) / 2 * 1e3
        }(bb);
        if (Date.now() - bb.startTimeMs > hb + 2e3) return;
        const Bb = ub.take();
        this.items.set(bb.id, {
          kind: ub,
          slot: Bb,
          waypoints: bb.waypoints,
          startTimeMs: bb.startTimeMs,
          durationMs: hb
        })
      }
      onEnd(bb) {
        this.remove(bb.id)
      }
      jK() {
        if (0 === this.items.size) return void this.kinds.commit();
        const bb = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [ub, hb] of this.items) bb - hb.startTimeMs > hb.durationMs + 2e3 ? this.remove(ub) : this.write(hb, bb);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(bb) {
        const ub = this.items.get(bb);
        ub && (ub.kind.release(ub.slot), this.items.delete(bb))
      }
      write(bb, ub) {
        const hb = bb.waypoints.length - 1;
        let Bb = (ub - bb.startTimeMs) / bb.durationMs;
        Bb < 0 ? Bb = 0 : Bb > 1 && (Bb = 1);
        const Ob = Bb * hb;
        let Gb = Math.floor(Ob);
        Gb >= hb && (Gb = hb - 1);
        const Ub = Ob - Gb,
          [Lb, Yb, Sb] = bb.waypoints[Gb],
          [ab, Hb, wb] = bb.waypoints[Gb + 1];
        bb.kind.write(bb.slot, Lb + (ab - Lb) * Ub + .5, Yb + (Hb - Yb) * Ub + .5, Sb + (wb - Sb) * Ub + .5)
      }
    }
    const Yb = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Sb = new Set(Yb);
    class ab {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(bb) {
        this.api = bb, this.pipeVisualizer = new Lb(bb)
      }
      onClose() {
        var bb;
        null === (bb = this.pipeVisualizer) || void 0 === bb || bb.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(bb, ub) {
        const {
          pipeVisualizer: hb
        } = this;
        if (hb)
          if ("pipeItemSpawnBatch" === bb)
            for (const Bb of ub.items) hb.onSpawn(Bb);
          else if ("pipeItemEndBatch" === bb)
          for (const Bb of ub.items) hb.onEnd(Bb)
      }
      jK() {
        var bb;
        null === (bb = this.pipeVisualizer) || void 0 === bb || bb.jK()
      }
      onPlayerAttemptAltAction(bb, ub, hb, Bb, Ob, Ub) {
        var Lb;
        if (!Sb.has(this.api.getMetaInfo(Ob).rootName)) return;
        const Yb = null === (Lb = this.api.cub(bb)) || void 0 === Lb ? void 0 : Lb.name;
        return void 0 !== Yb && Gb.has(Yb) ? "preventAction" : void 0
      }
    }
    const Hb = function(bb, ub, hb) {
      if ("survivalFactory" !== hb && "survivalFactoryPersistent" !== hb) {
        return {}
      }
      const Bb = new ab;
      return {
        onCreate: bb => {
          Bb.onCreate(bb)
        },
        onClose: () => {
          Bb.onClose()
        },
        onReceivedMessageFromServer: (bb, ub) => {
          Bb.onReceivedMessageFromServer(bb, ub)
        },
        gH: () => {
          Bb.jK()
        },
        altVetoBlocks: Yb,
        onPlayerAttemptAltAction: (bb, ub, hb, Ob, Gb, Ub) => Bb.onPlayerAttemptAltAction(bb, ub, hb, Ob, Gb, Ub)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);