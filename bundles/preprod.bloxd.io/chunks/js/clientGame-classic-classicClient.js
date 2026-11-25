export const id = 12;
export const ids = [12, 13];
export const modules = {
  38785: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(38792);
    const qQ = [0, 0, 0];
    class TQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ;
        this.pool = QQ, this.origin = WQ, this.count = 0, this.free = []
      }
      take() {
        var QQ;
        const WQ = null !== (QQ = this.free.pop()) && void 0 !== QQ ? QQ : this.count++;
        return WQ >= this.pool.yJ && this.pool.grow(Math.max(2 * this.pool.yJ, WQ + 1)), this.hide(WQ), WQ
      }
      release(QQ) {
        this.hide(QQ), this.free.push(QQ)
      }
      write(QQ, WQ, XQ, qQ) {
        const {
          records: TQ
        } = this.pool, {
          origin: zQ
        } = this, sQ = QQ * wQ.b;
        TQ[sQ] = WQ - zQ[0], TQ[sQ + 1] = XQ - zQ[1], TQ[sQ + 2] = qQ - zQ[2], TQ[sQ + wQ.c] = 0, this.pool.markDirty(QQ)
      }
      hide(QQ) {
        this.pool.records[QQ * wQ.b + wQ.c] = 1, this.pool.markDirty(QQ)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class zQ {
      constructor(QQ, WQ, XQ) {
        this.api = QQ, this.model = WQ, this.initialCapacity = XQ, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(QQ) {
        let WQ = this.kinds.get(QQ);
        if (void 0 === WQ) {
          const XQ = this.api.createInstancePool({
            ...this.model,
            item: QQ
          }, this.initialCapacity);
          null === XQ || void 0 === XQ || XQ.setOrigin(this.origin[0], this.origin[1], this.origin[2]), WQ = XQ && new TQ(XQ, this.origin), this.kinds.set(QQ, WQ)
        }
        return WQ
      }
      follow(QQ) {
        const {
          origin: WQ
        } = this;
        if (Math.abs(QQ[0] - WQ[0]) <= 512 && Math.abs(QQ[1] - WQ[1]) <= 512 && Math.abs(QQ[2] - WQ[2]) <= 512) return !1;
        WQ[0] = Math.floor(QQ[0]), WQ[1] = Math.floor(QQ[1]), WQ[2] = Math.floor(QQ[2]);
        for (const XQ of this.kinds.values()) null === XQ || void 0 === XQ || XQ.pool.setOrigin(WQ[0], WQ[1], WQ[2]);
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
  39571: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => rQ
    });
    const wQ = "Pipe",
      qQ = "Extractor Pipe",
      TQ = (new Set([wQ, qQ]), new Set([wQ, qQ, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var zQ = XQ(38785);
    class sQ {
      constructor(QQ) {
        this.api = QQ, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new zQ.e(QQ, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(QQ) {
        if (QQ.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${QQ.id} with < 2 waypoints`);
        const WQ = this.kinds.kindOf(QQ.itemName);
        if (!WQ) return void(this.unshown.has(QQ.itemName) || (this.unshown.add(QQ.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${QQ.itemName}"`)));
        this.remove(QQ.id);
        const XQ = function(QQ) {
          return (QQ.waypoints.length - 1) / 2 * 1e3
        }(QQ);
        if (Date.now() - QQ.startTimeMs > XQ + 2e3) return;
        const wQ = WQ.take();
        this.items.set(QQ.id, {
          kind: WQ,
          slot: wQ,
          waypoints: QQ.waypoints,
          startTimeMs: QQ.startTimeMs,
          durationMs: XQ
        })
      }
      onEnd(QQ) {
        this.remove(QQ.id)
      }
      tV() {
        if (0 === this.items.size) return void this.kinds.commit();
        const QQ = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [WQ, XQ] of this.items) QQ - XQ.startTimeMs > XQ.durationMs + 2e3 ? this.remove(WQ) : this.write(XQ, QQ);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(QQ) {
        const WQ = this.items.get(QQ);
        WQ && (WQ.kind.release(WQ.slot), this.items.delete(QQ))
      }
      write(QQ, WQ) {
        const XQ = QQ.waypoints.length - 1;
        let wQ = (WQ - QQ.startTimeMs) / QQ.durationMs;
        wQ < 0 ? wQ = 0 : wQ > 1 && (wQ = 1);
        const qQ = wQ * XQ;
        let TQ = Math.floor(qQ);
        TQ >= XQ && (TQ = XQ - 1);
        const zQ = qQ - TQ,
          [sQ, FQ, PQ] = QQ.waypoints[TQ],
          [gQ, JQ, rQ] = QQ.waypoints[TQ + 1];
        QQ.kind.write(QQ.slot, sQ + (gQ - sQ) * zQ + .5, FQ + (JQ - FQ) * zQ + .5, PQ + (rQ - PQ) * zQ + .5)
      }
    }
    const FQ = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      PQ = new Set(FQ);
    class gQ {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(QQ) {
        this.api = QQ, this.pipeVisualizer = new sQ(QQ)
      }
      onClose() {
        var QQ;
        null === (QQ = this.pipeVisualizer) || void 0 === QQ || QQ.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(QQ, WQ) {
        const {
          pipeVisualizer: XQ
        } = this;
        if (XQ)
          if ("pipeItemSpawnBatch" === QQ)
            for (const wQ of WQ.items) XQ.onSpawn(wQ);
          else if ("pipeItemEndBatch" === QQ)
          for (const wQ of WQ.items) XQ.onEnd(wQ)
      }
      tV() {
        var QQ;
        null === (QQ = this.pipeVisualizer) || void 0 === QQ || QQ.tV()
      }
      onPlayerAttemptAltAction(QQ, WQ, XQ, wQ, qQ, zQ) {
        var sQ;
        if (!PQ.has(this.api.getMetaInfo(qQ).rootName)) return;
        const FQ = null === (sQ = this.api.wXQ(QQ)) || void 0 === sQ ? void 0 : sQ.name;
        return void 0 !== FQ && TQ.has(FQ) ? "preventAction" : void 0
      }
    }
    var JQ = XQ(39578);
    const rQ = function(QQ, WQ, XQ) {
      if ("smp2" === XQ) return (0, JQ.makeSmp2ClientGame)();
      if ("survivalFactory" !== XQ && "survivalFactoryPersistent" !== XQ) {
        return {}
      }
      const wQ = new gQ;
      return {
        onCreate: QQ => {
          wQ.onCreate(QQ)
        },
        onClose: () => {
          wQ.onClose()
        },
        onReceivedMessageFromServer: (QQ, WQ) => {
          wQ.onReceivedMessageFromServer(QQ, WQ)
        },
        fJ: () => {
          wQ.tV()
        },
        altVetoBlocks: FQ,
        onPlayerAttemptAltAction: (QQ, WQ, XQ, qQ, TQ, zQ) => wQ.onPlayerAttemptAltAction(QQ, WQ, XQ, qQ, TQ, zQ)
      }
    }
  },
  39578: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      makeSmp2ClientGame: () => TQ
    });
    const wQ = "smp2FirstSpawn";
    var qQ = XQ(1722);

    function TQ() {
      let QQ = !1;
      return {
        onReceivedMessageFromServer: WQ => {
          WQ !== wQ || QQ || (QQ = !0, (0, qQ.d)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);