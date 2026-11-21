export const id = 12;
export const ids = [12];
export const modules = {
  38639: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd
    });
    var pd = kd(38642);
    const Nd = [0, 0, 0];
    class Wd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nd;
        this.pool = dd, this.origin = Jd, this.count = 0, this.free = []
      }
      take() {
        var dd;
        const Jd = null !== (dd = this.free.pop()) && void 0 !== dd ? dd : this.count++;
        return Jd >= this.pool.oo && this.pool.grow(Math.max(2 * this.pool.oo, Jd + 1)), this.hide(Jd), Jd
      }
      release(dd) {
        this.hide(dd), this.free.push(dd)
      }
      write(dd, Jd, kd, Nd) {
        const {
          records: Wd
        } = this.pool, {
          origin: Pd
        } = this, Zd = dd * pd.c;
        Wd[Zd] = Jd - Pd[0], Wd[Zd + 1] = kd - Pd[1], Wd[Zd + 2] = Nd - Pd[2], Wd[Zd + pd.d] = 0, this.pool.markDirty(dd)
      }
      hide(dd) {
        this.pool.records[dd * pd.c + pd.d] = 1, this.pool.markDirty(dd)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Pd {
      constructor(dd, Jd, kd) {
        this.api = dd, this.model = Jd, this.initialCapacity = kd, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(dd) {
        let Jd = this.kinds.get(dd);
        if (void 0 === Jd) {
          const kd = this.api.createInstancePool({
            ...this.model,
            item: dd
          }, this.initialCapacity);
          null === kd || void 0 === kd || kd.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Jd = kd && new Wd(kd, this.origin), this.kinds.set(dd, Jd)
        }
        return Jd
      }
      follow(dd) {
        const {
          origin: Jd
        } = this;
        if (Math.abs(dd[0] - Jd[0]) <= 512 && Math.abs(dd[1] - Jd[1]) <= 512 && Math.abs(dd[2] - Jd[2]) <= 512) return !1;
        Jd[0] = Math.floor(dd[0]), Jd[1] = Math.floor(dd[1]), Jd[2] = Math.floor(dd[2]);
        for (const kd of this.kinds.values()) null === kd || void 0 === kd || kd.pool.setOrigin(Jd[0], Jd[1], Jd[2]);
        return !0
      }
      commit() {
        for (const dd of this.kinds.values()) null === dd || void 0 === dd || dd.commit()
      }
      dispose() {
        for (const dd of this.kinds.values()) null === dd || void 0 === dd || dd.dispose();
        this.kinds.clear()
      }
    }
  },
  39407: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => od
    });
    const pd = "Pipe",
      Nd = "Extractor Pipe",
      Wd = (new Set([pd, Nd]), new Set([pd, Nd, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var Pd = kd(38639);
    class Zd {
      constructor(dd) {
        this.api = dd, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Pd.d(dd, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(dd) {
        if (dd.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${dd.id} with < 2 waypoints`);
        const Jd = this.kinds.kindOf(dd.itemName);
        if (!Jd) return void(this.unshown.has(dd.itemName) || (this.unshown.add(dd.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${dd.itemName}"`)));
        this.remove(dd.id);
        const kd = function(dd) {
          return (dd.waypoints.length - 1) / 2 * 1e3
        }(dd);
        if (Date.now() - dd.startTimeMs > kd + 2e3) return;
        const pd = Jd.take();
        this.items.set(dd.id, {
          kind: Jd,
          slot: pd,
          waypoints: dd.waypoints,
          startTimeMs: dd.startTimeMs,
          durationMs: kd
        })
      }
      onEnd(dd) {
        this.remove(dd.id)
      }
      mI() {
        if (0 === this.items.size) return void this.kinds.commit();
        const dd = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [Jd, kd] of this.items) dd - kd.startTimeMs > kd.durationMs + 2e3 ? this.remove(Jd) : this.write(kd, dd);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(dd) {
        const Jd = this.items.get(dd);
        Jd && (Jd.kind.release(Jd.slot), this.items.delete(dd))
      }
      write(dd, Jd) {
        const kd = dd.waypoints.length - 1;
        let pd = (Jd - dd.startTimeMs) / dd.durationMs;
        pd < 0 ? pd = 0 : pd > 1 && (pd = 1);
        const Nd = pd * kd;
        let Wd = Math.floor(Nd);
        Wd >= kd && (Wd = kd - 1);
        const Pd = Nd - Wd,
          [Zd, gd, Cd] = dd.waypoints[Wd],
          [Kd, od, ld] = dd.waypoints[Wd + 1];
        dd.kind.write(dd.slot, Zd + (Kd - Zd) * Pd + .5, gd + (od - gd) * Pd + .5, Cd + (ld - Cd) * Pd + .5)
      }
    }
    const gd = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Cd = new Set(gd);
    class Kd {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(dd) {
        this.api = dd, this.pipeVisualizer = new Zd(dd)
      }
      onClose() {
        var dd;
        null === (dd = this.pipeVisualizer) || void 0 === dd || dd.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(dd, Jd) {
        const {
          pipeVisualizer: kd
        } = this;
        if (kd)
          if ("pipeItemSpawnBatch" === dd)
            for (const pd of Jd.items) kd.onSpawn(pd);
          else if ("pipeItemEndBatch" === dd)
          for (const pd of Jd.items) kd.onEnd(pd)
      }
      mI() {
        var dd;
        null === (dd = this.pipeVisualizer) || void 0 === dd || dd.mI()
      }
      onPlayerAttemptAltAction(dd, Jd, kd, pd, Nd, Pd) {
        var Zd;
        if (!Cd.has(this.api.getMetaInfo(Nd).rootName)) return;
        const gd = null === (Zd = this.api.Pkd(dd)) || void 0 === Zd ? void 0 : Zd.name;
        return void 0 !== gd && Wd.has(gd) ? "preventAction" : void 0
      }
    }
    const od = function(dd, Jd, kd) {
      if ("survivalFactory" !== kd && "survivalFactoryPersistent" !== kd) {
        return {}
      }
      const pd = new Kd;
      return {
        onCreate: dd => {
          pd.onCreate(dd)
        },
        onClose: () => {
          pd.onClose()
        },
        onReceivedMessageFromServer: (dd, Jd) => {
          pd.onReceivedMessageFromServer(dd, Jd)
        },
        Do: () => {
          pd.mI()
        },
        altVetoBlocks: gd,
        onPlayerAttemptAltAction: (dd, Jd, kd, Nd, Wd, Pd) => pd.onPlayerAttemptAltAction(dd, Jd, kd, Nd, Wd, Pd)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);