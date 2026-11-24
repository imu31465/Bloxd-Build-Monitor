export const id = 12;
export const ids = [12];
export const modules = {
  38477: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD
    });
    var pD = wD(38486);
    const sD = [0, 0, 0];
    class KD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sD;
        this.pool = DD, this.origin = zD, this.count = 0, this.free = []
      }
      take() {
        var DD;
        const zD = null !== (DD = this.free.pop()) && void 0 !== DD ? DD : this.count++;
        return zD >= this.pool.bA && this.pool.grow(Math.max(2 * this.pool.bA, zD + 1)), this.hide(zD), zD
      }
      release(DD) {
        this.hide(DD), this.free.push(DD)
      }
      write(DD, zD, wD, sD) {
        const {
          records: KD
        } = this.pool, {
          origin: rD
        } = this, LD = DD * pD.c;
        KD[LD] = zD - rD[0], KD[LD + 1] = wD - rD[1], KD[LD + 2] = sD - rD[2], KD[LD + pD.e] = 0, this.pool.markDirty(DD)
      }
      hide(DD) {
        this.pool.records[DD * pD.c + pD.e] = 1, this.pool.markDirty(DD)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class rD {
      constructor(DD, zD, wD) {
        this.api = DD, this.model = zD, this.initialCapacity = wD, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(DD) {
        let zD = this.kinds.get(DD);
        if (void 0 === zD) {
          const wD = this.api.createInstancePool({
            ...this.model,
            item: DD
          }, this.initialCapacity);
          null === wD || void 0 === wD || wD.setOrigin(this.origin[0], this.origin[1], this.origin[2]), zD = wD && new KD(wD, this.origin), this.kinds.set(DD, zD)
        }
        return zD
      }
      follow(DD) {
        const {
          origin: zD
        } = this;
        if (Math.abs(DD[0] - zD[0]) <= 512 && Math.abs(DD[1] - zD[1]) <= 512 && Math.abs(DD[2] - zD[2]) <= 512) return !1;
        zD[0] = Math.floor(DD[0]), zD[1] = Math.floor(DD[1]), zD[2] = Math.floor(DD[2]);
        for (const wD of this.kinds.values()) null === wD || void 0 === wD || wD.pool.setOrigin(zD[0], zD[1], zD[2]);
        return !0
      }
      commit() {
        for (const DD of this.kinds.values()) null === DD || void 0 === DD || DD.commit()
      }
      dispose() {
        for (const DD of this.kinds.values()) null === DD || void 0 === DD || DD.dispose();
        this.kinds.clear()
      }
    }
  },
  39248: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => AD
    });
    const pD = "Pipe",
      sD = "Extractor Pipe",
      KD = (new Set([pD, sD]), new Set([pD, sD, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var rD = wD(38477);
    class LD {
      constructor(DD) {
        this.api = DD, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new rD.c(DD, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(DD) {
        if (DD.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${DD.id} with < 2 waypoints`);
        const zD = this.kinds.kindOf(DD.itemName);
        if (!zD) return void(this.unshown.has(DD.itemName) || (this.unshown.add(DD.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${DD.itemName}"`)));
        this.remove(DD.id);
        const wD = function(DD) {
          return (DD.waypoints.length - 1) / 2 * 1e3
        }(DD);
        if (Date.now() - DD.startTimeMs > wD + 2e3) return;
        const pD = zD.take();
        this.items.set(DD.id, {
          kind: zD,
          slot: pD,
          waypoints: DD.waypoints,
          startTimeMs: DD.startTimeMs,
          durationMs: wD
        })
      }
      onEnd(DD) {
        this.remove(DD.id)
      }
      QJ() {
        if (0 === this.items.size) return void this.kinds.commit();
        const DD = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [zD, wD] of this.items) DD - wD.startTimeMs > wD.durationMs + 2e3 ? this.remove(zD) : this.write(wD, DD);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(DD) {
        const zD = this.items.get(DD);
        zD && (zD.kind.release(zD.slot), this.items.delete(DD))
      }
      write(DD, zD) {
        const wD = DD.waypoints.length - 1;
        let pD = (zD - DD.startTimeMs) / DD.durationMs;
        pD < 0 ? pD = 0 : pD > 1 && (pD = 1);
        const sD = pD * wD;
        let KD = Math.floor(sD);
        KD >= wD && (KD = wD - 1);
        const rD = sD - KD,
          [LD, cD, gD] = DD.waypoints[KD],
          [RD, AD, UD] = DD.waypoints[KD + 1];
        DD.kind.write(DD.slot, LD + (RD - LD) * rD + .5, cD + (AD - cD) * rD + .5, gD + (UD - gD) * rD + .5)
      }
    }
    const cD = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      gD = new Set(cD);
    class RD {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(DD) {
        this.api = DD, this.pipeVisualizer = new LD(DD)
      }
      onClose() {
        var DD;
        null === (DD = this.pipeVisualizer) || void 0 === DD || DD.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(DD, zD) {
        const {
          pipeVisualizer: wD
        } = this;
        if (wD)
          if ("pipeItemSpawnBatch" === DD)
            for (const pD of zD.items) wD.onSpawn(pD);
          else if ("pipeItemEndBatch" === DD)
          for (const pD of zD.items) wD.onEnd(pD)
      }
      QJ() {
        var DD;
        null === (DD = this.pipeVisualizer) || void 0 === DD || DD.QJ()
      }
      onPlayerAttemptAltAction(DD, zD, wD, pD, sD, rD) {
        var LD;
        if (!gD.has(this.api.getMetaInfo(sD).rootName)) return;
        const cD = null === (LD = this.api.zwD(DD)) || void 0 === LD ? void 0 : LD.name;
        return void 0 !== cD && KD.has(cD) ? "preventAction" : void 0
      }
    }
    const AD = function(DD, zD, wD) {
      if ("survivalFactory" !== wD && "survivalFactoryPersistent" !== wD) {
        return {}
      }
      const pD = new RD;
      return {
        onCreate: DD => {
          pD.onCreate(DD)
        },
        onClose: () => {
          pD.onClose()
        },
        onReceivedMessageFromServer: (DD, zD) => {
          pD.onReceivedMessageFromServer(DD, zD)
        },
        DU: () => {
          pD.QJ()
        },
        altVetoBlocks: cD,
        onPlayerAttemptAltAction: (DD, zD, wD, sD, KD, rD) => pD.onPlayerAttemptAltAction(DD, zD, wD, sD, KD, rD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);