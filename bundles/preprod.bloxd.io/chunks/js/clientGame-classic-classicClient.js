export const id = 12;
export const ids = [12, 13];
export const modules = {
  39505: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(39507);
    const SM = [0, 0, 0];
    class jM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM;
        this.pool = MM, this.origin = rM, this.count = 0, this.free = []
      }
      take() {
        var MM;
        const rM = null !== (MM = this.free.pop()) && void 0 !== MM ? MM : this.count++;
        return rM >= this.pool.vL && this.pool.grow(Math.max(2 * this.pool.vL, rM + 1)), this.hide(rM), rM
      }
      release(MM) {
        this.hide(MM), this.free.push(MM)
      }
      write(MM, rM, iM, SM) {
        const {
          records: jM
        } = this.pool, {
          origin: aM
        } = this, PM = MM * OM.d;
        jM[PM] = rM - aM[0], jM[PM + 1] = iM - aM[1], jM[PM + 2] = SM - aM[2], jM[PM + OM.h] = 0, this.pool.markDirty(MM)
      }
      hide(MM) {
        this.pool.records[MM * OM.d + OM.h] = 1, this.pool.markDirty(MM)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class aM {
      constructor(MM, rM, iM) {
        this.api = MM, this.model = rM, this.initialCapacity = iM, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(MM) {
        let rM = this.kinds.get(MM);
        if (void 0 === rM) {
          const iM = this.api.createInstancePool({
            ...this.model,
            item: MM
          }, this.initialCapacity);
          null === iM || void 0 === iM || iM.setOrigin(this.origin[0], this.origin[1], this.origin[2]), rM = iM && new jM(iM, this.origin), this.kinds.set(MM, rM)
        }
        return rM
      }
      follow(MM) {
        const {
          origin: rM
        } = this;
        if (Math.abs(MM[0] - rM[0]) <= 512 && Math.abs(MM[1] - rM[1]) <= 512 && Math.abs(MM[2] - rM[2]) <= 512) return !1;
        rM[0] = Math.floor(MM[0]), rM[1] = Math.floor(MM[1]), rM[2] = Math.floor(MM[2]);
        for (const iM of this.kinds.values()) null === iM || void 0 === iM || iM.pool.setOrigin(rM[0], rM[1], rM[2]);
        return !0
      }
      commit() {
        for (const MM of this.kinds.values()) null === MM || void 0 === MM || MM.commit()
      }
      dispose() {
        for (const MM of this.kinds.values()) null === MM || void 0 === MM || MM.dispose();
        this.kinds.clear()
      }
    }
  },
  40373: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => mM
    });
    const OM = "Pipe",
      SM = "Extractor Pipe",
      jM = (new Set([OM, SM]), new Set([OM, SM, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var aM = iM(39505);
    class PM {
      constructor(MM) {
        this.api = MM, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new aM.e(MM, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(MM) {
        if (MM.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${MM.id} with < 2 waypoints`);
        const rM = this.kinds.kindOf(MM.itemName);
        if (!rM) return void(this.unshown.has(MM.itemName) || (this.unshown.add(MM.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${MM.itemName}"`)));
        this.remove(MM.id);
        const iM = function(MM) {
          return (MM.waypoints.length - 1) / 2 * 1e3
        }(MM);
        if (Date.now() - MM.startTimeMs > iM + 2e3) return;
        const OM = rM.take();
        this.items.set(MM.id, {
          kind: rM,
          slot: OM,
          waypoints: MM.waypoints,
          startTimeMs: MM.startTimeMs,
          durationMs: iM
        })
      }
      onEnd(MM) {
        this.remove(MM.id)
      }
      kE() {
        if (0 === this.items.size) return void this.kinds.commit();
        const MM = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [rM, iM] of this.items) MM - iM.startTimeMs > iM.durationMs + 2e3 ? this.remove(rM) : this.write(iM, MM);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(MM) {
        const rM = this.items.get(MM);
        rM && (rM.kind.release(rM.slot), this.items.delete(MM))
      }
      write(MM, rM) {
        const iM = MM.waypoints.length - 1;
        let OM = (rM - MM.startTimeMs) / MM.durationMs;
        OM < 0 ? OM = 0 : OM > 1 && (OM = 1);
        const SM = OM * iM;
        let jM = Math.floor(SM);
        jM >= iM && (jM = iM - 1);
        const aM = SM - jM,
          [PM, nM, QM] = MM.waypoints[jM],
          [zM, LM, mM] = MM.waypoints[jM + 1];
        MM.kind.write(MM.slot, PM + (zM - PM) * aM + .5, nM + (LM - nM) * aM + .5, QM + (mM - QM) * aM + .5)
      }
    }
    const nM = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      QM = new Set(nM);
    class zM {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(MM) {
        this.api = MM, this.pipeVisualizer = new PM(MM)
      }
      onClose() {
        var MM;
        null === (MM = this.pipeVisualizer) || void 0 === MM || MM.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(MM, rM) {
        const {
          pipeVisualizer: iM
        } = this;
        if (iM)
          if ("pipeItemSpawnBatch" === MM)
            for (const OM of rM.items) iM.onSpawn(OM);
          else if ("pipeItemEndBatch" === MM)
          for (const OM of rM.items) iM.onEnd(OM)
      }
      kE() {
        var MM;
        null === (MM = this.pipeVisualizer) || void 0 === MM || MM.kE()
      }
      onPlayerAttemptAltAction(MM, rM, iM, OM, SM, aM) {
        var PM;
        if (!QM.has(this.api.getMetaInfo(SM).rootName)) return;
        const nM = null === (PM = this.api.TrM(MM)) || void 0 === PM ? void 0 : PM.name;
        return void 0 !== nM && jM.has(nM) ? "preventAction" : void 0
      }
    }
    var LM = iM(40376);
    const mM = function(MM, rM, iM) {
      if ("smp2" === iM) return (0, LM.makeSmp2ClientGame)();
      if ("survivalFactory" !== iM && "survivalFactoryPersistent" !== iM) {
        return {}
      }
      const OM = new zM;
      return {
        onCreate: MM => {
          OM.onCreate(MM)
        },
        onClose: () => {
          OM.onClose()
        },
        onReceivedMessageFromServer: (MM, rM) => {
          OM.onReceivedMessageFromServer(MM, rM)
        },
        bL: () => {
          OM.kE()
        },
        altVetoBlocks: nM,
        onPlayerAttemptAltAction: (MM, rM, iM, SM, jM, aM) => OM.onPlayerAttemptAltAction(MM, rM, iM, SM, jM, aM)
      }
    }
  },
  40376: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      makeSmp2ClientGame: () => jM
    });
    const OM = "smp2FirstSpawn";
    var SM = iM(1744);

    function jM() {
      let MM = !1;
      return {
        onReceivedMessageFromServer: rM => {
          rM !== OM || MM || (MM = !0, (0, SM.c)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);