export const id = 12;
export const ids = [12];
export const modules = {
  38597: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(38606);
    const Am = [0, 0, 0];
    class am {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Am;
        this.pool = mm, this.origin = Tm, this.count = 0, this.free = []
      }
      take() {
        var mm;
        const Tm = null !== (mm = this.free.pop()) && void 0 !== mm ? mm : this.count++;
        return Tm >= this.pool.yp && this.pool.grow(Math.max(2 * this.pool.yp, Tm + 1)), this.hide(Tm), Tm
      }
      release(mm) {
        this.hide(mm), this.free.push(mm)
      }
      write(mm, Tm, fm, Am) {
        const {
          records: am
        } = this.pool, {
          origin: xm
        } = this, wm = mm * hm.b;
        am[wm] = Tm - xm[0], am[wm + 1] = fm - xm[1], am[wm + 2] = Am - xm[2], am[wm + hm.d] = 0, this.pool.markDirty(mm)
      }
      hide(mm) {
        this.pool.records[mm * hm.b + hm.d] = 1, this.pool.markDirty(mm)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class xm {
      constructor(mm, Tm, fm) {
        this.api = mm, this.model = Tm, this.initialCapacity = fm, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(mm) {
        let Tm = this.kinds.get(mm);
        if (void 0 === Tm) {
          const fm = this.api.createInstancePool({
            ...this.model,
            item: mm
          }, this.initialCapacity);
          null === fm || void 0 === fm || fm.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Tm = fm && new am(fm, this.origin), this.kinds.set(mm, Tm)
        }
        return Tm
      }
      follow(mm) {
        const {
          origin: Tm
        } = this;
        if (Math.abs(mm[0] - Tm[0]) <= 512 && Math.abs(mm[1] - Tm[1]) <= 512 && Math.abs(mm[2] - Tm[2]) <= 512) return !1;
        Tm[0] = Math.floor(mm[0]), Tm[1] = Math.floor(mm[1]), Tm[2] = Math.floor(mm[2]);
        for (const fm of this.kinds.values()) null === fm || void 0 === fm || fm.pool.setOrigin(Tm[0], Tm[1], Tm[2]);
        return !0
      }
      commit() {
        for (const mm of this.kinds.values()) null === mm || void 0 === mm || mm.commit()
      }
      dispose() {
        for (const mm of this.kinds.values()) null === mm || void 0 === mm || mm.dispose();
        this.kinds.clear()
      }
    }
  },
  39408: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => pm
    });
    const hm = "Pipe",
      Am = "Extractor Pipe",
      am = (new Set([hm, Am]), new Set([hm, Am, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var xm = fm(38597);
    class wm {
      constructor(mm) {
        this.api = mm, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new xm.c(mm, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(mm) {
        if (mm.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${mm.id} with < 2 waypoints`);
        const Tm = this.kinds.kindOf(mm.itemName);
        if (!Tm) return void(this.unshown.has(mm.itemName) || (this.unshown.add(mm.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${mm.itemName}"`)));
        this.remove(mm.id);
        const fm = function(mm) {
          return (mm.waypoints.length - 1) / 2 * 1e3
        }(mm);
        if (Date.now() - mm.startTimeMs > fm + 2e3) return;
        const hm = Tm.take();
        this.items.set(mm.id, {
          kind: Tm,
          slot: hm,
          waypoints: mm.waypoints,
          startTimeMs: mm.startTimeMs,
          durationMs: fm
        })
      }
      onEnd(mm) {
        this.remove(mm.id)
      }
      HV() {
        if (0 === this.items.size) return void this.kinds.commit();
        const mm = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [Tm, fm] of this.items) mm - fm.startTimeMs > fm.durationMs + 2e3 ? this.remove(Tm) : this.write(fm, mm);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(mm) {
        const Tm = this.items.get(mm);
        Tm && (Tm.kind.release(Tm.slot), this.items.delete(mm))
      }
      write(mm, Tm) {
        const fm = mm.waypoints.length - 1;
        let hm = (Tm - mm.startTimeMs) / mm.durationMs;
        hm < 0 ? hm = 0 : hm > 1 && (hm = 1);
        const Am = hm * fm;
        let am = Math.floor(Am);
        am >= fm && (am = fm - 1);
        const xm = Am - am,
          [wm, Dm, im] = mm.waypoints[am],
          [Rm, pm, Em] = mm.waypoints[am + 1];
        mm.kind.write(mm.slot, wm + (Rm - wm) * xm + .5, Dm + (pm - Dm) * xm + .5, im + (Em - im) * xm + .5)
      }
    }
    const Dm = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      im = new Set(Dm);
    class Rm {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(mm) {
        this.api = mm, this.pipeVisualizer = new wm(mm)
      }
      onClose() {
        var mm;
        null === (mm = this.pipeVisualizer) || void 0 === mm || mm.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(mm, Tm) {
        const {
          pipeVisualizer: fm
        } = this;
        if (fm)
          if ("pipeItemSpawnBatch" === mm)
            for (const hm of Tm.items) fm.onSpawn(hm);
          else if ("pipeItemEndBatch" === mm)
          for (const hm of Tm.items) fm.onEnd(hm)
      }
      HV() {
        var mm;
        null === (mm = this.pipeVisualizer) || void 0 === mm || mm.HV()
      }
      onPlayerAttemptAltAction(mm, Tm, fm, hm, Am, xm) {
        var wm;
        if (!im.has(this.api.getMetaInfo(Am).rootName)) return;
        const Dm = null === (wm = this.api.MTm(mm)) || void 0 === wm ? void 0 : wm.name;
        return void 0 !== Dm && am.has(Dm) ? "preventAction" : void 0
      }
    }
    const pm = function(mm, Tm, fm) {
      if ("survivalFactory" !== fm && "survivalFactoryPersistent" !== fm) {
        return {}
      }
      const hm = new Rm;
      return {
        onCreate: mm => {
          hm.onCreate(mm)
        },
        onClose: () => {
          hm.onClose()
        },
        onReceivedMessageFromServer: (mm, Tm) => {
          hm.onReceivedMessageFromServer(mm, Tm)
        },
        DE: () => {
          hm.HV()
        },
        altVetoBlocks: Dm,
        onPlayerAttemptAltAction: (mm, Tm, fm, Am, am, xm) => hm.onPlayerAttemptAltAction(mm, Tm, fm, Am, am, xm)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);