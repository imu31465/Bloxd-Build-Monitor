export const id = 12;
export const ids = [12];
export const modules = {
  38825: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(38828);
    const Uu = [0, 0, 0];
    class Zu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uu;
        this.pool = uu, this.origin = Eu, this.count = 0, this.free = []
      }
      take() {
        var uu;
        const Eu = null !== (uu = this.free.pop()) && void 0 !== uu ? uu : this.count++;
        return Eu >= this.pool.Mb && this.pool.grow(Math.max(2 * this.pool.Mb, Eu + 1)), this.hide(Eu), Eu
      }
      release(uu) {
        this.hide(uu), this.free.push(uu)
      }
      write(uu, Eu, ju, Uu) {
        const {
          records: Zu
        } = this.pool, {
          origin: Xu
        } = this, lu = uu * su.e;
        Zu[lu] = Eu - Xu[0], Zu[lu + 1] = ju - Xu[1], Zu[lu + 2] = Uu - Xu[2], Zu[lu + su.h] = 0, this.pool.markDirty(uu)
      }
      hide(uu) {
        this.pool.records[uu * su.e + su.h] = 1, this.pool.markDirty(uu)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Xu {
      constructor(uu, Eu, ju) {
        this.api = uu, this.model = Eu, this.initialCapacity = ju, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(uu) {
        let Eu = this.kinds.get(uu);
        if (void 0 === Eu) {
          const ju = this.api.createInstancePool({
            ...this.model,
            item: uu
          }, this.initialCapacity);
          null === ju || void 0 === ju || ju.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Eu = ju && new Zu(ju, this.origin), this.kinds.set(uu, Eu)
        }
        return Eu
      }
      follow(uu) {
        const {
          origin: Eu
        } = this;
        if (Math.abs(uu[0] - Eu[0]) <= 512 && Math.abs(uu[1] - Eu[1]) <= 512 && Math.abs(uu[2] - Eu[2]) <= 512) return !1;
        Eu[0] = Math.floor(uu[0]), Eu[1] = Math.floor(uu[1]), Eu[2] = Math.floor(uu[2]);
        for (const ju of this.kinds.values()) null === ju || void 0 === ju || ju.pool.setOrigin(Eu[0], Eu[1], Eu[2]);
        return !0
      }
      commit() {
        for (const uu of this.kinds.values()) null === uu || void 0 === uu || uu.commit()
      }
      dispose() {
        for (const uu of this.kinds.values()) null === uu || void 0 === uu || uu.dispose();
        this.kinds.clear()
      }
    }
  },
  39581: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => bu
    });
    const su = "Pipe",
      Uu = "Extractor Pipe",
      Zu = (new Set([su, Uu]), new Set([su, Uu, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var Xu = ju(38825);
    class lu {
      constructor(uu) {
        this.api = uu, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Xu.c(uu, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(uu) {
        if (uu.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${uu.id} with < 2 waypoints`);
        const Eu = this.kinds.kindOf(uu.itemName);
        if (!Eu) return void(this.unshown.has(uu.itemName) || (this.unshown.add(uu.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${uu.itemName}"`)));
        this.remove(uu.id);
        const ju = function(uu) {
          return (uu.waypoints.length - 1) / 2 * 1e3
        }(uu);
        if (Date.now() - uu.startTimeMs > ju + 2e3) return;
        const su = Eu.take();
        this.items.set(uu.id, {
          kind: Eu,
          slot: su,
          waypoints: uu.waypoints,
          startTimeMs: uu.startTimeMs,
          durationMs: ju
        })
      }
      onEnd(uu) {
        this.remove(uu.id)
      }
      RD() {
        if (0 === this.items.size) return void this.kinds.commit();
        const uu = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [Eu, ju] of this.items) uu - ju.startTimeMs > ju.durationMs + 2e3 ? this.remove(Eu) : this.write(ju, uu);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(uu) {
        const Eu = this.items.get(uu);
        Eu && (Eu.kind.release(Eu.slot), this.items.delete(uu))
      }
      write(uu, Eu) {
        const ju = uu.waypoints.length - 1;
        let su = (Eu - uu.startTimeMs) / uu.durationMs;
        su < 0 ? su = 0 : su > 1 && (su = 1);
        const Uu = su * ju;
        let Zu = Math.floor(Uu);
        Zu >= ju && (Zu = ju - 1);
        const Xu = Uu - Zu,
          [lu, qu, fu] = uu.waypoints[Zu],
          [Cu, bu, cu] = uu.waypoints[Zu + 1];
        uu.kind.write(uu.slot, lu + (Cu - lu) * Xu + .5, qu + (bu - qu) * Xu + .5, fu + (cu - fu) * Xu + .5)
      }
    }
    const qu = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      fu = new Set(qu);
    class Cu {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(uu) {
        this.api = uu, this.pipeVisualizer = new lu(uu)
      }
      onClose() {
        var uu;
        null === (uu = this.pipeVisualizer) || void 0 === uu || uu.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(uu, Eu) {
        const {
          pipeVisualizer: ju
        } = this;
        if (ju)
          if ("pipeItemSpawnBatch" === uu)
            for (const su of Eu.items) ju.onSpawn(su);
          else if ("pipeItemEndBatch" === uu)
          for (const su of Eu.items) ju.onEnd(su)
      }
      RD() {
        var uu;
        null === (uu = this.pipeVisualizer) || void 0 === uu || uu.RD()
      }
      onPlayerAttemptAltAction(uu, Eu, ju, su, Uu, Xu) {
        var lu;
        if (!fu.has(this.api.getMetaInfo(Uu).rootName)) return;
        const qu = null === (lu = this.api.yEu(uu)) || void 0 === lu ? void 0 : lu.name;
        return void 0 !== qu && Zu.has(qu) ? "preventAction" : void 0
      }
    }
    const bu = function(uu, Eu, ju) {
      if ("survivalFactory" !== ju && "survivalFactoryPersistent" !== ju) {
        return {}
      }
      const su = new Cu;
      return {
        onCreate: uu => {
          su.onCreate(uu)
        },
        onClose: () => {
          su.onClose()
        },
        onReceivedMessageFromServer: (uu, Eu) => {
          su.onReceivedMessageFromServer(uu, Eu)
        },
        Tb: () => {
          su.RD()
        },
        altVetoBlocks: qu,
        onPlayerAttemptAltAction: (uu, Eu, ju, Uu, Zu, Xu) => su.onPlayerAttemptAltAction(uu, Eu, ju, Uu, Zu, Xu)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);