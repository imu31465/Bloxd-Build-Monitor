export const id = 12;
export const ids = [12];
export const modules = {
  38341: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(38350);
    const MT = [0, 0, 0];
    class KT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MT;
        this.pool = TT, this.origin = kT, this.count = 0, this.free = []
      }
      take() {
        var TT;
        const kT = null !== (TT = this.free.pop()) && void 0 !== TT ? TT : this.count++;
        return kT >= this.pool.DA && this.pool.grow(Math.max(2 * this.pool.DA, kT + 1)), this.hide(kT), kT
      }
      release(TT) {
        this.hide(TT), this.free.push(TT)
      }
      write(TT, kT, cT, MT) {
        const {
          records: KT
        } = this.pool, {
          origin: OT
        } = this, yT = TT * lT.e;
        KT[yT] = kT - OT[0], KT[yT + 1] = cT - OT[1], KT[yT + 2] = MT - OT[2], KT[yT + lT.f] = 0, this.pool.markDirty(TT)
      }
      hide(TT) {
        this.pool.records[TT * lT.e + lT.f] = 1, this.pool.markDirty(TT)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class OT {
      constructor(TT, kT, cT) {
        this.api = TT, this.model = kT, this.initialCapacity = cT, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(TT) {
        let kT = this.kinds.get(TT);
        if (void 0 === kT) {
          const cT = this.api.createInstancePool({
            ...this.model,
            item: TT
          }, this.initialCapacity);
          null === cT || void 0 === cT || cT.setOrigin(this.origin[0], this.origin[1], this.origin[2]), kT = cT && new KT(cT, this.origin), this.kinds.set(TT, kT)
        }
        return kT
      }
      follow(TT) {
        const {
          origin: kT
        } = this;
        if (Math.abs(TT[0] - kT[0]) <= 512 && Math.abs(TT[1] - kT[1]) <= 512 && Math.abs(TT[2] - kT[2]) <= 512) return !1;
        kT[0] = Math.floor(TT[0]), kT[1] = Math.floor(TT[1]), kT[2] = Math.floor(TT[2]);
        for (const cT of this.kinds.values()) null === cT || void 0 === cT || cT.pool.setOrigin(kT[0], kT[1], kT[2]);
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
  39064: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => AT
    });
    const lT = "Pipe",
      MT = "Extractor Pipe",
      KT = (new Set([lT, MT]), new Set([lT, MT, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var OT = cT(38341);
    class yT {
      constructor(TT) {
        this.api = TT, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new OT.d(TT, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(TT) {
        if (TT.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${TT.id} with < 2 waypoints`);
        const kT = this.kinds.kindOf(TT.itemName);
        if (!kT) return void(this.unshown.has(TT.itemName) || (this.unshown.add(TT.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${TT.itemName}"`)));
        this.remove(TT.id);
        const cT = function(TT) {
          return (TT.waypoints.length - 1) / 2 * 1e3
        }(TT);
        if (Date.now() - TT.startTimeMs > cT + 2e3) return;
        const lT = kT.take();
        this.items.set(TT.id, {
          kind: kT,
          slot: lT,
          waypoints: TT.waypoints,
          startTimeMs: TT.startTimeMs,
          durationMs: cT
        })
      }
      onEnd(TT) {
        this.remove(TT.id)
      }
      pN() {
        if (0 === this.items.size) return void this.kinds.commit();
        const TT = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [kT, cT] of this.items) TT - cT.startTimeMs > cT.durationMs + 2e3 ? this.remove(kT) : this.write(cT, TT);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(TT) {
        const kT = this.items.get(TT);
        kT && (kT.kind.release(kT.slot), this.items.delete(TT))
      }
      write(TT, kT) {
        const cT = TT.waypoints.length - 1;
        let lT = (kT - TT.startTimeMs) / TT.durationMs;
        lT < 0 ? lT = 0 : lT > 1 && (lT = 1);
        const MT = lT * cT;
        let KT = Math.floor(MT);
        KT >= cT && (KT = cT - 1);
        const OT = MT - KT,
          [yT, fT, xT] = TT.waypoints[KT],
          [IT, AT, CT] = TT.waypoints[KT + 1];
        TT.kind.write(TT.slot, yT + (IT - yT) * OT + .5, fT + (AT - fT) * OT + .5, xT + (CT - xT) * OT + .5)
      }
    }
    const fT = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      xT = new Set(fT);
    class IT {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(TT) {
        this.api = TT, this.pipeVisualizer = new yT(TT)
      }
      onClose() {
        var TT;
        null === (TT = this.pipeVisualizer) || void 0 === TT || TT.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(TT, kT) {
        const {
          pipeVisualizer: cT
        } = this;
        if (cT)
          if ("pipeItemSpawnBatch" === TT)
            for (const lT of kT.items) cT.onSpawn(lT);
          else if ("pipeItemEndBatch" === TT)
          for (const lT of kT.items) cT.onEnd(lT)
      }
      pN() {
        var TT;
        null === (TT = this.pipeVisualizer) || void 0 === TT || TT.pN()
      }
      onPlayerAttemptAltAction(TT, kT, cT, lT, MT, OT) {
        var yT;
        if (!xT.has(this.api.getMetaInfo(MT).rootName)) return;
        const fT = null === (yT = this.api.ckT(TT)) || void 0 === yT ? void 0 : yT.name;
        return void 0 !== fT && KT.has(fT) ? "preventAction" : void 0
      }
    }
    const AT = function(TT, kT, cT) {
      if ("survivalFactory" !== cT && "survivalFactoryPersistent" !== cT) {
        return {}
      }
      const lT = new IT;
      return {
        onCreate: TT => {
          lT.onCreate(TT)
        },
        onClose: () => {
          lT.onClose()
        },
        onReceivedMessageFromServer: (TT, kT) => {
          lT.onReceivedMessageFromServer(TT, kT)
        },
        UA: () => {
          lT.pN()
        },
        altVetoBlocks: fT,
        onPlayerAttemptAltAction: (TT, kT, cT, MT, KT, OT) => lT.onPlayerAttemptAltAction(TT, kT, cT, MT, KT, OT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);