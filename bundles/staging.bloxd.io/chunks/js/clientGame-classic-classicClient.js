export const id = 12;
export const ids = [12];
export const modules = {
  38086: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk
    });
    var Dk = ik(38088);
    const fk = [0, 0, 0];
    class Sk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fk;
        this.pool = kk, this.origin = ek, this.count = 0, this.free = []
      }
      take() {
        var kk;
        const ek = null !== (kk = this.free.pop()) && void 0 !== kk ? kk : this.count++;
        return ek >= this.pool.vK && this.pool.grow(Math.max(2 * this.pool.vK, ek + 1)), this.hide(ek), ek
      }
      release(kk) {
        this.hide(kk), this.free.push(kk)
      }
      write(kk, ek, ik, fk) {
        const {
          records: Sk
        } = this.pool, {
          origin: bk
        } = this, rk = kk * Dk.b;
        Sk[rk] = ek - bk[0], Sk[rk + 1] = ik - bk[1], Sk[rk + 2] = fk - bk[2], Sk[rk + Dk.d] = 0, this.pool.markDirty(kk)
      }
      hide(kk) {
        this.pool.records[kk * Dk.b + Dk.d] = 1, this.pool.markDirty(kk)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class bk {
      constructor(kk, ek, ik) {
        this.api = kk, this.model = ek, this.initialCapacity = ik, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(kk) {
        let ek = this.kinds.get(kk);
        if (void 0 === ek) {
          const ik = this.api.createInstancePool({
            ...this.model,
            item: kk
          }, this.initialCapacity);
          null === ik || void 0 === ik || ik.setOrigin(this.origin[0], this.origin[1], this.origin[2]), ek = ik && new Sk(ik, this.origin), this.kinds.set(kk, ek)
        }
        return ek
      }
      follow(kk) {
        const {
          origin: ek
        } = this;
        if (Math.abs(kk[0] - ek[0]) <= 512 && Math.abs(kk[1] - ek[1]) <= 512 && Math.abs(kk[2] - ek[2]) <= 512) return !1;
        ek[0] = Math.floor(kk[0]), ek[1] = Math.floor(kk[1]), ek[2] = Math.floor(kk[2]);
        for (const ik of this.kinds.values()) null === ik || void 0 === ik || ik.pool.setOrigin(ek[0], ek[1], ek[2]);
        return !0
      }
      commit() {
        for (const kk of this.kinds.values()) null === kk || void 0 === kk || kk.commit()
      }
      dispose() {
        for (const kk of this.kinds.values()) null === kk || void 0 === kk || kk.dispose();
        this.kinds.clear()
      }
    }
  },
  38847: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => Kk
    });
    const Dk = "Pipe",
      fk = "Extractor Pipe",
      Sk = (new Set([Dk, fk]), new Set([Dk, fk, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var bk = ik(38086);
    class rk {
      constructor(kk) {
        this.api = kk, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new bk.e(kk, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(kk) {
        if (kk.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${kk.id} with < 2 waypoints`);
        const ek = this.kinds.kindOf(kk.itemName);
        if (!ek) return void(this.unshown.has(kk.itemName) || (this.unshown.add(kk.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${kk.itemName}"`)));
        this.remove(kk.id);
        const ik = function(kk) {
          return (kk.waypoints.length - 1) / 2 * 1e3
        }(kk);
        if (Date.now() - kk.startTimeMs > ik + 2e3) return;
        const Dk = ek.take();
        this.items.set(kk.id, {
          kind: ek,
          slot: Dk,
          waypoints: kk.waypoints,
          startTimeMs: kk.startTimeMs,
          durationMs: ik
        })
      }
      onEnd(kk) {
        this.remove(kk.id)
      }
      Iy() {
        if (0 === this.items.size) return void this.kinds.commit();
        const kk = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [ek, ik] of this.items) kk - ik.startTimeMs > ik.durationMs + 2e3 ? this.remove(ek) : this.write(ik, kk);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(kk) {
        const ek = this.items.get(kk);
        ek && (ek.kind.release(ek.slot), this.items.delete(kk))
      }
      write(kk, ek) {
        const ik = kk.waypoints.length - 1;
        let Dk = (ek - kk.startTimeMs) / kk.durationMs;
        Dk < 0 ? Dk = 0 : Dk > 1 && (Dk = 1);
        const fk = Dk * ik;
        let Sk = Math.floor(fk);
        Sk >= ik && (Sk = ik - 1);
        const bk = fk - Sk,
          [rk, Pk, mk] = kk.waypoints[Sk],
          [Mk, Kk, xk] = kk.waypoints[Sk + 1];
        kk.kind.write(kk.slot, rk + (Mk - rk) * bk + .5, Pk + (Kk - Pk) * bk + .5, mk + (xk - mk) * bk + .5)
      }
    }
    const Pk = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      mk = new Set(Pk);
    class Mk {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(kk) {
        this.api = kk, this.pipeVisualizer = new rk(kk)
      }
      onClose() {
        var kk;
        null === (kk = this.pipeVisualizer) || void 0 === kk || kk.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(kk, ek) {
        const {
          pipeVisualizer: ik
        } = this;
        if (ik)
          if ("pipeItemSpawnBatch" === kk)
            for (const Dk of ek.items) ik.onSpawn(Dk);
          else if ("pipeItemEndBatch" === kk)
          for (const Dk of ek.items) ik.onEnd(Dk)
      }
      Iy() {
        var kk;
        null === (kk = this.pipeVisualizer) || void 0 === kk || kk.Iy()
      }
      onPlayerAttemptAltAction(kk, ek, ik, Dk, fk, bk) {
        var rk;
        if (!mk.has(this.api.getMetaInfo(fk).rootName)) return;
        const Pk = null === (rk = this.api.jek(kk)) || void 0 === rk ? void 0 : rk.name;
        return void 0 !== Pk && Sk.has(Pk) ? "preventAction" : void 0
      }
    }
    const Kk = function(kk, ek, ik) {
      if ("survivalFactory" !== ik && "survivalFactoryPersistent" !== ik) {
        return {}
      }
      const Dk = new Mk;
      return {
        onCreate: kk => {
          Dk.onCreate(kk)
        },
        onClose: () => {
          Dk.onClose()
        },
        onReceivedMessageFromServer: (kk, ek) => {
          Dk.onReceivedMessageFromServer(kk, ek)
        },
        Px: () => {
          Dk.Iy()
        },
        altVetoBlocks: Pk,
        onPlayerAttemptAltAction: (kk, ek, ik, fk, Sk, bk) => Dk.onPlayerAttemptAltAction(kk, ek, ik, fk, Sk, bk)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);