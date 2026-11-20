export const id = 12;
export const ids = [12];
export const modules = {
  37925: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(37927);
    const Wz = [0, 0, 0];
    class Xz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz;
        this.pool = zz, this.origin = tz, this.count = 0, this.free = []
      }
      take() {
        var zz;
        const tz = null !== (zz = this.free.pop()) && void 0 !== zz ? zz : this.count++;
        return tz >= this.pool.au && this.pool.grow(Math.max(2 * this.pool.au, tz + 1)), this.hide(tz), tz
      }
      release(zz) {
        this.hide(zz), this.free.push(zz)
      }
      write(zz, tz, sz, Wz) {
        const {
          records: Xz
        } = this.pool, {
          origin: Oz
        } = this, oz = zz * Fz.c;
        Xz[oz] = tz - Oz[0], Xz[oz + 1] = sz - Oz[1], Xz[oz + 2] = Wz - Oz[2], Xz[oz + Fz.g] = 0, this.pool.markDirty(zz)
      }
      hide(zz) {
        this.pool.records[zz * Fz.c + Fz.g] = 1, this.pool.markDirty(zz)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Oz {
      constructor(zz, tz, sz) {
        this.api = zz, this.model = tz, this.initialCapacity = sz, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(zz) {
        let tz = this.kinds.get(zz);
        if (void 0 === tz) {
          const sz = this.api.createInstancePool({
            ...this.model,
            item: zz
          }, this.initialCapacity);
          null === sz || void 0 === sz || sz.setOrigin(this.origin[0], this.origin[1], this.origin[2]), tz = sz && new Xz(sz, this.origin), this.kinds.set(zz, tz)
        }
        return tz
      }
      follow(zz) {
        const {
          origin: tz
        } = this;
        if (Math.abs(zz[0] - tz[0]) <= 512 && Math.abs(zz[1] - tz[1]) <= 512 && Math.abs(zz[2] - tz[2]) <= 512) return !1;
        tz[0] = Math.floor(zz[0]), tz[1] = Math.floor(zz[1]), tz[2] = Math.floor(zz[2]);
        for (const sz of this.kinds.values()) null === sz || void 0 === sz || sz.pool.setOrigin(tz[0], tz[1], tz[2]);
        return !0
      }
      commit() {
        for (const zz of this.kinds.values()) null === zz || void 0 === zz || zz.commit()
      }
      dispose() {
        for (const zz of this.kinds.values()) null === zz || void 0 === zz || zz.dispose();
        this.kinds.clear()
      }
    }
  },
  38655: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => uz
    });
    const Fz = "Pipe",
      Wz = "Extractor Pipe",
      Xz = (new Set([Fz, Wz]), new Set([Fz, Wz, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var Oz = sz(37925);
    class oz {
      constructor(zz) {
        this.api = zz, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Oz.c(zz, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(zz) {
        if (zz.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${zz.id} with < 2 waypoints`);
        const tz = this.kinds.kindOf(zz.itemName);
        if (!tz) return void(this.unshown.has(zz.itemName) || (this.unshown.add(zz.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${zz.itemName}"`)));
        this.remove(zz.id);
        const sz = function(zz) {
          return (zz.waypoints.length - 1) / 2 * 1e3
        }(zz);
        if (Date.now() - zz.startTimeMs > sz + 2e3) return;
        const Fz = tz.take();
        this.items.set(zz.id, {
          kind: tz,
          slot: Fz,
          waypoints: zz.waypoints,
          startTimeMs: zz.startTimeMs,
          durationMs: sz
        })
      }
      onEnd(zz) {
        this.remove(zz.id)
      }
      uB() {
        if (0 === this.items.size) return void this.kinds.commit();
        const zz = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [tz, sz] of this.items) zz - sz.startTimeMs > sz.durationMs + 2e3 ? this.remove(tz) : this.write(sz, zz);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(zz) {
        const tz = this.items.get(zz);
        tz && (tz.kind.release(tz.slot), this.items.delete(zz))
      }
      write(zz, tz) {
        const sz = zz.waypoints.length - 1;
        let Fz = (tz - zz.startTimeMs) / zz.durationMs;
        Fz < 0 ? Fz = 0 : Fz > 1 && (Fz = 1);
        const Wz = Fz * sz;
        let Xz = Math.floor(Wz);
        Xz >= sz && (Xz = sz - 1);
        const Oz = Wz - Xz,
          [oz, vz, Uz] = zz.waypoints[Xz],
          [Kz, uz, Nz] = zz.waypoints[Xz + 1];
        zz.kind.write(zz.slot, oz + (Kz - oz) * Oz + .5, vz + (uz - vz) * Oz + .5, Uz + (Nz - Uz) * Oz + .5)
      }
    }
    const vz = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Uz = new Set(vz);
    class Kz {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(zz) {
        this.api = zz, this.pipeVisualizer = new oz(zz)
      }
      onClose() {
        var zz;
        null === (zz = this.pipeVisualizer) || void 0 === zz || zz.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(zz, tz) {
        const {
          pipeVisualizer: sz
        } = this;
        if (sz)
          if ("pipeItemSpawnBatch" === zz)
            for (const Fz of tz.items) sz.onSpawn(Fz);
          else if ("pipeItemEndBatch" === zz)
          for (const Fz of tz.items) sz.onEnd(Fz)
      }
      uB() {
        var zz;
        null === (zz = this.pipeVisualizer) || void 0 === zz || zz.uB()
      }
      onPlayerAttemptAltAction(zz, tz, sz, Fz, Wz, Oz) {
        var oz;
        if (!Uz.has(this.api.getMetaInfo(Wz).rootName)) return;
        const vz = null === (oz = this.api.rtz(zz)) || void 0 === oz ? void 0 : oz.name;
        return void 0 !== vz && Xz.has(vz) ? "preventAction" : void 0
      }
    }
    const uz = function(zz, tz, sz) {
      if ("survivalFactory" !== sz && "survivalFactoryPersistent" !== sz) {
        return {}
      }
      const Fz = new Kz;
      return {
        onCreate: zz => {
          Fz.onCreate(zz)
        },
        onClose: () => {
          Fz.onClose()
        },
        onReceivedMessageFromServer: (zz, tz) => {
          Fz.onReceivedMessageFromServer(zz, tz)
        },
        wN: () => {
          Fz.uB()
        },
        altVetoBlocks: vz,
        onPlayerAttemptAltAction: (zz, tz, sz, Wz, Xz, Oz) => Fz.onPlayerAttemptAltAction(zz, tz, sz, Wz, Xz, Oz)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);