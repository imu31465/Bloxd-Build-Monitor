export const id = 12;
export const ids = [12];
export const modules = {
  38724: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(38728);
    const qt = [0, 0, 0];
    class Dt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qt;
        this.pool = tt, this.origin = et, this.count = 0, this.free = []
      }
      take() {
        var tt;
        const et = null !== (tt = this.free.pop()) && void 0 !== tt ? tt : this.count++;
        return et >= this.pool.uQ && this.pool.grow(Math.max(2 * this.pool.uQ, et + 1)), this.hide(et), et
      }
      release(tt) {
        this.hide(tt), this.free.push(tt)
      }
      write(tt, et, Vt, qt) {
        const {
          records: Dt
        } = this.pool, {
          origin: mt
        } = this, dt = tt * Ot.d;
        Dt[dt] = et - mt[0], Dt[dt + 1] = Vt - mt[1], Dt[dt + 2] = qt - mt[2], Dt[dt + Ot.f] = 0, this.pool.markDirty(tt)
      }
      hide(tt) {
        this.pool.records[tt * Ot.d + Ot.f] = 1, this.pool.markDirty(tt)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class mt {
      constructor(tt, et, Vt) {
        this.api = tt, this.model = et, this.initialCapacity = Vt, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(tt) {
        let et = this.kinds.get(tt);
        if (void 0 === et) {
          const Vt = this.api.createInstancePool({
            ...this.model,
            item: tt
          }, this.initialCapacity);
          null === Vt || void 0 === Vt || Vt.setOrigin(this.origin[0], this.origin[1], this.origin[2]), et = Vt && new Dt(Vt, this.origin), this.kinds.set(tt, et)
        }
        return et
      }
      follow(tt) {
        const {
          origin: et
        } = this;
        if (Math.abs(tt[0] - et[0]) <= 512 && Math.abs(tt[1] - et[1]) <= 512 && Math.abs(tt[2] - et[2]) <= 512) return !1;
        et[0] = Math.floor(tt[0]), et[1] = Math.floor(tt[1]), et[2] = Math.floor(tt[2]);
        for (const Vt of this.kinds.values()) null === Vt || void 0 === Vt || Vt.pool.setOrigin(et[0], et[1], et[2]);
        return !0
      }
      commit() {
        for (const tt of this.kinds.values()) null === tt || void 0 === tt || tt.commit()
      }
      dispose() {
        for (const tt of this.kinds.values()) null === tt || void 0 === tt || tt.dispose();
        this.kinds.clear()
      }
    }
  },
  39487: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => Qt
    });
    const Ot = "Pipe",
      qt = "Extractor Pipe",
      Dt = (new Set([Ot, qt]), new Set([Ot, qt, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var mt = Vt(38724);
    class dt {
      constructor(tt) {
        this.api = tt, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new mt.b(tt, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(tt) {
        if (tt.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${tt.id} with < 2 waypoints`);
        const et = this.kinds.kindOf(tt.itemName);
        if (!et) return void(this.unshown.has(tt.itemName) || (this.unshown.add(tt.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${tt.itemName}"`)));
        this.remove(tt.id);
        const Vt = function(tt) {
          return (tt.waypoints.length - 1) / 2 * 1e3
        }(tt);
        if (Date.now() - tt.startTimeMs > Vt + 2e3) return;
        const Ot = et.take();
        this.items.set(tt.id, {
          kind: et,
          slot: Ot,
          waypoints: tt.waypoints,
          startTimeMs: tt.startTimeMs,
          durationMs: Vt
        })
      }
      onEnd(tt) {
        this.remove(tt.id)
      }
      bM() {
        if (0 === this.items.size) return void this.kinds.commit();
        const tt = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [et, Vt] of this.items) tt - Vt.startTimeMs > Vt.durationMs + 2e3 ? this.remove(et) : this.write(Vt, tt);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(tt) {
        const et = this.items.get(tt);
        et && (et.kind.release(et.slot), this.items.delete(tt))
      }
      write(tt, et) {
        const Vt = tt.waypoints.length - 1;
        let Ot = (et - tt.startTimeMs) / tt.durationMs;
        Ot < 0 ? Ot = 0 : Ot > 1 && (Ot = 1);
        const qt = Ot * Vt;
        let Dt = Math.floor(qt);
        Dt >= Vt && (Dt = Vt - 1);
        const mt = qt - Dt,
          [dt, jt, Ht] = tt.waypoints[Dt],
          [Xt, Qt, lt] = tt.waypoints[Dt + 1];
        tt.kind.write(tt.slot, dt + (Xt - dt) * mt + .5, jt + (Qt - jt) * mt + .5, Ht + (lt - Ht) * mt + .5)
      }
    }
    const jt = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Ht = new Set(jt);
    class Xt {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(tt) {
        this.api = tt, this.pipeVisualizer = new dt(tt)
      }
      onClose() {
        var tt;
        null === (tt = this.pipeVisualizer) || void 0 === tt || tt.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(tt, et) {
        const {
          pipeVisualizer: Vt
        } = this;
        if (Vt)
          if ("pipeItemSpawnBatch" === tt)
            for (const Ot of et.items) Vt.onSpawn(Ot);
          else if ("pipeItemEndBatch" === tt)
          for (const Ot of et.items) Vt.onEnd(Ot)
      }
      bM() {
        var tt;
        null === (tt = this.pipeVisualizer) || void 0 === tt || tt.bM()
      }
      onPlayerAttemptAltAction(tt, et, Vt, Ot, qt, mt) {
        var dt;
        if (!Ht.has(this.api.getMetaInfo(qt).rootName)) return;
        const jt = null === (dt = this.api.bVt(tt)) || void 0 === dt ? void 0 : dt.name;
        return void 0 !== jt && Dt.has(jt) ? "preventAction" : void 0
      }
    }
    const Qt = function(tt, et, Vt) {
      if ("survivalFactory" !== Vt && "survivalFactoryPersistent" !== Vt) {
        return {}
      }
      const Ot = new Xt;
      return {
        onCreate: tt => {
          Ot.onCreate(tt)
        },
        onClose: () => {
          Ot.onClose()
        },
        onReceivedMessageFromServer: (tt, et) => {
          Ot.onReceivedMessageFromServer(tt, et)
        },
        BQ: () => {
          Ot.bM()
        },
        altVetoBlocks: jt,
        onPlayerAttemptAltAction: (tt, et, Vt, qt, Dt, mt) => Ot.onPlayerAttemptAltAction(tt, et, Vt, qt, Dt, mt)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);