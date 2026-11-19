export const id = 12;
export const ids = [12];
export const modules = {
  37884: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz
    });
    var Ez = bz(37890);
    const nz = [0, 0, 0];
    class iz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nz;
        this.pool = zz, this.origin = uz, this.count = 0, this.free = []
      }
      take() {
        var zz;
        const uz = null !== (zz = this.free.pop()) && void 0 !== zz ? zz : this.count++;
        return uz >= this.pool.Bp && this.pool.grow(Math.max(2 * this.pool.Bp, uz + 1)), this.hide(uz), uz
      }
      release(zz) {
        this.hide(zz), this.free.push(zz)
      }
      write(zz, uz, bz, nz) {
        const {
          records: iz
        } = this.pool, {
          origin: lz
        } = this, Mz = zz * Ez.d;
        iz[Mz] = uz - lz[0], iz[Mz + 1] = bz - lz[1], iz[Mz + 2] = nz - lz[2], iz[Mz + Ez.h] = 0, this.pool.markDirty(zz)
      }
      hide(zz) {
        this.pool.records[zz * Ez.d + Ez.h] = 1, this.pool.markDirty(zz)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class lz {
      constructor(zz, uz, bz) {
        this.api = zz, this.model = uz, this.initialCapacity = bz, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(zz) {
        let uz = this.kinds.get(zz);
        if (void 0 === uz) {
          const bz = this.api.createInstancePool({
            ...this.model,
            item: zz
          }, this.initialCapacity);
          null === bz || void 0 === bz || bz.setOrigin(this.origin[0], this.origin[1], this.origin[2]), uz = bz && new iz(bz, this.origin), this.kinds.set(zz, uz)
        }
        return uz
      }
      follow(zz) {
        const {
          origin: uz
        } = this;
        if (Math.abs(zz[0] - uz[0]) <= 512 && Math.abs(zz[1] - uz[1]) <= 512 && Math.abs(zz[2] - uz[2]) <= 512) return !1;
        uz[0] = Math.floor(zz[0]), uz[1] = Math.floor(zz[1]), uz[2] = Math.floor(zz[2]);
        for (const bz of this.kinds.values()) null === bz || void 0 === bz || bz.pool.setOrigin(uz[0], uz[1], uz[2]);
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
  38624: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => pz
    });
    const Ez = "Pipe",
      nz = "Extractor Pipe",
      iz = (new Set([Ez, nz]), new Set([Ez, nz, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var lz = bz(37884);
    class Mz {
      constructor(zz) {
        this.api = zz, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new lz.c(zz, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(zz) {
        if (zz.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${zz.id} with < 2 waypoints`);
        const uz = this.kinds.kindOf(zz.itemName);
        if (!uz) return void(this.unshown.has(zz.itemName) || (this.unshown.add(zz.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${zz.itemName}"`)));
        this.remove(zz.id);
        const bz = function(zz) {
          return (zz.waypoints.length - 1) / 2 * 1e3
        }(zz);
        if (Date.now() - zz.startTimeMs > bz + 2e3) return;
        const Ez = uz.take();
        this.items.set(zz.id, {
          kind: uz,
          slot: Ez,
          waypoints: zz.waypoints,
          startTimeMs: zz.startTimeMs,
          durationMs: bz
        })
      }
      onEnd(zz) {
        this.remove(zz.id)
      }
      Hs() {
        if (0 === this.items.size) return void this.kinds.commit();
        const zz = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [uz, bz] of this.items) zz - bz.startTimeMs > bz.durationMs + 2e3 ? this.remove(uz) : this.write(bz, zz);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(zz) {
        const uz = this.items.get(zz);
        uz && (uz.kind.release(uz.slot), this.items.delete(zz))
      }
      write(zz, uz) {
        const bz = zz.waypoints.length - 1;
        let Ez = (uz - zz.startTimeMs) / zz.durationMs;
        Ez < 0 ? Ez = 0 : Ez > 1 && (Ez = 1);
        const nz = Ez * bz;
        let iz = Math.floor(nz);
        iz >= bz && (iz = bz - 1);
        const lz = nz - iz,
          [Mz, tz, Hz] = zz.waypoints[iz],
          [Oz, pz, dz] = zz.waypoints[iz + 1];
        zz.kind.write(zz.slot, Mz + (Oz - Mz) * lz + .5, tz + (pz - tz) * lz + .5, Hz + (dz - Hz) * lz + .5)
      }
    }
    const tz = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Hz = new Set(tz);
    class Oz {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(zz) {
        this.api = zz, this.pipeVisualizer = new Mz(zz)
      }
      onClose() {
        var zz;
        null === (zz = this.pipeVisualizer) || void 0 === zz || zz.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(zz, uz) {
        const {
          pipeVisualizer: bz
        } = this;
        if (bz)
          if ("pipeItemSpawnBatch" === zz)
            for (const Ez of uz.items) bz.onSpawn(Ez);
          else if ("pipeItemEndBatch" === zz)
          for (const Ez of uz.items) bz.onEnd(Ez)
      }
      Hs() {
        var zz;
        null === (zz = this.pipeVisualizer) || void 0 === zz || zz.Hs()
      }
      onPlayerAttemptAltAction(zz, uz, bz, Ez, nz, lz) {
        var Mz;
        if (!Hz.has(this.api.getMetaInfo(nz).rootName)) return;
        const tz = null === (Mz = this.api.luz(zz)) || void 0 === Mz ? void 0 : Mz.name;
        return void 0 !== tz && iz.has(tz) ? "preventAction" : void 0
      }
    }
    const pz = function(zz, uz, bz) {
      if ("survivalFactory" !== bz && "survivalFactoryPersistent" !== bz) {
        return {}
      }
      const Ez = new Oz;
      return {
        onCreate: zz => {
          Ez.onCreate(zz)
        },
        onClose: () => {
          Ez.onClose()
        },
        onReceivedMessageFromServer: (zz, uz) => {
          Ez.onReceivedMessageFromServer(zz, uz)
        },
        sd: () => {
          Ez.Hs()
        },
        altVetoBlocks: tz,
        onPlayerAttemptAltAction: (zz, uz, bz, nz, iz, lz) => Ez.onPlayerAttemptAltAction(zz, uz, bz, nz, iz, lz)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);