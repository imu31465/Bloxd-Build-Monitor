export const id = 12;
export const ids = [12, 13];
export const modules = {
  39383: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(39385);
    const rH = [0, 0, 0];
    class SH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH;
        this.pool = HH, this.origin = BH, this.count = 0, this.free = []
      }
      take() {
        var HH;
        const BH = null !== (HH = this.free.pop()) && void 0 !== HH ? HH : this.count++;
        return BH >= this.pool.aX && this.pool.grow(Math.max(2 * this.pool.aX, BH + 1)), this.hide(BH), BH
      }
      release(HH) {
        this.hide(HH), this.free.push(HH)
      }
      write(HH, BH, LH, rH) {
        const {
          records: SH
        } = this.pool, {
          origin: hH
        } = this, tH = HH * AH.d;
        SH[tH] = BH - hH[0], SH[tH + 1] = LH - hH[1], SH[tH + 2] = rH - hH[2], SH[tH + AH.g] = 0, this.pool.markDirty(HH)
      }
      hide(HH) {
        this.pool.records[HH * AH.d + AH.g] = 1, this.pool.markDirty(HH)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class hH {
      constructor(HH, BH, LH) {
        this.api = HH, this.model = BH, this.initialCapacity = LH, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(HH) {
        let BH = this.kinds.get(HH);
        if (void 0 === BH) {
          const LH = this.api.createInstancePool({
            ...this.model,
            item: HH
          }, this.initialCapacity);
          null === LH || void 0 === LH || LH.setOrigin(this.origin[0], this.origin[1], this.origin[2]), BH = LH && new SH(LH, this.origin), this.kinds.set(HH, BH)
        }
        return BH
      }
      follow(HH) {
        const {
          origin: BH
        } = this;
        if (Math.abs(HH[0] - BH[0]) <= 512 && Math.abs(HH[1] - BH[1]) <= 512 && Math.abs(HH[2] - BH[2]) <= 512) return !1;
        BH[0] = Math.floor(HH[0]), BH[1] = Math.floor(HH[1]), BH[2] = Math.floor(HH[2]);
        for (const LH of this.kinds.values()) null === LH || void 0 === LH || LH.pool.setOrigin(BH[0], BH[1], BH[2]);
        return !0
      }
      commit() {
        for (const HH of this.kinds.values()) null === HH || void 0 === HH || HH.commit()
      }
      dispose() {
        for (const HH of this.kinds.values()) null === HH || void 0 === HH || HH.dispose();
        this.kinds.clear()
      }
    }
  },
  40259: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => GH
    });
    const AH = "Pipe",
      rH = "Extractor Pipe",
      SH = (new Set([AH, rH]), new Set([AH, rH, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var hH = LH(39383);
    class tH {
      constructor(HH) {
        this.api = HH, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new hH.d(HH, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(HH) {
        if (HH.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${HH.id} with < 2 waypoints`);
        const BH = this.kinds.kindOf(HH.itemName);
        if (!BH) return void(this.unshown.has(HH.itemName) || (this.unshown.add(HH.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${HH.itemName}"`)));
        this.remove(HH.id);
        const LH = function(HH) {
          return (HH.waypoints.length - 1) / 2 * 1e3
        }(HH);
        if (Date.now() - HH.startTimeMs > LH + 2e3) return;
        const AH = BH.take();
        this.items.set(HH.id, {
          kind: BH,
          slot: AH,
          waypoints: HH.waypoints,
          startTimeMs: HH.startTimeMs,
          durationMs: LH
        })
      }
      onEnd(HH) {
        this.remove(HH.id)
      }
      Dv() {
        if (0 === this.items.size) return void this.kinds.commit();
        const HH = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [BH, LH] of this.items) HH - LH.startTimeMs > LH.durationMs + 2e3 ? this.remove(BH) : this.write(LH, HH);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(HH) {
        const BH = this.items.get(HH);
        BH && (BH.kind.release(BH.slot), this.items.delete(HH))
      }
      write(HH, BH) {
        const LH = HH.waypoints.length - 1;
        let AH = (BH - HH.startTimeMs) / HH.durationMs;
        AH < 0 ? AH = 0 : AH > 1 && (AH = 1);
        const rH = AH * LH;
        let SH = Math.floor(rH);
        SH >= LH && (SH = LH - 1);
        const hH = rH - SH,
          [tH, zH, CH] = HH.waypoints[SH],
          [EH, XH, GH] = HH.waypoints[SH + 1];
        HH.kind.write(HH.slot, tH + (EH - tH) * hH + .5, zH + (XH - zH) * hH + .5, CH + (GH - CH) * hH + .5)
      }
    }
    const zH = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      CH = new Set(zH);
    class EH {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(HH) {
        this.api = HH, this.pipeVisualizer = new tH(HH)
      }
      onClose() {
        var HH;
        null === (HH = this.pipeVisualizer) || void 0 === HH || HH.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(HH, BH) {
        const {
          pipeVisualizer: LH
        } = this;
        if (LH)
          if ("pipeItemSpawnBatch" === HH)
            for (const AH of BH.items) LH.onSpawn(AH);
          else if ("pipeItemEndBatch" === HH)
          for (const AH of BH.items) LH.onEnd(AH)
      }
      Dv() {
        var HH;
        null === (HH = this.pipeVisualizer) || void 0 === HH || HH.Dv()
      }
      onPlayerAttemptAltAction(HH, BH, LH, AH, rH, hH) {
        var tH;
        if (!CH.has(this.api.getMetaInfo(rH).rootName)) return;
        const zH = null === (tH = this.api.yLH(HH)) || void 0 === tH ? void 0 : tH.name;
        return void 0 !== zH && SH.has(zH) ? "preventAction" : void 0
      }
    }
    var XH = LH(40261);
    const GH = function(HH, BH, LH) {
      if ("smp2" === LH) return (0, XH.makeSmp2ClientGame)();
      if ("survivalFactory" !== LH && "survivalFactoryPersistent" !== LH) {
        return {}
      }
      const AH = new EH;
      return {
        onCreate: HH => {
          AH.onCreate(HH)
        },
        onClose: () => {
          AH.onClose()
        },
        onReceivedMessageFromServer: (HH, BH) => {
          AH.onReceivedMessageFromServer(HH, BH)
        },
        IX: () => {
          AH.Dv()
        },
        altVetoBlocks: zH,
        onPlayerAttemptAltAction: (HH, BH, LH, rH, SH, hH) => AH.onPlayerAttemptAltAction(HH, BH, LH, rH, SH, hH)
      }
    }
  },
  40261: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      makeSmp2ClientGame: () => SH
    });
    const AH = "smp2FirstSpawn";
    var rH = LH(1689);

    function SH() {
      let HH = !1;
      return {
        onReceivedMessageFromServer: BH => {
          BH !== AH || HH || (HH = !0, (0, rH.f)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);