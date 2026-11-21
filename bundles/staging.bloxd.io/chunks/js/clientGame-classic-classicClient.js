export const id = 12;
export const ids = [12];
export const modules = {
  38032: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(38039);
    const qQ = [0, 0, 0];
    class oQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ;
        this.pool = QQ, this.origin = FQ, this.count = 0, this.free = []
      }
      take() {
        var QQ;
        const FQ = null !== (QQ = this.free.pop()) && void 0 !== QQ ? QQ : this.count++;
        return FQ >= this.pool.MH && this.pool.grow(Math.max(2 * this.pool.MH, FQ + 1)), this.hide(FQ), FQ
      }
      release(QQ) {
        this.hide(QQ), this.free.push(QQ)
      }
      write(QQ, FQ, wQ, qQ) {
        const {
          records: oQ
        } = this.pool, {
          origin: DQ
        } = this, kQ = QQ * LQ.d;
        oQ[kQ] = FQ - DQ[0], oQ[kQ + 1] = wQ - DQ[1], oQ[kQ + 2] = qQ - DQ[2], oQ[kQ + LQ.h] = 0, this.pool.markDirty(QQ)
      }
      hide(QQ) {
        this.pool.records[QQ * LQ.d + LQ.h] = 1, this.pool.markDirty(QQ)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class DQ {
      constructor(QQ, FQ, wQ) {
        this.api = QQ, this.model = FQ, this.initialCapacity = wQ, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(QQ) {
        let FQ = this.kinds.get(QQ);
        if (void 0 === FQ) {
          const wQ = this.api.createInstancePool({
            ...this.model,
            item: QQ
          }, this.initialCapacity);
          null === wQ || void 0 === wQ || wQ.setOrigin(this.origin[0], this.origin[1], this.origin[2]), FQ = wQ && new oQ(wQ, this.origin), this.kinds.set(QQ, FQ)
        }
        return FQ
      }
      follow(QQ) {
        const {
          origin: FQ
        } = this;
        if (Math.abs(QQ[0] - FQ[0]) <= 512 && Math.abs(QQ[1] - FQ[1]) <= 512 && Math.abs(QQ[2] - FQ[2]) <= 512) return !1;
        FQ[0] = Math.floor(QQ[0]), FQ[1] = Math.floor(QQ[1]), FQ[2] = Math.floor(QQ[2]);
        for (const wQ of this.kinds.values()) null === wQ || void 0 === wQ || wQ.pool.setOrigin(FQ[0], FQ[1], FQ[2]);
        return !0
      }
      commit() {
        for (const QQ of this.kinds.values()) null === QQ || void 0 === QQ || QQ.commit()
      }
      dispose() {
        for (const QQ of this.kinds.values()) null === QQ || void 0 === QQ || QQ.dispose();
        this.kinds.clear()
      }
    }
  },
  38806: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => HQ
    });
    const LQ = "Pipe",
      qQ = "Extractor Pipe",
      oQ = (new Set([LQ, qQ]), new Set([LQ, qQ, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var DQ = wQ(38032);
    class kQ {
      constructor(QQ) {
        this.api = QQ, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new DQ.c(QQ, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(QQ) {
        if (QQ.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${QQ.id} with < 2 waypoints`);
        const FQ = this.kinds.kindOf(QQ.itemName);
        if (!FQ) return void(this.unshown.has(QQ.itemName) || (this.unshown.add(QQ.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${QQ.itemName}"`)));
        this.remove(QQ.id);
        const wQ = function(QQ) {
          return (QQ.waypoints.length - 1) / 2 * 1e3
        }(QQ);
        if (Date.now() - QQ.startTimeMs > wQ + 2e3) return;
        const LQ = FQ.take();
        this.items.set(QQ.id, {
          kind: FQ,
          slot: LQ,
          waypoints: QQ.waypoints,
          startTimeMs: QQ.startTimeMs,
          durationMs: wQ
        })
      }
      onEnd(QQ) {
        this.remove(QQ.id)
      }
      nG() {
        if (0 === this.items.size) return void this.kinds.commit();
        const QQ = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [FQ, wQ] of this.items) QQ - wQ.startTimeMs > wQ.durationMs + 2e3 ? this.remove(FQ) : this.write(wQ, QQ);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(QQ) {
        const FQ = this.items.get(QQ);
        FQ && (FQ.kind.release(FQ.slot), this.items.delete(QQ))
      }
      write(QQ, FQ) {
        const wQ = QQ.waypoints.length - 1;
        let LQ = (FQ - QQ.startTimeMs) / QQ.durationMs;
        LQ < 0 ? LQ = 0 : LQ > 1 && (LQ = 1);
        const qQ = LQ * wQ;
        let oQ = Math.floor(qQ);
        oQ >= wQ && (oQ = wQ - 1);
        const DQ = qQ - oQ,
          [kQ, vQ, mQ] = QQ.waypoints[oQ],
          [uQ, HQ, bQ] = QQ.waypoints[oQ + 1];
        QQ.kind.write(QQ.slot, kQ + (uQ - kQ) * DQ + .5, vQ + (HQ - vQ) * DQ + .5, mQ + (bQ - mQ) * DQ + .5)
      }
    }
    const vQ = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      mQ = new Set(vQ);
    class uQ {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(QQ) {
        this.api = QQ, this.pipeVisualizer = new kQ(QQ)
      }
      onClose() {
        var QQ;
        null === (QQ = this.pipeVisualizer) || void 0 === QQ || QQ.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(QQ, FQ) {
        const {
          pipeVisualizer: wQ
        } = this;
        if (wQ)
          if ("pipeItemSpawnBatch" === QQ)
            for (const LQ of FQ.items) wQ.onSpawn(LQ);
          else if ("pipeItemEndBatch" === QQ)
          for (const LQ of FQ.items) wQ.onEnd(LQ)
      }
      nG() {
        var QQ;
        null === (QQ = this.pipeVisualizer) || void 0 === QQ || QQ.nG()
      }
      onPlayerAttemptAltAction(QQ, FQ, wQ, LQ, qQ, DQ) {
        var kQ;
        if (!mQ.has(this.api.getMetaInfo(qQ).rootName)) return;
        const vQ = null === (kQ = this.api.owQ(QQ)) || void 0 === kQ ? void 0 : kQ.name;
        return void 0 !== vQ && oQ.has(vQ) ? "preventAction" : void 0
      }
    }
    const HQ = function(QQ, FQ, wQ) {
      if ("survivalFactory" !== wQ && "survivalFactoryPersistent" !== wQ) {
        return {}
      }
      const LQ = new uQ;
      return {
        onCreate: QQ => {
          LQ.onCreate(QQ)
        },
        onClose: () => {
          LQ.onClose()
        },
        onReceivedMessageFromServer: (QQ, FQ) => {
          LQ.onReceivedMessageFromServer(QQ, FQ)
        },
        fH: () => {
          LQ.nG()
        },
        altVetoBlocks: vQ,
        onPlayerAttemptAltAction: (QQ, FQ, wQ, qQ, oQ, DQ) => LQ.onPlayerAttemptAltAction(QQ, FQ, wQ, qQ, oQ, DQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);