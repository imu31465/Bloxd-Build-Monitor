export const id = 12;
export const ids = [12];
export const modules = {
  38326: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC
    });
    var QC = ZC(38334);
    const wC = [0, 0, 0];
    class bC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC;
        this.pool = CC, this.origin = zC, this.count = 0, this.free = []
      }
      take() {
        var CC;
        const zC = null !== (CC = this.free.pop()) && void 0 !== CC ? CC : this.count++;
        return zC >= this.pool.HW && this.pool.grow(Math.max(2 * this.pool.HW, zC + 1)), this.hide(zC), zC
      }
      release(CC) {
        this.hide(CC), this.free.push(CC)
      }
      write(CC, zC, ZC, wC) {
        const {
          records: bC
        } = this.pool, {
          origin: nC
        } = this, fC = CC * QC.d;
        bC[fC] = zC - nC[0], bC[fC + 1] = ZC - nC[1], bC[fC + 2] = wC - nC[2], bC[fC + QC.g] = 0, this.pool.markDirty(CC)
      }
      hide(CC) {
        this.pool.records[CC * QC.d + QC.g] = 1, this.pool.markDirty(CC)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class nC {
      constructor(CC, zC, ZC) {
        this.api = CC, this.model = zC, this.initialCapacity = ZC, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(CC) {
        let zC = this.kinds.get(CC);
        if (void 0 === zC) {
          const ZC = this.api.createInstancePool({
            ...this.model,
            item: CC
          }, this.initialCapacity);
          null === ZC || void 0 === ZC || ZC.setOrigin(this.origin[0], this.origin[1], this.origin[2]), zC = ZC && new bC(ZC, this.origin), this.kinds.set(CC, zC)
        }
        return zC
      }
      follow(CC) {
        const {
          origin: zC
        } = this;
        if (Math.abs(CC[0] - zC[0]) <= 512 && Math.abs(CC[1] - zC[1]) <= 512 && Math.abs(CC[2] - zC[2]) <= 512) return !1;
        zC[0] = Math.floor(CC[0]), zC[1] = Math.floor(CC[1]), zC[2] = Math.floor(CC[2]);
        for (const ZC of this.kinds.values()) null === ZC || void 0 === ZC || ZC.pool.setOrigin(zC[0], zC[1], zC[2]);
        return !0
      }
      commit() {
        for (const CC of this.kinds.values()) null === CC || void 0 === CC || CC.commit()
      }
      dispose() {
        for (const CC of this.kinds.values()) null === CC || void 0 === CC || CC.dispose();
        this.kinds.clear()
      }
    }
  },
  39120: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => WC
    });
    const QC = "Pipe",
      wC = "Extractor Pipe",
      bC = (new Set([QC, wC]), new Set([QC, wC, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var nC = ZC(38326);
    class fC {
      constructor(CC) {
        this.api = CC, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new nC.c(CC, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(CC) {
        if (CC.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${CC.id} with < 2 waypoints`);
        const zC = this.kinds.kindOf(CC.itemName);
        if (!zC) return void(this.unshown.has(CC.itemName) || (this.unshown.add(CC.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${CC.itemName}"`)));
        this.remove(CC.id);
        const ZC = function(CC) {
          return (CC.waypoints.length - 1) / 2 * 1e3
        }(CC);
        if (Date.now() - CC.startTimeMs > ZC + 2e3) return;
        const QC = zC.take();
        this.items.set(CC.id, {
          kind: zC,
          slot: QC,
          waypoints: CC.waypoints,
          startTimeMs: CC.startTimeMs,
          durationMs: ZC
        })
      }
      onEnd(CC) {
        this.remove(CC.id)
      }
      sG() {
        if (0 === this.items.size) return void this.kinds.commit();
        const CC = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [zC, ZC] of this.items) CC - ZC.startTimeMs > ZC.durationMs + 2e3 ? this.remove(zC) : this.write(ZC, CC);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(CC) {
        const zC = this.items.get(CC);
        zC && (zC.kind.release(zC.slot), this.items.delete(CC))
      }
      write(CC, zC) {
        const ZC = CC.waypoints.length - 1;
        let QC = (zC - CC.startTimeMs) / CC.durationMs;
        QC < 0 ? QC = 0 : QC > 1 && (QC = 1);
        const wC = QC * ZC;
        let bC = Math.floor(wC);
        bC >= ZC && (bC = ZC - 1);
        const nC = wC - bC,
          [fC, oC, qC] = CC.waypoints[bC],
          [FC, WC, NC] = CC.waypoints[bC + 1];
        CC.kind.write(CC.slot, fC + (FC - fC) * nC + .5, oC + (WC - oC) * nC + .5, qC + (NC - qC) * nC + .5)
      }
    }
    const oC = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      qC = new Set(oC);
    class FC {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(CC) {
        this.api = CC, this.pipeVisualizer = new fC(CC)
      }
      onClose() {
        var CC;
        null === (CC = this.pipeVisualizer) || void 0 === CC || CC.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(CC, zC) {
        const {
          pipeVisualizer: ZC
        } = this;
        if (ZC)
          if ("pipeItemSpawnBatch" === CC)
            for (const QC of zC.items) ZC.onSpawn(QC);
          else if ("pipeItemEndBatch" === CC)
          for (const QC of zC.items) ZC.onEnd(QC)
      }
      sG() {
        var CC;
        null === (CC = this.pipeVisualizer) || void 0 === CC || CC.sG()
      }
      onPlayerAttemptAltAction(CC, zC, ZC, QC, wC, nC) {
        var fC;
        if (!qC.has(this.api.getMetaInfo(wC).rootName)) return;
        const oC = null === (fC = this.api.XzC(CC)) || void 0 === fC ? void 0 : fC.name;
        return void 0 !== oC && bC.has(oC) ? "preventAction" : void 0
      }
    }
    const WC = function(CC, zC, ZC) {
      if ("survivalFactory" !== ZC && "survivalFactoryPersistent" !== ZC) {
        return {}
      }
      const QC = new FC;
      return {
        onCreate: CC => {
          QC.onCreate(CC)
        },
        onClose: () => {
          QC.onClose()
        },
        onReceivedMessageFromServer: (CC, zC) => {
          QC.onReceivedMessageFromServer(CC, zC)
        },
        ZN: () => {
          QC.sG()
        },
        altVetoBlocks: oC,
        onPlayerAttemptAltAction: (CC, zC, ZC, wC, bC, nC) => QC.onPlayerAttemptAltAction(CC, zC, ZC, wC, bC, nC)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);