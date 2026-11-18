export const id = 12;
export const ids = [12];
export const modules = {
  37489: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ
    });
    var FJ = ZJ(37496);
    const UJ = [0, 0, 0];
    class eJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UJ;
        this.pool = JJ, this.origin = cJ, this.count = 0, this.free = []
      }
      take() {
        var JJ;
        const cJ = null !== (JJ = this.free.pop()) && void 0 !== JJ ? JJ : this.count++;
        return cJ >= this.pool.qh && this.pool.grow(Math.max(2 * this.pool.qh, cJ + 1)), this.hide(cJ), cJ
      }
      release(JJ) {
        this.hide(JJ), this.free.push(JJ)
      }
      write(JJ, cJ, ZJ, UJ) {
        const {
          records: eJ
        } = this.pool, {
          origin: XJ
        } = this, AJ = JJ * FJ.e;
        eJ[AJ] = cJ - XJ[0], eJ[AJ + 1] = ZJ - XJ[1], eJ[AJ + 2] = UJ - XJ[2], eJ[AJ + FJ.f] = 0, this.pool.markDirty(JJ)
      }
      hide(JJ) {
        this.pool.records[JJ * FJ.e + FJ.f] = 1, this.pool.markDirty(JJ)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class XJ {
      constructor(JJ, cJ, ZJ) {
        this.api = JJ, this.model = cJ, this.initialCapacity = ZJ, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(JJ) {
        let cJ = this.kinds.get(JJ);
        if (void 0 === cJ) {
          const ZJ = this.api.createInstancePool({
            ...this.model,
            item: JJ
          }, this.initialCapacity);
          null === ZJ || void 0 === ZJ || ZJ.setOrigin(this.origin[0], this.origin[1], this.origin[2]), cJ = ZJ && new eJ(ZJ, this.origin), this.kinds.set(JJ, cJ)
        }
        return cJ
      }
      follow(JJ) {
        const {
          origin: cJ
        } = this;
        if (Math.abs(JJ[0] - cJ[0]) <= 512 && Math.abs(JJ[1] - cJ[1]) <= 512 && Math.abs(JJ[2] - cJ[2]) <= 512) return !1;
        cJ[0] = Math.floor(JJ[0]), cJ[1] = Math.floor(JJ[1]), cJ[2] = Math.floor(JJ[2]);
        for (const ZJ of this.kinds.values()) null === ZJ || void 0 === ZJ || ZJ.pool.setOrigin(cJ[0], cJ[1], cJ[2]);
        return !0
      }
      commit() {
        for (const JJ of this.kinds.values()) null === JJ || void 0 === JJ || JJ.commit()
      }
      dispose() {
        for (const JJ of this.kinds.values()) null === JJ || void 0 === JJ || JJ.dispose();
        this.kinds.clear()
      }
    }
  },
  38221: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => hJ
    });
    const FJ = "Pipe",
      UJ = "Extractor Pipe",
      eJ = (new Set([FJ, UJ]), new Set([FJ, UJ, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var XJ = ZJ(37489);
    class AJ {
      constructor(JJ) {
        this.api = JJ, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new XJ.d(JJ, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(JJ) {
        if (JJ.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${JJ.id} with < 2 waypoints`);
        const cJ = this.kinds.kindOf(JJ.itemName);
        if (!cJ) return void(this.unshown.has(JJ.itemName) || (this.unshown.add(JJ.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${JJ.itemName}"`)));
        this.remove(JJ.id);
        const ZJ = function(JJ) {
          return (JJ.waypoints.length - 1) / 2 * 1e3
        }(JJ);
        if (Date.now() - JJ.startTimeMs > ZJ + 2e3) return;
        const FJ = cJ.take();
        this.items.set(JJ.id, {
          kind: cJ,
          slot: FJ,
          waypoints: JJ.waypoints,
          startTimeMs: JJ.startTimeMs,
          durationMs: ZJ
        })
      }
      onEnd(JJ) {
        this.remove(JJ.id)
      }
      Km() {
        if (0 === this.items.size) return void this.kinds.commit();
        const JJ = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [cJ, ZJ] of this.items) JJ - ZJ.startTimeMs > ZJ.durationMs + 2e3 ? this.remove(cJ) : this.write(ZJ, JJ);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(JJ) {
        const cJ = this.items.get(JJ);
        cJ && (cJ.kind.release(cJ.slot), this.items.delete(JJ))
      }
      write(JJ, cJ) {
        const ZJ = JJ.waypoints.length - 1;
        let FJ = (cJ - JJ.startTimeMs) / JJ.durationMs;
        FJ < 0 ? FJ = 0 : FJ > 1 && (FJ = 1);
        const UJ = FJ * ZJ;
        let eJ = Math.floor(UJ);
        eJ >= ZJ && (eJ = ZJ - 1);
        const XJ = UJ - eJ,
          [AJ, qJ, jJ] = JJ.waypoints[eJ],
          [YJ, hJ, DJ] = JJ.waypoints[eJ + 1];
        JJ.kind.write(JJ.slot, AJ + (YJ - AJ) * XJ + .5, qJ + (hJ - qJ) * XJ + .5, jJ + (DJ - jJ) * XJ + .5)
      }
    }
    const qJ = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      jJ = new Set(qJ);
    class YJ {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(JJ) {
        this.api = JJ, this.pipeVisualizer = new AJ(JJ)
      }
      onClose() {
        var JJ;
        null === (JJ = this.pipeVisualizer) || void 0 === JJ || JJ.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(JJ, cJ) {
        const {
          pipeVisualizer: ZJ
        } = this;
        if (ZJ)
          if ("pipeItemSpawnBatch" === JJ)
            for (const FJ of cJ.items) ZJ.onSpawn(FJ);
          else if ("pipeItemEndBatch" === JJ)
          for (const FJ of cJ.items) ZJ.onEnd(FJ)
      }
      Km() {
        var JJ;
        null === (JJ = this.pipeVisualizer) || void 0 === JJ || JJ.Km()
      }
      onPlayerAttemptAltAction(JJ, cJ, ZJ, FJ, UJ, XJ) {
        var AJ;
        if (!jJ.has(this.api.getMetaInfo(UJ).rootName)) return;
        const qJ = null === (AJ = this.api.WcJ(JJ)) || void 0 === AJ ? void 0 : AJ.name;
        return void 0 !== qJ && eJ.has(qJ) ? "preventAction" : void 0
      }
    }
    const hJ = function(JJ, cJ, ZJ) {
      if ("survivalFactory" !== ZJ && "survivalFactoryPersistent" !== ZJ) {
        return {}
      }
      const FJ = new YJ;
      return {
        onCreate: JJ => {
          FJ.onCreate(JJ)
        },
        onClose: () => {
          FJ.onClose()
        },
        onReceivedMessageFromServer: (JJ, cJ) => {
          FJ.onReceivedMessageFromServer(JJ, cJ)
        },
        Hh: () => {
          FJ.Km()
        },
        altVetoBlocks: qJ,
        onPlayerAttemptAltAction: (JJ, cJ, ZJ, UJ, eJ, XJ) => FJ.onPlayerAttemptAltAction(JJ, cJ, ZJ, UJ, eJ, XJ)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);