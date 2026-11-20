export const id = 12;
export const ids = [12];
export const modules = {
  37834: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    var Ab = Ub(37837);
    const Mb = [0, 0, 0];
    class Tb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mb;
        this.pool = bb, this.origin = ab, this.count = 0, this.free = []
      }
      take() {
        var bb;
        const ab = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.count++;
        return ab >= this.pool.PL && this.pool.grow(Math.max(2 * this.pool.PL, ab + 1)), this.hide(ab), ab
      }
      release(bb) {
        this.hide(bb), this.free.push(bb)
      }
      write(bb, ab, Ub, Mb) {
        const {
          records: Tb
        } = this.pool, {
          origin: Eb
        } = this, Yb = bb * Ab.c;
        Tb[Yb] = ab - Eb[0], Tb[Yb + 1] = Ub - Eb[1], Tb[Yb + 2] = Mb - Eb[2], Tb[Yb + Ab.f] = 0, this.pool.markDirty(bb)
      }
      hide(bb) {
        this.pool.records[bb * Ab.c + Ab.f] = 1, this.pool.markDirty(bb)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Eb {
      constructor(bb, ab, Ub) {
        this.api = bb, this.model = ab, this.initialCapacity = Ub, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(bb) {
        let ab = this.kinds.get(bb);
        if (void 0 === ab) {
          const Ub = this.api.createInstancePool({
            ...this.model,
            item: bb
          }, this.initialCapacity);
          null === Ub || void 0 === Ub || Ub.setOrigin(this.origin[0], this.origin[1], this.origin[2]), ab = Ub && new Tb(Ub, this.origin), this.kinds.set(bb, ab)
        }
        return ab
      }
      follow(bb) {
        const {
          origin: ab
        } = this;
        if (Math.abs(bb[0] - ab[0]) <= 512 && Math.abs(bb[1] - ab[1]) <= 512 && Math.abs(bb[2] - ab[2]) <= 512) return !1;
        ab[0] = Math.floor(bb[0]), ab[1] = Math.floor(bb[1]), ab[2] = Math.floor(bb[2]);
        for (const Ub of this.kinds.values()) null === Ub || void 0 === Ub || Ub.pool.setOrigin(ab[0], ab[1], ab[2]);
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
  38535: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Lb
    });
    const Ab = "Pipe",
      Mb = "Extractor Pipe",
      Tb = (new Set([Ab, Mb]), new Set([Ab, Mb, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var Eb = Ub(37834);
    class Yb {
      constructor(bb) {
        this.api = bb, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Eb.b(bb, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(bb) {
        if (bb.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${bb.id} with < 2 waypoints`);
        const ab = this.kinds.kindOf(bb.itemName);
        if (!ab) return void(this.unshown.has(bb.itemName) || (this.unshown.add(bb.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${bb.itemName}"`)));
        this.remove(bb.id);
        const Ub = function(bb) {
          return (bb.waypoints.length - 1) / 2 * 1e3
        }(bb);
        if (Date.now() - bb.startTimeMs > Ub + 2e3) return;
        const Ab = ab.take();
        this.items.set(bb.id, {
          kind: ab,
          slot: Ab,
          waypoints: bb.waypoints,
          startTimeMs: bb.startTimeMs,
          durationMs: Ub
        })
      }
      onEnd(bb) {
        this.remove(bb.id)
      }
      Sy() {
        if (0 === this.items.size) return void this.kinds.commit();
        const bb = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [ab, Ub] of this.items) bb - Ub.startTimeMs > Ub.durationMs + 2e3 ? this.remove(ab) : this.write(Ub, bb);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(bb) {
        const ab = this.items.get(bb);
        ab && (ab.kind.release(ab.slot), this.items.delete(bb))
      }
      write(bb, ab) {
        const Ub = bb.waypoints.length - 1;
        let Ab = (ab - bb.startTimeMs) / bb.durationMs;
        Ab < 0 ? Ab = 0 : Ab > 1 && (Ab = 1);
        const Mb = Ab * Ub;
        let Tb = Math.floor(Mb);
        Tb >= Ub && (Tb = Ub - 1);
        const Eb = Mb - Tb,
          [Yb, Bb, eb] = bb.waypoints[Tb],
          [vb, Lb, Pb] = bb.waypoints[Tb + 1];
        bb.kind.write(bb.slot, Yb + (vb - Yb) * Eb + .5, Bb + (Lb - Bb) * Eb + .5, eb + (Pb - eb) * Eb + .5)
      }
    }
    const Bb = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      eb = new Set(Bb);
    class vb {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(bb) {
        this.api = bb, this.pipeVisualizer = new Yb(bb)
      }
      onClose() {
        var bb;
        null === (bb = this.pipeVisualizer) || void 0 === bb || bb.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(bb, ab) {
        const {
          pipeVisualizer: Ub
        } = this;
        if (Ub)
          if ("pipeItemSpawnBatch" === bb)
            for (const Ab of ab.items) Ub.onSpawn(Ab);
          else if ("pipeItemEndBatch" === bb)
          for (const Ab of ab.items) Ub.onEnd(Ab)
      }
      Sy() {
        var bb;
        null === (bb = this.pipeVisualizer) || void 0 === bb || bb.Sy()
      }
      onPlayerAttemptAltAction(bb, ab, Ub, Ab, Mb, Eb) {
        var Yb;
        if (!eb.has(this.api.getMetaInfo(Mb).rootName)) return;
        const Bb = null === (Yb = this.api.vab(bb)) || void 0 === Yb ? void 0 : Yb.name;
        return void 0 !== Bb && Tb.has(Bb) ? "preventAction" : void 0
      }
    }
    const Lb = function(bb, ab, Ub) {
      if ("survivalFactory" !== Ub && "survivalFactoryPersistent" !== Ub) {
        return {}
      }
      const Ab = new vb;
      return {
        onCreate: bb => {
          Ab.onCreate(bb)
        },
        onClose: () => {
          Ab.onClose()
        },
        onReceivedMessageFromServer: (bb, ab) => {
          Ab.onReceivedMessageFromServer(bb, ab)
        },
        qL: () => {
          Ab.Sy()
        },
        altVetoBlocks: Bb,
        onPlayerAttemptAltAction: (bb, ab, Ub, Mb, Tb, Eb) => Ab.onPlayerAttemptAltAction(bb, ab, Ub, Mb, Tb, Eb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);