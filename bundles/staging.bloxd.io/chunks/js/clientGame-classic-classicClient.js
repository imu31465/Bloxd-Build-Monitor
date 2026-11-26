export const id = 12;
export const ids = [12, 13];
export const modules = {
  39659: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV
    });
    var JV = xV(39662);
    const YV = [0, 0, 0];
    class UV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YV;
        this.pool = VV, this.origin = eV, this.count = 0, this.free = []
      }
      take() {
        var VV;
        const eV = null !== (VV = this.free.pop()) && void 0 !== VV ? VV : this.count++;
        return eV >= this.pool.Jv && this.pool.grow(Math.max(2 * this.pool.Jv, eV + 1)), this.hide(eV), eV
      }
      release(VV) {
        this.hide(VV), this.free.push(VV)
      }
      write(VV, eV, xV, YV) {
        const {
          records: UV
        } = this.pool, {
          origin: yV
        } = this, pV = VV * JV.e;
        UV[pV] = eV - yV[0], UV[pV + 1] = xV - yV[1], UV[pV + 2] = YV - yV[2], UV[pV + JV.g] = 0, this.pool.markDirty(VV)
      }
      hide(VV) {
        this.pool.records[VV * JV.e + JV.g] = 1, this.pool.markDirty(VV)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class yV {
      constructor(VV, eV, xV) {
        this.api = VV, this.model = eV, this.initialCapacity = xV, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(VV) {
        let eV = this.kinds.get(VV);
        if (void 0 === eV) {
          const xV = this.api.createInstancePool({
            ...this.model,
            item: VV
          }, this.initialCapacity);
          null === xV || void 0 === xV || xV.setOrigin(this.origin[0], this.origin[1], this.origin[2]), eV = xV && new UV(xV, this.origin), this.kinds.set(VV, eV)
        }
        return eV
      }
      follow(VV) {
        const {
          origin: eV
        } = this;
        if (Math.abs(VV[0] - eV[0]) <= 512 && Math.abs(VV[1] - eV[1]) <= 512 && Math.abs(VV[2] - eV[2]) <= 512) return !1;
        eV[0] = Math.floor(VV[0]), eV[1] = Math.floor(VV[1]), eV[2] = Math.floor(VV[2]);
        for (const xV of this.kinds.values()) null === xV || void 0 === xV || xV.pool.setOrigin(eV[0], eV[1], eV[2]);
        return !0
      }
      commit() {
        for (const VV of this.kinds.values()) null === VV || void 0 === VV || VV.commit()
      }
      dispose() {
        for (const VV of this.kinds.values()) null === VV || void 0 === VV || VV.dispose();
        this.kinds.clear()
      }
    }
  },
  40503: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => vV
    });
    const JV = "Pipe",
      YV = "Extractor Pipe",
      UV = (new Set([JV, YV]), new Set([JV, YV, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var yV = xV(39659);
    class pV {
      constructor(VV) {
        this.api = VV, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new yV.e(VV, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(VV) {
        if (VV.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${VV.id} with < 2 waypoints`);
        const eV = this.kinds.kindOf(VV.itemName);
        if (!eV) return void(this.unshown.has(VV.itemName) || (this.unshown.add(VV.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${VV.itemName}"`)));
        this.remove(VV.id);
        const xV = function(VV) {
          return (VV.waypoints.length - 1) / 2 * 1e3
        }(VV);
        if (Date.now() - VV.startTimeMs > xV + 2e3) return;
        const JV = eV.take();
        this.items.set(VV.id, {
          kind: eV,
          slot: JV,
          waypoints: VV.waypoints,
          startTimeMs: VV.startTimeMs,
          durationMs: xV
        })
      }
      onEnd(VV) {
        this.remove(VV.id)
      }
      Iq() {
        if (0 === this.items.size) return void this.kinds.commit();
        const VV = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [eV, xV] of this.items) VV - xV.startTimeMs > xV.durationMs + 2e3 ? this.remove(eV) : this.write(xV, VV);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(VV) {
        const eV = this.items.get(VV);
        eV && (eV.kind.release(eV.slot), this.items.delete(VV))
      }
      write(VV, eV) {
        const xV = VV.waypoints.length - 1;
        let JV = (eV - VV.startTimeMs) / VV.durationMs;
        JV < 0 ? JV = 0 : JV > 1 && (JV = 1);
        const YV = JV * xV;
        let UV = Math.floor(YV);
        UV >= xV && (UV = xV - 1);
        const yV = YV - UV,
          [pV, QV, nV] = VV.waypoints[UV],
          [wV, ZV, vV] = VV.waypoints[UV + 1];
        VV.kind.write(VV.slot, pV + (wV - pV) * yV + .5, QV + (ZV - QV) * yV + .5, nV + (vV - nV) * yV + .5)
      }
    }
    const QV = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      nV = new Set(QV);
    class wV {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(VV) {
        this.api = VV, this.pipeVisualizer = new pV(VV)
      }
      onClose() {
        var VV;
        null === (VV = this.pipeVisualizer) || void 0 === VV || VV.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(VV, eV) {
        const {
          pipeVisualizer: xV
        } = this;
        if (xV)
          if ("pipeItemSpawnBatch" === VV)
            for (const JV of eV.items) xV.onSpawn(JV);
          else if ("pipeItemEndBatch" === VV)
          for (const JV of eV.items) xV.onEnd(JV)
      }
      Iq() {
        var VV;
        null === (VV = this.pipeVisualizer) || void 0 === VV || VV.Iq()
      }
      onPlayerAttemptAltAction(VV, eV, xV, JV, YV, yV) {
        var pV;
        if (!nV.has(this.api.getMetaInfo(YV).rootName)) return;
        const QV = null === (pV = this.api.bJV(VV)) || void 0 === pV ? void 0 : pV.name;
        return void 0 !== QV && UV.has(QV) ? "preventAction" : void 0
      }
    }
    var ZV = xV(40509);
    const vV = function(VV, eV, xV) {
      if ("smp2" === xV) return (0, ZV.makeSmp2ClientGame)();
      if ("survivalFactory" !== xV && "survivalFactoryPersistent" !== xV) {
        return {}
      }
      const JV = new wV;
      return {
        onCreate: VV => {
          JV.onCreate(VV)
        },
        onClose: () => {
          JV.onClose()
        },
        onReceivedMessageFromServer: (VV, eV) => {
          JV.onReceivedMessageFromServer(VV, eV)
        },
        iZ: () => {
          JV.Iq()
        },
        altVetoBlocks: QV,
        onPlayerAttemptAltAction: (VV, eV, xV, YV, UV, yV) => JV.onPlayerAttemptAltAction(VV, eV, xV, YV, UV, yV)
      }
    }
  },
  40509: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      makeSmp2ClientGame: () => UV
    });
    const JV = "smp2FirstSpawn";
    var YV = xV(1759);

    function UV() {
      let VV = !1;
      return {
        onReceivedMessageFromServer: eV => {
          eV !== JV || VV || (VV = !0, (0, YV.f)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);