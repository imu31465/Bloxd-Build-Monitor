export const id = 12;
export const ids = [12];
export const modules = {
  38264: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(38273);
    const Ku = [0, 0, 0];
    class Qu {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ku;
        this.pool = uu, this.origin = Ru, this.count = 0, this.free = []
      }
      take() {
        var uu;
        const Ru = null !== (uu = this.free.pop()) && void 0 !== uu ? uu : this.count++;
        return Ru >= this.pool.Nr && this.pool.grow(Math.max(2 * this.pool.Nr, Ru + 1)), this.hide(Ru), Ru
      }
      release(uu) {
        this.hide(uu), this.free.push(uu)
      }
      write(uu, Ru, yu, Ku) {
        const {
          records: Qu
        } = this.pool, {
          origin: mu
        } = this, Ju = uu * Eu.c;
        Qu[Ju] = Ru - mu[0], Qu[Ju + 1] = yu - mu[1], Qu[Ju + 2] = Ku - mu[2], Qu[Ju + Eu.f] = 0, this.pool.markDirty(uu)
      }
      hide(uu) {
        this.pool.records[uu * Eu.c + Eu.f] = 1, this.pool.markDirty(uu)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class mu {
      constructor(uu, Ru, yu) {
        this.api = uu, this.model = Ru, this.initialCapacity = yu, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(uu) {
        let Ru = this.kinds.get(uu);
        if (void 0 === Ru) {
          const yu = this.api.createInstancePool({
            ...this.model,
            item: uu
          }, this.initialCapacity);
          null === yu || void 0 === yu || yu.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Ru = yu && new Qu(yu, this.origin), this.kinds.set(uu, Ru)
        }
        return Ru
      }
      follow(uu) {
        const {
          origin: Ru
        } = this;
        if (Math.abs(uu[0] - Ru[0]) <= 512 && Math.abs(uu[1] - Ru[1]) <= 512 && Math.abs(uu[2] - Ru[2]) <= 512) return !1;
        Ru[0] = Math.floor(uu[0]), Ru[1] = Math.floor(uu[1]), Ru[2] = Math.floor(uu[2]);
        for (const yu of this.kinds.values()) null === yu || void 0 === yu || yu.pool.setOrigin(Ru[0], Ru[1], Ru[2]);
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
  39018: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => ru
    });
    const Eu = "Pipe",
      Ku = "Extractor Pipe",
      Qu = (new Set([Eu, Ku]), new Set([Eu, Ku, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var mu = yu(38264);
    class Ju {
      constructor(uu) {
        this.api = uu, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new mu.e(uu, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(uu) {
        if (uu.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${uu.id} with < 2 waypoints`);
        const Ru = this.kinds.kindOf(uu.itemName);
        if (!Ru) return void(this.unshown.has(uu.itemName) || (this.unshown.add(uu.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${uu.itemName}"`)));
        this.remove(uu.id);
        const yu = function(uu) {
          return (uu.waypoints.length - 1) / 2 * 1e3
        }(uu);
        if (Date.now() - uu.startTimeMs > yu + 2e3) return;
        const Eu = Ru.take();
        this.items.set(uu.id, {
          kind: Ru,
          slot: Eu,
          waypoints: uu.waypoints,
          startTimeMs: uu.startTimeMs,
          durationMs: yu
        })
      }
      onEnd(uu) {
        this.remove(uu.id)
      }
      vW() {
        if (0 === this.items.size) return void this.kinds.commit();
        const uu = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [Ru, yu] of this.items) uu - yu.startTimeMs > yu.durationMs + 2e3 ? this.remove(Ru) : this.write(yu, uu);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(uu) {
        const Ru = this.items.get(uu);
        Ru && (Ru.kind.release(Ru.slot), this.items.delete(uu))
      }
      write(uu, Ru) {
        const yu = uu.waypoints.length - 1;
        let Eu = (Ru - uu.startTimeMs) / uu.durationMs;
        Eu < 0 ? Eu = 0 : Eu > 1 && (Eu = 1);
        const Ku = Eu * yu;
        let Qu = Math.floor(Ku);
        Qu >= yu && (Qu = yu - 1);
        const mu = Ku - Qu,
          [Ju, Nu, Xu] = uu.waypoints[Qu],
          [Vu, ru, Bu] = uu.waypoints[Qu + 1];
        uu.kind.write(uu.slot, Ju + (Vu - Ju) * mu + .5, Nu + (ru - Nu) * mu + .5, Xu + (Bu - Xu) * mu + .5)
      }
    }
    const Nu = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Xu = new Set(Nu);
    class Vu {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(uu) {
        this.api = uu, this.pipeVisualizer = new Ju(uu)
      }
      onClose() {
        var uu;
        null === (uu = this.pipeVisualizer) || void 0 === uu || uu.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(uu, Ru) {
        const {
          pipeVisualizer: yu
        } = this;
        if (yu)
          if ("pipeItemSpawnBatch" === uu)
            for (const Eu of Ru.items) yu.onSpawn(Eu);
          else if ("pipeItemEndBatch" === uu)
          for (const Eu of Ru.items) yu.onEnd(Eu)
      }
      vW() {
        var uu;
        null === (uu = this.pipeVisualizer) || void 0 === uu || uu.vW()
      }
      onPlayerAttemptAltAction(uu, Ru, yu, Eu, Ku, mu) {
        var Ju;
        if (!Xu.has(this.api.getMetaInfo(Ku).rootName)) return;
        const Nu = null === (Ju = this.api.Xyu(uu)) || void 0 === Ju ? void 0 : Ju.name;
        return void 0 !== Nu && Qu.has(Nu) ? "preventAction" : void 0
      }
    }
    const ru = function(uu, Ru, yu) {
      if ("survivalFactory" !== yu && "survivalFactoryPersistent" !== yu) {
        return {}
      }
      const Eu = new Vu;
      return {
        onCreate: uu => {
          Eu.onCreate(uu)
        },
        onClose: () => {
          Eu.onClose()
        },
        onReceivedMessageFromServer: (uu, Ru) => {
          Eu.onReceivedMessageFromServer(uu, Ru)
        },
        sr: () => {
          Eu.vW()
        },
        altVetoBlocks: Nu,
        onPlayerAttemptAltAction: (uu, Ru, yu, Ku, Qu, mu) => Eu.onPlayerAttemptAltAction(uu, Ru, yu, Ku, Qu, mu)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);