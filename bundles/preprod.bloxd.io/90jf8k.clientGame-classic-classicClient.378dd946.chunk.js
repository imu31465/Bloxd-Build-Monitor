export const id = 11;
export const ids = [11];
export const modules = {
  36924: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF
    });
    var CF = SF(36931);
    const AF = [0, 0, 0];
    class uF {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AF;
        this.pool = FF, this.origin = WF, this.count = 0, this.free = []
      }
      take() {
        var FF;
        const WF = null !== (FF = this.free.pop()) && void 0 !== FF ? FF : this.count++;
        return WF >= this.pool.ZF && this.pool.grow(Math.max(2 * this.pool.ZF, WF + 1)), this.hide(WF), WF
      }
      release(FF) {
        this.hide(FF), this.free.push(FF)
      }
      write(FF, WF, SF, AF) {
        const {
          records: uF
        } = this.pool, {
          origin: hF
        } = this, bW = FF * CF.d;
        uF[bW] = WF - hF[0], uF[bW + 1] = SF - hF[1], uF[bW + 2] = AF - hF[2], uF[bW + CF.e] = 0, this.pool.markDirty(FF)
      }
      hide(FF) {
        this.pool.records[FF * CF.d + CF.e] = 1, this.pool.markDirty(FF)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class hF {
      constructor(FF, WF, SF) {
        this.api = FF, this.model = WF, this.initialCapacity = SF, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(FF) {
        let WF = this.kinds.get(FF);
        if (void 0 === WF) {
          const SF = this.api.createInstancePool({
            ...this.model,
            item: FF
          }, this.initialCapacity);
          null === SF || void 0 === SF || SF.setOrigin(this.origin[0], this.origin[1], this.origin[2]), WF = SF && new uF(SF, this.origin), this.kinds.set(FF, WF)
        }
        return WF
      }
      follow(FF) {
        const {
          origin: WF
        } = this;
        if (Math.abs(FF[0] - WF[0]) <= 512 && Math.abs(FF[1] - WF[1]) <= 512 && Math.abs(FF[2] - WF[2]) <= 512) return !1;
        WF[0] = Math.floor(FF[0]), WF[1] = Math.floor(FF[1]), WF[2] = Math.floor(FF[2]);
        for (const SF of this.kinds.values()) null === SF || void 0 === SF || SF.pool.setOrigin(WF[0], WF[1], WF[2]);
        return !0
      }
      commit() {
        for (const FF of this.kinds.values()) null === FF || void 0 === FF || FF.commit()
      }
      dispose() {
        for (const FF of this.kinds.values()) null === FF || void 0 === FF || FF.dispose();
        this.kinds.clear()
      }
    }
  },
  37592: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => iW
    });
    const CF = "Pipe",
      AF = "Extractor Pipe",
      uF = (new Set([CF, AF]), new Set([CF, AF, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var hF = SF(36924);
    class bW {
      constructor(FF) {
        this.api = FF, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new hF.b(FF, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(FF) {
        if (FF.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${FF.id} with < 2 waypoints`);
        const WF = this.kinds.kindOf(FF.itemName);
        if (!WF) return void(this.unshown.has(FF.itemName) || (this.unshown.add(FF.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${FF.itemName}"`)));
        this.remove(FF.id);
        const SF = function(FF) {
          return (FF.waypoints.length - 1) / 2 * 1e3
        }(FF);
        if (Date.now() - FF.startTimeMs > SF + 2e3) return;
        const CF = WF.take();
        this.items.set(FF.id, {
          kind: WF,
          slot: CF,
          waypoints: FF.waypoints,
          startTimeMs: FF.startTimeMs,
          durationMs: SF
        })
      }
      onEnd(FF) {
        this.remove(FF.id)
      }
      eD() {
        if (0 === this.items.size) return void this.kinds.commit();
        const FF = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [WF, SF] of this.items) FF - SF.startTimeMs > SF.durationMs + 2e3 ? this.remove(WF) : this.write(SF, FF);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(FF) {
        const WF = this.items.get(FF);
        WF && (WF.kind.release(WF.slot), this.items.delete(FF))
      }
      write(FF, WF) {
        const SF = FF.waypoints.length - 1;
        let CF = (WF - FF.startTimeMs) / FF.durationMs;
        CF < 0 ? CF = 0 : CF > 1 && (CF = 1);
        const AF = CF * SF;
        let uF = Math.floor(AF);
        uF >= SF && (uF = SF - 1);
        const hF = AF - uF,
          [bW, dF, PF] = FF.waypoints[uF],
          [RF, iW, eF] = FF.waypoints[uF + 1];
        FF.kind.write(FF.slot, bW + (RF - bW) * hF + .5, dF + (iW - dF) * hF + .5, PF + (eF - PF) * hF + .5)
      }
    }
    const dF = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      PF = new Set(dF);
    class RF {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(FF) {
        this.api = FF, this.pipeVisualizer = new bW(FF)
      }
      onClose() {
        var FF;
        null === (FF = this.pipeVisualizer) || void 0 === FF || FF.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(FF, WF) {
        const {
          pipeVisualizer: SF
        } = this;
        if (SF)
          if ("pipeItemSpawnBatch" === FF)
            for (const CF of WF.items) SF.onSpawn(CF);
          else if ("pipeItemEndBatch" === FF)
          for (const CF of WF.items) SF.onEnd(CF)
      }
      eD() {
        var FF;
        null === (FF = this.pipeVisualizer) || void 0 === FF || FF.eD()
      }
      onPlayerAttemptAltAction(FF, WF, SF, CF, AF, hF) {
        var bW;
        if (!PF.has(this.api.getMetaInfo(AF).rootName)) return;
        const dF = null === (bW = this.api.pbF(FF)) || void 0 === bW ? void 0 : bW.name;
        return void 0 !== dF && uF.has(dF) ? "preventAction" : void 0
      }
    }
    const iW = function(FF, WF, SF) {
      if ("survivalFactory" !== SF && "survivalFactoryPersistent" !== SF) {
        return {}
      }
      const CF = new RF;
      return {
        onCreate: FF => {
          CF.onCreate(FF)
        },
        onClose: () => {
          CF.onClose()
        },
        onReceivedMessageFromServer: (FF, WF) => {
          CF.onReceivedMessageFromServer(FF, WF)
        },
        lF: () => {
          CF.eD()
        },
        altVetoBlocks: dF,
        onPlayerAttemptAltAction: (FF, WF, SF, AF, uF, hF) => CF.onPlayerAttemptAltAction(FF, WF, SF, AF, uF, hF)
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);