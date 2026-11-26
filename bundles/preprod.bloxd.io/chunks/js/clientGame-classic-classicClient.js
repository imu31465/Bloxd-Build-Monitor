export const id = 12;
export const ids = [12, 13];
export const modules = {
  39285: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(39293);
    const yU = [0, 0, 0];
    class QU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU;
        this.pool = UU, this.origin = XU, this.count = 0, this.free = []
      }
      take() {
        var UU;
        const XU = null !== (UU = this.free.pop()) && void 0 !== UU ? UU : this.count++;
        return XU >= this.pool.xY && this.pool.grow(Math.max(2 * this.pool.xY, XU + 1)), this.hide(XU), XU
      }
      release(UU) {
        this.hide(UU), this.free.push(UU)
      }
      write(UU, XU, zU, yU) {
        const {
          records: QU
        } = this.pool, {
          origin: AU
        } = this, FU = UU * cU.e;
        QU[FU] = XU - AU[0], QU[FU + 1] = zU - AU[1], QU[FU + 2] = yU - AU[2], QU[FU + cU.h] = 0, this.pool.markDirty(UU)
      }
      hide(UU) {
        this.pool.records[UU * cU.e + cU.h] = 1, this.pool.markDirty(UU)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class AU {
      constructor(UU, XU, zU) {
        this.api = UU, this.model = XU, this.initialCapacity = zU, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(UU) {
        let XU = this.kinds.get(UU);
        if (void 0 === XU) {
          const zU = this.api.createInstancePool({
            ...this.model,
            item: UU
          }, this.initialCapacity);
          null === zU || void 0 === zU || zU.setOrigin(this.origin[0], this.origin[1], this.origin[2]), XU = zU && new QU(zU, this.origin), this.kinds.set(UU, XU)
        }
        return XU
      }
      follow(UU) {
        const {
          origin: XU
        } = this;
        if (Math.abs(UU[0] - XU[0]) <= 512 && Math.abs(UU[1] - XU[1]) <= 512 && Math.abs(UU[2] - XU[2]) <= 512) return !1;
        XU[0] = Math.floor(UU[0]), XU[1] = Math.floor(UU[1]), XU[2] = Math.floor(UU[2]);
        for (const zU of this.kinds.values()) null === zU || void 0 === zU || zU.pool.setOrigin(XU[0], XU[1], XU[2]);
        return !0
      }
      commit() {
        for (const UU of this.kinds.values()) null === UU || void 0 === UU || UU.commit()
      }
      dispose() {
        for (const UU of this.kinds.values()) null === UU || void 0 === UU || UU.dispose();
        this.kinds.clear()
      }
    }
  },
  40147: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => NU
    });
    const cU = "Pipe",
      yU = "Extractor Pipe",
      QU = (new Set([cU, yU]), new Set([cU, yU, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var AU = zU(39285);
    class FU {
      constructor(UU) {
        this.api = UU, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new AU.d(UU, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(UU) {
        if (UU.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${UU.id} with < 2 waypoints`);
        const XU = this.kinds.kindOf(UU.itemName);
        if (!XU) return void(this.unshown.has(UU.itemName) || (this.unshown.add(UU.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${UU.itemName}"`)));
        this.remove(UU.id);
        const zU = function(UU) {
          return (UU.waypoints.length - 1) / 2 * 1e3
        }(UU);
        if (Date.now() - UU.startTimeMs > zU + 2e3) return;
        const cU = XU.take();
        this.items.set(UU.id, {
          kind: XU,
          slot: cU,
          waypoints: UU.waypoints,
          startTimeMs: UU.startTimeMs,
          durationMs: zU
        })
      }
      onEnd(UU) {
        this.remove(UU.id)
      }
      aG() {
        if (0 === this.items.size) return void this.kinds.commit();
        const UU = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [XU, zU] of this.items) UU - zU.startTimeMs > zU.durationMs + 2e3 ? this.remove(XU) : this.write(zU, UU);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(UU) {
        const XU = this.items.get(UU);
        XU && (XU.kind.release(XU.slot), this.items.delete(UU))
      }
      write(UU, XU) {
        const zU = UU.waypoints.length - 1;
        let cU = (XU - UU.startTimeMs) / UU.durationMs;
        cU < 0 ? cU = 0 : cU > 1 && (cU = 1);
        const yU = cU * zU;
        let QU = Math.floor(yU);
        QU >= zU && (QU = zU - 1);
        const AU = yU - QU,
          [FU, oU, DU] = UU.waypoints[QU],
          [EU, YU, NU] = UU.waypoints[QU + 1];
        UU.kind.write(UU.slot, FU + (EU - FU) * AU + .5, oU + (YU - oU) * AU + .5, DU + (NU - DU) * AU + .5)
      }
    }
    const oU = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      DU = new Set(oU);
    class EU {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(UU) {
        this.api = UU, this.pipeVisualizer = new FU(UU)
      }
      onClose() {
        var UU;
        null === (UU = this.pipeVisualizer) || void 0 === UU || UU.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(UU, XU) {
        const {
          pipeVisualizer: zU
        } = this;
        if (zU)
          if ("pipeItemSpawnBatch" === UU)
            for (const cU of XU.items) zU.onSpawn(cU);
          else if ("pipeItemEndBatch" === UU)
          for (const cU of XU.items) zU.onEnd(cU)
      }
      aG() {
        var UU;
        null === (UU = this.pipeVisualizer) || void 0 === UU || UU.aG()
      }
      onPlayerAttemptAltAction(UU, XU, zU, cU, yU, AU) {
        var FU;
        if (!DU.has(this.api.getMetaInfo(yU).rootName)) return;
        const oU = null === (FU = this.api.HzU(UU)) || void 0 === FU ? void 0 : FU.name;
        return void 0 !== oU && QU.has(oU) ? "preventAction" : void 0
      }
    }
    var YU = zU(40151);
    const NU = function(UU, XU, zU) {
      if ("smp2" === zU) return (0, YU.makeSmp2ClientGame)();
      if ("survivalFactory" !== zU && "survivalFactoryPersistent" !== zU) {
        return {}
      }
      const cU = new EU;
      return {
        onCreate: UU => {
          cU.onCreate(UU)
        },
        onClose: () => {
          cU.onClose()
        },
        onReceivedMessageFromServer: (UU, XU) => {
          cU.onReceivedMessageFromServer(UU, XU)
        },
        LY: () => {
          cU.aG()
        },
        altVetoBlocks: oU,
        onPlayerAttemptAltAction: (UU, XU, zU, yU, QU, AU) => cU.onPlayerAttemptAltAction(UU, XU, zU, yU, QU, AU)
      }
    }
  },
  40151: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      makeSmp2ClientGame: () => QU
    });
    const cU = "smp2FirstSpawn";
    var yU = zU(1709);

    function QU() {
      let UU = !1;
      return {
        onReceivedMessageFromServer: XU => {
          XU !== cU || UU || (UU = !0, (0, yU.f)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);