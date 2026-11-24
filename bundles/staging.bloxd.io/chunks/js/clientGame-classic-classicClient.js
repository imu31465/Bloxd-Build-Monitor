export const id = 12;
export const ids = [12];
export const modules = {
  38633: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(38641);
    const zT = [0, 0, 0];
    class MT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT;
        this.pool = TT, this.origin = UT, this.count = 0, this.free = []
      }
      take() {
        var TT;
        const UT = null !== (TT = this.free.pop()) && void 0 !== TT ? TT : this.count++;
        return UT >= this.pool.fl && this.pool.grow(Math.max(2 * this.pool.fl, UT + 1)), this.hide(UT), UT
      }
      release(TT) {
        this.hide(TT), this.free.push(TT)
      }
      write(TT, UT, mT, zT) {
        const {
          records: MT
        } = this.pool, {
          origin: gT
        } = this, nT = TT * WT.b;
        MT[nT] = UT - gT[0], MT[nT + 1] = mT - gT[1], MT[nT + 2] = zT - gT[2], MT[nT + WT.f] = 0, this.pool.markDirty(TT)
      }
      hide(TT) {
        this.pool.records[TT * WT.b + WT.f] = 1, this.pool.markDirty(TT)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class gT {
      constructor(TT, UT, mT) {
        this.api = TT, this.model = UT, this.initialCapacity = mT, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(TT) {
        let UT = this.kinds.get(TT);
        if (void 0 === UT) {
          const mT = this.api.createInstancePool({
            ...this.model,
            item: TT
          }, this.initialCapacity);
          null === mT || void 0 === mT || mT.setOrigin(this.origin[0], this.origin[1], this.origin[2]), UT = mT && new MT(mT, this.origin), this.kinds.set(TT, UT)
        }
        return UT
      }
      follow(TT) {
        const {
          origin: UT
        } = this;
        if (Math.abs(TT[0] - UT[0]) <= 512 && Math.abs(TT[1] - UT[1]) <= 512 && Math.abs(TT[2] - UT[2]) <= 512) return !1;
        UT[0] = Math.floor(TT[0]), UT[1] = Math.floor(TT[1]), UT[2] = Math.floor(TT[2]);
        for (const mT of this.kinds.values()) null === mT || void 0 === mT || mT.pool.setOrigin(UT[0], UT[1], UT[2]);
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
  39403: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => lT
    });
    const WT = "Pipe",
      zT = "Extractor Pipe",
      MT = (new Set([WT, zT]), new Set([WT, zT, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var gT = mT(38633);
    class nT {
      constructor(TT) {
        this.api = TT, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new gT.c(TT, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(TT) {
        if (TT.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${TT.id} with < 2 waypoints`);
        const UT = this.kinds.kindOf(TT.itemName);
        if (!UT) return void(this.unshown.has(TT.itemName) || (this.unshown.add(TT.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${TT.itemName}"`)));
        this.remove(TT.id);
        const mT = function(TT) {
          return (TT.waypoints.length - 1) / 2 * 1e3
        }(TT);
        if (Date.now() - TT.startTimeMs > mT + 2e3) return;
        const WT = UT.take();
        this.items.set(TT.id, {
          kind: UT,
          slot: WT,
          waypoints: TT.waypoints,
          startTimeMs: TT.startTimeMs,
          durationMs: mT
        })
      }
      onEnd(TT) {
        this.remove(TT.id)
      }
      hq() {
        if (0 === this.items.size) return void this.kinds.commit();
        const TT = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [UT, mT] of this.items) TT - mT.startTimeMs > mT.durationMs + 2e3 ? this.remove(UT) : this.write(mT, TT);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(TT) {
        const UT = this.items.get(TT);
        UT && (UT.kind.release(UT.slot), this.items.delete(TT))
      }
      write(TT, UT) {
        const mT = TT.waypoints.length - 1;
        let WT = (UT - TT.startTimeMs) / TT.durationMs;
        WT < 0 ? WT = 0 : WT > 1 && (WT = 1);
        const zT = WT * mT;
        let MT = Math.floor(zT);
        MT >= mT && (MT = mT - 1);
        const gT = zT - MT,
          [nT, HT, kT] = TT.waypoints[MT],
          [jT, lT, LT] = TT.waypoints[MT + 1];
        TT.kind.write(TT.slot, nT + (jT - nT) * gT + .5, HT + (lT - HT) * gT + .5, kT + (LT - kT) * gT + .5)
      }
    }
    const HT = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      kT = new Set(HT);
    class jT {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(TT) {
        this.api = TT, this.pipeVisualizer = new nT(TT)
      }
      onClose() {
        var TT;
        null === (TT = this.pipeVisualizer) || void 0 === TT || TT.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(TT, UT) {
        const {
          pipeVisualizer: mT
        } = this;
        if (mT)
          if ("pipeItemSpawnBatch" === TT)
            for (const WT of UT.items) mT.onSpawn(WT);
          else if ("pipeItemEndBatch" === TT)
          for (const WT of UT.items) mT.onEnd(WT)
      }
      hq() {
        var TT;
        null === (TT = this.pipeVisualizer) || void 0 === TT || TT.hq()
      }
      onPlayerAttemptAltAction(TT, UT, mT, WT, zT, gT) {
        var nT;
        if (!kT.has(this.api.getMetaInfo(zT).rootName)) return;
        const HT = null === (nT = this.api.RUT(TT)) || void 0 === nT ? void 0 : nT.name;
        return void 0 !== HT && MT.has(HT) ? "preventAction" : void 0
      }
    }
    const lT = function(TT, UT, mT) {
      if ("survivalFactory" !== mT && "survivalFactoryPersistent" !== mT) {
        return {}
      }
      const WT = new jT;
      return {
        onCreate: TT => {
          WT.onCreate(TT)
        },
        onClose: () => {
          WT.onClose()
        },
        onReceivedMessageFromServer: (TT, UT) => {
          WT.onReceivedMessageFromServer(TT, UT)
        },
        Cl: () => {
          WT.hq()
        },
        altVetoBlocks: HT,
        onPlayerAttemptAltAction: (TT, UT, mT, zT, MT, gT) => WT.onPlayerAttemptAltAction(TT, UT, mT, zT, MT, gT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);