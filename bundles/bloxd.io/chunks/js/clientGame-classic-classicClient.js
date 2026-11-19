export const id = 12;
export const ids = [12];
export const modules = {
  37478: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT
    });
    var iT = IT(37483);
    const zT = [0, 0, 0];
    class kT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT;
        this.pool = TT, this.origin = oT, this.count = 0, this.free = []
      }
      take() {
        var TT;
        const oT = null !== (TT = this.free.pop()) && void 0 !== TT ? TT : this.count++;
        return oT >= this.pool.fD && this.pool.grow(Math.max(2 * this.pool.fD, oT + 1)), this.hide(oT), oT
      }
      release(TT) {
        this.hide(TT), this.free.push(TT)
      }
      write(TT, oT, IT, zT) {
        const {
          records: kT
        } = this.pool, {
          origin: WT
        } = this, XT = TT * iT.d;
        kT[XT] = oT - WT[0], kT[XT + 1] = IT - WT[1], kT[XT + 2] = zT - WT[2], kT[XT + iT.h] = 0, this.pool.markDirty(TT)
      }
      hide(TT) {
        this.pool.records[TT * iT.d + iT.h] = 1, this.pool.markDirty(TT)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class WT {
      constructor(TT, oT, IT) {
        this.api = TT, this.model = oT, this.initialCapacity = IT, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(TT) {
        let oT = this.kinds.get(TT);
        if (void 0 === oT) {
          const IT = this.api.createInstancePool({
            ...this.model,
            item: TT
          }, this.initialCapacity);
          null === IT || void 0 === IT || IT.setOrigin(this.origin[0], this.origin[1], this.origin[2]), oT = IT && new kT(IT, this.origin), this.kinds.set(TT, oT)
        }
        return oT
      }
      follow(TT) {
        const {
          origin: oT
        } = this;
        if (Math.abs(TT[0] - oT[0]) <= 512 && Math.abs(TT[1] - oT[1]) <= 512 && Math.abs(TT[2] - oT[2]) <= 512) return !1;
        oT[0] = Math.floor(TT[0]), oT[1] = Math.floor(TT[1]), oT[2] = Math.floor(TT[2]);
        for (const IT of this.kinds.values()) null === IT || void 0 === IT || IT.pool.setOrigin(oT[0], oT[1], oT[2]);
        return !0
      }
      commit() {
        for (const TT of this.kinds.values()) null === TT || void 0 === TT || TT.commit()
      }
      dispose() {
        for (const TT of this.kinds.values()) null === TT || void 0 === TT || TT.dispose();
        this.kinds.clear()
      }
    }
  },
  38223: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => DT
    });
    const iT = "Pipe",
      zT = "Extractor Pipe",
      kT = (new Set([iT, zT]), new Set([iT, zT, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var WT = IT(37478);
    class XT {
      constructor(TT) {
        this.api = TT, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new WT.b(TT, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(TT) {
        if (TT.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${TT.id} with < 2 waypoints`);
        const oT = this.kinds.kindOf(TT.itemName);
        if (!oT) return void(this.unshown.has(TT.itemName) || (this.unshown.add(TT.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${TT.itemName}"`)));
        this.remove(TT.id);
        const IT = function(TT) {
          return (TT.waypoints.length - 1) / 2 * 1e3
        }(TT);
        if (Date.now() - TT.startTimeMs > IT + 2e3) return;
        const iT = oT.take();
        this.items.set(TT.id, {
          kind: oT,
          slot: iT,
          waypoints: TT.waypoints,
          startTimeMs: TT.startTimeMs,
          durationMs: IT
        })
      }
      onEnd(TT) {
        this.remove(TT.id)
      }
      pw() {
        if (0 === this.items.size) return void this.kinds.commit();
        const TT = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [oT, IT] of this.items) TT - IT.startTimeMs > IT.durationMs + 2e3 ? this.remove(oT) : this.write(IT, TT);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(TT) {
        const oT = this.items.get(TT);
        oT && (oT.kind.release(oT.slot), this.items.delete(TT))
      }
      write(TT, oT) {
        const IT = TT.waypoints.length - 1;
        let iT = (oT - TT.startTimeMs) / TT.durationMs;
        iT < 0 ? iT = 0 : iT > 1 && (iT = 1);
        const zT = iT * IT;
        let kT = Math.floor(zT);
        kT >= IT && (kT = IT - 1);
        const WT = zT - kT,
          [XT, BT, FT] = TT.waypoints[kT],
          [ST, DT, LT] = TT.waypoints[kT + 1];
        TT.kind.write(TT.slot, XT + (ST - XT) * WT + .5, BT + (DT - BT) * WT + .5, FT + (LT - FT) * WT + .5)
      }
    }
    const BT = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      FT = new Set(BT);
    class ST {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(TT) {
        this.api = TT, this.pipeVisualizer = new XT(TT)
      }
      onClose() {
        var TT;
        null === (TT = this.pipeVisualizer) || void 0 === TT || TT.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(TT, oT) {
        const {
          pipeVisualizer: IT
        } = this;
        if (IT)
          if ("pipeItemSpawnBatch" === TT)
            for (const iT of oT.items) IT.onSpawn(iT);
          else if ("pipeItemEndBatch" === TT)
          for (const iT of oT.items) IT.onEnd(iT)
      }
      pw() {
        var TT;
        null === (TT = this.pipeVisualizer) || void 0 === TT || TT.pw()
      }
      onPlayerAttemptAltAction(TT, oT, IT, iT, zT, WT) {
        var XT;
        if (!FT.has(this.api.getMetaInfo(zT).rootName)) return;
        const BT = null === (XT = this.api.eoT(TT)) || void 0 === XT ? void 0 : XT.name;
        return void 0 !== BT && kT.has(BT) ? "preventAction" : void 0
      }
    }
    const DT = function(TT, oT, IT) {
      if ("survivalFactory" !== IT && "survivalFactoryPersistent" !== IT) {
        return {}
      }
      const iT = new ST;
      return {
        onCreate: TT => {
          iT.onCreate(TT)
        },
        onClose: () => {
          iT.onClose()
        },
        onReceivedMessageFromServer: (TT, oT) => {
          iT.onReceivedMessageFromServer(TT, oT)
        },
        dD: () => {
          iT.pw()
        },
        altVetoBlocks: BT,
        onPlayerAttemptAltAction: (TT, oT, IT, zT, kT, WT) => iT.onPlayerAttemptAltAction(TT, oT, IT, zT, kT, WT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);