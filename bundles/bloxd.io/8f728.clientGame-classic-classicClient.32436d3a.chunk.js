export const id = 12;
export const ids = [12];
export const modules = {
  37042: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(37045);
    const Ic = [0, 0, 0];
    class rB {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ic;
        this.pool = cB, this.origin = Bc, this.count = 0, this.free = []
      }
      take() {
        var cB;
        const Bc = null !== (cB = this.free.pop()) && void 0 !== cB ? cB : this.count++;
        return Bc >= this.pool.Qc && this.pool.grow(Math.max(2 * this.pool.Qc, Bc + 1)), this.hide(Bc), Bc
      }
      release(cB) {
        this.hide(cB), this.free.push(cB)
      }
      write(cB, Bc, nc, Ic) {
        const {
          records: rB
        } = this.pool, {
          origin: uc
        } = this, sc = cB * Vc.c;
        rB[sc] = Bc - uc[0], rB[sc + 1] = nc - uc[1], rB[sc + 2] = Ic - uc[2], rB[sc + Vc.g] = 0, this.pool.markDirty(cB)
      }
      hide(cB) {
        this.pool.records[cB * Vc.c + Vc.g] = 1, this.pool.markDirty(cB)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class uc {
      constructor(cB, Bc, nc) {
        this.api = cB, this.model = Bc, this.initialCapacity = nc, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(cB) {
        let Bc = this.kinds.get(cB);
        if (void 0 === Bc) {
          const nc = this.api.createInstancePool({
            ...this.model,
            item: cB
          }, this.initialCapacity);
          null === nc || void 0 === nc || nc.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Bc = nc && new rB(nc, this.origin), this.kinds.set(cB, Bc)
        }
        return Bc
      }
      follow(cB) {
        const {
          origin: Bc
        } = this;
        if (Math.abs(cB[0] - Bc[0]) <= 512 && Math.abs(cB[1] - Bc[1]) <= 512 && Math.abs(cB[2] - Bc[2]) <= 512) return !1;
        Bc[0] = Math.floor(cB[0]), Bc[1] = Math.floor(cB[1]), Bc[2] = Math.floor(cB[2]);
        for (const nc of this.kinds.values()) null === nc || void 0 === nc || nc.pool.setOrigin(Bc[0], Bc[1], Bc[2]);
        return !0
      }
      commit() {
        for (const cB of this.kinds.values()) null === cB || void 0 === cB || cB.commit()
      }
      dispose() {
        for (const cB of this.kinds.values()) null === cB || void 0 === cB || cB.dispose();
        this.kinds.clear()
      }
    }
  },
  37713: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Oc
    });
    const Vc = "Pipe",
      Ic = "Extractor Pipe",
      rB = (new Set([Vc, Ic]), new Set([Vc, Ic, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var uc = nc(37042);
    class sc {
      constructor(cB) {
        this.api = cB, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new uc.c(cB, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(cB) {
        if (cB.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${cB.id} with < 2 waypoints`);
        const Bc = this.kinds.kindOf(cB.itemName);
        if (!Bc) return void(this.unshown.has(cB.itemName) || (this.unshown.add(cB.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${cB.itemName}"`)));
        this.remove(cB.id);
        const nc = function(cB) {
          return (cB.waypoints.length - 1) / 2 * 1e3
        }(cB);
        if (Date.now() - cB.startTimeMs > nc + 2e3) return;
        const Vc = Bc.take();
        this.items.set(cB.id, {
          kind: Bc,
          slot: Vc,
          waypoints: cB.waypoints,
          startTimeMs: cB.startTimeMs,
          durationMs: nc
        })
      }
      onEnd(cB) {
        this.remove(cB.id)
      }
      eZ() {
        if (0 === this.items.size) return void this.kinds.commit();
        const cB = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [Bc, nc] of this.items) cB - nc.startTimeMs > nc.durationMs + 2e3 ? this.remove(Bc) : this.write(nc, cB);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(cB) {
        const Bc = this.items.get(cB);
        Bc && (Bc.kind.release(Bc.slot), this.items.delete(cB))
      }
      write(cB, Bc) {
        const nc = cB.waypoints.length - 1;
        let Vc = (Bc - cB.startTimeMs) / cB.durationMs;
        Vc < 0 ? Vc = 0 : Vc > 1 && (Vc = 1);
        const Ic = Vc * nc;
        let rB = Math.floor(Ic);
        rB >= nc && (rB = nc - 1);
        const uc = Ic - rB,
          [sc, Mc, Pc] = cB.waypoints[rB],
          [qB, Oc, Tc] = cB.waypoints[rB + 1];
        cB.kind.write(cB.slot, sc + (qB - sc) * uc + .5, Mc + (Oc - Mc) * uc + .5, Pc + (Tc - Pc) * uc + .5)
      }
    }
    const Mc = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Pc = new Set(Mc);
    class qB {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(cB) {
        this.api = cB, this.pipeVisualizer = new sc(cB)
      }
      onClose() {
        var cB;
        null === (cB = this.pipeVisualizer) || void 0 === cB || cB.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(cB, Bc) {
        const {
          pipeVisualizer: nc
        } = this;
        if (nc)
          if ("pipeItemSpawnBatch" === cB)
            for (const Vc of Bc.items) nc.onSpawn(Vc);
          else if ("pipeItemEndBatch" === cB)
          for (const Vc of Bc.items) nc.onEnd(Vc)
      }
      eZ() {
        var cB;
        null === (cB = this.pipeVisualizer) || void 0 === cB || cB.eZ()
      }
      onPlayerAttemptAltAction(cB, Bc, nc, Vc, Ic, uc) {
        var sc;
        if (!Pc.has(this.api.getMetaInfo(Ic).rootName)) return;
        const Mc = null === (sc = this.api.lMc(cB)) || void 0 === sc ? void 0 : sc.name;
        return void 0 !== Mc && rB.has(Mc) ? "preventAction" : void 0
      }
    }
    const Oc = function(cB, Bc, nc) {
      if ("survivalFactory" !== nc && "survivalFactoryPersistent" !== nc) {
        return {}
      }
      const Vc = new qB;
      return {
        onCreate: cB => {
          Vc.onCreate(cB)
        },
        onClose: () => {
          Vc.onClose()
        },
        onReceivedMessageFromServer: (cB, Bc) => {
          Vc.onReceivedMessageFromServer(cB, Bc)
        },
        cn: () => {
          Vc.eZ()
        },
        altVetoBlocks: Mc,
        onPlayerAttemptAltAction: (cB, Bc, nc, Ic, rB, uc) => Vc.onPlayerAttemptAltAction(cB, Bc, nc, Ic, rB, uc)
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);