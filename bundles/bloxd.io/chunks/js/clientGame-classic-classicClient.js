export const id = 12;
export const ids = [12];
export const modules = {
  38912: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG
    });
    var wG = ZG(38917);
    const SG = [0, 0, 0];
    class LG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SG;
        this.pool = GG, this.origin = bG, this.count = 0, this.free = []
      }
      take() {
        var GG;
        const bG = null !== (GG = this.free.pop()) && void 0 !== GG ? GG : this.count++;
        return bG >= this.pool.rp && this.pool.grow(Math.max(2 * this.pool.rp, bG + 1)), this.hide(bG), bG
      }
      release(GG) {
        this.hide(GG), this.free.push(GG)
      }
      write(GG, bG, ZG, SG) {
        const {
          records: LG
        } = this.pool, {
          origin: yG
        } = this, kG = GG * wG.b;
        LG[kG] = bG - yG[0], LG[kG + 1] = ZG - yG[1], LG[kG + 2] = SG - yG[2], LG[kG + wG.e] = 0, this.pool.markDirty(GG)
      }
      hide(GG) {
        this.pool.records[GG * wG.b + wG.e] = 1, this.pool.markDirty(GG)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class yG {
      constructor(GG, bG, ZG) {
        this.api = GG, this.model = bG, this.initialCapacity = ZG, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(GG) {
        let bG = this.kinds.get(GG);
        if (void 0 === bG) {
          const ZG = this.api.createInstancePool({
            ...this.model,
            item: GG
          }, this.initialCapacity);
          null === ZG || void 0 === ZG || ZG.setOrigin(this.origin[0], this.origin[1], this.origin[2]), bG = ZG && new LG(ZG, this.origin), this.kinds.set(GG, bG)
        }
        return bG
      }
      follow(GG) {
        const {
          origin: bG
        } = this;
        if (Math.abs(GG[0] - bG[0]) <= 512 && Math.abs(GG[1] - bG[1]) <= 512 && Math.abs(GG[2] - bG[2]) <= 512) return !1;
        bG[0] = Math.floor(GG[0]), bG[1] = Math.floor(GG[1]), bG[2] = Math.floor(GG[2]);
        for (const ZG of this.kinds.values()) null === ZG || void 0 === ZG || ZG.pool.setOrigin(bG[0], bG[1], bG[2]);
        return !0
      }
      commit() {
        for (const GG of this.kinds.values()) null === GG || void 0 === GG || GG.commit()
      }
      dispose() {
        for (const GG of this.kinds.values()) null === GG || void 0 === GG || GG.dispose();
        this.kinds.clear()
      }
    }
  },
  39708: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => pG
    });
    const wG = "Pipe",
      SG = "Extractor Pipe",
      LG = (new Set([wG, SG]), new Set([wG, SG, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var yG = ZG(38912);
    class kG {
      constructor(GG) {
        this.api = GG, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new yG.d(GG, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(GG) {
        if (GG.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${GG.id} with < 2 waypoints`);
        const bG = this.kinds.kindOf(GG.itemName);
        if (!bG) return void(this.unshown.has(GG.itemName) || (this.unshown.add(GG.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${GG.itemName}"`)));
        this.remove(GG.id);
        const ZG = function(GG) {
          return (GG.waypoints.length - 1) / 2 * 1e3
        }(GG);
        if (Date.now() - GG.startTimeMs > ZG + 2e3) return;
        const wG = bG.take();
        this.items.set(GG.id, {
          kind: bG,
          slot: wG,
          waypoints: GG.waypoints,
          startTimeMs: GG.startTimeMs,
          durationMs: ZG
        })
      }
      onEnd(GG) {
        this.remove(GG.id)
      }
      gJ() {
        if (0 === this.items.size) return void this.kinds.commit();
        const GG = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [bG, ZG] of this.items) GG - ZG.startTimeMs > ZG.durationMs + 2e3 ? this.remove(bG) : this.write(ZG, GG);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(GG) {
        const bG = this.items.get(GG);
        bG && (bG.kind.release(bG.slot), this.items.delete(GG))
      }
      write(GG, bG) {
        const ZG = GG.waypoints.length - 1;
        let wG = (bG - GG.startTimeMs) / GG.durationMs;
        wG < 0 ? wG = 0 : wG > 1 && (wG = 1);
        const SG = wG * ZG;
        let LG = Math.floor(SG);
        LG >= ZG && (LG = ZG - 1);
        const yG = SG - LG,
          [kG, UG, YG] = GG.waypoints[LG],
          [VG, pG, fG] = GG.waypoints[LG + 1];
        GG.kind.write(GG.slot, kG + (VG - kG) * yG + .5, UG + (pG - UG) * yG + .5, YG + (fG - YG) * yG + .5)
      }
    }
    const UG = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      YG = new Set(UG);
    class VG {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(GG) {
        this.api = GG, this.pipeVisualizer = new kG(GG)
      }
      onClose() {
        var GG;
        null === (GG = this.pipeVisualizer) || void 0 === GG || GG.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(GG, bG) {
        const {
          pipeVisualizer: ZG
        } = this;
        if (ZG)
          if ("pipeItemSpawnBatch" === GG)
            for (const wG of bG.items) ZG.onSpawn(wG);
          else if ("pipeItemEndBatch" === GG)
          for (const wG of bG.items) ZG.onEnd(wG)
      }
      gJ() {
        var GG;
        null === (GG = this.pipeVisualizer) || void 0 === GG || GG.gJ()
      }
      onPlayerAttemptAltAction(GG, bG, ZG, wG, SG, yG) {
        var kG;
        if (!YG.has(this.api.getMetaInfo(SG).rootName)) return;
        const UG = null === (kG = this.api.YZG(GG)) || void 0 === kG ? void 0 : kG.name;
        return void 0 !== UG && LG.has(UG) ? "preventAction" : void 0
      }
    }
    const pG = function(GG, bG, ZG) {
      if ("survivalFactory" !== ZG && "survivalFactoryPersistent" !== ZG) {
        return {}
      }
      const wG = new VG;
      return {
        onCreate: GG => {
          wG.onCreate(GG)
        },
        onClose: () => {
          wG.onClose()
        },
        onReceivedMessageFromServer: (GG, bG) => {
          wG.onReceivedMessageFromServer(GG, bG)
        },
        Tp: () => {
          wG.gJ()
        },
        altVetoBlocks: UG,
        onPlayerAttemptAltAction: (GG, bG, ZG, SG, LG, yG) => wG.onPlayerAttemptAltAction(GG, bG, ZG, SG, LG, yG)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);