export const id = 12;
export const ids = [12];
export const modules = {
  37882: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(37886);
    const AY = [0, 0, 0];
    class IY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AY;
        this.pool = YY, this.origin = rY, this.count = 0, this.free = []
      }
      take() {
        var YY;
        const rY = null !== (YY = this.free.pop()) && void 0 !== YY ? YY : this.count++;
        return rY >= this.pool.gu && this.pool.grow(Math.max(2 * this.pool.gu, rY + 1)), this.hide(rY), rY
      }
      release(YY) {
        this.hide(YY), this.free.push(YY)
      }
      write(YY, rY, DY, AY) {
        const {
          records: IY
        } = this.pool, {
          origin: RY
        } = this, OY = YY * FY.b;
        IY[OY] = rY - RY[0], IY[OY + 1] = DY - RY[1], IY[OY + 2] = AY - RY[2], IY[OY + FY.d] = 0, this.pool.markDirty(YY)
      }
      hide(YY) {
        this.pool.records[YY * FY.b + FY.d] = 1, this.pool.markDirty(YY)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class RY {
      constructor(YY, rY, DY) {
        this.api = YY, this.model = rY, this.initialCapacity = DY, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(YY) {
        let rY = this.kinds.get(YY);
        if (void 0 === rY) {
          const DY = this.api.createInstancePool({
            ...this.model,
            item: YY
          }, this.initialCapacity);
          null === DY || void 0 === DY || DY.setOrigin(this.origin[0], this.origin[1], this.origin[2]), rY = DY && new IY(DY, this.origin), this.kinds.set(YY, rY)
        }
        return rY
      }
      follow(YY) {
        const {
          origin: rY
        } = this;
        if (Math.abs(YY[0] - rY[0]) <= 512 && Math.abs(YY[1] - rY[1]) <= 512 && Math.abs(YY[2] - rY[2]) <= 512) return !1;
        rY[0] = Math.floor(YY[0]), rY[1] = Math.floor(YY[1]), rY[2] = Math.floor(YY[2]);
        for (const DY of this.kinds.values()) null === DY || void 0 === DY || DY.pool.setOrigin(rY[0], rY[1], rY[2]);
        return !0
      }
      commit() {
        for (const YY of this.kinds.values()) null === YY || void 0 === YY || YY.commit()
      }
      dispose() {
        for (const YY of this.kinds.values()) null === YY || void 0 === YY || YY.dispose();
        this.kinds.clear()
      }
    }
  },
  38597: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => uY
    });
    const FY = "Pipe",
      AY = "Extractor Pipe",
      IY = (new Set([FY, AY]), new Set([FY, AY, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var RY = DY(37882);
    class OY {
      constructor(YY) {
        this.api = YY, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new RY.d(YY, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(YY) {
        if (YY.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${YY.id} with < 2 waypoints`);
        const rY = this.kinds.kindOf(YY.itemName);
        if (!rY) return void(this.unshown.has(YY.itemName) || (this.unshown.add(YY.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${YY.itemName}"`)));
        this.remove(YY.id);
        const DY = function(YY) {
          return (YY.waypoints.length - 1) / 2 * 1e3
        }(YY);
        if (Date.now() - YY.startTimeMs > DY + 2e3) return;
        const FY = rY.take();
        this.items.set(YY.id, {
          kind: rY,
          slot: FY,
          waypoints: YY.waypoints,
          startTimeMs: YY.startTimeMs,
          durationMs: DY
        })
      }
      onEnd(YY) {
        this.remove(YY.id)
      }
      yE() {
        if (0 === this.items.size) return void this.kinds.commit();
        const YY = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [rY, DY] of this.items) YY - DY.startTimeMs > DY.durationMs + 2e3 ? this.remove(rY) : this.write(DY, YY);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(YY) {
        const rY = this.items.get(YY);
        rY && (rY.kind.release(rY.slot), this.items.delete(YY))
      }
      write(YY, rY) {
        const DY = YY.waypoints.length - 1;
        let FY = (rY - YY.startTimeMs) / YY.durationMs;
        FY < 0 ? FY = 0 : FY > 1 && (FY = 1);
        const AY = FY * DY;
        let IY = Math.floor(AY);
        IY >= DY && (IY = DY - 1);
        const RY = AY - IY,
          [OY, gY, aY] = YY.waypoints[IY],
          [vY, uY, sY] = YY.waypoints[IY + 1];
        YY.kind.write(YY.slot, OY + (vY - OY) * RY + .5, gY + (uY - gY) * RY + .5, aY + (sY - aY) * RY + .5)
      }
    }
    const gY = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      aY = new Set(gY);
    class vY {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(YY) {
        this.api = YY, this.pipeVisualizer = new OY(YY)
      }
      onClose() {
        var YY;
        null === (YY = this.pipeVisualizer) || void 0 === YY || YY.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(YY, rY) {
        const {
          pipeVisualizer: DY
        } = this;
        if (DY)
          if ("pipeItemSpawnBatch" === YY)
            for (const FY of rY.items) DY.onSpawn(FY);
          else if ("pipeItemEndBatch" === YY)
          for (const FY of rY.items) DY.onEnd(FY)
      }
      yE() {
        var YY;
        null === (YY = this.pipeVisualizer) || void 0 === YY || YY.yE()
      }
      onPlayerAttemptAltAction(YY, rY, DY, FY, AY, RY) {
        var OY;
        if (!aY.has(this.api.getMetaInfo(AY).rootName)) return;
        const gY = null === (OY = this.api.rrY(YY)) || void 0 === OY ? void 0 : OY.name;
        return void 0 !== gY && IY.has(gY) ? "preventAction" : void 0
      }
    }
    const uY = function(YY, rY, DY) {
      if ("survivalFactory" !== DY && "survivalFactoryPersistent" !== DY) {
        return {}
      }
      const FY = new vY;
      return {
        onCreate: YY => {
          FY.onCreate(YY)
        },
        onClose: () => {
          FY.onClose()
        },
        onReceivedMessageFromServer: (YY, rY) => {
          FY.onReceivedMessageFromServer(YY, rY)
        },
        Zu: () => {
          FY.yE()
        },
        altVetoBlocks: gY,
        onPlayerAttemptAltAction: (YY, rY, DY, AY, IY, RY) => FY.onPlayerAttemptAltAction(YY, rY, DY, AY, IY, RY)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);