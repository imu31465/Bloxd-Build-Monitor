export const id = 12;
export const ids = [12];
export const modules = {
  37872: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(37879);
    const pD = [0, 0, 0];
    class iD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD;
        this.pool = DD, this.origin = CD, this.count = 0, this.free = []
      }
      take() {
        var DD;
        const CD = null !== (DD = this.free.pop()) && void 0 !== DD ? DD : this.count++;
        return CD >= this.pool.LB && this.pool.grow(Math.max(2 * this.pool.LB, CD + 1)), this.hide(CD), CD
      }
      release(DD) {
        this.hide(DD), this.free.push(DD)
      }
      write(DD, CD, cD, pD) {
        const {
          records: iD
        } = this.pool, {
          origin: fD
        } = this, bD = DD * ID.b;
        iD[bD] = CD - fD[0], iD[bD + 1] = cD - fD[1], iD[bD + 2] = pD - fD[2], iD[bD + ID.f] = 0, this.pool.markDirty(DD)
      }
      hide(DD) {
        this.pool.records[DD * ID.b + ID.f] = 1, this.pool.markDirty(DD)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class fD {
      constructor(DD, CD, cD) {
        this.api = DD, this.model = CD, this.initialCapacity = cD, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(DD) {
        let CD = this.kinds.get(DD);
        if (void 0 === CD) {
          const cD = this.api.createInstancePool({
            ...this.model,
            item: DD
          }, this.initialCapacity);
          null === cD || void 0 === cD || cD.setOrigin(this.origin[0], this.origin[1], this.origin[2]), CD = cD && new iD(cD, this.origin), this.kinds.set(DD, CD)
        }
        return CD
      }
      follow(DD) {
        const {
          origin: CD
        } = this;
        if (Math.abs(DD[0] - CD[0]) <= 512 && Math.abs(DD[1] - CD[1]) <= 512 && Math.abs(DD[2] - CD[2]) <= 512) return !1;
        CD[0] = Math.floor(DD[0]), CD[1] = Math.floor(DD[1]), CD[2] = Math.floor(DD[2]);
        for (const cD of this.kinds.values()) null === cD || void 0 === cD || cD.pool.setOrigin(CD[0], CD[1], CD[2]);
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
  38586: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => BD
    });
    const ID = "Pipe",
      pD = "Extractor Pipe",
      iD = (new Set([ID, pD]), new Set([ID, pD, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var fD = cD(37872);
    class bD {
      constructor(DD) {
        this.api = DD, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new fD.e(DD, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(DD) {
        if (DD.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${DD.id} with < 2 waypoints`);
        const CD = this.kinds.kindOf(DD.itemName);
        if (!CD) return void(this.unshown.has(DD.itemName) || (this.unshown.add(DD.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${DD.itemName}"`)));
        this.remove(DD.id);
        const cD = function(DD) {
          return (DD.waypoints.length - 1) / 2 * 1e3
        }(DD);
        if (Date.now() - DD.startTimeMs > cD + 2e3) return;
        const ID = CD.take();
        this.items.set(DD.id, {
          kind: CD,
          slot: ID,
          waypoints: DD.waypoints,
          startTimeMs: DD.startTimeMs,
          durationMs: cD
        })
      }
      onEnd(DD) {
        this.remove(DD.id)
      }
      BX() {
        if (0 === this.items.size) return void this.kinds.commit();
        const DD = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [CD, cD] of this.items) DD - cD.startTimeMs > cD.durationMs + 2e3 ? this.remove(CD) : this.write(cD, DD);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(DD) {
        const CD = this.items.get(DD);
        CD && (CD.kind.release(CD.slot), this.items.delete(DD))
      }
      write(DD, CD) {
        const cD = DD.waypoints.length - 1;
        let ID = (CD - DD.startTimeMs) / DD.durationMs;
        ID < 0 ? ID = 0 : ID > 1 && (ID = 1);
        const pD = ID * cD;
        let iD = Math.floor(pD);
        iD >= cD && (iD = cD - 1);
        const fD = pD - iD,
          [bD, QD, wD] = DD.waypoints[iD],
          [SD, BD, yD] = DD.waypoints[iD + 1];
        DD.kind.write(DD.slot, bD + (SD - bD) * fD + .5, QD + (BD - QD) * fD + .5, wD + (yD - wD) * fD + .5)
      }
    }
    const QD = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      wD = new Set(QD);
    class SD {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(DD) {
        this.api = DD, this.pipeVisualizer = new bD(DD)
      }
      onClose() {
        var DD;
        null === (DD = this.pipeVisualizer) || void 0 === DD || DD.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(DD, CD) {
        const {
          pipeVisualizer: cD
        } = this;
        if (cD)
          if ("pipeItemSpawnBatch" === DD)
            for (const ID of CD.items) cD.onSpawn(ID);
          else if ("pipeItemEndBatch" === DD)
          for (const ID of CD.items) cD.onEnd(ID)
      }
      BX() {
        var DD;
        null === (DD = this.pipeVisualizer) || void 0 === DD || DD.BX()
      }
      onPlayerAttemptAltAction(DD, CD, cD, ID, pD, fD) {
        var bD;
        if (!wD.has(this.api.getMetaInfo(pD).rootName)) return;
        const QD = null === (bD = this.api.FDD(DD)) || void 0 === bD ? void 0 : bD.name;
        return void 0 !== QD && iD.has(QD) ? "preventAction" : void 0
      }
    }
    const BD = function(DD, CD, cD) {
      if ("survivalFactory" !== cD && "survivalFactoryPersistent" !== cD) {
        return {}
      }
      const ID = new SD;
      return {
        onCreate: DD => {
          ID.onCreate(DD)
        },
        onClose: () => {
          ID.onClose()
        },
        onReceivedMessageFromServer: (DD, CD) => {
          ID.onReceivedMessageFromServer(DD, CD)
        },
        wy: () => {
          ID.BX()
        },
        altVetoBlocks: QD,
        onPlayerAttemptAltAction: (DD, CD, cD, pD, iD, fD) => ID.onPlayerAttemptAltAction(DD, CD, cD, pD, iD, fD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);