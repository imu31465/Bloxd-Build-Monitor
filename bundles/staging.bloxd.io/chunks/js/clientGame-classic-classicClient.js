export const id = 12;
export const ids = [12, 13];
export const modules = {
  39162: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(39167);
    const DB = [0, 0, 0];
    class QB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DB;
        this.pool = BB, this.origin = OB, this.count = 0, this.free = []
      }
      take() {
        var BB;
        const OB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.count++;
        return OB >= this.pool.CP && this.pool.grow(Math.max(2 * this.pool.CP, OB + 1)), this.hide(OB), OB
      }
      release(BB) {
        this.hide(BB), this.free.push(BB)
      }
      write(BB, OB, GB, DB) {
        const {
          records: QB
        } = this.pool, {
          origin: oB
        } = this, jB = BB * YB.b;
        QB[jB] = OB - oB[0], QB[jB + 1] = GB - oB[1], QB[jB + 2] = DB - oB[2], QB[jB + YB.e] = 0, this.pool.markDirty(BB)
      }
      hide(BB) {
        this.pool.records[BB * YB.b + YB.e] = 1, this.pool.markDirty(BB)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class oB {
      constructor(BB, OB, GB) {
        this.api = BB, this.model = OB, this.initialCapacity = GB, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(BB) {
        let OB = this.kinds.get(BB);
        if (void 0 === OB) {
          const GB = this.api.createInstancePool({
            ...this.model,
            item: BB
          }, this.initialCapacity);
          null === GB || void 0 === GB || GB.setOrigin(this.origin[0], this.origin[1], this.origin[2]), OB = GB && new QB(GB, this.origin), this.kinds.set(BB, OB)
        }
        return OB
      }
      follow(BB) {
        const {
          origin: OB
        } = this;
        if (Math.abs(BB[0] - OB[0]) <= 512 && Math.abs(BB[1] - OB[1]) <= 512 && Math.abs(BB[2] - OB[2]) <= 512) return !1;
        OB[0] = Math.floor(BB[0]), OB[1] = Math.floor(BB[1]), OB[2] = Math.floor(BB[2]);
        for (const GB of this.kinds.values()) null === GB || void 0 === GB || GB.pool.setOrigin(OB[0], OB[1], OB[2]);
        return !0
      }
      commit() {
        for (const BB of this.kinds.values()) null === BB || void 0 === BB || BB.commit()
      }
      dispose() {
        for (const BB of this.kinds.values()) null === BB || void 0 === BB || BB.dispose();
        this.kinds.clear()
      }
    }
  },
  40001: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => zB
    });
    const YB = "Pipe",
      DB = "Extractor Pipe",
      QB = (new Set([YB, DB]), new Set([YB, DB, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var oB = GB(39162);
    class jB {
      constructor(BB) {
        this.api = BB, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new oB.c(BB, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(BB) {
        if (BB.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${BB.id} with < 2 waypoints`);
        const OB = this.kinds.kindOf(BB.itemName);
        if (!OB) return void(this.unshown.has(BB.itemName) || (this.unshown.add(BB.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${BB.itemName}"`)));
        this.remove(BB.id);
        const GB = function(BB) {
          return (BB.waypoints.length - 1) / 2 * 1e3
        }(BB);
        if (Date.now() - BB.startTimeMs > GB + 2e3) return;
        const YB = OB.take();
        this.items.set(BB.id, {
          kind: OB,
          slot: YB,
          waypoints: BB.waypoints,
          startTimeMs: BB.startTimeMs,
          durationMs: GB
        })
      }
      onEnd(BB) {
        this.remove(BB.id)
      }
      yR() {
        if (0 === this.items.size) return void this.kinds.commit();
        const BB = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [OB, GB] of this.items) BB - GB.startTimeMs > GB.durationMs + 2e3 ? this.remove(OB) : this.write(GB, BB);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(BB) {
        const OB = this.items.get(BB);
        OB && (OB.kind.release(OB.slot), this.items.delete(BB))
      }
      write(BB, OB) {
        const GB = BB.waypoints.length - 1;
        let YB = (OB - BB.startTimeMs) / BB.durationMs;
        YB < 0 ? YB = 0 : YB > 1 && (YB = 1);
        const DB = YB * GB;
        let QB = Math.floor(DB);
        QB >= GB && (QB = GB - 1);
        const oB = DB - QB,
          [jB, yB, JB] = BB.waypoints[QB],
          [MB, PB, zB] = BB.waypoints[QB + 1];
        BB.kind.write(BB.slot, jB + (MB - jB) * oB + .5, yB + (PB - yB) * oB + .5, JB + (zB - JB) * oB + .5)
      }
    }
    const yB = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      JB = new Set(yB);
    class MB {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(BB) {
        this.api = BB, this.pipeVisualizer = new jB(BB)
      }
      onClose() {
        var BB;
        null === (BB = this.pipeVisualizer) || void 0 === BB || BB.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(BB, OB) {
        const {
          pipeVisualizer: GB
        } = this;
        if (GB)
          if ("pipeItemSpawnBatch" === BB)
            for (const YB of OB.items) GB.onSpawn(YB);
          else if ("pipeItemEndBatch" === BB)
          for (const YB of OB.items) GB.onEnd(YB)
      }
      yR() {
        var BB;
        null === (BB = this.pipeVisualizer) || void 0 === BB || BB.yR()
      }
      onPlayerAttemptAltAction(BB, OB, GB, YB, DB, oB) {
        var jB;
        if (!JB.has(this.api.getMetaInfo(DB).rootName)) return;
        const yB = null === (jB = this.api.MYB(BB)) || void 0 === jB ? void 0 : jB.name;
        return void 0 !== yB && QB.has(yB) ? "preventAction" : void 0
      }
    }
    var PB = GB(40007);
    const zB = function(BB, OB, GB) {
      if ("smp2" === GB) return (0, PB.makeSmp2ClientGame)();
      if ("survivalFactory" !== GB && "survivalFactoryPersistent" !== GB) {
        return {}
      }
      const YB = new MB;
      return {
        onCreate: BB => {
          YB.onCreate(BB)
        },
        onClose: () => {
          YB.onClose()
        },
        onReceivedMessageFromServer: (BB, OB) => {
          YB.onReceivedMessageFromServer(BB, OB)
        },
        kP: () => {
          YB.yR()
        },
        altVetoBlocks: yB,
        onPlayerAttemptAltAction: (BB, OB, GB, DB, QB, oB) => YB.onPlayerAttemptAltAction(BB, OB, GB, DB, QB, oB)
      }
    }
  },
  40007: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      makeSmp2ClientGame: () => QB
    });
    const YB = "smp2FirstSpawn";
    var DB = GB(1723);

    function QB() {
      let BB = !1;
      return {
        onReceivedMessageFromServer: OB => {
          OB !== YB || BB || (BB = !0, (0, DB.h)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);